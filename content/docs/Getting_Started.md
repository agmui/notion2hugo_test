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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVBLJ2B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHeKg%2FnJfmqy0exB2yujDNYqtdVFfsU7PzbRXAbAs9WPAiAivhIbaLLfYSUg3anMMKbRK9wptv%2BpFClTXxLfUQ1K8CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdBp5RQfAzzv6qBHzKtwDMHvTL4MLwVJVPB1lqF6HjrtXzObbCD8Q10HTtQwx1uSThe25M8DgbVYYus%2FZJ1imlEblEaBV6IVy%2FGr%2FDJ1uuCx2cVBlLFUldCrJpFhX4%2Fiig5MR8mUtpwCVvAyVMwY6PPFHP2Hg0jGF8LQgAGw5P1Bdj4L%2FcrLuxJr5S%2B5Wnm1QN1ck3uGOOozAXuoeP5lAVq803nrwHLCiEGehyghOADok%2FOMlHE9T9ggfwyRp7%2B5kM1oYmTvDO0dbPlzRQvpDqCmW4KCKsETSMhWQ0oAcDtwv55s0vo7rYpwjYyA%2FHwmrdYVLlSqRIrrNo6QvOrpbjwvUtnzDPzl03JBXidsPW5mETV2unF5TuQjSxoRGT0eJh5v65IBhL8bv2oCm5xaC6TbYOofJo6EvkqjpeQxcHUHItC%2B2MC2QNTNoVlrtdrQzvXhNerzCc%2Bw47BT5HeQf4ykS2EOQRvq2kDdDkGVYFDshPavzion9QElrK1QeuPfXXvrofK27XlpoUIVDOO57MUYcp8hJv5lD%2Bs6%2FE%2Fhec3zL3zw8UmHeyaEwoBwgpL4DwjtPQkTBcdzNSFg46oUEjAfs4NL1l5YGQMApcEdWBKKpZl2tX5vI3SJ0nvkrXxZqVWjgx00x4XMDhn8wpKKDwQY6pgHHBKQ9m%2BwVN16MzPnp3uk3xUc3Gf7wCyA0yQmDankBlOxZQvmNDf66s6JvBmVNCVAYUfSYjbn7qSIiLftn%2BxJG7CGJ5jmF7MZ2PFyGtnCCtBH8O2q9RrKxQiAre%2BE3bP7kMQdkP96WOmau%2FmNX5ypmzKpwmjqNw4uQAtiF7P4CPecUzG3CIbIDlUmmEntP0r5aIjxqE%2BeYBGyTBayNRgMYJqvEuA2R&X-Amz-Signature=776573edabdac5ec4fdb5dc987282e6f198bbec147cf94856182504497a42f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVBLJ2B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHeKg%2FnJfmqy0exB2yujDNYqtdVFfsU7PzbRXAbAs9WPAiAivhIbaLLfYSUg3anMMKbRK9wptv%2BpFClTXxLfUQ1K8CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdBp5RQfAzzv6qBHzKtwDMHvTL4MLwVJVPB1lqF6HjrtXzObbCD8Q10HTtQwx1uSThe25M8DgbVYYus%2FZJ1imlEblEaBV6IVy%2FGr%2FDJ1uuCx2cVBlLFUldCrJpFhX4%2Fiig5MR8mUtpwCVvAyVMwY6PPFHP2Hg0jGF8LQgAGw5P1Bdj4L%2FcrLuxJr5S%2B5Wnm1QN1ck3uGOOozAXuoeP5lAVq803nrwHLCiEGehyghOADok%2FOMlHE9T9ggfwyRp7%2B5kM1oYmTvDO0dbPlzRQvpDqCmW4KCKsETSMhWQ0oAcDtwv55s0vo7rYpwjYyA%2FHwmrdYVLlSqRIrrNo6QvOrpbjwvUtnzDPzl03JBXidsPW5mETV2unF5TuQjSxoRGT0eJh5v65IBhL8bv2oCm5xaC6TbYOofJo6EvkqjpeQxcHUHItC%2B2MC2QNTNoVlrtdrQzvXhNerzCc%2Bw47BT5HeQf4ykS2EOQRvq2kDdDkGVYFDshPavzion9QElrK1QeuPfXXvrofK27XlpoUIVDOO57MUYcp8hJv5lD%2Bs6%2FE%2Fhec3zL3zw8UmHeyaEwoBwgpL4DwjtPQkTBcdzNSFg46oUEjAfs4NL1l5YGQMApcEdWBKKpZl2tX5vI3SJ0nvkrXxZqVWjgx00x4XMDhn8wpKKDwQY6pgHHBKQ9m%2BwVN16MzPnp3uk3xUc3Gf7wCyA0yQmDankBlOxZQvmNDf66s6JvBmVNCVAYUfSYjbn7qSIiLftn%2BxJG7CGJ5jmF7MZ2PFyGtnCCtBH8O2q9RrKxQiAre%2BE3bP7kMQdkP96WOmau%2FmNX5ypmzKpwmjqNw4uQAtiF7P4CPecUzG3CIbIDlUmmEntP0r5aIjxqE%2BeYBGyTBayNRgMYJqvEuA2R&X-Amz-Signature=a6104f196b8083c380195cd9da57d3ea0665d3958f5c1066aeb0c9be770851d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVBLJ2B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHeKg%2FnJfmqy0exB2yujDNYqtdVFfsU7PzbRXAbAs9WPAiAivhIbaLLfYSUg3anMMKbRK9wptv%2BpFClTXxLfUQ1K8CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdBp5RQfAzzv6qBHzKtwDMHvTL4MLwVJVPB1lqF6HjrtXzObbCD8Q10HTtQwx1uSThe25M8DgbVYYus%2FZJ1imlEblEaBV6IVy%2FGr%2FDJ1uuCx2cVBlLFUldCrJpFhX4%2Fiig5MR8mUtpwCVvAyVMwY6PPFHP2Hg0jGF8LQgAGw5P1Bdj4L%2FcrLuxJr5S%2B5Wnm1QN1ck3uGOOozAXuoeP5lAVq803nrwHLCiEGehyghOADok%2FOMlHE9T9ggfwyRp7%2B5kM1oYmTvDO0dbPlzRQvpDqCmW4KCKsETSMhWQ0oAcDtwv55s0vo7rYpwjYyA%2FHwmrdYVLlSqRIrrNo6QvOrpbjwvUtnzDPzl03JBXidsPW5mETV2unF5TuQjSxoRGT0eJh5v65IBhL8bv2oCm5xaC6TbYOofJo6EvkqjpeQxcHUHItC%2B2MC2QNTNoVlrtdrQzvXhNerzCc%2Bw47BT5HeQf4ykS2EOQRvq2kDdDkGVYFDshPavzion9QElrK1QeuPfXXvrofK27XlpoUIVDOO57MUYcp8hJv5lD%2Bs6%2FE%2Fhec3zL3zw8UmHeyaEwoBwgpL4DwjtPQkTBcdzNSFg46oUEjAfs4NL1l5YGQMApcEdWBKKpZl2tX5vI3SJ0nvkrXxZqVWjgx00x4XMDhn8wpKKDwQY6pgHHBKQ9m%2BwVN16MzPnp3uk3xUc3Gf7wCyA0yQmDankBlOxZQvmNDf66s6JvBmVNCVAYUfSYjbn7qSIiLftn%2BxJG7CGJ5jmF7MZ2PFyGtnCCtBH8O2q9RrKxQiAre%2BE3bP7kMQdkP96WOmau%2FmNX5ypmzKpwmjqNw4uQAtiF7P4CPecUzG3CIbIDlUmmEntP0r5aIjxqE%2BeYBGyTBayNRgMYJqvEuA2R&X-Amz-Signature=84d12df803328e79aa8846bdc79f30fa9ac9bf24925c79fac9e2f9412a44b5dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6Q7JADE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHsMqPPY2YBsZCyKiNj5Wwy3YsFfg8gV%2F2R%2B72ni3GG%2BAiEAskZWB91Q13QWiOEKWciL1tOElpSOCGeqDEIECOz0DSkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlXKGGn0kLwRhP2JircA4DNc2sjqCdRoPKHlWeD%2BcmPK2kP2d5kS9WWMrXfYUscnuCf7ssvGgJ29VekfVTEGdyrQ5%2BUeL9YNsevx79OAg8jDzmtmxD6ThEdSA0Y5yx30h1JWQAddf7vkDsR2Wrvx7QRwyh8qRQNYBz3ho0SgcOHDayBkshE7MjfgGQ3u7SNK6wqQOMZeyoJXlm0KYihGjdBfZLWhXF7WVM%2Bme47MxqmW%2F976Cdq3jecgyABXWOk2Z4%2FLHRX9G0ohunIXBpootamffqtjefbF6twxPKIxfPZr1Sz1Me%2FUzUJOecuZaulH4aZbi8KKiFJaTtYo90c8Yublkkz6w1%2B3pazAW2VYioI84ALLZAhXIye1f5b5M%2FZ12G3Cc7z6oF4bwqT%2F9u61ZHWgsN82C2ROUecnSG7UCdasyhWU3S7MfJdgPzJyba2bi1QA6DCfbp5P66ULkzIU%2BlbckPeJBnflsGdO01JChMG1E9t5a%2FYvl857BgiX39L5k7ngeo2ywzCCTIGIIFGfwrKclGi0NKovn22Y7PhX9y%2BPMGp0CPjPPTPJbbAVMwj%2BtImTs1gjYNkGoxLM1petjsUFh6v1TYgC6kyIv7L0fbEJHV%2FgwZ74PxJxAorG5FccDWyVEOy4Su7t%2FLtMJihg8EGOqUBRSYb9bUrEyQWUo7dIugQVviV1R4MKTQegzMErNUYjClpI7Q1DIvLYZ06AGNs7X382XOg01XRX2N6JyzgN6M2w%2BqhPWZCV%2Fic6DPZEOKoeHTML0U132Pk0hBLyNkLt32l13Dl5PRhlJFt9Zg6hzKKTAjw%2Fjo5Pl%2BauPTLTZ7YRLk6ewsi2Gxu6d0Cqpn7mYwdjxjX71nn6MnRNMtPeIPVGas68WeT&X-Amz-Signature=16d35571841ef1750f1a08b5a9d36cd0ffd1f2f4e4686c9aaf97b2267f83d3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJZ6UH5W%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFyfnTBmH5D2M8RGeHIGcQ4YbQoUFU7i7QqpUe0aJNHNAiA77y%2BboG%2B0wcmIMv%2BqfuUs%2B1UGJVfuevc1nSUd1N%2Fe%2FyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWa2qT%2Fwih7%2F29EpWKtwDFMGNodqsG03bg7hNCTzetCvDiPC0DpC3XQDvVIazB1i2hhGWbm5q2LQnqYSjpPHFM44byl8ru1jIeKVx2gU00IL%2B0j%2BH5HZvu%2BZpEFXjASc4udcJzb08T%2Bkg7ui1Yc7dRSFjEahBSDXqQQWWJzBK9VyCQ7%2FTQHcXKOG0TpfRPzwxbYhqE0Blxyz9F9Ul7tzW%2B08ChawB%2FxNEZU5FGn5rUyJlgDQI1Ku07A9HFoL7JsqFyfjJyuct7%2FdJ6Qmne34JeC%2FFtKvlNCXapZw3KSTFME71EU9c1Z3F0ORU4fVo4ahR2mLv8sNmPwc8wi9EX84UbqOs1y2AQmwi5A6a9KDU%2BVwkqUYkxFHOcWN%2Bg7ftEGoiySM1IJhRnKpRLoKkSJvBFMCCv9jp5gAIpXXyuCLfogEzTufFG1a8DwQvWBUfHIDXvd0f2LroXVYsGzw666pgOa4ZqLHmzjZrqnFVMN%2FYaPWdvAQzESo5tmwIVYgMtUx7GYrwRM%2Br2ux%2FH2dO%2B%2B1Q2l%2FwnzgGn3HSW%2FB5NkC%2FHVH4Bdhscx8EAHvyAWlCclrIewMmendtWUu8%2BGfTxPMJxHFsA4s3%2B3ghniqpDK%2FX90K9wGv9kypubM88ATYeSVb5dD8G3bOqoOEGRfww7qGDwQY6pgF6v%2FnasnLErAi6ORQf2o8qSRfkfDErm9ozN4mCfC4cnXPtvLaFH6bcRjaNU8JKx0BxmQestdpM%2B0fe2XvuZW4BeZxEyhCxqix7FaSQ8BwuQDt7mk8wnYZHEBbQ2fIv%2FOYYyaQH2SXeMgDzIE5AfqUkQ4UY0bPtICj6cP6x99snUCj7ZVGOKFEbf7tdRvXWSoXPfNT9p5VI6ujhbIOjEVs7ri0PNjsa&X-Amz-Signature=dcfaeb50465e260aaf06110cd1126eb0a6d3c17dcb2a5f8fb3a5747385b5258a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CVBLJ2B%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHeKg%2FnJfmqy0exB2yujDNYqtdVFfsU7PzbRXAbAs9WPAiAivhIbaLLfYSUg3anMMKbRK9wptv%2BpFClTXxLfUQ1K8CqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdBp5RQfAzzv6qBHzKtwDMHvTL4MLwVJVPB1lqF6HjrtXzObbCD8Q10HTtQwx1uSThe25M8DgbVYYus%2FZJ1imlEblEaBV6IVy%2FGr%2FDJ1uuCx2cVBlLFUldCrJpFhX4%2Fiig5MR8mUtpwCVvAyVMwY6PPFHP2Hg0jGF8LQgAGw5P1Bdj4L%2FcrLuxJr5S%2B5Wnm1QN1ck3uGOOozAXuoeP5lAVq803nrwHLCiEGehyghOADok%2FOMlHE9T9ggfwyRp7%2B5kM1oYmTvDO0dbPlzRQvpDqCmW4KCKsETSMhWQ0oAcDtwv55s0vo7rYpwjYyA%2FHwmrdYVLlSqRIrrNo6QvOrpbjwvUtnzDPzl03JBXidsPW5mETV2unF5TuQjSxoRGT0eJh5v65IBhL8bv2oCm5xaC6TbYOofJo6EvkqjpeQxcHUHItC%2B2MC2QNTNoVlrtdrQzvXhNerzCc%2Bw47BT5HeQf4ykS2EOQRvq2kDdDkGVYFDshPavzion9QElrK1QeuPfXXvrofK27XlpoUIVDOO57MUYcp8hJv5lD%2Bs6%2FE%2Fhec3zL3zw8UmHeyaEwoBwgpL4DwjtPQkTBcdzNSFg46oUEjAfs4NL1l5YGQMApcEdWBKKpZl2tX5vI3SJ0nvkrXxZqVWjgx00x4XMDhn8wpKKDwQY6pgHHBKQ9m%2BwVN16MzPnp3uk3xUc3Gf7wCyA0yQmDankBlOxZQvmNDf66s6JvBmVNCVAYUfSYjbn7qSIiLftn%2BxJG7CGJ5jmF7MZ2PFyGtnCCtBH8O2q9RrKxQiAre%2BE3bP7kMQdkP96WOmau%2FmNX5ypmzKpwmjqNw4uQAtiF7P4CPecUzG3CIbIDlUmmEntP0r5aIjxqE%2BeYBGyTBayNRgMYJqvEuA2R&X-Amz-Signature=f294aef0352783993d2af9c3f4243f53755d6adb595afe357484febd76d87542&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
