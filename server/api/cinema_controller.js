import Cinema from '../models/cinema';
import _ from 'lodash';

export const getCinemaList = (req, res, next) => {
  let pageNumberRequested = req.query.pageNumber;
  let pageSizeRequested = req.query.pageSize;

  // Find 20 cinemas and return json response
  Cinema.paginate({}, { lean: false, leanWithId: false,
      page: parseInt(pageNumberRequested || 1), limit: parseInt(pageSizeRequested || 10) 
    }, (err, cinemas) => {
      if (!err) {
        let totalSize = JSON.stringify(cinemas.total || 0);
        let pageSize = JSON.stringify(cinemas.docs.length || 0);

        let modifiedDocs = _.map(cinemas.docs, (o) => { return _.pick(o, 'name', 'poster-image'); });

        res.json(
          {
            "page": {
              "title": "Romantic Comedy",
              "total-content-items" : totalSize,
              "page-num-requested" : pageNumberRequested,
              "page-size-requested" : pageSizeRequested,
              "page-size-returned" : pageSize,
              "content-items": {
                "content": modifiedDocs
              }
            }
          }
        )
      } else {
        res.json(
          {
            "error": JSON.stringify(err)
          }
        )
      }
    })
};