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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHRCMEZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKExgAToRdyJvc3FpsPIW4fKN9ozavQei%2B2isigrbp4AiBDTCHW7W5j28K7aAFO1Nj1UMC%2BKxFhZ7vMrlbJxOxnkir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM2DPEoHhMC1qVsAUOKtwDGOEJ0HuGb94DQQ7PLHk5GCvSksBWYlnyDZl7YyEiQIVpp%2FzWMdeUjx%2FDYLA4V9Io7qCbjPddmAnCYE6XY7yQ5F0E9s8ue4cvKAcaKMGU%2BtRiS5D3ahZeqhhw2Qn%2FWBEIg7GJQJfaoYrEG7qY3p1rSjseCF6YhXbXGW3qcoNCmG9pYF7cYWDlNO7qzL0rV7D3hi3dD2Lc2XFx4CCD0jNgi%2FJ83vVFrqheX8rW8nBqCw0d9P0VTSWtCtNp9D51s1kXpPNdCjEsWqzR2q61X5rqn%2BTFVVH2h362BH6lIoe0NA5cdIvcXB9jI9Bf7W3HGzYdpiFXLwmEBJrh%2FZuGnjBkN8zEhDgbQvDyObUcRPYw8Lu2SaRlD5nRq9UdsqHnov25NdRqq1vqpC3ETBTjAyj6Q7TGrLEcs7TYSQKoA5hdC49XI14EF0irtfPe5TDY7Zt5V6QqD4RpRljQr%2Fz8pGDjtOQu4VqU5G%2BtS9f96gh99xaA%2F%2FyX3xoI7kq2aNs1uU5%2FBPhtBFK8BXAe9rl5s%2BiNpZTrkIuJwwWbdAoBMEYRDhDPT8g%2FrWrxT%2Bskse6yxln3gGSA84gRQSA9gt6On8ZggvaPp7gwX0489j2HVbSF5nEzYBp5BB6%2FqJUxy60wqee8wAY6pgEc2oLaAZUCvrRRKzvQuQ3qvMrkw97m6Re56HRGj08lc49rhLaWILcQjQ%2BNyoIJO27UM28MXHwUVehz%2B%2Fma4kM%2FCaiICXWIzyjjQFiiRlQL%2BjBGxXEzpYLFXF5JUSgf6NE%2BQ3%2BYakn9K%2FD78xeSu3HUemd5c3UAdhzfJ1PK8E6YSpzqN8K7OZFOW5NGJYkXG5RFMcK%2FmXbhNO0qqis2kNxlOncn%2FJxA&X-Amz-Signature=7e94621a25e42b76311c1239eca78d413cf4f9bd5c27a81ef8721f9cff2ec6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHRCMEZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKExgAToRdyJvc3FpsPIW4fKN9ozavQei%2B2isigrbp4AiBDTCHW7W5j28K7aAFO1Nj1UMC%2BKxFhZ7vMrlbJxOxnkir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM2DPEoHhMC1qVsAUOKtwDGOEJ0HuGb94DQQ7PLHk5GCvSksBWYlnyDZl7YyEiQIVpp%2FzWMdeUjx%2FDYLA4V9Io7qCbjPddmAnCYE6XY7yQ5F0E9s8ue4cvKAcaKMGU%2BtRiS5D3ahZeqhhw2Qn%2FWBEIg7GJQJfaoYrEG7qY3p1rSjseCF6YhXbXGW3qcoNCmG9pYF7cYWDlNO7qzL0rV7D3hi3dD2Lc2XFx4CCD0jNgi%2FJ83vVFrqheX8rW8nBqCw0d9P0VTSWtCtNp9D51s1kXpPNdCjEsWqzR2q61X5rqn%2BTFVVH2h362BH6lIoe0NA5cdIvcXB9jI9Bf7W3HGzYdpiFXLwmEBJrh%2FZuGnjBkN8zEhDgbQvDyObUcRPYw8Lu2SaRlD5nRq9UdsqHnov25NdRqq1vqpC3ETBTjAyj6Q7TGrLEcs7TYSQKoA5hdC49XI14EF0irtfPe5TDY7Zt5V6QqD4RpRljQr%2Fz8pGDjtOQu4VqU5G%2BtS9f96gh99xaA%2F%2FyX3xoI7kq2aNs1uU5%2FBPhtBFK8BXAe9rl5s%2BiNpZTrkIuJwwWbdAoBMEYRDhDPT8g%2FrWrxT%2Bskse6yxln3gGSA84gRQSA9gt6On8ZggvaPp7gwX0489j2HVbSF5nEzYBp5BB6%2FqJUxy60wqee8wAY6pgEc2oLaAZUCvrRRKzvQuQ3qvMrkw97m6Re56HRGj08lc49rhLaWILcQjQ%2BNyoIJO27UM28MXHwUVehz%2B%2Fma4kM%2FCaiICXWIzyjjQFiiRlQL%2BjBGxXEzpYLFXF5JUSgf6NE%2BQ3%2BYakn9K%2FD78xeSu3HUemd5c3UAdhzfJ1PK8E6YSpzqN8K7OZFOW5NGJYkXG5RFMcK%2FmXbhNO0qqis2kNxlOncn%2FJxA&X-Amz-Signature=1561d94aee32b15cd62ea44e21f3cd930f4a21b08e77afa80b0f99a448fa5ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTVJ64JI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWmH%2B9ScFeDWbi8LHE4mnLWllTvbvkXgzeP6Si%2Fp8LYQIhAKLTeabkAJMm4aW9igIdcItXI5txESH0NRrGSln22BKvKv8DCHEQABoMNjM3NDIzMTgzODA1Igw21hyybVcjiUV3O8sq3AOGwqdz8TOCiFHJcB0JaqABlr8W3Ntnn%2FCyYXOwXk6CjncD1wxSCrsIM79PjGGDSBVIGcNlgFHXoNAMksTRxADjx5etBg%2Bp8EaTiWqIH6z7CbVTY%2FRgAvU2LbRY7cpXUp1QPHGsPqekK05XHQsT2%2FI5B9Xl2PQu41JHxHB%2B%2FjIu54oAshLNWX3pU0vFLjGxWfr105T48eLtM9c2xAP8CntE7%2B2Gxb%2F31tfrK272lzuaSzMJvyVOe3rJdTgNd4ietaCJdgBsiK9ZAi7XGHmgT3n7dB5adAq1hsy6OlQGxggmqfuY3MtvqvT2zL%2F29XkF4t3iU1%2BFz23dcJnw8jwziC%2FA9WDNHFF%2Bjda2ZG1%2B2hFLxyx4VN6OpMyVTJIm2H3RtnXyDvx65bj393HL0eGbpZvsOkRw29YN%2FRCc33q34cSWaB6e%2BGq4mkkzeZLOr%2BYh0z%2BV9Xllh80DnJizVMFqAq9dXoSMKYyWqrBTW3X%2BojNBG5ss9fAUZIjS6nly5R1dXgJnO7I%2B62OQ2NYc3p1VS%2B6WgzEa0wRJkscqlVdZj1lmjwl9HLkpEkJoBd286ROIIVoNsq%2F8vyEU77p3d4qEW7y4ZFQh23C9UuCU8rm1qS37PqZQQscBQD1Ce0jcqTD657zABjqkAe3aN%2F%2BS%2F5grdwmqyIBee3IrJzkbZBMVs9wkeFsf5VDmuosoyvuCjyRRgxRPqy3Uc9JDawOnny4%2BcICLfgN%2B%2FT%2Bj7jbgOzGO7dK5mN0Qjni1f9czdkCsT3UsmSgRHvd%2B%2F9jv5WnmJbJcumLLLcpLynHgvAOLWVkEwqwYJYCRh8E4JSVAEKNePQHzeKLqp8ObiVVjVl%2FRdfL6AOZJ5pNTo6TUx7dg&X-Amz-Signature=f5651f3eb735d6102d88c35eb101aaa40d71717ab068afaf4d6a257391e7ec52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ6O3VI3%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUp0a5CRl1O5OnuSWCqoWs6GmByvvL4zxUPN%2FGv%2FTCKAiEA6TXWLiT6CDNpp6Ufp5hskgVO5C60yuPQMJPm43yytJoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDI8UKnHNBCYl1R6hSrcA5EXhV6ZHaZGYa%2F21V4wEpMn4mPS5x7GB%2FYzCM8dIU32jBjCJjr7DAiedg%2FkKy8X94EuPSB3Lf1iwOu1X5jPKAXgYaXmff7kZucxPf1LKL2VQlSDpK%2BNMkxSQtxm25TDU2nhS6XFmS15jH60bLtRfp0h4QLOEet4KNfXOl7jc5YPbXflCN%2BNS1VwlSja9kohfo0ZoTiX7dYSWf7QUilONAB1PsttqC1Km0sqc5QE6VlKKR%2BXpQTcFkjC7MkoHKNE%2BTyGGodq86nkoCv2gpPp%2FSTybt13gFuwtTz8x61Oq%2FC%2BL6SzIUaScwu7hvkt%2FKG%2BogpNnQoSFMJbSWpUrCPOQIsIC3p7EJt8EIDE43%2BTKIwxR1s%2BXdpeQlP6ksi2QyHeXkFKYYHB1AZIkMEBweVtNzUUcfmALnnANRASCPHV5%2BrBbOkLalXZ5Ch1F9%2FtmYaY%2BB%2BWuqb6lnh9AWuxzYD8PO3uWOLL47D%2BoWaddY2iuQ0sFa4KlNmZqfcJ4l%2BNVcMWz3ASZiTzcWTJyftC8QqKHB8UFL55NowTFAy0QZTT3f6ZA%2B%2B79ndK4sxSTqUvxlskMcosC8zkn04%2Fttw0u1sR2gz6eUsZHtk1dLNoTkRxGovE%2BJwA4bw0pWT%2BfaTyMLvmvMAGOqUBC5dylwOlKlXraNObyIWEKGSO%2FdMCUfqc%2BeXYh2x0qr%2FTdyBJOYJakrjDQvRpdyMRAr0smPOCjF5kv89Pt0eaADD%2FOIU%2BsT5%2B%2BTB2edxaRJPGg%2BOQ3CiC125peGHwr6ammJIGVYSlTVL9fsF2kSXB9Gdb4RuiTBQDoQnwE4GFxjtsaEApKKDY%2FkTjb64cpVwyfqS9Y6vmLJm5i6zVuaCMW6r4S4jO&X-Amz-Signature=0e9f6c048749d81110df282fd1c5464444f7961d824739af3270ca6490386262&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZHRCMEZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T082944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKExgAToRdyJvc3FpsPIW4fKN9ozavQei%2B2isigrbp4AiBDTCHW7W5j28K7aAFO1Nj1UMC%2BKxFhZ7vMrlbJxOxnkir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM2DPEoHhMC1qVsAUOKtwDGOEJ0HuGb94DQQ7PLHk5GCvSksBWYlnyDZl7YyEiQIVpp%2FzWMdeUjx%2FDYLA4V9Io7qCbjPddmAnCYE6XY7yQ5F0E9s8ue4cvKAcaKMGU%2BtRiS5D3ahZeqhhw2Qn%2FWBEIg7GJQJfaoYrEG7qY3p1rSjseCF6YhXbXGW3qcoNCmG9pYF7cYWDlNO7qzL0rV7D3hi3dD2Lc2XFx4CCD0jNgi%2FJ83vVFrqheX8rW8nBqCw0d9P0VTSWtCtNp9D51s1kXpPNdCjEsWqzR2q61X5rqn%2BTFVVH2h362BH6lIoe0NA5cdIvcXB9jI9Bf7W3HGzYdpiFXLwmEBJrh%2FZuGnjBkN8zEhDgbQvDyObUcRPYw8Lu2SaRlD5nRq9UdsqHnov25NdRqq1vqpC3ETBTjAyj6Q7TGrLEcs7TYSQKoA5hdC49XI14EF0irtfPe5TDY7Zt5V6QqD4RpRljQr%2Fz8pGDjtOQu4VqU5G%2BtS9f96gh99xaA%2F%2FyX3xoI7kq2aNs1uU5%2FBPhtBFK8BXAe9rl5s%2BiNpZTrkIuJwwWbdAoBMEYRDhDPT8g%2FrWrxT%2Bskse6yxln3gGSA84gRQSA9gt6On8ZggvaPp7gwX0489j2HVbSF5nEzYBp5BB6%2FqJUxy60wqee8wAY6pgEc2oLaAZUCvrRRKzvQuQ3qvMrkw97m6Re56HRGj08lc49rhLaWILcQjQ%2BNyoIJO27UM28MXHwUVehz%2B%2Fma4kM%2FCaiICXWIzyjjQFiiRlQL%2BjBGxXEzpYLFXF5JUSgf6NE%2BQ3%2BYakn9K%2FD78xeSu3HUemd5c3UAdhzfJ1PK8E6YSpzqN8K7OZFOW5NGJYkXG5RFMcK%2FmXbhNO0qqis2kNxlOncn%2FJxA&X-Amz-Signature=533f319c6116ff7d7a719558772d3b57c8c433d50accf4cc82d8bd335be3c312&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
