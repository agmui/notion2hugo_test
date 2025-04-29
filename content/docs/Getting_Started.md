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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6CFTFB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWUW07C9JznOqQFYYhfu4yIRy9FDhhYECsqK9d2zcFsAiAmPPhAGtj16VFpPi6SvUDs2LeVkine6elF3hmLMLJIByqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrltZttF5KIYOKj7zKtwD5JCaLOPF1ACgFQMFkr3v%2FIpoj0TLVc90O0ZBTZCKF4d80QG492Rw%2BC1KDJpK%2FZsefSRC3tw%2F%2BWdZKgTo6n7j5ju9pyhQCJoBrvQZz9JhctiupBPi9iUXOWTRrjY%2FHhx%2FsAqBHSO%2B5YHqhUnF6n7RliMQ5Jgc6s98Pw%2Ff2S3AzMXy9ra4ZtrZWR1anj9zfD4oU7vZNUPhAL72o9QqbnyisbrHwvK%2B1kYqBQCOY5nQ1fzctv72HSS2xJk%2FgVSsG%2FUvrSiPM0kz20tyDXEORZGh3QZQy82e0Zg1qeCqY0e%2FOy24DywhkHq%2F%2FeRMruVbnQGoEdSV6egR5tm4gsb%2BV36CD6L3e5Z7QXxg94GYiUoOLX5p%2FE1VqGq0xT6qD%2Fa15kWyTdZC93ClbrIBqoDlNsgkbeldBAf4kpYDyIRAu8yy0Iu%2BQ7kOX0Z1qYtHJtk86aW%2BkkBfUjgDJJxKF226k8QYPAClWgX6El5NGUn5MeJSXwoxxorvgagSrhOniLq7A4ogOtUnI6qdasA5EVaZkGtf%2FYx%2FGwwhuG4Ms1TPHE5rES4tUK3qBKZPc6CUopiSNZ%2BHtLTFM4v5UlcvKbDkJ78aCZCJYrI%2BHFRbizoRVfqZxjBEXyydBejTcrM5iFgwrr%2FDwAY6pgGddF7Z98tTNUOSjmmqufh6%2FcjEISlJ6Ofywm2Zyhj5FejWYjpaweJ8BXq94XwBYvEGI0jP%2Bq7Xu60RcXWm37%2FAGxt%2BppL5Cq8B1BqKKzQfqAk2PTz5uo%2FXaEuUouehhjRldJUq6dXDyp7AaRgMJMK0vynR3iMAVuedcUWUd23cQx4JY8pf2rLRmH4sIwzijOaktjaKW6WQeIYqdw8Gxths3cKq7wmS&X-Amz-Signature=d48c3d637b0e64f9ec6e2caf08be1ec9c0261a6ab4abde0a3d0c3c75aa917b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6CFTFB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWUW07C9JznOqQFYYhfu4yIRy9FDhhYECsqK9d2zcFsAiAmPPhAGtj16VFpPi6SvUDs2LeVkine6elF3hmLMLJIByqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrltZttF5KIYOKj7zKtwD5JCaLOPF1ACgFQMFkr3v%2FIpoj0TLVc90O0ZBTZCKF4d80QG492Rw%2BC1KDJpK%2FZsefSRC3tw%2F%2BWdZKgTo6n7j5ju9pyhQCJoBrvQZz9JhctiupBPi9iUXOWTRrjY%2FHhx%2FsAqBHSO%2B5YHqhUnF6n7RliMQ5Jgc6s98Pw%2Ff2S3AzMXy9ra4ZtrZWR1anj9zfD4oU7vZNUPhAL72o9QqbnyisbrHwvK%2B1kYqBQCOY5nQ1fzctv72HSS2xJk%2FgVSsG%2FUvrSiPM0kz20tyDXEORZGh3QZQy82e0Zg1qeCqY0e%2FOy24DywhkHq%2F%2FeRMruVbnQGoEdSV6egR5tm4gsb%2BV36CD6L3e5Z7QXxg94GYiUoOLX5p%2FE1VqGq0xT6qD%2Fa15kWyTdZC93ClbrIBqoDlNsgkbeldBAf4kpYDyIRAu8yy0Iu%2BQ7kOX0Z1qYtHJtk86aW%2BkkBfUjgDJJxKF226k8QYPAClWgX6El5NGUn5MeJSXwoxxorvgagSrhOniLq7A4ogOtUnI6qdasA5EVaZkGtf%2FYx%2FGwwhuG4Ms1TPHE5rES4tUK3qBKZPc6CUopiSNZ%2BHtLTFM4v5UlcvKbDkJ78aCZCJYrI%2BHFRbizoRVfqZxjBEXyydBejTcrM5iFgwrr%2FDwAY6pgGddF7Z98tTNUOSjmmqufh6%2FcjEISlJ6Ofywm2Zyhj5FejWYjpaweJ8BXq94XwBYvEGI0jP%2Bq7Xu60RcXWm37%2FAGxt%2BppL5Cq8B1BqKKzQfqAk2PTz5uo%2FXaEuUouehhjRldJUq6dXDyp7AaRgMJMK0vynR3iMAVuedcUWUd23cQx4JY8pf2rLRmH4sIwzijOaktjaKW6WQeIYqdw8Gxths3cKq7wmS&X-Amz-Signature=70b0ef506be7ae5cf0e77f1d8914125ac65a534c2bd1b40ed844a1f674ce7ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T6KSJ6B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLzJGZWYJB35E%2FOFzuJlruhK%2BnD3yge5ZDGX8a4dCT6QIhAKdwL0fiaE97j0hU4IFo%2BXWb83jTmGVv93LCbPtn%2BIsLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwo%2Bda1Qa2%2BedkE%2FSgq3ANyMtrD5uHfcO9IowCPie2FrrYge3epIDJqUU0BzGz2nE1YZRbfClCMMc8A%2B3n8FIT4zPiGzoGqvIll19HQRus98hV6bSxlJOkOpZQoFHjs8M2uvuH%2BR9b9uH%2FewqlEEOtd0Mm%2BXhTyrHkXWLDX%2BPPJzDd%2F69vZuNnOo554B5HY6JI3%2FReavUVCY%2B8Rd3Sj7rbk0N2nedJ3DSh2qDP5QM9vI5s%2BDHtCCHX544kEDEZ2V0UWnXtgV8YsFyGAOCL21U3PbmGokyEZ2Ug4ucq7%2Fi%2FwV7FSbLOPvhirCAK%2FrdyM6BD8wG4HPHOUTCVRO%2FZOwiAyhOz3PPuiJNNuigATQ1mJuTHeMgAQGc9JdwfZZwiIHXVtykxzrF4peK6xlEdFkFSu6I0E5Hlo5AWPVdlscHo5O6Q50Oa%2FW5OIJITcgkumKs%2FuLSaKfJxlfr%2FgaEzJGkCyeZSTK4g3tGf7NGzyjBtpqQxs11fxfA%2FmF1I35u5i9PGP9JAiTxTOVFZ6jGZudnX5RazatN4ITuicg9HZHuvXEZHmFXSBXcZASfa20fVxeMmXZjQSa8QhtfzI2COScMToat2DiNYxMrgsEb3syuu9%2FKIPrX8xdxm1eHhkeasFLPWdym1ttWI0R1aXZDCLwMPABjqkAX2x0IqjZH0NoaA0s3yuTikXjquhsbrn%2BpS5kpq35N%2Fq%2FOK6rscMcbE90rPDBSbIHWPxLxyc4rcMMMlSYxqTyY7MgzReokxq3t6f0BcLIjxNpSpbCOh%2FHfwg%2BN473WSNvDkBgQ%2BSk6PLlbYNholcV4QTgyvNNnnvlV4CK99jDxs5ekD7yV5zHfzJ%2BqtiQLOKh1vOlgzMOdg8k8eqCJ6Whafkx1Af&X-Amz-Signature=9ecb38ea29cd45bdae183aea6078b8fe33a0d79a248f9ad4490d2bf64d81deb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOFRJQFH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkrc5lPsM7BJLDTypx0rS8rrBSfOhhQJP%2FERXEDPeWXgIgTMB%2F59M0XAld0nKNfwjnKTEfNJ6DnF1n%2FImiOw6MGf4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2UcvBOfTIV2jMqfSrcA9JSH72FfX1jkBl8UTANJdfDBK3mHG0sf6NKHnYsB2kPd2XQDnwTpitK9nfFGjxs7BEGcv%2FLFpH5FgEW6HBLL9hrZxb6qGHeUxgFigRqRA3Xzv3JsvjwFL10boBbpjjPQl%2BRiQfFG%2FNE3p5TGltdsHQlbbtoaTXELrAllzlNARyu6JO6%2B3QjfswbF8x8tdpU0XW6u9Ikj2KOVy5OkBsAaIGQRlDeRTJDW3AT%2FPpRHG6hLRl%2FBxaXxEFziJgWUqveL3DQQMXvarIwqi9HVIM6fSPIwOBCyurpsg1bi4zHhfEM%2BqxgS1Ese0OWQr1oM4vH%2FWpHG7wuiuh1gomQNec3ECJMatPu0LdgWk96cVY7BnR94nNAaAwJZL%2FaykKnEwuhpuxvY5KmABKDmzmrritiREo69HgOIavcp5g2h0ncl8yjXYOWiS%2FVY3xrqFldG7NRVJ2vTdM2O8BrP1GDfoXbV71utIHwTYEoo%2FmtqieGrsUmViemR7wWgU4pY7HF4fH5k1eFVgO%2FkiQfUPw4RsJq%2BuUrekxdHeQ5toIE2EZqRILEalEalNSUZLDZSxPA4NI3TQlXN4ywoeI5Rbe9dUAnG7ciKuwFlJR3hIg19HGApH5rXO%2BFIZVVmr6QhicQMIPAw8AGOqUBqIakjO93qoFTdpgu88cmW96MvnifPwVsYJK3QBelf500b3baXK3yiFRE4GHXd2YmHwB8ySjurPHNVYQGQhSXTVHm2K9mldG2TuWg49jXj96x46K3iH7rUVgcF98Bcc%2FC9%2FtfG0XgU4DboxkXhOl2yz6V05eIaYDY8c3C61BBKl7W%2BYQcb1gUmiiUdSLHVIzWI9A7ZOfZ82l6uvdEwkT%2B9gKsgWQ6&X-Amz-Signature=cafa22772e56c7cd7a7add40ab1e840ee3ca0ee075d4fb7c3d60223e06322954&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N6CFTFB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWUW07C9JznOqQFYYhfu4yIRy9FDhhYECsqK9d2zcFsAiAmPPhAGtj16VFpPi6SvUDs2LeVkine6elF3hmLMLJIByqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrltZttF5KIYOKj7zKtwD5JCaLOPF1ACgFQMFkr3v%2FIpoj0TLVc90O0ZBTZCKF4d80QG492Rw%2BC1KDJpK%2FZsefSRC3tw%2F%2BWdZKgTo6n7j5ju9pyhQCJoBrvQZz9JhctiupBPi9iUXOWTRrjY%2FHhx%2FsAqBHSO%2B5YHqhUnF6n7RliMQ5Jgc6s98Pw%2Ff2S3AzMXy9ra4ZtrZWR1anj9zfD4oU7vZNUPhAL72o9QqbnyisbrHwvK%2B1kYqBQCOY5nQ1fzctv72HSS2xJk%2FgVSsG%2FUvrSiPM0kz20tyDXEORZGh3QZQy82e0Zg1qeCqY0e%2FOy24DywhkHq%2F%2FeRMruVbnQGoEdSV6egR5tm4gsb%2BV36CD6L3e5Z7QXxg94GYiUoOLX5p%2FE1VqGq0xT6qD%2Fa15kWyTdZC93ClbrIBqoDlNsgkbeldBAf4kpYDyIRAu8yy0Iu%2BQ7kOX0Z1qYtHJtk86aW%2BkkBfUjgDJJxKF226k8QYPAClWgX6El5NGUn5MeJSXwoxxorvgagSrhOniLq7A4ogOtUnI6qdasA5EVaZkGtf%2FYx%2FGwwhuG4Ms1TPHE5rES4tUK3qBKZPc6CUopiSNZ%2BHtLTFM4v5UlcvKbDkJ78aCZCJYrI%2BHFRbizoRVfqZxjBEXyydBejTcrM5iFgwrr%2FDwAY6pgGddF7Z98tTNUOSjmmqufh6%2FcjEISlJ6Ofywm2Zyhj5FejWYjpaweJ8BXq94XwBYvEGI0jP%2Bq7Xu60RcXWm37%2FAGxt%2BppL5Cq8B1BqKKzQfqAk2PTz5uo%2FXaEuUouehhjRldJUq6dXDyp7AaRgMJMK0vynR3iMAVuedcUWUd23cQx4JY8pf2rLRmH4sIwzijOaktjaKW6WQeIYqdw8Gxths3cKq7wmS&X-Amz-Signature=c480adafbb0714b14df599c9962f75a1db4fe2d83d994c5a62df8ada72947a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
