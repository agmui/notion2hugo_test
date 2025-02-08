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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5PEEST%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHIUUI1p0yOJWoKFGl6fnDZ1LOSR6vl6onQNr%2FGL2QX9AiB31K3Zqry7OCV88HdK%2F1mnzTT%2FEO4drbisvghpbJtBjiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5uez6BHImQiedzBaKtwDUtROAa73nxsMZTkdqlguenhv9HRAQd4dkxm4isKAGlKbkEWD9FgmzJSTgoUqJ1TucmKZAyEf5uBqXQQTkcLgLFDSsb9V1ycLKeybs2qeBYUwBXY8a%2Fs8ynQL6g6LSToEg6YgeFHRs3souIaoL7KegdPCJl8zjHR32bK%2BkKIvuNDOwuAkxlRc0BixOO29I3y%2BXRItK%2FJF90jKkl5Mg1oPS8t1mQpaSnpj2D2oPSE3iyawxf041wJdu6L%2F3w0yiM8QGaVMVTWUMxtePYrVXkEJZad9WUkBa7z7XjqzdYacDECVYfdVe8%2BX5HIYSvY89MYn6L0%2BLW2m78BSGCljwn50NHa5HAYmIIl5MlHyzotkCCteZdpBvj1ipTdl3ABfr4z1C266As3DJZE0yCaeKn1InkT%2F%2FikZe6TqWb7ma3WMaeZQxomGIZsG4eCOW%2FZD1%2FZurMbmkDBnuSYRAK24MYnqDdELmmrfJUnTaCADf%2FP3nWMQBEFv5ZuASzRFYdcAvZ3TYhVBya6bYxKgd7C%2BEbVeF6StlQDIPEY7O6rjyAMLAEvwv2b2xj%2Fg9dbbcK%2Fup%2BFI9owakSx4LPicMWksPLQIxeRcvNtupfS0v2uRl9Xkqbqfkr3a4C144%2BU6e88wvr%2BavQY6pgEA1T3PmD6%2BGF6gqy4h4YTEHTfEBgnMsrUJlNsxpZR30uQgDAb6hiZwWoqGGC63sIFwja%2FaRlHzsNBZoUceYS82xFPa6EJn6Sl9vigY%2FVK19EWlQVJ8Pt9RL3w0K333BHEWkrZ6W6Zi%2BDxESHc3%2BiZ10axlURpnlAyaDpAYFzdN8l76DuG%2FhxmDPy9Y2y52sxokC0FoY%2FQ8waey2qqPZsoWOw8FdotN&X-Amz-Signature=4dc87a545b071103e2c223f985fd64dd31076cb43475a1824c3c5a8bafbfa019&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5PEEST%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHIUUI1p0yOJWoKFGl6fnDZ1LOSR6vl6onQNr%2FGL2QX9AiB31K3Zqry7OCV88HdK%2F1mnzTT%2FEO4drbisvghpbJtBjiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5uez6BHImQiedzBaKtwDUtROAa73nxsMZTkdqlguenhv9HRAQd4dkxm4isKAGlKbkEWD9FgmzJSTgoUqJ1TucmKZAyEf5uBqXQQTkcLgLFDSsb9V1ycLKeybs2qeBYUwBXY8a%2Fs8ynQL6g6LSToEg6YgeFHRs3souIaoL7KegdPCJl8zjHR32bK%2BkKIvuNDOwuAkxlRc0BixOO29I3y%2BXRItK%2FJF90jKkl5Mg1oPS8t1mQpaSnpj2D2oPSE3iyawxf041wJdu6L%2F3w0yiM8QGaVMVTWUMxtePYrVXkEJZad9WUkBa7z7XjqzdYacDECVYfdVe8%2BX5HIYSvY89MYn6L0%2BLW2m78BSGCljwn50NHa5HAYmIIl5MlHyzotkCCteZdpBvj1ipTdl3ABfr4z1C266As3DJZE0yCaeKn1InkT%2F%2FikZe6TqWb7ma3WMaeZQxomGIZsG4eCOW%2FZD1%2FZurMbmkDBnuSYRAK24MYnqDdELmmrfJUnTaCADf%2FP3nWMQBEFv5ZuASzRFYdcAvZ3TYhVBya6bYxKgd7C%2BEbVeF6StlQDIPEY7O6rjyAMLAEvwv2b2xj%2Fg9dbbcK%2Fup%2BFI9owakSx4LPicMWksPLQIxeRcvNtupfS0v2uRl9Xkqbqfkr3a4C144%2BU6e88wvr%2BavQY6pgEA1T3PmD6%2BGF6gqy4h4YTEHTfEBgnMsrUJlNsxpZR30uQgDAb6hiZwWoqGGC63sIFwja%2FaRlHzsNBZoUceYS82xFPa6EJn6Sl9vigY%2FVK19EWlQVJ8Pt9RL3w0K333BHEWkrZ6W6Zi%2BDxESHc3%2BiZ10axlURpnlAyaDpAYFzdN8l76DuG%2FhxmDPy9Y2y52sxokC0FoY%2FQ8waey2qqPZsoWOw8FdotN&X-Amz-Signature=d5437cb66374ed8b668ced6c1368ca50c4fd420ecf7c8ce8dce492b6fb199804&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XGHQGVX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCoLiadHRHTlY1f0gy57EPMhNB40Tmsg8LwEaZ%2Bz0RydgIhAKdVh6cUYl9H2k4aMmKakRHOniEWCbV4a8WSSPh8Pad1KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymYxSeKnikcQLG4Lwq3AMDzoK71v%2FdTyfPrgjfEOniseAqjI8W4wexhcnNlfXEztTMLDLYf41YcQwV%2Bnc9rflftIXLLL09UKZqSCJcl5U2bj2tGhvwLoDGBx4rh407ylEGF2NxHkxtGy1J5o6bjAHHlj7QzKFUOknhjiJRyk9xxKlLF486inUXsoziHwIGWrXwp2hl%2Fi9hDJPIiwkHVtJPzlFPdt7jEVvIqJ2ugF71P18dfiBkU6H1qyleXfJ4Ux9ngoJ9aPwaYITpMUVIvRNXhJr8D1%2B6DgpYA%2BO%2F8v8Xt8Y0OQ72zJ1Gr3ct9mSsYOsrxVK6bkvIK8p92Xh2rgvdz4xftyW28wuFXPEaTuIBMxfc%2F0AaGs9255KTwmHA%2BMKtt03LP%2FR8ovls6c9op87Eda%2BUxnIoirq13DS1k%2FNa05ZLu441Y8Hj9VB%2Bh3i77b5YF4vQnoKbSlL5h1wnN%2B93C1%2BFJi5f9JJ8ntpdy%2FqSD0%2FvPEAnDDOUCy%2FODeczoRtU5H9vHAtbyxIrcnwC88vSM3%2FCUQcg6sNtWQbHkJEuLu%2FVSf6PMv1T2I62eTDChVvYbafWEEDStD5JPJiXjCxeqLiDcsJaQHquPhZ1KrxeuinwLTeUBCJay0PQEVxxqlkQMSj7uyd97RR%2BIzDav5q9BjqkAStYUISNr88Lx4b%2BezffVGYxSMm0nRRnvTXWnCT%2BGJZYUD2J%2Fop5pxbCaaik2NZaM4wWv2j9VWjg4vsZNnWGih0CvtdSw3mLDlhiqNDxfqaDNNRWtjdNWHCzACYHsJ34Yje%2BV0TTc8moFtSg4YcXtm7QaaVOWhTNVc9wMOYJCDA2onvL7YkUii%2FOEGtQRRFZgPqofDg8PKIrUCwAHtyoaibpWT6o&X-Amz-Signature=37dd6d9549e5ae8b591b42643fcdb91ae6e2c44c5ddf5281081615ab8847946d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRIJ6AS%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIBjI2mgzHxeX5iWM90NPIifYyiVqZFqGIYwfHZhVXqwIgGZLamARuJeC4ohGxSMp0lMRYhtO%2FTEOiEqKt5I0N1SsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDyf0cO0Ae6bsaY4FCrcA50VzFi0EPqOYnWl9OgXDMW%2BtImASIJINmTHWRztuQ0dwqWM83XSMlTZDAGoZkXdAJuqTFBXz71BWu5zMvWESHXkE8BdPixcAqXFkYsf5UDI5rNT7D3o%2BS%2FHokgkIsZyvXV5N7mOsW3jsexNRYoexIP759eCrPdo6IzorHtptJTPpHTwLBTLg8nZtp%2B7Jx6HWhYx07%2BeWQQ2ncN9Opyk%2BmXd3QaibGaZ8RVCqhG50XecL1gCET2VByDJuvww9cfMeZxxP7nLx%2Fs6sNvLBDQpYzMMKhTK1dou6Dx5eJwDNCmWFLB1u0n%2BwqSjq%2F7UEPRIeLQ0m3hoPXzey4SIFnNudC%2BYl3WuZshiKlkxu4LK7OfzRjcVrxQvMRBKoAqbBJE9nw70dgsdUmcCeIYtvAkVKcL10JvWErsij1NU1fGIGlBqFG1iaBOPwO0wkTqnc%2FZN0YmAaZ34L7Lm8L0U3Oj2ZZPqtADhT3AkSK9hz0QhBk1ofoLBb%2FQu%2B7W9ibWOBDVfNN1Ogw%2BcE6EYZzvjEDWe37WLZoVio0Yxw0W33YEIeVUtJva6ZbS7ngfMppEAQomGzCQw8CdTBufjRzqA9vvMKZMYNplH%2B5mNP7r%2Bq9G0NJ6eQ3cfUF%2B0UMz9Es%2FcMIjAmr0GOqUBP0j%2BMGLyDp0FQjjwdg%2FbGa8NTTwwkBe0Pih%2FixcWYPb9o7RQyO8TbreeiaLFBbxKLBFkhnUfMsAl1A%2Bh0htonduaQwaVfb470iWpmFEStdCbS59o1n%2FvuYkvdOHQMZ0UOYcVgjLDkXYcobopQ7cf5VhoLDzwoCF4pwDcRau9g%2FsVSamMll0G6mvNIkG7oXOHXd%2B4FG2vDOemlpDvUsrjRtG%2Fbw7T&X-Amz-Signature=fb5c9c5b4ab6ffecf3b7a538e02ffaa5fdceb41417137672b3b78219e737fb34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5PEEST%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T003442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIHIUUI1p0yOJWoKFGl6fnDZ1LOSR6vl6onQNr%2FGL2QX9AiB31K3Zqry7OCV88HdK%2F1mnzTT%2FEO4drbisvghpbJtBjiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5uez6BHImQiedzBaKtwDUtROAa73nxsMZTkdqlguenhv9HRAQd4dkxm4isKAGlKbkEWD9FgmzJSTgoUqJ1TucmKZAyEf5uBqXQQTkcLgLFDSsb9V1ycLKeybs2qeBYUwBXY8a%2Fs8ynQL6g6LSToEg6YgeFHRs3souIaoL7KegdPCJl8zjHR32bK%2BkKIvuNDOwuAkxlRc0BixOO29I3y%2BXRItK%2FJF90jKkl5Mg1oPS8t1mQpaSnpj2D2oPSE3iyawxf041wJdu6L%2F3w0yiM8QGaVMVTWUMxtePYrVXkEJZad9WUkBa7z7XjqzdYacDECVYfdVe8%2BX5HIYSvY89MYn6L0%2BLW2m78BSGCljwn50NHa5HAYmIIl5MlHyzotkCCteZdpBvj1ipTdl3ABfr4z1C266As3DJZE0yCaeKn1InkT%2F%2FikZe6TqWb7ma3WMaeZQxomGIZsG4eCOW%2FZD1%2FZurMbmkDBnuSYRAK24MYnqDdELmmrfJUnTaCADf%2FP3nWMQBEFv5ZuASzRFYdcAvZ3TYhVBya6bYxKgd7C%2BEbVeF6StlQDIPEY7O6rjyAMLAEvwv2b2xj%2Fg9dbbcK%2Fup%2BFI9owakSx4LPicMWksPLQIxeRcvNtupfS0v2uRl9Xkqbqfkr3a4C144%2BU6e88wvr%2BavQY6pgEA1T3PmD6%2BGF6gqy4h4YTEHTfEBgnMsrUJlNsxpZR30uQgDAb6hiZwWoqGGC63sIFwja%2FaRlHzsNBZoUceYS82xFPa6EJn6Sl9vigY%2FVK19EWlQVJ8Pt9RL3w0K333BHEWkrZ6W6Zi%2BDxESHc3%2BiZ10axlURpnlAyaDpAYFzdN8l76DuG%2FhxmDPy9Y2y52sxokC0FoY%2FQ8waey2qqPZsoWOw8FdotN&X-Amz-Signature=e188ea50e1828d85041a422610ada51b9fc81e160066e1d0568ac3122f4ab6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
