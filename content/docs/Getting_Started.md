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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIBIJ3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJbxXEckHt9NEg7F0MPWg367S1kTiMuO%2BDfRslQaxcRQIhALQK%2F3Uht2HW4mQiPUeYGXra8buoKNKZokdYp4rR2dd3KogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKLKgQZDce4%2FqoTkq3AOw5%2FnlS3V5ooqvmrNgJQ%2BiBfYeMTEfYz%2BM5TOE2xr3jKUv84Ow7RFGeFhnOMrR9mvfYCvdVCYXTR%2FaFGNAbLysgap8FDcK0%2F1KS0WkMGeHwfzd%2Fxs2woa%2B84HCpFv5uf6Kec4o10PCpRMjmO%2BhlaekVdB7YO7iYiYDgYaYjmAOH%2BW8XujiBYmgAkDNezdsHeQBTtwkyDulBh%2BHuKlwhURl8MSJEIJ20ZMGTQ%2FXhVe2jZWI8scN2SV6c0rqq3aHGu%2BRyoIZHjklt3D9UeOPH3PwlLJ3oyK29werFysPaZ048depNy%2FE38DMl3m%2BzdtTatoem4wKo0MzETVzf6gzhHRMQu9uJEpQW4BbSRbE6cRrs0QqTtWtFCYeB7XbW762qylVBAhPFjLy8IOwWxIIC4LXPZZmrvzDgDIPSXUHDB5gLxHm4QWBW3sLqeizo%2B4YqPtXUQAHToucuPAipdFQQVcu5Ac%2BOT1F%2F3y%2FZxwtyGodkqf%2F3wxwJuB8ac8dGrKFbilL1e8vp%2BYbHYb851F8M8Kio2TVqvGt9UjjPDflBU8fbIteZz25NJ6YK1lwkAwOQN%2B7Hkjh8kAtLIDVQKSdNvtLcv%2FhvWJUmJodjs1SIn7jKNvYqe%2BsB2Fh%2BWH2HzCEqPa8BjqkAag0y166yZzaG1Z%2Fvn5KVMLL9d4azwhzjgpTVxbdnatie4wcs7nlG3V8zw0riTzWY6PHeijlbb4XJYagnJgoxM1MFzSBledyL%2Bzpsbr5pu6dP%2BgDHhPOLpG%2Fffo%2Fqn7CG0OpejCG4f5Kg1Sv%2B5wAJleQSepTN27qh%2BCqHHq1NUVNJyoSVHnorU6HxUfq5BDH78jefhNvVxtoK%2F2rJ9tngZs4Syic&X-Amz-Signature=929d84f4c240b7bd95b2059ef45198162a3e9cfbad1962aa624168c83cdc9bba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIBIJ3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJbxXEckHt9NEg7F0MPWg367S1kTiMuO%2BDfRslQaxcRQIhALQK%2F3Uht2HW4mQiPUeYGXra8buoKNKZokdYp4rR2dd3KogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKLKgQZDce4%2FqoTkq3AOw5%2FnlS3V5ooqvmrNgJQ%2BiBfYeMTEfYz%2BM5TOE2xr3jKUv84Ow7RFGeFhnOMrR9mvfYCvdVCYXTR%2FaFGNAbLysgap8FDcK0%2F1KS0WkMGeHwfzd%2Fxs2woa%2B84HCpFv5uf6Kec4o10PCpRMjmO%2BhlaekVdB7YO7iYiYDgYaYjmAOH%2BW8XujiBYmgAkDNezdsHeQBTtwkyDulBh%2BHuKlwhURl8MSJEIJ20ZMGTQ%2FXhVe2jZWI8scN2SV6c0rqq3aHGu%2BRyoIZHjklt3D9UeOPH3PwlLJ3oyK29werFysPaZ048depNy%2FE38DMl3m%2BzdtTatoem4wKo0MzETVzf6gzhHRMQu9uJEpQW4BbSRbE6cRrs0QqTtWtFCYeB7XbW762qylVBAhPFjLy8IOwWxIIC4LXPZZmrvzDgDIPSXUHDB5gLxHm4QWBW3sLqeizo%2B4YqPtXUQAHToucuPAipdFQQVcu5Ac%2BOT1F%2F3y%2FZxwtyGodkqf%2F3wxwJuB8ac8dGrKFbilL1e8vp%2BYbHYb851F8M8Kio2TVqvGt9UjjPDflBU8fbIteZz25NJ6YK1lwkAwOQN%2B7Hkjh8kAtLIDVQKSdNvtLcv%2FhvWJUmJodjs1SIn7jKNvYqe%2BsB2Fh%2BWH2HzCEqPa8BjqkAag0y166yZzaG1Z%2Fvn5KVMLL9d4azwhzjgpTVxbdnatie4wcs7nlG3V8zw0riTzWY6PHeijlbb4XJYagnJgoxM1MFzSBledyL%2Bzpsbr5pu6dP%2BgDHhPOLpG%2Fffo%2Fqn7CG0OpejCG4f5Kg1Sv%2B5wAJleQSepTN27qh%2BCqHHq1NUVNJyoSVHnorU6HxUfq5BDH78jefhNvVxtoK%2F2rJ9tngZs4Syic&X-Amz-Signature=053a70c6bb5a50fa2bc4f18390cef1069cc3426a7bbd7f7149d88d7a846459f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSSHHEK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVNbly37JQObTNQm9S9ef6%2BfmCxWW5CmVUj2SjlzqV%2FAIgOrwmCtuOe%2Fcejcgicigg4xCfD2sDSE9qDpsaMQI0kmIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdDrZiNzfvZEZWGTSrcA2bu812sDHuzs%2F%2Bgw8KTobrDj1Jmxb%2B15GGpGyFuUIic7dI9UF0pPNAL1T54UicO0uG4NLVl0TKDUfYwsVQm11SiFc4rsGjiwr84717l1jIddvASGpFF2sFmCVaFoFeiqNx76BI3RwE51vo7uwa4OcRpXYb3Er25docZg0UVOQLsLbv8B%2FkyBR7ikv2DOhpyTPGz0OOM9Vzwvd36gBHZCULkqopvqE1QQpcBG8BrX4DXdN0yzutyiKiQFDLii6dMUJGt%2BFVm1Bo6sdyFk8WskTUV2AWJOht0Im%2FbGgq%2FS3Wt4AAKQ1BT8uzvMG%2FEi2anOuPCvqPWb0qiaE9ORq6UOFolcBJU4dgVaI5CEiRcdVFTHNwHmvM%2F38mey2lhkdUEuCVuoxeRyWYtoh0MhqFDX0W%2Bs%2FkZ3bjznvCg3mWFYh3jOzRYvX5Z%2BYWmCoGYYYm4lqABOw%2FYD2m4bWCbxjBPdUKBU0q81Vx43yzMjf2w4mzEyMAOaRjVi8NgwO4rAPUiK%2BKnXVCh5yWaIIHAuDdnBwcuWdHnsT9wywhGLUPpxehw1svfpy0JeZox7l7rPEhM5b%2F9Y%2BEOzplhN3FPOFc0OWMjHD28RWLMp6Hj%2FDPJfM3lJtvM0GNuHHxgikjQMPym9rwGOqUB9HmhOtHamyb4DNg9pFv85HVaSFML8LHdcOUwRcucBZx2j7rK%2FP2EZqG3Bs62cOD%2BO1E%2B7E7lWJj3SC%2Ft9alqKQLr3K8eaVgoyeHpz87vl6E3CXExo9cc1%2FzEBJSH36DOevvDvKi8Ok7fNSY6l7BnLcJ8w372aaZjZK0h8fZkaoiKzRNZL5YFtpH11F46vnacHF0RNrEJUAQRhkQMpPpU4%2F2WR5iw&X-Amz-Signature=1d61c5bfa82930f4ff4aab227af6a4c26f7bda9078682dc5156c41ce7ff589eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSN6KM4%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjSkgPdeZP4OBtKqSZ1INk29T5QtoPQxC9x%2BRgoqliaAiEA4w6F8pnZzVwbet29zFmPwINAWyFJWRa79ccd6Zd6uokqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvvztk685xv5tO5nyrcA0qHERCSGZ%2F7%2FbmTZCp5c6WnDSTXUWRP4ckHYbabeWjoTkbVkcObxDMXBr37%2BQ9myzMVDXOBmUGmVkpZXQAZtcrMTYWZdFcsQx0NgmBCiR%2B50j0BmLa2ov1MB2FP9%2FUv5ddCYZ6lh5KUWVF3MRXp4Wv4wnNVOQhPB0Q%2BH61xgSwUEu6F3ftD3qWV2OMKKyQ%2Blv8JBOJmOqKKNdhzBqT4xthopYbDYffgkbYSQT7ZzFnsWWQukF00sRlXJ%2FKpbHVJNO2c9au2DOiNFca9DKP7WU34GUntBoLfA8fBilDPGvAZSXgIgCAW29bLQt1Trilnd83QXGJgmVt5NxMPvGtHAAQy6vZ5mVS4USUnXVqohOdCNrGPGadXqNZrDnfQC010gu%2BaZ4jygQX1dWiranVxSUYudHaOr6mYopjQXCNrMs3vB77iwtn6aGi505mbVTzEsThZ2nhv%2FQ9F8bdTuaJglLbtAQT22BIfXCCZjNGULhngmJG5MHthh0Ur7y8g1dR%2F5ixj5cGrQs%2FaepCynbxYwqGwULBNZqyo3KUhUKJDBsZtw51HjMH7lRKCW05ahxgtyg%2Bh9YoOQz%2B%2BmnIIxtHDefV0GV%2FqsptkQ4c1wf6pQJKI5eH8i43V0RdlUatrMN6m9rwGOqUB4ooylOzaFeZuescI%2BK5SMsYwdzsp7LdiiDIy1Rs0s%2FHeniIIhPbKTEvhoOcsCatcJMfj%2FFSydNDMcAuK7HnK%2BpYgq6wV89g4MJH1S%2F9GEIZQU5tKXFNuYeQkIZ1JsSjQbzANfDK%2FhH8Te8%2BL3wRyV%2FGfJQVkpGOCVs%2FPsizjbRejnL3CETxr%2FM1cs%2FygoHRqkKtwqg9z2qFmCkR0BGSs4XNngQvr&X-Amz-Signature=4dec3964a72568d29e5fd4766077a03481f4c1704c5860f309ff6fe4c43e07c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CIBIJ3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJbxXEckHt9NEg7F0MPWg367S1kTiMuO%2BDfRslQaxcRQIhALQK%2F3Uht2HW4mQiPUeYGXra8buoKNKZokdYp4rR2dd3KogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZKLKgQZDce4%2FqoTkq3AOw5%2FnlS3V5ooqvmrNgJQ%2BiBfYeMTEfYz%2BM5TOE2xr3jKUv84Ow7RFGeFhnOMrR9mvfYCvdVCYXTR%2FaFGNAbLysgap8FDcK0%2F1KS0WkMGeHwfzd%2Fxs2woa%2B84HCpFv5uf6Kec4o10PCpRMjmO%2BhlaekVdB7YO7iYiYDgYaYjmAOH%2BW8XujiBYmgAkDNezdsHeQBTtwkyDulBh%2BHuKlwhURl8MSJEIJ20ZMGTQ%2FXhVe2jZWI8scN2SV6c0rqq3aHGu%2BRyoIZHjklt3D9UeOPH3PwlLJ3oyK29werFysPaZ048depNy%2FE38DMl3m%2BzdtTatoem4wKo0MzETVzf6gzhHRMQu9uJEpQW4BbSRbE6cRrs0QqTtWtFCYeB7XbW762qylVBAhPFjLy8IOwWxIIC4LXPZZmrvzDgDIPSXUHDB5gLxHm4QWBW3sLqeizo%2B4YqPtXUQAHToucuPAipdFQQVcu5Ac%2BOT1F%2F3y%2FZxwtyGodkqf%2F3wxwJuB8ac8dGrKFbilL1e8vp%2BYbHYb851F8M8Kio2TVqvGt9UjjPDflBU8fbIteZz25NJ6YK1lwkAwOQN%2B7Hkjh8kAtLIDVQKSdNvtLcv%2FhvWJUmJodjs1SIn7jKNvYqe%2BsB2Fh%2BWH2HzCEqPa8BjqkAag0y166yZzaG1Z%2Fvn5KVMLL9d4azwhzjgpTVxbdnatie4wcs7nlG3V8zw0riTzWY6PHeijlbb4XJYagnJgoxM1MFzSBledyL%2Bzpsbr5pu6dP%2BgDHhPOLpG%2Fffo%2Fqn7CG0OpejCG4f5Kg1Sv%2B5wAJleQSepTN27qh%2BCqHHq1NUVNJyoSVHnorU6HxUfq5BDH78jefhNvVxtoK%2F2rJ9tngZs4Syic&X-Amz-Signature=b09213b0b857c1ad93dbe521f812e57a1ee51268a6442fea4538f1c12b057e69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
