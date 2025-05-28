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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAYZEIG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSjAv6p%2FRnjJFTbaE74gHt3EaysCqAcIv1U0e2BjHmWgIgXci5FxGnGSR0QEz%2BtXZ7U%2FWlqkk1A33%2FgrRjc2TQypkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKZlQXC3iTO4437y2CrcAxSKuc%2F%2BEDwApjunrxoRNrr82v5Zs8SvtqVg37yUX%2FGbRfMnpC2IEayahHK%2FqhbrcLJTlXfRqL0dw36QKdzEFCKVdacaFFzmYReGaYksU9Ijwmrn1TqQkx8Ik0%2FxeKPcrRm2nhbLvkgTekpB2u%2FEZHe%2FEdlItX4pNyEEyZ0nMT1RsO4rEJHIhn86Qt9cgQNNPOxcWqSj%2FWTw0mJmbp%2FVFamDzBit7ZFswoV5w9iREJH34RKcGkYtvmtv%2B%2Fd66cPSpamg4%2Bsh%2Bya%2FjwUGTDcSfnGZr03S33o1aB%2BEx9GURYFQqYxdh3qFur26hnV56ok7ZMuma5k6G4qGxaTvXWRXBip69hqMxK6vCvv1y%2BJ%2BzXWd0EOLbwT5DACWPogiXE%2FJ7OTTI7HfFwsLKfEoC9x7BzOsppsHs0UaH0APaIDGPvc2gkVS4BY6g1pHiHE4t60aJuwyjnXuj5dY%2FHDvTGapBJhTaVB0x27EHvhnBPAuI%2F4Kc85UJDFYX8nWoT53akVHE2B5kX5GtBYLnb4e3C3wMMD18j%2FcjTi58ZWgx4d8g8qIKc76F6ZlHts6WsL5sPKbALT3HH%2FVw1iXLiIBCWyIDuhobkXT8umMOJWAx9DUz7r8Sk3cFi6CMdNLDWtPMMvk28EGOqUBCbIUFli2oN9JhRuhyg71CxpZRLukYPW6egtYwmmaeEKqPcVKCKT0JHpisFS5SsKXzNfcgx36usfHPCpmsoGNhrV0Za%2BHr8Ce96%2BvAYsQ4nF1CIGki02%2F4LEFt6ZgBjWbQSdOCtMTWhITZSTUHHRCaBg8aeqt7AR2Ta0zOGQTYpCafPbLc48OJGaAW4GRLJ8XRVNPJYKR%2Bn%2B49PlZazs%2FdBtep6az&X-Amz-Signature=48c493ec38fb050e8e60e775e71b35e5d68619527bc5f13bda0627e5c4e47b46&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAYZEIG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSjAv6p%2FRnjJFTbaE74gHt3EaysCqAcIv1U0e2BjHmWgIgXci5FxGnGSR0QEz%2BtXZ7U%2FWlqkk1A33%2FgrRjc2TQypkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKZlQXC3iTO4437y2CrcAxSKuc%2F%2BEDwApjunrxoRNrr82v5Zs8SvtqVg37yUX%2FGbRfMnpC2IEayahHK%2FqhbrcLJTlXfRqL0dw36QKdzEFCKVdacaFFzmYReGaYksU9Ijwmrn1TqQkx8Ik0%2FxeKPcrRm2nhbLvkgTekpB2u%2FEZHe%2FEdlItX4pNyEEyZ0nMT1RsO4rEJHIhn86Qt9cgQNNPOxcWqSj%2FWTw0mJmbp%2FVFamDzBit7ZFswoV5w9iREJH34RKcGkYtvmtv%2B%2Fd66cPSpamg4%2Bsh%2Bya%2FjwUGTDcSfnGZr03S33o1aB%2BEx9GURYFQqYxdh3qFur26hnV56ok7ZMuma5k6G4qGxaTvXWRXBip69hqMxK6vCvv1y%2BJ%2BzXWd0EOLbwT5DACWPogiXE%2FJ7OTTI7HfFwsLKfEoC9x7BzOsppsHs0UaH0APaIDGPvc2gkVS4BY6g1pHiHE4t60aJuwyjnXuj5dY%2FHDvTGapBJhTaVB0x27EHvhnBPAuI%2F4Kc85UJDFYX8nWoT53akVHE2B5kX5GtBYLnb4e3C3wMMD18j%2FcjTi58ZWgx4d8g8qIKc76F6ZlHts6WsL5sPKbALT3HH%2FVw1iXLiIBCWyIDuhobkXT8umMOJWAx9DUz7r8Sk3cFi6CMdNLDWtPMMvk28EGOqUBCbIUFli2oN9JhRuhyg71CxpZRLukYPW6egtYwmmaeEKqPcVKCKT0JHpisFS5SsKXzNfcgx36usfHPCpmsoGNhrV0Za%2BHr8Ce96%2BvAYsQ4nF1CIGki02%2F4LEFt6ZgBjWbQSdOCtMTWhITZSTUHHRCaBg8aeqt7AR2Ta0zOGQTYpCafPbLc48OJGaAW4GRLJ8XRVNPJYKR%2Bn%2B49PlZazs%2FdBtep6az&X-Amz-Signature=9769d1f439a416990cc278355cb82d068964d94e8a03a40ec626136577ac11b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAYZEIG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSjAv6p%2FRnjJFTbaE74gHt3EaysCqAcIv1U0e2BjHmWgIgXci5FxGnGSR0QEz%2BtXZ7U%2FWlqkk1A33%2FgrRjc2TQypkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKZlQXC3iTO4437y2CrcAxSKuc%2F%2BEDwApjunrxoRNrr82v5Zs8SvtqVg37yUX%2FGbRfMnpC2IEayahHK%2FqhbrcLJTlXfRqL0dw36QKdzEFCKVdacaFFzmYReGaYksU9Ijwmrn1TqQkx8Ik0%2FxeKPcrRm2nhbLvkgTekpB2u%2FEZHe%2FEdlItX4pNyEEyZ0nMT1RsO4rEJHIhn86Qt9cgQNNPOxcWqSj%2FWTw0mJmbp%2FVFamDzBit7ZFswoV5w9iREJH34RKcGkYtvmtv%2B%2Fd66cPSpamg4%2Bsh%2Bya%2FjwUGTDcSfnGZr03S33o1aB%2BEx9GURYFQqYxdh3qFur26hnV56ok7ZMuma5k6G4qGxaTvXWRXBip69hqMxK6vCvv1y%2BJ%2BzXWd0EOLbwT5DACWPogiXE%2FJ7OTTI7HfFwsLKfEoC9x7BzOsppsHs0UaH0APaIDGPvc2gkVS4BY6g1pHiHE4t60aJuwyjnXuj5dY%2FHDvTGapBJhTaVB0x27EHvhnBPAuI%2F4Kc85UJDFYX8nWoT53akVHE2B5kX5GtBYLnb4e3C3wMMD18j%2FcjTi58ZWgx4d8g8qIKc76F6ZlHts6WsL5sPKbALT3HH%2FVw1iXLiIBCWyIDuhobkXT8umMOJWAx9DUz7r8Sk3cFi6CMdNLDWtPMMvk28EGOqUBCbIUFli2oN9JhRuhyg71CxpZRLukYPW6egtYwmmaeEKqPcVKCKT0JHpisFS5SsKXzNfcgx36usfHPCpmsoGNhrV0Za%2BHr8Ce96%2BvAYsQ4nF1CIGki02%2F4LEFt6ZgBjWbQSdOCtMTWhITZSTUHHRCaBg8aeqt7AR2Ta0zOGQTYpCafPbLc48OJGaAW4GRLJ8XRVNPJYKR%2Bn%2B49PlZazs%2FdBtep6az&X-Amz-Signature=336a0ce1a8134955ea8c761d9b7e8f11f2e6d86bb780d430e00541519c57b8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZZKRVF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ5MuzgzZzUFA5FQWWzdWpyKOtXt%2BuRIveNFcTyvT%2BkAiEAt9b6%2FQRtQ%2B95AowCO%2FntoVfNbNaUuioW0HwyA28ACcoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHAx%2BkBYF8Df8v4P6SrcA1Koobvf%2Ff6K1eGUIDEAMWZvSSQezUwQwE%2FxpH07t0P2lKDmrr3GgCNWebQv3DVOb9bb86K64rb5gw5U3S8a0T8DY7b0lG9M85feSMHdTNPoGFvX%2BHRMFdptno0KpmPI5m1nsxeX09gbHdq2SZABHeN9ogO%2BKZ8rSx3OpehSQrKDopeRC%2BAu%2B9QLfkC4RjjITpSK214f2LJ0N84kk8zRqhPoonFssatuY22BabRR6dmcKiDOWAevIcO9LCeIIWGCePAdJSmntvF7S8kzxAUKfx7ObEwyU7fOGFfLlQvZtoyBuDvvZp7L9xudsRkfsdHCKucTYQcXa9SOhPNxJmFyXjJ1JXLaOijdqhUPJfk8roZOWGhpYF40nbB9vlQOqgOaqUf%2BLNVTCOl7YiiKHaSsYuRmGgiBDGPrwmsKHd3%2BWISH1CyYcxFHvuhD0paAs8pz%2FvAmaUrO4rU4eh%2BHutNcmKHMZ09FDtuyA2jcAiWxE9EZURRxkuxYSBieL%2F%2B4LY6eqvPn5yXsn6IUVJU0EQ0IncrhP15mI4wOyTVirxwx98gdwAIUbmypNX9Q8xgewIcpb5JhDWiS0HRCWksRlWiS3X81Fif%2Buz9kWPzBaTmg8qkxDpRTiG9uNdSoKompMMDk28EGOqUBe8G4ZLHH%2ByxIxVzx0rfxHWHJwFVSL7mDL%2Fi5vl6qKArcnHSthX8P1fHYZfODICy0jAJ6KfZ7gPLub5XONLrL0uoQ6Le6pasTkzxrX8LCk8cxy1CkCc6SWeZFOw9x42%2BL3E0zz78TX%2FuTVSITMLV6MdIQsn%2B5QJfa2c4td67fY8WNoeFdUKWpfieWRmY0PbYDUJRsyxBlW%2FuJ6femHQuwFX%2FbsjV6&X-Amz-Signature=20b01c51fc8af81eba0b313d406192d3ec6c40dfbf191a8bcc287f4319061a16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GT4FLYC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHzXDQgppT7ahGG3%2Bet94bn3Ycssjxf81aKU%2Bh0N6UCAiApuOKLN2hgWvIzwvXQrggJ9NJ6Jqn8K4L6C%2Fo2GHAXzyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMY17kaBtFsUzBHEihKtwD%2FK2xXJGPVyTfM%2Bd1n7lhgwXzaA%2BFwAsYqGKbmFT5fWSK71I8MmyI%2B%2BKfA3ob0k9Dlw5%2FXCRLjCOcdoSjxoW%2FAVgWJ9NDbckXW9qv3N9fBF51SiqSyLW7w%2FkZPuyZJrT5LoT8el8VQ5jTWN%2BmD80ig0af9AqyTOaTrCElDs988KjJTtqh5MJpp%2F4FYMPmID%2FCE4HjndCVd6eVKo6P05ehASBhPe4ort9FNxAKaWIf1qbpCs%2BTC%2FdtbpMhM624S6w2S8WaDg5KXTjSpxLNs%2BV7jw7sfvh1dAMEVF%2FiWhU8CeXmod1zN4%2ByqpaV3eK%2F%2Blz00v90zG2zMjN7CcgltedB3uq0Z2hiOfzYrLhCr1c87YDx0EymbC47F6PJtR3uR2%2BOmlaVYMRu%2FLFH7fpZAezzrLRVx0xSHRqWOdcWR8Q5EJUrBrAQlJG0I6wYqFpu%2BkWWocIdQEaR5ZtPwG0d9EOnrEooylcW4vMpMyoDqxX1O7Am6CHQutK0AxdvOKCvOyaJQLjuHQo4cZROLpQk3J9YcToCw5SSzz3XQwIq3e3XqzJtzm8AY4P5v4LqApOH4OtyffG0YAZ%2ByNswjU0KajEL0KkZttkU3y31wtPJUnHa8BbjNI0ZMK4bAw8Vt9Aw8%2BTbwQY6pgHFXOJja%2F6DJlQJIVvcYsQsh0H96EJDAQaB7gpIaDtrf9XH2jIkKlwuzxMuQAU7ELX8D5nqq61ZKopy%2BSFZFAu7jspXo2YhAzFmov9sDLPSHwOYSrFyJNkWMNauDf3H32nsBHjdzPa%2FBB4NAHD8c%2FV9UalSPPDKLbZ7ajNHSceYPKaXwDfKLHB5eYjw24pWLxHdmbxiLR2uFDIB2%2BA%2B97fJCrslaprG&X-Amz-Signature=e9b98e4160395403cbb1d8804078f92106c5c568b1218b2e0eac594f713d4eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAYZEIG%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSjAv6p%2FRnjJFTbaE74gHt3EaysCqAcIv1U0e2BjHmWgIgXci5FxGnGSR0QEz%2BtXZ7U%2FWlqkk1A33%2FgrRjc2TQypkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKZlQXC3iTO4437y2CrcAxSKuc%2F%2BEDwApjunrxoRNrr82v5Zs8SvtqVg37yUX%2FGbRfMnpC2IEayahHK%2FqhbrcLJTlXfRqL0dw36QKdzEFCKVdacaFFzmYReGaYksU9Ijwmrn1TqQkx8Ik0%2FxeKPcrRm2nhbLvkgTekpB2u%2FEZHe%2FEdlItX4pNyEEyZ0nMT1RsO4rEJHIhn86Qt9cgQNNPOxcWqSj%2FWTw0mJmbp%2FVFamDzBit7ZFswoV5w9iREJH34RKcGkYtvmtv%2B%2Fd66cPSpamg4%2Bsh%2Bya%2FjwUGTDcSfnGZr03S33o1aB%2BEx9GURYFQqYxdh3qFur26hnV56ok7ZMuma5k6G4qGxaTvXWRXBip69hqMxK6vCvv1y%2BJ%2BzXWd0EOLbwT5DACWPogiXE%2FJ7OTTI7HfFwsLKfEoC9x7BzOsppsHs0UaH0APaIDGPvc2gkVS4BY6g1pHiHE4t60aJuwyjnXuj5dY%2FHDvTGapBJhTaVB0x27EHvhnBPAuI%2F4Kc85UJDFYX8nWoT53akVHE2B5kX5GtBYLnb4e3C3wMMD18j%2FcjTi58ZWgx4d8g8qIKc76F6ZlHts6WsL5sPKbALT3HH%2FVw1iXLiIBCWyIDuhobkXT8umMOJWAx9DUz7r8Sk3cFi6CMdNLDWtPMMvk28EGOqUBCbIUFli2oN9JhRuhyg71CxpZRLukYPW6egtYwmmaeEKqPcVKCKT0JHpisFS5SsKXzNfcgx36usfHPCpmsoGNhrV0Za%2BHr8Ce96%2BvAYsQ4nF1CIGki02%2F4LEFt6ZgBjWbQSdOCtMTWhITZSTUHHRCaBg8aeqt7AR2Ta0zOGQTYpCafPbLc48OJGaAW4GRLJ8XRVNPJYKR%2Bn%2B49PlZazs%2FdBtep6az&X-Amz-Signature=1cf5e96c6ab56abfe2982d163dbf032d57904700964329b80115b51dfacafd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
