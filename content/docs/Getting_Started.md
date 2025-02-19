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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXG2B6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDa1z0ir0O5mNrMdn8VHPDlpQM2h%2BD0gFczuWWv%2BGLlDAiAXUtcAqITEi5FP7X48ZTtQkasMo6kAREx4niJV%2BwqHySqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGklMSyiqTFQXqV4KtwDiLGPmGqYrJrlH4wQggs7uxdcihcBKWSQPpa%2Bm2Uu201ZZvc%2BbNUY%2BJM%2FYyZgwbYFzieJLtQlHQfos6MPjNjQZ8vuTnByAuErlJM1nCPr%2BqFASqARRsI1ibwPdte7M9cylqdEBfApSGw4YIQ3V87NxgQIVcPlsKhtX7PvXgJd58aYHHXmVmJ3rHmVIcPhasr27FesOyntW9vXK6XZdShnjak99CMZo8JlKFYLZiXNFHqYDa1n9K8TUTpPXVD5EOt0m5fXYkEafwTwkQhNo1UTbTTvlwjmHX5VQ5JaqsnWk4eYeNzq7e8VOT78qwz0M2DooZbPuXm51IRUhbd%2BHedfyyYEmoWWDzoEYKjuHENgOx8GL%2FTmGn4Bgz%2BlS%2Fo1ZkTlGMxGuUatix6brcics8%2BzdDTpHMiQUmLI4bsgNwhkhw5J73pemsxwYvGaw5vg3%2FLf7pzg4CgHFYFeMdaL7dY1tbQOY4HMluaWEp0SjOFjTZ3710%2Br6xILeCwzKNPdnPyoxCG4hLIr1m%2BLzW33OEW61mf5HVB0BpfJjtnHwGS7lF8aDdcqJ7dnU4LyEaJsHVaMBHQ0oInbkGxfoSb4vdkjrla0zI206Nkzyj730IxzVHCMlqWXQghEk%2BzLkh4wy%2BnUvQY6pgGsocNo4dJGqSDHHsA69ZH35EnW78UVSS9EwtbXb86HVUQqIFt6h0cBxzxWc22zj3LhJj%2F0MxIu5qaNR%2FZHwFrFKtzJxazYs%2FHWk1Ou8fTn8U621hF4yCvhCLZbswdSN7Yalg%2BXU%2BZXDp%2FhUob8jSrxn%2Fndg2kxeqICVesthGw%2FR14WoknsjIESe6l8fooxZ%2F4Df3KWzPGSGQLgw8DUnLuMgRogEgCU&X-Amz-Signature=c8067e8e16b80f9be533da07bd4efc170f4c92ef06daf23e231d53c4be0b20ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXG2B6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDa1z0ir0O5mNrMdn8VHPDlpQM2h%2BD0gFczuWWv%2BGLlDAiAXUtcAqITEi5FP7X48ZTtQkasMo6kAREx4niJV%2BwqHySqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGklMSyiqTFQXqV4KtwDiLGPmGqYrJrlH4wQggs7uxdcihcBKWSQPpa%2Bm2Uu201ZZvc%2BbNUY%2BJM%2FYyZgwbYFzieJLtQlHQfos6MPjNjQZ8vuTnByAuErlJM1nCPr%2BqFASqARRsI1ibwPdte7M9cylqdEBfApSGw4YIQ3V87NxgQIVcPlsKhtX7PvXgJd58aYHHXmVmJ3rHmVIcPhasr27FesOyntW9vXK6XZdShnjak99CMZo8JlKFYLZiXNFHqYDa1n9K8TUTpPXVD5EOt0m5fXYkEafwTwkQhNo1UTbTTvlwjmHX5VQ5JaqsnWk4eYeNzq7e8VOT78qwz0M2DooZbPuXm51IRUhbd%2BHedfyyYEmoWWDzoEYKjuHENgOx8GL%2FTmGn4Bgz%2BlS%2Fo1ZkTlGMxGuUatix6brcics8%2BzdDTpHMiQUmLI4bsgNwhkhw5J73pemsxwYvGaw5vg3%2FLf7pzg4CgHFYFeMdaL7dY1tbQOY4HMluaWEp0SjOFjTZ3710%2Br6xILeCwzKNPdnPyoxCG4hLIr1m%2BLzW33OEW61mf5HVB0BpfJjtnHwGS7lF8aDdcqJ7dnU4LyEaJsHVaMBHQ0oInbkGxfoSb4vdkjrla0zI206Nkzyj730IxzVHCMlqWXQghEk%2BzLkh4wy%2BnUvQY6pgGsocNo4dJGqSDHHsA69ZH35EnW78UVSS9EwtbXb86HVUQqIFt6h0cBxzxWc22zj3LhJj%2F0MxIu5qaNR%2FZHwFrFKtzJxazYs%2FHWk1Ou8fTn8U621hF4yCvhCLZbswdSN7Yalg%2BXU%2BZXDp%2FhUob8jSrxn%2Fndg2kxeqICVesthGw%2FR14WoknsjIESe6l8fooxZ%2F4Df3KWzPGSGQLgw8DUnLuMgRogEgCU&X-Amz-Signature=0bf35fb56a6022079d125d6fe3c15e259c3184e3d87541aabe6c606b17939591&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VGUJRDM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGlQnI26KcnSNpsqIEtwGZiE68EbrRQ5CrKWhrRXqw69AiAZNqylT8aOmM%2Bds5zLtTdp75rR2pxICpR4wURf42vdMCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX1Qw6DC7m2HcokKHKtwDeQgccbtUIFTUgMZQ%2FIIPs7wtYj6ZYtnTu0kDr2sBp3yfsTET2zSvJHCJ%2B8lJhYpFAVzbwfBRohp0bWe0hFkhHJCz5cXE7gzRZvgwQzrpp5rR3VF%2BHM1duRNi8lKec9nEa4ps1rhU5Eu%2F4Xy9xr3am%2FS2q5Ga5In5dP7FiLNO26csWvaZ7sIAnW8my2IZwPY%2FFIzQLvu1rhNBpOVpp%2Bl%2FXMHm7T%2BSBa69z17jD1mndsXIreAKbQ71MLc1wrR4x77v4Ho9jcow%2FyTrNc9gpldIru8g7m2HU7QUsjWb5qYbk0OYHnQndZjsgIltewX0BbB1u47lDo4qd1wYpY89el3BTF8oRnNZXPcFHGqIPRAYRJ6kt5UtM31%2Byf3OrOfI%2F2hH4jBcQGJWC8Yfst4T3aKj9OAo0cyCN2efUZ0AFX%2BNvl68T3HoeBu1e2TlWiaC1r4qviuAl%2B8Kjh9%2FrV44VbtE2SMkPeXy6NlUUq6edTUJ9IGY2ggRBFDKRqmzyTHK5ZZV2SHfvan8Bubx%2Bvt8bA2wdLlrfPS%2BtLoTAHZwuzOa4bSsqUklkMxqUHqe7VDn1814TCiRDX7tbIeNQ%2FooMDLFsqV9P63onYnJbTHs1VDZXUvj2HDj8HV57pRWFJkwxenUvQY6pgEOhT4c%2B0g%2FF39vTK8ljv2uJnD3tXfLQ%2FzljWd8tRSuhjQSCC1kJkH%2FkCpTOn1JgJgyZmZLAq0K4qr5ev7idhSe9Nlo42%2BJQJPo%2BSRLZczRUwUMa4VJgOMKs9bktCOmxDvZkXQse6SNr4BJOjD1YQbeitMhxzNAshWZ2DP6R5dut%2Bwa%2Fzf%2FUsF9K%2F5e2UKBELOtw8jmx%2Fuj9UPUEW%2FrzOkjP4TRK%2F1C&X-Amz-Signature=10728d17023a49b1bed5cc2cbcad52ddcfdf73fbf48bec1b763653bf9741b8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GQMQ7JZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCmEdyTcHmbl3WIPi6ThTCmxJCj%2BdElxURr1pqi0mHVIQIhAJgk4drO6VysiotkHMs6hzTzZBCccEgRJ%2Bi3P%2F1nDZEvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyi1x6dCXr8czDKBEq3AOpAvs6vFSSRqnJMxCFH43ge82ZATFuWCJOOqqgorINJabK9gQqnsP%2FyPH94uuaeEZOeYMiLaVsSFFoqRi9yj5vIqGqbyfK%2B4YNjE%2BgIjatSWG0pGfYDYiKFVKJNuQNpGuNQtJ3cZDqk59kmEnGgtfZq3VR7p%2FdfuzI0%2FjlvPdek%2FlpxnBmVG6IEcGBoHhxqLdzyBwHRiH9%2BhB3l7NebyRJj0%2FsasPFmS1XKtdAZcjG11bGKU9nuh2YCfmtpCwSb7zhmqcmQYi1KD0yo7TRogPpujaYkujFXVK%2Fq7FOXKas637zKgFuFmccR48kTZ%2FhnCdGNBdfKJffS4BeFhUj4A8d8PaBGb7Jaoaw2qF5HKJu9%2BCZWOp8TVZO5CPRkiMkTSHAx21YyEvJBYe22TXUltzRrmaZ1EAoHClmH54P3Px2ErtDI%2BQ5FzeiF7ohNNrnoycGQwrvkCQ3E3q4Rt4abZHWsLx6Tsj%2FwnCicb6vQoaIgtzXM%2Fhy68FyFygb69h5UAdY5%2FwtZgNgvRq%2BlHeNLkDlqd7B48GAtQaNTWU5mlzA9fQJbh2uht4YuOEKpWMEhgCon5DTSODEeMKHRThgb1NsTp%2FXBOFpQ1jx5ml3qiYicDHnujD2ojSJYRudcTDL6NS9BjqkAUm4VhRClL%2BQC8YywWWC3eYxP9oCROwA0U2N3P9NGS4haZyuJu93PoyOV1xl9gNAUm61rnmNJ%2F%2BxqI8bL4CMlBnBudjL4aRnPZj%2BZxJZ%2BYHWZay4HbHUcfk%2FBiRw26QEKyJT7LIh9Tn3Jm212%2Btg55D%2BRdE4Cr7Zdf%2FVEPsXEDxGDUDyq9B%2F7Niu56BkNjNv7UdRFC0pD6pkIeSJLPnA2K2aXMkK&X-Amz-Signature=14c5e36958894fa5c895bd230b6a05355c70cc612e5386688ab8f7962b375e78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXG2B6D%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDa1z0ir0O5mNrMdn8VHPDlpQM2h%2BD0gFczuWWv%2BGLlDAiAXUtcAqITEi5FP7X48ZTtQkasMo6kAREx4niJV%2BwqHySqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkGklMSyiqTFQXqV4KtwDiLGPmGqYrJrlH4wQggs7uxdcihcBKWSQPpa%2Bm2Uu201ZZvc%2BbNUY%2BJM%2FYyZgwbYFzieJLtQlHQfos6MPjNjQZ8vuTnByAuErlJM1nCPr%2BqFASqARRsI1ibwPdte7M9cylqdEBfApSGw4YIQ3V87NxgQIVcPlsKhtX7PvXgJd58aYHHXmVmJ3rHmVIcPhasr27FesOyntW9vXK6XZdShnjak99CMZo8JlKFYLZiXNFHqYDa1n9K8TUTpPXVD5EOt0m5fXYkEafwTwkQhNo1UTbTTvlwjmHX5VQ5JaqsnWk4eYeNzq7e8VOT78qwz0M2DooZbPuXm51IRUhbd%2BHedfyyYEmoWWDzoEYKjuHENgOx8GL%2FTmGn4Bgz%2BlS%2Fo1ZkTlGMxGuUatix6brcics8%2BzdDTpHMiQUmLI4bsgNwhkhw5J73pemsxwYvGaw5vg3%2FLf7pzg4CgHFYFeMdaL7dY1tbQOY4HMluaWEp0SjOFjTZ3710%2Br6xILeCwzKNPdnPyoxCG4hLIr1m%2BLzW33OEW61mf5HVB0BpfJjtnHwGS7lF8aDdcqJ7dnU4LyEaJsHVaMBHQ0oInbkGxfoSb4vdkjrla0zI206Nkzyj730IxzVHCMlqWXQghEk%2BzLkh4wy%2BnUvQY6pgGsocNo4dJGqSDHHsA69ZH35EnW78UVSS9EwtbXb86HVUQqIFt6h0cBxzxWc22zj3LhJj%2F0MxIu5qaNR%2FZHwFrFKtzJxazYs%2FHWk1Ou8fTn8U621hF4yCvhCLZbswdSN7Yalg%2BXU%2BZXDp%2FhUob8jSrxn%2Fndg2kxeqICVesthGw%2FR14WoknsjIESe6l8fooxZ%2F4Df3KWzPGSGQLgw8DUnLuMgRogEgCU&X-Amz-Signature=e2443ed940bd724a091ab5f0349cc2c84084b27a83bcd1e82b645a8af782a052&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
