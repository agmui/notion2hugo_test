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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DS7N3WV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFoTcVe8dXe2KRhhFUuIP8AKRAkGnRPIB2UOBzKmHt2sAiAHqeciXbcTmliIbNbSxwWxQwwAYXqhk8mW09lNHxuu9iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5KFm7CzEXujNz9SYKtwDabYURNeyz6GS4HyYJXJ9KsexKvIxywJmGovjSJrNFA%2F01HkPt1Py5c908hieYMHwjbRAHk%2Fu5Jljtq%2FwVEEegRqBXQA4lP30hUkQbm0xwcR9W6wYVH0IELdHdZheZQzaSX7aYngMFuUvQQ51XRLWAMF%2BZzHzgkBFQJydLc6c32g9YMDDU9cMXkQcUSR4U6%2FRRK%2FvG9yduSOgNkUHjoCPNJEUF7%2F5XVsGYcGUqjlcxInHvoqSdug3ihtIzAOppzBYZv6riM8%2FxSDli0sU27qvN1TrZliVaMBTaOZX4HMJtzEy5MlfyClfbSVUzKuy4VcS2vI30qzfGgGxmL%2FnpZoIQcLJC8T1CZ1ql9YYY7iJTbRGHy5cJClpT0V3c8CseRZ8CXvu%2BL9R%2BomBBUItiNqTaabjaMUgIGCgsxks37Y5uqTYA5Gu3MwYuqz9PVdNimMGuApLzQL0WFPoUGtzMCb%2BOhrdg%2FQVxcy85GKVNjkpeSkbE0upIv0mt1ypoqZUzsBTL6l4A%2BGE5fC6FDgVe7Ry6TCjKsQ3iH8FYAv7EBrrEXY0LXN2%2FDr0weQChAZ0%2F8UxlOSxdQYnsq0Os8YtA4AkZSiNcCCKeuw0YllxydTeb8osujZW3UyriCphgpEw%2FPDawAY6pgGOxO6%2BB0gGCd88AmL%2BNe94V%2BBxKp3yBGGjcVypq2UKp05ioO65cUTIr7zWCdhPGybWJL2meBIepF7KHl7rwof5O0nbPPwYc6DdXWl9fwh9JnUYh1PEhk1%2Fr%2B4pvcAEoioUIHzE4zxubNPyy9s0EZvhPpi2qnyIr1ZCzErGpVs%2BGReN7DIOJykW5UvK6opSWLTkohNQqvecFWrFKPQAOfyXy0AVxiKN&X-Amz-Signature=ea83af9e12a921fd8896d26c1661af00cffc2a8ea65c0d6df60a215a7ea7ee81&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DS7N3WV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFoTcVe8dXe2KRhhFUuIP8AKRAkGnRPIB2UOBzKmHt2sAiAHqeciXbcTmliIbNbSxwWxQwwAYXqhk8mW09lNHxuu9iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5KFm7CzEXujNz9SYKtwDabYURNeyz6GS4HyYJXJ9KsexKvIxywJmGovjSJrNFA%2F01HkPt1Py5c908hieYMHwjbRAHk%2Fu5Jljtq%2FwVEEegRqBXQA4lP30hUkQbm0xwcR9W6wYVH0IELdHdZheZQzaSX7aYngMFuUvQQ51XRLWAMF%2BZzHzgkBFQJydLc6c32g9YMDDU9cMXkQcUSR4U6%2FRRK%2FvG9yduSOgNkUHjoCPNJEUF7%2F5XVsGYcGUqjlcxInHvoqSdug3ihtIzAOppzBYZv6riM8%2FxSDli0sU27qvN1TrZliVaMBTaOZX4HMJtzEy5MlfyClfbSVUzKuy4VcS2vI30qzfGgGxmL%2FnpZoIQcLJC8T1CZ1ql9YYY7iJTbRGHy5cJClpT0V3c8CseRZ8CXvu%2BL9R%2BomBBUItiNqTaabjaMUgIGCgsxks37Y5uqTYA5Gu3MwYuqz9PVdNimMGuApLzQL0WFPoUGtzMCb%2BOhrdg%2FQVxcy85GKVNjkpeSkbE0upIv0mt1ypoqZUzsBTL6l4A%2BGE5fC6FDgVe7Ry6TCjKsQ3iH8FYAv7EBrrEXY0LXN2%2FDr0weQChAZ0%2F8UxlOSxdQYnsq0Os8YtA4AkZSiNcCCKeuw0YllxydTeb8osujZW3UyriCphgpEw%2FPDawAY6pgGOxO6%2BB0gGCd88AmL%2BNe94V%2BBxKp3yBGGjcVypq2UKp05ioO65cUTIr7zWCdhPGybWJL2meBIepF7KHl7rwof5O0nbPPwYc6DdXWl9fwh9JnUYh1PEhk1%2Fr%2B4pvcAEoioUIHzE4zxubNPyy9s0EZvhPpi2qnyIr1ZCzErGpVs%2BGReN7DIOJykW5UvK6opSWLTkohNQqvecFWrFKPQAOfyXy0AVxiKN&X-Amz-Signature=d2c5c19cd47d55b7f3f2893d457bec3128ed0eea8e4243e61122b15b8da80fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DS7N3WV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFoTcVe8dXe2KRhhFUuIP8AKRAkGnRPIB2UOBzKmHt2sAiAHqeciXbcTmliIbNbSxwWxQwwAYXqhk8mW09lNHxuu9iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5KFm7CzEXujNz9SYKtwDabYURNeyz6GS4HyYJXJ9KsexKvIxywJmGovjSJrNFA%2F01HkPt1Py5c908hieYMHwjbRAHk%2Fu5Jljtq%2FwVEEegRqBXQA4lP30hUkQbm0xwcR9W6wYVH0IELdHdZheZQzaSX7aYngMFuUvQQ51XRLWAMF%2BZzHzgkBFQJydLc6c32g9YMDDU9cMXkQcUSR4U6%2FRRK%2FvG9yduSOgNkUHjoCPNJEUF7%2F5XVsGYcGUqjlcxInHvoqSdug3ihtIzAOppzBYZv6riM8%2FxSDli0sU27qvN1TrZliVaMBTaOZX4HMJtzEy5MlfyClfbSVUzKuy4VcS2vI30qzfGgGxmL%2FnpZoIQcLJC8T1CZ1ql9YYY7iJTbRGHy5cJClpT0V3c8CseRZ8CXvu%2BL9R%2BomBBUItiNqTaabjaMUgIGCgsxks37Y5uqTYA5Gu3MwYuqz9PVdNimMGuApLzQL0WFPoUGtzMCb%2BOhrdg%2FQVxcy85GKVNjkpeSkbE0upIv0mt1ypoqZUzsBTL6l4A%2BGE5fC6FDgVe7Ry6TCjKsQ3iH8FYAv7EBrrEXY0LXN2%2FDr0weQChAZ0%2F8UxlOSxdQYnsq0Os8YtA4AkZSiNcCCKeuw0YllxydTeb8osujZW3UyriCphgpEw%2FPDawAY6pgGOxO6%2BB0gGCd88AmL%2BNe94V%2BBxKp3yBGGjcVypq2UKp05ioO65cUTIr7zWCdhPGybWJL2meBIepF7KHl7rwof5O0nbPPwYc6DdXWl9fwh9JnUYh1PEhk1%2Fr%2B4pvcAEoioUIHzE4zxubNPyy9s0EZvhPpi2qnyIr1ZCzErGpVs%2BGReN7DIOJykW5UvK6opSWLTkohNQqvecFWrFKPQAOfyXy0AVxiKN&X-Amz-Signature=9c2115232326b672e440beb514a73056e360b5fdbb815eb9471471a0d2937da1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KLGZKUC%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIByft7zKIBNMNx5dpwFevVJCqPgz2sHujYxsk5n1IJtYAiB0PxF%2BSDgNYK6G7kpm8MxKKGxBDTukRrxIgkZACpr4TSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuFYIQRevJJBXYqwtKtwDHawSGF3H431l2E4ZdPLAulYbqAt4QFRYpL01VZ1nYFO%2Bup3SNr76Fg6DvDmXhy8EAmRxGBqlaF1P97BiV9gjWKACFBZ8eiu8g4lf%2BciiETcVBe7hAm2bmYw0XQow%2B3b0ufKz5aCfSNgN9%2B2Kmv4Qx%2BRBpf1xMsvT1qTySsPumyd4YRtl4AxUzWnUDjFuAeDLJyDrn0M%2F1lgOKKBrmBt1ZfGccaZ9CGkJDj5IzoaZfZrIdFuPGSuB5tpqCQO6%2BM7UwczNN67QQesWFsl6ltQKjuBGIiICaDbVUboKJzP1NpWWtpYiblw%2Bxxwv%2BmHSvbctUSfznRX5PinYL9qvVnKdQn11gft0L0MIYmqPSCPLMEJRPMDLl%2FqXsWNF1MFjAhgqqWvYQeGKbCCPu%2BDnqa2Tn1xe6xH3Wwu6mi3svCPDQQuyU89wGDUZp8%2F%2B0jj0qrgos3wDGHLMpn8QyLa3WTI8Q4lRZr5Kes9gtRKm%2Bf1NK6WUTwylDsoUd5VysDcS1lJ2y%2FwMmkZVXuepTVYQlhB5mX9MFPCjOWqpuGtcXC%2F7L%2BfjL1S7vBcjN4PfGxQFwfBiuuP6%2Bu4fNdDBFVmdcsFERGhh1nz1FafjAlk7S2lB2GUyfTORqb53xkApBH4wj9LbwAY6pgHKR7jwguvmU9gaIP2J19l213SbHRwMwMCjOMnYdupJMBHTVbYVeX0ljkDjsgLGYPlOKDI8gakU7jBGEdPanRWnQsb8RgHty%2BSy2YCBY6J%2BoM0DxHJkNxf3iIlGlsc3tnKdSNt9o6pfcceiYJ0FrW%2BhuWancllQzw93fHG4%2Bcy%2Fa26NFtuVCu5hPTS3iAwC000Nojl8hy2mlOlIciJijkCfr5K7QODg&X-Amz-Signature=1339f9d64bcbd255beb7fb4092efd79aef62be0dceeffa6b4eb05082e615b1a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFBZOOM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIE9d5fpP7f2wd4I5eBP2C3P5a9w1HkEe88PWOen30TedAiADiVYyKk6pMu6gHi%2B21Fd6hBAFfh4kXtb6Zusu%2Be%2BT3SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUinF16p78184wp5KtwDis7wtq4%2Bx0mGSoieZ%2Fd7aHE0ayL6SKdafDM66Cb%2FVBag8JxJvOQyrZ31qOS1mJEF4Pzbo6UMvNvhQSgS%2FwZzlQ%2Br3t2YwgmqNnKkg1d3Qt5gS0xoyMjYnhcR%2BRJaMnO9ozqKa%2Bfq90ytC%2FYk8MNZ2L%2BSdjWEbLmqwqWu15EnnLbFpjG34jp%2FOCM5nL2VmeAyf5qIK%2BbecbhXjNtW7LFEo36FpuQVmd3%2FyGjdpr3GafM%2BA%2BCTHPCOb1YBjrs2RVJgdgLrArk99ptrGkZ4zGNYy7QobocTbc2eakAaj21sPbLBU1VIZDhB9XAhcKz19tlCrEJBFALDz4HiKvwNKTcBojtVQI92erKRAJeiPY8cErx%2FjzpSXHcXLgIFReeraQ8eQAxliF5KXJ3SuRAPt1ZvznvtNIKvbgpOYMsj3Tw52AQvUJ1vfQXactO3oBTnk0FGfevalvZ%2BcjJyElwULQb%2BYXR1rhTIfFcAAxnqOspzPAZ6N6swcpPEy55jNm84h1m72OziB6KZxt2gsrTZE%2FLoAOwbi3MEEaeYynABPPGu2jovsjD%2F9okas7W4RXFCbO8btlixFpLvFOMQ8t0RNQ%2FZIvDXxnxoAX%2BPhWKA%2BDpmTCLmuuIS1ojHSHSsaTgw6vDawAY6pgHRvZCU42WoiIqjPte6z6mBJ5PJotvRZIBtFn6avbbZYE6qlNjRdxyeRsG8x8JiTlYSu7MzbzfoxRmZ9n6tqgA2x3pGcl9LdHzxssrX4jxo4rdqynmVyI7BgirV0NReac%2BY4m03yzzgM2BJ7Uaw5eoNHPXW4A8SDTlMwfPKTWpCoq9LcijJZ866UUO6QdkPwi%2FXWoH9xHMT5CUv8Xo1catuVs%2FQJG3x&X-Amz-Signature=f7c5f9c349489d55ca099fda424432a37fe6b18a16e0619d1730d8bb3d5a387f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DS7N3WV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIFoTcVe8dXe2KRhhFUuIP8AKRAkGnRPIB2UOBzKmHt2sAiAHqeciXbcTmliIbNbSxwWxQwwAYXqhk8mW09lNHxuu9iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5KFm7CzEXujNz9SYKtwDabYURNeyz6GS4HyYJXJ9KsexKvIxywJmGovjSJrNFA%2F01HkPt1Py5c908hieYMHwjbRAHk%2Fu5Jljtq%2FwVEEegRqBXQA4lP30hUkQbm0xwcR9W6wYVH0IELdHdZheZQzaSX7aYngMFuUvQQ51XRLWAMF%2BZzHzgkBFQJydLc6c32g9YMDDU9cMXkQcUSR4U6%2FRRK%2FvG9yduSOgNkUHjoCPNJEUF7%2F5XVsGYcGUqjlcxInHvoqSdug3ihtIzAOppzBYZv6riM8%2FxSDli0sU27qvN1TrZliVaMBTaOZX4HMJtzEy5MlfyClfbSVUzKuy4VcS2vI30qzfGgGxmL%2FnpZoIQcLJC8T1CZ1ql9YYY7iJTbRGHy5cJClpT0V3c8CseRZ8CXvu%2BL9R%2BomBBUItiNqTaabjaMUgIGCgsxks37Y5uqTYA5Gu3MwYuqz9PVdNimMGuApLzQL0WFPoUGtzMCb%2BOhrdg%2FQVxcy85GKVNjkpeSkbE0upIv0mt1ypoqZUzsBTL6l4A%2BGE5fC6FDgVe7Ry6TCjKsQ3iH8FYAv7EBrrEXY0LXN2%2FDr0weQChAZ0%2F8UxlOSxdQYnsq0Os8YtA4AkZSiNcCCKeuw0YllxydTeb8osujZW3UyriCphgpEw%2FPDawAY6pgGOxO6%2BB0gGCd88AmL%2BNe94V%2BBxKp3yBGGjcVypq2UKp05ioO65cUTIr7zWCdhPGybWJL2meBIepF7KHl7rwof5O0nbPPwYc6DdXWl9fwh9JnUYh1PEhk1%2Fr%2B4pvcAEoioUIHzE4zxubNPyy9s0EZvhPpi2qnyIr1ZCzErGpVs%2BGReN7DIOJykW5UvK6opSWLTkohNQqvecFWrFKPQAOfyXy0AVxiKN&X-Amz-Signature=65a70b4390d37430a8c39760dc36d98582434ed4861c97b5f5db1c7d1f1e6755&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
