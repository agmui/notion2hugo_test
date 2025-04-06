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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSHQBQQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6N7%2F%2BykUP%2BWXf42z2pnocL0v6XRxCMdAbAkSzrpsH%2FAiEA59lGwOAVqvZt3fTJH5tcpbAx9SbayYS5gfm2keGyBG0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO1reQbFq%2BqknmSt0yrcA22ti%2FO%2Bx5ZO6rcT7CyB5oyLaR3Cv%2FSAJyfHJ7obihduJYms6rKkHBo5CKubLQEKH3koadrg0TpOBW7KYpR%2B0qP%2FuZMDJAjXUd4N6g1mT%2FgfDQaBBZ%2B1m3Kioj5g%2Bbn53JV2oBfxl4g%2BU3Kkodugki%2BYTUG%2FQ%2FLcm9uI%2FpVyNZrOfE8zVTyCpSvU7B9ynKxhvrc7P%2BbtUiKP%2FAS8gT1jBl%2Fy6SwYMPuG1KweJERosKNCiWPv9u77xvhOYMck2h2DSQIxxmw2KsAgRqdA0pgqnjluZZ3xp%2Bp2bscCJ%2FpLVDn6rbNv6EjgZmD6L92%2FfYpYYblTLjQpvpYqd%2BGZfpEEMng%2FL7Ge3RUl65kIl%2BqwY2Y8aE5z4in7AnCmnCTrYz9cYn0U0PC4rCAIDcodHpXxXkBC1l1totPkmFkUSzYaSxJDpPBzJyRVqd2UH9UY2dP6FEEBXBwt4k%2FoeFb6VNkjl5IpHKM5n%2F1v1poAPSEDVYP0jPGGww9uie6F%2FWkk%2Fcj%2BCamEU6%2BQzCmcPRsZxl9VSKttix7juYE8M1vI17g4vIKXWJYHleWUlZC6IIK1W3%2F6O2fhcHBWwRaKBV%2B0hM8gB60WEK7yiO%2FK%2BxcPRMSjTX0KbWD2Cv8FLi5cIhnCMKr%2ByL8GOqUBP6MUtgOPsq%2FDyIAmWZB7cSw48J4HDcBV3qRouSSjsR9GrGdJkvmtzVqIC8RGzPnSbEA8pCwzYRHeXHSERFqRdW2alkMNzGIOxbj4GxvGjPw1yHRl7WcaVUfK%2FXugqWrtcGG696ZryUY%2FU2fZarXCfBK%2FI%2FVv7k9h%2FCY%2BBrXuU3xSwjCLSXaPjRNxfMDgmfrjHw5RY%2FZ7Hf%2BbqEszV81WikBH83Pc&X-Amz-Signature=81030cfe76fa1d9c63b3d0d63ffd374017a4696790b50075dbcd740155700222&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSHQBQQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6N7%2F%2BykUP%2BWXf42z2pnocL0v6XRxCMdAbAkSzrpsH%2FAiEA59lGwOAVqvZt3fTJH5tcpbAx9SbayYS5gfm2keGyBG0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO1reQbFq%2BqknmSt0yrcA22ti%2FO%2Bx5ZO6rcT7CyB5oyLaR3Cv%2FSAJyfHJ7obihduJYms6rKkHBo5CKubLQEKH3koadrg0TpOBW7KYpR%2B0qP%2FuZMDJAjXUd4N6g1mT%2FgfDQaBBZ%2B1m3Kioj5g%2Bbn53JV2oBfxl4g%2BU3Kkodugki%2BYTUG%2FQ%2FLcm9uI%2FpVyNZrOfE8zVTyCpSvU7B9ynKxhvrc7P%2BbtUiKP%2FAS8gT1jBl%2Fy6SwYMPuG1KweJERosKNCiWPv9u77xvhOYMck2h2DSQIxxmw2KsAgRqdA0pgqnjluZZ3xp%2Bp2bscCJ%2FpLVDn6rbNv6EjgZmD6L92%2FfYpYYblTLjQpvpYqd%2BGZfpEEMng%2FL7Ge3RUl65kIl%2BqwY2Y8aE5z4in7AnCmnCTrYz9cYn0U0PC4rCAIDcodHpXxXkBC1l1totPkmFkUSzYaSxJDpPBzJyRVqd2UH9UY2dP6FEEBXBwt4k%2FoeFb6VNkjl5IpHKM5n%2F1v1poAPSEDVYP0jPGGww9uie6F%2FWkk%2Fcj%2BCamEU6%2BQzCmcPRsZxl9VSKttix7juYE8M1vI17g4vIKXWJYHleWUlZC6IIK1W3%2F6O2fhcHBWwRaKBV%2B0hM8gB60WEK7yiO%2FK%2BxcPRMSjTX0KbWD2Cv8FLi5cIhnCMKr%2ByL8GOqUBP6MUtgOPsq%2FDyIAmWZB7cSw48J4HDcBV3qRouSSjsR9GrGdJkvmtzVqIC8RGzPnSbEA8pCwzYRHeXHSERFqRdW2alkMNzGIOxbj4GxvGjPw1yHRl7WcaVUfK%2FXugqWrtcGG696ZryUY%2FU2fZarXCfBK%2FI%2FVv7k9h%2FCY%2BBrXuU3xSwjCLSXaPjRNxfMDgmfrjHw5RY%2FZ7Hf%2BbqEszV81WikBH83Pc&X-Amz-Signature=e02931706ea34491fa52029ff4128795c9fa3d483ca4c367f90feee50f742240&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REL25XQG%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpeGlRvQV90mgpOFJPbWliWdu6psDGyHWm1CW1i0d9ZAiEAzOOwCKEPllGBKuclLnHydJMa83C2I%2B2dvN0C2Qxvmu0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYn2bc8nkmhWRQFByrcA6AZjW90%2FS%2BJwR4A%2BU1pf9DHcNpxHvQWUodVm1pVglFljtw%2FicFyO%2FHkNtukOjyvLs8KW3%2BzxqioTx8WvgmVnSUShWGIod9aOUSWUB4rYQuOQnkJJgwpPsrCbKJx6jzfXno2UteED1mxMHPTiZ8sl4TcbjblaRVuz1ZsECxSh4ZuKrpiCJnV8HZBIMKS%2BaxZy51LkPPAVS1KEgdM6vb5vaJJYBJ4wqDSPot6e2dEnHf5h2jxr6qEE0kHODuz%2BCzOmM4v%2FKD8ztxOKs%2BQyKODsqlgs4YMEO42EjQTsO1zieNkUinbTe0HRZ%2BtUzriEh%2BlclyW16IeIdEx%2FdboUe9OD41OhEaMkKCfTjqDMoiXzh%2FtgBSwc4qgVXiOr3Rs%2FV2hiWNLbT7kBpJlH%2FKv%2FR6oxPiCsX7Wi4vbR%2BTliJ2fLb4zM%2BOR9b441iaf3ZW4xRaJXkDZzklDnoDctDilVN7U%2FpnX%2FD%2BYDyPVd%2Bqn0EUalMz%2Fy3nh29uw1UQEm5dIxR9Kb2Ac2AkJByUfdZDYVMoWzcnsc8BfBapkVWvvzhShl4uiV1O0PXUF%2FEu2elnqNAFtHgCF3cpuQlsGgifCNVI5Hg9Wqm8wds3KpriKjSt16Mz24x07IHsjN%2FG9%2BY1IMPT%2ByL8GOqUBuCqSCY9F%2B8mRo%2FqpDxRbSYOaZfvts4sjgvuCfrfOzNriVUNim%2BplaRBoXPNFFHsdA2AAxSjj0n78YahklzKvmAE2Pv4Dmj2eGnn7xV%2F%2FxkY6l33U%2B%2B6mXJvuQxUFdxwheGamX62tTu5pT1TIw84WB1oaZlnL%2BMzqsbVRN6Ws4fpxXl555RuT25xzR0mOBOXU%2B4QaWw7tb0bYlB3vrgGxJ6OaAkJ5&X-Amz-Signature=a68f9208564a2bdb27d1871181b0f91f09cce934c757c9535c949727add7c759&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDFBOJF2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnaU9EiWlUU6SssEC90%2B9QHQJqQVLmOik%2BD0UB7bJOkAiBKPi8n4rFvkooZiLRLb8nssqGd1Mq5ursI0wRVH5gw8yr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMIB9OJwwVGLJhLqfdKtwD4uFrbWZznZIipm8Il1kfSEiT9pn26qTZBdRZcT2tZHK1LLxyQ5OtZaQaoHyps5t1Olf7kGJJKjzImshvUuM0FeQmGUbt1TeV%2B4gZXaeEArGun7a5gN56kTT7sFI93UQ2X0WPpSduHOEemUdj6wFGWrCVzjNoJyqgA9tI5WtKl%2BVwfzSJwaA9qRc0TzkV%2B%2BGeYa7su5fSA7F9bDz19Po1CuMV4H3rl6bDHSbG1ILlFiUwF071HhTTrcphbpYHrnIpYg52bXCeW4o4pD1fyCG8EwCcYLGnZkBML3Lvj19L6I%2F8AIxdDVUzmS%2Fj%2FRfjrn%2FbCOX%2BYUVPdDDSHicSbXygLsBzYFC5%2FhJVzwT2FAu8FOn6bucP9avQ81HDxOu9tlgY%2BZjspPQu9NgRu4Kyc2tIln1pDuy0oWh5aP4N%2BiFvDmlLC3YpniWzMAefEtNDJcrB0%2Fw0nIsPvohCSGn7Gj2RZ1Yq1A6aq6RHc98l4In1IOIFJ0k%2F5uoLfMc1jYovRseHSixGvW54U3R8zTrxgOU4qZaaqhGYG70aKqssb1Zu7deiT%2Fq5MWNZlbhAYAYrsMQPfPoxr%2Fj8f5bxxD9rCJLJPf69blHztVaMv7lr%2FAKYYf535T9nq9K5GOdPPegw9f7IvwY6pgEWk4vLly%2F7d7TE0CudrwkNJWt47rrApYKag0%2FmhplbwmV4INAgU9Ah6pAHOqJo2zL9EZXpFtdRiE7YoLBIhcF4dV5WiQBwxLjXiTo4eE4cEuI5WGgHgGT1YuDMeiqZ0CeLz0ow8AJEVuWja5oVjDSaC9iHz%2FF0VcShcNKYKIpa7y7vbdNEZd8B2qyy50%2Bh3Xm0HCBkK7bKq%2F8%2BsULbORptX2pRurXe&X-Amz-Signature=ba92c027f3e63f8a64d54241aef686abe938d7deaa69344c1852fa4753321375&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSHQBQQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6N7%2F%2BykUP%2BWXf42z2pnocL0v6XRxCMdAbAkSzrpsH%2FAiEA59lGwOAVqvZt3fTJH5tcpbAx9SbayYS5gfm2keGyBG0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO1reQbFq%2BqknmSt0yrcA22ti%2FO%2Bx5ZO6rcT7CyB5oyLaR3Cv%2FSAJyfHJ7obihduJYms6rKkHBo5CKubLQEKH3koadrg0TpOBW7KYpR%2B0qP%2FuZMDJAjXUd4N6g1mT%2FgfDQaBBZ%2B1m3Kioj5g%2Bbn53JV2oBfxl4g%2BU3Kkodugki%2BYTUG%2FQ%2FLcm9uI%2FpVyNZrOfE8zVTyCpSvU7B9ynKxhvrc7P%2BbtUiKP%2FAS8gT1jBl%2Fy6SwYMPuG1KweJERosKNCiWPv9u77xvhOYMck2h2DSQIxxmw2KsAgRqdA0pgqnjluZZ3xp%2Bp2bscCJ%2FpLVDn6rbNv6EjgZmD6L92%2FfYpYYblTLjQpvpYqd%2BGZfpEEMng%2FL7Ge3RUl65kIl%2BqwY2Y8aE5z4in7AnCmnCTrYz9cYn0U0PC4rCAIDcodHpXxXkBC1l1totPkmFkUSzYaSxJDpPBzJyRVqd2UH9UY2dP6FEEBXBwt4k%2FoeFb6VNkjl5IpHKM5n%2F1v1poAPSEDVYP0jPGGww9uie6F%2FWkk%2Fcj%2BCamEU6%2BQzCmcPRsZxl9VSKttix7juYE8M1vI17g4vIKXWJYHleWUlZC6IIK1W3%2F6O2fhcHBWwRaKBV%2B0hM8gB60WEK7yiO%2FK%2BxcPRMSjTX0KbWD2Cv8FLi5cIhnCMKr%2ByL8GOqUBP6MUtgOPsq%2FDyIAmWZB7cSw48J4HDcBV3qRouSSjsR9GrGdJkvmtzVqIC8RGzPnSbEA8pCwzYRHeXHSERFqRdW2alkMNzGIOxbj4GxvGjPw1yHRl7WcaVUfK%2FXugqWrtcGG696ZryUY%2FU2fZarXCfBK%2FI%2FVv7k9h%2FCY%2BBrXuU3xSwjCLSXaPjRNxfMDgmfrjHw5RY%2FZ7Hf%2BbqEszV81WikBH83Pc&X-Amz-Signature=5b2dbb9c06eb7ab71df50a72eb1ab9a10b7c0172812958bb8290532cc57dc814&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
