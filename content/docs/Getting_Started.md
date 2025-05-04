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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXNWQEY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGguvMgzqqtLj3IDeuyWUCt7N5UK6Fsp%2BrNeJCpIkB%2BMAiAolqGfxcG8FJGtL666iDI5%2FG5Ll86jvysU2DB%2BSs9uACr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMwQFA6dgkbFOI11HkKtwDmq8Y3tjEdR2C9DkewD54zk4ONu8BAx2wbO7ThElpeCqe56tLBqcS148TxDISC0jdf%2Fq8HlIY4gY69XOZ8b%2BMQTJyi5ONUc0Xwqmn%2BWnGYSfc7wrdnCiWTK0nXHzLuSNzGF5IoCPqDVy0RX8%2FtnSWnn4GLxFGu%2BVH1EmBpd5iGcOhAb1l9n7luVnFLZb%2FbQu6Pi7xjfihyjr1OgWy7TMfozX5uKlA5jyVulcSHG4JjK0WEWS9eHnqQNc%2BMGQxrsRocNHyHYqg8oa0OJrtYB2Mvrfe5SGugJQiGuuJ9fbPS69NUagCnfWyXeYLWoulB9%2F%2Fjrig1%2Bv%2F1GShz8998DJBJfogVZJ87A5eh8w0D6i%2FNEz%2BAfKjzkURTKjCWAJjVddsDu804%2FXghmxQ7XAdVJriwkD59LOdx25Isu7UWYAjzc39HJeSZMjHTMX5GZv8n9%2BCbAZEkbaYZS%2Bch3nmmIcMBQH2zdE6DEKTY0PFupvlz65bWwMUHv9WCGZ99P29KFdidaEm1UEt8Cip%2BzLcSAbaJeJYUoYHnMthYKZ4N3Veiv%2ByXcsOt46%2BI8HYWqkoMHT9JtZjVxaDT0Vi6La5xn0YxbuN3EOWEXBYngb4geFc0JjhvEj1ue4b24NdVHAwkLvewAY6pgGNHRITiemXVUUGWKrtECC2H%2B9%2FR7znAqjzy69xFsEzhzDI34Oap7Yxnl6xWxfBUqHmfdSqwTXn5NC80HvwuKr%2Fz8fs8%2FUCCGpForHpd9ZdgRUScG89v2xol17j4qttOAIDBPB55EqYMVt2zANRZpSXVaBuG0A%2BlHG875beGClGfnq1p9hz92PNJHK%2FqmxNNMHVfWmJqTpKEQQbK6UjSYlbdtH5AdJW&X-Amz-Signature=56cf985f66a79aa38ab76ef65a61487604967040b3d30b9c726e84a559518943&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXNWQEY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGguvMgzqqtLj3IDeuyWUCt7N5UK6Fsp%2BrNeJCpIkB%2BMAiAolqGfxcG8FJGtL666iDI5%2FG5Ll86jvysU2DB%2BSs9uACr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMwQFA6dgkbFOI11HkKtwDmq8Y3tjEdR2C9DkewD54zk4ONu8BAx2wbO7ThElpeCqe56tLBqcS148TxDISC0jdf%2Fq8HlIY4gY69XOZ8b%2BMQTJyi5ONUc0Xwqmn%2BWnGYSfc7wrdnCiWTK0nXHzLuSNzGF5IoCPqDVy0RX8%2FtnSWnn4GLxFGu%2BVH1EmBpd5iGcOhAb1l9n7luVnFLZb%2FbQu6Pi7xjfihyjr1OgWy7TMfozX5uKlA5jyVulcSHG4JjK0WEWS9eHnqQNc%2BMGQxrsRocNHyHYqg8oa0OJrtYB2Mvrfe5SGugJQiGuuJ9fbPS69NUagCnfWyXeYLWoulB9%2F%2Fjrig1%2Bv%2F1GShz8998DJBJfogVZJ87A5eh8w0D6i%2FNEz%2BAfKjzkURTKjCWAJjVddsDu804%2FXghmxQ7XAdVJriwkD59LOdx25Isu7UWYAjzc39HJeSZMjHTMX5GZv8n9%2BCbAZEkbaYZS%2Bch3nmmIcMBQH2zdE6DEKTY0PFupvlz65bWwMUHv9WCGZ99P29KFdidaEm1UEt8Cip%2BzLcSAbaJeJYUoYHnMthYKZ4N3Veiv%2ByXcsOt46%2BI8HYWqkoMHT9JtZjVxaDT0Vi6La5xn0YxbuN3EOWEXBYngb4geFc0JjhvEj1ue4b24NdVHAwkLvewAY6pgGNHRITiemXVUUGWKrtECC2H%2B9%2FR7znAqjzy69xFsEzhzDI34Oap7Yxnl6xWxfBUqHmfdSqwTXn5NC80HvwuKr%2Fz8fs8%2FUCCGpForHpd9ZdgRUScG89v2xol17j4qttOAIDBPB55EqYMVt2zANRZpSXVaBuG0A%2BlHG875beGClGfnq1p9hz92PNJHK%2FqmxNNMHVfWmJqTpKEQQbK6UjSYlbdtH5AdJW&X-Amz-Signature=75e81426afa8315f834cc01b37a369fa9e6fa2f9c4ec68d485235cb732ac8da5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXNWQEY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGguvMgzqqtLj3IDeuyWUCt7N5UK6Fsp%2BrNeJCpIkB%2BMAiAolqGfxcG8FJGtL666iDI5%2FG5Ll86jvysU2DB%2BSs9uACr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMwQFA6dgkbFOI11HkKtwDmq8Y3tjEdR2C9DkewD54zk4ONu8BAx2wbO7ThElpeCqe56tLBqcS148TxDISC0jdf%2Fq8HlIY4gY69XOZ8b%2BMQTJyi5ONUc0Xwqmn%2BWnGYSfc7wrdnCiWTK0nXHzLuSNzGF5IoCPqDVy0RX8%2FtnSWnn4GLxFGu%2BVH1EmBpd5iGcOhAb1l9n7luVnFLZb%2FbQu6Pi7xjfihyjr1OgWy7TMfozX5uKlA5jyVulcSHG4JjK0WEWS9eHnqQNc%2BMGQxrsRocNHyHYqg8oa0OJrtYB2Mvrfe5SGugJQiGuuJ9fbPS69NUagCnfWyXeYLWoulB9%2F%2Fjrig1%2Bv%2F1GShz8998DJBJfogVZJ87A5eh8w0D6i%2FNEz%2BAfKjzkURTKjCWAJjVddsDu804%2FXghmxQ7XAdVJriwkD59LOdx25Isu7UWYAjzc39HJeSZMjHTMX5GZv8n9%2BCbAZEkbaYZS%2Bch3nmmIcMBQH2zdE6DEKTY0PFupvlz65bWwMUHv9WCGZ99P29KFdidaEm1UEt8Cip%2BzLcSAbaJeJYUoYHnMthYKZ4N3Veiv%2ByXcsOt46%2BI8HYWqkoMHT9JtZjVxaDT0Vi6La5xn0YxbuN3EOWEXBYngb4geFc0JjhvEj1ue4b24NdVHAwkLvewAY6pgGNHRITiemXVUUGWKrtECC2H%2B9%2FR7znAqjzy69xFsEzhzDI34Oap7Yxnl6xWxfBUqHmfdSqwTXn5NC80HvwuKr%2Fz8fs8%2FUCCGpForHpd9ZdgRUScG89v2xol17j4qttOAIDBPB55EqYMVt2zANRZpSXVaBuG0A%2BlHG875beGClGfnq1p9hz92PNJHK%2FqmxNNMHVfWmJqTpKEQQbK6UjSYlbdtH5AdJW&X-Amz-Signature=8db62041c45cda073fffeb31a8fdd05284c5cd28706c92bcfe3a2a62ef6b01f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOEP5TTY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCeuOXlyFiGdevSQx4meU9T%2FpU8T7VLrYNQbWmk9s780gIgIb1xjdbFxOxReOZs%2FO6LpJ7mWt%2BebqbJA5c7tOdpPKQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKswzPiYtw1SBSqx3SrcA6llICauaCQi9g%2FWxen6Vz%2BmMC8M0aaE7vTDjOS3xquXMHgIvePuUw7D65V1iVRx%2B9xjDrF3Y0foDkuvsuDs6yHNmIcUa3ERoW5mbMVYd%2B5jlrlIQKEtaosCxzt%2FD56OX%2FPkrzBHL3zRpRFsQ%2FAvbUCzuxwj4bNM3Z7GAyEF%2FwzUnLH03QXKdPEunxgKTeMCioY6pHR8LmlXAduVkCLes27N8LK38K8Qk9%2Bq4siGxRr1qqnMq5z6TMuHbY82L3W6IlHuodhZOCzB9QQQTeQunjG%2Bf2Um0HJtiaXPPEVU7Jv5ZOmmtrvcXlpJ80UDXBT4iEfFpQzqodURwNedhHSsKnWzBAWlqHZ1UbtVq%2F8JiSuFUkvUTcGLxwyUHF1Iooaza8q3VJzEwkC3v4xAq5oWq59zH8ncMZCVCCPD0S6UISgnj1b1uLeoK3Pa0iLFoHrOeLqpuc%2FEmxG7WMnehewUKiuqa7LUFIewVjdUO5%2F3qd8%2Fao0CfXJjLYWYhBubD3olugF%2Fy%2BnmCtF%2FjCPXqKnu32NWVXZvdO0Ja5vUxuiqKlZ6TsuwL1h9YWWkdgV8v5Bd5odnwlbIKaEBd%2BB0vlRKzbseJNtrK4b%2F2EnBaPqOyuJLS3BuPM7EhezgQACaMJq73sAGOqUBAvq7KDIEJ7IiLq%2BHVoabe0CNJ34G8qPyvhOU5ChyxlyVyGzpqaMs3%2FCz5VT7X%2B3eTqxb%2FAldgAt8gFNvTBZO8uqFRnVD4hP8HdvFK2yRvHn9%2BsXeMvqNcwiTyV5anC97Ida7b2zkg2j6oIPX15S7E%2FDouv4428I4OA9fwQVnmUqMTZXDhkp7M%2F2CK1oQVBm%2BoGM%2FNzz7XuzuwYj3SA%2Bpacln%2Bolq&X-Amz-Signature=01b6e8ee8d9e5af31a802fa8bafcae7782d4565f7ca3cb0a9faaa9e6e92fd077&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCDRZCL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGXg5ZBszcQ0oceNoRMkRE081I%2BhDtnGVLh%2B4Mkj8nA%2BAiEAqRjIIbZVz8wgCU4376JVDlKSDL9OrvbqRM007B%2Ft4oEq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2Fn00l8gjoR%2B4CsXCrcAy8U8mHgkX6wskGxAa1awJtD6h2rVlaEo%2BEF7rwNVsosK2abLOkdL9a2opRPtcX5sWpDssL5nJcFPq%2FAQCIInFEoNr45fQ8uPeEH2MvJvg56IYFUmK4WA9W%2BkGpynrSbJuz8DIILNoh4d6Xt5XyJzIMoA1Lz7K4XqsUjYdt2xzPJ10jgwtcnvEPFbyrjHjHw%2BHW88hWK%2FRtL2Lm3g2lTOuywOy1bXhim9tFWqNs%2F0pcEUGK6myaRAo04OJvDYE0VRjI329EuZq4g96IYl5JWEgv96wMyz0RtalavdmX4je%2FwCPiz4i%2BOz6lFoQm6nOJfLokV30vqyoznG3k2OicQTEWW64vjm0KroYm75mqI%2FC0wS3RL0sredZqTgv%2FjMSWRT81myfSm%2Fegq1eL1ZZI3jdA6f7D5P0AkhTXVINBFiO%2BQeQTPJqHdbdC5wGx1Mtt0aMuMMhPiotNP6Q2p%2BMLabbYE8QZ9PZPvxk4LqqTKNA1VcMct75PieOiQsUKDnMp%2B3JFccoFTUx0%2F25L998E%2B%2BvtPT2n0mmlgwj2s6RdVXkrOnqiy3jivJHYSH18Abk1IE5BK338UZWAZdDaArHDVyuiBEer9Lvbgusk3oTicQ1GasfedVmCcT5PiSQdtMPq63sAGOqUBPZ4Z%2FPBKmTPpJvEN8Tz6GIqsU8bwkUTbDAEscqMnaaIYkJaa7rJvDtnI%2Bvwz2L%2FiQbtH9hmETAbIo%2FPtLp99GbeKHkTRv2Xq6cSb0S3AGNw%2F0Pjn8qJuH3cb%2BML6Ma7KJ%2B9pnDj497zkmylZLu7mC0humTDaYH1CEvU7u6AlfYJyOMkuGPVZtPvOE2mm7xKYzdMobIbqsI%2BE3puVvXMdBDRCZ%2FLR&X-Amz-Signature=00bb6a01dd0a546a7d526cf45489061c1d3dbda1bfe3770d6130e486ecb15c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXNWQEY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGguvMgzqqtLj3IDeuyWUCt7N5UK6Fsp%2BrNeJCpIkB%2BMAiAolqGfxcG8FJGtL666iDI5%2FG5Ll86jvysU2DB%2BSs9uACr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMwQFA6dgkbFOI11HkKtwDmq8Y3tjEdR2C9DkewD54zk4ONu8BAx2wbO7ThElpeCqe56tLBqcS148TxDISC0jdf%2Fq8HlIY4gY69XOZ8b%2BMQTJyi5ONUc0Xwqmn%2BWnGYSfc7wrdnCiWTK0nXHzLuSNzGF5IoCPqDVy0RX8%2FtnSWnn4GLxFGu%2BVH1EmBpd5iGcOhAb1l9n7luVnFLZb%2FbQu6Pi7xjfihyjr1OgWy7TMfozX5uKlA5jyVulcSHG4JjK0WEWS9eHnqQNc%2BMGQxrsRocNHyHYqg8oa0OJrtYB2Mvrfe5SGugJQiGuuJ9fbPS69NUagCnfWyXeYLWoulB9%2F%2Fjrig1%2Bv%2F1GShz8998DJBJfogVZJ87A5eh8w0D6i%2FNEz%2BAfKjzkURTKjCWAJjVddsDu804%2FXghmxQ7XAdVJriwkD59LOdx25Isu7UWYAjzc39HJeSZMjHTMX5GZv8n9%2BCbAZEkbaYZS%2Bch3nmmIcMBQH2zdE6DEKTY0PFupvlz65bWwMUHv9WCGZ99P29KFdidaEm1UEt8Cip%2BzLcSAbaJeJYUoYHnMthYKZ4N3Veiv%2ByXcsOt46%2BI8HYWqkoMHT9JtZjVxaDT0Vi6La5xn0YxbuN3EOWEXBYngb4geFc0JjhvEj1ue4b24NdVHAwkLvewAY6pgGNHRITiemXVUUGWKrtECC2H%2B9%2FR7znAqjzy69xFsEzhzDI34Oap7Yxnl6xWxfBUqHmfdSqwTXn5NC80HvwuKr%2Fz8fs8%2FUCCGpForHpd9ZdgRUScG89v2xol17j4qttOAIDBPB55EqYMVt2zANRZpSXVaBuG0A%2BlHG875beGClGfnq1p9hz92PNJHK%2FqmxNNMHVfWmJqTpKEQQbK6UjSYlbdtH5AdJW&X-Amz-Signature=8a3e280efcb6ee97568e1d2d3cf0594bacbba228df7ed4e32f2f80223c5f3557&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
