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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOZOG5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApNmIpdx%2BdjAl7YFdzPtKBwozuqhBgc%2F3S%2B9esKrRKjAiEA4eO4Urh4v9SiNv2G%2B3rWc9O%2BF7KOnW8FoheJAPHNaXoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXX9CrIrS6IYeg2AircA1fyR5sP5%2BBa9Z5vGzb8iJPR%2Buz9g7Nfl5aMuap%2B30AJZnBBJ3IEDq08n9wDIB8RP5P%2F0jX7JJZrO7%2BGvA49470wEAzVYFoUBzzlxOK5WU6jMOTXY%2FCLp0KZmIiEa8U2IBpp3XL4aUOC74AZrQ%2Bw2gvM6jfjN5wyYdtJ3vgGkBqM1pFJC2BljK3lqchxvcaE3YdOYmrgc7ysW4LTi513%2BYZHfaWoEq8hAEet%2BMClgND2J0uwMJIlLElQjtxfLhDeGnb1Xntzcq5AxdU6B9JYICXLhPD9igDl%2FJlFGhq9uv0Be6YG1wFiC3yaL912WKwVzBv%2Bp%2Brcs6n%2FnWZWP0EZAGz%2FXYFr6MGr7VtYsa2CFD4ELWd8iPeB71M5tgp%2F5l8cnnedxSkJDXpfoCU%2FY7dlDBt%2BY%2BYFHdhpZE0rqCvTaTe7nHFyr%2FHLsQej%2BMqzULnj2rAbtGPzHLENFIMnrceg9c%2B%2BEjvyaun2SirKN%2FeR6TmA9slUavGla7M3vY%2F%2FWK2Srwi4U4DCXPTmzcws80EP7TdVc3rip7BwqU4QNaEg%2Bu%2FL9fE7FmE447neJD080iI1HxgRtzGrLacIBSYBQT6eSTMbByGf9UG65oOY81ZB%2FV8eMgBcvtofJwD8j1zHMNS8ocEGOqUByFzu2QwUB2DpmWg3qgzscPOBOGAjnuWKKlwBN5A9%2Buyb2bHlxr0LZl33kLwXnVSmyld%2FQwf7vP0pL36D2vfTL37tAroFfVm9eJX9Hzc3aBpwjNw%2B0x9Vjlmi9p3i4ee4KiiVQrjPai%2B8G1r51spADdWbzXQmDPjw%2BDB%2Fjbh3e5Ja99Kqm7QYAoiBeMeOJQ2Pe07q0NetJY%2FM%2BKEgutRt2n3M%2FRa9&X-Amz-Signature=c578236375808f0539102a847dc1a100a633c076d2d1c8cbb563767b49e3823e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOZOG5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApNmIpdx%2BdjAl7YFdzPtKBwozuqhBgc%2F3S%2B9esKrRKjAiEA4eO4Urh4v9SiNv2G%2B3rWc9O%2BF7KOnW8FoheJAPHNaXoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXX9CrIrS6IYeg2AircA1fyR5sP5%2BBa9Z5vGzb8iJPR%2Buz9g7Nfl5aMuap%2B30AJZnBBJ3IEDq08n9wDIB8RP5P%2F0jX7JJZrO7%2BGvA49470wEAzVYFoUBzzlxOK5WU6jMOTXY%2FCLp0KZmIiEa8U2IBpp3XL4aUOC74AZrQ%2Bw2gvM6jfjN5wyYdtJ3vgGkBqM1pFJC2BljK3lqchxvcaE3YdOYmrgc7ysW4LTi513%2BYZHfaWoEq8hAEet%2BMClgND2J0uwMJIlLElQjtxfLhDeGnb1Xntzcq5AxdU6B9JYICXLhPD9igDl%2FJlFGhq9uv0Be6YG1wFiC3yaL912WKwVzBv%2Bp%2Brcs6n%2FnWZWP0EZAGz%2FXYFr6MGr7VtYsa2CFD4ELWd8iPeB71M5tgp%2F5l8cnnedxSkJDXpfoCU%2FY7dlDBt%2BY%2BYFHdhpZE0rqCvTaTe7nHFyr%2FHLsQej%2BMqzULnj2rAbtGPzHLENFIMnrceg9c%2B%2BEjvyaun2SirKN%2FeR6TmA9slUavGla7M3vY%2F%2FWK2Srwi4U4DCXPTmzcws80EP7TdVc3rip7BwqU4QNaEg%2Bu%2FL9fE7FmE447neJD080iI1HxgRtzGrLacIBSYBQT6eSTMbByGf9UG65oOY81ZB%2FV8eMgBcvtofJwD8j1zHMNS8ocEGOqUByFzu2QwUB2DpmWg3qgzscPOBOGAjnuWKKlwBN5A9%2Buyb2bHlxr0LZl33kLwXnVSmyld%2FQwf7vP0pL36D2vfTL37tAroFfVm9eJX9Hzc3aBpwjNw%2B0x9Vjlmi9p3i4ee4KiiVQrjPai%2B8G1r51spADdWbzXQmDPjw%2BDB%2Fjbh3e5Ja99Kqm7QYAoiBeMeOJQ2Pe07q0NetJY%2FM%2BKEgutRt2n3M%2FRa9&X-Amz-Signature=667ca17968c35beb23eb1b3ed10f80aed31aa3fbc7ce68bc589127051118140c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOZOG5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApNmIpdx%2BdjAl7YFdzPtKBwozuqhBgc%2F3S%2B9esKrRKjAiEA4eO4Urh4v9SiNv2G%2B3rWc9O%2BF7KOnW8FoheJAPHNaXoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXX9CrIrS6IYeg2AircA1fyR5sP5%2BBa9Z5vGzb8iJPR%2Buz9g7Nfl5aMuap%2B30AJZnBBJ3IEDq08n9wDIB8RP5P%2F0jX7JJZrO7%2BGvA49470wEAzVYFoUBzzlxOK5WU6jMOTXY%2FCLp0KZmIiEa8U2IBpp3XL4aUOC74AZrQ%2Bw2gvM6jfjN5wyYdtJ3vgGkBqM1pFJC2BljK3lqchxvcaE3YdOYmrgc7ysW4LTi513%2BYZHfaWoEq8hAEet%2BMClgND2J0uwMJIlLElQjtxfLhDeGnb1Xntzcq5AxdU6B9JYICXLhPD9igDl%2FJlFGhq9uv0Be6YG1wFiC3yaL912WKwVzBv%2Bp%2Brcs6n%2FnWZWP0EZAGz%2FXYFr6MGr7VtYsa2CFD4ELWd8iPeB71M5tgp%2F5l8cnnedxSkJDXpfoCU%2FY7dlDBt%2BY%2BYFHdhpZE0rqCvTaTe7nHFyr%2FHLsQej%2BMqzULnj2rAbtGPzHLENFIMnrceg9c%2B%2BEjvyaun2SirKN%2FeR6TmA9slUavGla7M3vY%2F%2FWK2Srwi4U4DCXPTmzcws80EP7TdVc3rip7BwqU4QNaEg%2Bu%2FL9fE7FmE447neJD080iI1HxgRtzGrLacIBSYBQT6eSTMbByGf9UG65oOY81ZB%2FV8eMgBcvtofJwD8j1zHMNS8ocEGOqUByFzu2QwUB2DpmWg3qgzscPOBOGAjnuWKKlwBN5A9%2Buyb2bHlxr0LZl33kLwXnVSmyld%2FQwf7vP0pL36D2vfTL37tAroFfVm9eJX9Hzc3aBpwjNw%2B0x9Vjlmi9p3i4ee4KiiVQrjPai%2B8G1r51spADdWbzXQmDPjw%2BDB%2Fjbh3e5Ja99Kqm7QYAoiBeMeOJQ2Pe07q0NetJY%2FM%2BKEgutRt2n3M%2FRa9&X-Amz-Signature=41ca5ce09849232a473e7ad0b5d38d7e9b3ab37aa632e6bd74f41b4bbf1e4460&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FOI6RBQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjS8nvO0QfB2M0MRSSICRpRDrA8CW03IfCOeRROqwsmwIhAK8dn3skoQAh7SZrMkk0et7FnLYgzhkP%2FfMGUNGvlSaIKv8DCFsQABoMNjM3NDIzMTgzODA1IgzaHDEMqACQtelbpl4q3AOwRZgmiTEaXwo8fI5qRUf1Lk00wThzD5jOCSVbWvlAmEZA3znCcWU%2FVZDm7uZU%2FNoFrpoTATYb54rEr%2FHdkcvcfebT9SlFdEmEYXCuIVHM31tQnUX6NbiXO5EUHxbfw6SJYIkviCwYe3VLlhjINo9CjUKNh0ikwk3VlgJAW84L2kkCZ4lZ9oq2TGDxADzvhhHNFiTeewEpYDmcb9zQhAVmClRHiS%2BLYkGzeCaqTjk7pJ7ERIeSafdW%2FU%2BwAWsjGAwl5zg9F49d1HUDv4RdPnOkpxG9qo3e1rXqg44bwKS3JMif%2FnqIzGEwLJj31u7DDVNpuJAxFexJq17ePXrbObsO2eSwmuR1ygsUth8ZaOcN%2FaX%2BfbR6w2DCdymkiIHffhmih07ETq%2BhTPLy%2BjqHyAu89q9oMx2Ry05ZQ5vvFGrPoNQI82Cz00WF63V1QNNnFUO75yhbODbW4YhvT7zZ0y86%2F1jwy38CE2hU%2BtkI79g9Gyc0J4Eo2smP%2FNllh3sOn7re5%2FPTM184qizJ6HdKa8apVjgMQq7WtF3sq0xlwdNw3Yv6XFzcDk8V1ja1Yoxqtt7%2FTBJhibslPpx3Y7U%2BbEnRhLw7i7ldQN46%2B3atvwA5YmmhDbEFLbRo9EM28DCivaHBBjqkAbbcsKOoYWHG9UcfO%2FLYqhEc0k0N9X5IKW7FXVEgqhHuPoKaGxH9I%2FxPcVYyFtcNuUgrChePFyEnJMlumAzxBbOmnnDo208wl7LjazUuocExjfGouiq6UTFndmLScWdcRIKVyxi%2F%2FshvY1h9HboUihLSRTqGyuR8e1lcNzirxYsVzXNtQwo99%2FBDoYQTsbfDTJgUZxeNcD8TNzHH5c%2BD%2Bbsqq7S9&X-Amz-Signature=c4dd6ecb68841d0e245223755d5309e90e8783145dec3b201d44e9c8e266b3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVX37Z3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHlRc5ZnVFG49HcLzGkd9sU2A%2F%2FwMtSdYtK0bVKead%2BgIgfnh2irtWi1hVluhfj13NqOnhGqxaI7lYTTRt40QJ5gsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHEZEkcFHpW05ok11ircAxMv7DDbu8y4221ObzGCGc6i35g2jGXzW17O9aRcb3cBmlZ8p%2F3X2q%2BFO6qh%2Ba3BJTPxJruOXaTqBIGlVUv3ecOvTpQ5untebLqG%2BhMCBtzYK70WJ%2FRQVKzHtA71kF8Lzpsc779tDQMRmin0vySwUg%2BLhyboXv6j5KRbVV%2ByFCtSGKoEgxb%2B4C4ITCv42CqbuB4JYEs8Vl5w4Facngdr%2F3II6e23cTq7PoDej2isTIfxzqmDIU1kwit%2F%2F6PCjgn%2BHdje4ghgiRFeE74rX7yAuMl8dEcIjGvFKFWnNaHSc%2FAMhcIhCeR43HXCM0vX%2Fq3qRY%2F%2BMF%2FTONkZmPDWJ7vM1m2U5WLV1xynvvzc4GywUnL1d0zsrOW5r2%2FWVUyxJMvrigENP9TaZIPMJJm5fmic6GG1Hu4Xexy8p4m1Q%2Bp14Kq8PSAgtFJh%2BvIpTvZhRTf0ZRmMSNDgeytpEeoQ1Y%2BHlYPiVz1fWhkzzsogbnnwu3T1%2FHBkJm27v8p8VteQX2oPvyPjWoYd4MvUTELSo10MoSnQ7sf1154PEgEqOGR4vqULSchsW2orgvmiBh8uOxdTlthYhejsVxuK0UDvhY45wF%2BDC5dqVKu8aI8rAkUZm3NoJbGnuo2OZDGjyCQOMOC8ocEGOqUBsSWjI2tTmLCbb9TABFGStYd3K15SDAcnReQCZahmH3HAqIwFwvWT87ZUQ0asv6FWDWMlNv%2F6Ckv8cHc2iiZNQdOKTIaox%2BfW%2FdfeDAE0lTSHen3VU%2FYF6UwpaDQHaf7m1TVX3xY4Hl5JQJRed05ZATFKEDX67GQi%2FAk1zgB0%2F83%2BleQMgRutPFxvqBTS9ZD69xitbQRxLA0dIgetdQ2bgc7Mcnoo&X-Amz-Signature=7e69b69fa974daba926fc1b5952b23110e3529c3595691194ca7d623a5d7c119&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOZOG5S%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApNmIpdx%2BdjAl7YFdzPtKBwozuqhBgc%2F3S%2B9esKrRKjAiEA4eO4Urh4v9SiNv2G%2B3rWc9O%2BF7KOnW8FoheJAPHNaXoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXX9CrIrS6IYeg2AircA1fyR5sP5%2BBa9Z5vGzb8iJPR%2Buz9g7Nfl5aMuap%2B30AJZnBBJ3IEDq08n9wDIB8RP5P%2F0jX7JJZrO7%2BGvA49470wEAzVYFoUBzzlxOK5WU6jMOTXY%2FCLp0KZmIiEa8U2IBpp3XL4aUOC74AZrQ%2Bw2gvM6jfjN5wyYdtJ3vgGkBqM1pFJC2BljK3lqchxvcaE3YdOYmrgc7ysW4LTi513%2BYZHfaWoEq8hAEet%2BMClgND2J0uwMJIlLElQjtxfLhDeGnb1Xntzcq5AxdU6B9JYICXLhPD9igDl%2FJlFGhq9uv0Be6YG1wFiC3yaL912WKwVzBv%2Bp%2Brcs6n%2FnWZWP0EZAGz%2FXYFr6MGr7VtYsa2CFD4ELWd8iPeB71M5tgp%2F5l8cnnedxSkJDXpfoCU%2FY7dlDBt%2BY%2BYFHdhpZE0rqCvTaTe7nHFyr%2FHLsQej%2BMqzULnj2rAbtGPzHLENFIMnrceg9c%2B%2BEjvyaun2SirKN%2FeR6TmA9slUavGla7M3vY%2F%2FWK2Srwi4U4DCXPTmzcws80EP7TdVc3rip7BwqU4QNaEg%2Bu%2FL9fE7FmE447neJD080iI1HxgRtzGrLacIBSYBQT6eSTMbByGf9UG65oOY81ZB%2FV8eMgBcvtofJwD8j1zHMNS8ocEGOqUByFzu2QwUB2DpmWg3qgzscPOBOGAjnuWKKlwBN5A9%2Buyb2bHlxr0LZl33kLwXnVSmyld%2FQwf7vP0pL36D2vfTL37tAroFfVm9eJX9Hzc3aBpwjNw%2B0x9Vjlmi9p3i4ee4KiiVQrjPai%2B8G1r51spADdWbzXQmDPjw%2BDB%2Fjbh3e5Ja99Kqm7QYAoiBeMeOJQ2Pe07q0NetJY%2FM%2BKEgutRt2n3M%2FRa9&X-Amz-Signature=a545c1a35ac6bb2ceffa341835dc2a4b57bb290bab674bd6c10da7853ce9c15c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
