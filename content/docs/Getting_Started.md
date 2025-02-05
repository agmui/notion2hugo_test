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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYKS2SV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFDUTZOMqs%2Bxc4v9nEARVnpe541upwTvCJiT8urPoN9QIgW9GdInTYi6CjTHPncKKGEfuDRCil788ndl8AZLN0CXsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEXtrmgawTXG4LgE6CrcAxXVO0EMU4HDx3FJLemSkKCXjZ3855K%2BIxx0y1WLdhBmlnG%2BffaoeHMDFtEiK%2BRtJTzM4wIBd9lzNLiCQIrVhZD4Q4vrLQSSVkh%2FhQT9DiQkdBZKD%2F5dj%2F1NlQN8bMZZD2E8ssLKlfY%2BgruAgl0UifqPsfNt7XZHtJaYRb7Y%2FaKUiHOqO7lxeLmR7iOKVpAtvoPZBl50mu20nkF7a48HEfvn6rkh71pVQijLuwrEqspGvqpBDG%2BmDESM75d%2FyIliWbi6EPlz6Mk1zKpLzAfVtn1PNgC99eleK2hRy64lVNAQJ7BKF8RYp1cwB5nMO0u2A%2FwTqMKZoZkAQS4sQ7Hvp5ksB5KLgg6B2YqWAXGFnEyl2Eh38t45qDZzeSxnIxXC10%2BA2bS6pa1lswrGdLW5buXezNEzwQ3wzpceHXb4oERh55EZA8YjAwDxE2DminTNVilptuLF6iiFR8Rbpuh0WnaKbsubkiK5SDjYogxMdXPwmQqHjCNzuXdrP6hTgYGTBq6BMXf13KsE05XqTu3RSgmYEDCCVtqdYdifoj7ppBewwLVzsdp1IfC7swjLXcVILdduS5QYfwXxKQwgkPSxePDO1D5Uoi2ltRM98JdOOH2GZoCcxroomPDBQ0gWMJi8jr0GOqUB3onJzlV3ZfdyLtiHEhS4WA492CvaeLFoRslfl1kTcpJCYHoBspFhyggXuFDVa7zmdnRa4IBq1eMiEPZy7vv3fMP2PSEAYu7AbgxfxMNDqA%2BWmrfP8owtFDjCcfXLIlOmeI1bRb0Pm6ah85LGqboVvkP%2BnynIRkhIArcgCvib6UK6IFEBOv5yBbJhrIUKqY10mq1slh4DMarOWwV5kSkOqZptJjQ1&X-Amz-Signature=2a9a42199782de41069dacc32134bec3b66e0f6590ea7df7707e0801a7f416d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYKS2SV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFDUTZOMqs%2Bxc4v9nEARVnpe541upwTvCJiT8urPoN9QIgW9GdInTYi6CjTHPncKKGEfuDRCil788ndl8AZLN0CXsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEXtrmgawTXG4LgE6CrcAxXVO0EMU4HDx3FJLemSkKCXjZ3855K%2BIxx0y1WLdhBmlnG%2BffaoeHMDFtEiK%2BRtJTzM4wIBd9lzNLiCQIrVhZD4Q4vrLQSSVkh%2FhQT9DiQkdBZKD%2F5dj%2F1NlQN8bMZZD2E8ssLKlfY%2BgruAgl0UifqPsfNt7XZHtJaYRb7Y%2FaKUiHOqO7lxeLmR7iOKVpAtvoPZBl50mu20nkF7a48HEfvn6rkh71pVQijLuwrEqspGvqpBDG%2BmDESM75d%2FyIliWbi6EPlz6Mk1zKpLzAfVtn1PNgC99eleK2hRy64lVNAQJ7BKF8RYp1cwB5nMO0u2A%2FwTqMKZoZkAQS4sQ7Hvp5ksB5KLgg6B2YqWAXGFnEyl2Eh38t45qDZzeSxnIxXC10%2BA2bS6pa1lswrGdLW5buXezNEzwQ3wzpceHXb4oERh55EZA8YjAwDxE2DminTNVilptuLF6iiFR8Rbpuh0WnaKbsubkiK5SDjYogxMdXPwmQqHjCNzuXdrP6hTgYGTBq6BMXf13KsE05XqTu3RSgmYEDCCVtqdYdifoj7ppBewwLVzsdp1IfC7swjLXcVILdduS5QYfwXxKQwgkPSxePDO1D5Uoi2ltRM98JdOOH2GZoCcxroomPDBQ0gWMJi8jr0GOqUB3onJzlV3ZfdyLtiHEhS4WA492CvaeLFoRslfl1kTcpJCYHoBspFhyggXuFDVa7zmdnRa4IBq1eMiEPZy7vv3fMP2PSEAYu7AbgxfxMNDqA%2BWmrfP8owtFDjCcfXLIlOmeI1bRb0Pm6ah85LGqboVvkP%2BnynIRkhIArcgCvib6UK6IFEBOv5yBbJhrIUKqY10mq1slh4DMarOWwV5kSkOqZptJjQ1&X-Amz-Signature=fde831d03e91ecce222e78c93afbc0ad85d8962778f3df0b813548f3a1834107&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCBFB36%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCTW3KkNTJJvhzC%2FTw0%2BEIEGpy0TW1gIYkQQz9aPwyy1wIhAKShjJmnUQFjNQBV6vMqsEtZXV%2FcJlYeTTg3%2Fps46dSCKv8DCEoQABoMNjM3NDIzMTgzODA1Igy5dH1g3qx0uO4Pe%2B8q3ANyZEIUB9dJQGAm%2BuHDhqIoCYa5Fwi3AU6hT1mOLORj4NxMWozXDbcbFdfLWvHUtgcQnr%2BRnTH%2BDYFuGSKaDB8tGwv8xuS1ELmR%2BMfCx2gZ3nnvQdVOyjjl30GLhoeVNJRoaii3ssAA3IimT%2Fcj%2B4od5ihIY1OyJ9ZeRiX9yMR3rI8VtyztQ8x9Nm4aR6u6D5DAzsJTsm0JReUPbi3UTJZOEsaUhxUzEEOooQgylvFC0mcfcrLSKalKViLMVsXkvXFz3rn0tx51ggghfwYBs7mAOwttkes9J98naAnehroFcyq3jZrxZBNuegpvMM%2BhOlknX5ZfxJDcOM%2BTr5hiwbvEkfrEn%2FBHxZLxkRtNAEbDMsfmLgTBwQyfcwjG4ql8yjUEz3Ltz8ItQeQZaWhlMf4utFVR2tP0oTdFnJdTDUWgqxbvgPTCx%2FwVRsaTwtHFINf1uoPz%2FbFe%2FGLzjiJmpED%2F67MwJI5JCjdStkU161egoIts4r7HtyEIjmTXDcR3xlH8k2N9TSCUKrMGGQcxnSXPCFGr%2FCf5don8STpv6pFHr7%2BOZIiCvXJNLd%2BMvZ%2FefwhEbDijZXov34dQH%2Fg97d%2BSguQ2iUb8Tz1QlRN281ZFjzmYm4xTUx3LfAujQDCLvI69BjqkAbboBQpQ496x%2BQoGz8cfsEhh0i8p%2BRhItAJ9lrxz2vSynMG6ZleRdMILArOdaX%2FvAfEvViF3vORAosYG3qybI4KAu77Ccg49%2FmyCbrumUjKLtsBr5rSL%2BEic3ZxukG%2FnY6BpYUaqxiodelK4MSda4xzqroQyQ3yVvQ6%2FqfzSBB4HstRWy0F6vwinizSUD0nkEcGqI5JV5wghDMy0gdksYrKhZ9HN&X-Amz-Signature=8a34a505e5cf6f72824cbeecd13db0a80e2b996a7399e03ce2b57d6e566e3cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LFDGD2Q%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDtFmPtEwI6Jpb7q63WpUT%2BbkzbvfHqoqJ86M5GTk5uTQIgChONqhUwSeBzg8mUBZOqT9E8V4eBP7DOIoWgm1PzsdQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBuOgNYW%2FJZ7FYTbLyrcAwqTmQrnv6m%2Fy5V0C77K52wPpGToKHinfHI9dT53y3RABm6LAhvMn8xoxmqBDu%2BXD0Kz8oyRORsACAbjYz4FO2Yvul%2BmpTpYtekrCL8OP5VDzFa1mk6RRBKyrLGsCXm5THEJpOCJNkDzV6k8Z3U1s884dXmAHyvDJb5fJymB5R7QBt6UWMAWdysXbP1g7nZxHL0sQDYaDAHfZV2rtbxi7L8MkJyiISH4UrfOfNLGW4Yh855JED1Ta%2BFEykblX1UsI%2BWpoXEXQEJMhBOVfemUtqIEFRbO2AQ1tulzOIQunwTe%2BDCIj94Ll6%2BW0SLxHskM%2BmbPeKzeE3wThd3elCKW8g4lgF2llnkAvfW%2FBi1eJkmyX4Sw9GRMa7f1BXs0qksi%2B2ZzU1KMageNrXIixBcf%2F9C%2FekO2%2F94jmBzDdAFecWq1cpX8vfLIcgMX9jjRKeXnbTiIpKBFwLdJx%2Fcxir5IjKaGh59m8XlrgB5zD39aSEerU5ETVA9ZhpcZK8OZF02yrdKlqG7%2BifT7ML%2BpgWjXBnMB8tx%2FFLsBCjQQBYToop6MqOtDVQWTM8zjNABeTr7sUVH4U005%2BFB2LdRpd%2BLbFZfA%2FQaQT3smsZW2f8e4rhys%2BopPG5y2hlZASLubMPS7jr0GOqUBOE0XBWTGOW0d1ZkOsY3jHfFqU5XAg5kWBs9ST0f8MQQYO%2BYnvs7lG%2FJVNg2056iFPzmmMlBmX1A1NnPRb6hyhsAwhrvRumKdds7SSe%2Fz8hEqIT9UF%2BDzHEbIAT7Gt1MzxBgJo2zCp3tkB5z8hqPzOzmNook2har11Orqe%2Bu%2FiA6vHLDNYv%2F%2BKQlIdmL0FsrQkjHwSwc8pPoqZNjAWUEFIs7JfsxK&X-Amz-Signature=8cf91f98529d4dda4ddb63139eceff7417c016b7100eafe60281bbb8cfa13328&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGYKS2SV%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCFDUTZOMqs%2Bxc4v9nEARVnpe541upwTvCJiT8urPoN9QIgW9GdInTYi6CjTHPncKKGEfuDRCil788ndl8AZLN0CXsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDEXtrmgawTXG4LgE6CrcAxXVO0EMU4HDx3FJLemSkKCXjZ3855K%2BIxx0y1WLdhBmlnG%2BffaoeHMDFtEiK%2BRtJTzM4wIBd9lzNLiCQIrVhZD4Q4vrLQSSVkh%2FhQT9DiQkdBZKD%2F5dj%2F1NlQN8bMZZD2E8ssLKlfY%2BgruAgl0UifqPsfNt7XZHtJaYRb7Y%2FaKUiHOqO7lxeLmR7iOKVpAtvoPZBl50mu20nkF7a48HEfvn6rkh71pVQijLuwrEqspGvqpBDG%2BmDESM75d%2FyIliWbi6EPlz6Mk1zKpLzAfVtn1PNgC99eleK2hRy64lVNAQJ7BKF8RYp1cwB5nMO0u2A%2FwTqMKZoZkAQS4sQ7Hvp5ksB5KLgg6B2YqWAXGFnEyl2Eh38t45qDZzeSxnIxXC10%2BA2bS6pa1lswrGdLW5buXezNEzwQ3wzpceHXb4oERh55EZA8YjAwDxE2DminTNVilptuLF6iiFR8Rbpuh0WnaKbsubkiK5SDjYogxMdXPwmQqHjCNzuXdrP6hTgYGTBq6BMXf13KsE05XqTu3RSgmYEDCCVtqdYdifoj7ppBewwLVzsdp1IfC7swjLXcVILdduS5QYfwXxKQwgkPSxePDO1D5Uoi2ltRM98JdOOH2GZoCcxroomPDBQ0gWMJi8jr0GOqUB3onJzlV3ZfdyLtiHEhS4WA492CvaeLFoRslfl1kTcpJCYHoBspFhyggXuFDVa7zmdnRa4IBq1eMiEPZy7vv3fMP2PSEAYu7AbgxfxMNDqA%2BWmrfP8owtFDjCcfXLIlOmeI1bRb0Pm6ah85LGqboVvkP%2BnynIRkhIArcgCvib6UK6IFEBOv5yBbJhrIUKqY10mq1slh4DMarOWwV5kSkOqZptJjQ1&X-Amz-Signature=fae58b4c6a3d1caff79bf3a6ce0df66ab31ee77417718f6b29c82f70c16f069a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
