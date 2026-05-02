---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O42GQVR%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFKIU4Pmm%2BSzDHn6nMcfRKyIUy%2BSJkVr7TgTJqZ4tq5WAiEA9HOn9hJY8g%2Fpi%2FqhszZiSgt8ltlQ2HlxZkxCfdISD%2Fwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOyleb%2FUO6%2B4d%2FTPFSrcA1u%2BFHv81MSeEuAuIa%2BRECETYMAIIpnPsF98bw4juZf7l7e03N44Mrvmro%2BxKw06A4n9TPTcspV69bj9AGcspNYlZjYS57TlrAPoex0YGkw8Vqg18m7h9Vy7Wrp%2BkAyMMjrAIR%2FMNzDpRPjvg4ANTmkLP2X79LAGgcwDrm3N4T%2Bk4hmRXszMCsN%2BdgJMIssYrG3IYxuv0dd5o1p3EEcADI8ExeIq5mom1BVkjx1%2FMDiOtcn89OcpcRDUlQt4mNGrRBQhDN2RM05kZNaSsve17bra5hUi2qlNCCuKa%2FGydAv5JVzDBzqITWb9GggDv15%2FewFhGrLIH3IGlUYRRyVET1zfSABXp4FD1VcxLvdaZzev5mMGWcD3Y38ujAwOH10OOflmjjZ5zjiDEJOa4O6%2BG3ZEqawg14VDYksh6b5QQ9Y5pCkQvrKysganLY%2B64CRgeJeD8yBuloZBRDczEJMKJuwyYINT4Mbd3kvkdjlI9ZmSOcfqaaCIkFFdGa703dIqv8xu73EXu7y7UuNolxD7rlE7nb4YGbLwmWadg%2FQP6t9tvUP0vNItoZ%2FXl%2B9k7krt6BAbjl7vejA3ivjvPcPz2njHZur83PuOKaYZirXvmekpGuS6K8SZBkIzfPo1ML%2Bo1c8GOqUBAz45BGt7PxHGxeXUMZJMTuNVVkFDEVJvJOlcvglVtztYn2nA4SAeugvKTSWO9FVOtkwhfCD2KmgY5MvONSPMH5I4GyiDiFi0Rq%2B1uxrSGoPPvcj8hxB3I3hZzRhBCHmdpnnBveZspp%2BMi80%2Bmw132KvqxZCnLQRRMue3JMftzAMlfpi%2BXE1PrwnKE7h1453etnNzUhdd%2Feps6MxyTSvSYY6Orjjg&X-Amz-Signature=0426925bb2d865858cd83a5ec280dc90638aaefc6783fda1233618ece4d02a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O42GQVR%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFKIU4Pmm%2BSzDHn6nMcfRKyIUy%2BSJkVr7TgTJqZ4tq5WAiEA9HOn9hJY8g%2Fpi%2FqhszZiSgt8ltlQ2HlxZkxCfdISD%2Fwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOyleb%2FUO6%2B4d%2FTPFSrcA1u%2BFHv81MSeEuAuIa%2BRECETYMAIIpnPsF98bw4juZf7l7e03N44Mrvmro%2BxKw06A4n9TPTcspV69bj9AGcspNYlZjYS57TlrAPoex0YGkw8Vqg18m7h9Vy7Wrp%2BkAyMMjrAIR%2FMNzDpRPjvg4ANTmkLP2X79LAGgcwDrm3N4T%2Bk4hmRXszMCsN%2BdgJMIssYrG3IYxuv0dd5o1p3EEcADI8ExeIq5mom1BVkjx1%2FMDiOtcn89OcpcRDUlQt4mNGrRBQhDN2RM05kZNaSsve17bra5hUi2qlNCCuKa%2FGydAv5JVzDBzqITWb9GggDv15%2FewFhGrLIH3IGlUYRRyVET1zfSABXp4FD1VcxLvdaZzev5mMGWcD3Y38ujAwOH10OOflmjjZ5zjiDEJOa4O6%2BG3ZEqawg14VDYksh6b5QQ9Y5pCkQvrKysganLY%2B64CRgeJeD8yBuloZBRDczEJMKJuwyYINT4Mbd3kvkdjlI9ZmSOcfqaaCIkFFdGa703dIqv8xu73EXu7y7UuNolxD7rlE7nb4YGbLwmWadg%2FQP6t9tvUP0vNItoZ%2FXl%2B9k7krt6BAbjl7vejA3ivjvPcPz2njHZur83PuOKaYZirXvmekpGuS6K8SZBkIzfPo1ML%2Bo1c8GOqUBAz45BGt7PxHGxeXUMZJMTuNVVkFDEVJvJOlcvglVtztYn2nA4SAeugvKTSWO9FVOtkwhfCD2KmgY5MvONSPMH5I4GyiDiFi0Rq%2B1uxrSGoPPvcj8hxB3I3hZzRhBCHmdpnnBveZspp%2BMi80%2Bmw132KvqxZCnLQRRMue3JMftzAMlfpi%2BXE1PrwnKE7h1453etnNzUhdd%2Feps6MxyTSvSYY6Orjjg&X-Amz-Signature=566b3b1f3375713648e2ec0a482e4ea8737685bf88cbf7e2154c7ed4500ce0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O42GQVR%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFKIU4Pmm%2BSzDHn6nMcfRKyIUy%2BSJkVr7TgTJqZ4tq5WAiEA9HOn9hJY8g%2Fpi%2FqhszZiSgt8ltlQ2HlxZkxCfdISD%2Fwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOyleb%2FUO6%2B4d%2FTPFSrcA1u%2BFHv81MSeEuAuIa%2BRECETYMAIIpnPsF98bw4juZf7l7e03N44Mrvmro%2BxKw06A4n9TPTcspV69bj9AGcspNYlZjYS57TlrAPoex0YGkw8Vqg18m7h9Vy7Wrp%2BkAyMMjrAIR%2FMNzDpRPjvg4ANTmkLP2X79LAGgcwDrm3N4T%2Bk4hmRXszMCsN%2BdgJMIssYrG3IYxuv0dd5o1p3EEcADI8ExeIq5mom1BVkjx1%2FMDiOtcn89OcpcRDUlQt4mNGrRBQhDN2RM05kZNaSsve17bra5hUi2qlNCCuKa%2FGydAv5JVzDBzqITWb9GggDv15%2FewFhGrLIH3IGlUYRRyVET1zfSABXp4FD1VcxLvdaZzev5mMGWcD3Y38ujAwOH10OOflmjjZ5zjiDEJOa4O6%2BG3ZEqawg14VDYksh6b5QQ9Y5pCkQvrKysganLY%2B64CRgeJeD8yBuloZBRDczEJMKJuwyYINT4Mbd3kvkdjlI9ZmSOcfqaaCIkFFdGa703dIqv8xu73EXu7y7UuNolxD7rlE7nb4YGbLwmWadg%2FQP6t9tvUP0vNItoZ%2FXl%2B9k7krt6BAbjl7vejA3ivjvPcPz2njHZur83PuOKaYZirXvmekpGuS6K8SZBkIzfPo1ML%2Bo1c8GOqUBAz45BGt7PxHGxeXUMZJMTuNVVkFDEVJvJOlcvglVtztYn2nA4SAeugvKTSWO9FVOtkwhfCD2KmgY5MvONSPMH5I4GyiDiFi0Rq%2B1uxrSGoPPvcj8hxB3I3hZzRhBCHmdpnnBveZspp%2BMi80%2Bmw132KvqxZCnLQRRMue3JMftzAMlfpi%2BXE1PrwnKE7h1453etnNzUhdd%2Feps6MxyTSvSYY6Orjjg&X-Amz-Signature=70e87d9f345f0fa8fd38cfaca37df180c60d0c44ae4c1f353ae4420bc1641872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEBTOGOY%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIHre%2FFGdBPQVdqInx2j55yMmszu95bo2Jx%2FuDb%2FcuSQiAiEAgvoLVHn5q1iwl0FeiAXndff7q5mEZk2g7kMO%2F8zbzlUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHDBR8oHZm27ShPK1CrcA6pgnt%2FISlHS3JRwPI69nGnzUUGRUfdIvLTOrl4r11SxpRoU7TGMUTxUTdW59R3XZ6%2FdL1VTtjwyUDORPLisNopTgW7l6eAktdKDDQJfUC%2FzDZNWMHhsqXnUlEYPa%2BqWiPgsu%2BMzTTBHFwohEK6oT1TUYZ4j7rcKJYzBpcwsd52Eu%2BYGgjs%2BoNgY1ddYG9VdmaNrYlDAc3317%2Byd65r8nctK0zVxN3GUOAxJFuzHiGFsPoKF9zBRMSQibikoVGADOidnesRg3ATZU6pMaUjZKXD2JqGlf3FFt55SRrfCjDNREkKO%2F%2FK3RFgxin5hTNf9WQB48XYM5MDKHhqpWSGbkSnxPqGT182xnuOIvuQ0F6At9TxWYOjCnN5YiamuUGonnfoFlWcBtfXX6SBp6%2BhwXrSEMJOqwxstUEAkLtVDwXZm%2BrGTeBRxaHQa6xQlpisfAyTlll19OmXGp26rpi0fHQCxeIDPeW2AkB21kGujUZUmljiY2MCU6za%2FZ5vBAtA9eU3%2FpziBbEs0wHUHMFs587hyy2lRSD1rU%2F3pcCvMTXZOGfhze1Pyg5860%2FVswgR%2FiGEctvMUCHNo6tVs6wCXr4snB%2BEQi0uLrf28J7lvJjH6Z1VXUUyyTyFvPeWSMKXJ1c8GOqUBrLA0PrrU9jDo3U7ZGd6X8C2q178AVxXzbxo0rzdOJnwMdU6DRxShxF9GYZIBp%2F3QC8AJVroVO5zV6QWV%2FHL0gT%2BqA%2F%2FwiiutBYFVsFa5dssMGCv3GCkDdoBZ3AFaxrzlZLo%2Fj7TXUnwT%2BhyR6wt0tHW4EIho6XMWR4y0tBTz3AE0ICxVnIyZeyEeHwVl9BOlyTUkl34TEcVCfcbBNKOuzIPs%2FvIf&X-Amz-Signature=f0656721e5fa9847c06d63436b540e264c06e0bccaccd221289366fb29f83d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3YRYCK%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQD%2FknfYdZvGBVImts2jMbFoNtNxJeEYpVM2HPYLqXceHgIgZI0DQx7ymM%2BPBOjWnHc0W4ImkfoY4etLivj96k4%2F094q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDP9phBtZYaWcQn6jJSrcA2777oIjOUTMwGqCKE%2FkMEtwLAI2fHiRG9k9o%2BMM2uFCvbPAPaAkFhoz0qm5dPJVZ9xFrke5skWgk%2B7hHwYQptzl2lok5OSH9QcIXYRw9WiwUBwpIokDLHHDduewa0oPDQd1i%2BK%2FGJ0sCxMrSvawudCGssbVdBWXquqe%2BVZcWeNYJicZEFaP0x%2FcFlR7AdgMD6bZO%2BHclwxuqTUOI2ldpQF5NsoOzkkNBIPflatPoGF6nslRlaMVfEeJlasv6tM%2BQTkxExlfFLfPAPqPOGObx2oCqBaIbNkxU%2BzspFWJAaG61q0FGKKYwD313WR0bqBZaFTIcXo3elZAr8H6tlsxalNwaXAEQAUwTmi%2B%2Fq%2BLKZvPVtDHtKwvPePl%2BtNfCte3D%2BuLwzSZ6srLyFIfgTF6XYFXMJj0Qf3EYwIaQl09KmNURlBViKuGm5ic8gfnPgoyUAUUfkkwK%2BfC7yBmfKEw9wqHZZWNUzo62HcgrLvIkTWuSdC8sbwXjrx2UakKMAQ%2FXA5KKTNU3EW6%2BzZ2eOYoiFx2NnndZ2bCVJJscoZibSbkAj8SUXK8DtZhEjMx4YuCDcAybQOf%2BrI9j6H52t%2BXOE3eMChIQXTUErrJuy4tNXRmZ%2B5ZpsfMAWDBIaSlMO3J1c8GOqUBlWG9V19LuseU%2F1Ys5Pk6cpsweAZ5xyigD%2Be0TnzxJxl457g6N1aAAxd6keGkj7wNWsA5T3E1%2FhjkEkCP0dcnTX6yZlQ504S9zOoTXUBEEHXWHm9%2BvPuf%2Bo6XzTRpVDCVgtggqgWKYC4by%2B8dFO8oB1DXJu6H1eKmHK787XWFS381%2Fs96I6X6vpaGuXYQUXeCovwyUM0zFVa8Scdk54doPT1z4MAw&X-Amz-Signature=eb16c8b36adf59c4deec8cdb1cda8b0b9039d4635a17737037057d7314c94e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O42GQVR%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFKIU4Pmm%2BSzDHn6nMcfRKyIUy%2BSJkVr7TgTJqZ4tq5WAiEA9HOn9hJY8g%2Fpi%2FqhszZiSgt8ltlQ2HlxZkxCfdISD%2Fwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOyleb%2FUO6%2B4d%2FTPFSrcA1u%2BFHv81MSeEuAuIa%2BRECETYMAIIpnPsF98bw4juZf7l7e03N44Mrvmro%2BxKw06A4n9TPTcspV69bj9AGcspNYlZjYS57TlrAPoex0YGkw8Vqg18m7h9Vy7Wrp%2BkAyMMjrAIR%2FMNzDpRPjvg4ANTmkLP2X79LAGgcwDrm3N4T%2Bk4hmRXszMCsN%2BdgJMIssYrG3IYxuv0dd5o1p3EEcADI8ExeIq5mom1BVkjx1%2FMDiOtcn89OcpcRDUlQt4mNGrRBQhDN2RM05kZNaSsve17bra5hUi2qlNCCuKa%2FGydAv5JVzDBzqITWb9GggDv15%2FewFhGrLIH3IGlUYRRyVET1zfSABXp4FD1VcxLvdaZzev5mMGWcD3Y38ujAwOH10OOflmjjZ5zjiDEJOa4O6%2BG3ZEqawg14VDYksh6b5QQ9Y5pCkQvrKysganLY%2B64CRgeJeD8yBuloZBRDczEJMKJuwyYINT4Mbd3kvkdjlI9ZmSOcfqaaCIkFFdGa703dIqv8xu73EXu7y7UuNolxD7rlE7nb4YGbLwmWadg%2FQP6t9tvUP0vNItoZ%2FXl%2B9k7krt6BAbjl7vejA3ivjvPcPz2njHZur83PuOKaYZirXvmekpGuS6K8SZBkIzfPo1ML%2Bo1c8GOqUBAz45BGt7PxHGxeXUMZJMTuNVVkFDEVJvJOlcvglVtztYn2nA4SAeugvKTSWO9FVOtkwhfCD2KmgY5MvONSPMH5I4GyiDiFi0Rq%2B1uxrSGoPPvcj8hxB3I3hZzRhBCHmdpnnBveZspp%2BMi80%2Bmw132KvqxZCnLQRRMue3JMftzAMlfpi%2BXE1PrwnKE7h1453etnNzUhdd%2Feps6MxyTSvSYY6Orjjg&X-Amz-Signature=209b1db5db7e59b89c0fffe2a514a0cab9571311b5d5893578477230a399f396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
