---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONSGM2N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDfHlyN58GajHj2b1y516X9EOmM9TzpCG8j8FTuyVzOEAiEAzvPgUsBfQlywYyiHlETJBAmppGsjEHTYRFZqNsMXg6AqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGMBoP6en87ubjIsSrcA1OpaOQbbFniI%2BEXxBPQQTTbaodIxzh0%2BWR8UquGoYYdDUNZoEB0xs01K2Lj1wBVCi98LvAYGS%2BnyhnupXeqw96GhYM7J5e8dc%2FkwmxQjfkkOwn%2FaWS9E5Ki7wLVlpVN9b9JLhFayLKYdFo7yE%2BhmIChIGLldsHP92EbddTGomT%2BCyvKr05peoaVr7z7j8QpIqC%2BJsnnuI%2F1BKMfpnAdZFAPiiq%2BJLYiUILtRsN53S50n4llb3MND2ii%2BQyqOh%2Bjkuk8AT8czYYg7Fefe2ortjOtE%2FJ06WHavtsiXDlmj2K0JMAYkcUUW0WkBGJnaGHH%2FOTMW4rVsz6A5AQZiGYcg3YqFW83Phw0JtID%2BKGdJCRo30FqiN%2F%2BDr0rITcSyAiV8rGduyvFWI7ZC5QinKzt7fLJEOUJold5f2c8OCWTIbFHarzIBrwnDGdbGB%2Fbo1UzhgtYOlRRgLySdS2K7boB5SxfW4YeRYFS4JFst%2BPfTMrekuz5smN%2Buf7JwQClGQ4mpcrvb3aJOZwbEfyM8fYOJv7bwiqESJTTJGei0lQpLv1vAkxMJ%2B%2BdClMwspFHk6BNKmBWXdRH8yXjmKDHoCPFSIp1FaQU8ljblYoSA4oi0Qrfzbxq3eKeF0KF3Ow0MICHkMEGOqUBRzUtwXHtR4A%2FvZO8yAFmR8F5BYKzYtQT%2BaBh2VRT67%2FdopV3TYg2%2FF5e3JFktoutsTTVzJfr9tSYnKmZ%2B7SF27m3RGY7paXYK0LQhEe%2BZr238fRuoZUlzvJ7TmJ5Xr5gwnUxaOhZpJouXnUf1SlehTPfSb8I2loq7Ku4dV589ZMX42waxBS2aF8AvW0kAGYYAjfDCAWM6CfHADUn8qnsTlRm5bh5&X-Amz-Signature=9c4a5551a46717f635a840883abd06ddf285cfb5a57618d65caf01aa2c8eccee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONSGM2N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDfHlyN58GajHj2b1y516X9EOmM9TzpCG8j8FTuyVzOEAiEAzvPgUsBfQlywYyiHlETJBAmppGsjEHTYRFZqNsMXg6AqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGMBoP6en87ubjIsSrcA1OpaOQbbFniI%2BEXxBPQQTTbaodIxzh0%2BWR8UquGoYYdDUNZoEB0xs01K2Lj1wBVCi98LvAYGS%2BnyhnupXeqw96GhYM7J5e8dc%2FkwmxQjfkkOwn%2FaWS9E5Ki7wLVlpVN9b9JLhFayLKYdFo7yE%2BhmIChIGLldsHP92EbddTGomT%2BCyvKr05peoaVr7z7j8QpIqC%2BJsnnuI%2F1BKMfpnAdZFAPiiq%2BJLYiUILtRsN53S50n4llb3MND2ii%2BQyqOh%2Bjkuk8AT8czYYg7Fefe2ortjOtE%2FJ06WHavtsiXDlmj2K0JMAYkcUUW0WkBGJnaGHH%2FOTMW4rVsz6A5AQZiGYcg3YqFW83Phw0JtID%2BKGdJCRo30FqiN%2F%2BDr0rITcSyAiV8rGduyvFWI7ZC5QinKzt7fLJEOUJold5f2c8OCWTIbFHarzIBrwnDGdbGB%2Fbo1UzhgtYOlRRgLySdS2K7boB5SxfW4YeRYFS4JFst%2BPfTMrekuz5smN%2Buf7JwQClGQ4mpcrvb3aJOZwbEfyM8fYOJv7bwiqESJTTJGei0lQpLv1vAkxMJ%2B%2BdClMwspFHk6BNKmBWXdRH8yXjmKDHoCPFSIp1FaQU8ljblYoSA4oi0Qrfzbxq3eKeF0KF3Ow0MICHkMEGOqUBRzUtwXHtR4A%2FvZO8yAFmR8F5BYKzYtQT%2BaBh2VRT67%2FdopV3TYg2%2FF5e3JFktoutsTTVzJfr9tSYnKmZ%2B7SF27m3RGY7paXYK0LQhEe%2BZr238fRuoZUlzvJ7TmJ5Xr5gwnUxaOhZpJouXnUf1SlehTPfSb8I2loq7Ku4dV589ZMX42waxBS2aF8AvW0kAGYYAjfDCAWM6CfHADUn8qnsTlRm5bh5&X-Amz-Signature=598f9d65ce0db53cd51f58f6aee1c5695ea991493519705de15222616b246599&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONSGM2N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDfHlyN58GajHj2b1y516X9EOmM9TzpCG8j8FTuyVzOEAiEAzvPgUsBfQlywYyiHlETJBAmppGsjEHTYRFZqNsMXg6AqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGMBoP6en87ubjIsSrcA1OpaOQbbFniI%2BEXxBPQQTTbaodIxzh0%2BWR8UquGoYYdDUNZoEB0xs01K2Lj1wBVCi98LvAYGS%2BnyhnupXeqw96GhYM7J5e8dc%2FkwmxQjfkkOwn%2FaWS9E5Ki7wLVlpVN9b9JLhFayLKYdFo7yE%2BhmIChIGLldsHP92EbddTGomT%2BCyvKr05peoaVr7z7j8QpIqC%2BJsnnuI%2F1BKMfpnAdZFAPiiq%2BJLYiUILtRsN53S50n4llb3MND2ii%2BQyqOh%2Bjkuk8AT8czYYg7Fefe2ortjOtE%2FJ06WHavtsiXDlmj2K0JMAYkcUUW0WkBGJnaGHH%2FOTMW4rVsz6A5AQZiGYcg3YqFW83Phw0JtID%2BKGdJCRo30FqiN%2F%2BDr0rITcSyAiV8rGduyvFWI7ZC5QinKzt7fLJEOUJold5f2c8OCWTIbFHarzIBrwnDGdbGB%2Fbo1UzhgtYOlRRgLySdS2K7boB5SxfW4YeRYFS4JFst%2BPfTMrekuz5smN%2Buf7JwQClGQ4mpcrvb3aJOZwbEfyM8fYOJv7bwiqESJTTJGei0lQpLv1vAkxMJ%2B%2BdClMwspFHk6BNKmBWXdRH8yXjmKDHoCPFSIp1FaQU8ljblYoSA4oi0Qrfzbxq3eKeF0KF3Ow0MICHkMEGOqUBRzUtwXHtR4A%2FvZO8yAFmR8F5BYKzYtQT%2BaBh2VRT67%2FdopV3TYg2%2FF5e3JFktoutsTTVzJfr9tSYnKmZ%2B7SF27m3RGY7paXYK0LQhEe%2BZr238fRuoZUlzvJ7TmJ5Xr5gwnUxaOhZpJouXnUf1SlehTPfSb8I2loq7Ku4dV589ZMX42waxBS2aF8AvW0kAGYYAjfDCAWM6CfHADUn8qnsTlRm5bh5&X-Amz-Signature=6a5f07af02663421f3af01492c1d3bfe9ac020693686a42f5c82a89c61e61a03&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZPDLRLF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIBM6HVAjDvNAcfZWYpW8CLWxshxpb90hdVfnDu4faG5oAiAJtFFYWeMrCAwsbGCKvaukz3Q1O0I94YTFPpjDVxmI1iqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyMmrpC76y3CcwKR%2FKtwDcUZaaHz6Q6d0JNGVuiFhtzq1swtHGaoVojIplhOPL%2FibqDShLbK3yOdV%2F%2FdPdrgHKIrWmBvq%2F76TYujpkO0TBdS0M%2Bt1Rwle9fCFrwCdLwahXSya1smHLFCUl85S5yma6ECI55AR%2Bm8I%2FWDOGSMHzG6X9mySAPPc3uK4430BAt4JUHypYiS20ggzQiQlEVd6LSKj5BLCvu4kmSQbnMiouToj6Trnsdd6CJHiUazYqCysczZRuRZlg%2FUbQVavSAPRRzMJEGcDBN8C8lzrmO%2BxN0oC1UjnH2kayUOIfO8iHo9%2FORndFhjeSNJJXKwKfyN%2F4oraW%2BS2GZ0mYPoLkvNev8Tf4T6FFVN12IsVHyZR7kgJ7Tv0oFuzrzQB4yocPdv7g7MABkp74LNZ50ZYLrRpD%2BFxI3%2FjPFOQMpOln%2BoMef0q0ptknghVKGsqRhKI3pc71MeMT49qG1UFRfG%2F6NCP8MsPfPgLClrmXpeoAmStW6UGslrrnAPJa7bauk7rR70xtopyV6j7F1Lu%2BOY8KX2McQMCDABHe0T4mMCkJGWH7l%2FJ5q8N1zTAOmp1%2FBhE1LU%2BLLB%2FPmmTorQNm9ddak%2FFfPYCUW7Eq0HMcKF2HzQ6wxSdSBCSUuxLsTNnj1Iw3I2QwQY6pgHg7smi9JfQn3q32DdfWHicAiGKdVLgWH5f16T7RecHvAn6XfyG5JIzEs%2B%2F6nRHlKUuu7ZGA3pakUB2Lrgdh5LbtrHVGfDX0jRyTQ7N0JYV8uDSwsF4DbcK%2FiOkIBWpMejl77b1e%2BcpgjYKEMT4HgNdfgYSO8ntdMYoKlrk8XOfbxwPXf1xqj5Evnu58yBv7FC9sbQZL%2BJ9fqAj9Sgy5pYX2MSkt8Ed&X-Amz-Signature=42fd969606beac512c82d9f30e763a6c93d2084f6a798aa3d18fff0a8613c174&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA6SAJHL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCRUxtLNspV%2FiaObztFaHTaIOZxU66VuLPMj02H1hdpcwIgNjSlcTu%2BbGOMGAIUqrjGR80TrsJZp4hxthsf8KwWLDkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3EdxElSsrF7lZQfCrcA%2BuNJQh1Fph0Xs0UCJSahyTb3giyhxIrGB3MjxHpaZxG5WoBzbDM8EPb8F7z8zF9lrv0kOd0MoZh0xPxzm4djaml7LgM8nM0CJC1ba3psfsqASTnvei1P9%2BYxMFvRFrB5YveD28UIclku9UHNS%2FzZBN4Ffk2lzsRlHGBmfyhwp9c3CqO36%2BWsypTgF6IRMNP6s467tvFMyup8bH3kvAAuxhhvgeSPagr1H0gpCiga8ozoj79aFBCGxyAGvBXUbqQcbnCBLy94wsKFA2s9Dn9uUSHZdi7q8yab%2BX5slpEju5ilQe4kA7Xjo7p8VJMVwiCZaACTa4ffW%2BKIjUbz7mlIi0vF2vSKqGTOJmwDCmPgas9KXB2KpLqoBWzlJeQpnARqd4TipuQ1T7zTHOjWzV96Ha3GrKh8PyDxazBK5D%2BAh%2BlUmr1qG5e9LsQCO%2Brb7XznmPZ1wAT65LfXq6Xvcc7z1Uk%2BFJPJWG5DFtx2lz5G8vWNVFeb55LL%2F1fkwroPAfY9fSfzOq1XPOnP56xDTANvehCIdiN5YgynyW3Qgp1F%2F5Y87oq6IWwsPekG96Mn1mXAgLyjTHEN%2FmTpB%2BtqFxP4qY3wDXFXxvbkRtgiNlh%2BSmwvNnU1Jjf9gf%2F%2FtcWMN6HkMEGOqUBSkjHR2vUTRow85xDqt%2FXfnQqHrfCgZasZpAXepKHacQrEX0wUQYjbgbL7kar4fZgcbOSANzJeVnY3WHrvPGoVF5oOBhbWaGJPY6SUinuO%2FMJoefX8Jn1x7TtCf8ld8obdieQ%2BIRmoO6GisiM7vcKFAFOaotOuGY3EdgfgM0x%2BPGrKagxnEwQjMX4FIqzdcWtH0wvyyxXOFcZ25%2FB0px6XSHWzW%2Ff&X-Amz-Signature=49e885e0b15455e4917f1423ef723650e65a5535fc64a96e8da8a2b3123f5790&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONSGM2N%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T033415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDfHlyN58GajHj2b1y516X9EOmM9TzpCG8j8FTuyVzOEAiEAzvPgUsBfQlywYyiHlETJBAmppGsjEHTYRFZqNsMXg6AqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGMBoP6en87ubjIsSrcA1OpaOQbbFniI%2BEXxBPQQTTbaodIxzh0%2BWR8UquGoYYdDUNZoEB0xs01K2Lj1wBVCi98LvAYGS%2BnyhnupXeqw96GhYM7J5e8dc%2FkwmxQjfkkOwn%2FaWS9E5Ki7wLVlpVN9b9JLhFayLKYdFo7yE%2BhmIChIGLldsHP92EbddTGomT%2BCyvKr05peoaVr7z7j8QpIqC%2BJsnnuI%2F1BKMfpnAdZFAPiiq%2BJLYiUILtRsN53S50n4llb3MND2ii%2BQyqOh%2Bjkuk8AT8czYYg7Fefe2ortjOtE%2FJ06WHavtsiXDlmj2K0JMAYkcUUW0WkBGJnaGHH%2FOTMW4rVsz6A5AQZiGYcg3YqFW83Phw0JtID%2BKGdJCRo30FqiN%2F%2BDr0rITcSyAiV8rGduyvFWI7ZC5QinKzt7fLJEOUJold5f2c8OCWTIbFHarzIBrwnDGdbGB%2Fbo1UzhgtYOlRRgLySdS2K7boB5SxfW4YeRYFS4JFst%2BPfTMrekuz5smN%2Buf7JwQClGQ4mpcrvb3aJOZwbEfyM8fYOJv7bwiqESJTTJGei0lQpLv1vAkxMJ%2B%2BdClMwspFHk6BNKmBWXdRH8yXjmKDHoCPFSIp1FaQU8ljblYoSA4oi0Qrfzbxq3eKeF0KF3Ow0MICHkMEGOqUBRzUtwXHtR4A%2FvZO8yAFmR8F5BYKzYtQT%2BaBh2VRT67%2FdopV3TYg2%2FF5e3JFktoutsTTVzJfr9tSYnKmZ%2B7SF27m3RGY7paXYK0LQhEe%2BZr238fRuoZUlzvJ7TmJ5Xr5gwnUxaOhZpJouXnUf1SlehTPfSb8I2loq7Ku4dV589ZMX42waxBS2aF8AvW0kAGYYAjfDCAWM6CfHADUn8qnsTlRm5bh5&X-Amz-Signature=ea39293d893baa66535290380444efb41860dda1b5d5c6113dbf45a8ecf76efd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
