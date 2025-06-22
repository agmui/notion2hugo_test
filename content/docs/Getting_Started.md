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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBQH57%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyM0wjbG%2FvdpnJxwPIXcYbRQ2lKGSxp%2BNhTqYvu6o97QIgZHcvHmYO%2F%2FW5ymFjueX3MsLsWWB6ZF7Bc2jT%2Bj80TY4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClREZhCRv5ZYwQDuCrcA6qiOHyVH5OHnraWQxj8Rbh251sfj1izf23fQzbijY1%2BJVkXJTyxYaL228nGSOvkFsq1IeT0GK1SwL5nu3QwLrqlBM2IHfNYEPAVtGXbOvz3g29TY7k9Zf2qWQ9pkqU6odOAef2ZNTXQ4aGzQi8vkklwylmHvEONgVl2s6hlX9HsuPfodDsvZknzYhEP98FRIB43bFl%2FscnLPQhqM5SBRzEwAiifjYTP32yWXDLXOGAGqe1lAl%2FcMJr3fSC4pzlta%2Fw4kaqiuX%2BKq3h6SlOsSqTNW%2BRyHV6Y3e9YKzoGjcLlcNZfiFGE8mnokscpNveX9NhxS%2F2EtLatANiYJ374mh6lyuudt2csoqwEIaXbRwVE4z4xFqsAgwsuux3mA%2BxhpbMNSxe9nOoTQmzMTq2ZfWxlXa6v2nnj75zEDKR%2BNcEG7NsO4vxZj3UK814zIKZtmxmA6HmCiXOnIAFYJKHz0BSsO14QMEFJTFPaoCX8KxhuSmkBCKXdYw3XAcgXJTZsR1LRpBO84IrkvPyIlkg5kL3rFL55Jtnk67tCrUhcOpLXjlZGPA1pbeohw%2FAaszhcMkOVwk1LoestkfOjJzQmDT%2Bcq0q3ejda%2BsdcWGIeDmnwF0HL0X%2Bh6BDUh64fML7W3cIGOqUB9cX2dCUfnLVfGLyBJ4aZamutg6pIGzaSspkDfWwD0MAi%2Fi5A4JC1GU%2FusnLtx7P2%2FDIq817%2FQOEDpwnolimDlKpVOFC7Ru3m7cSxYpDmy4v73W9Q%2FQNlgIpJqS6leMICSxuFxuBhYmn9A5Mqyuy6j3QF%2B1C1K7xla0ncP6fFHu8llX9oHMTwIRUtfsdLGZBWOnrpYmoRbDycnTvpMGuxUH8tG9E5&X-Amz-Signature=0195554564b7e2120cfa707f6160522b6af87e4dc59e4b5bb3fd4407069994eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBQH57%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyM0wjbG%2FvdpnJxwPIXcYbRQ2lKGSxp%2BNhTqYvu6o97QIgZHcvHmYO%2F%2FW5ymFjueX3MsLsWWB6ZF7Bc2jT%2Bj80TY4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClREZhCRv5ZYwQDuCrcA6qiOHyVH5OHnraWQxj8Rbh251sfj1izf23fQzbijY1%2BJVkXJTyxYaL228nGSOvkFsq1IeT0GK1SwL5nu3QwLrqlBM2IHfNYEPAVtGXbOvz3g29TY7k9Zf2qWQ9pkqU6odOAef2ZNTXQ4aGzQi8vkklwylmHvEONgVl2s6hlX9HsuPfodDsvZknzYhEP98FRIB43bFl%2FscnLPQhqM5SBRzEwAiifjYTP32yWXDLXOGAGqe1lAl%2FcMJr3fSC4pzlta%2Fw4kaqiuX%2BKq3h6SlOsSqTNW%2BRyHV6Y3e9YKzoGjcLlcNZfiFGE8mnokscpNveX9NhxS%2F2EtLatANiYJ374mh6lyuudt2csoqwEIaXbRwVE4z4xFqsAgwsuux3mA%2BxhpbMNSxe9nOoTQmzMTq2ZfWxlXa6v2nnj75zEDKR%2BNcEG7NsO4vxZj3UK814zIKZtmxmA6HmCiXOnIAFYJKHz0BSsO14QMEFJTFPaoCX8KxhuSmkBCKXdYw3XAcgXJTZsR1LRpBO84IrkvPyIlkg5kL3rFL55Jtnk67tCrUhcOpLXjlZGPA1pbeohw%2FAaszhcMkOVwk1LoestkfOjJzQmDT%2Bcq0q3ejda%2BsdcWGIeDmnwF0HL0X%2Bh6BDUh64fML7W3cIGOqUB9cX2dCUfnLVfGLyBJ4aZamutg6pIGzaSspkDfWwD0MAi%2Fi5A4JC1GU%2FusnLtx7P2%2FDIq817%2FQOEDpwnolimDlKpVOFC7Ru3m7cSxYpDmy4v73W9Q%2FQNlgIpJqS6leMICSxuFxuBhYmn9A5Mqyuy6j3QF%2B1C1K7xla0ncP6fFHu8llX9oHMTwIRUtfsdLGZBWOnrpYmoRbDycnTvpMGuxUH8tG9E5&X-Amz-Signature=de74fc9a83f3598bb0af5020f54b28a4bfacf7808efe6b916544f9842990deb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBQH57%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyM0wjbG%2FvdpnJxwPIXcYbRQ2lKGSxp%2BNhTqYvu6o97QIgZHcvHmYO%2F%2FW5ymFjueX3MsLsWWB6ZF7Bc2jT%2Bj80TY4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClREZhCRv5ZYwQDuCrcA6qiOHyVH5OHnraWQxj8Rbh251sfj1izf23fQzbijY1%2BJVkXJTyxYaL228nGSOvkFsq1IeT0GK1SwL5nu3QwLrqlBM2IHfNYEPAVtGXbOvz3g29TY7k9Zf2qWQ9pkqU6odOAef2ZNTXQ4aGzQi8vkklwylmHvEONgVl2s6hlX9HsuPfodDsvZknzYhEP98FRIB43bFl%2FscnLPQhqM5SBRzEwAiifjYTP32yWXDLXOGAGqe1lAl%2FcMJr3fSC4pzlta%2Fw4kaqiuX%2BKq3h6SlOsSqTNW%2BRyHV6Y3e9YKzoGjcLlcNZfiFGE8mnokscpNveX9NhxS%2F2EtLatANiYJ374mh6lyuudt2csoqwEIaXbRwVE4z4xFqsAgwsuux3mA%2BxhpbMNSxe9nOoTQmzMTq2ZfWxlXa6v2nnj75zEDKR%2BNcEG7NsO4vxZj3UK814zIKZtmxmA6HmCiXOnIAFYJKHz0BSsO14QMEFJTFPaoCX8KxhuSmkBCKXdYw3XAcgXJTZsR1LRpBO84IrkvPyIlkg5kL3rFL55Jtnk67tCrUhcOpLXjlZGPA1pbeohw%2FAaszhcMkOVwk1LoestkfOjJzQmDT%2Bcq0q3ejda%2BsdcWGIeDmnwF0HL0X%2Bh6BDUh64fML7W3cIGOqUB9cX2dCUfnLVfGLyBJ4aZamutg6pIGzaSspkDfWwD0MAi%2Fi5A4JC1GU%2FusnLtx7P2%2FDIq817%2FQOEDpwnolimDlKpVOFC7Ru3m7cSxYpDmy4v73W9Q%2FQNlgIpJqS6leMICSxuFxuBhYmn9A5Mqyuy6j3QF%2B1C1K7xla0ncP6fFHu8llX9oHMTwIRUtfsdLGZBWOnrpYmoRbDycnTvpMGuxUH8tG9E5&X-Amz-Signature=0422193ebbbfed7a135bc75767d72eedbcad004310a28127cecdf43e526b971f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2WUVA4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL%2FZ2waRyiijYdEK5jzdRYRHXpZQyp4Q0zXXGj%2B6fwZAiEArQVQpTERlHmiBIrTpn%2FSs1YYsdNHxT31qDDv4Oy7ku4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGIDDHlaBQPmQyFNyrcA2vVUVQB8ZxFVmQinyhRNzGMLkTnLQAUlh9GbdT1dMrPzBDkaNyzR4pkE0fvStJvDyaoS1akrX%2FpOYOf3p%2F8s6pdcr1xV2Zg9WYAnXH6IM%2BPLmiMeGRqESYuWgOT7WwWMl4IycQ385uIoyv3Ey3JHmk2KEar4NN4Xm4zYJKsyLWqk2yNCP%2BUPeHnjPiV7kA2uKVXFigk8DwV7YsVP2etKN%2Fa1r8kFxnoLhIJVbwgj%2FvUGEhSw53P7p%2B92sQbam1IMViV4ak3XsYO00OWwSn5GhpzckpVscrdHam0auxnTGrlhq94kFvw%2Bbv3lfeL%2FUzvoeD37B4ZeXfOaCl8mMwskneLIOGEjN0cion4M3rYjwoXTZ75mBkBPIjlSapnteULzmp3ZPAb58xxjf%2Fw2SsUnlDKeZ3u8WAMxXfsaZ5geCdBaZEDUJYZs6ePJ67rA4g44VrWSdmwealo7C0bTRyjGT6nEY1l7QJumyJJZsXMzbRKTRr4Nj5o3fmafKwECSTPbvg1mNhkpexbz2UT7Vx%2FqCROs2RL3P3UBYkD3q2gwwudaZ76vTh0jLBT5RCdddmFFF61Z89MzESZ7eZB%2BVYOQ9OZho78s1YdjALAOGqYGutCabguJnQ5wl6zRmTBMOqH3cIGOqUBGruy1pnaNvCYHbjrP9tLG%2F2IzBo0TutG58fyxzyJI%2Fl9ZV3lh18A6kaQ6%2Fo3EY91XDvQ5jH%2F7HHr4k%2BF3ek7BefG3iS9RkBa%2B1WysbbOOsYtx3SzHE9Eel57hFBcwgFDZPOdoyVSTzAiSPBljjJIP8fS2vQ2EysCCEr92V85hpKi3f2sb0VioVF4D6Mhi8BU9NAVY8zUvw7KqknligptKDhuVs2B&X-Amz-Signature=535e138bb40ef3a513c299383d9617926cac76625fecc910ece90aa5bec96990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMNXMV7W%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FrL%2F0C1TRcs%2Fxq9Ac0ciiNU3qMG%2F64lq6T%2BUpEDLPZAiB7x4Msf7bjkDx0WnnqeMfa3Roh9%2BulrEXl93sH4x3TbCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx4UcX2a4PLersiR9KtwDenW12K09EOxQEMI%2FieFquhehwfRI2NzZw4fT3KPkjLvT4JcDJ%2BJglTLb3ai7q3ozLCmlpA%2Bf7euVW3M7FOPur4Uo5dshQ0VfubqMct1ziENEXpyXgNri%2FpULsp3VXeh4BeP9JHh%2BoUpAXDfl2Zhe1jWcwq4VrZK7BHQXbBlkeN7GJ3CCRtPlglq8UpgaAbncbScNCkC7GmQo968toGjaHYZ7O3bGbCdm5RmSFTdRgrTY2ReoS%2F9wiCWoSyHYfO9x5gnFNfaj6%2BIB7%2FYqiJPFC%2BJ76JD5WVuOTMgzKXplhNB4vE9z82n5C%2B6evI9U37DU%2FB2ojHBRLJHdCfSYdagxuFYK5JwLKMDIO4A440HolET8INrZtI7SSM%2FDs%2Bd%2FWXvv33ronMKeLCdL4RXCs2UdObAmlpANknhcWpPwZcFxOjS4NX2ZMdwxzk2YB71L1uxiMLdxNaVLCSXZN18cjz34Ies4LHNtpcnQC4ycBx2GvXYDPff53QXvGOVmRoRvPf%2Begxv54r%2Bj6bfWswN8qmK1%2BBNC77SEDYQl82Jhy5Uy2uWhQo9FXrJE3h%2FvBNLjLe8bfLsxZZjZ7U8iJITfiUJZw%2Bm9XLXBuQcuGgraalb0WlwFfPrBGM55XW9lRW4w6NTdwgY6pgE07yKkaUoPjK4M92JbW7PZOgPwFnTEi%2FSxsEzCHUCanUvn7Sn6aAwgqwbQchz4LJ9Fc8s38KaBiOwGcI4ygRKegJPkoJAQDsf9f6Mxq26vMvYpEZ35hgYmZTen8pNVmNGZA4hDrgj7AFbozZAZqk45P66HcP1jPrA3HFcQ2sWb3sSadwlrjVgG2dvJOisW7MEw2fTUXVz4WkXhdWJFZL3kSFDQVEZ%2F&X-Amz-Signature=d5952b633245144bff222c71434b54968fd12ac666d20338d8a2eecfcf9ca375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ULBQH57%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyM0wjbG%2FvdpnJxwPIXcYbRQ2lKGSxp%2BNhTqYvu6o97QIgZHcvHmYO%2F%2FW5ymFjueX3MsLsWWB6ZF7Bc2jT%2Bj80TY4qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClREZhCRv5ZYwQDuCrcA6qiOHyVH5OHnraWQxj8Rbh251sfj1izf23fQzbijY1%2BJVkXJTyxYaL228nGSOvkFsq1IeT0GK1SwL5nu3QwLrqlBM2IHfNYEPAVtGXbOvz3g29TY7k9Zf2qWQ9pkqU6odOAef2ZNTXQ4aGzQi8vkklwylmHvEONgVl2s6hlX9HsuPfodDsvZknzYhEP98FRIB43bFl%2FscnLPQhqM5SBRzEwAiifjYTP32yWXDLXOGAGqe1lAl%2FcMJr3fSC4pzlta%2Fw4kaqiuX%2BKq3h6SlOsSqTNW%2BRyHV6Y3e9YKzoGjcLlcNZfiFGE8mnokscpNveX9NhxS%2F2EtLatANiYJ374mh6lyuudt2csoqwEIaXbRwVE4z4xFqsAgwsuux3mA%2BxhpbMNSxe9nOoTQmzMTq2ZfWxlXa6v2nnj75zEDKR%2BNcEG7NsO4vxZj3UK814zIKZtmxmA6HmCiXOnIAFYJKHz0BSsO14QMEFJTFPaoCX8KxhuSmkBCKXdYw3XAcgXJTZsR1LRpBO84IrkvPyIlkg5kL3rFL55Jtnk67tCrUhcOpLXjlZGPA1pbeohw%2FAaszhcMkOVwk1LoestkfOjJzQmDT%2Bcq0q3ejda%2BsdcWGIeDmnwF0HL0X%2Bh6BDUh64fML7W3cIGOqUB9cX2dCUfnLVfGLyBJ4aZamutg6pIGzaSspkDfWwD0MAi%2Fi5A4JC1GU%2FusnLtx7P2%2FDIq817%2FQOEDpwnolimDlKpVOFC7Ru3m7cSxYpDmy4v73W9Q%2FQNlgIpJqS6leMICSxuFxuBhYmn9A5Mqyuy6j3QF%2B1C1K7xla0ncP6fFHu8llX9oHMTwIRUtfsdLGZBWOnrpYmoRbDycnTvpMGuxUH8tG9E5&X-Amz-Signature=fa926a0a69bf45978faad66399af11c493559f4db5bd7b15a3386ff0fcdb81f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
