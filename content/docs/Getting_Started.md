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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWPGWMV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCVkHG4bN%2By9028HiEjvW4XgVR4Ma8GPg%2Bkze1HjE1BWQIhAPhTIVlGpvvuURyHW5JrDZOE6NA5DTZZ7WcRP%2FqJq9TQKv8DCCsQABoMNjM3NDIzMTgzODA1IgyP%2F03fM2KSARXMa5cq3AOxvv0RCqQGlxiSjnFKsh4qSa5V2Q4vV0X1%2BdPJ5NGeyZdbybUxopO6Rwbdj4TLD1V0PKCj2PQqLWTlZmowK3pqIcQ7DRfYLQfDqTKBtPu3ZStR1%2BbkwaQOBmVHlgqoLPpfTe1MTieAFw43CwfEfPC1Zhwn8jl%2FSskRjqQ6IQ3CODGHiNsXh6yjYbBV9aqV92wZP5JzAcRD%2Bx%2FgmJikKtnyYWEn8cChK%2BywHTDLCA3MIzTCIFSJ8oTkLcPW%2BXR3hhquN1v8Wo%2B9Jh1bGlINMGVubJCepjLhPwVOUwPk9lEWnrRHmUo1nWO9SWIae3TKcC%2FvWqf2aAo%2FqVSysJ%2BtfLZh%2BQQsnX%2B31XJ9BaZ%2BvznBYj20IlbJoZByOSuvPcCytpO35yUDd2db5s95QXTRxfr3n9FRyab0ofeG%2Fk98%2BucWAMvKjSCovuz743y%2FnvfPqTLVPEr%2BG440jp8Aqv%2F%2FvEPCaIgRA7ckC3zLKFVIZQYil8OakoE6M%2BTK9ke7DK9UzN8xOef0jpGfTTQfX81MhKG7nXI6Lf11Epjr51l%2FNvXEDT10nufgbFE2GhDOXHkU9fR1DrN0L%2B9CE5ayQ%2FYmR1%2B%2BkhtQhpjT4v6TNbvbpsPaAmLd9TF6iApeug5t%2BDDAk7XCBjqkAUT2gR9%2FInLEQHm%2BqiEs6Db6ywSdgjutIWKVtsA8%2BxB3zkarZ5bb3yXBm%2BOBxlC%2BhPaErx2Z1em3W7K6e%2B5d9zD3%2Bb5uAwbrKQ2mP4urVo7elyI6MhFihPSKTVkeu6BUnJYHe8hNhi3dRzvln%2F3YbRjG0KNbN49jJzbyuOonP%2F8taDvjvgD%2B%2Fp8sU4clSJLx%2BeJ1Nj6OyooCxKRgs3xBGc54J9FO&X-Amz-Signature=2caf74a31c2082ce3c1b855d93c2756fb7f777cfec103ba9685e2f4cad390be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWPGWMV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCVkHG4bN%2By9028HiEjvW4XgVR4Ma8GPg%2Bkze1HjE1BWQIhAPhTIVlGpvvuURyHW5JrDZOE6NA5DTZZ7WcRP%2FqJq9TQKv8DCCsQABoMNjM3NDIzMTgzODA1IgyP%2F03fM2KSARXMa5cq3AOxvv0RCqQGlxiSjnFKsh4qSa5V2Q4vV0X1%2BdPJ5NGeyZdbybUxopO6Rwbdj4TLD1V0PKCj2PQqLWTlZmowK3pqIcQ7DRfYLQfDqTKBtPu3ZStR1%2BbkwaQOBmVHlgqoLPpfTe1MTieAFw43CwfEfPC1Zhwn8jl%2FSskRjqQ6IQ3CODGHiNsXh6yjYbBV9aqV92wZP5JzAcRD%2Bx%2FgmJikKtnyYWEn8cChK%2BywHTDLCA3MIzTCIFSJ8oTkLcPW%2BXR3hhquN1v8Wo%2B9Jh1bGlINMGVubJCepjLhPwVOUwPk9lEWnrRHmUo1nWO9SWIae3TKcC%2FvWqf2aAo%2FqVSysJ%2BtfLZh%2BQQsnX%2B31XJ9BaZ%2BvznBYj20IlbJoZByOSuvPcCytpO35yUDd2db5s95QXTRxfr3n9FRyab0ofeG%2Fk98%2BucWAMvKjSCovuz743y%2FnvfPqTLVPEr%2BG440jp8Aqv%2F%2FvEPCaIgRA7ckC3zLKFVIZQYil8OakoE6M%2BTK9ke7DK9UzN8xOef0jpGfTTQfX81MhKG7nXI6Lf11Epjr51l%2FNvXEDT10nufgbFE2GhDOXHkU9fR1DrN0L%2B9CE5ayQ%2FYmR1%2B%2BkhtQhpjT4v6TNbvbpsPaAmLd9TF6iApeug5t%2BDDAk7XCBjqkAUT2gR9%2FInLEQHm%2BqiEs6Db6ywSdgjutIWKVtsA8%2BxB3zkarZ5bb3yXBm%2BOBxlC%2BhPaErx2Z1em3W7K6e%2B5d9zD3%2Bb5uAwbrKQ2mP4urVo7elyI6MhFihPSKTVkeu6BUnJYHe8hNhi3dRzvln%2F3YbRjG0KNbN49jJzbyuOonP%2F8taDvjvgD%2B%2Fp8sU4clSJLx%2BeJ1Nj6OyooCxKRgs3xBGc54J9FO&X-Amz-Signature=cd1039bc7e6331fa9b955afa2340bb7e7364b05bda27dd0e298d5382de6c82b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWPGWMV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCVkHG4bN%2By9028HiEjvW4XgVR4Ma8GPg%2Bkze1HjE1BWQIhAPhTIVlGpvvuURyHW5JrDZOE6NA5DTZZ7WcRP%2FqJq9TQKv8DCCsQABoMNjM3NDIzMTgzODA1IgyP%2F03fM2KSARXMa5cq3AOxvv0RCqQGlxiSjnFKsh4qSa5V2Q4vV0X1%2BdPJ5NGeyZdbybUxopO6Rwbdj4TLD1V0PKCj2PQqLWTlZmowK3pqIcQ7DRfYLQfDqTKBtPu3ZStR1%2BbkwaQOBmVHlgqoLPpfTe1MTieAFw43CwfEfPC1Zhwn8jl%2FSskRjqQ6IQ3CODGHiNsXh6yjYbBV9aqV92wZP5JzAcRD%2Bx%2FgmJikKtnyYWEn8cChK%2BywHTDLCA3MIzTCIFSJ8oTkLcPW%2BXR3hhquN1v8Wo%2B9Jh1bGlINMGVubJCepjLhPwVOUwPk9lEWnrRHmUo1nWO9SWIae3TKcC%2FvWqf2aAo%2FqVSysJ%2BtfLZh%2BQQsnX%2B31XJ9BaZ%2BvznBYj20IlbJoZByOSuvPcCytpO35yUDd2db5s95QXTRxfr3n9FRyab0ofeG%2Fk98%2BucWAMvKjSCovuz743y%2FnvfPqTLVPEr%2BG440jp8Aqv%2F%2FvEPCaIgRA7ckC3zLKFVIZQYil8OakoE6M%2BTK9ke7DK9UzN8xOef0jpGfTTQfX81MhKG7nXI6Lf11Epjr51l%2FNvXEDT10nufgbFE2GhDOXHkU9fR1DrN0L%2B9CE5ayQ%2FYmR1%2B%2BkhtQhpjT4v6TNbvbpsPaAmLd9TF6iApeug5t%2BDDAk7XCBjqkAUT2gR9%2FInLEQHm%2BqiEs6Db6ywSdgjutIWKVtsA8%2BxB3zkarZ5bb3yXBm%2BOBxlC%2BhPaErx2Z1em3W7K6e%2B5d9zD3%2Bb5uAwbrKQ2mP4urVo7elyI6MhFihPSKTVkeu6BUnJYHe8hNhi3dRzvln%2F3YbRjG0KNbN49jJzbyuOonP%2F8taDvjvgD%2B%2Fp8sU4clSJLx%2BeJ1Nj6OyooCxKRgs3xBGc54J9FO&X-Amz-Signature=83a1e01df13cf1a524de44abfa49aa9cf8e7ef81dae7d8559793714cef8ea257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2GQJWI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCICskidIoyf7jGsYq%2BVWh2YVQdGlF%2FalOMcpTRoyMtkdCAiEAvo1miNG42AeoqDSMeTCpMwsqfuVAp4WFm9N2M8maXuoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCvo53YeHRb%2FjDmWAircAyOczCSNjLzM6CNEdE%2FoxEpZR0nL%2Bmub1K%2F7K4Oz%2FMLpy1%2BsnNB%2BrInqNET0CROY9CZfuIe%2F4nk5EQPE74uzswFxGCkQP6bkisP46dflweNm%2BjojLAeSHZz%2BhMWVuBzPPnDW9TjdgjoRNv%2FZMCs6hClrh%2BzUK9igDE%2FQxGJYQQtMRyelE9IH%2F5w1nqhmPlWBjmUfdYmzGRs7wqBHqFt%2F6ai1CqyXoNHRA2f1I52FeTj2ilYaj7F%2FtLqPt80thn%2BWE8Z0aoMjRdpbjWNTmx7dfeq5PdGOee5tqeO7ixUwO3Q76LxlsDBJ0DD%2B8zIdVp%2FLlIerhq%2BQArETyok0W5V4afUdkMmZBXoU2RokXZrXnlK05LLTMzOqaVZQb3ZM0H4J9IqkkYxS5PEgfFuxrwS5RmEoA6xV%2F59%2BLVJIqPCC8IdZ5Del12sj1G4kJwJV7msFNuvpIYY1jDqHdJyGyTwZk%2F8IHOf3gZpYcUuwHv3jkrkqj%2BF5RbkuN0EaTA0eaecy0nlUaJBKSa0mFB5b9xlgVvXXLT1%2FuFk%2Bg75UojsRcwyxZEmz5mAJ8wBDsKFSOtDJX3VaS0iJSuH44cV7bf3KhlrGPAI0Qlwt2cmLJ9z4h%2BCZh3DCKGQW2ojn%2FS9sMKaTtcIGOqUBFCbg%2FQTGuJCPtxvS1XAP6PA3m%2FZ7AYPKMN1x0F8VyUo286CPcDMHSsGcPRB%2FHCMmKYZrCPAhNDqwnebu%2B8j3nTRKKrWggNlpUETyfigY2mdsywTq6%2BsHQelESLz7aSQCdreXC4S%2Fd%2B9X3xyxS%2BAktewaFoVdAlCKNh56%2BKsGSXa06gjyYNY0nW49QZjRim9VqlcQLrLXTt2uY17zh90NibnXvbmr&X-Amz-Signature=e925d1f185372523fa383f15f44ad4aae76026dc383ff64da6d1a44ac82e97a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MBOEQRF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCICWTQKVY8v79sanZDtzNlsbMaJwg1ewOMbqyqmiWHlOzAiA%2BZKQwgvlyZylj%2F9x2GXZH6cxWuVpYpDRDktlvE%2B5Q3ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMO6%2F%2Ba%2FuPqvScy97qKtwD1E6xFKVdDrk9RMNDt66kIJir3T15YxoQJd1FU6qQ2Lq4BZ4mW%2FDstryx8bY5huiemKQPMHJHrsY0b%2B7ZopqQdAP2Foz1gsYCpB8eusdjyLHz2fkRP8SKfIYlr%2F4w9xKhW%2FxgygFwXblDOKoo7WAmspyhrn5AzqX0YNl6w0VfLf6SdMenRkioxCpkleJGFRJBOAiZEcPpQr%2BGY7ER6vkAZ%2BUSsJmoA7ElBIz9k7N%2FI%2BOo9vtxMjrt3%2FVs2CPLKIT9pAH8FGX36LgkjWriwnswpEZz5Tw44DIEMGZZXgMN16vn0aMJ%2FoWDKfld2H9j2UWRp3RoRwON4t0nay8%2F2C4TWOWrzrqc5ySwbUL3iTduw1x3iHZRJ8XlH6lKZJ%2BP%2Bf5Q2ADxTFCEUkobzJyzyw8z3xenKLRvndK%2FLrUi6QW2eRGeJMQtSOHkgAr496fOFxeqbyUR3bNxvCvyDfRJqAVtkmGbgVDWoxyZruzHI5dXw7R58UQQsUiKQTcCpe8LmJYcPvPBwjTLjEvnOUJKsl%2F8SjfzRspb8DSnf9n5j%2F7e7BJXAldAbI%2FcQYrsLT%2Fmv5rH0QX7ICgoDw9qTud4GNsOj8rE1Y9CTO6I%2F42%2Fh8reTkRIrpM8F3%2B2hsrpv6Mw35O1wgY6pgH5SsDMIfwErGTQE8g9sm7tGTvopNyIKJx6jqWZPAGokD4oixJfdnEC%2Bi1GsydEDmhh6kwPXnYnJfLVtuC9SE0U9yZ23sfOybeT3%2FmLiF6RiNB%2BASbbeqXTCcONSH2RLvO2%2F%2Fq%2Bd8OPYZsgDD0dBOMxO8TnVvSV%2FFAuX5REnASXsLYgWwb7gZtOXfI28%2FzIYjI2G3db1tkWLQb6gTntcgQ3DGD22B8l&X-Amz-Signature=4a8a14f295bf9a54069f2835f2a9f42953103784256e837699d18c7b8ed088f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWPGWMV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCVkHG4bN%2By9028HiEjvW4XgVR4Ma8GPg%2Bkze1HjE1BWQIhAPhTIVlGpvvuURyHW5JrDZOE6NA5DTZZ7WcRP%2FqJq9TQKv8DCCsQABoMNjM3NDIzMTgzODA1IgyP%2F03fM2KSARXMa5cq3AOxvv0RCqQGlxiSjnFKsh4qSa5V2Q4vV0X1%2BdPJ5NGeyZdbybUxopO6Rwbdj4TLD1V0PKCj2PQqLWTlZmowK3pqIcQ7DRfYLQfDqTKBtPu3ZStR1%2BbkwaQOBmVHlgqoLPpfTe1MTieAFw43CwfEfPC1Zhwn8jl%2FSskRjqQ6IQ3CODGHiNsXh6yjYbBV9aqV92wZP5JzAcRD%2Bx%2FgmJikKtnyYWEn8cChK%2BywHTDLCA3MIzTCIFSJ8oTkLcPW%2BXR3hhquN1v8Wo%2B9Jh1bGlINMGVubJCepjLhPwVOUwPk9lEWnrRHmUo1nWO9SWIae3TKcC%2FvWqf2aAo%2FqVSysJ%2BtfLZh%2BQQsnX%2B31XJ9BaZ%2BvznBYj20IlbJoZByOSuvPcCytpO35yUDd2db5s95QXTRxfr3n9FRyab0ofeG%2Fk98%2BucWAMvKjSCovuz743y%2FnvfPqTLVPEr%2BG440jp8Aqv%2F%2FvEPCaIgRA7ckC3zLKFVIZQYil8OakoE6M%2BTK9ke7DK9UzN8xOef0jpGfTTQfX81MhKG7nXI6Lf11Epjr51l%2FNvXEDT10nufgbFE2GhDOXHkU9fR1DrN0L%2B9CE5ayQ%2FYmR1%2B%2BkhtQhpjT4v6TNbvbpsPaAmLd9TF6iApeug5t%2BDDAk7XCBjqkAUT2gR9%2FInLEQHm%2BqiEs6Db6ywSdgjutIWKVtsA8%2BxB3zkarZ5bb3yXBm%2BOBxlC%2BhPaErx2Z1em3W7K6e%2B5d9zD3%2Bb5uAwbrKQ2mP4urVo7elyI6MhFihPSKTVkeu6BUnJYHe8hNhi3dRzvln%2F3YbRjG0KNbN49jJzbyuOonP%2F8taDvjvgD%2B%2Fp8sU4clSJLx%2BeJ1Nj6OyooCxKRgs3xBGc54J9FO&X-Amz-Signature=618e8f7574a68c404625f4c68f52bfd6ec99718a3e6d9fe9876e806191b49487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
