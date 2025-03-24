---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEWCIQY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtqB3AKX656ybApwLpI0%2FEGNHxbg%2BDYwNfeHJqfJXzngIhAOB0fSq9Cmv3%2BWgDcIq4OunzS%2Ba%2BPdlMmsJyEApHBitdKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtU06bE49VNR4pTRkq3AMcoR4LtCgaiXWXdaddwDiir7mbFSi%2BfHJPP9OYsmyHgplKF4LmM4uCwoL%2BXuL78ggReD0FASvIo%2FmXvzbytsPM4WK%2FG7R3jEAqxUWsXIZ%2FdkoVd%2FrOPlZbc6HGMk6Mp2LjxE7dzipLGkpxnGVFdsimymejvcL9TbU7mCulrJjHBRvxxZYmfxq8C0tbq8qopAFolfCQQqrhCw9pQWKKOJkeeYr7VYdxnVG5yb%2BX5iCfUx0fGCuN98WVnfrmwZvl8%2FJtcDhmA13%2FOQj%2FUdTUlit%2FeBfgnpkYA8e3WQuELK8DplfTx2WoZs8DeWgVwBKNJOWcrIaMGw4wdv7JfjPO%2Fr6PSmFUQpPB97Em8lI7t8VmwYygv4tchrgel898H8f5oLqxdlxBED4mo0XS%2BokcJ%2BnpAn6yvBYRgGNlyZtFTiKkHCHqUxe48N23%2FH0%2Bf%2BqAw6qX1tLvK5pm8KZcQUIvVAydUfZuKoz6yVVpINuEy8SzdESWv2sofnuDn6FJzXcEo69%2BX8%2FsLOqXMV65Xt4iShz9tGASrnu7AyDI7ezkLiGyI8NUSTy2eHMKiK8AaZoHlaxJu%2FJSp1sEcbSOpEUCcbuaKs4BMfmzr0m2tX0jB9q477YEY52McjVqHilonDC1v4W%2FBjqkAUUqEgWQd8GBol9CVRz%2FNXWDd5ftIkhoM%2BkI2pBAiLHsD%2Bfk8cnU5HZUkiP9OGi72Qz7ZEZUDVFiYPf%2B73zkBAAL75PgpGuLLjrxB4WSo8fAHMjWYWf7Y9RK5Elvfc6mLgiarR76aHFSLt%2F6NMEvSj5J1xi1USvJuhywFNtuC3D43cIMyrwDJkOED9xewkifsPsxTxLi%2BINliox%2F4jZlqwaWwCwE&X-Amz-Signature=7e50008c9e39eb5a736321f38e485e795f7735067b0f602135d5054fd5c3f0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEWCIQY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtqB3AKX656ybApwLpI0%2FEGNHxbg%2BDYwNfeHJqfJXzngIhAOB0fSq9Cmv3%2BWgDcIq4OunzS%2Ba%2BPdlMmsJyEApHBitdKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtU06bE49VNR4pTRkq3AMcoR4LtCgaiXWXdaddwDiir7mbFSi%2BfHJPP9OYsmyHgplKF4LmM4uCwoL%2BXuL78ggReD0FASvIo%2FmXvzbytsPM4WK%2FG7R3jEAqxUWsXIZ%2FdkoVd%2FrOPlZbc6HGMk6Mp2LjxE7dzipLGkpxnGVFdsimymejvcL9TbU7mCulrJjHBRvxxZYmfxq8C0tbq8qopAFolfCQQqrhCw9pQWKKOJkeeYr7VYdxnVG5yb%2BX5iCfUx0fGCuN98WVnfrmwZvl8%2FJtcDhmA13%2FOQj%2FUdTUlit%2FeBfgnpkYA8e3WQuELK8DplfTx2WoZs8DeWgVwBKNJOWcrIaMGw4wdv7JfjPO%2Fr6PSmFUQpPB97Em8lI7t8VmwYygv4tchrgel898H8f5oLqxdlxBED4mo0XS%2BokcJ%2BnpAn6yvBYRgGNlyZtFTiKkHCHqUxe48N23%2FH0%2Bf%2BqAw6qX1tLvK5pm8KZcQUIvVAydUfZuKoz6yVVpINuEy8SzdESWv2sofnuDn6FJzXcEo69%2BX8%2FsLOqXMV65Xt4iShz9tGASrnu7AyDI7ezkLiGyI8NUSTy2eHMKiK8AaZoHlaxJu%2FJSp1sEcbSOpEUCcbuaKs4BMfmzr0m2tX0jB9q477YEY52McjVqHilonDC1v4W%2FBjqkAUUqEgWQd8GBol9CVRz%2FNXWDd5ftIkhoM%2BkI2pBAiLHsD%2Bfk8cnU5HZUkiP9OGi72Qz7ZEZUDVFiYPf%2B73zkBAAL75PgpGuLLjrxB4WSo8fAHMjWYWf7Y9RK5Elvfc6mLgiarR76aHFSLt%2F6NMEvSj5J1xi1USvJuhywFNtuC3D43cIMyrwDJkOED9xewkifsPsxTxLi%2BINliox%2F4jZlqwaWwCwE&X-Amz-Signature=791566c2a559b41121592c04b5102256c1db3f4b3f9a59d81cd173467f466639&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VUR3ZRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQzbduNzlumZCJAe6WQ5eZjK%2FN3XyUqiwrJxZUAb%2BUaAIhAPddFCBp7PAhFDLFIX0ILJJ2sJDvaFtTtBkJGcbrBda8KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxkULhMLz%2FTGq%2FM44q3AMqldKjDKMjwlfzS79dbr5XVt4pjv%2FdeAwvrNxHHHOoo10WBPdS369SXSvcvBCUw1Tbvk7Sv8%2Fa%2FqZgALjC8GiSHQaLT%2BVoxfuGLZBcClxm36Sv2BPtIxKQP5Oalm%2BjxQIHlv37BdZ6PwSna5C3gemtTWIw7HgOvf2zFt1cjNI%2F6G8q9l8%2FvnZVu9zD7%2F%2BbVKRuneZyDo0APU%2B5RFvF8nAVsl%2Fm2ijILQg%2FY%2Bjy%2B%2BQ4J9aw6sLV30Mugc0cI3P1qUj5m2O2hEB4w4ScQXKl5meM7xLSXHiAUHnFP6wumbWibfLN3oXxgwVIf4aO18fNaVovqN%2B4Psxx369ocUjTS7E7SyDkN%2B4NL1nwIs4xNV7jBSpphMYQLuYj4u7fX4RtDgh2fgamdOd43CtbQJvkuHFOX4JH%2FegfDs3DH51Xry2UuTtn1OCJO%2F9mkErjMXT4lLHOIdlblwn1zjzPhub%2FDTwLylYzcy59Rynx48JuOu4fiV0hsraWUDyUcFFhkFEcWL0R9dXzkIWVXcw5A8o3LiXGqgUkYJfSthyP%2BMQJ1JhhMdDAfMNUsJmp7AaapdY2cmvO7mtt1vZKQNO04AhUug81BmUH%2F3IRQzKP%2BdZQVburhzk6CTLzx%2FcrtHJQUDCQv4W%2FBjqkAa7%2FEza1GvrxEawhmVHV3Wo%2B65CoPJW%2F%2FPSZphNZ%2B3YG6TkJuheqmI%2B%2FzLVPNWfXcrXQSI50P92vhK0hYMOizCVlvZi2%2FSloE%2FAvys%2FQkmsSBqH2clM9vjCP5nRT0SIR%2BNarT%2BhWsjBfhc%2BnhqVcf7l2orEFnbynEtxX49uVfbcT%2BGE7rhUcGxAFbo9pdkS2T14qK%2BEcz%2FPIilAj7YlKlSPVy98z&X-Amz-Signature=f045bf02b5b2d8c8b62fcc7cd38abd577828574131ed07f383f1f8fefdefe7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HYC4HV3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2WhH3rNoSFwdp8ofdO1ZW0W3K%2F0kdNoSOurijbTmItAIhAJqNa0L703qwn3R9yNv8zQlxrcuwEKd6nK3c5ONhCDtOKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnnmnYrh7hFgoF6z4q3APIYODAVkZs8mXZEXq9MGg3M8CIpUyWRinfdMQC0S2CE1bn2ZUENDR5S2OhPYeBAD9Ptq%2FROSXPOWpo01PHggIH0TSRbubQP0%2FAtWuEm1%2B%2B2Hfc9PTofVIJijfqe4TWj0X77OUixU8U%2F6FbZZiC9SgWiOIXSsnfq2fYJuW15XP8o7xjrD18Pg9pgCcSwBzUaSzI9318qRBLb58d4y7Vksi88NGkhQ5m%2Bji%2BVeDsffFiqW7%2BLXPWdhehy%2B7f3nowx5hdjWAZaCHoXLT%2FV50msYoVoA%2Bvpm5rQFpdhyJrFpH3MacXcFmYF2hsfalUvRS7dSRyE0E3xucb9pUlJlX1XTwOAMxWUo1%2BNCtApHdxBlGHWulPJpFS99FUiKd%2BlNfyPzdYTFIoLpTDji%2FBk%2FWNKWDwdQeT9H4%2BmKv%2BNkV1PffrSw3QakLZAmiQBM7Rs6fjUwdtGH0SE%2Ba7%2FCgZlALezetPQTR3kQMceCCisyMdWiYXOpoELkqnJI9C9eA8s%2FHgA7xiU1iJZM7zz1Y4AEWD3HD7GSslsg8i76xQcKxIE5LG9Cuqj4SAEpCOqG6WrdQBXkEXejr8ohVlD1wD5514%2BMTKaeRpjlyIMu7IG7FH6%2F9DhGYq%2FR3AYxkGSCABfTDrv4W%2FBjqkAeWFm9iNzxovLcPWp0whWbQJK0XkHZab2DRhJAx5%2FieofLHCjDSXaKYldl%2BHukfygqrrr%2FS8WH%2BwRkVzo0ayPzpsJHG6BA94febg0cyLHuWaC8pLrLCDD2kxFuxUtHx52MdnvfHEQOYeTejNQh3sdc91L0uKbEsMmMe%2BahiKL%2FqkYIHzX7AS3jJc6zaYRYyMsQP%2BVL6souWXqqCJnLTPfhibHSAI&X-Amz-Signature=142aaf1135605f58a6402f1b4ac6a8250b90af15412493d019ca0e2eb0b1c828&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLEWCIQY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtqB3AKX656ybApwLpI0%2FEGNHxbg%2BDYwNfeHJqfJXzngIhAOB0fSq9Cmv3%2BWgDcIq4OunzS%2Ba%2BPdlMmsJyEApHBitdKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtU06bE49VNR4pTRkq3AMcoR4LtCgaiXWXdaddwDiir7mbFSi%2BfHJPP9OYsmyHgplKF4LmM4uCwoL%2BXuL78ggReD0FASvIo%2FmXvzbytsPM4WK%2FG7R3jEAqxUWsXIZ%2FdkoVd%2FrOPlZbc6HGMk6Mp2LjxE7dzipLGkpxnGVFdsimymejvcL9TbU7mCulrJjHBRvxxZYmfxq8C0tbq8qopAFolfCQQqrhCw9pQWKKOJkeeYr7VYdxnVG5yb%2BX5iCfUx0fGCuN98WVnfrmwZvl8%2FJtcDhmA13%2FOQj%2FUdTUlit%2FeBfgnpkYA8e3WQuELK8DplfTx2WoZs8DeWgVwBKNJOWcrIaMGw4wdv7JfjPO%2Fr6PSmFUQpPB97Em8lI7t8VmwYygv4tchrgel898H8f5oLqxdlxBED4mo0XS%2BokcJ%2BnpAn6yvBYRgGNlyZtFTiKkHCHqUxe48N23%2FH0%2Bf%2BqAw6qX1tLvK5pm8KZcQUIvVAydUfZuKoz6yVVpINuEy8SzdESWv2sofnuDn6FJzXcEo69%2BX8%2FsLOqXMV65Xt4iShz9tGASrnu7AyDI7ezkLiGyI8NUSTy2eHMKiK8AaZoHlaxJu%2FJSp1sEcbSOpEUCcbuaKs4BMfmzr0m2tX0jB9q477YEY52McjVqHilonDC1v4W%2FBjqkAUUqEgWQd8GBol9CVRz%2FNXWDd5ftIkhoM%2BkI2pBAiLHsD%2Bfk8cnU5HZUkiP9OGi72Qz7ZEZUDVFiYPf%2B73zkBAAL75PgpGuLLjrxB4WSo8fAHMjWYWf7Y9RK5Elvfc6mLgiarR76aHFSLt%2F6NMEvSj5J1xi1USvJuhywFNtuC3D43cIMyrwDJkOED9xewkifsPsxTxLi%2BINliox%2F4jZlqwaWwCwE&X-Amz-Signature=3e4a14cb9668a062ba792aeae3a9d16a384abca9ff4128905e7eb55b5eebd18b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
