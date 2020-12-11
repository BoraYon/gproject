const router = require('express').Router();
const axios = require('axios')
const querystring = require('querystring');


router.route('/search').get(async (req, res) => {

    const disease = req.query.disease;
    //const domain = req.body.domain;
    const path = req.query.path;
    const list = await axios.post('https://www.ebi.ac.uk/europepmc/webservices/rest/searchPOST',
        querystring.stringify({
            query: disease+" "+path,
            format:'json',
            pageSize: 10,resultType:'core'
        }),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    ).then((res)=>{
        if(res.status == 200){
            console.log("OK");
            console.log(res.data.resultList);
            res=res.data.resultList.result
            return res;
        }
    }).catch(error=>{throw error})

    //For fulltext article
    //
    /*const pmid = 33274046;
    console.log("pmid::",list[0].pmid)
    const text = await axios.get(`https://www.ebi.ac.uk/europepmc/webservices/rest/${pmid}/fullTextXML`).then((res)=>{
        if(res.status == 200){
            console.log("Basarili_text");
            console.log(res.data);
            return res.data;
        }
    })*/
});


module.exports = router;
