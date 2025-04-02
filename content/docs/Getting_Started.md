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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJP54ET%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCqECenBPkhEOWpIKt0nWQRCx80Av722uOTQAxBoISaFwIgZBizGX8k3CXQVjWj%2FRCZ%2F3sR3aiF9cu6nFPJjKUjWlwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSvZg4ts3JNIjN5ESrcA1hMqcoYAJMf1gwfMgZGAQi1jm1%2BNiibBNaorH2zSOANFnH7zcDIwsGtoHKgLKMxn%2FyNlsWa9Hh8mm6vnX7MhFKOD9sVqlYq8SjDoxC39iw3wVa6o4O5GYj58FqpAH4fC6vf1hBoPipls9%2FcoHQJDpNDvw%2B7hmi4VXtR8ozFdMewRye13hXyU%2BAphFVMfXCD%2FdTQs50WxO7JGkBHZtVt0vgjb2Zt%2FFbEW18hRANZ3gHewRcQbSYwMnBmoYb0HEUjaB03USzUiIv0X1IZQnLw7%2BK1dDqmd6I0ry4Efr9kVspmKXqDyBYQLLje%2BM%2FMO0lgRfyaSvH9mruzejCQD0xFh%2F0zUuDUI3LUMbXbW6poeGOQfpuqfBkWPrgOWTZ%2F3ev8Y30zzJU%2Fi9y%2F0pAGbP1qxUSs0ztIFHBIZD5evx6uJ6K9WDVfCWsPWxIsfJwBFfMaLsVUmVhX5vHyaWCV4dOEggASheuP0fNzapDDoNoTqvVeY6FFOdcL9RIGFIChPEYg1LupqcPXKx8ZgMgZrsDx2BViIIJJZdhiumdcVc%2FPpTvgj7r9HoaXdubrUAl1pJaza0HYnivlAV48DMz5LG%2FgFGYAlDA4wsmzwCWgV2SYW6pD0JVK4WBSh7GcsqZFMPr6tL8GOqUBpC1%2FzRmN0zjulSddl2GOpk7oTrcUiSqjSMI6sNkotPw6CvBJFV3WVwZK5D7DrmXArmS0tcaR5UJL%2FGXAB8IYWOqIShltL8NuinRpiDFb0ZWI1vMoUuWcuTKpNsxgmMxfHGRGCIwWl6DvqSLgB3yEKUtl%2FGlW982ddRwTnD%2F9ZEwAPi8eu5yA%2FGaflPbcJErjmFsb7iWLybyib1pTiiCBYh7Ly2Oh&X-Amz-Signature=dd7bce902eb06918bedea2a8be00c90d3317d3e6a0e1b3d231ce53aa63907e91&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJP54ET%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCqECenBPkhEOWpIKt0nWQRCx80Av722uOTQAxBoISaFwIgZBizGX8k3CXQVjWj%2FRCZ%2F3sR3aiF9cu6nFPJjKUjWlwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSvZg4ts3JNIjN5ESrcA1hMqcoYAJMf1gwfMgZGAQi1jm1%2BNiibBNaorH2zSOANFnH7zcDIwsGtoHKgLKMxn%2FyNlsWa9Hh8mm6vnX7MhFKOD9sVqlYq8SjDoxC39iw3wVa6o4O5GYj58FqpAH4fC6vf1hBoPipls9%2FcoHQJDpNDvw%2B7hmi4VXtR8ozFdMewRye13hXyU%2BAphFVMfXCD%2FdTQs50WxO7JGkBHZtVt0vgjb2Zt%2FFbEW18hRANZ3gHewRcQbSYwMnBmoYb0HEUjaB03USzUiIv0X1IZQnLw7%2BK1dDqmd6I0ry4Efr9kVspmKXqDyBYQLLje%2BM%2FMO0lgRfyaSvH9mruzejCQD0xFh%2F0zUuDUI3LUMbXbW6poeGOQfpuqfBkWPrgOWTZ%2F3ev8Y30zzJU%2Fi9y%2F0pAGbP1qxUSs0ztIFHBIZD5evx6uJ6K9WDVfCWsPWxIsfJwBFfMaLsVUmVhX5vHyaWCV4dOEggASheuP0fNzapDDoNoTqvVeY6FFOdcL9RIGFIChPEYg1LupqcPXKx8ZgMgZrsDx2BViIIJJZdhiumdcVc%2FPpTvgj7r9HoaXdubrUAl1pJaza0HYnivlAV48DMz5LG%2FgFGYAlDA4wsmzwCWgV2SYW6pD0JVK4WBSh7GcsqZFMPr6tL8GOqUBpC1%2FzRmN0zjulSddl2GOpk7oTrcUiSqjSMI6sNkotPw6CvBJFV3WVwZK5D7DrmXArmS0tcaR5UJL%2FGXAB8IYWOqIShltL8NuinRpiDFb0ZWI1vMoUuWcuTKpNsxgmMxfHGRGCIwWl6DvqSLgB3yEKUtl%2FGlW982ddRwTnD%2F9ZEwAPi8eu5yA%2FGaflPbcJErjmFsb7iWLybyib1pTiiCBYh7Ly2Oh&X-Amz-Signature=3f1a2ac8b414078b2a8622b97c911d65167334d821c70212271bee064e2492c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPEJDGA%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDLEEKwI8BiJahYCbhQ8Swt2ada%2B3uT74kVXzit40X6dAiBtfHAqDhida3ChDYIlSXGh02VgpHtEdCSCA8XiGPAMCiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXfVdvUsmVpg94TOKtwDvgSbSnPBRxrpb5IpbRPQ9%2B6dM7WQwwQ81jRuPIUIyzw9Xa9B%2FD2gGwC89ywPo2jzhBmrq%2B%2BUdAX7LRaHIiLgSpRTc%2FkGk4WprkBeaWG1Dsn54MYkeBeh0t%2FRN20RM8Z85ExZpVmAqXzysQSeyZkRYzsLets6kOd30ADoa9jqZThFdGihAv4JOOcGdEKGEpOUQbFEoiv8zusyCGFCpOBVh4sF9RcCaAYFyg3Vt1uHOBSiAbvQYbbgVtPXdzVO1HDBnUdG4geXUN899NdVkB7gznBzKMQKfZjvFsDEvx%2BrOaIXzCo22O1buQi9onag4EaN03GE8N5JZR7K8%2FX10ZqkgqH8iqfK1P55wxUV1XjOEGrQPYF7WFXcZbdcA1npwjNsT3%2BYPWG9QdBzQxErRhS%2FPuK6IPV8Xy%2FwSEVdHELjDjfjyVwurfSb8%2FP1OV33rXTQt94S8f5TWMPs7U92Fz%2B65Trw6AL%2FmQ9Asg8QPz8tlfWgtVu4yAYJBOI7uyUZpQJnA3gCD3%2BEr9CFE4ojE8ZGUS9QmWYUd%2FvI2JxzXYlO%2BnSTDTxTFOsqjhWl5o91b2wI87RkeBnS8agla5k2mQWgLNNn1vETibcw8O9GAOwCDmqans35IuOqR%2FA2CA4w6vq0vwY6pgHD%2FK9UKRFyCuqOSMr0Oa4S18n5Aciaox%2FP7KJkFtTeHmixSR7n720Fqt3Kf4X5F%2B7a9ZyWlcBgpY95UoNSn74ME0b6ri8BqI6m567q6wocGphpPZnTH2FoxkuHyT%2BtLzXSCaojMWXlgH967FErIP6T3m63ra6bRMsb3DttCQh9aW4Ki2Jl5GEutoWmxun271N7o2T1uEKYSJboQgNxd1L1MirZE0Hl&X-Amz-Signature=1d7ddcc2dee9551d1b030d23e565cbe6e6528135d650793de7443c0964766e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMKHONZ3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDaQf%2BaLwlBHqwZGcYNv0AVs2PoTv6KKfZwOMRpGmNmSAiBl5hYaURETd1deWlNGTuCZ8wrftNTFj6ba%2BnhTDTomIiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq29vI33ocW6MumCpKtwDfJ0n9tUPdCSXBW%2FL2RGqFrPg2JsBs4u42EIGf7%2F4uMbVQGcA2L1aKfEkGP%2BPipJSCXg6HI98c8yEwh%2F4Dlu9OwiL9X1eYETM61n8aqdryNi2yUZpiGd9jewgG9KUwWVs8n74YjAK3MGIaQMm7r3ZMg3PTIM3dOlhqr9ou9oFyvZbBbyew10XiwcAvBXtWa2NyutlapjtpRKOys%2B2tEx3lVtNsObhGxgctLAeAzXD4efKPRkcxg24y6sPhwenCWatOskAHzN%2FkBLXdScHIiURDSod9Oy8G8cjf8Yu4JF5k9bD%2FJmTyW2EjyEwehhLLGyth7odKK2GvxWKMTBAuK3tz%2BfludT03IGe50hVwTGWleeey6e4DCEU%2BK7XvY0DAsyWpcYD9L69qCEGBIZzS2V5lhGwqblFAQTL3drDA8FP63u5EU285I5EF%2Bn04dhefqMRgETlV9E9abffYiYussNmRXJIkQ1zTwvdnNOo1w9ktlzKp71gfe%2FyFBuRpumeXXWEGpl9A6pA4b5WbrT%2BVmqhOXAeDWR7b7ILeAqtCFiTxrbCxA%2Ft7CccDueqVsmj4KNK4Hihr96LbSbRUJJhz85s2A33nv3Vv4P6Wvxy%2FN3TiAoqticPt2IEaCV3PYgw%2Bvq0vwY6pgHfEEx1WOxZaTJe6XVEZ8BD5SintTskpziwn4qHEC0BNULSdBUbh5UzPLF6YbAnZeGQo5douOs51qPY9FsK%2FPYjaumIFlX79Q9Q6e9XslPRiuuTp1462LeCxw8slARdxAdFgww%2BWEJVkDcahVHDDUMQ8%2BJbKyyGYIg8EKrkz3XApR%2BW6dFb05Gy0y9ALrlVYvDLvK%2FXoYqmX70m7XnaB9skneQ1gAmY&X-Amz-Signature=76ae0eaaf071a650ee1da112d81742977b76c3cf73d36a005142768de3afa001&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJP54ET%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCqECenBPkhEOWpIKt0nWQRCx80Av722uOTQAxBoISaFwIgZBizGX8k3CXQVjWj%2FRCZ%2F3sR3aiF9cu6nFPJjKUjWlwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSvZg4ts3JNIjN5ESrcA1hMqcoYAJMf1gwfMgZGAQi1jm1%2BNiibBNaorH2zSOANFnH7zcDIwsGtoHKgLKMxn%2FyNlsWa9Hh8mm6vnX7MhFKOD9sVqlYq8SjDoxC39iw3wVa6o4O5GYj58FqpAH4fC6vf1hBoPipls9%2FcoHQJDpNDvw%2B7hmi4VXtR8ozFdMewRye13hXyU%2BAphFVMfXCD%2FdTQs50WxO7JGkBHZtVt0vgjb2Zt%2FFbEW18hRANZ3gHewRcQbSYwMnBmoYb0HEUjaB03USzUiIv0X1IZQnLw7%2BK1dDqmd6I0ry4Efr9kVspmKXqDyBYQLLje%2BM%2FMO0lgRfyaSvH9mruzejCQD0xFh%2F0zUuDUI3LUMbXbW6poeGOQfpuqfBkWPrgOWTZ%2F3ev8Y30zzJU%2Fi9y%2F0pAGbP1qxUSs0ztIFHBIZD5evx6uJ6K9WDVfCWsPWxIsfJwBFfMaLsVUmVhX5vHyaWCV4dOEggASheuP0fNzapDDoNoTqvVeY6FFOdcL9RIGFIChPEYg1LupqcPXKx8ZgMgZrsDx2BViIIJJZdhiumdcVc%2FPpTvgj7r9HoaXdubrUAl1pJaza0HYnivlAV48DMz5LG%2FgFGYAlDA4wsmzwCWgV2SYW6pD0JVK4WBSh7GcsqZFMPr6tL8GOqUBpC1%2FzRmN0zjulSddl2GOpk7oTrcUiSqjSMI6sNkotPw6CvBJFV3WVwZK5D7DrmXArmS0tcaR5UJL%2FGXAB8IYWOqIShltL8NuinRpiDFb0ZWI1vMoUuWcuTKpNsxgmMxfHGRGCIwWl6DvqSLgB3yEKUtl%2FGlW982ddRwTnD%2F9ZEwAPi8eu5yA%2FGaflPbcJErjmFsb7iWLybyib1pTiiCBYh7Ly2Oh&X-Amz-Signature=a0b11c4ac3de0c24fd344dfba1592c0281df41a34cf753b1e6eb41f6c2e0d49f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
