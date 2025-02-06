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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGDLLPI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCh%2F53YhYW8Rrn2OPUM3kNmXj%2FnFhWxptW8LBspW3z7cwIgSAJHYAtlpTCs3HAPatkIgQrNxYdlC0NhmHeq3tTtXCUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOkZHneEKM9wF2QjdSrcAy2EDuFrXxStZ%2FwZPv%2BA%2FKhxAK9CID6HcZ7CwZqAgKiJBwA0oWsylCm2L7RwrGjqqkgJbDg%2BbHb2c1rcxLf2T7IPP%2FZcfamhFDSveUIuUpMuOT4MgDxsYRM8CfyMGaO1KoEqmDtPxwZn4DX5WFiqOiJ8W5a4djYPZ80RYmzoiAVIwNT6DEwHz7pJtIjibankf8P3Y0a%2BYg8s8RbH6kwK26XVtupJt3SyWxB7VMsoeCpXTo4ya9%2FlBfVmtofE8iEQkRo1rzBhkFRCqbXXoWIvYfhIZlUZoMmZkk36dZ9Z%2FiS39%2FuzCKhjtr6nR%2Bjqby2aYobnPaF1WmMEzxOLObcugSz0JbiD4hayjvCiZKRfo%2BtEs5Zt6mVCq2hvuSCE5SuMV7q4dPBIOWwhoZL7zhv%2FvG%2FKlsSrHZy2mr3GPsX8eKQkFYBgOpdbgfN6H1DiF9dxK%2FQ30DuF82j3RzdSy7wxAL8e5qR%2B5hh9x82%2B6PgGPkYiJQmYbXTAY1mfJIpm3u0j0n70NtS%2FutTdhmXqFku86z9K7ZOwfebT0Gw6N1fJX1cvqgpwm6hhT7jf4IcVA32JxObAgXBMRf3rAIuztKvO6gIgoo0dI2Y3631LzlLypJox9C0tshIfn4cYxUnsMKedk70GOqUBf6i44inpLt02DNhWlNPwI9vworUTIYu%2FkAAVAqSBDkJCgpOXIrhwkjrh6hEcDbzpzKcZ0m727ng9IJqGEXGJO%2FfdaHy1bSJvp7Vv9nZ76mhhOZYcHWubRY29K7ZEwvLqTwiWL0P%2Bu9LyiIMt1mskN%2F%2B5cX%2FrPA8%2FBMBQF4iUOgldxXvQGIRWwgLq2e7%2BLoSo6R5QNdcyXPT%2FT09feeviPn5IZn7%2F&X-Amz-Signature=1518ad050bb7d6874732e3ae3bbc196dddc70a2c90e8269553a0c030bf554e4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGDLLPI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCh%2F53YhYW8Rrn2OPUM3kNmXj%2FnFhWxptW8LBspW3z7cwIgSAJHYAtlpTCs3HAPatkIgQrNxYdlC0NhmHeq3tTtXCUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOkZHneEKM9wF2QjdSrcAy2EDuFrXxStZ%2FwZPv%2BA%2FKhxAK9CID6HcZ7CwZqAgKiJBwA0oWsylCm2L7RwrGjqqkgJbDg%2BbHb2c1rcxLf2T7IPP%2FZcfamhFDSveUIuUpMuOT4MgDxsYRM8CfyMGaO1KoEqmDtPxwZn4DX5WFiqOiJ8W5a4djYPZ80RYmzoiAVIwNT6DEwHz7pJtIjibankf8P3Y0a%2BYg8s8RbH6kwK26XVtupJt3SyWxB7VMsoeCpXTo4ya9%2FlBfVmtofE8iEQkRo1rzBhkFRCqbXXoWIvYfhIZlUZoMmZkk36dZ9Z%2FiS39%2FuzCKhjtr6nR%2Bjqby2aYobnPaF1WmMEzxOLObcugSz0JbiD4hayjvCiZKRfo%2BtEs5Zt6mVCq2hvuSCE5SuMV7q4dPBIOWwhoZL7zhv%2FvG%2FKlsSrHZy2mr3GPsX8eKQkFYBgOpdbgfN6H1DiF9dxK%2FQ30DuF82j3RzdSy7wxAL8e5qR%2B5hh9x82%2B6PgGPkYiJQmYbXTAY1mfJIpm3u0j0n70NtS%2FutTdhmXqFku86z9K7ZOwfebT0Gw6N1fJX1cvqgpwm6hhT7jf4IcVA32JxObAgXBMRf3rAIuztKvO6gIgoo0dI2Y3631LzlLypJox9C0tshIfn4cYxUnsMKedk70GOqUBf6i44inpLt02DNhWlNPwI9vworUTIYu%2FkAAVAqSBDkJCgpOXIrhwkjrh6hEcDbzpzKcZ0m727ng9IJqGEXGJO%2FfdaHy1bSJvp7Vv9nZ76mhhOZYcHWubRY29K7ZEwvLqTwiWL0P%2Bu9LyiIMt1mskN%2F%2B5cX%2FrPA8%2FBMBQF4iUOgldxXvQGIRWwgLq2e7%2BLoSo6R5QNdcyXPT%2FT09feeviPn5IZn7%2F&X-Amz-Signature=5e2a492cc2485070bfd7804ea3e557bcddc64e2c83fd48a3538b13477a21519f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OIQ42X%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIC5KRFkDhVTnltbQ96NiUIFZG1vZSq2RmgtWM%2FkqGTCUAiEAtKl6QHdNqVboWonu55G5h%2BPBb%2BSX5wRFOeaeMReiqbYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKvpoZ6h9SZh8JdSjyrcAxD0VYFzTDGSIyhh%2BXHhLIQ3u%2F8%2BXKWZnnPbV4NKAjgpZvGtMIK2Md3%2FIZ5%2BXFpsDHImwg3UjMpty13EaxLdlc4t5Dd0A9EQAfpxifr7js8oicqQ6LDg6ZHPYHYsVyUbvdW67efxmz1B6TO0eEtZ36PT6A0RLqoLIxIxytrYEA2Ps3IhAmsgQiwZiiimddYEgaY9MmFGyGzbN6U2cQmfqFJew2buZ0P2Ad%2BrZweP3jWyfo9q60yZ8%2BKZ16lL4xDcOKLibeFDBtBvQ2XkqTfWM%2BpZKzApwVhpMcsci%2FNCtH5goBcvBzlpeFySPE%2BDRB%2BZFWEtC%2BugPzMXHQ%2Fn4hXnrnNuJfQBC%2Fuboxh5E%2BQBoIPnrhn7WSRxQvwL0MG8YD%2Bs2aOBe0LIPLM0qP9%2BpzdQGziL8811eKj8e9g6RrJCwkyAW7aYJjVWqO%2B%2BNSbAIzwps0CSbNxG786K0iY8fe4QxDMaDyW4PZajnFyCGOdZMq57xodGVikR7rvxRSldLxgTxuu9Mg9jSVStQhyaCpdpS1LEk9M7v7oHtgN%2FOsUZiPkcuTZ7Zd0tMMvomXnaYePm8CJe6SRsJkH2Qs%2BD0a1oXl8oOFLmrUoach6glsHu8EGZQ7%2Feopt5VJD20xwcMOedk70GOqUBX6Ip5z%2BQcTynP6OkzxHqMSXoisooBmC%2BETH5%2BWE%2BpWiTppfxENNpnH1g2d4JZshm4i0m7DUcvyq66ewJn%2BeHu06fu8gUsznPc1cVI7v5zn939LYyzW0h4eel2S5b0SVm8Kwtp4yq5QlhXx0opJa5M20Wj%2FIiIlI1hoEGaPUp%2FmrbwhRQlb%2BfRHVGJMS7cQUo7qqULKj5sJ5zVGJOjwycv3yp6QA2&X-Amz-Signature=54daf7454ed5aa44448a51ef4010f102b17f4855451619c9544fc2dce1cc89aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGB5BZK%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCNR7i6AD8XRb9V%2F4k9NKIzTLQsQAfleuOTm9AWtPBHrwIgQuU9eAOfhHAwxTyTaynyE%2BriP%2BPFmBdQYbknc5zgY%2FIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIEIAkP%2F9VlqkuFuOSrcA%2FtuNIUM8FsUOU%2FMIJnuNlC6grQerE9C79e75QLiHFzCb8mxMbruktjvfVk8%2FgeMQO4Uhsk66%2FIX9UErRcds0BE4P%2B56pC1bODzNieeRKqijPZmTgSyk6cdHvV7HErlHhRJ8YsASiNKtJ35WWk%2F9XjcSpQOSQYx8mZsNvxYCDi47Eh2QxPi%2BaW8C9Ldn8OTQwohtsxVVlvWFy6MrCJfKGJMPzusg1rZrzhJL6BNyehe8lI2XWbGREorLC1X5iCysrsXUk9t8CZrPxbh9Dlzn5YqvtEPTcRyAXn2MsPvUi97q2KNxTy4HXzIU3oXtm8zkZx9zVWz2mA7j1F8xqXMfApOCURQMdQHrVBjcjifsaTmdFIkW%2FUjp0GMcO82Kq7CwS6PEHOpjEQMHzy7VIjj3FXD6NmDhMFbyYuNk5JWkbGSwETH45LJE0RkhakDC2eDPiHfXM2cbi2T6QMoJ7hmPkWSbaP%2FfF%2Fp1bi5MVhq5oc8YlgHqgG08mLikwtwRkxIeFlnzxwftwDgVcYcZsYUiSkpYQbsrXWGCwsJDmxH8CuvjmHxrj54yTjh%2BDPgDmXSZ7gnveIa7YfCiSwnWw9Bq7PKkIsN2O4DULJu6Qj7nqnGmfXuWLgvqp%2FcoKJeIMJudk70GOqUB7510gt1rS4YzIjCPlGo%2FVZsfpkL8c7fkZfSTrpObBbh2%2BRe7FsyG2zjV%2B56MJxfhLZkNnmsEpMD8epxxxu5hNpex8mpgLH%2BpcMspZUiGb407UIPRE7E%2FhVWocXcP0Bp1n0LQRfmhCqt99EITk91Iry3izG53eUQsQ07FnetG3mr2u5%2B%2B6ax5ihSRPqwfQi4C9X9Rjd5q6J3xr7H1MZmOYFixReLd&X-Amz-Signature=241be64a4fa4947b102ad02cef647235d92650d4375b8b97055c6cd1ab732a24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGDLLPI%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T160731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCh%2F53YhYW8Rrn2OPUM3kNmXj%2FnFhWxptW8LBspW3z7cwIgSAJHYAtlpTCs3HAPatkIgQrNxYdlC0NhmHeq3tTtXCUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOkZHneEKM9wF2QjdSrcAy2EDuFrXxStZ%2FwZPv%2BA%2FKhxAK9CID6HcZ7CwZqAgKiJBwA0oWsylCm2L7RwrGjqqkgJbDg%2BbHb2c1rcxLf2T7IPP%2FZcfamhFDSveUIuUpMuOT4MgDxsYRM8CfyMGaO1KoEqmDtPxwZn4DX5WFiqOiJ8W5a4djYPZ80RYmzoiAVIwNT6DEwHz7pJtIjibankf8P3Y0a%2BYg8s8RbH6kwK26XVtupJt3SyWxB7VMsoeCpXTo4ya9%2FlBfVmtofE8iEQkRo1rzBhkFRCqbXXoWIvYfhIZlUZoMmZkk36dZ9Z%2FiS39%2FuzCKhjtr6nR%2Bjqby2aYobnPaF1WmMEzxOLObcugSz0JbiD4hayjvCiZKRfo%2BtEs5Zt6mVCq2hvuSCE5SuMV7q4dPBIOWwhoZL7zhv%2FvG%2FKlsSrHZy2mr3GPsX8eKQkFYBgOpdbgfN6H1DiF9dxK%2FQ30DuF82j3RzdSy7wxAL8e5qR%2B5hh9x82%2B6PgGPkYiJQmYbXTAY1mfJIpm3u0j0n70NtS%2FutTdhmXqFku86z9K7ZOwfebT0Gw6N1fJX1cvqgpwm6hhT7jf4IcVA32JxObAgXBMRf3rAIuztKvO6gIgoo0dI2Y3631LzlLypJox9C0tshIfn4cYxUnsMKedk70GOqUBf6i44inpLt02DNhWlNPwI9vworUTIYu%2FkAAVAqSBDkJCgpOXIrhwkjrh6hEcDbzpzKcZ0m727ng9IJqGEXGJO%2FfdaHy1bSJvp7Vv9nZ76mhhOZYcHWubRY29K7ZEwvLqTwiWL0P%2Bu9LyiIMt1mskN%2F%2B5cX%2FrPA8%2FBMBQF4iUOgldxXvQGIRWwgLq2e7%2BLoSo6R5QNdcyXPT%2FT09feeviPn5IZn7%2F&X-Amz-Signature=666dde7bf39a74d4e04bd00b7732e9e69312701aea5b3fa78441e48aa2beabe7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
