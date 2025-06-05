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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QUL4X7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD58%2FlVEC0BICvEe4B97SwJyEb%2Bgn2G1hQ0vyyaC8AO7QIgGG3JyWMd8S%2BxVhzjcyaJCaEjnX8oFqAsz347RCLgGREq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIjVHPE%2BVYQpv8o85CrcAzi5VZPEAVpPtgxFa880M7HUgVCaIt4vliFpSmhuhB3eGK2btAceuHPVUqSK28z7%2BJwePbLf8J7D7%2FZ%2FQ5UHcxsrywUfkHjZl1%2FHFOvMriYo2hoDADltcMWBOb0lmQzGKEofr7OUMZhQTEu%2FXLfuhogvD8CfZam2DXFvLfxciy5m0DmL8u1pmZcfTY9ysQ1patP%2FDWzg1LD0OY7ZmQXHul4mm8ehKJ9QDcMvvlc353ISKSJeiKQnuG%2ByCXZR52l%2FAKbTikuDPWKdgrUSZJDc5q%2FTwH4rtCk%2F6HBspYvcytMSXjuwgVXeJTZAUnMyKt1xD3YOLVQOljhoBSm3LwDtm935fiw5LE4tP7hk%2FxqJPNT9%2F3LyaN2bArokdc%2FKJLthTQuWteUuoq2vwrA6XQE9x7gxmrbQJ9fwNEbiYK6yoYFsIW4UB1jzPWhQPH6V1H8iexyWVSb%2BbEcJGLEKO6ysN0%2BRomMKkz7%2FRxDV7VF8QGlB0QHTdmU1phwZ1ypC3xpeJsXgntd50aPyZTw9CmLwVWTp%2BvXKJlz8sbW200a3aiperEbQNFl4Pff0JBAinr2N%2FL1muPVwd%2BJqMFc1nR%2F4WrfzekAeWiMk9FicZ9Oky2bvZiR1zWpoxkAtDWiZMLzJg8IGOqUBTodSrlDzxkOYLRGE8%2BX0ZHB1A9iFhzOL1jPjjJ8GYDElbdcwBVPOyq8GKH5Gw9k%2FotvYRtYhissovN5nv1cL17KRAD%2Fd7BByuRuFlh9ysjaLUSLP5J4sdKAolx3DQzhq8oqHTSFZhnqz3wcgne0orRDUURUNqe5aSgL50GLkfISq2JiFPunYR%2Fe8Nb8122Vhn9E4qjOWxpKvkCXbCcbBEMPCvF3V&X-Amz-Signature=03296a739f4a5202fcfb88da0688742f22cead286698d6bd76d58651d2ba4df2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QUL4X7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD58%2FlVEC0BICvEe4B97SwJyEb%2Bgn2G1hQ0vyyaC8AO7QIgGG3JyWMd8S%2BxVhzjcyaJCaEjnX8oFqAsz347RCLgGREq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIjVHPE%2BVYQpv8o85CrcAzi5VZPEAVpPtgxFa880M7HUgVCaIt4vliFpSmhuhB3eGK2btAceuHPVUqSK28z7%2BJwePbLf8J7D7%2FZ%2FQ5UHcxsrywUfkHjZl1%2FHFOvMriYo2hoDADltcMWBOb0lmQzGKEofr7OUMZhQTEu%2FXLfuhogvD8CfZam2DXFvLfxciy5m0DmL8u1pmZcfTY9ysQ1patP%2FDWzg1LD0OY7ZmQXHul4mm8ehKJ9QDcMvvlc353ISKSJeiKQnuG%2ByCXZR52l%2FAKbTikuDPWKdgrUSZJDc5q%2FTwH4rtCk%2F6HBspYvcytMSXjuwgVXeJTZAUnMyKt1xD3YOLVQOljhoBSm3LwDtm935fiw5LE4tP7hk%2FxqJPNT9%2F3LyaN2bArokdc%2FKJLthTQuWteUuoq2vwrA6XQE9x7gxmrbQJ9fwNEbiYK6yoYFsIW4UB1jzPWhQPH6V1H8iexyWVSb%2BbEcJGLEKO6ysN0%2BRomMKkz7%2FRxDV7VF8QGlB0QHTdmU1phwZ1ypC3xpeJsXgntd50aPyZTw9CmLwVWTp%2BvXKJlz8sbW200a3aiperEbQNFl4Pff0JBAinr2N%2FL1muPVwd%2BJqMFc1nR%2F4WrfzekAeWiMk9FicZ9Oky2bvZiR1zWpoxkAtDWiZMLzJg8IGOqUBTodSrlDzxkOYLRGE8%2BX0ZHB1A9iFhzOL1jPjjJ8GYDElbdcwBVPOyq8GKH5Gw9k%2FotvYRtYhissovN5nv1cL17KRAD%2Fd7BByuRuFlh9ysjaLUSLP5J4sdKAolx3DQzhq8oqHTSFZhnqz3wcgne0orRDUURUNqe5aSgL50GLkfISq2JiFPunYR%2Fe8Nb8122Vhn9E4qjOWxpKvkCXbCcbBEMPCvF3V&X-Amz-Signature=648957ad94b776d2c304e9273a269ff3cbacf412ab521c60ad46f01f1622188c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QUL4X7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD58%2FlVEC0BICvEe4B97SwJyEb%2Bgn2G1hQ0vyyaC8AO7QIgGG3JyWMd8S%2BxVhzjcyaJCaEjnX8oFqAsz347RCLgGREq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIjVHPE%2BVYQpv8o85CrcAzi5VZPEAVpPtgxFa880M7HUgVCaIt4vliFpSmhuhB3eGK2btAceuHPVUqSK28z7%2BJwePbLf8J7D7%2FZ%2FQ5UHcxsrywUfkHjZl1%2FHFOvMriYo2hoDADltcMWBOb0lmQzGKEofr7OUMZhQTEu%2FXLfuhogvD8CfZam2DXFvLfxciy5m0DmL8u1pmZcfTY9ysQ1patP%2FDWzg1LD0OY7ZmQXHul4mm8ehKJ9QDcMvvlc353ISKSJeiKQnuG%2ByCXZR52l%2FAKbTikuDPWKdgrUSZJDc5q%2FTwH4rtCk%2F6HBspYvcytMSXjuwgVXeJTZAUnMyKt1xD3YOLVQOljhoBSm3LwDtm935fiw5LE4tP7hk%2FxqJPNT9%2F3LyaN2bArokdc%2FKJLthTQuWteUuoq2vwrA6XQE9x7gxmrbQJ9fwNEbiYK6yoYFsIW4UB1jzPWhQPH6V1H8iexyWVSb%2BbEcJGLEKO6ysN0%2BRomMKkz7%2FRxDV7VF8QGlB0QHTdmU1phwZ1ypC3xpeJsXgntd50aPyZTw9CmLwVWTp%2BvXKJlz8sbW200a3aiperEbQNFl4Pff0JBAinr2N%2FL1muPVwd%2BJqMFc1nR%2F4WrfzekAeWiMk9FicZ9Oky2bvZiR1zWpoxkAtDWiZMLzJg8IGOqUBTodSrlDzxkOYLRGE8%2BX0ZHB1A9iFhzOL1jPjjJ8GYDElbdcwBVPOyq8GKH5Gw9k%2FotvYRtYhissovN5nv1cL17KRAD%2Fd7BByuRuFlh9ysjaLUSLP5J4sdKAolx3DQzhq8oqHTSFZhnqz3wcgne0orRDUURUNqe5aSgL50GLkfISq2JiFPunYR%2Fe8Nb8122Vhn9E4qjOWxpKvkCXbCcbBEMPCvF3V&X-Amz-Signature=499959ca4e5549dac5026cffd8cbb4c1694b86a27038d19ae2df772138b26777&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUFG4OF%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCWc4bJaLqLsgXFWvNq4tnc1W7xQ2gfvCtOZonfpA5REwIgO8vaTaGuTNLVINatfqsJu6h5sVI5vjdkipjZHNwhbfkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGzi316LNL8yyOU1pCrcA0iHHWlNnyt4gEya6bUShXAqHfN5VCvsmTGUMvtqzoRbDParY7XvoLUoUjcg14wk8UVKUG0uNv7sjnpS2HVfn%2FnPxocqjeDhWFJDEXLIYNhuOF7lKZ1Csk1o991JPOLCEfDDiYD5IxnnnD%2FRDt15LRUzVBYUDqic1bmjsx2thRMconWLajwf1E8jciN0JPWB31rTFz8DiQyOP8AzmIQ1%2FfiWP47rqHNnc3kOmW81gh36ztJQJ9uSBHxEuZeIIkvxYDqXFlUEeD9WfyV%2FrfDiz8dQK4euIl9MFp2xhUQr33uBJPks3vyB2XUVBWGqPfNu9gVnecI2Fz3RCe%2BoV3Kz2A7T9VHNHQUsdOln%2BhRxXlZiZrbBU%2B%2BZtNy%2FiSUSAdJ1o8zubnLC7X04Z1OV8klSe4uVTcApGiDx4pVZ0MhHUo6dpliL3yeJLorQT5l28fmSV0M8o5So%2B8h%2BvQp2j%2B06zFRorvDeN0lVQLGlZyJq6y0zbgc%2BC%2B4G2e9PON%2B5TMeZv%2B6qZfu51v0kt%2BbW7%2BVi5u7WzodPi%2Fb0jn0cuwTPIHohkraBKcidfo8b5xBRF%2B5g%2BBtDuwuUNzY28nSbgABwL%2BqkwYovW6w7vunS7mfREEQdeRhjzWhklpuMwL%2FKMLzJg8IGOqUBcwPqdR8RvuBQQZluouLWp%2FvNjs5UsDNdimC5vuyvUkPJnxVwn6uBR2yaASpQ2vzdDmukth7OYno6BNix8T%2BgrQMGaByLgJ3HEHdQp%2FM2O3aokZe00e7LoHxImg%2F%2FJ9tTjY2oZKZwTMuO5zzMXIT6nHnHByqUsBmYuCGpch7lyALJhfar4YhFK4lWiqi8pwdMIZHt9dKlMJemTMaulLmTJLjQHT6h&X-Amz-Signature=a0d0922330bfa8660631645fbd5785d56138a51c99fcd59d9ada850f9a96b4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FS3BZP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCNZFbYndN%2F4DgIqI4yVyKhM9%2F0T0sag2uC%2FbP%2BpmgM7AIgSoZH3mkhMe4Pyp7gDbSNtB6StMb7FKTmaUEISqIq1eEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOHzMoYAHszQ4UlNLSrcA4VEuM1yLErUrXcre6MsTy8zMUMpLwEcvRMqFbjWPJSJw3jy%2FHR3kp8qKBj%2FJqG4d%2FoIKHfbPtBRofuHwDDrp4qIAKUs2pBqEY8jAjfTw5HStnCodPHkq603TR4Tx%2FssEc87wSo4zi5YBIXoGJGswTeV01FFNpDMf6EmWa46wxUeK7B7fTF9X1GevLqXfxV7IT70mJAL2yXFdo9H9rtq%2FRtVSnaa1ZHmbT2tZkXCoU4XHOWei6HrNhbQd8zdTDw5ZghbH4TDRaz4kCxxN3MZImxOUNWz8HhA7Pd7Cy63jHL8WqnDtkLPvz4huVDyTKmNk0sZHw5P7RUnKpynG8nWJvWkqtzdfuBWbEianejO%2BiNdVlMZs6%2Fjf4h%2FFhIDqEEj%2FJRpGyRd3JyTSSGawCGiCZAPm6y%2Bp2zYtNCCRbSyvJEfrx2rP094CFg%2FTWygVW077cvF6ZS3rADJlpjOLdnaRIIdJ7hN7%2BXVHwyX11AX3BCXuYNld0McWKNI1%2B4uBtgIqZ%2FtDoCmpmydf7fF4IWB36VSJ7rxXwV1C8NWw55xv69M4lk%2FAl5NhT8MIkyyj81zHBO926HFZD07Ibvb5QAOMh%2FKc8DX0ePyv%2FZWCeFdDAv1mo3bvXoE3LEuhYn8MK7Kg8IGOqUBk70ewX5WeLVKcqcnISbeubZPs4amKGTZr7u%2B%2FuUFSQD82Enaa%2B7rsQnBxTBPB%2Bo2le7WKuGWd9ujfs1F5SgYf9XRcQLUVYaWmA04ueDQOYwC3oWvnJkDbWI136iTihnZ5H%2FPc1ADULfC3P9IZCsOacv4nW44LxxVnz%2BOGbgaOkxcvbmeLmuyr5kP8%2FZF9lnm0aFAFGhjzoWfqVT6AcLvBKiGxABe&X-Amz-Signature=73041c078f88cc291ea17d4bcb7511c1f1e1d5d0b2b191fe1cb96e2d4ab59506&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6QUL4X7%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD58%2FlVEC0BICvEe4B97SwJyEb%2Bgn2G1hQ0vyyaC8AO7QIgGG3JyWMd8S%2BxVhzjcyaJCaEjnX8oFqAsz347RCLgGREq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDIjVHPE%2BVYQpv8o85CrcAzi5VZPEAVpPtgxFa880M7HUgVCaIt4vliFpSmhuhB3eGK2btAceuHPVUqSK28z7%2BJwePbLf8J7D7%2FZ%2FQ5UHcxsrywUfkHjZl1%2FHFOvMriYo2hoDADltcMWBOb0lmQzGKEofr7OUMZhQTEu%2FXLfuhogvD8CfZam2DXFvLfxciy5m0DmL8u1pmZcfTY9ysQ1patP%2FDWzg1LD0OY7ZmQXHul4mm8ehKJ9QDcMvvlc353ISKSJeiKQnuG%2ByCXZR52l%2FAKbTikuDPWKdgrUSZJDc5q%2FTwH4rtCk%2F6HBspYvcytMSXjuwgVXeJTZAUnMyKt1xD3YOLVQOljhoBSm3LwDtm935fiw5LE4tP7hk%2FxqJPNT9%2F3LyaN2bArokdc%2FKJLthTQuWteUuoq2vwrA6XQE9x7gxmrbQJ9fwNEbiYK6yoYFsIW4UB1jzPWhQPH6V1H8iexyWVSb%2BbEcJGLEKO6ysN0%2BRomMKkz7%2FRxDV7VF8QGlB0QHTdmU1phwZ1ypC3xpeJsXgntd50aPyZTw9CmLwVWTp%2BvXKJlz8sbW200a3aiperEbQNFl4Pff0JBAinr2N%2FL1muPVwd%2BJqMFc1nR%2F4WrfzekAeWiMk9FicZ9Oky2bvZiR1zWpoxkAtDWiZMLzJg8IGOqUBTodSrlDzxkOYLRGE8%2BX0ZHB1A9iFhzOL1jPjjJ8GYDElbdcwBVPOyq8GKH5Gw9k%2FotvYRtYhissovN5nv1cL17KRAD%2Fd7BByuRuFlh9ysjaLUSLP5J4sdKAolx3DQzhq8oqHTSFZhnqz3wcgne0orRDUURUNqe5aSgL50GLkfISq2JiFPunYR%2Fe8Nb8122Vhn9E4qjOWxpKvkCXbCcbBEMPCvF3V&X-Amz-Signature=44e7cd7fe8b38bd50d62b1cee8d17000fafe4f14ead9a7031f6ab458161fe596&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
