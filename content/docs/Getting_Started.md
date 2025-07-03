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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRPZJ4D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCmi%2FVq099Bh2Qt%2BY5NS%2FNEvnIk%2FUlw7kKC3E6hb5Nf1QIhAIkGYVTidkbhbvhRlB5eDK%2F475gr1e9mSvdIC4AQAjWtKv8DCBIQABoMNjM3NDIzMTgzODA1IgygF86A7uHN7S7AZ7Yq3AM6P4TxJ4seUgEVxGU0B757d1i88LlCREQ7X8QM3i7hz3117TqwSc473EMXPLbs1T0tO1nzGJkXtJGlJe%2FnnIKc5zQU95E4W%2B7%2BzE8ZtL5MOdd1EFassshF3Kb6UbnKiZCmiOjRDWdxk%2Fq3u%2F5weeeqsAvtoC00qSbiy61qBu38tnNciPZDemuXcXSbOnmOuyVeQln5ovFtLtPACBDpxCSx9VzFhJorBR9rg5UjmZlktc76H4XBfKCbnA5FLxv58IX1FTv48n%2FQx7e1ov9hTFkti6st9ZxLYNCTJ81%2B2yqACNhZoGoWq%2BB3GVdMh2qn%2FFb8%2BkSxUyqlc6yAQVWuEse%2BDfkhNxWa8ZRhWCg1xb5k%2Fj29LOioqxhJQGUHibrNaXFwSAGh2Q22FezhP%2BHITgfhVQ%2BoV3XjPk539v1J8KSXyC7ebEY6vHimoiY9XppqYi7IkHwkmTFnlPH9vvDRKDgXVCh9OR7h4yQFhUaTV2YGPfc1uxn592sUAgkrxmUKQ%2FrZA3DE9G79Y4Mb18%2B2SnDVuckd%2FTcC4kLcRzuriv%2BHv226mOqhBmhGxJzJ0%2FDZixeQSpD8v1Q0BoZdGniRKT5IQeivwvuKMOU%2FFN%2BatQOMi0Yp6oCfywcfqTi4IjCCiZnDBjqkAXtt7dk%2BGeAILt%2BsODHuuPl25tufFfVA2fSbOM9wL0c%2BYcukij5ysP8O%2B1bbYPGDNpXVcfbBRuuU5fQtDEh8Pu1BFmrH9ZWOyIbhjktBbB%2FOAVld9hZE4CLyb9tYfI5S8m3kCeiqUpvM0F6wMDVtmnbVu9Qm1FrmCuW4%2B7uN6pxYpI9hQ7FPoe2E8M6962%2Fyj%2BLvo9%2Bu7wvytiniif%2BzWbOimdS9&X-Amz-Signature=e82ae2beb07b3f9efcab003b23e5b291b12e337d583be94a3f89ede836c860eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRPZJ4D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCmi%2FVq099Bh2Qt%2BY5NS%2FNEvnIk%2FUlw7kKC3E6hb5Nf1QIhAIkGYVTidkbhbvhRlB5eDK%2F475gr1e9mSvdIC4AQAjWtKv8DCBIQABoMNjM3NDIzMTgzODA1IgygF86A7uHN7S7AZ7Yq3AM6P4TxJ4seUgEVxGU0B757d1i88LlCREQ7X8QM3i7hz3117TqwSc473EMXPLbs1T0tO1nzGJkXtJGlJe%2FnnIKc5zQU95E4W%2B7%2BzE8ZtL5MOdd1EFassshF3Kb6UbnKiZCmiOjRDWdxk%2Fq3u%2F5weeeqsAvtoC00qSbiy61qBu38tnNciPZDemuXcXSbOnmOuyVeQln5ovFtLtPACBDpxCSx9VzFhJorBR9rg5UjmZlktc76H4XBfKCbnA5FLxv58IX1FTv48n%2FQx7e1ov9hTFkti6st9ZxLYNCTJ81%2B2yqACNhZoGoWq%2BB3GVdMh2qn%2FFb8%2BkSxUyqlc6yAQVWuEse%2BDfkhNxWa8ZRhWCg1xb5k%2Fj29LOioqxhJQGUHibrNaXFwSAGh2Q22FezhP%2BHITgfhVQ%2BoV3XjPk539v1J8KSXyC7ebEY6vHimoiY9XppqYi7IkHwkmTFnlPH9vvDRKDgXVCh9OR7h4yQFhUaTV2YGPfc1uxn592sUAgkrxmUKQ%2FrZA3DE9G79Y4Mb18%2B2SnDVuckd%2FTcC4kLcRzuriv%2BHv226mOqhBmhGxJzJ0%2FDZixeQSpD8v1Q0BoZdGniRKT5IQeivwvuKMOU%2FFN%2BatQOMi0Yp6oCfywcfqTi4IjCCiZnDBjqkAXtt7dk%2BGeAILt%2BsODHuuPl25tufFfVA2fSbOM9wL0c%2BYcukij5ysP8O%2B1bbYPGDNpXVcfbBRuuU5fQtDEh8Pu1BFmrH9ZWOyIbhjktBbB%2FOAVld9hZE4CLyb9tYfI5S8m3kCeiqUpvM0F6wMDVtmnbVu9Qm1FrmCuW4%2B7uN6pxYpI9hQ7FPoe2E8M6962%2Fyj%2BLvo9%2Bu7wvytiniif%2BzWbOimdS9&X-Amz-Signature=e843d180ffd5f06f60ba4864765e1210178c018e72cc450a15d3df885a119eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRPZJ4D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCmi%2FVq099Bh2Qt%2BY5NS%2FNEvnIk%2FUlw7kKC3E6hb5Nf1QIhAIkGYVTidkbhbvhRlB5eDK%2F475gr1e9mSvdIC4AQAjWtKv8DCBIQABoMNjM3NDIzMTgzODA1IgygF86A7uHN7S7AZ7Yq3AM6P4TxJ4seUgEVxGU0B757d1i88LlCREQ7X8QM3i7hz3117TqwSc473EMXPLbs1T0tO1nzGJkXtJGlJe%2FnnIKc5zQU95E4W%2B7%2BzE8ZtL5MOdd1EFassshF3Kb6UbnKiZCmiOjRDWdxk%2Fq3u%2F5weeeqsAvtoC00qSbiy61qBu38tnNciPZDemuXcXSbOnmOuyVeQln5ovFtLtPACBDpxCSx9VzFhJorBR9rg5UjmZlktc76H4XBfKCbnA5FLxv58IX1FTv48n%2FQx7e1ov9hTFkti6st9ZxLYNCTJ81%2B2yqACNhZoGoWq%2BB3GVdMh2qn%2FFb8%2BkSxUyqlc6yAQVWuEse%2BDfkhNxWa8ZRhWCg1xb5k%2Fj29LOioqxhJQGUHibrNaXFwSAGh2Q22FezhP%2BHITgfhVQ%2BoV3XjPk539v1J8KSXyC7ebEY6vHimoiY9XppqYi7IkHwkmTFnlPH9vvDRKDgXVCh9OR7h4yQFhUaTV2YGPfc1uxn592sUAgkrxmUKQ%2FrZA3DE9G79Y4Mb18%2B2SnDVuckd%2FTcC4kLcRzuriv%2BHv226mOqhBmhGxJzJ0%2FDZixeQSpD8v1Q0BoZdGniRKT5IQeivwvuKMOU%2FFN%2BatQOMi0Yp6oCfywcfqTi4IjCCiZnDBjqkAXtt7dk%2BGeAILt%2BsODHuuPl25tufFfVA2fSbOM9wL0c%2BYcukij5ysP8O%2B1bbYPGDNpXVcfbBRuuU5fQtDEh8Pu1BFmrH9ZWOyIbhjktBbB%2FOAVld9hZE4CLyb9tYfI5S8m3kCeiqUpvM0F6wMDVtmnbVu9Qm1FrmCuW4%2B7uN6pxYpI9hQ7FPoe2E8M6962%2Fyj%2BLvo9%2Bu7wvytiniif%2BzWbOimdS9&X-Amz-Signature=e1ad792347fbec225f4a9e049b17b2b3140a8dd55a5dfe73d22ab10b35928124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LKJRFXD%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFj6RnQVJTSwl4zaSIGdo0kZghPSJjIcGN9MISw29ZfFAiBNEavEUYJqnrzXWfz8bNBW8%2FprRy79j5znOI7JusfoFCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMbPou8c347hLzEL8JKtwDkXKEHo%2FO0DGa7AmehW0CCU7XSzGmD7%2B2UyGPJF62yV9QXOVUfkhL3m4ZF1YMnvpKqDuadMOIPD2xkf7JD5BzSVIpnzM87jzDBWR3MAtaVh%2FtyPMfJNA30J4z%2Ff9jUc2HWGEpAXbdSV4LeDSF2HWm8oQWdUeNFAY5%2Fe%2FfF4BEa1n0vtU4x4LxMnXRwdh0lZbkiDfmrnUYx26UUqRF6A9kyJMARnQ3X8IgtxmzZdKywB1zCVDR3lGHWPgroAxvgf1Rm0YkExHSJHmhtWnbH7Dw22y9%2BpwwyB%2Firzb7w2F9%2BzcTlSEZ5ztLQjMXHcB3eTNpCCb9qG6jSrTqdTcwHSRgBJAz6vrLOVwYe9AoVuukhbdQ8U4H%2Bgb9NdB051k17AeH4mNVuRJdgz0luG9sEI0AEratknddr3nu2hqWqMeb4O7Z%2FyIcVzwnegUjXEAQqUgNtO6XKK8L0NptW%2F%2Bk9gNZo3d9OcOI9miDQDkQ2GVsyxDEpimrpKF7%2FrqcqAnB7oYssHjE24xr%2BJf0jyuypP1hkp18gJT7qctYOfpLLrc%2BZRJek5GPBXjnTytQvfZ9U5QBU4OBdvljJ59VKR2V13%2FU43%2BzyOH2WmmpmJ0G6agned%2BV92GNvq9kNvn0bxcw34iZwwY6pgFt%2F1ewJ8r7nOOS4ngu%2FpcFy5Ru9eJp2z%2FIc01bIwlxcH3mssHd1SxJEWhMEEk8MES5Egx9%2FwgNQscRKS6R4T4ENj%2FrqBvp3mV3YknKxkVq1xzVBD8zpd%2BiwLluxuuJbptwsLq6SWmAlFEYK2I%2F36suYqefSeJza1pX%2BSEAs3QruYl3cMsXwQx%2Byuf3HUOTap0Yo55gm9K3l9EYyabL0qoognhQttLM&X-Amz-Signature=48c24c4624b94e2f62ef20e5ea881d5b23555d875a71cca2749dbd91e6cbbb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFN5ZYH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDSXN8u4HzEQlLnZwocSlATrZTm8QJO3uKVZVxA5u4T3AiEA%2BpAOKbmzHuSe%2FhAZ5skyFLNRHx8ibbo%2FK2bzAhOTHrQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDKWnYM2k%2F%2BviHy74dSrcAxp7uwTbfBt76KBqtavD3vsealgU2yaSba1C9ihZtUwF8mZENP9%2Bdy7glV%2FJGtYZeP6MA8%2FqLIJOSH9bPhBmI%2Fruf%2B9FWewTbUj8KDcVuxU2GQXkEJVaImNJvkHJFwn3Onrgu9puufn8ZZUbjymal%2FUT%2FqCVDJOZsbxnHJ0IGJA8N4iKWOY0OGoQqsNZ%2FDdKZLsbvEPiirjIgG6jBkjHi03rhmR53sqvKpMOPzhIXE7qPGemvDHi%2B24kKlUGyba6%2FusB5VXzgCsU6UsUOR30CLaHMFR2WQd1Ao8YZKslf0xNo5IHyONcRgjy1h78a0Kqm5EPnHHFoqQQxH5%2FicYjMyJxHTE72YyWfhC3%2BGOihbniJ2qe6ddBMRdCxTnbVlnOCr1cDPnt2Ir5439o0aY47G7u5mZMywmpmK3BC7VK6HdDq5VbGnwhDx3rxMmSZDSn5Sx%2F2FeKUfhBj7mScqA3454%2FIOCVeeR77%2FtG27A9iD1X2%2F3pvYKB%2FhI4AWFW1EXzm47juXk6NrgfkXRbw8bLiYvafYdqAMjWzZMqdntKXzUCYEyG4nF5CmANaZG8HhRv1dYvR2Umv159v1TI4yBcKfuMC24m%2BD5QwZjpUOVRHPZ8a1INVTztwqBp%2FY9bMKWImcMGOqUB4YlfEKhjoUahtSZziYP32PV0Q7hUzQ3FnOSBxmFzS%2FBPA%2B3%2BLnzRM46hfRbLGP5821skwyLRnVaTNysUb3iYf8nDmqNqix0MDkSWPVpKyTYHNQ6LIIJysrztBQ0drzyDT1xW28KaX3Ogq0btQDJM13otNdEIoznAPyjaFr6n0Q0rBO2yqEQqW3kc8kmB7P0lZhqFsbtX0jp4hxkIpmuybU5h1CMZ&X-Amz-Signature=5ef1cb4be72f0884f10fb3e02da0051bd4674d1d50b313ebb45f97a82c93e704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RRPZJ4D%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCmi%2FVq099Bh2Qt%2BY5NS%2FNEvnIk%2FUlw7kKC3E6hb5Nf1QIhAIkGYVTidkbhbvhRlB5eDK%2F475gr1e9mSvdIC4AQAjWtKv8DCBIQABoMNjM3NDIzMTgzODA1IgygF86A7uHN7S7AZ7Yq3AM6P4TxJ4seUgEVxGU0B757d1i88LlCREQ7X8QM3i7hz3117TqwSc473EMXPLbs1T0tO1nzGJkXtJGlJe%2FnnIKc5zQU95E4W%2B7%2BzE8ZtL5MOdd1EFassshF3Kb6UbnKiZCmiOjRDWdxk%2Fq3u%2F5weeeqsAvtoC00qSbiy61qBu38tnNciPZDemuXcXSbOnmOuyVeQln5ovFtLtPACBDpxCSx9VzFhJorBR9rg5UjmZlktc76H4XBfKCbnA5FLxv58IX1FTv48n%2FQx7e1ov9hTFkti6st9ZxLYNCTJ81%2B2yqACNhZoGoWq%2BB3GVdMh2qn%2FFb8%2BkSxUyqlc6yAQVWuEse%2BDfkhNxWa8ZRhWCg1xb5k%2Fj29LOioqxhJQGUHibrNaXFwSAGh2Q22FezhP%2BHITgfhVQ%2BoV3XjPk539v1J8KSXyC7ebEY6vHimoiY9XppqYi7IkHwkmTFnlPH9vvDRKDgXVCh9OR7h4yQFhUaTV2YGPfc1uxn592sUAgkrxmUKQ%2FrZA3DE9G79Y4Mb18%2B2SnDVuckd%2FTcC4kLcRzuriv%2BHv226mOqhBmhGxJzJ0%2FDZixeQSpD8v1Q0BoZdGniRKT5IQeivwvuKMOU%2FFN%2BatQOMi0Yp6oCfywcfqTi4IjCCiZnDBjqkAXtt7dk%2BGeAILt%2BsODHuuPl25tufFfVA2fSbOM9wL0c%2BYcukij5ysP8O%2B1bbYPGDNpXVcfbBRuuU5fQtDEh8Pu1BFmrH9ZWOyIbhjktBbB%2FOAVld9hZE4CLyb9tYfI5S8m3kCeiqUpvM0F6wMDVtmnbVu9Qm1FrmCuW4%2B7uN6pxYpI9hQ7FPoe2E8M6962%2Fyj%2BLvo9%2Bu7wvytiniif%2BzWbOimdS9&X-Amz-Signature=d596d259ebeb0ed4176d06f95fe64e06d68085d8fc7d90c7c533356fe34b6ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
