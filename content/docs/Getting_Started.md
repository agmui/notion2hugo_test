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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBGHPM5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHJrMNyBK04boSC7mrqSkKUONsXGWy%2FGlFJyWeTzXfe6AiEAo3t8scY5ywA1ujcwEqjqXPeFinj1wJI2S61r2MGRBygqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxt0lIIx5EmlO49ircAzJcnQjqrQIbJA14QJ2GVEh5vssj10D%2FgK0LHvtV6ETumk5cusL9LuXsBCfkzbx41d%2FxDwXc0Hi8mK4mhMWW67y26aQZiF8%2FkwXBO7lhUQOR1W95m5Zevc%2FNZjEYPSqcrYQ1ezU8z6otJosB%2FNlKSf4G1wlWQgn3VDnu1XBNJpLT0BzuWEpXCgiPYjRi7G%2BYeO%2FSn966t5nmenUcsfcRHvPUxzd7JrCHe6zY7nSw%2F4MNlI4PnEF5g%2FkSevzXeYE3osjtTlcgpdmNlai3%2BMMf0kZZCxG%2F9C5JSTbxu4jp0efPYEJVeJTaNLyR1Ag5ccVPbOSDEPgoV3C5d6nL284QiMUAQy9I76O75dss4jMfTms8dhD2JQp4FKtFA5slwv%2FhHQja%2BlFPrbab%2FgnKywA2Zu9NO4KO1tNHOurk9y%2BDjSX4MmCzNavSpJ4AvSkKetB1JfxyaNyT6deTY1xPiSCT0AvGQw%2FdKVOtuy7%2BrTUzM7%2BCN47geeZs1xYzOwQo9Oa8esGdYL1LH165XqJ1UqFKkdn45zQO0b0u80tgAUxE0tmVaTfEtmI0IeFB7rMlmXlgUyUxuCS4RHbfCbYzK%2Fzkv%2BFppL%2Fk3b7GNeZ83NZKFvjTTy%2FFjB9S6NrD5FBYMNbIk8AGOqUBY%2B26K4TgZoknHQGrX5z9arTlNADN4NW9qM%2BoWFsqMFu5eBCE54XfLYV%2BGc8b8jHMMmzeJsGyVlHQF2fvOewPaCXtEImPnBD9allWW242V8Zg2QE1aAStdUIu1wSFVbz%2Bw1sMZLASEGJGqux3Zvbjw3lxLNXDJBAEXdJASTBiGgzWwGh3P3pYo22SQxSebuTZHCxw0wbeWWcHzLLSaBjnobDHZNlY&X-Amz-Signature=e8b9cc94211e69ce6a1739f20ea4b5fc4027833e7edc17d032cf9a2ce1dd6525&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBGHPM5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHJrMNyBK04boSC7mrqSkKUONsXGWy%2FGlFJyWeTzXfe6AiEAo3t8scY5ywA1ujcwEqjqXPeFinj1wJI2S61r2MGRBygqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxt0lIIx5EmlO49ircAzJcnQjqrQIbJA14QJ2GVEh5vssj10D%2FgK0LHvtV6ETumk5cusL9LuXsBCfkzbx41d%2FxDwXc0Hi8mK4mhMWW67y26aQZiF8%2FkwXBO7lhUQOR1W95m5Zevc%2FNZjEYPSqcrYQ1ezU8z6otJosB%2FNlKSf4G1wlWQgn3VDnu1XBNJpLT0BzuWEpXCgiPYjRi7G%2BYeO%2FSn966t5nmenUcsfcRHvPUxzd7JrCHe6zY7nSw%2F4MNlI4PnEF5g%2FkSevzXeYE3osjtTlcgpdmNlai3%2BMMf0kZZCxG%2F9C5JSTbxu4jp0efPYEJVeJTaNLyR1Ag5ccVPbOSDEPgoV3C5d6nL284QiMUAQy9I76O75dss4jMfTms8dhD2JQp4FKtFA5slwv%2FhHQja%2BlFPrbab%2FgnKywA2Zu9NO4KO1tNHOurk9y%2BDjSX4MmCzNavSpJ4AvSkKetB1JfxyaNyT6deTY1xPiSCT0AvGQw%2FdKVOtuy7%2BrTUzM7%2BCN47geeZs1xYzOwQo9Oa8esGdYL1LH165XqJ1UqFKkdn45zQO0b0u80tgAUxE0tmVaTfEtmI0IeFB7rMlmXlgUyUxuCS4RHbfCbYzK%2Fzkv%2BFppL%2Fk3b7GNeZ83NZKFvjTTy%2FFjB9S6NrD5FBYMNbIk8AGOqUBY%2B26K4TgZoknHQGrX5z9arTlNADN4NW9qM%2BoWFsqMFu5eBCE54XfLYV%2BGc8b8jHMMmzeJsGyVlHQF2fvOewPaCXtEImPnBD9allWW242V8Zg2QE1aAStdUIu1wSFVbz%2Bw1sMZLASEGJGqux3Zvbjw3lxLNXDJBAEXdJASTBiGgzWwGh3P3pYo22SQxSebuTZHCxw0wbeWWcHzLLSaBjnobDHZNlY&X-Amz-Signature=7dd9451fec55f20e8e31784fdf539ad3ebef7661b451a84bd4bb934a6e28ac22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NCMBID%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCM8U5OdZT2eeTkWt4CwkJ8VbDomLlWtc4Y0e5XdddN%2FQIhAJjL%2BWG%2F4OAQ3e1e8e9tu4DyQ3P3A5TzQEWbUOWTlvHdKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV7RyD4LxBsDo%2BSaAq3AMNVWFF6dk2hstRLZkwzSOIlY8rIsk7SxwXZjLZl1vWW0B%2BcvUo0U2KoetUc9%2BeoLE2O1xoO%2Fsb4NGAhMNHi4smslg8UoB%2FsNS5OoxKqGNhYXWCipfdyKhO1L54yzFt8spKPu2bG6rwrfL034m5LZySbnpnHyz%2BCV06SmMNawe8iT15Jq7%2F%2FlL3WtZJ%2BmUj1%2FDvFzbdwkfNTXuD4vbwYqGetGxLEXSw%2B4Lv326BNNRG7Lsbffrzif3f1CxELTQl5%2FJcSG3QCJYCVU%2BPI3HhFPQQg5CRpZAsa0G8rLNUR5learGaYYehJJGEd60HzHHSNYk36EUDbWwqDfP4n5Jth8zuuvtoVTinr14Z50BrXNkH5wekef4CwU01ZEDSlurO5W1atWc5%2Bx%2Bclw282sgpBRLoM7wlw9MDUS3x18ZTmgXiDijU1k%2Fqwp7Rw22nULCLaDvPnZLwgxJor1unjeUG552KIGJ2j%2B2bu2k97%2BZl0va22O5RogY8Z%2BYEjFQV87AAhru5gFtGQLMU%2F4GLka75RKz4iodJWNxZ%2B%2Fo2etyEBhn5UMEnz3JuRcbUFnSngPoye5Gpd1Uk2tgwzL8hVAPCEeuyQgqTPGVwsf7ra3zgl72xdOAyB1vV5mhFFgfSODD7w5PABjqkAUQkXVi%2F3gv2yFdimUG7PqdSB8LtTzRVsmrq9WVhq7R7dt%2FX9P%2FZz9EGLnVojwepTlE5maoV267%2BCAG4KrlVzSQs2A89OAKzTC6hAufztr%2BFrPk8hz%2FjWlZBRgwn63Z1oX54hCPf%2BCXtZn4fGiZEtuI%2F1WfLPO%2F%2BNzQxrb1iCF7HpfWqy7EAMc%2Fa30GXQqThooRgS%2FF%2BMhqFnV3cAuq8oan0dxfJ&X-Amz-Signature=f5a11e3c249274cedb4a432de6ea2b6bd46c1deb51b35b7fd2a50fa944ae963a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPS76O64%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDuQEioJVhv2P1rcdLD%2BBJhKCb5iYRQt%2BvRUd2wSkLVnAiBcIH2myYijEu69%2BSVSssX8Rrrc3IFHD%2BiLNfqbx3nfwCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqlXe4DycANatdUNOKtwDhFpEF8il2%2BoHn2LEjBm30Oy%2B%2F2mddg3rCGx8nNqKHNg9HAtTJGXM1%2Brc6pGKE%2FRbKftgBCcOYqqyv6wsGG0HbWz1%2BkFyFM12mabEpeaiYyeYNLCWRsmIysz8C5Pu4mMqUF2aD3nQ5HP%2BoQ0XUOLdtNqgx8G7EyB1D5oc47A2CI0S4ORkfmfjPoW%2Bi9v8t8gSMsdNWgBJELVEPXCeinzvrIyVLLOFSQwPQ7o422NACIwt9CC%2Bv0bTVDXw4OozCuginkk7eha3Jajc5qiUL6HBcKvuEzbX0wn2LqXUvhpzaIOyktXCQVy1Z30Qq%2FIjNY9fMsOwVcZlQd%2B2GaAQ5IMgvZzG6AChem4UWrzxKlCO6tYDZ3WTPJedmYZLHNMk%2F%2BuNnW629ILU%2FIsB3GJQf%2FWbw1lfC%2BjkxoGK8yq1yHg5TQ8mBl9hFGUd0cQ2GB0k%2FpxTkmj2ToEGSGTqXS8jehpbfvDOS7OiwQhz%2FOsjPkoP4KII%2BqHe3hMr1ImAQ9BU7ErYq516RpllM7AClvBp07IV0IOZwAQV6v9geuk3vuaVlIJYAXUs7%2FtwHveyMe%2BsTAb0SA8I3WbXsmh3v18yHZd5582s4q7W4XiepkDIQmNd24Kt3rEO5WxVt0YRQPIw%2B8OTwAY6pgHDvK2QkZ%2F1WEFQpDdFQB4tzNB6m8MShYqK6rYilL7Jdr%2FSZQGEeUB%2B6ZuKdmepyr6HdAy%2B5aQjXiBssUmBqY0aBA8K7DWl4LBNQxjxazxSUCMNcKdV%2Bt4Mp5C5h5dU8fieta%2FPvaUVon4sRMzAWtOHSmHAvtNaqaYCs3RguzADwRxs6dfeEHSrhVvp6dSy5o80HfCtscElQZGvgegDA0rv%2FFO2muH0&X-Amz-Signature=3c43f2ead8b8200037d0b456f182f86a8f7a83c51f7941c4c54df3dcc4dd79a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBGHPM5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHJrMNyBK04boSC7mrqSkKUONsXGWy%2FGlFJyWeTzXfe6AiEAo3t8scY5ywA1ujcwEqjqXPeFinj1wJI2S61r2MGRBygqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxt0lIIx5EmlO49ircAzJcnQjqrQIbJA14QJ2GVEh5vssj10D%2FgK0LHvtV6ETumk5cusL9LuXsBCfkzbx41d%2FxDwXc0Hi8mK4mhMWW67y26aQZiF8%2FkwXBO7lhUQOR1W95m5Zevc%2FNZjEYPSqcrYQ1ezU8z6otJosB%2FNlKSf4G1wlWQgn3VDnu1XBNJpLT0BzuWEpXCgiPYjRi7G%2BYeO%2FSn966t5nmenUcsfcRHvPUxzd7JrCHe6zY7nSw%2F4MNlI4PnEF5g%2FkSevzXeYE3osjtTlcgpdmNlai3%2BMMf0kZZCxG%2F9C5JSTbxu4jp0efPYEJVeJTaNLyR1Ag5ccVPbOSDEPgoV3C5d6nL284QiMUAQy9I76O75dss4jMfTms8dhD2JQp4FKtFA5slwv%2FhHQja%2BlFPrbab%2FgnKywA2Zu9NO4KO1tNHOurk9y%2BDjSX4MmCzNavSpJ4AvSkKetB1JfxyaNyT6deTY1xPiSCT0AvGQw%2FdKVOtuy7%2BrTUzM7%2BCN47geeZs1xYzOwQo9Oa8esGdYL1LH165XqJ1UqFKkdn45zQO0b0u80tgAUxE0tmVaTfEtmI0IeFB7rMlmXlgUyUxuCS4RHbfCbYzK%2Fzkv%2BFppL%2Fk3b7GNeZ83NZKFvjTTy%2FFjB9S6NrD5FBYMNbIk8AGOqUBY%2B26K4TgZoknHQGrX5z9arTlNADN4NW9qM%2BoWFsqMFu5eBCE54XfLYV%2BGc8b8jHMMmzeJsGyVlHQF2fvOewPaCXtEImPnBD9allWW242V8Zg2QE1aAStdUIu1wSFVbz%2Bw1sMZLASEGJGqux3Zvbjw3lxLNXDJBAEXdJASTBiGgzWwGh3P3pYo22SQxSebuTZHCxw0wbeWWcHzLLSaBjnobDHZNlY&X-Amz-Signature=fb9d1fce7172bcabd9eedf05a0ae0dd1a38110db183ab9a1cf5d4159dc5b4d10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
