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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L34Z2OM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6rdEr7%2BuagNK1l7BfestWX7EDZmWamkDPyg1mGPRBgIhAImSVpzjZlKYxd1o4cc5X0Eh9ot94vQYcnO%2Fc5q%2FCmokKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOK1Nq3isooC5LgMq3ANHT4Ig8DtGlaFr%2FKrdvsA7Jny91IKnR8Pl%2Fx%2BuhB8VYuYrdPSJdHNZ%2BKw6s9SJGjnrwJWH4ooaX%2FMYoKMIJ7jKQy9KCKtvwHZLbHQuI9pHnKU60ejWGLQ74o6o9ut5RBtLEa7W3BdYZLVuNs8a9e%2FG8UTrhwiDopq1lAIy3nbymoxBa7G56zKrwtra1wgiBdVn3LQFW78b%2BPTekCIYq71G77QV9C869TgVAkwNLJ6qWlRqFzUnKGaeXE3MS3nYKsPkwn1bCj3JKMrBXYX10RpUBuzYFCZ8%2BBPI9ARXQcxcku3sABD5vnaY4QEMiRBElwRRpwJ4sA5F7BjzZ7XuZXIrEOSlbg%2F5yhrn68schW%2FvyM3u%2FtbcAGNrtCviEJ7wBG6HaYf8dToshfwfDsFxeKfC6%2FDCRHcRBRpbd%2BHoeiGpim0q6o7ukGAThuF3sv2kvTJzhhGJjt6CDQaaHiO9aj9Oa%2BTku59EGzwn3jt7lEis9D69PN0Gf%2FAXR4BixVmiQGqPJ8wji6oES4N%2BeycUVF6ECctKoAS4fD5wRdTE4Wqaeadbhb1kV6tqVlwbfD86mMYREhRgLshT4ridkMJeo7hJiaZdhbwtnxShXTuDzlslAvhspMW8vKiSS%2F746DCVup2%2BBjqkAQHeR4Fp2awYygTpHlodyDQ%2B5yhIWSkDWCFq8OG8srFMx4%2B%2F35MyY%2F5eEamfSKvz4BARul0NHXTq7M1uq9qX2GCnwQhuyu%2BljTgx1q16Mwe7YyCGtDjwotTCZmvIDendD5XpN6fOOdbF7%2BSgRBt2NN1rsoKTT8VnEnH6pcydLIHGO2wM%2FJe0EK24VdfuHzPVempln0P2m4JcLTMGyyFvIUcpBtCJ&X-Amz-Signature=67673859b0695ab666483542fba6eb71194bd0b8a47e54ab8b4be31ba916f01f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L34Z2OM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6rdEr7%2BuagNK1l7BfestWX7EDZmWamkDPyg1mGPRBgIhAImSVpzjZlKYxd1o4cc5X0Eh9ot94vQYcnO%2Fc5q%2FCmokKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOK1Nq3isooC5LgMq3ANHT4Ig8DtGlaFr%2FKrdvsA7Jny91IKnR8Pl%2Fx%2BuhB8VYuYrdPSJdHNZ%2BKw6s9SJGjnrwJWH4ooaX%2FMYoKMIJ7jKQy9KCKtvwHZLbHQuI9pHnKU60ejWGLQ74o6o9ut5RBtLEa7W3BdYZLVuNs8a9e%2FG8UTrhwiDopq1lAIy3nbymoxBa7G56zKrwtra1wgiBdVn3LQFW78b%2BPTekCIYq71G77QV9C869TgVAkwNLJ6qWlRqFzUnKGaeXE3MS3nYKsPkwn1bCj3JKMrBXYX10RpUBuzYFCZ8%2BBPI9ARXQcxcku3sABD5vnaY4QEMiRBElwRRpwJ4sA5F7BjzZ7XuZXIrEOSlbg%2F5yhrn68schW%2FvyM3u%2FtbcAGNrtCviEJ7wBG6HaYf8dToshfwfDsFxeKfC6%2FDCRHcRBRpbd%2BHoeiGpim0q6o7ukGAThuF3sv2kvTJzhhGJjt6CDQaaHiO9aj9Oa%2BTku59EGzwn3jt7lEis9D69PN0Gf%2FAXR4BixVmiQGqPJ8wji6oES4N%2BeycUVF6ECctKoAS4fD5wRdTE4Wqaeadbhb1kV6tqVlwbfD86mMYREhRgLshT4ridkMJeo7hJiaZdhbwtnxShXTuDzlslAvhspMW8vKiSS%2F746DCVup2%2BBjqkAQHeR4Fp2awYygTpHlodyDQ%2B5yhIWSkDWCFq8OG8srFMx4%2B%2F35MyY%2F5eEamfSKvz4BARul0NHXTq7M1uq9qX2GCnwQhuyu%2BljTgx1q16Mwe7YyCGtDjwotTCZmvIDendD5XpN6fOOdbF7%2BSgRBt2NN1rsoKTT8VnEnH6pcydLIHGO2wM%2FJe0EK24VdfuHzPVempln0P2m4JcLTMGyyFvIUcpBtCJ&X-Amz-Signature=713a4497d55875b6f450febdb6c41baa0553d010d1b80c3e6952cfb20a25140a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGATYEI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZgmj55FqYA2I%2FfW4YTgWfOjG8HiXoiMYI8o9yr0TyTAiEA7NdQPGtBULO6acZs6ob1Vbm%2Ftp0WF35HjM6ToLnS9bgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXKsS2XNjMK%2BRugECrcA7S0F8NN2YxCY7F130ZsT6%2FJmvyxOv%2FZQItcUDaUWGG%2FjrDyw30OjYLi4sSaam%2BEKKBYTLgIAtf8gA3D9lTqRaJ1PrpP360vrJ0%2BNIiyOXvw6jCgB%2Fr7IfD8%2FZ0pQkVWQ3Uu62zUefAV%2B8o%2FTYRa3xqhxYdVC7jYD63%2BpRZ6CT2vn7%2B7V1p4%2FFgzXESeriFS5DCUYyg1s57BLPmOSEYYwNjrhSZgbINRnx2QIh%2FRw7cy5GkrTYf0%2FXKyODH0QXiAxt3gCz%2FT9qgIJaBqIR0A2pKPHdzUslJ1LBmH48swomhwfxUpncpHW6%2BdN1BZjgtgPdEKVxhk7Np6fq82zqTswcyXIPmiWUoQHUCjJFEM3FBDIpYbs8UJfjJAz1VA6ZPSo12QNPkOz32wScFkmmz6VbHyGUF%2BCkxDmQSiBOLHNypY9tMxRrHWCo9P5OqiAqD%2B7cLI8So5mbfFk1anlHMc31oIy0Ofk2RaZx%2BGnwRS1CmUoycN93r%2FfmnwxhjyYvUuhwBurmAVZPRevLeS0a2Kqtcf8TWjIhkF6Es37ozZd%2FaeZMIjYQmsiE8wJV15K4uuEKuvrtcinti1ifRxCOZVKiaMLEfKTdCsetU58jhlaKHucBhWxoDj3M0kNgQEMOK5nb4GOqUB2UITvpvBUHBGXhp2XnxPFoqbofS7LsVwph%2B5IdXwwPa6kaosj8tIuoUUdj0qxUChvi0FXdg7Qk2R9ZnuSpvu8FMqxC2N%2Fg7tYQzQkAAnTJjPediBZ%2FqIesGCStLQ0QFuK5tOPix0MUwZlq2DSQ%2BTK6j2kEMtqKt6JsuGXN1U8wVKf1%2B5BBw7CWOfBrF07jlgG7XvXe2As3sW4Q0xUpO%2B7bC8IcmY&X-Amz-Signature=b9ff2317c9af84c28565bb26f47a4f131b09d5ce8f2cef42792d3b96d482b36c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ESXEI6%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2FtKR89xhNsglHENxYcVqweAWOv6ioG39fv1%2FQkucXwIgPLzzK4iqRrCG8057LHpPCg%2BOyn7T12wr9Cixz%2Bfh6poqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcFfgLV%2FaGuym4uHyrcA%2FPXD5vL8kw71VI734Kyh2pdWb8tBjQrogB%2BsVeOpDDtvNnNDhI4TUAbm%2Bg0ZJ%2FIDPq9D2UBLuW8%2F9or70gPDzEh4wCLv4x3omqBp155T33NpusSGgNPks6Y%2FowkwfeWG2XF%2F9Y%2F2upOllq9dUKNIZu8Wsx2HAUsEKkRnx58Qen2%2FrICJIIP6mX%2FQgyVrnPD7NnD4IIbEamv09sQoMhSX0ayI9x6OJadL3WyVu2NwIKMDM3tQ%2FQLJrY5%2BHkE3RN7l6%2FzpB9SqpwFSXrg9aWBPj6FA%2BMj0qKI59eGVub%2FAIASqk6iOzyAkkdCXivv64k0r5KafyzARadu58WzkQl27fka3PCI8NdR4YgJZub7lfgPGEBfx6P%2By2WbxybFuzVJ0p8cLldyJcCi4vWK%2BdR978X8etpmVLlvkxXNZ3iLx7ba43W3g9ok%2B0pg3wweiWYKR16CZQvK%2B3Pt1nwNYql9oSc%2FZV1D3Rp8wA79u2G3KbNXWxMrUz7WKMSALpjPWQ3rQxCi4630laJ0PrpyJScbpY51ogVeJwdm8PHuPR5f3OJHrufZOgsx%2FM3MGgtKlUQDtk2lYMTncwW6RlZp%2BQ5nzokRuqkrq7zREtJWxGIpVCpX%2FPzKhR4M8Aey%2F3p9MKu6nb4GOqUBnBlCwqBm7aIneVQLLufIWyrEXLLnUY4djkWiquZ6JE7tTcEggK5v0CpE0TDHMmlDxs4%2BCixn5uF9Dd7x3Gw5wyuAurtWaJr0sZqfMN%2Bj8REA5AB%2FolZk9EOdbQxk2EHqltibU8PYHi2UBSJleNlHBlCjjnYxdS5Z0m5wgXIztdQY2XEwBjCHGEFvNQ64DZA221c%2FZKP3i6fmB%2BXPNsavHvO1YBoK&X-Amz-Signature=91ebe05e59ea848db60959e439687266d9da4b1d5ec116168dedf5d405a56edd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L34Z2OM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc6rdEr7%2BuagNK1l7BfestWX7EDZmWamkDPyg1mGPRBgIhAImSVpzjZlKYxd1o4cc5X0Eh9ot94vQYcnO%2Fc5q%2FCmokKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOK1Nq3isooC5LgMq3ANHT4Ig8DtGlaFr%2FKrdvsA7Jny91IKnR8Pl%2Fx%2BuhB8VYuYrdPSJdHNZ%2BKw6s9SJGjnrwJWH4ooaX%2FMYoKMIJ7jKQy9KCKtvwHZLbHQuI9pHnKU60ejWGLQ74o6o9ut5RBtLEa7W3BdYZLVuNs8a9e%2FG8UTrhwiDopq1lAIy3nbymoxBa7G56zKrwtra1wgiBdVn3LQFW78b%2BPTekCIYq71G77QV9C869TgVAkwNLJ6qWlRqFzUnKGaeXE3MS3nYKsPkwn1bCj3JKMrBXYX10RpUBuzYFCZ8%2BBPI9ARXQcxcku3sABD5vnaY4QEMiRBElwRRpwJ4sA5F7BjzZ7XuZXIrEOSlbg%2F5yhrn68schW%2FvyM3u%2FtbcAGNrtCviEJ7wBG6HaYf8dToshfwfDsFxeKfC6%2FDCRHcRBRpbd%2BHoeiGpim0q6o7ukGAThuF3sv2kvTJzhhGJjt6CDQaaHiO9aj9Oa%2BTku59EGzwn3jt7lEis9D69PN0Gf%2FAXR4BixVmiQGqPJ8wji6oES4N%2BeycUVF6ECctKoAS4fD5wRdTE4Wqaeadbhb1kV6tqVlwbfD86mMYREhRgLshT4ridkMJeo7hJiaZdhbwtnxShXTuDzlslAvhspMW8vKiSS%2F746DCVup2%2BBjqkAQHeR4Fp2awYygTpHlodyDQ%2B5yhIWSkDWCFq8OG8srFMx4%2B%2F35MyY%2F5eEamfSKvz4BARul0NHXTq7M1uq9qX2GCnwQhuyu%2BljTgx1q16Mwe7YyCGtDjwotTCZmvIDendD5XpN6fOOdbF7%2BSgRBt2NN1rsoKTT8VnEnH6pcydLIHGO2wM%2FJe0EK24VdfuHzPVempln0P2m4JcLTMGyyFvIUcpBtCJ&X-Amz-Signature=312b4ca94c872851cb4c1371cf3aa651ccb3266a9ed04b1940d37dcba4394b42&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
