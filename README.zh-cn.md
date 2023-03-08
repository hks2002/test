# RptSrv (水晶报表服务器)

![Github Version](https://img.shields.io/github/package-json/v/hks2002/crystal-report-server-java) ![Github Build Status](https://img.shields.io/github/actions/workflow/status/hks2002/crystal-report-server-java/Build.yml) ![GitHub License](https://img.shields.io/github/license/hks2002/auto-header-plus)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

一个基于 java 的水晶报表服务器。

### 如何使用

1. 在 `application.properties` 中配置数据库连接信息。
2. 根据需要在 `pom.xml` 中添加数据库驱动。
3. 运行 `maven package` 生成 `war` 包。
4. 将 `war` 包拷贝到 tomcat 中运行。
5. 将水晶报表文件拷贝到 `WEB-INF/classes/reports` 文件夹中，可以随时添加。
6. 在浏览器中打开 `http://server:port/Report/{ReportTemplateName}/{format}?param0=val0&param1=val1`，即可看到报表。

> 说明：`{ReportTemplateName}` 是报表文件名，不包含扩展名；`{format}` 是报表格式，如 `pdf` `doc` `xls`；`param0` 和 `param1` 是报表参数，如果有一个参数名包含 `NO`，则该参数值将作为文件名。
