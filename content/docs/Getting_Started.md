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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBRIR2U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMVsZ2q6WFoE1zvZWan%2Fnz%2FklzImrlywIHQ9N7BzrGKwIgFa2y10OGd%2FpPNQQEwfeRcIo9vCBgrYYWhXIF%2FD2y%2B%2BwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpQznlxGyTij8qyPCrcAxg8hkmQgrVSSODYrr46Bhjq%2FlFR9NRo97WlvMXg3hksxp0nwYD3WzKsmZZsYEvY9XjeetvVpD21Xm2kkIVr2vilPFhiBAh6Xv%2FBH4CFbLWy3Cvo5OyyB9ZdmrCEmscqSQaR3M%2Fyz14hlqwDsE5%2Bkm%2FFMhLMR%2FOUF9wRye5%2FU2mnM842wDqN3HP3IWStI0TVmtsOmstMArKptJGnD8J0gKUcTlDJKrP8Xbxixpugj1OBIn3sx3uTKTJccNSKYPo%2FIPhDS3iEyL4td%2BI0N9POD8d%2FIT1Qb357ZJ7A51ogQTNweILzV5TFfkbJAJ8qzoJd2DCmqOU2xVNi%2BI2Sr%2F%2FmsGNG4FT%2FkZQOFGtePbWQ0JdqtonDSp0Phl7Jw8JyEX10xBdiPS1X9T7IDVza7c2be856nNdJLE3ZPahF2MSrNJnhh10ygIuenCCUsej8PZTWrpAM9fChpR3PrLh%2FWCO9cA5WFZzWQ4H2%2B7HPLfEBYS2cMLoKp4WlCzW%2BoqfmAMcre2CRniGtvqpw8MzaC9OJJDa50phVX36qIo9hoGtgZDHJEhn9wVj%2BkW2cAX5TaNj4d4s%2BDUQZ1kVY4DZBD%2BJDpzsiKGj4q8O0r46x6N0ALjpWGmErJig9j4iSf5TbMI%2BExsMGOqUBBbYIt%2FEkV3S08YAVNu5jn%2Bx3vhG6ISuAcDAjan85OJuY75%2Ft8JQhiNpVo4Xv1EMo4zpmdLHpG2AgZkBy%2FtqJtEQOHhkkEJmmzmeAK90ExSdyaDWJPvSLvI%2B6cOjcvt9pp%2FvfHHsL9lQ0XkQkcOj9PB3TaMWKVo5xFLUQclz%2BD%2BFELsCAgHPFpInLUWZ%2FxcYrlaZ8vsSaGUfMYBvbc5aGVgFOj5av&X-Amz-Signature=90eebf4adf89a8e04ad4c0328ae5b49686811ab85ab8dfbe0030b13b4d576fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBRIR2U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMVsZ2q6WFoE1zvZWan%2Fnz%2FklzImrlywIHQ9N7BzrGKwIgFa2y10OGd%2FpPNQQEwfeRcIo9vCBgrYYWhXIF%2FD2y%2B%2BwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpQznlxGyTij8qyPCrcAxg8hkmQgrVSSODYrr46Bhjq%2FlFR9NRo97WlvMXg3hksxp0nwYD3WzKsmZZsYEvY9XjeetvVpD21Xm2kkIVr2vilPFhiBAh6Xv%2FBH4CFbLWy3Cvo5OyyB9ZdmrCEmscqSQaR3M%2Fyz14hlqwDsE5%2Bkm%2FFMhLMR%2FOUF9wRye5%2FU2mnM842wDqN3HP3IWStI0TVmtsOmstMArKptJGnD8J0gKUcTlDJKrP8Xbxixpugj1OBIn3sx3uTKTJccNSKYPo%2FIPhDS3iEyL4td%2BI0N9POD8d%2FIT1Qb357ZJ7A51ogQTNweILzV5TFfkbJAJ8qzoJd2DCmqOU2xVNi%2BI2Sr%2F%2FmsGNG4FT%2FkZQOFGtePbWQ0JdqtonDSp0Phl7Jw8JyEX10xBdiPS1X9T7IDVza7c2be856nNdJLE3ZPahF2MSrNJnhh10ygIuenCCUsej8PZTWrpAM9fChpR3PrLh%2FWCO9cA5WFZzWQ4H2%2B7HPLfEBYS2cMLoKp4WlCzW%2BoqfmAMcre2CRniGtvqpw8MzaC9OJJDa50phVX36qIo9hoGtgZDHJEhn9wVj%2BkW2cAX5TaNj4d4s%2BDUQZ1kVY4DZBD%2BJDpzsiKGj4q8O0r46x6N0ALjpWGmErJig9j4iSf5TbMI%2BExsMGOqUBBbYIt%2FEkV3S08YAVNu5jn%2Bx3vhG6ISuAcDAjan85OJuY75%2Ft8JQhiNpVo4Xv1EMo4zpmdLHpG2AgZkBy%2FtqJtEQOHhkkEJmmzmeAK90ExSdyaDWJPvSLvI%2B6cOjcvt9pp%2FvfHHsL9lQ0XkQkcOj9PB3TaMWKVo5xFLUQclz%2BD%2BFELsCAgHPFpInLUWZ%2FxcYrlaZ8vsSaGUfMYBvbc5aGVgFOj5av&X-Amz-Signature=bf983f1daaaa83af536559193a95f8a4b550a3314485133491f25d91d463171e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBRIR2U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMVsZ2q6WFoE1zvZWan%2Fnz%2FklzImrlywIHQ9N7BzrGKwIgFa2y10OGd%2FpPNQQEwfeRcIo9vCBgrYYWhXIF%2FD2y%2B%2BwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpQznlxGyTij8qyPCrcAxg8hkmQgrVSSODYrr46Bhjq%2FlFR9NRo97WlvMXg3hksxp0nwYD3WzKsmZZsYEvY9XjeetvVpD21Xm2kkIVr2vilPFhiBAh6Xv%2FBH4CFbLWy3Cvo5OyyB9ZdmrCEmscqSQaR3M%2Fyz14hlqwDsE5%2Bkm%2FFMhLMR%2FOUF9wRye5%2FU2mnM842wDqN3HP3IWStI0TVmtsOmstMArKptJGnD8J0gKUcTlDJKrP8Xbxixpugj1OBIn3sx3uTKTJccNSKYPo%2FIPhDS3iEyL4td%2BI0N9POD8d%2FIT1Qb357ZJ7A51ogQTNweILzV5TFfkbJAJ8qzoJd2DCmqOU2xVNi%2BI2Sr%2F%2FmsGNG4FT%2FkZQOFGtePbWQ0JdqtonDSp0Phl7Jw8JyEX10xBdiPS1X9T7IDVza7c2be856nNdJLE3ZPahF2MSrNJnhh10ygIuenCCUsej8PZTWrpAM9fChpR3PrLh%2FWCO9cA5WFZzWQ4H2%2B7HPLfEBYS2cMLoKp4WlCzW%2BoqfmAMcre2CRniGtvqpw8MzaC9OJJDa50phVX36qIo9hoGtgZDHJEhn9wVj%2BkW2cAX5TaNj4d4s%2BDUQZ1kVY4DZBD%2BJDpzsiKGj4q8O0r46x6N0ALjpWGmErJig9j4iSf5TbMI%2BExsMGOqUBBbYIt%2FEkV3S08YAVNu5jn%2Bx3vhG6ISuAcDAjan85OJuY75%2Ft8JQhiNpVo4Xv1EMo4zpmdLHpG2AgZkBy%2FtqJtEQOHhkkEJmmzmeAK90ExSdyaDWJPvSLvI%2B6cOjcvt9pp%2FvfHHsL9lQ0XkQkcOj9PB3TaMWKVo5xFLUQclz%2BD%2BFELsCAgHPFpInLUWZ%2FxcYrlaZ8vsSaGUfMYBvbc5aGVgFOj5av&X-Amz-Signature=1eb4ba4c22b59ca0bd9fdee4bc6a2f3142eeb9b6efaadcc8ae95a66ec44e990c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHMLXPPJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9px3cdmAFUz0KH8qeQcavzwC5aF0VinwawiWMzVaMhwIgBm%2FTWIX7ondDMZwpsZKUjocAhiAbUPVfwkIgbUKyBlgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARLoFwFs6p9m7wFRSrcA4bTbJXyOlrgnmzSY2nR5R4sFte2cZhs88EbL5HbNg%2BiXW8SgzhrFARXyl%2BmwqEVocwFSgG32lSBaa0CIp0LzIPSKpwia3lowVyB%2B4im03DT2UpG97eGp4ESsUctdVRPAaXY7UDoPJkmCsCH5y64BDBvSA87TqJCR4oBS%2FBzdYug788h693RWFvWWqdaqk%2FoKOGOjjZppeEs9ewZoaSnVWBjRZb9rV0VKl9mwroQVI4FWII6%2ByH5WmjhKQlTJ50GpaIN6FVpQ8NKk0caPVOssOJAsTpKN0HR3It0jg3m5BGnYVBrdluD75CoQFKlxPvhTEaptG249CDDxnwUcqQwSrQEXb0O5fDRZxKbN%2BnuQAX3oGY%2Bt%2F1wAVzLI768ovXioSlJINBck6vXTmWsW8Iqjnc%2BLcVygPSoc%2FhsoGWyvM6rjBc1aNIJwHs8XcHCEcHbnKxea9oiCRQvaS5x79nzYXF%2FYqdv6o4VZHshJ5YEgKVE4UueM8xEsKsWxv8c7v22YaYfrSjYwh%2BHhmMmTc7I7LlFvHkulftVHt8Zy%2FxbQ3LxRH4%2Foft1721zr%2FkjaxGi8TT%2BMflTtxd7NtTgRIaS7aj6iyVUf1ySc%2B1TFkL85EN%2FkgVJDbEPs%2BbTxx5bMJmDxsMGOqUBdsWaQE4bi9SBY%2Fbt1yBhzvIwEpthbNd6UZwD96uxo0m4E%2BU7VsqbBVrSSDCuR3wdW5K0Pl1c2ouxa0y4QjcCLWD%2BJraLZX9m21eIC05OCeoJJwXUKFE08RinczBqnAzriDAVqdgecGC5L2pNxANZAppTldmMxmSRG9kvtWu8HXVRl%2FwdB74%2FYf9GhJuNfSMnDTrQCdHT3Dnwc7XCTnNgaiyrgqEg&X-Amz-Signature=15be8aefe1b27e2c24f394a14acb105c97b57c5dd50e8770c741b6ad3297c60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526NKXSY%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FzItVYsm%2FrubBAgzIHddMvKGqvAf3sMzXAS1j5KOpGgIhAOi2ifd6cwh43FbJ%2F9rvtbc%2B4%2B9uzMDFat2%2BYRcHAoJ4KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl%2FxcmKTskGqspQeoq3APIuOAY0VypizGEdBfM6Wxbr5%2Fx3%2F9z6Yz28%2FvQJQYDyvQb2FF17pEaL%2BThJFdzpT85kZEuJzuMrDRRNrvtpfQl8abamSdXluUfPR8hSRPrE3DueJTOw3Ogp3uwj%2FmJ1qogaZdU0T9kS1lh0ngIeOzMYDk3iRXwB6P6JlvEF%2Fejg%2FDG1tL%2B%2BHzhG41CyM7LyAv9gjiZharrI4N1jlYdhZFDc57fUPRy8YkISdSgg%2BTp6ztqA%2BuZs0bPra2DZ3%2FIfSgY3FCuLy4BXTURS5egMpS8QvViaTyRN1zcuLTjFhHq3IskeJRs0QWOiG3iifFD48ENkLMxECrePfTUK7kgdRpKzRtK19oAzEsS5qIw0XD6sO%2FrNazvNz6nw%2FPiFdBiH%2B%2Fykzl%2Bs6nkH1dxPARgWC5NP3E%2F6M648xItUbDBPMUlkwMQDNFMgUI5HZuY1SZtf4VD0EMyK06KLlKUZZ3A5BxJ6t5SVfZjxT5M%2BPBF7qUXk%2FH7cFHaaTrIMg%2F64v03LV2EmRLYQbHJ52t1MnXY9W4fRvRUv0EB81zu6w3b%2FGQ3EC46MSZ1hLfmq0WXkILlH1lb%2B7jfKTUgTVLufFdhlu6zWFG6drln31bVfz96l0o4u0%2BR1QlhQOSWh7fHEDCWhMbDBjqkATV1lbOHwf5vUpAH2Tyv34d7zS4PVXiM9q3yPTc9gYODHbg1Pi9wRD8N0%2BHox%2FEAvjGzlWjnWOBZ%2B2xIORc%2Fk2QIjkS4hT%2F%2BWN6sl%2FxtJUJ7S5uNjOh29KaeuNXuJXa61B%2FNVtYBNdpte2kTYvL2zeeMc7txCf7dhP5yiNGmjcl2aGJmuj6BHHEXSCwjk69Zmk3PKvpBpjjmnf3esTv%2B%2FrWcyGtw&X-Amz-Signature=027b2cd567eef1f506a80dabc246989704c4c6c2768d15f12ba3767d3407cb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJBRIR2U%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMVsZ2q6WFoE1zvZWan%2Fnz%2FklzImrlywIHQ9N7BzrGKwIgFa2y10OGd%2FpPNQQEwfeRcIo9vCBgrYYWhXIF%2FD2y%2B%2BwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpQznlxGyTij8qyPCrcAxg8hkmQgrVSSODYrr46Bhjq%2FlFR9NRo97WlvMXg3hksxp0nwYD3WzKsmZZsYEvY9XjeetvVpD21Xm2kkIVr2vilPFhiBAh6Xv%2FBH4CFbLWy3Cvo5OyyB9ZdmrCEmscqSQaR3M%2Fyz14hlqwDsE5%2Bkm%2FFMhLMR%2FOUF9wRye5%2FU2mnM842wDqN3HP3IWStI0TVmtsOmstMArKptJGnD8J0gKUcTlDJKrP8Xbxixpugj1OBIn3sx3uTKTJccNSKYPo%2FIPhDS3iEyL4td%2BI0N9POD8d%2FIT1Qb357ZJ7A51ogQTNweILzV5TFfkbJAJ8qzoJd2DCmqOU2xVNi%2BI2Sr%2F%2FmsGNG4FT%2FkZQOFGtePbWQ0JdqtonDSp0Phl7Jw8JyEX10xBdiPS1X9T7IDVza7c2be856nNdJLE3ZPahF2MSrNJnhh10ygIuenCCUsej8PZTWrpAM9fChpR3PrLh%2FWCO9cA5WFZzWQ4H2%2B7HPLfEBYS2cMLoKp4WlCzW%2BoqfmAMcre2CRniGtvqpw8MzaC9OJJDa50phVX36qIo9hoGtgZDHJEhn9wVj%2BkW2cAX5TaNj4d4s%2BDUQZ1kVY4DZBD%2BJDpzsiKGj4q8O0r46x6N0ALjpWGmErJig9j4iSf5TbMI%2BExsMGOqUBBbYIt%2FEkV3S08YAVNu5jn%2Bx3vhG6ISuAcDAjan85OJuY75%2Ft8JQhiNpVo4Xv1EMo4zpmdLHpG2AgZkBy%2FtqJtEQOHhkkEJmmzmeAK90ExSdyaDWJPvSLvI%2B6cOjcvt9pp%2FvfHHsL9lQ0XkQkcOj9PB3TaMWKVo5xFLUQclz%2BD%2BFELsCAgHPFpInLUWZ%2FxcYrlaZ8vsSaGUfMYBvbc5aGVgFOj5av&X-Amz-Signature=72a7663d6636c454107b6aa1956f03e31099843db63192955ea7c5faf6ca1342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
