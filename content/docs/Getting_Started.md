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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDPUDGS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDUHl2OzEjbloVnKvMHL6f89rFrPAtdY1oVB0zYplVD7gIgDOLPSumgnMCrqPijd9wemf6V1GMzpn2hlcRarXnk1JAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FbwW063oAJFBd4mCrcA1Y6XR480wxVmI5C1fOmTefia8QLHxSlG4%2FIst2CGl8vVSvmIsJv3xQKuyx0pNWW46EHKA9wb%2Fli6w2F0W93t0pU%2F04nL6hYDlKyzRkwsKdm5TUQJSFQwOnxsukhtui7LWHUo4kD2r4AEpTMGZ2ep5VTnRGSe2WtPO%2B3VCCqOtkjLgsPJp3AtNRhuCUcVNh2QTBsyYKYDAMlBW%2Fe%2F59%2BfSnQ5nHZWwkZ4HGuGg5e17wqwfhjhhhiW5VpYh339usRk8nltxAYeIfm7p%2BszACp8alkViLVpKgyp6tayQ%2FG366QPf%2FJLJcNJ5Ttjt3mvbC1EJl3F0zwnqkIxyUfqnzbKmPaIAzvgK1iPoCzjKVx7026%2BE4J4dR1%2BwLuze0ITz3TZ0v52wTicjef8CF5vwNbl7FEW4ANsz8L5bmVMJP8TE8xKoCjELUX9xFN9hXLrL%2BeNcEG6gd9IqV7gCQKdhayweULzJegGFkwfF80vdBx9Ynee0%2FtVA%2BDaqewQhDXZ0K3qHnrKoq9gl1EsdyvhVthHCQIi4OLTjxvEzaNqA5wryFyQOxoB4a78Px0Vfvjndhrw8%2FvlIweLHID76TiDmjf6FcvmsvYwDEs8WJHkzpHKHkJHDl2wEKWi2DZPe0uMKPP88EGOqUBx6gt3tdB2rq0UmdX%2BiGqqA5TQWLLCRlHkoI52dxymv945hoMe%2F7Yjm%2BpgPocmmuUXsncjnHnICAZzd%2FPnUyUYb6S7jYitbC6uL2XQllg4j1jKhBx0XHVwBMwJJ6BY3paCBieDHrQIm980dVxBAziXQl73nEQ1M0V%2FMVGlVglYCpCrmrAycBuMRvo8cOiaceq31cUZfD5my1wlaqM9XfiFulK77Yu&X-Amz-Signature=429ed45033000ebc96100370b2d6f9438073af15475dd897e0d08d4f9a75c97b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDPUDGS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDUHl2OzEjbloVnKvMHL6f89rFrPAtdY1oVB0zYplVD7gIgDOLPSumgnMCrqPijd9wemf6V1GMzpn2hlcRarXnk1JAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FbwW063oAJFBd4mCrcA1Y6XR480wxVmI5C1fOmTefia8QLHxSlG4%2FIst2CGl8vVSvmIsJv3xQKuyx0pNWW46EHKA9wb%2Fli6w2F0W93t0pU%2F04nL6hYDlKyzRkwsKdm5TUQJSFQwOnxsukhtui7LWHUo4kD2r4AEpTMGZ2ep5VTnRGSe2WtPO%2B3VCCqOtkjLgsPJp3AtNRhuCUcVNh2QTBsyYKYDAMlBW%2Fe%2F59%2BfSnQ5nHZWwkZ4HGuGg5e17wqwfhjhhhiW5VpYh339usRk8nltxAYeIfm7p%2BszACp8alkViLVpKgyp6tayQ%2FG366QPf%2FJLJcNJ5Ttjt3mvbC1EJl3F0zwnqkIxyUfqnzbKmPaIAzvgK1iPoCzjKVx7026%2BE4J4dR1%2BwLuze0ITz3TZ0v52wTicjef8CF5vwNbl7FEW4ANsz8L5bmVMJP8TE8xKoCjELUX9xFN9hXLrL%2BeNcEG6gd9IqV7gCQKdhayweULzJegGFkwfF80vdBx9Ynee0%2FtVA%2BDaqewQhDXZ0K3qHnrKoq9gl1EsdyvhVthHCQIi4OLTjxvEzaNqA5wryFyQOxoB4a78Px0Vfvjndhrw8%2FvlIweLHID76TiDmjf6FcvmsvYwDEs8WJHkzpHKHkJHDl2wEKWi2DZPe0uMKPP88EGOqUBx6gt3tdB2rq0UmdX%2BiGqqA5TQWLLCRlHkoI52dxymv945hoMe%2F7Yjm%2BpgPocmmuUXsncjnHnICAZzd%2FPnUyUYb6S7jYitbC6uL2XQllg4j1jKhBx0XHVwBMwJJ6BY3paCBieDHrQIm980dVxBAziXQl73nEQ1M0V%2FMVGlVglYCpCrmrAycBuMRvo8cOiaceq31cUZfD5my1wlaqM9XfiFulK77Yu&X-Amz-Signature=a423894ece028a74d07c6f0a6d9716ff41faf9583ca75fef3cff986945224aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDPUDGS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDUHl2OzEjbloVnKvMHL6f89rFrPAtdY1oVB0zYplVD7gIgDOLPSumgnMCrqPijd9wemf6V1GMzpn2hlcRarXnk1JAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FbwW063oAJFBd4mCrcA1Y6XR480wxVmI5C1fOmTefia8QLHxSlG4%2FIst2CGl8vVSvmIsJv3xQKuyx0pNWW46EHKA9wb%2Fli6w2F0W93t0pU%2F04nL6hYDlKyzRkwsKdm5TUQJSFQwOnxsukhtui7LWHUo4kD2r4AEpTMGZ2ep5VTnRGSe2WtPO%2B3VCCqOtkjLgsPJp3AtNRhuCUcVNh2QTBsyYKYDAMlBW%2Fe%2F59%2BfSnQ5nHZWwkZ4HGuGg5e17wqwfhjhhhiW5VpYh339usRk8nltxAYeIfm7p%2BszACp8alkViLVpKgyp6tayQ%2FG366QPf%2FJLJcNJ5Ttjt3mvbC1EJl3F0zwnqkIxyUfqnzbKmPaIAzvgK1iPoCzjKVx7026%2BE4J4dR1%2BwLuze0ITz3TZ0v52wTicjef8CF5vwNbl7FEW4ANsz8L5bmVMJP8TE8xKoCjELUX9xFN9hXLrL%2BeNcEG6gd9IqV7gCQKdhayweULzJegGFkwfF80vdBx9Ynee0%2FtVA%2BDaqewQhDXZ0K3qHnrKoq9gl1EsdyvhVthHCQIi4OLTjxvEzaNqA5wryFyQOxoB4a78Px0Vfvjndhrw8%2FvlIweLHID76TiDmjf6FcvmsvYwDEs8WJHkzpHKHkJHDl2wEKWi2DZPe0uMKPP88EGOqUBx6gt3tdB2rq0UmdX%2BiGqqA5TQWLLCRlHkoI52dxymv945hoMe%2F7Yjm%2BpgPocmmuUXsncjnHnICAZzd%2FPnUyUYb6S7jYitbC6uL2XQllg4j1jKhBx0XHVwBMwJJ6BY3paCBieDHrQIm980dVxBAziXQl73nEQ1M0V%2FMVGlVglYCpCrmrAycBuMRvo8cOiaceq31cUZfD5my1wlaqM9XfiFulK77Yu&X-Amz-Signature=19a9442888c8e8ee5ae2c5f4d9ef7ce490747802547b00a1ea0ab703da1e2737&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JG4XOQ6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIFxGwdoo9dbasuyCIbi6WILBwOVuuGAXlxvkH3370CTgAiEA%2BjnLTAUONy8kuJscjuqZmPjQXDo23hTac4h7XBVhXfEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTkkyIpYFbeGl5R6yrcA4pvFFFqtlwP8HpuHpE%2BAueWz93ZU2WqkT2WQ9QD5lVYUuf5kOuhrQXECggwkfl26sUfMAfuCB7R7D0QInusloBoBOefhPA%2BNEd1EB7emXKvZUAP%2BNRsLGJHl8409%2FCzTFvlbc8I8t2VFt20rW0tRPMBz%2BtAXijg5Pe%2BVfWhRg1a1G9NH7VYeCEfSpNuLJ0ZURwsAdzkWxQAsT4EvTVt%2BCdkA8vBvENlYuY2uC%2B2xoqvMjbvcR1Ib1WGYszCRD8GDq9wxhOyeB2ZvNYJWOkMUrk0QI%2FQqnuYJc8edkChkgzfFj%2BTeGdBk5yQPw%2FuizuggOqrhfJvYY4rxnCPCNPlvM%2FppziCb%2BCxp%2FotVq3dp3p7eD5g0TYe88ekz%2FitrGFNdNWwLHkXASLYHpDLRx9euFNvd3L2D7q8fnYsBF5r9Mo%2FD7piR9kjgMvbnLTZ2t9TjyWMxfaviwO8llE239rbQfqzgs3m8wozWQdDjkNYItaECJDDqRA63Z%2FVhHofLx9YmQDmrhGn6vgmM9ny2kodg51rAShA2bxFSq8P93Dt3XJkAOHPCTX19%2BC%2BLewsAqHQg5VYoSlLmJ2xZN0FV92Arg5yOK095lgkdprCm896rZJsB5VEvqPtNqs11Uw%2FMLHP88EGOqUBWQCl%2BC6HeYu%2FFqnoLqNPtFR5DJQnO3iYmzryBcUDrh3yAtCPSzD2%2Bg202nU7w9qAQJtv4j9k8CjVRb4t7dnCVsrlyNzYff36iTirrv6SrJSkvllSW3BFAOdkQy2JfWajqE21rcDWzceoaHAcaXmbTUkVbDIdsy%2BvrVjsKSONmM6iJUbmWgCp%2FgKeWfhNG50bJIzj3QyW4KHqJHhksiEYTPyXthhn&X-Amz-Signature=1d36f1cd7b99b3aeabba6e5446a913b4cc505c83751fbea5ef09b22cc6289642&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC6KRW2Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICrG3lEJLHbwYMCIMqu2zksU%2Bsd9%2BE08WQ%2B1O4FZssTrAiEAnnwR6cI%2BIom8UsC9xhc5ByVKiQ15l2zURaZehtJg1A0qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FSx%2FHWADMFAph5qircA36zNbLKWOhSf8dh8XBsf162QoSfR4zdF8mpyCCXYMH1kKH6oF2ReqA8f501gUX2tmzWoavcY0ZM9ZFhGpuqnIBXy6Ukaw9cTg0HsCaCtXMvxCRiS50zrRd%2FP85VDDiySrLGroMJnt1328J2Fc%2F24HhlPv0jSgUdMLB8osj10AzIwJfkBkTqTdIFuVWj%2FdtkAFbgnfNN5CHUlk6g8gUTeI5h2hV6FDIbWWrs%2BsypAEErmG%2B6Vcknag3i1tZxWhUVxpbFAoVx5Qu%2BNxR7F8fRfO%2BsvG1DlcVNWKoFODfaJ6vMoRrHAYXVIbsSPwYRez38ist7iqQMnot%2BLGTVUL8idV0TJhsILRpuoIwwbc%2BEYp8NzcYa55e8XIuiSnuyMnHdH7trr1bq5%2BvcsRlCJHb%2FMoB6i3LUuKY9XHggcum6YK1DOgI9Q0qykQIdEs2yExhgbez7GHmB6QpZ3aCtJVAKPlwU4bw5jJQlmIZ7FAzjg1e7XeqIiSKbcaHy3T%2Fae4xro2lv8aaW3tYIErKnU0MPy1yT%2F2%2B8IasRRAfm2S8aa9C97P4QHwdC3fMFp7rrCPIW6tXlpvZeHy1Ru%2FNdNE2MSJfKkhRt2u%2FHsnFuZWfKkCcns1JqGNwUPblts9IrML%2FO88EGOqUBgwXMNCgUWd72kJJ%2Be1E%2BqnYpTiZ8T%2FgxrR1q5xJLjseQ4p72oFaguC6qoHIOi76uMN51IAAPzet1vkfsKe9ycSiZC6fb19XLA%2BOafEgBi91pGV0exfjZ1Fau1%2F4%2BeC8e2JKF63q4a4cnRlrwHMA4NDB34bGkUfou26b1hDFsgrb%2BvwGD9piTPMevbYSMEW18zXmMlVrvE%2FcWSJor1qpFGhY8Iuut&X-Amz-Signature=3e0088ac5034a88c5beb9d2c4a4e8ac1b080512ed63bd7053a7fc9f41bc37dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHDPUDGS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDUHl2OzEjbloVnKvMHL6f89rFrPAtdY1oVB0zYplVD7gIgDOLPSumgnMCrqPijd9wemf6V1GMzpn2hlcRarXnk1JAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FbwW063oAJFBd4mCrcA1Y6XR480wxVmI5C1fOmTefia8QLHxSlG4%2FIst2CGl8vVSvmIsJv3xQKuyx0pNWW46EHKA9wb%2Fli6w2F0W93t0pU%2F04nL6hYDlKyzRkwsKdm5TUQJSFQwOnxsukhtui7LWHUo4kD2r4AEpTMGZ2ep5VTnRGSe2WtPO%2B3VCCqOtkjLgsPJp3AtNRhuCUcVNh2QTBsyYKYDAMlBW%2Fe%2F59%2BfSnQ5nHZWwkZ4HGuGg5e17wqwfhjhhhiW5VpYh339usRk8nltxAYeIfm7p%2BszACp8alkViLVpKgyp6tayQ%2FG366QPf%2FJLJcNJ5Ttjt3mvbC1EJl3F0zwnqkIxyUfqnzbKmPaIAzvgK1iPoCzjKVx7026%2BE4J4dR1%2BwLuze0ITz3TZ0v52wTicjef8CF5vwNbl7FEW4ANsz8L5bmVMJP8TE8xKoCjELUX9xFN9hXLrL%2BeNcEG6gd9IqV7gCQKdhayweULzJegGFkwfF80vdBx9Ynee0%2FtVA%2BDaqewQhDXZ0K3qHnrKoq9gl1EsdyvhVthHCQIi4OLTjxvEzaNqA5wryFyQOxoB4a78Px0Vfvjndhrw8%2FvlIweLHID76TiDmjf6FcvmsvYwDEs8WJHkzpHKHkJHDl2wEKWi2DZPe0uMKPP88EGOqUBx6gt3tdB2rq0UmdX%2BiGqqA5TQWLLCRlHkoI52dxymv945hoMe%2F7Yjm%2BpgPocmmuUXsncjnHnICAZzd%2FPnUyUYb6S7jYitbC6uL2XQllg4j1jKhBx0XHVwBMwJJ6BY3paCBieDHrQIm980dVxBAziXQl73nEQ1M0V%2FMVGlVglYCpCrmrAycBuMRvo8cOiaceq31cUZfD5my1wlaqM9XfiFulK77Yu&X-Amz-Signature=1699f23375fa1b3fe1d0340058e66984b7d2b772ab75e6415e1893551ed9b6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
