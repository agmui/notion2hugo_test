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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZL3IGH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDllfbJgGEtfu1yAL2ukIlugX0sdjQ0Qp83FZ4bk21oUAIgUeqImDZ9QW6UIzmk72IF1L1IPP5unP4LsG0Vhn1Adl0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERB%2FiplVGwHqofaUircA8VeBgGm%2F6fj8lS8Q2cirpdypkrWIwKZBXC%2FykicyXWL9MZHK6s6v23yVMXc%2F4Cdt8oBDMs%2BlooAwpDAcnR78AgOrRYMSLMeS3A5GQh8VXUaJLZlk9EXAmmP2ZssL4U09jVgugT%2BRuFy3WPm6bcNuNc%2Bmo71C%2FdQRMqgewZKilSJNi38gTdTvK0knyi2fHwzSZ0zNwqzdzC5WlEVIXDZfVDD21QGogUKHDDf1DaaDnZt6lG05ke%2FC%2BS3uO8Mhx%2BTupiehzgpnkgYx65VsvWqhWs9goiT40KbOKmSgxJlhmI9GKCgJ8%2BnyC2CGK0pp1%2FGGNTC6ATo%2FCQ75mxue1KoMVV%2F4fm7av4LjP8WMhyYi2UfODYFXA%2FLhycZyJKZe6B9Q0R9LDS8YR03LsILQ7etX8VuNe46IbpOXegjCuzwAinhhRE5OhSwuWViNcQ%2Bkhq0NaRwH2gJdRtvxWpL5cQ6UGuxxesO19DZcZcA08hsQvw8C8PHrxAjFTe7QaRP1Ny3zwWgwhZOMrAVY%2F5C9pb9ydKrnpdBBDTya%2BhyixlzOfJQ%2B6Cv3%2F2%2BMwNf714gFYBbqLdzkrca937I2wrM8hQymTKI2J3jADRy8ELs1KbVyykGLJxSk2%2FulxjDldWAMJyjsr0GOqUBrQHHXG%2FdqJ3qvRANn85gCEXnoUF34OGGBKCUyogx7VmuKhRdi3vDgCodo9uYCjMSG34VYDJi7xnn8YVVggctH3ga2ak8Tlz7%2FeDki%2FCY%2FV0nKo6h2Edj%2BjdaBTIRQVDUIigqMZgoCxwb1dTnXAhYvVerF9cRxoCPKENs5D2ctB33A%2BwDVAu8mSdy7SoZ2erEV8%2FU3lwiFGYSqN%2BcUVzFDIerm%2B%2Fd&X-Amz-Signature=4498b49558691554f6b71ea05ca46dd6721eb6d110ced72512c96c9527f59ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZL3IGH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDllfbJgGEtfu1yAL2ukIlugX0sdjQ0Qp83FZ4bk21oUAIgUeqImDZ9QW6UIzmk72IF1L1IPP5unP4LsG0Vhn1Adl0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERB%2FiplVGwHqofaUircA8VeBgGm%2F6fj8lS8Q2cirpdypkrWIwKZBXC%2FykicyXWL9MZHK6s6v23yVMXc%2F4Cdt8oBDMs%2BlooAwpDAcnR78AgOrRYMSLMeS3A5GQh8VXUaJLZlk9EXAmmP2ZssL4U09jVgugT%2BRuFy3WPm6bcNuNc%2Bmo71C%2FdQRMqgewZKilSJNi38gTdTvK0knyi2fHwzSZ0zNwqzdzC5WlEVIXDZfVDD21QGogUKHDDf1DaaDnZt6lG05ke%2FC%2BS3uO8Mhx%2BTupiehzgpnkgYx65VsvWqhWs9goiT40KbOKmSgxJlhmI9GKCgJ8%2BnyC2CGK0pp1%2FGGNTC6ATo%2FCQ75mxue1KoMVV%2F4fm7av4LjP8WMhyYi2UfODYFXA%2FLhycZyJKZe6B9Q0R9LDS8YR03LsILQ7etX8VuNe46IbpOXegjCuzwAinhhRE5OhSwuWViNcQ%2Bkhq0NaRwH2gJdRtvxWpL5cQ6UGuxxesO19DZcZcA08hsQvw8C8PHrxAjFTe7QaRP1Ny3zwWgwhZOMrAVY%2F5C9pb9ydKrnpdBBDTya%2BhyixlzOfJQ%2B6Cv3%2F2%2BMwNf714gFYBbqLdzkrca937I2wrM8hQymTKI2J3jADRy8ELs1KbVyykGLJxSk2%2FulxjDldWAMJyjsr0GOqUBrQHHXG%2FdqJ3qvRANn85gCEXnoUF34OGGBKCUyogx7VmuKhRdi3vDgCodo9uYCjMSG34VYDJi7xnn8YVVggctH3ga2ak8Tlz7%2FeDki%2FCY%2FV0nKo6h2Edj%2BjdaBTIRQVDUIigqMZgoCxwb1dTnXAhYvVerF9cRxoCPKENs5D2ctB33A%2BwDVAu8mSdy7SoZ2erEV8%2FU3lwiFGYSqN%2BcUVzFDIerm%2B%2Fd&X-Amz-Signature=47b809eb3873d98a27c9b665b14d5d523c1f0b1b07191d8b265a77c0f9fc9327&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLVPLOLT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT8%2FCP4BZY3ARb9xn8CiYP2ttsXcTFuM1wjzZtULi1hAIhAMi%2FvkAuCp%2FMUnZ%2F9R2tWhg9h82574d43KU%2BMtn%2FjSECKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Fy34GxJrMUHDQ2wq3ANyYCno%2BUrBEeTvVk%2F2sCh%2BZm%2BaCP4YPwG8oKUokPK97Obq1b2glzuy4nqbIZr1Xs066Sqr6sSIAcSAwMOWyPgycX2M4vsu3Ci7si5DrDMQzAvhU5k00jvhqJOBxjSNudKW%2FQlMciVLlpq0mj8jKyjWOv%2FKsz6ZBY2Pl3oSVSCUDMF6f1M%2Bp4QUagGeV4lf%2FJsV29rpXY7mM2pTL8sFUHoAgXM%2Ba7EaN10Tt4cUu9LXejaQwgdomcMeM9yjACQG%2BMTQIYqnhnhu3BZArFYszjMn3HPiU%2Bed4n2c4faBl8nfjH8%2BoPk%2F%2BVwxDHgyvQQtbe840kNFERRSMQ9FN2djjl7ehK5WFdzAqX3tgcY3nJXnininaPwESYS67oICjl0ycTT%2BfWDXuMn4EjzNTTbo85fhaQAqD%2BDzjji%2BX4rPorj0DbQozUAocIkNPrExFw0YF8U3d3oyM7bPw%2F6hkWQRdOefxGoD3NwfBxvJ%2FFmogOr97zFEhPOllrudtp5ycpL%2FhlnV%2BZA9tE76hngYjuRiF3eIGusPVf4FxuX7HOsPG%2Fyvg1Ul7oUe2Aj%2BT3NcN1V5IiP49CC6eK70T%2BqSKq%2FKFBSRufNBKhciZjr834jMqZNkSuYxUPJ3iUcF95kBaTD%2FrrK9BjqkAQBEQyV89JBc8VqVmgFelu5VcIHJLwqIHLNPGXKgKu6mwhDls35a6sPoiInKLTcCnnH9wL5Ny44XZeDVTwESw9SxcX2F44fJ8vvNYENAvdhjyz8LFBCjP3m6QAccGRbQeafeYkMkdyWhigmNUN9P0Ig0XO52Xw644PiMgv8eywq5odc%2FIQ1zVp%2BUYpex7LYbZ95a3EfdcRQu1zgUr2s8UFaS8f%2B8&X-Amz-Signature=4f86d06fb9ea87ebd437c82a3f6e72183d8da1a1ee7b1881c79ddbe5fdb77d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABWULZY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCKCoNOb2ZJOaP5cN%2Bu0xHaJS6U8xDRWgzGF8FQ%2BIXUgIhAKQCY%2BxDzi3w6G%2FAGjPEEpj9UjqWncK2cr0xGL2eR4seKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9gr0Lhwhpp2qsRyQq3AP5NTJ3CuLNtRNXjWnHMtDjClTWCz9TuEkhtadzpPnMWTLq75YDyozzuBJEeglLBK3fe5RbqUvqkNGeOcL7ZohwrERLRoinVQWC4G6PXoLRiimdN6nU%2FW0ZyayMDy1Bi6hgA04XvLY1IiLTRVKLNyi8j0BOL5tOrycg3MghHzxCAjegp0M77GJUVVRXfOvvldJ6riXG%2B%2Bd%2FBfiR%2FPt9M%2F3khmB3SFsnFdvVKEnCxPSMAYDgxz6rjzTZg1jh2%2By%2BXampIPdbTgz9YRiosHjB29sLGIr9e%2FiU7qSIisTrQwoIpBg6fGqBy2tCNSNYrw2bpkJLlS7he%2B3NqXWsKqz3n68gfOmktfkHjViPAdQc9%2BUeYb9KsCdrQS%2BL65b4QX0M%2FX4f8RUwiLL4YF%2FmyRPVJ3gKaIsGHJdVFd56rbCgpIBk9%2FWg2pa5DiM%2Bdm8U6u01vtITfzXSQPnQ2j1hH79oYLyVoWJLksRGKX%2FMMsgTIsmfKGaNLuTnnbMclCoRgPJrWN6HDCIyV%2B8tljxVOEAmGit3NfC7iKM7EHUj4GdmnNy7TbVtjfbFkGbMTz%2FT1B2jiggeHTJddkpRCRf8hU75mHmhvFAJbzPekhjfD%2Ft%2FxYHdx%2B5IWVR4XcNYNl6qUTDirLK9BjqkATaKB%2Fq60OiNy%2FPJb7YlciSMRQqXxOZs3M76GEAn3eMYI6q%2F6CJxIKiyUgNR1L8xIcI4kxH7kQ%2FAMKMcBeU1yNHCidwjIIxTQa92iW5kI0UOJGUmDLCppnpGinJjmI7qAZM8BFgPa66SMeXyW0ek4Uf7UFUtDg0V6hXqAW07y4XPPQl66OJK1ma7rjU8tAn5e%2BOGIjJr39LDefuRg9NDyHmlXssr&X-Amz-Signature=c8320e076b9616f896a176ed761b7243779c74f570a0be272a54eb600ee3049d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZL3IGH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDllfbJgGEtfu1yAL2ukIlugX0sdjQ0Qp83FZ4bk21oUAIgUeqImDZ9QW6UIzmk72IF1L1IPP5unP4LsG0Vhn1Adl0qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERB%2FiplVGwHqofaUircA8VeBgGm%2F6fj8lS8Q2cirpdypkrWIwKZBXC%2FykicyXWL9MZHK6s6v23yVMXc%2F4Cdt8oBDMs%2BlooAwpDAcnR78AgOrRYMSLMeS3A5GQh8VXUaJLZlk9EXAmmP2ZssL4U09jVgugT%2BRuFy3WPm6bcNuNc%2Bmo71C%2FdQRMqgewZKilSJNi38gTdTvK0knyi2fHwzSZ0zNwqzdzC5WlEVIXDZfVDD21QGogUKHDDf1DaaDnZt6lG05ke%2FC%2BS3uO8Mhx%2BTupiehzgpnkgYx65VsvWqhWs9goiT40KbOKmSgxJlhmI9GKCgJ8%2BnyC2CGK0pp1%2FGGNTC6ATo%2FCQ75mxue1KoMVV%2F4fm7av4LjP8WMhyYi2UfODYFXA%2FLhycZyJKZe6B9Q0R9LDS8YR03LsILQ7etX8VuNe46IbpOXegjCuzwAinhhRE5OhSwuWViNcQ%2Bkhq0NaRwH2gJdRtvxWpL5cQ6UGuxxesO19DZcZcA08hsQvw8C8PHrxAjFTe7QaRP1Ny3zwWgwhZOMrAVY%2F5C9pb9ydKrnpdBBDTya%2BhyixlzOfJQ%2B6Cv3%2F2%2BMwNf714gFYBbqLdzkrca937I2wrM8hQymTKI2J3jADRy8ELs1KbVyykGLJxSk2%2FulxjDldWAMJyjsr0GOqUBrQHHXG%2FdqJ3qvRANn85gCEXnoUF34OGGBKCUyogx7VmuKhRdi3vDgCodo9uYCjMSG34VYDJi7xnn8YVVggctH3ga2ak8Tlz7%2FeDki%2FCY%2FV0nKo6h2Edj%2BjdaBTIRQVDUIigqMZgoCxwb1dTnXAhYvVerF9cRxoCPKENs5D2ctB33A%2BwDVAu8mSdy7SoZ2erEV8%2FU3lwiFGYSqN%2BcUVzFDIerm%2B%2Fd&X-Amz-Signature=a1b86c94ba39f0d610cf34ddbfa46b1ee98cb1ba85d4b3ca06948dfe578e3142&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
