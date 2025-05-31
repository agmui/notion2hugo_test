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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6BWU3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtd8WZQ7eriRLHbMHElGIToh8ShF24VyA%2B12f4EVpPgIgKdwXsDubGFe2DmgdPtpvB4PYxwFD4Cuac5%2BunvLDebgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGCYNEANbqlQA7qircA7LsZr7LErHatIBBx62jPNRBq5voPPXiubGR1800NWfqjX1iQVu%2F7KO9BFND0zTc2P5glajeQLyIUt4vqJrVwo%2BU17AiSuFWBXHhMSKd1spBJexVYnsj5XjfLU230fNAF9Py0mhwdehJlCAPKy0lPqCeb87VQABGTquTSYjAKqdxhNWU%2FLqCHUy4jxKUgiZJ6mB7XiIyb2%2Fb0FXwkPBzsKLBMKsViRHSMljNIk3lX%2B4mwjkPr2bipx2W3Lh3FnCYhmiXSDXT2MIdTIUZpDCu6nic6%2Bzmxtd4kzNwpRoR6fvUdmPPJiw%2BpZVY6wU%2FNtbQYyPeJGzxIwJhWONLJY3wf9nk69u3bu8sVVGz4i9si1LWFdAIhUSMxOGj7cG4fHhnrDZHSJEYWTDzk3%2F3tmF9Iz8WeHT7x4YnWaTzWmxqBqKlAyCbx94LtMyDWPYpuDxOY%2BNIER%2By852%2BRiWEy9PTQso1RMTO8ZYpUUuK2H34qL8KDavL%2FYkc05lqPS41SnwaVXuWe5IKQx1gEhvCD9NFjUHYGHAwhIVJwpa3Ji6sRCtS1CLpAnNjT5rrIobmROM6rxZrlJPlKId3Mb9dcTb5f7KMfwXeDe%2BlohKzZijhfZ2x4uFquHCI5bAn8ynbMI3l6cEGOqUBxUnJ4rPPkzdKpOBVcULp6kh3iyBtrT%2BcLhYpwaNtpgCgmy57BZ1JdtGcshlVTntZx7g0pAwNOQA%2FgAPvHHhUJecx2Lh3Uc7O2iynVpQNQ%2FbS3b37QLg10llWdr%2B9EYQFhVfEDHfeKQbAuOxk4QzV9ztiq4S%2Bs%2F6WM%2BK56Gb3gLUDmOgaFxJ8F%2BAkd6Z73HVAui6HnV8aCo%2F4WHRdQUO7bmuOd3wm&X-Amz-Signature=04bf39d545e31306e3096ae5bfabeebb10d33bafa313a5bceeb58eb9c722e78b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6BWU3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtd8WZQ7eriRLHbMHElGIToh8ShF24VyA%2B12f4EVpPgIgKdwXsDubGFe2DmgdPtpvB4PYxwFD4Cuac5%2BunvLDebgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGCYNEANbqlQA7qircA7LsZr7LErHatIBBx62jPNRBq5voPPXiubGR1800NWfqjX1iQVu%2F7KO9BFND0zTc2P5glajeQLyIUt4vqJrVwo%2BU17AiSuFWBXHhMSKd1spBJexVYnsj5XjfLU230fNAF9Py0mhwdehJlCAPKy0lPqCeb87VQABGTquTSYjAKqdxhNWU%2FLqCHUy4jxKUgiZJ6mB7XiIyb2%2Fb0FXwkPBzsKLBMKsViRHSMljNIk3lX%2B4mwjkPr2bipx2W3Lh3FnCYhmiXSDXT2MIdTIUZpDCu6nic6%2Bzmxtd4kzNwpRoR6fvUdmPPJiw%2BpZVY6wU%2FNtbQYyPeJGzxIwJhWONLJY3wf9nk69u3bu8sVVGz4i9si1LWFdAIhUSMxOGj7cG4fHhnrDZHSJEYWTDzk3%2F3tmF9Iz8WeHT7x4YnWaTzWmxqBqKlAyCbx94LtMyDWPYpuDxOY%2BNIER%2By852%2BRiWEy9PTQso1RMTO8ZYpUUuK2H34qL8KDavL%2FYkc05lqPS41SnwaVXuWe5IKQx1gEhvCD9NFjUHYGHAwhIVJwpa3Ji6sRCtS1CLpAnNjT5rrIobmROM6rxZrlJPlKId3Mb9dcTb5f7KMfwXeDe%2BlohKzZijhfZ2x4uFquHCI5bAn8ynbMI3l6cEGOqUBxUnJ4rPPkzdKpOBVcULp6kh3iyBtrT%2BcLhYpwaNtpgCgmy57BZ1JdtGcshlVTntZx7g0pAwNOQA%2FgAPvHHhUJecx2Lh3Uc7O2iynVpQNQ%2FbS3b37QLg10llWdr%2B9EYQFhVfEDHfeKQbAuOxk4QzV9ztiq4S%2Bs%2F6WM%2BK56Gb3gLUDmOgaFxJ8F%2BAkd6Z73HVAui6HnV8aCo%2F4WHRdQUO7bmuOd3wm&X-Amz-Signature=7415728c570985cc223fabc6761b86c0b4b5b2a48b2b79e7c9d8315ec314ff77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6BWU3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtd8WZQ7eriRLHbMHElGIToh8ShF24VyA%2B12f4EVpPgIgKdwXsDubGFe2DmgdPtpvB4PYxwFD4Cuac5%2BunvLDebgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGCYNEANbqlQA7qircA7LsZr7LErHatIBBx62jPNRBq5voPPXiubGR1800NWfqjX1iQVu%2F7KO9BFND0zTc2P5glajeQLyIUt4vqJrVwo%2BU17AiSuFWBXHhMSKd1spBJexVYnsj5XjfLU230fNAF9Py0mhwdehJlCAPKy0lPqCeb87VQABGTquTSYjAKqdxhNWU%2FLqCHUy4jxKUgiZJ6mB7XiIyb2%2Fb0FXwkPBzsKLBMKsViRHSMljNIk3lX%2B4mwjkPr2bipx2W3Lh3FnCYhmiXSDXT2MIdTIUZpDCu6nic6%2Bzmxtd4kzNwpRoR6fvUdmPPJiw%2BpZVY6wU%2FNtbQYyPeJGzxIwJhWONLJY3wf9nk69u3bu8sVVGz4i9si1LWFdAIhUSMxOGj7cG4fHhnrDZHSJEYWTDzk3%2F3tmF9Iz8WeHT7x4YnWaTzWmxqBqKlAyCbx94LtMyDWPYpuDxOY%2BNIER%2By852%2BRiWEy9PTQso1RMTO8ZYpUUuK2H34qL8KDavL%2FYkc05lqPS41SnwaVXuWe5IKQx1gEhvCD9NFjUHYGHAwhIVJwpa3Ji6sRCtS1CLpAnNjT5rrIobmROM6rxZrlJPlKId3Mb9dcTb5f7KMfwXeDe%2BlohKzZijhfZ2x4uFquHCI5bAn8ynbMI3l6cEGOqUBxUnJ4rPPkzdKpOBVcULp6kh3iyBtrT%2BcLhYpwaNtpgCgmy57BZ1JdtGcshlVTntZx7g0pAwNOQA%2FgAPvHHhUJecx2Lh3Uc7O2iynVpQNQ%2FbS3b37QLg10llWdr%2B9EYQFhVfEDHfeKQbAuOxk4QzV9ztiq4S%2Bs%2F6WM%2BK56Gb3gLUDmOgaFxJ8F%2BAkd6Z73HVAui6HnV8aCo%2F4WHRdQUO7bmuOd3wm&X-Amz-Signature=bd4c156183f26960af1e2ad54b37a3a9277eaac176f62fbe4f5ab20e2b265148&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFF5HJI%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmh4aTvWgj1n6T9Lle81XSfEZ%2B3dYhA%2FT2NqrWiUtz2AIgTsncoPCBOs3gE5D6erHndNvyf63ahu0otBnAxHExf%2FcqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK11Ttb7o0jrAtT3uSrcAwuuPIouzHB4PDZ6VgXIcvl1QsDj2r%2Fs%2BS3n10BIdDBX3%2FzAi9Xc7uJXO%2FUxJatILO2cTAfc9XTqRKCkLyIc5l7l%2FQbGfWkp5%2F9psb8%2BOyX8sF5rrAlHb%2FB%2Fn9iVOWoyjNDCNYbyedrF2Y6WILycERG0iuw%2FUY18SYjpWQyU7W%2Fsy3Ix%2FR06XYMJLZl615dFb1xGIODRlWAeO19DW0NWu181KZkGSDWwj6qGe9wfQlsSLMLQNdqdINzQUcesmFTA3hV7NVlKmfhIG0zBfruf3iJ421Z7FAGFBm2v6uI3V1pFqjVR4WQe8x18YSgI6xngHpkw3Uzz%2B79EQRlLCzJLjg%2FCf%2FqCegCpdQNMrQEZWuS6YjuqQWgqZ91AFxpFMiJs0dIyb%2BolTnF1Xa%2FOomYLcHV4dNWamE3RJYb3C8VkbUKOTRONX7PQTwUQ4C8l5zxWi%2FzbHctHLraRiWRM7kxnJG3wgSpMNhniSBBBdll3PH%2BjpS9lU1OEhe8sSHCJcnatkaoupfQ%2FRn4K8U3vzNQ0%2FKY3M%2FdhhG9V3z0KO8L%2FuaXxNZs%2BtLEq1xQjrEe6X%2F8gnKxiImSV23OwsFAQHw0n90GZBSYsYEHJ3XK%2BZ42HKk5zjQbr3Zdllm%2BXaeXqMJTl6cEGOqUBtjguQlXCo2h10uelBTg%2FWXAWD%2B8ZZyC2N5t55cry3L64u4cXRuMkBX%2Fv1trigYyiGCUKOq7Qj7JhodieOl5esBk%2B18ZRwJ%2B6jxKa5S0%2F7TC1jq7Lhpfw0Aq7xpfsfIj6oHa5MyqiXx%2FD3mh6cgakyxDH4TkOA1m%2BJXWYybLV2XSqQ2001sVgL4oY3HMIQeLJ6dvub2%2F1GXw7RE730bMMUUZ%2FYrO2&X-Amz-Signature=97fb23394d6527fe4fea991b17e4f433306146f35be1a00ab6b6e8cb68732f68&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UNRK4S%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcmJrgHFwaTvg%2FNkrr6%2BfJGO1K9Behz%2BV%2FpSXM13JY0AiEArIYIzkvBqtvDuegPuNQTmYVWjAnKhhbg0nRuEVMMnmIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYSHa8vgxm%2FqHOe4ircA56SKLCtuRfjB3cL3ca%2FXfZQ4Cl3dzL%2Bw3O2Zpq%2BU0iijxMTvzhOl7nE8oh3bBOUbTyf3mOxHdiuWGfacjMkYGIHJHWSIu1VKAjcn6AS7c7wnvyXNZ4ApjZYa3abTSrrIvD5c%2ByN5SPUZw0zN0dbY0nI%2BN7soSMX32a1V54tHqTNQbx8wiCU3D25iQpafSxjyIwytggY2UuhIsyuKRgCxENLTQiJ3cXGUBoJ%2B2APsO%2FY8mUknHOdQMwKmUrj6I2VdnSIk3mwEwCMftVlhnaoYPGd10JUfEO6S7R487LWyGyPeLSFYg6mI5mbhyreW2aBm9yPnfwiMO1ouWKxBH7OpkZ%2BK8XDKOjw3jdjL%2FnfRuLZT5eikKYQoze1Ry3Q0kBRZHxlY0FW9RlZkGJqn8r4lRDmmFmLorvOp%2Fxz2jBhK%2BtBoAw39RzkWQ5BAuu79xk4BosOLIefZeCQ55wJxINyFPFpgMmswfkx%2BvODW2GLUkIickk7tS3ZbMNP6k7wzRTXpQDvul%2BgIWsdWcWJSW7ajoOmn3rNpnjm0AevYuvzJIuzcIqP1UWtdwvP3Vw1T4UTyryMlx7AwOqPCJjTW%2Bf4gLDxylZnoYqtDg3rlLPQS02%2B26K6LDiXIuwSYgoeMN3k6cEGOqUBEEDv60GCH0veQHhxZ2LtpvdFX9tqlyacz78to6bQRohKxVhGSHJSFpn8ZOQxtzX%2BBhota7M5gCsXJT52lxUCbGJu2kOyvkVAj%2BiFl7RyPDETtXk%2BMXBUIppgDkuCWfkH4YfvSMm5PvSDw9KYcSTRmaOtY3Aq2uAsfrxEj2KiqPc%2Bdi5Rfbpkv59ppdcvBlS5bFqS91egdxxgMv7TtC%2B5XrttpbIs&X-Amz-Signature=c365da425c6496189b877692b68eb158fa5b8e122f3159ea679b281de41ede21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF6BWU3L%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtd8WZQ7eriRLHbMHElGIToh8ShF24VyA%2B12f4EVpPgIgKdwXsDubGFe2DmgdPtpvB4PYxwFD4Cuac5%2BunvLDebgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWGCYNEANbqlQA7qircA7LsZr7LErHatIBBx62jPNRBq5voPPXiubGR1800NWfqjX1iQVu%2F7KO9BFND0zTc2P5glajeQLyIUt4vqJrVwo%2BU17AiSuFWBXHhMSKd1spBJexVYnsj5XjfLU230fNAF9Py0mhwdehJlCAPKy0lPqCeb87VQABGTquTSYjAKqdxhNWU%2FLqCHUy4jxKUgiZJ6mB7XiIyb2%2Fb0FXwkPBzsKLBMKsViRHSMljNIk3lX%2B4mwjkPr2bipx2W3Lh3FnCYhmiXSDXT2MIdTIUZpDCu6nic6%2Bzmxtd4kzNwpRoR6fvUdmPPJiw%2BpZVY6wU%2FNtbQYyPeJGzxIwJhWONLJY3wf9nk69u3bu8sVVGz4i9si1LWFdAIhUSMxOGj7cG4fHhnrDZHSJEYWTDzk3%2F3tmF9Iz8WeHT7x4YnWaTzWmxqBqKlAyCbx94LtMyDWPYpuDxOY%2BNIER%2By852%2BRiWEy9PTQso1RMTO8ZYpUUuK2H34qL8KDavL%2FYkc05lqPS41SnwaVXuWe5IKQx1gEhvCD9NFjUHYGHAwhIVJwpa3Ji6sRCtS1CLpAnNjT5rrIobmROM6rxZrlJPlKId3Mb9dcTb5f7KMfwXeDe%2BlohKzZijhfZ2x4uFquHCI5bAn8ynbMI3l6cEGOqUBxUnJ4rPPkzdKpOBVcULp6kh3iyBtrT%2BcLhYpwaNtpgCgmy57BZ1JdtGcshlVTntZx7g0pAwNOQA%2FgAPvHHhUJecx2Lh3Uc7O2iynVpQNQ%2FbS3b37QLg10llWdr%2B9EYQFhVfEDHfeKQbAuOxk4QzV9ztiq4S%2Bs%2F6WM%2BK56Gb3gLUDmOgaFxJ8F%2BAkd6Z73HVAui6HnV8aCo%2F4WHRdQUO7bmuOd3wm&X-Amz-Signature=0376ab17012c12061477ac6de64db14e032198f1823ce937939fe20776e3c41e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
