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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX25PBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTlaGvpDYKz%2FplTHhpLtprma1MhWDC1WQ6oGwcjfZVHQIgWxPbClDtj3hV0osCyEkkj6zVnWX3DZfYyuUUzdsnCg0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdfhHc9shpDUp9AMyrcA7sB%2BqDMQyv4E73yNMirevgX7tOKwIxlbpyDce3fNBvKO9X4ovfeE0M%2B08xO0arY58CmRtEw8T4WLW11hhrsIkbRtGcIl%2FSd3k0JnHnvh3toPoIN49o6CRzENwsEq8EbJIpoZi04kiVmRhoYyAywsgpbYDl8FWYRbQokgUT8yrSVYTX2UAF%2BLo88cnRw8m31vPw2dXiQPVQE35t8IC9qI2LP3cleD4tla4abfNllcfHZ4gDWEc76wozrFXEPuXNsW1ceIRudxBFc50cSY7topNUL9Z0wc1HgGnkDwo8VXqeFLrr6X9GSzvejqet2zd1yoYW38HqOuPCDjKUN06MPaWKiW1G0M2EMPog38vIF%2BtEAclER5UHG9%2FBeuWDQ6F5aJ7UYh6K233%2BV7IZn4HrsgU48qRA%2B3di8UHFnhaGhDPG5zP0Bho9YYnD11mLIzQd4QrcjEaxwNpoSYvl5INhphKaNHhI5%2BTLUvreFCRG4FsIlHiwpwWaeBaVVg7aLQK6%2BDRuMd2BqD9okIA7kR6BcD95pQFQAX3LAOAEJHJPff6ol%2BUG5fAGYuIQkQ7NnKHJSMQPXIMqKu5fHszyawEpTj%2FIYvORsmh791GmZnW70r3LxPqDxIuMYW8mj3U3uMPTTxMMGOqUBkFyyJVgQ8cH%2B3MmZzGRERNMsZJywC2li692%2FISXAL3WnBA%2Femyrt09jZGE%2FYEIsezMXLWMfTkRLimON3vWgErQXus9tZ7ED0ShiTb5UoFSTb6kN%2F02C6cgMh3PT0QD50%2F1bu3eumOQnx0D1YjskuBC00DiF%2FF%2Ffp7mGnSxo8y78vcQUeUa0dLl3G%2BGwbxsEkEDPvpgt3%2Fg%2BPfWe1k08aJ4nLAbpS&X-Amz-Signature=95ec2b62874eca1c7f506547fed63d0d34d8b779ec3281ecda3c9bd098a6b3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX25PBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTlaGvpDYKz%2FplTHhpLtprma1MhWDC1WQ6oGwcjfZVHQIgWxPbClDtj3hV0osCyEkkj6zVnWX3DZfYyuUUzdsnCg0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdfhHc9shpDUp9AMyrcA7sB%2BqDMQyv4E73yNMirevgX7tOKwIxlbpyDce3fNBvKO9X4ovfeE0M%2B08xO0arY58CmRtEw8T4WLW11hhrsIkbRtGcIl%2FSd3k0JnHnvh3toPoIN49o6CRzENwsEq8EbJIpoZi04kiVmRhoYyAywsgpbYDl8FWYRbQokgUT8yrSVYTX2UAF%2BLo88cnRw8m31vPw2dXiQPVQE35t8IC9qI2LP3cleD4tla4abfNllcfHZ4gDWEc76wozrFXEPuXNsW1ceIRudxBFc50cSY7topNUL9Z0wc1HgGnkDwo8VXqeFLrr6X9GSzvejqet2zd1yoYW38HqOuPCDjKUN06MPaWKiW1G0M2EMPog38vIF%2BtEAclER5UHG9%2FBeuWDQ6F5aJ7UYh6K233%2BV7IZn4HrsgU48qRA%2B3di8UHFnhaGhDPG5zP0Bho9YYnD11mLIzQd4QrcjEaxwNpoSYvl5INhphKaNHhI5%2BTLUvreFCRG4FsIlHiwpwWaeBaVVg7aLQK6%2BDRuMd2BqD9okIA7kR6BcD95pQFQAX3LAOAEJHJPff6ol%2BUG5fAGYuIQkQ7NnKHJSMQPXIMqKu5fHszyawEpTj%2FIYvORsmh791GmZnW70r3LxPqDxIuMYW8mj3U3uMPTTxMMGOqUBkFyyJVgQ8cH%2B3MmZzGRERNMsZJywC2li692%2FISXAL3WnBA%2Femyrt09jZGE%2FYEIsezMXLWMfTkRLimON3vWgErQXus9tZ7ED0ShiTb5UoFSTb6kN%2F02C6cgMh3PT0QD50%2F1bu3eumOQnx0D1YjskuBC00DiF%2FF%2Ffp7mGnSxo8y78vcQUeUa0dLl3G%2BGwbxsEkEDPvpgt3%2Fg%2BPfWe1k08aJ4nLAbpS&X-Amz-Signature=c04b26c3c5b664032110e6cdcc527ae027729ed2c5544f7982d7c27513f00389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX25PBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTlaGvpDYKz%2FplTHhpLtprma1MhWDC1WQ6oGwcjfZVHQIgWxPbClDtj3hV0osCyEkkj6zVnWX3DZfYyuUUzdsnCg0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdfhHc9shpDUp9AMyrcA7sB%2BqDMQyv4E73yNMirevgX7tOKwIxlbpyDce3fNBvKO9X4ovfeE0M%2B08xO0arY58CmRtEw8T4WLW11hhrsIkbRtGcIl%2FSd3k0JnHnvh3toPoIN49o6CRzENwsEq8EbJIpoZi04kiVmRhoYyAywsgpbYDl8FWYRbQokgUT8yrSVYTX2UAF%2BLo88cnRw8m31vPw2dXiQPVQE35t8IC9qI2LP3cleD4tla4abfNllcfHZ4gDWEc76wozrFXEPuXNsW1ceIRudxBFc50cSY7topNUL9Z0wc1HgGnkDwo8VXqeFLrr6X9GSzvejqet2zd1yoYW38HqOuPCDjKUN06MPaWKiW1G0M2EMPog38vIF%2BtEAclER5UHG9%2FBeuWDQ6F5aJ7UYh6K233%2BV7IZn4HrsgU48qRA%2B3di8UHFnhaGhDPG5zP0Bho9YYnD11mLIzQd4QrcjEaxwNpoSYvl5INhphKaNHhI5%2BTLUvreFCRG4FsIlHiwpwWaeBaVVg7aLQK6%2BDRuMd2BqD9okIA7kR6BcD95pQFQAX3LAOAEJHJPff6ol%2BUG5fAGYuIQkQ7NnKHJSMQPXIMqKu5fHszyawEpTj%2FIYvORsmh791GmZnW70r3LxPqDxIuMYW8mj3U3uMPTTxMMGOqUBkFyyJVgQ8cH%2B3MmZzGRERNMsZJywC2li692%2FISXAL3WnBA%2Femyrt09jZGE%2FYEIsezMXLWMfTkRLimON3vWgErQXus9tZ7ED0ShiTb5UoFSTb6kN%2F02C6cgMh3PT0QD50%2F1bu3eumOQnx0D1YjskuBC00DiF%2FF%2Ffp7mGnSxo8y78vcQUeUa0dLl3G%2BGwbxsEkEDPvpgt3%2Fg%2BPfWe1k08aJ4nLAbpS&X-Amz-Signature=4071307a8239040e600feafcd6a19a7bbf88e4e42c9e53e2816a5e0d4b09a0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWRETNL%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6lRGyLYYBCQsZLaadu51tcgVlCse9Gc1mGLKsq1rX0AIhAMLvD2t26E%2F7vm1TKUecS6BHhhrBW%2BOdf%2BatfK8JjV7zKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBsrHB9VO%2Bwp8V2Kcq3AMHQI1VHfLc1GXahacbzgpvmVa0F%2F9CCZECGCDUXIxtYTrhboHLlZeWNP%2FbR3nE4Uv4qY79eM0x31YY75qc3MflPnR6Qxo9JQgztz6pVjILkrOZNZ83oLBSMWAikP0OYISNLEnk0azB2Ig3boj%2FhQMKpXOOGaYd1DcXibamtdKF9dnvrZ6JRu27MVOve9PZ7RWqat6iAmx2OeK94TPKyUtJqbJ6VBXq4CyaMsuI9jWsTHKyEh5wp9JoGrYL1ULjJaP7PX64CP55RZx8cw%2BQXTatA5y1VhfdMSUcrEIl7yMcrvQxdlSdLGgjECllO5zNXy%2FJdmffO3hvF7%2Bu2ghcuIqQyOIqmtWH6VJBDFr%2BwIRisM7Rp5%2FhwlHlB4J1z2%2BMSIPB5cZV8BVvv5j2zvHS9e%2FiPxUGZIZTeu2DcxOTH0mfW5OEey0A9eoGNTkm45XvZZxgwNDKQxV7go4qXcc9WplShZhm8NEb%2FRyFtue%2B%2FTRJdgjo9mjd%2BXjcESCBMraBJPWpsnJ4lh99Kwm8XJeVgXbdqLdOzjPkPy7HjgTSViXHuGwzwLWfpLEqRIhNBQG47juyCRogRmb0QQcfmbke21lKb%2FfxHeLW2Nn3zdwLLTf6%2Fh42RGeBgAcVLYkfzjCN08TDBjqkAZoZpiaf7uLZCxwD2xVsSxLztybzFHGNu7uFF0ap8LCRTpHOV73GBXi%2FRy3uAid4A%2BU8dq2N3oFfu7IAbh7Huc1fzXBuAnz5Tc%2FY3br0wMNerdnfyZ4k4YUtf3fOyPBp1sMQH0oUF6h1xjJOnoV9o6lM7ImMH%2FmVWCWKDzMvvBuOzXrCb6oeJ7ZSYeNpxb2OsmakNb3akqQSR0BUnCkVA%2FiWuFqt&X-Amz-Signature=3d3633c38c6af867040c7c69827460d84eb980498cee8cb4b5d802d873654736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFHQ5GGT%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQmrJw50V%2BQByyjSA6nPEx8GXJ0AScNF68tEbzZSbs2AiBVpj3R7wRf3Cy1rojHwPAePbssL8jHU1%2F%2FIfHa%2BV7nwSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMblYkek2H6US2ZD3%2FKtwDsc1i3FHZpwyqng68cWUgJtKU8Qq2KQnZXIzCB67wLoaafP9EL%2Fn7txCoyA7V4pcjh9jWlBqU%2BZKxDQbhrzaUUtvzG8hafyt5pyrcE8cW052arVhrnms7VQ%2BBcTXYQO5iwLr7PoAXIakJ3E8CqAe9yPVAnWRSHIj3WoVAoxABB8CvBjFU3IZcQCZwQs%2FIpLj5CjbhHzxQZd%2BqGkSJGzCy%2FjsJ17k8rBkImcHA8YLwrA6NcOx%2FEqaT5HQG5bSrbXu02vZrOvJkyB0iSBO5mB%2BFWnLp35mqGPeqneHy6Lu4%2B0NUvJ1slyWmbQu21KGaAIfDz%2BoADdSB70CsMjDNez0IHJqPedbK0WpoQvcOww5PXRocZn5gnIozeTbexL6lLBHAeIk%2F4j5zyi93DF3cP8nc5wnQ6s0%2B6x%2FEAWZmtLTXijTXsKeAYh8Unz820gm7FeGyb2TJQg%2BFiMDM4iQCZ09QQS56fBN24NWBSbV1kKKLQYPsOyA%2FMyu9pqTHzNz0oQOmZoYp3c1i7izwmqYpArFLjKve4jVzxE6K8Uz%2BsoxWcALJhpFcIPe%2F%2BHehoMCoFA6JyYXOrmg%2FJQ0srCZ%2F5O6IDWToEEk973GL1GEm639Gkj3i1ZJiyQDp1cZvPsEwj9TEwwY6pgFhL6V7OStzi6IjlrHdRgef0lz6pZOYml4%2FMij0aEcnGX1zM%2Fa3cNC2IvyFBSllAbkMrzWwfx3pacg1hS6WzsLMeEOjDSZ5scWDeTAdkup7yWRinDTjOKHRt8fyDhZ5NFGPOTqiFhPTlFx6ds2zS925posd5ihQsrhJAHaktUVPdWYvZl05sQvM%2BbYqfOrD7uZoyBSn3qgUggdNvtnrJXsCsJLdMhnw&X-Amz-Signature=86e57169dc420db8aaa8437644f8e38da83f22999b3e27f0e5f1dc7169d10a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YX25PBH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTlaGvpDYKz%2FplTHhpLtprma1MhWDC1WQ6oGwcjfZVHQIgWxPbClDtj3hV0osCyEkkj6zVnWX3DZfYyuUUzdsnCg0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdfhHc9shpDUp9AMyrcA7sB%2BqDMQyv4E73yNMirevgX7tOKwIxlbpyDce3fNBvKO9X4ovfeE0M%2B08xO0arY58CmRtEw8T4WLW11hhrsIkbRtGcIl%2FSd3k0JnHnvh3toPoIN49o6CRzENwsEq8EbJIpoZi04kiVmRhoYyAywsgpbYDl8FWYRbQokgUT8yrSVYTX2UAF%2BLo88cnRw8m31vPw2dXiQPVQE35t8IC9qI2LP3cleD4tla4abfNllcfHZ4gDWEc76wozrFXEPuXNsW1ceIRudxBFc50cSY7topNUL9Z0wc1HgGnkDwo8VXqeFLrr6X9GSzvejqet2zd1yoYW38HqOuPCDjKUN06MPaWKiW1G0M2EMPog38vIF%2BtEAclER5UHG9%2FBeuWDQ6F5aJ7UYh6K233%2BV7IZn4HrsgU48qRA%2B3di8UHFnhaGhDPG5zP0Bho9YYnD11mLIzQd4QrcjEaxwNpoSYvl5INhphKaNHhI5%2BTLUvreFCRG4FsIlHiwpwWaeBaVVg7aLQK6%2BDRuMd2BqD9okIA7kR6BcD95pQFQAX3LAOAEJHJPff6ol%2BUG5fAGYuIQkQ7NnKHJSMQPXIMqKu5fHszyawEpTj%2FIYvORsmh791GmZnW70r3LxPqDxIuMYW8mj3U3uMPTTxMMGOqUBkFyyJVgQ8cH%2B3MmZzGRERNMsZJywC2li692%2FISXAL3WnBA%2Femyrt09jZGE%2FYEIsezMXLWMfTkRLimON3vWgErQXus9tZ7ED0ShiTb5UoFSTb6kN%2F02C6cgMh3PT0QD50%2F1bu3eumOQnx0D1YjskuBC00DiF%2FF%2Ffp7mGnSxo8y78vcQUeUa0dLl3G%2BGwbxsEkEDPvpgt3%2Fg%2BPfWe1k08aJ4nLAbpS&X-Amz-Signature=2d699ffbf43e3b7054735da3f3545b514143555f8762c7fb458e6af0a338af0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
