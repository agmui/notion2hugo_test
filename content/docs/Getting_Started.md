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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVMWDHS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Ha1RbeqpgoMHlAzyBb9bpq4JoIKXADRtL%2FrUbdJ67wIgMAxv5OrsdZK%2FnwFWmk%2FRjH%2BGkxCbPAi4sUy2Px7B0zMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjkaPivRy7i5h9f8SrcA9MzIqtynB7G32SPkd9bDr0ltjbnrgpEr3QpGUnIY%2BLDRMeyIIb4j8oNznHQE3cf9HK9dP84ssWydHCnlx50oR9fyzSbMbzxhh%2FdzQCOKyrgrbOm3mrGB6H4%2FX0c4AS5udz%2F5qL5WSwlsktvPQuUfKjKH4AuG5SYhMfUNdtuV8dLfgru0Cpu3qsr4bOb9QwvTX9QrWO4NHNqR1%2F4%2FM8ku4bWBgAToXbxJx9qyC4G0JyLJl5sM1Hl1oKutugd4Osz88tbZvUHnEUiKfydGSdIwFTgE9lmoqkGpFgbLPnRdMRL7gwlkdMM7kFFt8kYVp0oYTwnNnTo34cQH%2F7okmbKawFm%2BEMesjPxXR%2FTRu77gYdEtsoxFnk1QR9BIXbFHH5ORxyG4JbRqHZHO%2BiqgSKLicR6y77ZiN6wvD9tDjlDbfbo79KSQ1UF4K3DVxf%2BTMf%2FZeTgKzQPuIQfOxEyXjwNqjMSu0jwzI0FzOquu6fXTwmBmStYGuFL%2FngG2rD6BiCnUwcEQ4otUCAZL6fRVsLIBfieCrWOpmQeVPoaFfcR571E%2FEbiA%2FVzXY8w0R%2FDav6jvrM4C1Xr8jAvblkTCYF6mPd32sWUG%2Fvp53zrdGCgYygojIUKg%2Bu7lqycuvr3MNv3rb0GOqUB7004rQJZk%2BgTYcCcnKzzJOkj%2FXYP1foInWHuYNPUHvdRgVfYaxLNtS%2BWAUpWv66z7JdLSxypBMMtQ16glZkj9z3ej9KSg1vSB7PifuRH0YjUYGfCiKsJxb4dD4Du1X8kqGP7kUIeHfbuVYofq%2FUFAPHyrIuhe6BENs2KGIW13lFdKRRX7x7gMPyWmvi%2BJZwcbU%2F6X8TKDPXjxjTD0i%2BjcE%2FarVkF&X-Amz-Signature=1c2b33a43c7412c9dc362e391b29a1b452db98da986e472134aca41409132572&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVMWDHS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Ha1RbeqpgoMHlAzyBb9bpq4JoIKXADRtL%2FrUbdJ67wIgMAxv5OrsdZK%2FnwFWmk%2FRjH%2BGkxCbPAi4sUy2Px7B0zMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjkaPivRy7i5h9f8SrcA9MzIqtynB7G32SPkd9bDr0ltjbnrgpEr3QpGUnIY%2BLDRMeyIIb4j8oNznHQE3cf9HK9dP84ssWydHCnlx50oR9fyzSbMbzxhh%2FdzQCOKyrgrbOm3mrGB6H4%2FX0c4AS5udz%2F5qL5WSwlsktvPQuUfKjKH4AuG5SYhMfUNdtuV8dLfgru0Cpu3qsr4bOb9QwvTX9QrWO4NHNqR1%2F4%2FM8ku4bWBgAToXbxJx9qyC4G0JyLJl5sM1Hl1oKutugd4Osz88tbZvUHnEUiKfydGSdIwFTgE9lmoqkGpFgbLPnRdMRL7gwlkdMM7kFFt8kYVp0oYTwnNnTo34cQH%2F7okmbKawFm%2BEMesjPxXR%2FTRu77gYdEtsoxFnk1QR9BIXbFHH5ORxyG4JbRqHZHO%2BiqgSKLicR6y77ZiN6wvD9tDjlDbfbo79KSQ1UF4K3DVxf%2BTMf%2FZeTgKzQPuIQfOxEyXjwNqjMSu0jwzI0FzOquu6fXTwmBmStYGuFL%2FngG2rD6BiCnUwcEQ4otUCAZL6fRVsLIBfieCrWOpmQeVPoaFfcR571E%2FEbiA%2FVzXY8w0R%2FDav6jvrM4C1Xr8jAvblkTCYF6mPd32sWUG%2Fvp53zrdGCgYygojIUKg%2Bu7lqycuvr3MNv3rb0GOqUB7004rQJZk%2BgTYcCcnKzzJOkj%2FXYP1foInWHuYNPUHvdRgVfYaxLNtS%2BWAUpWv66z7JdLSxypBMMtQ16glZkj9z3ej9KSg1vSB7PifuRH0YjUYGfCiKsJxb4dD4Du1X8kqGP7kUIeHfbuVYofq%2FUFAPHyrIuhe6BENs2KGIW13lFdKRRX7x7gMPyWmvi%2BJZwcbU%2F6X8TKDPXjxjTD0i%2BjcE%2FarVkF&X-Amz-Signature=3e197d81af507a7db44bf18b965b3d3a01c107e3c470a2b7924ade1c84bbe7cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQGSNDB6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCobNVowt50IO6TdhVCqLKDJ7N%2FnlqAZLZiBoGASs2dAiEA3jay29YRLRT3UGNx7o9XT3V0I0GghEvAC%2BTiZBGiaaIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKQ0pFQ6NfSDmFe4CrcA9D7jxo1zA0YO038J6ZmCmGF1KLrO1368kFRAAQ%2BJWbE6XoAh3PWDMhBtqVISlPdjO36gYRaW2ycgLvt0AyWwJNpMP6J7Xir7JRVKw8n5RsXafkGZjjYqx1ECGPjHPMm%2BwKQA83bRBcP3LTnn2rF1pimheixAh%2BgtsH4Rd3OEXKvRzABpk3C8lQ%2FG01LUf0H5O4CBnQm3DBl2OZaO9sibRoXQs98EYmPv29FaIGjEaSHcBTx3B%2FM9RpHAhBpRHXvHCoy%2BENJveafwFx50Jcqa4EykzTmgBM%2FPmmUcl3e%2BKPwVM%2FtxK0RYqlLnLQS9W2xXozlVuoOTYzfoUqvygi0QyzpmZRaFTAKYoINLaRydirq27iWhT0A5yV2EY6eoEOdW6eLYemyVKzXe6ofS5ZHMonv%2F66kn%2BJW6DX6YWseWISSE76QT%2BGAobEtBoQq93%2BSOxqiDQnsOeN%2B%2FSIUARzCZy2P9%2ByHMq99Wu8SvBeTyNWh9NcVP3ookKZYWhUJOXegZuQ9Zcd7QPVMOv2ZF2L6k%2Fima26dFQAxOyDfpMdXNXnjCGfqrsS0SOWfok8h8%2BkVIRcxHiO9ZaM5cH%2B6Y%2BCmazV%2FEOhgLkKY2mq01TO8pcBUCsTQZY2G2vwlIl9fMMT4rb0GOqUBXeqD%2BtNVlgYkWruW1vwpc9XCg%2FWoQG5ixrEtQXIay6kWQXOCe5xgyx3L3QVH3VHhs7ZLfI3b7tSwmafTQG6FfsyZwT%2B2hVQCQxvpTmr%2BQ36AY3bYWBwaFSbj5YSNlKWfkudzeDA6nYwVihUVi3ag9wsXHjLztOmEu9JPkQngpkuY3ZkopeVtRFneQs8BEmhYH0Tfv6oXn2QaWUVMbPgEyRtbKHQN&X-Amz-Signature=0725328d95ad003327a929ebdb925b30cb74a307d4bcef585fb8c0d9761a6393&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZNJOSPO%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCgeEdyRkkP4oSCJdyUCSIf5R3Y7kxbViZ4vrUfPbIPwIhAOWBqnJMNt9MHbXHkIpMBzeCmGkCGeyR97KEd7Al72ykKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2F%2FjKKF4%2FrAe6Qn0q3APe7wKLvOVQSP%2FDvyf%2BLobeoGPST9kQhlJjdB1vBRHjVFIBq6MCMcvIxjIVTrlVLXRixZzgshIu2OsI7Rpp6b9G402pJXU6LKdWBKJAuRGbTvuXXtLCoQoh9rdbc6fVzqvMZJmxaDA00WgGQ6iX5MaTdsExIMFU0NxiNIjdrkA02J3NNrXI%2FqeL2xmNxDUIT1jX7QFxb%2FI5tUA%2F9Pi3IYuyIAKIVpo1klzzC0xhmEOKItrBDbAv%2FOvh%2B%2F2AEapRFjE%2BWdtTnsmsMUnqT84hKITNVctOPR5jaTOi5svkVCUNIJp0d1uwncGzUcKYup6gqamZF3tNnRLuyYCUwv3ODYHsV8%2BQQ3HniVo76f2BGBTBsvle5qjLOnkxQ719p8Ic8Sdebvr3%2BqTRB5WmoAGIKBC2%2FanbajSP%2BU08cdA6mk8miW3Vm%2Bvw4ubZaS4taC4fAPAqLcwnBw1ZYyYUJ62NY2GmPEGC7ID9BQ5SJtWmkPeNG2UR9Cwb0r%2FA8OjKrWbPmlTs%2FBTPO8Cp0hQSpnoMX7DO2ZT4%2F0%2F54wYCrsxW9dxd0S0atLKFn%2Fwgc3E1aC3Prr7e8tusZ3M0MsL3dksnGS19LdiqqH7Zx2Tb1IUL1FkFAnqtdhv5mdToLBuVbTDj9629BjqkAahfMizq%2FXi2jcVhPediTQpL6yuRsEUkJD9K0PmKTrcBqPM2Arr3zf%2FnsUpaehWw3nNHaXYNP4aQEwf1UxF86qMRmIewzUB8V7vSB4Xb0VKOSt%2FuZtIvR8omf3Y6ze%2FvjArItYARB7G7Yq1HnxsYVNyPeHRQSpAscdo0ULzQ4v1KyidkPEu7AR8wuAFtjXpCHNZFvjFVCQnwnMGi%2BJvl7Zzh7H6Y&X-Amz-Signature=1597bd531e38810c2a358074252bfc63f1c03ad7131dc0bc7237751cc37a8f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPVMWDHS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3Ha1RbeqpgoMHlAzyBb9bpq4JoIKXADRtL%2FrUbdJ67wIgMAxv5OrsdZK%2FnwFWmk%2FRjH%2BGkxCbPAi4sUy2Px7B0zMqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjkaPivRy7i5h9f8SrcA9MzIqtynB7G32SPkd9bDr0ltjbnrgpEr3QpGUnIY%2BLDRMeyIIb4j8oNznHQE3cf9HK9dP84ssWydHCnlx50oR9fyzSbMbzxhh%2FdzQCOKyrgrbOm3mrGB6H4%2FX0c4AS5udz%2F5qL5WSwlsktvPQuUfKjKH4AuG5SYhMfUNdtuV8dLfgru0Cpu3qsr4bOb9QwvTX9QrWO4NHNqR1%2F4%2FM8ku4bWBgAToXbxJx9qyC4G0JyLJl5sM1Hl1oKutugd4Osz88tbZvUHnEUiKfydGSdIwFTgE9lmoqkGpFgbLPnRdMRL7gwlkdMM7kFFt8kYVp0oYTwnNnTo34cQH%2F7okmbKawFm%2BEMesjPxXR%2FTRu77gYdEtsoxFnk1QR9BIXbFHH5ORxyG4JbRqHZHO%2BiqgSKLicR6y77ZiN6wvD9tDjlDbfbo79KSQ1UF4K3DVxf%2BTMf%2FZeTgKzQPuIQfOxEyXjwNqjMSu0jwzI0FzOquu6fXTwmBmStYGuFL%2FngG2rD6BiCnUwcEQ4otUCAZL6fRVsLIBfieCrWOpmQeVPoaFfcR571E%2FEbiA%2FVzXY8w0R%2FDav6jvrM4C1Xr8jAvblkTCYF6mPd32sWUG%2Fvp53zrdGCgYygojIUKg%2Bu7lqycuvr3MNv3rb0GOqUB7004rQJZk%2BgTYcCcnKzzJOkj%2FXYP1foInWHuYNPUHvdRgVfYaxLNtS%2BWAUpWv66z7JdLSxypBMMtQ16glZkj9z3ej9KSg1vSB7PifuRH0YjUYGfCiKsJxb4dD4Du1X8kqGP7kUIeHfbuVYofq%2FUFAPHyrIuhe6BENs2KGIW13lFdKRRX7x7gMPyWmvi%2BJZwcbU%2F6X8TKDPXjxjTD0i%2BjcE%2FarVkF&X-Amz-Signature=fff20946fd0700c25f411bfc81fd52f2a93c8d79c998f2f689e3364f54301d86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
