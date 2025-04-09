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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGKCXEE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCuN8GuOAjoeB5R%2FjxxSaqDsRcUz%2F%2F4Nu3%2BJnF3abbXKQIga%2F2Nx4HLU7GEcyGmHG7upIUDDpbd%2FTcwVbmUI71noG4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpIS0aAO0cJ080oNircA%2F2StTk5T6Flc6PwhMVySNfKZfW%2BM3YnwhErnSM7fRduvcJIH4NdB7WPJDvbsMh4SvReHcPhz67R%2FHpWMRZDefsBYmim2GgIL%2BEAqwdIkEjMKU9lK33bfF1MeOJhYzUGe4v5MnvlzVlk8AJg6W22cZ2L4Hi4nEQ%2BXkh%2Bn1Lkd1d0vvz5fK%2Bodtmmxv1gOrRvhEingHMMo61vsR0OiDat%2FWyqF7W1cTqwrhc8hJdswgXoVDW85d9wvMZpAf2k%2B6FMzlXTdU78NyD463XdxLe%2BBaMwH8%2Fwc%2F7zgMqCSlbksBvbLDORWSFqC2LgHNIHyI4z72Gvc8gqbaJ0Q%2FJoPTitGZKqY8mwdg4Qau%2B7Cd0dZ4nJZcpPRmrIrWmQud3edJEt777DSyNZTxzo%2BOVpCWyMgXbB4QsHPdwi8DUEJcHxHMbRYpbxMOE5qCkB%2F3WFdFQUYs0rMIwEnnjDaP2Zh1I2XhVjt8TS9PMh427qha7GA7e0W%2BHTQAVSSjK3jz2VDSMHwN29yVfvPZ3DH2gUdYrkhKjd%2Bw%2BmtkEkq8bLjRlxicQfwyEaMCz21CJy9BKBH%2FxmqK32hxScL0hsM3dJU%2BuerS4OSy6G%2BFo0IaMe2ugW5h%2FEU6XRd3%2F%2B3XVcN4JMMMTh1r8GOqUBrgS8OsSvvljlNVKc2AQ2COW5HW0T7ozxbxUx4CzS%2FmybQevLHL23W4C%2Fv0wqKy0zc4qe3%2FEDkU3tzz6yOQUZCcH8nRq6KGw%2F0aWlMOsZ3493YBoClTZU9qoEWO3bHQASXipVRaiNXatpyaN%2FkJz5IM4%2BcJoYKsOdQJEndP6keNlIGPte8umdOJD%2B1lDC5jaDdgY3wgMTs5TqIByUYQitKTkHMXzL&X-Amz-Signature=8bb9bab28047693d4d9f4ff45735192eefe67d6b53deae9fb73390fd616d2063&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGKCXEE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCuN8GuOAjoeB5R%2FjxxSaqDsRcUz%2F%2F4Nu3%2BJnF3abbXKQIga%2F2Nx4HLU7GEcyGmHG7upIUDDpbd%2FTcwVbmUI71noG4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpIS0aAO0cJ080oNircA%2F2StTk5T6Flc6PwhMVySNfKZfW%2BM3YnwhErnSM7fRduvcJIH4NdB7WPJDvbsMh4SvReHcPhz67R%2FHpWMRZDefsBYmim2GgIL%2BEAqwdIkEjMKU9lK33bfF1MeOJhYzUGe4v5MnvlzVlk8AJg6W22cZ2L4Hi4nEQ%2BXkh%2Bn1Lkd1d0vvz5fK%2Bodtmmxv1gOrRvhEingHMMo61vsR0OiDat%2FWyqF7W1cTqwrhc8hJdswgXoVDW85d9wvMZpAf2k%2B6FMzlXTdU78NyD463XdxLe%2BBaMwH8%2Fwc%2F7zgMqCSlbksBvbLDORWSFqC2LgHNIHyI4z72Gvc8gqbaJ0Q%2FJoPTitGZKqY8mwdg4Qau%2B7Cd0dZ4nJZcpPRmrIrWmQud3edJEt777DSyNZTxzo%2BOVpCWyMgXbB4QsHPdwi8DUEJcHxHMbRYpbxMOE5qCkB%2F3WFdFQUYs0rMIwEnnjDaP2Zh1I2XhVjt8TS9PMh427qha7GA7e0W%2BHTQAVSSjK3jz2VDSMHwN29yVfvPZ3DH2gUdYrkhKjd%2Bw%2BmtkEkq8bLjRlxicQfwyEaMCz21CJy9BKBH%2FxmqK32hxScL0hsM3dJU%2BuerS4OSy6G%2BFo0IaMe2ugW5h%2FEU6XRd3%2F%2B3XVcN4JMMMTh1r8GOqUBrgS8OsSvvljlNVKc2AQ2COW5HW0T7ozxbxUx4CzS%2FmybQevLHL23W4C%2Fv0wqKy0zc4qe3%2FEDkU3tzz6yOQUZCcH8nRq6KGw%2F0aWlMOsZ3493YBoClTZU9qoEWO3bHQASXipVRaiNXatpyaN%2FkJz5IM4%2BcJoYKsOdQJEndP6keNlIGPte8umdOJD%2B1lDC5jaDdgY3wgMTs5TqIByUYQitKTkHMXzL&X-Amz-Signature=868ed1feb5f60aac0f7b31d8e31a13d656b3b44b2bb170020d5e54057faec196&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYGE72J%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDKn%2Bw0hThOzojRpCSbru%2FZvaUK8mLVbQO5iH9%2BbFEUhQIhAMuZF9aFvzvK4bh3FC%2BFo1BGjrGyWQZ1CKAouO2FNLFOKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl582Ef0vPgSiuzJIq3AMV0ty49L89O5PN2ZvnrHGcDM%2F%2FCkWaqKqX3KQ1wotldMK4ZVZaX%2B2b7VEcTqpbNjFTIOAKrTCcaa1Y4wO7l8APASXqdHl1%2FqCsIsZynqIxY6RJ6etOomRTmrrQSF6IfTemX2HdGFdiOyDf%2F2fc6vont1VfZiGQJyKKPLk8rxjbK4zfaDTz8dAMjWRoMM4c7eiCQ54kDyLpYffMdXSQWS%2Fs%2Bvo3dukITPSvOgjQnl6SC%2BbVna%2FVgh7vFMVTKE4zNODBr03nsoNsP0A8k4EIRdBNlANkn359S7B1bXCsR27LoiWk9vCnqxiCaBatqdlvlo7Ks1fAtNzKVbjk3%2Fgxb9QdzhjiH8PLY4PAtVSvzO1s6mMYqSIvLWRVWPRr6xE79rIa45kZbndvwff5Z5ykTZb1iopKdSdMkr9mwy0gBRb%2FvkNwA%2B3BgHBVDbvCKuhWHF7ZD64UFmOvn8ToX62q%2Bzcma7IQICWu59TpzCdYhnL1TiiXi%2B3zwaNmklOft61mV5yj1TswWwz1WLvbRk9qxRLJDRI6rHBrhEyqP965%2BEodYtem4teO4RPH21mM%2Byyadbrmd14Zfj79LQrA9JVhURl7xeOrsnIk%2FwV5kxnxEWYFaDIYWWktU0rR7KFv%2BjCE7ta%2FBjqkAXkL0SefLMsVOJi%2Fj8Z75sFtCkVCLi%2Flbx9Pbu4W31nlqYCY19MkQr1QIracsVaCOwHsAqrYLyUpk4C%2Fj1YQt%2BhPqmt7UTra%2By1fTpFRgkz2MBTXpDBAndCVA2MiQXmpr4dPqgZh%2BIfwCTRlb9Nod1Jw55tCP4F4XWKnI9SUWKb7fivl%2F8a9voApQ0bERS%2FiAAMH%2FrykkLDGAgVIyPgUKffvFtaK&X-Amz-Signature=c423e09633339603bdd2f169c66b266ab99b2eb935292a5d4635ad8249326ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7Y5SDKD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIC1SQArr1Q%2BJ5an2jacJg8wciOajBXBH1mCHkk%2F%2Fsse0AiAThERU0rarxY%2F60kCWDgZgXykPMnbilbIL8lhFovXvNSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWsP8jlzgm%2BRrBopMKtwDVPphlP6%2FUlL6j0H7V2PsmHXX1Tn23%2Bp2P2jAXPfbLpCGr7Z5i5NEJ3rWDJjXNs6KsfXM%2FQj2kx0HIG9XDdYmgG0zD4IPwE89cR3kzybSUwn1KKtsVqN4hFhU69WHxJM4iNrID1VsQLsecYRrx6RCUR3b%2FviT2wG9tFUHOyvuBDk15l1lUXZZoO8dsO9nb%2B4%2BERXCvW%2BxotHyX7QEGlSJUPbU7IzBiPk4Qbbmf9zvntLwoAb02zosXHk7okAmQHR5ZrQCj6ff5gqD4XoPL0I88BScaVykAJqt9TZfGabTPy5k1kjTCPZlmZ53uOLM3%2B55bk%2FNeOKBH1%2FaefDrMqkroumNklOAMqGpp8WC69UGp%2BpwAUdoUfpvpEL2vuAjg0qsUggQYCsRWheo4BzVRE5VOKAbTXNWpxAJfhGJ5Ly%2FTZi5Vuycdydq7Vb4UAmA2I%2FJ3xkLrOqbY9Tb1xZZwjC5faiBSmCvKBRhp%2B9yivArJ5UDkbdeJ1RHBy%2FPFSi0nPOad62zgHjw60PEpzwYgmOq%2BNZ2509OZ8t88oeDsemka3hJxYwPZYabHkF7Pq43AxL6ehJrXSc2d9yMcpD%2BMTIyiVDHacyRX6uu58BeBKturbtkE3ssk%2BupmEn7vgMwoeLWvwY6pgGYZa7Oj7CYRTjSukv2xrYI6AabnfUIFChqMXipYQaieLEuI7QxF2sHuhHciBRIcqjbYM153N73%2BXDFo9uq85kSMeenV0dPh%2B2WE4Cy97zj8Lzx0UmyVt3CUATaJpyfALKPY9o6BqyxEF7jBm2hcb8E8y%2F6bB7v5Ybp8b5WDKEf7drdXJf%2Fvwc4eq%2BzdgJLFdQfWYmKuvFmfpc%2BifUBB53ddIhHLlRw&X-Amz-Signature=921d1f963017f8560381857676cfa979e65b395ca93e1e52bc0225bcf3e43064&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMGKCXEE%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCuN8GuOAjoeB5R%2FjxxSaqDsRcUz%2F%2F4Nu3%2BJnF3abbXKQIga%2F2Nx4HLU7GEcyGmHG7upIUDDpbd%2FTcwVbmUI71noG4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpIS0aAO0cJ080oNircA%2F2StTk5T6Flc6PwhMVySNfKZfW%2BM3YnwhErnSM7fRduvcJIH4NdB7WPJDvbsMh4SvReHcPhz67R%2FHpWMRZDefsBYmim2GgIL%2BEAqwdIkEjMKU9lK33bfF1MeOJhYzUGe4v5MnvlzVlk8AJg6W22cZ2L4Hi4nEQ%2BXkh%2Bn1Lkd1d0vvz5fK%2Bodtmmxv1gOrRvhEingHMMo61vsR0OiDat%2FWyqF7W1cTqwrhc8hJdswgXoVDW85d9wvMZpAf2k%2B6FMzlXTdU78NyD463XdxLe%2BBaMwH8%2Fwc%2F7zgMqCSlbksBvbLDORWSFqC2LgHNIHyI4z72Gvc8gqbaJ0Q%2FJoPTitGZKqY8mwdg4Qau%2B7Cd0dZ4nJZcpPRmrIrWmQud3edJEt777DSyNZTxzo%2BOVpCWyMgXbB4QsHPdwi8DUEJcHxHMbRYpbxMOE5qCkB%2F3WFdFQUYs0rMIwEnnjDaP2Zh1I2XhVjt8TS9PMh427qha7GA7e0W%2BHTQAVSSjK3jz2VDSMHwN29yVfvPZ3DH2gUdYrkhKjd%2Bw%2BmtkEkq8bLjRlxicQfwyEaMCz21CJy9BKBH%2FxmqK32hxScL0hsM3dJU%2BuerS4OSy6G%2BFo0IaMe2ugW5h%2FEU6XRd3%2F%2B3XVcN4JMMMTh1r8GOqUBrgS8OsSvvljlNVKc2AQ2COW5HW0T7ozxbxUx4CzS%2FmybQevLHL23W4C%2Fv0wqKy0zc4qe3%2FEDkU3tzz6yOQUZCcH8nRq6KGw%2F0aWlMOsZ3493YBoClTZU9qoEWO3bHQASXipVRaiNXatpyaN%2FkJz5IM4%2BcJoYKsOdQJEndP6keNlIGPte8umdOJD%2B1lDC5jaDdgY3wgMTs5TqIByUYQitKTkHMXzL&X-Amz-Signature=7f8be38b11d27e52bf5d5a46c6868f5ce7e2f23c4fb87370a44520d0a5346dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
