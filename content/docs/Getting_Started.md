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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR5LBXU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICjTgJjkL0LQxDTrTgg7s2X7ZCisKGHs32inF9cwbEdGAiEAjJbPG4tx%2BTYQOKTogsYWINHpwu5C1WgrPLL%2F8TKgklEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKF9uykIPpKnsaDPircA8Xc5zZR17tD1OSMhVp86v8Jit0LOEaq3AOCVST71kAXqbGrrZOnnps%2BuTTzxw6HiAMHobxPxiLhKT3HwtAksIszM7VEEYoVNZRz3vDeJa3%2Bpr0%2FKN4BfvIb%2Bd9rgsuWIh2Khh1T%2B8Fa6STVmtZe4H%2Fv3A339bAV2vod3txNyOIhkLPFwaDSH2TvKDU0FBaW7daw3dOdQamQlvAuShdKJvHinXi8vHCzALqSLPtx5Z%2BKNa4ctBUc%2FqOnY4d0Ak%2Fb6VRd6D6GJwX31NfEAIOYnkiakOFLku%2B0nuAvt8NejwJF250YECgC2q1ScwumUzeZi2wmpNDAnpYzIC3388xSg47VHrL1%2FndWTDgxH7Yduilh9RATtlj%2Bw2lhHwNgu6BwWrdPi%2FRM389OgB8FVRM7KjaYY8vSNZtR8DEtuqhrD%2BmXTK%2ByjNA9O1xHttjy6d5eRgY8biw%2B2iwpmTF%2F1V%2B3iBJ%2FxQWG3nK2b1umLMqEg1VkbsSnomiQHlOpYBaugpl5JBhPLa5OXjy6%2BsTn2%2F9W%2FnZ3dlbxr2QjuM43SJDavp8BDnAUKnP5tWSRwIrxEMIu8UoF2oIMY5cE%2F6vgZ0QnfSe%2FOiEZNeuqLLxMz6tvRWWorPV6344fcR54mEv5MP%2F8xL4GOqUBItVkz90MgMqZCndZ0R7NH998QOoqfIYk8wkoZ9ShKnYVySxl0LV3jGRLi9x17fLbpmg07VMQ%2BRn0z0LR4k%2FEST2cz0ENhKTXzPg3tHZjwQwh6K5ZokonkXz10Ac263xfxTGdtsmRHZVP34EHuLqv2%2FNukILGrLEVBbjapMHbJNVw1VON0UOIkgkLUSftEP57K9QOx%2FxslLMNaw8pChnAVz%2BRIqrX&X-Amz-Signature=1f80871bd3bb80070c6be5cfd09512bbdd37cd9cb1c00d976bed08d363773419&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR5LBXU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICjTgJjkL0LQxDTrTgg7s2X7ZCisKGHs32inF9cwbEdGAiEAjJbPG4tx%2BTYQOKTogsYWINHpwu5C1WgrPLL%2F8TKgklEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKF9uykIPpKnsaDPircA8Xc5zZR17tD1OSMhVp86v8Jit0LOEaq3AOCVST71kAXqbGrrZOnnps%2BuTTzxw6HiAMHobxPxiLhKT3HwtAksIszM7VEEYoVNZRz3vDeJa3%2Bpr0%2FKN4BfvIb%2Bd9rgsuWIh2Khh1T%2B8Fa6STVmtZe4H%2Fv3A339bAV2vod3txNyOIhkLPFwaDSH2TvKDU0FBaW7daw3dOdQamQlvAuShdKJvHinXi8vHCzALqSLPtx5Z%2BKNa4ctBUc%2FqOnY4d0Ak%2Fb6VRd6D6GJwX31NfEAIOYnkiakOFLku%2B0nuAvt8NejwJF250YECgC2q1ScwumUzeZi2wmpNDAnpYzIC3388xSg47VHrL1%2FndWTDgxH7Yduilh9RATtlj%2Bw2lhHwNgu6BwWrdPi%2FRM389OgB8FVRM7KjaYY8vSNZtR8DEtuqhrD%2BmXTK%2ByjNA9O1xHttjy6d5eRgY8biw%2B2iwpmTF%2F1V%2B3iBJ%2FxQWG3nK2b1umLMqEg1VkbsSnomiQHlOpYBaugpl5JBhPLa5OXjy6%2BsTn2%2F9W%2FnZ3dlbxr2QjuM43SJDavp8BDnAUKnP5tWSRwIrxEMIu8UoF2oIMY5cE%2F6vgZ0QnfSe%2FOiEZNeuqLLxMz6tvRWWorPV6344fcR54mEv5MP%2F8xL4GOqUBItVkz90MgMqZCndZ0R7NH998QOoqfIYk8wkoZ9ShKnYVySxl0LV3jGRLi9x17fLbpmg07VMQ%2BRn0z0LR4k%2FEST2cz0ENhKTXzPg3tHZjwQwh6K5ZokonkXz10Ac263xfxTGdtsmRHZVP34EHuLqv2%2FNukILGrLEVBbjapMHbJNVw1VON0UOIkgkLUSftEP57K9QOx%2FxslLMNaw8pChnAVz%2BRIqrX&X-Amz-Signature=6686825f07d7621e34e75a28cdf2b7d2748c002adb10a3a2624c5b3bba823fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSD3FOMN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC1nI89yKTWf57FWbCtdGaHMYA3c5mMaEVlI2SDDQk1TwIhALF8webBrp4mHUB9zKC16BhHGSAXMPDqYgJWsL%2BSvE9vKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi1ndGGpEjpHFOrKUq3AMkYUaNP8IMWJB1Zs9lI%2FkOGmgCPtl%2BeVoBsDFuUA3AFOQqWd2ebAdjFL6opITzVr0csLZrggwNdDEYhA8g4UEDiu8moltc1RAzpmk57N97ufBR5Q1Ajr1fWTogVCn04zIXNnXlCuWlcm48Ybwz7mYJ9VdtJycmZ9AU6J60MzTFTG13xBGXjKDt38QEX%2FnFweq5G0td5644H9v8wMHvuAzw5b%2BmSovSFid6VXcksSqxtvjFGdyztwpHnLgwQ%2FGFMr0RbeC7Qe3iMF3hnmKGY2ysiH89MUsfpCtERnkMgTbE%2F%2BQTtd1d61ns1jkHumrIPB%2BLInk8YpBSp2ZGti23NGjXJmtJvuSZE4K0gj3XhiH88%2FIWq7RDDkJoOlwx4kVhFPeAsVL4iOLabj99jlgcfDvecbMSzMLdvpkVnrlItZ0%2BYlSeHTLfEWX7Xop9SKQKgiv%2BItOrlqiQ4E0zznu1X1F3ZP0eCMdrXUcE8SfX6kFz3ENXf%2Fm%2BdauEKJPw5wZZv5mqn6lvsikMoalZ%2Bhh02%2BDVl3IW5nvYvmowr2BRNEJtolf2wqSnhRIAVr0IX%2F9W3LlL3pvcomz2kaChLV0%2BWRK1G2LIqUiERq0JmY3bk1nPvx5lt2fifqwE1sz8yTDn%2B8S%2BBjqkAeA0NjOjHhL5kNAb%2FrXnkUqb0uKAqM6%2FGRGFPpnnml4jvCI9g9uWrnnHHiPZTTuaVgZtY70SP3TYZB3W4nJMqslsC3ZXaQpYNDZeH9I0fkGF1%2FogR6YAqSw8Cv1%2FMVED83KfoqNvUkwAznu%2BQLXJH2mh2S35QezW%2BmXPcX8JDfu9KBmMuNiXJ2OIl9SZIcBzfdwwQFJyFxW42ydf%2FlJlQK2H%2Bsv%2B&X-Amz-Signature=23ba20af6148ec2c33b60ea789a3e10d4ce54281d8cfcda9bf5a838e0b136a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKGEWR5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDY43RArMx6wC87zuJ4nwplL2qWWuIH23NAufwzlpFW%2BwIhAPLXmnJfyprBjbjTOHa8IYWkU8nWE7jPHJaO6sFtwCXkKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbOvIUe7w8YxO%2FxfEq3APwgKEJfd9nqvaIqI52vBjEd3BawIHMk%2BUC36bFKtL6SJCQJXCWAZfzFFtraZNSVAx1%2BfrkI7Zxgv2gg4eFYQVnhzx7dGwQQmd1MAGoMja1OKK16PDWH3Zj89P2f%2B9ibNWRtsKXABEuCEwzQlcl%2FMBCyj8SdHlf%2BkOH97QHvbucFazcHv5UBojVe5mha9LdwGe8CNpEDp4pNlw%2BsVdN434Lo%2BUsXBJwNIfxvqzG%2FSQVhuXBQnegMX52dZWUK5eERIaUWl%2BDhc9i42k23S4ZpmaSHGKChMXHYGEVFWmFErCgoboxEmtPDrcCljLGeYdkLSoGWDqeoeJg7%2FfNjU9P6Jx37CB%2FmyZHqVbNMODRzWM7VQkY1JRoIlrDyYhbIGkGOphzqgcg5IvoMfcigQCLwqD%2BfbVD2YGYbWxV%2B%2Frk6SPSfE3t2PLgApSTuvYsoQpo0FfIjPR4mwV9yOgcp3VpQ4GPgM%2F%2F8S6JVhNN4l1HynWp4crtA5bWstOtcY%2FnExvYB6Q6uXzxZ39hOu7P3qYjPSwGXb9svHdS%2Bfr6Y5WGUuF6efeUSRzZmzQ01qdYxReO7XFwvwLJGiXKqKTgr2nceAEVtyktw3iXqiDPbRLhGp1CA%2BFCgfjNFoHiQ6%2BfpDC%2F%2FMS%2BBjqkAYEN6%2BcXhlOWDrMwJRU%2F7HYhAFt2TgcJingSBbFbER89TM91bPWPs9GHNBHTx6T6RZx%2BOHE%2BI3oTbdMh%2Fu%2Fz8ie34PJcm8k1F1Bk43xKRAKh4QqCIZEbkdu7nvYMVM2iQ62gHPKDa1bqrDMK%2BhhNeBKNdtaoDaCnckTxuHIqr6HZ4pw5ztSVlfsFjpJ0JgwlKXvMj5nq2RC%2Byt9wTfef4iKJsyW0&X-Amz-Signature=833cbe4079e4101943de288fc7116eb286864c93b80ff2501e0baa4d80531c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR5LBXU%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICjTgJjkL0LQxDTrTgg7s2X7ZCisKGHs32inF9cwbEdGAiEAjJbPG4tx%2BTYQOKTogsYWINHpwu5C1WgrPLL%2F8TKgklEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKF9uykIPpKnsaDPircA8Xc5zZR17tD1OSMhVp86v8Jit0LOEaq3AOCVST71kAXqbGrrZOnnps%2BuTTzxw6HiAMHobxPxiLhKT3HwtAksIszM7VEEYoVNZRz3vDeJa3%2Bpr0%2FKN4BfvIb%2Bd9rgsuWIh2Khh1T%2B8Fa6STVmtZe4H%2Fv3A339bAV2vod3txNyOIhkLPFwaDSH2TvKDU0FBaW7daw3dOdQamQlvAuShdKJvHinXi8vHCzALqSLPtx5Z%2BKNa4ctBUc%2FqOnY4d0Ak%2Fb6VRd6D6GJwX31NfEAIOYnkiakOFLku%2B0nuAvt8NejwJF250YECgC2q1ScwumUzeZi2wmpNDAnpYzIC3388xSg47VHrL1%2FndWTDgxH7Yduilh9RATtlj%2Bw2lhHwNgu6BwWrdPi%2FRM389OgB8FVRM7KjaYY8vSNZtR8DEtuqhrD%2BmXTK%2ByjNA9O1xHttjy6d5eRgY8biw%2B2iwpmTF%2F1V%2B3iBJ%2FxQWG3nK2b1umLMqEg1VkbsSnomiQHlOpYBaugpl5JBhPLa5OXjy6%2BsTn2%2F9W%2FnZ3dlbxr2QjuM43SJDavp8BDnAUKnP5tWSRwIrxEMIu8UoF2oIMY5cE%2F6vgZ0QnfSe%2FOiEZNeuqLLxMz6tvRWWorPV6344fcR54mEv5MP%2F8xL4GOqUBItVkz90MgMqZCndZ0R7NH998QOoqfIYk8wkoZ9ShKnYVySxl0LV3jGRLi9x17fLbpmg07VMQ%2BRn0z0LR4k%2FEST2cz0ENhKTXzPg3tHZjwQwh6K5ZokonkXz10Ac263xfxTGdtsmRHZVP34EHuLqv2%2FNukILGrLEVBbjapMHbJNVw1VON0UOIkgkLUSftEP57K9QOx%2FxslLMNaw8pChnAVz%2BRIqrX&X-Amz-Signature=a708737a79998bf8af171d395aa810372ff8255c810b4ab2c3295d5a4ea31364&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
