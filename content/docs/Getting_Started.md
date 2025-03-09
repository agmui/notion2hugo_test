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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALNXETI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T120954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDGcWP31E5fUGEnud%2FwTeQAkyV7bkqIVST9mbvz16ZMlgIgfhSOzp0H1eO9nFKL1AP0sSlTb1P%2BoGj1e5vmt0Vk61oq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOxNjmIC0hG8OWxYDyrcAxcf%2BzI3jj8ptyKb9lMMWQV9PmmFyv9ceM5t%2FWXKD7iR9rAg%2FargR%2Bdf9W7k52%2BSBP0X6fcyLXhcPJIiwLV9vexfYAKwTOnoz8Yo%2Bv7hFuygoBZgDui8SLRJSpzlBOuONxbc2P6Nokff5zdy7M6a1G%2Bt7tqMvyHgbo5xtek7IH%2FD2NDuQy1EuM%2BlLJu4hpCjEaRhGIgCouFmH3kcSMtXNtXfIlod%2B7ZZ4Y%2Bp6N%2F9nIYQ2demNA1XlTGvl%2FK7S44Lpuy5wwM%2FXzVQII%2BRkSHkuHtJwgRghAkmS3wK6mja3NO7tmqnc7mEgeSYciBO0svE4nCcwXgq0w6QKzOit6%2BUm2%2BJYF97NBLOeTiO6%2Bx1F3lS3jEC%2FUb7tLLVasxMbW3n0Hul1WCWeU6fj2sun%2BjReB7XkfD8089OC03yCAF18%2BJSuU3L0lkJQ4TFZd1OPpXd8QCQyGG950m%2FdcdqVe5POeexwXq3ZmT6AG7dgiu%2FemQKlC1D47X50BXZAlnn0TM6TWxtgVGA9dK6AJJFJGwkXHx3HSuJCYeLfotWhUl5Kw9OwwmiMQft2ckVyUyt5WQTcttcE4X9v5Fu18INjLLD3q3BOaPYB2Sk2I%2FNPwLvpNNIxLEtgvp0ghQtio%2FiML%2FrtL4GOqUBG5pRGdRs%2BJl1eIy3%2FsKUZGIRu7vsp6IoABiRc0%2BYN%2BsmSJ8QfLwOjjONSALJq8OWM4pg0RlK1oTX%2FtaDAk0o30KVrb7dagnsgW8DKWIE9vLHkOp7YcweeVKIuept3zr%2F95qIJa6Ir0q6B9XPTc3Snd4NSbpKwlU6mcwf6XsUJ34FmB4T9sOXUnBXqlzD4I%2FMNvdOpN7sQjqzyjPH5%2BHX6ILZx%2FRW&X-Amz-Signature=71b73d7ffd76ee3afb7ecf1543e5f630e9b3a5c79f39fab1173a45e84f6308ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALNXETI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T120954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDGcWP31E5fUGEnud%2FwTeQAkyV7bkqIVST9mbvz16ZMlgIgfhSOzp0H1eO9nFKL1AP0sSlTb1P%2BoGj1e5vmt0Vk61oq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOxNjmIC0hG8OWxYDyrcAxcf%2BzI3jj8ptyKb9lMMWQV9PmmFyv9ceM5t%2FWXKD7iR9rAg%2FargR%2Bdf9W7k52%2BSBP0X6fcyLXhcPJIiwLV9vexfYAKwTOnoz8Yo%2Bv7hFuygoBZgDui8SLRJSpzlBOuONxbc2P6Nokff5zdy7M6a1G%2Bt7tqMvyHgbo5xtek7IH%2FD2NDuQy1EuM%2BlLJu4hpCjEaRhGIgCouFmH3kcSMtXNtXfIlod%2B7ZZ4Y%2Bp6N%2F9nIYQ2demNA1XlTGvl%2FK7S44Lpuy5wwM%2FXzVQII%2BRkSHkuHtJwgRghAkmS3wK6mja3NO7tmqnc7mEgeSYciBO0svE4nCcwXgq0w6QKzOit6%2BUm2%2BJYF97NBLOeTiO6%2Bx1F3lS3jEC%2FUb7tLLVasxMbW3n0Hul1WCWeU6fj2sun%2BjReB7XkfD8089OC03yCAF18%2BJSuU3L0lkJQ4TFZd1OPpXd8QCQyGG950m%2FdcdqVe5POeexwXq3ZmT6AG7dgiu%2FemQKlC1D47X50BXZAlnn0TM6TWxtgVGA9dK6AJJFJGwkXHx3HSuJCYeLfotWhUl5Kw9OwwmiMQft2ckVyUyt5WQTcttcE4X9v5Fu18INjLLD3q3BOaPYB2Sk2I%2FNPwLvpNNIxLEtgvp0ghQtio%2FiML%2FrtL4GOqUBG5pRGdRs%2BJl1eIy3%2FsKUZGIRu7vsp6IoABiRc0%2BYN%2BsmSJ8QfLwOjjONSALJq8OWM4pg0RlK1oTX%2FtaDAk0o30KVrb7dagnsgW8DKWIE9vLHkOp7YcweeVKIuept3zr%2F95qIJa6Ir0q6B9XPTc3Snd4NSbpKwlU6mcwf6XsUJ34FmB4T9sOXUnBXqlzD4I%2FMNvdOpN7sQjqzyjPH5%2BHX6ILZx%2FRW&X-Amz-Signature=67131fb2edc87b1d163de2fd8ba8117fe6f0c7a1f228d4a718b8995f0278b48b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZUPIXRC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T120956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEdUyM4XYgHUMwlsG6Va88Z7m8yofbHOvgY2hceG2ODGAiBvWGx3NUr3%2Bd%2Fm5SgsqaPczlY8CIQNLwuSBEREoYG3Tyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2T0N7ZAiLWdkQxzFKtwD2Vk0yrlBVLAUfgRIw24%2FEBsB6aLHxNri64L5qVDMXtOcI609TkSlztMq8pD0bDYT1Ro47Qby%2FFKbqpnNneg85bIg6TvgkveJpTjVj9fAfueEKU%2FJ2yKVYJPfOsOXAOFx%2F7cyhcfr1sMsRXIgep05AAuOUT%2B5LITqxtrYxMSSc6rd7CmkDnr2PkE3dGrrKacNu4Jn7Tl8SEpMV44pTnN9AfSFEAo5yKb8ZKr%2B5snE1ljWmIFo%2FhKfm2Zko4%2FicErpyLvMqvjfx2raKr9wl0uPGCCFr1s%2F1cnlNjzFcbb7AB15K8FqsdSKcOTBc678fMJf%2FNo0RKJTOGu0N%2FvJZz6O3cenrgmLnzyjNVNC0nWXJIS06W92jzaU00YeG03QG0fZuKVrByyNp6w%2BeOLM6KpCHoDHi7Vr0sn3yfLn0mGDVxW1C6H8DHSXypeCtEOzGEW3%2BSAZaDIaKkRcZpnbK%2BxaFD%2FD7Eaym20Xxq1O%2BLs9xayRBjcIsO7qKBGfJ4Jg6C8D%2F8ItMhIGa3CD5ATw0N2bXRJDHTDYDraFh1WByRVlXSLWl%2FH37NDsCtPJcEAyAl43L9Gwa6ViRmDHPfopsCoubz7BDTrdDwBzHu5WLesd0ZwWoNJmt8k%2B6LivXVEwkIG2vgY6pgEhpqkP4hk%2BFDiz%2BW16FKYOZFt7VrN4RPvAIlHjwJVEcoseS32uS4HPKWZqyEPNc0YC%2Fw%2Fttwxg3vj0bRrQlNBbwyuuKHMUVakYXtumlN6jKQOdIcSr0qW47bqX8AsjBhCH%2B%2FTxNyqll5Ck8aYf1MJ7W5%2FZiDrzvLILmB6nTW9vsxjVCm4Kh59N9Rl7M5P4AgYHjMXmSSpHuoak1MxqkA0Er0EHxBfm&X-Amz-Signature=8ff527be3ff6b5740f95c618cb9d975957c0253b97d65902eff8b5498bc510c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKRWBD47%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T120957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQC8FO3nhvrMmUsVD1Ky3Kwo1aE70MdME5CnaukXkPYGigIgLzXxoc4Pi5X6NZBNYiCnItrUmqiFqA62knYt1wqRFjAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGNQvxHsNCUgGazyZCrcA%2BBlfEhVC0viFai4X3aNlHEwCincHUkUYaif23U17W%2F4czm9RgmhPrwf2Jw8sJOf7OJEbAOi7GqcI5wohDovrpRS278wxlE%2B8Vn4D5CjiFy4jRV8LU5lDAchgWVZyypbIiGwkGBw8QE6W7B7e7BUh4aOpsXTmZmSx067hoXZ6s9TaAN%2BJdE6IEXSupQuX1PAysFKc%2FJRhZpBP9DYwfd6wMzcFs4N7prhZZbm%2FfrUNnAWRLfAmKXIBCVZ5Dw5tRBBSjeUvWahyA%2B37UKi8CoDbMRmrk4nQlZEGfa37iv5WlGZkMuLjuCxgDcX%2BEn1i8WdSpiz8fFC2W3zm0SKz7v00%2F7EUqSYABGtxU0gyro7bGarva6SI5DryFxOJ%2BGfu6qZjaPGtx6d1hHQHLDp4E%2FBot0YKwD211d1WvA4vbIvWA%2BtVQ9lPWk%2FWrck1NP5F6weRuzl55GPz6WMmLFfRrCO%2F%2BtwPv%2Bq%2FsQ3VDPzLxPM0Rtg69XXnJQeR6OT7rmAgd1D8mFDmr2JDxE5KpkBDI4M%2BXMqiMBDNMCarxvBtgqdQ%2BWpnHJzgY9igMb6ip6%2BgPISDa6adlx5rrPbndRmuAPnjqnebnEo0%2BjIygAivvrJM73vANhn5i%2FZyYEvLdcPMOHrtL4GOqUBRMNBUEhi1S9aC5j0ifdkoXp0%2FUkDfvMVHKEvDljinPxiWfdQs5vfa8VW%2BMDVhk9Fa1%2Fzit441onmdMYdDeydkTWw2CMLIw4jEj0QqBoOwnulbL%2F5PR%2BXIuBuWutFYvUdONVS4fhtRprBvsYCDzYPFNA7S2pU%2B%2BpVrwIFhg5p0FIwHXU5b2yDBc54bCOyyWX95vQwjPryQzeJsKkCn%2BxvV%2BDDjYEI&X-Amz-Signature=f34644cb0fe45b2f122d702081beae5cac840e23ce2091376e279ba85db825c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALNXETI%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T120954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDGcWP31E5fUGEnud%2FwTeQAkyV7bkqIVST9mbvz16ZMlgIgfhSOzp0H1eO9nFKL1AP0sSlTb1P%2BoGj1e5vmt0Vk61oq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOxNjmIC0hG8OWxYDyrcAxcf%2BzI3jj8ptyKb9lMMWQV9PmmFyv9ceM5t%2FWXKD7iR9rAg%2FargR%2Bdf9W7k52%2BSBP0X6fcyLXhcPJIiwLV9vexfYAKwTOnoz8Yo%2Bv7hFuygoBZgDui8SLRJSpzlBOuONxbc2P6Nokff5zdy7M6a1G%2Bt7tqMvyHgbo5xtek7IH%2FD2NDuQy1EuM%2BlLJu4hpCjEaRhGIgCouFmH3kcSMtXNtXfIlod%2B7ZZ4Y%2Bp6N%2F9nIYQ2demNA1XlTGvl%2FK7S44Lpuy5wwM%2FXzVQII%2BRkSHkuHtJwgRghAkmS3wK6mja3NO7tmqnc7mEgeSYciBO0svE4nCcwXgq0w6QKzOit6%2BUm2%2BJYF97NBLOeTiO6%2Bx1F3lS3jEC%2FUb7tLLVasxMbW3n0Hul1WCWeU6fj2sun%2BjReB7XkfD8089OC03yCAF18%2BJSuU3L0lkJQ4TFZd1OPpXd8QCQyGG950m%2FdcdqVe5POeexwXq3ZmT6AG7dgiu%2FemQKlC1D47X50BXZAlnn0TM6TWxtgVGA9dK6AJJFJGwkXHx3HSuJCYeLfotWhUl5Kw9OwwmiMQft2ckVyUyt5WQTcttcE4X9v5Fu18INjLLD3q3BOaPYB2Sk2I%2FNPwLvpNNIxLEtgvp0ghQtio%2FiML%2FrtL4GOqUBG5pRGdRs%2BJl1eIy3%2FsKUZGIRu7vsp6IoABiRc0%2BYN%2BsmSJ8QfLwOjjONSALJq8OWM4pg0RlK1oTX%2FtaDAk0o30KVrb7dagnsgW8DKWIE9vLHkOp7YcweeVKIuept3zr%2F95qIJa6Ir0q6B9XPTc3Snd4NSbpKwlU6mcwf6XsUJ34FmB4T9sOXUnBXqlzD4I%2FMNvdOpN7sQjqzyjPH5%2BHX6ILZx%2FRW&X-Amz-Signature=7d02a94c3ba62620e58326f1850cb4dc242ab082b360ccda9f7324179c14384c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
