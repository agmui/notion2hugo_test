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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRXDEPF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCxe%2FcokPr8wMIWQpLoM4PUsWnUDMkcGLBR5NLCilJcoAIgDT8Cp0FIQZFV8Qpesc4Fbi8tlIhxtYhUWUAoOH1HisYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KeW%2BZyjNAndkQPircA%2FGUywFUcHgQa6mvLKDKWRznyVOGcNlfydlMzayW7srFKy5S5uk2rYl8bR6hwDkOnKPhEIebxZ3tPM4vuV4xGHDAgvMexUsVOKtDGbxBkUQebzTq9259tO4j30mC3RZSrTNM6CMIweaUJNCwaCCdtfYrJmULQHfzWcertPyJhrPF%2FJrAQpKucgs1c9ZK9CdJJ9H6fzac93m639B3UdFo2lxxJKxOeUb34ONT3aQq6w%2FBd63ThgHP0IwYFhKBOT4w%2BBuQmImyGcdN7AzmVtKcwM9i8jj9WsRQV0g59i0eDr3cJyYP%2F8QKSTTahLVH1aKn7UxWTrtUXGtlIFyAzV2nWASlBnYiiUTCgI%2BJuqPKYyO%2Bj1y%2FD5o4%2F5WmyWOpMmOGMHy2XaEdnJKLb4rfmdNGO1pr8Y3cvzCiI9MVRBy71RjMjLvweUeUrTJT3r4XJARSkwtGevGS9J8F7EmOoA31STF8ExrP6wSbw5Zpeu9UwHv498S2uNugx8%2FOeD6yyaKwCpt%2Fbv%2FNYZMS4hVMYs3XfMJjmVDvXeL4CSPOKuTRFL0IGI6jy56aqV6%2FROe7o0ruS68Tr2KK%2BuFwklmGzI4opR%2FeoXZ1HQxLDDC%2BEBog27vRtJpMaiN1uK2DqoolML6PocAGOqUByy67e5eCAdBp7DeBcK4uyjs0Ptmdr85856jsQQHrybouiYu4EmvaXI4w7kJ8E2HCnBG1OUB7fT12ZIc%2FPeqohGOzaOaItCFJ4wCA7NTRJhjG6v6ZVM5WJMdIZYRxp48rHHmZonTfmxNpnFTQOVqfe6MzXtIpCsmLgVlMCurNeDqcBJS83Ug1R0%2Bx7%2BkOrFfBEyAnWJ4SirJNlWfg1B2DXA4we8Fi&X-Amz-Signature=fd19713d84bdbdee44f8ea40d5222f55df22d5bf9a3f6502261adc22a471193e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRXDEPF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCxe%2FcokPr8wMIWQpLoM4PUsWnUDMkcGLBR5NLCilJcoAIgDT8Cp0FIQZFV8Qpesc4Fbi8tlIhxtYhUWUAoOH1HisYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KeW%2BZyjNAndkQPircA%2FGUywFUcHgQa6mvLKDKWRznyVOGcNlfydlMzayW7srFKy5S5uk2rYl8bR6hwDkOnKPhEIebxZ3tPM4vuV4xGHDAgvMexUsVOKtDGbxBkUQebzTq9259tO4j30mC3RZSrTNM6CMIweaUJNCwaCCdtfYrJmULQHfzWcertPyJhrPF%2FJrAQpKucgs1c9ZK9CdJJ9H6fzac93m639B3UdFo2lxxJKxOeUb34ONT3aQq6w%2FBd63ThgHP0IwYFhKBOT4w%2BBuQmImyGcdN7AzmVtKcwM9i8jj9WsRQV0g59i0eDr3cJyYP%2F8QKSTTahLVH1aKn7UxWTrtUXGtlIFyAzV2nWASlBnYiiUTCgI%2BJuqPKYyO%2Bj1y%2FD5o4%2F5WmyWOpMmOGMHy2XaEdnJKLb4rfmdNGO1pr8Y3cvzCiI9MVRBy71RjMjLvweUeUrTJT3r4XJARSkwtGevGS9J8F7EmOoA31STF8ExrP6wSbw5Zpeu9UwHv498S2uNugx8%2FOeD6yyaKwCpt%2Fbv%2FNYZMS4hVMYs3XfMJjmVDvXeL4CSPOKuTRFL0IGI6jy56aqV6%2FROe7o0ruS68Tr2KK%2BuFwklmGzI4opR%2FeoXZ1HQxLDDC%2BEBog27vRtJpMaiN1uK2DqoolML6PocAGOqUByy67e5eCAdBp7DeBcK4uyjs0Ptmdr85856jsQQHrybouiYu4EmvaXI4w7kJ8E2HCnBG1OUB7fT12ZIc%2FPeqohGOzaOaItCFJ4wCA7NTRJhjG6v6ZVM5WJMdIZYRxp48rHHmZonTfmxNpnFTQOVqfe6MzXtIpCsmLgVlMCurNeDqcBJS83Ug1R0%2Bx7%2BkOrFfBEyAnWJ4SirJNlWfg1B2DXA4we8Fi&X-Amz-Signature=cba596badb07d23f36c5e59848b4261db544c0167941bf563db7c4fa870ea76a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDEYLME5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDLa%2Fg7gVW5gng%2BXrLLBX3jV60epaIkrQx%2Bkz8Nmsr8OwIhAJVHZf3w3Gceq29UtgxcvRboe1NRmWDHTjh%2Bv2d7N33%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUVIK5d97Ga0SZUqoq3AMFW9iHrQ2ttBtFalF3fnISrOoJm7KFBoYHIc58eDolVgDRkipW8W6Ej17rg6CV6ySOg8IQas0MfdZZgcCq88na5O%2BZ8%2B5plFt6LrFJlck2CuLjHPORfNE5J2bNKZCN25ve7eBxQrb5UkU6%2FYBF4c%2BFRYQCcm%2FkDOs%2F9B%2BbtlfvOJuoMsI8SYId2ruQ6IoKnxssWb%2BSIqITpCUFqB0Iptb9F3hIIF8Hpw5%2F%2BJNCwfItWCKLMw8cXiboFhey8b%2FLVhvWS3CZGJjZ3bFoPskXrO9da3e5YVHlWhut5jJkzIVm2hLlGWa6z3zXOPpiF8UzqPrSEj%2FbNWcwcCm5fmDHFtqFWd8%2BLMvbJ25Smc9Jv%2FKn9jf7ZjOEDsISJImP7v7%2FIW8tU6tMhOstfXVUcgYQijnurGZpO55hwjOvqaQK0gvdez2tRM%2BOIPxAhls5iDYa%2FfKwxwxzraRaowdbtKARV3fSzdA41fVx%2FKXiu4tmzgTsTcj56Vj046Pt79mNJxio0KNuhcWG5uW41yEGWmJzYBZaJCDhP1mH27HmwvLsp5LNThhGwHBC70BPYVfdy5hUwoVf4%2FregVXhLzG8jL2bZEIXqS%2BTnWRnqAQX1NB8A6pDbqjf9Ro%2FMyytu7XKwzDV8qDABjqkASm8qFXzCLyYS08pY2J2ONQ1mokYriZS9p85UL1fQedqp6AASlB5iegGg0FmUC5%2B1x95G72VJj72juXRrAmCqlbRH62eoNtopGp6PhNDUFMzD%2FC8lIcmYVzgtHvjfNw2cg2G2dL37Xcksel1P9x8HVC9YAZNQW3Qp1HkcCjvA%2Fh%2FsUIJQ0%2BAZ0ru12RV4O%2FrPYUftb6yXAArBg6Hh5uFsImDwHre&X-Amz-Signature=5ac47b23489ce429aea76c168fe4ffb539bd9ee88fee90a8761d0a77d32b81ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWDXIAG%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCTTztj21u2TzuPCr%2FeFJfZ%2BaWA0wIf8V0EUigLn%2Fc95QIhANYkBeVD%2B5DoYzLoCXnWrKJGFIFdQ3VgqLUYKyL17wv6KogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvN9IUXrZmRBccsosq3AN16hjS0R1EJcTDKNcR7W%2FCRaLwGrrJI1yvJ%2Bahlj5LpZ8gtAkk5ZMSIbS%2BEn9Co3Da8%2FrgaL2pGWs9skyrbTZwYzSTE%2FiVsiBGXVwhbfUA5KRyyHy3OTbhYnCRikYux1VqCmsPSpL0DZgsHvTE9Poc7Sr4gHVPKT3Lnr4mxsEJ2Tv17YUe5aWk%2F%2FUvkwVuhbSYyd0UfDPd140Q5pwgHT3J720KCXp5aGvRZOkUIK3gt%2Fp33bgYajvaPIsCetCwQtEkEPoYk%2BwS6FZWkrQ9VA6DnXVd2tmcVMTE5HdbgnVzPafylV03R6omNhUUeGmIyw0VE9yGU%2FD2ndyWGar7it43Fhsb5oG5MqeheeOFdMxrPh1qokSShtr5eRuHL5y15H2Dp5Ysh%2BS38ecUNaWygR%2F4uafA86FRLTJPLVvA3cL4VWZIQoACVa8iXSdFnTqYs1FlmEBi4jbCd1qps2%2FunvnIMdCHQCmK4YllrN76faDB6ZN%2FMDy20xsIF%2FZjLohbSSvDbSe22zLdmpP1uxfMi19jLujxCL4Ow3cAgzBUZxe8MnbmIa3Y7NjNp7qLGMHY4E70q3iNi7UJiKUvrYZQhBhibRlKoO9qn773jglrOyoiejnCbZ8ueO5fU6PNkjC8z6HABjqkAWysLH2Dxy3KUemIKBQo%2FLOqjQ09eKL1bqeojScveF6%2FK8BzH%2Fq%2FyA35ufdIw3KfM%2FkrS%2BYLmP9eEr9fkMCsHTi07AJ6it1Z%2F56uR77i2Sk6ukWh4IgVaeJHeReAUWW1yO8tzcaguYmk3n23l93rzhMbV%2BcR9rRw4i%2FehqAsbmgD5iFzK0Me4p3yPUHK7BYfUfjiKBdzfNZu5AWGCuCosp3pNguk&X-Amz-Signature=e1e5e02d8132d1194f6fff3a158d461633e274b633cfbbeb7a8d7283a9fce76a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFRXDEPF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCxe%2FcokPr8wMIWQpLoM4PUsWnUDMkcGLBR5NLCilJcoAIgDT8Cp0FIQZFV8Qpesc4Fbi8tlIhxtYhUWUAoOH1HisYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KeW%2BZyjNAndkQPircA%2FGUywFUcHgQa6mvLKDKWRznyVOGcNlfydlMzayW7srFKy5S5uk2rYl8bR6hwDkOnKPhEIebxZ3tPM4vuV4xGHDAgvMexUsVOKtDGbxBkUQebzTq9259tO4j30mC3RZSrTNM6CMIweaUJNCwaCCdtfYrJmULQHfzWcertPyJhrPF%2FJrAQpKucgs1c9ZK9CdJJ9H6fzac93m639B3UdFo2lxxJKxOeUb34ONT3aQq6w%2FBd63ThgHP0IwYFhKBOT4w%2BBuQmImyGcdN7AzmVtKcwM9i8jj9WsRQV0g59i0eDr3cJyYP%2F8QKSTTahLVH1aKn7UxWTrtUXGtlIFyAzV2nWASlBnYiiUTCgI%2BJuqPKYyO%2Bj1y%2FD5o4%2F5WmyWOpMmOGMHy2XaEdnJKLb4rfmdNGO1pr8Y3cvzCiI9MVRBy71RjMjLvweUeUrTJT3r4XJARSkwtGevGS9J8F7EmOoA31STF8ExrP6wSbw5Zpeu9UwHv498S2uNugx8%2FOeD6yyaKwCpt%2Fbv%2FNYZMS4hVMYs3XfMJjmVDvXeL4CSPOKuTRFL0IGI6jy56aqV6%2FROe7o0ruS68Tr2KK%2BuFwklmGzI4opR%2FeoXZ1HQxLDDC%2BEBog27vRtJpMaiN1uK2DqoolML6PocAGOqUByy67e5eCAdBp7DeBcK4uyjs0Ptmdr85856jsQQHrybouiYu4EmvaXI4w7kJ8E2HCnBG1OUB7fT12ZIc%2FPeqohGOzaOaItCFJ4wCA7NTRJhjG6v6ZVM5WJMdIZYRxp48rHHmZonTfmxNpnFTQOVqfe6MzXtIpCsmLgVlMCurNeDqcBJS83Ug1R0%2Bx7%2BkOrFfBEyAnWJ4SirJNlWfg1B2DXA4we8Fi&X-Amz-Signature=1a6df2a74f49dc8de0484eeb856dada87cbe221fa3b03d8261f74eb6d062e72f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
