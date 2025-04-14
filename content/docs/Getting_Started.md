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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJLEGYT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDOsoujOIkcS%2FSbCxlMkFXFiMN3WrWOg102PIij93uuwIgOpRNTpgM43NpxkY1o6ROnWQI%2F1RiR5WkZLaWGlXSF3kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI%2FuVwk1h%2FXPJCNGASrcA6p3wcrioWRRrMXbv2u1Wt7dp6vznbC%2BfJfm6%2BRXYr9CNvBjGAoa0Awwt4YbCHRZxuzs2xQmWQH2LupLhvv2tUSF9eEoGVvkULZSy040jGBHrLLPhLTGJmIaAwVS1jFzs58DolG88xobTXzeotdRPcUGSDNn5x%2BOybjF1Q8zik%2BoQYTGk1hzTA78ZDyHiCc91RuwAqbL1ZCr5jNTh0llQRqhd49gRzavBG9iIpVNuC8cyIvU%2F7uF4rKGryGpSvVnd1D9NVwIK2CskMLQleZudCYChyE0ErLGbVftFXvXNBx41OeDF0kDY5eOTiXPq45ffAmeT1zop6M7KltHlNSyNYuxJoI6QvxY21yT4LOsyR0xVT91A7u%2BrExUrC6GbTaJH4xLhgBBVxjn0xYZKq6%2Bkj0%2BUznqyORvCqyuQNDS3YdGosvngzH8FpeuYvr3tVvAtKi2L6fn8Lkz%2BT6P1BuwSjU%2BFbqDBtv5WL8CPCGW4Z6XStpPCMFuva7VPNTbSAaL21MJxpaVPHs4lgUxcPYtJJEqFCbyYZGpPoaaCHaSuG%2FXtRilZxreMFtzpw97imbucrzJ3%2Bl2a9%2FKIvrOL48gPjzmtJS0wZdeWcbnguT%2FzsDpv4EvSaG4yi37zX%2BFMJ6U9b8GOqUBAVOux3aRFMgVZaHvlzlvJrCoM2VnHAM5bG9Rr5V%2FYoI%2BBDKqQI4dcBLrl%2BmeoPpNe5meKS2O%2FCYVsahKaAGb%2FWnP2KXrOEFzKioGU9fPufNmz%2F%2Bl%2BGL8it08k94eUBeW%2BbqWKXK5rlh7hYzRgaVJ%2B%2FDWdwxNWYf96BxGNwmRdcu5PudBsI2tQ59C98HqaomSDjv%2FJPXNHpm%2FGatywkZLyU6umlip&X-Amz-Signature=92ff05770b7300995e7849a51c90f39b1b375e0695a23747fdbf0b9c7a41a6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJLEGYT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDOsoujOIkcS%2FSbCxlMkFXFiMN3WrWOg102PIij93uuwIgOpRNTpgM43NpxkY1o6ROnWQI%2F1RiR5WkZLaWGlXSF3kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI%2FuVwk1h%2FXPJCNGASrcA6p3wcrioWRRrMXbv2u1Wt7dp6vznbC%2BfJfm6%2BRXYr9CNvBjGAoa0Awwt4YbCHRZxuzs2xQmWQH2LupLhvv2tUSF9eEoGVvkULZSy040jGBHrLLPhLTGJmIaAwVS1jFzs58DolG88xobTXzeotdRPcUGSDNn5x%2BOybjF1Q8zik%2BoQYTGk1hzTA78ZDyHiCc91RuwAqbL1ZCr5jNTh0llQRqhd49gRzavBG9iIpVNuC8cyIvU%2F7uF4rKGryGpSvVnd1D9NVwIK2CskMLQleZudCYChyE0ErLGbVftFXvXNBx41OeDF0kDY5eOTiXPq45ffAmeT1zop6M7KltHlNSyNYuxJoI6QvxY21yT4LOsyR0xVT91A7u%2BrExUrC6GbTaJH4xLhgBBVxjn0xYZKq6%2Bkj0%2BUznqyORvCqyuQNDS3YdGosvngzH8FpeuYvr3tVvAtKi2L6fn8Lkz%2BT6P1BuwSjU%2BFbqDBtv5WL8CPCGW4Z6XStpPCMFuva7VPNTbSAaL21MJxpaVPHs4lgUxcPYtJJEqFCbyYZGpPoaaCHaSuG%2FXtRilZxreMFtzpw97imbucrzJ3%2Bl2a9%2FKIvrOL48gPjzmtJS0wZdeWcbnguT%2FzsDpv4EvSaG4yi37zX%2BFMJ6U9b8GOqUBAVOux3aRFMgVZaHvlzlvJrCoM2VnHAM5bG9Rr5V%2FYoI%2BBDKqQI4dcBLrl%2BmeoPpNe5meKS2O%2FCYVsahKaAGb%2FWnP2KXrOEFzKioGU9fPufNmz%2F%2Bl%2BGL8it08k94eUBeW%2BbqWKXK5rlh7hYzRgaVJ%2B%2FDWdwxNWYf96BxGNwmRdcu5PudBsI2tQ59C98HqaomSDjv%2FJPXNHpm%2FGatywkZLyU6umlip&X-Amz-Signature=1974bd458843fe4017a5a2c782abfdf06b01b61ed4180c538a9032f7bc377839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHLCHQBF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4QoJXx%2B%2BS8ygzmI25wPhnAbHZr2JAFQH3R3HQr6uKMAiBgqG7ryOC5SQV%2Bys79cBnHw5Z9qM8ck0Z%2By2lLsMx6DCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMmjtA0fqVLLuLlyuHKtwD7%2FomninGO4Invh2MHmrbSKUhyfEj0E56EGbaJgT2Swz9BkjwT41xYyPxA4MMWJELAmELKArwVFHrpTKxHoZxdgfxmsB2ndjqI9YfGhRVbOOUisn8kPJCIa8Nu%2BQZ8JXBpdxbY9r1sgfILSOf3w7%2FP9MOt2CmCTNuMYM4ORzQftGZAd5quYGcy6R95plDD9o9qKfeX2uqQlkGbtCYgQJ3u%2F2ouSoHySOTs7AAOB0A2J3JtmI0Rvw78M4Dkmx%2ByNneGwrK9D4Ndr1mKWwaDuUHUKXpPaHmv9UZlKg0ugnUZTCl7L%2FxImMOd0whjnRtRb1tkrLsC8sTg2ZKVryv%2F3vwCw3pr3%2Bpb72e4zNc5dJGA86b1dIBImUvm1eRO0DwL4M9IgiMP3%2FHH89CbOZYgV0pfD8l7uWefajd55jD4WYM6zpqbiPs4vfFw03EIK7McDfotqXAuA37lvkPMNAWjTOU1bTCR2rKx1u4FlghXj8YEDJ%2BVEy37AAGVDJctEtFxOfWda%2Bo%2FkKVmKCa1c2RFQwOcVof2%2F7WCd01qXl1XnSezu2Gr0doh8YYSMtiVzK2BAScaywL0%2F8T%2Bl%2F7pdZYDs9zd418aKksm8DTV%2BqIm77wFutSifn0k5ixNkyLNOgw1pT1vwY6pgE71vbSY%2FOcOceUTnMj12aQzhaEEIwXa0dSQT9E3MYdlPVMvWAaOLWJdxr%2B5juqpmZ5PCz70gV5YcTc2KK4KzkmX40Prn%2FV49YwcowlKRFM%2BVNFFfjJekzttEERj%2FROyTOX1zQ8So8Md%2FB4WW3ukYNsHq%2BTp5eD5PSQAUK3te8brOXzMwPmthqeaSFkOKHsvgqzlkEMxlp6PZlocHgM%2Bqwy%2BV3GTHbc&X-Amz-Signature=3704143088b87a5f0c7038893d5db7cc1f61029548df764c3b3fc9be53647d99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWD4PHYV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcz1Wz0XH020OPxcELRpJq0VzNi7tNbfvQespntYjmtAiEAmslCgND9bl59BHOTBDTQQyw5L9w9pX547Odj3hDR%2BnQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDjtaoF78EJ3RJNupSrcA%2BGalfIw4Costyv90ytvIZr%2BszBbMXlyTZCDyXxpUzAL2oskaiLNPSX%2ByQ%2FTFVn5HAAA9BkyheptAL5hUL0S94G7dUDmzU30Bt4WaGCyTj8HJXzVmk%2B8siqGqS4Q7%2FeQRX5K8dLbX45o6bg50CGXQ3UWk7tcnkwCdX6TX40I7FUM6K4WyUeuf5AQbgS4o3yYCBXjHJcrjRyg%2BTUV%2FVo8VWmJftj3FjZNI4Noa%2FaEa8ktJen%2FybospqC%2FYFnsYyuuC%2Fu1BlOGAGPJuiRVotMYhKxtLuc8ZM9MyV4OsmX7MpGpXpnAN%2FGQvmsLKSbmvQ%2Feu%2FwNlf5iqknG8d4bKkai2BO1q%2BFPY2ouISNHesOP0m2N1gxotAPXjbaDQs0Au0bxSAozpDwJjXDJEYLmE6o6nviyrBL4hZWl9WgAyTNEA2heXQsE23vfNQ8shozodKflNDKlJrjksh0TcnDn1HZoKUky7xNfkA38TlvjL0%2B2qeKezdFwr3op%2FcIv%2FeSToCWj%2F6UZGbIuFNlUVWfES8yk5QcipZwMYcafKt0YqX5eazekaIx27e1vy8oMsRyPXWYwYAgmZ2vhvsINu5pehQ7lvUHe4%2BscrJqhMPoPvwY8%2BvlaDPa0%2Fd9cow8MU%2FnKMNWU9b8GOqUBZd1%2F%2B7GcYYALlxzgW9lhEs763QlNmeA0rEFr98F0FPEnf1PDfqWVUKDNTS%2FxfUDPPfG9yWyQyRT9OaYam9tjIq3m%2FHxnXEuj%2Ft6JAkV1bsPDfKoqg1ExTIJ2RJqDOh5d6g4W16n3AVpHPz4KZCDwjv2EHNn0QIPixiivMk9uqUKNXazEYq%2FB7bre%2BVKidN%2BoV81iTu%2FZE34Ksfj7CaHGjkM8qF90&X-Amz-Signature=6251e684b4e321ba7432ac6ccd99d030923ddead49a8ad468ca6b92d5324541a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJLEGYT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDOsoujOIkcS%2FSbCxlMkFXFiMN3WrWOg102PIij93uuwIgOpRNTpgM43NpxkY1o6ROnWQI%2F1RiR5WkZLaWGlXSF3kq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI%2FuVwk1h%2FXPJCNGASrcA6p3wcrioWRRrMXbv2u1Wt7dp6vznbC%2BfJfm6%2BRXYr9CNvBjGAoa0Awwt4YbCHRZxuzs2xQmWQH2LupLhvv2tUSF9eEoGVvkULZSy040jGBHrLLPhLTGJmIaAwVS1jFzs58DolG88xobTXzeotdRPcUGSDNn5x%2BOybjF1Q8zik%2BoQYTGk1hzTA78ZDyHiCc91RuwAqbL1ZCr5jNTh0llQRqhd49gRzavBG9iIpVNuC8cyIvU%2F7uF4rKGryGpSvVnd1D9NVwIK2CskMLQleZudCYChyE0ErLGbVftFXvXNBx41OeDF0kDY5eOTiXPq45ffAmeT1zop6M7KltHlNSyNYuxJoI6QvxY21yT4LOsyR0xVT91A7u%2BrExUrC6GbTaJH4xLhgBBVxjn0xYZKq6%2Bkj0%2BUznqyORvCqyuQNDS3YdGosvngzH8FpeuYvr3tVvAtKi2L6fn8Lkz%2BT6P1BuwSjU%2BFbqDBtv5WL8CPCGW4Z6XStpPCMFuva7VPNTbSAaL21MJxpaVPHs4lgUxcPYtJJEqFCbyYZGpPoaaCHaSuG%2FXtRilZxreMFtzpw97imbucrzJ3%2Bl2a9%2FKIvrOL48gPjzmtJS0wZdeWcbnguT%2FzsDpv4EvSaG4yi37zX%2BFMJ6U9b8GOqUBAVOux3aRFMgVZaHvlzlvJrCoM2VnHAM5bG9Rr5V%2FYoI%2BBDKqQI4dcBLrl%2BmeoPpNe5meKS2O%2FCYVsahKaAGb%2FWnP2KXrOEFzKioGU9fPufNmz%2F%2Bl%2BGL8it08k94eUBeW%2BbqWKXK5rlh7hYzRgaVJ%2B%2FDWdwxNWYf96BxGNwmRdcu5PudBsI2tQ59C98HqaomSDjv%2FJPXNHpm%2FGatywkZLyU6umlip&X-Amz-Signature=459abb24fd26f922dafa6be166ef73826a9c5cbab0902cac1b6e4b8163cb462a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
