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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBOKTIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAMJMq3RP6Zc0gNJ0wAiNa0a4s4d0L5QorHKMPLOflPIAiEA8uoovXLiyHaYitriJWaHRfH5Zlz7OIMc1O6490LoCFEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNmIv9sbbGD7P3PQHSrcA8qG6xhB54cViTvZwiCBxPufhWkudK%2BK9E%2BF9c088FPeNSjFbaeLndbit42M5LmcBDPYKIh7%2FezmPUl1wsqtiAVh%2FTIRm62gd2bQfI5gyPd5Oub4lC6UJr2y9l3B2iJ85f2N2m9Jkxe%2F6blEDLJIJ9wh6tl6aKzaCOJ81koJNsNHJJ2TpRl2prow1aSBETLAkFsCwG2QQ3UmzaN90j%2Bbu6Zr6fgm4g2G0LoagnyM3bjIZohtpIoczoM4pDoG5779crY4giQv2qDSA9pH%2Fch7yBZDTgSbve9xoV27ZoJvc0BAYevq7aigqw27XWRpZtzIARY2Ez9Qim4cyPKJK%2BmXdj7eYKc0HnDKtGCCjArvU5WafZN123LI2rkPbjiO7qDpetWHCYHcWfhk9hbPdyJvqant4f8jMgLXnPVgm35rgK5dgGPcbjEPAB%2FI%2B0B0RBluHnP0%2F%2FVAjU5qlAnEa1r%2FAxX4wmJETRpjpMLZsrAzyV3bXVSrwn2lRN9EWVRx6LYkCgf23WJheZfM93OK0GgVIhoOp%2BrXU0Am4h8zNKogtiNdo6i4C4Y7Oii6YEKm80D95P9wQ7zLXBbs264RergFZVc5Cwuy%2FjhVZuBAa9XOL9ivMK46kXC1lIo5q%2BESMLTBk8QGOqUBnFjKMnF7LLNona9G3Sj6th0mik2ga4DAqyQ1%2FzK8sAVjfADe06wxBFmtMCW1Vx4UuhTtGSG8UEjWGuYdVJ35ZfUascOb2%2FSgxA8w4D8G8OyURC2jiODpu8cteFvrycBdrZDoKfR%2FiaRaJcRRlxzT97jv%2FIEkbyt%2BPgKSZ4Mdqt7YF%2BRK9O02mWolnZtwd6oBJa6dsqrd2PpjYhOeMaWLf9GB2%2BeP&X-Amz-Signature=d961bd02d3e631d06b1d87a8553a38d044c4baa6fbf9c49d3c007a11bc54bf2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBOKTIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAMJMq3RP6Zc0gNJ0wAiNa0a4s4d0L5QorHKMPLOflPIAiEA8uoovXLiyHaYitriJWaHRfH5Zlz7OIMc1O6490LoCFEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNmIv9sbbGD7P3PQHSrcA8qG6xhB54cViTvZwiCBxPufhWkudK%2BK9E%2BF9c088FPeNSjFbaeLndbit42M5LmcBDPYKIh7%2FezmPUl1wsqtiAVh%2FTIRm62gd2bQfI5gyPd5Oub4lC6UJr2y9l3B2iJ85f2N2m9Jkxe%2F6blEDLJIJ9wh6tl6aKzaCOJ81koJNsNHJJ2TpRl2prow1aSBETLAkFsCwG2QQ3UmzaN90j%2Bbu6Zr6fgm4g2G0LoagnyM3bjIZohtpIoczoM4pDoG5779crY4giQv2qDSA9pH%2Fch7yBZDTgSbve9xoV27ZoJvc0BAYevq7aigqw27XWRpZtzIARY2Ez9Qim4cyPKJK%2BmXdj7eYKc0HnDKtGCCjArvU5WafZN123LI2rkPbjiO7qDpetWHCYHcWfhk9hbPdyJvqant4f8jMgLXnPVgm35rgK5dgGPcbjEPAB%2FI%2B0B0RBluHnP0%2F%2FVAjU5qlAnEa1r%2FAxX4wmJETRpjpMLZsrAzyV3bXVSrwn2lRN9EWVRx6LYkCgf23WJheZfM93OK0GgVIhoOp%2BrXU0Am4h8zNKogtiNdo6i4C4Y7Oii6YEKm80D95P9wQ7zLXBbs264RergFZVc5Cwuy%2FjhVZuBAa9XOL9ivMK46kXC1lIo5q%2BESMLTBk8QGOqUBnFjKMnF7LLNona9G3Sj6th0mik2ga4DAqyQ1%2FzK8sAVjfADe06wxBFmtMCW1Vx4UuhTtGSG8UEjWGuYdVJ35ZfUascOb2%2FSgxA8w4D8G8OyURC2jiODpu8cteFvrycBdrZDoKfR%2FiaRaJcRRlxzT97jv%2FIEkbyt%2BPgKSZ4Mdqt7YF%2BRK9O02mWolnZtwd6oBJa6dsqrd2PpjYhOeMaWLf9GB2%2BeP&X-Amz-Signature=a3944bd6175ef4c9d134033598d07c7c6f4e35356b5d2338fa3b49ee09f5626d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBOKTIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAMJMq3RP6Zc0gNJ0wAiNa0a4s4d0L5QorHKMPLOflPIAiEA8uoovXLiyHaYitriJWaHRfH5Zlz7OIMc1O6490LoCFEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNmIv9sbbGD7P3PQHSrcA8qG6xhB54cViTvZwiCBxPufhWkudK%2BK9E%2BF9c088FPeNSjFbaeLndbit42M5LmcBDPYKIh7%2FezmPUl1wsqtiAVh%2FTIRm62gd2bQfI5gyPd5Oub4lC6UJr2y9l3B2iJ85f2N2m9Jkxe%2F6blEDLJIJ9wh6tl6aKzaCOJ81koJNsNHJJ2TpRl2prow1aSBETLAkFsCwG2QQ3UmzaN90j%2Bbu6Zr6fgm4g2G0LoagnyM3bjIZohtpIoczoM4pDoG5779crY4giQv2qDSA9pH%2Fch7yBZDTgSbve9xoV27ZoJvc0BAYevq7aigqw27XWRpZtzIARY2Ez9Qim4cyPKJK%2BmXdj7eYKc0HnDKtGCCjArvU5WafZN123LI2rkPbjiO7qDpetWHCYHcWfhk9hbPdyJvqant4f8jMgLXnPVgm35rgK5dgGPcbjEPAB%2FI%2B0B0RBluHnP0%2F%2FVAjU5qlAnEa1r%2FAxX4wmJETRpjpMLZsrAzyV3bXVSrwn2lRN9EWVRx6LYkCgf23WJheZfM93OK0GgVIhoOp%2BrXU0Am4h8zNKogtiNdo6i4C4Y7Oii6YEKm80D95P9wQ7zLXBbs264RergFZVc5Cwuy%2FjhVZuBAa9XOL9ivMK46kXC1lIo5q%2BESMLTBk8QGOqUBnFjKMnF7LLNona9G3Sj6th0mik2ga4DAqyQ1%2FzK8sAVjfADe06wxBFmtMCW1Vx4UuhTtGSG8UEjWGuYdVJ35ZfUascOb2%2FSgxA8w4D8G8OyURC2jiODpu8cteFvrycBdrZDoKfR%2FiaRaJcRRlxzT97jv%2FIEkbyt%2BPgKSZ4Mdqt7YF%2BRK9O02mWolnZtwd6oBJa6dsqrd2PpjYhOeMaWLf9GB2%2BeP&X-Amz-Signature=455879accc7b2730f1b3c20ed0dc22b92dabd2258bcbf9f517c206d27d994fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JR424I%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDwmobTJpmOn83Lh0XgN7j%2FEdzvVCNEPK3jz9g4iA7VrQIhAPkHacun1z%2Bqt9pCgRRe0qkiIiJq%2B6fbNKSNy6XmqmeMKv8DCF8QABoMNjM3NDIzMTgzODA1IgwU3gDNXkVxPdu8HtIq3ANJXbYYHK48X12b5MYbCNlHiXN8HkHYNuL8XwbOP8UJe1ppYj%2FoqXcpOAAoTTxzFGfG78g0GpDEnzhE7WWh9VgEXWvYNJueeKVfMcxgn5Q8Bi7gkgHZkVUV%2BIUSCBIEsVleaSTR8PvZt71%2BOuVuT8q9JMJnoUKBhGP55d9scwru3SfA7kxCMfm6dr7RNQ2zXv8H9bP7CraCeKWFRV1vsCaHVXPYIpxU6%2FQfAT1pzLchJ3u6thJyu8dM7ztZRfm5vYmuRf1BHXCFLCBpNv5hRBmttG%2BNwsC41AcTEpuCtMqL6TuwK12dm1H0KI%2Bn7NwUPh7eXzidatZbW4Bqt5AO4TuZDSwbrkctnZ1WyZ5z0%2BmhEygoIgaQCic8RncImZPQFnnsET%2BpRqPwRJJ%2FVTj6agf6TuFfxyVciYApiHs9N%2F1Y8g8zsYip1N%2F57%2BL6wmoYf34RNrk1pHGtm3hsrCG2Tb97BxRRBC3lqZ%2BKO0fjcrerawpkzhqIt5xfM1VBpXPMGu6JvV1HzIB6xZ4C0KxRNzMsOKuFWDud%2B055paeLuZl26LSAsapsevcviBStqqSvP%2FuC6yb5nJ4SMCc3vAbTR7GHjh141DiJnL79zPI1ms9HORSmrUt3vQmkElcJaDDywZPEBjqkAfOFvNChpuo8ejWLuXnb6LOsQhp%2FT1ELE5kx%2FkAFbXxehKgwyBLiSXhIROqokGuEGg8UYagET8pEzyA1LrcDg6Gl0XI%2FUNsxICLp9GnAcC0NebrBqONifxzgsUT1Bmp24pY3MIeYd1vmP12P%2F39gnVgd%2Bdczrv9RjecF5QPbpb9X0QuoarXC4LgyFWZ2uGY%2FQz7pnn6bUZyey2iA1mQjUuk6VqKl&X-Amz-Signature=af4a6ebad7b536b5f14072066aa91c76b7946f86c68258451a121aeefe93179e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFWNZBGS%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDStro8tBqJsAcStEeEtDFxoZdkwFX1VLU9NLvRL0TfRwIhANDvWHGoIxov8C4%2FhCnp0P%2BC2zKY6DCO2IUIKJEJwon2Kv8DCF8QABoMNjM3NDIzMTgzODA1Igz9dJUuY9f43nNtE7Mq3APY2%2FcnWKOG2MfHxsA4wNzgkrBhaNxzFC7MvZ%2Bk4wOhQeoIZ1d65Tn4OgeMjwljZVSfDAapWBEW1GAK9toG6DJXevxIUIIrmXPnIoHrOZmUB5rMmHrDmfqgQRm2BBRNLu7o3nK%2B88SRIis3kptkSnWX4E7XSYCURNGYUD6u6GOMZooRkL18rjAYoNJKJ%2FEaIjauQnOnQSBCpW4AMcTW4r1pkauvfwwuR4UO%2BnU3l1sysSCG0GNsZ6CLsdCc76tdKu8AZh7lYU3TBO7WBw8FQhbc0TUqsy42Qqp0JHEfZHco8Os2pFdc%2BNOS30%2BMAsugI4Azb360k4h%2BTTxy5hO2p2gvXdxD4kMO8m8NHZjNpyolYx4W3y87tDl%2BfDaOQBuR8RM05lW4f6VNTJA5Ubzax6BrCYBSxNO9mafPrcrdjLYhr1jtdSAeXIRIa%2Frdud7rtvmF6JLg8rzZHP2Xymuq4NdcW4%2FGAPn0hIdROHIx%2B42qzSBEw8JGX05Rxi0H42OqRqFfZ4zFnjtQy422ENizkofm6hRP6BwnfO2yiRVAtoY%2BQ2IpUyl1dCy857ORJZDh0Mu88AQy3KBGQKydIIF%2BQu1CJv7uOG8%2Bbo4OdvoDFq5qqXzWxiYVxnG2I24TsDCZwZPEBjqkAbdGkIjrSO%2F3AfMQ9maJeYvAfVjtpfFo5nSyx46E5%2BQ7eFAFZARNvlmYKv20kYKUYGtM6j5q9Q2M6tL5V5OFsSCp%2FOlm9HagXtoN4PniwmiWHKjaLbYQm3ad%2BuXdCDS2Ecov3H58N9xtAz4HhFGmH%2Fd7%2BT84umGBYeWd50AwpSff8sQ7SPyY1WicnI8UlLytH1T8jocJAEsR%2F1EAgr8kWssJfeaP&X-Amz-Signature=b250d78fac4cd3107f6b97459c377d5871dcda92414b32dacdc8d2847586a52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWBOKTIU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAMJMq3RP6Zc0gNJ0wAiNa0a4s4d0L5QorHKMPLOflPIAiEA8uoovXLiyHaYitriJWaHRfH5Zlz7OIMc1O6490LoCFEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNmIv9sbbGD7P3PQHSrcA8qG6xhB54cViTvZwiCBxPufhWkudK%2BK9E%2BF9c088FPeNSjFbaeLndbit42M5LmcBDPYKIh7%2FezmPUl1wsqtiAVh%2FTIRm62gd2bQfI5gyPd5Oub4lC6UJr2y9l3B2iJ85f2N2m9Jkxe%2F6blEDLJIJ9wh6tl6aKzaCOJ81koJNsNHJJ2TpRl2prow1aSBETLAkFsCwG2QQ3UmzaN90j%2Bbu6Zr6fgm4g2G0LoagnyM3bjIZohtpIoczoM4pDoG5779crY4giQv2qDSA9pH%2Fch7yBZDTgSbve9xoV27ZoJvc0BAYevq7aigqw27XWRpZtzIARY2Ez9Qim4cyPKJK%2BmXdj7eYKc0HnDKtGCCjArvU5WafZN123LI2rkPbjiO7qDpetWHCYHcWfhk9hbPdyJvqant4f8jMgLXnPVgm35rgK5dgGPcbjEPAB%2FI%2B0B0RBluHnP0%2F%2FVAjU5qlAnEa1r%2FAxX4wmJETRpjpMLZsrAzyV3bXVSrwn2lRN9EWVRx6LYkCgf23WJheZfM93OK0GgVIhoOp%2BrXU0Am4h8zNKogtiNdo6i4C4Y7Oii6YEKm80D95P9wQ7zLXBbs264RergFZVc5Cwuy%2FjhVZuBAa9XOL9ivMK46kXC1lIo5q%2BESMLTBk8QGOqUBnFjKMnF7LLNona9G3Sj6th0mik2ga4DAqyQ1%2FzK8sAVjfADe06wxBFmtMCW1Vx4UuhTtGSG8UEjWGuYdVJ35ZfUascOb2%2FSgxA8w4D8G8OyURC2jiODpu8cteFvrycBdrZDoKfR%2FiaRaJcRRlxzT97jv%2FIEkbyt%2BPgKSZ4Mdqt7YF%2BRK9O02mWolnZtwd6oBJa6dsqrd2PpjYhOeMaWLf9GB2%2BeP&X-Amz-Signature=cdf4673c2e9d38eb613cb713a2c0bce636acacf884aa6c7fc842a85348c5400d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
