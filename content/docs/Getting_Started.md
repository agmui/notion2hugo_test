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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5P3HWM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDjxrdRQ2ev2aGpazHCJskgZDlDMylzgv%2FeJ5NwlC420QIhAL%2BgLZLfInJYnn85QR8hGSIkHu6GJU7MvrXaDK5VXu%2BrKv8DCG8QABoMNjM3NDIzMTgzODA1Igzq6i4fYfEWdvxnllIq3ANFdK9z9jLrAJAomA5%2FaRJ99%2FQfSmipRDncqb9TNHfOs773itdIwQJ5OjEx9ZvRQCvncFAsQHPPUwrX5v0R6a2QB0EvYkq%2Fjb7nzxhdwDpjUgj3z6bOOy0EsQJf4nM7AwvHHEr%2BBjH15IbXwgJEM77tedu8Bd4NcjfMhTpAneRO%2F0h6nYTGiHEvw%2BsRTmjFmU9orbIgDO6qbHv4YvQsip67Guj6c3XP98Wn0Wg1jg8z4H8rUwbCSdPuN3Qk4e74vha3UFa4mqQTo7k%2B4fCqxf203Ngt6rT2lJuP3KRXyBXy8YPsyqRE6%2F%2BCdum9HavAqq6QLbHti8Ia33NPB%2B9zM2DN2NWdQo9zsFqgNEB6EzvanNG0kgsl32HFh5%2BxFYRNPWY9CWZnM62Dn3a7te%2FTWpVbZvLfYpjdDb3zuky2zgIYhciUEEtEZHSuZ1o%2B%2FQxzmaFDTOfU6iIJ1fehFxS9eL01BoMz5vVaoGY6HyPxG7LlY4LkFX11J8sUplHOqudBCHLW4C%2F3Fy%2BYE6RONf14Un7gGc%2BiyFqMXVBd2SWGoGUjwJ69UamU7YTbw0MsJAPdnHnxi1vkQzWauskctGhjRpTOhSLaabWWQUwx1%2FOz9MvCLk%2Fv0awBCG4Oo3r4VzCvi4C%2BBjqkAbNhuqsrveP7fn%2FIJsIEwJXLX4D1oh9y8uJlz%2F0ju3iPWm0HdfG7ysejWWnDp9N6Q%2BrZOP1A%2B3PqvvDcz9yKhjHI0xvWX5XpEwDrHBmPno9U9DekcjpRS9T3YtPjOfDLeGaG3ao%2BN9qw75jOTUuJwsxJag562O3UcP2MLc1a5TD9V0Vb506qhdD2J2VUzbtJ%2BRbCwm%2B%2BMgphquR6ue%2B0t4BrcTmg&X-Amz-Signature=21f19b36b6710aae38ef7d8f61a76576f333c9dce64669d81b4677aafa4a5b80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5P3HWM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDjxrdRQ2ev2aGpazHCJskgZDlDMylzgv%2FeJ5NwlC420QIhAL%2BgLZLfInJYnn85QR8hGSIkHu6GJU7MvrXaDK5VXu%2BrKv8DCG8QABoMNjM3NDIzMTgzODA1Igzq6i4fYfEWdvxnllIq3ANFdK9z9jLrAJAomA5%2FaRJ99%2FQfSmipRDncqb9TNHfOs773itdIwQJ5OjEx9ZvRQCvncFAsQHPPUwrX5v0R6a2QB0EvYkq%2Fjb7nzxhdwDpjUgj3z6bOOy0EsQJf4nM7AwvHHEr%2BBjH15IbXwgJEM77tedu8Bd4NcjfMhTpAneRO%2F0h6nYTGiHEvw%2BsRTmjFmU9orbIgDO6qbHv4YvQsip67Guj6c3XP98Wn0Wg1jg8z4H8rUwbCSdPuN3Qk4e74vha3UFa4mqQTo7k%2B4fCqxf203Ngt6rT2lJuP3KRXyBXy8YPsyqRE6%2F%2BCdum9HavAqq6QLbHti8Ia33NPB%2B9zM2DN2NWdQo9zsFqgNEB6EzvanNG0kgsl32HFh5%2BxFYRNPWY9CWZnM62Dn3a7te%2FTWpVbZvLfYpjdDb3zuky2zgIYhciUEEtEZHSuZ1o%2B%2FQxzmaFDTOfU6iIJ1fehFxS9eL01BoMz5vVaoGY6HyPxG7LlY4LkFX11J8sUplHOqudBCHLW4C%2F3Fy%2BYE6RONf14Un7gGc%2BiyFqMXVBd2SWGoGUjwJ69UamU7YTbw0MsJAPdnHnxi1vkQzWauskctGhjRpTOhSLaabWWQUwx1%2FOz9MvCLk%2Fv0awBCG4Oo3r4VzCvi4C%2BBjqkAbNhuqsrveP7fn%2FIJsIEwJXLX4D1oh9y8uJlz%2F0ju3iPWm0HdfG7ysejWWnDp9N6Q%2BrZOP1A%2B3PqvvDcz9yKhjHI0xvWX5XpEwDrHBmPno9U9DekcjpRS9T3YtPjOfDLeGaG3ao%2BN9qw75jOTUuJwsxJag562O3UcP2MLc1a5TD9V0Vb506qhdD2J2VUzbtJ%2BRbCwm%2B%2BMgphquR6ue%2B0t4BrcTmg&X-Amz-Signature=1ddc7efa8a0cee824e8b66473ac38e78985d3fb5445a7af3ea647779ffeb3114&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GS3ZSFZ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDoClSypX88WKa0lStNndXgX1JdH%2B0K2DDGjlV5xGKozAIgMe24%2BWroPDQkILzvQo6R%2F6QeAp%2F9brhi0jmtSQ3FEqsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKzSekIhdEZKs2%2FGXSrcA0xLtE53PKuml%2F7dG%2FisbSJkMj97r0l7LYITDLVhlOOd2%2ByQ9pxmGaefPO5km7uGZCIa7ew3WX6FrhU8DX3X7DLAoG6Ghsze7Lw8jzWphPZdQU%2F5rRiA8wLNJkzmaF8LIXY7irorJa23GulnQahUcCtig0sPElLngdPK4%2FEKqd19X7DPNaO4ILkqaDaLjB4TPo00vmtUAKYMQbzMXvJE719bj4vBxDTbG7c7RYnkOqBdjNItbO%2FJIXC82XGlosSOtvPfqzGuf8Yq9gEfdro4nZMKufBj4B9Trb0F5Yes93nWN5nCLlehSGRLn688cYv6ixuv6l5QdNcp8iBS%2BztICKBMb%2FekGwrPmfhC3Th77bfeCkdVBp3cnr0sq45WG4lAllzqARbg1%2FeB2boLgTsAPg8xnUWlZ2NMSZX2U9W4bEfCO%2Bl1v4y5W0Z4ZJq3qEDmyLNVbJduLw1JibdDzTfGh%2FFlrQg%2B2jNN2nWUUi3Zfd2bz7qwSkqrenQpf3hl44%2BZ7rqpG3%2BdkgUNzx5%2BgifwREZj8cMkjvok%2BcCuByg2Ub3MPOmMz0cwv3nPVbbTiPHQ8pRiCUU%2Br9Jp0lu5I54OW0UePjq6%2FXtrUbXT0dM9egJ0Y4MTXr%2Fypgo8dVz7MPCLgL4GOqUBqZp4rh24egjbd08P5BQr11RhFjOjtdmZWUxYJ9jTN6c7TsM6u5urWCS7PcnoPYPeASOXPh4pnD53d4iO%2BiQ2%2Bn3xF2duj99yd3EiFrLjRMtDsR06RJtBFnN%2FIMzTk%2F7jOOTb8nyY%2Bx9hOYMCVvir9lGyWBbn8%2BrlRVHM9voKfqSc3h75A4fy%2F9IJh4RRaVjK3fkfPFSGjBDIMtR%2Bt8ivXrQa9qvD&X-Amz-Signature=935615084dd1615645fdf5637976f7d0305198c3e1c1dcedbf334f91daeb1b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QCTX6SC%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDQFWDml8QinEJE1dRdnsK6aZ%2FrT2HWdISKhveH%2FxN1IAIhAJBdtvYkklKSLqGk8M26MOpM0h0N6ByYS3oXzLWSxoIOKv8DCHAQABoMNjM3NDIzMTgzODA1IgzHoZP3NDASRdiFE50q3ANUw1Qh5tMsvJqZ5UiWt1%2FuDF5X%2FVKEVJkKKV5lCToU%2F9z19TMS2U0W07cHIa%2FiU1BLZxd%2BrF8mreZVNb5gVHfAKMlGlkPDCQOMh2iPtCUjvJtcU2BlGjwTJCZOhQhUOeJPK9FG3ErAOt1a3I7HoFQ60GGk4O1Kn411lVfoCSOGvszv3zKY4QrGuBkln7SSY%2B%2F63XD0tajiQ%2Big2am8RotbB3CAo1Q46bC282roGc6yqJhUlITDfuCkHDQ4lemjXt1txPuoESng60%2FuvXg2ulrHQNY5hNyuSTq2%2B4zXI4ukq8M4gyben0MiEM%2FCbrnXewVQjFdm9MDXxUXWj9qHN2IOU9mMEVjRxHUm4BrX9ZE1it7JWz9gfmTL%2Bd2iGx8e1HbcaYajsgwsaAp6%2B7Einr715i3Pq90PG4urLh7ImfNwwrqR5wCA2qORQji0rxkAL%2FYhM72ObKy1b6aH1JrFDPZfMnbeQfgL2Srz52tNN8GNgh0rWM7Ns5iaAchwWdtgHFi1T2zWxb%2BlImdKCRqm6bz3ZmowMVznuNTKykv%2BUDa4F9ZBv9S6sPJ4GhVl2kGWQly1DlJv8MTvZIZMPG0X4YzYAW6RlBr6hRcgkViRHMqKIPMKCvd5JNvP34GgszDwi4C%2BBjqkAZ%2BpG1dGKeJCAla%2FLueyClCb4AARIyzoXOVWucIW41PdDgwrvRfOnbOw8AqWr6hVfb%2Bb5gCuC12ZQTKpF4tJa%2F3dRynd3NqV4zWr6Cm0mX4TqzJsS2ZbENfXCcrYrREqtXHpzRLFfMMJ68exByARXYnuUUp8YYpkOI9fMpPO%2F2D5sWdDeREAfammYZGuDw8gseYZxSBD%2BoQ2aHBzksphxQ1eZ7rq&X-Amz-Signature=ac3e94449b6600c8bcd838507b46da8c58fc452deb8436c482c163ecf533320a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM5P3HWM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDjxrdRQ2ev2aGpazHCJskgZDlDMylzgv%2FeJ5NwlC420QIhAL%2BgLZLfInJYnn85QR8hGSIkHu6GJU7MvrXaDK5VXu%2BrKv8DCG8QABoMNjM3NDIzMTgzODA1Igzq6i4fYfEWdvxnllIq3ANFdK9z9jLrAJAomA5%2FaRJ99%2FQfSmipRDncqb9TNHfOs773itdIwQJ5OjEx9ZvRQCvncFAsQHPPUwrX5v0R6a2QB0EvYkq%2Fjb7nzxhdwDpjUgj3z6bOOy0EsQJf4nM7AwvHHEr%2BBjH15IbXwgJEM77tedu8Bd4NcjfMhTpAneRO%2F0h6nYTGiHEvw%2BsRTmjFmU9orbIgDO6qbHv4YvQsip67Guj6c3XP98Wn0Wg1jg8z4H8rUwbCSdPuN3Qk4e74vha3UFa4mqQTo7k%2B4fCqxf203Ngt6rT2lJuP3KRXyBXy8YPsyqRE6%2F%2BCdum9HavAqq6QLbHti8Ia33NPB%2B9zM2DN2NWdQo9zsFqgNEB6EzvanNG0kgsl32HFh5%2BxFYRNPWY9CWZnM62Dn3a7te%2FTWpVbZvLfYpjdDb3zuky2zgIYhciUEEtEZHSuZ1o%2B%2FQxzmaFDTOfU6iIJ1fehFxS9eL01BoMz5vVaoGY6HyPxG7LlY4LkFX11J8sUplHOqudBCHLW4C%2F3Fy%2BYE6RONf14Un7gGc%2BiyFqMXVBd2SWGoGUjwJ69UamU7YTbw0MsJAPdnHnxi1vkQzWauskctGhjRpTOhSLaabWWQUwx1%2FOz9MvCLk%2Fv0awBCG4Oo3r4VzCvi4C%2BBjqkAbNhuqsrveP7fn%2FIJsIEwJXLX4D1oh9y8uJlz%2F0ju3iPWm0HdfG7ysejWWnDp9N6Q%2BrZOP1A%2B3PqvvDcz9yKhjHI0xvWX5XpEwDrHBmPno9U9DekcjpRS9T3YtPjOfDLeGaG3ao%2BN9qw75jOTUuJwsxJag562O3UcP2MLc1a5TD9V0Vb506qhdD2J2VUzbtJ%2BRbCwm%2B%2BMgphquR6ue%2B0t4BrcTmg&X-Amz-Signature=d808f2c205536909a80a899df43d92b73bae3c95399b6ecc72fc2d40e72e746c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
