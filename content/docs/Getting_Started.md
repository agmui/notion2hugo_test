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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVM727Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvCJP%2FNvfQBRJfSAwgJUjF3DA0fl%2BPEvPaL65l%2FcwpXAiAhaMuGoo7s0padfo8uUDH05dbDopH8ie0pwP2KOp2haSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1AFOhkdghu33vifFKtwD%2BYUou7kEV0xFIVa2uiOKyJr7IhrI4siAyptW1tNgHTlluZKkwUf9%2F5rwSZHK3PnAsu7Oovfqoi4GoiLMoVZTNaX2wDtBn%2FvcpXFJxdcfYvv%2BC7U3E51SvQZ2ZgL%2FAbmZjHsMdU8cjN52qgo6FljpnVKAZMJV6dTB8GFK1ufnBJMX3OjsTauj74QTvqbvzHeyFeGcvlaCTQmphZWs2BTcPLHQGp50x7yyGa%2Fg0U4Wc5Mv%2F8PdAtAuLUIIfqtNGDf%2B28W9kKtyXi7hoJ8d%2FTy230QETY%2FLFRE2u5K0mk31Caih%2BrtT5oU2t%2FmZivN9dejIeKtfxMuZYKtXyW8E4AHtqjsQfH8smANvuwq1jXF9OSg9s%2BIoTf7hsVEFDqpN2tAq1oXn6eQgmy%2B3j%2BnYxlUYm4eLIbalQDt9rR9GFH5hFSYfz24P7WGuB4Rboc%2BVz2MUyaBPTOS%2BrJgRGps5bcTJzNuJkY%2F32%2BNg0ugHQolAgqJy1P9I5cVyJceIh5mgTwU%2BhZIZv5gMlncW%2FiHbwMrEUOMm9d9pyEHVWcN%2BgnpQdiApZBnPixzNAVxH9Gp9aCNKDw9t6fJLNAHqhctXQ09qCkqIXCKBz4PekSRFEOqb33As5wl4UzRwagR8scQw2qTNwwY6pgErr6AGQXEmjvqR4V%2BMKq22pJacqqCFBw0D5rYSGpw4GjRxnW75%2B535gHDm%2F994YltJ6TtH93lTteceyWz47KLsVOE8Cnqj9WEERSPntJrgccdclQRrqw7VGKMRoNDSyQOTfpvX5uujVwxRRErSCj%2By9QJqjCYJw46u6Lfkh6JVHQuJz6WinclqdHc3XNFT1IUcZG7eUUoYnYWW7xmsn62NNvnUOFAn&X-Amz-Signature=1cd3bb83969dd2df2aad3f4a68e482f4ac2f71a8450af3ef4a5f5b35ace1e8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVM727Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvCJP%2FNvfQBRJfSAwgJUjF3DA0fl%2BPEvPaL65l%2FcwpXAiAhaMuGoo7s0padfo8uUDH05dbDopH8ie0pwP2KOp2haSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1AFOhkdghu33vifFKtwD%2BYUou7kEV0xFIVa2uiOKyJr7IhrI4siAyptW1tNgHTlluZKkwUf9%2F5rwSZHK3PnAsu7Oovfqoi4GoiLMoVZTNaX2wDtBn%2FvcpXFJxdcfYvv%2BC7U3E51SvQZ2ZgL%2FAbmZjHsMdU8cjN52qgo6FljpnVKAZMJV6dTB8GFK1ufnBJMX3OjsTauj74QTvqbvzHeyFeGcvlaCTQmphZWs2BTcPLHQGp50x7yyGa%2Fg0U4Wc5Mv%2F8PdAtAuLUIIfqtNGDf%2B28W9kKtyXi7hoJ8d%2FTy230QETY%2FLFRE2u5K0mk31Caih%2BrtT5oU2t%2FmZivN9dejIeKtfxMuZYKtXyW8E4AHtqjsQfH8smANvuwq1jXF9OSg9s%2BIoTf7hsVEFDqpN2tAq1oXn6eQgmy%2B3j%2BnYxlUYm4eLIbalQDt9rR9GFH5hFSYfz24P7WGuB4Rboc%2BVz2MUyaBPTOS%2BrJgRGps5bcTJzNuJkY%2F32%2BNg0ugHQolAgqJy1P9I5cVyJceIh5mgTwU%2BhZIZv5gMlncW%2FiHbwMrEUOMm9d9pyEHVWcN%2BgnpQdiApZBnPixzNAVxH9Gp9aCNKDw9t6fJLNAHqhctXQ09qCkqIXCKBz4PekSRFEOqb33As5wl4UzRwagR8scQw2qTNwwY6pgErr6AGQXEmjvqR4V%2BMKq22pJacqqCFBw0D5rYSGpw4GjRxnW75%2B535gHDm%2F994YltJ6TtH93lTteceyWz47KLsVOE8Cnqj9WEERSPntJrgccdclQRrqw7VGKMRoNDSyQOTfpvX5uujVwxRRErSCj%2By9QJqjCYJw46u6Lfkh6JVHQuJz6WinclqdHc3XNFT1IUcZG7eUUoYnYWW7xmsn62NNvnUOFAn&X-Amz-Signature=e1dd66a3193f13c8fd1bfa8417ddfd59f7fa0561aad56b64752ea223d7a36e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVM727Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvCJP%2FNvfQBRJfSAwgJUjF3DA0fl%2BPEvPaL65l%2FcwpXAiAhaMuGoo7s0padfo8uUDH05dbDopH8ie0pwP2KOp2haSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1AFOhkdghu33vifFKtwD%2BYUou7kEV0xFIVa2uiOKyJr7IhrI4siAyptW1tNgHTlluZKkwUf9%2F5rwSZHK3PnAsu7Oovfqoi4GoiLMoVZTNaX2wDtBn%2FvcpXFJxdcfYvv%2BC7U3E51SvQZ2ZgL%2FAbmZjHsMdU8cjN52qgo6FljpnVKAZMJV6dTB8GFK1ufnBJMX3OjsTauj74QTvqbvzHeyFeGcvlaCTQmphZWs2BTcPLHQGp50x7yyGa%2Fg0U4Wc5Mv%2F8PdAtAuLUIIfqtNGDf%2B28W9kKtyXi7hoJ8d%2FTy230QETY%2FLFRE2u5K0mk31Caih%2BrtT5oU2t%2FmZivN9dejIeKtfxMuZYKtXyW8E4AHtqjsQfH8smANvuwq1jXF9OSg9s%2BIoTf7hsVEFDqpN2tAq1oXn6eQgmy%2B3j%2BnYxlUYm4eLIbalQDt9rR9GFH5hFSYfz24P7WGuB4Rboc%2BVz2MUyaBPTOS%2BrJgRGps5bcTJzNuJkY%2F32%2BNg0ugHQolAgqJy1P9I5cVyJceIh5mgTwU%2BhZIZv5gMlncW%2FiHbwMrEUOMm9d9pyEHVWcN%2BgnpQdiApZBnPixzNAVxH9Gp9aCNKDw9t6fJLNAHqhctXQ09qCkqIXCKBz4PekSRFEOqb33As5wl4UzRwagR8scQw2qTNwwY6pgErr6AGQXEmjvqR4V%2BMKq22pJacqqCFBw0D5rYSGpw4GjRxnW75%2B535gHDm%2F994YltJ6TtH93lTteceyWz47KLsVOE8Cnqj9WEERSPntJrgccdclQRrqw7VGKMRoNDSyQOTfpvX5uujVwxRRErSCj%2By9QJqjCYJw46u6Lfkh6JVHQuJz6WinclqdHc3XNFT1IUcZG7eUUoYnYWW7xmsn62NNvnUOFAn&X-Amz-Signature=bebbd26fc5791ffe09906ad00f666b66b3fdb2b0a313a4eafb1dca7e19a52bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLRRFH%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfpoEUsOPSLgUWDk%2BnEwAbxsMIepqqAsofMvbjXtqSCwIgMa1E87FvT96uKKZfDsd2OvJenFT8pT%2FX3eMUI0pe8T4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCtVJlxeUaagzz8tqCrcA1P1lf5VAcaG6bi9rWB0gB3tCbhe209ei2KDloX19X1%2BQb0pSMh2PCa1pEU%2BM%2FrvLMTRffbwDRBo9yClKFxEQFdfHD%2BGzl7S%2FTKCSozHYPCYlcX2UHaaJ99ZdL%2F%2Fg1YQw4qe72x9HMhh0D3hHfCJOh9J1L4B3ERbnWDo64R4PIkYHlCLA9YBreufscub2V3%2Fo2e6LpN2%2FrTZW56sjRs3QaYD2QcRHAqqWEq8hR2KJSfWeyFIjB1rWra0fsJQHBrn9F97L%2B8oy1Ko8q5fTMGpg1tFxR%2B0MC3W0KhiUn%2BaZ9j%2FncWaUlTrj2PQ%2B3wj%2FjnqNlE4%2Fw4s%2FQt99atPlMKUH62wur%2Bfi3AyVCNEf1%2BBFT9V6T%2F79oHyYOdSAAwwOZSPkUWna3nC5T5UUfXbtmQTsIJO%2F1HgaTEYbolJuVvz9fTtzQzzquMg1YppJobGdH2AOLaY4HMM6WBLlOOtPq2aO51w0wKToIXpQHZG2quGmOnjcHxMwmAa5Cxus5DiQjTsNpYpC5xCFBfPbJzNBiCfO%2FI%2BD3BvNgGZURR7BjwCccQePhL6lWQZHoXoT1t6eIl37gfJI%2BKc2tKd7KFO%2BgjbBRHzLdicbYTsCIxrzbFB24fY5AooH9jpDRsHMQHIMNakzcMGOqUBH9%2BJQ3xmnAvAGYbARLDTmxcGWF%2BiGMK8YxZdzINWlX%2B9ZWf8C%2BK5PuLnDtXtTSQfj5RaPuVWXHewFoEi%2FfsxpQ2b3s9UARw63C52geAm5FaK9LjtwYc3vI64XXKW7Iv0t1uTsJQlv%2B8ok0YDB%2F7Q%2FJ%2Fxom7n0XCwN7DiI9F2OeKDe4tKqvZNNoQ%2FQMDYjoXuogFmc9ZFjny9z7TLbG5VB%2FZ5yuOs&X-Amz-Signature=47ec2dde2359feef7c42b260a70dad6789bf3df9bb082dca6e97e7ab926fa490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYF3QLXS%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCGhpPmEtpTYeGua3Xkid6PRtq1HUpq%2FYWZyVypbFFiQIgIVH6RcrmRXPy2TOdOw4%2FKv1a4QVY6WaVVewhU2u1NKUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPisw2Te20ecdYvxGyrcA7gl4U4KtZsLw%2FzhFdUoYfd9yCYMT4Dt3TDwCqcBVAjz1awjiQ%2BZThq6gBsIq%2FNxST0JY7J3YRyCVzcZmrrmUh2wAxI91LMxcp1vB0PBBXiVgww%2FuiclHC%2FG8u96%2F58WfafvVQaZIDh9b5gLubWLOIigYS5M40SGjmRL2vYriuStvjij0TGIEUuJLrTE7HBhoiJiLAqPi%2Fr%2FlraCBgf6QDMtRb2sOzEcdJ04WDW6NtCTRrZnAQfjYJckTUDVyL2jQqYWyulYcilQ0NUU98Lx9%2BFV%2B7n8M%2Bos6avA0m7UqwOD7whaofVrYppOOrVUeR1H9j6g%2B9N7yKXq1pJqMbBk9RYjmguLYH%2FCC3mBrZu9rPtEug%2B2VcJSR2PBeHW8ba%2ByXZrBVJEwlPvbVDQnu6PoMOVWEDZSS34g2xFqDoC3sA4p%2B2eTTu2n6vdHBK2B8808E5tDTEC7or%2BIcesMZHH6ANKNoS25R01cWNVsUcb7mTC%2FZbuKGB0FdQ1joYkVIzlKZ6veNN2TcE6ObPfV90dD%2Fg0U94%2FlM2odj3QUmH1PpvOv3GSBwzcZSPv3RRS88Fj2Tlc9RhGu5yWqzpTsX9ROdyKoBnD8eT2pR5Myg2oqTOO05l5pHYcxMWQXT%2BI6MOujzcMGOqUBHz53xxSznU5b6rwXrfyjS%2F7dg0S8mosdqYjgCdUncxsd3DX5%2ByjDBjwVzfbRR4mh2ilmqMge5xNDGQkFFb1FBNKOGqXVWQSJyzadj%2B0EmouAqRDqyQ0n4SspEZK80A8SBnTifO7mYsJRi%2BmeV6BPf7II6OlFbijHHAyRgeM8pwbMr1CUx9MuCssCwJ8KfisLgwFfIYlghlufjps4drB2s%2BZKyo6A&X-Amz-Signature=21fdab50841b3edde489b3ff6694e83a13f3671d9ab4d9d0736ac992531770ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVM727Y%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvCJP%2FNvfQBRJfSAwgJUjF3DA0fl%2BPEvPaL65l%2FcwpXAiAhaMuGoo7s0padfo8uUDH05dbDopH8ie0pwP2KOp2haSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM1AFOhkdghu33vifFKtwD%2BYUou7kEV0xFIVa2uiOKyJr7IhrI4siAyptW1tNgHTlluZKkwUf9%2F5rwSZHK3PnAsu7Oovfqoi4GoiLMoVZTNaX2wDtBn%2FvcpXFJxdcfYvv%2BC7U3E51SvQZ2ZgL%2FAbmZjHsMdU8cjN52qgo6FljpnVKAZMJV6dTB8GFK1ufnBJMX3OjsTauj74QTvqbvzHeyFeGcvlaCTQmphZWs2BTcPLHQGp50x7yyGa%2Fg0U4Wc5Mv%2F8PdAtAuLUIIfqtNGDf%2B28W9kKtyXi7hoJ8d%2FTy230QETY%2FLFRE2u5K0mk31Caih%2BrtT5oU2t%2FmZivN9dejIeKtfxMuZYKtXyW8E4AHtqjsQfH8smANvuwq1jXF9OSg9s%2BIoTf7hsVEFDqpN2tAq1oXn6eQgmy%2B3j%2BnYxlUYm4eLIbalQDt9rR9GFH5hFSYfz24P7WGuB4Rboc%2BVz2MUyaBPTOS%2BrJgRGps5bcTJzNuJkY%2F32%2BNg0ugHQolAgqJy1P9I5cVyJceIh5mgTwU%2BhZIZv5gMlncW%2FiHbwMrEUOMm9d9pyEHVWcN%2BgnpQdiApZBnPixzNAVxH9Gp9aCNKDw9t6fJLNAHqhctXQ09qCkqIXCKBz4PekSRFEOqb33As5wl4UzRwagR8scQw2qTNwwY6pgErr6AGQXEmjvqR4V%2BMKq22pJacqqCFBw0D5rYSGpw4GjRxnW75%2B535gHDm%2F994YltJ6TtH93lTteceyWz47KLsVOE8Cnqj9WEERSPntJrgccdclQRrqw7VGKMRoNDSyQOTfpvX5uujVwxRRErSCj%2By9QJqjCYJw46u6Lfkh6JVHQuJz6WinclqdHc3XNFT1IUcZG7eUUoYnYWW7xmsn62NNvnUOFAn&X-Amz-Signature=2419065318e08f93470de40920b1c45c040063efbaae9b6856e34c67b2500b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
