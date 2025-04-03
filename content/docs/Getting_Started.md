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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2FCCDT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGXTnRX1%2BBLqFxd3Lswwlt32TdvadrccxvIYRoFOAUCQIhALi%2FLCfULP8Li6%2FuchKiWFI5RiKtrk7Fpn1oHHyPrheZKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe6sh8MSy%2F6my6tegq3APyQNTUKFwTR%2FvJj5hz4qwXRN9PePJLKVBJwl7Hp5oI2eya5bMK%2FzxDPUolcVfjYGypgnXvbYhWwYXg0ZlcHQWScAJzYxl63su8mzueADZFWgmxipKvoPcFzXYXTmp3ghBKXpHgw6wNmU9LL8aYQQQpvx4dCtvn39tmoX8uUg%2FginfsJYwtm84pmuCMXbKfyOc8vDfGQbirR2qQzSkRVYYFiacFSTyl4G4OrypWeHVAveT0XuHTus6QXODVF7akerlRzIckcFAHNktKwhZf4HjIbxB%2FY3Jgr6e1KiunWMpngYoeW5UYVtNQBowMDPvDjKP9vkJ0jKKUhVO%2Bn%2B%2FXkoj84yq4Atb0n7gvo%2B1%2FTopCcmOsiVy7ilCFbp9aAkGu39GmcYbWxxyvCtVwd8uiZKrd9qgmHmtpzKmP5jFReCFvGQHU71bpKyhLEbrhGnntIiKVYJR3M2mdD9V7bmPKsCv7%2FLRkAq57KtDu0K935exbdgq9Mm8mg%2FPYM7TabnuxBxgbPtOYsaHwCPt%2BgVvWoJ%2FVWb5hEmSrBzqMxWqOcG%2Fq8DpLCEcdfC92Dr9cL46OU%2FNLQeCuYEClCT%2F14xAgBBvFklJVk%2B9Z3l%2FxFCfRBNSYIIcdTkeBr9OZeEAODTDA6Lq%2FBjqkAX7WCHgMmLq%2B3OicgxLz8D7AXw03TAMYJ8Ttg9RnsTJuGW36PyrbFvKqmEpybQwhjstPH4kDCrHjv5eE8iscB1pYMC%2FC57fioguPdbr%2B7sx32WAe46KXc8lcJMiWYdU1UIEEv2HXafHajD1%2By4%2B%2FnWm5yV4PSj%2FH%2F5ASNxmNtbMTf4N0rMtl%2BaQ4USXa%2Bn66C5W9axDOqTXiB4AqBuAXoseRfMgy&X-Amz-Signature=3589cb7c6ccc892de3ff1ea0ec60320f434904ee715af9ad4aa948b22c7fdadb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2FCCDT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGXTnRX1%2BBLqFxd3Lswwlt32TdvadrccxvIYRoFOAUCQIhALi%2FLCfULP8Li6%2FuchKiWFI5RiKtrk7Fpn1oHHyPrheZKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe6sh8MSy%2F6my6tegq3APyQNTUKFwTR%2FvJj5hz4qwXRN9PePJLKVBJwl7Hp5oI2eya5bMK%2FzxDPUolcVfjYGypgnXvbYhWwYXg0ZlcHQWScAJzYxl63su8mzueADZFWgmxipKvoPcFzXYXTmp3ghBKXpHgw6wNmU9LL8aYQQQpvx4dCtvn39tmoX8uUg%2FginfsJYwtm84pmuCMXbKfyOc8vDfGQbirR2qQzSkRVYYFiacFSTyl4G4OrypWeHVAveT0XuHTus6QXODVF7akerlRzIckcFAHNktKwhZf4HjIbxB%2FY3Jgr6e1KiunWMpngYoeW5UYVtNQBowMDPvDjKP9vkJ0jKKUhVO%2Bn%2B%2FXkoj84yq4Atb0n7gvo%2B1%2FTopCcmOsiVy7ilCFbp9aAkGu39GmcYbWxxyvCtVwd8uiZKrd9qgmHmtpzKmP5jFReCFvGQHU71bpKyhLEbrhGnntIiKVYJR3M2mdD9V7bmPKsCv7%2FLRkAq57KtDu0K935exbdgq9Mm8mg%2FPYM7TabnuxBxgbPtOYsaHwCPt%2BgVvWoJ%2FVWb5hEmSrBzqMxWqOcG%2Fq8DpLCEcdfC92Dr9cL46OU%2FNLQeCuYEClCT%2F14xAgBBvFklJVk%2B9Z3l%2FxFCfRBNSYIIcdTkeBr9OZeEAODTDA6Lq%2FBjqkAX7WCHgMmLq%2B3OicgxLz8D7AXw03TAMYJ8Ttg9RnsTJuGW36PyrbFvKqmEpybQwhjstPH4kDCrHjv5eE8iscB1pYMC%2FC57fioguPdbr%2B7sx32WAe46KXc8lcJMiWYdU1UIEEv2HXafHajD1%2By4%2B%2FnWm5yV4PSj%2FH%2F5ASNxmNtbMTf4N0rMtl%2BaQ4USXa%2Bn66C5W9axDOqTXiB4AqBuAXoseRfMgy&X-Amz-Signature=c540a4d429fe70b7055573ce053a3efb63e24be205decefd010cab657b15604b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXFLUYMF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9h%2FFaxiel12cUIIHytfcfJEDRSKKzFZmsIT3Z72FERwIgYT7NlJMLO8V%2BpIeuAq5GKbyYa3KLmz0FYKVeYC0DVRkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNh7lpJpdSu5DZSV8yrcA8Fxff6s3I1CArQkqAqYWspInRLigPC0d3DR3pSu1ZnkwBhHRyae1XPvrf04F2dyi8gZM2QRa0fRLWAK8U4%2Bjl56C00ekAJBlKAhj8F5tJS0Kl7iPmqgk1g5q2AmZpPjcfr8hP8ea%2FVxOEVX9hWkcYOuAh%2FnsyMOuFADBGaUoeiRXUVfIcLFI%2F4gmftc1WfozKJN3Rpll82YPeKrZsoLBLhs9buOTuIlLy0p1GjtLy%2FTtiAnxdkvbP1kbrlaXV8%2BnECLdDwMdy%2Blv9L4pPLp2GhY4ozl1m6YEjyBGmI5vf%2Fn7MO3ZDhQJavQRwleIka%2FJ%2FHujbzZpktoO%2FnMVkPs4uiQyKXIIq3ppRr2Xx83zDKMcCrR78mb5je4qF613jeEDyjRI50i5IufclENaD3PMeSH7gm%2FRHourxwNlBmCaLUvX7tQ1SrLC6ojqyNiYJAszZd3jZ5DNGNpjkGAlQIF93QxpsMpN2k%2FVmDpCHM0erCEi%2FVKdEPQfGf0ltJkSR26RfBOhlbI%2FqDRrX0kt3RswZUs2ctUqq19cqgRVk3wFPHfRAaeMuVBLMNv5SscRPWkphFfh3TPq5fFxjxEsDcy9J7Blj2HN8B%2B9en3T6KbO9lDRIY8PlTVzm7piRq1MI7pur8GOqUBDJSr3DItuAWrmPUiNjl3GSn5KrsGqzSZT7H8cMvvlsSEMjNyD7XGdaCPQDZ4GuoCzRBNo6FGPUymsstjBZGVMKnGufYBnu2eNDL9qnFgijzaJ77OLyVr16M86qR83CIfCCY0pgwYI%2BRNfjizNMExjs%2FzcM2li4SYJm5uLrAHRo9LWkKnAylWpIltAQ6zpTkMekKR%2FXVXfmsskN03%2FbBcS%2F8sUrSv&X-Amz-Signature=5d4d0854824aad1505227b4afc778bab17039a8f0ba4d0287b9e3a52c18e28d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXHNYYSW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUS2870ItYLp1gDgaaYZFl8xBt9mJeveQh8uCi63jevAiBfRvxGNRP9OzBS2qf5e%2FFiG42TVVeVTFCDH5Iqt5%2B%2BPCqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJMFEl3xmoKl4I481KtwDabLt%2FwvIk4YpGOjx6ssk9vjOWjxBFCSYxWLCvapwjYk%2F2pvqq5skiIRiqRoK8WYLdhl1PYHqvxdMoYQQKXzNJgJ2L2Gniw1bafLFCf4j8mnk75ito1nZYIAg4Vo2nfE489gBGQOa2zZmpw7bjkyFZ0uD8inw%2FN6gj26bVft7%2FrQDNRg2RWex%2FPFAM6gd%2FNJQJMFiOOEwTBPpRRe1F7dd1HxRgFm5VU8g56N8ceNnfeJFX%2F%2BgiCgPiaXK82oTfT4h8ikyd3rs1mOdxzXhxExLVuvyVBLqAEBAIhfGac0GQ9ajg8m7K2CkBL%2BbhCERSje%2Bep6HU7jt8Kyp8ob%2FJQSSxEhbRZ%2FHN%2FQF6Rb3tQaSc%2BYIooZjCEyv0Ke2loSEXspbCR6UaOsKQqb7kXkzPyXoNB8UJwHHvMn6T9mTpyBvo8xMEXkIsMY6nP54E8MNbnq3cMoEEhFoVoTNGMSEbiY9vHnvNCyEIH94MPEFzxfHDgjw%2FbgNcRL0KpiQZxVlYR3d2KS1p5yJE14vH%2BCmhBofDeG4xp1wdSdiqOl8r3v4DzH%2B9lgXL%2B5CAaKc2hkqV%2FT85eTEFzwaYag9NEA9twOSW6gL%2BKugtpIOzTJJb8Kse9KJ3Mv5eGPe2f8qCJEwxem6vwY6pgHUhthmNVIupIgWgC4w2ik8RVjAVbtcg4w3LbwzHcxvgP0O9cU8cCgBvGqty3ywrg901VCPO6xj0DzAQip8WG4BRmGcTj6w4JaM1rGolawHgCDOz%2FCrQn4%2Bt4ljoRMKiAlAkW4hITn3RVzb3km84%2Bqqlth9sjUVK6UB1nWxK4A7%2FPTvu%2FQUwpHU53%2B2krX6Z71qQKrRLTvntf8LR8lS7JExYvbcPLSJ&X-Amz-Signature=4357a96cfa66e7635d2ac29921e75e225999aaa287c6aacf91e4c433231646bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2FCCDT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGXTnRX1%2BBLqFxd3Lswwlt32TdvadrccxvIYRoFOAUCQIhALi%2FLCfULP8Li6%2FuchKiWFI5RiKtrk7Fpn1oHHyPrheZKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe6sh8MSy%2F6my6tegq3APyQNTUKFwTR%2FvJj5hz4qwXRN9PePJLKVBJwl7Hp5oI2eya5bMK%2FzxDPUolcVfjYGypgnXvbYhWwYXg0ZlcHQWScAJzYxl63su8mzueADZFWgmxipKvoPcFzXYXTmp3ghBKXpHgw6wNmU9LL8aYQQQpvx4dCtvn39tmoX8uUg%2FginfsJYwtm84pmuCMXbKfyOc8vDfGQbirR2qQzSkRVYYFiacFSTyl4G4OrypWeHVAveT0XuHTus6QXODVF7akerlRzIckcFAHNktKwhZf4HjIbxB%2FY3Jgr6e1KiunWMpngYoeW5UYVtNQBowMDPvDjKP9vkJ0jKKUhVO%2Bn%2B%2FXkoj84yq4Atb0n7gvo%2B1%2FTopCcmOsiVy7ilCFbp9aAkGu39GmcYbWxxyvCtVwd8uiZKrd9qgmHmtpzKmP5jFReCFvGQHU71bpKyhLEbrhGnntIiKVYJR3M2mdD9V7bmPKsCv7%2FLRkAq57KtDu0K935exbdgq9Mm8mg%2FPYM7TabnuxBxgbPtOYsaHwCPt%2BgVvWoJ%2FVWb5hEmSrBzqMxWqOcG%2Fq8DpLCEcdfC92Dr9cL46OU%2FNLQeCuYEClCT%2F14xAgBBvFklJVk%2B9Z3l%2FxFCfRBNSYIIcdTkeBr9OZeEAODTDA6Lq%2FBjqkAX7WCHgMmLq%2B3OicgxLz8D7AXw03TAMYJ8Ttg9RnsTJuGW36PyrbFvKqmEpybQwhjstPH4kDCrHjv5eE8iscB1pYMC%2FC57fioguPdbr%2B7sx32WAe46KXc8lcJMiWYdU1UIEEv2HXafHajD1%2By4%2B%2FnWm5yV4PSj%2FH%2F5ASNxmNtbMTf4N0rMtl%2BaQ4USXa%2Bn66C5W9axDOqTXiB4AqBuAXoseRfMgy&X-Amz-Signature=f98b64af6190a46249f069dd56d60181dfe6188b38cb0c318ed30e90c59e137b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
