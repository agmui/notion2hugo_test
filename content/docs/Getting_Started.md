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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X3D5IU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfSjJoi4v2LFqp%2BwQawa6uxvClcPjRt835K%2BNJP%2FnDqAiEAy7%2FdCFO9UjBKTmXzi8i9fYkZQP14%2BPSy4fWH9v4c%2BwMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNr80fsY%2Fj8v9EvfSrcAzx%2FS3sewEBFx8vxbgAh2sXJ3hXFV1K6eSLaJf5MkOsegW7UU0SzrrxLFGJboy6iHoX2sLnngKXmUVhoJjq7U3iAbe8pyTiXuCe3V87q%2FoX2vVQiIgo9NSIfMXBFbfFlgEF6mV9U9EV6auCmyxuAhRoOCPQnt1NahagkuOsZRVUcz%2FVVWZIT%2BtH0vptLnyRFJYuwIGMeuKnxJR%2FkpOk7LhK6FSFaFfFbr9%2FpCXNfeTfyKMCCt16%2Ft6Uvrvaw7txUjjY%2F7w%2FmpIvO9Rde9v6tHWQruDDUExcHRHxqM9VsK%2FHQXcDBCyuJhypBXJl8mIVNqrnfYk%2FsgC3o3EKW7mKYZMSe4Y2dE8hTBuUkUZQ6dZ0Xnu9Fi8xPc9z9D%2BxLGmDC2vBlCq%2B2RVEBDENLQyjLUZzm1%2BE%2B0Z8r7v6KfrW51bzztdLA3rruG54c0fFYO7XUrBjwBdWXVJoXR5N5Au%2BplL0zO%2FXxNk07XxKpczqL6YfsJAw3WwXnIU4eh4fA1n4st6r60V96zasNJfsnJ8CAGXXmuLwXMO3ZB98poPMUiXUgHhB1sk%2F5MsR9PFhpRcMVx7cyO5mBjLlSOWF%2F1EcLQjao4SRc6rv66yfXHBl2GBd3yhQCbsJjhwBFU0i6MP2zzsIGOqUB6RDKP%2FfJUswaThHIZvmtQ9gXGYjKLswlqH3TbqUbMfy%2FXXGuXT8zIcQXIg%2BmiPy5cNVyvQVwIaD38GZcz6WwpgXujcqthf%2Fa6ddBobbxs9MGw4Osm7G9vuiFcAuUM8AeyIpNt56PyQ401eOXOBT7OVskbAmqs36fwG0lSM3CHoukm%2F81AqdkgIHInWRs%2BDkJhE1CrcHKu8qsid2sC69vGXbUMG18&X-Amz-Signature=6835faa29d726dda7f4b8c57be424e83dc998c348284cc094c77d6a5f56042ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X3D5IU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfSjJoi4v2LFqp%2BwQawa6uxvClcPjRt835K%2BNJP%2FnDqAiEAy7%2FdCFO9UjBKTmXzi8i9fYkZQP14%2BPSy4fWH9v4c%2BwMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNr80fsY%2Fj8v9EvfSrcAzx%2FS3sewEBFx8vxbgAh2sXJ3hXFV1K6eSLaJf5MkOsegW7UU0SzrrxLFGJboy6iHoX2sLnngKXmUVhoJjq7U3iAbe8pyTiXuCe3V87q%2FoX2vVQiIgo9NSIfMXBFbfFlgEF6mV9U9EV6auCmyxuAhRoOCPQnt1NahagkuOsZRVUcz%2FVVWZIT%2BtH0vptLnyRFJYuwIGMeuKnxJR%2FkpOk7LhK6FSFaFfFbr9%2FpCXNfeTfyKMCCt16%2Ft6Uvrvaw7txUjjY%2F7w%2FmpIvO9Rde9v6tHWQruDDUExcHRHxqM9VsK%2FHQXcDBCyuJhypBXJl8mIVNqrnfYk%2FsgC3o3EKW7mKYZMSe4Y2dE8hTBuUkUZQ6dZ0Xnu9Fi8xPc9z9D%2BxLGmDC2vBlCq%2B2RVEBDENLQyjLUZzm1%2BE%2B0Z8r7v6KfrW51bzztdLA3rruG54c0fFYO7XUrBjwBdWXVJoXR5N5Au%2BplL0zO%2FXxNk07XxKpczqL6YfsJAw3WwXnIU4eh4fA1n4st6r60V96zasNJfsnJ8CAGXXmuLwXMO3ZB98poPMUiXUgHhB1sk%2F5MsR9PFhpRcMVx7cyO5mBjLlSOWF%2F1EcLQjao4SRc6rv66yfXHBl2GBd3yhQCbsJjhwBFU0i6MP2zzsIGOqUB6RDKP%2FfJUswaThHIZvmtQ9gXGYjKLswlqH3TbqUbMfy%2FXXGuXT8zIcQXIg%2BmiPy5cNVyvQVwIaD38GZcz6WwpgXujcqthf%2Fa6ddBobbxs9MGw4Osm7G9vuiFcAuUM8AeyIpNt56PyQ401eOXOBT7OVskbAmqs36fwG0lSM3CHoukm%2F81AqdkgIHInWRs%2BDkJhE1CrcHKu8qsid2sC69vGXbUMG18&X-Amz-Signature=85b3ca2af14e572ec0f9fd64a3d989cd0023c9d614d86a1abd098ee75e1e00a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X3D5IU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfSjJoi4v2LFqp%2BwQawa6uxvClcPjRt835K%2BNJP%2FnDqAiEAy7%2FdCFO9UjBKTmXzi8i9fYkZQP14%2BPSy4fWH9v4c%2BwMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNr80fsY%2Fj8v9EvfSrcAzx%2FS3sewEBFx8vxbgAh2sXJ3hXFV1K6eSLaJf5MkOsegW7UU0SzrrxLFGJboy6iHoX2sLnngKXmUVhoJjq7U3iAbe8pyTiXuCe3V87q%2FoX2vVQiIgo9NSIfMXBFbfFlgEF6mV9U9EV6auCmyxuAhRoOCPQnt1NahagkuOsZRVUcz%2FVVWZIT%2BtH0vptLnyRFJYuwIGMeuKnxJR%2FkpOk7LhK6FSFaFfFbr9%2FpCXNfeTfyKMCCt16%2Ft6Uvrvaw7txUjjY%2F7w%2FmpIvO9Rde9v6tHWQruDDUExcHRHxqM9VsK%2FHQXcDBCyuJhypBXJl8mIVNqrnfYk%2FsgC3o3EKW7mKYZMSe4Y2dE8hTBuUkUZQ6dZ0Xnu9Fi8xPc9z9D%2BxLGmDC2vBlCq%2B2RVEBDENLQyjLUZzm1%2BE%2B0Z8r7v6KfrW51bzztdLA3rruG54c0fFYO7XUrBjwBdWXVJoXR5N5Au%2BplL0zO%2FXxNk07XxKpczqL6YfsJAw3WwXnIU4eh4fA1n4st6r60V96zasNJfsnJ8CAGXXmuLwXMO3ZB98poPMUiXUgHhB1sk%2F5MsR9PFhpRcMVx7cyO5mBjLlSOWF%2F1EcLQjao4SRc6rv66yfXHBl2GBd3yhQCbsJjhwBFU0i6MP2zzsIGOqUB6RDKP%2FfJUswaThHIZvmtQ9gXGYjKLswlqH3TbqUbMfy%2FXXGuXT8zIcQXIg%2BmiPy5cNVyvQVwIaD38GZcz6WwpgXujcqthf%2Fa6ddBobbxs9MGw4Osm7G9vuiFcAuUM8AeyIpNt56PyQ401eOXOBT7OVskbAmqs36fwG0lSM3CHoukm%2F81AqdkgIHInWRs%2BDkJhE1CrcHKu8qsid2sC69vGXbUMG18&X-Amz-Signature=7939c8ff349d46e4deec645f624b80a0711b0147d38dc42866ad91c6fee33fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHK7FCJ3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3bRrpm27wXQ7FcSQke7ddTxkTt9LtjJBN063yYXvUqAiBJy%2B0JFrbgsTZvffnq21iiqZ2TdvF2HvDMUdjXKowOPyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhM%2F5Y81ireLQd1tvKtwDguchlq3r55LL1KjW1S3b2KH9zP6%2BIk6BP%2FIFbBiXuqo30Jny6B8AFLW4riFtBfLU8NXOczh%2BFbE25%2BM0T0gKXNuR5GeH%2FX07uv5OWEZ0z7imnAuUBHunLGalRHcqXFOrGyfDAy5jb4QX9ZcWJseYXuX03GytQ5GEwgl4%2F538SyyHjN4yGLuGqf5cmtrl8FMfBEIeKdroWSvjpsL5P0QPXKptDQLdoWMVgZZpc%2BMobxsW1efiexH0jFl14xd8JLZvq3Og7ah%2FsRD%2Bawp81VADu9hsj5WMeoH1f%2FpUB%2FG5gArqII3Mi%2BMAHsK3vpfpy21MQUxpA9xU0schh5iDtGsHAj7485grOQf5rqqhf7xYWIsNGqUDMTQaDxC3AXCjBnfJWdgVSyTbXVeMH0hf%2BKkg0zUYjV6R9fMDcHOidxrnJP3mPxIfjlqR6SQptW6AwgeqExNPrA2StOxCSMCzXGBHpyd%2BKiF6uL8bSls5bLcZVpjOElfhjiPRC%2FhspeRgt2BgUWbdN9IFIcNZUKYIJBV3yjOkAEJYUjMQ%2B%2FcSBWgCgz2XR5Gz9xqoeOXmfnbXHdT5p8FeayaHpntWRGpFlYcr5UuKpq0X4Vx%2Fi336D%2B0MkYOWqhY%2F6SwcRKv%2Behgw67POwgY6pgHsyE7fA7aXXpqPC5yyD6%2FHO2AoeRJkiDYwZgghNGgRGisMFR5Nu4A6lmkTybzw91dckPW4xqPlJi6XALTnxGh481PxRZiGkMwBwPsH%2FJp%2F5vCD6XFP1eNU%2FeZCmYq41PaBz8%2BiVhUAdKKvgj9mrHUq0kCuCsY9TE4UXWGf3qeROD7T0KBQCstvyMPU2VGdPTi6cjCtW5aS6PGiG3siGj2Y%2BZ31bAU5&X-Amz-Signature=216a3dd66e5fb622afed19b8afe9122dfaeaa647d398b8d7aa37b444432c4df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO6B6D7G%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATAk%2FMC4v30RCS4VzhCtNuu3grYYZf5trukgjnlwKpqAiAuTPdD8sKLCp13fHTr%2FO%2FsxQD4nwApPOreX%2B8qYHBSuiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtMWvG29GYlsWwigyKtwDRt3mD8BQiy7WJ9EiwPQ%2BdEnmRnHJhD9XcatypV6HXANiHy02TIy6HiioVxgtzg3yYrbCnlwthTKAdw%2FlgwkQQX78RcWqFE%2F1vQP2ldZAold1GWZpd25dRtPT8sfP2hcAsOmoCUJWSkNaHiYn4FnSVYER8RfC%2Bwb1iHF3FOUODet%2FpsRhZYFZ7vaHkOm5SI%2BtRwMmeaRSmdQzoLpBpUvMPzdpTcQSFatZ98f%2F3Jh5Sc6hUX%2BbILhPrdJk364zRsXh6rSIsRCC94pz%2FDGQLlzm1ZU2vWK6EiCNU3HK7fu8UBlDABS2%2BxYfDHbPll5wsnlXRJEwzDSLLvPesZi%2BoV4rZ40e9sSGPuvrh05QqBy0%2FfLBuaft7WEs3mhztXuuQfxMEJM4xx5T61oKyKpzAr4Tdg3bVdxrFJS1zRRDLhUSnxm0UwXDD6ss1cFSgKQE9pkIPAjHfj%2FGga0oX8qb%2FEERmd7Cqx%2F1MMNR%2Fxu78N62Z7OuOnkV6JJzeaKbGREKWco0vd5m4No1y1NrqkoePylSYpw%2FhL45nvbsamdQb%2B8y6GYU7KdqbCk9nFxuwa7BEkBmOShPUL%2FPRRlR4u53wizp8ZB%2F22jhxHzsxqHs8KXRFrOEvheSS%2BXqbxWgyiAw1bPOwgY6pgF7h2xQeg%2BX28AOKeslpuIGAwnuY3IR61zV3s9YG9FYIVqT6z5N%2F%2Fke2WkVBB8vI%2F2vfvjvlEjWJ92up7tAe0lYopb9uExNGnUUIpZ0mOowZmtA9hJhcTo33PrTmUIAZ1Xz4V8YAXPaZJqHVUrZqG7X4WcKd5ars2iSIkxzSw4vFKlRcelXLdwfLqRwgnBMdQfG1WSZSRipcGMBQN8CbCcdeknK3BOW&X-Amz-Signature=a09d07f180bfc74ff4184edc69e67d8d78d928d952424d69f30cccf0a694baa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X3D5IU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfSjJoi4v2LFqp%2BwQawa6uxvClcPjRt835K%2BNJP%2FnDqAiEAy7%2FdCFO9UjBKTmXzi8i9fYkZQP14%2BPSy4fWH9v4c%2BwMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNr80fsY%2Fj8v9EvfSrcAzx%2FS3sewEBFx8vxbgAh2sXJ3hXFV1K6eSLaJf5MkOsegW7UU0SzrrxLFGJboy6iHoX2sLnngKXmUVhoJjq7U3iAbe8pyTiXuCe3V87q%2FoX2vVQiIgo9NSIfMXBFbfFlgEF6mV9U9EV6auCmyxuAhRoOCPQnt1NahagkuOsZRVUcz%2FVVWZIT%2BtH0vptLnyRFJYuwIGMeuKnxJR%2FkpOk7LhK6FSFaFfFbr9%2FpCXNfeTfyKMCCt16%2Ft6Uvrvaw7txUjjY%2F7w%2FmpIvO9Rde9v6tHWQruDDUExcHRHxqM9VsK%2FHQXcDBCyuJhypBXJl8mIVNqrnfYk%2FsgC3o3EKW7mKYZMSe4Y2dE8hTBuUkUZQ6dZ0Xnu9Fi8xPc9z9D%2BxLGmDC2vBlCq%2B2RVEBDENLQyjLUZzm1%2BE%2B0Z8r7v6KfrW51bzztdLA3rruG54c0fFYO7XUrBjwBdWXVJoXR5N5Au%2BplL0zO%2FXxNk07XxKpczqL6YfsJAw3WwXnIU4eh4fA1n4st6r60V96zasNJfsnJ8CAGXXmuLwXMO3ZB98poPMUiXUgHhB1sk%2F5MsR9PFhpRcMVx7cyO5mBjLlSOWF%2F1EcLQjao4SRc6rv66yfXHBl2GBd3yhQCbsJjhwBFU0i6MP2zzsIGOqUB6RDKP%2FfJUswaThHIZvmtQ9gXGYjKLswlqH3TbqUbMfy%2FXXGuXT8zIcQXIg%2BmiPy5cNVyvQVwIaD38GZcz6WwpgXujcqthf%2Fa6ddBobbxs9MGw4Osm7G9vuiFcAuUM8AeyIpNt56PyQ401eOXOBT7OVskbAmqs36fwG0lSM3CHoukm%2F81AqdkgIHInWRs%2BDkJhE1CrcHKu8qsid2sC69vGXbUMG18&X-Amz-Signature=dc2066addd8582a6d28898d645dda440e8f9e48137425f880ab2ba1e8d7a8f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
