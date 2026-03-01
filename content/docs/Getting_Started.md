---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6E4VXDM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE600jwe78vv5bbDQQKNH25Nx%2FXlYSF2n0uG%2FUHBbvV4AiEA4QXaNloJ52XRmfpq0%2BT3KMM9YksjIWCn9JCVlAdFNBcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKR0CH57xCkDMU4Y2yrcAxFelNjL2G%2BI4gDVzAVBFZxn1kL0ejQIiWNnzPvkVcV%2BOasAoeHQ0ooxl1N0s7vn0SQYcIDkwFzHdJDH5W40F0VP57KoalmzVYJfZq%2BR8wO0dFsDT%2FqycpIdo7sMDnqQXHEzrPrwtQIHXapACUQG2uzq2zzfMMmvBeBRFf4xoDx0Y6vEIj7EEWIuBXxOWLg911NlAhniyX397Sr5gf2Raomap6wzGDPjRZhGYl3aO7fNrlbhyD%2F%2F7Xwaml8wbmx44IHQ27aJoSGecnKPE6c%2FILQbHP58r8OjUzky%2Fr4igVbPmlZdlVN2EmPCbrj8KOXsGwYAR7Sh3YpzzkbRb4v%2Fy4RYTpF7VbJ5VsEDJeF9zz7E0LIX9IsT7bQDFgw1L2P6pKo0NQSOWDbImmBqiV2eN%2Fnd7uM4V1uiwYE19ZhKPcZk4x3sRFNXgczrBie7ZONnpZELmaze%2Fqt8QWCLahHZ6AJRXL8vNu%2Bz0wMxVUWuUglUJzxfP5eINf6DLN97LC%2BzdwMw4A2YN0Jf1czsrGJU463K6yvL9yYAT9k1q9gDtjw%2F0YgVsLo9KUKbD%2FjKEwBjM8kKT%2F%2FPixuLfvUg6J6RoLgE5Vi6kPPnIWW9iQaF2jQro81CacGMtCMJVTJUMMuujs0GOqUB6yf7HX%2BZ95Kk4c02JB4ru07BGwPPzPfIaWgY2sDuirRC%2FkfdqThpOMQPkTyhZzDIQsT27lGBCN%2BLfwr9XTYphTBUWd2F9oHHsOsZtJYpPOaf7Egeu%2B60jTWRV7oigBJdoaMY0bsgRChc38xQrcaqZ4Jlu2OXHD5PtLfdhpVZCWkgwGseOKUrCJyGcjA3qfyZmQm92wLeHYCxf7JQDdq46u%2FGsuVa&X-Amz-Signature=33571d3e55c0c362218a392462a5a45a343b5df8e2e23ecf0463fe1689267ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6E4VXDM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE600jwe78vv5bbDQQKNH25Nx%2FXlYSF2n0uG%2FUHBbvV4AiEA4QXaNloJ52XRmfpq0%2BT3KMM9YksjIWCn9JCVlAdFNBcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKR0CH57xCkDMU4Y2yrcAxFelNjL2G%2BI4gDVzAVBFZxn1kL0ejQIiWNnzPvkVcV%2BOasAoeHQ0ooxl1N0s7vn0SQYcIDkwFzHdJDH5W40F0VP57KoalmzVYJfZq%2BR8wO0dFsDT%2FqycpIdo7sMDnqQXHEzrPrwtQIHXapACUQG2uzq2zzfMMmvBeBRFf4xoDx0Y6vEIj7EEWIuBXxOWLg911NlAhniyX397Sr5gf2Raomap6wzGDPjRZhGYl3aO7fNrlbhyD%2F%2F7Xwaml8wbmx44IHQ27aJoSGecnKPE6c%2FILQbHP58r8OjUzky%2Fr4igVbPmlZdlVN2EmPCbrj8KOXsGwYAR7Sh3YpzzkbRb4v%2Fy4RYTpF7VbJ5VsEDJeF9zz7E0LIX9IsT7bQDFgw1L2P6pKo0NQSOWDbImmBqiV2eN%2Fnd7uM4V1uiwYE19ZhKPcZk4x3sRFNXgczrBie7ZONnpZELmaze%2Fqt8QWCLahHZ6AJRXL8vNu%2Bz0wMxVUWuUglUJzxfP5eINf6DLN97LC%2BzdwMw4A2YN0Jf1czsrGJU463K6yvL9yYAT9k1q9gDtjw%2F0YgVsLo9KUKbD%2FjKEwBjM8kKT%2F%2FPixuLfvUg6J6RoLgE5Vi6kPPnIWW9iQaF2jQro81CacGMtCMJVTJUMMuujs0GOqUB6yf7HX%2BZ95Kk4c02JB4ru07BGwPPzPfIaWgY2sDuirRC%2FkfdqThpOMQPkTyhZzDIQsT27lGBCN%2BLfwr9XTYphTBUWd2F9oHHsOsZtJYpPOaf7Egeu%2B60jTWRV7oigBJdoaMY0bsgRChc38xQrcaqZ4Jlu2OXHD5PtLfdhpVZCWkgwGseOKUrCJyGcjA3qfyZmQm92wLeHYCxf7JQDdq46u%2FGsuVa&X-Amz-Signature=dddbac5e1fe36924b38dee8b2893d2a0eab17298fa558b600db4634bb0d3a54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6E4VXDM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE600jwe78vv5bbDQQKNH25Nx%2FXlYSF2n0uG%2FUHBbvV4AiEA4QXaNloJ52XRmfpq0%2BT3KMM9YksjIWCn9JCVlAdFNBcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKR0CH57xCkDMU4Y2yrcAxFelNjL2G%2BI4gDVzAVBFZxn1kL0ejQIiWNnzPvkVcV%2BOasAoeHQ0ooxl1N0s7vn0SQYcIDkwFzHdJDH5W40F0VP57KoalmzVYJfZq%2BR8wO0dFsDT%2FqycpIdo7sMDnqQXHEzrPrwtQIHXapACUQG2uzq2zzfMMmvBeBRFf4xoDx0Y6vEIj7EEWIuBXxOWLg911NlAhniyX397Sr5gf2Raomap6wzGDPjRZhGYl3aO7fNrlbhyD%2F%2F7Xwaml8wbmx44IHQ27aJoSGecnKPE6c%2FILQbHP58r8OjUzky%2Fr4igVbPmlZdlVN2EmPCbrj8KOXsGwYAR7Sh3YpzzkbRb4v%2Fy4RYTpF7VbJ5VsEDJeF9zz7E0LIX9IsT7bQDFgw1L2P6pKo0NQSOWDbImmBqiV2eN%2Fnd7uM4V1uiwYE19ZhKPcZk4x3sRFNXgczrBie7ZONnpZELmaze%2Fqt8QWCLahHZ6AJRXL8vNu%2Bz0wMxVUWuUglUJzxfP5eINf6DLN97LC%2BzdwMw4A2YN0Jf1czsrGJU463K6yvL9yYAT9k1q9gDtjw%2F0YgVsLo9KUKbD%2FjKEwBjM8kKT%2F%2FPixuLfvUg6J6RoLgE5Vi6kPPnIWW9iQaF2jQro81CacGMtCMJVTJUMMuujs0GOqUB6yf7HX%2BZ95Kk4c02JB4ru07BGwPPzPfIaWgY2sDuirRC%2FkfdqThpOMQPkTyhZzDIQsT27lGBCN%2BLfwr9XTYphTBUWd2F9oHHsOsZtJYpPOaf7Egeu%2B60jTWRV7oigBJdoaMY0bsgRChc38xQrcaqZ4Jlu2OXHD5PtLfdhpVZCWkgwGseOKUrCJyGcjA3qfyZmQm92wLeHYCxf7JQDdq46u%2FGsuVa&X-Amz-Signature=ca4e4e9e3bf0874332fa736cd6b11bce92fa31d3a745636b7903433b7499e611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XXCHT2%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDZAc2llOcFOVVXg9jXqQmqkG4rMEgYy0AUHCF1EGPwwIhAPAumsI%2FIAtjCw7fiy%2BEpVAaawH7Q5Qz89aZb7t1GFtgKv8DCGMQABoMNjM3NDIzMTgzODA1Igy5wV95nAyRVL6vYbcq3AOoiFD8Dspg8liqzte5rlqo2YUTNUWlkEWgU%2BCtae2vpzaHr%2FBBUJi%2FD5JUX8G%2FXvdnXLYU%2Fd5Kdxe4IcNIg2NQW30SKa7wNGronr4j2Uy4JEMrFu4ACWOOyBTLusU8Gkz3OEYsMvabrclAH%2FjiRzOQjb96PhtjMVTH4ixveSrN0o1pyhi0BRdRINa5hRumJoNYMbidgkoQuwbW6KaYAwX0pi8KF8yBHMoKi3XIXGL4cy4Zruj1%2Bx3ERKGA%2BdLpk9zdotEhUpQZ6YHQZQQVfvm8d9cqZz7iHM0vyjMXovtAJhuKLvKxvHhMrtBdubrYmyXM9P55weNWQMdnLKovOHE9omFJZglmkC9SJnSDHL%2BSX56Kjtg19brQpoucXK6U7m00lOoNCC3185Vma95eVAQwj7Yn6jsUcpTa0b0kN%2FZ5BARNlm6TOw0otlD8RfdxEc8x%2FMkb0TxBZ9F7e3QrELiXpGQoaUxTrYz7jwSLkegMs8i%2FberNIip8cmZ2zZoCDcm7B1poU4WHL9WQupDKsCUCxeg8U5ZW9CcifBD9DmxLR74iTcEl%2FWY9EmeIDqKjSnIDxzXEOZamvRM0wfm9HszmO4VLHJggCFHdpwvvTi3seHPIld40Iss1jh9B1DCsro7NBjqkAc2PZ3QpzliyWnLma%2F74yjXrryrmAWVvTHoZsBw7uU7iVQqwS4R7vcfWpcvgHA8AZYw0uvQYPASFIGnHx0g4qBX1pfqQfIShBjButeaM7N3YE5Zw%2FiB9NSrxrRd6mGd%2FzcJNTvvRpdZ%2FGtwaMaqHdtMi4ZK6n1%2F3RKY%2FpCAjbfApLLyYY4XzXEuF5yTdNRl4L0NgmIkscjDISl7wIoMmjufVFjBh&X-Amz-Signature=afceb8996941baa7d30fe8c303a93627c7edcab99070b4fd558df5eec5b9d990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTBAZFV%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ3ekhWRsdKbguqPoFbJMCtkvjHK8U0e3N3Fw%2F0I5GdAiEAm5oQRFZYlqLQVfSayjZn8VCIEWVFnePMumIGQciwEDEq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKq1U52%2FbuS7WGoHHyrcA%2B0KQa5Zbl9m9imeXh1%2BLF44ghkqgaDSunCllWOh0YA2VecDpPdOifDwx706hnLBSMylj7cRiZu98BnmoXV7RVkv1SmYrJmSIJ2yXZnTsnSHrtCWwAH%2BD6GOYcktRbzwVOsYNLnqK7GCBgnl%2BZo7vILhmwj2GXZnNq9N1TFNhosZJSFHBQH5NNgGIPHHJHGaUAv6sUKHca6e96QeGxz1OUeDSK7ewjTTv5oLTRuFpw4jOhlVvgBORP2L4vZfbH1aFmCBWHRNqLa757jPCwKuPQgV9zk0EXjg7NILf%2FuLiXRRGZ1%2Biu7PY3ZAgy%2BfAkDvEyg4hhtdg3nBwrqytLXQtdVuu2auyheuU2kgxUibEKK4w2TskfJDklthTiI3qmfCPSd0nWBjO2L23WsrV141cqHRdwEvJoIBwGo8iMt7s78J12E3P%2F3BVu8LaQ7l1rKKRI3qZTR4Yu8FFWdLEWJ7I6KY6z8NDvjmNtY8yEAu6yLJeGP0oAkFsKMyOZwdBjGr87dwwJSgVFM9Nih85ElnMkR%2BMJupSnE9B%2FolZJfRd28WoZ%2F17huDCnB8edHe9wI5JSZ47Oxwd%2FVX8sPgeR4CIu%2BHq1HnFzKCMK11izrEzKIYNQgkaDZ4pMqiDMXDMJKujs0GOqUB3tXWBqL1SZDJa7u6mc2mcokth4HzTwh0f9yT0WVaFlbbJCeeGHGfibDtqCaIUaD%2BWN1FpTJvwpjRbqthyy%2FvjMT%2BuiLpdXrODgFMxFgKQl1RRgJDtD4zdK2fSC26BQaTijCGvNQSS2kmQ5IYS3QVAgTaQ%2FxJ2Da8XUGCGdcBVe3nDQbsPppilU%2FsAxDgk6GGv2Pd%2BKcPJbCFd98XcC804LtCkoJC&X-Amz-Signature=758c09cb8d40155bd6235c6ef864485e3de520c0bcc5ea41070c7fe9d54adf7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6E4VXDM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE600jwe78vv5bbDQQKNH25Nx%2FXlYSF2n0uG%2FUHBbvV4AiEA4QXaNloJ52XRmfpq0%2BT3KMM9YksjIWCn9JCVlAdFNBcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDKR0CH57xCkDMU4Y2yrcAxFelNjL2G%2BI4gDVzAVBFZxn1kL0ejQIiWNnzPvkVcV%2BOasAoeHQ0ooxl1N0s7vn0SQYcIDkwFzHdJDH5W40F0VP57KoalmzVYJfZq%2BR8wO0dFsDT%2FqycpIdo7sMDnqQXHEzrPrwtQIHXapACUQG2uzq2zzfMMmvBeBRFf4xoDx0Y6vEIj7EEWIuBXxOWLg911NlAhniyX397Sr5gf2Raomap6wzGDPjRZhGYl3aO7fNrlbhyD%2F%2F7Xwaml8wbmx44IHQ27aJoSGecnKPE6c%2FILQbHP58r8OjUzky%2Fr4igVbPmlZdlVN2EmPCbrj8KOXsGwYAR7Sh3YpzzkbRb4v%2Fy4RYTpF7VbJ5VsEDJeF9zz7E0LIX9IsT7bQDFgw1L2P6pKo0NQSOWDbImmBqiV2eN%2Fnd7uM4V1uiwYE19ZhKPcZk4x3sRFNXgczrBie7ZONnpZELmaze%2Fqt8QWCLahHZ6AJRXL8vNu%2Bz0wMxVUWuUglUJzxfP5eINf6DLN97LC%2BzdwMw4A2YN0Jf1czsrGJU463K6yvL9yYAT9k1q9gDtjw%2F0YgVsLo9KUKbD%2FjKEwBjM8kKT%2F%2FPixuLfvUg6J6RoLgE5Vi6kPPnIWW9iQaF2jQro81CacGMtCMJVTJUMMuujs0GOqUB6yf7HX%2BZ95Kk4c02JB4ru07BGwPPzPfIaWgY2sDuirRC%2FkfdqThpOMQPkTyhZzDIQsT27lGBCN%2BLfwr9XTYphTBUWd2F9oHHsOsZtJYpPOaf7Egeu%2B60jTWRV7oigBJdoaMY0bsgRChc38xQrcaqZ4Jlu2OXHD5PtLfdhpVZCWkgwGseOKUrCJyGcjA3qfyZmQm92wLeHYCxf7JQDdq46u%2FGsuVa&X-Amz-Signature=aa12c29a3324ff9146bef1125e95b584cc0f83e305a575c3428c468ef7d474ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
