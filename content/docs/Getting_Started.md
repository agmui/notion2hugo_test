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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRM5ZIR7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwWrkz%2B%2BZMhoVbu7zSXDyq8Oa%2BUeuhWO2DA%2FrbnGBLjAiEAueFEmRnRssV1y9GAdP%2Fobz3%2FoOKI5hWPNaJUP4Mn%2BKIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj8oEMo7nOKF6DqNCrcA57NzLhTrF8DLx7v8K5EvakCzllZnPe425yCUgQfJAEExfdZ%2F1eG4TfxJoeQj3BeisMp%2BJmSv4MJYx2NGYkRkVL6Hr6HM92WM15%2B1GIRIjUb9eH%2BxXIpwWyxvG0Dmhpa1b5MnhhGJx2cDdXnbJUsUxmZmdZU8OOB8N56ewJHS8A9OgbhoEgPGpiBeX92iYg95hUv1TxYjRlLenGY58f4sS6W5liriiFl69SEvJSPnAZ3Hf13qUB0M4P6LUnp1wUIGba3YaDqWm0cNON%2F1fuTXTlNf75CGLJKl46JZjIYekWLN7%2FmQCphqKlKvbLOAp051BFJ%2FS9ZJTgiyq3ePkMdWp9gVaMnfOzis9sunbd0fXoptuivvDZBe6NdpLP%2F0Z29HFuFvC6B58CBbrQ%2F09rIhwDoF1Twjg5QvNcgebqFelrF%2FznTBgv2j7pwu4iMnmyJFi6x11DGe17jjEFTFqMtHznBGkCZHJWm4IVBjdwZ5pXwYDngJ2d1D9F6R8L2k3nrXImEq5vDOat2%2FHkpJm2%2BVLezlZ7HM3ZSidhen1zrJJm%2FrtDPxQ%2BZovdpDabGg8LiC19jtZdWJ8Wjabf1T0s9j18pmjfzV5I9X84tbH%2FRHyV2PK%2FXQbhGDNGw%2BDGDMKC8hMMGOqUBKLcWdqeOAOOtnVJG50SIIHPhSs%2BxerrZHPJYiR8hVppNFDk1KhgwtbU0K7zZZagXBESWGXACzjlEjFrQoQAR52ewJRyjTeAPDPoxUCDlWh%2FaTv0NU7I2OpVpH3KIOeGaOBZf9dThsiFJqfDXJq4c5iUNR8VIbOhb%2FIam6vEoaRrwdOgu3pnb7BFmw6baRp4KRarQmyXfkZNjYU1kc9CfjtWlNIK1&X-Amz-Signature=7d786d96dded06c29e9f217aa0234d88cfcde4fbcf50dcfdc1157159369ba665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRM5ZIR7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwWrkz%2B%2BZMhoVbu7zSXDyq8Oa%2BUeuhWO2DA%2FrbnGBLjAiEAueFEmRnRssV1y9GAdP%2Fobz3%2FoOKI5hWPNaJUP4Mn%2BKIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj8oEMo7nOKF6DqNCrcA57NzLhTrF8DLx7v8K5EvakCzllZnPe425yCUgQfJAEExfdZ%2F1eG4TfxJoeQj3BeisMp%2BJmSv4MJYx2NGYkRkVL6Hr6HM92WM15%2B1GIRIjUb9eH%2BxXIpwWyxvG0Dmhpa1b5MnhhGJx2cDdXnbJUsUxmZmdZU8OOB8N56ewJHS8A9OgbhoEgPGpiBeX92iYg95hUv1TxYjRlLenGY58f4sS6W5liriiFl69SEvJSPnAZ3Hf13qUB0M4P6LUnp1wUIGba3YaDqWm0cNON%2F1fuTXTlNf75CGLJKl46JZjIYekWLN7%2FmQCphqKlKvbLOAp051BFJ%2FS9ZJTgiyq3ePkMdWp9gVaMnfOzis9sunbd0fXoptuivvDZBe6NdpLP%2F0Z29HFuFvC6B58CBbrQ%2F09rIhwDoF1Twjg5QvNcgebqFelrF%2FznTBgv2j7pwu4iMnmyJFi6x11DGe17jjEFTFqMtHznBGkCZHJWm4IVBjdwZ5pXwYDngJ2d1D9F6R8L2k3nrXImEq5vDOat2%2FHkpJm2%2BVLezlZ7HM3ZSidhen1zrJJm%2FrtDPxQ%2BZovdpDabGg8LiC19jtZdWJ8Wjabf1T0s9j18pmjfzV5I9X84tbH%2FRHyV2PK%2FXQbhGDNGw%2BDGDMKC8hMMGOqUBKLcWdqeOAOOtnVJG50SIIHPhSs%2BxerrZHPJYiR8hVppNFDk1KhgwtbU0K7zZZagXBESWGXACzjlEjFrQoQAR52ewJRyjTeAPDPoxUCDlWh%2FaTv0NU7I2OpVpH3KIOeGaOBZf9dThsiFJqfDXJq4c5iUNR8VIbOhb%2FIam6vEoaRrwdOgu3pnb7BFmw6baRp4KRarQmyXfkZNjYU1kc9CfjtWlNIK1&X-Amz-Signature=b9599ecf45a79997a31c6407d068c7ce0e6b26b29335c099c4659dc67e2ad8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRM5ZIR7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwWrkz%2B%2BZMhoVbu7zSXDyq8Oa%2BUeuhWO2DA%2FrbnGBLjAiEAueFEmRnRssV1y9GAdP%2Fobz3%2FoOKI5hWPNaJUP4Mn%2BKIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj8oEMo7nOKF6DqNCrcA57NzLhTrF8DLx7v8K5EvakCzllZnPe425yCUgQfJAEExfdZ%2F1eG4TfxJoeQj3BeisMp%2BJmSv4MJYx2NGYkRkVL6Hr6HM92WM15%2B1GIRIjUb9eH%2BxXIpwWyxvG0Dmhpa1b5MnhhGJx2cDdXnbJUsUxmZmdZU8OOB8N56ewJHS8A9OgbhoEgPGpiBeX92iYg95hUv1TxYjRlLenGY58f4sS6W5liriiFl69SEvJSPnAZ3Hf13qUB0M4P6LUnp1wUIGba3YaDqWm0cNON%2F1fuTXTlNf75CGLJKl46JZjIYekWLN7%2FmQCphqKlKvbLOAp051BFJ%2FS9ZJTgiyq3ePkMdWp9gVaMnfOzis9sunbd0fXoptuivvDZBe6NdpLP%2F0Z29HFuFvC6B58CBbrQ%2F09rIhwDoF1Twjg5QvNcgebqFelrF%2FznTBgv2j7pwu4iMnmyJFi6x11DGe17jjEFTFqMtHznBGkCZHJWm4IVBjdwZ5pXwYDngJ2d1D9F6R8L2k3nrXImEq5vDOat2%2FHkpJm2%2BVLezlZ7HM3ZSidhen1zrJJm%2FrtDPxQ%2BZovdpDabGg8LiC19jtZdWJ8Wjabf1T0s9j18pmjfzV5I9X84tbH%2FRHyV2PK%2FXQbhGDNGw%2BDGDMKC8hMMGOqUBKLcWdqeOAOOtnVJG50SIIHPhSs%2BxerrZHPJYiR8hVppNFDk1KhgwtbU0K7zZZagXBESWGXACzjlEjFrQoQAR52ewJRyjTeAPDPoxUCDlWh%2FaTv0NU7I2OpVpH3KIOeGaOBZf9dThsiFJqfDXJq4c5iUNR8VIbOhb%2FIam6vEoaRrwdOgu3pnb7BFmw6baRp4KRarQmyXfkZNjYU1kc9CfjtWlNIK1&X-Amz-Signature=cf816341ab6ce081399a38e74a02932c548a9a7fb0d51343ecc9f32ce0af9ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657CY5FPM%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmFvhxPdg3SGo1lMluT2UAxSHJncwoJnmBPknSsLZaKQIhAMKO%2BLHSIVj5y0kQFCn8soLWYJNLktg22qBSidJzc3fsKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypVWD9OLgBSpK1fDAq3ANgBIfj%2BrqCawHFbkCN1xFLQ9TyKEDoJs0hd%2F16JLPS4cFJtdjEHrv5Y2xoYr9yu3ChC9K4sCnsUUCsTGYcBt0ZqcJbe2iR31RCWL8GD3u9Yhax0onbiJt2%2FhTiY5NJrbeqIpVSZ3rcVQfsXMbzZpdTQv%2FPrTB8R%2BzcfHbVxzF%2FqjJ0I3lGRtkcB0I1nWLy5fcGLVfPdb%2F0WNQRw3QB3GYBj%2B8zHWpNVyW11TUE3ayliYbST%2FiJ1089hHq4JmoeYVjYz3eEePxN3oh%2B5hn2Oe%2BpXOxdK9zyToknf0vai7qDxMiMhF0e9I4UtIlMywUmtylMEKMsqoZq8d1UYm3B1bumMX2absP5jhfJWMqzN3b3%2F9U068R2USqoauuSbeiyH8z3JCLZhhAt5G6t3Odusbc44WFLX0M2UpO5WDsq6%2FBPeqeQcR8MnaFcDLAg70jZ25iJTRxFRiYp%2BIXSVPyYyVXOx80aisoiQkiCVNSwLlbW46X%2FOZSjY%2BcQnF4uMHrMXaWh%2BTPNbGXQIauNdwE%2Bj%2BeYbjYpcwWFibwKJt%2BgCFsHYyzht%2BQWymLjajKGClVmdt2%2Fg%2FX4jcIdlAMJFqgtJYvS%2Bwk1247GA39X5Xxo%2BB5Piaf1swylJNCYyQa%2F0DDQu4TDBjqkAfVTC7f9eEmo6%2B9zW1VYjUNJ7YaEsP%2Bqo5FHZo4SMmVRgbP83eg6Av3P17O5BhOmP3jXM1XPssiDGdlOrV5HGPVXPT6P9HmUH3r2Fet2C8sTaM2Q6DqFxDTEwgcQ7j3a%2F22%2BALsV0EXbGNDqimfGZKjgZBJTtgBjxpoI4AeFlo9VxjwaxkLPfUaBoHo8lSc%2BNTFDSCTmFF9iVNeAMeVpzbdvsDXN&X-Amz-Signature=6092988dc07721d4ecf5fb607e18d2532aaf3e3a8a25ec7c90ac77ebaaf604f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7Y4XREG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2mjN4HTxTdDDMU9w7yLFY%2FnksFETQZE2rnZ8BqCZUKAiEAgghDydVRWZRwthmYyZeMsd9QU8hRBc2JChvOYvVibDcqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjOILaF5jaWpjmaMircA1JJ0NAkqwDbIL%2Brh8z8QlCgBcH4wdCcGSybraw5iTGlvQzxZhtptOrBhNg46G818%2FnidXfc%2BRuYBM4HMQTT40rtNKHjaHUTRsTBLbOCBD4MqLCew8t7X42Rwey5EDEsozk%2BVuNWvBoUIuh68UMLMo7lMw65IujaIn5D3MHWq4bqTrIdbwXSS6cBsuMi%2FbrfhZMNQANYJ2KTXRMK7RVdbkIWmtaVrZWvQ0wzo867Ds2UkSqkp2NSwxZZoxUVnoSFVQAsAWM58Xtjls1G3KbIkrn90mTlinExTa2eG1orkauKZQtoBsNgT6qzI%2FDd4MsiAoOVIY6%2BcxlguOhMHR1jr66tgXvBCT52DS4VIfrsTfXi%2BA7rJzFyTPSO%2Fo604rDgn6EQSTrMpe9BoEBMOKNR9ZhWMnlTXzvNZAES0apF2vjyev8k%2BbKHslet8K%2Fv0reagBLYVQIVpTLurn1MzjeGb1eL1Fel1IvWPUuAM1bA8R5fabtbqU%2F2loUneCIrlKn%2B1n8YDP5scn%2BFtmHVxn%2B74w3aIhzHOXYTmxvq6R4xO3l6lTLhdrG8Cv%2BATlxZUGpOIWx2le5npxQrJH43aO1Tdp51JfGu842ZzWWRZa%2FDmkvHgXbIjOTQxdGQrGaEMO67hMMGOqUBPrGX5SMUIvZJrPxBHNVdm0KDyfn6ADe7Gg1V0bUc6hcyE%2B4P%2FnBscmlO62tnKPnSwtPCYQrs3PPXd7McevC3Ece8%2Fx0ZyWoAByo0PE1r8k%2F4CUme4wcI6KykxKfrN86PNkBJdXWHWkI%2B77kJwBtAYGwbXzBFQkLYRFpFWgDR6KYRU5%2FL%2FwEA8iItHi3s46yzI%2BkE1c42BwjfkoHTmCjGPf4VPOSx&X-Amz-Signature=f702e45b620b59e0af4f5a85201e08b7d6e86dff1398295ba60c785addbfde65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRM5ZIR7%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwWrkz%2B%2BZMhoVbu7zSXDyq8Oa%2BUeuhWO2DA%2FrbnGBLjAiEAueFEmRnRssV1y9GAdP%2Fobz3%2FoOKI5hWPNaJUP4Mn%2BKIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPj8oEMo7nOKF6DqNCrcA57NzLhTrF8DLx7v8K5EvakCzllZnPe425yCUgQfJAEExfdZ%2F1eG4TfxJoeQj3BeisMp%2BJmSv4MJYx2NGYkRkVL6Hr6HM92WM15%2B1GIRIjUb9eH%2BxXIpwWyxvG0Dmhpa1b5MnhhGJx2cDdXnbJUsUxmZmdZU8OOB8N56ewJHS8A9OgbhoEgPGpiBeX92iYg95hUv1TxYjRlLenGY58f4sS6W5liriiFl69SEvJSPnAZ3Hf13qUB0M4P6LUnp1wUIGba3YaDqWm0cNON%2F1fuTXTlNf75CGLJKl46JZjIYekWLN7%2FmQCphqKlKvbLOAp051BFJ%2FS9ZJTgiyq3ePkMdWp9gVaMnfOzis9sunbd0fXoptuivvDZBe6NdpLP%2F0Z29HFuFvC6B58CBbrQ%2F09rIhwDoF1Twjg5QvNcgebqFelrF%2FznTBgv2j7pwu4iMnmyJFi6x11DGe17jjEFTFqMtHznBGkCZHJWm4IVBjdwZ5pXwYDngJ2d1D9F6R8L2k3nrXImEq5vDOat2%2FHkpJm2%2BVLezlZ7HM3ZSidhen1zrJJm%2FrtDPxQ%2BZovdpDabGg8LiC19jtZdWJ8Wjabf1T0s9j18pmjfzV5I9X84tbH%2FRHyV2PK%2FXQbhGDNGw%2BDGDMKC8hMMGOqUBKLcWdqeOAOOtnVJG50SIIHPhSs%2BxerrZHPJYiR8hVppNFDk1KhgwtbU0K7zZZagXBESWGXACzjlEjFrQoQAR52ewJRyjTeAPDPoxUCDlWh%2FaTv0NU7I2OpVpH3KIOeGaOBZf9dThsiFJqfDXJq4c5iUNR8VIbOhb%2FIam6vEoaRrwdOgu3pnb7BFmw6baRp4KRarQmyXfkZNjYU1kc9CfjtWlNIK1&X-Amz-Signature=45db03ac6b6e8943a3c8419b4ca870d43aed5a3e5b08da8c394fc112a376e19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
