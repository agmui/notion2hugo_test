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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6F2V2C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd6%2BVBi0rFTtOcAIGO3YnUDbT95CIGEhUSVFaG0kPjSAiBWKiinRP6DMGT56d7eSKhSiomjVPpxC0T7sBYa6RIHnyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMfV%2FS0RuJTHU866KKtwDe1XXeoMTR171YgabZqfGe%2BBxrKy1tnVvnN0vdIjCDozrY4X%2FiR389B1EPa5fIp%2F9fHZv7AgPzkRJNL9L8gXTe6TBOru%2BJscy3g0F72B2DgGyndJzsloc70HFZD3ryezhI8xzqAm5jiVxN3U6JnlHwXWKVz3sOamE5feqmwBQ53g4bKf5K1IJwT5SbWvd5kLzmpN3h5wPh6ebtvYYe8FYMcltPPJO5D84GqdekG%2F3on2zHinJR1kG8sirtGC4NY6duGFW%2BWNcGkqCDrf%2F5SiBKqF3QfOROLXb9H1sxin8PF%2FV8G7tRpyxHQQaJk7hwPSak2raPVEyTuVxdLyKfxxWxJjoPo%2FXQoTO9zE7K%2BXfS079MPH%2BfLeQwnWjbZjH%2F2ttsq%2Bj3hLXZrXiz7BVdhDWi7suEdwUnt0%2BqJj4buDowQH5g3iSlW34cHFsJ9iVo9O6RtaKq3JkEsU74hxR8xpQ8Dzjd8SHi%2FRI40mYhQyRAzyh2T7n3DPnOH6lgFNXUcYLnBa6srr0IYruiZhpj8wdv4PUGW%2Ft2HAKrtBEpN0PoyPv1vN8NhlI0T24KXDabmwU2RcXe7PbUa8iYL7lsxzvGI0q4PQnQsHW2hF47fGdN1v2hqeOAGy9iIry3nowzInHwgY6pgGu40BgKz3Gizq9qyQld1uougoldCTunYnRc5WWEAZh%2B8i7wGf01Uor0rFm8mmVYY3IyrZdcPvbQBUtpWk1fty9z2qw6qM3b18wDs8Hgt%2B2Lyeabdtp4eITcFYJS4r%2B8Ys6joJJO1udBhukCu%2FQEDzayHlb1F43McrRCMWac9KajL7iJacWwWTjwwg34T4%2B%2FbWvZXOSIoeulJX7fflVZNiWCJQK4ILz&X-Amz-Signature=1c56c37dc2bb486d860a54912f8ab65ae02242a3797160c1315d7ee7f27dc916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6F2V2C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd6%2BVBi0rFTtOcAIGO3YnUDbT95CIGEhUSVFaG0kPjSAiBWKiinRP6DMGT56d7eSKhSiomjVPpxC0T7sBYa6RIHnyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMfV%2FS0RuJTHU866KKtwDe1XXeoMTR171YgabZqfGe%2BBxrKy1tnVvnN0vdIjCDozrY4X%2FiR389B1EPa5fIp%2F9fHZv7AgPzkRJNL9L8gXTe6TBOru%2BJscy3g0F72B2DgGyndJzsloc70HFZD3ryezhI8xzqAm5jiVxN3U6JnlHwXWKVz3sOamE5feqmwBQ53g4bKf5K1IJwT5SbWvd5kLzmpN3h5wPh6ebtvYYe8FYMcltPPJO5D84GqdekG%2F3on2zHinJR1kG8sirtGC4NY6duGFW%2BWNcGkqCDrf%2F5SiBKqF3QfOROLXb9H1sxin8PF%2FV8G7tRpyxHQQaJk7hwPSak2raPVEyTuVxdLyKfxxWxJjoPo%2FXQoTO9zE7K%2BXfS079MPH%2BfLeQwnWjbZjH%2F2ttsq%2Bj3hLXZrXiz7BVdhDWi7suEdwUnt0%2BqJj4buDowQH5g3iSlW34cHFsJ9iVo9O6RtaKq3JkEsU74hxR8xpQ8Dzjd8SHi%2FRI40mYhQyRAzyh2T7n3DPnOH6lgFNXUcYLnBa6srr0IYruiZhpj8wdv4PUGW%2Ft2HAKrtBEpN0PoyPv1vN8NhlI0T24KXDabmwU2RcXe7PbUa8iYL7lsxzvGI0q4PQnQsHW2hF47fGdN1v2hqeOAGy9iIry3nowzInHwgY6pgGu40BgKz3Gizq9qyQld1uougoldCTunYnRc5WWEAZh%2B8i7wGf01Uor0rFm8mmVYY3IyrZdcPvbQBUtpWk1fty9z2qw6qM3b18wDs8Hgt%2B2Lyeabdtp4eITcFYJS4r%2B8Ys6joJJO1udBhukCu%2FQEDzayHlb1F43McrRCMWac9KajL7iJacWwWTjwwg34T4%2B%2FbWvZXOSIoeulJX7fflVZNiWCJQK4ILz&X-Amz-Signature=c7ab81abbfc7a37e807073c9a616b783cab31672bdeb76a2001d8de063c57923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6F2V2C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd6%2BVBi0rFTtOcAIGO3YnUDbT95CIGEhUSVFaG0kPjSAiBWKiinRP6DMGT56d7eSKhSiomjVPpxC0T7sBYa6RIHnyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMfV%2FS0RuJTHU866KKtwDe1XXeoMTR171YgabZqfGe%2BBxrKy1tnVvnN0vdIjCDozrY4X%2FiR389B1EPa5fIp%2F9fHZv7AgPzkRJNL9L8gXTe6TBOru%2BJscy3g0F72B2DgGyndJzsloc70HFZD3ryezhI8xzqAm5jiVxN3U6JnlHwXWKVz3sOamE5feqmwBQ53g4bKf5K1IJwT5SbWvd5kLzmpN3h5wPh6ebtvYYe8FYMcltPPJO5D84GqdekG%2F3on2zHinJR1kG8sirtGC4NY6duGFW%2BWNcGkqCDrf%2F5SiBKqF3QfOROLXb9H1sxin8PF%2FV8G7tRpyxHQQaJk7hwPSak2raPVEyTuVxdLyKfxxWxJjoPo%2FXQoTO9zE7K%2BXfS079MPH%2BfLeQwnWjbZjH%2F2ttsq%2Bj3hLXZrXiz7BVdhDWi7suEdwUnt0%2BqJj4buDowQH5g3iSlW34cHFsJ9iVo9O6RtaKq3JkEsU74hxR8xpQ8Dzjd8SHi%2FRI40mYhQyRAzyh2T7n3DPnOH6lgFNXUcYLnBa6srr0IYruiZhpj8wdv4PUGW%2Ft2HAKrtBEpN0PoyPv1vN8NhlI0T24KXDabmwU2RcXe7PbUa8iYL7lsxzvGI0q4PQnQsHW2hF47fGdN1v2hqeOAGy9iIry3nowzInHwgY6pgGu40BgKz3Gizq9qyQld1uougoldCTunYnRc5WWEAZh%2B8i7wGf01Uor0rFm8mmVYY3IyrZdcPvbQBUtpWk1fty9z2qw6qM3b18wDs8Hgt%2B2Lyeabdtp4eITcFYJS4r%2B8Ys6joJJO1udBhukCu%2FQEDzayHlb1F43McrRCMWac9KajL7iJacWwWTjwwg34T4%2B%2FbWvZXOSIoeulJX7fflVZNiWCJQK4ILz&X-Amz-Signature=0de764f015be3172d4ff45698158ceef84db89414e3ebad98cc053e39ab05a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAXEKDP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUetkdGsjwIifvYEzTZgGO8oBC%2FxCOakCkVf3Gbv4PtAIgGg3izsB%2Fo4uJJcGQLVXSjAp9%2FQKIzaTH7ibeDxBcluMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDHolYT2mw%2Fqg3zrCrcAwinUBfBS4uiJLgOFwqvbpVi%2BLuxPaUY5bmDXF1vgvVamLGL4%2F7TjZO%2FlxkgdsrptvNEkawXzyGuy%2FYnAZ%2FaHaFL3ZzgL7zMCsglK2DzoYvQFNU6%2BaxBltEyMaCTELQD85F%2B74QwhJ8w%2Fwe4gddq0YsHsGjjqae60lPMQTqNaExC1HRfQXHBkbCkrOW97kA0XYz%2Bwe%2BETPQANiAflZvo%2FaKT7AO898PXpoIehHXvT%2FwaFRTuMyZlbMSj637Fa1njdCFE7aU%2Bcl%2Bg0tYGZ4xwLmfWEAmQrx4SPm68A5GilJMLHp0uHQX92Qrl4AyuSiP9Opkwm6wnYLMePeAljSY66l41qSR7vcBZHo1FWbDTud8QwRSCjwiwUfsHq%2B9nYwSZbaqVt9nlCH0hHvLGM28NS9uHjh%2FVqn2kTaFu00Oaf6EXoDxg0kvF6L8%2FUbfJOZqm14kfZbAKIuMRiVhu4qzfG2zLeMq4nUrtp7BS0M3q5UCewo8xdx4pvQmmb0ZTL9168Hm6I9Rx%2FalstLKZOpVp87Do05k0YYMkwao9P3TobH7VLLOxC3RU3LhwbCQzqLfv2%2FpXDNoRD8YsofIG55LkiWZQhOMP%2Fc7eOsghzrvZH4PBBLlXm9uq%2FtN2WPJaMP%2Fox8IGOqUBiQdzRU8Od8O2LLSkLaHyRmUhKDEFCJXOJZuNRM8ZCkKO1YSaeRwp3N%2FEf2sGVIr4RMCsXrI0Wfd1nWtUZzZ1V7kQsN%2Bx5wYg%2Bm6eHioScj%2FgfGgowm8VRtwbsu3lkVmH11bbK29idLAubkEtGfincwTDjtGQfSDu5KNiK346kpuBeO6K71zHaK9wDPJ3Zv%2FkzAut%2B9muaRCYCZA%2Bq7PHBUjaghgd&X-Amz-Signature=f2e8a696ef40350f2cfed7a0ff819558105d201b5515b656f1a318fa044a07ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7AQZH4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNxjYnXpdnC3M42MCmWY4LXD9ANwQWzrh2gXFV0vhVqQIhALY7lURooSpeRSJV73LGxJoaVkZtLSCKsP6TvJd495WNKv8DCH0QABoMNjM3NDIzMTgzODA1Igx9ydt2pz%2BpsKKqbBUq3APfbSrf1vWA3%2BpA%2BTSb6dTPaRTtbbkFrl5%2Bp%2BgowHnQ2vatj3ikravlHTcw2faNjr%2BY3LMHp4ZV8QLN0C43Ss4E%2BqZe2Cp1NIOcire9CEhrwDu3wVSxSqu568nZEDDPStRK%2FX6Fu%2FQ%2F6IEAYVUHZuRnxMKGVdM9PcxMKLetS9xNI8a1ahQtmrBVerBPlBHds5tCKPegRNT0HWIjz9NvOWpXQ85E8wznCa2HQbbKxhCoLoyawsegCj1J3broXQGUtX4xectj3xXi2qn%2FdL39aFVcHXTmvqnVAIQchThJIs9FadhmRIvcswJtbBl2JsD3MOMNme8x%2FveeI8r5hEdbnual8gAmTw%2FrruwiQxGvmt%2BQ%2F5jQTLWS0V2PHF3WCYMvI%2BsavewsomllECPeglCxffUJisRbf12mbY9aJb2oU7Mj15d8ecNY3pWcO1EIjBwlDCXzw9TpXMAH3XpLW97Sxo7s5Bg5TZCE5JkxqcOErkhlBDbgzaIpfiBfJPXnDNvYVtZP2AD6IarL1xZ3TMlHZD%2BS15PXVSDCYrkgeEsYlcGpVuNZfe8n9jyDItX3Uzb4pM2Va%2BRYttDuXyBqrc9TR0s%2BPt%2FQQLYL6DiuDpGCnHzFX%2B51q9wcFS2nbnPblDDziMfCBjqkAXKQtWuutdbAexGdsEBEhdc%2FOMWbVMyIMlBA6mokM6%2BOIHulVoOb5BRkfuc6LlxeOMhSq%2B9Vp1jS0QaFDh80NMzeONosJoBhIbIqW2QuQsWvVa92dYhNXbuxDMFVk1hBvmcLy3QhgOoCwYRxmOAs3CvMx%2F9v%2FNjtbhdbeZ%2BKHNb9lgun3fT4yr2j0CHwFf4g%2Btme3FA0RbT0D%2FWHU7mzbHoWfW8L&X-Amz-Signature=a060853a25070e39660dc27208d7e94294b419f6a9cc8af7af263539f97b04aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6F2V2C%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd6%2BVBi0rFTtOcAIGO3YnUDbT95CIGEhUSVFaG0kPjSAiBWKiinRP6DMGT56d7eSKhSiomjVPpxC0T7sBYa6RIHnyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMMfV%2FS0RuJTHU866KKtwDe1XXeoMTR171YgabZqfGe%2BBxrKy1tnVvnN0vdIjCDozrY4X%2FiR389B1EPa5fIp%2F9fHZv7AgPzkRJNL9L8gXTe6TBOru%2BJscy3g0F72B2DgGyndJzsloc70HFZD3ryezhI8xzqAm5jiVxN3U6JnlHwXWKVz3sOamE5feqmwBQ53g4bKf5K1IJwT5SbWvd5kLzmpN3h5wPh6ebtvYYe8FYMcltPPJO5D84GqdekG%2F3on2zHinJR1kG8sirtGC4NY6duGFW%2BWNcGkqCDrf%2F5SiBKqF3QfOROLXb9H1sxin8PF%2FV8G7tRpyxHQQaJk7hwPSak2raPVEyTuVxdLyKfxxWxJjoPo%2FXQoTO9zE7K%2BXfS079MPH%2BfLeQwnWjbZjH%2F2ttsq%2Bj3hLXZrXiz7BVdhDWi7suEdwUnt0%2BqJj4buDowQH5g3iSlW34cHFsJ9iVo9O6RtaKq3JkEsU74hxR8xpQ8Dzjd8SHi%2FRI40mYhQyRAzyh2T7n3DPnOH6lgFNXUcYLnBa6srr0IYruiZhpj8wdv4PUGW%2Ft2HAKrtBEpN0PoyPv1vN8NhlI0T24KXDabmwU2RcXe7PbUa8iYL7lsxzvGI0q4PQnQsHW2hF47fGdN1v2hqeOAGy9iIry3nowzInHwgY6pgGu40BgKz3Gizq9qyQld1uougoldCTunYnRc5WWEAZh%2B8i7wGf01Uor0rFm8mmVYY3IyrZdcPvbQBUtpWk1fty9z2qw6qM3b18wDs8Hgt%2B2Lyeabdtp4eITcFYJS4r%2B8Ys6joJJO1udBhukCu%2FQEDzayHlb1F43McrRCMWac9KajL7iJacWwWTjwwg34T4%2B%2FbWvZXOSIoeulJX7fflVZNiWCJQK4ILz&X-Amz-Signature=30a6dc59abc6640658427e32e2acb788d24de8e236b2a92523160bb3f45bc84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
