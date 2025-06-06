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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDAAJZS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmIBte85Pz%2FcfzYz2tfw3unAoFxrHTTk%2FvMj7W43YyIAiEAuMw85Oj0ro5ZZvJ4ARHDLkNbyJrJHvx6YEdMYiSteJAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJmZxgjuzKS8Qi2gPyrcA0DIfPkAWFSkdrQj%2F2fgjGGPALpaWUu6eKr%2Fg8bf6GdBELSdPtBbKujHu7PIp3utEwnBpn%2B%2BPr5lL7DEjo%2FSiUSqSwQK9e%2FuTYWEc2vXV3beHfxo1I3hdNow9nfo%2B0agu7AM41oYVUhOeXv0FiFHt8ibseEweglXc9kNu6UUTRegqQAMUXBVM7tbmel4HEo02KfwM0CbmWZR9mvO5y%2BzBp9nw6x0AbXFbiqO8OrRnYU2dVP0p%2BK4i6sAH3LVip4tbmyCNAx2XVwjUFr8tmmPM01IsNw%2FQTGIszUZU6allRNPuneBfEsM7FiR9%2BfpFjeaBbAw%2BLdPbxS5JbvmcsoPvCR%2B5YKa1GQOmbiDIO%2BatmefnYOF%2FVlRPrRV9f83UnN85GOeTYL5D%2FzEXVMs6jp7WJ6b8RYXR%2FTlkMRj3sA1P5lRgwCZ%2FhPRXcFP4LoVUvWIP4BW0I56z3FsvVKAOGDjBxeBvmYHPRzlMmP2Y1RMG9IPCcaVS3TeA7vF4heZw4eujOlqiJys0IYAjgZeBHBuyyWvA6DTsRmaL1cZkEWgKzeHpsrWLZ11blX02N8FdCsCEcHnM1Ns%2BFuiA%2BBWdI%2BFAGYjaJB4dZGJICrcaO3xN09d9z5O763gXzBgYfYYMM37isIGOqUBUs3Z%2BK4LgbPRMweLssUrrjwJMPrcIshvjKtfx1nIx8sbgqpPLRnVNFKh5UCcuK9TJvZoivpE8mjep2zJMbSdWhFkdE3g8M%2BmnLGz8J%2BGZ2X%2FqSSkh0kMxlh5RliWu0weQmfZd3L%2BMzIFpkVt8dMTFx0IOM1QE1jbfanZuxrKq15GPaWapBE1W8tydoOQHEKdY5bQUXGt%2BzYVMRmCjWb45IhtaiDy&X-Amz-Signature=b4f6f7aabd9bcbdbe67e4a2513992528b8b4a67a172bb69e8867aebc4c39ea66&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDAAJZS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmIBte85Pz%2FcfzYz2tfw3unAoFxrHTTk%2FvMj7W43YyIAiEAuMw85Oj0ro5ZZvJ4ARHDLkNbyJrJHvx6YEdMYiSteJAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJmZxgjuzKS8Qi2gPyrcA0DIfPkAWFSkdrQj%2F2fgjGGPALpaWUu6eKr%2Fg8bf6GdBELSdPtBbKujHu7PIp3utEwnBpn%2B%2BPr5lL7DEjo%2FSiUSqSwQK9e%2FuTYWEc2vXV3beHfxo1I3hdNow9nfo%2B0agu7AM41oYVUhOeXv0FiFHt8ibseEweglXc9kNu6UUTRegqQAMUXBVM7tbmel4HEo02KfwM0CbmWZR9mvO5y%2BzBp9nw6x0AbXFbiqO8OrRnYU2dVP0p%2BK4i6sAH3LVip4tbmyCNAx2XVwjUFr8tmmPM01IsNw%2FQTGIszUZU6allRNPuneBfEsM7FiR9%2BfpFjeaBbAw%2BLdPbxS5JbvmcsoPvCR%2B5YKa1GQOmbiDIO%2BatmefnYOF%2FVlRPrRV9f83UnN85GOeTYL5D%2FzEXVMs6jp7WJ6b8RYXR%2FTlkMRj3sA1P5lRgwCZ%2FhPRXcFP4LoVUvWIP4BW0I56z3FsvVKAOGDjBxeBvmYHPRzlMmP2Y1RMG9IPCcaVS3TeA7vF4heZw4eujOlqiJys0IYAjgZeBHBuyyWvA6DTsRmaL1cZkEWgKzeHpsrWLZ11blX02N8FdCsCEcHnM1Ns%2BFuiA%2BBWdI%2BFAGYjaJB4dZGJICrcaO3xN09d9z5O763gXzBgYfYYMM37isIGOqUBUs3Z%2BK4LgbPRMweLssUrrjwJMPrcIshvjKtfx1nIx8sbgqpPLRnVNFKh5UCcuK9TJvZoivpE8mjep2zJMbSdWhFkdE3g8M%2BmnLGz8J%2BGZ2X%2FqSSkh0kMxlh5RliWu0weQmfZd3L%2BMzIFpkVt8dMTFx0IOM1QE1jbfanZuxrKq15GPaWapBE1W8tydoOQHEKdY5bQUXGt%2BzYVMRmCjWb45IhtaiDy&X-Amz-Signature=1aabeee5aaf079e0147e0007521ca7e4f88e1e375c52925b55abab83a1e673a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDAAJZS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmIBte85Pz%2FcfzYz2tfw3unAoFxrHTTk%2FvMj7W43YyIAiEAuMw85Oj0ro5ZZvJ4ARHDLkNbyJrJHvx6YEdMYiSteJAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJmZxgjuzKS8Qi2gPyrcA0DIfPkAWFSkdrQj%2F2fgjGGPALpaWUu6eKr%2Fg8bf6GdBELSdPtBbKujHu7PIp3utEwnBpn%2B%2BPr5lL7DEjo%2FSiUSqSwQK9e%2FuTYWEc2vXV3beHfxo1I3hdNow9nfo%2B0agu7AM41oYVUhOeXv0FiFHt8ibseEweglXc9kNu6UUTRegqQAMUXBVM7tbmel4HEo02KfwM0CbmWZR9mvO5y%2BzBp9nw6x0AbXFbiqO8OrRnYU2dVP0p%2BK4i6sAH3LVip4tbmyCNAx2XVwjUFr8tmmPM01IsNw%2FQTGIszUZU6allRNPuneBfEsM7FiR9%2BfpFjeaBbAw%2BLdPbxS5JbvmcsoPvCR%2B5YKa1GQOmbiDIO%2BatmefnYOF%2FVlRPrRV9f83UnN85GOeTYL5D%2FzEXVMs6jp7WJ6b8RYXR%2FTlkMRj3sA1P5lRgwCZ%2FhPRXcFP4LoVUvWIP4BW0I56z3FsvVKAOGDjBxeBvmYHPRzlMmP2Y1RMG9IPCcaVS3TeA7vF4heZw4eujOlqiJys0IYAjgZeBHBuyyWvA6DTsRmaL1cZkEWgKzeHpsrWLZ11blX02N8FdCsCEcHnM1Ns%2BFuiA%2BBWdI%2BFAGYjaJB4dZGJICrcaO3xN09d9z5O763gXzBgYfYYMM37isIGOqUBUs3Z%2BK4LgbPRMweLssUrrjwJMPrcIshvjKtfx1nIx8sbgqpPLRnVNFKh5UCcuK9TJvZoivpE8mjep2zJMbSdWhFkdE3g8M%2BmnLGz8J%2BGZ2X%2FqSSkh0kMxlh5RliWu0weQmfZd3L%2BMzIFpkVt8dMTFx0IOM1QE1jbfanZuxrKq15GPaWapBE1W8tydoOQHEKdY5bQUXGt%2BzYVMRmCjWb45IhtaiDy&X-Amz-Signature=41f47bf93a133c7471f3897fbc971c1b1c201e94bbb76ee9106ac751944250e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTSLP3B%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDQx10%2B16dCc5qF3B1wPQkERNuMiLkYwXiKFGBQNy8rsAIhALEhXODFE32fPEMKummnALt3NEFvjAAPHBp%2BIwtCzOD7Kv8DCFgQABoMNjM3NDIzMTgzODA1IgzmOiZATmgAOmeIvuIq3APRoew4dGYgkxQlcTjjygd8H%2FLXDE6uqX17PGcYX2nDx5%2Byamk4j2iP32Fww30elq9oQp0uTEZ%2FgpOtY7Oc8Nt8wj7CaGFPIwVn4h4AGetM0e4X%2FOsxvMnWV%2F5owj0GZ3r2Gi45XsSeukDeLQ584OFaddwyoL%2FeWb2MmU0dDHjI492zQtk2MJeGgI2tm9cFIAGmBHaxyRxvm62RADnjsf7b9oYAASgbNkLEQAbkZ1Z%2FhNoMUY6MXlALIbj01ax3q5K5AnjUz73DDX1%2BK3Iu%2Fi%2FOs3%2FPhdc0dfLqJBGQLl0NvEFD4SBRVfiRFn9FtppIaOZBM8m4B8x%2B7inXuRJLQF9x1sLfMGQMhIi2v6dCmJjx8ZLUSduqhGY7hKXQWnwPwXStvbBs8vdq2Ih8oZuDK82smXS2k5DWdhkUPnvKjrWrIMEybJcJS4TcDqDFUt9%2Fj%2FLabNjuGLDzFg4xnnPuRLWMKHSDLi%2Flon0a%2F7bAtItnoKqURL6NWSTcZU0ljjX3a6KCvj2XuYunWoIdIrqshkqgIKhgW56g6wC2e5HZ73HLGDb9NQEG%2Bzb4oCdKxThxLvvL81RXG9SjgsdGrf2i5lgI1ALZoLgoIjkDWxme3BSuJWw%2BuK3vpYhjYjhT%2BDC1q4rCBjqkASLdpdymZqyArja2FI346EtP6EJCgM3ub6Whw3Uw7346Q1lWaqv66VmV%2FYsZ0Qrpw4vPS2wix8yh21nJ3KAvY%2BT%2F0G1r3GrZBy%2FBpSm%2BHqVX1wMp4C3BfHCiPejcAeC3da6srHDc8DD%2Bbw%2Bnr5tpXoh8F8O3M9qtRJAe6TaADSSLz62UMCvmfCBqlMKBi1IDnWx0UVxINsA0vC4vouKSgI27xKR%2F&X-Amz-Signature=8d99124b208087873221447fb1238a04c0dc660caee64a4700f037f53a79799e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZL7RQC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCy8%2Fi93%2BZhnvFXYRYEhFUriCmwYiqlkNhvMmSpnEurpQIgbkUETs7ZzieCXONDCJJsCJQnrcUqNOQgOMejrD98lKoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPPqw25qARjtY0CVbSrcA3WSaFOy9MASOdFqX%2FpIgK%2FdY5R1ie7DUnFpZiMeH2kXeLCCXYoBIK%2BdtCMLkR8kRuaVoZwzaypUFEBMTuIx7Mlgizz6sF1%2FWAQh%2F6JcuerLU%2F1LfvkgpoUSWp7pcg%2BV17ZLyHHmYtjklM3oiArnUYlmU3XWf1Pz88LAf%2BOaNuAO2tieHzYYODqzYkm60cjjpiZ%2FZiXm93YvW4srf1MKnvu8W92sSU8bibk%2FQodnDdpn%2FpTDwcVO08gGT1gnaHfusNEnjDZ98TtVtMkR5du28QZ6ghW8O3okxhnx5I89x2PQDqouE0Zwngr5qa037NalzvsMVgtRrT3w5aBWK6nCXbNXCdW9ypnsCuZwlNgqf5hThxpUTYAyohq%2BNt6AB5NAmjV%2Bobh1MEoP1GpDPjgSr5Ypz7KM46ncCKh8oeb%2BTCGG5vggwOpiLACYw0E5FuRV%2FWJ32sdS%2BVDmSZhB7EMKUZIQQtPnoXo2ZynLoSjh5N7wgM6gyspT4ewhXNUj2OpntVnfj%2BoRIHo6CaSma3Xw73zFo2QygWOQTyqDhjQ%2B0DYM8wI3AxsO%2BPCgxSMezYltZOzcCwqrOM4eequq8IW4caasJOa9vjGpOhSiOdNMjgxdu0fTao2LUnYPR7ajMIOTisIGOqUBGpdRN80LdP1BvJW2Krqg242wn2N6djU9R63hdbxeJILj4ZYghQGpEYZd%2Ft1cw9Mgmg3vvs4itEVdc%2FIla2TtEI9o9crNrclMMXW54ADFMEpQ68SlAt4cEhJJGmuKc7051FVEGXJyT1Mkb9J0G0oo809677cRPVb1bpu%2FrND9HS5EjZjiuuNGj4oOM0gVNzgLg1lgZKR%2BAJaP5dQdcPFnxYSyNanA&X-Amz-Signature=e644574714c93bbaa9dc43806e9912c38d4e52a0d09cf4c15d11e3b24f57798e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDAAJZS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmIBte85Pz%2FcfzYz2tfw3unAoFxrHTTk%2FvMj7W43YyIAiEAuMw85Oj0ro5ZZvJ4ARHDLkNbyJrJHvx6YEdMYiSteJAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJmZxgjuzKS8Qi2gPyrcA0DIfPkAWFSkdrQj%2F2fgjGGPALpaWUu6eKr%2Fg8bf6GdBELSdPtBbKujHu7PIp3utEwnBpn%2B%2BPr5lL7DEjo%2FSiUSqSwQK9e%2FuTYWEc2vXV3beHfxo1I3hdNow9nfo%2B0agu7AM41oYVUhOeXv0FiFHt8ibseEweglXc9kNu6UUTRegqQAMUXBVM7tbmel4HEo02KfwM0CbmWZR9mvO5y%2BzBp9nw6x0AbXFbiqO8OrRnYU2dVP0p%2BK4i6sAH3LVip4tbmyCNAx2XVwjUFr8tmmPM01IsNw%2FQTGIszUZU6allRNPuneBfEsM7FiR9%2BfpFjeaBbAw%2BLdPbxS5JbvmcsoPvCR%2B5YKa1GQOmbiDIO%2BatmefnYOF%2FVlRPrRV9f83UnN85GOeTYL5D%2FzEXVMs6jp7WJ6b8RYXR%2FTlkMRj3sA1P5lRgwCZ%2FhPRXcFP4LoVUvWIP4BW0I56z3FsvVKAOGDjBxeBvmYHPRzlMmP2Y1RMG9IPCcaVS3TeA7vF4heZw4eujOlqiJys0IYAjgZeBHBuyyWvA6DTsRmaL1cZkEWgKzeHpsrWLZ11blX02N8FdCsCEcHnM1Ns%2BFuiA%2BBWdI%2BFAGYjaJB4dZGJICrcaO3xN09d9z5O763gXzBgYfYYMM37isIGOqUBUs3Z%2BK4LgbPRMweLssUrrjwJMPrcIshvjKtfx1nIx8sbgqpPLRnVNFKh5UCcuK9TJvZoivpE8mjep2zJMbSdWhFkdE3g8M%2BmnLGz8J%2BGZ2X%2FqSSkh0kMxlh5RliWu0weQmfZd3L%2BMzIFpkVt8dMTFx0IOM1QE1jbfanZuxrKq15GPaWapBE1W8tydoOQHEKdY5bQUXGt%2BzYVMRmCjWb45IhtaiDy&X-Amz-Signature=28972d3a5a230f506e83d64524b79e559dc9eb223a2fb9f8150dc0dc744134aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
