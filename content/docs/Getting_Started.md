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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXKFICI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1X7yVYwaHW%2Bk5XC50gKvY7NwNGQC21DWPipsj9CqP3AIhAKJtxWc8wt2w0EzL4TgSBUsykZIyLm%2FrcdYgXaevJgo8KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGPbYvTnD3upV2dZMq3APva%2BPar8fYLJuHZPuYsicHwnd8%2Fy1ejbQQbDdwuXDDMd8%2FFEVG12kEpWOFRcJOKmILv7DaVRBzb1tw7BuvfifIMeSQsErA3NIA8SPwfo0zWVso0EnGNMSf1s4MTPNRjaPuloqxdv34RmXD5RvK%2F6Uj9qMvrKlVZrfRGdW3xboh%2Fp8fVvvZLvYx8A1xvEzgsbfNYWHdaCDaDotu74jhWhJN6wrZd6VGh%2B5b0Gxh7xGDqvK4WFCVuszd6T9NfEGpzc64S4JfytuDNKvHlLNDQth2aXhbVz%2BBtI5jCrI2uMnrtxg9yT0%2FfMk9f03oHjxFkhzE0HcP92tHU4ZdsOfK9bP9RxTumG2roeE%2BIPzWsKkTQdakJpjD0pKjl919DP7UMNI7JqoEqy6y1U6DTFQE52xXr3V9%2Bhh4chijjLvclclg25N5DlLWvr8QYYjTzpiRkJ43Qt0aNdMy8QQnOOU%2FZ2Zqlr%2FuJwfrMgwIE6IGVfaDTHLaZEMCbrHdp21Zkjd9te8d7IMYgVdluikoN8%2FXzFhYam8MHFnwwMZu89om67EIR5212mCSwONuR0INgsITbOy5vaaSGH7aGuxXxfxwLr9jw0pBzyuISToJZlGWMzBib3nhmeCDzKT6LX7KOTD%2F8ebBBjqkASbtwa5taJuJMZxj2Uzt5Xqjr1izpbGrqkNIoZLDkiY5Mj0%2FT9V3EL1onIo1qls64Ln%2B9g99hbUqwcsJ6wmLOvWOX9NEhiRZnJJjZueZyG3co1xzufjvUlncCJ8d%2BXi9hIbS3RPbHd4at1Px%2FXMLl1eIzfj9FHNKlOgkHgiNepKzWLKG0fkKHujm7Cc0w4uwSnZjzEdUgfvOF5g8S1bQE93gQXFM&X-Amz-Signature=f29c69fdd6aebde4caf3887ed921d32ef8e25ecce832cd921f48f9c037d4c37e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXKFICI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1X7yVYwaHW%2Bk5XC50gKvY7NwNGQC21DWPipsj9CqP3AIhAKJtxWc8wt2w0EzL4TgSBUsykZIyLm%2FrcdYgXaevJgo8KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGPbYvTnD3upV2dZMq3APva%2BPar8fYLJuHZPuYsicHwnd8%2Fy1ejbQQbDdwuXDDMd8%2FFEVG12kEpWOFRcJOKmILv7DaVRBzb1tw7BuvfifIMeSQsErA3NIA8SPwfo0zWVso0EnGNMSf1s4MTPNRjaPuloqxdv34RmXD5RvK%2F6Uj9qMvrKlVZrfRGdW3xboh%2Fp8fVvvZLvYx8A1xvEzgsbfNYWHdaCDaDotu74jhWhJN6wrZd6VGh%2B5b0Gxh7xGDqvK4WFCVuszd6T9NfEGpzc64S4JfytuDNKvHlLNDQth2aXhbVz%2BBtI5jCrI2uMnrtxg9yT0%2FfMk9f03oHjxFkhzE0HcP92tHU4ZdsOfK9bP9RxTumG2roeE%2BIPzWsKkTQdakJpjD0pKjl919DP7UMNI7JqoEqy6y1U6DTFQE52xXr3V9%2Bhh4chijjLvclclg25N5DlLWvr8QYYjTzpiRkJ43Qt0aNdMy8QQnOOU%2FZ2Zqlr%2FuJwfrMgwIE6IGVfaDTHLaZEMCbrHdp21Zkjd9te8d7IMYgVdluikoN8%2FXzFhYam8MHFnwwMZu89om67EIR5212mCSwONuR0INgsITbOy5vaaSGH7aGuxXxfxwLr9jw0pBzyuISToJZlGWMzBib3nhmeCDzKT6LX7KOTD%2F8ebBBjqkASbtwa5taJuJMZxj2Uzt5Xqjr1izpbGrqkNIoZLDkiY5Mj0%2FT9V3EL1onIo1qls64Ln%2B9g99hbUqwcsJ6wmLOvWOX9NEhiRZnJJjZueZyG3co1xzufjvUlncCJ8d%2BXi9hIbS3RPbHd4at1Px%2FXMLl1eIzfj9FHNKlOgkHgiNepKzWLKG0fkKHujm7Cc0w4uwSnZjzEdUgfvOF5g8S1bQE93gQXFM&X-Amz-Signature=c782149aa5d733c8fe7169065e4392b8829b3225147916d7253cbcd03c13871f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXKFICI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1X7yVYwaHW%2Bk5XC50gKvY7NwNGQC21DWPipsj9CqP3AIhAKJtxWc8wt2w0EzL4TgSBUsykZIyLm%2FrcdYgXaevJgo8KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGPbYvTnD3upV2dZMq3APva%2BPar8fYLJuHZPuYsicHwnd8%2Fy1ejbQQbDdwuXDDMd8%2FFEVG12kEpWOFRcJOKmILv7DaVRBzb1tw7BuvfifIMeSQsErA3NIA8SPwfo0zWVso0EnGNMSf1s4MTPNRjaPuloqxdv34RmXD5RvK%2F6Uj9qMvrKlVZrfRGdW3xboh%2Fp8fVvvZLvYx8A1xvEzgsbfNYWHdaCDaDotu74jhWhJN6wrZd6VGh%2B5b0Gxh7xGDqvK4WFCVuszd6T9NfEGpzc64S4JfytuDNKvHlLNDQth2aXhbVz%2BBtI5jCrI2uMnrtxg9yT0%2FfMk9f03oHjxFkhzE0HcP92tHU4ZdsOfK9bP9RxTumG2roeE%2BIPzWsKkTQdakJpjD0pKjl919DP7UMNI7JqoEqy6y1U6DTFQE52xXr3V9%2Bhh4chijjLvclclg25N5DlLWvr8QYYjTzpiRkJ43Qt0aNdMy8QQnOOU%2FZ2Zqlr%2FuJwfrMgwIE6IGVfaDTHLaZEMCbrHdp21Zkjd9te8d7IMYgVdluikoN8%2FXzFhYam8MHFnwwMZu89om67EIR5212mCSwONuR0INgsITbOy5vaaSGH7aGuxXxfxwLr9jw0pBzyuISToJZlGWMzBib3nhmeCDzKT6LX7KOTD%2F8ebBBjqkASbtwa5taJuJMZxj2Uzt5Xqjr1izpbGrqkNIoZLDkiY5Mj0%2FT9V3EL1onIo1qls64Ln%2B9g99hbUqwcsJ6wmLOvWOX9NEhiRZnJJjZueZyG3co1xzufjvUlncCJ8d%2BXi9hIbS3RPbHd4at1Px%2FXMLl1eIzfj9FHNKlOgkHgiNepKzWLKG0fkKHujm7Cc0w4uwSnZjzEdUgfvOF5g8S1bQE93gQXFM&X-Amz-Signature=dd49e9428c1d38927d68c3650f01702434572ba16da418b1eccd83852db0e2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKVTCW7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICod%2FFqXP4zCBFg3eHUOWG2%2BopxtWeKBtAlT0AWpPtYcAiEAqrRG7BFrfmpuPqroOKJpWzsUjKLcDR%2FCQYF1wSrOZS8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxQJHGU2wDvHLlEbCrcAw9vBgzCcLuj6C0yzwXOHcQDFiiZo6ssCdrxUv5rXLh1V%2BCQwgRa9DMXJBP%2FLBrBvAwpVTHKAX0KT7fMZgBpMA1GfOQq7jG1jzIcNf%2FIrLb6z5GGUc93dAcyCqeQD9v3TXCtBD37gU3h3zGHYC%2BzElPZcOHV1SYOkw%2BB61aCbh88iwu9Y0r9BRWoC43%2FCJFyR%2BR3sntyk4jHezQRIaAuvUKByBgRMpxm7Vg2uUjahcuUcRk07yBRAZ7pgNOfJ3kgMxeC0999QRs9cf5s8YVDXweelX8gXe3dNu4jzeg9SYQyWfafvdSnIM3fvFtdH8iORhqGZz1Ph1VIL8Z5UfpoRL8aGEHnf4h05I0sbZ9YO6uRE40JoNPP8gVoF40qIe8gBQ6SdT8Lrj5uzhRyah4CMLXJJAwA%2FSq9HfH%2BGBn%2FVJBz%2BjcQXOQFFq4FpNFzD4UHi2odSg35o3PnbxGU7GkGA9q1e5JWD8oYz6%2Fzf53%2BVWZtCtP9n3yr9Wf7%2BLBbh1N5WAJRjcFS%2F1wGGN6rnGwSkuwQaqvxPb4h2%2Bu0iMkPh3eozbS%2Frc7PnmPR%2FsBydVX0tEFI08PvMAukS623GcBiUMthwetDBlLDF1JQEyLPgHNJjkC5r2rUKjFDH8I8MMby5sEGOqUBNg3AnjNvlvBCfeG7NSWIksISQhhWb%2FXm9lFB60cdHU2YBIiEj7FS9%2BvhB8xz0UFORWes4e42J1VEGXQ593nc3%2FWsmax6IfxO8cl9hsg1cCHjb7%2Fhv8B5QQFqsn1huOv%2B2HcliXPYAB8PFUW08Keil6ho30N5dR60RxbDkYhQ44lz3G5O1KkcaQFqFRVN%2BPrToHcmx3yUDsFKX6tHcnNAsmnLK4%2B5&X-Amz-Signature=d5b595461070d4908a2f05637e2fdc80805597f8ac02cb485595266b5cdfedf4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JEYEN6%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFypxPcHSjCkGvYC%2Fbc%2F5Np2ylzR98JYGCnKNp3d0ax4AiEA71nvaVC6grQGPVC8cv7fWaHqawpq23C5DsYUo9prv%2BUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZ3HkVHhLfoZjrJFSrcAyQ3JVLDxO4SX1OwZ9XwrPrRLLU6CxWAhVjvxpum6Wn5jxDgCWyM5oAlBfhPvqaQ5kYf2gx6y0qIAcsk7KVuRWO23pxgObfYac%2B%2BQ3EEa%2BSmuIL3AIM0JahhFNW7ulDbucSDZ2f5aSzJHuCzzXeNn66vQuC%2BCwhFNVTMQjmB%2FNzaGjahj%2B3TVHYTKbYZ7emjlPIvEwgIttZbVlP%2FL0TdCfJtL0IqwTZzuZwq84iFfmSEsl9eLQS%2BZXtus5R20VCYe1Vk5gGoLb20s4%2Ba50YluoJ%2BMG%2BwOzsMoxJZxjTPm5dFl%2BjoK8SKT4DmxNvEwpmp8ySMyctBCbdTiMMGuC4nuUjfCBeGcmChy2g6Q3ZqDHXScKIFepCTJQ0pGexR1NK95ZMGEjC5rBz%2BjkeOnyyLGkKbn36tNxfIl6rZNDOBZKKxRnVJ%2FhNCFbS8DGKRIS7oxvv%2F3MgaZZYnRjkvevoHHIQgte3dDQnCD0Fng4ODIDSCgBZXI3xGeSwK0%2Ftqs7Q1ImVfcVJSqx4cTg6gjhsmaGc2TthJZJ4T6gusymrd3MvNkr%2Bby9cvc8c87EPiwBJTVbUmTOUJw1Vp%2BC%2FyrrOUjnEV9UBdBJxsNvtYz3V%2FXo9hDEd5Y43hdlkd0XTgMLnx5sEGOqUBI3zTualUrDTiwl5qSBsDWJN%2BWBuNO2flPSULemlMIjg9F5Eiu21CKD%2BuYwDclfo%2FGUGvw3myzUCQoPyPdDGmsIVW8T0Ldu%2F167ERFn0JSffxUqyQ7u%2FSDrh24%2FXwRuBKNfdkZ%2BSMyTN1jSUIHUKcNbwwmFFoAR0kMqKhoaI5i%2BdyBUhXT8MaoCT2Hf5%2Bq6LL3vagLgM%2FG4hjS%2Bo9PaPudspo1aoc&X-Amz-Signature=817c9fb506bca5cfce7ec649a7f86970749ee6536f4fb7e32b9db4493a184058&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WXKFICI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1X7yVYwaHW%2Bk5XC50gKvY7NwNGQC21DWPipsj9CqP3AIhAKJtxWc8wt2w0EzL4TgSBUsykZIyLm%2FrcdYgXaevJgo8KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGPbYvTnD3upV2dZMq3APva%2BPar8fYLJuHZPuYsicHwnd8%2Fy1ejbQQbDdwuXDDMd8%2FFEVG12kEpWOFRcJOKmILv7DaVRBzb1tw7BuvfifIMeSQsErA3NIA8SPwfo0zWVso0EnGNMSf1s4MTPNRjaPuloqxdv34RmXD5RvK%2F6Uj9qMvrKlVZrfRGdW3xboh%2Fp8fVvvZLvYx8A1xvEzgsbfNYWHdaCDaDotu74jhWhJN6wrZd6VGh%2B5b0Gxh7xGDqvK4WFCVuszd6T9NfEGpzc64S4JfytuDNKvHlLNDQth2aXhbVz%2BBtI5jCrI2uMnrtxg9yT0%2FfMk9f03oHjxFkhzE0HcP92tHU4ZdsOfK9bP9RxTumG2roeE%2BIPzWsKkTQdakJpjD0pKjl919DP7UMNI7JqoEqy6y1U6DTFQE52xXr3V9%2Bhh4chijjLvclclg25N5DlLWvr8QYYjTzpiRkJ43Qt0aNdMy8QQnOOU%2FZ2Zqlr%2FuJwfrMgwIE6IGVfaDTHLaZEMCbrHdp21Zkjd9te8d7IMYgVdluikoN8%2FXzFhYam8MHFnwwMZu89om67EIR5212mCSwONuR0INgsITbOy5vaaSGH7aGuxXxfxwLr9jw0pBzyuISToJZlGWMzBib3nhmeCDzKT6LX7KOTD%2F8ebBBjqkASbtwa5taJuJMZxj2Uzt5Xqjr1izpbGrqkNIoZLDkiY5Mj0%2FT9V3EL1onIo1qls64Ln%2B9g99hbUqwcsJ6wmLOvWOX9NEhiRZnJJjZueZyG3co1xzufjvUlncCJ8d%2BXi9hIbS3RPbHd4at1Px%2FXMLl1eIzfj9FHNKlOgkHgiNepKzWLKG0fkKHujm7Cc0w4uwSnZjzEdUgfvOF5g8S1bQE93gQXFM&X-Amz-Signature=8a5c48bdc8ae8655d2a0d5fc6091e32eb75f2112de843dbd6bf450509c599aae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
