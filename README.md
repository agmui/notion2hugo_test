# rhit_docs
Documentation repo for RHIT robomasters team 

link: [https://agmui.github.io/rhit_docs.github.io/docs/](https://agmui.github.io/notion2hugo_test/)

## when setting up
you may need to run this command after getting everything to work:
this fixes the landing page issue of feature grid
[github issue](https://github.com/colinwilson/lotusdocs/issues/143#issuecomment-1882414712)

`go get github.com/colinwilson/lotusdocs@release`

or

`go get github.com/colinwilson/lotusdocs@128b0ae`

or what ever commit you want

this just changes the go.mod file


#### Documentation software
[lotusdocs](https://lotusdocs.dev/docs/)

#### To preview website
```shell
hugo serve -D
```
#### create new page/directory
```shell
hugo new docs/Wiring/links.md
```

## Notion to markdown generation

This repo uses [notion-hugo-exporter](https://github.com/agmui/notion-hugo-exporter/tree/getSubDir)
and displays the resulting markdown inside of lotus docs theme

notion-hugo-exporter uses [notion-to-md](https://github.com/souvikinator/notion-to-md) package under the 
hood to convert notion blocks into markdown