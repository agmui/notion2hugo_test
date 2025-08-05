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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJXIET7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCID1PHBAIWuTTaT%2FjZBPanbYYUyBPkcM99yeCSGeh2tBNAiAQMlgro8evqNv3jxE5XheAwJyNXHnw3mIhO3TF4GFTKSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMsY%2BZaLpVhB83bHcxKtwDJxg2Ch%2FDoKgpZP2NG4BlLFAItFMcwB79KAjCakFgk%2FzYo4tcL1syaahXqi%2F0jOynaFrnRzdxwb0nU5i2SRhPNzmlZvXG4I%2FnICGxdthMyCyuZqDFWP3hDUAwJdU%2FXRvOa9UUESEQzqOUVf2nXr%2F%2Bn5IHAUxdiUPDwDnmeKfWprogjhoCf672eoSPFosLERbUhaau0IcSPTypRQziadr%2B%2FbAaNNtvjoh22YRo9He1zvB9SjQYRRb9omGQXH4p6WhSXdhzTsbGqMqlwaV4YxNNfOJk%2BoXPO%2Bb%2BcWnxO5snGwAGt1jbPMu1Boz%2FxYkDVz7gTjSSrOpsCpQCaUmUmQsM1buIeCe%2Bh%2FDIZKRqdRvh5h2BM9COI2ljifrNDkzU1bn7RCx3lbyIACfFRupRrCPjXnc5yXhmVezlevNSeKfNOisSiE%2FR6zWAp4F50ScnRYw0W%2BBarV5hRowfHPwDkgdgsTOXUAUfBWwbJtMtVTiRsbCm%2BxwtuN5xExK2v1sRfz%2FXVFGefSYT%2BEByrVYnCeCGDzdtHCLyf2U6kP%2FsjnKUXzN1sg7ejg%2FDyds9vxMnheE1K09TIVYm2pPUZ8ztApcM4Jaj0lGivBTXGYhbnXCceT%2FMY1FW0Eruy2xlPPswyq3HxAY6pgEcW%2B6%2BEsf7yMyX6GhGgrchyg3xjXbiILWh%2FpbViA64jTAVhwTLxzA2qhpRx9y4asklVHL11r6BIzdcUykAvYddAuC4S3ZLDZCcaoUon2oRQUMsRga5XUWBaHzVu6d7PUeRjxiKbKS8uNN0py9AKyER166hfwPfMRRiwSgG%2BK3HFmiL3bEbkCYQRy3NakXTHKKJC6qRu0BuV0NzCTP878CQPXW4%2B8PX&X-Amz-Signature=f288d010a1839cb0535e20a62124e3f6efb1e6823df8e61ef92bc8118fb496cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJXIET7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCID1PHBAIWuTTaT%2FjZBPanbYYUyBPkcM99yeCSGeh2tBNAiAQMlgro8evqNv3jxE5XheAwJyNXHnw3mIhO3TF4GFTKSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMsY%2BZaLpVhB83bHcxKtwDJxg2Ch%2FDoKgpZP2NG4BlLFAItFMcwB79KAjCakFgk%2FzYo4tcL1syaahXqi%2F0jOynaFrnRzdxwb0nU5i2SRhPNzmlZvXG4I%2FnICGxdthMyCyuZqDFWP3hDUAwJdU%2FXRvOa9UUESEQzqOUVf2nXr%2F%2Bn5IHAUxdiUPDwDnmeKfWprogjhoCf672eoSPFosLERbUhaau0IcSPTypRQziadr%2B%2FbAaNNtvjoh22YRo9He1zvB9SjQYRRb9omGQXH4p6WhSXdhzTsbGqMqlwaV4YxNNfOJk%2BoXPO%2Bb%2BcWnxO5snGwAGt1jbPMu1Boz%2FxYkDVz7gTjSSrOpsCpQCaUmUmQsM1buIeCe%2Bh%2FDIZKRqdRvh5h2BM9COI2ljifrNDkzU1bn7RCx3lbyIACfFRupRrCPjXnc5yXhmVezlevNSeKfNOisSiE%2FR6zWAp4F50ScnRYw0W%2BBarV5hRowfHPwDkgdgsTOXUAUfBWwbJtMtVTiRsbCm%2BxwtuN5xExK2v1sRfz%2FXVFGefSYT%2BEByrVYnCeCGDzdtHCLyf2U6kP%2FsjnKUXzN1sg7ejg%2FDyds9vxMnheE1K09TIVYm2pPUZ8ztApcM4Jaj0lGivBTXGYhbnXCceT%2FMY1FW0Eruy2xlPPswyq3HxAY6pgEcW%2B6%2BEsf7yMyX6GhGgrchyg3xjXbiILWh%2FpbViA64jTAVhwTLxzA2qhpRx9y4asklVHL11r6BIzdcUykAvYddAuC4S3ZLDZCcaoUon2oRQUMsRga5XUWBaHzVu6d7PUeRjxiKbKS8uNN0py9AKyER166hfwPfMRRiwSgG%2BK3HFmiL3bEbkCYQRy3NakXTHKKJC6qRu0BuV0NzCTP878CQPXW4%2B8PX&X-Amz-Signature=83937774ff550d1d54c0497b7efe1ea9786b3ff67bb230f01de241bc3e3fc36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJXIET7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCID1PHBAIWuTTaT%2FjZBPanbYYUyBPkcM99yeCSGeh2tBNAiAQMlgro8evqNv3jxE5XheAwJyNXHnw3mIhO3TF4GFTKSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMsY%2BZaLpVhB83bHcxKtwDJxg2Ch%2FDoKgpZP2NG4BlLFAItFMcwB79KAjCakFgk%2FzYo4tcL1syaahXqi%2F0jOynaFrnRzdxwb0nU5i2SRhPNzmlZvXG4I%2FnICGxdthMyCyuZqDFWP3hDUAwJdU%2FXRvOa9UUESEQzqOUVf2nXr%2F%2Bn5IHAUxdiUPDwDnmeKfWprogjhoCf672eoSPFosLERbUhaau0IcSPTypRQziadr%2B%2FbAaNNtvjoh22YRo9He1zvB9SjQYRRb9omGQXH4p6WhSXdhzTsbGqMqlwaV4YxNNfOJk%2BoXPO%2Bb%2BcWnxO5snGwAGt1jbPMu1Boz%2FxYkDVz7gTjSSrOpsCpQCaUmUmQsM1buIeCe%2Bh%2FDIZKRqdRvh5h2BM9COI2ljifrNDkzU1bn7RCx3lbyIACfFRupRrCPjXnc5yXhmVezlevNSeKfNOisSiE%2FR6zWAp4F50ScnRYw0W%2BBarV5hRowfHPwDkgdgsTOXUAUfBWwbJtMtVTiRsbCm%2BxwtuN5xExK2v1sRfz%2FXVFGefSYT%2BEByrVYnCeCGDzdtHCLyf2U6kP%2FsjnKUXzN1sg7ejg%2FDyds9vxMnheE1K09TIVYm2pPUZ8ztApcM4Jaj0lGivBTXGYhbnXCceT%2FMY1FW0Eruy2xlPPswyq3HxAY6pgEcW%2B6%2BEsf7yMyX6GhGgrchyg3xjXbiILWh%2FpbViA64jTAVhwTLxzA2qhpRx9y4asklVHL11r6BIzdcUykAvYddAuC4S3ZLDZCcaoUon2oRQUMsRga5XUWBaHzVu6d7PUeRjxiKbKS8uNN0py9AKyER166hfwPfMRRiwSgG%2BK3HFmiL3bEbkCYQRy3NakXTHKKJC6qRu0BuV0NzCTP878CQPXW4%2B8PX&X-Amz-Signature=525e68ed7f60105aabd613834ac0bf906515a5dc664638b3f2c49ede10d8a6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMRHLTG2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCjpus%2FsVRVcC8Ir5%2Fe4TIjh%2FGJsik1NxYkqmj6W8IIMQIgNIV%2F2P%2F22jvYfaN62I1%2FZkiTyUU2pYmlUbHoBROuvN0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGFZL7AUyoP83b6gfyrcA6IP9Wl%2BtDpQNkiHImjFNqpbEqt8%2BJcdEArA2zJSAS3NIL3hHhToTmETS7weP1dUYN6fDU9hacKG4Gug5qonOB4z4TLA%2BCbdf%2BfM0zT%2F2JfqQFrDShYo3NLLvgB6PwC1M5ZzV2eg0jmgunGbiNWDQqJ1LuPaI6wTmJU44JtYmfbpFzLKRJ8KampsTz6FRXLbqdLiuQs67NPvfjj%2FBlcdQbge7S8Oncdtct50jFvkp97%2BFPq4hGBxsESbBqJtF8vQ%2FHov%2BM7%2FwGFjegdR4SEhNktlQfKWCZkD%2BLxLFqEjvwoMJklWL6ozPs%2F6UIBMok2dPCJ%2FWiWbI3qNwkvkE77ATYt3qr4Bi67ZiKhGq3Z%2B3CxprZibhWAI18AEVsDU7Y%2F0af%2Fgw2TBdjuSvBopTksyPAZX27VhiOgrfogKFm166D3dw6dNZOChNjtosoW8k6vi0hd7o%2FG6rE7K6IBrBUlbjwkFgArXUSBMTBAcYJpHx2bTFZdh099M85H52yCcWSn1XyiRpJKbPpFOHBqZ3AOrPrRljw%2BcLvhjG6u3lyTAgTrZ1%2Bbjm4%2BLHyHvlVqrz07lLno7HhyCrHO%2FS%2Bgu%2B%2Fimrdmb0ITq%2Fm6ikMgEKQ9LeUNz5eMrbT2ApuRtlR6sMOitx8QGOqUBWSPXMjY6YYGe1Vbo68EDV40173Nt5NI5QleFFEQvzAOLLrfXJbb7wrsflaL%2BvQDpzYTlEEn%2FTkQSQSu%2BB0G6THomi4YR%2BNBa6g%2FAa69DNbIkV8u4QIb3cY3VujX7ygdarSw5Am52r%2FqbqCSMXXsOUYPTbkhcGLNNk%2FsnO8QBHcOeZU29QPxdG86XQqRavbfOPMh8ZT5lH7ugLfGP3D8CDUABxBgJ&X-Amz-Signature=f534228d82cd32f4ab95b410df9091b4092463cfaadcd4e46f0aa53bc9b02a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZROWRKJ2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIC9vUKPkXpZXWtiPZiwFJI%2BnXprw0GyXF8g%2FW3RT3Gx%2BAiEA2aKbvkxjUYK2aFbhJz11PQiKojaWlbk08QBf82uMpukq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBCljfsOX%2BlyR9s1yyrcAwuOdUoh93DT4iDOctbMs4GpWOkiOVC66zYEjwe8i9srjo%2BgiP%2FTxBjuKldiCPX3jUOGu9s0jCDhHu0rwGyUmN%2BR5AWxmS62vwgatj85k3a%2BuzuQtZE5nnFqBdOfrWYXJ49GXnLq7ncWu0JqDucvOYFq7xUcyigXO0RaYWcp4UqLf81vLTfVjkmGIiNBu1tzHQ75ms%2FCgHnzGhikVRPfYjpVCYgYVcDDOvBCc%2BfEWk32e6KaChFFK6YlJk1fxNr9rjP%2FFkIHTkTnfexu1ZI%2BWlxBf4y0abHNNczNbLR%2FRHQ%2FdL2ocPZGafwaXvmMBDq6GGAwCXsqgVAoxjixrlH5mB4lP5wBPEEK05tBJagHM5a3uoUGwljoCvqkKOsFDPpmm4ONTwqHX1eUIR%2BewR%2BSY8%2FgT150FuOD8XjgAxJKXFagAid5TD7rEt3so3cXsskd%2BG5d7XBjprqwcLnhQDPtdPFwsp5X9OQfUlSL3PcuSkHINbdheqRwu429vI8%2FQvjN2SkDM6JTembKmZ%2Ff6VQGK%2Fx5cGDVsdB2yll05Qd5SySqgIrY0NWRGyoA%2FekhNVrGnSeigAvEa0DKDWa2WswgmUzkMRweCcrCP%2Fwj4NMONnf7Q7kkZGtqwCOtdMsIMKmsx8QGOqUB%2Fc9qrhj1hnlLEXMeyF3puT%2FJ0GiiILMLbrCP3CvSYglo%2BG0wS6ekumfa5wafVeHryeJU9Dh4bSwRlD5dHADBuudFeXovk37mA34p92AFCjZsZqQMx1dRg2iPjiJdcf%2BwUfxwe5xd5q41venMBdtjWOVsDHIh5uTbiUXsaQROZRqf4qBsiy7UTFm%2FmQpBsmIHUTc8wRkHeKvcPWKZy5vkte88uMHa&X-Amz-Signature=019027822df101638b79369df3c91bc897d16318f5cfcc158c73872e91f45888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNJXIET7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCID1PHBAIWuTTaT%2FjZBPanbYYUyBPkcM99yeCSGeh2tBNAiAQMlgro8evqNv3jxE5XheAwJyNXHnw3mIhO3TF4GFTKSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMsY%2BZaLpVhB83bHcxKtwDJxg2Ch%2FDoKgpZP2NG4BlLFAItFMcwB79KAjCakFgk%2FzYo4tcL1syaahXqi%2F0jOynaFrnRzdxwb0nU5i2SRhPNzmlZvXG4I%2FnICGxdthMyCyuZqDFWP3hDUAwJdU%2FXRvOa9UUESEQzqOUVf2nXr%2F%2Bn5IHAUxdiUPDwDnmeKfWprogjhoCf672eoSPFosLERbUhaau0IcSPTypRQziadr%2B%2FbAaNNtvjoh22YRo9He1zvB9SjQYRRb9omGQXH4p6WhSXdhzTsbGqMqlwaV4YxNNfOJk%2BoXPO%2Bb%2BcWnxO5snGwAGt1jbPMu1Boz%2FxYkDVz7gTjSSrOpsCpQCaUmUmQsM1buIeCe%2Bh%2FDIZKRqdRvh5h2BM9COI2ljifrNDkzU1bn7RCx3lbyIACfFRupRrCPjXnc5yXhmVezlevNSeKfNOisSiE%2FR6zWAp4F50ScnRYw0W%2BBarV5hRowfHPwDkgdgsTOXUAUfBWwbJtMtVTiRsbCm%2BxwtuN5xExK2v1sRfz%2FXVFGefSYT%2BEByrVYnCeCGDzdtHCLyf2U6kP%2FsjnKUXzN1sg7ejg%2FDyds9vxMnheE1K09TIVYm2pPUZ8ztApcM4Jaj0lGivBTXGYhbnXCceT%2FMY1FW0Eruy2xlPPswyq3HxAY6pgEcW%2B6%2BEsf7yMyX6GhGgrchyg3xjXbiILWh%2FpbViA64jTAVhwTLxzA2qhpRx9y4asklVHL11r6BIzdcUykAvYddAuC4S3ZLDZCcaoUon2oRQUMsRga5XUWBaHzVu6d7PUeRjxiKbKS8uNN0py9AKyER166hfwPfMRRiwSgG%2BK3HFmiL3bEbkCYQRy3NakXTHKKJC6qRu0BuV0NzCTP878CQPXW4%2B8PX&X-Amz-Signature=1b550536aee628658d7d4748b2d651f2280d0b3bfd17bb93412185e6e7059006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
