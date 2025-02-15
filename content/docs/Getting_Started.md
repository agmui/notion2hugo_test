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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTZLEFV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDOFMNz7q1wRndT2HNWc61mj2v3jMxMsxLf%2BoIc5BIISgIhANcOgP2PtHCsVLCrjkyrjSQO27Qv%2Be2Df8wQY4oiIfjuKv8DCEEQABoMNjM3NDIzMTgzODA1IgwxaO8Nxa9dmvyYGvIq3ANz28%2BgOpk0w%2B3Y4yWzO8wr6ofkEO65Jfi0dCpJqxx3%2BarwHzl3XKsbLXeEUh59gdoMEH8d09hG4O53EwMg5VZjzBUSlSmpRQzG8Vi8UpU3Q%2BW84BJxjXUqMfu9zy05DlCC%2BcKBA7CkuTLSlXD75fzecV%2F66lPyyF8UMuVSm%2FmKn1sB3efPSBOpFcWSvbXOBLwpNsQVg8OdK7iJPZFYuEVZv5sDuTa4MOHm4vzj0VYkDpApcpuZhOxR1DZ0TXlj5wXj1JPWkCS6UYu48AuXRAfOJr9AaxI81hSwY1l4uan3ZffmPMKz2xZM3BWQ4Jn7d1iOp0xs%2Bt3dIFtJ8LWwnQbrwB1hp%2FbH3u6utSkaTOJcORm58wn%2FE2jsVeP4TmRqgVZ3BSr%2BhNqL7G0OiePmgrxhY6392xHaGKx8WSy9tUsYt4ArYrcNxAV9DzGcVwM7bH1nSpkIEnrFRJKbAxgSK9JYbCoGWynjRcO%2FIEcgkbAoiAFTrMtUApIwBOy6K8ReYsbDan12%2B7ke0dKENgaNHeH%2FTfhIeFfBJXQeJ2%2FOmreQIFe3DZ3WhM61twkZXGQUK0P1fg864qp9MQkZKh5Oj%2B3DO2vmKvVBDS3e3wgoV4yMwSjPS80bhFmg6KufgTC3hMG9BjqkAXvjEIKAIUDIKnDppVpRGvStD9oIy02S4I7ndpQ6B%2FlYDAwr3fZ4Lap9WVI3XGv9u3kjHDovSji%2BrSXr7gfC%2B0QiebqaP2Wcoyo0U1V4CWuioF6yvoppkCWaclEqF8%2F46VjZ8dO%2FuwtQktQktJFtm3eq%2FFNIlniRsy4Y3CECOaIR7ewXtqfCIUcH6pe9o4dFZiP8d7bik22Z3VIdVcN3MQeIXCtC&X-Amz-Signature=21e481f3c0b99c6bce7c83cbd942d5510224df6ff8a49c498d9aff3e7ac4947f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTZLEFV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDOFMNz7q1wRndT2HNWc61mj2v3jMxMsxLf%2BoIc5BIISgIhANcOgP2PtHCsVLCrjkyrjSQO27Qv%2Be2Df8wQY4oiIfjuKv8DCEEQABoMNjM3NDIzMTgzODA1IgwxaO8Nxa9dmvyYGvIq3ANz28%2BgOpk0w%2B3Y4yWzO8wr6ofkEO65Jfi0dCpJqxx3%2BarwHzl3XKsbLXeEUh59gdoMEH8d09hG4O53EwMg5VZjzBUSlSmpRQzG8Vi8UpU3Q%2BW84BJxjXUqMfu9zy05DlCC%2BcKBA7CkuTLSlXD75fzecV%2F66lPyyF8UMuVSm%2FmKn1sB3efPSBOpFcWSvbXOBLwpNsQVg8OdK7iJPZFYuEVZv5sDuTa4MOHm4vzj0VYkDpApcpuZhOxR1DZ0TXlj5wXj1JPWkCS6UYu48AuXRAfOJr9AaxI81hSwY1l4uan3ZffmPMKz2xZM3BWQ4Jn7d1iOp0xs%2Bt3dIFtJ8LWwnQbrwB1hp%2FbH3u6utSkaTOJcORm58wn%2FE2jsVeP4TmRqgVZ3BSr%2BhNqL7G0OiePmgrxhY6392xHaGKx8WSy9tUsYt4ArYrcNxAV9DzGcVwM7bH1nSpkIEnrFRJKbAxgSK9JYbCoGWynjRcO%2FIEcgkbAoiAFTrMtUApIwBOy6K8ReYsbDan12%2B7ke0dKENgaNHeH%2FTfhIeFfBJXQeJ2%2FOmreQIFe3DZ3WhM61twkZXGQUK0P1fg864qp9MQkZKh5Oj%2B3DO2vmKvVBDS3e3wgoV4yMwSjPS80bhFmg6KufgTC3hMG9BjqkAXvjEIKAIUDIKnDppVpRGvStD9oIy02S4I7ndpQ6B%2FlYDAwr3fZ4Lap9WVI3XGv9u3kjHDovSji%2BrSXr7gfC%2B0QiebqaP2Wcoyo0U1V4CWuioF6yvoppkCWaclEqF8%2F46VjZ8dO%2FuwtQktQktJFtm3eq%2FFNIlniRsy4Y3CECOaIR7ewXtqfCIUcH6pe9o4dFZiP8d7bik22Z3VIdVcN3MQeIXCtC&X-Amz-Signature=1aedaeac45b3e0b1079ed2f92bdbf706cc5eba96178e581c2e95d9f4cdfe9be1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KNQGURH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIArSJDY5QjHjt%2FQMmfSOIeOowTk%2BU0vulhmZ2iCTDaINAiEAmGGPoNIyUHyiYqUS%2FGb1wgnph5hl0dLvY0gVIMTMbQUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMFkJl2ztCbR95CnJCrcA50SaKVX1hacVSwebsIb9z3r4yekMdwne8VqEyiIlXFOL3KNiGneqQDuWcHqZSKJGPBk5gTb0slPrlEtMfDYnQwASij0Z3YCxe%2Bv2NdNRIP%2FWH92RSk54r6llCoYz0L7Bmb9bIQK7GXiPxcr7lmPCW67gLez985TmkfVYnisY03ncEdw89N%2BcSF1GSrMNxVxr5gPiBuTydFV0oJ3C3OouZe9oKzWpeZUvdSzfb349PEUPdBTDCGSVmF9xrz%2BM%2FOwltB6UPgjjNu%2FntRYP%2BV1Q9naqGi%2Flp3wX9ACW3Kc%2BqsVawbw41PdCVOzHVzEjXROZsqfO%2BwHomD8jOpC3L7T5FaArJZSghcwkIBO6pQeKSp0Rptk9%2B2GzIe%2BKPVL2kAXQbd826HRJ4y0sK2NL2Gpd4RYqXRv%2FbIvLjSNTMPNrJ0DGVHeZb5HFYD7jjRgpR1fjvHouO2O85zlcIebKeMfXsk36ax1RhnUpNbLMh6h1MY%2B5LIFg51i4cQOOQFwzggz%2Bunu0Gc3sf6TsVNVxfj%2B0MWEZWiXWhKhYZzlqViESXP2qZls0rqTBqVjCnVXkAzFyl0aOaxZD%2FC6FcAEZt1c2PLuXmwZa2ZyTgBaraA7VQSs6AOelY7oaIxIZBspMPyEwb0GOqUBPDj9bWcIBdrk3FaAB1eHzw4rCoU6ZKNDaBnHB6p4319cbHPF7A%2BayA5O99%2BKgxQlz2KJcuqrD3DfmcKNgPhITUjpIPk%2FmJAa%2B5zL%2F2F65gthRhe8PSmIXDc3vI95W9x0lycFKf9Ru79Cj%2B%2Bhosal%2BXtZJc3gFawOy39KHLix8zaLyWmK9uT%2F0bCUVNrW08hTcsJeesT6HZanFm%2Bn1BVzPULzmB4t&X-Amz-Signature=5ace5fd435dff647b644803fc3fa33fdaeda15a7e1f9cc17ab5f94633d472192&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEV3XOR6%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCID%2BRI9kcTfJGVt3MFp6NjUsWPNZ6q3v9XpMISqrDA7pWAiEAzQtJnhydgZEn4%2F9HUSyWCplt9om0RrLk%2BpPO0brojfMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDAWo4kVrwTL7kr9RCrcA2hqeEFvmjafpGMQ09G3XGxR%2F%2BCDZxyfnxtdTI9RmL9nC%2BVpTvMFQ2jLoHKXs2JMWe8tMuEJ8MYqIeq69B8eaHDB3YcSTul4CKenkz6gRYZMDqjYyPqF42Xs6wN4Bo6B29nV3lQesDojPo71nGSvtH6zVolkGGVUdpgPQFVSUW%2B1w9ws5LAxH1zWSG9VYXmTXdwn8kHBmKLYcRk2u9r13O5QrJD9eoMJB9gxuEc6cNfUtOjw8O%2BpCZh5s1TyKtsTi%2BE%2Fx56t9Rtp2b0olk9LDZAO95snf7fLnde%2BJ3PjdAnR2wwNZB1ib%2Fmw3eZqC7XcdOktX4j7p5B8aBhGAcUpH%2FZ%2BdgafYBb2gtGTIekDPf8FPn3joHttkVmieleajDlV7dpFQ%2Bhrc9YIhB1OW4PGF%2FND2qk7%2BlBt3XIjVKZhLbEvZyVsY2Dso%2BSVDQtjSp8fXqjuRkalN3wotq2D0s27ZyDjSFWZxYsJURICUj3LNFsh0ARD%2Fbs7dbXDPSF4WXo0jF8Zo%2BZ1qOVdq0xhXacaX1COtWhV6M%2Biyh9HW1dSGf%2FThJTcv27HGv5GY7MOeToTAIrnCAMZXCM%2FqyG3mpp9tkVdzwe6V2YvExHnJR1yhNIkoUFfi8NfUdl%2BQMzpMMGEwb0GOqUBgUuIjrFX7ca29O%2BFh28I2v3xkomKdkGvrhEWn%2Bft0iig87eYLtNkQGfLoDAX3XU%2Fpee9YlBa9Uy4gqvUz5t1nwpAKMq1CoC4CiU0OR3OkmgfvdEY9rT5LzMzw3WNh%2FUKu%2BHcjVAKV7KQW4EOeECLRKONnFazTBFWNof4RWY%2F1UOtEtY4FgAG7V%2BHmF8ZRgBA2FKqC%2Bop5itYuS8wqI8RBl%2BFYP%2Bp&X-Amz-Signature=e257e0ccc94f78368752274dc44d48e369f11c238ffa6d11dbf49f26fd3f2891&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HTZLEFV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDOFMNz7q1wRndT2HNWc61mj2v3jMxMsxLf%2BoIc5BIISgIhANcOgP2PtHCsVLCrjkyrjSQO27Qv%2Be2Df8wQY4oiIfjuKv8DCEEQABoMNjM3NDIzMTgzODA1IgwxaO8Nxa9dmvyYGvIq3ANz28%2BgOpk0w%2B3Y4yWzO8wr6ofkEO65Jfi0dCpJqxx3%2BarwHzl3XKsbLXeEUh59gdoMEH8d09hG4O53EwMg5VZjzBUSlSmpRQzG8Vi8UpU3Q%2BW84BJxjXUqMfu9zy05DlCC%2BcKBA7CkuTLSlXD75fzecV%2F66lPyyF8UMuVSm%2FmKn1sB3efPSBOpFcWSvbXOBLwpNsQVg8OdK7iJPZFYuEVZv5sDuTa4MOHm4vzj0VYkDpApcpuZhOxR1DZ0TXlj5wXj1JPWkCS6UYu48AuXRAfOJr9AaxI81hSwY1l4uan3ZffmPMKz2xZM3BWQ4Jn7d1iOp0xs%2Bt3dIFtJ8LWwnQbrwB1hp%2FbH3u6utSkaTOJcORm58wn%2FE2jsVeP4TmRqgVZ3BSr%2BhNqL7G0OiePmgrxhY6392xHaGKx8WSy9tUsYt4ArYrcNxAV9DzGcVwM7bH1nSpkIEnrFRJKbAxgSK9JYbCoGWynjRcO%2FIEcgkbAoiAFTrMtUApIwBOy6K8ReYsbDan12%2B7ke0dKENgaNHeH%2FTfhIeFfBJXQeJ2%2FOmreQIFe3DZ3WhM61twkZXGQUK0P1fg864qp9MQkZKh5Oj%2B3DO2vmKvVBDS3e3wgoV4yMwSjPS80bhFmg6KufgTC3hMG9BjqkAXvjEIKAIUDIKnDppVpRGvStD9oIy02S4I7ndpQ6B%2FlYDAwr3fZ4Lap9WVI3XGv9u3kjHDovSji%2BrSXr7gfC%2B0QiebqaP2Wcoyo0U1V4CWuioF6yvoppkCWaclEqF8%2F46VjZ8dO%2FuwtQktQktJFtm3eq%2FFNIlniRsy4Y3CECOaIR7ewXtqfCIUcH6pe9o4dFZiP8d7bik22Z3VIdVcN3MQeIXCtC&X-Amz-Signature=70bca77ed2fd782907949145bbb12b724cc907ff5ec45e6527ac2eba0528d2a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
