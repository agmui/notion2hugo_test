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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZ7Z4GK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNBeR7CAb6pUMeII9xZI52uVrCTaE9YLGTtPU8MeNLUQIgLdTRUhzN%2FolA2sZPhsJ7lVeXvIhHKqq2S%2B79fKvDx%2FEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zEkf4vehsNSuQxCrcA02b2F7MYikdIsW6f0GgZYJFLxfoPdr1%2FL9cbGgb2%2FCu7PYyIUTH5cURM6%2FFHeJIo8%2FF255Xj3R8u4%2ByA4bANE8NLa5AXWs38OCQDkvbTAqq9XDL6wxvpJbqeWMiDfarQtB9v9in9yUSlOiIaN%2BvUJ8DyaQgwDqCVManryr58fl7LfboVkG8zqUBcUaXRmIc0ZGYr8O4K7lLRja4GYLl%2B82QFQf8yhme%2Fi6kVQz8Bzx4Br8lB9CXtWy4S3dB%2FBbVoqAy3hgeTvmnkeznMHIYoxZAewiOJI9dubhFq1rIXUhdPVWGrk6uG7Mi49TjlJyGh%2BzejUVsjIb8D846HlD9SmL7H7JtjPtebCtbwOL%2BOp6oFFQHMHColN7n7VcLphezudHpB66uzH1qCc%2Fg7XBNAjehUdoZzDX2cZumLexsq3ZXWgw5V68lAhjfY4cHeze5ly0FN%2FcqeLaLLpYPR35OwtpA5DZD0C3GLgCWTH1tntXXRL%2FFsOddxVhdQkuWAJeAnU7XF4BY5IaIv7y%2Bvyfrxcq95CX7jkvhk0RcfYdyCW3A5zbrkNxxTZ%2FYDvBDeVe3BmNAyTKo42tiZ1QLhylA5JDMj4M1lZP%2Bhf76Tp9Ub6c21CdHPVMcOx02EE9VMKGIn8IGOqUBFNLjMqzi2XDrGrGmNivxdxCAquLIQEDFAS%2BYSP1COk2rZN47uneeDfgy2PXKA%2FLCrF46ibzTLzUS9LjX49bSxVjAX09ffKyB6%2FUEBi8M4ye1m9Z12%2BNLy9IRX3g508VktnOr0M6ILEDt1K4QWZgcB3KmNCrzJ%2Fq82PibeY534U9QDg9Hj154WtoI48PE%2Fmknrffqx1HmLal7GOx88fUk0CNl1f5e&X-Amz-Signature=cc17ca7983e27d35c960f2f5cd6b6be34fcae210d72aa123d39c9e6093cec0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZ7Z4GK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNBeR7CAb6pUMeII9xZI52uVrCTaE9YLGTtPU8MeNLUQIgLdTRUhzN%2FolA2sZPhsJ7lVeXvIhHKqq2S%2B79fKvDx%2FEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zEkf4vehsNSuQxCrcA02b2F7MYikdIsW6f0GgZYJFLxfoPdr1%2FL9cbGgb2%2FCu7PYyIUTH5cURM6%2FFHeJIo8%2FF255Xj3R8u4%2ByA4bANE8NLa5AXWs38OCQDkvbTAqq9XDL6wxvpJbqeWMiDfarQtB9v9in9yUSlOiIaN%2BvUJ8DyaQgwDqCVManryr58fl7LfboVkG8zqUBcUaXRmIc0ZGYr8O4K7lLRja4GYLl%2B82QFQf8yhme%2Fi6kVQz8Bzx4Br8lB9CXtWy4S3dB%2FBbVoqAy3hgeTvmnkeznMHIYoxZAewiOJI9dubhFq1rIXUhdPVWGrk6uG7Mi49TjlJyGh%2BzejUVsjIb8D846HlD9SmL7H7JtjPtebCtbwOL%2BOp6oFFQHMHColN7n7VcLphezudHpB66uzH1qCc%2Fg7XBNAjehUdoZzDX2cZumLexsq3ZXWgw5V68lAhjfY4cHeze5ly0FN%2FcqeLaLLpYPR35OwtpA5DZD0C3GLgCWTH1tntXXRL%2FFsOddxVhdQkuWAJeAnU7XF4BY5IaIv7y%2Bvyfrxcq95CX7jkvhk0RcfYdyCW3A5zbrkNxxTZ%2FYDvBDeVe3BmNAyTKo42tiZ1QLhylA5JDMj4M1lZP%2Bhf76Tp9Ub6c21CdHPVMcOx02EE9VMKGIn8IGOqUBFNLjMqzi2XDrGrGmNivxdxCAquLIQEDFAS%2BYSP1COk2rZN47uneeDfgy2PXKA%2FLCrF46ibzTLzUS9LjX49bSxVjAX09ffKyB6%2FUEBi8M4ye1m9Z12%2BNLy9IRX3g508VktnOr0M6ILEDt1K4QWZgcB3KmNCrzJ%2Fq82PibeY534U9QDg9Hj154WtoI48PE%2Fmknrffqx1HmLal7GOx88fUk0CNl1f5e&X-Amz-Signature=0075135dae6e5901e5758e0d81a1d9476a8d532345adfb2c21e1586d4c14db3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZ7Z4GK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNBeR7CAb6pUMeII9xZI52uVrCTaE9YLGTtPU8MeNLUQIgLdTRUhzN%2FolA2sZPhsJ7lVeXvIhHKqq2S%2B79fKvDx%2FEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zEkf4vehsNSuQxCrcA02b2F7MYikdIsW6f0GgZYJFLxfoPdr1%2FL9cbGgb2%2FCu7PYyIUTH5cURM6%2FFHeJIo8%2FF255Xj3R8u4%2ByA4bANE8NLa5AXWs38OCQDkvbTAqq9XDL6wxvpJbqeWMiDfarQtB9v9in9yUSlOiIaN%2BvUJ8DyaQgwDqCVManryr58fl7LfboVkG8zqUBcUaXRmIc0ZGYr8O4K7lLRja4GYLl%2B82QFQf8yhme%2Fi6kVQz8Bzx4Br8lB9CXtWy4S3dB%2FBbVoqAy3hgeTvmnkeznMHIYoxZAewiOJI9dubhFq1rIXUhdPVWGrk6uG7Mi49TjlJyGh%2BzejUVsjIb8D846HlD9SmL7H7JtjPtebCtbwOL%2BOp6oFFQHMHColN7n7VcLphezudHpB66uzH1qCc%2Fg7XBNAjehUdoZzDX2cZumLexsq3ZXWgw5V68lAhjfY4cHeze5ly0FN%2FcqeLaLLpYPR35OwtpA5DZD0C3GLgCWTH1tntXXRL%2FFsOddxVhdQkuWAJeAnU7XF4BY5IaIv7y%2Bvyfrxcq95CX7jkvhk0RcfYdyCW3A5zbrkNxxTZ%2FYDvBDeVe3BmNAyTKo42tiZ1QLhylA5JDMj4M1lZP%2Bhf76Tp9Ub6c21CdHPVMcOx02EE9VMKGIn8IGOqUBFNLjMqzi2XDrGrGmNivxdxCAquLIQEDFAS%2BYSP1COk2rZN47uneeDfgy2PXKA%2FLCrF46ibzTLzUS9LjX49bSxVjAX09ffKyB6%2FUEBi8M4ye1m9Z12%2BNLy9IRX3g508VktnOr0M6ILEDt1K4QWZgcB3KmNCrzJ%2Fq82PibeY534U9QDg9Hj154WtoI48PE%2Fmknrffqx1HmLal7GOx88fUk0CNl1f5e&X-Amz-Signature=fcdd1af785bfb569d58ed3a3a613d57a2307a6621fce468fb41f922955516d26&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLTFH6Q3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbPa5MgOEBR54I3tNCcaEDJmDG5ZU1s09znITNaqYhGwIgJ7b2EOFeMW36VNY3HtVCt2PeiB05%2BF8By7Ebb3EmSK0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxYCJQ8X6tAJXqSjCrcA4xsFDWmc3D8yJkVWufnIDvyYx2IedqINNJC19Ql5w4BYtuBIfa1uWOV%2BmjxxsuOgGyh6SXJ4GyzwCJ9pBMT9kx%2FsXiCoMYF7zgibWuwITpdRPpAJvoNocAl3i4ZQa1rK8zFRL%2FlRMrgCyvFTMqVb5U4ETK2WeOoT6RLOkvmjW9OGAKNLYAhQm6%2FDQfGZD%2BOYyC5kcOXXKyeDIzWbz%2FbBcwrUg0OaiC%2FV83gvasFhotHywclw0TGL2cQ8R28WbL%2B3JB3AAVL1kRT7Gc7%2FHv96%2BcSGipJ%2BKmdZgvmHkoBjMjWb3HnkYw8yFoDGEVoNomSCLOcZfA7n7fwADCIX19Mf2TxT5KCnqekhzy3UFKx8uKIitrAQOMQo%2FeG6Tz6trRlyYfjTNKDBYbjevxz4b%2FyEvblHEW9QLRfiZFv3F4HNZpWOhNrFcENn73NTww%2B5HCe1o9I6xj3mn5iTW6cLn7a7tnKXmN7rq%2FUqsQoQN9TtGHKXssEct%2FqsBWroFZgrIPwT0xEn4PqUcOZK1%2Fl7mAcKjqZTv8jauqDNTUO3JgX1rD%2F%2BBbHGnaJaEPEgW8W4OKw1MQDdFNx9euA4Af6DKCOCRNR9Wkpd4KypyduoZbSw%2BfsT3Lng6o0eoO%2Fq8GLMMCHn8IGOqUBVLfgeSCvKmyy60cc2ARoGtIhhxFD6bdOOIgW8L%2BxxQDp6GvEPPjyjHwVJLoatFj8pFsB4yMrp6Q5JP1wrlVeY3FXU%2BHKodb%2BP%2BV3mTKzMltmguzOGy%2F69bzamEWKjRTGgNFGzxDBplgjEUk%2BC27luHvNCak0HGvcG5wnDMN%2F%2BEwXxphfgm9cH9kvByyUF36dVE84AeynTI9DClhZeSPAgv0RH0%2FQ&X-Amz-Signature=536e8aea53c3d082c1ff334db6ebffd322e8d530ddc77afc45b7a804fbfaf47e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI5X73ST%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAZKDRdmz6YgeOSV9uUOwu968KW13U%2Bv3yuDAzA9paBwIgFObseYQ20IhxPKON8xyE2ADYcyNjo9Qplw04wjv4dOwqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKB6PcpINDSXe3VVEyrcA3Weh0Odaw4G900C5279KRBITG7ypTYsvlvBnLywk%2FIJxp%2FfA1jBM8FPChKG0%2FGivHlpkMnVnCEvJQ8Rj1%2Fr3KZn065DSz3n46upQKz%2FNkm%2B7EQ7VVpZ9ySKkVQSdkYKm%2FzYfV%2BUneFTDNGK9jxZ4lP%2Bd3kuuojH33LW%2BayrDF0GK0Vy415qNnPSkjYqB56AUmrKNcEQik1971Whpc35iXVn58tjVuTjn0LnKxMNP26NWZADw1ku1UcQis9YT9rUO2OysZdYzG7NmjwzRq56IAe5WJCCUsTl7Y5x5fyrpHESf6z6BxBdOCVpwNccD3qd%2B%2BJH2q1YPhicZrV%2Fh8ScRn7T1UAydPXyU67EsaB4fhdBoK3OFfz7MzcSjPIiW5UEr2zQt%2FMENY6BEsFPBLsZairJga9%2Fcah%2Fx8Ugk4QdjhfVznXAAkisxNLPFIxq09JNP6z63Op6yu5WKBh%2BThEUK0viVA7pImb0FHSxAlXJpE6plpbTdGi0E7oRc64h%2FRxCxeHujXkYwVY%2FkMGaEes3dHknlpJzFhBbUrYTPUQMco%2F%2Fvrit8GRV3yXvUnhjUr58WGFvE4aujbcx020R1VmeDVoXOOo4z5XhSRNr2lvBG%2F8t%2BIyOzTvLrwmUn65PMNKIn8IGOqUBUMwfzf0IBXQThLnzFGvMRMFcBstcPFSgsJ6GX2KIANX4%2BlhfGT%2BJG55v0GNzxRBY%2FY%2BSy4SICetJA78LCTrg04OKThRwRzmOisU3exZfu8%2B7bvdCDZMOT%2Bi7NLIycoMuNyNfNpfZ0SCoD%2F%2Fieyqih4B1kFkYnBLd%2B2M%2FY6g5rJehnmQ%2FHv36MMFBRRAmVRSGL6et23Xaqj4v%2Ba6CwYgLcbF9vuIv&X-Amz-Signature=8b2353a8ab8044532982aa50e7a11585b6aa22ba67cb8f79d7764f94f1ba68ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZ7Z4GK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNBeR7CAb6pUMeII9xZI52uVrCTaE9YLGTtPU8MeNLUQIgLdTRUhzN%2FolA2sZPhsJ7lVeXvIhHKqq2S%2B79fKvDx%2FEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1zEkf4vehsNSuQxCrcA02b2F7MYikdIsW6f0GgZYJFLxfoPdr1%2FL9cbGgb2%2FCu7PYyIUTH5cURM6%2FFHeJIo8%2FF255Xj3R8u4%2ByA4bANE8NLa5AXWs38OCQDkvbTAqq9XDL6wxvpJbqeWMiDfarQtB9v9in9yUSlOiIaN%2BvUJ8DyaQgwDqCVManryr58fl7LfboVkG8zqUBcUaXRmIc0ZGYr8O4K7lLRja4GYLl%2B82QFQf8yhme%2Fi6kVQz8Bzx4Br8lB9CXtWy4S3dB%2FBbVoqAy3hgeTvmnkeznMHIYoxZAewiOJI9dubhFq1rIXUhdPVWGrk6uG7Mi49TjlJyGh%2BzejUVsjIb8D846HlD9SmL7H7JtjPtebCtbwOL%2BOp6oFFQHMHColN7n7VcLphezudHpB66uzH1qCc%2Fg7XBNAjehUdoZzDX2cZumLexsq3ZXWgw5V68lAhjfY4cHeze5ly0FN%2FcqeLaLLpYPR35OwtpA5DZD0C3GLgCWTH1tntXXRL%2FFsOddxVhdQkuWAJeAnU7XF4BY5IaIv7y%2Bvyfrxcq95CX7jkvhk0RcfYdyCW3A5zbrkNxxTZ%2FYDvBDeVe3BmNAyTKo42tiZ1QLhylA5JDMj4M1lZP%2Bhf76Tp9Ub6c21CdHPVMcOx02EE9VMKGIn8IGOqUBFNLjMqzi2XDrGrGmNivxdxCAquLIQEDFAS%2BYSP1COk2rZN47uneeDfgy2PXKA%2FLCrF46ibzTLzUS9LjX49bSxVjAX09ffKyB6%2FUEBi8M4ye1m9Z12%2BNLy9IRX3g508VktnOr0M6ILEDt1K4QWZgcB3KmNCrzJ%2Fq82PibeY534U9QDg9Hj154WtoI48PE%2Fmknrffqx1HmLal7GOx88fUk0CNl1f5e&X-Amz-Signature=873d194dcbe0f16433a499fd33122265aa4a6ee4388d12a7218baa559a3e18c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
