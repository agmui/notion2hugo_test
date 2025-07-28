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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQJMX6W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCTVjs3rqPLB%2FyH3rkPpB4%2FHhl7eBCWIvTYBGOncnTLAgIgQUHydO9RklThJHbbTqKLGU26%2B0JfKq3mdln1KmtAFiEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBD6uF%2FDRizc6ZABircA6hYPc9VgWVaIfKVqJtIbtY81OG3SPtAGIwr3Z%2Bo0rM%2FsXqAXZHOzTHyZXisSIp8xjw87l7heWojVly%2Bpl7V8wb1vlI%2Fr1vRAnRTGLh8h%2BHnbq%2FDY4f5IfVE9raTRELwR8AHV8O660pBiVVBvDo3JpszIDWShzNth5BiUIWNqU88zpoYHttA9a19M7AOVQT6wb4xs4W%2BICGRXNCYvJJ3oDZTrrhzMLNV4Ba79p%2F7cw26EKwOrJZ7bYGy%2BQ26fYQO1CuzBvqb8ZvBkUyvNJZwdF%2B8VOqC2D%2BSNme7CYiLKUpcdPHpb0oiUGYfiG2BdipzyDhJTEK6%2B8q3cWS2TfcYQjrignDqwNIOJwYKCrA4%2FJOMiTS4dL6L4%2BJFivM2ekGtw2kIL61P9pxbWQrfN1v%2F2EVysix06QAz7MzSl2zaElVptDWVBEnCO6SkaULzZX7DAYvXwaNTom7y9atbGzhGlGuv8VOkg90tuens4iEgveOzeRjmZ8bbpuTJBN%2B%2BKTfS25rpbph%2FaubXngZ0AJi7GPVRlDfvDzeHxe8X9xIGuu1naEJvOJAXSTA%2FDRB%2F9BITRYsY71J116QJTJxjp8PW8hUQ1wI9VLipM4D6zdzzuVc%2BAkcmbMCocO%2FmRF1QMMGPnMQGOqUBiqcx7c5Wx%2Bq0jZxRNgdmyj6MTFnk1Rm0sPUP9xdY53uYr6rI5Kr8Y5ZEsw257ntF5Tr4I57udDl6H0rF8GB22h%2FLWS0jAgs2uv%2F4%2BvFeH%2FXZtJxRu1mO2zG4zcUaJXEw%2BDJa6nlhd02KHFAm%2Fe%2FbJyrrCyRUf1UJormtcfzKcfBHLknZXVoJd79sRxrBEbnAwrj0Zimgif3lblVhAF9TK7wDX3Cm&X-Amz-Signature=526bc9f637a08a44d9db04571733437c5f94a4286862144da1ba5e3761c7ba86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQJMX6W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCTVjs3rqPLB%2FyH3rkPpB4%2FHhl7eBCWIvTYBGOncnTLAgIgQUHydO9RklThJHbbTqKLGU26%2B0JfKq3mdln1KmtAFiEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBD6uF%2FDRizc6ZABircA6hYPc9VgWVaIfKVqJtIbtY81OG3SPtAGIwr3Z%2Bo0rM%2FsXqAXZHOzTHyZXisSIp8xjw87l7heWojVly%2Bpl7V8wb1vlI%2Fr1vRAnRTGLh8h%2BHnbq%2FDY4f5IfVE9raTRELwR8AHV8O660pBiVVBvDo3JpszIDWShzNth5BiUIWNqU88zpoYHttA9a19M7AOVQT6wb4xs4W%2BICGRXNCYvJJ3oDZTrrhzMLNV4Ba79p%2F7cw26EKwOrJZ7bYGy%2BQ26fYQO1CuzBvqb8ZvBkUyvNJZwdF%2B8VOqC2D%2BSNme7CYiLKUpcdPHpb0oiUGYfiG2BdipzyDhJTEK6%2B8q3cWS2TfcYQjrignDqwNIOJwYKCrA4%2FJOMiTS4dL6L4%2BJFivM2ekGtw2kIL61P9pxbWQrfN1v%2F2EVysix06QAz7MzSl2zaElVptDWVBEnCO6SkaULzZX7DAYvXwaNTom7y9atbGzhGlGuv8VOkg90tuens4iEgveOzeRjmZ8bbpuTJBN%2B%2BKTfS25rpbph%2FaubXngZ0AJi7GPVRlDfvDzeHxe8X9xIGuu1naEJvOJAXSTA%2FDRB%2F9BITRYsY71J116QJTJxjp8PW8hUQ1wI9VLipM4D6zdzzuVc%2BAkcmbMCocO%2FmRF1QMMGPnMQGOqUBiqcx7c5Wx%2Bq0jZxRNgdmyj6MTFnk1Rm0sPUP9xdY53uYr6rI5Kr8Y5ZEsw257ntF5Tr4I57udDl6H0rF8GB22h%2FLWS0jAgs2uv%2F4%2BvFeH%2FXZtJxRu1mO2zG4zcUaJXEw%2BDJa6nlhd02KHFAm%2Fe%2FbJyrrCyRUf1UJormtcfzKcfBHLknZXVoJd79sRxrBEbnAwrj0Zimgif3lblVhAF9TK7wDX3Cm&X-Amz-Signature=9d4c25ec49d6d2f09198fea245977f2dbda717fdf1d64f021bd081bb6f6f541c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQJMX6W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCTVjs3rqPLB%2FyH3rkPpB4%2FHhl7eBCWIvTYBGOncnTLAgIgQUHydO9RklThJHbbTqKLGU26%2B0JfKq3mdln1KmtAFiEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBD6uF%2FDRizc6ZABircA6hYPc9VgWVaIfKVqJtIbtY81OG3SPtAGIwr3Z%2Bo0rM%2FsXqAXZHOzTHyZXisSIp8xjw87l7heWojVly%2Bpl7V8wb1vlI%2Fr1vRAnRTGLh8h%2BHnbq%2FDY4f5IfVE9raTRELwR8AHV8O660pBiVVBvDo3JpszIDWShzNth5BiUIWNqU88zpoYHttA9a19M7AOVQT6wb4xs4W%2BICGRXNCYvJJ3oDZTrrhzMLNV4Ba79p%2F7cw26EKwOrJZ7bYGy%2BQ26fYQO1CuzBvqb8ZvBkUyvNJZwdF%2B8VOqC2D%2BSNme7CYiLKUpcdPHpb0oiUGYfiG2BdipzyDhJTEK6%2B8q3cWS2TfcYQjrignDqwNIOJwYKCrA4%2FJOMiTS4dL6L4%2BJFivM2ekGtw2kIL61P9pxbWQrfN1v%2F2EVysix06QAz7MzSl2zaElVptDWVBEnCO6SkaULzZX7DAYvXwaNTom7y9atbGzhGlGuv8VOkg90tuens4iEgveOzeRjmZ8bbpuTJBN%2B%2BKTfS25rpbph%2FaubXngZ0AJi7GPVRlDfvDzeHxe8X9xIGuu1naEJvOJAXSTA%2FDRB%2F9BITRYsY71J116QJTJxjp8PW8hUQ1wI9VLipM4D6zdzzuVc%2BAkcmbMCocO%2FmRF1QMMGPnMQGOqUBiqcx7c5Wx%2Bq0jZxRNgdmyj6MTFnk1Rm0sPUP9xdY53uYr6rI5Kr8Y5ZEsw257ntF5Tr4I57udDl6H0rF8GB22h%2FLWS0jAgs2uv%2F4%2BvFeH%2FXZtJxRu1mO2zG4zcUaJXEw%2BDJa6nlhd02KHFAm%2Fe%2FbJyrrCyRUf1UJormtcfzKcfBHLknZXVoJd79sRxrBEbnAwrj0Zimgif3lblVhAF9TK7wDX3Cm&X-Amz-Signature=e21d20d93d3c86c6a7a0171411120360bc428132b6e675395581b1828a37dcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWRTH72%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHh68rKOkG32OeNThXVVCGdQheToLw0%2Fu4eGgG14JrfWAiBkjJqROliKiNh2%2FLr8795VfMaPyLbLrBO7zNAGGo6JPyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJFsuafPnsXX1BQBEKtwDXYIEEMLYSxnpgAp5FNpGjZzzS04vb%2F%2FIRqrEOBgbgOqa8pv49shqozaNblzS8OKf%2FXWoMYWUIjXllZtVev65ImZOZJxf3t301LQJXFtid%2BWlxEqJHIhjS4rzEYBVYitOWddZtva1J8KkrsYXr0DBr70%2FyIIvt%2Bk7JTj9kIFVmaNbYpSQhVlJjaxNiLfBLp3H1OjaD%2BYbEc%2B%2BOCsr%2BxeuRh%2F3598EouvWLFQuV4SHHZMm52eI1mrYdApGn3vtLLFQ4uW6AmVo7Rtp7F0YlcqlSa0wLGaTHwfFH3b2gmS3GpJBOSOuVd6tcQ8KmOcl5MosoJmMUjO8XMMbDATNhHGZUJcPyFGE%2FtbkntlYL78eQTLCT34IH05YCVJAysBxjH99kmRHOPtbAKnNnFaCKe%2F3pBsi38dGYCS6OExYzbMEt1aFlEkee%2Bz7xSmATHA4GgTl8F7HO0IN17W8iRYFK2PbXEnqmc9JXSlvJriFTR4BZdjtK2mX1kjFrrdqFK%2Fvqs5eHXFZzMqhV%2B0V0xlT3bL6y%2BoDuhufpKn6NPyssO9R6iO21FAqrBvnh%2BsO6OLFghKwQDkCUjLxikoRAo4cwE1bIOZBX5%2F1dH%2FeSLOKwWyLrGQcRgNS088Ft2aXMPsww4%2BcxAY6pgH3ZpkFi4lH0OrRinvMeSfbifgjTeXxy6y3FTSmOEDK%2BeXCtnHCOvJJ7kVctLbgC9G%2BLtVrcC%2F8Gvc7ApkZjG35FaSKl8MlXdChz38nlK9xsq4lcvxSqmfUG%2BapifXb8oKnVqk%2F7ePnpmb8eUSQk46YAw2g93Vk3n046SKZPeJ32SI9MTyZJVWl2pLn0zXK3RaTVRPAOlKQWJUa11H5gCkkUFIfujCB&X-Amz-Signature=f8a98da5ebd40c2700baa7c186e00137e6f78f6d173ead3789bc5545110d1994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4FBYKCM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDb2RizmV5eToCRjoz0AjWxMxpqLWkcOZAG%2FFpmwSnRZgIgd1oNZZgGMeOPEsU4oTCpg7XqHsHDAn24K0mffn%2FNwbYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhwQQXhKvOYtMl7qCrcA4Ec4QB7EuD7C4uFxwU4RJEp5etA6No9bEUYuV%2FS3On6J6bCTgPzwggzhz%2FZrkYrfr5KGvlPAwXCEtMNtjBo5R0Di%2FQZV2ZT0SG0Chj0tYfqT6l6kIsbekhO%2FI6HHWxi%2FPZ%2BFrmbDbAoma%2BpsRWekeXi6bef1gSw29llgXKT18BcaNSake%2FWQ9tu1yYnIhor45dSYjjUMhDA6%2BCjf54T5B%2FahZhcHOawO5deRV3lf%2Fq2b4bklzhEvj8yxtE2idNc34RO6iv5jzJqQ00pR0fIW6uY%2BoE9cbtK25Qv5A94f9PWGVQvEpt24V9pEJQBYYzUAFrOjfohLkZ8hS6ywKZjKvq41W%2Bg64LQYP6zM44avhtBpJKO7JpZWFiAXYcrPaVgc%2F6KncAiv%2FCbASzS%2FE9z6SDKe9vNsL28vo%2FMA%2F%2FpvayJh36wDWYBQEingwJewOXdBXojUZmtU6JcPnjqTpAKaOxanqKlXPTIN1WehYn7V3wc6y3ummi0nX1XphS0FtMXPELVr%2BU4xkAA9h5%2F%2B34XUi26AzD3D%2F65%2BcbzIyyRyenCrGa8p3wboziOF5nBPyQz7FbM0XAGN%2B3YqGU9jPfwbKPETdtHs1WNkcxQmswGuzWPzZNOXFPRgXFAG3RpMKKPnMQGOqUBVIBZuOphehb8tJSu9TgbyRM5qxWxAE%2FHufXKM%2BBkvMlnEvr8d4PW%2FVLtO3jrjY1QdZbPz8M4ED0qDADAqkZl7ErL27CYgPyUpABJCJT32QGSJNUYt9aBNQ5sGW5bdhAV%2BvAHh7C3oJWcpiGRV8wpz%2BQXDuYUcVtE0fig0BQulRFvzs793SDjG%2B1jDNoXcATHTdzSZg2JyafHhrb29huaRA5FElZw&X-Amz-Signature=2419b40d4097a4e8bea13c863f01dabf572928e7ba580bb6ab0ebb5e2827511a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQJMX6W%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCTVjs3rqPLB%2FyH3rkPpB4%2FHhl7eBCWIvTYBGOncnTLAgIgQUHydO9RklThJHbbTqKLGU26%2B0JfKq3mdln1KmtAFiEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBD6uF%2FDRizc6ZABircA6hYPc9VgWVaIfKVqJtIbtY81OG3SPtAGIwr3Z%2Bo0rM%2FsXqAXZHOzTHyZXisSIp8xjw87l7heWojVly%2Bpl7V8wb1vlI%2Fr1vRAnRTGLh8h%2BHnbq%2FDY4f5IfVE9raTRELwR8AHV8O660pBiVVBvDo3JpszIDWShzNth5BiUIWNqU88zpoYHttA9a19M7AOVQT6wb4xs4W%2BICGRXNCYvJJ3oDZTrrhzMLNV4Ba79p%2F7cw26EKwOrJZ7bYGy%2BQ26fYQO1CuzBvqb8ZvBkUyvNJZwdF%2B8VOqC2D%2BSNme7CYiLKUpcdPHpb0oiUGYfiG2BdipzyDhJTEK6%2B8q3cWS2TfcYQjrignDqwNIOJwYKCrA4%2FJOMiTS4dL6L4%2BJFivM2ekGtw2kIL61P9pxbWQrfN1v%2F2EVysix06QAz7MzSl2zaElVptDWVBEnCO6SkaULzZX7DAYvXwaNTom7y9atbGzhGlGuv8VOkg90tuens4iEgveOzeRjmZ8bbpuTJBN%2B%2BKTfS25rpbph%2FaubXngZ0AJi7GPVRlDfvDzeHxe8X9xIGuu1naEJvOJAXSTA%2FDRB%2F9BITRYsY71J116QJTJxjp8PW8hUQ1wI9VLipM4D6zdzzuVc%2BAkcmbMCocO%2FmRF1QMMGPnMQGOqUBiqcx7c5Wx%2Bq0jZxRNgdmyj6MTFnk1Rm0sPUP9xdY53uYr6rI5Kr8Y5ZEsw257ntF5Tr4I57udDl6H0rF8GB22h%2FLWS0jAgs2uv%2F4%2BvFeH%2FXZtJxRu1mO2zG4zcUaJXEw%2BDJa6nlhd02KHFAm%2Fe%2FbJyrrCyRUf1UJormtcfzKcfBHLknZXVoJd79sRxrBEbnAwrj0Zimgif3lblVhAF9TK7wDX3Cm&X-Amz-Signature=ce5fae34d8ab138eceda33c3f158a2da973570bf4f44b438d72d34c5da05f3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
