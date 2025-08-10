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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZPMCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtk68%2Fy3EUSfo9z2rByyxCnfv8jYiyqr7zXKkp6YYjKAiAolXboApS8OBMXNx3l0lA1pFzaJqmYG0MzuVrJxSOJPSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKLwmcW5NTMEPcK6EKtwDRyQqkTyupRywO7U3tRlDmuLdiUU9hnlkM5%2F7ejj42C7JUDaz0mpVSKahK%2FTZjTo7XhT%2FNJVkuXJEsRCGfb4KQOzVz%2FzXx7OjN9T85J6vd4ZZWw2FmPfTvB4vD5vbynZfj2Nsy7P3P%2FYgPcMrZPGvNLipZCPSri9VvDig9HK8vFIKopWKSxGcfWumnixamgdv7VtxPBaryOD1BkHJ82b%2FAITf%2FWwrxP%2FBXY3vSfE%2BnTPAz%2BzIsqSmJYTrmf5jF4eu0gAQrqBxhfloy1urJrV9ypjzxCiIyKORJWzpVpm9VOYGYcOMI%2F20iYi76szUDOHrfa6owhqz8WUNdhBBZeFItAyIhl8Bn0YVM%2BkapLM84csI46ISc96IKEHgk7yr%2FZP6%2B5HGwgWBRPVFsBaRVOUhI1GV92l3bls7Kt5jo70acjnI4jYd6ofDTRLsIEiE7ab3zdjBOD92iQ6ngpBDoH7OlSqXrKcvr85ia0mxR7jA65dQvHLez8Pe0dD%2FPQ5S6mZD7oKzlPr%2FGXJXfZmqBl%2B2srTcw7rW%2BoAClU93ZK7u5XHM65gT6FtcHjygl4aoFm9ftNaHkujQI%2BrQMtXVboYiNBQLdXg1BASfF%2FHy%2BYWBz1o8Rhi%2BR5hRsYXs8bUwmO%2FhxAY6pgF%2Fc3u8qwHSU4ilOMuKj4orYgTQYvPdB%2BwQlD0sUx4Ksqd5nLcFDntn2Z5LJw2F35xHGqW%2BXpVrX7m4FDV9NqTN51Ub5SmnFBx4WnWpv51L%2F5jyhRcqlcnhITGdLS9PcXKEhngmhfKHRoCjjf8wajux2ikK%2BKuKD6S6r44mH4p2E0ylMNJULQVN9O8tY1S1F9k9pgUEAubqLWBsw6ygjl4X86HQshH8&X-Amz-Signature=71465063c020c14c278a34d70048c1dd719031917fe9108d3db456a752f983ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZPMCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtk68%2Fy3EUSfo9z2rByyxCnfv8jYiyqr7zXKkp6YYjKAiAolXboApS8OBMXNx3l0lA1pFzaJqmYG0MzuVrJxSOJPSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKLwmcW5NTMEPcK6EKtwDRyQqkTyupRywO7U3tRlDmuLdiUU9hnlkM5%2F7ejj42C7JUDaz0mpVSKahK%2FTZjTo7XhT%2FNJVkuXJEsRCGfb4KQOzVz%2FzXx7OjN9T85J6vd4ZZWw2FmPfTvB4vD5vbynZfj2Nsy7P3P%2FYgPcMrZPGvNLipZCPSri9VvDig9HK8vFIKopWKSxGcfWumnixamgdv7VtxPBaryOD1BkHJ82b%2FAITf%2FWwrxP%2FBXY3vSfE%2BnTPAz%2BzIsqSmJYTrmf5jF4eu0gAQrqBxhfloy1urJrV9ypjzxCiIyKORJWzpVpm9VOYGYcOMI%2F20iYi76szUDOHrfa6owhqz8WUNdhBBZeFItAyIhl8Bn0YVM%2BkapLM84csI46ISc96IKEHgk7yr%2FZP6%2B5HGwgWBRPVFsBaRVOUhI1GV92l3bls7Kt5jo70acjnI4jYd6ofDTRLsIEiE7ab3zdjBOD92iQ6ngpBDoH7OlSqXrKcvr85ia0mxR7jA65dQvHLez8Pe0dD%2FPQ5S6mZD7oKzlPr%2FGXJXfZmqBl%2B2srTcw7rW%2BoAClU93ZK7u5XHM65gT6FtcHjygl4aoFm9ftNaHkujQI%2BrQMtXVboYiNBQLdXg1BASfF%2FHy%2BYWBz1o8Rhi%2BR5hRsYXs8bUwmO%2FhxAY6pgF%2Fc3u8qwHSU4ilOMuKj4orYgTQYvPdB%2BwQlD0sUx4Ksqd5nLcFDntn2Z5LJw2F35xHGqW%2BXpVrX7m4FDV9NqTN51Ub5SmnFBx4WnWpv51L%2F5jyhRcqlcnhITGdLS9PcXKEhngmhfKHRoCjjf8wajux2ikK%2BKuKD6S6r44mH4p2E0ylMNJULQVN9O8tY1S1F9k9pgUEAubqLWBsw6ygjl4X86HQshH8&X-Amz-Signature=5929d57a59c11bb97c77f6259ac1ef0b2a62446a8755e7c02278c243f48061d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZPMCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtk68%2Fy3EUSfo9z2rByyxCnfv8jYiyqr7zXKkp6YYjKAiAolXboApS8OBMXNx3l0lA1pFzaJqmYG0MzuVrJxSOJPSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKLwmcW5NTMEPcK6EKtwDRyQqkTyupRywO7U3tRlDmuLdiUU9hnlkM5%2F7ejj42C7JUDaz0mpVSKahK%2FTZjTo7XhT%2FNJVkuXJEsRCGfb4KQOzVz%2FzXx7OjN9T85J6vd4ZZWw2FmPfTvB4vD5vbynZfj2Nsy7P3P%2FYgPcMrZPGvNLipZCPSri9VvDig9HK8vFIKopWKSxGcfWumnixamgdv7VtxPBaryOD1BkHJ82b%2FAITf%2FWwrxP%2FBXY3vSfE%2BnTPAz%2BzIsqSmJYTrmf5jF4eu0gAQrqBxhfloy1urJrV9ypjzxCiIyKORJWzpVpm9VOYGYcOMI%2F20iYi76szUDOHrfa6owhqz8WUNdhBBZeFItAyIhl8Bn0YVM%2BkapLM84csI46ISc96IKEHgk7yr%2FZP6%2B5HGwgWBRPVFsBaRVOUhI1GV92l3bls7Kt5jo70acjnI4jYd6ofDTRLsIEiE7ab3zdjBOD92iQ6ngpBDoH7OlSqXrKcvr85ia0mxR7jA65dQvHLez8Pe0dD%2FPQ5S6mZD7oKzlPr%2FGXJXfZmqBl%2B2srTcw7rW%2BoAClU93ZK7u5XHM65gT6FtcHjygl4aoFm9ftNaHkujQI%2BrQMtXVboYiNBQLdXg1BASfF%2FHy%2BYWBz1o8Rhi%2BR5hRsYXs8bUwmO%2FhxAY6pgF%2Fc3u8qwHSU4ilOMuKj4orYgTQYvPdB%2BwQlD0sUx4Ksqd5nLcFDntn2Z5LJw2F35xHGqW%2BXpVrX7m4FDV9NqTN51Ub5SmnFBx4WnWpv51L%2F5jyhRcqlcnhITGdLS9PcXKEhngmhfKHRoCjjf8wajux2ikK%2BKuKD6S6r44mH4p2E0ylMNJULQVN9O8tY1S1F9k9pgUEAubqLWBsw6ygjl4X86HQshH8&X-Amz-Signature=7646df3b320d8574f09b3e73492610a58f806976d3660d568f3f89fd4635e6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LAAOIA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH%2BDWA6NZM2%2BMail%2FwweuoES0oiEIe6HS5Q5JBz11w5AiBSn80exh4J0CWmHuascNhX%2BzOHTiNtN8tyPeAiNjTbyiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpokJP9gDShviMIy%2BKtwDXerHlS4vySOW43eKEGJ9BVfyehxvo1nc4GDK2mkjWsmyVyRtbmwSonVbfTMnfox5dH%2BijpZ29RSQuyiaknvCPF43TyDsrwq3gD7o%2FJMq37MEN3tJ4kjCP11f1O%2BKnE3jX1qP8kOLGZTjFBjvoQxvSuBLHZxmn%2FaZ2J3GZuEPgy4SJjDFQ0w0nSk2cEj2O12y0tRwCXeIGNQT9OHerZxT3zQOdK0YgLDGW8q8I2gMW6aDHDhUoTXNYsxBjKUG6meCC6zpuHfcudlvBuRRzE5PcZiJsgWzACW8M6QSwWZ0VF%2FeBwOdIClvqDhxOuuzTmpLJC2zLcli4VcBH%2B5oAEKtii4TogM2s8ITP%2Fz5444igJdu1izTqcqWbsnQLKLRRiDV2gFIGpDqH2yyPDkLoaSin3P6p59ncqmdtrlW%2FwU4TznRDphHpFXFEr%2BFil2Df8VkO1Uzpj%2B54Y3yzHjh%2F5c9OgKCI7lBDn8r%2F0CzuPd0XuuAdW6OQU2hlOUHtccEhW2xcyj3VJY3v9JRE6m9tTwAZF2%2Bp2Hc5ZYCaBt5LJmhRZGJvB%2B3EKSsUj2xMk%2BlUZ%2FgwKrlDMcjkRT%2BwS8RdUh6Vilc2%2BI5ruHYnxjU17EZdnOhv5F8MAG2iPUmaJQwqe%2FhxAY6pgFK2T4hGFtd6K1mPBA8OHmKLPlDNC6gGw%2FyTr1qap%2BOOiPcUWY%2FL10X1fOtbao6ic1%2BCf62nUoV8EgGYOYDLvCK9MsfrJ4KA1kmBDyM7fhT7%2BjFL%2F0Kr9UWp7x2yHW2cZNHMhLTcA5W6Yb9%2BlB7Bqr%2FwJecvaFWDP7il%2BfqJCVNBidxrU%2BI66w5qDMpgNa6sS7dHKXT2pDWi7KmtoXyU7iKwSYbQ8H4&X-Amz-Signature=e602a78588f75fcb949bde9915cd264a773dc265c58c65b6a400ab13a5920c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5UJCQO7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJl7qeu6AlDnZFHQomO%2Bsgzx64Qr%2BRTDPO7TMqKX4rgAiB9m4i3euMTgRHJBXdQeiAXuv5IpbFiN9F%2FZjz2q9p0NCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcDlTdmaLDELor1hWKtwDbA9VMz%2F6EQHHSd1P2sOkppgTdHkR50pmolpkydseb8WRp11pl9UORf3byj0M0FhSVY6Zdod8Acu7o%2Fmz0JYS47W9f%2BO0%2F3Ch8ouUkA8daLUPgpX%2BZOXzYxkz70Y6LC115X49lW1GLjnJCgE0udZC6DyFO2yI%2FDR2DVQyHBC7mBlFvba%2FMfS4lpJzarxvdmgoxDMfQy2J7bQxRw6JvC4t%2F2WT1mV%2FNcTL9nyJ5N3YDFdT1yLn%2F9X1%2FDcXfbOBrH6qq9Zi1dZsKfr1XJDRArGOrGnCFvKRZAPGB%2FWr%2BMEf2p5euj0EHnWgHyiafP%2F9211E65ifRDtAjPTGYpjf3ctRZGGLnV9w3b08vU%2BnY6%2BxEkaEhTkDAUVuNDJCYQmC6WDQov%2B7HYL49b%2Fjr0T6bi5CFM4hPW7Hm15wLVh1xUSSkYhepWWXiz6wO1k2%2BYRARvcJ1zji8frKmOk%2Ffx8uDay2BVdBnds%2F811oUOrZg0Exs%2Blq9KoX5RxYzhhb1ssO4Us1K6yHl5EunarQffG8zFncOhR%2FoC%2FBVgCCiRdFq6QihTUwD39woJZ%2F8x3ze7OwejqsSAU13Iw6SSNZqE71IW9hB0ShwJFVoqEcJKRd5uLXXZDumznodvIaWviDOEow7O7hxAY6pgHPpOxJEEW2o8OU3%2B7A9DWYWBoDKfiVw3EPAkxzhesXAezdQbhyNh%2FZU7NnrLag2fXmmUtuua87sLVuy4TlQInG2gVWScamvHF8qLFSA0KcFEKl1gIbYoLktDFDtSwXoU4iPXSXINhtVsVykcuh%2FqY5gfIHr2Xbu2hEo%2BOI%2F7FtFpXuos5apXheoys5foCgg4%2Fxma4AzYo4AB6qZsbTWdnJ956U1SKi&X-Amz-Signature=cd52c6c82943145a7e4322d08fb9f612b6bc23531d61df3a1d31651b3720aa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PJZPMCO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtk68%2Fy3EUSfo9z2rByyxCnfv8jYiyqr7zXKkp6YYjKAiAolXboApS8OBMXNx3l0lA1pFzaJqmYG0MzuVrJxSOJPSqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKLwmcW5NTMEPcK6EKtwDRyQqkTyupRywO7U3tRlDmuLdiUU9hnlkM5%2F7ejj42C7JUDaz0mpVSKahK%2FTZjTo7XhT%2FNJVkuXJEsRCGfb4KQOzVz%2FzXx7OjN9T85J6vd4ZZWw2FmPfTvB4vD5vbynZfj2Nsy7P3P%2FYgPcMrZPGvNLipZCPSri9VvDig9HK8vFIKopWKSxGcfWumnixamgdv7VtxPBaryOD1BkHJ82b%2FAITf%2FWwrxP%2FBXY3vSfE%2BnTPAz%2BzIsqSmJYTrmf5jF4eu0gAQrqBxhfloy1urJrV9ypjzxCiIyKORJWzpVpm9VOYGYcOMI%2F20iYi76szUDOHrfa6owhqz8WUNdhBBZeFItAyIhl8Bn0YVM%2BkapLM84csI46ISc96IKEHgk7yr%2FZP6%2B5HGwgWBRPVFsBaRVOUhI1GV92l3bls7Kt5jo70acjnI4jYd6ofDTRLsIEiE7ab3zdjBOD92iQ6ngpBDoH7OlSqXrKcvr85ia0mxR7jA65dQvHLez8Pe0dD%2FPQ5S6mZD7oKzlPr%2FGXJXfZmqBl%2B2srTcw7rW%2BoAClU93ZK7u5XHM65gT6FtcHjygl4aoFm9ftNaHkujQI%2BrQMtXVboYiNBQLdXg1BASfF%2FHy%2BYWBz1o8Rhi%2BR5hRsYXs8bUwmO%2FhxAY6pgF%2Fc3u8qwHSU4ilOMuKj4orYgTQYvPdB%2BwQlD0sUx4Ksqd5nLcFDntn2Z5LJw2F35xHGqW%2BXpVrX7m4FDV9NqTN51Ub5SmnFBx4WnWpv51L%2F5jyhRcqlcnhITGdLS9PcXKEhngmhfKHRoCjjf8wajux2ikK%2BKuKD6S6r44mH4p2E0ylMNJULQVN9O8tY1S1F9k9pgUEAubqLWBsw6ygjl4X86HQshH8&X-Amz-Signature=3713f6395d9f102153e36e4a2bf6735d9293d8674256e3f6c8dfdd3cabd74627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
