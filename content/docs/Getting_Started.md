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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZEYSCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3byI67CEZCN2wY7yFVrQwNes5X1U5n5ULWPNT8Bcm1AiB85%2B3BhdC5tvuxABp6kVZhD264MWeHpYuO4GEY5XgdrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQF43BnoM5cf6Hx3GKtwDofUYw47pmm%2Fmx9uWx0omf3MPEAIpngvNQ9IsT7qNLYQbx8X%2Flc88dTVscxRrpJKCWqQXCYhk%2Bza%2B4pZ3S1s2qJElamPrWWyhxrOvt6SdvbuX9CqROTcgSlTINAhsQ24lbFTz3xTRPRcL9hxz7HigWdLF0rxydii2U76uNL345i2QfHbapef7c3ewmn0DC%2BDSRQDG%2Bfa0%2FzoOVzAK5LS80SRii1kcpCvyTg66OJy1zPN3q03tDymn%2B3Sgn5kERcRGAM7dSVFbrMmAhbW35h84Lr5JEYbJiSi8YdmDlQKsQa2%2FrVRRWfinHJt8XZD2YuLUVwl2eHYxNL8C4ddLQF04mp8FXUObNFVd2csFD6lD4ezV30uu3%2F59Up%2Bsgi1Nw%2F96JXsrDwDWIrZK9k09KckIsKOqXTXDpMVfs94TYDbNSajfgajbNNqo7jVjLcah5PqKHF0SV5mC4PyQXzkRDhOtRLQIYzjr%2BoAFwzYdeJlFPY9rkTZqJNZ0KFHvRMNQNARFHAXlmwsYcfJd1jleYZwcHRt8cXjUE2yaKReHFsCu2th4b6Q7tvmTYE40wKssDXNHjAa0ggtokLolxZRE2VJ4AYtfHuKYRpy6qJ7tYa2B48apweREbe1Z6sAsN8Qw4aHIwgY6pgH2uiOlN5zjjku%2FQ77yUt7HRrQZvM9k%2Bky5SAmqWFbiwdHRP0hOPEz8i3wk3N7ICid3twYaKJvz9GwvLMPVbIPQ7i6xWJRIUS4KdsqM7XP3H4O1xoBBkk7aIxxXzfix1zd7vkINJ8e4JI0D9%2BFgT8glLI0c9KtNdSqQh9nFGxDjfRlnlmCjWweaznDZSIiUDaNJCBe%2Fs6WnBm%2FF2IThb2qkAJP%2F4Ixe&X-Amz-Signature=baab496499cc75f9782e52f2c2f987accd1c2d404d84d2b3920e36bdb6193f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZEYSCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3byI67CEZCN2wY7yFVrQwNes5X1U5n5ULWPNT8Bcm1AiB85%2B3BhdC5tvuxABp6kVZhD264MWeHpYuO4GEY5XgdrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQF43BnoM5cf6Hx3GKtwDofUYw47pmm%2Fmx9uWx0omf3MPEAIpngvNQ9IsT7qNLYQbx8X%2Flc88dTVscxRrpJKCWqQXCYhk%2Bza%2B4pZ3S1s2qJElamPrWWyhxrOvt6SdvbuX9CqROTcgSlTINAhsQ24lbFTz3xTRPRcL9hxz7HigWdLF0rxydii2U76uNL345i2QfHbapef7c3ewmn0DC%2BDSRQDG%2Bfa0%2FzoOVzAK5LS80SRii1kcpCvyTg66OJy1zPN3q03tDymn%2B3Sgn5kERcRGAM7dSVFbrMmAhbW35h84Lr5JEYbJiSi8YdmDlQKsQa2%2FrVRRWfinHJt8XZD2YuLUVwl2eHYxNL8C4ddLQF04mp8FXUObNFVd2csFD6lD4ezV30uu3%2F59Up%2Bsgi1Nw%2F96JXsrDwDWIrZK9k09KckIsKOqXTXDpMVfs94TYDbNSajfgajbNNqo7jVjLcah5PqKHF0SV5mC4PyQXzkRDhOtRLQIYzjr%2BoAFwzYdeJlFPY9rkTZqJNZ0KFHvRMNQNARFHAXlmwsYcfJd1jleYZwcHRt8cXjUE2yaKReHFsCu2th4b6Q7tvmTYE40wKssDXNHjAa0ggtokLolxZRE2VJ4AYtfHuKYRpy6qJ7tYa2B48apweREbe1Z6sAsN8Qw4aHIwgY6pgH2uiOlN5zjjku%2FQ77yUt7HRrQZvM9k%2Bky5SAmqWFbiwdHRP0hOPEz8i3wk3N7ICid3twYaKJvz9GwvLMPVbIPQ7i6xWJRIUS4KdsqM7XP3H4O1xoBBkk7aIxxXzfix1zd7vkINJ8e4JI0D9%2BFgT8glLI0c9KtNdSqQh9nFGxDjfRlnlmCjWweaznDZSIiUDaNJCBe%2Fs6WnBm%2FF2IThb2qkAJP%2F4Ixe&X-Amz-Signature=c2d33de360960cd7290739b40763e17bcb5c5b751ca174d5ff63a2b9e27c6360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZEYSCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3byI67CEZCN2wY7yFVrQwNes5X1U5n5ULWPNT8Bcm1AiB85%2B3BhdC5tvuxABp6kVZhD264MWeHpYuO4GEY5XgdrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQF43BnoM5cf6Hx3GKtwDofUYw47pmm%2Fmx9uWx0omf3MPEAIpngvNQ9IsT7qNLYQbx8X%2Flc88dTVscxRrpJKCWqQXCYhk%2Bza%2B4pZ3S1s2qJElamPrWWyhxrOvt6SdvbuX9CqROTcgSlTINAhsQ24lbFTz3xTRPRcL9hxz7HigWdLF0rxydii2U76uNL345i2QfHbapef7c3ewmn0DC%2BDSRQDG%2Bfa0%2FzoOVzAK5LS80SRii1kcpCvyTg66OJy1zPN3q03tDymn%2B3Sgn5kERcRGAM7dSVFbrMmAhbW35h84Lr5JEYbJiSi8YdmDlQKsQa2%2FrVRRWfinHJt8XZD2YuLUVwl2eHYxNL8C4ddLQF04mp8FXUObNFVd2csFD6lD4ezV30uu3%2F59Up%2Bsgi1Nw%2F96JXsrDwDWIrZK9k09KckIsKOqXTXDpMVfs94TYDbNSajfgajbNNqo7jVjLcah5PqKHF0SV5mC4PyQXzkRDhOtRLQIYzjr%2BoAFwzYdeJlFPY9rkTZqJNZ0KFHvRMNQNARFHAXlmwsYcfJd1jleYZwcHRt8cXjUE2yaKReHFsCu2th4b6Q7tvmTYE40wKssDXNHjAa0ggtokLolxZRE2VJ4AYtfHuKYRpy6qJ7tYa2B48apweREbe1Z6sAsN8Qw4aHIwgY6pgH2uiOlN5zjjku%2FQ77yUt7HRrQZvM9k%2Bky5SAmqWFbiwdHRP0hOPEz8i3wk3N7ICid3twYaKJvz9GwvLMPVbIPQ7i6xWJRIUS4KdsqM7XP3H4O1xoBBkk7aIxxXzfix1zd7vkINJ8e4JI0D9%2BFgT8glLI0c9KtNdSqQh9nFGxDjfRlnlmCjWweaznDZSIiUDaNJCBe%2Fs6WnBm%2FF2IThb2qkAJP%2F4Ixe&X-Amz-Signature=be8b9345a634a547c3fc7b1682d9e1d1d5d0d7efdf527c692fb1f00b339b43d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVIGN5N%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDWtN7DfTZyDrIU%2BK3wbxfJwvB9DxqrOE0kdH8Iad85AiEAyYkVRVdNupGPDlOd%2F0mnGns8xTxWa1rFP3oS2BHwM84qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY2EiOYACjdksQXOyrcA56zKpMxPDoHItsCECERx756vxJelefF2JjzXdWsCuYeQN667TufNurQ820EpmG59Xvwh6eDV2SF69WdPWfk%2BVyhiPPdfuIcYaVaIdltI7Qs3kr0GtMDbOSOzv9qi%2BYvQU%2BNA0qaD9w%2FEcKBJZke6JiKLOSgt0OXF5Rsi0uMrv3D5OGJ6TkXqCnRROoEC3bKGA7Bg1hstCgli7sUisue28ASn2Eu6gpbL7A6w%2BCGFCfh0ZJ2dXhF9hRN5uYHmB7DnhEf6ybv1deGiEdMwPhPPjJnN8Kqs%2F5dvTyCNgLvjoFW0u5ugSXAdU75wYf9LHBA31LftA37sc62CHze%2BxJywqVUuCGNcYee6m1oO82xO8yP7ehHBcvBYbtXWzGmjt8li%2F0MaXMrNwMVFsOn1k8Hf0iGYOlCOhaVAwNESmrzdln092y3axt4F5nNIfUlyqp3mXFr78%2BJeG3110OAlzoJ59f1i5bCVJahGibZTkXkOJObW9Hrlh%2FYgJerOPazsLFUAZwFR1LNlX%2F75zO1PRaDS%2BKDirIEBIC0VNC9lhuxJURrs4kHFkQUtZTVtAmJZSbix3xvHAuPsEVojH5fiInkPQi%2BLXlIpuD0c1WdGIS%2FI53eqlS9qLaANQrpG%2FG3MLqhyMIGOqUBYT3i1jJ8J0dsy5efA4Hep%2Fd6rvJNeDZIKY2K2It%2B%2FGEpG77d0VEANEX2KZzxlEI4YE7uV9u09fzEgmnBoB1MAUsAMdR1J1Z9RXC5AyAeszrqmlI9xaPSIA6icF8yQLD4ie0zfl8QkeOsSaNyOtUIsH58ccLJoZmNiP%2Bb%2F8jYMXLWlQWXw%2BIS4w5em0nk39SouHT8q%2BgR1rf6VWxCRGcgSo98Ndfr&X-Amz-Signature=9326ba3c260b27bbb3864ea33814fbb2e0222cd16394db14d698b6a169454faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMERA64E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJ8bfaycXlqIjvNag5aMP1kFrsNwxPpHEjZsfezvnfrAiEAnaymqvCHICC5yvwLeI%2BsQSSZ2ZpvmwUQgTiIYXPq1NwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvFXVaN6NyWrZkCmyrcA0ouutNbBPFZeo3NwgMZZWxqRIEHmzbvkx3nSGOyp6hTaqOk3D8nXx3Jwj6QMWd4gwu%2BDbCTr5EyYNtfYfOl9z4Mkj8wWJm%2FZq%2Bqn5x5LGRJ5afoPnPirGxPIJ5F35P8lQrV0tgwbm%2BB2%2F472UYjVYhvpD6hxdvxgnQP%2BzsfIGEw6WAUhCv13MXebLTR7Nqwis53Q68NTYJydDh2lBWkFqZDTAdrEmjghXoRY5Y51CpRwU%2FkkeFADQgRsmtG0UTQ%2FJ3pap%2BVTohGEt9zkd6EjmVQacRr%2BayB%2FD9If%2FmK%2B%2FLwBAPrGqxC5QFLD%2FSSpRB4K2FyUMjKAhstOP9hPUl6ZkCDIMuI1tBhGqHNOJgo7ZVr4u5QDNIX6OAyjbIdOZ%2FyrYPxy24iaX34W0zP0wJMnalx9b0HbnDPwjedWfjuGqXN3toFvxuI3otmqk3AVKwLiTG0kha57GG9PWv2gPr%2F4X05a2gtr51SKmpRLNAjaJWRdSdjeqvhdPXEppk%2Fldv02OJu%2BoQNPOjHFE7nRJU8iHGoPKsl6ki3IA5QLoQfjlIS5f%2Bfk5n1S0XUXanazUh0lSg7VqM6YXj1QN2p%2BGxcQuDEDdW64%2F6VlYUWmbYq4ntF5323fXew3TLsPrbIMLGhyMIGOqUBCiGtTizxj5Hu7lxYf9YvcvahEuzrxwkWF5Uqfh5cEZOkb8VQloeiWJfk1l6epjYI2tDSa3VGG67dLAxj9%2B%2BPJ0geZzERTBhKBRBOiXxbS9Erb7IAhHV2ESHdWVWLxLimeGfY79ciIAocb21Mca9dy1JtvmaE5%2FgPJoYAL92jvDEGWpsjTHJye0oKEUxvnYkqNOonRpkv0sO9CGILaicTh9sEriwQ&X-Amz-Signature=25a8a1caab523bd7bd7da6900a72548e7bbd9b6d43ed980c92c16daacc8e44c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNZEYSCP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB3byI67CEZCN2wY7yFVrQwNes5X1U5n5ULWPNT8Bcm1AiB85%2B3BhdC5tvuxABp6kVZhD264MWeHpYuO4GEY5XgdrSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQF43BnoM5cf6Hx3GKtwDofUYw47pmm%2Fmx9uWx0omf3MPEAIpngvNQ9IsT7qNLYQbx8X%2Flc88dTVscxRrpJKCWqQXCYhk%2Bza%2B4pZ3S1s2qJElamPrWWyhxrOvt6SdvbuX9CqROTcgSlTINAhsQ24lbFTz3xTRPRcL9hxz7HigWdLF0rxydii2U76uNL345i2QfHbapef7c3ewmn0DC%2BDSRQDG%2Bfa0%2FzoOVzAK5LS80SRii1kcpCvyTg66OJy1zPN3q03tDymn%2B3Sgn5kERcRGAM7dSVFbrMmAhbW35h84Lr5JEYbJiSi8YdmDlQKsQa2%2FrVRRWfinHJt8XZD2YuLUVwl2eHYxNL8C4ddLQF04mp8FXUObNFVd2csFD6lD4ezV30uu3%2F59Up%2Bsgi1Nw%2F96JXsrDwDWIrZK9k09KckIsKOqXTXDpMVfs94TYDbNSajfgajbNNqo7jVjLcah5PqKHF0SV5mC4PyQXzkRDhOtRLQIYzjr%2BoAFwzYdeJlFPY9rkTZqJNZ0KFHvRMNQNARFHAXlmwsYcfJd1jleYZwcHRt8cXjUE2yaKReHFsCu2th4b6Q7tvmTYE40wKssDXNHjAa0ggtokLolxZRE2VJ4AYtfHuKYRpy6qJ7tYa2B48apweREbe1Z6sAsN8Qw4aHIwgY6pgH2uiOlN5zjjku%2FQ77yUt7HRrQZvM9k%2Bky5SAmqWFbiwdHRP0hOPEz8i3wk3N7ICid3twYaKJvz9GwvLMPVbIPQ7i6xWJRIUS4KdsqM7XP3H4O1xoBBkk7aIxxXzfix1zd7vkINJ8e4JI0D9%2BFgT8glLI0c9KtNdSqQh9nFGxDjfRlnlmCjWweaznDZSIiUDaNJCBe%2Fs6WnBm%2FF2IThb2qkAJP%2F4Ixe&X-Amz-Signature=86164b232d81e5db665377e0235915260db0c64ca5444cdc977c711c46eba87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
