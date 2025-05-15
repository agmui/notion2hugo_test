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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOTJWSZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDF%2FPrlsJySxNmUtqo18VKLNxAbcwJm5euddZO4pRAqqQIhANJ0jOBKtGc6UPxJUTykn45ECqXpu%2BSeuRuKOiPExSbMKv8DCDEQABoMNjM3NDIzMTgzODA1IgwdEf%2FrKXAcaepNvF8q3AOkgFO5Kkwam0BesmC7jo020%2BiUP5hmR6%2FMcko97sw4iiiqr8HLabvDhvQqJcV79T2Ki59Y2r97VbxRFGyeKFjwwa5OFUaoKBU6r3HzGWa%2FIe73NzPthIZTpO67g%2FsEgzxDAUXZV73r%2BLDYjetVIMsWZ4a6hCe3xRw7Srr%2FrLrKVYO%2FzMy6gaINt758%2B0Juaky%2BvMrucVqG6LMdac8LIBNkOCouCjQowIPgyr1kWBgO3pGwC389QWlQgfZzenBBLwwG3o%2Bad0Nxo2018AOAarbzHyd4wcOiZY9D7M5IWw3ivkfayJ4iyJTCDxx2Y2O9FH%2Bbyrpn4frnlChfcDldGyWVYByEaN39N%2Bx4d3liMq19grjz6BLR1MFA1rkJ8kSiazuROafNE9%2B8EKDK6rY8jGHau4a75PosR4QGbUhzFQLv0tQ87g0VXJgaAGskqVzK3IUnUSBx5z8dH%2FNYKDWVnIFrBi%2BEc%2B7dUgeeWe5m%2FSwHUtg4VKluTP4PRsVza0DoqjioI8fFQrEQIPYpHaYRjAi4TAo1VOeN%2B8lqwr5pSQpEp20b7TIjsKYdkPxlWpVe8%2BI0w4Rpoz5QURBZrgogXrskg0LVIEsPnQzNdcRafjV8AdsCMuEBubE9BirNaTD%2FkZjBBjqkAUoEcYmKeXwwt9Yp4sXffpGs25Q%2BoGhhGEMPpyqS8YRm4S5H6HFBNgQFIT4W6em2gzVTW%2Faoy30OK4f0Qlxw5%2BqE4ezX71Gte1NXUBbGSIYyL5GFKjS9nqbeiUyHSILcaSmU4Km8HEwZ7k2yHTt9xxE4MZ%2Bq9yQQz17nyGKnhDdExO13iRUm%2FzjvsLj1Pi05ZeCIMY76STXNQe2JUaK5Nxdhnjzq&X-Amz-Signature=e28d4ce4dfc2f4d589bd8a697ce98e939b48546a4f6f40cb924b3828c14506f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOTJWSZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDF%2FPrlsJySxNmUtqo18VKLNxAbcwJm5euddZO4pRAqqQIhANJ0jOBKtGc6UPxJUTykn45ECqXpu%2BSeuRuKOiPExSbMKv8DCDEQABoMNjM3NDIzMTgzODA1IgwdEf%2FrKXAcaepNvF8q3AOkgFO5Kkwam0BesmC7jo020%2BiUP5hmR6%2FMcko97sw4iiiqr8HLabvDhvQqJcV79T2Ki59Y2r97VbxRFGyeKFjwwa5OFUaoKBU6r3HzGWa%2FIe73NzPthIZTpO67g%2FsEgzxDAUXZV73r%2BLDYjetVIMsWZ4a6hCe3xRw7Srr%2FrLrKVYO%2FzMy6gaINt758%2B0Juaky%2BvMrucVqG6LMdac8LIBNkOCouCjQowIPgyr1kWBgO3pGwC389QWlQgfZzenBBLwwG3o%2Bad0Nxo2018AOAarbzHyd4wcOiZY9D7M5IWw3ivkfayJ4iyJTCDxx2Y2O9FH%2Bbyrpn4frnlChfcDldGyWVYByEaN39N%2Bx4d3liMq19grjz6BLR1MFA1rkJ8kSiazuROafNE9%2B8EKDK6rY8jGHau4a75PosR4QGbUhzFQLv0tQ87g0VXJgaAGskqVzK3IUnUSBx5z8dH%2FNYKDWVnIFrBi%2BEc%2B7dUgeeWe5m%2FSwHUtg4VKluTP4PRsVza0DoqjioI8fFQrEQIPYpHaYRjAi4TAo1VOeN%2B8lqwr5pSQpEp20b7TIjsKYdkPxlWpVe8%2BI0w4Rpoz5QURBZrgogXrskg0LVIEsPnQzNdcRafjV8AdsCMuEBubE9BirNaTD%2FkZjBBjqkAUoEcYmKeXwwt9Yp4sXffpGs25Q%2BoGhhGEMPpyqS8YRm4S5H6HFBNgQFIT4W6em2gzVTW%2Faoy30OK4f0Qlxw5%2BqE4ezX71Gte1NXUBbGSIYyL5GFKjS9nqbeiUyHSILcaSmU4Km8HEwZ7k2yHTt9xxE4MZ%2Bq9yQQz17nyGKnhDdExO13iRUm%2FzjvsLj1Pi05ZeCIMY76STXNQe2JUaK5Nxdhnjzq&X-Amz-Signature=d08bf2b71bd90ed7bda71c2d9a2a5efae717adbbed34c632b03a0ebe47262490&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOTJWSZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDF%2FPrlsJySxNmUtqo18VKLNxAbcwJm5euddZO4pRAqqQIhANJ0jOBKtGc6UPxJUTykn45ECqXpu%2BSeuRuKOiPExSbMKv8DCDEQABoMNjM3NDIzMTgzODA1IgwdEf%2FrKXAcaepNvF8q3AOkgFO5Kkwam0BesmC7jo020%2BiUP5hmR6%2FMcko97sw4iiiqr8HLabvDhvQqJcV79T2Ki59Y2r97VbxRFGyeKFjwwa5OFUaoKBU6r3HzGWa%2FIe73NzPthIZTpO67g%2FsEgzxDAUXZV73r%2BLDYjetVIMsWZ4a6hCe3xRw7Srr%2FrLrKVYO%2FzMy6gaINt758%2B0Juaky%2BvMrucVqG6LMdac8LIBNkOCouCjQowIPgyr1kWBgO3pGwC389QWlQgfZzenBBLwwG3o%2Bad0Nxo2018AOAarbzHyd4wcOiZY9D7M5IWw3ivkfayJ4iyJTCDxx2Y2O9FH%2Bbyrpn4frnlChfcDldGyWVYByEaN39N%2Bx4d3liMq19grjz6BLR1MFA1rkJ8kSiazuROafNE9%2B8EKDK6rY8jGHau4a75PosR4QGbUhzFQLv0tQ87g0VXJgaAGskqVzK3IUnUSBx5z8dH%2FNYKDWVnIFrBi%2BEc%2B7dUgeeWe5m%2FSwHUtg4VKluTP4PRsVza0DoqjioI8fFQrEQIPYpHaYRjAi4TAo1VOeN%2B8lqwr5pSQpEp20b7TIjsKYdkPxlWpVe8%2BI0w4Rpoz5QURBZrgogXrskg0LVIEsPnQzNdcRafjV8AdsCMuEBubE9BirNaTD%2FkZjBBjqkAUoEcYmKeXwwt9Yp4sXffpGs25Q%2BoGhhGEMPpyqS8YRm4S5H6HFBNgQFIT4W6em2gzVTW%2Faoy30OK4f0Qlxw5%2BqE4ezX71Gte1NXUBbGSIYyL5GFKjS9nqbeiUyHSILcaSmU4Km8HEwZ7k2yHTt9xxE4MZ%2Bq9yQQz17nyGKnhDdExO13iRUm%2FzjvsLj1Pi05ZeCIMY76STXNQe2JUaK5Nxdhnjzq&X-Amz-Signature=3c5ee94890a3f2afe324b83504ca485ee3ee4ad89c8a26159e0120d42269634a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIVM3HF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCRVIbEFEBgtJPx2C1Zz6pFyLUgpXOX%2FDaK9hgBkRsg4wIgIoIMJkfzgDFWF%2FTw5uUx7fQDEFY5rTELPuZdUr4vkBQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHCBoOGaub%2FVlgaIsSrcAyoCqn39in3kQjafd9MszYXfUKAJQm3PHiIqgwi3r0FT%2BIdrff8ep2M31GGwKayAjMLw860UEPeM%2FF2PFmsHh5qFTKepA8fS6wJmgeiPXmLtScqniraWl9%2FX%2FiQYt%2Btj75j7fMLeySmUWcHfuHJQie1xs6Iw3GQSYjUtFMnug7fGu1kWcMDElx4TQjpdMM1fTDAdBNnmIBf2MrGyKiYvBC%2BWG%2BxsWJnykUVIO%2B2S22LtE2AGJU5V%2BBU4qhCIavh4c2iWlno3KwWw9Cy2gja1BLYi%2B%2BP0PV2Oaf4hF9AkP6903z4eqp6z1ispIW514hbNk%2BsLkAq3UrahMUkqAGfNmII2fqJ2oN7nUJ4RnYbiydKEgCNoG3KNObXUY3qYMOriqGm9jVjMWyIt%2BU%2B%2FOBIKLBIhpkIrhdqifJ4STnAvFVzYVxROsgse1rHKsWvQq8PSBrm11UMTZw9aT6VU8bGG5zSNIa%2Bm%2F%2FUSgS9wnUeqP0qjLNVVz83xuivj0Va%2BgtrTtty%2BiTjW2nuRpDdgJUHSV1cPnmh%2F7Q2F2we0fR2Xkh9o2y17WmBfvIxefo1EBDbEKUKDKKTWvY2oBw1STp2WI8I2EvmA2f3q44xTTXyCiX4DrmQOZcDsOrAXbnh9MPSQmMEGOqUBJEBrFHc6iJc4KdCwmhrhXXY5NBZhCyfw3yR9dEuZhCcESXsxS%2BdaNkFeON0sKhgZt%2Ft7v8pdu92oCMyC4acnPnj%2FakrnuzCnb0QFdW%2Fy7w0K0vlJ01panUlCbkjazbdteBJqs2yCknlbWGxCKVmv5NDYLLXO9LgsyQvFtGsDOyZW3Vw%2F6J6K9Sjs%2BW3MQT8BWMQN1AlgpKqUgZa%2BCu9HE0kUwLDd&X-Amz-Signature=e042f48b0e37d99a6bc7aa1cf0783b0806eaa8b4e350a8a34ae4000f339f7a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USOJIL7X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIG1bgJXnEQITfIKfZr4W5UUvP0pGw0KVrrqhBae9aCfVAiBWAblFx9AbLpqWSv3uXFV9KaCOvnz%2Fip5xgqTJC%2FKa8ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMWzl2OF2MEflPZMheKtwDYQAwXeUC9C1Fo89BHEHUMwfiO%2BJUlCMb3X03D5V2szNdyC4lpcbIozXvoul69RaExun0x9Ga8QL8xqugHobOT2lY8303MU5KVvTDVibDoqk8scA05m2vj%2Be5qTD%2FH%2BjSzj1We%2BUu7tse2VpUFVSWw2YxmDfm3K7oLeBRQx9VD3YohSr4F%2BMyAgkRhsozfejRZSbAwI2jQisRMhA8%2Fi%2FDotm%2Fd36ckEWyRVt7uJ9itcvwMQZzrUqrOItGofOfdKLsXLcApFueOU8zl8StiiovNqjgXHGlp5QKKOLeyBawD2anpdtDWVIqvrE860KeTqrm0qMqeikN84jd46wedRvgMEWOnEPx69lr9nHvHC2OghScA%2BUYmg6QKMznqnWirgRFtGTyXRdh%2BYn424ezZLimglIkTMzkz3MTzR%2BMN10baSLAEXCZed0wrabCge9v54Pd688CIbn40dQsdwC6Fpzs3GTPh7ggaL1%2BWvnQ8MgPalljOHOHgvrtSbAbcb8ay9b%2FmwLyJbbTGnVfO%2F3ZihJ7dLcMBmyh1x%2FMNXIVRvWZK4NR5tCX3o%2BFRvSVznzTj164J5DfCBDNzPzt2Atnn2FHccrSnsKD9ct05cKa3sJjRRn8SImm4XHKSgy%2Fwa4w%2BpCYwQY6pgGEDrb4kO2GrmMhox2dwjnFxc9EP0S6wadFye7i5baexV19G65sqeg6MkgVqfH9Z5SvioYQcsuILCziBbJaR5UumChY6b2HRwzQC6k%2FCSQTqK4H1cWjMLfiw5HLLa9GUpszr159va2YnGcKOSqPo2OZH23p4xTXy%2F%2FhG7S7f%2FisY6gP6gI7M2fXpIpNTUn7TQClcRKZFnZ%2BPAwrfktL0XeXGBIeIwpN&X-Amz-Signature=bdb2f7eedb255aa1eec11b271f11f89b93df49a2895c44755fc268eb11f536b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOTJWSZ%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDF%2FPrlsJySxNmUtqo18VKLNxAbcwJm5euddZO4pRAqqQIhANJ0jOBKtGc6UPxJUTykn45ECqXpu%2BSeuRuKOiPExSbMKv8DCDEQABoMNjM3NDIzMTgzODA1IgwdEf%2FrKXAcaepNvF8q3AOkgFO5Kkwam0BesmC7jo020%2BiUP5hmR6%2FMcko97sw4iiiqr8HLabvDhvQqJcV79T2Ki59Y2r97VbxRFGyeKFjwwa5OFUaoKBU6r3HzGWa%2FIe73NzPthIZTpO67g%2FsEgzxDAUXZV73r%2BLDYjetVIMsWZ4a6hCe3xRw7Srr%2FrLrKVYO%2FzMy6gaINt758%2B0Juaky%2BvMrucVqG6LMdac8LIBNkOCouCjQowIPgyr1kWBgO3pGwC389QWlQgfZzenBBLwwG3o%2Bad0Nxo2018AOAarbzHyd4wcOiZY9D7M5IWw3ivkfayJ4iyJTCDxx2Y2O9FH%2Bbyrpn4frnlChfcDldGyWVYByEaN39N%2Bx4d3liMq19grjz6BLR1MFA1rkJ8kSiazuROafNE9%2B8EKDK6rY8jGHau4a75PosR4QGbUhzFQLv0tQ87g0VXJgaAGskqVzK3IUnUSBx5z8dH%2FNYKDWVnIFrBi%2BEc%2B7dUgeeWe5m%2FSwHUtg4VKluTP4PRsVza0DoqjioI8fFQrEQIPYpHaYRjAi4TAo1VOeN%2B8lqwr5pSQpEp20b7TIjsKYdkPxlWpVe8%2BI0w4Rpoz5QURBZrgogXrskg0LVIEsPnQzNdcRafjV8AdsCMuEBubE9BirNaTD%2FkZjBBjqkAUoEcYmKeXwwt9Yp4sXffpGs25Q%2BoGhhGEMPpyqS8YRm4S5H6HFBNgQFIT4W6em2gzVTW%2Faoy30OK4f0Qlxw5%2BqE4ezX71Gte1NXUBbGSIYyL5GFKjS9nqbeiUyHSILcaSmU4Km8HEwZ7k2yHTt9xxE4MZ%2Bq9yQQz17nyGKnhDdExO13iRUm%2FzjvsLj1Pi05ZeCIMY76STXNQe2JUaK5Nxdhnjzq&X-Amz-Signature=6d9d21ebc87bf14b80f7dd6cf6cb0c100848c15db4cb2739114436dbfdb2709f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
