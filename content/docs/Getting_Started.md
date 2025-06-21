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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYVPQZD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe0d4pAqNuqHt12FMhQF42FDd565sdggbkKpyIcRNPqAIgPnf%2Fv57uEg9Q%2F2%2BbJqT%2BnxJdmODz8HDR0R%2Fu%2F89GzGsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2F8dIzcSsH96JzIyrcA3JzyBspACqEQeYaosDgZoavmR8rzQhUW%2FSuCQUyuBb9sADESkvudpxoz4n130HEnYV0HNJXKpCoN%2F7eeZBozNX1rdjyzmlGLYAwuy8k7df0XbDmaL6k6pYUbPxMlZqrGt6QZRUFfKIz9Fh1t1y4rNcWnlj9oEBTMwyMbHhwyVo7POEY%2Fc8YhWKAlb2GDT8JsRtUsldnJHloEMtzjCiac3DMUk3ICFnBVibHa0BL62EVXNKLuM3Imtz%2BhUzX8pXviJ5Jy1k6Dao7TDICiZTpSwILgJtugnXY%2FReM1tC23RnXZxJkvu6uZuLIo12LyAHyR8GNSM8wzepO0kPyljYk26Ye3nma80BpO2f9iXaniMKgmcbkQmoz4%2BtSJKHoLFoKAj6c7KzNkpUFC8egTD3KgfkZV8SYpitvdnLrOCDvbdxsUHDz6h%2FKc72t0uRoVuzcfz525B5dZgxdGCHaVIfYinTtaDTEIeRVyZ7Xb3WhDLCSh%2BJqCktfMpezSwu7VYX1t0gf7AeNFVccKfGxSJjL35XtRmDwy0wCOQmuS6A6BMP7xtHxQW7wQao%2Bl9OhSIIekre4SS0nvFAbTI37xf4%2BqjQ8x5x027rqc0fBF2veaQN4ShxGmJ8tNmNQlMEOMLav2MIGOqUBQ74YDpe2OxF%2BUS2UiVnJkkrkNa50yazaGLW2YPXnlqV%2FoekxWKSzr9Ml4RmpyzmZw7CTLJNvC74vN9cnIl1GtZOqx%2BuPSoADN4cvw4ykNQC%2F1u0pIz%2BWncKV%2F3yNf2yzdcCNBv4fgbVdizpU%2FMkrCTE2AJyVqpvHRMjw5Y9uanN7Q5NF6xhlg%2FQkTZlRlc1PbGa6qFAShJH0%2FgALUq1D90YuS8nY&X-Amz-Signature=cce9fec0300109fcab04970f99864d0f4bd9966154d914c99ea08b1c5e9b6bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYVPQZD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe0d4pAqNuqHt12FMhQF42FDd565sdggbkKpyIcRNPqAIgPnf%2Fv57uEg9Q%2F2%2BbJqT%2BnxJdmODz8HDR0R%2Fu%2F89GzGsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2F8dIzcSsH96JzIyrcA3JzyBspACqEQeYaosDgZoavmR8rzQhUW%2FSuCQUyuBb9sADESkvudpxoz4n130HEnYV0HNJXKpCoN%2F7eeZBozNX1rdjyzmlGLYAwuy8k7df0XbDmaL6k6pYUbPxMlZqrGt6QZRUFfKIz9Fh1t1y4rNcWnlj9oEBTMwyMbHhwyVo7POEY%2Fc8YhWKAlb2GDT8JsRtUsldnJHloEMtzjCiac3DMUk3ICFnBVibHa0BL62EVXNKLuM3Imtz%2BhUzX8pXviJ5Jy1k6Dao7TDICiZTpSwILgJtugnXY%2FReM1tC23RnXZxJkvu6uZuLIo12LyAHyR8GNSM8wzepO0kPyljYk26Ye3nma80BpO2f9iXaniMKgmcbkQmoz4%2BtSJKHoLFoKAj6c7KzNkpUFC8egTD3KgfkZV8SYpitvdnLrOCDvbdxsUHDz6h%2FKc72t0uRoVuzcfz525B5dZgxdGCHaVIfYinTtaDTEIeRVyZ7Xb3WhDLCSh%2BJqCktfMpezSwu7VYX1t0gf7AeNFVccKfGxSJjL35XtRmDwy0wCOQmuS6A6BMP7xtHxQW7wQao%2Bl9OhSIIekre4SS0nvFAbTI37xf4%2BqjQ8x5x027rqc0fBF2veaQN4ShxGmJ8tNmNQlMEOMLav2MIGOqUBQ74YDpe2OxF%2BUS2UiVnJkkrkNa50yazaGLW2YPXnlqV%2FoekxWKSzr9Ml4RmpyzmZw7CTLJNvC74vN9cnIl1GtZOqx%2BuPSoADN4cvw4ykNQC%2F1u0pIz%2BWncKV%2F3yNf2yzdcCNBv4fgbVdizpU%2FMkrCTE2AJyVqpvHRMjw5Y9uanN7Q5NF6xhlg%2FQkTZlRlc1PbGa6qFAShJH0%2FgALUq1D90YuS8nY&X-Amz-Signature=b0d4d472e4ca8293e62fc21b49cdeb1e27ce7c9055be78f758a2920258ce5ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYVPQZD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe0d4pAqNuqHt12FMhQF42FDd565sdggbkKpyIcRNPqAIgPnf%2Fv57uEg9Q%2F2%2BbJqT%2BnxJdmODz8HDR0R%2Fu%2F89GzGsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2F8dIzcSsH96JzIyrcA3JzyBspACqEQeYaosDgZoavmR8rzQhUW%2FSuCQUyuBb9sADESkvudpxoz4n130HEnYV0HNJXKpCoN%2F7eeZBozNX1rdjyzmlGLYAwuy8k7df0XbDmaL6k6pYUbPxMlZqrGt6QZRUFfKIz9Fh1t1y4rNcWnlj9oEBTMwyMbHhwyVo7POEY%2Fc8YhWKAlb2GDT8JsRtUsldnJHloEMtzjCiac3DMUk3ICFnBVibHa0BL62EVXNKLuM3Imtz%2BhUzX8pXviJ5Jy1k6Dao7TDICiZTpSwILgJtugnXY%2FReM1tC23RnXZxJkvu6uZuLIo12LyAHyR8GNSM8wzepO0kPyljYk26Ye3nma80BpO2f9iXaniMKgmcbkQmoz4%2BtSJKHoLFoKAj6c7KzNkpUFC8egTD3KgfkZV8SYpitvdnLrOCDvbdxsUHDz6h%2FKc72t0uRoVuzcfz525B5dZgxdGCHaVIfYinTtaDTEIeRVyZ7Xb3WhDLCSh%2BJqCktfMpezSwu7VYX1t0gf7AeNFVccKfGxSJjL35XtRmDwy0wCOQmuS6A6BMP7xtHxQW7wQao%2Bl9OhSIIekre4SS0nvFAbTI37xf4%2BqjQ8x5x027rqc0fBF2veaQN4ShxGmJ8tNmNQlMEOMLav2MIGOqUBQ74YDpe2OxF%2BUS2UiVnJkkrkNa50yazaGLW2YPXnlqV%2FoekxWKSzr9Ml4RmpyzmZw7CTLJNvC74vN9cnIl1GtZOqx%2BuPSoADN4cvw4ykNQC%2F1u0pIz%2BWncKV%2F3yNf2yzdcCNBv4fgbVdizpU%2FMkrCTE2AJyVqpvHRMjw5Y9uanN7Q5NF6xhlg%2FQkTZlRlc1PbGa6qFAShJH0%2FgALUq1D90YuS8nY&X-Amz-Signature=bd13db119df12207c4502b98df7ecb4e5b9fec980bb159e5ede46e369b77dd3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466643LCFSL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChwOPxP7DkJYJnCU6AWwIU%2BB2jCj5PtuZauV0tmL48CwIgUXNNEamIPN%2Ffn6qiwFREWexqotlOonV31SsUus2DctIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkX6U64aCYSAbGnBircA1gqUm%2FxKRrD9d%2FsVCrHRbcu3mbeg%2FroWklQqnUTPC1e9KvOjecDRmKfRRSMjfB%2BFzBdC4T2mCn1vTF%2F3PZlJSWANifkT3pvCQrRp7PKL2A0U48KY42Kqk%2FIP1A5rBSqdgvQFHeqd%2BOdOAhUKPJV%2BLpkI3BtOnXQ0a%2B4RStktGYyoNhUIAOJvFlWMYMSU45xDYnOczXQ6GdLPEG%2BpPNBqN9cGB%2BS33IbJfix8qcXe1mCstTbQ%2FIav%2Blsyugo3eNH%2BCC%2FvPLVMDzNRXu3FJbddp75GAQpFYzPffcajQkqEdhrKv6mv9%2FUHtQaBzV1C1mr1SNRBkd2YFxqvoUoZEGfLE%2B9VEniuTUCJWa9SwSfa47z0nArUxjuU8lTCzshvYg2h0BkVTd3QT27vkhIms1IRpQZoP0Fhi%2Ffbefh9aUnY7MfH%2FCO5jzqsVSx3h3Wg5Eg1tHBZw6BM8M8WCrPWU3criOJ4MEJ1iRTE6tLKIWfx9OL20v7Xn%2B%2FH8yVI0FhYH5ib90LofAZPL8yMwiXhlTg9LNSdUfDHY0UH6Tsu66g215gOKyjBAHE5t7D%2F8e0%2Fp1WtcFU%2BoJet7FLm8whX5j3Nmy5leNCS7j%2BPkrqtuDUrWpx2bAIATQ9xK0idIFmMNiv2MIGOqUBVYd9VnKDoftcAiMB2V6DiDBkLtNZNaFKsGyzizignwPjsa7AJJCqqA5tYwccWYdxGE1Oc5%2F0UnFDuyxH7WsXFFTHT2fWIJhMWsTiTeS1eyciY8Me62TGs6jaJOFAfjjKpYuE1nNA47yrla070i0eOwoP5DG7kxnogLMq7D1mHDmnPwe8qT58DL9kHDj4NUFd289Ej82yuHIhqqJZEh7Rz3gjczUY&X-Amz-Signature=fcfb47f2ea8bec6d412b4705eb023d85ff3fb872232f92082cd61495e63df2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54QS4FW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B7%2BGjdxD63rRfPzqE%2B92ca53v7B2f4f6TvWE7FY9lEQIgcqxLuOjU8vamONgCgQz%2BX%2FyruVi49jsJFOtQofCmcG8qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1IPmLjOGBg7EVOSCrcA4xsK3mKCzo7XBH9obLZkV9pkV%2B8wRV9FcirIlRJ9aDKx6SiIfFaHMccX%2BxPclPBUSr9uM5Qm9c3EoB2vOCJPcle5oyKx0YGpErV0Df1Xu0Wkaun8EvrUEfvIbQNf8QQEk6w1Rf5wj06dxpimI1Csj9TXACJ9rfcgWlzj7juSxSyFxm9rc8hEQVKnxVjqjjNWCq%2FUHU9BZskIBjlwFGLbvL2UQ9ItGzYhB4bb6lm0r0DC%2BlIhEZbZwXGou38y0T%2FYFUhLQk8EgWvAoUkooVtGcslyBy1yhBMWEBCkl%2FtWavjzJqRMO%2FLkpEtGH54KdEsIU%2FTOWnB8YuG9AwmruFsijX4Tm9DygNQGFzDI3mWT4bqGB2CchRxwiO9K%2Bqy7cVXoUaFaFVlt8QATt5HlRk6o%2Fw4BFfNCaz6Dv94WnBxDKfKXMl2T0Pudc6tRN2qv8PaKcZ8nUAA%2FyH%2BEgeuXpLoMvS663JQ%2B%2FVsi%2FaLfbfqkFVkMW8TRzpam%2FleUj%2FL2WwiE04xBs4D9STSWXblA4MLfg0p7DQYUZ7%2BsL0Rt2j8mpnQ5qyR%2FVE%2FYFocSvJ29Kjc6sq6xArv9H7djXhcnqskdEiI2YJgvyuobffujQKNJNteuQBAQ4gfujD4j11UMO2v2MIGOqUBK9jqk6H8hgcTpfKZR5TbplqYhi8tnivjwcxOYc09A52sX7R5tC9Gopqvt9lAvo8ExqiDhgxbEYcdH2bBVVhDOzjEID%2B7SGR8pxwA5wc585oD2fAJ3vl5Vxzjq%2F2Rj79J3DAPozqzO4lSHqQRjh6%2Bf0S46FKGQs5XNH%2Bnra66LH4rMY5HcMNsH009lg7HAHyiJEKnokzbnSC5GSO3m%2FOgcc74Pm3q&X-Amz-Signature=da6546c21c17e6b2c76560e48c05d9eb32c6f7b2a645597c6d1885ea5e79dff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYVPQZD%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe0d4pAqNuqHt12FMhQF42FDd565sdggbkKpyIcRNPqAIgPnf%2Fv57uEg9Q%2F2%2BbJqT%2BnxJdmODz8HDR0R%2Fu%2F89GzGsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO%2F8dIzcSsH96JzIyrcA3JzyBspACqEQeYaosDgZoavmR8rzQhUW%2FSuCQUyuBb9sADESkvudpxoz4n130HEnYV0HNJXKpCoN%2F7eeZBozNX1rdjyzmlGLYAwuy8k7df0XbDmaL6k6pYUbPxMlZqrGt6QZRUFfKIz9Fh1t1y4rNcWnlj9oEBTMwyMbHhwyVo7POEY%2Fc8YhWKAlb2GDT8JsRtUsldnJHloEMtzjCiac3DMUk3ICFnBVibHa0BL62EVXNKLuM3Imtz%2BhUzX8pXviJ5Jy1k6Dao7TDICiZTpSwILgJtugnXY%2FReM1tC23RnXZxJkvu6uZuLIo12LyAHyR8GNSM8wzepO0kPyljYk26Ye3nma80BpO2f9iXaniMKgmcbkQmoz4%2BtSJKHoLFoKAj6c7KzNkpUFC8egTD3KgfkZV8SYpitvdnLrOCDvbdxsUHDz6h%2FKc72t0uRoVuzcfz525B5dZgxdGCHaVIfYinTtaDTEIeRVyZ7Xb3WhDLCSh%2BJqCktfMpezSwu7VYX1t0gf7AeNFVccKfGxSJjL35XtRmDwy0wCOQmuS6A6BMP7xtHxQW7wQao%2Bl9OhSIIekre4SS0nvFAbTI37xf4%2BqjQ8x5x027rqc0fBF2veaQN4ShxGmJ8tNmNQlMEOMLav2MIGOqUBQ74YDpe2OxF%2BUS2UiVnJkkrkNa50yazaGLW2YPXnlqV%2FoekxWKSzr9Ml4RmpyzmZw7CTLJNvC74vN9cnIl1GtZOqx%2BuPSoADN4cvw4ykNQC%2F1u0pIz%2BWncKV%2F3yNf2yzdcCNBv4fgbVdizpU%2FMkrCTE2AJyVqpvHRMjw5Y9uanN7Q5NF6xhlg%2FQkTZlRlc1PbGa6qFAShJH0%2FgALUq1D90YuS8nY&X-Amz-Signature=073e01149c1be9439d9eccf4db2096f2eac79b771f72b3349584e1d9609dd86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
