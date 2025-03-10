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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIT6FFYR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCagQlPfhWRHIo8tLR47rAEqYjjrNSAEkLLkd0iO%2BcmOAIgFFq7ch3w%2FSnld1kbrjkENTJzvkqbONWR3sGqCDMHsZ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOYd5vSBEuM2sdNySrcA62s68GNbqhcYtuffXs0UniSyZGzCnpd%2FCXTqDKf7Xx%2Bk9rw%2FfHqid4xxgwbFIPjd%2Fke6pLZZ3%2B2gvKt5N2Woq6XR0RdXTFVBGLP35mfLzuW2sF84WzCuYB0lopOAflJonSeB%2B7%2F6LUX%2FZeJ70yLwq%2FSChJAvVtwPosdsj16NgM120pwMzD%2FQ0ocR7musptcWuV3LlLdzB730LV4M78AXS%2FzyT3qR6NjVgZRe9lZCGvgY0H5%2FO%2BAsp0dg6XurmXEBfsubfkVqWO9OhhG3zrWTeV7UbgAq4RLAhc9r1acixON8MwEr%2BVxRrK1eDEnMMmcAAFLTRu465BsrWXLxaNvjhSHI2PGET6owhg%2FnX5afuFs%2B3%2FfOuSHr4%2FT2MzVTGVIjA07Z2U6bYr6Gir8TVUirXkiDavR0cThWVcd8%2BedNj4LG%2Bc6HTKYLzbkgV6OI%2B%2FRP3TWRjdEd8Hhe6luTVh2Kq9L5i2cRSJ8PVVGZv%2BeAcxg0McV0Hqeo0nt1NNAoH6WOoQOgbUG0uv622eloPHrMuAiT3hDzNbx2uB5YSUm%2B9ETgCEjpUOrwASc%2B1Ebu5oRKUoetCFHTj9JVi61TlzQNOTlWRBSqiNmB3Q%2BCBw9D8lxQ1pJNJpiLSJrz5HwMJHsu74GOqUBY1IVZG1pagEYBwnyxlWaDRsLvpoaEikhZVO1ApjOha5AmKFv1P99QzxAFHVQ%2FgtSlBVKAcJ6D6XtqAmQPIN3ilaffaj6AyHemfMifu9qrBWl8UpDv%2BWO%2BJPMplYtZpZzZ0wpeWjZ4D5snIj7g3P4JRHZ%2Bv9O3MzUwYEBauLPbvRvPxDjf0b5qEdiZKfe1kA2udPtmesBmQIDn4Ukaiobbo2A1Ico&X-Amz-Signature=806b149194fc028b07c82a41662e235bc180117c3e93f42048c3d443b1bdf53d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIT6FFYR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCagQlPfhWRHIo8tLR47rAEqYjjrNSAEkLLkd0iO%2BcmOAIgFFq7ch3w%2FSnld1kbrjkENTJzvkqbONWR3sGqCDMHsZ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOYd5vSBEuM2sdNySrcA62s68GNbqhcYtuffXs0UniSyZGzCnpd%2FCXTqDKf7Xx%2Bk9rw%2FfHqid4xxgwbFIPjd%2Fke6pLZZ3%2B2gvKt5N2Woq6XR0RdXTFVBGLP35mfLzuW2sF84WzCuYB0lopOAflJonSeB%2B7%2F6LUX%2FZeJ70yLwq%2FSChJAvVtwPosdsj16NgM120pwMzD%2FQ0ocR7musptcWuV3LlLdzB730LV4M78AXS%2FzyT3qR6NjVgZRe9lZCGvgY0H5%2FO%2BAsp0dg6XurmXEBfsubfkVqWO9OhhG3zrWTeV7UbgAq4RLAhc9r1acixON8MwEr%2BVxRrK1eDEnMMmcAAFLTRu465BsrWXLxaNvjhSHI2PGET6owhg%2FnX5afuFs%2B3%2FfOuSHr4%2FT2MzVTGVIjA07Z2U6bYr6Gir8TVUirXkiDavR0cThWVcd8%2BedNj4LG%2Bc6HTKYLzbkgV6OI%2B%2FRP3TWRjdEd8Hhe6luTVh2Kq9L5i2cRSJ8PVVGZv%2BeAcxg0McV0Hqeo0nt1NNAoH6WOoQOgbUG0uv622eloPHrMuAiT3hDzNbx2uB5YSUm%2B9ETgCEjpUOrwASc%2B1Ebu5oRKUoetCFHTj9JVi61TlzQNOTlWRBSqiNmB3Q%2BCBw9D8lxQ1pJNJpiLSJrz5HwMJHsu74GOqUBY1IVZG1pagEYBwnyxlWaDRsLvpoaEikhZVO1ApjOha5AmKFv1P99QzxAFHVQ%2FgtSlBVKAcJ6D6XtqAmQPIN3ilaffaj6AyHemfMifu9qrBWl8UpDv%2BWO%2BJPMplYtZpZzZ0wpeWjZ4D5snIj7g3P4JRHZ%2Bv9O3MzUwYEBauLPbvRvPxDjf0b5qEdiZKfe1kA2udPtmesBmQIDn4Ukaiobbo2A1Ico&X-Amz-Signature=4dbd97edcaaf4702ff384faff4bc96317f4591df579f3556abb83161b09c20fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA372ABH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDkLtl8Ri8hvwrX%2B11T83XRwY2lAS9AurJpEnlXBqbglwIgBIoFB6bBJnzhNnnBSu%2BfczDrgTjuxtNc1uvCOH2s0KkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOBhI9X3qhxO9K4ayrcA%2BnmZu%2FeIsSTd0McTk%2FAaYIbG8dBZk3u%2FF4taIEruEGo8OALlND%2B7TbdvZ4h%2BpSFincCsiye897sULARA9xOb%2FB3gMell%2BQOoZfqaU6W0EEI5VXoGtmaRH5ELWx83I2gI%2BoAiygDGb3mZabAsOUvp%2FqoBjETOZu%2FZTdW45gcy0dlbSAFfG1Tg7VS4kyckZnKYI7ox%2FIoDeI1Sks88u8tjkwX3vmUUHW2EpOosALdMJ5DHGhoVh3I8fVGvDFVxr98EUH4FBcTSnH5atchQfn2MG%2BtbiawZDpLRCXqs6x26BVvLWCmgQwVdUh6jRCLeSxN%2FSMd9KUPKvaqWc0DMAjXYIurF1gWl5KAGBKXAx4tq0Q0wNJk%2FmmIyPYWhVDoWsmRsdjt%2FYfLCAUWithwT2KlnxTASbnqEKBXqZb7lAkY65UmnkyXcWnk%2FmmFxcg6FmB0zx9Gg%2BT5k7ZWUJSTYs4DzBhCO2Umtm8duCfkloZWAa%2BU%2BWMngmS6iEVKbEZUjKQPO3OY48YbqPNuXCh9fSDHzY9EC12cEacEQQlTL2zw6mUx3aE2UdNZGXHyLW24rB4%2FvrHp7UIc3MZF5NI5I2vEag3TDWbQf7DgzS9edl0gBJ0iYNb5zCEkVoGbaOduMLfsu74GOqUBl%2BuPFZ74VGuir%2BPprTmIPglG5SyZRLbQWlGLF8j80auiHbknwQonBBI4EUDtrHTART17r7I3APK%2FqnEoyGZ2eEC3A3yx9XoSeJGqtUDabRJUKYcHa5KlLyrlSn5q5hb3TeL0poJwzJpBnSkys4RsF0uDfu4HPJOrYTj52RkAUXuLbrahYTjp4xEfmmqjI8KpUiSvhntyWY%2FZxCxm9DSpX8Crv364&X-Amz-Signature=c7b3edcd3381f88fca806165186573dc09df0958229699aafcbde58e83b59092&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DK2OMTL%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDL2U%2FvOd0TLCb0nKh3nAzFsnaVL8saTgGpNZJUO3iGeAiAENPyCTQhTy1dFUsgn7qRmFVdpxsOrPWhPNN2eCLDsyCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ1RpFCsxC%2FH3qmaxKtwDXE5lOBr8P50YVbTA7GG2Sm4m9fJAaQm%2Bf7Y8LCDe2Ypwn%2B%2FJOKVx0o9cuYp9ap0NNjoK8CCeyrQj1SruZHK2wBpx38WBUkgI4h8AsD88nXS8SxBbW6MLsDjhejbc1sGhzsHMMDhaBIxR4aAo31eJdAPMVi%2Beew0in%2BCGEXWEwduy7TExZeYJfH9Mukk%2BXZaXC%2BxU1GbBHVEp5qKs2ATUZ09%2FrJSJkgToFk4rH0WJdB13wUjgQD%2BQOoPG0lf8ae1YYw40FvMRQBhiKXlBOJ3qMX5K3c08npiO4KvPWPkYLxMsnGWARwreb1jgKZ0RZy2NInZOeSzwbBGK%2BMpDfYGU%2B0SSyvWcoMV0UKAuNuF%2B23CY%2FFGYbSRKQjCkXXccybEfKQhPAp1bb%2BRVLdLDbX6FV9aCN44BbLmoreRlYUwFxF9RwWlZm9KfIJMHw2og7GHSe1H%2Bb3eFrJmNjzAbByC0V%2BK7E63J3jg7wD%2BDdrRahl9gMTRkURW4hbT3%2BIBUog%2B08eMjBLc76qtXIXVPmuIf6M8n531l%2FLZonnZZCxmG85oZu8uwP00YpDmR%2FJ9hoSHy0iXNmkI9KsCN%2Fb%2FaUO85i2RLynfOP%2FL6H%2B4WINpzxgE3Hp0xGXi4AxBuhD8wvuy7vgY6pgGaOsILKqnfphaac6pwqVV09yYYv2X%2BTALPaiqPgyNW1%2BC1jY9fzQIPBUVObWxNJ7wITO4zAzqrtV1%2Br8VQSe1Cg9z8zj1x46EO6lWcJk2PuJimZ%2BWq3e%2BSLUCeZuZ5Rs1de5o62N1pQMLyH4uUOZKSPzVALq2ox8teacJn1achX8VxocMhC2GJcQ2TkTZWmspzQmm9Cb1CxXycn0x5wr08moAQGt%2Fg&X-Amz-Signature=1e27225a7bd0a6105856aaf9abca1d2a3383db62b4da4ab3ea53df02708a5c70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIT6FFYR%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCagQlPfhWRHIo8tLR47rAEqYjjrNSAEkLLkd0iO%2BcmOAIgFFq7ch3w%2FSnld1kbrjkENTJzvkqbONWR3sGqCDMHsZ4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFOYd5vSBEuM2sdNySrcA62s68GNbqhcYtuffXs0UniSyZGzCnpd%2FCXTqDKf7Xx%2Bk9rw%2FfHqid4xxgwbFIPjd%2Fke6pLZZ3%2B2gvKt5N2Woq6XR0RdXTFVBGLP35mfLzuW2sF84WzCuYB0lopOAflJonSeB%2B7%2F6LUX%2FZeJ70yLwq%2FSChJAvVtwPosdsj16NgM120pwMzD%2FQ0ocR7musptcWuV3LlLdzB730LV4M78AXS%2FzyT3qR6NjVgZRe9lZCGvgY0H5%2FO%2BAsp0dg6XurmXEBfsubfkVqWO9OhhG3zrWTeV7UbgAq4RLAhc9r1acixON8MwEr%2BVxRrK1eDEnMMmcAAFLTRu465BsrWXLxaNvjhSHI2PGET6owhg%2FnX5afuFs%2B3%2FfOuSHr4%2FT2MzVTGVIjA07Z2U6bYr6Gir8TVUirXkiDavR0cThWVcd8%2BedNj4LG%2Bc6HTKYLzbkgV6OI%2B%2FRP3TWRjdEd8Hhe6luTVh2Kq9L5i2cRSJ8PVVGZv%2BeAcxg0McV0Hqeo0nt1NNAoH6WOoQOgbUG0uv622eloPHrMuAiT3hDzNbx2uB5YSUm%2B9ETgCEjpUOrwASc%2B1Ebu5oRKUoetCFHTj9JVi61TlzQNOTlWRBSqiNmB3Q%2BCBw9D8lxQ1pJNJpiLSJrz5HwMJHsu74GOqUBY1IVZG1pagEYBwnyxlWaDRsLvpoaEikhZVO1ApjOha5AmKFv1P99QzxAFHVQ%2FgtSlBVKAcJ6D6XtqAmQPIN3ilaffaj6AyHemfMifu9qrBWl8UpDv%2BWO%2BJPMplYtZpZzZ0wpeWjZ4D5snIj7g3P4JRHZ%2Bv9O3MzUwYEBauLPbvRvPxDjf0b5qEdiZKfe1kA2udPtmesBmQIDn4Ukaiobbo2A1Ico&X-Amz-Signature=d08568d749085007d64741e7989be6edf5613649d288807e93a4509aafe076e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
