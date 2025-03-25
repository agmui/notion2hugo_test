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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIBWFHW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANmSSMf5Fsno60WVzSzqhfl2KiCam5zlRjwBLK%2F18buAiEAvU7AO%2BZTnOpkCFPmlLg9dwf1c4BPTaStO6whGrC7YgMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLPcyd1pRsgAoU%2BEwCrcA4wDRe8PoGDXYELccZQQRyfkiYzGmIy%2BB8MpSJRpWxCftYeE8PqmM1ndQdPrn7YuziryMiAb4Y31GFVVcCQ9hWYt9Vd%2BjKC2h1CfM9baw7jXc%2B30zFp2wb6t164StbAm1%2BabXL9nDrSYJo4lPZ4f6eFdJrh2oSbLuBU6BfN9NZfQI33YvKNTFD%2Fveq3FRu1dnnO1%2FYKWVxI5uOyooQVzL%2BQXImA2zEXhc4DSGnca5kHfWH74aN62UKZDV7luGxDdq6KJOwm72c709tgjKr%2Bo8JRzbDoR8SFRBAb5Cb75tDlh96yU%2BAONyF5v7DqR8JmVFaUdU4RUj5RKWCcpwl3Gb0gFfw4FKkirancK3Tk4BT7xF4zmmAzD16xiRhl6HT8s6XjJFYUMzHJujLiiP3WXRg3j%2Fs4A1YTXX1BzwrOYQ6m6c9%2Fa9rbk8M4imY27CgyuW5iXQ%2BLYNZE8vJ2y29Y0GnaJ6RJs9DFx9l0QkjNkOHw6RanxdSNvAkgdZIix9AxuSVgZHm%2FMWo83F1sPSggPrchkPTtwhr8x%2BkOJ9R1x3Fmr%2Bb3C5DUwZeVx9a12x8bDo0msJgb6SCkjZaYjA1kZtM55GrFbYo2xyAI28etR5Rg4kuzda3cDPULjnEroMLSGi78GOqUBKwxoiwvWrBd14qxDAp0o2pTj%2BCVVQNfQ6hAfBC2%2F5vTEOXBLsJYHNduCSvzox3%2FBdcOwb8hBl2p%2F8NQGjZAas0AYIAlCofajtQOCdw2GQKMY%2FcVCxls2SZgwtT6yUdG83H0ABJ8KI3C2t7svfbYHxq9D1LS%2FtLPIm3RsGPuCvVN%2BBZQf8COaQVWmGf7wCxHHlZM575KptWFE5t%2BEm2zKXojT%2FxrR&X-Amz-Signature=5bc975e87a538bcf3ccbe63b13c2dcd9ac426f5206e63f8abcba2fc70e5a6ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIBWFHW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANmSSMf5Fsno60WVzSzqhfl2KiCam5zlRjwBLK%2F18buAiEAvU7AO%2BZTnOpkCFPmlLg9dwf1c4BPTaStO6whGrC7YgMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLPcyd1pRsgAoU%2BEwCrcA4wDRe8PoGDXYELccZQQRyfkiYzGmIy%2BB8MpSJRpWxCftYeE8PqmM1ndQdPrn7YuziryMiAb4Y31GFVVcCQ9hWYt9Vd%2BjKC2h1CfM9baw7jXc%2B30zFp2wb6t164StbAm1%2BabXL9nDrSYJo4lPZ4f6eFdJrh2oSbLuBU6BfN9NZfQI33YvKNTFD%2Fveq3FRu1dnnO1%2FYKWVxI5uOyooQVzL%2BQXImA2zEXhc4DSGnca5kHfWH74aN62UKZDV7luGxDdq6KJOwm72c709tgjKr%2Bo8JRzbDoR8SFRBAb5Cb75tDlh96yU%2BAONyF5v7DqR8JmVFaUdU4RUj5RKWCcpwl3Gb0gFfw4FKkirancK3Tk4BT7xF4zmmAzD16xiRhl6HT8s6XjJFYUMzHJujLiiP3WXRg3j%2Fs4A1YTXX1BzwrOYQ6m6c9%2Fa9rbk8M4imY27CgyuW5iXQ%2BLYNZE8vJ2y29Y0GnaJ6RJs9DFx9l0QkjNkOHw6RanxdSNvAkgdZIix9AxuSVgZHm%2FMWo83F1sPSggPrchkPTtwhr8x%2BkOJ9R1x3Fmr%2Bb3C5DUwZeVx9a12x8bDo0msJgb6SCkjZaYjA1kZtM55GrFbYo2xyAI28etR5Rg4kuzda3cDPULjnEroMLSGi78GOqUBKwxoiwvWrBd14qxDAp0o2pTj%2BCVVQNfQ6hAfBC2%2F5vTEOXBLsJYHNduCSvzox3%2FBdcOwb8hBl2p%2F8NQGjZAas0AYIAlCofajtQOCdw2GQKMY%2FcVCxls2SZgwtT6yUdG83H0ABJ8KI3C2t7svfbYHxq9D1LS%2FtLPIm3RsGPuCvVN%2BBZQf8COaQVWmGf7wCxHHlZM575KptWFE5t%2BEm2zKXojT%2FxrR&X-Amz-Signature=56c9c6680d772474deb4f999c02a46cfd2aaf0f81e1c811e142cdc9bf0b8bdde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU3WFKOV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh3cjabyrg85J3uBzNe5fP%2B6SA34KA1p6wsG6WMoYJGAiEA1a%2B%2Fusjon1Cir7AOGEKbDK927YOr%2FksmiySVioX4M9oq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDsep3OjdC2vtVk0OyrcA4zmGoEtjIoMW9zMxynIGrSThTdiSwTPu64SMASEgwp%2Fa2jafIZOa%2BJ03dkXIE9OEssw15VHdrfIGxAL1jZDokYAkb5cLdfZgDWUCbpIZ%2F7OHd9JSsOT1KuYZ84By1ycEXeZNOR9676c60Jv2EeAoI78%2BWMMZRlINCR5IJPuI8IANjcby973wbX2WJ1u1fE2Uca0zFnOoL6AwxQX2dC3cqIrP9ZokiCIpZgWe8AuIUUmoypwYdUcCnrQYBXbf5KetCDEZaUGXrySPLOyAJ0wuthxOWmS1oG7mfx9apgFXmQ22Wyhqr4VJC3RCNGvIk9PU8PgHbjURJQ1oMxCDsB2U65NUI43I2oeXXp8u4LFRVMUl263KiMODfIgH2QrfDoolzkWhzsYGoJKcKxeoAZ5ak9NQ18eww1vg1ACwT1xgrg9A1HEiLc0WQSi1eMAci3nlO5M1ZEAOoAbkd9kj4O3eQ75iR481MfJcu56Vbozh2xOQ94inOlLuN9%2FOakJdZtk2ORbJ0uuavqWygmh5VyPr0Renv1vmryTORsTLyDLnaS41f3wuVy2XVDZAAp2A%2F3irh5gV%2BJDW1NGbkpUnONQVtwIiTUWJzjx8gPjixD%2FM40tSZ%2F2Vb7Qv%2FQRWFUmMPiEi78GOqUBmfP%2F9Vqx7KosRa2Timgcqf%2FjtuJxR2IdGI%2BhKM1INwNjdtxTVThgyKRpc4vknZxZ2GaopRmP76qZom7RyfyMTy6P3YCjqW5TiOKtptNbAyDO%2FnDhb%2FTfzroEYTyRQnTtbCzKxmJ47AYjwGcpQ2PXymG6bBJ5pvHseagh5S989jCWj6S0yLjV%2FWLE8oLXLEj4TwGOrUjh43BU9Wto9HmIJdZIKO0D&X-Amz-Signature=123eafe9e5a294c2f3f3e28f49bd6e592f27dbd3105673d72289ce2d92647c32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIM57QK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJqmX9hhAdiAin%2FFSERt8XmCDP%2FrfZpp5RGBQunEs6pAiAtQFSsqDvLp4tQmEoj62y9qVc94E25RLEBta9mX4188yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMK1m1MS9ELPCfkmryKtwDvXdsxEO1NbIpIoPMho4M6GmQwUdz95XyxYcsc%2BurZtxEGwfIT31H5INQpJgBP9BJ7QMCFAif%2FG0ekdWRHPcd7RLoCJLGpkV0yFWRtfq1WkuCht2kxGYdwWMPdjq2V4AP0fyOi4I0qQnEVaO25na5EmzOvfBm7t7J8er68tjFXMZViXlLKpEfxGBKH%2Fqa3IvdyvPmfDcDSJVx5nDC8hygocOMnwH4f79q%2B%2B5q7VRdSzmUpmsUsS0ajA6VLwDuUICTc%2FkY6JxjF%2F36OtfzOvjRPJJStRWXUswtRgV3ZedgOybNpsWLYHeFwDzv7muPWmQ6iXj6SRV95TKtAsUTKxDy0pQbibYpRlC4h%2FpisJ2yJKal%2BcM9wN%2FGvMvVGo0vzqb9AFCL1NYYqCl5gQ3xeW5KRqSERDxPkiifDUZAeL26aMX2ihuzVZeZLxh3yG%2BUif2GUWv%2FMCXc%2Fs%2Bso1DLfVtVVMaVSG%2BPSNCRId2HGp9SqcHutibCOD%2FHHDPycsuiha0u2ArQHpPL9q3eUNk2TUn2%2Fi2LOObLaK0tiYMvVHLlDKfGLB54%2BQq%2FDEldFKhrv5adBHNq5J6tnWSF2caaadbxKSith6W%2BrlWYaIap41xnNcSYZuiSekSCVcnFnFQwwYWLvwY6pgE0MepouhcaQo3s4LKNCpc27N5Zf9zFhcVMdwWPJWG2WzwmMxcnYoUsazMmlSJT8AFGPvI06NHpgcfAVJofxlHV18VeiruI3H4blIg%2FxUoeokV2ZOMAGsuqj8jU8j1SuyHi%2BK7ap4Fq5%2FZ4GNGxkj0nciOVIfHQogo2LCdryYpSV8rG48fjlaFhckB4NFdO1dpJrmESDbt%2FdGtyZlpnYgcGwukRxm8F&X-Amz-Signature=2738bb5780f39d87ec1d7321090ea3f3442f3226592c62fee557cf98abaa0fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPIBWFHW%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANmSSMf5Fsno60WVzSzqhfl2KiCam5zlRjwBLK%2F18buAiEAvU7AO%2BZTnOpkCFPmlLg9dwf1c4BPTaStO6whGrC7YgMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDLPcyd1pRsgAoU%2BEwCrcA4wDRe8PoGDXYELccZQQRyfkiYzGmIy%2BB8MpSJRpWxCftYeE8PqmM1ndQdPrn7YuziryMiAb4Y31GFVVcCQ9hWYt9Vd%2BjKC2h1CfM9baw7jXc%2B30zFp2wb6t164StbAm1%2BabXL9nDrSYJo4lPZ4f6eFdJrh2oSbLuBU6BfN9NZfQI33YvKNTFD%2Fveq3FRu1dnnO1%2FYKWVxI5uOyooQVzL%2BQXImA2zEXhc4DSGnca5kHfWH74aN62UKZDV7luGxDdq6KJOwm72c709tgjKr%2Bo8JRzbDoR8SFRBAb5Cb75tDlh96yU%2BAONyF5v7DqR8JmVFaUdU4RUj5RKWCcpwl3Gb0gFfw4FKkirancK3Tk4BT7xF4zmmAzD16xiRhl6HT8s6XjJFYUMzHJujLiiP3WXRg3j%2Fs4A1YTXX1BzwrOYQ6m6c9%2Fa9rbk8M4imY27CgyuW5iXQ%2BLYNZE8vJ2y29Y0GnaJ6RJs9DFx9l0QkjNkOHw6RanxdSNvAkgdZIix9AxuSVgZHm%2FMWo83F1sPSggPrchkPTtwhr8x%2BkOJ9R1x3Fmr%2Bb3C5DUwZeVx9a12x8bDo0msJgb6SCkjZaYjA1kZtM55GrFbYo2xyAI28etR5Rg4kuzda3cDPULjnEroMLSGi78GOqUBKwxoiwvWrBd14qxDAp0o2pTj%2BCVVQNfQ6hAfBC2%2F5vTEOXBLsJYHNduCSvzox3%2FBdcOwb8hBl2p%2F8NQGjZAas0AYIAlCofajtQOCdw2GQKMY%2FcVCxls2SZgwtT6yUdG83H0ABJ8KI3C2t7svfbYHxq9D1LS%2FtLPIm3RsGPuCvVN%2BBZQf8COaQVWmGf7wCxHHlZM575KptWFE5t%2BEm2zKXojT%2FxrR&X-Amz-Signature=c28c4cd62c475657eb8ebfd469a432726c2a1131380d77da354ff9cafb58aadf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
