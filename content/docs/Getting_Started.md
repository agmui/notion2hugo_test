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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHS3KELH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDdJ2QTqVw6l8fGktvOnVHzMBwCUgfXPnsaDZW2FvBH2wIhAJ3APzBB7Ax3pWy16X6%2FblKf7BzmYDwdtrowFTTyApKqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MOJBqOEmJqN8%2Bhwq3APl5QGWM4QnRyAQYpiCFUt6bK45XRbuEDGyLmhXk9vCpmQ0OkXXRrJB%2FmXEvLYGFIwoDu7ERmhNWkguQQ9f6I9CGK14kL0kxhQewvaVmaTHU%2FLqaiV6dcgtG3jB43rW23Nj8V0n4hpQvdMef0F1nOoyV%2Fv4Db1vOC9ayo3zPuwT1Pf3VLwT6Aviz12e4eNJGQXdUDXRQllWa9E8HXCOreXaw2YYVwOUv51yPxGNVi8wBBx%2FdfmdXiLGA7KshG8CIHVw1Ito5K7J79r%2BsZ7xgid5MZvBgMyrlUiun4u2ZaMnNJ0WfMrE555eLrY9GdPrMsQ%2FGrDNuK%2Bi5iO1vAOwOblSzEz7bHpTCZniJimFPFseBV3CTXSIUOqp5oup0YJUwXIGD2dUUH%2FU81cN1S%2FUf7huqIkuXq%2BHExK6DLAxe1YIN6gOcwr4zSfGgCiQeauPaynBZNJSeppcX2RXxfG8xmkwvdy9Z7kOdxfOBx25pTZKCeO2Zmr3u3A23qc9D3t5ERL5ClLywlzXVAiNhKC75Woyw%2FVVWwIMG5RT5DWxiPIh4NLSWJgOUhttjHLDBbNgPxSRXWr4nnOowUAQ5ZEyuWpCvrRyl7XKgZXnD%2BMETz6xTXuHCSiTarIfWtyS5TC93Pa%2BBjqkATm%2FOiLjwIp87ByMojOvlEPjjX4d3vkYJTDza%2BgM4G90t%2FyEFtOkbiYhgI5EKotx%2BG%2BW717OQ905NkgTt3EzRT6QbJiKSFt2flWwqAAb4FejSwOcZfyI00Atyww6v%2F5YUimWDaWEBAom%2FYCx%2B2Cv2xr9n%2FxmgGZvtiDwRrIZVgRZ%2BWmzyfMmz45N05183eCQ%2FWcayQ51MSv9y%2FDucg55jQB7b0kq&X-Amz-Signature=7027287ffcd5e8f9306f4bdb22b888fd3291aeb677fdc5b274e187d004640b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHS3KELH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDdJ2QTqVw6l8fGktvOnVHzMBwCUgfXPnsaDZW2FvBH2wIhAJ3APzBB7Ax3pWy16X6%2FblKf7BzmYDwdtrowFTTyApKqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MOJBqOEmJqN8%2Bhwq3APl5QGWM4QnRyAQYpiCFUt6bK45XRbuEDGyLmhXk9vCpmQ0OkXXRrJB%2FmXEvLYGFIwoDu7ERmhNWkguQQ9f6I9CGK14kL0kxhQewvaVmaTHU%2FLqaiV6dcgtG3jB43rW23Nj8V0n4hpQvdMef0F1nOoyV%2Fv4Db1vOC9ayo3zPuwT1Pf3VLwT6Aviz12e4eNJGQXdUDXRQllWa9E8HXCOreXaw2YYVwOUv51yPxGNVi8wBBx%2FdfmdXiLGA7KshG8CIHVw1Ito5K7J79r%2BsZ7xgid5MZvBgMyrlUiun4u2ZaMnNJ0WfMrE555eLrY9GdPrMsQ%2FGrDNuK%2Bi5iO1vAOwOblSzEz7bHpTCZniJimFPFseBV3CTXSIUOqp5oup0YJUwXIGD2dUUH%2FU81cN1S%2FUf7huqIkuXq%2BHExK6DLAxe1YIN6gOcwr4zSfGgCiQeauPaynBZNJSeppcX2RXxfG8xmkwvdy9Z7kOdxfOBx25pTZKCeO2Zmr3u3A23qc9D3t5ERL5ClLywlzXVAiNhKC75Woyw%2FVVWwIMG5RT5DWxiPIh4NLSWJgOUhttjHLDBbNgPxSRXWr4nnOowUAQ5ZEyuWpCvrRyl7XKgZXnD%2BMETz6xTXuHCSiTarIfWtyS5TC93Pa%2BBjqkATm%2FOiLjwIp87ByMojOvlEPjjX4d3vkYJTDza%2BgM4G90t%2FyEFtOkbiYhgI5EKotx%2BG%2BW717OQ905NkgTt3EzRT6QbJiKSFt2flWwqAAb4FejSwOcZfyI00Atyww6v%2F5YUimWDaWEBAom%2FYCx%2B2Cv2xr9n%2FxmgGZvtiDwRrIZVgRZ%2BWmzyfMmz45N05183eCQ%2FWcayQ51MSv9y%2FDucg55jQB7b0kq&X-Amz-Signature=939fb1d01d05dc7cf29795ec9a6005137deddbe0eadb543907fd70f22ecdb708&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGWMGLW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIGjui%2BdzhbCVyKgVQhSwi1xKY4KaHFfsIICqAJZH5TE4AiEA%2Fcduq9kC45Q7gZA7kdrq5Z66RJ6h8TA4%2B7IAAGDs37AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvtQqib6hQKYykkCCrcA7yyHGz7tTkU7gShN%2BDlAQeQopzrGf0zkqfm8kUE2Cx2H9olIVuqvSJpmMX0brgndFI8QPpD%2BLYWC3M70JDtMD9fn1M38inxFswGS5Izo%2BkdzjaSTUNDFDqmMmz0Q6IaiIc57jsBnCUovVgrJN47Y4Snvs2Lufw9otn%2Fz2VNl0VcJVltRGtgTJYPRCgRa207pnMO4advRDlmEyKnoF2eFDAl4nqg4GNU%2FldsdKq8x48ZygI2qGf1k4D8iyGvbyHe24lElxoek%2F1FxcjfC%2Bvvf76qNnPL0UAwjE7YFBU8TKV0rT8jvHY6R9PUJ%2B0z4JcklHZLR9himKbCsyaBCiQYxiBsuqsQeOegxMRVNAA9hNipcvrC30O01FIL7srICqqGlrYWwPNc3PksrHw2B6rLyH1nXRh%2FPQtMTd2fW%2B97wdLxGr67mqTqDBXU2Fhpv0wfhQPCa30HmImD9LUUnpxUZxObsHYjsTbbT%2FcmFbsKYb57S9Y9gr%2F3euSztsaqngM9nlgsW1CxOjEk0asiETjGKUcao6HagEK9WkMX7WygxCkzPxP5abZinw5qeQS9LV%2BN9CqKjWlAjr7P9uNW0KluSfj5p2Mey6ZVQcZjnJZ3z%2FBKnqqsSbU7PkMwjwmQMMLc9r4GOqUBRfnpfm2zDa8d45kbudWwvCB7DWlXggzSAixYHDC4lKTJ2mdV3I%2BRmnO%2B3DbLOeGbK9VdVRoBSKqTbT2DRHYwJzYgz%2FkF2iO9Us6dD18TzR1fcXUK68EWlTWICRIEBSgqECD1y56%2BGYMA87d7Y1fowp4k5tGimUxkhwOcA91%2BwaKnbQXWC%2BX66CWduUJuGd0e7EMhJ9R1rHE1P8P3IkZlr7JVs2v3&X-Amz-Signature=a68323a9d8bc0a0b0faffbc5ae6217f349683043ef945d6ce7d52be6530f4da9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U4VPSXY%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFUtCqmrNvZlxTACPegRyRVqlAqwkeWhV9b0T1evoT4lAiEAnxgQPPKS8XThpGgjwtKkR4tgCLlQQhRSNq1%2BH8Vw6iYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHphc0CGkojmcgMRqyrcA9go290mwbboN5m48szLtHyvnY%2FYCQN%2BnhNh9xSrz2VF4FshNLQ1x9k4ml7xDE6ak%2F2%2BZQOgFwMvjHzhwcF0OV1YlCsN%2F%2BSvHfornkN%2BBgNYduL3uKF7acXCKXb966TybT4ZCEKsTt5ZgLBN21Z5wdCJMvFdhSNJlPOC7YcUscRxjjH%2F%2BZHHM%2F4ie7UVbO16EmmL4M00MUvEJkxg8op825%2Fy%2BvQ33ZxOR1jBa2rufAE1pm%2FAQMtY1mfbXm3bcQCTR8wxVYhExcgn%2FPwLxPlL3yGUBVpX9Dtaonpl9XdBQq13WHyh0hHgqCPAPUnVNZsrLEPGQGN9DzpgUdbYFbt6CfCGJwL1ZzDIVzd1cwolFebPsLAsIh1TxRKnCQ57QtCHNrDi%2BW3HnV49hCtsn2WZSEzGV88WGT4bQ2ILCEceioQiLGlEM2OIPhesVBfPsnnCL7iMIApV%2FHkLOqZObV4UEDZWl88qUelM%2FiH2jCnG3eX16mDShphz%2FEjMDLpEln9rGS3j1hhsoPFrtPcPu%2FspJO9DRIiJiK9hQ1tMz2jgUxwT5qG8qkH51f8c%2FEX%2BYbvOlucqNNlGWpmwn2ACr1qQEz4%2BKzpGYgv%2FU6xERCEeIMfjiOXn6N1i%2BZb0OuVPMMLc9r4GOqUBFor2jg4I1w7KFpGpHvz%2BylWEfRfci2Vc7YSsjGZvs6lMfeBBrz98Tzdkl8ZJZ5OWiBDnu69jpcyZIo8p4H%2B9BvHMfMS%2Bvof393LdAWZs3plxX9sD4XXYzw9%2Bb%2F8HeCMJRDtD5Kenmft2VIPDnWNzMS3vvFvD7%2Fx7Be26z6NvMzsSVHXifSYpSRn2%2BH%2BAH68CwrlkVyupc47C3yfc64fVzIBnMl7P&X-Amz-Signature=639a05d3bca7c67ce9852155ecb87c04a48414d07ff2e6845233575f314d445d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHS3KELH%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDdJ2QTqVw6l8fGktvOnVHzMBwCUgfXPnsaDZW2FvBH2wIhAJ3APzBB7Ax3pWy16X6%2FblKf7BzmYDwdtrowFTTyApKqKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8MOJBqOEmJqN8%2Bhwq3APl5QGWM4QnRyAQYpiCFUt6bK45XRbuEDGyLmhXk9vCpmQ0OkXXRrJB%2FmXEvLYGFIwoDu7ERmhNWkguQQ9f6I9CGK14kL0kxhQewvaVmaTHU%2FLqaiV6dcgtG3jB43rW23Nj8V0n4hpQvdMef0F1nOoyV%2Fv4Db1vOC9ayo3zPuwT1Pf3VLwT6Aviz12e4eNJGQXdUDXRQllWa9E8HXCOreXaw2YYVwOUv51yPxGNVi8wBBx%2FdfmdXiLGA7KshG8CIHVw1Ito5K7J79r%2BsZ7xgid5MZvBgMyrlUiun4u2ZaMnNJ0WfMrE555eLrY9GdPrMsQ%2FGrDNuK%2Bi5iO1vAOwOblSzEz7bHpTCZniJimFPFseBV3CTXSIUOqp5oup0YJUwXIGD2dUUH%2FU81cN1S%2FUf7huqIkuXq%2BHExK6DLAxe1YIN6gOcwr4zSfGgCiQeauPaynBZNJSeppcX2RXxfG8xmkwvdy9Z7kOdxfOBx25pTZKCeO2Zmr3u3A23qc9D3t5ERL5ClLywlzXVAiNhKC75Woyw%2FVVWwIMG5RT5DWxiPIh4NLSWJgOUhttjHLDBbNgPxSRXWr4nnOowUAQ5ZEyuWpCvrRyl7XKgZXnD%2BMETz6xTXuHCSiTarIfWtyS5TC93Pa%2BBjqkATm%2FOiLjwIp87ByMojOvlEPjjX4d3vkYJTDza%2BgM4G90t%2FyEFtOkbiYhgI5EKotx%2BG%2BW717OQ905NkgTt3EzRT6QbJiKSFt2flWwqAAb4FejSwOcZfyI00Atyww6v%2F5YUimWDaWEBAom%2FYCx%2B2Cv2xr9n%2FxmgGZvtiDwRrIZVgRZ%2BWmzyfMmz45N05183eCQ%2FWcayQ51MSv9y%2FDucg55jQB7b0kq&X-Amz-Signature=573c575e9415ae8393fbc591995fe45eca2d8b6dbd0fece87c0747c85c8ce553&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
