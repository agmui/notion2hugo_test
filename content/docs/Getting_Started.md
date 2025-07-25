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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZZPWJQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk64h0cy1Y2Sqq0cBt6SkjS41wCrSrva9tReZ4glcbLgIgWzxsZtKvb6GfR7PDG5fl1m3KqQG3lFqDvNMijD0NMoMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAwW0x2RBuFBTrtSeSrcA86rhKjSWR%2FOVfhZ3EmcibNfnkmdn3jZ54B%2B0qffXmpw58x2kOLSmZWuO3OSEAJEPou6b4ubnOOCYugGPzlQ8kfJX9T9OCPPy%2BuXOB5igSe3d8S1LOecB2Z1soygtgCyJBC70rOKFjOBzMpyNVgOQQgYfOn%2Bq%2Bre89fFEuHEqnggic25lZEH8zJwu83ZDjlIb%2BNAnqqYzrSooO6N2D%2FOdaF0lKz57r8whP8IM%2FGPVd2fzC9n7dNuxEHssK%2FQv1%2F5RP8ttXKqPq6ACGArdikXnm4o2A2s%2FzZqTby7Lye%2F7iTzAKSk88JT%2BEuHlMOtdupfSdpFCFDBTc8QK5Aebr62gEfSemoxvnHhuHB22nzUZw3hlns0E9yk1z8w4ptpNuA2dT8bDEF9BFtTINL40qc%2B164gFxCFm75RU3y7f72EGKN9PLjvxSPXKYon9R62Iu4kt31ylSvAtWceh%2BX6tg5AgKf9CcoULVf0zdeVQPtBDXwsh%2BAXLSGn1bOa1ckfaVtMldymYK15ujDiOdMbrepbIWp63ax%2BnPZfPSI4BwKejqZnCyTA0Erm5%2BeKo7kp%2BmZg883lzxOcWBlpD0usC3aSNbythjafF09FOW8oedIJ%2BEo5PwcXACRThQa7%2BFaEMLOMjcQGOqUB5XCECYeKE2lpVPqKmphmSM3SME0ljtLuDucUxAc0X%2F39gADXc3MKsCETQ9wgaApaW3jGGnoL8bHhiIeDKr7HIZafy7G6efs%2B3XDqFd2NLnmc2oEj5x2KGpANtlw29uCDmu0gvwlnVclSWDrvC5%2BydFP5WDP3R9gRy7u1U1Pyx1iJG%2FvILZDXeBh6wmvmJ24%2Bn89bwcW86j1Q0QOqGLIsB5t6fq%2Be&X-Amz-Signature=5107e1531d0fe5623db31a8bcb6ccacdc89726ef1488f70d56565bad4c43e9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZZPWJQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk64h0cy1Y2Sqq0cBt6SkjS41wCrSrva9tReZ4glcbLgIgWzxsZtKvb6GfR7PDG5fl1m3KqQG3lFqDvNMijD0NMoMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAwW0x2RBuFBTrtSeSrcA86rhKjSWR%2FOVfhZ3EmcibNfnkmdn3jZ54B%2B0qffXmpw58x2kOLSmZWuO3OSEAJEPou6b4ubnOOCYugGPzlQ8kfJX9T9OCPPy%2BuXOB5igSe3d8S1LOecB2Z1soygtgCyJBC70rOKFjOBzMpyNVgOQQgYfOn%2Bq%2Bre89fFEuHEqnggic25lZEH8zJwu83ZDjlIb%2BNAnqqYzrSooO6N2D%2FOdaF0lKz57r8whP8IM%2FGPVd2fzC9n7dNuxEHssK%2FQv1%2F5RP8ttXKqPq6ACGArdikXnm4o2A2s%2FzZqTby7Lye%2F7iTzAKSk88JT%2BEuHlMOtdupfSdpFCFDBTc8QK5Aebr62gEfSemoxvnHhuHB22nzUZw3hlns0E9yk1z8w4ptpNuA2dT8bDEF9BFtTINL40qc%2B164gFxCFm75RU3y7f72EGKN9PLjvxSPXKYon9R62Iu4kt31ylSvAtWceh%2BX6tg5AgKf9CcoULVf0zdeVQPtBDXwsh%2BAXLSGn1bOa1ckfaVtMldymYK15ujDiOdMbrepbIWp63ax%2BnPZfPSI4BwKejqZnCyTA0Erm5%2BeKo7kp%2BmZg883lzxOcWBlpD0usC3aSNbythjafF09FOW8oedIJ%2BEo5PwcXACRThQa7%2BFaEMLOMjcQGOqUB5XCECYeKE2lpVPqKmphmSM3SME0ljtLuDucUxAc0X%2F39gADXc3MKsCETQ9wgaApaW3jGGnoL8bHhiIeDKr7HIZafy7G6efs%2B3XDqFd2NLnmc2oEj5x2KGpANtlw29uCDmu0gvwlnVclSWDrvC5%2BydFP5WDP3R9gRy7u1U1Pyx1iJG%2FvILZDXeBh6wmvmJ24%2Bn89bwcW86j1Q0QOqGLIsB5t6fq%2Be&X-Amz-Signature=7a609c692dfc11f9d21ed6c90955d10784ef7e1e57c14a2526b6bd7260de6642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZZPWJQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk64h0cy1Y2Sqq0cBt6SkjS41wCrSrva9tReZ4glcbLgIgWzxsZtKvb6GfR7PDG5fl1m3KqQG3lFqDvNMijD0NMoMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAwW0x2RBuFBTrtSeSrcA86rhKjSWR%2FOVfhZ3EmcibNfnkmdn3jZ54B%2B0qffXmpw58x2kOLSmZWuO3OSEAJEPou6b4ubnOOCYugGPzlQ8kfJX9T9OCPPy%2BuXOB5igSe3d8S1LOecB2Z1soygtgCyJBC70rOKFjOBzMpyNVgOQQgYfOn%2Bq%2Bre89fFEuHEqnggic25lZEH8zJwu83ZDjlIb%2BNAnqqYzrSooO6N2D%2FOdaF0lKz57r8whP8IM%2FGPVd2fzC9n7dNuxEHssK%2FQv1%2F5RP8ttXKqPq6ACGArdikXnm4o2A2s%2FzZqTby7Lye%2F7iTzAKSk88JT%2BEuHlMOtdupfSdpFCFDBTc8QK5Aebr62gEfSemoxvnHhuHB22nzUZw3hlns0E9yk1z8w4ptpNuA2dT8bDEF9BFtTINL40qc%2B164gFxCFm75RU3y7f72EGKN9PLjvxSPXKYon9R62Iu4kt31ylSvAtWceh%2BX6tg5AgKf9CcoULVf0zdeVQPtBDXwsh%2BAXLSGn1bOa1ckfaVtMldymYK15ujDiOdMbrepbIWp63ax%2BnPZfPSI4BwKejqZnCyTA0Erm5%2BeKo7kp%2BmZg883lzxOcWBlpD0usC3aSNbythjafF09FOW8oedIJ%2BEo5PwcXACRThQa7%2BFaEMLOMjcQGOqUB5XCECYeKE2lpVPqKmphmSM3SME0ljtLuDucUxAc0X%2F39gADXc3MKsCETQ9wgaApaW3jGGnoL8bHhiIeDKr7HIZafy7G6efs%2B3XDqFd2NLnmc2oEj5x2KGpANtlw29uCDmu0gvwlnVclSWDrvC5%2BydFP5WDP3R9gRy7u1U1Pyx1iJG%2FvILZDXeBh6wmvmJ24%2Bn89bwcW86j1Q0QOqGLIsB5t6fq%2Be&X-Amz-Signature=2355bf2fbbdea290160a0524adc83b3d4beb9b00bddfe792bca3ade71f6c553b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I6PJXBT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC4xIdxrTnlvWi6GDhxTFF3gQqO5FUH8lCpdw036dko%2FAiBOdqoMC4caRCUY0bS66x%2FohB4gVYjV%2BMpHeQcquuL6WSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMjoct88U9F9iEVwBIKtwDrxV6HO%2Fce0ljkaGIq5hqTy8OU%2BA%2F3Roo8%2BRuQtCJCSIjJ2hVNYc3rGzdvaoeT0OllUSboX4bsPxez8Sq9NkuCInloqVGdge9pQQBE7aRjMX9IHz5dBeIC4wVNQSPPHZktG5yghYj3FPsk7n4BGQn3BVHyQgf%2FKKGnMALTiwI4kfPOk%2FFLU0tH78CJHeSUqTrIRSWU%2BWyexrrGBMS9GI5DXxVRTN0SaNLn7sCJJElvCw4qqjrNBjtMAGs%2BcrKHoEe5oQqwzwXleoUFTavu%2BW4pAIIo3kWTSUmve9ggvbK8%2Bu%2BHJgywFPc0%2BEcQh1dhPPSYQXkTZ2ah%2FF6eDFR0i5p5IQ7QyvUS7ZQOJh5hO4DQElVt36I9cn8hJAmHESDXvWRhjpDb2bzc452q9SpIwsF0apgfkFurDci6LPGL7LhfKQYVJXO0xnuedGY2IaubyAdOEyuGIF0cHdH6i9elqYmsDGP9pSPCwvtLax6qyh0K1XSXeL%2FeuTrw32GRpkWWmkZK5uMgsyC8uCY0SRvhQtltgJO0ETb15AxGV82k3J3giGo60qiwBbLAV6wM3gDu7fladwu4ABufpOUFljJbTnyWi1IORBCBQc%2F2dq4cK6RwBS4nTK7LFMFwxNBvf4wko2NxAY6pgGCTJVj%2B6%2BxUbQHj6Q72TnnVD6uDEn9jFN3h%2Botg3N5iqujtHWmlwAzCZNMFFFAi0HOxzTXcXQi8ytcs1iVLr6fUH2GlIwcsaRXTOQmEi7HHFgSodQNGaNiW3jVjv%2FJhghk5U1ylJZOpAY%2FJffn%2FNuT2RN5I%2FGP%2B5CNUqyI8b7ylEmaMEMqaOaV3Op9x%2BnhSoDvKBElRCkSD%2FAGL9HBQLQbY6vtrSB1&X-Amz-Signature=9d1cb9952fe2dfa78c3da8e8476ea95bfcd707bae9697f8cbd6507c2a6c8f022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYA7B7JO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFUP6z6PdaLBTa%2F1EMn5qdpmcPxBPnUwXKfAiXJ5m2PsAiEA6bl30jrPrxAF3joIsGuunskE4kbsEUildZWti7qTSUUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMC0vSJs17SsarlbrSrcA1hkMwROl5geNaxIikkanEGgrt8V%2BVMjLLlFHHJsxTxGZ6M3USbq0IeEZg55XK6mnkpPieREqyN%2BKOkw2iOSTCy4ZoMPsuUfRTnTHbcfI0XpoqN0V2bRFKL8jNFEPY%2B2GONWCFmqmg9peFLzEKVTXt%2B9QhQNA4Mb626zs57yKVDweFV3eWDwUjvp%2ByiVnb6ambQYjq%2B%2FAlJyjuvvE%2FdSOhRDlQzLHq1XiN1SqGulk7ivzhgTYgNmpapyeiTwuIGmGCkZqpbALUtfeQ7hwfFR5CpwgPs43TrX%2BVlgA3ZirIq2OGqZCHWvn7Ar4yNfYKZzSwwdjbgFq3sqYytJarUDHsLX6mGK6HHc2bDYQYNLwZA66jjUZk74agas8OL%2F0dCSVHlrt741n1ODBBv%2BBj3YUFJ3Q%2BXdNbyeP%2BFlI3Ul94Y5NPsPW3kINYqc12yP9k36%2Fe99P40bkjX6lw%2BZ5hOFTDJaGifVhT97ipUTeT1ITcdIPzBbWZXBl4y5zVPgeF5%2FQxMmv05sPOyD8C1pMkFyc4JLk50hIjfDOuLFp23mhHyj0yvsyDONHKobt7v388YUetzYaNfPthP1tACB8Q4ZVO8V2pqotHQYucFj1hAvrWDLgS0QTJ2qmUH%2BjR6LMMWNjcQGOqUBhfEiNUR%2FALQlmHUHT70bf8xcTo3dRHURrnaVZZygYzhUawKzmXYtxkRZZHUkZS1j2Zs7U6dP%2BGf0uXeTLLoZGrPmWCph8zJ%2BDUEFHN20tFWDtpGiYws%2FXb9y4wgyL7rlA%2FsA%2BWKYhblZgBcpFjjYhyibicXfL8fzcQfzGdNTF6IqiTj%2BbP%2B9gQCUP70HmnxKnKWb5rHzMp2Mrf9I6Gv%2BpcUrEzBv&X-Amz-Signature=9df8ac0aa64ceca30abc2e1cac50636e6f598b1f7a226f91d8b35bed8656ebd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBZZPWJQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk64h0cy1Y2Sqq0cBt6SkjS41wCrSrva9tReZ4glcbLgIgWzxsZtKvb6GfR7PDG5fl1m3KqQG3lFqDvNMijD0NMoMq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAwW0x2RBuFBTrtSeSrcA86rhKjSWR%2FOVfhZ3EmcibNfnkmdn3jZ54B%2B0qffXmpw58x2kOLSmZWuO3OSEAJEPou6b4ubnOOCYugGPzlQ8kfJX9T9OCPPy%2BuXOB5igSe3d8S1LOecB2Z1soygtgCyJBC70rOKFjOBzMpyNVgOQQgYfOn%2Bq%2Bre89fFEuHEqnggic25lZEH8zJwu83ZDjlIb%2BNAnqqYzrSooO6N2D%2FOdaF0lKz57r8whP8IM%2FGPVd2fzC9n7dNuxEHssK%2FQv1%2F5RP8ttXKqPq6ACGArdikXnm4o2A2s%2FzZqTby7Lye%2F7iTzAKSk88JT%2BEuHlMOtdupfSdpFCFDBTc8QK5Aebr62gEfSemoxvnHhuHB22nzUZw3hlns0E9yk1z8w4ptpNuA2dT8bDEF9BFtTINL40qc%2B164gFxCFm75RU3y7f72EGKN9PLjvxSPXKYon9R62Iu4kt31ylSvAtWceh%2BX6tg5AgKf9CcoULVf0zdeVQPtBDXwsh%2BAXLSGn1bOa1ckfaVtMldymYK15ujDiOdMbrepbIWp63ax%2BnPZfPSI4BwKejqZnCyTA0Erm5%2BeKo7kp%2BmZg883lzxOcWBlpD0usC3aSNbythjafF09FOW8oedIJ%2BEo5PwcXACRThQa7%2BFaEMLOMjcQGOqUB5XCECYeKE2lpVPqKmphmSM3SME0ljtLuDucUxAc0X%2F39gADXc3MKsCETQ9wgaApaW3jGGnoL8bHhiIeDKr7HIZafy7G6efs%2B3XDqFd2NLnmc2oEj5x2KGpANtlw29uCDmu0gvwlnVclSWDrvC5%2BydFP5WDP3R9gRy7u1U1Pyx1iJG%2FvILZDXeBh6wmvmJ24%2Bn89bwcW86j1Q0QOqGLIsB5t6fq%2Be&X-Amz-Signature=916f4d18895de16b456394337de6b21d1b4181d610929f267cbb9a91a16ec59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
