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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ONCDXB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFheyrrCLqw7W3HDq74XAK%2FdZ0CGRH5SICwRxG9zs8TCAiAtceXG8UNpJVdVGg4Ka5ip6L5rJcnatRuw8j6w8q8UACr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMp4ypcuA9ckpdWWqvKtwDuUA3K6hsAXh0potRvbZ67di2g7vHYlGmH5t6jqUSYajrV2LumxUDpmKhB%2BEjygs3dx4o763lAr6ioUGfs7kPqCJNnD%2BXKX3O3hWrleZWmgy9VtUHY1MI%2BrEPVy2dKz6qxNmQgxRLEzpi9wYI4aBR60bNDgSrUmJyPArDpplnN%2F3Fjja4kPmGpyW29PAPeQBy3wHH6SQaCEz9YtDj47HbbXoyp2EnQHny4qCRVITxX8C4IpvuWhYvmmDHf9mybj9j26bbI0lI%2FFwWkbGyyDEEue15hlKX6DlI%2Bm9oXdGnnYErBiHs0Iasq08Z0bN%2BUzQoSynIXaXtdhd7Bu4ARSdA1Lyt0p7yx9k2IIjPmkWse%2FUkrHai1ItUajzNCnVy%2FlUXfks3A4OTYMth18pCDjhWOsTqNK5Fe3IB8vEBXb8N37RZXlHDtretT7Cm7EAH3Bwfqw2AUzyuXsGH%2BC%2BcHXXgQAOGRgO58BvZI3%2B01gsfZLkQzM1zMFhZmKCP6bsL52WbkrAXJAlVasQmfNMoNcrKwBeLbPDcUc0oCNJi3MN1jAfQ5ESbHfYagR2B5BkYnlKngsrLPDxtWv7l9KZQQLmGL3w5WhdppLq7eLxJ6FvWeAE9DQJIynlF8TT5nTMw343lwwY6pgGFop6DnS4zHqDVf%2Fc3wnyIyT7pB6kxnaRV8daypgUVExl1Y1ZiNeZsuVsKXcfTL2KVzYEK2Kl%2BFnHmgBQYaFWO4XRfOHXLrPTlHLyYjUuE3%2FPHrJGafao4g89W3k4VlSkddbiLvsOWEXdjLJ1tMKww%2Ffxv0RbjuHxoVzqOpqJpgVLlKUpk6eynxzQyBndULdvADfzS30UoJvUfnjRLVpQGHo6Str8y&X-Amz-Signature=5990ac2679ec1d3252022f2ec47fecaf923e31be1cb2bead7612fb75514153ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ONCDXB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFheyrrCLqw7W3HDq74XAK%2FdZ0CGRH5SICwRxG9zs8TCAiAtceXG8UNpJVdVGg4Ka5ip6L5rJcnatRuw8j6w8q8UACr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMp4ypcuA9ckpdWWqvKtwDuUA3K6hsAXh0potRvbZ67di2g7vHYlGmH5t6jqUSYajrV2LumxUDpmKhB%2BEjygs3dx4o763lAr6ioUGfs7kPqCJNnD%2BXKX3O3hWrleZWmgy9VtUHY1MI%2BrEPVy2dKz6qxNmQgxRLEzpi9wYI4aBR60bNDgSrUmJyPArDpplnN%2F3Fjja4kPmGpyW29PAPeQBy3wHH6SQaCEz9YtDj47HbbXoyp2EnQHny4qCRVITxX8C4IpvuWhYvmmDHf9mybj9j26bbI0lI%2FFwWkbGyyDEEue15hlKX6DlI%2Bm9oXdGnnYErBiHs0Iasq08Z0bN%2BUzQoSynIXaXtdhd7Bu4ARSdA1Lyt0p7yx9k2IIjPmkWse%2FUkrHai1ItUajzNCnVy%2FlUXfks3A4OTYMth18pCDjhWOsTqNK5Fe3IB8vEBXb8N37RZXlHDtretT7Cm7EAH3Bwfqw2AUzyuXsGH%2BC%2BcHXXgQAOGRgO58BvZI3%2B01gsfZLkQzM1zMFhZmKCP6bsL52WbkrAXJAlVasQmfNMoNcrKwBeLbPDcUc0oCNJi3MN1jAfQ5ESbHfYagR2B5BkYnlKngsrLPDxtWv7l9KZQQLmGL3w5WhdppLq7eLxJ6FvWeAE9DQJIynlF8TT5nTMw343lwwY6pgGFop6DnS4zHqDVf%2Fc3wnyIyT7pB6kxnaRV8daypgUVExl1Y1ZiNeZsuVsKXcfTL2KVzYEK2Kl%2BFnHmgBQYaFWO4XRfOHXLrPTlHLyYjUuE3%2FPHrJGafao4g89W3k4VlSkddbiLvsOWEXdjLJ1tMKww%2Ffxv0RbjuHxoVzqOpqJpgVLlKUpk6eynxzQyBndULdvADfzS30UoJvUfnjRLVpQGHo6Str8y&X-Amz-Signature=09680e5e146c2528469ff8edd7311cc0916ba2b6258b7390544476e26e3d5e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ONCDXB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFheyrrCLqw7W3HDq74XAK%2FdZ0CGRH5SICwRxG9zs8TCAiAtceXG8UNpJVdVGg4Ka5ip6L5rJcnatRuw8j6w8q8UACr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMp4ypcuA9ckpdWWqvKtwDuUA3K6hsAXh0potRvbZ67di2g7vHYlGmH5t6jqUSYajrV2LumxUDpmKhB%2BEjygs3dx4o763lAr6ioUGfs7kPqCJNnD%2BXKX3O3hWrleZWmgy9VtUHY1MI%2BrEPVy2dKz6qxNmQgxRLEzpi9wYI4aBR60bNDgSrUmJyPArDpplnN%2F3Fjja4kPmGpyW29PAPeQBy3wHH6SQaCEz9YtDj47HbbXoyp2EnQHny4qCRVITxX8C4IpvuWhYvmmDHf9mybj9j26bbI0lI%2FFwWkbGyyDEEue15hlKX6DlI%2Bm9oXdGnnYErBiHs0Iasq08Z0bN%2BUzQoSynIXaXtdhd7Bu4ARSdA1Lyt0p7yx9k2IIjPmkWse%2FUkrHai1ItUajzNCnVy%2FlUXfks3A4OTYMth18pCDjhWOsTqNK5Fe3IB8vEBXb8N37RZXlHDtretT7Cm7EAH3Bwfqw2AUzyuXsGH%2BC%2BcHXXgQAOGRgO58BvZI3%2B01gsfZLkQzM1zMFhZmKCP6bsL52WbkrAXJAlVasQmfNMoNcrKwBeLbPDcUc0oCNJi3MN1jAfQ5ESbHfYagR2B5BkYnlKngsrLPDxtWv7l9KZQQLmGL3w5WhdppLq7eLxJ6FvWeAE9DQJIynlF8TT5nTMw343lwwY6pgGFop6DnS4zHqDVf%2Fc3wnyIyT7pB6kxnaRV8daypgUVExl1Y1ZiNeZsuVsKXcfTL2KVzYEK2Kl%2BFnHmgBQYaFWO4XRfOHXLrPTlHLyYjUuE3%2FPHrJGafao4g89W3k4VlSkddbiLvsOWEXdjLJ1tMKww%2Ffxv0RbjuHxoVzqOpqJpgVLlKUpk6eynxzQyBndULdvADfzS30UoJvUfnjRLVpQGHo6Str8y&X-Amz-Signature=45237e2b3ba04dbc60df72292fd4914a10c14e9d8e4e689c24695335c9f61408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVRIKPX%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGRfPlr1mfRZdha1cd05dzyBR%2FijhJQPPATCqwtWK4BSAiBMyN5Yvl%2BNCEsSVW7RDZSGUJdIXT2Xryj5reZALdQnTCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMJBlgO8Z5Z6G55HQWKtwDHJHKk0sCUTz8HL6fUs4%2BX2FEHYpvyR1eIVcoMtiqJ2%2FQVgfgnctDp2rR7uqEcBl31Xr2X%2BQToLvpOHabstWu5LXR0FWM%2BoXuPN%2Fo7uRNK22OfwWSaqTNB6YB1OErFpOsvHErD3choJTnNS0F3G2yA%2BfsV3XaSwMNvy8jfOIfGWWHilKnjUShb7FWRbBVZYfs0lpmB%2BGua9iPKV%2F7FuLlaIMNjO0Qul2MwG6nwVDisI6o9%2BI50Xtb3jgt9%2FsD2lH79hZLSSQYyzqAtMluKSvOBesb8T5GIODmYxL0pG3Fa8GGt5zeuG%2FsQTD9x0KL6QJEY9UQGY8448fubWQo2lez3Ttj%2Fw0jAq11tScWniRurJDUAbNVTePudLewd%2F%2BsmuuGPktLDd2Bm47ZUiWWBPDeA6DL7zueHA8qfyFsumPAtRXNpBRlyVT5VQRjTPpFvE5XLRQ4wdQAh06M5DAeeff7t2xc%2BMXNosYEAPwc80zf5oR9xaS8HIcwRFUxYCpKJa3K5qEDKk%2BaZDgmBcV%2Bw7Y9U%2B%2B%2FZakDHuXofyt6ZVcUDtfvHBWq1YuSoAbbJxDUIGRwqqArCkjJ%2Bf46vhrRy626yE1sIGVrET1xswyHKU56NAUgSmEhY0KB0RMpXyAw8I7lwwY6pgE2v8AHu0dWhaqDF0mGGfeGZSz1LJt%2ByQgzD2OXyxci2P%2FUAnrSLSkZSXIohZpTMQhCu9Vg4s25kUGa%2BXbdclcFlc74Vn0IzP4QkkS19NMB3yOyA0MR%2BAWrnWo9UkVusfKErOvErKNgVZu0t%2FiGa6hTt1%2Bco%2F%2Flj4RHgUsQ1Qjvh8%2BQcxGqooUztfwwBRTt%2Fafs8%2F0Grd76zV7jn3YWfsuF3e1obuet&X-Amz-Signature=30ac3daf9ab92f4607ea08f1666c2415253196c1fc81473507aea78f4ed94fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ43BTD4%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD69mEf7lE45NAE%2B6qN4YTda3TriONP82mOUICiY%2FqmIwIhANo6cZD8XF3J2sEKygZHBh%2Fjh6jISAPcHDhIotVPxJnbKv8DCHwQABoMNjM3NDIzMTgzODA1IgwMvshIyvutmNSYZcoq3AO4xv0QPu0tb9zEKcLHEkOf8VtbcGQNsacDr1uau%2FxXUXq%2FobLLA2RyWAkDuKR3Lv6%2Bdwu24ekz3KAIFvhzFxn8XWXNHO4wSeBShzygrDwgQiwJnedi14TmAEW%2BReos5JnExWiM7Oa6KdODcWzrsEFUEbHAGuBhY%2FNrvAUNchBJX%2BpHRegLtAB2bU8zjmYrOuU2BrIS8huprWZtfrvEUWUAGCvL1rETfa9PkPYICJM1e6%2FHEIYHx1k1SOlvDdOCv%2F6HB%2FbEoprLcvI1mNA7zaBXXsW1LfL6QkqUOBff0Qb4oLQsOiHS4ZS81uMA02Ix4SkDDLoB2e712Nlo%2BzcS82qRSk22bTD0gS6PBkd84uk2wFRkiLpUDv001MyQLnzf9xBFlLdnIqDKy0PI2ga7BppgJ8i%2FDRuqM3H7%2BUA5ZQ6HfQadgmCNghBTCGXy%2BBBjr9ESXuMe9cbI%2FB6xFJemp7SCOp7CNTHlTFCuvcJUG5vtdTVpDIDWosvKO1Gc2nIo99Bk5c63pkKOJKABKwFaOYwYQS7GC3DDfTMS7eiJLpN1NYY81t%2B3Dl%2FsavDcPJCWq1segLaGjcAK19dqTZWnGXWN6pdzypkpQDz5mAB6wDtgQh7QtiCFzeCaO%2Fr4PTCvjuXDBjqkAYc9wxPwX82OirkCiY7BG64dHYdbrEuUa79xfVra8Iza8SgorUb%2BhMWOr%2B1YWWnAxdWB%2FAub6yWJr7relxmGP30s9vDqnUo6b2YE3ZA56xJHLqvjckFBT7U6lnV2w9LidKnOfF0AoQKYvtELmME5NvHn%2BXnlindhlIT%2BgthifA64kU8zSE8A6ACE%2BX9%2Fds6zyEdF27MWpwgg0FMXH93As%2B8BUoTm&X-Amz-Signature=2428006066950ae01001cc1145029187b555a471f4d5fe4dbb0178214ee31e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ONCDXB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFheyrrCLqw7W3HDq74XAK%2FdZ0CGRH5SICwRxG9zs8TCAiAtceXG8UNpJVdVGg4Ka5ip6L5rJcnatRuw8j6w8q8UACr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMp4ypcuA9ckpdWWqvKtwDuUA3K6hsAXh0potRvbZ67di2g7vHYlGmH5t6jqUSYajrV2LumxUDpmKhB%2BEjygs3dx4o763lAr6ioUGfs7kPqCJNnD%2BXKX3O3hWrleZWmgy9VtUHY1MI%2BrEPVy2dKz6qxNmQgxRLEzpi9wYI4aBR60bNDgSrUmJyPArDpplnN%2F3Fjja4kPmGpyW29PAPeQBy3wHH6SQaCEz9YtDj47HbbXoyp2EnQHny4qCRVITxX8C4IpvuWhYvmmDHf9mybj9j26bbI0lI%2FFwWkbGyyDEEue15hlKX6DlI%2Bm9oXdGnnYErBiHs0Iasq08Z0bN%2BUzQoSynIXaXtdhd7Bu4ARSdA1Lyt0p7yx9k2IIjPmkWse%2FUkrHai1ItUajzNCnVy%2FlUXfks3A4OTYMth18pCDjhWOsTqNK5Fe3IB8vEBXb8N37RZXlHDtretT7Cm7EAH3Bwfqw2AUzyuXsGH%2BC%2BcHXXgQAOGRgO58BvZI3%2B01gsfZLkQzM1zMFhZmKCP6bsL52WbkrAXJAlVasQmfNMoNcrKwBeLbPDcUc0oCNJi3MN1jAfQ5ESbHfYagR2B5BkYnlKngsrLPDxtWv7l9KZQQLmGL3w5WhdppLq7eLxJ6FvWeAE9DQJIynlF8TT5nTMw343lwwY6pgGFop6DnS4zHqDVf%2Fc3wnyIyT7pB6kxnaRV8daypgUVExl1Y1ZiNeZsuVsKXcfTL2KVzYEK2Kl%2BFnHmgBQYaFWO4XRfOHXLrPTlHLyYjUuE3%2FPHrJGafao4g89W3k4VlSkddbiLvsOWEXdjLJ1tMKww%2Ffxv0RbjuHxoVzqOpqJpgVLlKUpk6eynxzQyBndULdvADfzS30UoJvUfnjRLVpQGHo6Str8y&X-Amz-Signature=2380136b9fb7a497dcb0d7b67aa2d43dee4521665310710054c57b0d5918c6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
