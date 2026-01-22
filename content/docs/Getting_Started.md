---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2NYPBX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC5B84cMlUmTOdKJsrx9b7%2B%2BSH%2FKcYwF0Cnm9%2Fa0kJb8AiBWc4y83WYp%2BMS443D05pUKzldrQSfnI1TfuIotfGSixCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPhSYzSRd%2BVHi16HKtwDnKhBMqWKs2mZT6mRhNVZKKFdRMEfObUT8qdlfuwgC%2FH77bDriXB8%2BYxMLXrNzbQASOLz%2FLAjxVhu0Eab10ZtG2uPmkIOZyh3SqI38ZPHtQyPDQqonBb8yOA128PAlfUQ3rgh0nqxOoYPdXix8DJxXlp2LRk1opk%2F3u1UCSJg7Ne2m5dPH2XWmoY0P7WATfFb0t9eLGG1IJ%2FftDFVc69Ejx2p2EhdObXnPsQDAgz5JFYHoq%2B1jEk4vnZFjHKD53IONiLwvnj0ddFKtW6itFnKYVojoZsP%2Ba0BmB3%2FRQwQ%2Brej3g82RsFISs5AtvUhKqHhZ%2Fuu625uH1EAtrmPqnySCjY0JT1Jlxy%2FsNYMNmrhTixXbZLSHUWxxdfvCajhlhvVlfaaGi9xkx%2FWotzqV0ScHEyXAVhq0%2FaZHysjurKwsDi9A8k8xWICVf7rgnhskBurpVJRVY4B8awWLgxHd5yNnjfcAZcmhZmqz%2BPlJuuwfsTY%2BoU%2FigWfD3jW5pWIcsC9QZiGTdf1oHQDLRQGwnw7IRz2bPDtUewU6zdW7%2BF0CESM7BJw15z4zywAcM16BqmS5X4qWAapQm2G9fcOZaPXgdcyJAxo5N7t6%2FMiRLLxOso5VHSaCVDLfPoySFkwnNfFywY6pgGQkIMz3noTVWkbvEqDckC7rkKyU1sqkWIeq0qzf0%2FrCJ3TObnWe54YnS3PUwyCWVLklZS6K99vZGbmRbOz%2BPnicg1AbCBSEA%2FU8JGSuHNkxmSlRLE%2FCX1mPQZ7WMmc2rWbrBUK%2B7LnQcsarD5bsprQore9twYpIg0kMvK0Bx3LYN7MotM0%2B5QWbQcxqtXD5LRYWc05pgvcic1KxAqibrxTW8HSVxDw&X-Amz-Signature=ae584527c56c1ad1c1fc53de77d95a889d283e69fcfbf98763079baed58903e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2NYPBX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC5B84cMlUmTOdKJsrx9b7%2B%2BSH%2FKcYwF0Cnm9%2Fa0kJb8AiBWc4y83WYp%2BMS443D05pUKzldrQSfnI1TfuIotfGSixCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPhSYzSRd%2BVHi16HKtwDnKhBMqWKs2mZT6mRhNVZKKFdRMEfObUT8qdlfuwgC%2FH77bDriXB8%2BYxMLXrNzbQASOLz%2FLAjxVhu0Eab10ZtG2uPmkIOZyh3SqI38ZPHtQyPDQqonBb8yOA128PAlfUQ3rgh0nqxOoYPdXix8DJxXlp2LRk1opk%2F3u1UCSJg7Ne2m5dPH2XWmoY0P7WATfFb0t9eLGG1IJ%2FftDFVc69Ejx2p2EhdObXnPsQDAgz5JFYHoq%2B1jEk4vnZFjHKD53IONiLwvnj0ddFKtW6itFnKYVojoZsP%2Ba0BmB3%2FRQwQ%2Brej3g82RsFISs5AtvUhKqHhZ%2Fuu625uH1EAtrmPqnySCjY0JT1Jlxy%2FsNYMNmrhTixXbZLSHUWxxdfvCajhlhvVlfaaGi9xkx%2FWotzqV0ScHEyXAVhq0%2FaZHysjurKwsDi9A8k8xWICVf7rgnhskBurpVJRVY4B8awWLgxHd5yNnjfcAZcmhZmqz%2BPlJuuwfsTY%2BoU%2FigWfD3jW5pWIcsC9QZiGTdf1oHQDLRQGwnw7IRz2bPDtUewU6zdW7%2BF0CESM7BJw15z4zywAcM16BqmS5X4qWAapQm2G9fcOZaPXgdcyJAxo5N7t6%2FMiRLLxOso5VHSaCVDLfPoySFkwnNfFywY6pgGQkIMz3noTVWkbvEqDckC7rkKyU1sqkWIeq0qzf0%2FrCJ3TObnWe54YnS3PUwyCWVLklZS6K99vZGbmRbOz%2BPnicg1AbCBSEA%2FU8JGSuHNkxmSlRLE%2FCX1mPQZ7WMmc2rWbrBUK%2B7LnQcsarD5bsprQore9twYpIg0kMvK0Bx3LYN7MotM0%2B5QWbQcxqtXD5LRYWc05pgvcic1KxAqibrxTW8HSVxDw&X-Amz-Signature=02328692f67a336a2759ac2319f01e8444d9ac76e20819b676503aadc9026251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2NYPBX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC5B84cMlUmTOdKJsrx9b7%2B%2BSH%2FKcYwF0Cnm9%2Fa0kJb8AiBWc4y83WYp%2BMS443D05pUKzldrQSfnI1TfuIotfGSixCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPhSYzSRd%2BVHi16HKtwDnKhBMqWKs2mZT6mRhNVZKKFdRMEfObUT8qdlfuwgC%2FH77bDriXB8%2BYxMLXrNzbQASOLz%2FLAjxVhu0Eab10ZtG2uPmkIOZyh3SqI38ZPHtQyPDQqonBb8yOA128PAlfUQ3rgh0nqxOoYPdXix8DJxXlp2LRk1opk%2F3u1UCSJg7Ne2m5dPH2XWmoY0P7WATfFb0t9eLGG1IJ%2FftDFVc69Ejx2p2EhdObXnPsQDAgz5JFYHoq%2B1jEk4vnZFjHKD53IONiLwvnj0ddFKtW6itFnKYVojoZsP%2Ba0BmB3%2FRQwQ%2Brej3g82RsFISs5AtvUhKqHhZ%2Fuu625uH1EAtrmPqnySCjY0JT1Jlxy%2FsNYMNmrhTixXbZLSHUWxxdfvCajhlhvVlfaaGi9xkx%2FWotzqV0ScHEyXAVhq0%2FaZHysjurKwsDi9A8k8xWICVf7rgnhskBurpVJRVY4B8awWLgxHd5yNnjfcAZcmhZmqz%2BPlJuuwfsTY%2BoU%2FigWfD3jW5pWIcsC9QZiGTdf1oHQDLRQGwnw7IRz2bPDtUewU6zdW7%2BF0CESM7BJw15z4zywAcM16BqmS5X4qWAapQm2G9fcOZaPXgdcyJAxo5N7t6%2FMiRLLxOso5VHSaCVDLfPoySFkwnNfFywY6pgGQkIMz3noTVWkbvEqDckC7rkKyU1sqkWIeq0qzf0%2FrCJ3TObnWe54YnS3PUwyCWVLklZS6K99vZGbmRbOz%2BPnicg1AbCBSEA%2FU8JGSuHNkxmSlRLE%2FCX1mPQZ7WMmc2rWbrBUK%2B7LnQcsarD5bsprQore9twYpIg0kMvK0Bx3LYN7MotM0%2B5QWbQcxqtXD5LRYWc05pgvcic1KxAqibrxTW8HSVxDw&X-Amz-Signature=b2aa463be131b7cdadb437116650b2ced52c4219bdb853b96d1ea23ee9f46a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ47H4YF%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDD0V9YBHrVMH%2FfHYwxhL7A0UVQ%2F1gE%2BwXTrK82Cri0oAIgcJzWamCo4GvQsXsn%2BNcNMRyojxOvDCZ8R%2FEt5cXMy5gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMGsWpxsEWglrox8ircA3qwuQYl7TSNcr6K09V656sibqC0tCciAqAV3wf1Pl1fI%2B%2BgfSPH%2BP1c8ywkQdPl7WdAlLsfZ0NVZYESchAztMf11WLboRLjmMJ3n3L%2Bdwuohm7itDXYLa03WHUpbHNv6t8z33fC%2FS%2F8TgZIGr51hDOPL5%2FMEisDmlJcshfzMAxxE%2BKUIqANnDuNAhJkibKGAiscXL8WFuJLQX1VSOGLok75WgiLSSoKbRBgVb8LBDp9I5EJatibRY9LS9d0DoKZp5mSyN6dgFLvjpTCRM3lXGFuNlcctNkC78dPxpf3SjnNewp1E%2FN9Wa8Mo5XfN6lG9CJrJhrF1wktwoJoU3hcnDbYMrPWa1CnoNJ%2FWnWwOVmcdd2WpVOxVjUdnSzQFze8nssAkEFVBQ3hYjuM%2BbbsPXLIHnwP7KvC4CE98rMv%2FVAw%2BAafsvCPpSIHK%2FR7quOXXSiIHCZ3u0%2BYCgaQ9LYSWu6rXONeqzUjb9di7jVHPS%2FLMEf7XU4TsX%2F9LU78rSpulfXFNW5NqliNpPrNU47VlysgJPIODwq4yzS6Xf0DPclLNEwl1aXrT1tVOPexKSXBstRnxdyhlyjk%2FpkytDfV5Plbuv937HSVpBoo94OnOTlhk0XB6aomGo5urhi5MJ%2FYxcsGOqUBsK6ivx4F9YdfYKI5YJkyMNjuufViN%2BoiDQXir%2FUHbjf%2Bnm2OAoVvfNPKqdeUtyqLIpMpjkWBZxTh%2BiaWfBwf%2BRNNIOIpOSDeoOc%2BzuuoMrbLWoiPoTixGMn%2BHjH82mN9FzAeVpGEN0ETZpi9K%2Biw8oKfTziFOxVAVGmqQs%2FwF7fvWunnm7lSDyToBVOffWH7gtsezr3u6A3p1QArCqVDEclLdtnT&X-Amz-Signature=0464dcbc0cf4a8141ab5fa7e58d8f1c134f044557ce377e8cb465c2d998a62a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RAJP77U%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHVyOZPeGgFPQaY2yBOiANH19akv11xRMdfYYIBdEsTfAiEAzw624pBubHG3uH2SsbOATg8De6ecjXELj2QRd0Ef6%2FEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1f2ist3gKceTFcsSrcAzViWDbd%2BL137xoEOH1z%2BE3wE9VakNmCh4sSx6%2BGdzB9koPZxjgpiMk%2FY%2BbgztfcqxgYknG0Lqlpy7lF7Id3onHPz0t9Fw6EWxDcH9aS%2BUKvqJJnVAj52RWOguSNd31gwSXOpTVY4KiKXf9%2F2V3%2B6nWKN8vSEM2YzWuKPYK01sKEB11Ry2Eurmvr8LkxZUZZg%2FFtv7kzubGsCYSRF0Tg1jtXbe3DJKdgQpHUPptI2cgPyjR%2FXY%2By4JdyrrcF96ieFg3TUOt9cHIwxSXgwzEogt4XQwAPIqIGNQFg%2B0AhBvdJNJrb50%2Bh8HXuj8ScQ8cSZNMnRd4Tp3roQzOUqEMoO9WGg1980qj3Jzud%2B67cfu7dg6iQcikIxUNy53vT7ZO2yOKTONs%2BnvaKaybz0%2F8Vshogs%2F4qSTC4UWfoFA8RCdnu1xLo4B%2F7b7z1db%2FSc1zN%2Fpkhy7q%2Bdi0Qx8Zzpd0zZadUgfP1yH9C9pUD5wFOnI3gCjZic%2FD3ZQDHedQIuLoI1ySywpnkaQOshhXLKvgYPc9t%2BxiSQxntymGam%2BiqFXS%2F3um4m02hMY9V76KQ0zE9wbk%2F8kz0IB9IK8Q9xSuhhiwY7jduilMA3cFXXwMyL1oGBM60hMtNlTUJICr%2BMKXXxcsGOqUB57%2FY3LrZq%2B0k5aBk9MO49cemNjfTJShiWZj25Tx8Dt1mSAizWxQuAgx3C70%2BtFN%2FXpwPbGUMiTh8kJw%2FKH82JO%2BKxNVmapUJ6VFY2o8M3XY0%2B1VvqT9fsTwwcc%2FUy3fDtCNdGzgAp%2Fuf5O7XIwAsH3KssGG7ADYo1X7DpFGU2t2e93PoyC5%2B%2FWmwx1J8jr617Xke9fFPkD4fBIwpa8Zeux%2BpZfyg&X-Amz-Signature=c2090bec2f0e49150448805c8244925401024e27aa54110e99d1e3cf13b14177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2NYPBX%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC5B84cMlUmTOdKJsrx9b7%2B%2BSH%2FKcYwF0Cnm9%2Fa0kJb8AiBWc4y83WYp%2BMS443D05pUKzldrQSfnI1TfuIotfGSixCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvPhSYzSRd%2BVHi16HKtwDnKhBMqWKs2mZT6mRhNVZKKFdRMEfObUT8qdlfuwgC%2FH77bDriXB8%2BYxMLXrNzbQASOLz%2FLAjxVhu0Eab10ZtG2uPmkIOZyh3SqI38ZPHtQyPDQqonBb8yOA128PAlfUQ3rgh0nqxOoYPdXix8DJxXlp2LRk1opk%2F3u1UCSJg7Ne2m5dPH2XWmoY0P7WATfFb0t9eLGG1IJ%2FftDFVc69Ejx2p2EhdObXnPsQDAgz5JFYHoq%2B1jEk4vnZFjHKD53IONiLwvnj0ddFKtW6itFnKYVojoZsP%2Ba0BmB3%2FRQwQ%2Brej3g82RsFISs5AtvUhKqHhZ%2Fuu625uH1EAtrmPqnySCjY0JT1Jlxy%2FsNYMNmrhTixXbZLSHUWxxdfvCajhlhvVlfaaGi9xkx%2FWotzqV0ScHEyXAVhq0%2FaZHysjurKwsDi9A8k8xWICVf7rgnhskBurpVJRVY4B8awWLgxHd5yNnjfcAZcmhZmqz%2BPlJuuwfsTY%2BoU%2FigWfD3jW5pWIcsC9QZiGTdf1oHQDLRQGwnw7IRz2bPDtUewU6zdW7%2BF0CESM7BJw15z4zywAcM16BqmS5X4qWAapQm2G9fcOZaPXgdcyJAxo5N7t6%2FMiRLLxOso5VHSaCVDLfPoySFkwnNfFywY6pgGQkIMz3noTVWkbvEqDckC7rkKyU1sqkWIeq0qzf0%2FrCJ3TObnWe54YnS3PUwyCWVLklZS6K99vZGbmRbOz%2BPnicg1AbCBSEA%2FU8JGSuHNkxmSlRLE%2FCX1mPQZ7WMmc2rWbrBUK%2B7LnQcsarD5bsprQore9twYpIg0kMvK0Bx3LYN7MotM0%2B5QWbQcxqtXD5LRYWc05pgvcic1KxAqibrxTW8HSVxDw&X-Amz-Signature=fe40be091733c5fd07f991544af10d7eda11106b3552c0bd6241e823fe21efa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
