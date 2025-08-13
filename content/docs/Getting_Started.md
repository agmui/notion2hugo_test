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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJY6ASQS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC2Zh1NN%2BxCF0H%2BwTtgh3uzF%2FoN%2B8k3uZa4ugi29dhAIgfYJCvfHNuBv3f62OKMJ5NMkPuQEdXqKIgDivVkYngmIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDpvEOrSAv5NIKE3sCrcA2u3TWFDxqwxp6S8%2BkimMKC23qrHZcP5I38iCvXzDNjJrdzU6cy08WvV1L45Rb%2FOiYjcZx%2BnDrN69YWJ4cx9dQ5mIKwY2x6htbydeT8TzuUmK1WHQ9ZTfxBixQyoPr0b7ZtI0A09yLzpu0AZBY%2BDJXbHTPwP%2FamdA7b0d91W2oWQmhz989BgLlMCrqJfIM3Jkn5IUez1qoVp9NuHELxW2dBXFVE3hVhPj70i4UwPIEr%2ByFTxXtGs2nOLWR9yAXuX7jK8bLkwtdzNKvxPj3Rln0w40SZTx%2BXxGLL1gZj0brPexCPj8ssJ6wLOBLo8ol36Ft2ccChFms%2BRFlSuoG8M%2F5BK0STvrlcFa75Wh7Ici36cq1W%2BozgQoEufK%2F8xu4mkOj40snMGaKVmKU2LfyVfxiDdLpx7MGTqW2DKJLqdkEmgwvb%2BvQOjktHUcS7DLvgJ06QHOGPiLGIQ13iaGsfcn4hofuIQD%2BL7Y2yjv0svIEw1khodQ%2Fx1TAAUEjBPYI7dFpdO%2BZdihNb437bUQHuTvcmc9m9sWFjN4%2BwihnVnkK7f8m1ki9FwaKFk3U7Afc8CrAzPatNRvV3wTrrwCJaiqZt4HTUYCgM60VPAyyMBLjgBRs4vDJHnaX488rvaMM%2Bg88QGOqUB%2BS5xHu4SyHp%2FB11xjikeeWFSZ8JbETXEQc03Eh4LIfl8sIBY2FDeHg13Ugq4NVZKKiSWhMvWisBN1T6hL7BPLRQB%2FgVQViU6RqzqhWIYCbtRj5AlKooRsoU91ktQpkoVXxHd8Rj3CCUtunvB3%2BrkAby26QgcP%2Fzv7c8RIbEB1K1BRuS1BfBYckmwj4M7JUZL5krQO04i67CBWBHC6OW3x%2FNmhmux&X-Amz-Signature=b2ee9ead4a853e45dc5893300f7cb2ecda0cdcc77926f1f705c6a5b1aea288d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJY6ASQS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC2Zh1NN%2BxCF0H%2BwTtgh3uzF%2FoN%2B8k3uZa4ugi29dhAIgfYJCvfHNuBv3f62OKMJ5NMkPuQEdXqKIgDivVkYngmIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDpvEOrSAv5NIKE3sCrcA2u3TWFDxqwxp6S8%2BkimMKC23qrHZcP5I38iCvXzDNjJrdzU6cy08WvV1L45Rb%2FOiYjcZx%2BnDrN69YWJ4cx9dQ5mIKwY2x6htbydeT8TzuUmK1WHQ9ZTfxBixQyoPr0b7ZtI0A09yLzpu0AZBY%2BDJXbHTPwP%2FamdA7b0d91W2oWQmhz989BgLlMCrqJfIM3Jkn5IUez1qoVp9NuHELxW2dBXFVE3hVhPj70i4UwPIEr%2ByFTxXtGs2nOLWR9yAXuX7jK8bLkwtdzNKvxPj3Rln0w40SZTx%2BXxGLL1gZj0brPexCPj8ssJ6wLOBLo8ol36Ft2ccChFms%2BRFlSuoG8M%2F5BK0STvrlcFa75Wh7Ici36cq1W%2BozgQoEufK%2F8xu4mkOj40snMGaKVmKU2LfyVfxiDdLpx7MGTqW2DKJLqdkEmgwvb%2BvQOjktHUcS7DLvgJ06QHOGPiLGIQ13iaGsfcn4hofuIQD%2BL7Y2yjv0svIEw1khodQ%2Fx1TAAUEjBPYI7dFpdO%2BZdihNb437bUQHuTvcmc9m9sWFjN4%2BwihnVnkK7f8m1ki9FwaKFk3U7Afc8CrAzPatNRvV3wTrrwCJaiqZt4HTUYCgM60VPAyyMBLjgBRs4vDJHnaX488rvaMM%2Bg88QGOqUB%2BS5xHu4SyHp%2FB11xjikeeWFSZ8JbETXEQc03Eh4LIfl8sIBY2FDeHg13Ugq4NVZKKiSWhMvWisBN1T6hL7BPLRQB%2FgVQViU6RqzqhWIYCbtRj5AlKooRsoU91ktQpkoVXxHd8Rj3CCUtunvB3%2BrkAby26QgcP%2Fzv7c8RIbEB1K1BRuS1BfBYckmwj4M7JUZL5krQO04i67CBWBHC6OW3x%2FNmhmux&X-Amz-Signature=18c6d1ddedfa1aa357b88e930e1bd5d31eb53e269e442511b9469f700bfe7b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJY6ASQS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC2Zh1NN%2BxCF0H%2BwTtgh3uzF%2FoN%2B8k3uZa4ugi29dhAIgfYJCvfHNuBv3f62OKMJ5NMkPuQEdXqKIgDivVkYngmIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDpvEOrSAv5NIKE3sCrcA2u3TWFDxqwxp6S8%2BkimMKC23qrHZcP5I38iCvXzDNjJrdzU6cy08WvV1L45Rb%2FOiYjcZx%2BnDrN69YWJ4cx9dQ5mIKwY2x6htbydeT8TzuUmK1WHQ9ZTfxBixQyoPr0b7ZtI0A09yLzpu0AZBY%2BDJXbHTPwP%2FamdA7b0d91W2oWQmhz989BgLlMCrqJfIM3Jkn5IUez1qoVp9NuHELxW2dBXFVE3hVhPj70i4UwPIEr%2ByFTxXtGs2nOLWR9yAXuX7jK8bLkwtdzNKvxPj3Rln0w40SZTx%2BXxGLL1gZj0brPexCPj8ssJ6wLOBLo8ol36Ft2ccChFms%2BRFlSuoG8M%2F5BK0STvrlcFa75Wh7Ici36cq1W%2BozgQoEufK%2F8xu4mkOj40snMGaKVmKU2LfyVfxiDdLpx7MGTqW2DKJLqdkEmgwvb%2BvQOjktHUcS7DLvgJ06QHOGPiLGIQ13iaGsfcn4hofuIQD%2BL7Y2yjv0svIEw1khodQ%2Fx1TAAUEjBPYI7dFpdO%2BZdihNb437bUQHuTvcmc9m9sWFjN4%2BwihnVnkK7f8m1ki9FwaKFk3U7Afc8CrAzPatNRvV3wTrrwCJaiqZt4HTUYCgM60VPAyyMBLjgBRs4vDJHnaX488rvaMM%2Bg88QGOqUB%2BS5xHu4SyHp%2FB11xjikeeWFSZ8JbETXEQc03Eh4LIfl8sIBY2FDeHg13Ugq4NVZKKiSWhMvWisBN1T6hL7BPLRQB%2FgVQViU6RqzqhWIYCbtRj5AlKooRsoU91ktQpkoVXxHd8Rj3CCUtunvB3%2BrkAby26QgcP%2Fzv7c8RIbEB1K1BRuS1BfBYckmwj4M7JUZL5krQO04i67CBWBHC6OW3x%2FNmhmux&X-Amz-Signature=1b480c48726783dc5a79d25c436f6efde6ca2318143298b6a9d0d87af809895c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFXVTDO%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvSQ9iAs%2FzH73%2F%2FRdyW0di2s%2BazHYKtcmSC3q8itNdsAiEAhYa7zf23d%2Bf3K1AjKK%2BOHoljQHynTkN3j3kyBZ7b%2Bmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDG%2FgzCEsSQrRWUkmkyrcA8%2FZRsDgLnJ6RkHax3bucBsmlL2GJPkkfTBG2apkVlsbt9DmwWuHCK9WOsSYr7k%2BST5%2FdrZVgFThJYJvGNaYBSkLt7usKQZVC4ymGtkaJZA%2BN%2Bo%2Fyhezf%2Bu%2FA8lU2upg0BdeT1iO46iDGX07kqoSO63bouVEL0di07%2F%2FfPPajnfXK5scT7ZTYdC4hHDCIZG4dGwU8Nq8DI3GwJ1ZzFXoD%2BfYikowTPlgM08f8Ja%2FFMYjVWOAbuQtOH4%2FHaW%2FR0UM%2FMHHbYMgq427aUAdtd78cXHwvk2IDSXAfh5pI761PLcwDFnFwRR8l6O9Gzw8l3DxBAOAJHAQmkPLBPJTw190s8GIW%2B2epYpnsY02W3vdW8c02%2F00tskDgEHPIFXfK7vqjt5W4L96tZ8p6HMOpeHmSYHlu4%2FQXl6L3TqRRkDS0fINiPK1boTd0WLBjni8bkbo0CTJjUqQMj4%2BnJv6Bhyn%2FRZasGxPOnhI2tjQJmGbG86fCaSTcDKlnbpnJ3VG2WiKn5axmqyuYd55wqvCGJ4nmoNBKV70h6NaJ%2Fy%2FNwzt%2FbmL3FdPBqjbfnwdISRGQofmyTr2AjwEm6d8zuZkkGZ8FrNpd3g4KNlsGYL5%2BpSgmjo3ihuu4NL5naXNEq5nMJyg88QGOqUBu7issQjfv%2FF38RpOKWq2iq%2BvNQoZ0ByrKfS6eWrECR7DCcmKD91Gfrzz747JY3thy6qJmfSHXAIj5AiFU8JuXygAZ7sLHQNl5GYE3xfL3lxQSYyAMtowy2dXQPiWsrdLQQUj1ti%2FlEYSJ%2B9gVzt5GW4mvoqqEC7EFLEXOsWOX11AAjjfPmD9ETuSeRwPIKjvMZnaRbLbWWE5iuNGy%2FJk%2BM2B5SxA&X-Amz-Signature=f8c9a0e78a71734c3263df97b6a0b721e1e33b86cf7f6e3978b3278be1880a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAUETIK4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCtXJ4jQ956zmcImC8%2FF3XNl6fTYM5PtRL4j5D5%2BF8XAiEAhtq3BYkD2NswGTQVFq1WJizBNxLA7fOXpInwa1L5eY0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6nP2MeJp69f93CHCrcA06mNIvl5z6OBEiy8UEgsdv6v3lrC8tsKW5TAJmaWJR7wGcSLTi7gHMiLkEtPUEqLg72rksn3klgKpNmwNy3RKlue711Sk2UD%2BbWsyiWZ%2FXzci2gr%2FguCRXhX9riDZW5aiOs2NY0pJqjfgEC3%2Ffx63r7wqpdAthZoViJPK8syJfW1tFAbb0TqHpZjV9Y8VNmbgqVgtNwvkJCn0bOYQpcedsRqbVBLAVTp64KPclr902iG7hQk2uQYZ0ftlnte3AmziaAugG06DK0T5Z%2F693O52k%2FZAtv58Y%2BU28hyoBYib4PMC2a3z0ajZRYzsejP1lkRSaidiTt9sXjocu%2FOE3GwCy1P5MFpTNJD%2F1XSKvps7%2BSNlbLnffWSMdcGypqeaCLqVqoQkX5TrB9dsH9AAfwpAnVmfLmI1kvikOBVck4YzA1%2FacA2tKM0K9nQGGIffJ4vTd5X8U8Wd%2B8m7UBsXi21KHBSf71%2BZVJWucvRAJRWR5UlYzUjZ8tvCgn781CBeBovYYqWgVt36gNIuzcd6ZR6QbjQEh%2BQ6ZfQgLSysgXExOvQ08lXJS1la88oUkwA878M70SZeO%2FAURjtHJLnSWOhN6xz3o7LZAChpuj%2Bl4%2FbBejODIGa7Z9yxzHuRcUMM2f88QGOqUBTWagltmeJsijzXrVoRkuT%2F4FgT2UWoFPs3ZtBkaQKB1YMBXJn4hlydC7an%2FB5g0H8%2BJxANpSK%2FW1qEhHQKUJQx3aUX8IVANlGSWbjNckH2y97fR5M80y5RTujkYerofq%2B5G5rPYzvc58TJG9jQWMUWLgXR5ur5M5ExQi7qtgNH4889nif0DybaWzgSCoMml3wEGxV%2B30BydNt4DMdus1ZtQ5qnEc&X-Amz-Signature=f0c0e47ba7ca4e2a9dad6a9722402d973a94bf7aea38feaf9667b25e10703dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJY6ASQS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZC2Zh1NN%2BxCF0H%2BwTtgh3uzF%2FoN%2B8k3uZa4ugi29dhAIgfYJCvfHNuBv3f62OKMJ5NMkPuQEdXqKIgDivVkYngmIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDpvEOrSAv5NIKE3sCrcA2u3TWFDxqwxp6S8%2BkimMKC23qrHZcP5I38iCvXzDNjJrdzU6cy08WvV1L45Rb%2FOiYjcZx%2BnDrN69YWJ4cx9dQ5mIKwY2x6htbydeT8TzuUmK1WHQ9ZTfxBixQyoPr0b7ZtI0A09yLzpu0AZBY%2BDJXbHTPwP%2FamdA7b0d91W2oWQmhz989BgLlMCrqJfIM3Jkn5IUez1qoVp9NuHELxW2dBXFVE3hVhPj70i4UwPIEr%2ByFTxXtGs2nOLWR9yAXuX7jK8bLkwtdzNKvxPj3Rln0w40SZTx%2BXxGLL1gZj0brPexCPj8ssJ6wLOBLo8ol36Ft2ccChFms%2BRFlSuoG8M%2F5BK0STvrlcFa75Wh7Ici36cq1W%2BozgQoEufK%2F8xu4mkOj40snMGaKVmKU2LfyVfxiDdLpx7MGTqW2DKJLqdkEmgwvb%2BvQOjktHUcS7DLvgJ06QHOGPiLGIQ13iaGsfcn4hofuIQD%2BL7Y2yjv0svIEw1khodQ%2Fx1TAAUEjBPYI7dFpdO%2BZdihNb437bUQHuTvcmc9m9sWFjN4%2BwihnVnkK7f8m1ki9FwaKFk3U7Afc8CrAzPatNRvV3wTrrwCJaiqZt4HTUYCgM60VPAyyMBLjgBRs4vDJHnaX488rvaMM%2Bg88QGOqUB%2BS5xHu4SyHp%2FB11xjikeeWFSZ8JbETXEQc03Eh4LIfl8sIBY2FDeHg13Ugq4NVZKKiSWhMvWisBN1T6hL7BPLRQB%2FgVQViU6RqzqhWIYCbtRj5AlKooRsoU91ktQpkoVXxHd8Rj3CCUtunvB3%2BrkAby26QgcP%2Fzv7c8RIbEB1K1BRuS1BfBYckmwj4M7JUZL5krQO04i67CBWBHC6OW3x%2FNmhmux&X-Amz-Signature=efd3abbecb6b880649e1893e0b14c4a30a7fb3c66a7e0aa4df67ccb645c43180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
