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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GNZL6V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWdbDrumj8Eti2dLRfqcU8rrifaMfGVwJ4vnQo0gd4wAiEA5l8bx9C7lUO7LAvdxj1vM0TOSxcpMXzGf9E%2BAQNMKXQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2RZeYKhbXvE%2FK7TyrcA26aJp5YdsoF0azbEj%2BbVJYjIU1fJA%2B5nsZ5irRQKaMbD7JzEeEMcCIwly6Cvkd%2FQt30z1B%2B7aZSG77zN0MdmFaDDLWifsTdXiKUWZGKxmr3IwC037eaNC8EhMmXjC6wui3V4mO17T4bVBqq9%2BQ6F0%2FHfmL2bkFcV03x2R1xCmXt378ljRMMAwiLO2ksGABTplqAwqh1E0azq1Y5GZfg3Lp%2BoKbIbvopG3cAwCopB1OL%2FPfUB15rS5NSHOmedFgTSsk0mL9%2FGV%2FYPDwKaFZKzDyp6Q%2B8dvmwntIJXpbL2SwGb27ULmWDFZCbbEY9ph1%2BlT7xDyW0jW83d18jZKG7a7a%2BoOq%2BW9PMMVMsMjKP3yN0%2F6Lw7iqCeplv9x3KgZbAYQUd3WUarusbLfh1y5IQ%2Fc8ae6YJz%2BXNVNaWaZgyBFlUoVG2kXI7nynp%2F90XPWQbDWn%2BjFfyxeGsJtLAT3ywoei%2BoHlzbRDtuO8aYy2ER7zmIlrwklL2PuDniMdLuPiEdXHscLHmrzhZ1otaBl7m%2Fkx77HkbCxDIncGxFZw5%2BtzFGdV8j%2FQGJpX0a9B9GZKMO1TBsbkb4gwCFLP4PNEkDNQjSpGWYWCrYLTuCZ%2FLvJKPa2SjscOrhT%2B69t%2BoMMDttMQGOqUBkphDGQ7GW5eq9hUrFkFS1%2FmBIJCRPrXM7xLeFeoz4fCtp%2B%2BpUI35Xor5adZQKDC6cxUJvBZw66JKY%2BAsnGk8BMrUhsexZs07EMbU7X%2BqWNHnYDGXZMX7LFP4ieAyz5BXY8i8K7qr0oR5e%2FDsrnGaCDFq%2BqjsIgQvEDYn0opk8xkVbKGdQVuDo5AG6Tzgt1GVr7%2FUjTj7UCFOEBAC8Rs45jClS09V&X-Amz-Signature=35b30bba6c8a3de594af403ef4dccb98ce136681c140612f0a016f78f4758117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GNZL6V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWdbDrumj8Eti2dLRfqcU8rrifaMfGVwJ4vnQo0gd4wAiEA5l8bx9C7lUO7LAvdxj1vM0TOSxcpMXzGf9E%2BAQNMKXQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2RZeYKhbXvE%2FK7TyrcA26aJp5YdsoF0azbEj%2BbVJYjIU1fJA%2B5nsZ5irRQKaMbD7JzEeEMcCIwly6Cvkd%2FQt30z1B%2B7aZSG77zN0MdmFaDDLWifsTdXiKUWZGKxmr3IwC037eaNC8EhMmXjC6wui3V4mO17T4bVBqq9%2BQ6F0%2FHfmL2bkFcV03x2R1xCmXt378ljRMMAwiLO2ksGABTplqAwqh1E0azq1Y5GZfg3Lp%2BoKbIbvopG3cAwCopB1OL%2FPfUB15rS5NSHOmedFgTSsk0mL9%2FGV%2FYPDwKaFZKzDyp6Q%2B8dvmwntIJXpbL2SwGb27ULmWDFZCbbEY9ph1%2BlT7xDyW0jW83d18jZKG7a7a%2BoOq%2BW9PMMVMsMjKP3yN0%2F6Lw7iqCeplv9x3KgZbAYQUd3WUarusbLfh1y5IQ%2Fc8ae6YJz%2BXNVNaWaZgyBFlUoVG2kXI7nynp%2F90XPWQbDWn%2BjFfyxeGsJtLAT3ywoei%2BoHlzbRDtuO8aYy2ER7zmIlrwklL2PuDniMdLuPiEdXHscLHmrzhZ1otaBl7m%2Fkx77HkbCxDIncGxFZw5%2BtzFGdV8j%2FQGJpX0a9B9GZKMO1TBsbkb4gwCFLP4PNEkDNQjSpGWYWCrYLTuCZ%2FLvJKPa2SjscOrhT%2B69t%2BoMMDttMQGOqUBkphDGQ7GW5eq9hUrFkFS1%2FmBIJCRPrXM7xLeFeoz4fCtp%2B%2BpUI35Xor5adZQKDC6cxUJvBZw66JKY%2BAsnGk8BMrUhsexZs07EMbU7X%2BqWNHnYDGXZMX7LFP4ieAyz5BXY8i8K7qr0oR5e%2FDsrnGaCDFq%2BqjsIgQvEDYn0opk8xkVbKGdQVuDo5AG6Tzgt1GVr7%2FUjTj7UCFOEBAC8Rs45jClS09V&X-Amz-Signature=09ff64970d9dbaeb488e505840c92fa35e1c164b97b2a793c3f88e3eb82cef5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GNZL6V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWdbDrumj8Eti2dLRfqcU8rrifaMfGVwJ4vnQo0gd4wAiEA5l8bx9C7lUO7LAvdxj1vM0TOSxcpMXzGf9E%2BAQNMKXQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2RZeYKhbXvE%2FK7TyrcA26aJp5YdsoF0azbEj%2BbVJYjIU1fJA%2B5nsZ5irRQKaMbD7JzEeEMcCIwly6Cvkd%2FQt30z1B%2B7aZSG77zN0MdmFaDDLWifsTdXiKUWZGKxmr3IwC037eaNC8EhMmXjC6wui3V4mO17T4bVBqq9%2BQ6F0%2FHfmL2bkFcV03x2R1xCmXt378ljRMMAwiLO2ksGABTplqAwqh1E0azq1Y5GZfg3Lp%2BoKbIbvopG3cAwCopB1OL%2FPfUB15rS5NSHOmedFgTSsk0mL9%2FGV%2FYPDwKaFZKzDyp6Q%2B8dvmwntIJXpbL2SwGb27ULmWDFZCbbEY9ph1%2BlT7xDyW0jW83d18jZKG7a7a%2BoOq%2BW9PMMVMsMjKP3yN0%2F6Lw7iqCeplv9x3KgZbAYQUd3WUarusbLfh1y5IQ%2Fc8ae6YJz%2BXNVNaWaZgyBFlUoVG2kXI7nynp%2F90XPWQbDWn%2BjFfyxeGsJtLAT3ywoei%2BoHlzbRDtuO8aYy2ER7zmIlrwklL2PuDniMdLuPiEdXHscLHmrzhZ1otaBl7m%2Fkx77HkbCxDIncGxFZw5%2BtzFGdV8j%2FQGJpX0a9B9GZKMO1TBsbkb4gwCFLP4PNEkDNQjSpGWYWCrYLTuCZ%2FLvJKPa2SjscOrhT%2B69t%2BoMMDttMQGOqUBkphDGQ7GW5eq9hUrFkFS1%2FmBIJCRPrXM7xLeFeoz4fCtp%2B%2BpUI35Xor5adZQKDC6cxUJvBZw66JKY%2BAsnGk8BMrUhsexZs07EMbU7X%2BqWNHnYDGXZMX7LFP4ieAyz5BXY8i8K7qr0oR5e%2FDsrnGaCDFq%2BqjsIgQvEDYn0opk8xkVbKGdQVuDo5AG6Tzgt1GVr7%2FUjTj7UCFOEBAC8Rs45jClS09V&X-Amz-Signature=c8a8f74f310a7fd3eaf55b32bebe9479b90059def580509e6caec2f499154bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURMIOJ5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJ1G5JXPxpK6F7wBRjo2UEdgH8k2pL7Zra3QafYVxExAiEA5tnGO9JsSAdUj8zkcCBiJT8hyy9zfEytC3JzsPJ9qcoqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKQvq6d%2FY52m8saOCrcA5SkrlsaJOHJiB8TxFvLPMi4mG2ezgK1uEm71zJ9%2BHyMoZtH1s2YsKaeM7KSPKvS6LZKlACH7FTVJbqETb9o8q9Gv3H%2BrA%2B7zEhWEhXWNkhkuoRbzLxfzrYBi2z3TyNbSkQqOwjSDYvj%2BZ2f9cOoE8rT433ndvzE3hgW3YyGxAruK5eUqY9NLRoxJMJBwHd2GHUzWO8PAsKyZEaP5R1vUUEYRdIKD25c3v%2BCoF2nY%2BULjBCOzhrInlpn3TsnogQD05vKsr8mBDGtNdxUTAjTJVKLnaKopn31ebUtbd36%2BIxZxOVYSwVIJ5FZX2RrtYNRsUkp3uwQmspfAB3JzSAGrENCnhLrR1GFkvjlfQY1o%2Fpn659y9BxGWk%2BsxvSRAS0DaHG7TOMe7Ll9zDxAX8QGlQjcIDM2m%2FpH%2BykRSYchXqW1op4d4PVkvxrMZzc%2BoLRdNj%2FycpQybxb4Hgzmkctibk1HxviMpe%2BSj1TnxTpwnR61hAreZafzhjztzwyfFlKWkmPEZ2Lwu6cojljlndH8DDp%2BQIuZk%2FORrn4D8UiqiWQE36xRfKV%2B6lxeKbGPXjf%2FXGlx5ckZk96FgDY4SpIBmuFMaqbe05kh9WLGXkRdhYfuGdyqIdj62okUyTYmMPPttMQGOqUBsKD4QZYaf9Py339dAQWsr9Ym3hdOuIwB6gbaq9wEOAt%2B6EmlaGJ7dKkXMd5TXoqdx0bzYXOfMZy%2FjDg0yjY8NpvV0qOA7btHuK3fqTHAIC4NrcspzHGMJ4KWQgTqiwZcxogEATx6Qpp3VS0NQ1QdlHNNZfWD2nKB%2FuiGg4V7VKzJ%2FgWqnR4w1G%2Bt0I6PgW6ZVo5S5gf6aO6fTMHatfM0fdTl7VG5&X-Amz-Signature=8e6d77bfd6025789c908a51dd916298053251803800c594b9d8848fc8b86f576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRNSEQ5O%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCopIgX8NhPxGgR3T4JioKhyWAVfJpUlxe3lgY4PqOqlQIhAPd5xi54zmpPge4DBEMg%2FyARkHJ0blsjCQNrs3TTIHDrKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzx0iw6k3Y2BxDfae8q3AMVzQoYn8Ee2bzVLLjnki0nWFEDiu4M5nTzPTzgj88KRvrCqUm1RpwEN7YBG6UHV8Uqgege1L5RtwxpYbaGBivzCZ1kBK%2FVZh4HV020bFhATAQQdqb4htl9wtLfAsizwbr1JPmvtiD4JF2JFsWAVf6nz7Rrcei9zrqlh35wo7Ur8FCM550ciivCgCzPglD90%2BcZd2gjF0urz43p5gauv7cXrMGZkb0%2F1ilxn3GMGiT09fbWddG4raFMc9pVNHwtDHl%2FP52sWZZHFITGM3ZJp8%2B%2BwIYNh8T4AjR8BVwwZVuvXvYokBEbQ0e5yUoFtuSGLlvNk9NDoEfQNgEXLOprtLMZ0MVddbixglxMvLS8gSCITlQXGjl%2FrnL3YPl8ipZ%2BQ8TVEPD5bnGQWs%2Fv2Lx9fXYV99b4IE4zZiabRuQQELPcd%2BDXUZ8NS%2F79qLcA4mDdOUsYrKLfxUXWEQuwPtm3xUkG83Ej3Y2AesFaLE%2BctWEopVISKhY7I2jQ14BuRy5U2ahS3yLXG2vNLXI7Qk4DaWV7wq%2BaQuPuRVjKyEqIn1KZyO5bGn6RIj1CnJ1%2BepVs%2FgBcBfPIIej%2FGkutNPxs8vfNFesjFZIUeoneZ5XSQ3wZwnLS8hW%2ByUIPwMFOKDCJ7rTEBjqkAS1k%2Fhm2GPKp9lPwvhhKWqfh2hlf8HwqT9%2FNejIuJHwSW5uwHpqIWLxChdasc%2FfVBOKtCuD2JvwclZsDiKcKC3CBobPfBTvr2BBYrl3BFQtuF6Ta560cvVZwgp3zN4xoRfSijkrPI%2BcRsef8heSUhsyAzp9PPOTsEibC01FV9nJLuS0IP3vgGFFuPhDETfTNGx6hEse%2BZz0LAXelXuw0xhlv5%2BXD&X-Amz-Signature=eb90efe89443bede148dbe83f14312cc76114aa709feb2371b663f1a1218058c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GNZL6V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWdbDrumj8Eti2dLRfqcU8rrifaMfGVwJ4vnQo0gd4wAiEA5l8bx9C7lUO7LAvdxj1vM0TOSxcpMXzGf9E%2BAQNMKXQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2RZeYKhbXvE%2FK7TyrcA26aJp5YdsoF0azbEj%2BbVJYjIU1fJA%2B5nsZ5irRQKaMbD7JzEeEMcCIwly6Cvkd%2FQt30z1B%2B7aZSG77zN0MdmFaDDLWifsTdXiKUWZGKxmr3IwC037eaNC8EhMmXjC6wui3V4mO17T4bVBqq9%2BQ6F0%2FHfmL2bkFcV03x2R1xCmXt378ljRMMAwiLO2ksGABTplqAwqh1E0azq1Y5GZfg3Lp%2BoKbIbvopG3cAwCopB1OL%2FPfUB15rS5NSHOmedFgTSsk0mL9%2FGV%2FYPDwKaFZKzDyp6Q%2B8dvmwntIJXpbL2SwGb27ULmWDFZCbbEY9ph1%2BlT7xDyW0jW83d18jZKG7a7a%2BoOq%2BW9PMMVMsMjKP3yN0%2F6Lw7iqCeplv9x3KgZbAYQUd3WUarusbLfh1y5IQ%2Fc8ae6YJz%2BXNVNaWaZgyBFlUoVG2kXI7nynp%2F90XPWQbDWn%2BjFfyxeGsJtLAT3ywoei%2BoHlzbRDtuO8aYy2ER7zmIlrwklL2PuDniMdLuPiEdXHscLHmrzhZ1otaBl7m%2Fkx77HkbCxDIncGxFZw5%2BtzFGdV8j%2FQGJpX0a9B9GZKMO1TBsbkb4gwCFLP4PNEkDNQjSpGWYWCrYLTuCZ%2FLvJKPa2SjscOrhT%2B69t%2BoMMDttMQGOqUBkphDGQ7GW5eq9hUrFkFS1%2FmBIJCRPrXM7xLeFeoz4fCtp%2B%2BpUI35Xor5adZQKDC6cxUJvBZw66JKY%2BAsnGk8BMrUhsexZs07EMbU7X%2BqWNHnYDGXZMX7LFP4ieAyz5BXY8i8K7qr0oR5e%2FDsrnGaCDFq%2BqjsIgQvEDYn0opk8xkVbKGdQVuDo5AG6Tzgt1GVr7%2FUjTj7UCFOEBAC8Rs45jClS09V&X-Amz-Signature=42fb444d43b6260e8af70de731ce128fe59774a06a42e61db9c82dbbfd9eefc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
