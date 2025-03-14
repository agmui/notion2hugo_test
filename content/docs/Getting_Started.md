---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZSQWFIT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXmcqhYkRE2lgJClnESuQwpGHzlDV%2F2MZ%2Bc7Ai1U2AzAIgUk%2B2w0fZs8P%2B8HEZoRDvjsj4olPT1WXXLzBHhoRtu5sqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINnG1oTCs3gHNzNyyrcAx6fO3Z4y7H4y%2BoI823yYrSJ2olDFlgiS1Nh3Z3N3daDKnZ1VYNW5iq%2FGF8L1DjRY68HNkAdERszRWNNhS%2FECMq7kSmQdmw6XPwopGlLlblxp%2B2awwmKLQwTAspLtdlVrvJiH3ytQ9kULc9hOcJqQuTJ%2Fw%2BsQ9%2FOTkN9A1GBowK3yMTX1eGjX2VvAp4Mp3xl0Sj4jq5iM%2B0YMrMKgvTbdcLHY0otyqMqs19%2B3tbhCH33pDmpqgl1cRKzQE8vb8VIVI2XG2lYp0U6Q6ElAEbHrknmzQrAIFvW%2FBEsB%2Fg8ilV3leQfj1nQVpVRWIs2K6sk5NKLPRDTQseb0AWx0nEJqJU%2F3DYbNW1o7q54%2BIYxKh9%2FV8Py8GSB2k4qFEUzeObNqpe9izJk8o4jJF6DDcG%2BQMF1OhRFIfSX2TJWVeIbq7zSfXHxMqKmPFwbjS3b4klduRlA1TV1nhmdguhMCSbu%2B08Cpsg5FQGdryZtWYb2KwfzU1gtmJDrqWXNiVHjyEoyWewHmp6IVs7Ra4OMaQ2qIgaOotF1CgPocA7%2F2HYZy58sDtBsQrr36UyGYHKsRY8%2BvizXeYmvOfRJFpZZFYuGDs%2FkbYdOGj4HvQbpiTiQzSkTlkzKDnoU5XVKtKvvMJOG0L4GOqUBAhaa8F1Hwsn0cFJDOZzD%2Bv3zXTc0Xpt7x1BDtHoPZ0HAJV48XdNVsO8%2BBfSonYw3l%2Bj%2BzXQZz7ImZU2q5Z9KSxOFbIjOkH%2F%2BSdlrRH6f0nngr%2BtnKwKYlk%2BPKB2J8tHSpOTJohPBNcjCIHkGgDGIc%2B0TsKqo603kW3KdPGz4FGL69SFCICZKl8jLeVwe%2F%2BttSh5jPL6kgs38M9V%2FenwByPrW%2BQJg&X-Amz-Signature=2e8974ada87daf7371ad979ca28f99162f98391d1d603abdff19d45fdc352c87&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZSQWFIT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXmcqhYkRE2lgJClnESuQwpGHzlDV%2F2MZ%2Bc7Ai1U2AzAIgUk%2B2w0fZs8P%2B8HEZoRDvjsj4olPT1WXXLzBHhoRtu5sqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINnG1oTCs3gHNzNyyrcAx6fO3Z4y7H4y%2BoI823yYrSJ2olDFlgiS1Nh3Z3N3daDKnZ1VYNW5iq%2FGF8L1DjRY68HNkAdERszRWNNhS%2FECMq7kSmQdmw6XPwopGlLlblxp%2B2awwmKLQwTAspLtdlVrvJiH3ytQ9kULc9hOcJqQuTJ%2Fw%2BsQ9%2FOTkN9A1GBowK3yMTX1eGjX2VvAp4Mp3xl0Sj4jq5iM%2B0YMrMKgvTbdcLHY0otyqMqs19%2B3tbhCH33pDmpqgl1cRKzQE8vb8VIVI2XG2lYp0U6Q6ElAEbHrknmzQrAIFvW%2FBEsB%2Fg8ilV3leQfj1nQVpVRWIs2K6sk5NKLPRDTQseb0AWx0nEJqJU%2F3DYbNW1o7q54%2BIYxKh9%2FV8Py8GSB2k4qFEUzeObNqpe9izJk8o4jJF6DDcG%2BQMF1OhRFIfSX2TJWVeIbq7zSfXHxMqKmPFwbjS3b4klduRlA1TV1nhmdguhMCSbu%2B08Cpsg5FQGdryZtWYb2KwfzU1gtmJDrqWXNiVHjyEoyWewHmp6IVs7Ra4OMaQ2qIgaOotF1CgPocA7%2F2HYZy58sDtBsQrr36UyGYHKsRY8%2BvizXeYmvOfRJFpZZFYuGDs%2FkbYdOGj4HvQbpiTiQzSkTlkzKDnoU5XVKtKvvMJOG0L4GOqUBAhaa8F1Hwsn0cFJDOZzD%2Bv3zXTc0Xpt7x1BDtHoPZ0HAJV48XdNVsO8%2BBfSonYw3l%2Bj%2BzXQZz7ImZU2q5Z9KSxOFbIjOkH%2F%2BSdlrRH6f0nngr%2BtnKwKYlk%2BPKB2J8tHSpOTJohPBNcjCIHkGgDGIc%2B0TsKqo603kW3KdPGz4FGL69SFCICZKl8jLeVwe%2F%2BttSh5jPL6kgs38M9V%2FenwByPrW%2BQJg&X-Amz-Signature=f35ffaf5795430309c4e77a3543cdcf850c67d35e27c194eeb111b91b92c1ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4NWYMOA%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLtkyGPPSdrEBSrTZVZdmVUK9t21mx35YQE2BaLlWz0AiEAhkUiVBiP97D0%2Fp3eAkJNJp2SN9tLblFQpFGSr3oHzxEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO76jR7kHQ7sH%2BRzbCrcA3U2twqxK53E3lslNA9ADWKm34SPjA%2BLeyWcyHbYh70EHMO4Dli7v00ArZKeGZMK4PS6g6svMoWHCtcZo6bhFcgcO6GLco%2FoGMKgtlpaLDtzhOkObwJyGZqMq8UhRq6%2FxgjbLexw%2FAVJXwDLXfXaC9I20kv30qqK%2FdmxL3KhkXQGxebnqozp3VgnXsueMc%2BA7NFd7rXybFLmExgvqGD60d2I3N6HCuH9ugigBT8sXF16xbJxKXaJZjRMBQXsrRRalGPlWKsOFlZg9WlSbrr9Cxo4rKYVEQsqdCT%2BHAKYSGWi%2FT1uD%2FS%2BeWbUUfoRI3wJBwbtjdPia%2FkNRRvYeommAfIHzOORkrgNjB0ZLsL%2FANQXbL7p%2FSuLZh9lnXrQtDK4k5LjPuEXLA5YSUIGA%2BWiDnpZHf0Uvb2rJjP4UZkRfPZwVFqDYc4mg5Ezp0MCdgZ79y9tPLCEKHHMG1d4T%2B%2BHnIioYdySdNr1S8maEW6dEu6gfZEc9N2BTcEBkGq4YslftbW8w%2FPwPT4eZ3I9TBLjJFM305SUBvu6Q%2Fa539Oxp0tWXrsI8cAVZ3%2FZIGsj%2FXlKYq9OKgwJ%2FutY7MIGlqHIF5KXzw3SJmp8BbK%2BN1Wnk0LewIqKji96TQIUzt%2FqMJaG0L4GOqUBTZ1Wak2uDpkasPmuR8O4nFvp2zveoN%2FNzlO50kgCR%2FItuT52WqBprNPNab%2FehBWyv%2BlGZeq4aHoLUBfGCzH2wVOL1h4bcjgq6mgqgdhTzf%2Fn7RjKu6SzASlx0DXCwzZ5DUgH5py%2Bl2YlJ6dMSwupPf0MWCEJ868wK9Ugr57qOerbBtpQqPkR2qooEBInmhrOAfluXK%2FPAHrR1vRnxOz11GkF7Zzm&X-Amz-Signature=fc20cda6ae89f4e87db27cfc446f6f1e2708c55c091f63a4ad2f2f80438f7903&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534BPJDQ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYxWuHlyaSuNcXSsb9ZtcueEIfNr2k9MQYp3WX1T2ljAiEAy5zcmL1l90Ifx4%2FqnEIdUGq3rDhib63kcJMQDnpBAtIqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPtVqMEYh9DLOzz1CrcAw00Z0N%2Bgw8x%2BdV9bjyUnfXRRW9krtTt5hzGC7nwJequvz4VAi5wjZRDEBrT0UPRPsgYvnoZEBwFKligZ8PMDjbQR69PXrij9yEmfxm6x8%2BVg6V2oxWh6yK3bNEJccNpO0%2B2g9ECBlq6vB4ZlMWWouBUuN1I29hRQZw2HRehkYSP7eslpeCbWKzNYpIsblhzXN%2Fy1kXeXt8sKhLvxk82eLbIJ0JVYR0viUC9lPYJjpNRvHaeqAvne8a1yZ%2FNsnQ%2B%2FTuItlIPQ0Otyboa%2FBMxrAlu%2FV%2BScSyn6EvNJoo74LZ1B5BvBkH41ZstjZI%2BZjnclnRG0JBaH3KBk%2BwOpwIUY4ciYvQoPRMVpvixhy3J9lfrE07hrIME9QzKYLCe7Owzg14fWlHJce8LTRNjXLEGkQJkVyxJZRudbPTWkZ%2FZXiRKc0Yh485vNte8behTS%2By3OD5Y%2FPZld70HdnWSqRIzwTqk%2F8TwH%2FhKODH%2BxzxeUu9ryaCbxXLjaFeRf7Zf6Fnke7pfoTRHhS7D4nl1Z8ywzjNJ0iIbvoTcpmWcitCpIdyLm%2FaM31yRAmJVZBnwtxRICwzIppvocC5g7NrgVz%2FgQhXvWHZWlfB9eet2L3k5KM3w%2F1RFUuRm5DJy0oQIMIyG0L4GOqUBQysED5K3IV%2BW35vhgPuKDMuupuxM78M09tO1RXXh7lhBcSeerYGP2ZXBwRWuRgoUBSjNbe1SrZqEDEoPqNkEN6bvULA7iGRuX9i0Ahz%2FYcbi8ILIp7%2FQAIGmvtJZY2XDsVFT0fTWxw2IYKQ7F3KOMSjzkmF7KIXGWpB5EVrEutR0vwayaRIA%2FWfvGq93BDFpba9QukyGGjfU%2FII8X7s6i0dV5Sj%2B&X-Amz-Signature=0112c80188cd8edb1b51bed323e4b56d16d69b318225fc6b8c52130d48ceebce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZSQWFIT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXmcqhYkRE2lgJClnESuQwpGHzlDV%2F2MZ%2Bc7Ai1U2AzAIgUk%2B2w0fZs8P%2B8HEZoRDvjsj4olPT1WXXLzBHhoRtu5sqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINnG1oTCs3gHNzNyyrcAx6fO3Z4y7H4y%2BoI823yYrSJ2olDFlgiS1Nh3Z3N3daDKnZ1VYNW5iq%2FGF8L1DjRY68HNkAdERszRWNNhS%2FECMq7kSmQdmw6XPwopGlLlblxp%2B2awwmKLQwTAspLtdlVrvJiH3ytQ9kULc9hOcJqQuTJ%2Fw%2BsQ9%2FOTkN9A1GBowK3yMTX1eGjX2VvAp4Mp3xl0Sj4jq5iM%2B0YMrMKgvTbdcLHY0otyqMqs19%2B3tbhCH33pDmpqgl1cRKzQE8vb8VIVI2XG2lYp0U6Q6ElAEbHrknmzQrAIFvW%2FBEsB%2Fg8ilV3leQfj1nQVpVRWIs2K6sk5NKLPRDTQseb0AWx0nEJqJU%2F3DYbNW1o7q54%2BIYxKh9%2FV8Py8GSB2k4qFEUzeObNqpe9izJk8o4jJF6DDcG%2BQMF1OhRFIfSX2TJWVeIbq7zSfXHxMqKmPFwbjS3b4klduRlA1TV1nhmdguhMCSbu%2B08Cpsg5FQGdryZtWYb2KwfzU1gtmJDrqWXNiVHjyEoyWewHmp6IVs7Ra4OMaQ2qIgaOotF1CgPocA7%2F2HYZy58sDtBsQrr36UyGYHKsRY8%2BvizXeYmvOfRJFpZZFYuGDs%2FkbYdOGj4HvQbpiTiQzSkTlkzKDnoU5XVKtKvvMJOG0L4GOqUBAhaa8F1Hwsn0cFJDOZzD%2Bv3zXTc0Xpt7x1BDtHoPZ0HAJV48XdNVsO8%2BBfSonYw3l%2Bj%2BzXQZz7ImZU2q5Z9KSxOFbIjOkH%2F%2BSdlrRH6f0nngr%2BtnKwKYlk%2BPKB2J8tHSpOTJohPBNcjCIHkGgDGIc%2B0TsKqo603kW3KdPGz4FGL69SFCICZKl8jLeVwe%2F%2BttSh5jPL6kgs38M9V%2FenwByPrW%2BQJg&X-Amz-Signature=e51e6c6a9f04a5888453639d5a41ec206381203bef35d21eac42dee61e26a9da&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
