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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236WB3OZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEuxL0SEt4mF8H8EnJEgTXRDKbfdHXh%2Bf5E2aXHQpRpAiAzcjlzxWtYFE50FCQY46AGxgNPamqAFfI5m1ij5T%2BKSSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZZGkwDx5FV3wUvfKtwDyVhH5aJZKmcpfmvyZTAjIpyaSfJFiExREIjqrrGD%2B3HK8GfrPKldRwMCksN18oFXsCqJHy%2BzX7ab%2By7syJ99oBWdUz2uWj%2F3MpLIUWs74KjPhkj7cfxMsCoeI3xk%2BhcvvelOM9iuh1sZonKoK6IOLzY1zc1E%2FWvtB6qyjM6djqbUa90CNo%2FnDtz%2F3Q5sVQvtrFxYYiC4c2mPN1YRaABxk5ZKnBWA2oA62PXD%2FHhEKOIJqkj61Vez37SNzx3gW3d0UQ4vNjybUyd9yxG4JUkxVy1RscXyiifHWeNkk1%2FEllzKr0%2BwP5m48qJCwCb9HpclYixSoUCqJCIUm6rsqDKSOXD7tBuL0WFhM%2Bj8NNRPAhjZATd%2BblHZKPts9xU2LlYdf6UNjqf6LGcp3scoMuINvECj3sVNxFfJAxOBu3oOHjwiQ%2Be530mI%2BQIjFdFEdHR1MZNuv6hJHYyazXYNxK2rZF8Qva5XnbzmRB7DI62%2BB0eCsy6K%2BabP9B1cKgxx%2BJN7VP4iApd0553bIZAq3f9Z5ZIzTewkTRXl3Qcy0tbfLiW5iCSzE6ejUt0NpIryNHkXQoiaK8I8rCe9k1ydIddOdJHwc7gm6wTZCLYo7xJDIqRwCGsoC%2Bpe0Zx6biAw3riwzwY6pgEPAvd%2Fp%2BHqyua2NZ1FgWAgcF8tw8ZFugXI3tlHRj8gve7BkTwGVsEGN0U3F4ip0X6tah0CSlLAHK7C4qiw7UkSyWR1UxOcY2yoHFHlw6RGVhmCcPF7FBtA0Bx9fQOwLpodKhvSr%2BrH0L1C%2BmCJ7%2F0LeO9Bbi4jD0z6QdHO9yxxdCNlGe%2BTza6KeGXqz%2BGi3jGWzW%2BzUcmNPXEWwciEWNeMO%2BNv1f43&X-Amz-Signature=47432e55cb0d6b7cd133ee345562790552236dad7745a17726ec875dd096987a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236WB3OZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEuxL0SEt4mF8H8EnJEgTXRDKbfdHXh%2Bf5E2aXHQpRpAiAzcjlzxWtYFE50FCQY46AGxgNPamqAFfI5m1ij5T%2BKSSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZZGkwDx5FV3wUvfKtwDyVhH5aJZKmcpfmvyZTAjIpyaSfJFiExREIjqrrGD%2B3HK8GfrPKldRwMCksN18oFXsCqJHy%2BzX7ab%2By7syJ99oBWdUz2uWj%2F3MpLIUWs74KjPhkj7cfxMsCoeI3xk%2BhcvvelOM9iuh1sZonKoK6IOLzY1zc1E%2FWvtB6qyjM6djqbUa90CNo%2FnDtz%2F3Q5sVQvtrFxYYiC4c2mPN1YRaABxk5ZKnBWA2oA62PXD%2FHhEKOIJqkj61Vez37SNzx3gW3d0UQ4vNjybUyd9yxG4JUkxVy1RscXyiifHWeNkk1%2FEllzKr0%2BwP5m48qJCwCb9HpclYixSoUCqJCIUm6rsqDKSOXD7tBuL0WFhM%2Bj8NNRPAhjZATd%2BblHZKPts9xU2LlYdf6UNjqf6LGcp3scoMuINvECj3sVNxFfJAxOBu3oOHjwiQ%2Be530mI%2BQIjFdFEdHR1MZNuv6hJHYyazXYNxK2rZF8Qva5XnbzmRB7DI62%2BB0eCsy6K%2BabP9B1cKgxx%2BJN7VP4iApd0553bIZAq3f9Z5ZIzTewkTRXl3Qcy0tbfLiW5iCSzE6ejUt0NpIryNHkXQoiaK8I8rCe9k1ydIddOdJHwc7gm6wTZCLYo7xJDIqRwCGsoC%2Bpe0Zx6biAw3riwzwY6pgEPAvd%2Fp%2BHqyua2NZ1FgWAgcF8tw8ZFugXI3tlHRj8gve7BkTwGVsEGN0U3F4ip0X6tah0CSlLAHK7C4qiw7UkSyWR1UxOcY2yoHFHlw6RGVhmCcPF7FBtA0Bx9fQOwLpodKhvSr%2BrH0L1C%2BmCJ7%2F0LeO9Bbi4jD0z6QdHO9yxxdCNlGe%2BTza6KeGXqz%2BGi3jGWzW%2BzUcmNPXEWwciEWNeMO%2BNv1f43&X-Amz-Signature=f905db3d4e79ca1c4acc743aa8402707ebddb2eee34f05e7fae07d65c8ef77e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236WB3OZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEuxL0SEt4mF8H8EnJEgTXRDKbfdHXh%2Bf5E2aXHQpRpAiAzcjlzxWtYFE50FCQY46AGxgNPamqAFfI5m1ij5T%2BKSSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZZGkwDx5FV3wUvfKtwDyVhH5aJZKmcpfmvyZTAjIpyaSfJFiExREIjqrrGD%2B3HK8GfrPKldRwMCksN18oFXsCqJHy%2BzX7ab%2By7syJ99oBWdUz2uWj%2F3MpLIUWs74KjPhkj7cfxMsCoeI3xk%2BhcvvelOM9iuh1sZonKoK6IOLzY1zc1E%2FWvtB6qyjM6djqbUa90CNo%2FnDtz%2F3Q5sVQvtrFxYYiC4c2mPN1YRaABxk5ZKnBWA2oA62PXD%2FHhEKOIJqkj61Vez37SNzx3gW3d0UQ4vNjybUyd9yxG4JUkxVy1RscXyiifHWeNkk1%2FEllzKr0%2BwP5m48qJCwCb9HpclYixSoUCqJCIUm6rsqDKSOXD7tBuL0WFhM%2Bj8NNRPAhjZATd%2BblHZKPts9xU2LlYdf6UNjqf6LGcp3scoMuINvECj3sVNxFfJAxOBu3oOHjwiQ%2Be530mI%2BQIjFdFEdHR1MZNuv6hJHYyazXYNxK2rZF8Qva5XnbzmRB7DI62%2BB0eCsy6K%2BabP9B1cKgxx%2BJN7VP4iApd0553bIZAq3f9Z5ZIzTewkTRXl3Qcy0tbfLiW5iCSzE6ejUt0NpIryNHkXQoiaK8I8rCe9k1ydIddOdJHwc7gm6wTZCLYo7xJDIqRwCGsoC%2Bpe0Zx6biAw3riwzwY6pgEPAvd%2Fp%2BHqyua2NZ1FgWAgcF8tw8ZFugXI3tlHRj8gve7BkTwGVsEGN0U3F4ip0X6tah0CSlLAHK7C4qiw7UkSyWR1UxOcY2yoHFHlw6RGVhmCcPF7FBtA0Bx9fQOwLpodKhvSr%2BrH0L1C%2BmCJ7%2F0LeO9Bbi4jD0z6QdHO9yxxdCNlGe%2BTza6KeGXqz%2BGi3jGWzW%2BzUcmNPXEWwciEWNeMO%2BNv1f43&X-Amz-Signature=dca4ce6288568ed60d29e48e7cc306b389cf4d538f0b4eb799cb474795e1cac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5HIJ5C%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9fD4Ey3GTSdMqZscIuGpYgRAqE3CkxkrZYxypNlIzgIgffD6vnBnLSErZr1cwdGDJjmKC8SS64jKVjfinNmxMuIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDzRpnwhWrGsdMeE1CrcA3TB9ghcpuncD4FgQ2JVqhWTXoppgtfb43vjJ4ZyIg%2BuGE1BusiLgEnT0TmKVZoc2bWdnDLWSs7Ag5P18rZoggI2WyJSIfNqe3JQqSkzXUmn%2BlpEq7EDuiidusYXTebjmSqFYACaN%2BlRkLbkTDEcIucOjjFGCypvban5ffpH6tJ36qBvQovlqNpfo72f%2BHJCQOWY%2FfrGHifywbfwi2DPVFT%2FfuYCHnw0oe1ne4i35X2qgG2kAcGbPv3hX2EUmGzp37xwYysFB7hQMbIEEYBOUOYowVeT5AgKLR7A0ArE9iUTHdS9J3JDSfx0uGOlW06oGfTt%2B0WgwW9Prb9ye%2BxNcp4Bzzfzj8a5zmgA2Cfou5S8aAQtAzwgDmIZT5BWqv9XJ8Lv1iZqlIWktd4rmbBx7D3dXZaiZ0Q0Lqvt8PZEv3R8L%2BgebxqoW45Bfe3VgQy7uKrEl3PK%2B%2BoGeJ9Xv0Zu7QlTp1a0xgP0BGLfiLnMl63HFdZfbXnSwss2qr6hnsittIYj%2FmAEzLlukg9kC0SFsaJNtBF2AbTvCL17WWdMiaEhU4v%2Bg43DhcMf%2Bcq7r8AywxwA9s2QH0vJHNUogE4HVyo2gBh9ugYy5aHVNfNFCDKT0XqiPuyfgnp653%2FTMPe4sM8GOqUBVHgOsA0TLDDlyK5WL0VPFCjN2oz0d8cnArmuUFCsrFiVmEk5u1pLExPFCKv37OstzGrIUL7eAs5IW0ALSPmy5NpDMfoSilW0G0YwScpSWqNVGpmt6FqIOf1kYjHfLM%2BlNloLb1HDlljWTRvHIWADf5usa%2BilRtlYf77Sxq8RQ8XZb0UmbbkGJAol4dY5tp7qPSXDsTSqHIxkU2rWCpoA8GbL%2Bx%2BV&X-Amz-Signature=bfee54f9b1b72dc5d7bdedd2ab24eb726776fd1c2bb0dd73fd462214403a7889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IQUMQIM%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgKsHtNe8V%2F4PnIWdL43TYpk%2B3WtqspZI8qN7%2FT8o%2FrAIhAIZT3y9Gx9GzkNKPyQppOWBCa8hLNJPl28Aslxjh7pbVKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVwGqZ6z5WLh8IjGAq3APeekwRICwq0xk5ER8Lg6EcccK%2BY1ceF5UiWtfqjFWb37RlxGqk4Ld99FcjgCGe%2BZKt22y0PUZEMniN5ss93WozV5bSk8vOqvTbtUtMe2rsDHdoe4FmS8eilgDV0gKrBgIPAQMCEIqJ6uwQe%2FWS8kRxJZbxwjaC3X2K650uSAGgRVY4ZYt27TN2P%2BdE9Tg4kvthUy6tT98l3w1Yz2ENlUcxY1ArnOkNRlEymZ5WbHJMJOLHvkkDFUvvVZDjXp7q3tNKW7mkOs%2FxA0o0QhciQOvt%2BL2EI19iNHDbvNY4f4FqsMcOe2apel1xR%2B5zKQ55ZxTGdRsHMQac6wJq9vmvcDhDyPFdJrSAg5g5wNJdYNKM8E3Q2dRxOsMNhsFLSmrvVvhEITJwrHRmmajHCbYz1zkdaxiV8y5jXkRWi%2FEnqscGY845UdLjvf%2Fpw4GWCIrqq6NIsm9nXHNvSLAwmk3Z9%2BhvWfZNVzT0bLko3G4imQ26PUyEHjwy1uOjgXTBtLLjjD0uTM6clxnkkDnOr%2FMKzYSZ301tsmwi66tn8o6H19tMExD66jA3H0clzbbU%2BHE2jLr%2BkltLB9Xw0OyyZwrGVwZ%2B%2BbWQsMNSECCFZV7Ry1dRulak6%2Bp1PGTigWs4izC8ubDPBjqkAbcRdW8rvbVMwUovEBgijkvKIJE75q17nYusyQvh3r8K64tMJ2wx%2BE5WGqw5Ox2962cEkK5h7og2pZK1GcN3Fpjg8OOs6xwvHKJfWi5wHetYuefSrdz6bfyiCyqn0cP3E0uup6tm6IMyjHygynSvCOZBjbhsWToZ9cg2Oj43TQIa2krJ7yh7TohEBOTJUtrCPwxStWj010vM2qJbH0DH81dIIKxS&X-Amz-Signature=16e70387b1e63e72113aeb9078353ace4511db825875141a554b405661969804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236WB3OZ%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEuxL0SEt4mF8H8EnJEgTXRDKbfdHXh%2Bf5E2aXHQpRpAiAzcjlzxWtYFE50FCQY46AGxgNPamqAFfI5m1ij5T%2BKSSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZZZGkwDx5FV3wUvfKtwDyVhH5aJZKmcpfmvyZTAjIpyaSfJFiExREIjqrrGD%2B3HK8GfrPKldRwMCksN18oFXsCqJHy%2BzX7ab%2By7syJ99oBWdUz2uWj%2F3MpLIUWs74KjPhkj7cfxMsCoeI3xk%2BhcvvelOM9iuh1sZonKoK6IOLzY1zc1E%2FWvtB6qyjM6djqbUa90CNo%2FnDtz%2F3Q5sVQvtrFxYYiC4c2mPN1YRaABxk5ZKnBWA2oA62PXD%2FHhEKOIJqkj61Vez37SNzx3gW3d0UQ4vNjybUyd9yxG4JUkxVy1RscXyiifHWeNkk1%2FEllzKr0%2BwP5m48qJCwCb9HpclYixSoUCqJCIUm6rsqDKSOXD7tBuL0WFhM%2Bj8NNRPAhjZATd%2BblHZKPts9xU2LlYdf6UNjqf6LGcp3scoMuINvECj3sVNxFfJAxOBu3oOHjwiQ%2Be530mI%2BQIjFdFEdHR1MZNuv6hJHYyazXYNxK2rZF8Qva5XnbzmRB7DI62%2BB0eCsy6K%2BabP9B1cKgxx%2BJN7VP4iApd0553bIZAq3f9Z5ZIzTewkTRXl3Qcy0tbfLiW5iCSzE6ejUt0NpIryNHkXQoiaK8I8rCe9k1ydIddOdJHwc7gm6wTZCLYo7xJDIqRwCGsoC%2Bpe0Zx6biAw3riwzwY6pgEPAvd%2Fp%2BHqyua2NZ1FgWAgcF8tw8ZFugXI3tlHRj8gve7BkTwGVsEGN0U3F4ip0X6tah0CSlLAHK7C4qiw7UkSyWR1UxOcY2yoHFHlw6RGVhmCcPF7FBtA0Bx9fQOwLpodKhvSr%2BrH0L1C%2BmCJ7%2F0LeO9Bbi4jD0z6QdHO9yxxdCNlGe%2BTza6KeGXqz%2BGi3jGWzW%2BzUcmNPXEWwciEWNeMO%2BNv1f43&X-Amz-Signature=63a6114ac450ee924ba15d81db405ad4ed76e0a7883d9806b2d491dbbd0177b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
