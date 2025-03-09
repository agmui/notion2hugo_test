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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPC2MPNX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCEIlCdx9qIPtgkKACjpV3999%2Bq1MkOboMrsAACjbdK1wIgXtNaJ9D8H1%2BnW3%2BVAOyXEfKcSGkhew%2BsCE%2FgG7G9JO0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM92pqt%2FkpHRXALORircA30ZpeTa2p%2FHY13OdTZyUhxZNXxVhQgugqAVnYWRyoofH8nU4ZgLdYT1Q%2Fv6y1C9%2Fj8c3GVd8s%2FyijhECx%2BgJp8WMcMMTNmc0KiEWgOCVBblaQFaZkNo85Uy7XCRCujZCTmg62V2UBUtcUdKkTg%2Bw5ctuiPBknzJupubdzQn6gAHGbEpi%2BhVvJ5FP%2F41aHohzjhqBMLsYoldBfkwyV9rDGU8U9T0vRcFTUNo6tQLEIkT7SqJT13CdLQyiHMf2TFJ7GWNkXwF7HPBwKlRRCpXirsf72P4g21hu9PcXrEdM731iPYbky9QI2YoZLFHgyk1Ll8zMV%2FnhFFojoADS62u%2FU4o0cREvJGeUMvFVvwv0ztzhdnC46TLys7ScE7VG8RegJLwOuQZGJs3XRxvsFgipgYaFrcr5BsqK82cCIjmOlUr4JJqt%2FILk199GocrsFJsUMB%2FWMTYuk1DpKI%2F%2FRtUGqY6HqT38DA0nBL8oRbAPi0pQWqlLU48M62oNEumuyVmq9CxoB6uoVKtjgwn7i9pLZ7nZg8gfL4muP96R2vsrdL6GGarc%2Bq4%2F8AQhUf9RASiEYB3WR4OWTMzTrcC1p2kkhhTTzcVAsHYc1Oe%2FV5B1MUQDSdlRq7vkoxLUHorMJC4tr4GOqUB9FcRgRqxNG7mYjWxsICCWUb57ZFvI2YWU3cVkjztVV77VjGFAt2CJdl8%2FgGkSvjjIXnYUeqM5srrn2uKCWajoKnuZttt8hZ%2Bb3U20TaOKcnLwCGWxY1kWSwPQLXqn4gec2iQhjvAe3h7wZGhjpdi%2BJL55eQwfQRRHKt%2B6xCmwC%2ByewFzvc7bJyzZD07lnFqvtuxaYv5PPvlhueMfZun5AKM5m6YL&X-Amz-Signature=37382bd9d225988eae498d898e86b9449b5e9f38f56e3983d6fb5af5fff2899b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPC2MPNX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCEIlCdx9qIPtgkKACjpV3999%2Bq1MkOboMrsAACjbdK1wIgXtNaJ9D8H1%2BnW3%2BVAOyXEfKcSGkhew%2BsCE%2FgG7G9JO0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM92pqt%2FkpHRXALORircA30ZpeTa2p%2FHY13OdTZyUhxZNXxVhQgugqAVnYWRyoofH8nU4ZgLdYT1Q%2Fv6y1C9%2Fj8c3GVd8s%2FyijhECx%2BgJp8WMcMMTNmc0KiEWgOCVBblaQFaZkNo85Uy7XCRCujZCTmg62V2UBUtcUdKkTg%2Bw5ctuiPBknzJupubdzQn6gAHGbEpi%2BhVvJ5FP%2F41aHohzjhqBMLsYoldBfkwyV9rDGU8U9T0vRcFTUNo6tQLEIkT7SqJT13CdLQyiHMf2TFJ7GWNkXwF7HPBwKlRRCpXirsf72P4g21hu9PcXrEdM731iPYbky9QI2YoZLFHgyk1Ll8zMV%2FnhFFojoADS62u%2FU4o0cREvJGeUMvFVvwv0ztzhdnC46TLys7ScE7VG8RegJLwOuQZGJs3XRxvsFgipgYaFrcr5BsqK82cCIjmOlUr4JJqt%2FILk199GocrsFJsUMB%2FWMTYuk1DpKI%2F%2FRtUGqY6HqT38DA0nBL8oRbAPi0pQWqlLU48M62oNEumuyVmq9CxoB6uoVKtjgwn7i9pLZ7nZg8gfL4muP96R2vsrdL6GGarc%2Bq4%2F8AQhUf9RASiEYB3WR4OWTMzTrcC1p2kkhhTTzcVAsHYc1Oe%2FV5B1MUQDSdlRq7vkoxLUHorMJC4tr4GOqUB9FcRgRqxNG7mYjWxsICCWUb57ZFvI2YWU3cVkjztVV77VjGFAt2CJdl8%2FgGkSvjjIXnYUeqM5srrn2uKCWajoKnuZttt8hZ%2Bb3U20TaOKcnLwCGWxY1kWSwPQLXqn4gec2iQhjvAe3h7wZGhjpdi%2BJL55eQwfQRRHKt%2B6xCmwC%2ByewFzvc7bJyzZD07lnFqvtuxaYv5PPvlhueMfZun5AKM5m6YL&X-Amz-Signature=dd07def8cc1d903b33c9c6389556d066bd007f13c27e32a5e207057caa6c72fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRODAIMP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCL6LKrTEP6k4wN0QXD6kafJEo1aUg3q7%2FOjRhDhlWjQgIhAJAZY9a82CniSXsOr1BMH22vPRlm3PKEBccyY%2BKcfGnqKv8DCHgQABoMNjM3NDIzMTgzODA1Igwh%2FQ5Q0vV89F5HyzQq3AMxWPqiBcSzyXJfClMjUSDLEnISj5bKpjH3vCM184awybQUSckLu%2BPMtCntSC%2By2tySa500qiWhsUiT6f%2Bvp%2FR1p66lneo7WDwSlzREvMGm1xKtTBu14JVlOfwINRArGRzJp7F3X31t1yfjMEXOSe9W5UN3dbZob%2By%2B%2F1CWzQIbPrm%2FJm8zHGbLdL9vWb1J3rj94kcWudaBTXSn0fqiDNKke%2FHpeIaFJBZSr6z1lm2Lf5oOgjisTGX%2FXHv4VhObovNF7M8WkUH%2Bh%2FEos7yutgqhLZkBghAXlV170NE13AZj5zockvPS8qP1ga1u2pLHUcTLmxYE7L8mweikouS8TCT8JNgdVTpuw941rDT6nhD2IzDARvwHcFXjRCPd%2B%2BDnnYw5E%2FwaN8Yo%2BJOzakqtGciYRmzFb%2BKp0vAuNNk0aItK8GThyDKv79W1IAK38G5gc4NOtWCvN8daYJnjyl3yba1lWxYmBgYl1upXGIysPo58MlX9rdvUTL1f4z8ycF1qZMAmkRQXaqyW07Fe27M%2Bop07zo%2BK3sWkAp6BdMdd5FbZqZ9nZKTB70nPPedgytfC%2F%2B97GQiS%2BeKHP9AFQOPYS29%2B587AQEURyxLj5yebH8yuU%2BNhZ%2FWoKKyKep4acTDr2ba%2BBjqkAdCGDJ6A7e8EGOdwD8QUHoFmWKG5A2RLx0rhQo%2Bu0HyxhW7%2FFxF8CgDMcm5EaxUzwmOZwUxLESAyyMR2n6K6GfLAM7KpnTto1cZdtvYPIRqsXzpg23HkVsaykA8RwrwGsO2vGHDxDqyko7YFSdsBkeQhxPEyE%2FLbLyLBU4gcZyrILANwXosfIrY9WHQYsHAq5gf2kKoXMKBi3gs0iA2bM7MLo1q7&X-Amz-Signature=aafd00c7c657134749c5c93627cac5d2380904066581fe8b38214d2c4c2d0c75&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3WKSRBH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFKmFi%2FoIxyIGCBCUTO0RCRCgOrZKG2TgB3QBhnq1oTNAiEAlh6S9DWRwRoT6HTf88smX36lykUIyYQtN%2FI7AU6aIUEq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJKLXo2X5y3Bf2k2TCrcAwAv7UHKeRCtwOLbnOqVx67R56Yiu9yxmfZJ%2F8VdJhpdWl8OuoacIPCWTUeERAEK7j0TPlnolyGdcktaHUTtOU3lvNhe3LVcq8fZRFOTto4x2P7jW1ZS9N3s2FZOIzbjv3ZY3uQw6KkGfmlr6BLgRdx%2BOTf8l4jyd2nbaorSLt2J0CYGXxWlMi1LJ2aMfQiQeXeq4VU1xnvMX2Dv8rwGBK2WFNVAtPkNOoOT%2FO0Zl%2Bt9NNk2VTIEp68SOdTYUnMOov4uH91CjeN5V%2FXBYE8sFd%2B4Qh9vRBKVRqi%2BfPUXuhCvA%2Fg3DJdk7%2Ff7QNe2gxr97knJBb24UlSJcwst0AXwmrW%2Fiya6WOX8NS9NF031%2FqukTo9F%2BArU2PWcFEejyrvWMIjj4qXleVfxIHCu2%2BpxPe9he8McnBTIXq4UcQcFOdO7Un7nrK5Jz%2FfGXMdgG8mTN9XmvszetqDMBIzPR9uv2YpWEyTnV4Ojkfe4EDFKUcEnrqmHFIAsZiPFDlELWUJ0xjT0E3HY%2BpBs9MaldfodQ6AUcJ8dgj8WKcfmLLRxa7V4482UaocISidb7cW8ZyKQKMDcPzR1t%2BynahWBLeKM0%2F5T48ctlKrBRBBeGcYpj4A1qhw61%2FW5ko3fKaYqMI%2BRtr4GOqUBtzNji7gO442a47C0A0dOeppbd8QB2Tj%2FymhwpDhATXP7Wa17hzKOQjKpKW9SFcPVkynDJiZLlWpNHj%2FLdaFbUPGXQxY0Xz3Fx%2Br4bCDHJHLRw6%2FW8kKdQDCFrxhL6pkfHUbV3G3MXQHw4lBfJmk5kmvzopcHtQCpf7FQPKC7U%2BPX%2F9MBuuiK0b9%2Fqp0eUA29ouuauRm7flH3ZrzrhpqzidvHCqD6&X-Amz-Signature=06cf8b657412e6536ed7394556eeb1065769c80b87a70728b7d1d70d0926bb5e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPC2MPNX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCEIlCdx9qIPtgkKACjpV3999%2Bq1MkOboMrsAACjbdK1wIgXtNaJ9D8H1%2BnW3%2BVAOyXEfKcSGkhew%2BsCE%2FgG7G9JO0q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM92pqt%2FkpHRXALORircA30ZpeTa2p%2FHY13OdTZyUhxZNXxVhQgugqAVnYWRyoofH8nU4ZgLdYT1Q%2Fv6y1C9%2Fj8c3GVd8s%2FyijhECx%2BgJp8WMcMMTNmc0KiEWgOCVBblaQFaZkNo85Uy7XCRCujZCTmg62V2UBUtcUdKkTg%2Bw5ctuiPBknzJupubdzQn6gAHGbEpi%2BhVvJ5FP%2F41aHohzjhqBMLsYoldBfkwyV9rDGU8U9T0vRcFTUNo6tQLEIkT7SqJT13CdLQyiHMf2TFJ7GWNkXwF7HPBwKlRRCpXirsf72P4g21hu9PcXrEdM731iPYbky9QI2YoZLFHgyk1Ll8zMV%2FnhFFojoADS62u%2FU4o0cREvJGeUMvFVvwv0ztzhdnC46TLys7ScE7VG8RegJLwOuQZGJs3XRxvsFgipgYaFrcr5BsqK82cCIjmOlUr4JJqt%2FILk199GocrsFJsUMB%2FWMTYuk1DpKI%2F%2FRtUGqY6HqT38DA0nBL8oRbAPi0pQWqlLU48M62oNEumuyVmq9CxoB6uoVKtjgwn7i9pLZ7nZg8gfL4muP96R2vsrdL6GGarc%2Bq4%2F8AQhUf9RASiEYB3WR4OWTMzTrcC1p2kkhhTTzcVAsHYc1Oe%2FV5B1MUQDSdlRq7vkoxLUHorMJC4tr4GOqUB9FcRgRqxNG7mYjWxsICCWUb57ZFvI2YWU3cVkjztVV77VjGFAt2CJdl8%2FgGkSvjjIXnYUeqM5srrn2uKCWajoKnuZttt8hZ%2Bb3U20TaOKcnLwCGWxY1kWSwPQLXqn4gec2iQhjvAe3h7wZGhjpdi%2BJL55eQwfQRRHKt%2B6xCmwC%2ByewFzvc7bJyzZD07lnFqvtuxaYv5PPvlhueMfZun5AKM5m6YL&X-Amz-Signature=e746ef8cfd83668f22a778f9adbd58ec73572591780d2db49fe0c26a4e593e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
