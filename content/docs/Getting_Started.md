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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVJ2YPV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlKFR4tgNgA3wEHKnYvlAKieGg6oLjM3oT%2B8rP3lgf9AIgGPe7AwHOURorz3q4%2Fp1lzxFNu6zSzr3pSzjCjennEMkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDK%2F0leSuT7dGBwM23ircAz%2F6uuuJS5mpUYdf0CeqC15%2BGQJQ%2FFO0BvpHKJBlz%2FCGas5%2BcebQth8Lc%2Fj%2BzQqto83JOuUlvMtFwnNhjNXWOnN0hvG1BlvMtJAXT6ma%2Bztvr7wcXW3qPhmRi%2FAGpnBcTnFLZAvo1efZrKHVWMtu8fCumIR9KPcOiyFLxHND3ZELsvue9ToyXDSUxJvUjza5pTitGpmGRNIIS64ubESs9OuUH2HvnMn%2FwGAnaLRC1ql2JbUkXOxn4T2OiKpyZDgiHH2abHulW0XbKg2lEox9kdiODww%2FcIX%2FRBD9h2aBexGy4XUEjJXgI9L4hLK%2B1qhisqXnT6NJhMsu%2BTbyNSY7i3LjBANpTKGer2jM9o%2FHX8dwQ9RRfG6cztiRFtSo57SKpWaD3CIfDLZsfEMySD5bb9LOQZ6dKJg5sJC2o0XB9jED0MDoi33tG4LcfrlaNKZKdwO7QB5aWtqdQ2%2BEM476Q3Lspo0sIiBnCt3a%2B2ariBPicck%2FptczA%2FUNUcK5x4SMc8loOyB%2BtNvQAOtQJMGp18AI3op9O3KyZmZZSn%2FPwSxdCq4PLFsq7hpkbfNKFNre70JgwAkJtUe0Du0g62yKI9wPpmflixwRU0XJqDI1VD50NNMJ1PEOmAh8uA6fMP2UvMAGOqUBy5KB64Vzsans7LYiW1hVdRJ%2BFw8OW0mXqmdza%2FQdFrkCPOsSqDzBzZ5pUAlUu79yB30AGIXYQlQMadIVT17nut31wo4JMSTCF6D17nXQV9VlpI%2Bz%2FX0nWBxjahp5%2FanmmeASWT3DxsTxEaWG6OQdk5u%2BY2quniuzay9fq6UtLhwyqdyPe06q0KUWehP4juQPVK5pxj%2BsNWlqS0svQnfWUhgt61Xw&X-Amz-Signature=542ec01e03f48e3122fd76d4130df15d73a31c3bb7fc4cc382d66de02b8637dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVJ2YPV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlKFR4tgNgA3wEHKnYvlAKieGg6oLjM3oT%2B8rP3lgf9AIgGPe7AwHOURorz3q4%2Fp1lzxFNu6zSzr3pSzjCjennEMkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDK%2F0leSuT7dGBwM23ircAz%2F6uuuJS5mpUYdf0CeqC15%2BGQJQ%2FFO0BvpHKJBlz%2FCGas5%2BcebQth8Lc%2Fj%2BzQqto83JOuUlvMtFwnNhjNXWOnN0hvG1BlvMtJAXT6ma%2Bztvr7wcXW3qPhmRi%2FAGpnBcTnFLZAvo1efZrKHVWMtu8fCumIR9KPcOiyFLxHND3ZELsvue9ToyXDSUxJvUjza5pTitGpmGRNIIS64ubESs9OuUH2HvnMn%2FwGAnaLRC1ql2JbUkXOxn4T2OiKpyZDgiHH2abHulW0XbKg2lEox9kdiODww%2FcIX%2FRBD9h2aBexGy4XUEjJXgI9L4hLK%2B1qhisqXnT6NJhMsu%2BTbyNSY7i3LjBANpTKGer2jM9o%2FHX8dwQ9RRfG6cztiRFtSo57SKpWaD3CIfDLZsfEMySD5bb9LOQZ6dKJg5sJC2o0XB9jED0MDoi33tG4LcfrlaNKZKdwO7QB5aWtqdQ2%2BEM476Q3Lspo0sIiBnCt3a%2B2ariBPicck%2FptczA%2FUNUcK5x4SMc8loOyB%2BtNvQAOtQJMGp18AI3op9O3KyZmZZSn%2FPwSxdCq4PLFsq7hpkbfNKFNre70JgwAkJtUe0Du0g62yKI9wPpmflixwRU0XJqDI1VD50NNMJ1PEOmAh8uA6fMP2UvMAGOqUBy5KB64Vzsans7LYiW1hVdRJ%2BFw8OW0mXqmdza%2FQdFrkCPOsSqDzBzZ5pUAlUu79yB30AGIXYQlQMadIVT17nut31wo4JMSTCF6D17nXQV9VlpI%2Bz%2FX0nWBxjahp5%2FanmmeASWT3DxsTxEaWG6OQdk5u%2BY2quniuzay9fq6UtLhwyqdyPe06q0KUWehP4juQPVK5pxj%2BsNWlqS0svQnfWUhgt61Xw&X-Amz-Signature=cf9c74baf3e6180ea2e67c11f30312f0fdcba5bdb3706e2584b503c0f17997e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4UKDZA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDryNikT06d6I5LI6GZp0bR6tiXVeL99MKiihmoBIqBlwIgFSj9PIGtzYd9jjRhKOq9DuX2FTXoF9n0H4bV6dUNcNAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJzbPancOFz5Ffs4%2BircA6ajhNyZfmqUtWQJqbBsM3NatPJuDyUhIGla0MxlOyrAN0uGNeizKcLStjiiEOYk8zFfNG3bWAGLMxbQ2cbJ4Co0CYzL10zYwXiGivukIiOwyHffoUbEWzXFchekM7Benx0GlFIvpniG7gVgmUDVRu6SkWvEBqm57ScWwyoiyVis8H2%2B98b1OOXdAKhrw1tIkd3T0KoCkxQ%2FI95HHyIRvWOpChhcNMknkTl7fP%2FtE%2B5WDCbCdmm1OMHV2ICFnWzCouUpsdyLWaRM%2BZkW3m6iPGe9Z05ATLRYLOMg0U%2FC86DO3mOndHiWnPBILRXsoqf9nIyjyXxHcYfScbhPu4h6V469x4gN9KXnCpgzKWvBtIk9tzwtUeQE7uGyUoDPGQKY3O7FsAyF%2FyYQxqojXveUgJkck626omuQkOV1O8Lh6NyxQ0dKp0RKM8G1pdW4WhdyypXbx3JvI0DXrkHubF%2Bf%2Bo%2FHNJJU%2BJyLgTe19H5n53fO49dK23JFnwLX0kc54l0MYHxiFGMB49qhmG8LGONCVoU28IL09ny1u5nqkgMhS2j8Fbi%2FxRGVi3WwbbVWAKsfaIcVwtocRVjQeQCVHmPlBbToX5nDr4OmYROyz5w0WlyjcpBw%2FRPhmUzXEtvaMKqUvMAGOqUB7NHpIGTrV5Q6dqaI1PKTh5zYnxS7RYUu2RVyN8LQGANecv0CHbQ4O80SDyoQktOFACP4Y5gutCIMgcOMBwo5bRgfNV3QIqsyGQpoLb%2BHrYhj5ilyXq9OhmsICoI%2Fa7EDTkzmCuq1Q0ySFz1RF45cl4qtU30L7o6bkDBD%2BDanbAyuyWpDnRt7Vk6hFZWdla8iCgWFhs727L7deAITnhaLrcPGoAdq&X-Amz-Signature=b81631bc22bf2dd7bea851838253a99cc6ae4209cbf5bdbb2ccdf61982772494&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHJ2SBM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVmJoSeGE7hadH2Hgcu9Ye4dzHHt2PyMlTZJoieKkykQIgKkEBFX4As%2F4fRf%2F7SKXSx6Vl%2BBwi4eoQLdakwHN%2FjuIq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOs1D8o7aIXRHVXihCrcA0pDHCco1h4XV8Gbc2JTxSWLI7nrA6H92CCE9Ji6efY4nMWuNACwQhQNjkQ8DFobLR2QQSTrK35GoVkcdSDJ6WWiyhX%2F%2BCrwWu4BsIxjVYIRBShnJ5bhPVQY2kSWLp%2ByVCQe2JEO1%2Bun17bbLHrz6EjnbXqyDOEyfyEzpYEzsK0XpEGTY9KUNwisZghfTO8hhH2W7b7nxGvP8guzxd0lLW9XRYqLGtxQxOqnRaaJXzHShFU0myQENUEp3nxMxh8mM2oZ9fQziIL35lvmx1sdPmS8PUsZX%2B%2BrFUXKRPTWCOYQoVnHTdTkFtJNwTRBKLZjpqEN8o1D6NRUCGRc6bn36yOQlT4ytoaRukIMx%2BC081tPmRenWN00LuH9mxzViWd4Bdk3ps1%2F%2B%2BEEEkSLzcgzaaAX6dbEQWSqMvAhBv7Ghh9F%2B9bzmYUFwzVJjaVuXGoszVeYTI5wYI9NBEoBZt1HqhWZhUz8p0XU%2FyMy7I7Fe7k0fJaZP12pItHzarBgRFhLhXG%2FP%2BLhtol6P1mb73CMGU5bTA%2BQI5GLsuGD8k7Ck8EYpP%2BVl38UN1nL9W%2FlVq05IN9C9CiHzD0lY5tx7fRySCNHN2bEcqHFwZHksGRdidcKIjbas8Nh%2Fa238bYcMLSUvMAGOqUBjEljxDmLC3d8%2B4FOcQhTymDeBcn884vQVBCDazrf8lGPBE9BYgpcU0StscbojuooC1qC7QxLuVMar6tjYRuck3Ca85QvPbsEDtbaPcc2Uktlpg4U641ixJTbrjxa2%2BIIcTTDpRE4QIUyvwOrb8fsh04qwsmjpqL2VbNeS2%2FMEfANqoygnmuLLwxgHW%2FdHMRfYoewp3AnXRdjqgAi4TxinUvfZjg4&X-Amz-Signature=e50d59b1db404e8962870780a73cec35aab4ade0c6f16948db6485b9377b4c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVJ2YPV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlKFR4tgNgA3wEHKnYvlAKieGg6oLjM3oT%2B8rP3lgf9AIgGPe7AwHOURorz3q4%2Fp1lzxFNu6zSzr3pSzjCjennEMkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDK%2F0leSuT7dGBwM23ircAz%2F6uuuJS5mpUYdf0CeqC15%2BGQJQ%2FFO0BvpHKJBlz%2FCGas5%2BcebQth8Lc%2Fj%2BzQqto83JOuUlvMtFwnNhjNXWOnN0hvG1BlvMtJAXT6ma%2Bztvr7wcXW3qPhmRi%2FAGpnBcTnFLZAvo1efZrKHVWMtu8fCumIR9KPcOiyFLxHND3ZELsvue9ToyXDSUxJvUjza5pTitGpmGRNIIS64ubESs9OuUH2HvnMn%2FwGAnaLRC1ql2JbUkXOxn4T2OiKpyZDgiHH2abHulW0XbKg2lEox9kdiODww%2FcIX%2FRBD9h2aBexGy4XUEjJXgI9L4hLK%2B1qhisqXnT6NJhMsu%2BTbyNSY7i3LjBANpTKGer2jM9o%2FHX8dwQ9RRfG6cztiRFtSo57SKpWaD3CIfDLZsfEMySD5bb9LOQZ6dKJg5sJC2o0XB9jED0MDoi33tG4LcfrlaNKZKdwO7QB5aWtqdQ2%2BEM476Q3Lspo0sIiBnCt3a%2B2ariBPicck%2FptczA%2FUNUcK5x4SMc8loOyB%2BtNvQAOtQJMGp18AI3op9O3KyZmZZSn%2FPwSxdCq4PLFsq7hpkbfNKFNre70JgwAkJtUe0Du0g62yKI9wPpmflixwRU0XJqDI1VD50NNMJ1PEOmAh8uA6fMP2UvMAGOqUBy5KB64Vzsans7LYiW1hVdRJ%2BFw8OW0mXqmdza%2FQdFrkCPOsSqDzBzZ5pUAlUu79yB30AGIXYQlQMadIVT17nut31wo4JMSTCF6D17nXQV9VlpI%2Bz%2FX0nWBxjahp5%2FanmmeASWT3DxsTxEaWG6OQdk5u%2BY2quniuzay9fq6UtLhwyqdyPe06q0KUWehP4juQPVK5pxj%2BsNWlqS0svQnfWUhgt61Xw&X-Amz-Signature=976840aee76c5e00a898773eb0810a13e9bf6ca760a4dfb8ec03b82a9e2ae12b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
