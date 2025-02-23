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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIME54V7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJutezE8mzwkxBV2ZQeHkOgoYdJak5V25yygd2%2BjceyAiBB1da7IqGIHVG1HsWg5FmecxBj%2FRkEeN53nuUWYP9a3Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMdamg1U6xsIglxjf7KtwD1OunMNzNzDUwPlusNs15fByAZAveJ5JuPEo2ktJNMxwU1DtYVGUCcKPcuP3SFMrewk4XJ4lIwVB9XmBgO0YfaefwhGMV3Nhp%2FNmvK78D03gfTsIZuB%2Bi2gKT3Opnpjgvx%2FBPrFL83S5rs%2BXvQXmQYJ3onub2m4tEWiAgLL5NXXdrVW3dPT2qfOTmjgYJC8Jzh6pCq3kpfSvlF0ang41AWYYtFWansEVOjUK97svmpO8SoYQh1fdNz9i%2FX1PCcypsK1qaZt3rH2wv9Ftt1c1Q4p3t%2BpkF2Qi36VaafkpqknPqaHp4w9rbFPHAR3QVx%2B38Y4kTWl6dWohiNgNjul0cAkeDBcF2hFtmXT282J70Y5I6CMrOP2Zh%2FD0i9BmDXyV9hUB%2FsNc05TOEjT%2Bi%2By3BBok28%2F%2BlVh7PV30udFDIp8fnHKROCA41TM7DddQMoa%2FRgxqhuK1dSH%2Fdw13eSePJPmELHRlvRP3HnKpheoI4aGfOKHVmYTujQdAKGmmZ2uPdZ24vzuTDwS%2FNaqPbIsi8j4DKpfvLC5B7KX8BirMNSHRhl6WCVYSnukzG9%2F5tkG9oIQuWeQl1GY65mAkl%2FJPE5DrUmZl731sGlSfeersQ66ROSGnr42ltmHfHMF0w8fDrvQY6pgFviCrsm8UoczZ5Ay4L%2FuL8kuPO7hzbOwo0lkiTrLc1meIBtxjr4wZiW3kG%2FNI52HEO%2FHqo4Mzlnqxx3wTNH5F08eu3yzyO%2FmtPkQXmZiREAgSgS2qjYqXN4CZlNVX%2FduFcs1hf1JNnwa%2FUaJzZlSdKYPu3hH8m5M0BSWJZT6%2BGMHvHf%2F2A92BGFUWlX5u19hxbgzElw2LataFFRng%2BY19x9bGLpkix&X-Amz-Signature=bc338f3586dc3582b2f107376e6ba55651df1a3eb4c647fb6de0ec6fc4b54d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIME54V7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJutezE8mzwkxBV2ZQeHkOgoYdJak5V25yygd2%2BjceyAiBB1da7IqGIHVG1HsWg5FmecxBj%2FRkEeN53nuUWYP9a3Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMdamg1U6xsIglxjf7KtwD1OunMNzNzDUwPlusNs15fByAZAveJ5JuPEo2ktJNMxwU1DtYVGUCcKPcuP3SFMrewk4XJ4lIwVB9XmBgO0YfaefwhGMV3Nhp%2FNmvK78D03gfTsIZuB%2Bi2gKT3Opnpjgvx%2FBPrFL83S5rs%2BXvQXmQYJ3onub2m4tEWiAgLL5NXXdrVW3dPT2qfOTmjgYJC8Jzh6pCq3kpfSvlF0ang41AWYYtFWansEVOjUK97svmpO8SoYQh1fdNz9i%2FX1PCcypsK1qaZt3rH2wv9Ftt1c1Q4p3t%2BpkF2Qi36VaafkpqknPqaHp4w9rbFPHAR3QVx%2B38Y4kTWl6dWohiNgNjul0cAkeDBcF2hFtmXT282J70Y5I6CMrOP2Zh%2FD0i9BmDXyV9hUB%2FsNc05TOEjT%2Bi%2By3BBok28%2F%2BlVh7PV30udFDIp8fnHKROCA41TM7DddQMoa%2FRgxqhuK1dSH%2Fdw13eSePJPmELHRlvRP3HnKpheoI4aGfOKHVmYTujQdAKGmmZ2uPdZ24vzuTDwS%2FNaqPbIsi8j4DKpfvLC5B7KX8BirMNSHRhl6WCVYSnukzG9%2F5tkG9oIQuWeQl1GY65mAkl%2FJPE5DrUmZl731sGlSfeersQ66ROSGnr42ltmHfHMF0w8fDrvQY6pgFviCrsm8UoczZ5Ay4L%2FuL8kuPO7hzbOwo0lkiTrLc1meIBtxjr4wZiW3kG%2FNI52HEO%2FHqo4Mzlnqxx3wTNH5F08eu3yzyO%2FmtPkQXmZiREAgSgS2qjYqXN4CZlNVX%2FduFcs1hf1JNnwa%2FUaJzZlSdKYPu3hH8m5M0BSWJZT6%2BGMHvHf%2F2A92BGFUWlX5u19hxbgzElw2LataFFRng%2BY19x9bGLpkix&X-Amz-Signature=1c131dd853300f7e1f47ddcf4b979675ad137e2a492371862961a332546f939e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EHPEGFS%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Um0Ex6ggduPmPRoC6kTpbWB9XHCPbC5FjPqtrXR9FAIgP8Iy%2BRJnaEMXWbvDCWKv5m4YJwrXKWLHZ%2FZlzGaJm%2Bwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDErWqbbd9GM1dcY27SrcA3eAu2j4ww6WdNDCRSOusCblcppwiy4oxuzgHFc0GGudHRM9fhr8F0g6XNb9sInFVp3eW%2Fzxy2s%2Fe8HcOmxEWkr3H1Gvh4z02%2BkeI6gkTHfs6PoSMh1%2BknHzdBpvtzi0YDd6J0JIkI%2FTASbqolIZAf0YV35F8WAwL5Db2QhmIkBosWZ%2BhOXtP%2FLNSx%2BYY5R%2BiXr7oZHYFucVK%2F7yLy2HicJ766UVFLuHJewEpXEFRTBmnoj1iAlqfHcIc3b5pyU5LfCVJEvypXEBmdrO6iinyTCfIVykcu0onK%2BuqzeHcYvSxEGALmEF%2F0ZBsSl3C1vq%2FrSlreiuCdLDFGcE4w4gAd9d73b2S9FU61EfmHkMo55QtipVQqq1Ot7TEi70AzygqVoBLMyuUXEur3tQ60cl%2FgmRVkEUA3Wkovg8%2FVRsWH0PyZHsIBEVpHAAcrfzbWWIz9UcL0bVECykammyDa8KKqT9mpLOOyD67DvCkIRcvXZgL4xhpkP%2FKZHlw5019KQYsABg%2BLOtTGNkQgbXgNqX0skTdHDxH0nffFYG6qzoMTGp472NhQJXmQyz1u7tdqTQMWFTozmo0XCatnFhdD5XN8DMg6GFO5kLjZf4ZKhCsC7kaYlZr4yPq64xf%2FwHML3R670GOqUBN7FxetdPueFVp%2FqFgywfJOqP2suVl%2F0XoprEwlLLx%2Feseyf1%2BU%2BCGpc%2BYhgI3tuqoCzO2bmgRaJYqyZh1qv0DOLWhFenndbXgTzI9FJCVDPNClxMa1DrBMeLhtgz9KE%2BCW1E3dJh%2BQcArYLVE%2BNplot%2BgNulM60oGNR%2BVDj0fDNegCKk6MZ1lP7a1jgJG9MDam2yMaYAdn78M239TtyBvTIAaLYV&X-Amz-Signature=0b2bf7c7b59abd1e6fac8b4996816aac799859a78b2cb7600010d2138e8a059a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJP5OEN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaC%2FygamY2wZzOMykTTljpCZda1G8fRmMremydhQKaTAiB%2BnCVPmzfmL0AILEO5%2BUTWdl%2FtZAlG%2FRaYDGfPwO2S1ir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMGHrk4SvxFpejxeesKtwD8DmPONcwIxknTXp7zqXwLcBG585Oa9cNfBDrpQHEE1jLhogq%2FKvK%2BRj36yB%2BPL5AbTVVDllUpGhS1XnlTxUg2nK83MmiTnK4UycJnEcGmQxR2d4tLkymPUBjTJn1L8QoJZdD59RsaKJrG5ATXUUwEVmN8IINHRjuGtCpA%2FnIn6budlYQqH98VnyPFDojixDQ4JQlzEtRJAZf9tb3MnZQ%2BKuPmVpO1nb8NiSBu8ZcmHlpPeNcC1zuAomzgyMbCd2PbqVaNjotXGvVeWcgs2f%2BH4fqbZfhoD772SwZfdw5rpY38XO8YUUE88niYpe5Ghmde1HFvXEKFpiAa%2FnE9ipAube5bBT4q0GH98T2dBn6nnp6tqeNC9oUeTe207KyhQrM0fJTb%2FBldfEH7ejXmPNt5D81%2FlE9gGzGC0QzY4HWulx3St5qkln4Z3EV7xFkZ2ssOmoy0MWYzrgJU0lY3n%2FVI93RYVnB0BcfGsL2YYO86Wm0n27JGDOF41qhiRTnlkWJ0qEYcNtIaQaPMGG51MmanKSo6WjI24jiRGyXBt1otGNN%2BBj44ZZvObnXE01mhBChHdSELSN4VUvXVeVMj8FsANICeMfwvaMgMsuQOw%2F8uSHbjMsPsKMyv4snxhgwx%2FDrvQY6pgHneL55C0P7T6duTSSBvRNeKOC1xTAjknhCfazfJY8aDbAIZhtcsWU%2F5pkHaW%2B7rQWRVncrzeOO5a6YciWUhT4OcAdtRByzpjhIM0HeYEGNbt71IAXDpOjEWPWK2jvjLqow%2FPvr356ETcER16fSHvwfmlvqFqPczsd7NL70zDd%2BfccRf3mS2CkfF4y3na2K1WJodQvWQDa18a2ZGfgO%2F1w4CIQT9YM9&X-Amz-Signature=c06c03c7d7c7faf9ea3fdde146f05ef2258ac9e8a83b6b288232023fe30091bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIME54V7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJutezE8mzwkxBV2ZQeHkOgoYdJak5V25yygd2%2BjceyAiBB1da7IqGIHVG1HsWg5FmecxBj%2FRkEeN53nuUWYP9a3Cr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMdamg1U6xsIglxjf7KtwD1OunMNzNzDUwPlusNs15fByAZAveJ5JuPEo2ktJNMxwU1DtYVGUCcKPcuP3SFMrewk4XJ4lIwVB9XmBgO0YfaefwhGMV3Nhp%2FNmvK78D03gfTsIZuB%2Bi2gKT3Opnpjgvx%2FBPrFL83S5rs%2BXvQXmQYJ3onub2m4tEWiAgLL5NXXdrVW3dPT2qfOTmjgYJC8Jzh6pCq3kpfSvlF0ang41AWYYtFWansEVOjUK97svmpO8SoYQh1fdNz9i%2FX1PCcypsK1qaZt3rH2wv9Ftt1c1Q4p3t%2BpkF2Qi36VaafkpqknPqaHp4w9rbFPHAR3QVx%2B38Y4kTWl6dWohiNgNjul0cAkeDBcF2hFtmXT282J70Y5I6CMrOP2Zh%2FD0i9BmDXyV9hUB%2FsNc05TOEjT%2Bi%2By3BBok28%2F%2BlVh7PV30udFDIp8fnHKROCA41TM7DddQMoa%2FRgxqhuK1dSH%2Fdw13eSePJPmELHRlvRP3HnKpheoI4aGfOKHVmYTujQdAKGmmZ2uPdZ24vzuTDwS%2FNaqPbIsi8j4DKpfvLC5B7KX8BirMNSHRhl6WCVYSnukzG9%2F5tkG9oIQuWeQl1GY65mAkl%2FJPE5DrUmZl731sGlSfeersQ66ROSGnr42ltmHfHMF0w8fDrvQY6pgFviCrsm8UoczZ5Ay4L%2FuL8kuPO7hzbOwo0lkiTrLc1meIBtxjr4wZiW3kG%2FNI52HEO%2FHqo4Mzlnqxx3wTNH5F08eu3yzyO%2FmtPkQXmZiREAgSgS2qjYqXN4CZlNVX%2FduFcs1hf1JNnwa%2FUaJzZlSdKYPu3hH8m5M0BSWJZT6%2BGMHvHf%2F2A92BGFUWlX5u19hxbgzElw2LataFFRng%2BY19x9bGLpkix&X-Amz-Signature=05266bcf4a0b4b62ce7636703462c7d294eed13b1b82cd6db008278da546fbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
