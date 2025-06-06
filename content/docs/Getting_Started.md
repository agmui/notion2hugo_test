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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZZHXUZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDFQ6Dj3yh7ClKVOfOhXoGY0wLU2iGpsWBKL8LVGANEwQIhAIiFwUX812vFp43MkGhTkTHRxgEdjElfQd%2BKLJ%2FDunhLKv8DCE8QABoMNjM3NDIzMTgzODA1IgwrNHn4vvIiyTpq%2FgIq3ANP1hL%2B%2BBdsIAwEui7TbrojPbIsxPbyb%2BCyu9Phy3iF71TxfLsUStI9xbqcfcfqtb9IP5fkpcylyfUdvyPtX9oL2bcriXyFwX7xft4qG07oY0%2FMcfTPoJ9irtNByozABJfOe4d3z2VxrouhLiY05R83fqIefd1oCL4XZHT6VmSagvgY0Ep2JYwEeipuo7MRrOEB3AqDZnpG4FHBjiE3lLfLZVQygbOvRH5bEOpnWshkRCKt1OsSTVhNB0ZTsKrncSwBYxsTnjGMFFQdKhOSObB4EmgwBD%2Fq77ofpsWRZ1p6j7jckifdFeeZ32Z2LHAiVncJzjoBC5O%2F%2BMtzSaPJqrAt%2B6L5OzWNUkIpQ8ttq1y3jqIrkVq%2Bd4nz95Swp1uNG4%2FLVX7lXbctQUcC%2BDgYRITIJMgnxKOfVd6Mlme65xBPnbrWNCCEH1MYOkoqzizUh89g%2Bc4AMjL8Wq1AoT6ipWiuBqpGmLtG31s1AbPIKQ%2B5qvAnRDGFEouVECKTvWjdCDIn7dtTA1eq9bXfGR5%2BHVa1tRN358rG2uQOmssSszPUO48lxUBvkL%2B3tT9QrYPt2G%2FVip0x1ZUwgScIKSg5FWdehIu9hbjxgHkvQUUGM2pUNr3LsBoJw5Z7wiM6MDCRs4jCBjqkAV%2FqkcG3ho0ypSaRhOFpYWqhXDzMqfm8LVAlXAL0Y5o%2Bil3DECQkCxLG10i9UjbOI%2BVmmDXsWTW2pX4F7IdSEFkGQwFh%2FVRxTLQJnab%2BHYecIcek%2BTlHWxtZ68SbWZbVnyRi6VWShaKbepdMIJBinIrEXy6r0aGk%2FJEC%2F7aYikfpf6u8mMh4Qoh%2FZuToTSicboMos8VFBZtWH5SyliJ3jsNp5POE&X-Amz-Signature=30bec0a8631eaa178fef257735f5b6ad81f7089ed329a079b4e99c069039dde0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZZHXUZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDFQ6Dj3yh7ClKVOfOhXoGY0wLU2iGpsWBKL8LVGANEwQIhAIiFwUX812vFp43MkGhTkTHRxgEdjElfQd%2BKLJ%2FDunhLKv8DCE8QABoMNjM3NDIzMTgzODA1IgwrNHn4vvIiyTpq%2FgIq3ANP1hL%2B%2BBdsIAwEui7TbrojPbIsxPbyb%2BCyu9Phy3iF71TxfLsUStI9xbqcfcfqtb9IP5fkpcylyfUdvyPtX9oL2bcriXyFwX7xft4qG07oY0%2FMcfTPoJ9irtNByozABJfOe4d3z2VxrouhLiY05R83fqIefd1oCL4XZHT6VmSagvgY0Ep2JYwEeipuo7MRrOEB3AqDZnpG4FHBjiE3lLfLZVQygbOvRH5bEOpnWshkRCKt1OsSTVhNB0ZTsKrncSwBYxsTnjGMFFQdKhOSObB4EmgwBD%2Fq77ofpsWRZ1p6j7jckifdFeeZ32Z2LHAiVncJzjoBC5O%2F%2BMtzSaPJqrAt%2B6L5OzWNUkIpQ8ttq1y3jqIrkVq%2Bd4nz95Swp1uNG4%2FLVX7lXbctQUcC%2BDgYRITIJMgnxKOfVd6Mlme65xBPnbrWNCCEH1MYOkoqzizUh89g%2Bc4AMjL8Wq1AoT6ipWiuBqpGmLtG31s1AbPIKQ%2B5qvAnRDGFEouVECKTvWjdCDIn7dtTA1eq9bXfGR5%2BHVa1tRN358rG2uQOmssSszPUO48lxUBvkL%2B3tT9QrYPt2G%2FVip0x1ZUwgScIKSg5FWdehIu9hbjxgHkvQUUGM2pUNr3LsBoJw5Z7wiM6MDCRs4jCBjqkAV%2FqkcG3ho0ypSaRhOFpYWqhXDzMqfm8LVAlXAL0Y5o%2Bil3DECQkCxLG10i9UjbOI%2BVmmDXsWTW2pX4F7IdSEFkGQwFh%2FVRxTLQJnab%2BHYecIcek%2BTlHWxtZ68SbWZbVnyRi6VWShaKbepdMIJBinIrEXy6r0aGk%2FJEC%2F7aYikfpf6u8mMh4Qoh%2FZuToTSicboMos8VFBZtWH5SyliJ3jsNp5POE&X-Amz-Signature=8419a1e96c3b2594a0704fa1961b67d15780269b8fd9bb2b956336fe7acf36a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZZHXUZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDFQ6Dj3yh7ClKVOfOhXoGY0wLU2iGpsWBKL8LVGANEwQIhAIiFwUX812vFp43MkGhTkTHRxgEdjElfQd%2BKLJ%2FDunhLKv8DCE8QABoMNjM3NDIzMTgzODA1IgwrNHn4vvIiyTpq%2FgIq3ANP1hL%2B%2BBdsIAwEui7TbrojPbIsxPbyb%2BCyu9Phy3iF71TxfLsUStI9xbqcfcfqtb9IP5fkpcylyfUdvyPtX9oL2bcriXyFwX7xft4qG07oY0%2FMcfTPoJ9irtNByozABJfOe4d3z2VxrouhLiY05R83fqIefd1oCL4XZHT6VmSagvgY0Ep2JYwEeipuo7MRrOEB3AqDZnpG4FHBjiE3lLfLZVQygbOvRH5bEOpnWshkRCKt1OsSTVhNB0ZTsKrncSwBYxsTnjGMFFQdKhOSObB4EmgwBD%2Fq77ofpsWRZ1p6j7jckifdFeeZ32Z2LHAiVncJzjoBC5O%2F%2BMtzSaPJqrAt%2B6L5OzWNUkIpQ8ttq1y3jqIrkVq%2Bd4nz95Swp1uNG4%2FLVX7lXbctQUcC%2BDgYRITIJMgnxKOfVd6Mlme65xBPnbrWNCCEH1MYOkoqzizUh89g%2Bc4AMjL8Wq1AoT6ipWiuBqpGmLtG31s1AbPIKQ%2B5qvAnRDGFEouVECKTvWjdCDIn7dtTA1eq9bXfGR5%2BHVa1tRN358rG2uQOmssSszPUO48lxUBvkL%2B3tT9QrYPt2G%2FVip0x1ZUwgScIKSg5FWdehIu9hbjxgHkvQUUGM2pUNr3LsBoJw5Z7wiM6MDCRs4jCBjqkAV%2FqkcG3ho0ypSaRhOFpYWqhXDzMqfm8LVAlXAL0Y5o%2Bil3DECQkCxLG10i9UjbOI%2BVmmDXsWTW2pX4F7IdSEFkGQwFh%2FVRxTLQJnab%2BHYecIcek%2BTlHWxtZ68SbWZbVnyRi6VWShaKbepdMIJBinIrEXy6r0aGk%2FJEC%2F7aYikfpf6u8mMh4Qoh%2FZuToTSicboMos8VFBZtWH5SyliJ3jsNp5POE&X-Amz-Signature=8c5a94ad9f8f4068010388aa960af1982c1c98a1fb9307d4d7a51ac679523e74&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QH4WFTT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDVVMUWQoKQORV%2F0Ns5F3ZQ7HVvGYncJOYRRkMpW2C7aAiEAyuDallMlu2sqGUdgDRdm7NA2nieVjzI%2BzO3WmVMKS44q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDPVuJcS6s5uBrXzpMCrcA4cT1vFIjGclYfNXSGs7MmxDgw1X3oXpRYSx5L%2BFIz55CXQA1874qQ98F69d0d7j8KISXNFO0P%2Fw%2B17wsYqCFse0L2zZHmPQw%2Bn5NC9gIGE72C5dIz9rh%2F7l56ltAsbwq6sJT8HMq8JtSaXUDV0Q8Nc7TYX4k6MK8H5MhJupEjqfys7vXsVnicv3y%2FWtyCA7vB8gnqAvNNQL%2Fp30Eg4Y2mb1%2F8d067Yv8IcnZgbthW%2FNVWq61JuWhXReq7otgJQ8okDLezZTKyQKW2ubyrHZIjXfYdTjcnavf9lPrR%2B6k0fyBrdmmk7T3R03VHPfbzqrfN3MXDtGK2esgyQaUNRAQlrbwSGQAh47sUt5cAsRl4cpks2L5c2AHgQS0lMoh3WtNoC2a71C%2FOfiIzY8bhOsXgNG88oQrwZ0nOEr9XhT8rCfW3diAoCrwdzRtCu5HfLk1kJ95P56qH5pFM1ZkaJYdTj7qKMoDNthv9X1%2Fn6pngKRtmeEOTjFwLPJOs9NTYcD1jRPuLfF9E988gs%2BexQORgrElj4AqdORmVnbiN4%2BiRq0M4r4JmnKTnWq8pds8XFXy58NGDaB%2B1ZvVY1o%2B9xXJWQDQ48gcM8J2ucOQ0GkdedPUDXtoqkB17zEysFMMOj4iMIGOqUBXsVJ184VXIRFHb5ff0BzOrcTEQgHkJD58RC5nupbUAYMLg5vrwtC7eJmwbg1zlJGs8OvU5GOND%2BmU6ixlUo1hH5H4VZuhujTyKHYECmWgnZ%2FhNWVuYKLiNZtE7HyexEB8c12DUOJqbZcunBFmmdJ0nQ9%2F8LWKlbGWE%2BLBK%2FaFaHwscG0oxq5WfJ1o6W6IPfsXuwc4RKREsna34JamTlRXLCSyiJN&X-Amz-Signature=617393213efdfb1ec1865dd334e36309ad7af5bdd9273cd695147639684836a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYKVZJPU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIB5%2FbFQJd6X%2F0UcDAI28oYLAwaISzzRaNALnp3AldQgBAiEAwGRIrKS1WyJsHprkh1AnL1zJuNKJr%2FlcHrcFHyvXHtsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDA8jd3%2FrGaqN9yTFCircA6YhElTrxGM6tJmDuHplz34IYG%2B9Gn14IS8oyj2Ng116x0farboplWMKTRFyM4ZHYgpPx%2Bw2K2bHpbVITm6vk5E7CsI7SysSXNyDk3KQXmWwRXSP4p3sBViVdAu3chqalbZcDxIicUGWg4FGNuAbSggc3K2GIrB9zXWXF%2FC6BjtgQ8LMXqCct3r2maWRIziE4hxU%2F%2FPWOKAohBfm5f69ycHnSPUeetTRSqLEyzB0Xyg0L8TrNzKFLZ8CV1PZXIt9nU8x1DSkOyJDbb8t%2BAnoCVfLC415ykarYev9xpGeP76UznIwIDmIOTv1KfqnISZQNKr7BjwRk6HHqazPpEk282%2B%2B8bL5wm008izExORGpE4PjW09rPSSGhNlgbHHSSTa%2FSm9yO9H5tXQU1hKwZ2914RwaaT5A4bBNFrJMQKes6fA7mEM%2FRjiY0TEoSSyNli9e%2FV2YAxtEu6CIRdgROE1xTaqni41sOUhYIHLeC3Z%2B1wquFzO9ORXqeCzLa%2F5TEfj85L38HMMQRPKs2A1Iubs2nihJl6IJfrJUc2tCmux6YjfXFwf6V8jGUYqQSt721GVOOssTwdH4xq8H2z5VYSdBBWVb%2F65VoWRUZDfrNbAl5WjpCGsEs%2BvDrhZnlN6MOilicIGOqUBRK4rufsJad8m6RWILgXbbpJnbQ5DKE30ypyaS8Eqi3BG75u9nKKBVpmcAGgyxHA6MUZIYhr2%2BFJX50%2F7fVdm5bi69ZjZiNRySXrw77fUcbZFVuscS1NY5JL1EYgkNPLPP3MKL4zkud6mnrLhGSrTTlOLq1do2BsM8bWfRLjIt8SlCHhzreVek11cmCz5d1QAEKjEGpEgmhIuf4rAZjdfSGcy778r&X-Amz-Signature=7f607e325d0eff6e5a918be533691145c0db57f336175eeb7d437025a21d9f41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UZZHXUZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDFQ6Dj3yh7ClKVOfOhXoGY0wLU2iGpsWBKL8LVGANEwQIhAIiFwUX812vFp43MkGhTkTHRxgEdjElfQd%2BKLJ%2FDunhLKv8DCE8QABoMNjM3NDIzMTgzODA1IgwrNHn4vvIiyTpq%2FgIq3ANP1hL%2B%2BBdsIAwEui7TbrojPbIsxPbyb%2BCyu9Phy3iF71TxfLsUStI9xbqcfcfqtb9IP5fkpcylyfUdvyPtX9oL2bcriXyFwX7xft4qG07oY0%2FMcfTPoJ9irtNByozABJfOe4d3z2VxrouhLiY05R83fqIefd1oCL4XZHT6VmSagvgY0Ep2JYwEeipuo7MRrOEB3AqDZnpG4FHBjiE3lLfLZVQygbOvRH5bEOpnWshkRCKt1OsSTVhNB0ZTsKrncSwBYxsTnjGMFFQdKhOSObB4EmgwBD%2Fq77ofpsWRZ1p6j7jckifdFeeZ32Z2LHAiVncJzjoBC5O%2F%2BMtzSaPJqrAt%2B6L5OzWNUkIpQ8ttq1y3jqIrkVq%2Bd4nz95Swp1uNG4%2FLVX7lXbctQUcC%2BDgYRITIJMgnxKOfVd6Mlme65xBPnbrWNCCEH1MYOkoqzizUh89g%2Bc4AMjL8Wq1AoT6ipWiuBqpGmLtG31s1AbPIKQ%2B5qvAnRDGFEouVECKTvWjdCDIn7dtTA1eq9bXfGR5%2BHVa1tRN358rG2uQOmssSszPUO48lxUBvkL%2B3tT9QrYPt2G%2FVip0x1ZUwgScIKSg5FWdehIu9hbjxgHkvQUUGM2pUNr3LsBoJw5Z7wiM6MDCRs4jCBjqkAV%2FqkcG3ho0ypSaRhOFpYWqhXDzMqfm8LVAlXAL0Y5o%2Bil3DECQkCxLG10i9UjbOI%2BVmmDXsWTW2pX4F7IdSEFkGQwFh%2FVRxTLQJnab%2BHYecIcek%2BTlHWxtZ68SbWZbVnyRi6VWShaKbepdMIJBinIrEXy6r0aGk%2FJEC%2F7aYikfpf6u8mMh4Qoh%2FZuToTSicboMos8VFBZtWH5SyliJ3jsNp5POE&X-Amz-Signature=2ec52e6a30adb02c85bc0b0d43be10e3933296cc29a6a6761e9e5f47001c7c82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
