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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7DR2TA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCmXM%2BNqItHc0w8huUOcmf21OCG2CkCEVC8HVKngJnH3gIhANrCIEUKLZ9tnscQtxWD%2BmJnmxxgKIBJ9FkmEfmTsxyIKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUebY%2BPKACSyrDNScq3ANU%2BjUW2fk%2BO%2BXVmZb497xtkl7Y8tCAg5PAjY21lOh8BYsD1EKglcW%2FqG%2B3c9HknyAlSQ%2FqnrY6xyY5iM1foYKoFRmFMhWUh20sXYev0d3xmq5JxdnRq9OHQ7ep82EqC5iiluOz70p5zWhQhxz%2FSrCkQaT22J1LAYsXlzPbdXc5vYU78TKCy6Hhntf1VFVu%2Fvw7cQM4JIeQ8AERUS8ki5qds%2FslShEB29Y3NB5X78v8K5FaOGtI94imU4KQvl8%2F9r2o8ry%2Bsc9Y4g2CXoEtSxIht1JI8GjXLYspcP49%2FbDVkwGkjz4Vhsre4Il1UV%2Bw1F6PJujYZQbgkSxDepBU3vVA7C9iIAhwV6AE%2FabVMg7zg3CygKPW%2FTjnQImUydwrmtz7MP0jQdoqOlBTeYkbJN5dVV7O8IINVRDzJcT%2B%2BgAF229150NloYUZEsBlDNIx%2FnTFau%2FnS8bzvSf9HXuBUT4TS87UbWn%2Blrr4W5MIutxEUX1I4TIKZDH%2B6O4vJIXY%2F3l8vlZSWr5XBxBMwCnw4l3fvqTIok2rgXRZbVY4FbN0oZhoC%2ByTsOBhgIgiOMnwSN94nF4HIF%2FvwWUCZPxTOemPSz8IOFCcgxJ3G7GyDJmX8xMY6EteyQ3rCA2tIjCatvy%2BBjqkARc3mBvy%2BC7ohmm5p%2BDqUkbL%2BiEqDwpw6VvH9JqAs018e13bhOKDvjp2F09ZJrr81bfTLRiq3jhFzXjIFlygZzZAhlW4zoqBVNflhjyppobo2Fv0vJEjl5iTNI2xGMaa4V712yXL6Iuf4HOOM%2BWEWFzZLPnvqWQnesZX2ZbuKaweB64U3EZXZti34JgoVKm30gKe6EyhRyEhTYYdDMFCnLT5yK4f&X-Amz-Signature=bce727823a911ef4f707b2d12c58b6dcbafe8d7ca26847c468d005037fc1ab7a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7DR2TA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCmXM%2BNqItHc0w8huUOcmf21OCG2CkCEVC8HVKngJnH3gIhANrCIEUKLZ9tnscQtxWD%2BmJnmxxgKIBJ9FkmEfmTsxyIKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUebY%2BPKACSyrDNScq3ANU%2BjUW2fk%2BO%2BXVmZb497xtkl7Y8tCAg5PAjY21lOh8BYsD1EKglcW%2FqG%2B3c9HknyAlSQ%2FqnrY6xyY5iM1foYKoFRmFMhWUh20sXYev0d3xmq5JxdnRq9OHQ7ep82EqC5iiluOz70p5zWhQhxz%2FSrCkQaT22J1LAYsXlzPbdXc5vYU78TKCy6Hhntf1VFVu%2Fvw7cQM4JIeQ8AERUS8ki5qds%2FslShEB29Y3NB5X78v8K5FaOGtI94imU4KQvl8%2F9r2o8ry%2Bsc9Y4g2CXoEtSxIht1JI8GjXLYspcP49%2FbDVkwGkjz4Vhsre4Il1UV%2Bw1F6PJujYZQbgkSxDepBU3vVA7C9iIAhwV6AE%2FabVMg7zg3CygKPW%2FTjnQImUydwrmtz7MP0jQdoqOlBTeYkbJN5dVV7O8IINVRDzJcT%2B%2BgAF229150NloYUZEsBlDNIx%2FnTFau%2FnS8bzvSf9HXuBUT4TS87UbWn%2Blrr4W5MIutxEUX1I4TIKZDH%2B6O4vJIXY%2F3l8vlZSWr5XBxBMwCnw4l3fvqTIok2rgXRZbVY4FbN0oZhoC%2ByTsOBhgIgiOMnwSN94nF4HIF%2FvwWUCZPxTOemPSz8IOFCcgxJ3G7GyDJmX8xMY6EteyQ3rCA2tIjCatvy%2BBjqkARc3mBvy%2BC7ohmm5p%2BDqUkbL%2BiEqDwpw6VvH9JqAs018e13bhOKDvjp2F09ZJrr81bfTLRiq3jhFzXjIFlygZzZAhlW4zoqBVNflhjyppobo2Fv0vJEjl5iTNI2xGMaa4V712yXL6Iuf4HOOM%2BWEWFzZLPnvqWQnesZX2ZbuKaweB64U3EZXZti34JgoVKm30gKe6EyhRyEhTYYdDMFCnLT5yK4f&X-Amz-Signature=73d8a8fa0d4123559efca113f15018e69ace19367f4e56e9e9a73ee9707f0bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWTF2DBX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIF0U%2BblkGz9NBiYFS3%2F7c6xWI%2BIUw5eailL72RmQ5mrqAiA8w6fa7QRV%2BeBIXvxb5JouwQlCzr8JVzES1VRKHGYZbiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1RGJ9gxLXe6R%2FrQKtwDUToXN8V7xAHAXsnRSTrp1iHggG%2BhWvz8NvuFx5lNMNmfAQfJkvoO%2FgAJL5ryOIOoN0AADXGbL2qI%2BJOkK%2F6TaXaiqxXg%2F57oOnNJygsoTLRuBsogGFQY354nyzX1wvNKzsx4QaAtH5G4fPG1Oe3vF70ZpQep9xxZttkOl%2FQdR3aDc%2BoAbz2Z0ndWm54ctB9jC2q%2FnY93SvtDtJR%2F92DaNzpVPHjl%2BQnbEZeAkg7VkNnq%2FJ5yMNOiVj1qduP0%2F%2BSqbewBtFQHG02W8ExRvVMY3akQYKlLziuCwBf1Mn7yZAITepqcZ2nlnTNAe0%2BrLZu4XIy9iKgC6spQf0%2FCwOkV5KcgoW4Z5hAqTbNlBQl5dL%2BcwAuBkUjC8SOu3rw6sDQ0sD2LMj0u7KfZ9PP1aloKn3msH55tfDEICL4NPxQZQn9e6dVj4A82bOqzkpM0j2PmOqikuFnbu8MDkj0qExLxVszxUgtJYbUbnS4vvZdtOyAjSsvc%2FzO3dCltLvSxPuFPYlk32awi3s7NpfNKoblgfJpy32Tpp95sLC9G6GkFyCBUXAJfL4sYzMkBEfXWguzX2fACQfhvwJAKFIFo7B9qgMFSljo6aRLJ%2B9fVb7pg7EKA4dMaJXhysVL8eMMwxbb8vgY6pgFMQ85jkMUanj90V6DxpdgU2i0AvPP2hI1EQBtvqDAJwVhna54czmkhjnQ3ztO3A%2FzZ0REdQ8yA8sKm3UnsOFO6q8JloLQMh11niKpH2fr41DMmhcbm5dceTSvIQ833vvkA%2FWrvGuBNws5MUhqWG2DZAWAS98MklVgkqGjbgDs7rckXsakLO5VEzvh3BpM%2FJ6tiQB3rM%2FcpsN9U%2BhhkYJdkc761khaz&X-Amz-Signature=4befe2ad72e8bc9dea78e2ba6f350fd1229a3a05eed562e132158b56898d306a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCX6WGO3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICG2qQw6AvbX8uaPdi70044Me0hydQ5G4ulmsOsin0%2BDAiEAlIdjWGglI4gckZXxu1rK9mQEfxh6hxNjJCO2BSCGnRIqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FRr95IAg7DR2OQTircA6VoLeanWDH3u0hh%2BD8rxv8KPAZjOLSmN2FwokNazH0BM05FwC0kHC8NqJIzcVGWxiHE2CM06b7%2BcU5jrSGWMmJZ6EG2LR3Y1Qhvt1sfSbB1eFwocF0YJPU0sWtvuT%2BN1UXVtODwf5%2BFZE5rJDxLE0K54wgydJURkjRLS4Tw%2BSd3V4HqAYm%2BLlE%2BYmDaZZUrRhNWTa36aS95q8Q8tOEFriBNG2xz78tII9V%2FeXVRpeFrSLF1WP79FKwvXvrl3XT8p25dLhtLZrq%2BM7SaKACvlMoqCOv9LKUj9Id56SU%2B7wsq1sZGgxX416TjFS70avMBEhQibPkUo1N4nvyglnbjtCNYHaOJT8tI7amEGPfD7wRYQbNnEl18OdY%2F%2BdkwamyV6dDHDMpr67hVHENwF7X79e5awwBXREezFIduiBjbV7WjE8M6nY23S83xNLkX5BnI1xYzX99SJYFVYwzkAS%2F52z%2FkLtkzgk27O7M2637q1C6BeyImda98Doi%2F95uETmrP0ZiG%2FK26KOhHem8mUtGUnl2%2F%2BGO2hvdYgPNe5AhuEbUSPjuOb9TVOgoeme3KK5pzMRRHxfuN2xqRS9VaYAxYhzmISzG0FrWcTEX5xuFIP66gc7sx0d8LoY2mMd8ZMIK3%2FL4GOqUBV%2FmynJwGYKK7QggXFv6MrNYNK5LsQ%2F%2B4vMyb8mZ%2BGxRPd8s6%2B1Z8aOeOFeG%2FATumZjHztsnwGWwJNVrNukYBg%2FaAiBc0hYiVbiuYLWQ%2F9gMzfKSgdkmxh4734WSx%2FeSERrpbdZ5bIOMajXzxm5sLlpDb5AN7stxnlzQbmqdTXm6cjR2fknGu%2BUCnrOH6HcqlBWXSdNmoRuUjh5mKBrz8w%2Bbl7GDx&X-Amz-Signature=9f1a804ef1dc36679bfbf2908942fe50cacd1a308c16a19c48dd42e5a875296b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW7DR2TA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCmXM%2BNqItHc0w8huUOcmf21OCG2CkCEVC8HVKngJnH3gIhANrCIEUKLZ9tnscQtxWD%2BmJnmxxgKIBJ9FkmEfmTsxyIKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUebY%2BPKACSyrDNScq3ANU%2BjUW2fk%2BO%2BXVmZb497xtkl7Y8tCAg5PAjY21lOh8BYsD1EKglcW%2FqG%2B3c9HknyAlSQ%2FqnrY6xyY5iM1foYKoFRmFMhWUh20sXYev0d3xmq5JxdnRq9OHQ7ep82EqC5iiluOz70p5zWhQhxz%2FSrCkQaT22J1LAYsXlzPbdXc5vYU78TKCy6Hhntf1VFVu%2Fvw7cQM4JIeQ8AERUS8ki5qds%2FslShEB29Y3NB5X78v8K5FaOGtI94imU4KQvl8%2F9r2o8ry%2Bsc9Y4g2CXoEtSxIht1JI8GjXLYspcP49%2FbDVkwGkjz4Vhsre4Il1UV%2Bw1F6PJujYZQbgkSxDepBU3vVA7C9iIAhwV6AE%2FabVMg7zg3CygKPW%2FTjnQImUydwrmtz7MP0jQdoqOlBTeYkbJN5dVV7O8IINVRDzJcT%2B%2BgAF229150NloYUZEsBlDNIx%2FnTFau%2FnS8bzvSf9HXuBUT4TS87UbWn%2Blrr4W5MIutxEUX1I4TIKZDH%2B6O4vJIXY%2F3l8vlZSWr5XBxBMwCnw4l3fvqTIok2rgXRZbVY4FbN0oZhoC%2ByTsOBhgIgiOMnwSN94nF4HIF%2FvwWUCZPxTOemPSz8IOFCcgxJ3G7GyDJmX8xMY6EteyQ3rCA2tIjCatvy%2BBjqkARc3mBvy%2BC7ohmm5p%2BDqUkbL%2BiEqDwpw6VvH9JqAs018e13bhOKDvjp2F09ZJrr81bfTLRiq3jhFzXjIFlygZzZAhlW4zoqBVNflhjyppobo2Fv0vJEjl5iTNI2xGMaa4V712yXL6Iuf4HOOM%2BWEWFzZLPnvqWQnesZX2ZbuKaweB64U3EZXZti34JgoVKm30gKe6EyhRyEhTYYdDMFCnLT5yK4f&X-Amz-Signature=19ab29a999fda4161a00cbe92de627ff514c93e6f9c5df16bf066fcfd6e5cb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
