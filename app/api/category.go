package api

import (
	"focus/app/model"
	"focus/app/service"
	"focus/library/response"
	"github.com/gogf/gf/net/ghttp"
)

var Category = new(categoryApi)

type categoryApi struct{}

// @summary 获取分类列表，构造成树形结构返回
// @tags    分类
// @produce json
// @param   contentType query string true  "分类类型:topic, ask, article, reply，当传递空时表示获取所有栏目"
// @router  /category/tree [GET]
// @success 200 {array} model.CategoryTree "分类列表"
func (a *categoryApi) Tree(r *ghttp.Request) {
	var (
		data *model.CategoryApiGetTreeReq
	)
	if err := r.Parse(&data); err != nil {
		response.JsonExit(r, 1, err.Error())
	}
	if tree, err := service.Category.GetTree(r.Context(), data.ContentType); err != nil {
		response.JsonExit(r, 1, err.Error())
	} else {
		response.JsonExit(r, 0, "", tree)
	}
}
