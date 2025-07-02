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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K67KB3E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKqQve0%2Bd%2FDhDG56hrl4FNDgPTidLffDl0%2BXz19q0vkQIgaQPbGJJhOrJFh5BWBkvo8%2Bd5Ph2%2BYLyMuP%2B8z8dimZsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlORxGjuJtLaNJDHCrcA9zrW%2F708qYRvv%2FXdEjfoPa1dr8UWFWXi8W1z8m%2Fb87jYf%2FFlNgdCuhUAmAJkBPwtSkanpVZZ9j7wsmHUA97X%2BqrXjwF3AqtIKO3UxuRkbsJwPizQSK0e421nh%2FzeZZUD2zOUa%2Bjx%2B%2FIgOmRslQQsHq6re51LHNIR8SRzjtlJSqSPCbZzAszEB0y0%2BPqZp61G6gqq2PBscrXdXRuRvnJXZTrGASQIN1WYOI1VPDjrxpWmdVwcLUsFb1ZmLGMknrpeXscRkumf9bn0UAddVL7GGn5hwBev9tiqUwrjnIBGRljiGVUA2VFIk%2BWZYAXwoLwG7PKwPpOKirliMouxFYyKX96WphMh%2F6l08IZ%2FidbFHtdt%2F6fxWyaLTcjwP3AtsahA04k8Eo2obQlb7S2XBr5DichcuHfK%2Fr9ItzuFZZzW70jLnQuGXCEilLgtaWpc4nEadu259fHs7e6nF66WDwos9cMICTRIXUI%2BzMiHNxYisaPdRp22Y8bCYt7lCBPcnfTx9f0DLoxo6JLy98HuIXxcbcO3irdd6ntsW6Y4DZpGMxN4SH6TYiYnS5RD62GoJ16LbQLjiPkGBn68ksy5uMr23q9Zhi3bQ24tmDCOyjZbDmV9jxBIPVz%2BattdiirMKSTlcMGOqUBIyaWvgg2abBm5uh3zANp6d8djdFAZjqet7wombIp6ZsQN0AWoe%2FUDGvMUgbUTLleoO7KHPdSCLm0pZVq5PbqQfpkGvMHNaTgJT7k4xyyBCjShMQDn5vULmW9C23SZUn9qteTXzo1j72PFaodZVYjPwUHeCiEnNYqdyShQTgVrVAC8QP7DCEt3VrCjO4iUdxLFOWko%2Bu5XjwJLh1EOiJvSQ2xxGt9&X-Amz-Signature=894acc78bea2e9cd3382282c9bb3b0115d52c1e74036cc4d7322a9480be25c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K67KB3E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKqQve0%2Bd%2FDhDG56hrl4FNDgPTidLffDl0%2BXz19q0vkQIgaQPbGJJhOrJFh5BWBkvo8%2Bd5Ph2%2BYLyMuP%2B8z8dimZsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlORxGjuJtLaNJDHCrcA9zrW%2F708qYRvv%2FXdEjfoPa1dr8UWFWXi8W1z8m%2Fb87jYf%2FFlNgdCuhUAmAJkBPwtSkanpVZZ9j7wsmHUA97X%2BqrXjwF3AqtIKO3UxuRkbsJwPizQSK0e421nh%2FzeZZUD2zOUa%2Bjx%2B%2FIgOmRslQQsHq6re51LHNIR8SRzjtlJSqSPCbZzAszEB0y0%2BPqZp61G6gqq2PBscrXdXRuRvnJXZTrGASQIN1WYOI1VPDjrxpWmdVwcLUsFb1ZmLGMknrpeXscRkumf9bn0UAddVL7GGn5hwBev9tiqUwrjnIBGRljiGVUA2VFIk%2BWZYAXwoLwG7PKwPpOKirliMouxFYyKX96WphMh%2F6l08IZ%2FidbFHtdt%2F6fxWyaLTcjwP3AtsahA04k8Eo2obQlb7S2XBr5DichcuHfK%2Fr9ItzuFZZzW70jLnQuGXCEilLgtaWpc4nEadu259fHs7e6nF66WDwos9cMICTRIXUI%2BzMiHNxYisaPdRp22Y8bCYt7lCBPcnfTx9f0DLoxo6JLy98HuIXxcbcO3irdd6ntsW6Y4DZpGMxN4SH6TYiYnS5RD62GoJ16LbQLjiPkGBn68ksy5uMr23q9Zhi3bQ24tmDCOyjZbDmV9jxBIPVz%2BattdiirMKSTlcMGOqUBIyaWvgg2abBm5uh3zANp6d8djdFAZjqet7wombIp6ZsQN0AWoe%2FUDGvMUgbUTLleoO7KHPdSCLm0pZVq5PbqQfpkGvMHNaTgJT7k4xyyBCjShMQDn5vULmW9C23SZUn9qteTXzo1j72PFaodZVYjPwUHeCiEnNYqdyShQTgVrVAC8QP7DCEt3VrCjO4iUdxLFOWko%2Bu5XjwJLh1EOiJvSQ2xxGt9&X-Amz-Signature=cab139c439aa06a3965559786bdc17ab7fdd4a30316aaf027d28924e17310e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K67KB3E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKqQve0%2Bd%2FDhDG56hrl4FNDgPTidLffDl0%2BXz19q0vkQIgaQPbGJJhOrJFh5BWBkvo8%2Bd5Ph2%2BYLyMuP%2B8z8dimZsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlORxGjuJtLaNJDHCrcA9zrW%2F708qYRvv%2FXdEjfoPa1dr8UWFWXi8W1z8m%2Fb87jYf%2FFlNgdCuhUAmAJkBPwtSkanpVZZ9j7wsmHUA97X%2BqrXjwF3AqtIKO3UxuRkbsJwPizQSK0e421nh%2FzeZZUD2zOUa%2Bjx%2B%2FIgOmRslQQsHq6re51LHNIR8SRzjtlJSqSPCbZzAszEB0y0%2BPqZp61G6gqq2PBscrXdXRuRvnJXZTrGASQIN1WYOI1VPDjrxpWmdVwcLUsFb1ZmLGMknrpeXscRkumf9bn0UAddVL7GGn5hwBev9tiqUwrjnIBGRljiGVUA2VFIk%2BWZYAXwoLwG7PKwPpOKirliMouxFYyKX96WphMh%2F6l08IZ%2FidbFHtdt%2F6fxWyaLTcjwP3AtsahA04k8Eo2obQlb7S2XBr5DichcuHfK%2Fr9ItzuFZZzW70jLnQuGXCEilLgtaWpc4nEadu259fHs7e6nF66WDwos9cMICTRIXUI%2BzMiHNxYisaPdRp22Y8bCYt7lCBPcnfTx9f0DLoxo6JLy98HuIXxcbcO3irdd6ntsW6Y4DZpGMxN4SH6TYiYnS5RD62GoJ16LbQLjiPkGBn68ksy5uMr23q9Zhi3bQ24tmDCOyjZbDmV9jxBIPVz%2BattdiirMKSTlcMGOqUBIyaWvgg2abBm5uh3zANp6d8djdFAZjqet7wombIp6ZsQN0AWoe%2FUDGvMUgbUTLleoO7KHPdSCLm0pZVq5PbqQfpkGvMHNaTgJT7k4xyyBCjShMQDn5vULmW9C23SZUn9qteTXzo1j72PFaodZVYjPwUHeCiEnNYqdyShQTgVrVAC8QP7DCEt3VrCjO4iUdxLFOWko%2Bu5XjwJLh1EOiJvSQ2xxGt9&X-Amz-Signature=2c73e416b776fff86e338f91dcbc68135521445d70501347755ba971dba1ad9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NLZMW6P%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaoLD%2BV8rCUQY%2FtFZYx7Hw8pt79I%2FbkVfZ6UGJWby%2FVAIhAM8uZK2yHOLsXsnWeRaC6klzSNDKoOtPsFbHqh0dPP5xKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWJFF1MwvGMdlIoPsq3ANf3H3lKR%2Bx3vZ6cXUWO8Nf%2B3GQYzm3SYBFxp%2FtVaVTuRGjR45HJZo2nSMM%2FMM7tGxlXpTfb9k83dId0MiRO9NjoUrJ%2BrCy53s3wzpP2ByPmSFRhVRh0qcqEcGUx51GTlqRvBnI%2FwK61nRZNVZI%2FL99Uc5PFmu%2FXd73s0GCBAfpZNo3RdZK7Lc38aa4t1lETDLGk5%2Bz1FprbDAn9FUnHOvCYu%2BgiFM8eeOSteLGkPzc738BaBJWyxT%2FfiPmXTxixNVCYPM97aHxvJyFeCwIbgmm9c5X%2BUcfy01%2FKlNHCdtRsBecWH3vX2APuG5gmqFqn2ORbZzhmri3ht7BePtmoT73KxmYLSm3WP5BSbnOlaqgRlbINyAVUQCWCRLzIzAk9yL5M7VV6C30Lkeo%2F%2F822wCYZu5uTaO%2BUPQR%2BwX6mN%2B2jvi%2FndcmHDFsXdYzjyzG%2BfuSwWn0Qd9HanHYX0jGXv5EUdSpRvOUWYarMmF64tjc%2BSj4D345q04XlFDGpRVG%2BtTl%2FGmA3qBwvEOqo53JaTk2KOf6MpDYJzD8ORGaBs7ix55q6toOcmWMpGuDoWge4X5f%2FeWPXWg%2BdxpbQouz70i0oT8g%2B0vvQMXRA1BEUnbxSpPerhT3VhDlN0wgNjC4k5XDBjqkAQvnopx7AzyFL8dcIZ8MdoK63YBiOpPr7yHHo%2BLqpowCfSSdd%2FuvUX2Gm4ds0IV%2FHSP65yAAyyfrmIeLIraaqWq5n0115%2FfxtMvYa7sZzX5X9HKB2Rk5Asmgna5Gcoc%2FfGO4Yd55fHwVf7BC7M4etpOPcqHhFfUYQzlp3BHz0iq2R6C%2BrmbVNroeSW6a1%2FakvaiQbOR23LMqxiTbvvqK2G1FIHpO&X-Amz-Signature=8594ff7c9afd1dd5af83bc7bf79c903bbaa354ad5a02c6ecd747c6867e08e32e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5Z32T3G%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5tzDBGY%2B4%2B1IzOAOeDvRc8vbIccLMwv3BzFoQNtRClwIgb%2B0t3p6FQmh5C0MJD8UJjhsOohG5fU%2B2nrmEzY2%2FUSQqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyr0L2BR85kP%2FZVPCrcAwW5Tn1%2BE1ZuVqFWxcZquROlqFVZUDwvonK0LQ7yIGKhUv3N4Cl%2BNyQGRMfyIwo2tIN1jr70PKoPbQiKIM1%2F4mx%2FetU5R5FTsj97ZIjflpMDPE8nrzNxqNoUnxI%2B9PyVDLe3hQA9%2FmAU32LaDqCnWDLV%2F6emFV683HjjOaE7qH4NHGoS10jqSjCo87ITgOMJzo7VpDAHdhqq3d3tEvZeClwPsXUwInX%2Br3ktqMhZ5SZPoVs2bgyvyretGnX9UY9tA5JQ%2FHGPDs%2FRjIZmwHuYUQnLvLW6KjOw3NOVtq7UyGvUuIiM%2Fe5sm3eLjXAOf6VNly8abhOqU2CYB%2B9Hu7p6uHqThLEDrMIjTA%2FNnTSKUgqPMrWFAWeyUDCgpraidVP%2BakZ1KE8nrpMg7iooffAT4B3Tv25CSEWkKnzpmQIOoIDmVb%2BWH8P7nRxArzT2xw8UCoWvxqW%2F9wLCyf6oOj3%2BQHTJVXFKUhW%2FnobTxne4XO7D8xSZ%2BbGVbvIRsXxS9C%2Fm7y%2BMSCInHHsELKFvy12%2BTAcbyRFN8zsAfJuRkwqSXwX2UGNetUM5anzCC5kaDOgX5S05UFK7r9OjscZdoCeJsvPDUh5PsloS359GozC8Xl82H3AC50wSMus318nXML%2BTlcMGOqUBD5HL59jV3CaIuUFjpj2IK%2FZAb4uCFLjayUBNkrGqSafPrIfAzm%2BtdwlbcMYjj3CtsQPkEXoVFGjqKCxP3jii3iKo6pi1rNSoYIoeUPswCmfsClrYqyCo2BnTr%2F3mf3naDp%2FufAcJoCI3DQikBRtD1Q1DbC%2B0%2FahMAwglCyro9R1TsamCS7FHz80HrPW3jmpPKRNuQLGY2%2Bp3i8I6Nw8RUzxLb%2Bz1&X-Amz-Signature=2cfe7b83b29cc22b429aaf988c08c5c8f0aba2f538bb7c9a33b70da9a474de24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K67KB3E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKqQve0%2Bd%2FDhDG56hrl4FNDgPTidLffDl0%2BXz19q0vkQIgaQPbGJJhOrJFh5BWBkvo8%2Bd5Ph2%2BYLyMuP%2B8z8dimZsqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlORxGjuJtLaNJDHCrcA9zrW%2F708qYRvv%2FXdEjfoPa1dr8UWFWXi8W1z8m%2Fb87jYf%2FFlNgdCuhUAmAJkBPwtSkanpVZZ9j7wsmHUA97X%2BqrXjwF3AqtIKO3UxuRkbsJwPizQSK0e421nh%2FzeZZUD2zOUa%2Bjx%2B%2FIgOmRslQQsHq6re51LHNIR8SRzjtlJSqSPCbZzAszEB0y0%2BPqZp61G6gqq2PBscrXdXRuRvnJXZTrGASQIN1WYOI1VPDjrxpWmdVwcLUsFb1ZmLGMknrpeXscRkumf9bn0UAddVL7GGn5hwBev9tiqUwrjnIBGRljiGVUA2VFIk%2BWZYAXwoLwG7PKwPpOKirliMouxFYyKX96WphMh%2F6l08IZ%2FidbFHtdt%2F6fxWyaLTcjwP3AtsahA04k8Eo2obQlb7S2XBr5DichcuHfK%2Fr9ItzuFZZzW70jLnQuGXCEilLgtaWpc4nEadu259fHs7e6nF66WDwos9cMICTRIXUI%2BzMiHNxYisaPdRp22Y8bCYt7lCBPcnfTx9f0DLoxo6JLy98HuIXxcbcO3irdd6ntsW6Y4DZpGMxN4SH6TYiYnS5RD62GoJ16LbQLjiPkGBn68ksy5uMr23q9Zhi3bQ24tmDCOyjZbDmV9jxBIPVz%2BattdiirMKSTlcMGOqUBIyaWvgg2abBm5uh3zANp6d8djdFAZjqet7wombIp6ZsQN0AWoe%2FUDGvMUgbUTLleoO7KHPdSCLm0pZVq5PbqQfpkGvMHNaTgJT7k4xyyBCjShMQDn5vULmW9C23SZUn9qteTXzo1j72PFaodZVYjPwUHeCiEnNYqdyShQTgVrVAC8QP7DCEt3VrCjO4iUdxLFOWko%2Bu5XjwJLh1EOiJvSQ2xxGt9&X-Amz-Signature=0da0bf2c620be6554aeab7c382eafb969f60dd5c639b8667f4b21dfa451b001e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
