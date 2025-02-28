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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4ZRATY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEyir15Vmpt833xB1Ji5hMO5iPucuxhKm9w7fcmhuBC7AiAAs3RIQttufp3X4m6Hi%2FUK0L49oL0Ho5%2BcJw1940iwQSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6mzb6WN9RRFaYPD1KtwDXgHEznw7ek%2FLS4o7FQukxRa%2FkyzRHaeHqMunYcsjK2IP2Xdjngfm7vf5w2ijAYrXOdQJNupUQCgzGXXTH1kaELmCjVxFnWJ5ouG2ucaSG6WT8AGM%2BJC7ak1o1liT2ot3nwOGelHF2PaluQxiWMq7IGjL31sM1hWvr4w7Li%2FRnSPBVoSufcOl879kqu0B%2BLhoq33sc%2FJSgPG1o3LKtSTrgGD9RxWas69l5TqQipuayWiYdZVeqkiM%2FwcgNuJXO3oZbJRcf21R3ZP%2BXXcJHOfQJlqiX3Bvr%2FZayrQFWa9B16v4UjiZRhfvbrNDJBd0GfCzlObB9dTRRFzkA4sA7yVfEdjQ%2F%2BVf92lyArltdH3xnfl2XtUmraO7h0Su6koTbexMpoJkOFDOP%2FODFrz98iY4fnnG9Gm2VZRXQFPLf8vR2jcrcFCsPnp%2FdxV1R9uLjpUu%2Bn5%2FvetFwU7wRXAtACVyCQ5Oo9gmr9YdKzzPqIxno8oGwO8s5gwomKyNinedL1CA1hvckXqt1kwIuOfqb%2FC5optwBQkfx3IT1rojeESKKj9H3fpl4fGSA7IMRCrF5bILK0v0SYUHMHqSV7CYt%2Fa887MpkoTdpeo%2F4FExtRZmqFEV2ySs4vHoE6A9GUowlJGHvgY6pgEL7hCyDuE%2FZFJV5Y0Oub46eJmakGt%2FWV5yK6PXnnPGpcgGIb7S7g%2F%2FMHLGYXG2Li9Qyo0VX%2F4sBMu7Eqi2Xh9YUi4jhLvFjwo0GKPsLqqC4QRILZxcXVaWzbcjQmx%2FGa2g8WCcBWeAkeUnhb3lAkMiZPjcP1E20Y%2BpV8cCIpt%2Fkygn4accRdC9doWZEIkJPxIVxj1bozcDVLxb2O0gyr3YphH1Xbdf&X-Amz-Signature=ea7507618d1d60ecf33537cd0e92dd8443545371aa69da1bcb11fb8840657baf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4ZRATY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEyir15Vmpt833xB1Ji5hMO5iPucuxhKm9w7fcmhuBC7AiAAs3RIQttufp3X4m6Hi%2FUK0L49oL0Ho5%2BcJw1940iwQSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6mzb6WN9RRFaYPD1KtwDXgHEznw7ek%2FLS4o7FQukxRa%2FkyzRHaeHqMunYcsjK2IP2Xdjngfm7vf5w2ijAYrXOdQJNupUQCgzGXXTH1kaELmCjVxFnWJ5ouG2ucaSG6WT8AGM%2BJC7ak1o1liT2ot3nwOGelHF2PaluQxiWMq7IGjL31sM1hWvr4w7Li%2FRnSPBVoSufcOl879kqu0B%2BLhoq33sc%2FJSgPG1o3LKtSTrgGD9RxWas69l5TqQipuayWiYdZVeqkiM%2FwcgNuJXO3oZbJRcf21R3ZP%2BXXcJHOfQJlqiX3Bvr%2FZayrQFWa9B16v4UjiZRhfvbrNDJBd0GfCzlObB9dTRRFzkA4sA7yVfEdjQ%2F%2BVf92lyArltdH3xnfl2XtUmraO7h0Su6koTbexMpoJkOFDOP%2FODFrz98iY4fnnG9Gm2VZRXQFPLf8vR2jcrcFCsPnp%2FdxV1R9uLjpUu%2Bn5%2FvetFwU7wRXAtACVyCQ5Oo9gmr9YdKzzPqIxno8oGwO8s5gwomKyNinedL1CA1hvckXqt1kwIuOfqb%2FC5optwBQkfx3IT1rojeESKKj9H3fpl4fGSA7IMRCrF5bILK0v0SYUHMHqSV7CYt%2Fa887MpkoTdpeo%2F4FExtRZmqFEV2ySs4vHoE6A9GUowlJGHvgY6pgEL7hCyDuE%2FZFJV5Y0Oub46eJmakGt%2FWV5yK6PXnnPGpcgGIb7S7g%2F%2FMHLGYXG2Li9Qyo0VX%2F4sBMu7Eqi2Xh9YUi4jhLvFjwo0GKPsLqqC4QRILZxcXVaWzbcjQmx%2FGa2g8WCcBWeAkeUnhb3lAkMiZPjcP1E20Y%2BpV8cCIpt%2Fkygn4accRdC9doWZEIkJPxIVxj1bozcDVLxb2O0gyr3YphH1Xbdf&X-Amz-Signature=5205cba035c9747e506c55ae24f01da93cbaca8a79a1b80581c38ea336766359&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5JX67O%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIC27SgVxyQHLYffKoJKnLgZ%2FEDkMUKyQ3uUkrk0MJ4irAiEAtg4JTTONsEVuzBdYWKhXCZrWWVG20%2BwTRFPX3vkuRYEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHyQ3PdBAXh8whcTircA8C5Vp%2FarnsN3o1ym04bL1r9rUymqIvnxJNvJR%2BYNojYqwnGP3aFyTgJdwRVjHW9CyOgYBOqy5MfuWrkrlY8h7aGpsYmffkEMCLJmyD7h39ENlT6%2BLERr1g1kLxs9nNUfk3RMhAIzDZaZ8FhkVIIBWGokdlWQTOxpWjlgP0dYZx2yPnScZzKZNlsXUkbMqAUo384NKuPhXXaOryyu5ZfQL6PMxvvT2arWM2xlKiVmmhXNe9ncJYGl693b%2FLxHTIflqEtR9hc33s34I5wAHd7K%2BxlRL3lZlZ8vsjlcJ7l1VgtAdUNnITPRWx3RuP%2BviMev7CnG7KoOX6%2FYV1ThFJAlY%2BhDMph4SmeBF%2F%2F11N4%2FOvMQIM%2Fd%2FboTmBIqGcBrrG1P%2BRs5UBrjsLOpGNJbKcMwfu8gUMWxp%2FY%2FbKMvQEjNPBIg2vTq76YZk9q%2BugZRrT7R5bbCe1Dzz14IEA2%2Fv3WdTbyFa89CdzFZT8Yuy1LGtsA94alQokL54HAVyU%2F3VvqHLsjemOX71dcm6EAsSMGvjwh5SrcgTOMzz%2BrTxcL6crgnt6MdH8vcFetbZD5wDmjGBM2nWdKQFjSTaLIIhjT85Y5Gf94J0hdEiFW37jvDWeCBQZH%2F6zn5BJXlrdcMMiQh74GOqUBXlleseh%2Fpf5EPTIupL8JkV5JizBWfXJnABjyqGyH%2FPXkNbkR8NyuIipxiITcxhj5EakvjptPfo5xXgILhzKycdsnUyCUnTBNXUIQ2ZulUbH932Lq63vFy4zXwpoxoFix0DWG%2BlXj6UC7LJeYWv7ws8QdbkFmzcsMqMOADDVW2ZazQ8CnDqhNCVOhxeSieYiC79i%2BjSx%2BXbng0fqIzVivNu%2F%2FNQ%2FW&X-Amz-Signature=014b4601df9495022327092db13b4d572c937b2854e728f21ef8b24bca2a4850&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672PTNNAZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCbsK9EXMYAPqh6MAEK6eG5WG5RsDRJJjl3P0ZxLDiXDwIhANdmBYZ4aY3C5nRqtPOSUf%2FmftIE9ctmaezxooyztbi0KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5AuRyFLmtubk2mQsq3AP%2Fb39mGmuQiH9ZIc0MhAcDf044KZ9PpqOoZPRO3oBIKfpc7Ml5gBm8QR9Va09XodK2SO8%2Bt0qshF5VX7Hov8ZWX7TvrXJGIg7pVG3XK7ZBJutZOaP5uW5fJD6OOUzYaFMSuOejxg56g7zrXVJbdadfVT0W9U3M%2FLT1NJYf%2B4kN15%2BMmCZ3ipbeW9YXrulbL3irUJr2yUpU9Z%2BahCDhdS0ZhKabN5SY3oHYLOM9lxy1k%2BM8EME8kxEZs26oJYtilkt%2BPdMrQBvZe%2FlUVGXHgzA%2Fi%2FsM9ZTna5spa9rUDAQqX8IvGJbtL22KLktmZx9UjGDzpvvL3R2MsVlEA9BXSE2qGPj6ia9zz%2FtU7%2B%2BZqGDTowTZKYA1X%2FacDvt8yyFx%2FylgePe2ED2kRMtp4Njrdl8kGE9SvUTHYf8DzV%2BpAV0BL2qARtaegfsW7ppOlETnLP7nST2YGvRfsd%2FxXAnthztLk45vwA43zOmaTJFMdu0EudfGoAvjeeQB%2FA42%2BFRnGB4NcX8C0Y9bpw9%2B%2FR5%2FAnFFK03XV4RbfKA68Y2%2FKsTNYaHBCPaj8z89%2BV6bQCvKjUl0OTS9Kd2A25Yd%2BnON7gsIU6zPA%2Byh2iRfGMqU8DXi95JeYTb7ERERkp6HWTCXkIe%2BBjqkAb0ftOFyoqVn0BepPpsPfs5egXJpEGXIU3pze%2FyUXPz5KlWIXjrIq10q%2FqjCT0wYEW4YdqWPHgNCYYQFDnMj2%2FrmiYW1MGZXXUjjM93h0QtcVGMpy6t%2BAgmngg1mEX5tjPuIawCNbaz%2FGWVuH1Zpkg38suQ6rv0roe7HUz3Z%2FWwBNHTXUcOa8h%2FTuUmR%2F1pF%2F2A%2Bl1TjX6%2Ber%2FZy6rXfLo8%2BTLVE&X-Amz-Signature=d0aafc8328f0847a245e85abae72f1293607398f0ea5c01545fa4d57c54778db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4ZRATY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIEyir15Vmpt833xB1Ji5hMO5iPucuxhKm9w7fcmhuBC7AiAAs3RIQttufp3X4m6Hi%2FUK0L49oL0Ho5%2BcJw1940iwQSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6mzb6WN9RRFaYPD1KtwDXgHEznw7ek%2FLS4o7FQukxRa%2FkyzRHaeHqMunYcsjK2IP2Xdjngfm7vf5w2ijAYrXOdQJNupUQCgzGXXTH1kaELmCjVxFnWJ5ouG2ucaSG6WT8AGM%2BJC7ak1o1liT2ot3nwOGelHF2PaluQxiWMq7IGjL31sM1hWvr4w7Li%2FRnSPBVoSufcOl879kqu0B%2BLhoq33sc%2FJSgPG1o3LKtSTrgGD9RxWas69l5TqQipuayWiYdZVeqkiM%2FwcgNuJXO3oZbJRcf21R3ZP%2BXXcJHOfQJlqiX3Bvr%2FZayrQFWa9B16v4UjiZRhfvbrNDJBd0GfCzlObB9dTRRFzkA4sA7yVfEdjQ%2F%2BVf92lyArltdH3xnfl2XtUmraO7h0Su6koTbexMpoJkOFDOP%2FODFrz98iY4fnnG9Gm2VZRXQFPLf8vR2jcrcFCsPnp%2FdxV1R9uLjpUu%2Bn5%2FvetFwU7wRXAtACVyCQ5Oo9gmr9YdKzzPqIxno8oGwO8s5gwomKyNinedL1CA1hvckXqt1kwIuOfqb%2FC5optwBQkfx3IT1rojeESKKj9H3fpl4fGSA7IMRCrF5bILK0v0SYUHMHqSV7CYt%2Fa887MpkoTdpeo%2F4FExtRZmqFEV2ySs4vHoE6A9GUowlJGHvgY6pgEL7hCyDuE%2FZFJV5Y0Oub46eJmakGt%2FWV5yK6PXnnPGpcgGIb7S7g%2F%2FMHLGYXG2Li9Qyo0VX%2F4sBMu7Eqi2Xh9YUi4jhLvFjwo0GKPsLqqC4QRILZxcXVaWzbcjQmx%2FGa2g8WCcBWeAkeUnhb3lAkMiZPjcP1E20Y%2BpV8cCIpt%2Fkygn4accRdC9doWZEIkJPxIVxj1bozcDVLxb2O0gyr3YphH1Xbdf&X-Amz-Signature=f7431da3f09eab8761e833f6269d351c4012108b98238665ed4c8deb10fa6411&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
