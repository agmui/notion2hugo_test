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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQINQNA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDbMT3MdCGvYIkckWRAwWZf9FkJjMFXFV0e3CP1lY68AiEA%2BYeCktyB%2BEL1G76eqapX1kqFFvksEXZIceblAaKV9WIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA01ctTZ75fx1KIozCrcAw9%2BIzriHNV3KVxYrtbfrNboW8JCTG0HJyCBrXYj9ws8D90UhuhQCUvjyEd0xw9D35EjJ9ipuTkptfp3RdO0zaN8aMTyiTFIbWdNeNlSwXILy%2BV3g%2FXhn3Zzr%2FhRdlf%2BUBO2%2FQhyUOQoEKdVi9icqWiJ0R3hiQu7Pmh43h9%2BKhr4njV8ZAL7DZEhAemgdMAZNBsjM12Z%2BOO0POH5o9Wiuy%2Bt9HnyX1PTEvahm%2Bg91XN%2B7wsTXgON4yZmcdRi%2FDDUZhpkVDHKTsG9kEkDwtAEVTUMQQUzLrK%2FenareaYLTjwyHuZcQsFTMzvXUjBO4GsKviwhDAwue%2BpozYT1NqBUg7vaoLkqSfsoDYtz7OXm22ky6UxbwODpgd%2FKPTpB%2BRuiikonumjifZgpMuzPH9qrwjhvJfrgmTsoeW23GCg35WKEogkuIqlNjwwwwgR1iahy1P6%2FZpoD4nqh5NYIATEjJGvsBlV6y61RFZnyWGjE0BM4zQRkPfVBD2y%2Bo4v8xTCxmCaIe%2FganZPt5BCK5pjh7omS7d%2BdvGGZf8c%2FvRz455pB9jl4yrd0chudwLC4WjElxWauG46seYr5JN6DJHWZQFuIQNuLZ4hQoE6TWcOEmSj9Njbq2mih8B67W541MJmI3cIGOqUBVb4QF2oAjVB7kYwoGXDyXNELV0NpUWLtayQQ601vlbS9rzrhRpkLS4r3MghpZKXcPdqOd%2BMwUtxlf7C9Uent%2BCFPjF7pZ0vEnUy0yHwSdv6LAPShBW5%2FZNGpKFzPiQW%2F2GEGDJHW9Y29lkkSOSaPWj8fmoI618gJprxiu4QCPKGdLkcrtyIFzrK0LsgaVgpcevRj4HdFhL6PyRD0idKjpt%2FAm0RX&X-Amz-Signature=05782c7d99604d790e6a7049b998013461db23044211c6092529c9c891fb76e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQINQNA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDbMT3MdCGvYIkckWRAwWZf9FkJjMFXFV0e3CP1lY68AiEA%2BYeCktyB%2BEL1G76eqapX1kqFFvksEXZIceblAaKV9WIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA01ctTZ75fx1KIozCrcAw9%2BIzriHNV3KVxYrtbfrNboW8JCTG0HJyCBrXYj9ws8D90UhuhQCUvjyEd0xw9D35EjJ9ipuTkptfp3RdO0zaN8aMTyiTFIbWdNeNlSwXILy%2BV3g%2FXhn3Zzr%2FhRdlf%2BUBO2%2FQhyUOQoEKdVi9icqWiJ0R3hiQu7Pmh43h9%2BKhr4njV8ZAL7DZEhAemgdMAZNBsjM12Z%2BOO0POH5o9Wiuy%2Bt9HnyX1PTEvahm%2Bg91XN%2B7wsTXgON4yZmcdRi%2FDDUZhpkVDHKTsG9kEkDwtAEVTUMQQUzLrK%2FenareaYLTjwyHuZcQsFTMzvXUjBO4GsKviwhDAwue%2BpozYT1NqBUg7vaoLkqSfsoDYtz7OXm22ky6UxbwODpgd%2FKPTpB%2BRuiikonumjifZgpMuzPH9qrwjhvJfrgmTsoeW23GCg35WKEogkuIqlNjwwwwgR1iahy1P6%2FZpoD4nqh5NYIATEjJGvsBlV6y61RFZnyWGjE0BM4zQRkPfVBD2y%2Bo4v8xTCxmCaIe%2FganZPt5BCK5pjh7omS7d%2BdvGGZf8c%2FvRz455pB9jl4yrd0chudwLC4WjElxWauG46seYr5JN6DJHWZQFuIQNuLZ4hQoE6TWcOEmSj9Njbq2mih8B67W541MJmI3cIGOqUBVb4QF2oAjVB7kYwoGXDyXNELV0NpUWLtayQQ601vlbS9rzrhRpkLS4r3MghpZKXcPdqOd%2BMwUtxlf7C9Uent%2BCFPjF7pZ0vEnUy0yHwSdv6LAPShBW5%2FZNGpKFzPiQW%2F2GEGDJHW9Y29lkkSOSaPWj8fmoI618gJprxiu4QCPKGdLkcrtyIFzrK0LsgaVgpcevRj4HdFhL6PyRD0idKjpt%2FAm0RX&X-Amz-Signature=c9ec355b48135b45e37049fdaeef7c1852b94f2d67a33e0c11426fa72feeabd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQINQNA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDbMT3MdCGvYIkckWRAwWZf9FkJjMFXFV0e3CP1lY68AiEA%2BYeCktyB%2BEL1G76eqapX1kqFFvksEXZIceblAaKV9WIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA01ctTZ75fx1KIozCrcAw9%2BIzriHNV3KVxYrtbfrNboW8JCTG0HJyCBrXYj9ws8D90UhuhQCUvjyEd0xw9D35EjJ9ipuTkptfp3RdO0zaN8aMTyiTFIbWdNeNlSwXILy%2BV3g%2FXhn3Zzr%2FhRdlf%2BUBO2%2FQhyUOQoEKdVi9icqWiJ0R3hiQu7Pmh43h9%2BKhr4njV8ZAL7DZEhAemgdMAZNBsjM12Z%2BOO0POH5o9Wiuy%2Bt9HnyX1PTEvahm%2Bg91XN%2B7wsTXgON4yZmcdRi%2FDDUZhpkVDHKTsG9kEkDwtAEVTUMQQUzLrK%2FenareaYLTjwyHuZcQsFTMzvXUjBO4GsKviwhDAwue%2BpozYT1NqBUg7vaoLkqSfsoDYtz7OXm22ky6UxbwODpgd%2FKPTpB%2BRuiikonumjifZgpMuzPH9qrwjhvJfrgmTsoeW23GCg35WKEogkuIqlNjwwwwgR1iahy1P6%2FZpoD4nqh5NYIATEjJGvsBlV6y61RFZnyWGjE0BM4zQRkPfVBD2y%2Bo4v8xTCxmCaIe%2FganZPt5BCK5pjh7omS7d%2BdvGGZf8c%2FvRz455pB9jl4yrd0chudwLC4WjElxWauG46seYr5JN6DJHWZQFuIQNuLZ4hQoE6TWcOEmSj9Njbq2mih8B67W541MJmI3cIGOqUBVb4QF2oAjVB7kYwoGXDyXNELV0NpUWLtayQQ601vlbS9rzrhRpkLS4r3MghpZKXcPdqOd%2BMwUtxlf7C9Uent%2BCFPjF7pZ0vEnUy0yHwSdv6LAPShBW5%2FZNGpKFzPiQW%2F2GEGDJHW9Y29lkkSOSaPWj8fmoI618gJprxiu4QCPKGdLkcrtyIFzrK0LsgaVgpcevRj4HdFhL6PyRD0idKjpt%2FAm0RX&X-Amz-Signature=9c7ce0591c7df40ad049569ecc8cec54a2ef9e10c43e69f0185279449798d0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQNXMLY%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBTJr57E6bGmOcZpiSz8ie6qLcScq4STirIX%2BtczpfaAiACyREIr9dX2xiQ%2FgVOvfmLWD4J5xh5%2BTzXYDvbv8txIiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9PuVBat%2BPVfwt2wOKtwDQEPO5h1MW5AVqQQlGhbGbrpQCjso6GU6YLrsTxXWAl8Qgf9PGx6lhDzV2Hssj1mRRo2FRQG5MMyEhvWYp6U460VjM7XokXW8BbDxhWla3dUWczSa7MdhxwSTLexA1T3LdptpTSqIspDNpZEPuUp6efWjSxPP6VVimuOlZRKHNZi%2FhfOCpuo23r0hFTJY9IXQ9YTbNX1fLMAbrzBbAyME77zd35ablb8iEdSA3Juv87GyVQG3%2B1UBWPanZ5FPnh%2FPRp8lnc%2F7QB9iqPoQfvswa%2FLeuOBi%2Fuklfzc%2BjlZ%2BBSnZYK6uHVYJK8555JOedj0CpTVBNYlckynBX9DUne4cx2BVnECTavp5zQ3tug2aDKsbrbEgv7vBcEICgQMX%2Fhc3Y%2B8EqqZIfzdHkpUbNbddSa7T5utp4GLvmP%2BjMek32hVMdgzuJ2qiMrWEhItSH%2BSAsx4OPiaewyFBR4JTyBw2D2CTyDqkeIgUIGtk7k38cQ8iAvdSfvzf9hegfDMqMBh4cefeakb5Zt%2BX4Fews0MI317Y5bxe%2B2cuwdwb%2BeziQwWpUcbA4%2Bx8AmMXxECOrSQEXwtynZjd8gccXdeYV29424fr39xaQfU4jQMznMY9meJnmTtnulSUryX7PXkwt4jdwgY6pgHUZOtgrlVP4AWJvbJT5Aa%2BZFO8rzAFcoF4LpORqE24fgqft3Ab9PLucs9z1zP%2BsGLv%2B0xWc2kTrFqH8wjNWT6P%2B66IgNzuf1C1jZLb3i9P%2FOJB9NdfJjj1E6JuJIbGNj8Lin%2BLKgDWLwB6ZXACpVTRc%2FI0VH5VBFc49p1kQkxtlxmTgSo7HDVJ5yEcmtw5rIg97FqASgOzEwUNGI9xpwkolzkkyXOJ&X-Amz-Signature=485483a0f27d311a4d7bb7920cb7dc6f5f1ed8cc6e6094e20f864d53770e9d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K7IDBXD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA%2BjsjdepRHFHFlrnghP1beCYhdLlg4mX22dH5oEr74AiEAjUmi%2BV4WoSk9aRbt7XLqNR58ivrJcECCHz1VcbxtzywqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7r20OHC7d7CDWPYCrcA%2BAkDrGtLt9dHT6Sd2PM9jG2ucn950p88o3Wj7u%2FiafYwbL6lbc40Gg0nLJooElWsYo3km5HrrKV8KwJhpIXtR8ekbQ8mwI4WxnljHwZlOyn8HsgH6WrINWVKXz3TgSxY28MVDaidPU%2Frc6Xv1PuNexau7WID3koHW%2FXCn8bZT0ztErQO1%2BRoZdaQ%2F%2BiQcj4FvHckwu2b%2B7pRFaDuyRyNe3qn38A%2FyTHHWgJOs3lijunLXVfFHXCugwk66T2S7b0VwFZr9GpxalkR6w48EYLh4Z3z8qI6UO0iLGR8NA2GhuKOkGiskcku6pS4GYKclUSTHW5RKpix4Oj3zz5hCZDL8lgBCelkGTS9bS6I0Fcn6Oxqy6p2dDASX%2BdG72kOLmzJl%2Frk0kpTY%2B2EiLZS9V1DJNNngQ2wfPXemdJeXWo%2ForDseUrZKrpUDBS0zrcPmdGouzf39hTFk6I55xU6uk4E8rwfNLHofKRbHOj%2Bydr%2F9l5%2Fkd%2BwSgOYZQ1niHRdnCDOKdXG9LapR%2BuzV0hf%2FYIyLrKHwTC3y3lrhqOqiHNnf5d3pn6omrIhBSVAm1gp85iuXEVIvgZfBIhazYYGlJqdfyC25G9ASCqJXiDnVx5J5neUXheCh%2FrlGcaCgmLMIqI3cIGOqUBACNmeClPlf65WGlzMq41ek3hD0lv%2B6TyUFEl6Jfe50eOa4GLBO4a9W7Kw6NpR9baBnzQ23y5jBywvKAfNmvY0IiUCSqasNPrHb5l2DBMpX2wWV1jagwSEjWcyN5bMJ1WQuxjx1unb8Q7jOqYusESAxuzpg5Dfoh6kFh0hiopZVK1jNWxkfT4InROESdKGFmURn0AZiyCpatZHBRv6y05qF6SPUyx&X-Amz-Signature=71a0b1d2dd120a7efa8ae7936eaf336fd928ac5d085f49ffbc31c9faff5dd33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQINQNA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDbMT3MdCGvYIkckWRAwWZf9FkJjMFXFV0e3CP1lY68AiEA%2BYeCktyB%2BEL1G76eqapX1kqFFvksEXZIceblAaKV9WIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA01ctTZ75fx1KIozCrcAw9%2BIzriHNV3KVxYrtbfrNboW8JCTG0HJyCBrXYj9ws8D90UhuhQCUvjyEd0xw9D35EjJ9ipuTkptfp3RdO0zaN8aMTyiTFIbWdNeNlSwXILy%2BV3g%2FXhn3Zzr%2FhRdlf%2BUBO2%2FQhyUOQoEKdVi9icqWiJ0R3hiQu7Pmh43h9%2BKhr4njV8ZAL7DZEhAemgdMAZNBsjM12Z%2BOO0POH5o9Wiuy%2Bt9HnyX1PTEvahm%2Bg91XN%2B7wsTXgON4yZmcdRi%2FDDUZhpkVDHKTsG9kEkDwtAEVTUMQQUzLrK%2FenareaYLTjwyHuZcQsFTMzvXUjBO4GsKviwhDAwue%2BpozYT1NqBUg7vaoLkqSfsoDYtz7OXm22ky6UxbwODpgd%2FKPTpB%2BRuiikonumjifZgpMuzPH9qrwjhvJfrgmTsoeW23GCg35WKEogkuIqlNjwwwwgR1iahy1P6%2FZpoD4nqh5NYIATEjJGvsBlV6y61RFZnyWGjE0BM4zQRkPfVBD2y%2Bo4v8xTCxmCaIe%2FganZPt5BCK5pjh7omS7d%2BdvGGZf8c%2FvRz455pB9jl4yrd0chudwLC4WjElxWauG46seYr5JN6DJHWZQFuIQNuLZ4hQoE6TWcOEmSj9Njbq2mih8B67W541MJmI3cIGOqUBVb4QF2oAjVB7kYwoGXDyXNELV0NpUWLtayQQ601vlbS9rzrhRpkLS4r3MghpZKXcPdqOd%2BMwUtxlf7C9Uent%2BCFPjF7pZ0vEnUy0yHwSdv6LAPShBW5%2FZNGpKFzPiQW%2F2GEGDJHW9Y29lkkSOSaPWj8fmoI618gJprxiu4QCPKGdLkcrtyIFzrK0LsgaVgpcevRj4HdFhL6PyRD0idKjpt%2FAm0RX&X-Amz-Signature=894c8679909260ed1adc8d484005eeab8da914b65c94c66e36b8d6a7117e4d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
