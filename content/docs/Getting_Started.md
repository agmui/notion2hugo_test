---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAD6N5R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCbWP%2BvfYlcUoUs6Ey549LreSMa8Fq3dF%2BdAyYm%2FhhYxwIhAIBe6yma92pFQ4m0ONSIfvweyQuer4zgnXgvAAsCtzqnKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIKOwTvN9410CTCukq3AN%2BLlEutbtr5wQ2W0toevIaspEcG0YTSGUPZjjTe2ua%2BOEuO3GyXpviavZA8eLAP%2BXaq8Lv%2FLzEkb2jnk7792bI1CQkE80Z7DcZKk%2FleB9EyrGHbvBkcYUoof9iLe%2BGXlSH5Os9EsbrJ3%2FrGAksTVEGUi0CvSH6fkCkPkUxZIWJV6DguikZ4747mKMRHY9qdoYqLnaV77LHlcBYHNnqA0nNMkujnLenbfGEl%2FM7svcJEVAWDgJFJbW9QCszv0gkLYraKjm4bj0HjUb7QfnUUSIePOKwWCkun1cYg31jT7md4k%2FKSP%2F6VOMM3Ouox7oNs5qmGnS5b6tpbPbkVPfkvttCWjUU7JHEWRSnGRzMnAQ5HUMy3zGcaC9lKa8FteaTZmJbZEFLv2DftYgdgtiC7ytVWmO%2FSQPBqOAA1tAyQUMl2EBbvreZ5Jf3RXAdIxC3S1M3M37u2B0aE5dqpesrRKv3MCPEHqXDaEoIWepprbUzH0Kym16LnfbDwkHB8Da6xhGIeSCOP94hLhxTIsl12L3ATx1HfRNdfOP4Iwk56ZLH0c1OjVIKo%2BOFFkaqSiLOz1Oqg77yZMAfOeot5iBBMLIu9f0pPRR8U1OWBSvLD8CGHelEmv%2BkcMcfAhwzJDDtg%2BPCBjqkAUAIWBfunQkiy%2FBcDjLE3nXV8W%2F6CsBe78JcOpERt59E50jtT7ZZBfYZ%2F7j1gA03bxz30eFDoT5H%2Bn%2FUgAoTcQcE3oADYishFD2acVGB6LjZdPuUvht09IC7AlpERGbi3ZZHj%2B0g6jh8PDhf6JBPNIc6MPYR%2FoMZ5V7YgoQzVeM765fY5KXAvd09jfSLojJ3Qar%2BKqcCG%2BgoKWnbYWR2okJsXXYT&X-Amz-Signature=e8f4469f60bb319e52083a8ba2e27ddd338af80befed713dc9e13adfeca6c968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAD6N5R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCbWP%2BvfYlcUoUs6Ey549LreSMa8Fq3dF%2BdAyYm%2FhhYxwIhAIBe6yma92pFQ4m0ONSIfvweyQuer4zgnXgvAAsCtzqnKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIKOwTvN9410CTCukq3AN%2BLlEutbtr5wQ2W0toevIaspEcG0YTSGUPZjjTe2ua%2BOEuO3GyXpviavZA8eLAP%2BXaq8Lv%2FLzEkb2jnk7792bI1CQkE80Z7DcZKk%2FleB9EyrGHbvBkcYUoof9iLe%2BGXlSH5Os9EsbrJ3%2FrGAksTVEGUi0CvSH6fkCkPkUxZIWJV6DguikZ4747mKMRHY9qdoYqLnaV77LHlcBYHNnqA0nNMkujnLenbfGEl%2FM7svcJEVAWDgJFJbW9QCszv0gkLYraKjm4bj0HjUb7QfnUUSIePOKwWCkun1cYg31jT7md4k%2FKSP%2F6VOMM3Ouox7oNs5qmGnS5b6tpbPbkVPfkvttCWjUU7JHEWRSnGRzMnAQ5HUMy3zGcaC9lKa8FteaTZmJbZEFLv2DftYgdgtiC7ytVWmO%2FSQPBqOAA1tAyQUMl2EBbvreZ5Jf3RXAdIxC3S1M3M37u2B0aE5dqpesrRKv3MCPEHqXDaEoIWepprbUzH0Kym16LnfbDwkHB8Da6xhGIeSCOP94hLhxTIsl12L3ATx1HfRNdfOP4Iwk56ZLH0c1OjVIKo%2BOFFkaqSiLOz1Oqg77yZMAfOeot5iBBMLIu9f0pPRR8U1OWBSvLD8CGHelEmv%2BkcMcfAhwzJDDtg%2BPCBjqkAUAIWBfunQkiy%2FBcDjLE3nXV8W%2F6CsBe78JcOpERt59E50jtT7ZZBfYZ%2F7j1gA03bxz30eFDoT5H%2Bn%2FUgAoTcQcE3oADYishFD2acVGB6LjZdPuUvht09IC7AlpERGbi3ZZHj%2B0g6jh8PDhf6JBPNIc6MPYR%2FoMZ5V7YgoQzVeM765fY5KXAvd09jfSLojJ3Qar%2BKqcCG%2BgoKWnbYWR2okJsXXYT&X-Amz-Signature=e3836aa7d139325458107daa1b9711594c4e37b1274f587f8abe21f44c4b0fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAD6N5R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCbWP%2BvfYlcUoUs6Ey549LreSMa8Fq3dF%2BdAyYm%2FhhYxwIhAIBe6yma92pFQ4m0ONSIfvweyQuer4zgnXgvAAsCtzqnKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIKOwTvN9410CTCukq3AN%2BLlEutbtr5wQ2W0toevIaspEcG0YTSGUPZjjTe2ua%2BOEuO3GyXpviavZA8eLAP%2BXaq8Lv%2FLzEkb2jnk7792bI1CQkE80Z7DcZKk%2FleB9EyrGHbvBkcYUoof9iLe%2BGXlSH5Os9EsbrJ3%2FrGAksTVEGUi0CvSH6fkCkPkUxZIWJV6DguikZ4747mKMRHY9qdoYqLnaV77LHlcBYHNnqA0nNMkujnLenbfGEl%2FM7svcJEVAWDgJFJbW9QCszv0gkLYraKjm4bj0HjUb7QfnUUSIePOKwWCkun1cYg31jT7md4k%2FKSP%2F6VOMM3Ouox7oNs5qmGnS5b6tpbPbkVPfkvttCWjUU7JHEWRSnGRzMnAQ5HUMy3zGcaC9lKa8FteaTZmJbZEFLv2DftYgdgtiC7ytVWmO%2FSQPBqOAA1tAyQUMl2EBbvreZ5Jf3RXAdIxC3S1M3M37u2B0aE5dqpesrRKv3MCPEHqXDaEoIWepprbUzH0Kym16LnfbDwkHB8Da6xhGIeSCOP94hLhxTIsl12L3ATx1HfRNdfOP4Iwk56ZLH0c1OjVIKo%2BOFFkaqSiLOz1Oqg77yZMAfOeot5iBBMLIu9f0pPRR8U1OWBSvLD8CGHelEmv%2BkcMcfAhwzJDDtg%2BPCBjqkAUAIWBfunQkiy%2FBcDjLE3nXV8W%2F6CsBe78JcOpERt59E50jtT7ZZBfYZ%2F7j1gA03bxz30eFDoT5H%2Bn%2FUgAoTcQcE3oADYishFD2acVGB6LjZdPuUvht09IC7AlpERGbi3ZZHj%2B0g6jh8PDhf6JBPNIc6MPYR%2FoMZ5V7YgoQzVeM765fY5KXAvd09jfSLojJ3Qar%2BKqcCG%2BgoKWnbYWR2okJsXXYT&X-Amz-Signature=217acb29c71bc85c054451cd1149f8a9cf5c4e7dbf386aecd4d7237fd15ab3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6QOMZU%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCuiaO6%2FkDcbeQWChO6Llo3NiYrTcwVziYyS6PI7i4nHQIhAKQVzT%2Fxf2RnFzwtjF9YfPFv%2BPZhDTd%2BFDmdi3kIJuKiKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZl%2B7%2F0XEus5yHZigq3AOw2%2BYMgIh6qCV96mo1K8A2JCoV0qFNacT9gn6R9FNbrm2l6MQ0Oe%2FbYl68r5sYmU6CZKknKA0CzOXUUPqo%2FQXlVvjRHYYzm9qxismhd2%2Fcp%2Bs%2FdifYBofTs7I4WvufEmwpkU9ZfjSNRZmOPgNKlJimY%2FBaVhi%2BjbyVMoyCmALr5DGxaLfkuCKQbI%2BJhpMJzPSmRh24PJgMvUfy05Y%2BKotCuLZz%2BIkLx7BgZvStTQHkiJalmKrKyk%2BAHzhZeupVjdaig9o0vDn0e9YNpp6Ww5AEL2B96vCQvr3ZrVBcxK%2B38ZtbaQ9Ma6wp22E4v8XfBVXBA%2F7Fqz99nTgg7Pf422HQPPP3P9JSduhcfWZzEA%2BSYZXSg6TT5XJt%2BetTa3Nm%2FCSRXOCu%2BGZ91PgC6JrzRrkl3lDDW63xRarxFpjNbgb6OSXJTOwZh%2BCKWnqRFvBUBmssJSULyNgv8XX1iIcmViNfdkTYoU8VUa9FS9j5v83cm3pFjX%2BUmTG59vJA%2FHqu6cs5oEgfiyZTJc9IDxibE%2B5B0YCceZebciFuz89aYRDRV50HG2wOrIURCJzoERPUIIYDNRqLTDc5PUCDHuFkv%2FYFOWLSS%2FGABrWsiQSSQVjlCnB2bTQVVoK4GN13NDCVqOLCBjqkAUvDlFN3AoSH1wa2pmG5G6q2LOjMhpkndaBcFzFRzOA%2B7f58HDKnlKTY9hSFye62ARjjJtBlmak0ardFsFMfvwedfXXgjyqEruWLKIZaO1eXT1rzgDChflKHHbmZRruCBgWxi4ajunX5cyNLdBqAaa7x1RxQb2LXsJ2TaP4Bk4EkcmWm2Mtklv1XlieCYEWJqL1PYvr1fEz1lEViLnvHs58eNPF%2F&X-Amz-Signature=7a919f57e6a37bf58ed45c7b017b5a5b8ce1f6290eb647317a2bd3ef84ff1b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZZK74A%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCCgqk8MG0mnDQ9SVERzrzrzhbHWxEU%2Fl5gkPg3FRVbywIgVbmcKMojFxkZByca5xsckG1qid4obg5d2ElPIx6HxPYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNhXlVOBGRmvpYOCrcA2FjAGP3RBjKfS9qz0WMh6TnHNFnNDcW3uh6ZI69zRtIUuLkub3gBOxZLcrCU5PWycXYcJW3YuDv2Uft2pACXpjI3P7h7V2T9gdE5R3XwhFe1Adbyw1vZjqcqXLuHJu5y0yQ%2B0LEvFGovq7CnsDO5cvTmCM%2B4YnFxijAgo3tEeqOWwatJC3hHBzAFw2PFNEdH5QccIHxwRNs5BcBqj73NlK%2FvhTHf%2Fc5bKNFd8YWgT847Z1B0g8b%2BGKa1%2FYBJrM0jFSK18UsXHdM6%2BPzwUz2a%2B8HeVeVNurGBYnXMusoUHyv3NuIYSa6cyhqi%2FaS7%2BHNP6x8wTzftP1Unvgq4IrOM3mrSXOrV%2Fpt3CN1lLTcdfYIkiKZzyv2OaPMn5eEX1q6rTxmHy1feTec%2FmZeinelKrndZYZHBwcsZs0mAY%2FbGCT1%2Bt5j6w8l7qSQ5xFL2sxEfguberXFFwyJt1SIaL2uegHj4PuvnmfyCFrwh8cqw8KJg6p54n%2B%2BIJdBXgOLP9jpQ4u3dqYBvzc2lbbjbJbnuM0Kw8RxNG2fQW2PgEIcXyE1s3wdncEDrFOvSr6Pkg6RKiIBGIoR%2B4c0I%2B2Ru6Jo53p%2FbqfbRS8iLb1CsynlEeasv%2BBM%2FNggVswcffwXMNOs48IGOqUBqrlLzEFp9aINdMD76hsWjzbNLSn6DGQNmelq5jcypZer8M3JZo1lu7G8RdtaC%2Bm9af8sCT5nZfBMWTcE7JX9nmYY8Vaz0fLiorOKBkHZQur7sQxDPLyYLvOlcg32yYg2h25O7NZHYkjG0iBq8ujcQyB5gBqNDi1MzvG%2B%2BE%2FyYzQcdsPIwN%2FTTIUjTB0GIj7h95VZ0WpVOCvpoMkt9KHb3Zo8AAPL&X-Amz-Signature=975e32732ed3569d4134457708b9e94c859027d93fe5df4c405d4ef9e735140a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAAD6N5R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCbWP%2BvfYlcUoUs6Ey549LreSMa8Fq3dF%2BdAyYm%2FhhYxwIhAIBe6yma92pFQ4m0ONSIfvweyQuer4zgnXgvAAsCtzqnKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIKOwTvN9410CTCukq3AN%2BLlEutbtr5wQ2W0toevIaspEcG0YTSGUPZjjTe2ua%2BOEuO3GyXpviavZA8eLAP%2BXaq8Lv%2FLzEkb2jnk7792bI1CQkE80Z7DcZKk%2FleB9EyrGHbvBkcYUoof9iLe%2BGXlSH5Os9EsbrJ3%2FrGAksTVEGUi0CvSH6fkCkPkUxZIWJV6DguikZ4747mKMRHY9qdoYqLnaV77LHlcBYHNnqA0nNMkujnLenbfGEl%2FM7svcJEVAWDgJFJbW9QCszv0gkLYraKjm4bj0HjUb7QfnUUSIePOKwWCkun1cYg31jT7md4k%2FKSP%2F6VOMM3Ouox7oNs5qmGnS5b6tpbPbkVPfkvttCWjUU7JHEWRSnGRzMnAQ5HUMy3zGcaC9lKa8FteaTZmJbZEFLv2DftYgdgtiC7ytVWmO%2FSQPBqOAA1tAyQUMl2EBbvreZ5Jf3RXAdIxC3S1M3M37u2B0aE5dqpesrRKv3MCPEHqXDaEoIWepprbUzH0Kym16LnfbDwkHB8Da6xhGIeSCOP94hLhxTIsl12L3ATx1HfRNdfOP4Iwk56ZLH0c1OjVIKo%2BOFFkaqSiLOz1Oqg77yZMAfOeot5iBBMLIu9f0pPRR8U1OWBSvLD8CGHelEmv%2BkcMcfAhwzJDDtg%2BPCBjqkAUAIWBfunQkiy%2FBcDjLE3nXV8W%2F6CsBe78JcOpERt59E50jtT7ZZBfYZ%2F7j1gA03bxz30eFDoT5H%2Bn%2FUgAoTcQcE3oADYishFD2acVGB6LjZdPuUvht09IC7AlpERGbi3ZZHj%2B0g6jh8PDhf6JBPNIc6MPYR%2FoMZ5V7YgoQzVeM765fY5KXAvd09jfSLojJ3Qar%2BKqcCG%2BgoKWnbYWR2okJsXXYT&X-Amz-Signature=ba0a126422d5b9a6f51989151db01636555a77cbc232d0f82016691d06d8d3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
