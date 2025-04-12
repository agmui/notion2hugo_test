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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOXEWHX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH3ulqCNyv48QzHI6Hm%2FDc%2BRMzsFvqqZLllLdtyhsiVsAiAvfD9FdidYyLIHLFxywUdYJrVQ4Gp1aXIUbAPuOp84aiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBi8hecbqTjTfNbvHKtwD%2BqRGGBkk8YXbMYvzrWnNHmk2zXd5RQtHvKoY4df23H1whECMyIQOWmKg3G3LQIY8LI4XXBrxWGdkzd5%2Fn9CPmArOLCw9HcX6C%2B5iprc%2BSBD6lUdUgp1PSD0Nr44mFNaYlK1iKHl58JH9NLwB3w0GTGcOr8O%2Bsoo2CGI%2Fs8W506r43Ajo1eZOW9h7NEzDoTYvvevEY7w%2Fgs5C%2F31Hj3dmkIu61kMQe%2BcLqZo31rPBWMearlwGayjOGlPqHhkP5%2FaYxzwTHdcXIpK9cwSjBpclZPFfnI%2BO9ZRFAgAWLdUP%2F1GqG5xPi158F1rbl%2F6RHkRAOPTZS0K47VRpZKSz4LfC07E8BpFkNJy502mkqUFE5ZKumjf5SWJMd9cYiZc4w58NLnby34H8mmsLE0wtMqGKXQx9cgvEcgb3%2BFL3tsDGV9k3%2FSf4rpLDLqtzlKVhp1feVpOBIvQSC2AzfcJjdlC%2FFRXldt011R34w0EyP6ZlRryiwtZXVx8SRAg50OhO%2BEe3rIcY%2Fzgrr9X3a2vhEyH47YOLTJ49Aes%2BxmA5QXwqpaZXyy0Yv%2Bk3P5eB2dQ4PAOpyE9O7X73YQQMSmYaGUfkC2zhZhrkWo1nxTrxjmvM83gsyjSdkyJknZVebZ4wyMrpvwY6pgFAUhlEhcYkt1s16rjQP5eaIN%2BsfsmOWENplfhvk7J9Jg2vx1JrcrkbyYhm9nMAbslt28bCwW%2FwbuaXWEp27Vu5zMcYmrk0TnacjCcFLPICMplhjO2HkYVviNqRD3H84Mu%2BOFCA4Nn6y3vTtKP49x1gPI6wnhK9nJOxfUx6zfTi%2FaClB6WKo2opyCDtNufk08ks8rdQsXBOjGWnjIo%2BZcWNLoiTHepc&X-Amz-Signature=7eb51731111106d10806e75cfe969eccec8e2e5cc4e36f73ef4358e2fa35f3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOXEWHX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH3ulqCNyv48QzHI6Hm%2FDc%2BRMzsFvqqZLllLdtyhsiVsAiAvfD9FdidYyLIHLFxywUdYJrVQ4Gp1aXIUbAPuOp84aiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBi8hecbqTjTfNbvHKtwD%2BqRGGBkk8YXbMYvzrWnNHmk2zXd5RQtHvKoY4df23H1whECMyIQOWmKg3G3LQIY8LI4XXBrxWGdkzd5%2Fn9CPmArOLCw9HcX6C%2B5iprc%2BSBD6lUdUgp1PSD0Nr44mFNaYlK1iKHl58JH9NLwB3w0GTGcOr8O%2Bsoo2CGI%2Fs8W506r43Ajo1eZOW9h7NEzDoTYvvevEY7w%2Fgs5C%2F31Hj3dmkIu61kMQe%2BcLqZo31rPBWMearlwGayjOGlPqHhkP5%2FaYxzwTHdcXIpK9cwSjBpclZPFfnI%2BO9ZRFAgAWLdUP%2F1GqG5xPi158F1rbl%2F6RHkRAOPTZS0K47VRpZKSz4LfC07E8BpFkNJy502mkqUFE5ZKumjf5SWJMd9cYiZc4w58NLnby34H8mmsLE0wtMqGKXQx9cgvEcgb3%2BFL3tsDGV9k3%2FSf4rpLDLqtzlKVhp1feVpOBIvQSC2AzfcJjdlC%2FFRXldt011R34w0EyP6ZlRryiwtZXVx8SRAg50OhO%2BEe3rIcY%2Fzgrr9X3a2vhEyH47YOLTJ49Aes%2BxmA5QXwqpaZXyy0Yv%2Bk3P5eB2dQ4PAOpyE9O7X73YQQMSmYaGUfkC2zhZhrkWo1nxTrxjmvM83gsyjSdkyJknZVebZ4wyMrpvwY6pgFAUhlEhcYkt1s16rjQP5eaIN%2BsfsmOWENplfhvk7J9Jg2vx1JrcrkbyYhm9nMAbslt28bCwW%2FwbuaXWEp27Vu5zMcYmrk0TnacjCcFLPICMplhjO2HkYVviNqRD3H84Mu%2BOFCA4Nn6y3vTtKP49x1gPI6wnhK9nJOxfUx6zfTi%2FaClB6WKo2opyCDtNufk08ks8rdQsXBOjGWnjIo%2BZcWNLoiTHepc&X-Amz-Signature=1b894758a2829bf213d373c3684803e50abd8b4a7f7c9f1fe3c168323f695964&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICRN2AW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBt07uSIuEqdcVG38ANBeTzU5DG9bTbHwdHcGw4pjQ6lAiAMFIHwaSRQNXS5RrfPopoNiiGP820Xfge0897rDYr0ASqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFr3FmSJxztpzPe3fKtwDCFhaY1T7vgQiCNnL5V0xbWCn2hczoP0%2BccPSNiNXPzLsSNmf01dCP3xiDcCaJF6twpdCuH7hLO3PNwcvwSdiXfIR6akkZEtIfJ%2Bj5cICgXGZRAoNja3OM9yM23ek5npNJtuOoF9WiwpSumR9ARCqrNJPR2zNvDgrLwzGwiBFOfhI9V%2Fbe6JHGoKBwYfxRdEZlDwIeejv%2Bz6%2BGzMSTVkdodE01NA7LQjvV8LwsH5vgGeO5hf%2FDlGps8Hst2wZLKEQkV%2ByXVlxKfQpq%2F1oWdUV9gxXLBzxoc6yLyeLEt4G1SzrnimdV7eu%2BghXUWuOZothl1HR3jYSpJRCUN3fopZmdlSF106Vc6TVmKxvnhKBWFa6D4cxOSyLbJ1dugpiO41u0oVw97t7V1exlmT%2BTTidoKFr%2FjtXhRMHhk2%2B9zOcs5K91Xaso9o7lZtiOp2KpMxwWI5aXntsQ0miUCndwUdNYv0cXyF8MKoR8H5MOfvdBKqZHhG%2Byd17U8OkWQZiXUaMMOr9AmZqR98lavVs%2F3e2303Ln7H%2ByaIF3JAuhrvaNmSdnfOlaMG04O1xkxXQ2mj0%2FKGEXkh8385vjqFSNN%2FbShl5XgGtEZ%2ByeSDTugXe06eKd9H%2FT%2BM8X%2FZ7Q6owvsrpvwY6pgGz6OE52y%2BSCy6KNMUVmBt5B9XqGgkWkTvdwQRLvQIKkdIdQBBLaPtVYcPsSq%2FY9Trq3aRODMyCzJAk47AAJg6pryWYrh2W%2B9zUzHxBPFHWK2W%2F6Z%2Fz7lSm08DTuqyL%2Bi54IhcsJVUKdliunNmiIYdtxB4hbfi96Fnu2RW%2FH8KKysVjcPTkGl2519bm1Es0MIRvVt3qT8HK2uT%2FTCTxy%2FkImh5Apjt9&X-Amz-Signature=71abf4482096dd589656c47455d607087d95104ef868da1c647887423d62848e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTQ7C3XV%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC3fwguVpl1uyFSlcPPN2GwM9qEUB5BXYDtO1CQo6mpfQIhAOjfDv%2FCyfMorUqsboQHfXihNgAyYHO%2BtHJQ%2Bul5GiwtKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxawUCLFYcH75DnbC8q3AMvM%2BehXdptaw8hjPv7wP8CLv1YQxASLUbz2JTDGeEVH7eKZOeBcZhE6LvzfFBOfzqNy8QvxygoN2u3e0ihfQ4Y546RNchGsOf5hYpaB6SNncm3K4TZQr0rqpPM%2BPKGp%2B3d%2F4ffKIXMlTlsw%2BfYDRvhHxOCwoz7gc1oLb6Qf2phtyqW9LEIHJYbeHCczXpfw1ECTt%2BMPWyza52pYeLYgTy%2F2hD0G%2BAYVUCii%2BC0iMd%2BiR3nyU%2B1zKSWtaQgHmletA8BgxUu2kRAON0jb7mRojdiDcbQWETIA6FkW%2BdGJ3542FkS0fta%2BV2Bn1TdnN6Q3EfX5H1nvcHRTZC%2B%2BPACFYo9yxCBtiUpEwAYMc6K6hTGpXGhqa9rlEBDrjgNaC7a%2BN2YJgKIgABNq31nUWp9ViwqXIaN6FMi4s1BCmMtPUyWmHrI0UCe%2Fs1qpswcQQo6Yx9chY1reMyyRDhh5488UplU7DNHd4wI9AD9XJzmqAm3%2BjxyKsD3%2Ft4hQ09tNmDhysWIjt4aWCVnqpjVDddGwMl50ywR0WfK1yabnKZYB8maFI8EGy48bYRDoWG1n9tYmv6XVKI65k3cpNKEX9rdBqtFutHOEzSIfDCCDx1YpUi3rJmT%2BlCVEk3TM2pgOTCsxem%2FBjqkARFNrbK2AxKpNdyNFt%2FKANutHub%2FWQ%2Ft3pfubUHe6vy%2BIscIAuYjpW85G%2FC5AE7yx%2Bq6gXtfGtyeGT83yb1NOM1BmmuSiT%2BWoI%2BdJoxxvhEMjgziRfd%2FPX2YHwr6oNZz5frmlmPuWTtsFJ%2FyECJfQ6dZQplKhYkUMHE1L%2FvDd31lC44ntEC59%2Fe9sFYCixoOZVHNU%2FLlOdLvjHMxKgptL05anmq5&X-Amz-Signature=830424ad654bf8d47479ad812220e02b5a5a43418c9dc49e639672972c7aca99&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XOXEWHX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH3ulqCNyv48QzHI6Hm%2FDc%2BRMzsFvqqZLllLdtyhsiVsAiAvfD9FdidYyLIHLFxywUdYJrVQ4Gp1aXIUbAPuOp84aiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBi8hecbqTjTfNbvHKtwD%2BqRGGBkk8YXbMYvzrWnNHmk2zXd5RQtHvKoY4df23H1whECMyIQOWmKg3G3LQIY8LI4XXBrxWGdkzd5%2Fn9CPmArOLCw9HcX6C%2B5iprc%2BSBD6lUdUgp1PSD0Nr44mFNaYlK1iKHl58JH9NLwB3w0GTGcOr8O%2Bsoo2CGI%2Fs8W506r43Ajo1eZOW9h7NEzDoTYvvevEY7w%2Fgs5C%2F31Hj3dmkIu61kMQe%2BcLqZo31rPBWMearlwGayjOGlPqHhkP5%2FaYxzwTHdcXIpK9cwSjBpclZPFfnI%2BO9ZRFAgAWLdUP%2F1GqG5xPi158F1rbl%2F6RHkRAOPTZS0K47VRpZKSz4LfC07E8BpFkNJy502mkqUFE5ZKumjf5SWJMd9cYiZc4w58NLnby34H8mmsLE0wtMqGKXQx9cgvEcgb3%2BFL3tsDGV9k3%2FSf4rpLDLqtzlKVhp1feVpOBIvQSC2AzfcJjdlC%2FFRXldt011R34w0EyP6ZlRryiwtZXVx8SRAg50OhO%2BEe3rIcY%2Fzgrr9X3a2vhEyH47YOLTJ49Aes%2BxmA5QXwqpaZXyy0Yv%2Bk3P5eB2dQ4PAOpyE9O7X73YQQMSmYaGUfkC2zhZhrkWo1nxTrxjmvM83gsyjSdkyJknZVebZ4wyMrpvwY6pgFAUhlEhcYkt1s16rjQP5eaIN%2BsfsmOWENplfhvk7J9Jg2vx1JrcrkbyYhm9nMAbslt28bCwW%2FwbuaXWEp27Vu5zMcYmrk0TnacjCcFLPICMplhjO2HkYVviNqRD3H84Mu%2BOFCA4Nn6y3vTtKP49x1gPI6wnhK9nJOxfUx6zfTi%2FaClB6WKo2opyCDtNufk08ks8rdQsXBOjGWnjIo%2BZcWNLoiTHepc&X-Amz-Signature=67adaca9aaf7b0d44a726d5ecc35a5a6dd5fdf23fc6eeea1dd9c70145d8cfc13&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
