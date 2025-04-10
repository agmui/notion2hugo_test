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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIED2G5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIA6jNtF%2FE3DamBUNZBGKkbrzuU0Qj9aDovysoNLSI05xAiEA%2BNzSoxh0LW2nldYoug%2FHin7SubqAiLnzfatAqh3a4jAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPsqSzcvdeau%2FESUCrcAwHd61fFOomsZMKTAUfbjDM%2BKG2YmvvvR27AkKpK0xfKCGV%2BnHxtWZ%2BXZ7oZtzz2MgL2NxWnY8xd0HdmbZK4hnW9Jlgqd%2BEinSq9rzfP%2B%2BG1lgr8Zaw%2BWaK5XVN0KarzEnFRfxHX%2BxrfDNiQmY7lAZmpk2lbsPUj9uRhZDP8I4foNsKZr%2FuygqGzcXL0gt2MgfX390aUW4Gne1esNwtiaJ6XBN7L5mqy7eoAVtfxEjmxGDLilRzB7olW7zLHWgU%2BeSwNMZLjkO7Uu177%2F%2B8F%2FH07UjFfv6HP3KLIWO83pDEtxawp3ZY86NoHk1QdwCqGrb0FMPczRyHggFVj6M9wxzwf7rdOIyUrzGF5ySyduKzLWfDoOS8CkvSW2Mpa25jmEgjCpz3SCu%2F1O68DElIKhhEGFpQ6IFWeBDLQbY79qMH%2BrLjBX6GnPfh18AQHcvPuFwbEktfcmcYtG42sU9yqwlrIHG3oV3WyG9XAkhMBpPMJSuNClEEUjSfIEmZrr9qgVEano436DTdraMZ6pvTI%2FW%2F5%2FPDkDyC5ngJdq5f0EGDMqvKrZsua4rjDEkNaBRH66cmFH4LCsCgpfpNXEVWVNNHcl5PMu2htAM3fuBIkWOvcYHIZfnQZDc681AOrMP%2BL3r8GOqUBFAg%2FnyvEg5Ich9eFOHUqfnWQKfItMcr2CNiBx46cZlC4pbd6TfulAe7Abs9snVC1NVS4a00xAmDSxufbySNCWi6ALacEr7kScdIffsCt4ZI5yFXxelcmUk7jLjRGuROMhqHh4RqVs5bZWSeaLEl4TjMeOHbxNXaMgUVNltIrn9NcG0LQtE8KRPNMAIjvJReB6jZnwQ3z%2BQctKqSnnK27GUa1G0zO&X-Amz-Signature=9b9526f63abe30ad12e6681f55e01cb71cdec9ae9695bf0d3d4bda606086500e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIED2G5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIA6jNtF%2FE3DamBUNZBGKkbrzuU0Qj9aDovysoNLSI05xAiEA%2BNzSoxh0LW2nldYoug%2FHin7SubqAiLnzfatAqh3a4jAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPsqSzcvdeau%2FESUCrcAwHd61fFOomsZMKTAUfbjDM%2BKG2YmvvvR27AkKpK0xfKCGV%2BnHxtWZ%2BXZ7oZtzz2MgL2NxWnY8xd0HdmbZK4hnW9Jlgqd%2BEinSq9rzfP%2B%2BG1lgr8Zaw%2BWaK5XVN0KarzEnFRfxHX%2BxrfDNiQmY7lAZmpk2lbsPUj9uRhZDP8I4foNsKZr%2FuygqGzcXL0gt2MgfX390aUW4Gne1esNwtiaJ6XBN7L5mqy7eoAVtfxEjmxGDLilRzB7olW7zLHWgU%2BeSwNMZLjkO7Uu177%2F%2B8F%2FH07UjFfv6HP3KLIWO83pDEtxawp3ZY86NoHk1QdwCqGrb0FMPczRyHggFVj6M9wxzwf7rdOIyUrzGF5ySyduKzLWfDoOS8CkvSW2Mpa25jmEgjCpz3SCu%2F1O68DElIKhhEGFpQ6IFWeBDLQbY79qMH%2BrLjBX6GnPfh18AQHcvPuFwbEktfcmcYtG42sU9yqwlrIHG3oV3WyG9XAkhMBpPMJSuNClEEUjSfIEmZrr9qgVEano436DTdraMZ6pvTI%2FW%2F5%2FPDkDyC5ngJdq5f0EGDMqvKrZsua4rjDEkNaBRH66cmFH4LCsCgpfpNXEVWVNNHcl5PMu2htAM3fuBIkWOvcYHIZfnQZDc681AOrMP%2BL3r8GOqUBFAg%2FnyvEg5Ich9eFOHUqfnWQKfItMcr2CNiBx46cZlC4pbd6TfulAe7Abs9snVC1NVS4a00xAmDSxufbySNCWi6ALacEr7kScdIffsCt4ZI5yFXxelcmUk7jLjRGuROMhqHh4RqVs5bZWSeaLEl4TjMeOHbxNXaMgUVNltIrn9NcG0LQtE8KRPNMAIjvJReB6jZnwQ3z%2BQctKqSnnK27GUa1G0zO&X-Amz-Signature=3179202e7b8a8b39075cf623598cad09613e91429bec3d773b429f5e3c4dcaf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673464RIE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCpatpOxloNs%2FcMkdLNfSO6v%2FMQk8mvZVO1iAa3wwg5LQIhAJHd35u5DjYRwAsTszVX3XHMVtyulaI1w%2FE4xAZngApUKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTiAriftfou3rc%2BMwq3AOnDum95AZ2YYUp8E%2Fb077arAAJhTTKfMOdHpibTV5tL5a2GG2sj5%2BpX9blZhfZ%2BYJGpJzYk1llUKh4P4GjGF6w6ANSRQenUzh4ng6HQz%2B%2F5aCnfJW9%2F6QqMeEe87uvj5v2T7Q6D6Ed9goX0JCrL1iKIybd6IwhdN7zfNTU2P1qmwelpccksOXZQf0sJZiZx%2FqCMXNHchc5eHhICGQyh81j506lUQ9xN%2Bmb7sBxIVUdA%2FC7ayxHp1QTyC2gJsDZyaGBbLIx%2FFWSrbKB8eybo0ONRuBdxZYCZJ83l4iQPTlBzU5wv8C2SU2OwB97fIkJZIW24g4b0KIb%2FD4rlSfETAJf0OpK4GBstbijxKJ2xg09ZQvLxTBFSBM3Ei1MDK2%2FJhSrUX8618Bs%2BYTaR0Kv5FkTeN2N9PWvGPf%2BrvYSnLWTetcDUmEhjx%2FN03wOx99oKd7E2fuYOOXKSDzeblXPbk5TTDLTEEBIH2y68Hg3pNpwgeFh6dDT3q2ybVacmizpwjb7le3MTfv2NFROQYUOE4BH7QSzpxjY6ewjfrKM64RmSpUmp3eXKv1KOXyj34TNZqn4IFL66eXgN9eRxr0K50HNF2K%2Bs%2FziPbgzPC8bn3xvC8DcZ9Om1hriHsmfGjDYjd6%2FBjqkAd4KZXmer6OJdH4RCLJv8tReYbHHE%2FnLFKZbe7jxPBbVRsCUrLy8%2F9bsnP0%2Boq6epJd1W4OSoueoJ0MiogjCz5pMNeE5ic6bGkr9N1neoFChDvqh2D2VwqerYqFEbqlmPJl9CjkFbWYP%2FoVttjO5JRqJiu9gwQbc5syGsApWKikzGJ3LeaLgkHsXRutcn6P2JQvwEbOCGlICYvSeZqaw0FCkSSJG&X-Amz-Signature=78fe467d7fca4aa9e7c62a029b0f81118e30ed6b7efc55f4669bf651c8b60c31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD2MFG5Z%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIHpTM1VPN%2BpfzHP1%2BdOK8Yt2yfR6ZdxzfhQYA3jiS1wNAiEA3O9J%2F4LaExpoVzIHJ6Gjc%2BjHrIp0Ao%2BaL2OwIV1yu%2FIqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzYIa%2BMQbicNTl47ircAyF%2F5EQxD4E1F%2B0HUoWa651lPo0Omdc2lKhzTDTG5zlUHmz45qdHtk2xAKsgu6d78Z3q2W37zsO46Kd0wV0r%2BfzLZHys%2BQIx9yK7K4I3x1An%2BjCeOieOAhR7nyvjcFZ%2BG2TraEWgV%2FhgexCqM6CY9JslEmgYCaRaq3VDsNoNRmV0IyKTC2wkjXZblEDNatOer58Q6geCjPrG4kYyTbiXCKT6R%2ByMdJdvNTbHBFsQOyMxicEVP%2Focm5dxAYLn6OtugiHAfLK%2FE%2FA1JqFA8WpiFKhXDUE2cIiLfsPUwBgpeoYrcfh6OCZwTgTgeUudMcka%2BRj2sfB88mcIvWEhVdEf5rV04rqhvFlB1FSHFB1Gm45hAEhddxIiRzktPioHx8hzke%2BaZzH2kBTHic2XA9zRmG5OJWyI8EMg0mPYqOvQCiPqD0CnUMS2dqqioDzHiBWaVUOdjD6eaPayimnKLtpDCyLv3uhQrH0oYKbLf7qbTDeGKlkdvK0W0TL9SOFScvsaLsCDTt68TX08IEn6pTZ2xA5eTBkV6Wl3ZN8ABqOt%2FYbQ6mgXmyer58PcXYvVGp8QSMkDxP5qQaW028MpwItl0DEpo8of8gAjN0SVhqPV8Ok86LSrTkXQ3w%2F72uBTMMiL3r8GOqUBazVOFUFmknR0yXH3ZNYt7EKaLCTZ6jqg7m4fSbQJ1i1ROSi5OdUIT90CYwj2lxQbi1Euc5DAgicGs2Rxu78Hqih342dp0oe2AuvloVwcF8SGhvKvy5Nl4vxgLcxlCysj3yIT%2B3UW65UeeyRwdJpl2Edv%2BeGKPgxH5DFypUQfOETFek%2BFlpAMOZFxiIf76%2BCU%2FVSap9WwJNCsRirKH0rR6VeYyaa8&X-Amz-Signature=368cbca1fe93a73b0cf6f9feffb7e6dbf0b9a9c374f9a7e7277b1f76f1730f95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RIED2G5%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIA6jNtF%2FE3DamBUNZBGKkbrzuU0Qj9aDovysoNLSI05xAiEA%2BNzSoxh0LW2nldYoug%2FHin7SubqAiLnzfatAqh3a4jAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPsqSzcvdeau%2FESUCrcAwHd61fFOomsZMKTAUfbjDM%2BKG2YmvvvR27AkKpK0xfKCGV%2BnHxtWZ%2BXZ7oZtzz2MgL2NxWnY8xd0HdmbZK4hnW9Jlgqd%2BEinSq9rzfP%2B%2BG1lgr8Zaw%2BWaK5XVN0KarzEnFRfxHX%2BxrfDNiQmY7lAZmpk2lbsPUj9uRhZDP8I4foNsKZr%2FuygqGzcXL0gt2MgfX390aUW4Gne1esNwtiaJ6XBN7L5mqy7eoAVtfxEjmxGDLilRzB7olW7zLHWgU%2BeSwNMZLjkO7Uu177%2F%2B8F%2FH07UjFfv6HP3KLIWO83pDEtxawp3ZY86NoHk1QdwCqGrb0FMPczRyHggFVj6M9wxzwf7rdOIyUrzGF5ySyduKzLWfDoOS8CkvSW2Mpa25jmEgjCpz3SCu%2F1O68DElIKhhEGFpQ6IFWeBDLQbY79qMH%2BrLjBX6GnPfh18AQHcvPuFwbEktfcmcYtG42sU9yqwlrIHG3oV3WyG9XAkhMBpPMJSuNClEEUjSfIEmZrr9qgVEano436DTdraMZ6pvTI%2FW%2F5%2FPDkDyC5ngJdq5f0EGDMqvKrZsua4rjDEkNaBRH66cmFH4LCsCgpfpNXEVWVNNHcl5PMu2htAM3fuBIkWOvcYHIZfnQZDc681AOrMP%2BL3r8GOqUBFAg%2FnyvEg5Ich9eFOHUqfnWQKfItMcr2CNiBx46cZlC4pbd6TfulAe7Abs9snVC1NVS4a00xAmDSxufbySNCWi6ALacEr7kScdIffsCt4ZI5yFXxelcmUk7jLjRGuROMhqHh4RqVs5bZWSeaLEl4TjMeOHbxNXaMgUVNltIrn9NcG0LQtE8KRPNMAIjvJReB6jZnwQ3z%2BQctKqSnnK27GUa1G0zO&X-Amz-Signature=7bea9e9e86832fc517c9ae2d31400b7b0bdfb575819efdf14fc9a890ebd39bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
