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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5MBWPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vWv8chnqNkIGPtwHVar2JpkNwei431nQtjuiCRgcMAiEAgVuxK9N1HoP6cy545kA93XXeQktfT5SlB3pJpbAVTXwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkQsRzCKAYRCyqmuSrcA9YBUiwjBAsmLDG1dwISOibpWbjzM64JbJeg8YIIec5LzsTuDxVIfbILgVAiQfFBer%2FpesN7EZV%2BvInCbQOINvrnbTiK1MvUp9%2BSsxs86ZW3T0CtrcrxIgL%2Fqkw%2ByYaKcKs7ViBiVM6zvgleCunSZQcDbvtPTbTr7IXAKjnBPHeAXsPiZY9TvhZkrtm9AY%2BwXfxXWwhAoDh3fJkum9jFyTDFQkXCpr0m6QsucOjkR%2F0b5vNriPon1MFtaIP0QR7t%2FCniGfpaRg%2FtzBOuadTjPjSWnTNR4ZbhinQPe2izgQhkh9LDBlLQtaiLi0g3HiEqej7UAhdK8FpzEZFVxDbatkx3k7N9BzzpOcpkHV%2BmTwKpVaM72CuXFRrJz7L8jm5NK29il9jOMCKg1h4H%2FQ6f2gSOF95lYvelhyMQBJEU8fvJLboAMZ8OUgpqgYz5JcoLfuyTGQ5b9DZyY0tOI8d%2BpbxVB5CImuJG4xq1NFXPbgW%2FtxSVFwYyAZ7zsSvUHpszI3VRzzLkQ%2FsJC0QC0RWp%2FwYIp8Jgq8HRQM44%2FKWLnTy%2FdMorDwb21KFOP3wPusiWK%2BosUTCNiJq72p0eUZ3Khd7uIrFEuaezGfi9PpFx3yhaJL6384TIWoY4DB9xML%2BQrsQGOqUBvZEttewVsT9ToZ2%2BAiktacnYNyexOSEyy6GRJ%2F074WIfno4NEGv%2FwiGfIpb9kJ%2Fk74Ljn1PaXcdpORyXvWzg%2Bi5zX%2Bca%2FgpHmh%2Bwc%2Faiz%2FJgJLCdTb4ueNwaDddvDrGsmu6t26pAY2BHIaITobuZHqdCm2qdw3f2q9mzIhMxNTttjsUAmlVdy%2Fn2pwJpRURb6%2FJ74GjQxgnRU590Ao05kBOqODab&X-Amz-Signature=bdf0e1e8df2334361f32d3250119ffd5b9986757538c5bb3c43bb0a3b1d208ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5MBWPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vWv8chnqNkIGPtwHVar2JpkNwei431nQtjuiCRgcMAiEAgVuxK9N1HoP6cy545kA93XXeQktfT5SlB3pJpbAVTXwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkQsRzCKAYRCyqmuSrcA9YBUiwjBAsmLDG1dwISOibpWbjzM64JbJeg8YIIec5LzsTuDxVIfbILgVAiQfFBer%2FpesN7EZV%2BvInCbQOINvrnbTiK1MvUp9%2BSsxs86ZW3T0CtrcrxIgL%2Fqkw%2ByYaKcKs7ViBiVM6zvgleCunSZQcDbvtPTbTr7IXAKjnBPHeAXsPiZY9TvhZkrtm9AY%2BwXfxXWwhAoDh3fJkum9jFyTDFQkXCpr0m6QsucOjkR%2F0b5vNriPon1MFtaIP0QR7t%2FCniGfpaRg%2FtzBOuadTjPjSWnTNR4ZbhinQPe2izgQhkh9LDBlLQtaiLi0g3HiEqej7UAhdK8FpzEZFVxDbatkx3k7N9BzzpOcpkHV%2BmTwKpVaM72CuXFRrJz7L8jm5NK29il9jOMCKg1h4H%2FQ6f2gSOF95lYvelhyMQBJEU8fvJLboAMZ8OUgpqgYz5JcoLfuyTGQ5b9DZyY0tOI8d%2BpbxVB5CImuJG4xq1NFXPbgW%2FtxSVFwYyAZ7zsSvUHpszI3VRzzLkQ%2FsJC0QC0RWp%2FwYIp8Jgq8HRQM44%2FKWLnTy%2FdMorDwb21KFOP3wPusiWK%2BosUTCNiJq72p0eUZ3Khd7uIrFEuaezGfi9PpFx3yhaJL6384TIWoY4DB9xML%2BQrsQGOqUBvZEttewVsT9ToZ2%2BAiktacnYNyexOSEyy6GRJ%2F074WIfno4NEGv%2FwiGfIpb9kJ%2Fk74Ljn1PaXcdpORyXvWzg%2Bi5zX%2Bca%2FgpHmh%2Bwc%2Faiz%2FJgJLCdTb4ueNwaDddvDrGsmu6t26pAY2BHIaITobuZHqdCm2qdw3f2q9mzIhMxNTttjsUAmlVdy%2Fn2pwJpRURb6%2FJ74GjQxgnRU590Ao05kBOqODab&X-Amz-Signature=68a7521544d7bcb8b323c2c6bbd82f21083bd331b97a5585281c63d552db30a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5MBWPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vWv8chnqNkIGPtwHVar2JpkNwei431nQtjuiCRgcMAiEAgVuxK9N1HoP6cy545kA93XXeQktfT5SlB3pJpbAVTXwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkQsRzCKAYRCyqmuSrcA9YBUiwjBAsmLDG1dwISOibpWbjzM64JbJeg8YIIec5LzsTuDxVIfbILgVAiQfFBer%2FpesN7EZV%2BvInCbQOINvrnbTiK1MvUp9%2BSsxs86ZW3T0CtrcrxIgL%2Fqkw%2ByYaKcKs7ViBiVM6zvgleCunSZQcDbvtPTbTr7IXAKjnBPHeAXsPiZY9TvhZkrtm9AY%2BwXfxXWwhAoDh3fJkum9jFyTDFQkXCpr0m6QsucOjkR%2F0b5vNriPon1MFtaIP0QR7t%2FCniGfpaRg%2FtzBOuadTjPjSWnTNR4ZbhinQPe2izgQhkh9LDBlLQtaiLi0g3HiEqej7UAhdK8FpzEZFVxDbatkx3k7N9BzzpOcpkHV%2BmTwKpVaM72CuXFRrJz7L8jm5NK29il9jOMCKg1h4H%2FQ6f2gSOF95lYvelhyMQBJEU8fvJLboAMZ8OUgpqgYz5JcoLfuyTGQ5b9DZyY0tOI8d%2BpbxVB5CImuJG4xq1NFXPbgW%2FtxSVFwYyAZ7zsSvUHpszI3VRzzLkQ%2FsJC0QC0RWp%2FwYIp8Jgq8HRQM44%2FKWLnTy%2FdMorDwb21KFOP3wPusiWK%2BosUTCNiJq72p0eUZ3Khd7uIrFEuaezGfi9PpFx3yhaJL6384TIWoY4DB9xML%2BQrsQGOqUBvZEttewVsT9ToZ2%2BAiktacnYNyexOSEyy6GRJ%2F074WIfno4NEGv%2FwiGfIpb9kJ%2Fk74Ljn1PaXcdpORyXvWzg%2Bi5zX%2Bca%2FgpHmh%2Bwc%2Faiz%2FJgJLCdTb4ueNwaDddvDrGsmu6t26pAY2BHIaITobuZHqdCm2qdw3f2q9mzIhMxNTttjsUAmlVdy%2Fn2pwJpRURb6%2FJ74GjQxgnRU590Ao05kBOqODab&X-Amz-Signature=974a0f7163c34f47022a1428d6c3d303fc41e8597a2875b73f15afbab67e3fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ARTBDO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFZwrTaVbTTtSD4573LLUk1HbzeYU1vFYgBjzXoxU89AIgYbkmLrUNQg2UAn9CfE174ionABI37QNIakK2R%2FzkU%2B8qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvmZd2V76UZX%2FoRdSrcA16pEmLYxa90wKr7OigIM5qXRGmc3uEBrn6g1plZ1Mn5pzrNour6TEriULoNa1pYHFHHXzoqPl2Znr%2Ftt16tA7LOLS1LMmLjXhPSm9N4QNyJ1Kw5TT2sIU0JNHZuvfoIsDZIBLTg1vgCCd7306seSlN1UnO7gVgGC8OV%2FzMk7ZSrEidoHEev4KJIqbU4na4Yst%2F3v%2BkNcICt0mhOqMyjZWyJtSYIvNysg8zgv8cfO29bgwG%2FCDmXPpOUS9xd9ym3HAh10xs4KC4uk3avjfTqyH2LZy0GfWccwBhphMKsgCloVjh6AEAJPZFTNaDQhXCmH%2FX0yRcTlrr%2Booc9zMFKdr2Ei%2BkaQGQ9IsEDi%2FWoME%2FzMW1E0udCmdOby9HMTLtsVF9ti48pX%2FRzzwQQHVgybiOOt4zkwcaH97BbhUoeEDsl%2BjSsHQl0LN3%2Fy0kJs2WecsW5BJzfDoVWl8Cttim0975HOctcvFvJRIXXn1lOd11MN%2FuFpwVwlmT6LSN%2F6w8g0ubDuvmJv%2F3PR0EFx9F3ofJVMWMLRSrI6pLIHM21TvjwsqPZ3HN9jSMq067E8fAQ%2BSfsObcFHNEYiaFUNGqX%2BmJhehb%2Be9UnAW2m666MwP1tXKg6cUQwnp2CIC0xMNOQrsQGOqUBl9yKwYeEYC3vL8wmZjuH6Uw5VZV%2BJPagX5e0AMke4AOQKRgPDIsMwmXRLUHcKIYmAB0A5xBYjZvEvO%2FUGOSGbPDm1QP%2BODty4lnQP8Y%2F10MW9xX%2BNCIwWaKPmkdcVEFHEmU0i%2BT5BcedRSFLLt%2FuoC1h7GVaNqkGjETJZmIejjTOdn0XWTbAvcf2UM6shcTEyI42rwZLXligbiOLVKahieZH43G8&X-Amz-Signature=3eafbc3095dd1881c75a159365d6293ca2c733ad87b55a42d6967e8335ce3c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DMZWP7%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6wkEu2dDqQeNAtZwQR5M4INgw9Qq3waMhQnhxVKLPAiA%2BMjJKP6zXEaeH4hQaMulOAYJOZHStlVYLjVcLm5noxyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0SEf3wOoPTvz6LgkKtwDdw0fYSrhcZCmW7HjrvyvTfM1bQIiVExAiRAG4%2FQSeQgOHf3gkrWtLh6WEfP%2Bx%2BMH2p2B4nuV4LSZp6LWvRHGUKiQ2nZxAMBQZCuG11mkRZNhyJAMRBVZiD%2Bd4rU7X%2BE0nuFOeGQR6DGpSsPo8AFhXwr72n7td6n1Rk8tP8rSQCchu7%2FZfvqODfghH9eFNGMxiM0eTyPSknutYmHOs88sD4mhYEqKtBzYHoDamwbMNGG0de6CbiO7e3Op6EuuX8wm9%2FVdh1XBkAEbO52dyWU2smDBNHRqjHELSHI1aGRVf8XCnGYrDNSuVQeLCXe4NRYxd9vW4JtpI02vtkV8svIyxtG3%2B7h%2B%2B%2FlqTWuZoxKuAQydiFTFeXc%2B3cwP7q71jDa62USguNqiORZKWmn0ZVa8nyHChdG202%2FckrsrUGd%2FZgESys5g965%2FAotTuiCJjViLCKweadqLiZW%2FY4sPPuHO8YtR%2FePoomheO1MyHUwXu9Q46t%2FOvlvH7e0U8n40s%2Br3YYgle9jZ4exEsmNjsxnwAAKweHl8SAkCOyxKzuC3armnkHh6Y%2BRwjCRnW5lcnIpfbzxVZlqJq%2Bh3jiNkIEw16BeKnT98xCgLceFPu%2FT9M1IP3bNjDg%2F5eLE7CDEw9JCuxAY6pgHflXjzzpe3PW4YJS%2FpdA06wA%2BfCrtv%2BSteqjIKXPvhD0e7zd9j5FhNjjZO0GSQ2hEvKHT0Z1HcIAth2wotJBPmPu8ZYnewjL20LTQdv552PuYdWH5nuSke7KdH%2FBKXf7Bm1YfgDWnLRlqmxL3hiVo7%2FvjVaeIY4Wy3i0m66KRrx9PTCFn%2BBFU0DIa1lMU2oqMrxaWmDk3VR63ooqFysHkr4xgNyJQ4&X-Amz-Signature=d3320c54b9f29defb19dbaa0a908d58d32f370bbb03ed9c52fa5d363f607ae7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR5MBWPH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vWv8chnqNkIGPtwHVar2JpkNwei431nQtjuiCRgcMAiEAgVuxK9N1HoP6cy545kA93XXeQktfT5SlB3pJpbAVTXwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkQsRzCKAYRCyqmuSrcA9YBUiwjBAsmLDG1dwISOibpWbjzM64JbJeg8YIIec5LzsTuDxVIfbILgVAiQfFBer%2FpesN7EZV%2BvInCbQOINvrnbTiK1MvUp9%2BSsxs86ZW3T0CtrcrxIgL%2Fqkw%2ByYaKcKs7ViBiVM6zvgleCunSZQcDbvtPTbTr7IXAKjnBPHeAXsPiZY9TvhZkrtm9AY%2BwXfxXWwhAoDh3fJkum9jFyTDFQkXCpr0m6QsucOjkR%2F0b5vNriPon1MFtaIP0QR7t%2FCniGfpaRg%2FtzBOuadTjPjSWnTNR4ZbhinQPe2izgQhkh9LDBlLQtaiLi0g3HiEqej7UAhdK8FpzEZFVxDbatkx3k7N9BzzpOcpkHV%2BmTwKpVaM72CuXFRrJz7L8jm5NK29il9jOMCKg1h4H%2FQ6f2gSOF95lYvelhyMQBJEU8fvJLboAMZ8OUgpqgYz5JcoLfuyTGQ5b9DZyY0tOI8d%2BpbxVB5CImuJG4xq1NFXPbgW%2FtxSVFwYyAZ7zsSvUHpszI3VRzzLkQ%2FsJC0QC0RWp%2FwYIp8Jgq8HRQM44%2FKWLnTy%2FdMorDwb21KFOP3wPusiWK%2BosUTCNiJq72p0eUZ3Khd7uIrFEuaezGfi9PpFx3yhaJL6384TIWoY4DB9xML%2BQrsQGOqUBvZEttewVsT9ToZ2%2BAiktacnYNyexOSEyy6GRJ%2F074WIfno4NEGv%2FwiGfIpb9kJ%2Fk74Ljn1PaXcdpORyXvWzg%2Bi5zX%2Bca%2FgpHmh%2Bwc%2Faiz%2FJgJLCdTb4ueNwaDddvDrGsmu6t26pAY2BHIaITobuZHqdCm2qdw3f2q9mzIhMxNTttjsUAmlVdy%2Fn2pwJpRURb6%2FJ74GjQxgnRU590Ao05kBOqODab&X-Amz-Signature=1b0ee737f7111f636bbec1a752b25e6887ea149d8ede3a893ff1b4f2874bd491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
