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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O33QXMN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAg7flu4StsdLpTZgJhFj%2BRVEnrtl8%2BySBZXPOCHVjsmAiEA4At7pfqiOfoVfJEwQwmBWO03JumckcqM7vwPWEowYq4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAgiPMtf8QuqKvZ21SrcA7HqpmzfI3HY1QI1wGok2oadHw05S9pHet0HSODe7%2B7yiTri9fokidPR1osaJdC2Z3f3Ku%2FjQ%2FhvN8%2BvdHtRRgDGXPbKr0KzN%2BEWZki9Kt0EAIRZyttGB61pHTBV4HFybv%2F2FY%2BFXZ8ngfTjJQLQ5qAAoB%2B%2BXK8YN98aY5AY5a%2BCKZIUGtNupNcxwF6gdToV40%2FqisZfkxU0fLymZvjym2d0CCQjJahDMu0enIx3QrzrwyNRGagekKdNbzeI4VZeb%2FcqqKXUEZ0MkjNqAN6yPjQPE82GCZsAx0ejYUY0nOS%2FHN6FRjyUT2Bs0snQSuQKz%2FgtmiRv22QamGQ9yeB7sqlXP8lqCplTnsrpPjgDPejdEK4WB4mhBOHao672gxCPmKorwqU2CYw1bAW4QXiCs9N4TQD0zc3vAL61ZgQxs5RlrY13Ra5OvQAb8Ed002e8ugndDrIxpDx9JUT28ky689Bi43%2BfEq%2FfqchQdPFBHAiR3xkqXxooQc0pTFNuJ8o9rvWsx0l2%2BirlczPwl4xVYn%2FG0xiTypeyLNe7PUG2sB%2FMoHTHCiB3CrAN6QEePVYYMCvEdWE%2FAuIf%2BDaIuPtMGEgu%2BFcqc3wVVHLlhlMgWCnli6ukQcYdlg1nFmA%2FMIiiu8IGOqUBRdCjbjeLYTwpTGJdYzw8LhWVS2q4yRpf%2FTJrGSMVfbh%2FLt8jlPKBrRA0tYRRHHIMxzpbxSAFtvY5UCfC92r8hhibR0GuuxcP6GllwVo1Xtx4EoxiCY0juwnuAElBSZPHGOt9lknt5zryzBzMoWIkAVY60BgUOREXp2Vo5EVFldWQHjwC4Rf0nF9gPGeRF1gfYa%2F52Z4WTxXCDtUD1wfTy2CKbr7f&X-Amz-Signature=1f6ef2803c677d30ff2bc550b1fe31b373cd30c42e18999f6dee138904aaa9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O33QXMN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAg7flu4StsdLpTZgJhFj%2BRVEnrtl8%2BySBZXPOCHVjsmAiEA4At7pfqiOfoVfJEwQwmBWO03JumckcqM7vwPWEowYq4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAgiPMtf8QuqKvZ21SrcA7HqpmzfI3HY1QI1wGok2oadHw05S9pHet0HSODe7%2B7yiTri9fokidPR1osaJdC2Z3f3Ku%2FjQ%2FhvN8%2BvdHtRRgDGXPbKr0KzN%2BEWZki9Kt0EAIRZyttGB61pHTBV4HFybv%2F2FY%2BFXZ8ngfTjJQLQ5qAAoB%2B%2BXK8YN98aY5AY5a%2BCKZIUGtNupNcxwF6gdToV40%2FqisZfkxU0fLymZvjym2d0CCQjJahDMu0enIx3QrzrwyNRGagekKdNbzeI4VZeb%2FcqqKXUEZ0MkjNqAN6yPjQPE82GCZsAx0ejYUY0nOS%2FHN6FRjyUT2Bs0snQSuQKz%2FgtmiRv22QamGQ9yeB7sqlXP8lqCplTnsrpPjgDPejdEK4WB4mhBOHao672gxCPmKorwqU2CYw1bAW4QXiCs9N4TQD0zc3vAL61ZgQxs5RlrY13Ra5OvQAb8Ed002e8ugndDrIxpDx9JUT28ky689Bi43%2BfEq%2FfqchQdPFBHAiR3xkqXxooQc0pTFNuJ8o9rvWsx0l2%2BirlczPwl4xVYn%2FG0xiTypeyLNe7PUG2sB%2FMoHTHCiB3CrAN6QEePVYYMCvEdWE%2FAuIf%2BDaIuPtMGEgu%2BFcqc3wVVHLlhlMgWCnli6ukQcYdlg1nFmA%2FMIiiu8IGOqUBRdCjbjeLYTwpTGJdYzw8LhWVS2q4yRpf%2FTJrGSMVfbh%2FLt8jlPKBrRA0tYRRHHIMxzpbxSAFtvY5UCfC92r8hhibR0GuuxcP6GllwVo1Xtx4EoxiCY0juwnuAElBSZPHGOt9lknt5zryzBzMoWIkAVY60BgUOREXp2Vo5EVFldWQHjwC4Rf0nF9gPGeRF1gfYa%2F52Z4WTxXCDtUD1wfTy2CKbr7f&X-Amz-Signature=535883d9f5a2508be10cb7cea0c98d657661c29eb6ce2d18d7f86bca021596cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O33QXMN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAg7flu4StsdLpTZgJhFj%2BRVEnrtl8%2BySBZXPOCHVjsmAiEA4At7pfqiOfoVfJEwQwmBWO03JumckcqM7vwPWEowYq4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAgiPMtf8QuqKvZ21SrcA7HqpmzfI3HY1QI1wGok2oadHw05S9pHet0HSODe7%2B7yiTri9fokidPR1osaJdC2Z3f3Ku%2FjQ%2FhvN8%2BvdHtRRgDGXPbKr0KzN%2BEWZki9Kt0EAIRZyttGB61pHTBV4HFybv%2F2FY%2BFXZ8ngfTjJQLQ5qAAoB%2B%2BXK8YN98aY5AY5a%2BCKZIUGtNupNcxwF6gdToV40%2FqisZfkxU0fLymZvjym2d0CCQjJahDMu0enIx3QrzrwyNRGagekKdNbzeI4VZeb%2FcqqKXUEZ0MkjNqAN6yPjQPE82GCZsAx0ejYUY0nOS%2FHN6FRjyUT2Bs0snQSuQKz%2FgtmiRv22QamGQ9yeB7sqlXP8lqCplTnsrpPjgDPejdEK4WB4mhBOHao672gxCPmKorwqU2CYw1bAW4QXiCs9N4TQD0zc3vAL61ZgQxs5RlrY13Ra5OvQAb8Ed002e8ugndDrIxpDx9JUT28ky689Bi43%2BfEq%2FfqchQdPFBHAiR3xkqXxooQc0pTFNuJ8o9rvWsx0l2%2BirlczPwl4xVYn%2FG0xiTypeyLNe7PUG2sB%2FMoHTHCiB3CrAN6QEePVYYMCvEdWE%2FAuIf%2BDaIuPtMGEgu%2BFcqc3wVVHLlhlMgWCnli6ukQcYdlg1nFmA%2FMIiiu8IGOqUBRdCjbjeLYTwpTGJdYzw8LhWVS2q4yRpf%2FTJrGSMVfbh%2FLt8jlPKBrRA0tYRRHHIMxzpbxSAFtvY5UCfC92r8hhibR0GuuxcP6GllwVo1Xtx4EoxiCY0juwnuAElBSZPHGOt9lknt5zryzBzMoWIkAVY60BgUOREXp2Vo5EVFldWQHjwC4Rf0nF9gPGeRF1gfYa%2F52Z4WTxXCDtUD1wfTy2CKbr7f&X-Amz-Signature=38aee6b64aa12c9eb6df46e06ef5afdd51a8f877936e96ae356e45af25a4b855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRU362SW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAU%2BLv%2FR4RWOelhw3S6tiNbo1ZPcs9L6HIe%2FCfvSpuyYAiAz2agW%2F1uYTLidt3Oih0Z0p%2FLq%2BVDeRqqYbwm4%2BX7%2FMSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkGTk%2BA8l48BiqwzFKtwDfK1WHcTr9%2BkwYQTN2HnOKWXpuCU%2FybD753qLDjMl92cx005yfl4G39VJaMj6L3U41%2FxcZiQWBS6PPywMTYkOpBRRZr%2BHPWlxkenfgSFUHHypwuDpVpRF0HBgMzNgfM%2BzIXbQ1KnVStO0mVNoAdHj63eABAI%2BEZONtX8KAOPVpAthVj1gYyrUzaeXjgzqpAJH8fdvO6x9zTxQbpdFulCemJbcSb7Fjmcm8cBMMh0m2jlHJS1OLb2XdwgrP7JiZaN2eyEsgUT1m0MeyQOuzygwd%2FjrR6xu%2FkyIcTRVHjixaWF2RBXsVrv80ES7Pzhczv4%2F11ZDXBKcuIFkN1qoUrUO4dN0%2BSUmoIiXFw2YJpw1rBMqLlMNsSYASX7nKqtrrVgEgO57Y3Q%2FtH3IqsEgyEEOuhqYfRN6hZGfoY6ftrBKgfbwEAxYV2lgqongECD5DYlKouqDbGWDurXd6a%2FDaYn5yZVViNywRGUAKAXUqiiJd2AJ8XPjU8JJascI%2Fyy%2BKyluhyESX5XFow8IkWvQuRyL05prtRsJKpdzjOhLv5P83mGMY2qExffomLRLToJkhi6uScsdx%2FjNu6J6ebWvwxUNsCD4JAcQBjWsU0mw6qi3G7L7YvWo1NZoSEBqv3swiqO7wgY6pgF%2F0LlwVxUsXvfq%2BK41zKTBwsoDdiQdcL4VhEX7TZ4Ttu3aTgYAcVsbkGMVrAo3A1EPeTchi3RK6CTjA4j%2FF9GbFfuzsQGoukHei6mi8b0Qn3yBoGNiZn0iO837Km14%2FUoHaraQsjCAHY8CpmjHJjUIfd7Xh%2Bcbo%2BlCM%2F8%2FJmjaz1UpOo8HLl9joFcA2P6eSImqLpdftJkhDSiNUicvrsSNh758qbKD&X-Amz-Signature=e3d15dbbb714873182f646264e0614444c919aa0d03e830175837007a3ffddde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XKJRYY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCeI1WKsfXRs7d16ykWs5gqZiaxXgkeTpfPvlg5Tr01lQIhAIMG2fURP0BI0g56KKdkK68Em1FUC9GF%2BNGDce2XekhZKv8DCEIQABoMNjM3NDIzMTgzODA1IgzMgM6rjLbOfm9CHugq3AO5LRFUEPokvlvDCJ45wJAY%2FqnJrcK%2FTLkq6Epx5BPIM7w7Cp9wG3LNfW6e9tYc6qjx9VUuWbuCv4%2Fy5n3V3QVrkRbD0%2FdrKRfEl7NAW8EL6BhviR7zQaXWaIoocSzmDM0lPd2hRhgbFo37YOmKu6tLE5TWkh7XbdMChOT4CjQcgkMSUBE80qnNQ5QzNogfBihTKUfQnmTyCFzTopQv5Ng1CqvlvXj6MJT%2FwBwYm%2F8YZBVlqrY8IwOGduh1nNPphTkrnnuFaHW%2B9Ei5D64K49QgtrwJRve7L3QU%2FUsPyPBV7EWmOSobEJ2H6ZLbOoiew0N4CJBzNBHtWzKzEi0w8tvmq061MKTh4PoWlfTCvxH1eXJjg8vXSP0C73q5DSknU0%2BoeNVl7vpaF%2BZVSAZ1z7lEGSBC2IP9uPK5HwT9waGsm5yyaG%2B6oXYFclkHKWGfF69Ggwj5%2BeJVOJ%2FiVTe64ciXeFSVF7fHF0o1nO%2FXKlXP9iL%2BcDk2bvy%2F9U3u2g5WTlaz9c0uh6BHDCZ3j4MiZqqWU3LV7F65elWDatKT%2BzZr%2F1VRb8t5ZtrsRngzFD6K0ERFgnURklsBpKxsWLFMkVxnJADqijeopGexxwspORbVsc3yc52WphgI%2Bgk4QDDNoLrCBjqkAYZ3zJxt4J4zy%2FKllpkhgmyksXunwM8WJooDWwq6cccOS5iczwzD%2BoEGcGhGXY9bCU6bt%2Fj3b3G1J0PCwBN52gGobS%2BPmBwpd%2Fy1yXdNZ6yh4R3KPqJUp1v3QflGNN2NaoacYwZ80Iw93WUprcTnVJWN8LjKhRTIXVFrMbvSPAx95jkE49AR70NlZ0yqV0ZYiJJJ0h%2FogcIVwN9x7ZU0uV6n1nIE&X-Amz-Signature=ff7a4442dab2bf09cd04f73a3a361030296fe8dcc2c7f4095a4e33044c26a8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O33QXMN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAg7flu4StsdLpTZgJhFj%2BRVEnrtl8%2BySBZXPOCHVjsmAiEA4At7pfqiOfoVfJEwQwmBWO03JumckcqM7vwPWEowYq4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAgiPMtf8QuqKvZ21SrcA7HqpmzfI3HY1QI1wGok2oadHw05S9pHet0HSODe7%2B7yiTri9fokidPR1osaJdC2Z3f3Ku%2FjQ%2FhvN8%2BvdHtRRgDGXPbKr0KzN%2BEWZki9Kt0EAIRZyttGB61pHTBV4HFybv%2F2FY%2BFXZ8ngfTjJQLQ5qAAoB%2B%2BXK8YN98aY5AY5a%2BCKZIUGtNupNcxwF6gdToV40%2FqisZfkxU0fLymZvjym2d0CCQjJahDMu0enIx3QrzrwyNRGagekKdNbzeI4VZeb%2FcqqKXUEZ0MkjNqAN6yPjQPE82GCZsAx0ejYUY0nOS%2FHN6FRjyUT2Bs0snQSuQKz%2FgtmiRv22QamGQ9yeB7sqlXP8lqCplTnsrpPjgDPejdEK4WB4mhBOHao672gxCPmKorwqU2CYw1bAW4QXiCs9N4TQD0zc3vAL61ZgQxs5RlrY13Ra5OvQAb8Ed002e8ugndDrIxpDx9JUT28ky689Bi43%2BfEq%2FfqchQdPFBHAiR3xkqXxooQc0pTFNuJ8o9rvWsx0l2%2BirlczPwl4xVYn%2FG0xiTypeyLNe7PUG2sB%2FMoHTHCiB3CrAN6QEePVYYMCvEdWE%2FAuIf%2BDaIuPtMGEgu%2BFcqc3wVVHLlhlMgWCnli6ukQcYdlg1nFmA%2FMIiiu8IGOqUBRdCjbjeLYTwpTGJdYzw8LhWVS2q4yRpf%2FTJrGSMVfbh%2FLt8jlPKBrRA0tYRRHHIMxzpbxSAFtvY5UCfC92r8hhibR0GuuxcP6GllwVo1Xtx4EoxiCY0juwnuAElBSZPHGOt9lknt5zryzBzMoWIkAVY60BgUOREXp2Vo5EVFldWQHjwC4Rf0nF9gPGeRF1gfYa%2F52Z4WTxXCDtUD1wfTy2CKbr7f&X-Amz-Signature=24af6d66036367a6c696ceca3bc37af05848b1bb7b23f2448b1fe8e4d13b562b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
