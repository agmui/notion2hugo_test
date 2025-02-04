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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KA2ZJ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDF6KlxeFoBVvnBYVpH%2Bz25ETBwA7Dfv3FTyNzAnwMlsgIhALvMvfxiZyZwQ6r1GQw2mKYrFfazdp9729%2BoFKNm2GpjKv8DCDUQABoMNjM3NDIzMTgzODA1Igyz0cUIXo%2FrN2XhZYoq3AM34VjWkS9mcsiucA9NBjff4YaPFNPR1%2BGkxw70Vlx5V4vDj379ekWG%2FeI15apgGrvJQkkLW7cIU%2F%2BFSUUO1CDhQrb1GaYgq%2BRqeMjBdlq7gnTVsbsL980SZH7JjsDkfLdCmRuvGzRs79x7kHAXz%2BfwpjsFcekJP1VtJH6IxtlVwuhHtdBj14vydlc84JsyQQk8Pgxtmr520J0u6iYryv6%2B43Uq3mRW26f3q9gKUImNOgEpCOUCsFdzvCxK2wTuuEtrQN5Ze%2FG7vq8L%2FV6gvN4JMBzaKiQzGOwPt1cn8DXpn%2F6QEJSF9Gl1y%2F3KRxJLL0hYcQX8KkwSNOhxZ670noPQp15fX%2BHTGTUBjH0wiD0wUpdXNao%2BZYr%2FWaEQDP20DZB3GwArfPkl3bZ7cqJt58FaMlXZvxHy8e9xAJVRMe84mdyeanPK7G9TW%2BFO%2FcpuBjZeORIxk1zf%2B9uLRpbIc34Z9qrVwYBYCZtdK4XWXJwdwN3sks3qSWSTopoF%2F5fxX%2FPoMzT1m1ZS2gmzTHJt4tBXFTbLI2C%2BrvoFjB6iWhn9xA5sC7HKQ%2BxJ8w5GLwz6hVgEUwB8XnycPHFu6IqOLEA4JSp1WsHu2QkRqx3XXUfM9z5LBwCXTeVdRLyXbTDj3om9BjqkATjxN42AcOJeBLUFn6xlNDsmza61Jq2kgSYGlXc8ZaovuHe0hWKuZYlL6kKoMUoOngjN4MDYH0Ac88z%2FvZ7SEDSYAPzQuNGy2ZlBJJrYA%2BKPcPnqVkniBg8GUMMsHv4EIb2HD3Q7eTK%2Filsbt4%2FCwtsKBaOmbnjmPS3YdJfS9Uiw26%2B0XfjFhJmYR5%2FDfEJ%2F68RFusvFue%2B1kuX0cX%2BtHnsdWP1R&X-Amz-Signature=974fed031f7a89f4c8b22f6388b3f4b24977c4c6f036a2b9371836f82a9ef641&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KA2ZJ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDF6KlxeFoBVvnBYVpH%2Bz25ETBwA7Dfv3FTyNzAnwMlsgIhALvMvfxiZyZwQ6r1GQw2mKYrFfazdp9729%2BoFKNm2GpjKv8DCDUQABoMNjM3NDIzMTgzODA1Igyz0cUIXo%2FrN2XhZYoq3AM34VjWkS9mcsiucA9NBjff4YaPFNPR1%2BGkxw70Vlx5V4vDj379ekWG%2FeI15apgGrvJQkkLW7cIU%2F%2BFSUUO1CDhQrb1GaYgq%2BRqeMjBdlq7gnTVsbsL980SZH7JjsDkfLdCmRuvGzRs79x7kHAXz%2BfwpjsFcekJP1VtJH6IxtlVwuhHtdBj14vydlc84JsyQQk8Pgxtmr520J0u6iYryv6%2B43Uq3mRW26f3q9gKUImNOgEpCOUCsFdzvCxK2wTuuEtrQN5Ze%2FG7vq8L%2FV6gvN4JMBzaKiQzGOwPt1cn8DXpn%2F6QEJSF9Gl1y%2F3KRxJLL0hYcQX8KkwSNOhxZ670noPQp15fX%2BHTGTUBjH0wiD0wUpdXNao%2BZYr%2FWaEQDP20DZB3GwArfPkl3bZ7cqJt58FaMlXZvxHy8e9xAJVRMe84mdyeanPK7G9TW%2BFO%2FcpuBjZeORIxk1zf%2B9uLRpbIc34Z9qrVwYBYCZtdK4XWXJwdwN3sks3qSWSTopoF%2F5fxX%2FPoMzT1m1ZS2gmzTHJt4tBXFTbLI2C%2BrvoFjB6iWhn9xA5sC7HKQ%2BxJ8w5GLwz6hVgEUwB8XnycPHFu6IqOLEA4JSp1WsHu2QkRqx3XXUfM9z5LBwCXTeVdRLyXbTDj3om9BjqkATjxN42AcOJeBLUFn6xlNDsmza61Jq2kgSYGlXc8ZaovuHe0hWKuZYlL6kKoMUoOngjN4MDYH0Ac88z%2FvZ7SEDSYAPzQuNGy2ZlBJJrYA%2BKPcPnqVkniBg8GUMMsHv4EIb2HD3Q7eTK%2Filsbt4%2FCwtsKBaOmbnjmPS3YdJfS9Uiw26%2B0XfjFhJmYR5%2FDfEJ%2F68RFusvFue%2B1kuX0cX%2BtHnsdWP1R&X-Amz-Signature=3705d68d6071c1ed0c3d31d1fba14c671a5ce20284670cb06aedfc60af59e57a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2YAPL5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIB92zN2d0g3l6xujm6ON7H%2Ba33yV2OuuiYlUCgCXLtAsAiAVhK3z3IgdZxGFsXa15FbVoihsmUcT2kGVCTSkSEJc2yr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMinmgfVlWrtM45yB2KtwDJhc2K%2BkV58lhfMRXHjgpM93ZjW5haUriyeJ0HaVo6xszCbgVQGTuM0N7%2FmApVXriupHXdbDiOpO5FpFiwHg451OX6d45BxoZxAeHm1P1b5l5OzRTxYVgIRlm9RfGs1nROUh7XSqn9Yh1f4GzIeRkbe6MLRjFFYxm81S%2BU8mOrQUjhjZpWWWyCT8QodfOwqhONDqOk%2B%2FGygB1qAAL0zhDMm0FxKoPJfREmM6lK4Y88Wit5boPb0VvIv1QA4mCFMO2luzgCjvQTzW2uJs%2BcG9rgTCblH6vE5TOxNo23h%2B1NZGR%2FaRe%2FCvyNcfoR9ZpOApWk8x%2FtMlxmK6QJTuYHcwwfWLYN594lALYLOKhsPuteyT0aMt23SH2HJeuTAi1DdzSx9WMIGEbt30KkSfGr6N4Matz7uYzTozjIQv%2BCWjLM20GB7uBx%2Bxy4kP3nY%2F2bGlSoyOQBN8pzqbkFo6K26jpGaVJXFfCEN3p1wa0rU2L00melO6BNUpkJfaYL5Hf1sMQA9JSZFij46nUUbhl%2FlB8QcYonKwiW%2FgEAjc7XI4yMShbdbD2TJQYQmUth4Y9H64ZH9p7Fqtk8FKELYD8UhTzA87WVLU13dQngW8opb17KdA1KprtKRb14C8dD30wx96JvQY6pgGyABkeyP84U1KsdlGuzeSuw%2F%2FBZD0AgnmUCRE7B3XLM6ZaHJGsu58XTJWxme16WUmeU%2BRgiYgiKYRHa0c0agStO1%2FIY%2BNPs%2FhDI3Ws6q0eRD9enw3P8kaJTldac6B6gnFTj%2FH7N9ffxjuTng4ofuXXp%2BU9uGy9zdR4CAaWdjo3quskhn9MIeSI1X2p1NzSn8TbYmjMDlcy%2F%2BqyxfxASpGHdlUZiN6z&X-Amz-Signature=ca18aa861c8e981377786e6cfb7de86072fb440b989ef110fcec07e81ea9a219&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXBOLI2V%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHdgUuG1in4YgXmES1Ubl5r25VT90doCeFCiClxZfOi5AiEAySQZyWtscrkKdP4wJt1gcljejNOVTYkPefIq2yxSuEsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDLaXMYY%2B6MhD8455pyrcAxdp1ZKPQGFYbE7tNNwlfHSdCMhomXTwSp1l4RjOm94%2BMeVIVhNn8me44gRis61N7X3w5HZGUj7O4AgvbhR4LJEsQOMwf4yR%2FW%2FpMeAIGtIkUt4efFCffHltieEwfOvBQ6Z6m7rIa0r5HJYPLdpDULWFPU8W8nJAcfBHBeDz2zgWwigZCwVzZWhgJE7v%2BRWaIt5ZWkJPZ%2FMmuf%2FL%2Bn6K3JjylN9U9E7IlJEnqN79YTy0lPi3wsIUWGWWiy2LhDUI6nWeJukib4zpvHD3vS6c9pbOaXJMWBHM%2BjG9CPYJjl97XnQ195bhybxnBOX%2FnAeRhW52%2FUpGPy%2Bvt1Y9GFLIiAg5MDrhOtXLMR5o%2BS9Htfcs6DbUIsp6ibXP926GkKsTl5ZRdF1QvBjtfI4cFxuX%2BpfMwsfUpUUKqh%2BOJ5rA8EU4rerj7z2VWGLjl0Tk3%2BCX%2FBdGHJnO43KhU6uG1AW5N%2BueCoyKccqMgtjLGh75jTDgeYC%2BdKpH08hXDpcDTTOXNENHYrqolx5Epo26%2BXWEIX1NvIdw6HsCyFYvQzaCbDepu9XSEIWk2yCcVS6NlAxlppRHn0fhfGwspTV558elvktIehToahro37NRSkyB8tnanFZiMSh9vy2TyXnrMOHeib0GOqUBTbXo%2FqvdOueZgwPYZqPj6Jro1jSnPyeQrrS%2BcXKynZ9cwi%2B1QRA%2BRVvrvRrnukD1XhJof%2BqkjnoALem7bnh%2BMbCVcMta3eVKW3uiVZIY8H4BeEzP3PMWSrH98cMh4XKCE%2F3Hx8JC0jRO08cv3CEzLyBQ8srM8PEwrOwj%2B8n16e3qUCGfhdBPC3WJ3FxbtUwQeyxE9J8qclDFt1D08eAfSkEMFGoK&X-Amz-Signature=d291691cf4cce6fb624725476946bf319468b750b2ffdce33a7ed005acb51d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645KA2ZJ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDF6KlxeFoBVvnBYVpH%2Bz25ETBwA7Dfv3FTyNzAnwMlsgIhALvMvfxiZyZwQ6r1GQw2mKYrFfazdp9729%2BoFKNm2GpjKv8DCDUQABoMNjM3NDIzMTgzODA1Igyz0cUIXo%2FrN2XhZYoq3AM34VjWkS9mcsiucA9NBjff4YaPFNPR1%2BGkxw70Vlx5V4vDj379ekWG%2FeI15apgGrvJQkkLW7cIU%2F%2BFSUUO1CDhQrb1GaYgq%2BRqeMjBdlq7gnTVsbsL980SZH7JjsDkfLdCmRuvGzRs79x7kHAXz%2BfwpjsFcekJP1VtJH6IxtlVwuhHtdBj14vydlc84JsyQQk8Pgxtmr520J0u6iYryv6%2B43Uq3mRW26f3q9gKUImNOgEpCOUCsFdzvCxK2wTuuEtrQN5Ze%2FG7vq8L%2FV6gvN4JMBzaKiQzGOwPt1cn8DXpn%2F6QEJSF9Gl1y%2F3KRxJLL0hYcQX8KkwSNOhxZ670noPQp15fX%2BHTGTUBjH0wiD0wUpdXNao%2BZYr%2FWaEQDP20DZB3GwArfPkl3bZ7cqJt58FaMlXZvxHy8e9xAJVRMe84mdyeanPK7G9TW%2BFO%2FcpuBjZeORIxk1zf%2B9uLRpbIc34Z9qrVwYBYCZtdK4XWXJwdwN3sks3qSWSTopoF%2F5fxX%2FPoMzT1m1ZS2gmzTHJt4tBXFTbLI2C%2BrvoFjB6iWhn9xA5sC7HKQ%2BxJ8w5GLwz6hVgEUwB8XnycPHFu6IqOLEA4JSp1WsHu2QkRqx3XXUfM9z5LBwCXTeVdRLyXbTDj3om9BjqkATjxN42AcOJeBLUFn6xlNDsmza61Jq2kgSYGlXc8ZaovuHe0hWKuZYlL6kKoMUoOngjN4MDYH0Ac88z%2FvZ7SEDSYAPzQuNGy2ZlBJJrYA%2BKPcPnqVkniBg8GUMMsHv4EIb2HD3Q7eTK%2Filsbt4%2FCwtsKBaOmbnjmPS3YdJfS9Uiw26%2B0XfjFhJmYR5%2FDfEJ%2F68RFusvFue%2B1kuX0cX%2BtHnsdWP1R&X-Amz-Signature=0d88dfa43b993604259de5c288e7a6afd3c7bbd723dbe36e8bcd000b1a74f548&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
