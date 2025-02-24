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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFBIHDRD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ys8MeLJpHtBoy1qZq8hsp2034pb%2FUL51IMqBUHrrNQIhANMgoUEj0LpCKLDebYGtRH2otBmdJz0Wd6GwfrhMc%2FBCKv8DCDAQABoMNjM3NDIzMTgzODA1Igyr2qoDZXhc4ZbuD%2Bgq3AN8DPYlmbkhI81Lo%2FtjYIxGv0QJTc990QJHbeDl6RYBuyT1uGceDJAPUWrth2NEYvi7ZhjEMP%2Buvv%2FOCuF3fKyg6Rhlncx%2B87BdpJkXLDaaSQ4W6pqiRYhYgK67o9LJ7MTen1ODWzEm8LoU%2B%2Bflb66hru%2Bnd%2BMhA%2FsH35G76XUiviwTn6SFVgdEnMh%2FM9A8HWRJS1bKk9JjQqVel59BDbRC0jhDCR0pxXthdsk1KxkCzqR0JeAa0LBg%2FcutMT6roz8fLe3k2Kvx37DrWcfgI24IRX%2FQfcfid90TOKIQUWMU%2BJ0xcADFJbJNwcKjpPijmWYdMxoUGnc1SzpFNsR6CJVI93xEVjv4ZzU4ElDlD%2Bm3uMXRa9C2BRSXeE%2FnsvNH%2FoK%2B7AvvuSmHLmMlqdVCKt9IV7R4PtDQSOr5%2FGsaMw6xcoTE3c6%2Bn7mH7FHmPg9jNc6Jk6JsZVAM52tsUXwkcXtaC1ANTEPSqLxQX11o%2BFQlWuH3u%2BCfaWvFKc%2Bm5bgB92mcs7A9kiP2jnPwTfkbf5Jnw4tXCBqXvbFCda0xYfALqPhu50Rq2jECTpkD2ruKxF11K%2BbdmbJxkkZWBjXy%2BdD5Llshe0a479jsUhahmzfk%2FiTh4ZgMD5KUzn6UATCunPK9BjqkAaSt5%2BEAeRG%2BqTfNhx28jx9DzHRLEiJiFNidKepHu4AVfP85%2FSjwXnpxPVbHIJPNW3bmlCLWknHo8JaKZES%2BFEIgANK0nsBn3Of2tl2%2B0EQSgFjZtmxg4IdluHty6Rwi8CxB9Q7LrtVlmxB5PrPz84Y%2FU%2Bv5padjgxj3FkbCfpxKwhNBlsdjDy6mX7IUcxKmzOx79vbHBFAohUmFS0OAErKVAEY%2B&X-Amz-Signature=64938e10bfe666ae16f7238cea318554ccbd4d190a20fbf25f1285ce0a52c3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFBIHDRD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ys8MeLJpHtBoy1qZq8hsp2034pb%2FUL51IMqBUHrrNQIhANMgoUEj0LpCKLDebYGtRH2otBmdJz0Wd6GwfrhMc%2FBCKv8DCDAQABoMNjM3NDIzMTgzODA1Igyr2qoDZXhc4ZbuD%2Bgq3AN8DPYlmbkhI81Lo%2FtjYIxGv0QJTc990QJHbeDl6RYBuyT1uGceDJAPUWrth2NEYvi7ZhjEMP%2Buvv%2FOCuF3fKyg6Rhlncx%2B87BdpJkXLDaaSQ4W6pqiRYhYgK67o9LJ7MTen1ODWzEm8LoU%2B%2Bflb66hru%2Bnd%2BMhA%2FsH35G76XUiviwTn6SFVgdEnMh%2FM9A8HWRJS1bKk9JjQqVel59BDbRC0jhDCR0pxXthdsk1KxkCzqR0JeAa0LBg%2FcutMT6roz8fLe3k2Kvx37DrWcfgI24IRX%2FQfcfid90TOKIQUWMU%2BJ0xcADFJbJNwcKjpPijmWYdMxoUGnc1SzpFNsR6CJVI93xEVjv4ZzU4ElDlD%2Bm3uMXRa9C2BRSXeE%2FnsvNH%2FoK%2B7AvvuSmHLmMlqdVCKt9IV7R4PtDQSOr5%2FGsaMw6xcoTE3c6%2Bn7mH7FHmPg9jNc6Jk6JsZVAM52tsUXwkcXtaC1ANTEPSqLxQX11o%2BFQlWuH3u%2BCfaWvFKc%2Bm5bgB92mcs7A9kiP2jnPwTfkbf5Jnw4tXCBqXvbFCda0xYfALqPhu50Rq2jECTpkD2ruKxF11K%2BbdmbJxkkZWBjXy%2BdD5Llshe0a479jsUhahmzfk%2FiTh4ZgMD5KUzn6UATCunPK9BjqkAaSt5%2BEAeRG%2BqTfNhx28jx9DzHRLEiJiFNidKepHu4AVfP85%2FSjwXnpxPVbHIJPNW3bmlCLWknHo8JaKZES%2BFEIgANK0nsBn3Of2tl2%2B0EQSgFjZtmxg4IdluHty6Rwi8CxB9Q7LrtVlmxB5PrPz84Y%2FU%2Bv5padjgxj3FkbCfpxKwhNBlsdjDy6mX7IUcxKmzOx79vbHBFAohUmFS0OAErKVAEY%2B&X-Amz-Signature=133e79eb1bb35a82f709eee0016a93466dd27f5b64806f77f0a05e42d4b4872b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFO2CTXJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDweGiV8O9JYqkmrsrqz4%2FibA%2F1qFjDGliM0odFi%2B96NAIgRK%2Fg%2FXodjnpQpN3Tg4VjiIIHXiX2u9Vw7vUz9IAlY24q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGAsE2zuZ9VPSfBrdyrcA%2FqkiJv3n%2BznyT4aLPvvqeiwDWBzeUkYvRvXMAOa3lqCSyeXzo96lyaAGen2vb3v0%2FIOJgWCfecrJSoDvoSTfgVBdCBo8wl6mCEPWr%2BT0YFuqSjUgfZXHP%2FV%2FUA2I0WPs4HSX3CSfqo6Ne5bLEP%2FqsVNNJhGpeCHttezRS47TQEsU6zUTSvpf6nrH0ZsKkqiHEHui%2FCJWuX5iQCbD7XA88g6zV1a0x2yAalSPDpFZFvtr67SIGWsIwg%2BmuvC58O%2FCOp30K7DwVVqa2iWpILU1n95mHUAQ7uw%2BUERcRxFdYQsUDIsYvN3HNw0RCSqx7E5TCUWPR%2FOhGWvjUzT9MinnnYnCaDxyUfYvBASlkBMP%2BMUX6J9iTIEoTZTyvsO6A6uKVg9MfjKVGKewsosy5Z8V%2FP0EaBt%2FdN%2FL0Jft9jduCUR%2Bnt%2FH7lLf2%2F%2BSH8lgek5U1Nk%2Bj3g6296xGkqT3tk2Zo0HAfz0gYXhJ4vuquoyuHyWOF%2BuNu9FQQo%2FDBUR9vM%2FsIMYSyouOsjK5s%2FFIHN%2BxMKDoIagYZPeCGYFb35WyxxDejLFIewSyiBfYxVuW%2FhoT2O45IBBRlZ8AcPnUlB9GwRg0GXhMWUr%2BdKi99%2BF8ff5sTDceoqawJnwD87MJyc8r0GOqUBYLcDseLqJuIjsZ8uMmOkPLHsDuMrC2Uu1yWFicLB0U6b3QjcbF9T4M8GGNYBpSp8bbXuM%2FBiptsi88y%2FmKNQRJiwdR1HEsOcT468kVZw5q6svAvnAA8%2FImByOMGjSxqJMZLjDuU1tr9tZBaYxFFAa08vKPDxMtUf6MIWX2OFajv%2BcbaXNtBJALYUex8AkMo%2BLl8QXcJtpPrupn64vlPutWG2nVnl&X-Amz-Signature=1777f4965c96bf3643ce50f817af0e761f1a2154a81ae292a56fd4f1b6436818&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOLZWITC%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGckB8rl0524rTzZd%2BvGXysyNrEPAUzC8Mbz5b8LzSmjAiAuZJLazwaZ%2F590aKTisWULpTfNk54IMOxwsS0eKx%2FD7Cr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMCIcbEYDwSn5ix8gwKtwDB4MISykFJ6yguoptStv92XJ%2FAjNH%2FbDq%2BvViPn%2FlpN5FYEaLzJ%2FlOgkAiPobDD5wf0eZPok5vtNEMn4c1Wso1Fhilr%2BfLyNPRFb%2Brl0rl%2BUUIjxaCvyMkQc%2FN%2BSjY%2BrxgszD%2Fr9fihmPCPWulHE5i913TvN7MVkQkFEM946WAg30I8SPhqOJF6Fh9ruLUnOAnPRyK8p6eUjRNmU13qNZ%2BMGeCm8oi5f8gZBx4rkdSinS8fOCweih%2FwK6E5myhqIDasYh6m0VGYreY2Jt422NrXeILHAvMoGVpYFZ4a%2FVzR5pIYS5f7BV4yUbZWaGm%2BsDoSCIMmQlrmXEsWyqTNbBg1j3XDwaOs390HUO8kEHNm19oFBo91DicWLVUWWfeAexYxeTuHapCE5VBzGzR%2FCiONtZIWO8UFjEdaIvyw5YJ7je3O5E33ug39EjfiS8pHwS2wWKF6sR6E%2BfZ0PqFFr%2BEzEqQWph33cedBt2%2Fq3v0c5DOVUbvhJieC62H9n3U5rngzFu1m8rdrQFXLLtyX5pcWmbPCon1BeUNqz08VSaCjzmxqiDM4P51hohudfui%2F1dmLAKyfCU%2BCv7IvxoxX0xgv%2BtRVW7fUELUPpBCpOaGNw7x6S6eM3reeJLR4MwppzyvQY6pgHfDsgY9zMuGEPvmjShl2yd8G%2BTpzTxFM1Ip%2BwdwwBtC2s8Mafk%2FdAWsvSRBSC0%2FhWPsplggU%2Bfcy4m1AfMSG58l531eaTY%2BhGZc739VGCB90y4aMXzWueH58VTu1G%2FNxSpi3zfRKdNoPCwMF0fFmG679OHNpHjIJ40gBTN5%2FnQCRlOXOebshyape5lgCSLo8FzTWllul0%2BieCaP3fKtQvXjPcnniXM&X-Amz-Signature=c1e2c6f6e4703e27f9acd99011ca4511a01925115539f503ebb8dafcc3902430&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFBIHDRD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5ys8MeLJpHtBoy1qZq8hsp2034pb%2FUL51IMqBUHrrNQIhANMgoUEj0LpCKLDebYGtRH2otBmdJz0Wd6GwfrhMc%2FBCKv8DCDAQABoMNjM3NDIzMTgzODA1Igyr2qoDZXhc4ZbuD%2Bgq3AN8DPYlmbkhI81Lo%2FtjYIxGv0QJTc990QJHbeDl6RYBuyT1uGceDJAPUWrth2NEYvi7ZhjEMP%2Buvv%2FOCuF3fKyg6Rhlncx%2B87BdpJkXLDaaSQ4W6pqiRYhYgK67o9LJ7MTen1ODWzEm8LoU%2B%2Bflb66hru%2Bnd%2BMhA%2FsH35G76XUiviwTn6SFVgdEnMh%2FM9A8HWRJS1bKk9JjQqVel59BDbRC0jhDCR0pxXthdsk1KxkCzqR0JeAa0LBg%2FcutMT6roz8fLe3k2Kvx37DrWcfgI24IRX%2FQfcfid90TOKIQUWMU%2BJ0xcADFJbJNwcKjpPijmWYdMxoUGnc1SzpFNsR6CJVI93xEVjv4ZzU4ElDlD%2Bm3uMXRa9C2BRSXeE%2FnsvNH%2FoK%2B7AvvuSmHLmMlqdVCKt9IV7R4PtDQSOr5%2FGsaMw6xcoTE3c6%2Bn7mH7FHmPg9jNc6Jk6JsZVAM52tsUXwkcXtaC1ANTEPSqLxQX11o%2BFQlWuH3u%2BCfaWvFKc%2Bm5bgB92mcs7A9kiP2jnPwTfkbf5Jnw4tXCBqXvbFCda0xYfALqPhu50Rq2jECTpkD2ruKxF11K%2BbdmbJxkkZWBjXy%2BdD5Llshe0a479jsUhahmzfk%2FiTh4ZgMD5KUzn6UATCunPK9BjqkAaSt5%2BEAeRG%2BqTfNhx28jx9DzHRLEiJiFNidKepHu4AVfP85%2FSjwXnpxPVbHIJPNW3bmlCLWknHo8JaKZES%2BFEIgANK0nsBn3Of2tl2%2B0EQSgFjZtmxg4IdluHty6Rwi8CxB9Q7LrtVlmxB5PrPz84Y%2FU%2Bv5padjgxj3FkbCfpxKwhNBlsdjDy6mX7IUcxKmzOx79vbHBFAohUmFS0OAErKVAEY%2B&X-Amz-Signature=463afac2817151b65935610e7fe70b2ba174324a2fbd7dbccde72bc705a12809&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
