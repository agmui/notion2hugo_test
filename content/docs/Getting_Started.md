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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUC74AI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw%2BGwx20OH%2BMsTGVguJZBVfNaTUYlNhAygSDz6Af8dLAiBzNZIK3g3x9%2B5yTYaZV4Pg%2FSy4nL5qWMRyaKmqNvAXuir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe63J7WX%2B%2BXaNUE0vKtwDXngXmmplAMKrPHfDF5pwMUgMp06Gasq2TuxPmAMBKHX2eFiICWkh8sCqIm0ZX5A%2F7tXHhk9HXZLnTLgaWhgAgfZwHQP1QLp%2FXc4vbmYNpgHeOQ0HhrHDLo3DRnkhCtKMNj5ZB%2FuS8MHBkooGkCNCODB7N49yFdB4gpWFZaPrYEDZndvgY148dAqmnUeB03%2FXX3vjXwP80SpTwP7lFeOIc9BcPk9l1jq0Aqhy1B1xmdAR8ZCP76Tecff0uc%2BG6ZUO3M7fJa%2F1Vc7OS%2BgfgMCjyxNoiojUiQ9rlUwnAWDOqfGQ%2FUgw1D6IVYu%2BwMufBNTdyv1aLz7deM9bOKBIeiQJhwP5ifvZss2iw1UeUTbxjSfs4JdnO2GsC4BJ%2FVj1iUgb2DzwyR9%2F8mXNEFjVHQey2xCAOsdLtvgO%2Bf7f%2BzwoI5mYKsbJZ6n69bMqIs0YlzUMQmhf3Ja%2Bd5zLSvKifmtqpTNONILpQvv4u95NiibhfgNgfJ6oeG%2Bdl1CcxVIOBJ4Z%2FAKNlXhjYZhAO4nu9UXWD2ikWuhd44gbvYs4d4r%2B%2BavcyzwVuKhpgd5xU%2BKQWJ0X2csb7HfLQCaNECVhz%2FYpVjRmyFFbEptg%2FvEQDr9jS50YF7HEJ7J4nv9y%2B1kwh%2FbawQY6pgE2u%2B6aYM7w1YvGLl5xq3Q%2Ffh1QoJk9gPipqkhwuOW2Y0WJuLcjqkIOXK3iU6pqc40XBx1aqsHoSckt0Qpifjy9TE71MEvTj%2BYootSQTKfEkcHFBGtiwhR0gDLUYUcQ4OSxEu4hRR1vmpodi9E7AZqRoyMXLdhHEVWCl%2FvNRODOYvL94m5c40bk1%2FJOMDvsqZDp15UZsiOLtjoT2nS%2Bvo1T9Yf%2FkIQ2&X-Amz-Signature=225cc05ec860489d8223dc10b2531c1ff6f8cd8b2d1012b6b9d24730acfc956e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUC74AI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw%2BGwx20OH%2BMsTGVguJZBVfNaTUYlNhAygSDz6Af8dLAiBzNZIK3g3x9%2B5yTYaZV4Pg%2FSy4nL5qWMRyaKmqNvAXuir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe63J7WX%2B%2BXaNUE0vKtwDXngXmmplAMKrPHfDF5pwMUgMp06Gasq2TuxPmAMBKHX2eFiICWkh8sCqIm0ZX5A%2F7tXHhk9HXZLnTLgaWhgAgfZwHQP1QLp%2FXc4vbmYNpgHeOQ0HhrHDLo3DRnkhCtKMNj5ZB%2FuS8MHBkooGkCNCODB7N49yFdB4gpWFZaPrYEDZndvgY148dAqmnUeB03%2FXX3vjXwP80SpTwP7lFeOIc9BcPk9l1jq0Aqhy1B1xmdAR8ZCP76Tecff0uc%2BG6ZUO3M7fJa%2F1Vc7OS%2BgfgMCjyxNoiojUiQ9rlUwnAWDOqfGQ%2FUgw1D6IVYu%2BwMufBNTdyv1aLz7deM9bOKBIeiQJhwP5ifvZss2iw1UeUTbxjSfs4JdnO2GsC4BJ%2FVj1iUgb2DzwyR9%2F8mXNEFjVHQey2xCAOsdLtvgO%2Bf7f%2BzwoI5mYKsbJZ6n69bMqIs0YlzUMQmhf3Ja%2Bd5zLSvKifmtqpTNONILpQvv4u95NiibhfgNgfJ6oeG%2Bdl1CcxVIOBJ4Z%2FAKNlXhjYZhAO4nu9UXWD2ikWuhd44gbvYs4d4r%2B%2BavcyzwVuKhpgd5xU%2BKQWJ0X2csb7HfLQCaNECVhz%2FYpVjRmyFFbEptg%2FvEQDr9jS50YF7HEJ7J4nv9y%2B1kwh%2FbawQY6pgE2u%2B6aYM7w1YvGLl5xq3Q%2Ffh1QoJk9gPipqkhwuOW2Y0WJuLcjqkIOXK3iU6pqc40XBx1aqsHoSckt0Qpifjy9TE71MEvTj%2BYootSQTKfEkcHFBGtiwhR0gDLUYUcQ4OSxEu4hRR1vmpodi9E7AZqRoyMXLdhHEVWCl%2FvNRODOYvL94m5c40bk1%2FJOMDvsqZDp15UZsiOLtjoT2nS%2Bvo1T9Yf%2FkIQ2&X-Amz-Signature=c4ac7eea76dc88d2f0d2d8186774d77c36d13427bd1d1cfd4119b7fffe0854e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUC74AI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw%2BGwx20OH%2BMsTGVguJZBVfNaTUYlNhAygSDz6Af8dLAiBzNZIK3g3x9%2B5yTYaZV4Pg%2FSy4nL5qWMRyaKmqNvAXuir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe63J7WX%2B%2BXaNUE0vKtwDXngXmmplAMKrPHfDF5pwMUgMp06Gasq2TuxPmAMBKHX2eFiICWkh8sCqIm0ZX5A%2F7tXHhk9HXZLnTLgaWhgAgfZwHQP1QLp%2FXc4vbmYNpgHeOQ0HhrHDLo3DRnkhCtKMNj5ZB%2FuS8MHBkooGkCNCODB7N49yFdB4gpWFZaPrYEDZndvgY148dAqmnUeB03%2FXX3vjXwP80SpTwP7lFeOIc9BcPk9l1jq0Aqhy1B1xmdAR8ZCP76Tecff0uc%2BG6ZUO3M7fJa%2F1Vc7OS%2BgfgMCjyxNoiojUiQ9rlUwnAWDOqfGQ%2FUgw1D6IVYu%2BwMufBNTdyv1aLz7deM9bOKBIeiQJhwP5ifvZss2iw1UeUTbxjSfs4JdnO2GsC4BJ%2FVj1iUgb2DzwyR9%2F8mXNEFjVHQey2xCAOsdLtvgO%2Bf7f%2BzwoI5mYKsbJZ6n69bMqIs0YlzUMQmhf3Ja%2Bd5zLSvKifmtqpTNONILpQvv4u95NiibhfgNgfJ6oeG%2Bdl1CcxVIOBJ4Z%2FAKNlXhjYZhAO4nu9UXWD2ikWuhd44gbvYs4d4r%2B%2BavcyzwVuKhpgd5xU%2BKQWJ0X2csb7HfLQCaNECVhz%2FYpVjRmyFFbEptg%2FvEQDr9jS50YF7HEJ7J4nv9y%2B1kwh%2FbawQY6pgE2u%2B6aYM7w1YvGLl5xq3Q%2Ffh1QoJk9gPipqkhwuOW2Y0WJuLcjqkIOXK3iU6pqc40XBx1aqsHoSckt0Qpifjy9TE71MEvTj%2BYootSQTKfEkcHFBGtiwhR0gDLUYUcQ4OSxEu4hRR1vmpodi9E7AZqRoyMXLdhHEVWCl%2FvNRODOYvL94m5c40bk1%2FJOMDvsqZDp15UZsiOLtjoT2nS%2Bvo1T9Yf%2FkIQ2&X-Amz-Signature=b81c0225166cccee80cd1df82f06569486c9d7484cb755add610558d9945a34f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIOUAWZL%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfeTz82gH9i2aZGYfFPSqo84aUMAWNu0ApDHr6ZqUauAiEAniAftXXWOgYftDFrRVCUi9x93TzG9oZUkWkNSDFALIwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAH4Y6w9tkYMiYsPGircAx5Zos3KxXC8s5J%2BcSysnmnYhnvyeDwVHtKV%2FFvUNVJAVyd7QnJ7gIMIuMGxPj19oplKOmS%2FN4mpbA5zXdVOe2uPAQguIC8d343tJlxqQzdcIn2O0iw%2BLYmYT59KAX2p4rjCoBzS3o2N%2BR19sSjyMOy2WVAglL4uqxjuM4wy39UnT9c2fCdT7Wz0WNyl1iLV%2BDf%2B%2FekNJJVuM01xuZcjYHdQzjtwp5K8LeMMEuHoWeqOApuSW020frDoml17CK%2BPzNzJcrwDlu5FW7inNNa6cgd67I5TpiShUkKK%2BTUstB4Qu%2F%2FX%2FbicWUcQSrh%2F5GC0eKZcG0gbdG1geP7KXvLocO%2F6g0k4lvW2utgX%2FTy6NHvTX72frZWdV93lC4rAz%2Bw3kzf%2Bgp5jyULRRWGQdst%2Fr%2BvkNMgZrr58%2F60%2BfkzZNriTU9p4NM3NuxYouNhUjeRcTA2WXucCne4AOsmqihSeqCW7DOqXUX9LG7vWvdiPBE5s4t0yPW4ZuLuy0Sw6Vf7opfjIZaW2KuIo6Zn%2B65oLvP0supC5PZkItRh910%2FyaW0kzO6otdPWej6AIxrA139RwN%2B6AzwuYp9S5bZp4xtS0juHoN8UqEbcv7pzCuFI0nUz0nXNv%2B0vJaPz9PaHMKz22sEGOqUB9HlAg%2Bh9h1gOKGWTEEnZyy5m%2B0urcy1sLrpv3dEpSqWR%2F7dY4JqcsBBJRukK5YUAwXBXI%2F18I%2BQUHOE95DoQwETJkJhRIE2XA7yYjFvn4m3OEaPEbFFnSNLcYS4zduePGhrL%2BV%2BSkTsAEIX8W0zFH6ex76i%2Butxg9sQgdBAPbgaBSPCJoCboiJzVFA%2Fdk%2B6LQRURLlfFYfcLhYsxfKfrPjLJKSv2&X-Amz-Signature=e1d14b3cbd6868421cd61125ee37a45b4f129fa8e16d7bdb7aff478c54664961&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BOUDXCS%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICamRqE8dHVQ7OquSkrQCP4TCG%2FGvJ1a1qnlqeVMoF4aAiEArbYltS5ZD4RzoKwS3kdEssfkOiWyDSf9ohqumStIoSYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDCVBB4HYrm0JeuzAgyrcA3CyPL1P1YsZZEa91Q6%2FBUSOvZj3qzsxeu8oqtGmU5IPv0OqrkUqsB4Sb42XzxvDDf1w1yQqmwFHgl5Y3v%2FSJAdy3e3ZckeBDw8LN47clBuvMjnjKGFQgTP5hGzMlxEjkNZycV%2F8l6JmAD7r9qtIMLUEII3SAfq2RR8d7ZEKCwf%2B%2FNAYnWvPxRt1kG%2FsnVBILJ9LYjg0sE7Vj8mTW%2Fqx8k68SG9AKb0%2B%2FdysUe61pvvhLXB%2Bo9xsRRqqqkawQjyDsmPaaOsqaqxQSnxeY%2FRrDb6eowGqoBkwfVrpXpII5bfyHcr5onfCCEe8DipuvpadnG3wREF5rDJZUklUzy%2B0iJEeFbBEFlnkmIQLRoYXRI2MS5FbNvIiqfyg5EmUaCrQN4LYAyxa7H23MhWFmPYzihoOUkYKbw3dXgN4gCkMmNT3Vwhc9FUWmn%2Fm%2F0yhIMugUJB2ZH6SvYvL0wvn83EicRaafLvdanN6v47eOlnH3dHIPkqD%2FsDzMBLHyrlCRyOm%2Bz9m2uVGqs7cqcLrDFKX7casX0%2FJ67EsiGN8oUAmiukhJd0Qe48TeGB9v0TVgNlmNbT1l%2BFi%2F7Vokc5p68AJBd5d038l%2BskdaX2yzgC0PWckNnjmDp%2BpLO8%2BavE5MOz02sEGOqUBaCj2NJd1Ss9jLnuAssnKL6aR9Bto66RlKuyk6leHSMRSxhF6mbVW2oIQTCxpmZD4ePahZY%2FbWvTc%2FiOSMr64CpyE2NnFK0WOcRGpHYpnEMyBQCGqlS8yn0Ju07FUpgBFphTe7nqA8cYVctiqetTokpawOZJ%2BgqdBTSpMTG6dDDWJa0q4AvxFJ6kD0r9fvn%2BA1u%2FJtyA8t0voVz8h5zqH4sXtDEr3&X-Amz-Signature=c27f4e60c5d031c491f75f3d8f2a4b15393126fa3dc507fe667f3a7fae61a1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUC74AI%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw%2BGwx20OH%2BMsTGVguJZBVfNaTUYlNhAygSDz6Af8dLAiBzNZIK3g3x9%2B5yTYaZV4Pg%2FSy4nL5qWMRyaKmqNvAXuir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMe63J7WX%2B%2BXaNUE0vKtwDXngXmmplAMKrPHfDF5pwMUgMp06Gasq2TuxPmAMBKHX2eFiICWkh8sCqIm0ZX5A%2F7tXHhk9HXZLnTLgaWhgAgfZwHQP1QLp%2FXc4vbmYNpgHeOQ0HhrHDLo3DRnkhCtKMNj5ZB%2FuS8MHBkooGkCNCODB7N49yFdB4gpWFZaPrYEDZndvgY148dAqmnUeB03%2FXX3vjXwP80SpTwP7lFeOIc9BcPk9l1jq0Aqhy1B1xmdAR8ZCP76Tecff0uc%2BG6ZUO3M7fJa%2F1Vc7OS%2BgfgMCjyxNoiojUiQ9rlUwnAWDOqfGQ%2FUgw1D6IVYu%2BwMufBNTdyv1aLz7deM9bOKBIeiQJhwP5ifvZss2iw1UeUTbxjSfs4JdnO2GsC4BJ%2FVj1iUgb2DzwyR9%2F8mXNEFjVHQey2xCAOsdLtvgO%2Bf7f%2BzwoI5mYKsbJZ6n69bMqIs0YlzUMQmhf3Ja%2Bd5zLSvKifmtqpTNONILpQvv4u95NiibhfgNgfJ6oeG%2Bdl1CcxVIOBJ4Z%2FAKNlXhjYZhAO4nu9UXWD2ikWuhd44gbvYs4d4r%2B%2BavcyzwVuKhpgd5xU%2BKQWJ0X2csb7HfLQCaNECVhz%2FYpVjRmyFFbEptg%2FvEQDr9jS50YF7HEJ7J4nv9y%2B1kwh%2FbawQY6pgE2u%2B6aYM7w1YvGLl5xq3Q%2Ffh1QoJk9gPipqkhwuOW2Y0WJuLcjqkIOXK3iU6pqc40XBx1aqsHoSckt0Qpifjy9TE71MEvTj%2BYootSQTKfEkcHFBGtiwhR0gDLUYUcQ4OSxEu4hRR1vmpodi9E7AZqRoyMXLdhHEVWCl%2FvNRODOYvL94m5c40bk1%2FJOMDvsqZDp15UZsiOLtjoT2nS%2Bvo1T9Yf%2FkIQ2&X-Amz-Signature=97600afd362b14c085a97f0efa2692536ded5345639bf405ce25765605f8e4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
