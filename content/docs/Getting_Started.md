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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6Z4C2S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC7hgZj512k4SkZGhBTDrdaeWJFQ68VCfLLXle4uF5kQwIhAKOKl60vmPXHOXCRyHk6st851JxAiPynK%2BNFoGEGlkRHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW0e7HgS2r3NFuFDAq3ANlPdGrNkYrZl0wtGwaY2ekmP1I3Bzd7T3LAi%2FdSnb6ksZMMOKEqOTVsNNguGjcC%2Fx21C1Cd8ftPB6myBOJkVYfWLSbf%2BNKoyxRNJY%2FO0EGl5RlPijfayAx9jDeucsrTSy85Y3Fg9NOXYvVKfkwu4f85b7BX1GCrpMI%2BTs4RPEPlorUwtyg5RREAh5%2Frc7c40HMEC%2FB2Uwms6tzFiZ17BfAR9F21LhCtNDUleAAg6toyxZdgsqPDSfMLmOD%2BRSHAJV90t11u5RiF2fZ0R1UAhWli9dUdjwYC2UKcSaacpUegNcN66%2FVIkeuIVqR7qX1X3flGT6e46qzLxPa1qHFLF0bBeqkBPiWbSpn%2BXUL5Zdu%2F%2BkhHDqeLjusuMlpGB0wce2dIMGXTZBzVd8HqxGvHRV4dw4%2FyqDvUGcNvWbOwg0O0Oi9P1MoxzQ70wbFiraBPfYtn%2Bp9nng3%2BlVd8Iu742HmE6Y%2FxPd4NipZT5JqH682Uuwy%2BWBI653MEVpnlyCZijoUAc9kMOubjR3M%2FqDJ2lV8KwJTl0IbS6NCMMtRBa1%2BRtcCn2qMhWyLXmLPQlrdOUHQNur3GZepDX90t3vo%2FWH%2F%2FSroEzhBaSCYVHUVDTLsrRBEayXmydfOgWjGBzDA1Y3ABjqkASCdOZiHoxUX3BrsXTI3CEOvvS1O6kLk1ljzC%2By%2BHq1LMjfk6csy7W2Z5ZQ9S7CQHuu%2FB3h%2Fp5YXTkOQICT%2FhUeIeksuGFvcUXj0h9lLH3sMcGcFd8KpRqyef%2FYdQ%2FoIFaLvyny%2Fp3pRMDD76vfKltUWD2abijM1BisLAgwyeW53qiP8oOGgwyRuSM800V87l5%2Fn%2FB%2B23dJgBKtsXE%2BSegBGP5Fk&X-Amz-Signature=6632246fa882476c3818bca24edc9b523676d0dfcaaad6e23bc15cedb9845754&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6Z4C2S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC7hgZj512k4SkZGhBTDrdaeWJFQ68VCfLLXle4uF5kQwIhAKOKl60vmPXHOXCRyHk6st851JxAiPynK%2BNFoGEGlkRHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW0e7HgS2r3NFuFDAq3ANlPdGrNkYrZl0wtGwaY2ekmP1I3Bzd7T3LAi%2FdSnb6ksZMMOKEqOTVsNNguGjcC%2Fx21C1Cd8ftPB6myBOJkVYfWLSbf%2BNKoyxRNJY%2FO0EGl5RlPijfayAx9jDeucsrTSy85Y3Fg9NOXYvVKfkwu4f85b7BX1GCrpMI%2BTs4RPEPlorUwtyg5RREAh5%2Frc7c40HMEC%2FB2Uwms6tzFiZ17BfAR9F21LhCtNDUleAAg6toyxZdgsqPDSfMLmOD%2BRSHAJV90t11u5RiF2fZ0R1UAhWli9dUdjwYC2UKcSaacpUegNcN66%2FVIkeuIVqR7qX1X3flGT6e46qzLxPa1qHFLF0bBeqkBPiWbSpn%2BXUL5Zdu%2F%2BkhHDqeLjusuMlpGB0wce2dIMGXTZBzVd8HqxGvHRV4dw4%2FyqDvUGcNvWbOwg0O0Oi9P1MoxzQ70wbFiraBPfYtn%2Bp9nng3%2BlVd8Iu742HmE6Y%2FxPd4NipZT5JqH682Uuwy%2BWBI653MEVpnlyCZijoUAc9kMOubjR3M%2FqDJ2lV8KwJTl0IbS6NCMMtRBa1%2BRtcCn2qMhWyLXmLPQlrdOUHQNur3GZepDX90t3vo%2FWH%2F%2FSroEzhBaSCYVHUVDTLsrRBEayXmydfOgWjGBzDA1Y3ABjqkASCdOZiHoxUX3BrsXTI3CEOvvS1O6kLk1ljzC%2By%2BHq1LMjfk6csy7W2Z5ZQ9S7CQHuu%2FB3h%2Fp5YXTkOQICT%2FhUeIeksuGFvcUXj0h9lLH3sMcGcFd8KpRqyef%2FYdQ%2FoIFaLvyny%2Fp3pRMDD76vfKltUWD2abijM1BisLAgwyeW53qiP8oOGgwyRuSM800V87l5%2Fn%2FB%2B23dJgBKtsXE%2BSegBGP5Fk&X-Amz-Signature=a13b4576910af4647652a641bd28e615e12cfb863aa583a2131137fa148d8e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACKQ3JL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCySczwCaBN8fpkYORvbhWogye4JomI0XWIWhCk%2BwyC5gIgZTKx3Q6tnfLDij3%2B3SoB0VqXjm%2BLi2wZ0DwkMlm6zREqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG77jB1yIT69JK7QjyrcA%2FTSLI2Xphj1mGHBnqf2dYcJNe8PDw0i9su%2FNQ13lWmfh7%2FCqTVYdriy0SEh%2BO8C%2B82AFkanwRJhgZKPMBzpSW40vnH63QJwZxO%2FZIprzaMdTw2FQplr3ACPnjqrgyZNHAMqhkDS2sECyKiMIdtrOGSDujTtM8wdQJ67QapL%2FuxPWG6YM%2BQ4becK9xRDuIZB8BghoK5cOncM%2FOfDmESTscQ4Ex5IBkh1VpDxHdogp2soiMcext8UXEnKnN3KmSPn%2FaDnTEyE29SBCgTkB4RLpFIODwubBHYFpUG0iej5ksEGEb3uDZwIayNmiQCaFtT6TqeNxedFjIuCS%2Fv5Kdq0s%2FLNd64RxbDah2pY4%2BGPygnkAjCznTDytzQXjG2v%2FoRxQdETSr2MhnpMhNmh88K58ZeKv7Paqlu3P%2By2QCfh%2FiuKRK96iao9mbKC3WShdNXFh1uVginpjjGnucY0IqF%2FwsshjH4G9ZlUkBQUF2RWrJfc%2BMJSSdO5r%2B7fmB%2FyuBZZP7SClvDcuZuxDR1PqIVB8MjZ4HplvjbTMOV7vCH0sRiIXSqSedR1cS5nFdNoBKUHhLQ5pmeK14jabXfEY5NSfdGcShGUsoSJRUysVY7IrCxEfkWvqATdXBE9wlX4MPL7jMAGOqUBCav02bOx7t0VUu5%2FE%2FcJyxDXV8yN7%2F0Qe%2BFhQKnn60QRO8ppqxQclk35m%2FzacQ2FcazP%2FGviAQfEoc7sB7yTCa4KnXMbr%2FdXUczCeCV0amsCbL62d2XU110R%2Fu8EopvTJZPf%2BT5N2djo8%2BwJqqhxtTlq0eDOjqUGZEqQkBFSnb6mm3voncaZWMfJhZ85ud0WUxqtBudaJY2u1SyoQk6O5%2BKHgi5%2F&X-Amz-Signature=99c08cd549bc4eee3d1a22d9cf24976cf861e9e2bbb2c6ae60ccada1d92cf4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TBX4PX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKXf7HeApoRk%2BVG9K%2BtYdlOFXvC615vrql5ZnDXNTvCAiEAnnsIXqbugnOfgjukJIGEuoJIFL4hP%2BhyrHvTLgyyab8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd5xEQQx%2FTyJWMQNSrcA4ZF0tETSFiPC%2BreUh9AXx3jYMTzp8BoLQk%2FZWsTlrtBEVBEsRst6dL7RURjerDIXVaouEsynVyVlfDXJ97yzHqgEHNEYB3fyWsp1ubomw8fvimYm%2FEjAguiTfDmUU9D5C%2BUmpBFSsvSkEOvtdAVCkTERovzJ0HhoP1%2FHYuHdMUsf2yGzLVMVwOotH2dBwbGw1524YQ%2Biy2ELtmDi2%2B6NsYKWJAXFwgdcRYrmT9T31iOJaLdaa%2FKZP5GMVlaaQDkDW3p3ypNrRjfpmBc1ZRYWHaEIGK%2Bh8oh9aIfO3TCJBX2mYRiz6DVhJMKaA0DANKX%2BCnr8jqZDDV1VWvURLpyBu6ox5e43pbZy1rJdkA4Hx7yMkyLHnwrHzvUbfgDhjERoNyPg6e%2F1RASPYyms1CtuPKM%2BF3boBjTFIMHf8li9FlkOx2jkUd3NFEVJezLone6dN7oMGW%2FhHim3oh4raKt6a%2F%2FD9rzOUChzkceC5VaesrrEeY7pCRp160I6RENCp%2Fv4vr7TiCl1PS8N7ekBeZsZTCSJpnBn1o7M%2BUL51kCVKWGWoDMSJwWtz62d0BdYdOCrOMiT8pHkGRY0hA%2BQg5KjC3LZ19O%2FRBwQzT6bbJlwKa3rvrWuU%2F8zkFld2xDMP78jMAGOqUB9c6r3y2T9wLEadEQ%2FINQnvlPjiQ01moAjwp7jQPK0QkplHZyrHh4NTGhQP%2BWNPQB4gxDz30zj%2B%2BX2UQUVInoGddZVbcNxka7WhOg5CPX%2FSEawGM4KyLhnsb1SkmdXGhSOvXlU8%2B1qLFikKH%2BiAIz%2FE5QDSyv2fCIc5bXJzOeFzGXYMQid7MBdvf8I4xJNvQBBhsRHUUDL6UEfwvrAuHU3DyrCSII&X-Amz-Signature=e4e65ebe0866e9e4beca057bcdffead445cc275c4a41d2e8fa5d682d6a121078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6Z4C2S%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC7hgZj512k4SkZGhBTDrdaeWJFQ68VCfLLXle4uF5kQwIhAKOKl60vmPXHOXCRyHk6st851JxAiPynK%2BNFoGEGlkRHKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW0e7HgS2r3NFuFDAq3ANlPdGrNkYrZl0wtGwaY2ekmP1I3Bzd7T3LAi%2FdSnb6ksZMMOKEqOTVsNNguGjcC%2Fx21C1Cd8ftPB6myBOJkVYfWLSbf%2BNKoyxRNJY%2FO0EGl5RlPijfayAx9jDeucsrTSy85Y3Fg9NOXYvVKfkwu4f85b7BX1GCrpMI%2BTs4RPEPlorUwtyg5RREAh5%2Frc7c40HMEC%2FB2Uwms6tzFiZ17BfAR9F21LhCtNDUleAAg6toyxZdgsqPDSfMLmOD%2BRSHAJV90t11u5RiF2fZ0R1UAhWli9dUdjwYC2UKcSaacpUegNcN66%2FVIkeuIVqR7qX1X3flGT6e46qzLxPa1qHFLF0bBeqkBPiWbSpn%2BXUL5Zdu%2F%2BkhHDqeLjusuMlpGB0wce2dIMGXTZBzVd8HqxGvHRV4dw4%2FyqDvUGcNvWbOwg0O0Oi9P1MoxzQ70wbFiraBPfYtn%2Bp9nng3%2BlVd8Iu742HmE6Y%2FxPd4NipZT5JqH682Uuwy%2BWBI653MEVpnlyCZijoUAc9kMOubjR3M%2FqDJ2lV8KwJTl0IbS6NCMMtRBa1%2BRtcCn2qMhWyLXmLPQlrdOUHQNur3GZepDX90t3vo%2FWH%2F%2FSroEzhBaSCYVHUVDTLsrRBEayXmydfOgWjGBzDA1Y3ABjqkASCdOZiHoxUX3BrsXTI3CEOvvS1O6kLk1ljzC%2By%2BHq1LMjfk6csy7W2Z5ZQ9S7CQHuu%2FB3h%2Fp5YXTkOQICT%2FhUeIeksuGFvcUXj0h9lLH3sMcGcFd8KpRqyef%2FYdQ%2FoIFaLvyny%2Fp3pRMDD76vfKltUWD2abijM1BisLAgwyeW53qiP8oOGgwyRuSM800V87l5%2Fn%2FB%2B23dJgBKtsXE%2BSegBGP5Fk&X-Amz-Signature=8edcf165e01edd245d25f73b5e90e6a08d31509f3867143b388fb2b0f140ada7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
