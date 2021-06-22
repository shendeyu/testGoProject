// =================================================================================
// This is auto-generated by GoFrame CLI tool only once. Fill this file as you wish.
// =================================================================================

package dao

import (
	"focus/app/dao/internal"
)

// fileDao is the manager for logic model data accessing and custom defined data operations functions management.
// You can define custom methods on it to extend its functionality as you wish.
type fileDao struct {
	*internal.FileDao
}

var (
	// File is globally public accessible object for table gf_file operations.
	File fileDao
)

func init() {
	File = fileDao{
		internal.NewFileDao(),
	}
}

// Fill with you ideas below.
