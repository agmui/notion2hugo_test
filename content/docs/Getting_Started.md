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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOY6TMV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCCyWpRArmwPgHG3tkfAu1HG9A%2BrMAAv9MpJjxDU67KuAIgKRJobiFsxzb8%2B61M8Eh2c3hGn%2BsInN%2BAB3XCsOj%2FI5wq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLaZvYY6VbABdkj02ircA4Dehn2vhVSY4oIgir%2Bx6yIx7LUHZS8KbSQwM6%2B1G7UoAcBZSSBzmnUswkXXUPcv4h6iNzHpcxkRbj%2B08M3j3D38EFNg8aVj3SgyI%2B8IjoGH1AHm8uTEFpFAbJokLEW7MUDDuDwU%2BDbTSMd95CGGKKujamp5AzaI4x8uYX0Fm%2Bhx9WA0kzSutTgLR8G595HyexRJPmuL%2F5yn66l1yiR8h00%2Fx1OU1Q5bwm1XJLytTLF3Wf4l9SPyI56WPzr43LjfH99aJlznC1EUBdiAgb1s2sBSJHj98mCZX2KLD1mL0LeYQfBB563oBy0k89mIRL1%2BeuY7sIFnthV%2BIP5niUg8FsiC2v%2FaarcOCTfe%2BYvi7CDvf%2BQ29GdkYGDwHCExi4bUA2ixvRv%2Bt9wJK%2BCOgQDfh3kxTNufqg1zpyQlv7nuBQd6jOyBsVSzOJ6PjhEs722Dppze02tCUXjnjHPV3ys%2Fc3PY61INb8lIn%2B51ws2LqLMd5Ghz6Zln8o1izx2XOcYdKe9EqW4CCwXTHKDtzvCmL%2BnZ%2BoJcOTjoFwLacQiVOGLzO5z79huH1cMQ4JYhqmXNofCa6z%2Bcf0QltC27L39LLjaXuso6wMV6JtXDH1z7xUnzlF3GCjyIdM1tBZ09MOjY7L4GOqUB0VUMnnvcfldtrwuZS3rMYG7SM4UsKh28pmjLhqsftev0oGi3UdhQFHloitKzWUgog05u05rPcbJQbP5bWbn0CmFEGP76R6a5mcqkZvnyuTb2rVKvFSm4ouFq6CbhsFPuT%2FD2F%2F8AFZhpRqj87Cgk3FOGi3IxUtPRHvy2k5i0pbJJtJrPtt4Gy5bWvDwSuTmgwmn1wTiS%2FhOfbGIlS%2FKdM%2BIlpnzw&X-Amz-Signature=d205c39042989e456830041c3a30d6d5bbec0c588610322f7ae5eebd89a0f4eb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOY6TMV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCCyWpRArmwPgHG3tkfAu1HG9A%2BrMAAv9MpJjxDU67KuAIgKRJobiFsxzb8%2B61M8Eh2c3hGn%2BsInN%2BAB3XCsOj%2FI5wq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLaZvYY6VbABdkj02ircA4Dehn2vhVSY4oIgir%2Bx6yIx7LUHZS8KbSQwM6%2B1G7UoAcBZSSBzmnUswkXXUPcv4h6iNzHpcxkRbj%2B08M3j3D38EFNg8aVj3SgyI%2B8IjoGH1AHm8uTEFpFAbJokLEW7MUDDuDwU%2BDbTSMd95CGGKKujamp5AzaI4x8uYX0Fm%2Bhx9WA0kzSutTgLR8G595HyexRJPmuL%2F5yn66l1yiR8h00%2Fx1OU1Q5bwm1XJLytTLF3Wf4l9SPyI56WPzr43LjfH99aJlznC1EUBdiAgb1s2sBSJHj98mCZX2KLD1mL0LeYQfBB563oBy0k89mIRL1%2BeuY7sIFnthV%2BIP5niUg8FsiC2v%2FaarcOCTfe%2BYvi7CDvf%2BQ29GdkYGDwHCExi4bUA2ixvRv%2Bt9wJK%2BCOgQDfh3kxTNufqg1zpyQlv7nuBQd6jOyBsVSzOJ6PjhEs722Dppze02tCUXjnjHPV3ys%2Fc3PY61INb8lIn%2B51ws2LqLMd5Ghz6Zln8o1izx2XOcYdKe9EqW4CCwXTHKDtzvCmL%2BnZ%2BoJcOTjoFwLacQiVOGLzO5z79huH1cMQ4JYhqmXNofCa6z%2Bcf0QltC27L39LLjaXuso6wMV6JtXDH1z7xUnzlF3GCjyIdM1tBZ09MOjY7L4GOqUB0VUMnnvcfldtrwuZS3rMYG7SM4UsKh28pmjLhqsftev0oGi3UdhQFHloitKzWUgog05u05rPcbJQbP5bWbn0CmFEGP76R6a5mcqkZvnyuTb2rVKvFSm4ouFq6CbhsFPuT%2FD2F%2F8AFZhpRqj87Cgk3FOGi3IxUtPRHvy2k5i0pbJJtJrPtt4Gy5bWvDwSuTmgwmn1wTiS%2FhOfbGIlS%2FKdM%2BIlpnzw&X-Amz-Signature=c59ad0903a8b7c6b3359e9d36ec691b1d0f710e330e82a76d70c047cc1dac71a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKXCD6L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCNWTsIh%2FTX5Iw6pFdbk9742ZMOYhaz2Ofbt%2BX44jn2hgIgUvB7iZeso00qmFK8UhzN%2BrMPFtOkhVgbUigDGqUWY3kq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOSdkECUroouLQeZVyrcA1TIcFSxlE1fxoQty2e7aCdlTPTmg3vSYEQN3Q8ft2zxApUjaHm%2BJ59ei11vK1Iwjw9w09VufWnk6XOg5MO0q7UCS4CEe7dNBYvpE9t%2FMGb%2ByGyPdfaEXTOeroUAmHsy3Ee46lumuTfdbLa6WtDY4O9hOUoKIXg%2BAV9P0r4SCKvv1%2FyQtFQXsQuagHfLmgMsH66awtoasPDptUAp4EW5B%2FlKLVSyfQlbe1Tf0xfCvfwCa4GIHETj5%2FMEINM2QWBYHL%2FgTUIUj4hfl0JQ1r%2BwpHUdIa0qrsflcHBNxhjZtwcUxHYmq%2FQS1cBR4Ekac0dgzPqKXJMd2w1GZGD8Acc6drV1zsGtKd0iA2jN2%2FTtcPxU5J1D5oaol2byZpc6XgTJSbYAb6jqchZ6Or6NJBxabtGrtsz%2BXOoPxEfuIb%2F5HUoO0n5XthVR1fxo%2B6qP3hVC4yhUPyrS9xKrdcRoe%2FkegAPainYzgVMyujKz5RsuRfyDpV27hLt8%2B8cfGtaXC%2BceUPasKlr6WoOSH5m1TiMI%2BIDVOuYoVxNTCeBYWD1wqU%2FBOJ5kbcbtnM9sCenkpXFdefys0Mq08RI12iIiVJNHyPIOmpJAhZ%2FjHu%2FXbeCCtWa16gq1mCEj9n8bHHi3MPbY7L4GOqUB18olnsbENmp%2F29PG0biTpHAww%2FIkbqJrfcKrkvfMp%2BS%2BGuybm6hzfvOGA2C1ygGb9ZAnbvsaUxB2Volx%2FQWaIGFyVmPWdS32d7QptapbvMEjidQ67VHt6A9gjAx7CEhohVpRmlPa1kBNsvFkpfQ39JwwVnPK%2BXsjomw0sIi3cYN6gGveTubKRnJ9Dg9nmcoHVIqr2ajgnzj6fUF%2FgoMIh1jTF6S1&X-Amz-Signature=6ef6ca4023dcf2ca263e5adbd229d94dc520bff18bdd1009852ad6ca1233e462&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IU3GHR%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC643OhJQvLN4y0UEldQ4585paBQnKwesMmzgY6o9%2BGCwIhAInwfAAHkWn317iJp%2FJ4kZpPYyLzSfk6frhNK%2F7c2xFFKv8DCH4QABoMNjM3NDIzMTgzODA1IgycGUCtPTmQUiiRfkcq3AN3F6ijmaVytrL6ti8m4LrlWy29ZgN2KwG8Xg%2F7TqNE5WFLsU7vnskZResWo48hAOA06FWnuKJkwS9t1aiKtpJYao9FUs%2Brp5%2BM4Lp8PwpX1DX1ZXly0SyYLLAGdgTyPMtbS%2B32W3UnjRhxatRr9IuBPcHEKz4eNeoU679CATW6hOAFLRrG1josbBHBEheYDDX9%2F3TAzWd9MrYskAVseIjGHi3gotZ3ohiqe907ryy2ZWPwUsTut%2FgEfCHBC%2B%2FT%2BCkYsUkTv1q67P9e%2BItAwFpKIvAYeyrPX30mHRdTQAPxKLyU0R1KUat5Z5Y90kWCZuaAda3465xD7%2BG%2FYdaqw64aYPjcgB6OAEgqXV5JdrUaeRJIEs9TLHjzGWg541MwxPWmuztVAQyW55u3S7dpz1ge58210O7xbFlKIbEt6%2FYx%2FiWtrxcS0FHZTSqPQBEYgVaz7ZTRoh1%2FetmD%2BWowQFm%2BuKydmD9gR04HGTENpHgCMykgPDDUPd1We%2FpWZC4YDNF94GS5YpOOMvXSnkvvMJqbfBb170IQtNLt3heENrPxOwCfTh2FJXp4d8glld1zqWFkOZfbUAOhgPlSRReUUVyInpNEymb49nHTmF%2FoHUrteoD1CC%2Bq5OOs0clG8TDr2Oy%2BBjqkAWa1xfJrGeKRsbZqO6xqA%2Bf3srkuWrbPVxRTRPHJkuynqywRDwlzcBnBezFhgcBTCquRgiwcab%2BACN%2BT%2BjQH4RfCXbBSPKH%2FNHhP1MpgzWlTY2hhNVCgOYdIVX93nBn54L4yU2N1dOcABwZApq1mozF7nu9O6vb63dSyhR4JSzAtvfgwUWHR8tqRvXPDH1GDBpbsrCyfL2k5qsMDRs4ZW0a1to6L&X-Amz-Signature=3480bcde7c5df5ae675cfd3c2ad630ab81ec4f7652d2503285c4577cb9610e05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOY6TMV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCCyWpRArmwPgHG3tkfAu1HG9A%2BrMAAv9MpJjxDU67KuAIgKRJobiFsxzb8%2B61M8Eh2c3hGn%2BsInN%2BAB3XCsOj%2FI5wq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLaZvYY6VbABdkj02ircA4Dehn2vhVSY4oIgir%2Bx6yIx7LUHZS8KbSQwM6%2B1G7UoAcBZSSBzmnUswkXXUPcv4h6iNzHpcxkRbj%2B08M3j3D38EFNg8aVj3SgyI%2B8IjoGH1AHm8uTEFpFAbJokLEW7MUDDuDwU%2BDbTSMd95CGGKKujamp5AzaI4x8uYX0Fm%2Bhx9WA0kzSutTgLR8G595HyexRJPmuL%2F5yn66l1yiR8h00%2Fx1OU1Q5bwm1XJLytTLF3Wf4l9SPyI56WPzr43LjfH99aJlznC1EUBdiAgb1s2sBSJHj98mCZX2KLD1mL0LeYQfBB563oBy0k89mIRL1%2BeuY7sIFnthV%2BIP5niUg8FsiC2v%2FaarcOCTfe%2BYvi7CDvf%2BQ29GdkYGDwHCExi4bUA2ixvRv%2Bt9wJK%2BCOgQDfh3kxTNufqg1zpyQlv7nuBQd6jOyBsVSzOJ6PjhEs722Dppze02tCUXjnjHPV3ys%2Fc3PY61INb8lIn%2B51ws2LqLMd5Ghz6Zln8o1izx2XOcYdKe9EqW4CCwXTHKDtzvCmL%2BnZ%2BoJcOTjoFwLacQiVOGLzO5z79huH1cMQ4JYhqmXNofCa6z%2Bcf0QltC27L39LLjaXuso6wMV6JtXDH1z7xUnzlF3GCjyIdM1tBZ09MOjY7L4GOqUB0VUMnnvcfldtrwuZS3rMYG7SM4UsKh28pmjLhqsftev0oGi3UdhQFHloitKzWUgog05u05rPcbJQbP5bWbn0CmFEGP76R6a5mcqkZvnyuTb2rVKvFSm4ouFq6CbhsFPuT%2FD2F%2F8AFZhpRqj87Cgk3FOGi3IxUtPRHvy2k5i0pbJJtJrPtt4Gy5bWvDwSuTmgwmn1wTiS%2FhOfbGIlS%2FKdM%2BIlpnzw&X-Amz-Signature=5a39945d0eca9cca7a67346228c9b6bc3a07caf74c855b78c7dfec64cc8e816b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
