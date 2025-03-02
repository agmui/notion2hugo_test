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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63SMPH7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Ah6pQhAWppeReqx9UKB%2FWVIc7qoKU8iYDDaGicoadgIhAJEzXV5LoHJC5Tdm1C1lJSgO0%2BnLfyTMKD5rKRXh9ZkmKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqXDoYrtxhZ5J%2B2Ioq3ANlrsJQ%2FIcEobYBs1koLdaIvycHGowySwr9qLCqzWsxRYXaun2HnxklAGiA1NFlWioaLTdSkWdCyJAnJtAzSHV7tIKu9CX6EQC%2Feh3wrqFcrNzjpfLA0ifUVVLiycdMjF%2B9FQgEjTnD%2BoqUCF1b5rMKE0h352Ep0neo%2B15vkGo9Vw5lctxwoVjU1ShuTKB7vPz3GqOPa7j%2B7ogk6g6aeRnMWhrpLZdBdIPF1GkWv2BLyKVzA32LzzQ6XlRl%2BlLOvicIWQSgzqF461IzOtd7cN8tRXx72eJMmFm08rHdVtWeP1oK2Is%2BxvJZ%2FPJbtVgOrjGCPRtsyJrXEMyMzE8SDeVHl3SjPN2tICBPo8%2B57GXf1lHRNKbV50UBTmE50ylq9MNWTRK5nNn7MKjK0NTanSBYvuuuD9TQr%2BaqvK92bSED0TwpVwySLuhWOHAUiyNdDPpIGO%2FWUsxMFrc0zTSdOLUXG9YTnhjp5e79Imb7sdiOv5vh12EkCswSz7k%2F8dC%2BM1VKoG%2BGvtvKwtzT9d9SEFSOLV7OCD%2BgrNuFyvx56VI2uWvPPf11i%2FdYwb0IcmT9bR0hkIE9dhyfsOFf6ZQIla64o3RWVEwwuUOSjp4zmsQDDEaVRXSqs0ChzldD2zD%2FmJK%2BBjqkAYChI6WsYLV3QUFMK9tfsOSXNkwFx3hO6d%2FTFUatceJItWUvBVJWfaQdCbdNJb1xa9QFZo5lKYjc%2FmIEuhUKZzFjG1JlHIjujy7ElAKWItHmiAc5kyVAKphzZzddF9ca6zFPPX1g1N6laMWX6b8AOiCoJEq1%2FRZk82Y0pqAwE2SIFYcy05d9ayqB9MfsBlDzdmOpE0alPorjck2rjf4NFkazGHTj&X-Amz-Signature=d200aad621d9f64a0f42861f5adf2efee7a19f5f3d54d11929923a2b975cb97f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63SMPH7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Ah6pQhAWppeReqx9UKB%2FWVIc7qoKU8iYDDaGicoadgIhAJEzXV5LoHJC5Tdm1C1lJSgO0%2BnLfyTMKD5rKRXh9ZkmKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqXDoYrtxhZ5J%2B2Ioq3ANlrsJQ%2FIcEobYBs1koLdaIvycHGowySwr9qLCqzWsxRYXaun2HnxklAGiA1NFlWioaLTdSkWdCyJAnJtAzSHV7tIKu9CX6EQC%2Feh3wrqFcrNzjpfLA0ifUVVLiycdMjF%2B9FQgEjTnD%2BoqUCF1b5rMKE0h352Ep0neo%2B15vkGo9Vw5lctxwoVjU1ShuTKB7vPz3GqOPa7j%2B7ogk6g6aeRnMWhrpLZdBdIPF1GkWv2BLyKVzA32LzzQ6XlRl%2BlLOvicIWQSgzqF461IzOtd7cN8tRXx72eJMmFm08rHdVtWeP1oK2Is%2BxvJZ%2FPJbtVgOrjGCPRtsyJrXEMyMzE8SDeVHl3SjPN2tICBPo8%2B57GXf1lHRNKbV50UBTmE50ylq9MNWTRK5nNn7MKjK0NTanSBYvuuuD9TQr%2BaqvK92bSED0TwpVwySLuhWOHAUiyNdDPpIGO%2FWUsxMFrc0zTSdOLUXG9YTnhjp5e79Imb7sdiOv5vh12EkCswSz7k%2F8dC%2BM1VKoG%2BGvtvKwtzT9d9SEFSOLV7OCD%2BgrNuFyvx56VI2uWvPPf11i%2FdYwb0IcmT9bR0hkIE9dhyfsOFf6ZQIla64o3RWVEwwuUOSjp4zmsQDDEaVRXSqs0ChzldD2zD%2FmJK%2BBjqkAYChI6WsYLV3QUFMK9tfsOSXNkwFx3hO6d%2FTFUatceJItWUvBVJWfaQdCbdNJb1xa9QFZo5lKYjc%2FmIEuhUKZzFjG1JlHIjujy7ElAKWItHmiAc5kyVAKphzZzddF9ca6zFPPX1g1N6laMWX6b8AOiCoJEq1%2FRZk82Y0pqAwE2SIFYcy05d9ayqB9MfsBlDzdmOpE0alPorjck2rjf4NFkazGHTj&X-Amz-Signature=e4e561be19a75b7f01c43f96bfda49ac10e26019dad00e861b44cd4990ba7541&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6U2WC5%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQUe87M5Cfst6ZIRoYuNuLHn%2BJg6AR6Fm9EIUch%2F2ihAiEA5cr9T0ApbVn6z0cAVb8JrKOPSylCwENHpAaeKLtRH3MqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZc8t4mExtdXJkB9ircAyPcGW7pCvfHKaRH3RUc1rn%2BA8HeizSwBAKv3x689aY3YUTVPNjrA3%2B7X5ptSUX8M0%2BVtgXA%2FPmAUGchgNX2PxgUznh6EB6GwKXq0UxZLewbAQKoE%2Fxh3O1j7i%2Ba4rEo%2FYLBO4mhokzr8oWCKuuCFOYrw58Gj%2FJQfCq9mgTFGqVf%2B4fT8gGGIpLljnIidGFvg4QsT%2F3mzsb5A%2BagKsKRLADb7mQpH9%2BqEDX5oNkTojHWaUfpan%2BCYJk3mkJJzrnRDoYXMFhzsdOKHERnK%2FMtW6wbl9wvGERnHBSZEe1zK86jPNwg3G1GoKhg3cKVbyMLzZL8J32Lp1hbjrxse38wRuv9LdUKJ7lWDjPT87cZxkoDiHMp2Zp%2B9U1nipkdl17ZBJe9n5MsPUGi0%2BkdrB25mp0jLQEZy0%2BN4Kwmb09V5%2FFO5YGJWmvWd4Og2aiBq8bH%2BcbMxeubRc7lytQKiusSUYkOen5N7B5dSDxbb1gcxIW1%2BzMATnnAroooYTVPw6v4rR3Ny9lMk6hUU%2BRxgNnBKqD3L%2B7kFpgw3OwoQttr6bcM%2Bqh4xVvdHbLFdoOkjH8LxykbiWWKVHKmCY9V280ASQq1Xz8L%2FAFF9XiSEQBFJxOfWWCQT2oXnLfHhi1uMJufkr4GOqUBMH5JQphR%2B3Mu8zCD%2FUyIGy7KTqS9EFNwDpLiuU7cu%2Fj4AbFOsu5a6sNlg7dl3IlVJbZ5ag1r4RMurIVQv6SwXNi%2BEfohYjKXjSWheTy0NCCTyByraB2DKQErL37OxvrRY1dphqN1PBsVF0NyTkrsDd5H%2B2AveyqA%2BLtDTYPhaJbi%2BApyaz2ffwWYVR%2F7fT01tkep%2FOXMmu%2B6UEiJRiHRzsbaHul6&X-Amz-Signature=b1b46807adc4c8870263ddece3b5e3a51a5a30b3f79ca77bd781d3fe692a0bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LEEEDPN%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoWTEjeD5vJWxcaeyr12Ofa4Hg46BcRu%2Fl%2F8bYbjrofQIgMQuklmGIS6G03qbx9gcqaT%2BLTJJFuyQlxsqHaAwoUKYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzidMbmo%2BWFnzp1EircA47YRq%2F5s9u06kFmWQphnMGJ7Qb4chGWmLsq51VUxQGR7HYIZ1Trkg2JIY4scuRpb8S2pcUocYYgtZtM%2BDmi7UeBfpEwkhMGYUKI8ZBiwrN%2Bh4b0mAtPe%2Bq44HJZhRBLLr7Yb46WqIvZBA2P10%2Bt9tlTb66IT3PEYM9my0DF6PMkrFIA8VaUxLu8oy4ZYjejl2uS3OAUPtbzCe7wxhsEdYCBSrit4BGiiuZce%2BTddkrEVx6k6ZHe5YOiaxplPx8d8f0cI6Edep6lY%2BK%2F6FBZ6XU7jFMzhypv6T1dB%2BsKrnC5m16E1WdVbBim%2FgfsY2evkK2%2B%2FVqyLNo5LKtq06Ve%2BE7nLG2xgDozM3E7cP%2Fi%2FDUuaEWs0Q3OSTX%2Bzlqh6vh2jpHSswCnMQi2NPmgjSHOALMvedpzpUkTqewA20V1LnqgWB6m%2Ft4d2%2B9QbwWCtxy3WF0xfsQMiQ%2BaCmI6EIEOSg3QMAY%2BPwm1zwFohQ2ujt%2F9Kf5t2kRIRSVcLTqu7LD1ywcw9Q9TuBUSC7x4KyriUfx7cfB1riFjV3sbalxZcpfaz2uzSPh61ini1jK%2BXxTz1wLUqW4LyC0GjI3lZGUPE4wFYgyU9yBtWzg1X16a2EWCR9WRJQ09xkJfiV1YMJGfkr4GOqUBegUI7PzNRAOOb9odwh%2BkDtHRTUmC0AaznoytoO0n0qHy%2BMKpAiHhKOC%2BcI%2F7TLLT8RlzeFSIx%2BpNqn%2F3dEu8Hx1XCtgEGkEDLTWMxHbwCDZqu26mc7zsJPhF1wha0UR%2Bl3hlZ6Eba37Zj0uAy4YiT6vvLCwALtYacyjVwoylTgq%2FjSofX%2Frx7RwAzxBSTAE1%2BjuO5tJDQyLohwRavYVmgUMrkHTs&X-Amz-Signature=676ebca24bb71d1049192abe7c2213b3d96c4a85da74d35098b914b21d63440f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63SMPH7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Ah6pQhAWppeReqx9UKB%2FWVIc7qoKU8iYDDaGicoadgIhAJEzXV5LoHJC5Tdm1C1lJSgO0%2BnLfyTMKD5rKRXh9ZkmKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqXDoYrtxhZ5J%2B2Ioq3ANlrsJQ%2FIcEobYBs1koLdaIvycHGowySwr9qLCqzWsxRYXaun2HnxklAGiA1NFlWioaLTdSkWdCyJAnJtAzSHV7tIKu9CX6EQC%2Feh3wrqFcrNzjpfLA0ifUVVLiycdMjF%2B9FQgEjTnD%2BoqUCF1b5rMKE0h352Ep0neo%2B15vkGo9Vw5lctxwoVjU1ShuTKB7vPz3GqOPa7j%2B7ogk6g6aeRnMWhrpLZdBdIPF1GkWv2BLyKVzA32LzzQ6XlRl%2BlLOvicIWQSgzqF461IzOtd7cN8tRXx72eJMmFm08rHdVtWeP1oK2Is%2BxvJZ%2FPJbtVgOrjGCPRtsyJrXEMyMzE8SDeVHl3SjPN2tICBPo8%2B57GXf1lHRNKbV50UBTmE50ylq9MNWTRK5nNn7MKjK0NTanSBYvuuuD9TQr%2BaqvK92bSED0TwpVwySLuhWOHAUiyNdDPpIGO%2FWUsxMFrc0zTSdOLUXG9YTnhjp5e79Imb7sdiOv5vh12EkCswSz7k%2F8dC%2BM1VKoG%2BGvtvKwtzT9d9SEFSOLV7OCD%2BgrNuFyvx56VI2uWvPPf11i%2FdYwb0IcmT9bR0hkIE9dhyfsOFf6ZQIla64o3RWVEwwuUOSjp4zmsQDDEaVRXSqs0ChzldD2zD%2FmJK%2BBjqkAYChI6WsYLV3QUFMK9tfsOSXNkwFx3hO6d%2FTFUatceJItWUvBVJWfaQdCbdNJb1xa9QFZo5lKYjc%2FmIEuhUKZzFjG1JlHIjujy7ElAKWItHmiAc5kyVAKphzZzddF9ca6zFPPX1g1N6laMWX6b8AOiCoJEq1%2FRZk82Y0pqAwE2SIFYcy05d9ayqB9MfsBlDzdmOpE0alPorjck2rjf4NFkazGHTj&X-Amz-Signature=fb80e62c52072da2742b81c6475e959e4e2e55186506a1e412d7da2ce441b2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
