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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY4RYHO5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGBPuIo3qYolHOrWNsiafvORHesW3bBoON4AJ5EjKiYOAiEAvOTrEDsBVPYkQhDi2k%2FmlyGqaQhidQE9tka7pn%2Fh83AqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGhNFTg5kOJDarpCSrcA9DBgfFmmHBTZ8k2TRtFtZctLrl22WPFy72Smv8SZWX5ckP3qna2z6bFLRcUoTcWegl34DDHDdztbdJRJPBVnjAIRwJcUp1DWa69%2FEM5P%2BqnEx7akkUnrp0x3VCX%2BYxXI4aS1u6MDoQJpvlcNG3uQA8e2Br9FwQxJ0rlCy%2FesZq%2FyqraGXVPJR9ShzDVsYfIgIGuB4sYS16bt2gilbWDQTnSrBDrr0nNAhOokH0h8ai9VwD3kmJOdy6ZQJuCUxmgVvuzi031%2FjtSFGYRyXEN61EqWAuRX8Kofz6t8ORQd5B1541Cb%2B3gKXCE8OxvgxRCgqQGQev4cKtBYmpULrfHP1W%2Bs7FIFyVxEdePlGwB6t%2FNwSrZfDGCXPmiF0ivaYa2dfS1o6TvMKusE5OYtNRgg6GB5iksPZjfVPesQqRxKMX6RZrWnxXXnpw2icw%2B4ntWHfckJeXXTWVt9PdpWKkBSgG30eMQCyouKHnpy%2FEXIi2LZWEHW0CA%2Fr20s17zmuChiU8qZLl0niA5O9%2FKzDupeB8y3OHXTIBkIiE5A9xacKPz9ckFNz6utcwcn%2FiTCrGPFDMOjeRleGyCfASxSuRSZV8L1Xp7c6fplrxc95R26NZ95YyiW%2FDVHWXlzUboMIOMiL4GOqUBZQfkQCbBZmgDJvLOeMbiQQeY8a5%2BXBL3Ma5SL1CZfiyHO1C%2FEK0FsgXoYQpdDdhDfCP68VroTMduiZJZI1vNaspVNlnElZYcuTaOh0Oz3BwDiY9mKdjOsQVEJx1QXKXsqUCYwP%2B%2FkF1H0t7%2FJdphJZFNXsNqmtU9ahaV%2FQDnD7Ufif%2F82DOu8365BbGk0dvOBYeSZAKZpZnSmW8Dscf6RjPXdPIZ&X-Amz-Signature=5b94676129746c0871e98a932ce7cfc2bdc6e14a6c2d94da77c678d337957b4b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY4RYHO5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGBPuIo3qYolHOrWNsiafvORHesW3bBoON4AJ5EjKiYOAiEAvOTrEDsBVPYkQhDi2k%2FmlyGqaQhidQE9tka7pn%2Fh83AqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGhNFTg5kOJDarpCSrcA9DBgfFmmHBTZ8k2TRtFtZctLrl22WPFy72Smv8SZWX5ckP3qna2z6bFLRcUoTcWegl34DDHDdztbdJRJPBVnjAIRwJcUp1DWa69%2FEM5P%2BqnEx7akkUnrp0x3VCX%2BYxXI4aS1u6MDoQJpvlcNG3uQA8e2Br9FwQxJ0rlCy%2FesZq%2FyqraGXVPJR9ShzDVsYfIgIGuB4sYS16bt2gilbWDQTnSrBDrr0nNAhOokH0h8ai9VwD3kmJOdy6ZQJuCUxmgVvuzi031%2FjtSFGYRyXEN61EqWAuRX8Kofz6t8ORQd5B1541Cb%2B3gKXCE8OxvgxRCgqQGQev4cKtBYmpULrfHP1W%2Bs7FIFyVxEdePlGwB6t%2FNwSrZfDGCXPmiF0ivaYa2dfS1o6TvMKusE5OYtNRgg6GB5iksPZjfVPesQqRxKMX6RZrWnxXXnpw2icw%2B4ntWHfckJeXXTWVt9PdpWKkBSgG30eMQCyouKHnpy%2FEXIi2LZWEHW0CA%2Fr20s17zmuChiU8qZLl0niA5O9%2FKzDupeB8y3OHXTIBkIiE5A9xacKPz9ckFNz6utcwcn%2FiTCrGPFDMOjeRleGyCfASxSuRSZV8L1Xp7c6fplrxc95R26NZ95YyiW%2FDVHWXlzUboMIOMiL4GOqUBZQfkQCbBZmgDJvLOeMbiQQeY8a5%2BXBL3Ma5SL1CZfiyHO1C%2FEK0FsgXoYQpdDdhDfCP68VroTMduiZJZI1vNaspVNlnElZYcuTaOh0Oz3BwDiY9mKdjOsQVEJx1QXKXsqUCYwP%2B%2FkF1H0t7%2FJdphJZFNXsNqmtU9ahaV%2FQDnD7Ufif%2F82DOu8365BbGk0dvOBYeSZAKZpZnSmW8Dscf6RjPXdPIZ&X-Amz-Signature=a184b960ac3592b0ddb380c879ee85645704b25897d0a486dec10625a1b1742c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3RA6YGY%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCkgcCWLjsRbIGIcnRJYka4afTtS51x4ZcETwdutcOIkgIge5awYqN%2FtIh5ecV%2By1gcgBDgU9EFejw8zDuPUTNANvUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0ahIEZycgnGE1pGCrcAx7r0%2BLwcSRoIs7nX504pUHrDCIo35JsWjK2mS%2BBq1Ita%2FNk6l8dg07GwEonQgkE0r2sJoX%2B587jme0gRAr1y70EMf3FyAZQiqBy9Q2LPbv6lJLqmP%2FwmvyYNXKc7weNOve1yFHOOqVqu6RE4MLIlNxhFqGIOeHZar7cDoNIhH%2FnSssyWEHpx2Xryte6hDLUiyTA5vegAGLPYw6C2RmfTKtlEd1e72kHZhqZifZa5Pcqetx63SHoamsmek0BMlcRKfnu6f70l9KXhJrO%2BXeUqRb6uODnDWG1lnDKGo%2Bu1KRULad6ExYuLlxey2JehzSk0%2Bo7fmoMkLkOiAZ0qyACe2yrUmaAvlVTVVwH7jl%2FFJxS3Yv3QZFFG2SJDhv7MrzPhQgr3g0M3FK2HJrVyInIMri8wqd9F8s5LSWeT5VzMeROCEfFic8En57pUJZ6o%2Flp%2BcUz1UO%2BjiAGEsFAirf5lRLhUrSBwEb9A0T4EAfS88tSGXUrS9pa2D4iZl1Rddpty44MxbOoJTZto8QZtB6dVLIEX7Jh721J1B7fp4MN2DzMeXeKIr8%2Bqgq8tbp4mHyLVp7TLKjZ8dRxrDIWtfU%2BPiu%2FTqd77QLompFoWZL30UoIjXWI9txTEc4%2Bk8KlMNWLiL4GOqUBmUqynOnReS6LAYy5L%2F67DHgXoUtctZhM%2BgUsfXSbkvfrUUEI2kLVT99%2BwAsqxzgow7aOBuZIJo%2BvCWrREN3LE0Qa18AsszuiF10%2FGELQwmW0iih4d6oJNERXsuGMA9pysxX1uIoy4ycYvpKy9nridnDdv6LhD8UbFa2QQLMEuGFnxU4YEjpVbos9L7zc%2BOdge%2Fuua0QN6tAM%2BiPE%2BOehhv3tnZDj&X-Amz-Signature=8dd1d7ab5fa1fc5841f3499b5770878b480717c78515e5dc68bd43d503525c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ42XTD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDlaftLKH2tMB%2FBFmnW60ja43WjVof6hZIy00T7WnnTZAiAxHqFVMmKiHQXDBOvM55diPrGWW9YAP44dHDCN%2Fjxw1CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfotFVh6lB%2BgO0k5XKtwD4Ka%2FuaUE5TyHMWoQeFUue%2BjZgiFKKZKQyN6Vk39VThtZ4ppbwgOd1cORBpydkY8iX4OY1vswdxad14V25bxIwByiSt9NabFOq%2BZn7jiYlPCbgrUpHBXx4tRmUQpMLyejFo5kRM2rZS%2FwtZto7oNnNYSawXD7R6%2FAdnEz2GYA6WdzpNWMzi30rdL7%2BQJfRX00vASSERc4CFf%2BQD3kBVRVsmar2QPujMaPE8ttn93kQoMUQ%2BYB2bTMUXo%2FeLuJ9kyiJt807j%2FNOMdUMWy4COl%2FfFu7WbtET9J%2BcbrDh%2FMVrdLt1kn6dUSA008MMb3puj%2BXmUmA6v6Ve4OAeU9wOladflC3epfRjp3Xolb%2F7VYDzvS9qWenCEnUH6fYDBZ%2FbJMrVixjiHeop9oUuuAsOIF4nYtTEKV7PYTlxiKa9Yt%2FIZzMjjqpJR%2BO%2B%2FDK%2FoCS6mgP44ojH0adwGN6RE23boy15IoBrIORGkaiQiRLzSTwR6qNfmqBNo6pYunMPn2WboKj7z9PMZSVFPSgxeNqE7SvFVcfqoBhyXVSkE1rqSLVx6LrUZH%2FpeK%2BpGMBb0bbDFF%2BbNwdAnD2kaGDEUz9Dl8Q4N1AErznZYLcM31TgidjQ8N5ASGtNFTgs2%2BzH80w64uIvgY6pgEKYak0oImsmdKH6raaf4OX9BxcLevBZIuGqzw6hK7h1kVQA%2FBJSJheCV9a9xSOYKWQ%2BqO0BPTdWH05YnzaxgNo3FXnRaKqaHYx7b4OViwznU45VG8HJ2NI6Y3kwSVxaHuVHnYDBiaZgg3M1QlusRjdLBMUJuqOMETPGsvepzvp7CCXIjUSIsjClyeIMujSA2qrQLNorrtBPE9a0ZMHTFPWpDg5nttJ&X-Amz-Signature=41673614bc60ef6d4d737dff40646ca63c2d1607d36e59a8e6ce68a37bca07c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY4RYHO5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGBPuIo3qYolHOrWNsiafvORHesW3bBoON4AJ5EjKiYOAiEAvOTrEDsBVPYkQhDi2k%2FmlyGqaQhidQE9tka7pn%2Fh83AqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGhNFTg5kOJDarpCSrcA9DBgfFmmHBTZ8k2TRtFtZctLrl22WPFy72Smv8SZWX5ckP3qna2z6bFLRcUoTcWegl34DDHDdztbdJRJPBVnjAIRwJcUp1DWa69%2FEM5P%2BqnEx7akkUnrp0x3VCX%2BYxXI4aS1u6MDoQJpvlcNG3uQA8e2Br9FwQxJ0rlCy%2FesZq%2FyqraGXVPJR9ShzDVsYfIgIGuB4sYS16bt2gilbWDQTnSrBDrr0nNAhOokH0h8ai9VwD3kmJOdy6ZQJuCUxmgVvuzi031%2FjtSFGYRyXEN61EqWAuRX8Kofz6t8ORQd5B1541Cb%2B3gKXCE8OxvgxRCgqQGQev4cKtBYmpULrfHP1W%2Bs7FIFyVxEdePlGwB6t%2FNwSrZfDGCXPmiF0ivaYa2dfS1o6TvMKusE5OYtNRgg6GB5iksPZjfVPesQqRxKMX6RZrWnxXXnpw2icw%2B4ntWHfckJeXXTWVt9PdpWKkBSgG30eMQCyouKHnpy%2FEXIi2LZWEHW0CA%2Fr20s17zmuChiU8qZLl0niA5O9%2FKzDupeB8y3OHXTIBkIiE5A9xacKPz9ckFNz6utcwcn%2FiTCrGPFDMOjeRleGyCfASxSuRSZV8L1Xp7c6fplrxc95R26NZ95YyiW%2FDVHWXlzUboMIOMiL4GOqUBZQfkQCbBZmgDJvLOeMbiQQeY8a5%2BXBL3Ma5SL1CZfiyHO1C%2FEK0FsgXoYQpdDdhDfCP68VroTMduiZJZI1vNaspVNlnElZYcuTaOh0Oz3BwDiY9mKdjOsQVEJx1QXKXsqUCYwP%2B%2FkF1H0t7%2FJdphJZFNXsNqmtU9ahaV%2FQDnD7Ufif%2F82DOu8365BbGk0dvOBYeSZAKZpZnSmW8Dscf6RjPXdPIZ&X-Amz-Signature=1c799e2c3684f5daeccbc61477c4b8b56f83c6201943d1502211dc85aefa310e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
