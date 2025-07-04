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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BH375F%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEoGFae6%2BPkmB94m%2FLymcMDaUfs6BFeu35EFzxxWMK9SAiEA4fGnSsJLKfMuffm0KvAShIno1tWPIbq8BHYV1T9c2Woq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBWgOtMSDMuWv7rrTSrcAyDmwGAmlDKjJ734nrC3cPRwxiIV3F1AeoMd8gtQ9cIWaElGgMTp1z1d6lQxcY27bAaCHvAhyahL8wiHlIYZ16Ia0luguvx3q8ijCTqMmPZ4JTUnKIUhSmzweV5wSUXg1gMe7iOvHmgPZgykUNHL5VQ8G9Cv4hiz%2F3t4cHnpNwora8Mlf191ZB42EGfXAdpLM3SdxcQuU0WJBbImgHAizsRge8aanK3Z2gAg9ZkACEUtNd7GE%2BeVfjn6uSY5uOztMx4AzFV1M1WYuufgKKmQwQJN%2F0VYUD9q5cTXFFgYHzm0%2FQa9ujE5UG2BCDAoh%2FERAwpcUHBXeMtaNjup%2BAP48ifd0rga9%2F5FQ0bBeCjrdlDc5PlVH5LoAHTozQA%2BayTBtSzB56gyf32RutQkgYRM6ltCgfwjpQioTKd2UzXP0eS%2FvcZcq%2FGLm6jLn0DL1Xd1nHRF0tksYks03uAPopCPI9gMqSzG5k1w15pJZxZNFS5lZXETzexiQliaps2kXGpedn4OpnBQN43yA7pjDgFQ1kwBJadRgnDpbOe%2BYaa6QXcgZ%2BzEVfG4uNeIkFAz3luwGtnjK0xUNSCRhJnL%2Bc3v2UIl%2FdTIwQWjDlXgJJxDaOK9U3U2W8Kvun9Xwhm9MNfsn8MGOqUBVzDI0Is3EQPGU6B6e2Ad1piRkaAUXQ4T%2Bd%2FBc2%2Bo7ksDLjP0ccn%2FH%2FO9fghHKgA1C4YwJT3m2twzqMBxCiqEAwe3IjWo94XvXTEjiuF1xOXat6cqRTtcnRoilVvlM0JB6u7wYUKJmZgz%2Fact%2FwXMkS6y%2BFkNr%2BEurZMPSzjUQ8EsAymuFQrragzmWvC4bNoJQKVrAnvOZVecjDPjUHNT6Ll2k4yX&X-Amz-Signature=0b5122a699aa63187b4df5ea52bbb4a9dc3805ab2e513cd49b94fad96be80d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BH375F%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEoGFae6%2BPkmB94m%2FLymcMDaUfs6BFeu35EFzxxWMK9SAiEA4fGnSsJLKfMuffm0KvAShIno1tWPIbq8BHYV1T9c2Woq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBWgOtMSDMuWv7rrTSrcAyDmwGAmlDKjJ734nrC3cPRwxiIV3F1AeoMd8gtQ9cIWaElGgMTp1z1d6lQxcY27bAaCHvAhyahL8wiHlIYZ16Ia0luguvx3q8ijCTqMmPZ4JTUnKIUhSmzweV5wSUXg1gMe7iOvHmgPZgykUNHL5VQ8G9Cv4hiz%2F3t4cHnpNwora8Mlf191ZB42EGfXAdpLM3SdxcQuU0WJBbImgHAizsRge8aanK3Z2gAg9ZkACEUtNd7GE%2BeVfjn6uSY5uOztMx4AzFV1M1WYuufgKKmQwQJN%2F0VYUD9q5cTXFFgYHzm0%2FQa9ujE5UG2BCDAoh%2FERAwpcUHBXeMtaNjup%2BAP48ifd0rga9%2F5FQ0bBeCjrdlDc5PlVH5LoAHTozQA%2BayTBtSzB56gyf32RutQkgYRM6ltCgfwjpQioTKd2UzXP0eS%2FvcZcq%2FGLm6jLn0DL1Xd1nHRF0tksYks03uAPopCPI9gMqSzG5k1w15pJZxZNFS5lZXETzexiQliaps2kXGpedn4OpnBQN43yA7pjDgFQ1kwBJadRgnDpbOe%2BYaa6QXcgZ%2BzEVfG4uNeIkFAz3luwGtnjK0xUNSCRhJnL%2Bc3v2UIl%2FdTIwQWjDlXgJJxDaOK9U3U2W8Kvun9Xwhm9MNfsn8MGOqUBVzDI0Is3EQPGU6B6e2Ad1piRkaAUXQ4T%2Bd%2FBc2%2Bo7ksDLjP0ccn%2FH%2FO9fghHKgA1C4YwJT3m2twzqMBxCiqEAwe3IjWo94XvXTEjiuF1xOXat6cqRTtcnRoilVvlM0JB6u7wYUKJmZgz%2Fact%2FwXMkS6y%2BFkNr%2BEurZMPSzjUQ8EsAymuFQrragzmWvC4bNoJQKVrAnvOZVecjDPjUHNT6Ll2k4yX&X-Amz-Signature=05fa5d4b2ac22b2886b71f81f73afe6b56c4df83ad1ab026641f458a772c83de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BH375F%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEoGFae6%2BPkmB94m%2FLymcMDaUfs6BFeu35EFzxxWMK9SAiEA4fGnSsJLKfMuffm0KvAShIno1tWPIbq8BHYV1T9c2Woq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBWgOtMSDMuWv7rrTSrcAyDmwGAmlDKjJ734nrC3cPRwxiIV3F1AeoMd8gtQ9cIWaElGgMTp1z1d6lQxcY27bAaCHvAhyahL8wiHlIYZ16Ia0luguvx3q8ijCTqMmPZ4JTUnKIUhSmzweV5wSUXg1gMe7iOvHmgPZgykUNHL5VQ8G9Cv4hiz%2F3t4cHnpNwora8Mlf191ZB42EGfXAdpLM3SdxcQuU0WJBbImgHAizsRge8aanK3Z2gAg9ZkACEUtNd7GE%2BeVfjn6uSY5uOztMx4AzFV1M1WYuufgKKmQwQJN%2F0VYUD9q5cTXFFgYHzm0%2FQa9ujE5UG2BCDAoh%2FERAwpcUHBXeMtaNjup%2BAP48ifd0rga9%2F5FQ0bBeCjrdlDc5PlVH5LoAHTozQA%2BayTBtSzB56gyf32RutQkgYRM6ltCgfwjpQioTKd2UzXP0eS%2FvcZcq%2FGLm6jLn0DL1Xd1nHRF0tksYks03uAPopCPI9gMqSzG5k1w15pJZxZNFS5lZXETzexiQliaps2kXGpedn4OpnBQN43yA7pjDgFQ1kwBJadRgnDpbOe%2BYaa6QXcgZ%2BzEVfG4uNeIkFAz3luwGtnjK0xUNSCRhJnL%2Bc3v2UIl%2FdTIwQWjDlXgJJxDaOK9U3U2W8Kvun9Xwhm9MNfsn8MGOqUBVzDI0Is3EQPGU6B6e2Ad1piRkaAUXQ4T%2Bd%2FBc2%2Bo7ksDLjP0ccn%2FH%2FO9fghHKgA1C4YwJT3m2twzqMBxCiqEAwe3IjWo94XvXTEjiuF1xOXat6cqRTtcnRoilVvlM0JB6u7wYUKJmZgz%2Fact%2FwXMkS6y%2BFkNr%2BEurZMPSzjUQ8EsAymuFQrragzmWvC4bNoJQKVrAnvOZVecjDPjUHNT6Ll2k4yX&X-Amz-Signature=dddc91b24e2d2853eafd5cbe70963bc8924a0c826a07f9aca549dc8c5cec48fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VDTXWHS%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD4oeLmQgiUHP06gHXKjrz7%2FZLqsLkWUlsdjep1pXxf%2FAIhAKTnr0HuIPDLesIVtl4zW14%2BB2U4aWqHE37gXIvMxZ6jKv8DCDEQABoMNjM3NDIzMTgzODA1IgwMurV%2BoCj5gb8YrtEq3AMG%2BuKlatjPjKvmAonmzTCK2HxP6aoEL%2FCmoRbTXdCuSc1sOKC1WmXMPjp0tDHhWqNMEfaH0NkU5nGuaGpAg3HzsN2ew%2BlwgB0QRjQjFae489VY0Xoj%2FLx0%2BvR%2BvHJ2PYZnkvHLqZpghdIkLuhOTLws186uoH38LpQzva5YcPj9GI9N6gAYSVSRP0Z3dJM8UourivajBEwTiXS8ct%2BQIgekvzb%2F3yJsso1sgFhIg80%2BHkr5kXI3F9QR7%2BA6Zoy%2FEwOV4%2FRihExXV3y5UEXcIRxdVFgXAhlYYxl9pOJcfGcv5TBU3uNg8VuRuyKUToLk2ayRa07p%2B0BHl3dgbCL6LG2diI4XV3gi8lUr0%2BTTKZ0xE9blh7nSYZEiMgfBUYO%2BDcFv6snFK3FCP7cAPF3pRQB2cM7ea6jyF7k%2FWl6CjGDil443bDvWbUmoYvH%2FFpMW3rYlqB97iDkRz2RlHh0gkkW49R8kDM078OYX6oGLxsKuarTp%2FMr2oXUicwE%2Fszuvj2gBLtU6SPV9VZSnQicMYyhpbJfzgaPtw%2F27HG3nXalsg7FP%2BmFSU6lq3esLabOO2XRQYoh2bOGvOhHCNharmn%2Bq98bzxDA2qK5lXzWUNsxQ02Ddd33UgJvKjRpZDTCm7J%2FDBjqkAQ%2BUOnhx0Z6fmW%2Bvr3jkO5fg9s4sGUYUQp%2FQDvCtP4p5ph%2BR4S%2BCi8KAx2ifVF7OpOLTr%2FSv3Yq61%2BtCCulLI3MwBC70Wj1YAkxnjUJ5kqjaQfW%2Bn3NeOYMQWuQMl3mBSn%2BjONSH%2BhXtkFv6UdqkzJZpWyjxfpevQXJ%2FBzr8EwImKBDxgNEnlQzfhHKFD57o7Y2O%2FwxMzzsGAzbD4B3dcFeO9Kwm&X-Amz-Signature=eb2815bb6238a20da129730805c503c4e90fb402bd398ddc079d149cc597de4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRRNHV3P%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZhxYM9EH23c67UryBzE66cRQO2vfn%2FRO4kBfjSf83JwIhANcMVZWEQalUFj7jrc0gVnx6AwGiUuRC%2F8fJzzl60hpgKv8DCDEQABoMNjM3NDIzMTgzODA1Igy2%2Fd6VLBvfD4uqL1oq3AOEz5ZdSSim5z34npViAepDMRl4hevYIYa3kUvbSDZN%2FAQepVJZLp%2FROn%2BLFcJVNpa5ex0pDNyBGk090TwSkJAUi4SxLP0UXy3x8Q5cde%2F94n6KW9tg3r573Xp2Y82%2B%2FDC7hWXx%2FR%2FqmdqP4NX8ubUi45QYD%2B%2FCMuTJs6bKGY5dZmBMCBcJnPTKO4BY5y86FewwjqdobnhM5u3Fj23THbMeWoTbUP3DlXZp2dWer46P3%2B8xWzjUsMHd%2Bp5F6lqEk169T5Gbow7b7Mb11YGVOaIqXJHmyBdQ1uE2N0sibCbH3AB4fEv32Es8SiS7aTvwdHUZmGJtj723GGoucIejU95NN%2B5TJAxJYX8LSvZa35iZASth%2BMM%2FFNbA6SC4Kwea0qQRdi%2FipbGh2VoJz5rViyGyDGXydYomiR53Bkpx6gtwkiOnJKz4pe5tVwnjafq81XYn4b5okAH2xsqcexrdKU6ZdOl7fATBIt4BtgwPSKLynY08bJXeVXbxACofQYsLpBSHozTr0olKt%2FM3svS711HWEWNZg%2B4UbdWFzplUOhCfwUaawDGGbcCTRfJqrDwV1ISt%2BFTCTldStN3zEe934YsfyuBUfVNPf5%2BFYrnQDACqOkg5O1GziHscNsP%2F7zDC7J%2FDBjqkAbzU1tnI8I19Pw6lDK4k8oSFeDkclzOK3JqZFka1i0V%2F%2FjlA6RhqZCXBHDlwLLSAG8h907yrsO6HY7oL2C8PLOFTqzjC3Mng5%2FBncAWYcEZ7q9DKYM%2FNfwy%2FPAyuLoy95cxzPZxIBs6QqW6WWgYvE4%2FmD3ANTn5LT7xWXK5pffzD7y2wMh2Z2eLqUQYMFUDv%2BqunTq%2FF9f8sNacU29%2BcaU1mavXx&X-Amz-Signature=1377739e5cb605c71551f4a77542cf3da48e2cc55533e326aa1c1ea98406c76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BH375F%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEoGFae6%2BPkmB94m%2FLymcMDaUfs6BFeu35EFzxxWMK9SAiEA4fGnSsJLKfMuffm0KvAShIno1tWPIbq8BHYV1T9c2Woq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBWgOtMSDMuWv7rrTSrcAyDmwGAmlDKjJ734nrC3cPRwxiIV3F1AeoMd8gtQ9cIWaElGgMTp1z1d6lQxcY27bAaCHvAhyahL8wiHlIYZ16Ia0luguvx3q8ijCTqMmPZ4JTUnKIUhSmzweV5wSUXg1gMe7iOvHmgPZgykUNHL5VQ8G9Cv4hiz%2F3t4cHnpNwora8Mlf191ZB42EGfXAdpLM3SdxcQuU0WJBbImgHAizsRge8aanK3Z2gAg9ZkACEUtNd7GE%2BeVfjn6uSY5uOztMx4AzFV1M1WYuufgKKmQwQJN%2F0VYUD9q5cTXFFgYHzm0%2FQa9ujE5UG2BCDAoh%2FERAwpcUHBXeMtaNjup%2BAP48ifd0rga9%2F5FQ0bBeCjrdlDc5PlVH5LoAHTozQA%2BayTBtSzB56gyf32RutQkgYRM6ltCgfwjpQioTKd2UzXP0eS%2FvcZcq%2FGLm6jLn0DL1Xd1nHRF0tksYks03uAPopCPI9gMqSzG5k1w15pJZxZNFS5lZXETzexiQliaps2kXGpedn4OpnBQN43yA7pjDgFQ1kwBJadRgnDpbOe%2BYaa6QXcgZ%2BzEVfG4uNeIkFAz3luwGtnjK0xUNSCRhJnL%2Bc3v2UIl%2FdTIwQWjDlXgJJxDaOK9U3U2W8Kvun9Xwhm9MNfsn8MGOqUBVzDI0Is3EQPGU6B6e2Ad1piRkaAUXQ4T%2Bd%2FBc2%2Bo7ksDLjP0ccn%2FH%2FO9fghHKgA1C4YwJT3m2twzqMBxCiqEAwe3IjWo94XvXTEjiuF1xOXat6cqRTtcnRoilVvlM0JB6u7wYUKJmZgz%2Fact%2FwXMkS6y%2BFkNr%2BEurZMPSzjUQ8EsAymuFQrragzmWvC4bNoJQKVrAnvOZVecjDPjUHNT6Ll2k4yX&X-Amz-Signature=aeb6ad24c47561f7709b772b2f1ec66624c591ac006ef1aabea5a061721ffb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
