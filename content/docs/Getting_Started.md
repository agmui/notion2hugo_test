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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2WX5ZB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS7aj9mFxpnTlLq0d5fWM6hvSAKIGPyE7p8otw2%2FX09AiB%2BS559Y2m4ITNljfcKkkN6Nmxpb0jSJc%2B2ra5%2FOuBH0SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2abRRRB1aoX7RmNKKtwDUtSp%2BJsRWV4llf9RXuw31UtBTAWLDV7T3TRYpiTTK1lnvH8Q2FFNPn%2FtEtod5YPybztxWmRdyDmzSbvRow6NyGCkAYHB958V4%2F4D0s4cfIFH2izji9JPb5oBM5bsJ%2FJ3iIAJ5OSKagxHLReu%2BfbWOhRssXPQkZFg8%2F%2BA1wVTMtQe1MdZEZBGzFR%2B1jyacWLF6yFB89dOpXl%2BnLRlVwjrLJZhN9vtb8s9fJytldzEcxU7gngXO39NLE00czAnj9atSIEEK50ufHjhYpF9L%2FeGZ%2Bhb60yC7C%2FyPVes18d1jAkZ%2BeqI0zW2BAF8608xWwMps7SYPY5zvQBUNb1uSbm7FuwuaP%2Fe6t3o9lC%2FldILQZY6fIVA1IgC0vc5InsEBwwUuwRASKDByZlDIQDF9MfAyLsq4E842ZDmfgP7zZ3byCGhJprQG%2B6ZHJEPNWz04heqn2I2xuEEFFONh7pVxBNuPQ2Ws143LA7I31SR3b9Pk77ZUwynmEY27ZgBWKi2ZumOinVzIL5%2F%2BPoddBxQLJ4ZyipU0saPZ1z%2BiAiI0n1ICSaYu9sXsp75N3Uf%2Bfz5nEXktS426GrkMtpiSdDVBcaiiKNkbfK4c4w3TvBeq%2BwTA1cBSfgEpFHxPiKYTzAwp8qhwgY6pgG1PXAzG%2BAM1pvYYtBROYJ5YbqNE8URPo3xjJmoqPiBgV%2FvcpMtm1%2B3WtLZRSqMNjiBYj44rvIh7I2B4fZUr1jGsfN63qByFqryvNVAUWMgUcn9%2BLKdZ9zWK0946XGH9cmfH1pzP97uoZPGK2ySIN66c2Fpjpnl0fdANUP2uRbrF93kqNOszt3fRllM%2BDXG7PaV1yAY7eWDK6sLCe9U%2BKm03S59Eup5&X-Amz-Signature=a4949dc3f4937045592ea0394e5b2a9673b7d3d2151bfb566e99d76ec2e891fd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2WX5ZB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS7aj9mFxpnTlLq0d5fWM6hvSAKIGPyE7p8otw2%2FX09AiB%2BS559Y2m4ITNljfcKkkN6Nmxpb0jSJc%2B2ra5%2FOuBH0SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2abRRRB1aoX7RmNKKtwDUtSp%2BJsRWV4llf9RXuw31UtBTAWLDV7T3TRYpiTTK1lnvH8Q2FFNPn%2FtEtod5YPybztxWmRdyDmzSbvRow6NyGCkAYHB958V4%2F4D0s4cfIFH2izji9JPb5oBM5bsJ%2FJ3iIAJ5OSKagxHLReu%2BfbWOhRssXPQkZFg8%2F%2BA1wVTMtQe1MdZEZBGzFR%2B1jyacWLF6yFB89dOpXl%2BnLRlVwjrLJZhN9vtb8s9fJytldzEcxU7gngXO39NLE00czAnj9atSIEEK50ufHjhYpF9L%2FeGZ%2Bhb60yC7C%2FyPVes18d1jAkZ%2BeqI0zW2BAF8608xWwMps7SYPY5zvQBUNb1uSbm7FuwuaP%2Fe6t3o9lC%2FldILQZY6fIVA1IgC0vc5InsEBwwUuwRASKDByZlDIQDF9MfAyLsq4E842ZDmfgP7zZ3byCGhJprQG%2B6ZHJEPNWz04heqn2I2xuEEFFONh7pVxBNuPQ2Ws143LA7I31SR3b9Pk77ZUwynmEY27ZgBWKi2ZumOinVzIL5%2F%2BPoddBxQLJ4ZyipU0saPZ1z%2BiAiI0n1ICSaYu9sXsp75N3Uf%2Bfz5nEXktS426GrkMtpiSdDVBcaiiKNkbfK4c4w3TvBeq%2BwTA1cBSfgEpFHxPiKYTzAwp8qhwgY6pgG1PXAzG%2BAM1pvYYtBROYJ5YbqNE8URPo3xjJmoqPiBgV%2FvcpMtm1%2B3WtLZRSqMNjiBYj44rvIh7I2B4fZUr1jGsfN63qByFqryvNVAUWMgUcn9%2BLKdZ9zWK0946XGH9cmfH1pzP97uoZPGK2ySIN66c2Fpjpnl0fdANUP2uRbrF93kqNOszt3fRllM%2BDXG7PaV1yAY7eWDK6sLCe9U%2BKm03S59Eup5&X-Amz-Signature=060dbd880e7041e34e3e1438a60dc96e93f7dee8ef532f6319993c851bcf057f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2WX5ZB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS7aj9mFxpnTlLq0d5fWM6hvSAKIGPyE7p8otw2%2FX09AiB%2BS559Y2m4ITNljfcKkkN6Nmxpb0jSJc%2B2ra5%2FOuBH0SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2abRRRB1aoX7RmNKKtwDUtSp%2BJsRWV4llf9RXuw31UtBTAWLDV7T3TRYpiTTK1lnvH8Q2FFNPn%2FtEtod5YPybztxWmRdyDmzSbvRow6NyGCkAYHB958V4%2F4D0s4cfIFH2izji9JPb5oBM5bsJ%2FJ3iIAJ5OSKagxHLReu%2BfbWOhRssXPQkZFg8%2F%2BA1wVTMtQe1MdZEZBGzFR%2B1jyacWLF6yFB89dOpXl%2BnLRlVwjrLJZhN9vtb8s9fJytldzEcxU7gngXO39NLE00czAnj9atSIEEK50ufHjhYpF9L%2FeGZ%2Bhb60yC7C%2FyPVes18d1jAkZ%2BeqI0zW2BAF8608xWwMps7SYPY5zvQBUNb1uSbm7FuwuaP%2Fe6t3o9lC%2FldILQZY6fIVA1IgC0vc5InsEBwwUuwRASKDByZlDIQDF9MfAyLsq4E842ZDmfgP7zZ3byCGhJprQG%2B6ZHJEPNWz04heqn2I2xuEEFFONh7pVxBNuPQ2Ws143LA7I31SR3b9Pk77ZUwynmEY27ZgBWKi2ZumOinVzIL5%2F%2BPoddBxQLJ4ZyipU0saPZ1z%2BiAiI0n1ICSaYu9sXsp75N3Uf%2Bfz5nEXktS426GrkMtpiSdDVBcaiiKNkbfK4c4w3TvBeq%2BwTA1cBSfgEpFHxPiKYTzAwp8qhwgY6pgG1PXAzG%2BAM1pvYYtBROYJ5YbqNE8URPo3xjJmoqPiBgV%2FvcpMtm1%2B3WtLZRSqMNjiBYj44rvIh7I2B4fZUr1jGsfN63qByFqryvNVAUWMgUcn9%2BLKdZ9zWK0946XGH9cmfH1pzP97uoZPGK2ySIN66c2Fpjpnl0fdANUP2uRbrF93kqNOszt3fRllM%2BDXG7PaV1yAY7eWDK6sLCe9U%2BKm03S59Eup5&X-Amz-Signature=c86bf5c70ddb2eeb0ee3fbdf5dbfd15e1ea6aaa65d2bccf753df26f234a539cb&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTFQVCZX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAWBIvkc78%2FcGk4N1akNT%2BQVzDYdlv6Wxo3TSbgl7X0AiEAkE0IpAa8ma9xwvtaFdk8CGdoXFPfz8kpGnDlnmj6vIMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNntW64E6Tg6aDWH5ircA8lyW8yxSuLB07AmZOgXys626HCfpkDSSu%2BB0ZfRxNwatyn9n8sAeoPWh5jNAjBo7PZ5NRG7aVtny7mMeS0TX0udYQnrCF583r0mXmYj%2Bd7%2BeFghPVEpT4fNnlR%2BIEWjmBE%2F9r780tANsL92pDn4ZUBXErzWfxS%2Fij9HVJHndR6ceeuFQdLV0mllG45%2FqjlqWoE9QKL4eiZ27GJAY0AJS%2BMjWoUcobdjwxNtSVbQI%2ByshiWOrEItSVd4CILuPUkDF%2FJnm%2BiNn6arERRN%2BPibBPb3T%2BkSVGTEwj6nlKhR3741Yco8MfYYujD7FB9kTQecIVaoNyoFI9zhF1LE2QTZjlAC4zMEc%2F8voogJdlOxdyHcOZd9bHieEco%2FjfnBT3JNbdePBeegNP6VJtZqwz983M1XkrRUQ5Dp3oWnyy6gCn3qJUVxJ5%2FtP2qprzFGcLg%2FOggb9kg3scREoUSKagKuqA4jRXsYqX8sW3enYzaeDsIe8SZSQfHiTHQyoQEpuSJ3lIqrWseQCna1WIBHeccW2diCpJWLyecEWG3Vn8NXVr%2Fgou7BmVzaesHRoj4GdOVQVofXbxh2%2F5lxjEfnma6LCrufF33WPsxmwuM8epR6xkO8epn12BDN%2Bu0yTS8YMPXKocIGOqUBvW%2BNRSGTK54xFy7WmeVDHgLRgc%2FxUwD5NyvPH3OK%2FSB3lnP2gb%2FIUDNGLPyRqZ4QfyRl05IAvlxNJx8CWWqYiFMkUfCnDDtHlXEUsKm0DgyNhGeDd7oYqkpAFTKDHZPVuezd3gAnHaaUz5DxdUO2DHzb%2BG87qDJJIqodqcxnO3hdp56kiSDGNPrZH%2FEae4Qf%2BVPO0NQk8fKrB7SDhDAHCXjGq%2BU2&X-Amz-Signature=51717cc7a759d06a469a98131f893817704864e4ec8ba15c6eaa193cc785af3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXA5NUEY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtlvInEq6kEfAtPt%2FKB815GyxHr5zlnELi0dqjJ54U0AiA9tpyoBcRlSeaarad30sXIzPEDKDBeLLkC5ZSZDx1iySqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB3aJKuFU9HCYOyUoKtwD%2FyVHNzvovj3Rw%2FY5GkngAQCtGFpMAJcxXDHbVOPUu%2BAL%2Fs4Cbo8QgPRKG%2BuJlsJS4%2BucEQm0BLaYw%2FyFLHM3k%2Bx1sBH1EkipYYy78%2B16NVe7S3BwD1Mo3tRzjSkMAVOmKcZvvgt%2BMASRB3iKv9HhE0Jnb7WzArd4GfFDnKS7BMQWiTMx8DKzVfSyMjq1Z7DM5Eo44VVOgXs4bNg3OtXRPWmztcVGHPCwObBWEYJR9AVx3%2FxNPz6xfMCvKQHHpTSxqSJRfo6SNYzK2YtiJxvnIEzOeiqcF4037lfdxbRH1h%2FskWOjEmUz13pAEu9OxyBbdxj3QQnQyFkFT9fXykika0pRIpkEMPb9s3RPidoipa15AP25hAZpIM5ns7PTsA9KCFABDZihiWUosWXdWVv1yFTAhqNSPema4J3jcgnEZaTZu4lcrTudO1vlglptcg8czqR2auTHgHC7nn9fRpVNtLdPtU0rOh9Gu5Qys0NxoPCpcJtuzUKuAp0uZwGM0Jokup91NEj1H9kM56jDm6YbkY4G1qQ1OlXSXADwJKfGTxqpim7vsaTriKrOxCh3DUIgwvNa7EMHLecxktVe3v19%2F%2FpKSa4FaMHo5ZAR8%2BYVWRHmFKuRkl%2FdrqYu3N0wgcuhwgY6pgECdYrlGcs85HGvp%2BbgOsPEJnnXsiIbopDqo3C8Mlw%2By%2Fkf1K6S4aVKv%2FWRFxpnnpikAbnEqQIDXZhcxIeYZQ%2FMNpqaCtUusdb7LEgmpYQ%2FqXo2yTeYfCpeOXo4xaBa4G6WJbrXvufVmY%2Bo9vO2gy3736zlSPr0g2acFOf3OwRDH2Mlt%2Bow36JpKXD7ajp28RSXTIsRKe5kwid0q1JM1PgjDFdxE8Lq&X-Amz-Signature=5dd980fdffa52f441e0c85b047e43e6791997db9fece6eb1940240ec6940be42&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ2WX5ZB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS7aj9mFxpnTlLq0d5fWM6hvSAKIGPyE7p8otw2%2FX09AiB%2BS559Y2m4ITNljfcKkkN6Nmxpb0jSJc%2B2ra5%2FOuBH0SqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2abRRRB1aoX7RmNKKtwDUtSp%2BJsRWV4llf9RXuw31UtBTAWLDV7T3TRYpiTTK1lnvH8Q2FFNPn%2FtEtod5YPybztxWmRdyDmzSbvRow6NyGCkAYHB958V4%2F4D0s4cfIFH2izji9JPb5oBM5bsJ%2FJ3iIAJ5OSKagxHLReu%2BfbWOhRssXPQkZFg8%2F%2BA1wVTMtQe1MdZEZBGzFR%2B1jyacWLF6yFB89dOpXl%2BnLRlVwjrLJZhN9vtb8s9fJytldzEcxU7gngXO39NLE00czAnj9atSIEEK50ufHjhYpF9L%2FeGZ%2Bhb60yC7C%2FyPVes18d1jAkZ%2BeqI0zW2BAF8608xWwMps7SYPY5zvQBUNb1uSbm7FuwuaP%2Fe6t3o9lC%2FldILQZY6fIVA1IgC0vc5InsEBwwUuwRASKDByZlDIQDF9MfAyLsq4E842ZDmfgP7zZ3byCGhJprQG%2B6ZHJEPNWz04heqn2I2xuEEFFONh7pVxBNuPQ2Ws143LA7I31SR3b9Pk77ZUwynmEY27ZgBWKi2ZumOinVzIL5%2F%2BPoddBxQLJ4ZyipU0saPZ1z%2BiAiI0n1ICSaYu9sXsp75N3Uf%2Bfz5nEXktS426GrkMtpiSdDVBcaiiKNkbfK4c4w3TvBeq%2BwTA1cBSfgEpFHxPiKYTzAwp8qhwgY6pgG1PXAzG%2BAM1pvYYtBROYJ5YbqNE8URPo3xjJmoqPiBgV%2FvcpMtm1%2B3WtLZRSqMNjiBYj44rvIh7I2B4fZUr1jGsfN63qByFqryvNVAUWMgUcn9%2BLKdZ9zWK0946XGH9cmfH1pzP97uoZPGK2ySIN66c2Fpjpnl0fdANUP2uRbrF93kqNOszt3fRllM%2BDXG7PaV1yAY7eWDK6sLCe9U%2BKm03S59Eup5&X-Amz-Signature=7c88d5496173e12dc3bd62f47d91107b655db70ed85b7941edb4728c0481da17&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
