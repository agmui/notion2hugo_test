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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOF5Y2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD1S%2FmpQ2K0Hwoy%2FkpqvxvgiumCiowQMOZzhCxrYhpydgIhAOCbj7WMGJkNzMPA11RrFzAzMgvcTd4ztvVadKgXqUAvKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWCkmv83Gf4W7Ea%2Bkq3AOTRz7ZcUrtIQ%2FkvAm99F82s9p9092KgWD0D5jGLR1DYWujretp%2BVdaj9s2O%2BThIEdxL%2F3cBvogxABuA60KXn0CbN%2FwEn29KqGbSjBYVx2IVlkvNpN8iIIPU1OKlgd7S%2B5K4FEwcPzZ1PSTyafJidxB5owM5mme%2BX9U8M%2B%2B4706d4Vbi0gSy7b%2FDFbtpiNLQvxbLrskum1LX3VJwTzFLMAVjbbdNRxxMxOxHX2XkwgYAHZYj2GyffSr%2BWrJ8SufLMDIUynfcTEpRet3N9NcbjHLZQKqhb2lfAUsFgzDsaky8ANQvVaTu9tz8GecvYR8whKA4CyzwACTBop3nuUiBRcPQOXs6nVuVedLDEci22ghj9RrPfRuEXOoXETbsYz9%2FVBso8lo0bPjGH8oTFws4vudSFx%2BHyDMOcWTN6JoJP%2BAnGK322uMnq5c33SfQ%2BJXXHpKWMeTe9cQOBfmWXbfXoQh%2BcKDk5ldwOCZ0y05D8FyYQPC9g3NbMAfFjIifAt1er95QuXXZwoPAAYHWLsWSd2%2F8IWF4UZzWWoRlLEM7d6TkvoSXWP845YE2f0xZhDnDnHLVoilGIiIjqFx1HzDgDdJiHKwdAbWuhvtF0YcL3fNbGRe8cmkFo0hsUPfsDCCqtC9BjqkAVHHAJPJYLVgTG5F66xi918zSCtSqXtuzZzISUW%2FZEAmdYbbVc0skb4t3zwc2%2BBDzitPtqCJICkG1W5Qr0R%2BcBLbkQNmfeiIB3qkc58qv%2BGb2xrH1dAe%2B4fBzUJvlFmW90pODiw8oeCKarw9uu1oqIbPxdWGgsV%2B0%2BwXgi7hR4FyJNJXvzQ%2BMQ9Z4t2SyRVWwGUVQb1BzfGKMfwAqNFizmVz6KEe&X-Amz-Signature=f3994c6a4eff038f332fa3db78d811bce85bb3421c0f5140fc8dcf2bfa6f5ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOF5Y2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD1S%2FmpQ2K0Hwoy%2FkpqvxvgiumCiowQMOZzhCxrYhpydgIhAOCbj7WMGJkNzMPA11RrFzAzMgvcTd4ztvVadKgXqUAvKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWCkmv83Gf4W7Ea%2Bkq3AOTRz7ZcUrtIQ%2FkvAm99F82s9p9092KgWD0D5jGLR1DYWujretp%2BVdaj9s2O%2BThIEdxL%2F3cBvogxABuA60KXn0CbN%2FwEn29KqGbSjBYVx2IVlkvNpN8iIIPU1OKlgd7S%2B5K4FEwcPzZ1PSTyafJidxB5owM5mme%2BX9U8M%2B%2B4706d4Vbi0gSy7b%2FDFbtpiNLQvxbLrskum1LX3VJwTzFLMAVjbbdNRxxMxOxHX2XkwgYAHZYj2GyffSr%2BWrJ8SufLMDIUynfcTEpRet3N9NcbjHLZQKqhb2lfAUsFgzDsaky8ANQvVaTu9tz8GecvYR8whKA4CyzwACTBop3nuUiBRcPQOXs6nVuVedLDEci22ghj9RrPfRuEXOoXETbsYz9%2FVBso8lo0bPjGH8oTFws4vudSFx%2BHyDMOcWTN6JoJP%2BAnGK322uMnq5c33SfQ%2BJXXHpKWMeTe9cQOBfmWXbfXoQh%2BcKDk5ldwOCZ0y05D8FyYQPC9g3NbMAfFjIifAt1er95QuXXZwoPAAYHWLsWSd2%2F8IWF4UZzWWoRlLEM7d6TkvoSXWP845YE2f0xZhDnDnHLVoilGIiIjqFx1HzDgDdJiHKwdAbWuhvtF0YcL3fNbGRe8cmkFo0hsUPfsDCCqtC9BjqkAVHHAJPJYLVgTG5F66xi918zSCtSqXtuzZzISUW%2FZEAmdYbbVc0skb4t3zwc2%2BBDzitPtqCJICkG1W5Qr0R%2BcBLbkQNmfeiIB3qkc58qv%2BGb2xrH1dAe%2B4fBzUJvlFmW90pODiw8oeCKarw9uu1oqIbPxdWGgsV%2B0%2BwXgi7hR4FyJNJXvzQ%2BMQ9Z4t2SyRVWwGUVQb1BzfGKMfwAqNFizmVz6KEe&X-Amz-Signature=c09f25b42186844a4b02c6c63fedaa4cc6fd6813427e916047daa87259576593&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKMWQH3I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDQ40VI%2F1rTOpPKEvCUduPw%2BtP4DKss50uFB%2BHCO8YSdQIgVR%2Bas61iTo9AulY%2F%2BOZsjh%2FPHwH0T4bdOTzR1omtw%2FAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9eDfOGe3mEVwmKMSrcA1s4FmGykjxbhDByEjO9mVJ%2BMxy3u4dryEJRB8ahLfepVSgcB6VgeNBPsDsX64ug%2FPAQdF61Z3EQyXiF81nLkwp5KlxgoVuCQRs9snWQAQH2IwCy70tqEeoZAMROvHFyYTNscRkIsNgbH%2BfhfU6eC1MKMIALX1VkzPNOYt9%2BG7nMM57XHR43osnmyt92OvzjnKhVSwD6mAaPZJOySRe5i8VLTbG5gLwPvm4Wy9bzIu4PC7%2Bssx4QMgFzoR44k1JFSp0pDDpMPWgwA067xVd6MbuM99AQnDWiPvPbKXo%2BIDNsglUK0%2BK0OrasG8LU3RjEyyTm%2F5ktifE7%2F%2BFEI9VuhQ53hrT4uDY4Ai4lqdS9Gvfd3I6YMMRdEGsgKFho8fNc86qvw7clZLYzG81BvYSHQWCcd0mEN7tlBIp75WeEOi2sP4zKVYiPxawM6fUaZcGuldQBTQBV%2BRSoFTZRyQy2HZcbv7ojyQ623e19bDoZCce4yvlzhEmACzKpQlwH7nan8AF7TZ4LjoBpasqRkfVnDWhheVu%2FbrrlrS8eFoiu6b4XP1QfSMCYZEclXkhvlNsDRgksvWI5i%2Bv0InMy0pryCHLSyrIRp1uPO4lYcpHjOIAnJImInllkliKLZSprMICq0L0GOqUBZZ8tI7jsEU3c59AJF1qZ4pyCk0dLzziv68DBgcBEx5cviOyoo%2BQ8pmfHocVFv4iQc9Z6cRVlv2UqgRttJNkMWBeo6J8Y5kQ3Do7P3IxzAwxxqnUZpDlP27xZpZ2sF4kkmlLRpP3XEB73alFJWIr8BmNbxckj8%2FqEiG7LQDEhfPgI8scpyO61C3yvGM0BTRyM2HyInFmb8wFGPc%2FSdySbXKdeMMq6&X-Amz-Signature=f3fcd98d7f3ebda3cbb26cd0173153659e705bff741245d2892fff6a3f6ac401&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LDK23DY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCbDtiz8%2F8WEiPEOzkxRtUPqPRBSe3lKHEwxeWj2FxyIAIhALDpeKBSV66G%2FmnfmQWgLEHkw0wkzFXR6ITAJzfKg7kgKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkNuecnNbjlhsZBioq3AMWdoidfeNsRhvt7LnUU755a9yufQy5YRjXXbC1QpoJaXEf8ziUEmHMxZE%2BOSxhVnnGP2RcH%2B8cvpYuc6eBmRAa44spwrwJ3cET1%2FhUUqT8qvVSB8w4YcEDNQN2k4IiRT1vGEmnpD8QSgwLr4zw4PzDt3FtMRVYnx5Wa4LjYtEnJrKfutg5tM2kO8WKp%2Foazuuqv%2BVfjAPhfyd1CPw36avJQeMKEtF5fVqjUKXqQhBzu4G2tuFxA%2BpbXIIag%2BNmKRsqFIOJOWWS5A1KSABtnEeXhNFP5unAQDA8EgKvBskZ2SeHImsnPVqPmSsOwlj0TcVZ6Z0DFEki%2BAG%2BDw2Uayszi%2Bkl1D5TVmcVu9ElFj8f0jJfshSt5DnosTmZ6C33laK9A%2BN9XcnF7uI8Xfs65hQzhQ9W5ABt0vNHfzR098k8s%2FpvR2mT2Dfrr58ucpOMYIJfL5MV8vsTI%2BtXbo1CadpruWqVIccaZRkQwG7o1R1RkV7j2rPDWiL71FKuxPRAlCvQbW5U6HNU32A4HK%2BKuoo8fZTJF%2Fff7EWgKq%2FiIVzXNFnvnyuliR6S82ygaio1Vsn5tswiZAyEfKTrAG2DbxJxucRVmkUVZxXaxxFzwxzYichzCIi5XhNblkCN6TC9qdC9BjqkAXyKsFi8sjn6W%2B6hseccSZA%2FaK%2BaLWm8Srie1MipCPPtKi3D9AmvYoJ1mrrVRXT9VScSXLw4Z3HDWcHW%2FyMTHyHbGk3bdN%2Bs2ET2IrfttZx9wYcEhs3w6Du4jNhE0717MYi5OiUBq1g7atBwjMgos4jf6G84rAABlKTuLZ%2FTni6wOKYAocoXEUP3fq0QlxxCaEBHSO5H%2Fy9fIg9RuMjJlpkHanTA&X-Amz-Signature=ec26053c85f59b6544cf59a0890b9a5d38889c111d5e21fdd5ae506f45de0165&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOF5Y2X%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD1S%2FmpQ2K0Hwoy%2FkpqvxvgiumCiowQMOZzhCxrYhpydgIhAOCbj7WMGJkNzMPA11RrFzAzMgvcTd4ztvVadKgXqUAvKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWCkmv83Gf4W7Ea%2Bkq3AOTRz7ZcUrtIQ%2FkvAm99F82s9p9092KgWD0D5jGLR1DYWujretp%2BVdaj9s2O%2BThIEdxL%2F3cBvogxABuA60KXn0CbN%2FwEn29KqGbSjBYVx2IVlkvNpN8iIIPU1OKlgd7S%2B5K4FEwcPzZ1PSTyafJidxB5owM5mme%2BX9U8M%2B%2B4706d4Vbi0gSy7b%2FDFbtpiNLQvxbLrskum1LX3VJwTzFLMAVjbbdNRxxMxOxHX2XkwgYAHZYj2GyffSr%2BWrJ8SufLMDIUynfcTEpRet3N9NcbjHLZQKqhb2lfAUsFgzDsaky8ANQvVaTu9tz8GecvYR8whKA4CyzwACTBop3nuUiBRcPQOXs6nVuVedLDEci22ghj9RrPfRuEXOoXETbsYz9%2FVBso8lo0bPjGH8oTFws4vudSFx%2BHyDMOcWTN6JoJP%2BAnGK322uMnq5c33SfQ%2BJXXHpKWMeTe9cQOBfmWXbfXoQh%2BcKDk5ldwOCZ0y05D8FyYQPC9g3NbMAfFjIifAt1er95QuXXZwoPAAYHWLsWSd2%2F8IWF4UZzWWoRlLEM7d6TkvoSXWP845YE2f0xZhDnDnHLVoilGIiIjqFx1HzDgDdJiHKwdAbWuhvtF0YcL3fNbGRe8cmkFo0hsUPfsDCCqtC9BjqkAVHHAJPJYLVgTG5F66xi918zSCtSqXtuzZzISUW%2FZEAmdYbbVc0skb4t3zwc2%2BBDzitPtqCJICkG1W5Qr0R%2BcBLbkQNmfeiIB3qkc58qv%2BGb2xrH1dAe%2B4fBzUJvlFmW90pODiw8oeCKarw9uu1oqIbPxdWGgsV%2B0%2BwXgi7hR4FyJNJXvzQ%2BMQ9Z4t2SyRVWwGUVQb1BzfGKMfwAqNFizmVz6KEe&X-Amz-Signature=0a62f34511f2b9bcd6d959359953a9594d5fc97c9c320f515c45df7b9f471261&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
