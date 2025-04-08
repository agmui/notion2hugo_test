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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXXCRBU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZbrY75sZaoElUXG%2BfHTDfDM7PmnMXGVtrkR1Kf5KCeQIhAIQQ3l3qXb1fQtJq4%2FxrupgLWzvucQXpVMNQkW1xw8aKKv8DCH8QABoMNjM3NDIzMTgzODA1IgyCcPZYNl5dD%2F3Gln0q3ANht3N78mYPS852bjdI%2FkucRob6BjAoOhMUuif5P4udXDf2OuJBUFUGvTBJ79zwB7WXnVy4cJSP9Lm1VjzFKDja0rAC8u8%2BOKJxdkiWxXM78jAHwurVTAiwF4UT8VFtxsbuTr8C5uSfGdEf8CoxVqDUDzu7ES5uflrz5oxY4eLERDbVCGCJo4XUCfny%2BEXmMnqXZc83FCcIOwBC%2FFFCdh4rilojDEUST3uGlUHSqrnp7dEnUhXFLPOjcWMKjvBuCHjLUd95cgHMjvjOcotKi4O1oSCUfWm3p9J5QL%2Bf4iEN71WrWDBLMLMLdt3gw0AwjFjkCUilXRF8eThSp8NFtW50mYmB%2FAmtr87SFjekYHHnMllqh0JalpwZLszOuQO63wJxNRWIF0gto91IcddSnundl7v7Xl%2FMPFADBuuHqc9FOa%2F82K8bISWlZRziKmvjWWYQAI4pXqFtM5p6NmD8fov8RIlVGwuXfZvbru4F7i7c%2F8FYvnlArzcQAXfoCyOcFZVXN%2BaImSwc8uHmWJvzZPDcGBEQZEfePg%2BdC7lHcMPXXZFaZNxIV5hbXDFmMGKGr5VQs7vkCKQSYRMPZYqAZiNXo6cHgnHqfnXUU8cch0vjEEQrcfkBQLkZOodYGTC3wda%2FBjqkAWCeIcDrB6Ywc2anR4ElBFCGS2dLbKnkeLiylWcjo2BYgj55sYt4M9S6ugWx%2FqwgxWj5XiCP6tGpy%2BlSH4SCz%2BTopJSempOh3F3liLMent1EdiXI2fTCEB%2FQvzp7RnpZDVu5dQEhkWPEJSRnOJ%2FTeSMPlrq1V8UcOlDAx0YNIGa6YriFkNXDmqZKBpjcJaJMqcBfQqb4FQlTev4QJs%2B338tcqE2b&X-Amz-Signature=9a94ed15e946577e3ea574a2ee77e9ab3da06471ee94d4ac83c788d1118e9f91&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXXCRBU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZbrY75sZaoElUXG%2BfHTDfDM7PmnMXGVtrkR1Kf5KCeQIhAIQQ3l3qXb1fQtJq4%2FxrupgLWzvucQXpVMNQkW1xw8aKKv8DCH8QABoMNjM3NDIzMTgzODA1IgyCcPZYNl5dD%2F3Gln0q3ANht3N78mYPS852bjdI%2FkucRob6BjAoOhMUuif5P4udXDf2OuJBUFUGvTBJ79zwB7WXnVy4cJSP9Lm1VjzFKDja0rAC8u8%2BOKJxdkiWxXM78jAHwurVTAiwF4UT8VFtxsbuTr8C5uSfGdEf8CoxVqDUDzu7ES5uflrz5oxY4eLERDbVCGCJo4XUCfny%2BEXmMnqXZc83FCcIOwBC%2FFFCdh4rilojDEUST3uGlUHSqrnp7dEnUhXFLPOjcWMKjvBuCHjLUd95cgHMjvjOcotKi4O1oSCUfWm3p9J5QL%2Bf4iEN71WrWDBLMLMLdt3gw0AwjFjkCUilXRF8eThSp8NFtW50mYmB%2FAmtr87SFjekYHHnMllqh0JalpwZLszOuQO63wJxNRWIF0gto91IcddSnundl7v7Xl%2FMPFADBuuHqc9FOa%2F82K8bISWlZRziKmvjWWYQAI4pXqFtM5p6NmD8fov8RIlVGwuXfZvbru4F7i7c%2F8FYvnlArzcQAXfoCyOcFZVXN%2BaImSwc8uHmWJvzZPDcGBEQZEfePg%2BdC7lHcMPXXZFaZNxIV5hbXDFmMGKGr5VQs7vkCKQSYRMPZYqAZiNXo6cHgnHqfnXUU8cch0vjEEQrcfkBQLkZOodYGTC3wda%2FBjqkAWCeIcDrB6Ywc2anR4ElBFCGS2dLbKnkeLiylWcjo2BYgj55sYt4M9S6ugWx%2FqwgxWj5XiCP6tGpy%2BlSH4SCz%2BTopJSempOh3F3liLMent1EdiXI2fTCEB%2FQvzp7RnpZDVu5dQEhkWPEJSRnOJ%2FTeSMPlrq1V8UcOlDAx0YNIGa6YriFkNXDmqZKBpjcJaJMqcBfQqb4FQlTev4QJs%2B338tcqE2b&X-Amz-Signature=b3f33ab13725ef5cdcc964d1a53d4cb939cb5bb483e25573236240437ff2505a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3MTKPDB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGKfjJ7Sg7Ph5C5zaQ4r%2Fnafxf24JrhcLOXFCbr%2Br5ckAiEAsLyCxf3F0eY82FulxR02EuA7u6weeXyx3NtFEU4e80gq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNggy1VGShKbqS77YCrcA9IzPRPbyzSU8GLm9ttpznOIRCJso3%2Fj7Bodl5trp27rDgFsCzFxsYu5vdxU2TTYGGSC6Nq%2BnIKl9Ni0cYt26C7RvX0ja2hY%2FQVs%2B7kHGPpwYDjKMn4S2Q3sios7nMqeSlHNAUNH2Mm7LrK3uq2eX%2BlL5mGCSasgjShlPm3xxG3pMyzFy8MZFb%2BNfT0rR3glrRj0A%2B%2BASKHP9FpCksw5P3NEmOXA%2BXLWd4BmOkByY%2BZg%2B6l7oKujl2dya76tVqj27bhtTxoGk5SnlquXQOlUUDCdtBpwyVacRdYZwljiL2%2F55MUiih%2FhDhFla3bCKeTZDMSFb3kl4UVWHtPu45M3nlzr9kHYOt6Y75QMYn6podX6OEM9RMCF%2BFrzivos%2Bef0TpyTu7G5BMj9IGbIy%2FXuk0hhgK%2B7d%2BXicINHWYF7Ibu7HFeI9CRTC22WBB%2BWxrjOfYVZjP1jL3lwu05t2GCVrZR38kizVgwmjEs6GQMh03ECcq4kIdexHNd7n558tTizk4%2FjSKQ2PpGrej6zbeMWo9g79zC%2FKFlrppx96M1%2B5Ezs3Zhx2NwJTWxgHr1pu%2FDfm%2Bb2G3HCrh20GRW6r9QFX4zxyOweV0Ko2X%2FLyKxpZGK%2BewnpcnNonlgtzjmTMPDA1r8GOqUBH6%2BX45tSLg%2BAUUxNW3Uo2JZ3lVTglBCMEaMJNKFreRbJPQJO8ZpwC1Wu5xl%2BjqjBNAa2wakb6VxU1DZ6qaskv6jJFvreTxbneU0kG7OemE1MTtPSuT81X2%2BUnn6c9BZNb1UMJrT7PPa6qZTCGhH%2FGzj81eGb4gKYRHGCiFfxxEMf8NZO9A0OsAk8LoifFMnbiiuZ9BXqtG8NH3%2BxIMDUm3Up%2BA3x&X-Amz-Signature=44fdb46499648e3f9efbbb375dc079228c0ddc4adcd6ede9965a39b9653e63d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWUFEW73%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDeUvj23X4zmtoxNlJk%2F%2BCLNnOOmXclvKIgu2jdnavSCgIgJfpRDC8kB3rNKTtAokXxXSSgTSOtUd9kAAxoHBcl7%2Foq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN8QH30bAljbdaDSlCrcA4Fw1Q9YXqn0vRmcnfploEE%2B1qEOUSmzvyM7sog4P0CyI55QGAUK%2BjspBaPoVeOKYkNeeNzrVaaaeZJ8oG0YQrIxNPidGr3k78h10Xm8Eq6983HQvsB3XSsoRvyCf4867LLlKH4kVtgmPIcryeNd54N9UINY036HY367PDUAMjmMgOKQtCsd42vTeVf0V44YgnZKEPyGn4%2Bo8Wt20kYIsNjtLJPVR2fXumfd0Rn%2BNmrGZOueJgsOyjxHc4QrnK6BoRoof9zSTS967j%2BMzz2Jo2CK0u3Qw3FSbkCnwpZOplu%2BRPbeBkbW4cWjXgcR7oHPdzjur%2FAGoaXhTMSkbXibjgWoF7Lgd3BV%2FDPuM5vXrE92UydXPmbS6QAFbii7lxFD%2BpFvpYuG02VxEXTN3LKttXjTpJFkN5udxPQA5%2FgSu%2FedyUSelfDZw836eIMi40U97MIA2VPjZvYmRWRSdAePxGDlZAi9d%2BlWJbFp5W2Qr9Ha3414H174%2BYEDtxa48Hu4BVwQTiXNZGwmCNhe%2FhpCqMIe5Xl8AZDAkqlRLN%2F7MXsdrWzsBqqrOA9gWl%2BD1IrHWnzeDkoYt9i3c%2B4zhdLnMFUxojIeshLfQfrrWRVahmNZNDVc2IjdinFBREgPMNzB1r8GOqUBl%2FNoX0IkiSMtRICPL%2BJ2d%2FcKGqviLb9I%2B%2BNNAybWhVFNywQTXiVaqERa5M40pDORdF7o15Bf7v89VkOXbj42xQFCdqxOi45u%2BKKO0jvnTOFBt58Gjk95mqJDEeHEv6OrBn3%2Fx1X9zNpqh5lM%2FUwAgDr1ad9KmAHCHg9E%2F0CXsVCKoGIy%2FbayCuRMcTkvVzkEzTI2NeDmIThRM5yenRRk5w6pHPw4&X-Amz-Signature=375db166ae57fcafd138a665708970dc8dca2e179c27a952b5d3320ac64a256a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OXXCRBU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZbrY75sZaoElUXG%2BfHTDfDM7PmnMXGVtrkR1Kf5KCeQIhAIQQ3l3qXb1fQtJq4%2FxrupgLWzvucQXpVMNQkW1xw8aKKv8DCH8QABoMNjM3NDIzMTgzODA1IgyCcPZYNl5dD%2F3Gln0q3ANht3N78mYPS852bjdI%2FkucRob6BjAoOhMUuif5P4udXDf2OuJBUFUGvTBJ79zwB7WXnVy4cJSP9Lm1VjzFKDja0rAC8u8%2BOKJxdkiWxXM78jAHwurVTAiwF4UT8VFtxsbuTr8C5uSfGdEf8CoxVqDUDzu7ES5uflrz5oxY4eLERDbVCGCJo4XUCfny%2BEXmMnqXZc83FCcIOwBC%2FFFCdh4rilojDEUST3uGlUHSqrnp7dEnUhXFLPOjcWMKjvBuCHjLUd95cgHMjvjOcotKi4O1oSCUfWm3p9J5QL%2Bf4iEN71WrWDBLMLMLdt3gw0AwjFjkCUilXRF8eThSp8NFtW50mYmB%2FAmtr87SFjekYHHnMllqh0JalpwZLszOuQO63wJxNRWIF0gto91IcddSnundl7v7Xl%2FMPFADBuuHqc9FOa%2F82K8bISWlZRziKmvjWWYQAI4pXqFtM5p6NmD8fov8RIlVGwuXfZvbru4F7i7c%2F8FYvnlArzcQAXfoCyOcFZVXN%2BaImSwc8uHmWJvzZPDcGBEQZEfePg%2BdC7lHcMPXXZFaZNxIV5hbXDFmMGKGr5VQs7vkCKQSYRMPZYqAZiNXo6cHgnHqfnXUU8cch0vjEEQrcfkBQLkZOodYGTC3wda%2FBjqkAWCeIcDrB6Ywc2anR4ElBFCGS2dLbKnkeLiylWcjo2BYgj55sYt4M9S6ugWx%2FqwgxWj5XiCP6tGpy%2BlSH4SCz%2BTopJSempOh3F3liLMent1EdiXI2fTCEB%2FQvzp7RnpZDVu5dQEhkWPEJSRnOJ%2FTeSMPlrq1V8UcOlDAx0YNIGa6YriFkNXDmqZKBpjcJaJMqcBfQqb4FQlTev4QJs%2B338tcqE2b&X-Amz-Signature=0f73e6511155e19edc0c8adc7a7efafa00adfba5894962445f556bec98b2e0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
