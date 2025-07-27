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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2JFGGO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICdlilFer4I83sUOOGnsBXcFevOGmAMIGjW1ASoKzSY7AiBAgcIMwvHxgk6twKMwDE4zDI8uSgFYiWq0txnF7O2yhCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMJFrEXuW39Tu4JGalKtwDkGIr3HeOIk8wTP%2Bvx5Ar85ekBrHiViZXUo8e4q6fn0UlVCaxqLeyP81OMzcGPU2umsUUzkCVPGTt8Bt2n%2FHMrqXJxUIALFD%2BFKQX8%2BlYymRR%2BLxYgj3ruvaXEH0H9YD3%2FiMTlg40PZyG7Mb%2FyLugd2Xb5oYKcY7%2B1e7tbsS1ezB%2BM%2F4YG7pVfQzRfPsKh5nhz%2BHJOZHyBf8SFoO%2BIqQPjeygNvcsxYMFA%2BdRng3%2F0h5vRHNOb3N%2Fa07cH%2FqGSxyh5XhoviRUuSSKy0g4%2FaMCxeDodrJodjfZrymumq0orhm3mXo%2FDWA65W2On%2BJR%2F6QQmqnoU18Inlg4ScAGag5iU1a91Okp4BWdkfVuain6xAuP1rbLMLjiVJ2REi0rGLTdgLnrEknWM623iT4ENnlY3lTX6EYc%2FOH4%2F%2BMEvQ9vMMK2NAZgS%2B84fjSlB9nRFMd6EcK03%2BOf%2B8zrjQhzhWGZt1i8B11sC636wnfa%2FCMuDEZ4WQpHr%2BQ5mb9VDVTdmjyJC0TsJKcPzW3q2eSARTQAwGq4sw1PkB%2FD6Dji9FMBvisOb7AksKTAh6GMgqjo%2FSpBcSYpYeuUfZmunDbHQWFYiSUT0QAlkLAhAofGE2Iu296cGCgYbv9UcQEwYB4wjsKVxAY6pgHFVKeRL%2BazqybasHPDaonBXp7UIO6VmadQfAIeWSLXoxVVa4QOnMpX7cUJK3vMRRt%2Fqtimk4WB%2FYi0pjgwL0H8iZPUBy7pZ5wsYQZXB%2Fn84VjezG3olqyIZqYj%2FIcNxYcGGNOVBKcUVbTkAo2umWUrBy3q62uMCzX%2FDohijWP4w45ozy6gmcvGV7WyUjBNsHgEjKvuPoFngTBYVzjeT0jlkjyHJ9Ab&X-Amz-Signature=b30c42b8cc3a3a2a7465a61865a62b6623bd09a1bf407c022cb4be3de18ab01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2JFGGO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICdlilFer4I83sUOOGnsBXcFevOGmAMIGjW1ASoKzSY7AiBAgcIMwvHxgk6twKMwDE4zDI8uSgFYiWq0txnF7O2yhCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMJFrEXuW39Tu4JGalKtwDkGIr3HeOIk8wTP%2Bvx5Ar85ekBrHiViZXUo8e4q6fn0UlVCaxqLeyP81OMzcGPU2umsUUzkCVPGTt8Bt2n%2FHMrqXJxUIALFD%2BFKQX8%2BlYymRR%2BLxYgj3ruvaXEH0H9YD3%2FiMTlg40PZyG7Mb%2FyLugd2Xb5oYKcY7%2B1e7tbsS1ezB%2BM%2F4YG7pVfQzRfPsKh5nhz%2BHJOZHyBf8SFoO%2BIqQPjeygNvcsxYMFA%2BdRng3%2F0h5vRHNOb3N%2Fa07cH%2FqGSxyh5XhoviRUuSSKy0g4%2FaMCxeDodrJodjfZrymumq0orhm3mXo%2FDWA65W2On%2BJR%2F6QQmqnoU18Inlg4ScAGag5iU1a91Okp4BWdkfVuain6xAuP1rbLMLjiVJ2REi0rGLTdgLnrEknWM623iT4ENnlY3lTX6EYc%2FOH4%2F%2BMEvQ9vMMK2NAZgS%2B84fjSlB9nRFMd6EcK03%2BOf%2B8zrjQhzhWGZt1i8B11sC636wnfa%2FCMuDEZ4WQpHr%2BQ5mb9VDVTdmjyJC0TsJKcPzW3q2eSARTQAwGq4sw1PkB%2FD6Dji9FMBvisOb7AksKTAh6GMgqjo%2FSpBcSYpYeuUfZmunDbHQWFYiSUT0QAlkLAhAofGE2Iu296cGCgYbv9UcQEwYB4wjsKVxAY6pgHFVKeRL%2BazqybasHPDaonBXp7UIO6VmadQfAIeWSLXoxVVa4QOnMpX7cUJK3vMRRt%2Fqtimk4WB%2FYi0pjgwL0H8iZPUBy7pZ5wsYQZXB%2Fn84VjezG3olqyIZqYj%2FIcNxYcGGNOVBKcUVbTkAo2umWUrBy3q62uMCzX%2FDohijWP4w45ozy6gmcvGV7WyUjBNsHgEjKvuPoFngTBYVzjeT0jlkjyHJ9Ab&X-Amz-Signature=cc2ce5ffc7cd80d17d09cf72a564fea4ce4b8ea90458ff3c2596daabe30fa53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2JFGGO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICdlilFer4I83sUOOGnsBXcFevOGmAMIGjW1ASoKzSY7AiBAgcIMwvHxgk6twKMwDE4zDI8uSgFYiWq0txnF7O2yhCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMJFrEXuW39Tu4JGalKtwDkGIr3HeOIk8wTP%2Bvx5Ar85ekBrHiViZXUo8e4q6fn0UlVCaxqLeyP81OMzcGPU2umsUUzkCVPGTt8Bt2n%2FHMrqXJxUIALFD%2BFKQX8%2BlYymRR%2BLxYgj3ruvaXEH0H9YD3%2FiMTlg40PZyG7Mb%2FyLugd2Xb5oYKcY7%2B1e7tbsS1ezB%2BM%2F4YG7pVfQzRfPsKh5nhz%2BHJOZHyBf8SFoO%2BIqQPjeygNvcsxYMFA%2BdRng3%2F0h5vRHNOb3N%2Fa07cH%2FqGSxyh5XhoviRUuSSKy0g4%2FaMCxeDodrJodjfZrymumq0orhm3mXo%2FDWA65W2On%2BJR%2F6QQmqnoU18Inlg4ScAGag5iU1a91Okp4BWdkfVuain6xAuP1rbLMLjiVJ2REi0rGLTdgLnrEknWM623iT4ENnlY3lTX6EYc%2FOH4%2F%2BMEvQ9vMMK2NAZgS%2B84fjSlB9nRFMd6EcK03%2BOf%2B8zrjQhzhWGZt1i8B11sC636wnfa%2FCMuDEZ4WQpHr%2BQ5mb9VDVTdmjyJC0TsJKcPzW3q2eSARTQAwGq4sw1PkB%2FD6Dji9FMBvisOb7AksKTAh6GMgqjo%2FSpBcSYpYeuUfZmunDbHQWFYiSUT0QAlkLAhAofGE2Iu296cGCgYbv9UcQEwYB4wjsKVxAY6pgHFVKeRL%2BazqybasHPDaonBXp7UIO6VmadQfAIeWSLXoxVVa4QOnMpX7cUJK3vMRRt%2Fqtimk4WB%2FYi0pjgwL0H8iZPUBy7pZ5wsYQZXB%2Fn84VjezG3olqyIZqYj%2FIcNxYcGGNOVBKcUVbTkAo2umWUrBy3q62uMCzX%2FDohijWP4w45ozy6gmcvGV7WyUjBNsHgEjKvuPoFngTBYVzjeT0jlkjyHJ9Ab&X-Amz-Signature=177aa937cb44548a05cc3efc5e89d2098aa1b0b8f1cceff738934178095b1732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM34WXBL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIETYoXFcUBY%2Bm29ygmMZGQUkz4t9g%2BBTIu3o1%2BimiUUhAiAc94Uu41tefMZ9MwCdVktiiGbeehYFbVayXU4kT4XWHSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM5b78LDijXwFg7ocfKtwDPS82E7S4zqBKqe%2Bh2OKcNIMgsi3HR%2BK8rFhclXvL2IFWh9NzD%2FMuKn%2B43LcLYPLLPhsrc2aMOVjbEtJ3SHyeWHKO1ADQZvj9p4RHuD6AFYLHfRvvULzLSQ0hcg4N0VVP5WUfpuDcpFD2RvcJlZ%2BKzcYm4yPYb%2BXbUEtmf9OcDEBB0w1fs9%2BzvvG6xJJK782C5aBli9cXy%2FhzO2LBfz9cu8JAUAR%2FD9Jy%2BAg0qvBd9dYX6l%2BgbIuhadfzn6GoTO0XHt1gtJl%2BuLc2pTTVfY9LFeUmq1A%2BHM1W0Yhg90PKESAxDdmDh3EivUiRaQq9FhOtYhpmW0DOf75uC6CLP6g7F3KHIjvuXfrziJF%2BVpqnwJkWLxYcZ8PRvQ54uocL1MbH2WfvMVcsxNH0cOTsWtZ7OWZR9Hr38w0RyMPFJisaT0DNR1EO%2B7OJMOlSJuIJcBkB7DjGcNURIDPtZc2y3Isq6%2BnUwswufzPgvTSprdgltkyLpyUPTFwA2A6%2BbRz2t%2ByZPu6qwAuF9bfwIUtHzVB35%2BcZssUN7768v0tzxj1ZIxPa%2BJ3UxePPS2EyVyAdubGKyDTzbNgLzLKbwWGL2VNWGgK3JSFizQeM2R8Feo4kQfOPj9jyMVFR44HEmiMwjcKVxAY6pgE14piG3jJZiEikFmlj0%2BhOHF248vcCWnVlzuu8dDUT%2BHaVyYiojMioiATu2dIvdQM9p61YeTY9l4di53JBgwbYOI0BmW79qlOtrAvEON%2F74BH7F3rBwP6Cx%2BdBgF3nj9GCSS%2B%2FSxpI57isdUe9wsnOvVbE4ZS2XY%2Frf7Dy6f%2FoUc%2BGYPyyoEawfCbCWzO4hUV5ACUBc5wigd%2FwdDt%2FZEgm0y3Ja7%2F6&X-Amz-Signature=5c9f6bf841f500b39f51c90b6c3580ff4c78eac1158836133aa7511ca18f4245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GLP5ODG%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDQJlTWuZEPGPt4WnMMmct5b2V%2B5HzRlTH9B91Mzz9DggIhAMyamy%2B3CrKvPcHFJQWiANUlCISIKfBlNb2SXiFKfbHtKv8DCGgQABoMNjM3NDIzMTgzODA1IgxJYL5LwlSwmeBHkjwq3ANy1ETcxtFj1yMlREl3WddTu3mCxTM%2FXznRgbe3C7aG1o3OhmU0cxecX3DtjOeq5i39qgxfjLifTnc1i9dQrb35CJhxl%2FKKZCoou2PasY925n51Ew13Km0NroJYmzDeDc%2BQTXwivdsAhTehlLGIHeBtmPEpUyoAEWx9qVrUgIM4V3ZaDFd3MEcK%2F%2FEC2KJ686ptnxqepDMeWIXtYXnMHOv2cjI2gv9%2FMcD8WYjOhjKuIq8jX3EW9hR%2BjEwbO236%2BM5vpqBgSnKpTQbRR8WDxLk5Oc9LqK3e%2Fy7I2se%2BKCGIphBIoja1dOxyF%2BhMhNmYvi6oaRdPquDuPBh3Qn8KXx7qInIFcgqNBNeKnG6ZhTs9WKWeSEOBMBHt2WjGmk2DoFqw6Y0HTMMq%2FecNrl9g%2FianUQkZhQ8QYfmobnykZRACDsR13mW%2BO9Er%2B4%2BG22At3yJ1hLLh2YsRfyTj%2F3XCxSI8aY4i5ycwOzDrSMWmlvduFSBvEfUAbXu8x0wzvLJApJ6YWKPj%2BQKjrW8DUJR%2F4A%2F6yQBjJz0N7gOwdGvgYF2De1YBKMXqdRqZlGJMmjLIdVpQ7cbN%2BJFMs1uSmA%2Bv7%2FuEoOBvI7WyTPI%2BorIuEPr8RLNDpO3wi00jbSkj3jDewpXEBjqkAbEP%2BEdG5%2B%2Bsr8l4cmrWI08d8doxJduMYR3eM2%2BHL6h9hJMjrrcih4xjUAqYiSVX5L18NbGCwzsxbiiUZ8dSt3HaxuJNfw9FIrkzcW3oHYDFVXE%2F76%2F7YflU0%2FFR8AJQ%2By%2BhvS%2ByUz3ArEpmfYIsRYEXLg%2B9YurG5xREuqTAREazc2qd%2FT38B2qzEl2X14cxm47OKO2Cuar7T31DoVyEX%2F5zbK3Y&X-Amz-Signature=cc8336e562d037b78dca07754929bb30eafb76afa8d1c27397f4f4b3ade69c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2JFGGO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCICdlilFer4I83sUOOGnsBXcFevOGmAMIGjW1ASoKzSY7AiBAgcIMwvHxgk6twKMwDE4zDI8uSgFYiWq0txnF7O2yhCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMJFrEXuW39Tu4JGalKtwDkGIr3HeOIk8wTP%2Bvx5Ar85ekBrHiViZXUo8e4q6fn0UlVCaxqLeyP81OMzcGPU2umsUUzkCVPGTt8Bt2n%2FHMrqXJxUIALFD%2BFKQX8%2BlYymRR%2BLxYgj3ruvaXEH0H9YD3%2FiMTlg40PZyG7Mb%2FyLugd2Xb5oYKcY7%2B1e7tbsS1ezB%2BM%2F4YG7pVfQzRfPsKh5nhz%2BHJOZHyBf8SFoO%2BIqQPjeygNvcsxYMFA%2BdRng3%2F0h5vRHNOb3N%2Fa07cH%2FqGSxyh5XhoviRUuSSKy0g4%2FaMCxeDodrJodjfZrymumq0orhm3mXo%2FDWA65W2On%2BJR%2F6QQmqnoU18Inlg4ScAGag5iU1a91Okp4BWdkfVuain6xAuP1rbLMLjiVJ2REi0rGLTdgLnrEknWM623iT4ENnlY3lTX6EYc%2FOH4%2F%2BMEvQ9vMMK2NAZgS%2B84fjSlB9nRFMd6EcK03%2BOf%2B8zrjQhzhWGZt1i8B11sC636wnfa%2FCMuDEZ4WQpHr%2BQ5mb9VDVTdmjyJC0TsJKcPzW3q2eSARTQAwGq4sw1PkB%2FD6Dji9FMBvisOb7AksKTAh6GMgqjo%2FSpBcSYpYeuUfZmunDbHQWFYiSUT0QAlkLAhAofGE2Iu296cGCgYbv9UcQEwYB4wjsKVxAY6pgHFVKeRL%2BazqybasHPDaonBXp7UIO6VmadQfAIeWSLXoxVVa4QOnMpX7cUJK3vMRRt%2Fqtimk4WB%2FYi0pjgwL0H8iZPUBy7pZ5wsYQZXB%2Fn84VjezG3olqyIZqYj%2FIcNxYcGGNOVBKcUVbTkAo2umWUrBy3q62uMCzX%2FDohijWP4w45ozy6gmcvGV7WyUjBNsHgEjKvuPoFngTBYVzjeT0jlkjyHJ9Ab&X-Amz-Signature=8ef0f29849f612242dc0304e751f1de04be51afa009e09331c618287899a428c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
