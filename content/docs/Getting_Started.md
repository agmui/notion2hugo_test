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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL57U3W%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzp23sPo62gWG9YJh1tOYKihqsE6MAShO147smL%2BjZgIhAKMhqDqTM0YiApUZsR5WXYZJUC7ZVb%2BC0E8v7%2FZRC%2BfEKv8DCBAQABoMNjM3NDIzMTgzODA1Igw0lxYK5F4S0M%2FzkLQq3ANv4sxJTNuTZ8kj%2B3qi%2FIUEQcNnoQB%2FdwANqyC8tisRIFtCjf3p8JNPOPwp7GWSE6Y%2F0x88QQGJ%2BwqCd185Lj%2FCiN0Jw4uZJfBg92Bs8gnfEQqHvdMNFQBlfPEXKxxx8ztNnzR5dP4xY0AyRQbTUHf7LRudSq7G%2F%2BrLPQeyEr7AGEjoxAe5lPvlyHDqEAR1LTUUI42AHH7Q%2Ba7C%2FrIHT%2BzUF3x9YdAQdcdPtgRtTVqUZKd8Z0KVQZF5%2B%2FRW4WwU4cBX76VqrvN6y7vRInR6YLAbLWDEphOeApHZBDWlI3D%2BvhY%2BoQfA73oRvL92iNGLdjmwekyk9qVLf38C8KOG8%2B5vFHJWtoG8i0DnVNsxVjqBK1YpjgPa6Yz1IsRqWS9QPkOW%2F7zma8xLxmFbxYiaORW6flRHzCER1f8ITkfyTvTf3NXcgXDsvtKDuETvbg%2FKiwY9%2FaZd9r8lxzEGMYRcXCemaBPLvhvMac3m0qqWGzGj3kdyDWAjpjwuhF01GsHhPb%2FAf8sbyegheMB16u10oCerCf%2BO96wXI0hYNLX8yMUlqMvwuIixbl1KuQQTKZq4RvPZARymOeTYzeCLvEslaPikIEthJFl0Zxt3yWpz6qQPanTp2Wpq1vbQx21DXzCjqba9BjqkAVVDZgOWvWwy17B3xuCM1bkCoDgNFep2WRpvQ8ZVzLBRqq8oPjokxyhFSd2t%2FfHl3Cak8Rr5CrLAJlZai2ln5GRnkjToWIOdDPSacK4k5kxvtnS9PB8bBq4%2FrfURV1WauB%2Fl1nX9dwgHBzOEo79a73%2BtrLW7Nl0UYhqqqQaUP4btT8kVASDlWVlY34k%2FPLm%2FHAIMZbAwwe4hkXUrjO%2BYRZHzoLJ3&X-Amz-Signature=a59e75f09ac7666eb49658e2d3435f4530302f06e6ab24cac7cdc73b9c732235&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL57U3W%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzp23sPo62gWG9YJh1tOYKihqsE6MAShO147smL%2BjZgIhAKMhqDqTM0YiApUZsR5WXYZJUC7ZVb%2BC0E8v7%2FZRC%2BfEKv8DCBAQABoMNjM3NDIzMTgzODA1Igw0lxYK5F4S0M%2FzkLQq3ANv4sxJTNuTZ8kj%2B3qi%2FIUEQcNnoQB%2FdwANqyC8tisRIFtCjf3p8JNPOPwp7GWSE6Y%2F0x88QQGJ%2BwqCd185Lj%2FCiN0Jw4uZJfBg92Bs8gnfEQqHvdMNFQBlfPEXKxxx8ztNnzR5dP4xY0AyRQbTUHf7LRudSq7G%2F%2BrLPQeyEr7AGEjoxAe5lPvlyHDqEAR1LTUUI42AHH7Q%2Ba7C%2FrIHT%2BzUF3x9YdAQdcdPtgRtTVqUZKd8Z0KVQZF5%2B%2FRW4WwU4cBX76VqrvN6y7vRInR6YLAbLWDEphOeApHZBDWlI3D%2BvhY%2BoQfA73oRvL92iNGLdjmwekyk9qVLf38C8KOG8%2B5vFHJWtoG8i0DnVNsxVjqBK1YpjgPa6Yz1IsRqWS9QPkOW%2F7zma8xLxmFbxYiaORW6flRHzCER1f8ITkfyTvTf3NXcgXDsvtKDuETvbg%2FKiwY9%2FaZd9r8lxzEGMYRcXCemaBPLvhvMac3m0qqWGzGj3kdyDWAjpjwuhF01GsHhPb%2FAf8sbyegheMB16u10oCerCf%2BO96wXI0hYNLX8yMUlqMvwuIixbl1KuQQTKZq4RvPZARymOeTYzeCLvEslaPikIEthJFl0Zxt3yWpz6qQPanTp2Wpq1vbQx21DXzCjqba9BjqkAVVDZgOWvWwy17B3xuCM1bkCoDgNFep2WRpvQ8ZVzLBRqq8oPjokxyhFSd2t%2FfHl3Cak8Rr5CrLAJlZai2ln5GRnkjToWIOdDPSacK4k5kxvtnS9PB8bBq4%2FrfURV1WauB%2Fl1nX9dwgHBzOEo79a73%2BtrLW7Nl0UYhqqqQaUP4btT8kVASDlWVlY34k%2FPLm%2FHAIMZbAwwe4hkXUrjO%2BYRZHzoLJ3&X-Amz-Signature=59d051ddf73491e11e9a07397cb84e8ca55f949a2dd111b6dd84297ee4273539&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY24PV3W%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrS14%2BSJW2Z%2FYKP4cAOPd8BhsLM8Ubs3Pb9iKIxbnOlQIgelOa3bjy%2FNJO%2F8ulhRrsaZcNcXp9y9H6l%2BEbvarmdu4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKZEwlypnUS8T%2Bf2TSrcA2bW0HXxUf7OaY4iLx260LnyoD3J%2BeON0x5lafiBykO9K%2B8nna73k87aQxvp4Z75es0IxA2FA4UJQpNBShVxaUvgkCKW3%2BUzDKp7ajgP2AJPMNdwCFTxL5B%2FNbUAT1igrTnjE6%2BpwggJ5PLDtQuk8LzSykU9RPBpBtdFWbGGZrFXU3vmDtMB7ohZtqB2RVxGcwTnhCYyKKyr0VYvXmav%2B8nTQAxFsXPIEEk6r%2BvhS0dWqHI2dTbw7dPphArpAYd1YpdbF24g70vjvBdI6YHFGjZtx8ZXzQsYDLld77oGFpsfTCR%2Bp1qrKO8yPHSjmd%2FtpFWulZGFpnxOTgSg46trn5alWZrfPlqIECCL6st6pqJ%2Fwg5qsd7tTLTVzf5G9mXA2C%2FLsZdVHUu1AONDpnxowuSCeQ6%2FeOOx0WhFzk6V5LbnLIrdv3zPrm4kM%2B77KOHiVUfMhPD%2BBfVAEouTRAd9vv4NtBVbK8DtUliJVAWwJR2Cow1b98l08JZrmB%2Fbqw9NNIzJqJE76Pqj8YrOOt15qZ8JPqtaPuFxWgQ6IeOQIT9o9%2FRQ5QKfiyCUTxS1Tg1StnI1s4kY8GoctgaVzYPM4Hvxs16rCHwK99sc3e%2BPkbCnz0%2BPRCCfCxPf%2B%2BM2MNCptr0GOqUB9aLWDpm1HU629UsaFGKFgoL%2FK0sBF8oDu8acjYDXR2SoLtuiqq07%2FJSq366SgkpdayJOSnaamJH5KgmeyaY%2FSvQ5K%2Bx8ayx2Kw0oWh7II%2FR3zjoQJElyQVbR46UAr5QrFWdmR2arEyUxoXSGVx0DrcpVIUYpR9u%2B5r7Ay5tQQwXPGyDPMGkioubvcJD84frCSSV4OaeNuEOHcRwmPizomTK3sN5M&X-Amz-Signature=da2374c9355ba693e8479ae6aa1634502011873627aa911d0d85da9df81e9112&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ5D5CMA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7vkHataQbDhl89WSV5Q4eUCPDvktJ0fm16kRWM0pxYQIgDzIHsmyMhrmZmgx8xy4B5MFDdxZ7jK1d8%2FOC5njJWJ8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDQrJ93SIMITZwLL3ircAxN6Mbz9A7QuOrT%2BfhQJHj9oAjXbIrWaITBfhJx40hJvhinbERHVfXJVmKf7h366a%2FWwYLB2E4rOkCceDs3067Xst4MlAnYb9f5PtW%2FBbm9SjLHylButFsUT2WSMj0mkEtiMjWLthSIH9NCPkV%2Fi%2BjnTjwJz3AzqA01%2FW1GTG6k1%2FJJWtvOPFU62nyc%2FdzRYOrol%2BG5Ew0Kcgyb1B4MOfKi9BIGZEUttVinvLS3af1xL509tqlgGvPT1jzCQe8EDUA7d5zXcUFcsOO5xsnO7GlA5W2zJZ0Xmo6wy10aRK5gNfCLNstYBtF7WJtPhUADqQqOPma8%2BGXcqEol8VoF7oyzwAMGpEr4%2BFD7odSM6x0gh7Xr7%2F6%2FL6pgVHPBKtvyDfcBcYFlTLWCEpkUT%2FpOwQSSPhMZGQ1uXRbOeA8jy92EdBe43ppuQm7XpVyXNayVJRslYepKpFv6XWtVYyO%2BVK4%2FdViCF8uPUD58Cp8nexJ9ejKqx4xkoaaTb5Ypb%2BspHabqya4V9QBg%2FPCOXxB%2FiJ3MPoVWE2LT8T5M11uB3id%2FMACL6W0bztgaMCF88oR65hKVwwkjGgw%2BmfvYFbrmHH4jorq7ckQwK0p7a82lc59qSlm4oqOoYCSPHRgRYMOmptr0GOqUBZZ9emyQU8HsGqjOWOT7VDPd60kOnHZopHF44GSDnEdUwbLSnjtK5gT02TeqPYppDcB039ZMZxpMGD9jqkxdJpXltrUJm2SOb99tEGocIVWcvHL%2BbZE33nABB3YGGNRWOB2il2bu0Owiy2vsByPG%2FxYTlMaUZHLZzvrHwqCKtPcpqMbtlUUw0e%2BUTl%2FlprR5cNae1Ve%2FfOCNiCd%2Fqm2xj%2Beev5ot7&X-Amz-Signature=b18d2d281735d01e0b59623728327d6102fbe32ec7d57e6be1c91e1483b910e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGL57U3W%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzp23sPo62gWG9YJh1tOYKihqsE6MAShO147smL%2BjZgIhAKMhqDqTM0YiApUZsR5WXYZJUC7ZVb%2BC0E8v7%2FZRC%2BfEKv8DCBAQABoMNjM3NDIzMTgzODA1Igw0lxYK5F4S0M%2FzkLQq3ANv4sxJTNuTZ8kj%2B3qi%2FIUEQcNnoQB%2FdwANqyC8tisRIFtCjf3p8JNPOPwp7GWSE6Y%2F0x88QQGJ%2BwqCd185Lj%2FCiN0Jw4uZJfBg92Bs8gnfEQqHvdMNFQBlfPEXKxxx8ztNnzR5dP4xY0AyRQbTUHf7LRudSq7G%2F%2BrLPQeyEr7AGEjoxAe5lPvlyHDqEAR1LTUUI42AHH7Q%2Ba7C%2FrIHT%2BzUF3x9YdAQdcdPtgRtTVqUZKd8Z0KVQZF5%2B%2FRW4WwU4cBX76VqrvN6y7vRInR6YLAbLWDEphOeApHZBDWlI3D%2BvhY%2BoQfA73oRvL92iNGLdjmwekyk9qVLf38C8KOG8%2B5vFHJWtoG8i0DnVNsxVjqBK1YpjgPa6Yz1IsRqWS9QPkOW%2F7zma8xLxmFbxYiaORW6flRHzCER1f8ITkfyTvTf3NXcgXDsvtKDuETvbg%2FKiwY9%2FaZd9r8lxzEGMYRcXCemaBPLvhvMac3m0qqWGzGj3kdyDWAjpjwuhF01GsHhPb%2FAf8sbyegheMB16u10oCerCf%2BO96wXI0hYNLX8yMUlqMvwuIixbl1KuQQTKZq4RvPZARymOeTYzeCLvEslaPikIEthJFl0Zxt3yWpz6qQPanTp2Wpq1vbQx21DXzCjqba9BjqkAVVDZgOWvWwy17B3xuCM1bkCoDgNFep2WRpvQ8ZVzLBRqq8oPjokxyhFSd2t%2FfHl3Cak8Rr5CrLAJlZai2ln5GRnkjToWIOdDPSacK4k5kxvtnS9PB8bBq4%2FrfURV1WauB%2Fl1nX9dwgHBzOEo79a73%2BtrLW7Nl0UYhqqqQaUP4btT8kVASDlWVlY34k%2FPLm%2FHAIMZbAwwe4hkXUrjO%2BYRZHzoLJ3&X-Amz-Signature=df7c4e557ab7cec1414f12f91e84fa634e1d843f80a484424421f02b7f368a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
