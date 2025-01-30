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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEAV47Z%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3ShCuV68Rex3INTpFRhNv5RW124JrbvasL3V5naXM6gIhAMY9aoi7RNLjXA2ufE7PYMh3L9k5Fu8BDR1GU5pnKFJYKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZwxxWiPs5HQ44ekcq3AN3t3QrDhqAfF2RYkwi77BLi64JnwO8kw3ZQHQqD8QU34rFL6lPIRIRbI6UVwK1SB8O6H46WlJhWZxfZrEqIRrDkfrEW99YOXjcJyDpkBrGdy2Y8Oe8ZJ8SQ9e%2FsoiuXNTDZjEsIsWpxPbOTHePjIrltreJxAvCXz4iNeZMmXF2QHKgkdgSI50HfCSqqZ81Ws28R3ReUWlpni07HVrmKObmbdTPFABug7FSpXmy%2BeOtb4GU4Zju6MfhIGmHFW9fUHtueIO%2FHeI2f0Bd3U3p1Z4C5zMmqWN3nyOD2D1r3nciZ2VUpNtWrGHH2hx9Lrp%2FK5jwpvSB%2FRW0o0YHRDqJE3LlN9kbJMTWuHodbguw7ut3zR0%2FVaeUPaGMyYjI7qezaCERqhyirjWEcRYbshM5fKU4Pc%2BiVnYJUZN6glVeHHqWY%2FmfdP30NdKPNmeSCWH8RydljBopzRft0MA66gG%2B8cstugsLSFEDyR1p414f20CPd%2BG8y5z7qsgMFsZHW2cU75cs%2Fw42qrrz%2BYGBQ05zPnfZiqB5yAfbF%2BGuOHH8Bl0nIj%2F1x3EDxTYZAjKJIRR%2BFrDSOMWJD2d3XXKjrk7kafpFteclCzjURd%2FCQCO%2FR28G6VWzYQaQ9LtDfirwTjC7xe28BjqkAUOfKnmcxbhYcCt7G7SuLvDl9uqP7kevwYisI2xKctKJ4y%2FWaNWgqT4pB71AzQqih%2Bwx2UOPjhI%2BbglJMKYbi3vxhVkLahWIEuQ%2FqQyvCw7rPxRSSN0BTof8NAeme3JJf5YA1OW6iV7zmxc3qsTL47s36ZGjdlQwf8bIKoVvMicP%2Fj9Ggk1LCaRAtMEuZVbiy7B5o78EOXhyx3jSTi%2FomKMG6K0C&X-Amz-Signature=1ca4660b7f632859a1a99fa41ba51cc333117f97b9c8338e2d60b65b17812238&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEAV47Z%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3ShCuV68Rex3INTpFRhNv5RW124JrbvasL3V5naXM6gIhAMY9aoi7RNLjXA2ufE7PYMh3L9k5Fu8BDR1GU5pnKFJYKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZwxxWiPs5HQ44ekcq3AN3t3QrDhqAfF2RYkwi77BLi64JnwO8kw3ZQHQqD8QU34rFL6lPIRIRbI6UVwK1SB8O6H46WlJhWZxfZrEqIRrDkfrEW99YOXjcJyDpkBrGdy2Y8Oe8ZJ8SQ9e%2FsoiuXNTDZjEsIsWpxPbOTHePjIrltreJxAvCXz4iNeZMmXF2QHKgkdgSI50HfCSqqZ81Ws28R3ReUWlpni07HVrmKObmbdTPFABug7FSpXmy%2BeOtb4GU4Zju6MfhIGmHFW9fUHtueIO%2FHeI2f0Bd3U3p1Z4C5zMmqWN3nyOD2D1r3nciZ2VUpNtWrGHH2hx9Lrp%2FK5jwpvSB%2FRW0o0YHRDqJE3LlN9kbJMTWuHodbguw7ut3zR0%2FVaeUPaGMyYjI7qezaCERqhyirjWEcRYbshM5fKU4Pc%2BiVnYJUZN6glVeHHqWY%2FmfdP30NdKPNmeSCWH8RydljBopzRft0MA66gG%2B8cstugsLSFEDyR1p414f20CPd%2BG8y5z7qsgMFsZHW2cU75cs%2Fw42qrrz%2BYGBQ05zPnfZiqB5yAfbF%2BGuOHH8Bl0nIj%2F1x3EDxTYZAjKJIRR%2BFrDSOMWJD2d3XXKjrk7kafpFteclCzjURd%2FCQCO%2FR28G6VWzYQaQ9LtDfirwTjC7xe28BjqkAUOfKnmcxbhYcCt7G7SuLvDl9uqP7kevwYisI2xKctKJ4y%2FWaNWgqT4pB71AzQqih%2Bwx2UOPjhI%2BbglJMKYbi3vxhVkLahWIEuQ%2FqQyvCw7rPxRSSN0BTof8NAeme3JJf5YA1OW6iV7zmxc3qsTL47s36ZGjdlQwf8bIKoVvMicP%2Fj9Ggk1LCaRAtMEuZVbiy7B5o78EOXhyx3jSTi%2FomKMG6K0C&X-Amz-Signature=6ce99493176f72f83baef1479385062fdac4a6681e47bcfcdffced239fb55ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCC2JKNV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe%2B1ojkk72fgO3eRqWho%2FWGylHItSKs%2BO27MabotvgwQIgfDK6IsT4UeJH%2FLDQa3QScx28vHBEdyxeKl3EPB%2FJ8LYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJR3aciD5aOV26IZircA6HE9y4ocJgEFfVV6LJepPuctTLGg9KiOQaiyvnNT%2FT%2FYRt73ROmxQUuCVlYopLObyKREWR5MUnSsthjSV27luW%2F6PyU6QtZnpgkyvrxQbp97bThaOcfgOwbo5sejOV7rno0tlkr4OcXPu%2F8SgOyHPtjBpJTtS2ggOwcd5GC1uZsfZOdwOM0XrHCmN96VUz5W7wXx6AAClDHE5FpqASC9GKWUHg4m3FXRGQrqARJt7xgxjk%2F4VUyTd1oY0awE5SpP8c8Ut7lV6x9HqxrQ4RnaGDjAWevm%2FmYb7YY%2FzNt5cwL3nbJSyNrWwm6hjbZ5fXjgxyc3bX9Pj%2F398kBCoX5UqNw8T1PJKexTf0hFMi6mSHmNUsEcfXBr76BTtB9JXqt45w0Q4WVoQ6e6XGqQsLNBs8oUMvDb9%2Fe%2B8K4%2F8RZbPUhGtxjg8EiaI4fluGpcwyQBYaSczYPJaoLDA3wvnEUyBZrlC2alGYQ8feygP6wbgtNeBsz33rkW0nUhsyvXsdNJWrml5jHsqwsEl%2FNZPK2pNTCY3mnFKjSPpVGjbBuqoq4pQWpHTT5eSzNq46T7UWDxL34WLNXe%2FwKxMuHGhM3xwDX0Df%2BQaVGXb%2B%2F4Qup%2Fd%2B0KKvE%2B5Klh6hEA5%2F1MKvF7bwGOqUBo4cALb1%2Bscl95%2Bk%2FsX%2FTfWKSsl9HJbbd7JMpLc2MHtUEbjScAi6Nl0oN87GrEblj2wxp0bz3RpqNfqUPWn1PrSZm0%2F6JYZhuj0cx8t2jrSRSPNov5RTFBBzHU7BN8PKTOv%2BPm0ikf%2BcYPWsPrANtGWYMp0N6H1tybgTGwN82baP928%2FqSMgdeQcYTPlX5%2Fm5gajVVK88bqNQjuMOEFas7HYz889A&X-Amz-Signature=f65580516cb0ebac8492c00c232ddc1d0627625dc3743f73cca586f67b072487&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNUAOZFS%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmHkDCu1JnlscaY2z1U%2F8Kgt7U0SaSb%2Bl6tynR73pGCQIhAPOZ2Za2aeNYA8zzuYzsXcMf%2FRHWWjxIGC573GyVOCDBKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6ZNc2SS0mbZ9V3XEq3AMnf4Tss2JQyyfRpN3uEo1qTvyn%2BlZvUNK%2FRxLw1vCTQNAhqT8bYlF9XaZzaAAccEPgf5qXavDr05AFHZcdwh1Ol0E5XqY1MBDasvj0NXr2OmYV%2FW1u%2FZMBdT%2FCrzb%2B9vXCoNMLxq0NITjgfnMCDp5hjCK%2FdeMgJSqUCjCRwhtckGm9ovlZz9H5DBecsCJURYXsMmUQR3NEyxRU3ao%2BCByPkAinNCKoQfoBAeh4T7ovRAcbyMpXmolqRAHyABvJluFy0UthpY7dx%2BAQFuF1SDy2bnOeaQu90Oj7vdr%2BorrEsWmkDJjY3dH8I0qV5CJXNIveVDWPdOTagLtkBpbkqCFp4M8xiSRIHLymK5d9aopqbrIgZQrcoMIFjAukar16v%2Bt3Zj4IyCmn7jRMv%2Bl0KbW6JyXf67NsR5lmcHoBKhZdNBurGwbtI%2F9CfhqW66EQ%2BpTqk%2F4BPLcqiuURQryUXY9dbPCqBTbKwkYwcm8ySstzthpPLLnh1BUxWc%2BioEiWFNGz%2FQj%2B6Cf5bsposMjDFepcgBFM%2FXVZTbzRbgYXcamMWV%2BTTqlGvImXF8QRFZUZzJVgktApL4dpYF44pxPxAJARmCRaVdUrwGp3qJxYInBAK8LROMyDZ0pxXJLuiDDxxO28BjqkAWV6Z1EKd%2FbgbU8RpVtqblfGzsnnifqczfFz0SPy4z%2BYgyx%2F8H3A5bfqWdIa1EB7D0%2Fkrn1tlYzOi1gLU4h0SmQyCv9RDM5wL79i9hA9oC2dweeXbbJVYUC8LQDPfjyi8ezlw2IUUKVX%2Fs%2FjxgDyH2oeR5W7VI3l20SpjVPGbcrLc28nG6PVZ%2B1ZDOIDk5nFzrA37deYGOo5YPM7JWtzICorlmSI&X-Amz-Signature=3799992d5af9b39b2f818ff030c777c4e7988e15428758ca9233a0afd996adad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEAV47Z%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3ShCuV68Rex3INTpFRhNv5RW124JrbvasL3V5naXM6gIhAMY9aoi7RNLjXA2ufE7PYMh3L9k5Fu8BDR1GU5pnKFJYKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZwxxWiPs5HQ44ekcq3AN3t3QrDhqAfF2RYkwi77BLi64JnwO8kw3ZQHQqD8QU34rFL6lPIRIRbI6UVwK1SB8O6H46WlJhWZxfZrEqIRrDkfrEW99YOXjcJyDpkBrGdy2Y8Oe8ZJ8SQ9e%2FsoiuXNTDZjEsIsWpxPbOTHePjIrltreJxAvCXz4iNeZMmXF2QHKgkdgSI50HfCSqqZ81Ws28R3ReUWlpni07HVrmKObmbdTPFABug7FSpXmy%2BeOtb4GU4Zju6MfhIGmHFW9fUHtueIO%2FHeI2f0Bd3U3p1Z4C5zMmqWN3nyOD2D1r3nciZ2VUpNtWrGHH2hx9Lrp%2FK5jwpvSB%2FRW0o0YHRDqJE3LlN9kbJMTWuHodbguw7ut3zR0%2FVaeUPaGMyYjI7qezaCERqhyirjWEcRYbshM5fKU4Pc%2BiVnYJUZN6glVeHHqWY%2FmfdP30NdKPNmeSCWH8RydljBopzRft0MA66gG%2B8cstugsLSFEDyR1p414f20CPd%2BG8y5z7qsgMFsZHW2cU75cs%2Fw42qrrz%2BYGBQ05zPnfZiqB5yAfbF%2BGuOHH8Bl0nIj%2F1x3EDxTYZAjKJIRR%2BFrDSOMWJD2d3XXKjrk7kafpFteclCzjURd%2FCQCO%2FR28G6VWzYQaQ9LtDfirwTjC7xe28BjqkAUOfKnmcxbhYcCt7G7SuLvDl9uqP7kevwYisI2xKctKJ4y%2FWaNWgqT4pB71AzQqih%2Bwx2UOPjhI%2BbglJMKYbi3vxhVkLahWIEuQ%2FqQyvCw7rPxRSSN0BTof8NAeme3JJf5YA1OW6iV7zmxc3qsTL47s36ZGjdlQwf8bIKoVvMicP%2Fj9Ggk1LCaRAtMEuZVbiy7B5o78EOXhyx3jSTi%2FomKMG6K0C&X-Amz-Signature=c24aa4fe45c6466b3d199f297cd83807793f801d5d003d9ea96d472fa09d1066&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
