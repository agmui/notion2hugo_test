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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOTMGCD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTebSiSD4byhAK8a1dgEoHpopCUPQVpbS%2Fg6rE0Tb1kgIgLiPHF%2FZPdfxRT34yROriNnEUkvoctLbl%2FPJd8bBVW20qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0S%2F%2FyjBqJIeM5bZSrcA42u7RXEzKRNp9d21XbGUf%2Bq2H9H%2Bg2BU0bywZzvOZTWgl1EFDMjfAo2GoHVGYBkUQaoZkNIiavCkwIMrBrae2CI8%2B%2BrYUNOJomEmbKPACmGTgm0VrlxmEQKee9BxsaMoWO8AV859f3ArSXziv3krP0KnAH%2FQrq2zVyLnbXE%2BUxxtuosfmIW%2FtQUyjD4wi4%2FX3x4QIirU17c%2FCR4%2F1gS0oZrscl%2FJwZuH80X1%2Ft%2B55hmNKEHXQjlQAIEOGdpdpHJCLn8H3lhLxaMkPKv53kNKaAYeUtnpcFBOwnLPn7h3oIkkBsSO4X%2BgeD78a%2Bsk1UF1RH3O7nLVFgSahkulkwXi1OUngp%2BtszQ9noz22Yi5q2CaGPsZS8IzFoRjtAeErIeO5%2FW1RpG5quSDaJalt5aRUNbOLd%2FtUP7ICUHvdMsttVKnrJI67cGguBqvfLW6pOPRzcddTvJnaW275UjpdvjkDwjL5pJ2rJS0ekqjoeCLSzPB5c30EAktZO7WjQnGO6FDUFkxm0M9xIz1jaFRxCEx%2Bg%2FecwIGZJ5n6vJ3H8MXHamqmfJfkOVVmQXrQZ5NpR9jAizIABSBhIYgAr%2Fmnqr61Bfd27lqQWQyP%2FoZpiq9okoxGg1FLe%2FL5tssHPaMJaQ%2F8IGOqUBptPcacMbqE%2FOmbrPQkHE49eZnSX%2FhSRCmyxTd5xxKF3aJBxOce8%2FORubIAPcJQpsSY85719uAg%2BRJTYhTwkqChl5giN1Jw9N70%2BN6DpoKSLBx4M1n4RDXt9HOYnuhcWOaIheily0lcXfOzZpnjJxX4PrhoHVcLNX83PuCyEJ9j9HS%2FkW4xrlrBrLZBHvJT6Vmme3%2Fv8E0OSw%2B%2FUSCd99wBWEa0Wz&X-Amz-Signature=468cea953373b291be5af73e996ddaf6fc3d6e74a2ba1078977bdfd49b30b525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOTMGCD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTebSiSD4byhAK8a1dgEoHpopCUPQVpbS%2Fg6rE0Tb1kgIgLiPHF%2FZPdfxRT34yROriNnEUkvoctLbl%2FPJd8bBVW20qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0S%2F%2FyjBqJIeM5bZSrcA42u7RXEzKRNp9d21XbGUf%2Bq2H9H%2Bg2BU0bywZzvOZTWgl1EFDMjfAo2GoHVGYBkUQaoZkNIiavCkwIMrBrae2CI8%2B%2BrYUNOJomEmbKPACmGTgm0VrlxmEQKee9BxsaMoWO8AV859f3ArSXziv3krP0KnAH%2FQrq2zVyLnbXE%2BUxxtuosfmIW%2FtQUyjD4wi4%2FX3x4QIirU17c%2FCR4%2F1gS0oZrscl%2FJwZuH80X1%2Ft%2B55hmNKEHXQjlQAIEOGdpdpHJCLn8H3lhLxaMkPKv53kNKaAYeUtnpcFBOwnLPn7h3oIkkBsSO4X%2BgeD78a%2Bsk1UF1RH3O7nLVFgSahkulkwXi1OUngp%2BtszQ9noz22Yi5q2CaGPsZS8IzFoRjtAeErIeO5%2FW1RpG5quSDaJalt5aRUNbOLd%2FtUP7ICUHvdMsttVKnrJI67cGguBqvfLW6pOPRzcddTvJnaW275UjpdvjkDwjL5pJ2rJS0ekqjoeCLSzPB5c30EAktZO7WjQnGO6FDUFkxm0M9xIz1jaFRxCEx%2Bg%2FecwIGZJ5n6vJ3H8MXHamqmfJfkOVVmQXrQZ5NpR9jAizIABSBhIYgAr%2Fmnqr61Bfd27lqQWQyP%2FoZpiq9okoxGg1FLe%2FL5tssHPaMJaQ%2F8IGOqUBptPcacMbqE%2FOmbrPQkHE49eZnSX%2FhSRCmyxTd5xxKF3aJBxOce8%2FORubIAPcJQpsSY85719uAg%2BRJTYhTwkqChl5giN1Jw9N70%2BN6DpoKSLBx4M1n4RDXt9HOYnuhcWOaIheily0lcXfOzZpnjJxX4PrhoHVcLNX83PuCyEJ9j9HS%2FkW4xrlrBrLZBHvJT6Vmme3%2Fv8E0OSw%2B%2FUSCd99wBWEa0Wz&X-Amz-Signature=1f800ce42a6991d05721024588c918a4049504bfab491eeb1c74479528bcb07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOTMGCD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTebSiSD4byhAK8a1dgEoHpopCUPQVpbS%2Fg6rE0Tb1kgIgLiPHF%2FZPdfxRT34yROriNnEUkvoctLbl%2FPJd8bBVW20qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0S%2F%2FyjBqJIeM5bZSrcA42u7RXEzKRNp9d21XbGUf%2Bq2H9H%2Bg2BU0bywZzvOZTWgl1EFDMjfAo2GoHVGYBkUQaoZkNIiavCkwIMrBrae2CI8%2B%2BrYUNOJomEmbKPACmGTgm0VrlxmEQKee9BxsaMoWO8AV859f3ArSXziv3krP0KnAH%2FQrq2zVyLnbXE%2BUxxtuosfmIW%2FtQUyjD4wi4%2FX3x4QIirU17c%2FCR4%2F1gS0oZrscl%2FJwZuH80X1%2Ft%2B55hmNKEHXQjlQAIEOGdpdpHJCLn8H3lhLxaMkPKv53kNKaAYeUtnpcFBOwnLPn7h3oIkkBsSO4X%2BgeD78a%2Bsk1UF1RH3O7nLVFgSahkulkwXi1OUngp%2BtszQ9noz22Yi5q2CaGPsZS8IzFoRjtAeErIeO5%2FW1RpG5quSDaJalt5aRUNbOLd%2FtUP7ICUHvdMsttVKnrJI67cGguBqvfLW6pOPRzcddTvJnaW275UjpdvjkDwjL5pJ2rJS0ekqjoeCLSzPB5c30EAktZO7WjQnGO6FDUFkxm0M9xIz1jaFRxCEx%2Bg%2FecwIGZJ5n6vJ3H8MXHamqmfJfkOVVmQXrQZ5NpR9jAizIABSBhIYgAr%2Fmnqr61Bfd27lqQWQyP%2FoZpiq9okoxGg1FLe%2FL5tssHPaMJaQ%2F8IGOqUBptPcacMbqE%2FOmbrPQkHE49eZnSX%2FhSRCmyxTd5xxKF3aJBxOce8%2FORubIAPcJQpsSY85719uAg%2BRJTYhTwkqChl5giN1Jw9N70%2BN6DpoKSLBx4M1n4RDXt9HOYnuhcWOaIheily0lcXfOzZpnjJxX4PrhoHVcLNX83PuCyEJ9j9HS%2FkW4xrlrBrLZBHvJT6Vmme3%2Fv8E0OSw%2B%2FUSCd99wBWEa0Wz&X-Amz-Signature=54636cf07c688d9ea9d0168972f229420856243ab53f577d6df84dc9256ed520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWQQHU4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGOtF8Fq5j1icGGWmrlcRdxDAzlx0YrF4MjAQK8cPYvgIhAOzQWmxvioA4FLodFHf16XRmhItWGiAmq5h08BbjmhFXKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzMc0BYdU%2BxvdXWrUq3AMOT%2BgqB%2B3cMnRhHkLdAKVBa9h7VysdONG5ct4whFEajSAL0dpAHHccNkRsGQVyV2G82CDMTm%2FpSFsN6qrqNTdpPBH33PIPUhF30aqh2vLmNv8YQuG0e4RHBt623L1sZiH%2FtJHUV7YM8o0WdHN3C27NBhTWmr%2FM36Yvf92yIw1TbzN0OZbEyerSJjd%2FkD6ejPfiAsInX5udSVdFvDYfiY6rhsj6ZLfNjn5IX2a4Yyj53S9x2Lqh7xnPH5Bnson0e5naXRsLoIFpxBvhY%2FVP95fn7qaF9u4XVroZ6JQZGdlt5rnWP8X%2FMoZNhOEzk7U%2FVRltdxFPmukxdEt6p9yhJTHAIoKokwBgEwBTjpdwZz8XV0KIK9hoFIwmKQRemhBlRui1OadGUnZ04DR2Fzz2cPwJjLGy%2B7MbSle60S1cp9Fp4b%2BofzyCe923%2Fl1pdufHCRbXY8nVRx8syeML%2F1WaW0YgfqjUxT5LpOvvG9yt%2BOoxORCuFB1IaTjdMdx99BCRaS7AE2divgihrwDJXX2RTOtgq1uCjWUUt%2BDe8UMJktKbNuknl011YUvO%2FL00EmKEbZ1kFDUzaSgAOu6BrvTfB6qAbqFoSLiMA%2F%2FPOEYOTS7VlXO0gEOSW2Q%2FdoAnUjDgkP%2FCBjqkATTZKrhUaCMVi9xGpYvdPo4UmNZaLGoDkNBsENzst%2B%2ByMlUQCvja17olNdpvR7W2qIheNtMmw%2FSgfTgezvNL7thtKFaHO55dwNhGs9mN%2BPBC5i2EFbKsHoeelDJjJRoU6JDyl5iMjspzty5JhDoKuIOAgeB7VFJgT0ZiltS0ujVvc49ecz%2Btr1b0dGvlwy64V1SsVV1eChVBd1Z4V2t7X%2BTevKG%2F&X-Amz-Signature=f2df802670eed57fb8ac61071bf177eb5bd903ab982a86d6b210ce70689952ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4MWY5MZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa11aJSCHSS6AZ%2B%2BuOYAl3zyNTnXlVaw1ecOs4IV2CjgIhAPLcUZ%2B5Vu6YHvaj%2BJan9XfFYBXolZGq5XQq6TPe%2FCicKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7a0JfsbEW4q4Ergsq3AMJ6B8IUH5buNCBEJByNPJYtjX2lgQSWep2Sg4h5nX1OTiibedYxozVaX5ePFdam0LBr3X9Uj9D05L8bjMUdGQfzAzr%2B4veHOOe5Nzy%2F1D7kpj65ACwPiW%2FMsrrcgYixUjaeBJ6eYPPAVEpzNforxXtc1gB0XokczI0b7bp1kGtK5kYbhoJ3FVv9Ykcc9Fr3ZZSnzFmgMEHtSiF%2F0AsOxXik45vSZ2q977YGqTIaBcstN049yjcTe78q0Fw8llwVExT5fcr6UbBJZzn%2FfhRTN2CWXw7vM%2BVaNC2FoKPcpYFMyViQfD6B0mp72UQfZGeRLfOJYnbtEUCWjd9evOf5cs4J6qy2%2FStQPg31beLKqLld9eyVIHwdyHTkvTLaMimVaYvXMp2fgID%2F%2BsG1aelN8V5BkWW2mmjpxvFHgMgQQIeEf4gKA9ihQtbdpr8qhspxZ7lS6xwF3sEL9HZVMkn%2Fgm%2B5dBgUKqvdeSgoZwU9JawnCQwVX%2FWh12%2B3mfgYpRnKnlACqEVwk1WYjekKyt%2B44jLwWfsjJXywDf9DaauSSExCfQCXmrL09djBSuAKw%2FUIZVOR0Vvj2QrLC8%2Bg%2BztHAew0R6cFTBTpQDuj2hz3TRzqHNITpy3KsmJa9HUzjClkf%2FCBjqkAVKgl5FU7cAELVKFgiJhu87efuho8B%2F676kHmCpKr8YfkyVAcZZppSZHOWu0D5eTyRzmcG9BhQrWgWoloyxZYxl78LJgS%2F2y0Kj6rGNwb0iaMcCulzdRGZuYGbXoIMaMRroWG6psNxHhiHry%2Bo%2FiW4eJBbpRTAJDTQPoUV%2B2Fhd2FKGKyXBtfxR6PGTXEjPvtjqTmBzkXJzkX2212E3lGcLu2iku&X-Amz-Signature=320f3c222a941cbe572031f3c06bb5b652dc5d569fc870d772154086e637e317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDOTMGCD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTebSiSD4byhAK8a1dgEoHpopCUPQVpbS%2Fg6rE0Tb1kgIgLiPHF%2FZPdfxRT34yROriNnEUkvoctLbl%2FPJd8bBVW20qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0S%2F%2FyjBqJIeM5bZSrcA42u7RXEzKRNp9d21XbGUf%2Bq2H9H%2Bg2BU0bywZzvOZTWgl1EFDMjfAo2GoHVGYBkUQaoZkNIiavCkwIMrBrae2CI8%2B%2BrYUNOJomEmbKPACmGTgm0VrlxmEQKee9BxsaMoWO8AV859f3ArSXziv3krP0KnAH%2FQrq2zVyLnbXE%2BUxxtuosfmIW%2FtQUyjD4wi4%2FX3x4QIirU17c%2FCR4%2F1gS0oZrscl%2FJwZuH80X1%2Ft%2B55hmNKEHXQjlQAIEOGdpdpHJCLn8H3lhLxaMkPKv53kNKaAYeUtnpcFBOwnLPn7h3oIkkBsSO4X%2BgeD78a%2Bsk1UF1RH3O7nLVFgSahkulkwXi1OUngp%2BtszQ9noz22Yi5q2CaGPsZS8IzFoRjtAeErIeO5%2FW1RpG5quSDaJalt5aRUNbOLd%2FtUP7ICUHvdMsttVKnrJI67cGguBqvfLW6pOPRzcddTvJnaW275UjpdvjkDwjL5pJ2rJS0ekqjoeCLSzPB5c30EAktZO7WjQnGO6FDUFkxm0M9xIz1jaFRxCEx%2Bg%2FecwIGZJ5n6vJ3H8MXHamqmfJfkOVVmQXrQZ5NpR9jAizIABSBhIYgAr%2Fmnqr61Bfd27lqQWQyP%2FoZpiq9okoxGg1FLe%2FL5tssHPaMJaQ%2F8IGOqUBptPcacMbqE%2FOmbrPQkHE49eZnSX%2FhSRCmyxTd5xxKF3aJBxOce8%2FORubIAPcJQpsSY85719uAg%2BRJTYhTwkqChl5giN1Jw9N70%2BN6DpoKSLBx4M1n4RDXt9HOYnuhcWOaIheily0lcXfOzZpnjJxX4PrhoHVcLNX83PuCyEJ9j9HS%2FkW4xrlrBrLZBHvJT6Vmme3%2Fv8E0OSw%2B%2FUSCd99wBWEa0Wz&X-Amz-Signature=fae550e644a7c4dd33c60cf9d4590c7552cf5f2d0e1051bc6976a0d354b98b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
