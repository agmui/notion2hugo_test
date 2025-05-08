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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QBFUJE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeARj0dbZZ4Bkqlo05Ze%2FceTrOHaYUVkx01eFAHPCH1AIhAPcUCB%2B083NByb3uR8xvloYQ9h96lRyxYm2npbGbd1x6Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyo4%2FHBdirSauk3TgYq3APgL7esHUQ%2BIlCrE5be8wYVMYJAF0YTDIiJqlV7O90OUumvPdHQahjdkl1LDKuWf4lYrNd9tgRxHSffU1mQjGt2wPc%2BaWgqrai%2B%2FEk%2FlwGoCVxvi2LD%2BWLmscQ88iafR9XeR5dx3R2aPUEs8XzeN9675jBVGxR4vpYr0pguPaINDfu4oeIZHh1aOeBD96rawe49H%2Fv9Ebr7xaSRmGtJYwTknsYcX6xq8mVb5VejiQYCJgZe22tV%2F7ws2jvtgAnUKNxKAdTx8c%2FXu06KYYF9zbhEoRxSTsBc8yiWuc5wO6Ta9yquHsiKl9rOAV%2BhXxrbxgmAbEgP0ASkoWNS%2B24EeMVI5ptCaDU6c%2BD%2B915bWbZ8MK0h7NMvfJNC6ZnaSXt8oA275RAu5mIsNL%2BB%2BvVNEYkO6Pjvlrsot0IZnXFJt%2FFz1msBM6k8%2FDybnWfEJzkj7ON2%2BRmqcBeNmuV72xw7mZEQxDQKcmAZuq5cmnxZK17VyM%2Bk4ylmRvCRPVafgU9XGUbQseFt%2BJdrxAufdpGLkzV7NnwPYA73aRjkrBczTA6mFy53%2F3uI2ev1xKwKlBmNILN3CnJYEwndh6kdUWbmEPSnpwGNTAMXbGN9aPOOvADhoBQKaODyEv3ZxT7veTCkwvDABjqkAVOjFcqm0jt0Pm%2FcvQ%2BsffuOFaAJIjFaQlYEw9mpDyiRjh4Zl9jaBgisewMURHPUgJw2Egk7ifnuFOhyXyWu11%2FgJplIdCZ5A%2Fja4gnQ%2BHpEN1VA366Meeeuk0PGBQR4c2lJCjZLr8PYJg1AO4Bx5%2BjDcfbWgbCzZYOCNdmPwXS4grVkUf03hlfVKNaoeuTepZko1WaZm%2F3AxS%2BO22ow1K62rz%2Fj&X-Amz-Signature=0765ef01f9b2d1ff6e16790558cee3cde093e14c260bf19de90631218bbb33db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QBFUJE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeARj0dbZZ4Bkqlo05Ze%2FceTrOHaYUVkx01eFAHPCH1AIhAPcUCB%2B083NByb3uR8xvloYQ9h96lRyxYm2npbGbd1x6Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyo4%2FHBdirSauk3TgYq3APgL7esHUQ%2BIlCrE5be8wYVMYJAF0YTDIiJqlV7O90OUumvPdHQahjdkl1LDKuWf4lYrNd9tgRxHSffU1mQjGt2wPc%2BaWgqrai%2B%2FEk%2FlwGoCVxvi2LD%2BWLmscQ88iafR9XeR5dx3R2aPUEs8XzeN9675jBVGxR4vpYr0pguPaINDfu4oeIZHh1aOeBD96rawe49H%2Fv9Ebr7xaSRmGtJYwTknsYcX6xq8mVb5VejiQYCJgZe22tV%2F7ws2jvtgAnUKNxKAdTx8c%2FXu06KYYF9zbhEoRxSTsBc8yiWuc5wO6Ta9yquHsiKl9rOAV%2BhXxrbxgmAbEgP0ASkoWNS%2B24EeMVI5ptCaDU6c%2BD%2B915bWbZ8MK0h7NMvfJNC6ZnaSXt8oA275RAu5mIsNL%2BB%2BvVNEYkO6Pjvlrsot0IZnXFJt%2FFz1msBM6k8%2FDybnWfEJzkj7ON2%2BRmqcBeNmuV72xw7mZEQxDQKcmAZuq5cmnxZK17VyM%2Bk4ylmRvCRPVafgU9XGUbQseFt%2BJdrxAufdpGLkzV7NnwPYA73aRjkrBczTA6mFy53%2F3uI2ev1xKwKlBmNILN3CnJYEwndh6kdUWbmEPSnpwGNTAMXbGN9aPOOvADhoBQKaODyEv3ZxT7veTCkwvDABjqkAVOjFcqm0jt0Pm%2FcvQ%2BsffuOFaAJIjFaQlYEw9mpDyiRjh4Zl9jaBgisewMURHPUgJw2Egk7ifnuFOhyXyWu11%2FgJplIdCZ5A%2Fja4gnQ%2BHpEN1VA366Meeeuk0PGBQR4c2lJCjZLr8PYJg1AO4Bx5%2BjDcfbWgbCzZYOCNdmPwXS4grVkUf03hlfVKNaoeuTepZko1WaZm%2F3AxS%2BO22ow1K62rz%2Fj&X-Amz-Signature=0a312965b130d220cba10b5b50300ec2b0f6f87981eee6fadedbc1a093866127&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QBFUJE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeARj0dbZZ4Bkqlo05Ze%2FceTrOHaYUVkx01eFAHPCH1AIhAPcUCB%2B083NByb3uR8xvloYQ9h96lRyxYm2npbGbd1x6Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyo4%2FHBdirSauk3TgYq3APgL7esHUQ%2BIlCrE5be8wYVMYJAF0YTDIiJqlV7O90OUumvPdHQahjdkl1LDKuWf4lYrNd9tgRxHSffU1mQjGt2wPc%2BaWgqrai%2B%2FEk%2FlwGoCVxvi2LD%2BWLmscQ88iafR9XeR5dx3R2aPUEs8XzeN9675jBVGxR4vpYr0pguPaINDfu4oeIZHh1aOeBD96rawe49H%2Fv9Ebr7xaSRmGtJYwTknsYcX6xq8mVb5VejiQYCJgZe22tV%2F7ws2jvtgAnUKNxKAdTx8c%2FXu06KYYF9zbhEoRxSTsBc8yiWuc5wO6Ta9yquHsiKl9rOAV%2BhXxrbxgmAbEgP0ASkoWNS%2B24EeMVI5ptCaDU6c%2BD%2B915bWbZ8MK0h7NMvfJNC6ZnaSXt8oA275RAu5mIsNL%2BB%2BvVNEYkO6Pjvlrsot0IZnXFJt%2FFz1msBM6k8%2FDybnWfEJzkj7ON2%2BRmqcBeNmuV72xw7mZEQxDQKcmAZuq5cmnxZK17VyM%2Bk4ylmRvCRPVafgU9XGUbQseFt%2BJdrxAufdpGLkzV7NnwPYA73aRjkrBczTA6mFy53%2F3uI2ev1xKwKlBmNILN3CnJYEwndh6kdUWbmEPSnpwGNTAMXbGN9aPOOvADhoBQKaODyEv3ZxT7veTCkwvDABjqkAVOjFcqm0jt0Pm%2FcvQ%2BsffuOFaAJIjFaQlYEw9mpDyiRjh4Zl9jaBgisewMURHPUgJw2Egk7ifnuFOhyXyWu11%2FgJplIdCZ5A%2Fja4gnQ%2BHpEN1VA366Meeeuk0PGBQR4c2lJCjZLr8PYJg1AO4Bx5%2BjDcfbWgbCzZYOCNdmPwXS4grVkUf03hlfVKNaoeuTepZko1WaZm%2F3AxS%2BO22ow1K62rz%2Fj&X-Amz-Signature=209872d22563538442828e8da9a40b3353fb4ba581084107b3171ae8bac11329&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWEHXWY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVOFRYOZlq4G7m%2FXCIRmmXnIZU59Q9TG7E7sxZ9pNGtQIgNUNgSmwBP1tBTYffLPVAcjOXW1NDt53mmc0ZINchh8cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGeM8bZsjb1v%2BgRFSyrcA2yA5Zw37EHJgRKmRM0aRjhY8G9LhRLfC%2BqTLjLQTm4rgi0h8kRaoj06qr4eIJOTZkkbu%2FOCbRYbvTjlMgaMZfdl9VhLMg97auJZEL6mEmBHWDT0QEnEzu%2BLm5Xca%2FUHfNGDhtgU2h%2FewDGeh62niZvToCVBF2esmUQgL39p7%2B3lbTTh931SFojR4cc7NUzWAeQbmHFAatzI4pUuaK1qNpuug0BHIaJ6Rk5Ti8o9Gz4A%2FzXsmiHRMjaaJPipuupBpBT9C6pTHsEiOYavzzpMLPwk1DqUU9aXZ8CjRwUMr%2BlrdnY6u8HlwVjhklO8%2BsfYYCrNaAVQGt%2B9ax%2FtV6Kg8X7bHwu3LVa4RFoHE7eSVAtydFd0N17QGKe2DjHl5xe%2FqUn2V%2BjD0x0AaMSO152dVU2BeP%2F21pbotc8Adau6bi7aWHeNsII1yjkMcFMHa0ClAbL1kz34Zv9Zmdb0NuowSR8chvjeK9DbU%2Bz3JOF32emg6hQ0kjBnXSRgP3ZHX5JdUHOpgmYXHaLnodWYAokt%2FWmqm2VT58GRVkhyfRK1F35OzHLSZ7LWsyun2GNiDpbXVUt3Fb85LYFu3zsWzvSmaXjBy3zuIT9OBn270D%2FLUn3aaABx2pV62LvFVcWzMJfC8MAGOqUBdb7VdKAvzQcZ8Uu7mGjvPgTCFRD4ZKJ%2BFJMKvAjj0q1H2ftC%2BT%2B7alZBCoxEQF64EybU%2BUe%2BmqiDrr61U0NhhRAIqrDcyrZt1TKOKz2AFI8Za3S12KFVBCHzeKtSywm7LtBsMFMF%2FgwmY8EMcv48qZuFkphmSTwzOc81p%2FaSCKlmJ6USfLrkKWqhpNmIbRCiMnbhz5jLlqJhA%2FOLOs7IOSNOsWfk&X-Amz-Signature=24b0610c82a2ca6a9ab0cfd930213e212c74be54c569446131ae1d8d5679d925&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T557252B%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAGoonwbHV9FXklx1fYfxt8amx0qQM5b%2B0FaTIdIavzRAiEA2hd%2BU9XIESOI5fA9EjPKGjPHjjLKo57iDW1RV3bRPI0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGq9wvenr9jeW7N1syrcA4SoD%2BI%2BtVV5WgdRUfq6nWHtu2RblY9B4lESAX0zREn%2BVFS7DjoMOinXNPYUXpQhbbXOSpL1nR7NfwFHflj2ls0g0SmKfN%2Fry4pFLoAJBh4XRrhhqGnpCa8zcsR8Ce0bATUUGiI0i8QkHEiGsWeVEXtOojTacg3gKUFLHdVi%2BaiXo%2BiQH9BodjJAtdXsuNcRWaN%2FjnGqrMDICcIy8DjGxgY5p0%2FjK1i4InwfNGF3xbymOZi28YJ%2FlQY4zrao7BJegjXaIaJOFU2eEvyj0uriK%2FR1Lxra377hZFYDE%2FiPqOObD4X%2BQpqewnNH8PYqplSHSqQlu%2Ft6RP%2BZ8wZtWf9b9Zkk%2Fl7VAXwwMfLbxbBPMafhrqyf1gOfnu%2Bgt3bOtn0%2FASy%2BEW7cRwIrMr9z3qKz4%2FkEhyyJ3JJeTpemitexxhDAm5vZZ5MSXUZVTGNjxXKXGcK77rus8CJHgYfYELuy4HmgI0fQ%2FiPJRF0pjuPffOcYxdB7Rj7uCqGh7VLLPYJJWZqGpUA3FTEgdzlFddxwL%2BoQUzESwOsudXYXa3daKtMhlZ5CN7498w0F37IA3yHkPirq378gGq%2BskqsgU2%2FCuZhvYj%2B%2FyVoyy%2BYMN200Wu0KI4WA8ZahCFYkQvWBMMLC8MAGOqUBTvFwkI%2BtnvAVunVvBebbtb0a4HrM1ASS7gfWKSMtHA9FgRfE8zoD189FVYjy7OprogzqGq8h7O05DPJDR5ML%2BeVf1lIPuUYIJH6F1tpYasYLkZsEB4muLjYQ2yasesR%2F7hsjR4ie04IcpoQyFdDuld6nfMlZZBYZSoKZSwwwXFke5oVGJ%2BNgixv9Hh6xskMjBTmB8MR49VSeAMYbF9qLBIohBaoE&X-Amz-Signature=e9f67e37ddfc4590ab526f0532eedc3b42a727f5379022abaf88ebd97053055f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QBFUJE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeARj0dbZZ4Bkqlo05Ze%2FceTrOHaYUVkx01eFAHPCH1AIhAPcUCB%2B083NByb3uR8xvloYQ9h96lRyxYm2npbGbd1x6Kv8DCGwQABoMNjM3NDIzMTgzODA1Igyo4%2FHBdirSauk3TgYq3APgL7esHUQ%2BIlCrE5be8wYVMYJAF0YTDIiJqlV7O90OUumvPdHQahjdkl1LDKuWf4lYrNd9tgRxHSffU1mQjGt2wPc%2BaWgqrai%2B%2FEk%2FlwGoCVxvi2LD%2BWLmscQ88iafR9XeR5dx3R2aPUEs8XzeN9675jBVGxR4vpYr0pguPaINDfu4oeIZHh1aOeBD96rawe49H%2Fv9Ebr7xaSRmGtJYwTknsYcX6xq8mVb5VejiQYCJgZe22tV%2F7ws2jvtgAnUKNxKAdTx8c%2FXu06KYYF9zbhEoRxSTsBc8yiWuc5wO6Ta9yquHsiKl9rOAV%2BhXxrbxgmAbEgP0ASkoWNS%2B24EeMVI5ptCaDU6c%2BD%2B915bWbZ8MK0h7NMvfJNC6ZnaSXt8oA275RAu5mIsNL%2BB%2BvVNEYkO6Pjvlrsot0IZnXFJt%2FFz1msBM6k8%2FDybnWfEJzkj7ON2%2BRmqcBeNmuV72xw7mZEQxDQKcmAZuq5cmnxZK17VyM%2Bk4ylmRvCRPVafgU9XGUbQseFt%2BJdrxAufdpGLkzV7NnwPYA73aRjkrBczTA6mFy53%2F3uI2ev1xKwKlBmNILN3CnJYEwndh6kdUWbmEPSnpwGNTAMXbGN9aPOOvADhoBQKaODyEv3ZxT7veTCkwvDABjqkAVOjFcqm0jt0Pm%2FcvQ%2BsffuOFaAJIjFaQlYEw9mpDyiRjh4Zl9jaBgisewMURHPUgJw2Egk7ifnuFOhyXyWu11%2FgJplIdCZ5A%2Fja4gnQ%2BHpEN1VA366Meeeuk0PGBQR4c2lJCjZLr8PYJg1AO4Bx5%2BjDcfbWgbCzZYOCNdmPwXS4grVkUf03hlfVKNaoeuTepZko1WaZm%2F3AxS%2BO22ow1K62rz%2Fj&X-Amz-Signature=68ec3c688d63994dfdfd7c3c78594a4e5776f627a1f49e7fae185e68902cd48b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
