---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3DSAXN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQXCNTBbij2JlRP0QmOwJZtIQ8JAiiVBaZkOTbOqdSmAiEAgG3%2BTUvbCdWbNyJnSZSvQHnugq6S%2B2aeFu4%2FF7pP3Goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHx1QdF9mpX5%2BjHFWircA1eyAJIzGbdTg174LRIdK66mJ4OzdXyTcaUKcWVU%2BDzTV%2BhnEzpv2Hhql4bBkdsP5Y%2FetJgYdQn1hYYzlHRwBRhU%2BRH7HDu1T1aeO9xV%2FkuoW63wgx8hXk601XQWq9d4SUwMorQTQ13fZe0ZSoc2dQ7%2FymE7rozPKjEf2e75OH16%2BF9MhvkHjY39kT8JD3N2dHnb3ppSyDt4dCYMgxj94Xl8D4WDRm4bINfbDImnPVfFgXzOiyfNrkddyz5lF%2B9ocKOrgeFWrboUs0DEpKAwMcpyQDfE6v%2BVZB9yhh7ErAZI8%2FRTUREQFt6FZXgzvpGZMgcWiLESDWUhjpQMYMz5Ou4hiiHqjjwv7UeQrpI6vlzHkPCM7AA1WHomtAoFeJyFTpGrKhKkh9SdYqYSI1PvQY5XUzhIr%2BEiolSfXMVa5rGtYap2vPwyNDhyZiFkTPej6coT44u9dtDUOYbbzfJ2kqGBC%2BoOBcXpjpsjlhsvZS8S0i7q5MSivP3jk4KQ4xf5wegyTV1%2FVLATFjeqmkGCxMalb1Qgn0l8ZLc3Y2%2FGhDm2bfqg%2BChqMWhegqciNr7C2Dt83st215qhXnikqaqkc2wtL1ha8Pnz5zaijsCRhYgEZiC43XpOsqMhicrQMLK93L4GOqUBRaoBHcSXIwGzmbJlWvmF7ZCPyrFwJmcVwMS50SIQ2Xqve0rKB43DrE3FVodTEkyfdFkOQGqfR4rdHf%2FtcZF1aOlRpIlJFxmGvhTgK1DVOI207W6tpjRTt2lCU86p1kUi8qXbWcg6zeBJlbYkc%2B2KOD3mRkhlOxwW1IR%2FC%2FzWy7RxMCmySA66385nrTck3NtoQBoBrZcMhs%2FcxhLwWAdI9M49toYr&X-Amz-Signature=f55965c00851c7ef76911fcc8bef7800bf17968bb7d438289287efeb88939835&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3DSAXN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQXCNTBbij2JlRP0QmOwJZtIQ8JAiiVBaZkOTbOqdSmAiEAgG3%2BTUvbCdWbNyJnSZSvQHnugq6S%2B2aeFu4%2FF7pP3Goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHx1QdF9mpX5%2BjHFWircA1eyAJIzGbdTg174LRIdK66mJ4OzdXyTcaUKcWVU%2BDzTV%2BhnEzpv2Hhql4bBkdsP5Y%2FetJgYdQn1hYYzlHRwBRhU%2BRH7HDu1T1aeO9xV%2FkuoW63wgx8hXk601XQWq9d4SUwMorQTQ13fZe0ZSoc2dQ7%2FymE7rozPKjEf2e75OH16%2BF9MhvkHjY39kT8JD3N2dHnb3ppSyDt4dCYMgxj94Xl8D4WDRm4bINfbDImnPVfFgXzOiyfNrkddyz5lF%2B9ocKOrgeFWrboUs0DEpKAwMcpyQDfE6v%2BVZB9yhh7ErAZI8%2FRTUREQFt6FZXgzvpGZMgcWiLESDWUhjpQMYMz5Ou4hiiHqjjwv7UeQrpI6vlzHkPCM7AA1WHomtAoFeJyFTpGrKhKkh9SdYqYSI1PvQY5XUzhIr%2BEiolSfXMVa5rGtYap2vPwyNDhyZiFkTPej6coT44u9dtDUOYbbzfJ2kqGBC%2BoOBcXpjpsjlhsvZS8S0i7q5MSivP3jk4KQ4xf5wegyTV1%2FVLATFjeqmkGCxMalb1Qgn0l8ZLc3Y2%2FGhDm2bfqg%2BChqMWhegqciNr7C2Dt83st215qhXnikqaqkc2wtL1ha8Pnz5zaijsCRhYgEZiC43XpOsqMhicrQMLK93L4GOqUBRaoBHcSXIwGzmbJlWvmF7ZCPyrFwJmcVwMS50SIQ2Xqve0rKB43DrE3FVodTEkyfdFkOQGqfR4rdHf%2FtcZF1aOlRpIlJFxmGvhTgK1DVOI207W6tpjRTt2lCU86p1kUi8qXbWcg6zeBJlbYkc%2B2KOD3mRkhlOxwW1IR%2FC%2FzWy7RxMCmySA66385nrTck3NtoQBoBrZcMhs%2FcxhLwWAdI9M49toYr&X-Amz-Signature=6bbefecf6a79cd7102e7dad2d501a53362e98d0d0c5afd859d06bac6e5bc5010&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB2WKN2R%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD19G8yxf4s1H6Erup5%2F%2B8ipPIz35iApf6yIel6tVTX%2BwIgEidQZahORH%2FD87XAlRYyRZ4ljSfeyf0R4uiUiJCWIDUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMk0YsK5PD8jCkMqfyrcA11tny6GNM4bjBW0tl7kaOCX07%2F5MhILpi5ii2z76RjZDY2NdPl8ApPvkbUOtysgf3Dc8SeCs3pnofFyBRoTPjVtwLy%2BLrTqr1b7ln%2BZzVEHddj5pteHqXN03FJUIL8nRoqjwjbb1e4nmqFASgssBE0niQ%2F%2B%2FeNRgH56TditHu5S9sttTU9%2B%2FOOPeeL7F20lVAk8bKA0UfNjvh5zQ5mJ5sJqm%2Fh9370svbz9nG6pOrI39Sbl3AQx7sP3ei4x%2Fx8LXCWkQbSxeJBvcsLSa9KIFImxXVuaEMriJcUIFny93XW%2FFKixfjnqjd7VTOmBtjVUlR%2Fsi9rMRpU56JLofhzMUlpw7L79wk3kICnJtZNfHlpY8JmtVCEslLLGzZOFvR5tNmNxiAlkgcHhB7wgUUQ66NmpRcTRu0JRlSedQt5plExe7JglOIk1Gd6Cshzj0olUuDY5mtbueX18xCW%2BkyYfs451LokNtX7mdUiOkWwY8xX1rcGJXHsNLucCYm8le2RTi9IyDzR8EOMU1hXy96L6ECjSgzwYf7Xtn0%2BGvKeGtdRLYRhdmvvq4Mk5VgkENNyaafxp%2FwYMDhIRkyLz2xTQ8KPYT4JxT4QHzUKKE2wTZG8zvRaGOVrJNx8hIiuQMOa93L4GOqUBTnNiONznMq7OrWSNbmwevw8hOdscb0UUiG4GqYsoWIfXS%2FDR1Rgodd2TRwTeMPXH6BXvxPtHokYt5L9VWI%2FLOgv1P0iykpULfTaeYx%2BfqIh7L6wYxKTXCuf1s22Zp6pqPza1hKEBsut81QRksQ3OW%2BS6I%2FNJnfxKgmZXo5HEgaLv9ML9qJDsjujrPkCkIqG1cyQaUGBaIz85rmRDA8jiG5i%2B9lyC&X-Amz-Signature=8431cbc492de74dae8beed7bac459c72a0668ab69dc22f2b65aebf178045bd98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USN3ARX4%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BtZCIH4zryVvIW92xcr2xR7xDjhv0xVq7%2FyFcBy5SbgIgU5gL6eU3BFEyiInPl5hBJ8pHirOS%2Fyrp5Hd6aUz0iFcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCtPdzBrx1pgPQ%2FQFyrcA5BLf8fZybNlFY%2FSNrtjM1HE0Tryl2rQlpuoS6ESV2dqiZlTr4M8HBqoFtwKgp7VjcfSp%2BUGCnzYeMDy%2Bo1riJwvCV%2FgUBkrk9l08hIizCrMAPv8WQIelCUaP4VONuK%2FrmwNrkkAu7nPR2%2B2fZnJPkDtweVwngukWHjQ8lPOUnaFnQOfBxZa16%2FQEemIW6kCw2zPwFximD9U0WN4bb8LaiS%2FTW7RC45JeFBBTgH1YeIlYokLf5LUq2zKU0EpeNgkH6ZWTGSo3VpKZrX4n9Gl5YyCil1vI52icR0HoHH1kTh7%2BjFEKQHYkFIBbZMKW3t0HbO7YKm%2FKXfiPq3SyBi3QHR%2BJod5DWmPYSy%2BdEoUMbmX%2FO%2Fy%2BWunBzOT5l03VKrG326o6DzQWR898j%2B41mjqHX7NAB2dIMDMGV%2FrUpp%2FYZv6v7uzydiPvwRByFr%2BZ5F2WHCXJhqLLvhBnlni0uz9vqdnky6Qu2vJlg0HXMhvrfXMVB0G7MA7Oy3JQyZU8w75jl5ODLUWfxw%2F4o8wviou9r3gqpMsw90bMmnyVzWjxSaYuhTgptYekzdt8circ6L4SM76NZpxWl7adSMPXwZj3hc1blKpkY7%2Fo2WrI1GbERh9Lo86h64nrOyOzGgMMIO%2B3L4GOqUB%2BP1Q7NS9YeFLjfh18j7hAJ8V0%2BtRKgNV2OXJLqQTBbWN8oP5%2FsYR4hV0ePj3qqsDEuSG7JvhN22fQxFAvW44qDUp7wGGPF1l22pTg9YnDNJADdkWR5kU99UVUWB3NlB52zlymntBmtgdA0EOt9yYQ7w%2BDxOb0kdXtEJbyzYM4MZf6SfT%2B%2FtrQYUmiTu%2BWnkjl06dmNXIWFq4V9G%2FMycncvUuMxaM&X-Amz-Signature=95b1e24064b38f031785dff8a72aaceb2b47a9b58d5407ac7fd46a5501ae3b16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3DSAXN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQXCNTBbij2JlRP0QmOwJZtIQ8JAiiVBaZkOTbOqdSmAiEAgG3%2BTUvbCdWbNyJnSZSvQHnugq6S%2B2aeFu4%2FF7pP3Goq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHx1QdF9mpX5%2BjHFWircA1eyAJIzGbdTg174LRIdK66mJ4OzdXyTcaUKcWVU%2BDzTV%2BhnEzpv2Hhql4bBkdsP5Y%2FetJgYdQn1hYYzlHRwBRhU%2BRH7HDu1T1aeO9xV%2FkuoW63wgx8hXk601XQWq9d4SUwMorQTQ13fZe0ZSoc2dQ7%2FymE7rozPKjEf2e75OH16%2BF9MhvkHjY39kT8JD3N2dHnb3ppSyDt4dCYMgxj94Xl8D4WDRm4bINfbDImnPVfFgXzOiyfNrkddyz5lF%2B9ocKOrgeFWrboUs0DEpKAwMcpyQDfE6v%2BVZB9yhh7ErAZI8%2FRTUREQFt6FZXgzvpGZMgcWiLESDWUhjpQMYMz5Ou4hiiHqjjwv7UeQrpI6vlzHkPCM7AA1WHomtAoFeJyFTpGrKhKkh9SdYqYSI1PvQY5XUzhIr%2BEiolSfXMVa5rGtYap2vPwyNDhyZiFkTPej6coT44u9dtDUOYbbzfJ2kqGBC%2BoOBcXpjpsjlhsvZS8S0i7q5MSivP3jk4KQ4xf5wegyTV1%2FVLATFjeqmkGCxMalb1Qgn0l8ZLc3Y2%2FGhDm2bfqg%2BChqMWhegqciNr7C2Dt83st215qhXnikqaqkc2wtL1ha8Pnz5zaijsCRhYgEZiC43XpOsqMhicrQMLK93L4GOqUBRaoBHcSXIwGzmbJlWvmF7ZCPyrFwJmcVwMS50SIQ2Xqve0rKB43DrE3FVodTEkyfdFkOQGqfR4rdHf%2FtcZF1aOlRpIlJFxmGvhTgK1DVOI207W6tpjRTt2lCU86p1kUi8qXbWcg6zeBJlbYkc%2B2KOD3mRkhlOxwW1IR%2FC%2FzWy7RxMCmySA66385nrTck3NtoQBoBrZcMhs%2FcxhLwWAdI9M49toYr&X-Amz-Signature=2679c253a6cc6459ae54b7a808b43ad447294da2e26d6f506304784435ffc610&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
