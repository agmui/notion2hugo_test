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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCHOXY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDF4tK2Y8AoGFdH8l0NEsboGcCiaaMwRcHyorAPcWrpAiA6wivR412axprl9LzTULCduXpvZkwLuAHIEf1X9EGFyyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz8x0PXOVwkGVVtbnKtwDXHmviPdFwCS384fDliDg6t36yEKJNWHhIBjHi84hl0tlaHEuTqcPk7LC2WObhvVknan1gBTQdLu5Qmf3iYfkQD%2BhLufosSEoWOF5h852pVWrGvYBbyZez6XU2sMV0x82iwdnaSQKFCf2LPyaaBn0vIKyTH5UMAwAx8widz9WaVhnP%2BUzHYGbirSyQDSrVMxwahF3e4FXVKdBim7zY1VCjcmpX%2FkjJzisWYaTYsplcJ%2FqpKfM1dunOkSMn%2B8RMU%2BQPkOd9crpzZ7MdusenAXMrz28Ssa1clJYQX%2BnE%2Bjcxx2UbqvVVwqFdYmp%2Bpzh33unwqeBN8LAFwlo7Ff3O0XS94UfbU1WlZIFh4ZAt8QllpwtCbG046tFcnClKzkH4oRHuMvsbv1vPeUTeLUuyW%2BZmj%2B9EznXElOaer%2BT7JFUevsjaxkOyHVflLiElSR01w1tQQUYCXazYzylSN6udf%2FXTOCqOXGkz4qs1z%2FBTPuE12dqlTot8XozUvz%2BhhpnLdZ2hvgPqqFtAepzOFgtZudxouH1Bcn9pCKZSWAAp9q3ioSqE%2FscU4MBRbmLrH7tN09I4zg6yORvR4F4XyPZXE16NsKhOhQQTVs0wI3W2J4cWGU1u5douqAoYaX2mxowvMGnxAY6pgGrHXK0xDTR1rkVA34mz5iZT7TmzW%2BGZQISp9uxP78fDxlJwH0RNLw8xbBqFdvI%2BdxMv3Tm9dri%2FZuhIEfO%2FPXjsbLPFpwbj36d42hWfHs%2BZBd22qDaruhzSIXN9ovJvxcYbp8NL1Nc0c2%2BSbh3%2FKoL9%2FSTElqQwPCxL%2B4luW0oqobXud2tbDQKThG%2B%2Ft3pW5MgSMJvuw7K8ig5xyuonspl7XNN4wHU&X-Amz-Signature=a327ab3c6e9263366d9ee93b3d2676b8a80dc16223f24b2c01f0601bd4f1bb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCHOXY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDF4tK2Y8AoGFdH8l0NEsboGcCiaaMwRcHyorAPcWrpAiA6wivR412axprl9LzTULCduXpvZkwLuAHIEf1X9EGFyyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz8x0PXOVwkGVVtbnKtwDXHmviPdFwCS384fDliDg6t36yEKJNWHhIBjHi84hl0tlaHEuTqcPk7LC2WObhvVknan1gBTQdLu5Qmf3iYfkQD%2BhLufosSEoWOF5h852pVWrGvYBbyZez6XU2sMV0x82iwdnaSQKFCf2LPyaaBn0vIKyTH5UMAwAx8widz9WaVhnP%2BUzHYGbirSyQDSrVMxwahF3e4FXVKdBim7zY1VCjcmpX%2FkjJzisWYaTYsplcJ%2FqpKfM1dunOkSMn%2B8RMU%2BQPkOd9crpzZ7MdusenAXMrz28Ssa1clJYQX%2BnE%2Bjcxx2UbqvVVwqFdYmp%2Bpzh33unwqeBN8LAFwlo7Ff3O0XS94UfbU1WlZIFh4ZAt8QllpwtCbG046tFcnClKzkH4oRHuMvsbv1vPeUTeLUuyW%2BZmj%2B9EznXElOaer%2BT7JFUevsjaxkOyHVflLiElSR01w1tQQUYCXazYzylSN6udf%2FXTOCqOXGkz4qs1z%2FBTPuE12dqlTot8XozUvz%2BhhpnLdZ2hvgPqqFtAepzOFgtZudxouH1Bcn9pCKZSWAAp9q3ioSqE%2FscU4MBRbmLrH7tN09I4zg6yORvR4F4XyPZXE16NsKhOhQQTVs0wI3W2J4cWGU1u5douqAoYaX2mxowvMGnxAY6pgGrHXK0xDTR1rkVA34mz5iZT7TmzW%2BGZQISp9uxP78fDxlJwH0RNLw8xbBqFdvI%2BdxMv3Tm9dri%2FZuhIEfO%2FPXjsbLPFpwbj36d42hWfHs%2BZBd22qDaruhzSIXN9ovJvxcYbp8NL1Nc0c2%2BSbh3%2FKoL9%2FSTElqQwPCxL%2B4luW0oqobXud2tbDQKThG%2B%2Ft3pW5MgSMJvuw7K8ig5xyuonspl7XNN4wHU&X-Amz-Signature=f3f1f95f7419afb9bfdae25552f8f45422c90c393709d5a96cafee6a9df67b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCHOXY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDF4tK2Y8AoGFdH8l0NEsboGcCiaaMwRcHyorAPcWrpAiA6wivR412axprl9LzTULCduXpvZkwLuAHIEf1X9EGFyyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz8x0PXOVwkGVVtbnKtwDXHmviPdFwCS384fDliDg6t36yEKJNWHhIBjHi84hl0tlaHEuTqcPk7LC2WObhvVknan1gBTQdLu5Qmf3iYfkQD%2BhLufosSEoWOF5h852pVWrGvYBbyZez6XU2sMV0x82iwdnaSQKFCf2LPyaaBn0vIKyTH5UMAwAx8widz9WaVhnP%2BUzHYGbirSyQDSrVMxwahF3e4FXVKdBim7zY1VCjcmpX%2FkjJzisWYaTYsplcJ%2FqpKfM1dunOkSMn%2B8RMU%2BQPkOd9crpzZ7MdusenAXMrz28Ssa1clJYQX%2BnE%2Bjcxx2UbqvVVwqFdYmp%2Bpzh33unwqeBN8LAFwlo7Ff3O0XS94UfbU1WlZIFh4ZAt8QllpwtCbG046tFcnClKzkH4oRHuMvsbv1vPeUTeLUuyW%2BZmj%2B9EznXElOaer%2BT7JFUevsjaxkOyHVflLiElSR01w1tQQUYCXazYzylSN6udf%2FXTOCqOXGkz4qs1z%2FBTPuE12dqlTot8XozUvz%2BhhpnLdZ2hvgPqqFtAepzOFgtZudxouH1Bcn9pCKZSWAAp9q3ioSqE%2FscU4MBRbmLrH7tN09I4zg6yORvR4F4XyPZXE16NsKhOhQQTVs0wI3W2J4cWGU1u5douqAoYaX2mxowvMGnxAY6pgGrHXK0xDTR1rkVA34mz5iZT7TmzW%2BGZQISp9uxP78fDxlJwH0RNLw8xbBqFdvI%2BdxMv3Tm9dri%2FZuhIEfO%2FPXjsbLPFpwbj36d42hWfHs%2BZBd22qDaruhzSIXN9ovJvxcYbp8NL1Nc0c2%2BSbh3%2FKoL9%2FSTElqQwPCxL%2B4luW0oqobXud2tbDQKThG%2B%2Ft3pW5MgSMJvuw7K8ig5xyuonspl7XNN4wHU&X-Amz-Signature=046e5fc47e362788f756aab7bb8f36171f3ae6ac5fa48355b75f927cbb770dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSVAWEUK%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqQjGI2dS71uTrxNKY5x8bUxFgXGXStliPyCaKgUR6xwIgH5LAl%2BgZbiq8PmzurqUBrFg3dgmrt4EZXKm6xhK%2F8gkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7jKbnICi5uzRFbBSrcAwafBS4bTKn5vVccjBA%2B2%2FEaR4RcbygFzLiLZvaaJtUyW6tczlLPUPzeL7JHJ5rWPCHg5W64WfGZS87ggg138yXlaplb6yMrA%2FTiMJPg9aSZ1aznojuoLhRRRtN12mbfjwQIaxsPPjDfzqUDTwr4QesYz1l3uc5HXEcjoBvBFWh%2BOQCqTk9zys4ero3fhntvzkme2U5CvJepg7og8s7lhYdegvLRo6WI0nGg3yd9F5oGXB6vVTnGjvf9SSC9%2BkXJ%2FCfQPhKz3ayGit5je73S%2BYb8XpwKsps1c4kMagnoP8FD9Oq%2B%2BHg2PQV7heNZFzetA3%2B8H8mnY6OtneVWNC87jKFI948V0ndkvr%2BtLHbMmjMgCrjzIQ0j%2FQYtl5HhWKT39Lgp4O2gS%2BnZpXYI83afORKxSJa5RJpbpvwkgultvWfeC%2BRYJpZ90nxdQjvELbqJz35zkwl35Igoih7KfnhBY3zPbfhfy%2BIBUr0ESxMx1pA0HWfbMYt6HXcXsudhs0q9OlN2M6Kh3Bfg8OZ5DBf6ypqfkcO2GtLCpAjmc47dknN%2B7f6cDRRXRm44TQA2WRf1as%2BS5MSAXbEL6e2ASV%2Fl%2BLoNFdSe1NdVyxktbgjIb1al0oOC6Cj7LElchOoZMJXAp8QGOqUBMPxyMHzh5z687lK7%2Fpf2Ogtn2p57281wtcqQ0F5uF8TBTvjVyFGT8FUpTsAd4dSC087fvCN8%2BWRPVs7qZt%2FrueOzlSVVMHIKhhTytg9sXfham6focicQjHdGFjJWrFxSz9sZKD9FnVNeuNSGVFhO2ibCaxnQpW6pR2v%2BaqzZqabwNSDxKEY%2BDf3G8P0A8itPROWn3W3PBgyfYgVNfzPBBnCxfwF%2F&X-Amz-Signature=6276625dcb1b71feb9e1a77b03995019658042559fe5800176a3b7d4b7d94b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZJZTMID%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzT5ZGpwILUUqdhL4x7EggsxHFwaw6wmoft4v2gf4EtAIhAOm4AyCtOCFB2Ctsn0YEm6o8g%2F6J%2Fmd2YCvqxpuNYvRGKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJL0gDRA8Per0fqQ8q3AP4VJVmJ1WWOuV6kmUTwWUSCeYMMakLxeMZnau8QOE3AkpMnSzB8ml917tKGqxqqmNKlAAD90QMHMZYum9KXbmWeDcvc7UDSKke6UULXQyHkSkSnU%2FFp2zvgVlOQpdM2nlKs%2FYXP%2Bv2XgMC84jvtJu21C9vdGVbPz7VeB6D0ivNaZQ4IT%2BjuPKL4Jxp%2FINf7GsNoeMWath8MOVPzmk4uSEhYWN3ZQO5dyCX7a0bloRk1lVNmRfG5WlPVuQuUrzbXi2D%2FUuh0XiuI7HN84teUCCFc1NqTWiu%2BNyDSYeKjY9pKaao9pPS30VBMgl9W61h5etExOfTQQW2cUkU9FOWcvLFk6IldDVSTB6mYxf9BV8ozxpccTmrVJiBqns0vOj895CSs8LjS9j3yMhckhoLOifhnIvG7XpxYPEn3X2zS9k4SqX5OPZ26FGk1WzDILXL36m9azL3RNiFJyqgoupsZRwOoCMo5fhBs4aq5LmAWn6VBS%2FoD3JIoyMM%2F3Bx1YhPllq85MfpCBijmKOol7vDXKes1uGDzvmJM49gPiMl9e3lxXlHPRgbn%2Fp55tO2RND2IZ%2FTBncEV9YKju%2BFJCPsjifoieZB%2BzsGcpgNilFzJLq4Dlbp7SoM5qCyzL1MujCwwKfEBjqkAYja2tfYSWz%2BgZLN1Z%2BgwyETM2N4%2FTHk5NOF3Vs1qJEKLekf28iI%2FVouJHv8wOCbDo1xBsrDcRXgcsIaBoBf%2BwkayTC1kI3GoO5lyFEEX8czmyRuAEFvyjVTxsV774kwOB%2ByDNZuOE18UUOA2cxiUNguhEpe6Tvr2VaQUeCZheCFlEO6lE70h%2F9OnmrkEEQL2Fs%2FFJYYHMo9DEiZmqVJh1%2FSmWR%2F&X-Amz-Signature=de89724cd37613a378d2daf0e721b45922d177f7b566450257d138dcda4babd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCHOXY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDF4tK2Y8AoGFdH8l0NEsboGcCiaaMwRcHyorAPcWrpAiA6wivR412axprl9LzTULCduXpvZkwLuAHIEf1X9EGFyyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz8x0PXOVwkGVVtbnKtwDXHmviPdFwCS384fDliDg6t36yEKJNWHhIBjHi84hl0tlaHEuTqcPk7LC2WObhvVknan1gBTQdLu5Qmf3iYfkQD%2BhLufosSEoWOF5h852pVWrGvYBbyZez6XU2sMV0x82iwdnaSQKFCf2LPyaaBn0vIKyTH5UMAwAx8widz9WaVhnP%2BUzHYGbirSyQDSrVMxwahF3e4FXVKdBim7zY1VCjcmpX%2FkjJzisWYaTYsplcJ%2FqpKfM1dunOkSMn%2B8RMU%2BQPkOd9crpzZ7MdusenAXMrz28Ssa1clJYQX%2BnE%2Bjcxx2UbqvVVwqFdYmp%2Bpzh33unwqeBN8LAFwlo7Ff3O0XS94UfbU1WlZIFh4ZAt8QllpwtCbG046tFcnClKzkH4oRHuMvsbv1vPeUTeLUuyW%2BZmj%2B9EznXElOaer%2BT7JFUevsjaxkOyHVflLiElSR01w1tQQUYCXazYzylSN6udf%2FXTOCqOXGkz4qs1z%2FBTPuE12dqlTot8XozUvz%2BhhpnLdZ2hvgPqqFtAepzOFgtZudxouH1Bcn9pCKZSWAAp9q3ioSqE%2FscU4MBRbmLrH7tN09I4zg6yORvR4F4XyPZXE16NsKhOhQQTVs0wI3W2J4cWGU1u5douqAoYaX2mxowvMGnxAY6pgGrHXK0xDTR1rkVA34mz5iZT7TmzW%2BGZQISp9uxP78fDxlJwH0RNLw8xbBqFdvI%2BdxMv3Tm9dri%2FZuhIEfO%2FPXjsbLPFpwbj36d42hWfHs%2BZBd22qDaruhzSIXN9ovJvxcYbp8NL1Nc0c2%2BSbh3%2FKoL9%2FSTElqQwPCxL%2B4luW0oqobXud2tbDQKThG%2B%2Ft3pW5MgSMJvuw7K8ig5xyuonspl7XNN4wHU&X-Amz-Signature=c1e8e6c69b10b8e9ddd59b170714bb83b10df14056a87ffd6623700ea38677b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
