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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SNAWSH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5m5xjioj8oGzrKh%2FK%2F5CIV8UTqNGKXMPP9Wx0UaHMGAiA9ecfRGuCULZy6zMUNHbyivKIEzOAwPAdX1Iij3qDhZSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQs1fFgsPaNgVI3%2B4KtwDtUiH0CKnDM4VHQYOnodLu%2FZQ%2BvnhiFVMJFdM9SMX5mXB5UVjP%2Bs%2Bcz3CMLlLFD0JY0fYXlbZz%2B66iO4s4%2Fujr4ylQLGjlTLkLvvsazJAI493wJ7TQSKwU0aqQJs5KzY%2BQEF7nI07A%2BYW16JKoEiQQJtro1C%2FdlN3nATJ5J7dNq4LzorsCSmuNhUC767HOAJoZcB1nnFAKq5oh6N5i4%2B4x80SKFUbxMl04buaeaEBJxcCBFCPtKKlQaygxnreUbHYpi19iCRKQEswngjkuLVshMkUXkoRgx%2Fb2AaMglGItsi6OYG4qLP1u%2Bioapeh9m80ZIRqFvlHpwe8GRxICS1SrbRTlamn3G9O5Lkc5EkVZIScz04eQojQ5%2Fb1Lo105KMiK6i3oxEQsplEq2CyFznS7msmtcnNTeGPrqzyw5OMKb4MEYBpQ9NoLkfyq5bt%2FhVS1efHynuAkr6boPC6ogDF8EmzqtD0s8l0bvXMRKxj5KDBt%2FLL9kO1XlrLLecUl2xzWrg7XM%2BqgWCtiye01qkFtjxT0fi2C8rbeI7%2BOOfeNo%2BFjhsqa66radw6KPj4zFplClsfYaE2ubMyFTaXtCJWe%2FlDB7ptWyOaOnVmNRmgvU2lBb0mbDVGH9xPHRcw5O66wwY6pgGBWdIFMQoJmmIzhveKtb13PEGDocdloEd93znQK6YpFDXBwVrBIdD8f1T00MoYxIFLPUZGNH8PBLxNeiT2ludc9lo725cdRb0tvqyr%2Berth8YBvP8yQlET%2FWpHoV8loXusRpp1F3kEyYLa3KsGHf0vvI2WGnUCzIWgDKOkiLQe%2Ben0FV4qx1kHhUZTxK8QPjx%2FL1y7Wcj708TWk3zdfz3N4Vzdfxqx&X-Amz-Signature=4576cf2af935f64e5565b408cea5e0a55d6c0d59dd360145b4bbe888912ae626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SNAWSH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5m5xjioj8oGzrKh%2FK%2F5CIV8UTqNGKXMPP9Wx0UaHMGAiA9ecfRGuCULZy6zMUNHbyivKIEzOAwPAdX1Iij3qDhZSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQs1fFgsPaNgVI3%2B4KtwDtUiH0CKnDM4VHQYOnodLu%2FZQ%2BvnhiFVMJFdM9SMX5mXB5UVjP%2Bs%2Bcz3CMLlLFD0JY0fYXlbZz%2B66iO4s4%2Fujr4ylQLGjlTLkLvvsazJAI493wJ7TQSKwU0aqQJs5KzY%2BQEF7nI07A%2BYW16JKoEiQQJtro1C%2FdlN3nATJ5J7dNq4LzorsCSmuNhUC767HOAJoZcB1nnFAKq5oh6N5i4%2B4x80SKFUbxMl04buaeaEBJxcCBFCPtKKlQaygxnreUbHYpi19iCRKQEswngjkuLVshMkUXkoRgx%2Fb2AaMglGItsi6OYG4qLP1u%2Bioapeh9m80ZIRqFvlHpwe8GRxICS1SrbRTlamn3G9O5Lkc5EkVZIScz04eQojQ5%2Fb1Lo105KMiK6i3oxEQsplEq2CyFznS7msmtcnNTeGPrqzyw5OMKb4MEYBpQ9NoLkfyq5bt%2FhVS1efHynuAkr6boPC6ogDF8EmzqtD0s8l0bvXMRKxj5KDBt%2FLL9kO1XlrLLecUl2xzWrg7XM%2BqgWCtiye01qkFtjxT0fi2C8rbeI7%2BOOfeNo%2BFjhsqa66radw6KPj4zFplClsfYaE2ubMyFTaXtCJWe%2FlDB7ptWyOaOnVmNRmgvU2lBb0mbDVGH9xPHRcw5O66wwY6pgGBWdIFMQoJmmIzhveKtb13PEGDocdloEd93znQK6YpFDXBwVrBIdD8f1T00MoYxIFLPUZGNH8PBLxNeiT2ludc9lo725cdRb0tvqyr%2Berth8YBvP8yQlET%2FWpHoV8loXusRpp1F3kEyYLa3KsGHf0vvI2WGnUCzIWgDKOkiLQe%2Ben0FV4qx1kHhUZTxK8QPjx%2FL1y7Wcj708TWk3zdfz3N4Vzdfxqx&X-Amz-Signature=024f10cec1d0dc336531e8754d0a7acd8feac9aa2fcaa99bc9ba39e393c0124c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SNAWSH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5m5xjioj8oGzrKh%2FK%2F5CIV8UTqNGKXMPP9Wx0UaHMGAiA9ecfRGuCULZy6zMUNHbyivKIEzOAwPAdX1Iij3qDhZSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQs1fFgsPaNgVI3%2B4KtwDtUiH0CKnDM4VHQYOnodLu%2FZQ%2BvnhiFVMJFdM9SMX5mXB5UVjP%2Bs%2Bcz3CMLlLFD0JY0fYXlbZz%2B66iO4s4%2Fujr4ylQLGjlTLkLvvsazJAI493wJ7TQSKwU0aqQJs5KzY%2BQEF7nI07A%2BYW16JKoEiQQJtro1C%2FdlN3nATJ5J7dNq4LzorsCSmuNhUC767HOAJoZcB1nnFAKq5oh6N5i4%2B4x80SKFUbxMl04buaeaEBJxcCBFCPtKKlQaygxnreUbHYpi19iCRKQEswngjkuLVshMkUXkoRgx%2Fb2AaMglGItsi6OYG4qLP1u%2Bioapeh9m80ZIRqFvlHpwe8GRxICS1SrbRTlamn3G9O5Lkc5EkVZIScz04eQojQ5%2Fb1Lo105KMiK6i3oxEQsplEq2CyFznS7msmtcnNTeGPrqzyw5OMKb4MEYBpQ9NoLkfyq5bt%2FhVS1efHynuAkr6boPC6ogDF8EmzqtD0s8l0bvXMRKxj5KDBt%2FLL9kO1XlrLLecUl2xzWrg7XM%2BqgWCtiye01qkFtjxT0fi2C8rbeI7%2BOOfeNo%2BFjhsqa66radw6KPj4zFplClsfYaE2ubMyFTaXtCJWe%2FlDB7ptWyOaOnVmNRmgvU2lBb0mbDVGH9xPHRcw5O66wwY6pgGBWdIFMQoJmmIzhveKtb13PEGDocdloEd93znQK6YpFDXBwVrBIdD8f1T00MoYxIFLPUZGNH8PBLxNeiT2ludc9lo725cdRb0tvqyr%2Berth8YBvP8yQlET%2FWpHoV8loXusRpp1F3kEyYLa3KsGHf0vvI2WGnUCzIWgDKOkiLQe%2Ben0FV4qx1kHhUZTxK8QPjx%2FL1y7Wcj708TWk3zdfz3N4Vzdfxqx&X-Amz-Signature=b0873851281683f465d80384f4f973b8b60cc31278c47281ebc796bb088fa15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3IECJQ2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAMLjxewXd9M1vv8X216qSnTv03pmWdXX5KqBOWtBxAiEAvbSxPlVrEXecs0FvNzeTizbZbqBeV%2BZsh69RYYaRU4AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArjJiPF1e658p5KUCrcAwVaO0cUAIRhhC%2Fq0LBxi4%2FRH%2BbToKmn4S%2FLajrxrT%2BD0fNy0SjxrVjmKEoa9YHmj4MGw9rghXz3cYcxTIyO5I%2BNB5vmA%2Bjy89bQwz6hBW3ubApA5DRcfMkxyCUNKIW9wWJiQKVPOnPZ1UpleyjTqpLTOCW2n9Iqr8PcNMSTT2tBaWmU7VteFgYMK9s350BgkUIceOpweOuBsH7%2FSCA%2BItkzdwuHNx0QVKSZ9skzfaTdQdVA3VMsx1fhjCnHZnSK7NgBFsU51GWeQdRhwC2iSW5MLtgly6o2BO%2Bd1hFz4pONNr1yEcMYCnKtXY5kev0fCKAdYqmdrXsiFtAaq2W4YUxBvqMlag%2FolDf187xhm%2F7hkuNwaXikNHUAjhnKJOOotQIcbtAH3oRn3H3nBatv3cuuQLm4bXcEZ9ofU4OtEeHJbqzJlg5Gvf7Z%2FDtZtsn4rYjgo9EdHu%2FlhSOM3xirEC4FW2M39E%2FhfWhgjjQW2bG15xnZs8X7cwH0i1xpjnRZtrPDFp40ar4zF%2B0%2BeEI4pdyQ20an4efpPXQQolF%2Fsr%2BwZMtzppsuAM0OqsYjnuwf5T1yPWSuA6BBKOF%2BWFb20t9qoO7yeqaaNZcaoiJHXPl92pmOqNYrcys5Rs2jMNLvusMGOqUBWGWkwWhaRBIb6pZqm6HurYF2JTeIGkvK5cA%2F%2FvSPkzISBmAFox6FLMPEN5l%2BZCp%2BHe4rTF3uOxHND%2B8Bhvl4gBLLJtG7Q%2BA4XZHYHdIdwvLkJfUmPmMU1%2BtVVAhG97lWSzDxCZZzhJ79m0LAnepE3UmzcqCGt5EP0LwzaIzjPfxeM95iyWedYR77j6NWIa2gnMRMudMZLWWca0TIc09SQNmyv1DZ&X-Amz-Signature=72a5a58426067ad93fdba38f13fb7a55df16e3eaf0385ec75cceab810d15e3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6ILLG7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4xSGVSp8erx7M5rNZb%2BGeuVb7Cep4A%2BT%2FOM5oyp9aTwIgFJ2FbZHOn1fYhEmo613eipsqRBfRu%2BYMBM%2Fy2fSc6AYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAni4ItdbB54Zsm%2FdyrcAybxcfSbPh9Z37xgmgV2Mri%2Bx%2Fu49RjUKAprg12TOuSklGd8U8ac7NunIKe4qKrl48s6QVzwFFNrOaiGvTdSTDqmu9sKuIQkhKa067W84anGmvQF%2FXArMHWSLspbjKlm3TgrplBPlnri9Z0NlrHPNqLn4%2Fm63avn%2FNl9pk6JPsftn%2Fa7KdWcA53oxkWaNhlL33JPB8ZO5B90U%2BlYO3ciBHWrttwMB6y5uOnMqWCXm5zizUm2s1cvCPGqROFqIDtAm6MGtMH0cSe%2BBDETW9yEvAhvL1cK1y07ejnTJ4D1UwhUgb1QmyINiKbWTPZzT%2FU%2FIc9v%2Fd%2FOyEuPBYw9u78VshD%2BUeERuXPJnOQNrmS0EGCGM6OsPKI6WViS1tj7iMr%2BCHcmuLWoD%2FUEK5rtcaMtWQ9d6T%2FhZyJZotJuKZpgsjTwjGU%2Fdh25I0ohouycRfLohGbrvGCn0FdiqhskL%2BbwLMhSRQ5dqO6a%2BVfgwSvYdPgXhtBK5eOAwkTMGzCgNt11xkQRkVgnUscH3vnjy5hOsQRqFNmO2O2V5AXmvz%2FS6MCgC3JDW%2FzRH4sTZCW5yMcpvE5TLRKnG1PffRHNDgZNnKTO4jFe7pt51RKd6wdc8%2BsxtSbP5OVnTVmZ9xDwMMzvusMGOqUBWA3TR4HZxA4bDZyZEsX723RO35HSG4hpz3YtRD7vO%2BAWImAbuHHdOTZblNmCdVExZhZfqO9Lmkrb3VGKw%2FgBHT4q7TZY%2BlAvYFa%2BwLwx7ZMndvrH0j14VTZBNZ3HfYF23OIVRm8DGPClNUze%2Bgp8HT5zfBCgP6SLYYYmXBt%2BPi4Nacn5HaO%2BjceID2YWWoIvHhHlEF9ZPs0viJh7MMzhb%2FUtx2io&X-Amz-Signature=3d8a8167cc61635a9dce5a2ce1c4bad8615878fceb049a9275ddd05671cf2d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635SNAWSH%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5m5xjioj8oGzrKh%2FK%2F5CIV8UTqNGKXMPP9Wx0UaHMGAiA9ecfRGuCULZy6zMUNHbyivKIEzOAwPAdX1Iij3qDhZSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQs1fFgsPaNgVI3%2B4KtwDtUiH0CKnDM4VHQYOnodLu%2FZQ%2BvnhiFVMJFdM9SMX5mXB5UVjP%2Bs%2Bcz3CMLlLFD0JY0fYXlbZz%2B66iO4s4%2Fujr4ylQLGjlTLkLvvsazJAI493wJ7TQSKwU0aqQJs5KzY%2BQEF7nI07A%2BYW16JKoEiQQJtro1C%2FdlN3nATJ5J7dNq4LzorsCSmuNhUC767HOAJoZcB1nnFAKq5oh6N5i4%2B4x80SKFUbxMl04buaeaEBJxcCBFCPtKKlQaygxnreUbHYpi19iCRKQEswngjkuLVshMkUXkoRgx%2Fb2AaMglGItsi6OYG4qLP1u%2Bioapeh9m80ZIRqFvlHpwe8GRxICS1SrbRTlamn3G9O5Lkc5EkVZIScz04eQojQ5%2Fb1Lo105KMiK6i3oxEQsplEq2CyFznS7msmtcnNTeGPrqzyw5OMKb4MEYBpQ9NoLkfyq5bt%2FhVS1efHynuAkr6boPC6ogDF8EmzqtD0s8l0bvXMRKxj5KDBt%2FLL9kO1XlrLLecUl2xzWrg7XM%2BqgWCtiye01qkFtjxT0fi2C8rbeI7%2BOOfeNo%2BFjhsqa66radw6KPj4zFplClsfYaE2ubMyFTaXtCJWe%2FlDB7ptWyOaOnVmNRmgvU2lBb0mbDVGH9xPHRcw5O66wwY6pgGBWdIFMQoJmmIzhveKtb13PEGDocdloEd93znQK6YpFDXBwVrBIdD8f1T00MoYxIFLPUZGNH8PBLxNeiT2ludc9lo725cdRb0tvqyr%2Berth8YBvP8yQlET%2FWpHoV8loXusRpp1F3kEyYLa3KsGHf0vvI2WGnUCzIWgDKOkiLQe%2Ben0FV4qx1kHhUZTxK8QPjx%2FL1y7Wcj708TWk3zdfz3N4Vzdfxqx&X-Amz-Signature=f97725f3a2e30565d98eb1a1fcac77ba32a0ebd0f4be882d064bd7ca495643fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
