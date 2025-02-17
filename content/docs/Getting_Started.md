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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KN5IVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCID2ML%2F7%2FH3kV%2BDYbZZsY1d1DG1iTisTyHzHmkBEtGA%2B%2BAiEAo8vK0y1gPh%2F8Dc4OdsjttfGyK%2B2SY6%2B0JRK%2BjdyaCRQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPNNDO2yK5jNyjtSGircA%2FC%2BMaQUQAtIunYW9qQNJcXT9IVrQ93zC4jKWkGoZZPKgjQn4X9mXr5RCaGDT3rL95P3E%2BqW6ialTmi8DnD7RMdS6H0cKWR2WztODa5hZDX6q5BL0piBOLiMgcYL%2FgrV5oVXjRVEytJDQewn0OR2Ded%2FCXEDNgijOmiBo%2FWRwL2OwByBCjHbenV7QvIOtFaXrNTJdXS2kRK5aSjNS0ezjiR0NjxgJQQJGsOWCoJ1ILFC3CFD9FKDIrmrz38juJK0WvqWcT6Rzxsn2W46tvRw5WzZJQO3vbQhOzoHx4Sh8loe2XLXAZwBv39pBjUdvb0K2m5807PycaQzHXTa3Avn0B9RJNk3ca6VMiF0xDoSAIYDvfaw2d6iFi5V2KCFx07yJyn4hy8MRnyNz4mPcXrIaJSR2WMb7CnWl%2BYjG3bhNkzlIhiSrhFq3OXVWs3o5NZ82qqbcdFeR8KZaTHrvEqWL7dhZ2cZviCLVhe3QXdkFc2j4BzOUeVJHwctKhBVxPaij6pkyb7VEaAw6S2B42%2FatS9WkYvwo1yY%2FIz3GhPJzK7I7vtP2OHOwHlS6y5yglp6nENiAwPB3Q7UgDVxsE00b3qoQxl3B0%2FaMivUXOz1%2BUa04VHuq0%2Bf3j0fRIqyMKuVy70GOqUBl0JO4SoO%2B853vZ3JTOpUJhSU%2Bjtw2ZYSQ9cwCxt%2B9fLkEuy5LZ6oXpUnrQOo%2B2%2BkvYFXehprQsI55wySfZN4agSx%2F%2FSL7NebBfBhqet0HgQxmzrzRjuxQsv5YtTlE2FJbOCNUWKlWQfV9DY3YuqK8Uyr57nUOpmlUxa1cOQcskhjuVO8%2FVNR%2BP2rdXJeo%2B%2Fqk3Gf1ENwDMXZydi5KFazpw%2FJFtQJ&X-Amz-Signature=1647f6458905042858381485e52dec0785e4c54b5331697d0f5ac1430b5a3d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KN5IVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCID2ML%2F7%2FH3kV%2BDYbZZsY1d1DG1iTisTyHzHmkBEtGA%2B%2BAiEAo8vK0y1gPh%2F8Dc4OdsjttfGyK%2B2SY6%2B0JRK%2BjdyaCRQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPNNDO2yK5jNyjtSGircA%2FC%2BMaQUQAtIunYW9qQNJcXT9IVrQ93zC4jKWkGoZZPKgjQn4X9mXr5RCaGDT3rL95P3E%2BqW6ialTmi8DnD7RMdS6H0cKWR2WztODa5hZDX6q5BL0piBOLiMgcYL%2FgrV5oVXjRVEytJDQewn0OR2Ded%2FCXEDNgijOmiBo%2FWRwL2OwByBCjHbenV7QvIOtFaXrNTJdXS2kRK5aSjNS0ezjiR0NjxgJQQJGsOWCoJ1ILFC3CFD9FKDIrmrz38juJK0WvqWcT6Rzxsn2W46tvRw5WzZJQO3vbQhOzoHx4Sh8loe2XLXAZwBv39pBjUdvb0K2m5807PycaQzHXTa3Avn0B9RJNk3ca6VMiF0xDoSAIYDvfaw2d6iFi5V2KCFx07yJyn4hy8MRnyNz4mPcXrIaJSR2WMb7CnWl%2BYjG3bhNkzlIhiSrhFq3OXVWs3o5NZ82qqbcdFeR8KZaTHrvEqWL7dhZ2cZviCLVhe3QXdkFc2j4BzOUeVJHwctKhBVxPaij6pkyb7VEaAw6S2B42%2FatS9WkYvwo1yY%2FIz3GhPJzK7I7vtP2OHOwHlS6y5yglp6nENiAwPB3Q7UgDVxsE00b3qoQxl3B0%2FaMivUXOz1%2BUa04VHuq0%2Bf3j0fRIqyMKuVy70GOqUBl0JO4SoO%2B853vZ3JTOpUJhSU%2Bjtw2ZYSQ9cwCxt%2B9fLkEuy5LZ6oXpUnrQOo%2B2%2BkvYFXehprQsI55wySfZN4agSx%2F%2FSL7NebBfBhqet0HgQxmzrzRjuxQsv5YtTlE2FJbOCNUWKlWQfV9DY3YuqK8Uyr57nUOpmlUxa1cOQcskhjuVO8%2FVNR%2BP2rdXJeo%2B%2Fqk3Gf1ENwDMXZydi5KFazpw%2FJFtQJ&X-Amz-Signature=c998744a1ec74109689e8ae99fdef8eb018159e58b9ad24bfab6e3c4d1a3790a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IZA36S%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIEsA%2FopDhZUBzRxW9%2B0%2B9Fz1q%2BckChBRFAQgBUxDfQMBAiEAw8wPHuuLyt7W6SpTluF%2BkT74dfKPVHVg5STuW2r9alMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDB5n8EhZVtmqTtDFJSrcA%2BjjJ81zE8BglbR42eby4fZx%2BYltdMoZRXAfQz6IuZ0JhlVL8RbkQ%2FgszQxFhgIwy525TTa2XVLFb8LKiLJGy8FuUxmWr9FVrQPExkMzDfDgRHEoFcKmYgwO0sEtHukARHq6LD8U9rx9MebB24YxZWA7MIrsphYuu%2FN0lx%2BTdT9LmtqPDnGsC2a0ipGSy9FqtdUka49N%2FbGTwFcBc1zvvK8xaEskuMxdGbcM68vBgzRjukyV2fQquMqJiRzQppP3nsfhcBx%2Fl9O1ZUbB%2FzMyOncmwDr8YhcSzq%2BEa%2FSx4TlxjDWyyO%2BYfwjOkILMb5MS59aRKJqdzKxFT%2Fv7yoN%2FC8iL1tmUYIf%2FfwqsqzY%2F%2BoK2RDhMzqPfiS0KWG8CkQAnLflXxZSPWPB2QiKU5vxFYv3gvJr2MNwoiZ4Bblpnaas%2B6LZKigQSJ9H8JjXDE7r4cIoLekG45ywGR%2B0bX6nbiKSERdEP%2FeuWMfKKsPRYa6UmUOljZJt3%2F4ge6aA5zQfGexsIA6ajzKRj3i4Ie4yeW0TThCcvHlBet7u5DWB%2F6wK6T%2BqUYfP%2FSni3AFEs3r1sXzs5eEg%2Bi3d0xs6bUD0b0VRlPaSl55%2FFPTHNs6TibHXlNb90D7aAkar8kzOEMPKUy70GOqUBCSimu0siizqYSXSRBCDxCjaw9FiENmdBCRJC1a7cvQLP8V5%2FcAwjjuKsqdrZvvh%2BrLeKP9EGYw1xWCxmpwGl4PD%2BiBIziT2%2B8LtfVWD7sxJiF1DhywSdEIC9E2TAwWRWoInaNomXi8k%2Fj34q2RTTCovCbqPhysk%2B5X%2Bzueyiy31QUJVFuRSR18DWF4EnLNvlAyPbgqfd7aNHVSml2rkFYLVBxLfC&X-Amz-Signature=8789ca2f14b49e9521365e570b8c883adbf9e1de221b026c0fde52831d9ce890&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637KOYBYU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCPN%2FvDZ6ePH%2B2XuKu279Mh3htcLCqeJfBnxeCIploGKAIhAPVBGSxPczAKSBOVpNsGgBn8vS55rxZ%2FmQacGx5JmORrKv8DCG8QABoMNjM3NDIzMTgzODA1IgzLF4TfhzApnFGkqYQq3ANKhFMAoJPbRyeaeTdLIFRK2WuwSDLyFpEuN6GjANk%2F5iu6ZyHUG79to9Kb7QuBMa7lrLFqqgC9GswE5RBONqbLMImMUJtdHKCTx%2BaCd%2FD1bp%2BLIvYiEiXPyffQQfAUAZxbG9H4kJcVl%2BIB8vE3fzb0tGaVhSfkDGwjJNSlcujH2GCMYyOeTu63h96gPFJKKvQJ5319dfJA1jojrkEyEGf7Mxjz5aa0%2B6mBZy8JqmtDZTpqxm8UWQWV%2F8%2F0zcRXVG2OQ5tHfRSPvAgqET0ylkhgeJR9vyq0IagItc%2BfFlyaKfMOjmDnek8GNus6oZdZTqOpcCqFpnoubXs0r8wA%2BerF3R3%2BBMjqbR9ZdQxkQKuTGoJCMamYXSwK17Q4OJwtLBACBZrH1rxcVZuHSYm%2BZQ6yym7xD16l8xPgaawu%2BXFHgaG%2BCSWc778SRgURveq8s8ouPzAuQjnuvc%2BtNqTo4rie%2FdfRRY1TMGFPZJfbpltQQFQo%2Fdo6WuKidfX1AQH3FpdeEwKVSnXpVzx1DLSit7DyLGgJ%2B%2BYmVgMMa56YbnEQ3mvFw02k476XzpvrvjVnV2D5vr%2B2%2B19BgLmMWyS5lqLA1nhq28gbubwCfg9JRPXjAlXYpsMrP%2BcFgv7PDzCGlcu9BjqkAVCreBJeR5TTBG%2FBqCR52w5qyGO2Afx6058kJg5Ll93zRbwfMGG6biQHG4klDHOYK0NNx5pvslliZjvSoawYJG8mFMqobZiVjKYqLy7xDvK8niA%2Fe23FPGZ5vrk2d9nT%2FnXh4qIAaKMHbJ28ZFQ6eXIu09Sd2oOBft5IIAACgdqsyV%2FdwEPtxqh%2F8RXeI%2FozRFfY0Y8R5KsHKBl1PGtWEmWZsLRR&X-Amz-Signature=d8d4c543ee3bb6a95ab5eb716c4735aa92771d6bc43d960e12711d0eda7a7cab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KN5IVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCID2ML%2F7%2FH3kV%2BDYbZZsY1d1DG1iTisTyHzHmkBEtGA%2B%2BAiEAo8vK0y1gPh%2F8Dc4OdsjttfGyK%2B2SY6%2B0JRK%2BjdyaCRQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPNNDO2yK5jNyjtSGircA%2FC%2BMaQUQAtIunYW9qQNJcXT9IVrQ93zC4jKWkGoZZPKgjQn4X9mXr5RCaGDT3rL95P3E%2BqW6ialTmi8DnD7RMdS6H0cKWR2WztODa5hZDX6q5BL0piBOLiMgcYL%2FgrV5oVXjRVEytJDQewn0OR2Ded%2FCXEDNgijOmiBo%2FWRwL2OwByBCjHbenV7QvIOtFaXrNTJdXS2kRK5aSjNS0ezjiR0NjxgJQQJGsOWCoJ1ILFC3CFD9FKDIrmrz38juJK0WvqWcT6Rzxsn2W46tvRw5WzZJQO3vbQhOzoHx4Sh8loe2XLXAZwBv39pBjUdvb0K2m5807PycaQzHXTa3Avn0B9RJNk3ca6VMiF0xDoSAIYDvfaw2d6iFi5V2KCFx07yJyn4hy8MRnyNz4mPcXrIaJSR2WMb7CnWl%2BYjG3bhNkzlIhiSrhFq3OXVWs3o5NZ82qqbcdFeR8KZaTHrvEqWL7dhZ2cZviCLVhe3QXdkFc2j4BzOUeVJHwctKhBVxPaij6pkyb7VEaAw6S2B42%2FatS9WkYvwo1yY%2FIz3GhPJzK7I7vtP2OHOwHlS6y5yglp6nENiAwPB3Q7UgDVxsE00b3qoQxl3B0%2FaMivUXOz1%2BUa04VHuq0%2Bf3j0fRIqyMKuVy70GOqUBl0JO4SoO%2B853vZ3JTOpUJhSU%2Bjtw2ZYSQ9cwCxt%2B9fLkEuy5LZ6oXpUnrQOo%2B2%2BkvYFXehprQsI55wySfZN4agSx%2F%2FSL7NebBfBhqet0HgQxmzrzRjuxQsv5YtTlE2FJbOCNUWKlWQfV9DY3YuqK8Uyr57nUOpmlUxa1cOQcskhjuVO8%2FVNR%2BP2rdXJeo%2B%2Fqk3Gf1ENwDMXZydi5KFazpw%2FJFtQJ&X-Amz-Signature=35fe83602771f1d378cdd212a422300c99c96874904198c421f2aa30afa25dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
