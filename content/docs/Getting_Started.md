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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTHEUR3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDXztfg%2Fdwc125FTUhsk5%2BEJvS%2BI2JsoxIO4zh2gfyAnwIhAOcxFhzUnzOeG8aYdmBN8mQCtLn%2FKD0ZIgdpcd5aHQZ1Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx9EVBhgNkjwW%2Fjc5wq3ANlqavOfmlhSqrc0%2FHbU%2F8cCWg3PvRLvTv9f55S3MXbKCwHBvIjYJVPE7jwFIyHu2CpWLthlIIRVeEsBOodRIjoyiP0chg9L43e9KBUatXL3RXBI0Jf7P01%2BOQLkP7gDKTsiE2DoL2l5s45G%2BPZ1bSdWKJcnO%2FZUyPDX4ScF27oL6pAqwkuOjghm2CvhCtLKtcBVe00RlbvR5UIOtUitD1WbNPOyWKhP8lcHCjsO8CTFb82mJdgqd0%2F%2BiKC9%2F6diHA39WytKHkke7uZoIek8wWbL5goUE9pY4XspOHAIaX%2FRmcm8JmjrPCvR1V0Jp%2F1IatafpB%2Fk%2B3SBvge8ivCNDAPRfrIKpNjtoUhc9oKnJqJRXDgGLzND61ZiRdluITgIsdamdkKe9Wwnwsvb3XjG55jBP8TgRQEyiOALMVLp%2BZ%2B4XFYR%2BNN9R4v%2BoQLLUSmQNVbPEarv6nIQTchJGMCccMmg9zGnQ14kkq3z5Lw7qyHOg%2B2IqLr%2Bf2cETS1XYX8OFBqDe6GqlhR2a9lSgEVqc7WTr2vWzNfqP6luAm5IBE3YiIRAXbniIJLdcdh77bZvvERmIiTWVlmEsxD5OppS%2F76xKvf5ZM3sIipwW2BqKqP7cUKbwRqTDc%2F9KOLZDCIhtrDBjqkAWDTBi%2FKezLVSs5KXLcl%2B%2BEMDCkQ0taOKk1E7Wu4y%2F9toj2mz%2BQW2u%2BXMHcYwopwOo0JMIsQhj0%2FJei%2FWaz8TOpzugL3O6rABA9GONXTovBuX3%2Bw3wi1MADT1IGkzk%2FqsR4O6YjB4Sd%2BNuzD82aHzj7RT58fiFJ%2Flu%2BJyWidnmtomTkin1wOw7NHpmQEDfvp%2BuPL9cPVSBC%2FL%2Btu4a9Oh%2BAI4mta&X-Amz-Signature=1771179f90a783f3a9d271f811f164773a1f93a77f30964eb797c8bc8479f9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTHEUR3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDXztfg%2Fdwc125FTUhsk5%2BEJvS%2BI2JsoxIO4zh2gfyAnwIhAOcxFhzUnzOeG8aYdmBN8mQCtLn%2FKD0ZIgdpcd5aHQZ1Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx9EVBhgNkjwW%2Fjc5wq3ANlqavOfmlhSqrc0%2FHbU%2F8cCWg3PvRLvTv9f55S3MXbKCwHBvIjYJVPE7jwFIyHu2CpWLthlIIRVeEsBOodRIjoyiP0chg9L43e9KBUatXL3RXBI0Jf7P01%2BOQLkP7gDKTsiE2DoL2l5s45G%2BPZ1bSdWKJcnO%2FZUyPDX4ScF27oL6pAqwkuOjghm2CvhCtLKtcBVe00RlbvR5UIOtUitD1WbNPOyWKhP8lcHCjsO8CTFb82mJdgqd0%2F%2BiKC9%2F6diHA39WytKHkke7uZoIek8wWbL5goUE9pY4XspOHAIaX%2FRmcm8JmjrPCvR1V0Jp%2F1IatafpB%2Fk%2B3SBvge8ivCNDAPRfrIKpNjtoUhc9oKnJqJRXDgGLzND61ZiRdluITgIsdamdkKe9Wwnwsvb3XjG55jBP8TgRQEyiOALMVLp%2BZ%2B4XFYR%2BNN9R4v%2BoQLLUSmQNVbPEarv6nIQTchJGMCccMmg9zGnQ14kkq3z5Lw7qyHOg%2B2IqLr%2Bf2cETS1XYX8OFBqDe6GqlhR2a9lSgEVqc7WTr2vWzNfqP6luAm5IBE3YiIRAXbniIJLdcdh77bZvvERmIiTWVlmEsxD5OppS%2F76xKvf5ZM3sIipwW2BqKqP7cUKbwRqTDc%2F9KOLZDCIhtrDBjqkAWDTBi%2FKezLVSs5KXLcl%2B%2BEMDCkQ0taOKk1E7Wu4y%2F9toj2mz%2BQW2u%2BXMHcYwopwOo0JMIsQhj0%2FJei%2FWaz8TOpzugL3O6rABA9GONXTovBuX3%2Bw3wi1MADT1IGkzk%2FqsR4O6YjB4Sd%2BNuzD82aHzj7RT58fiFJ%2Flu%2BJyWidnmtomTkin1wOw7NHpmQEDfvp%2BuPL9cPVSBC%2FL%2Btu4a9Oh%2BAI4mta&X-Amz-Signature=9e448a247ba764663aec808690210ac73bf2065a82b16357e95e2d7953092c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTHEUR3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDXztfg%2Fdwc125FTUhsk5%2BEJvS%2BI2JsoxIO4zh2gfyAnwIhAOcxFhzUnzOeG8aYdmBN8mQCtLn%2FKD0ZIgdpcd5aHQZ1Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx9EVBhgNkjwW%2Fjc5wq3ANlqavOfmlhSqrc0%2FHbU%2F8cCWg3PvRLvTv9f55S3MXbKCwHBvIjYJVPE7jwFIyHu2CpWLthlIIRVeEsBOodRIjoyiP0chg9L43e9KBUatXL3RXBI0Jf7P01%2BOQLkP7gDKTsiE2DoL2l5s45G%2BPZ1bSdWKJcnO%2FZUyPDX4ScF27oL6pAqwkuOjghm2CvhCtLKtcBVe00RlbvR5UIOtUitD1WbNPOyWKhP8lcHCjsO8CTFb82mJdgqd0%2F%2BiKC9%2F6diHA39WytKHkke7uZoIek8wWbL5goUE9pY4XspOHAIaX%2FRmcm8JmjrPCvR1V0Jp%2F1IatafpB%2Fk%2B3SBvge8ivCNDAPRfrIKpNjtoUhc9oKnJqJRXDgGLzND61ZiRdluITgIsdamdkKe9Wwnwsvb3XjG55jBP8TgRQEyiOALMVLp%2BZ%2B4XFYR%2BNN9R4v%2BoQLLUSmQNVbPEarv6nIQTchJGMCccMmg9zGnQ14kkq3z5Lw7qyHOg%2B2IqLr%2Bf2cETS1XYX8OFBqDe6GqlhR2a9lSgEVqc7WTr2vWzNfqP6luAm5IBE3YiIRAXbniIJLdcdh77bZvvERmIiTWVlmEsxD5OppS%2F76xKvf5ZM3sIipwW2BqKqP7cUKbwRqTDc%2F9KOLZDCIhtrDBjqkAWDTBi%2FKezLVSs5KXLcl%2B%2BEMDCkQ0taOKk1E7Wu4y%2F9toj2mz%2BQW2u%2BXMHcYwopwOo0JMIsQhj0%2FJei%2FWaz8TOpzugL3O6rABA9GONXTovBuX3%2Bw3wi1MADT1IGkzk%2FqsR4O6YjB4Sd%2BNuzD82aHzj7RT58fiFJ%2Flu%2BJyWidnmtomTkin1wOw7NHpmQEDfvp%2BuPL9cPVSBC%2FL%2Btu4a9Oh%2BAI4mta&X-Amz-Signature=3e039c07463b050637b6c800b2e561b723b95c87f38bd8174da532cd515b0ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOOXPQP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCe8PGQNFSOXVsQXxHlS%2FUjxKuPM94x45kvaRm%2Fi%2BJMeQIgSqaUm2q6jmW1BdYeJQNby%2BN6qdg2S63P5SEvJHSdy48q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOb2OZhAE5PIfjG8NircAyon0dN%2FUOK6cfLDEOErasNo0pbh4FClPaU338VIiHi0aWcsdvEM7RCc3PHuj6z5EVDTVolE22x9z3NzJV5HDglQEL3JK7EG%2BJUepkxDyxcGKnzzYruFw2nCBydkY4UJBs7SfvY1JORs69qv4OxfPhrCzo%2FxG9MRciRcLMMv9MXod%2Bnpq1PSVIJHlMiJJy73fOjC%2BHEF0FK6gfpKbNvcwjt2XBNQIXzJ8iL6Vsqixb4LDQLwlOn3kcTbbiwf8unBGNN%2FA%2Bpsaltd0sUr8H%2B7BUzW9yNbi%2BKWTC7CzqHcPa2tQRTs5QaR%2Bfq%2BEnS4fSAyX1PooxulGrXNLEWqWSxgaHVliWq9bgfkT8jijHei6pgEHLJsyorlAGjpCUqbvKN7ki2o9f9uGXMIvkWHRbwZw5XjTRJAeTX%2BF5%2FcV8GMcfRjfuUIboo%2BYxvqX1%2FXExLapjDqbsOUi4QuSPgOq9VmmFWkcEsPwoDeasNTwWCMWG%2BH9yHzY6H2PwbUbDq8hsf%2FVJdwJS4XqvXaH1HTtngQc4Wxm9pg6DxEQ99wrcpGgIWTX%2BBOy1d%2Bz2LCDzVdRV9tEn1vKlTXp3AzZnrZif7TcxRR%2FZjcU7m05fALpxZIZTg4m022eyq62A%2F2VTl8MKSG2sMGOqUBKVtI7r5yep9xJowSlcjIgs3QSg5CYETBoFwnEXbt1MpiY1IAX%2Bsnht7vUQJn2P5WgiXOWhzke%2BIn%2BSYasv9hG3ZFSTwTesYI57n3B3CH5BJ%2By98vnbxzRX63ivdaHahqhllHYyV%2F9ntY9GBXuUKhpbd3Jk2jRSKPf4onTj8Dme5dYmEA4oBTjSWmr9V7XzkiDZgQqSBEQrAeVNGSPywXG3bmZefd&X-Amz-Signature=3553d7fb0146479124bd7915a3e47af69ce03da012039933d2b39d04dd11b958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KI6LI2%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCkpoBMwk6uogfKv5NYJ6fW6E%2FoPBCfKY%2FvcRPbPSQglgIhAJ0tDdad2SQ978J3s1RtlXoszbMAiywZ7rtVxQxCDEuBKv8DCEoQABoMNjM3NDIzMTgzODA1IgzOgt3TyCOh%2FZKrM6Mq3AP0db7WOyDWFmcpq0kzR6N%2Ft8AsU5tAqO6giBm%2B2fViOEPHau4PCIeCYDze5LJ3XznJxlciDw3XP4N%2BKe0HwzPptxHjoIahRoWw7FSV0RRKVsQtAFs2mk%2FB6%2FiOVPlnAF6THLljfH5k5SaGKFs8JMAERKy0d%2Bg2aE3b%2FPAdgVv%2FDpoUn2p3avC2DadTUnXSRpL9avgf1bO0EP%2FgtiUTfNrTgvv3d9O7h%2FU%2BRd3hQcMrqcUy8CxmNGbAZytbL0nL5phDggPfo7Vu4Hkmktnv5JBHG3hZRFPvgXOUUjL43b2cf0dzN4ulMEncm9RBEWwldjkr2TUaw%2F4aJ35PAUaKo%2FEyOU1cwdA7jkVfAJ80DktPr7QwtZmr2hMBmKyQEWY%2Bk6mdf0vxQuiHENzKT0%2Fm1j0G%2Bg9dRx4CWbiZuTZNR0v4uQj8afY6jZQXuSOnguUAvVGtW1IYjyLkZTHuW29w8tBSVVLUiDXx%2BjfcI6FvYWBuxQSt8F4ySMy1wnMjU7ZBnEjz%2FgdRgmFjx1wpgNMWqSI0JmSsceGAJdeE0MYchjbOkVsygQq8FQyVqZlrxwfDjSPUubNz0rHyDDCVqbE0v3hxlJpvxEEOSM1xNDcCk2evkXYYZOtN3GNNKaYpOTCwhtrDBjqkAeFXGMqgNxcxpPZgaF9RejcjpNqa7HO2D%2BENzqXpQ5NtJfECd1BjzW7otGktIlLhBpC1kGljuxi5KgyjT8j5VD8R7tcime1odNvGATsWNV%2Bd6ksx%2FD951o22DPDGT7rl6u2KC3tz1CQFbcWg0CTOvZgO6JgSFe5Hxtd0joVBXgq09UlEYr3vmo4qXA6LN79xyyaC9Az4Lgp00ArOH1XSEgaB%2BoQ0&X-Amz-Signature=4bf2868497cd2428ef0527130755bf8f113a5c3221f2b108128e7db3c63a471c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTHEUR3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDXztfg%2Fdwc125FTUhsk5%2BEJvS%2BI2JsoxIO4zh2gfyAnwIhAOcxFhzUnzOeG8aYdmBN8mQCtLn%2FKD0ZIgdpcd5aHQZ1Kv8DCEoQABoMNjM3NDIzMTgzODA1Igx9EVBhgNkjwW%2Fjc5wq3ANlqavOfmlhSqrc0%2FHbU%2F8cCWg3PvRLvTv9f55S3MXbKCwHBvIjYJVPE7jwFIyHu2CpWLthlIIRVeEsBOodRIjoyiP0chg9L43e9KBUatXL3RXBI0Jf7P01%2BOQLkP7gDKTsiE2DoL2l5s45G%2BPZ1bSdWKJcnO%2FZUyPDX4ScF27oL6pAqwkuOjghm2CvhCtLKtcBVe00RlbvR5UIOtUitD1WbNPOyWKhP8lcHCjsO8CTFb82mJdgqd0%2F%2BiKC9%2F6diHA39WytKHkke7uZoIek8wWbL5goUE9pY4XspOHAIaX%2FRmcm8JmjrPCvR1V0Jp%2F1IatafpB%2Fk%2B3SBvge8ivCNDAPRfrIKpNjtoUhc9oKnJqJRXDgGLzND61ZiRdluITgIsdamdkKe9Wwnwsvb3XjG55jBP8TgRQEyiOALMVLp%2BZ%2B4XFYR%2BNN9R4v%2BoQLLUSmQNVbPEarv6nIQTchJGMCccMmg9zGnQ14kkq3z5Lw7qyHOg%2B2IqLr%2Bf2cETS1XYX8OFBqDe6GqlhR2a9lSgEVqc7WTr2vWzNfqP6luAm5IBE3YiIRAXbniIJLdcdh77bZvvERmIiTWVlmEsxD5OppS%2F76xKvf5ZM3sIipwW2BqKqP7cUKbwRqTDc%2F9KOLZDCIhtrDBjqkAWDTBi%2FKezLVSs5KXLcl%2B%2BEMDCkQ0taOKk1E7Wu4y%2F9toj2mz%2BQW2u%2BXMHcYwopwOo0JMIsQhj0%2FJei%2FWaz8TOpzugL3O6rABA9GONXTovBuX3%2Bw3wi1MADT1IGkzk%2FqsR4O6YjB4Sd%2BNuzD82aHzj7RT58fiFJ%2Flu%2BJyWidnmtomTkin1wOw7NHpmQEDfvp%2BuPL9cPVSBC%2FL%2Btu4a9Oh%2BAI4mta&X-Amz-Signature=75744ee6f8dbd76b42f4f09e7f674f935f63d2803daf43234886e135e7200396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
