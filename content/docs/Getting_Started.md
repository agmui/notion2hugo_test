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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVW7S2RG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDAo3CnIoJINbPh%2B70qdpaNr1O3Z%2FsAh4kPlTeGlOC1tQIgQwBVjD9XjcU32nxW8vzqmodF1lgtehAi%2B8Io5TQJTKYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqK%2B1xDf9sFYMrqircA1DRRfPpUA0z1Zzb311ttXrnvygNOa7EDntK0V4RnFPJw26NC6VRMlOVMNizmsjDsHwkPMcdeElAOxsF8VbUAzeZHb6Sxbb86ARM4bOHQeIXpF7Rx%2BFyK1pLIZUOQRhVKtWxgB4EkEwsS0wJ%2BCVJqT1au13xsFbA7xEZyRqhDYtlaAf2sj6pGKdZ4mIx%2BFBbbGvwK%2FncVYk%2BItnch8JwR41uEVSf4ERp5ZVkFvSlrqp6hdi9OazZ2D8JIuAsz9%2BW8dicq0%2BP%2BCt1%2F4QZ8RyA0YO5YgOAb3Hw103teVfFaluyjkhFMiV69w8iox%2F8zvCsWH7yyMx9ZNZ1ahxvMj%2FjQjelWaGN2EDUyiqV9npZ4lglobPw5mftZ%2BEDogQNIsAZ2SMNN0XlecnW0ZDsi3ELGyWuE5HpEhYWdrcPopbDvx4ay128a8uZIhE2spItfR4YMSPTvb%2FZCjFp31cQoxorgkm7EpFKuCLO%2FF2bKNS9eM9tv%2FlSaBPt%2Fbtfd4WuLDlPJgYx2IAna4U0364PcnjHDxus%2B9T9wh4Fut4RE0dqIuLnvcaxIDPZ6ExvCd1i%2FK5faS1CYe8FhRREiwQRqO4pROkijooMtf01dw6k0HzqLjZhpY9DLEDyB3E%2F%2BmNZMPnmlMAGOqUBCJNW2VAKhrQcF6lwPYnwfZZfVp4YxgbL0%2Bvw%2ByszZYbuUUfRQElYWzPS5NuMUVCAB%2BvbfIfAF%2BqZGu2h9TbqNBN1t0ULC9Oo90mXil7jWmTxfWmDy%2FKD7B641XhExK1NZpmSK00szkNz8B6bQ8xpjwPVEZI4ZRUbcug%2BoQm0ra5hsFN7lFFISUyevD%2BotfqeNCc%2Bqcx1k32myFUfGTgEe3L99jmY&X-Amz-Signature=b0a7593e9d4d390dca0db85df96e3098dbeb7422523d5a0eb2d92861e7ceb2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVW7S2RG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDAo3CnIoJINbPh%2B70qdpaNr1O3Z%2FsAh4kPlTeGlOC1tQIgQwBVjD9XjcU32nxW8vzqmodF1lgtehAi%2B8Io5TQJTKYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqK%2B1xDf9sFYMrqircA1DRRfPpUA0z1Zzb311ttXrnvygNOa7EDntK0V4RnFPJw26NC6VRMlOVMNizmsjDsHwkPMcdeElAOxsF8VbUAzeZHb6Sxbb86ARM4bOHQeIXpF7Rx%2BFyK1pLIZUOQRhVKtWxgB4EkEwsS0wJ%2BCVJqT1au13xsFbA7xEZyRqhDYtlaAf2sj6pGKdZ4mIx%2BFBbbGvwK%2FncVYk%2BItnch8JwR41uEVSf4ERp5ZVkFvSlrqp6hdi9OazZ2D8JIuAsz9%2BW8dicq0%2BP%2BCt1%2F4QZ8RyA0YO5YgOAb3Hw103teVfFaluyjkhFMiV69w8iox%2F8zvCsWH7yyMx9ZNZ1ahxvMj%2FjQjelWaGN2EDUyiqV9npZ4lglobPw5mftZ%2BEDogQNIsAZ2SMNN0XlecnW0ZDsi3ELGyWuE5HpEhYWdrcPopbDvx4ay128a8uZIhE2spItfR4YMSPTvb%2FZCjFp31cQoxorgkm7EpFKuCLO%2FF2bKNS9eM9tv%2FlSaBPt%2Fbtfd4WuLDlPJgYx2IAna4U0364PcnjHDxus%2B9T9wh4Fut4RE0dqIuLnvcaxIDPZ6ExvCd1i%2FK5faS1CYe8FhRREiwQRqO4pROkijooMtf01dw6k0HzqLjZhpY9DLEDyB3E%2F%2BmNZMPnmlMAGOqUBCJNW2VAKhrQcF6lwPYnwfZZfVp4YxgbL0%2Bvw%2ByszZYbuUUfRQElYWzPS5NuMUVCAB%2BvbfIfAF%2BqZGu2h9TbqNBN1t0ULC9Oo90mXil7jWmTxfWmDy%2FKD7B641XhExK1NZpmSK00szkNz8B6bQ8xpjwPVEZI4ZRUbcug%2BoQm0ra5hsFN7lFFISUyevD%2BotfqeNCc%2Bqcx1k32myFUfGTgEe3L99jmY&X-Amz-Signature=36c20277c7c76ad181d1177694c00e5462f099f18ae525c931a19e07df9f984f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4IPWAFO%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCIdjNVk88rt3CsGs%2BnBURpJGG0Wj4XQf7HtH4ZJUJxvAIhALGCgTGORTYJ6yb1%2FYjmtzt1CcuZjzFFdaxzO%2BPcncCKKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7PkaOm1P8FOKr%2FHUq3AMd8MqmjAa7jKyYBaVhjCHJU5dLbw%2FnmjgwD%2F6HQkrcQ0EUfepM1SuUmmLbVVKMyhBD79W4HqTgyRtHIeQrVS78IkdsvAZ9%2F0aWuCZeV5lIkhoAeOlhq8dRhI5SiCk1yvQL7PiqLnvL5gfSWAMCBbdRBGfMfiP3C01VGVnetoqY4QGM7Ep4WmFgACkd4CDHlkZLqUPRnDGzahCOLdUfgXCL7NwxZaHpgn22HVA9wKEkxznZgqcZK%2B1%2BX7SHtUHrUU20uHx2KTz1FO%2FMnHEmmi%2BI7PaaXAyLC8DtqQIEw7f76WvMWmLiDr4kKxrBPKnpF4PqZ%2FIrHZhyppqJNg2VIpfue5fJAz11aVTu0JkLGaEfXiaMwfxT9YU8o2cBWgsut0bMH3OGihdSmwn%2BZH5BpHEB%2F3frA8qOEcHf1F7PLQiuHMcrBJgcGzvkeFLv6wua%2FIPensDFTNxjtT2OrKdxfUztrLi3Zn0%2Bn7I7AqjhEkIWUgCBU5UwloREoajgIIr7JgwAhLXs%2BJurrKbgesc3NmnOLBAoCKP%2Bjh0d4yV%2BO4zRjMFtixkc2W3U8unzguOp8qkF%2B7IRqc%2FyYL2bGoiBRMk2QHG7YT3K5Zpq2NI%2Bik2tDscuJQRsAjQ9zxQ%2F5jCr4ZTABjqkAdhsXw2ugAc3KDekC98RQKTH6FXgOrhoQ0PXjV1Xhcmp%2BY6xphvroIW9pJa425Ym3llGvjkpbcSzGnXgT5H7sbdnKar%2FnxARBn1dKdilOj00l8DRKWS4P%2FDrXz4DLUXQhByG3mEc8lfXDw7M1GkNIsUMmuF9tmKFKMddS6ytGD%2F7ThBbsByWNiP4SAVIy8hQOOs7FU5mAD6oHHh%2BVAeWJe3xnOAc&X-Amz-Signature=5bc52c7ffaff87562a66282f602c30118a699bbe4d3c2351bd74446010e6e107&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJPAU2I%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCUHXMM5%2BpxZuZG0wlBzNrxbllNk21UO7KHelDm5NWO0gIhAOOuXS7vFf6n8uG5gKVeLh7gHU5noYXFB1LG6A5fvB1FKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNmkVmk7H1bE0TyNMq3APaTKyjlU8yrfMSzO5BJMXvncke7selSHvMJNXPa25jx198XdJUeFZjZW2mOxVGdnpq4UP94aLIzxmp41UuYdflaEatPqM%2FtZoqW1NMf2szO%2F6hQfuA9fMDDu6%2FGkOhn%2FDCsRXT%2F%2BKCcPMFF40bF4bXI6SpRxKtc3m%2BGV5v5XkcYHIqbM3GC6Br3i666i%2FsSK8Oqoz4uG9fbdRjumLcXB0Ws38jfnCBLedS5wYPMIhrgJRbbSNvU%2BgKZkqvhsniFnmPk63%2FAreZ49EoLlFr2%2FUqwuFrYXIgq8Z4yp6Xabn85JKpVwp%2Bemq9DY9Bqv6a0vnoKoLN747anI1359C1WXT3RStW6gp9ZY9OqzqNm73bM0e3daueM%2B5m8RPu%2BiACnQOMyKDvcZIGDGUea%2FA0d4AGLWJ7lZuhsrBY8XtS0JAk11qmDmjSBmAWz88LSk7yuGeXPX1%2FU%2F%2FqbrdFDvGUix9jDKy1Z3JKz5uMVwqKFgGn6mvaAWOPbikJBdsP%2BChoZ0%2FNadvrxbbeNVes6lnLnr4N0solNmQwVpypyyzrr4tlStAYSby5VchDDSzL5WHactXfGpHwxrgQO30ZmeTpBD1BUSVRFgUPOcf93AJhb7HxHr834c07XKGP1jcjOTD96ZTABjqkAW9tdjzly9SHEN%2BtSb2qXwyws1DBOBunBflcygl0RLBm0QmfiANshAz1uYmwh3vwgGJs3JCnFmrbF45Ltuiq90GLUq4ewyYt%2BZVSzzTTbXr7RuSHTwseirIFNd6iMHXjDT2KHwDFK6XWhGv3Lx1vs7rPo4lBA9H15w9kazBCUYPjFv62LmeFfG4xPUhmqvStAfPXI0Tn62ETIjG7WioKs9pWNYVM&X-Amz-Signature=5085e000d12bb070013cfdf59b7bdd5cab4a27950e8ab9fb00a766eae146d254&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVW7S2RG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDAo3CnIoJINbPh%2B70qdpaNr1O3Z%2FsAh4kPlTeGlOC1tQIgQwBVjD9XjcU32nxW8vzqmodF1lgtehAi%2B8Io5TQJTKYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLqK%2B1xDf9sFYMrqircA1DRRfPpUA0z1Zzb311ttXrnvygNOa7EDntK0V4RnFPJw26NC6VRMlOVMNizmsjDsHwkPMcdeElAOxsF8VbUAzeZHb6Sxbb86ARM4bOHQeIXpF7Rx%2BFyK1pLIZUOQRhVKtWxgB4EkEwsS0wJ%2BCVJqT1au13xsFbA7xEZyRqhDYtlaAf2sj6pGKdZ4mIx%2BFBbbGvwK%2FncVYk%2BItnch8JwR41uEVSf4ERp5ZVkFvSlrqp6hdi9OazZ2D8JIuAsz9%2BW8dicq0%2BP%2BCt1%2F4QZ8RyA0YO5YgOAb3Hw103teVfFaluyjkhFMiV69w8iox%2F8zvCsWH7yyMx9ZNZ1ahxvMj%2FjQjelWaGN2EDUyiqV9npZ4lglobPw5mftZ%2BEDogQNIsAZ2SMNN0XlecnW0ZDsi3ELGyWuE5HpEhYWdrcPopbDvx4ay128a8uZIhE2spItfR4YMSPTvb%2FZCjFp31cQoxorgkm7EpFKuCLO%2FF2bKNS9eM9tv%2FlSaBPt%2Fbtfd4WuLDlPJgYx2IAna4U0364PcnjHDxus%2B9T9wh4Fut4RE0dqIuLnvcaxIDPZ6ExvCd1i%2FK5faS1CYe8FhRREiwQRqO4pROkijooMtf01dw6k0HzqLjZhpY9DLEDyB3E%2F%2BmNZMPnmlMAGOqUBCJNW2VAKhrQcF6lwPYnwfZZfVp4YxgbL0%2Bvw%2ByszZYbuUUfRQElYWzPS5NuMUVCAB%2BvbfIfAF%2BqZGu2h9TbqNBN1t0ULC9Oo90mXil7jWmTxfWmDy%2FKD7B641XhExK1NZpmSK00szkNz8B6bQ8xpjwPVEZI4ZRUbcug%2BoQm0ra5hsFN7lFFISUyevD%2BotfqeNCc%2Bqcx1k32myFUfGTgEe3L99jmY&X-Amz-Signature=5822fb73a1ddfcfcccb42c0e60233a7a50f14b1e6d7f9375cda782f0909fb09e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
