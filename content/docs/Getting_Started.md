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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O3UKZC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHyc64Qf3kFzsNhWCrZfSY49jF6zU13ZYje%2Fov98Yb%2B4AiEAlkfg5%2FCBs6gEerD3RuDdjf7X78E1vTCApC%2BCL0zFoNwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDYuw9jH1DJhHlv0SCrcAzViRDdAHsBm3dNv6Pih4Da9iqrMLw%2FnpNNTfMWTeH%2FBshwk%2ByNdST1mdLLKmnIzMKzLf9YUBlfoTE3BdmG1MEQCVf%2BOneYyiTQ5ooLQ5%2B3oEQHvFfDV2BmfzgsVelMNyCcyR05lYAt0QR9RvA94rgB9mo0hpWKPQkQmN6btaLYR6Tq8K8FK1V8LOCevpqz5ITs1SAYRNk3IhgiHplptRXXL0R%2FjUGVGB8gdHCEVLF3og1xzH%2BNUUaMXu%2BJrAI7ZKuG4AuaIgarROeD3xDSWC3U3y0Ltw80t%2FQqQcR9u5xS3S%2BUabMD7i2WyoQNJ0k6rEFoegLGyVb992ZsA1G6LtLlQcD%2B6zjSJFtM9B4txVWktwRd9CyeiLgbKNkoijTNlE4vftOE258JlxOSMBBSUv7FAe54nGNbsUh4jA6ZRSIVC7sou3QtuW9UNa32Lr03OVYyQIAlMuWy8IbB0VJk%2F1adFLtWzt9oxhZ9oETyCtHQH0Y66dMRmKzGn6MWwuEfLdqXEoWMXQlrUFThbSJNNE7Wz8ojp3i8dQHSnrk1%2FnMOwK4dtCPOp0CcH5pgDxPfEuXgUZmkEzAx1ahjHR%2FGC1N4k%2FSav8FYSlLFxaJenjG4yTguE50fiBLmb4caPMPnAk8QGOqUBMLn5PlY7TMBbZ2uQsfrRis93N2qUuox9tCwpJjueerLarL80v3MRGyXvqGKsFUP06RV2g8UsPluNtdKUq9FBnaMpXrKklMkFhq7Ycy0NMch8nl0HJCJCzScIxxt3ApcQi7ZzvChGUBkzz2E5LnMBW40jaTt4%2BxMckY2yiunUkaade%2BRV4fkebSy7sIAj4JSIv66me%2FF5qOUfTyZWuok4OkM2Ut4K&X-Amz-Signature=8f4f80dd82f65cc3b9a30ab271cb583ca93d2c6eab7fc5ac12d5ed90a2cdc584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O3UKZC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHyc64Qf3kFzsNhWCrZfSY49jF6zU13ZYje%2Fov98Yb%2B4AiEAlkfg5%2FCBs6gEerD3RuDdjf7X78E1vTCApC%2BCL0zFoNwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDYuw9jH1DJhHlv0SCrcAzViRDdAHsBm3dNv6Pih4Da9iqrMLw%2FnpNNTfMWTeH%2FBshwk%2ByNdST1mdLLKmnIzMKzLf9YUBlfoTE3BdmG1MEQCVf%2BOneYyiTQ5ooLQ5%2B3oEQHvFfDV2BmfzgsVelMNyCcyR05lYAt0QR9RvA94rgB9mo0hpWKPQkQmN6btaLYR6Tq8K8FK1V8LOCevpqz5ITs1SAYRNk3IhgiHplptRXXL0R%2FjUGVGB8gdHCEVLF3og1xzH%2BNUUaMXu%2BJrAI7ZKuG4AuaIgarROeD3xDSWC3U3y0Ltw80t%2FQqQcR9u5xS3S%2BUabMD7i2WyoQNJ0k6rEFoegLGyVb992ZsA1G6LtLlQcD%2B6zjSJFtM9B4txVWktwRd9CyeiLgbKNkoijTNlE4vftOE258JlxOSMBBSUv7FAe54nGNbsUh4jA6ZRSIVC7sou3QtuW9UNa32Lr03OVYyQIAlMuWy8IbB0VJk%2F1adFLtWzt9oxhZ9oETyCtHQH0Y66dMRmKzGn6MWwuEfLdqXEoWMXQlrUFThbSJNNE7Wz8ojp3i8dQHSnrk1%2FnMOwK4dtCPOp0CcH5pgDxPfEuXgUZmkEzAx1ahjHR%2FGC1N4k%2FSav8FYSlLFxaJenjG4yTguE50fiBLmb4caPMPnAk8QGOqUBMLn5PlY7TMBbZ2uQsfrRis93N2qUuox9tCwpJjueerLarL80v3MRGyXvqGKsFUP06RV2g8UsPluNtdKUq9FBnaMpXrKklMkFhq7Ycy0NMch8nl0HJCJCzScIxxt3ApcQi7ZzvChGUBkzz2E5LnMBW40jaTt4%2BxMckY2yiunUkaade%2BRV4fkebSy7sIAj4JSIv66me%2FF5qOUfTyZWuok4OkM2Ut4K&X-Amz-Signature=cdc127cbd7c45d78e243ca14117962eca7eccf3abb26e256083e2e63a0afc043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O3UKZC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHyc64Qf3kFzsNhWCrZfSY49jF6zU13ZYje%2Fov98Yb%2B4AiEAlkfg5%2FCBs6gEerD3RuDdjf7X78E1vTCApC%2BCL0zFoNwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDYuw9jH1DJhHlv0SCrcAzViRDdAHsBm3dNv6Pih4Da9iqrMLw%2FnpNNTfMWTeH%2FBshwk%2ByNdST1mdLLKmnIzMKzLf9YUBlfoTE3BdmG1MEQCVf%2BOneYyiTQ5ooLQ5%2B3oEQHvFfDV2BmfzgsVelMNyCcyR05lYAt0QR9RvA94rgB9mo0hpWKPQkQmN6btaLYR6Tq8K8FK1V8LOCevpqz5ITs1SAYRNk3IhgiHplptRXXL0R%2FjUGVGB8gdHCEVLF3og1xzH%2BNUUaMXu%2BJrAI7ZKuG4AuaIgarROeD3xDSWC3U3y0Ltw80t%2FQqQcR9u5xS3S%2BUabMD7i2WyoQNJ0k6rEFoegLGyVb992ZsA1G6LtLlQcD%2B6zjSJFtM9B4txVWktwRd9CyeiLgbKNkoijTNlE4vftOE258JlxOSMBBSUv7FAe54nGNbsUh4jA6ZRSIVC7sou3QtuW9UNa32Lr03OVYyQIAlMuWy8IbB0VJk%2F1adFLtWzt9oxhZ9oETyCtHQH0Y66dMRmKzGn6MWwuEfLdqXEoWMXQlrUFThbSJNNE7Wz8ojp3i8dQHSnrk1%2FnMOwK4dtCPOp0CcH5pgDxPfEuXgUZmkEzAx1ahjHR%2FGC1N4k%2FSav8FYSlLFxaJenjG4yTguE50fiBLmb4caPMPnAk8QGOqUBMLn5PlY7TMBbZ2uQsfrRis93N2qUuox9tCwpJjueerLarL80v3MRGyXvqGKsFUP06RV2g8UsPluNtdKUq9FBnaMpXrKklMkFhq7Ycy0NMch8nl0HJCJCzScIxxt3ApcQi7ZzvChGUBkzz2E5LnMBW40jaTt4%2BxMckY2yiunUkaade%2BRV4fkebSy7sIAj4JSIv66me%2FF5qOUfTyZWuok4OkM2Ut4K&X-Amz-Signature=9adb41a35b211cc0125e104a3f4adedc5c5c97618baa410ec0cb22f861b03890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZHPZJL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDK0zl8QErY6T2QDQUv9seEuvkEjQO%2F3Ffd0rQxJtZCTwIhANQZP%2B%2F2gg%2B%2BboiXJ0ITRotMpJJgHNobAlNvoptFKAmxKv8DCF8QABoMNjM3NDIzMTgzODA1IgymxWPdJBsA2OiJg%2FIq3AMU6U5IaHBJjT1YnLeXKWMhDEU%2Bf%2Bf4xNWfWf44R%2FydBG1kisrp%2B9p8iVOQMl5V7jXnzIJZERx6fqLUTfZeRtmQOy6qBziWq4QEFvRY3KyPeHN6FOnoFMfhQ3HvbUxQ0%2B19KZmVLjt7vHI%2FBRxJ6VzBZ3uIuz5UP7ZQifa25oTpaCCf0MhiXYLeLrog8u%2B%2F%2BKNfNDzTR7hdkg%2BYcAyjZA4VKT3Y7Wi3VjnszLm6JEDjnyGeBlwCY1W9m8CmRfAU6%2Frn2u0XfnTWc1sBnOunlvo76frwabDN4e7bbRVm2uL2OUh6FqclMS0KTIj5dVb%2B6ONXcNAG6KqaKHzDtcUQ%2FkQUCSIeIbLSDDw%2FNyY1gy8SpAGirLgla9YQWiW8TvcUluYfITsEc4AO67a2cfCHsILj42CeBVandyzpAniEvWlo8hIXfUSXdJpptI5rL0PpvQ7J1l%2BUKr0kZNZ0Des29a5dfvFMSOylvyyFkSRL9EaVzNHTgbg8Q5xMYMjKaUQsGSYkosPENuUQs9F9OH7oF21MWO0RW0xg2dZ0d7KLDtqgdHJJ3aW44rFiCzFk2b7bsKDMwgfeZCbdVykMSvn9dzOsfhrTtB8D9I0wBMNZ8a%2FJrp9j9zSVXDnR0Pp7fDC%2BwZPEBjqkATGcCfdxvrvAKwoYIxb9ynbyc9977L4i7wQrd8s8tiS3nJ%2FdI5qfedv5wyZQZh%2FeElvgaJ5%2Fc4gY5kFeaP9dnWcVQvSReQg%2FPzzB%2BkFLVukY62T0TlRVjWMDRFWnsa1NPTkSvS3rx4lJr8ciShMa5h0MVOWQE%2FzuH%2Fs%2FvNqxoLZxkcYcfCRbA8BnPxIkcqVvmzG3asTp4cqVw%2B1XjJDVVqaP%2F0Zp&X-Amz-Signature=a567bdf62a4fa02e57fc666721ee5f73ed47c819271c70fda91fb6f9ab39f298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3VNDHAG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCICtzEqmOh9Cm4Uc7uBqGvvSkNHWlz1kl9QhGlOk3qrcRAiEA%2FiwItzTNaJRjC9vIwQ4wcra8Gi1IeDsqMYPOTZ7yMMQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNcqEsjQB0FxPF%2BD3SrcA9zYiJyV7OwEeadQYSkqnMwzH2bpZezbwEB3sRN7Kf1HK4IIp3Ky95omXq4dZ%2BJTfJTrscAh4uOLfav4V2SDWP%2Bfr8ihtKXX1ziGVPvf%2Bte1wjvn9dGEXQUbfiRIpB%2FFFm9uR81JDvUOl5i%2B8G8S8AMn3TWJps1yjw%2BgqvyHj%2F4cjiWuzn8eMXn3UVR1N2Xp%2FMtwwVm5ARahgDgXLLQghgN%2BSDL3kmgxOuBnnOb9Fd5yJ9GinrvNlKrF2Y4pu2vXIUOo20HUwENHU0FudsdyKUVnl8If4Rp9lWvoV3PbiEUUHGd%2Bf4pAUWIHAY4eZTPHKe%2Fy9MtuvBCPub8XqmhOzR4ro52w0mtCk1hqcWgTzQHcbpskaFsCAG6BdWIzww2yoXRwbYBSUzCD6Yj6VyR6Cowbj8JyB31Np2UTkhoHB6lL6zROI3KjnsnjwBo0ssGEIwXjTalAaoAzof4AyCFfEjfr78toozD%2FQiJC1rWfrNMtm3HIGxPcsUU7EO4o%2FzqAMZyhrC53rszQfi7DHo%2FJUSy5GB4Qf18RfTc%2FG8CDVwOX3e3gquLqA%2BIK5ZZ7rpT86OsQ1TTXD7i3U5VAXJjLZ5fC14gWtJafB%2BvmUmUobQbrG5pqUBlG4EiRv6sBMK36ksQGOqUBh3%2Fu2uVz8%2BXTh%2FjAEcYD7us4ylCR%2F29vlw9Kz0L5vx0nFvMw%2Fse%2FU%2Fly3tWtsjXRccVvCeRQHo%2B6yImzS3o%2FtWBun3s5akXK14NqHCAXOnkKZUWv6e6%2BLgQXj6S5OXkTV55aPgEjuH3eS6%2F4cs23fAyT%2FINlJmUgEVMD2x%2FtKI%2Fv0JC6iTuYToKR9%2BkYQhTVzx2om7zsZyJe1pubf1ddVd%2FNmyv8&X-Amz-Signature=b187c2847e9ad9bb79bbf3ff3fe5d6df57b9cfa023cefa3ff07d5ab2aeeee0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O3UKZC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHyc64Qf3kFzsNhWCrZfSY49jF6zU13ZYje%2Fov98Yb%2B4AiEAlkfg5%2FCBs6gEerD3RuDdjf7X78E1vTCApC%2BCL0zFoNwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDYuw9jH1DJhHlv0SCrcAzViRDdAHsBm3dNv6Pih4Da9iqrMLw%2FnpNNTfMWTeH%2FBshwk%2ByNdST1mdLLKmnIzMKzLf9YUBlfoTE3BdmG1MEQCVf%2BOneYyiTQ5ooLQ5%2B3oEQHvFfDV2BmfzgsVelMNyCcyR05lYAt0QR9RvA94rgB9mo0hpWKPQkQmN6btaLYR6Tq8K8FK1V8LOCevpqz5ITs1SAYRNk3IhgiHplptRXXL0R%2FjUGVGB8gdHCEVLF3og1xzH%2BNUUaMXu%2BJrAI7ZKuG4AuaIgarROeD3xDSWC3U3y0Ltw80t%2FQqQcR9u5xS3S%2BUabMD7i2WyoQNJ0k6rEFoegLGyVb992ZsA1G6LtLlQcD%2B6zjSJFtM9B4txVWktwRd9CyeiLgbKNkoijTNlE4vftOE258JlxOSMBBSUv7FAe54nGNbsUh4jA6ZRSIVC7sou3QtuW9UNa32Lr03OVYyQIAlMuWy8IbB0VJk%2F1adFLtWzt9oxhZ9oETyCtHQH0Y66dMRmKzGn6MWwuEfLdqXEoWMXQlrUFThbSJNNE7Wz8ojp3i8dQHSnrk1%2FnMOwK4dtCPOp0CcH5pgDxPfEuXgUZmkEzAx1ahjHR%2FGC1N4k%2FSav8FYSlLFxaJenjG4yTguE50fiBLmb4caPMPnAk8QGOqUBMLn5PlY7TMBbZ2uQsfrRis93N2qUuox9tCwpJjueerLarL80v3MRGyXvqGKsFUP06RV2g8UsPluNtdKUq9FBnaMpXrKklMkFhq7Ycy0NMch8nl0HJCJCzScIxxt3ApcQi7ZzvChGUBkzz2E5LnMBW40jaTt4%2BxMckY2yiunUkaade%2BRV4fkebSy7sIAj4JSIv66me%2FF5qOUfTyZWuok4OkM2Ut4K&X-Amz-Signature=761c2a700f313463e714b492e89d0e2212c0733199c5891b923277e55bb27951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
