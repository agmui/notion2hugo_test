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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JF272HF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCvTdZYpuChJldkpJKSjETPKLSBy2AcCQBKTx9%2Bh72hMgIgHRExyDB%2FWSUut%2F8SyLGIRhr92cyapUVPaUJgeuPQkGEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbZ2UXe%2F5LsDftp8yrcAwDlbi2OzWdF2JWWFgsKBiTKbuPDragopF70H7lbwMozHYFNZYwZR75OPxSr90XsDyo2Qs%2FnarkJmYrLioq4VBbtBOpHW0LPj3D4xMVdF1ffmFgHQCy9tQCtCX8hFDNP0O01inuo9bbPu01WvEGUEQWC3lQEn%2BZLdMbdW%2BJKD2SVdee1y%2FE4t4jr1EfPS7dcRucM4iti5j3kqdbinI24S%2BLO8qf%2Bzbzk5KBzbRWBhaZ4SPbX7zfKy3sQS7AuMTQKrg7an532Dq6fT9ebSbLZZj4r1cdjnNYklUsnO1UCDmHukgk1UtQWzwaJJuzO%2B8Hc5E2n%2FlAQUhpArwg52mi7EMji3AM2fYJeSkcgeKy4G2knf%2BOPRPHkTZiEz0qMop8m6W5IagCq%2BRbMfHS6yB2UCxGBbRHV8VsVp%2BNqUWqJrBNf9n7fVGRqMCz0YTCwYwtGQVrT5Tr%2BxElAesaAi2EvUFn7EXEJuVdOHW%2FSttka4AHQkFcT6I%2B747zeNwdvTgIVT6DkLeE5uATuKvewcNT6tDo96JoM3J%2Br3kr%2Fw%2BCwIf6RNOEM5X7td5NOyu4ZJ%2FSBwKNdV2bC%2FJze3IdRg2tRvm5LfPYUMLxio03NFs2Sao%2BCbldl3a0BrViWj7sLMOeT%2BMEGOqUBwvLPiCF26okRxy0F1JYL0lVABmUEVhf%2FCdDiP5efYkVy7CPCeNSW5sEBe57e1G0R3oH34%2BNlBqWnwDw2lcJcp1y7wzI5R3WhvrYijkTDCTPI7GLZ9IqXammOrfVa5lqrTgsRrk9v%2BtaEpLPKVyfG%2BBSmXzA91T%2Ff4kfIq%2FtxfupER2VQCg45oxOS%2FgFw%2BM4ciJofiWDPyZ0LlNT2AsupIXsn3VSN&X-Amz-Signature=044a868d60351e0ff1f5aa5eeaaa07d41c397cf315fd1a5f12ec681d531f660f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JF272HF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCvTdZYpuChJldkpJKSjETPKLSBy2AcCQBKTx9%2Bh72hMgIgHRExyDB%2FWSUut%2F8SyLGIRhr92cyapUVPaUJgeuPQkGEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbZ2UXe%2F5LsDftp8yrcAwDlbi2OzWdF2JWWFgsKBiTKbuPDragopF70H7lbwMozHYFNZYwZR75OPxSr90XsDyo2Qs%2FnarkJmYrLioq4VBbtBOpHW0LPj3D4xMVdF1ffmFgHQCy9tQCtCX8hFDNP0O01inuo9bbPu01WvEGUEQWC3lQEn%2BZLdMbdW%2BJKD2SVdee1y%2FE4t4jr1EfPS7dcRucM4iti5j3kqdbinI24S%2BLO8qf%2Bzbzk5KBzbRWBhaZ4SPbX7zfKy3sQS7AuMTQKrg7an532Dq6fT9ebSbLZZj4r1cdjnNYklUsnO1UCDmHukgk1UtQWzwaJJuzO%2B8Hc5E2n%2FlAQUhpArwg52mi7EMji3AM2fYJeSkcgeKy4G2knf%2BOPRPHkTZiEz0qMop8m6W5IagCq%2BRbMfHS6yB2UCxGBbRHV8VsVp%2BNqUWqJrBNf9n7fVGRqMCz0YTCwYwtGQVrT5Tr%2BxElAesaAi2EvUFn7EXEJuVdOHW%2FSttka4AHQkFcT6I%2B747zeNwdvTgIVT6DkLeE5uATuKvewcNT6tDo96JoM3J%2Br3kr%2Fw%2BCwIf6RNOEM5X7td5NOyu4ZJ%2FSBwKNdV2bC%2FJze3IdRg2tRvm5LfPYUMLxio03NFs2Sao%2BCbldl3a0BrViWj7sLMOeT%2BMEGOqUBwvLPiCF26okRxy0F1JYL0lVABmUEVhf%2FCdDiP5efYkVy7CPCeNSW5sEBe57e1G0R3oH34%2BNlBqWnwDw2lcJcp1y7wzI5R3WhvrYijkTDCTPI7GLZ9IqXammOrfVa5lqrTgsRrk9v%2BtaEpLPKVyfG%2BBSmXzA91T%2Ff4kfIq%2FtxfupER2VQCg45oxOS%2FgFw%2BM4ciJofiWDPyZ0LlNT2AsupIXsn3VSN&X-Amz-Signature=2aebf48117fa20eabe2e2a4dbc678a621f3970cfc4bbda04d06e95111a118edb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JF272HF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCvTdZYpuChJldkpJKSjETPKLSBy2AcCQBKTx9%2Bh72hMgIgHRExyDB%2FWSUut%2F8SyLGIRhr92cyapUVPaUJgeuPQkGEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbZ2UXe%2F5LsDftp8yrcAwDlbi2OzWdF2JWWFgsKBiTKbuPDragopF70H7lbwMozHYFNZYwZR75OPxSr90XsDyo2Qs%2FnarkJmYrLioq4VBbtBOpHW0LPj3D4xMVdF1ffmFgHQCy9tQCtCX8hFDNP0O01inuo9bbPu01WvEGUEQWC3lQEn%2BZLdMbdW%2BJKD2SVdee1y%2FE4t4jr1EfPS7dcRucM4iti5j3kqdbinI24S%2BLO8qf%2Bzbzk5KBzbRWBhaZ4SPbX7zfKy3sQS7AuMTQKrg7an532Dq6fT9ebSbLZZj4r1cdjnNYklUsnO1UCDmHukgk1UtQWzwaJJuzO%2B8Hc5E2n%2FlAQUhpArwg52mi7EMji3AM2fYJeSkcgeKy4G2knf%2BOPRPHkTZiEz0qMop8m6W5IagCq%2BRbMfHS6yB2UCxGBbRHV8VsVp%2BNqUWqJrBNf9n7fVGRqMCz0YTCwYwtGQVrT5Tr%2BxElAesaAi2EvUFn7EXEJuVdOHW%2FSttka4AHQkFcT6I%2B747zeNwdvTgIVT6DkLeE5uATuKvewcNT6tDo96JoM3J%2Br3kr%2Fw%2BCwIf6RNOEM5X7td5NOyu4ZJ%2FSBwKNdV2bC%2FJze3IdRg2tRvm5LfPYUMLxio03NFs2Sao%2BCbldl3a0BrViWj7sLMOeT%2BMEGOqUBwvLPiCF26okRxy0F1JYL0lVABmUEVhf%2FCdDiP5efYkVy7CPCeNSW5sEBe57e1G0R3oH34%2BNlBqWnwDw2lcJcp1y7wzI5R3WhvrYijkTDCTPI7GLZ9IqXammOrfVa5lqrTgsRrk9v%2BtaEpLPKVyfG%2BBSmXzA91T%2Ff4kfIq%2FtxfupER2VQCg45oxOS%2FgFw%2BM4ciJofiWDPyZ0LlNT2AsupIXsn3VSN&X-Amz-Signature=33fa648ae5a786617957fdf4b32022022a01108b8aff12319e599ec96f86885c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZM2B6XG%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDLpnZE2lP79bMaaaCWpcd4fUnrzSHYFKe%2FYQVwIIBl%2BAiB6LQdZvWWK27TwwLVxvTrI98iWO%2FecYKrDE0nsaM8z0iqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMepNbUWPmgyo%2BGa1kKtwDh2HD9wJ2yNjgLZmPAHr1MLA64e0CG3Lhc%2FfxwcDHRFINybHlDXuw3kIkPqHC%2Frxv4W0tZS376bmQWknA4v%2BAOODjScNKgBUu%2BysmhKFFgC5W48vftj3P5pKn52KzbVGR1v5bPYAanSo2bNByWvaRCaEmXpqaFNhJrb9JgZ96YwLH47plLvpTGWSXjf4a4Gyewrq94DGBgjSferT9mE3tgzU5EUDN%2BOHJBAJ%2BJqVDrWYDe3IMEDGMSLAkSUKE65hy3l%2Buba2GXWCXIkTtEAHbdB0vRijblAhJAAb23uKxmWKxZAW0u%2F9hPnizmXBA3lP9TekD4ESDF5%2B5n3QDyyVCb%2BEhyAoZ4ye9MvBALKBkDScYf4NDPO2TJTbCfaajxlCMn6wQ6lkQm8%2FFddhhXhyIQKAkDl77sQNRXrQM78DhljHYrML33t0DyLl5KZ91y%2FZIH7n2HOlcItOgFL5eFaXHvq1cCNzr2wzjUPtiwvFexlmoR2L%2BF1wGxABHsHeWJKgRpaoM80pp0YuIzkicC0NQWRqH7gT%2BtRlPBW%2Fy5WQnS%2BsvZq1hr%2F8dbyYyILfDFCTuA0cXNF2nt9M54xd4cI%2Fr4OnlvTUyvETXj4%2BVq5LQyGynhbPbHHZ0aZaZ1%2B0w1JP4wQY6pgHe%2B%2Fg5X6BHl%2FvLxBqbnBrKUGvD6ybJjpXW6mlAdAR40xuDnqhXDGYv7zisFg25ExRzSzPln3jvUcmp5FmF8yOOjVGRDVMu%2Felmth2O6faasYjXW3GMmH0NwJC%2FYuz9thvBf0oJIrE7vjwMo4R1bWZdt3J%2FZArcBrcgbAYauVzgSnSVRbqHy%2Bg1reMgn5oKbNnk2Wm8VIXHnAOe52hte%2FwuB4IM8DZb&X-Amz-Signature=6789d7c79206a5acc9e5971fd4e82d1e092ed5c9601bd71e605015c859bb4018&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4KCOCTV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFARcUe1q0lUtimpxIVOYT3vh22rdyajwrJVINKpj0y0AiEAr%2BQl4yJKdsk%2F9dAkuXkUNOzBLSApq2XsozAcGSL7YYkqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOd8UXas0OvQNKDzhSrcA2%2FLn76PkGfbgjRlDXNLzAeFoajVgozo9MXCwxauJYZGoCua3P7r1GGlnj7zD%2BvV%2BbJk9msEN8JscbAVTyvM%2BS0mcWqB%2BirhtYjKj3chpgpSYLbuIhscluJPHIxiXnYkm8tAf2FRdS965zIfiyufdC7WiigDnwAqDxxy14SZdW8U%2Fw%2FetYwx0GQkQIKXdOYEgJppvSOYXhIn0eiWxvlmO4BR9PWhm3jmCVxWDKYyS0n32lA7RoD8DeOu4h8t2wbUGSlU5zQRotd4cL8UUMMhthqjVZZA3CnFiWPDYQC%2FAAPjJvYKT2GLEI0E1UwLXmFOs9W1Z2xaNExAs5XDWE7ty1XxxWwj6OwKSbVJXaACGaHkv4tsA3%2FkuVok9eEun9H4qn1SJNgdpx1iK3L%2FJIlXlnWh9GCTMz2XD2ULlx8Ls6ugDfeDl5%2Be61YODIk8ixndf6Ouf4jdyZrCcYZV7RKlCUDL8KbcJu5txzYNi6XN8jhD503Z607NoiDuoVPPgfqORv1gf3X%2Fj2zEG9ppJDEWMzQP%2B2IXzwzPd4tqmwN8WwYYixi3Ray8PiRylEecJysU84sqVT2zdE5lTsbmOrYITe38pEJNSgGlQRYXdxBO7rMXy24lfuPsaGjYzDgiMJKT%2BMEGOqUB0tgr4ZFJSdWBt6FGyWDMhe%2B5pmnZq9X9cQp1wOaOzx%2BjF4rIiyPvbHl6obqfjm49yEjhqgTps6YYtz8tATrrDNFUkZ24dDw4rzc%2B%2F3uHxeY9rFGSIY6mNBRg8n5bQvG5uVqdHkTLpEwLGON4Mc5KQodK96Co8EbY1JXpFbtSBEi8wrBLwE7BEWAVjYcYT2JKEEAFEn5RdqGIelmcAcpD133b6BEv&X-Amz-Signature=cfa32499bfa0c370a4d4ac4995e6fe7fc398754614ee19b678a62dd9a7f533bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JF272HF%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCvTdZYpuChJldkpJKSjETPKLSBy2AcCQBKTx9%2Bh72hMgIgHRExyDB%2FWSUut%2F8SyLGIRhr92cyapUVPaUJgeuPQkGEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbZ2UXe%2F5LsDftp8yrcAwDlbi2OzWdF2JWWFgsKBiTKbuPDragopF70H7lbwMozHYFNZYwZR75OPxSr90XsDyo2Qs%2FnarkJmYrLioq4VBbtBOpHW0LPj3D4xMVdF1ffmFgHQCy9tQCtCX8hFDNP0O01inuo9bbPu01WvEGUEQWC3lQEn%2BZLdMbdW%2BJKD2SVdee1y%2FE4t4jr1EfPS7dcRucM4iti5j3kqdbinI24S%2BLO8qf%2Bzbzk5KBzbRWBhaZ4SPbX7zfKy3sQS7AuMTQKrg7an532Dq6fT9ebSbLZZj4r1cdjnNYklUsnO1UCDmHukgk1UtQWzwaJJuzO%2B8Hc5E2n%2FlAQUhpArwg52mi7EMji3AM2fYJeSkcgeKy4G2knf%2BOPRPHkTZiEz0qMop8m6W5IagCq%2BRbMfHS6yB2UCxGBbRHV8VsVp%2BNqUWqJrBNf9n7fVGRqMCz0YTCwYwtGQVrT5Tr%2BxElAesaAi2EvUFn7EXEJuVdOHW%2FSttka4AHQkFcT6I%2B747zeNwdvTgIVT6DkLeE5uATuKvewcNT6tDo96JoM3J%2Br3kr%2Fw%2BCwIf6RNOEM5X7td5NOyu4ZJ%2FSBwKNdV2bC%2FJze3IdRg2tRvm5LfPYUMLxio03NFs2Sao%2BCbldl3a0BrViWj7sLMOeT%2BMEGOqUBwvLPiCF26okRxy0F1JYL0lVABmUEVhf%2FCdDiP5efYkVy7CPCeNSW5sEBe57e1G0R3oH34%2BNlBqWnwDw2lcJcp1y7wzI5R3WhvrYijkTDCTPI7GLZ9IqXammOrfVa5lqrTgsRrk9v%2BtaEpLPKVyfG%2BBSmXzA91T%2Ff4kfIq%2FtxfupER2VQCg45oxOS%2FgFw%2BM4ciJofiWDPyZ0LlNT2AsupIXsn3VSN&X-Amz-Signature=d907732cb3a8a649acef8a4dcb0b107ee4962c99711f613f7d5f66ceff1f8a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
