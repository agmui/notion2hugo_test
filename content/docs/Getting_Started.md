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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFQXW3W%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKVxBSba%2FfpQYsu%2Byy8D1E1u3hgsgX6AO8nvKri5JGTAIhANAu%2FmReTitFWuPoQc2y29QIV0%2BCRk7x6O1ryLy3w7GOKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZXWVFujAlSU%2Bxhb0q3AOA%2B%2FyTs1Iw9kMPknInAuAvEWK4Soh9qFeOlxNgPtJ0YiFH3%2Ftt9HLURC8csrHUEtAhxuCnH158Zy9WZLXOy0aPHmOvXXSYDbLzmF9jS0g%2FWAGz08iFv6zbMHovVtj8l2Bx05ivpD1aS6%2FZBY80c8jdrTGCHsZHdxxj%2B%2FSOgs0O5A%2BHBQHBqxplAhG9jaxSaiH7KHSSBcO0nlkrd%2FJ5NOik7mVrb82az6l1MrlWFz9ddZ7tDaau5ys76rUWOg8WfzWaG1K%2FQUes5D5GGobn8y3jGraTFa1bbelwWz%2Bf7r9Q5QDLo3vs3M1Jbs3XtG%2FIQAq8mSHUelCZZZL52ya%2BklVEagi8d0qA77R3atu0SvR3aMFRlpZpjHA9n%2BAJK3BkmLmQibOyGHRein1o%2B9txiwwEM2AeB3kVjwG0%2FgYffdz5%2FTeRXRdJuGimbLF3xsRNuOPk23t71DWxhOXuIvO7rgWyHeeFEpfdleNehGgq%2BpvocIenWxjlospwiWbNicnoawJweV2bswFU1wGytC%2Bl%2FoH31pEUVjha60YmJFut5u3X9bGhAmBh91ctnkuottUQVxk%2FlcoiW8bLEKNeK6ZO3UDcbjomY1qmR6FBxJF%2BGSsDBZdFmYxATUS%2F9nv0gTCrnKW9BjqkAVB7FCvRNLo8JNs3fotxPNbmbr66dtaKAmukwPmrSMQTJrV%2BKHn4lEOrXxGyKpGteIcD1DL9FVpJGNvTHIKTcWgPdyVrdnpwRdoZxq1wzD0kr05gypJULXuqw%2Bkgk4ugwyMq0EBYSPP2Q1Ap8JNGBk2Ts124cCuukRc4IzSFNL2goG%2F1IvYFu0YcvkrXbpG63OKDzcGLn%2FUY6uEEVpC4xfinlgh2&X-Amz-Signature=3d76d01463f63200f5d4eee2a5a80bd57b5796b06ca0dcd1feccf7726519f77d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFQXW3W%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKVxBSba%2FfpQYsu%2Byy8D1E1u3hgsgX6AO8nvKri5JGTAIhANAu%2FmReTitFWuPoQc2y29QIV0%2BCRk7x6O1ryLy3w7GOKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZXWVFujAlSU%2Bxhb0q3AOA%2B%2FyTs1Iw9kMPknInAuAvEWK4Soh9qFeOlxNgPtJ0YiFH3%2Ftt9HLURC8csrHUEtAhxuCnH158Zy9WZLXOy0aPHmOvXXSYDbLzmF9jS0g%2FWAGz08iFv6zbMHovVtj8l2Bx05ivpD1aS6%2FZBY80c8jdrTGCHsZHdxxj%2B%2FSOgs0O5A%2BHBQHBqxplAhG9jaxSaiH7KHSSBcO0nlkrd%2FJ5NOik7mVrb82az6l1MrlWFz9ddZ7tDaau5ys76rUWOg8WfzWaG1K%2FQUes5D5GGobn8y3jGraTFa1bbelwWz%2Bf7r9Q5QDLo3vs3M1Jbs3XtG%2FIQAq8mSHUelCZZZL52ya%2BklVEagi8d0qA77R3atu0SvR3aMFRlpZpjHA9n%2BAJK3BkmLmQibOyGHRein1o%2B9txiwwEM2AeB3kVjwG0%2FgYffdz5%2FTeRXRdJuGimbLF3xsRNuOPk23t71DWxhOXuIvO7rgWyHeeFEpfdleNehGgq%2BpvocIenWxjlospwiWbNicnoawJweV2bswFU1wGytC%2Bl%2FoH31pEUVjha60YmJFut5u3X9bGhAmBh91ctnkuottUQVxk%2FlcoiW8bLEKNeK6ZO3UDcbjomY1qmR6FBxJF%2BGSsDBZdFmYxATUS%2F9nv0gTCrnKW9BjqkAVB7FCvRNLo8JNs3fotxPNbmbr66dtaKAmukwPmrSMQTJrV%2BKHn4lEOrXxGyKpGteIcD1DL9FVpJGNvTHIKTcWgPdyVrdnpwRdoZxq1wzD0kr05gypJULXuqw%2Bkgk4ugwyMq0EBYSPP2Q1Ap8JNGBk2Ts124cCuukRc4IzSFNL2goG%2F1IvYFu0YcvkrXbpG63OKDzcGLn%2FUY6uEEVpC4xfinlgh2&X-Amz-Signature=3a8ccb1dc94052907d12a1b2f5ca3ff259a96dd881b2eeaf8313ac4b55d1e8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5BU3LDZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeINyBoHsRwaicpZ9VICB7L63g85JrH81ecHa7zPf3lAIgGaUGP0HKmjvemI3v%2BLlsk30Q3h1VbxLWo0%2Bf6IpwKbAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYovRG52n%2Fi2gAGQircAwm4wg2GlgXDgEQrdXz2Iqyr2BlJoAKp1M0%2BTwSFmSiLfeUwnFvxMYNeATNao1vMYswh4gFCv9tdJ9sIMdAcvHiFdpzKOPbg063RqAKpCmpaDLHjYhnlikEiR3DoP2OSAjQyNv21ldrDG4FoObVHoyzSlm2l8z%2BO8AYit%2BLpp5yoxmBkqAanN1CdJIHsdfmYRrDKMrJE64%2BtSZWL6V1tqJ%2Brv8j4RAbGlweY6KRithAWrMIP2QfNIlOxGG4tLFojaPtnXcqm%2BOmKSL6mkjqWaiVZcKOpZUXg0eXaxFErnNFarTE3F9liPyXZ7Exod6jiUZcu51ERWNdz4PjwizN%2Br8Jk87%2BpxI6AYJs62HKSh8xrgySyI7p%2FC7iC6OHIC2S%2F3qHo7zOFTgOgFgRF26hrqpEBWQgSHt27RvItPjJ033%2B6B08KWrdtBfUG1yxuOQ6qsFS8evaUzr3oTUSvE4RGzyogXGkqs3oUihfrAqEG3LVbIs5nnH6u9unbcQQSzZG%2BcxuzXXHJAV16qo5%2FaP1Ju1PVpb7URv2pckO2EkJhw82l%2FxPcCkJ0Vm0NJmltvVJ3JJi%2FbC3kTEk5LTMyOk2K3CGJGhVIrYlPYBSWh6aub6QFoXvlt0nG1VjGAaKNMIWcpb0GOqUBb0x6qzimAvkIc0sine6mTrwktLIF2Wu1w8oCFC5yKSwZN1M1CZGQi0mjV2EsFPYtiweFxM%2FB1n%2FzcbUpTfxBaFoyFK5aKOYX8hBPkv1trCnwT0uNimSmvov4GldC56WUMKwe8RCk1gzrUJpWa341g1N7r98UZYNaqOlbZPJmB1t6Sqh1ybWgJER%2Fv0AGbtM6QRQVqaXzAI8f1DzkeVmshBABRaen&X-Amz-Signature=649c2f24349adbe269da21c01bb3b5686e20ebb9cf4fa4c754f74a78fd169461&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXJ6LAYJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvI7ZaJvE6epu8AzRWCEpEHK55PpZ5qOEZcsxF4%2BYkZAiEA6Bmb1FqnMTD2mfmw1VWv5OmZsBzEThC%2FoxDsq4d3XLIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7uk3FxK6VIr9eyUircA4RqOIr3o9DvlA8cmSWrTtvjCGBuvxWCGO54KZZsT%2FbLD17PftHxolLpyYdabZ6HfCvsBCxebwaRZSS7Z5RqOcFbz0dIa%2FWaUZQGLB4BH7zvoxrwadsH5IRUqDfRCwxm8m%2FTazjp6i9qj3JVIrG6vueDrRkHpR6rBcnd%2FHRJLxm%2BSQwSBjwbQc0IhzT%2FHV3uEhF9wKpwFNaHesvI2vfiurtd31U13QHMTfR84rV4qOOTQRtH9GDKrv5IRbNC3R75Y2RNZlj%2ByVaEqAI63O34rJJi5nlnXNj2oE354flSmBWPJsHRRmLKT%2BxSZJP7Lcv73zT4B8pZIi26dW%2BpLeecBf4%2FV8XGyp%2FznoWZfjCOV09IRtiiRsyQ7dMoPYhhjUodrPr2xYnpgmOxjHHOh%2BhLT%2B0jAoRyCqxNKALxSVBaX9WYDCz%2FbHy%2FPu6wc4HJFL2G16gSl6nXVsg12zjMMGuBC5Ilm1MAwepEBv6ZgoTAVC25Mq8mzqeq9DfQNxlsu0lxRvNUa%2Fvu7t0IrK4CNS%2FfALSRNZLX6lNGU%2BlObVfckEhjJgKMnrVP4Qedsl%2BkK3vxBynQIMiBgyWCGxXUj5Bzm%2FMtYNsWMgSkPw1jZ6H%2FbxVL1atgzc1fWpky6kwWMPybpb0GOqUBn8MJljjQQpdWr9TtGe4jXAEvO3okJUZ1sNq2ab8vxbmjDa64vpHGn98rpb5UtD2ZHqxYZdF6Whum%2BGZem2WydqIyTZLdJl8tuJF%2Bc0l6vGJO%2B2WBuz6z2KkXpaVSm0pbMzd7Z2pixjg%2FX0z2ucYhomo7kCmu82%2BbFQA%2FXw5oibw%2Fpnpx%2Fa8rKcqZRDRJCph2x%2BrXVRoOn9le48paBjtlmIcm54J5&X-Amz-Signature=5edba8162812dbe0475cc780b17e334aa098f1ef9025d3ec009a135022ed2375&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVFQXW3W%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKVxBSba%2FfpQYsu%2Byy8D1E1u3hgsgX6AO8nvKri5JGTAIhANAu%2FmReTitFWuPoQc2y29QIV0%2BCRk7x6O1ryLy3w7GOKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZXWVFujAlSU%2Bxhb0q3AOA%2B%2FyTs1Iw9kMPknInAuAvEWK4Soh9qFeOlxNgPtJ0YiFH3%2Ftt9HLURC8csrHUEtAhxuCnH158Zy9WZLXOy0aPHmOvXXSYDbLzmF9jS0g%2FWAGz08iFv6zbMHovVtj8l2Bx05ivpD1aS6%2FZBY80c8jdrTGCHsZHdxxj%2B%2FSOgs0O5A%2BHBQHBqxplAhG9jaxSaiH7KHSSBcO0nlkrd%2FJ5NOik7mVrb82az6l1MrlWFz9ddZ7tDaau5ys76rUWOg8WfzWaG1K%2FQUes5D5GGobn8y3jGraTFa1bbelwWz%2Bf7r9Q5QDLo3vs3M1Jbs3XtG%2FIQAq8mSHUelCZZZL52ya%2BklVEagi8d0qA77R3atu0SvR3aMFRlpZpjHA9n%2BAJK3BkmLmQibOyGHRein1o%2B9txiwwEM2AeB3kVjwG0%2FgYffdz5%2FTeRXRdJuGimbLF3xsRNuOPk23t71DWxhOXuIvO7rgWyHeeFEpfdleNehGgq%2BpvocIenWxjlospwiWbNicnoawJweV2bswFU1wGytC%2Bl%2FoH31pEUVjha60YmJFut5u3X9bGhAmBh91ctnkuottUQVxk%2FlcoiW8bLEKNeK6ZO3UDcbjomY1qmR6FBxJF%2BGSsDBZdFmYxATUS%2F9nv0gTCrnKW9BjqkAVB7FCvRNLo8JNs3fotxPNbmbr66dtaKAmukwPmrSMQTJrV%2BKHn4lEOrXxGyKpGteIcD1DL9FVpJGNvTHIKTcWgPdyVrdnpwRdoZxq1wzD0kr05gypJULXuqw%2Bkgk4ugwyMq0EBYSPP2Q1Ap8JNGBk2Ts124cCuukRc4IzSFNL2goG%2F1IvYFu0YcvkrXbpG63OKDzcGLn%2FUY6uEEVpC4xfinlgh2&X-Amz-Signature=327cbd35c9a78647b7f66da19920134d0ab93fb08738a8cf7f6897fde1c0e80f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
