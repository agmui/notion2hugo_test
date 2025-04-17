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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L4QDIR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAZik%2BTIrqIJQdEWbFeXk4Q8WIDYGTx%2FQbKt4SNz5tlwIhALme6gPA90b0CcP5hOrAsmLIkb4NVxeo%2BBOEA8I51o9mKv8DCGYQABoMNjM3NDIzMTgzODA1IgyH1MYworFdyk0XJhEq3AOyZkLpLcAlwk3S1gRBA4uzIN5eRl%2BMj3cjzz1xGyE1RgKXRrC67VXj%2BRlKtyfBiKPajGIfYcaTIhoe%2BTkW0F6kB0pYrmzHIsVAMve79xgLeqtKUEhj3kZa3CrZKJq7n1nNJfdQME5cQzyvzxP0efha8W7vt7cDSqJOggBltKr6xPS%2FJS3gQiTJe5XsTI5gf3JDq0RBo81RmZQT%2FdI9UruLdwjJ%2BVgLeIP%2Bi3lQmeig5RwrYUB84GZXTPPk3i7wf8nDE%2FIKbaqgWznnKcUjLHSXSLTLapyLSu4kyFG6k9lspt32TJNqHRJdBF3DJey6OM9j%2F2u8dfAbKUlWwQG%2FXs9we2RsbcOT%2BWixfX4zI%2FtRAA9K9A2rInuSuHPMe7GsIQarorUj8gdYT8hOjvfUnBlTYJu37o%2FxfRP7nMRkX1bNCh3v1gTXe2jqCwCFm9ZOz1j%2BbAgH46KnKVCdSi4%2Bs9lpUSaRYzdmGsQ01Ibxtb4pEVopVt0KWQffWptBUcikMFEEFJb5efnNx1b5d3Fazo7uT4I3egQGfEpSwhkll5N5vLbI1O7KLsLLYvtHKNLh7A7d8MbaSrkyrSHN2jn%2BvXRihONLBE7hAhcyXg6rHLB52mZLP%2BzEjRG4DX1pZjD%2F0IXABjqkAf%2BBJRd1x88DFcdB707PQBCOwmCSbSSKthhLhd0uojmJy7Ey0w5xLTqOnnxlzgxCCgNYbFPXzntpzJIv2J%2FeWd%2BiqfRmqciprrd%2FYaskMIx5Qa7XQsn0Bk4XP0U16Qkjl0Ct%2BmW1Qa%2FTlIlYoBnvnP6RuYU%2FaSRltntgEZ1OfoywMPCeTgJuhJw8S8YWb2DyI4%2BaHUpfBeTBr3HDlf2FH8CmS%2Fyb&X-Amz-Signature=2b1a78d696977cdaf4ff9100c6319d7fa28831e49583ce6bc9e9c95abe79e1de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L4QDIR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAZik%2BTIrqIJQdEWbFeXk4Q8WIDYGTx%2FQbKt4SNz5tlwIhALme6gPA90b0CcP5hOrAsmLIkb4NVxeo%2BBOEA8I51o9mKv8DCGYQABoMNjM3NDIzMTgzODA1IgyH1MYworFdyk0XJhEq3AOyZkLpLcAlwk3S1gRBA4uzIN5eRl%2BMj3cjzz1xGyE1RgKXRrC67VXj%2BRlKtyfBiKPajGIfYcaTIhoe%2BTkW0F6kB0pYrmzHIsVAMve79xgLeqtKUEhj3kZa3CrZKJq7n1nNJfdQME5cQzyvzxP0efha8W7vt7cDSqJOggBltKr6xPS%2FJS3gQiTJe5XsTI5gf3JDq0RBo81RmZQT%2FdI9UruLdwjJ%2BVgLeIP%2Bi3lQmeig5RwrYUB84GZXTPPk3i7wf8nDE%2FIKbaqgWznnKcUjLHSXSLTLapyLSu4kyFG6k9lspt32TJNqHRJdBF3DJey6OM9j%2F2u8dfAbKUlWwQG%2FXs9we2RsbcOT%2BWixfX4zI%2FtRAA9K9A2rInuSuHPMe7GsIQarorUj8gdYT8hOjvfUnBlTYJu37o%2FxfRP7nMRkX1bNCh3v1gTXe2jqCwCFm9ZOz1j%2BbAgH46KnKVCdSi4%2Bs9lpUSaRYzdmGsQ01Ibxtb4pEVopVt0KWQffWptBUcikMFEEFJb5efnNx1b5d3Fazo7uT4I3egQGfEpSwhkll5N5vLbI1O7KLsLLYvtHKNLh7A7d8MbaSrkyrSHN2jn%2BvXRihONLBE7hAhcyXg6rHLB52mZLP%2BzEjRG4DX1pZjD%2F0IXABjqkAf%2BBJRd1x88DFcdB707PQBCOwmCSbSSKthhLhd0uojmJy7Ey0w5xLTqOnnxlzgxCCgNYbFPXzntpzJIv2J%2FeWd%2BiqfRmqciprrd%2FYaskMIx5Qa7XQsn0Bk4XP0U16Qkjl0Ct%2BmW1Qa%2FTlIlYoBnvnP6RuYU%2FaSRltntgEZ1OfoywMPCeTgJuhJw8S8YWb2DyI4%2BaHUpfBeTBr3HDlf2FH8CmS%2Fyb&X-Amz-Signature=3e3a8504440106c0a736a57d0485650d84ccc336e55a4f87fc0daf3f7e1adab1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXNJCGV3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0QdTO51WAJMw4Kmbs%2BpT6Xgfe01D7b8nTquEr%2FJCoMgIgX4LnuJENpqelRse%2BVgsVe64cAZuhyCC8BEOqY3qmXF0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFlOYdgV48dKhoL2ayrcA3ocmiQl49cQdWjm5KJsrzwg%2F3TfyEwdENn8Nz1a9PlLlOaTAEuGODnGVJZajnB1qJNhO71PdTrFHRtgMGEEUh1JFV4yWchUr%2Bvl7jWNZYnpF2sSniagzHEeYLM83sy2t%2FxkQGFwSlzAzT%2FsPdL4%2Fcuq6wKvOBe077%2FtBPxjt7MGZQsVG8%2FS47aWY8rkJdMfpsCZcFXl%2F8wApcRRkxp776dHdnXUyJdf%2BRD4PcGBI6TYeb851r4NcCTcSe87DwnXB90FE%2FUlFwHA3BSpgi0D6lU%2FPexRIGAEOlWQWLi3JMVJWrz6vXPUcdFNrrpQi2XzaRQor4xWWEiq4Bh4sUChBsF18ZDMhQadQ9hFpR0T8Ngla%2BcD7N%2FACf3icQlMLJw%2BqJMoKhO7PmNMkGtMhR9EvX1kzgzq0SN4BaLWRBEj8yvyRlwseTRxYMmTSpZjqgRrlqdFaHQaw%2BLVxH%2FL5B1vLCRvtYZxt%2FFWAyispXYSRVAY413plpVHOpqoTbxHBlFPfThb%2F2uZWxyCwMaFnwnsho55PdAxwK30AAVUMoVcqA1n32anBGylyPXRNJ4OQMZV%2FpcX5y21pyCSlxotkT6NumbMIUXpSrqUKzNoAQvMboPypL4uzVO%2F9BLWn91fMKnRhcAGOqUBhhDIDSqPnj9ll7zyxLpQfc%2FIHCICkFjdyc6Dhh25qDGaaqjFjZwOqlYeu2x5jW8ItJrXQTTBZFhC%2F8N6jXEs%2BCUx4wXX1qQjNfbQ%2BiMnrhYA90zGAvj0RCrV4LcXDKsHBTWatamWyDxg11GzGxnqRc3n20V38Jp5YfOsBu8r4%2BvehTsxWHAeceSEMB%2BrLG0B%2BYOgAbNk%2BjGrVbPxidt5%2BTRHMepW&X-Amz-Signature=db9e5857260d06623bee5a86ae157edba083bfcb567b2160a06d52653ead49d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMMR7IN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrsLdD28F3dHcxmORQqmYIwUuA0N3YVbR1h4J3aB5uwAIhAIYKw%2FNCFLS9XLSfM12rg0EVz9bU6O%2BMQdC7YMVVKbwPKv8DCGYQABoMNjM3NDIzMTgzODA1IgwAIeKvj00VdgXNyEYq3APZrFQ2vBp0clAlJnk6ihPxSA5egXh3QVfrJW5pfT8xYEki1ADmkFZ6PQD%2FNw1ti2cKUCoaQvpfayKdPm35LIqRgSlAt1ed6Es7VNweMa8oomp2UZSLsFWqAAjqrS8fIO6tHYTJt6M%2BD6WPishHZ2o7gPRqvRyjzWJ7WTaQP8tJnsGGStfxcXc%2Ft2QrNPqd%2BxKEhw5geNsAdo%2FNQ9JKsh20FYI6SqiLzSjUdWQv3dupgD2m%2F4BpLBOu0q6eBzaFNyGt8A%2FzGMAe5QZKOKetfYWpRsLiDsjCndLRH6zhOHeMsngNRN%2BPZHIAD1iJKmLfJK6ow%2B2Ng9ThzfuOPp%2BBO%2BTXamOiWhp3u6I2FRyaG6Qwhy8Pw2L%2FlDYj30xQeGpHYCJ3sl%2BJVtGwG%2BeWublYWkYRv%2FmsAPrJRP9KFiqno6f7S6hJ72lQBLl8nOqDR2Rnj7QpTbdPmBbj9gV3p4eIvD9Ewf5WLQNldAwnktB3baDD%2BqGNYgZRj%2FsN9DWqC2y5VcdS59h6vGXryx1277H1%2B%2BHDw1pSTtFk9nnOU7oJjIJgefm%2FYT4IArCpUi6oA7pzjg%2FDQVcFlC%2BFXJO4%2B6x83ZncAK%2FZvNknOHlHKq7qyLxnFWmDc1fpQ%2BgBZ8HwQTD%2B0IXABjqkAdQx3KTU6GWICQs88ZWm6m2yG7lpQCAHRwQ6PdqCZAYXOuNl76xITTtLKKl0znL49xkd81knhXugZpN1qGxy8%2BQDZEyyFITb%2Fu3pJBkWybBcL%2FvS%2BFVRiHPKnVbJMqN6Qn%2FeVV6i26msCyDluH5uG%2B9Wt7kIFbcavWf%2FQMLC3MIKdE7oVbqOOCc4ryV0EIDy48qhrfs68yRwwQJqH6AmNmD7J6R%2B&X-Amz-Signature=605d84537823c10e8f17e4e4b34b294d6e71ef851557f19976160fc4ef1881c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L4QDIR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAZik%2BTIrqIJQdEWbFeXk4Q8WIDYGTx%2FQbKt4SNz5tlwIhALme6gPA90b0CcP5hOrAsmLIkb4NVxeo%2BBOEA8I51o9mKv8DCGYQABoMNjM3NDIzMTgzODA1IgyH1MYworFdyk0XJhEq3AOyZkLpLcAlwk3S1gRBA4uzIN5eRl%2BMj3cjzz1xGyE1RgKXRrC67VXj%2BRlKtyfBiKPajGIfYcaTIhoe%2BTkW0F6kB0pYrmzHIsVAMve79xgLeqtKUEhj3kZa3CrZKJq7n1nNJfdQME5cQzyvzxP0efha8W7vt7cDSqJOggBltKr6xPS%2FJS3gQiTJe5XsTI5gf3JDq0RBo81RmZQT%2FdI9UruLdwjJ%2BVgLeIP%2Bi3lQmeig5RwrYUB84GZXTPPk3i7wf8nDE%2FIKbaqgWznnKcUjLHSXSLTLapyLSu4kyFG6k9lspt32TJNqHRJdBF3DJey6OM9j%2F2u8dfAbKUlWwQG%2FXs9we2RsbcOT%2BWixfX4zI%2FtRAA9K9A2rInuSuHPMe7GsIQarorUj8gdYT8hOjvfUnBlTYJu37o%2FxfRP7nMRkX1bNCh3v1gTXe2jqCwCFm9ZOz1j%2BbAgH46KnKVCdSi4%2Bs9lpUSaRYzdmGsQ01Ibxtb4pEVopVt0KWQffWptBUcikMFEEFJb5efnNx1b5d3Fazo7uT4I3egQGfEpSwhkll5N5vLbI1O7KLsLLYvtHKNLh7A7d8MbaSrkyrSHN2jn%2BvXRihONLBE7hAhcyXg6rHLB52mZLP%2BzEjRG4DX1pZjD%2F0IXABjqkAf%2BBJRd1x88DFcdB707PQBCOwmCSbSSKthhLhd0uojmJy7Ey0w5xLTqOnnxlzgxCCgNYbFPXzntpzJIv2J%2FeWd%2BiqfRmqciprrd%2FYaskMIx5Qa7XQsn0Bk4XP0U16Qkjl0Ct%2BmW1Qa%2FTlIlYoBnvnP6RuYU%2FaSRltntgEZ1OfoywMPCeTgJuhJw8S8YWb2DyI4%2BaHUpfBeTBr3HDlf2FH8CmS%2Fyb&X-Amz-Signature=82a73a224e9f60caaba59d3427fd24c4ea8b4b6f115cd16acdf04e11f6b36f92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
