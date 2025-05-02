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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CIRYYW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAiPzfRtr%2BsM5v3IX1S2e0hNFD3CsGatQBilDmS%2Bg7ZlAiANt1leoUN%2BfF40hzq%2BUkD6lX3HHxy6Sd7OfzsBehkA4yqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUDiKrY7ferSIOTpKtwDGGyGP6oiY8f4UE6UGFhOBxBqS1jXlxWNPluyXk1PgHolqEOXjBhJb%2FAQulriRQ8jErM5aWBD0ffKZbRC2UO5uvEkx61bAJZkbCuMUtPtnzfiM84LlBdPY9sKETInvDanGS1XYs1weHjoS9gxy8AwSJmmy3cvLWYZtPj4ZLkPsoi%2BAGUM5EvQuf8E72MoQoycSJqXN4gpZSWsky%2BELtt7T0IQOvvePzqAakUjJqT0p9vNppVjvl0ejVG4%2BdHjQXLnFtKnKfCRkThrMVlLdFzt%2BoMSK1KVrgjoECk9eKa%2BAD3uMQRD6jNw5XULlpN0aiHAAfpPS41QGbiiWWTyXq12kpXronElRnywsmFIlGz%2F2%2BAsLrxlKr1fzvo%2FXHQHyRt4cRryWgIDBEtUFzFVH%2BJCcr9in%2Fqt20rM6RtKFXSoc%2BYvtgJ1mnM%2FU0GAcKCR6b%2BhKvuvK1bFduGbVT0xD7A4XvXRQPaXUFBPvO1oWMX5o%2BHgYUczGYyKQjSwgZo%2B5mPGp%2B5iz0f5hppfGmzmz%2BU1vbK%2BYwEnovdJIAxpKtq9Nk%2BexaFx5XxyO%2Bs9Esab7wiqatqUGQ56yle8YQSbRKprBUMf6vviyz50jkvTkOYu7mptxH2PiIrvAtlVhX8w4NHQwAY6pgEDuarX3XBjkVFXsRhJH%2BZshVobcYKSTzl8jycAacRlCDPG8sVVk6fWoIHgGfV8r8yDZB4eTTyc8ZI9%2Bqq9cgAIZLh3juyrnQdqDUlgxMX4Oy7P3eLtU2Re1kEhJUUjz6sxkVeTeFo3%2BHNgaBOUBEzlr0Phtlwlh4SiwS0C3XQdFMLNmrNgBYUEaAY9LZ2B7wHhebF1TwXfACpmG%2BeAeq%2Be0Qu0TjBV&X-Amz-Signature=3d458f95e77768f625aadfd6735a282a772c6b2bbca7423beaf901e9baa552fb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CIRYYW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAiPzfRtr%2BsM5v3IX1S2e0hNFD3CsGatQBilDmS%2Bg7ZlAiANt1leoUN%2BfF40hzq%2BUkD6lX3HHxy6Sd7OfzsBehkA4yqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUDiKrY7ferSIOTpKtwDGGyGP6oiY8f4UE6UGFhOBxBqS1jXlxWNPluyXk1PgHolqEOXjBhJb%2FAQulriRQ8jErM5aWBD0ffKZbRC2UO5uvEkx61bAJZkbCuMUtPtnzfiM84LlBdPY9sKETInvDanGS1XYs1weHjoS9gxy8AwSJmmy3cvLWYZtPj4ZLkPsoi%2BAGUM5EvQuf8E72MoQoycSJqXN4gpZSWsky%2BELtt7T0IQOvvePzqAakUjJqT0p9vNppVjvl0ejVG4%2BdHjQXLnFtKnKfCRkThrMVlLdFzt%2BoMSK1KVrgjoECk9eKa%2BAD3uMQRD6jNw5XULlpN0aiHAAfpPS41QGbiiWWTyXq12kpXronElRnywsmFIlGz%2F2%2BAsLrxlKr1fzvo%2FXHQHyRt4cRryWgIDBEtUFzFVH%2BJCcr9in%2Fqt20rM6RtKFXSoc%2BYvtgJ1mnM%2FU0GAcKCR6b%2BhKvuvK1bFduGbVT0xD7A4XvXRQPaXUFBPvO1oWMX5o%2BHgYUczGYyKQjSwgZo%2B5mPGp%2B5iz0f5hppfGmzmz%2BU1vbK%2BYwEnovdJIAxpKtq9Nk%2BexaFx5XxyO%2Bs9Esab7wiqatqUGQ56yle8YQSbRKprBUMf6vviyz50jkvTkOYu7mptxH2PiIrvAtlVhX8w4NHQwAY6pgEDuarX3XBjkVFXsRhJH%2BZshVobcYKSTzl8jycAacRlCDPG8sVVk6fWoIHgGfV8r8yDZB4eTTyc8ZI9%2Bqq9cgAIZLh3juyrnQdqDUlgxMX4Oy7P3eLtU2Re1kEhJUUjz6sxkVeTeFo3%2BHNgaBOUBEzlr0Phtlwlh4SiwS0C3XQdFMLNmrNgBYUEaAY9LZ2B7wHhebF1TwXfACpmG%2BeAeq%2Be0Qu0TjBV&X-Amz-Signature=3249924b91564385d73d95f35f789c48a44dcdfc947f5dbd7d49032655aa5a24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CIRYYW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAiPzfRtr%2BsM5v3IX1S2e0hNFD3CsGatQBilDmS%2Bg7ZlAiANt1leoUN%2BfF40hzq%2BUkD6lX3HHxy6Sd7OfzsBehkA4yqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUDiKrY7ferSIOTpKtwDGGyGP6oiY8f4UE6UGFhOBxBqS1jXlxWNPluyXk1PgHolqEOXjBhJb%2FAQulriRQ8jErM5aWBD0ffKZbRC2UO5uvEkx61bAJZkbCuMUtPtnzfiM84LlBdPY9sKETInvDanGS1XYs1weHjoS9gxy8AwSJmmy3cvLWYZtPj4ZLkPsoi%2BAGUM5EvQuf8E72MoQoycSJqXN4gpZSWsky%2BELtt7T0IQOvvePzqAakUjJqT0p9vNppVjvl0ejVG4%2BdHjQXLnFtKnKfCRkThrMVlLdFzt%2BoMSK1KVrgjoECk9eKa%2BAD3uMQRD6jNw5XULlpN0aiHAAfpPS41QGbiiWWTyXq12kpXronElRnywsmFIlGz%2F2%2BAsLrxlKr1fzvo%2FXHQHyRt4cRryWgIDBEtUFzFVH%2BJCcr9in%2Fqt20rM6RtKFXSoc%2BYvtgJ1mnM%2FU0GAcKCR6b%2BhKvuvK1bFduGbVT0xD7A4XvXRQPaXUFBPvO1oWMX5o%2BHgYUczGYyKQjSwgZo%2B5mPGp%2B5iz0f5hppfGmzmz%2BU1vbK%2BYwEnovdJIAxpKtq9Nk%2BexaFx5XxyO%2Bs9Esab7wiqatqUGQ56yle8YQSbRKprBUMf6vviyz50jkvTkOYu7mptxH2PiIrvAtlVhX8w4NHQwAY6pgEDuarX3XBjkVFXsRhJH%2BZshVobcYKSTzl8jycAacRlCDPG8sVVk6fWoIHgGfV8r8yDZB4eTTyc8ZI9%2Bqq9cgAIZLh3juyrnQdqDUlgxMX4Oy7P3eLtU2Re1kEhJUUjz6sxkVeTeFo3%2BHNgaBOUBEzlr0Phtlwlh4SiwS0C3XQdFMLNmrNgBYUEaAY9LZ2B7wHhebF1TwXfACpmG%2BeAeq%2Be0Qu0TjBV&X-Amz-Signature=78314c01408dfc17a453df80e2a284ed4603de5006fc261e6ad1f8faaae14742&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R62UORYI%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD02jaQ0ZOpYgKcQZ9GPz%2FSPT5anjb2umQrLUyr3D%2BnQQIgciIqItC%2BI4qLnL68TPVTIjNHvU9acc8adgl%2Fbno%2F2PgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkp8ULwst0LrL9oQyrcAyqvL1i6gARyD9QV8cvgKLO3qdNhebGG2GdoOVnjGNDFAEFfaKor%2BH23Or1NRcwWxSmteHvRdT4C0vHUuutA31DW1Zhaae3R8P4fDZ%2BId4R0cTWi1yX8UEicAvyj3ShX2%2BTXnN5FQC2FuE%2BAK7ojb1itZmVKFIvZaMi7vAAtPCPRk5xsGpvp2v76CN95eRWG4FDcOLJu76tV%2FdFK0nI8cj%2FvEwROfu%2Fw1aaoFkoRwfektacY52f293rysH3%2FJrOBo7SN%2BMK4C2SHIGcj4zHhOmWh%2BOtQSRUy6e3WjgBqvFwzC8lXgLgZl1g80gCtkKB8SdVjAEjj9xgvN8EcCBJqAaQx0CvKzfd8hQB7i8evBC8FlCJrcQJhBDT%2FSr2zu82zxQfhM5gYCxL1bww7YTpEGQpvXNGVz9Dar1o10FKeNROg48DGyBD0Q%2BeBssvJOWxtuoEMNqYdhunrDoFa%2B5HsutIP6qXrQcmWFV28tdL3mQpKEjCwgXRvdzI7uKTiU%2B%2F%2BQyCqfFZKARLO0i2Wn%2FQ1o47GP%2FrVsVxk9iFcrDYcsgQR9TD6QJVHZlQCp5zei3hb1yysYAmx6saWqnMu5uqth88mGDS%2FrcpHrpNT06RlBrvHxrT1Z%2BTR2tBrp11LMIfR0MAGOqUBR9f%2FxvvInRAHsb3Nfy93qkD4eNJiPG4X10qQgpPGUk7eTbULbUaRk1ps5hU4qS5Wgp%2FifRwxVVDcjddwjvVraW%2BrAtuvdjvmsplCAk9f8Vj0VymdXXUXjNulhMfSuEBTbDTtEMIWLXBlpwo0xlLovw%2BsSNHrqpPf0jrxRr2i11MvDDCC%2Fu%2BZS9q0x37%2BwptXzrb8QvnqhlWgMrcQZ9%2BU%2FHhpns8g&X-Amz-Signature=5c9c3fd1b8792386424af73ca4fad7a77f26e5dfce8e954e79e944fa58ade9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUEG5HY%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCikN6O8FBwqJoyoCUjJgt%2F3Uw02jk5yV4E8OmQBN0fqwIgZYbHbCHyGIweg2%2FTcGtDT8njiYewLWqaZIgyJXVckEcqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFSg9EpdFoSo6jKTRyrcAzipZfzWoYMHUXuZhKwu0n7U%2FfWEyfc%2BB6%2FJpBPSVrTEl%2B0lq57PXGFmqa%2BapbFgBjRH5ZWVE2Pi8h35vcUoK457jPkpQpL2o9CIn6IGdYNs66Npggx3uj12GUhOt8seURvlFiRN4%2BBQ9VLlwKKuSebfW93wtbwafrmQpiMYuUubCWRu1IgC9PNkJyj69m3nLG2wSP76KJRNb7xgvHQ4bc%2Fx9DhzdrRZQ4Xgt9mkdidyKwvvIQCn530DvkvOH5c0EibIfB%2FH0rVGWEwqq5SVc0i%2FmzjVlctl%2BDHi9vpb2I99dGK34ZZud7xqOFcSHT1%2BhDsMe7YR6UYjT9nh4TC65JIbSGXrr98EpZf1adIwRm6JxCoSgUyQGMzgHlIquQEc3WSlL%2Fw5lBRhBYiBQ3sQy8T55UHIBVetk%2B3O%2BRYZu7NCaRfjE%2F9qvfMGUTq0kkWY68jpbQldkTOq6rwi2YRJxF94B4J7BMsZ9tQAA4nNNwxfnfQ811d8fUq5%2BCvsnR0SSgn8YFy6bWtAmBwlICdjMJEc7Cm6y%2FAVsje60eZWFjAPipcpLT6cACRXgJSI4hlusuiHUAHK9TO1PjsqEXszfw91ACtna73nAmgUPwh4npr4PR340Ad7rw%2FNcIK9MMfR0MAGOqUBcif7NjgCHcMsYUfyx1j%2FqpqWwVQ1BiWN%2BJiGQ1B2Om4cFmulWzsj9C4z%2FsA28fLW2gyiv8OM%2BUTUGEsfl3pl0Who9qH0P0qL%2BW3rtTAZqxarRGCQ1mhpmGT%2BpwvSwMA9mPLZdcI29HQL7bCD0Ge4oP78Xbg7viakzh8mgd1wLM4GsFck6SjVruiYg7J4bjNgff4Oa9l7XyD8VYe6mDQg1OIKzbjj&X-Amz-Signature=7ed70ca4fc27624cbf658143dec6a7e9807d005156d6510a72bc0cc58d9c5d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6CIRYYW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIAiPzfRtr%2BsM5v3IX1S2e0hNFD3CsGatQBilDmS%2Bg7ZlAiANt1leoUN%2BfF40hzq%2BUkD6lX3HHxy6Sd7OfzsBehkA4yqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTUDiKrY7ferSIOTpKtwDGGyGP6oiY8f4UE6UGFhOBxBqS1jXlxWNPluyXk1PgHolqEOXjBhJb%2FAQulriRQ8jErM5aWBD0ffKZbRC2UO5uvEkx61bAJZkbCuMUtPtnzfiM84LlBdPY9sKETInvDanGS1XYs1weHjoS9gxy8AwSJmmy3cvLWYZtPj4ZLkPsoi%2BAGUM5EvQuf8E72MoQoycSJqXN4gpZSWsky%2BELtt7T0IQOvvePzqAakUjJqT0p9vNppVjvl0ejVG4%2BdHjQXLnFtKnKfCRkThrMVlLdFzt%2BoMSK1KVrgjoECk9eKa%2BAD3uMQRD6jNw5XULlpN0aiHAAfpPS41QGbiiWWTyXq12kpXronElRnywsmFIlGz%2F2%2BAsLrxlKr1fzvo%2FXHQHyRt4cRryWgIDBEtUFzFVH%2BJCcr9in%2Fqt20rM6RtKFXSoc%2BYvtgJ1mnM%2FU0GAcKCR6b%2BhKvuvK1bFduGbVT0xD7A4XvXRQPaXUFBPvO1oWMX5o%2BHgYUczGYyKQjSwgZo%2B5mPGp%2B5iz0f5hppfGmzmz%2BU1vbK%2BYwEnovdJIAxpKtq9Nk%2BexaFx5XxyO%2Bs9Esab7wiqatqUGQ56yle8YQSbRKprBUMf6vviyz50jkvTkOYu7mptxH2PiIrvAtlVhX8w4NHQwAY6pgEDuarX3XBjkVFXsRhJH%2BZshVobcYKSTzl8jycAacRlCDPG8sVVk6fWoIHgGfV8r8yDZB4eTTyc8ZI9%2Bqq9cgAIZLh3juyrnQdqDUlgxMX4Oy7P3eLtU2Re1kEhJUUjz6sxkVeTeFo3%2BHNgaBOUBEzlr0Phtlwlh4SiwS0C3XQdFMLNmrNgBYUEaAY9LZ2B7wHhebF1TwXfACpmG%2BeAeq%2Be0Qu0TjBV&X-Amz-Signature=252bfda3c0936e751ac87decdfb19d65e2a1d34a914eef7feedc08e3e06ace06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
