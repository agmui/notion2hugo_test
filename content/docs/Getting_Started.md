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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNN7JYS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClDCivf8Zflm1uKwafOXIPFECUXcPOGAhDcqnG%2BRKx9AIhAKbm3FWCuZwyjsNVsPX%2F%2Bn%2Fgv7VJXbvzu9b%2FtYYORJz7KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyICEonlwY5teP1zGAq3AMb9Pah9tke9PW8y86jH2XIRcBz6Cmjx0IKKsNQKq90Kg0dwUNQvLqAgnw3nWu1k%2Blz4Dr2rBG3YUU9mZfIKNexpqg538WqHm8QCxqPT3tgq%2FXobhY3Eq3x25%2BSqVqzoKxN2aKiADxw9gAlRyd26qL2r0a9ojByDJl0jrmcmh3E65%2BCOar5YAtjf0NiKw4Q2H0OEwhJaHwmgvnOKEooaA54pl2dmkn04RiVMXyUBe7lVkFcBbuPi9KwX4nN%2FSYzYSX6XqnCE73dtUMvFPGhPmDHG0hj0%2Fn5E%2BOW7VQ8bRENVEaf%2FPYD5a4wox3tctI9y5%2BSZJGBYC5gjuOCIbxLTWhTGgKtYMwFf3S50PVvA13btgEFv7G7NaHe9TUMcH%2Fs0MW4DNFPVxKgFHSPfNPZUwhbv6cSFWZcx%2FWwSp1PVn5S4F98Eh8XFZ5CzPzkdrimBYpGaOyy30zQIliyAslDzDbc5cycRUKhdB%2FkbvCI1%2BZnE4a8YezN8gt1a%2BBUsgaTmP0HbNRw7zZ1Zcas49CtvfPLuHmQ%2F75fw%2F%2BdnP4WVdeZ9q3Bw61oU1fHcKPIPBg%2Bx4%2FycKtzNHY%2FG2RHBFPFXudZxaHHOGg5TsvcgRhfUEWxmKSsATrCoPOiSVgJizCdppXCBjqkAdiK8%2FX2ISXBv7fUARy4wMJU0Eb0ewU%2B1osJ6poAGw2W3kjvJFyuSiRg2RYvNSV8kgF2uvNCBwh3bQE9YoMRCjpX4FR6GozA1GzhH%2Bw3FUKobVCyqOfbag2G8ejp9YpEV9ezprtZ1zEN%2BkCyQWRzP37GYUNKkCSPj%2FV%2FYsIjkP7qDJmIaT6CkP60s9TY23s%2FdW9AaBZe0wc3RdoxrarmvLe%2B4Unw&X-Amz-Signature=13ec85306a9a00b7441d9824afda8d95a0c13f4de17af9c7ce278cae519401aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNN7JYS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClDCivf8Zflm1uKwafOXIPFECUXcPOGAhDcqnG%2BRKx9AIhAKbm3FWCuZwyjsNVsPX%2F%2Bn%2Fgv7VJXbvzu9b%2FtYYORJz7KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyICEonlwY5teP1zGAq3AMb9Pah9tke9PW8y86jH2XIRcBz6Cmjx0IKKsNQKq90Kg0dwUNQvLqAgnw3nWu1k%2Blz4Dr2rBG3YUU9mZfIKNexpqg538WqHm8QCxqPT3tgq%2FXobhY3Eq3x25%2BSqVqzoKxN2aKiADxw9gAlRyd26qL2r0a9ojByDJl0jrmcmh3E65%2BCOar5YAtjf0NiKw4Q2H0OEwhJaHwmgvnOKEooaA54pl2dmkn04RiVMXyUBe7lVkFcBbuPi9KwX4nN%2FSYzYSX6XqnCE73dtUMvFPGhPmDHG0hj0%2Fn5E%2BOW7VQ8bRENVEaf%2FPYD5a4wox3tctI9y5%2BSZJGBYC5gjuOCIbxLTWhTGgKtYMwFf3S50PVvA13btgEFv7G7NaHe9TUMcH%2Fs0MW4DNFPVxKgFHSPfNPZUwhbv6cSFWZcx%2FWwSp1PVn5S4F98Eh8XFZ5CzPzkdrimBYpGaOyy30zQIliyAslDzDbc5cycRUKhdB%2FkbvCI1%2BZnE4a8YezN8gt1a%2BBUsgaTmP0HbNRw7zZ1Zcas49CtvfPLuHmQ%2F75fw%2F%2BdnP4WVdeZ9q3Bw61oU1fHcKPIPBg%2Bx4%2FycKtzNHY%2FG2RHBFPFXudZxaHHOGg5TsvcgRhfUEWxmKSsATrCoPOiSVgJizCdppXCBjqkAdiK8%2FX2ISXBv7fUARy4wMJU0Eb0ewU%2B1osJ6poAGw2W3kjvJFyuSiRg2RYvNSV8kgF2uvNCBwh3bQE9YoMRCjpX4FR6GozA1GzhH%2Bw3FUKobVCyqOfbag2G8ejp9YpEV9ezprtZ1zEN%2BkCyQWRzP37GYUNKkCSPj%2FV%2FYsIjkP7qDJmIaT6CkP60s9TY23s%2FdW9AaBZe0wc3RdoxrarmvLe%2B4Unw&X-Amz-Signature=838e922c77f56f1767b8bba76d490fe02e2f4fc5dd8a0cb60b5c238e461ece86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNN7JYS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClDCivf8Zflm1uKwafOXIPFECUXcPOGAhDcqnG%2BRKx9AIhAKbm3FWCuZwyjsNVsPX%2F%2Bn%2Fgv7VJXbvzu9b%2FtYYORJz7KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyICEonlwY5teP1zGAq3AMb9Pah9tke9PW8y86jH2XIRcBz6Cmjx0IKKsNQKq90Kg0dwUNQvLqAgnw3nWu1k%2Blz4Dr2rBG3YUU9mZfIKNexpqg538WqHm8QCxqPT3tgq%2FXobhY3Eq3x25%2BSqVqzoKxN2aKiADxw9gAlRyd26qL2r0a9ojByDJl0jrmcmh3E65%2BCOar5YAtjf0NiKw4Q2H0OEwhJaHwmgvnOKEooaA54pl2dmkn04RiVMXyUBe7lVkFcBbuPi9KwX4nN%2FSYzYSX6XqnCE73dtUMvFPGhPmDHG0hj0%2Fn5E%2BOW7VQ8bRENVEaf%2FPYD5a4wox3tctI9y5%2BSZJGBYC5gjuOCIbxLTWhTGgKtYMwFf3S50PVvA13btgEFv7G7NaHe9TUMcH%2Fs0MW4DNFPVxKgFHSPfNPZUwhbv6cSFWZcx%2FWwSp1PVn5S4F98Eh8XFZ5CzPzkdrimBYpGaOyy30zQIliyAslDzDbc5cycRUKhdB%2FkbvCI1%2BZnE4a8YezN8gt1a%2BBUsgaTmP0HbNRw7zZ1Zcas49CtvfPLuHmQ%2F75fw%2F%2BdnP4WVdeZ9q3Bw61oU1fHcKPIPBg%2Bx4%2FycKtzNHY%2FG2RHBFPFXudZxaHHOGg5TsvcgRhfUEWxmKSsATrCoPOiSVgJizCdppXCBjqkAdiK8%2FX2ISXBv7fUARy4wMJU0Eb0ewU%2B1osJ6poAGw2W3kjvJFyuSiRg2RYvNSV8kgF2uvNCBwh3bQE9YoMRCjpX4FR6GozA1GzhH%2Bw3FUKobVCyqOfbag2G8ejp9YpEV9ezprtZ1zEN%2BkCyQWRzP37GYUNKkCSPj%2FV%2FYsIjkP7qDJmIaT6CkP60s9TY23s%2FdW9AaBZe0wc3RdoxrarmvLe%2B4Unw&X-Amz-Signature=84063a27ccf6c6639dbda812260addbf5598e1d4ec938a2e983ba72a17b976aa&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66SDMSP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFdTjTfUTsBbhDMNSm3wnz%2F%2B97KUxAMNfJVi1qwY%2B1jQIhAMND9bqLk2Si1aa6Wyt4p4woyCCtk0JzuaYZCEw%2B0gRRKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx78LB3fJfrPt9oKCcq3AOn84TH3tUY1VOWvvDGKrct%2BKfAnVJ0UaBMbblxDc11uhDB0LqoxBUy1muIeiOFfJb9HrVcarX9i22IBF3RVxKwZAvWGyi2VEZoGAZtOeqjbLqEclf2B2%2FZhg%2F5QIytSb7gGiT%2Bha0RSG8B5RV2W9LjDEJ57cRO3lR%2BP60emSdI6hHaWev47ohFeB%2B1liMo%2Fqi4%2B%2FuOm3yrWBnK7df8q8I3sW5qozy6E5MsGFOBwS8GVX7bqFZK%2FiXnEKA8e4Gypnd2FOUXD3t39jarJFQbtoZlOA3uIe6u39OojaDcymRTvgCYjDAwbg8XND1Wn5fnf8hh6q4HiEPREpKwHsanC%2FPcDoWVcR84mV%2FuKc0DAyFaC03y1UWRiivgTXeBTaSYSB6P7QCX7O1%2FUty8Gzclyob8CUIOLNArFFYPNdk4%2BpZ0MJNYRGTooKEBchl%2B24vbtvmRCMo%2F5UOOVmDwS%2F1Q033hoMZ4cuWXJ7v3N2Gvigp7NqHHXx01Pr1F%2BU3Ifo%2F7QFK%2FtIuGqFeKg%2BU7lqaL1tjOgsg2P7gXFGEKrYTTv1RgR73E0mSYiunCSAPg9qnOIIfR8e32J9jLVb%2BANatcSp7aW%2FKsyebTGzhxYM9ycCP1V7OR5z18LiqAbfZ5SDCv1pXCBjqkAZyZi1iGRGuPYt19goY52EgCgxXK557e%2FVMgBlj%2F%2F5o6tp0BQRgMu3TBtpP7i5LkERIAZLIrl2XQ9vEd06IaHpTNdUbuwwuEgSYZAgATCtYjIz7N4qmEefQqu%2BL%2FsyoGQR7dlgOGSMwtnwnBnJhFHRQu4T6yWsPLm2ATslutpr7fChLJYKErMPAoLo3YvfcyZII%2FRj0hNts5I3ie9juNO8euw8sY&X-Amz-Signature=5e77e0dfe42f6a7f05bf2ddebc5fc08ff33ea13ed3ac234836b0ccab5253aa64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVSSWKQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaqFNt1QShx93WUtDWAWU80%2BeJ8HG8coHyKf22e%2BWYVAiEA0kHXCg6dIKEaSRrBnLO8JjkDBPjwUeCoiIxyFmme5bYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGMr6hIqJSn0qmgTircA%2By3RN5EyqIQn2wtuG%2FC2ZwQXG2e1MJO7kqF0oOA9prNFQUfOLaPCvvr01X%2B6koclDh0wP6xQGgKY7YCfx5rJy6yeqH%2Buv3FP7kBKLIzJLk9jFa7Kkh0ycFP0RFXnm1FOSQ3pr8NUCTmEzFCwlNchFwIwk5Hl9i5DPrT4YAyN80Z5C9UVN52T7IqptlxDAhAxomB18MSSY8qIQBpFLxF4OSW2R1S5782qvDdnUcOFgQ5IOA9YIqxUPfDjvnJ4Tng6GCFRXKD1MYBDfz4HUAb4FabWxz1N98dp9c1Jtb4LxMuH4TDSsMDcEAR4T0Ft8mephedjWopaD%2FXVQaEq%2BGKrrUHyqHqK4iVprc0SP%2FueI4mLfNC%2FY4GZT1jFI05O0v%2FdBj9WeW4E3ILSFQ0BUVcokK5mtshwui2VnThwqQVt%2FUjQXdcw8jN2oLULZUfPaY6a5K8w7xc%2Fxkg3hBX0uE5hRf3KooR428ntRzJ1D59vXKmkBW2UXO0im%2BrZaoOMNDKgKFqIToygVjdu%2BE%2FpxaCHpQ55QlENcwjy3JPpCy8wZlafXtt5dUske%2B4x3z%2BwTIy58ThZSPQ%2FI%2FOV6HWDrY%2BlZKYOIQLOKSwe81A%2BiTBGpzdwRZ8rHm4pt8DYrA%2BMNymlcIGOqUBBd3%2FIoHxGG85EGcTSS%2FtrFVWOSDQXRENSJ%2Bd22oE8hCXFyQeQ4ypCGjScOExQEcDZtW2lm7pkyN9bxJwAyRAsGpD9zCSV8kDyMsbpp9FotLls8H1GBhnhu8Ld%2Fxp0LDIG2ZfZwOYtwjaU3c33vYj5ppr1thevUPYghOKj%2F1G5dbcwm2oJu%2BnoIQaUAIyHNT6D99c8YVolaaufrDq3aNkf0wGcP8h&X-Amz-Signature=35211f76af26a99be9a1f568834f4c4e8d278540845c0a697dc6a6ebbc0ee209&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDNN7JYS%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClDCivf8Zflm1uKwafOXIPFECUXcPOGAhDcqnG%2BRKx9AIhAKbm3FWCuZwyjsNVsPX%2F%2Bn%2Fgv7VJXbvzu9b%2FtYYORJz7KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyICEonlwY5teP1zGAq3AMb9Pah9tke9PW8y86jH2XIRcBz6Cmjx0IKKsNQKq90Kg0dwUNQvLqAgnw3nWu1k%2Blz4Dr2rBG3YUU9mZfIKNexpqg538WqHm8QCxqPT3tgq%2FXobhY3Eq3x25%2BSqVqzoKxN2aKiADxw9gAlRyd26qL2r0a9ojByDJl0jrmcmh3E65%2BCOar5YAtjf0NiKw4Q2H0OEwhJaHwmgvnOKEooaA54pl2dmkn04RiVMXyUBe7lVkFcBbuPi9KwX4nN%2FSYzYSX6XqnCE73dtUMvFPGhPmDHG0hj0%2Fn5E%2BOW7VQ8bRENVEaf%2FPYD5a4wox3tctI9y5%2BSZJGBYC5gjuOCIbxLTWhTGgKtYMwFf3S50PVvA13btgEFv7G7NaHe9TUMcH%2Fs0MW4DNFPVxKgFHSPfNPZUwhbv6cSFWZcx%2FWwSp1PVn5S4F98Eh8XFZ5CzPzkdrimBYpGaOyy30zQIliyAslDzDbc5cycRUKhdB%2FkbvCI1%2BZnE4a8YezN8gt1a%2BBUsgaTmP0HbNRw7zZ1Zcas49CtvfPLuHmQ%2F75fw%2F%2BdnP4WVdeZ9q3Bw61oU1fHcKPIPBg%2Bx4%2FycKtzNHY%2FG2RHBFPFXudZxaHHOGg5TsvcgRhfUEWxmKSsATrCoPOiSVgJizCdppXCBjqkAdiK8%2FX2ISXBv7fUARy4wMJU0Eb0ewU%2B1osJ6poAGw2W3kjvJFyuSiRg2RYvNSV8kgF2uvNCBwh3bQE9YoMRCjpX4FR6GozA1GzhH%2Bw3FUKobVCyqOfbag2G8ejp9YpEV9ezprtZ1zEN%2BkCyQWRzP37GYUNKkCSPj%2FV%2FYsIjkP7qDJmIaT6CkP60s9TY23s%2FdW9AaBZe0wc3RdoxrarmvLe%2B4Unw&X-Amz-Signature=0e2a7d329b26ca3c907f4970b067381b7caeb90e44968de3ba7d5e70e224a958&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
