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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56NMIB6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDz0EKl5hRaI7iF9Pg6ec%2BGmRjIxpHIzDxqqVtZYgGEaQIgNFqYTzu88Kg5iDgAPvAiRiQg%2Bw91UWoPzPPRVHTp%2BVYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjFAaBsWjaCb0zBbircA3nyv7LgkRIwWPUIX3Vi7mMuu136R%2BmqG34sHpod2UAPuHEfSBHTWTnawkcBV16%2B4olCLWlUv75N8zDxv3NpV2ag4UtTDYpE1XeJTQ8GVcfuGQF%2BZyjyYkEg3eVdwlFDUVp9qnV9VFglQwp6JEXj9hoEGHidOz%2Bqv6EU22%2Bng6qivwDQGJ8ztJvca9hMbibY0K%2FNu2dRd%2FmE5SUOxqM1PhU1pNwPdZ4s64Jdus0FNH8wjGfA7NOqHAE7%2BxX8DT218ueKjk2RxlAAbbTj%2FHnCV%2FnOsfI0QuwstIyfko5g9g5%2FG5K8XcWrerphxj7g8LGyPDhL4g3llqmTMYLFI6fHdcU7yLSCFbsu7ppGIOomoY%2BKuBvuISywPFuj6mlFCIZ3u5qxoMzyUgu9CzaatmeRfHCV%2FAZzc2OmnjtOhM9qw97qhhaQG182oQEnSlXT52l8pofiP61xR9qC73yCDuXvc%2FnX9gNIAz9bhgtYanNEZQVJB6wJtJwc7RsnphzxPZz6336xjJzf8rQI%2F6UDtuffZKiFWp8CxbykyzWZKBIY%2BpJ%2FmUMic627%2Bm%2FqxnSLDC%2FQpUts01iaaP62vdgvfhZBpHjJ95qwCDAUzVTpV2CoP6GXn%2Bx%2FjRVY39D2XJTzMOa75rwGOqUBysoJQB%2FJ%2BvKbv86QzU77Yqtwo86pln73CyAT3wGUJO7bs%2BWu%2BryqReod1qnGzZUk19zDwVaY3S3HwXrQGuIUNFlv6CeNWTWCR2qN8UQmXIyKIy4u68KSQ83dh37ztKJxZYzroGfinMUgxJoPUs4bCFAv8R0k6ynUcLwwvXcuHXFw5qWrMsG7mEtyKwKe23lW3fnbYkaW0rOhoQZYs4DWe10VaDSn&X-Amz-Signature=5a0932fe13342762f0ef4d800bbaa9359924251ea48be27aacf3fcd1f4f0bf2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56NMIB6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDz0EKl5hRaI7iF9Pg6ec%2BGmRjIxpHIzDxqqVtZYgGEaQIgNFqYTzu88Kg5iDgAPvAiRiQg%2Bw91UWoPzPPRVHTp%2BVYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjFAaBsWjaCb0zBbircA3nyv7LgkRIwWPUIX3Vi7mMuu136R%2BmqG34sHpod2UAPuHEfSBHTWTnawkcBV16%2B4olCLWlUv75N8zDxv3NpV2ag4UtTDYpE1XeJTQ8GVcfuGQF%2BZyjyYkEg3eVdwlFDUVp9qnV9VFglQwp6JEXj9hoEGHidOz%2Bqv6EU22%2Bng6qivwDQGJ8ztJvca9hMbibY0K%2FNu2dRd%2FmE5SUOxqM1PhU1pNwPdZ4s64Jdus0FNH8wjGfA7NOqHAE7%2BxX8DT218ueKjk2RxlAAbbTj%2FHnCV%2FnOsfI0QuwstIyfko5g9g5%2FG5K8XcWrerphxj7g8LGyPDhL4g3llqmTMYLFI6fHdcU7yLSCFbsu7ppGIOomoY%2BKuBvuISywPFuj6mlFCIZ3u5qxoMzyUgu9CzaatmeRfHCV%2FAZzc2OmnjtOhM9qw97qhhaQG182oQEnSlXT52l8pofiP61xR9qC73yCDuXvc%2FnX9gNIAz9bhgtYanNEZQVJB6wJtJwc7RsnphzxPZz6336xjJzf8rQI%2F6UDtuffZKiFWp8CxbykyzWZKBIY%2BpJ%2FmUMic627%2Bm%2FqxnSLDC%2FQpUts01iaaP62vdgvfhZBpHjJ95qwCDAUzVTpV2CoP6GXn%2Bx%2FjRVY39D2XJTzMOa75rwGOqUBysoJQB%2FJ%2BvKbv86QzU77Yqtwo86pln73CyAT3wGUJO7bs%2BWu%2BryqReod1qnGzZUk19zDwVaY3S3HwXrQGuIUNFlv6CeNWTWCR2qN8UQmXIyKIy4u68KSQ83dh37ztKJxZYzroGfinMUgxJoPUs4bCFAv8R0k6ynUcLwwvXcuHXFw5qWrMsG7mEtyKwKe23lW3fnbYkaW0rOhoQZYs4DWe10VaDSn&X-Amz-Signature=8763b1e0d40e3153bd02e618875702bd7a5d5111b885b4463d3d140ff3b1126e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHX7VQM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCSUA5J17lhbMjTUhmn9MOWT20ZugbG34poi4QoIQxWRwIgSN1aYbevOviPyOGq6ucgi9VM3ncWS3QBkuB0bgrldCMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIjejlNtxxMhZFeTSrcA5e75FXyJ5bKcf7G81wUQHv%2BGdPQwck05a81%2BgOHFTFHymskwQZiLuSXDIXkc4BjD%2F5xXzgFj%2BrR%2FGybRJrGKt70OLYE7%2BEku0zoaLmboBN3Wc3qrfkHBeUCU8wceBi1JaFi%2Bx4lttIzZGCp%2FLuaIwdyKWq6nLJ04%2Bk%2FZCHUdepBtPrO3lWe5Fve5q5amYKLDEDQB5K4yR4iriTktU4X2Q%2BNhvvUm2v%2BdkvNDbILLwfUw1MnFL%2F19oyyztpgrd1c5lArK93VcgrEMQdNwz%2B8tVCtevFW%2B%2BW3wUSEmzewHLqC5wmNmIc2%2BaUAYNNMnhx0l6jhf1Cjjv1v8f63HP5EMnDESkyEsNU%2FTYKaiZOLC2%2BAfbCdH1yTqgeT0geWK29Zx%2FTvOs1%2Byw9MOi1G%2B9P212fouSs1PV3sY%2F6RrNvkyuZrFN1Jik%2Bz%2BFUtb%2FQhOpJwsp%2B3BxBHRRKmHS46ZISZz5zBsIHkJWKgQ5es7nfFChq%2BwJrIOBhThnjz8oPpd%2BtSGpOBzaFBrYhPtSbP%2BDO9xu%2BcYHrXpHwQ%2FjfONGoGXZLymHZw8Cp0j8JEAA4s0KDtGOZzxVOw818AmltCSnf5lj56r9E%2BjcfcW5Ar5LH603nWW3bP%2BBzwcNWWl6A8MMS85rwGOqUBBNlyApXa0zBPw1iJRoX%2FBHaNPLXFymDkc2BooGz1FGrm%2FyKr7LLjyv7AGYQOhtA8322ZCpBvAjnIHkoWuyZz1CMbvgl%2FY52OCOX%2BQP6TByH67cJDdtjnS6J3wKSGWJKW4dXyDB0IwvsYpIRAJLUPmniveggRJ6QRpEpisIzhUBD%2FVO98xNV8WfSgiEvEXv6AgAWxde6GW4tUuHAuqRU%2BJZqhHGOb&X-Amz-Signature=95e702265671410993dd43636f207c4ad15d4e9c5df98434b794b77e63902b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JDJ3X6R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCID3WoSW8aDnWdoXX30uiFJNwH5y0dhtEP5T8BcZQ9mJQAiBB09IhjD%2Fycnz4Bwkd2TT5wUoDPzeEcIMpATO6BLr0fiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtPY92PDZi7%2FGlsvBKtwDeV2UqPa6%2B1MryOwmKrw0ogNKFNYzIesVqvpZ0TpRduJXDgx0zzapff63AZvFlVVkvPaxC21UTIame%2BtCslcgoqX5QZdVLgQgQ3xLWpAUge2oG3TO%2B900JESe28zq1i31OZ7it7Z5fy4I%2Bq3YW4bcrEnD1RcwnRnDO9IxbDyaUW6Gm18hIt3Ps1z9%2BAG4CaohV0HA15V3BOyiOjOQ9zrwJ6vL7kW58MuM5tV0Lci%2BcpbRwi7Rx9PPTNYkp77dLFC8pH3iYgyOhAXjH0gfvCI14L9St%2FZnWbOhCbev1ulDdHG0aT6r%2BZ6k6yjtnKFCtabweCy%2By7X7qsi4VD%2F90MpFyG7KpqFD9W1Bl2TtwHUyS3QD833%2FKTKfEM5vxItMVO0RgOa20XY8rXBmETzqcTyW7q2%2Be%2F9Ju05mkuJ16w8IX9VkXZx3pkAvqufNluZHUqWJlOTqGR000mL407c5%2BYvecoC27IGrtWja5iQBHJCR8JESq3p%2FJsXEjj9xf486iPy8bewAA%2FubQoLT1CfWuHU5vyvGBxB14MSUnquKtbScmwNbm9va0YsggPBV5YL6FgfL%2FBC4T2Vv2CuIrmj6c6NWon1qvKl7xbXduZ8KsIgOOgbDOMlQ9lNKOgu1DU8w%2BrvmvAY6pgH58eMxQ0XqCjF3uFuv6TnK0rR26oDYuu%2BPISLIV4wfWSu4w0oXXbXvN2BDW7IgCnSWINf7ngpDEpvObd5SYvNsZmvguKQc%2FA7ytLT6b0ZguK1pin53acenEX6arH0ItyuNwqYpGQYRL8sfZlDho5JDtsnyk2vWlViPNkq9iA6BdOWKc20AVchcVO5gSoeqKHV%2BgJ6lXtM%2BunIVk0KVK8pO7vN2hBSF&X-Amz-Signature=09f45f676bd221ac887611297fc6739c4622266ac760a55c3936fdef843a13fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56NMIB6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDz0EKl5hRaI7iF9Pg6ec%2BGmRjIxpHIzDxqqVtZYgGEaQIgNFqYTzu88Kg5iDgAPvAiRiQg%2Bw91UWoPzPPRVHTp%2BVYqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKjFAaBsWjaCb0zBbircA3nyv7LgkRIwWPUIX3Vi7mMuu136R%2BmqG34sHpod2UAPuHEfSBHTWTnawkcBV16%2B4olCLWlUv75N8zDxv3NpV2ag4UtTDYpE1XeJTQ8GVcfuGQF%2BZyjyYkEg3eVdwlFDUVp9qnV9VFglQwp6JEXj9hoEGHidOz%2Bqv6EU22%2Bng6qivwDQGJ8ztJvca9hMbibY0K%2FNu2dRd%2FmE5SUOxqM1PhU1pNwPdZ4s64Jdus0FNH8wjGfA7NOqHAE7%2BxX8DT218ueKjk2RxlAAbbTj%2FHnCV%2FnOsfI0QuwstIyfko5g9g5%2FG5K8XcWrerphxj7g8LGyPDhL4g3llqmTMYLFI6fHdcU7yLSCFbsu7ppGIOomoY%2BKuBvuISywPFuj6mlFCIZ3u5qxoMzyUgu9CzaatmeRfHCV%2FAZzc2OmnjtOhM9qw97qhhaQG182oQEnSlXT52l8pofiP61xR9qC73yCDuXvc%2FnX9gNIAz9bhgtYanNEZQVJB6wJtJwc7RsnphzxPZz6336xjJzf8rQI%2F6UDtuffZKiFWp8CxbykyzWZKBIY%2BpJ%2FmUMic627%2Bm%2FqxnSLDC%2FQpUts01iaaP62vdgvfhZBpHjJ95qwCDAUzVTpV2CoP6GXn%2Bx%2FjRVY39D2XJTzMOa75rwGOqUBysoJQB%2FJ%2BvKbv86QzU77Yqtwo86pln73CyAT3wGUJO7bs%2BWu%2BryqReod1qnGzZUk19zDwVaY3S3HwXrQGuIUNFlv6CeNWTWCR2qN8UQmXIyKIy4u68KSQ83dh37ztKJxZYzroGfinMUgxJoPUs4bCFAv8R0k6ynUcLwwvXcuHXFw5qWrMsG7mEtyKwKe23lW3fnbYkaW0rOhoQZYs4DWe10VaDSn&X-Amz-Signature=13b2c83299a61acf8ed420f3955e18554beea55d6bd89de8c8bb58309d324551&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
