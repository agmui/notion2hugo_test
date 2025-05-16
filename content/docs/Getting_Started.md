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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636Y56EPT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC31ATLSCdv8Xn0PGGqGfDA0kGXsD8x6CozWoYZWxdqsgIgIL54DeAoUH62dq3yX%2Fsj2KWeKNL2rHFtfC6%2FEt3f4Bwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDClPjXsh9e9CL5lioCrcAwSutiesn7LlKK13PafaFJxrgy58TwT1l40Vw9WE5oQtj%2BADzOCph6tqBF4iZNyLu64ZPBy5LhQSfe8f9O3Q08XbDjxWwfJaWaVPChi%2F5pbN1ZW50PvTjhVPqv1U5VhtpD1DJTG%2Bv2vcU6UcLKrlP6s2mpcSLwOmtdjuNqyhuk0YRB85E%2Bos6v22u46OBJ6J4H%2B0%2BR4b8JEZf5Glcd8wq%2BxQ7JjAZOuqqGCPWR0eBxkSbK7CaEVv4aUsdXezpve4aXL16YQY3cu3%2B%2BqQcTd3r%2FQ0MvR9Fz%2F3Lt9%2BOoNrONuNSjrGTt%2F6%2BGbqNyZvul%2BKs6zEctovYc0kdvVL1Q9aj2e8ZbmjVEh6VgCQ0L3kH4jZl8RKL91IZG3SylacBsCcQG3K36zhVPofEwEQxa5rKdCr8jR8PP0fDtsxmUXqv%2FSjuhF6se2dnPLNY7XPNLVzC716Elgyt4%2BnaaVyVAhTa9YVXtAvTcGrnzp0ruHZdpToHPOtkeYajJfovS8oXXHtfw58qnUKBLDnsyPmr4uQuCd1taA124HqftILg%2FeLW4MMqnFjoZBlLb21%2FX0ZvXi7MWSTGef8GXsf34FlwXNYBeF%2FgKCqYVNqkq4pcM%2BRaAS97kMUHEYSE2FmNyeNMLCHm8EGOqUBhUisk%2Bv59Hnzdj1NY3j9e%2FY48doyAQoW9ge3SXpGpWMzpezve4%2B7Ie5cFom0hlrp7JAZZHsO0gfTedfLWlljFssmDrqegXxjgg68wC9UUQ4LZJ%2BqvmtVAx0tn%2B8064wSR%2B%2BU3OD1wMivxyj17jk8M3dXg6HYD%2FcC89dDwogyM8N1N5E78DwcSRSY8dugMN6%2FB2%2B9k5fK13fUyTfehI0vsXuyUU7f&X-Amz-Signature=73ebba444bc297b70381f5596f9370b5876bfc997bdb2e897e0e2378326e5533&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636Y56EPT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC31ATLSCdv8Xn0PGGqGfDA0kGXsD8x6CozWoYZWxdqsgIgIL54DeAoUH62dq3yX%2Fsj2KWeKNL2rHFtfC6%2FEt3f4Bwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDClPjXsh9e9CL5lioCrcAwSutiesn7LlKK13PafaFJxrgy58TwT1l40Vw9WE5oQtj%2BADzOCph6tqBF4iZNyLu64ZPBy5LhQSfe8f9O3Q08XbDjxWwfJaWaVPChi%2F5pbN1ZW50PvTjhVPqv1U5VhtpD1DJTG%2Bv2vcU6UcLKrlP6s2mpcSLwOmtdjuNqyhuk0YRB85E%2Bos6v22u46OBJ6J4H%2B0%2BR4b8JEZf5Glcd8wq%2BxQ7JjAZOuqqGCPWR0eBxkSbK7CaEVv4aUsdXezpve4aXL16YQY3cu3%2B%2BqQcTd3r%2FQ0MvR9Fz%2F3Lt9%2BOoNrONuNSjrGTt%2F6%2BGbqNyZvul%2BKs6zEctovYc0kdvVL1Q9aj2e8ZbmjVEh6VgCQ0L3kH4jZl8RKL91IZG3SylacBsCcQG3K36zhVPofEwEQxa5rKdCr8jR8PP0fDtsxmUXqv%2FSjuhF6se2dnPLNY7XPNLVzC716Elgyt4%2BnaaVyVAhTa9YVXtAvTcGrnzp0ruHZdpToHPOtkeYajJfovS8oXXHtfw58qnUKBLDnsyPmr4uQuCd1taA124HqftILg%2FeLW4MMqnFjoZBlLb21%2FX0ZvXi7MWSTGef8GXsf34FlwXNYBeF%2FgKCqYVNqkq4pcM%2BRaAS97kMUHEYSE2FmNyeNMLCHm8EGOqUBhUisk%2Bv59Hnzdj1NY3j9e%2FY48doyAQoW9ge3SXpGpWMzpezve4%2B7Ie5cFom0hlrp7JAZZHsO0gfTedfLWlljFssmDrqegXxjgg68wC9UUQ4LZJ%2BqvmtVAx0tn%2B8064wSR%2B%2BU3OD1wMivxyj17jk8M3dXg6HYD%2FcC89dDwogyM8N1N5E78DwcSRSY8dugMN6%2FB2%2B9k5fK13fUyTfehI0vsXuyUU7f&X-Amz-Signature=439cbeb7b227d7f6eaa6add77e2a8d78bca31d634df1e82325014cee501c047e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636Y56EPT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC31ATLSCdv8Xn0PGGqGfDA0kGXsD8x6CozWoYZWxdqsgIgIL54DeAoUH62dq3yX%2Fsj2KWeKNL2rHFtfC6%2FEt3f4Bwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDClPjXsh9e9CL5lioCrcAwSutiesn7LlKK13PafaFJxrgy58TwT1l40Vw9WE5oQtj%2BADzOCph6tqBF4iZNyLu64ZPBy5LhQSfe8f9O3Q08XbDjxWwfJaWaVPChi%2F5pbN1ZW50PvTjhVPqv1U5VhtpD1DJTG%2Bv2vcU6UcLKrlP6s2mpcSLwOmtdjuNqyhuk0YRB85E%2Bos6v22u46OBJ6J4H%2B0%2BR4b8JEZf5Glcd8wq%2BxQ7JjAZOuqqGCPWR0eBxkSbK7CaEVv4aUsdXezpve4aXL16YQY3cu3%2B%2BqQcTd3r%2FQ0MvR9Fz%2F3Lt9%2BOoNrONuNSjrGTt%2F6%2BGbqNyZvul%2BKs6zEctovYc0kdvVL1Q9aj2e8ZbmjVEh6VgCQ0L3kH4jZl8RKL91IZG3SylacBsCcQG3K36zhVPofEwEQxa5rKdCr8jR8PP0fDtsxmUXqv%2FSjuhF6se2dnPLNY7XPNLVzC716Elgyt4%2BnaaVyVAhTa9YVXtAvTcGrnzp0ruHZdpToHPOtkeYajJfovS8oXXHtfw58qnUKBLDnsyPmr4uQuCd1taA124HqftILg%2FeLW4MMqnFjoZBlLb21%2FX0ZvXi7MWSTGef8GXsf34FlwXNYBeF%2FgKCqYVNqkq4pcM%2BRaAS97kMUHEYSE2FmNyeNMLCHm8EGOqUBhUisk%2Bv59Hnzdj1NY3j9e%2FY48doyAQoW9ge3SXpGpWMzpezve4%2B7Ie5cFom0hlrp7JAZZHsO0gfTedfLWlljFssmDrqegXxjgg68wC9UUQ4LZJ%2BqvmtVAx0tn%2B8064wSR%2B%2BU3OD1wMivxyj17jk8M3dXg6HYD%2FcC89dDwogyM8N1N5E78DwcSRSY8dugMN6%2FB2%2B9k5fK13fUyTfehI0vsXuyUU7f&X-Amz-Signature=62c8a23791c5386b03170d8ace35e2db6b035cc2634a6c3477d41fcb2efb2cff&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D2CL6L3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2OaskrU000nvpmHX7ECBL5rmEKegNGhEx41u0%2FHRVmAIhAOX0T6EO9r%2BWdl7GzZ5q73yNscSUz%2BNziPLdum8X1Co3Kv8DCD4QABoMNjM3NDIzMTgzODA1IgwiMGg9IxNCtpnHEaUq3APa71Td9BdGSpcKDh0x7LsQYs%2B4h6jigjc1D%2BrAXs1ALHBhL%2BFaoJmfjcfhT1X%2FigocKJhGpSezMO4KMgnIBioIKb0UXLImHAjLfsVD3CJ3mVoAj7yd4QnC4gMXKQRLgojZ80EFXx%2FaEkQRp6%2FQJvgLQdFDwbXL3kM3l5POPU2J%2FBh8HtGskhb3j86PkWXM4BXSsrxVblw11LcI4l%2BbVLKYq1%2Ff4aKcEY1MAbn0A%2Bcs0zw00Fyo1vZwdsB%2BuVGp%2FJ8XTE1icpvCh5YeHRsVYCyjzPDTVK6vNXcpCFxXaQCueQ%2BDlJTXnHMhY0aXlsiSfZmOhF6h3oHCszYUyS5%2FlKBlivH6VY7BavvKFjCI5Js%2Fg1mb%2F1T7sPmyI%2BHJpr%2FtDGTBQPbEFYm1pAE3TueJYQeyi0bv32UWE90zpBgeWgjyzXgnT1mtlmYIFHD4IT7gL6ObQkeaDVeUhOonZyHyiDZw1G3PpqelYsxzNxvvW7carNqhNlc%2FKsd16pJTnRw0%2Fku5LycBGoFLhcljiNiPob1gBAvr08Kzw00iHdZOYKvlifaorZw3qt6EgGQBon5PEk9b6ySTn8ntOmnKoD4KpBUCGJ65n%2Bo5NRmR0P%2Bpmv3w8grVk%2FoC9Z96s6r06DCQh5vBBjqkAfG%2BSh4d1jmWpCJmJpFdRxhqgUZ3VSSXOlC5gMcKr2%2Fq%2BiH1sm8sijrf5GGCv8qHXD2QWTfkESH6JxgqBKxVG8iWOlIZh0FgdEC3D2BF4mRl88tpdKyIZv%2F7V62oWiJTAERC2EutaXSeyHBZUKL5p0NOrdXE5d95HKfvwHAT3JwlhrFWMArCBp%2Faj93LQMkv1r7xfEkGwgWFFrMa1DxPEXqy9JrA&X-Amz-Signature=c97b30bc15036eb1bf0708073e75f2470b20f0634378ca970f246125067981f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYNDFOK4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxALu3yzZlBREviSb7%2F%2Bgx0pzTM6ALP85riuFFQ7l9aAiAKAizTG56L%2BAAQ9Dwj3TWJ5DVSM7f4ADvllmYAgUTudyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMLjD6WMp7C%2F3kTuS2KtwDeQ6AoMSO0oKto5DVB3WZimnAQBgf1RtEjtVk4jH8s2yIhfEQf1TJlxdorHiBzfLo1NUSCh%2FLKGPbGtx9cqgupOzG6lKhXjAe%2BEDHnvs7mnQA9I%2FZ11DNA5kUqGxEcvrx2MTs536rUl1nZU1VHSNph8mZxiY5NXnMeJm5Bwjbfz1BXRnNYYnURhZDO0STcCqvH8RavGoyzzRNl30poAuS4omrEl2R7MJmutO5znsSlvos5QI6kxhKqShx04SJTZ0b9CpiybBo7zwUovomb%2BMOH2%2FkobvOrl08BUG9E34mBAB4q2%2FFWfN2MI66bvXQWJWd8dEFrxWCXHfvfZ7CbAylXVzJb3VMOqnbPN4APVhh5bUBLx%2BDNbW4hlwuluBCCDfUga4zw18UcZqQqo8doIufX48f5gsqIGAJ9X8rm43NOQYm03aqmsEy1S%2FGQ7RJZTM3tyLt92BzaaLfojilJ%2FNT9Xyja0R56h8ZPmRLP%2FfMM6U1wC6wHauw8hH6bltl7EdsvDq8keh5epOGQXoV9iIhVrYHhbV40Qjmf6q03JxN5BG1IGfza3EZ1HFY4uXSpii8EFNiciUJzlpstGnC1r6tZ94mc9l07gbTxjTBPSV%2F7Ibl91i4MhMlMpw80Cow84abwQY6pgEPq1FD92CbkscP5VCRLwPT6xwks7dVsU%2B075Xza%2FhTMQcj%2F8sDaOW7d7%2BYgw9S6s8udkBJN8k2bttmtosRsNhK22jKWU0aLp8sasJWgo0K3IiSM451T2dJv3r8mNAXflXsaQQXHDhHwEYIzOBjMRBQjOvim8YsaY9JtAT7eeJWj3QD3Tt7FY7cHqzn060%2BXHzy5ZbnDCwKsA%2BnqC2mtIcNffQLZfFG&X-Amz-Signature=fa03f926b607d3536e16076428b1107d46d6fdac4b960a497e689c2057a37d83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636Y56EPT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC31ATLSCdv8Xn0PGGqGfDA0kGXsD8x6CozWoYZWxdqsgIgIL54DeAoUH62dq3yX%2Fsj2KWeKNL2rHFtfC6%2FEt3f4Bwq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDClPjXsh9e9CL5lioCrcAwSutiesn7LlKK13PafaFJxrgy58TwT1l40Vw9WE5oQtj%2BADzOCph6tqBF4iZNyLu64ZPBy5LhQSfe8f9O3Q08XbDjxWwfJaWaVPChi%2F5pbN1ZW50PvTjhVPqv1U5VhtpD1DJTG%2Bv2vcU6UcLKrlP6s2mpcSLwOmtdjuNqyhuk0YRB85E%2Bos6v22u46OBJ6J4H%2B0%2BR4b8JEZf5Glcd8wq%2BxQ7JjAZOuqqGCPWR0eBxkSbK7CaEVv4aUsdXezpve4aXL16YQY3cu3%2B%2BqQcTd3r%2FQ0MvR9Fz%2F3Lt9%2BOoNrONuNSjrGTt%2F6%2BGbqNyZvul%2BKs6zEctovYc0kdvVL1Q9aj2e8ZbmjVEh6VgCQ0L3kH4jZl8RKL91IZG3SylacBsCcQG3K36zhVPofEwEQxa5rKdCr8jR8PP0fDtsxmUXqv%2FSjuhF6se2dnPLNY7XPNLVzC716Elgyt4%2BnaaVyVAhTa9YVXtAvTcGrnzp0ruHZdpToHPOtkeYajJfovS8oXXHtfw58qnUKBLDnsyPmr4uQuCd1taA124HqftILg%2FeLW4MMqnFjoZBlLb21%2FX0ZvXi7MWSTGef8GXsf34FlwXNYBeF%2FgKCqYVNqkq4pcM%2BRaAS97kMUHEYSE2FmNyeNMLCHm8EGOqUBhUisk%2Bv59Hnzdj1NY3j9e%2FY48doyAQoW9ge3SXpGpWMzpezve4%2B7Ie5cFom0hlrp7JAZZHsO0gfTedfLWlljFssmDrqegXxjgg68wC9UUQ4LZJ%2BqvmtVAx0tn%2B8064wSR%2B%2BU3OD1wMivxyj17jk8M3dXg6HYD%2FcC89dDwogyM8N1N5E78DwcSRSY8dugMN6%2FB2%2B9k5fK13fUyTfehI0vsXuyUU7f&X-Amz-Signature=b684bbab274462351b7cbdcd8a011603dd14ddea8a814ab27526b381b5dd953d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
