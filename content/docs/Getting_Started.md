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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSRM67F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaQxZF6PDnFpL97r4KhGHz4VNEHQ5RZBfUjJ3wE6EgAIgE%2Fk0%2Frl%2BurmABS6EyAonR8WSfGOGkH%2BoR%2BKQ0l93JioqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImpAK%2Bi9vLQVCjUKyrcA0rjEVeOoeSE2dNgEL54cc%2B%2BUu9l2gcZntihfMkSdiOc2ptK8CLnzLgbPUTZN9fYKKLyw7QbGRQGnnywR3DJlYpEUA6oTfxfNMV9iEsjGQN03cjbS5zmLtx7xxMr9VANco6jaTIhWCPWnPACXlo%2F89deLdM3JsfvE24mENdJbsEYCaOJY%2FxdRdIOuwOX1k6X3M4bIH%2FdyGAnJjrbuHrt4IQObEPx6OlublPXRQEdMvbkMh2rxWF7lj0Ae1d%2FdUC0BSkY7x0EX0y5%2BxPsKYNMtvs9EUZXk9ldbE0zbe7CsrxJXDtrelIH8RQhbAolEJX%2F1jA1Yx3p6ndQqlUtk94NWspDcL%2B9SqICf99WhVBbT%2FsjLED56lYMrhHZqFEXQ6uMyIogm6sipZVj7tdyDHEUm0Q3QgNKWcVqme6oyRL%2FMG%2FfhvjpTt%2FR8toJ8SaPl90nx3ZHeWhx7V847FxWAcDDU8UZEcIucYmBuG2%2BMRzxA7PegssU86L2b4uR8gstXGgysPqssKwI89pckoagYKep78NY5fmucrr5cuq2HwOuLY%2F8Feosh4lV5ALGV2QfnFkAamcGoFEo0CxhnA5XKPwwd%2BGfsx8GtpIIlgB6tNOlJ9o%2F3pFB2gtherp1jldtMMWi58QGOqUBZT%2BUhnRr62vbKenHKexCVGXpsuW3L6yOr%2FZL3Q5HHCNW1Yu5WGPd2E7%2BJ0ugLzqJ%2F6GFE96Hms17PKIz7Irv3tOAT54r7%2B%2FiKwGV71qNXoHRBlfGC8nljTmAFijEx4z9ssAZhSutKmmcC04lHSL2DTJsNk7yATQSnYP%2F9XZ%2F5e%2FHP2LAYv%2FGegjJj2Ynx24dLftTJwPSygIVr%2F6UsPL0TzegU6lU&X-Amz-Signature=1a84f149277fc21a4fa8b0ae196985de1005d4defbe060ff4a5abbedb9b4df69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSRM67F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaQxZF6PDnFpL97r4KhGHz4VNEHQ5RZBfUjJ3wE6EgAIgE%2Fk0%2Frl%2BurmABS6EyAonR8WSfGOGkH%2BoR%2BKQ0l93JioqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImpAK%2Bi9vLQVCjUKyrcA0rjEVeOoeSE2dNgEL54cc%2B%2BUu9l2gcZntihfMkSdiOc2ptK8CLnzLgbPUTZN9fYKKLyw7QbGRQGnnywR3DJlYpEUA6oTfxfNMV9iEsjGQN03cjbS5zmLtx7xxMr9VANco6jaTIhWCPWnPACXlo%2F89deLdM3JsfvE24mENdJbsEYCaOJY%2FxdRdIOuwOX1k6X3M4bIH%2FdyGAnJjrbuHrt4IQObEPx6OlublPXRQEdMvbkMh2rxWF7lj0Ae1d%2FdUC0BSkY7x0EX0y5%2BxPsKYNMtvs9EUZXk9ldbE0zbe7CsrxJXDtrelIH8RQhbAolEJX%2F1jA1Yx3p6ndQqlUtk94NWspDcL%2B9SqICf99WhVBbT%2FsjLED56lYMrhHZqFEXQ6uMyIogm6sipZVj7tdyDHEUm0Q3QgNKWcVqme6oyRL%2FMG%2FfhvjpTt%2FR8toJ8SaPl90nx3ZHeWhx7V847FxWAcDDU8UZEcIucYmBuG2%2BMRzxA7PegssU86L2b4uR8gstXGgysPqssKwI89pckoagYKep78NY5fmucrr5cuq2HwOuLY%2F8Feosh4lV5ALGV2QfnFkAamcGoFEo0CxhnA5XKPwwd%2BGfsx8GtpIIlgB6tNOlJ9o%2F3pFB2gtherp1jldtMMWi58QGOqUBZT%2BUhnRr62vbKenHKexCVGXpsuW3L6yOr%2FZL3Q5HHCNW1Yu5WGPd2E7%2BJ0ugLzqJ%2F6GFE96Hms17PKIz7Irv3tOAT54r7%2B%2FiKwGV71qNXoHRBlfGC8nljTmAFijEx4z9ssAZhSutKmmcC04lHSL2DTJsNk7yATQSnYP%2F9XZ%2F5e%2FHP2LAYv%2FGegjJj2Ynx24dLftTJwPSygIVr%2F6UsPL0TzegU6lU&X-Amz-Signature=047425b22c8f203cfb35c0b19f55edda853bd31a832250a6ed5e1806cb722f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSRM67F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaQxZF6PDnFpL97r4KhGHz4VNEHQ5RZBfUjJ3wE6EgAIgE%2Fk0%2Frl%2BurmABS6EyAonR8WSfGOGkH%2BoR%2BKQ0l93JioqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImpAK%2Bi9vLQVCjUKyrcA0rjEVeOoeSE2dNgEL54cc%2B%2BUu9l2gcZntihfMkSdiOc2ptK8CLnzLgbPUTZN9fYKKLyw7QbGRQGnnywR3DJlYpEUA6oTfxfNMV9iEsjGQN03cjbS5zmLtx7xxMr9VANco6jaTIhWCPWnPACXlo%2F89deLdM3JsfvE24mENdJbsEYCaOJY%2FxdRdIOuwOX1k6X3M4bIH%2FdyGAnJjrbuHrt4IQObEPx6OlublPXRQEdMvbkMh2rxWF7lj0Ae1d%2FdUC0BSkY7x0EX0y5%2BxPsKYNMtvs9EUZXk9ldbE0zbe7CsrxJXDtrelIH8RQhbAolEJX%2F1jA1Yx3p6ndQqlUtk94NWspDcL%2B9SqICf99WhVBbT%2FsjLED56lYMrhHZqFEXQ6uMyIogm6sipZVj7tdyDHEUm0Q3QgNKWcVqme6oyRL%2FMG%2FfhvjpTt%2FR8toJ8SaPl90nx3ZHeWhx7V847FxWAcDDU8UZEcIucYmBuG2%2BMRzxA7PegssU86L2b4uR8gstXGgysPqssKwI89pckoagYKep78NY5fmucrr5cuq2HwOuLY%2F8Feosh4lV5ALGV2QfnFkAamcGoFEo0CxhnA5XKPwwd%2BGfsx8GtpIIlgB6tNOlJ9o%2F3pFB2gtherp1jldtMMWi58QGOqUBZT%2BUhnRr62vbKenHKexCVGXpsuW3L6yOr%2FZL3Q5HHCNW1Yu5WGPd2E7%2BJ0ugLzqJ%2F6GFE96Hms17PKIz7Irv3tOAT54r7%2B%2FiKwGV71qNXoHRBlfGC8nljTmAFijEx4z9ssAZhSutKmmcC04lHSL2DTJsNk7yATQSnYP%2F9XZ%2F5e%2FHP2LAYv%2FGegjJj2Ynx24dLftTJwPSygIVr%2F6UsPL0TzegU6lU&X-Amz-Signature=a35752fd97bb2c8dc03fc86393346b7aeae32185d71751be69789c16fdf04dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFW2MYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8mFRHHJ%2FtmRC6bBdPoKpIQdVoM7dxZzxv92fsb%2FRoAIgItE5avp6WvEuobTqbbzo1q1bysI4%2FtSF7B00N6cpgG8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbAmrLURhe4hTy27SrcAxN%2B1mUzFWhfseSCPGsRuSXD7rOIbNMhUAy%2BwSdDeVlfhnGD8%2Fe92Qe3KlmGqNh3DIl3CqRi%2FSf2uTCDWrCaVTtOcy5nXpJNg3uALQgoIddFIOxgmgnsHbgmtXX%2FGPL9KPZkyO85LLhqLRHoqoGuMgNEvMJDRWnZWSvAvnVchAZNv25Tsi26a%2F5fTCpAlOmy10qTRzPmGrWIbS8cw4XYIYBOHojaUrJOYqH8L2qparWMNi%2Bs1vTYYJ%2BldmOa5vtOrv%2B8hYKPvjrmFvYKJ3%2FPrG3xH%2B8OQ6pRtWnQCrcUwq4tRYYzmyopz0wj%2FjfxYWPKtJzJZP7RKOPxoe%2FZhmc6RLvmD2RL1KSWWdvQFnVi4PwmAffBg0FOw4xaTOb4F3YR2v75gIk488v7hL523tNFRGy8r1dTOj57P4SLP5VP4leJXBd%2FMDrxb6qdgeEbxiGP43ShGX70LOtKokL6gwc3%2B04ZwTnSNFBtVxbG2mpE553m%2BQktWSx2C3BDaJe7MNjb2N6x0pkiDtMkraWtLVFwgBcdow9tANQmMbj1wPSpzN6dXy16UOW19lNPAHgsA29ZV2hxjrvy90g4jfpR%2FVdEcigekb%2Fcg8w3uj7gLs9RpKUWvzdak39E%2BwWOopVnMJmj58QGOqUB6uCJISMJDeKgM%2FZvgEBl3fJtV20iej%2FNzcQeEq7sbBR2CBG9NdPkgJjT8B6bsQZsuFS08SmOo%2FgwpdKUsNfLRlmUbPtMHJp2E2vgZx9vr3kXyPYYSbdw06K0U1%2FFpR3Yl8CWJwCuzzPfim%2F8yIs2hrjGWABnY4dyJ0Slc1nWWpHVC3RXFPHAxhnp8Xzdj%2BgHCvjgikz5tDRsFeE1XJBDreRsU68w&X-Amz-Signature=8a398fafbe2a8b9d9d8d606bd93d39013e4465d2c89cbc15e36cd8b04747e5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSUQOQ3J%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2tFeXi%2FPe8qH68wYI2mMrrV4SJosF5r1B78RfsPnq%2BAIgSm75qjbDdpJDI4AAjNWtYr8EeF%2F%2BUHwsVLGG%2FWkV%2B3wqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF0fZHeRCuUECHduircAz0aVhO6QHAlhsSw7GUiuQbKfkzbB9Kg1svGh%2FhVVfelrvp3L5XG6%2FJY%2B25pqVxenGi1TkaUSFhDVL0u0vILPrCBzMrYhex7k4ebifV2SZM6OEJNdNFAZo%2BQ1%2BByO%2Bd2Nf%2FFOwh6y6tajn9Dcb7M34tHZEDMpCHS%2BWDZIvU%2FYHFZ1pNAh5Wk%2FJoV8GmU1v5xYSiPfQrsVrI7ranOFMm%2FAL4uAu1G01dqoKhTLB7mpFyWpLVVUhWwPjUS5QUVZ7Yc%2F3gS%2BYipALXow9lATVSX9rHcMYLHpOmKaM%2FFCPM3YspxhprJQ2OdSEkOXoZ3TJBOacqcXscsi5qsD90deF0d%2BQ%2Bwmh4fphpAFzpwt8lVR85%2F0GLCRMUhRxny85vbwbn%2Bynz%2FasbqJ3ffs5VNCwFzEdAK35fnhGhZ%2F4HBqqh9fUnxqmaeV5K%2BFu6yNrhFbMU0YhrhA6gZY4eyoqh1cfWh4gOCltZH%2BO%2BEs5Kc5btCZ7zU3AYAIsppydTy02f1voNjpamwtgzmgliO8wgXwvrdfdM%2BU5iLxYwM%2B59u1A3A9JR3Fx7z2%2B3dDemTX4HXWBENC2WifxsXInWyGpLo8agGbLT1lbvPEPoNP8xIjnNZ6wVW4zkKUdyxN5w3fBpxMIOk58QGOqUBA3tW0gvkisj%2BC2C%2FD%2BIXE5g2zPTRmEZ6IDweEPNOl%2B97%2F2yX5AAknN8g9Cyh%2BlZtoaAbQQ6Lxt5MELKoJj5zyP9U2Z9NOMTJdHCYI%2FSI2ixtsdE5KCJQtf7x2XLmUfznT5VrS7eDjdNeMPprFYPFDnTIztdlAPsQNTSW9QmH3uZSjeReyQXTyR8z7O4IVt2Ge1cW3OXqAqdIKmiBIfyf0NR3saoo&X-Amz-Signature=cb5254486a7554208e73336184cc7f5b8b964129972552bbf53123af01cdf91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSRM67F%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClaQxZF6PDnFpL97r4KhGHz4VNEHQ5RZBfUjJ3wE6EgAIgE%2Fk0%2Frl%2BurmABS6EyAonR8WSfGOGkH%2BoR%2BKQ0l93JioqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImpAK%2Bi9vLQVCjUKyrcA0rjEVeOoeSE2dNgEL54cc%2B%2BUu9l2gcZntihfMkSdiOc2ptK8CLnzLgbPUTZN9fYKKLyw7QbGRQGnnywR3DJlYpEUA6oTfxfNMV9iEsjGQN03cjbS5zmLtx7xxMr9VANco6jaTIhWCPWnPACXlo%2F89deLdM3JsfvE24mENdJbsEYCaOJY%2FxdRdIOuwOX1k6X3M4bIH%2FdyGAnJjrbuHrt4IQObEPx6OlublPXRQEdMvbkMh2rxWF7lj0Ae1d%2FdUC0BSkY7x0EX0y5%2BxPsKYNMtvs9EUZXk9ldbE0zbe7CsrxJXDtrelIH8RQhbAolEJX%2F1jA1Yx3p6ndQqlUtk94NWspDcL%2B9SqICf99WhVBbT%2FsjLED56lYMrhHZqFEXQ6uMyIogm6sipZVj7tdyDHEUm0Q3QgNKWcVqme6oyRL%2FMG%2FfhvjpTt%2FR8toJ8SaPl90nx3ZHeWhx7V847FxWAcDDU8UZEcIucYmBuG2%2BMRzxA7PegssU86L2b4uR8gstXGgysPqssKwI89pckoagYKep78NY5fmucrr5cuq2HwOuLY%2F8Feosh4lV5ALGV2QfnFkAamcGoFEo0CxhnA5XKPwwd%2BGfsx8GtpIIlgB6tNOlJ9o%2F3pFB2gtherp1jldtMMWi58QGOqUBZT%2BUhnRr62vbKenHKexCVGXpsuW3L6yOr%2FZL3Q5HHCNW1Yu5WGPd2E7%2BJ0ugLzqJ%2F6GFE96Hms17PKIz7Irv3tOAT54r7%2B%2FiKwGV71qNXoHRBlfGC8nljTmAFijEx4z9ssAZhSutKmmcC04lHSL2DTJsNk7yATQSnYP%2F9XZ%2F5e%2FHP2LAYv%2FGegjJj2Ynx24dLftTJwPSygIVr%2F6UsPL0TzegU6lU&X-Amz-Signature=d628d6a87562242682f026a3d632bc2a90b44ac51271381027027f091bfaa0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
