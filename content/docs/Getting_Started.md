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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSAVZ5D%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA7TnlIkIAK2NpjN25A3yt%2FNek8vkq9xZ0HCpxBaLH3QIgY70Hn5ybz79TMzDmeXw6xeDL6OatpKHAGlcJguvesAoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTpV5E0tmDaiE8xDyrcA1%2FqbwxoCdFazqYCGfZxwBFNdI%2FRJEa4yNjEeHhbzRwT7pj4jmCgghB%2FMvSGUwzlQwEfEHvHoeTp%2Bz3Ins4oJe9o9SWL7QI8SjaFxq9oGKSdntVsRxUZIEguJFoMB8dRnbVm7lxzYJObU6eIN1Kc3g1JGWQVxgmQ0M5a6wxvwFnNcJFR0ubbXuUO1jNFAaGn4gM2WAthA9SYuNJr5MTrCNsMzlcnseEmlt3%2B1oyu02XhTrUv%2F4Nu5wn7Qv9ZbiPIS9Rx0hGjkzzf9EKpjccJSu5GS1WvHnSE1CjwgQl4BLZbF4N%2FE%2Fff58ULAJqtwke34KGP5aHuUj6wT9E5c0a7%2FVLCKGmSMMszhGyDdiad8trHTRXjlERAdDCEPxrMtUlwnYEXg5m2AUMVavzmjUaAQj7UPqP%2Bo4hnZ3Kpx09q0kyXzOhwF4LZ8kl6eb8O%2F3yc6kOY5RU%2B1wCXndX%2FY0HtQyk8TD4u3rJm7AwfW26V3XdMm0cF7WN5RKfsh8o8SU0UGBIm2jRVvXn4YRA8%2Fm1rL0v7QYBvje72dLrUf1CKvYXiob5lPV3LkgPzrt1SKsOITkRIhg9pkOWrvTVSF9lG8d%2BZAgMsjPbBlPWjjQ6yyI8PJqEi7swquTz17PwsMKTBgL0GOqUB5nCxQXrpuIXfur%2BDNv3GkR03C%2BlkkeRWxUVxOIen8Ruw5rxGByRUgAEOF9ThPS0bRm5b4LRUd%2BvKH4qjKNqYoo4yGgnZpk9qY8p3pcEhjnARUscekEAsJG0P6ErIQuZ%2Bb9mDtbyBdAjLkVirRzJ8JeIXCIN%2BVrpizOR%2FSnfKVFQeLUSV%2FpA3SBrmv4QAW3%2BK%2FakpxTO4fp6PH6i%2FVu0sTtxx8Dh8&X-Amz-Signature=932efbf99335b6cc470db8458238b0c0757473f90fbef50c099f439aad03e0ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSAVZ5D%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA7TnlIkIAK2NpjN25A3yt%2FNek8vkq9xZ0HCpxBaLH3QIgY70Hn5ybz79TMzDmeXw6xeDL6OatpKHAGlcJguvesAoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTpV5E0tmDaiE8xDyrcA1%2FqbwxoCdFazqYCGfZxwBFNdI%2FRJEa4yNjEeHhbzRwT7pj4jmCgghB%2FMvSGUwzlQwEfEHvHoeTp%2Bz3Ins4oJe9o9SWL7QI8SjaFxq9oGKSdntVsRxUZIEguJFoMB8dRnbVm7lxzYJObU6eIN1Kc3g1JGWQVxgmQ0M5a6wxvwFnNcJFR0ubbXuUO1jNFAaGn4gM2WAthA9SYuNJr5MTrCNsMzlcnseEmlt3%2B1oyu02XhTrUv%2F4Nu5wn7Qv9ZbiPIS9Rx0hGjkzzf9EKpjccJSu5GS1WvHnSE1CjwgQl4BLZbF4N%2FE%2Fff58ULAJqtwke34KGP5aHuUj6wT9E5c0a7%2FVLCKGmSMMszhGyDdiad8trHTRXjlERAdDCEPxrMtUlwnYEXg5m2AUMVavzmjUaAQj7UPqP%2Bo4hnZ3Kpx09q0kyXzOhwF4LZ8kl6eb8O%2F3yc6kOY5RU%2B1wCXndX%2FY0HtQyk8TD4u3rJm7AwfW26V3XdMm0cF7WN5RKfsh8o8SU0UGBIm2jRVvXn4YRA8%2Fm1rL0v7QYBvje72dLrUf1CKvYXiob5lPV3LkgPzrt1SKsOITkRIhg9pkOWrvTVSF9lG8d%2BZAgMsjPbBlPWjjQ6yyI8PJqEi7swquTz17PwsMKTBgL0GOqUB5nCxQXrpuIXfur%2BDNv3GkR03C%2BlkkeRWxUVxOIen8Ruw5rxGByRUgAEOF9ThPS0bRm5b4LRUd%2BvKH4qjKNqYoo4yGgnZpk9qY8p3pcEhjnARUscekEAsJG0P6ErIQuZ%2Bb9mDtbyBdAjLkVirRzJ8JeIXCIN%2BVrpizOR%2FSnfKVFQeLUSV%2FpA3SBrmv4QAW3%2BK%2FakpxTO4fp6PH6i%2FVu0sTtxx8Dh8&X-Amz-Signature=7fb9885c46dd71e0c41d71a7bcfc260c9beeb17ff88c53374cd16b054a8bfb34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UFQKSLY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0rbTzyErKZaBud8yrYNIVD6vSWDJrjLUdWF89qwkq0QIgNhtR8OzL%2BdGKtDN%2FptE1oIlknOgn%2BA56zhThru7iXjkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdUl0x9gc4J7ncJIircA1kVoPSRSiDj0GTsnPNVN6vgAeTaef1L6hqvqHkmxxGMB%2BCyBVOMG%2FomuGHgNQ955xr%2FELfY6L0bjWlmDPvwNWvs%2BF5k14t0SR1wH8jugp15BusvWSq841a60g6FWIKdw3AX6jd8y%2BbUOQR3h69qryAehfVjn1v%2BsX%2BcdfUOoFLOaI%2BMAexZ3Xr7jaamOihAlhNuFJhB5cVeBvACL3asi3E5nu2zIDN8atA8f99N8tg7h%2FQbJ0ZXHaCA2FT8OmeQ4jnAmA%2BPDPTZegWIWnZV7UgShl4zK7V9AJcgWx8p%2F4i02496MTEKTjjdMzIAewy3%2BoB6d%2FYnVc6%2BlHu4y8NMfe528lItqocnHNCS3O8X9ZU9C0jnZJUbfuwerAq7OrEhmiH3dvABayOfhqQjk9GPDIS07%2B4vki26cWUOOMBhXV2jSDM3gDSa3i5it6lEtX72WL7vsuwam67FMwb%2BEp%2FIaP2CLj0FLvI3T1VhvGWYDlMgkYwdPKp13F9uEXQFz89p9I3BEdFpvb8gckGDkI11IjofU3olI5E%2BRh6akTSRjNrpPa7iVKL9D279y26bLl7K6PqCGRXeRcctIHMIvWZbQ9KyWgBVoHVn9Ry6w2O4xD2D85neBTvDlcvjAXtJML%2FBgL0GOqUBZMwcHwX%2BDSSjcovZo34%2FnGzqSDWWCdZ5FRMKWN6iGOieWeIMk0TXspK0FdIoPjGclVajLrDaqtoaCv505r9sD3KuxFXC9CmTAAtuDNaNw2uDhAfJ5ZRmF8G4XDlpPv9t%2FTDhAsfMjxbv0ALjSbfpnn0BVwEcXnyyBs3qdB1yqFIbZ21Wnn76z1GqOJX00J3oN7auOK5GVhGZD5bkX7DosCGZcsjb&X-Amz-Signature=1e4b7c910eeaa3e83b2bc5a8bbe43218d9a5be331fb736484656213ecbd2ef08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2VNK72%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvlplJ79r4EU8qfIZXgQ8Idp2iSRpdHzicZqZeiUNvvwIhAI6Q7YnpzotNJgU%2B33kHZpo8Qr7UY%2BlAH7yuoPDk1RrnKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBGjiO2z%2BrYd0cRWwq3APZfFtFZjiTN9spmVCGa3VwKz8uVvTRHeQxS9YVDv%2B4xXGphsUe7mQu35aFqKBy1ZYsCibQ%2B69wu2mga8CEa0%2B%2FkqyV%2Fm2i%2FEsVkW%2Fe%2FXjqfplpX4NjzRRZI%2BHVeRQzRlLR5EJQSP7ZV46BQy8Ro%2FqnxeY4sxK7kVgEFa5Te6Y6i%2F3rVVo88yehMLkNZg%2FrGRFDIRWNeDdGr9llYHA1naJ1E%2F2O0C637Zi%2BCe%2FFtXIWA5qKNfH0V%2BndykfKlbHAe6EEJMh%2FZf%2BoTwLnrN9yltYiVcCfpCMxh8EQzZ%2BVi0jTS%2FugbgytG83JzDvX%2FKus7tW%2BNQI%2FdIvqloyUcyY%2FZv3%2BOpiKpZ7qka0a3WCz0g8%2FntzEY3SJ23UMqe4Ux7HUDl5aeFpZVmYNizCdCiNXN5v3NMFAbIvGFd5pVrfbZdOH4RINRTuOA5hDueC7rrZahAixdoBtSMtfNDl8jCSIMzRTyIA34kWNRqN9lcSKUlD0yFW%2BEk8Bwu2iUYW7DcukmhXwzseeDXaPUnatiSnvOxg5vI9%2FOE535%2BQD6ZYwreqfLQ4lkVTzWMsYSMb9gOlyO4iBCrCql0y4XhuNQAcodkgy3NES4sZ8eo%2Bkxe6PbfgsX6QZsTIAXddZ83nSmzCawYC9BjqkAVvT%2BBHg4xI0gw7BXhAlpKXT%2FosXTwNmv4i1X45kRHw3VbVe9aBCHqf9nAr4gbPQd0neBETqsWElZxTI%2BuqET19WnvLjDW9cPHKVjYr9s8RT849J%2FEEaTv8YL86o418MRJL3V76WSGr%2BH1BlE6ePrFkwPeDpYBnd1Q7OOX%2F%2B8MzndKOR4r27jOQ64xmI80wiJ7AK6TUHh2b20m8A%2BqvwC0b1j0QI&X-Amz-Signature=0b4f6a94ec4a298d0961648da976facf250ac4f5396ec87fae404d3a63208285&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OSAVZ5D%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA7TnlIkIAK2NpjN25A3yt%2FNek8vkq9xZ0HCpxBaLH3QIgY70Hn5ybz79TMzDmeXw6xeDL6OatpKHAGlcJguvesAoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTpV5E0tmDaiE8xDyrcA1%2FqbwxoCdFazqYCGfZxwBFNdI%2FRJEa4yNjEeHhbzRwT7pj4jmCgghB%2FMvSGUwzlQwEfEHvHoeTp%2Bz3Ins4oJe9o9SWL7QI8SjaFxq9oGKSdntVsRxUZIEguJFoMB8dRnbVm7lxzYJObU6eIN1Kc3g1JGWQVxgmQ0M5a6wxvwFnNcJFR0ubbXuUO1jNFAaGn4gM2WAthA9SYuNJr5MTrCNsMzlcnseEmlt3%2B1oyu02XhTrUv%2F4Nu5wn7Qv9ZbiPIS9Rx0hGjkzzf9EKpjccJSu5GS1WvHnSE1CjwgQl4BLZbF4N%2FE%2Fff58ULAJqtwke34KGP5aHuUj6wT9E5c0a7%2FVLCKGmSMMszhGyDdiad8trHTRXjlERAdDCEPxrMtUlwnYEXg5m2AUMVavzmjUaAQj7UPqP%2Bo4hnZ3Kpx09q0kyXzOhwF4LZ8kl6eb8O%2F3yc6kOY5RU%2B1wCXndX%2FY0HtQyk8TD4u3rJm7AwfW26V3XdMm0cF7WN5RKfsh8o8SU0UGBIm2jRVvXn4YRA8%2Fm1rL0v7QYBvje72dLrUf1CKvYXiob5lPV3LkgPzrt1SKsOITkRIhg9pkOWrvTVSF9lG8d%2BZAgMsjPbBlPWjjQ6yyI8PJqEi7swquTz17PwsMKTBgL0GOqUB5nCxQXrpuIXfur%2BDNv3GkR03C%2BlkkeRWxUVxOIen8Ruw5rxGByRUgAEOF9ThPS0bRm5b4LRUd%2BvKH4qjKNqYoo4yGgnZpk9qY8p3pcEhjnARUscekEAsJG0P6ErIQuZ%2Bb9mDtbyBdAjLkVirRzJ8JeIXCIN%2BVrpizOR%2FSnfKVFQeLUSV%2FpA3SBrmv4QAW3%2BK%2FakpxTO4fp6PH6i%2FVu0sTtxx8Dh8&X-Amz-Signature=027e2ddc1f3fbb8052ccebf9f8fd2988a7122593f5da7ea27778ae7bce96f789&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
