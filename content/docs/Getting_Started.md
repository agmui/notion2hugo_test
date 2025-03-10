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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTE2EC3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFl7D1UDLRYZf1NIaMYRH7DRu4KmiDxFFdj2AabH0KTMAiAYkeXuiqYFyb5JYQd1TpGLba8U4zUlrvm9nLci0IMFVCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLnr06NYhKl23y4OsKtwDBHa%2FKZQLptrcdnXizCnEdXHPTS167lLjTvxxwhU5oH4G5w3kejMl6aAqD3yup2Ru%2Bkvu1q8PiGFsktjxgqo6j8VBmc5hWDccETyuI%2BQ9UkSEN%2FA7ou%2FkuyYkF%2FVFtd%2Bo2%2BQ3avZPeRGxdaVFJFxgRjrkq4PPvorYfMmrFQ3XFh8NAftBq62m5ih2n7sIryk3spCDCmQJIwR6dY%2FflSHGxzYFvqvjuMv%2B9TQiLAKRwq287fH4ixJJQD6yj3ieGSBVrAMmXd67QwxgCru2Pnv7L79UNHWN4DDFpKXRa2bXQ0eYILsFDu6f8pGDMItdNLnfuV0We%2Ftj7b6TrqoS6vX4QC2Vz7oLxf%2F5R2O959wYpH%2B%2BbtQD2c3fwOSMbhPHWm5%2F3dn6Lthiq7ovg%2BHiifSXxuO8R0fsIyr03HWIZ3zEh7yClmhTg%2BQy3yFK8e%2BVw0BuAr6LzCs8Iz35s%2FwqvghAa4VjkAGYATYwInuxaWb4sBDTU1jbef%2FiUSpnQwDAJMKYDs1DjQSy7S0tAy0rnbwDw%2FR6b%2Bv3znrqsYRG6KUEZYgR%2BdY6hH0f06Wa3lKuoQaeozrFDBVi0ExBG%2BN8qqPqO%2B%2FwE98AI%2FIV82TYo2OTZZt7loowCJjvOa%2FxyPsw%2FYu9vgY6pgEhtb1I4ekH4sea1RsWDWxjttQx417UG85DKE%2FN5qv6LdQZIaS60GeTF3zghTJBAn06V5nmrI4wKuNSyAUzzScWlx4%2B9PPlJdTyOZGt%2Bjx3dMCX6%2F3F7FoCobu1EPVfk1uA7C%2BTJ%2FnPOlFX69nN9%2FEdPt3qikwA%2FGHYN2rZ5D8xF9veILFj%2ByPw6BpUnl2dfJ2lhNVAOrTSfcTMbyzx1aoW%2BFaCK05U&X-Amz-Signature=31c6f542147049596cc3861d10e5a8f043edaefe65e4ebe4bffaee3304fe6b34&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTE2EC3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFl7D1UDLRYZf1NIaMYRH7DRu4KmiDxFFdj2AabH0KTMAiAYkeXuiqYFyb5JYQd1TpGLba8U4zUlrvm9nLci0IMFVCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLnr06NYhKl23y4OsKtwDBHa%2FKZQLptrcdnXizCnEdXHPTS167lLjTvxxwhU5oH4G5w3kejMl6aAqD3yup2Ru%2Bkvu1q8PiGFsktjxgqo6j8VBmc5hWDccETyuI%2BQ9UkSEN%2FA7ou%2FkuyYkF%2FVFtd%2Bo2%2BQ3avZPeRGxdaVFJFxgRjrkq4PPvorYfMmrFQ3XFh8NAftBq62m5ih2n7sIryk3spCDCmQJIwR6dY%2FflSHGxzYFvqvjuMv%2B9TQiLAKRwq287fH4ixJJQD6yj3ieGSBVrAMmXd67QwxgCru2Pnv7L79UNHWN4DDFpKXRa2bXQ0eYILsFDu6f8pGDMItdNLnfuV0We%2Ftj7b6TrqoS6vX4QC2Vz7oLxf%2F5R2O959wYpH%2B%2BbtQD2c3fwOSMbhPHWm5%2F3dn6Lthiq7ovg%2BHiifSXxuO8R0fsIyr03HWIZ3zEh7yClmhTg%2BQy3yFK8e%2BVw0BuAr6LzCs8Iz35s%2FwqvghAa4VjkAGYATYwInuxaWb4sBDTU1jbef%2FiUSpnQwDAJMKYDs1DjQSy7S0tAy0rnbwDw%2FR6b%2Bv3znrqsYRG6KUEZYgR%2BdY6hH0f06Wa3lKuoQaeozrFDBVi0ExBG%2BN8qqPqO%2B%2FwE98AI%2FIV82TYo2OTZZt7loowCJjvOa%2FxyPsw%2FYu9vgY6pgEhtb1I4ekH4sea1RsWDWxjttQx417UG85DKE%2FN5qv6LdQZIaS60GeTF3zghTJBAn06V5nmrI4wKuNSyAUzzScWlx4%2B9PPlJdTyOZGt%2Bjx3dMCX6%2F3F7FoCobu1EPVfk1uA7C%2BTJ%2FnPOlFX69nN9%2FEdPt3qikwA%2FGHYN2rZ5D8xF9veILFj%2ByPw6BpUnl2dfJ2lhNVAOrTSfcTMbyzx1aoW%2BFaCK05U&X-Amz-Signature=010f08abad2a4cbe78ffd51c98b7a2f757ae4f998b812bd365487da947a07d52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG2PHI53%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIGZQC9EMPA2KvkI5gDsup1CxPSFfOUEKZRaq6GVz3MQcAiAOPBl11hNNkZo0Q32Ihgqy6g%2FBPmI1gvWNlCQgS4gjGyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Ifbbkv5HaTbg8eaKtwD6ea8ZMK3Q4%2Bh31lACsZjTrRVR8vwXPoB5gsc9HCIKGrfHYfdv2crsnyjPVIwkLwceZOPIznli9y1AKQQfZq0Ut06%2F9u4tTh%2F0SoPBl28nGUTlKyeFJtzu3NHQe0HMFmNGN0OjIdHOOJQO5m7Uy6VbCsO%2BlnmwyYUxou%2B7gBnvuzp9LxZnm7qVaYSnfoJhET1VKGUbSWiixuCzQgfAcyDh40gFzl4ZIoUY8eQ3IqEnj3cdbN0p4flXY6WbBqnX0ids3di5kqSAFVxufwMXhIcj%2FohdKlkU0v%2FasMRx8%2B3r3vdM0%2BNSB%2FC3UAn6%2BFxX4%2FTZmJj%2BR%2BYBOxp4o%2FdRdqk08LFpwnMkLNx5VqmU7fcKLyl%2FjV76PU50yib%2Bc%2Bmt6ofAm6c%2BBCUS4NBnHsG%2B9F1oW86NWfB%2F0ydZ2nmXbI8312kLVAAHKUmCY5mDZYVm6jcAuezfnJVT9CE4Rv3QOoeEZoxcTBt5EaHyEGu1tJznMCaGGrBmfZA9FcVU%2B0oW8aQ3QsVc44b2TIvDKuMj%2BbsYPdDFqDjPkJI8ElA%2B2v%2BPtwmR0WEGn8Pm0dcNIjaKP%2FFTp%2FWCB6YEdu2JKfr98m9pB3%2FetPJ6cWVzErG0l%2FMlg7B6VDnDF4q40IRAqow%2BIu9vgY6pgHGxodPqB40OZbvyXvllD%2BudDRjn%2BehhZB%2FB2g9q3dTw3idMVz1JynSqmrmjC0yumfIbkcbvl3yRl3K%2BY8O2Rl6cRIZoaI%2BziTrdbLhYv47zR3m%2FGDGjsWWPwIixqX3YVXj09jmWsmQZ%2Btl5KPq7%2Fw8mNF%2BSprjxo5VwPteVh8Dxr%2BsmIa2iNpyMl3%2BkNevMGg4dfmKhaKERLMh8KfyLDMANhA1gewa&X-Amz-Signature=18f116c11dfd83713fe859cd5eaadf94b811027280ae04fe192638b9495708d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ENTS37%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQClMsxGFo6wLOReQ849I5l5GG%2Br94MA1X%2FsRQIjNdv4OgIgZdLJbv49yq2gOHQk5hIqay6i%2FAtD6UUQ%2ByyB19rW9KgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnKpNxyJ4opKw1FSCrcAzTRkScQlpnA%2FGWQRSDFQODGM0SKzRnqQRT%2FEXaqaoVF%2Bgt7fayagOiXRakExYO%2BW%2BNqe%2Bj%2BQzPiS%2FCFC2V17OwURpJQU%2BR04Bc%2Fpt5LdexF8AWV%2FUd7huB%2FO7KdEstn5%2FmilG%2FzIISu8Kk%2Blv4pVxDXb4HR9KlkXQvM6JRLBBNtg2HG1X4%2B3PPOyYe9tPkv96CF%2B%2BosLQAoumn7e5KuY%2BnelwW7RHuo8JsSKu7JtBWd2ytluFdf5wWgWeE00%2Fa01DPmWKGQ36DenuCGorfeWOnvvYMPdD2M8Znp8H7PsrX86s7CYNJ4ZJl743%2F0hRNOQGk04jTkPb%2FkygLp5QiH9ivRDH6X6F5csjyqya2dPpxGIf2Y76i1Y%2FNYZAjMUsW4havGw7yr3PBvhcEJoEr9nVgj2KlTW%2F88UGEgGPnS6YxseyWzyEt9DB%2BBVoVzCCRnkifglf4ORyFjSib2WqKlY0xX%2BRZ9NJj%2F7uwH9SOHsBfsDJRka4MdnWFPoYFqyS5yUrHPFLV7MrG8eMHsSPLzNew%2BtHaSSRie0%2Bey291eZTQTT1CGeHZCCbY7SmNG8t5T8k%2BzfrpT31OA65YZoHWW7AwNcQFqnYJ3OpUuSx%2BiZkJSE4MLEnL3vGB1NTcVMN6Lvb4GOqUBnzPAehCQptX8UHJVBIwnxshQ9lYlfGe1HdLIG79nyazSA%2FMgjpwdg5D9RkruKZEPFdMSA9Gk%2BMPZknBqaV7bncch38sw6N%2F4%2F66PaqqSd3LDYd5bb56sE9XTiGsbba8y5SbB4Odq7KvQLp%2BinjsBodN63dBUnCTHKeiz7LENEfzSYHH2ps7LPza5cFiNh%2BCK7BqbkLwdaqw5bJLn74xCUN1oAa2j&X-Amz-Signature=c90b51445abbd99873a341b99a8f25803692a626173d0484ddb98e4aab12bdbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTE2EC3%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIFl7D1UDLRYZf1NIaMYRH7DRu4KmiDxFFdj2AabH0KTMAiAYkeXuiqYFyb5JYQd1TpGLba8U4zUlrvm9nLci0IMFVCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLnr06NYhKl23y4OsKtwDBHa%2FKZQLptrcdnXizCnEdXHPTS167lLjTvxxwhU5oH4G5w3kejMl6aAqD3yup2Ru%2Bkvu1q8PiGFsktjxgqo6j8VBmc5hWDccETyuI%2BQ9UkSEN%2FA7ou%2FkuyYkF%2FVFtd%2Bo2%2BQ3avZPeRGxdaVFJFxgRjrkq4PPvorYfMmrFQ3XFh8NAftBq62m5ih2n7sIryk3spCDCmQJIwR6dY%2FflSHGxzYFvqvjuMv%2B9TQiLAKRwq287fH4ixJJQD6yj3ieGSBVrAMmXd67QwxgCru2Pnv7L79UNHWN4DDFpKXRa2bXQ0eYILsFDu6f8pGDMItdNLnfuV0We%2Ftj7b6TrqoS6vX4QC2Vz7oLxf%2F5R2O959wYpH%2B%2BbtQD2c3fwOSMbhPHWm5%2F3dn6Lthiq7ovg%2BHiifSXxuO8R0fsIyr03HWIZ3zEh7yClmhTg%2BQy3yFK8e%2BVw0BuAr6LzCs8Iz35s%2FwqvghAa4VjkAGYATYwInuxaWb4sBDTU1jbef%2FiUSpnQwDAJMKYDs1DjQSy7S0tAy0rnbwDw%2FR6b%2Bv3znrqsYRG6KUEZYgR%2BdY6hH0f06Wa3lKuoQaeozrFDBVi0ExBG%2BN8qqPqO%2B%2FwE98AI%2FIV82TYo2OTZZt7loowCJjvOa%2FxyPsw%2FYu9vgY6pgEhtb1I4ekH4sea1RsWDWxjttQx417UG85DKE%2FN5qv6LdQZIaS60GeTF3zghTJBAn06V5nmrI4wKuNSyAUzzScWlx4%2B9PPlJdTyOZGt%2Bjx3dMCX6%2F3F7FoCobu1EPVfk1uA7C%2BTJ%2FnPOlFX69nN9%2FEdPt3qikwA%2FGHYN2rZ5D8xF9veILFj%2ByPw6BpUnl2dfJ2lhNVAOrTSfcTMbyzx1aoW%2BFaCK05U&X-Amz-Signature=00a83ca77bcf11bf0eeba08bf0bb085645e98e3724c9074cf78b335cf9f4fc50&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
