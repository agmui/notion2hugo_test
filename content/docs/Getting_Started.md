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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TBX4PX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKXf7HeApoRk%2BVG9K%2BtYdlOFXvC615vrql5ZnDXNTvCAiEAnnsIXqbugnOfgjukJIGEuoJIFL4hP%2BhyrHvTLgyyab8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd5xEQQx%2FTyJWMQNSrcA4ZF0tETSFiPC%2BreUh9AXx3jYMTzp8BoLQk%2FZWsTlrtBEVBEsRst6dL7RURjerDIXVaouEsynVyVlfDXJ97yzHqgEHNEYB3fyWsp1ubomw8fvimYm%2FEjAguiTfDmUU9D5C%2BUmpBFSsvSkEOvtdAVCkTERovzJ0HhoP1%2FHYuHdMUsf2yGzLVMVwOotH2dBwbGw1524YQ%2Biy2ELtmDi2%2B6NsYKWJAXFwgdcRYrmT9T31iOJaLdaa%2FKZP5GMVlaaQDkDW3p3ypNrRjfpmBc1ZRYWHaEIGK%2Bh8oh9aIfO3TCJBX2mYRiz6DVhJMKaA0DANKX%2BCnr8jqZDDV1VWvURLpyBu6ox5e43pbZy1rJdkA4Hx7yMkyLHnwrHzvUbfgDhjERoNyPg6e%2F1RASPYyms1CtuPKM%2BF3boBjTFIMHf8li9FlkOx2jkUd3NFEVJezLone6dN7oMGW%2FhHim3oh4raKt6a%2F%2FD9rzOUChzkceC5VaesrrEeY7pCRp160I6RENCp%2Fv4vr7TiCl1PS8N7ekBeZsZTCSJpnBn1o7M%2BUL51kCVKWGWoDMSJwWtz62d0BdYdOCrOMiT8pHkGRY0hA%2BQg5KjC3LZ19O%2FRBwQzT6bbJlwKa3rvrWuU%2F8zkFld2xDMP78jMAGOqUB9c6r3y2T9wLEadEQ%2FINQnvlPjiQ01moAjwp7jQPK0QkplHZyrHh4NTGhQP%2BWNPQB4gxDz30zj%2B%2BX2UQUVInoGddZVbcNxka7WhOg5CPX%2FSEawGM4KyLhnsb1SkmdXGhSOvXlU8%2B1qLFikKH%2BiAIz%2FE5QDSyv2fCIc5bXJzOeFzGXYMQid7MBdvf8I4xJNvQBBhsRHUUDL6UEfwvrAuHU3DyrCSII&X-Amz-Signature=0cbccc9f46c7936de495a6664406ef1316796a4925746520549a1e9a207815cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TBX4PX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKXf7HeApoRk%2BVG9K%2BtYdlOFXvC615vrql5ZnDXNTvCAiEAnnsIXqbugnOfgjukJIGEuoJIFL4hP%2BhyrHvTLgyyab8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd5xEQQx%2FTyJWMQNSrcA4ZF0tETSFiPC%2BreUh9AXx3jYMTzp8BoLQk%2FZWsTlrtBEVBEsRst6dL7RURjerDIXVaouEsynVyVlfDXJ97yzHqgEHNEYB3fyWsp1ubomw8fvimYm%2FEjAguiTfDmUU9D5C%2BUmpBFSsvSkEOvtdAVCkTERovzJ0HhoP1%2FHYuHdMUsf2yGzLVMVwOotH2dBwbGw1524YQ%2Biy2ELtmDi2%2B6NsYKWJAXFwgdcRYrmT9T31iOJaLdaa%2FKZP5GMVlaaQDkDW3p3ypNrRjfpmBc1ZRYWHaEIGK%2Bh8oh9aIfO3TCJBX2mYRiz6DVhJMKaA0DANKX%2BCnr8jqZDDV1VWvURLpyBu6ox5e43pbZy1rJdkA4Hx7yMkyLHnwrHzvUbfgDhjERoNyPg6e%2F1RASPYyms1CtuPKM%2BF3boBjTFIMHf8li9FlkOx2jkUd3NFEVJezLone6dN7oMGW%2FhHim3oh4raKt6a%2F%2FD9rzOUChzkceC5VaesrrEeY7pCRp160I6RENCp%2Fv4vr7TiCl1PS8N7ekBeZsZTCSJpnBn1o7M%2BUL51kCVKWGWoDMSJwWtz62d0BdYdOCrOMiT8pHkGRY0hA%2BQg5KjC3LZ19O%2FRBwQzT6bbJlwKa3rvrWuU%2F8zkFld2xDMP78jMAGOqUB9c6r3y2T9wLEadEQ%2FINQnvlPjiQ01moAjwp7jQPK0QkplHZyrHh4NTGhQP%2BWNPQB4gxDz30zj%2B%2BX2UQUVInoGddZVbcNxka7WhOg5CPX%2FSEawGM4KyLhnsb1SkmdXGhSOvXlU8%2B1qLFikKH%2BiAIz%2FE5QDSyv2fCIc5bXJzOeFzGXYMQid7MBdvf8I4xJNvQBBhsRHUUDL6UEfwvrAuHU3DyrCSII&X-Amz-Signature=d83f56a85493b58d0ea87c128e55740da11b63f7881f22c20e2fc4562077704a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KFVBBZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApkNlBgYBc95wPq32WzqlkhG6ozGvy6AvZVpzmXpctAIhAId9xKABa3xp3r4aybMePnEAjJkGaXI3BfkBJD%2FeexH4KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY%2FrMRA5ePZGxDmvcq3APDwLlFwM8frhe5RK8NHZtXJ49h7Dt1TitbnwLqrC746q3fiAWUwMWq8T4lHcxpRAxTlTV6l%2BCKnKU3%2Fja9rpG01CsGog5Te8B3Lk2zIV%2FS%2FHgWoDT67Wl9guF4xpAbNFPAbg9FX%2FzNlvHMHSEMTlEfRzc8Iz%2Bf1UWll3gG8znMfUMiPdk3IiGPU%2FkosX488mr95sePo%2B7tXZ71Ra0nuLUSexuyBZqu9s9Ry3%2FV0epWoz4KHWeJPVbKBCDudReowHYgNBbGBEsAXP%2BSPDB04000FwQwwBpXbkj%2FrwXTNWNrRxuJ1Q3QSwoEAxRtdWJqkTICuoC1cyQhtD75VJhBkxaecwGjIRGOQfISkGzRelJwSdoLd8ZlwxXZUGE70OZyoU4mQFZLzNmK35i0lndJ4pljipi58Csc3Ecf%2Bj6MtOc%2BKzNwpVV4HpT0TSelhSKi1MNWFTod6E7ahqgcM77tPc8E8biL9uEwEljm1CijuofbVN84J6pTBeqQaebPWJqhrkCo9l5n9UOsLEoFdMEfDYlWMT6rLhxO318nTcw8SaygBRN5Vk8ckB4J0bst2JuW0%2FntFeyqlvN7nDZFlntOnIp4S640IUs71Qr52GA0ApyiyupvHxYfBH9w5YH6sDC9%2FIzABjqkAdNDoq1ipNtX00Vx8Gxs0ZiW7tTW1zjvY3Qw%2FIC6xugmXZQPgws7ypev%2FI4%2BFWV3ZRlCD7DGwQieBp7lhifpRruBVVGTUZGVuJn%2FVyevzxAezZhx8PkAGOi%2BH6dX3HxqtAa4REc1ReDROmg7Yq7C8C1krX9NncSLH0OiW8x2sL%2F2hMa26EiHys%2FW%2B%2FiTSjDqiWhN0Df8FYgKlv2rsI%2BUfgMT570x&X-Amz-Signature=0afc8aaaf29e861ca35b0e12bec795581b22fb16163c046f77a735f376ed6398&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZGCGWXS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFBtxuqgGDLvKJuS2tEU5mJKk7iDHQrT%2Fgou5VVeRvLAIgZGRknTYpu1jjE3XSUxZyxaBXTj418fiS98%2FQMbBS2zAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCRtm%2Be0ncvVmi75ircA4c3qqATD0CicX9zwt32i%2F0xt7ofIhE%2BYR05gu5TgDYlbxKzQjgIrY9v6w7g0EjRZj%2FL3nYpkBVXp9vq51nYAjcgaHwwW6cVLHZJ6Xh6PdxVCg7JIm3G27A9A7W9%2FWdiIQ1Vokbpu%2FQnbGX2ajw%2BVvw5TXq10UynTzWMDJ2W4glTK6KFJslV3ULnYpnOwWhq7XyVa1Hruxg3hhx%2BOwc6EtB%2BMfIQx%2F%2FUsQI5H28hbUaNZW4bbZRE24jEdBAF0rW9c4%2BYYiEmJ6Guhz8bLb3NCSOk1Hxn3TPALaZuEM2XmILOHtf5y8StxXkpIn18loCtHVIjjcrGqTdfYyBCuX8QqBevJqDyfdunp9OtXYdqR7vZcHVp1VfqQ%2FOOGH4xH5DZyVtV%2BCDGGAMvWzHD5jLMEu03c72Y2wQtgJD%2Bb6kF132RACuAlw2BEnU9mrxMcsQcNpnvVlTjlRUaJpH7s4wF%2FzwWajHo9djUubAx9cdpgXSMr4D1mZ8R6HLchbyiNhd8jmcWXVw4B0U5VTfHvtXYR28qNC6JmRAvykqt%2Fi6yN%2BzaEKDCGXDxqJr3y1%2FejHB%2F6W4MDf10CYZKkmyS7cti%2B5pnZSyZz6RUd38qfm%2BPbxSeYBWIi9BuCdqX4gAsMMf8jMAGOqUBpSRmfbo%2B1wOugbBzNxSRtkms0xQzw0COh33LK06W%2FBz3I4wHCiiCWAHIrkZu4HVDKv9j6b0oazJmUpqKfXOqbeqHCcO%2FaR5QHgjCMkD38M3o9Rmqf557Fq6tXwI5CLv%2BuvjYkiH4%2FSzloSQIIsqWStA3P14cqDY9d048ftGaj%2BESkFhT1udDDm7wtBDi%2FlNGZnCR0MN5CfjQmu6WL7WDaknzo0kN&X-Amz-Signature=a914bd18bb640b42ed6af95f339ab364a8c656ce68338f57be1a2bea0d8fd41c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TBX4PX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKXf7HeApoRk%2BVG9K%2BtYdlOFXvC615vrql5ZnDXNTvCAiEAnnsIXqbugnOfgjukJIGEuoJIFL4hP%2BhyrHvTLgyyab8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPd5xEQQx%2FTyJWMQNSrcA4ZF0tETSFiPC%2BreUh9AXx3jYMTzp8BoLQk%2FZWsTlrtBEVBEsRst6dL7RURjerDIXVaouEsynVyVlfDXJ97yzHqgEHNEYB3fyWsp1ubomw8fvimYm%2FEjAguiTfDmUU9D5C%2BUmpBFSsvSkEOvtdAVCkTERovzJ0HhoP1%2FHYuHdMUsf2yGzLVMVwOotH2dBwbGw1524YQ%2Biy2ELtmDi2%2B6NsYKWJAXFwgdcRYrmT9T31iOJaLdaa%2FKZP5GMVlaaQDkDW3p3ypNrRjfpmBc1ZRYWHaEIGK%2Bh8oh9aIfO3TCJBX2mYRiz6DVhJMKaA0DANKX%2BCnr8jqZDDV1VWvURLpyBu6ox5e43pbZy1rJdkA4Hx7yMkyLHnwrHzvUbfgDhjERoNyPg6e%2F1RASPYyms1CtuPKM%2BF3boBjTFIMHf8li9FlkOx2jkUd3NFEVJezLone6dN7oMGW%2FhHim3oh4raKt6a%2F%2FD9rzOUChzkceC5VaesrrEeY7pCRp160I6RENCp%2Fv4vr7TiCl1PS8N7ekBeZsZTCSJpnBn1o7M%2BUL51kCVKWGWoDMSJwWtz62d0BdYdOCrOMiT8pHkGRY0hA%2BQg5KjC3LZ19O%2FRBwQzT6bbJlwKa3rvrWuU%2F8zkFld2xDMP78jMAGOqUB9c6r3y2T9wLEadEQ%2FINQnvlPjiQ01moAjwp7jQPK0QkplHZyrHh4NTGhQP%2BWNPQB4gxDz30zj%2B%2BX2UQUVInoGddZVbcNxka7WhOg5CPX%2FSEawGM4KyLhnsb1SkmdXGhSOvXlU8%2B1qLFikKH%2BiAIz%2FE5QDSyv2fCIc5bXJzOeFzGXYMQid7MBdvf8I4xJNvQBBhsRHUUDL6UEfwvrAuHU3DyrCSII&X-Amz-Signature=ef9b3925fa853223c829cad7a3d386f3f8c7da121264bcbb09e277de878ebecc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
