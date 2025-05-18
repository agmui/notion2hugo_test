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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YCFYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQABNbilNDbov8DJ%2BWwYxw1MNkki7%2FWE76W3llcR2uAIgR7MT4M7klAHLzZjOBNzvy3Vy3Cct%2FMdBRSzPRMXYd80q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BSYGA1Ssyu2caqlCrcA%2FZiZSpv5X8oZoUlMfajHOEkHjivFqw5s9QBjJLXpX9HNa5dcA%2F%2BQ9pz0HN4xSYEIMEEFdwtynNHmgCHk3jBxYHZiZNVNI2P%2Bc3%2BlbaFDj3IaSCGi9XytW74jjFBb7OYSJUxS1LwSVOK6bILhlwYj2E0maopeSKGTIEmTjA6UIexN1z7cCfaeegPa7fjS1QvW2%2BrslvzUFbw96M3Gz0SeXSAKsKsnK0F4qyNZE4yDkJjqtNQXh9EsdK0VRzuLHMyzIYO6hG8q%2B7VGnkHlhP7esezjv0RdLLerGCqtz7zBaxHI%2BV8qBjw3uacjqL1%2FyaBJu75F8JirMWrBrlgTXsHvvV69BYRTffuqQsmJMFNS7H3Ar%2FG8QLzAfSHQ6pMmz2XyhOt9k5O8djpZkK4AQKGIxCBleCvH7EmwrQhKS%2BTKSN3IlP4MC%2BYIgAwi9X0BGFwXFdhZMoSqjFoAVvfTrDLMg7VMLxv5o%2BlYi5M2Zic%2B55ovKrwnKl60T%2F%2F6D%2F9QSgF8u3SOFsEURCaGMoomG4aE3fwiwQlBs4z94qqm9rjwDOOTm4%2FzBxY8kPgvZBxQ4Aw9C4v5izNgvLXPlG6TTLkbd0FZkU15FLhVjPQ0E%2BjvyE%2FkHLeEfxKEaDW1UKeMIj9pcEGOqUB6nMfeFoieWmmX%2FRQ9SJYl7%2FDdtNQvYEhnk6S0hvxWidd0PADmisF8JKBKZGBD%2BjkPDLaybpaB9n0kTv77u9RtldaKa%2Fl7c0Z%2BQXxznpNTDq19UbmiFHGLdwdvpZZd641O52XcIYBYtlYqzrrTjP8Ua76xqBtUduo%2B6uyvcWN1r8DEFOey2By4UxJVqBGdMMS8%2FQg%2B6r4OkVrdc3bTtxsPb%2BT%2FSI6&X-Amz-Signature=fa6dc811cb82cdd6f099ff06321971a3be4a8b21be9cd00fe174c9c148e846f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YCFYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQABNbilNDbov8DJ%2BWwYxw1MNkki7%2FWE76W3llcR2uAIgR7MT4M7klAHLzZjOBNzvy3Vy3Cct%2FMdBRSzPRMXYd80q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BSYGA1Ssyu2caqlCrcA%2FZiZSpv5X8oZoUlMfajHOEkHjivFqw5s9QBjJLXpX9HNa5dcA%2F%2BQ9pz0HN4xSYEIMEEFdwtynNHmgCHk3jBxYHZiZNVNI2P%2Bc3%2BlbaFDj3IaSCGi9XytW74jjFBb7OYSJUxS1LwSVOK6bILhlwYj2E0maopeSKGTIEmTjA6UIexN1z7cCfaeegPa7fjS1QvW2%2BrslvzUFbw96M3Gz0SeXSAKsKsnK0F4qyNZE4yDkJjqtNQXh9EsdK0VRzuLHMyzIYO6hG8q%2B7VGnkHlhP7esezjv0RdLLerGCqtz7zBaxHI%2BV8qBjw3uacjqL1%2FyaBJu75F8JirMWrBrlgTXsHvvV69BYRTffuqQsmJMFNS7H3Ar%2FG8QLzAfSHQ6pMmz2XyhOt9k5O8djpZkK4AQKGIxCBleCvH7EmwrQhKS%2BTKSN3IlP4MC%2BYIgAwi9X0BGFwXFdhZMoSqjFoAVvfTrDLMg7VMLxv5o%2BlYi5M2Zic%2B55ovKrwnKl60T%2F%2F6D%2F9QSgF8u3SOFsEURCaGMoomG4aE3fwiwQlBs4z94qqm9rjwDOOTm4%2FzBxY8kPgvZBxQ4Aw9C4v5izNgvLXPlG6TTLkbd0FZkU15FLhVjPQ0E%2BjvyE%2FkHLeEfxKEaDW1UKeMIj9pcEGOqUB6nMfeFoieWmmX%2FRQ9SJYl7%2FDdtNQvYEhnk6S0hvxWidd0PADmisF8JKBKZGBD%2BjkPDLaybpaB9n0kTv77u9RtldaKa%2Fl7c0Z%2BQXxznpNTDq19UbmiFHGLdwdvpZZd641O52XcIYBYtlYqzrrTjP8Ua76xqBtUduo%2B6uyvcWN1r8DEFOey2By4UxJVqBGdMMS8%2FQg%2B6r4OkVrdc3bTtxsPb%2BT%2FSI6&X-Amz-Signature=831c52904746c3ba03d80fcbc37f8b0f1a20adf6983ee75fbf6311e67eae7c85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YCFYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQABNbilNDbov8DJ%2BWwYxw1MNkki7%2FWE76W3llcR2uAIgR7MT4M7klAHLzZjOBNzvy3Vy3Cct%2FMdBRSzPRMXYd80q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BSYGA1Ssyu2caqlCrcA%2FZiZSpv5X8oZoUlMfajHOEkHjivFqw5s9QBjJLXpX9HNa5dcA%2F%2BQ9pz0HN4xSYEIMEEFdwtynNHmgCHk3jBxYHZiZNVNI2P%2Bc3%2BlbaFDj3IaSCGi9XytW74jjFBb7OYSJUxS1LwSVOK6bILhlwYj2E0maopeSKGTIEmTjA6UIexN1z7cCfaeegPa7fjS1QvW2%2BrslvzUFbw96M3Gz0SeXSAKsKsnK0F4qyNZE4yDkJjqtNQXh9EsdK0VRzuLHMyzIYO6hG8q%2B7VGnkHlhP7esezjv0RdLLerGCqtz7zBaxHI%2BV8qBjw3uacjqL1%2FyaBJu75F8JirMWrBrlgTXsHvvV69BYRTffuqQsmJMFNS7H3Ar%2FG8QLzAfSHQ6pMmz2XyhOt9k5O8djpZkK4AQKGIxCBleCvH7EmwrQhKS%2BTKSN3IlP4MC%2BYIgAwi9X0BGFwXFdhZMoSqjFoAVvfTrDLMg7VMLxv5o%2BlYi5M2Zic%2B55ovKrwnKl60T%2F%2F6D%2F9QSgF8u3SOFsEURCaGMoomG4aE3fwiwQlBs4z94qqm9rjwDOOTm4%2FzBxY8kPgvZBxQ4Aw9C4v5izNgvLXPlG6TTLkbd0FZkU15FLhVjPQ0E%2BjvyE%2FkHLeEfxKEaDW1UKeMIj9pcEGOqUB6nMfeFoieWmmX%2FRQ9SJYl7%2FDdtNQvYEhnk6S0hvxWidd0PADmisF8JKBKZGBD%2BjkPDLaybpaB9n0kTv77u9RtldaKa%2Fl7c0Z%2BQXxznpNTDq19UbmiFHGLdwdvpZZd641O52XcIYBYtlYqzrrTjP8Ua76xqBtUduo%2B6uyvcWN1r8DEFOey2By4UxJVqBGdMMS8%2FQg%2B6r4OkVrdc3bTtxsPb%2BT%2FSI6&X-Amz-Signature=c16bff75cad4cff39cff67c5cf68932b0041d7f108593ba3cc1b6ad03c1bc6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUDKEIM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvpn63xee4Z%2FTY8947MD268BX6s%2FBcUtUORRxMLEk1jQIgZe2XF%2BL220ZXzUKf4o3Q0Jmr5K9gfm07m3zVFLoDnfIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPRVHagbt38Dyr5hBSrcA%2FfN198SGmHmxXCkiEbKld3zeiFbWDRz3wgpLT1eXRWfSKChA6tOWmlftTyC7z24WG%2FoqROYSL6jH8096sXagpud1i%2F6uxsX2o3HedU6RIVJkqK1iLclEjFdevNiwLRYeX%2Bat8vD%2Byplqqj0xO0WxIbztfJmqkGil3gfmyhpT%2BjiVsec0f2RtKXEW8F0QfDM8T6GySy8JuA%2FQSzrn932D%2FkIDicMLVR0Xt2R5tVTJjL9Zd2prCF3dgTUpWiYhRQ383LhpEJ1F97poBgzBwaTJs%2Fyv9auRyjgjestNc%2Ferx2zcNaf9G88514SdwjZzJQ2Hbk28W7RPkTXGDEih8Y2QDnfSvQZ81e5oALRoa%2FjiuvcnKtPmnStsPg0m7Zv94oVRv2qXzjTsV5iY582VFPlB%2FlVEF4nvp2Xx%2BvQnwaTBsDWBcCiOvOD9L51s4b4xttAuP%2F3LMn75Y2kfaYzfjHFuToRVhQqqvmMvyYmnhoxXow2givcOLa5wlRl6sEQxkzWY0upRJOiVyrQZ03aZ2rhSBGLxz8%2BzMJFABkv3sb0%2BK00FzRxxSaFt20qFDJO9KO%2F462todrkzrTkSZ8Pdk0Ij5AYnlZOQ3MU%2B5wgLgm2raH6o5FUoRJ6blhl6u%2F%2FMLv1pcEGOqUBjJl%2F7gDG4CWINzSjT4WuMsruXiPWJk3%2FZcwVAHUrAN%2BV8ayMZsU%2Bu%2FugQrXUJb5i3EGxqReXdrWWH2CF5BVEvpxNypNlFOlUrzgnF5lz3%2F%2BUlucg7VZEb%2F26LidlUFXm%2BpgcO%2B904C0y68uLaJiUPxHbobRZJ8cM9phRIbkb4pHuvMG%2BsneLr75OZa0Vmo7muHf0xGFEoiyvopsk0EPSOz6qbXca&X-Amz-Signature=67d27bd708761b8b4887f77e98223b157aa076654e44c7063751c0f5e9b83f90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUOZHCR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCr3xXtw6kc8XM3pKYpbWbM1%2B2b%2BEbafQKqBUCICHFZPwIgTEBQLtcHITmVolihqTJl5xi54OS3lO3LcULg1AdLjAAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDK%2F6nyFRa9ECjjqcqyrcAxf9vsvvBq%2FkzXesf2Wksk7PoAuc3qAN%2BSc76EydVK5m3%2BnXx8mrbZYHOWFIbs4BWlYpPlnlreEn6gOBKeZCMl4CKSAl2HWk147gH4RiF0VxCcRSib8yKwjOgzLyCp3N0eqiEK0eQRNNnpYOm5Z24HciVjIoePp65eL%2B2rtLHNnNw4E5bEY2SONI2RkQvviWak%2BjmhoQq4ug%2FE3DBNhMhs40CwTyIh1mcfK9JwQGiweYin8lfTXmnkHsOvU2zv%2BDb%2FscMH9FwA6mT7lXKkO1e71GaB1v2JZPKVnyVODpti8MVM248A5gJgLiSgPiTQS4J44ZGYbAMbz37P%2FUZDEJQJQcLX2QVW6YUyn7FxCqHiQu1xKMtvB%2FRHUDrPZ6ymLF0A%2FLUoFxjP7XlPxSLDbYYnYAmJJHZSufjqP4NkVBACeMqxQ4KG8bbbg9OtovoQ1rxX0gUta5N00VSeT5kaGSArCWnSQQ%2BSOq4TniOjgrZtGW1V5cFdULv3K4gU53W4tH8Ur90EZ%2FYmmjazuRlBnueq%2BzCLkU9fmL4oiDbyJygMivGioDDxTjbuahQmR1z2S1BpotDGIS6MI%2B1p%2FjNWIq5hCLbVhXOfkQlaWuqxYi28ASMIgL2U0GhZGB8zG8MKz9pcEGOqUBNTXNz6zjQTVM9a8MFaB1WwtsUajJIC0L%2BasB6VwMlqNCckO0I8HsR7HfQFrabCdZFPwl%2F3R1Oo1zBlVwv4cW4NHhZXxE2k%2FmwZqU5YVAgcvolBfcAN14Y%2B1kFHcrS6yeh%2FZtSxf6cZVLUHDWbYog8AjbVmnVVjjDMAf8oix4nx6nR3a1GqHpVAgIbA6c1cuwNmPqtkNYOY4vi9xRimomShJZuxIE&X-Amz-Signature=5a1aab1cc503aaecad40a71244091d14eea78054ae5473e2281fe8b35e82f0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YCFYBV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T110229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQABNbilNDbov8DJ%2BWwYxw1MNkki7%2FWE76W3llcR2uAIgR7MT4M7klAHLzZjOBNzvy3Vy3Cct%2FMdBRSzPRMXYd80q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI%2BSYGA1Ssyu2caqlCrcA%2FZiZSpv5X8oZoUlMfajHOEkHjivFqw5s9QBjJLXpX9HNa5dcA%2F%2BQ9pz0HN4xSYEIMEEFdwtynNHmgCHk3jBxYHZiZNVNI2P%2Bc3%2BlbaFDj3IaSCGi9XytW74jjFBb7OYSJUxS1LwSVOK6bILhlwYj2E0maopeSKGTIEmTjA6UIexN1z7cCfaeegPa7fjS1QvW2%2BrslvzUFbw96M3Gz0SeXSAKsKsnK0F4qyNZE4yDkJjqtNQXh9EsdK0VRzuLHMyzIYO6hG8q%2B7VGnkHlhP7esezjv0RdLLerGCqtz7zBaxHI%2BV8qBjw3uacjqL1%2FyaBJu75F8JirMWrBrlgTXsHvvV69BYRTffuqQsmJMFNS7H3Ar%2FG8QLzAfSHQ6pMmz2XyhOt9k5O8djpZkK4AQKGIxCBleCvH7EmwrQhKS%2BTKSN3IlP4MC%2BYIgAwi9X0BGFwXFdhZMoSqjFoAVvfTrDLMg7VMLxv5o%2BlYi5M2Zic%2B55ovKrwnKl60T%2F%2F6D%2F9QSgF8u3SOFsEURCaGMoomG4aE3fwiwQlBs4z94qqm9rjwDOOTm4%2FzBxY8kPgvZBxQ4Aw9C4v5izNgvLXPlG6TTLkbd0FZkU15FLhVjPQ0E%2BjvyE%2FkHLeEfxKEaDW1UKeMIj9pcEGOqUB6nMfeFoieWmmX%2FRQ9SJYl7%2FDdtNQvYEhnk6S0hvxWidd0PADmisF8JKBKZGBD%2BjkPDLaybpaB9n0kTv77u9RtldaKa%2Fl7c0Z%2BQXxznpNTDq19UbmiFHGLdwdvpZZd641O52XcIYBYtlYqzrrTjP8Ua76xqBtUduo%2B6uyvcWN1r8DEFOey2By4UxJVqBGdMMS8%2FQg%2B6r4OkVrdc3bTtxsPb%2BT%2FSI6&X-Amz-Signature=7e4a134958b89dbe5e606c136710f02894457d591d0907e5fc7354cb2ec4a2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
