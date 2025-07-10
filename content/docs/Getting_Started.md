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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFMCMR4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnUPAQNo%2FvTg1fwMRgkONezzTFTzGTR7CDRKyFEEyXgIgJU99XgiWQwENyioPa98Pmfeu3KSCfAIp0LoWrKOdwloqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2BEMUfQjeGhCjclCrcAwy%2B0Q336%2F2SLvEhGmdPHlKPG80mfRAd08Zcl%2FCXANHf4vkTpwwF1gjOE2zDUCSNV8o230GM%2FU6aGcrtDgvFY7VILLGTF5q7qiHBzILJdZ6PL7wtWUmGHlKIsz3kmotIzc1XOSGbakbp3kVltxLDEK8xyfye1k%2Bi1YwS9Z7RdRB9Fc4776q%2B%2FqHvzMC%2Fa2ZytPzA9iS5TKfwVwO6xObclsAdF35mdxTAQdKDK9oI5OqqxM5OaX1e9bV%2BsaTLn9usf2jIE%2FEzDps9DJ23dgNw%2FS9Sg6G8ZtQxeRUrRwxMLUuDK1E1YGiivqCK8WGYyYC9%2B7vAQz%2BrTrfFAwEzhWHH274Q9a7McoLTckME4n25jfrXton5YlfMQmrT56XZS83x4lqqLCGrMcmetjSbhG3559nhoVMPqxoBrxxK8Zw1j7HxzsTSEXPFH6lQ5MgGSqT%2B2DiOA5TDuTBDJL3HY17Yj7b%2FmB0QErHWdCNFO0mzorxXPoVOjHLzRuBmswhTWDEasyYU0wndG8Unhm2wPpg5RYxv2nYB2v91yzH4XhQpR03y%2FLqxFAZn58cfNbADIEGXvFMdknzoN3llmB%2B3aasqHKHRisuZBrsuMxpaseNQ7nmPJI5joGk%2BfTutaACdMIHxu8MGOqUBX%2FkhGJEWa2Ak3aIreYgq6cQBk75sWVi0wTdF9JHVbyvt4VTl01xgmRHW6arA582HVERmHx4K%2B2vXds8HNMz0ZLbuykYGbTE0ha09%2B8WhLXD%2FDqesP7GOhMxnIDXTMb20pjTWSdHdgQYnLQlTLuHfe%2Fb51i67Eo%2B0B0Gfbqs401PxaA9Vp6dZ9cE5ej%2BmlSD2OzamGMfE8zZ8xgUIsDcM0mlE1%2FGw&X-Amz-Signature=e30dd539cc8e543498c35909ecda3a4bec3721d9225dfd6fb23a20c7d63d2dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFMCMR4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnUPAQNo%2FvTg1fwMRgkONezzTFTzGTR7CDRKyFEEyXgIgJU99XgiWQwENyioPa98Pmfeu3KSCfAIp0LoWrKOdwloqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2BEMUfQjeGhCjclCrcAwy%2B0Q336%2F2SLvEhGmdPHlKPG80mfRAd08Zcl%2FCXANHf4vkTpwwF1gjOE2zDUCSNV8o230GM%2FU6aGcrtDgvFY7VILLGTF5q7qiHBzILJdZ6PL7wtWUmGHlKIsz3kmotIzc1XOSGbakbp3kVltxLDEK8xyfye1k%2Bi1YwS9Z7RdRB9Fc4776q%2B%2FqHvzMC%2Fa2ZytPzA9iS5TKfwVwO6xObclsAdF35mdxTAQdKDK9oI5OqqxM5OaX1e9bV%2BsaTLn9usf2jIE%2FEzDps9DJ23dgNw%2FS9Sg6G8ZtQxeRUrRwxMLUuDK1E1YGiivqCK8WGYyYC9%2B7vAQz%2BrTrfFAwEzhWHH274Q9a7McoLTckME4n25jfrXton5YlfMQmrT56XZS83x4lqqLCGrMcmetjSbhG3559nhoVMPqxoBrxxK8Zw1j7HxzsTSEXPFH6lQ5MgGSqT%2B2DiOA5TDuTBDJL3HY17Yj7b%2FmB0QErHWdCNFO0mzorxXPoVOjHLzRuBmswhTWDEasyYU0wndG8Unhm2wPpg5RYxv2nYB2v91yzH4XhQpR03y%2FLqxFAZn58cfNbADIEGXvFMdknzoN3llmB%2B3aasqHKHRisuZBrsuMxpaseNQ7nmPJI5joGk%2BfTutaACdMIHxu8MGOqUBX%2FkhGJEWa2Ak3aIreYgq6cQBk75sWVi0wTdF9JHVbyvt4VTl01xgmRHW6arA582HVERmHx4K%2B2vXds8HNMz0ZLbuykYGbTE0ha09%2B8WhLXD%2FDqesP7GOhMxnIDXTMb20pjTWSdHdgQYnLQlTLuHfe%2Fb51i67Eo%2B0B0Gfbqs401PxaA9Vp6dZ9cE5ej%2BmlSD2OzamGMfE8zZ8xgUIsDcM0mlE1%2FGw&X-Amz-Signature=a42abd40a73fc4513dbee3854e54984cb2fd57ce3d26d243e9a3069047dc2f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFMCMR4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnUPAQNo%2FvTg1fwMRgkONezzTFTzGTR7CDRKyFEEyXgIgJU99XgiWQwENyioPa98Pmfeu3KSCfAIp0LoWrKOdwloqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2BEMUfQjeGhCjclCrcAwy%2B0Q336%2F2SLvEhGmdPHlKPG80mfRAd08Zcl%2FCXANHf4vkTpwwF1gjOE2zDUCSNV8o230GM%2FU6aGcrtDgvFY7VILLGTF5q7qiHBzILJdZ6PL7wtWUmGHlKIsz3kmotIzc1XOSGbakbp3kVltxLDEK8xyfye1k%2Bi1YwS9Z7RdRB9Fc4776q%2B%2FqHvzMC%2Fa2ZytPzA9iS5TKfwVwO6xObclsAdF35mdxTAQdKDK9oI5OqqxM5OaX1e9bV%2BsaTLn9usf2jIE%2FEzDps9DJ23dgNw%2FS9Sg6G8ZtQxeRUrRwxMLUuDK1E1YGiivqCK8WGYyYC9%2B7vAQz%2BrTrfFAwEzhWHH274Q9a7McoLTckME4n25jfrXton5YlfMQmrT56XZS83x4lqqLCGrMcmetjSbhG3559nhoVMPqxoBrxxK8Zw1j7HxzsTSEXPFH6lQ5MgGSqT%2B2DiOA5TDuTBDJL3HY17Yj7b%2FmB0QErHWdCNFO0mzorxXPoVOjHLzRuBmswhTWDEasyYU0wndG8Unhm2wPpg5RYxv2nYB2v91yzH4XhQpR03y%2FLqxFAZn58cfNbADIEGXvFMdknzoN3llmB%2B3aasqHKHRisuZBrsuMxpaseNQ7nmPJI5joGk%2BfTutaACdMIHxu8MGOqUBX%2FkhGJEWa2Ak3aIreYgq6cQBk75sWVi0wTdF9JHVbyvt4VTl01xgmRHW6arA582HVERmHx4K%2B2vXds8HNMz0ZLbuykYGbTE0ha09%2B8WhLXD%2FDqesP7GOhMxnIDXTMb20pjTWSdHdgQYnLQlTLuHfe%2Fb51i67Eo%2B0B0Gfbqs401PxaA9Vp6dZ9cE5ej%2BmlSD2OzamGMfE8zZ8xgUIsDcM0mlE1%2FGw&X-Amz-Signature=ea8c8a9c7e3be74545c5814907d8989c751da7de6d81badf4ce219d2bc91f37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZV2XCEX%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDDNaT%2Fq33%2FvmK2GizOg%2FF2MzWK6Ges3jKwwojS9XbwAiEAoqcyDC1x%2BED6Dy8vsjx1Aaot%2BCRxgXOQANWwlSrQQ6IqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtmc4XK7D9v66KdiSrcA3MItJ0pPYR9tXmp5aCH9wkmkzSEI3l9f37YOolqkuW1SN4B2tSq8%2FyOVSi3be7LWIlJ9fuZ04S%2F4etz6AE6ViFhvIPwVIgI6qWHaD4CTjiW5OT7XEuq5Gec%2FUMQmmgczmYpo8g1nPIXCAxW6cqWqPlyk0SQhLBLuN5JkaK7crkeP3YXF1F453%2Frx%2Buvuy8ybxVG22Ycp58bfywEyoZfKeAxhllXs5DtAy0xXpIpJ%2FzKUFY45l6CpfTHWIAK0dYo3Dan6vOgkWkjxuLOQPm44Ng%2FiG2ssJr1ynf1T4HPT1rb1213Bjys27P3EbBy5vR5sxoMDePvb4HiwX6ztZQ9epByTinD6wo8Fzf%2BMgLMfH5SRKuvIER2QfxiMqpv3BXI5gy59aBl2cRTc0t%2B1%2BzTBHpghWyD54kmjEEQ7OR58jrwPLay4Mbbz3tRBTyfxwlY6rl2zHFsPJbF%2F06%2BzYOLBR5Bf1YxzD131t0ph0TGyLXL7jWTnlFZyckuaY6EMAHV2mzzeZAz1wprA2yyYdmh%2FYlcA1zne4KBiWa7vs%2FG0B1ivtbU8QTgG3D9Rcn%2BgJSG360I1FtY83a98ECSX6UruUNWSEVuoYv7yi2eJF99nABejQKPY%2FYHn7ympV56MIHxu8MGOqUB%2Fx0w0FsvlHl32UzBlKeWKcUw0Ono%2BwkdB7sOXPdXHXonFxsWEfKyragDtdtmDYTYKpeueADB3xQ0CKqQGKywO0a9IPhmNs2vMyT7wBA6XDJIpV66QwUEaQ194eRG8e1YCsTJ37ItTUrI4liFCQ7WtBPBNgUYChdiZ1FosgRhGJIVeTi3gW%2FMAkSLh7YOJiT2R0BxdDTHYtWHYnkSEaSgO0y92EHE&X-Amz-Signature=386330f29b279bfc6a92be40ebaa87a2933f1a0f3852ded95f4ff41666ccaf3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM53LC4D%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBYhVB%2FNuJeGRPQGgNmnooXaH6KcHCt162TLzYJ1PeBwIgV2DBBiKPUyWCwOlmm7A1B5h%2FawdWhnYBjLQLbvH7ax4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuls4rMFuJLj2ahcyrcA0rfLkYmVAm88TDVkDBL1Mo2EY4heWR9E3Nk6%2B362KOS9mCeDziXiLDgO9Ik3DoJ5r%2B8Wm2k9XdvEr3dva1CdfPUjxzC1y6EsYmy4DYXqCQJZDZqHNX3fbU7IzQwQGcMG5KV9Inb2qnnu29aU9FMVD8RV%2F9DLGSyJmTeT36HRXkSzvX6lPoBFXgYOxxB2s7vFeVUbu1nXZ0E%2B016bBpbnIdVYg3gpgBNMfgmVhxwlJ6cZRb4TrPudv%2FkkHLPSri7%2Fb6DxLBVpvCX7XJCjnqyne8diHHltG2pFSNLtWMmRFGcKOQZv8UxBdj30FX%2FWpsW2R6Y0Ot5GGYZ%2B%2BXCOCBkQHOdXUpQi3tpvkqG5P0wTqDO3rfIa0kTGHHLOqP6LUWOWzWrh8wzsGtMJeclEoCeET8C7aaVMn2qJhDbYNp3JjA9eNLjbl%2Ftef8hUec3W8q1sjOdw7qZZjm0E0LvSVvTMXIZViSR5d7lZBTAQvjC%2BR5TSK051miGiuqLmL2mLdgbjKlp1NX%2Bmf9KzzEC0BC8TBUO1BW8FqzU0entY%2BPBZ%2FgoA9aY5zr9ndGZ2m%2Fajxcod%2BexK4Z8%2FxWoly1x2txFLxGrhHHRd%2F3a6EMLOyD3fdRk8XqU2ZUUYljIRcmvMI7xu8MGOqUBA5mU4fOsfTtIwLRuQ%2BSaPlCTWSqFGJCoLb6OWJCiujIKrF9KEfOQ4SVap0vWsmRZsNfAnATnAmSsuBTa7TPCVzhrB%2FhnbJpEqdJca9Jug%2FHqJZ8XK1%2FyNxu%2B%2FUnpsglcWYG3OhyiAAhzpY0qVMtKYiQRMGBFq5d0WoUIGXTIK%2FAr7pQ7ctoPthsQOCKwweeZnCeOfl5LDolVt2t2R2kEi%2Ftm5DUx&X-Amz-Signature=af916114829a5868fb799be22a505ee32fc511ae2b9fb1380f33a196b80d40b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNFMCMR4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWnUPAQNo%2FvTg1fwMRgkONezzTFTzGTR7CDRKyFEEyXgIgJU99XgiWQwENyioPa98Pmfeu3KSCfAIp0LoWrKOdwloqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNA%2BEMUfQjeGhCjclCrcAwy%2B0Q336%2F2SLvEhGmdPHlKPG80mfRAd08Zcl%2FCXANHf4vkTpwwF1gjOE2zDUCSNV8o230GM%2FU6aGcrtDgvFY7VILLGTF5q7qiHBzILJdZ6PL7wtWUmGHlKIsz3kmotIzc1XOSGbakbp3kVltxLDEK8xyfye1k%2Bi1YwS9Z7RdRB9Fc4776q%2B%2FqHvzMC%2Fa2ZytPzA9iS5TKfwVwO6xObclsAdF35mdxTAQdKDK9oI5OqqxM5OaX1e9bV%2BsaTLn9usf2jIE%2FEzDps9DJ23dgNw%2FS9Sg6G8ZtQxeRUrRwxMLUuDK1E1YGiivqCK8WGYyYC9%2B7vAQz%2BrTrfFAwEzhWHH274Q9a7McoLTckME4n25jfrXton5YlfMQmrT56XZS83x4lqqLCGrMcmetjSbhG3559nhoVMPqxoBrxxK8Zw1j7HxzsTSEXPFH6lQ5MgGSqT%2B2DiOA5TDuTBDJL3HY17Yj7b%2FmB0QErHWdCNFO0mzorxXPoVOjHLzRuBmswhTWDEasyYU0wndG8Unhm2wPpg5RYxv2nYB2v91yzH4XhQpR03y%2FLqxFAZn58cfNbADIEGXvFMdknzoN3llmB%2B3aasqHKHRisuZBrsuMxpaseNQ7nmPJI5joGk%2BfTutaACdMIHxu8MGOqUBX%2FkhGJEWa2Ak3aIreYgq6cQBk75sWVi0wTdF9JHVbyvt4VTl01xgmRHW6arA582HVERmHx4K%2B2vXds8HNMz0ZLbuykYGbTE0ha09%2B8WhLXD%2FDqesP7GOhMxnIDXTMb20pjTWSdHdgQYnLQlTLuHfe%2Fb51i67Eo%2B0B0Gfbqs401PxaA9Vp6dZ9cE5ej%2BmlSD2OzamGMfE8zZ8xgUIsDcM0mlE1%2FGw&X-Amz-Signature=62801f051b8bd0d0e70b4e4f7892b4232c903d4ad23952b91e4d83eda5e6557b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
