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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNRDD4D%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO8f7IM5E0BeuW2PMAgaDe1K%2BcbMzIH%2B%2F7hZRTGcgIqgIgdXppRRRD5w6WGVneZE8R4qaxGTs%2FVRFu8evmLJAN8DYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA%2BBVtRr3RUUbBMGyrcA2g7VD0F463sqC%2BFzP2tWH9i2gBJocPj%2FrY9k4lb5cL4TQ6jhtNJGohMF0LRGZViLtaCLGhCoKSdrl8SA%2BCpF9725dSTQqghorCdQx1Qgadkvx1kjEoBt%2FTw47YSfiKYvUmAb3N5vcrGWkHWWYBAWSLYzOm6L6k3MZyUBQ7w8gcJuQWTBCOw4y2BkQ8zxz2QPDB2cAAY6hVsbVnzzxNLFgFRvEqLWGiL47fFq9qCaz5AsuFhdovpGyxtRU39lmZz5La1x2h%2FXRxcsNU4fo6LJFSE6WH0c70yq4vlcyW7JftPgCGDt25khBOJWI6sR5XDh%2B1PjtEUqHynrFLOOrJBVcrDbPMfhkk25Tpz4mSwTbMm2YWcnBPJlqQLneGUuiSkmx4L5ldmY%2FGfwSWJTw0L%2BY35NJkoQSdu0eW5VeaxtYNa4dewjVlM0BD%2BT99hVMng4eSCdpN40gMds%2F1ywo%2BL%2FZRgper5pSK8Uga6S7zzyvVVo%2Bf%2BGtWi2HitWmYTaOhpd%2FgBt3hwEvwvHIujrcSffqg84kdomI0Rqv%2Bk20CJpmttLN45s30tlaO9%2FZFcjo5lNAIyH3VwaT4UARbQtQpjIREd4gJBxHRtdj09tausYp3psGyZo6vga6NdhD%2BXMNT69rwGOqUBGvC2CEEWxUP%2Bg8kNUAHM1yPMVQ83FHWw18EBCNA7hQCJ1cfDhGRKOd3kHOCQi9zoZBiqSN2fIkUmz0lZP%2FcPgUCFatLsMU6vwoWHrmc15%2BxG%2F8rfW8hEeO6IYBZsMT3x4hf3wMZ5MreO5ZapwHSQofrW3xelthqdOZKGJwuh0%2FUfENKbUsEUgSNZCDqhPUB5WEFQKPanC26602hfgXpMZS44lyDh&X-Amz-Signature=9567df45b0a255c06346480d3b2a6e6f458f2c19c8677f25dc04d4160506efb1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNRDD4D%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO8f7IM5E0BeuW2PMAgaDe1K%2BcbMzIH%2B%2F7hZRTGcgIqgIgdXppRRRD5w6WGVneZE8R4qaxGTs%2FVRFu8evmLJAN8DYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA%2BBVtRr3RUUbBMGyrcA2g7VD0F463sqC%2BFzP2tWH9i2gBJocPj%2FrY9k4lb5cL4TQ6jhtNJGohMF0LRGZViLtaCLGhCoKSdrl8SA%2BCpF9725dSTQqghorCdQx1Qgadkvx1kjEoBt%2FTw47YSfiKYvUmAb3N5vcrGWkHWWYBAWSLYzOm6L6k3MZyUBQ7w8gcJuQWTBCOw4y2BkQ8zxz2QPDB2cAAY6hVsbVnzzxNLFgFRvEqLWGiL47fFq9qCaz5AsuFhdovpGyxtRU39lmZz5La1x2h%2FXRxcsNU4fo6LJFSE6WH0c70yq4vlcyW7JftPgCGDt25khBOJWI6sR5XDh%2B1PjtEUqHynrFLOOrJBVcrDbPMfhkk25Tpz4mSwTbMm2YWcnBPJlqQLneGUuiSkmx4L5ldmY%2FGfwSWJTw0L%2BY35NJkoQSdu0eW5VeaxtYNa4dewjVlM0BD%2BT99hVMng4eSCdpN40gMds%2F1ywo%2BL%2FZRgper5pSK8Uga6S7zzyvVVo%2Bf%2BGtWi2HitWmYTaOhpd%2FgBt3hwEvwvHIujrcSffqg84kdomI0Rqv%2Bk20CJpmttLN45s30tlaO9%2FZFcjo5lNAIyH3VwaT4UARbQtQpjIREd4gJBxHRtdj09tausYp3psGyZo6vga6NdhD%2BXMNT69rwGOqUBGvC2CEEWxUP%2Bg8kNUAHM1yPMVQ83FHWw18EBCNA7hQCJ1cfDhGRKOd3kHOCQi9zoZBiqSN2fIkUmz0lZP%2FcPgUCFatLsMU6vwoWHrmc15%2BxG%2F8rfW8hEeO6IYBZsMT3x4hf3wMZ5MreO5ZapwHSQofrW3xelthqdOZKGJwuh0%2FUfENKbUsEUgSNZCDqhPUB5WEFQKPanC26602hfgXpMZS44lyDh&X-Amz-Signature=bda5eec63b5510b9cb06bfde04c20f5c2be8cb509d248c4100079ec5794704fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DNPKCZZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyzJ3Ynxz3tWtSQGdoqb9TVmq12P3CoL811D2rNocMrAiBnHPfmQr6lssRSEW1VnBgHjfbS99L%2BMKmN4gRH0KIlHyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpV6bg7ie7J1UGXxJKtwDpa0xjlL%2FeSIXOCB%2Fi3B2%2FoFrzD%2FW9IpDFGATAgPx7dDMazMD3oCx%2BkKlU0n6VhWqlZxqEyUCv6GdexSYxstqMTJnwZUhVvaBLJ%2FAnDdGVOo37Y3tQpMWwJlBDwrLIMNwyzIpX39B3qxWP7%2Bc1GzIdrAxY5Lgf3tHT2hL12dESe5HGitwkOpv3CEcitU3fRbDKh9fPiXhbd3TEA42YsFlijNGeGmuIScTCLRhqm3yF69BQrnw75D9jEPmmDPvUby3X4nNbhwyVABV5drHf2AaMA%2BsgtOSpvI5wY8GAPG82RDxqNGkjq44GZZCweL65bf5PE45YmMKUPH9LURAhAsabQAPwb3IIkBtM72qzyf97F3Slg20HW%2FH%2FRDux3LqQX3%2BGjV1LtSuZWJ9FM07oc9L%2FLuoALyNneGfIPs0D%2BQSwgNcf5xEaj2DUTpH6xj0eHLu7yRojSmoFcfX2bmE9eQmMGoG62F9o8AHaeU%2FEwmwh3jzUhpE08igr0WwzjOBju93hGdx0YrcL12jAoxaZj59wu4v9T5r0uwt7KDuT%2B0ysnZuSiixzAR%2FsdwIJFJQt3gB2a5%2BL1c95DcU7qVmH5K3pKKv821x8jJUr1%2BviPuE%2F1KdD89sE77CPT1Zf1swgPv2vAY6pgFE3TD0v2eSGdfCTq6%2Bw%2FtW8QK4Zu1SBFq44gxMn2MvXrhdnIJs8YWUjXCmeD6bVlA5smy2Se56EdLg1AWXn0x50haoyky64AiNSRvowckaXGGpY1U77LYfFbW%2BGwRaHyylRkkZbE%2F0CCIwflBBq%2BoFwIW5P54BNvFSxQBjuWa4hx%2B2Mp1k48y7BFKB3Po0IuRihe7L4o%2B7zenhZKx6Xav5PLIvM%2Bz8&X-Amz-Signature=3099fb413271d897d179c72642d93d96a565846efb1fe769b9cd73526872b140&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VV5VXET%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJdOrfx1bSgK0DFhG4ujMfI7v6p9OgIsyr2TIZArWFnQIgMIqwSbuAi5dLakznpswe1RiZCJ0z%2F6TkygXhaMjjzhUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXmVkuBoyeDlzJHryrcA3WuENbSIKVYrDBxSh8TgH12%2Fub0Ih5RQMKyNpXFYJocBQJNNHs4o2qdHU92qwYJgD%2Fnc3rCAiGUSGLqUmuA%2BEqgaDGjmzO3oWL4%2FvPaRLz9mDM7MYkREtcqm2SruQqyKvcm%2BYEgQUR7WHyfPfoNpuR4uWuRnc4aMOqIdMFAtd62441k8VjH3nffMN5CAHqSWDbPCRfmL4N8bM59STxI7QFs2EEFefsupYbpP1IO4O6gSrmRbfnA9XqLp0jVPnBpdFC2xlyiHnBsopazEQKOM1m42G2JvZx6QrRk%2B06uEuYJqLyn%2F40a%2BfqQizOEQWqsqeZYmMShrzQ4fRhoaWj1E3iwz6vIAoj0Ou3hvS7h0FhgyUejxorlv2yq34hp6fmUrBDHM3JZ0L%2Br9C0fZvUjvouVHobiyW6c2xDW9Zvg8yxJa5udKvf23eEhJnX2D%2B8Emi88wEgXD4R3aXvVWyVS7XUE5hme0Ygbgq5D5AlGCmEz1YWsPL6edztnyYKCEPJiDdTytWoYeagJIgOdmWoANzUVg5Oe4osOqYLS6nvDjnyL80CtC%2Bzhah46pkmqeI8QrpTFezM68ootTTP1VSmezF0kZ6wVr7CoS2gl0zXN09dEmokVea%2BQez38oXU8MPn69rwGOqUBtUxm8Dnjr%2BrFJpSCvQ9e5WeAbQP%2B6%2FiiTfUA%2F7kInhtt4VQoj9oiwgiXR4UMxKvQ9x9BFzJ5eXRyzlQpykniIcej8ykS%2FpPHlNlT4wfabHq8Rcql0SaKYRfPZygDxmxboGhWLr%2B7X8WhaDOIjWlRNXCYjyBLm%2F759oNf%2BYKw6dp%2F9KiYy5nUL3M1eKdUBamMHbP0elEDyvgBmTUbLmUpupGqNKGK&X-Amz-Signature=9b85e7a61ccd459ef954e84835e2c3983f7df27024f8fe46b06190195048bf2f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNRDD4D%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO8f7IM5E0BeuW2PMAgaDe1K%2BcbMzIH%2B%2F7hZRTGcgIqgIgdXppRRRD5w6WGVneZE8R4qaxGTs%2FVRFu8evmLJAN8DYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA%2BBVtRr3RUUbBMGyrcA2g7VD0F463sqC%2BFzP2tWH9i2gBJocPj%2FrY9k4lb5cL4TQ6jhtNJGohMF0LRGZViLtaCLGhCoKSdrl8SA%2BCpF9725dSTQqghorCdQx1Qgadkvx1kjEoBt%2FTw47YSfiKYvUmAb3N5vcrGWkHWWYBAWSLYzOm6L6k3MZyUBQ7w8gcJuQWTBCOw4y2BkQ8zxz2QPDB2cAAY6hVsbVnzzxNLFgFRvEqLWGiL47fFq9qCaz5AsuFhdovpGyxtRU39lmZz5La1x2h%2FXRxcsNU4fo6LJFSE6WH0c70yq4vlcyW7JftPgCGDt25khBOJWI6sR5XDh%2B1PjtEUqHynrFLOOrJBVcrDbPMfhkk25Tpz4mSwTbMm2YWcnBPJlqQLneGUuiSkmx4L5ldmY%2FGfwSWJTw0L%2BY35NJkoQSdu0eW5VeaxtYNa4dewjVlM0BD%2BT99hVMng4eSCdpN40gMds%2F1ywo%2BL%2FZRgper5pSK8Uga6S7zzyvVVo%2Bf%2BGtWi2HitWmYTaOhpd%2FgBt3hwEvwvHIujrcSffqg84kdomI0Rqv%2Bk20CJpmttLN45s30tlaO9%2FZFcjo5lNAIyH3VwaT4UARbQtQpjIREd4gJBxHRtdj09tausYp3psGyZo6vga6NdhD%2BXMNT69rwGOqUBGvC2CEEWxUP%2Bg8kNUAHM1yPMVQ83FHWw18EBCNA7hQCJ1cfDhGRKOd3kHOCQi9zoZBiqSN2fIkUmz0lZP%2FcPgUCFatLsMU6vwoWHrmc15%2BxG%2F8rfW8hEeO6IYBZsMT3x4hf3wMZ5MreO5ZapwHSQofrW3xelthqdOZKGJwuh0%2FUfENKbUsEUgSNZCDqhPUB5WEFQKPanC26602hfgXpMZS44lyDh&X-Amz-Signature=9a3cb9105b1ae30cf85b683eab0d71a134b475327f31043a40148f9ae4fb607e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
