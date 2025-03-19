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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWIGSUS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC6hp%2FrbjsCY8o3QTfIIV%2Fxr46BDOj7OX9nnBrYdlE1LQIhAILf%2FR6ySTw9%2BQYUYlxtNZm5jcsUtcCgcf81aXnQlqrrKv8DCHcQABoMNjM3NDIzMTgzODA1Igyc%2BmOIE79rolX%2Fat4q3AP6prNjgXxAJAddHG0f5UprzBJljP3Fq2klermZKK8KU%2FLjEE5P2E3g4YneYu%2FlItc%2B%2FiBfUhbtg7Rem%2FhWaNKnBtKlqvCRVSBU6sD%2FHHdadHLudsPCar%2BLC1CuhFXqOi4UxvGqg713ayC%2BLUtc%2BE91NMePkkicmNvAio6U85yIEitNOq4XGjUT52DTzDjilbyTaG5rSI4ooeEKMhVQpSEEU%2B6uP7oxziF4xU2lq3UnUMFKnxMlDWwR7tBXOsh%2BDlihdm6EvGdr%2BB%2B5ilE8HDS4iyVcG7H%2FVZ2X8weEJ1ssJ56ZY7JJurNJdsDTXEfzGXPT8WaXXjEcESsh0ruwInA3K%2Fc1vD4PtWcKBf42Hcc9ysfNqEUf3pynhD%2FdG6L25j71nRpAyzw01VwX%2BywyLRFZFGXbPHrwhLPII7cLAmuEpGjSHQYi1nmb1tWtEIKG1vUPaDc97KW%2BQYGs29nO9170zWzubieDLZ6UXS0dgRjrGuewJ35PJ4B25aitGqIgt%2BvJ77M8%2Bizu9WHqI5JmPggSrLsfB684kAIYw1OP9dMra7BngGjCGDKp4gNywl5So9zzR1Gr6Bsx5eo0o1sm1vt3pqfojMVH1iMJVtEupu0iYWXYQAcNSFDu%2F2NykTD8neu%2BBjqkAVHaAA2%2BmFBwPGP9rh2W%2F9b0qC2uWgRDCEz8ZJRUpeQb%2FwnNoX1Glg9ZLrIu0AOKJIvHQeDL2iIMKwIbs8Sdk7BhRdQYa1ucTvd3fOhRoEnd2ZrVmGQ0kMpzlfUhRoq7YahEq9i2YT992IYsMF9YMUDVH%2BtwQASKd%2BKFYpjRMN1sZ4%2FxGxO3gwMhpyDAEQGjUviHfdM0VHSS8f6QF%2FMawSGEA5Bv&X-Amz-Signature=fe4d86fffe6dfadf9dbdbadf4fdd2ecab57392392fd3f30d296b90354140bbcf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWIGSUS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC6hp%2FrbjsCY8o3QTfIIV%2Fxr46BDOj7OX9nnBrYdlE1LQIhAILf%2FR6ySTw9%2BQYUYlxtNZm5jcsUtcCgcf81aXnQlqrrKv8DCHcQABoMNjM3NDIzMTgzODA1Igyc%2BmOIE79rolX%2Fat4q3AP6prNjgXxAJAddHG0f5UprzBJljP3Fq2klermZKK8KU%2FLjEE5P2E3g4YneYu%2FlItc%2B%2FiBfUhbtg7Rem%2FhWaNKnBtKlqvCRVSBU6sD%2FHHdadHLudsPCar%2BLC1CuhFXqOi4UxvGqg713ayC%2BLUtc%2BE91NMePkkicmNvAio6U85yIEitNOq4XGjUT52DTzDjilbyTaG5rSI4ooeEKMhVQpSEEU%2B6uP7oxziF4xU2lq3UnUMFKnxMlDWwR7tBXOsh%2BDlihdm6EvGdr%2BB%2B5ilE8HDS4iyVcG7H%2FVZ2X8weEJ1ssJ56ZY7JJurNJdsDTXEfzGXPT8WaXXjEcESsh0ruwInA3K%2Fc1vD4PtWcKBf42Hcc9ysfNqEUf3pynhD%2FdG6L25j71nRpAyzw01VwX%2BywyLRFZFGXbPHrwhLPII7cLAmuEpGjSHQYi1nmb1tWtEIKG1vUPaDc97KW%2BQYGs29nO9170zWzubieDLZ6UXS0dgRjrGuewJ35PJ4B25aitGqIgt%2BvJ77M8%2Bizu9WHqI5JmPggSrLsfB684kAIYw1OP9dMra7BngGjCGDKp4gNywl5So9zzR1Gr6Bsx5eo0o1sm1vt3pqfojMVH1iMJVtEupu0iYWXYQAcNSFDu%2F2NykTD8neu%2BBjqkAVHaAA2%2BmFBwPGP9rh2W%2F9b0qC2uWgRDCEz8ZJRUpeQb%2FwnNoX1Glg9ZLrIu0AOKJIvHQeDL2iIMKwIbs8Sdk7BhRdQYa1ucTvd3fOhRoEnd2ZrVmGQ0kMpzlfUhRoq7YahEq9i2YT992IYsMF9YMUDVH%2BtwQASKd%2BKFYpjRMN1sZ4%2FxGxO3gwMhpyDAEQGjUviHfdM0VHSS8f6QF%2FMawSGEA5Bv&X-Amz-Signature=81b9c9ea26203cbe8fce6f5d2172d0b2446dd017417b5cf1f390871b8a8b03ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC4I4C7L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEv0lFv0RCR39Wp7TmHAC9iRszuLGu%2BUWJWw8K94ZLS1AiAz93BtUL0S%2FAPEi4yXBPDqr0vIrEfE88Mf%2FzCdmGy8hir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLjMW2vSgno7Jz%2FbuKtwDon3vqrlmAbCb5zxwd8cYU45BTHGH3wsOLWPLj7GcYRK7N8SKuDziLi3zo5KDRvzLZL3ePPGTIqgTKZpjcCAEIb%2FR%2FDGho5CxfOj7j1QADP6yWZ67ZtA3Kkt2nUGw6OBKqlaMkK%2FVWeD0KXHUf38Np%2Fdzj8Ha7bgO3RXFpgwtQkeBhZs8Xn2K%2FbTfSnp5G9Fygj1mgWRdgtlkkmJSJ1ysZu6ABddVOfhiXNa00kjWjL%2FK%2Be2%2BafvWTndFRJ%2B858dPaIESjR%2FrsY2ihnID%2FLkmPWrZl6jWEj67CIAdRhiGvpl7Cmq2mDwbtvyDjuf6JrtkKuCM8QBCtZae9yRmKaeldYppNp%2BiHaB5XAz17tAOl0lfLa5t3eJlg2TZ56H7Wen1RcMrwSZKA85tm%2BgocE5cH7k6VzLq%2Fo9YKCgMidnzQH3HJhEnl8vo%2BxJSDYYQNYFohFyJqjHwtozSIBkTHivIwMkD0BNbsJ%2BDjewT2EvWvli6oUiTQPWavJhK99IJ%2FlE3fS5QzyGMOLCCrVfGFLxjvqVGFyTyhwpIn3a%2BERBACTMN6e4Bo65eJdMfDmH%2FvCz9TZhnZ5NaC9SHN8wApPgOq3BNIOnJ1YJbDSBRpi%2FLcEyHHnJinFDhdtitl1Qw953rvgY6pgFFbbs623I6M56oHdMXLmz5ajWyS9bRqwa49tVXdngki4FqTeQf0bM%2F9f1%2FAkhur5dAiDNm67o9Op4UT2qoHm3Bv51WK2DriD3Z%2BelWWUAU5gMLAWra2X%2FnVGpv00suZDFPWOTXUu0AjbeVMS5aPQj0PEkfqgZ3QaDWNtkNjSxwfoV7LlxN9rDprT4LI8HdORaFMuUoXapXmQE%2B0mdMOm9nvjQTXzne&X-Amz-Signature=9b92443a50507ccbacfa6a405f834828e9d2af585f9d50122ad80767431de239&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFFW7NDZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEhcJ5cPXGw83uGRUYQ65XHnl81eb63Sg3hPP6gcrlCQIhAL4pZSoPq2x1GctwPdjMkGajKshSkVuRp4E9kaZr0IjYKv8DCHcQABoMNjM3NDIzMTgzODA1Igxh3UEhUMu3zX8HZHAq3AMt9aciVltd66Zjsi4ORcdne2vCLLkIkjSL25EF39WN2%2Fw9REbK6JF1yZjVsF6%2BGKcdWeGiAovpPUDa09wmMBGzkSbY%2BYvlTZboUnfMULRgjW2NAq%2B27RU4dbtpXGPzqjwqRhpPyJfTb4NhUw%2BkfPpDhxIY9Rs8Rdh0cBMsv9WpFG%2Bj1QzLIpKNnvBmBs7jRPoKviRn5tVa4ltjpSgmothDiw47fXDJsAG6lpBViOcGq7Bd758D8cmgLVx6pIxXc%2F%2FbMj%2B2CEsmGjUFDNSIokUxAg%2BYU5bL7Zz7W8Xdxtvu5ConnkFmcrVqdcVFf38sYtU8KDmSSIJXGC0K9wLGTByh8ruG14PMJ4B9UoAPnJ5r21BRgmzUWUF1BxbFWt%2B4C%2F8XzJf43QWI%2B%2BkImz5G77kwfKKs6xcwfKEO3VKWK2asOYrp9q7Hlc6ArCJvk6G2iLoa9G958xqXbMQ7Uvz7wuSqS2kEZV1%2B12iIlPZAXo2ugM917Gmd4FpH1LS462OgTw9%2FqqeuQD6IsEBrlPfLrXHJi1MQF65bmD0hFVj8%2BjLdawTxgH7L8vpNFgu9FZdD7g0krqP4fAHB9kDEtSfX6Cgto7t2Ym%2Bdx9q6IYm9J8P%2BrfIbNrVcGZKjTyKDBDCOnuu%2BBjqkAZ1mCXpfJO9O15adhwFEXIiNV7EYyfvZw9pkSr1LcQK5GhfdtVSJ3wzRGjkICHjEoGGufQ2R3oLqm4YDJy2SlNdD99UOzX%2F7Gf5EftgoqsSVspchKmuF4zlcaU84IKHT0UH9b7taKJ2MFrV3AZIT6%2FJZJ3dhti4fy8M5YrvJ%2Bxzw8MYw9eGgLM2fKkEINUyJwj%2BmAKXhKERmCywCEnVDYzTpteCm&X-Amz-Signature=2cd0a4e449ab5be335f7acb01c372d3ada2f5e78801aec035bb38f9775c182bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWIGSUS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC6hp%2FrbjsCY8o3QTfIIV%2Fxr46BDOj7OX9nnBrYdlE1LQIhAILf%2FR6ySTw9%2BQYUYlxtNZm5jcsUtcCgcf81aXnQlqrrKv8DCHcQABoMNjM3NDIzMTgzODA1Igyc%2BmOIE79rolX%2Fat4q3AP6prNjgXxAJAddHG0f5UprzBJljP3Fq2klermZKK8KU%2FLjEE5P2E3g4YneYu%2FlItc%2B%2FiBfUhbtg7Rem%2FhWaNKnBtKlqvCRVSBU6sD%2FHHdadHLudsPCar%2BLC1CuhFXqOi4UxvGqg713ayC%2BLUtc%2BE91NMePkkicmNvAio6U85yIEitNOq4XGjUT52DTzDjilbyTaG5rSI4ooeEKMhVQpSEEU%2B6uP7oxziF4xU2lq3UnUMFKnxMlDWwR7tBXOsh%2BDlihdm6EvGdr%2BB%2B5ilE8HDS4iyVcG7H%2FVZ2X8weEJ1ssJ56ZY7JJurNJdsDTXEfzGXPT8WaXXjEcESsh0ruwInA3K%2Fc1vD4PtWcKBf42Hcc9ysfNqEUf3pynhD%2FdG6L25j71nRpAyzw01VwX%2BywyLRFZFGXbPHrwhLPII7cLAmuEpGjSHQYi1nmb1tWtEIKG1vUPaDc97KW%2BQYGs29nO9170zWzubieDLZ6UXS0dgRjrGuewJ35PJ4B25aitGqIgt%2BvJ77M8%2Bizu9WHqI5JmPggSrLsfB684kAIYw1OP9dMra7BngGjCGDKp4gNywl5So9zzR1Gr6Bsx5eo0o1sm1vt3pqfojMVH1iMJVtEupu0iYWXYQAcNSFDu%2F2NykTD8neu%2BBjqkAVHaAA2%2BmFBwPGP9rh2W%2F9b0qC2uWgRDCEz8ZJRUpeQb%2FwnNoX1Glg9ZLrIu0AOKJIvHQeDL2iIMKwIbs8Sdk7BhRdQYa1ucTvd3fOhRoEnd2ZrVmGQ0kMpzlfUhRoq7YahEq9i2YT992IYsMF9YMUDVH%2BtwQASKd%2BKFYpjRMN1sZ4%2FxGxO3gwMhpyDAEQGjUviHfdM0VHSS8f6QF%2FMawSGEA5Bv&X-Amz-Signature=9dd0a19b37bfe724a8447d710270c7eef9f1247fe42442573b6b33fc0c4dad94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
