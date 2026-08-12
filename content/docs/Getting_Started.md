---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBJZXMB%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpI%2BWiYDKo74kY%2FAAFugEidzl4%2BioyiLumZYwW3qyKBAiEA36N2uJua2K5EkthvGW%2Bd8fZat59SFvO5QDIM%2Fnzp4l4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEa0%2BmD5hTJQVcngCrcAw6bjQIHNVcHvWqHeCFxwrjnKe%2BahHc1QGRLGJ%2Fg%2FF%2FCHgNxXJo6zQByo0kjQQrGjnHHawdhiRvoKqqu657u84V5rnHLWOvglCBtqSRi8H3kuG1W22ETWptVG25VqHEUiWUk9QxIJDgsicX6nG2L41gqsfUZgq9yudeTFBJ0%2BXY5va48JIFVwz3p56aloh8hNd5qGyWsMU1t9W18NoWnCcRewsqjDoPEkyIk9Tq3%2B4UFEPCPZUc%2FBnuVOiPYtEhvXTo%2FSmBd3Q3c9z%2FC7BVOXrs0g0PI52MCDHhEWJ6tQKvywg9C%2BKIgCCNjH9Tlwic%2BCM5AXhR1sePHWsudK56YP3PepAbfq%2FdQerprMNND57obT4A1XXqDDiKz%2B53rUzURHUGP4hNSAkHkmOyvIX%2B1WsVQliwAtzdnto2ashHLscZxvT77qySsyRpCFdGMe7WzkXkLXDawG0mKy0uRzpEldzvx9Np3B%2F2ym5CTPFx18VeorcxPLHpJEKgncVJ2JIM0dQlhRqHgwkAbw0ZVOEyxJGVkHeup894hA3E5tI%2FjZAsCfw3xznRajZL1FS00GD3%2FWP45j6AAgqtOYb9nAju3cCVoYe1aI6JuU%2B8FF8lBU%2BBD%2F2lndFAIOKh8koQ2MKfo7tMGOqUBIi7SG1kYwWyVSP0tYjTMZmxZYEWqF7pIPxrIMCjyUpNte3ZsOcI4G1ImgzHEis65DWUIEDNzIjspkFAQy7%2FJAXdLSYZKFxZbCNTHkxzQ%2BRxjYnmG5BGxLsUch4Nvte1Tyhj0F8AiR5%2BMf%2BPvOaQ5ziJ1r6mH9a4HnR4eEuYG1unZNDtUBeDGJ8YUEIYPU8ddUZ4w9zr6ZRHFc2zJ92P7DMWm%2F5ry&X-Amz-Signature=8bfaf93cc7dda21be83a2104659b9ea419227c6964a729ae318419446f7fc3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBJZXMB%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpI%2BWiYDKo74kY%2FAAFugEidzl4%2BioyiLumZYwW3qyKBAiEA36N2uJua2K5EkthvGW%2Bd8fZat59SFvO5QDIM%2Fnzp4l4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEa0%2BmD5hTJQVcngCrcAw6bjQIHNVcHvWqHeCFxwrjnKe%2BahHc1QGRLGJ%2Fg%2FF%2FCHgNxXJo6zQByo0kjQQrGjnHHawdhiRvoKqqu657u84V5rnHLWOvglCBtqSRi8H3kuG1W22ETWptVG25VqHEUiWUk9QxIJDgsicX6nG2L41gqsfUZgq9yudeTFBJ0%2BXY5va48JIFVwz3p56aloh8hNd5qGyWsMU1t9W18NoWnCcRewsqjDoPEkyIk9Tq3%2B4UFEPCPZUc%2FBnuVOiPYtEhvXTo%2FSmBd3Q3c9z%2FC7BVOXrs0g0PI52MCDHhEWJ6tQKvywg9C%2BKIgCCNjH9Tlwic%2BCM5AXhR1sePHWsudK56YP3PepAbfq%2FdQerprMNND57obT4A1XXqDDiKz%2B53rUzURHUGP4hNSAkHkmOyvIX%2B1WsVQliwAtzdnto2ashHLscZxvT77qySsyRpCFdGMe7WzkXkLXDawG0mKy0uRzpEldzvx9Np3B%2F2ym5CTPFx18VeorcxPLHpJEKgncVJ2JIM0dQlhRqHgwkAbw0ZVOEyxJGVkHeup894hA3E5tI%2FjZAsCfw3xznRajZL1FS00GD3%2FWP45j6AAgqtOYb9nAju3cCVoYe1aI6JuU%2B8FF8lBU%2BBD%2F2lndFAIOKh8koQ2MKfo7tMGOqUBIi7SG1kYwWyVSP0tYjTMZmxZYEWqF7pIPxrIMCjyUpNte3ZsOcI4G1ImgzHEis65DWUIEDNzIjspkFAQy7%2FJAXdLSYZKFxZbCNTHkxzQ%2BRxjYnmG5BGxLsUch4Nvte1Tyhj0F8AiR5%2BMf%2BPvOaQ5ziJ1r6mH9a4HnR4eEuYG1unZNDtUBeDGJ8YUEIYPU8ddUZ4w9zr6ZRHFc2zJ92P7DMWm%2F5ry&X-Amz-Signature=eef88664563b456bf96f78e087b4428a1827328461b31588f484cecad282c08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBJZXMB%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpI%2BWiYDKo74kY%2FAAFugEidzl4%2BioyiLumZYwW3qyKBAiEA36N2uJua2K5EkthvGW%2Bd8fZat59SFvO5QDIM%2Fnzp4l4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEa0%2BmD5hTJQVcngCrcAw6bjQIHNVcHvWqHeCFxwrjnKe%2BahHc1QGRLGJ%2Fg%2FF%2FCHgNxXJo6zQByo0kjQQrGjnHHawdhiRvoKqqu657u84V5rnHLWOvglCBtqSRi8H3kuG1W22ETWptVG25VqHEUiWUk9QxIJDgsicX6nG2L41gqsfUZgq9yudeTFBJ0%2BXY5va48JIFVwz3p56aloh8hNd5qGyWsMU1t9W18NoWnCcRewsqjDoPEkyIk9Tq3%2B4UFEPCPZUc%2FBnuVOiPYtEhvXTo%2FSmBd3Q3c9z%2FC7BVOXrs0g0PI52MCDHhEWJ6tQKvywg9C%2BKIgCCNjH9Tlwic%2BCM5AXhR1sePHWsudK56YP3PepAbfq%2FdQerprMNND57obT4A1XXqDDiKz%2B53rUzURHUGP4hNSAkHkmOyvIX%2B1WsVQliwAtzdnto2ashHLscZxvT77qySsyRpCFdGMe7WzkXkLXDawG0mKy0uRzpEldzvx9Np3B%2F2ym5CTPFx18VeorcxPLHpJEKgncVJ2JIM0dQlhRqHgwkAbw0ZVOEyxJGVkHeup894hA3E5tI%2FjZAsCfw3xznRajZL1FS00GD3%2FWP45j6AAgqtOYb9nAju3cCVoYe1aI6JuU%2B8FF8lBU%2BBD%2F2lndFAIOKh8koQ2MKfo7tMGOqUBIi7SG1kYwWyVSP0tYjTMZmxZYEWqF7pIPxrIMCjyUpNte3ZsOcI4G1ImgzHEis65DWUIEDNzIjspkFAQy7%2FJAXdLSYZKFxZbCNTHkxzQ%2BRxjYnmG5BGxLsUch4Nvte1Tyhj0F8AiR5%2BMf%2BPvOaQ5ziJ1r6mH9a4HnR4eEuYG1unZNDtUBeDGJ8YUEIYPU8ddUZ4w9zr6ZRHFc2zJ92P7DMWm%2F5ry&X-Amz-Signature=5f920c84aae5f2e4e794e8c5a5341ad0363acc224b7f998fac0ac127f1bf5647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBN7L3J6%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH8LMorvHUWLde8qk%2B5yxTze%2BPKxf%2FFti6UL8IhEeuSAIhAPfqqUq6c6C%2BbLaRZT3UJqc1AGW9C5PnxN4dHthLPsicKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAJzqIrEHYI8LE1Gcq3APVwK3PBRDxybQ3S15mf%2Ff3FoCeXdXx1UmmGweHU5GzlpymtkbUvrTyIvytYIlkuuUijsZHLCCfOOuueQvR%2BTomVvrEJXoVXvBjLCgx3vB6YV7qFJcD%2BkVelIhI1OITzpeDEVeERH6QVd2qb0WMBtLmR7EmJzPE%2B96xblDcGilLTstKT6MuM4f3Dvaq9xcA14bVtgstGcmhr%2FdN%2FdP3QyQoahmx0N9U9fxgczfMw%2FufLIqWMXPY1T9bIhxX4fO1%2B4lwa%2BvThYFOaY2d3PjowWH9hD7NdsBOvVdeQzxX5F8hJBdrGeRVIKchMMT6CRTYOXNeC%2F0d7p8bwPcsoPXMAMdQCC9NUGPZiIRggY%2BOSOma8XeY65UCu2wAe7US9Hw3I6rgxctsDCyciDoZL2FwtJLqljTkYd6KnQbdH3tvPtPdQ98WvzvVIHp%2FSlRYwQQLgyKl6oZ1qiecQUQdiBA5qAOxHfZQyHzH%2FAyxX6pcsjnlbLw1IxW2uUs%2FzMAkTdAtfpFzlulvoXUM54K5HstDqtYRlr7CArpCn8CHDubpkQEskHVz2mflZsoWhKKdr8R4qbfEdM%2Bb%2FUxOvqFHoP5lwRk%2FFiYGiI%2FAW7sxO3gP25wP5xa%2BYyHeqRYATLYGpDDc5u7TBjqkAfUwcHIDvDTeyZ7TcaeCAhwKNwAGApzxege4hchDp7CbYWkCF3UZeVLXCHrmOo9MKIUHoC6r4DrreOPIhDudqT7OSoS9XNNel35ZP%2F3CRKR3volPacIAssqytgt2nbH%2FK7PbQoX3MCVpL30L5bXlw7hj%2BFtvGkqbiA6GFo3NbBCltxI9NPyofukhQUHWdAjYr5uIDW0SYt1k4VrSF2bbPji%2FG%2B2A&X-Amz-Signature=063a108b04b66192cd83b5ec9077b639bc232b5ae6510280274333a07f94811f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WX5SEW5%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYFKYg6mxQHu3CA9xQ6TylFdDZJEEknzA1Qdk0dvIFAAiEA2zjSD%2FYxJZBr72LWPDYnKMKMPHEAMsFA%2B9VYZIq2WPkqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BAtnF01eSxLMykPircAy73%2B6ZbG0jpgpnvL8hm2tYhbNv525wlvmpNWvlzfTfD2eA6iNUWOV0nvT5ehNZQn5M5tFYeXjKFeLs8Z%2FL%2F1OVjG7ueAI%2BqN1ibaJMsYp2QFfgoGm6ciYiM2zpFVQeq0OXShbjULiOE4dG%2BsfF2bguwITOS%2BO7W1pPPD5PSiE33Un54lb81pJ03GTUP84EsXdOaMpulUwpxVdEJ1fbytAMBXGP9Ndz64urej1QE2UM5bNA42HdY6ajARQElDRu66u8ekqDrcJnRhCdOuYP43IoET5V1hkt5h6BylIyxcWX9ViGOer%2F%2F%2FvHiMFkZh9j26OAWWei5hl22ouVejHd4S%2FDP%2Fy6VdIUXyKVNCVACRFNxeMp9sl6fmAX3KCZeP7WBO3%2BnxsFJnTQNcnh8YLgRdc%2FzknB2v2eo0Glwfa9WXJRGQbEnwRJoh%2BbvRasQxBbvbNRuWY5EIp3R5I1hlOpcMwZDRRecAywT8299Kak50B0eNK%2BwEnYAIhkT28l%2BOyD4UsM9sTYMpbQbNg41ifLWLjyfXOOv%2FKAyHj3gac%2Fiapn8Mhx019yFTH9mkIieyzcAUj5LXUl6gxPTfl2b7Ttk7L%2F%2BQRTOo5L30TOqlR9TRU4LkpR%2Fqmpl1GmmFSu7MMHo7tMGOqUBxDWOWWG8I6TdzzshCjeqSdowpnD0U68pz87JhHaWysgBQFlQc2nE5Rd5zxeMNKokwWd8WsK5YfVtTIkY7suIX5omlhk85UWiwu6m1Gv%2FEG%2BPH593luFrB%2F2ztF2yaPNVfb6r60Ay3eg7tvTZq4wnwi4AmPUBa8MP2lzh54AFhQSEvtTL3DOl3EjBGlQKXxAWQrNvclo3YBlwKoHytFsZ%2F4VHNlJc&X-Amz-Signature=dc1751d0ea49157200f6e91043a2c672a44b664741ac75b291d151486cd7981e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USBJZXMB%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpI%2BWiYDKo74kY%2FAAFugEidzl4%2BioyiLumZYwW3qyKBAiEA36N2uJua2K5EkthvGW%2Bd8fZat59SFvO5QDIM%2Fnzp4l4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEa0%2BmD5hTJQVcngCrcAw6bjQIHNVcHvWqHeCFxwrjnKe%2BahHc1QGRLGJ%2Fg%2FF%2FCHgNxXJo6zQByo0kjQQrGjnHHawdhiRvoKqqu657u84V5rnHLWOvglCBtqSRi8H3kuG1W22ETWptVG25VqHEUiWUk9QxIJDgsicX6nG2L41gqsfUZgq9yudeTFBJ0%2BXY5va48JIFVwz3p56aloh8hNd5qGyWsMU1t9W18NoWnCcRewsqjDoPEkyIk9Tq3%2B4UFEPCPZUc%2FBnuVOiPYtEhvXTo%2FSmBd3Q3c9z%2FC7BVOXrs0g0PI52MCDHhEWJ6tQKvywg9C%2BKIgCCNjH9Tlwic%2BCM5AXhR1sePHWsudK56YP3PepAbfq%2FdQerprMNND57obT4A1XXqDDiKz%2B53rUzURHUGP4hNSAkHkmOyvIX%2B1WsVQliwAtzdnto2ashHLscZxvT77qySsyRpCFdGMe7WzkXkLXDawG0mKy0uRzpEldzvx9Np3B%2F2ym5CTPFx18VeorcxPLHpJEKgncVJ2JIM0dQlhRqHgwkAbw0ZVOEyxJGVkHeup894hA3E5tI%2FjZAsCfw3xznRajZL1FS00GD3%2FWP45j6AAgqtOYb9nAju3cCVoYe1aI6JuU%2B8FF8lBU%2BBD%2F2lndFAIOKh8koQ2MKfo7tMGOqUBIi7SG1kYwWyVSP0tYjTMZmxZYEWqF7pIPxrIMCjyUpNte3ZsOcI4G1ImgzHEis65DWUIEDNzIjspkFAQy7%2FJAXdLSYZKFxZbCNTHkxzQ%2BRxjYnmG5BGxLsUch4Nvte1Tyhj0F8AiR5%2BMf%2BPvOaQ5ziJ1r6mH9a4HnR4eEuYG1unZNDtUBeDGJ8YUEIYPU8ddUZ4w9zr6ZRHFc2zJ92P7DMWm%2F5ry&X-Amz-Signature=a7a4c9b3d5db533df34a679228b7892389c50f934a4f8463fb7c7820e20df57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
