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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5CMDIU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCe%2F%2BVq%2BAxmufWAn1WX5rbXO91euQpLk1kjtKbizak%2FwQIgfizrGzjAZJg5UQ5ZPMcw7zv35NqHESW8j%2FUYzSMJQmcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPJBqQnxC6Z35dRYuircA6XTd3%2B8PGLXCMifZwrPuXT6hHJXp1WbJP%2F%2BWZ%2BRPhUd4nh0UPIwbN6DJDxKO8%2FsA9EvgyyaukOpmtcMwe0U0WjwaTp4MBsR3L8ZBeLrWfxQsdlDdzEz8lEbP6TffAcNppvPXj41H7RommnmbuC659A2UQFuOsqFFYH2jJaJcS5UBl5%2FyIrj7%2FUeF0oTD1tnOE2kAXfx6XT%2BPSzwXtDGnh39Z8MTxQ1RsVjIPNJmT590LNNK2cAcLhOrYDK%2FcmfaFbHIan%2Fhf1XMN1zwVU95v7NRtDX4oujEzcwRrf9U33k0q823KkSdwK%2BpckXR1aU14WEtM3e5TauTFi04VW2niDMeoRP2qt4R%2FphEJsZMA6F10bLHFYlCTs1n3GwmA9CVsWmd73h8fFYKQyh9TrJDU6BDNKta1LZmRCF4KXDjqBLTnRWWEHZpX9zV05BFJSu3rBpYdM%2BPHIx9Yz4Uy2aU6lTyNyzreaqeBPUSSK8yeWSYeOJv7RrL1Wmm1uyKA0nb6Zky1wA2zN9MHpugWye5VNZDwSJIeAquTIZ9R6bZdsd5xZJosnARg2eZwX%2BHLtuzXYZXu6%2BZ4EXfPf6U%2BTjTIhempFHttOcrlP6rxEAwnsvm0qAwG11cenxvQxwyMI6H2sMGOqUBpwpP%2B03K%2BepA%2F308tPsFkarxHbxm8jqDnHvU3brfU14CIYunOuncaY0XMfiTQU0l8iyjXrsmK1YkLK9vknQTbO7rmYQ04hEH146IM9Q3DmNjvBLp5NzjkU69AYX5fHfbnzWUL17HurcBzIgWySgab4EfDDhNI60jYHtLfvJgh5IkSmAGZe6Umb3YWIA%2FwN8jMNz9QtwFhseSRNtmuDjyQohbbeXa&X-Amz-Signature=8a3b9e83b5bdde77f4a2d32819b15252b6ba8351c307c18bd40fbf2e1eb1882e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5CMDIU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCe%2F%2BVq%2BAxmufWAn1WX5rbXO91euQpLk1kjtKbizak%2FwQIgfizrGzjAZJg5UQ5ZPMcw7zv35NqHESW8j%2FUYzSMJQmcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPJBqQnxC6Z35dRYuircA6XTd3%2B8PGLXCMifZwrPuXT6hHJXp1WbJP%2F%2BWZ%2BRPhUd4nh0UPIwbN6DJDxKO8%2FsA9EvgyyaukOpmtcMwe0U0WjwaTp4MBsR3L8ZBeLrWfxQsdlDdzEz8lEbP6TffAcNppvPXj41H7RommnmbuC659A2UQFuOsqFFYH2jJaJcS5UBl5%2FyIrj7%2FUeF0oTD1tnOE2kAXfx6XT%2BPSzwXtDGnh39Z8MTxQ1RsVjIPNJmT590LNNK2cAcLhOrYDK%2FcmfaFbHIan%2Fhf1XMN1zwVU95v7NRtDX4oujEzcwRrf9U33k0q823KkSdwK%2BpckXR1aU14WEtM3e5TauTFi04VW2niDMeoRP2qt4R%2FphEJsZMA6F10bLHFYlCTs1n3GwmA9CVsWmd73h8fFYKQyh9TrJDU6BDNKta1LZmRCF4KXDjqBLTnRWWEHZpX9zV05BFJSu3rBpYdM%2BPHIx9Yz4Uy2aU6lTyNyzreaqeBPUSSK8yeWSYeOJv7RrL1Wmm1uyKA0nb6Zky1wA2zN9MHpugWye5VNZDwSJIeAquTIZ9R6bZdsd5xZJosnARg2eZwX%2BHLtuzXYZXu6%2BZ4EXfPf6U%2BTjTIhempFHttOcrlP6rxEAwnsvm0qAwG11cenxvQxwyMI6H2sMGOqUBpwpP%2B03K%2BepA%2F308tPsFkarxHbxm8jqDnHvU3brfU14CIYunOuncaY0XMfiTQU0l8iyjXrsmK1YkLK9vknQTbO7rmYQ04hEH146IM9Q3DmNjvBLp5NzjkU69AYX5fHfbnzWUL17HurcBzIgWySgab4EfDDhNI60jYHtLfvJgh5IkSmAGZe6Umb3YWIA%2FwN8jMNz9QtwFhseSRNtmuDjyQohbbeXa&X-Amz-Signature=7dae28cadb39b080449e36269c461dc1292b82954b04b00c495e8138af9d6f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5CMDIU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCe%2F%2BVq%2BAxmufWAn1WX5rbXO91euQpLk1kjtKbizak%2FwQIgfizrGzjAZJg5UQ5ZPMcw7zv35NqHESW8j%2FUYzSMJQmcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPJBqQnxC6Z35dRYuircA6XTd3%2B8PGLXCMifZwrPuXT6hHJXp1WbJP%2F%2BWZ%2BRPhUd4nh0UPIwbN6DJDxKO8%2FsA9EvgyyaukOpmtcMwe0U0WjwaTp4MBsR3L8ZBeLrWfxQsdlDdzEz8lEbP6TffAcNppvPXj41H7RommnmbuC659A2UQFuOsqFFYH2jJaJcS5UBl5%2FyIrj7%2FUeF0oTD1tnOE2kAXfx6XT%2BPSzwXtDGnh39Z8MTxQ1RsVjIPNJmT590LNNK2cAcLhOrYDK%2FcmfaFbHIan%2Fhf1XMN1zwVU95v7NRtDX4oujEzcwRrf9U33k0q823KkSdwK%2BpckXR1aU14WEtM3e5TauTFi04VW2niDMeoRP2qt4R%2FphEJsZMA6F10bLHFYlCTs1n3GwmA9CVsWmd73h8fFYKQyh9TrJDU6BDNKta1LZmRCF4KXDjqBLTnRWWEHZpX9zV05BFJSu3rBpYdM%2BPHIx9Yz4Uy2aU6lTyNyzreaqeBPUSSK8yeWSYeOJv7RrL1Wmm1uyKA0nb6Zky1wA2zN9MHpugWye5VNZDwSJIeAquTIZ9R6bZdsd5xZJosnARg2eZwX%2BHLtuzXYZXu6%2BZ4EXfPf6U%2BTjTIhempFHttOcrlP6rxEAwnsvm0qAwG11cenxvQxwyMI6H2sMGOqUBpwpP%2B03K%2BepA%2F308tPsFkarxHbxm8jqDnHvU3brfU14CIYunOuncaY0XMfiTQU0l8iyjXrsmK1YkLK9vknQTbO7rmYQ04hEH146IM9Q3DmNjvBLp5NzjkU69AYX5fHfbnzWUL17HurcBzIgWySgab4EfDDhNI60jYHtLfvJgh5IkSmAGZe6Umb3YWIA%2FwN8jMNz9QtwFhseSRNtmuDjyQohbbeXa&X-Amz-Signature=f7f56fff99b97f0425b2a6ca2bbdfb70875d0dc072c344f24bab6a0c5e295c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4HTFNW7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAaBY038xK9MDsCSPFlwgRrJ2vMz5HgQV6USAymAdGuqAiEAtJ%2FLwPejunhsrvs6LIXQp3SdrKSxitkDYtwW49QBtVsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJ5qww8H0Dq0%2FKqYxSrcA3zTXku0YWbdOKCZaqWgSRh2%2Fw6KzYQd2C1wwR9ILIJrCOG5pr6rUVRwrgGWojtpXZ8OhqvnWn2SrI1Q3gheOozFT2sR4bBMZgYv0CFmoUWDnRhlpsk3w7Kzc6MjKT5xQ0AjBgKDCDfnAPsoFN6EDg1zuytB8zZKBSCuTkiR0evbfbGaOxfj3l3BphRpH6sb2%2F%2BOPH7hMd98ZwMhg%2B8jZHXolMdgk8o2%2BTlXxoXkTsMQEImTBCKUsCeiksZol9DudoNITuZn8ScXbKJwiDVUbdsEB3cxw1SxpP%2BfAK4Avzv9Czvf7Aykmb3QgHumqL05CA2n%2FYHaRkjaVs8QmmIqTb9eNppk2lsc1PzblhM%2ByVFlYKnmkF9B%2B46Vo7pbtfWnQK%2B0oPDmK91WYvIf7bkVmjxAEgkEQ8KvZSzzE6Ekbp5eW%2BRzQCpdy1etfJLaVMuTnBZzrZL6HGIMBAF5yWOu6W%2BEyTD4Q7KcU4UOInOX5gLjYwHveQNKfDQKJ8u%2BUcHjId1hmwL9RSDSwGoGaqcuVIJRne3o%2FiuyvU31VzhQSDRB65ITCHWovVM6MJb9IXY0gTZLWm%2FqMc1p9t7THWuH93ekoGmlDgaIu2%2FxTSbeAHr6f7LWkQlwQV5O8WEJMLCG2sMGOqUBw9xhsx02Iw9JMPNplgovgRL6rc0Yj1p1Am29XFyqa6Po7xG1WaxArY9SANNDNzfb3XNVDbh31PIR8UN9c8qta1TDdJL7I7stlcUcI0py1wSIVizpWFrvL0xUrshG1HjlK25O0MX0KO0nc8sxgxQ%2FcuEjJqadjPqgNjMknrEE7Ze6Dg31p3%2FHoZyxXyAMGBZ74su54EsPRLSKIEeNReEX1tVswM24&X-Amz-Signature=0332bcdd4233bdb7617835c80018b44dabd33cc26a02d56176b57eaf149fe27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITBKUYP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDb32tZFokpmxp%2F1%2Bw98GmPUy99UqR2iBtCPvLi25VKdQIhAJbPVtoeNThLTPuHLEImXU%2BDa8HfmbblvZR6kvweAWpRKv8DCEoQABoMNjM3NDIzMTgzODA1Igw53RAUHUdIkETOx%2B4q3AMBIpw1XeBn24NYKAbfEwBI7Kq0cZOfAKWDQWOKaxFhMftDXnIU2vbt85iwV6zu6CQdW5Wf7ARHXy5HlzA7UIPvoTT%2FyA0j%2F0B1nVPTYqGU2n6Dx8Z0DVybf1m%2BuN4%2FpYW0S2%2FySfw89i102aa%2F37KrWQ5xUXyNvdbxnTc2ayU59EXUUQNBhdz9t7%2BL5vQsECKdY3Q%2F%2B5rYgfIYbrceTzVVo%2Bh9RIrely8EmVHSuIR43stKiajxdgILiVeRobIBzVjRYaCGy4JcnZR9cU51kND2OH68FNOk%2FvGyfaEJU36zM%2BdEsB52z4e1maNcQ7uAFkzGYlTl7w6iIltf7GTSUIqLcD95xzxaQppiFw6VP%2FU1GCbfbVclwxo4nP6jMmEX99GlFDtCtjYBjWWeTX1dbkUUheneCJgo%2FupVy5UCnbGIkfrf%2F6KYNK2uzL9mwy7TPgPey%2FOfjLMtAm%2F7vREupgNxSJFs1%2F5k4DHKijiV23H0TBideqo3R0neAerE1pKJ7HxtvZqnCV2145o%2FG5g289Q566G5cr%2Bgj34SMl0KWjYy%2Fb1L1A%2BmSxWDTxLoAqDEKgVGPEP0bxyl05AukcLKUJQo3aFKSkcWJVS%2BGBQlkX1oNpF6MoO1dVujeRlUbTC%2Fh9rDBjqkAUZHi%2FKXvspOP%2FQxi7U6a44XUion6x87qIssd%2Bnq%2FzlProJLHPIgAaHNkaTMoGAr68nEJMqqifCyph%2BbTr8xMeR2h997EQZLeh3%2F%2F03e8zazyjMQnqGQUrv0IeBD%2FVGZM2EmKvyLQReoRCMFyi98i9S68i%2B8hmqRjxlVvHU7%2FZq1HyzSzCTgTi289LqTqSZSBVj8e27Z3lta1Fl8Rl7Aj1o5bAPj&X-Amz-Signature=c59e18efe3a17303884f65cb39543b99c7aba3066b1c104ba030fbbd6f21b90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y5CMDIU%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T181311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCe%2F%2BVq%2BAxmufWAn1WX5rbXO91euQpLk1kjtKbizak%2FwQIgfizrGzjAZJg5UQ5ZPMcw7zv35NqHESW8j%2FUYzSMJQmcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPJBqQnxC6Z35dRYuircA6XTd3%2B8PGLXCMifZwrPuXT6hHJXp1WbJP%2F%2BWZ%2BRPhUd4nh0UPIwbN6DJDxKO8%2FsA9EvgyyaukOpmtcMwe0U0WjwaTp4MBsR3L8ZBeLrWfxQsdlDdzEz8lEbP6TffAcNppvPXj41H7RommnmbuC659A2UQFuOsqFFYH2jJaJcS5UBl5%2FyIrj7%2FUeF0oTD1tnOE2kAXfx6XT%2BPSzwXtDGnh39Z8MTxQ1RsVjIPNJmT590LNNK2cAcLhOrYDK%2FcmfaFbHIan%2Fhf1XMN1zwVU95v7NRtDX4oujEzcwRrf9U33k0q823KkSdwK%2BpckXR1aU14WEtM3e5TauTFi04VW2niDMeoRP2qt4R%2FphEJsZMA6F10bLHFYlCTs1n3GwmA9CVsWmd73h8fFYKQyh9TrJDU6BDNKta1LZmRCF4KXDjqBLTnRWWEHZpX9zV05BFJSu3rBpYdM%2BPHIx9Yz4Uy2aU6lTyNyzreaqeBPUSSK8yeWSYeOJv7RrL1Wmm1uyKA0nb6Zky1wA2zN9MHpugWye5VNZDwSJIeAquTIZ9R6bZdsd5xZJosnARg2eZwX%2BHLtuzXYZXu6%2BZ4EXfPf6U%2BTjTIhempFHttOcrlP6rxEAwnsvm0qAwG11cenxvQxwyMI6H2sMGOqUBpwpP%2B03K%2BepA%2F308tPsFkarxHbxm8jqDnHvU3brfU14CIYunOuncaY0XMfiTQU0l8iyjXrsmK1YkLK9vknQTbO7rmYQ04hEH146IM9Q3DmNjvBLp5NzjkU69AYX5fHfbnzWUL17HurcBzIgWySgab4EfDDhNI60jYHtLfvJgh5IkSmAGZe6Umb3YWIA%2FwN8jMNz9QtwFhseSRNtmuDjyQohbbeXa&X-Amz-Signature=21ecdcedce1bacbfa70e74dbd02c9e18f32a8eb0718ff1d83076effd95ee5751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
