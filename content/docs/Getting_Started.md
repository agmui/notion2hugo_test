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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4SZ7YX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIERpoEAi9LBkp%2F%2Fo13VGQtnd21z%2BhaodrrS3Ix4Cb6XFAiAP3cdhiXcviXOWV1ZKIzIKDHbX9bvC3BApxItDVNWWISr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMKH4q0L1m%2BxVA0KeRKtwD6wRG614Sxfa7y8TsZcZWCdbynUYogls7S%2F5GcSvMg4qxqphqfN6y7RditOQF%2BK4m18MX0ubxTgZHpKO4LYZFMaYfnsDBup84741MUOUrACuKE0aeOY7VSfdsS38YUCV4QntNEkwvzbUR4T9kQlMxDXev5n3iMHgbgELGF5D3%2F3Mfwuywb%2FqQel8RAOE2NxvaHbgMMBqkJQez1MGdX8bTox8Qb%2FNLS2bdx4UN6G01bPwac1mFxH6A%2B3gLuvPPH0YImA8JtWSSKjA%2B3tn8G6H81HiTGxcMZyLjsBds2BlcUIZmH02Eq9nOBlpf9MZrmMgBGfYKIeVeXRw0AaI3vtn9pHPw4seo%2BAW2tRDwGuLjvwwm8sNWjm7ZVGDnkCGCroriLkqRWBijKQsSaeaVYgZVfV%2FDS8TTiw9UJ8peRUGY0k3p849ehzDHEoPbyYUKnsIH0Fo2i0Ow0RYRRtQiyzjjW0U9TN0682KXI8sWnDYgbic2fSIfXXZJS62d9INp7XwvSMS7YO%2FfmOKE9Hn5d18lo2sW8hjtohnhc6LmS92SleVxhbaykjUX35vkTpe%2BxqhhxlVpiEhxPqhwpHBvE8IMWrTXjm6FMthzmFmvMyGxd%2FuUf4EmviyHNWbeptAw78H0wgY6pgGZ5gqAWJZIdKMEq4Ji4D3sgEt0NC3hPOJSMU5pADQNYDb6aVYjTkkqAs8yeOTuiddn8E6ChCH4FJYSqp%2BKXbFU%2Ff7WJeXth4BnT25NagdcfKr94OICn4GmSZkpkLG9S2U3YK8J3gjKErwdJhIzRyk7tsE5zYljSUQOIFzULyAFBFXATsz4CwpQTurwmbLXy%2BNytLRoR6rCevuIVmxllV5YQG7VeaBX&X-Amz-Signature=737f762db673637dac7bcb9272eeed2383f8198f1b2c8f92e17205dfc0097fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4SZ7YX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIERpoEAi9LBkp%2F%2Fo13VGQtnd21z%2BhaodrrS3Ix4Cb6XFAiAP3cdhiXcviXOWV1ZKIzIKDHbX9bvC3BApxItDVNWWISr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMKH4q0L1m%2BxVA0KeRKtwD6wRG614Sxfa7y8TsZcZWCdbynUYogls7S%2F5GcSvMg4qxqphqfN6y7RditOQF%2BK4m18MX0ubxTgZHpKO4LYZFMaYfnsDBup84741MUOUrACuKE0aeOY7VSfdsS38YUCV4QntNEkwvzbUR4T9kQlMxDXev5n3iMHgbgELGF5D3%2F3Mfwuywb%2FqQel8RAOE2NxvaHbgMMBqkJQez1MGdX8bTox8Qb%2FNLS2bdx4UN6G01bPwac1mFxH6A%2B3gLuvPPH0YImA8JtWSSKjA%2B3tn8G6H81HiTGxcMZyLjsBds2BlcUIZmH02Eq9nOBlpf9MZrmMgBGfYKIeVeXRw0AaI3vtn9pHPw4seo%2BAW2tRDwGuLjvwwm8sNWjm7ZVGDnkCGCroriLkqRWBijKQsSaeaVYgZVfV%2FDS8TTiw9UJ8peRUGY0k3p849ehzDHEoPbyYUKnsIH0Fo2i0Ow0RYRRtQiyzjjW0U9TN0682KXI8sWnDYgbic2fSIfXXZJS62d9INp7XwvSMS7YO%2FfmOKE9Hn5d18lo2sW8hjtohnhc6LmS92SleVxhbaykjUX35vkTpe%2BxqhhxlVpiEhxPqhwpHBvE8IMWrTXjm6FMthzmFmvMyGxd%2FuUf4EmviyHNWbeptAw78H0wgY6pgGZ5gqAWJZIdKMEq4Ji4D3sgEt0NC3hPOJSMU5pADQNYDb6aVYjTkkqAs8yeOTuiddn8E6ChCH4FJYSqp%2BKXbFU%2Ff7WJeXth4BnT25NagdcfKr94OICn4GmSZkpkLG9S2U3YK8J3gjKErwdJhIzRyk7tsE5zYljSUQOIFzULyAFBFXATsz4CwpQTurwmbLXy%2BNytLRoR6rCevuIVmxllV5YQG7VeaBX&X-Amz-Signature=2a190ea82f9e1a26da794bed1034079d12557968fb7faf07bda9cbd254fb9f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4SZ7YX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIERpoEAi9LBkp%2F%2Fo13VGQtnd21z%2BhaodrrS3Ix4Cb6XFAiAP3cdhiXcviXOWV1ZKIzIKDHbX9bvC3BApxItDVNWWISr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMKH4q0L1m%2BxVA0KeRKtwD6wRG614Sxfa7y8TsZcZWCdbynUYogls7S%2F5GcSvMg4qxqphqfN6y7RditOQF%2BK4m18MX0ubxTgZHpKO4LYZFMaYfnsDBup84741MUOUrACuKE0aeOY7VSfdsS38YUCV4QntNEkwvzbUR4T9kQlMxDXev5n3iMHgbgELGF5D3%2F3Mfwuywb%2FqQel8RAOE2NxvaHbgMMBqkJQez1MGdX8bTox8Qb%2FNLS2bdx4UN6G01bPwac1mFxH6A%2B3gLuvPPH0YImA8JtWSSKjA%2B3tn8G6H81HiTGxcMZyLjsBds2BlcUIZmH02Eq9nOBlpf9MZrmMgBGfYKIeVeXRw0AaI3vtn9pHPw4seo%2BAW2tRDwGuLjvwwm8sNWjm7ZVGDnkCGCroriLkqRWBijKQsSaeaVYgZVfV%2FDS8TTiw9UJ8peRUGY0k3p849ehzDHEoPbyYUKnsIH0Fo2i0Ow0RYRRtQiyzjjW0U9TN0682KXI8sWnDYgbic2fSIfXXZJS62d9INp7XwvSMS7YO%2FfmOKE9Hn5d18lo2sW8hjtohnhc6LmS92SleVxhbaykjUX35vkTpe%2BxqhhxlVpiEhxPqhwpHBvE8IMWrTXjm6FMthzmFmvMyGxd%2FuUf4EmviyHNWbeptAw78H0wgY6pgGZ5gqAWJZIdKMEq4Ji4D3sgEt0NC3hPOJSMU5pADQNYDb6aVYjTkkqAs8yeOTuiddn8E6ChCH4FJYSqp%2BKXbFU%2Ff7WJeXth4BnT25NagdcfKr94OICn4GmSZkpkLG9S2U3YK8J3gjKErwdJhIzRyk7tsE5zYljSUQOIFzULyAFBFXATsz4CwpQTurwmbLXy%2BNytLRoR6rCevuIVmxllV5YQG7VeaBX&X-Amz-Signature=cc650217f34c6ce5db997329489403b22c62f97fc87547fd7d743dcc77eed8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMM567W6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDzLp1BkryIckVLnFArN1JVLSOz7O7kX72Lqk2fGdP8EgIgZTpRN3mdAK9CTYesNmaW1%2FPuXBwoMqyJIrkzkXCkBiMq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDAGOm6sGVeVEHN1hVSrcA09D6pu%2BCI5ywZHac4UktZBRrEWAyDSuBdY0TLnwZ%2BXsmycRabaf4M%2BOTW22Y3X8OsX6LwggioFPYrkjjGh8zH7FuR7ZK36PKE96luOD8XWAoXWmylxc%2FceFjxpgnQhJrWWhmTzCGAfxUT2%2FkkOOlVKbJqIidbyJplu3IdySn9QvZEdzDnZQBabpKTDcwGDFosJYAatwfPRxOtWD5TQP%2BM6Ym10PQVP6gP8jN4%2Bv1bGxn2h6x4fQM5V%2FHtpjM%2Fn%2F%2FvB%2FnePO4s6He5MfiCuV3tBTWJdl7VuwWtM%2BQgun5SIngdZCm3JmWlBb5ToNg2cOAEL8fTh9BGjCaQDk2atJ%2BC5M1O603gxt3jJNXqj%2BSXl1l3hAgMHMxx6%2FIOqvQMrqRp4PPGAJmrgtbGrLRoM7k0fQf%2BM6qEkl82A3pN%2BjDGdfWheChl57Q89ecoHUcOv%2FglOqnsOHITzrPoMqGuOk05iWO2bxGHRhF%2FqPxnIfRaA5bfeYvz4hYjZVqXoHqteQm7tVHHMMjbOBICNFezrIvmtJmRPLFTk%2BW3VtZn%2FoH%2FWvigoXvqDBWEYqEFi%2FSz5krbguDNamE%2FPiSTqZRIZBnZHdhbtruWrWncqciZWnzNIXum2atLDoMWCmutJxMJPB9MIGOqUBaMSFpcq7KorowRfj%2FQXTzMPPX10dPZFQAq9bgWa1hH5SBrlbHK2cQWv9a%2FS9FR2QPf8Ycp0CdoIBwsu5i3NmIQ%2BtHevUC%2FjKzwSgWMCrSBljzep8p7ZpOifEzgmkfkiYiQT5IElVJ%2FZIdi0zqaYA7uJnJyXgeLDRU3U1MfbTi3CqIqnrLni7QXimelCDGFHnNTHK%2F0lnSNHfGiDFrqYODaz4uulN&X-Amz-Signature=ab8ec43b2da6e556096d4ab8cc057f520396a56701ac1e8022ee2af3f7a371a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXT2F472%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGbSk94alYQVOucNRR5Vs2%2BWRTOUQeVN%2Bbjc8G5otGmJAiEApyIWEOvsCCd89a%2Bgas9r0Rv7eQxms%2FiCPOpattw3dx4q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDKj3w4gbYhlagdTVwircA9cJ%2B40h7sJ47rTtRO53LYWDlVJXd%2FF44qdqU3AHdRPIveID%2B0NxNmjYdJCMiZfT3NcFYa2RzqWm2Ss52okyhYccCYjS3kn5fwa6iy72kSniuxTpAPMOzpg3%2F93D4I38z2pWnnilhRceFhSdSa4yyemKK3axlDp2XkiWnjc7d53FvLYQkXPtOWw27J8XSJdxEcAasAZ6i1SOweQFcPt%2B0y00P4Wrl7a2lvcYa4%2BRHEwTZuDtG5fwPIKSi7EYRPn6T66Yx6dfiypwDEXNd0SURxPCJ5oj37o9KHSyLSHKz2JC51xMpwmUYp1hPoF7e6hIZi7PP%2F%2B7LoNqa%2Fhal04ECkB5dpf3KfRMUNM7IzjxsOwbixvs%2BpWnCjMu9sWZ6z16G9TWIEvegsJBVQ0ytR2SsHtqowxa%2F%2BmNVbhkJbhvVofrGC5UU0o0TK8WynWSmJMF0ahueSVsyaR906Ej%2FeMlOXgiEn7qb3Lrye9ben5W8hIE62jambL%2Fc2hScIBoBZ2S5AJ0fkJpwtubn%2FSRStP7s4zQZh9m5qtoXISp4rkkLSpbX2RBFlM2omrC%2FpwjuNlluA%2FtgGIqw6ZrSrDr%2F50UCtff%2FAgtqPB%2Bp25jw71QRN53Y56vByQwMN8pf1t%2FMP7A9MIGOqUBiaDbDKrNsGlZPlowoJnkKvd2%2FZn%2FECheD8cd6%2BdvFhW3Gvosl7BetYgSWKK1ezBZl%2Bw01Ij8mogGA%2Bm%2Bg1ZwgquKG2tFaRb0rAS3a%2B4du4dW18TlhHiXe9Z7K6ap8BMm5h8UrvwoDXu5z8uUdpuoV%2F35HjPTM5vqk7ochNNaIr0C0xIpszE1dm8%2BsM6n6pdgI7on4Ue8PpPCpW6BSo2uNUJOlKUY&X-Amz-Signature=bc31fd9389673ead5eed901f6648a63f557f1926b5589f81373ef6bc522ccd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4SZ7YX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIERpoEAi9LBkp%2F%2Fo13VGQtnd21z%2BhaodrrS3Ix4Cb6XFAiAP3cdhiXcviXOWV1ZKIzIKDHbX9bvC3BApxItDVNWWISr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMKH4q0L1m%2BxVA0KeRKtwD6wRG614Sxfa7y8TsZcZWCdbynUYogls7S%2F5GcSvMg4qxqphqfN6y7RditOQF%2BK4m18MX0ubxTgZHpKO4LYZFMaYfnsDBup84741MUOUrACuKE0aeOY7VSfdsS38YUCV4QntNEkwvzbUR4T9kQlMxDXev5n3iMHgbgELGF5D3%2F3Mfwuywb%2FqQel8RAOE2NxvaHbgMMBqkJQez1MGdX8bTox8Qb%2FNLS2bdx4UN6G01bPwac1mFxH6A%2B3gLuvPPH0YImA8JtWSSKjA%2B3tn8G6H81HiTGxcMZyLjsBds2BlcUIZmH02Eq9nOBlpf9MZrmMgBGfYKIeVeXRw0AaI3vtn9pHPw4seo%2BAW2tRDwGuLjvwwm8sNWjm7ZVGDnkCGCroriLkqRWBijKQsSaeaVYgZVfV%2FDS8TTiw9UJ8peRUGY0k3p849ehzDHEoPbyYUKnsIH0Fo2i0Ow0RYRRtQiyzjjW0U9TN0682KXI8sWnDYgbic2fSIfXXZJS62d9INp7XwvSMS7YO%2FfmOKE9Hn5d18lo2sW8hjtohnhc6LmS92SleVxhbaykjUX35vkTpe%2BxqhhxlVpiEhxPqhwpHBvE8IMWrTXjm6FMthzmFmvMyGxd%2FuUf4EmviyHNWbeptAw78H0wgY6pgGZ5gqAWJZIdKMEq4Ji4D3sgEt0NC3hPOJSMU5pADQNYDb6aVYjTkkqAs8yeOTuiddn8E6ChCH4FJYSqp%2BKXbFU%2Ff7WJeXth4BnT25NagdcfKr94OICn4GmSZkpkLG9S2U3YK8J3gjKErwdJhIzRyk7tsE5zYljSUQOIFzULyAFBFXATsz4CwpQTurwmbLXy%2BNytLRoR6rCevuIVmxllV5YQG7VeaBX&X-Amz-Signature=ad8c58f8b600976a991391e450d29226d77689c4c088ef9feeb737e168a90156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
