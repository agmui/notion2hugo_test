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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQT7R5V%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPC7zdl9RAbF5xQyCXVYy7fkD0aJAL%2FHDR7%2BvB7ut%2BFAiEA1uR1CZQZBDa9LnYxjgCqJ3IAguqs9QjOhz8vH2nIWcgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJBy2gYtWQ98ZlN6SrcA6MKussPl9MwD9VcpqR6j19mIs%2B%2FtQkTzzoCV1T14%2F98HX3AeOnxTvx2MvZBEi7aPC8e6Hd7TLd%2B4U%2F86FwU20mUQzQA1sFcgTZR6GSMC1LnKM2ZBCQ5OUFn5kvwjhjzEF8cEvWcuhhIo1LZK0e49%2F%2BVJXzzyFQ8VX%2FAIt2GgUNDe5TG4UrPq5HSQUEiG7YQmHAsemuYpfrq1LIjSoa6usGv4z%2F4ztlKzgH4WZwT%2FYXcGnTOCqhj4TTGfWcMc3GnhiB%2B8Ti9QtidDaX1q97hITIf%2BnQIy7U85z11KHk%2BGXCtrPjFhg6PdO1U5EBrAfSkOwTKqAzLzwMO8WQPja6vAwxNtz%2FatQuEdu8hIdNmU%2FqHlq2SxWCp7%2F6%2BcjJZiPSG0kbmGhQSdCUL4dDvMEEwhmqeNgpD9EGNrAf%2Fj5IMm5Z7OmAi7MbPm07kh4mgJEAlBNAEm1zCbvdpxw11FPFdoafPsxmkpxqmZtzYent9tyUI81L74ouPD2%2Fembf3eXz2PQ8NHYw6IgosT%2Ft6XdZkRbMXMi0%2BndPCugH2c%2BR67hkqDAUfwkbYAoQ2IZrv0TuIdo5eAjIvThc34oGdrzuEMGwPJR4Wpp9%2FfF9L3WA25GMd6o%2B9BXCQjl22It2iMMmJn74GOqUBgMpzVweG7stS7olqf%2B%2BEVXOSUtCkajl7QHPa7Z%2BoWnTgbGiB7TMlxfgiQ%2BY76kdk24m8cyFz9K%2FBGmmuBuHsJvIR3WrBAdOk0k%2BUFDQC2%2BFbhUGdwEvROxsanZ9BiFbf%2FjbnoUlBRS6aOiAIPa6lpdEF7tZyN0ONWzI506%2FDXPh7k%2BKwuwBvPs47I21wWqzxU3lW21XLNh%2BewTgRZ8TbEC%2BFP9he&X-Amz-Signature=c1b78e633e4cdded38d88d8b8253d84a4e1f0e8c9f23ad7d9bf84641faf8ea86&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQT7R5V%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPC7zdl9RAbF5xQyCXVYy7fkD0aJAL%2FHDR7%2BvB7ut%2BFAiEA1uR1CZQZBDa9LnYxjgCqJ3IAguqs9QjOhz8vH2nIWcgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJBy2gYtWQ98ZlN6SrcA6MKussPl9MwD9VcpqR6j19mIs%2B%2FtQkTzzoCV1T14%2F98HX3AeOnxTvx2MvZBEi7aPC8e6Hd7TLd%2B4U%2F86FwU20mUQzQA1sFcgTZR6GSMC1LnKM2ZBCQ5OUFn5kvwjhjzEF8cEvWcuhhIo1LZK0e49%2F%2BVJXzzyFQ8VX%2FAIt2GgUNDe5TG4UrPq5HSQUEiG7YQmHAsemuYpfrq1LIjSoa6usGv4z%2F4ztlKzgH4WZwT%2FYXcGnTOCqhj4TTGfWcMc3GnhiB%2B8Ti9QtidDaX1q97hITIf%2BnQIy7U85z11KHk%2BGXCtrPjFhg6PdO1U5EBrAfSkOwTKqAzLzwMO8WQPja6vAwxNtz%2FatQuEdu8hIdNmU%2FqHlq2SxWCp7%2F6%2BcjJZiPSG0kbmGhQSdCUL4dDvMEEwhmqeNgpD9EGNrAf%2Fj5IMm5Z7OmAi7MbPm07kh4mgJEAlBNAEm1zCbvdpxw11FPFdoafPsxmkpxqmZtzYent9tyUI81L74ouPD2%2Fembf3eXz2PQ8NHYw6IgosT%2Ft6XdZkRbMXMi0%2BndPCugH2c%2BR67hkqDAUfwkbYAoQ2IZrv0TuIdo5eAjIvThc34oGdrzuEMGwPJR4Wpp9%2FfF9L3WA25GMd6o%2B9BXCQjl22It2iMMmJn74GOqUBgMpzVweG7stS7olqf%2B%2BEVXOSUtCkajl7QHPa7Z%2BoWnTgbGiB7TMlxfgiQ%2BY76kdk24m8cyFz9K%2FBGmmuBuHsJvIR3WrBAdOk0k%2BUFDQC2%2BFbhUGdwEvROxsanZ9BiFbf%2FjbnoUlBRS6aOiAIPa6lpdEF7tZyN0ONWzI506%2FDXPh7k%2BKwuwBvPs47I21wWqzxU3lW21XLNh%2BewTgRZ8TbEC%2BFP9he&X-Amz-Signature=27275b820cba69caa6d087b716721ae33b30b1709562149ae009fd1be2f4bf18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPOD6OLP%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeZA30rppO4n4mM4F%2BShb45YfkTGmqVSjCJqqU3Xr6cQIhAOl3TM%2BRjCxgI2YtJtRSNndVKRaZqpjLBQLG3DLYSeIGKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBqDJGP5M49MEPSiYq3AMB1ua6Poqclrjv8%2FanVdWrtF0IixX9nH%2FqCvhUWe1r4GMEjoTLAEMsoqZ7%2BkmkFSBOnJm215qc%2B62H7cAlsmVB8wUWDce3vk1DSlEeBUUO9GPBDv8t%2BmzJZpvbqG1zXYWn04fmYARZiXOEpKfeE5sDNnMjOAgvMTeMni6BFqodFmtDi0LHuZboGJ785vRfp%2FOpECyBqzaiGrBL43dL8Wr4C0pIjkRhmVa8z7DxjY2boRytrxTXiyzwpqxC6TlKimlpnYJuNYOjDrmmYV9KMokDWD6qCjZecDGbFIQ2RZyvQOtjwiRQoVWq%2BG1t3W1akkpn1hArJofBbiyom3uAQrwrSbrRReueJ%2Bh9cWS3WCOOYTd5PpwednY5BTZ2pDBSUZiCuNGMjFyacMw%2B9rqxQhmpCEJ%2BoKUnmrDO%2Bh9MB%2FT3FA4uVOkwPO8CmS%2F4biBnDv9%2B4qqgrJlyyNEpe7V7Whlxk2j5OQ4FlToFiHFj52QNNoGYZnGj1snkA7vGONDReTmJp9ztSgumCtOVusP9FIPMqs0PjCxZGGhYgz3vG%2FYXSKoP1Tj3Y0KU2QEHWmgSNDNVOkHMREeeUj2OoHYZLG4swLCNeLRWKkssgu2TS3iN97lEQjb%2B17O0dV1EtzCpiZ%2B%2BBjqkAR1C4oZGS56fJTluCdXkPJAnwcAOjwXCGuEFqx11H6JpsohNpTdyslpt3HSAu%2FPgpnzpDt%2FP3fFhRkFxQrmNC3hQ%2FWPTe3ynv9Rys0c9XTm8MfhZ48%2BykMQnyJCZQcJZR2ybYgqzvR09w5wrQjpoy4ISUpN9bKcaznWdXiEbOaq%2BgH4MAgnCELRox9S3996IfYHKTvjdnbv1wCnJKZ0tIEiWba0b&X-Amz-Signature=f1e7fcf61a8c2a27e921058952bd4a41a80f157f4a45ddb6e44c5458593ce3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYVXMATJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAHVSV%2B4Kabi2hmtpNoUNPmTotsI5PEoAYKbt%2FiEMx3gIhAMBcqfTdlfbwxNc3EoFY33HAXOOCWKcM7r3Yku1nKupeKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz0LtZkPja1P8tbcUq3APiI%2FvdYKKn7dq8byeoUZzBp4ZpCMjLyNxmznsxMvIajYyKA0aLUCnOPiKfkyEYp6Px7sD0qXkYCwCJ29T6r1iXyYFp7SizilZ6UF%2BsdfESD73K2DUh2aQ34Gi4CJdZSZDul%2B2CIQoug9W8%2BXu1KGBTvltXehBBsKgsCMYc3Qzjd9hpprQ1uZuJc9PtBUCpgwHqukaZ4b5NAvWcVT1Zi8ESbktEKcY%2BWnZPmcYSKUvRtvm1dQKAIV8WlKTh51kLSDpwZEM2NnjON6IEzV1tqEW2sSuMdU1tV%2BCRHNNIspMz32aAzzxbzDlxAqWaaW2Yg8zIuE1p7AKdydVM3Ub30AEehnZ%2BMFZvYKoSdA5o23pJBk%2FW%2FTLwLEefEwy73TYURcnyfhzy2XMdom%2FUMAxM6SgaH%2BjwaaZqkE4buyaRvrV3E%2FaRMXoHIgs8e%2FCfCi8x5l4%2BNOlQOzeayYiw%2B9NarFNEOSTAps6ABPq5LUDUFsLN7TWWoyX%2Bn%2F2TGxgig1IeP8p1F9%2FM7VnBVL4nU3GaKeiNArRvQlyLLs1LHnmQdpZHTy08xBKhfMrTyG0YYg5uY5%2BtUK9CF5DVIIuJbJF4DEJNoxy7Whi6CQ4nWUDa3p9hljBnU0xghkQpLPnbWjDeiZ%2B%2BBjqkAVB%2BsthrVE%2BwW%2FH2o39GjZumMXIDqtM4zuzxJ5oOPb9J7uliocUNp2hX%2BzjNUHhe%2FnTZfsxq0W7pKIp9Q%2Fxs40oaI0WCngvVhxU4wAuHM8GEZTR59119M2Iex%2B1MGU5H6xthx4epNoY1jr4Xxnxh4dkVQ0zCZT%2BVp5hEkK5j8VEl%2F2KPpulKE4S9OivYerGoWME6RxYK%2F7HIKndX1fvBoCL%2F7k5T&X-Amz-Signature=03c1f24cce10bf235ad6c6457e00000b05ad96765846011cd74acd9973b7e1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQT7R5V%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPC7zdl9RAbF5xQyCXVYy7fkD0aJAL%2FHDR7%2BvB7ut%2BFAiEA1uR1CZQZBDa9LnYxjgCqJ3IAguqs9QjOhz8vH2nIWcgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJBy2gYtWQ98ZlN6SrcA6MKussPl9MwD9VcpqR6j19mIs%2B%2FtQkTzzoCV1T14%2F98HX3AeOnxTvx2MvZBEi7aPC8e6Hd7TLd%2B4U%2F86FwU20mUQzQA1sFcgTZR6GSMC1LnKM2ZBCQ5OUFn5kvwjhjzEF8cEvWcuhhIo1LZK0e49%2F%2BVJXzzyFQ8VX%2FAIt2GgUNDe5TG4UrPq5HSQUEiG7YQmHAsemuYpfrq1LIjSoa6usGv4z%2F4ztlKzgH4WZwT%2FYXcGnTOCqhj4TTGfWcMc3GnhiB%2B8Ti9QtidDaX1q97hITIf%2BnQIy7U85z11KHk%2BGXCtrPjFhg6PdO1U5EBrAfSkOwTKqAzLzwMO8WQPja6vAwxNtz%2FatQuEdu8hIdNmU%2FqHlq2SxWCp7%2F6%2BcjJZiPSG0kbmGhQSdCUL4dDvMEEwhmqeNgpD9EGNrAf%2Fj5IMm5Z7OmAi7MbPm07kh4mgJEAlBNAEm1zCbvdpxw11FPFdoafPsxmkpxqmZtzYent9tyUI81L74ouPD2%2Fembf3eXz2PQ8NHYw6IgosT%2Ft6XdZkRbMXMi0%2BndPCugH2c%2BR67hkqDAUfwkbYAoQ2IZrv0TuIdo5eAjIvThc34oGdrzuEMGwPJR4Wpp9%2FfF9L3WA25GMd6o%2B9BXCQjl22It2iMMmJn74GOqUBgMpzVweG7stS7olqf%2B%2BEVXOSUtCkajl7QHPa7Z%2BoWnTgbGiB7TMlxfgiQ%2BY76kdk24m8cyFz9K%2FBGmmuBuHsJvIR3WrBAdOk0k%2BUFDQC2%2BFbhUGdwEvROxsanZ9BiFbf%2FjbnoUlBRS6aOiAIPa6lpdEF7tZyN0ONWzI506%2FDXPh7k%2BKwuwBvPs47I21wWqzxU3lW21XLNh%2BewTgRZ8TbEC%2BFP9he&X-Amz-Signature=38e904300df2721f105280afcc2af65261922a6f26d75c64deeca4f6753c8ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
