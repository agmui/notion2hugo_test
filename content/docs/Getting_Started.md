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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUA5A%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFTn7mkQPnHEI9GK6kVEKYhhM%2BHzUOWjSLrrvRJBY9boAiEAq7vBG5IjxCmX1Cu4DMvt9FRdaQDS9SoLh0lRp1hcRk4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9zwTrkVf8ZbjzsMSrcA8x0tMzycyviM3coX3nyDTpIxJmSTmudLI2LsFxcOw2MAwdLCBHLXxy1QY0pn%2F2oDgDFLbrZW0krqBUhjRVNNuSWUt38YwpSXTC1RBG7b5K%2FTnIDmKfoVHCnCuB3XwQa7wIhUWazAWm1R1E%2B7GOgI%2Fy0v%2B4Tl1%2Fg8h37XbgWaqRcIods%2FxGeI0RgW7XC6yPBeJAMy%2FMR9XkItpoMipGsA2Jhicjg3YAkh0CM3DZxEeKiKXxsT4Y9zt8yvRS8aB8%2B5IKAEowCS889uBGbwSz4L9IbPZ9FPBi4mG6A9uoMoMcVpX3ScLIDFDgl%2FvVdVZKcnqeb7IJCuexK9pHWO0MI87L%2FgMWrP7or7giY0fJCVe6%2BM2wYmCXy8tXxunZrf18HmX5Md1gorCBtLPHe84LWxeKvpwdTyqsz86p5zxb41q3ssx%2BSWKu2iV7ISG4Z7QBzal6JTC7BWHaSxTmFY6BN9ntOtITxf2uXyuQKk%2FQIcQ7Y3wYrRCwco3caZHWyBGYIjfhPI%2BPm8B5%2BKGtDd9btRuXxJf3iNKkpnQa4GJb5JnMN37gBzwwncs5Dbzxx5HAr71lsNl56Xkz2ad4wwolRtE0dLhmqniQHytdCjfGPm1oDDPJA8ADttuUyBiQeMMHy%2Fr4GOqUBJuAs3D2sZps%2FSnS%2FYHa%2FRCjQz6h1nCIN%2FYgvfcc6FjmzeU6WlNqPL671N98qWlKONVU%2BGVp1JTugFaXY1gLY1w5hmld7yJ4gLRE0PU%2FhpxWyl10LiooezUZ0c4d1K5bybCWkCQr1vSmItzUNE2HWURnruuA38hhX%2FCA79hIza5ow%2BrXujg1QOvLQkX44mK2ycbqOngk2acwgF2YxC2uXYuLT9RMH&X-Amz-Signature=63e605e853a4846c13d063d8b20cae575e8e8572bd083733baa0a19b92247a43&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUA5A%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFTn7mkQPnHEI9GK6kVEKYhhM%2BHzUOWjSLrrvRJBY9boAiEAq7vBG5IjxCmX1Cu4DMvt9FRdaQDS9SoLh0lRp1hcRk4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9zwTrkVf8ZbjzsMSrcA8x0tMzycyviM3coX3nyDTpIxJmSTmudLI2LsFxcOw2MAwdLCBHLXxy1QY0pn%2F2oDgDFLbrZW0krqBUhjRVNNuSWUt38YwpSXTC1RBG7b5K%2FTnIDmKfoVHCnCuB3XwQa7wIhUWazAWm1R1E%2B7GOgI%2Fy0v%2B4Tl1%2Fg8h37XbgWaqRcIods%2FxGeI0RgW7XC6yPBeJAMy%2FMR9XkItpoMipGsA2Jhicjg3YAkh0CM3DZxEeKiKXxsT4Y9zt8yvRS8aB8%2B5IKAEowCS889uBGbwSz4L9IbPZ9FPBi4mG6A9uoMoMcVpX3ScLIDFDgl%2FvVdVZKcnqeb7IJCuexK9pHWO0MI87L%2FgMWrP7or7giY0fJCVe6%2BM2wYmCXy8tXxunZrf18HmX5Md1gorCBtLPHe84LWxeKvpwdTyqsz86p5zxb41q3ssx%2BSWKu2iV7ISG4Z7QBzal6JTC7BWHaSxTmFY6BN9ntOtITxf2uXyuQKk%2FQIcQ7Y3wYrRCwco3caZHWyBGYIjfhPI%2BPm8B5%2BKGtDd9btRuXxJf3iNKkpnQa4GJb5JnMN37gBzwwncs5Dbzxx5HAr71lsNl56Xkz2ad4wwolRtE0dLhmqniQHytdCjfGPm1oDDPJA8ADttuUyBiQeMMHy%2Fr4GOqUBJuAs3D2sZps%2FSnS%2FYHa%2FRCjQz6h1nCIN%2FYgvfcc6FjmzeU6WlNqPL671N98qWlKONVU%2BGVp1JTugFaXY1gLY1w5hmld7yJ4gLRE0PU%2FhpxWyl10LiooezUZ0c4d1K5bybCWkCQr1vSmItzUNE2HWURnruuA38hhX%2FCA79hIza5ow%2BrXujg1QOvLQkX44mK2ycbqOngk2acwgF2YxC2uXYuLT9RMH&X-Amz-Signature=66970dbc38f31235764560b2da3aa52a9667c95bb18fc641076ce0dbb2c56c86&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZYLG2X%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDNODJF2fLM1WUNKFDOZJRqRxwc11mMB5QVooMdsLCidAiBUC%2FvAc%2B0moFw1L0EA425%2FDKjzF6GokzOgRP4Z4KwhiSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQYzFFS76lqRri52LKtwDKzYmlrNIw0VnZRmfv0ng0Ih0pQBVwBjbBRtlNBlMcL1A93b7g7QTj9jEAfokVHYmSWDDkCamSbd%2FTBnQsqhWBkI0ieI3knuTUjj27lmUdm0cDJ5twxl7b9L2D0z%2F7djGMssgnfQAJSxD3uYS0d63esZLy1Hi30NbzEaj2FzuvmQ32CylHwT%2BTFZv3xyAPE4qKa6ChaROuHMmD8H7bTl%2BHUhk1qUIxlD0yUNDh4geRyJgpd0KHYr6V9RAGvC7alsEjl82IB2vu1nJ1HB%2B%2BkJTEq6cMqh9BVZW7ACBbX3Epb66WYJLkzzvJ9PjuykaAdHfo78NRemC6uY2YDOHbDYijXxlRCceRKnOKVZEbIj6tnts%2F%2FITP3FG%2FTIVUcoJTuzjkAqgjF%2FhdVtis7m%2FVwHcHQEWa6Y8D2byUDwtIJ%2BXGWzfiKc19biOO2C2QE7eMWtlW1SGZFIytzvfpFa%2BjSvYXDU6%2B7n5b4BdG%2BKBkm5L8I%2FhEXizCFA9pspF3K2w66Ilz1ajVuN6aVbTIdKQ48VziPsyeZ5ygT57%2Fj%2Fe%2FsjoobdTh6G%2FIoNYsmWMKSOT3ptdAe1lfeoo0zpS%2B64LbQqhGBzjGk06PbOi9P6ebbT8OrKTNDsnih4PtbIMWR8wsfL%2BvgY6pgHn6HrYeuL5tpx8h59szNfMJsEDAgL4ZomxmHK2GVjCc5OWTv3HU7FttwXqwWR82Ue4vUDQU84hSCbigjvoLxaVuwjpmZKUvi6NUOQeD9Mo1NytTmDuAIZue0q1mCaRC3PVQ6psggtWpPajr0mInoRLGxyh7Ki6yJhxVoZnIY4fh3W5%2B5KfNYF2W2V497L5VPNPQZKYuFl%2FYlbQrc5l66X31q6b%2FuO3&X-Amz-Signature=930c7a434d5508e2450898c7dfb750a60a0b4f72f925b61be9d7fb855bf8052a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPP4WPF2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD1WiBJO8svnnRLIDrqEtcX4uXqpx6abtoKv6h5nAjYqgIhAOJYRxUyxEnjhXiFKNJOR1gjTg%2Bj9wpqmPhHDgdXTJ4IKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8JHegYQ6VIIPoJsoq3AN1UO6QTBlthCo3iWpjxa3JBPKu5Yvo80fdcvuSxLJQQpECOUZtsvru1qXyYTtUUO8LyhZtLmh67YEZetndCg7R0OcQvSbAASm81lh9JyLWXGY1kRUQV7fLCWpiIh2VOZ2ZXx3QWG98VDR%2FGBw65JeyHXHaXgVuMxjd%2BBX0ntZtphOgOeJtpG9W09%2FmgBCkZcm%2FsuKxpphUA7C6Lx9EHKgRsWxBGZqCcjXij7j2kHxhoRMJOJWQuSX%2FUL6ffGgAwnJpWwSV5lN%2BCzPRq9NPTfllThB7yNrADVQbSvDO2Wi5FyJTw1DpgY9YNu5YvfcQH9zfRFhEBRoDZbh4Ob%2FYv6Hk4uwYk8%2BDuqYGmBcD6v9s7Z10Rx2UenlimUEzFzB%2BNBcxJj0X7IoMDH6EyXk%2B1a9DV6En%2B4lGQHxB%2F%2FxMslcSOb1rp4C89riYdeR3mz1%2FZqDFK00wlAGd67wEjkvywX7aEkLQr%2BoP0S%2B2H2BJNExI4fHq%2BAMq5vLjV6DGm%2Ba0qX%2BsTGK0wr%2Bq%2Bbz0ymSdfs73xzvnOyLft3G9wml0qmhfmneGl513%2BqPCO28XIO72mL74TW%2B%2FMzdlhVfoJnovO0EZNXKxNqkoW7Zr4%2FxMJsL4hzjh3gOmR2FUccoZKDDr8%2F6%2BBjqkAQPurRfyCzH2l%2Fjx1gmO17bXD5%2FMan3%2B1IuUbMHTycxG2UAjvv6cPsTPJt1%2Fp7wQGGF5LaBwrgOUp6mhyCAdVyVtjX%2FYsivquyiPCaG66p92G6v7fhL8kaX0UITqTG5eR8yGSzKveu9lMH3EX0g2tl2wxwOXyJmt4auZtZToRM2ge51yC5BujlBbH4Uu9mhzSMI0UfZ3pdsS0zz%2FJOuq%2FdfBgcvl&X-Amz-Signature=ce044e38b9935f6878ab0222900e7e47d354e9feed4d13b3562fbc04ece930e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUA5A%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFTn7mkQPnHEI9GK6kVEKYhhM%2BHzUOWjSLrrvRJBY9boAiEAq7vBG5IjxCmX1Cu4DMvt9FRdaQDS9SoLh0lRp1hcRk4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9zwTrkVf8ZbjzsMSrcA8x0tMzycyviM3coX3nyDTpIxJmSTmudLI2LsFxcOw2MAwdLCBHLXxy1QY0pn%2F2oDgDFLbrZW0krqBUhjRVNNuSWUt38YwpSXTC1RBG7b5K%2FTnIDmKfoVHCnCuB3XwQa7wIhUWazAWm1R1E%2B7GOgI%2Fy0v%2B4Tl1%2Fg8h37XbgWaqRcIods%2FxGeI0RgW7XC6yPBeJAMy%2FMR9XkItpoMipGsA2Jhicjg3YAkh0CM3DZxEeKiKXxsT4Y9zt8yvRS8aB8%2B5IKAEowCS889uBGbwSz4L9IbPZ9FPBi4mG6A9uoMoMcVpX3ScLIDFDgl%2FvVdVZKcnqeb7IJCuexK9pHWO0MI87L%2FgMWrP7or7giY0fJCVe6%2BM2wYmCXy8tXxunZrf18HmX5Md1gorCBtLPHe84LWxeKvpwdTyqsz86p5zxb41q3ssx%2BSWKu2iV7ISG4Z7QBzal6JTC7BWHaSxTmFY6BN9ntOtITxf2uXyuQKk%2FQIcQ7Y3wYrRCwco3caZHWyBGYIjfhPI%2BPm8B5%2BKGtDd9btRuXxJf3iNKkpnQa4GJb5JnMN37gBzwwncs5Dbzxx5HAr71lsNl56Xkz2ad4wwolRtE0dLhmqniQHytdCjfGPm1oDDPJA8ADttuUyBiQeMMHy%2Fr4GOqUBJuAs3D2sZps%2FSnS%2FYHa%2FRCjQz6h1nCIN%2FYgvfcc6FjmzeU6WlNqPL671N98qWlKONVU%2BGVp1JTugFaXY1gLY1w5hmld7yJ4gLRE0PU%2FhpxWyl10LiooezUZ0c4d1K5bybCWkCQr1vSmItzUNE2HWURnruuA38hhX%2FCA79hIza5ow%2BrXujg1QOvLQkX44mK2ycbqOngk2acwgF2YxC2uXYuLT9RMH&X-Amz-Signature=bc02da21bd2d1d038b6e397674a383366096aaac932370eeef8347f3e881c021&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
