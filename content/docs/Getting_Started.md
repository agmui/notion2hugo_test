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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGXAWMR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG4k3HBdojULgJvGn7mXd1%2B4BwuLV2gV8rBMLIldlwxEAiByFSy1MhliMMfigczCKxPcRm1eeVhOl0lpX7NqDoD1Eir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMBgh3SUuRNTechfLvKtwD7RqvmBaH2z07SbnhIk%2Bv6iF3eb5oDCb4qA2K8mh9okPEgDzh9asTT7w8PxGx91kFWBhTcezLNLp8R6xDqWfghDP24PNvMZbjjrEsV1gePJvc3ewm6WiXM6mdQn46XSUI2IeSHM1cXAchYqYt9mjGz6ViqXKaJw86uFcP4fjuAqxKK0xjT7hSBMvSUMJ5E1byKUcC8KIN3hP8YTjMfjZFTzBqAbs0%2BSHAcA0qYV%2Bm06naT3SN%2Bly%2FgU4RF%2FkHaEnWBHLzGAKIFtI22DFVAA5X82daNgj9YIVH0aOG2S%2By1Bc%2FPxNBWXWRRtcgW%2B80%2B6sQJvllYGs%2BgOrgf3XAYRlUD3F69AFsaZqS%2BAP0nXV6wqcGX4hSmJGsC6J%2BtHao0wzlGEr2sHp7HQLAIyFDN6VzUeiD0EMIchdjJhdeMYBsAW0aV4%2BP2pB9LOaAHcXDvoz%2FUBDDViDUqjgbtjRuC%2Byt5EelrNIOlBrmyHXQVQWbOaSsMi%2FYlGrFbgO63N%2Bvca8kittr41dZtMVM00dd1Y4WxZqCt82dKqi%2F4awSYHhTN4bXwrbJRFGiqUIT2BsqxxSYdjpbpNFGJkvWP%2FccGlzegUKdGsynFBGGy6ZIi%2FPIuAVI%2FlkCj98QZYaZAi8wuZ2RwQY6pgFK5ndU65iz66bmHZasRr%2BJPa81rAv%2FDwZMnTBMWtv7CPlpKtLufGiwfQjIfxUhdgBOqr%2FiZ7MoPVnGPzaDhPxpdlupgYlVeWiclznx2M6U4yHupW7xEyFTf%2B7dz%2Bdll8XvtHTSBiciZ1ChbQvN%2BnzFbDPUY8GFfigjkxWxm317zyv9osMiJNG%2BX3eehmH9QKhyw2JZe9Q2DZO3MA2GuvV9ve8hl2iK&X-Amz-Signature=3e44066233156a33fb92fd24ef01f74dd5a8bf20e2828e46622cfd2d7f4a53a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGXAWMR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG4k3HBdojULgJvGn7mXd1%2B4BwuLV2gV8rBMLIldlwxEAiByFSy1MhliMMfigczCKxPcRm1eeVhOl0lpX7NqDoD1Eir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMBgh3SUuRNTechfLvKtwD7RqvmBaH2z07SbnhIk%2Bv6iF3eb5oDCb4qA2K8mh9okPEgDzh9asTT7w8PxGx91kFWBhTcezLNLp8R6xDqWfghDP24PNvMZbjjrEsV1gePJvc3ewm6WiXM6mdQn46XSUI2IeSHM1cXAchYqYt9mjGz6ViqXKaJw86uFcP4fjuAqxKK0xjT7hSBMvSUMJ5E1byKUcC8KIN3hP8YTjMfjZFTzBqAbs0%2BSHAcA0qYV%2Bm06naT3SN%2Bly%2FgU4RF%2FkHaEnWBHLzGAKIFtI22DFVAA5X82daNgj9YIVH0aOG2S%2By1Bc%2FPxNBWXWRRtcgW%2B80%2B6sQJvllYGs%2BgOrgf3XAYRlUD3F69AFsaZqS%2BAP0nXV6wqcGX4hSmJGsC6J%2BtHao0wzlGEr2sHp7HQLAIyFDN6VzUeiD0EMIchdjJhdeMYBsAW0aV4%2BP2pB9LOaAHcXDvoz%2FUBDDViDUqjgbtjRuC%2Byt5EelrNIOlBrmyHXQVQWbOaSsMi%2FYlGrFbgO63N%2Bvca8kittr41dZtMVM00dd1Y4WxZqCt82dKqi%2F4awSYHhTN4bXwrbJRFGiqUIT2BsqxxSYdjpbpNFGJkvWP%2FccGlzegUKdGsynFBGGy6ZIi%2FPIuAVI%2FlkCj98QZYaZAi8wuZ2RwQY6pgFK5ndU65iz66bmHZasRr%2BJPa81rAv%2FDwZMnTBMWtv7CPlpKtLufGiwfQjIfxUhdgBOqr%2FiZ7MoPVnGPzaDhPxpdlupgYlVeWiclznx2M6U4yHupW7xEyFTf%2B7dz%2Bdll8XvtHTSBiciZ1ChbQvN%2BnzFbDPUY8GFfigjkxWxm317zyv9osMiJNG%2BX3eehmH9QKhyw2JZe9Q2DZO3MA2GuvV9ve8hl2iK&X-Amz-Signature=89414d2bdff73d0c456b558cb21410dae0d449cfeb00836ece8c6810ae444b06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGXAWMR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG4k3HBdojULgJvGn7mXd1%2B4BwuLV2gV8rBMLIldlwxEAiByFSy1MhliMMfigczCKxPcRm1eeVhOl0lpX7NqDoD1Eir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMBgh3SUuRNTechfLvKtwD7RqvmBaH2z07SbnhIk%2Bv6iF3eb5oDCb4qA2K8mh9okPEgDzh9asTT7w8PxGx91kFWBhTcezLNLp8R6xDqWfghDP24PNvMZbjjrEsV1gePJvc3ewm6WiXM6mdQn46XSUI2IeSHM1cXAchYqYt9mjGz6ViqXKaJw86uFcP4fjuAqxKK0xjT7hSBMvSUMJ5E1byKUcC8KIN3hP8YTjMfjZFTzBqAbs0%2BSHAcA0qYV%2Bm06naT3SN%2Bly%2FgU4RF%2FkHaEnWBHLzGAKIFtI22DFVAA5X82daNgj9YIVH0aOG2S%2By1Bc%2FPxNBWXWRRtcgW%2B80%2B6sQJvllYGs%2BgOrgf3XAYRlUD3F69AFsaZqS%2BAP0nXV6wqcGX4hSmJGsC6J%2BtHao0wzlGEr2sHp7HQLAIyFDN6VzUeiD0EMIchdjJhdeMYBsAW0aV4%2BP2pB9LOaAHcXDvoz%2FUBDDViDUqjgbtjRuC%2Byt5EelrNIOlBrmyHXQVQWbOaSsMi%2FYlGrFbgO63N%2Bvca8kittr41dZtMVM00dd1Y4WxZqCt82dKqi%2F4awSYHhTN4bXwrbJRFGiqUIT2BsqxxSYdjpbpNFGJkvWP%2FccGlzegUKdGsynFBGGy6ZIi%2FPIuAVI%2FlkCj98QZYaZAi8wuZ2RwQY6pgFK5ndU65iz66bmHZasRr%2BJPa81rAv%2FDwZMnTBMWtv7CPlpKtLufGiwfQjIfxUhdgBOqr%2FiZ7MoPVnGPzaDhPxpdlupgYlVeWiclznx2M6U4yHupW7xEyFTf%2B7dz%2Bdll8XvtHTSBiciZ1ChbQvN%2BnzFbDPUY8GFfigjkxWxm317zyv9osMiJNG%2BX3eehmH9QKhyw2JZe9Q2DZO3MA2GuvV9ve8hl2iK&X-Amz-Signature=b4af6bc0a65a5afa2a2f8298449ac7a6e07221738aaed4316e159c28166925df&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FWSJIA7%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCsFNhUR9aMyx94MchMwQYFI3U0B1ihXY81VYmNZ8jx9wIgQt%2Baj9fuA1HlFY2CyywNoLVSdsQItPEb%2BgM9%2B3Udwbsq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDDZ09GA3N3Pot11ndSrcA7rElqpIe3AiA7l2ILcngbyHysVAna04K3nr35gsgnRA6C1HLmW%2FeJWLKdOPNqlkeeaQF8%2FvXf7376ZDio6w6FXWrwNwJVS7hrNqRwzO%2FTQ5DTTHyBSCp3%2FSlhZ4k7CqfJUThfySHvbzRGPPjP7pxE8wEE%2BkBbwszYbPk9Jle%2BwqB82Sh0fOcJ7qe986QMcRUujvo%2Bo%2FZaXN537TXVD55xIYhyEFE8NOhZUS61v3TGNeJtIuaoB4F0qzkrvs4ks5T73EYWinTm2JTGUs0ZMugQoNmwlHg%2BewsdecuEQHLVDjMCJmGGrU%2FjEkOhi2MRve4rPWGMnRY6A8L8HGEfhVJwVD%2FR8dNTDy9K6DL3vrU6Gbcu3RSLoehJqh%2FBccSMdBiQ1Dk6PCv9aDYoxNSsGAot9V6ozfK2jaFSTeh64SHyfmm0W31nX%2BRf3ebCcMbRYwouO7ZDOTVRh8qG1qwsZzEDK4D%2B9xs6bXJuxLWAYlt0ssg7YNLV16bWcVll5im8tDQOXqvcdl5oHQuuHCky5Bg8JBx6WaHda3KrM9Q6mX9nUtdxmcjJEwXTLi2UREP4nIjJv4sW2MiJXTT4YgZpW5FFXfZmK4LzPcDwIf6XgBNGiFKse%2FPNqXBM%2BjZmlbMPedkcEGOqUBq7g0D2jkl46dclxt9AoRgylyman%2Fbp8jOVO7LV%2FdPU5TC1IQcSEgutQw%2BjSrzliMr6rCgf1c9xAdpnilRLOfbNL2bMScniwkGHXCM2PVtfmzvi%2Fte6T4368P%2F9ccyn4iq0%2B6PBiFPc6%2B1QULx7%2FkgVA7Tc30JZW3SWFMjg%2BX2sGpweHrnsmovGVcI7cRnlcFtR%2Fm32FsOO8aCvxCPSlBkQzG4JXk&X-Amz-Signature=6dc8bbd5ef3b81a18cef2c356ec86318e3278252933bcf09720bcf8cc5d27198&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOUWVMTL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDhC6EL6fVMZT4b7oy6KYqPE9KI0atJt6ezOvel8D6rDAiBo37qzu8lTppuAu4Mm1WzMhyj5wvBH%2Fa6Uo%2FSF27m%2FfCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM0xamltG4hJfsP78qKtwDInHBdf8iaIc2mTBm9lagcbTu2tUyyInH10CvC8W1yYpc1A43s5eAimGY3O1piJEA0XtRvszPnm6i6EvlQFIKHdS5%2B0OGe%2FloHBR%2Fvt0knQxoopvIAGb00%2BiZ2wjc0hbIHY08QZUwns7CqGvACXKPZYzm%2FIHuREUwYeQNFH8TfRJZtqAu0JrddtGz04ESUHk4ASbE0R%2BGzbSk70GTVUtpV4DGu0n5Wo26BTSESEwae2uX3djJv3aPkMplpuvzk7i503lYA2v%2B3tsqs8tE%2FnLGa9DAu%2BTO9s7nv%2FxHOkuApfl%2BNxidVrxbxpbHMrTPH4MpI7Swn6YABeMuNOO4IIR2IonssiglsBqywPvvf599qgv2%2FkSJChLANHQ1eTtIVHjtNSrw6UABWS1lV2bLScHqtpL3Y%2FaNrzRyzA24lvEBtiwlzSjCX8vF1JA%2FaQkcPAbxPr5e0CzqjHVYE98iRXnVpWSJaiL1Woc8y5b6SFbssRowSsvkheljQM6szgnKAR2%2B%2Fguw83wsqTIFaWejfhUH7APpBx2Z0eqHT2F9ByLLyZBAA2jcMCr5kzwXavhAHNZA4XIwA2wM0EP%2FzQ85akHx4fqvkFfq0HJt8ueFtn4%2FJyILtFBH%2BaMz1m6Lmuww%2F52RwQY6pgEV5qQXGBLeL0smkSMwAKoWUg%2BSwDLgUVoBUbCo%2FgwCIM3wVlb9yP9q%2Bzt9d2zF2C1H0Y1gTkCi2ZczWDv3rhb5geh9SWGUIumvJBZdloz4rY1G3wD2yus1Pcof80OvbR72CmKQB7dKefkCZfOXjy0PVjotYYniPJsKhIHv3Lx9l%2F%2B3xUYlT7g0XdGGLLwkATFpTrvmZsEBmI1%2FrgqBiKBsiLokOufY&X-Amz-Signature=8bc7a67be949103442beef2eb6ffaebd503e20f3042f80cad54313e7e3194cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGXAWMR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG4k3HBdojULgJvGn7mXd1%2B4BwuLV2gV8rBMLIldlwxEAiByFSy1MhliMMfigczCKxPcRm1eeVhOl0lpX7NqDoD1Eir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMBgh3SUuRNTechfLvKtwD7RqvmBaH2z07SbnhIk%2Bv6iF3eb5oDCb4qA2K8mh9okPEgDzh9asTT7w8PxGx91kFWBhTcezLNLp8R6xDqWfghDP24PNvMZbjjrEsV1gePJvc3ewm6WiXM6mdQn46XSUI2IeSHM1cXAchYqYt9mjGz6ViqXKaJw86uFcP4fjuAqxKK0xjT7hSBMvSUMJ5E1byKUcC8KIN3hP8YTjMfjZFTzBqAbs0%2BSHAcA0qYV%2Bm06naT3SN%2Bly%2FgU4RF%2FkHaEnWBHLzGAKIFtI22DFVAA5X82daNgj9YIVH0aOG2S%2By1Bc%2FPxNBWXWRRtcgW%2B80%2B6sQJvllYGs%2BgOrgf3XAYRlUD3F69AFsaZqS%2BAP0nXV6wqcGX4hSmJGsC6J%2BtHao0wzlGEr2sHp7HQLAIyFDN6VzUeiD0EMIchdjJhdeMYBsAW0aV4%2BP2pB9LOaAHcXDvoz%2FUBDDViDUqjgbtjRuC%2Byt5EelrNIOlBrmyHXQVQWbOaSsMi%2FYlGrFbgO63N%2Bvca8kittr41dZtMVM00dd1Y4WxZqCt82dKqi%2F4awSYHhTN4bXwrbJRFGiqUIT2BsqxxSYdjpbpNFGJkvWP%2FccGlzegUKdGsynFBGGy6ZIi%2FPIuAVI%2FlkCj98QZYaZAi8wuZ2RwQY6pgFK5ndU65iz66bmHZasRr%2BJPa81rAv%2FDwZMnTBMWtv7CPlpKtLufGiwfQjIfxUhdgBOqr%2FiZ7MoPVnGPzaDhPxpdlupgYlVeWiclznx2M6U4yHupW7xEyFTf%2B7dz%2Bdll8XvtHTSBiciZ1ChbQvN%2BnzFbDPUY8GFfigjkxWxm317zyv9osMiJNG%2BX3eehmH9QKhyw2JZe9Q2DZO3MA2GuvV9ve8hl2iK&X-Amz-Signature=cf4fecae31c52d2ca984159a2953f993eb8b52d895546a16cea49c2c9ea7cc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
