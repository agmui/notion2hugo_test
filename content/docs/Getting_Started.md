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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBNBVUB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2FYor%2FryxVnh0KS61fQVPfjL5GwS4Ueq%2FofF9f%2BxcZwIgQgp6jmS5TW55MbFjqXnAPA1bBqwJUfom6cnOdV3wuhcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPJDnpfPxcggeC%2BnCrcA%2BaLZokXqpISNc5DZls5zdWjGDSF2q4842MrDxX3XoB%2F7ntyqCDn0x84dmpwEUantTYfwap8ftk3UaWxj0pAUNNZqJvOB%2Fbad8MkqOuuJAUWuH1kJ%2BC6gEvzeNCLMR3jfDAb30lL70m8b%2BkLLzAvxHDdFaiV%2Fn7qbvaLo0hT3YcQm%2F%2Fxbij2YlNcy0pLZpv3I5b3k5UZmV9mNW0vis4jTd4vZB5QmFm2NDaZc6wwrdLmA%2BIGvaNeIRUxTSKV8BzELiiV7JxNIeiYlO2krkhwi%2BGLcEqESblZ%2BPYPO7h6Z2AjCOhBOKYRcvg8Tv13AlWrYrDEWC8YSCmBE6hmVRYKQUDSwVLXB2gE5%2BNccLCovmMmd08qrIiivygNF2fxTMuPN0zrGiPrszXobpCFqV4WwbeinLwfwDdqiu4RwueN3o7CR0OJaSoGyfxrmCrzWc9dnqFNexLzDK671Ap5yXLpsk77ceeYXvFxjU%2Bddv%2FWsd0lFnDxIzJFy5IXhgYCHPBx%2BMoWlhwOAtseqBpafkSPhtqx%2FbiMirNi18b0YvMW9rrtWyUirSJknUIXzQrdl0Czl7xifKDebiqk1sAMx%2FsgF7ltpR6n6RpaoDTo6QNKgzGsJNnUNDmzmmkCqwLOMP6t2b0GOqUBrNlBqPiLNkhLMKoOvKlj21F%2FeYtqYtGK1ICDjE4EyxhLhzp1axSeEnGEb73%2FNwyemLLrtSXxvWDjUnwqgtV5Rcb%2BO03VTGxwVDHsv0Cj%2FjTHMwbTYDdCVVFSyzKD8u1Dt72TqNou5AE7tdnFnOrN1XLCf8B25DQ%2FkFZ8q8Ve6JP8n7E0Ri5j4SVq6MS1be0X71qv6TwHuF3kbOutIWXLYMdSw87B&X-Amz-Signature=f062a590f725b85f5f15a94bb2bd5978cdd5e95b12f0fc7a7fea45ff31500a47&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBNBVUB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2FYor%2FryxVnh0KS61fQVPfjL5GwS4Ueq%2FofF9f%2BxcZwIgQgp6jmS5TW55MbFjqXnAPA1bBqwJUfom6cnOdV3wuhcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPJDnpfPxcggeC%2BnCrcA%2BaLZokXqpISNc5DZls5zdWjGDSF2q4842MrDxX3XoB%2F7ntyqCDn0x84dmpwEUantTYfwap8ftk3UaWxj0pAUNNZqJvOB%2Fbad8MkqOuuJAUWuH1kJ%2BC6gEvzeNCLMR3jfDAb30lL70m8b%2BkLLzAvxHDdFaiV%2Fn7qbvaLo0hT3YcQm%2F%2Fxbij2YlNcy0pLZpv3I5b3k5UZmV9mNW0vis4jTd4vZB5QmFm2NDaZc6wwrdLmA%2BIGvaNeIRUxTSKV8BzELiiV7JxNIeiYlO2krkhwi%2BGLcEqESblZ%2BPYPO7h6Z2AjCOhBOKYRcvg8Tv13AlWrYrDEWC8YSCmBE6hmVRYKQUDSwVLXB2gE5%2BNccLCovmMmd08qrIiivygNF2fxTMuPN0zrGiPrszXobpCFqV4WwbeinLwfwDdqiu4RwueN3o7CR0OJaSoGyfxrmCrzWc9dnqFNexLzDK671Ap5yXLpsk77ceeYXvFxjU%2Bddv%2FWsd0lFnDxIzJFy5IXhgYCHPBx%2BMoWlhwOAtseqBpafkSPhtqx%2FbiMirNi18b0YvMW9rrtWyUirSJknUIXzQrdl0Czl7xifKDebiqk1sAMx%2FsgF7ltpR6n6RpaoDTo6QNKgzGsJNnUNDmzmmkCqwLOMP6t2b0GOqUBrNlBqPiLNkhLMKoOvKlj21F%2FeYtqYtGK1ICDjE4EyxhLhzp1axSeEnGEb73%2FNwyemLLrtSXxvWDjUnwqgtV5Rcb%2BO03VTGxwVDHsv0Cj%2FjTHMwbTYDdCVVFSyzKD8u1Dt72TqNou5AE7tdnFnOrN1XLCf8B25DQ%2FkFZ8q8Ve6JP8n7E0Ri5j4SVq6MS1be0X71qv6TwHuF3kbOutIWXLYMdSw87B&X-Amz-Signature=1e7e8825c2e553b7a7ee89e47129a91b27e485fea6c4779564ae173c589eaf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQZJWIO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2gdiqYxRWNEUXrZNvP1Rjh5e8J66UFyfPGEM%2BL%2FA9BAiEA2rTvVW8lZEsESRkgfYnIvU5Q0Dv%2BFiVlO2JEMFil3BsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh4JGeDLtO5%2FWkBwSrcA1aBTDjxZICPvP3VTNh%2B0%2B5pU6BEwUMCClEBGt72%2FpZLXZJTXBop4jxXP%2FBq%2Fe8TCPJ3M%2BvO7R7k61TB52pNRJeR5xKlvouoKVsp7uNAeGj%2BltW5Z0iQTQqHcxkfF9awrIkhtc%2Byp0UOo0xiDL46sBPqiXGELpswQ6vYsHokRrUbE7Mj9EPtW1EYNh0lCwJ081TDV0outc8IVKZOsF1zeRjMFn8EubNg1vTCuwlh5zSUztb6xiOFzIRSs070ZH%2F5rEGFcbuWQvZeWRCFjQ54og%2FtyppU58V63QqL2IXt1nzwDe67s8JQ%2F3waNfma4LvYJOXTC5XxaAKhtb8O1EIC7Yxs6OfNmz0pnjqEXd3RMkY6%2B5075545XInwVOiXMPjMdBamXBroFdQ1S13lcoRpCAfD124TSUJCoM2i5iEXEoHicNg0JZvlA5JyucaOe5TL8zYMgSKXRpfwiZG9rxAR8DyCQ1qBV3HmvPWJtczZsgl6KHSCpy2FqJRh0cR9b%2FQAQ%2FsKOur6eqABec4Bby%2BzU9V2rcR1vYSR2OfcBoaIUMCVm8n%2FZcOgtM%2B%2FncqHj0yxu3AwqdNbf1v5HPPsGGzJltAMoE6GRJy917Hb%2FhD8KWHPh8SzW2lUU3OYOms%2BMOSt2b0GOqUBJ%2FLTqWRD4GrMQ%2BlY%2FeoDje0E2eySPVnTFOg41SmApFGLSJ%2BwV6G4D7h73zp7d%2FIN8JesbWTHYyZ0EtGBn0qIx0QIBZmKc2vEvkn3xLkH%2FcBobnFjL%2B%2FNJiiFWopT0wFXFogOubfhQaQO0jtUyIwKhCid7pUKP3Izff67aMt%2Fdplno8AkzhiATnW6ZzIdgHP4uZdBFpLRmOW7%2BucCoA6EvpY3IivW&X-Amz-Signature=05836a1bbbfa57169b0bb0932dbd46e3aaf7cef598f432cb4a24f39ac271c007&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZIC4B6N%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQWy1SI7g8rAQGQmQXaC0%2BlK5iMrRL6UtIuc%2FNWkEBRAiEAkaxbzi6Scm3rxJtoOlMiF81IH0%2FflkE6s%2BF0zBXFl14qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUYe6nVN303Q37d%2BircA5YvIditxIfErVKy%2BaUJjWUj02RfsZTLx0z%2Byw4iucAg1HqVskUHpb7iBxKCN9giKVQVwyQQT2hHdjpOW%2F1gXgOv09FAO7NAu2u8JQHFPyJRC8qhCzG%2FaR3yzVtmdJbbOGXffVVGOR4ratHGRGRhLI3HGBFTEcsFxKbWL5mzM15%2B3ydpC5nrfoUV%2FOBgqxErVbNQKJEmCNcNzv%2B5eAPKAiHIV2l8Svrpaehy718zbxToVNBPRpfcG8mZ3d6HQlI5ZMmY5FJabuc7WKujyVcVkHAAxTYndzFeCsPp7ZycdSur%2F%2FklmYHZwzn%2FUdqxyOkOf%2BsIPKdIY0m4%2F2cqByEgLxl2SLh4hlgMy%2B1p1fOMaWV3y79i%2BQYSSxvZaiJ40Zg6ABx9gEyTTgtOdrsS3gPB3grfn88UuX3R9PT6S2QS9LKh2C5GGrK4B55%2FfmPseuMknIA8R6fuT4uQreqfFgV%2BOaGKqz0IFBVbxsMRGgJXF5RPnAFDJ2qgiARQMh5q89PLxPliLv3vA6q4oHDHeYah%2F1%2B5UzQbGusvYxTn4NGTImULMz1VeymtXKhc8N6q%2F3duY%2F00pcbSQqMCOaitsOnDETbiaJPOXPxh%2BptAzhzwWw4WFIqD8CEcm3Z9DIC4MLut2b0GOqUBfqLENGcKx6vUWysrmgr5z04Egfc0jOAEboLf4jtl2wfhzM58Vg14ZzMV5yPosG%2BqkdcEPA4LeVczJxJ2SusHBGuJwWsgnzHjh8Zjz8EkU%2BYcxHawPkBrh7m5W9IucAZuNkzYoYJMs5dB1GsGE5J80gBsCmKXSRqnSWLBFNymF18Grd5DSB2jWBgHV4mDMgHcyryR%2Bdhy4%2FuMuUzgs3J%2F%2F3qFsfX5&X-Amz-Signature=38d864e62595f660a5bd5cecb72ff1f5c743decba540ccdc4fb61b3acec1b07f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBNBVUB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T230715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx%2FYor%2FryxVnh0KS61fQVPfjL5GwS4Ueq%2FofF9f%2BxcZwIgQgp6jmS5TW55MbFjqXnAPA1bBqwJUfom6cnOdV3wuhcqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPJDnpfPxcggeC%2BnCrcA%2BaLZokXqpISNc5DZls5zdWjGDSF2q4842MrDxX3XoB%2F7ntyqCDn0x84dmpwEUantTYfwap8ftk3UaWxj0pAUNNZqJvOB%2Fbad8MkqOuuJAUWuH1kJ%2BC6gEvzeNCLMR3jfDAb30lL70m8b%2BkLLzAvxHDdFaiV%2Fn7qbvaLo0hT3YcQm%2F%2Fxbij2YlNcy0pLZpv3I5b3k5UZmV9mNW0vis4jTd4vZB5QmFm2NDaZc6wwrdLmA%2BIGvaNeIRUxTSKV8BzELiiV7JxNIeiYlO2krkhwi%2BGLcEqESblZ%2BPYPO7h6Z2AjCOhBOKYRcvg8Tv13AlWrYrDEWC8YSCmBE6hmVRYKQUDSwVLXB2gE5%2BNccLCovmMmd08qrIiivygNF2fxTMuPN0zrGiPrszXobpCFqV4WwbeinLwfwDdqiu4RwueN3o7CR0OJaSoGyfxrmCrzWc9dnqFNexLzDK671Ap5yXLpsk77ceeYXvFxjU%2Bddv%2FWsd0lFnDxIzJFy5IXhgYCHPBx%2BMoWlhwOAtseqBpafkSPhtqx%2FbiMirNi18b0YvMW9rrtWyUirSJknUIXzQrdl0Czl7xifKDebiqk1sAMx%2FsgF7ltpR6n6RpaoDTo6QNKgzGsJNnUNDmzmmkCqwLOMP6t2b0GOqUBrNlBqPiLNkhLMKoOvKlj21F%2FeYtqYtGK1ICDjE4EyxhLhzp1axSeEnGEb73%2FNwyemLLrtSXxvWDjUnwqgtV5Rcb%2BO03VTGxwVDHsv0Cj%2FjTHMwbTYDdCVVFSyzKD8u1Dt72TqNou5AE7tdnFnOrN1XLCf8B25DQ%2FkFZ8q8Ve6JP8n7E0Ri5j4SVq6MS1be0X71qv6TwHuF3kbOutIWXLYMdSw87B&X-Amz-Signature=b4a747c20dcb437d28088b04d6f25c4ee8e13d4faeda551fb3d78458ded3e35a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
