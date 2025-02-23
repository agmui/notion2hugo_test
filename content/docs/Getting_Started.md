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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRD5Y6G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHNNqeq9tEROdMCZL74t%2FMBLTc7h9j8p%2BkYKs%2B8fAuCgIhANdZo8KLyr0K3HzaiXv6CtFN%2BsKxIODd%2Bt07CWxigVB%2FKv8DCBQQABoMNjM3NDIzMTgzODA1IgyzfcK4x0Ggaqa81kMq3AMzoUeXb%2BfxN3LZlDlL0yZNWodHcGY2uFXyYuafmk19PwFZFyfIdgk9f%2FGli1g21GSKAoLzUEo2bu5kFlSfHtfH02GoEekVp78XvGdYiyBL5yjfYsDpvJkqxHw%2FFCLdFBBmRa%2BYkqI%2BwskLKDyqlBzfbmZ%2Br1rzR2Aud55%2BVIWCE2TyVnbjNbxWzpscI1k%2FdMA5%2F%2FAhcjfvhzLCh5Mvd3D4aVEBxMSA68GSucyzjFXnjnzjP1RNn3hBp3XKM3vIEWCZ2ABVDOL0SQddRCyKcuNfFZ7x6AubLM0rejeRo0vM1QwcuyqS%2BiNUGzarigtphC8tpagVZ3f8ECLly5lJ%2Bf0o0elMvXRWjVnSEKFXxytmz98ALI2vCoJUGy%2BolxRVcSfC8TS8QJz9ivEoLVjT1gFMpeWbLUyRcGrswPIIxh3hDjeAxphqTikffUUb4sY%2BtCsr1mEVOLZvnJ4PxUDWyBExIhfU9X%2FJaVCRuEyoUanT5%2BpmSOQ3DGaCeE2jHzZEdQvVUiDZWODoDE%2FFLdDlWmAMTnN%2FYLF%2BO7Vto3U398VQehLEJI2uxY2exeCCpb%2BkgnLKXILDLRwYyO2mKAxRL24ej9pkCXZABs7csEPuoD9wkgrAAFAH6HaOk4Ms1zDE8%2Bu9BjqkAWdbE16TjL%2BSQR7rndZM%2BOkdI7bUWq6HwEW5Kdh%2F5t5z%2Fvh2GlylXB0E5X3AXIe6J8hIumEOJIwB4%2BDnbxfrKT5CbtjQmE9WezL0HO9p54odWvNvreLLgKzvILpbffJD99If%2BFFdH%2FShWV2hBVckbPchPcsURgWlTaDFu3ZleQr5ymFsRuRFA6lSPCiYW05c6pPTncc3M%2BEm6UjjBSQvRqBwJ9%2BN&X-Amz-Signature=a60b0bd4b6295be41d17f491442c77ebae1de12d3cd8b9b96c169a10ed4ad5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRD5Y6G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHNNqeq9tEROdMCZL74t%2FMBLTc7h9j8p%2BkYKs%2B8fAuCgIhANdZo8KLyr0K3HzaiXv6CtFN%2BsKxIODd%2Bt07CWxigVB%2FKv8DCBQQABoMNjM3NDIzMTgzODA1IgyzfcK4x0Ggaqa81kMq3AMzoUeXb%2BfxN3LZlDlL0yZNWodHcGY2uFXyYuafmk19PwFZFyfIdgk9f%2FGli1g21GSKAoLzUEo2bu5kFlSfHtfH02GoEekVp78XvGdYiyBL5yjfYsDpvJkqxHw%2FFCLdFBBmRa%2BYkqI%2BwskLKDyqlBzfbmZ%2Br1rzR2Aud55%2BVIWCE2TyVnbjNbxWzpscI1k%2FdMA5%2F%2FAhcjfvhzLCh5Mvd3D4aVEBxMSA68GSucyzjFXnjnzjP1RNn3hBp3XKM3vIEWCZ2ABVDOL0SQddRCyKcuNfFZ7x6AubLM0rejeRo0vM1QwcuyqS%2BiNUGzarigtphC8tpagVZ3f8ECLly5lJ%2Bf0o0elMvXRWjVnSEKFXxytmz98ALI2vCoJUGy%2BolxRVcSfC8TS8QJz9ivEoLVjT1gFMpeWbLUyRcGrswPIIxh3hDjeAxphqTikffUUb4sY%2BtCsr1mEVOLZvnJ4PxUDWyBExIhfU9X%2FJaVCRuEyoUanT5%2BpmSOQ3DGaCeE2jHzZEdQvVUiDZWODoDE%2FFLdDlWmAMTnN%2FYLF%2BO7Vto3U398VQehLEJI2uxY2exeCCpb%2BkgnLKXILDLRwYyO2mKAxRL24ej9pkCXZABs7csEPuoD9wkgrAAFAH6HaOk4Ms1zDE8%2Bu9BjqkAWdbE16TjL%2BSQR7rndZM%2BOkdI7bUWq6HwEW5Kdh%2F5t5z%2Fvh2GlylXB0E5X3AXIe6J8hIumEOJIwB4%2BDnbxfrKT5CbtjQmE9WezL0HO9p54odWvNvreLLgKzvILpbffJD99If%2BFFdH%2FShWV2hBVckbPchPcsURgWlTaDFu3ZleQr5ymFsRuRFA6lSPCiYW05c6pPTncc3M%2BEm6UjjBSQvRqBwJ9%2BN&X-Amz-Signature=9643f2cc152067a772a35b4b17133a8bb963104c5419299ac26d96d0368bc7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGDLQJD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCZUKJO4I6PwuzmRggaODBucnQgsSDd2Xuz%2FYKCeJwwwIgDDK5ARbQ4%2FPR%2Fv8N%2BtgXSjOWDZZnMyMEB%2B5x7SU61dwq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDFiB1ue41yNg%2F8lhFCrcA7L87kViZpBiWug1lJAoFhKAtFdrugP%2FlyxswfYfuLn9FuOHsULnChnZMU7wjBFoRM0MFiI9ZMbBSRKZSLA%2F6TjgCjDrjq%2BdpopqAqnPx3hJXH%2BAZU9%2FX%2FYXi9BQAyiixGnBPP7fTaZPEoed5zIPcDofcoyGYOovatc%2Fma71TKYwWhJHAyNVUnAV9gNWbUuMQrO5EHeNYgppOJQd4A0wWGk1xydqoaezLWzcvNL%2F3381SYaYSRYp%2FR9fP038MtDDAVMuXZVT9EWeCwUinfO7iqhv2B2JzgNQEVmuT4WpymFC%2BmZhhgHUhDscpFyFYbOwZGU4ue2AVSrre2cNbIQuCMDBIhIvm%2BdpgyXJP8Fgh0jmJpNnx3klPrcHjZdK9IBrVCmbT7BpcmzTS0RG43IqUoNDdnwjWFisUzTtfzCov%2F3FzEnbb5rqnlLvgET1IDJUbXyg%2B1mT3n03NbKrEGF0d%2Fuj6gX8qysPHY9MyM1JN630ueW0LtrdHDxEB5YTmlZ4Yl0Wg9dR1TuichOdHtquaBUWXdgOe6iZYudvjD6WGHIJgW3PAAvruWpRXkAn9Mv9AzVSoZ5vL4YmJVcNQxK2mqkzCoKSSyErdkZ%2Fg9GuBZ1jNhUg1ddx7LQdyXN2MMPq670GOqUB2mTJ2CbrCT8XVYvzDHhDbkfgJZq5dBdtup5XfFoTM%2FhhUFtRoqmCcfvBRa%2BjRqwKqNWcxyMNLvWLW8l4jiLYiXNsTRyZo%2BgtchMviFYzG0u1s3yzrcmVopoKWu2mmplpjphrJfxKcY95j1qaxAb5j1OPcOYgEC9oWO2JXwASmC6dTitYKE0YtZesVQbXt2bLjsQ5d0GWhMy3CEDAkPady1f37F2d&X-Amz-Signature=bad76937b96d7c7058a979cb9dc9a82d6be139b262cf220e9e3d9f38e34fd87c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAOEG76%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCRHf5X1ibbP%2B%2BwINQ0tOi4bn9LBjV9xG8BqucNIU7bwIgMvnJn9DrLxBe3wDdzcpSF%2BB86bgBuMzHkmOocbI9gZ8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDPKaL5sRUDKlo6UHwSrcA5WTa8HYj2T9syOeXYKLt%2Fiw31EWPM8sXUlCZ6hFLwvWlPopm1Ri358Z0j9w01Q30nDs%2FET%2BTfI4K%2B2vAbYAgTEKfDLIncSeWmGKKrG13cQaqcYfGS7RiX3CC9%2FWVuf2UVOm8dwDrn6EDiMi%2F0084HdjIPCgKf%2BRu%2F43F0I57EgV4H7u5SHq%2Bw%2Fs%2FnXmLdShm7db0aG6F3sZ1%2Fy4mEUKZPzZKR7xdkVkQfeiVK5aPEl2T1hkhJvkXyGl1XYGN02FTICuoflmnP6OoC8uZonAilwPEXdItDNA3QbvRVOnp%2FYqcBEYkmFaDZ3Meu0H8JNKpjU9SVDxS7wXRjTed1Q8HmsA4TKEAzFq%2Fvz%2FLl4VSGzNhM2hDbpkVPhU%2BXYisioDLQJ5JHvKxgl%2Fh9%2BnG%2BuohjfXT0iJaKFcJ5ATZkDx3I7WNXApXzRY7KYTYfzyQuNsOgk64dYCCR9VRgnxjdu57uJ4s%2FV%2BHRBoxjAHgYRIrBErGl%2F7t%2FXdhw63B8Kki%2BR8%2FYlQh6lJqjJq6dOL4nz1SArwxc%2BfXUuqW4NM6RryLtWXxXb0yeNGjBIOr8fRKrFx%2B3H1o0%2FO5URzO3TSw0dUZ44a49cPm%2Bpnj2F8r5ktCMFss0Huif1iL3ahTVNiMK6J7b0GOqUBDij7a2pRZa0CFnobuzxuHxhSetBS5CbHBWHrOzCqzRTXy8BtPbRM6yan3bFVV%2B0WyK%2FTn3vZt5oTEC1Ccodhawq1VfAIV6IAfoV2Rk3Tri7d9MCSKHnip90zEz1PjjjrbSAmOScJ7BPjcBMupVCu7sAEwHKx4kGrEEqmz0hRuQRaW0KoZ120cc3XOB%2FtzrG3KJqngidm2aliS%2FbHq8Nmc8pvejXM&X-Amz-Signature=00fb251af63ac6bb6c352666de0f823cd418747f1c44f904e3987ac65c6e9888&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QRD5Y6G%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHNNqeq9tEROdMCZL74t%2FMBLTc7h9j8p%2BkYKs%2B8fAuCgIhANdZo8KLyr0K3HzaiXv6CtFN%2BsKxIODd%2Bt07CWxigVB%2FKv8DCBQQABoMNjM3NDIzMTgzODA1IgyzfcK4x0Ggaqa81kMq3AMzoUeXb%2BfxN3LZlDlL0yZNWodHcGY2uFXyYuafmk19PwFZFyfIdgk9f%2FGli1g21GSKAoLzUEo2bu5kFlSfHtfH02GoEekVp78XvGdYiyBL5yjfYsDpvJkqxHw%2FFCLdFBBmRa%2BYkqI%2BwskLKDyqlBzfbmZ%2Br1rzR2Aud55%2BVIWCE2TyVnbjNbxWzpscI1k%2FdMA5%2F%2FAhcjfvhzLCh5Mvd3D4aVEBxMSA68GSucyzjFXnjnzjP1RNn3hBp3XKM3vIEWCZ2ABVDOL0SQddRCyKcuNfFZ7x6AubLM0rejeRo0vM1QwcuyqS%2BiNUGzarigtphC8tpagVZ3f8ECLly5lJ%2Bf0o0elMvXRWjVnSEKFXxytmz98ALI2vCoJUGy%2BolxRVcSfC8TS8QJz9ivEoLVjT1gFMpeWbLUyRcGrswPIIxh3hDjeAxphqTikffUUb4sY%2BtCsr1mEVOLZvnJ4PxUDWyBExIhfU9X%2FJaVCRuEyoUanT5%2BpmSOQ3DGaCeE2jHzZEdQvVUiDZWODoDE%2FFLdDlWmAMTnN%2FYLF%2BO7Vto3U398VQehLEJI2uxY2exeCCpb%2BkgnLKXILDLRwYyO2mKAxRL24ej9pkCXZABs7csEPuoD9wkgrAAFAH6HaOk4Ms1zDE8%2Bu9BjqkAWdbE16TjL%2BSQR7rndZM%2BOkdI7bUWq6HwEW5Kdh%2F5t5z%2Fvh2GlylXB0E5X3AXIe6J8hIumEOJIwB4%2BDnbxfrKT5CbtjQmE9WezL0HO9p54odWvNvreLLgKzvILpbffJD99If%2BFFdH%2FShWV2hBVckbPchPcsURgWlTaDFu3ZleQr5ymFsRuRFA6lSPCiYW05c6pPTncc3M%2BEm6UjjBSQvRqBwJ9%2BN&X-Amz-Signature=c63648cb668c082fcf4c9410746bf1705faed05eed166b4decc7b1ac384c6d89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
