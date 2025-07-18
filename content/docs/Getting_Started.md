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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI3KSDD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCOPUheCDGpQ%2F0j7kCYGpl41YiUSWblV%2FRSK8jvkaxBRgIhANrelJV0%2FWoFj6f0Iz67ObbcKxFJXCtEVwsiIimQBIzhKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqsZf7D5yiTp1LEQcq3ANxEdsLas1zTztDN6aq46PScTgMC88wMFvb2nBPuJL0JNJey7wSwErdgE8VJIYx1%2BCWw029G%2BmrHr4F1E%2F9YtG6gOlDl%2Bt%2FM2qDK9msATUUHVSjqDMLEJA99hEbXbbldQP3Y8A5T83TW7Y10fKeD9OIsoHmFKxAfjKiKhHyuvDm412iKhzwu%2FxK6b9yGs77qBtvTsO%2Fi4ClnxHcA7py0qYkPNDd8vZIj2ugNrUegV4JA%2FqSkJ6TZiXuApOzWQebIunCVdnKWXYwrN1D1zy6WxqJIjmg7G8s38gOK1grVqSpAXrIMJmHiPJhWGE407yWCSVvchMs1BmLqQcMwVBI1iA3gkwMrj4aE1AGJILakg7fxmAbhgCSYcecW83Fc3HC3l3LeoQ3GkVOiN7tAykULY%2B51e%2BTPef9cpqw%2FAftPOANP4ec7Id1ycrLA9NMOyrsInPBGsbqSG74zGcAZ4uVAd5gGJ90M1i9VhZi4bZZbQDeCxci4cvVqJlSQqqDcvBFd%2FMG4LYlG92AuGWJQDAfTP4PSL6fW9g1wwse%2BteiyqcaKs6%2B%2BLf7U3w5mxaQYlnUQazY6sFxkL4dBoQVdaCN50%2BiAW2h%2ByZo4l9Tnj50HLNQ1JhJtqAuiNOznREk3TC4o%2BjDBjqkAYZNOCtP1A0iCEfipKaUCCiFk8GM4AV1qlKdZkHIP4wx9%2BqfbZlcxz4%2BV1yGNfjRkI5cowaoJhPUjqQ29xu0p5Ep%2B%2FiTtWzynho4yG8fmkT2tk8DSpW9q7o8DCu9WYq5TJYMsW1X%2FZJttJxiM%2BWXkZzwV9Bo7AiC3oZsJzyEJ9u5c%2FR6g6ik1%2BH%2BOErcG0k978iNQ3wTx8NBUH3ifcbp9J0jl54x&X-Amz-Signature=c3ca7acb1c0c5818d492f18cf6f6b3146c481217bfb78950cd189a4dcc945967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI3KSDD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCOPUheCDGpQ%2F0j7kCYGpl41YiUSWblV%2FRSK8jvkaxBRgIhANrelJV0%2FWoFj6f0Iz67ObbcKxFJXCtEVwsiIimQBIzhKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqsZf7D5yiTp1LEQcq3ANxEdsLas1zTztDN6aq46PScTgMC88wMFvb2nBPuJL0JNJey7wSwErdgE8VJIYx1%2BCWw029G%2BmrHr4F1E%2F9YtG6gOlDl%2Bt%2FM2qDK9msATUUHVSjqDMLEJA99hEbXbbldQP3Y8A5T83TW7Y10fKeD9OIsoHmFKxAfjKiKhHyuvDm412iKhzwu%2FxK6b9yGs77qBtvTsO%2Fi4ClnxHcA7py0qYkPNDd8vZIj2ugNrUegV4JA%2FqSkJ6TZiXuApOzWQebIunCVdnKWXYwrN1D1zy6WxqJIjmg7G8s38gOK1grVqSpAXrIMJmHiPJhWGE407yWCSVvchMs1BmLqQcMwVBI1iA3gkwMrj4aE1AGJILakg7fxmAbhgCSYcecW83Fc3HC3l3LeoQ3GkVOiN7tAykULY%2B51e%2BTPef9cpqw%2FAftPOANP4ec7Id1ycrLA9NMOyrsInPBGsbqSG74zGcAZ4uVAd5gGJ90M1i9VhZi4bZZbQDeCxci4cvVqJlSQqqDcvBFd%2FMG4LYlG92AuGWJQDAfTP4PSL6fW9g1wwse%2BteiyqcaKs6%2B%2BLf7U3w5mxaQYlnUQazY6sFxkL4dBoQVdaCN50%2BiAW2h%2ByZo4l9Tnj50HLNQ1JhJtqAuiNOznREk3TC4o%2BjDBjqkAYZNOCtP1A0iCEfipKaUCCiFk8GM4AV1qlKdZkHIP4wx9%2BqfbZlcxz4%2BV1yGNfjRkI5cowaoJhPUjqQ29xu0p5Ep%2B%2FiTtWzynho4yG8fmkT2tk8DSpW9q7o8DCu9WYq5TJYMsW1X%2FZJttJxiM%2BWXkZzwV9Bo7AiC3oZsJzyEJ9u5c%2FR6g6ik1%2BH%2BOErcG0k978iNQ3wTx8NBUH3ifcbp9J0jl54x&X-Amz-Signature=791046b27925750757671ef600cebbbb88ca4a01a45d36994cf0c1253bf1fa6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI3KSDD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCOPUheCDGpQ%2F0j7kCYGpl41YiUSWblV%2FRSK8jvkaxBRgIhANrelJV0%2FWoFj6f0Iz67ObbcKxFJXCtEVwsiIimQBIzhKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqsZf7D5yiTp1LEQcq3ANxEdsLas1zTztDN6aq46PScTgMC88wMFvb2nBPuJL0JNJey7wSwErdgE8VJIYx1%2BCWw029G%2BmrHr4F1E%2F9YtG6gOlDl%2Bt%2FM2qDK9msATUUHVSjqDMLEJA99hEbXbbldQP3Y8A5T83TW7Y10fKeD9OIsoHmFKxAfjKiKhHyuvDm412iKhzwu%2FxK6b9yGs77qBtvTsO%2Fi4ClnxHcA7py0qYkPNDd8vZIj2ugNrUegV4JA%2FqSkJ6TZiXuApOzWQebIunCVdnKWXYwrN1D1zy6WxqJIjmg7G8s38gOK1grVqSpAXrIMJmHiPJhWGE407yWCSVvchMs1BmLqQcMwVBI1iA3gkwMrj4aE1AGJILakg7fxmAbhgCSYcecW83Fc3HC3l3LeoQ3GkVOiN7tAykULY%2B51e%2BTPef9cpqw%2FAftPOANP4ec7Id1ycrLA9NMOyrsInPBGsbqSG74zGcAZ4uVAd5gGJ90M1i9VhZi4bZZbQDeCxci4cvVqJlSQqqDcvBFd%2FMG4LYlG92AuGWJQDAfTP4PSL6fW9g1wwse%2BteiyqcaKs6%2B%2BLf7U3w5mxaQYlnUQazY6sFxkL4dBoQVdaCN50%2BiAW2h%2ByZo4l9Tnj50HLNQ1JhJtqAuiNOznREk3TC4o%2BjDBjqkAYZNOCtP1A0iCEfipKaUCCiFk8GM4AV1qlKdZkHIP4wx9%2BqfbZlcxz4%2BV1yGNfjRkI5cowaoJhPUjqQ29xu0p5Ep%2B%2FiTtWzynho4yG8fmkT2tk8DSpW9q7o8DCu9WYq5TJYMsW1X%2FZJttJxiM%2BWXkZzwV9Bo7AiC3oZsJzyEJ9u5c%2FR6g6ik1%2BH%2BOErcG0k978iNQ3wTx8NBUH3ifcbp9J0jl54x&X-Amz-Signature=30818205f5bb92155e76cd47cc4e6189b6160c9d6e220893509912a48b034ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJHBHLAH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDpramf1R2wEsvNB%2FGZfjwj2uPWKIfDB48YgVqG49X1rwIhAMTjgnuI4CMnmRcD8RmiKKNPWxKucqDkEVyj1Ai6F%2B7hKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKWYF0pckOGojnVdQq3ANApf00bQGmkeiGZdTELq9eMFs6hUANa0Y%2B8lvub0JYxI6N03jRJiNtD3WA5EeIzQ8Vvc9uEfSpVcJoTeT9q1kZM7EWWkioGccy%2FPfjcTQubLY499c65GBixzxk90NNGV7rDXJQKPaldUEdlz%2B5XrT%2BKsaLF%2FyaMrY8RzSVT1r4k%2BESMCCeL28sokjSrZepYnGQJykZzNB96D19YwRMOqHtXlgWRK2g%2Bgs99iAil1NQaWPvZz2DRU8BMBx%2F%2BLyuY0HVLANBMegqleP9V7%2BVSieF8CHksaklhZOVhTKBpOUWUM9Jm1nYd%2FIqgQf7Fz5pHDVbsPpWMTJpcu1l%2FQ1e%2FZvXZbloBh%2Fflo1vbgJ1pSLSZ%2BlwiqZ9gHE46quXCsSbzgI2A7c%2BWapCUI6Mm84jVom9VaqkF2w5%2FHp8wrtvFsxj9411s8zT4k5CJd0wn0%2BM%2B8OIURTEEPF0HeV6zbSQsvyR7Nmzt27jn%2B%2F%2FZPO3Z3Qqb9g66QjQAwSKaz8PQ%2FtezKkdM7hoHFP%2BQudduzHY%2Fm8MlWRZo6nI7ga3Z3TiQpQbfm%2BrvBmiw2OUEB93RN1jMmgVvY6GNaUvCiXllfGIxkxcnoxZHb8Eo%2F1G9me6PRknIVzS0zu%2Bpo1%2BKq8bWzCGo%2BjDBjqkAQZXZQGuETIEJYmKYSXvEyy%2BM0xFFUfxNuGmN05my%2BR0ANEJKN6ZNC4zltraZVYgioq4Jg%2FS22B9e4u6MFGaSxxTnlhJAGhMOkR0FHCEU5ZkWn%2BpeGm3VBeNRXDooSD2nj6dcvvtutRvR4DMTbF5PJq1dIRH38HutjWOKuLWhZtVB27qAYtjuSJFoGMOqi1s11sWxexEgCOjP3NWRReRXh0w%2BWXQ&X-Amz-Signature=076212c64a2a10c724ace63e15d2e11eed9b3f144b5a0f5fc8541ea564ddfc30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYFJOKJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHY9SVn6KP2X7fuAJJByHIFbip%2BgkTetzzkzAK4HVinxAiEAqY%2Bs6iJN7FAURuFJDJ9rYG6GO6fFtOj%2BMP0zpI044hEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOPy7CprOSM8cnqjSrcA9Li9WHMK8jl1m0CIH14TPSJbvoO91GY9nN4%2Fx3lt2gvEXfV%2Bx0nKMbTLmMYRnpxj6xyD7otGMpyy%2BEOruWwSNlTr56HyguftdPPZiQaFB2fLxyRsDbqHm%2Fa2TA16uMx9knzt4vmTSYi6hhqmCcqkp1NmW5%2FWSqLjjuaV322SAZ1NRKtWz%2BJRWHMusqoGjlqagpaXZooLQFB6yh%2Br4OrJpQVDC0twpwXrnHezf0NpLq7g%2BR%2B0fpHklNQTcxParxL5rT0G27EEWWYw75wdUUrgyOB78BZV58rVsz9hPbyqjQ7XPg9LQZshJrmGCeKR%2BWNJwYdCwV2karEFtIrTzXYjj33KGVXbi7FPKlDOkWnEs1sd%2FUC%2B48hz0JvTlXRbmq3CKVEbc2gWnYQlBEk8cpa%2F4bYL1Qio%2BLaJsolQClIHxSKezWUsi4Loy8cEY8ii5LzwaNRMqOnv9AwadzjN7XxpFHcq4lrFXZiDR%2Bt8NwPVSywcBTxyQV6MIsH60XI0D7wh56DTHPNZz6%2Fj6Kuhrs03T9a43KnSLyZXw8xzWXvVLVJX7c1SvpHDG4MJFRn9622nhxGiGtXIbXzrFJSVQbi1TPDsZ55H2Nggrdb1t%2FviQebAn%2FVp7AblnS41DPnMN%2Bj6MMGOqUBTOEvf16FMDesaTN8E7uc85hbuziPADIpXr4f9bgXkw2B%2Fvz4jqeP7gNmf3%2F4tK%2BYiMvclf21E5yYz3qzmrsVB7h0hjbtJ%2FCC%2FvVmMWcUeNxg1qkCWLDBOU4d%2BKE6sIq4yLS3sGtFAXfMYyLdCcyyFVbyRqU%2BG6ZIO0Kakmjh0u0BjHeCbzexcsRGUOG%2Fyx9Gs74F4%2F1Mo99O8frzZyVfZGINIOot&X-Amz-Signature=1713573c2bcdf831dc9476f5e17e40a17c2c7b5dc8cb49c8d68d6591452c170f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI3KSDD%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T100957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCOPUheCDGpQ%2F0j7kCYGpl41YiUSWblV%2FRSK8jvkaxBRgIhANrelJV0%2FWoFj6f0Iz67ObbcKxFJXCtEVwsiIimQBIzhKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqsZf7D5yiTp1LEQcq3ANxEdsLas1zTztDN6aq46PScTgMC88wMFvb2nBPuJL0JNJey7wSwErdgE8VJIYx1%2BCWw029G%2BmrHr4F1E%2F9YtG6gOlDl%2Bt%2FM2qDK9msATUUHVSjqDMLEJA99hEbXbbldQP3Y8A5T83TW7Y10fKeD9OIsoHmFKxAfjKiKhHyuvDm412iKhzwu%2FxK6b9yGs77qBtvTsO%2Fi4ClnxHcA7py0qYkPNDd8vZIj2ugNrUegV4JA%2FqSkJ6TZiXuApOzWQebIunCVdnKWXYwrN1D1zy6WxqJIjmg7G8s38gOK1grVqSpAXrIMJmHiPJhWGE407yWCSVvchMs1BmLqQcMwVBI1iA3gkwMrj4aE1AGJILakg7fxmAbhgCSYcecW83Fc3HC3l3LeoQ3GkVOiN7tAykULY%2B51e%2BTPef9cpqw%2FAftPOANP4ec7Id1ycrLA9NMOyrsInPBGsbqSG74zGcAZ4uVAd5gGJ90M1i9VhZi4bZZbQDeCxci4cvVqJlSQqqDcvBFd%2FMG4LYlG92AuGWJQDAfTP4PSL6fW9g1wwse%2BteiyqcaKs6%2B%2BLf7U3w5mxaQYlnUQazY6sFxkL4dBoQVdaCN50%2BiAW2h%2ByZo4l9Tnj50HLNQ1JhJtqAuiNOznREk3TC4o%2BjDBjqkAYZNOCtP1A0iCEfipKaUCCiFk8GM4AV1qlKdZkHIP4wx9%2BqfbZlcxz4%2BV1yGNfjRkI5cowaoJhPUjqQ29xu0p5Ep%2B%2FiTtWzynho4yG8fmkT2tk8DSpW9q7o8DCu9WYq5TJYMsW1X%2FZJttJxiM%2BWXkZzwV9Bo7AiC3oZsJzyEJ9u5c%2FR6g6ik1%2BH%2BOErcG0k978iNQ3wTx8NBUH3ifcbp9J0jl54x&X-Amz-Signature=fc168cdd8356ab08868831c8ba8550a6882497e928f898b087edd3c3b4875f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
