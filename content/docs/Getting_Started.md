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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHGBJMG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqiIiC1Bha2PBMs%2FrJz72cWp%2FftXTQZjL5Sijy7Nm2dAIhAOYWF7u%2BKpamc9b5M4PXKRjXDfpsb7hpI%2FLDr9fcPYO%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpdYhbJmYLeiSDACsq3AMOPHTurmYFKeXLqvJCvcmG6WbgAZdqDLHt3Qd066EdaZOcIjmVBsyVgW1MpSYrcuXLYWaXAbSgMH39BTcdBTpmH5SlQ8G3HFbKPQCiLS5bSEePCw7hBOXpjZ0uPUn4DewbNRnw8UoH8tEt3pHLFVr%2F9NmXYjOAbK6EXGp3rjrw9bjP08PpqS4fUQXzvTzF9jOJyukU13gJqD5eADek2XnmgA%2FMQAhhQYtK6XjQW1RVIPgxWnbeEomdH8xMyWTOFyiWcQDogn1k7SWoNoNPpZmjRFsF3MZHcvZKvXJef2h0iPz7P6yVdhViOhZDsITO2EkzIHzuvOMOaoUiZ9Z6a%2BI3XaoVCEXGqgEJ4b4B73fDzKGjoOAFdRK1xepssvviqkZureFi4%2Bq38ot2zW1BMORXcecPgGJIN0p2tRZQcfk7RXwQqT40pZfjqREwIp7fkTYthSu4hYDMsXpMW%2BnDYIL0s1Mnyx8RJnDv1r6HBmZYDYu6jPKQjOpTX7vUqhHIbZLewcD388qqvTSvhp1xfR%2BUBrrVnww%2B%2Beu4RKPpWVN7vUhrRhCY1UvFcz4Iw9%2Fo83G%2B9yJINLhIEXddk2uwunyElq8xNtJfFVvmKV34tM%2BlSM023j2Bgks13uFbDTD0l7PBBjqkAYrBjoXha64yTvGMv%2BtfwDKZ0mCP1i%2BwXxBTbUHunzfmMUUf5e3tfYn1OpPFrO%2FE78VSkQp6bChHQWFAiwzjY3TAxHxf4k4VddwzquA%2FZBDAsEwOsDnwz8i6YmjQbAxCy398kCMzk%2FxUwmHO9kilpBesuFbvR%2BJPPJWcmZdJ9U4csEqLehaO%2B6j9KACMXHm5%2B4hwBIuLeUmK7zn3X8twIOxcSb7m&X-Amz-Signature=d4a4f4e14b914e1d239f9e8aebe6b8d73bc680072dc48c997a0cd6e337763730&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHGBJMG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqiIiC1Bha2PBMs%2FrJz72cWp%2FftXTQZjL5Sijy7Nm2dAIhAOYWF7u%2BKpamc9b5M4PXKRjXDfpsb7hpI%2FLDr9fcPYO%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpdYhbJmYLeiSDACsq3AMOPHTurmYFKeXLqvJCvcmG6WbgAZdqDLHt3Qd066EdaZOcIjmVBsyVgW1MpSYrcuXLYWaXAbSgMH39BTcdBTpmH5SlQ8G3HFbKPQCiLS5bSEePCw7hBOXpjZ0uPUn4DewbNRnw8UoH8tEt3pHLFVr%2F9NmXYjOAbK6EXGp3rjrw9bjP08PpqS4fUQXzvTzF9jOJyukU13gJqD5eADek2XnmgA%2FMQAhhQYtK6XjQW1RVIPgxWnbeEomdH8xMyWTOFyiWcQDogn1k7SWoNoNPpZmjRFsF3MZHcvZKvXJef2h0iPz7P6yVdhViOhZDsITO2EkzIHzuvOMOaoUiZ9Z6a%2BI3XaoVCEXGqgEJ4b4B73fDzKGjoOAFdRK1xepssvviqkZureFi4%2Bq38ot2zW1BMORXcecPgGJIN0p2tRZQcfk7RXwQqT40pZfjqREwIp7fkTYthSu4hYDMsXpMW%2BnDYIL0s1Mnyx8RJnDv1r6HBmZYDYu6jPKQjOpTX7vUqhHIbZLewcD388qqvTSvhp1xfR%2BUBrrVnww%2B%2Beu4RKPpWVN7vUhrRhCY1UvFcz4Iw9%2Fo83G%2B9yJINLhIEXddk2uwunyElq8xNtJfFVvmKV34tM%2BlSM023j2Bgks13uFbDTD0l7PBBjqkAYrBjoXha64yTvGMv%2BtfwDKZ0mCP1i%2BwXxBTbUHunzfmMUUf5e3tfYn1OpPFrO%2FE78VSkQp6bChHQWFAiwzjY3TAxHxf4k4VddwzquA%2FZBDAsEwOsDnwz8i6YmjQbAxCy398kCMzk%2FxUwmHO9kilpBesuFbvR%2BJPPJWcmZdJ9U4csEqLehaO%2B6j9KACMXHm5%2B4hwBIuLeUmK7zn3X8twIOxcSb7m&X-Amz-Signature=6befe9bf306f0ed18d76d2b0a7a32f1a19b8205aca032bf958aef3fc1e22ac72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHGBJMG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqiIiC1Bha2PBMs%2FrJz72cWp%2FftXTQZjL5Sijy7Nm2dAIhAOYWF7u%2BKpamc9b5M4PXKRjXDfpsb7hpI%2FLDr9fcPYO%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpdYhbJmYLeiSDACsq3AMOPHTurmYFKeXLqvJCvcmG6WbgAZdqDLHt3Qd066EdaZOcIjmVBsyVgW1MpSYrcuXLYWaXAbSgMH39BTcdBTpmH5SlQ8G3HFbKPQCiLS5bSEePCw7hBOXpjZ0uPUn4DewbNRnw8UoH8tEt3pHLFVr%2F9NmXYjOAbK6EXGp3rjrw9bjP08PpqS4fUQXzvTzF9jOJyukU13gJqD5eADek2XnmgA%2FMQAhhQYtK6XjQW1RVIPgxWnbeEomdH8xMyWTOFyiWcQDogn1k7SWoNoNPpZmjRFsF3MZHcvZKvXJef2h0iPz7P6yVdhViOhZDsITO2EkzIHzuvOMOaoUiZ9Z6a%2BI3XaoVCEXGqgEJ4b4B73fDzKGjoOAFdRK1xepssvviqkZureFi4%2Bq38ot2zW1BMORXcecPgGJIN0p2tRZQcfk7RXwQqT40pZfjqREwIp7fkTYthSu4hYDMsXpMW%2BnDYIL0s1Mnyx8RJnDv1r6HBmZYDYu6jPKQjOpTX7vUqhHIbZLewcD388qqvTSvhp1xfR%2BUBrrVnww%2B%2Beu4RKPpWVN7vUhrRhCY1UvFcz4Iw9%2Fo83G%2B9yJINLhIEXddk2uwunyElq8xNtJfFVvmKV34tM%2BlSM023j2Bgks13uFbDTD0l7PBBjqkAYrBjoXha64yTvGMv%2BtfwDKZ0mCP1i%2BwXxBTbUHunzfmMUUf5e3tfYn1OpPFrO%2FE78VSkQp6bChHQWFAiwzjY3TAxHxf4k4VddwzquA%2FZBDAsEwOsDnwz8i6YmjQbAxCy398kCMzk%2FxUwmHO9kilpBesuFbvR%2BJPPJWcmZdJ9U4csEqLehaO%2B6j9KACMXHm5%2B4hwBIuLeUmK7zn3X8twIOxcSb7m&X-Amz-Signature=d74b8f8a000b6f7424375db9ea9a45926c7762ef3aea66e2c745c8f91ac69d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRZPVN6S%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBONifR6jpQqP7tZOfolxGZ0PhDr7xtVmTYMG6Jki4TAiBEF1eseCF3DxmdxYGV0bcTWMEgb8Jz0M9pahtucy1vRiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMime99IQnsDwjF5GKKtwDTuOkfL4zTuM7u6i%2FWvSMg2lveT%2BNdhiP%2Fh5tUd5Bzqb0cwsUxS%2BFf3UYnyGhJ0IPUm5wjayLS4oDZ5vI4IsYmyqKfAhWZw1P2TGXj7cS2glVQtSm%2FYX%2BrPWVAAegT%2BVT%2B8s62jHxY5K%2BHu%2FMPTYG47lqzb9PJJgs4OQ%2FIogFJI9lIjN75BjTGLoKat262BFuc2kDGjRwXA0cnDb5NAr7WmmIkAQSeBegdHiFLxhoRjC6ajAA6zdvhJid1TmuSvn2rwi9PaMdxXFdngMINScB1w9XrDw6336Y6%2Bg1OoaOvpIFJESumnVVzmRQP83YkKADr%2BIc%2FV%2BpNLX1G1t1FvsDD1oCGSlMmGgUs%2FkGu2ifpzLYsCgS%2BZJDdVtBgc1ohqZLA7VaEbqc5VMWrnL%2Fq0Zo9pH0rHTaPgslMkKSw5Lm9Bwljx0w3kp5LamBnjPnvM8DC%2BnKbzDisvrMX3vyNDedwN4DUeE4v7lULMSR%2FhBxwx479DquDjkgSbcZRbDDX3v61PEqb9LTg1xwhJg%2FssnwZNhS39o5eArFd5BkCU%2BYGGbPbWFFj6tH6bj6h3G0rtGQJx7Blj5d%2FhhUgg0%2FyCVkvLyMou%2BIznNO0c259jJOGiahpB30Xl%2F77%2BMSVh0whJizwQY6pgF1YkUmrx9yD96jf4lXP4WAqwtS2opc7n%2BrlanoqXLYSEIP8JgbhkpBQJs5pn%2FjMqGaMjW0UUnk2WMl64F6%2FqGVTo5nreD1i%2B2PAwSS01koW%2FFz1opq1YTK6q3T8FZh%2F97PfmNR9W1N0K2vXl5ZFc61B25b5UZWbZLKp6TPZNHNZM0YmwyXEZvk6ntlh47i%2FcNxZGpJv%2FAPABiNzr%2FExCS71ZyB%2FZ%2BJ&X-Amz-Signature=fee721b8aae1417164e3c997656f8738aece11172100d8b4e1e7d80fd7115068&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y63SO5V3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcNk8TCd0HzunzvHZ7bqafCsuyvsGFbshFXg74cE4zPAiEAvYnMSupxpUcUOBhk3jx8NqMC1Bk%2BqrFWPJ11BVKXLpQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtmwQMmMp4mObwrjCrcA4MmlDs%2FsXSjnnIhSugR5GUg1l5G9R5pOPLkdk6sTh9Y8AgDHS7cXsNudR2pDrsrWOZFVnB5WUb60bhTAp%2BUO3AcY%2Fy6sMmFrey8Y4BNp6sCd4VeIlC0M6fxmItpnv3GaoGlycuYwxTLUvVZD%2BXnYW%2BKoYqBofDFFtge4PpB%2B5EfG3h3c39HU72SH31mlycRLhRG9hm0AYAD3JV4bVNIx3fHfj7ig8u8OjGCnqJ8h6Dd%2Bx5%2FU1JQVR%2BVumqUVLdnz0GY8jFZFw5LMgwpQg8IjLo0aECNZOLHLGUsm55g0g4m8dElWJ9E1C7SUN%2BFvkzaDecfFPCBEd8rMTqD6R0I2ZLwdkEMWHOatB9Xv31MfVtPLx3EcYWdA4dtHwAwiw%2FIuobiBkJiikutBAOXCBBMriybEuxTEMOu5%2FYQIOqTpdpkmwLNglBWt%2Fw0ta0BBx2pkj2RT78FPMJyk5EhyPTfjMla7WEE%2BWsAGsmAqvVoAx8AfP8V86WY%2FWc32OQLbk%2B%2BBzrQ1i6994ayiq%2F9r%2FQ44R2wO%2Bl9cRW%2BaU4ouaRVGCvGezDR9Zr3MOLqFsUGP7t9v6hxAXv64bbbk6p1fVPhGCCswXFfL270uR3wFRJ78qW4Y0g9uVKKT816TNwoMIiYs8EGOqUBKb8Jn6M6Xgnp341ij7Wm0H60vWIS13mvrpFN4OUdJPPPCg9R2rP8u48%2B1gVRRDyqTFdu0M39caWP5eK2TFlb2OiRVmCV2MyONYbdOVOYpitPNcRWLEInygOQaLzuBprxNfxe4v6Mfnw7BvQanOzJFthKw0UUsktDhB0%2BPou4avrBaBCmDPeiH3p9psJfqV9w%2F%2FUKSTvsoCZ%2BydQ2LSUxZeVAnXXi&X-Amz-Signature=2865fd12fbd4896c8b2db55f603ad23be0e614321ab4322a844d09f7cbeff967&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXHGBJMG%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqiIiC1Bha2PBMs%2FrJz72cWp%2FftXTQZjL5Sijy7Nm2dAIhAOYWF7u%2BKpamc9b5M4PXKRjXDfpsb7hpI%2FLDr9fcPYO%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpdYhbJmYLeiSDACsq3AMOPHTurmYFKeXLqvJCvcmG6WbgAZdqDLHt3Qd066EdaZOcIjmVBsyVgW1MpSYrcuXLYWaXAbSgMH39BTcdBTpmH5SlQ8G3HFbKPQCiLS5bSEePCw7hBOXpjZ0uPUn4DewbNRnw8UoH8tEt3pHLFVr%2F9NmXYjOAbK6EXGp3rjrw9bjP08PpqS4fUQXzvTzF9jOJyukU13gJqD5eADek2XnmgA%2FMQAhhQYtK6XjQW1RVIPgxWnbeEomdH8xMyWTOFyiWcQDogn1k7SWoNoNPpZmjRFsF3MZHcvZKvXJef2h0iPz7P6yVdhViOhZDsITO2EkzIHzuvOMOaoUiZ9Z6a%2BI3XaoVCEXGqgEJ4b4B73fDzKGjoOAFdRK1xepssvviqkZureFi4%2Bq38ot2zW1BMORXcecPgGJIN0p2tRZQcfk7RXwQqT40pZfjqREwIp7fkTYthSu4hYDMsXpMW%2BnDYIL0s1Mnyx8RJnDv1r6HBmZYDYu6jPKQjOpTX7vUqhHIbZLewcD388qqvTSvhp1xfR%2BUBrrVnww%2B%2Beu4RKPpWVN7vUhrRhCY1UvFcz4Iw9%2Fo83G%2B9yJINLhIEXddk2uwunyElq8xNtJfFVvmKV34tM%2BlSM023j2Bgks13uFbDTD0l7PBBjqkAYrBjoXha64yTvGMv%2BtfwDKZ0mCP1i%2BwXxBTbUHunzfmMUUf5e3tfYn1OpPFrO%2FE78VSkQp6bChHQWFAiwzjY3TAxHxf4k4VddwzquA%2FZBDAsEwOsDnwz8i6YmjQbAxCy398kCMzk%2FxUwmHO9kilpBesuFbvR%2BJPPJWcmZdJ9U4csEqLehaO%2B6j9KACMXHm5%2B4hwBIuLeUmK7zn3X8twIOxcSb7m&X-Amz-Signature=d39156579d188432ecd6bcf8cfc6dcf5a02def0fbba93bdc6de5d01378480541&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
