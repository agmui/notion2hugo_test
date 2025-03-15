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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTGTS6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5wHrllNrYfJ6bB4mYHs3B5oxW97LnjtG6taOmyuiOgIhAPbp2GxX4FvdCURqj8xhs%2BVzIsEucCpMmjESThEUXjjnKv8DCBoQABoMNjM3NDIzMTgzODA1IgwdKZ7Tus0kaMEDXZQq3AP5Y8mL9Qcft8B%2BssyGiSIwPahDCAt%2FJJC23uD10A0pB7vm0%2B1Fz%2FTvb3NGrJKgbKmlGso1gpqV16N9ZQLLJml6Am8X5Y8HjxCu2k2mACFfXhT8Yg%2FJabIKpfvpNEmC5TvVMNKvsc49Ns69ymsqvpkXTch%2B0itQMCisC3YVeB5Z4rdcx24h0FqXa4Ma5RVTQDl%2FTNrUE1QLQqGmva%2B3OWxoxhTc49MYsh7BOYuU3RQ3wS38%2FaAbCzj4SUKZW4vxNaSoWMYJfNwHzx%2BSpI5OMQgrQf31VLY8P4js9pIUW%2B5pqg7jNl20a2h630zF1dWNk87d4xkPaFfFvmpo7TFZ35ceSEEUbkRgqgR5LCIZDE%2FptkIOHR3dNHkudU%2Ba3MD6bPqyVqMdmxH3OqQ%2FqOVubWeuXfSrnyZqo00iJhqZ5MoHmDdDZ3h310U7QKS702mrCyroh91KLV9XhynQGUvgCiyX27LU%2FrNnQRSNLWrErWLRk5Zbut%2FS395E6Xz8mIp4fTqmCRvLiZx6EtiJ5jJjt31Ir1AcUkDctXivf3UKAnYuydMehB24Hd8tD3AgYeEk0neTJOx289yYlEESbaFvz0aQdTmP3fzzIJJwFlLOhj4XPSYvUDOtvydt%2BWg5hTC969a%2BBjqkAdFvp8afwZQY%2F19KG71qiVIeyPu6RPvut1Lhg6KqHH%2BRPEVfjd7nW9s6%2BsW138%2FOiVDyyWFEpzWX%2BuHhcaoIfnsAKPyyo9tINq9f714O%2F3WKfRQS%2BbCE0v28vIfYWCPRo7Xq7xGez3ejrIszgv8OXZMG6%2FvI99x584AwLFVdIHFfSNK%2BBTk5YPvA%2FZoLonegdYya2yLHKXLGbTkfM6Bh3a5YgpfZ&X-Amz-Signature=cbed04e9bef8e3506532782f97a5eb989e3d6d3e2824132a8349287b46c448d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTGTS6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5wHrllNrYfJ6bB4mYHs3B5oxW97LnjtG6taOmyuiOgIhAPbp2GxX4FvdCURqj8xhs%2BVzIsEucCpMmjESThEUXjjnKv8DCBoQABoMNjM3NDIzMTgzODA1IgwdKZ7Tus0kaMEDXZQq3AP5Y8mL9Qcft8B%2BssyGiSIwPahDCAt%2FJJC23uD10A0pB7vm0%2B1Fz%2FTvb3NGrJKgbKmlGso1gpqV16N9ZQLLJml6Am8X5Y8HjxCu2k2mACFfXhT8Yg%2FJabIKpfvpNEmC5TvVMNKvsc49Ns69ymsqvpkXTch%2B0itQMCisC3YVeB5Z4rdcx24h0FqXa4Ma5RVTQDl%2FTNrUE1QLQqGmva%2B3OWxoxhTc49MYsh7BOYuU3RQ3wS38%2FaAbCzj4SUKZW4vxNaSoWMYJfNwHzx%2BSpI5OMQgrQf31VLY8P4js9pIUW%2B5pqg7jNl20a2h630zF1dWNk87d4xkPaFfFvmpo7TFZ35ceSEEUbkRgqgR5LCIZDE%2FptkIOHR3dNHkudU%2Ba3MD6bPqyVqMdmxH3OqQ%2FqOVubWeuXfSrnyZqo00iJhqZ5MoHmDdDZ3h310U7QKS702mrCyroh91KLV9XhynQGUvgCiyX27LU%2FrNnQRSNLWrErWLRk5Zbut%2FS395E6Xz8mIp4fTqmCRvLiZx6EtiJ5jJjt31Ir1AcUkDctXivf3UKAnYuydMehB24Hd8tD3AgYeEk0neTJOx289yYlEESbaFvz0aQdTmP3fzzIJJwFlLOhj4XPSYvUDOtvydt%2BWg5hTC969a%2BBjqkAdFvp8afwZQY%2F19KG71qiVIeyPu6RPvut1Lhg6KqHH%2BRPEVfjd7nW9s6%2BsW138%2FOiVDyyWFEpzWX%2BuHhcaoIfnsAKPyyo9tINq9f714O%2F3WKfRQS%2BbCE0v28vIfYWCPRo7Xq7xGez3ejrIszgv8OXZMG6%2FvI99x584AwLFVdIHFfSNK%2BBTk5YPvA%2FZoLonegdYya2yLHKXLGbTkfM6Bh3a5YgpfZ&X-Amz-Signature=ed666d650ef9c466e7a31bc7c6979ba171722322f3acaa645e667935b6b88aac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BRFNCT4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu4tlIgL%2BF2PzqPIkCjIH1yt3LthpwcegKwemaCpGUrAiBq705g3ryv9E9M7z%2BM8bihob9fVHobd3L3nXZaWWzd3ir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMUrAVhzRbe%2BGd1kdxKtwDlfTVE6ZKibt0QeqOggsnGveOe7boxdXKfu0Sbx%2Bi71ppiKvvz6Rni1rTq6FmNjpSOrIdJ00Os35v3y4XfKaonvNhu74BOll8m2uUkCwBcUCILVPoSrejoz3wmCTPomE0C882y2AOhxAMQBg%2BOzgAmhfX7t0QRLA2iE803TVIhuRC0qnYbjYSoWFwcmA58rlZQACOBPNvEwzsKN2AOzUWbtmHyQNRFp52rgsx98XszfFYk144wB9AyXE4HAVi6u3aPcbir1NyTgWSofYZ1WpHPVmn9qhYlaXrkV90GzNNOiK8nLdeVkjKz%2B73Fe2kQEsjYqOCYSpSTR34nvhKHtUKDhZPFPfWpWcqsyHh%2Btny7K3ZDvChppcn4410%2FJGi9uo1ppV6u3c4FLnxiCkzVbDuW%2B69c3F7SCVltyPMRQ3Qf6UHtlSlrOA08rMaNzCrcjVixwtA%2FP9Ki%2BUKmk%2B9vaSpObJ0UmLEVLQ%2BoTTtGRt0l6Aor987F66rAGzGmfh4SMwBtX3eym36PGH3MNy8BnfXzS4woYxvyq05rXQp9%2FeH3UE0eWeDVvq969nw2IaZ5A5kRnKDL6BSTg1dYwgH1yv7xErBpEg1BaeKfiyQRMZHtNW8opr2V%2FAfu0wNpy0w3evWvgY6pgEyyLLcfEccRbMc63Qv6XNKfQo9ZS5PJUWlkp86DaXhgDEu0bj6fVesflbUMZUTi0MkEx3GVm4IGIteMyW%2FWPePd9HRrrNbp2z1meyG6wYL1yFlFRLHXpvadNNI4ZWNEJVFY33VlxatK9JDHkn5QAexDwFZpA6AsDa1alNgvS5GEgSBw5DKS0Y9HPso6XJW4t6NyafbDZ%2FlEAKFg%2FvJC7Tejr%2FWrFY7&X-Amz-Signature=0c4cc1f74501f2c018d49633e84a304b3d898bed2349cee6924e8b309a72b94c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARXLWDF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxW6yavaTzR3USGKKc0c4MOABPYbtv0q%2BRbwLok6KNJAIhAMGlBf3BsjDZK7j0ouIRrvdOyvkkWcAY0Hk4mkRB2teuKv8DCBoQABoMNjM3NDIzMTgzODA1IgwUiB1%2BCTWY9XsXvwEq3APWUz6AdjpkQ3oMu8d0YITKZzi5222mu0U3jwIBVOSxnDxvqWMQIV0Lpbl9iExDK7kbaXosPZ39RD7myj22ViMCvxlpCm5PoJ79Z6i%2FPG2ezCUdMyDos%2BNTWADH00nixBrxSQPmaoYD0H1LxuKVu5E9uV6MZ0KIuVCYFPa1lT5YPOTZlxaTT%2BYTpk6tkj94ttddiC%2BQzPMbJMkAhfQETzdOWtOra9542X%2BX6c10PGiN%2F7OE0ExvN4OZZCRxaFN1ERkM%2B77%2F%2BicNl%2BnclL0T%2FNbBVIIjc3C6YpqAsAW5C%2BhlMAtLLXlS0AI9G9ftLAmJ4Dawg%2BAup%2B451gl%2F4xkFPBRXWHM9wJEb%2BipBkx0XaoHY17HsTPzX%2Bet1K2UwW4Citunl9doHq%2FwUYOTtIdhfAd4LWsZtQZAkDq83kUpCJtTpSHy9bv3eOfRxD7r5Up%2FoHH9Jvl7IBrwCYaQJ9h5ZQ4ymoOC%2Fo4frvam%2FPbCs3uEC34Scr5S7PG154xPj3A66UpuLIHrLFRdqVyV%2BEDQBr%2Fabesuec6ziPDNeb792BYdZ1RnetFZSJM1UVeK23mOul9Gj%2FDAOHkSnPRO8SP9gDSxbHmg1EY0t7XBxwXjk7K645JdQ8kmRTcPZdRKi%2FjDU69a%2BBjqkAWTKnJQgKAzbdx3IPdI3yX7Z0A0yeeWap196P1BqJHY2iDDGoWU00pW%2FhkwjnI3oqnGYQpOOhYvQH3FaLNxrORMdPGiGgIP%2Fy868I33rYKhT%2FnA1Zzd7XIBSR6TmJXAAwGgq%2BoKnuLlHvLFYKCBhjQ924t%2FwLD4m%2FJL5GXZx6IsoePRaA1w3qHQ%2F1VMB8cgr7%2Fcs0Gj%2BAFiWfpsTZ6z%2BQvqZ3Mfc&X-Amz-Signature=6ed0f89e41b7576ed1fa57e22fc61a4b2dab88af88a4fb6715958dd9db642b94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTGTS6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5wHrllNrYfJ6bB4mYHs3B5oxW97LnjtG6taOmyuiOgIhAPbp2GxX4FvdCURqj8xhs%2BVzIsEucCpMmjESThEUXjjnKv8DCBoQABoMNjM3NDIzMTgzODA1IgwdKZ7Tus0kaMEDXZQq3AP5Y8mL9Qcft8B%2BssyGiSIwPahDCAt%2FJJC23uD10A0pB7vm0%2B1Fz%2FTvb3NGrJKgbKmlGso1gpqV16N9ZQLLJml6Am8X5Y8HjxCu2k2mACFfXhT8Yg%2FJabIKpfvpNEmC5TvVMNKvsc49Ns69ymsqvpkXTch%2B0itQMCisC3YVeB5Z4rdcx24h0FqXa4Ma5RVTQDl%2FTNrUE1QLQqGmva%2B3OWxoxhTc49MYsh7BOYuU3RQ3wS38%2FaAbCzj4SUKZW4vxNaSoWMYJfNwHzx%2BSpI5OMQgrQf31VLY8P4js9pIUW%2B5pqg7jNl20a2h630zF1dWNk87d4xkPaFfFvmpo7TFZ35ceSEEUbkRgqgR5LCIZDE%2FptkIOHR3dNHkudU%2Ba3MD6bPqyVqMdmxH3OqQ%2FqOVubWeuXfSrnyZqo00iJhqZ5MoHmDdDZ3h310U7QKS702mrCyroh91KLV9XhynQGUvgCiyX27LU%2FrNnQRSNLWrErWLRk5Zbut%2FS395E6Xz8mIp4fTqmCRvLiZx6EtiJ5jJjt31Ir1AcUkDctXivf3UKAnYuydMehB24Hd8tD3AgYeEk0neTJOx289yYlEESbaFvz0aQdTmP3fzzIJJwFlLOhj4XPSYvUDOtvydt%2BWg5hTC969a%2BBjqkAdFvp8afwZQY%2F19KG71qiVIeyPu6RPvut1Lhg6KqHH%2BRPEVfjd7nW9s6%2BsW138%2FOiVDyyWFEpzWX%2BuHhcaoIfnsAKPyyo9tINq9f714O%2F3WKfRQS%2BbCE0v28vIfYWCPRo7Xq7xGez3ejrIszgv8OXZMG6%2FvI99x584AwLFVdIHFfSNK%2BBTk5YPvA%2FZoLonegdYya2yLHKXLGbTkfM6Bh3a5YgpfZ&X-Amz-Signature=ad8dcc26b55d5d0fe986d151c9c1bf0931026fffba37c7175d9068650cfde862&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
