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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIUFXE2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDvY0S83TkOQaFvY8P9hiM%2BeNCCkeLpyXiGcJmVy6x92AIhALOwcU77Pjr2m4KG6sFpIXAwOP20W6oCaIrLa7a%2F1vTjKv8DCCUQABoMNjM3NDIzMTgzODA1IgxiLMK9OgIsZCWMhvoq3ANggcwJgUf9PtcSnIyJ22EaDxg2GmyAVmdCkLa4egGnUwCc1VHxK6wSJQRyZRmHiKVHEGuh2iWiQpIuDJgDfDnMLtR2o5xu9BUMOSq4CL3hB13MAm3p09LYDfoyySaQ54PuDbzgimR%2FnknXmmzdIFIrzGiK4Rs0dBqBVDIVqYOQi0QXPE%2B9DhB%2Fgq1Z4eCqnPNVZ6QGv%2B4DpN26DFF2Yor5g%2BGTConRdMxLt408fpI%2BUUdSThxP6gu6u9rRbNnEKXJgFF%2F4veoWDvReHUqcwC5%2Fi1y18xgmOAg3reKNdrKd8%2BuQafRDQxBSNe7q3t%2FM55CxFIB2p8TYcj88CTjeNjxcOGWwzZQvA2dhtw%2BRLCMyxJQYwBLAgHTA17NvB4IZW07ZROGnxWHjdF4rObyNEI7d%2FlnqVdBmoTq2m%2FG4kT7L%2BoQagPwbEUc9itzJGzP0hLP1ncGZzKSmgWFn8GEalR9aZMFeCZe9dfOrWSIvH0DeQL3TdHqx%2Fsc80WbcVzfJsmaY6DwfGAfh1KZtDLUaR%2B%2F9ied67IRgX2gcMWWn47bCBiPKq6WJl3pFbuNCExXQ7BiRMbN7K2Yjv4JKOYSl6nAKP2ah%2BrjqFhFG%2BaKl7Y5I4l5p9%2FEnYhCksieQ5DCS7LPCBjqkAXULDaMPcMgNK%2BU%2BDfKIfWEEWCzBB%2F0klqsT1%2FlqOZMXy5NW%2FqgZ%2Bb6%2BFNrArVBQ2%2FFkC7gX4DU5tS8mNCcZjduzACeVExWuLnNDkt%2BswfqLYkwGmmEawVArhneimUu9IvaLQD1v%2FYhLWD43uWpyr2KwImrf5OSd8rwQIyCOmYNJsQbCAhKRbXkLvjxbBxDTkIs8Ph6SZgsbniWrUb9b0P3jxnqI&X-Amz-Signature=af8ac6110a05954c280f4b037f00c42fda234058b90b382d3dfa078bbb3c1d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIUFXE2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDvY0S83TkOQaFvY8P9hiM%2BeNCCkeLpyXiGcJmVy6x92AIhALOwcU77Pjr2m4KG6sFpIXAwOP20W6oCaIrLa7a%2F1vTjKv8DCCUQABoMNjM3NDIzMTgzODA1IgxiLMK9OgIsZCWMhvoq3ANggcwJgUf9PtcSnIyJ22EaDxg2GmyAVmdCkLa4egGnUwCc1VHxK6wSJQRyZRmHiKVHEGuh2iWiQpIuDJgDfDnMLtR2o5xu9BUMOSq4CL3hB13MAm3p09LYDfoyySaQ54PuDbzgimR%2FnknXmmzdIFIrzGiK4Rs0dBqBVDIVqYOQi0QXPE%2B9DhB%2Fgq1Z4eCqnPNVZ6QGv%2B4DpN26DFF2Yor5g%2BGTConRdMxLt408fpI%2BUUdSThxP6gu6u9rRbNnEKXJgFF%2F4veoWDvReHUqcwC5%2Fi1y18xgmOAg3reKNdrKd8%2BuQafRDQxBSNe7q3t%2FM55CxFIB2p8TYcj88CTjeNjxcOGWwzZQvA2dhtw%2BRLCMyxJQYwBLAgHTA17NvB4IZW07ZROGnxWHjdF4rObyNEI7d%2FlnqVdBmoTq2m%2FG4kT7L%2BoQagPwbEUc9itzJGzP0hLP1ncGZzKSmgWFn8GEalR9aZMFeCZe9dfOrWSIvH0DeQL3TdHqx%2Fsc80WbcVzfJsmaY6DwfGAfh1KZtDLUaR%2B%2F9ied67IRgX2gcMWWn47bCBiPKq6WJl3pFbuNCExXQ7BiRMbN7K2Yjv4JKOYSl6nAKP2ah%2BrjqFhFG%2BaKl7Y5I4l5p9%2FEnYhCksieQ5DCS7LPCBjqkAXULDaMPcMgNK%2BU%2BDfKIfWEEWCzBB%2F0klqsT1%2FlqOZMXy5NW%2FqgZ%2Bb6%2BFNrArVBQ2%2FFkC7gX4DU5tS8mNCcZjduzACeVExWuLnNDkt%2BswfqLYkwGmmEawVArhneimUu9IvaLQD1v%2FYhLWD43uWpyr2KwImrf5OSd8rwQIyCOmYNJsQbCAhKRbXkLvjxbBxDTkIs8Ph6SZgsbniWrUb9b0P3jxnqI&X-Amz-Signature=523e3c2f44bcc3ddb1b80b8ea6bec31e2c064fc0968ff7cf9e232ea6b9fd2992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIUFXE2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDvY0S83TkOQaFvY8P9hiM%2BeNCCkeLpyXiGcJmVy6x92AIhALOwcU77Pjr2m4KG6sFpIXAwOP20W6oCaIrLa7a%2F1vTjKv8DCCUQABoMNjM3NDIzMTgzODA1IgxiLMK9OgIsZCWMhvoq3ANggcwJgUf9PtcSnIyJ22EaDxg2GmyAVmdCkLa4egGnUwCc1VHxK6wSJQRyZRmHiKVHEGuh2iWiQpIuDJgDfDnMLtR2o5xu9BUMOSq4CL3hB13MAm3p09LYDfoyySaQ54PuDbzgimR%2FnknXmmzdIFIrzGiK4Rs0dBqBVDIVqYOQi0QXPE%2B9DhB%2Fgq1Z4eCqnPNVZ6QGv%2B4DpN26DFF2Yor5g%2BGTConRdMxLt408fpI%2BUUdSThxP6gu6u9rRbNnEKXJgFF%2F4veoWDvReHUqcwC5%2Fi1y18xgmOAg3reKNdrKd8%2BuQafRDQxBSNe7q3t%2FM55CxFIB2p8TYcj88CTjeNjxcOGWwzZQvA2dhtw%2BRLCMyxJQYwBLAgHTA17NvB4IZW07ZROGnxWHjdF4rObyNEI7d%2FlnqVdBmoTq2m%2FG4kT7L%2BoQagPwbEUc9itzJGzP0hLP1ncGZzKSmgWFn8GEalR9aZMFeCZe9dfOrWSIvH0DeQL3TdHqx%2Fsc80WbcVzfJsmaY6DwfGAfh1KZtDLUaR%2B%2F9ied67IRgX2gcMWWn47bCBiPKq6WJl3pFbuNCExXQ7BiRMbN7K2Yjv4JKOYSl6nAKP2ah%2BrjqFhFG%2BaKl7Y5I4l5p9%2FEnYhCksieQ5DCS7LPCBjqkAXULDaMPcMgNK%2BU%2BDfKIfWEEWCzBB%2F0klqsT1%2FlqOZMXy5NW%2FqgZ%2Bb6%2BFNrArVBQ2%2FFkC7gX4DU5tS8mNCcZjduzACeVExWuLnNDkt%2BswfqLYkwGmmEawVArhneimUu9IvaLQD1v%2FYhLWD43uWpyr2KwImrf5OSd8rwQIyCOmYNJsQbCAhKRbXkLvjxbBxDTkIs8Ph6SZgsbniWrUb9b0P3jxnqI&X-Amz-Signature=3047b1a1bd8cbb7205baaec43601266c339dd0010914fc8b1e18ef12c6a633cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AHPM7T6%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCnFT9dgg4REOqOcxa591cYjm7cRBHDLHHYjhFGw58bGAIhAKJ4t%2FEQf%2BgacDSJruW7nzdr%2F0GCiySUZPAFUEQtQYisKv8DCCUQABoMNjM3NDIzMTgzODA1Igww5t7iPcbDUzIrBvIq3AMKmvHyQ2ZnA7NTHT9Mbu01Y66ZhsuF4ei%2BNzZ4DGOhN6hMFMgIB6y5g9gYLLdJuMXlpCOQlBLv7FVeIGZ2K1HKOvLT1%2BQI48ipA7FNjQiKWUu3mMayfC2RGa5PTBAzkKQHmMPttVtprC5zaKbRehHleK5sOJDIppTafuAsdmhJfUhR5cBTfCu1C84GbGJm4XybiMMu9CnUkYIiRc1IAytGsCFDAXzs2BDA%2B5FKePnzCOYzhNcPrEA7lXkYbr6EGtb4BnMaV4QdFBxnk8twa992GRyp96IPkIZpPb6trmsKSAjdHJ8e1PSExbA1fDdEgtSPUc8GbVZySICJ98EMEWMHZsVy3xrklv22AYptP%2BUiuPsbY8yhUWh6Mn1YKYl9Ij1g1s2w3WG2swhaDBm41NegW%2F9itNmhM0TboUHyp6e%2BHEi9mhXDeg6Z17IHDW5Elt6qFUl7UbbYQnApqyftdUZ0VaYq3tlhErZSifpuDnZG8VleoXp97Qjy8jtwpVddEBueDvQrcCAQMlzeD1AQ4WGsupHXiUT7rlSJY0HwY8W5yT3HTnYmv893T6KdAU1S3Ud%2BeDhA8t57lUQIgXi1OWPPDxSLEYF7Fn0V8EyyfVanS%2BdTwghBOye6qlNx%2FjDj7LPCBjqkAXE7CrH%2Fi0SXnBX7n%2BdH%2BV%2FRq7de%2BIa0K3MHJplnINhC8O5niBNfk6uBJ3FWwU3VJhSaIKnAvPygv7WSq1XvZJaNxrrxY4VEU97r3VZ4APQa%2BD1jpQerxYvFrpkb3ukpWD8mjbLuhBT87nstuY0LCrU82YmS1m%2BybuBkO9wZFgluVRxHMlTYuv91uKGstsFWSYf59lLBqrHE867uIin6UhB4Emlw&X-Amz-Signature=87fbfc8a5a0e103177f7c9fa0bcaf56b3a2e80d143e36e9701671245fa18891e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CNAS5CE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIC%2B8UN49Ydk%2FCQ1hU%2FbJj0LfNA87kaiftIgI12SbirMVAiB%2FKvG2ekD1HDH8Div6hxDXGOTl84KajUMrIDVDJoX9Tyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMGKSX2QpcH9qy3iZuKtwD%2BBfJYJTUvgfBZKUhNh1zxf7juEsTeHJ3tljc651dsvNa2gFhoBykpKUHYt9%2Bp1hPsdlEi%2BS2sc5vU1SOGFf2tP%2BG93qmE%2FJ8iwhKVBjappxUU7gozyRKzwgDNGxnb9KqyGbPF%2BpO8QqqcSiqTw5yLWGsXLwec3HOHchPA9sXxYKJxKQ6q30UJNst7sT3t4rV1yX11hAWpYjWzw%2FputsCX1RT0r5BX6CBhOS8XysVj7eprSna0C7zOKSgr5HWKZ3nIHg3FmCcuGz0cOAFdR8CutNloSgbC8ONQWcsWAxpaMMQH2sLWxobJXSElMDay9S0g5TN4OOppWaO5mt3iUiO4g8ArmkmPc2SF25IzTW5L6B7sm9KXbngBau5MYGHXWG1xR2AoXW7emuC2nrhnxIgN5wAe9OLh0r7qPNQ1Q16Pb8MjGvS6wlQ316az7MZ2zFclXeaa1Oadafg7%2BomXILy8Zqau4axBybr0hCvF%2BX9lpcVBFKnSAEkdHjsI3F05kDLNrsa6yo5lOWujnvX1SS9VQxbFVsRpA3Aym19b%2BnmVHe7sxqvXfK4RPr2BW%2FDv9n7A0zA%2BkWerO5CzWhpcv%2F%2FVqKjPoqWN0w9YIx0TWGCwpm3BxO1SfCUIGz%2BugIw4eyzwgY6pgGkRYcxxfY7WmXnSWaLRsFQEiRxvzTIH7sXsli9JplHGT77VZUjcXyPpnLD2PRadyo9%2BqHYJBpzDCGrQ%2BcRhfJXo7spZXJFAiYxh0D%2FruHpVG%2BhbgiPHKNUmfEld9vpNkVFaOX3fXtXdFd7PAA3EY9e5FxhS%2BXGXT%2BaIAG3tzv57%2FWeHQXVvrKsUOql%2FjePz%2B0APq7CJVFiu6aCjMOLeYx54raBQYh9&X-Amz-Signature=99400b1fcac0d610bf0a59898cfd15551b48d2ca3a28da258261b053a1c7f49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKIUFXE2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDvY0S83TkOQaFvY8P9hiM%2BeNCCkeLpyXiGcJmVy6x92AIhALOwcU77Pjr2m4KG6sFpIXAwOP20W6oCaIrLa7a%2F1vTjKv8DCCUQABoMNjM3NDIzMTgzODA1IgxiLMK9OgIsZCWMhvoq3ANggcwJgUf9PtcSnIyJ22EaDxg2GmyAVmdCkLa4egGnUwCc1VHxK6wSJQRyZRmHiKVHEGuh2iWiQpIuDJgDfDnMLtR2o5xu9BUMOSq4CL3hB13MAm3p09LYDfoyySaQ54PuDbzgimR%2FnknXmmzdIFIrzGiK4Rs0dBqBVDIVqYOQi0QXPE%2B9DhB%2Fgq1Z4eCqnPNVZ6QGv%2B4DpN26DFF2Yor5g%2BGTConRdMxLt408fpI%2BUUdSThxP6gu6u9rRbNnEKXJgFF%2F4veoWDvReHUqcwC5%2Fi1y18xgmOAg3reKNdrKd8%2BuQafRDQxBSNe7q3t%2FM55CxFIB2p8TYcj88CTjeNjxcOGWwzZQvA2dhtw%2BRLCMyxJQYwBLAgHTA17NvB4IZW07ZROGnxWHjdF4rObyNEI7d%2FlnqVdBmoTq2m%2FG4kT7L%2BoQagPwbEUc9itzJGzP0hLP1ncGZzKSmgWFn8GEalR9aZMFeCZe9dfOrWSIvH0DeQL3TdHqx%2Fsc80WbcVzfJsmaY6DwfGAfh1KZtDLUaR%2B%2F9ied67IRgX2gcMWWn47bCBiPKq6WJl3pFbuNCExXQ7BiRMbN7K2Yjv4JKOYSl6nAKP2ah%2BrjqFhFG%2BaKl7Y5I4l5p9%2FEnYhCksieQ5DCS7LPCBjqkAXULDaMPcMgNK%2BU%2BDfKIfWEEWCzBB%2F0klqsT1%2FlqOZMXy5NW%2FqgZ%2Bb6%2BFNrArVBQ2%2FFkC7gX4DU5tS8mNCcZjduzACeVExWuLnNDkt%2BswfqLYkwGmmEawVArhneimUu9IvaLQD1v%2FYhLWD43uWpyr2KwImrf5OSd8rwQIyCOmYNJsQbCAhKRbXkLvjxbBxDTkIs8Ph6SZgsbniWrUb9b0P3jxnqI&X-Amz-Signature=72cde96b04708cdcada3e91ec5e548a1f5c5146a34e1badd99ca780d8eea2e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
