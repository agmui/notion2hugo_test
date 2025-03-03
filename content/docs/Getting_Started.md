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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIP4WK2E%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE282YX6q2Lkpk4R8vQy3JwYSG0hAI18GaMzK5YvKYtpAiEA5pI95SiGisxbKBVWr19saNByhd2iVXSJoMWnCrWiRkgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5T0vyYmrcD1dUIbCrcAw4ahom2NIzqcBlnn50CwMhT47L3VNgLInSAQEUD8J%2BGl4oDOLt13m6qSEn7zJVctWxlys1uJyY7Mo1MN4LBDIVEQLzBlw1CNPUKNI9%2B2AXj43Fh0thvpQkMjTytbdBwDT7D4uudNS6WbKqR9szrDKNgVzpkpaIGO9HwTkWe9%2Fe%2BcUtAOR98oTnG0N5rC1HUdzsTznqSv8OIoB8KoJRutETQDACAdZIHrThu1JFNMf3h5YZh3mV%2Fr1W1jQF1gdS0XAkwHd8Hnxarh%2Bau%2BR6Y4%2BftZsf4iWshylaQa1QLR6DX8QLaiwHc8zNuz9FhaF%2Bn%2FdE67juNPW0imp7fOw115tH4PvWY3715k7DPTE7am7yGOziB9qOZy6jzzsiBfr4Ji2mGXWAVmEn3YVDMfOsx6J1N1%2BlR08AGNJ5dGw%2FNqo01p5bAxhemfMaF6mVbxzFUHF7YYqhAw5moV2f059m2ow49X%2FMqNzTCLIzd92FwOy9aBnpz73c%2BlSVk4Wd4zgvN5%2FQZF3erKaTLvpaitDW%2Fm0K8P3hRyMeFWQ%2F%2BpuVDfihxMAWdlF3oW0d%2FrX6M9kmwHxLm%2FNcuvaptVH6vstIxFVq2ffBgfkH8%2BK1cLiCGifM4zM2YNooZG1HVejGkMJ6Wlb4GOqUB38VPNWIm9phT%2BQmcXj1YBglqkbUtKJmBQSuVTEQo5%2FRJxRSgKg9fWaDtCe%2Bl%2Fu%2FpNQyEajX8%2BoioXf9Y8gkNmS3%2B%2FCID%2FPTsYBBwNCIeIEGHEmMRphVuyDDDLvUUc35I7dyIj0qnxPPdSjlBFENMcPWGOXnyH1ugVQDfvz2GCc0ZE9mr%2FTUws9H%2B0z0msXvXO8N4tnsIXbmT2ifnN0oonFoloBeb&X-Amz-Signature=6223aecfc901a2ae40c27117392d06ecb255706f935bbf98b493a8f3075c4355&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIP4WK2E%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE282YX6q2Lkpk4R8vQy3JwYSG0hAI18GaMzK5YvKYtpAiEA5pI95SiGisxbKBVWr19saNByhd2iVXSJoMWnCrWiRkgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5T0vyYmrcD1dUIbCrcAw4ahom2NIzqcBlnn50CwMhT47L3VNgLInSAQEUD8J%2BGl4oDOLt13m6qSEn7zJVctWxlys1uJyY7Mo1MN4LBDIVEQLzBlw1CNPUKNI9%2B2AXj43Fh0thvpQkMjTytbdBwDT7D4uudNS6WbKqR9szrDKNgVzpkpaIGO9HwTkWe9%2Fe%2BcUtAOR98oTnG0N5rC1HUdzsTznqSv8OIoB8KoJRutETQDACAdZIHrThu1JFNMf3h5YZh3mV%2Fr1W1jQF1gdS0XAkwHd8Hnxarh%2Bau%2BR6Y4%2BftZsf4iWshylaQa1QLR6DX8QLaiwHc8zNuz9FhaF%2Bn%2FdE67juNPW0imp7fOw115tH4PvWY3715k7DPTE7am7yGOziB9qOZy6jzzsiBfr4Ji2mGXWAVmEn3YVDMfOsx6J1N1%2BlR08AGNJ5dGw%2FNqo01p5bAxhemfMaF6mVbxzFUHF7YYqhAw5moV2f059m2ow49X%2FMqNzTCLIzd92FwOy9aBnpz73c%2BlSVk4Wd4zgvN5%2FQZF3erKaTLvpaitDW%2Fm0K8P3hRyMeFWQ%2F%2BpuVDfihxMAWdlF3oW0d%2FrX6M9kmwHxLm%2FNcuvaptVH6vstIxFVq2ffBgfkH8%2BK1cLiCGifM4zM2YNooZG1HVejGkMJ6Wlb4GOqUB38VPNWIm9phT%2BQmcXj1YBglqkbUtKJmBQSuVTEQo5%2FRJxRSgKg9fWaDtCe%2Bl%2Fu%2FpNQyEajX8%2BoioXf9Y8gkNmS3%2B%2FCID%2FPTsYBBwNCIeIEGHEmMRphVuyDDDLvUUc35I7dyIj0qnxPPdSjlBFENMcPWGOXnyH1ugVQDfvz2GCc0ZE9mr%2FTUws9H%2B0z0msXvXO8N4tnsIXbmT2ifnN0oonFoloBeb&X-Amz-Signature=86cfb61c3bff919de38a600ea96abb1d21be935aff7f46537949a4d4d7dfcce4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP64G6LX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Ny5uDyqQg%2BYOvoF0EutRJip%2BLvyAFoh0INt24dlNJAIhANUxhthvlXN7mLsy35dsJl1by2OI2zjB8bbAjGMkZiv%2BKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2FnG8qKv9maNc14Uq3AMUYzBFJaq4ruu0wPCLIai7E06qKVKnOWSu4NuNfOKUZ%2BiQy9gjZQFBnmGUrp%2FfoeYJb%2BxO1dxGEoCBEtTGEEJSSEUTyxBqII1a2ckfTj8M0MltbE35XNjKOVoYOeQttV29VF%2FxFEfgzzR2g8BsEKHogymkfNM3DYKfUAyaAgYkg3aYqfeGkFmPE2OGarrR5s%2FImDL7ZpDy8FQ5tcaK67EfeRNZ0u4gtJA8zkeX8Wma4LrZCCFqsKrSxoKb2VlT6Gm6pVn6d%2B4wc09RMLn%2ByXdIfvaWMEdDE9fJ8YJKEon8zs3RAiYUEbhf43S1szXZ8ueKhFwYaWoJE0r3r78SaJ15Dn6IFx8ma7bu2k7zRi83fbgRy3Ilpec8ikMdWJNQJ4q2yLC5d7hTb9yMtJw%2B3SgtnaRrhjJ7BArNNWeCHufvMJiOxSt%2FPEKZid96W9ddSgV3AlZQ7cFuyV3Zg0ZBYOJYJh2Fety3D4aiw1%2FB7nfWiIXeertUe3HnFiW06gi%2BacJNzRRcTwoDmk6%2FGa5AA4EIjE%2FlxvdxtFalaEEtvtjAh8DAqCNb43thsVHQmDGFkHq5Y6tVCSWpaYjba8CaJUsjE55PE3qUhOAAwAqsl4OmkRHnTUAgQSD%2FLozJiDCilpW%2BBjqkAU%2FN4kKMtBqZyESzuFVkTo5c8u62JNwpC%2B6zYEkcJL8%2FmFx1mjUzLZS6T%2FfIA87lfZJrECXm1VJwq86%2BrH4kB%2FdjGeLMn9WXkMCPy7ePEQpWcRbKRL4a9NAoHbFzwt%2B19dytx2T3CaL8z1IpU%2B2N9x2XxeAMdy8vNM4pXaGPDUzyWuHpt%2BqFmy3OYUZf7WPd9tYIG%2BFiSiBRuwnhGV%2F8OTESehzN&X-Amz-Signature=fb06f09df5485309929ccbeba805805d17855a5cb7080414abade2b1f18eff38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBAPJGJK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrl4aWLVnfXtsnWAWQA8Ui5VsdmO%2FMnNtWvytUHC3rVAiEA9xQh%2FpaExPS1oc2hbceoZS4KbzzMxWWYkpEk%2FENCPzYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBahDoxbrjyI7OjQ0CrcA7MLDoC%2BQdfObQOG7NP%2F4MXD5DqMNhtWP28msnuNj1NSHKAokcQ91qcEy27fYMcLzTgi8lugBDZqrFlYwD3MbUTgQakBZLKCYRrwwxATVkaiHis5qUg90x4BMqys%2F5bn5%2BinmYhEriNn0o2DeU7j8dNbXJaE2hKjDtURRcabjHdOOcEI%2BjU8GQFC0%2FWF6o%2FwobWOhyeXbXPZGDGfb8g8K3k5t9hJunXx4OdlOWNs1fleQPEJy4X%2FxG6OPhW6jOipkAtWieFZbnmawevtqbYA3BUG42iXDstvISrHnTfIb6A3NkPofd4joLCP2WSXSsX5FkbIWjSS3uozjQWPHW%2BLNZ%2FMNhR6NN66aAoZKRC3%2FbGQt15qNBSGzCRkHXty9TYL4phZyube4ZrX2UelqDATHMf8DImU4h9CODXMFHNl1U8K%2F%2Fq92xca4%2B91XiMp19lfk3MXDpWJp%2F9eU5YbhdHlYdjY3p2TjaldplweVqtizJp8P5NBUXt1C9VGO7GKSIfmUfxzrh%2BDIpgoQQyMWdl4lai4qblwEa5jlU9OdqaSCbDcaYrm4DmqbYUWIN13GDlV8LtBKdnFNYbS%2FvKf5rWTJFExZ%2BTqZUCgAkXBAS6LIl7pPhfzJ8G1anRsw8jaMOmWlb4GOqUBS%2F1YVs%2FXyRQyeVmM1SWxh%2Bh0SEXP0CcLfjzrUdIVagIriS7l2ywX73u6Ojfz0ufDOVa2aalE2ot%2BNICVj9r4MnuVNiA3KlAilLZ7lYf9VuskY408W1u0kYZ3MrBHrCPGNamnaNlx67YGzn2YKKPXY7lIE86km1WMtaghwj9Q27aA8iR5uDbQxbBBRBl7vr1c7iQy%2BYjqKdKHUhn%2BnL01RF1iqrXz&X-Amz-Signature=21ab9e30fae880ae5abe1e2667816bfdd0fca75250f92b1f0cec86a24b3471f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIP4WK2E%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE282YX6q2Lkpk4R8vQy3JwYSG0hAI18GaMzK5YvKYtpAiEA5pI95SiGisxbKBVWr19saNByhd2iVXSJoMWnCrWiRkgqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5T0vyYmrcD1dUIbCrcAw4ahom2NIzqcBlnn50CwMhT47L3VNgLInSAQEUD8J%2BGl4oDOLt13m6qSEn7zJVctWxlys1uJyY7Mo1MN4LBDIVEQLzBlw1CNPUKNI9%2B2AXj43Fh0thvpQkMjTytbdBwDT7D4uudNS6WbKqR9szrDKNgVzpkpaIGO9HwTkWe9%2Fe%2BcUtAOR98oTnG0N5rC1HUdzsTznqSv8OIoB8KoJRutETQDACAdZIHrThu1JFNMf3h5YZh3mV%2Fr1W1jQF1gdS0XAkwHd8Hnxarh%2Bau%2BR6Y4%2BftZsf4iWshylaQa1QLR6DX8QLaiwHc8zNuz9FhaF%2Bn%2FdE67juNPW0imp7fOw115tH4PvWY3715k7DPTE7am7yGOziB9qOZy6jzzsiBfr4Ji2mGXWAVmEn3YVDMfOsx6J1N1%2BlR08AGNJ5dGw%2FNqo01p5bAxhemfMaF6mVbxzFUHF7YYqhAw5moV2f059m2ow49X%2FMqNzTCLIzd92FwOy9aBnpz73c%2BlSVk4Wd4zgvN5%2FQZF3erKaTLvpaitDW%2Fm0K8P3hRyMeFWQ%2F%2BpuVDfihxMAWdlF3oW0d%2FrX6M9kmwHxLm%2FNcuvaptVH6vstIxFVq2ffBgfkH8%2BK1cLiCGifM4zM2YNooZG1HVejGkMJ6Wlb4GOqUB38VPNWIm9phT%2BQmcXj1YBglqkbUtKJmBQSuVTEQo5%2FRJxRSgKg9fWaDtCe%2Bl%2Fu%2FpNQyEajX8%2BoioXf9Y8gkNmS3%2B%2FCID%2FPTsYBBwNCIeIEGHEmMRphVuyDDDLvUUc35I7dyIj0qnxPPdSjlBFENMcPWGOXnyH1ugVQDfvz2GCc0ZE9mr%2FTUws9H%2B0z0msXvXO8N4tnsIXbmT2ifnN0oonFoloBeb&X-Amz-Signature=8255ea1b375f59ae3611986927d1e7497260b43ac5136a8055f48f546c8f0749&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
