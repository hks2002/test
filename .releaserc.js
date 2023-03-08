/******************************************************************************
 * @Author                : Robert Huang<56649783@qq.com>                     *
 * @CreatedDate           : 2023-02-04 13:57:38                               *
 * @LastEditors           : Robert Huang<56649783@qq.com>                     *
 * @LastEditDate          : 2023-02-05 03:46:28                               *
 * @FilePath              : crystal-report-server-java/.releaserc.js          *
 * @CopyRight             : MerBleueAviation                                  *
 *****************************************************************************/

/* eslint-disable */
module.exports = {
  'repositoryUrl': 'https://github.com/hks2002/crystal-report-server-java.git',
  'branches': 'master',
  'tagFormat': 'v${version}',
  'plugins': [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github'
  ]，
  "release": {
    "analyzeCommits": "@semantic-release/commit-analyzer",
    //"verifyConditions": "@semantic-release/npm",
    //"prepare": "@semantic-release/npm",
    "generateNotes" : "@semantic-release/release-notes-generator",
    "publish": "@semantic-release/github",
    "success": false,
    "fail": false,
    "branch": "master",
    "npmPublish": false,
    "tarballDir": "target",
    "assets": "target/*.war"
  }
}
