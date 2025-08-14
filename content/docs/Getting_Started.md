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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBOH6EP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuPO5b1isDk9bFw9FPciv0d014T4psXTU7u9i4ApSALAiEA3PFSITc%2BNiSS59tzrFn0CGzAa8sX8e7kC0ibMUVri7wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGYn%2FIqqqUExwt5LYircA4ZhBB%2BhHtfUM1svxLSmMxo2LN2%2BCOyc47RcxnAvf6y2u2UNB033i829%2Bebr4ZBcXDJeSs8EWqIpLHCDQwgWlAiiKV9ZGglePpz5XtcSUZ985Y2m1gTe%2FAuw2HkpsEHR7ajOeDGJxofUu2DQK08dIujFbQA0YmF0w2iBc8oajXzQcVSsaUseu5RS9kil8DguGTdPuJRakXGYUgxZohPfM4vMtJ4VxkvUni8eDLD0BTq%2FwO9VK754Tdo6B98Nm23hUrleic2XfxR3mSR0TPoQyM9%2BF4jV6IqRhbOxzBbrZJGQ2KLaHC0K4NJyX0mKES8bw6%2FO0goBFxhTQLtVgN7bA8WMBNgBxbTJZJyTCv5%2FRjiufXkGcSA73%2FMxtPWySLaNdRgfDuyoro77gKYhvjOyu4WzCqMf4gRgwx9pFH4G9cYazQrnGjXo8Mu8OBmtk0eDlN73Uf01zOnTwtfRsropCxi2k534%2Bxg8pA2L%2FXEgDvYe3Dlzt6j2YWmy02G0%2Bv5WENvDZ2yihnlCxLirBRiAgWfcqDxONp2y8GzGGCRehIzQ93A5ceXWUhuYn3LDo1%2FzrOC1yn2TGHTpa2wJjnBv977OnbUy6axVMHd24fSQqVYnFqfweEvmmzkaDEqvMK%2BL9cQGOqUBD4z4cgUNRzWHKyimX%2BD7txt5AMz1M4OBH7hcEWRpzNkxQJGBWqjnqr5bIhDWGfpbcIQY%2BfaDfS0%2B25R9yxKjciUyLOPw6SdG1VHdlKFfKZGrkSdCyq9%2FySGkJaG8Efxai3JNemne2bfj7SFlzokniPZ9WtNg0xvTKc7LfwuBCOCs6dQ0BG6TcuWsMoqfKhR9SLsYeoU49AJhu9CWn6LNvtzQ%2B0bc&X-Amz-Signature=427a35f8469b75d3326d013238e2cc05b25f84bb92eeb42b2b75e5756633861e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBOH6EP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuPO5b1isDk9bFw9FPciv0d014T4psXTU7u9i4ApSALAiEA3PFSITc%2BNiSS59tzrFn0CGzAa8sX8e7kC0ibMUVri7wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGYn%2FIqqqUExwt5LYircA4ZhBB%2BhHtfUM1svxLSmMxo2LN2%2BCOyc47RcxnAvf6y2u2UNB033i829%2Bebr4ZBcXDJeSs8EWqIpLHCDQwgWlAiiKV9ZGglePpz5XtcSUZ985Y2m1gTe%2FAuw2HkpsEHR7ajOeDGJxofUu2DQK08dIujFbQA0YmF0w2iBc8oajXzQcVSsaUseu5RS9kil8DguGTdPuJRakXGYUgxZohPfM4vMtJ4VxkvUni8eDLD0BTq%2FwO9VK754Tdo6B98Nm23hUrleic2XfxR3mSR0TPoQyM9%2BF4jV6IqRhbOxzBbrZJGQ2KLaHC0K4NJyX0mKES8bw6%2FO0goBFxhTQLtVgN7bA8WMBNgBxbTJZJyTCv5%2FRjiufXkGcSA73%2FMxtPWySLaNdRgfDuyoro77gKYhvjOyu4WzCqMf4gRgwx9pFH4G9cYazQrnGjXo8Mu8OBmtk0eDlN73Uf01zOnTwtfRsropCxi2k534%2Bxg8pA2L%2FXEgDvYe3Dlzt6j2YWmy02G0%2Bv5WENvDZ2yihnlCxLirBRiAgWfcqDxONp2y8GzGGCRehIzQ93A5ceXWUhuYn3LDo1%2FzrOC1yn2TGHTpa2wJjnBv977OnbUy6axVMHd24fSQqVYnFqfweEvmmzkaDEqvMK%2BL9cQGOqUBD4z4cgUNRzWHKyimX%2BD7txt5AMz1M4OBH7hcEWRpzNkxQJGBWqjnqr5bIhDWGfpbcIQY%2BfaDfS0%2B25R9yxKjciUyLOPw6SdG1VHdlKFfKZGrkSdCyq9%2FySGkJaG8Efxai3JNemne2bfj7SFlzokniPZ9WtNg0xvTKc7LfwuBCOCs6dQ0BG6TcuWsMoqfKhR9SLsYeoU49AJhu9CWn6LNvtzQ%2B0bc&X-Amz-Signature=259d8b13da2dfb978191ea3c0d6289dd31492e635134109dc79b6961cdc13f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBOH6EP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuPO5b1isDk9bFw9FPciv0d014T4psXTU7u9i4ApSALAiEA3PFSITc%2BNiSS59tzrFn0CGzAa8sX8e7kC0ibMUVri7wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGYn%2FIqqqUExwt5LYircA4ZhBB%2BhHtfUM1svxLSmMxo2LN2%2BCOyc47RcxnAvf6y2u2UNB033i829%2Bebr4ZBcXDJeSs8EWqIpLHCDQwgWlAiiKV9ZGglePpz5XtcSUZ985Y2m1gTe%2FAuw2HkpsEHR7ajOeDGJxofUu2DQK08dIujFbQA0YmF0w2iBc8oajXzQcVSsaUseu5RS9kil8DguGTdPuJRakXGYUgxZohPfM4vMtJ4VxkvUni8eDLD0BTq%2FwO9VK754Tdo6B98Nm23hUrleic2XfxR3mSR0TPoQyM9%2BF4jV6IqRhbOxzBbrZJGQ2KLaHC0K4NJyX0mKES8bw6%2FO0goBFxhTQLtVgN7bA8WMBNgBxbTJZJyTCv5%2FRjiufXkGcSA73%2FMxtPWySLaNdRgfDuyoro77gKYhvjOyu4WzCqMf4gRgwx9pFH4G9cYazQrnGjXo8Mu8OBmtk0eDlN73Uf01zOnTwtfRsropCxi2k534%2Bxg8pA2L%2FXEgDvYe3Dlzt6j2YWmy02G0%2Bv5WENvDZ2yihnlCxLirBRiAgWfcqDxONp2y8GzGGCRehIzQ93A5ceXWUhuYn3LDo1%2FzrOC1yn2TGHTpa2wJjnBv977OnbUy6axVMHd24fSQqVYnFqfweEvmmzkaDEqvMK%2BL9cQGOqUBD4z4cgUNRzWHKyimX%2BD7txt5AMz1M4OBH7hcEWRpzNkxQJGBWqjnqr5bIhDWGfpbcIQY%2BfaDfS0%2B25R9yxKjciUyLOPw6SdG1VHdlKFfKZGrkSdCyq9%2FySGkJaG8Efxai3JNemne2bfj7SFlzokniPZ9WtNg0xvTKc7LfwuBCOCs6dQ0BG6TcuWsMoqfKhR9SLsYeoU49AJhu9CWn6LNvtzQ%2B0bc&X-Amz-Signature=a00630aefa1958aad2eb0e49effccad4dead829842a340e71855a9dfe73b4f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672BC4WJL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6c9NirPAQmSqObJneOYeiAakUeA4tEl2aTqG78FbF7AiBETZDWPHI2kZDpiZwTulZLtqIc8DiK2TWD%2BauG0XfATCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMfx8prse6I3CvK1NsKtwD%2BV0uDfl%2FCRxRc899dYMJ2R%2FaEcMYkKAH16g12%2FJEjFXpIWPxt5GcmkwGJlXVpxCbqH5CIIT1c0r23nzRa%2B7nxamDwXds3GbX4%2B%2FmGpDd%2BuBABsBUlFhPJ4ee8iDZq1b3x3udTXy0Mf%2BzMkEW2%2FoKFVFmycSdvY8RCJetuvUedybalf%2FG3PBbJRjqrA5KP%2FWNIO1Bnz%2BJM2g6IdrQ9%2BvTPwiR6AaeqV%2BwtXeULl3gGCTVoTHdnZxVFn%2BB5ToXxyt5MhTQLGpF8Q%2FgMM7%2FGzGiasYT8H%2BxeeFpWJr0fJ%2FtgQ1ofyHvYngeQfjrA0%2BktzmOz9OKn68xJvIR4iqG%2FAr6DIfAOHBdhAMgsKaUaoRqItvAtbyseCsPIYUvU76zQIolHaBSIBY%2BpfDpfoWs46YkwhiImqkSIwjNYOZirrJzx7HVXXiJJoY9uARNyW5lxjcy%2FiZi952MRDg7i3JwnBg820gFmPYkSYp0UGFtFGZrXt9GmHXpgX8MBZrWyW%2BI%2F2tZ5ZatoA4qmvbG4Z6B2gocp77XJbn4kVYRdoggdPZvdLS9gS9XpjidkAF1KJc843sXoZjHdd0zpxvlh%2B4sYwS6nGGJWeZn3IfWTAE6T1zht1ONXiW3NyOz%2F9hQnDcwhYz1xAY6pgFw1%2BGRaMxr3HojwdmWq9fTAjppJqbPDKHTCkF6LwkOSwkZel9oXysGFL1AWeXYa2j%2Fz3gYzAjCUnD7egrOg2zsczNtjQbdzM1ZeVsvzAxppIphcRyUm5cwNgO%2FF8t41pWtx7rvbfwXx2ZFCAQIPHAvumvE%2FDoBPkLHYmPRX3u8yYFzlKzMuzB69dJ%2BRfS7BmP4AQguqnb3QIl2uRjHFEHNKlt4sSkw&X-Amz-Signature=a21d6ec8121739b9668cc28dcf64fcf4d25b1b28795336f9db2c93762edd7ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQ7FXRV%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl3YVShTDCTUZ9wUB8YUzPfJTqkxrPtWJMifKFK86KEQIhAOdtKuYXOxs244KHkIiaq76N%2FiOnAX18U%2B0aFh9wYf0tKv8DCDsQABoMNjM3NDIzMTgzODA1Igx98K14LcDfvHGh9xsq3ANBK5I5MeoRgHNQLHSwE8KTxI93Tsw8u39JFs1dUYOc%2FYIgX1ZOpPtQz1Vwd8C12hrQaUODbwGYizwIT4N%2BheClJO0gG5lX1L0J1MR2q089X68wCL4qzotxyRGoCRyP%2FFxzyG%2FttH05g29uVl6AeRmuHZJgeBB%2FZOiSwoE6WhKZ1ra9g0Fg4CIMRRCq4qB3RUBtlCpF105j3cL5VFCYthmTc8KM8mp04Ay%2BQWUvkKuGLDOC5RVWT%2FO90blTuisdSiF67dCx7NY2rHq7JvBMsBdYT8BI0uKTG%2BOS6V%2BU%2B%2BlDdEHRbme8DX6sSEpEPNtZVrR6vSNYMLzhlCTBB%2FKW2Omyo3ZH9yO7%2FNOTZQQj2q4%2F3tMxkoLbwvbkg1bnqhR%2BjP10P4t3oah%2Fkl9BPMEhAwMgZQSox4KaTBTHLg2ule%2BrPGXk6ApD6DaQmSFEjMV3erT5sg0nvw1hsmPSlDhBNTrB11PFZwoYKqFowGayArxJK1YaB0%2BAGG8Zwa88L4wzQVnfXb74TP8cSFn19%2BXzvk95brse2eL804PNDwh5JLFWAw5AHyt8m4UajX7KSa3VxDMmd4Qix0WrjzZ5GXs82oIblj%2FrWgrlsa1Fzb%2BX50AiozZk0m1ZmX3FDIU3bDCFjPXEBjqkAZ3hei3dThvQGTmuiY3qA0b7OLgvn9eRFGKeH7NIg7trU3eIS3MLDG3lZ8kL4BQV5GrtpM6AnmsQRbpoNrigS7ZuS6JV7Dn6d8%2FoHiczvrhw84xQaOlbymv6XtCV2cZutSSGuVUx2djoF7YIWbxTFL7s3SnugyvhpPVnSnGDg6hehpaNp7Gw9vQdjMD9iLVpJPN%2B3vPdKL5dfz35XHX%2Fjj%2FxnjdB&X-Amz-Signature=6b06282841b5a7b8d0abeb2b74bd80749852e22d1848af6b46f0b709460e9abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBOH6EP%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFuPO5b1isDk9bFw9FPciv0d014T4psXTU7u9i4ApSALAiEA3PFSITc%2BNiSS59tzrFn0CGzAa8sX8e7kC0ibMUVri7wq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDGYn%2FIqqqUExwt5LYircA4ZhBB%2BhHtfUM1svxLSmMxo2LN2%2BCOyc47RcxnAvf6y2u2UNB033i829%2Bebr4ZBcXDJeSs8EWqIpLHCDQwgWlAiiKV9ZGglePpz5XtcSUZ985Y2m1gTe%2FAuw2HkpsEHR7ajOeDGJxofUu2DQK08dIujFbQA0YmF0w2iBc8oajXzQcVSsaUseu5RS9kil8DguGTdPuJRakXGYUgxZohPfM4vMtJ4VxkvUni8eDLD0BTq%2FwO9VK754Tdo6B98Nm23hUrleic2XfxR3mSR0TPoQyM9%2BF4jV6IqRhbOxzBbrZJGQ2KLaHC0K4NJyX0mKES8bw6%2FO0goBFxhTQLtVgN7bA8WMBNgBxbTJZJyTCv5%2FRjiufXkGcSA73%2FMxtPWySLaNdRgfDuyoro77gKYhvjOyu4WzCqMf4gRgwx9pFH4G9cYazQrnGjXo8Mu8OBmtk0eDlN73Uf01zOnTwtfRsropCxi2k534%2Bxg8pA2L%2FXEgDvYe3Dlzt6j2YWmy02G0%2Bv5WENvDZ2yihnlCxLirBRiAgWfcqDxONp2y8GzGGCRehIzQ93A5ceXWUhuYn3LDo1%2FzrOC1yn2TGHTpa2wJjnBv977OnbUy6axVMHd24fSQqVYnFqfweEvmmzkaDEqvMK%2BL9cQGOqUBD4z4cgUNRzWHKyimX%2BD7txt5AMz1M4OBH7hcEWRpzNkxQJGBWqjnqr5bIhDWGfpbcIQY%2BfaDfS0%2B25R9yxKjciUyLOPw6SdG1VHdlKFfKZGrkSdCyq9%2FySGkJaG8Efxai3JNemne2bfj7SFlzokniPZ9WtNg0xvTKc7LfwuBCOCs6dQ0BG6TcuWsMoqfKhR9SLsYeoU49AJhu9CWn6LNvtzQ%2B0bc&X-Amz-Signature=14bea1d8f2e370f6e872570a6cd41c7a7a8285ca59adad802dc795c219353140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
