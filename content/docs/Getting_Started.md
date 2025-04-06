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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4G2FRT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCEwLNCyAsVpJHxTUCrWfUBr41PfU49EpFnk5oMjRe2AiEAxPTIbnfgP4FP6uJ9ds2b96ylrcYswG9RnHpJN0mBuEwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCov%2FbHuE1nNUzHOEyrcA82omSjbRDpk5HbahWVKpzYXpYMCnIp%2FevB%2BN3wepW5p56a37jsAaOC30NOmkEmT1A28lkHTYt8a2Lp2idSUwxEZkKI1glAWWYBORY0laNVsP0olKq87vYNkXz5j%2F9pa102xWLC%2FPBm%2B2sd2wSCi5kdkNMszzY9rmsdcquy69yVdeSbhmH3jbXzd41OEbJNfFda3H%2BjTsYRfzx%2BMIUTjOolNsk33RyTjdExk6%2BBuixOyiVNejQgCrulqWgTkk14cAa2XssSNNlIwAPD7LJIIc6q5hYw%2Bk8g7bOCUHoS3kCcVKwqFr2o0ERa5MgBYNqZ66FMXmYTo7%2Bvzwb9ghwI927oT8gmFk11eDm7TOzgdjopBeViatyHTYD7mxqjjYbBI341bnddXl80K6GyvtwfBcDdJTxRSivJDRx8tsC43mtvrn%2FpAC9nSiNngC6NJpIto3xd0N09c%2FbKq3qsia9HDMmKVx34wo3K6JRpiTMdU73DE7r%2F8%2FAVeeN9C5yarrItZ6MibdAdTTaX16BIOsIzCazYjYUyA%2BkTP8gogbLBOZGBBJjZt6Ge0VVdaIreDvk%2BbrProvuiuN2guRyo%2BrTZzMR%2FLLzykiVRDp7WeUnKOSERgjm6IuTnXCM%2FNqApnMMb%2FyL8GOqUB%2F0%2BBSJS%2Fxl4Cx0GLhcjFWHk2e01YQuZgIoq470E2ADPvLS9ET9EVTSv%2BGQQr8SJFuAt8V5qA33ZwDxaEStobE0bl%2BzsnxBm5Cnr0kglqU%2F4vxz7nhvExOLRvNCssv5DwaVVHQP9DfXcDe0V7Db0N6IzCo%2Bhw7O8nH5tzz2FLP%2F43PGtt2QQOquuDAlz7Lum%2B0xs%2B%2BaF6eDsNYmS%2FuYEik3DpFQff&X-Amz-Signature=6984508bd9bd67dbe0894597fbfd9ad041f5664d8515065070ada95c2f4ced57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4G2FRT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCEwLNCyAsVpJHxTUCrWfUBr41PfU49EpFnk5oMjRe2AiEAxPTIbnfgP4FP6uJ9ds2b96ylrcYswG9RnHpJN0mBuEwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCov%2FbHuE1nNUzHOEyrcA82omSjbRDpk5HbahWVKpzYXpYMCnIp%2FevB%2BN3wepW5p56a37jsAaOC30NOmkEmT1A28lkHTYt8a2Lp2idSUwxEZkKI1glAWWYBORY0laNVsP0olKq87vYNkXz5j%2F9pa102xWLC%2FPBm%2B2sd2wSCi5kdkNMszzY9rmsdcquy69yVdeSbhmH3jbXzd41OEbJNfFda3H%2BjTsYRfzx%2BMIUTjOolNsk33RyTjdExk6%2BBuixOyiVNejQgCrulqWgTkk14cAa2XssSNNlIwAPD7LJIIc6q5hYw%2Bk8g7bOCUHoS3kCcVKwqFr2o0ERa5MgBYNqZ66FMXmYTo7%2Bvzwb9ghwI927oT8gmFk11eDm7TOzgdjopBeViatyHTYD7mxqjjYbBI341bnddXl80K6GyvtwfBcDdJTxRSivJDRx8tsC43mtvrn%2FpAC9nSiNngC6NJpIto3xd0N09c%2FbKq3qsia9HDMmKVx34wo3K6JRpiTMdU73DE7r%2F8%2FAVeeN9C5yarrItZ6MibdAdTTaX16BIOsIzCazYjYUyA%2BkTP8gogbLBOZGBBJjZt6Ge0VVdaIreDvk%2BbrProvuiuN2guRyo%2BrTZzMR%2FLLzykiVRDp7WeUnKOSERgjm6IuTnXCM%2FNqApnMMb%2FyL8GOqUB%2F0%2BBSJS%2Fxl4Cx0GLhcjFWHk2e01YQuZgIoq470E2ADPvLS9ET9EVTSv%2BGQQr8SJFuAt8V5qA33ZwDxaEStobE0bl%2BzsnxBm5Cnr0kglqU%2F4vxz7nhvExOLRvNCssv5DwaVVHQP9DfXcDe0V7Db0N6IzCo%2Bhw7O8nH5tzz2FLP%2F43PGtt2QQOquuDAlz7Lum%2B0xs%2B%2BaF6eDsNYmS%2FuYEik3DpFQff&X-Amz-Signature=4089e9807941ca89ea2295e25c58d03f71a70bb47582559f3c34a82a68b6abdb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VPENLP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fnKqK9Vm1L5D%2FxHi5rFTB9cWFzhQ%2BkUpOYjQOnrOyAiBDMkwyvWkH%2BwK9pZtOQw1kPGaczzOK9xA0q5cx4Z%2BiUyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMWeRVrv6yfkY9SNGQKtwDNsJrnR%2BvX4XUx3L3W7ZMLGUIxy3E6vVKqJuSYZF6anfVPt56ZfR03ekQz10jsZvJxe7xCEU3vZu4%2BybfMg3MUjDFXVZ9XCg90HUVdD2xZv9P52Uoc5sbKK%2BE0lHO7LKCTVlAacX02WrsWqZa3h8KV1qhglIHFYPr4Cc5XkwFTXsJiByJOcfvtUagia%2BCsi5fAJdb7qkx2BrWRvDdIpSw4cbSjTgkkG0fCDAiEy%2BxiKgndf%2ByX89agvkkP1fE559OohJRE3qlP8RPnOaD1%2BV8tKQWphuZxNSAkW02kHjP3oCl6hG5SARw7hwj%2B%2FnkWiEb7jSXZtFXN07eKov1LchMVqNJNiBtr3I0pAm%2F%2FTF2ceHuE7G%2F5sXvTnXsJX73OKZX4nWaq7XCviQupZagGPR%2BRWWCV4cybdVBMTvnlMN%2FzioqBn%2FPcqCVLa8ey725CBpr%2FcuXiho6qKccdv3G7Lta0Jd8n8a4CNXVw6mKAGHRd8oXdhAWml9lxhl6ACt8uXaZfzcsucWIRtAb6%2F9oGG2Jig554LICqs2ZUN%2F8RV623yjLyRGTL%2FDJRxdC39xnnOagUp84u6IvAPKm6fGEZmRxIpeZLpXe%2FNcUVsRfrRTtwmOWBBKfdYOxoltR7xkwrP7IvwY6pgFuYqxiC6bnWSVIu181xpmjqa4gzZhppO7CEF7kxW8ToOmPHV23he0gtvSSJJiXc1xxCs3vBk%2Bb4bB2mXnsiNc6ty2k%2BLg3SXfT%2FyMIXqB6OYqigJnYt1EYZOAo6uPcdks%2B1OYWcK7r1z4iFibG2TTCyOK4aSoz4DpWZRNoZTtGU%2Bg%2FSLjRRkNxG3yuozMBYudz2K5fmbXzcyk%2Fy2ODv%2BXh%2BIDUti3j&X-Amz-Signature=e5b84b685b9057bf42b26bad5de76ce199d115eb45c5c0a8723ea95da6ce348d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QB5J2EZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvXQyiQvgptzZlF9F8hqXU%2BV8hMUglHDddn8Vx3gLsZwIhAJJMcHZoZyYNYVozW5WhzLtMJlYlUPohj802We0e2q33Kv8DCEIQABoMNjM3NDIzMTgzODA1IgxT7Qf9gXNzuFQevV0q3AP0fcC3cGDxqbvm8wMH7U8l3kXVjEPC7dLlEb0ik%2BbmjaeeizRxxWKTcB%2FWtwvvPEUmBywUzZVMQqOx4V0KEwvM3199%2FJy2%2Fo5zWcZXvD8DhjvyPKvTIUI8rzHPuoEMvalxLKryHtnwtSWY%2Bvwj%2BcAYeNBgJHo8BwFCQPRieEw3U2YT2flIkhEAMQcBeETZjl0BUAxbW5GZ4EgTolyFRu6UanotNw9v5mAA%2FFuyeilY04HMnpHl6pMpe5cD14nf0kkp2gmm60SZSi%2ByolVteZ5Q1dAHXID9NHvg56kXb8c07AQcPYM9sHN37nHGGaz0nGbHTXkP6T3HBicbYNMbO5qJIWOKiJPrWpcLl1HIiPipZRGqVi%2FuW0%2F0MadchYrBK3nGCDMySm%2BUYNtQwuFoQzug%2FdTaHMg2%2BHrDrEFbw93dDtHgefHywZl1IC2Bs4gei4cVHTqvO2w7CbYcRmpammL3x3YxXcDt1I97I8oOwNN%2F%2FmBBYS0T18My8u5AjktLb9JGB7G5I%2FEyJqnH4sM0BlM4o%2FV2lB1qbewhPHBXJDy11rwuOcc4c8d2rZuZQPP6gMs4WSe0lsEA9ZZ6JexwFUjs1eWfDUT40UBZ72Xou%2BNra503Y8JXhqejWARaMjDR%2Fsi%2FBjqkAUuyRJDilts6ApBEfpjJxrRRLdoBaHUgz8axuN9Jh3Wvow7JFrTHUJM7kXqt2CL63GxOknw%2BXtRwI9vPjH48X5oj%2B1QkiKKkAUBGPb143iprfkEBLBVxLehmdnc3hVAbSakO5Z9tAe834hKowr8M9SeSJiV4ZZAtWLwuY7p%2FFwe9V7bJ8KMwMyhN%2F6FknQpw3DAW7bl1jir0CF3W5ultBlGrzG5f&X-Amz-Signature=ca5e2b01a68b1228deee14b4d4269af598b3b85539df6941cf326dad810ad401&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4G2FRT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCEwLNCyAsVpJHxTUCrWfUBr41PfU49EpFnk5oMjRe2AiEAxPTIbnfgP4FP6uJ9ds2b96ylrcYswG9RnHpJN0mBuEwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDCov%2FbHuE1nNUzHOEyrcA82omSjbRDpk5HbahWVKpzYXpYMCnIp%2FevB%2BN3wepW5p56a37jsAaOC30NOmkEmT1A28lkHTYt8a2Lp2idSUwxEZkKI1glAWWYBORY0laNVsP0olKq87vYNkXz5j%2F9pa102xWLC%2FPBm%2B2sd2wSCi5kdkNMszzY9rmsdcquy69yVdeSbhmH3jbXzd41OEbJNfFda3H%2BjTsYRfzx%2BMIUTjOolNsk33RyTjdExk6%2BBuixOyiVNejQgCrulqWgTkk14cAa2XssSNNlIwAPD7LJIIc6q5hYw%2Bk8g7bOCUHoS3kCcVKwqFr2o0ERa5MgBYNqZ66FMXmYTo7%2Bvzwb9ghwI927oT8gmFk11eDm7TOzgdjopBeViatyHTYD7mxqjjYbBI341bnddXl80K6GyvtwfBcDdJTxRSivJDRx8tsC43mtvrn%2FpAC9nSiNngC6NJpIto3xd0N09c%2FbKq3qsia9HDMmKVx34wo3K6JRpiTMdU73DE7r%2F8%2FAVeeN9C5yarrItZ6MibdAdTTaX16BIOsIzCazYjYUyA%2BkTP8gogbLBOZGBBJjZt6Ge0VVdaIreDvk%2BbrProvuiuN2guRyo%2BrTZzMR%2FLLzykiVRDp7WeUnKOSERgjm6IuTnXCM%2FNqApnMMb%2FyL8GOqUB%2F0%2BBSJS%2Fxl4Cx0GLhcjFWHk2e01YQuZgIoq470E2ADPvLS9ET9EVTSv%2BGQQr8SJFuAt8V5qA33ZwDxaEStobE0bl%2BzsnxBm5Cnr0kglqU%2F4vxz7nhvExOLRvNCssv5DwaVVHQP9DfXcDe0V7Db0N6IzCo%2Bhw7O8nH5tzz2FLP%2F43PGtt2QQOquuDAlz7Lum%2B0xs%2B%2BaF6eDsNYmS%2FuYEik3DpFQff&X-Amz-Signature=6cfa920085b0d493eabd9cfab1b24846521aee70b13f274564509c8261bfc67f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
