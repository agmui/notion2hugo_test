---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5ZYRRD%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGRn%2FHiRtoh5k9Xt9D34xDgLQqtmJK9GFn2JUedXZckpAiEApxjrEK8SdDBm57s3ybaFc9%2FEQE2DbtcOE2lCC6N1Rfgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKnI5mPNtbeQY50dnCrcA%2Fv1x%2FCCYaPppwcgfZaL8D68CgcYILZwVnSKZLxErjidAnGxTjLwLdOzbcjncGlMbiCN%2F1zcVOMzolGp9FU9YmGHuo7PyoiBjXU8SmLJbj571Telw7ExfER5xTp6ip%2BqHJsEfm1b7Dowb2AOG9fuRydkq7LvLtOkoKdK%2BXVP%2Fwpe1y6%2FFUxIIelK1s7q9Y1b31Qwm1INZZTewZVBIBkCiT7k7LT0VLQeBmM1%2BQXnX5mG5tCs8o5CU0cZvvJxdmevpjnxByOwWBNMPIGxX04sxCG1UOhmAU%2FweacMmYwALFMF7jkEDVPvgP43j84BdlCNpaJsSaHHVdTfTeNFgxUmnaVtzyxw%2F%2Bw%2FseSHi%2BvmBhA1hisC3yfytrjtx%2Fe5T2v3Gv1u0eDMMRsQ0um83OJk0td0tdGDnfxobIABPAwV8CCMb0VN9sJgSGuLSUVUb4D2yLH%2F5VtN2UfR3LwJ96ZyUkcvZ02eykcqpeHM%2B0eynlRUfGjKjmqrLv5QN6ZObO62kSCWuNGRbBXU1ME9O5%2ByDPA%2BEaG8WI9P7xJcPxrCYguSJAalAUYfGJFNb30P14nA7La2u3U4%2BDtXK8i8QL%2BRqj94OKIrVD7rEoTPOY9hEtgX9DSOdA5vARpeZ3jEMIzbg80GOqUB64notppq%2FPT0nHh10FSzTkLqvhpiPPhybbqSbvGrfc%2BDaoWeC2m6c2R%2F40TwjCFJn0mvQ93wHRVG%2BUsd0fmLS9ikd507kBARp%2F5ijI6YrMwLWQzNf%2B%2BkyupDOkST0FXX07UpdcAjx6jyG2vyM9KNDXmxfJfzF%2BbFzR7yax0ZrvZwmbElaXRNStu%2BwEZ1pZf%2BM2UeJQOBOIWOztfhaVm55hJE2N03&X-Amz-Signature=4a9b64ef0fed337262307575d25bff67dd9fe7a6b78abb71d511f480a4279aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5ZYRRD%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGRn%2FHiRtoh5k9Xt9D34xDgLQqtmJK9GFn2JUedXZckpAiEApxjrEK8SdDBm57s3ybaFc9%2FEQE2DbtcOE2lCC6N1Rfgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKnI5mPNtbeQY50dnCrcA%2Fv1x%2FCCYaPppwcgfZaL8D68CgcYILZwVnSKZLxErjidAnGxTjLwLdOzbcjncGlMbiCN%2F1zcVOMzolGp9FU9YmGHuo7PyoiBjXU8SmLJbj571Telw7ExfER5xTp6ip%2BqHJsEfm1b7Dowb2AOG9fuRydkq7LvLtOkoKdK%2BXVP%2Fwpe1y6%2FFUxIIelK1s7q9Y1b31Qwm1INZZTewZVBIBkCiT7k7LT0VLQeBmM1%2BQXnX5mG5tCs8o5CU0cZvvJxdmevpjnxByOwWBNMPIGxX04sxCG1UOhmAU%2FweacMmYwALFMF7jkEDVPvgP43j84BdlCNpaJsSaHHVdTfTeNFgxUmnaVtzyxw%2F%2Bw%2FseSHi%2BvmBhA1hisC3yfytrjtx%2Fe5T2v3Gv1u0eDMMRsQ0um83OJk0td0tdGDnfxobIABPAwV8CCMb0VN9sJgSGuLSUVUb4D2yLH%2F5VtN2UfR3LwJ96ZyUkcvZ02eykcqpeHM%2B0eynlRUfGjKjmqrLv5QN6ZObO62kSCWuNGRbBXU1ME9O5%2ByDPA%2BEaG8WI9P7xJcPxrCYguSJAalAUYfGJFNb30P14nA7La2u3U4%2BDtXK8i8QL%2BRqj94OKIrVD7rEoTPOY9hEtgX9DSOdA5vARpeZ3jEMIzbg80GOqUB64notppq%2FPT0nHh10FSzTkLqvhpiPPhybbqSbvGrfc%2BDaoWeC2m6c2R%2F40TwjCFJn0mvQ93wHRVG%2BUsd0fmLS9ikd507kBARp%2F5ijI6YrMwLWQzNf%2B%2BkyupDOkST0FXX07UpdcAjx6jyG2vyM9KNDXmxfJfzF%2BbFzR7yax0ZrvZwmbElaXRNStu%2BwEZ1pZf%2BM2UeJQOBOIWOztfhaVm55hJE2N03&X-Amz-Signature=564e729a0eecf0a260738f63abd5ca834fbd9152d2c68a598b097dda3c88b842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5ZYRRD%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGRn%2FHiRtoh5k9Xt9D34xDgLQqtmJK9GFn2JUedXZckpAiEApxjrEK8SdDBm57s3ybaFc9%2FEQE2DbtcOE2lCC6N1Rfgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKnI5mPNtbeQY50dnCrcA%2Fv1x%2FCCYaPppwcgfZaL8D68CgcYILZwVnSKZLxErjidAnGxTjLwLdOzbcjncGlMbiCN%2F1zcVOMzolGp9FU9YmGHuo7PyoiBjXU8SmLJbj571Telw7ExfER5xTp6ip%2BqHJsEfm1b7Dowb2AOG9fuRydkq7LvLtOkoKdK%2BXVP%2Fwpe1y6%2FFUxIIelK1s7q9Y1b31Qwm1INZZTewZVBIBkCiT7k7LT0VLQeBmM1%2BQXnX5mG5tCs8o5CU0cZvvJxdmevpjnxByOwWBNMPIGxX04sxCG1UOhmAU%2FweacMmYwALFMF7jkEDVPvgP43j84BdlCNpaJsSaHHVdTfTeNFgxUmnaVtzyxw%2F%2Bw%2FseSHi%2BvmBhA1hisC3yfytrjtx%2Fe5T2v3Gv1u0eDMMRsQ0um83OJk0td0tdGDnfxobIABPAwV8CCMb0VN9sJgSGuLSUVUb4D2yLH%2F5VtN2UfR3LwJ96ZyUkcvZ02eykcqpeHM%2B0eynlRUfGjKjmqrLv5QN6ZObO62kSCWuNGRbBXU1ME9O5%2ByDPA%2BEaG8WI9P7xJcPxrCYguSJAalAUYfGJFNb30P14nA7La2u3U4%2BDtXK8i8QL%2BRqj94OKIrVD7rEoTPOY9hEtgX9DSOdA5vARpeZ3jEMIzbg80GOqUB64notppq%2FPT0nHh10FSzTkLqvhpiPPhybbqSbvGrfc%2BDaoWeC2m6c2R%2F40TwjCFJn0mvQ93wHRVG%2BUsd0fmLS9ikd507kBARp%2F5ijI6YrMwLWQzNf%2B%2BkyupDOkST0FXX07UpdcAjx6jyG2vyM9KNDXmxfJfzF%2BbFzR7yax0ZrvZwmbElaXRNStu%2BwEZ1pZf%2BM2UeJQOBOIWOztfhaVm55hJE2N03&X-Amz-Signature=67b93854ed3c20b55b8f16bbb248f1ee9dba5267a38101c0b42ae3d6bb35b9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJOQ2JP%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBffDX9JveNHIGRN7O75fEZTF2yNvk2V3IxcwT69IEH8AiACpaU930G87%2BanUS2%2FI0U%2BUP7EZnCndvW6xg0UR9e8%2Byr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMaCzUuJ6DsdPyCZrNKtwDZ7PgHNnMHeu%2BAwyEfXVWOEZXOujuKU1mRiESpWaGzY35nLCUGqZ24UXlqKLD5bdpiZf2onBUjQya%2BjU%2Ff0eMZCDK8r3vwYmL4hX57zc3S0%2F8KJwnC1aAUpiifgytgJMmMOcv2KJaH%2BM%2BvuBUEulxvgm1JiGtj24Ew3Nn8sWmcR5Gv7JS8l2iKVsq8QBWf9Tg3qdcouZrbDsL9vYDXZmVUdqoee323P0myrOMQanYMlHJsmNffWAfbGbKQEEzWsW7QM4M7F1O4YF%2FsIwjwECN%2FHxTuE23Z1B8Uv7UZQ24GD%2BkGGHN73NIUs0eZ4reQ2gHe8dyqhIaS9POsotiUcLySG3KLf96E9bbZloYulARNTi9nxaBJzEWJpxlcNbTA49Lh4D3K3OWPDoibfEMSKJBW%2BsrFyluAg2iPzVxXPCSQBtjMA6Hu9nJ55vco61ovOLDGIU%2B%2BMlsXzCs2qAEfrVe3WD8wMm6TwunxTUqZp9BtAt7jkSMVYOC5kNXFRQKjY%2FGjBqJ2MRhoJY7ptHYASPaqdD7p7j29mdLPHX6%2FJt7WMsSqK0cufYuh7gTWbQKg2CxLpU8tsj9eJRTJHQHBLDAvVN1bYhkknUY5OlJr241jgCw6Y28ET%2BhIhKZbj4wqtmDzQY6pgHXALCFXO%2BQNZ1hLyOBp%2BaBKR3FOslmOie7tSuGej0pfC5CGrRehHvMoUN%2FmvBxBSw%2FFOva5jTl7%2BViw86ivxXe767z9Fl2ANLu2DUGFSi6J%2BczI8sFXQzwqeFu5KGdiTYSOFYC%2FxL4C6nHMqvkXst1zcB9XzR9i%2BheKPbSaUWitDVdOb1Ghqu1H3dyaLIbI%2FHjcskNg2wNdzs02spuCntLPlkgln9g&X-Amz-Signature=aad98f036a4b40bc1b0163d0533aaa65e39581535ff27dca5ff858507cabcde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQISTPDM%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDWs1%2BYd8%2FgPFfRu3YqEvJVsAm28lgfZjuMT4luJ%2FKx7AiAb0LltXWiS37Et1WWp9OCnp25RZmqL0IXx0mm2SgCi%2Fyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMsF2OmO2tNLTw87UJKtwDHwQpS94wkzWYmU6YCi5kuZaoyoii1JgASPmlwakyn8eIbXLKBs7PsdrhAtnqxbQPTbWiDfr%2FNRVHo6Ub8PjGqfhhNbMVwy45ZLOcm4Zcuz7yJPTRgjCuxk92Ooi5lBdxdQvCvl30CTiXGfQfrlrilRiQNE49RXU8vnV0Njyb7EwWp1SufyG1RSpwJLVNWRWNPXeRhUVCEsiPXQUV4KFV9iYndsAYatxejZIZOzKhQKKw%2BmSqIk0MqcQ8KtpJ0lWlCYQMPyV2x%2FVizpZ9mJYHbJukOe1b6akD2Af1Bxdp4%2BsUG9wdOcfStIiOzSMQ%2FGeCI41PM0EX5FyxIRVWCm5MUfg9hw5ra3yPHfcTXsPoN5swAMcnO%2FPgP4fKdTZoH6b1uVYuaSJCHFqzXl4BhNlV3M9KcpmNuDqHTKjmdOFXlXbsF8iviNWtsDKfP6pTUCFDhonpYWaa5e3GZS0Z4hW%2F6ltNlc3C3GRd9KXt3M4Dt2AgzKZEtmO047Fab9nN6eUm9hIc4jL0td3dNBkivm3p9W%2BIqchPRrlP1iZYxZT8BvX1YCvcTttKlQHWpyyC4nF0Unux7TM5%2F5BVSlaQSzsoeBRu3huIXC89wyf9e8WjLIFzky2EJR50o9jIOiwwjNqDzQY6pgHGt12Ji%2BsRU0DZzUQzJeVUXYc6EpZXYZv52qPZGFbziWtS1XUMAwVpvz6twhhCBUDtt99ANea3ryQB56cNe4FxTx%2FL5dqTiolc591oooZ2DF%2Bn18bNFXQqq7DwFuwIMkDlYH218gw%2Bp0%2FyAHiUTH6vV9tXyhMkLnuuiV7N%2BzqPjxbwubVTnhclAQmVOmGEemh9PUBCjYm4NHcgojJkDVejWYne7AdX&X-Amz-Signature=72c7b817eb8b1b2112052eeacd6fbf71b4d367b5c04c581c3c772498ebd4bd0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE5ZYRRD%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGRn%2FHiRtoh5k9Xt9D34xDgLQqtmJK9GFn2JUedXZckpAiEApxjrEK8SdDBm57s3ybaFc9%2FEQE2DbtcOE2lCC6N1Rfgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKnI5mPNtbeQY50dnCrcA%2Fv1x%2FCCYaPppwcgfZaL8D68CgcYILZwVnSKZLxErjidAnGxTjLwLdOzbcjncGlMbiCN%2F1zcVOMzolGp9FU9YmGHuo7PyoiBjXU8SmLJbj571Telw7ExfER5xTp6ip%2BqHJsEfm1b7Dowb2AOG9fuRydkq7LvLtOkoKdK%2BXVP%2Fwpe1y6%2FFUxIIelK1s7q9Y1b31Qwm1INZZTewZVBIBkCiT7k7LT0VLQeBmM1%2BQXnX5mG5tCs8o5CU0cZvvJxdmevpjnxByOwWBNMPIGxX04sxCG1UOhmAU%2FweacMmYwALFMF7jkEDVPvgP43j84BdlCNpaJsSaHHVdTfTeNFgxUmnaVtzyxw%2F%2Bw%2FseSHi%2BvmBhA1hisC3yfytrjtx%2Fe5T2v3Gv1u0eDMMRsQ0um83OJk0td0tdGDnfxobIABPAwV8CCMb0VN9sJgSGuLSUVUb4D2yLH%2F5VtN2UfR3LwJ96ZyUkcvZ02eykcqpeHM%2B0eynlRUfGjKjmqrLv5QN6ZObO62kSCWuNGRbBXU1ME9O5%2ByDPA%2BEaG8WI9P7xJcPxrCYguSJAalAUYfGJFNb30P14nA7La2u3U4%2BDtXK8i8QL%2BRqj94OKIrVD7rEoTPOY9hEtgX9DSOdA5vARpeZ3jEMIzbg80GOqUB64notppq%2FPT0nHh10FSzTkLqvhpiPPhybbqSbvGrfc%2BDaoWeC2m6c2R%2F40TwjCFJn0mvQ93wHRVG%2BUsd0fmLS9ikd507kBARp%2F5ijI6YrMwLWQzNf%2B%2BkyupDOkST0FXX07UpdcAjx6jyG2vyM9KNDXmxfJfzF%2BbFzR7yax0ZrvZwmbElaXRNStu%2BwEZ1pZf%2BM2UeJQOBOIWOztfhaVm55hJE2N03&X-Amz-Signature=b23d0aa2fa877ab55748881950a7156baf38e66dd6277b289556d958b19b2216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
