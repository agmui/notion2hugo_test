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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPTVPNN7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDAqzVUySDrJYI%2BoUP%2FobqcfFRKFQR9inTcMuQk%2FRj4hwIgSD7iAXmsiKtgjwDi8bz8%2BHquQARwxf8LQj5VIwx4EK0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNmIMS3V4htjk%2BhjircA3UBEj5ZzkMVcsExDLxfYteIL0PkFjgESsC%2Fzqx8w8lLagJSsLrOe3jhStiIWZqBsXslq8vo2afthyjLsUp%2Bm%2FX85igAcrh13Yasd6Y57MoMFQ6zhUlgzBmwLZBBfMzhlCQbSHr6gQ0I%2BhpCUYvP0%2Bk27WDFeB9EB8DA06KnMvzQN%2BdLbTHRcHKKGoWRHT7ffYihVHe0bUZDknWC94UaYKxaY7CF1nvtlyPAzIAuQJpw5QeVzJiCVMO8MP6gvGrO9oyDlMmf%2BFdLl92wcRowdVy6kY0WcwTipKuN2StjwuXYlxMWAz%2F9AEjJk91vMKJFUgMM%2BkrKRsUstt8H1fUO1i6QBUa2ld%2F8Owv0L2Z1zF77OhH9tGe66pSZJcsvy548kdK2OYgGbDl2zVDhTbvy1a5BDZO9qAe%2FlSIRXmv3KuwqL1ASfuTjZzuoNccPmidd3xldshX7CZ%2B0UKnf7PMVdznUjENRsUIf0zmwJws3Ux6rIdJ0xcMmmGjldyMDlTNB6UlFepaBxEuU%2BCgFa9PGRcaYuEK9Os3DZyySyOJmy48asKu9%2Fa%2BvJxNloVHxNZGR9cznP3%2FMiFXyaZTnpF1QV%2FUv6juZd0ANmzkAwDEU0shu52rG7DlejxKczY6hMNL56r8GOqUB3%2FGoA9mOCWl23cs5OgZMbJK0ARQ4gwIdlhhDYJY0TvSrbr96l6D5bOQ8ip9BboFSsewvemkqMmXEp6NAeM1bbVin70aQGndW9rnaconjE7YkvTLsHsMyK8HW2eUATMcSbb6sWnMLZaExSB0VNavM4wB%2Fu2usaSxCK4Z43eUK0E4OhYlnFeiDFf%2Fc3hfPllX6a9xjPIDCgTwYbCTXE7DWD6kH%2BB3p&X-Amz-Signature=146f4dd640d0f187e120d2923e44ec10e32b15f8de000379726423fb5e27ab07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPTVPNN7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDAqzVUySDrJYI%2BoUP%2FobqcfFRKFQR9inTcMuQk%2FRj4hwIgSD7iAXmsiKtgjwDi8bz8%2BHquQARwxf8LQj5VIwx4EK0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNmIMS3V4htjk%2BhjircA3UBEj5ZzkMVcsExDLxfYteIL0PkFjgESsC%2Fzqx8w8lLagJSsLrOe3jhStiIWZqBsXslq8vo2afthyjLsUp%2Bm%2FX85igAcrh13Yasd6Y57MoMFQ6zhUlgzBmwLZBBfMzhlCQbSHr6gQ0I%2BhpCUYvP0%2Bk27WDFeB9EB8DA06KnMvzQN%2BdLbTHRcHKKGoWRHT7ffYihVHe0bUZDknWC94UaYKxaY7CF1nvtlyPAzIAuQJpw5QeVzJiCVMO8MP6gvGrO9oyDlMmf%2BFdLl92wcRowdVy6kY0WcwTipKuN2StjwuXYlxMWAz%2F9AEjJk91vMKJFUgMM%2BkrKRsUstt8H1fUO1i6QBUa2ld%2F8Owv0L2Z1zF77OhH9tGe66pSZJcsvy548kdK2OYgGbDl2zVDhTbvy1a5BDZO9qAe%2FlSIRXmv3KuwqL1ASfuTjZzuoNccPmidd3xldshX7CZ%2B0UKnf7PMVdznUjENRsUIf0zmwJws3Ux6rIdJ0xcMmmGjldyMDlTNB6UlFepaBxEuU%2BCgFa9PGRcaYuEK9Os3DZyySyOJmy48asKu9%2Fa%2BvJxNloVHxNZGR9cznP3%2FMiFXyaZTnpF1QV%2FUv6juZd0ANmzkAwDEU0shu52rG7DlejxKczY6hMNL56r8GOqUB3%2FGoA9mOCWl23cs5OgZMbJK0ARQ4gwIdlhhDYJY0TvSrbr96l6D5bOQ8ip9BboFSsewvemkqMmXEp6NAeM1bbVin70aQGndW9rnaconjE7YkvTLsHsMyK8HW2eUATMcSbb6sWnMLZaExSB0VNavM4wB%2Fu2usaSxCK4Z43eUK0E4OhYlnFeiDFf%2Fc3hfPllX6a9xjPIDCgTwYbCTXE7DWD6kH%2BB3p&X-Amz-Signature=ca0b3680b093627d0f85f41d6029f1f150cdc9b2524d3a7d992cc5418725a29a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVK5PFSL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDF6ZafoL66O%2Bd0FA28sjRpyM8pqRiREjcRv40pF6EeAgIhAP0xEQ0KC7tMAuinlIJ8obxOPSg0ZqaB%2FlkQwNxRDSb%2FKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBmLHJepUiF%2FYhx7sq3ANv4daphnFzf%2F9Pg73%2B%2B7ThEkX3H9AZK6ECNaE%2BAxur3ZOt%2BnLVD7Qv1jeV9UwvdeFejEPx4rgIu3DoOgOvSCQ0b5%2FfF9XqoQw11rKeUfzTGY869qgIWnk%2F29%2FOvAM6wyDRW6dV%2FF9lz1B%2Fo%2FIshq2rg%2FpL3NPChDBOV9kz7K6t7OxaHL5fUkEBrgqSGGtEHYavh2divrqEYvg%2FUxZXQYPy9VcYas%2BA9IZwofPgFNs2VW3A21Fxc6Bq5W%2BLL%2BeiHQC6mORDRrBbNoEr%2BKzOTBhBtx%2FwGYz014S69JuRU%2FRVN7kC%2F%2BS5TgqiAVroQ7ljIqIY4ZEYNA1vm3EIWG%2FPXCVspWVHVyTP30UsvzRpyjd9JGTI4VsW5ESHMZuJ%2BbOTAHdCaNIBuq6COh%2BGpLOc79Wu8xO9eqD5etoPbZuxT6Qx%2BqShkClqg1wVfh9%2B0VCZ05gtDIyO5kfXmaqIqb0eO1%2FVlWYWitpt8xmQL7DEs%2FjqGhcpzjjc7zzJcQTdRJp3dwWslHh36Gj0H%2B7cuvh1LmEjqheDmABPTVH9pYPDBGquCzUCRE8BW7JuuglvCfRRhXD2J6chTXqaXF43sr8cYm1aav3GUhUhjnN6wjv2Qxj6V2pIJj1L7oI6AoKSBzDI%2Beq%2FBjqkAY5nL1MdhSAfsHERhZCuP2%2Fiv2IRYlIivdR6wx9Jj0bpaGgmDqBUFyZAhIhebK0VdZNRgJSR86D5hsmSqCdkHDHXm1f%2FyMzLEzbGnCT7NrHfGkDTfX%2FDJ%2BgnzZvI%2BSXB3ezlmlWZIxo3I7lDgZTddUdSO%2FP7fbIjPvPQZ2vPQySbLgZDV38SrO%2FVrioC%2F7uE3g0Zxgon%2FvFnYd48LV4PejJD9wNK&X-Amz-Signature=e6e71151ffe62b226a924e191b46d0c0da6c62ce3c19126afda19b4c561100b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ONWY44H%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDVmO99qrCm273idVtFZYmkAtAj5qYiFledCC57%2BkJdZAIgVbl31jnM7eC%2F3FWf747eITtx5455yndVYpdoFds6y9YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANyw7xRA2KoYUvXiCrcAwJgAqVrleH9deMmpMR2QNTrDKjejRqIQSYj1hYb3Bd7Foc2OPsqzSI%2Fu4Tt%2F%2Frz9cu2O2LGqoHv84iXBarEmbcdJdSrL4TJDoQivDr82giQxi%2B8jWKoVyAGbAhrCxsEaAZjgsZr1HE55vxGsbaSzh9YtLLvnhaUzH5B9K%2BeY4dvTEpfXVsLRrkFpviXOz4km0YyGXRQLhYFQcuXSFk07ay2bgT1oJyJSTLHNUaXxSwy1xya0HXnWLL6x9sckD0yHmdtobFw2WkR2pPCpFdAscYyj%2B2ppq1d7wQPMMXUbiNi5j9BumMPfcJTn9RaXCvgvfWtk4Ickv1jIK3MSqks640N3dcpqR2cAaSewGftDm39AluYpibuQi9exEf4n%2BV50DAqmVcMtNNMb%2BbTfpicEf8mcNF7P%2BgEk5teCXmYjlYsq7Fl3hmgSTCDORyerf%2FAFbro183ZVY0qB9DDz5DQKWLV0vIwRyJ%2BxZY47gPqF36u7rj6KJAHNE2siPK6ivUiCiGmrlj7lsqXTfThkwb%2Ftqcc3Ei2A71w1%2Fyy8Hf7TvkWg966NOkMXar6Sg7Yq6M34sa9%2BuNN0HUNmXdi79Qk4Xdic%2BTKkAihqCA3DMIdFTbvoj16NdB1V2m0jkfzMPj56r8GOqUBflysfE2Iaktkpr63TdHMWOQ7NDebhrb1Rvp4vOKCEgMYJjq2TIfWekAU4TZnthSQS4a%2FGpJBqLj9UtvtSk%2BHb7VW8X7PwiKokX2SfitAJwms6U0ky6ehJpDN1Ry%2BoBojQb9Jp1zRWj0Gcw7iXaQyon%2BeE0uc6cl3vggk6EkhWNtfgH94EiC198uP45H8txr9q8U6FrpdR7EeQyzgItJqcgcgqf4i&X-Amz-Signature=f94b37dcd951c91ab2f01be8ea0b60c487d0f34606fb31a1b18fada2921d9078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPTVPNN7%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDAqzVUySDrJYI%2BoUP%2FobqcfFRKFQR9inTcMuQk%2FRj4hwIgSD7iAXmsiKtgjwDi8bz8%2BHquQARwxf8LQj5VIwx4EK0qiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNmIMS3V4htjk%2BhjircA3UBEj5ZzkMVcsExDLxfYteIL0PkFjgESsC%2Fzqx8w8lLagJSsLrOe3jhStiIWZqBsXslq8vo2afthyjLsUp%2Bm%2FX85igAcrh13Yasd6Y57MoMFQ6zhUlgzBmwLZBBfMzhlCQbSHr6gQ0I%2BhpCUYvP0%2Bk27WDFeB9EB8DA06KnMvzQN%2BdLbTHRcHKKGoWRHT7ffYihVHe0bUZDknWC94UaYKxaY7CF1nvtlyPAzIAuQJpw5QeVzJiCVMO8MP6gvGrO9oyDlMmf%2BFdLl92wcRowdVy6kY0WcwTipKuN2StjwuXYlxMWAz%2F9AEjJk91vMKJFUgMM%2BkrKRsUstt8H1fUO1i6QBUa2ld%2F8Owv0L2Z1zF77OhH9tGe66pSZJcsvy548kdK2OYgGbDl2zVDhTbvy1a5BDZO9qAe%2FlSIRXmv3KuwqL1ASfuTjZzuoNccPmidd3xldshX7CZ%2B0UKnf7PMVdznUjENRsUIf0zmwJws3Ux6rIdJ0xcMmmGjldyMDlTNB6UlFepaBxEuU%2BCgFa9PGRcaYuEK9Os3DZyySyOJmy48asKu9%2Fa%2BvJxNloVHxNZGR9cznP3%2FMiFXyaZTnpF1QV%2FUv6juZd0ANmzkAwDEU0shu52rG7DlejxKczY6hMNL56r8GOqUB3%2FGoA9mOCWl23cs5OgZMbJK0ARQ4gwIdlhhDYJY0TvSrbr96l6D5bOQ8ip9BboFSsewvemkqMmXEp6NAeM1bbVin70aQGndW9rnaconjE7YkvTLsHsMyK8HW2eUATMcSbb6sWnMLZaExSB0VNavM4wB%2Fu2usaSxCK4Z43eUK0E4OhYlnFeiDFf%2Fc3hfPllX6a9xjPIDCgTwYbCTXE7DWD6kH%2BB3p&X-Amz-Signature=93750e0b6c4a778083b1a8864fe1022690d09e60bc7b89a27530a1df681f17ba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
