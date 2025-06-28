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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXEDNYC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv51GDJyb9QY1asD%2Fvk%2FLs9PFGImxv9DL%2FaVLbt21R8AiAv4ZmfMS%2FynZkFffF1tQ%2BVJTTUGP1c6MV9EeYxPOZpMiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUiC8fKcWl48K66QQKtwD7gSdzGXan0IlZDF1U6M7Ydc9DAyHw2eWkH4ehkHS1bO5srQEATCgL1ecFyQRm%2FHH8aj%2F9jZj%2B7XvNMbaxQen8AnVQsi4mm0cc8QrIOG%2BcUSDCMadaRXFofk5%2FLvJjy7F6q22gydA8KNfg1oCK7tQi7bqd5EGcmoxCdZwidcA%2FajYmhvZttsLkah%2FHKkwNgjM8uql%2B3NMW2s0EWx%2B3WWr9UEg7G%2FAfbvkpaRV7%2BqCFaeE3Di9aKOpswTPbqtCgXyc3%2BQJxY9uSgsbCs04%2BCRsZRaA7%2FzuZ9zxQ%2BplTvLsChLYDYtUceSPQyOSztWmOxBe3LcPhH8BzUCQWEAYowRy3gL3wJrsQx8ZgyHB2%2FU4n16IgejpKx2LwTKnFiZb8HKFSgCyWvwQkGAg0Frz0CRccAVvHcO62JnT1Akkzi5eVtbYPHJRwqU2sPMUYP6%2Fsnh2lCCVUwPHCnDWid%2BIfKV9R3cbMmLP40xz5IhjoAXV%2FvjCgQesdWeqwWfUoMo0LlNadIQi9QhUUu2SBnLke%2FRDxXm96feSwDcSaw73%2FsDPs11pY%2FpXU48be%2FmOeXdcLiPxGLiJoENem595L4HqssBqO%2BgjIeuIyLRqn0cKv7942c5VEtcPu5aEiaG8ADYwn%2FSAwwY6pgHtUAFXsu2%2BvZYGrBPCrSOuZ%2BboJy0t%2BmaVxyiOQXhSpiI7oNDIeX4wIkjzZ6vbVrmzZvnK1NcAa8jC5puHE8A3ikap2GXfNfCXME9kRhH3vS5STr6r3%2BNfIV9%2FqQRJBIyY8zaCHg9cJZ8GoMuW%2BCfVdYAZB8OGTJxH69uzOIVouqkXkz6NDM8diuVKFQEcgijVaMi6f73xE8GQYHhzxafD3p5jtBQy&X-Amz-Signature=12617868f196d235064cdbad71ed145d66f140e93dd0cd38bafd1c841e4319a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXEDNYC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv51GDJyb9QY1asD%2Fvk%2FLs9PFGImxv9DL%2FaVLbt21R8AiAv4ZmfMS%2FynZkFffF1tQ%2BVJTTUGP1c6MV9EeYxPOZpMiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUiC8fKcWl48K66QQKtwD7gSdzGXan0IlZDF1U6M7Ydc9DAyHw2eWkH4ehkHS1bO5srQEATCgL1ecFyQRm%2FHH8aj%2F9jZj%2B7XvNMbaxQen8AnVQsi4mm0cc8QrIOG%2BcUSDCMadaRXFofk5%2FLvJjy7F6q22gydA8KNfg1oCK7tQi7bqd5EGcmoxCdZwidcA%2FajYmhvZttsLkah%2FHKkwNgjM8uql%2B3NMW2s0EWx%2B3WWr9UEg7G%2FAfbvkpaRV7%2BqCFaeE3Di9aKOpswTPbqtCgXyc3%2BQJxY9uSgsbCs04%2BCRsZRaA7%2FzuZ9zxQ%2BplTvLsChLYDYtUceSPQyOSztWmOxBe3LcPhH8BzUCQWEAYowRy3gL3wJrsQx8ZgyHB2%2FU4n16IgejpKx2LwTKnFiZb8HKFSgCyWvwQkGAg0Frz0CRccAVvHcO62JnT1Akkzi5eVtbYPHJRwqU2sPMUYP6%2Fsnh2lCCVUwPHCnDWid%2BIfKV9R3cbMmLP40xz5IhjoAXV%2FvjCgQesdWeqwWfUoMo0LlNadIQi9QhUUu2SBnLke%2FRDxXm96feSwDcSaw73%2FsDPs11pY%2FpXU48be%2FmOeXdcLiPxGLiJoENem595L4HqssBqO%2BgjIeuIyLRqn0cKv7942c5VEtcPu5aEiaG8ADYwn%2FSAwwY6pgHtUAFXsu2%2BvZYGrBPCrSOuZ%2BboJy0t%2BmaVxyiOQXhSpiI7oNDIeX4wIkjzZ6vbVrmzZvnK1NcAa8jC5puHE8A3ikap2GXfNfCXME9kRhH3vS5STr6r3%2BNfIV9%2FqQRJBIyY8zaCHg9cJZ8GoMuW%2BCfVdYAZB8OGTJxH69uzOIVouqkXkz6NDM8diuVKFQEcgijVaMi6f73xE8GQYHhzxafD3p5jtBQy&X-Amz-Signature=dbd4b127c7e31370ebffcc46acffda89af035d91dc53a75707e05acde97704a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXEDNYC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv51GDJyb9QY1asD%2Fvk%2FLs9PFGImxv9DL%2FaVLbt21R8AiAv4ZmfMS%2FynZkFffF1tQ%2BVJTTUGP1c6MV9EeYxPOZpMiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUiC8fKcWl48K66QQKtwD7gSdzGXan0IlZDF1U6M7Ydc9DAyHw2eWkH4ehkHS1bO5srQEATCgL1ecFyQRm%2FHH8aj%2F9jZj%2B7XvNMbaxQen8AnVQsi4mm0cc8QrIOG%2BcUSDCMadaRXFofk5%2FLvJjy7F6q22gydA8KNfg1oCK7tQi7bqd5EGcmoxCdZwidcA%2FajYmhvZttsLkah%2FHKkwNgjM8uql%2B3NMW2s0EWx%2B3WWr9UEg7G%2FAfbvkpaRV7%2BqCFaeE3Di9aKOpswTPbqtCgXyc3%2BQJxY9uSgsbCs04%2BCRsZRaA7%2FzuZ9zxQ%2BplTvLsChLYDYtUceSPQyOSztWmOxBe3LcPhH8BzUCQWEAYowRy3gL3wJrsQx8ZgyHB2%2FU4n16IgejpKx2LwTKnFiZb8HKFSgCyWvwQkGAg0Frz0CRccAVvHcO62JnT1Akkzi5eVtbYPHJRwqU2sPMUYP6%2Fsnh2lCCVUwPHCnDWid%2BIfKV9R3cbMmLP40xz5IhjoAXV%2FvjCgQesdWeqwWfUoMo0LlNadIQi9QhUUu2SBnLke%2FRDxXm96feSwDcSaw73%2FsDPs11pY%2FpXU48be%2FmOeXdcLiPxGLiJoENem595L4HqssBqO%2BgjIeuIyLRqn0cKv7942c5VEtcPu5aEiaG8ADYwn%2FSAwwY6pgHtUAFXsu2%2BvZYGrBPCrSOuZ%2BboJy0t%2BmaVxyiOQXhSpiI7oNDIeX4wIkjzZ6vbVrmzZvnK1NcAa8jC5puHE8A3ikap2GXfNfCXME9kRhH3vS5STr6r3%2BNfIV9%2FqQRJBIyY8zaCHg9cJZ8GoMuW%2BCfVdYAZB8OGTJxH69uzOIVouqkXkz6NDM8diuVKFQEcgijVaMi6f73xE8GQYHhzxafD3p5jtBQy&X-Amz-Signature=795c3cedf35837402c60aa423455185f1c38cb7c393de8bde6d07e5670b4796b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDYXZMFG%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzsz3KxfNVKupvExAMDa4QEM%2Bh2%2BxEVXBWdZkYTS2DwIhANzvV6HKjLFPi%2F7ow5D8dhLKWQBTyfzIVupEGzvWQ4rMKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNj%2BdelzDU26l6qMQq3ANy8fpGowQzT7QTmjwxAq04Vvvo0PHKloBxg0%2BM9d%2FFlpDQ12QuMMUt3yZ41NtiTv8%2Fyzqvha5w%2FtoXOhh%2BFpEM4xGD0u5XaKB0aMDWM%2FP%2FpzhhQ4Axhz298tZcZcyo7J7yFIXEMm9dsTmkA05EyKEROr9WQN1ZcerHea0GwnTeeKb8gnihD55FdOF86wLnlvDoo%2BjopKb%2FpYjcfAosK7HsolI5x8FyLRtZw4sG2qMp61Bu14%2B4osXJwoHa%2ButCC4Q%2FgtprxpYUdAOSGWGTn1KGr4oN%2B1Nonv4s76mv4Y11GpOqblwFz7kkOOPbrCBH%2Fkm4XYLb%2FVp3tbSFadhProo8e8yrqAUxTU69s%2FSNNIb7wWtKFVioNoIrl2LchPN%2BYSYDdwHdb9l93KlDu%2FHZq6xLDrSDlQhvob6xqp%2BM5BfibiJZjTtw4Mz9Xx3DXjbJ%2BWIlOTW5YZ3B49pfmztxPRvHr2EZlnLCHY9a3GiRcA43%2FOskQeKCpeUme7F6UOkUhPDnW2SPDLm8vgnS3bFbvhniJjl1DVPm%2FWiEUaM%2FFgeqD8ffDDIx419bcesZMswIyjhBvzCMYTNM0Cb4eLl2ezq2u9%2BbGbupmxP8JqU%2BYXMCz8M50vsKbJ12ehOKjDC%2F9IDDBjqkAY34WEM83dNbngZW3tVtIUZhL%2B70sVNqgd%2BGexMECEy0qrhdblEl%2BVORc5IlGufGTbPU9sCCJMHyRXjdc%2FcPz100XH8kd0JhE1NYYl8%2BPYVCEgxLtVotfjMbZsUdfIjaWJqzin97pqJgOLmqQNlulTTWtWO2Tylp1Ej1LZ6HsfpYYX%2Fkq9sC%2BDFi%2FAXvOWlVaXFBBsc3IEx18zXLgqh41bweGAzu&X-Amz-Signature=079388df77a7101b32547db4924b6948304efc01cf19ae0f0485749cd18d8a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWQLUX2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFU7SLDYB2TBK8jCzOVFMmXorWp8BAVynlsGSE6kT9xAiEA2LvdQ5WaiN5OX9XnxcSm9HCgwZ%2BK6nGpg51V%2FKB1yroqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZjyufSpf3OQINtrSrcA2glFSQ62WOOLxstREnvbzdi2IMmssiRIZOmmA22bdrG0vgS0KmkFz33UVzH%2FBfpeAkzlKLCoqE8VnjRJKwy38j3qbNE17egvzrLybipujK75SwRJGEXmeqCh6ax3qzfXnoVfmPmqPqmOTY6QPomJQY3X6CTOdIC4q%2FdzKPrX1EyhBeX6BWu%2BlY8WYTrGbpdeDxvOKjvnJSxiV0XsjyP0LmcNngrDCXKFw8eAWp9HVumFn0mdK8G9CAlNsT30PX0YV8ITFMsqzwjKdqEusJA8IcG3K1Nzer%2BNadHOPMjDbsmd1U3GWwpqwJ%2FcthkEMiylWDJKd9sd%2Fvtg%2FFd61EuFCx0tAUC%2FUQzcIW5bvfqKdS8Bk7192WLtdQhdXzOX4DG8UsNbgyxUOII40Hj11yXlE5KP6o4AAg9Ro1hzg1zHih8ygZRCD1JaKyVIWWkg7f7YXER4kYFzovRRp43ObIuxVEUDmX8ZjyZDEkO3gX52jOys5ShJNxaegiY4VxSVSp4SIRqsFwPSD3EyNYmPvVCqmUjT7aJAz1gHfAr8p2JxLciehnpH8jMHTjYaXqPMihDbNu9JQrYZunLOtKal5D8XvCWdrXIRs5Xguu67N%2B7d7DMWejKe%2FK4ifg%2BmtYCMPiQgcMGOqUB4FDFuuikvFuZkApaWWcR0dRRv9UctyqVojdWgnmcG7D5f2URtp6lbadB5ddWeilcZbhHtinYtpQeG7WQW%2BGcuRsXTDrdxo9NA%2FD6Qi8EtP8VfKULu44Vqxu4hYfyQSbjShBjFwomqr7s0pbWzUwT5DvWYhhaV3sUT7rcK678wFSLS%2B41JNfOCr%2BOkpKf9Ri4QHBO1%2BXsYLTHq5UBWEb4tF1vPr7Y&X-Amz-Signature=17be12125ea19274f0a2ceb85d396b55005df037783b4152c3556d3d7b01babe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXEDNYC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv51GDJyb9QY1asD%2Fvk%2FLs9PFGImxv9DL%2FaVLbt21R8AiAv4ZmfMS%2FynZkFffF1tQ%2BVJTTUGP1c6MV9EeYxPOZpMiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUiC8fKcWl48K66QQKtwD7gSdzGXan0IlZDF1U6M7Ydc9DAyHw2eWkH4ehkHS1bO5srQEATCgL1ecFyQRm%2FHH8aj%2F9jZj%2B7XvNMbaxQen8AnVQsi4mm0cc8QrIOG%2BcUSDCMadaRXFofk5%2FLvJjy7F6q22gydA8KNfg1oCK7tQi7bqd5EGcmoxCdZwidcA%2FajYmhvZttsLkah%2FHKkwNgjM8uql%2B3NMW2s0EWx%2B3WWr9UEg7G%2FAfbvkpaRV7%2BqCFaeE3Di9aKOpswTPbqtCgXyc3%2BQJxY9uSgsbCs04%2BCRsZRaA7%2FzuZ9zxQ%2BplTvLsChLYDYtUceSPQyOSztWmOxBe3LcPhH8BzUCQWEAYowRy3gL3wJrsQx8ZgyHB2%2FU4n16IgejpKx2LwTKnFiZb8HKFSgCyWvwQkGAg0Frz0CRccAVvHcO62JnT1Akkzi5eVtbYPHJRwqU2sPMUYP6%2Fsnh2lCCVUwPHCnDWid%2BIfKV9R3cbMmLP40xz5IhjoAXV%2FvjCgQesdWeqwWfUoMo0LlNadIQi9QhUUu2SBnLke%2FRDxXm96feSwDcSaw73%2FsDPs11pY%2FpXU48be%2FmOeXdcLiPxGLiJoENem595L4HqssBqO%2BgjIeuIyLRqn0cKv7942c5VEtcPu5aEiaG8ADYwn%2FSAwwY6pgHtUAFXsu2%2BvZYGrBPCrSOuZ%2BboJy0t%2BmaVxyiOQXhSpiI7oNDIeX4wIkjzZ6vbVrmzZvnK1NcAa8jC5puHE8A3ikap2GXfNfCXME9kRhH3vS5STr6r3%2BNfIV9%2FqQRJBIyY8zaCHg9cJZ8GoMuW%2BCfVdYAZB8OGTJxH69uzOIVouqkXkz6NDM8diuVKFQEcgijVaMi6f73xE8GQYHhzxafD3p5jtBQy&X-Amz-Signature=1614ddd7386f0da4411100061d5ee2d1fdfecb8d1533393ca9785e5eed4146c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
