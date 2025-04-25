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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MKBSKS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu5llWO8IwItJeb0GbpMlWWOgM0MRoUCiuHxVR112dwAiEA%2ByfjkxYsVmxQPT983ih3DD2cajKfNQNKkiaaKoSB6%2B4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHnmWwyMmTpBx54eOyrcA96rjSjCBT3J0Eg0VLqA34xys7c%2FCROKswITiFllxUc%2B3ieIaMIVzxS7J%2FJN4cmq2iVH0QFU1LqHmoQeeuxrsNXxYEjH6zdYGiUuauDC649SdbLYQzLAnMIU%2FiFQz3Xq%2FXAHMXyD5EDMCSiLPtbPPab8yQbihs%2Fl4MrKquvu7rLd%2F%2B0fggPK6D84qapZEqQnB2rxu8xGZDqLQ%2BdOkmIjrnuRmiG%2B2Fh1TxYGPV72Y5dNDwus9KEdazvcBjTrvFVIrPtMvj%2BoBWAeaIh86ok0uty6saklK7m%2FkmEZS5NSQdHKL4kTD6%2F51pLk4j6%2FAekyPB89EkV9v19Qi4zYpdWMdIe64yu4lmFRRjjdpNXE%2BXjVAKA6l7tPxi1JNo5XZoVorrkhFVAT9hC5jlHcJxh3OoNixx5vtH5VihOQYYViDzQuRseHdWltCRjM41JxyKxKDUO%2BgvQMEDqtqv9FG7FIFiZMHRhOxHSGR3z4tu38%2BIHkvlfBB55MSg7IMFe2eXjKHIoHkVa1Kk08hubOHmF3b%2BgsGUe711D6mh0jvc4P7UbbUizCGCP85FvvmgBGLmcOLo0k%2FiRC375R0cTTWUQ1x1nfR4dPoztA11gMefECiONf4xRObbhrQXt1UCZwMJ%2BZrsAGOqUBFEaNXceLKTGVJbyvuSBC4vb0RW27PDnq8W7DNqk7V0alynP0sOqM6Cgcy47ceoHJea8%2Ba%2BYAifK7kXDsyjOirxplPHMHrEviqEAQ3zqw23V7dd6lTl5OUxH1tyk4wf%2FS7hP%2FrXir0GHexWqNhR72mWS%2FCAEOa69kkSTue5kh9qR9P%2BIg8qqcfeZ4v4A9%2FSrLhi5XeCn3y2acNTRaONKqrdBUvh%2Fy&X-Amz-Signature=1c775d29c5e443e14cbece470ea90ddd9c6cdd4e11da3da3c1dd3ca316774476&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MKBSKS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu5llWO8IwItJeb0GbpMlWWOgM0MRoUCiuHxVR112dwAiEA%2ByfjkxYsVmxQPT983ih3DD2cajKfNQNKkiaaKoSB6%2B4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHnmWwyMmTpBx54eOyrcA96rjSjCBT3J0Eg0VLqA34xys7c%2FCROKswITiFllxUc%2B3ieIaMIVzxS7J%2FJN4cmq2iVH0QFU1LqHmoQeeuxrsNXxYEjH6zdYGiUuauDC649SdbLYQzLAnMIU%2FiFQz3Xq%2FXAHMXyD5EDMCSiLPtbPPab8yQbihs%2Fl4MrKquvu7rLd%2F%2B0fggPK6D84qapZEqQnB2rxu8xGZDqLQ%2BdOkmIjrnuRmiG%2B2Fh1TxYGPV72Y5dNDwus9KEdazvcBjTrvFVIrPtMvj%2BoBWAeaIh86ok0uty6saklK7m%2FkmEZS5NSQdHKL4kTD6%2F51pLk4j6%2FAekyPB89EkV9v19Qi4zYpdWMdIe64yu4lmFRRjjdpNXE%2BXjVAKA6l7tPxi1JNo5XZoVorrkhFVAT9hC5jlHcJxh3OoNixx5vtH5VihOQYYViDzQuRseHdWltCRjM41JxyKxKDUO%2BgvQMEDqtqv9FG7FIFiZMHRhOxHSGR3z4tu38%2BIHkvlfBB55MSg7IMFe2eXjKHIoHkVa1Kk08hubOHmF3b%2BgsGUe711D6mh0jvc4P7UbbUizCGCP85FvvmgBGLmcOLo0k%2FiRC375R0cTTWUQ1x1nfR4dPoztA11gMefECiONf4xRObbhrQXt1UCZwMJ%2BZrsAGOqUBFEaNXceLKTGVJbyvuSBC4vb0RW27PDnq8W7DNqk7V0alynP0sOqM6Cgcy47ceoHJea8%2Ba%2BYAifK7kXDsyjOirxplPHMHrEviqEAQ3zqw23V7dd6lTl5OUxH1tyk4wf%2FS7hP%2FrXir0GHexWqNhR72mWS%2FCAEOa69kkSTue5kh9qR9P%2BIg8qqcfeZ4v4A9%2FSrLhi5XeCn3y2acNTRaONKqrdBUvh%2Fy&X-Amz-Signature=40466c9b8b65b7a4f19a6f7250e01b7861ea5539827214431ef5c643c38ec563&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ26ULCB%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF%2BlS1a2MtNI8I%2BNW3uOs5C3WavhRGcpwSqXwWhUU5OAiAiOz%2BLgyAYr3Bt%2BJMCvbha%2F9iln3Gs62sKxasyPT97TCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMysBqJZcmGGEZEiYxKtwDWT%2FDHDZNjO%2BTd6LOCCJeiw5LqyWdCYT%2FtuwILXtCuCiGUUnQCpMx7JGbBsx0cel6F%2BCsZT9uHpMlymp0ZVUNdIHJmcVUN8gwBQWkgFXp0LXUQErTQUORQDHySkvbOBiZMXUIKp4gXYqRQByyqzpO%2BwhmXMcP8lMP3fg9MZkWpvgpWZpNelDmBK64gA2iNaHKIcKqRLCUKJoPKfAEAq6FhUrTd9YzTmWeG7hHHdQmdFZOa%2FAuAn8Q9sVirRkJZ5j9nL6IP6OLszCn60qCeWHsKaXGHvdIZY0t0YzYKB9nbmRXKn18i5uUBYmzEh26ox3e1G2zV3ywqccdQqEeO%2FpV5xSrkKkxb7782nOe2FxjU7c%2Fl6wPTkQhR%2BJ%2F%2Fbpkzav4UceOfNBnvIvSXysoCMs2PkoJTubqyb4k%2BOHzm9bW8j2SYP3jzPyOr2mpXDdiwFtXEDPOArNW2Xi7GX89zpQzkY6EQzezNLPGah0AZIe6HgzYTBjbD7Pwfyu%2BVjPsNVI4GBYsK%2Fv7gT%2FJC8eQOLfxixAHHp6XmMa4MZfVRgGEVnUXiQ3fjAlmy%2BoGJlePwLdzPFLlUN%2B%2Fz5dxRwXgArNHenC73qNdoLlcLjXzM2ADH7yug4jylFPcDXQxXwYwlZmuwAY6pgF3iLkYH2OQhvVyaD4pPHq2qrGM4w9KIFx2RBSHM1zqbNcKIx3vViUm1BGgrbJ6T4gFV7f7sLBZylNkw8sgiv2obKYhnflQ%2Bwt1qzteISHCV2FzFjzyeAxxVWR4JJ%2FUr6M0mTyNT8ncS6x9s%2BV%2B69o6uxkI%2FE03v9DNI0iqA7p4I2ZGz%2BCp7M71jY0gvXqjaqUb0b0JrnFvVeUUOKQuxqIwbppPwnTM&X-Amz-Signature=2f02a12eaf9a0d1bdd2ff00c7ad0da3bc15dbff410bf44b479077104c1f77cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3J3HLQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHufrprSPtem3P2paK4u7xzJu1Q4%2BsnmPz4Lqv8Qlsg9AiEAh8bYl%2FjHd7DcfRlEUIysO4wIAn%2F2UKX%2FSa5F7UFa4tsq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9vCo6TGdPUp5NDnCrcA24ny2SxY5NulEkIrvMhbIkJnfEbQOWvdNW7%2Bx5BQG2sFfb%2BQk%2BwlTcc5cHk3MOe43sb4%2B1OiejRJrtqg91csLCkGXO%2B%2B%2Bn3BPmewYOHW9mAE5VKmlWEhPE5wF29drdByxHH%2BaOaaVZUQA71TRgVv4ASO0mVeFuRIYgLcLohrA6X%2BXljgsCaQRIdHx2K9YFvAbBsZsThw0%2BDvgzwq4oCOLLMQJQxVzEkvfZac%2F3DKwrZrksQtk1P21GQKT%2FUEKaiceXKqgqvDgPC7Be4BgzQfv%2FTLMvLYwvenWemMJs9Hybv%2Fceuck%2BGRAyVw1zMEYV7nRcfRqJOZ%2BR8wpTsZu38MI%2B52SJFjKtCJUk2kG5Kv1LM8RjxtEUYTmujST3PDzAncBaxOwFAiGfVgcT8aCAIPnenD4nnM49qHasVEiy252FyTJNYYUd96x4TXFv7JarDkWoig%2F%2B6B6Ov1GC3b4SQ2%2F674LhPhTKknkzYdrB1qUobMp6dmCBW850R0O6YrEV1Kz8Sm6YgrZGjmCd3yAoGzX5geym7w4a0zYvTQi%2FyySR1NteodjoFNDi9zTUfknhZuilDnFpBkbTvzeoNHpeqSA2mbaZl2P%2Bp0ENnezfbcAWRzRF2zbhjnDI21pVmMPqYrsAGOqUBPETUMpdrwSdXob7NXRiDMpe6enrpgI%2FoHFU3Km2zVl%2F3D3wPS2I3%2BXQgXu9KTUrLr6OI%2BG6dKLvhOxK16TQfKqEFULXjQhUtpeaDtkVWcPLORmNjFVKgTcLPAEgx59h99XoTXLJM2v99VrdVSrufsm%2FGw9kEclEq0IClJ%2FJutmhJ2aZ3kBbNbutixy3gNjLuFNuRhXz04iRdFkQ8sbHWEvlke9C%2F&X-Amz-Signature=83950f4bca2cc11bf2b2c8a514b7b5f0b89767846a1e8bbd88f76caf4e6af7e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5MKBSKS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICu5llWO8IwItJeb0GbpMlWWOgM0MRoUCiuHxVR112dwAiEA%2ByfjkxYsVmxQPT983ih3DD2cajKfNQNKkiaaKoSB6%2B4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHnmWwyMmTpBx54eOyrcA96rjSjCBT3J0Eg0VLqA34xys7c%2FCROKswITiFllxUc%2B3ieIaMIVzxS7J%2FJN4cmq2iVH0QFU1LqHmoQeeuxrsNXxYEjH6zdYGiUuauDC649SdbLYQzLAnMIU%2FiFQz3Xq%2FXAHMXyD5EDMCSiLPtbPPab8yQbihs%2Fl4MrKquvu7rLd%2F%2B0fggPK6D84qapZEqQnB2rxu8xGZDqLQ%2BdOkmIjrnuRmiG%2B2Fh1TxYGPV72Y5dNDwus9KEdazvcBjTrvFVIrPtMvj%2BoBWAeaIh86ok0uty6saklK7m%2FkmEZS5NSQdHKL4kTD6%2F51pLk4j6%2FAekyPB89EkV9v19Qi4zYpdWMdIe64yu4lmFRRjjdpNXE%2BXjVAKA6l7tPxi1JNo5XZoVorrkhFVAT9hC5jlHcJxh3OoNixx5vtH5VihOQYYViDzQuRseHdWltCRjM41JxyKxKDUO%2BgvQMEDqtqv9FG7FIFiZMHRhOxHSGR3z4tu38%2BIHkvlfBB55MSg7IMFe2eXjKHIoHkVa1Kk08hubOHmF3b%2BgsGUe711D6mh0jvc4P7UbbUizCGCP85FvvmgBGLmcOLo0k%2FiRC375R0cTTWUQ1x1nfR4dPoztA11gMefECiONf4xRObbhrQXt1UCZwMJ%2BZrsAGOqUBFEaNXceLKTGVJbyvuSBC4vb0RW27PDnq8W7DNqk7V0alynP0sOqM6Cgcy47ceoHJea8%2Ba%2BYAifK7kXDsyjOirxplPHMHrEviqEAQ3zqw23V7dd6lTl5OUxH1tyk4wf%2FS7hP%2FrXir0GHexWqNhR72mWS%2FCAEOa69kkSTue5kh9qR9P%2BIg8qqcfeZ4v4A9%2FSrLhi5XeCn3y2acNTRaONKqrdBUvh%2Fy&X-Amz-Signature=3970f9467b71f8f04f08557c47c377291f8a39c412794026e333fe420b3abeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
