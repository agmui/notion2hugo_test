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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXH2BZT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCRktyrQ%2FGR%2F3Wbu6rkYk99ZlwtsBc3pgvQHNZT5xECpgIgFeO657M5hOEMQ1ccwvsvhFYIjTmnGgd6dk%2FNBN%2FfkxUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2AyBYCThj09ZUaHyrcA6Kwg3bJltmjqWk7vgOg%2B8RfqNaqGCvYDcfHKSBcsScalIdS61RTjoIcGdiu3Ihz%2BiF2xGk6hC9NzeY9GuOR4md%2FOhSM1JbZNaJxg0x%2Fqp4pE%2BJbJDxBmvmk5KXf%2BKX%2FPSMnsTEfjreFoz36PKrqvk86rUgkot4aTwv81adQmMqfX9daX3xYJNVKHFKXSoIs8RwDt0Fp%2BqdDhW7kSET3oFrv598J1ozCXZPgPB1tvp0HGzeNPQFrgHJzgzJGMt72UnPYqmAmFCXHMx%2BNlXcpWojzByn1F7fgI78hi5rLkEqI88x7Z912Lhrc%2FXjZBHpTDkgISEJ8YyfzzPmLxGyabfRk%2F0EhPbPhqd8JU8evvPBrXG7fiCHgMV1k1zab6JQYwXXhqMOBwfvA0GcqsXOnSJm0EwjA8XdHejvCyRFRRl4kg2m2WOzI7Yl26%2BNMyoNjA7G43rtky9IH%2FHYSAsYnYjQNaaI75OyQTe6pZnZGXjRAqkm2slfqnZXMzo403VKs5FisTnE%2Be1ZbCyn9W4plxozT5O4o2m3OPJEmubKNg6uO6oGY2caRh5zkZ7e6aULsf8gjPJ%2B2uKQ8L%2FZ7SzDImh6db06PrDmna1C6RNf6WDbxv43uI5iRVnPRYyW%2BMMWq%2Bb4GOqUBT9EODX2Llb9HOOEdmTjYxYQyvtZ6B1COnNvo5j%2FmKCsRqynpALzleMIFPDTbZstztOawpIiqzDY1w0vZOyhijMrfVXJoQrfxWvn%2ByZMV%2FuzsrzKzuan4s%2B6CVUrgka3LvuWfTY77sQuDfGywrCfH6Td0mQqg%2BsydgxfPo7DmE7AumtbHGhyi%2Bim62GswQje4tUk44ze9B2QfDJUwayE9GZoOQ5Q6&X-Amz-Signature=11cc20665f72245d0feb4072988361517c8b3eef4439108c97c596858d9510d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXH2BZT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCRktyrQ%2FGR%2F3Wbu6rkYk99ZlwtsBc3pgvQHNZT5xECpgIgFeO657M5hOEMQ1ccwvsvhFYIjTmnGgd6dk%2FNBN%2FfkxUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2AyBYCThj09ZUaHyrcA6Kwg3bJltmjqWk7vgOg%2B8RfqNaqGCvYDcfHKSBcsScalIdS61RTjoIcGdiu3Ihz%2BiF2xGk6hC9NzeY9GuOR4md%2FOhSM1JbZNaJxg0x%2Fqp4pE%2BJbJDxBmvmk5KXf%2BKX%2FPSMnsTEfjreFoz36PKrqvk86rUgkot4aTwv81adQmMqfX9daX3xYJNVKHFKXSoIs8RwDt0Fp%2BqdDhW7kSET3oFrv598J1ozCXZPgPB1tvp0HGzeNPQFrgHJzgzJGMt72UnPYqmAmFCXHMx%2BNlXcpWojzByn1F7fgI78hi5rLkEqI88x7Z912Lhrc%2FXjZBHpTDkgISEJ8YyfzzPmLxGyabfRk%2F0EhPbPhqd8JU8evvPBrXG7fiCHgMV1k1zab6JQYwXXhqMOBwfvA0GcqsXOnSJm0EwjA8XdHejvCyRFRRl4kg2m2WOzI7Yl26%2BNMyoNjA7G43rtky9IH%2FHYSAsYnYjQNaaI75OyQTe6pZnZGXjRAqkm2slfqnZXMzo403VKs5FisTnE%2Be1ZbCyn9W4plxozT5O4o2m3OPJEmubKNg6uO6oGY2caRh5zkZ7e6aULsf8gjPJ%2B2uKQ8L%2FZ7SzDImh6db06PrDmna1C6RNf6WDbxv43uI5iRVnPRYyW%2BMMWq%2Bb4GOqUBT9EODX2Llb9HOOEdmTjYxYQyvtZ6B1COnNvo5j%2FmKCsRqynpALzleMIFPDTbZstztOawpIiqzDY1w0vZOyhijMrfVXJoQrfxWvn%2ByZMV%2FuzsrzKzuan4s%2B6CVUrgka3LvuWfTY77sQuDfGywrCfH6Td0mQqg%2BsydgxfPo7DmE7AumtbHGhyi%2Bim62GswQje4tUk44ze9B2QfDJUwayE9GZoOQ5Q6&X-Amz-Signature=d28ef76138fa21f6646f245eaa22639dfeef58d5035959bdaa9cd155e8cf8b29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPES5KL2%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD6lnRsVrlqSfq2QS7IJS564bOGvmaxLe2lUyM9Pll8aQIhALQs2hT%2Bn75uqznDHOBFovuOV1Kvz%2BpAeFRv6SJH1GPwKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FaOGG%2FNh%2FhTiG26gq3AMq%2BTivf4UD5PR0Wn1nbzG2bOkNUu%2B7Cg%2FqwKd6KswJ7pQJDJxO8pDt6Hfj8bhN8uASJtYUXbhEFXhRm%2BwE2nKemMizBYpqBur3B%2F9qfyZVRhJeThkcfcvB6sZRQZiDu0nbwqxHm3%2BRYGB0y5YQf8Lpuy2ot8D2YiLoIzZyloZvm%2BJF3mse%2BKQWbRHegtlV6ePeaIYIWVie3nZhJIxCsGrcUdxC0nYAxBSEfsNzw0%2FsEfVpJ6kX2xXO5N3e7K3LqzzsYL4n2sfUOSV38WCWG9yRfK3YzDMCfiJ3WNZ8JfRyeaDx1Ktb%2BwnPtQvYkV6K%2FkJ%2BtRTVgbWf86dCJgGquJFHPrNSUdyFs3FRtcnrPBvZz3bGGWxPKmVKoAu3nlWDAgWGTWEwVb5rl%2Bgamy5NjbngU3ydUX%2Bi%2BLl94THNHFZmoAK3nNgw95RIxMXpcYY2jC7vVNfN17N0ScDz3UpzhYtD%2F%2Bcl5gZGYtg7ULqh7ZMthJbDprcFAIOgpUC6BgtQQ3TpVz5JxQfFbaAVvzxs9DcHQPaeyJHWAFECELr9CmTRnEapZJXJGATXhM1nfE8qMBASGq7IZJk%2BkrNN4yac75klzA1eazM0Lf5F14B1GUlAxZJ3J3QGRSMBfigO5DDMq%2Fm%2BBjqkAcLs9hFLmSMhhkRVAM8Si6awjOFz3Y3zMnkuJINcCAArdMOYvrmN2fPwhUKKhNhE5tpC12lpAHs3jSKNNoKaImoGESn1DQTNgMDVpDAQkYKJgFD02yJEJFPPznHvGzdN6mclXW%2F7euQLCTzf6kFyD8Kn5gGA4D3jGV4FXhSZ3XH9jqwMxDbeQj3NHpGT9J0qPRU4cbqthv54V1%2F9q3jBqvu%2Ft6dD&X-Amz-Signature=6ebb7df10efd51eebec22c24d617ed973de7aa34b8dd72c8720fa704fdddce7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VYIWG2U%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFeSHCFUJDHvo%2BzcpM2ANvI2wweaZjIUVeSFuh2SQvv7AiB07xgdqz2pEpx6Uovdqnqa5rP6ki1CDMKkkzKS1OyaASqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxOpzbz09%2Fir57STAKtwDGvxrqWKAwnhkvGBrXVuliAdgxR%2BxIdh3He9t4ZviO2LYauQsOy0JdDChUHSJPfEiMUL3WmlEeWItXvqbTN9klzSRgme8Q8DlJ68%2BNEgR7fXgRoI4C1FpZ36irsasgIgP5SeBnYPjHQWwVYB%2Fx%2FucxWc7qDipe2jHt2UD9XLsfqEKQS5xBCin%2BCoW2vs94iX%2FoS4NQy6PmMupLjl%2F48vQ0H3m6I4d2rKy1%2BnRBpfMLbKVGVuaCsTUcJ5qObdcxW70mE8I7kGqUmsTUvu5F0WdICX6aDzgs2wCoOZqCddZ9UNpfl%2F6WMYH3ha3a%2BLakcNk5P9xXfGmSfEsr2BaoqalUae1HtwC0lnYZL1YZGAzvRAK7P6oU9ObrRBdHuCw2eh48wuHppBFQLsUwZnCTVpCK4mGKwwod03JrcA7BV2If52aX7dVrp8nY2RzOTYSCGrs%2BM1ISqf2gPqCn6%2F%2BgL71LyYSLPI7XCVCG9U%2Fm018h7iBBTZkVS3P6738IFHHMNVlyuQf1NYof3Jv5DCkJBgK2EHt0Hodsrre5mvFQv1eUJIFNLVjyq0szcRr4Cq5FPhQbsWzVTCwvjYQ5u3HkvZopSzl9%2F0fSTJPOnmmUq%2B0Gcc1xHtGyOh2yV6%2BOdgwsqr5vgY6pgH62HUI%2BpELHvlg6P9OgxbZDoXV3QhZPtI0fj2P6kxuKorKPIPH6uYmhY4hkYooWDgwd%2F8oQ3PQWU%2BqJVye8E%2FIUvZlMWBvY4bWtRB4X%2FG%2FE%2FNXAUF081LkaSq%2FHI%2BiK%2FDLisILkCJIUtIL33AgNteH6ftBg1wEbhSRH5xR5Yio8vRVTRoKhO7nUHVK5NhtTLadExJMnTAWUIeLjOHm02qBCP%2BgPPMo&X-Amz-Signature=c971281cfce86c5581dec91dd6f2dad5815268e08951cd5d78120bc0623b7903&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGXH2BZT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCRktyrQ%2FGR%2F3Wbu6rkYk99ZlwtsBc3pgvQHNZT5xECpgIgFeO657M5hOEMQ1ccwvsvhFYIjTmnGgd6dk%2FNBN%2FfkxUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2AyBYCThj09ZUaHyrcA6Kwg3bJltmjqWk7vgOg%2B8RfqNaqGCvYDcfHKSBcsScalIdS61RTjoIcGdiu3Ihz%2BiF2xGk6hC9NzeY9GuOR4md%2FOhSM1JbZNaJxg0x%2Fqp4pE%2BJbJDxBmvmk5KXf%2BKX%2FPSMnsTEfjreFoz36PKrqvk86rUgkot4aTwv81adQmMqfX9daX3xYJNVKHFKXSoIs8RwDt0Fp%2BqdDhW7kSET3oFrv598J1ozCXZPgPB1tvp0HGzeNPQFrgHJzgzJGMt72UnPYqmAmFCXHMx%2BNlXcpWojzByn1F7fgI78hi5rLkEqI88x7Z912Lhrc%2FXjZBHpTDkgISEJ8YyfzzPmLxGyabfRk%2F0EhPbPhqd8JU8evvPBrXG7fiCHgMV1k1zab6JQYwXXhqMOBwfvA0GcqsXOnSJm0EwjA8XdHejvCyRFRRl4kg2m2WOzI7Yl26%2BNMyoNjA7G43rtky9IH%2FHYSAsYnYjQNaaI75OyQTe6pZnZGXjRAqkm2slfqnZXMzo403VKs5FisTnE%2Be1ZbCyn9W4plxozT5O4o2m3OPJEmubKNg6uO6oGY2caRh5zkZ7e6aULsf8gjPJ%2B2uKQ8L%2FZ7SzDImh6db06PrDmna1C6RNf6WDbxv43uI5iRVnPRYyW%2BMMWq%2Bb4GOqUBT9EODX2Llb9HOOEdmTjYxYQyvtZ6B1COnNvo5j%2FmKCsRqynpALzleMIFPDTbZstztOawpIiqzDY1w0vZOyhijMrfVXJoQrfxWvn%2ByZMV%2FuzsrzKzuan4s%2B6CVUrgka3LvuWfTY77sQuDfGywrCfH6Td0mQqg%2BsydgxfPo7DmE7AumtbHGhyi%2Bim62GswQje4tUk44ze9B2QfDJUwayE9GZoOQ5Q6&X-Amz-Signature=33a6520c7a1765f4da8c320a91cba604cb4ed5d7dbf20e075d7ded5e85894bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
