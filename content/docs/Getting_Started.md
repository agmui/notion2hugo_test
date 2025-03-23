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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663OBQ5HO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD2HmCAUm4hiewgGIVG7A885VRIlv6fElSRaEJ4Co7w6gIgYS7N2CZr%2BkoxGggkTOK7dBZ8gbUZNBLVacZujeY6vokqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvVrRbqb%2FpKVuinBircAxuz6NJzbzlmvcePaqdB8132WhpZp%2BkBHnvDbuQdwAAWrgPxu%2Bki%2BhsimD%2FZEAHURO2g2FrFWYviL0twaJ42fbTrc6k9sKjHLfK3K7tdZx5hIPsa%2BFJtNdMt8J1xMBWg2eWnmtsyLzhyeXLGGxvYDGBN5VVGZLyeNh0cQ%2BKEMGzCgaGnFE2yFAqNlng0e9IkS9XkrIcPHhnq5J7cdsDr2uSBjSA6zmRBr6aEGfznlPczgO%2BLgejiMbUoRjtomvho0pxj8jyRKtiauHwJbV9asg3sfcT%2FBxFK9PMLwGcti0s9urt3m1Jim0gNsDhDkMk%2BCL3Vrh%2B1Mbt4m9CQrEOswEUz2WQrEtJts%2BFA4ZbxyXJ6RpOulrTQzc7sE1USzHeydyUU6qzrCoJQwha17TnwOub5uX1bVIJ0kJbyNgcybFZUZqh8WmOhU%2F3u%2FxGYh8dmFbTmOD0%2FxnZhcSaX2EOkQXSOQIghhQrtpBoci1dS7gObEx%2FOdMWNQ7YHBmw4VCIUjoWsjzURZIGyC64KyOcrdlVaBFUItl0hJen6uOJUpryvepnQvud5WkshMM2%2FxhybcCyFa%2FEILDfWYr1eNPaBfL4OPvtyYd3a3QYTzyxymPeopsKLvbkipSNpsMTyMK3j%2Fb4GOqUBEo8lmidiTFmxwzryCdy6ueeFQ57nkWn6hm4wo%2Bjkqj4ADCObRp6AfCAuHZ01lwIFiqPChkQ01K7tLXWf3JO9t3GeD6IQLDpHqyobLk1Kh5wLJ7Tw6Qe0ttPlu%2FriHuN3syRyOp%2BO7ybGEoqkJ%2B8ejMdiEqTxrR1FdezBhI5a2IRCpMnEr2sX5GDGJsGdsZNWNvGQbLNYBqCg1ORCVoun62ZMGD7P&X-Amz-Signature=ff3447f0d2d68e66b2080b4d9ff6421aa31d2888319bc5dc68bebcc0460ab524&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663OBQ5HO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD2HmCAUm4hiewgGIVG7A885VRIlv6fElSRaEJ4Co7w6gIgYS7N2CZr%2BkoxGggkTOK7dBZ8gbUZNBLVacZujeY6vokqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvVrRbqb%2FpKVuinBircAxuz6NJzbzlmvcePaqdB8132WhpZp%2BkBHnvDbuQdwAAWrgPxu%2Bki%2BhsimD%2FZEAHURO2g2FrFWYviL0twaJ42fbTrc6k9sKjHLfK3K7tdZx5hIPsa%2BFJtNdMt8J1xMBWg2eWnmtsyLzhyeXLGGxvYDGBN5VVGZLyeNh0cQ%2BKEMGzCgaGnFE2yFAqNlng0e9IkS9XkrIcPHhnq5J7cdsDr2uSBjSA6zmRBr6aEGfznlPczgO%2BLgejiMbUoRjtomvho0pxj8jyRKtiauHwJbV9asg3sfcT%2FBxFK9PMLwGcti0s9urt3m1Jim0gNsDhDkMk%2BCL3Vrh%2B1Mbt4m9CQrEOswEUz2WQrEtJts%2BFA4ZbxyXJ6RpOulrTQzc7sE1USzHeydyUU6qzrCoJQwha17TnwOub5uX1bVIJ0kJbyNgcybFZUZqh8WmOhU%2F3u%2FxGYh8dmFbTmOD0%2FxnZhcSaX2EOkQXSOQIghhQrtpBoci1dS7gObEx%2FOdMWNQ7YHBmw4VCIUjoWsjzURZIGyC64KyOcrdlVaBFUItl0hJen6uOJUpryvepnQvud5WkshMM2%2FxhybcCyFa%2FEILDfWYr1eNPaBfL4OPvtyYd3a3QYTzyxymPeopsKLvbkipSNpsMTyMK3j%2Fb4GOqUBEo8lmidiTFmxwzryCdy6ueeFQ57nkWn6hm4wo%2Bjkqj4ADCObRp6AfCAuHZ01lwIFiqPChkQ01K7tLXWf3JO9t3GeD6IQLDpHqyobLk1Kh5wLJ7Tw6Qe0ttPlu%2FriHuN3syRyOp%2BO7ybGEoqkJ%2B8ejMdiEqTxrR1FdezBhI5a2IRCpMnEr2sX5GDGJsGdsZNWNvGQbLNYBqCg1ORCVoun62ZMGD7P&X-Amz-Signature=c88d8d3552a0310de4925a47281dbb87665aec5971f57fe1e1b6a665775ea7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CMRH5AG%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDttRKK10%2BAKy59X3GFstoMtN8g9qrc44t9%2FCWOPZvTdQIgSofjQqO4nKDJ%2FAq2vD5VMOkXRxd46jVtpR%2BF5xlXC7kqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWYSb6Hi0S7Nk6etSrcAzBhjRZQTL1tJsoA%2FCPGpCot3wnt7GWKG%2F5rYxK%2BCrcGbq%2BIr9TKQI2MItCJpsjk1y%2FtW%2BvEL3ew%2FEDkxuUNhcOT9eUcDED5DKXXhYeuZ08LqxPubbQMczjreHZLAb1iEsjKX2W4znbizf9rh9ENnozJ9RU6mSjlUIe9chUtbmmWTb0QASgeknPdXqsNjJDnWqrHzaAWNKO3DwJgjgwcV8AbwD3QYKe02zVwSbja%2FPaQ1JaYy6VGxPL%2BLCr6nlpClP10CQ7pHkOOXGxOC5WPu%2B8qQHbXo%2Bet0ncXxgOtnW9wev5PDl2E3C9Hxd5ILwZbuQMvgIh3U%2F9TwgpH9688TYVM0SlNtvyXwGoc2WdP96DfpaJiMWk3FekAjBPJedOrDCLNBjk0i2iHU8FhzdO3sVlYM5A2v7g%2B4MwZg6CUt6HQdxQvy3AYEVQlFA2La55RYp%2Ft5j%2FybpcIlvy8kKEREXelqAcGuqhSKpUt0nf4WKl2siNF2R6wFft0sdIrTJ0xgLdFzNV9p%2BbdNfXx%2Ffl4ShHgZUI52X%2BHNKjI8dIBrWcYA04i3dYbT5xAdowh4zQvV2DT36slP9bErUifGPF9zV9BZOhSYGgy9iVRI8NSlO%2FAoLaaprNQhhS0m9V9MOji%2Fb4GOqUBrOXpEHXW86ZjWLivpBNVwN3LpfFKwETX6RHeDRfVNVb6u3WqoAoFfAyqGbrihXbuYA%2BpbmMisGcJiniYVITqMhacexcnJOWRaIHso6jEfJkm3VxtNfzrNa35LAvHtJKnqlh22hr3A9VJBsWq9m0kLT5UnKlKwozHyysrwWkTyHpnyNbyDOtFVf%2BEeWB5Q9i1C26pnMDyPUH0P6g8isLlS7YIBtKK&X-Amz-Signature=1ffd31538af06927efbd5692a7eb4c5020753e23921396f37d1d2462599cdbb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDQ6EBP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDHsL0wTFAuAbnSAB7ZQtAu0Jf4SvwVGlU%2BsnDibksPpgIhAMl2pBicXM63r6SU8bPGeOBbOziB4rGPejYL7SpPaI5iKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFg4VCZZ8A%2BL10lhYq3APCzifgUu9bAdc3vhkZfds%2FXIgy%2F0GVXMFWZ36KBM%2FHEisX62VxrsP5s0qO9MTwJylekoxU3E00Kzhh5e1DH%2BLXpKhK5X95VOPkRUzNsncw0KWVECzDtPyRLFJyfjiNkwZRymyL2pSDZRrRWCjRBvJRgDrl3UzM2cUxOruNIEbTzy4JbjurZx7fZiIzlc3HrMKnHAAo%2BDihaR7iXZgHhms2j34nzdNVVfbk6l706INFIx1qKSWimHycoRGf692E%2B%2FumPBWirX3umva188bGJUG9TLykbFnMDITyFxeZbP8GC55RpjGxQ462%2BZj7ZJkA1HN98koVd5DxZjQ5idFDOKtWKTUfjS301wr9sW30XA3%2BJTBfL70ILdkz8WYsAWlCnvSpS46mz5KEuqo46dWswQr8C5EEIMFDtAN932nh5QAt3E%2FjC9eoPDnAfh2CBhBqjQdS2vGDOLPWWzozrEXPNisFVfG%2BkRSXUrmaaqbrpY%2FKqUpu2QGe7%2F1KYo1jtR8EJIfkiJ2ztRyfBxQ3Zoq%2BaLEwKjVgrCakQ0fUeasrU%2BEfLyU3c%2FYpSIAv1XIe6nh%2F1jJIwr2A5piScivaeAskJ46enHEKYMyGlHA%2FngWe1ZemsOxKm55U4F90%2BcDBxDDC4%2F2%2BBjqkAbCIFeWqsOcwJ2Dw5kvXIbwF8jnkHp0u1fpKhg2Zl%2FBjYyd3mgP7D2WQBcLhpJpDc4lq16TYJmVeTyZrb7ZA7rwu0hETRrysvweQhHIichla3y6R%2F4Herw46WnDxqmRWNM9cuVp7SfZZ8Y1tUS9Var2wgZWw%2FzGTGf5E8%2FGbpm6HT2O16AwUdzbbazgO0yukib23mH5NQCYZfUrdVTC7ZNDWn7Pd&X-Amz-Signature=d4fad93f22de30d453fe73b16f96a2d33d59f5b801775bea437e5390a04df2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663OBQ5HO%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQD2HmCAUm4hiewgGIVG7A885VRIlv6fElSRaEJ4Co7w6gIgYS7N2CZr%2BkoxGggkTOK7dBZ8gbUZNBLVacZujeY6vokqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvVrRbqb%2FpKVuinBircAxuz6NJzbzlmvcePaqdB8132WhpZp%2BkBHnvDbuQdwAAWrgPxu%2Bki%2BhsimD%2FZEAHURO2g2FrFWYviL0twaJ42fbTrc6k9sKjHLfK3K7tdZx5hIPsa%2BFJtNdMt8J1xMBWg2eWnmtsyLzhyeXLGGxvYDGBN5VVGZLyeNh0cQ%2BKEMGzCgaGnFE2yFAqNlng0e9IkS9XkrIcPHhnq5J7cdsDr2uSBjSA6zmRBr6aEGfznlPczgO%2BLgejiMbUoRjtomvho0pxj8jyRKtiauHwJbV9asg3sfcT%2FBxFK9PMLwGcti0s9urt3m1Jim0gNsDhDkMk%2BCL3Vrh%2B1Mbt4m9CQrEOswEUz2WQrEtJts%2BFA4ZbxyXJ6RpOulrTQzc7sE1USzHeydyUU6qzrCoJQwha17TnwOub5uX1bVIJ0kJbyNgcybFZUZqh8WmOhU%2F3u%2FxGYh8dmFbTmOD0%2FxnZhcSaX2EOkQXSOQIghhQrtpBoci1dS7gObEx%2FOdMWNQ7YHBmw4VCIUjoWsjzURZIGyC64KyOcrdlVaBFUItl0hJen6uOJUpryvepnQvud5WkshMM2%2FxhybcCyFa%2FEILDfWYr1eNPaBfL4OPvtyYd3a3QYTzyxymPeopsKLvbkipSNpsMTyMK3j%2Fb4GOqUBEo8lmidiTFmxwzryCdy6ueeFQ57nkWn6hm4wo%2Bjkqj4ADCObRp6AfCAuHZ01lwIFiqPChkQ01K7tLXWf3JO9t3GeD6IQLDpHqyobLk1Kh5wLJ7Tw6Qe0ttPlu%2FriHuN3syRyOp%2BO7ybGEoqkJ%2B8ejMdiEqTxrR1FdezBhI5a2IRCpMnEr2sX5GDGJsGdsZNWNvGQbLNYBqCg1ORCVoun62ZMGD7P&X-Amz-Signature=e1a950e936311b41ef8dc4605b81af7d5357eee62052f6133c015e644d815028&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
