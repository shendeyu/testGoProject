// ==========================================================================
// This is auto-generated by gf cli tool. Fill this file as you wish.
// ==========================================================================

package model

import (
	"focus/app/model/internal"
)

// Topic is the golang structure for table gf_topic.
type Topic internal.Topic

// API创建/修改话题基类
type TopicApiCreateUpdateBase struct {
	TopicDaoCreateUpdateBase
	CategoryId uint   `v:"required#请输入栏目ID"` // 栏目ID
	Title      string `v:"required#请输入话题标题"` // 标题
	Content    string `v:"required#请输入话题内容"` // 内容
}

// API创建话题
type TopicApiCreateReq struct {
	TopicApiCreateUpdateBase
}

// API修改话题
type TopicApiUpdateReq struct {
	TopicApiCreateUpdateBase
	Id *uint `v:"required#请选择需要修改的话题"` // 修改时ID不能为空
}

// API删除话题
type TopicApiDeleteReq struct {
	Id *uint `v:"required#请选择需要删除的话题"` // 删除时ID不能为空
}

// DAO创建/修改话题基类
type TopicDaoCreateUpdateBase struct {
	CategoryId uint     // 栏目ID
	Title      string   // 标题
	Content    string   // 内容
	Brief      string   // 摘要
	Thumb      string   // 缩略图
	Tags       []string // 标签名称列表，以JSON存储
	Referer    string   // 内容来源，例如github/gitee
}

// DAO创建话题
type TopicDaoCreateReq struct {
	TopicDaoCreateUpdateBase
}

// DAO修改话题
type TopicDaoUpdateReq struct {
	TopicDaoCreateUpdateBase
	Id uint
}
