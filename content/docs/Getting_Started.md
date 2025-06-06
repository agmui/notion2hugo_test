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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRMSLPX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA0xEZZdzwCBZllAfmVlWjX8KqUGtzL0MrTa5BLRVmrAiBJtVfHd19UfWd3d5B%2B%2BXJve0N6CW57ydkolA4zBiCebSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMNy7qoqcWcTql8VTdKtwDtNcj7nnLej6eVU4k5klCocjKkRuHiPxm6S9xuJM42tvL8q8kjx%2Bg7AOXmgBljJWuT%2BdV5WwiZb%2BaX4FT6vOFzcUO1U%2BX%2BP0Qx4fCyU4ihcBI%2BtGdNHI8izjxIfFR6mDsqPdf1XKS1sHYGEId19kvft3qWQ8OlE62p%2FPijtMh%2Fru5QPVFFaAx14%2B9p%2B8s09ho7h9t8EO6kWZKt3Wkfl5m6H9lxZiMl5OBqmLt0DKj4ERreIH%2FI38F%2FHph6RnFHDmVO5Udsr3R%2F6B%2BrU5CM4OAqPav327QDKN6%2FrnHGeEdGT6fkuLdl%2FS1xEiTI%2B6P3hLYWJVF1XesS0b8%2BM9jtf15O0yDuKTKsaCp04rj6dGbg3fSdHmNpv8AdZHoM1LhxBAMoYZyzrAeq0gH0QtuHQjUh1XeRxO5Wb2I30rgHNt7LiNOlxuK%2BLtQ6DJNcJhMG0wT3v8rLmAAWigGoeJUqDDLwaduo1mmATyL6fF6mLaPIAWLlkgreJHS7NfGKMwem779MQWrefa0bLozH80pLrB8Qnn7dAcjrRA6S%2FVDTdmbCZNyLtsrNg1UWBPAzj6ZcEa37FieYPRy7JqKBk2md9rlVfTCedrA5watvL2X1CJk%2FyHBWxM%2FF12TPn7f9tMwl4eLwgY6pgGrE4jQiFlOgwJ4S9CyPVRB1vW%2BY00%2Fr94OweF6VCbCgRXRuJKyYax0f1Kb335DCMpqAIoNBbF0eo5j5aX0yR6Xjsz6zUC53t6YV9%2BxVC4GXIqE9OTrUir8jJmdlmDDNuaXFvw7JBss7f4J1MZs%2B4Ij2zVDUn8R2nzglOjq8GpbckL6R5eBtcICoeOVTJ9vLa7Y0i62QBm4a8AmItzQgWfMUu4sqIsw&X-Amz-Signature=94bf6c5732e1f3e5cd7c35e249e5d80caebde5651d79dec59d41fd3414c86ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRMSLPX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA0xEZZdzwCBZllAfmVlWjX8KqUGtzL0MrTa5BLRVmrAiBJtVfHd19UfWd3d5B%2B%2BXJve0N6CW57ydkolA4zBiCebSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMNy7qoqcWcTql8VTdKtwDtNcj7nnLej6eVU4k5klCocjKkRuHiPxm6S9xuJM42tvL8q8kjx%2Bg7AOXmgBljJWuT%2BdV5WwiZb%2BaX4FT6vOFzcUO1U%2BX%2BP0Qx4fCyU4ihcBI%2BtGdNHI8izjxIfFR6mDsqPdf1XKS1sHYGEId19kvft3qWQ8OlE62p%2FPijtMh%2Fru5QPVFFaAx14%2B9p%2B8s09ho7h9t8EO6kWZKt3Wkfl5m6H9lxZiMl5OBqmLt0DKj4ERreIH%2FI38F%2FHph6RnFHDmVO5Udsr3R%2F6B%2BrU5CM4OAqPav327QDKN6%2FrnHGeEdGT6fkuLdl%2FS1xEiTI%2B6P3hLYWJVF1XesS0b8%2BM9jtf15O0yDuKTKsaCp04rj6dGbg3fSdHmNpv8AdZHoM1LhxBAMoYZyzrAeq0gH0QtuHQjUh1XeRxO5Wb2I30rgHNt7LiNOlxuK%2BLtQ6DJNcJhMG0wT3v8rLmAAWigGoeJUqDDLwaduo1mmATyL6fF6mLaPIAWLlkgreJHS7NfGKMwem779MQWrefa0bLozH80pLrB8Qnn7dAcjrRA6S%2FVDTdmbCZNyLtsrNg1UWBPAzj6ZcEa37FieYPRy7JqKBk2md9rlVfTCedrA5watvL2X1CJk%2FyHBWxM%2FF12TPn7f9tMwl4eLwgY6pgGrE4jQiFlOgwJ4S9CyPVRB1vW%2BY00%2Fr94OweF6VCbCgRXRuJKyYax0f1Kb335DCMpqAIoNBbF0eo5j5aX0yR6Xjsz6zUC53t6YV9%2BxVC4GXIqE9OTrUir8jJmdlmDDNuaXFvw7JBss7f4J1MZs%2B4Ij2zVDUn8R2nzglOjq8GpbckL6R5eBtcICoeOVTJ9vLa7Y0i62QBm4a8AmItzQgWfMUu4sqIsw&X-Amz-Signature=e28c942ad8e0c3c7dbccf784e954b7036d57ff3f038f3babaad9c2d80f35a032&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRMSLPX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA0xEZZdzwCBZllAfmVlWjX8KqUGtzL0MrTa5BLRVmrAiBJtVfHd19UfWd3d5B%2B%2BXJve0N6CW57ydkolA4zBiCebSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMNy7qoqcWcTql8VTdKtwDtNcj7nnLej6eVU4k5klCocjKkRuHiPxm6S9xuJM42tvL8q8kjx%2Bg7AOXmgBljJWuT%2BdV5WwiZb%2BaX4FT6vOFzcUO1U%2BX%2BP0Qx4fCyU4ihcBI%2BtGdNHI8izjxIfFR6mDsqPdf1XKS1sHYGEId19kvft3qWQ8OlE62p%2FPijtMh%2Fru5QPVFFaAx14%2B9p%2B8s09ho7h9t8EO6kWZKt3Wkfl5m6H9lxZiMl5OBqmLt0DKj4ERreIH%2FI38F%2FHph6RnFHDmVO5Udsr3R%2F6B%2BrU5CM4OAqPav327QDKN6%2FrnHGeEdGT6fkuLdl%2FS1xEiTI%2B6P3hLYWJVF1XesS0b8%2BM9jtf15O0yDuKTKsaCp04rj6dGbg3fSdHmNpv8AdZHoM1LhxBAMoYZyzrAeq0gH0QtuHQjUh1XeRxO5Wb2I30rgHNt7LiNOlxuK%2BLtQ6DJNcJhMG0wT3v8rLmAAWigGoeJUqDDLwaduo1mmATyL6fF6mLaPIAWLlkgreJHS7NfGKMwem779MQWrefa0bLozH80pLrB8Qnn7dAcjrRA6S%2FVDTdmbCZNyLtsrNg1UWBPAzj6ZcEa37FieYPRy7JqKBk2md9rlVfTCedrA5watvL2X1CJk%2FyHBWxM%2FF12TPn7f9tMwl4eLwgY6pgGrE4jQiFlOgwJ4S9CyPVRB1vW%2BY00%2Fr94OweF6VCbCgRXRuJKyYax0f1Kb335DCMpqAIoNBbF0eo5j5aX0yR6Xjsz6zUC53t6YV9%2BxVC4GXIqE9OTrUir8jJmdlmDDNuaXFvw7JBss7f4J1MZs%2B4Ij2zVDUn8R2nzglOjq8GpbckL6R5eBtcICoeOVTJ9vLa7Y0i62QBm4a8AmItzQgWfMUu4sqIsw&X-Amz-Signature=7c460ca17a488a682a69e176baeb2d4148ab4c7d34804980e32b64c714ce7ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4IWWS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9fsvyFt%2FH4qdUzFGmWGMLmtt5csukvqgUcZ5aS7cOOwIgFEp9%2BZETsAkiJcfIIQP8L2Onj0EHAzPr33rb%2BsER13gq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDD88DU7fmuyIMhAY0yrcA7I5k1Q3HMdCySUQGBqHsJ%2Fe%2FBAYZAiASz3sP%2FGRVPIVUSFvttgUF3KhBGxZK53%2B%2BfyhPdfLiP0Okzf3WLrhT87TXMJkqK5SeRs5yABGkn19ABRG8Agzw6R24yKyeZyurGb37iv5RuxmZaABe35dTmESKtqCceOr%2BvNQEpgIxIKE0j69V4QIZal6bUOjTlHk3Jpn%2BY3d13ej3hAmZPX8xz55oY8zs5WA6dpd%2Bk9PaNmgiJQRpQ1rSZ7guAtvcmkDPSL1Y2ZnhsQ4AAM8uAvaUo%2FVLR0W6G0PDbBdkjJe90582UXycnxEEHKVhZKtsYJ8peiH0QigLKZtbmCVY2%2BaeuKvWf1ij4aOnMCrcca6ZZVJ6%2Bmb8imYnd18c0jX9g%2FVDyfmHVPj19GixQ7SeQxFak23HHb%2BTiB78djWm8B3zKsHpl8By%2Byrc6IPjoNKiMQZmpqm77ahC11UgJESh%2Ffq7pPzmug%2B8HJuyJOf8PXnZWMs6jVLaaBVSQ7a1srr5PsiWKv0xVngswxQqVXKlzKhf6B33rmGXxRXpW36QeLZm6qDl9XD6zcge4XUZBEgvBrfFHdZzZGFshm4jouw4MYLf2aklsER6Wy%2BokAMAWBbPnSXrLFQlywBFuutG6b9MJeHi8IGOqUBwIuG6e56zPwYR1VptbsjnTig7JrkHXgo%2BB5iXjFffi%2BdqVEtD18wJW%2BTKLPY1Ekpjceuwtl4YYFRZHWbYXX244LJjZgIdDHX4rNvozDulaRgKRs3tAZXJ4va1AbDvapy4XeRbYJEblAHQRkSFTDLH1URAoKEk2lo32TwQf4iT3GkWu8nl%2BZDGjluBMunYYPMcPqOEe5HWlsRhuJ%2FSX%2Bz0ikKFrKQ&X-Amz-Signature=b2ff9189f7d3a3b6d083406cdc60046520e6aec8f2d85759165646d52660e3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GLWSZDV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFupJ05LCpO3lc6E9aERbgJT6HxjD0jl1t49XQhDJtCAiAC0YqyLu0lQswweUlHE1d%2FZFk%2FV06PfApKGVgzv3xO2ir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM4I9M7DXjfGBzoUtnKtwD69F3A9qelifJd5KVDj9mB1R9hoJYlRJgsxk%2Bd99riryn3PWNV6nA46MfkAlbQFRu642FhCMI9sLh%2BcwheegEyBHu85daP%2Bh8Q9FdHXlxs5ItnPZmTtggiDwpZfq%2FZy%2B%2FQr6Eluu6EbEG%2Fwx%2FDZj4fDgEmDorOlznBXfJ4w5GhPAJRmTPwjwmGR0UGwTRYYozLf9tLrdRqo19MS7cAHLDojPFyFehX3Wv%2FOJ67k5RlIXomv9SeSoQub0lJFAXY55UgstKHTNUqiV%2BDkPNR8SLnOKBqeDJkBxKNXm973Gj7Cu1w6gz7OOa5HZunxm2cVsNDbJcL96h2PmfJvHm4RcP0f5FMaxhIEYi2ygLaEpxqUp5fgLoNe%2BijgqcihxsZrsfia8LmNnbXyCOuXUdVO0pDP35opyGn%2FUblD%2B9mm0ZDk2jE5x2gelzG3%2Bm3OvzHb4sMYB6BNeaBHPPuHYquGHl3lz2jp%2FMXR86%2BHnEBg0dNLtF%2BRLEXQUM%2Fs%2FCvUG%2BW3xYeEVR1Z4hSxdgc%2BFE0uiLEyECs3lAGfgghaA%2FyaV4o2ZrsZ67k653dI0Lh9yX8OrFQKSgHf4GuH0tC%2FMMb1hDI7Hb3SP1UFP7twEhnFTAjsnXXXZbyWPBdOWqYj8ww4aLwgY6pgF4c44ZItYzR5xgi705ATQEHY%2FrPX8vTVEbtXMT9H8c9VkIj2t1UB2XB%2BYMO1G7cxD5%2Ft0NL%2B8wsKkwr6408MgEHmIDmuin1QzjoxDInFuCsuKsCWiK%2FRPEqnguftvQB%2F6mrxSE6WZl5WlM5iu1yADtB30U1fMbn0FTz2mLJ1FLse2Y%2FpeWivZcbDoyVQDICVLk1rPyiKVT%2FQUeL6WiROit886Aj9j9&X-Amz-Signature=70805219a29a87e3c7ae932881a7d17873532a461c8067841256c360f89026b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNRMSLPX%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGA0xEZZdzwCBZllAfmVlWjX8KqUGtzL0MrTa5BLRVmrAiBJtVfHd19UfWd3d5B%2B%2BXJve0N6CW57ydkolA4zBiCebSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMNy7qoqcWcTql8VTdKtwDtNcj7nnLej6eVU4k5klCocjKkRuHiPxm6S9xuJM42tvL8q8kjx%2Bg7AOXmgBljJWuT%2BdV5WwiZb%2BaX4FT6vOFzcUO1U%2BX%2BP0Qx4fCyU4ihcBI%2BtGdNHI8izjxIfFR6mDsqPdf1XKS1sHYGEId19kvft3qWQ8OlE62p%2FPijtMh%2Fru5QPVFFaAx14%2B9p%2B8s09ho7h9t8EO6kWZKt3Wkfl5m6H9lxZiMl5OBqmLt0DKj4ERreIH%2FI38F%2FHph6RnFHDmVO5Udsr3R%2F6B%2BrU5CM4OAqPav327QDKN6%2FrnHGeEdGT6fkuLdl%2FS1xEiTI%2B6P3hLYWJVF1XesS0b8%2BM9jtf15O0yDuKTKsaCp04rj6dGbg3fSdHmNpv8AdZHoM1LhxBAMoYZyzrAeq0gH0QtuHQjUh1XeRxO5Wb2I30rgHNt7LiNOlxuK%2BLtQ6DJNcJhMG0wT3v8rLmAAWigGoeJUqDDLwaduo1mmATyL6fF6mLaPIAWLlkgreJHS7NfGKMwem779MQWrefa0bLozH80pLrB8Qnn7dAcjrRA6S%2FVDTdmbCZNyLtsrNg1UWBPAzj6ZcEa37FieYPRy7JqKBk2md9rlVfTCedrA5watvL2X1CJk%2FyHBWxM%2FF12TPn7f9tMwl4eLwgY6pgGrE4jQiFlOgwJ4S9CyPVRB1vW%2BY00%2Fr94OweF6VCbCgRXRuJKyYax0f1Kb335DCMpqAIoNBbF0eo5j5aX0yR6Xjsz6zUC53t6YV9%2BxVC4GXIqE9OTrUir8jJmdlmDDNuaXFvw7JBss7f4J1MZs%2B4Ij2zVDUn8R2nzglOjq8GpbckL6R5eBtcICoeOVTJ9vLa7Y0i62QBm4a8AmItzQgWfMUu4sqIsw&X-Amz-Signature=11fa11a582bdfcb9697d7216c43ef04fc686509724ac923631db7ff34202d7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
