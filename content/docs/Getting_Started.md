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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYFREY3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCbON7ZsgoIyOlncjGqqzxREf9IO%2BEZkZYWUR1QIA%2F7kwIgAQw8C4s2AM8liSoixw%2BY0tesM6LuM8tXjTBqI3U1uO0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoj5zZAE6Xh0%2BQy%2FCrcAxbz46qGyaG4mZP%2FIorQcCUF%2BVR6v2bCNO5ZVzWjjytexogNdEx5hT5dpOectUHO9ryxVadtF0RkN6UotF6fA6%2BmbJK3NeO4%2BmR7Lh6tn2CngIPrgyEn9eHR6O6nN7pFEAM3lLNcDIWavaH%2B1vE0iMx8SKnj%2Bo9FMsbwBq%2BXIGFoyPM9KBG0fx1EQ55pc6Ds3OmMgoXsWubhUS%2BQZUcp9Pdv6xjIOHYBk3hGwQ%2BA9C%2FiV6kH9IMcG8EgG%2BUXfvBzBH6fru6JygzCVoGzBzRe3lG%2BTe1VunhGM5Bq0kUUKDsmP7jEz8xoGLh0PWXyL%2FANXh27GzgWm978ptxfadQ0LHo8q9ErJSgPY1h2EnPbQB5bOxMtwT7JD8rOLZfk%2F7I8uc%2FQyosbuU65FjzWmf7yWECjoOhHSXG3cmKC6LbvAK%2F1wxpndBFU6fHGO9VrVqfdcCfYsJTMEgz8pT3ttQdv%2Ft1klGyT2ns873s312cznvFM%2FkTnTEwL70Hix2ogj0x6ofXLLW8lxqJSBUeyUsIeNXuskbDCmIkeRLImTPFnA3PcrzRePwNGkxWcawi5hEvQcMVjAs%2FpRK1DBEBD4iGF7GtlM96s%2FJueU2X%2BHhhZxSU5SAJjzhzxFHF6g0vWMNjC4b8GOqUBUdQKqNQ3Dbf1R29jFOoGHGUUKTcPJv6w0MQjyLLpJoFZM8Dm0jC3pDRz06zXHuDl8CixKalNxJQlOxFkgk4N0VLjIes%2B6PUsuCzH6xUOmORmqxeeRJYRFYO7eYwylqu1p%2FW2Pp8z%2F0BAhtuWWIxIoFs9QdcqmePoLTr4cKPYGOHKHBGpm%2BJtT64k8vWlguLWWye7UyiyI7ICCFBILiwLyCHzmfZY&X-Amz-Signature=83cd277b326b83a16acf62323c133f10cc9325397c4fab8bbef0a67bf7dc79d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYFREY3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCbON7ZsgoIyOlncjGqqzxREf9IO%2BEZkZYWUR1QIA%2F7kwIgAQw8C4s2AM8liSoixw%2BY0tesM6LuM8tXjTBqI3U1uO0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoj5zZAE6Xh0%2BQy%2FCrcAxbz46qGyaG4mZP%2FIorQcCUF%2BVR6v2bCNO5ZVzWjjytexogNdEx5hT5dpOectUHO9ryxVadtF0RkN6UotF6fA6%2BmbJK3NeO4%2BmR7Lh6tn2CngIPrgyEn9eHR6O6nN7pFEAM3lLNcDIWavaH%2B1vE0iMx8SKnj%2Bo9FMsbwBq%2BXIGFoyPM9KBG0fx1EQ55pc6Ds3OmMgoXsWubhUS%2BQZUcp9Pdv6xjIOHYBk3hGwQ%2BA9C%2FiV6kH9IMcG8EgG%2BUXfvBzBH6fru6JygzCVoGzBzRe3lG%2BTe1VunhGM5Bq0kUUKDsmP7jEz8xoGLh0PWXyL%2FANXh27GzgWm978ptxfadQ0LHo8q9ErJSgPY1h2EnPbQB5bOxMtwT7JD8rOLZfk%2F7I8uc%2FQyosbuU65FjzWmf7yWECjoOhHSXG3cmKC6LbvAK%2F1wxpndBFU6fHGO9VrVqfdcCfYsJTMEgz8pT3ttQdv%2Ft1klGyT2ns873s312cznvFM%2FkTnTEwL70Hix2ogj0x6ofXLLW8lxqJSBUeyUsIeNXuskbDCmIkeRLImTPFnA3PcrzRePwNGkxWcawi5hEvQcMVjAs%2FpRK1DBEBD4iGF7GtlM96s%2FJueU2X%2BHhhZxSU5SAJjzhzxFHF6g0vWMNjC4b8GOqUBUdQKqNQ3Dbf1R29jFOoGHGUUKTcPJv6w0MQjyLLpJoFZM8Dm0jC3pDRz06zXHuDl8CixKalNxJQlOxFkgk4N0VLjIes%2B6PUsuCzH6xUOmORmqxeeRJYRFYO7eYwylqu1p%2FW2Pp8z%2F0BAhtuWWIxIoFs9QdcqmePoLTr4cKPYGOHKHBGpm%2BJtT64k8vWlguLWWye7UyiyI7ICCFBILiwLyCHzmfZY&X-Amz-Signature=645d489da649ed1a185c4667aff6aa1ec903051556dc441ee884c2f593a760ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYFREY3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCbON7ZsgoIyOlncjGqqzxREf9IO%2BEZkZYWUR1QIA%2F7kwIgAQw8C4s2AM8liSoixw%2BY0tesM6LuM8tXjTBqI3U1uO0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoj5zZAE6Xh0%2BQy%2FCrcAxbz46qGyaG4mZP%2FIorQcCUF%2BVR6v2bCNO5ZVzWjjytexogNdEx5hT5dpOectUHO9ryxVadtF0RkN6UotF6fA6%2BmbJK3NeO4%2BmR7Lh6tn2CngIPrgyEn9eHR6O6nN7pFEAM3lLNcDIWavaH%2B1vE0iMx8SKnj%2Bo9FMsbwBq%2BXIGFoyPM9KBG0fx1EQ55pc6Ds3OmMgoXsWubhUS%2BQZUcp9Pdv6xjIOHYBk3hGwQ%2BA9C%2FiV6kH9IMcG8EgG%2BUXfvBzBH6fru6JygzCVoGzBzRe3lG%2BTe1VunhGM5Bq0kUUKDsmP7jEz8xoGLh0PWXyL%2FANXh27GzgWm978ptxfadQ0LHo8q9ErJSgPY1h2EnPbQB5bOxMtwT7JD8rOLZfk%2F7I8uc%2FQyosbuU65FjzWmf7yWECjoOhHSXG3cmKC6LbvAK%2F1wxpndBFU6fHGO9VrVqfdcCfYsJTMEgz8pT3ttQdv%2Ft1klGyT2ns873s312cznvFM%2FkTnTEwL70Hix2ogj0x6ofXLLW8lxqJSBUeyUsIeNXuskbDCmIkeRLImTPFnA3PcrzRePwNGkxWcawi5hEvQcMVjAs%2FpRK1DBEBD4iGF7GtlM96s%2FJueU2X%2BHhhZxSU5SAJjzhzxFHF6g0vWMNjC4b8GOqUBUdQKqNQ3Dbf1R29jFOoGHGUUKTcPJv6w0MQjyLLpJoFZM8Dm0jC3pDRz06zXHuDl8CixKalNxJQlOxFkgk4N0VLjIes%2B6PUsuCzH6xUOmORmqxeeRJYRFYO7eYwylqu1p%2FW2Pp8z%2F0BAhtuWWIxIoFs9QdcqmePoLTr4cKPYGOHKHBGpm%2BJtT64k8vWlguLWWye7UyiyI7ICCFBILiwLyCHzmfZY&X-Amz-Signature=628d10f70e1573b62e033e816fee9652f92623c914c5b700c82d14edb7525e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645STXFCP%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQD3vg1tkT5ZI%2BTbsQO54i3eSAXH5iSmg9M1sSCMAdWkXgIhAJm9HPeWBHaq4DGJkG4Re1ibmr7fCzN2MVc93tWmSuh1KogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc%2B1axnUURt4EI2Ckq3AM9%2F2xkL34F5qY7FoM5eRqx7iNs9r2p%2Bf4wXUMTE0hkDIzye6uED5Y%2FKdfu%2BNkC%2BxpIdzahwkhNS7oGJCv%2BsJc86uVek9E1jwbwRYUunmf8f%2BDlawS8oTS67cJDPoV3ACuVKh5DUhbaDFRZsoDIw0AAUoGTUuuk8tlveyaaLQMPqTjNseTvdl8B09rK5q0G32eac7LQ0%2FSHyYXMHmEJPaPK0ta1te2x9IWaTlcGSJPQZpjzVYWvDmSO%2F7B9Zb88%2FCoujMoqEfyhBzH1xLRwvpwzk3uuJMd3Uw1myiU2OmkDdqYWwRKbejBV2pVUNfU8830WgD6UBTynzgVwfK02m7fSkuLolvg8Wd8gdcIEJxtBa%2BLYyCfy25oycq92Pbc2hZ9wj0TyCiH1ewTA%2BXbvc2%2FSFVHRHUnFi1pMd57RqNV9cPnEpBXR1akmWy%2BaQ%2FZ3Md6pe%2BFQyk%2FU8%2B9XsUikZJRnCSrzSQxDbFbzGcPUqqD1%2BgQUpOI4A7zo%2BR7ZcihOQdf%2Bx67ygQFtUgE7K93XRqLB0vWKyoPb%2BaeG4NfWbckpP%2BNVGxJK2F8rgCbHLDQl1h1KQM2UfIpmW3Rjk6nyAlwfETKOZDPN3gktACAQoEWXQKcOvFHIn5oqVYZZITCLw%2BG%2FBjqkAfZN7z2pN%2BBRYk9P8DIZg02LfkYNW2Dw2c%2BH7ZnrDVRUA%2F4zklYU2aVZJqgCV0W%2BBGlVcefe4lFh6m9%2F3VvSJLKyEbD2Pa1uG6N0ENeBI0i8y%2BpfvJ7CJh0tbv26YOuNQjwpqhOMux9a%2Fwx%2BInFzAkrhukPkXdb6BziETBnXD1cmtg9xwcMO7okIen3nXyBU5vxouw9qCj7aq%2Bzc87LJupOa181d&X-Amz-Signature=da933d10ce2bf1ce442394c6307ee3c0ddcc0300596470ecff74ad42c0901452&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYFREY3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCbON7ZsgoIyOlncjGqqzxREf9IO%2BEZkZYWUR1QIA%2F7kwIgAQw8C4s2AM8liSoixw%2BY0tesM6LuM8tXjTBqI3U1uO0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoj5zZAE6Xh0%2BQy%2FCrcAxbz46qGyaG4mZP%2FIorQcCUF%2BVR6v2bCNO5ZVzWjjytexogNdEx5hT5dpOectUHO9ryxVadtF0RkN6UotF6fA6%2BmbJK3NeO4%2BmR7Lh6tn2CngIPrgyEn9eHR6O6nN7pFEAM3lLNcDIWavaH%2B1vE0iMx8SKnj%2Bo9FMsbwBq%2BXIGFoyPM9KBG0fx1EQ55pc6Ds3OmMgoXsWubhUS%2BQZUcp9Pdv6xjIOHYBk3hGwQ%2BA9C%2FiV6kH9IMcG8EgG%2BUXfvBzBH6fru6JygzCVoGzBzRe3lG%2BTe1VunhGM5Bq0kUUKDsmP7jEz8xoGLh0PWXyL%2FANXh27GzgWm978ptxfadQ0LHo8q9ErJSgPY1h2EnPbQB5bOxMtwT7JD8rOLZfk%2F7I8uc%2FQyosbuU65FjzWmf7yWECjoOhHSXG3cmKC6LbvAK%2F1wxpndBFU6fHGO9VrVqfdcCfYsJTMEgz8pT3ttQdv%2Ft1klGyT2ns873s312cznvFM%2FkTnTEwL70Hix2ogj0x6ofXLLW8lxqJSBUeyUsIeNXuskbDCmIkeRLImTPFnA3PcrzRePwNGkxWcawi5hEvQcMVjAs%2FpRK1DBEBD4iGF7GtlM96s%2FJueU2X%2BHhhZxSU5SAJjzhzxFHF6g0vWMNjC4b8GOqUBUdQKqNQ3Dbf1R29jFOoGHGUUKTcPJv6w0MQjyLLpJoFZM8Dm0jC3pDRz06zXHuDl8CixKalNxJQlOxFkgk4N0VLjIes%2B6PUsuCzH6xUOmORmqxeeRJYRFYO7eYwylqu1p%2FW2Pp8z%2F0BAhtuWWIxIoFs9QdcqmePoLTr4cKPYGOHKHBGpm%2BJtT64k8vWlguLWWye7UyiyI7ICCFBILiwLyCHzmfZY&X-Amz-Signature=20870aab31a31ab4c069f8ff32f4cf29a794f71b64791ea63949706a08ebb7df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
