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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBB3GYJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyrN%2Fc8lPI413nHNElC2oceNU6aAT6Z34camxTtSZnGgIhAOhs2ZrHKaa3NTcJgx5mtgrecFYDQuSfv9VLYAi67hKVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyJBTZs%2Bk8GjR8jMgq3AMGcONpm%2FNtoesZrlE2zdhqQ1HRl4dkBMPl6LYSL0zS%2FhL8GIwJmDeg5NoApBQV5vzruttqQB3E7rd0RdB7irptA1kKfWp4EewWkvgSHG5ZJr2uKfFR2v0X7xJOcmI%2F88%2BpF%2BmUEMpyxj94IXRl1GZwtx3dI1rV%2FKdKtVHaDNJv2PWVdNb10BaBosaA2qJBAnKhQUv57AEoWrSEJP0nBZvCONxuRrggiBJr0c4AJyGpP86xov54FaLa0kbL1vDcNMH6eUm9uwlR5YBCpPdaE6fIrgTyKi1LW%2B%2Beoa4%2Fq3mLGBPYnUoYjXstTkH%2F03F2bphdi%2FUh0D9ROvAm7GOv4n1qpPCny%2Br7YyKrlzircu6Qsj8PyLwGGEu29SSpTSo8WIgGGbnB1l5BMHWZpya%2FThTNk0yq90zeSS0QJlm9gMvx9V%2FjcaPvVIKySvoySKO7T7BPnCUZ0Pm7d9SYWhP0WOkTtH%2BRmK0%2Bsnwyz8DPWo0qVynxyj0%2FFlDnz69OW0jN0Y9sx6%2Fx%2BuJUVGqOUbkPPETyZbYcYrdCfDgQHSlmv2Xmo3cZdiqoKwWxYFou46YvT6x4BBrlRhnDc8lMcs%2FaUh0JJoJYJysCchn%2BCMJmb3czOOLajbfcCCMP%2Ffb78TCU0OvBBjqkAaY5y2TFzPUteI9jmzXXvjEQjyts1ZQsjoGNzhmyr6L4TANaZ7utSDXvRGn3HSpmi81iYdWDu59SXn6e4j9OeZTH%2B0p7aTIgw4L2ZqHlMiWfKrtFPegSsxhRnIFgk4ABbiwqCG%2BVqXW%2FtVyoxAtta3MMSZAvCrtQB0IXgKVSQP4l%2BergqmldxBGR1fhy1gLuLYCdKQ5viYEhhgOrwSisZucsMVAt&X-Amz-Signature=d468502a09ddbee982b7d4beb1b3c236461e3078f1c5e94a7dc70bc95a884c55&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBB3GYJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyrN%2Fc8lPI413nHNElC2oceNU6aAT6Z34camxTtSZnGgIhAOhs2ZrHKaa3NTcJgx5mtgrecFYDQuSfv9VLYAi67hKVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyJBTZs%2Bk8GjR8jMgq3AMGcONpm%2FNtoesZrlE2zdhqQ1HRl4dkBMPl6LYSL0zS%2FhL8GIwJmDeg5NoApBQV5vzruttqQB3E7rd0RdB7irptA1kKfWp4EewWkvgSHG5ZJr2uKfFR2v0X7xJOcmI%2F88%2BpF%2BmUEMpyxj94IXRl1GZwtx3dI1rV%2FKdKtVHaDNJv2PWVdNb10BaBosaA2qJBAnKhQUv57AEoWrSEJP0nBZvCONxuRrggiBJr0c4AJyGpP86xov54FaLa0kbL1vDcNMH6eUm9uwlR5YBCpPdaE6fIrgTyKi1LW%2B%2Beoa4%2Fq3mLGBPYnUoYjXstTkH%2F03F2bphdi%2FUh0D9ROvAm7GOv4n1qpPCny%2Br7YyKrlzircu6Qsj8PyLwGGEu29SSpTSo8WIgGGbnB1l5BMHWZpya%2FThTNk0yq90zeSS0QJlm9gMvx9V%2FjcaPvVIKySvoySKO7T7BPnCUZ0Pm7d9SYWhP0WOkTtH%2BRmK0%2Bsnwyz8DPWo0qVynxyj0%2FFlDnz69OW0jN0Y9sx6%2Fx%2BuJUVGqOUbkPPETyZbYcYrdCfDgQHSlmv2Xmo3cZdiqoKwWxYFou46YvT6x4BBrlRhnDc8lMcs%2FaUh0JJoJYJysCchn%2BCMJmb3czOOLajbfcCCMP%2Ffb78TCU0OvBBjqkAaY5y2TFzPUteI9jmzXXvjEQjyts1ZQsjoGNzhmyr6L4TANaZ7utSDXvRGn3HSpmi81iYdWDu59SXn6e4j9OeZTH%2B0p7aTIgw4L2ZqHlMiWfKrtFPegSsxhRnIFgk4ABbiwqCG%2BVqXW%2FtVyoxAtta3MMSZAvCrtQB0IXgKVSQP4l%2BergqmldxBGR1fhy1gLuLYCdKQ5viYEhhgOrwSisZucsMVAt&X-Amz-Signature=c2e36f328333b98a8748a0a05eb0d0d18ec904237d973ce370ca4723c15c2723&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBB3GYJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyrN%2Fc8lPI413nHNElC2oceNU6aAT6Z34camxTtSZnGgIhAOhs2ZrHKaa3NTcJgx5mtgrecFYDQuSfv9VLYAi67hKVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyJBTZs%2Bk8GjR8jMgq3AMGcONpm%2FNtoesZrlE2zdhqQ1HRl4dkBMPl6LYSL0zS%2FhL8GIwJmDeg5NoApBQV5vzruttqQB3E7rd0RdB7irptA1kKfWp4EewWkvgSHG5ZJr2uKfFR2v0X7xJOcmI%2F88%2BpF%2BmUEMpyxj94IXRl1GZwtx3dI1rV%2FKdKtVHaDNJv2PWVdNb10BaBosaA2qJBAnKhQUv57AEoWrSEJP0nBZvCONxuRrggiBJr0c4AJyGpP86xov54FaLa0kbL1vDcNMH6eUm9uwlR5YBCpPdaE6fIrgTyKi1LW%2B%2Beoa4%2Fq3mLGBPYnUoYjXstTkH%2F03F2bphdi%2FUh0D9ROvAm7GOv4n1qpPCny%2Br7YyKrlzircu6Qsj8PyLwGGEu29SSpTSo8WIgGGbnB1l5BMHWZpya%2FThTNk0yq90zeSS0QJlm9gMvx9V%2FjcaPvVIKySvoySKO7T7BPnCUZ0Pm7d9SYWhP0WOkTtH%2BRmK0%2Bsnwyz8DPWo0qVynxyj0%2FFlDnz69OW0jN0Y9sx6%2Fx%2BuJUVGqOUbkPPETyZbYcYrdCfDgQHSlmv2Xmo3cZdiqoKwWxYFou46YvT6x4BBrlRhnDc8lMcs%2FaUh0JJoJYJysCchn%2BCMJmb3czOOLajbfcCCMP%2Ffb78TCU0OvBBjqkAaY5y2TFzPUteI9jmzXXvjEQjyts1ZQsjoGNzhmyr6L4TANaZ7utSDXvRGn3HSpmi81iYdWDu59SXn6e4j9OeZTH%2B0p7aTIgw4L2ZqHlMiWfKrtFPegSsxhRnIFgk4ABbiwqCG%2BVqXW%2FtVyoxAtta3MMSZAvCrtQB0IXgKVSQP4l%2BergqmldxBGR1fhy1gLuLYCdKQ5viYEhhgOrwSisZucsMVAt&X-Amz-Signature=46fb266df0f504625a51a472a3b957c6d36378e3a3bc81270176ecc85ee8348a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZB3A34%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZskV%2BLpdqLWmyGcQU1uh4wdi10iEQlLaIppkilrAxqAiEAqF5VpDVNGu%2BksHSzB%2BSJjgOffAF1qSvKd%2BY2HKzNPn4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIveCV45dgaXgYpxcircA1l7ShDc7mrBZ7FBvX%2BSpU9wtkbgaDTehHrjJ72vKjkHX5bS4bMGEf%2Fxiw3%2FXxujPdDPEk3txr8xGxRhrqELj1zE%2BmlMWw7CNjffx4NrFacAAbxQPu511JN3pbHoCw%2Fbeat89liF1WXT8RNc8nhkfzy1nvTPgME%2BfAPVDoUA%2FVISn%2FGgoEk2tBP1ROEh%2F%2FCc%2Fx9djXWbr9i0grlSCuOkNmOLMBFrlbSjQKgvGDMfEeZojaVXfItfBTlqxyanBwVmkxBWGg0mhnweJUJwiRsDvtSLUQBc%2FKFwQq8vyiccfazZgxzIek142qToOEjjd3%2BvDpUy1Iz3rJ%2BSbn5VN1Yho100v%2B7e2OIula55NhVni%2BeXORNy9S77CdfX9F8Ds7iyTWsAZdqEzqWHw1np%2F3Cc9uF%2BofPJXxjqh28QW27aZBL52TfFTZ%2BpXmSy1%2ByDG9l3PSk1uBVZTU2l5emdUxPU9h6PLF6EvjNslWw3jUPj3ikT812ZNaS5HZr94qqbYltA3ZXhDEPWZnvOo%2FYPzrL6CWWMyhI3dnE3UHqjcvlmheRwLYuyazWD2o82Dq69OIlbYdImMhxB474rA9KgyWyFzJRg5gbPCKUyfSJyVzFoaDXDtEyEnA0KkplvjL0TMOrT68EGOqUBP5CaTFt6Ix2bZ0LBZSD9lNwgTcKcvEo1LFtDxGlrh4F623640lmHord1T15QroLE0l6KcAwAIpMMbQCBb%2F95cWfOeOGHB96vtWfkSdwA8oRqTB%2Fxkp%2BiVbvQJ9JA2J6sZEW3Ze1xP7tOnTeuMABv%2BF7ErmXheQlvr1scBk3xHj7GpWE%2FNKX2Alh2x6SUo51W79PDNVwNePUHzQddFJS5b%2FItV%2BSD&X-Amz-Signature=0bba7cb424e7e12500469e852905d94aa4ef7d7636d4fb5edb8b590dcf7b73b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAKSP5GW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4j0G1DhShND5rJ9auznGYGXAkmQzY8RRyoWuZSrD4AAIgFZiZz61T%2BxQgBredgvs3W04Vhu6fvJr2O%2FehKQQ4ISAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHhA8S1EuSc0tIt8DCrcA7au95xU2FPtH10Op4pJSXYhjWNycPfjar7fg92BFfkJRzO1dsgHFA5bAeOuyBSj%2Fi6uW%2FkEe3DeOUY7%2F2u23AsWZw2SGJaJUQ8QsX2P8dJchCiSSXanzH%2BBDLYIUou7oWadS4UOJkMPaYWCdiJRfChbiq0QrqFZZDO2Ib0v2TaiyJodTs8CL9oHdsdRfIDjrv1I9SHRogOIa65AyyMMgnV5jfYuDEG1PhEYkUVbx1w7PWuxkRmENaRnhEccKnJJ8%2BhRNYQSj9xbOoc%2FhunNWL5vNRfHK7UzNTseo4gXW8N4pfhiN2la8CfDfo%2FZbRh47jIqpkqucHD50kiXL7y6D4BlwFuRkI%2Feq%2Bvo9suwgqVIsHdd%2FENNMZ7pta50AMYmZBs%2Bz3ZNH2J4bPPKSYCgtO4FVi%2FB8iqa0ySJoK%2FUmVa4e2GawfS2SN1kVVAxCO%2B8%2FGj92aBVhKKJnRTBXAp2bpt3jgwA4UZp4R1U8Qjo4VfCQygEM2qXhsearMVjBGcyJUluzr0cMiKcc5OUBxnMJDGWJlIjAw%2FTgLo8Nr%2BXgr2tlODggmxBk4u8tDxzdNDZeOsT499PFJOYcwtbODL%2FCebOYLrBPHyETdv64mNQ%2Fz2iwYSuS9wf3OuMj%2FpiMNWD68EGOqUBKvIBdbeVom43sX8%2BQVt224HJ2TyRTTDW8XnCUUKHwKvCK8U7f1KycDvWqrMyJPi%2FIOza%2BxTyUFB7tk4sQ3UFeEK0IdxGysS8m%2BK0OFtdNPPt82VhC8%2FHqmm6q8J272oN9hp9bhMANt1svCjohT1%2Fx%2Fh8DvOGTzE8z0Y1oUSQZ81IA9sLG%2BNOAwpEXNQaqo96vyKCLqPk7dmghIDjxsZ8qLqHHW%2F5&X-Amz-Signature=3d092cbd3197754bbf32735e7c1f802226604c4c1ab331169a47ec403ae9f37c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWBB3GYJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyrN%2Fc8lPI413nHNElC2oceNU6aAT6Z34camxTtSZnGgIhAOhs2ZrHKaa3NTcJgx5mtgrecFYDQuSfv9VLYAi67hKVKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyJBTZs%2Bk8GjR8jMgq3AMGcONpm%2FNtoesZrlE2zdhqQ1HRl4dkBMPl6LYSL0zS%2FhL8GIwJmDeg5NoApBQV5vzruttqQB3E7rd0RdB7irptA1kKfWp4EewWkvgSHG5ZJr2uKfFR2v0X7xJOcmI%2F88%2BpF%2BmUEMpyxj94IXRl1GZwtx3dI1rV%2FKdKtVHaDNJv2PWVdNb10BaBosaA2qJBAnKhQUv57AEoWrSEJP0nBZvCONxuRrggiBJr0c4AJyGpP86xov54FaLa0kbL1vDcNMH6eUm9uwlR5YBCpPdaE6fIrgTyKi1LW%2B%2Beoa4%2Fq3mLGBPYnUoYjXstTkH%2F03F2bphdi%2FUh0D9ROvAm7GOv4n1qpPCny%2Br7YyKrlzircu6Qsj8PyLwGGEu29SSpTSo8WIgGGbnB1l5BMHWZpya%2FThTNk0yq90zeSS0QJlm9gMvx9V%2FjcaPvVIKySvoySKO7T7BPnCUZ0Pm7d9SYWhP0WOkTtH%2BRmK0%2Bsnwyz8DPWo0qVynxyj0%2FFlDnz69OW0jN0Y9sx6%2Fx%2BuJUVGqOUbkPPETyZbYcYrdCfDgQHSlmv2Xmo3cZdiqoKwWxYFou46YvT6x4BBrlRhnDc8lMcs%2FaUh0JJoJYJysCchn%2BCMJmb3czOOLajbfcCCMP%2Ffb78TCU0OvBBjqkAaY5y2TFzPUteI9jmzXXvjEQjyts1ZQsjoGNzhmyr6L4TANaZ7utSDXvRGn3HSpmi81iYdWDu59SXn6e4j9OeZTH%2B0p7aTIgw4L2ZqHlMiWfKrtFPegSsxhRnIFgk4ABbiwqCG%2BVqXW%2FtVyoxAtta3MMSZAvCrtQB0IXgKVSQP4l%2BergqmldxBGR1fhy1gLuLYCdKQ5viYEhhgOrwSisZucsMVAt&X-Amz-Signature=ac7de434359df5f3a891e2a913cfec6962e3b5dc15a290fe93961ec725a70eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
