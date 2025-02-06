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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWOBJD7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCFAMg0uS72FvROAmqbVi2wdZe9gJB3tRt0BA7AEdVIuwIgF5v307Q6GSG0BH6Q9f%2BfZk%2FtH6IMPm%2FBysCd1mh9A1cq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOCY6XxDo1EUNX3P8yrcA%2FRI%2BFHGANnwkg6knNKKmNXFQQbkIuXIWzwfZIq2uWtGf9o7GwhjvbZAOFY%2BatVi%2BHQL4fUruTsD%2Bn8PQ9bnBlVcTV0FjgonNA7GAKTSixrMeHlhq4rvM18uaEsNA5DFCzzAOCKqDh2BScVMApFx6ZCzqogh0RsjFOSJ1gOXh3gY8%2B9LSepdXrivfuddINNuExcSmw4Pn33gBTrPTM6pltlYNbVtWTC2N4jwZtnOwJyzvz1WTNNw7OOUDswv0xCuS0cb6mr8MrCurHZnl8DBhMDbPsXBWrogjhP94f04HyHdxTeRsia2WqQVAT2UTUvthorz%2BQnO1qeJAB%2Fbw4rzrG8Snw%2BtXGLFPbenqmPKy1l8l40NXkmOav72Y6N4W2ILq9KeDVeZ2uFmPe%2BRv4n6v14%2FgrOx7RBs6JK9cww840KFr6v6TP48nkd8VzLDgu%2BjkCGaCGUU0zi4nkIkENIfeg5XiBPuhExNiNQXIl9R%2F4kgtJDTgxNjPnj9OegZwcnae2GSPmc2V93E6mvAYXfFyZK3%2FVAcCsUAPTcfnVinDYg9qC%2FAp2fCmROBUJZJeY12RXTOM8sD67Duw3QMoiIEXNIXZPSesQjgEVRIVfNdbmCJt%2BZSyRN5LGogSkI6MMO5lL0GOqUBDqU0Unz5R2WHKJnyz%2FukFJR%2BtKS7Pw0eeXYi8A%2FnKslwts65lCoVfvAYRl4%2FnDAYhSVLaIKkSiATpnNywG8dXqNErtBnvsfN9qdkbnagAXuAz8ZOvUpltYwRQ7gBk7tQFtWKOEGwn0hf2%2BzL4iwDe4vvISagwdAiBrhhitbzB2Jn7Ax%2BoU5KDCVArDFkpbSp%2BRnM7EQYbR1W9v49H45%2B6RPPVy1o&X-Amz-Signature=65d1789f944357f5e2eebb0d600cdd85b9d05a4ed44193107400c4ea5c71955c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWOBJD7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCFAMg0uS72FvROAmqbVi2wdZe9gJB3tRt0BA7AEdVIuwIgF5v307Q6GSG0BH6Q9f%2BfZk%2FtH6IMPm%2FBysCd1mh9A1cq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOCY6XxDo1EUNX3P8yrcA%2FRI%2BFHGANnwkg6knNKKmNXFQQbkIuXIWzwfZIq2uWtGf9o7GwhjvbZAOFY%2BatVi%2BHQL4fUruTsD%2Bn8PQ9bnBlVcTV0FjgonNA7GAKTSixrMeHlhq4rvM18uaEsNA5DFCzzAOCKqDh2BScVMApFx6ZCzqogh0RsjFOSJ1gOXh3gY8%2B9LSepdXrivfuddINNuExcSmw4Pn33gBTrPTM6pltlYNbVtWTC2N4jwZtnOwJyzvz1WTNNw7OOUDswv0xCuS0cb6mr8MrCurHZnl8DBhMDbPsXBWrogjhP94f04HyHdxTeRsia2WqQVAT2UTUvthorz%2BQnO1qeJAB%2Fbw4rzrG8Snw%2BtXGLFPbenqmPKy1l8l40NXkmOav72Y6N4W2ILq9KeDVeZ2uFmPe%2BRv4n6v14%2FgrOx7RBs6JK9cww840KFr6v6TP48nkd8VzLDgu%2BjkCGaCGUU0zi4nkIkENIfeg5XiBPuhExNiNQXIl9R%2F4kgtJDTgxNjPnj9OegZwcnae2GSPmc2V93E6mvAYXfFyZK3%2FVAcCsUAPTcfnVinDYg9qC%2FAp2fCmROBUJZJeY12RXTOM8sD67Duw3QMoiIEXNIXZPSesQjgEVRIVfNdbmCJt%2BZSyRN5LGogSkI6MMO5lL0GOqUBDqU0Unz5R2WHKJnyz%2FukFJR%2BtKS7Pw0eeXYi8A%2FnKslwts65lCoVfvAYRl4%2FnDAYhSVLaIKkSiATpnNywG8dXqNErtBnvsfN9qdkbnagAXuAz8ZOvUpltYwRQ7gBk7tQFtWKOEGwn0hf2%2BzL4iwDe4vvISagwdAiBrhhitbzB2Jn7Ax%2BoU5KDCVArDFkpbSp%2BRnM7EQYbR1W9v49H45%2B6RPPVy1o&X-Amz-Signature=bd4e8ee22132f0305e69c552a2fe3e2430c98d312d82f3f5e60b8f1c026f6643&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4U6VVHX%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIDsF41oyUhduTSVxucJ5fAbk9fkiI6ZvmD0hFczKaqRKAiAuc30ocL5bUOK74edyfK%2BZ1kW7aJZQbJNAN4NJnEpESCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMNTe22iELHPS8cVK4KtwD1q%2FHE7JBjNZMRHZA3byhkbrac%2FlBC9Hj3%2FNUPSY17AJWHnJPQ%2BJuKtDXe75KzqGVCEyTJK4%2FOGswNL0ImYClG%2BZFRwDN1d44sMzXB2skqXlhwwB0yLznEufFQLfjrO853yIem%2F3Pr22PRFpwboWReO21ZtRC4nXdsa8rj%2B%2BpjsCdFh7Yc4A%2B4vhIAkUOZ5YAfVJABu9LFZ%2FqXnQmeYbnW3AgMOfLLeCtCJCE6CvDFgQoIhjH%2BrjU1rQP06%2FYf9Eds7ce7rsVpIEsswvctgf18Tl9%2FUm8lTwjcwed6yuH1xMi38bBIT9HVoSJEHgUcBbqUab0T47avdSsquImrLtr22XTMGvoQ2Fe68A%2FqeRCvp8QExDHrjSTVWrvMXclg%2FizL3Z%2FrvQ7GjVwY2L6eqgqcF%2BO2RolOSH8wpvLYW6z1r9OK84LcWDsBNgWQD9%2F8qt2Sr5sD4lFkZnwyDWvQlYR8m5vPIvaofeTcGYvb%2FWdvX%2FpLWCSOKPNhb8buc509hnaaRMlwyNLCxt8YQ0R8niMEiOl%2FZ%2B3xzpGzIbVrnQMWM6dUw57FRgHMo%2BXzWhvOeaX1bp%2BzfmPnpGo3PVQi3EP4VINAxHh%2Flfc4iM9m8rgiQggc5cs9tkvjtGS478wvrmUvQY6pgHZBCCvxKEKeT53rWvZyDo5X4qJIK5oyO9gUpDrofTjk35In45Wz4nnBPsjTTLX9vsue4PiIFY7X1wq4qLTgo1JTd3Ynmk7HpcXvL6e9RhHjmuupuBtD9fM%2FoWAjX4X%2BQFiy9FH1fqsuDqZM1AOa%2F%2B2dN%2FijDjysJZZq9lPQMfYlKRbrBauobK%2BVSewd5zffQvwQMoyK4i2Gg9%2B5v%2BJbJF0Eq4uTKKC&X-Amz-Signature=f580259179a52d8b3ee59bc3cc6b636d6221a2ce46e320a6d8c4eb5705d6b9d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIWMHXP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFJsmJm8zk1xxa9jS0qHSEj2WOh6uhz4azaE7TrVVzgfAiBxzx1plLcdV7tS8Hi6DjGu%2BXOal1Ebcc45pALw6SCMmyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMNBtNmUOww8Gx2oJxKtwDXTMUGPI47e%2BISsq6aU8wz7csnLsLBwrXcwNmnsmbV4W9FT6e20DdLZz8NAOa8Jt%2F3f4iDua%2Fgf3%2FC1FSJOmnbyntgIVxvLud7mCP1N01AB5OzYsAu3C10IBj%2BsLTcqbEDFCzcNZTQabqrdhfaMcGDDw5NZGL83AKHTYpdQ14F62WtB8PwvHNKTfFsR9xPwkIBrk1HiZbosy6Q3zmhiaPV4%2FUbc5UwLTCW9TLNWyXKHQIOUKDHuOuaZ0BYoxFJ1qrerEeoSU6TxKzb%2FQO%2BbdNU5GjbhkSCE%2BopK%2BpV%2B%2B2WQ5TFCwzKqBpleY%2FxH6JdZsQ%2Bt9F8U8ouMu4rlIdOg%2BjCjpOHG2t37v%2BFXHMYDM25GG%2Fc8mHuwqUHr4HcmztBXoOgdJMYk8kmuOLikg8fYAusviwSttQtLCiXs%2Fd6RL4EjIMv7WGSpznXwZAG2u1z%2B0ZknUYq178IW9zLXx02kxvIg69%2BpfOMnL49CYN7PG4%2Fu0iHw6qS4%2F0gKpToX2bU5HFEWvc%2BlifPxN2uZ%2FX0nsVwgh9rhOGlxg0plF74VsFUBUU9D8CLUDiSglecKLEs%2FR4uV%2Frl1%2FWoxSyVzHLQRPW1VMkorNI9L5h%2B%2FbPrQmPGYGv8Xh%2F7k4f8S%2BS9icwhbmUvQY6pgEMoeLg5AiM3IVnCOAG4IJJfKp9Lcf2cdgvV4YpdWjaB%2BoKQPZP7ESp9cbTuUJhbB9GN41FKe%2BwCMlaabHrAQi0xzBIyMGIpfADBT0%2BY4faG5VMvO3yYzWukhZpVGt1R8lWtgDxg6TLL21xJQAlPF9%2B77P%2FWnG%2FMnoRrKa0Y5OYfFj6fI7XuTyEVDw6jXR6eYOtG8i5L1ymyrKo0CSfpLqpXF9R1R5U&X-Amz-Signature=321b7f304ada28df6743bb822cf40a9d0892ebce070c19e109e8b6e63876531e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAWOBJD7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCFAMg0uS72FvROAmqbVi2wdZe9gJB3tRt0BA7AEdVIuwIgF5v307Q6GSG0BH6Q9f%2BfZk%2FtH6IMPm%2FBysCd1mh9A1cq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOCY6XxDo1EUNX3P8yrcA%2FRI%2BFHGANnwkg6knNKKmNXFQQbkIuXIWzwfZIq2uWtGf9o7GwhjvbZAOFY%2BatVi%2BHQL4fUruTsD%2Bn8PQ9bnBlVcTV0FjgonNA7GAKTSixrMeHlhq4rvM18uaEsNA5DFCzzAOCKqDh2BScVMApFx6ZCzqogh0RsjFOSJ1gOXh3gY8%2B9LSepdXrivfuddINNuExcSmw4Pn33gBTrPTM6pltlYNbVtWTC2N4jwZtnOwJyzvz1WTNNw7OOUDswv0xCuS0cb6mr8MrCurHZnl8DBhMDbPsXBWrogjhP94f04HyHdxTeRsia2WqQVAT2UTUvthorz%2BQnO1qeJAB%2Fbw4rzrG8Snw%2BtXGLFPbenqmPKy1l8l40NXkmOav72Y6N4W2ILq9KeDVeZ2uFmPe%2BRv4n6v14%2FgrOx7RBs6JK9cww840KFr6v6TP48nkd8VzLDgu%2BjkCGaCGUU0zi4nkIkENIfeg5XiBPuhExNiNQXIl9R%2F4kgtJDTgxNjPnj9OegZwcnae2GSPmc2V93E6mvAYXfFyZK3%2FVAcCsUAPTcfnVinDYg9qC%2FAp2fCmROBUJZJeY12RXTOM8sD67Duw3QMoiIEXNIXZPSesQjgEVRIVfNdbmCJt%2BZSyRN5LGogSkI6MMO5lL0GOqUBDqU0Unz5R2WHKJnyz%2FukFJR%2BtKS7Pw0eeXYi8A%2FnKslwts65lCoVfvAYRl4%2FnDAYhSVLaIKkSiATpnNywG8dXqNErtBnvsfN9qdkbnagAXuAz8ZOvUpltYwRQ7gBk7tQFtWKOEGwn0hf2%2BzL4iwDe4vvISagwdAiBrhhitbzB2Jn7Ax%2BoU5KDCVArDFkpbSp%2BRnM7EQYbR1W9v49H45%2B6RPPVy1o&X-Amz-Signature=b2c591debe563ec152097af066a6224b25426d7c89630cd44c855483b80bf475&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
