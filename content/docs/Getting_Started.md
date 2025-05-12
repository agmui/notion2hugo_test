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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWIKH46%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC6vu%2B6SsuDnk0hhmE6h4TRYEDm5GwI9OKstmyJIgIGuAIhAJgPhLqfpPNNfINMG1nWNcNTgTtmQvV0a3KuBu%2B36Z%2B1KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTb8itvaN6YAYP6VIq3ANqcKHKYnsfFzC4m4wZd%2BRiVTMtAf2U0rrLlraCom%2BOuMWk90QkEdONl90aXWZ0L06LoVMCyEXA8ZOn9JbivjeDq6MeznLRBpbbW8T7CiBsfGOOa1C%2FpsUQUZUFHU6NqHl6DpFrBQZVrFaL2ICl%2BrApMxfAmJ8E%2BOdnTEGwg33H4QpO2bZ4GI90D5R%2BCCu5iKIxzRQLNQvdPz0flN1ZEg%2FmJwYJN4M6zq47WhHzjy2SBEgxbxg7FeQ4Im2WhKdGID6MqHcnAkRJsndqb8Bh0FW9Xdp%2FjH4GVJt%2BL7W4%2BcduY8xAKd49mBQ0cRLdkPwcXl4lHcrZkfeOSF9rgwZfAazoEZ6%2BPTSA3%2F0OSzFNgxeef3EfO0ZkyYvUsBSIP2hawmksK7Bw%2BqXZiGSLnQYyepGcE1haYRZN4YJ0ABbMhZFdUVGBYuGIb9EbilpYkmqODt0acX5ndGcVVZBi9D2hXqOATsyjth7WR6hoXSReOkMyfqyZg%2FX%2FcH0wWtDJByCjz1ivoMj56E4rE0Fm9uERIFLbBN1ZL3%2FfYRruwDlGQa%2BzqhYKUNTOki090WVSrUI44PGApavA626S5E6maccStllFn3yfKyFOjJxQW1EEvsx9omcMaGwTWFGLCcdoujDjhIXBBjqkAdIQmZz80uQ1hluVlIN3T3MzmpJVCYkB9NugmJgvlrYgRSkDL2kwhgeCehAHxZNGqCzQ7i3jLyKs5zr3E26sX8bXE4JX89ZMTz8PYQDOuo1ZpV5p%2B6bd%2F5Eu5cK1hbV2PotvRYgALKlPiijZPXnYijS81IaTyNMgrnMe0tSgP2lsUGrxHL7lH4FEz8CnzSAFJ8obQCT3nviBbBLnJ5Cefnp2BNpB&X-Amz-Signature=dd0830095573b90508acafe9f97802b5a7a2819a1af1271c8ccb132860bb874b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWIKH46%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC6vu%2B6SsuDnk0hhmE6h4TRYEDm5GwI9OKstmyJIgIGuAIhAJgPhLqfpPNNfINMG1nWNcNTgTtmQvV0a3KuBu%2B36Z%2B1KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTb8itvaN6YAYP6VIq3ANqcKHKYnsfFzC4m4wZd%2BRiVTMtAf2U0rrLlraCom%2BOuMWk90QkEdONl90aXWZ0L06LoVMCyEXA8ZOn9JbivjeDq6MeznLRBpbbW8T7CiBsfGOOa1C%2FpsUQUZUFHU6NqHl6DpFrBQZVrFaL2ICl%2BrApMxfAmJ8E%2BOdnTEGwg33H4QpO2bZ4GI90D5R%2BCCu5iKIxzRQLNQvdPz0flN1ZEg%2FmJwYJN4M6zq47WhHzjy2SBEgxbxg7FeQ4Im2WhKdGID6MqHcnAkRJsndqb8Bh0FW9Xdp%2FjH4GVJt%2BL7W4%2BcduY8xAKd49mBQ0cRLdkPwcXl4lHcrZkfeOSF9rgwZfAazoEZ6%2BPTSA3%2F0OSzFNgxeef3EfO0ZkyYvUsBSIP2hawmksK7Bw%2BqXZiGSLnQYyepGcE1haYRZN4YJ0ABbMhZFdUVGBYuGIb9EbilpYkmqODt0acX5ndGcVVZBi9D2hXqOATsyjth7WR6hoXSReOkMyfqyZg%2FX%2FcH0wWtDJByCjz1ivoMj56E4rE0Fm9uERIFLbBN1ZL3%2FfYRruwDlGQa%2BzqhYKUNTOki090WVSrUI44PGApavA626S5E6maccStllFn3yfKyFOjJxQW1EEvsx9omcMaGwTWFGLCcdoujDjhIXBBjqkAdIQmZz80uQ1hluVlIN3T3MzmpJVCYkB9NugmJgvlrYgRSkDL2kwhgeCehAHxZNGqCzQ7i3jLyKs5zr3E26sX8bXE4JX89ZMTz8PYQDOuo1ZpV5p%2B6bd%2F5Eu5cK1hbV2PotvRYgALKlPiijZPXnYijS81IaTyNMgrnMe0tSgP2lsUGrxHL7lH4FEz8CnzSAFJ8obQCT3nviBbBLnJ5Cefnp2BNpB&X-Amz-Signature=4737b73e9317af52314ad04eae0a47f84481a263f9ef52f8a3fd9d566e76d74b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWIKH46%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC6vu%2B6SsuDnk0hhmE6h4TRYEDm5GwI9OKstmyJIgIGuAIhAJgPhLqfpPNNfINMG1nWNcNTgTtmQvV0a3KuBu%2B36Z%2B1KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTb8itvaN6YAYP6VIq3ANqcKHKYnsfFzC4m4wZd%2BRiVTMtAf2U0rrLlraCom%2BOuMWk90QkEdONl90aXWZ0L06LoVMCyEXA8ZOn9JbivjeDq6MeznLRBpbbW8T7CiBsfGOOa1C%2FpsUQUZUFHU6NqHl6DpFrBQZVrFaL2ICl%2BrApMxfAmJ8E%2BOdnTEGwg33H4QpO2bZ4GI90D5R%2BCCu5iKIxzRQLNQvdPz0flN1ZEg%2FmJwYJN4M6zq47WhHzjy2SBEgxbxg7FeQ4Im2WhKdGID6MqHcnAkRJsndqb8Bh0FW9Xdp%2FjH4GVJt%2BL7W4%2BcduY8xAKd49mBQ0cRLdkPwcXl4lHcrZkfeOSF9rgwZfAazoEZ6%2BPTSA3%2F0OSzFNgxeef3EfO0ZkyYvUsBSIP2hawmksK7Bw%2BqXZiGSLnQYyepGcE1haYRZN4YJ0ABbMhZFdUVGBYuGIb9EbilpYkmqODt0acX5ndGcVVZBi9D2hXqOATsyjth7WR6hoXSReOkMyfqyZg%2FX%2FcH0wWtDJByCjz1ivoMj56E4rE0Fm9uERIFLbBN1ZL3%2FfYRruwDlGQa%2BzqhYKUNTOki090WVSrUI44PGApavA626S5E6maccStllFn3yfKyFOjJxQW1EEvsx9omcMaGwTWFGLCcdoujDjhIXBBjqkAdIQmZz80uQ1hluVlIN3T3MzmpJVCYkB9NugmJgvlrYgRSkDL2kwhgeCehAHxZNGqCzQ7i3jLyKs5zr3E26sX8bXE4JX89ZMTz8PYQDOuo1ZpV5p%2B6bd%2F5Eu5cK1hbV2PotvRYgALKlPiijZPXnYijS81IaTyNMgrnMe0tSgP2lsUGrxHL7lH4FEz8CnzSAFJ8obQCT3nviBbBLnJ5Cefnp2BNpB&X-Amz-Signature=d87e6d3c71660d9006f109f98e5d2ec12c37d7eab3cccdf5901233929762c03c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6ADCT4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHAsNNgcHWCvZOk9EkOAZ%2BtjVvl%2BB%2F1DJR%2B14BE4PMZiAiBZM1ws%2FBeHSSS5g54c%2FN21dgFvc29k0dYMsXo8OIc%2FtCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhNjkI2no%2FKHGjd1HKtwDSCWTNbGfZOt%2B6Mo53IVcQ2U66kCQ%2Bd1zKTWGJACtxilTm0w1mkbavfshlwp2npwdjey7h2%2F6V5s6zttxiMw3AfGhu%2BgPnL407Mu%2BHpiBFrg96Yv9DMqVecXGRtcqJ1ThlfosiJhWSn%2B4EynChlkSUKypH8imDdMb84g6ESxInLQoNenOfvc4bXmZwh%2BwF9qJJpeqEdPLIC445x1OClinNDbi68td0FtoayTVw0nqvIOtyYa2%2Bi0xU3I9Tvr4ObxXfH7D59QXzk%2B99HkN3ga3atvku1eqwXRrFnX%2B889%2FpVKXq1l%2FGj3jONxYloUY9Hmb%2F%2BPEK7QK%2FixZGNHCo0BkvndEirDguDgDg7K%2FD9GNmEjhY5rCDCngS6jL%2BizTvbIrB1r%2BW71P%2FPDbfsHnN1hUFkbYAuggNaLBUC9RbehVIS7jVJsFnzH4Jr38vC8qwyUuMfCE6x%2BuqLP7l21WtfVsPeZxExr%2FXfacSl9gI5dqIFJs9f7oMgdLF2wMGM9NZelQ7oRJTLf1%2FAIiwU7IrxPaiSuvJfVdrTyFW7I2TdckejYMXR1%2BoXQFcwbq8q8SCsfy1l5YBhHjhG42EI%2FoHVgRWnBmQkkhf2QKaddd0nxcNjmf%2BKtgW7AZeWaXd2MwjoaFwQY6pgFwE4MQZGK158SUChH2dB3CHjk%2BcSx0SyfWGfs0zX23uNJiZdHCLi%2F7xlFEey8%2BE%2BaKI7eFjTY%2By%2FbPVk0EDGDE07zuuyZqnNKlt7LH2n7TSLvjffdHCL%2F03NykPIn8L7aW5eUYehAczTY2lKsuUhPEbWrQIIlKAe2BdkVrcTi5%2BZzLdyr2cpaYHFp2GwsCiv%2Bvk91prdFT%2BoPf7NpCD0TkkgJ4fGnT&X-Amz-Signature=15aceccf5b5c00318f8914d7b32579a4fb5a5e9264426a5c9d9d8b4d29f44e26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY625TD4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEEJmbfjdqZPEU%2FkMXHfjNi92ic27zWZS2R9NqkHwjIUAiAOnf9ganMSbcTSvWKnnLUIyNfW%2Bg3hk59VmjzkvtL9IiqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHR7PwsZI0RCn9JtKtwDmzb6h8uo8%2Fxg74l3NBg7mVHkEcbXYk2QQkWij2FSDhN3M6SMv5BCguFeEUEkdOEAQAx3jXhLNaTIjm7QkOgvjbQjCH0%2BmGjd%2BylT1mefg%2BrcVF7gcKUv5aAMvEiCKguiUvfytqbfz%2FedC9CoY5zWgZJ173iRI1L%2BaVss6Nn4gpxa5d74CMEHXez3wXoPWgVFCtQGqCJFRCDVvgtHk6reMMtNm87T8aRO6cYxR6L0iA9650itWWKFSCGEUBEkfG6tzP4i4JNnzFuiSd0OT%2BHDwQAl6j%2Byc2dn4f6gPZgbGvXXMJZvBoEDSltoQbe%2B7ucDmTKLF15zHPT%2FM2AFbmV75e8yrhAGY8KYdVy1cppxw2RhjB%2BvSafo4uRtKCnfhBtkfEnjbTGZQRsB8JEPrdMVDwWse6z9NXS9Iobh99p1SNwDwlZcuM9qB0v21gfWvLGQ5SnBo%2FuaMHoHQBsL%2BsttNlSpeyPuD9sqePoMnuDQRfTvgc9lKjiBcv95b7v4%2BgloyGDYLqnHCZpS54U9oJWs5N0ZCXoD3Vgly4N66VF0pFn8HUJ%2BVGApHPdzNgf%2FCEpdhrCUia77VdPHTjHnsvlsa%2FxWPkk9u1bDALrjx%2FM85wlE9WDpdA2IL0CpHg0w34SFwQY6pgE1vg4BcZThfk%2FvvqUpaN%2FtriQtMIP7mjxRYf9RM0Zo5bkmrLtS1mTyN8UDoJs6ScRr9YKWuJ59dNOCjUf4icsuEA44mOokAj8GN0A%2BV6iJ85RvbpoGMeszYI42OwJDL0XSp9wAKghhVqDXMrcjR%2BLfXrAm%2BGv7wcSSkBnz03fhzg%2Fa%2F1AQR4z3kiV%2F1ofFnvOg6x1Hc%2FkkKGinFhWmeTwStCWiq0tw&X-Amz-Signature=ea37a30f4ea02aac7aa782d619deee3caddb9e4c5606bb378d61c0a11210d98c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQWIKH46%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQC6vu%2B6SsuDnk0hhmE6h4TRYEDm5GwI9OKstmyJIgIGuAIhAJgPhLqfpPNNfINMG1nWNcNTgTtmQvV0a3KuBu%2B36Z%2B1KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTb8itvaN6YAYP6VIq3ANqcKHKYnsfFzC4m4wZd%2BRiVTMtAf2U0rrLlraCom%2BOuMWk90QkEdONl90aXWZ0L06LoVMCyEXA8ZOn9JbivjeDq6MeznLRBpbbW8T7CiBsfGOOa1C%2FpsUQUZUFHU6NqHl6DpFrBQZVrFaL2ICl%2BrApMxfAmJ8E%2BOdnTEGwg33H4QpO2bZ4GI90D5R%2BCCu5iKIxzRQLNQvdPz0flN1ZEg%2FmJwYJN4M6zq47WhHzjy2SBEgxbxg7FeQ4Im2WhKdGID6MqHcnAkRJsndqb8Bh0FW9Xdp%2FjH4GVJt%2BL7W4%2BcduY8xAKd49mBQ0cRLdkPwcXl4lHcrZkfeOSF9rgwZfAazoEZ6%2BPTSA3%2F0OSzFNgxeef3EfO0ZkyYvUsBSIP2hawmksK7Bw%2BqXZiGSLnQYyepGcE1haYRZN4YJ0ABbMhZFdUVGBYuGIb9EbilpYkmqODt0acX5ndGcVVZBi9D2hXqOATsyjth7WR6hoXSReOkMyfqyZg%2FX%2FcH0wWtDJByCjz1ivoMj56E4rE0Fm9uERIFLbBN1ZL3%2FfYRruwDlGQa%2BzqhYKUNTOki090WVSrUI44PGApavA626S5E6maccStllFn3yfKyFOjJxQW1EEvsx9omcMaGwTWFGLCcdoujDjhIXBBjqkAdIQmZz80uQ1hluVlIN3T3MzmpJVCYkB9NugmJgvlrYgRSkDL2kwhgeCehAHxZNGqCzQ7i3jLyKs5zr3E26sX8bXE4JX89ZMTz8PYQDOuo1ZpV5p%2B6bd%2F5Eu5cK1hbV2PotvRYgALKlPiijZPXnYijS81IaTyNMgrnMe0tSgP2lsUGrxHL7lH4FEz8CnzSAFJ8obQCT3nviBbBLnJ5Cefnp2BNpB&X-Amz-Signature=b07f861c652fb7f72b439e3198b65f1ed1538cbf3bcdb9ff5fadb82a31bf973e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
