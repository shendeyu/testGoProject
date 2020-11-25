// ==========================================================================
// This is auto-generated by gf cli tool. You may not really want to edit it.
// ==========================================================================

package internal

import (
	"github.com/gogf/gf/os/gtime"
)

// Message is the golang structure for table gf_reply.
type Message struct {
	Id           uint        `orm:"id,primary"     json:"id"`             // 回复ID
	UserId       uint        `orm:"user_id"        json:"user_id"`        // 发送者用户ID/0-系统消息
	TargetUserId uint        `orm:"target_user_id" json:"target_user_id"` // 接受者用户ID/
	TargetId     uint        `orm:"target_id"      json:"target_id"`      // 消息目标ID
	TargetType   string      `orm:"target_type"    json:"target_type"`    // 消息类型: content, reply
	Action       string      `orm:"action"         json:"action"`         // 消息类型: topic:zan,topic:reply,reply:zan,reply:cai
	IsRead       uint        `orm:"is_read"        json:"is_read"`        // 是否阅读 0-否/1-是
	CreatedAt    *gtime.Time `orm:"created_at"     json:"created_at"`     // 创建时间
	UpdatedAt    *gtime.Time `orm:"updated_at"     json:"updated_at"`     // 更新时间
}
