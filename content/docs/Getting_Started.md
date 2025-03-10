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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BKXOIF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBuTqnV2arp6Vsv1Gy3eFl3BPusqmzu7F7TfgCh9aF80AiEAtV8srTPBIZGGjdywsaA1OwiLr5DJkkBf2tZXxKmJwuQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGE0xmiZVC1klia5ircA%2BAkWyZtnBbVq0PcnqZV64AmCpdeoa6kRvQHF6QuzSS%2FzD%2FY2bA%2Fd6xV2LQPe6Pd5LHY5vpPwha4ubeKHkBfLN9F6lmfP0utNhAXYiRaok761VCedWtTqPmaf67UutI3cgpFPGvx%2BYq4ExsEaHBxhQc%2BqRIcf04kUa1L8HZB4bXDrEi0yZE3BLZ5Oli7z%2BtVNnNOYif160QrPlx7phmuVEynfBME1h0xiDwDL%2FITtu42oqnAomJnUyQDQdB7QsSGHwM%2FgsHuXqd%2FtQT2Hv3eq9TZczRTiEdK8p7VzL5w1sMckHxCXsugNIqV3s82reL0MocxbFg1VmVjntDGUWUlOaxUd1D7nboIfHE9bEQ9QWxg1Rgz6S2l5GjCfXYWYB8mUqQER8bwc5qXOaZa9nBWylqBN26RNj6tnB9gX9o5V1xMbMMWqlfkObmpjuxkHXNzNHozqW0xJg3R2By5ZrayEQpyKuCljDq3ckYEsUqTddBtQA4RcqUTnD799QGO3nslpwNXfKyzeOJ6TbVbLWbLxdfuycIrq87y80NR34KdzJRXFgRtLcM87s5xtGo9%2FfDVEoAirOvTmoNwXgqovs5aqElT7C9l26JSWW6Zgggd56a4MJsH13b7QI6UviyLMNqpvL4GOqUBXhvgqCaM30K0w32CcmPeW7aWS8e%2F0Jp2w6u6RBp3b2nrqsz9NgnB6ROtKyjcS3Tzohfgp533eW60pDo294lXZ7tmXrIQa%2Fr4PZtCC%2Bez3d9bRJrP4ieVaz320dFqlF6BGQsy7heiZOV4qrEH5vaHAQ33gSCtqiZmb3EEkxIx7RvmovFlZL45IDR4WPdP%2BHKtCp7Bg1GCLmjrqdrpNgpUC5XibfbY&X-Amz-Signature=0d6a6236f6b5bb49c28567d83fe74c7c9f26c22a7adde020c0d47cef265d4e89&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BKXOIF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBuTqnV2arp6Vsv1Gy3eFl3BPusqmzu7F7TfgCh9aF80AiEAtV8srTPBIZGGjdywsaA1OwiLr5DJkkBf2tZXxKmJwuQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGE0xmiZVC1klia5ircA%2BAkWyZtnBbVq0PcnqZV64AmCpdeoa6kRvQHF6QuzSS%2FzD%2FY2bA%2Fd6xV2LQPe6Pd5LHY5vpPwha4ubeKHkBfLN9F6lmfP0utNhAXYiRaok761VCedWtTqPmaf67UutI3cgpFPGvx%2BYq4ExsEaHBxhQc%2BqRIcf04kUa1L8HZB4bXDrEi0yZE3BLZ5Oli7z%2BtVNnNOYif160QrPlx7phmuVEynfBME1h0xiDwDL%2FITtu42oqnAomJnUyQDQdB7QsSGHwM%2FgsHuXqd%2FtQT2Hv3eq9TZczRTiEdK8p7VzL5w1sMckHxCXsugNIqV3s82reL0MocxbFg1VmVjntDGUWUlOaxUd1D7nboIfHE9bEQ9QWxg1Rgz6S2l5GjCfXYWYB8mUqQER8bwc5qXOaZa9nBWylqBN26RNj6tnB9gX9o5V1xMbMMWqlfkObmpjuxkHXNzNHozqW0xJg3R2By5ZrayEQpyKuCljDq3ckYEsUqTddBtQA4RcqUTnD799QGO3nslpwNXfKyzeOJ6TbVbLWbLxdfuycIrq87y80NR34KdzJRXFgRtLcM87s5xtGo9%2FfDVEoAirOvTmoNwXgqovs5aqElT7C9l26JSWW6Zgggd56a4MJsH13b7QI6UviyLMNqpvL4GOqUBXhvgqCaM30K0w32CcmPeW7aWS8e%2F0Jp2w6u6RBp3b2nrqsz9NgnB6ROtKyjcS3Tzohfgp533eW60pDo294lXZ7tmXrIQa%2Fr4PZtCC%2Bez3d9bRJrP4ieVaz320dFqlF6BGQsy7heiZOV4qrEH5vaHAQ33gSCtqiZmb3EEkxIx7RvmovFlZL45IDR4WPdP%2BHKtCp7Bg1GCLmjrqdrpNgpUC5XibfbY&X-Amz-Signature=655475aeda88db321d5d3730cb32abace83fd07171cd56c577b12d71cfd985e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SYPRZDZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHp%2BWPgMqcBAcp%2BeT1UaA%2FAsM7%2FdcvwIBCpA5j%2B%2FESfZAiEA%2BuqMc40GctIlk5IGiI4EMo32Pa2V7XVtdV%2BMwOCqszIqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4ukDdceoKreWwGzyrcAx%2BLY33%2F8l6NeiY8ZkU%2FWoN78mYj%2Beca7XuPksECU%2FDNF8cE%2FQZArjeLMykKqn%2FPPkRjIXOEZznjCCnpMfPCW0Yq3LyvJrCccQI4mXSYPfOtkS6I4MEIgf%2FV%2BWYj5XxGjffzkg7eOmdMWnZXH2YGdmwuoaIqn3p0eS3PsJIeMe%2FSeThwopmYf6dtAB4ovlRcpw%2Fyrz8muY%2FI%2F1IDW%2BACG71kmyhLiDedHXNLF424MmW%2Fj%2FaaYKJkTHMo18fVynDr8Vl4Ptly5w0ydk%2B5svMFok33tIxxQK8nc9yOT16i2kZoa8obHn6HbRtwdJ%2B4qWyVYo1zT%2FYsYiYopOmSNoWFHkUW%2FJJg3Z9iQYaDVMOXWzzynJ%2BQJOooMtrb2srSbUVDZU%2BN0UfWIP1fnrxWvDZ7RGCsyzxW9tV9ik7d7YLHR7IJRYr8hp8hM7TQk51r59zPxmJCmOoIa0p%2FEyGM86xsXvNK7yF7ENlUsEiRrbbl1HxkJpbeRyAL%2FGZgP6KhKheKjCTPGuAwiwX0Jjjy0cHYI7esy9G0tXjiBpb5VNIH8mumS7C%2FZgBwFLtWx8Afmkn89RjNNi2T21UJa2MdXV6TAbDvpl0%2FU5%2BqCVgl3P7TMZ0TaJ3%2B0NinTeZw3eEdMJKqvL4GOqUB8auaowdQ4YUOGgJ9iOayb6ToUVKEFDQA6L8sEDQ4MnZQSV3FrtQUHgYQ1unxbq3nFCGLwOQ%2BIVdmX9lzRLqsQvOQOCVP31t%2FhNJY4ZrSqkVIn%2BQVX1evs9AN3MQ8ivoTsLt5IvPYu7thB0lGfzEnKWcY4sCC764UXCMgP3WEbnhEmHcaWrC%2FYJxG7LQkDOJ%2Fa76TVdrAV4t%2Bx9O4u4C2mQb6%2Biog&X-Amz-Signature=e370d9cc86e1d55be627b6a43049c31c3dcacd3a61baccf33a8a1b4a21bcfa1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WYCNPKT%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGAuG8gLD00K7Pw4UU3TSniJNZUs%2FAGm8pHRYQi0A876AiATGDJqitM8nvJKaY%2BB%2FQlgLTHFjhISGiVCOsxYI7a0wSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCf5un1J0ESwiWMy8KtwDm7ykC8niA%2BjyjGmKaNcLJBdJ3c%2F%2FEv1H8LwEDWtnMv5Oh7mR6u6W7IpuIY%2FF6PU06Lf8DFVFIgNpGM2cjfrm%2FOTeBHcVo2%2FBZNIHb%2BdTY31vHU7Gg7zNu4pz6bSPY8w1GiUTFKVk17WDJqMltMain8NH0FQg%2FFgqLBhf18JmkCgsqpiBVeqJs3akQyXcE%2BPDvYRUP6btN9rm8m5Fzcp0IHU6pig18XgTHna5HB%2FIiCVQqBDsUfPVHODeVAsGydIAZVlP0zuCqZIjuRHn0xoFh%2BX421gYcEw0W0eSKddN5rAR2N82EYYLRjif69RBqJvkcMjaDkTIBN8jRALbT1lb0twthL3DAnlDQQqm%2BOQyePurpbSzuPyPZXcqLr5wE%2F3v6hwEcg7PVyvnKMIN3S8AL2y9ne3shyGlW%2FYaBOCW%2Ff3Us7UhSApU8X2whOvApbve25m%2BwMocCnd3Ljze9aHyh5LhiasTexIab35i4k6Pmse1Zdm9b4g%2Buko%2Bwe9VcmhdqByUwyzDTk4kOvYgA81wDncWaT0Gi0uqrazqRGHknHTXQlEYS0YhiQ1t9%2B0m%2B403OfWNsDQLdBUmFepRz5uFn8V5Gky635pvok4Wen6HqwPDb27a%2BY4opPFCrPAwkKu8vgY6pgHBg%2BpXFn4ffXwDowT23n%2BlqNi%2B5wOmwAvv5cRC%2FQlP7Atwtmo3awJrS3rloZRyeXo3xyVB4WK5U6fG%2FQj48xxeThBwBjhKKm3HsCEJSU9C2n2fDzPU8a2donY7x6VXAbZAhf57n%2FvnyiD2kkmq56YCXBOJealbJx7M9iPmmMe3klD6HI1buVt4KrsiuY5NKtrAytpDHE9A2iLrjWZXMrz9gzaGbvrP&X-Amz-Signature=935a5e847e89b13f37e2ec7a4cafcc8a7a316d1eb095cf6352923167faf6505f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BKXOIF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIBuTqnV2arp6Vsv1Gy3eFl3BPusqmzu7F7TfgCh9aF80AiEAtV8srTPBIZGGjdywsaA1OwiLr5DJkkBf2tZXxKmJwuQqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGE0xmiZVC1klia5ircA%2BAkWyZtnBbVq0PcnqZV64AmCpdeoa6kRvQHF6QuzSS%2FzD%2FY2bA%2Fd6xV2LQPe6Pd5LHY5vpPwha4ubeKHkBfLN9F6lmfP0utNhAXYiRaok761VCedWtTqPmaf67UutI3cgpFPGvx%2BYq4ExsEaHBxhQc%2BqRIcf04kUa1L8HZB4bXDrEi0yZE3BLZ5Oli7z%2BtVNnNOYif160QrPlx7phmuVEynfBME1h0xiDwDL%2FITtu42oqnAomJnUyQDQdB7QsSGHwM%2FgsHuXqd%2FtQT2Hv3eq9TZczRTiEdK8p7VzL5w1sMckHxCXsugNIqV3s82reL0MocxbFg1VmVjntDGUWUlOaxUd1D7nboIfHE9bEQ9QWxg1Rgz6S2l5GjCfXYWYB8mUqQER8bwc5qXOaZa9nBWylqBN26RNj6tnB9gX9o5V1xMbMMWqlfkObmpjuxkHXNzNHozqW0xJg3R2By5ZrayEQpyKuCljDq3ckYEsUqTddBtQA4RcqUTnD799QGO3nslpwNXfKyzeOJ6TbVbLWbLxdfuycIrq87y80NR34KdzJRXFgRtLcM87s5xtGo9%2FfDVEoAirOvTmoNwXgqovs5aqElT7C9l26JSWW6Zgggd56a4MJsH13b7QI6UviyLMNqpvL4GOqUBXhvgqCaM30K0w32CcmPeW7aWS8e%2F0Jp2w6u6RBp3b2nrqsz9NgnB6ROtKyjcS3Tzohfgp533eW60pDo294lXZ7tmXrIQa%2Fr4PZtCC%2Bez3d9bRJrP4ieVaz320dFqlF6BGQsy7heiZOV4qrEH5vaHAQ33gSCtqiZmb3EEkxIx7RvmovFlZL45IDR4WPdP%2BHKtCp7Bg1GCLmjrqdrpNgpUC5XibfbY&X-Amz-Signature=4c98c8eba4a43e16e52b32a5407fd358275209562684d9d214e325c201eb3e16&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
