module.exports = {
  css: {
    extract: false
  }
}

process.env.VUE_APP_GSHEET_TABLE_INDEX = process.env.NODE_ENV === 'development' ? 2 : 1
