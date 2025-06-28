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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIQZJP7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEagt81Akchtr7mP5EmbLUmu%2FU8WT6lX3DlhiRMAF4sAiBgIDeBfj8kNDTJUwwvHh2dOysFJb1Uwv55VVm9acQcZiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJBN0xiRcXej%2FR260KtwD9v4Yfvv91cB0EfIfsuvtEGkJ%2B1%2FSxXy3f3flUvTwzZqXycC0KX4FMOUpGVway5WtqEk0WaWuZoBb%2BVE333QbwaaaFImHLUorjwK639AMTEW%2B%2Fn4NpOz5x5xax60%2BsQK3mK5uG9hFXUFTXEvOwtDlORwdjVHCWsQdO0aFSGTsEZCwgf%2FLg0cUeCP%2FZZXNrJqNn47SFhN5oNTcLT0XPACFRkDP%2Bsj8u4KflVXidvwGaWCSGlB3yDq%2Fw%2FbD0lJMPVqtNzIQIgna%2BuC%2FJ6kFU83YBBJX5vFdMU%2Fit8kRSycITqCGjX5yd5rD7n0pvkWtGOrepRv10phiWDgYOq5jw9sbTlHFuc%2FHFH97fj%2FxkWI3huE4c9GEN%2B6uEvB923wM04ag34jb9t9eM42Nt%2Bpg1vsBcIMMs10qjDNaiy7P2upf93KcgxEdPIethXML%2FnrokgM5GpF3rN6O%2BRS7OSoXXG7xlnsDukOFFnytMxeOtjFGYURgAiqexDcf6KgYXnNxBUKg9UXud7JkETCppnEVcDhrcvGVQBveTeFqN74J0KXuG7UPY5O4y71g2azcH3b%2B4Eb2q%2F%2BwPY8HhvMD6m8SuFRBNcDXXwY0qyAZ8eI2iRgW5fXpkrNuLdha%2Fz0THsQw5%2FSAwwY6pgGimeXRKuw5gtpwp0thmNnMHryqMHdw532ngYvBR9tG2Jc0JBRayKiC%2BYgMuhitWLHFnGBUqP2qBfhdfosSL9yeO1zRKxErBYWLmbX61zpkyVxj5U%2FPy68XwUmpQCMHln%2FySB%2F3Y85m8ncLN%2B2NKOWeMRm3WkBrsB8lZa8iRYssDrO7CIm2yxmq6kxY%2FVEJqu%2BD6PR0Nsjfrcu0KmonoR6ht%2Fw6d%2FMk&X-Amz-Signature=dc4829f1a2decda99db5956b64bab5a7040fb752edd354af89cfef596bc648ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIQZJP7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEagt81Akchtr7mP5EmbLUmu%2FU8WT6lX3DlhiRMAF4sAiBgIDeBfj8kNDTJUwwvHh2dOysFJb1Uwv55VVm9acQcZiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJBN0xiRcXej%2FR260KtwD9v4Yfvv91cB0EfIfsuvtEGkJ%2B1%2FSxXy3f3flUvTwzZqXycC0KX4FMOUpGVway5WtqEk0WaWuZoBb%2BVE333QbwaaaFImHLUorjwK639AMTEW%2B%2Fn4NpOz5x5xax60%2BsQK3mK5uG9hFXUFTXEvOwtDlORwdjVHCWsQdO0aFSGTsEZCwgf%2FLg0cUeCP%2FZZXNrJqNn47SFhN5oNTcLT0XPACFRkDP%2Bsj8u4KflVXidvwGaWCSGlB3yDq%2Fw%2FbD0lJMPVqtNzIQIgna%2BuC%2FJ6kFU83YBBJX5vFdMU%2Fit8kRSycITqCGjX5yd5rD7n0pvkWtGOrepRv10phiWDgYOq5jw9sbTlHFuc%2FHFH97fj%2FxkWI3huE4c9GEN%2B6uEvB923wM04ag34jb9t9eM42Nt%2Bpg1vsBcIMMs10qjDNaiy7P2upf93KcgxEdPIethXML%2FnrokgM5GpF3rN6O%2BRS7OSoXXG7xlnsDukOFFnytMxeOtjFGYURgAiqexDcf6KgYXnNxBUKg9UXud7JkETCppnEVcDhrcvGVQBveTeFqN74J0KXuG7UPY5O4y71g2azcH3b%2B4Eb2q%2F%2BwPY8HhvMD6m8SuFRBNcDXXwY0qyAZ8eI2iRgW5fXpkrNuLdha%2Fz0THsQw5%2FSAwwY6pgGimeXRKuw5gtpwp0thmNnMHryqMHdw532ngYvBR9tG2Jc0JBRayKiC%2BYgMuhitWLHFnGBUqP2qBfhdfosSL9yeO1zRKxErBYWLmbX61zpkyVxj5U%2FPy68XwUmpQCMHln%2FySB%2F3Y85m8ncLN%2B2NKOWeMRm3WkBrsB8lZa8iRYssDrO7CIm2yxmq6kxY%2FVEJqu%2BD6PR0Nsjfrcu0KmonoR6ht%2Fw6d%2FMk&X-Amz-Signature=feb70003427c1bbe2e43c10df7d96a4a24e10058955f981802eafde630b54509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIQZJP7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEagt81Akchtr7mP5EmbLUmu%2FU8WT6lX3DlhiRMAF4sAiBgIDeBfj8kNDTJUwwvHh2dOysFJb1Uwv55VVm9acQcZiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJBN0xiRcXej%2FR260KtwD9v4Yfvv91cB0EfIfsuvtEGkJ%2B1%2FSxXy3f3flUvTwzZqXycC0KX4FMOUpGVway5WtqEk0WaWuZoBb%2BVE333QbwaaaFImHLUorjwK639AMTEW%2B%2Fn4NpOz5x5xax60%2BsQK3mK5uG9hFXUFTXEvOwtDlORwdjVHCWsQdO0aFSGTsEZCwgf%2FLg0cUeCP%2FZZXNrJqNn47SFhN5oNTcLT0XPACFRkDP%2Bsj8u4KflVXidvwGaWCSGlB3yDq%2Fw%2FbD0lJMPVqtNzIQIgna%2BuC%2FJ6kFU83YBBJX5vFdMU%2Fit8kRSycITqCGjX5yd5rD7n0pvkWtGOrepRv10phiWDgYOq5jw9sbTlHFuc%2FHFH97fj%2FxkWI3huE4c9GEN%2B6uEvB923wM04ag34jb9t9eM42Nt%2Bpg1vsBcIMMs10qjDNaiy7P2upf93KcgxEdPIethXML%2FnrokgM5GpF3rN6O%2BRS7OSoXXG7xlnsDukOFFnytMxeOtjFGYURgAiqexDcf6KgYXnNxBUKg9UXud7JkETCppnEVcDhrcvGVQBveTeFqN74J0KXuG7UPY5O4y71g2azcH3b%2B4Eb2q%2F%2BwPY8HhvMD6m8SuFRBNcDXXwY0qyAZ8eI2iRgW5fXpkrNuLdha%2Fz0THsQw5%2FSAwwY6pgGimeXRKuw5gtpwp0thmNnMHryqMHdw532ngYvBR9tG2Jc0JBRayKiC%2BYgMuhitWLHFnGBUqP2qBfhdfosSL9yeO1zRKxErBYWLmbX61zpkyVxj5U%2FPy68XwUmpQCMHln%2FySB%2F3Y85m8ncLN%2B2NKOWeMRm3WkBrsB8lZa8iRYssDrO7CIm2yxmq6kxY%2FVEJqu%2BD6PR0Nsjfrcu0KmonoR6ht%2Fw6d%2FMk&X-Amz-Signature=33459e01bf1d8a65b77bdf38ccb50f5ffc6ed7972f6eef71afe5ff2d12d89194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LK24PFI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2hUlMpuhVn0NBZGOm7quQXWG1VePVUEmbPwPxsABTgIhAK2Ivr8RF8iPPe9ZUyemKHY2spMco0avsziOcB1Im0dUKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyukBZ%2BaDIZAxTbwlUq3AOwEdgdufyUBrwrWZcjdGoQqrtGrqbApFGKDig2BU4yqkMR3QuReSBwMRmVFksH%2BlJWlfc75ZZH0P%2FxgwWvBDYpUbZL7pByAvWL7ivr6050sttAZBvsDvv5EfxpNlBi2OPIDG4J8BX6Rk3%2FLXFe6kOGi6acOaQdgR7cRni95cBW9NPja9dNOQ9NoTqcuecM1gnsjb7knPdrtDInR43FH4TKlJjln1JUSAbDdvKzSdQ2uh05XC7HiKAkfTbtGaA5cAVWTTFX1%2FrZtp9eiPl0W%2BcaXGklc1cb0buGSqjvRqpdg8Ivon2nE8OCI5%2ByZbNoKHTZENM%2FV0X9aYGaMNvhwcQGp1IiWODSnQcAu5MVJ%2F%2FOqy2g%2BiebaWzijEUP%2B160J1AEtLm86IFWQjRU12JBN6%2F6CfpONriv0NYr3y%2FCGinItO3RpXA7z2siWYI2%2F%2BDysdFiXeQR9hYLI9oIlAsuIaSrpC%2FY0%2FvghYf6Zg9JB%2BzjSnTUbwknng6wHJRyPDkLDSNeHmSCmZrJrsvZq9zboSmLQyE3hshsFLdU67i25f5mO4%2BaeI14hAQsTpqWJwXwrFm9YzCjjtLrkjrGGFf02ntO1F8CYJ5JaeG26MWN2RSCSJsgF17QkCnhE7EjMjDT9IDDBjqkAV3rLJAYTES62dZJc358lSX1ui9atibsjl5Qw7cKhyk6v7rE%2FzvW7KDmrLa3VaFqGUWdJU3rM3hpVv%2B6BcX96o%2BBNBwH5teNVD8P914WoSD3u%2BGrkQzqEpI44m7%2BtHQF%2FHjYs7lhm4Bk658UcbQPC4yIIDcGz0aW3EBIKcjb9Q3njA5XIlRFx%2F0OUvq1zdIOhcpQqbLvazXFQLTcZhoVGFg8ctAz&X-Amz-Signature=6962a9d314980c0acd0e7fb1ad406b4948c4a972dec49174711a0a65845b7ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7CSLVS%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeBeAbiy8JoEs1M3iakEx4ow4o9fv0VOnh1vxTehmRAIgYF%2FHdZUVY8GPNZlbC%2FIq%2BJlWI3Q%2FQ6JTqVyZSS3H4HsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQgoIRVq57oY6vWZyrcAxRZNtxTt0rGdckvUiVV6MF2SUj%2B2KP6cIiBwDAqwqgAxjjggmtlbsQFFwKJYv01xuI2JSg1Ark5OPH%2Bes5bTzxa7F5ZX3xNaKZR9OYK6MDs%2BQvzLbw3XHnNTtmIqSR61susi%2BpwZtRZVUcQPTSzvpw6xFztM7%2BrF1qG0pnY2gCcB61kF5Cj%2BRRetYlyf6CDmzO2%2Bl8FT1iwedPy4A2%2B%2Fr%2FaLjJ2gE%2FGvd1c5dVXW51Kk3%2ByO12%2BMFoLxecI3U%2Fh5tVnZT219jRPWHr6m37MzLbBOt2vJe0YaWUgCEdAoTvoeMZ9UgMeRR3GQJsdbOnqvxQikd452yNcqQ81Io3yAnWOyX8GDX5bFd0032kVGy%2B2kEp0QGZmLyNm0m%2BAszsrNPfUC%2BfUPbKuO1hRN5v%2FKP9zMKAiFaBR9wWFlP1gYRIcneD8u%2FccmsBBo7Qh2M4e30TxfxEmgYrio%2BSo%2BEyZVo6Ue4rY5jc2Ts5nvx9ND5jdZpWsPxLej1369TEhVYNeM5fy1HCmePajNTz97sYJpUHNagEQ9zGXn7rlyr2rAl4aqjMAhgrSPFzjEOD9X4whMj6A8f4g8XW8zalAGUXPMeYuSBQtQ4ZDoOaoYQLfAhTO6XuUjj2U6jBEYXO%2BMLn0gMMGOqUBdBiOgwnIabJaloFwK05h0MV2jTFqVonyjxczgh65E7V0xejOBUZJARofmf%2BgBzX3oPlla0NhNzdKFVD82HGRKiWlWMVFhuOqV4vKsCnSrPunVH8iXdvQJ8%2FjlXMAE4Mi1RFvCcF0G3blPxSvJOXf8Cn8dM%2B57OfOckZMHXx%2BfFYSay3wXODPnA4oEeMrAwn89hanojGKKhj32rlZmPM8hCi8YTuP&X-Amz-Signature=e00f7e7b75def238cea2ad2c2f537f568d6c28565635ebe9cb7b6fed68b26143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJIQZJP7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEagt81Akchtr7mP5EmbLUmu%2FU8WT6lX3DlhiRMAF4sAiBgIDeBfj8kNDTJUwwvHh2dOysFJb1Uwv55VVm9acQcZiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJBN0xiRcXej%2FR260KtwD9v4Yfvv91cB0EfIfsuvtEGkJ%2B1%2FSxXy3f3flUvTwzZqXycC0KX4FMOUpGVway5WtqEk0WaWuZoBb%2BVE333QbwaaaFImHLUorjwK639AMTEW%2B%2Fn4NpOz5x5xax60%2BsQK3mK5uG9hFXUFTXEvOwtDlORwdjVHCWsQdO0aFSGTsEZCwgf%2FLg0cUeCP%2FZZXNrJqNn47SFhN5oNTcLT0XPACFRkDP%2Bsj8u4KflVXidvwGaWCSGlB3yDq%2Fw%2FbD0lJMPVqtNzIQIgna%2BuC%2FJ6kFU83YBBJX5vFdMU%2Fit8kRSycITqCGjX5yd5rD7n0pvkWtGOrepRv10phiWDgYOq5jw9sbTlHFuc%2FHFH97fj%2FxkWI3huE4c9GEN%2B6uEvB923wM04ag34jb9t9eM42Nt%2Bpg1vsBcIMMs10qjDNaiy7P2upf93KcgxEdPIethXML%2FnrokgM5GpF3rN6O%2BRS7OSoXXG7xlnsDukOFFnytMxeOtjFGYURgAiqexDcf6KgYXnNxBUKg9UXud7JkETCppnEVcDhrcvGVQBveTeFqN74J0KXuG7UPY5O4y71g2azcH3b%2B4Eb2q%2F%2BwPY8HhvMD6m8SuFRBNcDXXwY0qyAZ8eI2iRgW5fXpkrNuLdha%2Fz0THsQw5%2FSAwwY6pgGimeXRKuw5gtpwp0thmNnMHryqMHdw532ngYvBR9tG2Jc0JBRayKiC%2BYgMuhitWLHFnGBUqP2qBfhdfosSL9yeO1zRKxErBYWLmbX61zpkyVxj5U%2FPy68XwUmpQCMHln%2FySB%2F3Y85m8ncLN%2B2NKOWeMRm3WkBrsB8lZa8iRYssDrO7CIm2yxmq6kxY%2FVEJqu%2BD6PR0Nsjfrcu0KmonoR6ht%2Fw6d%2FMk&X-Amz-Signature=9568d3e810f8386133a5596a544cb70ba72a9218153e657141dbc9763a7a659b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
