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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYDVWRX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDpK246WoNYgxEyw%2F%2BwjSs%2FR5g2VhtbC%2FRJese%2Fd4vWBAIgaKWgl6Np8C4Jcq7ivBC90n5zGZ3wWffHqfuijxnXhkEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDO2TeWh9wgu2d9uxPyrcA67Is%2FCfd4Of%2FMeoNnD6eSNLtG3ZOXScxrPGUmuNJFD6ZaUaUqd30ZiaTEZ1W7f8GZssaoEWOicG4jkDIMldZGlzGeeU7N5CKypo9IVpEll3R0%2FhZ08xHyySudODJvl2NDtLCkYm97btMowwYyhaoFELQ3d85mQ0AEmYly36ddBMuWgwFbtX%2BGbo6OAKYzNjwMHNTqcFYr0anen9PpYu0Y64X8W9j6wHLXJrekyGlrSQcpezX7u5A0CyfCO2B3IpUXf7%2FxEUMTKVCrIQ0YCWUsXBhcNGRZm2qC%2B81ZCaESEFgoPV2S4eJGQ55SRedcfy%2B1R%2BAY%2FMzKpWhlL65TG4JRzBaqvNdYi6C6rK%2BvGkXhhYwLlurF6676EZWUoksb%2FW9TBcg%2F4Et59m0a2B%2B9KaMKrSQUtzuw2gO53up%2FMDEmuzKYAMu3DfMKUNaeIcr%2FosMODztXXdhmEoIem3QQF4x0lJbPZBd7mQvq8ckNamxBswxe6uaM1h3nKU7r9t18SWLpDybgvWP12XonHnC1NL3NOonriaHgv5fYF2xyOswuCj9lNPl0TnDhOOVGKM1shSvQduZ6Wnajqzk%2FmiQpQbXnwkgAi8Hd5wAppDzpFQxDABgH1GEqfTNPNsnuq2MJ6U%2F70GOqUBIFxJY54dDdqu8XNdi8PScrA4psvgNGM4CA0ca1Nk3vnim7UnUlQTOawnvAq7UPsjQXmO4PwQUE4zDVOK7ygkiyZXvVgPGfaJxBzv133ozH7OOSv2m%2Fp7L5pPKjqLH%2FiElalflkTbhKt1VXgXeSHCrfh4ckX94PyVDM0w%2B%2FHaYl%2FaKNsMSYOg4Fveo63NrE7%2BFzGpEtrSNchNedx%2BtjV8zTtAauET&X-Amz-Signature=b905694a2e1101f9f14549a2ee345ed4bb281846096cda27dfd569ede2d76f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYDVWRX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDpK246WoNYgxEyw%2F%2BwjSs%2FR5g2VhtbC%2FRJese%2Fd4vWBAIgaKWgl6Np8C4Jcq7ivBC90n5zGZ3wWffHqfuijxnXhkEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDO2TeWh9wgu2d9uxPyrcA67Is%2FCfd4Of%2FMeoNnD6eSNLtG3ZOXScxrPGUmuNJFD6ZaUaUqd30ZiaTEZ1W7f8GZssaoEWOicG4jkDIMldZGlzGeeU7N5CKypo9IVpEll3R0%2FhZ08xHyySudODJvl2NDtLCkYm97btMowwYyhaoFELQ3d85mQ0AEmYly36ddBMuWgwFbtX%2BGbo6OAKYzNjwMHNTqcFYr0anen9PpYu0Y64X8W9j6wHLXJrekyGlrSQcpezX7u5A0CyfCO2B3IpUXf7%2FxEUMTKVCrIQ0YCWUsXBhcNGRZm2qC%2B81ZCaESEFgoPV2S4eJGQ55SRedcfy%2B1R%2BAY%2FMzKpWhlL65TG4JRzBaqvNdYi6C6rK%2BvGkXhhYwLlurF6676EZWUoksb%2FW9TBcg%2F4Et59m0a2B%2B9KaMKrSQUtzuw2gO53up%2FMDEmuzKYAMu3DfMKUNaeIcr%2FosMODztXXdhmEoIem3QQF4x0lJbPZBd7mQvq8ckNamxBswxe6uaM1h3nKU7r9t18SWLpDybgvWP12XonHnC1NL3NOonriaHgv5fYF2xyOswuCj9lNPl0TnDhOOVGKM1shSvQduZ6Wnajqzk%2FmiQpQbXnwkgAi8Hd5wAppDzpFQxDABgH1GEqfTNPNsnuq2MJ6U%2F70GOqUBIFxJY54dDdqu8XNdi8PScrA4psvgNGM4CA0ca1Nk3vnim7UnUlQTOawnvAq7UPsjQXmO4PwQUE4zDVOK7ygkiyZXvVgPGfaJxBzv133ozH7OOSv2m%2Fp7L5pPKjqLH%2FiElalflkTbhKt1VXgXeSHCrfh4ckX94PyVDM0w%2B%2FHaYl%2FaKNsMSYOg4Fveo63NrE7%2BFzGpEtrSNchNedx%2BtjV8zTtAauET&X-Amz-Signature=2e9174881e8ab8c1711f1baed8642193ccaabcff0cfe8c7e3bd9e153b77ca407&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A2RLANA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCnEHkHWWLr9DFhvSJiML8Jufou76Ro4iRxyPCAanRhzgIhAK358feIVjgsKSSa5nfIvseMmemxNbja9d%2Fm0XpjBCIoKv8DCGsQABoMNjM3NDIzMTgzODA1IgwiADjs0j7JB16l3OEq3AO7XBVIu%2Fcxg6ZnXGPsIWiLx8IUztsw0x0uHkRgi00hi00uyQAOgj4wCcw8JcVGKlArPoP5cGLzkDIamm4%2BzYGmbDlaG2wfB0c0ZqG%2FjiimqnU9YXWysRlXDSi%2Fv8WM5gljveq5r5ZdK8CBYXB29Hg7xqjmfDxYrq550RPFUWM08sGr0%2BR%2BbfSLXb%2FGutWhk415c8t5XGaeELmuA1FxGVR%2BZY5DLX32EohyfTNvpocpo1xoXRXNOL1vgDBuSfBiZtcp1ZfBUNT3DvZQrugLYsS%2BYK2FaNn%2Fv7fyuWAKY00kTDHSLY%2BpTdwaahmwftOJ3POhEVHw8ofpEwZ2imNYQWcpb12fzY3Zu0HpiX2cnDhtN5XqxVAlgorBtlnRaZWd4QutyLbJkJ95WpTM9Of%2FaXPFl182qk1akmQdm2M2yIgUYhMb0WEP0706PiG5vNGrsvY93Ugv0nI%2FwkRnL6ixPf2Kbv7X%2BbR7Qg7t2FXDd%2BTyy2v%2B2X5gO4li%2BAUebTsQQc1Dixx2IzTcI9AApxbdqU2kEJYY05uORD1YgIwwbLXu%2F1yy2yxH6v3jWULVdEup1kisiHHEziNWiiNGf3mZLDlpf2nUuuVhC8EOwxUFKp%2BPkDzekSRj8opBwHMPTzCrlP%2B9BjqkAa4Tx%2BIgoqY2WJCIlQ9etd2uBQo5s6mcMAz26yzCkEsdYchCjL5Jiy2YinOKPNfv4GAHpXj7fFzp%2Fk2RmfydIRxBdt%2BQoUoMZ4oP9l8Paxe7R95obnaqgKLvp24M82yVUruQCqFEUq2DYnwJRmGOPfJvfbE%2BWMwiHYeB9mPx3V%2BwN3oUJ3FvWt9NF%2FUgCtLgiEWjYkEJtoLgT0S5tfMk6KnHzKrW&X-Amz-Signature=dde014ccbbaa896b95ec3b7bf8d0db8c9b34eccd6be8af854134d2fec7602dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIPOW3V%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD1V4D2ITRfbnxpwRqIn7roWuxWMAnxVrGNcFoyXzlBMAIgcCbEVlnAIt5kqEAgfogCNrfnb47TRAWitv58F8Qj3z0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGk3FoGWTBOpT5XaCSrcA%2BFMN7UKoF%2BLneX47pHSGe2CuqVrX3ARiIGUbA4gmeH6YejydayARb4AKgQhBbXmw8CmB8XuRZZoW36DHoF4mNFTX9Cerlgd%2BqrhQW01m94JGyo8LrN%2B5w%2F4CjxfDSWZHP0L2CaLUWQBCCNXfqUe%2B0pDmC%2FWb4cBodgzHlN6Gbx3aNMx%2F%2FJ%2F9BtJuuVs%2BhKvTZ6uBWc3YxOCTV4h%2BTKV5A4ScXNp9607ppHoGJ4nvnQXE5DDrWUI3FJajQNJtTA3xwF15ERp1IgIhT54FICZnlyskeOSDJN0wFe310m0RP%2FzhFTZeXm2ixTwZVsyMB9DuVzZ3E8bRyfz8%2FO2ho8vwbiK1Cqqy590JybqU%2BIKrR5PBGiM4ZgVAwLkzHDQcaqyARA6zdgu0zqab6XYb5u0nGvY%2FI8R0iNuOlQHrbVylXMOfa7AaCHAI7ElBHl7WjfZoBHKsaVKKNfGeDIxuqF8qVeqghL5Ya1DggICL0XZnJEYNadDJ5RFCi7JPro1zjRX%2B4O73hZw%2BmhnPQ0Ko2CKN6q%2BGPrpjiYNwBvzk1qqTQ7OphTUSVB4AFK6Ddn5a7EPyXU7inDDnR7z%2B%2BHNDkE3M9cwUcBe3AcNWfAJQcTa0XaeiKyrI1MNX7l7jX3QMKyU%2F70GOqUBXZK%2BQnlU8l6ZJgqX1LDl1Nnpklzp4gVQE9R9807ZrYtRW0fpz%2Bb5DIR5yJYP3%2FvS8v%2FUyhIA7nmwrXJX9RCltNpwaljF4g63pxvlqYtG58r7scwff5wLWqczFGHx5ZuPJCAulJEqjIl7yFcp3IfoAuJMyEIbm0%2FpYKNGboFXD1D8rNG29kaHvrzPd5iItOiUwCHOEuUTAOfY3MSasmGScn8MwMaB&X-Amz-Signature=46937c5b4426530627d31b6b2757638b80d625dae712ebaed298630b97fd7fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHYDVWRX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDpK246WoNYgxEyw%2F%2BwjSs%2FR5g2VhtbC%2FRJese%2Fd4vWBAIgaKWgl6Np8C4Jcq7ivBC90n5zGZ3wWffHqfuijxnXhkEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDO2TeWh9wgu2d9uxPyrcA67Is%2FCfd4Of%2FMeoNnD6eSNLtG3ZOXScxrPGUmuNJFD6ZaUaUqd30ZiaTEZ1W7f8GZssaoEWOicG4jkDIMldZGlzGeeU7N5CKypo9IVpEll3R0%2FhZ08xHyySudODJvl2NDtLCkYm97btMowwYyhaoFELQ3d85mQ0AEmYly36ddBMuWgwFbtX%2BGbo6OAKYzNjwMHNTqcFYr0anen9PpYu0Y64X8W9j6wHLXJrekyGlrSQcpezX7u5A0CyfCO2B3IpUXf7%2FxEUMTKVCrIQ0YCWUsXBhcNGRZm2qC%2B81ZCaESEFgoPV2S4eJGQ55SRedcfy%2B1R%2BAY%2FMzKpWhlL65TG4JRzBaqvNdYi6C6rK%2BvGkXhhYwLlurF6676EZWUoksb%2FW9TBcg%2F4Et59m0a2B%2B9KaMKrSQUtzuw2gO53up%2FMDEmuzKYAMu3DfMKUNaeIcr%2FosMODztXXdhmEoIem3QQF4x0lJbPZBd7mQvq8ckNamxBswxe6uaM1h3nKU7r9t18SWLpDybgvWP12XonHnC1NL3NOonriaHgv5fYF2xyOswuCj9lNPl0TnDhOOVGKM1shSvQduZ6Wnajqzk%2FmiQpQbXnwkgAi8Hd5wAppDzpFQxDABgH1GEqfTNPNsnuq2MJ6U%2F70GOqUBIFxJY54dDdqu8XNdi8PScrA4psvgNGM4CA0ca1Nk3vnim7UnUlQTOawnvAq7UPsjQXmO4PwQUE4zDVOK7ygkiyZXvVgPGfaJxBzv133ozH7OOSv2m%2Fp7L5pPKjqLH%2FiElalflkTbhKt1VXgXeSHCrfh4ckX94PyVDM0w%2B%2FHaYl%2FaKNsMSYOg4Fveo63NrE7%2BFzGpEtrSNchNedx%2BtjV8zTtAauET&X-Amz-Signature=41a227456a97ea1a2758e4a1a768828c947aba2e7fb2a74080fad6c982fa7b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
