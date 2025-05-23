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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFVY3I7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIB6dcNkGHbtMI0RYvLpGA7wk7xNbyAYQY0a84fEREH9yAiBOJqOGAUrV%2FRIBt521jjKUjS%2BW316H0yEtPeZ0g%2FkSOSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWs%2BJr8SYvCNxUmCAKtwDIEkmN64aZWfb2TxMdHyuinefDFC7LsnK9Bxw0NCQkNwg0DNB1sIxH91poxGD%2FozTn1LukkhIIks3FI1HlZ2uQND9I1oJeGx6osZomzQpj6rGhZNCl%2BQZsy5bygdQCntDl5H3H%2FRNnFeJz%2F2ea6SlXVWPKmYxhf19XTZpKmWD%2Bhu2WLoMThZVsM%2FteTehLf%2BSZboL%2BQ8s8wHGq0YThgVXFxu5XdM%2F0fOvxeTVW9FhFRgykg54nMlALVmUv1P%2BG5uHAIBGflctHBu3%2BcfxGsJE77ywxgqW1iITXzSeeTbS0YtJOc3DuFtMdf6JUP%2Bxx6Gos0sPd5goKR5wM1XuyOQpoydV7UxAL0c6mpz60ixUu1ivx%2FVR7Ryv2iORtT5paMk%2Fo4os6FFcQXzavYRTf%2B7DxCFeRW%2FsjQtkoBRXxRdpz%2F0W0eaYlfp24IexBLbi3ARw8krMo0mzf1i33IfbSDAJv97jRQRwUjB%2Fc%2F%2BK4grFPqVidP99xdpcvwvs%2B2jnp1Il5uUWXc2xLk7IbiClH9Y16BRKOUDy0hGgCYxYP8STb%2BinNq33jO9MZj4TmPhdfuYqsiFBWYUyD3P6Fleg37v3ggTqcEuvZexK7l8YgQ4cx05HlJaEfIgyj2ttZ2wwnMO%2FwQY6pgHqs4BJIrT8PiA08FODqoN8p2EAUm6bw4F8TEH6f0RKJ7OI%2FJOOuwZ%2BNi55aAEkPcRO387D3xEzaoZupnqs%2BUncSOMdNZV%2FHx8UzvgXk2EikgWwZrmd3q7%2BilyGHGvhbWjTy0YYAqKtVDs%2FbQ0hR2Fdj2F6PjHsZZCLF9aYrfC49rLuu8TWkQ3UG8nogb2SYNFiZESBs7RyN6jZTl%2Fdz2wLGaYf64jz&X-Amz-Signature=8c08fd4888bcd18abe5ce6bab3558feaf26eea94655364b5095a904b5c5c4b52&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFVY3I7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIB6dcNkGHbtMI0RYvLpGA7wk7xNbyAYQY0a84fEREH9yAiBOJqOGAUrV%2FRIBt521jjKUjS%2BW316H0yEtPeZ0g%2FkSOSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWs%2BJr8SYvCNxUmCAKtwDIEkmN64aZWfb2TxMdHyuinefDFC7LsnK9Bxw0NCQkNwg0DNB1sIxH91poxGD%2FozTn1LukkhIIks3FI1HlZ2uQND9I1oJeGx6osZomzQpj6rGhZNCl%2BQZsy5bygdQCntDl5H3H%2FRNnFeJz%2F2ea6SlXVWPKmYxhf19XTZpKmWD%2Bhu2WLoMThZVsM%2FteTehLf%2BSZboL%2BQ8s8wHGq0YThgVXFxu5XdM%2F0fOvxeTVW9FhFRgykg54nMlALVmUv1P%2BG5uHAIBGflctHBu3%2BcfxGsJE77ywxgqW1iITXzSeeTbS0YtJOc3DuFtMdf6JUP%2Bxx6Gos0sPd5goKR5wM1XuyOQpoydV7UxAL0c6mpz60ixUu1ivx%2FVR7Ryv2iORtT5paMk%2Fo4os6FFcQXzavYRTf%2B7DxCFeRW%2FsjQtkoBRXxRdpz%2F0W0eaYlfp24IexBLbi3ARw8krMo0mzf1i33IfbSDAJv97jRQRwUjB%2Fc%2F%2BK4grFPqVidP99xdpcvwvs%2B2jnp1Il5uUWXc2xLk7IbiClH9Y16BRKOUDy0hGgCYxYP8STb%2BinNq33jO9MZj4TmPhdfuYqsiFBWYUyD3P6Fleg37v3ggTqcEuvZexK7l8YgQ4cx05HlJaEfIgyj2ttZ2wwnMO%2FwQY6pgHqs4BJIrT8PiA08FODqoN8p2EAUm6bw4F8TEH6f0RKJ7OI%2FJOOuwZ%2BNi55aAEkPcRO387D3xEzaoZupnqs%2BUncSOMdNZV%2FHx8UzvgXk2EikgWwZrmd3q7%2BilyGHGvhbWjTy0YYAqKtVDs%2FbQ0hR2Fdj2F6PjHsZZCLF9aYrfC49rLuu8TWkQ3UG8nogb2SYNFiZESBs7RyN6jZTl%2Fdz2wLGaYf64jz&X-Amz-Signature=cb848672cd94608fd7c47e5c2b69f502118156b1daeee0d74c7c4bbd99e39b54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFVY3I7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIB6dcNkGHbtMI0RYvLpGA7wk7xNbyAYQY0a84fEREH9yAiBOJqOGAUrV%2FRIBt521jjKUjS%2BW316H0yEtPeZ0g%2FkSOSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWs%2BJr8SYvCNxUmCAKtwDIEkmN64aZWfb2TxMdHyuinefDFC7LsnK9Bxw0NCQkNwg0DNB1sIxH91poxGD%2FozTn1LukkhIIks3FI1HlZ2uQND9I1oJeGx6osZomzQpj6rGhZNCl%2BQZsy5bygdQCntDl5H3H%2FRNnFeJz%2F2ea6SlXVWPKmYxhf19XTZpKmWD%2Bhu2WLoMThZVsM%2FteTehLf%2BSZboL%2BQ8s8wHGq0YThgVXFxu5XdM%2F0fOvxeTVW9FhFRgykg54nMlALVmUv1P%2BG5uHAIBGflctHBu3%2BcfxGsJE77ywxgqW1iITXzSeeTbS0YtJOc3DuFtMdf6JUP%2Bxx6Gos0sPd5goKR5wM1XuyOQpoydV7UxAL0c6mpz60ixUu1ivx%2FVR7Ryv2iORtT5paMk%2Fo4os6FFcQXzavYRTf%2B7DxCFeRW%2FsjQtkoBRXxRdpz%2F0W0eaYlfp24IexBLbi3ARw8krMo0mzf1i33IfbSDAJv97jRQRwUjB%2Fc%2F%2BK4grFPqVidP99xdpcvwvs%2B2jnp1Il5uUWXc2xLk7IbiClH9Y16BRKOUDy0hGgCYxYP8STb%2BinNq33jO9MZj4TmPhdfuYqsiFBWYUyD3P6Fleg37v3ggTqcEuvZexK7l8YgQ4cx05HlJaEfIgyj2ttZ2wwnMO%2FwQY6pgHqs4BJIrT8PiA08FODqoN8p2EAUm6bw4F8TEH6f0RKJ7OI%2FJOOuwZ%2BNi55aAEkPcRO387D3xEzaoZupnqs%2BUncSOMdNZV%2FHx8UzvgXk2EikgWwZrmd3q7%2BilyGHGvhbWjTy0YYAqKtVDs%2FbQ0hR2Fdj2F6PjHsZZCLF9aYrfC49rLuu8TWkQ3UG8nogb2SYNFiZESBs7RyN6jZTl%2Fdz2wLGaYf64jz&X-Amz-Signature=dae8b17c38ceb6c5da5f2668f3153977ed5aabddd3213a645be75c2387c6a76a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYMVU5Z%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDlwY3n4fHhhLJ6pOnseePgttiKxIZLiSYkGKswKgeuUAIhAKDox4MFxWSJWpstmd5BbgbbpJZT7WkhxxDaeVjcvpp%2BKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuAHAX49nlyRC4rHoq3AOtrxcCru0wMjTVOqd%2BMkJ4vH32McPmdlpzETVJmXNKiOY7v8AaZc3RFxHJ25WkiK4FpAKPDJ1eBjf%2FA7US0N0YKHOkinqHmlDfc4Ej%2FaEp%2FDhQpfD%2F1OWA%2FHijOhyyw%2FEwvYXTEJXpnG33xFrATtj95hYlGaT61hlZ918EjtPAIEgvav5oqM5Ni%2F58przagWJ3VSjnMlEl2P%2FuUF%2Bx1HEVTyE2gRx28EPnBIgMeBF7uoWweAl%2F2VSmFyOxDHWOcb4tuDalZW8M1l8eLigeMpvVRjcSPdsjMPv%2F6%2BK3Gexgdwb1p0TfqzT5%2BBic0nFc4O4QOWr5puQXn9QsNfI7gqrtOqgN7xT7K5RXj9V7PjjaxoYbmGTYaUKhildPugyi8N38LLxYRr4OB8OvpqPb5MXEI%2FCGg1aFBy2GlJZMtbck1YHo73EqnexFlMufV2EE6cNyw3u4qcs72hP%2B4iIWGd4C6Snwm442u%2Bww0czWxTkFLihIyeLjE75ZaS0KFz8Fb3%2FkuSIMU7ukJv50rbCxSNUlYli5Ur8mudHBv3QBI3xBD5qdhDE4cotXuva3gYy%2FQt6tGBhNIHinunKpwatFAcQlclstE8hAcpWzlmt02aHVADQy8JYSR0lO%2F2HfcDCEw7%2FBBjqkAYJ8ygHdbMqF%2FYU1KpSBahf1AVBF6rjXpH5WhlJ5kEakl84tLFfDKZ4ZQdO61Ce6Bm1n53wvhROfweKzHGyyAu0PYN1%2BEU2M6tC5zmW3VsL0EqeeTlzqHUI53FK0947JDzNoO8ycTAKdJ9l8%2B4g%2FFbtgQB937OYaBxB1uWAlupIiEFvIpyhsUx1fk7v5unsWRUAqmtlfFivyNEWQuhb5h6QVk6a1&X-Amz-Signature=d44617462b3c4424f34ba2dea241d7e6505104ff636c5853dfaaaf639ae27f53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LHRUW2%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDSwLCYfcEfvKXsQIRwY8MKYIzlCqOGVwlC671g1erZLAiB93L7CX9FhPF2mf5FjD7RbqAaZR4sLd9xpMAhmnboffyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMESBve%2Byuda%2F7UpQdKtwDLMK%2F%2BBh3Nr5oZ8M607Wvdl6623Y0tmV5bSfB4J8qw3lc86q2YvDRMJC8fVvj79SCn9sYHc521vDIcvWL%2FbybQ7K4C5qul8pKdLN%2BIFrDnoIQakWv0ixhY7m%2FK%2B0Dp7oYnFOJL2bxtvHGB0b2TGZJ%2Bj7WRhvylcDhyfMuMh913AnBk5O%2FbXV26ROnV7DXOWx%2F6aDcCdMEmgUuEJeWKQ3nVHA5j2%2FYH7Yk15iX1mnsDfsgIRVDt2GaIOsu59xZ84Inzisjlnem%2FWqxz59m9lK6nIwRK2BScH6itIsFX3Xj8lHpFkkXjsWXl5KthCUt4YFA7JDX%2BbWyQfyyRYOpHYDe%2FIL%2BkLmQW2u5yaiao7FLVt9vOhikiuO3xGHqTlri9rdr2LCe7wLlMAfNT6VOr2W%2FmnQVnG%2BYDFedcOW3dRoQi3PZbeJZvzs5trzB19UWtsMPXboY34ZH4addK0h39CCD01bC9NB%2B72Wc6c9rUpmsFyC%2BRSxQdGkhpKV8k5xvD7TPm7%2FhUNHDZgCVf0rCQQ8xR1p5ZYnhf36QSJAmpOxuqY5RdxZ10cxBjD6Bks2cLQvqxVCLL2Bwtf5gq8ZMYpbMzUR8nQPotmAT%2F2KSTQ3sjFalNgGXUOq%2FGUXH3KwwhMK%2FwQY6pgGNhoye2ivIj3FipO0%2BOsiwBSCBezZF0Cc6%2F3b%2BjLO1Agt3DZYXqZWBFmYAqra0A8vhHrtkxQpg3r03qroqQAmcjO%2BDh546cu59nBIoGGP2KgJFnzxe3dQbArBHO0QnC057hpaXdf2yqb2c%2Bv9Vm3JqNgBb2bfdRJAKFuFhHV84WwFjiebBOTZoYhPU63KBSH9p23cld2Fw59mQA6dV%2BkHg6e%2FUcil%2B&X-Amz-Signature=8727769eca8289217550d5d32311f24c54f4c53281c74b52f6853b92a26aea7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFVY3I7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIB6dcNkGHbtMI0RYvLpGA7wk7xNbyAYQY0a84fEREH9yAiBOJqOGAUrV%2FRIBt521jjKUjS%2BW316H0yEtPeZ0g%2FkSOSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWs%2BJr8SYvCNxUmCAKtwDIEkmN64aZWfb2TxMdHyuinefDFC7LsnK9Bxw0NCQkNwg0DNB1sIxH91poxGD%2FozTn1LukkhIIks3FI1HlZ2uQND9I1oJeGx6osZomzQpj6rGhZNCl%2BQZsy5bygdQCntDl5H3H%2FRNnFeJz%2F2ea6SlXVWPKmYxhf19XTZpKmWD%2Bhu2WLoMThZVsM%2FteTehLf%2BSZboL%2BQ8s8wHGq0YThgVXFxu5XdM%2F0fOvxeTVW9FhFRgykg54nMlALVmUv1P%2BG5uHAIBGflctHBu3%2BcfxGsJE77ywxgqW1iITXzSeeTbS0YtJOc3DuFtMdf6JUP%2Bxx6Gos0sPd5goKR5wM1XuyOQpoydV7UxAL0c6mpz60ixUu1ivx%2FVR7Ryv2iORtT5paMk%2Fo4os6FFcQXzavYRTf%2B7DxCFeRW%2FsjQtkoBRXxRdpz%2F0W0eaYlfp24IexBLbi3ARw8krMo0mzf1i33IfbSDAJv97jRQRwUjB%2Fc%2F%2BK4grFPqVidP99xdpcvwvs%2B2jnp1Il5uUWXc2xLk7IbiClH9Y16BRKOUDy0hGgCYxYP8STb%2BinNq33jO9MZj4TmPhdfuYqsiFBWYUyD3P6Fleg37v3ggTqcEuvZexK7l8YgQ4cx05HlJaEfIgyj2ttZ2wwnMO%2FwQY6pgHqs4BJIrT8PiA08FODqoN8p2EAUm6bw4F8TEH6f0RKJ7OI%2FJOOuwZ%2BNi55aAEkPcRO387D3xEzaoZupnqs%2BUncSOMdNZV%2FHx8UzvgXk2EikgWwZrmd3q7%2BilyGHGvhbWjTy0YYAqKtVDs%2FbQ0hR2Fdj2F6PjHsZZCLF9aYrfC49rLuu8TWkQ3UG8nogb2SYNFiZESBs7RyN6jZTl%2Fdz2wLGaYf64jz&X-Amz-Signature=d956746fe1163788d6e0e706a28bd86427ab922bba0f10c7a33e7f65095b5774&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
