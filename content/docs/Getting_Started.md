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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VU2V5I%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2B0V8gm%2BRiXE7UF895S1qEN27rP%2BYUS9tHMW7QeastQIgekFJ3TEhn6KEWT1f282uHY%2Bnn4HAwKEiaX4Xhb70H%2F4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHYyf327fqGLZDeEircA3BBBFE4%2Bt49Eb3qF0Vt%2BhYFXz1QnWL3Yfww8%2BvIpe7ObuJDEct%2BPqv6%2FSXbP6UPN6TgpJYNtMPpPQnEME0NkueV7yqJtPAb2w0pnbJUYeH0V8uhdvr%2FD9KazQVUtkxvKlRQ6B5bWJpzpYyOvAkbNlUmOkNDSre82GC78W7WTRAkmDecyJXcprxqEfsUeeWP9fcZ5z4qqk4PfGTxKjL6bjGYI%2FZZ1OXJRrlRavs7DP7ao8NlgLeULFYgJNIa2rarYetESguPDUGFpoVQjOvgHyr4os9sDSs87BBXHQWvE7s7ISwtPOKBQFjxjxQMXEXiuPImE8KoxIhgETfzA5DT9j6APC8xy0k8%2FjQDSIQFPMb4N7j4vviI%2Brtx5Ij2A7NuX0D%2Bfk0Pp2GnO7KZSHxZ0s3gUVdqO3XQG2sAVPjnhLL2J78eE1uozstnhPVhDGS%2B%2Bw27Z6pH6E%2FE8xvAAxObVQhmudr23jC02nT1e0e3RpOCrc0WlBIMf6mZiQVkQ00bqtN4a%2BhyTyIYeB5nIF73y6Ro3f8rP3CiK2gfWzcGEQ4vxUCUW%2BFjNVuqi4lBtWbPZfcxioYLY0xsxovsfmPakb58eUHFmfimUj1K0ea14QizjYQRdZ15f1HQIGfIMLDd1MIGOqUBYAROekwbtkuxGx0hK%2FgTZhD22z2lPeahAfEXh6YVKAxtUX%2FrCaTrN3HlNr84h%2FyrYG2OVK79iXaEvaC%2Frp%2B%2BS0AKuFOuXfpmrXdxlzA%2FU7atli%2FYzQHxp3xJlTfHw817uu97evC1raUzJ0rOOWyXfnOLt3MxpuaCkRva0T6juPqWKQlLShyUph%2F%2BBMgl9kBpf2u9DFSQe%2BxRwEMoE8Zi8KA0sJ8o&X-Amz-Signature=d2815444b16598b0d1068b3236c53560375ee3933c49c25c240c994fa71d1dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VU2V5I%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2B0V8gm%2BRiXE7UF895S1qEN27rP%2BYUS9tHMW7QeastQIgekFJ3TEhn6KEWT1f282uHY%2Bnn4HAwKEiaX4Xhb70H%2F4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHYyf327fqGLZDeEircA3BBBFE4%2Bt49Eb3qF0Vt%2BhYFXz1QnWL3Yfww8%2BvIpe7ObuJDEct%2BPqv6%2FSXbP6UPN6TgpJYNtMPpPQnEME0NkueV7yqJtPAb2w0pnbJUYeH0V8uhdvr%2FD9KazQVUtkxvKlRQ6B5bWJpzpYyOvAkbNlUmOkNDSre82GC78W7WTRAkmDecyJXcprxqEfsUeeWP9fcZ5z4qqk4PfGTxKjL6bjGYI%2FZZ1OXJRrlRavs7DP7ao8NlgLeULFYgJNIa2rarYetESguPDUGFpoVQjOvgHyr4os9sDSs87BBXHQWvE7s7ISwtPOKBQFjxjxQMXEXiuPImE8KoxIhgETfzA5DT9j6APC8xy0k8%2FjQDSIQFPMb4N7j4vviI%2Brtx5Ij2A7NuX0D%2Bfk0Pp2GnO7KZSHxZ0s3gUVdqO3XQG2sAVPjnhLL2J78eE1uozstnhPVhDGS%2B%2Bw27Z6pH6E%2FE8xvAAxObVQhmudr23jC02nT1e0e3RpOCrc0WlBIMf6mZiQVkQ00bqtN4a%2BhyTyIYeB5nIF73y6Ro3f8rP3CiK2gfWzcGEQ4vxUCUW%2BFjNVuqi4lBtWbPZfcxioYLY0xsxovsfmPakb58eUHFmfimUj1K0ea14QizjYQRdZ15f1HQIGfIMLDd1MIGOqUBYAROekwbtkuxGx0hK%2FgTZhD22z2lPeahAfEXh6YVKAxtUX%2FrCaTrN3HlNr84h%2FyrYG2OVK79iXaEvaC%2Frp%2B%2BS0AKuFOuXfpmrXdxlzA%2FU7atli%2FYzQHxp3xJlTfHw817uu97evC1raUzJ0rOOWyXfnOLt3MxpuaCkRva0T6juPqWKQlLShyUph%2F%2BBMgl9kBpf2u9DFSQe%2BxRwEMoE8Zi8KA0sJ8o&X-Amz-Signature=23715e18fc347340c36507115d8b36cf0f36185d218f7d84213ed44838aae6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VU2V5I%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2B0V8gm%2BRiXE7UF895S1qEN27rP%2BYUS9tHMW7QeastQIgekFJ3TEhn6KEWT1f282uHY%2Bnn4HAwKEiaX4Xhb70H%2F4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHYyf327fqGLZDeEircA3BBBFE4%2Bt49Eb3qF0Vt%2BhYFXz1QnWL3Yfww8%2BvIpe7ObuJDEct%2BPqv6%2FSXbP6UPN6TgpJYNtMPpPQnEME0NkueV7yqJtPAb2w0pnbJUYeH0V8uhdvr%2FD9KazQVUtkxvKlRQ6B5bWJpzpYyOvAkbNlUmOkNDSre82GC78W7WTRAkmDecyJXcprxqEfsUeeWP9fcZ5z4qqk4PfGTxKjL6bjGYI%2FZZ1OXJRrlRavs7DP7ao8NlgLeULFYgJNIa2rarYetESguPDUGFpoVQjOvgHyr4os9sDSs87BBXHQWvE7s7ISwtPOKBQFjxjxQMXEXiuPImE8KoxIhgETfzA5DT9j6APC8xy0k8%2FjQDSIQFPMb4N7j4vviI%2Brtx5Ij2A7NuX0D%2Bfk0Pp2GnO7KZSHxZ0s3gUVdqO3XQG2sAVPjnhLL2J78eE1uozstnhPVhDGS%2B%2Bw27Z6pH6E%2FE8xvAAxObVQhmudr23jC02nT1e0e3RpOCrc0WlBIMf6mZiQVkQ00bqtN4a%2BhyTyIYeB5nIF73y6Ro3f8rP3CiK2gfWzcGEQ4vxUCUW%2BFjNVuqi4lBtWbPZfcxioYLY0xsxovsfmPakb58eUHFmfimUj1K0ea14QizjYQRdZ15f1HQIGfIMLDd1MIGOqUBYAROekwbtkuxGx0hK%2FgTZhD22z2lPeahAfEXh6YVKAxtUX%2FrCaTrN3HlNr84h%2FyrYG2OVK79iXaEvaC%2Frp%2B%2BS0AKuFOuXfpmrXdxlzA%2FU7atli%2FYzQHxp3xJlTfHw817uu97evC1raUzJ0rOOWyXfnOLt3MxpuaCkRva0T6juPqWKQlLShyUph%2F%2BBMgl9kBpf2u9DFSQe%2BxRwEMoE8Zi8KA0sJ8o&X-Amz-Signature=5ce5abaa4efceba48bfd136ec7b0bba846121f4f3624a9ba55aaed8544002bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNYGUXB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDogftLL4zqO6ioK%2Bvee1AM67gvu9z7KxY%2F8AYRhloSwgIgZiLMX3rVRu%2Fgfq%2FklSsDCghe0DV4UvzhPOJXZ0v%2BFqYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJqA7kUwXaPKQfAYCrcA9nx%2BJ8aVZPCa36aGsxuF1J1e279mGKVUkQZ1cPfrlK3cmnVgJwjz8Ui4%2FQ%2Bcj58ekcdQqGVsTnkMeJ0VOsZ%2BH1EQGZ769%2FDSNQRbHmCAb%2F6WVqvkOXOSaRGbwH83vTa3rpXIyrYWUCDC2dwAlbnYZCNeFvaTV%2BSN%2FDaA3BwJeBKeH8n7JaNZU8nI1IaS2Pqo5xyBsvPvxn4y9l7%2FRcRxCJvdV%2BxUnu3VPLqSLHRUzFQcvLooW7%2BZHmcHWUpjWQCvtjoF%2BUFtQJU%2Fs1FcOnVxVn9Y1jdFGp74nOq7eE4pgz%2Fntj2I%2Fm9GEv2Ii9ikF%2FsNWE2%2FOxlZQxLv20e3Q%2FWlxrJJKXx2Bo0jyc4FfO02hGcvNsGf8cSNS3JI5R2gATTOKfnAn0YMFoKX6OwVbxKHz7%2Fb%2FPGyH%2BhEAxg1Z13VDvePgdkv4ADhYYxWsQo%2FsEF0gV3bzHE%2BxXA6ejJwty8PUAUvwPN6LdXn1v2ad47j2bahaPw6n3capVHVvzNIGJBHwgmribt%2F6%2B3r5%2FRSFl9aECdyyYypv1YwDDeUrAsJFEo0ajtcVe1DhGTUsJKxxxYRMr5OgIYS9p9kz17JFuQWWxHgwdqfLl3W4smS%2Fc8LPXyRrvR0QE5K%2FYzLLOGMLDB1MIGOqUBX0WRnMRIcxN5FjC79VAdE2qsrxJNar7srSsiHFeHJ%2FTtyFgEj6Wy8Xd5OdxCwqSyhvnVPev2E%2Bj8SczFMXJtQft9MVmJIm%2FJ62k7DsblcHmTXElj0ouAUxqcQ6YWZRs4jNI8hERPufYiI8KgsPUwMOfEsPYEZBHMn8JgbJIb9TLjzYaSPZqL43b5UsDEMzYmXj8BkVXn4UnWotUH%2BGBRLrPheicX&X-Amz-Signature=2fd741052a372bc73e246d67b7e1a7c0fb92b4247e1897cb51f3aba420a86d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQO36YT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDts6w1bxneTg6nFSmEMpfLz%2FxlG2n7BSx6OqAEmSItFAIgKvHg%2FuBMSvo2ZAbOJBALn3%2F6P9DJtGbikI2NNT9y4LUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOBYDGsqH7wQoUe80CrcA%2Bjs9qU1Oy4%2FsfNI9ywCiZaxeT5wL56%2F8cr5lr5aU3Rd3dZ2y26LrZJ8S5QNo45so44fBfcs6CaTOs7zQ%2F%2Bgo3XEy7gEjSSl4ZrEc1NNUU3SwXamTyKGbd9cloi2iklE8%2FD04mLiduAcxekB8RBPj1NfWopKcPPPJub%2B6objIAQgenwLOYaBwQar1WSAUXSNK8n7ZpBiPVwUbiXd0eiYMLNlDV5eB6to22TXlinVIYjhB%2FwADXGljYxIGe2siYfgjlhADDGHMNAdYuSJHfqOC4YK%2FW3Q1vy%2Fe3FDoOxwwPtq0U4ECnGpfucjWeseWkXtkoDZyz2rX1kTzM9Nx%2Bq4qYaSO3Opio6lTr7g3gLDNeyQAs0nJfKoNNOXH8hOvHbCo0ZOL2JCESymk1HFau%2FpBYzG0OKBCctYoTnkUFJLKgOfmiT81EYzlrl6OZ1SNesja6linor94qYjxorUNmETDkzhDizbVcujluemJiPChYhbiZuFCAYURfo1IHG7BvKTyCXAzz%2Bly8TD15wOkQITS7Bqis1wXPbgBTjtXF2i5WZa%2BA66A4AZI1Fl5pfTvnPVbd3nSmhNK8Fesa2fsgv0tUAVOni6WAvk7XPd40etdCXsmuE%2Fd68WHpIhlebvMLDB1MIGOqUBYVIr3%2F5JIfFhjvfyJhUcLxsrNqNrwovNk1PPO1qIT4ByyElBTU9CDxzoHqPVRWUzfFt5JSHly0AdsG7xpBxRmNe7UUWueX5DTZmB7iODsumgCA1zdIKnRoGzMYO8Oh547yww2T3c%2B9wuHILx8tQ0yzypAFp%2B11fT0gjkN%2FSbGDqLHu5qV3tqBqRPw%2FZZER4%2BBAN8r1LSKsKz%2BmvMyr60z0AVR2GM&X-Amz-Signature=2b0d2de8f8e76d6af46f24e6c20e36873b5c7c486bb9f1cda8320bd0245495a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VU2V5I%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2B0V8gm%2BRiXE7UF895S1qEN27rP%2BYUS9tHMW7QeastQIgekFJ3TEhn6KEWT1f282uHY%2Bnn4HAwKEiaX4Xhb70H%2F4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHYyf327fqGLZDeEircA3BBBFE4%2Bt49Eb3qF0Vt%2BhYFXz1QnWL3Yfww8%2BvIpe7ObuJDEct%2BPqv6%2FSXbP6UPN6TgpJYNtMPpPQnEME0NkueV7yqJtPAb2w0pnbJUYeH0V8uhdvr%2FD9KazQVUtkxvKlRQ6B5bWJpzpYyOvAkbNlUmOkNDSre82GC78W7WTRAkmDecyJXcprxqEfsUeeWP9fcZ5z4qqk4PfGTxKjL6bjGYI%2FZZ1OXJRrlRavs7DP7ao8NlgLeULFYgJNIa2rarYetESguPDUGFpoVQjOvgHyr4os9sDSs87BBXHQWvE7s7ISwtPOKBQFjxjxQMXEXiuPImE8KoxIhgETfzA5DT9j6APC8xy0k8%2FjQDSIQFPMb4N7j4vviI%2Brtx5Ij2A7NuX0D%2Bfk0Pp2GnO7KZSHxZ0s3gUVdqO3XQG2sAVPjnhLL2J78eE1uozstnhPVhDGS%2B%2Bw27Z6pH6E%2FE8xvAAxObVQhmudr23jC02nT1e0e3RpOCrc0WlBIMf6mZiQVkQ00bqtN4a%2BhyTyIYeB5nIF73y6Ro3f8rP3CiK2gfWzcGEQ4vxUCUW%2BFjNVuqi4lBtWbPZfcxioYLY0xsxovsfmPakb58eUHFmfimUj1K0ea14QizjYQRdZ15f1HQIGfIMLDd1MIGOqUBYAROekwbtkuxGx0hK%2FgTZhD22z2lPeahAfEXh6YVKAxtUX%2FrCaTrN3HlNr84h%2FyrYG2OVK79iXaEvaC%2Frp%2B%2BS0AKuFOuXfpmrXdxlzA%2FU7atli%2FYzQHxp3xJlTfHw817uu97evC1raUzJ0rOOWyXfnOLt3MxpuaCkRva0T6juPqWKQlLShyUph%2F%2BBMgl9kBpf2u9DFSQe%2BxRwEMoE8Zi8KA0sJ8o&X-Amz-Signature=473ba5f4d5e8132c83bdcf43e478babeb78dc3973b8e8d954f0ddaa86132ff93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
