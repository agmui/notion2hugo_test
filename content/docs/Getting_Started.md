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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ROIMQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDgVgQj3awwgdQlBzMi%2Bzew%2BslycLg8O92htbcal7pzvAiBTVQPM%2FTC%2BPnpTyS8epgDNePFQk%2Bd6huh1oQCupRX98yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMF53x2t9crtZwAMAxKtwD%2B3wBoI52teyCWh7V6gMyUNfKETp2umjciGJbV1q184E2bIFrHaZhAvyZtFfxLyAqPnyeROTBMxp%2B5rsP0w9ms1NCGboIz69LaNgXyRhq00TT14jdnrIJcNd8vMy2rx9oacvzoaCRszNCE0PN7i4EbMJQvVwZpUJXKW8iwxxvjVVd%2FF%2B2ASUdOrbvKINeXXzapUHtkDuK8EAyOcwaAUyzgpiaN7Skgn%2BqCBcFVD%2F7cN6yWle2laDHKfua0qgM8cY43GNP3w9uYuW%2BhM8asm4xAF8EtmzuXrCVgRU5anVkjhMR9hmnE27rBQJzP%2FlaiiDVbiXAgDjIje4V0FkFUolePkmXFsLMBIruF21DbHDqelrRaz9znYOybDWUCFdDydoo7UdTgo7wc0NumD5Tqb3VDMXnwhvMolmeywcjp0sHaPuVw9XzrdvJ2hsGLbWZDr0%2FLtcXrkhhXm%2FfZTmhIOTT8S%2B4HUzKrjhEPjDwUrZakkmUHQMW%2F5YcKnd9C5z8N9ZoGy7wZdY%2Bi4T3A2BGNO1YintNTNfJOylw8ZZLMfsAIgqle1fnPWdXZgUPAaVf8bmkettA5NGYYyi6sDWyzLG4jEtAwhfLbUzaROahp24e8hCOTjmjlaZO0hwHZGIwxIrAwgY6pgGDMXjBTjWVj%2BwXqGh9HiApBXZH0qwXtS%2BcJsWjrfdqOgF1zggDvMaR9DiUmxY4cBFVHFI7%2F1T6fd2A42HDTYhNkcbhHykVtANwpLGQScWbkXaydJ8%2BlqD5Y6S54TexCz6drrJpseljS4CiiZL4vdXYEtGiKE%2FjP7mMMjZvQpCQzmUkz6PqmUU0HyxEPpk42bEIL3GYHXBFJnWrt0WvRzPdHjiyPxCq&X-Amz-Signature=5a7dec736e060dcd8b0bf24c59a6ffdbab7bcce12119417a7933e2f40ad91d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ROIMQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDgVgQj3awwgdQlBzMi%2Bzew%2BslycLg8O92htbcal7pzvAiBTVQPM%2FTC%2BPnpTyS8epgDNePFQk%2Bd6huh1oQCupRX98yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMF53x2t9crtZwAMAxKtwD%2B3wBoI52teyCWh7V6gMyUNfKETp2umjciGJbV1q184E2bIFrHaZhAvyZtFfxLyAqPnyeROTBMxp%2B5rsP0w9ms1NCGboIz69LaNgXyRhq00TT14jdnrIJcNd8vMy2rx9oacvzoaCRszNCE0PN7i4EbMJQvVwZpUJXKW8iwxxvjVVd%2FF%2B2ASUdOrbvKINeXXzapUHtkDuK8EAyOcwaAUyzgpiaN7Skgn%2BqCBcFVD%2F7cN6yWle2laDHKfua0qgM8cY43GNP3w9uYuW%2BhM8asm4xAF8EtmzuXrCVgRU5anVkjhMR9hmnE27rBQJzP%2FlaiiDVbiXAgDjIje4V0FkFUolePkmXFsLMBIruF21DbHDqelrRaz9znYOybDWUCFdDydoo7UdTgo7wc0NumD5Tqb3VDMXnwhvMolmeywcjp0sHaPuVw9XzrdvJ2hsGLbWZDr0%2FLtcXrkhhXm%2FfZTmhIOTT8S%2B4HUzKrjhEPjDwUrZakkmUHQMW%2F5YcKnd9C5z8N9ZoGy7wZdY%2Bi4T3A2BGNO1YintNTNfJOylw8ZZLMfsAIgqle1fnPWdXZgUPAaVf8bmkettA5NGYYyi6sDWyzLG4jEtAwhfLbUzaROahp24e8hCOTjmjlaZO0hwHZGIwxIrAwgY6pgGDMXjBTjWVj%2BwXqGh9HiApBXZH0qwXtS%2BcJsWjrfdqOgF1zggDvMaR9DiUmxY4cBFVHFI7%2F1T6fd2A42HDTYhNkcbhHykVtANwpLGQScWbkXaydJ8%2BlqD5Y6S54TexCz6drrJpseljS4CiiZL4vdXYEtGiKE%2FjP7mMMjZvQpCQzmUkz6PqmUU0HyxEPpk42bEIL3GYHXBFJnWrt0WvRzPdHjiyPxCq&X-Amz-Signature=a2fa2685a42bd2ec4dd64b7c3bb0366c775d23b502418076c9dab60d52e08743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ROIMQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDgVgQj3awwgdQlBzMi%2Bzew%2BslycLg8O92htbcal7pzvAiBTVQPM%2FTC%2BPnpTyS8epgDNePFQk%2Bd6huh1oQCupRX98yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMF53x2t9crtZwAMAxKtwD%2B3wBoI52teyCWh7V6gMyUNfKETp2umjciGJbV1q184E2bIFrHaZhAvyZtFfxLyAqPnyeROTBMxp%2B5rsP0w9ms1NCGboIz69LaNgXyRhq00TT14jdnrIJcNd8vMy2rx9oacvzoaCRszNCE0PN7i4EbMJQvVwZpUJXKW8iwxxvjVVd%2FF%2B2ASUdOrbvKINeXXzapUHtkDuK8EAyOcwaAUyzgpiaN7Skgn%2BqCBcFVD%2F7cN6yWle2laDHKfua0qgM8cY43GNP3w9uYuW%2BhM8asm4xAF8EtmzuXrCVgRU5anVkjhMR9hmnE27rBQJzP%2FlaiiDVbiXAgDjIje4V0FkFUolePkmXFsLMBIruF21DbHDqelrRaz9znYOybDWUCFdDydoo7UdTgo7wc0NumD5Tqb3VDMXnwhvMolmeywcjp0sHaPuVw9XzrdvJ2hsGLbWZDr0%2FLtcXrkhhXm%2FfZTmhIOTT8S%2B4HUzKrjhEPjDwUrZakkmUHQMW%2F5YcKnd9C5z8N9ZoGy7wZdY%2Bi4T3A2BGNO1YintNTNfJOylw8ZZLMfsAIgqle1fnPWdXZgUPAaVf8bmkettA5NGYYyi6sDWyzLG4jEtAwhfLbUzaROahp24e8hCOTjmjlaZO0hwHZGIwxIrAwgY6pgGDMXjBTjWVj%2BwXqGh9HiApBXZH0qwXtS%2BcJsWjrfdqOgF1zggDvMaR9DiUmxY4cBFVHFI7%2F1T6fd2A42HDTYhNkcbhHykVtANwpLGQScWbkXaydJ8%2BlqD5Y6S54TexCz6drrJpseljS4CiiZL4vdXYEtGiKE%2FjP7mMMjZvQpCQzmUkz6PqmUU0HyxEPpk42bEIL3GYHXBFJnWrt0WvRzPdHjiyPxCq&X-Amz-Signature=0201530c96c9bc03aff33236b04b792ccf16fcff209099d4f3c4a3db7a5e36dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVU6VGP%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDoQNmZZR9TtpaT%2B8ue9LcH%2Fz%2BiY8NXL%2BIdBbhDdyV%2BZAIhAJrkAealRCHeFVmFXlXvSeeZfQ78g0pyUOXRukSnCjT1Kv8DCFwQABoMNjM3NDIzMTgzODA1IgwxIZNPWQwsjxdBvAcq3AOQuabXjZYdaQ5ln%2BDKgU6Ilt%2BKEGgA5SvhAU2bLLlXy%2FDDstdbPv817XZtfmClIArFiM%2FOWcczD148DpYNMzAHp7Rw%2Byh0LlVsfblSftLvxi6y6oH59Zd6L%2FNg7%2ByrMwg45tMBJPG5LBAkc3jDYcB0ACSGwrQur4YheeSQG5ZB2VTp5G2piYxpqmXImM3wWAjyT7hzcWBgmup8880aASfdV%2BDkB8P4RS3c9pHf%2FyUOg2pTsbzpMbRLF9nDrfH9A1lrZGrsYjrXpjftb%2BYRgUBcbotYCaceBoR3b0pRUVZC4doZdfDM3b8jcC%2FEB2eVMtoGXMwIW9Bw2JDX7nyLPtGQZ9JF8%2BO420y6ITOnEQUrwxkmV0hae9PMyhupc%2B171n0wCUWmwKTjalPEahXzcp5rEtlqM2FcIwRxHUOYvYwP188sRxT3oqFT%2BDA52bS%2By1hU0wZ0qGBRwSWW2UQUK35ITfh823Xr7xOp%2BGtiBtVfUALLvCjZgAOGraJiYYfnnohXO%2FE3iC7iFmLllzqS2qsaLKTqB20fYkVKai4AuylHD6LmVj8O7vTluTW3w6k9AfciiAMOF%2BGRt2VzoqYWm3W7QAVhM6%2BwPwjGSAwSNEbo9Nbr7Ml7NO%2BNTpLYEjDa47%2FCBjqkAcDOrlvuUpzse3bA1lxt2ei%2Fv9Nh900RxjNq0JtUxgEGo%2Fve2TiCODLJXwEWoROKhCq6%2BCgewXriXgOc5cxG9I9hNk9rWjSHB3zeJuVgnk%2FaqYHTs3E2tcnol45G4ZkxOD5Ms82lMp0BT5NHUBi%2FDLY8DpX40y545CYGKYGFwSjcvLGLaIUPo1p7dL2e5wnsNt5EJ0uydeE380WYcLDS6%2B836txD&X-Amz-Signature=979b499c3d2bc8fea4a85938a3b17f81a13f719b9b2c3cbc134feb24eac1a3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LFJ7SS%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEiPYVOUThT4KxNYVrmazSSuq6HYABMvIRlYl7%2BU8OWuAiEAxVsns%2F%2BzoMITGFWkRorbnjAJ%2BTf2A9bErsm5RhXmtS8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDMGsGgoSvgLKt7KD4yrcAxOa3iRE0DqD78VU8rcIGD3NlFdndYGwmganMpnI8Q9MkhUmBYW7dPo7fj8U0az6c5Nfdjxfnwnnjf44EGgrnbvPUdrRC3nR4GkFbMADJAK019LagNMztEH4Fy7eeQCjCHJ7obEsCBDgpWtOh4kDbUJ7Asv3o6k5PFEdURbQXPwcepXAHj%2BkQQ0vEehzVM%2FCKLOzBEEiMgg%2B5lLNyFX%2BARs6koLp9xsydcRIeJo70WDaf7D%2F838lTCV9wPVCQEygIFwoVDWSqoQU5H8gM8tKlYzpr2V7UwsVBz75bpnp1HT5p8SOcY8OTo46c4JU5kbRkxm8lPOo2PwTeHocVSNJZdOhQpE9u90oCUwO9Bk80oLao0EANTZlVEtFolcxVXt7CH6vv9JFIiB%2FJWkva3JPF3IsuB4W4I8VaB4fIi3mMDuVtVtBsFYDZkYXpcVNtzjs59XoO2fqMvStVqvVtcF%2ByneMU64XJAXcWsEeR8ZGAzELzrHZq1z1yFB%2F9qbOVNVLYrxYdY9Cdead3ZXPcbHs4rePj8U%2BnYon4P2f6kUjcD%2BHja0D0LxAYMy0yunP8IZJxXB1I0JwmOiF9Tr5Yc3FJyLhYteQwaIfQsDyrpar1hmLozeJZLjuyfqRaDIzMLfjv8IGOqUBtoPwYXFw7fedq4AEG8letePevOj5Mthg81EUY0QPaIGUi5CaeEhV7raJA1vgYDIFFRzjMqWoW4E0kqhCBdBawgN%2BNUnJ3%2B1Pquaxbx%2BPF3slOh80LdrGgYzl%2BKOKIrjEbJURmT1siXpF0SmFI4gmwtL1V6m9v0WREEnX90yh7ZitJVpnlzASc8l9qc2X6dcCWrt0pAANyGROxI%2BTh6lJrBNuxmRJ&X-Amz-Signature=4f0917765b2523c73a423dffafef63051b0d76e3d03fbb6d241c5cece37be58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6ROIMQG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDgVgQj3awwgdQlBzMi%2Bzew%2BslycLg8O92htbcal7pzvAiBTVQPM%2FTC%2BPnpTyS8epgDNePFQk%2Bd6huh1oQCupRX98yr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMF53x2t9crtZwAMAxKtwD%2B3wBoI52teyCWh7V6gMyUNfKETp2umjciGJbV1q184E2bIFrHaZhAvyZtFfxLyAqPnyeROTBMxp%2B5rsP0w9ms1NCGboIz69LaNgXyRhq00TT14jdnrIJcNd8vMy2rx9oacvzoaCRszNCE0PN7i4EbMJQvVwZpUJXKW8iwxxvjVVd%2FF%2B2ASUdOrbvKINeXXzapUHtkDuK8EAyOcwaAUyzgpiaN7Skgn%2BqCBcFVD%2F7cN6yWle2laDHKfua0qgM8cY43GNP3w9uYuW%2BhM8asm4xAF8EtmzuXrCVgRU5anVkjhMR9hmnE27rBQJzP%2FlaiiDVbiXAgDjIje4V0FkFUolePkmXFsLMBIruF21DbHDqelrRaz9znYOybDWUCFdDydoo7UdTgo7wc0NumD5Tqb3VDMXnwhvMolmeywcjp0sHaPuVw9XzrdvJ2hsGLbWZDr0%2FLtcXrkhhXm%2FfZTmhIOTT8S%2B4HUzKrjhEPjDwUrZakkmUHQMW%2F5YcKnd9C5z8N9ZoGy7wZdY%2Bi4T3A2BGNO1YintNTNfJOylw8ZZLMfsAIgqle1fnPWdXZgUPAaVf8bmkettA5NGYYyi6sDWyzLG4jEtAwhfLbUzaROahp24e8hCOTjmjlaZO0hwHZGIwxIrAwgY6pgGDMXjBTjWVj%2BwXqGh9HiApBXZH0qwXtS%2BcJsWjrfdqOgF1zggDvMaR9DiUmxY4cBFVHFI7%2F1T6fd2A42HDTYhNkcbhHykVtANwpLGQScWbkXaydJ8%2BlqD5Y6S54TexCz6drrJpseljS4CiiZL4vdXYEtGiKE%2FjP7mMMjZvQpCQzmUkz6PqmUU0HyxEPpk42bEIL3GYHXBFJnWrt0WvRzPdHjiyPxCq&X-Amz-Signature=a48987f7527dae457365c03ea073ffeb952ba529dcf53b618b82d88425e662d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
