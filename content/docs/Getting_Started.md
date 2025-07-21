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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGKLYJJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhJY6C2zDI5%2B9ljRYbZQmhikjirAAmzb8HBv06XiSZAiAPReqXMCoufPuskZNBARIqaZGdoeWszLvMQ8I%2FXsToQCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSJnc1vg4MIdImcjTKtwDEJ003OlF1UyWuCzLee%2FcHrHluCNKa1rA%2BLWWNDcmZxeOVZD6PNcBxqxjeqLCTISKWs0EpzdNUrAKJ7Ml2sJFJEbFT%2BSxUemUaAl2TXRjfpMWSHZz0dGbLtl1vgXRGXEncK9dxpnYkMtAan6fU2I4aC%2BEfb8%2FG219f%2Br1ly%2B%2F8vd0J0F6aIvgLpBZDhisVM4HtPQ7RneU2S9wNQWXyYALlFNg0A1Nt1B9Swgq3fKaH53HqUbMTJXZNICK5o0v6i8D1xIAV7a0NGELkwJwnLVI2KkftL2FPRfUAizEWv102Qj50SXF1L1qSwdF29MgGB%2BYR5vEnUU766Z3HZqvumZXFS71mYjhibJEdZKbBBuSQZc18g2l8jpUxpdioT73neJJIsvLsy2youm0XqsWpbyoIj26aQndPH07pb%2FQXXEVpIMl4GGMvrXMX%2FmuK5JoIiCQuqchdgiHVpArjdXF6DHQuie%2FxgDb3pL3TLpDUUQcVATt9WuhY7erxRZzSXAKU%2FLOdsYcD9F0o3f9WKz9Rc8ckbrGYAzQ%2FjpEpHrm0BhTn%2BnFmVam5Q%2FyBjB3b9e71shaE7%2F24kFJp3cTI%2B4RbRqhigYJju9gw9e14tFrwx3RlvINi6VXu8EMb1XfSSMwuOf5wwY6pgF6d5Ic%2BSWbM0MmoknzGov72VhKCmW9D36i4Bvcq6O%2FszYLpj886EZUK%2B8u6ac5CV8XwJSuqIdLOczwF0LCbVbv9yHJVnpCQSWwC2DqCqa3FRiTbPNrcZIRPDLaA5NVMwjJ2aV%2FS2WCOLTaQ%2Fww2D9Y%2FU3%2BVMp9k0nZAblPO%2BCMpQDVChWxR57n6rAvG2g1Jgyg9b7fHAyvHaJGRqdn5xGVgUzYv%2BEm&X-Amz-Signature=3d8b66f4df0d27a25be4b129bb7939b56d9f3a9ed09c141dfc80b8dc192c2789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGKLYJJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhJY6C2zDI5%2B9ljRYbZQmhikjirAAmzb8HBv06XiSZAiAPReqXMCoufPuskZNBARIqaZGdoeWszLvMQ8I%2FXsToQCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSJnc1vg4MIdImcjTKtwDEJ003OlF1UyWuCzLee%2FcHrHluCNKa1rA%2BLWWNDcmZxeOVZD6PNcBxqxjeqLCTISKWs0EpzdNUrAKJ7Ml2sJFJEbFT%2BSxUemUaAl2TXRjfpMWSHZz0dGbLtl1vgXRGXEncK9dxpnYkMtAan6fU2I4aC%2BEfb8%2FG219f%2Br1ly%2B%2F8vd0J0F6aIvgLpBZDhisVM4HtPQ7RneU2S9wNQWXyYALlFNg0A1Nt1B9Swgq3fKaH53HqUbMTJXZNICK5o0v6i8D1xIAV7a0NGELkwJwnLVI2KkftL2FPRfUAizEWv102Qj50SXF1L1qSwdF29MgGB%2BYR5vEnUU766Z3HZqvumZXFS71mYjhibJEdZKbBBuSQZc18g2l8jpUxpdioT73neJJIsvLsy2youm0XqsWpbyoIj26aQndPH07pb%2FQXXEVpIMl4GGMvrXMX%2FmuK5JoIiCQuqchdgiHVpArjdXF6DHQuie%2FxgDb3pL3TLpDUUQcVATt9WuhY7erxRZzSXAKU%2FLOdsYcD9F0o3f9WKz9Rc8ckbrGYAzQ%2FjpEpHrm0BhTn%2BnFmVam5Q%2FyBjB3b9e71shaE7%2F24kFJp3cTI%2B4RbRqhigYJju9gw9e14tFrwx3RlvINi6VXu8EMb1XfSSMwuOf5wwY6pgF6d5Ic%2BSWbM0MmoknzGov72VhKCmW9D36i4Bvcq6O%2FszYLpj886EZUK%2B8u6ac5CV8XwJSuqIdLOczwF0LCbVbv9yHJVnpCQSWwC2DqCqa3FRiTbPNrcZIRPDLaA5NVMwjJ2aV%2FS2WCOLTaQ%2Fww2D9Y%2FU3%2BVMp9k0nZAblPO%2BCMpQDVChWxR57n6rAvG2g1Jgyg9b7fHAyvHaJGRqdn5xGVgUzYv%2BEm&X-Amz-Signature=4f568f1d6a37190dc1abdbeecc39de3f09736075bb80ae919f1ec8dc89e275da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGKLYJJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhJY6C2zDI5%2B9ljRYbZQmhikjirAAmzb8HBv06XiSZAiAPReqXMCoufPuskZNBARIqaZGdoeWszLvMQ8I%2FXsToQCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSJnc1vg4MIdImcjTKtwDEJ003OlF1UyWuCzLee%2FcHrHluCNKa1rA%2BLWWNDcmZxeOVZD6PNcBxqxjeqLCTISKWs0EpzdNUrAKJ7Ml2sJFJEbFT%2BSxUemUaAl2TXRjfpMWSHZz0dGbLtl1vgXRGXEncK9dxpnYkMtAan6fU2I4aC%2BEfb8%2FG219f%2Br1ly%2B%2F8vd0J0F6aIvgLpBZDhisVM4HtPQ7RneU2S9wNQWXyYALlFNg0A1Nt1B9Swgq3fKaH53HqUbMTJXZNICK5o0v6i8D1xIAV7a0NGELkwJwnLVI2KkftL2FPRfUAizEWv102Qj50SXF1L1qSwdF29MgGB%2BYR5vEnUU766Z3HZqvumZXFS71mYjhibJEdZKbBBuSQZc18g2l8jpUxpdioT73neJJIsvLsy2youm0XqsWpbyoIj26aQndPH07pb%2FQXXEVpIMl4GGMvrXMX%2FmuK5JoIiCQuqchdgiHVpArjdXF6DHQuie%2FxgDb3pL3TLpDUUQcVATt9WuhY7erxRZzSXAKU%2FLOdsYcD9F0o3f9WKz9Rc8ckbrGYAzQ%2FjpEpHrm0BhTn%2BnFmVam5Q%2FyBjB3b9e71shaE7%2F24kFJp3cTI%2B4RbRqhigYJju9gw9e14tFrwx3RlvINi6VXu8EMb1XfSSMwuOf5wwY6pgF6d5Ic%2BSWbM0MmoknzGov72VhKCmW9D36i4Bvcq6O%2FszYLpj886EZUK%2B8u6ac5CV8XwJSuqIdLOczwF0LCbVbv9yHJVnpCQSWwC2DqCqa3FRiTbPNrcZIRPDLaA5NVMwjJ2aV%2FS2WCOLTaQ%2Fww2D9Y%2FU3%2BVMp9k0nZAblPO%2BCMpQDVChWxR57n6rAvG2g1Jgyg9b7fHAyvHaJGRqdn5xGVgUzYv%2BEm&X-Amz-Signature=f617251301b0062ef97783a32836d3964a7c6ccbbc94670668962eef74f39ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2UX4IIU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzsEPQ7%2BtEYBU8jcxL0NszMMtdTeMlOHK1onDP7j%2BHgIgSHExzxRGjYyaU5Nyaq6riCaDZYI09qUEo7s6veU%2BhQsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLI6nhBzECNxmvlMeyrcA2QAA4ZoJ7R2F8GlOo%2BF8L8swqYZhfpzSTV9qkJAvNdJEediERMVnXhK1Gh1bNGm5jSqEwM73Rj4X7riI1LPfvHKTSg%2Bd0ErfbJSK31J51xHtgKNmKPVh8QeHU9Q5fR2TJrQ1LCwtzVnAqaj2XTsbnntcprnWbMd6wpL8zAsDz6kE%2BCymFO1JvtjoBbCWgPkZ0ngZ80NXT4y6qvUbHrnaTDCuAh6iAHzmJfyKURh3el%2B4a2rzum4fWeBJtCAVwGryAQ4d4ehqbhrXkArWwD2xv36PXwCU3ql2KI5sli91WVnlT%2BBMuWC2FKvRzhIDSckYCEAIbxlSv6kdWonIo0pf9Javrm7NG4MmL2AolB7ZDTaDay43C2oQgdRetAV0jzrYKQdV0RzlIG%2Fvm6g4%2FStKVSQ50x%2F3uJhv0Zj9GLtmrNUVveS70gViCHtT3Y3dh3IElv6vasqDfuw2t571UdGf3lOduZBPdqLmXfCfqG8%2BP7%2FX0HyrWxHazdd7FdXOcAJB9GHE9mXMsA5bg6VXGUHmJ2fLdRmMkVliVpL9ZfLOK9i5BWHToqBk1MxYJgVu9VXrRgYwXLeYqahTi4DtwLS1%2FflCbPkr7%2FZSrTvw3mKNGRPCl7XSNry3PryJYYoMKvo%2BcMGOqUBV3usaOUVxy2BmHrb9T21JXFXMwr7Z9Esw%2ByzKZ7uZn2T3ReacQgrP4AB07rnLArs%2BmiXBqFvjw%2FPI%2FBDM1XAF7KGcGCwHUB7lmziQovT184QkfZXbAfj1eKXsxuAbG6sIN85XJVgY9AUPWtddXsnncmGJEbk1wjoYTECljnVjpIVJQALXIfaKRLp%2B3Tre7luNXsy3SQfzVEgt9aaO00EZRWUB9fl&X-Amz-Signature=20ae54398e58cdced35b9dce50879e3fa3b6210b344d3d95bb4b4b927a529c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSXBXVZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDneF0kHHWgbPi4bK1E9dQd7IBXLfLFFB4eHbeksOFn3wIgZba5sK%2BKDHZ36Q5SI5%2Bggn2viAiUGLT4uo1ZsOhpN3AqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC87tRKNbOJcQbiYSircA8uP%2FFdMYr7OT3SdWg4Z3kl7D3EVbmE%2BiHoOjCP1fS3IjMwiPwV2XWoG44p0%2BdTJhnhIF51%2BTB4GP5p5qFZDyCpXN%2BssrW18%2FLLXYWBct0O%2ByJTnSYTGADY2D8FouMJiBixIfSyN9onkJpP49usxYep9RtnBRLEAUyxyyVLAf6Bl%2F7nj95XVKBH8fwP7EwLk%2F3WZCvHgATpdpy7DEtdvzfPwU2LVs%2BRfnMWJefQw5zJ5L0%2B77pqS3RzWEwrdGAQ47hGQqUtSxpZTw2v2XI3V0vm0o5CfjUKLZs0tF1QsP6gYlRFAZ6SEP1N%2FE1dIWmuOcPatmXAHn2yxhgjjQf4nn5AfSn7lZchHUYFCwIK5TBw0JhEtTp6Sq%2BG%2Bw1Nsxb%2BncQf7ydezt%2FkltpCmrjjeq5Kcvl%2BfUOwWN1mzO14fCU%2FjgSguL5SU56Xc%2FCYWC8C8f7LO4zF%2Fr3laJW%2FvkuQ1PnYtuvlsAGDROONd4eUmBWiHPtttGRu8UFfEt8eBH0SRkEwHe78egvkZVaZyJhFvSYz1rQiAcqamSkC866lVtUG3EB0KG6LSywTx6eLOtQJoHftfsdgLv0VQEl1rwWbfGhyZgKoSCFOtCnYqk9x4bq55pczIkBwiA67cVCP6MLHo%2BcMGOqUBpqFsff5xKqmgf3ESFb5YEWPaNiYO0j5fouBdNq0bBtsG0eRw5GrPf%2Bv8ZPMoWl%2BF8S1noFrjhs8z9mbbrtBjT02Z2ASBxvneKLzIyAmJViHM%2BfBlcJZP6fxJ%2BSXe07u9xh3GIOGG9%2FV2NFw01rZXwDZ5q2zUjl%2BgtAlTU3q%2FZrWbPxL%2F8TgeeAu1fuHEYhbytMtxtDVb%2BJ89YD3odl8rg6WluslG&X-Amz-Signature=bb8cc4c14305e6170410a5ca9e27ecef2fa3d252516b0b98c670b3cc915888d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGKLYJJ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T181309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhJY6C2zDI5%2B9ljRYbZQmhikjirAAmzb8HBv06XiSZAiAPReqXMCoufPuskZNBARIqaZGdoeWszLvMQ8I%2FXsToQCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSJnc1vg4MIdImcjTKtwDEJ003OlF1UyWuCzLee%2FcHrHluCNKa1rA%2BLWWNDcmZxeOVZD6PNcBxqxjeqLCTISKWs0EpzdNUrAKJ7Ml2sJFJEbFT%2BSxUemUaAl2TXRjfpMWSHZz0dGbLtl1vgXRGXEncK9dxpnYkMtAan6fU2I4aC%2BEfb8%2FG219f%2Br1ly%2B%2F8vd0J0F6aIvgLpBZDhisVM4HtPQ7RneU2S9wNQWXyYALlFNg0A1Nt1B9Swgq3fKaH53HqUbMTJXZNICK5o0v6i8D1xIAV7a0NGELkwJwnLVI2KkftL2FPRfUAizEWv102Qj50SXF1L1qSwdF29MgGB%2BYR5vEnUU766Z3HZqvumZXFS71mYjhibJEdZKbBBuSQZc18g2l8jpUxpdioT73neJJIsvLsy2youm0XqsWpbyoIj26aQndPH07pb%2FQXXEVpIMl4GGMvrXMX%2FmuK5JoIiCQuqchdgiHVpArjdXF6DHQuie%2FxgDb3pL3TLpDUUQcVATt9WuhY7erxRZzSXAKU%2FLOdsYcD9F0o3f9WKz9Rc8ckbrGYAzQ%2FjpEpHrm0BhTn%2BnFmVam5Q%2FyBjB3b9e71shaE7%2F24kFJp3cTI%2B4RbRqhigYJju9gw9e14tFrwx3RlvINi6VXu8EMb1XfSSMwuOf5wwY6pgF6d5Ic%2BSWbM0MmoknzGov72VhKCmW9D36i4Bvcq6O%2FszYLpj886EZUK%2B8u6ac5CV8XwJSuqIdLOczwF0LCbVbv9yHJVnpCQSWwC2DqCqa3FRiTbPNrcZIRPDLaA5NVMwjJ2aV%2FS2WCOLTaQ%2Fww2D9Y%2FU3%2BVMp9k0nZAblPO%2BCMpQDVChWxR57n6rAvG2g1Jgyg9b7fHAyvHaJGRqdn5xGVgUzYv%2BEm&X-Amz-Signature=2ff841397db5f73f979ec32ac8660f33915d0aa99e14cee12f5e68c049b85f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
