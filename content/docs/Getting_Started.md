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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKTPOX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUjZoiUFCXTbeWhGxjjhzn19VtknB9%2FAkl1c5qAYNvdgIhAPKWkMltLq%2BxfEOeScNptSU2Ws32PAUv2iFBnOCGSWCXKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvzMFoZwlHFCX%2Fj2cq3APxuODxW2uh6weCPvzy3HqCFo1YsKn8OgO%2BggVkVBJy3R4eiJG5Kt3xANQbLu0S%2FzgUE0HuPR1Na1KjLLkmr%2B3CpeXa%2FyObq6MNF4iBhGDFtG7h6P6fZQjUsMLe16Iyp5YtgIC4QDqjIT%2B47QF0WU22oangudpVrrOCBcoHZ6Q2Py3odoIDukNjumz4YBA1xeuSduRSPFklkVlvwfG0DINBIukzeBwPgfBSlNXUGS%2BCKjDOrm5bf1NAlcDIiLnhQ7kKvtPbaK2AJPzP%2BLerxjzBjWLRsrzd2VdS163MIm6fDorqYYjubLMGvqJ1dorJKwkQCWnp8nSpuByDm%2F%2FIHaAxhWthoJ%2FjU8JZzJNhMiZFSSprs4FZit%2FZLa7hAJ74xSrpxctbOrXADY9WU609U%2BCDOqWgTDVpq%2BClT9sR9FR1alPrZsBgzEKtD7fdZIcsuoY%2Fp9RMCuD2Nvraa3%2BDBxgWCVINaLOMV1rIuwPBnBtO1q%2FPo7lTyTS0mkbwaobLd0LIp0TfVdpIsiV1uH4wDTheR4%2Bdsfu3w9GdkddFBMsIB4Ei3Q29jEZieJwc88NhZiUZSfjy0Jgkbzhkfm88xzLK%2BGxdw9I23OtdhtNrvHXS4m5UOTAVcVhthjpcczCvl%2BnBBjqkAROdAX3SOKvBvbxDwI1OVIHkcoApQd5cVGNpE4UfdG7mDT115jb4XzXN3kg5u0OMiNg6Mou4TKzGWS5BZhU4Jwh9641lccOuZT6e6xeU9mNCvT82QGh6gzwIFfBZZW1coriaI9hJKRPNW0kfRDCmyr1xcqk7%2FqxBZVhRtTT2XEWMpaui3Inr%2F54Z4%2FRs146aoajeYMCLn%2Fhn7EeUscaKN9SLZpce&X-Amz-Signature=d181bf5328ca9ec6d2bcd8a90855a285904bca0d5dec2090d8bb82f7ae9d61f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKTPOX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUjZoiUFCXTbeWhGxjjhzn19VtknB9%2FAkl1c5qAYNvdgIhAPKWkMltLq%2BxfEOeScNptSU2Ws32PAUv2iFBnOCGSWCXKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvzMFoZwlHFCX%2Fj2cq3APxuODxW2uh6weCPvzy3HqCFo1YsKn8OgO%2BggVkVBJy3R4eiJG5Kt3xANQbLu0S%2FzgUE0HuPR1Na1KjLLkmr%2B3CpeXa%2FyObq6MNF4iBhGDFtG7h6P6fZQjUsMLe16Iyp5YtgIC4QDqjIT%2B47QF0WU22oangudpVrrOCBcoHZ6Q2Py3odoIDukNjumz4YBA1xeuSduRSPFklkVlvwfG0DINBIukzeBwPgfBSlNXUGS%2BCKjDOrm5bf1NAlcDIiLnhQ7kKvtPbaK2AJPzP%2BLerxjzBjWLRsrzd2VdS163MIm6fDorqYYjubLMGvqJ1dorJKwkQCWnp8nSpuByDm%2F%2FIHaAxhWthoJ%2FjU8JZzJNhMiZFSSprs4FZit%2FZLa7hAJ74xSrpxctbOrXADY9WU609U%2BCDOqWgTDVpq%2BClT9sR9FR1alPrZsBgzEKtD7fdZIcsuoY%2Fp9RMCuD2Nvraa3%2BDBxgWCVINaLOMV1rIuwPBnBtO1q%2FPo7lTyTS0mkbwaobLd0LIp0TfVdpIsiV1uH4wDTheR4%2Bdsfu3w9GdkddFBMsIB4Ei3Q29jEZieJwc88NhZiUZSfjy0Jgkbzhkfm88xzLK%2BGxdw9I23OtdhtNrvHXS4m5UOTAVcVhthjpcczCvl%2BnBBjqkAROdAX3SOKvBvbxDwI1OVIHkcoApQd5cVGNpE4UfdG7mDT115jb4XzXN3kg5u0OMiNg6Mou4TKzGWS5BZhU4Jwh9641lccOuZT6e6xeU9mNCvT82QGh6gzwIFfBZZW1coriaI9hJKRPNW0kfRDCmyr1xcqk7%2FqxBZVhRtTT2XEWMpaui3Inr%2F54Z4%2FRs146aoajeYMCLn%2Fhn7EeUscaKN9SLZpce&X-Amz-Signature=4396f86978e95c475071a52f8e783a3bc02daeec1247637dce6c77098aea2b26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKTPOX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUjZoiUFCXTbeWhGxjjhzn19VtknB9%2FAkl1c5qAYNvdgIhAPKWkMltLq%2BxfEOeScNptSU2Ws32PAUv2iFBnOCGSWCXKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvzMFoZwlHFCX%2Fj2cq3APxuODxW2uh6weCPvzy3HqCFo1YsKn8OgO%2BggVkVBJy3R4eiJG5Kt3xANQbLu0S%2FzgUE0HuPR1Na1KjLLkmr%2B3CpeXa%2FyObq6MNF4iBhGDFtG7h6P6fZQjUsMLe16Iyp5YtgIC4QDqjIT%2B47QF0WU22oangudpVrrOCBcoHZ6Q2Py3odoIDukNjumz4YBA1xeuSduRSPFklkVlvwfG0DINBIukzeBwPgfBSlNXUGS%2BCKjDOrm5bf1NAlcDIiLnhQ7kKvtPbaK2AJPzP%2BLerxjzBjWLRsrzd2VdS163MIm6fDorqYYjubLMGvqJ1dorJKwkQCWnp8nSpuByDm%2F%2FIHaAxhWthoJ%2FjU8JZzJNhMiZFSSprs4FZit%2FZLa7hAJ74xSrpxctbOrXADY9WU609U%2BCDOqWgTDVpq%2BClT9sR9FR1alPrZsBgzEKtD7fdZIcsuoY%2Fp9RMCuD2Nvraa3%2BDBxgWCVINaLOMV1rIuwPBnBtO1q%2FPo7lTyTS0mkbwaobLd0LIp0TfVdpIsiV1uH4wDTheR4%2Bdsfu3w9GdkddFBMsIB4Ei3Q29jEZieJwc88NhZiUZSfjy0Jgkbzhkfm88xzLK%2BGxdw9I23OtdhtNrvHXS4m5UOTAVcVhthjpcczCvl%2BnBBjqkAROdAX3SOKvBvbxDwI1OVIHkcoApQd5cVGNpE4UfdG7mDT115jb4XzXN3kg5u0OMiNg6Mou4TKzGWS5BZhU4Jwh9641lccOuZT6e6xeU9mNCvT82QGh6gzwIFfBZZW1coriaI9hJKRPNW0kfRDCmyr1xcqk7%2FqxBZVhRtTT2XEWMpaui3Inr%2F54Z4%2FRs146aoajeYMCLn%2Fhn7EeUscaKN9SLZpce&X-Amz-Signature=7001100757c4f4e13170ab845c0a566c1a81b5b097e46427227f88dabf5706b5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PXHCMQK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9P%2BoCM9nEFMv7rD6m4hqysFQy6%2Fky9L%2F8coZX8L9CmAiBLbPaAuukJjKqhXc3hNnxayAWRdCYi7x5CZi6S0FN5YCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMNdZvyurHHt2GmtVKtwDb4g9lRO%2BMnlBhZsDua7y3PDrHsJ%2B51Wac7kqQWgvPwOKt3NZpxq4TCIRq4h3344qHPTSY49GJFSjNE574DyQFa8Pm9ncVibbnGFJSYbAoJLGhO8ZAVEv3ukC9ENoUPtrMvHyxEnl348FyPlzjSaOFaS7fIFmdQ2texdCDcpr%2BnJuAhKzCgurFcHHOmv3WditOtgNlhO3zS%2BFXtAXMPe4t8oEXhQOur%2FMbdcXXtSCiAUEihZx%2BlA%2Fnz1lRlxQrl%2FfEU8XkL9J68G5MKQ9bhoaPVAlykiYOTSDi0vnb9FAVihWQOPtpptCB8sIewLcA7VwppA%2FC7DROl%2FEi3%2BhkdarE2Rv5dClY6o0YSTxEYew9U22ImcN8Ywa6MgddewQVAf964yU3YoY55kz%2BW%2FJtzuX%2Fq33ZGjpN7z9ZJ6q3wraQMuM5yqmm71zVkNJMzZfTuG7wkoX0SWwnvCrOwb6zcIgVGKY%2FFUfkJQZF5F7uTqLtpyvSKBCPJ7vVGHAnSOCkkGyOr%2BhGOxtfvg1OCkWsUfl%2FKo51cqaCYWr3GTCNJ2Fh8rfOQ%2BGy9o0G%2BxhY7E4ae78ObVCtC6MYv5plGjp6kjbtGUtglFYOYS7IW8q77TAIJJd%2BBgS9M8onOmAAVIwgZfpwQY6pgE8R7AP4IjpFVtF0z8G5vRsQU6Kl6vS7Va1r%2BPi%2B69itEKEwRyur6x70ujlh1RuaTKTfJI%2BAlh1vbPqEzHHruROVj9EC1fdNpHF%2FD7giQC3AEERLEKAe8Kicp%2FoeqH8GD8ObFGsASHaquT%2BUd6k1eSfPrLpTUIpZ0JZnQBLe1PzUNSh5cVBXgCcO42qXEESPxjV6KMs6hPnPegLJet89EmUoVg6NC6g&X-Amz-Signature=da8459d56b0bd6ce40a47ee0ab0cc42968d4fe51124a106b8c8802bc6c57c2ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESVLOEY%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSG1G2TW3XyW16ZOH1ao6Sn1NyKTh%2FigbSMNWPzPGn3QIhAJeSvO5851EFYl%2BQcAoWi1bpmgbXFNSbTFhfyuXJ0RFaKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsleLKtfuJO5YZO1oq3AMmnS2ZuauQjSImmZoSoLp3LZ6viqVVSLaOF9HCryPUufciHzAqZfiJcIfYFhpDeRXrvcczvIZzGAbSe3ih55GvnlxrLnQOPIwMggil2hdIZ0GTx7r%2BkUjDU%2BtC9xMEEdudKpCOdhl1UgnULDEjKPLQO15eCk5L24p4E1gyk2Ctp9cdRgI%2FwNkZWVHBWgmzfJdJi4HfNLFbwcLbbJorAxJRjT9BYe5j2WNmHUU5nb1zlihVtHix3QZQiXd9uP1EsV%2FowbEiui1br89ThjOvqYlKzLJbSYYZQfeNQO627kf9rjMy3GMDrPZQ5%2B5pjs26TiWu4xErZqWEOIYMsgUEz2AaCzoQkqyaaS65j2MBI%2Fkw1s3tvrhMvN4bLMcMS8ZLqLgJtZfFTh7jQqiaDUwqV962Qel5wJBob3XvRSnGto5bRiatiL7zliUPVpnUgbuKVEjfNYZXlrminuCvvznMBt46ZDmTzYW58%2BuIZxYnq1HQN23RovCqUqa0h9IuhGK%2FeOJku4UWx3MwQeB%2FAJMBiiUIIneMSqX30poFc0D9J75%2Bhih6xI37wvLzkAwhbQxmGmGdmwG5UyT%2BfINWeaU%2BsTAMlbsGn6eo7QnQm6F7QAbdgIAtvkCVYHJIP9MVbTC7l%2BnBBjqkAT1FbrTuSnE1YABhdRj%2BeOV1%2BpCFogcwcA3dLe%2F0ClzyNHoFiPr1Wx0NySUFezx8Y1xGHKKkvZMMmpt9%2FggouOFXQnDbaBCdgH%2FPaU9VOmgxsp7CMD6fO%2Bj7Xg7tpEAv2I1dVLErTYJV5erluoJl9TKqnIad9aDBWfiLRwzaPWjlUUCXS8jGGgZn8bMEXhYGt0SY%2FXJwnAiZM1ogqM0%2F8xaLsjTf&X-Amz-Signature=1242b1293413473915576987b49817d27c51d06a36c0078f0a29cdd894757041&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTPKTPOX%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUjZoiUFCXTbeWhGxjjhzn19VtknB9%2FAkl1c5qAYNvdgIhAPKWkMltLq%2BxfEOeScNptSU2Ws32PAUv2iFBnOCGSWCXKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvzMFoZwlHFCX%2Fj2cq3APxuODxW2uh6weCPvzy3HqCFo1YsKn8OgO%2BggVkVBJy3R4eiJG5Kt3xANQbLu0S%2FzgUE0HuPR1Na1KjLLkmr%2B3CpeXa%2FyObq6MNF4iBhGDFtG7h6P6fZQjUsMLe16Iyp5YtgIC4QDqjIT%2B47QF0WU22oangudpVrrOCBcoHZ6Q2Py3odoIDukNjumz4YBA1xeuSduRSPFklkVlvwfG0DINBIukzeBwPgfBSlNXUGS%2BCKjDOrm5bf1NAlcDIiLnhQ7kKvtPbaK2AJPzP%2BLerxjzBjWLRsrzd2VdS163MIm6fDorqYYjubLMGvqJ1dorJKwkQCWnp8nSpuByDm%2F%2FIHaAxhWthoJ%2FjU8JZzJNhMiZFSSprs4FZit%2FZLa7hAJ74xSrpxctbOrXADY9WU609U%2BCDOqWgTDVpq%2BClT9sR9FR1alPrZsBgzEKtD7fdZIcsuoY%2Fp9RMCuD2Nvraa3%2BDBxgWCVINaLOMV1rIuwPBnBtO1q%2FPo7lTyTS0mkbwaobLd0LIp0TfVdpIsiV1uH4wDTheR4%2Bdsfu3w9GdkddFBMsIB4Ei3Q29jEZieJwc88NhZiUZSfjy0Jgkbzhkfm88xzLK%2BGxdw9I23OtdhtNrvHXS4m5UOTAVcVhthjpcczCvl%2BnBBjqkAROdAX3SOKvBvbxDwI1OVIHkcoApQd5cVGNpE4UfdG7mDT115jb4XzXN3kg5u0OMiNg6Mou4TKzGWS5BZhU4Jwh9641lccOuZT6e6xeU9mNCvT82QGh6gzwIFfBZZW1coriaI9hJKRPNW0kfRDCmyr1xcqk7%2FqxBZVhRtTT2XEWMpaui3Inr%2F54Z4%2FRs146aoajeYMCLn%2Fhn7EeUscaKN9SLZpce&X-Amz-Signature=e5b45a48635018e8955a48ca091ea0ab7d40c961f161a4c65363e0975be42207&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
