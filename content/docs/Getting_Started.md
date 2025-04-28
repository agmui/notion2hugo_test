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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7JE7EQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO4lFSb50rD3NjUIoB%2FpJtpUeQV0aaWGKiojWjidaZQIgB8qx8YoS9aXP9WH967T78nbmN2LyphRjZgfXjA2ipV0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKAuGcp3wcbuvcqfcCrcA8xbB0SghCVYCozy%2FwiCjSi8mgVhkRUTvYxaY%2FPoVx%2BlOCKnwngkluIhksfmlSOMJ1wuq0JXUvZfAMhR7SzudCl0HkTMPhX7R1vm%2B1DdrEB334vbgFNQLMJnmBrv8cR29TwZ8gf2qFBxAB0JfKlK%2By1zlTH0n3pJSxyeJy%2BEYrGejkhPf0P5K4qLigEtLGOnKabepn8c3Ni9Qq6Oq6DhIHYC6EJjUW%2FFVHgujIgVP2hy6dKTij%2BauBejo8pkmya5E6SKVMnWwskiRS4mL5tSWcvTw83WUvfLctoIAtLxuajGW2QUIOkoVvjGG1cOQoJHXtCqyr%2BQyzXor7xIF5NDFXXCY04K1QBi9dlJbfrdvNwqdivK05hG0VxH0N9uT2BBQW8VxbFQktRtFucrt260WcJH0Mtr73m91kh0Jlvhpf%2BSSXUqELyXjXCfk3eDXbEN6YnLF5YBCHX8L3l68fra%2FonnzgkKS5zIf5SWBvl9ZqVdea6E6t6a%2FQAHwuvCHp3cbjyIpbNb3qkcczSkC44Pdrv0xF2iesyk4pZ24QnI65l0tlK%2FfgNY5VKSN4QuKJJOAAJw0GdMnrk%2FXS1U7JijMY8C4rqqbZrKolAaChxZrmHCjgrE0ANbj4FBpZcFMOXIvcAGOqUBk5N4gGmGgX6czGCwXMlXthR3tqSaXLiteQdMJ2vhxecgXIbyrAhr5FZz7dm1OJH9zskelI%2B%2BBH6jhJ34stfLC5TI9LfFwjGAQCeNIghUnVzI8tBwbrBi1CqawFlzjt4OMLdRPjfrPdX4b1XuGK3XGR7%2F2bqdW%2ByNutrZkDXwuZsSnZxTuDuXv0sxm265jgvNjTsgc0siFAohKG%2Bgr1gMUlWHVStL&X-Amz-Signature=ebe6ca76dbbe650732243224a128bf8cfef8eb2c770a7d48dd8d5df769860961&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7JE7EQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO4lFSb50rD3NjUIoB%2FpJtpUeQV0aaWGKiojWjidaZQIgB8qx8YoS9aXP9WH967T78nbmN2LyphRjZgfXjA2ipV0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKAuGcp3wcbuvcqfcCrcA8xbB0SghCVYCozy%2FwiCjSi8mgVhkRUTvYxaY%2FPoVx%2BlOCKnwngkluIhksfmlSOMJ1wuq0JXUvZfAMhR7SzudCl0HkTMPhX7R1vm%2B1DdrEB334vbgFNQLMJnmBrv8cR29TwZ8gf2qFBxAB0JfKlK%2By1zlTH0n3pJSxyeJy%2BEYrGejkhPf0P5K4qLigEtLGOnKabepn8c3Ni9Qq6Oq6DhIHYC6EJjUW%2FFVHgujIgVP2hy6dKTij%2BauBejo8pkmya5E6SKVMnWwskiRS4mL5tSWcvTw83WUvfLctoIAtLxuajGW2QUIOkoVvjGG1cOQoJHXtCqyr%2BQyzXor7xIF5NDFXXCY04K1QBi9dlJbfrdvNwqdivK05hG0VxH0N9uT2BBQW8VxbFQktRtFucrt260WcJH0Mtr73m91kh0Jlvhpf%2BSSXUqELyXjXCfk3eDXbEN6YnLF5YBCHX8L3l68fra%2FonnzgkKS5zIf5SWBvl9ZqVdea6E6t6a%2FQAHwuvCHp3cbjyIpbNb3qkcczSkC44Pdrv0xF2iesyk4pZ24QnI65l0tlK%2FfgNY5VKSN4QuKJJOAAJw0GdMnrk%2FXS1U7JijMY8C4rqqbZrKolAaChxZrmHCjgrE0ANbj4FBpZcFMOXIvcAGOqUBk5N4gGmGgX6czGCwXMlXthR3tqSaXLiteQdMJ2vhxecgXIbyrAhr5FZz7dm1OJH9zskelI%2B%2BBH6jhJ34stfLC5TI9LfFwjGAQCeNIghUnVzI8tBwbrBi1CqawFlzjt4OMLdRPjfrPdX4b1XuGK3XGR7%2F2bqdW%2ByNutrZkDXwuZsSnZxTuDuXv0sxm265jgvNjTsgc0siFAohKG%2Bgr1gMUlWHVStL&X-Amz-Signature=af499f46d292a7a3308fc4ff6aba1a13710fe59d76ce3a4d2a63d960f865e0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3EO65L%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgilRubL2nVADKnnGyVcXzU8oHePOAm5ub%2BKKVAwkvIQIhAIrS0X38v1w0doqImWIssmBkyLA7ifa6G4jfWueUBE%2B5Kv8DCHQQABoMNjM3NDIzMTgzODA1IgzLpEGv61IFzvtr4gwq3AMbW1qwW1mQmcL2RNRgf36NvdkY5DpkZoyJwM7PBBcwk6ZTG2j0vzC0oCCXV9MdTkAA7ThXxDFGFuLIjxrjfxFMNxgNk%2FU5lAfYfawW9vV8z5Bt4wBD%2BIIYzHdJrhQoZTX3aIGaa1IZ9AVyHTA8THsWHBIvPBqzGdC%2BDCOmDYDQAE3Ow1tVtzlWlE2Ex0%2BJt3q3yWA1nWvUkPvyCdEv3p3ZUCsC0lCaf30o5%2BslACPJkDdB3eKnKn%2FNxuJazDRvViDCCb0crpBL4S5E7qDm%2BEFc3Dq0Y%2Ffij914UuwvqHp8Wwob%2B2R%2BZjCDUPfZFFhVLdNqFQOWKr31ape4ZhQPs9uIfJXJOxDXOisci7EDiRIG%2B2ZbgZsImDQFC06%2BmBc7%2F%2BpVf6zV6h6Vyt0YkcWJdPC%2F8AG0abduhFoy1Ym8UZa7VDHf1kCwTH9D8kqrlhiEV3VXHx1s3aAkS0D%2Fr8%2BEhHmBcIdGSsAQ8OIAR6qUX5V3MUZ%2BhnZvO%2BEPvvmZPLOxA%2FunCH6phHkoII2PcamIcjSlC%2BauSRPYo3LFiEoYf24AxdRV%2BvRqyPSP4OU1nTtHrMjRdzgvzswxYT%2FYY4AOuKbvmxvphIt%2BCtGf%2BO7%2B%2BPdd29lFINnUJnyElfsLLzDoyL3ABjqkAdIdssToRWALDbP7wR%2B7x9hNe8NTr98n2IDlF5mg9FRiYo9sfXmZfCg1L6QRk6pTVFcYrHXKkc%2BRT1haJTOxJIp3KJ8fkNnrqHpOM9jGISOPAa2wxXAhaMOUWDWlR0%2BjIBv3feRW0UUNSjljmb9ShqdskbFckZSN3t4SDqpwRC%2BOn7BkWaqWOuUaQ59HDMRnlPRVe1ZG4u8n9tL90ZxKGFfyJPwv&X-Amz-Signature=e093b85f2a2dd48dfcc4c8b9d7c152b8aecbf021e9141e55045dbbdb7a9e286e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAVNFJVQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlBykj5otA%2F7qnN%2FNmP6LdFN0GeZ2TYuz53MQ12YgmIAiEAmm1g4e7uKLmybZYoxLlTmwWkM7cFz47AAk6Eh3%2Fx72kq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDK%2FH57iFC7O3r9MiSircAy7LmkzEuvHRu2vQzMlpsFjkCK7CAyRLX5dlUyVi6K5cxAOqUyZNOl%2FcJ5eGNytIeHF8%2FMobgLSnu9jsoR68OLk1uYWjx5U2%2BrrehwekWsFc8FoV%2Bp3OKPeHH%2FYnSLVe5pqq9295RMao9OiFq7nHB0CZZGy62P3qM%2FbdTYEWQoRs4wZrxU1Lj1DByr99kHWskv%2B9bXbZ0UTCSz4LUwoWREFsXZhIP5pZLN1oW3vHGl2ZekeW3RULt12%2BtrKw1F4PuUaSSXUA1MtzwLQMLlMAboB9iNCxi7H8h0zYOfurFc%2FoCjfwHUfx%2BDkCvKiq%2B%2FLLdXKXLFJklvjOixqQZlg5mSgkkQ48Rc3Wd5cLK9fUNJiHHc8iXC%2BpkjPyDBStDK%2FHnfC3Pq%2B%2FE9RjQq2hnejPzUERxUK1ZJmFWHoffOBi0bBbfgaYQaem4tT%2F5YpXYPZpYb2AMSM5r7Rcfc58vTTSL2AxzEhulS%2BfyItJuBlgfHyEBH8qD3fuODW01FtBuJhoDZ7Mj31U1HM3GP%2FNx4ataVqmMe%2BZC8j%2B%2BrnRg9ILCAGBou7TFleKICkZ9QxN35SKKjrC3t7z3IvJh0Gi6BiGctNPNc9iocAejFWy0ibB3v09DWDG2og09R8L3vFVMNzIvcAGOqUBhtZiHWDQcxREYFhEhq5W75zbI2mtmuDoqWEuDw2Oi%2BkKqc8MLKRibz5kwgSHq39OTZcSG6YSBlCd%2BaL8dYxc9sUK1Nqz9a7vuhnnX3ZSTdc2EOOdT4Ynf33NcRPw2grAz8gEWMUv95tFe1EgruLU%2B5vCQWjUf7byDVk6E71sT7tUinVAFrOcgcdpA97S90%2FmWZtHe8OMyS%2F35cGGicomVn5iVWmI&X-Amz-Signature=e95ac94ad417a8c9ea81343c0e316e3ba37c8526f9839cfc1196114da2f2612a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7JE7EQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO4lFSb50rD3NjUIoB%2FpJtpUeQV0aaWGKiojWjidaZQIgB8qx8YoS9aXP9WH967T78nbmN2LyphRjZgfXjA2ipV0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKAuGcp3wcbuvcqfcCrcA8xbB0SghCVYCozy%2FwiCjSi8mgVhkRUTvYxaY%2FPoVx%2BlOCKnwngkluIhksfmlSOMJ1wuq0JXUvZfAMhR7SzudCl0HkTMPhX7R1vm%2B1DdrEB334vbgFNQLMJnmBrv8cR29TwZ8gf2qFBxAB0JfKlK%2By1zlTH0n3pJSxyeJy%2BEYrGejkhPf0P5K4qLigEtLGOnKabepn8c3Ni9Qq6Oq6DhIHYC6EJjUW%2FFVHgujIgVP2hy6dKTij%2BauBejo8pkmya5E6SKVMnWwskiRS4mL5tSWcvTw83WUvfLctoIAtLxuajGW2QUIOkoVvjGG1cOQoJHXtCqyr%2BQyzXor7xIF5NDFXXCY04K1QBi9dlJbfrdvNwqdivK05hG0VxH0N9uT2BBQW8VxbFQktRtFucrt260WcJH0Mtr73m91kh0Jlvhpf%2BSSXUqELyXjXCfk3eDXbEN6YnLF5YBCHX8L3l68fra%2FonnzgkKS5zIf5SWBvl9ZqVdea6E6t6a%2FQAHwuvCHp3cbjyIpbNb3qkcczSkC44Pdrv0xF2iesyk4pZ24QnI65l0tlK%2FfgNY5VKSN4QuKJJOAAJw0GdMnrk%2FXS1U7JijMY8C4rqqbZrKolAaChxZrmHCjgrE0ANbj4FBpZcFMOXIvcAGOqUBk5N4gGmGgX6czGCwXMlXthR3tqSaXLiteQdMJ2vhxecgXIbyrAhr5FZz7dm1OJH9zskelI%2B%2BBH6jhJ34stfLC5TI9LfFwjGAQCeNIghUnVzI8tBwbrBi1CqawFlzjt4OMLdRPjfrPdX4b1XuGK3XGR7%2F2bqdW%2ByNutrZkDXwuZsSnZxTuDuXv0sxm265jgvNjTsgc0siFAohKG%2Bgr1gMUlWHVStL&X-Amz-Signature=e5dbe74ae9f89b86572cd077f66c238ab6b3e4517451499d7fde504518a81aca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
