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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP6N2QGK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG%2FicaevQtN6wBPbesMX%2BmV6%2Bb1FxAsaBmZDkM3KTnAEAiEAp4z7ggJy7g3pUNKlndMgAYl4Frq%2FCY9fr4uiKveiz44q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDxa3mM23J73ug5DPircAy6z5W0%2F8%2BEbNWU0dw9w3duRMC7Qz8X4d1B804ExMnLfCgSgFp3IE%2FfiDZKHvo6Yj55YGBZ0qcLBayEebo0gqO1rjCYb6VdVpy5gfRx3rMgkyGKZ%2B4yiGi1PVaAqSgivjGvcGB2egDQUKYyU6%2Fx1ANVJ3Z5BdzqNZDEGRdXp2AhEOxSwdQS6%2FA1wP06Q9xNrDuysPixRfBfWwwW%2FcXQwWFtdw1rsIzGE1wJeWdfmipincxErhOvh7%2B%2BRLzQy5%2FpKe3t%2BJiZp3k8%2BQ35ZJzNZz7gQgm5zJbwm%2F9Hgz65v1mmmx4d2onMlCM%2BHtEsUdh7rQrmpCW%2FB%2BB09zSmcxSVK7byHPmAvRXwH9q0pANh15%2FHXLFq3zwrQ9KD84JbktIOR4wUDzjNJltwEnHnR%2BnfHmkaOdBakpi3GGz7%2Ffx2wb7C12J3kGteEvrz1ILYPu16E92vmxmpjodbJxFjIItPWzRfYK1XZgX22sb%2BSYmo9lO4UV9GUZtXj2BiklhJbO2eDk7mlKQikt4g0HGepyl%2BnGO7yXRNuOOvKhaTlXsT0l8NKDjHKCmGYA4yQWsghYwyHORiGuKjY8PEqLw8QQ95idsUsYdrIlom4t7QD%2B9nwz5j5%2FxkutcJFZch%2BEKgKMJehlMEGOqUBj4mTt7EYK9UHvspYkGhGv87yonIMXZDOIS4HI6BETDboORugSKDMHqlU2krqvvgJQiIZ5CMMKi98FgvuIplZSlarmLmpNaHvLw02DVSsp3oTATOE1M9BLK8Y39UOYvS3LxCFZ5O0eQ63MrSRkhfBBiQGzsu7KsvO1MmjLs3bDw%2Fo9kn4huvM8Pbv9n5TkfX%2BHvHAEuGqLhfF9woxcj1t2Yx1uU6z&X-Amz-Signature=86d646695fb03a71dcc63a92eb28ecf3c20cda275ed40526bb3cf711dbd0e0da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP6N2QGK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG%2FicaevQtN6wBPbesMX%2BmV6%2Bb1FxAsaBmZDkM3KTnAEAiEAp4z7ggJy7g3pUNKlndMgAYl4Frq%2FCY9fr4uiKveiz44q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDxa3mM23J73ug5DPircAy6z5W0%2F8%2BEbNWU0dw9w3duRMC7Qz8X4d1B804ExMnLfCgSgFp3IE%2FfiDZKHvo6Yj55YGBZ0qcLBayEebo0gqO1rjCYb6VdVpy5gfRx3rMgkyGKZ%2B4yiGi1PVaAqSgivjGvcGB2egDQUKYyU6%2Fx1ANVJ3Z5BdzqNZDEGRdXp2AhEOxSwdQS6%2FA1wP06Q9xNrDuysPixRfBfWwwW%2FcXQwWFtdw1rsIzGE1wJeWdfmipincxErhOvh7%2B%2BRLzQy5%2FpKe3t%2BJiZp3k8%2BQ35ZJzNZz7gQgm5zJbwm%2F9Hgz65v1mmmx4d2onMlCM%2BHtEsUdh7rQrmpCW%2FB%2BB09zSmcxSVK7byHPmAvRXwH9q0pANh15%2FHXLFq3zwrQ9KD84JbktIOR4wUDzjNJltwEnHnR%2BnfHmkaOdBakpi3GGz7%2Ffx2wb7C12J3kGteEvrz1ILYPu16E92vmxmpjodbJxFjIItPWzRfYK1XZgX22sb%2BSYmo9lO4UV9GUZtXj2BiklhJbO2eDk7mlKQikt4g0HGepyl%2BnGO7yXRNuOOvKhaTlXsT0l8NKDjHKCmGYA4yQWsghYwyHORiGuKjY8PEqLw8QQ95idsUsYdrIlom4t7QD%2B9nwz5j5%2FxkutcJFZch%2BEKgKMJehlMEGOqUBj4mTt7EYK9UHvspYkGhGv87yonIMXZDOIS4HI6BETDboORugSKDMHqlU2krqvvgJQiIZ5CMMKi98FgvuIplZSlarmLmpNaHvLw02DVSsp3oTATOE1M9BLK8Y39UOYvS3LxCFZ5O0eQ63MrSRkhfBBiQGzsu7KsvO1MmjLs3bDw%2Fo9kn4huvM8Pbv9n5TkfX%2BHvHAEuGqLhfF9woxcj1t2Yx1uU6z&X-Amz-Signature=2a800ab88731f1d5febed65521c0978b47e00779a55d69a2528f1f1682b31797&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP6N2QGK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG%2FicaevQtN6wBPbesMX%2BmV6%2Bb1FxAsaBmZDkM3KTnAEAiEAp4z7ggJy7g3pUNKlndMgAYl4Frq%2FCY9fr4uiKveiz44q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDxa3mM23J73ug5DPircAy6z5W0%2F8%2BEbNWU0dw9w3duRMC7Qz8X4d1B804ExMnLfCgSgFp3IE%2FfiDZKHvo6Yj55YGBZ0qcLBayEebo0gqO1rjCYb6VdVpy5gfRx3rMgkyGKZ%2B4yiGi1PVaAqSgivjGvcGB2egDQUKYyU6%2Fx1ANVJ3Z5BdzqNZDEGRdXp2AhEOxSwdQS6%2FA1wP06Q9xNrDuysPixRfBfWwwW%2FcXQwWFtdw1rsIzGE1wJeWdfmipincxErhOvh7%2B%2BRLzQy5%2FpKe3t%2BJiZp3k8%2BQ35ZJzNZz7gQgm5zJbwm%2F9Hgz65v1mmmx4d2onMlCM%2BHtEsUdh7rQrmpCW%2FB%2BB09zSmcxSVK7byHPmAvRXwH9q0pANh15%2FHXLFq3zwrQ9KD84JbktIOR4wUDzjNJltwEnHnR%2BnfHmkaOdBakpi3GGz7%2Ffx2wb7C12J3kGteEvrz1ILYPu16E92vmxmpjodbJxFjIItPWzRfYK1XZgX22sb%2BSYmo9lO4UV9GUZtXj2BiklhJbO2eDk7mlKQikt4g0HGepyl%2BnGO7yXRNuOOvKhaTlXsT0l8NKDjHKCmGYA4yQWsghYwyHORiGuKjY8PEqLw8QQ95idsUsYdrIlom4t7QD%2B9nwz5j5%2FxkutcJFZch%2BEKgKMJehlMEGOqUBj4mTt7EYK9UHvspYkGhGv87yonIMXZDOIS4HI6BETDboORugSKDMHqlU2krqvvgJQiIZ5CMMKi98FgvuIplZSlarmLmpNaHvLw02DVSsp3oTATOE1M9BLK8Y39UOYvS3LxCFZ5O0eQ63MrSRkhfBBiQGzsu7KsvO1MmjLs3bDw%2Fo9kn4huvM8Pbv9n5TkfX%2BHvHAEuGqLhfF9woxcj1t2Yx1uU6z&X-Amz-Signature=4e082ab7715a4162ab5d4dbbc35a459e4028876ec68f14cf76e7b1d6ee9ab090&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KIGS4ZM%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFfkKC3y0s4vuV%2BsWw7U%2BhWUqlsAtNT%2FWEgJlNDVYTmEAiEAleoG8bUUYRmkt4I6FHG1%2F7nWuoYxAorcZC8BCw7jYbcq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDBN4k2IhK5rMghIilyrcA80jQEvYftN7tnH6QBTdFLhvvTkU%2Fn08p5AsHwjB6PdiyyvHymsbpgRhzXYJjB3Zcwp5VGuR79ODYZr5ButThm5RfjlYJYBlwIdn8lkZSUmFOwPvjREomgiH1xt4oA3RyAoqM1qo%2F33nxg8GqU16FKzHoFyvvLmk6QZsCw0Rd%2FLkg97ZmlyXiUpgjXbqSDrDv53VAZYvnmRfz5A%2FBYF5sWfWFt5DjmFrwJZAhWJXGKfuS6njUeJ71dnxgp5%2FY4%2BbO%2Bu0euEguNJzePj8D%2FK8Tl0kgjPt9TaBFdZubMC7c3BT8HuhBHDGFrJX%2BU9XJ6C6NwVRRCwuFJPxQfyIm4cBKVW3zkV66oDwtgv4SsBpvdEhhIlsJx2kKR6nTto4ntdB4xa5GXf4hxT%2ByctVZO%2Fr1rO7iwLCypGMDr%2Bg2AxgAw4uBpH3YfCnT44fn0w%2Bov0pEYmRdGhMonKtejt6PvM1WpAwPYd6f%2BZSwZeqrYgN1ptBDi6OuoSjnYDrg3sFZcAKVQy7GHgegwZvEZmeOAeg0u5NDR6AfKFaIIGVrC29LDSdM3kWw6TPAmEA0ftYzW%2Bg8xBdbyvj8kMQUkIRf6fgSjsa6rhSPbhDuuVK3mqmmI%2BwQKQx9%2Fu7cMtq%2B3kuMMqhlMEGOqUBhza0aAcvhL3g8Aw1C0ETYMtasFqjRE59YES92OIViMSTzbcpUtdkQ1UpywfnMDEjaue%2BykH9auQaZHTlC0Xl4y2yzahGe4ihYDLmznDcMcro%2F4KoQGGVfrWVunrQFxJEdcat2w8i%2B49i6Z6uOQdDzl36pOpIqRhe4dy7Z34IrtfzRjQJb09uD0KcahLhSaU8pBK9Yiwi0vVxme8S2Tiu0qdIbi5h&X-Amz-Signature=b3e1a25d6519105cfc96fa6340f74aa1329dc25ffea862cb7045f36ed997480e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWPJFPVO%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCICdhbK5MSaQ22f5FNlfUBngEyjTqR0YXCVZfCzYYiLqaAiEA6%2Fq87LeuvwvxYHnUFSljCVPwwqg%2B9v0L0SzL3od0DLsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDL6otkczqo%2FBMFRyGSrcA9SHbJdsOpXTDpVH9FlenTp6BP%2FfwoBlSZLN%2F2utv9r%2BtdVaylqIanKBTT1WmS4EGw62CL6TFhQGSoWFKz%2B%2B96W0p7kjiN%2FXZhIa9%2Fq9XH5NkbcEQ5%2BMZLx98MCPxNpfzXVQufp8t29xnrCivEdgib1YLRilql4Ba1x6zhqWNpb4dwpPxVPb5zo%2Bnl2Jmui7%2FXPz567U7P%2FdBnepwpLyPdAs%2BbnpG3buHxvo7RM1LJ4EfxTBKNFN7Gj5lFE1GXZMDU%2FW%2FgbWC5NkJhigQx6v9bUHPzd4pJIwn34LpDkyG5aCq7epjc1r%2ByISaEqw6Yr8EKlXvqcSQA4wtWCKIwnFw0Qv4j9%2FTWfU4hrBDx5oRfACHxecFZxAeJuT6fp60VS9%2B0A8otL8vfcPyhuEsISz0SGlxWruU%2F2yTIwrVq4ynvH1%2BszLLvy3MuBYXOzeFu2l%2BwSgBRc%2Fdzg5PoduaFYZqknjsaO%2BFwuJ4ewS4dlHe1ognzrn%2B3rq4pqZB0LcrR2NETpHokgukJgtVqhOPjHsJ9fJ8uGLw%2BWJFpRRcs%2FTFisFyuxjA%2BOmMdS4S%2BfQzEPCr6TRMbpycveOwDca5yvqCTVK2IY6R762dgOov4UUhXkYzvj1T4MU912KRUZKMJmhlMEGOqUBPUkbmStx%2FpP3ycv4UZ2%2Fvor91FvvoWdU2ZydPf7FLnS6ZUE1WYrFBUNDvNpfzTzfsbIgbEWjLJtr4ve%2Fm8OQoD%2BXJGbFPT5nJxux0%2BOI%2B%2Bu91AaPT0kbdlHLUZdkDVoa1RtoKoP7pNFrIfk%2F%2FzIPEUP8LrtD95wTTgdTCe7yTtjULe%2BWEygHmiTMpsx%2B1lNFCsTofpZCLypUnM5E1pgJvTnumP8w&X-Amz-Signature=d83a4067a8204767bd429569374ae81d4387c419b729614c58fe2807d4a765dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP6N2QGK%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIG%2FicaevQtN6wBPbesMX%2BmV6%2Bb1FxAsaBmZDkM3KTnAEAiEAp4z7ggJy7g3pUNKlndMgAYl4Frq%2FCY9fr4uiKveiz44q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDxa3mM23J73ug5DPircAy6z5W0%2F8%2BEbNWU0dw9w3duRMC7Qz8X4d1B804ExMnLfCgSgFp3IE%2FfiDZKHvo6Yj55YGBZ0qcLBayEebo0gqO1rjCYb6VdVpy5gfRx3rMgkyGKZ%2B4yiGi1PVaAqSgivjGvcGB2egDQUKYyU6%2Fx1ANVJ3Z5BdzqNZDEGRdXp2AhEOxSwdQS6%2FA1wP06Q9xNrDuysPixRfBfWwwW%2FcXQwWFtdw1rsIzGE1wJeWdfmipincxErhOvh7%2B%2BRLzQy5%2FpKe3t%2BJiZp3k8%2BQ35ZJzNZz7gQgm5zJbwm%2F9Hgz65v1mmmx4d2onMlCM%2BHtEsUdh7rQrmpCW%2FB%2BB09zSmcxSVK7byHPmAvRXwH9q0pANh15%2FHXLFq3zwrQ9KD84JbktIOR4wUDzjNJltwEnHnR%2BnfHmkaOdBakpi3GGz7%2Ffx2wb7C12J3kGteEvrz1ILYPu16E92vmxmpjodbJxFjIItPWzRfYK1XZgX22sb%2BSYmo9lO4UV9GUZtXj2BiklhJbO2eDk7mlKQikt4g0HGepyl%2BnGO7yXRNuOOvKhaTlXsT0l8NKDjHKCmGYA4yQWsghYwyHORiGuKjY8PEqLw8QQ95idsUsYdrIlom4t7QD%2B9nwz5j5%2FxkutcJFZch%2BEKgKMJehlMEGOqUBj4mTt7EYK9UHvspYkGhGv87yonIMXZDOIS4HI6BETDboORugSKDMHqlU2krqvvgJQiIZ5CMMKi98FgvuIplZSlarmLmpNaHvLw02DVSsp3oTATOE1M9BLK8Y39UOYvS3LxCFZ5O0eQ63MrSRkhfBBiQGzsu7KsvO1MmjLs3bDw%2Fo9kn4huvM8Pbv9n5TkfX%2BHvHAEuGqLhfF9woxcj1t2Yx1uU6z&X-Amz-Signature=2dce22308ac908e2b5272b8964bd95db556defa9f6b476cb0387028dd4f31537&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
