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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QP2FMCA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrGJDhWOt2Vhi%2FgbqWeET8Z3pEHl5PMSAw0vVwEsTy8AiEAxWdAXW%2BdJfMa0ccXMIu7DVf9R8XdlB4JmQIyngQb2lsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8U%2Bom2gHcSmfG%2B1SrcA3QZFUWaXyWraN%2F%2FhD%2BXDNi4UiiO%2Bkmu23xVbQdg4e4J2%2Ff7rxfrtl9%2FLSjOAcKRg1t0SWOPUG%2FbAk1OQ1cwX%2Fw4IuGkJNVNRhLs7U2gJQJw%2BGlWgpJE0PtJ1PbpGVtlgNok23fPHNDNKLAhj9%2FqDV8KTLBzEcqGz9vpVBpW166053UJsfd16I2r8VO67TAXq8%2BsvmKmlz3M2%2Ba4GfOWsX1XKy4yMcZsv048UxOudk2%2BDgcMyMT8cvwZVudc8S9f8hvG3OxereT7%2FwKznuShDkiut6v0eg8avsd%2FzRarTFhh354ZMPEqqb8LlKtRcFav7zIQl8vDuaLbt0QMHtFk9ixuO%2BjT%2Byr4PXPo09RW%2BSm%2FkPiX%2B8Yne5BK6HnyQ4nIZ5Yfo8PpNxQDdw12eX92nDeSdFNI3tjozhdiTGi%2BUx67LjEIoNE5L7NQT0EklWbDMUKTfc%2BxwtI%2B6nccCQ2wxTKSE5X9Qm3wjFVMrSQHtUiUM4X7nrUEe%2FqQHHy3n8iJWGXOv4XmIwf4WyoWz5g7BleDcdg7pn6YLZn%2F2HTCpjYBdXt%2F585vEZN1lXvHfFuDn2g3flHNJvcPg%2Bmo3Wew2lGOfgCMKcgF93qvCrRwlOKZxQBjAzeA2X5%2BvPBFMPbIrr0GOqUBgS1w7lfCghJPwXLl4qDoGLY2531cqBGFlBmm5ZEaz3zDIK2P3%2FY7Ks7Z30Z7jAt1ZSJSLGL4qU2kp1rUZo93G8jboKhJNOnJ%2FGih7snHXF3J821LH4IHm8ixECgpjsnJV9qLLpHcRPRh6sDYwJUb%2FPuPE1ZZv%2Fk%2BTr2lAR%2BGOsF9uyXkAkPtMLWz%2FyHEbxMjrHJ0yX%2FS6abP46zqrwF4rzt%2BvnN9&X-Amz-Signature=745a93461a01f51b2671548ae2e119ffb0c22240282960cea4b113ab8873a53f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QP2FMCA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrGJDhWOt2Vhi%2FgbqWeET8Z3pEHl5PMSAw0vVwEsTy8AiEAxWdAXW%2BdJfMa0ccXMIu7DVf9R8XdlB4JmQIyngQb2lsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8U%2Bom2gHcSmfG%2B1SrcA3QZFUWaXyWraN%2F%2FhD%2BXDNi4UiiO%2Bkmu23xVbQdg4e4J2%2Ff7rxfrtl9%2FLSjOAcKRg1t0SWOPUG%2FbAk1OQ1cwX%2Fw4IuGkJNVNRhLs7U2gJQJw%2BGlWgpJE0PtJ1PbpGVtlgNok23fPHNDNKLAhj9%2FqDV8KTLBzEcqGz9vpVBpW166053UJsfd16I2r8VO67TAXq8%2BsvmKmlz3M2%2Ba4GfOWsX1XKy4yMcZsv048UxOudk2%2BDgcMyMT8cvwZVudc8S9f8hvG3OxereT7%2FwKznuShDkiut6v0eg8avsd%2FzRarTFhh354ZMPEqqb8LlKtRcFav7zIQl8vDuaLbt0QMHtFk9ixuO%2BjT%2Byr4PXPo09RW%2BSm%2FkPiX%2B8Yne5BK6HnyQ4nIZ5Yfo8PpNxQDdw12eX92nDeSdFNI3tjozhdiTGi%2BUx67LjEIoNE5L7NQT0EklWbDMUKTfc%2BxwtI%2B6nccCQ2wxTKSE5X9Qm3wjFVMrSQHtUiUM4X7nrUEe%2FqQHHy3n8iJWGXOv4XmIwf4WyoWz5g7BleDcdg7pn6YLZn%2F2HTCpjYBdXt%2F585vEZN1lXvHfFuDn2g3flHNJvcPg%2Bmo3Wew2lGOfgCMKcgF93qvCrRwlOKZxQBjAzeA2X5%2BvPBFMPbIrr0GOqUBgS1w7lfCghJPwXLl4qDoGLY2531cqBGFlBmm5ZEaz3zDIK2P3%2FY7Ks7Z30Z7jAt1ZSJSLGL4qU2kp1rUZo93G8jboKhJNOnJ%2FGih7snHXF3J821LH4IHm8ixECgpjsnJV9qLLpHcRPRh6sDYwJUb%2FPuPE1ZZv%2Fk%2BTr2lAR%2BGOsF9uyXkAkPtMLWz%2FyHEbxMjrHJ0yX%2FS6abP46zqrwF4rzt%2BvnN9&X-Amz-Signature=b95310898bb1df653318a9b5f23334d6b98a10c5ee488168e09295105e1833ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LLBFSLY%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXawdoz6izHjF22u0Qu%2FkswcW%2F8ElaIjUNRglYIqABbwIhALvhIf63syGJ1JcaCN%2FfyvvfQN29wIadr%2Bs3zim2M67aKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygbep1HyIGXoY87yMq3AOLJE%2B1wBYT9lwdOsxPgP58sibH5%2BN57DHNRVs6%2Fie4jfNpI1N6NJGQDZhMBemS4KsdhRtcTvMFQsmnF%2BbBfoCKu8VSQ4TODATp7YV8eHUghp9Z6ioClJkdylLsBIZuR25dQfNpvlYXPVVhPr%2FJWwDv5hWayGq26Zr965kM5ApzIe7mpa%2FuvCj8Eqc7qzOW7b52yy7Gc8L2P72CRs47tQInAKyEFwx%2BV%2FJ0lKH8euPlNk0TBqA0IwZAk5FVFG91RJVizksm4XAJ4jqwKwdUDymCNf97j7my1be11Yl1dQfqEuVjgn8taO0ZYbiL%2FduG2228GOAisLjzR8ubn2hPLN7aVE9O5pxyNvQg%2BjokANwdCZEs386vvwgjPRxxLKZtWYtZOsgBuOwqVtkRdotpQtWYze1s4XJBV76YT8rZXg4pz7w3EMJ2xWzVE66YUm%2FbHbVff1uDZt6LEQyQi2jSfhJCkzgycucikLrMyFlzBnOLTHJYjuN7fMEZ31u6Iu5NWpGqW68VqR7WdvNMVnGL627bI8PSPmJZ1PYmTbWGCdK9JViGsrHkvMz4zy%2Fb0yHN%2B%2BC7mAUZCWJy%2BbnypS39bNO%2FF34NJ2piCC%2B6L7AVTlJsPBaIWCmtCOPEIba1bTDgyK69BjqkAfi%2BpFaSj9SRNgVUzBFYeJqofePda7pX4bwgwTxDfaJi3rXDKx5ZrtXcwU5FXJIM2W6fc0GxXpWcFDVNUeV8xCLnwwbYGZ%2BhVpnaIoLMgVP7e0Vm9Dqs6hQQ0lnCEazhJILXwzOZ%2FGexy97O%2FZCAu0cBwDaMoyN5zS8q4DTqSimvy25Y%2FhUXpFQpxxHRgfkD739UJv5kD8Yvkc5S3NSTtS5M4F3x&X-Amz-Signature=54c6bd109a01c94feda2966bb4796bca80f4b66b33399b2f20d6973f780d16c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGXDMEQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdFdGb24xY%2FmpG0ShjKR%2FSrsasq%2FAzAL3RItlzRvZi1AIhAOzPfEKPNkSwpUtt7oaWcYbsmMRCk%2F87eW%2BYSfr2nDyQKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjadCydBFAUwqE%2FAYq3AN5q2X2r3VCJi8L60L5BpkVaVGc8D92zJqqiG3SnFYcWl1aPPsd3DkK3WJPr%2Fywpsu3NyZiH9i1sLCv%2Bu%2FnVKYjzC9P2KBOILHqfbri7pj9O2jz51mO9rFegQgRYbGztHQI8boXG9uJtOfHC64M5%2BNFuyBCORHwq7mEG4xz%2BhxRSk8GqYnJFFm0h4HVgfLqxINBk19OZ8JWhCUp9ExuO7uh%2B2GXW7hQ7g59Bp4wvD6Htl%2FeAzVspjDNCIykJ3nNw7HLyP82pQKas1T3B3Curzg01REv2BjMzLmISlR%2Bd4b%2FaemeTDlfCh1AOiYTABxZZPeFVnJMdyWF5KvOqqM3rbxR2fVG%2BBMYwulcB6vs2um3qLcct2MpXoC0v%2FOVMbdB%2BCEcy%2BnRMx%2B7qgsPivfTMXooyjGqHnGgSrVQN5rPI5c2IYx%2B18QAYAIe4obFinCDrj9HOHnesQncGm3tCy5zm8YcEmzXhNdy8AduLIRXyTNXSfp10QcmC36VKQ%2F76mogQDJW556IyJFXU6XKSJt1%2Forn%2FiuXC91g1bCaoF0Wpe6mH5eG92%2BICWGZQfVZOXPjm5Vr%2F3ElCjduN72lGx3z%2BkzaCE44Fp0U3RECUimY09g%2BIvx%2B0b49097vLfd3JjDmyK69BjqkARi1MejpKnV%2BA6HcooNJyOecA4bKolxgddEJLLR1r9Vst%2FMnQAvrt%2FnSrttEX0L6znbUw5x4gIoJcCgt%2FTUo2x3ssOxYXf57CS7rF6Fru9xIsMEVbWqpnOb2Mmv3PymzhSSAHm5dv51SgsKJNG6Muxko1FgOUK6untf06G%2F08Dhc97xHjqieQFiGZvdweOtQa8%2FJqUQfP4%2ByktPpeAFW405lxi3R&X-Amz-Signature=273d447d82ba16c7fb92e08305b98ff2db684d8bc73446965d887b6de6609661&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QP2FMCA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGrGJDhWOt2Vhi%2FgbqWeET8Z3pEHl5PMSAw0vVwEsTy8AiEAxWdAXW%2BdJfMa0ccXMIu7DVf9R8XdlB4JmQIyngQb2lsqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD8U%2Bom2gHcSmfG%2B1SrcA3QZFUWaXyWraN%2F%2FhD%2BXDNi4UiiO%2Bkmu23xVbQdg4e4J2%2Ff7rxfrtl9%2FLSjOAcKRg1t0SWOPUG%2FbAk1OQ1cwX%2Fw4IuGkJNVNRhLs7U2gJQJw%2BGlWgpJE0PtJ1PbpGVtlgNok23fPHNDNKLAhj9%2FqDV8KTLBzEcqGz9vpVBpW166053UJsfd16I2r8VO67TAXq8%2BsvmKmlz3M2%2Ba4GfOWsX1XKy4yMcZsv048UxOudk2%2BDgcMyMT8cvwZVudc8S9f8hvG3OxereT7%2FwKznuShDkiut6v0eg8avsd%2FzRarTFhh354ZMPEqqb8LlKtRcFav7zIQl8vDuaLbt0QMHtFk9ixuO%2BjT%2Byr4PXPo09RW%2BSm%2FkPiX%2B8Yne5BK6HnyQ4nIZ5Yfo8PpNxQDdw12eX92nDeSdFNI3tjozhdiTGi%2BUx67LjEIoNE5L7NQT0EklWbDMUKTfc%2BxwtI%2B6nccCQ2wxTKSE5X9Qm3wjFVMrSQHtUiUM4X7nrUEe%2FqQHHy3n8iJWGXOv4XmIwf4WyoWz5g7BleDcdg7pn6YLZn%2F2HTCpjYBdXt%2F585vEZN1lXvHfFuDn2g3flHNJvcPg%2Bmo3Wew2lGOfgCMKcgF93qvCrRwlOKZxQBjAzeA2X5%2BvPBFMPbIrr0GOqUBgS1w7lfCghJPwXLl4qDoGLY2531cqBGFlBmm5ZEaz3zDIK2P3%2FY7Ks7Z30Z7jAt1ZSJSLGL4qU2kp1rUZo93G8jboKhJNOnJ%2FGih7snHXF3J821LH4IHm8ixECgpjsnJV9qLLpHcRPRh6sDYwJUb%2FPuPE1ZZv%2Fk%2BTr2lAR%2BGOsF9uyXkAkPtMLWz%2FyHEbxMjrHJ0yX%2FS6abP46zqrwF4rzt%2BvnN9&X-Amz-Signature=f9fd71e423765ef10a1ca161ff218bc0d4ad5cd18b7633c3bc39cfb49ea0ac4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
