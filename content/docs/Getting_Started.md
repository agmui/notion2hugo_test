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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SS5A2CB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDW632nhCZFAy85fHtX%2FQg3pnSLicdNF8isjoYq9DYRSgIgaG6WFPG6nt7S2pJjXQr9HJ2uylpmFwsKMrBF1VepDusqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOndzMiuwwBwiCvojyrcA1Op1mM7q1n67BGZczoHh0JULju3cPGNJp0PEOMHTVwjTEHjLj9sfKLeFWrsxe16Xa9fvrzAhUZqj8e1UYIhkvA0f4Z8By5OiuMjTKtuoFhwHn6saIRHogEBVeY0pI6KlJzZ7yjcnT%2BDRwGAiUAUhhtX7fODcl%2BMiQesVBeQve1CxpgmYTp6%2Fnf%2FNryQlM2OinyALXEpODADssfJrU7icdPxFYmDKIlHcG2dD%2B3JKa%2BXyKZ1GkfEUTyQkaWxDL15QosA6WdvQYaH1iTa8HLtTYyLypAcw5lKTZnKYcdw5VIsz2LBiayxzzYVTyhCprGu4FrIWe0AS3J6HQpYvH%2BmCj0nTGSYRrsH3NBMbtausCwCBWAPQu57zQKJbKlXqNJuvspAHyBnBIYBXyZl4xoolNu2VPdPn0VPDJHFmRvSb5PmMxfQDRPxuFQ4b%2F%2B%2FUrZWZrgzstdr%2BnZpDssYa7NcWJt5vGkm77lxmMOokCeZZX3W3koEAUxX26Qi6nI6o2VZWAKMVPPzVJuiOSbMa0KYJ5%2FOHYtTZxiVifwhRu1g6rIWl7EeXnCH3vejpunM4kW8of4K%2F8f9t6kFIkZeQE8jHfqkhBAHcuIo8ffhSz%2B%2BaDh2PESJy2jym1FCZa4MMNa4q78GOqUBdxCqyBIp4%2BSr4tgS%2FAZ9j%2B4cImbpgy7bKHh7RvhNMxGHBNr%2FfARcJEMCLg9ALci6Uv8FnmiWwHFSEQRwHwNAmboWL4objwCNfAbi5z18sOTMzkmPWMzY1b4sPpe0AF8Y4Amo22PtfaeLVmh%2F%2Foyq%2Ft9jax%2BaPP7ljGU0dx0V6wmwWSmjbEUCK%2FrlZ1VnNr13do5Ys5kCPkAQQk6pDfPWdDgDQ9J3&X-Amz-Signature=623d4f05dc29ba74981c78cf0cdc7114a355aaaeb682f497515de382b1538281&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SS5A2CB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDW632nhCZFAy85fHtX%2FQg3pnSLicdNF8isjoYq9DYRSgIgaG6WFPG6nt7S2pJjXQr9HJ2uylpmFwsKMrBF1VepDusqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOndzMiuwwBwiCvojyrcA1Op1mM7q1n67BGZczoHh0JULju3cPGNJp0PEOMHTVwjTEHjLj9sfKLeFWrsxe16Xa9fvrzAhUZqj8e1UYIhkvA0f4Z8By5OiuMjTKtuoFhwHn6saIRHogEBVeY0pI6KlJzZ7yjcnT%2BDRwGAiUAUhhtX7fODcl%2BMiQesVBeQve1CxpgmYTp6%2Fnf%2FNryQlM2OinyALXEpODADssfJrU7icdPxFYmDKIlHcG2dD%2B3JKa%2BXyKZ1GkfEUTyQkaWxDL15QosA6WdvQYaH1iTa8HLtTYyLypAcw5lKTZnKYcdw5VIsz2LBiayxzzYVTyhCprGu4FrIWe0AS3J6HQpYvH%2BmCj0nTGSYRrsH3NBMbtausCwCBWAPQu57zQKJbKlXqNJuvspAHyBnBIYBXyZl4xoolNu2VPdPn0VPDJHFmRvSb5PmMxfQDRPxuFQ4b%2F%2B%2FUrZWZrgzstdr%2BnZpDssYa7NcWJt5vGkm77lxmMOokCeZZX3W3koEAUxX26Qi6nI6o2VZWAKMVPPzVJuiOSbMa0KYJ5%2FOHYtTZxiVifwhRu1g6rIWl7EeXnCH3vejpunM4kW8of4K%2F8f9t6kFIkZeQE8jHfqkhBAHcuIo8ffhSz%2B%2BaDh2PESJy2jym1FCZa4MMNa4q78GOqUBdxCqyBIp4%2BSr4tgS%2FAZ9j%2B4cImbpgy7bKHh7RvhNMxGHBNr%2FfARcJEMCLg9ALci6Uv8FnmiWwHFSEQRwHwNAmboWL4objwCNfAbi5z18sOTMzkmPWMzY1b4sPpe0AF8Y4Amo22PtfaeLVmh%2F%2Foyq%2Ft9jax%2BaPP7ljGU0dx0V6wmwWSmjbEUCK%2FrlZ1VnNr13do5Ys5kCPkAQQk6pDfPWdDgDQ9J3&X-Amz-Signature=a295ab0142ff20cb516557f02498ad1a77ae9c42dc5a3a36b6a6bdd561074352&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZTT4V2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF1k5IrKsP%2BWWuthOl9D6cWG3Qn7i38BfpBkV8%2FsjE7FAiBXuFGoWWcofGPfU2jqskbQHo%2B9Zwj0Amb3R%2Fb%2FHsC8HCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFupr5gsggSV0aOldKtwDQx2WAmidRM9BOLQ%2FnYiLPxwyfk6hysU451st4IFh%2BQ1vVKuRNCDxMmfwQt6iX0aCDMPS5egZs2WKEMpU5bDtI3ue15k7AWrKETPkGJvldUXnID9exQda4F4duk5vzSWpNRZltCNkfNJdxS5H4NOEDr8QuWfDfTYph67dMN%2Bz55JchxM2jk5ba3MYZ%2FG1cEDpJucDPjUYa9v%2Bq1pAUAeNa%2F77DdsKk4HRthjujaV0hpfE623FH%2Fq%2BQD9yCbJm4GueCK%2FDWUipVFpDTRMTJQc6FeuBn6MYpHb1kU%2Fy13RtaZpMHh3spsINofkF%2FbfKDKa4xAcECIBLjBKJDP5EzOTK1GToKofhYKKmoV009CV7XInopb3CNv5jnyk%2FU0dc3N2sTl%2F2MUQy%2F28a3vHrOUQSBXaSZAy806u0CnTa5wbsPAu6CTXd%2FhlzRe0hjBOHNb%2BB2JVrzhOs%2B1d1JEIL%2FbDi4XA%2FbQzr8Z8jh%2FR1szLekK1bUXzH%2FPiuhTfp2a2YEBUxiE7A6Rd4ws1pIVk4jcAr8Cm5CCP7AmSNT0iH1orW9ZgW8UWCG0LFNqQfpdhZg16%2FKGI%2BWTa%2FPsa4pxiMUPrd5dmDp4GwSPFvZxYFqgXdhEzctrRgB1I4eyZitXIwzrirvwY6pgFxTsxPaj6HBDSPPXJtOdz%2BDqDSRYjtMBcHgoDPJAGdxsZO4jNy8TNU08vHpwp%2BUlHnDEW4GUf3xOZ2EKXOHdVIyMkSbP6HCODWSv4i1JY1A98VdqBlfv3nYEkDnh9N4E1i0n8drK%2FluBRA8MvuWcfrXctPPzO%2BjFAiqYXKe4JJlyHH43pyRLVHkr8jMx%2BmDLN2T8O5h2TOUGmHs6UsXbt%2BNeuPjC8G&X-Amz-Signature=94edd8bb0c3f2143b7ec84211fa481db11595b595d88b2348ef60c356057706e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKJ66ZU%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDnesm1%2BWTmu0IX8B6yNDOWMsHh2b637jE8EIdwxMFD8QIhAM5roM008kkGJmvmwT6GVqlTlWZ0ZmlXYvcEnSTIte7EKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjKFSTj2G8cgWNK8Uq3ANb5TwF0%2FKfHq4NSNd0J53bI1jktmqErYVSnaO8qaH8JcvZ1mzenda8dcEOToR%2FsvgxF1%2FbKn4F322aRASKvl8X9DgT3qfYEaGBwS94uFUUK31b8x2a2AavDs%2B3MSurvKLpd3EG%2BQ4RTlT5w3WLAW3sY4liXqbGmu1bWalIG7wUU6Qs7nulmgE0uJ263uqvA18g4cM94We2s8naRo0eCHSqSjAWL0cVk3pH%2FHlHnoDKgV1ayzZbgS8siMbbLKqx%2FDaY2rXXNQFCaR9TEagDq%2FbcaXb8E93JsytARFfP3jzxmpPDNL2UwNnJ259Bz%2FdG6r2bo4Eev9COP4IB2q0G6I10WfsV%2BvdzVKKgZNTmD2CAKSV4eODoXBTz4Vi6Lz6yf3meZiLPxA1mFHDAed%2BRNeCxnhYTkuOrcz1ioqFJNE0NhiYeIFiOl7U3UXZ%2FEaF18W5EBhheJwxM%2BwFleblRQbLgi2LWR6GAk14UGJF32uzHdW0pdANjknG90aayvJ8%2B0kfGF%2BUYylpnWI%2BMHhjlI2RF7huqGVJ7UWF8kS3SkrrMY0X7QP%2FW69Z1%2FrGau79PE4U4QnfCCPoXvV9eGGFtPvuQkEoTpGOH6%2FBu%2FygfrCfQjOZlYV7PJVM5ytORWzDKuKu%2FBjqkAYTPQ5t6vl%2B%2FKfDVRG5VF8%2FQwin9NyXDbzxdZZQ7BzLnsEi3GNsQVLYNNA5nyAOF%2BVvJZP5iYAmqFQ4VxeKNqF9Z4wh8Ypejwt1ITGxjyYe5BpJ4czeyGYLES%2BItPORAvRMahaatzvPtzoZdkMJLh1Jcq0oC99qjQSdDLF3aTOAkJ36qlfjecj7J7QSfM0pRhcg9YEqHGMiabPMZmYZ89NGXHlVy&X-Amz-Signature=1700156ffce80df59e4368a168274e49f8dffc2074af480e58fb2a21d51d49ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SS5A2CB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDW632nhCZFAy85fHtX%2FQg3pnSLicdNF8isjoYq9DYRSgIgaG6WFPG6nt7S2pJjXQr9HJ2uylpmFwsKMrBF1VepDusqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOndzMiuwwBwiCvojyrcA1Op1mM7q1n67BGZczoHh0JULju3cPGNJp0PEOMHTVwjTEHjLj9sfKLeFWrsxe16Xa9fvrzAhUZqj8e1UYIhkvA0f4Z8By5OiuMjTKtuoFhwHn6saIRHogEBVeY0pI6KlJzZ7yjcnT%2BDRwGAiUAUhhtX7fODcl%2BMiQesVBeQve1CxpgmYTp6%2Fnf%2FNryQlM2OinyALXEpODADssfJrU7icdPxFYmDKIlHcG2dD%2B3JKa%2BXyKZ1GkfEUTyQkaWxDL15QosA6WdvQYaH1iTa8HLtTYyLypAcw5lKTZnKYcdw5VIsz2LBiayxzzYVTyhCprGu4FrIWe0AS3J6HQpYvH%2BmCj0nTGSYRrsH3NBMbtausCwCBWAPQu57zQKJbKlXqNJuvspAHyBnBIYBXyZl4xoolNu2VPdPn0VPDJHFmRvSb5PmMxfQDRPxuFQ4b%2F%2B%2FUrZWZrgzstdr%2BnZpDssYa7NcWJt5vGkm77lxmMOokCeZZX3W3koEAUxX26Qi6nI6o2VZWAKMVPPzVJuiOSbMa0KYJ5%2FOHYtTZxiVifwhRu1g6rIWl7EeXnCH3vejpunM4kW8of4K%2F8f9t6kFIkZeQE8jHfqkhBAHcuIo8ffhSz%2B%2BaDh2PESJy2jym1FCZa4MMNa4q78GOqUBdxCqyBIp4%2BSr4tgS%2FAZ9j%2B4cImbpgy7bKHh7RvhNMxGHBNr%2FfARcJEMCLg9ALci6Uv8FnmiWwHFSEQRwHwNAmboWL4objwCNfAbi5z18sOTMzkmPWMzY1b4sPpe0AF8Y4Amo22PtfaeLVmh%2F%2Foyq%2Ft9jax%2BaPP7ljGU0dx0V6wmwWSmjbEUCK%2FrlZ1VnNr13do5Ys5kCPkAQQk6pDfPWdDgDQ9J3&X-Amz-Signature=6f3f2697ce3686997dbaa86fbab12db8cef861fc8f9d435ef252d446f6a4dbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
