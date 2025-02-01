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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNH2B4H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzOksXVgZLhszHZhKxIuWFuoSSh4IiZ6acpnQikZsvwIhAKUH1MWtQXwUW4KHIq5NkR5yFKBLEaABgEGN1rX5GOI%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJ6S6y2hLyj7IpIAq3AO6X8Tz%2FWeS5GkAlPVXGcxi9jUJHTCj00PnyRxhbfmObtCAqBwZ7bCqwmGvu53uL43s3kAnY0gIK68VPY2Q7kQqNWLiucWln2wJc0wiwDRMpdwbegRfS8oAKI0p8mZT7jbMBGU6S5fKmGysQD%2FG1n%2BB1Ymg0orijA7if9FQfU%2Bvl3AWkaK8xzf%2ByTCGEBqonySFjtTQD5FfOyFx7aXamdOQgoF9l3cRFs7Wus1u5dmDfxaDqgnbzkZIGzdXI2BJi2IhBJ8%2Bg25JDVWKf9puyTxIDrLhv%2FRG%2BAJPQjxg2t06HiqdKObnYiEwPpcbtjeFTyp31foaWX%2Fzp1cAMY9OYg53WlTkBjjgzPMAXdB6L2tWpzLcflMuG6no193ILJX6dwbl8%2FaA4CwSeQqDO4c1u9IeYDR5Lk%2FK%2BIEtdpCU4Cwi8%2FR0oIOAFKV34%2FIVQ6Wx272esNPz%2Bi13DNgyZq7nkM2MggYHfYtohcyC7eFGYdHLsoD1YYIEFrz4lvWGHtN9Oo5wTak1QuyYEW4jf5JVhNAa0jwrLBguoEWGn5%2Ff6Nh%2BPuIZHliUbmyEZPn9TpD1US%2FBWD5zJG7%2FMLGUa6PBDptOFJNjB3w6mMv%2Fhos90kywK58ztSXpMkyIL3zDEjCd%2Bfm8BjqkAT61hILvMVgan85XDdiz0JOBnkbPnJiXOvbJce5dhlp9GfFOSYLHkLBMH8gKwDa5yIC02tQDa1Htjcv29Lmx7ONetBzVkiIa%2FETesIAAr1eHIpPgxo6F2xZX5IIdwmu9YRWSPKTkq16JqZx6KslYUknPQV8zCvk5MLv7uaCn8Z06LIdETWYS%2BXLiMf4MYMn0bkvEbJPGVUBGtmBu0CmEg3mTQPEx&X-Amz-Signature=35ad2318b7ccc704d9931d6ac515a2cbd70c24fdde814c4bc582c73070f8dcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNH2B4H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzOksXVgZLhszHZhKxIuWFuoSSh4IiZ6acpnQikZsvwIhAKUH1MWtQXwUW4KHIq5NkR5yFKBLEaABgEGN1rX5GOI%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJ6S6y2hLyj7IpIAq3AO6X8Tz%2FWeS5GkAlPVXGcxi9jUJHTCj00PnyRxhbfmObtCAqBwZ7bCqwmGvu53uL43s3kAnY0gIK68VPY2Q7kQqNWLiucWln2wJc0wiwDRMpdwbegRfS8oAKI0p8mZT7jbMBGU6S5fKmGysQD%2FG1n%2BB1Ymg0orijA7if9FQfU%2Bvl3AWkaK8xzf%2ByTCGEBqonySFjtTQD5FfOyFx7aXamdOQgoF9l3cRFs7Wus1u5dmDfxaDqgnbzkZIGzdXI2BJi2IhBJ8%2Bg25JDVWKf9puyTxIDrLhv%2FRG%2BAJPQjxg2t06HiqdKObnYiEwPpcbtjeFTyp31foaWX%2Fzp1cAMY9OYg53WlTkBjjgzPMAXdB6L2tWpzLcflMuG6no193ILJX6dwbl8%2FaA4CwSeQqDO4c1u9IeYDR5Lk%2FK%2BIEtdpCU4Cwi8%2FR0oIOAFKV34%2FIVQ6Wx272esNPz%2Bi13DNgyZq7nkM2MggYHfYtohcyC7eFGYdHLsoD1YYIEFrz4lvWGHtN9Oo5wTak1QuyYEW4jf5JVhNAa0jwrLBguoEWGn5%2Ff6Nh%2BPuIZHliUbmyEZPn9TpD1US%2FBWD5zJG7%2FMLGUa6PBDptOFJNjB3w6mMv%2Fhos90kywK58ztSXpMkyIL3zDEjCd%2Bfm8BjqkAT61hILvMVgan85XDdiz0JOBnkbPnJiXOvbJce5dhlp9GfFOSYLHkLBMH8gKwDa5yIC02tQDa1Htjcv29Lmx7ONetBzVkiIa%2FETesIAAr1eHIpPgxo6F2xZX5IIdwmu9YRWSPKTkq16JqZx6KslYUknPQV8zCvk5MLv7uaCn8Z06LIdETWYS%2BXLiMf4MYMn0bkvEbJPGVUBGtmBu0CmEg3mTQPEx&X-Amz-Signature=4baa027f264c3f3b825d1455a5eec71781ec5e438048d4cc980913c59b456f49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWR37IP%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3upo1l636nPD0KKONFtt3VI%2BjZ8yW1gsjqUrQATE7YQIgH6Aoe28EEUgLvkJPlKvHuqUqNe7vwlGu3o33QaocNYoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5BkABhBw5v79ONfSrcA5%2FoPDFqhRl09h6begTWMKbDlQYtR5%2BnGz19Segeq4ZzQGDESFAm1S1Q6Iro2GAA0MSFBDVatWTCzJrCq9c9z%2FO0OR%2FtXVZyVHGughoy%2FB1vzsVtIoGzNTuGAF8vpZjKeUl5xd%2FKweQhmOYeh0%2FD9j0Y%2FE9sIhBUpOIFWiQZ%2FSUI2HKR%2BI%2BG6vmy8S7OlTQ7zI6xSbpVXu0oQm798bxL1g0ibwARra4Pe3zevN36qnHnNwbSjjev8xKwt8Dryc%2Fv6mvbB3FqczxwpzciUX08wuT6k1RJXcxkqHUMfOJs56RfxocgopQBmUVhw0vsYymkY6LXLWyhbH01kNnrYlZ2P1dOEK2GdXI0H%2BkEpv90i%2FhTLYoQrPTauQnwp97Tx2TcgXofQafiZdeaR3h8tslWxJnHWVlJ5fm69Nu%2BX2yY0DB3LT9JaUzlSTO3JboH0Cdw9ZxxATRGfqRvTP%2F2iUz1fSSgBvTkzWIPcD3MVrO9mz0Y7fbV%2BdmNDjKJYbmdSZ8IqlOMTwt1Ek%2FUc9A%2Bt16BjLwQW310jRVtlENBkG9DcDryHGM6CikK%2FnyrkEGFtsuUxoDoxxCGLYYa3EpvbZ4e8ygX4m25Dunp3GmqUxqpqPTQVHo%2BIfl0cn03vrYMMM%2F4%2BbwGOqUBRzCsx7GxXSgO2gY%2FPDFDcyDCSoIEoo%2B4Y%2BaQtr9%2FFt337e2TPkdIYelI4I4nn0M8KGFCy20SavNkqs8V53WfjvgWe0YPjarBvFnGRnIfRtEz%2BEBK83DKNQqlEA4rZPEJPfOrjN3ylEhJU4rp2qDc6oq1Y8tBxMvbVcpuX7IdaGkO4JM0wfg29tKEMIK6%2F7smBH5D2%2B%2FCuZskty5m5LyGFtvRzGqI&X-Amz-Signature=357c1d5ee501742ef378b7342e9f3d36f1752bfaff5ab321e41969a3a10903a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643TMUYVY%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8yVYWfNCmkNjwjpnqwRiID9PujA74INXN69cOGkIUzAiEAy6Xm0ll5ndsr7JPqvDUMCYdfJrQMecf%2BwFFsyJkKWKsqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBrArVQS8oHjuTa9CrcAzJUurbkt4Y%2BVXB5QPeuQg91UPF38Nowyj8%2F2lG%2FvZ4wslgGYX2v0T6Pl12Bkh9DuJa8gVqPpIdH5OSzaHmXnkZJPx3hR8PE57oSAcwF0CoM48b1c263Usq1J2iRnXmFgJKefrjc3j7D8v491O%2F0cOSuMvhwDS2E54EhAzi4tPh180L%2FvvA11JkKxoPMw%2BLCrNpo%2Fh%2FbOphMSHSqXEiW7Mp3nfbT91uyhDYQ%2ByqZf5x4gil9dMrbpqFiUl%2FByVP4ghJFwq6kc5Ruy7AMhc8IKnvJUAe%2BAwnKDkCOeXh%2BpBFdpFHFYghwR3NA%2FIstcRMyJtk4equTco7zys715j5M8SQUlD0yvrL%2FrhL%2B4Dl4nuoWrhW67usyTtoVCz0DuPlev7oxfDuC4gwC%2FdTT%2F7gXmWZR7Lb5EwhYbGfjVgRwt1qkLQkoJFRt%2FRcMEl89bAbFljhK41iI3fZPIrJn6XYPoeHJg2aocblMALhLNRIQYmW2UzzE%2FeCCepH6lDIeHw7GG1BLh4YjDK3Y8FCc%2FBlrJysBUammqJbeynb3tyvw7TZYMoWgV6S9ss5UzBSIZMPtM6MMJ1NUjOsDvbG5eyhDwp7IznzdJNaxwVpRQXcMiNpy%2FZWsRzHk89hWdpRQMLb4%2BbwGOqUBkEqb2%2B5wI3NvCqxVWNyQKgO79FAmgHVQCdS1AaTRAKZXLessDFumKankFTpDWE5M1MNfSu1yuraZhC35YZUICbCgeMEOVcFNVogRqYi8KMm34MLX1TCSulkWJDoOQARHT50oA9FkjcRZdBK%2FhQ1M0dlrvG9NBV8AcEAzCSVUxgSJmMFP1b27iB1ZysPGOWoLbvwH9GPQivTv%2F7uxMmajYfW4ExA0&X-Amz-Signature=0c51bf057e297a181830b25355ee9dfa206b682b8117a09f5e288cf8bd6c9dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNH2B4H%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzOksXVgZLhszHZhKxIuWFuoSSh4IiZ6acpnQikZsvwIhAKUH1MWtQXwUW4KHIq5NkR5yFKBLEaABgEGN1rX5GOI%2BKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSJ6S6y2hLyj7IpIAq3AO6X8Tz%2FWeS5GkAlPVXGcxi9jUJHTCj00PnyRxhbfmObtCAqBwZ7bCqwmGvu53uL43s3kAnY0gIK68VPY2Q7kQqNWLiucWln2wJc0wiwDRMpdwbegRfS8oAKI0p8mZT7jbMBGU6S5fKmGysQD%2FG1n%2BB1Ymg0orijA7if9FQfU%2Bvl3AWkaK8xzf%2ByTCGEBqonySFjtTQD5FfOyFx7aXamdOQgoF9l3cRFs7Wus1u5dmDfxaDqgnbzkZIGzdXI2BJi2IhBJ8%2Bg25JDVWKf9puyTxIDrLhv%2FRG%2BAJPQjxg2t06HiqdKObnYiEwPpcbtjeFTyp31foaWX%2Fzp1cAMY9OYg53WlTkBjjgzPMAXdB6L2tWpzLcflMuG6no193ILJX6dwbl8%2FaA4CwSeQqDO4c1u9IeYDR5Lk%2FK%2BIEtdpCU4Cwi8%2FR0oIOAFKV34%2FIVQ6Wx272esNPz%2Bi13DNgyZq7nkM2MggYHfYtohcyC7eFGYdHLsoD1YYIEFrz4lvWGHtN9Oo5wTak1QuyYEW4jf5JVhNAa0jwrLBguoEWGn5%2Ff6Nh%2BPuIZHliUbmyEZPn9TpD1US%2FBWD5zJG7%2FMLGUa6PBDptOFJNjB3w6mMv%2Fhos90kywK58ztSXpMkyIL3zDEjCd%2Bfm8BjqkAT61hILvMVgan85XDdiz0JOBnkbPnJiXOvbJce5dhlp9GfFOSYLHkLBMH8gKwDa5yIC02tQDa1Htjcv29Lmx7ONetBzVkiIa%2FETesIAAr1eHIpPgxo6F2xZX5IIdwmu9YRWSPKTkq16JqZx6KslYUknPQV8zCvk5MLv7uaCn8Z06LIdETWYS%2BXLiMf4MYMn0bkvEbJPGVUBGtmBu0CmEg3mTQPEx&X-Amz-Signature=ad7694056cd97af6279ddf8092f03b998938f74e9eba9533e5023ea3206c5082&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
