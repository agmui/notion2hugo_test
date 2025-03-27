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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7HRR2H%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUZDFtToTBR0bJio9%2F9wb%2FqBmUid1ZOxrcZ7jc6jq28AiEA3r%2FJWUTIs%2Frg%2BoppV2lol%2BDXOh8ku9kSdrVps2j0Pqsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMkmHvr8b5qEw%2BhCJSrcA0iRujKVR4%2Fd0NcScSrAfsy7gr5TTIcpFyoVU7hA7GCNq8HskPt%2FCl%2FjJ3yCS%2F82oZ%2F4muOH3qgowb20ideVMn%2BX2PV2EEFIu%2FH7i%2BxjP%2FkHkgrSnZ9j6bWX42ck2s5DsAM1Ensk%2BFAw3satflGpQYqI%2BlBtW%2BZAWin4pAOtmx4E7gKizCv%2BM%2BqxlF8wP7QIyffnOuS2bX1SbQpZ3rgGrq7zI0SmKXX%2B0Bqjslskuz7nB845Cq6ypug%2BXj%2F1fNaiXYSKF8IUtw%2BYXXtBRFczboWP31SIoBIXUDwvoHLT4wTC1cPCwKzywrTzzolmc%2FL2NioOl54uungbweN%2BrpXOWRBgL6CdRlsD7klE7MA9lQvTdxKqTc8iYgaf79qsUvN6ywhbUBe6Ogz0xr4CWHG0eyQ4e6xJ7KP0oIRJ1fJd3%2FMUQnzESbIPgxDUwfPkNYdBjWzvByqcklcGEFsW6Kqfwo8V7gStRZvJQFaAUPdEoBZwICIwu%2BKf8zw6Uz2mLj5LS62trcScbq1r1%2Frv3Od2P1XaiKLx39TStJq3DyOPzswV1QCrArKRzOFsOggq8%2F%2FsaLr5kpyBX722ftHIp%2FidVaB2grxHe6ZytYakWAaDW%2F5a1%2BDv6kYdJFkPqnYbMP%2Bwlb8GOqUBZ6qm85kLMrpkOBGCyKF9ikF71ur0o0Y3aoNK2RbQdB%2BRDRA5RKCAI1RdtZVb%2BPcytk%2FayUkwKnSfiXycfPYtdKpNUIdSSRhduBRmLNpkudxfWSlLeYbhVymlEln04BY3NAohTdP%2B8daUzTJ5bfr0M2jZYWRga1jPaDZKmZUOZvsGEOF%2BT6JSNjSOKqq%2BSU26l%2B5YfPk1bf5M5o2%2FigXQGiaBBYNS&X-Amz-Signature=3a949c881063b9c9009d453982bfa13a0b813f27f6817664dbd093a8e1d381a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7HRR2H%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUZDFtToTBR0bJio9%2F9wb%2FqBmUid1ZOxrcZ7jc6jq28AiEA3r%2FJWUTIs%2Frg%2BoppV2lol%2BDXOh8ku9kSdrVps2j0Pqsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMkmHvr8b5qEw%2BhCJSrcA0iRujKVR4%2Fd0NcScSrAfsy7gr5TTIcpFyoVU7hA7GCNq8HskPt%2FCl%2FjJ3yCS%2F82oZ%2F4muOH3qgowb20ideVMn%2BX2PV2EEFIu%2FH7i%2BxjP%2FkHkgrSnZ9j6bWX42ck2s5DsAM1Ensk%2BFAw3satflGpQYqI%2BlBtW%2BZAWin4pAOtmx4E7gKizCv%2BM%2BqxlF8wP7QIyffnOuS2bX1SbQpZ3rgGrq7zI0SmKXX%2B0Bqjslskuz7nB845Cq6ypug%2BXj%2F1fNaiXYSKF8IUtw%2BYXXtBRFczboWP31SIoBIXUDwvoHLT4wTC1cPCwKzywrTzzolmc%2FL2NioOl54uungbweN%2BrpXOWRBgL6CdRlsD7klE7MA9lQvTdxKqTc8iYgaf79qsUvN6ywhbUBe6Ogz0xr4CWHG0eyQ4e6xJ7KP0oIRJ1fJd3%2FMUQnzESbIPgxDUwfPkNYdBjWzvByqcklcGEFsW6Kqfwo8V7gStRZvJQFaAUPdEoBZwICIwu%2BKf8zw6Uz2mLj5LS62trcScbq1r1%2Frv3Od2P1XaiKLx39TStJq3DyOPzswV1QCrArKRzOFsOggq8%2F%2FsaLr5kpyBX722ftHIp%2FidVaB2grxHe6ZytYakWAaDW%2F5a1%2BDv6kYdJFkPqnYbMP%2Bwlb8GOqUBZ6qm85kLMrpkOBGCyKF9ikF71ur0o0Y3aoNK2RbQdB%2BRDRA5RKCAI1RdtZVb%2BPcytk%2FayUkwKnSfiXycfPYtdKpNUIdSSRhduBRmLNpkudxfWSlLeYbhVymlEln04BY3NAohTdP%2B8daUzTJ5bfr0M2jZYWRga1jPaDZKmZUOZvsGEOF%2BT6JSNjSOKqq%2BSU26l%2B5YfPk1bf5M5o2%2FigXQGiaBBYNS&X-Amz-Signature=4ad0d3abe1ff507442abcd83d25b81fcd21142ba0f958558d2f86af1ae41ad01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHX5ZNJ3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXahBS3wy%2FwtiwqlMhpDiyKNHzYflL3sFJ0ygwkG9LRAiA33ltvXZC%2BJbDUj2LneFWnI%2FaYJZienNsAUR2xScpFMSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM3f0pRbOY5aTZ7Y4PKtwD7E%2FICIEeaDlDN%2FsZMZb6tzMJf6MxahMKCCr4TP9UHpZ3jG8am%2Fs1fX6FdIJvwzqT5WkctH6uyGf6SJrVX0DJ6J29gYnNfjlAekIaRSijjP6p4dYIQwOEBF0d93tls%2By9hJ%2BVl8acfSe2ppGmOBjDzRL78bxgC%2BbM4EGSwA6Cpp9P5Lp%2Bo0QIwPp0FPtrI182S0IeZ2EwEdsCebGje4bqjpjW9ofbLOvcuv0jeZHmATGTx7KvQDw%2Bnd4%2FQWaUlAVZVZdcyRRJTeLECMIZvxkfUJj3HWAz5zbMAzwwzLz44ykJguasNy5%2Fcz3WdoLOxqZvNkOequSQ%2BSS3zfVWWNn7JiTUvqFdrifVVE69%2BdDStD9YXVtJKj3q9GcH%2BanoZG24L%2BZKfnonblg41on8lwzRP91b4yjnXE8KMbl%2BYXJJK7p5Gw6DCjlwxgW7G5vx%2B2KfxM8N3BUDybdeyAHFDjfEjpQQTZu%2BBRrTg5xcdAMatgmRD2VnN0cz9MHx2vBVjg1%2FlIsiAC0SgjqFqdmFDRAmpGyFyri3B6LuYq2dVnR29sEBHwu9vqvzCYgZukRpjfmgpItwBe%2B7SUYQRQopIKwr%2BNRTkyasCGDTlMUrEQyAX6KRbumJusIyG4dZbGUw%2BbCVvwY6pgGesbhskfubEu0EkweMtix5taAXst%2BTVPc5vX4GSFyQ%2BVJsujhtSrluWRfnh7FhwLbxuB3pAH2ul01J0ManOchP7nDuQ%2F4uJGGTv56NHfKbHLboPLHXsbNMpkspOrLVNMNONxR%2BxgHC8NbDKy5W8qqJMNUD6fAf2q8iGb%2BUQA%2B%2Bg0WfQ57RvaTxXsB3%2FiWhopf%2BQkWRRH6gIv8L3827XraRWIlMW7rq&X-Amz-Signature=b81990a3e7b97277a6c1e53491b4180c6a0e10ece14bbe9bac18e6ef187f706f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NDMCDO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJf%2F2btzsIpCiH%2BptW3QWWp%2FAGKFp5aoujGUB5g8ALKAiEA1DY3X%2Bz2UZXOndbB7AaCadnMMKPUncqXztg1UDNhxkgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAWjtAjKj8XYEKOW9SrcAyyO4KRVBcIpC3PkbCB0J78TGFhLcssMb3f0UA8LMkzvMMVi4O4UaEf4Kbpgf5NGbpzSISDLiVKithRr9jN0flAN8Ng4rE8ZoJkgJdgwNY7TefwnWv6syfG0lqhXp3eJqLzWu6CNYbfCnn0z%2FrGrJp3PZrldRyeLgQf5CCZCPooIfOucn%2Fj4MTGI7ajrR67ZrvWc8xPTBKSVVMvTT7BvB3Rd7v%2FHMGXNuoK9vPJajyDBrQIadBJLEe%2B%2Fe5HsLOGDB6ZP9kwoQtEjoI1lLbt9eMi3wI93mkMJcDv84MnccL1OhtzDkLxdE0wi5w7%2FgrHF6AShVAeiBifTWL5OGk3lmEHXRkUd3GPHvR5RAIBI0Lzmw98R8i4QtQTdtx8a9pVNmEaRC3DSb963fsTIB8Eg5%2Fn46jQj9Yx%2BsFR%2Bow5AC3IOH%2FTh0AGMc7JvFxF9xMcasp5hlNCY5dXlpa4ss6U6eA3uVZ9w1BYazscs%2FXK%2FTrgHKAoTxoiS6aD%2Bb0VjiuOBnqn0gDJgkX3biSAxB1NtQaYRd9WwFpsBPDWBMJuyoh0heg3KjRHOM%2FcDuU9vqr3Iep1lxk%2F12qPVDzaX%2FU00iFLfm81w%2FWpJcpumr%2BGyDYrH2j7bYqIVJwDZ1JpgMIuylb8GOqUBtjTwmotaQRoXumxEcOsclw431qTku6c5BPflnn%2BXtMzSItgGpUnAbg%2BGDuSJ8D8o%2Fsg%2BG514CdzK8jNyachtGgNhzC6UC8YK0O8t3tbsqYRDFqflFKmcjcDcmSucrrxTmLHL1sUwCrRh9jC3DloNPzcrToO2zA12bLfgIjXttaEtwtFuZAoprCqfvdibA%2BilCqyxvUF0puez4k%2BaJ8Wk6msnthmR&X-Amz-Signature=be11c710ad34c88a48799d1767885fbbd901cf5c093a80b4a414af4c91f7e736&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7HRR2H%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUZDFtToTBR0bJio9%2F9wb%2FqBmUid1ZOxrcZ7jc6jq28AiEA3r%2FJWUTIs%2Frg%2BoppV2lol%2BDXOh8ku9kSdrVps2j0Pqsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMkmHvr8b5qEw%2BhCJSrcA0iRujKVR4%2Fd0NcScSrAfsy7gr5TTIcpFyoVU7hA7GCNq8HskPt%2FCl%2FjJ3yCS%2F82oZ%2F4muOH3qgowb20ideVMn%2BX2PV2EEFIu%2FH7i%2BxjP%2FkHkgrSnZ9j6bWX42ck2s5DsAM1Ensk%2BFAw3satflGpQYqI%2BlBtW%2BZAWin4pAOtmx4E7gKizCv%2BM%2BqxlF8wP7QIyffnOuS2bX1SbQpZ3rgGrq7zI0SmKXX%2B0Bqjslskuz7nB845Cq6ypug%2BXj%2F1fNaiXYSKF8IUtw%2BYXXtBRFczboWP31SIoBIXUDwvoHLT4wTC1cPCwKzywrTzzolmc%2FL2NioOl54uungbweN%2BrpXOWRBgL6CdRlsD7klE7MA9lQvTdxKqTc8iYgaf79qsUvN6ywhbUBe6Ogz0xr4CWHG0eyQ4e6xJ7KP0oIRJ1fJd3%2FMUQnzESbIPgxDUwfPkNYdBjWzvByqcklcGEFsW6Kqfwo8V7gStRZvJQFaAUPdEoBZwICIwu%2BKf8zw6Uz2mLj5LS62trcScbq1r1%2Frv3Od2P1XaiKLx39TStJq3DyOPzswV1QCrArKRzOFsOggq8%2F%2FsaLr5kpyBX722ftHIp%2FidVaB2grxHe6ZytYakWAaDW%2F5a1%2BDv6kYdJFkPqnYbMP%2Bwlb8GOqUBZ6qm85kLMrpkOBGCyKF9ikF71ur0o0Y3aoNK2RbQdB%2BRDRA5RKCAI1RdtZVb%2BPcytk%2FayUkwKnSfiXycfPYtdKpNUIdSSRhduBRmLNpkudxfWSlLeYbhVymlEln04BY3NAohTdP%2B8daUzTJ5bfr0M2jZYWRga1jPaDZKmZUOZvsGEOF%2BT6JSNjSOKqq%2BSU26l%2B5YfPk1bf5M5o2%2FigXQGiaBBYNS&X-Amz-Signature=bba7f75d7e825306eca9053f976e83c49f2f99c6562c84d921cb6a560945c8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
