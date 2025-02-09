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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SYGAZA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWn4f2fE7I54vM4VGMYOw8I3anIrVYdEaY%2BJ3XS2pVMAIgYaGXdzDKFRq8NLec3JRJ%2Bued3vMPd4PGUxXjZhq6F5MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5knHRxgCpA%2FEb%2F1ircA3tnEq6WD56htKunq01ZYFDPZR%2Fmi0vI0Hr6%2F1Jw0IoCSfOrwWwUUOF84%2BOMUcmwHIr7LNEkUzvYnBVsEG5c0ZZWDjqFOxoopR4eAf4x7qsZ%2Btg7CiEMsYOipincyoTJsJEKVv2S26HzdkqGzX0lDODnZ060w6ydFGUDVqozcQox62XcYjkpKJmDfvG8TiwnSr0Ks2u7gWDdE2XZT9VW7kE5dJjP2lQ%2BLUZg6juDUHpY57Jo%2BTTnehM6XNKKdlWor0vJuiYQ8CSUy5Lie%2BM%2F9LtPrwQI2uE%2B9I9MWjQK0sCKn5t4aVeZ5WJlXTOyEg4ZbFpmtrckU5a%2B2zRQuGZYi10KLImoNt6DZidcDmwIusH9e2tJVZ7rIwjFazOPzkR6GO%2BT%2B0hylxo95C%2BRpKMFWCTSwnrA06qKvAb%2B8QYYcLQo9uS%2FAHONzPGiD7cyQ51ttlyf3iATL%2F6IV%2BT7hErGBfggZsj0UalMoO1ji29%2FAVlitc6Ja%2F1MDJGiLqazVp8XoVa%2FoU37NsfxEetphuJfXSSDG7Y89YgYiv8gTe50re1YvOpGeDhy5PTryK776ZZiS0u0RoQruQC%2Bb%2BTN8QCUdKzUjdbRTophOj8W8PKeuDBjT84E9F6GW%2BNC10m3MOq%2BoL0GOqUBJ%2BVKasMQAoWGSCSvX111BV1ey3EaRfgMIfSRZ1KKdoEwNQeT2ORsLLm%2FFlYLarfgGVsqw8PxdDUy58T7Ai2bfeLuQcqD3P6pOzr8vBLHMj0J815J5az%2FHZtwBX1iGpwFujSL6YUdS2PomydYLtRIk7fH3djrsxm7%2Fk2TJbS%2FXN4jwhFzQjxH23GZpcjM%2B5c04lFBR65oDlYj0jBSJ17lWaZqHUdj&X-Amz-Signature=f8ec9f53aafd3df0eaf9609d0189004b5226d02c71402c99f7215962d948230e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SYGAZA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWn4f2fE7I54vM4VGMYOw8I3anIrVYdEaY%2BJ3XS2pVMAIgYaGXdzDKFRq8NLec3JRJ%2Bued3vMPd4PGUxXjZhq6F5MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5knHRxgCpA%2FEb%2F1ircA3tnEq6WD56htKunq01ZYFDPZR%2Fmi0vI0Hr6%2F1Jw0IoCSfOrwWwUUOF84%2BOMUcmwHIr7LNEkUzvYnBVsEG5c0ZZWDjqFOxoopR4eAf4x7qsZ%2Btg7CiEMsYOipincyoTJsJEKVv2S26HzdkqGzX0lDODnZ060w6ydFGUDVqozcQox62XcYjkpKJmDfvG8TiwnSr0Ks2u7gWDdE2XZT9VW7kE5dJjP2lQ%2BLUZg6juDUHpY57Jo%2BTTnehM6XNKKdlWor0vJuiYQ8CSUy5Lie%2BM%2F9LtPrwQI2uE%2B9I9MWjQK0sCKn5t4aVeZ5WJlXTOyEg4ZbFpmtrckU5a%2B2zRQuGZYi10KLImoNt6DZidcDmwIusH9e2tJVZ7rIwjFazOPzkR6GO%2BT%2B0hylxo95C%2BRpKMFWCTSwnrA06qKvAb%2B8QYYcLQo9uS%2FAHONzPGiD7cyQ51ttlyf3iATL%2F6IV%2BT7hErGBfggZsj0UalMoO1ji29%2FAVlitc6Ja%2F1MDJGiLqazVp8XoVa%2FoU37NsfxEetphuJfXSSDG7Y89YgYiv8gTe50re1YvOpGeDhy5PTryK776ZZiS0u0RoQruQC%2Bb%2BTN8QCUdKzUjdbRTophOj8W8PKeuDBjT84E9F6GW%2BNC10m3MOq%2BoL0GOqUBJ%2BVKasMQAoWGSCSvX111BV1ey3EaRfgMIfSRZ1KKdoEwNQeT2ORsLLm%2FFlYLarfgGVsqw8PxdDUy58T7Ai2bfeLuQcqD3P6pOzr8vBLHMj0J815J5az%2FHZtwBX1iGpwFujSL6YUdS2PomydYLtRIk7fH3djrsxm7%2Fk2TJbS%2FXN4jwhFzQjxH23GZpcjM%2B5c04lFBR65oDlYj0jBSJ17lWaZqHUdj&X-Amz-Signature=6d32bc7b3923c22d81ad9e81555c0579e4d6f0eadb4720c4348e550fc380552b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAO4D4RY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN%2BQjpmpbpmmIJWRyzA8MRm5Kq42rqdcW2JR2OCek9KgIhAJPz5%2BajVrcIGL2dhbQlYncOmaY4QcgiogeRxvv%2BABCUKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTLhd0yaCcSGQGj20q3AN%2BZ55L9EQC%2FCCxYWth07VjY7VEdlm7kADYI49v4g5vyokUkhI1CgP6WMmzyBmWipZ9%2BpSw%2FR%2BnxIflezOVS8JcmQJV7Ek%2FEEMYDxRcA%2BixYVfdvjy9cH4ffAcCG9FHSYFZx%2BDBRzr5oltKkBOe4cpsFcOFXxND9O4oZy5MXz3ZYhJksOPn5lAtAH5RS2jztATzJBhIAmVe4Gd8wPjdtfub2RvY650V1LnkqMCsnts9wyxuyIp3ljME%2FWn2VK8JwJuHyVaCKOLW6z3itOAXpysQds4uiXrU2TteKRVCkR4ePknQTOm%2FVf7FZFDMqxfy2ypYmbWF%2FzBMf0OZwKxsqzF7qaoubVceAKpLJYL7qjvKcIjxZBHko0Ir2KRNGeSf6Mxvr3ToQN9Micma4mJgWL1gXeG%2B8x2yIK8rgDG7vCb46LgR27Bduvnl6TwWNCAbcxbU7EiNzNFFwsA1M29S5UAPYHBHxLBnje0EVU5E2fCM8510aLDJerpHSIQz2PqqeMGVQ1Vd%2BQvMPggjVHNZgB6VKo63XXzWvx6Jg22QLrv59CrXrPSF%2Bxxnfzb6gkCNpIpExfzF2cLjJzW4PTL8Nszl5lbYOiIlnBwuQPysLI%2Fbc0BrzDpSrYi%2F4bX3XjDEvqC9BjqkASJP00ErC1%2Fsw%2FaBlkidaQUX%2B9vxZeN8elT4dXhYlDGtXEFXARytgoYBkfWVMTDpnyf91Pij4QynlWsinloz0hib5rNX5gD%2FpReuXmys3fs%2FteQYCv6Zg49n85PTRNqRPI7oOG1bk6kFkQfPvXIQR6ep5bruP098ST737fVoNi2pEaDAReeCFmX5tHMnK83IuqwKu6PAka32bAtUCnXn7jAd2ajY&X-Amz-Signature=2368a0d9f660f0c59caa647befdc68bc34f27312c93fccb4212cda7bce7180ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AOJFTEF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHm%2BpdVo9IMS%2FmIqppbU3diy0maK7ESETsGUGSEpAzKCAiEApHZquRVMyXG5sKRcTJzshSY7YJIZrsfG8GzF46GnhAoqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNP8RlekudKw9qFUXCrcA6zSJHiDnJPKS1NbpJpCfj3qkxbJLOb%2FxlbrGb0sRjqcHa1H5wLKHBdE9LYO92SfVCY8X5BwK%2FKOcF0a07KVI7hA0Mi3kS8B1LSYMnDapxialmV3eFOJ7JCyIn%2BFmE1gPo7xdo6Cs0zxaqtVy206zTRnYZRsEIcIrJ0i%2F4rSgwwsGn7DNOednXHYejh4QKni%2FzrtLqrA54k%2BW1Yg%2F31YHGUykIBYCZL8jWgKFQ%2FP6P8ZVAu27PSI5kWmIxQTIrFR7efkWSVGI8G0mbx5tKZSYXK3LnSSsrfukeNOWHouWGe79YvKyr3R3xWu7Uats1CzYoTruwuMoEGwhKdjJLyjGTN8CpSiJj5IIgF%2B9bvpfAAigYw8tOW3qOSE5PIVolh6unWI%2F4xQJWarhnilfFeMKXCyYlVQ%2FuGP1sbXi7R3y4Zy0vv8CR0IczWKMSvcXGTa2qSKAha5hHLHVT1gyZKdKCKjnjwSjWp%2BnT9Q5spCLf95HD6qmpz2qZI%2F33DnjCS3TLL5836pOnoU9N8w2bOr0jrrhPObBIxSjLNdLzX9J%2BtJMBi2C5tb%2FqxPP5Po10CzIhZd58kK4mRAkaVN7a84G8VoPl7h1Oy0SgjFY2k8Vw0jvTwiX40FnmjugTeRMJm%2FoL0GOqUB2%2F4FT8KNauoFP%2FNZRzVNjLBVwNdTy580piTwo2jS2GN6s1L13Z27mYEkPyOQFhoEM0820SH3nxHbM1RD7asalg09VhBa6lCkF464gJ7HrNIzCPfjILNTrn9Cfp3pjikO%2BB93j3uS2EBRVxkD3PaWLiKwz1q999%2FGBIjYKFc3EXnYvASpwYBeGNEr7RdGz8LmZjnbByZbHvVkaOUvm5krCOeTxYqG&X-Amz-Signature=6ba64bbb8d7dcbb9560a0f5b7eca00dae09b31941a76c7acd0c7918a170c3241&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SYGAZA%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWn4f2fE7I54vM4VGMYOw8I3anIrVYdEaY%2BJ3XS2pVMAIgYaGXdzDKFRq8NLec3JRJ%2Bued3vMPd4PGUxXjZhq6F5MqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5knHRxgCpA%2FEb%2F1ircA3tnEq6WD56htKunq01ZYFDPZR%2Fmi0vI0Hr6%2F1Jw0IoCSfOrwWwUUOF84%2BOMUcmwHIr7LNEkUzvYnBVsEG5c0ZZWDjqFOxoopR4eAf4x7qsZ%2Btg7CiEMsYOipincyoTJsJEKVv2S26HzdkqGzX0lDODnZ060w6ydFGUDVqozcQox62XcYjkpKJmDfvG8TiwnSr0Ks2u7gWDdE2XZT9VW7kE5dJjP2lQ%2BLUZg6juDUHpY57Jo%2BTTnehM6XNKKdlWor0vJuiYQ8CSUy5Lie%2BM%2F9LtPrwQI2uE%2B9I9MWjQK0sCKn5t4aVeZ5WJlXTOyEg4ZbFpmtrckU5a%2B2zRQuGZYi10KLImoNt6DZidcDmwIusH9e2tJVZ7rIwjFazOPzkR6GO%2BT%2B0hylxo95C%2BRpKMFWCTSwnrA06qKvAb%2B8QYYcLQo9uS%2FAHONzPGiD7cyQ51ttlyf3iATL%2F6IV%2BT7hErGBfggZsj0UalMoO1ji29%2FAVlitc6Ja%2F1MDJGiLqazVp8XoVa%2FoU37NsfxEetphuJfXSSDG7Y89YgYiv8gTe50re1YvOpGeDhy5PTryK776ZZiS0u0RoQruQC%2Bb%2BTN8QCUdKzUjdbRTophOj8W8PKeuDBjT84E9F6GW%2BNC10m3MOq%2BoL0GOqUBJ%2BVKasMQAoWGSCSvX111BV1ey3EaRfgMIfSRZ1KKdoEwNQeT2ORsLLm%2FFlYLarfgGVsqw8PxdDUy58T7Ai2bfeLuQcqD3P6pOzr8vBLHMj0J815J5az%2FHZtwBX1iGpwFujSL6YUdS2PomydYLtRIk7fH3djrsxm7%2Fk2TJbS%2FXN4jwhFzQjxH23GZpcjM%2B5c04lFBR65oDlYj0jBSJ17lWaZqHUdj&X-Amz-Signature=0714b0ef3945fb86b37377e5c68773fc1ca53f5e07616634bd9c3b82bcf129e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
