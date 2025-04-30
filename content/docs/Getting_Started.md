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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEANZIF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSmTtx0zl2yACTGyvA7yx6Bwx88kOvBtqB54aIRcMM6QIgCo9zGvOQw339lT1fnCzot32McspJaydY3%2BMrIMGxfR8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoWTf8y2Z3xqpw30ircA60xkstt0VPhKOf0ynz8Wwjc%2BrkRIjQl3%2BD9QC3wfnNBUledoVvYKh5oJV5hNpuLiGOLfsClz5c6zv3QpER6p0kOjjgpU2lbfmGgo5Pn6jUbWX43cIaSriCAlznnBMk4djwxSMXelyqoFG2hSC%2FH8PTtcTftE15%2B9kt9p%2BGAFPZ7P3ZsNHBakAZDhtpo%2BklIhSeh0Vigk2ZOzK5aV2KciWUSIVvpQPVM2RF0XXkXPCjmav6Gg90NZyqpvW0yZFCaUKWlxEObUlBbXZMOT%2FFLyGXqdo1pV7jfcHTPxkJBzBxfBpvzFeo62tsOXiYtdqHcCiKwKRuGfa0Kjaq27Bx2si9El58LJr8k8SlG7EfuRRktNuOMzLwnBqMvdKsyBTcPTRvjNP3n3ev6uEDaIqejFWULfy5TLkbWFCUKMEPZGA31%2BICs7x6QUdBqYGFOIFDEODeczpFX%2FLghXdxOsFqIf7L39IDEkCmB4IsbGEQ82nWfthatFbt4nEo2dKkCu2zhqsSiwb6ryw%2BPt9mk30B1VVL6PjEqjgSIhHmZEpH6OrjM0du3K46M8DEW78d2vXUt6OFxjm%2F8vTZQVqI6sdkjBSz5X1BVJNIJdpLO3iZ4oqUjspUfEBn7xWNC%2F23kMJiixcAGOqUBSAV4i9vvCjceuGF3hmRLiAo4WMWveanAbmyWhnW8OWtw0Bx%2BmVAr8qLdAg0boa1FJTlR9BP2sIUwQaAl9XoAcZgePr5QnBNwtPTuBK3exhbJMmI5WdmEZwibwWfJgu7%2BdD6Czo8HKaEpfu3G054Qejw89pdj3z%2FTL6%2BJADBNy6iyIl3ejhG9WYp4l0dmxuELZzRpRoOFdA7xeBbSzhCWpsQ5E5Qw&X-Amz-Signature=939545dac1db4825becffed236e64458cffca8030eded4731d4a77878a0f4e57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEANZIF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSmTtx0zl2yACTGyvA7yx6Bwx88kOvBtqB54aIRcMM6QIgCo9zGvOQw339lT1fnCzot32McspJaydY3%2BMrIMGxfR8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoWTf8y2Z3xqpw30ircA60xkstt0VPhKOf0ynz8Wwjc%2BrkRIjQl3%2BD9QC3wfnNBUledoVvYKh5oJV5hNpuLiGOLfsClz5c6zv3QpER6p0kOjjgpU2lbfmGgo5Pn6jUbWX43cIaSriCAlznnBMk4djwxSMXelyqoFG2hSC%2FH8PTtcTftE15%2B9kt9p%2BGAFPZ7P3ZsNHBakAZDhtpo%2BklIhSeh0Vigk2ZOzK5aV2KciWUSIVvpQPVM2RF0XXkXPCjmav6Gg90NZyqpvW0yZFCaUKWlxEObUlBbXZMOT%2FFLyGXqdo1pV7jfcHTPxkJBzBxfBpvzFeo62tsOXiYtdqHcCiKwKRuGfa0Kjaq27Bx2si9El58LJr8k8SlG7EfuRRktNuOMzLwnBqMvdKsyBTcPTRvjNP3n3ev6uEDaIqejFWULfy5TLkbWFCUKMEPZGA31%2BICs7x6QUdBqYGFOIFDEODeczpFX%2FLghXdxOsFqIf7L39IDEkCmB4IsbGEQ82nWfthatFbt4nEo2dKkCu2zhqsSiwb6ryw%2BPt9mk30B1VVL6PjEqjgSIhHmZEpH6OrjM0du3K46M8DEW78d2vXUt6OFxjm%2F8vTZQVqI6sdkjBSz5X1BVJNIJdpLO3iZ4oqUjspUfEBn7xWNC%2F23kMJiixcAGOqUBSAV4i9vvCjceuGF3hmRLiAo4WMWveanAbmyWhnW8OWtw0Bx%2BmVAr8qLdAg0boa1FJTlR9BP2sIUwQaAl9XoAcZgePr5QnBNwtPTuBK3exhbJMmI5WdmEZwibwWfJgu7%2BdD6Czo8HKaEpfu3G054Qejw89pdj3z%2FTL6%2BJADBNy6iyIl3ejhG9WYp4l0dmxuELZzRpRoOFdA7xeBbSzhCWpsQ5E5Qw&X-Amz-Signature=82336b2dec40b42bed88904fd0c9a0a2aeb55db7a9b283ba15c9156e2c568308&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEANZIF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSmTtx0zl2yACTGyvA7yx6Bwx88kOvBtqB54aIRcMM6QIgCo9zGvOQw339lT1fnCzot32McspJaydY3%2BMrIMGxfR8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoWTf8y2Z3xqpw30ircA60xkstt0VPhKOf0ynz8Wwjc%2BrkRIjQl3%2BD9QC3wfnNBUledoVvYKh5oJV5hNpuLiGOLfsClz5c6zv3QpER6p0kOjjgpU2lbfmGgo5Pn6jUbWX43cIaSriCAlznnBMk4djwxSMXelyqoFG2hSC%2FH8PTtcTftE15%2B9kt9p%2BGAFPZ7P3ZsNHBakAZDhtpo%2BklIhSeh0Vigk2ZOzK5aV2KciWUSIVvpQPVM2RF0XXkXPCjmav6Gg90NZyqpvW0yZFCaUKWlxEObUlBbXZMOT%2FFLyGXqdo1pV7jfcHTPxkJBzBxfBpvzFeo62tsOXiYtdqHcCiKwKRuGfa0Kjaq27Bx2si9El58LJr8k8SlG7EfuRRktNuOMzLwnBqMvdKsyBTcPTRvjNP3n3ev6uEDaIqejFWULfy5TLkbWFCUKMEPZGA31%2BICs7x6QUdBqYGFOIFDEODeczpFX%2FLghXdxOsFqIf7L39IDEkCmB4IsbGEQ82nWfthatFbt4nEo2dKkCu2zhqsSiwb6ryw%2BPt9mk30B1VVL6PjEqjgSIhHmZEpH6OrjM0du3K46M8DEW78d2vXUt6OFxjm%2F8vTZQVqI6sdkjBSz5X1BVJNIJdpLO3iZ4oqUjspUfEBn7xWNC%2F23kMJiixcAGOqUBSAV4i9vvCjceuGF3hmRLiAo4WMWveanAbmyWhnW8OWtw0Bx%2BmVAr8qLdAg0boa1FJTlR9BP2sIUwQaAl9XoAcZgePr5QnBNwtPTuBK3exhbJMmI5WdmEZwibwWfJgu7%2BdD6Czo8HKaEpfu3G054Qejw89pdj3z%2FTL6%2BJADBNy6iyIl3ejhG9WYp4l0dmxuELZzRpRoOFdA7xeBbSzhCWpsQ5E5Qw&X-Amz-Signature=6d3436c388101fe70d41db1be927f8e97cd1b5d5052b2745ffd56432a8323c78&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXMZFN3O%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSvW4vm0zbCTGR2cQYsFGMEiomCz2E6ki%2BfFvzIcMrsgIhAPAFrup3kjA7%2BaH%2B0faZsMVFM8pzEH25ppyXaAuDUmdXKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjanhfXp%2FBeXc2Gisq3AP7tLj1NudZMXqjOxPQYeo6D7IUqYMAmq8my23tAFHwFa3zuWYDzwtPq%2FMr5ssXhH748q%2BqgILat2%2Bz53q7FGqfZzHkzmEQIybqY67ze7Ya5YxV34pz9t8SB6gJhn2wkh2Sx0qy2k1RqD7TFWX3wnsMR1EBzfFs6jS4Vgb24ghyj%2FjmaFZ1jciiuMGFgxHDnSuLxFN5f0frvzybYUtczllwJ3aqvo7J1Uw9VTd1YtEctVu1LdsbNpDTTH9IRqd8GNDL83adcEhhLqmyZzLffrlqOpI8XcFl7AP4JDcl0TAhE%2Bcmhd8Bb59NxeHm2IZEPTuSXUXkzkqZwHp5oB4PYnJ%2FElNfxR6%2FnppUYhWZXDrAuCZuKUFEONjR5CY0U6HTEHv%2FR9kWjM9UOgEFXqgMB1l%2B79c%2BpvSfVWhr6nnFRSFGRy4ylZi8M5VbeyxU8rJeUWc0WbYVHMHWmIITb%2BHwXN6DZX3b93s0r16aKLmpokgk8tNXiHlepdqBY8Th6dVE9LLQJviYzd5QKDhJtcMDsr%2BP%2BxwK7H4M61Ikv9bscWAKsKrdrqmhJyrR05itaWNjtpOcT6vhY7P3zCwuzRm8%2Fsl%2FpcZGQoOrwgJ3rKmIqcAkNCDFTz2BIykzlIIA%2FzDiosXABjqkAWljYz1or%2BnXY8m%2BeSjyy9O2DeKGuJUYJiftUR5zzmD2tkNXzZd4HeQ87AHOIrLbF9nDXXeTqJQgC1Jtre21Uy6hVDg3zM6Nim%2Bmm8nIE4jOfHQE61tF1PVtQYfQ0bZMjsI%2F3hBcpx%2FaXiaB5hGbvHjrHpJ%2FySWVphHrdnBFWb0Ia0FHXPUuDfdLUNm%2FcFGRWwG5eiFKHDJqoTQ0p4RQoeC1YJvy&X-Amz-Signature=7b559260bf0f66b07bff77c20b7a7827553c1a47fea278eb4558b27b2239b6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMKJTXJ6%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICEFlXc5YT3YCl8R6FRhZNAyoHOS9KkhF%2BDCMAaz2SJsAiBmyQhhiQilJV4tMdBYtXOuUKwhEKSAi4lKffUZkuwbkiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqqSlONGdE2RYZVvuKtwDmofD309lfElofetpJAfupwJpd901mZt4Il8iRDeDlHr8bnKoGIY8AXDg5vszlWKBNrG3ehY0hZQVMsoLj86PXAUNedXoKZlybu%2FZ%2FEmfnEU8eTke4Wnuh7PGMiYXAXCLT1s%2FEGYF7B6Kz8tPHx0C2zjY6JccWHq3AIDbnACcqjiAnCivF7pFuFBYXi6i%2FSX%2FJc4bqr4yDBu7ikNhZB%2B96o5smVySxit2yAAbDuTj32sbHoTgruMtU3LelD6p5pAZ8EGDrbBLq4nJhVlLR0dngPy%2FrQfDUeYRT6zm8esurKXKuU9c2uTPdM2R8RweTORengflYOgH4uqKpZof8IS8mgxFNSoblhY1LGwyHXNO01zXEkQNcdqWeG9J%2BNALaNM1q%2Fyf6u49HUUqiis%2FStMTBYBTDdMiVs8n5qe4g6JPtPaWR%2FXXgK4D1HsFwHbV63gJQYGzn9UAr2WSn2ePH4JtApV2JU9VaztUf6NUT3QYUixfUwTug1uJUt%2BJMp%2FqbCZwgT%2B%2FSQNUBXoUDQP8MZEWyDyjWMYsNFFx%2Bx8oG291J4hQ%2FKht7BpjsEasng2y7VZi8nfAAGchKBfd9HvuKZjgN6p9TER9B5uvp1fY1IO2OdZG56k29od8vkbpsXYw79PFwAY6pgFyCIzz5nSVIgEWCIdqSNlum9vXZYdGyYxgsehp4YBZEVrsEssRwFYfHAyHZ1KXgELrey79T0wZ%2BVA81tNppGOYmAOHwAsKS2KAbgNCEtVUweXVgHr83St0m3WCvlsWSnCUTuyJnwp5E973AgGpoRRbTp2mp2NuaItz214ct1ERwzVWkfIyOt42j0eXWdHmOiegDtns%2B2%2B3%2BY9rmiAvzITTH6zhc7a5&X-Amz-Signature=9c871f4c65c6b9c16e3a6f25c199e542296a1ed8f1aa7c2264337b03cb94f569&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEANZIF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSmTtx0zl2yACTGyvA7yx6Bwx88kOvBtqB54aIRcMM6QIgCo9zGvOQw339lT1fnCzot32McspJaydY3%2BMrIMGxfR8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoWTf8y2Z3xqpw30ircA60xkstt0VPhKOf0ynz8Wwjc%2BrkRIjQl3%2BD9QC3wfnNBUledoVvYKh5oJV5hNpuLiGOLfsClz5c6zv3QpER6p0kOjjgpU2lbfmGgo5Pn6jUbWX43cIaSriCAlznnBMk4djwxSMXelyqoFG2hSC%2FH8PTtcTftE15%2B9kt9p%2BGAFPZ7P3ZsNHBakAZDhtpo%2BklIhSeh0Vigk2ZOzK5aV2KciWUSIVvpQPVM2RF0XXkXPCjmav6Gg90NZyqpvW0yZFCaUKWlxEObUlBbXZMOT%2FFLyGXqdo1pV7jfcHTPxkJBzBxfBpvzFeo62tsOXiYtdqHcCiKwKRuGfa0Kjaq27Bx2si9El58LJr8k8SlG7EfuRRktNuOMzLwnBqMvdKsyBTcPTRvjNP3n3ev6uEDaIqejFWULfy5TLkbWFCUKMEPZGA31%2BICs7x6QUdBqYGFOIFDEODeczpFX%2FLghXdxOsFqIf7L39IDEkCmB4IsbGEQ82nWfthatFbt4nEo2dKkCu2zhqsSiwb6ryw%2BPt9mk30B1VVL6PjEqjgSIhHmZEpH6OrjM0du3K46M8DEW78d2vXUt6OFxjm%2F8vTZQVqI6sdkjBSz5X1BVJNIJdpLO3iZ4oqUjspUfEBn7xWNC%2F23kMJiixcAGOqUBSAV4i9vvCjceuGF3hmRLiAo4WMWveanAbmyWhnW8OWtw0Bx%2BmVAr8qLdAg0boa1FJTlR9BP2sIUwQaAl9XoAcZgePr5QnBNwtPTuBK3exhbJMmI5WdmEZwibwWfJgu7%2BdD6Czo8HKaEpfu3G054Qejw89pdj3z%2FTL6%2BJADBNy6iyIl3ejhG9WYp4l0dmxuELZzRpRoOFdA7xeBbSzhCWpsQ5E5Qw&X-Amz-Signature=2f9db5fe8e6d062d2d226c88500f3f11794ddc4ae4d37750b6c47b86f5b4f85b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
