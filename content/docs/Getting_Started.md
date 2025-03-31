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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTITIAUT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBbZsZ6Ek1A0IH8bw%2BVdvM8bJlGSX%2BSsC0GlFYEXb6s6AiBC%2FuF8lfJ13HrsYcwMU7unymqT4BDJye1ym5cJ0uuqeiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh4bbi0H4bZBn7KwpKtwDG1keKYT5De8TZAz2IE7oYNC4xohiPBO6%2BFdDkEhCTiZQlyCjbiPXfXBLFRUVmffWYfW6%2Be4YuSdJK6SynNGbT8%2FHd4WcSWkcNmajB6rv55NvehU6wJS6Agr6ea19IezhvESyztoBPNk5gxmydKvFQL6RU7z9I3r7lycTpxPHcvCJGU5CXeKeBSXpgcJaaAGPxHDNX3aBA7ONFnwT%2FO2uNroEoJ2cCGg7nicu6%2BzUXDnU%2FdkpKGnlb2%2FCOsGOXF0sRbFuIvBv9hiKGLWg2abJO1WXZQyfWuUoodBPLMrG%2BOSlTwobr3MAjHyEONB%2FqR1xLhhYlMibwThzorwM3QRykwkTcgyiMPV%2FjemmcDQyxLZniQ%2FSb8%2BtLYdvEf%2BgHRTcrgeVlv28ppZXYcD4BHIgonD%2BsjICPWnnmZWcH%2FGlbmuyq0kb%2F04NtttB6O2WXicjgkSXEx%2BCkYuMhQmVg3cFAXYy4n0t5D4iEczRoaBIPMWeGwgmnhV8%2BiN7UZeMOvDG6wJ%2F%2Ff7HkUI7%2BZX7e7IaY7JdgZt6S7i0CCwUM9aQBPDNoKcQjf%2BnZKNsy%2BTrfvaaP%2Buu9AacR%2Bp4mYHrgVmhfZpjFvlZ5gu5c5YCRRfaLs%2Bth3CoxiJctKP44xkwnIiqvwY6pgH61EQxWF9B4rLgx0DHr0YHMVk7IJjdVLyf0ExW%2FuSNXDgjU0zWSOYjAzc%2BJEgosjPAizTCDt1HcKD%2Bref5Oa24TLAAqHYcTAflcmtX18x3X5xLA0ODxQj7et9hqXhR9oj2Xr5rUsc7GSfyPTSeIAYPZ4%2BtUw1sjPePU76tCYBy3f%2B5dnrk9iMUOBBNhdjRr2kRRNs9BlYGlb3slOrI6g676WdqAq13&X-Amz-Signature=8b484732ff372d5113238d2d3525265f3c9153a7591c1b6bd9d567cf77055aca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTITIAUT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBbZsZ6Ek1A0IH8bw%2BVdvM8bJlGSX%2BSsC0GlFYEXb6s6AiBC%2FuF8lfJ13HrsYcwMU7unymqT4BDJye1ym5cJ0uuqeiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh4bbi0H4bZBn7KwpKtwDG1keKYT5De8TZAz2IE7oYNC4xohiPBO6%2BFdDkEhCTiZQlyCjbiPXfXBLFRUVmffWYfW6%2Be4YuSdJK6SynNGbT8%2FHd4WcSWkcNmajB6rv55NvehU6wJS6Agr6ea19IezhvESyztoBPNk5gxmydKvFQL6RU7z9I3r7lycTpxPHcvCJGU5CXeKeBSXpgcJaaAGPxHDNX3aBA7ONFnwT%2FO2uNroEoJ2cCGg7nicu6%2BzUXDnU%2FdkpKGnlb2%2FCOsGOXF0sRbFuIvBv9hiKGLWg2abJO1WXZQyfWuUoodBPLMrG%2BOSlTwobr3MAjHyEONB%2FqR1xLhhYlMibwThzorwM3QRykwkTcgyiMPV%2FjemmcDQyxLZniQ%2FSb8%2BtLYdvEf%2BgHRTcrgeVlv28ppZXYcD4BHIgonD%2BsjICPWnnmZWcH%2FGlbmuyq0kb%2F04NtttB6O2WXicjgkSXEx%2BCkYuMhQmVg3cFAXYy4n0t5D4iEczRoaBIPMWeGwgmnhV8%2BiN7UZeMOvDG6wJ%2F%2Ff7HkUI7%2BZX7e7IaY7JdgZt6S7i0CCwUM9aQBPDNoKcQjf%2BnZKNsy%2BTrfvaaP%2Buu9AacR%2Bp4mYHrgVmhfZpjFvlZ5gu5c5YCRRfaLs%2Bth3CoxiJctKP44xkwnIiqvwY6pgH61EQxWF9B4rLgx0DHr0YHMVk7IJjdVLyf0ExW%2FuSNXDgjU0zWSOYjAzc%2BJEgosjPAizTCDt1HcKD%2Bref5Oa24TLAAqHYcTAflcmtX18x3X5xLA0ODxQj7et9hqXhR9oj2Xr5rUsc7GSfyPTSeIAYPZ4%2BtUw1sjPePU76tCYBy3f%2B5dnrk9iMUOBBNhdjRr2kRRNs9BlYGlb3slOrI6g676WdqAq13&X-Amz-Signature=0e0567a09d4d08521dc6b4534b1238cd79c297bb506799cb16e122e9f2a33088&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JNKOAI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCRStAYPjHMtdGOZsj3vDz6JUadxxVEO%2FD8LPC3%2Bg0QMwIhAN4jVS0wcVmgMlzcbAH7VqeZW7FwZIK16kLEAeDVIlXDKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE3ZRF8S7gKrbHRLQq3ANVkWIcjGgw419dxZAxP9dKcAbsaqjmHUHpQ9dIm5xPcG64OLZXSS%2FwZrfP7QzW%2BO1muqP6d2GzDkDGAOFZzh24uEDp0j9irdaa6kssvMEwBxU0wHBDzWhtTit1FbSI86afSNDnJxYlU2ZE9JLZJLaXR0%2B1vAxAU7Lv91kpJrAjVSa14Xn10%2FtrUO8QGx5MdA42LntcUk2%2Bt063AwDssLKTnUtgVM%2FXu53WeAJQ5yB2wZzHG3TCy394FMCWoX5K3QZ3QmjIPLxM8paAjPoFJtbw1nz1blnVD1BnCZDUIW3PZ0SIp7tadhiOXk33cG9mymfzgkGbhayiA%2F4407sI0ny%2B7zf02nTHPx8XSZ2HCXwYPItilBHaC8s4fXNAmTfujsmltgbe1q3g4bBwicBhP0LhQDqucvgeDfkTVSzbj2umj8G0UTqYCGdjvuHu1xafnoZQqdGmbXF1R3QGY23i2oMuKCSNnhYUQe9j7WeP4KzyWpB6UoZTatjWPHbtQtRSrAkQV241YAUayI6wpZxg0%2FLyiWOhOgt3ieLgHIdWz3hJ%2F9SlnXj5p9XkfF8KdesMLyQqGIctmszKXkJdKrZQcnUXFqFwJDOLEKesahnC4A1EbEqJgiAz8bPHcNEzfDCXiaq%2FBjqkAT6ToCnonxVmmNYUheSAjVSLgzYJWPfBp7b5We3CEQgtaGUDhRrgS3V2FAUV7DAWTSmiFctaV9yDlCqNFTdc%2BoIpt3fYAmkDH5lhs0iEpQ8fi1rW7QTB25bQ%2Bo3530RjTzWQiGfFrUU%2BtqPUUA4bTG8H9yTuoQHd0jq4aMelj8y%2FdrWihS349pdozBggtPdmPzA5nOf2ZeUzdGf4eJ2ovA9jmFO3&X-Amz-Signature=419a767c865bd3053c52ed19774bc63650b1493576d772f0543692d08178c8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGHPCK5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBPn7o61uzlLcEoAnWDurxF7E4HDAUZJpwN8hO9zwHWEAiAOuc118u8fuMrCX5HzCmPilfjCC7Py7z3mYC0VwtTpbyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi7ANZh%2F1YmeyXDUHKtwDy11dv%2B%2BHWY9opRu4wBya%2BMt9boJqPQJrV2wXUPHISbJWujPkAyCvyWAvfSnkeMtIJtNKTs0VnjJy2IIdLVp3EhaWypLv6niWz5%2FPr4rfziyAHz%2FNY573HxgLLl%2FUYUoz0Nuhcb7eV%2BPCKfJr66NY%2BCymp2OJ53Mzv1iCWagn2ZAsR9diNF2YEUSTLjXT3DenpstPNS3m3tlvosbDAn4I5R5xKuo3F%2FX%2FJXhzeF5Vba%2Bf2We1wt6XWJ8lVkVSDACRCGihbTd6M4i4wZj5yYTW8YyMyo0h3mYTEPQDa34%2Ff44yOC1WBuBeUet%2FeK8OMUfu47AqhBtH8Z47B7pO%2FxDxg%2BrWG6qlhNlTZNXYiUzGp1m6T2LjOzk3R4rW%2BF1IF%2BZ5fPmclOU7nElAuQ2HOUoGuAakCGd6%2BW4oLw3QP7dAPVfQ%2BfaivUqsH5oo%2Fg2yWFvRhmWK%2BiAYK1QUoSHnW3hbNgMrnbCUIY82kCazGadzeQA8LisVabZWI2pGrvz1TtM25wrUoFVcBnoNNT%2BQh8dZN0y%2FlxBWWyGa4dGvfaYwOKsUgzojsBy2ftzvqBSz2LMp07KDISN4oljRZfkEGe0R7Xk3HzEu6gY%2B9vRoxp08msHKvNJBxUkxalsq8w8w7omqvwY6pgF0upOKffN8pmHU2p7mpBxZ3IMXkqE5yRya2JRtqgMCF7AWU4Ys8vUJqIKv0KPA3dlBTQSuYixXD9S4L%2F9ZpGRlkKq6E%2BmXPnzyHAqubkKSv4DstKgjnW9J%2B9AvqLplj8cyUl9s0K4Q%2FF8NDnoBbqeOHJQvcR4KxC9z6afEHzVWVYpumOuNlAnBkbYkUNoIPCgLR1Qmm9YKzNrHvx0z19yb%2BWDhLtBC&X-Amz-Signature=012063f626d69fa0ba12583eecc01161805f27baca8412d9e97e830389d3bcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTITIAUT%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBbZsZ6Ek1A0IH8bw%2BVdvM8bJlGSX%2BSsC0GlFYEXb6s6AiBC%2FuF8lfJ13HrsYcwMU7unymqT4BDJye1ym5cJ0uuqeiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh4bbi0H4bZBn7KwpKtwDG1keKYT5De8TZAz2IE7oYNC4xohiPBO6%2BFdDkEhCTiZQlyCjbiPXfXBLFRUVmffWYfW6%2Be4YuSdJK6SynNGbT8%2FHd4WcSWkcNmajB6rv55NvehU6wJS6Agr6ea19IezhvESyztoBPNk5gxmydKvFQL6RU7z9I3r7lycTpxPHcvCJGU5CXeKeBSXpgcJaaAGPxHDNX3aBA7ONFnwT%2FO2uNroEoJ2cCGg7nicu6%2BzUXDnU%2FdkpKGnlb2%2FCOsGOXF0sRbFuIvBv9hiKGLWg2abJO1WXZQyfWuUoodBPLMrG%2BOSlTwobr3MAjHyEONB%2FqR1xLhhYlMibwThzorwM3QRykwkTcgyiMPV%2FjemmcDQyxLZniQ%2FSb8%2BtLYdvEf%2BgHRTcrgeVlv28ppZXYcD4BHIgonD%2BsjICPWnnmZWcH%2FGlbmuyq0kb%2F04NtttB6O2WXicjgkSXEx%2BCkYuMhQmVg3cFAXYy4n0t5D4iEczRoaBIPMWeGwgmnhV8%2BiN7UZeMOvDG6wJ%2F%2Ff7HkUI7%2BZX7e7IaY7JdgZt6S7i0CCwUM9aQBPDNoKcQjf%2BnZKNsy%2BTrfvaaP%2Buu9AacR%2Bp4mYHrgVmhfZpjFvlZ5gu5c5YCRRfaLs%2Bth3CoxiJctKP44xkwnIiqvwY6pgH61EQxWF9B4rLgx0DHr0YHMVk7IJjdVLyf0ExW%2FuSNXDgjU0zWSOYjAzc%2BJEgosjPAizTCDt1HcKD%2Bref5Oa24TLAAqHYcTAflcmtX18x3X5xLA0ODxQj7et9hqXhR9oj2Xr5rUsc7GSfyPTSeIAYPZ4%2BtUw1sjPePU76tCYBy3f%2B5dnrk9iMUOBBNhdjRr2kRRNs9BlYGlb3slOrI6g676WdqAq13&X-Amz-Signature=0631a879060efbd5335f45d19712ed40eac7a54070776d1bd0f6264caa5baa6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
