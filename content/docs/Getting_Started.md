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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6GSSPO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICibmDK%2B6d9IzL%2FHKHfizBLd8n%2FqF7cN58Umr1Jqdt3xAiA5u%2B4TaPJaEyAOMjlmMMEjXMYQUKQjrDAit7WgO2S42Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmk7Rklm3Dofamy8KKtwD0fMH6mCjXaBhvseNcuzWsVKQ8QWbIdaGBEb%2Bd64wTQKkBlQIHFkambQwfaa1%2FOy%2FYKmVOpmfYZjRryYGWX4Yj5xRypUVfKE2CnqdBNiV4k%2FR%2F8anCqx4l0MtsrVXYjfSvzrhKtYzE%2FKQf%2B9wL8cmkYAtRsWuV1YuXkXP0DSIcEVkFzWy8%2FyeEdP69EcJp%2BtrKYwmI8%2F670CiI%2BX50OwmfXd6KqSBLIhoEj%2Bo60oc6xHx5aNMhxrbtCGe%2BQSkhKLhtSz7H3lVFsLDmn%2FBwZnPG6A5NGvo5ngl6KNN%2B3fa%2B%2F1vKUibebUAENPA52iCDocxJQXTj%2FNXfNjicUKLaB6Du1SP9r31r54HVymYhO%2BRFUzEY2wv2gdwc5HhyNV544wmwU80B%2Ft%2BfpcCunPjUbRtbA5RiSAKC%2F%2FCw8tJO0yrKkixcM9s8qA8KhnJwwX%2FKDYm19XBKNHfr1T0VIuZNJbPwpQhsnX6fls6Ri7caAWTMiC%2BA1nuOgoDsR2ONkxXERZUFxv3Gq9nS6s9brSOjSWmT8vKolPKSbrL6f0de5xVYS5OSMD1fC8VslwS769GhladuwE6JZOZCWJEDs1m894vHhv62bs01TI4uZNxHgDrkVx0D1no3RYvvY%2BbGtgwxoLqvgY6pgGIP2sffFB5K1jTEFP05bLVSDRXrOay%2BPMt4KlwPmP4VKgqADUzD%2Fw3HUiZ98TxFIOnP2uC%2Fq4vcjugBtSnsQh%2BLkNJk2nRER2gyL4zncgmQUXLuJFaJLAyFYQ9NEg7zL%2B3sGyx6dQJ%2Bi1cqFpRWK6p%2Bf65BooW2C%2Bxlrcw9xHwa2AP%2BTLHNo54Oh3TJbNt%2F0o7w%2B8y8NGvLMClkP%2FUYIpDXWEbp%2BZd&X-Amz-Signature=84c63e3846badb8497dde693df23f279892c387da301bed6aef2819c037e555c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6GSSPO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICibmDK%2B6d9IzL%2FHKHfizBLd8n%2FqF7cN58Umr1Jqdt3xAiA5u%2B4TaPJaEyAOMjlmMMEjXMYQUKQjrDAit7WgO2S42Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmk7Rklm3Dofamy8KKtwD0fMH6mCjXaBhvseNcuzWsVKQ8QWbIdaGBEb%2Bd64wTQKkBlQIHFkambQwfaa1%2FOy%2FYKmVOpmfYZjRryYGWX4Yj5xRypUVfKE2CnqdBNiV4k%2FR%2F8anCqx4l0MtsrVXYjfSvzrhKtYzE%2FKQf%2B9wL8cmkYAtRsWuV1YuXkXP0DSIcEVkFzWy8%2FyeEdP69EcJp%2BtrKYwmI8%2F670CiI%2BX50OwmfXd6KqSBLIhoEj%2Bo60oc6xHx5aNMhxrbtCGe%2BQSkhKLhtSz7H3lVFsLDmn%2FBwZnPG6A5NGvo5ngl6KNN%2B3fa%2B%2F1vKUibebUAENPA52iCDocxJQXTj%2FNXfNjicUKLaB6Du1SP9r31r54HVymYhO%2BRFUzEY2wv2gdwc5HhyNV544wmwU80B%2Ft%2BfpcCunPjUbRtbA5RiSAKC%2F%2FCw8tJO0yrKkixcM9s8qA8KhnJwwX%2FKDYm19XBKNHfr1T0VIuZNJbPwpQhsnX6fls6Ri7caAWTMiC%2BA1nuOgoDsR2ONkxXERZUFxv3Gq9nS6s9brSOjSWmT8vKolPKSbrL6f0de5xVYS5OSMD1fC8VslwS769GhladuwE6JZOZCWJEDs1m894vHhv62bs01TI4uZNxHgDrkVx0D1no3RYvvY%2BbGtgwxoLqvgY6pgGIP2sffFB5K1jTEFP05bLVSDRXrOay%2BPMt4KlwPmP4VKgqADUzD%2Fw3HUiZ98TxFIOnP2uC%2Fq4vcjugBtSnsQh%2BLkNJk2nRER2gyL4zncgmQUXLuJFaJLAyFYQ9NEg7zL%2B3sGyx6dQJ%2Bi1cqFpRWK6p%2Bf65BooW2C%2Bxlrcw9xHwa2AP%2BTLHNo54Oh3TJbNt%2F0o7w%2B8y8NGvLMClkP%2FUYIpDXWEbp%2BZd&X-Amz-Signature=27c6b94b9a637cc5efce4f962c6a753434154c8c20a4c95f312dea57662edfd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMV44TD%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDrHh57POYjF%2BwZfVPUVQ%2FXbj1K8H2KXG6lDF0nN%2FOqpAIgBQLrG7I0qo9Dor9J4Uf%2FDvUPQbMvljCklyenSro7L04q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHCt4JwMa4SL5uOmWyrcAwGiSzCX%2F1nL5yEGLgSL7WXPo2QOLn52uxVJsQKUdL4uk%2BOflF7ahJ8W4qphN3t0P3N97q4nSl85g1CfBi2cTj4IT7PtNtjnlHK5rHJUXrbpqtN1wTngBzhVknrB8E%2BcY7uhZp0BKr7RrdKKvAq28I2fwKcGz1Sair6qWkgryyMrKN2nfcoP4BKbif6tRDCio3SCNVtMgkwRjlmeKRpAQ3JToU%2BmNTSNHkDFc9%2BMyLafdffxLq%2FS9lloIXPQTIhsaxD5qPYihadMIU2y48wS5IoFlYCEJpdxeosBeRMDOLtMXHDewfz4Mh04Q8JthuhfxrvOpAARUaYbVl6LEsHOsSc6acnC2ZuRVc7xSXsYEb9Gxr67D8wtj77XhMftFerAyb6zaZ0S9qj8wZpk0rhiHoSsYZffUTuDDZRHAS7Jk20%2Fnwow5tYQvdiw7nvucxNCB4dO%2B8sClP9lGDzsNuMumI5ZlX9kindaqGO3MRrkhb2vGexJ9RpAoKRTsTkDlcMzJ2IfF800BUxcFZSmC%2B3sjvXWQM47deUq9eXZy%2BUSH%2B7Ep3aGfE3ojq7KRFxh63j6zjX15qOvArwjt3Wibfk5bHKSMGoh5cEwcQM4pvc636UezEM7SYnPFlQbO5OjMNWC6r4GOqUBNbXmMZSNpGrXDnoGOoXG0FkTf5fruuh24ii0sbtANaOrmn5KlC0IJiRHkCp8sBBj11CQufgW%2BomZ8EPgNPee0TgPKkChL7PU9ikbssp0gMAq7m8XP%2FisIodCH4eQB5BYsxVz8%2FAz%2BZkmDSotttNNzt%2F2KZhwB1iab3v%2FaavYWY5T8v5HeEA1AWZ6GYvaKFtzao%2F2Ojg30e1pEZ7pMy7eXg6RNqmK&X-Amz-Signature=5e3410849f8344191a0ddc4ce23368151c871fca7b77fe8a49a1b2dd8b7cdf81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIKLKW7H%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCFZ%2BpHkPvO3Gd%2FpBY9Jg8SfiU1gTF%2BrVxqNxeSzAw4gwIgY5iTV%2ByYKW8Q0fY7F78ow7u5aLhylZsEf9h5r5%2FgxfQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFoKqIwT6KcLVQhbHyrcA0yMhnQZvVJgqTjFEiZYMmREYuS%2F6Cc1hNGKfJ6mCYZpB6ITnDXPi83addEhQsMNqkqjIuVpQ1HJAvWTBtggQZFrQK7voToPE2qh6kunMCkMyZH2iMddAAK5f4NjbdZmYlI5nMnEwE11JKW%2FwCsF4Zd2wo6VZpE92m6vM7IxYDB2lBVq952js8EVsS2V7vUlevd5SNPpbK3DzGTsKfi1eSJdMMHrydlpeJ30Da1cP%2BG7Y1Bz0m9b%2FCJy5i4f65u5H81S2lcxJ0i0MAa5ST4mV3sB7qZuANm5CcPBbafBXAW9jwvR4heYiWTRNMUcLmOxSbfVvnww2hUzQnyR6Pg%2BeFO%2FwZqFj356OCciPUodoC9el%2FLDDmsP1UrRxwUFtaVOPzAOhZ8HdUFTjQAiFj1fzGyG7jUZL%2FxtNzGv5H6V9daU8SZNyyqB7T%2BxRdMGPpYUYDKRx9Ef7kFzg%2BzLvGEBCKFn%2Bg48XLcuFa2x3Bvv0YwAT%2F0o8oIkkywKuM4UCnMHACpQXhFmm7YNxeXF%2FqtjSvQLxZoYmg52u5Ve92muOAtuU8YUICmJhI1%2BUK88XDRcVKY0vgfbM9ulZM1t4C295jasTOtpQQOOkQjNPi8QXgqf1mO3CqBvmW05fpxGMOaC6r4GOqUBA1rIVgc1tUZoJdqJBk4DDRDbd7E0AciSDbDp8paAhpxe0QLlZ96MdwbXUgG4zRzsnnkQuAroki03bUyURzDdW%2BhD59PJ%2F5AELvJ70Pqa0QHrFNWtJ%2BZw4rN4M6tlTZf8iLXpZtNOzVlxuDDK6JgQADOlUYOxuYpzR%2BNwsa8RVYMRjvZfjVVZUSQ3hysXszHyrbnCFNxqKrBGFzASjnRWVGXDCuWZ&X-Amz-Signature=2e51f9e69d355db8b7942e18b3baeb920e61c547fdebe02983c6269d5012974d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6GSSPO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICibmDK%2B6d9IzL%2FHKHfizBLd8n%2FqF7cN58Umr1Jqdt3xAiA5u%2B4TaPJaEyAOMjlmMMEjXMYQUKQjrDAit7WgO2S42Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMmk7Rklm3Dofamy8KKtwD0fMH6mCjXaBhvseNcuzWsVKQ8QWbIdaGBEb%2Bd64wTQKkBlQIHFkambQwfaa1%2FOy%2FYKmVOpmfYZjRryYGWX4Yj5xRypUVfKE2CnqdBNiV4k%2FR%2F8anCqx4l0MtsrVXYjfSvzrhKtYzE%2FKQf%2B9wL8cmkYAtRsWuV1YuXkXP0DSIcEVkFzWy8%2FyeEdP69EcJp%2BtrKYwmI8%2F670CiI%2BX50OwmfXd6KqSBLIhoEj%2Bo60oc6xHx5aNMhxrbtCGe%2BQSkhKLhtSz7H3lVFsLDmn%2FBwZnPG6A5NGvo5ngl6KNN%2B3fa%2B%2F1vKUibebUAENPA52iCDocxJQXTj%2FNXfNjicUKLaB6Du1SP9r31r54HVymYhO%2BRFUzEY2wv2gdwc5HhyNV544wmwU80B%2Ft%2BfpcCunPjUbRtbA5RiSAKC%2F%2FCw8tJO0yrKkixcM9s8qA8KhnJwwX%2FKDYm19XBKNHfr1T0VIuZNJbPwpQhsnX6fls6Ri7caAWTMiC%2BA1nuOgoDsR2ONkxXERZUFxv3Gq9nS6s9brSOjSWmT8vKolPKSbrL6f0de5xVYS5OSMD1fC8VslwS769GhladuwE6JZOZCWJEDs1m894vHhv62bs01TI4uZNxHgDrkVx0D1no3RYvvY%2BbGtgwxoLqvgY6pgGIP2sffFB5K1jTEFP05bLVSDRXrOay%2BPMt4KlwPmP4VKgqADUzD%2Fw3HUiZ98TxFIOnP2uC%2Fq4vcjugBtSnsQh%2BLkNJk2nRER2gyL4zncgmQUXLuJFaJLAyFYQ9NEg7zL%2B3sGyx6dQJ%2Bi1cqFpRWK6p%2Bf65BooW2C%2Bxlrcw9xHwa2AP%2BTLHNo54Oh3TJbNt%2F0o7w%2B8y8NGvLMClkP%2FUYIpDXWEbp%2BZd&X-Amz-Signature=ea0f0ecd2d9f412e27093049b665a55f54f909b6fe8b14b95c672c8ae58b898c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
