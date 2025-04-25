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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47RFTZC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmdZ6UMkwbN6w4Kp9VA02iXvcWDxu7GSeh%2F1N6FN%2BE4AiEArVbnDpL4a%2BcE6rzAgXFG2BYzFDvAbuOYEqJJiG%2B0m8Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHnmHPK6J736kS%2B%2BIircAyOPvsttRUOFUyL76EV2zOzMB3rh8%2FvbCiKbsBmhYN09KFuxLetPfWUzgvt61JjecO9ieZ8qRfyGna9wJku1uQhXd3LgTo%2FSMzokd%2FMGgizx32jdcGe2TAhR7tC9iM1Uy92t%2BLaGfAtJ6Nj65kRB6p%2F5UkS0X4HeJuhHjws%2B4k11i1zqMAjhFLZvdmIirg%2FfEMs5YvTw%2Bgs5E6xqShcnv8zf9ad3y7ih769SX%2Brgqq3UICV0geBHkhy6hWr7GrU3qDOPEpwvEZxHWHnekxjXJr3D26%2Fjq748OXM4mGl0QiCCa4UF9nq7qCJz8nOPXOJ8jNgNSWAeCa2Nw4jUEk%2FPN4z4YZnwGGD9kDt%2FaVBZVQySq6TDTjYcN4nCNmHSZTyZDKAlPnqln%2FnZpNG6aKho186buF%2BhXagJAGFVmHf%2FH0pY87Jgbaf%2BLBTAQ61%2BmCs4B3GXr4IeWppOdu%2Fe3%2BUwcrGHCAhlqsT0OgFzy65piqVt9Tnods11A%2BqUiACzWXxAdkAgEcS6cyCSF9Fn%2BrZ1jB3vHh9QCZ65a7Lbc%2F59wO8UX7inDsF84yeKmKL5oJCULhecnhOA4ijh8zQNuqcm6mz3U%2FniszRA8G2gBmy8psaFSLFG05VmwO9p2qXpMIzIrcAGOqUBuyG33ftggQqzIs8J3VJ9ShGdgyskaNCcY4frbxIEV7hKOZlosr%2BC5KbzMSeamBvURhx%2Bqku70Xb%2BtpouhZFGw2Y4tOIK6%2BXjfq5S%2BanlhnAdo5Uh3v2n1BB6TQUQIEGbhIEeFJt5h6zaaXclM%2FdPe4U%2Fbj0CgHrG3PUoTTnoaju9%2FHHmD4CRQG7Wv5b65MqzhyK7w5f7ZahQ6%2FkZ3CSOQbDBQDhP&X-Amz-Signature=d5763ca0ebc91dee3c4291f097a4ed5f645add843b9fdebd4ae2cefb5c67892f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47RFTZC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmdZ6UMkwbN6w4Kp9VA02iXvcWDxu7GSeh%2F1N6FN%2BE4AiEArVbnDpL4a%2BcE6rzAgXFG2BYzFDvAbuOYEqJJiG%2B0m8Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHnmHPK6J736kS%2B%2BIircAyOPvsttRUOFUyL76EV2zOzMB3rh8%2FvbCiKbsBmhYN09KFuxLetPfWUzgvt61JjecO9ieZ8qRfyGna9wJku1uQhXd3LgTo%2FSMzokd%2FMGgizx32jdcGe2TAhR7tC9iM1Uy92t%2BLaGfAtJ6Nj65kRB6p%2F5UkS0X4HeJuhHjws%2B4k11i1zqMAjhFLZvdmIirg%2FfEMs5YvTw%2Bgs5E6xqShcnv8zf9ad3y7ih769SX%2Brgqq3UICV0geBHkhy6hWr7GrU3qDOPEpwvEZxHWHnekxjXJr3D26%2Fjq748OXM4mGl0QiCCa4UF9nq7qCJz8nOPXOJ8jNgNSWAeCa2Nw4jUEk%2FPN4z4YZnwGGD9kDt%2FaVBZVQySq6TDTjYcN4nCNmHSZTyZDKAlPnqln%2FnZpNG6aKho186buF%2BhXagJAGFVmHf%2FH0pY87Jgbaf%2BLBTAQ61%2BmCs4B3GXr4IeWppOdu%2Fe3%2BUwcrGHCAhlqsT0OgFzy65piqVt9Tnods11A%2BqUiACzWXxAdkAgEcS6cyCSF9Fn%2BrZ1jB3vHh9QCZ65a7Lbc%2F59wO8UX7inDsF84yeKmKL5oJCULhecnhOA4ijh8zQNuqcm6mz3U%2FniszRA8G2gBmy8psaFSLFG05VmwO9p2qXpMIzIrcAGOqUBuyG33ftggQqzIs8J3VJ9ShGdgyskaNCcY4frbxIEV7hKOZlosr%2BC5KbzMSeamBvURhx%2Bqku70Xb%2BtpouhZFGw2Y4tOIK6%2BXjfq5S%2BanlhnAdo5Uh3v2n1BB6TQUQIEGbhIEeFJt5h6zaaXclM%2FdPe4U%2Fbj0CgHrG3PUoTTnoaju9%2FHHmD4CRQG7Wv5b65MqzhyK7w5f7ZahQ6%2FkZ3CSOQbDBQDhP&X-Amz-Signature=caee0c05790604871c56ae6d7e87f265e50b88fa747d2d700455ead408c5711f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V4LOAQD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYZQkCSfJZg78je87MjJ5PjqpEFkWe%2FqtiOarxhPDiXAiEA9TDLoLT6pPlZAMb6OH5t8qTitTgs5bAiUfMu%2Br30TlAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDIDDQ7ELBNPjzn4VCrcA0L6NFv6eAtfQciQeEc30RYYhkw39bp18nvJSWarVXNaaV8KT6R%2FoP2qTM2fkk6YNQkJifOusyLer%2B6T6qOh4Agsqeb%2FUweYXxDeThl86dGXJq7TYys4y7iyfzE0V0JsSwZaovv0AvIxeMve7N2wjQ0bMo7H%2BtjvChBA6CzV07mo7MiNU5Z7FXA68LmNADI6rnyIyov8n6KBhFYKsDniRYFSrh1wENb9BB65uYmkrvILnFxSzlEAINx2SSM6PTqOI8kGNd7s5%2FwLfxK7wkeg7k8JUxY7VbG58ogsrmzgk6MwjpfVSwJi5gxUXUjhTnlei1%2B1ia7jcQslA%2FhmjiHm%2Bp09bmu68VcJKDnVNepUT%2BPoimFsm%2BtXwRAMEVnI%2BtmddhwL%2FkaO%2BbHg1J9SkiXckstU%2FSEJXgA5DcrBaz9BxDNuwF1cbT2PyI7PxCaYK2lCywuBePkK%2B5xSx2dLKECYGrxTHQvSzW6SSrmRrWWlo6rhIvLT4jBSGSkLFtQg5IuK%2BSvLjOyCQgb0KieqAr4SwoIHbqGfMNahKELKft4jJbFJTqp8Gn%2FBzlC8KeOylp1UFvEKNJK0K%2Bl8FKkCn7DjPkoKRkprNk5m4KXIsYdjOPlUHs0opz5G2%2Bj5yErTMKbIrcAGOqUBHUStOaZXXiRAh4f3%2F6Zby%2BjN5QR3lOT66b%2BXP5ZWxqMpzE9qkfH4zfD60U9ZczTAnZRp7v9JU88c2Ri2fvZjBchauONmrE4EtIAoKzm4SBkOK2aUz9jnrF1vQ5outUvHEjqtKsIrKqUe5BCnVdd9QMMeMMCgrLxHgtQDdLvFP47mIc0uJASQviMOj9WfnVu%2B%2FJqlWDP1bIeV8LadBMFZFIulIO2f&X-Amz-Signature=e5b64fbdf63d13cfbc114533fa86fc0499961772e4fbd8af5c74e86ec6df5fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPOHRJQA%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjINn%2FVEepSJ5WaTIkA3ku5rzczXjzGuaF4upqBywtNAiEAkkRgUkPF7KFXWC6AHZFScTSQdPCbmvRb9JPet%2F7EodAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMZj4JC144mR1lFdcircA8WXgBRkFj6eXaWz%2B11TYgmmINq9WcqDb61aCSB2PwRl6yeKrDx9vqn3vKk76yEM1kqnG%2BsiYOqTqkaA40lCjMc7YJQNKTVdC3d%2FUWoIWoVQxdZY52FDH2%2B%2BH3tz01SmidpaSL4LrjpfSUyMPDMirEbp%2FdoT%2BiF3OZwyzWh3%2FhYKqXet6K5vVq6MdkOx2L67B1zDrZ%2FueBgMCOHvsbCL4g6bZLp5mKZmVUKcKr%2BzDo9sePCEEHvHkucT%2BJh5qUTbfIR3N1ouyIoniAvOx69alTUPWZqhCW4bAknMOB%2F5ark3dyQ4sTUC8rUt72z4VSxpPSYa48Jh%2BtfQv9A1dMEYrZJbFJyQv47hPiW4lon7ixbEhlqE0nonYwlYgU3qoy99cmmxSsFhLItG7INPyqgbWGj%2FRBqG9HDj9mU3Xyw99fFfGf6rfaBMm69WSIQTPWestwhVFkBcwD0YF3q4du8xn2FWUsv237KX9J1xc3BWcKEUemj2kR%2B%2BuyUNYFMSxQy57JPGwiIKP8iknYlVZqFTNy%2BcjkjR0vWXM58h3pkSwR0wRwjfeUch2WWmEdIaX%2BniHUzWeGzyslAGVfNP0GM1aPNZ370fKxpQva9vFjUuBwAUfgohQnIpeYLV86uEMKnIrcAGOqUBTVoQjvvOB8KpKBQeng7sMaaf8Up9NVcJka8LNC71BTq%2F%2Fp3WyQ82BLqEzpWPViOkof%2BLQ9HYP9d0DjOjT7iVWfuElP%2FdrZ5OG5VNQfomKFOs1ri1gao6TGbmNoMZ5dO2so3yOCRHfX%2BsgPgIhj9mL%2BwvXofAwnC7W9w28glKUUYvY%2FRE8wGLRSBvWut3Iq%2Fa0s%2B8lnyXcUkSd4OpJCKi1YbQJKOH&X-Amz-Signature=db63f4af40bb6316b92b1e73fc6b804bb425034de7f8363b0a665ecb305a8989&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47RFTZC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmdZ6UMkwbN6w4Kp9VA02iXvcWDxu7GSeh%2F1N6FN%2BE4AiEArVbnDpL4a%2BcE6rzAgXFG2BYzFDvAbuOYEqJJiG%2B0m8Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHnmHPK6J736kS%2B%2BIircAyOPvsttRUOFUyL76EV2zOzMB3rh8%2FvbCiKbsBmhYN09KFuxLetPfWUzgvt61JjecO9ieZ8qRfyGna9wJku1uQhXd3LgTo%2FSMzokd%2FMGgizx32jdcGe2TAhR7tC9iM1Uy92t%2BLaGfAtJ6Nj65kRB6p%2F5UkS0X4HeJuhHjws%2B4k11i1zqMAjhFLZvdmIirg%2FfEMs5YvTw%2Bgs5E6xqShcnv8zf9ad3y7ih769SX%2Brgqq3UICV0geBHkhy6hWr7GrU3qDOPEpwvEZxHWHnekxjXJr3D26%2Fjq748OXM4mGl0QiCCa4UF9nq7qCJz8nOPXOJ8jNgNSWAeCa2Nw4jUEk%2FPN4z4YZnwGGD9kDt%2FaVBZVQySq6TDTjYcN4nCNmHSZTyZDKAlPnqln%2FnZpNG6aKho186buF%2BhXagJAGFVmHf%2FH0pY87Jgbaf%2BLBTAQ61%2BmCs4B3GXr4IeWppOdu%2Fe3%2BUwcrGHCAhlqsT0OgFzy65piqVt9Tnods11A%2BqUiACzWXxAdkAgEcS6cyCSF9Fn%2BrZ1jB3vHh9QCZ65a7Lbc%2F59wO8UX7inDsF84yeKmKL5oJCULhecnhOA4ijh8zQNuqcm6mz3U%2FniszRA8G2gBmy8psaFSLFG05VmwO9p2qXpMIzIrcAGOqUBuyG33ftggQqzIs8J3VJ9ShGdgyskaNCcY4frbxIEV7hKOZlosr%2BC5KbzMSeamBvURhx%2Bqku70Xb%2BtpouhZFGw2Y4tOIK6%2BXjfq5S%2BanlhnAdo5Uh3v2n1BB6TQUQIEGbhIEeFJt5h6zaaXclM%2FdPe4U%2Fbj0CgHrG3PUoTTnoaju9%2FHHmD4CRQG7Wv5b65MqzhyK7w5f7ZahQ6%2FkZ3CSOQbDBQDhP&X-Amz-Signature=eac53805e5edb9cf1611845d12fa7588f4f1da79f94cf9132b35aa6d9e79f1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
