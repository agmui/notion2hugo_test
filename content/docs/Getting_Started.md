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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444EQE7I%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHoEuQrOQfRxgbPwE0wwbhCs8U7oVqMZTXxJ5D2hAxFEAiBf4KWAtsZ2YNh6UNXfH3X6Pc%2Fub%2BCfQt%2BfBmPPQHFtZir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM1bK7SZPwm7nHTQFlKtwDctXNKvFAU8vNajY6Su12lmkq1vHzGwhDbD48Gvy86Rq%2FmS3SUvDbHmfoUPPSfVmHjzwjd0ZUCPPffzZwl6ttMz2qdFc4pjQHbFcwIzZcbzYRa79fT%2BJJ0VQlOjfwwtfTZGDr9Xz8akKCXesUdWjPI5pIcUtCWQ7mguxUgAu9%2BtGZO9YsjjTnqUiagccKHu10P1FvpM7xSg2C9Z9WSwi4M3uzl4%2B8T236L96%2FTRzna2Ta8M0%2F9gePMU0W49iAcbjUO8bIFvnJSz1uoBuKTxg7GKCM%2BFJJ1gjVEOL3VS2BtreJExjaPjiKmlJlSJgsVMALpWt1WAwAedG5ccyFMzU%2BQwlIRRpAI9lxc6nuH9E%2BfFmZLwtYQ19cGpsnatEymnG4YWdpVaF1FfHMXWWSVgy3vJNrMvGamMW9VPNP1W7ocA%2BaX1kk%2B62gyNmrUk9QGwPuVixUUk2UnUxxZqtA%2BYH5KAtEVLJxQgFPmoEAgA262mHqoPBdL5oSWvrKpcawHqKP3NxyxPy0CVWafJLuLavDuaRV2XIGxLIW%2Bq53J88SpOUt6sbE55tE%2BWuPGgfJ4ETcmslL4MVyLUG8xMTQK%2BPPSb5%2FYRnRJ1IRk%2FXkvfV9G35nl0oJJ7WPqR%2BCoM4wn%2BrzwgY6pgE2GUt4AvD%2BwZyg%2B8DuaVWboFzlbanL%2FqIHA9jTNnPUR2dihFNzSmTUEbn50tSdUfrfaTWg%2B7i1GOWyOkaFFNOdt4jdwMWa13HZKAg7xpeyhw1WvNFR6CrH%2BY2Jen05XF8591a4MFxArXU%2BrzlqlLNl9wXRubMX6UJ2BE%2FoQ1xjzySPJD7C6sz0lhV6YGBSMjz%2FA1kS6RWV3GUABd2fMCsxRVgKoxss&X-Amz-Signature=7f502c4d25797212750e81210f2c35ee0e4d00b78bd143a9960dd4a30c9925f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444EQE7I%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHoEuQrOQfRxgbPwE0wwbhCs8U7oVqMZTXxJ5D2hAxFEAiBf4KWAtsZ2YNh6UNXfH3X6Pc%2Fub%2BCfQt%2BfBmPPQHFtZir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM1bK7SZPwm7nHTQFlKtwDctXNKvFAU8vNajY6Su12lmkq1vHzGwhDbD48Gvy86Rq%2FmS3SUvDbHmfoUPPSfVmHjzwjd0ZUCPPffzZwl6ttMz2qdFc4pjQHbFcwIzZcbzYRa79fT%2BJJ0VQlOjfwwtfTZGDr9Xz8akKCXesUdWjPI5pIcUtCWQ7mguxUgAu9%2BtGZO9YsjjTnqUiagccKHu10P1FvpM7xSg2C9Z9WSwi4M3uzl4%2B8T236L96%2FTRzna2Ta8M0%2F9gePMU0W49iAcbjUO8bIFvnJSz1uoBuKTxg7GKCM%2BFJJ1gjVEOL3VS2BtreJExjaPjiKmlJlSJgsVMALpWt1WAwAedG5ccyFMzU%2BQwlIRRpAI9lxc6nuH9E%2BfFmZLwtYQ19cGpsnatEymnG4YWdpVaF1FfHMXWWSVgy3vJNrMvGamMW9VPNP1W7ocA%2BaX1kk%2B62gyNmrUk9QGwPuVixUUk2UnUxxZqtA%2BYH5KAtEVLJxQgFPmoEAgA262mHqoPBdL5oSWvrKpcawHqKP3NxyxPy0CVWafJLuLavDuaRV2XIGxLIW%2Bq53J88SpOUt6sbE55tE%2BWuPGgfJ4ETcmslL4MVyLUG8xMTQK%2BPPSb5%2FYRnRJ1IRk%2FXkvfV9G35nl0oJJ7WPqR%2BCoM4wn%2BrzwgY6pgE2GUt4AvD%2BwZyg%2B8DuaVWboFzlbanL%2FqIHA9jTNnPUR2dihFNzSmTUEbn50tSdUfrfaTWg%2B7i1GOWyOkaFFNOdt4jdwMWa13HZKAg7xpeyhw1WvNFR6CrH%2BY2Jen05XF8591a4MFxArXU%2BrzlqlLNl9wXRubMX6UJ2BE%2FoQ1xjzySPJD7C6sz0lhV6YGBSMjz%2FA1kS6RWV3GUABd2fMCsxRVgKoxss&X-Amz-Signature=ffbdfdbbd8c2247c764a6668c9ecc605d65f66d5ef3c70e014e5781c05b5f8de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444EQE7I%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHoEuQrOQfRxgbPwE0wwbhCs8U7oVqMZTXxJ5D2hAxFEAiBf4KWAtsZ2YNh6UNXfH3X6Pc%2Fub%2BCfQt%2BfBmPPQHFtZir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM1bK7SZPwm7nHTQFlKtwDctXNKvFAU8vNajY6Su12lmkq1vHzGwhDbD48Gvy86Rq%2FmS3SUvDbHmfoUPPSfVmHjzwjd0ZUCPPffzZwl6ttMz2qdFc4pjQHbFcwIzZcbzYRa79fT%2BJJ0VQlOjfwwtfTZGDr9Xz8akKCXesUdWjPI5pIcUtCWQ7mguxUgAu9%2BtGZO9YsjjTnqUiagccKHu10P1FvpM7xSg2C9Z9WSwi4M3uzl4%2B8T236L96%2FTRzna2Ta8M0%2F9gePMU0W49iAcbjUO8bIFvnJSz1uoBuKTxg7GKCM%2BFJJ1gjVEOL3VS2BtreJExjaPjiKmlJlSJgsVMALpWt1WAwAedG5ccyFMzU%2BQwlIRRpAI9lxc6nuH9E%2BfFmZLwtYQ19cGpsnatEymnG4YWdpVaF1FfHMXWWSVgy3vJNrMvGamMW9VPNP1W7ocA%2BaX1kk%2B62gyNmrUk9QGwPuVixUUk2UnUxxZqtA%2BYH5KAtEVLJxQgFPmoEAgA262mHqoPBdL5oSWvrKpcawHqKP3NxyxPy0CVWafJLuLavDuaRV2XIGxLIW%2Bq53J88SpOUt6sbE55tE%2BWuPGgfJ4ETcmslL4MVyLUG8xMTQK%2BPPSb5%2FYRnRJ1IRk%2FXkvfV9G35nl0oJJ7WPqR%2BCoM4wn%2BrzwgY6pgE2GUt4AvD%2BwZyg%2B8DuaVWboFzlbanL%2FqIHA9jTNnPUR2dihFNzSmTUEbn50tSdUfrfaTWg%2B7i1GOWyOkaFFNOdt4jdwMWa13HZKAg7xpeyhw1WvNFR6CrH%2BY2Jen05XF8591a4MFxArXU%2BrzlqlLNl9wXRubMX6UJ2BE%2FoQ1xjzySPJD7C6sz0lhV6YGBSMjz%2FA1kS6RWV3GUABd2fMCsxRVgKoxss&X-Amz-Signature=32c7061fd6377c5587a88633a9c70fd533d4415316f40e11dceff2b738cf2f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKYHVYZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDRDP4aX%2FWsk7t%2F0lWIsUGkJ3IDtpuCSxTr9V%2FND%2BbTpgIgINjmIY14TJX9WuMDxAINeaymzBxF%2FIs8YVnbJ9KqrlQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHl5NcRgZv%2FvJt7RGyrcAyDC6LLGR%2BKKj4gkVThjHPXwB4Dr9%2F%2BBZd%2FJgLAaA3XQJKWvKjDbByr%2B6lHYKplpW7K%2FLJmYsWuHJAEcqDeUiZegPHAC%2BzNweM2vX1qeAJE1fCN%2FioJSXv4KyaqDJS8SvW7ioHzEjvAiHdKz3MF3VmOJG81U8zRBfCjLX5s2cM5NuW3tshR%2F27SZkHo5a7tttAKU10m53iATA85dWZTXtLqoffRrRSyWIDVHBs4ZVi8J8KubCBva08YWVjqMuOWTSNh1MK9yT9FCfypJtLhJxMoelTpRmt8I%2FA9wd1VYfcPrD0U1cO4qeWpaIwR9Jb2UY2J8OHiYXv6yIivJ4nT6hrr4fNaGqFVXgea9YpWPAORliuZGBsdjYE7CZWeS02l44uzNVOvAA78aBv9ONyA7kngnzK1rL9eU3QWPghyPWOrNzXOoqVR9FSrEAtL9LC%2FcB3Wta1k2Eh43VQBj2BoNKX9wBKCXF%2FBGHzI3sgBv7T5WMeM2H2YtjgInGqdLbTDMEYqeFe7kJkGJgBfLTj%2Btm2g%2FLjqqghH2hqLH8r1COQIPBNJYgUqxWT0jyXbzZV9jHS7JbpMFOhP0oNkgcAy9Z4o31%2FtsspU5CUiQC2sFBp0x0KiP0ygAe1oGk0ITMIHq88IGOqUBxlXtO6dGQqYbuN8FKol2I2aogXspF59vCckUOzPmPjqes%2Fiw8RN%2BNXZhdgiIhWGcWTtkwYSDriKI3OkH8Zln5PXQTti345c5Ly%2BAC48mp8F3YoweNC6XAL1tCdEVt%2F40M3AGz6MYD%2BHaQzUWr6N%2BaXstNX4DYQg0AraCOl0gq902NSqTuVsIGa9%2FZbt9vzAg7%2FKMiDT1qd7eoOXYo2%2FF8ngEf9w2&X-Amz-Signature=4e6faa0949b306f1790c5cdf0c77ff7e169463d880ecd0410a353788281dfa94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6AQH3G3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCUiCE1owNhNBwJvtq2AF9CHkiYE8A62EgDVjaU%2FvTMmgIhAICmfGkxDOYV8IHnXoNTvTdnyBCPOGdYI4WF39emM4bDKv8DCFgQABoMNjM3NDIzMTgzODA1IgyJIHQ7qSPAOjwp8Okq3ANDmLsNgtporJY2PCzbq4kgXhUK8AGhsDGXtGzrr5nARChKVilzpXKQQCAGzAqXsPX5LE7XIKo8hbNZVqD4vJ26ghZu1YaIg7a9K0GkUpDeKY4sTCbwk6Twk8Z0fjSFb55IeWiY3%2Fw0o9z%2BQmAUmDTnDGpO1PiM%2Bx7zbjvl9JdIojGYr8MhKCgH0eqRY9AYPAcjgLXUwWqpb2dbTHNUjkxXshFiewUv6gbsrkqlL7oQQG2glU1YPTDGNkBNzpurvqC2WmBR25Lpkr2FuJe62C80vha26As81cdDGUgClLG72KjssJXOrN4nlO8I%2BZRJjnmiK%2F%2F1ABJ2J%2Bm0vwV4naD3MvlwGUz8nEZmslq6fvqqStbY4UKiU%2F1HaDgCIpZSLFVL8huP4q9qEXAjC1MK5oVQ4rN41VhbMMcm8kzl4kYqf8e3ge3rlq8FauasedTHkcgrfW56worWtvH%2BUkMXK01bNnrFrrIJnKwTJUZueNQOJcgOQc2N9hqjBAgf7b4Ly1oz3uVNlQT7wojRJm6Q%2BL4YBCZxL%2B%2BYqg%2BAqeAYq753wKJ%2BYciCSC4QAlKTDE6ipgXP0ryVHBbhT2%2B9lamFnSzIMlJngQcfi8XL8%2BzUnEg1pmCEnrwRnJkHvE%2B0pTC96vPCBjqkATKP%2FrhlwCXjzQ17nBabwlemTMhbo%2F8Q2sR2BLMpkZuFK%2FNq8oyU9p6AUlk4DeXyTF9iplTtPiu6MUH4wo%2BoBQMykYvqVRxm%2FtxXBrAoCoeprIwSoKtvpGlzX7XeJBRAWxNEprmdFcqWTYY2jOpPT9juD12JvSz1lS5crnOEmt9uXD7%2BzEFaGlujIDNNbe%2FftAMJkfbGIhoil%2FswX%2FgneXHkeE2X&X-Amz-Signature=88eb40fda0c7f4cc328c2bd901a87e1f709298fd4f1dd575a36233d7797f619b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466444EQE7I%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIHoEuQrOQfRxgbPwE0wwbhCs8U7oVqMZTXxJ5D2hAxFEAiBf4KWAtsZ2YNh6UNXfH3X6Pc%2Fub%2BCfQt%2BfBmPPQHFtZir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIM1bK7SZPwm7nHTQFlKtwDctXNKvFAU8vNajY6Su12lmkq1vHzGwhDbD48Gvy86Rq%2FmS3SUvDbHmfoUPPSfVmHjzwjd0ZUCPPffzZwl6ttMz2qdFc4pjQHbFcwIzZcbzYRa79fT%2BJJ0VQlOjfwwtfTZGDr9Xz8akKCXesUdWjPI5pIcUtCWQ7mguxUgAu9%2BtGZO9YsjjTnqUiagccKHu10P1FvpM7xSg2C9Z9WSwi4M3uzl4%2B8T236L96%2FTRzna2Ta8M0%2F9gePMU0W49iAcbjUO8bIFvnJSz1uoBuKTxg7GKCM%2BFJJ1gjVEOL3VS2BtreJExjaPjiKmlJlSJgsVMALpWt1WAwAedG5ccyFMzU%2BQwlIRRpAI9lxc6nuH9E%2BfFmZLwtYQ19cGpsnatEymnG4YWdpVaF1FfHMXWWSVgy3vJNrMvGamMW9VPNP1W7ocA%2BaX1kk%2B62gyNmrUk9QGwPuVixUUk2UnUxxZqtA%2BYH5KAtEVLJxQgFPmoEAgA262mHqoPBdL5oSWvrKpcawHqKP3NxyxPy0CVWafJLuLavDuaRV2XIGxLIW%2Bq53J88SpOUt6sbE55tE%2BWuPGgfJ4ETcmslL4MVyLUG8xMTQK%2BPPSb5%2FYRnRJ1IRk%2FXkvfV9G35nl0oJJ7WPqR%2BCoM4wn%2BrzwgY6pgE2GUt4AvD%2BwZyg%2B8DuaVWboFzlbanL%2FqIHA9jTNnPUR2dihFNzSmTUEbn50tSdUfrfaTWg%2B7i1GOWyOkaFFNOdt4jdwMWa13HZKAg7xpeyhw1WvNFR6CrH%2BY2Jen05XF8591a4MFxArXU%2BrzlqlLNl9wXRubMX6UJ2BE%2FoQ1xjzySPJD7C6sz0lhV6YGBSMjz%2FA1kS6RWV3GUABd2fMCsxRVgKoxss&X-Amz-Signature=5dd141e0d8768c9dc9d37649123af701d3ba95c8113a075ceb7b263a996c468e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
