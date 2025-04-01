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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S66BIG7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID%2Bcu0FP9ipGC5xRX7lgVd30y7Xok8ipFGb6IMmjRNJjAiEAnqs477CXBiu9%2F7HJ3x%2Bd7lRTgGbwZjq3l094uYlORmwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeSNa1KS%2FXN8DqRzCrcA%2FWi2sUMsCn2UsH%2FJNJ50dJvMQfVHFospIwCadlQoDfN9PJamemzAuHj4869qyQswTq9VcB%2Fdyyw5OMpBm5XDIb6l30ffOFXFkreBFzMdddC3YBzIqKWFmq%2BgW%2FAw91%2B5m8jHpqutg%2FwYR4vH22EpsnWx7AakyXs0qp3%2Fe3Pv54%2FU5CASX0GRzqNh9PUBwPGHFGclT%2Bb%2FgIwh58lWwlZWm2vshMbXjn%2BQNnmRNlG1hd%2FLRyWW%2Ft%2F1N14mtR6k7TC8DesHuGStsU2e%2B8a9VSBxu1KCixt10GZBQB63S4lEV92VbtXTk4urO5xkpTa5f6nMz5xaIhqUJKnTjD40fKSFwJFofATHW6PBVwi1bq6XwZ%2B5fWkQkHUJPVszIZpVkJ5bGrcsM%2BFhuwuytgaPc7yVxzoWZQg7sK770RHQBUxf3zNO2FwKo9ii393WXcp2w6ieyEsSUeiSTEaeCg3InsLCG67r%2B5HYQMx%2Fi%2BPYzoqpa%2BO1ecauTeuYk9%2Bd0bxgsbDRL8H6011EY2Na5r8SM9OvfFABWgDkFXf5MjnMU3koqPCJPFx0jkLX%2BcyVGt1pD%2F62KBpFG2Yh0%2BGCdmlvJqgJjzx6WGuEZjpYw%2Bo%2FY1eTkNX471mQ4J3eXnWpVt3MInXrL8GOqUBEckd4AICAqJcHM2mqK8pPC%2FiFiJrbkTFfJ74uBEBeQQj%2BQ3CPAZj0ruVExFoTGwxXRQkpZ%2BuVhp1zErxUxVSv%2FvZ52Ky3BXCCFnEUf9k8ZKAk1%2BBOo6Ic%2FaXTXN4gwyn9Yh8R5iYzP87yB%2FyP%2FHBT%2Fp4eOAlcZ5bkdLKLxw7%2FyNndzmHRUxhEqQrVJV6QPcX6DyewlpRuRroxDkjEJw1NoFUFtPV&X-Amz-Signature=6e390a18c3043de0f3644e015c78704b2ef62cd791fae77d35e1ba4c0e197483&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S66BIG7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID%2Bcu0FP9ipGC5xRX7lgVd30y7Xok8ipFGb6IMmjRNJjAiEAnqs477CXBiu9%2F7HJ3x%2Bd7lRTgGbwZjq3l094uYlORmwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeSNa1KS%2FXN8DqRzCrcA%2FWi2sUMsCn2UsH%2FJNJ50dJvMQfVHFospIwCadlQoDfN9PJamemzAuHj4869qyQswTq9VcB%2Fdyyw5OMpBm5XDIb6l30ffOFXFkreBFzMdddC3YBzIqKWFmq%2BgW%2FAw91%2B5m8jHpqutg%2FwYR4vH22EpsnWx7AakyXs0qp3%2Fe3Pv54%2FU5CASX0GRzqNh9PUBwPGHFGclT%2Bb%2FgIwh58lWwlZWm2vshMbXjn%2BQNnmRNlG1hd%2FLRyWW%2Ft%2F1N14mtR6k7TC8DesHuGStsU2e%2B8a9VSBxu1KCixt10GZBQB63S4lEV92VbtXTk4urO5xkpTa5f6nMz5xaIhqUJKnTjD40fKSFwJFofATHW6PBVwi1bq6XwZ%2B5fWkQkHUJPVszIZpVkJ5bGrcsM%2BFhuwuytgaPc7yVxzoWZQg7sK770RHQBUxf3zNO2FwKo9ii393WXcp2w6ieyEsSUeiSTEaeCg3InsLCG67r%2B5HYQMx%2Fi%2BPYzoqpa%2BO1ecauTeuYk9%2Bd0bxgsbDRL8H6011EY2Na5r8SM9OvfFABWgDkFXf5MjnMU3koqPCJPFx0jkLX%2BcyVGt1pD%2F62KBpFG2Yh0%2BGCdmlvJqgJjzx6WGuEZjpYw%2Bo%2FY1eTkNX471mQ4J3eXnWpVt3MInXrL8GOqUBEckd4AICAqJcHM2mqK8pPC%2FiFiJrbkTFfJ74uBEBeQQj%2BQ3CPAZj0ruVExFoTGwxXRQkpZ%2BuVhp1zErxUxVSv%2FvZ52Ky3BXCCFnEUf9k8ZKAk1%2BBOo6Ic%2FaXTXN4gwyn9Yh8R5iYzP87yB%2FyP%2FHBT%2Fp4eOAlcZ5bkdLKLxw7%2FyNndzmHRUxhEqQrVJV6QPcX6DyewlpRuRroxDkjEJw1NoFUFtPV&X-Amz-Signature=cabc1800d36f96b56a9eb418d37ffb003896f43c9cffff47f35b76e43716a38b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CL2KXS6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDRbh9fG%2FYR11OPuU8pfdwkW19QCPd4Ty%2BtgkVVp4UyIAIgcUQvk%2FKrz9cgfX0VuI16GXkOhWqff8F50HmkBWEKxKoqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGGtXIio98OOWFTGircAxiFn2ao9KrM13CZ21O1BScZ%2BjX0iKW2YuZd%2F8RoHywNAwWcNijamK8qNUpRojoNN5McB3Su5aOYEqQ9GquXrjMpOLo%2B11%2Bxi3u8ZpjjYQc26o3Zq8nCkVMG2JJk8YjChdKv7iHRfIhNNYkh2Bfh6Q4w0Wx5o2gGuHm7R5PBOD1tGeMLJ4n3bOOc8tNWPyyeRbDYzXZd%2F0l8XuGqKt79KGSSTGxjgI2UDm69HvxUlWy0HXz0QlKxVu3ebvsGCxm8dd%2FYhiNrlatjHZLugFoxq6Ppg4bJr7RwBjRpxw%2F1zI2ECcPs4xhrglQK2wcUtRUyYmQc8avzANVShnk0%2FD%2Fb8QpYv3QBT8ghV201chg1KR5f4PLEstJYYlXNWvWg2aDst%2FyB2XG%2FYZ8OnmM2W%2Fg1ijKkGrN%2BfhaxQS5ON3wZT2a%2BCg2%2Fy4N8RtcR3mYsqraAIhqXz%2BGGqOqY25gUIyr9svmjbEZqM76i%2BdNVEH6Og96zgta%2F6MIBeSUYukdUq7Az00Au3PIvPCkODJbZrKeBeXMQhbWGdz3B5ywtKAciOdL%2FBlmfODGOoHf8vkJucK0FUpexFyt8hwQo3I9M36n%2BHqz7x4ErVGO39OVQZZ7JwYwpyHWLMcDwUiwOHPIIMNDZrL8GOqUBnkManH4YBtTRc9gX0qaNf9M7OriPWe7zjonp6suszMUSoIIGmvWHeQphRxm13qc6b2VHblKWGIc7CTbMj1P9Wcg8yz94ml%2Ff4qozjNhHhQbUs0Rx1ikI8VkuKuY17sJUHhYMVj91nCZtoNx0gZphEgAiSS8U1j%2BdCDgy8d7P%2BvNhTK2XKueoCT%2BiQMV%2BOFaR%2F69NWVOE1wmtdy2lecQ9JCY8zcWx&X-Amz-Signature=20a87337784f8cfa69ca93d11ef3df946fa50376611557cb5c5fc269f24ce615&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPHU72VS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIE8EiPd5wSYZqXfbyEfmZXgsTiuGYvmcqHSaGLWlNsOdAiACsoDN0%2B4iZujQUJta0uXKZpiMCkdjtIjc1x62HVREOSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMltuBrMwBD4eGpk82KtwDyyGNwm6kT9iZPq7b4UkzuLzCwc8FY2ILHMgw5rqj052DVbY7eP2ZYDbVWABvt0B5y44T5uFqkAOeDkld0Dl4CiF%2FmhIoCqjBHL6BoPq5wMJJPqiScHBW5Dhh0oP9U%2BA9R9eemdx29O7Fx0whDvewKuVUO%2FFyj3qqpmk20rbfX4SVR4oBsGktfswlmBlVgTJSYn%2BMUF2RqcyXf9hLTltT1j0Vmk2BZOav4Zbsq0XU20WVPA0Ohs1kgYsNAD4ULxtVbmasAhUKvAmNLTLB2L81sg74rRR978y%2B0KQ6LRvzrxxJOMVf7vIqEUgyKGXsiixjCwGN0UNhRyqjuv%2FOfHaYS1L%2BBoEF%2FkFrItTy6Ne1iWmMhTQOrFa8ekBgJOe7MTGRt%2BRanuhBnhZz6Il2cKvhRNPNHOrsUwYW%2Fw6YfMFYjA3xb7Ftoli7LEGJG8L1On8gs6QFNh2fQdM%2FCWeJC1sHTyFDKRPJQyetjxSQqsk25J92Dlp3LV6KyIU2D8ypUb%2B9wKH06FisxNe5LCml%2FoJRN0u7ph5Z73S%2B%2B65YIc9E4LRUNrTCIsC9uxR4b%2F3fMXIt6hazjBhFdXB05jI0br0sQmZDv7x4ZUMGq6c0WwJG3jc2Yy5NhXf6ZKlfa%2FgwgdysvwY6pgEfuiMLVyNQPYvAzDZmmx4cJpEcUTurQqufCn6%2F0Vz0UxW7g%2BcEa8rPs16q%2BwWJWpqaEVQM438racE%2BZKEz%2BVxH4H3XNZEuvnUrTlo%2BCS2IY7wEukm7h41%2FXCe%2BQpvmk%2Bsi5oWe3MVROxvzE6UTkFYnqW3IuX0PKFmMqEOXeM8iDydwe2Tl6jZsHeeL0HdGM109jp%2FgIYqySR1qTvqG5rG9s%2FtXn5A%2F&X-Amz-Signature=134db023023489b277d35fcde89ad85b8701dc632ba226a03484d13e67173fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S66BIG7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCID%2Bcu0FP9ipGC5xRX7lgVd30y7Xok8ipFGb6IMmjRNJjAiEAnqs477CXBiu9%2F7HJ3x%2Bd7lRTgGbwZjq3l094uYlORmwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeSNa1KS%2FXN8DqRzCrcA%2FWi2sUMsCn2UsH%2FJNJ50dJvMQfVHFospIwCadlQoDfN9PJamemzAuHj4869qyQswTq9VcB%2Fdyyw5OMpBm5XDIb6l30ffOFXFkreBFzMdddC3YBzIqKWFmq%2BgW%2FAw91%2B5m8jHpqutg%2FwYR4vH22EpsnWx7AakyXs0qp3%2Fe3Pv54%2FU5CASX0GRzqNh9PUBwPGHFGclT%2Bb%2FgIwh58lWwlZWm2vshMbXjn%2BQNnmRNlG1hd%2FLRyWW%2Ft%2F1N14mtR6k7TC8DesHuGStsU2e%2B8a9VSBxu1KCixt10GZBQB63S4lEV92VbtXTk4urO5xkpTa5f6nMz5xaIhqUJKnTjD40fKSFwJFofATHW6PBVwi1bq6XwZ%2B5fWkQkHUJPVszIZpVkJ5bGrcsM%2BFhuwuytgaPc7yVxzoWZQg7sK770RHQBUxf3zNO2FwKo9ii393WXcp2w6ieyEsSUeiSTEaeCg3InsLCG67r%2B5HYQMx%2Fi%2BPYzoqpa%2BO1ecauTeuYk9%2Bd0bxgsbDRL8H6011EY2Na5r8SM9OvfFABWgDkFXf5MjnMU3koqPCJPFx0jkLX%2BcyVGt1pD%2F62KBpFG2Yh0%2BGCdmlvJqgJjzx6WGuEZjpYw%2Bo%2FY1eTkNX471mQ4J3eXnWpVt3MInXrL8GOqUBEckd4AICAqJcHM2mqK8pPC%2FiFiJrbkTFfJ74uBEBeQQj%2BQ3CPAZj0ruVExFoTGwxXRQkpZ%2BuVhp1zErxUxVSv%2FvZ52Ky3BXCCFnEUf9k8ZKAk1%2BBOo6Ic%2FaXTXN4gwyn9Yh8R5iYzP87yB%2FyP%2FHBT%2Fp4eOAlcZ5bkdLKLxw7%2FyNndzmHRUxhEqQrVJV6QPcX6DyewlpRuRroxDkjEJw1NoFUFtPV&X-Amz-Signature=74d95e0620e9b08105cb49bed1f3111c93c888af01ca42e4f8ba588b9ecd4466&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
