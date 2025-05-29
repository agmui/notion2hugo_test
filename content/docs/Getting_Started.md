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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5XOPUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu12%2BzI6vb%2FNM5S%2FLYpORFbzz9jar4ji1bXewqKi6hnAiADA1aot2yZ8dLNzAkI9yPqWP1tx1kJDQdc1RnYeROuoyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSDIc43dNrDRM50V%2FKtwDHZV1G56TX2SSI4NGC9LqPMQdmXufyN7flTyq9T7mETs%2B9mc50F6yzBz0Ue3I%2BNTBjBrpJgLQHdCgoaiqgoCxcLQKfPt1ncL3pV5RBjzrV0sMFlG%2BCAfwsJX7NQU9gyooJ3iYGJodo7IwVF4w596Mm5wZusb9HlwFg2WilHidOsi5rd1NVOGRZphN2b7kLzIGjBbDdEpZA1jjTIhcn4Yu6puuP3BPuy%2Flt0QXdAZ%2BvtrWLpXFEdqvw925BaKHYPPdm9QPFI%2FUJzI93e5yLJqgPLNlc%2BA7ON5rZFjEasTQq1ezKicfy88QlkFNN5jjjfUpVG9LcDwmUJ4Fwf%2BrW1yZjx69NZr8XX31aJZw3FjJQ%2FsR9IRhIMWYCtbniO57n4hI8GI9AhM7J4xCYEd%2F4BIRKJt96CaxwArTFLj7pwSF41XRwd3XMpGAWoog5UqPv%2FS%2Bu%2BarGKbG9WFhR4F3tDx3Ocjr3CWP3O68j%2FHqOaMONGfV18swgiZl2Bs0OncO%2BHraETKpjy5oVFAI16%2F921Fbd1ZaEK2nNd3cXw8zmtrlvVCb%2BS6sGkXc3fnVYAC%2FxZlWlWLuFgpMSDUjXARgdDU%2BlpnB8r%2Bstp20qSFm%2BuJ%2BAq56C6lhWQ8NbJL%2FHEUwxojhwQY6pgG6bsg6%2BbDAZO0g1lgWKlIZuakUJzZ8UvSsfZdTY6fAKZ6dXkx1%2BLl9o%2FVHoDC6v7osMULWuNMPo4lIU%2FSq98iYuFfwac2unPmlZUMiZyDGFaIBXbH7vt0WEfvUV0elKWtRslUdkpCnsuh%2FMuvWwN1tCWpCFm1b1EgcrB7YvpB0gHBsnwDKpT7ojIoTZF3qahsxuBMHjvKNENnXYrX%2FIyMqgixeQls0&X-Amz-Signature=b337ce5b39f14381b0976cd5f61136ace1d3fa8e4306dab6e48efba4e306260d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5XOPUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu12%2BzI6vb%2FNM5S%2FLYpORFbzz9jar4ji1bXewqKi6hnAiADA1aot2yZ8dLNzAkI9yPqWP1tx1kJDQdc1RnYeROuoyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSDIc43dNrDRM50V%2FKtwDHZV1G56TX2SSI4NGC9LqPMQdmXufyN7flTyq9T7mETs%2B9mc50F6yzBz0Ue3I%2BNTBjBrpJgLQHdCgoaiqgoCxcLQKfPt1ncL3pV5RBjzrV0sMFlG%2BCAfwsJX7NQU9gyooJ3iYGJodo7IwVF4w596Mm5wZusb9HlwFg2WilHidOsi5rd1NVOGRZphN2b7kLzIGjBbDdEpZA1jjTIhcn4Yu6puuP3BPuy%2Flt0QXdAZ%2BvtrWLpXFEdqvw925BaKHYPPdm9QPFI%2FUJzI93e5yLJqgPLNlc%2BA7ON5rZFjEasTQq1ezKicfy88QlkFNN5jjjfUpVG9LcDwmUJ4Fwf%2BrW1yZjx69NZr8XX31aJZw3FjJQ%2FsR9IRhIMWYCtbniO57n4hI8GI9AhM7J4xCYEd%2F4BIRKJt96CaxwArTFLj7pwSF41XRwd3XMpGAWoog5UqPv%2FS%2Bu%2BarGKbG9WFhR4F3tDx3Ocjr3CWP3O68j%2FHqOaMONGfV18swgiZl2Bs0OncO%2BHraETKpjy5oVFAI16%2F921Fbd1ZaEK2nNd3cXw8zmtrlvVCb%2BS6sGkXc3fnVYAC%2FxZlWlWLuFgpMSDUjXARgdDU%2BlpnB8r%2Bstp20qSFm%2BuJ%2BAq56C6lhWQ8NbJL%2FHEUwxojhwQY6pgG6bsg6%2BbDAZO0g1lgWKlIZuakUJzZ8UvSsfZdTY6fAKZ6dXkx1%2BLl9o%2FVHoDC6v7osMULWuNMPo4lIU%2FSq98iYuFfwac2unPmlZUMiZyDGFaIBXbH7vt0WEfvUV0elKWtRslUdkpCnsuh%2FMuvWwN1tCWpCFm1b1EgcrB7YvpB0gHBsnwDKpT7ojIoTZF3qahsxuBMHjvKNENnXYrX%2FIyMqgixeQls0&X-Amz-Signature=839d26aab25998e40ef8bc1a2746630bf117d0cdb9e1bd1fd61c497b6d205434&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5XOPUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu12%2BzI6vb%2FNM5S%2FLYpORFbzz9jar4ji1bXewqKi6hnAiADA1aot2yZ8dLNzAkI9yPqWP1tx1kJDQdc1RnYeROuoyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSDIc43dNrDRM50V%2FKtwDHZV1G56TX2SSI4NGC9LqPMQdmXufyN7flTyq9T7mETs%2B9mc50F6yzBz0Ue3I%2BNTBjBrpJgLQHdCgoaiqgoCxcLQKfPt1ncL3pV5RBjzrV0sMFlG%2BCAfwsJX7NQU9gyooJ3iYGJodo7IwVF4w596Mm5wZusb9HlwFg2WilHidOsi5rd1NVOGRZphN2b7kLzIGjBbDdEpZA1jjTIhcn4Yu6puuP3BPuy%2Flt0QXdAZ%2BvtrWLpXFEdqvw925BaKHYPPdm9QPFI%2FUJzI93e5yLJqgPLNlc%2BA7ON5rZFjEasTQq1ezKicfy88QlkFNN5jjjfUpVG9LcDwmUJ4Fwf%2BrW1yZjx69NZr8XX31aJZw3FjJQ%2FsR9IRhIMWYCtbniO57n4hI8GI9AhM7J4xCYEd%2F4BIRKJt96CaxwArTFLj7pwSF41XRwd3XMpGAWoog5UqPv%2FS%2Bu%2BarGKbG9WFhR4F3tDx3Ocjr3CWP3O68j%2FHqOaMONGfV18swgiZl2Bs0OncO%2BHraETKpjy5oVFAI16%2F921Fbd1ZaEK2nNd3cXw8zmtrlvVCb%2BS6sGkXc3fnVYAC%2FxZlWlWLuFgpMSDUjXARgdDU%2BlpnB8r%2Bstp20qSFm%2BuJ%2BAq56C6lhWQ8NbJL%2FHEUwxojhwQY6pgG6bsg6%2BbDAZO0g1lgWKlIZuakUJzZ8UvSsfZdTY6fAKZ6dXkx1%2BLl9o%2FVHoDC6v7osMULWuNMPo4lIU%2FSq98iYuFfwac2unPmlZUMiZyDGFaIBXbH7vt0WEfvUV0elKWtRslUdkpCnsuh%2FMuvWwN1tCWpCFm1b1EgcrB7YvpB0gHBsnwDKpT7ojIoTZF3qahsxuBMHjvKNENnXYrX%2FIyMqgixeQls0&X-Amz-Signature=9a89eb799aea91470f0f210c3f95c6401323c045b4b42f9b9f0dc08fbcd41899&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOSPMRPY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdTu%2FANVs9Z7CTkV7AxIpuR2QGwclhm1krwT6CqTa7HwIgcYli3zTXM5NFJhi9QKtnOPNCIt47WpBo95eDHO67IOcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDfk0l7epPsqfplQCrcA3g0isToa%2FStno8t2AzTVdqX4xiJeWUBDI2tDONAXtMWU6gQY3X1eKav4PP87gf6DVxOdjJOvRTDKcL1%2BktgDyBulDaB9KSUFi6NRbzpTCDDduW8z%2BmHgDfqw9g5czHyzNNPjlTuMnv9e5PwxsE%2FGN%2F9S1Tc%2FBg%2BiNVymDGLhqcQ56wYiWZJ4MmeP8rriahNm%2F%2B9WJgJQJj2CQFX%2FWfQynWnWc4JFFPbWDp297vhYzzINKE%2F0KoxOXEL3At8myiLVYt479WezbcYiobopd4tXXdMKKIzic4lMwLOpnKn98pHaSIvMPG0BgEf766dIFIWkJmTZmHgezYa5UNRIlHyqO5yJLoMkQqUpspe0vMndsQ5bqxZnTN7LLIzzgyP0PnXl3qSW5qJz3dErtY9GJypL4uhNLtbuArbKbBi3IENj%2FM3OZfBIKTcH%2BkcZHQXAcolELzGR7K94ESxnhBNoDogpgleer%2FfR2qMQCePfbDV2GhajRKE5Tq5G2FN%2FNBFJDpE4Q0thUSD2DT8MbCPNEMPstmsn47d5wcvt6VXbP6W2UXdLHQucXE6KjD59Y%2BgchUMCnm%2FpFO4fDk%2FZug2VwdGZhGD74utVvGwXj2VOKyqAzEG8%2FyP80vM%2FNQOhSRnMIeJ4cEGOqUBrgKTpWPHH2v7BmTC6dMBK8ggysaFn6JCTqgLBrwlACZJU9M6IypmEEJ4rtF9Fju34RNS9vRnrk4rtLQ80FGcFVangSPhI6JYofj%2B2XwRkJ2kQW14GdVG%2FqNW130KEBG0INV%2BrlU2PflpW9EDin6IUuUuMbSUHk0KNGtBc7LXkJ21jaVFwiN83YS7oJT2mipPH345Z9jvUBSKsSwO3ciwRED2O2A2&X-Amz-Signature=97a12917736fe98d77347d0810d4051a2d20c48b7ebdd808104ad283c8ad15c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUWFJ5ZA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDfMGlvuksoRZ8WjWIfc2PSS9xwC1y2oOdh2DiKZCz1AiA8IoxApaRuK6RXk0GSHaZonHy9hpjp2p6ZiN%2BqP0fEniqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyMBp0HAVSCli5Gv7KtwDLJiBmFcsZ90ZbcXje2SsEI%2B77FPjweCoVt7moXuA0eeVAsB679HbZj6qTGB74KyH2ydudN5y5sAoyKXRJtW%2B5qdHRtnK58r45LB6pE5PyE6Hiz5fT5h1ulP90GvUih%2FEHmRsruvKifnKsbfQF17%2BgOXs74enwE9SI%2Bj7Kg2APNqGuZ6t8qZAjbi305mzva7wfWWRuusVal2TRJUJOA0vEilst%2F04%2BkLCKPCjOqALHGVKOJ2AaKR0oPb4LO3ve0fv5eBcNTWX3f2aNkN1ZI8xsW1tUm6%2FGfwTIiDkbXSlwUFl9TNuN7fzpf8QiYmUVENSA7fBven1KOLlpI9KbzQh%2BAMN1qGt3GCdzzcm2KG%2F%2Ft%2FVy%2BOYqW6b2TjSyIdCcUJwPd7kUYQL6QaVKOEAUYdMIRkFxl%2BYO5%2BrnosKuDvKzRn7EbAUTUMyobSo5aXbFT1yaBvympRYRmHZVOmbsRAFGX8rsPW30KqSJoPAzfQ5j7fMUhAuOY9OglQfL%2FofwxlEmN5ACQHdjr8nTts5U%2FSpHvXaG0%2BF7nsVZ67C2H8FkLSvCqlmonaf5mpN%2B9BR3w4pJbYi6YN%2FC3JBBSi3nxAcXqwTQ747hOZJcLw1eSNfhrRndYNO6A5DwxaYvIMw24jhwQY6pgGbHQrT1RKw49U%2F39qvVzr6t3na0RRH6zr4JZQ9xEG%2BI6I7zgaTgs%2BHhZAoAqxLGgh7iEC695FHaJKQ9SZ1v4o4HvaVVNF3WuZcBDbHolxXCjwrJMlj5hd%2BdfRx5dIJWNcW%2FELAIsvx%2FMrT1jQF8EXcOomFjWT3R2NOibGGhQBVQBywOOaP9vSAvgxTVGkU78g%2BKep%2Flzy3YOGjS5PpPqC1OVfSYk8S&X-Amz-Signature=5e8c4a884a18e3305eba73c116ae2e20e8ac9807f402321fde9b7043d077b60c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA5XOPUX%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu12%2BzI6vb%2FNM5S%2FLYpORFbzz9jar4ji1bXewqKi6hnAiADA1aot2yZ8dLNzAkI9yPqWP1tx1kJDQdc1RnYeROuoyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSDIc43dNrDRM50V%2FKtwDHZV1G56TX2SSI4NGC9LqPMQdmXufyN7flTyq9T7mETs%2B9mc50F6yzBz0Ue3I%2BNTBjBrpJgLQHdCgoaiqgoCxcLQKfPt1ncL3pV5RBjzrV0sMFlG%2BCAfwsJX7NQU9gyooJ3iYGJodo7IwVF4w596Mm5wZusb9HlwFg2WilHidOsi5rd1NVOGRZphN2b7kLzIGjBbDdEpZA1jjTIhcn4Yu6puuP3BPuy%2Flt0QXdAZ%2BvtrWLpXFEdqvw925BaKHYPPdm9QPFI%2FUJzI93e5yLJqgPLNlc%2BA7ON5rZFjEasTQq1ezKicfy88QlkFNN5jjjfUpVG9LcDwmUJ4Fwf%2BrW1yZjx69NZr8XX31aJZw3FjJQ%2FsR9IRhIMWYCtbniO57n4hI8GI9AhM7J4xCYEd%2F4BIRKJt96CaxwArTFLj7pwSF41XRwd3XMpGAWoog5UqPv%2FS%2Bu%2BarGKbG9WFhR4F3tDx3Ocjr3CWP3O68j%2FHqOaMONGfV18swgiZl2Bs0OncO%2BHraETKpjy5oVFAI16%2F921Fbd1ZaEK2nNd3cXw8zmtrlvVCb%2BS6sGkXc3fnVYAC%2FxZlWlWLuFgpMSDUjXARgdDU%2BlpnB8r%2Bstp20qSFm%2BuJ%2BAq56C6lhWQ8NbJL%2FHEUwxojhwQY6pgG6bsg6%2BbDAZO0g1lgWKlIZuakUJzZ8UvSsfZdTY6fAKZ6dXkx1%2BLl9o%2FVHoDC6v7osMULWuNMPo4lIU%2FSq98iYuFfwac2unPmlZUMiZyDGFaIBXbH7vt0WEfvUV0elKWtRslUdkpCnsuh%2FMuvWwN1tCWpCFm1b1EgcrB7YvpB0gHBsnwDKpT7ojIoTZF3qahsxuBMHjvKNENnXYrX%2FIyMqgixeQls0&X-Amz-Signature=fe3811d2541cdf01e98a7bd4e94952769d251b35de46ad721983e7a82f452a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
