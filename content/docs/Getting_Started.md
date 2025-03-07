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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVJKLH7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpLQ4Nf%2BPbnMg%2FPTr0CdruEbpJ5Uoz9qvtXhJfQ6MkQAiEAl3FHHxFbxWnkmsb51o6dOYtydphUoFH2MoNjSNPD6YYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMu%2BCUGdd6Eo9C5RNircA7ddlk75VY1ctY28MtGh6EQ56Ak5uXg3zvpEJjs3HhXrU1syKdJMqwcclb%2FoJ7raLOVzKlGR%2BOHx%2BvXqj8OcSmKWstJ4H9BG%2BxTBBTMaDhLqDVHVrhEbon3KMglmVCg0MsUqge4bgd1ZoaaQtIA%2BBuq9FG6gyG3fw%2FqDXWW%2FzxcR42s8p9qJbBIlFAf1SkoBwQA92VbB4ufGkxdE44jCfRueRusNDZ0XL1yk9DGJ3lP4alxZmadrD9WD9n2RzZbPhU9uIpUXwZ7I98z4j7AMgEky1XRN8im0N4Nj2WjCFJgX8RA%2Bs9ZMZ6bT0LKVL4gLGazyyZ9pJi2FvCu7C%2FKDHpXt8pVxRVuzqmi43nrhxq4knYkxHKXSPBKzL9iwlATuqBmt5AEQhtg5MuKJOHY64Ij1sQsxA%2BhrvkGZEL%2BrcHG1TthKdG%2FoV1DNIKzoVRhMl7Ro49X1SZbdU3tvJQSDnuucu%2BOL6ytbv1IkWgw41NJyIxAVxT5OZ2zb1kZK3MJuBB5f6qj%2FYSmkeKL7y93xjam5YnqW3ZzJHRQoCwRBaW5W7miQyq1GfMpKmEhVEtEcu%2Fm%2FO%2BF979p84Nn46Fz39MQHsfqYLXNsyfgMX6bvGeLkPJDfYklyYDnn56x4MKOpq74GOqUBBkA0oQrX6fcVbHC%2BHKlEG0ORZdLM%2BqpSAT8NVTzhnn047osLWc0ER4GwuTOgXzw0vrtqsIQfupqqt6AJ4VZRAPdaPaLHHtewnQ5HUsYu2JzcJMa7XFv5fO0BiRB3EzAtWPSMNXGxGRT%2FBHKUgKnvVDo6x87xyGq%2Fii4hTLUoMBG8eSH03KbtvGVnnwbLfOOd34aQ5%2FpM7Jxv9CRIWcnj1bsKb%2Fe8&X-Amz-Signature=11d5a7d7737bb34897d8b5d71d5a03c764e26a4040bd7424f13f9a96610bb3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVJKLH7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpLQ4Nf%2BPbnMg%2FPTr0CdruEbpJ5Uoz9qvtXhJfQ6MkQAiEAl3FHHxFbxWnkmsb51o6dOYtydphUoFH2MoNjSNPD6YYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMu%2BCUGdd6Eo9C5RNircA7ddlk75VY1ctY28MtGh6EQ56Ak5uXg3zvpEJjs3HhXrU1syKdJMqwcclb%2FoJ7raLOVzKlGR%2BOHx%2BvXqj8OcSmKWstJ4H9BG%2BxTBBTMaDhLqDVHVrhEbon3KMglmVCg0MsUqge4bgd1ZoaaQtIA%2BBuq9FG6gyG3fw%2FqDXWW%2FzxcR42s8p9qJbBIlFAf1SkoBwQA92VbB4ufGkxdE44jCfRueRusNDZ0XL1yk9DGJ3lP4alxZmadrD9WD9n2RzZbPhU9uIpUXwZ7I98z4j7AMgEky1XRN8im0N4Nj2WjCFJgX8RA%2Bs9ZMZ6bT0LKVL4gLGazyyZ9pJi2FvCu7C%2FKDHpXt8pVxRVuzqmi43nrhxq4knYkxHKXSPBKzL9iwlATuqBmt5AEQhtg5MuKJOHY64Ij1sQsxA%2BhrvkGZEL%2BrcHG1TthKdG%2FoV1DNIKzoVRhMl7Ro49X1SZbdU3tvJQSDnuucu%2BOL6ytbv1IkWgw41NJyIxAVxT5OZ2zb1kZK3MJuBB5f6qj%2FYSmkeKL7y93xjam5YnqW3ZzJHRQoCwRBaW5W7miQyq1GfMpKmEhVEtEcu%2Fm%2FO%2BF979p84Nn46Fz39MQHsfqYLXNsyfgMX6bvGeLkPJDfYklyYDnn56x4MKOpq74GOqUBBkA0oQrX6fcVbHC%2BHKlEG0ORZdLM%2BqpSAT8NVTzhnn047osLWc0ER4GwuTOgXzw0vrtqsIQfupqqt6AJ4VZRAPdaPaLHHtewnQ5HUsYu2JzcJMa7XFv5fO0BiRB3EzAtWPSMNXGxGRT%2FBHKUgKnvVDo6x87xyGq%2Fii4hTLUoMBG8eSH03KbtvGVnnwbLfOOd34aQ5%2FpM7Jxv9CRIWcnj1bsKb%2Fe8&X-Amz-Signature=7f32c689a1116c99278cfd36a5ba036cd0c074add3cffad934511c87dfe45a88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHR4RQ7H%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDH5%2FDub2RIyjBeeIMQEslh0j2Mur7vkbmoK%2BC16LyRPAiBlH5LjiJKwdC8ohdFuHT6JEvbDuPtzQY9laIcDh%2BjeECr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM62jhHe1hVIt5W%2F4eKtwDhx71yAASlSjh1ZPrZ9SZhsZVv%2B%2BK2KfLjPoVZNHIogTAz3KrdMEgcI%2BuGaN%2B3%2FDzPPSucHBv5%2FL4IrAojihduDiKNNYxskVyYX3Q6hS0su0ShY%2FHuiFYOR0VLh2RuLsnnFAX18VWdpwJOJm1QA%2BH1q8cQEidgOcEL9LJMoHfXLW%2FUI8KKrRj2wO6OxsCN1hxaFU4AaTqtgK71dF%2FL73zdyqwHptp%2Buk88AoDI8TEYLxfpmARJCPjHTG4XvSU1plAIK5eXZMliHGIoqPfDttwbsEFGuwbAGl2i7%2BJZimfPg0ckFTcv5EftPOh2xgtojFt8B%2FAC6UXIZyUVHKo4m6z7kvVeg4%2BAYEMiFALclnlxUpd%2BdQPQEcqoAW91baewe13Abu3yfjoNzrmFQs%2B%2F%2BF574mwLce2frJiRoRDlMQM4OQdCXwtGuf%2F0dAoX9Yh8NiZhsQqNZcSGQmdSNhGbb4gTXepvRP7cqTlNxB9tmvnOVyWAjYQ27DXmYMvbT9po6Ym6ODmpguH9cOhLKDKFKfhC%2BgWylWno3ADZCk92ivLS7%2BiDHQ2oLoxiP%2Bi8b4cgxXDtOVUlRVHnFZRjgQMqualApk048Wi9z2duKllSqbzPe5TKoNFq0AcPvd90FAwyamrvgY6pgEvLrFk6yxTGvFWZg8UfYt044X%2F6zOkHoJ3Ljr5NAs6gxW%2FKH8ETUEl0F%2BjCI114827lTGFzW%2FoQjVFeMSQgscBRzJIHplNoY5BYC%2F3zIFpVVEe%2BQk7gmnn%2FFFJ6PSENtD%2BcT61C%2BCVmm31HhusH3etAZKklOMkQxp%2BaGJy31hhgmuyU2vvXVQpAsv93AUgEMpyg6naPG5IMzeZ6wymgoWCNLuX1qLZ&X-Amz-Signature=4926ded9d4dc897170dbcfce2f4fb3eb472f8e9c99cd2e16d19ae8530c855f45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEXFXTQD%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgx5La81G7%2B3hiBfBkfhUaeAptzIOlochNvkpDOxRzmwIgR41LYpI1xLXcxVRQ%2FPp55yej3FQVNoaMijDSd0qitBMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAzmAXH1PmVj%2Fco0tyrcA0VpWZbb%2B%2FQ7uVTQVb%2BYq%2FecXiKCvAx1bxbLQGQQY6YkJDnVX%2BEP8x1JH1fHjbcGufO2F7MOV8tOuCbKZ0hr9P3bU0fdgOUHh9b75Xm3Nrj%2FWVbdImepvtbL0ADXZWG6HvQB6dBMG0bHiHBbukbOlUk8o4qvWfyjZFE0FYUkFD73KZ50iaN00sYt3Poz2cdhJ%2BieT22pI4TuvystmTbF4bIPeffuwqDsLbdaj4PZ8wRKS7aKzMtoz3xzvlMHqiUZrlHjp%2FlNciz28%2B%2BnRRHmvH9sLifWo0IWWXGjSCGlRUzFGZ2lhiJ%2FY24hluHmr0peIbzI17nyJHnQMfUcZTmsy20p62bBqUBrDO9NmrMFBZvC%2Fx3zH39AhlGmgqaMdEmYJ%2FqHz1beSp210ex7GNi7Cq0cRRJrjRJJOtoIslVui0Uc8pAx1uakPqx4FRFUQUtI0SDaI%2BVQL%2BFZkwM1G0HtFsOyHCMef4pOb28JCjefVj4GMOllKqzbRHbtRSIfpLONCoMVcUXBK0s7QbIlKABAIk35uKUbae6PfnG1rPNlAL%2FwVG42i4jZV79gwQbZp%2BV9z8%2B%2FK%2B2SU2xV%2Fy%2BWTL4pIzPKv2MU5eDaFQ205ad%2FMqxKcsFJ%2FiaWapoXzOoTMJCpq74GOqUB3rnPmgiH2hQKkZTNTTTSbVTVVyDL%2B4t%2F6kvC1A2wVS4%2B%2ByH3mHw0aZct7nx2gEMz6PZ54sd7fnJicRKxThYXxxHIzUvtzkZH9iMYR7LhPh89Z9a3BQsWWcV6aKBR08Nn%2FyHRHIvdPrgkfI%2FXyp8oKWJBOjJ%2BSuSZdMxe2n0dF10uO1qqJACuMgxZ3hhKqruxhqjmtBbDMQZp78KRtvmugWJVTUTW&X-Amz-Signature=c541a4b3c40abbe2a5e7f06d35868fd11d5bbf2ae4b35176392c59f6fee6f1c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVJKLH7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpLQ4Nf%2BPbnMg%2FPTr0CdruEbpJ5Uoz9qvtXhJfQ6MkQAiEAl3FHHxFbxWnkmsb51o6dOYtydphUoFH2MoNjSNPD6YYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMu%2BCUGdd6Eo9C5RNircA7ddlk75VY1ctY28MtGh6EQ56Ak5uXg3zvpEJjs3HhXrU1syKdJMqwcclb%2FoJ7raLOVzKlGR%2BOHx%2BvXqj8OcSmKWstJ4H9BG%2BxTBBTMaDhLqDVHVrhEbon3KMglmVCg0MsUqge4bgd1ZoaaQtIA%2BBuq9FG6gyG3fw%2FqDXWW%2FzxcR42s8p9qJbBIlFAf1SkoBwQA92VbB4ufGkxdE44jCfRueRusNDZ0XL1yk9DGJ3lP4alxZmadrD9WD9n2RzZbPhU9uIpUXwZ7I98z4j7AMgEky1XRN8im0N4Nj2WjCFJgX8RA%2Bs9ZMZ6bT0LKVL4gLGazyyZ9pJi2FvCu7C%2FKDHpXt8pVxRVuzqmi43nrhxq4knYkxHKXSPBKzL9iwlATuqBmt5AEQhtg5MuKJOHY64Ij1sQsxA%2BhrvkGZEL%2BrcHG1TthKdG%2FoV1DNIKzoVRhMl7Ro49X1SZbdU3tvJQSDnuucu%2BOL6ytbv1IkWgw41NJyIxAVxT5OZ2zb1kZK3MJuBB5f6qj%2FYSmkeKL7y93xjam5YnqW3ZzJHRQoCwRBaW5W7miQyq1GfMpKmEhVEtEcu%2Fm%2FO%2BF979p84Nn46Fz39MQHsfqYLXNsyfgMX6bvGeLkPJDfYklyYDnn56x4MKOpq74GOqUBBkA0oQrX6fcVbHC%2BHKlEG0ORZdLM%2BqpSAT8NVTzhnn047osLWc0ER4GwuTOgXzw0vrtqsIQfupqqt6AJ4VZRAPdaPaLHHtewnQ5HUsYu2JzcJMa7XFv5fO0BiRB3EzAtWPSMNXGxGRT%2FBHKUgKnvVDo6x87xyGq%2Fii4hTLUoMBG8eSH03KbtvGVnnwbLfOOd34aQ5%2FpM7Jxv9CRIWcnj1bsKb%2Fe8&X-Amz-Signature=562ba40b1a270448fe1314062f83b5b0974a8b43b8d1edacb0c4999c55e965a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
