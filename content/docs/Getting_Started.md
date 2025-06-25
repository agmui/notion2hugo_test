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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYFAEFA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICM8o6F%2BvQuVZ8VXLfPHsaZ6Tm1CppDmpuD5WdwBpiKmAiBmBlS0oDnd7a2AR4980Qhnh4HPDwjYeXKk3KaqI4HNByr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzh6n8MQN2GEb%2FI3rKtwDJNwgZswl%2BatQJry7oTAu54txpvKKDibBTJ%2BdFlJIxCDvu6v30HVAffIY05RQe3lnu4eBNwvobcIsXJy%2FC2h95fIL6EH%2BjxnCMr%2BOEiTzHlNeJKB53eijsGDrEwlFG0n3E8nejGmsKy8jxeTChkebO4JhYiSHaLji7qCknd%2B2GrLgiUAGYPE%2FtFAyP774LKN%2BH72UbrrJlD8VnAoKW3yv89f6AadQcMyn1uGKAqDuusxsv6io1iEbwuPkBA9VbBbI5iaU3qY7eJh0Q4jO8laQ8qVRB4abyPmPzlLPwm7bRBEU47z%2FTWHTYqX4Bon%2BPthSFSPTfWvopDjzyE2XhSInLo5yNn2nY7kdMoW3YVRIkDgJXXJB1%2FI%2FdUjftZHmqbmUcteircUYPWzJieIuyiiS2byyTB3vvQDU%2BsYTCavWBWJqkU2CG1Q6fF72o4QADOxFKhlMXovCwIfsHIkWA3ONEuo0KpAWuwKwAqtqHT1kIWGarGuOZ%2FlrfnaciA%2Bcz3l1UzKtEbC0oLdzo4cKli06hbSkgSsHupN7VhbJuDNFt9YVw1fxwTTDGEXgtKPirGo8DVVj4%2FKstdOnl2a0Q%2BwzMcxdLUPrJgF4fsSPMq6vzGABioXfAsRpbRhoQ4IwhoPwwgY6pgFBKVcoKCMxBXLsk4%2Bxsy2BsdqxciXiK3DfP4EMmKKUka87iyyZcy6uGj3Uv9id6BrDN5PbO%2BfDehc8e4f0lpibFRVbK4tXC6AVpza2GaWobyrELOM5RLsUtgFJHwQ5UrOmC3OSpl%2BUsRh2q1TNGVvgX1jrnN8cMblwtel9maojC1tB43mo95k4XNhihaVEUsww2Q%2FkM6ODCL27XlSZEiNoi0iWG28g&X-Amz-Signature=fa073363c8bda7915b3f3ead445c2179ecec6be428c3c773ea0bed413dcf495f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYFAEFA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICM8o6F%2BvQuVZ8VXLfPHsaZ6Tm1CppDmpuD5WdwBpiKmAiBmBlS0oDnd7a2AR4980Qhnh4HPDwjYeXKk3KaqI4HNByr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzh6n8MQN2GEb%2FI3rKtwDJNwgZswl%2BatQJry7oTAu54txpvKKDibBTJ%2BdFlJIxCDvu6v30HVAffIY05RQe3lnu4eBNwvobcIsXJy%2FC2h95fIL6EH%2BjxnCMr%2BOEiTzHlNeJKB53eijsGDrEwlFG0n3E8nejGmsKy8jxeTChkebO4JhYiSHaLji7qCknd%2B2GrLgiUAGYPE%2FtFAyP774LKN%2BH72UbrrJlD8VnAoKW3yv89f6AadQcMyn1uGKAqDuusxsv6io1iEbwuPkBA9VbBbI5iaU3qY7eJh0Q4jO8laQ8qVRB4abyPmPzlLPwm7bRBEU47z%2FTWHTYqX4Bon%2BPthSFSPTfWvopDjzyE2XhSInLo5yNn2nY7kdMoW3YVRIkDgJXXJB1%2FI%2FdUjftZHmqbmUcteircUYPWzJieIuyiiS2byyTB3vvQDU%2BsYTCavWBWJqkU2CG1Q6fF72o4QADOxFKhlMXovCwIfsHIkWA3ONEuo0KpAWuwKwAqtqHT1kIWGarGuOZ%2FlrfnaciA%2Bcz3l1UzKtEbC0oLdzo4cKli06hbSkgSsHupN7VhbJuDNFt9YVw1fxwTTDGEXgtKPirGo8DVVj4%2FKstdOnl2a0Q%2BwzMcxdLUPrJgF4fsSPMq6vzGABioXfAsRpbRhoQ4IwhoPwwgY6pgFBKVcoKCMxBXLsk4%2Bxsy2BsdqxciXiK3DfP4EMmKKUka87iyyZcy6uGj3Uv9id6BrDN5PbO%2BfDehc8e4f0lpibFRVbK4tXC6AVpza2GaWobyrELOM5RLsUtgFJHwQ5UrOmC3OSpl%2BUsRh2q1TNGVvgX1jrnN8cMblwtel9maojC1tB43mo95k4XNhihaVEUsww2Q%2FkM6ODCL27XlSZEiNoi0iWG28g&X-Amz-Signature=073601812040998b86d023606ac5a6eb7e6ad164c13a8d38fe78bea4ff3b27ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYFAEFA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICM8o6F%2BvQuVZ8VXLfPHsaZ6Tm1CppDmpuD5WdwBpiKmAiBmBlS0oDnd7a2AR4980Qhnh4HPDwjYeXKk3KaqI4HNByr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzh6n8MQN2GEb%2FI3rKtwDJNwgZswl%2BatQJry7oTAu54txpvKKDibBTJ%2BdFlJIxCDvu6v30HVAffIY05RQe3lnu4eBNwvobcIsXJy%2FC2h95fIL6EH%2BjxnCMr%2BOEiTzHlNeJKB53eijsGDrEwlFG0n3E8nejGmsKy8jxeTChkebO4JhYiSHaLji7qCknd%2B2GrLgiUAGYPE%2FtFAyP774LKN%2BH72UbrrJlD8VnAoKW3yv89f6AadQcMyn1uGKAqDuusxsv6io1iEbwuPkBA9VbBbI5iaU3qY7eJh0Q4jO8laQ8qVRB4abyPmPzlLPwm7bRBEU47z%2FTWHTYqX4Bon%2BPthSFSPTfWvopDjzyE2XhSInLo5yNn2nY7kdMoW3YVRIkDgJXXJB1%2FI%2FdUjftZHmqbmUcteircUYPWzJieIuyiiS2byyTB3vvQDU%2BsYTCavWBWJqkU2CG1Q6fF72o4QADOxFKhlMXovCwIfsHIkWA3ONEuo0KpAWuwKwAqtqHT1kIWGarGuOZ%2FlrfnaciA%2Bcz3l1UzKtEbC0oLdzo4cKli06hbSkgSsHupN7VhbJuDNFt9YVw1fxwTTDGEXgtKPirGo8DVVj4%2FKstdOnl2a0Q%2BwzMcxdLUPrJgF4fsSPMq6vzGABioXfAsRpbRhoQ4IwhoPwwgY6pgFBKVcoKCMxBXLsk4%2Bxsy2BsdqxciXiK3DfP4EMmKKUka87iyyZcy6uGj3Uv9id6BrDN5PbO%2BfDehc8e4f0lpibFRVbK4tXC6AVpza2GaWobyrELOM5RLsUtgFJHwQ5UrOmC3OSpl%2BUsRh2q1TNGVvgX1jrnN8cMblwtel9maojC1tB43mo95k4XNhihaVEUsww2Q%2FkM6ODCL27XlSZEiNoi0iWG28g&X-Amz-Signature=c6bead03210fcbcc27feacc5236a4b448129b421bb1cc8fb527ff5d994d98077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ5IMXZM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICVTGZD2Pn%2BB4YasPbJqF7Y4mkVOAYpGO6ryOq1FfBD0AiBjn3QM6%2BAGieMVUIs4uIpBeNKFgRA0QM%2BVprZtZnCuIir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMPl7r4NDiFjfLo0rxKtwDLFjaJhDhFGizJ6P4VCuqqGeeXjS0tRQ9%2B7BL1O%2FO6iZviuhmO3vVX%2BHR3hT0hwu%2FEwkH6nv7gN7Iu7C%2Fm%2FCNW4HF6Dsotcl%2BAJEQpRt%2FOsu6YmpRX%2Brh%2FpOYoneluEP%2FgtUbuYFz0RMssOgETsRrzqePXHU4%2Bf8LzumoIbPYMEOfLVfmS7DB4aTtRL2Mf%2FjWVX3vgqcjYsgzMXQ6QrUADZvb4aMl2YBLj5o9ePK9um%2Be5GY6XUlk13R%2F3GVK2k2VQLODEWv3bwE%2FyQhBaW5KpYrSu0DVZUA9fg%2FhTc4rNUeLZYroqttzlYRSjQX0sGbel9xpBMSQdckYvrOAdGazxNx8VxxWrqt4X7a0ZmNgjmutwvN1A%2F1yzM7Lb7xK01l%2BKgG37XVrwETMO9w3GhcFm5igegaWtjRW278w3lyT0%2FZj4zlllFCPECjjOtm%2B65LE6RwHSWwI4d9YOs2OdwkR2MkSOcoo1U%2FLROGpzpZ0Av3%2FVbxK3DRi%2Fr%2FNE0y7bP5EOOtlhPPQ2w545LeJkZ06QuVPiUNeg17LPem31e%2FiVPlNXSvSOE1mOO%2BVixS%2Fz1UwnsBuIhFCQJMhvvf4JOD0SaupR5Ye9IrFeuKF2mCXa%2Fj75K88lYDqRGpSS0cw1O%2FvwgY6pgF8ASQmmUxoZnS6Nt0Tohs0qoHt5OhZdr9T0YwqItNMXffL85h%2F%2FUf8qF3bMlJ2BM%2BaLALp0bZINjEOuKf2TpMG6LJxzsxAF6ypKBtGeY55Fp8Q4CNnzRc23scilGA5Sa90ad6Fcdr22C%2BJKMXSXMEEJTn4HypLyUv1YGICtiIucMFGFi%2ByIpEiLkyjbqzdk9pHhu%2FgYZFbNZOvUS3rIDELRmTHn1eI&X-Amz-Signature=555adedcca4649e3f4d59ea470fe751f194159cd4035a8aed765f352af2402b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGM2DSU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDLNFtOjoqXqQB4Pt0Ev8X7PtakG3Jv3yOjxgK2i7RP0gIhAJlBIjXOhcKCcl%2BDw15a7HMjhjKBQLOG7yZCMagesXtsKv8DCEYQABoMNjM3NDIzMTgzODA1IgzvFPa7k4sTf4c8YHAq3APM9DLKUVAP%2BTcZr0qnD%2B9JmA9DIdRN8zpzMNwEBy5vRGwkcbt7wBoDhMsH%2F%2F7OlBb5hBQLXBOxJGVov3xPXbNs45wpXT5wJS%2FBcQ1QthWOkOlcc%2FLaSdU%2Fj5vWQ3xruvH99j%2Bs4vEInc2rlsGV6PQ7ZdaEBqq9TfqdDCz6N3mJBzN%2BadS9TE%2BV4ZwhfI1qOlu%2FyjlmzoejmF506ePG%2BFlZnrf1ATIXY%2BTehq6qEEk1NYqglLcTPxoMsHp90msedAO36WvveB860JRcJkrHC4c%2BPBUdmsq7PWKhajvrsYNXWJU%2BPFPrGMHxdXOo9spdWXs%2BGEJw2yplg8BvghI76VM6v95aEvkfKKhig%2BbfMFpmWw%2FONNj5Lj%2F%2BDsGLGzZzyzua1LXFSXH5wuXizrDiz013nwjrejfAEal3K74JBWwZxT3UXDbm3289vWujkClZwYQDJXiuRAWtqgzekykN55%2Bv6HE%2BacKn%2FyNDUuu9PUm1EiuOiAofsIxxWF8nE5M5wfvusTQrr0KL6xTQLp53MKXHQ6oc7C03m7UgcmThVcvEk1ANwtWiFjEfKWnudCNxPZdA9IFwQ2Y6iEdvGrnSKs4LbELEFSSjg5ipnH1JZy6bi%2FRJCRwRvP0ICXGbBzDS7%2B%2FCBjqkAT3VYceV7a9ZUb%2FDnTRwKZDLqUp%2FAoRzaGAmNJqky0pRDxzgNOYYmpbQPQHPvWjMqmd3TfjVeIAcEegU3AdT9RKqrbvA2GbT3Tqk9UT9LdcxZBiyayA4K2rCVa4dcfDMf2PcFoKfHl4nrEGpqCnhVTkPEKfhTFM8kU%2Br0%2B32EgAaXVsqxTceAFd5ZutVzPJ772XMiV9CiUyL4CAWicxGIaXn9aPV&X-Amz-Signature=def1c6278d77a0c5bceac2a2de22c11ef70a149798baead89d76db9ad0b28990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYFAEFA%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCICM8o6F%2BvQuVZ8VXLfPHsaZ6Tm1CppDmpuD5WdwBpiKmAiBmBlS0oDnd7a2AR4980Qhnh4HPDwjYeXKk3KaqI4HNByr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzh6n8MQN2GEb%2FI3rKtwDJNwgZswl%2BatQJry7oTAu54txpvKKDibBTJ%2BdFlJIxCDvu6v30HVAffIY05RQe3lnu4eBNwvobcIsXJy%2FC2h95fIL6EH%2BjxnCMr%2BOEiTzHlNeJKB53eijsGDrEwlFG0n3E8nejGmsKy8jxeTChkebO4JhYiSHaLji7qCknd%2B2GrLgiUAGYPE%2FtFAyP774LKN%2BH72UbrrJlD8VnAoKW3yv89f6AadQcMyn1uGKAqDuusxsv6io1iEbwuPkBA9VbBbI5iaU3qY7eJh0Q4jO8laQ8qVRB4abyPmPzlLPwm7bRBEU47z%2FTWHTYqX4Bon%2BPthSFSPTfWvopDjzyE2XhSInLo5yNn2nY7kdMoW3YVRIkDgJXXJB1%2FI%2FdUjftZHmqbmUcteircUYPWzJieIuyiiS2byyTB3vvQDU%2BsYTCavWBWJqkU2CG1Q6fF72o4QADOxFKhlMXovCwIfsHIkWA3ONEuo0KpAWuwKwAqtqHT1kIWGarGuOZ%2FlrfnaciA%2Bcz3l1UzKtEbC0oLdzo4cKli06hbSkgSsHupN7VhbJuDNFt9YVw1fxwTTDGEXgtKPirGo8DVVj4%2FKstdOnl2a0Q%2BwzMcxdLUPrJgF4fsSPMq6vzGABioXfAsRpbRhoQ4IwhoPwwgY6pgFBKVcoKCMxBXLsk4%2Bxsy2BsdqxciXiK3DfP4EMmKKUka87iyyZcy6uGj3Uv9id6BrDN5PbO%2BfDehc8e4f0lpibFRVbK4tXC6AVpza2GaWobyrELOM5RLsUtgFJHwQ5UrOmC3OSpl%2BUsRh2q1TNGVvgX1jrnN8cMblwtel9maojC1tB43mo95k4XNhihaVEUsww2Q%2FkM6ODCL27XlSZEiNoi0iWG28g&X-Amz-Signature=a138f8235965695be715702a63caa21090a664f451b06257b52764aa6b37fc0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
