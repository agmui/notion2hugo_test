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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6JDEYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVQvOC4z8%2FnyVl1H1D6uD9Ket%2FB8mSbExp7FErxSLKgIgYWbj9UJAygt3GSiF6mZqUdXI6mALDOg0uQKG7emfSzAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDpU86hlofHHw6BkxyrcA1x1QPdhkOF%2BS9s%2B0hhNgh8KdaNXg2cf%2B3BMy0Mkjhyw1TxPB0ZHpB45W4PZyPpCBKn1PB6DnTqFeq2ZoPjL4f%2BocDePb%2BB%2BGOxLgAt8hI8TAGy4f%2BFibpo9WCt0xQUhINomc21mRSfJo6fgsrdm4PB%2BquA2Jb21vSJyLqTMYB%2BG4kr6arySB44Grnq0KNo5rwYXa0dhrbAbQE0DMAQ70vFUk0qj5pjyAKB9soc0U2FpFgetTqVX6ZitjYrSeec51f5TBKoA72vfGDdRdRDtq18jG2XJrSxNb0E8GTuDjBr2kOYWqesoMsLPHJnQDTVNJ%2FsHkEEr17xw53CKQV%2FJSEGlTiiFecwT8lmgYDA1%2B1y%2F0W2OAEYWtCHhNWiZtafn%2BqOVKsCysXTbNyImSKNhFI8hgFyN38cQDM%2FeeoXiNVo7mIG4bGZ48PdhF0W%2FXhyl2MkDSt3PflAxrnVP5hrJkwgfnJkoK63MWiI2BfKrMmPaeF4I03nXHCUFEm87rclU1h0W57ogadDybsJoyVLfsvuK9spBC973GK2dwsWCsdG4vPz4rAGVhMmIcXXX4r37%2FqeJMMilNZMXuu0Xk9cB2jsqe187EZEamhs7Xq16Km7%2BuYoadKt2h8YifIIpMOqA6cAGOqUBoXgNfT%2F9jRV7diJWUK3TnbkIgH9UlNNMmsu5w17344wFvIPuCiBSTruGpVZj%2B45NySTpfMsv8sE%2FCKh9xFADydLbrK%2F1z749Uf6i%2FpFAvVT6ilfCyX2z9%2FWKsP61Lu7zl9mCuvWHaRXQA5ktKwhMG9sG5S%2Bs17NtjdOM0c3sBJze6P0un7LNf8sr9I7%2BdOC2PGyQjcoienWXydbFH1UzAX5DwjPX&X-Amz-Signature=6db63e7dfbed9652b160fb37b732a4ccb7c6d543c2edadd01690812dfa7d9580&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6JDEYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVQvOC4z8%2FnyVl1H1D6uD9Ket%2FB8mSbExp7FErxSLKgIgYWbj9UJAygt3GSiF6mZqUdXI6mALDOg0uQKG7emfSzAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDpU86hlofHHw6BkxyrcA1x1QPdhkOF%2BS9s%2B0hhNgh8KdaNXg2cf%2B3BMy0Mkjhyw1TxPB0ZHpB45W4PZyPpCBKn1PB6DnTqFeq2ZoPjL4f%2BocDePb%2BB%2BGOxLgAt8hI8TAGy4f%2BFibpo9WCt0xQUhINomc21mRSfJo6fgsrdm4PB%2BquA2Jb21vSJyLqTMYB%2BG4kr6arySB44Grnq0KNo5rwYXa0dhrbAbQE0DMAQ70vFUk0qj5pjyAKB9soc0U2FpFgetTqVX6ZitjYrSeec51f5TBKoA72vfGDdRdRDtq18jG2XJrSxNb0E8GTuDjBr2kOYWqesoMsLPHJnQDTVNJ%2FsHkEEr17xw53CKQV%2FJSEGlTiiFecwT8lmgYDA1%2B1y%2F0W2OAEYWtCHhNWiZtafn%2BqOVKsCysXTbNyImSKNhFI8hgFyN38cQDM%2FeeoXiNVo7mIG4bGZ48PdhF0W%2FXhyl2MkDSt3PflAxrnVP5hrJkwgfnJkoK63MWiI2BfKrMmPaeF4I03nXHCUFEm87rclU1h0W57ogadDybsJoyVLfsvuK9spBC973GK2dwsWCsdG4vPz4rAGVhMmIcXXX4r37%2FqeJMMilNZMXuu0Xk9cB2jsqe187EZEamhs7Xq16Km7%2BuYoadKt2h8YifIIpMOqA6cAGOqUBoXgNfT%2F9jRV7diJWUK3TnbkIgH9UlNNMmsu5w17344wFvIPuCiBSTruGpVZj%2B45NySTpfMsv8sE%2FCKh9xFADydLbrK%2F1z749Uf6i%2FpFAvVT6ilfCyX2z9%2FWKsP61Lu7zl9mCuvWHaRXQA5ktKwhMG9sG5S%2Bs17NtjdOM0c3sBJze6P0un7LNf8sr9I7%2BdOC2PGyQjcoienWXydbFH1UzAX5DwjPX&X-Amz-Signature=18a74b7f4127950bb624eda000d4b20f67001afc36d0c84155141619b3a71aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6JDEYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVQvOC4z8%2FnyVl1H1D6uD9Ket%2FB8mSbExp7FErxSLKgIgYWbj9UJAygt3GSiF6mZqUdXI6mALDOg0uQKG7emfSzAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDpU86hlofHHw6BkxyrcA1x1QPdhkOF%2BS9s%2B0hhNgh8KdaNXg2cf%2B3BMy0Mkjhyw1TxPB0ZHpB45W4PZyPpCBKn1PB6DnTqFeq2ZoPjL4f%2BocDePb%2BB%2BGOxLgAt8hI8TAGy4f%2BFibpo9WCt0xQUhINomc21mRSfJo6fgsrdm4PB%2BquA2Jb21vSJyLqTMYB%2BG4kr6arySB44Grnq0KNo5rwYXa0dhrbAbQE0DMAQ70vFUk0qj5pjyAKB9soc0U2FpFgetTqVX6ZitjYrSeec51f5TBKoA72vfGDdRdRDtq18jG2XJrSxNb0E8GTuDjBr2kOYWqesoMsLPHJnQDTVNJ%2FsHkEEr17xw53CKQV%2FJSEGlTiiFecwT8lmgYDA1%2B1y%2F0W2OAEYWtCHhNWiZtafn%2BqOVKsCysXTbNyImSKNhFI8hgFyN38cQDM%2FeeoXiNVo7mIG4bGZ48PdhF0W%2FXhyl2MkDSt3PflAxrnVP5hrJkwgfnJkoK63MWiI2BfKrMmPaeF4I03nXHCUFEm87rclU1h0W57ogadDybsJoyVLfsvuK9spBC973GK2dwsWCsdG4vPz4rAGVhMmIcXXX4r37%2FqeJMMilNZMXuu0Xk9cB2jsqe187EZEamhs7Xq16Km7%2BuYoadKt2h8YifIIpMOqA6cAGOqUBoXgNfT%2F9jRV7diJWUK3TnbkIgH9UlNNMmsu5w17344wFvIPuCiBSTruGpVZj%2B45NySTpfMsv8sE%2FCKh9xFADydLbrK%2F1z749Uf6i%2FpFAvVT6ilfCyX2z9%2FWKsP61Lu7zl9mCuvWHaRXQA5ktKwhMG9sG5S%2Bs17NtjdOM0c3sBJze6P0un7LNf8sr9I7%2BdOC2PGyQjcoienWXydbFH1UzAX5DwjPX&X-Amz-Signature=49ff2d877ec9a9494753f8b83f43573dea3fa12f4fbec81960c7a4f8df986b38&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIV65DOJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5eTKo6VSe9P9VrvViHLTjU3epvjiagCDAMVnIh9XIiAiA2sgs0Ursyo7FVLAEkB1V91yS43uxyLSrQ9ffwZCD0iSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMiAQpEBO7UG4l%2FdWxKtwDMj9QTtb%2FMWvcubXh9xIwiJGYghtpWyahXRy178BahNnup4X5w%2FK9KKWQG8EG2sVz3f%2BwMuAsY9vrgPeEtuQDXVivHCmsq%2B7FXy3n05r3CVI8CplSCFkByzBSGaOYayrEF7I6RH4A7gLaJin6qVyQL2AbptMVJEET8UCNB9J%2FCaPWPSFqOm%2FeilfsW%2FPI907GFBNPE17I76RUhXojC92zD%2F4BqXgOivguQAN3K8Ae%2Fk3qOigcvfDOdV5bDfmNUF1x%2BXr68aSOCB2dNMewzBtzZY8yoaX7cRjW0aCkWyu%2FUvI3LDSNdrCW35s47n4LJ4XDRaCEHMugS6NLDELIR%2B7GxOG7C0j7oTm5a4IpVgJTNtLfoFiZEF8emKkRkkHAlbdsTKXJ753lR%2BootO%2FAyIfxtbCZzMAXOeVzQ85UH61AjZivjzZGkpufODNfLSoLzCAGw6LjmrytoUJSdlJuMw7pcQvCHdS1EFdWsjmYx1OaRxfJQA7l0DUBaWNQm%2FjFLVUx5gP1cfRSZY%2FlfqwntKUqGryzZSgeshByX%2BPpijnAodmfAfxE6wzotU%2F%2FcQ2s1nzDX1cIQrdeRHO2TYTMqxqnoN70NY64eeCAK1G0MSkCtJUzHM9DEk%2Fvjn%2Fjiq0w2IDpwAY6pgF0t%2BvsEqsXbTfLHYth45zwMNyuOIsyWb12LCx9ObTNYrDv1RjYTPSZlyo9rgJoTRMF5eT%2BDfLuDUbiujhnrZLZx1M6YFB7vvUhiakj6bx8bk9poFYVFuTCVPnRKjFBs3KKjV8MkvwJbBIt1M3ZRfHkrcvWsyG4bQ%2BtOViJnhqr4Vv0OTOhDqnuWAY%2BpNG8iPT8%2BVB7ogygaropAiruzTVyrNDA%2BILM&X-Amz-Signature=262fbc2124b6eedc8d75dcb05c16d16c0b44817e9d5d7959d38922b61116ce0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FP5EAEE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGDSx1uiE%2FZOkBjv2KzjXNdCo2Dbsi7huaMH5RbA4473AiEA3dPaDpJShMrY%2BlCjCqPks6fDrTikV6HoOqiUz7f7L3Qq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJ1UmhyicV0ke%2B%2B3qircA6vJ3KoQf5Zwz5XnDMacohRXAwXtEv1UO9Ag1YbMZwldsO4HNkaHlDaEbz5UemlzdqLYpCI7KF%2BXUklTVqjSQNvR%2BLol94FzyBfYDj15az%2Ft2985J5b4qhJkyQZZjhYKb0X6IgyrBDPCKphIMYP%2F%2BxONV0dGtAKJIf7%2FCLlPJuytvdnffhlzdnyGfRGgfVOZbzEKxE5zlXbQFB2qCuoN3CoouZMe40bNYlogYMfrIQux%2B7q20SOZIRdt4%2Fu%2FbFsKysZ8W0omcaOUqDg%2FM%2BhaSQhuC%2Bbx96bhHL52Z9Lr7twV57pvzYEgBWPjWvqt4xVs0ig736gO9bHUsBEiBG%2FfxHChNx%2FvMUK88qoPJPeHo9tDXnvqRmXn0vFNopiqdVL2T8DeMmMykGLvMIldLuIEtB1TtTrhMdkVtkv2OzwvPsQfSUbML3gwki%2Fo8%2Fw7F5NdEbQvhJBL5fKDUWdP8EeRKIhjdb%2FYVCERXjPf1UY2Q%2BFGcirBcIkxLaxHtpjXnNxBvpLC8cypGoDwyMhq5VZD9Ci4kggoDtdRk6oxiqCT8z9ECPtCtpEel5ZMJELQrbBCIzHokbEkvteNkkUk9dyOHTyaEK1wAads8U7tEPAq1%2Bck%2BUoERHuGuQK4FgY5MMaA6cAGOqUBGXxbjSx54xme9ORc1Al%2BBx29ptMviNcxulxpeDJwdAznP%2BHkEkYkFWRyjLw0rfgjOyuhACSIqFOm%2Fhz6NbxYy3QIlGe0DzJYv9U1Gx43RdtzJoEz8UW658yMxEJv5cvwXPJQLxeeAXE3CC4r46T%2BQQjL0r4xop%2FNDP9ODiUUWx5G68o7%2BSGbFCFFoEUretGqJNzEsFhO4H5wsCgxRf9hs4o9uf85&X-Amz-Signature=4fb8135335f166a678f9c6d5b841bf72ded205123eab0ddcabd51595c16ab553&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M6JDEYL%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVQvOC4z8%2FnyVl1H1D6uD9Ket%2FB8mSbExp7FErxSLKgIgYWbj9UJAygt3GSiF6mZqUdXI6mALDOg0uQKG7emfSzAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDDpU86hlofHHw6BkxyrcA1x1QPdhkOF%2BS9s%2B0hhNgh8KdaNXg2cf%2B3BMy0Mkjhyw1TxPB0ZHpB45W4PZyPpCBKn1PB6DnTqFeq2ZoPjL4f%2BocDePb%2BB%2BGOxLgAt8hI8TAGy4f%2BFibpo9WCt0xQUhINomc21mRSfJo6fgsrdm4PB%2BquA2Jb21vSJyLqTMYB%2BG4kr6arySB44Grnq0KNo5rwYXa0dhrbAbQE0DMAQ70vFUk0qj5pjyAKB9soc0U2FpFgetTqVX6ZitjYrSeec51f5TBKoA72vfGDdRdRDtq18jG2XJrSxNb0E8GTuDjBr2kOYWqesoMsLPHJnQDTVNJ%2FsHkEEr17xw53CKQV%2FJSEGlTiiFecwT8lmgYDA1%2B1y%2F0W2OAEYWtCHhNWiZtafn%2BqOVKsCysXTbNyImSKNhFI8hgFyN38cQDM%2FeeoXiNVo7mIG4bGZ48PdhF0W%2FXhyl2MkDSt3PflAxrnVP5hrJkwgfnJkoK63MWiI2BfKrMmPaeF4I03nXHCUFEm87rclU1h0W57ogadDybsJoyVLfsvuK9spBC973GK2dwsWCsdG4vPz4rAGVhMmIcXXX4r37%2FqeJMMilNZMXuu0Xk9cB2jsqe187EZEamhs7Xq16Km7%2BuYoadKt2h8YifIIpMOqA6cAGOqUBoXgNfT%2F9jRV7diJWUK3TnbkIgH9UlNNMmsu5w17344wFvIPuCiBSTruGpVZj%2B45NySTpfMsv8sE%2FCKh9xFADydLbrK%2F1z749Uf6i%2FpFAvVT6ilfCyX2z9%2FWKsP61Lu7zl9mCuvWHaRXQA5ktKwhMG9sG5S%2Bs17NtjdOM0c3sBJze6P0un7LNf8sr9I7%2BdOC2PGyQjcoienWXydbFH1UzAX5DwjPX&X-Amz-Signature=224c0ce615653488a88c15a3bc60148ecfd49ba57c9b40c3ccd8f1d15f3a00ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
