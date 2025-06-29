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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMGKAVT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDFsR7HjdSJMzc0MpWcN4C2Ee4eG9FDFoEN8JPTlVRYAiEApnHSdiOfS56pJ5g9Z800lKVCmlbOuO7R5GYcVIqimaEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2BTwRQKNhogrtA4SrcA2wtewhk%2Bu93WGCTaReBXQJSscJmy5d%2BDp%2FPodMf77qvqclPo0%2F2OyMAO199peEycCyTN%2F4y2GVxXgFrEGHyYnA5SQQR4V6nid%2FoV2UBy%2BKZgADGWUR%2Fl6b51HFnzaoT2qFgDfc0EGdvLLrTuyVkOCGF3ITd59Q%2BnYccM%2Bvp%2BhSS8t1k2vdaYGXL1Y3Jlv5VVY%2FeyWfimG9id%2FeNrSRBjxPoZLsasa%2BvGiyJU5dSNuta2OFoeebEneJ%2FQywDL%2B%2FZIBBwRSq35eQh03h0dCuE3rmSpu4gv52AcYIzgPawVYQmOI25IgEI3QSRD3j2tkz9%2BxqZ9Bkhox00uxgOZ2k%2ByqDd3KFZ3iE%2BBlr9HWFoEamhm8aSGtI6r0E%2BzEzmhCYfyYgA9SFyJAIIZtwKHJAuNuRbyAU7f9HtmtTH9TBsLIzbD%2ByV4Kduk1ca%2BK5k%2FQdlHezPS1aRLmq0jkhUYEoUYyRALDLpNxZy6LybXOEugDWu97WUXNFEVD1jPr76u%2BKU8Diy1SxYtQuFgRtg5HOUFc8MOE%2FVrMQ0gU8VGIlpXXkwpBiK9usURCULlrZiNz4ydkaaZGz7mPhlpjNpbnhMnEk9pwnW8W9quhXOB%2F0H1aVLc7zJ9AAd8i0AXuEoMN2thsMGOqUBM73B3Zri43zD8s3NK7C%2F1amDXCUfvqbEPwuXoVSd879dPoSVsaYmwS2VPYwdiEnCDoBjvjn9nSrmQR%2Bj0RiTr80qD2zcguYsRrBxx5I3VReFOm76s8uM2rfTcS0i1%2BtDW1Zo%2FZ03Yns1FV6TGuArIG3zi2EfQukmUMRTRkgb4C3QL91riY%2BN7WkuZyKNW8cs9x%2B6tn4sgTlZQL9dmPa%2FwLGBO5or&X-Amz-Signature=b4c1744b5d71287216b80e18c9e27678a810c0082a5a5da23a60b8ed7c9c7bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMGKAVT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDFsR7HjdSJMzc0MpWcN4C2Ee4eG9FDFoEN8JPTlVRYAiEApnHSdiOfS56pJ5g9Z800lKVCmlbOuO7R5GYcVIqimaEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2BTwRQKNhogrtA4SrcA2wtewhk%2Bu93WGCTaReBXQJSscJmy5d%2BDp%2FPodMf77qvqclPo0%2F2OyMAO199peEycCyTN%2F4y2GVxXgFrEGHyYnA5SQQR4V6nid%2FoV2UBy%2BKZgADGWUR%2Fl6b51HFnzaoT2qFgDfc0EGdvLLrTuyVkOCGF3ITd59Q%2BnYccM%2Bvp%2BhSS8t1k2vdaYGXL1Y3Jlv5VVY%2FeyWfimG9id%2FeNrSRBjxPoZLsasa%2BvGiyJU5dSNuta2OFoeebEneJ%2FQywDL%2B%2FZIBBwRSq35eQh03h0dCuE3rmSpu4gv52AcYIzgPawVYQmOI25IgEI3QSRD3j2tkz9%2BxqZ9Bkhox00uxgOZ2k%2ByqDd3KFZ3iE%2BBlr9HWFoEamhm8aSGtI6r0E%2BzEzmhCYfyYgA9SFyJAIIZtwKHJAuNuRbyAU7f9HtmtTH9TBsLIzbD%2ByV4Kduk1ca%2BK5k%2FQdlHezPS1aRLmq0jkhUYEoUYyRALDLpNxZy6LybXOEugDWu97WUXNFEVD1jPr76u%2BKU8Diy1SxYtQuFgRtg5HOUFc8MOE%2FVrMQ0gU8VGIlpXXkwpBiK9usURCULlrZiNz4ydkaaZGz7mPhlpjNpbnhMnEk9pwnW8W9quhXOB%2F0H1aVLc7zJ9AAd8i0AXuEoMN2thsMGOqUBM73B3Zri43zD8s3NK7C%2F1amDXCUfvqbEPwuXoVSd879dPoSVsaYmwS2VPYwdiEnCDoBjvjn9nSrmQR%2Bj0RiTr80qD2zcguYsRrBxx5I3VReFOm76s8uM2rfTcS0i1%2BtDW1Zo%2FZ03Yns1FV6TGuArIG3zi2EfQukmUMRTRkgb4C3QL91riY%2BN7WkuZyKNW8cs9x%2B6tn4sgTlZQL9dmPa%2FwLGBO5or&X-Amz-Signature=ff6350328f21e6ec6b50685026ed8229e971ed7504b2150fe01a0884c130b04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMGKAVT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDFsR7HjdSJMzc0MpWcN4C2Ee4eG9FDFoEN8JPTlVRYAiEApnHSdiOfS56pJ5g9Z800lKVCmlbOuO7R5GYcVIqimaEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2BTwRQKNhogrtA4SrcA2wtewhk%2Bu93WGCTaReBXQJSscJmy5d%2BDp%2FPodMf77qvqclPo0%2F2OyMAO199peEycCyTN%2F4y2GVxXgFrEGHyYnA5SQQR4V6nid%2FoV2UBy%2BKZgADGWUR%2Fl6b51HFnzaoT2qFgDfc0EGdvLLrTuyVkOCGF3ITd59Q%2BnYccM%2Bvp%2BhSS8t1k2vdaYGXL1Y3Jlv5VVY%2FeyWfimG9id%2FeNrSRBjxPoZLsasa%2BvGiyJU5dSNuta2OFoeebEneJ%2FQywDL%2B%2FZIBBwRSq35eQh03h0dCuE3rmSpu4gv52AcYIzgPawVYQmOI25IgEI3QSRD3j2tkz9%2BxqZ9Bkhox00uxgOZ2k%2ByqDd3KFZ3iE%2BBlr9HWFoEamhm8aSGtI6r0E%2BzEzmhCYfyYgA9SFyJAIIZtwKHJAuNuRbyAU7f9HtmtTH9TBsLIzbD%2ByV4Kduk1ca%2BK5k%2FQdlHezPS1aRLmq0jkhUYEoUYyRALDLpNxZy6LybXOEugDWu97WUXNFEVD1jPr76u%2BKU8Diy1SxYtQuFgRtg5HOUFc8MOE%2FVrMQ0gU8VGIlpXXkwpBiK9usURCULlrZiNz4ydkaaZGz7mPhlpjNpbnhMnEk9pwnW8W9quhXOB%2F0H1aVLc7zJ9AAd8i0AXuEoMN2thsMGOqUBM73B3Zri43zD8s3NK7C%2F1amDXCUfvqbEPwuXoVSd879dPoSVsaYmwS2VPYwdiEnCDoBjvjn9nSrmQR%2Bj0RiTr80qD2zcguYsRrBxx5I3VReFOm76s8uM2rfTcS0i1%2BtDW1Zo%2FZ03Yns1FV6TGuArIG3zi2EfQukmUMRTRkgb4C3QL91riY%2BN7WkuZyKNW8cs9x%2B6tn4sgTlZQL9dmPa%2FwLGBO5or&X-Amz-Signature=cd84d45436436eb3a34424ed901407f034f78e4a459a137628501486ee15662f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIZ2LCO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVxWS0XkMXSBNdZAgmnQhjsRbIFSVxNPl%2Bq1b6vAOIlAiBI7F%2B5on3neEmUdwgB7mD9s%2BrF1ndhTcikJ0I2UpqTbSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJLgBr464Fuvg9PDKtwDdEknT%2FSi7d0Rrudj5x8HCyjHNcfvMQjjMNQOlkmKgmTKqij%2BujIsvK26npLyNfEa6gxlQ%2B0a0VRjOrGOazj%2FDXpqCCGceZxosWazJdn1kvThmAPgUj3%2Fr8ZWQv805NtMrrfVR57vafbuaezEBVBCuFZCqIXHJpHqYMJTAyMLUSs%2FNb8wpKY%2B4aeMYQE0ZMtLmxbXjLe9rOBI5IU%2FHsAIkNbJ45xU2vz3t3FIlr92mwI61QyPYvPXXh4iecTO4ff%2BfVODa4uiTNfyyJUoF0MlRt7WVuaDOLD2ycXzEKmhVTZjBij1lsfhb96WPjyCUAFBMRIrac7YjG0C2gspJU2PTWcEiPG4LlntA8TokB%2F1Y5mhYgkpxifpac91lUE38LLIagbfuPCGDUY6sGB2hf6EbTBHs1Swh6tsvKiCKSH7K1o4gyGajUWGgTTj2%2FIBc%2BBjlztSSOftuO%2B1IgHUT6dNmgzEVD38lSSbvuds16rk%2B2P8gxB44BiFbh%2BToxEYI4DqQ7VId5fpXfcsb%2BgIXcm9NnNxQeIubu4GT%2B1EwjZu1nPLUZof9WPIMwzOxBV4xthGAj5iG4adQcQErzlohW8JKglHWVZJLNGmIUbzWStMs6VnXM%2FwEWxCWApTpNEwiPuFwwY6pgGQjqn6Si8nCNlkHaP2ISW%2FXrC%2Bj79jE%2BYZl56vz9s2EVUljNG2rhTrUdk9vP%2FCxH0mdXdArfIrn0YGpdFVnIY7hAtq1K7EV8PiAQf4w4%2B%2FAKI5AWcCI1Joch%2FYDcmiH84Ggr18xJkBpYYrqMX2thQD9A2Q2jGvI9FFKV9K6V%2FPhZQDRSy8U6vZhDYZzP5wPzp418z5GhqgtwV4o0Qd4VETVDAymDgM&X-Amz-Signature=cefd3418fc985b317d56d5a59d8f3da63eff06ee2c3bc86446b6c54e439a56b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLMEIYYT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs%2FrsRSdPVRdbA%2FJlHC%2BlTZulboTrzSWCDtdglptfzHAiEA70PG%2BQ8qTKuT1v5mTrkvYh8690oje35xm9OboJx5fYkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWAeRJuDD9VN3%2BGqyrcAzAmIWirekk5gWI0JtxqKAxU5heDlh%2BICnGEzaZnK8gq42ZJsTbJNj506DutvLPPvd1lQzq6ZFjPWoQWUVjLnbU7pK9QU4x2PJ34bR5aEV5YW5s%2B5QD%2Btn%2FBdKB9CxygfTfFcs2AM9W4kw49ARREmejNZ2YukL7Ga8lTRRGJJSV2DlSk5%2FQNsGOW7n0ZWB95%2BSO4ZJMAaJSYMLlKhG%2BNYz5Z6Ln%2BSSM64XaqhCNIVhKDiocADyZvtELkXYUjmlKJkNFYY8gmpLCRqzY2RbQpK8Vg7%2FJ%2BCHpNEoSEzWDmYnz1FyeLcyYIWG7fk3%2FIs7g29bix%2BboXC1WwYKWFtmLnvHD0yhMQBwBYrDGs19wX3IUuD90K8flLwiDMJc4pRd8%2BlpH44PPVFBMAXyOSiiJOc3azOy2l%2FJxtP77HEdQ6qN94psvNt%2FJ3%2BDDUH577JhkiDUU%2Fn6PEU2vUgFCVrZTZLpaULN4hr3LJHNmPQTxdGyGoKz6kvxoQr5qpkWxEadhIbH5t4oIjCnuW1MGpbnDjqmc6mhPbqhZIcEYZBbAuLh83juDXf0FXcarbvGiNoYiyZgBMS8E%2FstKTzu6DCfoahl%2FJcc9%2FYOMmqFItchNFY1hIvsUb1WMBCeieUMJ5MKD6hcMGOqUBj8vzcXRF8IMrrSbOPo1EOYzi1xRJGE%2BQ0BAdNd7F%2BA2Ao6DjoaBaiO98bWLdqVKAdEqjZ0vNexxurSv3JxdVH6avn6iK1mbOs%2FYW6dbRHVDsA23HRhJD9LJ4o8zD92ZjOvbY6adFYQ65i%2FMWv7BjznzS%2FhV0YAOlKnhSXahzUYsqkrcQZX9W20olwvyhiALIgwlcM0yl7qVDAKTWVRW3dk4FfUtF&X-Amz-Signature=2008d882459582e27f248e8e60f1b0c7f76d9296465e9d4b5e654a1db5361b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WMGKAVT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDFsR7HjdSJMzc0MpWcN4C2Ee4eG9FDFoEN8JPTlVRYAiEApnHSdiOfS56pJ5g9Z800lKVCmlbOuO7R5GYcVIqimaEqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2BTwRQKNhogrtA4SrcA2wtewhk%2Bu93WGCTaReBXQJSscJmy5d%2BDp%2FPodMf77qvqclPo0%2F2OyMAO199peEycCyTN%2F4y2GVxXgFrEGHyYnA5SQQR4V6nid%2FoV2UBy%2BKZgADGWUR%2Fl6b51HFnzaoT2qFgDfc0EGdvLLrTuyVkOCGF3ITd59Q%2BnYccM%2Bvp%2BhSS8t1k2vdaYGXL1Y3Jlv5VVY%2FeyWfimG9id%2FeNrSRBjxPoZLsasa%2BvGiyJU5dSNuta2OFoeebEneJ%2FQywDL%2B%2FZIBBwRSq35eQh03h0dCuE3rmSpu4gv52AcYIzgPawVYQmOI25IgEI3QSRD3j2tkz9%2BxqZ9Bkhox00uxgOZ2k%2ByqDd3KFZ3iE%2BBlr9HWFoEamhm8aSGtI6r0E%2BzEzmhCYfyYgA9SFyJAIIZtwKHJAuNuRbyAU7f9HtmtTH9TBsLIzbD%2ByV4Kduk1ca%2BK5k%2FQdlHezPS1aRLmq0jkhUYEoUYyRALDLpNxZy6LybXOEugDWu97WUXNFEVD1jPr76u%2BKU8Diy1SxYtQuFgRtg5HOUFc8MOE%2FVrMQ0gU8VGIlpXXkwpBiK9usURCULlrZiNz4ydkaaZGz7mPhlpjNpbnhMnEk9pwnW8W9quhXOB%2F0H1aVLc7zJ9AAd8i0AXuEoMN2thsMGOqUBM73B3Zri43zD8s3NK7C%2F1amDXCUfvqbEPwuXoVSd879dPoSVsaYmwS2VPYwdiEnCDoBjvjn9nSrmQR%2Bj0RiTr80qD2zcguYsRrBxx5I3VReFOm76s8uM2rfTcS0i1%2BtDW1Zo%2FZ03Yns1FV6TGuArIG3zi2EfQukmUMRTRkgb4C3QL91riY%2BN7WkuZyKNW8cs9x%2B6tn4sgTlZQL9dmPa%2FwLGBO5or&X-Amz-Signature=790745e5c6a8ca169bb5c8b9425a83a20a4f6d25f14c1679cc846281b34c41d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
