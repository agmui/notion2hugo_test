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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXRQIQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEiiPbEy6bKMh6WJVWwWVvvQPMNKIQj14UANtN0iqZgKAiEAzu3114vdKjsRJkX5nAStZ34pMD1CBW1JG0IuengYuacq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH7qw0xu5SM9Bc8xCyrcA9iJjRicNy%2FXTE62XByMnZBIGycMpHUK8sOUvcQe8FBZrnKLWQ%2FAYxRczRQrvFwJilLrpXb89sQYnKtagHCcvOooHxIHBCCG4msPutkm0srcIOhT08tvGJJHSi2rqPpwp1dZfDgLsejjuB56qmktGFmI1MqUWa9dYyEZt8ZIv%2Fa%2FbivK9zm8%2BBpuyBbVhjRonHKIs8EZ3CXOHzW%2FJZ35mLm1%2BLNYCSw18ykJ3h2plUdNmgGBy0wHK9qWknBgmkqjKBsrrYwSEDRQn1q0xymkSv93ZrWUOG6EEp%2BCWwa2wp%2FyXhE13aB5tJrcDhoEBDsK8lN2KCyVz6XZI424xgq8rs5ZrO5e8AqnaX3%2FdzjXiRx%2BbaxYoCLNsRJvSCpewcg1j6xDRbB%2FNuZUnb0DnZsqEEG%2B9p5kfw6o6bJU%2BpBkksfgSA0HtZ1YsxjqrFiVjO3upP0k5RfwO2Kj6Nmzs4jjvxQADKteA5%2FphRqzW6OF6UR1t9zQi5AC61MAaCJqMdCVg3mj5ebjp%2BfcfOwabmd1obNM7K1C37%2BF17BP1%2F8uyIWlkbLFOqzstQddhYEv52im9ugVzm%2BSWVOFULWVTfQCmz6gHX8gMrUprtbiLgXHH%2FoD9l39Coc8n8Xcdu6TMJ2A8MIGOqUBOHwnFgzH149ZWUyHoCZzwXbRheQQRJNlhjTrkF2NEKgNXvq24wDpuwLDI%2FkjqE4%2BkOrv3rNiWzOPhqAg5POG5t%2BndbBhdVaxvYq%2B3si3Tsj6tPEZ767pdf4lXLgaW8pjNvmseb5blRez5AhxB5SmOa%2FBtY51UBOi6175XhPGfuufKlsuZLQQaOCHrnVnv205suirHOSLMhDkkqjn9nx%2BReEbKJUb&X-Amz-Signature=56ecb595b8f672978af55fc73ed884d20b49e740faa1ff1288308904d70ac7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXRQIQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEiiPbEy6bKMh6WJVWwWVvvQPMNKIQj14UANtN0iqZgKAiEAzu3114vdKjsRJkX5nAStZ34pMD1CBW1JG0IuengYuacq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH7qw0xu5SM9Bc8xCyrcA9iJjRicNy%2FXTE62XByMnZBIGycMpHUK8sOUvcQe8FBZrnKLWQ%2FAYxRczRQrvFwJilLrpXb89sQYnKtagHCcvOooHxIHBCCG4msPutkm0srcIOhT08tvGJJHSi2rqPpwp1dZfDgLsejjuB56qmktGFmI1MqUWa9dYyEZt8ZIv%2Fa%2FbivK9zm8%2BBpuyBbVhjRonHKIs8EZ3CXOHzW%2FJZ35mLm1%2BLNYCSw18ykJ3h2plUdNmgGBy0wHK9qWknBgmkqjKBsrrYwSEDRQn1q0xymkSv93ZrWUOG6EEp%2BCWwa2wp%2FyXhE13aB5tJrcDhoEBDsK8lN2KCyVz6XZI424xgq8rs5ZrO5e8AqnaX3%2FdzjXiRx%2BbaxYoCLNsRJvSCpewcg1j6xDRbB%2FNuZUnb0DnZsqEEG%2B9p5kfw6o6bJU%2BpBkksfgSA0HtZ1YsxjqrFiVjO3upP0k5RfwO2Kj6Nmzs4jjvxQADKteA5%2FphRqzW6OF6UR1t9zQi5AC61MAaCJqMdCVg3mj5ebjp%2BfcfOwabmd1obNM7K1C37%2BF17BP1%2F8uyIWlkbLFOqzstQddhYEv52im9ugVzm%2BSWVOFULWVTfQCmz6gHX8gMrUprtbiLgXHH%2FoD9l39Coc8n8Xcdu6TMJ2A8MIGOqUBOHwnFgzH149ZWUyHoCZzwXbRheQQRJNlhjTrkF2NEKgNXvq24wDpuwLDI%2FkjqE4%2BkOrv3rNiWzOPhqAg5POG5t%2BndbBhdVaxvYq%2B3si3Tsj6tPEZ767pdf4lXLgaW8pjNvmseb5blRez5AhxB5SmOa%2FBtY51UBOi6175XhPGfuufKlsuZLQQaOCHrnVnv205suirHOSLMhDkkqjn9nx%2BReEbKJUb&X-Amz-Signature=4f200a1631b2b80f99bf74f6df6eee7b43dc5bd74af3fdd6a22cf9bfad79707d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXRQIQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEiiPbEy6bKMh6WJVWwWVvvQPMNKIQj14UANtN0iqZgKAiEAzu3114vdKjsRJkX5nAStZ34pMD1CBW1JG0IuengYuacq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH7qw0xu5SM9Bc8xCyrcA9iJjRicNy%2FXTE62XByMnZBIGycMpHUK8sOUvcQe8FBZrnKLWQ%2FAYxRczRQrvFwJilLrpXb89sQYnKtagHCcvOooHxIHBCCG4msPutkm0srcIOhT08tvGJJHSi2rqPpwp1dZfDgLsejjuB56qmktGFmI1MqUWa9dYyEZt8ZIv%2Fa%2FbivK9zm8%2BBpuyBbVhjRonHKIs8EZ3CXOHzW%2FJZ35mLm1%2BLNYCSw18ykJ3h2plUdNmgGBy0wHK9qWknBgmkqjKBsrrYwSEDRQn1q0xymkSv93ZrWUOG6EEp%2BCWwa2wp%2FyXhE13aB5tJrcDhoEBDsK8lN2KCyVz6XZI424xgq8rs5ZrO5e8AqnaX3%2FdzjXiRx%2BbaxYoCLNsRJvSCpewcg1j6xDRbB%2FNuZUnb0DnZsqEEG%2B9p5kfw6o6bJU%2BpBkksfgSA0HtZ1YsxjqrFiVjO3upP0k5RfwO2Kj6Nmzs4jjvxQADKteA5%2FphRqzW6OF6UR1t9zQi5AC61MAaCJqMdCVg3mj5ebjp%2BfcfOwabmd1obNM7K1C37%2BF17BP1%2F8uyIWlkbLFOqzstQddhYEv52im9ugVzm%2BSWVOFULWVTfQCmz6gHX8gMrUprtbiLgXHH%2FoD9l39Coc8n8Xcdu6TMJ2A8MIGOqUBOHwnFgzH149ZWUyHoCZzwXbRheQQRJNlhjTrkF2NEKgNXvq24wDpuwLDI%2FkjqE4%2BkOrv3rNiWzOPhqAg5POG5t%2BndbBhdVaxvYq%2B3si3Tsj6tPEZ767pdf4lXLgaW8pjNvmseb5blRez5AhxB5SmOa%2FBtY51UBOi6175XhPGfuufKlsuZLQQaOCHrnVnv205suirHOSLMhDkkqjn9nx%2BReEbKJUb&X-Amz-Signature=ed423eac0d4d0ac6455ea709a44300e2b8682ff69ac78b14ac8bf8731b49da85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6VCZOBD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDCwfyoITMWh4tHQGfswLnTWAyQQYPL1pFSMOF3kgTuqwIgWqNixT2sCv5kl6y%2BjJGqnhEv9CFmm2wigqwZR4GxLocq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDN1p6cE7WvxOHUux9ircA9xHVwJ1%2BMYVJFGE0UhRmiSFbfLf0dEsBKHrPC%2BpvV35uejwCCCdl99QPLAWf0gQTr%2F2PLR%2BTKqBsAfO76rDku3BASou4sTrDvgAqC0eK17odV4aN9IjOqnGLdYFYnMTxstDZGNUJkPSX2izNcxQF1WXq41ueJmg4mtQlqCGyNrKoy678%2Fg9dTuodOv643oTmnNraK8gUZ%2B6SxaNm5Zrvx1gl8ORv7iOyoLaFDJKXHZqpY%2FrGix%2F5kipc9iuja7khYlSUk9ezV8eyFNA588ALIVjfcFl885FeLjk0Wt1XPpCMtarJK8Ob0%2Fwnu4YHYsiHtHzERNbSX3nc7fgsql1gM77qFfkgem06djRHUSOyQgAU3zUzn6czdKWXg9xGzlcS0toVxko3FQXtpcPLt89leTcdqGlO8mDNaMkKzmhu1iHckgS1H578fUHYp8jxbTCc%2F63MluY2y5RhB0AHQBLA9hmy%2FSJEweIgvoUVGTPZ%2Bk7Noq27tLr%2BHHDFmQc%2BdZA6iQg919lJiA%2Fgcf9oC4yKaEBJRKyAOAxss69HGmkpuela%2F5eNtXKOeahlKTSTA57PxtkASsz%2BfXZe%2FrLMm0tHCJEulXVnp4xONnZY3IuWMQ3%2FqACC21DF4ZNa2%2FXMJLw78IGOqUBsDRJ7kFFFIF3EvCUUcHhLIWv7wwHFOX7644qxKOdfINK5i2A6xsokm2iK%2FrnqS5pM64idbP%2BQXHTA0h5scPGMzOaluZwHYtZgyQgVzjTogwlMQ6ahKwD%2B72cZEw6EnDXWYdSl7aUc7MAjE0NHtUA5a4BbrNdGHy56zVpRJi86%2BhBNZ6DDLy12qDv1Qg1aL99hYBk2lE0bf%2Bp7ResoP4WfAAKOZEn&X-Amz-Signature=e5f5b43c46008007a2fc98c9626c56d7c776039292e6bdb96ba9080334c279b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ODWCZ27%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCq8rj%2Bu0NVylAnJmaixMMHtVBBAGGzAtYkJ8kD3xH%2BlwIhAO83z8j1Qv1oJ4VCRnNvEgXDYfDTCIlKtR0DWRB3HsITKv8DCEYQABoMNjM3NDIzMTgzODA1IgwTgvPTndKTjbco43Eq3ANe0SbgGu8QVvcjPbDYuGxb1SDSL4iHUP5LVEtHOmUFfJ6VO27v9nMWbDWFn7cOSuWeriLuiqh37UdWXewyS%2BqUE1l0uPFt2akiC6yLgPlNqWU5sIM4nEhTM0AR9VykxnV5%2FwpbGOYbGm5Uj7l%2BijgU9IAoPuBuu%2BPzcjNW2K6GXkKi8AlNzcPWalJE3AVC9lpQs2V2DBTaoW3EF5UeUy3P1dXMOgfYyAYvsU3aICYx9kF3N269pwWS5vcJXEAS9dioEXmvgX%2Ffrn2CtV%2BhKhSXFYOmgBo8VlK6GypXY58wxvQk7Wb%2F7pbqTg2cCT8%2ByrpdRty5yledEMKzzVsz2XecLj0QiMelNf7cwbMUaunAEVSiSwptc3sS7do7uqg3wDFmDNJKvM9CBDdvfi241Xc%2FxxNvaPjX6wYxkal3DI6t6sCgC1ETyAbFvCSLTZnqw%2FbcJOmFhzemZivLcRLwBzMFX1NrcKNVaip96MxqxIrfKHWYRG4i1vOjVqGPgHVM%2BlZ09xiyXQWTPJjEQ%2FEKGk0tb2rVGcMHRaAlWUHu7%2FbNg9ckH55ZCvL5kffB4Now8sPu8Sx1owygGr7VuyEINUS2Vw2oiKZRfu%2BIxtQPjg3VvjdA76nDJCiDvLIh8jCp7u%2FCBjqkAQZy5UqOY9EKEpH%2BnOn4M2qPMPqNoMxHs4bQqN23umFL3oddSkRdlIOtnH9V9WP3tsPpPeVZ5IOed4%2BrwG9G7Luba5gpmMLsMhos47OAvEM%2F1jdjlWa1gyRXDyZFCVpXE9wilTMCBgOnBIMFplNZ5aIt16xot6jyzX8YhxtwbTv15xvoXE9IW9le0QT1O0d2wDzaJIk1pd4swt4UJ5LdEdfopKSF&X-Amz-Signature=0a4cf41f44eafcc1d6e7d5f71689817b048a22729b06af151fd12860ede27e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXRQIQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEiiPbEy6bKMh6WJVWwWVvvQPMNKIQj14UANtN0iqZgKAiEAzu3114vdKjsRJkX5nAStZ34pMD1CBW1JG0IuengYuacq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDH7qw0xu5SM9Bc8xCyrcA9iJjRicNy%2FXTE62XByMnZBIGycMpHUK8sOUvcQe8FBZrnKLWQ%2FAYxRczRQrvFwJilLrpXb89sQYnKtagHCcvOooHxIHBCCG4msPutkm0srcIOhT08tvGJJHSi2rqPpwp1dZfDgLsejjuB56qmktGFmI1MqUWa9dYyEZt8ZIv%2Fa%2FbivK9zm8%2BBpuyBbVhjRonHKIs8EZ3CXOHzW%2FJZ35mLm1%2BLNYCSw18ykJ3h2plUdNmgGBy0wHK9qWknBgmkqjKBsrrYwSEDRQn1q0xymkSv93ZrWUOG6EEp%2BCWwa2wp%2FyXhE13aB5tJrcDhoEBDsK8lN2KCyVz6XZI424xgq8rs5ZrO5e8AqnaX3%2FdzjXiRx%2BbaxYoCLNsRJvSCpewcg1j6xDRbB%2FNuZUnb0DnZsqEEG%2B9p5kfw6o6bJU%2BpBkksfgSA0HtZ1YsxjqrFiVjO3upP0k5RfwO2Kj6Nmzs4jjvxQADKteA5%2FphRqzW6OF6UR1t9zQi5AC61MAaCJqMdCVg3mj5ebjp%2BfcfOwabmd1obNM7K1C37%2BF17BP1%2F8uyIWlkbLFOqzstQddhYEv52im9ugVzm%2BSWVOFULWVTfQCmz6gHX8gMrUprtbiLgXHH%2FoD9l39Coc8n8Xcdu6TMJ2A8MIGOqUBOHwnFgzH149ZWUyHoCZzwXbRheQQRJNlhjTrkF2NEKgNXvq24wDpuwLDI%2FkjqE4%2BkOrv3rNiWzOPhqAg5POG5t%2BndbBhdVaxvYq%2B3si3Tsj6tPEZ767pdf4lXLgaW8pjNvmseb5blRez5AhxB5SmOa%2FBtY51UBOi6175XhPGfuufKlsuZLQQaOCHrnVnv205suirHOSLMhDkkqjn9nx%2BReEbKJUb&X-Amz-Signature=e6165ac807938ab323b79349ab9ae13a35200c1cdb0133c5d8593b5a7fda231d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
