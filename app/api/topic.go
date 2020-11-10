package api

import (
	"focus/app/model"
	"focus/app/service"
	"github.com/gogf/gf/net/ghttp"
)

var Topic = new(topicApi)

type topicApi struct{}

// @summary 展示主题首页
// @tags    主题
// @produce html
// @param   cate query int    false "栏目ID"
// @param   page query int    false "分页号码"
// @param   size query int    false "分页数量"
// @param   sort query string false "排序方式"
// @router  /topic [GET]
// @success 200 {string} html "页面HTML"
func (a *topicApi) Index(r *ghttp.Request) {
	var (
		data *model.ContentServiceGetListReq
	)
	if err := r.Parse(&data); err != nil {
		service.View.Render500(r, model.View{
			Error: err.Error(),
		})
	}
	data.Type = model.ContentTypeTopic
	if getListRes, err := service.Content.GetList(r.Context(), data); err != nil {
		service.View.Render500(r, model.View{
			Error: err.Error(),
		})
	} else {
		service.View.Render(r, model.View{
			Data: getListRes,
		})
	}
}

// @summary 展示主题详情
// @tags    主题
// @produce html
// @param   id path int false "主题ID"
// @router  /topic/detail/{id} [GET]
// @success 200 {string} html "页面HTML"
func (a *topicApi) Detail(r *ghttp.Request) {
	var (
		data *model.ContentApiDetailReq
	)
	if err := r.Parse(&data); err != nil {
		service.View.Render500(r, model.View{
			Error: err.Error(),
		})
	}
	if getDetailRes, err := service.Content.GetDetail(r.Context(), data.Id); err != nil {
		service.View.Render500(r)
	} else {
		// 浏览次数增加
		service.Content.AddViewCount(r.Context(), data.Id, 1)

		service.View.Render(r, model.View{
			Data: getDetailRes,
		})
	}
}

// @summary 展示创建主题页面
// @tags    主题
// @produce html
// @router  /topic/create [GET]
// @success 200 {string} html "页面HTML"
func (a *topicApi) Create(r *ghttp.Request) {
	service.View.Render(r)
}

// @summary 展示修改主题页面
// @tags    主题
// @produce html
// @param   id query int true "主题ID"
// @router  /topic/update [GET]
// @success 200 {string} html "页面HTML"
func (a *topicApi) Update(r *ghttp.Request) {
	var (
		data *model.ContentApiUpdateReq
	)
	if err := r.Parse(&data); err != nil {
		service.View.Render500(r, model.View{
			Error: err.Error(),
		})
	}
	if getDetailRes, err := service.Content.GetDetail(r.Context(), data.Id); err != nil {
		service.View.Render500(r)
	} else {
		service.View.Render(r, model.View{
			Data: getDetailRes,
		})
	}
}
