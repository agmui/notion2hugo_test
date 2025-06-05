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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWOU5ZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHX4Wjf0keyNA4lN8ENbOHfJ9mj6a48z3AUrUxqrzr9AAiEAwe9Klzlz0a8jVMFdypHfALUNmshkz7vYMnQg5kQvRugq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOkolWoDlvnObSapDircAwkvC7Ch6BsaWNzl3eZ8%2BwSTlw6VKM6TrCY2uc6aKoNHx7u0PcUK5ZullF%2BiJDtEqj%2FpI6gM3bXMi9hStNKqnwPWLdMaRqVaa65pVM6SdsawmqmMRpmbg922eZriKmy2Q%2FmT4Hekoub6arcdxA9mJFTqMUJfVBSJQBzOseKXqGAn4K%2Ffvg8bHRJbmPn3WMtKz474K%2Bsqv%2Fk%2Fx9IpOUu9YWWSsGqvWnr0QdOImzh3aRLa7lsGplFQi37K4IF7L50Zalakh4RLbFQ3MEqbMmw2rg5v4yloG228lI9UDV6ehSBtNipJAxWK1%2FNCs321B%2B6U9S%2BPTZ%2FTz3Xzzg9fNVOsUTdPE0H337q%2Bm1foEraiFqrrlFiLVQu6qjI033KVmuvPoDeTeYVAUKHjaPRUrHntPr7nSFbQgrhwbsUcPMV%2Fx2q3eat%2FRcCqkDCHbPeNMzPFlMVU7vCoYsVoQX%2F6UggbyCZgeyDEVQ1S2g%2BWaGo3Ulte9SGxks8NSRY7IZBRNf4n7yLYyZLKeZCKff%2BsmdZ6D7jfENyZwWvLzmAh9Kzet48RlwzRniFmRkf4Z6neAbWpCyLvpqMHkufoq8meksA5%2BeW16J5cuLHqg6PkhrD5arIo3F7FT5ulXHPjowEiMKrnhsIGOqUBo8R7%2F72uAIsRQATzOzRxIIfF5Og%2Fd1U4vLHr7IWT1xFWmAbMDIOCehF4aF7UZDtac8j575Lj%2BQXQZ0XEMuMYwy%2FxWkb7EHZMho7Yr9WXFTYcZ%2BmCEFJyFRhBebzcdXd9ypgtwqBT7ZgTmEIhMbO6F2rZ6YS%2BRMDLV3al98%2FLaP2pwGa91oi1YjfxsXrln%2FlcyrkBym9RpBhDiAIavjWuvg5wGr4m&X-Amz-Signature=d49a4c95495de60a481b90c1b4a9b76b39411b74f143a85cd35ec8e3fc094982&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWOU5ZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHX4Wjf0keyNA4lN8ENbOHfJ9mj6a48z3AUrUxqrzr9AAiEAwe9Klzlz0a8jVMFdypHfALUNmshkz7vYMnQg5kQvRugq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOkolWoDlvnObSapDircAwkvC7Ch6BsaWNzl3eZ8%2BwSTlw6VKM6TrCY2uc6aKoNHx7u0PcUK5ZullF%2BiJDtEqj%2FpI6gM3bXMi9hStNKqnwPWLdMaRqVaa65pVM6SdsawmqmMRpmbg922eZriKmy2Q%2FmT4Hekoub6arcdxA9mJFTqMUJfVBSJQBzOseKXqGAn4K%2Ffvg8bHRJbmPn3WMtKz474K%2Bsqv%2Fk%2Fx9IpOUu9YWWSsGqvWnr0QdOImzh3aRLa7lsGplFQi37K4IF7L50Zalakh4RLbFQ3MEqbMmw2rg5v4yloG228lI9UDV6ehSBtNipJAxWK1%2FNCs321B%2B6U9S%2BPTZ%2FTz3Xzzg9fNVOsUTdPE0H337q%2Bm1foEraiFqrrlFiLVQu6qjI033KVmuvPoDeTeYVAUKHjaPRUrHntPr7nSFbQgrhwbsUcPMV%2Fx2q3eat%2FRcCqkDCHbPeNMzPFlMVU7vCoYsVoQX%2F6UggbyCZgeyDEVQ1S2g%2BWaGo3Ulte9SGxks8NSRY7IZBRNf4n7yLYyZLKeZCKff%2BsmdZ6D7jfENyZwWvLzmAh9Kzet48RlwzRniFmRkf4Z6neAbWpCyLvpqMHkufoq8meksA5%2BeW16J5cuLHqg6PkhrD5arIo3F7FT5ulXHPjowEiMKrnhsIGOqUBo8R7%2F72uAIsRQATzOzRxIIfF5Og%2Fd1U4vLHr7IWT1xFWmAbMDIOCehF4aF7UZDtac8j575Lj%2BQXQZ0XEMuMYwy%2FxWkb7EHZMho7Yr9WXFTYcZ%2BmCEFJyFRhBebzcdXd9ypgtwqBT7ZgTmEIhMbO6F2rZ6YS%2BRMDLV3al98%2FLaP2pwGa91oi1YjfxsXrln%2FlcyrkBym9RpBhDiAIavjWuvg5wGr4m&X-Amz-Signature=4d1dc8ae17d06475a1b949d11a714c94e37d5c30d60159f98fdd18f4c16e3921&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWOU5ZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHX4Wjf0keyNA4lN8ENbOHfJ9mj6a48z3AUrUxqrzr9AAiEAwe9Klzlz0a8jVMFdypHfALUNmshkz7vYMnQg5kQvRugq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOkolWoDlvnObSapDircAwkvC7Ch6BsaWNzl3eZ8%2BwSTlw6VKM6TrCY2uc6aKoNHx7u0PcUK5ZullF%2BiJDtEqj%2FpI6gM3bXMi9hStNKqnwPWLdMaRqVaa65pVM6SdsawmqmMRpmbg922eZriKmy2Q%2FmT4Hekoub6arcdxA9mJFTqMUJfVBSJQBzOseKXqGAn4K%2Ffvg8bHRJbmPn3WMtKz474K%2Bsqv%2Fk%2Fx9IpOUu9YWWSsGqvWnr0QdOImzh3aRLa7lsGplFQi37K4IF7L50Zalakh4RLbFQ3MEqbMmw2rg5v4yloG228lI9UDV6ehSBtNipJAxWK1%2FNCs321B%2B6U9S%2BPTZ%2FTz3Xzzg9fNVOsUTdPE0H337q%2Bm1foEraiFqrrlFiLVQu6qjI033KVmuvPoDeTeYVAUKHjaPRUrHntPr7nSFbQgrhwbsUcPMV%2Fx2q3eat%2FRcCqkDCHbPeNMzPFlMVU7vCoYsVoQX%2F6UggbyCZgeyDEVQ1S2g%2BWaGo3Ulte9SGxks8NSRY7IZBRNf4n7yLYyZLKeZCKff%2BsmdZ6D7jfENyZwWvLzmAh9Kzet48RlwzRniFmRkf4Z6neAbWpCyLvpqMHkufoq8meksA5%2BeW16J5cuLHqg6PkhrD5arIo3F7FT5ulXHPjowEiMKrnhsIGOqUBo8R7%2F72uAIsRQATzOzRxIIfF5Og%2Fd1U4vLHr7IWT1xFWmAbMDIOCehF4aF7UZDtac8j575Lj%2BQXQZ0XEMuMYwy%2FxWkb7EHZMho7Yr9WXFTYcZ%2BmCEFJyFRhBebzcdXd9ypgtwqBT7ZgTmEIhMbO6F2rZ6YS%2BRMDLV3al98%2FLaP2pwGa91oi1YjfxsXrln%2FlcyrkBym9RpBhDiAIavjWuvg5wGr4m&X-Amz-Signature=b4eea953e1ba4f9efd4e2c2fab965a6b75d6e53d7f8b35dcccfc018e984f97c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VKAG24P%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFil6icE3JmG0kM8oF3t24nXl%2FWCYfDs8AFEvOFOsauHAiAsae4UNs7aLt1rqLyUYUPQ%2BVzbcXIkToqN%2FxSt5PaE9Cr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMT7MUa4%2FCpydj9zBEKtwDRM3jeBCH0Q04RzG2RvtJjxHLu8POFFcnG%2B25Dv7t54Z09FU2qQu9leCLtrVjvqwftGVX9MCkX0%2FF1AWJ%2FbPzQY7odYxfW15Ac5h8ArlysczqO6fSxN%2B0DwaJcXYYC4JNB7SvFe2XCQiHhaJVsNQnvuKgXbdQeromnjL7cekzYVjKkOVejgGPTUvmB2d3ICMfI2XHQw9QNeS5ntAl9uAUaZNbrtGsszuAVKrA%2BFF%2Bh9LRmZWuqEczdhBg4PaJ%2FzJ%2BCV0LUFfOFM0lbcaA665O7U6lNfwyua4FMFAAucw2NpodON6JW81xR7CVmNETYuUhXiPb11a%2F0OFgx3ZyogzHV6VRfNvy4ZODQp615b6l5HPUIrpLSHwvuH2awb0%2FBNK7GH0USWbjCsTDecxiMW3lXOdfrnE3gbK1HoJEYGLxGOGwXfkarmZ7fuJ7KwnT9cnYnNPUveVsi%2FAP%2Bvayhixz0gqmjcgKwNrd4YOzpnvF5WRbS4bA2v9BcskJIMjM%2FbpC6oKV%2Ba5pxTaLfkuKNgLOjh45g%2BVoM07fUR977RaAQQB7GppLQikFKA0M4FtfMh0BVx9SjUhjQKdfFQ213GIZXjiB3QVNnJmANdx2Kw64uY1LO0tySSxiU6FsPSwwkeeGwgY6pgFz2%2BdXe3OVg9VUrpUBIlrgakCPdolIv5edS07XcYZKXfPsM4Z4LPu05WqEkbwp4TcM56TgghrHbX%2FKIPC69A575fY2EWm%2FaNieyxLlvJt0q%2BUyoIWtXcFF%2FjuR9ujcJZkp7TJisqstr6YKpGYNQdTVtxOlUpIgryiDPo0AkmYgL4JMG32yOHT8qg8frR1X4njJLSPjMrEOP%2F7%2FdGMDKyuEvztmvWz7&X-Amz-Signature=f9dbdbfc560116866ae6475e25240dcf7ecf3e87487b471e5ba037331fe06acb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6UDTBM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC9yXrn4Ow5ImVzyCF8MqPjrCWeUusNpqYttOh7LM3M0gIgRMNRIJghhtkwjDXjrpY5L5QY5RGnOPeUzZdw9WZTZbEq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGoIeSGz6whSwKoOaircA2ISEL5ffVPuVPc1YURCOqhSOvRuZ9L95%2FCTOvH4bkmSjEtXHbf57Xo6etsN%2FS%2Fpk6j7gEABjugYhZw0NhCIp4AhcAlS%2FMI145m%2BJBMJXSsTx1ZOfcgx0j%2BmkARl5qlixaeQ3HV8T%2B6IGviWBUtun6URAbgI9riUSB130IImuDPMHtkxYNG%2BpDLX%2BTAG%2FvFDvaqcdYKeoZsW44GdbIE3ZPKXpNYT6gAPPXb%2BLwsTEpnUXSdVrej0cinw8tRryDptFBm%2FkEwjTzfvgg9Gkffxv%2FAmKSfZbvDbk1P4pBFhCb1n2Q%2BKikfn0UUJZuv1fATGY5ATqRLd6uNb4MtDTSI1FZATtwKHQXgs%2BE3dTg6jGPyVH%2BLLCq01Q8H7H9kuCYkPxW6AmyyOxI7RJmt2h1ldra6%2BCsjGA35ohb6m%2BHqE8Y03EPxB425hczOKFgAS3eI6ZSkIdaKsi%2BslxGaBx0LPOrBq%2Ft2qXN8Dp8H37M9muV0x9digluvxPhRSuQyvZLRrp8Cvw6AxA4Za8nDq%2FnOO4wByDlR49vIox8MrgbSFxlQ4w2vmlQsYQ3gy0k1Obwa69P9bPg9dTc14aMc0yRlGkRIole3cVoYDTy8FTAqo92BCfLh8lJgWK%2BPGw3aEMPXmhsIGOqUBGAcs46J44lk6rhIu%2B1WsNpqyfPHmd3ojUISB%2FsSMfR918sz9ryrwrX%2FDZwO3aKgw2rM59R3qHokdz53Ihzvuxjkr6W1WFOkXdyScxLkkIiWxRdo6RuuwhpXphU901fR%2FBUGWWqyqNTesK%2FtJTMvJR%2B2qdeRyOgMxugHod9YZztSwYp3YaGQuiBLx6MPLj07MIhUy%2BmWBVkYimTLIReJcgT74l7Jm&X-Amz-Signature=caaeb1b0ebb2e5819dd3bdbaf631072856415a42536c9c277d9498d16b753aad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWOU5ZB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHX4Wjf0keyNA4lN8ENbOHfJ9mj6a48z3AUrUxqrzr9AAiEAwe9Klzlz0a8jVMFdypHfALUNmshkz7vYMnQg5kQvRugq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOkolWoDlvnObSapDircAwkvC7Ch6BsaWNzl3eZ8%2BwSTlw6VKM6TrCY2uc6aKoNHx7u0PcUK5ZullF%2BiJDtEqj%2FpI6gM3bXMi9hStNKqnwPWLdMaRqVaa65pVM6SdsawmqmMRpmbg922eZriKmy2Q%2FmT4Hekoub6arcdxA9mJFTqMUJfVBSJQBzOseKXqGAn4K%2Ffvg8bHRJbmPn3WMtKz474K%2Bsqv%2Fk%2Fx9IpOUu9YWWSsGqvWnr0QdOImzh3aRLa7lsGplFQi37K4IF7L50Zalakh4RLbFQ3MEqbMmw2rg5v4yloG228lI9UDV6ehSBtNipJAxWK1%2FNCs321B%2B6U9S%2BPTZ%2FTz3Xzzg9fNVOsUTdPE0H337q%2Bm1foEraiFqrrlFiLVQu6qjI033KVmuvPoDeTeYVAUKHjaPRUrHntPr7nSFbQgrhwbsUcPMV%2Fx2q3eat%2FRcCqkDCHbPeNMzPFlMVU7vCoYsVoQX%2F6UggbyCZgeyDEVQ1S2g%2BWaGo3Ulte9SGxks8NSRY7IZBRNf4n7yLYyZLKeZCKff%2BsmdZ6D7jfENyZwWvLzmAh9Kzet48RlwzRniFmRkf4Z6neAbWpCyLvpqMHkufoq8meksA5%2BeW16J5cuLHqg6PkhrD5arIo3F7FT5ulXHPjowEiMKrnhsIGOqUBo8R7%2F72uAIsRQATzOzRxIIfF5Og%2Fd1U4vLHr7IWT1xFWmAbMDIOCehF4aF7UZDtac8j575Lj%2BQXQZ0XEMuMYwy%2FxWkb7EHZMho7Yr9WXFTYcZ%2BmCEFJyFRhBebzcdXd9ypgtwqBT7ZgTmEIhMbO6F2rZ6YS%2BRMDLV3al98%2FLaP2pwGa91oi1YjfxsXrln%2FlcyrkBym9RpBhDiAIavjWuvg5wGr4m&X-Amz-Signature=9e9810ce9dc40052bc0d78dfe4b776d36934abf62afc783cea53106a91941f30&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
