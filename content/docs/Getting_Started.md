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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2QMNJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmKJ%2FHa1bGoex%2BiTCJdfOWZ0ycuPLUVO3JCh759w%2F21AiEAk0uFE0zN%2BFYU8D27gpWrCvLu3F9OmeHEFEW2Hl4buVoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP3GNEXmoVmbwJE3yrcAxqqaFvlKCrwo4zav8lPAVv15fjgpGJllfciYeUl4gjMN4jnehyMQrL%2B6PA8M%2Fy64lQSHxDxqR%2F5ngg2s1ITTucqbtGl2aF6Tzc9x9WleIrs%2Ff2Tw2A1CoVCHPTolol%2BDLUwxroB0T9SyK8oUOaxPsyF%2Fm8SX6SS55MdUD4ZxVTk5cansUCiR5WHdrZfXLe9Pl0KkEY%2BR1Dk9ytjl0eklOvrzDEHFl50pgFFSofxIqZJsBNUuVMYGdZm2QxSY2SgNn4H6fcUEYhg8XM6xOPHkFuOeyJmYOlA2bxdyyPv7R1bNsg5vdtEYSE6A3qeonKhYxt%2BJ7tUeD%2F1gCzKd6Ck4E%2FnkSyXNujHmrQ7HCIw65V5NxbFf2VhffePTmqciHiOalZi4mYxdYndV8XkBXDn%2F3NcDZDGcZQsJCMZYVSAydcwcx9Hv8fj62GGAB4ub%2FRideBKnNxsaVc8HArMwjvRpYsNgZsBywQhxqSPGf3c9sw1LDvGkja3WwKa%2FZexOpX2Xc%2BP23qDOcRNEAlWvAYDidMbY6JUdUE2kP6rBS8iAlM4a1iaOivq1AaLmBNScyqZESLXgCA%2FPoez8kXTb1%2BwLnjiT%2Fd3ipE5wnok6oHt0tkgj0mwuzAnI35kz2dzMKj%2F7MEGOqUBJ1jQJ%2BMIm86u4WbKT3oZGBnIsB6iAI4xhi%2B2TCKTpLvvoWlF48jcs89RCYg9f7WOh%2FS%2BgExN5ptamTKAOPZRI1uoKjo113hWYhctCzx9qxUDSofpTsIT4yhnqyUhJZXhmJWiU6qi2ycWy2eVDgunGFVmj%2F3yhZ9e4zrHrfB8yeHij0jeZ8iYB1l%2BIXbTszU9qUJsuxTc132b1%2BtDivIaThVUe4qm&X-Amz-Signature=dab566a24584307cb34bb725d461f571169898fe3745385e3d3ad960b6a8b4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2QMNJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmKJ%2FHa1bGoex%2BiTCJdfOWZ0ycuPLUVO3JCh759w%2F21AiEAk0uFE0zN%2BFYU8D27gpWrCvLu3F9OmeHEFEW2Hl4buVoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP3GNEXmoVmbwJE3yrcAxqqaFvlKCrwo4zav8lPAVv15fjgpGJllfciYeUl4gjMN4jnehyMQrL%2B6PA8M%2Fy64lQSHxDxqR%2F5ngg2s1ITTucqbtGl2aF6Tzc9x9WleIrs%2Ff2Tw2A1CoVCHPTolol%2BDLUwxroB0T9SyK8oUOaxPsyF%2Fm8SX6SS55MdUD4ZxVTk5cansUCiR5WHdrZfXLe9Pl0KkEY%2BR1Dk9ytjl0eklOvrzDEHFl50pgFFSofxIqZJsBNUuVMYGdZm2QxSY2SgNn4H6fcUEYhg8XM6xOPHkFuOeyJmYOlA2bxdyyPv7R1bNsg5vdtEYSE6A3qeonKhYxt%2BJ7tUeD%2F1gCzKd6Ck4E%2FnkSyXNujHmrQ7HCIw65V5NxbFf2VhffePTmqciHiOalZi4mYxdYndV8XkBXDn%2F3NcDZDGcZQsJCMZYVSAydcwcx9Hv8fj62GGAB4ub%2FRideBKnNxsaVc8HArMwjvRpYsNgZsBywQhxqSPGf3c9sw1LDvGkja3WwKa%2FZexOpX2Xc%2BP23qDOcRNEAlWvAYDidMbY6JUdUE2kP6rBS8iAlM4a1iaOivq1AaLmBNScyqZESLXgCA%2FPoez8kXTb1%2BwLnjiT%2Fd3ipE5wnok6oHt0tkgj0mwuzAnI35kz2dzMKj%2F7MEGOqUBJ1jQJ%2BMIm86u4WbKT3oZGBnIsB6iAI4xhi%2B2TCKTpLvvoWlF48jcs89RCYg9f7WOh%2FS%2BgExN5ptamTKAOPZRI1uoKjo113hWYhctCzx9qxUDSofpTsIT4yhnqyUhJZXhmJWiU6qi2ycWy2eVDgunGFVmj%2F3yhZ9e4zrHrfB8yeHij0jeZ8iYB1l%2BIXbTszU9qUJsuxTc132b1%2BtDivIaThVUe4qm&X-Amz-Signature=3a3991dcdb91725f95ed450909e040076682d60bd5e61cc86d2079ae0fd0447d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2QMNJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmKJ%2FHa1bGoex%2BiTCJdfOWZ0ycuPLUVO3JCh759w%2F21AiEAk0uFE0zN%2BFYU8D27gpWrCvLu3F9OmeHEFEW2Hl4buVoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP3GNEXmoVmbwJE3yrcAxqqaFvlKCrwo4zav8lPAVv15fjgpGJllfciYeUl4gjMN4jnehyMQrL%2B6PA8M%2Fy64lQSHxDxqR%2F5ngg2s1ITTucqbtGl2aF6Tzc9x9WleIrs%2Ff2Tw2A1CoVCHPTolol%2BDLUwxroB0T9SyK8oUOaxPsyF%2Fm8SX6SS55MdUD4ZxVTk5cansUCiR5WHdrZfXLe9Pl0KkEY%2BR1Dk9ytjl0eklOvrzDEHFl50pgFFSofxIqZJsBNUuVMYGdZm2QxSY2SgNn4H6fcUEYhg8XM6xOPHkFuOeyJmYOlA2bxdyyPv7R1bNsg5vdtEYSE6A3qeonKhYxt%2BJ7tUeD%2F1gCzKd6Ck4E%2FnkSyXNujHmrQ7HCIw65V5NxbFf2VhffePTmqciHiOalZi4mYxdYndV8XkBXDn%2F3NcDZDGcZQsJCMZYVSAydcwcx9Hv8fj62GGAB4ub%2FRideBKnNxsaVc8HArMwjvRpYsNgZsBywQhxqSPGf3c9sw1LDvGkja3WwKa%2FZexOpX2Xc%2BP23qDOcRNEAlWvAYDidMbY6JUdUE2kP6rBS8iAlM4a1iaOivq1AaLmBNScyqZESLXgCA%2FPoez8kXTb1%2BwLnjiT%2Fd3ipE5wnok6oHt0tkgj0mwuzAnI35kz2dzMKj%2F7MEGOqUBJ1jQJ%2BMIm86u4WbKT3oZGBnIsB6iAI4xhi%2B2TCKTpLvvoWlF48jcs89RCYg9f7WOh%2FS%2BgExN5ptamTKAOPZRI1uoKjo113hWYhctCzx9qxUDSofpTsIT4yhnqyUhJZXhmJWiU6qi2ycWy2eVDgunGFVmj%2F3yhZ9e4zrHrfB8yeHij0jeZ8iYB1l%2BIXbTszU9qUJsuxTc132b1%2BtDivIaThVUe4qm&X-Amz-Signature=d81f69a38159795fc726288b94de7e5438486562ece1e066d5d2e6050713be3c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2YWUF5O%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXpRONzNidoZWGitDonafpwB6G42gtbFntrVGbcI6dlAiEAx1xBEH%2FP9%2Fbfvr90waALvrp6S1S8sTFlvpU52NNco9EqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP81K7G3S7p5LrCdvircA7JqDH%2B1Yudv4eDLWlCkTfP%2FRRxgEliOzwMQkNhNQoM88dljruj%2FRLGhBDOPYJJKC%2BgRplDsxlcyQqoCDdfmcyY10SbQV3OvKsBuVN8djUhcp1rQF6IA%2Fu%2FUcZuyazeME2mUBkthgIn2hqLtttFfvi2T1lejUwCDJMI1oGbUC79X9i5BftrErcXaGm2e6HHXzI1VYR4YbqQa2wJ0y7rZ7ol5JGBTHkZ0GyBADuodN%2FAfiBLAVKz2%2FmxRuJ%2FnQZlx30ecskr4e9H5pSsogd6pn%2FXHpgPziDB6m869uq0KRfQr5GCPmhxZF6SgMVNZMlX6S8vPX9zuu5dv1IA%2Fq0XZcMVL%2F5%2FYneMB%2FBbyUqU1c7qDU9JP6UoKOxY7MLQxIQXwmLyVQTm704yjTDeyudkoPEJYd96H3TfS6Sc17iXbKv5xwJ3z1wBVV8R7E%2FF45uNcpgm1epHjy04UeUak1%2BWbtmvbWgzqjQ95pB7ljTHQ9nDMcCKNdOQzXrXvfYmWfPrUngnKmvjFI3mKSC4FJbD167KowQMk0K7njjYAYpnnX8R0eYbBYGC%2B%2FyZrJs32lhZJ2%2FHyatoDzAoxpX4DrOb2EmXYYKvkoAzN4Dk78NOGXqrCWyn8cGE4fwN4%2BOwxMNPG7cEGOqUByQ3hqadsFxcQUQ%2FCBe5gL1u11gE%2Fihi5fFSyjYn7bBi%2BJmfPRK3lYqH%2FYL%2FJB0ef%2BQB6Tq3jQcSnpeZKyMpFyh5MmURw0rk2baJxJfjYdZr0ET1OOTCf%2Fn1WqSMjU52vcxNa0%2BquIYLyrS1%2Bf9OnEa7LxtbW0lUB2u6Ff33%2B4cIK7fGYSpGsi3yTQZEjKFNLghlHUBbtlND%2FU1ibXF16lGwF44H9&X-Amz-Signature=78f4b01f90736ffcd95282f6f83c41fbf99d55b43b7e84da23694491b8bec60d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDCBX7G%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQoRbyllR0QKreF2GJEAuNbgOzeGXdYXfMcPv6v4hNcAiEAg5IDySma%2F6MWXKXaYXyZD7E0SZtnimo9ZxQBaOFVK2wqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoUaADBLOG%2FPilw%2BCrcA4b35vYr2tJX7k8DKrA89N8SlRimyGDrHbgbPZ2LgF2wiXkvFuNdbhpHsY01m0CaJSBYu0cu33TWT%2FIp7oVugs88cY4h%2FEIG1yXzAJW2MKjDIjaa0nZQ1a5vOoNS9E0KbpbDG3G%2B6cfY4N43iR2tqc4PzfEa7r0cbuZKetOAJMAJ%2Bi1X%2BOsYEgZtZ6fu1TfiSYoLfNcz4sWuii8HS0%2FRIkWm4KpDfiGHUztO6CfUMwYNWu5i2hWGFcepHqiEmI1CeRDWnr5aLBow9IK%2BUfmZCokYuLtzd6F3XdVRPJcMX2QGGX%2FY2E2ojrjMaLFef1%2BObYoP6epxeJCeOwwRYQAz8uPHZ9ITQRO1X4qAYgcys7OMm2DIMaSY0QeJJ9HRld8zWbeuEk3qMExqQn%2F4gmNWZOdzp5dXnlOKTChBJhCytmj6XE2vIMjbcQfgYnZpA0Pk3KS9zhDROn%2BnSpVTxUVWhoC9FcvvInFrz%2BVl%2FkNlc6Nuvc5hAv4QlR5B6NKvgT8jiBTRY5iAn7MXfrZ1LgLzIw3LF6ZAOMw19OL2jWaHV%2FDGLTjbYFs4LSR1ZieTsV4q7Tq02rLD8aTxwV1pXX5RWdw6asSoo44DtJV0kUn5jKIWPV9h%2FsOUPHXUW4DqMMe17cEGOqUB3x8VQYoKItGm4x%2Fm2bn3UIT4ExcIlbhPalWUiaYcBAR5eOaogmKP7U4BM9ICdj%2BQ646ZnbwcPuLoN7xyD65up%2Bqyd3l5ArKFV6CVMusk6KwDbv7Yq1Us57y7ApuJccAb5a8zU4p3Z3vrflq9Opggny03iCPvLNnBgxfMTgU4YfxZf4XW%2FG%2BYVQaB3tDbSqapvx2NEfNOit1RMo8zwo2C7%2F516X21&X-Amz-Signature=d8b43f4bb665b2dc8ce6ffde9fdc2809a2fe289b99d450d014509664a9731817&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUM2QMNJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmKJ%2FHa1bGoex%2BiTCJdfOWZ0ycuPLUVO3JCh759w%2F21AiEAk0uFE0zN%2BFYU8D27gpWrCvLu3F9OmeHEFEW2Hl4buVoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP3GNEXmoVmbwJE3yrcAxqqaFvlKCrwo4zav8lPAVv15fjgpGJllfciYeUl4gjMN4jnehyMQrL%2B6PA8M%2Fy64lQSHxDxqR%2F5ngg2s1ITTucqbtGl2aF6Tzc9x9WleIrs%2Ff2Tw2A1CoVCHPTolol%2BDLUwxroB0T9SyK8oUOaxPsyF%2Fm8SX6SS55MdUD4ZxVTk5cansUCiR5WHdrZfXLe9Pl0KkEY%2BR1Dk9ytjl0eklOvrzDEHFl50pgFFSofxIqZJsBNUuVMYGdZm2QxSY2SgNn4H6fcUEYhg8XM6xOPHkFuOeyJmYOlA2bxdyyPv7R1bNsg5vdtEYSE6A3qeonKhYxt%2BJ7tUeD%2F1gCzKd6Ck4E%2FnkSyXNujHmrQ7HCIw65V5NxbFf2VhffePTmqciHiOalZi4mYxdYndV8XkBXDn%2F3NcDZDGcZQsJCMZYVSAydcwcx9Hv8fj62GGAB4ub%2FRideBKnNxsaVc8HArMwjvRpYsNgZsBywQhxqSPGf3c9sw1LDvGkja3WwKa%2FZexOpX2Xc%2BP23qDOcRNEAlWvAYDidMbY6JUdUE2kP6rBS8iAlM4a1iaOivq1AaLmBNScyqZESLXgCA%2FPoez8kXTb1%2BwLnjiT%2Fd3ipE5wnok6oHt0tkgj0mwuzAnI35kz2dzMKj%2F7MEGOqUBJ1jQJ%2BMIm86u4WbKT3oZGBnIsB6iAI4xhi%2B2TCKTpLvvoWlF48jcs89RCYg9f7WOh%2FS%2BgExN5ptamTKAOPZRI1uoKjo113hWYhctCzx9qxUDSofpTsIT4yhnqyUhJZXhmJWiU6qi2ycWy2eVDgunGFVmj%2F3yhZ9e4zrHrfB8yeHij0jeZ8iYB1l%2BIXbTszU9qUJsuxTc132b1%2BtDivIaThVUe4qm&X-Amz-Signature=3037f8d6d00ce242d20202f5689718a039b7451782e57899ebdb4cdf50c892a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
