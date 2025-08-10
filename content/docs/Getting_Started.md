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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSDPAPD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw2huaFLnb7z%2Bocr4XtCXP2Du2T9cKTQuktU3mkcaNQIhAJ7snXZDcynt6BAVQFmfTImeKwnpyLIjk%2BwqzZq3vVw%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOoQTYCQtOl0xIsQcq3ANDu6Ou5mkac8Qhhkkp6HtxMcfDvoUDEDEaAKOHuRLrFadL4IGCOccsuasKzcqxOIGxKRMnGkOBuBS1vXe3iyaNreTcGznXlGe1ODs40xGp7euEGjHtQjLxLr4R1c9SotZfvqQjRCu%2BDfpv6EedjwAf88YNHsulOhNU6v7zyDY%2FZTMzHOuY4uMEgF9pHuKxf6kt39QNs1p3xl%2BVxlhLrI9WSJAYxIW4ixLkMUCso7IXf6zxtpIlMkIi0uHwJ6bamACbWAjeLchXQeNAk2LVi4onhg42FchsA4TdcMAUlMFfQc27Wb5YHE0BbTAYC%2BAdKgXLgIx5dqWCkNbCZzs1gYpL4zQI3drWYJzuJKQPVROkYWVEa%2FSnVWSJn9gAN0%2FputsfO8%2B%2F%2FktH4uKEhcekcr5tObVvQvkc9ICX99v8sG2DmeNfY2yGUlGj9OUhFdeLySOJROqYt42Ba2zY%2FtBGPvAU2ABdLz5onSoLsZVkr3R4iyOZQzASmj14YZ39h%2FXu1BQQbXRenSnv0nBTLQ3UfZ2x3Qt86KWVan%2FlNANGaVlZQ1Tru7WL2Ip9mdDOlXz1oZ0aFL3ivPAFrRlUGovasEFZQK06F%2BQHlPmVFPowvRWlBWZpUBtBx5s%2FrWV14jDcvuLEBjqkAYQdLZ%2BiT1O0rzxQwaL0Y9VKK4Qu2%2B6xrX1CvmvGjEGGfk6jiHzqymd5y2Y7gqozrxeSS0mcr3WsQB%2F8GpR9AFnZuKfl5yw4FpYEwceoPTS6fx9%2F9x8j0nd6DnywP4mZH3BbYldO1wuHIu5r5XoeHq0m09SR7Gw76L0cZpbV028acW%2FFVvMUgoeh2Ai7L%2FxLgX0Ccu3Srvv8qnLDKMZazkkOxb4b&X-Amz-Signature=2bfb71d0e79c344447247961855289de4a445214767ca97e9fad6832e8c539ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSDPAPD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw2huaFLnb7z%2Bocr4XtCXP2Du2T9cKTQuktU3mkcaNQIhAJ7snXZDcynt6BAVQFmfTImeKwnpyLIjk%2BwqzZq3vVw%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOoQTYCQtOl0xIsQcq3ANDu6Ou5mkac8Qhhkkp6HtxMcfDvoUDEDEaAKOHuRLrFadL4IGCOccsuasKzcqxOIGxKRMnGkOBuBS1vXe3iyaNreTcGznXlGe1ODs40xGp7euEGjHtQjLxLr4R1c9SotZfvqQjRCu%2BDfpv6EedjwAf88YNHsulOhNU6v7zyDY%2FZTMzHOuY4uMEgF9pHuKxf6kt39QNs1p3xl%2BVxlhLrI9WSJAYxIW4ixLkMUCso7IXf6zxtpIlMkIi0uHwJ6bamACbWAjeLchXQeNAk2LVi4onhg42FchsA4TdcMAUlMFfQc27Wb5YHE0BbTAYC%2BAdKgXLgIx5dqWCkNbCZzs1gYpL4zQI3drWYJzuJKQPVROkYWVEa%2FSnVWSJn9gAN0%2FputsfO8%2B%2F%2FktH4uKEhcekcr5tObVvQvkc9ICX99v8sG2DmeNfY2yGUlGj9OUhFdeLySOJROqYt42Ba2zY%2FtBGPvAU2ABdLz5onSoLsZVkr3R4iyOZQzASmj14YZ39h%2FXu1BQQbXRenSnv0nBTLQ3UfZ2x3Qt86KWVan%2FlNANGaVlZQ1Tru7WL2Ip9mdDOlXz1oZ0aFL3ivPAFrRlUGovasEFZQK06F%2BQHlPmVFPowvRWlBWZpUBtBx5s%2FrWV14jDcvuLEBjqkAYQdLZ%2BiT1O0rzxQwaL0Y9VKK4Qu2%2B6xrX1CvmvGjEGGfk6jiHzqymd5y2Y7gqozrxeSS0mcr3WsQB%2F8GpR9AFnZuKfl5yw4FpYEwceoPTS6fx9%2F9x8j0nd6DnywP4mZH3BbYldO1wuHIu5r5XoeHq0m09SR7Gw76L0cZpbV028acW%2FFVvMUgoeh2Ai7L%2FxLgX0Ccu3Srvv8qnLDKMZazkkOxb4b&X-Amz-Signature=775100b1c401d04470561fcbe49d8b7cf128d6757217474ece931cd5a80c529b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSDPAPD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw2huaFLnb7z%2Bocr4XtCXP2Du2T9cKTQuktU3mkcaNQIhAJ7snXZDcynt6BAVQFmfTImeKwnpyLIjk%2BwqzZq3vVw%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOoQTYCQtOl0xIsQcq3ANDu6Ou5mkac8Qhhkkp6HtxMcfDvoUDEDEaAKOHuRLrFadL4IGCOccsuasKzcqxOIGxKRMnGkOBuBS1vXe3iyaNreTcGznXlGe1ODs40xGp7euEGjHtQjLxLr4R1c9SotZfvqQjRCu%2BDfpv6EedjwAf88YNHsulOhNU6v7zyDY%2FZTMzHOuY4uMEgF9pHuKxf6kt39QNs1p3xl%2BVxlhLrI9WSJAYxIW4ixLkMUCso7IXf6zxtpIlMkIi0uHwJ6bamACbWAjeLchXQeNAk2LVi4onhg42FchsA4TdcMAUlMFfQc27Wb5YHE0BbTAYC%2BAdKgXLgIx5dqWCkNbCZzs1gYpL4zQI3drWYJzuJKQPVROkYWVEa%2FSnVWSJn9gAN0%2FputsfO8%2B%2F%2FktH4uKEhcekcr5tObVvQvkc9ICX99v8sG2DmeNfY2yGUlGj9OUhFdeLySOJROqYt42Ba2zY%2FtBGPvAU2ABdLz5onSoLsZVkr3R4iyOZQzASmj14YZ39h%2FXu1BQQbXRenSnv0nBTLQ3UfZ2x3Qt86KWVan%2FlNANGaVlZQ1Tru7WL2Ip9mdDOlXz1oZ0aFL3ivPAFrRlUGovasEFZQK06F%2BQHlPmVFPowvRWlBWZpUBtBx5s%2FrWV14jDcvuLEBjqkAYQdLZ%2BiT1O0rzxQwaL0Y9VKK4Qu2%2B6xrX1CvmvGjEGGfk6jiHzqymd5y2Y7gqozrxeSS0mcr3WsQB%2F8GpR9AFnZuKfl5yw4FpYEwceoPTS6fx9%2F9x8j0nd6DnywP4mZH3BbYldO1wuHIu5r5XoeHq0m09SR7Gw76L0cZpbV028acW%2FFVvMUgoeh2Ai7L%2FxLgX0Ccu3Srvv8qnLDKMZazkkOxb4b&X-Amz-Signature=d588c2393d789cec1aeb38fe763955f12251a51c5670e683d1b2a07a69334aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GZQDJ7J%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkbhhlzRw3KoQQb7rJhwNAH3HD2MTAHpl0rpHxDFChnAiBkE%2BNLJDJxB8GfxOyWMERWfifoTHgD89QdQSaSAQVykiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV8%2FvGX212GWeoC9tKtwD9Nfj1jeJBtKfuJFy2yFfPyeW3TELR7gEBBnQzu26LGaCoL4pkkHuWHm6GEL2iohil5KGH9dv4V%2Bj1TiyrMeSNXmwSorUaro1qJig04eWvo8v%2F6APMSrUKaeZZJPt0opE%2FH9L4FAQfEv2VVZLL15iF%2BXT%2FpPx25lpdA4jAtWOnI%2FqHFTTN6fyB3Sr6%2FuehR%2FTFH4v8gvKpsSA8tBRG4%2F6bXdvL5cSf9XRZVhhtD1ibHV%2Fi6QPXr6VhesixJ%2FY7QxQygjg4B9I9StO0UddphBrEZ%2F1LJ6QOCNNElUTbsN8f0TM7h6CudFzD3yoRVFiGSjrarGIj7UmeqcDbhF7LT1ayfFwzRJW0S4fZzUkWjC%2FxCQLF7ITplFRkP5bErMqjVcDzuts%2FAnJKlIxnOT8GQRBdCz9odON4WGxdSFNxo11wi4v3RpqrV4H0NTj%2FR1d1TwVGSznkMrdNMY%2B4Gp9zMG1%2FqKamjYxN9%2BA4nwaTZpJbJbIGEhBcHyP45B8pMCdhkI36ze1ixGs3mgzhclscJAEJ3GqpP6OrgKHHed4vj9rrF%2Bl0cZ6yKkI%2BVkPVNPc6yvky%2BEuMEQRSW%2BrK8LR40FEZ6wP7fdFKhkJ%2FrtxMy%2FIfO%2FppLA7a%2BPqgQN%2FwCIwyL%2FixAY6pgEl1F8Vl9z6bnwzFUdDgnBVaH5yZePq85QjPrTLmdnEVXYy4HMMUqWNuez1WFfRj3Z3zVPWK1PXZWSeEMxn2SILKKYDQwb072ivRDYElGJT8Vz0gyWXP9%2FquKduqL0xb66QqBG2hVE594xMNl9OfDQo0rO%2FUHANB%2FJlgmfXaTxsMCoqRsPuDdvqoqM%2BUou1gCotDSH00Tf4pq4Ej9%2B88Nn3W%2F2y2dIU&X-Amz-Signature=8674d727fba3243ee73d4958bebb23ed6497e8797dc676db768ccecc56f3dd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KCDOVQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExi8xHhZ%2B24D%2BHr%2BlbhrT%2BZUhyERKHLuNKHPOWCASGOAiEA523WtY0NTxlC0VTbyjGMIb7amAK3Zv8w8QsVluZtIEEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlAsn4AUN1M87YIYCrcAxYcv0TQJONZNG%2Fd0O8%2FMO3UkFoSNWPqYOua0b8ofLNhjOBJPYhPI%2BM0wytCLwG2EP%2B%2BWoDYeMbAPMnmxJ2byAFX1eMundpaJq8FxvyhYEXS2nq6SXKTRUQkhJXWrovp1IypNi%2FwMNOGseqzx0bNeF7N30SkVzHdJMQ58mcApdxN%2BXywtyTu26%2BnIHcCJg4fGOPeWc0FQq5Brnw8u6O3NAyeeHQ3dCsiIKDddLg9POoK2miDJtOrDf0axor42RVNLYoF8bZD7WvLDqTMRJHmRRketgHSt683j1T8bJm7Bvb6mbBc3%2FzMIF8JbHsrnHeYwBpETbXxmOvEAsnaL0lYQPGXs5gCY%2F%2BvqNFyAjc0K00qbbaWb5jb3pZVwd2EvbrDEVSx7C4XdZ7xMMNVWQYTWZvEb0eFlRxQ3Ixq9N52%2BMXKfhjyNd%2FLsaKTzBmBYzLDx09wMUzwAFkMN8P4YF%2B%2BBmNSiRXWanrIw2yumVt%2B0A9oP3vtwDc9vgIY%2F3ULW%2Blskn8St8ULP4s5iyK%2Ba6o6CnVZqM2izbt%2F3ZVIO4BaMj4h91baPD9PlYld7eE%2FZrDM66H6oyWJMUGlZBNZP2r34%2FL6TGsAhYjmiUOJimMXiol2yfLNqHsL5Dac6Jj1MIS%2F4sQGOqUBPCfEN65MNISN6SQ%2BLqzJrEx4aprzIH%2FbkZWCFh8Utp1rexXy%2FHBYdpZo4A910NHc7PrTgiwccC9%2B5ZLWOqFEOkneMSmAGNsv1LufOL%2FlyqZCgp0EZuzQQDDt1UmqlWFHn%2BiaKx4m2Y2TV61vEfGFPSFygOZr7laeQC%2FOVPEoxl6Vjox%2F5cHMPtLa3nGWHu6mhwPI1FPv0dVxEHbSWqIppYR%2B5yJf&X-Amz-Signature=b617c4aa60174cd8d9528d2bbc51cfb2b36e28ffbd61379dbfffbfb2a4bb4f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSDPAPD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMw2huaFLnb7z%2Bocr4XtCXP2Du2T9cKTQuktU3mkcaNQIhAJ7snXZDcynt6BAVQFmfTImeKwnpyLIjk%2BwqzZq3vVw%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOoQTYCQtOl0xIsQcq3ANDu6Ou5mkac8Qhhkkp6HtxMcfDvoUDEDEaAKOHuRLrFadL4IGCOccsuasKzcqxOIGxKRMnGkOBuBS1vXe3iyaNreTcGznXlGe1ODs40xGp7euEGjHtQjLxLr4R1c9SotZfvqQjRCu%2BDfpv6EedjwAf88YNHsulOhNU6v7zyDY%2FZTMzHOuY4uMEgF9pHuKxf6kt39QNs1p3xl%2BVxlhLrI9WSJAYxIW4ixLkMUCso7IXf6zxtpIlMkIi0uHwJ6bamACbWAjeLchXQeNAk2LVi4onhg42FchsA4TdcMAUlMFfQc27Wb5YHE0BbTAYC%2BAdKgXLgIx5dqWCkNbCZzs1gYpL4zQI3drWYJzuJKQPVROkYWVEa%2FSnVWSJn9gAN0%2FputsfO8%2B%2F%2FktH4uKEhcekcr5tObVvQvkc9ICX99v8sG2DmeNfY2yGUlGj9OUhFdeLySOJROqYt42Ba2zY%2FtBGPvAU2ABdLz5onSoLsZVkr3R4iyOZQzASmj14YZ39h%2FXu1BQQbXRenSnv0nBTLQ3UfZ2x3Qt86KWVan%2FlNANGaVlZQ1Tru7WL2Ip9mdDOlXz1oZ0aFL3ivPAFrRlUGovasEFZQK06F%2BQHlPmVFPowvRWlBWZpUBtBx5s%2FrWV14jDcvuLEBjqkAYQdLZ%2BiT1O0rzxQwaL0Y9VKK4Qu2%2B6xrX1CvmvGjEGGfk6jiHzqymd5y2Y7gqozrxeSS0mcr3WsQB%2F8GpR9AFnZuKfl5yw4FpYEwceoPTS6fx9%2F9x8j0nd6DnywP4mZH3BbYldO1wuHIu5r5XoeHq0m09SR7Gw76L0cZpbV028acW%2FFVvMUgoeh2Ai7L%2FxLgX0Ccu3Srvv8qnLDKMZazkkOxb4b&X-Amz-Signature=8b2c7077da6dc28b89b3939600ce998afb434102dbee76c2d8dd9a9f05b30a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
