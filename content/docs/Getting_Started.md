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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVZVSKF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvEtvQjs3XrdR4m5mXrKt63geBrhO9PsLOVbF3P7siAiAZLGT%2Bz2ZCJmsEF%2Ff4BYcif3ImU3orm9ahFwg9QhidySqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7xlE8nFzbelVu3YGKtwDHoK%2F4GE%2Be8CxQJLLRehVZbjhsgNGJLvsGjEprczaRay5I19wb08D0E72vpbb%2Fim9cWGJoxCYGZWc%2FC1vce6%2F5f0RJy1dOlGVPyuFYLN6xBuAFxQqIJcyXe422UP7%2B1XRFGBR%2BEjNJsf1L8b7Ndv1IlC1lw1ELZYM%2Fd5Ely2PONwOXeP6u%2BEqwE9zeMXmZ%2BXvsc13fegjOrZ3yeV2O%2FpR5HhBKLkHTvKOw%2BAv0OFyT79kjJkZlNfwnGlJCwJRRsvh61nDFjMekeYGRZzdghrk7Zh0lD8mhMCB8qg3u8qhdkszZPFgNVE2WuG5pQEgh8ArSa%2BlD7OHV9LyjZz2gBBDQMktBXgACOZD5%2BHzkntoHgW33p6ZS5xL277XkR4%2FkQIQcXulN9pio7YjfbVcS7m913yaj%2FZw7DkqTEJGZD7z%2BYWUqzjf%2Fm5QmpCb%2B2hOlMygwrLsCnEch2Tt1tKhCKrCjFbMEi%2BvrunnSERftwh8GxHI7qSmMXiX5HZstWmFTGsYOo9y7iWx9gdvID8ZSHyP9TRVsdZHTmrlKXEIqfm67Asibf1ORPr%2BkfD1iVtov37zLzIaBPqVCLW3fKMz6xatZQhUZJcqBYe6tRv5FNkjWStIUgAQxck8F5mWnrkwtoPGwwY6pgElHWLjn%2FjmTZsiiCV%2FKvhTXF7TiffFxmSJfcStX0jbjMbeVoSD0Oi0OhymGQvQCJra4qQoBvgT5GO8B%2B9ddfMs2FRsKNGZDyqn4oOQ3Vb%2F4oURLg9RQ1gPC46KPUpu%2F8yzGXMxadNd%2BzGSQaQGRQtFY7V7VNtYaovLqV7%2FJdSNsuu%2FBMWpr6zchLo6zDg21rJPbEXUeDQUksif5HXvK8weWYr2few1&X-Amz-Signature=cdab1674c6a4be66d8c971de5cbec6b9d96dc44e3e888fdfd1c8ab7806b25d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVZVSKF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvEtvQjs3XrdR4m5mXrKt63geBrhO9PsLOVbF3P7siAiAZLGT%2Bz2ZCJmsEF%2Ff4BYcif3ImU3orm9ahFwg9QhidySqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7xlE8nFzbelVu3YGKtwDHoK%2F4GE%2Be8CxQJLLRehVZbjhsgNGJLvsGjEprczaRay5I19wb08D0E72vpbb%2Fim9cWGJoxCYGZWc%2FC1vce6%2F5f0RJy1dOlGVPyuFYLN6xBuAFxQqIJcyXe422UP7%2B1XRFGBR%2BEjNJsf1L8b7Ndv1IlC1lw1ELZYM%2Fd5Ely2PONwOXeP6u%2BEqwE9zeMXmZ%2BXvsc13fegjOrZ3yeV2O%2FpR5HhBKLkHTvKOw%2BAv0OFyT79kjJkZlNfwnGlJCwJRRsvh61nDFjMekeYGRZzdghrk7Zh0lD8mhMCB8qg3u8qhdkszZPFgNVE2WuG5pQEgh8ArSa%2BlD7OHV9LyjZz2gBBDQMktBXgACOZD5%2BHzkntoHgW33p6ZS5xL277XkR4%2FkQIQcXulN9pio7YjfbVcS7m913yaj%2FZw7DkqTEJGZD7z%2BYWUqzjf%2Fm5QmpCb%2B2hOlMygwrLsCnEch2Tt1tKhCKrCjFbMEi%2BvrunnSERftwh8GxHI7qSmMXiX5HZstWmFTGsYOo9y7iWx9gdvID8ZSHyP9TRVsdZHTmrlKXEIqfm67Asibf1ORPr%2BkfD1iVtov37zLzIaBPqVCLW3fKMz6xatZQhUZJcqBYe6tRv5FNkjWStIUgAQxck8F5mWnrkwtoPGwwY6pgElHWLjn%2FjmTZsiiCV%2FKvhTXF7TiffFxmSJfcStX0jbjMbeVoSD0Oi0OhymGQvQCJra4qQoBvgT5GO8B%2B9ddfMs2FRsKNGZDyqn4oOQ3Vb%2F4oURLg9RQ1gPC46KPUpu%2F8yzGXMxadNd%2BzGSQaQGRQtFY7V7VNtYaovLqV7%2FJdSNsuu%2FBMWpr6zchLo6zDg21rJPbEXUeDQUksif5HXvK8weWYr2few1&X-Amz-Signature=f05c6354894941addf9ebb848f8a5a18d49036cf06f444bcad021d0d8a50986d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVZVSKF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvEtvQjs3XrdR4m5mXrKt63geBrhO9PsLOVbF3P7siAiAZLGT%2Bz2ZCJmsEF%2Ff4BYcif3ImU3orm9ahFwg9QhidySqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7xlE8nFzbelVu3YGKtwDHoK%2F4GE%2Be8CxQJLLRehVZbjhsgNGJLvsGjEprczaRay5I19wb08D0E72vpbb%2Fim9cWGJoxCYGZWc%2FC1vce6%2F5f0RJy1dOlGVPyuFYLN6xBuAFxQqIJcyXe422UP7%2B1XRFGBR%2BEjNJsf1L8b7Ndv1IlC1lw1ELZYM%2Fd5Ely2PONwOXeP6u%2BEqwE9zeMXmZ%2BXvsc13fegjOrZ3yeV2O%2FpR5HhBKLkHTvKOw%2BAv0OFyT79kjJkZlNfwnGlJCwJRRsvh61nDFjMekeYGRZzdghrk7Zh0lD8mhMCB8qg3u8qhdkszZPFgNVE2WuG5pQEgh8ArSa%2BlD7OHV9LyjZz2gBBDQMktBXgACOZD5%2BHzkntoHgW33p6ZS5xL277XkR4%2FkQIQcXulN9pio7YjfbVcS7m913yaj%2FZw7DkqTEJGZD7z%2BYWUqzjf%2Fm5QmpCb%2B2hOlMygwrLsCnEch2Tt1tKhCKrCjFbMEi%2BvrunnSERftwh8GxHI7qSmMXiX5HZstWmFTGsYOo9y7iWx9gdvID8ZSHyP9TRVsdZHTmrlKXEIqfm67Asibf1ORPr%2BkfD1iVtov37zLzIaBPqVCLW3fKMz6xatZQhUZJcqBYe6tRv5FNkjWStIUgAQxck8F5mWnrkwtoPGwwY6pgElHWLjn%2FjmTZsiiCV%2FKvhTXF7TiffFxmSJfcStX0jbjMbeVoSD0Oi0OhymGQvQCJra4qQoBvgT5GO8B%2B9ddfMs2FRsKNGZDyqn4oOQ3Vb%2F4oURLg9RQ1gPC46KPUpu%2F8yzGXMxadNd%2BzGSQaQGRQtFY7V7VNtYaovLqV7%2FJdSNsuu%2FBMWpr6zchLo6zDg21rJPbEXUeDQUksif5HXvK8weWYr2few1&X-Amz-Signature=c1b4c1022bec48de1f5170503c9f9b1c17309a5350e5edac1aef561263e7f56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5E26MSF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Tnxs0L1Cm9wIfsBMdlxdTa63IiHuPjBqn9RVMt5ijAIgJxOhalq5YIW9gHSkRzftQn8oFV5PdzIWCbCjV8x82TgqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQWsdny1c7W4dfrzyrcA5GgiJ6uFhsVVmpCvAZyZe47fTckc33WBhd1toSYNJwYpIEzQHlW9kOT3OmUYkUDLO271SXjQ5Jn84yZg6%2B6vwTrf5YGoKhj2r%2BUXTZpBRklpHvTOBP2%2F6Xrp%2BKR3Vb8OqWYXrzmVcZY00AH7GOwXindGo%2FitRCIAKltODeXkmgfU5H4DcKHgC%2B8jgGkb99q0UEY7H9TdHMFpWlKTqBOCZ8U%2FInbsU0BoKyBSH1EGr%2FTiLvKmuHLI9ofMjHXGFNq450gK5U%2FAg561jH5BfpTPW3XN3feHU4P2Om%2Fhn538vjW1wU9%2B%2Be61mlv0Poa8ywTCgnOBScHDcTmTPTBFMQ%2BH11SI0voASjMqPADs4e4F6mTF4a7mpBeJy5GA6%2F82ldxITtJE8oQSR2RUZXHvcMPtgBmbGHUz4%2BP0Cnrs6Og%2Fp1ojl8qt7icYZIKn%2FqGsgsljL7uTO7WnV9KUBzRSgDGSsXpf4JedXn3krvM5zNb1HnSOAj9VkkfBCPi9oyGAeEIOzTMtievk49UdFidb6WHlw7wLui601sCstIwDOCvEMPQfl8%2BIHDGcoC0Cn5xGmI68yKcTL%2BMInRjXKRPKedOm%2FrxjrusClj0OGsUXmKVl%2FAP5JxxzuZQa9PYj8AbMPyDxsMGOqUBKIKO%2B7Ny%2BPzwzhYJeOs2un8FXYiL4RjZxpJrOOpKYNMMhEyIiqEBRh%2F%2BZvmPHGzNutn9Bmqa198owN4f4ovQDTjcyOYwlQh6lDe8tWfXOlPOFuUSFhsYCcTpx2pVeUCT5TDgJ0EM4CYUUk8LZqgu6g30GmYuOwAejTC%2F96EnrNP5C%2B3XoXlxkeJxRreQSWqgxh7MQIIBxqZs97WUQVWf2ShRr0N2&X-Amz-Signature=24bb126fa1f0a2ea8130484867652b1a89bd745025277e33e8b021e13cd36bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZK7JGOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArcyC3vMK4pcSOO1gX%2FTK9QOgRBB0ry2AGxg27pYbTdAiBaADynHh60WIJ5AsCC0Uc%2F06nZofu69%2F2ljZBODF6CfCqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2FkPq9nLrrPFduuDKtwDH5yvSaGH0TJQgBVjojFRqSK5USTM%2BlJl%2B2cobflqkFEzwozwepC%2Bo1GtQgr0Ek6%2BJeFUS%2BH8pJp5PZ76MzlbNcuM1xEhe%2BVPmKP%2F3D8%2BhvTq2dWJcF7VmgyfYKRzwWxkNaYjMyt7s0zlc3HFispKdZPzxnvLRpvvq%2Fci1%2BQQaLL4H5r6BknvtnoQuoWOiFXUu9kdhe6NAhAjaGyKPuJT%2F7vZCBmWbYsn%2FaxIuiTPTiLFGkoa1UxBE0qRDUhUOYzLRp0HBbbdcubvOXoHdWqocyfbv%2BCkWDEe2sDM43caYFLBn3XgVxtOqZFckqAZvydkgoBz1mmGxXI8EGiXtme5hH%2BDOCtZFfTG4cOYvlNo38OVdhdf6Yp5aWiZRqDFoD%2BS2Zc0eGRAj89UTo7p5mjOYida864lDHzXPInCd2HTIa6FsLHtHhuyi2QCvB8JD32WBndkZpOGivvDfE58aHnrr5FlHoDwjFK8rETmgCeH%2Biyqwuwp%2FfCYwrDfh7zsra8XFZcebtzjdIYHfrxRAVjvZxuQOShZBzjhsc8OWIzqcJ4e4ZK%2BFEv%2FHIryBmRuGc9kti838phqkVbPAfoPBXjf6%2FgjwD4F5o4H9TgP4Oo%2BKrJnGhwM3stKle1xfgww74PGwwY6pgEQVpyZON%2BqbwuCDbLOKqsi6ZnE9KEv31GMleztYv2vBh1spRt8SulSl%2BF9WGH4t5JsPz4ebWL4M%2BVMHkFPghgcKTxfbqCRIhGQk0Mzg7QzyM77c8%2F0QTzv2CBLsdlNZc6onC%2FIF4GUoSyJle3TGP5IrC5gSV9ko6NmGE7gRM2iXqTgiVPmo14CtCFn%2BPvtrkYEa7i2xFSW2W63UgyaCrOgiu2O2NeT&X-Amz-Signature=9755327c135a0ca7a7ce73a30217b4d3a34d8b5ae5328156f41b985f642bc50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVZVSKF%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvEtvQjs3XrdR4m5mXrKt63geBrhO9PsLOVbF3P7siAiAZLGT%2Bz2ZCJmsEF%2Ff4BYcif3ImU3orm9ahFwg9QhidySqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7xlE8nFzbelVu3YGKtwDHoK%2F4GE%2Be8CxQJLLRehVZbjhsgNGJLvsGjEprczaRay5I19wb08D0E72vpbb%2Fim9cWGJoxCYGZWc%2FC1vce6%2F5f0RJy1dOlGVPyuFYLN6xBuAFxQqIJcyXe422UP7%2B1XRFGBR%2BEjNJsf1L8b7Ndv1IlC1lw1ELZYM%2Fd5Ely2PONwOXeP6u%2BEqwE9zeMXmZ%2BXvsc13fegjOrZ3yeV2O%2FpR5HhBKLkHTvKOw%2BAv0OFyT79kjJkZlNfwnGlJCwJRRsvh61nDFjMekeYGRZzdghrk7Zh0lD8mhMCB8qg3u8qhdkszZPFgNVE2WuG5pQEgh8ArSa%2BlD7OHV9LyjZz2gBBDQMktBXgACOZD5%2BHzkntoHgW33p6ZS5xL277XkR4%2FkQIQcXulN9pio7YjfbVcS7m913yaj%2FZw7DkqTEJGZD7z%2BYWUqzjf%2Fm5QmpCb%2B2hOlMygwrLsCnEch2Tt1tKhCKrCjFbMEi%2BvrunnSERftwh8GxHI7qSmMXiX5HZstWmFTGsYOo9y7iWx9gdvID8ZSHyP9TRVsdZHTmrlKXEIqfm67Asibf1ORPr%2BkfD1iVtov37zLzIaBPqVCLW3fKMz6xatZQhUZJcqBYe6tRv5FNkjWStIUgAQxck8F5mWnrkwtoPGwwY6pgElHWLjn%2FjmTZsiiCV%2FKvhTXF7TiffFxmSJfcStX0jbjMbeVoSD0Oi0OhymGQvQCJra4qQoBvgT5GO8B%2B9ddfMs2FRsKNGZDyqn4oOQ3Vb%2F4oURLg9RQ1gPC46KPUpu%2F8yzGXMxadNd%2BzGSQaQGRQtFY7V7VNtYaovLqV7%2FJdSNsuu%2FBMWpr6zchLo6zDg21rJPbEXUeDQUksif5HXvK8weWYr2few1&X-Amz-Signature=8ff5517e0d1f51213e2fb91df5b919733ad5fbdba621e7da426164f003200dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
