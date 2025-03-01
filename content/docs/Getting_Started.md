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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBRKKROH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH6csPcEE6mH8glN6F8H1vWYS%2BUXjOzadGkC6lrywedPAiBjcwME0tDJyKSEQszDpgv15yIY%2Fo93EU%2Fpq6q8WdzWnCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeN1zZw371xWOplY7KtwDqXi5GIME0Cro8QRORzK%2BscmZ3HrdZ%2BTaq4o6ZpGu0%2FsX0GsGazNuHbj14vazxQI3q%2Fx8sdsfmrKbAitcIqDU%2FNjJIrBqa4foQFtYDbYKQQC3q%2FFFZL0iPWjJWEYpu4GzXljSLpn1Uc2dq8T9Rp9sgMl4EUMWfsY4FlDZpTqwu%2FICX0anjuVGcih%2FfU%2FuEGnJ7dFjONjMfY4Hsl%2BkRxRlcZZcfqbhC9RGUPg0MHpTvFOqyzH5bcQ3VJw4kEf%2BlBH8iZ7SX%2BN1LmL9fbN%2Folr8H%2BfNfoWdMhMdeteLPqGqSxMrtWk%2ByRHKtHXL82fk%2BXBI3XdHuUhnX0U5KL4Is8nmVFpQjzWb9Y95UrLecvkMgteaEscuFTPjImqHhnloWtCUJHtwe%2FUpX9hWo%2Bya7W1ucUXU8HRdzqDCWO8ghlPL0n%2FzwAGG9ND%2FgcZM%2BGftgJpEI6z8ZHefAuKgHWwlO5BDMtEx5yNcEeI7l1y687yITJ2boKmp8ltAfMKI6lQqpELYplLgQx%2BNdyd3qmx7WoAwUL2vboS6db%2Bg5Q09sV%2BlkmTClDsb9mzPZcGZZnbqNxY%2FMciYOwG%2Fzt1Zo4tMBst8TVHuusOT%2FyVezpGA7hjMaL8ItfF%2FqOOG4nCQe%2FkwgMeNvgY6pgGnNs0mHE6h%2FE4quZpgOtuJU7G%2B%2BWZepbwgoYmiNHAxPCaEzO%2FOakSQDmF3EdIpNPoRb4L6%2BC3mgHvp%2FcCElP4nEPToWu7IriFMftO0UfsZ60MK6KTR0iPFuaAgsTUWBBkRkoVwlVOfwkdxLqyXLyWQ%2BbnkL8KyL2UMx6joUanBF4NwzTT4ea3%2BbJ%2F8Zw9Jq95f5Ij2f64%2FkxNJ%2BxPRADobiShfLv4W&X-Amz-Signature=6b313cc624a3042f8441f4d8880903519db1cf8cb3c84ae11df544b7f98e6f36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBRKKROH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH6csPcEE6mH8glN6F8H1vWYS%2BUXjOzadGkC6lrywedPAiBjcwME0tDJyKSEQszDpgv15yIY%2Fo93EU%2Fpq6q8WdzWnCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeN1zZw371xWOplY7KtwDqXi5GIME0Cro8QRORzK%2BscmZ3HrdZ%2BTaq4o6ZpGu0%2FsX0GsGazNuHbj14vazxQI3q%2Fx8sdsfmrKbAitcIqDU%2FNjJIrBqa4foQFtYDbYKQQC3q%2FFFZL0iPWjJWEYpu4GzXljSLpn1Uc2dq8T9Rp9sgMl4EUMWfsY4FlDZpTqwu%2FICX0anjuVGcih%2FfU%2FuEGnJ7dFjONjMfY4Hsl%2BkRxRlcZZcfqbhC9RGUPg0MHpTvFOqyzH5bcQ3VJw4kEf%2BlBH8iZ7SX%2BN1LmL9fbN%2Folr8H%2BfNfoWdMhMdeteLPqGqSxMrtWk%2ByRHKtHXL82fk%2BXBI3XdHuUhnX0U5KL4Is8nmVFpQjzWb9Y95UrLecvkMgteaEscuFTPjImqHhnloWtCUJHtwe%2FUpX9hWo%2Bya7W1ucUXU8HRdzqDCWO8ghlPL0n%2FzwAGG9ND%2FgcZM%2BGftgJpEI6z8ZHefAuKgHWwlO5BDMtEx5yNcEeI7l1y687yITJ2boKmp8ltAfMKI6lQqpELYplLgQx%2BNdyd3qmx7WoAwUL2vboS6db%2Bg5Q09sV%2BlkmTClDsb9mzPZcGZZnbqNxY%2FMciYOwG%2Fzt1Zo4tMBst8TVHuusOT%2FyVezpGA7hjMaL8ItfF%2FqOOG4nCQe%2FkwgMeNvgY6pgGnNs0mHE6h%2FE4quZpgOtuJU7G%2B%2BWZepbwgoYmiNHAxPCaEzO%2FOakSQDmF3EdIpNPoRb4L6%2BC3mgHvp%2FcCElP4nEPToWu7IriFMftO0UfsZ60MK6KTR0iPFuaAgsTUWBBkRkoVwlVOfwkdxLqyXLyWQ%2BbnkL8KyL2UMx6joUanBF4NwzTT4ea3%2BbJ%2F8Zw9Jq95f5Ij2f64%2FkxNJ%2BxPRADobiShfLv4W&X-Amz-Signature=595d845e50fb60dc83449f219e84282d785553407033f0600b1a27ff35b508be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VQRAJI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEyvAJQb4EsVxeCBiloe2jSC1qzOTLyvXEs8vn%2F1Ef7IAiBXRuqjOMKFJfs6IydfGePVfKMp6KSq9MZ49rl7INhtNiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt9jwSXpMbbgizuSPKtwDvolJWq20EkfptoS%2BGYVq6oys4nREzCzqVvgYzWLecaPTEMsxdtjst0NRkKh8HluDnO%2FI6uXGAc596Y4C9kmOIGWMamyPX1stHJmI0vULiwnmQJLV8s1wV7AYUvij9tFaYkgNrEnAMjbr49chGHShZFxuG4ECr9c%2B8weLOGwhR%2BIXtRKxBpqlf1DUBUDe8V%2F%2FnVxkDx36o4VEYme33ILzJVlyuRq%2BEthwJzaYXsbHrqOxufjEEJTjhfmg3LedRxdZajiKtljR%2BpgmVSn1itSlq%2F3ze1M%2FALHmOQ2%2BFD5%2BI2Z4ebnKbpifGbVoVE3osEfovsnF2F1xNG3fEim7kr3gwwaVErw28u76Bo62nME58zECnNhIrXQ80pqW%2FkuOWqE3MD0yR5sGvqm%2Bc1PKSdbt1aCEpdFLeKbUuhSAHbY7820U6NC4uGXNlhXGLl2hNMg8GLOZTi08ixk%2Bk6Mqbv6BMgelqcBQ1WCe8NyM8BvC14QGpbfAvro1sXTO%2BqYAY9LNJxNqOW0LKW%2BtwgpuMu1wKsqMz7dtkXVfJXbpee14rCcuBwu5KpWlTBGf4VF%2FOje14gEBlTO9qkRlnhUL1K6nPXoVQ86SR%2B2mn0WyDgE3irbZWDfcoJTSK1JAc7AwgseNvgY6pgG3dIk07%2FU6Jv0fcxAK8yQUkUY7O1uHdd6PxyE4LdGKbY%2FjbqPEnHTdIydlN64%2B683KASBrVfCndN5S5jIBa4xZF%2BkgJrlhiXkh6vM7Lm03JPOz0EGZq%2F%2BYgNRvKC5NhcRyMNxhoB%2FIC%2FbTanJL%2BJJqoUSBzOdBwiwZKVoN1YobCJjYlruOYF81yqqMiNDd9QuKJPCPMf%2B6gNkXV2j4%2F7V3R6OGnGPM&X-Amz-Signature=4ff30cd4ec219ae99e0a1297718cb6f7eb07278ed520c8df91d58e05f34b38df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAAP2WZ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID1CkEUc43TIw7rUIThjB%2BUGU3SK6Ha%2FjpAKmcrG8boBAiBeP%2FrGxg6NGqbCKtFI7paK1TN9NkP43iUvLdHDnJe7qiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbBNXiseDgi%2FM6hSKtwDxnhopZZA8tMUviBAZj%2ByeIVODiyi05Kvi%2FGUxn77tI2xQ5MdeAFmTVIpnmksyI4oyovE2%2BgFMEMtoc%2BMPTeN8u21aetpSsW5E%2F36YQTWvEOR%2FHPH3C4iTw2kexRgLPTQbsYm8bSDwm8K5G6hmwz5wpSKgVjk6nrVDKwsVt%2BCM3i9%2F4PrOP4LFx%2Bk%2FfZFeG5%2B8rxUrINvYCG1DTwwFTIhufa4a01SuhFbS%2FTH83hkX7CtcS0ptcUYTRGSDR0Qg%2FDSgup9g%2BfeQfQfC0%2BM7rntDKWC%2Br9LTlsK82PwUlg83%2FN4kA%2Bx0iOw2WoUY%2FohOXaDrprru9L7EoSQzbf%2FtEeLEmoQgm0CSecDyXwDdiGE79ShV4ofE7TiBKlGbS64X53EfMuvYXgOYWFipcKbyXSJwC8DxyViqbh9Cd4aOOSfqd6GYFj2y7mZ8Fy9FVdrk5ZKOCEMdI6vW3TkbpEBbFeNcKp%2BGXqTvkWoKvQmDkRLtrLze0%2BlBGzLOGaJyYf0Q7VnR4Z3irpnaXcwr3nJPinkR6u%2BDBBQkqajMNuRJLCg9zQdCIliDQW1WPde%2FRO7qQC3VKy3c%2Byadh5VOb29DwoZ%2FKuLgkxeIUXvywsbQ4I3L3B6nCw5ynnN2Tq2diYwn8eNvgY6pgEJeqh0IRrbZec41mI8QAYfD7%2FtxYVNrvOFXwRReoazo7S88VdIE%2FC7gGkcyM0aIHoFfdzpLHCidXrAUQVzkSjMabdjv%2B7PnOS2PNdpoZTw9NS0i8fhcLv65VYKCn39K%2Ba0Gyh3ZgKyd4%2F6On4m07rJqxAeua2BCqrYp3kkLSWZ4J6mWkGR29BcVKfLUTP444hk5VPwwdiI34MQ7ossc6wt05BSEb8R&X-Amz-Signature=0a3a59dd4a54d80cf1766b1afc919dc78642d97179fb74ef4f60bea982ddcaac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBRKKROH%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH6csPcEE6mH8glN6F8H1vWYS%2BUXjOzadGkC6lrywedPAiBjcwME0tDJyKSEQszDpgv15yIY%2Fo93EU%2Fpq6q8WdzWnCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeN1zZw371xWOplY7KtwDqXi5GIME0Cro8QRORzK%2BscmZ3HrdZ%2BTaq4o6ZpGu0%2FsX0GsGazNuHbj14vazxQI3q%2Fx8sdsfmrKbAitcIqDU%2FNjJIrBqa4foQFtYDbYKQQC3q%2FFFZL0iPWjJWEYpu4GzXljSLpn1Uc2dq8T9Rp9sgMl4EUMWfsY4FlDZpTqwu%2FICX0anjuVGcih%2FfU%2FuEGnJ7dFjONjMfY4Hsl%2BkRxRlcZZcfqbhC9RGUPg0MHpTvFOqyzH5bcQ3VJw4kEf%2BlBH8iZ7SX%2BN1LmL9fbN%2Folr8H%2BfNfoWdMhMdeteLPqGqSxMrtWk%2ByRHKtHXL82fk%2BXBI3XdHuUhnX0U5KL4Is8nmVFpQjzWb9Y95UrLecvkMgteaEscuFTPjImqHhnloWtCUJHtwe%2FUpX9hWo%2Bya7W1ucUXU8HRdzqDCWO8ghlPL0n%2FzwAGG9ND%2FgcZM%2BGftgJpEI6z8ZHefAuKgHWwlO5BDMtEx5yNcEeI7l1y687yITJ2boKmp8ltAfMKI6lQqpELYplLgQx%2BNdyd3qmx7WoAwUL2vboS6db%2Bg5Q09sV%2BlkmTClDsb9mzPZcGZZnbqNxY%2FMciYOwG%2Fzt1Zo4tMBst8TVHuusOT%2FyVezpGA7hjMaL8ItfF%2FqOOG4nCQe%2FkwgMeNvgY6pgGnNs0mHE6h%2FE4quZpgOtuJU7G%2B%2BWZepbwgoYmiNHAxPCaEzO%2FOakSQDmF3EdIpNPoRb4L6%2BC3mgHvp%2FcCElP4nEPToWu7IriFMftO0UfsZ60MK6KTR0iPFuaAgsTUWBBkRkoVwlVOfwkdxLqyXLyWQ%2BbnkL8KyL2UMx6joUanBF4NwzTT4ea3%2BbJ%2F8Zw9Jq95f5Ij2f64%2FkxNJ%2BxPRADobiShfLv4W&X-Amz-Signature=6658fd16766473ecc74767656cc87af94141a7cbf2a68def1124232a862a0896&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
