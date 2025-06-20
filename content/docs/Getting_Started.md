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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVANVQQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1VgRi7W3fmgGw1Y0j46fJD9ShGSYbNORPTna%2FSunHygIgTYjtsVX1yGU%2B7jIsBCuMdzJwwMFV%2BbRvr3hF99hMQ0QqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaz0%2BUtumAyAqdg4yrcA9FBk5SUrzlPdNAglwi7GatTzx7Qx6yUXWC72JaIjZ%2B0XC8BCo4Z01Xnarn0DcIoYPfAWpLPyd4nQok049iEIk%2FDvE16IDriYJaJ7%2FZWVChrkp0Y6mUaG%2FHwin8%2FMir%2BR5s3%2FULhydw9W3Ankeq2OMp28M%2FsRfvY68aPf%2FTv0JHHnOH%2FM2AMP%2BusDLDwnyAQj%2Bnr6umvs9Zf9PicZlLocaV2vZTo0D6FLZWFiEzRgj%2B3cuRRPqQCV0kTnzxKHxvtu0Zfzgf3%2F9Hphk260vKitllHLAWGfDUjZOFNWTCY0DsdM%2Fm7xhcLv9wkqxuM2O5fwW66NWFI1%2FNphWbDleZ6MUuX%2BrnrRXGPqiyLL9ouUFzRQZXltgtJ7ALk8kHixLNvi0YKali6a3XRWCkNxp%2Fh9AI2P7L%2FmwVUtLv6caFODcRrABW7MGG4Q8BAaNgiSfn7kaNvyiLowYiGPNhROoM7Z9vd2kDDiUWjhCERE7fA6gQZT%2F3VzO1qlYuhunEQhSBfRD3IxbwTQUMTI3FyuQR1jjxfGUqpw26etJymSHE1eLtANxmP2oz918W5ge%2BUdRXjtbZi%2Fz%2BU6Z%2BolWHbQt5IXS063XEWSU47AFUYVpR3rB2iUPW5QOqw1zmCrMvxMKqK1MIGOqUBENWRwpAesCWu1EhIiElUN3fslY95LPWyQN%2FtO3qJiuhJWp6UTB7OyYzt3SIPrKxHLcsYUEGq45AjdBcfQWiXVPlCGbYzm9gTj%2BbtxbkJf7%2BodLs4CHoVHbD57NXJS4ygn8lGJDubmNWuEednrNL3We2%2BK9uT22dNtctaZ73pjn1aRjIQSUrnqxHW%2FmhsurZWcO%2BFV3xjy3QpLGed9AYsu%2FOIfa1I&X-Amz-Signature=f7ec7a209fb750d4c8f79db7375ab33695ed2fda504482a6c02ac4a6c2c4dbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVANVQQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1VgRi7W3fmgGw1Y0j46fJD9ShGSYbNORPTna%2FSunHygIgTYjtsVX1yGU%2B7jIsBCuMdzJwwMFV%2BbRvr3hF99hMQ0QqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaz0%2BUtumAyAqdg4yrcA9FBk5SUrzlPdNAglwi7GatTzx7Qx6yUXWC72JaIjZ%2B0XC8BCo4Z01Xnarn0DcIoYPfAWpLPyd4nQok049iEIk%2FDvE16IDriYJaJ7%2FZWVChrkp0Y6mUaG%2FHwin8%2FMir%2BR5s3%2FULhydw9W3Ankeq2OMp28M%2FsRfvY68aPf%2FTv0JHHnOH%2FM2AMP%2BusDLDwnyAQj%2Bnr6umvs9Zf9PicZlLocaV2vZTo0D6FLZWFiEzRgj%2B3cuRRPqQCV0kTnzxKHxvtu0Zfzgf3%2F9Hphk260vKitllHLAWGfDUjZOFNWTCY0DsdM%2Fm7xhcLv9wkqxuM2O5fwW66NWFI1%2FNphWbDleZ6MUuX%2BrnrRXGPqiyLL9ouUFzRQZXltgtJ7ALk8kHixLNvi0YKali6a3XRWCkNxp%2Fh9AI2P7L%2FmwVUtLv6caFODcRrABW7MGG4Q8BAaNgiSfn7kaNvyiLowYiGPNhROoM7Z9vd2kDDiUWjhCERE7fA6gQZT%2F3VzO1qlYuhunEQhSBfRD3IxbwTQUMTI3FyuQR1jjxfGUqpw26etJymSHE1eLtANxmP2oz918W5ge%2BUdRXjtbZi%2Fz%2BU6Z%2BolWHbQt5IXS063XEWSU47AFUYVpR3rB2iUPW5QOqw1zmCrMvxMKqK1MIGOqUBENWRwpAesCWu1EhIiElUN3fslY95LPWyQN%2FtO3qJiuhJWp6UTB7OyYzt3SIPrKxHLcsYUEGq45AjdBcfQWiXVPlCGbYzm9gTj%2BbtxbkJf7%2BodLs4CHoVHbD57NXJS4ygn8lGJDubmNWuEednrNL3We2%2BK9uT22dNtctaZ73pjn1aRjIQSUrnqxHW%2FmhsurZWcO%2BFV3xjy3QpLGed9AYsu%2FOIfa1I&X-Amz-Signature=9301cc9d987e296d3ec14a029b10fa3847877d1fba40817dd3bc04e8920c1407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVANVQQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1VgRi7W3fmgGw1Y0j46fJD9ShGSYbNORPTna%2FSunHygIgTYjtsVX1yGU%2B7jIsBCuMdzJwwMFV%2BbRvr3hF99hMQ0QqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaz0%2BUtumAyAqdg4yrcA9FBk5SUrzlPdNAglwi7GatTzx7Qx6yUXWC72JaIjZ%2B0XC8BCo4Z01Xnarn0DcIoYPfAWpLPyd4nQok049iEIk%2FDvE16IDriYJaJ7%2FZWVChrkp0Y6mUaG%2FHwin8%2FMir%2BR5s3%2FULhydw9W3Ankeq2OMp28M%2FsRfvY68aPf%2FTv0JHHnOH%2FM2AMP%2BusDLDwnyAQj%2Bnr6umvs9Zf9PicZlLocaV2vZTo0D6FLZWFiEzRgj%2B3cuRRPqQCV0kTnzxKHxvtu0Zfzgf3%2F9Hphk260vKitllHLAWGfDUjZOFNWTCY0DsdM%2Fm7xhcLv9wkqxuM2O5fwW66NWFI1%2FNphWbDleZ6MUuX%2BrnrRXGPqiyLL9ouUFzRQZXltgtJ7ALk8kHixLNvi0YKali6a3XRWCkNxp%2Fh9AI2P7L%2FmwVUtLv6caFODcRrABW7MGG4Q8BAaNgiSfn7kaNvyiLowYiGPNhROoM7Z9vd2kDDiUWjhCERE7fA6gQZT%2F3VzO1qlYuhunEQhSBfRD3IxbwTQUMTI3FyuQR1jjxfGUqpw26etJymSHE1eLtANxmP2oz918W5ge%2BUdRXjtbZi%2Fz%2BU6Z%2BolWHbQt5IXS063XEWSU47AFUYVpR3rB2iUPW5QOqw1zmCrMvxMKqK1MIGOqUBENWRwpAesCWu1EhIiElUN3fslY95LPWyQN%2FtO3qJiuhJWp6UTB7OyYzt3SIPrKxHLcsYUEGq45AjdBcfQWiXVPlCGbYzm9gTj%2BbtxbkJf7%2BodLs4CHoVHbD57NXJS4ygn8lGJDubmNWuEednrNL3We2%2BK9uT22dNtctaZ73pjn1aRjIQSUrnqxHW%2FmhsurZWcO%2BFV3xjy3QpLGed9AYsu%2FOIfa1I&X-Amz-Signature=96841f48190a5b335c2111bc62c57998b3312d657e02bf608f72803d37cc826b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H62AXZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT0R59kIT7zZ7g0kQLmM9LoQbK4O2UGTJFtSTaakXt5AIhAOyobpwbmr6WgYmf%2Fx4efkL%2BQ7eRcxDDtiRtuASLAcdSKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwK7SApF86uRAPEmEq3AOgspIIn1VR0T9W4t1RQYjCEdbbmokQx6Dpo1LV4cUBx5KJHwYUblj2zFhFzdxvPYz3xv363QgXjhp1plMCvKA2r7Nlp3J4bCpBZvV8xuwnJzsYoRrU%2BpGAtdp4o%2ByJX9D4HyAohHFq%2F9LuRc5Qj9kmeaP8JMehzOvndwhYZ1SDXuUb%2FcOP08B61D6ebso07lmIjVKsV9JY5KpsQGqmBdMABOHMCB4%2B0C8G5wUIqdJpEFyS%2B6krC6%2BuhDI3SZDFi20LoSBKwkfpD63NDT4rKh72639kqxoFnyiuI%2Bo6MdJrN%2Fgg3QifdX8l%2BtLIn%2BSX7bOgmQESqzGm0KPADqQpIasOG%2BqBr0uogeRuqzKPhl4Ha3L%2BS5pXHvIpM1gwF7bnb0w6DJRy8d2xXdBXm7yXNhUK0l4ovzYxz8tdtBeOL8Vh%2Ber6uCweRcLsU8%2BZCAUuAJp2plUdLivBVPbGLSlVgF0Q1vgwhPByIrcFIMFmlHURONTpRpoTib8sGCyUi3TO3XPWyO9EhZzwcQIBdEFIzZ%2BjBu%2FT7NCouj5Zgoecjse%2F6wpZ50j8xJHzfYyP9o%2BLcoyT%2FtXF5ym%2FPZTlfFYDDOR7U4V5uw1IcY4byl4anoLpGjENSOgiet4Rd7cgTjCfvtPCBjqkAaf%2FGlAzayjc8kjdqpRArBlefDEvpFGoTTafEJwgK%2FxBo6DYMMvD%2Fzqo9BKbQoymLyMhtst3vKBcnHsp9WaMjwijJoiQszIMINH4FOpSv9ByYoSNzYX0zG9RBqpViMMVYnYvExzq1U4unN4GWf5do3E8oIPYWDVy82sifaovylRngMHY9NoLuvfUVSe%2F3eIU7fTmi4Flrh3OyGD1esFuqGlyp4Ak&X-Amz-Signature=40e3b923727ab52dd10768b546dc940d1cc861f8438c20e37300deda755f6ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STMJQ2IS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqAH0%2B6CnqmUpPPn%2FfAHvBtEwaozMua6lXQHyzBI8T2gIhAO0UqHDyAI%2B93xSMXJA5f%2BHnQdTqP3VU3yLbhImbom%2BTKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyybrWvqyiiWuvWBzMq3AMBHcwv4n3o7Pt4d%2Fng8%2FbR1MCZiF8yBdQBw0bZdlnA2Pyq4zzAExek5fAhn%2BEm61yu1gm5meyW4GPnRedR3rcIIpBHenGh0phFxfU61YT75QhkC0VMoftcYYywkDEpGGixwtPUfW5DF07F8Zt72d4yvDDayrnu1XPT1brQtQJOqWGagAkSAAw%2BKl5GYs3ayB6y8cLVAGB6HRMT%2FdUI3eZDoCBlro0F%2BuqXwAFfUnEFfyn08Gpi3q1vizud1m2ktE%2Bc9WxFhC%2FME4OYmQ3XcFBvBU3WHpUCejHfys5R2GjBLvAO3utgK5TmDXMJV1akvTOAPBWHIgGOqC64mhjy99XvZESLBXQC%2BNf2PXS9JMgV0wKg8JcJjSjVn44L5vEqun8t25NFHoXMO5MbHuH0fk%2FokU%2FqjmBjxuGwnWGhRaG%2FUHKRshgNrWIavUCE57woY3lHxYzo6T3m3JiO5gMSZT0aBLz33hX9RwOHTT4rJ4nfQvTG01v0lSEs9CsWFU1wPOTkEodzCpPbelGu93eYCsE3v0TqiIjLINtC94v8k0r1mBsHQ4uycl6d6QIsPsHcnO6q8SnDuOey7CtfuEsxTsMgaMeMBAR2Up8AEm4skMtI9y%2BB063nrxbvzBeEjzCXvdPCBjqkAVI2zgaR1q3KYtkizJ%2FjiU4%2B2nKfXQHC6aMhritmnooeFcrz8atriE7Frs6DEN4sabOlcSLa11T9bnKLli9tCVskoGyaCFldV%2F3Z%2F97t5Lz5qlxlPRa0c6aUpsnyEgDyE%2FRQX2qlOoDvEo8dx5OReg85F95FiwmI%2FKno17jYziwAeIlrXgeK%2Fav%2FtREfnL1NcYZFZoLCu9GOW8ow9J7gahVBxq%2FG&X-Amz-Signature=36a7cb1b4adc146354d031fe59b341b497b55f4002baac0a3b724c3ce9104536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBVANVQQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1VgRi7W3fmgGw1Y0j46fJD9ShGSYbNORPTna%2FSunHygIgTYjtsVX1yGU%2B7jIsBCuMdzJwwMFV%2BbRvr3hF99hMQ0QqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaz0%2BUtumAyAqdg4yrcA9FBk5SUrzlPdNAglwi7GatTzx7Qx6yUXWC72JaIjZ%2B0XC8BCo4Z01Xnarn0DcIoYPfAWpLPyd4nQok049iEIk%2FDvE16IDriYJaJ7%2FZWVChrkp0Y6mUaG%2FHwin8%2FMir%2BR5s3%2FULhydw9W3Ankeq2OMp28M%2FsRfvY68aPf%2FTv0JHHnOH%2FM2AMP%2BusDLDwnyAQj%2Bnr6umvs9Zf9PicZlLocaV2vZTo0D6FLZWFiEzRgj%2B3cuRRPqQCV0kTnzxKHxvtu0Zfzgf3%2F9Hphk260vKitllHLAWGfDUjZOFNWTCY0DsdM%2Fm7xhcLv9wkqxuM2O5fwW66NWFI1%2FNphWbDleZ6MUuX%2BrnrRXGPqiyLL9ouUFzRQZXltgtJ7ALk8kHixLNvi0YKali6a3XRWCkNxp%2Fh9AI2P7L%2FmwVUtLv6caFODcRrABW7MGG4Q8BAaNgiSfn7kaNvyiLowYiGPNhROoM7Z9vd2kDDiUWjhCERE7fA6gQZT%2F3VzO1qlYuhunEQhSBfRD3IxbwTQUMTI3FyuQR1jjxfGUqpw26etJymSHE1eLtANxmP2oz918W5ge%2BUdRXjtbZi%2Fz%2BU6Z%2BolWHbQt5IXS063XEWSU47AFUYVpR3rB2iUPW5QOqw1zmCrMvxMKqK1MIGOqUBENWRwpAesCWu1EhIiElUN3fslY95LPWyQN%2FtO3qJiuhJWp6UTB7OyYzt3SIPrKxHLcsYUEGq45AjdBcfQWiXVPlCGbYzm9gTj%2BbtxbkJf7%2BodLs4CHoVHbD57NXJS4ygn8lGJDubmNWuEednrNL3We2%2BK9uT22dNtctaZ73pjn1aRjIQSUrnqxHW%2FmhsurZWcO%2BFV3xjy3QpLGed9AYsu%2FOIfa1I&X-Amz-Signature=b2e67d2867f175458772e341f16de9ea99ffac88b55540e4053ec17e8589ae70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
