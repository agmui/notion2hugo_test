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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS65MPGD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDDROve40LgCsuBot3ODIgeiOaGWga%2F%2BPsU0YU%2FdE3QQwIhAMalmbHGVli1uYwMJLYySYJuEWomvwkOqqaXKlyb9bTlKv8DCDoQABoMNjM3NDIzMTgzODA1IgzBkLI344V9Cc4hhroq3ANUEplmwr18NMnQkZfhqg8pH%2FCU6RhhQ65rBzg%2FzWH7pC9VWpq4M0EmcpwFTrbEfu%2F9PBYFBw5CpgmMsTlqDTjvwan7M6BwoX252hL7qWiZADYW5nTtXgHOWFkHOF%2FT8wBbu5lhungnbW%2BTkjgv3xzI%2FEmLJVc3%2B1ltroiuqp6ZdQNz8HUTgwZrAkP7k37nFeIrvdpiUzXFkaePa%2FRbkhdFmEICh%2B8pSAtDWMOZ%2BepYwP3dGNRIfLjs%2F06lNPng9OpZkRptptM9DcExLj9IkqPxcQzbrCuBhVhisZdVHKDj9hyByYf8JhqDWaWqPkqRiw%2B9VV8n6HjgkLrYSu%2BI%2BR2Ktsxba1cTip19oVw7U09dPFvIHF%2FbkwYyxp8s6RwXXMDlUT3Gn01dl8TVBLIFiLQ07Jd9uzDYBO311FCHjMRX6m2JC7ZqUZYf7CzTMU3bNuK6%2Bb11NEUw3jQLYc56zEi0gxyaxweKHf5fJBK9st7hg1ZkECjOUB1nCR7fycQQU%2Bd5y7kuv%2By4bAxF5Cb26fGPDghvNh7EArm9vPWWGlitssdnPFdWrPv3WYP6Xoi1X1MHyBX0mbJJeSJHwIlDHZoCoF1dPOk3nOrxlyEn1wVeGWOILktmu0ytqP0eLDDx%2Fr%2FEBjqkAdl4zJPKIq7kXKK5XIXWNEAqUjZaNP9UTJbTHCwOQHf4xu2WUU%2B7UN%2BS86LEenDQr8iCrD7ytcfj%2BklOddBkP9pMSfj5UHB%2F89lJV9%2BPeeqMElXVAbT6qbXak%2F%2Bwihw6YrCjPU9bsSblx7BUcrDltE12lh8QmEBDfg1rM8lxN5We%2FOaOUYDSDjoHZVbbceOpkFszLMFeih9Etzf0ez2FLDvvJ1h8&X-Amz-Signature=17039402d6b6b53cdbd45e56dd62aa0c67eaf06f0908e5abe4d8922e18b4ea03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS65MPGD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDDROve40LgCsuBot3ODIgeiOaGWga%2F%2BPsU0YU%2FdE3QQwIhAMalmbHGVli1uYwMJLYySYJuEWomvwkOqqaXKlyb9bTlKv8DCDoQABoMNjM3NDIzMTgzODA1IgzBkLI344V9Cc4hhroq3ANUEplmwr18NMnQkZfhqg8pH%2FCU6RhhQ65rBzg%2FzWH7pC9VWpq4M0EmcpwFTrbEfu%2F9PBYFBw5CpgmMsTlqDTjvwan7M6BwoX252hL7qWiZADYW5nTtXgHOWFkHOF%2FT8wBbu5lhungnbW%2BTkjgv3xzI%2FEmLJVc3%2B1ltroiuqp6ZdQNz8HUTgwZrAkP7k37nFeIrvdpiUzXFkaePa%2FRbkhdFmEICh%2B8pSAtDWMOZ%2BepYwP3dGNRIfLjs%2F06lNPng9OpZkRptptM9DcExLj9IkqPxcQzbrCuBhVhisZdVHKDj9hyByYf8JhqDWaWqPkqRiw%2B9VV8n6HjgkLrYSu%2BI%2BR2Ktsxba1cTip19oVw7U09dPFvIHF%2FbkwYyxp8s6RwXXMDlUT3Gn01dl8TVBLIFiLQ07Jd9uzDYBO311FCHjMRX6m2JC7ZqUZYf7CzTMU3bNuK6%2Bb11NEUw3jQLYc56zEi0gxyaxweKHf5fJBK9st7hg1ZkECjOUB1nCR7fycQQU%2Bd5y7kuv%2By4bAxF5Cb26fGPDghvNh7EArm9vPWWGlitssdnPFdWrPv3WYP6Xoi1X1MHyBX0mbJJeSJHwIlDHZoCoF1dPOk3nOrxlyEn1wVeGWOILktmu0ytqP0eLDDx%2Fr%2FEBjqkAdl4zJPKIq7kXKK5XIXWNEAqUjZaNP9UTJbTHCwOQHf4xu2WUU%2B7UN%2BS86LEenDQr8iCrD7ytcfj%2BklOddBkP9pMSfj5UHB%2F89lJV9%2BPeeqMElXVAbT6qbXak%2F%2Bwihw6YrCjPU9bsSblx7BUcrDltE12lh8QmEBDfg1rM8lxN5We%2FOaOUYDSDjoHZVbbceOpkFszLMFeih9Etzf0ez2FLDvvJ1h8&X-Amz-Signature=91727f9b1e42d370b856b5436448c9f8d4f783a759d182554fa4b0a89d605cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS65MPGD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDDROve40LgCsuBot3ODIgeiOaGWga%2F%2BPsU0YU%2FdE3QQwIhAMalmbHGVli1uYwMJLYySYJuEWomvwkOqqaXKlyb9bTlKv8DCDoQABoMNjM3NDIzMTgzODA1IgzBkLI344V9Cc4hhroq3ANUEplmwr18NMnQkZfhqg8pH%2FCU6RhhQ65rBzg%2FzWH7pC9VWpq4M0EmcpwFTrbEfu%2F9PBYFBw5CpgmMsTlqDTjvwan7M6BwoX252hL7qWiZADYW5nTtXgHOWFkHOF%2FT8wBbu5lhungnbW%2BTkjgv3xzI%2FEmLJVc3%2B1ltroiuqp6ZdQNz8HUTgwZrAkP7k37nFeIrvdpiUzXFkaePa%2FRbkhdFmEICh%2B8pSAtDWMOZ%2BepYwP3dGNRIfLjs%2F06lNPng9OpZkRptptM9DcExLj9IkqPxcQzbrCuBhVhisZdVHKDj9hyByYf8JhqDWaWqPkqRiw%2B9VV8n6HjgkLrYSu%2BI%2BR2Ktsxba1cTip19oVw7U09dPFvIHF%2FbkwYyxp8s6RwXXMDlUT3Gn01dl8TVBLIFiLQ07Jd9uzDYBO311FCHjMRX6m2JC7ZqUZYf7CzTMU3bNuK6%2Bb11NEUw3jQLYc56zEi0gxyaxweKHf5fJBK9st7hg1ZkECjOUB1nCR7fycQQU%2Bd5y7kuv%2By4bAxF5Cb26fGPDghvNh7EArm9vPWWGlitssdnPFdWrPv3WYP6Xoi1X1MHyBX0mbJJeSJHwIlDHZoCoF1dPOk3nOrxlyEn1wVeGWOILktmu0ytqP0eLDDx%2Fr%2FEBjqkAdl4zJPKIq7kXKK5XIXWNEAqUjZaNP9UTJbTHCwOQHf4xu2WUU%2B7UN%2BS86LEenDQr8iCrD7ytcfj%2BklOddBkP9pMSfj5UHB%2F89lJV9%2BPeeqMElXVAbT6qbXak%2F%2Bwihw6YrCjPU9bsSblx7BUcrDltE12lh8QmEBDfg1rM8lxN5We%2FOaOUYDSDjoHZVbbceOpkFszLMFeih9Etzf0ez2FLDvvJ1h8&X-Amz-Signature=b94ad5e655219b374bb242cdf88b045d19c6dba9488d833fb75fcbdd309a0e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636PVGYQN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHhEMLTekuq0LfCnzwEITF0G%2BJinVcL19HExfFr3%2B9QWAiEAoqAihZgLgNKMZD7LiojI1rqt%2B%2F5eHMHLr%2BX10nhs3ckq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPMkI9KJ9s3Ul%2B8amCrcAyblY5emO%2B301SXa9zcnHE0DDXEwTopOvu0zNgAH20qxvm1d1dfNccanLFLeIE5Nzw493XPvBWZdUJaFzcTZWIQ0aQVrfbtIsj%2BZuug2p2ZBq5ofzIf0i2zwMvCD3ifm7UxM3VfOkoMprUN%2F7sTBVu2OnsuHH3zyM4QtKBxPl6dXwJ3iD46RRYxm3iz0U7JxMi%2BHYjbSJWtYj8G%2FQ8YWRLAcqLM3F2z%2FMkH7RkV3%2BYSeq8noXt%2BR%2FwE6CcNM5upCn%2BG4nLVgT%2BobVr52ybKLeauyUdINrYuSz2mK4%2Fh992GDfgYlsKlqU4hWDAvHoVpMUtZCp3sIQMyNjFs%2BRmmN0hG51Pwfpu%2BFGp1Uxpqjzwf9omQPuooutKVkjIKVkRrx9sJ0ObT7FxvejBjRBfl%2FVhKMu5jq0uCiw%2BR4eR83cUi6ie%2FdSwIerC8P9DUWKeoqElVN1kSYOMKMOW7BM9DhV6EXYiVg4PQ3D9dywPgKxMNFJLLj24s5EaxMRUxWMNrmLU1ep%2B9VM8XoA8XpID5RfLr5m1ckt%2F4Rjh3JFevFLZ1gEM%2Bvow6QpBFJZ5BN75sEuZmiIFzpiZh7fwDsw%2BjaAs6Rqn%2BWFdM%2Fm29E1vh0Ki%2B7%2BaGNCPj%2Fu27x7GRAMMjFwMQGOqUBeUhYyXwnklUH%2FjtC9mjjRRj9vCywqpgy0Cx%2FW0VXuxpUg253H1NOiT%2Bo7ILOYfS%2FhTW2AAuEyUTjibf%2BsAB3qjQCY3IeYeBB%2FewlKEZectmJlVeqFzv2oh%2FPjNKAO9V95J563GoOtXeg%2Fhbsh6tC%2BUlzRm3lJzcnvtgVR587Rt3MUQnAcdSOuVGRNNvZqLnwQQT5lueZ6KIBEVHiEXp58AyOVolO&X-Amz-Signature=4d53391b7b6413cd9495c47d56a1141e4a8e4e89174b25afc0f9c0dedcd28f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFE332PH%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHYtpRKA432I0TKuF1qZYTmkOWN0WhUDtiP3WgIf1GKUAiBsLUJhSWIJagFStd6Tw3NW69buFn1PpN6yCXfFzzK3TSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMaP49q%2FaYPZylciHQKtwDIoKqD1nbhyefVCv53chdi3yl4ts5v5d9CYh3iV8rL89mHdQthZcZAFvs3kgXmm8WX4eVBHdcvgn7pJtRIm4LJlkGMImggxiV9xwi6VIpEoI2tUiObYtDI5ec6f3%2BZ7Fe42YH46aad%2BICAFf32QXROa%2Fo7apBONmFdOmxH8CCfq6JRiakQFpYqJqdzde5Fi5flQVlk%2F%2BSx3pZEKQCqJejQ4WhWZpIn2bICayPtDIILguz2Gzgs6B%2BZIbEROADlSn2P3dg2tDKNLCln5JtCe8qa2hXygtB225zOk1HW0Hz%2Fsr2KDjlkNQ%2BBX24tNLyRjTweewwY3B1GWtsbGtVLfcqXist1RkhM474pjUFthdhFyqEusNYreLzmLEyxE1Y%2FYHWVq0kaJXINB3XrLdE%2FzVyAfpoDcKPrbTSgxebfYeU8ISuAph4KYJFk7wblzm%2BKzZbX7B4Ftcdq07eWrUJz%2FKVUyR%2FX5ncp9WjlJaWBZ2oSUofBEY%2BctjfWZBN7XufMtkzdvMLy1EG9QL%2BAQ%2B7y0Ur8YSU%2FrZ7eA6t%2FWNwlExRTn%2B%2F%2F%2BxLn7d4Cut7pRgFIQaMB3wwC9zViJLe6%2F%2BBXBjyHMDvSv8afzFr9%2BLRLbLdI%2BFBGVTsR7fKlbWv%2BW0w78XAxAY6pgHtUnhBzt6QiJyhbfU%2BBqav39oJsmBqmYvAfsQL2JN5w19lrW9VZWnegYuJ9kq4cMqghs1UkRS%2F%2BkC15FHlZpOeeC%2BrVk3LVv81Es3HZ8fUtbtAqvoBn1BeGLvQVQ65hwCcqkKqPWM4ErGpuYyrKxDmSqc%2Fd2ltSymGfEz8ixiov7hGxnX1DmtGvNdSwhEyLSJjFBWG0lgbRRVjd9GCSdPFn%2BGXcEe7&X-Amz-Signature=cf40c809eb0965e789f473dc42cfebc4ad8152d049d6c8f8bb7d1124fc9ac5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS65MPGD%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDDROve40LgCsuBot3ODIgeiOaGWga%2F%2BPsU0YU%2FdE3QQwIhAMalmbHGVli1uYwMJLYySYJuEWomvwkOqqaXKlyb9bTlKv8DCDoQABoMNjM3NDIzMTgzODA1IgzBkLI344V9Cc4hhroq3ANUEplmwr18NMnQkZfhqg8pH%2FCU6RhhQ65rBzg%2FzWH7pC9VWpq4M0EmcpwFTrbEfu%2F9PBYFBw5CpgmMsTlqDTjvwan7M6BwoX252hL7qWiZADYW5nTtXgHOWFkHOF%2FT8wBbu5lhungnbW%2BTkjgv3xzI%2FEmLJVc3%2B1ltroiuqp6ZdQNz8HUTgwZrAkP7k37nFeIrvdpiUzXFkaePa%2FRbkhdFmEICh%2B8pSAtDWMOZ%2BepYwP3dGNRIfLjs%2F06lNPng9OpZkRptptM9DcExLj9IkqPxcQzbrCuBhVhisZdVHKDj9hyByYf8JhqDWaWqPkqRiw%2B9VV8n6HjgkLrYSu%2BI%2BR2Ktsxba1cTip19oVw7U09dPFvIHF%2FbkwYyxp8s6RwXXMDlUT3Gn01dl8TVBLIFiLQ07Jd9uzDYBO311FCHjMRX6m2JC7ZqUZYf7CzTMU3bNuK6%2Bb11NEUw3jQLYc56zEi0gxyaxweKHf5fJBK9st7hg1ZkECjOUB1nCR7fycQQU%2Bd5y7kuv%2By4bAxF5Cb26fGPDghvNh7EArm9vPWWGlitssdnPFdWrPv3WYP6Xoi1X1MHyBX0mbJJeSJHwIlDHZoCoF1dPOk3nOrxlyEn1wVeGWOILktmu0ytqP0eLDDx%2Fr%2FEBjqkAdl4zJPKIq7kXKK5XIXWNEAqUjZaNP9UTJbTHCwOQHf4xu2WUU%2B7UN%2BS86LEenDQr8iCrD7ytcfj%2BklOddBkP9pMSfj5UHB%2F89lJV9%2BPeeqMElXVAbT6qbXak%2F%2Bwihw6YrCjPU9bsSblx7BUcrDltE12lh8QmEBDfg1rM8lxN5We%2FOaOUYDSDjoHZVbbceOpkFszLMFeih9Etzf0ez2FLDvvJ1h8&X-Amz-Signature=f1e49323d600c90d890e9e6f776712d76edbd486fa26bf88fe07518ae7a17e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
