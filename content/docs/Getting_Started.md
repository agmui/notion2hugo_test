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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7D2UJ6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDN6i4FjS7%2FIfRm6jwPW8xJRdCI6hrOQRS8QVcWUzoxgIhALuEy1I9JsIFyoREgBwQtJ0Kx2YYezUo2MDdLN3FDSrwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5RkBefHBT%2FyMMBNAq3APJuz1OaVBtLpjeeGvmPpfbQuZPf65qxOKY0QzBZCXTHedWYdr1OvXiToT%2Fd4OJ0imSJT6yxDw8ojB9VLCg1pgspefhqIAnQ0bgoMAhfSsZ8yaYfC2fBiUma2DILOUdcqCxRLzz7nuGmxywVhGOG%2FMWADX2zE2R5QAWm7ps2SMyFC%2FmPMtIvi78mZsBI9phGWiIunrgbOxF4Wmmy%2BU%2Fr9jHa4omtt7Gcao80%2BP3gQwe%2BIovgkb9PHzsV7PKgLJGV7lWQ5RaJZyHpPL5qrQA85ofq1EbOxyMDrq3zQhYcrVbPTkUl0IZ1Cj1qDJuSyJfHG8etajT%2FSs1kksvz4eeMLpiDIGflL7QV4BRssZxjHxQwZ%2BOyB1t3SWN%2F3O1nQbUZ3M%2FZKx2Si50R9d9%2B9Ojath4XLWaE4Xh4hxOtJPxdAjC5pj%2FOL9h3fqUxF3xr9d9m58sl4O5tIgePmgHZlhqSAN0bMYHFrj7mJmQr2m%2Bbqdcw1SGPQ2Zyk8gl50r%2Ba90DbRK1qducXTRYdwBVYn0h2WK7U8Z%2F9JgJecPAZNBTzGSVpO1zqiHc0j26PZuj9CiuDZgf%2Flu17l81%2FPFugUZ7qDL%2BxSNj2m4dRoqjv%2BzVBLO2r2BDglB3K23Wa3%2F0DDcvNu9BjqkAYRhFHWzVMamTc2OuwQheYUBpSx1p%2B3UkUfyHdJgVwyE3AVM%2FHvpl3owrEaMYcAi5if2BJVoQ%2FUPi2WrR%2BlxCC%2FECkqXgGSc%2BlefJspCBWBgvSYWoiGWVfWe7v4NWwIES%2Bh3ZDrshLjEryF2m7iE87JtuOxfukh0EoigJ82%2BBABxgHHUiffIg9pQXjlXXj%2BokPfee9GPW2rmaszDVOlg8IJqn2IU&X-Amz-Signature=4fcd292181eb255a1b0887fc9a03bc0e2d2b418ab7acd35b885c9d40ddb0c2be&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7D2UJ6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDN6i4FjS7%2FIfRm6jwPW8xJRdCI6hrOQRS8QVcWUzoxgIhALuEy1I9JsIFyoREgBwQtJ0Kx2YYezUo2MDdLN3FDSrwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5RkBefHBT%2FyMMBNAq3APJuz1OaVBtLpjeeGvmPpfbQuZPf65qxOKY0QzBZCXTHedWYdr1OvXiToT%2Fd4OJ0imSJT6yxDw8ojB9VLCg1pgspefhqIAnQ0bgoMAhfSsZ8yaYfC2fBiUma2DILOUdcqCxRLzz7nuGmxywVhGOG%2FMWADX2zE2R5QAWm7ps2SMyFC%2FmPMtIvi78mZsBI9phGWiIunrgbOxF4Wmmy%2BU%2Fr9jHa4omtt7Gcao80%2BP3gQwe%2BIovgkb9PHzsV7PKgLJGV7lWQ5RaJZyHpPL5qrQA85ofq1EbOxyMDrq3zQhYcrVbPTkUl0IZ1Cj1qDJuSyJfHG8etajT%2FSs1kksvz4eeMLpiDIGflL7QV4BRssZxjHxQwZ%2BOyB1t3SWN%2F3O1nQbUZ3M%2FZKx2Si50R9d9%2B9Ojath4XLWaE4Xh4hxOtJPxdAjC5pj%2FOL9h3fqUxF3xr9d9m58sl4O5tIgePmgHZlhqSAN0bMYHFrj7mJmQr2m%2Bbqdcw1SGPQ2Zyk8gl50r%2Ba90DbRK1qducXTRYdwBVYn0h2WK7U8Z%2F9JgJecPAZNBTzGSVpO1zqiHc0j26PZuj9CiuDZgf%2Flu17l81%2FPFugUZ7qDL%2BxSNj2m4dRoqjv%2BzVBLO2r2BDglB3K23Wa3%2F0DDcvNu9BjqkAYRhFHWzVMamTc2OuwQheYUBpSx1p%2B3UkUfyHdJgVwyE3AVM%2FHvpl3owrEaMYcAi5if2BJVoQ%2FUPi2WrR%2BlxCC%2FECkqXgGSc%2BlefJspCBWBgvSYWoiGWVfWe7v4NWwIES%2Bh3ZDrshLjEryF2m7iE87JtuOxfukh0EoigJ82%2BBABxgHHUiffIg9pQXjlXXj%2BokPfee9GPW2rmaszDVOlg8IJqn2IU&X-Amz-Signature=f4dd696fb4e6af612f81fe32f24359c1140d089c0b8b6d566151e23aee6c19df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQTYVVYZ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bs1%2BhXtcgy2hx2QX9VvHviPJibkclBj2%2FIUUJd5E%2BegIga7NWjuM6Ur6xNhhXrCeKtE71IEEIYYEjQ90WUsU8%2FaIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUTRUrqW%2BBhhG41uyrcAxYUcl6W6OkBZcKEwx%2BS%2FfaL35CMMG16QpQXAAGys5npM50%2FMsd3KXB%2B2taKDbkbia09D6zDyiBmVQsAwUDY9Kvy4D0fX1mi1MklUA5ejbs13MOwv3L9RWXXzT8od7y%2FBO2Xaqh784QES0nV%2BJl1eYMtqe3zblpPpjU7d%2BEClmwubPQB7NxzZ3%2FXg3Emgo5mvsVB%2FIs4mSkVODFY1BImZTavItvYi%2BgeYwRsMmBCNSz5AOi%2FzVXC0noXaoeNqTwdM8Ni9bB9cNJW7jsM4%2BN7kBwSb4AxRV168%2BVaKBT7RCnAGzZcWZVMz1IN9otK%2BFlL%2B3G81I8g%2FM5j6etnby%2FjKu%2Bk6jHIzShxLZYlywLXZpgpiSxLQ3br4WfHfzKv0mZ%2F4zH7CfmQXypZEGfha%2B8dC2Y4VL7wOSTxpH0eOHGMOMGt2%2FhDC6XXaqsguVWSviF4RMKWqnxWN%2Bs9Qim7eWosYzkr6zBH6aKGN5mjPElJAC1lAvsoa2pMtbczA7PEdrBfcPAVoegVoXdVdY5BeFhENxNufvCvSj1MGmGhWn8PCB%2BVm6iFuPuryX0euqPJ%2FIUdXUNaK1or7%2FA6LqGIxrKKbx%2BoIjl2gYx%2F0R7bBifwB2lJWvOq5w7H7U04cdRBMKm8270GOqUBUQm1Lt6EVOO4DAeD%2F7WiUYNqyKrmFymolwZjKzqY9enXAN6yMlYrUXRerg3jjLf3p9dI7wauQCN1VZTVC3ipUJyjWoXgUU6pc852FICY5OWdkrnDfJ2uipS8O0%2FfsSRvUpxeJV4Dsnwf%2FG7NCDrKknLkIl7bjaIEccvUwA7TBgPM26i0oOoadjd87pPksGjvviI4Se8%2FAWPnsdACMPoci3N0ohV3&X-Amz-Signature=3c54a43a5510a7540dc6e7bc20d1553c99fc2093861e0be48b6ac06e43b46bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOMXPXTE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDyCsRENft4hyJO%2BT%2FNoFvE9vduoOkVizS6jUrNeT8KgIhAOOt3Vfth53GVkRfvs0deOQswhV77wj4rObxDEHFrXBkKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydWK5s1DX%2BLz%2BCPjwq3APdIxhco1Kdre4rpi1%2FTfzl%2FuxNmeLRUUVK0BCbXXQhVOGXe%2BEoJO%2BqJLZ%2FWjH0E9p1TJkqvWqSQZXvqGjcTmsHnoz0clNE%2BWAYzh0ENYvLcS0vkBxhS61qCxq24pTxE0ObuKXBsKUzOAG8o8DNy%2FvHxc0R7quAw4%2FKQsskeVIsOpiX8JMSYUsur0wn4Tu303QIrPqPZWKp25VlhTq1b2tw%2Fa8XN2eQsrTGHvG%2BygXz2hWlW%2BnmI4AR9riRbCA0C%2FEKdniAd75pprEYGRoGpFPdfqxhWUdumBrGjhnYUk6XMsgkPlJ6VX20I5du0WHyxBbqGGKZHcA46YNOaGbRFGbhUocq3j5LwEf2ez%2FbVGeFFQGRQXIzVSFkkqVOWTYLS9aW7pEjvW9L1ODcLAMPxptHqKbWf3JqNweZzz%2FYkBS4Kdt0sjojiQOntX2D3jXhWxiQ2Lj004KcKykEKF6GAmppIn%2B7cxbRL4m%2BBbRXalyVl829fRFrlqp32FvMMtnJ6RkeOiwExlg3elGmkC7yY53yvd%2BlPTGqsXP%2BPyq3sC72bh4bn3JVBMtO3PsN%2BGLhw77%2FZQ%2BshlDu9TXwB%2BmhVAuQplpwlsO64SZNKWgTA%2FEfJypL9P4TxFzDag%2FE%2BDDZvNu9BjqkAYzYoLZjtPQUMablPzvcqrjgOjEuEc7%2BYGqzxwI5yCqPsfpgOD96otXnFXbZoQDDXmiO0HUrKsbQFl7E4iXkq2ZCidODNdiiAIZO9k490sAhuqDZUDHNikqLd3ugkfZ8nFSE4lWDUT8LNW1uA1OJiTQ9cD4jYnXhqdGUYLNC5fH3ZA5MOYOoCU8TbxzKp10%2B0ztD31x1YjD6hVL96c8tBtL4LqUo&X-Amz-Signature=9519d5f90b93fd5f0720e5fc7a6f533b2b80608d7ff5dae7d5e249787e025d10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7D2UJ6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDN6i4FjS7%2FIfRm6jwPW8xJRdCI6hrOQRS8QVcWUzoxgIhALuEy1I9JsIFyoREgBwQtJ0Kx2YYezUo2MDdLN3FDSrwKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5RkBefHBT%2FyMMBNAq3APJuz1OaVBtLpjeeGvmPpfbQuZPf65qxOKY0QzBZCXTHedWYdr1OvXiToT%2Fd4OJ0imSJT6yxDw8ojB9VLCg1pgspefhqIAnQ0bgoMAhfSsZ8yaYfC2fBiUma2DILOUdcqCxRLzz7nuGmxywVhGOG%2FMWADX2zE2R5QAWm7ps2SMyFC%2FmPMtIvi78mZsBI9phGWiIunrgbOxF4Wmmy%2BU%2Fr9jHa4omtt7Gcao80%2BP3gQwe%2BIovgkb9PHzsV7PKgLJGV7lWQ5RaJZyHpPL5qrQA85ofq1EbOxyMDrq3zQhYcrVbPTkUl0IZ1Cj1qDJuSyJfHG8etajT%2FSs1kksvz4eeMLpiDIGflL7QV4BRssZxjHxQwZ%2BOyB1t3SWN%2F3O1nQbUZ3M%2FZKx2Si50R9d9%2B9Ojath4XLWaE4Xh4hxOtJPxdAjC5pj%2FOL9h3fqUxF3xr9d9m58sl4O5tIgePmgHZlhqSAN0bMYHFrj7mJmQr2m%2Bbqdcw1SGPQ2Zyk8gl50r%2Ba90DbRK1qducXTRYdwBVYn0h2WK7U8Z%2F9JgJecPAZNBTzGSVpO1zqiHc0j26PZuj9CiuDZgf%2Flu17l81%2FPFugUZ7qDL%2BxSNj2m4dRoqjv%2BzVBLO2r2BDglB3K23Wa3%2F0DDcvNu9BjqkAYRhFHWzVMamTc2OuwQheYUBpSx1p%2B3UkUfyHdJgVwyE3AVM%2FHvpl3owrEaMYcAi5if2BJVoQ%2FUPi2WrR%2BlxCC%2FECkqXgGSc%2BlefJspCBWBgvSYWoiGWVfWe7v4NWwIES%2Bh3ZDrshLjEryF2m7iE87JtuOxfukh0EoigJ82%2BBABxgHHUiffIg9pQXjlXXj%2BokPfee9GPW2rmaszDVOlg8IJqn2IU&X-Amz-Signature=10568a10f6306e69da54c0a8c71f6730f14f5c374c4a78d180abb7a2eccff522&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
