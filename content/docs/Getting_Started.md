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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNIFDVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCcjlgCG85%2FpUtE0baNYAI11M0198kCjxUgqRGimcmkvwIhAKAkn9yaZnMw6EDRUc9SOR5Rtmu%2FrbAnUOg3bjzEfT8AKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJcvXtyudwHhUch0wq3APzev5R0LMWoC742zxzSrpvNX9B13y762RDHPyFkT4jSGzLigEsGzxqOC2y%2Bsq%2FdYO2vcj0IowXwmlO7KI6BfuB%2FJVoDM%2Fb%2F14eJR6oleLCC%2FQ3R%2BgFZxprQYuKJBZpRN5agAmMYBnpniCryyaqptFF%2FmJlpOUalICsDhx8P4renGKzrIaTr%2FYmdNwVoR773sTxICmc8pdzDWGQrCZJw3x0XZaqcAeVT7bX7%2BGBixbHRcBF19b5PC39oiV44LVmUJvrS%2BjpUKdldNxT%2ByJhfUIqqE2q3Qe5H9ghefQoJtVdekTl%2Boy6Ka54Bawy4LIdolIhDCxXTmtX9bfyXitCJewwhv%2BvjYbrdq6oJ8Mt8o7w2aPHE2LDOp92Q8NmG2n7Iy%2Bktr9JxK%2FNBwRAlB%2FRPbXTJozmc9TLQozt4obVAKPjREttWKdZ4Zc0mRYXurBiRF2ux0px1P87XWW3krUBxZLshmAshzG8KRj603C5CjWsdZ0xj9B7HmK1hRcIbezSuwDrjQLU8uhnrb42NVMROAurhs9%2F2rMLaUZAf763UWjE88%2FHfiCL0vAlalHe%2Bty8p9XQ78cSNBj15NIuVhhrvJzImART%2FdhAnlrdXYyQnegNRYzF8oHlY0VvXullhDD1pK2%2FBjqkARgYtCmdBLI8TgsAcVd3B8THaIAIDVDytVQxCZ6c36BdD2Ua69QSWUJ8ohwkHFxfSHgv7crqIeHD5CtV2GF5y7T%2BcFJbgntsQDwsdJSxpTmBNp9BHZvz3d53o8rBTxZ5QtwYj3WoL%2FPwttcoeuMw8ezsaqRgFjAD8921RCLDjXch%2BWD7iHqldBco51u8RK1cm%2FDOfxR86nG8Bi%2FfhTt3jtcguq%2FT&X-Amz-Signature=0eb04987bd85e383e30892204378390aef8e6fd449bee84c278ddb8d75ff630a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNIFDVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCcjlgCG85%2FpUtE0baNYAI11M0198kCjxUgqRGimcmkvwIhAKAkn9yaZnMw6EDRUc9SOR5Rtmu%2FrbAnUOg3bjzEfT8AKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJcvXtyudwHhUch0wq3APzev5R0LMWoC742zxzSrpvNX9B13y762RDHPyFkT4jSGzLigEsGzxqOC2y%2Bsq%2FdYO2vcj0IowXwmlO7KI6BfuB%2FJVoDM%2Fb%2F14eJR6oleLCC%2FQ3R%2BgFZxprQYuKJBZpRN5agAmMYBnpniCryyaqptFF%2FmJlpOUalICsDhx8P4renGKzrIaTr%2FYmdNwVoR773sTxICmc8pdzDWGQrCZJw3x0XZaqcAeVT7bX7%2BGBixbHRcBF19b5PC39oiV44LVmUJvrS%2BjpUKdldNxT%2ByJhfUIqqE2q3Qe5H9ghefQoJtVdekTl%2Boy6Ka54Bawy4LIdolIhDCxXTmtX9bfyXitCJewwhv%2BvjYbrdq6oJ8Mt8o7w2aPHE2LDOp92Q8NmG2n7Iy%2Bktr9JxK%2FNBwRAlB%2FRPbXTJozmc9TLQozt4obVAKPjREttWKdZ4Zc0mRYXurBiRF2ux0px1P87XWW3krUBxZLshmAshzG8KRj603C5CjWsdZ0xj9B7HmK1hRcIbezSuwDrjQLU8uhnrb42NVMROAurhs9%2F2rMLaUZAf763UWjE88%2FHfiCL0vAlalHe%2Bty8p9XQ78cSNBj15NIuVhhrvJzImART%2FdhAnlrdXYyQnegNRYzF8oHlY0VvXullhDD1pK2%2FBjqkARgYtCmdBLI8TgsAcVd3B8THaIAIDVDytVQxCZ6c36BdD2Ua69QSWUJ8ohwkHFxfSHgv7crqIeHD5CtV2GF5y7T%2BcFJbgntsQDwsdJSxpTmBNp9BHZvz3d53o8rBTxZ5QtwYj3WoL%2FPwttcoeuMw8ezsaqRgFjAD8921RCLDjXch%2BWD7iHqldBco51u8RK1cm%2FDOfxR86nG8Bi%2FfhTt3jtcguq%2FT&X-Amz-Signature=9e2ed56645fd983c4ce0eaf51e2a2a74526373ff78d62b833c7dd5d4dc0088e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO6Q4UFI%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCTNdmNlZnmVOWOBjDFegGr0Sdr3%2BpTXuPdWkjANiD1rwIhAINUSAr0zB0Viuu8n1cR90kNOXq2GxDz568uFWU34Ev5KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxF89zj4eFT9ifhHcMq3AP55nJtVSeN4hcoRnKEcZ123HDrjaKL27GXlqeZeSHDQb%2FHw36roa9SoGtOpTl5QJRjxs%2FHZGqpzdtjCbkkv9XP34W5IakLluWXeWHJcrJciGdCfM8Rfp3K1VQi9aWmq7mbgi3LCxxW3yJ9gjxiotabup9ZNaoF3FZnX%2FNwBQxt4Aw6CneRES5sij6%2F773J19ZzG0Wq6fo5MsBQ4x6xUdxjPzXMmx6ag4Eq4qdqJOUVa8oGyLoP8GQzhG2ttudJtq1oQdQfUgt%2BhQhF%2BR8VQNRQSqv%2FByyeB5s9TXUfbpEdAianiBygiSOZIlHK69MVDqbfGRxADjM%2BDNZpSA2cpM8StyanTVLvMTpilnl7IXzDGSDd1lOKgp%2FJSm9SdJxxrKOlz6wNJaAT7hlVp40%2BcdS0Xh3DJnqe6BxjgtRy1OGX2mz7uf5dXXHaSQqZkgaz34650gb7WmPItcP7oBD%2FATkh3%2FyAqEhApM7SZzFLsRQFMrCmz6Jds4GDd%2FAYwVcEXXre9LRZxZBjeppuyC7hBUU7UCbIiNUgHGY2I8diNj%2Bv49N1cgWHCpth6vPSejW3H8UvoYPVgL6fl7BoMSFJzxy45yShy0g21PPZkndBr%2FcS9sLpUsgybgBw0e%2B5fTDYpK2%2FBjqkAXogGdPUhPIGTKNLNsJT9lJYaZIQm1C4OuOeTMyddMjLz%2BilrdlTgeJ%2BLecVdUZe5j4wpuxwLP7JSZrnNL5X5Fdd3zk0OCImie3NO2dQtYmGyUAxo4UOoxPFk2rbeBElfVusq0fUxMf5diR1Y86o%2FhnhXDpEPLaPGoqDA1KnDeVrBbqTVRDvTmotYYwX9kbL5aqFB9vhzjA6%2FVEHvyVMT2j8yduS&X-Amz-Signature=4dca999220e736fc9d6318c32923d6fca1963086947c20230f988b445fd23aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5HJLFD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCICzpOWX92VTwnuSd3kzKdmqXy2IjgqOG%2FKLEiwPlb8DRAiEA%2BlMgPyPjACU6dC9Xx1P9MLYlv9y3rVYZNDMvJUPpocoqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4MUIycmRL5fip7bSrcA6GwjbUOnH4o9nwYvigBcCkZPw2CQTuMHnYujxB3hWcYuqWKkS%2F5m8M82fsA6XyhCazX74uogqomlqti52tO2FWGdQBNoF8OIsjixMXDA6jKoa7NqC8ZWY7RlSEFa49YgVYOrG%2B55F8ikCh7zalWKZn1QDphFUGDiEtK0uAUIU1kYQ%2FiZQ2I%2BK5uDzBVC0SCWbGQKbDNMF1SFJe2jp0Mr3jxdA5lhnap%2BFeEK3XVVucqY5SieRJEFXgCda0dRhj7cGOTWZ%2F3JbKbeptAXNUM9G6Sn52VCikt5Y82JGZjrHHc4%2BXivF6TmwmJXgkphOSz%2FevcUcC2wqqsPUUTBrOHfJV3HJ9trbl46%2FIwT9KEU3AX7ZegpLDm6oh3QHhhCyWUFRKYtLuYjVZHT767KkLQJFRAOObQALq9ARG9DeBumJurivJFmYWUPw%2FPzI2YoHK7PNaa%2B7R4SnFJ9br5totODgmxlPBcxm7GAO3z1xpRhjm2pt4vzAw4Nn1uVMbdB%2B8o5PXhcyjr1d5hDINXhKVPoC2hFQ0JA%2Bhx84n%2FjpGue5aZv2z81uj6icLVWezmUUzBGXIzJVqOJAvdHkkbUOhkCV7kk3okWr6jMENjKiwznfrXazmhurNbyw46o0z1MMy2rb8GOqUB38zAoeUA31i1tkWGyBKAaFu38l17JCljJ6OYKT2NAJ14oUVSdTwuBV3G1QQ0JYtI2SMJXEBf6KB7T%2BNEqTbE%2BfnPNeF8hF5pX1I4UL4LU7i2AA0P82v09WZCEYTK7KylVWsFCL1vERDPaSkpFExYgavLMUjCKE2fLs7Ew4fxVvLsCB9rVS2xVScCXrPi1aDV0yFQpqo8g6MWoxL5%2BgJs6vMSTXdi&X-Amz-Signature=cf4a3c697834b9006a7c00bdf7b2d8f8c2e9fb32ee6f6a8872c7de4de2ca785b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNIFDVE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQCcjlgCG85%2FpUtE0baNYAI11M0198kCjxUgqRGimcmkvwIhAKAkn9yaZnMw6EDRUc9SOR5Rtmu%2FrbAnUOg3bjzEfT8AKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJcvXtyudwHhUch0wq3APzev5R0LMWoC742zxzSrpvNX9B13y762RDHPyFkT4jSGzLigEsGzxqOC2y%2Bsq%2FdYO2vcj0IowXwmlO7KI6BfuB%2FJVoDM%2Fb%2F14eJR6oleLCC%2FQ3R%2BgFZxprQYuKJBZpRN5agAmMYBnpniCryyaqptFF%2FmJlpOUalICsDhx8P4renGKzrIaTr%2FYmdNwVoR773sTxICmc8pdzDWGQrCZJw3x0XZaqcAeVT7bX7%2BGBixbHRcBF19b5PC39oiV44LVmUJvrS%2BjpUKdldNxT%2ByJhfUIqqE2q3Qe5H9ghefQoJtVdekTl%2Boy6Ka54Bawy4LIdolIhDCxXTmtX9bfyXitCJewwhv%2BvjYbrdq6oJ8Mt8o7w2aPHE2LDOp92Q8NmG2n7Iy%2Bktr9JxK%2FNBwRAlB%2FRPbXTJozmc9TLQozt4obVAKPjREttWKdZ4Zc0mRYXurBiRF2ux0px1P87XWW3krUBxZLshmAshzG8KRj603C5CjWsdZ0xj9B7HmK1hRcIbezSuwDrjQLU8uhnrb42NVMROAurhs9%2F2rMLaUZAf763UWjE88%2FHfiCL0vAlalHe%2Bty8p9XQ78cSNBj15NIuVhhrvJzImART%2FdhAnlrdXYyQnegNRYzF8oHlY0VvXullhDD1pK2%2FBjqkARgYtCmdBLI8TgsAcVd3B8THaIAIDVDytVQxCZ6c36BdD2Ua69QSWUJ8ohwkHFxfSHgv7crqIeHD5CtV2GF5y7T%2BcFJbgntsQDwsdJSxpTmBNp9BHZvz3d53o8rBTxZ5QtwYj3WoL%2FPwttcoeuMw8ezsaqRgFjAD8921RCLDjXch%2BWD7iHqldBco51u8RK1cm%2FDOfxR86nG8Bi%2FfhTt3jtcguq%2FT&X-Amz-Signature=b18241bffe8d74b193b042f2fe0ce39ef1472f4126c0d94b9f8f983d468add45&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
