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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6YV3BOI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTpWumRkP9jCKUcuoJPd3KnSwCkaSqPl2y5SDZF9Tw5QIgHJ28w%2BmqzpPws28r0blrTP1ILciwb8GV7WaIzn1j92Eq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGJsBgSDIMoEQDtxmSrcA6Jvd16mTbX1qtolZ%2Bg3qyIvgcE3jkO0JKkDOudtiwSiHBwgMFiNl%2BjNqYv557usUsFxMSR9%2BH5kTP29t9t98fcI1bnfDQF9UqOs6er6fwQCnzvxsd7i2%2FZLDVPgx72oVW%2BlJJIRqW1cFhblNappjHSBElDKN1fcyyaMgyjea6vrpxkS%2BxBSPTZypcUwDlM3hlxEXwPIp9snbl8E7jGxjQFb2hNzY8bWWp%2FrLFfUKGZSNPyNs5ujPvFAK1e6UU6Wc4BJWysUKCjr6iVO%2Ffc7XsuCZmxYLZr2OaESSRZeZFUz0A32h8PsSesfBbuSjjYr9ebARGM1m1zhZOzwG00zs9%2FzxtV%2FXRV%2BxDCwfN3x0Hz9qsc%2FFXS9SjwOrZrHYpnAC%2FonPXWjBwKl%2FJ9lIF2gaprI7SlD5xtwQu1NKrYcczEK13z8b23B4sTLHyos8%2Fuo6PNXEbYg2dlax%2BWZfofK6WCGMrhWJ9XVStHj7hr5jLJcAfilwN78WUadEA6IGE8%2BesIV6OJaq6gL%2Boz1dVuYCdR4dWM5pHfvhVsj967R%2BwKmFcKZKqjJcSwurGKTnDjATMUKHP%2BViaHg%2BNYNIsFDo5gPcBPjPGoPW6gcx0W5gnd%2BN2O0FHmIB0%2FOenS9MIqMuMAGOqUBBcSF35X0Z%2F7NWHrVYRphE2GYhiZ9Eb9j3NJWovEbSVO29zqEIeQ9WuWFgARp9wJI0FwaTPzqrF8zIpI4Wcg2T4js978DBZe9jyOf3Zfuw1dQM35UMoj8%2FWlmJF0oK6htNWlrxIG1do77gA4sylqtuJg%2Ff2oyXVfZC3drQoR2ull3si6sOQC21bhabpptA29DHcgR20mJHLNzeTYWYbAeh37TYkAH&X-Amz-Signature=7cc18d50e835f8b313ef12288b05d0822004dc973dd271292014eaf5d57cfde5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6YV3BOI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTpWumRkP9jCKUcuoJPd3KnSwCkaSqPl2y5SDZF9Tw5QIgHJ28w%2BmqzpPws28r0blrTP1ILciwb8GV7WaIzn1j92Eq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGJsBgSDIMoEQDtxmSrcA6Jvd16mTbX1qtolZ%2Bg3qyIvgcE3jkO0JKkDOudtiwSiHBwgMFiNl%2BjNqYv557usUsFxMSR9%2BH5kTP29t9t98fcI1bnfDQF9UqOs6er6fwQCnzvxsd7i2%2FZLDVPgx72oVW%2BlJJIRqW1cFhblNappjHSBElDKN1fcyyaMgyjea6vrpxkS%2BxBSPTZypcUwDlM3hlxEXwPIp9snbl8E7jGxjQFb2hNzY8bWWp%2FrLFfUKGZSNPyNs5ujPvFAK1e6UU6Wc4BJWysUKCjr6iVO%2Ffc7XsuCZmxYLZr2OaESSRZeZFUz0A32h8PsSesfBbuSjjYr9ebARGM1m1zhZOzwG00zs9%2FzxtV%2FXRV%2BxDCwfN3x0Hz9qsc%2FFXS9SjwOrZrHYpnAC%2FonPXWjBwKl%2FJ9lIF2gaprI7SlD5xtwQu1NKrYcczEK13z8b23B4sTLHyos8%2Fuo6PNXEbYg2dlax%2BWZfofK6WCGMrhWJ9XVStHj7hr5jLJcAfilwN78WUadEA6IGE8%2BesIV6OJaq6gL%2Boz1dVuYCdR4dWM5pHfvhVsj967R%2BwKmFcKZKqjJcSwurGKTnDjATMUKHP%2BViaHg%2BNYNIsFDo5gPcBPjPGoPW6gcx0W5gnd%2BN2O0FHmIB0%2FOenS9MIqMuMAGOqUBBcSF35X0Z%2F7NWHrVYRphE2GYhiZ9Eb9j3NJWovEbSVO29zqEIeQ9WuWFgARp9wJI0FwaTPzqrF8zIpI4Wcg2T4js978DBZe9jyOf3Zfuw1dQM35UMoj8%2FWlmJF0oK6htNWlrxIG1do77gA4sylqtuJg%2Ff2oyXVfZC3drQoR2ull3si6sOQC21bhabpptA29DHcgR20mJHLNzeTYWYbAeh37TYkAH&X-Amz-Signature=2287addf28975d6271386d46a2a94890d4ad6934f64ca9870cda0e2b210b599a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXQBZJQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuz4p1F88ee2mba%2FBur%2BY0yznvw9ohSm1ESknG%2BIY2TAiB9PkvijAuV6MofiwHRFoYSNxV%2FOTz%2F7WYqg%2Fa7lIMa8Cr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8G3MpVpmzdeXFjCNKtwDQ3YpA9Y5gv2TpsK%2BCx0iWcEG4iCY7crWDsnaT7%2FdmBPBbK%2FJOcbf67mndFLlu3%2B1uRJzBLNVYgeNxOih91Pe7L21pMvcGHczDMqLl95BMv3KPDmutS9pXuMhQNx0ewsLrc4iCMnL3PWGBKxd365TIcxj%2F0AXYYOVZB%2BVPRbITXk7TjTccKdvSjAwJ45%2FJuu0kNxCSkMhYfYwAUf1pZPSZ2rvdfnuZN4K55rb7OI7J6v0szQVEiUSUZzSokGfjrFZuxyb%2BcxKTqMVAxE9b4sTJPayhsHiUburyhJUutWjoxXTEdeHS87FGq0kVgAgTWXsTHTwiVa%2BWsUR4SyDy6Lx7KUQMv0fU%2BSz%2F%2F7qMzyAuzQaOgUX6T%2BTy90exr3xvOw4HeYfen1694CUlHcv8Qf0%2FmsQePotaldO%2FxjHDsGI7EJSqapJwP%2B9lqydTD65I4syuuO0j%2BJ%2BFMtJLlAWJ2bo4spI8gIfXqJzKv%2FpBVgOwY6ArvkxG2DQPMsLzuxQmI8%2BoaFpIzn9V6D6FVcbjSj%2Bz7Zj281nXLs2OjpKEN5y8xyIYgKI%2FQeyMzfmV%2BTKVZJLQiyfyNGOD7qtbNcHfHGoeQD644fjwqkxiyMTtTMCuoWjg5PB8Lvjoq0a%2FgUwrIy4wAY6pgFnZG7n3yY%2FX8DwGGEPDc%2FoS8FWvFudxocrLcldhM1TYZ5vtVd3xeuBpIpLWHczSPNWFNW8pMrfHwgAlEh%2Fbder0IwNu8um57ez1XYlw2bzAn9DyDnk7MuvvKtp4FRkRQzcnVARZDNRP2M%2Bk6nbK1wWt1C6Xl%2BTrqpmuNFgpcnoDrXCWb9hkQQFj4zKNVams2OAfu22EwPmUvbZD3bwdWzr5Ji7LdbD&X-Amz-Signature=68ef359e9a347b5b2047dd2e62f9491603ebb7d4f67cd3dd0845aae382e33dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNENPLRN%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9Cvb%2BNTtut9MwTg%2B5vot5HDKzBOi94nQqhPHOjhn4YAiEAkg6kV%2FQDvwOJxi0I6mJctP03sP5YALTEpHhS1%2Fj6bIsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC1GB3e4P3Upe0it1CrcAxtBAq3ndO8kehUHFfij%2BKkWzSJWwburPzGWbEMIrFfwYKixQRzzUjvwNsSVoTqCsaUbzn0bbh5dwBIF1g3cUaKnTtmiLq3wh3%2BuewQdtm9zhY6KbhbsZCYUPTHYi8J0wpiS0VfeMereCPtrwZMz58LeY0yYa5A%2Be8yBXjM5S0PRSis8URA2kNJq6CdAdhEBRIOuKxIbn%2B2LCfSUm2P1fnCurAD7JVVGpGd8OObC7a4QcvIhXzjzZ5e8u%2BdmSMEYROuAECXHj1cCxpcrdDlNHUpRdP%2BIy5BLckOvpk2iFEtiR2JNsOlNWl9tHjj38NLNYW4awToXKyx3b02wTwoTLkWg0BqKtrEogUK%2F4bvuzutfj7q7RLcwMAyeJv6k8BCXa8QRQeqOTaeAl8%2FAi9B2%2BMn0hTtb9dqIXOKdi85F5BroleqfwrB6NkHQBFSo0sh4ZxQA3y0iS507nWQ0iJ0BTlXsvhaijnq%2FxC8K2NCacDxi3L7aX25F0m0rzkNQSG2PQekG5jyiX7m9PR5HttN1rle7LoaNZFQVTcagP2qt3QCjrO0cXBmkTXNZBgYRjUCKagTr3qt6moErEEkziuFUX3U1K76V7YqZTTbikQlVUCoNP0dK0EfxrYjTngsZMIiMuMAGOqUBiUpV4dicwcNxmqLIk3su6XIKjL5%2BHlu2t4at4%2BGSyf9IWBJroAOYD%2BvY9VarRSEJ4gSuDMDULdr3MrcZ3vJKE0kMpEVam%2FGqnZnNpwhlj8UrXpy6sdrtll2SlF%2FmqrjS4JerCIQ8kb4mcfJFc6XA6zBnVAA8TWHOFbKal%2B9Azu7DotQAlbrGxHReVYANkyZ1ZaAmjfouLfYvPFIbz34QmF%2F82Nk%2B&X-Amz-Signature=51f8e851fe3224cb4b33c6c9679a271f58b08007146ac3a3ce769c6aa4642c54&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6YV3BOI%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTpWumRkP9jCKUcuoJPd3KnSwCkaSqPl2y5SDZF9Tw5QIgHJ28w%2BmqzpPws28r0blrTP1ILciwb8GV7WaIzn1j92Eq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGJsBgSDIMoEQDtxmSrcA6Jvd16mTbX1qtolZ%2Bg3qyIvgcE3jkO0JKkDOudtiwSiHBwgMFiNl%2BjNqYv557usUsFxMSR9%2BH5kTP29t9t98fcI1bnfDQF9UqOs6er6fwQCnzvxsd7i2%2FZLDVPgx72oVW%2BlJJIRqW1cFhblNappjHSBElDKN1fcyyaMgyjea6vrpxkS%2BxBSPTZypcUwDlM3hlxEXwPIp9snbl8E7jGxjQFb2hNzY8bWWp%2FrLFfUKGZSNPyNs5ujPvFAK1e6UU6Wc4BJWysUKCjr6iVO%2Ffc7XsuCZmxYLZr2OaESSRZeZFUz0A32h8PsSesfBbuSjjYr9ebARGM1m1zhZOzwG00zs9%2FzxtV%2FXRV%2BxDCwfN3x0Hz9qsc%2FFXS9SjwOrZrHYpnAC%2FonPXWjBwKl%2FJ9lIF2gaprI7SlD5xtwQu1NKrYcczEK13z8b23B4sTLHyos8%2Fuo6PNXEbYg2dlax%2BWZfofK6WCGMrhWJ9XVStHj7hr5jLJcAfilwN78WUadEA6IGE8%2BesIV6OJaq6gL%2Boz1dVuYCdR4dWM5pHfvhVsj967R%2BwKmFcKZKqjJcSwurGKTnDjATMUKHP%2BViaHg%2BNYNIsFDo5gPcBPjPGoPW6gcx0W5gnd%2BN2O0FHmIB0%2FOenS9MIqMuMAGOqUBBcSF35X0Z%2F7NWHrVYRphE2GYhiZ9Eb9j3NJWovEbSVO29zqEIeQ9WuWFgARp9wJI0FwaTPzqrF8zIpI4Wcg2T4js978DBZe9jyOf3Zfuw1dQM35UMoj8%2FWlmJF0oK6htNWlrxIG1do77gA4sylqtuJg%2Ff2oyXVfZC3drQoR2ull3si6sOQC21bhabpptA29DHcgR20mJHLNzeTYWYbAeh37TYkAH&X-Amz-Signature=9a112d0dd83fec6abeda07614c311b889081ff74ef0f555a839d1c6d97166931&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
