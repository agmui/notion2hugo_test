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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6MHERV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaEdPeIKfSCq3YhdIqBFH7OymOKzCHOZ1GXeOR9i%2F7XAiEA%2BP9Euh%2FxDZ4h9FyssNk1HjH%2F%2FaVPHT%2F00rWgG7aVpI0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMkd%2BVgBqDo1MdQ4ZSrcA6XwSBigilm3AB8260tQ4qbbnB4AXuRR18IvRU8JPh%2BxPoE7D%2FnJ72B5g%2BS%2Fi8502wqlg25InkprYpOr%2Bt4DJFXQm89QMxcSLEBUSRa26yoDECqWfW44J%2B%2F9uoktGCal%2F6vgKV9RIGif8Xdpki29DXlfMMXtvWdDbjI39mCpmyHhyMaqduitIeCpVvaiFsIT7NuYaOaNTPgwVT27sj31W0qdSjtxcrihuXGwCme9LPhD7j3ys6wRBIgZ8hS9ZSDaaAuaTI2110VaFrnFE0sJyAukB40y35ysmkJR75y9ksKJ9gaYprdfsxHK8MgHF2hUlXkayUCiHBCUJEuYXUROMxCN6Q67os42IaVYFyQMrXvko%2BRKsiQcGGcLkCH4OuaIP%2FXyoiSKRxFYnruIzDUFkKK1VKdhVqZOMyqR7jI2%2FjDp5zC2Qd%2BNLf4sktrW%2F%2BTcGVGedfb6Ql4fQmSE6sZ9RUj1tv41Cj0WdksYNKwlBJfnATL4%2BdihvZnhaABsKs1EiL95Q4zm729lGwJBvUThcOdvQlc9HnV4zkAFHHRA%2B5VQ79sbdJOFPc9MGDRRM1ZIyulK8duNT7eWHX%2BXXW6hKix0weFAHFPwDhIyGksbCyMzLtw%2BiuPYOKmxc5HZMKqnxcIGOqUBIhU6WZs%2BKUMwJDjQcqSMqI1UGzJOudQ8DTy%2BGeifaLiB6as9ZUKNsWvTXGKuCftu40g5xz2AGmpXxNgoMnm25k0w%2Ff0F6Pv4FcRR9domhOR5eIBhoD%2BEMogY04fUrA4ZJofg2soXT%2F1T%2Fr0DDuaHzHI2OF2N9o9pohodkrPBcdu8jECDc2gljwdwoyG%2Bn8C8Pc%2BkG0AtFh1vOnCEPd%2BNgQloQ8%2F%2F&X-Amz-Signature=d953d2de9bfabf93e76ac9c7228ee68061804857584febd3d2b66db37e325f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6MHERV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaEdPeIKfSCq3YhdIqBFH7OymOKzCHOZ1GXeOR9i%2F7XAiEA%2BP9Euh%2FxDZ4h9FyssNk1HjH%2F%2FaVPHT%2F00rWgG7aVpI0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMkd%2BVgBqDo1MdQ4ZSrcA6XwSBigilm3AB8260tQ4qbbnB4AXuRR18IvRU8JPh%2BxPoE7D%2FnJ72B5g%2BS%2Fi8502wqlg25InkprYpOr%2Bt4DJFXQm89QMxcSLEBUSRa26yoDECqWfW44J%2B%2F9uoktGCal%2F6vgKV9RIGif8Xdpki29DXlfMMXtvWdDbjI39mCpmyHhyMaqduitIeCpVvaiFsIT7NuYaOaNTPgwVT27sj31W0qdSjtxcrihuXGwCme9LPhD7j3ys6wRBIgZ8hS9ZSDaaAuaTI2110VaFrnFE0sJyAukB40y35ysmkJR75y9ksKJ9gaYprdfsxHK8MgHF2hUlXkayUCiHBCUJEuYXUROMxCN6Q67os42IaVYFyQMrXvko%2BRKsiQcGGcLkCH4OuaIP%2FXyoiSKRxFYnruIzDUFkKK1VKdhVqZOMyqR7jI2%2FjDp5zC2Qd%2BNLf4sktrW%2F%2BTcGVGedfb6Ql4fQmSE6sZ9RUj1tv41Cj0WdksYNKwlBJfnATL4%2BdihvZnhaABsKs1EiL95Q4zm729lGwJBvUThcOdvQlc9HnV4zkAFHHRA%2B5VQ79sbdJOFPc9MGDRRM1ZIyulK8duNT7eWHX%2BXXW6hKix0weFAHFPwDhIyGksbCyMzLtw%2BiuPYOKmxc5HZMKqnxcIGOqUBIhU6WZs%2BKUMwJDjQcqSMqI1UGzJOudQ8DTy%2BGeifaLiB6as9ZUKNsWvTXGKuCftu40g5xz2AGmpXxNgoMnm25k0w%2Ff0F6Pv4FcRR9domhOR5eIBhoD%2BEMogY04fUrA4ZJofg2soXT%2F1T%2Fr0DDuaHzHI2OF2N9o9pohodkrPBcdu8jECDc2gljwdwoyG%2Bn8C8Pc%2BkG0AtFh1vOnCEPd%2BNgQloQ8%2F%2F&X-Amz-Signature=8e7e398c9976ef6c7b74cf99098db823d76ccf9a4ca1272a5567ad61d6d2f0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6MHERV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaEdPeIKfSCq3YhdIqBFH7OymOKzCHOZ1GXeOR9i%2F7XAiEA%2BP9Euh%2FxDZ4h9FyssNk1HjH%2F%2FaVPHT%2F00rWgG7aVpI0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMkd%2BVgBqDo1MdQ4ZSrcA6XwSBigilm3AB8260tQ4qbbnB4AXuRR18IvRU8JPh%2BxPoE7D%2FnJ72B5g%2BS%2Fi8502wqlg25InkprYpOr%2Bt4DJFXQm89QMxcSLEBUSRa26yoDECqWfW44J%2B%2F9uoktGCal%2F6vgKV9RIGif8Xdpki29DXlfMMXtvWdDbjI39mCpmyHhyMaqduitIeCpVvaiFsIT7NuYaOaNTPgwVT27sj31W0qdSjtxcrihuXGwCme9LPhD7j3ys6wRBIgZ8hS9ZSDaaAuaTI2110VaFrnFE0sJyAukB40y35ysmkJR75y9ksKJ9gaYprdfsxHK8MgHF2hUlXkayUCiHBCUJEuYXUROMxCN6Q67os42IaVYFyQMrXvko%2BRKsiQcGGcLkCH4OuaIP%2FXyoiSKRxFYnruIzDUFkKK1VKdhVqZOMyqR7jI2%2FjDp5zC2Qd%2BNLf4sktrW%2F%2BTcGVGedfb6Ql4fQmSE6sZ9RUj1tv41Cj0WdksYNKwlBJfnATL4%2BdihvZnhaABsKs1EiL95Q4zm729lGwJBvUThcOdvQlc9HnV4zkAFHHRA%2B5VQ79sbdJOFPc9MGDRRM1ZIyulK8duNT7eWHX%2BXXW6hKix0weFAHFPwDhIyGksbCyMzLtw%2BiuPYOKmxc5HZMKqnxcIGOqUBIhU6WZs%2BKUMwJDjQcqSMqI1UGzJOudQ8DTy%2BGeifaLiB6as9ZUKNsWvTXGKuCftu40g5xz2AGmpXxNgoMnm25k0w%2Ff0F6Pv4FcRR9domhOR5eIBhoD%2BEMogY04fUrA4ZJofg2soXT%2F1T%2Fr0DDuaHzHI2OF2N9o9pohodkrPBcdu8jECDc2gljwdwoyG%2Bn8C8Pc%2BkG0AtFh1vOnCEPd%2BNgQloQ8%2F%2F&X-Amz-Signature=5673df3bf7c43fee1ca06038a53108d2c5bd080bcc1dbc213d870e853772dc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YFXK6NE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEV9R1HT9i82fUHi2Mdy3T1pxvPGL3lByF1GPQHCQS%2BPAiAHX9xdZ0mnmP5kjiWc1aDHZ6KELSAZHFrxXWdgMyZFbir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMWFK8%2BtT%2FmcQqYqRTKtwDsk9D73iLhTx14yyl1hcTONxToubAUFQK7NmKT%2Bk%2Bk%2FoV5IsDgNjbjcB4aXAW4TbZ6bwwSroO%2Ff3Z5fGe5DZTzBknRrE83rq5ATmshJHphdpXsSolfgIvhJ%2B%2BJVhX64rPIr4K51iYbha5uNGohgCmpFBi9Lrm3fUkSLxbu7gj%2FwYXUtsODpVa%2BLXi%2F1KMK67yxz3BH8m%2FG8dESldob6sRlVWeF7QHTisKPkjiJLaJUxE2EqAocMUYk6mzJzwoq36DU1HRuBZbBPFyj5cu8tG3FdJL0L4IxWvIRClF0O2Izv8nF8aYyOJRAPSSpAxMKP4ZBHWOVwjjUjy0M6n4llKpQvmJ9GHumiJT8kSpPdB48QdNwkZmmJaTPPrsiq4UJKBzJpypbaKMXO2Hay%2F%2B7n%2F4xO5wqOvBh68eig4DlLqtt5uwQZApwDoTKsgk4WK8h%2Fr4oLR5e70LLtdycFAylpNJgewLkTE5oQ124qMUsXn%2ByjmQ8bXtkWnwxVtKhJ%2BeJNE5djeVPAbPc%2FckisPjTadR%2BbIq4q85nx4v4iSeGC35Xx7EI1ishC6xl%2Bv%2BSOEPdROdBdY5%2FkPdkWQjbCPh9INhnO%2Bk5mhCF9aaN0LbUP8zRe9h%2FBm8Ud8PXUl1pZowoKfFwgY6pgFNlDgoE%2FU%2BPtrzLQ69tgIUBiwoGRiuDQvceYlitYPvXyoD%2FX4z5DiIS%2FmvmSkjW5FVlwTmO3DKVhNJiyTYg95XFHOj5ZpqKud28Sfxd%2FK32t8h2Fj6wEJAt58qLLdhk0pdkTt2RTeGzTlGGoMPg%2BkpcWsy501xEk9YtFYntguZtwrAz1Ry8BCNyU1GpjTWktrTCeLsIhEe0QxpevBJjIxZAme%2F94kn&X-Amz-Signature=b9196fe1cdc41981e4ff60604dfa4f738ea7fc8cb522898e04a661cc92a37050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBYVVV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAGxybrErTNaKBFfg6zZcsYh6T7vlBtTZSEzLKOXeGwgIgKKQ6xjTexbsa%2FjTLzogW2O9fs70sVFoW3ldZABRwb6Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDILmbNOsKKeNLn3AircA5NSCRrK3U07dlg3wc8aAIZWRIhZuRTVYOcBaBNIQif7cOhXJ1F034xuoynnueg%2FTyzrZFhw5TXeozrz7NZP8ZrIBtpTHVKX%2FwAweZMQ91Q1%2BpYaHNVJLd%2FLORYFdHLQVPK06b%2FuURt4f00RMBUZnGAhYuZVagSmGpYzwWj8DYzQEJolWzGy7nBPYtHaeu%2Bh7BmDi8J%2FXWzYY8r6D%2B6OZ4y1hP8F%2FEmTSvz93si%2BFgDosFAvWCusJXKAlJzVjSw0S951XgDVoSSi1chHgN4%2F0dUxeQWrNNUgN2a%2BUyANHpwznQpEHNqo4mYce02JefrCzMK4S3O9qxeNSe0ngpGC4mGiZ2lr9%2FCaSkxZpFTGIjF2z0aNT2Sa8HXpfU36uWjPMstfJ6AeAv7qVoHllnTmyharA9uwshLgSUw11Q6afLNYTKEACP%2FU4MBki8jM7v9PQW1xLUExIRBRXu7T%2BYDT48wdXFeBrwzfsaHaSlumnEgY3xEfyg9NPkYD2Bog8n%2FLEdwEw45BxWATdUh%2FFe5gmZqsEhQP1Opdi%2FLt2Y2AF0i2LRdyAhC8o%2BRt4ACDclh%2BxDkDrgbrnYrplLpNffAgJ7mcfAxUPAUD1snbS2LGGPHU8fQplYgmM49MUAVFMIGnxcIGOqUBdPR2jeVlPNZZGwqrNjy2ryb4xqkzkXy2yjKiHAemveFS5faRl3K%2B0h3azEAgehudeNOdcqfd8FkXFKxNeBpYayDfXJhONB0OQ42%2Fa%2FiRCjtzOs4WaqMwatTd9a8rSKMmhL1xrvZsf6IFquYrhhIorelMBYbgXi3sajBePaGdp9POvqepUSnmBMm%2BJDMouyBoZwd3%2Bv%2FJ8%2BHhUoKw%2FySorj8cU795&X-Amz-Signature=5572758666f18cf87c73a6639145c7006446bc1b822905a0ad51e64c5898a599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A6MHERV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaEdPeIKfSCq3YhdIqBFH7OymOKzCHOZ1GXeOR9i%2F7XAiEA%2BP9Euh%2FxDZ4h9FyssNk1HjH%2F%2FaVPHT%2F00rWgG7aVpI0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMkd%2BVgBqDo1MdQ4ZSrcA6XwSBigilm3AB8260tQ4qbbnB4AXuRR18IvRU8JPh%2BxPoE7D%2FnJ72B5g%2BS%2Fi8502wqlg25InkprYpOr%2Bt4DJFXQm89QMxcSLEBUSRa26yoDECqWfW44J%2B%2F9uoktGCal%2F6vgKV9RIGif8Xdpki29DXlfMMXtvWdDbjI39mCpmyHhyMaqduitIeCpVvaiFsIT7NuYaOaNTPgwVT27sj31W0qdSjtxcrihuXGwCme9LPhD7j3ys6wRBIgZ8hS9ZSDaaAuaTI2110VaFrnFE0sJyAukB40y35ysmkJR75y9ksKJ9gaYprdfsxHK8MgHF2hUlXkayUCiHBCUJEuYXUROMxCN6Q67os42IaVYFyQMrXvko%2BRKsiQcGGcLkCH4OuaIP%2FXyoiSKRxFYnruIzDUFkKK1VKdhVqZOMyqR7jI2%2FjDp5zC2Qd%2BNLf4sktrW%2F%2BTcGVGedfb6Ql4fQmSE6sZ9RUj1tv41Cj0WdksYNKwlBJfnATL4%2BdihvZnhaABsKs1EiL95Q4zm729lGwJBvUThcOdvQlc9HnV4zkAFHHRA%2B5VQ79sbdJOFPc9MGDRRM1ZIyulK8duNT7eWHX%2BXXW6hKix0weFAHFPwDhIyGksbCyMzLtw%2BiuPYOKmxc5HZMKqnxcIGOqUBIhU6WZs%2BKUMwJDjQcqSMqI1UGzJOudQ8DTy%2BGeifaLiB6as9ZUKNsWvTXGKuCftu40g5xz2AGmpXxNgoMnm25k0w%2Ff0F6Pv4FcRR9domhOR5eIBhoD%2BEMogY04fUrA4ZJofg2soXT%2F1T%2Fr0DDuaHzHI2OF2N9o9pohodkrPBcdu8jECDc2gljwdwoyG%2Bn8C8Pc%2BkG0AtFh1vOnCEPd%2BNgQloQ8%2F%2F&X-Amz-Signature=136b4bd8433b28444ac4c8515027eadc740595e71ddb9f2c436d3e96a7db47c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
