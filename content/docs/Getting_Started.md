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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEHUKL3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BF7rISaUenAQSO4iFKIfM37on4APEZZ%2FQGPGF6uj1AIhAPOI1rIyETVYOTo9ve8eLRUTAB6pssoOOHEQ8zRvqBj9KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjAgmcGjPWCPZeVrEq3AMlDP0Bg0dRIWwjxFLiROBjdrIWwCs6zqtTDsV%2FsrwoxPoUUxNyD5RIjVGMcVCr9B6%2Bix2qpxwElmcuJMmBHLe3KxB3N45OeuzWsLyBVcyVrBV02ODXQUFdz9EXhxDdmBxTFBUwvU%2FwyT1PQJNmwPfDnY0FuaRw%2BbWH8kq8rEp8u5oTAPi3gLxWrzqlLgQh5C%2BF%2FzTd0%2FW3qJRoT%2F2uIF%2BiN%2BcjQNzt3eKQ9PaCcAVzHb9WhWOIZTe8I8LNunj7bnjA7VA2EL3HZ7pGAe0Xq334reJeWQLsEh55ZTlpMobmDD37pNgthYI4n38M%2BR37MXjBwRPlN0sVPGJ9AcHAU5NkFgSEyrCwwAPBGQdvGKQySr%2BQ9LCBmKbCmFe9HWqZDWJXBlXwmqd%2BBmjXx4Bk8MIp%2F0AVUp2pFCwlhUl4Zk8MhF7DTO7YtKOtyGVhGk3cmQEXp1%2BbFxTKJGYPXG63GRcKzF9QmU%2Btiyaoz3slhVF5WwRT4wPzgBFQLjSuH2qC19LUhNR141Yb8rlVzdhnQ%2Fh%2FLdiUC%2FGJd6ZaFXdfFI9GxZoQ8kxGnET2q2lf2xWDGMXJr3rcvbXQQfyhfnT%2Byo6h%2BNc6OBnimpwN%2BWhUuHGw1PJ38zNo0RrZAA3pXDDHgITDBjqkAZqgu7nii6kUG5UPSinyXDvPvtZQpVEHIbkSOBj%2B3lKs6HcU0H5TO7XkbmWDhwLfP0WgfhVYnAu0gBUP5uIR%2BV3FUC9vEo0N%2FjwRWIc1RSsEhUOm%2BnokXwi5mNtqwJ8E%2FNLWTV3yAt9ggUT0Z%2B81lzJO00wVRVZS2lJOpfJT0nX7OPe9%2FYe3Mu63oeVzkAufIXQ%2FP3o%2BbCkF%2BivYkP%2BPipcGN96V&X-Amz-Signature=eb14bd4723b682bcbce855635d1ce33785a6ba10af84f57e9e01eef6dd360d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEHUKL3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BF7rISaUenAQSO4iFKIfM37on4APEZZ%2FQGPGF6uj1AIhAPOI1rIyETVYOTo9ve8eLRUTAB6pssoOOHEQ8zRvqBj9KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjAgmcGjPWCPZeVrEq3AMlDP0Bg0dRIWwjxFLiROBjdrIWwCs6zqtTDsV%2FsrwoxPoUUxNyD5RIjVGMcVCr9B6%2Bix2qpxwElmcuJMmBHLe3KxB3N45OeuzWsLyBVcyVrBV02ODXQUFdz9EXhxDdmBxTFBUwvU%2FwyT1PQJNmwPfDnY0FuaRw%2BbWH8kq8rEp8u5oTAPi3gLxWrzqlLgQh5C%2BF%2FzTd0%2FW3qJRoT%2F2uIF%2BiN%2BcjQNzt3eKQ9PaCcAVzHb9WhWOIZTe8I8LNunj7bnjA7VA2EL3HZ7pGAe0Xq334reJeWQLsEh55ZTlpMobmDD37pNgthYI4n38M%2BR37MXjBwRPlN0sVPGJ9AcHAU5NkFgSEyrCwwAPBGQdvGKQySr%2BQ9LCBmKbCmFe9HWqZDWJXBlXwmqd%2BBmjXx4Bk8MIp%2F0AVUp2pFCwlhUl4Zk8MhF7DTO7YtKOtyGVhGk3cmQEXp1%2BbFxTKJGYPXG63GRcKzF9QmU%2Btiyaoz3slhVF5WwRT4wPzgBFQLjSuH2qC19LUhNR141Yb8rlVzdhnQ%2Fh%2FLdiUC%2FGJd6ZaFXdfFI9GxZoQ8kxGnET2q2lf2xWDGMXJr3rcvbXQQfyhfnT%2Byo6h%2BNc6OBnimpwN%2BWhUuHGw1PJ38zNo0RrZAA3pXDDHgITDBjqkAZqgu7nii6kUG5UPSinyXDvPvtZQpVEHIbkSOBj%2B3lKs6HcU0H5TO7XkbmWDhwLfP0WgfhVYnAu0gBUP5uIR%2BV3FUC9vEo0N%2FjwRWIc1RSsEhUOm%2BnokXwi5mNtqwJ8E%2FNLWTV3yAt9ggUT0Z%2B81lzJO00wVRVZS2lJOpfJT0nX7OPe9%2FYe3Mu63oeVzkAufIXQ%2FP3o%2BbCkF%2BivYkP%2BPipcGN96V&X-Amz-Signature=ce29452a897a4cde04d59baf2c9b7cddfba8234e2ad1f35c012e135dc2b919bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEHUKL3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BF7rISaUenAQSO4iFKIfM37on4APEZZ%2FQGPGF6uj1AIhAPOI1rIyETVYOTo9ve8eLRUTAB6pssoOOHEQ8zRvqBj9KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjAgmcGjPWCPZeVrEq3AMlDP0Bg0dRIWwjxFLiROBjdrIWwCs6zqtTDsV%2FsrwoxPoUUxNyD5RIjVGMcVCr9B6%2Bix2qpxwElmcuJMmBHLe3KxB3N45OeuzWsLyBVcyVrBV02ODXQUFdz9EXhxDdmBxTFBUwvU%2FwyT1PQJNmwPfDnY0FuaRw%2BbWH8kq8rEp8u5oTAPi3gLxWrzqlLgQh5C%2BF%2FzTd0%2FW3qJRoT%2F2uIF%2BiN%2BcjQNzt3eKQ9PaCcAVzHb9WhWOIZTe8I8LNunj7bnjA7VA2EL3HZ7pGAe0Xq334reJeWQLsEh55ZTlpMobmDD37pNgthYI4n38M%2BR37MXjBwRPlN0sVPGJ9AcHAU5NkFgSEyrCwwAPBGQdvGKQySr%2BQ9LCBmKbCmFe9HWqZDWJXBlXwmqd%2BBmjXx4Bk8MIp%2F0AVUp2pFCwlhUl4Zk8MhF7DTO7YtKOtyGVhGk3cmQEXp1%2BbFxTKJGYPXG63GRcKzF9QmU%2Btiyaoz3slhVF5WwRT4wPzgBFQLjSuH2qC19LUhNR141Yb8rlVzdhnQ%2Fh%2FLdiUC%2FGJd6ZaFXdfFI9GxZoQ8kxGnET2q2lf2xWDGMXJr3rcvbXQQfyhfnT%2Byo6h%2BNc6OBnimpwN%2BWhUuHGw1PJ38zNo0RrZAA3pXDDHgITDBjqkAZqgu7nii6kUG5UPSinyXDvPvtZQpVEHIbkSOBj%2B3lKs6HcU0H5TO7XkbmWDhwLfP0WgfhVYnAu0gBUP5uIR%2BV3FUC9vEo0N%2FjwRWIc1RSsEhUOm%2BnokXwi5mNtqwJ8E%2FNLWTV3yAt9ggUT0Z%2B81lzJO00wVRVZS2lJOpfJT0nX7OPe9%2FYe3Mu63oeVzkAufIXQ%2FP3o%2BbCkF%2BivYkP%2BPipcGN96V&X-Amz-Signature=68edd602eba463f259df20a3c351c0fe1514850cae4ed4844ee2408f503e801f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P6JVEOG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEASAdtmZrPwggqGBh0KPL8j1okuaVQqMJR9AW4c9yakAiEAiqDfJ9PgyxhZ1JWV5MX3e86xJ9k7lwoM8WISdBC%2B8McqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOExPuvdhxm42YsstSrcA%2F4a30yOkowgkIabc3PAmY8eyfr%2FP3qbc5WzhR2XJh%2BMyJBujZuN2q7pIRbfckA9YFFiHLiFxPYroc5vjLbKGtqU%2Bh7V7CJr24idkQEZIuLRNZl%2FT9OAFPUvOUHGveHQ5vvMva8ZLs8WVTHajyYX3u0%2FFVbyprd39lStloetZkseSbWhOgpPRwloCSi45sYTMEMXGkvb0LhDz5Ym4mTYzCHLVowRV%2BBQhep6HG32FQflEFQllFvEtu8GYHklreoGY08OUQ9r%2FMimXHxSQzeyIzDBdo3IUJI56oBnpJpaPYDkcY9zGUA3SeIm4cbSHyaqFEVpQOt3CdpyCPbK3akujfBPdD5lgXEwmRIWMo5gx44463AfpXMdedMOTtmlUtOaDoJUlOV0djKpoC8CItDBcpyVBMo9zUr4d%2BD1QbA3VkgKxG46iA2GNRkadTkMxUWDYRRdXJyzC%2B8F3EQZuZYB7l8oUHGrmfcCeYjlj1zUUOAG6JxQCrvi5zndxT0P7jSIXSBFUlTkdpiLQ5M0cZ%2FeetCBbFtJi%2BKllIP0UAhJO6ouJNJjferv6v2jSXUVGBM93GjRK%2FnNcIu1KeFDvQb5tBBgMLVrzAhjFhVbf2YbnZQUUUioYoA6c4oR2cFpMIuAhMMGOqUB70y9s%2FgHWX%2BsSWUR88UWI1JXynfiOBYSEGMC81akjJgsKRpp8PimgJq%2FS0lqz3v6uqRQim%2ByuHNaUFtiAB2VQazmEqlrGdWtzqqqUrhe8qkvhpBG8XBITU3ubmcy1289blQM7LMB7kMx8prOBKqKUihZZD65t%2Bfi065OQm9dXfsoqGA8%2BCfYKilienK25tnm9oZQ%2Fa0YSrLDfxmZNkGjEFjrm7ks&X-Amz-Signature=82fae17cc17e6cb0bc6940c932d58b0126f9dfd9cb9193b69ef832bef9d82ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNCUR4H%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAowIogGSm%2F8FMzXV8LcBZbM6SsDtzyLaTcchG1mqaoVAiBem%2B2bX8%2BO5BvxFDtpusJBQladSA0ibnfvQ%2BER0KfiUSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx6yiRsT60iOkYHDNKtwDKbUpwwfyzjGHer%2FcxC0XGoJF3BliiN3LNfN7pEH1oU4VvXeuXyG4bydmL6pTd1Rlz%2B33Qt2Nxdwr9YGnyhBsnrBxroDtV8vxj%2FMrJ5bbWBwMRwnFNhIWgVloOGEpl28CnZd1BA7Jx0VEZB97E7vZkOJZazfX5EFrFcU%2BAt9h1X4qzuCkCTE2I8czM%2F6Z7%2FPsTCpi2Y2XaYA4GrmdVQBHwSE%2ByLq%2B9EM9iHMPdYItawzTkc6RD7AAnZMnL5L6OtUUrHlJJTJbOTRRxqLPDaxiPCzfnJdEZiY%2Fl5vWkaDKaHF%2FVhCjuGPu1672YOiuqw2HIKdC5wgizkludGwfysdZFzFmmlKG4hh10U%2B%2Fu22cwOuK1xsacTo%2B60QGajg8nfjl0BqSBuN3uEj8L9vSmaIYxLEsmvBodW8wXeR7S3hPh96ANWFPPbh4TlAUhbIYZhY8mSbFbwtW66jNnd9NGDsErE69%2BUN4DGyZVrlxJZVxruqTVYxyYBdpZPNYu7%2Bau6wTYNYZ6iOdhhpAjoyRaEophoZ%2Bgaw%2BOCcweedCDqFQW9X5fbXhu5K3f%2BfIfxOSy2gpAVUmr16A3Yo0fZYDgqoSitTouaVVdNXh04q8yu8SY1TvuRB6p91RmJFpXtcwuICEwwY6pgGu4csGilHJxNIhjbRyRS1vNS08Af8k1ohwZoEqLfTPtUnO6cBpET9twMtvS%2Bj%2BMXMi6FUjQoarnI4aJkGXtCMnKEWrnjV4ki42%2FvqR4pu3JXFcfhQCeObn3GxABBnkIwYa%2FzXZjwBVsyfsoryWCrUDbuSbk2803ytiwsxSWH%2FlV86s%2B%2BldnkFDwbmCeVoJTF6ZVz6As7ANuY2%2BeAA67l2Mi7tgQZwa&X-Amz-Signature=be4349fad49d885b918473a36ba9aa92318a17f06f1723b937a21f062e610254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEHUKL3%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BF7rISaUenAQSO4iFKIfM37on4APEZZ%2FQGPGF6uj1AIhAPOI1rIyETVYOTo9ve8eLRUTAB6pssoOOHEQ8zRvqBj9KogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjAgmcGjPWCPZeVrEq3AMlDP0Bg0dRIWwjxFLiROBjdrIWwCs6zqtTDsV%2FsrwoxPoUUxNyD5RIjVGMcVCr9B6%2Bix2qpxwElmcuJMmBHLe3KxB3N45OeuzWsLyBVcyVrBV02ODXQUFdz9EXhxDdmBxTFBUwvU%2FwyT1PQJNmwPfDnY0FuaRw%2BbWH8kq8rEp8u5oTAPi3gLxWrzqlLgQh5C%2BF%2FzTd0%2FW3qJRoT%2F2uIF%2BiN%2BcjQNzt3eKQ9PaCcAVzHb9WhWOIZTe8I8LNunj7bnjA7VA2EL3HZ7pGAe0Xq334reJeWQLsEh55ZTlpMobmDD37pNgthYI4n38M%2BR37MXjBwRPlN0sVPGJ9AcHAU5NkFgSEyrCwwAPBGQdvGKQySr%2BQ9LCBmKbCmFe9HWqZDWJXBlXwmqd%2BBmjXx4Bk8MIp%2F0AVUp2pFCwlhUl4Zk8MhF7DTO7YtKOtyGVhGk3cmQEXp1%2BbFxTKJGYPXG63GRcKzF9QmU%2Btiyaoz3slhVF5WwRT4wPzgBFQLjSuH2qC19LUhNR141Yb8rlVzdhnQ%2Fh%2FLdiUC%2FGJd6ZaFXdfFI9GxZoQ8kxGnET2q2lf2xWDGMXJr3rcvbXQQfyhfnT%2Byo6h%2BNc6OBnimpwN%2BWhUuHGw1PJ38zNo0RrZAA3pXDDHgITDBjqkAZqgu7nii6kUG5UPSinyXDvPvtZQpVEHIbkSOBj%2B3lKs6HcU0H5TO7XkbmWDhwLfP0WgfhVYnAu0gBUP5uIR%2BV3FUC9vEo0N%2FjwRWIc1RSsEhUOm%2BnokXwi5mNtqwJ8E%2FNLWTV3yAt9ggUT0Z%2B81lzJO00wVRVZS2lJOpfJT0nX7OPe9%2FYe3Mu63oeVzkAufIXQ%2FP3o%2BbCkF%2BivYkP%2BPipcGN96V&X-Amz-Signature=cc4e69b7a06d37841b96ba971020fb95ca91ab65f22584dc39bf45165111e1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
