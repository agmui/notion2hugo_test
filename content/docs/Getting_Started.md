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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGVDHTK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd4rC5Vx%2Fx%2Bfk5NXHJU%2BKSRlmm16XUmB%2BBxCCHZg63TAiEAiFJTCbWgEQVGhSYYN%2BXfqiS3%2F%2FvJjSJRp0tn%2FFh3jGkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXr4i96SXAJMJOg%2BircA7UwcINAJjPUW5VQnOTp1KqFln1mHFr7s4awg3I5SLMsrGgnmVGYo6dWj4uADmPxcKX37AAMVVh8DB4%2FPSi6s3qCVSt9zC7xRcCJwQrtilhhasYgzIYfrMy%2FbaDGBrVEdK88r%2Fspyug6c1TuWlkq24llMn%2BxL8GJYR2dlfJ5PZOzrruWSvUGopdfml0778vcuy9932x%2BkuN5RBGAm4bozRoISx8I%2Fr6mY69%2FxbJwbGfJ0VMrEEO2QQEcU8MiPXshu9TBCAOR4zcBi1MjkWCYd96RNvK6LYsTgsEAbD5yED0q4B7RBJ%2BgEJLnEjQZ3GtVu7VF59zcRGttrGm5KKn4fuuA91e%2B3DGtSJd04S5MZTHUVGj5pjMCEGkjOTfapOJbYtsLEqADmPlwP8sZtxglnNAcmPnuwNDfm2cCheZwuFxAg0y0Ncxy%2FxjrXdk0s4pnpVwTupNSpBsNDrReDIymLfLxK7UPA4mqr%2FPT2WJgyYpGiEqHh7Wyxt%2Fx4GnyWvLi3QPS%2BsCw4LHdRHO0sTKS4Qj%2Butc4avkhVYTiytyt3aC%2F79Or5oUeSmQpa2AVPyBF5oCMSiEWprrbZimHnjtEPp%2B4mtFL9lQh8u91XUK8RCnXbp4dLksQ9FuT%2F%2BPHMKHi%2FrwGOqUBduy6DD80evXhlOiS0WL3pA7teIfU8VsOhWY6vxxFirgbsbqO0wYo9cn6Hx7DfdW0hQEmXYzVfm7B3GTWwBDFHXAucXn2OKJ%2B0%2BBbKGkcu5m%2F3nw2UUUqoUiyWnVGXnyNP7bjNLUyzMcSZjr%2Fo%2B6Hw3AA7OyqU6iBRGTLi7qguOfZWvMsn0H5PtIRnSmBf55prWGbPxrNuUMFduyuxils%2B9QomlUf&X-Amz-Signature=25fbd446467491ecadfee80ce5fc916126027be31a510b1b092edc457c40a755&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGVDHTK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd4rC5Vx%2Fx%2Bfk5NXHJU%2BKSRlmm16XUmB%2BBxCCHZg63TAiEAiFJTCbWgEQVGhSYYN%2BXfqiS3%2F%2FvJjSJRp0tn%2FFh3jGkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXr4i96SXAJMJOg%2BircA7UwcINAJjPUW5VQnOTp1KqFln1mHFr7s4awg3I5SLMsrGgnmVGYo6dWj4uADmPxcKX37AAMVVh8DB4%2FPSi6s3qCVSt9zC7xRcCJwQrtilhhasYgzIYfrMy%2FbaDGBrVEdK88r%2Fspyug6c1TuWlkq24llMn%2BxL8GJYR2dlfJ5PZOzrruWSvUGopdfml0778vcuy9932x%2BkuN5RBGAm4bozRoISx8I%2Fr6mY69%2FxbJwbGfJ0VMrEEO2QQEcU8MiPXshu9TBCAOR4zcBi1MjkWCYd96RNvK6LYsTgsEAbD5yED0q4B7RBJ%2BgEJLnEjQZ3GtVu7VF59zcRGttrGm5KKn4fuuA91e%2B3DGtSJd04S5MZTHUVGj5pjMCEGkjOTfapOJbYtsLEqADmPlwP8sZtxglnNAcmPnuwNDfm2cCheZwuFxAg0y0Ncxy%2FxjrXdk0s4pnpVwTupNSpBsNDrReDIymLfLxK7UPA4mqr%2FPT2WJgyYpGiEqHh7Wyxt%2Fx4GnyWvLi3QPS%2BsCw4LHdRHO0sTKS4Qj%2Butc4avkhVYTiytyt3aC%2F79Or5oUeSmQpa2AVPyBF5oCMSiEWprrbZimHnjtEPp%2B4mtFL9lQh8u91XUK8RCnXbp4dLksQ9FuT%2F%2BPHMKHi%2FrwGOqUBduy6DD80evXhlOiS0WL3pA7teIfU8VsOhWY6vxxFirgbsbqO0wYo9cn6Hx7DfdW0hQEmXYzVfm7B3GTWwBDFHXAucXn2OKJ%2B0%2BBbKGkcu5m%2F3nw2UUUqoUiyWnVGXnyNP7bjNLUyzMcSZjr%2Fo%2B6Hw3AA7OyqU6iBRGTLi7qguOfZWvMsn0H5PtIRnSmBf55prWGbPxrNuUMFduyuxils%2B9QomlUf&X-Amz-Signature=3eddbfc8210d6bb5688593c0b895a1934a2555c82b32f47e69276df33e4b307a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWDP5TXE%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPl0C1E%2FCjSDYzyA3qq%2FMwgcH2SzOEQ6vjFL5nhjHu6AiEA9ZKpB0znUgQgoVRBXqkibJEiEh2HC3TpucftLuJ%2B7bcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrVj1yn4UWlPhIYqircAx5aUW1B7oqKsK2boIWfcU1sDynNwlNcJRNCVuCQhJSWk%2Bqqv5B66Xq%2Fh%2FLx5crVoKCK7WoUSR65Lm%2B02%2Fb0jZuWQhfY9wWTv%2F2gjpbpm9MNG%2FmW7SMCxlF50onIx7VYwW2ECNcpiyxUGAbu95CnN1bx6Lm2k%2FXOQJ7ybceyL7FPJVMRVRTJw1N59qPv723CyqvgVYyA1Jlv7fdlbEKDemR90xC%2BCgWUpVCk07Ux3X5MfAJaPyobqYcvvHRk%2B3Or7gbhiE3YgyB31ypDe0S9kWI6T%2FZiaRLpLawiM%2BttKi50%2B1iY7tw4kPo0IVB%2F33T3RRBz75HnUSmr9rQGf1opCqh1Px07NX%2FzhsFOlFz8v4m8IGJiqUVz3aPuBwOwYhhSBEV7GfHB8YZHveokecynCkgNbTUiSJkPzQW0ay68sNWhWq69qX1Wf2HvlP0N3PyZQrDf5c5bGx%2F9rZV%2B2KwRt3AY9rMsKzr5IC%2F0li2qYJ9i1LjFr%2FRtlU3YwZBt06CUFsHWb3vvL3wTc%2BfP959EPjhi8OqKVQHckUuEguAd9UdW5dPJ1fkV4FDC1SGUBt%2BKpwkZvrrjQJj0HypDRTRxKlhSrvyBNLlWGOnj21V9%2BJmhsGh2vdMKlLglbWOJMPLj%2FrwGOqUBpFxUWf8hD1BMLK4VDjhfbgWdVzxH7s4Lc3FaguUdK9LfqFUCE6urYvw%2F%2B1OwVttUpylR9Yq%2FZ6ZuiWkP5LY%2FTBW0mQDAXn4xjFv1wQjb3xfs%2FUxK7SmvE4sAmVAfGrP%2BeM283OEdZ8BPz8Om%2BOhBytqbjdM6NQfOAmeqIOP8C8PpkNNi2HZ8JVo1%2Bzxqy3ZtnNsOkN97RfzfAsDQnnoBeK9I0Cig&X-Amz-Signature=50ba4c148910e8bd689a6a84a5c634e3f7ff750d7e6894995c2d1c5a325c48e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644WEOT63%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF%2Fl%2F1zG3AcvgVI8WzQMQHcEc6Xd6j4V3R26LLIidBOAIhAKRt2hEyG9jlIRpNeqILRs%2BNbz70KUxZfopPXD63EBfOKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVnQJ%2F4V%2BUSRPXx3sq3ANAmDLaFecDAu%2F7lexifp0Jwexdw65jdrmZ5XzDJI2OPP4XLnYH%2Blkzef2fJslAvjiERy1y0IMIRXIr7r8pXun9jO%2FJba972c4VwQjYH%2BmLU7x4q2mo9OlBVQg3jBcV9L8wFhon9CxhljT9F%2Bf3zM7pvtzQG%2FCKQHBdTLUrI2w0Ynl3Zl9JLym38n1LGShQSJ5n8se3tpxzf6FMrHeluxLWNzfLUerLtFACtGkGNEoL3d5N%2F%2BnBCvcCZTZJXFfjGkb33INPjZEy1QhDwbioNv0rMiKW%2F4flKGhvMOV4XbhUPWTHNlcXDzqmaq3yoVoNNanEO1YqT5%2BSs3i8%2BtBMsoxhzBlVZ8CSRSxNW4QUfFBqbRfdt5SYTJjf1dxIRh0BOhfz5hoPJ%2B8GOCiKSpiWtsZPM56RQQl2NXsyXXrulhs5aK2zlCCL5HMFcusQk1l8%2BxyYFM39dck89OiiD1qHMCUzXU4DiHzDX4%2BC1xQJ2z5hhSdePV5I98fGafx7u3tTVoOa3%2Fxv6iCxcUQZNgL2AiXFvSUDia2H9A6NDZf5X7Qlhb%2Bu85FJcoNaIPO5PucvdRCPL7s6GTS1ka35hzD0hm2cW%2FIbUSUv3BEtv4WnMA%2FVEBB3niRwveZausxsZjCh3f68BjqkAdXzunlMae%2B2TH4akte2TfngMg3sHHV078lNRroluD2STjgAesFnuuPwFtTSwUugJAA4kebDKLQ2F%2BghZ%2BWDiIjBeLPkuQc9ZQ%2BHw6kvjl0mWh5CPYYE86K%2FEGdz8Nl6678aV5wCBFEmnzc%2Fji%2FKBqQnGvGNY7s8oVRyMBHFXqjfQErmU4f6UDER0F0%2F8qiB8V0glVQRhplGAylEIEBQYRg5uyNJ&X-Amz-Signature=c6e61a579a55b97b0b15853b3a4260f5279be0c79b1f80ae4445f987597eb40d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEGVDHTK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICd4rC5Vx%2Fx%2Bfk5NXHJU%2BKSRlmm16XUmB%2BBxCCHZg63TAiEAiFJTCbWgEQVGhSYYN%2BXfqiS3%2F%2FvJjSJRp0tn%2FFh3jGkqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXr4i96SXAJMJOg%2BircA7UwcINAJjPUW5VQnOTp1KqFln1mHFr7s4awg3I5SLMsrGgnmVGYo6dWj4uADmPxcKX37AAMVVh8DB4%2FPSi6s3qCVSt9zC7xRcCJwQrtilhhasYgzIYfrMy%2FbaDGBrVEdK88r%2Fspyug6c1TuWlkq24llMn%2BxL8GJYR2dlfJ5PZOzrruWSvUGopdfml0778vcuy9932x%2BkuN5RBGAm4bozRoISx8I%2Fr6mY69%2FxbJwbGfJ0VMrEEO2QQEcU8MiPXshu9TBCAOR4zcBi1MjkWCYd96RNvK6LYsTgsEAbD5yED0q4B7RBJ%2BgEJLnEjQZ3GtVu7VF59zcRGttrGm5KKn4fuuA91e%2B3DGtSJd04S5MZTHUVGj5pjMCEGkjOTfapOJbYtsLEqADmPlwP8sZtxglnNAcmPnuwNDfm2cCheZwuFxAg0y0Ncxy%2FxjrXdk0s4pnpVwTupNSpBsNDrReDIymLfLxK7UPA4mqr%2FPT2WJgyYpGiEqHh7Wyxt%2Fx4GnyWvLi3QPS%2BsCw4LHdRHO0sTKS4Qj%2Butc4avkhVYTiytyt3aC%2F79Or5oUeSmQpa2AVPyBF5oCMSiEWprrbZimHnjtEPp%2B4mtFL9lQh8u91XUK8RCnXbp4dLksQ9FuT%2F%2BPHMKHi%2FrwGOqUBduy6DD80evXhlOiS0WL3pA7teIfU8VsOhWY6vxxFirgbsbqO0wYo9cn6Hx7DfdW0hQEmXYzVfm7B3GTWwBDFHXAucXn2OKJ%2B0%2BBbKGkcu5m%2F3nw2UUUqoUiyWnVGXnyNP7bjNLUyzMcSZjr%2Fo%2B6Hw3AA7OyqU6iBRGTLi7qguOfZWvMsn0H5PtIRnSmBf55prWGbPxrNuUMFduyuxils%2B9QomlUf&X-Amz-Signature=aa036674960be1ad59c9e8be4f0fe8a6ebf147df752162abcafdb06fae729889&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
