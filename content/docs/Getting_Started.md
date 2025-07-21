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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UWCSZO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMsNPPEIQj7VeJ4459D54MFe4ukOeZAVl0lMDfOhQzAiB4kw%2FGR4PJunknoy6g%2Ft291471E2w9F8xZsruO59mW1iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgEErXTlTnBfsT%2FlKtwDzAwcg3w2mUu826L44qrbopgZaH10b6iqhnfsqcKk2i6n%2BWPdgrUebEFXZq0hVdRvEhD2CntUQVxo2KTG5z2lrr1yFykUFNpNH2rTVmzlYv0uUCM6qpVecmyadMrXdF6ln96EJthfdLmyC2Tuv51rM9%2F8bzrPmbKR8aTpcHVWIG8uSPzfHN5UgN32iIBLt8OtHm5Lxcc3SKzYmBjXBmeSRJpzzB3T2navBVIWJSJBpAIo93fTvNAkJaRNeM186dIXLnUqByRg%2FZLJ0DnJ09Y%2BATQ33z7SGF6epzZLvzQH%2BG9%2BR9XpvCdyoYcyfbEm35DKKT0lgC0%2F0Yh6wpToDJOBti3xtQgVK3dOjS9A3%2BN0ICavgGPwsDx0CmdfIXWDKUkgrRK%2BndDosfu7cPgYRdDd1NF1ptTDr%2FdxFYAwRECbWOl2cCXrWIwnAB%2B73eY3MvK8%2BvXFPWg73SSHfcsFiCBZAEs7wwFHLzrTI1wPOxi98IThDAZa1y7b0G2b0rMelVYzONidPk7w2lnG6SuY58uF8yuuLRuKGAsyA8zdguf%2BFekUkTrQZvbXZg5Q47kzL7ZWn4xzmFXnuIjVtDBDbxQxU%2BaO%2BpudJL8tfFcY36WFUKPwep25U5cs040jbYQw%2Fvn4wwY6pgH5ZJKrasHsnC0ea%2Fog%2FN5hOr1MpuOyEKFSPQ7pgfGrHZBxuX5IrEVX4QAT9VSSoRbIuKS183j5LDE%2BC8NvLUCHf8wbAVqQriYgC%2BbxzudcbjumLlXlSDh18pTEvbN3zShzPNtnEe%2BJW2YkF%2FTdJB6EZ2Pz%2BN0s3DrgxK3BLi1sYztf9sWhnasKcj2oZF2brGb5Oqap433LWXXU4X9NLBBCSyqKTMvq&X-Amz-Signature=7ef0af22b1267540f5e9121c646d8b66bac2abdd013bd6cb42ecd42204f95a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UWCSZO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMsNPPEIQj7VeJ4459D54MFe4ukOeZAVl0lMDfOhQzAiB4kw%2FGR4PJunknoy6g%2Ft291471E2w9F8xZsruO59mW1iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgEErXTlTnBfsT%2FlKtwDzAwcg3w2mUu826L44qrbopgZaH10b6iqhnfsqcKk2i6n%2BWPdgrUebEFXZq0hVdRvEhD2CntUQVxo2KTG5z2lrr1yFykUFNpNH2rTVmzlYv0uUCM6qpVecmyadMrXdF6ln96EJthfdLmyC2Tuv51rM9%2F8bzrPmbKR8aTpcHVWIG8uSPzfHN5UgN32iIBLt8OtHm5Lxcc3SKzYmBjXBmeSRJpzzB3T2navBVIWJSJBpAIo93fTvNAkJaRNeM186dIXLnUqByRg%2FZLJ0DnJ09Y%2BATQ33z7SGF6epzZLvzQH%2BG9%2BR9XpvCdyoYcyfbEm35DKKT0lgC0%2F0Yh6wpToDJOBti3xtQgVK3dOjS9A3%2BN0ICavgGPwsDx0CmdfIXWDKUkgrRK%2BndDosfu7cPgYRdDd1NF1ptTDr%2FdxFYAwRECbWOl2cCXrWIwnAB%2B73eY3MvK8%2BvXFPWg73SSHfcsFiCBZAEs7wwFHLzrTI1wPOxi98IThDAZa1y7b0G2b0rMelVYzONidPk7w2lnG6SuY58uF8yuuLRuKGAsyA8zdguf%2BFekUkTrQZvbXZg5Q47kzL7ZWn4xzmFXnuIjVtDBDbxQxU%2BaO%2BpudJL8tfFcY36WFUKPwep25U5cs040jbYQw%2Fvn4wwY6pgH5ZJKrasHsnC0ea%2Fog%2FN5hOr1MpuOyEKFSPQ7pgfGrHZBxuX5IrEVX4QAT9VSSoRbIuKS183j5LDE%2BC8NvLUCHf8wbAVqQriYgC%2BbxzudcbjumLlXlSDh18pTEvbN3zShzPNtnEe%2BJW2YkF%2FTdJB6EZ2Pz%2BN0s3DrgxK3BLi1sYztf9sWhnasKcj2oZF2brGb5Oqap433LWXXU4X9NLBBCSyqKTMvq&X-Amz-Signature=8862df396dcaa93015b2d4a6af434d7f261d35fe209ce43772a01a4ec81765bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UWCSZO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMsNPPEIQj7VeJ4459D54MFe4ukOeZAVl0lMDfOhQzAiB4kw%2FGR4PJunknoy6g%2Ft291471E2w9F8xZsruO59mW1iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgEErXTlTnBfsT%2FlKtwDzAwcg3w2mUu826L44qrbopgZaH10b6iqhnfsqcKk2i6n%2BWPdgrUebEFXZq0hVdRvEhD2CntUQVxo2KTG5z2lrr1yFykUFNpNH2rTVmzlYv0uUCM6qpVecmyadMrXdF6ln96EJthfdLmyC2Tuv51rM9%2F8bzrPmbKR8aTpcHVWIG8uSPzfHN5UgN32iIBLt8OtHm5Lxcc3SKzYmBjXBmeSRJpzzB3T2navBVIWJSJBpAIo93fTvNAkJaRNeM186dIXLnUqByRg%2FZLJ0DnJ09Y%2BATQ33z7SGF6epzZLvzQH%2BG9%2BR9XpvCdyoYcyfbEm35DKKT0lgC0%2F0Yh6wpToDJOBti3xtQgVK3dOjS9A3%2BN0ICavgGPwsDx0CmdfIXWDKUkgrRK%2BndDosfu7cPgYRdDd1NF1ptTDr%2FdxFYAwRECbWOl2cCXrWIwnAB%2B73eY3MvK8%2BvXFPWg73SSHfcsFiCBZAEs7wwFHLzrTI1wPOxi98IThDAZa1y7b0G2b0rMelVYzONidPk7w2lnG6SuY58uF8yuuLRuKGAsyA8zdguf%2BFekUkTrQZvbXZg5Q47kzL7ZWn4xzmFXnuIjVtDBDbxQxU%2BaO%2BpudJL8tfFcY36WFUKPwep25U5cs040jbYQw%2Fvn4wwY6pgH5ZJKrasHsnC0ea%2Fog%2FN5hOr1MpuOyEKFSPQ7pgfGrHZBxuX5IrEVX4QAT9VSSoRbIuKS183j5LDE%2BC8NvLUCHf8wbAVqQriYgC%2BbxzudcbjumLlXlSDh18pTEvbN3zShzPNtnEe%2BJW2YkF%2FTdJB6EZ2Pz%2BN0s3DrgxK3BLi1sYztf9sWhnasKcj2oZF2brGb5Oqap433LWXXU4X9NLBBCSyqKTMvq&X-Amz-Signature=c3efbbf273e8eb36ffe1e7ea41ad104730295c30a29bb0d48d70849133c0d8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255RIJJ2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgndebF8uSeND12kGwBJF%2FMUd%2Bo2PRmWcI4yIYUdkMmAiA8BjJSRWqPAi%2FT5bWfANH6BmtcnWaVNHuNdlXqvNd9aiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpiRYtpmyNr4pqPmKtwDzy76N4GfznytzRXSnAgDXAj4cfBaiTq78vcOIKWLSrkpT%2BuewBSRLiQLrrnNeiutiNa9jAl6SlrHAUet0LNun5wYG0YRsMI7kXdpBk81awSM4hMIdui8r7aNvXos822Tw3NUpU7WJKfBn059DTJ1ajRkk0ldL6ib2u4wFUg7QpFUaXmsAoMKY6kjwW%2F3p056Cthcw4kVsL5KZs7YjV6dX0jT8wjQborlPRV4j3gfw7jR2czcpDyOWBIp2SqgrKyikCY0%2FfeIgbs5dVorS7iCe0jm%2BdyJb%2BTdxdpSfDJHsKeWWeiXgtaSQbrOFDNZe4WXt6oZIAye44VZlyZlX3Ppo%2B2IX7SQ3FhcGjS02foXvqySsxVj0j6lgYx%2BhlYYs8Jrm4o4Zpik9y6Qn79aaaGf6N7exhAk07ju%2BzHyCEblWd32d2yZ16nAOmmKOVHh4ihGNm7dpsId7ombKf7SoMCHk9ZmYcV7CCIcGz%2BI27xc9N2VYp%2BhbkfSTnus7d9AxMA7G5lLA7tgzfN3bdjx3ycnhXTxjWrOEycqFcjB2%2BPcWX8MTra%2Fk9y2omHa3tIJvOk4kjAB7AHM9OnK%2F3zbbUzNN%2BcpcnNUcbvdDwU1RSUE9AVinusXPDf%2BT0rZu%2BEw2vj4wwY6pgFRemormys9HCTiWK2ObDKjAa0%2FZdI%2Bu%2B2vu0Z80sOM7%2BnFY3Ib05X2nXH6ncY%2Fy6novhxBmv%2F7A7WmG%2FHadVfMNGldBgJwXNe8Aw9G4Zoe5pakA2QDd9SOk0kYPiGQccqngDHgoKg%2BpcloydDcuJcgxRxoh6tTMv%2B4UFLASdbuKOmgag2OH1248xpO08Gbw0jqWwU%2FjUAEI6YcMc2UUjK1RPkAM2ib&X-Amz-Signature=6b532c3aeec9e2b113726c3e05623ab9f266bf90db1ee222bab84d541d07cdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ6OF4DH%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0cVUs%2F%2B4lpeRJsNnnwO5cQXiPd4SN4XupADBlz%2BNq%2FAiAVSYzPug4akF6vTbmXETgq23D5lZera%2Br%2FxIqLn7zXfSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq3kzSXMwH8cxJYRZKtwDjP7LjkQpBpBZanHDHXbgnFBAyMXdedyUrYlxeRkkJpkIMW18Z9GsLokCELDRJst2DbeTH3NT%2FqGG3ZcG0BUGjiOaNEyha4F%2FimCc4vdtwajnkbCGzltflevD9D3uz41NwZZ2kUV2ltShEVT41%2FYmmo6mrN0oi1o5C4RQEv%2BxPc2C758GP4hiXM3eWAi%2F1K7jNv8azOgpS1xqkLEF65cvmp%2FexKnuGjOwPYKRXZ%2Bccoje77hhSibE4Ywn3txMZhfdkWrP%2FFwOTQF27zHLJ0fHa9fkuVdnYkD7tj0F2rYMzjDgyo2fS7tdfGDAoOZAdwnglwHHyhCOOZZe2e1G%2BB2I3ZcyqnCx4%2Bxd%2FSkC%2FtBUdtuKjFee2btSBCTRh%2B3aIrjOJn8E6hHwUarUfeZal%2BzpXwcMiMvtv1J%2BLaVtFXYOyExmDKZag55feAwOag3o5KTE4%2BREXt7VqGOdbwPH4%2F0VM53280HsK6tllqmGGawgpTtuXhwp5rvgmiFAWp51%2FAeiW%2Ba%2BpXtbVRu8xPFUwfEdqNkKwgQoBm7AU%2BNk4zkmaozeT3pa5ALbp0r88t58z9Ykb2eDo1wbVFyE%2BLG%2B5RiDD7A1jEOX9w4HG1N1HG2gfqpAYH8ppX449zvBPscw2Pn4wwY6pgHRmBvG5xFstKFOcTL6%2FhbR7L%2BiVLjpQiE8Rxj3Gp5VJUboAQPqQXGaxkDVnk665KTafcvB69apCHjq6vba8jGa7KBUCi3iULoB8gQ7FuoTKe1SGyWsNEO%2BFWwewLzuXNSm9Bw0Np%2Fqf2HVF13F%2F3xY1DZalHmKppQrSgxzI9sHK7UnawQVM%2BfX6J45MNNZipMo5VOhjgbVi2MaBhEmo%2B4E15e6sczN&X-Amz-Signature=b6bf44a3c166c55918b62c757b03d7a6c80e682dfece6fefc177b2b93d40f789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642UWCSZO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T141153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMsNPPEIQj7VeJ4459D54MFe4ukOeZAVl0lMDfOhQzAiB4kw%2FGR4PJunknoy6g%2Ft291471E2w9F8xZsruO59mW1iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgEErXTlTnBfsT%2FlKtwDzAwcg3w2mUu826L44qrbopgZaH10b6iqhnfsqcKk2i6n%2BWPdgrUebEFXZq0hVdRvEhD2CntUQVxo2KTG5z2lrr1yFykUFNpNH2rTVmzlYv0uUCM6qpVecmyadMrXdF6ln96EJthfdLmyC2Tuv51rM9%2F8bzrPmbKR8aTpcHVWIG8uSPzfHN5UgN32iIBLt8OtHm5Lxcc3SKzYmBjXBmeSRJpzzB3T2navBVIWJSJBpAIo93fTvNAkJaRNeM186dIXLnUqByRg%2FZLJ0DnJ09Y%2BATQ33z7SGF6epzZLvzQH%2BG9%2BR9XpvCdyoYcyfbEm35DKKT0lgC0%2F0Yh6wpToDJOBti3xtQgVK3dOjS9A3%2BN0ICavgGPwsDx0CmdfIXWDKUkgrRK%2BndDosfu7cPgYRdDd1NF1ptTDr%2FdxFYAwRECbWOl2cCXrWIwnAB%2B73eY3MvK8%2BvXFPWg73SSHfcsFiCBZAEs7wwFHLzrTI1wPOxi98IThDAZa1y7b0G2b0rMelVYzONidPk7w2lnG6SuY58uF8yuuLRuKGAsyA8zdguf%2BFekUkTrQZvbXZg5Q47kzL7ZWn4xzmFXnuIjVtDBDbxQxU%2BaO%2BpudJL8tfFcY36WFUKPwep25U5cs040jbYQw%2Fvn4wwY6pgH5ZJKrasHsnC0ea%2Fog%2FN5hOr1MpuOyEKFSPQ7pgfGrHZBxuX5IrEVX4QAT9VSSoRbIuKS183j5LDE%2BC8NvLUCHf8wbAVqQriYgC%2BbxzudcbjumLlXlSDh18pTEvbN3zShzPNtnEe%2BJW2YkF%2FTdJB6EZ2Pz%2BN0s3DrgxK3BLi1sYztf9sWhnasKcj2oZF2brGb5Oqap433LWXXU4X9NLBBCSyqKTMvq&X-Amz-Signature=82a63359768e022df066ce11c937c68233e299e80fc152426bc473df56aded55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
