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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247AV4YZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG4dt5JYn%2BOu3OV%2FsojUFl65bYnAfaaFYims0L5%2FIXtAiB3u5b%2BxCqxAIQKXZUZicpm47jmSJ93janvMPuX%2BoaTviqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmFJFpSWLKJ1T5ILTKtwDjjg8aotCuIjOSBAvD5U2BNsSZmgZMYAyrEl000dCrey00RbamFmn2SfLOn0s2iKmD1BgvPemyfKkAsUVe42h3lIW84VFPT6SheJHFoo%2FnH%2B3vCB6FCAia%2FcALjZReuHD3LjLVng6kXsCmagRJcoNlqMB8EV3ZIROlVCTRD%2BU3sPPTdYSnnNlMAD3eYm3ofKZlodiC5GtF4Bnu2cXeLY1%2B3DcszacB85y1oOYSAcA3%2F4nI9r1bDdW18VQh0heVQoGQMmIkvmu8XGrHvE6IbUv95pvdyVEBuESvaJ8DKaOUEh74BcnFx9Y7FHkDcbuXQC2%2FoLmbt9Din4buYgrniTIlyYFO1d1y%2FznTPSM1EUtv96CwRJpOqbFPx7wxhS7HWgZhj0Xp%2BDOu%2FO5Tj7dKxTm%2FLaZo%2FvskAVoUz6Fr9UzAhqnwj3hTDdS3jpJGJLIz%2BNg9raeCi6pqYTjtVDkWy4jFF9LY9RF4hguLSSWXLtdDgDJP62eW33EFg6vQqqdmxf5fju5mTv36zSC1B4QSbPjuoScv%2B5MQjnVhxXsqimDmCGvCWqbGudAKHYMLJzf5mo3d2ozd6CfQeg5Ki5UB0NpLy2Ma%2BbP0FrW1GNYutzaRR8wIJoNrfiIOg4TAFwwlOXnvQY6pgFMzuhMGEPmM5%2FTMe0WkgU9kxgXCJQ1E1%2BLHNbI1kzhebAQ04UZLrx%2BEhQaMNugr30wrVMZgCIhZ6QAxWN9wKHGiPb%2FCTLFqcsRGq3lwD0dHDHjVQsWP3ijNS3yfVUg0YoZjDez76COGC36j%2FKpdV5CIYRnXIL2v70vnvKNMjrXJ%2FKPyXoAw1SalDNsoWg0ZwYhRbDTCg5uzaxm0%2FDxE0xpa0lofMYs&X-Amz-Signature=84644571532655ba1db12c747d32df9ff3804a3d89b53f4043b1cbe250fd545b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247AV4YZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG4dt5JYn%2BOu3OV%2FsojUFl65bYnAfaaFYims0L5%2FIXtAiB3u5b%2BxCqxAIQKXZUZicpm47jmSJ93janvMPuX%2BoaTviqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmFJFpSWLKJ1T5ILTKtwDjjg8aotCuIjOSBAvD5U2BNsSZmgZMYAyrEl000dCrey00RbamFmn2SfLOn0s2iKmD1BgvPemyfKkAsUVe42h3lIW84VFPT6SheJHFoo%2FnH%2B3vCB6FCAia%2FcALjZReuHD3LjLVng6kXsCmagRJcoNlqMB8EV3ZIROlVCTRD%2BU3sPPTdYSnnNlMAD3eYm3ofKZlodiC5GtF4Bnu2cXeLY1%2B3DcszacB85y1oOYSAcA3%2F4nI9r1bDdW18VQh0heVQoGQMmIkvmu8XGrHvE6IbUv95pvdyVEBuESvaJ8DKaOUEh74BcnFx9Y7FHkDcbuXQC2%2FoLmbt9Din4buYgrniTIlyYFO1d1y%2FznTPSM1EUtv96CwRJpOqbFPx7wxhS7HWgZhj0Xp%2BDOu%2FO5Tj7dKxTm%2FLaZo%2FvskAVoUz6Fr9UzAhqnwj3hTDdS3jpJGJLIz%2BNg9raeCi6pqYTjtVDkWy4jFF9LY9RF4hguLSSWXLtdDgDJP62eW33EFg6vQqqdmxf5fju5mTv36zSC1B4QSbPjuoScv%2B5MQjnVhxXsqimDmCGvCWqbGudAKHYMLJzf5mo3d2ozd6CfQeg5Ki5UB0NpLy2Ma%2BbP0FrW1GNYutzaRR8wIJoNrfiIOg4TAFwwlOXnvQY6pgFMzuhMGEPmM5%2FTMe0WkgU9kxgXCJQ1E1%2BLHNbI1kzhebAQ04UZLrx%2BEhQaMNugr30wrVMZgCIhZ6QAxWN9wKHGiPb%2FCTLFqcsRGq3lwD0dHDHjVQsWP3ijNS3yfVUg0YoZjDez76COGC36j%2FKpdV5CIYRnXIL2v70vnvKNMjrXJ%2FKPyXoAw1SalDNsoWg0ZwYhRbDTCg5uzaxm0%2FDxE0xpa0lofMYs&X-Amz-Signature=c436057756efd08200bb9c3840fbd760d4c66d9f359e8e398360cf9f3e4d4f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNCE2FJX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB5B8vdbhnVcGMPSTJVNlYRI2V5Pq17FbxqCq0z5HVKgIgD099xpAHzKpGfIx%2BgRzIAPDujrJRxu6%2FAw9%2B7OJ5TKIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrwHIiJcb29EnSkNSrcA0pXCmZycDpQS8g1WOWJ%2B%2FzhuAeZ1WXsOxNGWZ06CbtAPUxCcWSojDbNnc29A2zCrPIAwQkXVvJRAgpHXWdSbM0A%2BsRvFPJJMjYTsHzNcgGVQbnIwS7RM3UyZfT7fDzKE76nV5PYUkg80kG%2FDIfgu2Fpr9qY%2BHy8g%2FkOGju5qjd70HPIiMH3sFXcjuc27q91uhfZ8337zYhW00kYAljDfuPkx6Ddvivj3i0oeG51o6mxVw5ybR7IvInW%2B1LQr8pvrd9KJDXB49YG4Sdrl4%2F5h89QlPu3NdgYgoksyZgJW1MQDZxQrXvf6qbw29drDGWRZkPSg6EKPgRObOJtsTi35lT5oBVHIApUWM8TOMW6ZXPiFmAs3GfigN0PjuVAWXuN27k7nxr2LnabTax%2BZ1edCh7fobRQv%2Fjpf9Qra4eJaWIu9gzq8i51tGi3dxvZ7PL1ATfpZlaRwvtMpOt2%2FJ36tHIA6tOvL36M0OhasmjH0Xmr3aBB5GawJTv9diktdoX6vn%2FnsnzKWyzHSRu1aIBrGW%2FEDFpkiDbJE5lm4EQ4zIHek%2B%2Badx%2FO8XF4m1tzPOTvM%2FPC6BRWKyvH1z7QuC2f93%2FU5fAAFwNj2sFxz1k3YGkLbbzJvmCv%2FHRHDSuMMMCd6L0GOqUBhLxcy%2BvzBouW2tAdiVaeO3HKfSYOnggM8fjdj7yHYT4qDSzazDUnEiqXwofxMb1W77dcD2ckz4DJD0TUkT2eMz8FyItbWS7MWHKyqz37CcwjPbpQeDjByz08ZqbFVy%2FcyBKTZ2mgbjuWrT7GTbQyZeTl9tq4zj1q9c%2FakX6Ky5%2BeQy9SWjUVKmvjPNSsmbcE8hdM8k8%2F%2Bio9%2BVw9y5eReALTiUkb&X-Amz-Signature=e12306ab1df7edc781b7c4a6aaa2db83673e34cc1d1e9cdea4409eac110cd76e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624SOFMG7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvS8n%2F%2FIiPIh3JTw8xTtVo7YnQNydOgUU7KFwyysKSCwIgGaZKxgMpf6he4iKQ3qQnpS6cU25LfGw4J%2F74gErB190qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGSdbRhYyNANSRZnyrcAwPZIdALjogH20Me6jD3BhZ%2FQY8bv%2FiMBAiwAeWMyqwoMqIw3G3DTe10ixjjfw4JepeA%2FUrNn6rAcU77xTaOn703Drr6Kxp2NASx5LIwr7V9I%2B%2FrbSyF1xfNNov1nIQ1ug0Lp8wMzQmfBE590IApZd%2B%2BSSzTclVOfhjgGq%2FZr%2BIhHlbFXFbBHNx0K0igOt4Y5s3IMxuV7yao9rTjpRqGmXdW7LSZInKr8z06V8V4At1pXxhhH4o7rb64kMy6VUqVDiMHwGUw3oKj9pu8yMWrj7D6jbwYBu2%2BdGuSbWe8D4q1KFsGUCm4I%2BgitQwCDC7I6kKA669dUbWoppuAY7%2BMNXcEi4%2FTzTxo4BFF312YoDqoHqid9T8hhh0W2Bwl%2FyzHh%2FOqelI9j9YlgUQ5Yyj91P6rCK5CKglgZh%2BBrREkHHHEVMtevU%2FA4sdZ5xvvPErVktW751pC%2BaLPRcu04A4ta2fFqz%2BV5AHpUW0POaw4ivqUFgtT6YYERnf6Wn0vPBcQDDyvlHareymKlY7LPUHXWESUS71mgmu%2FyaNtzZB5wdTI8zRZSJEGeNZMKX4PZ4%2BojenkKqikzXYsMARYOkuLcQCGltZafOpWC3RcGcVI3HJT%2FuM%2BOlLNikL0ihwyMO636L0GOqUBDIHjfwCtKMMGr38UFHqxQ1sqXly%2FPYPuAJCFit1jrYTwnRR0UvNW%2B7szwLXroA6unVX%2BblfE4WUJkyj3uvKLAwSTCToJecq2%2FY%2FLYqCTaDfvh55fkd1%2F6LdlmCnyXBrhhkMwdAr66i8K1%2FR0slDYlFaoADHSaBWSNO%2FvKLMS6JYX7UwsAaP%2BwKVCUmEMWlgZ8tL%2B%2FMU2Yflz%2FZGkTnEC4bjoB%2Bhj&X-Amz-Signature=9fdbf1214478e3f922c89118682afd20d119ad83fc63814560a202fcd5bed05f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466247AV4YZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG4dt5JYn%2BOu3OV%2FsojUFl65bYnAfaaFYims0L5%2FIXtAiB3u5b%2BxCqxAIQKXZUZicpm47jmSJ93janvMPuX%2BoaTviqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmFJFpSWLKJ1T5ILTKtwDjjg8aotCuIjOSBAvD5U2BNsSZmgZMYAyrEl000dCrey00RbamFmn2SfLOn0s2iKmD1BgvPemyfKkAsUVe42h3lIW84VFPT6SheJHFoo%2FnH%2B3vCB6FCAia%2FcALjZReuHD3LjLVng6kXsCmagRJcoNlqMB8EV3ZIROlVCTRD%2BU3sPPTdYSnnNlMAD3eYm3ofKZlodiC5GtF4Bnu2cXeLY1%2B3DcszacB85y1oOYSAcA3%2F4nI9r1bDdW18VQh0heVQoGQMmIkvmu8XGrHvE6IbUv95pvdyVEBuESvaJ8DKaOUEh74BcnFx9Y7FHkDcbuXQC2%2FoLmbt9Din4buYgrniTIlyYFO1d1y%2FznTPSM1EUtv96CwRJpOqbFPx7wxhS7HWgZhj0Xp%2BDOu%2FO5Tj7dKxTm%2FLaZo%2FvskAVoUz6Fr9UzAhqnwj3hTDdS3jpJGJLIz%2BNg9raeCi6pqYTjtVDkWy4jFF9LY9RF4hguLSSWXLtdDgDJP62eW33EFg6vQqqdmxf5fju5mTv36zSC1B4QSbPjuoScv%2B5MQjnVhxXsqimDmCGvCWqbGudAKHYMLJzf5mo3d2ozd6CfQeg5Ki5UB0NpLy2Ma%2BbP0FrW1GNYutzaRR8wIJoNrfiIOg4TAFwwlOXnvQY6pgFMzuhMGEPmM5%2FTMe0WkgU9kxgXCJQ1E1%2BLHNbI1kzhebAQ04UZLrx%2BEhQaMNugr30wrVMZgCIhZ6QAxWN9wKHGiPb%2FCTLFqcsRGq3lwD0dHDHjVQsWP3ijNS3yfVUg0YoZjDez76COGC36j%2FKpdV5CIYRnXIL2v70vnvKNMjrXJ%2FKPyXoAw1SalDNsoWg0ZwYhRbDTCg5uzaxm0%2FDxE0xpa0lofMYs&X-Amz-Signature=d1bbda36457543db15ce6ac11817f02d5ba855dfa60e52883c376704055ff5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
