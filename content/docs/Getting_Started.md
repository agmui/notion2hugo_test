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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX77CSP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRA%2Fsf3LlyJ2HlpMUTWqAZu3D0vykpvAWQySpD4UhEywIgSh1Kx%2FIY1eLUy5l00FrsIminfy2X4UmG5Ym217AhxnUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCoFGzP7QzS6xBJ9WircA6HHaMcri3cNOPkh%2FMEkjnWM6lk8jTdRdPmK6wqlzV08WaSk1ehvTlSOrE9HvnLjyoJSZVz%2BeI4YAhiGoH5g2qe3e91UolrgApQeIwN%2BMhiT4LQDE5tTOQRfmBFkz3nNoa8HaYf5rpnh5y1BG35j2iLnYoZpANObUai8u3AkcHg5J4qigr2TB4wfvi%2FrA3cwiYuqitXLrK%2Bz%2B0H8fOoMKUR9YquUx%2FgCKyUYbgEjpg7EJ4tIqSgZOV4p1xeEAqG75MbmjyPCvtYJ8SXhMb6%2F%2FXwGhwgRy6Ln%2FsUNSs4kbU4G%2F4KnsgDSIhwEiQNbpI3fCjHh8ymFvYyUWWm%2FV0R3tzFhI9lXCNFfJUqrtYb1n04uNt8WEhA8whhSTV2hD5gJgERERo1RXVBO%2FUecmwcpdq2%2FSR3F%2B6qTsSx19c74dP1npor2z%2FGyLOpPChMdE3XYaTod5FWKTlA5bktuUZg5IdJCpUrdlKWQRGaLMUCqf3CvKQl3ycmQCHOE7IEzCJAHIfn%2Bvg0ibSfENFNMZvbtkFtETjECScYX8BGHTSBQA9Hu9k7k4WgcZDBOyp8LE3Uwgzb%2FGGE21erXQAFUgZvM4Wf3U64aLLOt8Unk0LmTnSgcJvAyTyMsHdKPIZ19MJ3V078GOqUBoMDjzeCdHHozbMV01upO4SL7SEklyIjqp0akE%2FW%2Fx%2BnkVcb5fKqe5SkW8Z%2B9tMXuec%2BEQUWCQV7nvwnAFcb0riwBBM7G1hAS0hXXCotG%2FLIomUIDqc1dNxx8r%2F8%2FvRJOyTCbrlvriaxM%2FnU0LHeGFRrJUs%2FYljVYpvqpAP8mRfBjT%2Bvf%2FOiexaMe0UMCuMvhN4z3Pu6uJrYcvEF5lKxjMJXl%2FLe9&X-Amz-Signature=6dc645bca5c9c75e15db138c3b736de18ab82464a7a7874e972f5762a32838a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX77CSP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRA%2Fsf3LlyJ2HlpMUTWqAZu3D0vykpvAWQySpD4UhEywIgSh1Kx%2FIY1eLUy5l00FrsIminfy2X4UmG5Ym217AhxnUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCoFGzP7QzS6xBJ9WircA6HHaMcri3cNOPkh%2FMEkjnWM6lk8jTdRdPmK6wqlzV08WaSk1ehvTlSOrE9HvnLjyoJSZVz%2BeI4YAhiGoH5g2qe3e91UolrgApQeIwN%2BMhiT4LQDE5tTOQRfmBFkz3nNoa8HaYf5rpnh5y1BG35j2iLnYoZpANObUai8u3AkcHg5J4qigr2TB4wfvi%2FrA3cwiYuqitXLrK%2Bz%2B0H8fOoMKUR9YquUx%2FgCKyUYbgEjpg7EJ4tIqSgZOV4p1xeEAqG75MbmjyPCvtYJ8SXhMb6%2F%2FXwGhwgRy6Ln%2FsUNSs4kbU4G%2F4KnsgDSIhwEiQNbpI3fCjHh8ymFvYyUWWm%2FV0R3tzFhI9lXCNFfJUqrtYb1n04uNt8WEhA8whhSTV2hD5gJgERERo1RXVBO%2FUecmwcpdq2%2FSR3F%2B6qTsSx19c74dP1npor2z%2FGyLOpPChMdE3XYaTod5FWKTlA5bktuUZg5IdJCpUrdlKWQRGaLMUCqf3CvKQl3ycmQCHOE7IEzCJAHIfn%2Bvg0ibSfENFNMZvbtkFtETjECScYX8BGHTSBQA9Hu9k7k4WgcZDBOyp8LE3Uwgzb%2FGGE21erXQAFUgZvM4Wf3U64aLLOt8Unk0LmTnSgcJvAyTyMsHdKPIZ19MJ3V078GOqUBoMDjzeCdHHozbMV01upO4SL7SEklyIjqp0akE%2FW%2Fx%2BnkVcb5fKqe5SkW8Z%2B9tMXuec%2BEQUWCQV7nvwnAFcb0riwBBM7G1hAS0hXXCotG%2FLIomUIDqc1dNxx8r%2F8%2FvRJOyTCbrlvriaxM%2FnU0LHeGFRrJUs%2FYljVYpvqpAP8mRfBjT%2Bvf%2FOiexaMe0UMCuMvhN4z3Pu6uJrYcvEF5lKxjMJXl%2FLe9&X-Amz-Signature=8b25a5c5d3f02206c81cf03ee69253a643a90b7c9be95cff1494b51386ce0a01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNVRXKF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsewVC2vdX2dhN%2FUpdYem0jxcMnM7PeIe7D5o%2Bvi5NXAIgfQ0qo%2BuuOjfnzLF3riomEyLqmxngauWlqQhBBiHyQWAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCoQbCUG1KcOPKuEQCrcA8rUkSrobOj3Ka5ZxfdXmUiNhbc5z4lcrkfN4J%2BybxyncPwKiPyJuduuJtKnyrIJ9atE6fhdbh07OhgrTXsrlTZ%2B8kYcGkx33JT8aak4RELFFV7uZugKhPp3dUe83PMOdiNWfkrtpak9DIcKrwy4vxpLx9l85%2BLBHvySlIFkCM3Av3KmqtjNLj%2B%2BrJ2UibbE7OG0Br7w7xGzf6BAQ7tkPh3f5e3FKMv9XkCAAprD%2BQa1OouSqLyTjS7T9Xjp%2B8cqFK%2BR0kA7Z7Cq5%2BH3oLtinfj61otIvus52A22Kv2Y6OkH4vUN0zrDk7GH3LM8eIddn3QkDskZc%2B0urTDtVnDIbvx%2FR%2BQcU3CsVOzOZN9qvMbzRazrQNbHlbVp6IeM9d4Fno0W2MOJLDey5sqGjKNPA2BZa8zHojauT9KRqzQ2SExBTIEp4Z747%2BChM3YYp1RUBfPh41WoteqEbnq%2BSJMh9eiTJVDVqovuT2mwnJuC%2BkGwk1eD6LAVIOZRCaVNyEA83Rdii9iCYojpVg113HE0dzL7jT8Ahz3Fsu1%2BQpHoGDJpMNk6DCXxC%2BwaNsqGK0BBmevR3xdDkRakZVmYuwvefNXDJL5ZxPR64BxLzdpwDs3W7vpzEYRR6aCCOQhfMJzU078GOqUB95G9eOSOYICvF1JYyXnuYRkimAFmNSIK66woJxM2MSu8y%2FaHIhUrESXkulP8PFrxdVa8FeFuUJjxXohzh%2BsFcOCqXlyo861EQoJI5O2rdFqZ50hwoPnyaYV6MMEnaH%2FHW3bIIsomCaYS6WqpD8DqQPjNHDTlRGn0WqkAOveqWNpVnrD2cTiS6GEIwN9mo6LbfDRHl5VqnJRr8hJeATsIfel%2FUebr&X-Amz-Signature=b69a9e92cfc8da6b8517db93a8b2d09d49499bfb051f718839111250aadcd5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627C7IXXY%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC48VC%2FFzW%2B2x2puelsg80ZqfyTKTwvumybpMG3kJnGKwIgJl7yotRnQQxP6MX28QULOXXF5ztBqGMa67v7D9Nv2J4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBUABSCYybYxmSaMxircA8MTf6f25b9nu4BghyPN%2FymdGDn8AppwLLQMpkFG1LFtriK%2BUGkQv%2FDIpkAbnmFiIRlyoalyqQg6sNNHLPMgkV4chvLtQz3GhZgn6gtog9AhbETX%2FEVFNL%2BotKgVop8gpuHgyyJPC5yGtXuD0Aa3VZUi4Y8%2Fopd8KQDpZ9iBeAdOPI5YrtIx1N014Z7dtkkNTP9mMiNdfLR%2B4Pb3%2BGiJsT59rGA229et3gKgDrsuuNPSEot1YGmcy%2B%2FPB8wxYlQD%2Fo%2F26Ocu1m5tJ7eQh0WsNiQNqaXTOXMbLll5ir%2BRIJDpbtjejQE6uu2NZ9wewI6Xt8mIJrdneZWVWM97FdGiWZB2weptZunRcXq44lmO4Zhbu1et3%2Bb7lBlTBj%2BdPahOnXIwoFQrZ68uGJQTjEkxpTbNVA4N%2BPyVrxySfXUDyyvQ4TNxBy5GeqFZ2KPD5fIk%2FBDRfFDTbiujWI7Z8ofDeYC7Lh1GNc7T7yhHw2%2FDIpSCEGztoXfRaQhrhS0d0CJW%2FLIj0z6OEttw9uOFK%2F7Srk%2FHCMGzMk8f6Uxe83QggS%2F8G2DWLEL1q3n%2FOzA67Thv9QRv5HwRE8%2FipOwdjOzirGiAJ2ODwEMKlkIQgPbWxdjM20nbVgBJN3HJdg%2FdMI%2FU078GOqUB0E8u2AF3N%2F5n2jByuJBdYb4WN9dSNVFozBCIKF0QQQyvijD0T7UfeL8CofuXqHWgK%2Fei%2F92Da2i%2FJe%2Bvz9YKmY%2FAvY4p0t5guIqNioQs9VCxyvffrxrnM6rw9iuJ2My4eyBdD%2BvQjeP1gyC3nRB1lIPb4A92p%2FvCFgmBkZrF%2BkeDShM7KiyPLZ198c8uN%2FhkIa2k3ZkssXHoSLj80nMMwFf2uY6r&X-Amz-Signature=f886f1c68156d9068e3dbb65279f5703164336b0fb7c0167b62197b7d77fa6b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX77CSP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRA%2Fsf3LlyJ2HlpMUTWqAZu3D0vykpvAWQySpD4UhEywIgSh1Kx%2FIY1eLUy5l00FrsIminfy2X4UmG5Ym217AhxnUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCoFGzP7QzS6xBJ9WircA6HHaMcri3cNOPkh%2FMEkjnWM6lk8jTdRdPmK6wqlzV08WaSk1ehvTlSOrE9HvnLjyoJSZVz%2BeI4YAhiGoH5g2qe3e91UolrgApQeIwN%2BMhiT4LQDE5tTOQRfmBFkz3nNoa8HaYf5rpnh5y1BG35j2iLnYoZpANObUai8u3AkcHg5J4qigr2TB4wfvi%2FrA3cwiYuqitXLrK%2Bz%2B0H8fOoMKUR9YquUx%2FgCKyUYbgEjpg7EJ4tIqSgZOV4p1xeEAqG75MbmjyPCvtYJ8SXhMb6%2F%2FXwGhwgRy6Ln%2FsUNSs4kbU4G%2F4KnsgDSIhwEiQNbpI3fCjHh8ymFvYyUWWm%2FV0R3tzFhI9lXCNFfJUqrtYb1n04uNt8WEhA8whhSTV2hD5gJgERERo1RXVBO%2FUecmwcpdq2%2FSR3F%2B6qTsSx19c74dP1npor2z%2FGyLOpPChMdE3XYaTod5FWKTlA5bktuUZg5IdJCpUrdlKWQRGaLMUCqf3CvKQl3ycmQCHOE7IEzCJAHIfn%2Bvg0ibSfENFNMZvbtkFtETjECScYX8BGHTSBQA9Hu9k7k4WgcZDBOyp8LE3Uwgzb%2FGGE21erXQAFUgZvM4Wf3U64aLLOt8Unk0LmTnSgcJvAyTyMsHdKPIZ19MJ3V078GOqUBoMDjzeCdHHozbMV01upO4SL7SEklyIjqp0akE%2FW%2Fx%2BnkVcb5fKqe5SkW8Z%2B9tMXuec%2BEQUWCQV7nvwnAFcb0riwBBM7G1hAS0hXXCotG%2FLIomUIDqc1dNxx8r%2F8%2FvRJOyTCbrlvriaxM%2FnU0LHeGFRrJUs%2FYljVYpvqpAP8mRfBjT%2Bvf%2FOiexaMe0UMCuMvhN4z3Pu6uJrYcvEF5lKxjMJXl%2FLe9&X-Amz-Signature=f0733b773dc6cb450260b02529296dad450f6378206f69574dc568fc7a662483&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
