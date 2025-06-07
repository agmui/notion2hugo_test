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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6QAFCZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzgblIppHNqZt1WUUWpNVkh2drQQn188b6pxzd3S2%2B4AiBdZcYECa7jLy1Q8TwQyN5NG8XIXZJPjIcncHE1vMmUkyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHZoLKskU%2BlScv5dbKtwD3mnYHsjG9kp3a3gSVxIlK7rf98sbWEfV1dBN0SshVWsE6trDFRtqwrFqZveMvjuswgg9EVMswcQLmBCpESWKILquqF6M2TxUyntsx7qYP0W24%2FPvUE5f%2FMf54HUJ2H2Kx43gAgdXFwaljljZBg7lZDmAa45ZtQSMp5vs6a6nXVTtV%2FpYrpJQCNUA2ZZjpgQfXm4VsuyyADwJkW9zQF0TfNKE1A7WnVQpZo2zjonhWDt1vso90v9DQmD2NxrUMZ5gljl30V9DMy86dHPCcThJVI2IN9cQQJk6eMbBmfrdG%2BSiLETgSLLRrtnHaxTxhbOOrqZN4FKPpl%2FZc597PaRkJRW89hi6gg71W8QYoHOi6XbpmgVNnmOtsI222GB%2B7bgZ0hCq4lWJuHVShnTbzG3QOvZ%2FfDsdeboA66JCtUyQ1PhsF1QFsSBZ2pL3bemwDXL9KRMLxKWqUwnKTzfxzVW9cm62n435E6GIUvSk1SlhkBUouPxLbcIyqfJsEmsHL2FQqbFYuIhHQAcOd9wM7hT8c0K9w30NqSMaHLUc%2BnVZu8hYmdmPWSatkEWDc7aWVpdWVDg8P2Gz8ZxqHtREeUzbS37wICkmgJcUqHDABsjCmDG5jrIqrbFg9iV8AgAwy8OQwgY6pgH%2BYkKVd7NsLTikWZORgS%2Fyoj03WLYnDXh5bpyPDp4eMX1ua8dzIRQJTJyF4ab0BMFDWXQpKtb%2Bl9wMaiQD3wQNF1E8tbeORCvs0efb%2F%2FMX0ijs3S%2FTwAjoidGF90Gfxea%2FlC5RUvs7lFiZUY7%2FW4USicJfwXXMLU%2F3JsXJDdxjf14qru5cUlJvrIaNrcV3rombq5laQ%2Bp%2BIw%2BwRoQCHTghi6Dcbt7l&X-Amz-Signature=dfaebbaa12d73ed5249e2cd2832987486c50d8c73d38cf7b03d77042472a5f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6QAFCZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzgblIppHNqZt1WUUWpNVkh2drQQn188b6pxzd3S2%2B4AiBdZcYECa7jLy1Q8TwQyN5NG8XIXZJPjIcncHE1vMmUkyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHZoLKskU%2BlScv5dbKtwD3mnYHsjG9kp3a3gSVxIlK7rf98sbWEfV1dBN0SshVWsE6trDFRtqwrFqZveMvjuswgg9EVMswcQLmBCpESWKILquqF6M2TxUyntsx7qYP0W24%2FPvUE5f%2FMf54HUJ2H2Kx43gAgdXFwaljljZBg7lZDmAa45ZtQSMp5vs6a6nXVTtV%2FpYrpJQCNUA2ZZjpgQfXm4VsuyyADwJkW9zQF0TfNKE1A7WnVQpZo2zjonhWDt1vso90v9DQmD2NxrUMZ5gljl30V9DMy86dHPCcThJVI2IN9cQQJk6eMbBmfrdG%2BSiLETgSLLRrtnHaxTxhbOOrqZN4FKPpl%2FZc597PaRkJRW89hi6gg71W8QYoHOi6XbpmgVNnmOtsI222GB%2B7bgZ0hCq4lWJuHVShnTbzG3QOvZ%2FfDsdeboA66JCtUyQ1PhsF1QFsSBZ2pL3bemwDXL9KRMLxKWqUwnKTzfxzVW9cm62n435E6GIUvSk1SlhkBUouPxLbcIyqfJsEmsHL2FQqbFYuIhHQAcOd9wM7hT8c0K9w30NqSMaHLUc%2BnVZu8hYmdmPWSatkEWDc7aWVpdWVDg8P2Gz8ZxqHtREeUzbS37wICkmgJcUqHDABsjCmDG5jrIqrbFg9iV8AgAwy8OQwgY6pgH%2BYkKVd7NsLTikWZORgS%2Fyoj03WLYnDXh5bpyPDp4eMX1ua8dzIRQJTJyF4ab0BMFDWXQpKtb%2Bl9wMaiQD3wQNF1E8tbeORCvs0efb%2F%2FMX0ijs3S%2FTwAjoidGF90Gfxea%2FlC5RUvs7lFiZUY7%2FW4USicJfwXXMLU%2F3JsXJDdxjf14qru5cUlJvrIaNrcV3rombq5laQ%2Bp%2BIw%2BwRoQCHTghi6Dcbt7l&X-Amz-Signature=200cb3270bc648357af256406f41eb2a0561a506e8c0b0cf8e0dabb538f26931&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6QAFCZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzgblIppHNqZt1WUUWpNVkh2drQQn188b6pxzd3S2%2B4AiBdZcYECa7jLy1Q8TwQyN5NG8XIXZJPjIcncHE1vMmUkyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHZoLKskU%2BlScv5dbKtwD3mnYHsjG9kp3a3gSVxIlK7rf98sbWEfV1dBN0SshVWsE6trDFRtqwrFqZveMvjuswgg9EVMswcQLmBCpESWKILquqF6M2TxUyntsx7qYP0W24%2FPvUE5f%2FMf54HUJ2H2Kx43gAgdXFwaljljZBg7lZDmAa45ZtQSMp5vs6a6nXVTtV%2FpYrpJQCNUA2ZZjpgQfXm4VsuyyADwJkW9zQF0TfNKE1A7WnVQpZo2zjonhWDt1vso90v9DQmD2NxrUMZ5gljl30V9DMy86dHPCcThJVI2IN9cQQJk6eMbBmfrdG%2BSiLETgSLLRrtnHaxTxhbOOrqZN4FKPpl%2FZc597PaRkJRW89hi6gg71W8QYoHOi6XbpmgVNnmOtsI222GB%2B7bgZ0hCq4lWJuHVShnTbzG3QOvZ%2FfDsdeboA66JCtUyQ1PhsF1QFsSBZ2pL3bemwDXL9KRMLxKWqUwnKTzfxzVW9cm62n435E6GIUvSk1SlhkBUouPxLbcIyqfJsEmsHL2FQqbFYuIhHQAcOd9wM7hT8c0K9w30NqSMaHLUc%2BnVZu8hYmdmPWSatkEWDc7aWVpdWVDg8P2Gz8ZxqHtREeUzbS37wICkmgJcUqHDABsjCmDG5jrIqrbFg9iV8AgAwy8OQwgY6pgH%2BYkKVd7NsLTikWZORgS%2Fyoj03WLYnDXh5bpyPDp4eMX1ua8dzIRQJTJyF4ab0BMFDWXQpKtb%2Bl9wMaiQD3wQNF1E8tbeORCvs0efb%2F%2FMX0ijs3S%2FTwAjoidGF90Gfxea%2FlC5RUvs7lFiZUY7%2FW4USicJfwXXMLU%2F3JsXJDdxjf14qru5cUlJvrIaNrcV3rombq5laQ%2Bp%2BIw%2BwRoQCHTghi6Dcbt7l&X-Amz-Signature=d135c1a315e8f65f3a057bbf60a9f6ec253bb324d357bb972d0284eff733638f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466544GGTQ2%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwXP51MTKFng4I7On6wj%2BoTJPFxthmPihiWuJKbIyj9AiBREFALZ9aQeaUCVufbtaLRo2%2BGUVkWKfMUTjDeQ8R%2Ffir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrVYnkmd8kdUQSMcjKtwDggB113B3srNtg93O30v%2BmQEysM385Q5IG%2BEfyxsf693ah4Y3EYmlEaMPrheE2kFES6J2jOkz4d5EEUPxG2DvRel9oOssyKfqvHjCTq0MPE103moybeh%2Ba0stZqzFAOf53dKJ7AnplWHf2ZrUbl8pxnvp51oxEeFLo4RRgFydMoBQ%2FapWcSP5BP0aEEooPeSp7L1od%2FAndeyGDZ9UsfDmxkIY7X2e4Iq7emyJ8BaYClYtzU78QdcgNVEiCruMTTauXjELbVUd3vb%2B4ZSKIbTJNp60plcgEiQXrvCFzynvHeCKKIp5nOYwNIQXdjYXGEUom3uKhTMR6%2FvHc1ppXR%2FkjPNjhDNYImfUiYPAyj2bCCkQhdEAZjizhGN1G6HqrJRCi95hG4Qh9VHGRkxcX4d%2BE9Tcy5wpKF4YdGg3Zvy3HeW%2FT%2BYuWgZVZR0OxLc2eJaH1UIipaKdhAzS2LCrRx%2B4HhEnT1riXQzWa0AHP98tEyAzMPK11M2ft4vZOxdoT8El1XSmZGgrU8u95nwSz%2FHya1vNAZM4mwl2SkhChu1W18OgAwPRS5XOOX4z4ZAc8j%2FK%2FrA7G0l8FhGq3uNFA07NE%2BbCxK3hm8xiwgU%2FzHXvBZY6SnmwM%2BqNZuLHD7wwmcSQwgY6pgEH6YVtQQb9jJ9Rmgu8ennOEzJ52Bo84nW0b7%2Fs7QgAl%2B9imhVhr3DZhzeDKyhei83xzaBwOfuRN6q%2FlvuGcykl10ZRHdb9dDTJ1XbvVCyPURUy%2BLKDbxhwNIKXtNvv74aZaiO9k6Gf0DUYsx9%2FulcvtuWIUpKJiu6TlfHSS9XiOkICZG6KBBh1ddEAaOrnCkjcbQgXY9iw768a0ynt4siwJVXtqm73&X-Amz-Signature=5882a6220f3ef3177ec2cc1e852c6c517a8a4fdbaec1ee6b2220c22bad84bdae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS5HM226%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSC%2FEEw%2BzHV1yw%2Fufr0EkrOs76ZFOkeiGh9jqqfmt84AiASxKrZgJAxIgrBG6weM4OjevePQ6fxuskKAQxcVtgIyCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMkPgVqd8FSabiE6xdKtwDgDQ1TlhLxbZPkpkU2XFedUkd8rJLt2VDZKCpLLsKiNQgN1%2BP2hkBZdpYQbkQTLk9aGYaXxZlPFu40VfqQ9%2BDus%2FI4n1jtDJ1vo3zEiAZ9soIzmnowl%2FN1iIxeA0uuqwx9orgxZC0uK%2BdGT9mwn%2BzvZd69wNyR1EPOGcGlkCqHJyiwS8KnG%2FaNXJP2YKO6CBHIJ%2BJ0v8Zsgq%2Fm8RsjYaXPpRoGPMb7H1ErbHxm51YGDd3I8FkzbxUODDlgw3nW%2Bi8Js9WHs5eFtCpSiTY%2FKg%2FlOphwcnjMm9NLzSrGT2FMta1gU88iIP6srb4sK%2BDvB6vz6X0fTYcxT4B0SRMofy%2F0KD4dqudZOrRxBHdOesMLir323itanSmwbGvJEHOkCrfVJy4ZyTgNgETppRipAUA%2BzHix0ZIwErxo0bKh2e2ZIuBrSQytATO0xMduuvqo%2BjNt5u%2BK76yCZfCN09cE%2FI%2FUB%2F6y%2FyQO0vHty9KSfDilnUnzQrv6W7VacSLCP8%2B%2FIiHtGpV13VpaNixSdJ2B2EPgQ%2B59CC4M3sg0HFYAILbZxcDFMxCLzs5qMwnHKVZxYWuNcFUObUTzu%2BEzJryU%2BAuS1c4lRIIrnil4POXfBNcGdMIMS9p9mtnGm0kkaYwscOQwgY6pgGTDA7IG74ehQYfGZ0QK7FT6TLADLvGCjCajhIQO35PbHKf1r01exMKvvNYbwpfYrd1ONDPLjuort8LkCbtlfw60lX99LoklmDYIjFocU55ccgfvIPWmGpaYq9imhlj%2F40VQox8V71KwerFH8t%2BZUcMs3oRQ%2B4iYaJHeLXBSRyVNJLXzqkNlrrwgum9Y2HHrbzAYrS5QD%2BVSyOv6cNLfH5SYfhGeswg&X-Amz-Signature=64d74eb2af971fd5d1aa9b5e256916afa477c21121b7562dc1256da6eca24ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM6QAFCZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T131804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzgblIppHNqZt1WUUWpNVkh2drQQn188b6pxzd3S2%2B4AiBdZcYECa7jLy1Q8TwQyN5NG8XIXZJPjIcncHE1vMmUkyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMHZoLKskU%2BlScv5dbKtwD3mnYHsjG9kp3a3gSVxIlK7rf98sbWEfV1dBN0SshVWsE6trDFRtqwrFqZveMvjuswgg9EVMswcQLmBCpESWKILquqF6M2TxUyntsx7qYP0W24%2FPvUE5f%2FMf54HUJ2H2Kx43gAgdXFwaljljZBg7lZDmAa45ZtQSMp5vs6a6nXVTtV%2FpYrpJQCNUA2ZZjpgQfXm4VsuyyADwJkW9zQF0TfNKE1A7WnVQpZo2zjonhWDt1vso90v9DQmD2NxrUMZ5gljl30V9DMy86dHPCcThJVI2IN9cQQJk6eMbBmfrdG%2BSiLETgSLLRrtnHaxTxhbOOrqZN4FKPpl%2FZc597PaRkJRW89hi6gg71W8QYoHOi6XbpmgVNnmOtsI222GB%2B7bgZ0hCq4lWJuHVShnTbzG3QOvZ%2FfDsdeboA66JCtUyQ1PhsF1QFsSBZ2pL3bemwDXL9KRMLxKWqUwnKTzfxzVW9cm62n435E6GIUvSk1SlhkBUouPxLbcIyqfJsEmsHL2FQqbFYuIhHQAcOd9wM7hT8c0K9w30NqSMaHLUc%2BnVZu8hYmdmPWSatkEWDc7aWVpdWVDg8P2Gz8ZxqHtREeUzbS37wICkmgJcUqHDABsjCmDG5jrIqrbFg9iV8AgAwy8OQwgY6pgH%2BYkKVd7NsLTikWZORgS%2Fyoj03WLYnDXh5bpyPDp4eMX1ua8dzIRQJTJyF4ab0BMFDWXQpKtb%2Bl9wMaiQD3wQNF1E8tbeORCvs0efb%2F%2FMX0ijs3S%2FTwAjoidGF90Gfxea%2FlC5RUvs7lFiZUY7%2FW4USicJfwXXMLU%2F3JsXJDdxjf14qru5cUlJvrIaNrcV3rombq5laQ%2Bp%2BIw%2BwRoQCHTghi6Dcbt7l&X-Amz-Signature=a4730145fa1a1b38ce29a5ee5b12f2bd5a57291dd62a644c644af2a50462a86f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
