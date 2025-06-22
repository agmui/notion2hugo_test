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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWPWYQ2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGAjggBYnxIygJbsg6VAxsn6r9Z6XzPh5YC%2F4ZqNf6fwIgIRLhvScR8awPF7UD0N%2BUDd2Ej8gimTLwzifv%2BDBMmnoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLDaME%2Bz%2BMYgGfLRircAyXC8EUdS49wI4DLiQ2AJNQ17NMvYf6Vx%2BmOvBZaa4ZaEhs4yElNiEKcyP3VeGECBXUh1pJ%2F2XEZsaaTFt6j0bGPU9W%2B8OTY%2BTIouQfPAg5m7CCgnm0hB9HhjUEKGyWzbGFNqYHcrsOpAM2us%2FzbQrqCUAYSzX%2FGw73Yal6ygTs%2BgDg1mQ7iorevv5fXOQ0%2BXrtBhlqsYL7iTwIyeXvwMvNPXVKNHS4J9HBSRSoHRTJpvizCE5An1FXPohwhg1tgBVULW1uFXuRD9MKYpw0OFzQYw0j1k4fCbSWXwYIiSYju3vVf89yuc3hX7v0uJ8JdBOsRmsEsBpju9Qrgnfrrs0LkrvhdL8UFRbA2gbcGpH4i5S9aHBC%2FIf91DvySxHApsOYWQben6%2BLg%2BSqp%2FPrZzsZfAMH%2FDKyECZpn3i9gE2QJlFxpFHeIVTvxbDuF5DWy0SWxlMHvs3hPT4T2cFyIwatq8qSX3w%2FUXQjhJxNRAQ0I6YzyZ0X4YmDyGhi%2Fi3SGss5XnmxPXrr2C54jCdAUDaRMBka2B%2F44eZ%2B3ODHdbu%2FfmW06k5Vp5Ws8n%2FlsV3a1d%2Bfd8VeqnUbeIM3ckGVGnnCdRftTq8uApAeA%2FucEAfFoQrilGTVR3JRQZF0ZMPas3sIGOqUB2IJRWszno73QBv%2ByaVfxVLFWwF1NgIbKdH3PJM9uUrW7CwFI2lVCHNmuDq9WxvhTPT2EnDxSSa5M0vJR6ar4aF1BI8cWCafPQodpxVyZTHajGfdr%2FnuWzFxCP7RxNMoV77oMo2cOY%2B3M5F2tnUBNasfPfj7kahN83mTVbjqbFzASXVwtQh0v2s%2Fuwb6Tc1gNYPVoX7h%2FaX%2BhAcBH%2BvAxAZSfv0Yw&X-Amz-Signature=ff88e6e71227a829a9a7d1dbbb5e0db114ca97e0f10771447efb8811a82bae01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWPWYQ2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGAjggBYnxIygJbsg6VAxsn6r9Z6XzPh5YC%2F4ZqNf6fwIgIRLhvScR8awPF7UD0N%2BUDd2Ej8gimTLwzifv%2BDBMmnoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLDaME%2Bz%2BMYgGfLRircAyXC8EUdS49wI4DLiQ2AJNQ17NMvYf6Vx%2BmOvBZaa4ZaEhs4yElNiEKcyP3VeGECBXUh1pJ%2F2XEZsaaTFt6j0bGPU9W%2B8OTY%2BTIouQfPAg5m7CCgnm0hB9HhjUEKGyWzbGFNqYHcrsOpAM2us%2FzbQrqCUAYSzX%2FGw73Yal6ygTs%2BgDg1mQ7iorevv5fXOQ0%2BXrtBhlqsYL7iTwIyeXvwMvNPXVKNHS4J9HBSRSoHRTJpvizCE5An1FXPohwhg1tgBVULW1uFXuRD9MKYpw0OFzQYw0j1k4fCbSWXwYIiSYju3vVf89yuc3hX7v0uJ8JdBOsRmsEsBpju9Qrgnfrrs0LkrvhdL8UFRbA2gbcGpH4i5S9aHBC%2FIf91DvySxHApsOYWQben6%2BLg%2BSqp%2FPrZzsZfAMH%2FDKyECZpn3i9gE2QJlFxpFHeIVTvxbDuF5DWy0SWxlMHvs3hPT4T2cFyIwatq8qSX3w%2FUXQjhJxNRAQ0I6YzyZ0X4YmDyGhi%2Fi3SGss5XnmxPXrr2C54jCdAUDaRMBka2B%2F44eZ%2B3ODHdbu%2FfmW06k5Vp5Ws8n%2FlsV3a1d%2Bfd8VeqnUbeIM3ckGVGnnCdRftTq8uApAeA%2FucEAfFoQrilGTVR3JRQZF0ZMPas3sIGOqUB2IJRWszno73QBv%2ByaVfxVLFWwF1NgIbKdH3PJM9uUrW7CwFI2lVCHNmuDq9WxvhTPT2EnDxSSa5M0vJR6ar4aF1BI8cWCafPQodpxVyZTHajGfdr%2FnuWzFxCP7RxNMoV77oMo2cOY%2B3M5F2tnUBNasfPfj7kahN83mTVbjqbFzASXVwtQh0v2s%2Fuwb6Tc1gNYPVoX7h%2FaX%2BhAcBH%2BvAxAZSfv0Yw&X-Amz-Signature=ccba39c59a5623ff93cd373eb73f1b7ddbcb8d6ed718540cdc93b8c7d2ce2aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWPWYQ2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGAjggBYnxIygJbsg6VAxsn6r9Z6XzPh5YC%2F4ZqNf6fwIgIRLhvScR8awPF7UD0N%2BUDd2Ej8gimTLwzifv%2BDBMmnoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLDaME%2Bz%2BMYgGfLRircAyXC8EUdS49wI4DLiQ2AJNQ17NMvYf6Vx%2BmOvBZaa4ZaEhs4yElNiEKcyP3VeGECBXUh1pJ%2F2XEZsaaTFt6j0bGPU9W%2B8OTY%2BTIouQfPAg5m7CCgnm0hB9HhjUEKGyWzbGFNqYHcrsOpAM2us%2FzbQrqCUAYSzX%2FGw73Yal6ygTs%2BgDg1mQ7iorevv5fXOQ0%2BXrtBhlqsYL7iTwIyeXvwMvNPXVKNHS4J9HBSRSoHRTJpvizCE5An1FXPohwhg1tgBVULW1uFXuRD9MKYpw0OFzQYw0j1k4fCbSWXwYIiSYju3vVf89yuc3hX7v0uJ8JdBOsRmsEsBpju9Qrgnfrrs0LkrvhdL8UFRbA2gbcGpH4i5S9aHBC%2FIf91DvySxHApsOYWQben6%2BLg%2BSqp%2FPrZzsZfAMH%2FDKyECZpn3i9gE2QJlFxpFHeIVTvxbDuF5DWy0SWxlMHvs3hPT4T2cFyIwatq8qSX3w%2FUXQjhJxNRAQ0I6YzyZ0X4YmDyGhi%2Fi3SGss5XnmxPXrr2C54jCdAUDaRMBka2B%2F44eZ%2B3ODHdbu%2FfmW06k5Vp5Ws8n%2FlsV3a1d%2Bfd8VeqnUbeIM3ckGVGnnCdRftTq8uApAeA%2FucEAfFoQrilGTVR3JRQZF0ZMPas3sIGOqUB2IJRWszno73QBv%2ByaVfxVLFWwF1NgIbKdH3PJM9uUrW7CwFI2lVCHNmuDq9WxvhTPT2EnDxSSa5M0vJR6ar4aF1BI8cWCafPQodpxVyZTHajGfdr%2FnuWzFxCP7RxNMoV77oMo2cOY%2B3M5F2tnUBNasfPfj7kahN83mTVbjqbFzASXVwtQh0v2s%2Fuwb6Tc1gNYPVoX7h%2FaX%2BhAcBH%2BvAxAZSfv0Yw&X-Amz-Signature=bf2b5ffd37cda2c1d8efd6d195637346bf3c1c4a4c7f4a4d5a0cf924987239a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSJTDFXZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGiPFSmcAL%2FB4o9gVLM2TUr4LbD2n2FD1AzqY5Xv5%2BwWAiEAwlHjGz2X5C3DHsn%2FknDS8J0728FjLEfaVNB7G5%2Fjg20qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH74tB0Kkgqb1aPKjSrcA6QT%2Bbp4%2BxjYGJMKJtMDbEXvOPJWENwU4QN53ZqL32SrTx3Y3YczUM9meuuE0Tm8UJXxXT3RNursWP0Q%2FaqRJYeOlHP3q5LGMEy9EH3sl67jvl8z%2FhHCckNWv5KRlSxR%2FhDPuGG%2B%2FVCiR3OPP4VGR67vbZNfz0FcDDVquZWygKIJd%2BX1N%2FIOjXMrnVz95TDT34mS3DuhwLbTyqY%2Fubd1lpQthN9TXIV%2FAjN8udx42I4el6yzrXInmF1fXKwOnrUr5abpKeALEbA06V3XWZoh3QKza4My0BU2qdqHAtjDBfmqqsGUhpUMr7pBUMde5zZw54OzIHTUFd%2BbjEjjnz4TAhpEA6x6m5rGgizKsCXQhCjg6YbT929PzO9eglV6hHDDgnsQwB9vfXybnpGpG7dXvp55%2BOoLSUaCDKltB7x0mhAxbp2JsbANCSDg0Y8tBH5vhJvVlandYKt5qWF6HCKz95NGRObr2mXOqZTcCkWVTpRM8cl7SrMj7H%2Bnt%2FxintF6ASBlNTHBrmeXnWUNyqPtQmTimj3A2My4pE56nl8C6oOtJbg1knTLrZKO%2BkBjbMb9jCuuhFGT9MDeyRpSOv4aIoCMzPJXLv6BQ266AEOUzFhzDmxvF3rbw8jJYr0IMOCl3sIGOqUB%2B8ZZmAzojNKSBXU7iceC%2FCunkBL%2B2g81FPINBQ9TJ02u0eTKzwtzsaoxtfX8fdST%2FdCy%2Fq96PPENlLu2eraXHRACqY2Y5vLeuWjGzx6hJMNzGXt0ebW16MXYCtmbxOQLyMYQMViNHqihRbO80abr39%2FvW%2Fs1jmVlWKP2QXHrshBeAwtaP6pl9Uzzp%2FdSkBUx9bWcE6cdVSWQ%2B8n5CXaaNjjiscRU&X-Amz-Signature=73420b0aff33facd386f40fd0750ae2480fc4bc2bccd26793a5224efb27c4d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T73KKJVO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC7HUvQ8VunUsDW1Dg6Jjl0rbpPlx9vZ%2FNTH9hcGJ23DAIgBDKCIAmigrJkptPF3mNAcalAQ8KjixrXnJE0QmB89S4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdkkQ8cymB6TxYFLCrcA0ey4UBy0zBOPndrca5nKknJksn5NryEIAq2JdmojBcVnAzG4BkOAcn3mIlqcj%2F5sK0nr81mqmuLffoSH%2F3d%2FJY21SYBO3Iz%2FasCQwBNjb7XM6oPq2NCTdKUv0YhflL%2BuxSfPrDTC6qxvUb9Zincyajgue7uJuyT0BetHtHweUnhB8PV9awjKuxJq%2BygWcDqe%2BrEXWNZHOjsh06z1BNPJ7rjEkzN6vZgyIP1SQ%2FS5pGFskSsG%2F8XZDE0jOLYjIq6eexsElTYjp8z0Mlm4Rh8AoPZxdI8aKTHLQhwHYZlpm5RxkCgwTmgpe88QWnRviwdYMJP354hvNZIMri2h3a5BbqmC66grHRHs6CxVLAcb2in%2FuLX6Xyh2KBkRSMuJ%2Bxg9w4dZ1vAf36masj6Z0PtdjCiZS89C61GLosOybRKFVhSD2rQCAsIGu%2Fyv4PjJa%2FgxQ9HHSvzM5bpprlyRJs6nMmYzSNZCYGQdLbJDeNMjb20GPWfRPXJ2HHBMUAxulsJPhJV4EpC9avVrR%2B7SMg6vyigVCCkfGZhU6018kGH1ouX0NMqeKjDyRNB%2FhR%2FSgEOkjI3Nsji5b%2FnoYwsNI9dm6hTSGASDDfzmLF0n9LAp7zlTYf%2BB2TrKgHizF7hMM7p3sIGOqUB%2FYRQDyLZSBzPdCyf45eDlmJj0sc5AHv3xV9S0N7oSuaEiRvVetRQyhLKdF1OG8bLXtt85w8rN%2Bdo6zbMM6a2MjzVSgxrnkj6O6qcndmMWYtRefllqNxw6if4BvcwXGEmwznO%2FyhUsTLDbqhoYeFsMjs1XtheLwU7wqe1MdJG92sFGsfqxnmpjp8vR7wcv121tKVI7gh8diTWsAZsB9dJ0LbyfvJu&X-Amz-Signature=1843cd1602c84b5cc8605a8ed6e3ee19070887c2a04514d9707490ada511d127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNWPWYQ2%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGAjggBYnxIygJbsg6VAxsn6r9Z6XzPh5YC%2F4ZqNf6fwIgIRLhvScR8awPF7UD0N%2BUDd2Ej8gimTLwzifv%2BDBMmnoqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLDaME%2Bz%2BMYgGfLRircAyXC8EUdS49wI4DLiQ2AJNQ17NMvYf6Vx%2BmOvBZaa4ZaEhs4yElNiEKcyP3VeGECBXUh1pJ%2F2XEZsaaTFt6j0bGPU9W%2B8OTY%2BTIouQfPAg5m7CCgnm0hB9HhjUEKGyWzbGFNqYHcrsOpAM2us%2FzbQrqCUAYSzX%2FGw73Yal6ygTs%2BgDg1mQ7iorevv5fXOQ0%2BXrtBhlqsYL7iTwIyeXvwMvNPXVKNHS4J9HBSRSoHRTJpvizCE5An1FXPohwhg1tgBVULW1uFXuRD9MKYpw0OFzQYw0j1k4fCbSWXwYIiSYju3vVf89yuc3hX7v0uJ8JdBOsRmsEsBpju9Qrgnfrrs0LkrvhdL8UFRbA2gbcGpH4i5S9aHBC%2FIf91DvySxHApsOYWQben6%2BLg%2BSqp%2FPrZzsZfAMH%2FDKyECZpn3i9gE2QJlFxpFHeIVTvxbDuF5DWy0SWxlMHvs3hPT4T2cFyIwatq8qSX3w%2FUXQjhJxNRAQ0I6YzyZ0X4YmDyGhi%2Fi3SGss5XnmxPXrr2C54jCdAUDaRMBka2B%2F44eZ%2B3ODHdbu%2FfmW06k5Vp5Ws8n%2FlsV3a1d%2Bfd8VeqnUbeIM3ckGVGnnCdRftTq8uApAeA%2FucEAfFoQrilGTVR3JRQZF0ZMPas3sIGOqUB2IJRWszno73QBv%2ByaVfxVLFWwF1NgIbKdH3PJM9uUrW7CwFI2lVCHNmuDq9WxvhTPT2EnDxSSa5M0vJR6ar4aF1BI8cWCafPQodpxVyZTHajGfdr%2FnuWzFxCP7RxNMoV77oMo2cOY%2B3M5F2tnUBNasfPfj7kahN83mTVbjqbFzASXVwtQh0v2s%2Fuwb6Tc1gNYPVoX7h%2FaX%2BhAcBH%2BvAxAZSfv0Yw&X-Amz-Signature=acce3d99d9784099195ca6903ec191453b9e9723333b021898fecfc8028550fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
