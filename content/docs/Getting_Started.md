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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNTORQH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTPD2e7kjXeqhlZc2XMJdWew9RH%2Fol1RuK28pogJvgHgIgEQMdMwzuXFVRtdmp%2Fbfr5q56OEQVqLzcHGRkBrYaPnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAcj3%2FK8W%2BTbPejhSrcAzXh%2FgvUZfNNIWVvhFykyFUfmzMedARZBU2ughE9tE2S3tXfHcXb8PnfQ%2BOzoKvxixyULOIUF9XI9hIBhDN89RKiKxAQHYIJRgI%2Fl1qQ1UDwxxTm3ZAA9w21cRMsX13cBGy2kHKDSxaUPt9iw1NZk2p313g0vRpQoLC%2FtB18EUIO0UTNoPukeuZdmNRk8JmFOVO8ZyPc%2BQvr51ebUqYgfUcEGc8d26ipHZvxs3BACgPWiVnxtQVStuJq89UVP0PYBZd136ymfmFOu718NlzeYE26%2BmeA7So0Yf1lfIn1eFXYK1otIf%2F6xN7rFUJhTFUbM2KnILcZjt0NbcYMOeo7FGissD7hlzdbl4GZEiKFLYFN%2FRsUZzXsAtyB4CO5FyOLqaMCCaSA3NDULiTgeo7U%2FC4Jr3%2FkAcaZp8pBhPv97MgqLH493xyAREZ%2F%2FsS3A3vWKa179XzCHIS56l0a6aPNvQxi1hnkYyYWqW5j92AChIo0Dsrh0ZJXpr5N8jO0PYo8TSObG67IrGH2DvIyzg0gG2ZyPEOGrp2fVuEh2SlrgjBTCn%2FTRDOb8KZQ0XR7Flb%2BnhsacRI%2FDUcUUq2MxQ6ykqG8IOs9e2j1sauz5%2BloRwY%2F9NPdDftlatdqM7wVMPqbscQGOqUB%2FiEU%2F55BGUfIDPMWSNf%2F4ZdDm3NbXBfYCtwwTCjtqvZ6H5bBh29abmxSd9MwQkKZ3f9kgM%2F4Zc4g4jnsOHCb3NOvCOy5ltYf6fF4p5Yo9KnfPxmqWwJ0z8IU27Oyinv3SK2rGpq8e4%2Bpjnf%2FxulSuEcXIoD4AX%2FHUwe2U45tcTXO7%2BPRsbv2XFFk8BZiD75qH3XdgzefJCDLHwsYx2rdfsfc81%2Bv&X-Amz-Signature=69cd6907f8e1502713e4930f584190b242d3d1746d98411da92f3b03e97e0631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNTORQH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTPD2e7kjXeqhlZc2XMJdWew9RH%2Fol1RuK28pogJvgHgIgEQMdMwzuXFVRtdmp%2Fbfr5q56OEQVqLzcHGRkBrYaPnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAcj3%2FK8W%2BTbPejhSrcAzXh%2FgvUZfNNIWVvhFykyFUfmzMedARZBU2ughE9tE2S3tXfHcXb8PnfQ%2BOzoKvxixyULOIUF9XI9hIBhDN89RKiKxAQHYIJRgI%2Fl1qQ1UDwxxTm3ZAA9w21cRMsX13cBGy2kHKDSxaUPt9iw1NZk2p313g0vRpQoLC%2FtB18EUIO0UTNoPukeuZdmNRk8JmFOVO8ZyPc%2BQvr51ebUqYgfUcEGc8d26ipHZvxs3BACgPWiVnxtQVStuJq89UVP0PYBZd136ymfmFOu718NlzeYE26%2BmeA7So0Yf1lfIn1eFXYK1otIf%2F6xN7rFUJhTFUbM2KnILcZjt0NbcYMOeo7FGissD7hlzdbl4GZEiKFLYFN%2FRsUZzXsAtyB4CO5FyOLqaMCCaSA3NDULiTgeo7U%2FC4Jr3%2FkAcaZp8pBhPv97MgqLH493xyAREZ%2F%2FsS3A3vWKa179XzCHIS56l0a6aPNvQxi1hnkYyYWqW5j92AChIo0Dsrh0ZJXpr5N8jO0PYo8TSObG67IrGH2DvIyzg0gG2ZyPEOGrp2fVuEh2SlrgjBTCn%2FTRDOb8KZQ0XR7Flb%2BnhsacRI%2FDUcUUq2MxQ6ykqG8IOs9e2j1sauz5%2BloRwY%2F9NPdDftlatdqM7wVMPqbscQGOqUB%2FiEU%2F55BGUfIDPMWSNf%2F4ZdDm3NbXBfYCtwwTCjtqvZ6H5bBh29abmxSd9MwQkKZ3f9kgM%2F4Zc4g4jnsOHCb3NOvCOy5ltYf6fF4p5Yo9KnfPxmqWwJ0z8IU27Oyinv3SK2rGpq8e4%2Bpjnf%2FxulSuEcXIoD4AX%2FHUwe2U45tcTXO7%2BPRsbv2XFFk8BZiD75qH3XdgzefJCDLHwsYx2rdfsfc81%2Bv&X-Amz-Signature=8b90bcd75af77c109e0f77d92a8bb3c0ae28daf7eb1efdc66a9092a0e1ef8e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNTORQH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTPD2e7kjXeqhlZc2XMJdWew9RH%2Fol1RuK28pogJvgHgIgEQMdMwzuXFVRtdmp%2Fbfr5q56OEQVqLzcHGRkBrYaPnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAcj3%2FK8W%2BTbPejhSrcAzXh%2FgvUZfNNIWVvhFykyFUfmzMedARZBU2ughE9tE2S3tXfHcXb8PnfQ%2BOzoKvxixyULOIUF9XI9hIBhDN89RKiKxAQHYIJRgI%2Fl1qQ1UDwxxTm3ZAA9w21cRMsX13cBGy2kHKDSxaUPt9iw1NZk2p313g0vRpQoLC%2FtB18EUIO0UTNoPukeuZdmNRk8JmFOVO8ZyPc%2BQvr51ebUqYgfUcEGc8d26ipHZvxs3BACgPWiVnxtQVStuJq89UVP0PYBZd136ymfmFOu718NlzeYE26%2BmeA7So0Yf1lfIn1eFXYK1otIf%2F6xN7rFUJhTFUbM2KnILcZjt0NbcYMOeo7FGissD7hlzdbl4GZEiKFLYFN%2FRsUZzXsAtyB4CO5FyOLqaMCCaSA3NDULiTgeo7U%2FC4Jr3%2FkAcaZp8pBhPv97MgqLH493xyAREZ%2F%2FsS3A3vWKa179XzCHIS56l0a6aPNvQxi1hnkYyYWqW5j92AChIo0Dsrh0ZJXpr5N8jO0PYo8TSObG67IrGH2DvIyzg0gG2ZyPEOGrp2fVuEh2SlrgjBTCn%2FTRDOb8KZQ0XR7Flb%2BnhsacRI%2FDUcUUq2MxQ6ykqG8IOs9e2j1sauz5%2BloRwY%2F9NPdDftlatdqM7wVMPqbscQGOqUB%2FiEU%2F55BGUfIDPMWSNf%2F4ZdDm3NbXBfYCtwwTCjtqvZ6H5bBh29abmxSd9MwQkKZ3f9kgM%2F4Zc4g4jnsOHCb3NOvCOy5ltYf6fF4p5Yo9KnfPxmqWwJ0z8IU27Oyinv3SK2rGpq8e4%2Bpjnf%2FxulSuEcXIoD4AX%2FHUwe2U45tcTXO7%2BPRsbv2XFFk8BZiD75qH3XdgzefJCDLHwsYx2rdfsfc81%2Bv&X-Amz-Signature=046629ada35c0dd6e4f249ba9c1364978293ce485b4cc623d57f7330be91cf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LM4ZHM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtafMquvO2oWOl%2B0GGmwRMbbz1Tus2X1IDF1csZbgO2AiBFKrMl5rSh9BpA5t6ySyL6alkX3NmahX8S%2F7Sba87hoSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJF0wGzvxmkWL7XZmKtwDqT2TUehrADdAPBqnU4CP8LzylT%2BTD7k0dhcYLECWo6Qw9coiWKeUD624jIEf4mRX68qGseS1PyhvS2XligyHmFzy1xuqIkGsAIb8sb0ddiIKGpxGlBnQbp%2FiDCb9PvRTMNrq53Bx45D5gaUSn%2BwKXZ9koG3fs2i8tqHPm%2BSDuuFvQRKMgn1QT76F5rVtTFPGYRBK4C17MlTKGw8qd0CL6g0rgYNNyDu8LqT3z6PpJyiGZCBHJ43l0FE7C%2BkcmprfC7qjylu0YteLu%2BQiApjNz%2BOVHrKh%2B%2FkkW8FJQPFHItSs8vRDWC2H4dF2BVYiXRs8%2FaGX2yed%2BhxtfwewYcRdRqponhYa%2B89BRQ15orhPjgA4jpXDrFstzXlf5oUTz370OZB6%2B0vTlHet5KlHR8wnBqU%2FrWhSs1qy%2BQDf9UwpHpo7voVf2Xyqia9RCTgb9js08paCb%2F%2FDtcnumQMivq%2BdZUq5FQFfl7cJ7cRRwg0FyVzhZ3kMYpR4aqiIrbxJz7snHrNyludtk8hnzWaqb7gQ1dvckj1pJIbMmfe738WZ5hoq%2BB%2FIdc%2Bx4v14qJTES4mUQPul17jt9jmICuM6EbKzQo7DEmeYYwo8qRxF7jLzwtPdCCq1VBbgJUSqIncw35yxxAY6pgFNaBG3YG9hVUYRlqkkhT%2Bg3fY4RP5RG%2BeGqgywJl%2Fkr18zjqzK7RKWVe%2FLmkbKX08rJ%2BmTId6t8zapiZtXrYqStJgN1DTIXSFXORfZS%2BpDPWK6mSQU4E6NjYjfKNlfeJZms1jgeQcAC%2FiwYiCG8fG61uIXjLr3ioJW2VqC8L9EubbR7QURIR9J17YYNyIhF1qiQMF0The3lvBBpGBQ11GS5dTvrV1S&X-Amz-Signature=cbb9dd0e0212c8d70db41bda6d058f76a4a71472a71e783b004b1b0af825c51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKZT5XF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGm8yIcIpMz%2FwWBmpFkG50KdWwl6OvxGS4d%2B6lIZc27zAiBdOJP4giWtXN0W7M9W5jvuR7aDWHBfZP0pFHqRvSR13CqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3uU%2Beq5%2BgSlb7yfZKtwDthFZh4F8ortlR%2Bj91Pii2OhIgUf9W6pYvMJcSo7HySMw2E8IWKXQVwMw3LpbsyRHeI1q41iZXR%2BZs042uq9yO6SwjFVTQFSoGi55LFxUmTBmD2dGZkqvcBeM97tefM6WQUj%2FOyYOitJXM42pGkfDMIY6fHzEnjTuKZVR%2BefJpHDnXc8RgeA0AddCaGucHMs1yjliUoruPKzXqcxZxmv7CQjf2Ub80ligKpq7%2FdOc8voILtC%2F2%2B0abnD1Vo7bOx%2F85TVR1ysyFOBPIyyKCaqycI7dIDb921rwvXTuyafEVb%2BMEbRAk%2BrWoaxqTzchXKtw3P0yL9OwDn56iSuhiL7B5bDSzZe4j4ViWnIamWme8t1mL0oS55VsGcEJ2%2F9GwZhhk8laJGaR%2BjADKIkV8%2FCYboSEKqsC9M%2BLqs3CohGbfuVdhHu82oKyKh2aTmP5aq1bFEu0Whgz%2BjBmZ39%2BNnUItf%2FXEWiWz0JucS4GhUdREQTd3IvCl2VgRivfFe6RrKiAOWy9ngF6L7qI9hs4GEXvrSk7k4231cEmWHYAK3J9O%2Fy6JjWu2oC4anq%2BvKLUTcQH48Rq5pJjsd%2B%2BGBwBZYW8gHY0%2FhiOxLTE%2F0bpgKK9%2FXZAP50WLULsgJDCbeIwpZyxxAY6pgFpGytgUQT2WnoUfBme1EZJFPIEb38ZWJjBKWZ5cec8gaWOV2Ck%2FtkjVbaCMha4b1SyfzYNE%2B1pH7Ou71I6e3e46z4gyg%2BqhTFe6tPhHvveOcrW24XN9Mvv6qhVFIPyHd21wSWNrh8%2F5EV6i%2B17638olzWSbUOdUYIkqVAATXjdL3rZaw0WP5nnW%2B3ab33ohktc%2F3pFLFG6D1scNPt4ikddupr8ZGp8&X-Amz-Signature=abd02d52ebf0ba38e69348e81811d8410e6eb91048e197550bfc34189224086a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNTORQH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTPD2e7kjXeqhlZc2XMJdWew9RH%2Fol1RuK28pogJvgHgIgEQMdMwzuXFVRtdmp%2Fbfr5q56OEQVqLzcHGRkBrYaPnsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAcj3%2FK8W%2BTbPejhSrcAzXh%2FgvUZfNNIWVvhFykyFUfmzMedARZBU2ughE9tE2S3tXfHcXb8PnfQ%2BOzoKvxixyULOIUF9XI9hIBhDN89RKiKxAQHYIJRgI%2Fl1qQ1UDwxxTm3ZAA9w21cRMsX13cBGy2kHKDSxaUPt9iw1NZk2p313g0vRpQoLC%2FtB18EUIO0UTNoPukeuZdmNRk8JmFOVO8ZyPc%2BQvr51ebUqYgfUcEGc8d26ipHZvxs3BACgPWiVnxtQVStuJq89UVP0PYBZd136ymfmFOu718NlzeYE26%2BmeA7So0Yf1lfIn1eFXYK1otIf%2F6xN7rFUJhTFUbM2KnILcZjt0NbcYMOeo7FGissD7hlzdbl4GZEiKFLYFN%2FRsUZzXsAtyB4CO5FyOLqaMCCaSA3NDULiTgeo7U%2FC4Jr3%2FkAcaZp8pBhPv97MgqLH493xyAREZ%2F%2FsS3A3vWKa179XzCHIS56l0a6aPNvQxi1hnkYyYWqW5j92AChIo0Dsrh0ZJXpr5N8jO0PYo8TSObG67IrGH2DvIyzg0gG2ZyPEOGrp2fVuEh2SlrgjBTCn%2FTRDOb8KZQ0XR7Flb%2BnhsacRI%2FDUcUUq2MxQ6ykqG8IOs9e2j1sauz5%2BloRwY%2F9NPdDftlatdqM7wVMPqbscQGOqUB%2FiEU%2F55BGUfIDPMWSNf%2F4ZdDm3NbXBfYCtwwTCjtqvZ6H5bBh29abmxSd9MwQkKZ3f9kgM%2F4Zc4g4jnsOHCb3NOvCOy5ltYf6fF4p5Yo9KnfPxmqWwJ0z8IU27Oyinv3SK2rGpq8e4%2Bpjnf%2FxulSuEcXIoD4AX%2FHUwe2U45tcTXO7%2BPRsbv2XFFk8BZiD75qH3XdgzefJCDLHwsYx2rdfsfc81%2Bv&X-Amz-Signature=5e36790c80d31e8541d10724bfef71914e4a2cbd0ba56bbd738a1e98460f82c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
