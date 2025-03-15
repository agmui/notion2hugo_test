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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EAOK4Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hCwow4ZjFdysyUf13lYGkxxwnvTjaMaXHAT1VlQxOAiEAqjZLWW3DT0%2FCkatSfVsPTz8jF000VtfxSy12w6NWwsUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8I1d3h4O3uZ8WX3SrcA5BOAWOL7LU1EDKy90lL41iXP3mW5Dw7U%2Fg5FI%2BfI5q61Dam4S8vdnnk0kUy8wbKTNlOCEso8pGne9tLjlJuX%2BK6ylGWHfmWdpv4uOqHlky3%2Fi3OnsoncDUbfwRx4zGPJmiRAy8Eeuqc2jlPGlaIUZZS4r1ZBIKyPMmqlBtwyFlBaRIoFaNLe4JyevHwDW8Ic8Aez145HCuCp%2B5Qztqdz8KkbyzIVHrSlHvDXK1bvqyv4i8nioxoi%2BsJKW4dIlK7ECxGQu8JgReS%2B%2BnbtydQE9Wpro5TaDQ5WpJdyys4LprnMZlLE9AGwXKRtXSpHL5eZdUgJDB8Vr0XoObtmUMjhZ0Yz2UlGc5CRh5bwSWGpob57ukqtlF8%2BZtftKYU05AIUs%2FbqMqii8869199tkTdpF%2BWiPw6AxPoK032YxBr4ZMauvnJaDHbBWDLY1%2B5ynwHJYuGTV6W1mSAHCyKNGVbtrXS5yPKrEnktn%2Bi2GtVGc5Hq4TwRYOIwdm5kbb8APVkOt4sZsNGB0sZBdnewHO0IMfA3pr8op3kumFyaEN0MMoje1gXxp%2F9TDB9ePdN%2FOPKYvmWtpFqDV2y3pfDAhk50E%2FmGQixcWIhJN6e6nfKeNDiaGIu43MCo%2FeuR2VmMIir074GOqUB7eU2JRmD7d1vZXsWdGUgOVe5p8UNYCtN89bortYjYAxAIY4Hum6HM7N2k%2BJHq6s7ViRh7Bra%2FVDDYKqTPs2kbtp8Jk5EX9JhyAuY%2FIpTtB2FGbmFMUwmlCsQUE0sa8J4v%2Fv1D50%2BAmw1b9OjWo3ZpFkAQxPieWjRA1m9gGnMjV%2F18MS0hOLzcCpD3ttU7IDzjjnbeih5gFV3bq8YZeHQeumhcO6w&X-Amz-Signature=ed5842922cbf1bb6aad83365d81ae4850155a7539807d5a5a88782b47e4c13d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EAOK4Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hCwow4ZjFdysyUf13lYGkxxwnvTjaMaXHAT1VlQxOAiEAqjZLWW3DT0%2FCkatSfVsPTz8jF000VtfxSy12w6NWwsUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8I1d3h4O3uZ8WX3SrcA5BOAWOL7LU1EDKy90lL41iXP3mW5Dw7U%2Fg5FI%2BfI5q61Dam4S8vdnnk0kUy8wbKTNlOCEso8pGne9tLjlJuX%2BK6ylGWHfmWdpv4uOqHlky3%2Fi3OnsoncDUbfwRx4zGPJmiRAy8Eeuqc2jlPGlaIUZZS4r1ZBIKyPMmqlBtwyFlBaRIoFaNLe4JyevHwDW8Ic8Aez145HCuCp%2B5Qztqdz8KkbyzIVHrSlHvDXK1bvqyv4i8nioxoi%2BsJKW4dIlK7ECxGQu8JgReS%2B%2BnbtydQE9Wpro5TaDQ5WpJdyys4LprnMZlLE9AGwXKRtXSpHL5eZdUgJDB8Vr0XoObtmUMjhZ0Yz2UlGc5CRh5bwSWGpob57ukqtlF8%2BZtftKYU05AIUs%2FbqMqii8869199tkTdpF%2BWiPw6AxPoK032YxBr4ZMauvnJaDHbBWDLY1%2B5ynwHJYuGTV6W1mSAHCyKNGVbtrXS5yPKrEnktn%2Bi2GtVGc5Hq4TwRYOIwdm5kbb8APVkOt4sZsNGB0sZBdnewHO0IMfA3pr8op3kumFyaEN0MMoje1gXxp%2F9TDB9ePdN%2FOPKYvmWtpFqDV2y3pfDAhk50E%2FmGQixcWIhJN6e6nfKeNDiaGIu43MCo%2FeuR2VmMIir074GOqUB7eU2JRmD7d1vZXsWdGUgOVe5p8UNYCtN89bortYjYAxAIY4Hum6HM7N2k%2BJHq6s7ViRh7Bra%2FVDDYKqTPs2kbtp8Jk5EX9JhyAuY%2FIpTtB2FGbmFMUwmlCsQUE0sa8J4v%2Fv1D50%2BAmw1b9OjWo3ZpFkAQxPieWjRA1m9gGnMjV%2F18MS0hOLzcCpD3ttU7IDzjjnbeih5gFV3bq8YZeHQeumhcO6w&X-Amz-Signature=195b4e954827e371bf28fc5ebf04481d80cd26729e2fa2ed8c0f403c4c7a3f71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARSG7NO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW4a%2B3vWaSN5p%2FGuhRW%2Fc2rY9SQA%2FaYudeGkGam2UvRAiAc6QYHnCB2SJ0oNp7VpPmIdg5tGptNimnyIar5Mu6r9yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsYJFo%2FXW7KsJkiq4KtwDNOxT6epGk4GTtrQNNTGLJ%2BqxYh87v3M%2BLtEkB8usL7vQpdKgoA49stWPoRRqqfcUlvvpaS0AMAugvIHfOwphjL%2BU53Jp7scTHLu%2FemzxZ9b1aZKXGbUgvj8yFbkCfRX1%2F11ktC6McAl4S5ZkSUaarZsN2megUfhQ5R9ve3a7sY3iW7ZLVI1g6icFL6XGG6zNY9Henn8Iml8WMQ%2Fr9n38D%2BLQ073qpo%2B%2Bu3Oc0HlgV8OsiXG3ETGHsznKsHAkVuIp%2B0iMrM0IMJhSNr8UmnRNsV46JuT52hU135vPL%2FnttGc7hMRwfObuyUgB5KGfxOFxMKgRVCRLt1o4UI%2FquKiVYitPFMtwJpa63yjM2pV1dRtH8hr%2F6yfUKSeveS77LDHtcrLNCd0TvWEFRuNJxKBa18F9PDu0aPlNvmEMEppR2vZELoUylL1BaceWdeHDb21A2qiC%2BJRReF0Hb7EUZQdFZTGwxo%2Br4Bd9pUH68mfOyIKzoCdbeExzSn5ecKN0nEb7H9m0fncOGBewGB3oi4Lqzd1%2FCDdZEOn9fjLC0txgZTTl%2FW4svMwCETYNhhEvKsG96RFpkhMzl1HVgXntylKNxcslsNhJlwikJIjKAiFsw0G4otsJKVAng%2BLEdh8wuKvTvgY6pgHWomWuUyQL4if%2BS%2BdERY76N%2Foln6g4ZbAV7jE%2FlmSukfRq5acW6jgNN87dVROqke5S%2FYHbNAcMDdi%2FbO3PEHdN3PpqHWevAZn%2Bfzb2yLq7ZWcjZpRh3LE37RiLOGo3lLmZKhheSPmM147Th6dCZnZndQ8B21ga91yShSHKfHbzAfYQ8cmi9CX6OYlWOOhz75jnfuCDQvD9DBldQqBeiXcDPHLTUHqx&X-Amz-Signature=a11d720d5380ee0e6546778bfdf9daac1b850c840474b8ef970847f3cccaf877&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUAAG3B%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOBu7bXrEf4TwOM9E4meYYbl9gpMrkC3ioAI4hJU1k2AIgSoludUDxd69nCQUzkhdA%2BNtwILcQZFEgexjGJxXa6RYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJaYwyOhegWkAN%2BUSrcAzJYnwp4azuox%2FkTf3auzIvaZWVErc07dbrJ89HJ7Hgy1sCG3l3U96MF6zOXkUcdrQjBxkpKYyIEtVeKU6O5Jz7ONFVmkfAj4%2FK1Q3Q5gohAP9UIpSmHRKykNj06gkmfQYqgjWWEG%2FKqe%2FPk1LsjVrQBnNRB06AvbwPuLfIdHu%2BQyu91a1ceRDfrq4SlZ2P66CgJRgsf2cKwUkGVcsDDO2so6gy41AmWRK56hVbXaSl2WKuZIL7Qc78Xwvvw0DMCBDpD59K0Kr48iU%2FXS7RSnBNT%2FnG25gVItBjMLzj9uA%2FW8fSL0ZQra4T5i4k7avcmMKrXyoIhdEYFP5TewgHJTvrD62Tvs%2F3jI39AZSMHETCbmYPjlm%2B03lM%2BMWbmCbqLV1EbTWhrV6%2Fhqp%2FgLCtf02TdSBMZ7ftJNIT4v2kWiQR0w%2B0WKE0VXEDlpw4y5a1%2FjGmTYLoiire6M3VRnW096iEoGX9zOyTmuJhgZ3K0IA%2BbZ6q%2FDMsyKbcEcNXW5zlHtEb51VHMJrCVOXFZG%2BlI57OepE52IRmwkTT%2F%2FlSQ%2FYsL8Vpl%2F5IQJb4%2FIwFzhSwYXOCGs4K5AtFGMh11epTRAeLPv02ylkAgBq%2BnEh5bBwDoN%2BuVqF%2FLosTOJCGhMOSr074GOqUBv3YVpA6bKU5Ca7a6BchGdjWfY%2FVPjhk8ex%2FMCOgfKx%2BG6ZYlBeMK6TTwpayqKMnKBrEpAtIEk0ErHqg3D%2BctXiAUOK3vIAFHPYs2k1%2BtQin04WN6%2FQatlfH9hqLqFR2zWrQM4QukGaQ8mFYsh%2BKaOFtUZl8qwCCTBrRFumDa%2BILdIs9MeKmAkbaAC1PrTEXRtv0zAKjhqaay9782Oxc74aD3BF9G&X-Amz-Signature=9bf1317d2173de6db80ce02b0e7e09836786d77678bdc6524507ac757e0320ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5EAOK4Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2hCwow4ZjFdysyUf13lYGkxxwnvTjaMaXHAT1VlQxOAiEAqjZLWW3DT0%2FCkatSfVsPTz8jF000VtfxSy12w6NWwsUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8I1d3h4O3uZ8WX3SrcA5BOAWOL7LU1EDKy90lL41iXP3mW5Dw7U%2Fg5FI%2BfI5q61Dam4S8vdnnk0kUy8wbKTNlOCEso8pGne9tLjlJuX%2BK6ylGWHfmWdpv4uOqHlky3%2Fi3OnsoncDUbfwRx4zGPJmiRAy8Eeuqc2jlPGlaIUZZS4r1ZBIKyPMmqlBtwyFlBaRIoFaNLe4JyevHwDW8Ic8Aez145HCuCp%2B5Qztqdz8KkbyzIVHrSlHvDXK1bvqyv4i8nioxoi%2BsJKW4dIlK7ECxGQu8JgReS%2B%2BnbtydQE9Wpro5TaDQ5WpJdyys4LprnMZlLE9AGwXKRtXSpHL5eZdUgJDB8Vr0XoObtmUMjhZ0Yz2UlGc5CRh5bwSWGpob57ukqtlF8%2BZtftKYU05AIUs%2FbqMqii8869199tkTdpF%2BWiPw6AxPoK032YxBr4ZMauvnJaDHbBWDLY1%2B5ynwHJYuGTV6W1mSAHCyKNGVbtrXS5yPKrEnktn%2Bi2GtVGc5Hq4TwRYOIwdm5kbb8APVkOt4sZsNGB0sZBdnewHO0IMfA3pr8op3kumFyaEN0MMoje1gXxp%2F9TDB9ePdN%2FOPKYvmWtpFqDV2y3pfDAhk50E%2FmGQixcWIhJN6e6nfKeNDiaGIu43MCo%2FeuR2VmMIir074GOqUB7eU2JRmD7d1vZXsWdGUgOVe5p8UNYCtN89bortYjYAxAIY4Hum6HM7N2k%2BJHq6s7ViRh7Bra%2FVDDYKqTPs2kbtp8Jk5EX9JhyAuY%2FIpTtB2FGbmFMUwmlCsQUE0sa8J4v%2Fv1D50%2BAmw1b9OjWo3ZpFkAQxPieWjRA1m9gGnMjV%2F18MS0hOLzcCpD3ttU7IDzjjnbeih5gFV3bq8YZeHQeumhcO6w&X-Amz-Signature=f313af5d9558ca04e79e4b66118fd9de564c8da3a33f159a4cff2d59902cd975&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
