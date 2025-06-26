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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJNENAN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2FVfAnX0phveCh32ZUN%2BjDioM2c9a98rPX8LOWvzfvVgIhAIDg3scDGIQy%2FyLkIRn1W%2F9%2BWFstQR8AX1%2BJm%2F9p96rOKv8DCF8QABoMNjM3NDIzMTgzODA1Igx%2FBp4%2FAhLhGynguVcq3AOKecuKY%2FlozQmnCAW32eY4%2FpOnGFajdp%2F%2BBLzhW6MZJX7TE6qi1SQ%2Bss5k52TBiv5XTN%2BrtnZA1fuIbKyuqZGPPucNE0vFw1GrF9ieVFJl69GKHi9lGsn7QU4iaozDj8D5ckxRDH3XmwECb2AZ2yWBvKkI0jxlHUq0TyHMkDRSUDw5cmPd330hZBLt9VXSRtFW9r3pkiTpB%2B9wdZEH9Z3R9gtaou2qeZI3Ly82Aa9MgULmMxkjfjhqUSy2IKbUZnkCxsPhtnp26HX7tDst5q%2FzGnd5VosVKZt1JrhMuI21408JE5wLNk8ZjkGbK3ScvELsDzL89F0MT54ifEk3n21MX%2BCqw6WgdfH%2B6j9d0JwGHpxLdr7czNZ4QzJiLS%2BaWUg79lhhm8ka%2B4zs8wLvtfuUd7vHP1VVWVN4YZzclTL8XGvy8uOdjM%2BwmEAr9Z%2BwNwjXFqqqyCoMBrPDhSvF1rWqfhwT4yulh16Fey8%2F4QHb3ZKRGgKmwJ2lKxeqevWT418aTJ7PT3haC8UkynNpMUogKa3wDG%2B3xQDFkBF6kMZxChlWU7girIkrsd1qVAtJYDnZPs2Q69G8%2BwUdvO18kW1JCHHKcU1c5LlUIx3vdgM2FMlHkLk42GIgQ6Ry3DDMnPXCBjqkAXg9FK6t%2BMV4J2Q7h60gjCi%2BKBxTBNW10TdzwM77QlCdRkQ1CzdO1jg8oIcjIx%2B%2BKX4UCxyT%2F6RAi8GDfyVKHcmGz%2FhMvqXAoPw82Q5CgYhEFa62rjpRRGmGzQgu%2F5v3BCHbPH6qP2nFP6%2BdXOldo6nPXho%2BrFaQIcsY5PoPvapu6AswyeWtU0We3rAOHKbgBU%2BrIgo3jBvX1duhDb3b2pbLUcST&X-Amz-Signature=a48849e31e5e10e8cc1dc3610b037061ee50fd4095930e6135f22a0b0e2ec511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJNENAN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2FVfAnX0phveCh32ZUN%2BjDioM2c9a98rPX8LOWvzfvVgIhAIDg3scDGIQy%2FyLkIRn1W%2F9%2BWFstQR8AX1%2BJm%2F9p96rOKv8DCF8QABoMNjM3NDIzMTgzODA1Igx%2FBp4%2FAhLhGynguVcq3AOKecuKY%2FlozQmnCAW32eY4%2FpOnGFajdp%2F%2BBLzhW6MZJX7TE6qi1SQ%2Bss5k52TBiv5XTN%2BrtnZA1fuIbKyuqZGPPucNE0vFw1GrF9ieVFJl69GKHi9lGsn7QU4iaozDj8D5ckxRDH3XmwECb2AZ2yWBvKkI0jxlHUq0TyHMkDRSUDw5cmPd330hZBLt9VXSRtFW9r3pkiTpB%2B9wdZEH9Z3R9gtaou2qeZI3Ly82Aa9MgULmMxkjfjhqUSy2IKbUZnkCxsPhtnp26HX7tDst5q%2FzGnd5VosVKZt1JrhMuI21408JE5wLNk8ZjkGbK3ScvELsDzL89F0MT54ifEk3n21MX%2BCqw6WgdfH%2B6j9d0JwGHpxLdr7czNZ4QzJiLS%2BaWUg79lhhm8ka%2B4zs8wLvtfuUd7vHP1VVWVN4YZzclTL8XGvy8uOdjM%2BwmEAr9Z%2BwNwjXFqqqyCoMBrPDhSvF1rWqfhwT4yulh16Fey8%2F4QHb3ZKRGgKmwJ2lKxeqevWT418aTJ7PT3haC8UkynNpMUogKa3wDG%2B3xQDFkBF6kMZxChlWU7girIkrsd1qVAtJYDnZPs2Q69G8%2BwUdvO18kW1JCHHKcU1c5LlUIx3vdgM2FMlHkLk42GIgQ6Ry3DDMnPXCBjqkAXg9FK6t%2BMV4J2Q7h60gjCi%2BKBxTBNW10TdzwM77QlCdRkQ1CzdO1jg8oIcjIx%2B%2BKX4UCxyT%2F6RAi8GDfyVKHcmGz%2FhMvqXAoPw82Q5CgYhEFa62rjpRRGmGzQgu%2F5v3BCHbPH6qP2nFP6%2BdXOldo6nPXho%2BrFaQIcsY5PoPvapu6AswyeWtU0We3rAOHKbgBU%2BrIgo3jBvX1duhDb3b2pbLUcST&X-Amz-Signature=291900ce70e8b2e216b1a1563e811eece80ecb4b26e1e6a48f9e72529618737f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJNENAN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2FVfAnX0phveCh32ZUN%2BjDioM2c9a98rPX8LOWvzfvVgIhAIDg3scDGIQy%2FyLkIRn1W%2F9%2BWFstQR8AX1%2BJm%2F9p96rOKv8DCF8QABoMNjM3NDIzMTgzODA1Igx%2FBp4%2FAhLhGynguVcq3AOKecuKY%2FlozQmnCAW32eY4%2FpOnGFajdp%2F%2BBLzhW6MZJX7TE6qi1SQ%2Bss5k52TBiv5XTN%2BrtnZA1fuIbKyuqZGPPucNE0vFw1GrF9ieVFJl69GKHi9lGsn7QU4iaozDj8D5ckxRDH3XmwECb2AZ2yWBvKkI0jxlHUq0TyHMkDRSUDw5cmPd330hZBLt9VXSRtFW9r3pkiTpB%2B9wdZEH9Z3R9gtaou2qeZI3Ly82Aa9MgULmMxkjfjhqUSy2IKbUZnkCxsPhtnp26HX7tDst5q%2FzGnd5VosVKZt1JrhMuI21408JE5wLNk8ZjkGbK3ScvELsDzL89F0MT54ifEk3n21MX%2BCqw6WgdfH%2B6j9d0JwGHpxLdr7czNZ4QzJiLS%2BaWUg79lhhm8ka%2B4zs8wLvtfuUd7vHP1VVWVN4YZzclTL8XGvy8uOdjM%2BwmEAr9Z%2BwNwjXFqqqyCoMBrPDhSvF1rWqfhwT4yulh16Fey8%2F4QHb3ZKRGgKmwJ2lKxeqevWT418aTJ7PT3haC8UkynNpMUogKa3wDG%2B3xQDFkBF6kMZxChlWU7girIkrsd1qVAtJYDnZPs2Q69G8%2BwUdvO18kW1JCHHKcU1c5LlUIx3vdgM2FMlHkLk42GIgQ6Ry3DDMnPXCBjqkAXg9FK6t%2BMV4J2Q7h60gjCi%2BKBxTBNW10TdzwM77QlCdRkQ1CzdO1jg8oIcjIx%2B%2BKX4UCxyT%2F6RAi8GDfyVKHcmGz%2FhMvqXAoPw82Q5CgYhEFa62rjpRRGmGzQgu%2F5v3BCHbPH6qP2nFP6%2BdXOldo6nPXho%2BrFaQIcsY5PoPvapu6AswyeWtU0We3rAOHKbgBU%2BrIgo3jBvX1duhDb3b2pbLUcST&X-Amz-Signature=c6b1a657abcfa811b5d34893c37cdd28f13b3e776339193005b291acc53c1c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OGLLOWA%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG8cXCZ3EPbE0OX1uf076dTnW7sCQZA7a99IgxiNxb7ZAiEA3SvtGiBBp6QAmotPLsrp1XMQoMYnQ%2FJCHWvY3Vm99AYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOwfApQ6F3nYZt6PnCrcA1ZxxjgYiPBjGl%2FsDazjpja6st%2BxvjcHF0S2T8Oqh4HHrf3ELvsnngAgWBAnnB1S3upjY5%2FHiq0gL4RN6IJqV6m0dVWFMwAiBXg0TRSrGT3diRHEmYWsoFO%2Fio6VCv06La7zmmFk%2FX%2B4MU1%2B6oQJxHe%2F72XMXOJonAcfej5vpvV6vxQjU1b%2B%2Bi9MUHQafO7XIZdHZNhF8NBIliFpWuDLFaXji8MeaM7xzazeaVn4i21CpowMmpoIYOsks3tF13d%2FeJm9BoWsi81QXHkflPLGv5VGfwwMX8jrxthrNxZpufOfEvijbrZH2j9e5Uf8WxqyqMisWdiWhpTHwDnSRKEI5aEtLsmN3ZDz52K%2FU3AxNfqWL7bYLb1VLGrxUtOCceJNHrV7Cn3nFyjxhEl5nh1uvNMRZ5PYjOqiMmRbuNI05%2FtTqDMU5ptS17WHOOJJofiY%2Fdl%2FFKs0s%2FIJuROFh9uaGZ%2BHttbO%2BwHAhC48DC37P7f7w8WEarAqNCy3xT37xhEBufrypA08HQt5lUtZzS6wAhwja3lZ0S4KbVAf%2B4K3LAHTymAXaPPwLXGzKvApgz8m7EyCGpwlHkNvk7oM44x8QekKzLPkoxYDsx%2B%2BzT7wJvUBcq3qyJxUDEc3ETnGMIKd9cIGOqUBve4GBlpxQHNkMyFkLhS5d26gBaRbDi6RHWTmHCjMmnbe6FvQwJoJNC9tDuMDCgX2rPLEOWjmBXgtystwKM85U9cXaxneZo7jdTYSKoJKtGsQlgUchsUE1EXK9ZLqk29oOdED3RI0qpHTsVL%2Bf0XPGJU%2FHKNaw2oLIZJO60N8%2Bnjx47KgVlNw7HKDoqMQcqyQjgvQNkeYgNclW3M8ENaehrN%2BQG3J&X-Amz-Signature=044cb3ac71c646b7612753e676061c568b7920528e6a695120eb6b388845626b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UGJQLVV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFEd2fVccOuyKHPs%2FM%2FAm1wC2T1cnJb5d1%2FLNlIAVe9wAiBnYbV1D7XGbeR1VHxTj4LrmiP7qos2tnDxfRJBrHSrkCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMp8lbiFLxT%2BuzNwxgKtwDdCqfmKdslferVN6ymZiUGlRlIJRLCstRiU8QGzle77s6fGwtLvtjdYGqrAhm3fWVG4QlkKx%2Fsfvk%2F9Mw8vzGssTiXr9f44TdQ2RiFCHGgm9JvDFmGCGMyx2QloXDTN%2FonQsHkue5Xh77l%2BG8GbwrkcWXeWkKFZG64%2FuADtAEXAUfKhYyhRX%2BWXc66vm%2BnwrmhrsisB6O4t6fXiDcNVCrZrXo9f3X2VnSy9cfxjN%2B6QyhSBBzP8ukorAFAUOHD1qslKniJihzVMsbHAO4lyya4pLg70u73a6%2FuTyGrXI4Wwt8AKXk7%2Fk5Sr8BwIe44klvI3BNRKwMo5h%2BCT9mZDAaitNdxhSbadquSpOLiPOvnozzakx6H96ij029q6XQLBZ2qpigSkjtXPpzjm6dJ2mC9WRTNVO4zZ1rKMpnJ4x05X%2B1mDX%2B5lhlGQT11SXBhRJqYp9c0Y0vlbJec6LLWLheXvR8PhWACi3Hl1brZWpzhVBuMKyVY19RtBRVoEXR42p5EBwc5OCNbNDYA6iKdGESAEpy6H6S0u5Z5W2pRusyXxdNjP5J3SUDEsQqqZi6V8QNoA6KZLpkxdCTfb5yO6vJM9MPz33y%2BOMWVZym%2FiAHJ2Yutvje2iAjXNKLN4swz5v1wgY6pgEzxpIea1Nf7rP2f5hjk1c%2BMwJZ1Q0IdQ3Y2HXxNmyr%2FgZy%2B%2By%2FWjzY5ZzvGd133wdFIH%2BwP8wnLTHomBHXwXTmFDNFmPmLVhfqtciktKoUmipEh07j8W76j5MNEnCdiufD%2BuHpHQYVM%2FAYWNp0IhditLovYJ4%2Bi3jZsyqW5Jn5nv9VlHq7SX8MuIz%2FZ1Rm8IqjE3qrT28gDTEvJEjevxbWxjBpgqAP&X-Amz-Signature=eae233ea6472082521a9d189b7d76b6e8da7a8eb4135650897346bdd0be20d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJNENAN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC%2FVfAnX0phveCh32ZUN%2BjDioM2c9a98rPX8LOWvzfvVgIhAIDg3scDGIQy%2FyLkIRn1W%2F9%2BWFstQR8AX1%2BJm%2F9p96rOKv8DCF8QABoMNjM3NDIzMTgzODA1Igx%2FBp4%2FAhLhGynguVcq3AOKecuKY%2FlozQmnCAW32eY4%2FpOnGFajdp%2F%2BBLzhW6MZJX7TE6qi1SQ%2Bss5k52TBiv5XTN%2BrtnZA1fuIbKyuqZGPPucNE0vFw1GrF9ieVFJl69GKHi9lGsn7QU4iaozDj8D5ckxRDH3XmwECb2AZ2yWBvKkI0jxlHUq0TyHMkDRSUDw5cmPd330hZBLt9VXSRtFW9r3pkiTpB%2B9wdZEH9Z3R9gtaou2qeZI3Ly82Aa9MgULmMxkjfjhqUSy2IKbUZnkCxsPhtnp26HX7tDst5q%2FzGnd5VosVKZt1JrhMuI21408JE5wLNk8ZjkGbK3ScvELsDzL89F0MT54ifEk3n21MX%2BCqw6WgdfH%2B6j9d0JwGHpxLdr7czNZ4QzJiLS%2BaWUg79lhhm8ka%2B4zs8wLvtfuUd7vHP1VVWVN4YZzclTL8XGvy8uOdjM%2BwmEAr9Z%2BwNwjXFqqqyCoMBrPDhSvF1rWqfhwT4yulh16Fey8%2F4QHb3ZKRGgKmwJ2lKxeqevWT418aTJ7PT3haC8UkynNpMUogKa3wDG%2B3xQDFkBF6kMZxChlWU7girIkrsd1qVAtJYDnZPs2Q69G8%2BwUdvO18kW1JCHHKcU1c5LlUIx3vdgM2FMlHkLk42GIgQ6Ry3DDMnPXCBjqkAXg9FK6t%2BMV4J2Q7h60gjCi%2BKBxTBNW10TdzwM77QlCdRkQ1CzdO1jg8oIcjIx%2B%2BKX4UCxyT%2F6RAi8GDfyVKHcmGz%2FhMvqXAoPw82Q5CgYhEFa62rjpRRGmGzQgu%2F5v3BCHbPH6qP2nFP6%2BdXOldo6nPXho%2BrFaQIcsY5PoPvapu6AswyeWtU0We3rAOHKbgBU%2BrIgo3jBvX1duhDb3b2pbLUcST&X-Amz-Signature=a06b52fc1825d3d6b24ff473582e04ef57c443cf0306f283cd13bb9ae0233b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
