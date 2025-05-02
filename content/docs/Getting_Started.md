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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIV52Z2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGLjCEWRL7%2FimduKlNTyZLJP76ttCn3haC59q9deHgygAiEAloXTGN3PLMrLDscyS6DAE8OzaILYvW18LQB59gvBX%2FYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH34tvQiYpIa2SAQ%2FCrcA0z%2B16wj%2FY%2BA2DAZOToNwPb%2FiQawgeU0QgUGmcaa%2FPk0T55ZyJ7Uy57rZu9Uizx1bn0ShQX%2B60totrvFtHBkY9ObhjImAOHvUmnpS5TbWUMerIKBd9If%2FTs6%2F3eHEPdT0fcIYQb2bTCP54oEfl8KjfG%2Fb8m41nu94eGbr0OYHkNcV4zd8tSCiy5%2FDb56iIExe35vrsnBqX6iRbhrhxNBY%2BWYrM9nBtaDJj9ePoFOhMSzZKQ8w3jgZsy%2FHGHGYqgR1dGdX2drmlZcuZi1yMw%2F5uAk3NWI3BrhYJuNuQJAA9p%2B9jpCaY5mNt5o2zSwYOJyPAuyAbq%2FG%2FpIVjqKwrRDwZsB%2B1%2B0JlrL8kwY8KBy8DJi9HV3lSdNR6mj0B8wQZO4QkA8xmUgO%2F11MRhtT9XyPOOpslRbhQ2oIqwT4JGy60jlhlWnFzxrnA6czx2732eUMLsHPkodcOOv4O8z6dkIJ08SdWTM1GthCgG%2Bnb9f56pVhNU9o5Y4pE1iZR2DdTnvXzR6srTgQ3P34cMEtdPO87JS%2BK%2BXiGw3QIN53tfKCIep1dRPoMuBDi7gptUTdiqDwMABoqmyAiEuuKv0%2FsRI0D%2FWsYnp%2Fh3wKweCmUcDwjmYRPWsyuxpkO1NYGi4MKOp0sAGOqUBfKYLKE8Yj3DZPvtMDSEf%2Fw%2FaYxyqzEPLmqH7zi4mwIs1VmaOSdRxV%2F%2F3U0H4s7LLiB%2BdPd%2FOepU5eHp5%2FwCpl%2B1832eBU9FPOTqPdMoFUZISsMHqKhaD0TjgKBF1ijZdRC0DNCGYOwcl3ccXFsjtcYNC5YxeQRyZJIm1WVOgQObBMAXI5%2B%2BH75zU60K34UjposnjDq89yGRqF4xMeOrEv5nxMJBE&X-Amz-Signature=30bb537ffd1ba6ba1d11bed5c37279fb00e9494befe78e9111d84250bf6db7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIV52Z2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGLjCEWRL7%2FimduKlNTyZLJP76ttCn3haC59q9deHgygAiEAloXTGN3PLMrLDscyS6DAE8OzaILYvW18LQB59gvBX%2FYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH34tvQiYpIa2SAQ%2FCrcA0z%2B16wj%2FY%2BA2DAZOToNwPb%2FiQawgeU0QgUGmcaa%2FPk0T55ZyJ7Uy57rZu9Uizx1bn0ShQX%2B60totrvFtHBkY9ObhjImAOHvUmnpS5TbWUMerIKBd9If%2FTs6%2F3eHEPdT0fcIYQb2bTCP54oEfl8KjfG%2Fb8m41nu94eGbr0OYHkNcV4zd8tSCiy5%2FDb56iIExe35vrsnBqX6iRbhrhxNBY%2BWYrM9nBtaDJj9ePoFOhMSzZKQ8w3jgZsy%2FHGHGYqgR1dGdX2drmlZcuZi1yMw%2F5uAk3NWI3BrhYJuNuQJAA9p%2B9jpCaY5mNt5o2zSwYOJyPAuyAbq%2FG%2FpIVjqKwrRDwZsB%2B1%2B0JlrL8kwY8KBy8DJi9HV3lSdNR6mj0B8wQZO4QkA8xmUgO%2F11MRhtT9XyPOOpslRbhQ2oIqwT4JGy60jlhlWnFzxrnA6czx2732eUMLsHPkodcOOv4O8z6dkIJ08SdWTM1GthCgG%2Bnb9f56pVhNU9o5Y4pE1iZR2DdTnvXzR6srTgQ3P34cMEtdPO87JS%2BK%2BXiGw3QIN53tfKCIep1dRPoMuBDi7gptUTdiqDwMABoqmyAiEuuKv0%2FsRI0D%2FWsYnp%2Fh3wKweCmUcDwjmYRPWsyuxpkO1NYGi4MKOp0sAGOqUBfKYLKE8Yj3DZPvtMDSEf%2Fw%2FaYxyqzEPLmqH7zi4mwIs1VmaOSdRxV%2F%2F3U0H4s7LLiB%2BdPd%2FOepU5eHp5%2FwCpl%2B1832eBU9FPOTqPdMoFUZISsMHqKhaD0TjgKBF1ijZdRC0DNCGYOwcl3ccXFsjtcYNC5YxeQRyZJIm1WVOgQObBMAXI5%2B%2BH75zU60K34UjposnjDq89yGRqF4xMeOrEv5nxMJBE&X-Amz-Signature=93e2582e929c7ae4508b4da4337b091c1768a2013a3900f8dbacbbf7d3195b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIV52Z2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGLjCEWRL7%2FimduKlNTyZLJP76ttCn3haC59q9deHgygAiEAloXTGN3PLMrLDscyS6DAE8OzaILYvW18LQB59gvBX%2FYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH34tvQiYpIa2SAQ%2FCrcA0z%2B16wj%2FY%2BA2DAZOToNwPb%2FiQawgeU0QgUGmcaa%2FPk0T55ZyJ7Uy57rZu9Uizx1bn0ShQX%2B60totrvFtHBkY9ObhjImAOHvUmnpS5TbWUMerIKBd9If%2FTs6%2F3eHEPdT0fcIYQb2bTCP54oEfl8KjfG%2Fb8m41nu94eGbr0OYHkNcV4zd8tSCiy5%2FDb56iIExe35vrsnBqX6iRbhrhxNBY%2BWYrM9nBtaDJj9ePoFOhMSzZKQ8w3jgZsy%2FHGHGYqgR1dGdX2drmlZcuZi1yMw%2F5uAk3NWI3BrhYJuNuQJAA9p%2B9jpCaY5mNt5o2zSwYOJyPAuyAbq%2FG%2FpIVjqKwrRDwZsB%2B1%2B0JlrL8kwY8KBy8DJi9HV3lSdNR6mj0B8wQZO4QkA8xmUgO%2F11MRhtT9XyPOOpslRbhQ2oIqwT4JGy60jlhlWnFzxrnA6czx2732eUMLsHPkodcOOv4O8z6dkIJ08SdWTM1GthCgG%2Bnb9f56pVhNU9o5Y4pE1iZR2DdTnvXzR6srTgQ3P34cMEtdPO87JS%2BK%2BXiGw3QIN53tfKCIep1dRPoMuBDi7gptUTdiqDwMABoqmyAiEuuKv0%2FsRI0D%2FWsYnp%2Fh3wKweCmUcDwjmYRPWsyuxpkO1NYGi4MKOp0sAGOqUBfKYLKE8Yj3DZPvtMDSEf%2Fw%2FaYxyqzEPLmqH7zi4mwIs1VmaOSdRxV%2F%2F3U0H4s7LLiB%2BdPd%2FOepU5eHp5%2FwCpl%2B1832eBU9FPOTqPdMoFUZISsMHqKhaD0TjgKBF1ijZdRC0DNCGYOwcl3ccXFsjtcYNC5YxeQRyZJIm1WVOgQObBMAXI5%2B%2BH75zU60K34UjposnjDq89yGRqF4xMeOrEv5nxMJBE&X-Amz-Signature=e0a0fefbdd7901568d9b7bc51d090cb69732937ca2e424263d5879cef58de09c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXKLZ3K%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAxzConBdZW8i2V7ARsi%2Bir4wYwuQz54s0c1qcyr3ayRAiEAmZuAzqVCkeXtWWFE5s8Ts3Y0Ilivxy1VMpLSz8NE5b0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaQUJGPUOucMp87KyrcA%2FJJRwNlTT0uEe3qvhcSUyUbjMolleCFVPqYtEPInL3fHxZGnpulHadCoKbpNoNo1KpL5BzqygTnzmGa36FHfp3fuHNb4NLUMdNpXCF0F6Z95N4zEkfUbW2PXHW8EXs0w8llZ6dmtjbJqRie1q5qhAgu77nvJws1y5YCw1izYoF9NUVg46ZeU369rfYSUhsPqeI1M8%2FnKCVKbOJw3h1NBY%2F3H1b%2BIIKejdeuBOOdv0lPlnR6YX7T4aNy8NkBq7RTMiM7VljyFGrDbsBetMAhYQ2%2BqU0EQS9Nw61%2Fco3BQ2y%2Fl3sVo3tNaK7XgR6Yf25rcsvMH7%2BRuQppRXlaM2SeOw0Sd1ltP6%2Bv03o6zB0UFF25vmvWKOeog9N1yOD%2BcTrrFWlDOo0XVATSFd9VAEVs%2FjX5PcTjp7%2BcRwBKVaWU1vqvuuhEd2wnejtQpG4mUspIVFPPpF%2FVCGmhxq%2B5AznY8C92umWrnkik3Ng40pmTc9uTZ%2F2Rb4wGaWjhyapRdY%2BatnCVEPClNjjJS20RpBEDM98d7p5UQm5u2MXBirjLoCF0vGd%2FNPC%2FkBHilgeibPCY1GSuMckWuKr9xqGLNUs4vxoUN9hKfsAB132q%2FAFGP0Q%2B6bQqmO62pk14nypJMP%2Bo0sAGOqUBM2CqW9OmYSvuWrQO4N5xAmSJuTIL5WqSZRIAMk2huIj7qyOWCiU0wb%2BDLD5nZpUv1GYmc88AhBuFaKS76NWAj1AGoozVN6evrUKym%2Ff1hrj5hxdk%2B0vjUappEhus4P8kobR93IZhZA4lt%2BIsSCO8JOZSP1iANCQIx2VQe%2Fvq3pxVWLNxuflBM%2F%2BsdEi89Y%2B9JZC25ojY2XM7D41b02SEyMbSW7B2&X-Amz-Signature=4222261c33541584ecc559dbaf60a66a7f4c1d2676feabaffff86cc7d1bb936c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQURKH4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIEIuOHQmJbsfqtVinWRekXmZaqo2Hz%2FRQGEzAPgo20yqAiBvF1qTIsVVmr1wECYa4uH878rEPDkzuSbY2q2lmROgDCqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbAfRjaiaRN0P5dYnKtwDsS1FqDriknbbGoDvDFU649GXEKUzLTJRAapADKc6BWCOWqSkyhYBPM4bySXQdpaClX9tha5g7zbLuH4UxbdYLiPxb%2F4asWpbU8%2BSTHQzoOQ%2BPoPPsiBR5fvKaABR8nDqPncpmBPdjfqSX3CiJagrKal8rL9DCsN5jNmLXQz0lbufgEtdjkCdLGdBsRbLnwkIc4GEmUQFIuSMWmdcJbszk0LTo9Xr8LT0k3GgpNtqUIgMU7jkjRgRs1dNzPBkoVDNB38HWOP8ngauUWrLIfWGUjddDnzSPXx4m%2FgD7YT7IlF99W54f0sXruyfUUIQQpNgju9MxZzAz7K%2BnS0o3hwnNxGjc0vnC8oMxE4kzfxWBIr0Jc7%2B9KariT%2BrXWdmd0xi4vyTvp%2B93ePPWUKxCpFpWpdiIILwFbHJQI1byfmStUW4vNaAbDU%2F%2Fx0xKXfLio9GjkkcKHxjv8WfjRQFaUNLBZyXzG7QZNUWoh8P%2B8%2F1U5NeQfYlvgtkzXY9aFqexKMHMXAGvZL77zoXXaj%2FGe3m9UyrcF2mRlrew%2BT9ER9JLJUGDW6nITSHLyieDaOFr%2BT6zcJ6RJ3RAB43wgQEeqkzC4VdTPmOaq0xEh7uAD3rLBV%2BRNGeXopPMbCboRAw76nSwAY6pgGlWkBOt0xKjJZIZYVtAbjNB2RZHXxSg621Aj43JdH9swshFwxaDZmvt6hxMLksOiyEWPMrYLh%2B2GVtQyFaXPXCPvoXqIr3%2BP4tasdTyGN1rANyZduXCihS6QlOk%2F89F83mza8fP3IV7RdmCtez8Q9U2hhosJ%2Fr7e3aEyJFjA8svUhVTkb9Xt%2BB7R70e3GTImHDm%2B%2BfICH6aAa1QVSmV9xWumM9%2BDRh&X-Amz-Signature=acbbf25bea8dc4d0c4718166bb213b2993ef70613e7dea400d20e70bede34df1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIV52Z2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGLjCEWRL7%2FimduKlNTyZLJP76ttCn3haC59q9deHgygAiEAloXTGN3PLMrLDscyS6DAE8OzaILYvW18LQB59gvBX%2FYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH34tvQiYpIa2SAQ%2FCrcA0z%2B16wj%2FY%2BA2DAZOToNwPb%2FiQawgeU0QgUGmcaa%2FPk0T55ZyJ7Uy57rZu9Uizx1bn0ShQX%2B60totrvFtHBkY9ObhjImAOHvUmnpS5TbWUMerIKBd9If%2FTs6%2F3eHEPdT0fcIYQb2bTCP54oEfl8KjfG%2Fb8m41nu94eGbr0OYHkNcV4zd8tSCiy5%2FDb56iIExe35vrsnBqX6iRbhrhxNBY%2BWYrM9nBtaDJj9ePoFOhMSzZKQ8w3jgZsy%2FHGHGYqgR1dGdX2drmlZcuZi1yMw%2F5uAk3NWI3BrhYJuNuQJAA9p%2B9jpCaY5mNt5o2zSwYOJyPAuyAbq%2FG%2FpIVjqKwrRDwZsB%2B1%2B0JlrL8kwY8KBy8DJi9HV3lSdNR6mj0B8wQZO4QkA8xmUgO%2F11MRhtT9XyPOOpslRbhQ2oIqwT4JGy60jlhlWnFzxrnA6czx2732eUMLsHPkodcOOv4O8z6dkIJ08SdWTM1GthCgG%2Bnb9f56pVhNU9o5Y4pE1iZR2DdTnvXzR6srTgQ3P34cMEtdPO87JS%2BK%2BXiGw3QIN53tfKCIep1dRPoMuBDi7gptUTdiqDwMABoqmyAiEuuKv0%2FsRI0D%2FWsYnp%2Fh3wKweCmUcDwjmYRPWsyuxpkO1NYGi4MKOp0sAGOqUBfKYLKE8Yj3DZPvtMDSEf%2Fw%2FaYxyqzEPLmqH7zi4mwIs1VmaOSdRxV%2F%2F3U0H4s7LLiB%2BdPd%2FOepU5eHp5%2FwCpl%2B1832eBU9FPOTqPdMoFUZISsMHqKhaD0TjgKBF1ijZdRC0DNCGYOwcl3ccXFsjtcYNC5YxeQRyZJIm1WVOgQObBMAXI5%2B%2BH75zU60K34UjposnjDq89yGRqF4xMeOrEv5nxMJBE&X-Amz-Signature=d6620a16c3e8978dc8867679b1d19c158230017283b96e4a727e8a16a501112f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
