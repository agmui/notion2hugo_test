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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6LCD32%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz8nU8NQxW5s13BJEzB%2FjIzIe7iTYktk8ImWM0iVGwPAIhAOBJuModbJ5HQ%2BU8%2BKWfgbY15mYQ03%2BKCbEz9pmbDDMDKv8DCD0QABoMNjM3NDIzMTgzODA1Igyns3q94iHTwzm5Vpwq3AP7SzB%2BJox4Rbfl5HQCoKwoiKaByUlmw9c1waCdQIJzC9miYYvcvDylg33GXEzmUZTX2uoNxkTu89zds7nxQx9qLALecJdYeUJo1xb1JcB3f2jgk54lFCO%2BT2dfHvzv0u96kKCj%2BO67liyNq6PUvs2KPr45LSTnBnEjKfX9k2KnL0VxZebYp4DQzxg5j5aH4tdosxgABmTEjP3W4hlwsny%2FaQHqJ3KT1hvfSg%2FDb0BXptYMnYM6D0uoIH62Eu4NmbdajiquAjh3IBSBlakWw%2F8Alqkc4ws%2BkCtZfnennScqyFD4GcyQyCbgqq%2B2cNuohO%2F%2FENc2am4KyTQcMWxzB%2FrDlMHSLK%2FZVm%2BImda%2FzbjSYGd2C%2BRTmV9grhRHeGgLq%2B9v6iqO0cQbCmm5ot8oOBqp2zwgjtfGZ76MiboXRfia7Sv%2FIVcC72XCH%2BO54v3OF%2FIxoWx1arN372gmOA0ZRpfo4TEaSJABlUaFakFWGEA1jtYPriP0wRVJxn5b4BJPRkI7eTcjHEWnmbb%2Bhgjr5nSzAX9BY34SJ%2BugLjL3KJYL4w1k8RJysNQSbfQUSz6XXVrMkRyeaFpzxkUChisfosmxYPGWj1SKFwVsDytAhjsQOUT6xhGlGakP%2BzPl3TCIgMi%2FBjqkATo%2Bubj5jKRxUgmFdhzcqxEKpFuXGGojdPC%2Fli4zL%2BpviMnsmU6Z8DYi1ct8DkIdMYW1tRmD0TiQ1w6HQdJjvZYB8FwdbTum%2BHvvsXZuDvjnJ%2BG2tWa7GXREBwX5xjk0pTZm%2FY%2FPz1YD%2BAejCf7ZXwjw2gbJCAmsAZY33DAkJ8Eb5Ne4dQv15Vy5UgMcI%2Fujy4VLLgYDaWe%2B4Zz4kHXInqrcvijx&X-Amz-Signature=d2e8c53b0844648dcafb3ab9d7b654c7ca89dd4a75ace2e70b468183372ed2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6LCD32%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz8nU8NQxW5s13BJEzB%2FjIzIe7iTYktk8ImWM0iVGwPAIhAOBJuModbJ5HQ%2BU8%2BKWfgbY15mYQ03%2BKCbEz9pmbDDMDKv8DCD0QABoMNjM3NDIzMTgzODA1Igyns3q94iHTwzm5Vpwq3AP7SzB%2BJox4Rbfl5HQCoKwoiKaByUlmw9c1waCdQIJzC9miYYvcvDylg33GXEzmUZTX2uoNxkTu89zds7nxQx9qLALecJdYeUJo1xb1JcB3f2jgk54lFCO%2BT2dfHvzv0u96kKCj%2BO67liyNq6PUvs2KPr45LSTnBnEjKfX9k2KnL0VxZebYp4DQzxg5j5aH4tdosxgABmTEjP3W4hlwsny%2FaQHqJ3KT1hvfSg%2FDb0BXptYMnYM6D0uoIH62Eu4NmbdajiquAjh3IBSBlakWw%2F8Alqkc4ws%2BkCtZfnennScqyFD4GcyQyCbgqq%2B2cNuohO%2F%2FENc2am4KyTQcMWxzB%2FrDlMHSLK%2FZVm%2BImda%2FzbjSYGd2C%2BRTmV9grhRHeGgLq%2B9v6iqO0cQbCmm5ot8oOBqp2zwgjtfGZ76MiboXRfia7Sv%2FIVcC72XCH%2BO54v3OF%2FIxoWx1arN372gmOA0ZRpfo4TEaSJABlUaFakFWGEA1jtYPriP0wRVJxn5b4BJPRkI7eTcjHEWnmbb%2Bhgjr5nSzAX9BY34SJ%2BugLjL3KJYL4w1k8RJysNQSbfQUSz6XXVrMkRyeaFpzxkUChisfosmxYPGWj1SKFwVsDytAhjsQOUT6xhGlGakP%2BzPl3TCIgMi%2FBjqkATo%2Bubj5jKRxUgmFdhzcqxEKpFuXGGojdPC%2Fli4zL%2BpviMnsmU6Z8DYi1ct8DkIdMYW1tRmD0TiQ1w6HQdJjvZYB8FwdbTum%2BHvvsXZuDvjnJ%2BG2tWa7GXREBwX5xjk0pTZm%2FY%2FPz1YD%2BAejCf7ZXwjw2gbJCAmsAZY33DAkJ8Eb5Ne4dQv15Vy5UgMcI%2Fujy4VLLgYDaWe%2B4Zz4kHXInqrcvijx&X-Amz-Signature=a8f261df5dbeeede3494693247aec6ee15fac7e83a3449d37af132e68b6f8f16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XF6NEX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVW8FlmK1fF52BVPYEkDSt5HQZluOeZlFD%2BK5tttAg7AiEAmhhzVDTe3GCAJf0DEKTn%2BpOTnfphtD0vlq3yUdH8Q8oq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJAMM%2FBpTjFWXpINZircA1oVsvLp1Lrej7HrlB4e%2BIxFWizo3TwFPPz12So5Cha%2FJbxVvb8KbiRtS98nWhCyvnkODMlr2InI%2F2lV%2BtniViIs30nyh2yxUJ9Pk8JzNjRzZKIrLjvXRJEdlgfxj9x%2Fu74u9uCdQIs%2BVCkIRtuDaiVjNqecaXy%2FkqqcziGJyHue9p49JPvBfBqQldLM%2BifBq8uOZFBaZQxFmB3B5SYb8PFxAijT7GWPQuxjKFbU6rskvPfp4ukSz0e%2B3W7ol%2FgCre4RFo%2F2OX6%2F%2FPG72QpZ1%2FKvIAO8jOygWrbUhy64h3dKZcHhx51vXJZ5RMbUMP3A0Ra5j1SyHpr7U2VbUnYpiXNZth%2Fb6SqCZUJKVsDN6X2OVbJM91buaYmF2iJvdstAgi4o7LzR7dXy2M3WTHgWKDAsA7z67QeKTjjhtg3Esgyd5%2FXkiXbcXkUJ%2Bxpovy9GG99KFFtfMBEevRXIrLtjLkg4W%2B0jeiD7HswsOpCYv8Cx3xbkxq2w%2BlzXIefvxITwQju9VLQHpRmuhgHNN6b7Nxjv2uxqmiZt7NsJYLbt4TYePQPtW200ChPxKrPFeDb%2BGr989GjmwoVuq5lORrldQK%2BZsszuJE4%2FnkmQkzX8rrYwezqLt9aLRQ314dZvMNyAyL8GOqUBAcVfEmeEtEVKvxUkvLpR2jMrF1gG36uU638eUGkSS1R1hiMgRp4mH%2FAlT6kgGwXBFzp6eMRJ8g3nUKngwfz3ZH4YCYerq8qIq3nrtd2uLVMUj%2F3bMMirGlPXhBS8m%2FrOgBjZe2Vzq0MtUGZBNvBnqOl%2B77dMnWSfkzGoFkqeJolaT2UYYA5t44QaP5jGnHIUzOlzjFpLEgI9eOJwCP5r7KREZABe&X-Amz-Signature=d678694bff4d0640496ada4fc8a9372892a487897bb1501fc29f9ec400c3fe78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SZV7LTU%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTypX%2BZ3WZhnYEKqB4k%2BeC4L0Lxdp4t12kxJKcdwdk4AiEA2UrXzGXTDemFaJfOIOmlw9fki1tn%2B9Ss7cPwXLpRy7oq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAxbzDdV80osbpphMCrcA7%2Fzcsj8MS0%2FCYpiZD5fmXOIXMP8ICqEx0VaV%2F1AVvnmjH6Cw0lPBeU8a3CybLVNLsUFr%2FEBprfr2tN3aKZc5IKrstlTHVSXrTijD2YD%2FNXjL3fndK3S62IqqoIkMXPH3ooPp5yM4LZKCvncMGfnBgSt%2BbAWgf5n1KiIPygUwOMTHWG2dQqh%2FIA4%2BpiLUX6l23JLqSXvG8G%2FAkTpCAp7JQAy4z96DBU4EG6vDbCk1NTQNcWSdwUmlfmnZ0Lb9QJN%2FcXg1fytrHfOZdhIIrHosPGgluAdYJwJvst6s9MeYes9Xkeig4S8Vj8IVNTH%2FeAoo7skns8II3BB0SzycLsx%2FOQj9rFP%2F9jLgxk%2Bzr0dduOt5G5H8GHVsQe9bd7JbHVTnCTUcT%2FC8jTJT2dnOJPo%2BkkXkisIJGdaVOBH7VFD3qEuMjNreePPwD09hE6TAetA0n2nFPMpNmiBDtMDC4bO2UrWoGTGo5moXr6txlhXsnznVkbYzLeg1ENidyH9XPMKqIx%2BAQb8%2F2Ps0sJkfBx20f3Z07wzaWrZHoFNsoeyNl7X2sdOFHRkuwXv0TeWnoKFJtvP5s6XNzlbYDzSkA%2Bb%2F4Crl%2FXzWUUIHg8DF%2B%2BnX3MRcKYKa05xhO2AVKdVMO3%2Fx78GOqUBC7s8m4W9mtg33T3AjYj3CMLpT%2BDgfX5qNbPyO4nZiZa95rOTIf1KiCFsWh7P0oU9HnalpzpuMkh2GmQvknqsX4dcD5OzcBGPOR%2BXbvyVQQz1QUKvSSsNQSGWlWbfAMgAjRkuDJUBlmZKknaY9SIfQXSMXSjdFJzCuIdPUNKO47sK91UKYzXitiDjdvacSsGmZ6r35EI5iCon%2BmHCwoFvJ05WB%2B8k&X-Amz-Signature=cf763c5b311dfe35f18500a3ee38417c4e9b8f1682a8868757347e42e3a18281&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6LCD32%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz8nU8NQxW5s13BJEzB%2FjIzIe7iTYktk8ImWM0iVGwPAIhAOBJuModbJ5HQ%2BU8%2BKWfgbY15mYQ03%2BKCbEz9pmbDDMDKv8DCD0QABoMNjM3NDIzMTgzODA1Igyns3q94iHTwzm5Vpwq3AP7SzB%2BJox4Rbfl5HQCoKwoiKaByUlmw9c1waCdQIJzC9miYYvcvDylg33GXEzmUZTX2uoNxkTu89zds7nxQx9qLALecJdYeUJo1xb1JcB3f2jgk54lFCO%2BT2dfHvzv0u96kKCj%2BO67liyNq6PUvs2KPr45LSTnBnEjKfX9k2KnL0VxZebYp4DQzxg5j5aH4tdosxgABmTEjP3W4hlwsny%2FaQHqJ3KT1hvfSg%2FDb0BXptYMnYM6D0uoIH62Eu4NmbdajiquAjh3IBSBlakWw%2F8Alqkc4ws%2BkCtZfnennScqyFD4GcyQyCbgqq%2B2cNuohO%2F%2FENc2am4KyTQcMWxzB%2FrDlMHSLK%2FZVm%2BImda%2FzbjSYGd2C%2BRTmV9grhRHeGgLq%2B9v6iqO0cQbCmm5ot8oOBqp2zwgjtfGZ76MiboXRfia7Sv%2FIVcC72XCH%2BO54v3OF%2FIxoWx1arN372gmOA0ZRpfo4TEaSJABlUaFakFWGEA1jtYPriP0wRVJxn5b4BJPRkI7eTcjHEWnmbb%2Bhgjr5nSzAX9BY34SJ%2BugLjL3KJYL4w1k8RJysNQSbfQUSz6XXVrMkRyeaFpzxkUChisfosmxYPGWj1SKFwVsDytAhjsQOUT6xhGlGakP%2BzPl3TCIgMi%2FBjqkATo%2Bubj5jKRxUgmFdhzcqxEKpFuXGGojdPC%2Fli4zL%2BpviMnsmU6Z8DYi1ct8DkIdMYW1tRmD0TiQ1w6HQdJjvZYB8FwdbTum%2BHvvsXZuDvjnJ%2BG2tWa7GXREBwX5xjk0pTZm%2FY%2FPz1YD%2BAejCf7ZXwjw2gbJCAmsAZY33DAkJ8Eb5Ne4dQv15Vy5UgMcI%2Fujy4VLLgYDaWe%2B4Zz4kHXInqrcvijx&X-Amz-Signature=f3daf8fb23a8f061d1ffc984389522de0aac4eb0ef7d71c09d916344674f298c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
