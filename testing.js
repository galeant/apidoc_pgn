/**
* @api {post} /api/token Create Token

* @apiVersion 0.1.0
* @apiName CreateToken
* @apiGroup Authentication
*
* @apiDescription Digunakan untuk mendapatkan token yang akan di pakai untuk pemangilan method lain.
* @apiHeaderExample {json} Header-Example:
*     {
*       "Authorization": "Bearer 38de4608c876b1e720f9f61298477aab58924b5d"
*     }
* @apiParamExample {json} Request-Example:
*     {
*       "id": 4711
*     }
* @apiHeader {String} Authorization token for access other method.
* @apiParam {object} nama_foto nama foto sesuai di record berita
* @apiParam {string} path_foto path foto sesuai yang disimpan di record berita
* @apiSuccessExample {json} Success-Response:
    {
        "grant_type":"password",
        "client_id":"testclient",
        "client_secret":"testpass",
        "username":"corp\\sandi.hardi",
        "password":"popay"
    }
*/

/**
* @api {get} /images?name=:nama_foto&path=:path_foto&size=:nilai 2.Mengatur Ukuran Foto
* @apiVersion 0.1.0
* @apiName getImageSize
* @apiGroup Images
* @apiPermission public
*
* @apiDescription digunakan untuk mengatur ukuran images/gambar dari foto yang ada pada direktori server<br><ul><li> Small = 100 Pixels</li><li> Medium = 300 Pixels</li><li> Original = Size Asli</li></ul>
*
* @apiExample Cara penggunaan:
* http://api.linksaya.com//images?name=siraman.jpg&path=./images/2017/11/07&size=small
*
* @apiParam (bebek) {string} [nama_foto=bebek] nama foto sesuai di record berita
* @apiParam (bebek) {string} path_foto path foto sesuai yang disimpan di record berita
* @apiParam (bebek) {String=small,medium,original} nilai ukuran foto yang dinginkan (small|medium|original)
*/