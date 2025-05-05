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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRM5ARI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA25VKUUYeGAtvGFCYDjSDCTFVaSj5W3FDtYw8yLjiswAiBlTs8Bk9ujw2f9M4MOV2f1kDWpzYDixbQ%2BabJBSoqyXCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM1ysoVDaKWCrpwRioKtwDyQfp2JK7Pj6X4hAKzO59qA%2FRcrAs3PalIiJKoyH%2B%2BfgeBQpSEx7daIr4TxKKwbw0HaHlnDsBqNyxG8%2BPNPKS%2FEtmNc8oVIPH1DFugSF1z1mkAHr%2FOz9%2FRjJP6Q0LN2xEpUrm0%2B0Vh2RT6X3MGdYCGAIVzIAe0Ho2wjNyQ3sCu%2Bb765GWcZAOQWnKPiuM6dUu8tC4F9CWIQd68cVaW2pH7Yk4eUjB9yurIkNMbTc48Dcz9pD387mF3TobyQZ8DWPL%2BqmRA%2FSlKMdLjftCe4GMNoacwWTouRKwRfPvrBe8kglKOpr4idScEUWhj3P%2FCokBZmqI62MQZddYDMlNI89L5ST%2BHp5FF7t2TnTPY0ndOml3zaGqGWIDT3nNagfmUHrDOX7lPqmOHYyA8qWOeJP7RfoaUwSAySH8mjNY600eY1A1y3bzb9axa00mdpDeyOWnIaJG2Aa%2BLJjukISMjTn5t6uFRLLZDTV3bdRlqsrEF0HlcdZIqW%2Fg%2FqWD4QnhUqONfMTZnn0YSrcceikaNijw95cv%2F50QVjQh%2BoTU0aUZLOJo5tLTqtAeABawZuIiS%2Foxj2c6Uqlo74eKmkA48QG9qaOHb1aMiwFL0hq%2BogwGQ7oheIY5tMpu4WITn%2Fow0oLhwAY6pgEe4UAE%2BQKmIEfYj%2BnWcRqEDl6huF%2FPKVX5hUq23%2F4ci1rJvE4dbjC8gQp0HFDPTU7BuBR%2FbDgqAoxe1x5ll6Nxy0lROxsF2%2FcJy%2B9tzkZlF1QZMVEvhE88xKpD6Q4XFd9HDShZgCM9BLhdN6Yl8OCDjPxG2QmLckJ4832MwoxpPcJphzlbPmYB7pWPffB37OE9SBj%2Bj6e4O4bGuaNA7Pmg%2FX1UW9yN&X-Amz-Signature=b9f9abf80dff0bdee81d118a8901df343629c554c45ee882f627925d210c3ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRM5ARI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA25VKUUYeGAtvGFCYDjSDCTFVaSj5W3FDtYw8yLjiswAiBlTs8Bk9ujw2f9M4MOV2f1kDWpzYDixbQ%2BabJBSoqyXCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM1ysoVDaKWCrpwRioKtwDyQfp2JK7Pj6X4hAKzO59qA%2FRcrAs3PalIiJKoyH%2B%2BfgeBQpSEx7daIr4TxKKwbw0HaHlnDsBqNyxG8%2BPNPKS%2FEtmNc8oVIPH1DFugSF1z1mkAHr%2FOz9%2FRjJP6Q0LN2xEpUrm0%2B0Vh2RT6X3MGdYCGAIVzIAe0Ho2wjNyQ3sCu%2Bb765GWcZAOQWnKPiuM6dUu8tC4F9CWIQd68cVaW2pH7Yk4eUjB9yurIkNMbTc48Dcz9pD387mF3TobyQZ8DWPL%2BqmRA%2FSlKMdLjftCe4GMNoacwWTouRKwRfPvrBe8kglKOpr4idScEUWhj3P%2FCokBZmqI62MQZddYDMlNI89L5ST%2BHp5FF7t2TnTPY0ndOml3zaGqGWIDT3nNagfmUHrDOX7lPqmOHYyA8qWOeJP7RfoaUwSAySH8mjNY600eY1A1y3bzb9axa00mdpDeyOWnIaJG2Aa%2BLJjukISMjTn5t6uFRLLZDTV3bdRlqsrEF0HlcdZIqW%2Fg%2FqWD4QnhUqONfMTZnn0YSrcceikaNijw95cv%2F50QVjQh%2BoTU0aUZLOJo5tLTqtAeABawZuIiS%2Foxj2c6Uqlo74eKmkA48QG9qaOHb1aMiwFL0hq%2BogwGQ7oheIY5tMpu4WITn%2Fow0oLhwAY6pgEe4UAE%2BQKmIEfYj%2BnWcRqEDl6huF%2FPKVX5hUq23%2F4ci1rJvE4dbjC8gQp0HFDPTU7BuBR%2FbDgqAoxe1x5ll6Nxy0lROxsF2%2FcJy%2B9tzkZlF1QZMVEvhE88xKpD6Q4XFd9HDShZgCM9BLhdN6Yl8OCDjPxG2QmLckJ4832MwoxpPcJphzlbPmYB7pWPffB37OE9SBj%2Bj6e4O4bGuaNA7Pmg%2FX1UW9yN&X-Amz-Signature=ecc5dec607487d7f455f56e3f4a2fda5bf173ecc83334878793ae184badc71a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRM5ARI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA25VKUUYeGAtvGFCYDjSDCTFVaSj5W3FDtYw8yLjiswAiBlTs8Bk9ujw2f9M4MOV2f1kDWpzYDixbQ%2BabJBSoqyXCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM1ysoVDaKWCrpwRioKtwDyQfp2JK7Pj6X4hAKzO59qA%2FRcrAs3PalIiJKoyH%2B%2BfgeBQpSEx7daIr4TxKKwbw0HaHlnDsBqNyxG8%2BPNPKS%2FEtmNc8oVIPH1DFugSF1z1mkAHr%2FOz9%2FRjJP6Q0LN2xEpUrm0%2B0Vh2RT6X3MGdYCGAIVzIAe0Ho2wjNyQ3sCu%2Bb765GWcZAOQWnKPiuM6dUu8tC4F9CWIQd68cVaW2pH7Yk4eUjB9yurIkNMbTc48Dcz9pD387mF3TobyQZ8DWPL%2BqmRA%2FSlKMdLjftCe4GMNoacwWTouRKwRfPvrBe8kglKOpr4idScEUWhj3P%2FCokBZmqI62MQZddYDMlNI89L5ST%2BHp5FF7t2TnTPY0ndOml3zaGqGWIDT3nNagfmUHrDOX7lPqmOHYyA8qWOeJP7RfoaUwSAySH8mjNY600eY1A1y3bzb9axa00mdpDeyOWnIaJG2Aa%2BLJjukISMjTn5t6uFRLLZDTV3bdRlqsrEF0HlcdZIqW%2Fg%2FqWD4QnhUqONfMTZnn0YSrcceikaNijw95cv%2F50QVjQh%2BoTU0aUZLOJo5tLTqtAeABawZuIiS%2Foxj2c6Uqlo74eKmkA48QG9qaOHb1aMiwFL0hq%2BogwGQ7oheIY5tMpu4WITn%2Fow0oLhwAY6pgEe4UAE%2BQKmIEfYj%2BnWcRqEDl6huF%2FPKVX5hUq23%2F4ci1rJvE4dbjC8gQp0HFDPTU7BuBR%2FbDgqAoxe1x5ll6Nxy0lROxsF2%2FcJy%2B9tzkZlF1QZMVEvhE88xKpD6Q4XFd9HDShZgCM9BLhdN6Yl8OCDjPxG2QmLckJ4832MwoxpPcJphzlbPmYB7pWPffB37OE9SBj%2Bj6e4O4bGuaNA7Pmg%2FX1UW9yN&X-Amz-Signature=5d30d40fd76043232f9900391c0953ce1721a3f5e5f064eebbe972c6aaf52115&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNKWUFL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCID%2FYH8FzBn%2FwhijTi6QyCKj9zeinZZaRlbmsOvEObHSpAiEA7kQBxG0n2Cc2VeIeMNR7PfZ74OEZc%2BHo%2BYz5wQ6akWYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDIjjgiGPaGuJN6KrgSrcAy0R%2FQ%2Fadtkk19nQXwX2kZcJd3qUyRcXdvJ0fgGpHBb2G6fZPSFIc%2FhCO89zEL9ulQm14DXgQBY21w8T6vTT%2FPtuZeqU4R%2FvYTBezV%2BjyKTbFqUOPvsekN2sgYO%2FYnfJ%2FTp4iZ7ylg%2FwGqvr3Hv4ih4G5oWnh%2BgbOLClzBvleB3ncFvmQhOLcg4g9ivXtzabt%2BlBSzMK7pOmW%2BjpmMhSlcKeaIK252zawUJjcOdExxMs0Qr1h4jnVAti%2FU6a7yR3KSxsCS11e7dQgTep%2F4ZD4kLovhLLT6vo5SV4P5xxDKiYPmu4gUCkb3lIuU%2B3txOnwlAXbVtnmbDI7tltfeB1B3wkO6wv%2F6QXT3TI7TXYTStSLmSCnnoiIn9JINJ8wyDMpF4EaAqTjPQcisqXxaJVqlYOR9lN32mJA1XfjiFbwTZ2%2BB1l9y7K1x2fbYm%2FlYWhUPRyitL%2FzY0S3T2qM8xyILsPyep3BPshgxz2dFQnjJF1zKJsmffuSEISCqEQ6DnAfUY9BHghJ2q9pQ21fjn0tTPgyEdZsA%2BooU3yAg8vxPaHdk0OByXIs9jA%2BV3R3biw6YEA6Z3jGtHqN8GntIKwdGQy6KLauZa1Qff95fBE%2BhwmuKEnbcX1KiAOTJLDMIaD4cAGOqUBipdwtWGr5toNOAIgkPIG0TLIP1bYLsjIWDger5txIdndK%2FKzDdripK8vuX5Gj1Fs5R1%2BjOmrfkn6iUsETC%2BKoj9bEYGTMKCsjwiF1vMTxzXuWwR%2BnbY5eT59z%2Bd3jDWSrGeGR5mgObtI0Vu472Ud5%2BiCI4gcXGDIrxh0D7eqLm0lY0zx8hNVN9sex2y1%2BKsOyJfwXbPUQWXy4A3ifxz7W6b%2BZbcl&X-Amz-Signature=86d49a13411e63816528d580393111e8c6a7028ffb50ec48e22aa356b40e30c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVUAPKM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGAJ21vY4HcCerOpxTyNuTzu%2BUOsN1mnHO%2BWkOnx%2B4nbAiBcQ8Iz%2FrUw%2B5y8AgBrDlvMBPQSUiT%2FhjmYv6cFd%2FHWXir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMLGtgxo8l%2BaaQOHvJKtwD%2FCKH%2BxN5lS2xqJekoz44JHieCSO%2BbWiaJm%2Fd7r5I1Jy1Lmui3kW2NCH7QBPjGiGY4oKfQdR7X3rQe%2Brbxqf4rV6oo5Qv8niBP6DWy7cLIefgB7mL7VvmztjVrjt6qzeDW%2FvW6Uq7ulgxzQqeddPPX1pMSky2ycQxHnxD971pjvUTZVW6HhxhcBZB%2BV6wMEBmxcy1VVMkzNmmxfFlgdODo4Lic12m5nWzCxPFkIDKsJiirl%2BcqqkIcUeiisR%2FIBvaRoe6ulcYVzc59D7j38nAEdURl0m5c4J73qkUPbuMKgXZ186QQFtiT8RGVbhCUtysLN8iUMXmssWUP3ZqHEMgx0lI%2Ft4TNA%2Be9VSvRtsiZ4DT%2FTFT9Aplb6UdwFxiKgfIOF3ZQ0WAhnTzjXR8y6nyEvbq9uxvX8FaMjIx1EtXlzMF3OHGDbDi90Kw%2BnKlCWYLqqNZ5ioZvqFWw236BsxkvBKIc7b3uZiqlxnvR6Y6ySOFHDdraViKNCHxe1qJhdHjSHMwFvBQsRQmpLIC%2B6Yeo5HMdRmsyG0nk1CN%2FYfeJyRJ%2BybN8vAvunZiRiEM28UR%2BlvKVgOnX6yCBsRj%2FqLea%2B96k%2FTRUFCY%2Fiff8V4YkgrIMUpbMAc%2FiXpwGmAwmoPhwAY6pgGPqzo27PsUUmjt8wVR6WxaTxrokjgr38%2B958nWdjUDxjzABoJNheZUTyCaPgzq7sOv8ReXSxZMSQCOlNCF7%2F6NEphOFuToCllYs%2FKnGl44mrpd1iEooT88lLVA64IJl9tVeOlle4KSRKr6MsEP5VqaP8g9olG8uUicH0GKQ7t1s8Ca7RWBMYcRgp0%2Bhn9R5%2B6MqbmNth%2FzM9QX5V97ZT29RCvTm%2BCO&X-Amz-Signature=a486c3b027ffd4a17ddf95826cf43dfb168183426b39f5990d1ed49de0905439&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNRM5ARI%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA25VKUUYeGAtvGFCYDjSDCTFVaSj5W3FDtYw8yLjiswAiBlTs8Bk9ujw2f9M4MOV2f1kDWpzYDixbQ%2BabJBSoqyXCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIM1ysoVDaKWCrpwRioKtwDyQfp2JK7Pj6X4hAKzO59qA%2FRcrAs3PalIiJKoyH%2B%2BfgeBQpSEx7daIr4TxKKwbw0HaHlnDsBqNyxG8%2BPNPKS%2FEtmNc8oVIPH1DFugSF1z1mkAHr%2FOz9%2FRjJP6Q0LN2xEpUrm0%2B0Vh2RT6X3MGdYCGAIVzIAe0Ho2wjNyQ3sCu%2Bb765GWcZAOQWnKPiuM6dUu8tC4F9CWIQd68cVaW2pH7Yk4eUjB9yurIkNMbTc48Dcz9pD387mF3TobyQZ8DWPL%2BqmRA%2FSlKMdLjftCe4GMNoacwWTouRKwRfPvrBe8kglKOpr4idScEUWhj3P%2FCokBZmqI62MQZddYDMlNI89L5ST%2BHp5FF7t2TnTPY0ndOml3zaGqGWIDT3nNagfmUHrDOX7lPqmOHYyA8qWOeJP7RfoaUwSAySH8mjNY600eY1A1y3bzb9axa00mdpDeyOWnIaJG2Aa%2BLJjukISMjTn5t6uFRLLZDTV3bdRlqsrEF0HlcdZIqW%2Fg%2FqWD4QnhUqONfMTZnn0YSrcceikaNijw95cv%2F50QVjQh%2BoTU0aUZLOJo5tLTqtAeABawZuIiS%2Foxj2c6Uqlo74eKmkA48QG9qaOHb1aMiwFL0hq%2BogwGQ7oheIY5tMpu4WITn%2Fow0oLhwAY6pgEe4UAE%2BQKmIEfYj%2BnWcRqEDl6huF%2FPKVX5hUq23%2F4ci1rJvE4dbjC8gQp0HFDPTU7BuBR%2FbDgqAoxe1x5ll6Nxy0lROxsF2%2FcJy%2B9tzkZlF1QZMVEvhE88xKpD6Q4XFd9HDShZgCM9BLhdN6Yl8OCDjPxG2QmLckJ4832MwoxpPcJphzlbPmYB7pWPffB37OE9SBj%2Bj6e4O4bGuaNA7Pmg%2FX1UW9yN&X-Amz-Signature=8eebe76c1a3d69c7520f6f7a1b4d0c3347fa85be7d2bf23934c02bc61982a915&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
