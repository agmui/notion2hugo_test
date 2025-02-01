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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3Z6QMU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm5Hh9PfWmERBbocx0qcrSDW5ae698e5lWmm6d8%2BqXhAiAqeqj2HhXPHBpnbcF1ymZvuVBtdhSCXFe%2BQ0TJ1SF6JiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FmYNIo5PhkAEkWUKtwD88g4RJIXSdlYjxxGr2xcZ5XRuCzl7cAgtXmUKfW5%2FK3%2BUY%2FkGN4TbR91O2uSkpbZWdzlH%2BAYnRVyn4q4J0FVUtIF%2Fcyfa%2BNC2rwWAed%2FyXTLLDz%2B9LD1ShCmP0HEcggUcVgDE0l369D9GK%2F9c1U1Ifl8n6RIZgzRfcaodqv8jM9VNJ53FsaGPHCLq5Rq76lQxAgrP9ULow%2Fq4oD9WDLjMrW6E%2BaYGw3xm6Sf8HiFgJAofWBg%2BSQ2TznT2x8jAzqfxvi8N8PH4tOvcf60v3182DM%2BFMOggnKoorEA5ESebeNTamQMpSFpcyr3tMthqEpL6%2F0nZrlMSgjznYChF7GAnHGGZTQFpgTLKZ%2BgVcDwCxY%2FSk9Pc4YblMxYu145J1zsIBO4UV9ysx6gaMwGgxIMrESFogJLEPwzFth%2BgG7AnjQss%2BpdCP4EH6zM7oNB3van5zFPfKsIT%2FkPtLt8B%2F0ZP3DrDuIKXFrvZg6O3ijaDaFHYlQtRzadNE3wKpMDbFAdi%2Bn6QKd6rqKekFgJGRwjd%2FhogFKsHgwoGIYl68ZQ2rZ3fb7Jov1NbFtJ4etE5DHrNJMKbDxyt9gVUcZxvf%2Bg6R4YUYC1X6zQcF2zpON6cbew0ispYfpkDMvyWvMwk6b3vAY6pgFLE%2Fv7jbxA77aOESBLvzKKEpOy0zaQhoRliM3Y5t%2BIduRf%2BkxnBdH9iByUvE2wQGrsRegaI%2FZ0m7O61rj0liwvldgkiV%2BTgFjends6aG0YTk6CKk%2FbZ5luUHMIqIq%2B1TAbuckTBehYP1ft14eK2hfMrM1zJIipJh0mk4VmqUy6J%2FBil7iAJ3qb7iQQpplM6%2FVf6HSB3i%2BdSP4gY0MKCv1RUq1WlSZ3&X-Amz-Signature=259b92c06bdc623c814c227598aab55c77feaccb9f02bf6233e383c83d2e9bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3Z6QMU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm5Hh9PfWmERBbocx0qcrSDW5ae698e5lWmm6d8%2BqXhAiAqeqj2HhXPHBpnbcF1ymZvuVBtdhSCXFe%2BQ0TJ1SF6JiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FmYNIo5PhkAEkWUKtwD88g4RJIXSdlYjxxGr2xcZ5XRuCzl7cAgtXmUKfW5%2FK3%2BUY%2FkGN4TbR91O2uSkpbZWdzlH%2BAYnRVyn4q4J0FVUtIF%2Fcyfa%2BNC2rwWAed%2FyXTLLDz%2B9LD1ShCmP0HEcggUcVgDE0l369D9GK%2F9c1U1Ifl8n6RIZgzRfcaodqv8jM9VNJ53FsaGPHCLq5Rq76lQxAgrP9ULow%2Fq4oD9WDLjMrW6E%2BaYGw3xm6Sf8HiFgJAofWBg%2BSQ2TznT2x8jAzqfxvi8N8PH4tOvcf60v3182DM%2BFMOggnKoorEA5ESebeNTamQMpSFpcyr3tMthqEpL6%2F0nZrlMSgjznYChF7GAnHGGZTQFpgTLKZ%2BgVcDwCxY%2FSk9Pc4YblMxYu145J1zsIBO4UV9ysx6gaMwGgxIMrESFogJLEPwzFth%2BgG7AnjQss%2BpdCP4EH6zM7oNB3van5zFPfKsIT%2FkPtLt8B%2F0ZP3DrDuIKXFrvZg6O3ijaDaFHYlQtRzadNE3wKpMDbFAdi%2Bn6QKd6rqKekFgJGRwjd%2FhogFKsHgwoGIYl68ZQ2rZ3fb7Jov1NbFtJ4etE5DHrNJMKbDxyt9gVUcZxvf%2Bg6R4YUYC1X6zQcF2zpON6cbew0ispYfpkDMvyWvMwk6b3vAY6pgFLE%2Fv7jbxA77aOESBLvzKKEpOy0zaQhoRliM3Y5t%2BIduRf%2BkxnBdH9iByUvE2wQGrsRegaI%2FZ0m7O61rj0liwvldgkiV%2BTgFjends6aG0YTk6CKk%2FbZ5luUHMIqIq%2B1TAbuckTBehYP1ft14eK2hfMrM1zJIipJh0mk4VmqUy6J%2FBil7iAJ3qb7iQQpplM6%2FVf6HSB3i%2BdSP4gY0MKCv1RUq1WlSZ3&X-Amz-Signature=3b412c0666d81948605e7667c503fa22384ecfe0a5aef471500c6bf3cdcd141e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UWICPW3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQTsiicL5bbWvOItUCl1Amdmz9kLnecKn9xdVbcncOfQIgaw6i8ppsHn%2BPDelXOMcNgQDY3NALMa0F2NVhfNtYKGQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWmwW6bEj%2B0m7pFbSrcA4FxAVjXWqOdZmyqWrMwt5bCqqpoC4MqpuW%2FsF8xK4%2BJ4XkaTIzEir5si7y6Ye8ffMqAky%2BckrIb%2FYwQf6zVaKRNDGBSEZWSYHri4NvnsLRELknHiryavR8684%2FsgRDOQipbznQkKuTIZlVzFaCbGCskOCjhpccfcetaJqOAehLXH039TT9Ojp4xuu5%2Fv0ZgxHynXYab%2FxXFxyQkBMDupi1zfs82J23%2FkXKEuT6jCvNOLXfskIeTsvlOti6DqTHzQHdA7AVEhC4o1kxi4H%2FNZe%2FIkrYLf3zl%2FpFcEbY76knSF2KRDbj5QOLbJKmXC4xV6esw5Ulye81JnoOdVmjpIPGtBxtpUM2K8boWHEzb91me78pA3kLBngeSxiF3y9MR4u%2BBSYa%2FJE%2FxbO2fuGfgzJNYMiRoVYyXiu9funVMwPFb3dNbtTBcopLd13R%2BaeA0nyhCoXA2Jup4POMCunXxSxluZ2VhjIRSgnuDlnkaam22PZ33O7kVvEZZrXElqgGbZhvt3se2AnMg3bQIkzSqA8T8vk6Za54%2B5pzmIKirTHpF0G1wr5c8yn8B5KVPPdjLhCf%2FUZisJBTK1WWvvD6cLH%2B7zZCZTv9KqJvaJ3dEhLRl72HyvGAz5eWPUQYZMJ6m97wGOqUBeGJXoEVyWUgyNkV73J2rw4nESjW2DinK%2Fdb7Y65SR%2FISqtuwE3Aah5OnkL%2FOWktcfIaME8BfvmoeOS57LpZk%2BROhtoS%2F8RQ20uwsJBaCMQr4OL0WdoPpHDbZzaME1NnV2TXG56eMaAPQmf3YREHX7MBzTPzbJHVN7TgVE8%2BZWD%2B3bFSzd2z9zSHLdu%2BtbOLprO5LFRl9Ew0Y8rFYVqpYeVs5DYsS&X-Amz-Signature=16102b4ab1d7b6dcfbb1700732241a3409c9af60cac01ff5f8a2b1ca51e77012&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNWJP6N%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4cCktwqXapL3vgAyaG0N4yiPzJ4gVqPCsE%2B72lhsYMgIhAKswZyXMve1WY5oQeq8Da8So8ppIGz47Azjzx%2BHvGGm8KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxExLtVYMD3lI2GkQkq3AMl9TlsMlCF1rFJ3u9noMFdgA%2BiPoDnxN6t%2FrN%2F16yNYcSgfRqiHnHKdgyBExm4vp4jUVFq8SBSvv8XqU%2FMxm%2FPbKNUueovJRnbGa%2F1iq1Q%2FSd%2FKItU9ATeD9Pi%2F9j7Ng6U3QcsdIXAhy4458ya%2BlOF07WG0WV%2FNO9KWcoiaJWmOafksdy9UZg4m2uffQxu7YZT%2B3qcUHwTKtrdojVR6dS%2FYwZjGh2ulf13i01vABERM43UvCf2DGzlgoskZnF1aPtWB6o9Rm10S0Zphpep1k84L5sEM63g5kAYmM8foL5rWfnKkWGiTPf4rKzKyf6zVWVi9XwBKzsCTFVGDgxssj5pROSEKrVRXlHRJ5VeTGbCLCaievZXhaR9JN3KULUlVhbK3spFP4jyIK7nqOVR3tvlJA7mqHzLFjqyMSJlyIgvIVcyplZo%2BRPFXHrH%2Br%2BUqUts3OTaECe%2FRQvnpmbZ0ofvXi9NdpmrdeR7mddecp3%2FicIDkLTTf2F%2BpcVRSva55No2XfSBMu1kcxbCJhTke%2BMtcXzEc6FB8CIKD7kBiQW%2B4WBpUu3HeC7noqxNHR%2BGQHeSn%2FjgvI4xugXZZmOW3tYDQSoVG%2Fe9M3FN%2B0iU%2BasF35cU3tNYPKJHqXFOlzC2pve8BjqkAf030InMC2IhL1UKYt9H5l2k0p9TyEVPVF0p2Ny88CxPIie5zfSbVFbLO0ZI01fbJdlPogjLkvAptwaByy%2B%2Bec7rpOBF3UOJze4zgmHj43iEwI7o47INvQjNEeuXR99K7zp4ZWIW1zAyDZEEnBuI7paU9%2B1z7S6mQV%2FZMy1XovWFohLdOY42%2FvnQCdhK5Y%2F4MeAd2%2Fz63wqc59QFG1S7eMm7drxS&X-Amz-Signature=b27d7149af38d0c416307ffd497191950d4be17394908834e764d6d0f6ad3381&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L3Z6QMU%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEm5Hh9PfWmERBbocx0qcrSDW5ae698e5lWmm6d8%2BqXhAiAqeqj2HhXPHBpnbcF1ymZvuVBtdhSCXFe%2BQ0TJ1SF6JiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2FmYNIo5PhkAEkWUKtwD88g4RJIXSdlYjxxGr2xcZ5XRuCzl7cAgtXmUKfW5%2FK3%2BUY%2FkGN4TbR91O2uSkpbZWdzlH%2BAYnRVyn4q4J0FVUtIF%2Fcyfa%2BNC2rwWAed%2FyXTLLDz%2B9LD1ShCmP0HEcggUcVgDE0l369D9GK%2F9c1U1Ifl8n6RIZgzRfcaodqv8jM9VNJ53FsaGPHCLq5Rq76lQxAgrP9ULow%2Fq4oD9WDLjMrW6E%2BaYGw3xm6Sf8HiFgJAofWBg%2BSQ2TznT2x8jAzqfxvi8N8PH4tOvcf60v3182DM%2BFMOggnKoorEA5ESebeNTamQMpSFpcyr3tMthqEpL6%2F0nZrlMSgjznYChF7GAnHGGZTQFpgTLKZ%2BgVcDwCxY%2FSk9Pc4YblMxYu145J1zsIBO4UV9ysx6gaMwGgxIMrESFogJLEPwzFth%2BgG7AnjQss%2BpdCP4EH6zM7oNB3van5zFPfKsIT%2FkPtLt8B%2F0ZP3DrDuIKXFrvZg6O3ijaDaFHYlQtRzadNE3wKpMDbFAdi%2Bn6QKd6rqKekFgJGRwjd%2FhogFKsHgwoGIYl68ZQ2rZ3fb7Jov1NbFtJ4etE5DHrNJMKbDxyt9gVUcZxvf%2Bg6R4YUYC1X6zQcF2zpON6cbew0ispYfpkDMvyWvMwk6b3vAY6pgFLE%2Fv7jbxA77aOESBLvzKKEpOy0zaQhoRliM3Y5t%2BIduRf%2BkxnBdH9iByUvE2wQGrsRegaI%2FZ0m7O61rj0liwvldgkiV%2BTgFjends6aG0YTk6CKk%2FbZ5luUHMIqIq%2B1TAbuckTBehYP1ft14eK2hfMrM1zJIipJh0mk4VmqUy6J%2FBil7iAJ3qb7iQQpplM6%2FVf6HSB3i%2BdSP4gY0MKCv1RUq1WlSZ3&X-Amz-Signature=eb1b2776070abc2980f2246699af059f07ee1de672d3837bec800100fb3e1104&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
