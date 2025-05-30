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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOA2FRKV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BEwABWhKyvO4EsJljwxwj1r7yakk69H%2BBw3J3GMy8FAiAgeYVPm69puZOuxkR1aGRNpDm4h5HZIBFiT5%2FGY2D%2BqSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWhxTIUVIocl9HkJKtwDRDJhUqaAxjipW7Z8dPbxv7sUCvdkejR1nMK%2FZ3h%2BRn4ZkDE8neEucUagfpVe%2FT4GHVIBo1yKUHTbUkuHTrB4dY4xxcdx3hVVUWcxC0iAEmMrpdELimjhvapbi%2FYLEuOVj7RDOFFU7yGCZcFBUFZX7Y%2FbymDnHmTFohVlOmApKKecueXeCBJ2Ofv8AoOFZLwqD2wtLWHFFIjel3OE5mEriqn1oxfNl9qI%2FgUdqf%2BbpsmYNDQ9haAliQ8%2BB97hOefrg%2F0Zxi7mPUzQdCXGrnJ7M9gS0lPQdiPr30jV%2BhbT6BwBnsNsgpqepjx%2Feo8FbgBummQQZ5%2BuOu22%2BZGXxHlwYP7Yv%2B09hQGbX%2BteGuTd3G1cQgJelw3VkA7sCwt%2Bt3esxeyfCPKf336Tm%2FznmPrlf6l3bG%2BDob%2BBNTDIWcX2QP4b8sa0%2BZzedkupcAxy4zOA3G0FjKoBcc2gcBepHy%2BQgSJ243DJzmo6Dw%2B4WbLR8GfmkIGjxh33W9XVoUvKk2373qjqXS6%2BrKd6K%2BvbKLcin8xRDogEv9kYfhDefBmP6W7xLbTErfBVsJG8%2BDKJc%2BGfGGJHvWEPIpLa4zOvahSbtgGB2wFIirntgvRMrViWQZlvHQ6aBEmtzFI8c4IwmI7mwQY6pgGXjD9fN%2BY0eZX0Ev74gXhJQUaUrfYA4A1OvouXEyfSbDXxBlg2TO0zdquwG%2Byxa1ceK%2Fm6TmW1GOucMetG20a0H4TTY3vMUf0JDg%2FOUorIz5YH%2FraLlIH4jsMuJd0OrfZU0TZkM8SO%2B8N1uI1q18rCFmJpM85ityJgSHTQLHCa8roT92%2F36x7FZLh0muhDxeJu5%2Fy4gR3lCIFIb1jOVDxHUxBznpXb&X-Amz-Signature=53ef5e70bedf0eab7fdc2e15c66ab896650068a73fda5f69646dde3bbc930126&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOA2FRKV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BEwABWhKyvO4EsJljwxwj1r7yakk69H%2BBw3J3GMy8FAiAgeYVPm69puZOuxkR1aGRNpDm4h5HZIBFiT5%2FGY2D%2BqSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWhxTIUVIocl9HkJKtwDRDJhUqaAxjipW7Z8dPbxv7sUCvdkejR1nMK%2FZ3h%2BRn4ZkDE8neEucUagfpVe%2FT4GHVIBo1yKUHTbUkuHTrB4dY4xxcdx3hVVUWcxC0iAEmMrpdELimjhvapbi%2FYLEuOVj7RDOFFU7yGCZcFBUFZX7Y%2FbymDnHmTFohVlOmApKKecueXeCBJ2Ofv8AoOFZLwqD2wtLWHFFIjel3OE5mEriqn1oxfNl9qI%2FgUdqf%2BbpsmYNDQ9haAliQ8%2BB97hOefrg%2F0Zxi7mPUzQdCXGrnJ7M9gS0lPQdiPr30jV%2BhbT6BwBnsNsgpqepjx%2Feo8FbgBummQQZ5%2BuOu22%2BZGXxHlwYP7Yv%2B09hQGbX%2BteGuTd3G1cQgJelw3VkA7sCwt%2Bt3esxeyfCPKf336Tm%2FznmPrlf6l3bG%2BDob%2BBNTDIWcX2QP4b8sa0%2BZzedkupcAxy4zOA3G0FjKoBcc2gcBepHy%2BQgSJ243DJzmo6Dw%2B4WbLR8GfmkIGjxh33W9XVoUvKk2373qjqXS6%2BrKd6K%2BvbKLcin8xRDogEv9kYfhDefBmP6W7xLbTErfBVsJG8%2BDKJc%2BGfGGJHvWEPIpLa4zOvahSbtgGB2wFIirntgvRMrViWQZlvHQ6aBEmtzFI8c4IwmI7mwQY6pgGXjD9fN%2BY0eZX0Ev74gXhJQUaUrfYA4A1OvouXEyfSbDXxBlg2TO0zdquwG%2Byxa1ceK%2Fm6TmW1GOucMetG20a0H4TTY3vMUf0JDg%2FOUorIz5YH%2FraLlIH4jsMuJd0OrfZU0TZkM8SO%2B8N1uI1q18rCFmJpM85ityJgSHTQLHCa8roT92%2F36x7FZLh0muhDxeJu5%2Fy4gR3lCIFIb1jOVDxHUxBznpXb&X-Amz-Signature=5ff65b522d5eab1e68dbc1cfb49598aa929d0c54f231a671c976a9876ad7c2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOA2FRKV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BEwABWhKyvO4EsJljwxwj1r7yakk69H%2BBw3J3GMy8FAiAgeYVPm69puZOuxkR1aGRNpDm4h5HZIBFiT5%2FGY2D%2BqSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWhxTIUVIocl9HkJKtwDRDJhUqaAxjipW7Z8dPbxv7sUCvdkejR1nMK%2FZ3h%2BRn4ZkDE8neEucUagfpVe%2FT4GHVIBo1yKUHTbUkuHTrB4dY4xxcdx3hVVUWcxC0iAEmMrpdELimjhvapbi%2FYLEuOVj7RDOFFU7yGCZcFBUFZX7Y%2FbymDnHmTFohVlOmApKKecueXeCBJ2Ofv8AoOFZLwqD2wtLWHFFIjel3OE5mEriqn1oxfNl9qI%2FgUdqf%2BbpsmYNDQ9haAliQ8%2BB97hOefrg%2F0Zxi7mPUzQdCXGrnJ7M9gS0lPQdiPr30jV%2BhbT6BwBnsNsgpqepjx%2Feo8FbgBummQQZ5%2BuOu22%2BZGXxHlwYP7Yv%2B09hQGbX%2BteGuTd3G1cQgJelw3VkA7sCwt%2Bt3esxeyfCPKf336Tm%2FznmPrlf6l3bG%2BDob%2BBNTDIWcX2QP4b8sa0%2BZzedkupcAxy4zOA3G0FjKoBcc2gcBepHy%2BQgSJ243DJzmo6Dw%2B4WbLR8GfmkIGjxh33W9XVoUvKk2373qjqXS6%2BrKd6K%2BvbKLcin8xRDogEv9kYfhDefBmP6W7xLbTErfBVsJG8%2BDKJc%2BGfGGJHvWEPIpLa4zOvahSbtgGB2wFIirntgvRMrViWQZlvHQ6aBEmtzFI8c4IwmI7mwQY6pgGXjD9fN%2BY0eZX0Ev74gXhJQUaUrfYA4A1OvouXEyfSbDXxBlg2TO0zdquwG%2Byxa1ceK%2Fm6TmW1GOucMetG20a0H4TTY3vMUf0JDg%2FOUorIz5YH%2FraLlIH4jsMuJd0OrfZU0TZkM8SO%2B8N1uI1q18rCFmJpM85ityJgSHTQLHCa8roT92%2F36x7FZLh0muhDxeJu5%2Fy4gR3lCIFIb1jOVDxHUxBznpXb&X-Amz-Signature=7e785fea51cd4d6bb6db340491656352c0cd4fd101e0fdd8cd5fa2bebe53557a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRCFFW27%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2lY2PWSh4sOmxce1erRtZk2zlRmU5RuBUy2GPmR23AAiEAjbUf1Uezksn542f5BCdXzMs6A8Qc%2BzpDgHEfMR1lgAYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe2nkv3qFskp%2FlgySrcAwjd%2FUBUe2BVyaID2hSpC868xJS%2B8d24V8sQIRTjvwN%2FYA1Jm%2FHk%2FCvntPjK0BqjO98rbRUI4NDpRoUuJfmaMIB3G%2BOiSwL1Txb1OTXVQLrFiWVJFWdHNtcSwk6inUezWAIasiNnWJsB7zpmKccd5kJJAPeZHZUpyw188vTX4ZleGClj13Pw3xSKPsKt9QxA1PnMPDGjmfSE78KyI7aUiQBrOYzRaplFIsh3XCm7XmMe6fN3V3rCjsPYchwaMHM7YC51QY4KYpa%2BNwDYhhr90KXMJaYLUVszkIRvD4DzUk1kpCmqsdKsrAsN%2FzDxTG7tAsXc%2FBoPxbtg8QJrrrF2OA5MN9734YmXVeY0wdEoRhgV9hhkyBLdWb%2B41af2amNJnBSMTaYWY8w0kSoZhR2C68KRpvwBn7%2BBwtswdM%2FEuEFnRxQ36zCvZQvelrm2Z1TzaeyipgvYsZksObYw6u2sHDhzrvlr%2F2ApoW2kDg9%2B9rB%2F1f4zFZ2QP6Kpsn%2FTvRcXKslQtdWw7ctMYFkbJc6IdBSD%2B71sbuesKclu27I2GJESj4pRUOu4UtnNkYHLbd%2BhMc%2BPiSbmP4re6y7AXuhCtNhuEBjGhKOXcqGG1UjMMSmG2hFel%2B4TmjtXY5JhMM2O5sEGOqUBkoI27nbg8R38QI2xSAHSESObgqqoupbbaor%2BJlT3d8jVPnBTnBI0LvlmLO%2BXxHCjEHLZW81M%2FyGVa5AkEOMoCAuqPn5L2YE6YO5PzUTYcBT7ucHBgk7QzA6v0KHOwThdE4SCuS9SlyLtptRO56UFH9aKpXeOR6K2tk1FTfUYCmqPR410KHSYF6shGj%2BbDTr%2B9nGEu5jJdkxvCUuLp9yZ0zHOLufc&X-Amz-Signature=5bd6720209b8694d887ffa029925a937992cf4ebc51434ab76dc69e7b0edbb35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUHTNLIA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfc%2FFIZo1DxJNSCcbgDXyCGncLXL52T36ghavwGVPeAAiAN32GF0t6W1HFXj4ECo0blyVfy5IIK0%2BbjKB%2B1JwxKHCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRBxXOmQpRr9oyPRKtwDDTnSBbDWIbFfncZYgnTe664FbSpaAQBFenaAh%2Ba9LBq5AObk%2FDSEvck4NBQRE%2FHbFTpz6tF89atXhlTviURfW9Fq8uV7gaGV2Odoem2UpYAFzLijgZY1K%2FRRHxc%2FZvocB8qvMHQW3cWGbbsbVQeWLCw9eJTYgDeJVnElwUDcExrHQvWJGjUDizuw1DMbF7nXTPySVz0A33rdF8QdfF3N7jsQ0IKftreXuu%2Bk5dTtXlIWppEl2dgHWz%2Bgu4bujSKIieOTDupzzPirR2uBoUI5CqrFoivBPcEmQAZtKM5rt3ZATFtGSA9nrRkBCyIan6gZTgte1EcIDpz9FG6Yku4Q8MZ3jmIBT2nOP8h8WDrE2nqz8FVqbJVW2zdlWEWHL8TaiqvHhyhcxgKCiNuKZZuRoqfdg7p74iF2eDjopyeFaOZ5SYWfTka2mfu5W7KBeN2pGkw7sB%2F7n2oVwXRLazWGfGfHo7yiIqXZby7skts1NJEXPWsyk3AwKAsHECrTgv%2F7raOyR9ZdM9EGD7F1ifjv7kpw4fLC%2BS4mUY7sdbuOi%2Fxe6fF3tL6zzJSL1Yfmibo7AIN5l1bGEv0Q0ukIaGcRVjmlJHS%2BRWEbk85xyQzjTgFEMXu6oPYCPSgsJBwwxY7mwQY6pgEz%2BvF%2BiC3ko%2BJZoB%2FB5vtIcw1hFUyQ9178P20fwoTdqYkZWWCuFv7TyL7BMk3zOhF0nV6NR5DOSZ07eq6aOCnBSJ1tJvHLQbgsV2xaGkwKBOvDcmqbUrN%2BjVXwiLpcuBBdv6FUBp9s%2BhRMn6WjlKTusAicEaEqke8zWnCQqRu%2FAx08x4ScM4v5vLIYntI4PqK3ho%2BkZErmIFacC%2F2UumR6b0t6vtcJ&X-Amz-Signature=f5939c8b08825e70d9d0b4f189fd9a4120bdcab3a8419400a3556f024cf70956&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOA2FRKV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BEwABWhKyvO4EsJljwxwj1r7yakk69H%2BBw3J3GMy8FAiAgeYVPm69puZOuxkR1aGRNpDm4h5HZIBFiT5%2FGY2D%2BqSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzWhxTIUVIocl9HkJKtwDRDJhUqaAxjipW7Z8dPbxv7sUCvdkejR1nMK%2FZ3h%2BRn4ZkDE8neEucUagfpVe%2FT4GHVIBo1yKUHTbUkuHTrB4dY4xxcdx3hVVUWcxC0iAEmMrpdELimjhvapbi%2FYLEuOVj7RDOFFU7yGCZcFBUFZX7Y%2FbymDnHmTFohVlOmApKKecueXeCBJ2Ofv8AoOFZLwqD2wtLWHFFIjel3OE5mEriqn1oxfNl9qI%2FgUdqf%2BbpsmYNDQ9haAliQ8%2BB97hOefrg%2F0Zxi7mPUzQdCXGrnJ7M9gS0lPQdiPr30jV%2BhbT6BwBnsNsgpqepjx%2Feo8FbgBummQQZ5%2BuOu22%2BZGXxHlwYP7Yv%2B09hQGbX%2BteGuTd3G1cQgJelw3VkA7sCwt%2Bt3esxeyfCPKf336Tm%2FznmPrlf6l3bG%2BDob%2BBNTDIWcX2QP4b8sa0%2BZzedkupcAxy4zOA3G0FjKoBcc2gcBepHy%2BQgSJ243DJzmo6Dw%2B4WbLR8GfmkIGjxh33W9XVoUvKk2373qjqXS6%2BrKd6K%2BvbKLcin8xRDogEv9kYfhDefBmP6W7xLbTErfBVsJG8%2BDKJc%2BGfGGJHvWEPIpLa4zOvahSbtgGB2wFIirntgvRMrViWQZlvHQ6aBEmtzFI8c4IwmI7mwQY6pgGXjD9fN%2BY0eZX0Ev74gXhJQUaUrfYA4A1OvouXEyfSbDXxBlg2TO0zdquwG%2Byxa1ceK%2Fm6TmW1GOucMetG20a0H4TTY3vMUf0JDg%2FOUorIz5YH%2FraLlIH4jsMuJd0OrfZU0TZkM8SO%2B8N1uI1q18rCFmJpM85ityJgSHTQLHCa8roT92%2F36x7FZLh0muhDxeJu5%2Fy4gR3lCIFIb1jOVDxHUxBznpXb&X-Amz-Signature=12e0755b04d98b21e6a5d108d81618bdcad3128bb3429c459b79435b28139490&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
