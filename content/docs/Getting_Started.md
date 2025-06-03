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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKOTY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFQWA0dHvhL%2BwJDL7ZxbVlkQKPe2e0NE19xdjmIcgnVKAiEA%2BkhQ2%2Bq08T4GoDhPM%2F%2FkHxQ64VllmRYVVdmXpAYSSKoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDENvE8Cbqz7%2BjZtRfyrcA7eR2dyntVNDZgs72zeDgkMKQrR%2Biaypk3jWbCaH0YhY3V6LMPYnuHahSaWlsNntTiFNcaVcEXbv6YTJqpU%2F8cq8KZauCUpwjTTgsrjsDI1rYOI1U%2BUjB88dT1lMORnCUl6z8xTi9hZWMf85y2Bgo5IOp0%2B0p%2Fsc0jdneP1kcw6w%2Fdo%2FPakj9fHi0EKLwq%2F26n2BoHExnA9GsAR1BlVSe0RbUI7QX7tTr%2F1P9QqogYLGg73if2ijuNIxhpvbevrrNUy6GVPuknkXLYa5xMd4swHdA2pN9UQBI3jgCkKICRTY7ooFqQXK8lo4n7YelImi6gVMjT4dyANYBpjKUWKrd26PsLW2gtrnGZWIux7yJoHa6lgvvO43e%2F5uk0z9GQk47wgqlaBOZDbJTpsED7GHE59dXpljgxn9QpdYXgbuq8IAutzELelxFIIf7cKailovi%2BLTcQpFkzDFa%2Bu5u%2Fl7K00ai%2FB%2FGZL7PJYRyXWQTzYmfJmIGa96QIQZ1PUuT43%2BiImY7JaM5aO70DpeToPz7pZ06zRyGeECum8Ko2xM9rKtQPHlj7QNpsIaEGXa1N3ZiA57neDXpWhPLHl0%2FTdhHNDdottYax5s8U9wI0Gz5yPo02QHTAGMPGEPWWh1MKzm%2B8EGOqUBfM%2BFY8zkMm%2FA%2FB4ROB0dBEoo1SqFKlyTl3FcSJZR4%2FLXoF7ft%2BwXGj4dTCPrlOOpByf6bYdOvnXAhHDO1xahizAjfAYyQ4gkCU%2F5iYGCspo4aSYreco9U1O5E5HD7UeWFYpTMYoT%2FkCkTQQPH6Equ5hs2PpDIa6gx4hwRThVAz%2Fty%2FlaKrXk1RtZ8gG8xeR2M%2F17scHOXE82%2BSIOPiQ3jWpWxKDD&X-Amz-Signature=0103155cbd7f6cf9b1745bb977eb8b319042d11453c459b5522a0c45ffebe2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKOTY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFQWA0dHvhL%2BwJDL7ZxbVlkQKPe2e0NE19xdjmIcgnVKAiEA%2BkhQ2%2Bq08T4GoDhPM%2F%2FkHxQ64VllmRYVVdmXpAYSSKoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDENvE8Cbqz7%2BjZtRfyrcA7eR2dyntVNDZgs72zeDgkMKQrR%2Biaypk3jWbCaH0YhY3V6LMPYnuHahSaWlsNntTiFNcaVcEXbv6YTJqpU%2F8cq8KZauCUpwjTTgsrjsDI1rYOI1U%2BUjB88dT1lMORnCUl6z8xTi9hZWMf85y2Bgo5IOp0%2B0p%2Fsc0jdneP1kcw6w%2Fdo%2FPakj9fHi0EKLwq%2F26n2BoHExnA9GsAR1BlVSe0RbUI7QX7tTr%2F1P9QqogYLGg73if2ijuNIxhpvbevrrNUy6GVPuknkXLYa5xMd4swHdA2pN9UQBI3jgCkKICRTY7ooFqQXK8lo4n7YelImi6gVMjT4dyANYBpjKUWKrd26PsLW2gtrnGZWIux7yJoHa6lgvvO43e%2F5uk0z9GQk47wgqlaBOZDbJTpsED7GHE59dXpljgxn9QpdYXgbuq8IAutzELelxFIIf7cKailovi%2BLTcQpFkzDFa%2Bu5u%2Fl7K00ai%2FB%2FGZL7PJYRyXWQTzYmfJmIGa96QIQZ1PUuT43%2BiImY7JaM5aO70DpeToPz7pZ06zRyGeECum8Ko2xM9rKtQPHlj7QNpsIaEGXa1N3ZiA57neDXpWhPLHl0%2FTdhHNDdottYax5s8U9wI0Gz5yPo02QHTAGMPGEPWWh1MKzm%2B8EGOqUBfM%2BFY8zkMm%2FA%2FB4ROB0dBEoo1SqFKlyTl3FcSJZR4%2FLXoF7ft%2BwXGj4dTCPrlOOpByf6bYdOvnXAhHDO1xahizAjfAYyQ4gkCU%2F5iYGCspo4aSYreco9U1O5E5HD7UeWFYpTMYoT%2FkCkTQQPH6Equ5hs2PpDIa6gx4hwRThVAz%2Fty%2FlaKrXk1RtZ8gG8xeR2M%2F17scHOXE82%2BSIOPiQ3jWpWxKDD&X-Amz-Signature=b56f7e8280053644375ed298950251deb8243409292c3e511fda4d1a59d83f96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKOTY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFQWA0dHvhL%2BwJDL7ZxbVlkQKPe2e0NE19xdjmIcgnVKAiEA%2BkhQ2%2Bq08T4GoDhPM%2F%2FkHxQ64VllmRYVVdmXpAYSSKoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDENvE8Cbqz7%2BjZtRfyrcA7eR2dyntVNDZgs72zeDgkMKQrR%2Biaypk3jWbCaH0YhY3V6LMPYnuHahSaWlsNntTiFNcaVcEXbv6YTJqpU%2F8cq8KZauCUpwjTTgsrjsDI1rYOI1U%2BUjB88dT1lMORnCUl6z8xTi9hZWMf85y2Bgo5IOp0%2B0p%2Fsc0jdneP1kcw6w%2Fdo%2FPakj9fHi0EKLwq%2F26n2BoHExnA9GsAR1BlVSe0RbUI7QX7tTr%2F1P9QqogYLGg73if2ijuNIxhpvbevrrNUy6GVPuknkXLYa5xMd4swHdA2pN9UQBI3jgCkKICRTY7ooFqQXK8lo4n7YelImi6gVMjT4dyANYBpjKUWKrd26PsLW2gtrnGZWIux7yJoHa6lgvvO43e%2F5uk0z9GQk47wgqlaBOZDbJTpsED7GHE59dXpljgxn9QpdYXgbuq8IAutzELelxFIIf7cKailovi%2BLTcQpFkzDFa%2Bu5u%2Fl7K00ai%2FB%2FGZL7PJYRyXWQTzYmfJmIGa96QIQZ1PUuT43%2BiImY7JaM5aO70DpeToPz7pZ06zRyGeECum8Ko2xM9rKtQPHlj7QNpsIaEGXa1N3ZiA57neDXpWhPLHl0%2FTdhHNDdottYax5s8U9wI0Gz5yPo02QHTAGMPGEPWWh1MKzm%2B8EGOqUBfM%2BFY8zkMm%2FA%2FB4ROB0dBEoo1SqFKlyTl3FcSJZR4%2FLXoF7ft%2BwXGj4dTCPrlOOpByf6bYdOvnXAhHDO1xahizAjfAYyQ4gkCU%2F5iYGCspo4aSYreco9U1O5E5HD7UeWFYpTMYoT%2FkCkTQQPH6Equ5hs2PpDIa6gx4hwRThVAz%2Fty%2FlaKrXk1RtZ8gG8xeR2M%2F17scHOXE82%2BSIOPiQ3jWpWxKDD&X-Amz-Signature=f9fda476af82961c80fe432b7d29e1e435c581aaf2e75a245be68543669347b7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTY34A6M%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCUzmKt1vxz%2BID6wL0NDRK4GG%2Fq%2Baj2P5l7KmEuW5%2Fv3wIhAIxyJAW02kN8skgGLcF2c%2FQ%2FVwvna1q%2BGSaPD3yVCogXKv8DCBYQABoMNjM3NDIzMTgzODA1IgwovMsxdFRdNt%2BZxSYq3APo65GFUV8WAtObbH4nECLHI4tAYao33zpSNQpvLmb%2FK6MzGCIRLrUTPXmIGah%2FWvezdcA82gTywPrPrInRYSBuVr0tSa8Jrmc4ZifIeUgYo36Yq7InmYeqRSB%2BvrWRLi4o%2BUaNXpjBo2PK0DUlvWkaRXicOVtp9zWA8plSXgx5WlIM6PP2QevHI%2FVnJYCOwBozm%2FJA1dvdhSVcvHG8vPZRpZ65fKbSFm29PJnhgxVZuK3XVF0Koww9J7uZdKDUu2kNptXYv6ELst%2FELDZYJ5tlLcLKKCGAkIxRYlDCy1h2d%2FdZiyuU9YtAWROo5MMLZhhg%2BNnHhI0dkL7SHvF8M9xmMWo3PqLNSFxwah18bZVYzTH5%2Fye9pzEBK6iAaFj%2B3hHOeQ1zu9uehjd4ikWALZjm3FGyAwfhKXCb%2Bk%2BjIXNs9f31AMcrcOsSwpGNa4IbkC9lVnoL2%2BIL9SXE9lAARnpmyB0kCEzqQN0UdhE4y%2BDZcm0AN0uCRb8FBBdLIGLfaY9lrBsSupfylK7pU3q0Op3qRhA9VED7HIkGHmSXD6PfLAwvTlP6ndaMq%2F4MlscpnZcRSA6BIPm4Wv%2FqhiFAEmIf9TQx%2BU68OMcDe6QOVSwTIUIHyUUd7k52qHVhTjCp5%2FvBBjqkATCR%2FGZw097R7xIVHqV4dXlGikrQ3mhiNG%2BgiddcpueEIhUNZFRs9ABvXgoiaUttd1EvDI1UjcsNTdMjr1RRgJF9lBMmV%2FJTYNiqITiptyJXmHbGRYsOey3bk3BuWlBRn2YaBbak2RadgewTVOqNzauxn%2BagnH0j1sdtgpfU63lY%2BQJHV15nR%2B433puvdf%2FW4bVIc6cVWbr65DF%2BiTI4ksREZR1B&X-Amz-Signature=0cb52feb657d13f94642a093f5e4f47736a584a2eaeaf874dc55ee804ac98cbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2CKDABD%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDN0Cv0xk%2BQ50GH%2FvNG3SoSolOVaBdKCXLg0HxssEQkrgIhAPOW5APWvSk5bkLZQqVPTRJyowRbd75UbrtKRJW3PlPbKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMV%2F6AxGbcM9HDxtIq3ANk0W23AtisRTcADEjfo0CpPZypc4Vi1ZiRxXt4dmW7bN185JTmwHoGTX4gCmAa1jmGZzTU35zZDbj%2FavQlb8wugeWeTLS2sLdsoH5IKRUCUokGqSFPBjE2ptAtMORh8t0iOtLpSIGCwJH5OpQgBNcUOvVy4cdgkLe3g9DkzwgrcqoEduVV7433X1ZnuRipbGrPjpTFJ54NWljMFoTWavRlJdtkec7YH0ZyR%2B%2B69veIhtbRJrMhh0UfmU69FfCpKyvvhvNsJET3tVkOw8Qrsz9d563u5ybAnpxeoVnbYpnVkbQGLSJ%2BKpNdvb%2FLQX4r6XJP%2BOMoqzTQ3HxFX%2BIcoSsgPCLS0D5wVQI1I7jufGRP75Nt72gyLlUndqshAhkZ1kSPkbb%2FjaXs78uvLGE%2FQ2xfgP8Dk1TcRc1qIDrHeVahoQH9Jzqn11P7W5QyNBSQJmCN9rNk0XssPaVHnDnG26GYvWicm0jo3J8gQullDEULRTB4mTmmieRT%2BPZwWpKuSpueXEiRMGhahtrzlJk6GxXO506dSi1%2BjqwDxhTqoRqqSRQeqxfHXPeGepddDdsUkpOwX8vTY0ZiXWgOMReL60ECwceV%2BL20lAuWu0S%2BnHwumkmvsfAzRxf0xC9AuTCY7PvBBjqkAaoyTlDjWDZYiSRpqYNgHqv5Bnw%2BU5FRX3Jstz%2BiF1%2Bu6g7sQyPJrHHkqhlw7u2d453BfkvdKoOqI9ehBwvU9jBphyS2zZ9wk7p7QRoykxojTx5zK5c346o9ta7DLpXNy2ZLjwYeY8%2BWwmEuI8TwjtDy4wHEcY5KxHNVdJ9fAx4ELc%2F5a%2BMPvyt%2B2pw05eBtlhzE9KkktuNBkqpqZHzEHJg5N3jx&X-Amz-Signature=4bd0a52be39226eb48f20ee9024adea6f19f9efad67d7685bbdc830483eca56f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKMKOTY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFQWA0dHvhL%2BwJDL7ZxbVlkQKPe2e0NE19xdjmIcgnVKAiEA%2BkhQ2%2Bq08T4GoDhPM%2F%2FkHxQ64VllmRYVVdmXpAYSSKoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDENvE8Cbqz7%2BjZtRfyrcA7eR2dyntVNDZgs72zeDgkMKQrR%2Biaypk3jWbCaH0YhY3V6LMPYnuHahSaWlsNntTiFNcaVcEXbv6YTJqpU%2F8cq8KZauCUpwjTTgsrjsDI1rYOI1U%2BUjB88dT1lMORnCUl6z8xTi9hZWMf85y2Bgo5IOp0%2B0p%2Fsc0jdneP1kcw6w%2Fdo%2FPakj9fHi0EKLwq%2F26n2BoHExnA9GsAR1BlVSe0RbUI7QX7tTr%2F1P9QqogYLGg73if2ijuNIxhpvbevrrNUy6GVPuknkXLYa5xMd4swHdA2pN9UQBI3jgCkKICRTY7ooFqQXK8lo4n7YelImi6gVMjT4dyANYBpjKUWKrd26PsLW2gtrnGZWIux7yJoHa6lgvvO43e%2F5uk0z9GQk47wgqlaBOZDbJTpsED7GHE59dXpljgxn9QpdYXgbuq8IAutzELelxFIIf7cKailovi%2BLTcQpFkzDFa%2Bu5u%2Fl7K00ai%2FB%2FGZL7PJYRyXWQTzYmfJmIGa96QIQZ1PUuT43%2BiImY7JaM5aO70DpeToPz7pZ06zRyGeECum8Ko2xM9rKtQPHlj7QNpsIaEGXa1N3ZiA57neDXpWhPLHl0%2FTdhHNDdottYax5s8U9wI0Gz5yPo02QHTAGMPGEPWWh1MKzm%2B8EGOqUBfM%2BFY8zkMm%2FA%2FB4ROB0dBEoo1SqFKlyTl3FcSJZR4%2FLXoF7ft%2BwXGj4dTCPrlOOpByf6bYdOvnXAhHDO1xahizAjfAYyQ4gkCU%2F5iYGCspo4aSYreco9U1O5E5HD7UeWFYpTMYoT%2FkCkTQQPH6Equ5hs2PpDIa6gx4hwRThVAz%2Fty%2FlaKrXk1RtZ8gG8xeR2M%2F17scHOXE82%2BSIOPiQ3jWpWxKDD&X-Amz-Signature=1f2130c1fe8032d7806e688582188571c1f5e69f1cab4e1903c881ae74319177&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
