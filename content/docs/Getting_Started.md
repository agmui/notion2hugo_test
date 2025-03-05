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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJKORTX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTm3hV4J8aCrLIp8bkjTlaCH%2F%2BQHGtzLyTIQWMP6rAtQIgIzKf8r5HzcdbR3FiqTC7y3eVCMG1Abh1V%2B2xbVtslNIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB%2BGzAFKsa%2FTrH1ZlCrcA5vNnL8VoHwW3JzUhuc%2FvcsIfv4duKTyC3lmJzEiaAaiFYQ0iZQoUV1mZQf5oJ%2FzrB6iC4S0P%2BmNkgxiTYYTjECoUjaeioUf2kSchQDJgIH9wr6Kg4kGPNLKCL5XyQmmMKwXqlITxLdP2qpwO%2BxUZyASm1Yi2jeigJ5q7VgLyNXh0q5vhO9vhWYy1V4GwmvZqOZ%2BxKoC1asgA%2FeAa%2BLfQswGe9dHN2ApcaNFE6lnLpLelKLuDqOGROT6ZQ6WYk3uQFHDjlIwyHgXkHT6UuDwwYPsiRAx5BoqH3ju6srDyhwJQJvCPSlV5s8FLIvmTZiiR9V%2BaTIXYDbnQfmKqCjrsbjWwQjvuLbmfnb8877mCAKS4ZG1%2FHgJQwfj1avJlHIaorxzPSZLuv36OM3hYUvpLArcBSfaxTMtn904ft3GcZeiFZo2uUYr74WRE6pnhbx%2FlM3Cg33LD1PNiuotVYxe885FJmFRkJhHP7b96EtMFdKMi4Lpe%2Bc2o6vKTA2UYc3qAHusRzhqCgTgq4MmSntD%2BZ8MVgjmg90CuRCWBfoWFSR9Wh%2Fd9KICf042PLooIWG2zLze9LT%2Bss68uSqXSeAhImjBjcB2lrpP3BuhG%2FvaMQbeGngNJjlSa4tM22AKMPK3ob4GOqUB%2BicW4OYVUlNmIH0tsArlH3h7TaehA1i8HfOttQ3OwTgR%2F0DMbtRzx2GwBe5Y%2FrQMD7uecDYafGTzMCCZYPEw5nILjwy6th5LgUDFMTWSls11Jaj2TQYPhH7St5JkUs1lrME2%2FmAY6f9RZonh5gc56b%2FGc8O6eof6CSq3TKlHzPJf1QAqn3EZrNfrFc6Y%2Fe4PlP4sLRK8Yo5uVW5Ibgzqjih%2Fe4Bk&X-Amz-Signature=058bc0eada9a1feff5c63fcb56515ed72b98ea0bbd69665a8d81b11357371066&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJKORTX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTm3hV4J8aCrLIp8bkjTlaCH%2F%2BQHGtzLyTIQWMP6rAtQIgIzKf8r5HzcdbR3FiqTC7y3eVCMG1Abh1V%2B2xbVtslNIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB%2BGzAFKsa%2FTrH1ZlCrcA5vNnL8VoHwW3JzUhuc%2FvcsIfv4duKTyC3lmJzEiaAaiFYQ0iZQoUV1mZQf5oJ%2FzrB6iC4S0P%2BmNkgxiTYYTjECoUjaeioUf2kSchQDJgIH9wr6Kg4kGPNLKCL5XyQmmMKwXqlITxLdP2qpwO%2BxUZyASm1Yi2jeigJ5q7VgLyNXh0q5vhO9vhWYy1V4GwmvZqOZ%2BxKoC1asgA%2FeAa%2BLfQswGe9dHN2ApcaNFE6lnLpLelKLuDqOGROT6ZQ6WYk3uQFHDjlIwyHgXkHT6UuDwwYPsiRAx5BoqH3ju6srDyhwJQJvCPSlV5s8FLIvmTZiiR9V%2BaTIXYDbnQfmKqCjrsbjWwQjvuLbmfnb8877mCAKS4ZG1%2FHgJQwfj1avJlHIaorxzPSZLuv36OM3hYUvpLArcBSfaxTMtn904ft3GcZeiFZo2uUYr74WRE6pnhbx%2FlM3Cg33LD1PNiuotVYxe885FJmFRkJhHP7b96EtMFdKMi4Lpe%2Bc2o6vKTA2UYc3qAHusRzhqCgTgq4MmSntD%2BZ8MVgjmg90CuRCWBfoWFSR9Wh%2Fd9KICf042PLooIWG2zLze9LT%2Bss68uSqXSeAhImjBjcB2lrpP3BuhG%2FvaMQbeGngNJjlSa4tM22AKMPK3ob4GOqUB%2BicW4OYVUlNmIH0tsArlH3h7TaehA1i8HfOttQ3OwTgR%2F0DMbtRzx2GwBe5Y%2FrQMD7uecDYafGTzMCCZYPEw5nILjwy6th5LgUDFMTWSls11Jaj2TQYPhH7St5JkUs1lrME2%2FmAY6f9RZonh5gc56b%2FGc8O6eof6CSq3TKlHzPJf1QAqn3EZrNfrFc6Y%2Fe4PlP4sLRK8Yo5uVW5Ibgzqjih%2Fe4Bk&X-Amz-Signature=5577258d55bb7af2aff0c3c70c9d6a40571da7d4098a8afaf456a8935edb212e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWD3I4H%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlkNqmpPB4PKJjHbxEOjNgLPMZZCteqlDDogp4xNr3YQIhALdILqtr2azH3pTBj%2BQh0wDhA1mls3rDIPKGISpSx6cYKv8DCBcQABoMNjM3NDIzMTgzODA1IgzjLZvp3sPJUewAmwoq3ANe%2B80WKQvOcOxEkxPA9uqctBbzO2RxZixGaT0kp10J8%2FYyk1Fs%2BzpiNQGF0gs6wQhUkEmcjncgsv2ngYqBsMTBBUSud%2BtQWVbOO6gLs8I5PLhbpuROeeaLacEP%2Bilrq6hrwbifSj4aoL4LMhPcyB2vqUwkCUQUSLER%2Fdb49Q%2BLK7w5sKIFdjrN8kTzWAI21zn0J95wcEwVRB1Burj6BAPf5XsOkh4e%2Bw0RGoxc7Q3hiRci5dN9JjfWgCXIZODDteBlR4yhiPPYrBZbqdhPyN2aEbVTt9zkxyiDwCmOx9%2FRfXKdotjnqysJuXn9nQ%2BHqv0WOvToWbBWwm45J4JQUEOyF3WZGQVH83gjcI2BHEIcXD%2BL%2Bu20S1QB4sv3DvDmqGGvKrUwOZ75dM4BQuTqTOscMwQGhOK98D%2Bx5lc5jsNurINVHNWQnaJ%2BUIFHx6ke3FLJAKsnqU13de39TOYsnxvSF7KoplhzE4SUOmKNbP0GjZzyK8ftqJv5UzD%2B4%2BRRyJ9u9oaeOidX%2FfV%2F4BpzgiVwI5jZhOCQzPSjPVH74zJGfcyAHHk19JKgS1B7TAveNl6Xtj9Z%2BSq95Sffn3e86%2FomUlGG7UwL1BZEUF%2Fs0XBuJIJy7dKStsS1sGhcwzCJuKG%2BBjqkAUKAo8AY9BSgTlpwnhzbP96pg2qQNdRhxJr0acrw7AHd7PPkX5a7q8i6Dclx3JpOpm%2FujwC6eXACt0aRv5yBKdYot%2Fqsr72OYU2hsT15LbM9T8rDFa8iV%2FXVGZI2obYk2m2lLHm49M4Rg5sz7NmBMNkPone0MTmNIfQwlKCH%2BmbocA1%2BEEWQ4RETdpaAvSK8JG9wunJcdJrHYy%2FTvFrY1ag6WZ0m&X-Amz-Signature=b7c69f10255e5cf0664ca8ba31e5691e1593e9824d58f0df4bca18b8538d9baf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGGSOLF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDStG1yFq%2BnaucFhNj%2FtnMh3Vi0Pag0dDRPrF%2FjXQKWrQIhALJt0Q1R5lBF3qD7EETJ55BaCWCt3rcTdS8tL%2BKS37IGKv8DCBcQABoMNjM3NDIzMTgzODA1Igzwzyj8FFYci900o3Mq3AOaBtVwQgL4L%2F2vccz01%2BRiy3Y49jI6OQJbp%2BZah3Hpuqs3m0LmXRsrTwAFf9LhOqJqBludOIe0R2O1M%2F5Q%2BuEhmxsTNBp2IMM%2BVK3boX%2FjWhGBvpfvOEVMBcffpvmO4bXX9m3ypldOmTF%2Blo4cfLSAW9wnp%2F6J3n8fqMPoiuJVT%2FfKXDwAOfkcNYK09dUCvFC%2Ffb6OhwB7dIZrCHKR2Wb2tQ6TV4JMGdgAKFPjOtBOvke%2FLnq2Wq8eTPik4KakCoyqIYaSATQXsJiCBqu39kAu%2Btp%2FZG0yo197vbBxG6Vn7YkPg1n77bDVm1UhcnMTUjwfrxCpNGqFdJiI8HHd9s4bqbdfm%2BayxfSGLPRPVPfgMnQpfy4dJyLMOwa5ikGi16h6hmUCIVf51D3vgnn95g6iSOKmJrSH0jtn3s09ma3Hk0IHmQoyDscFxzjcxnrajiNvmRCw0aJKqyX1M68TzKSuqE8i5zTLvG2mglKQBBPJOQI7j%2BdUIHGRcMdDVirrBEgzzGpAPBT%2BUHqk4crYLTKSHtZAoT%2B87%2Fxua9Hh4CPgn7gSsmN03iQ5bf6gpUeChPzWpie8f0vIl4gtUZqn2HNPgRy7i4ojY0stMPSoQaK09e20o3ZCKLt6JM96mzDBuKG%2BBjqkATjUuWv6UWqJTtXkJH%2BSDdmVDMH%2Bj1dO7PhitI96KJIoXv4wLeO0vkbMFWtEA3%2BPWHCjpOJKCW%2FGM4GN%2FRyCUatq6imAgii7%2FqoEGKVaKQIUHGzu3I9b%2FOYu5P9dUNnFfJqbP6YFV6BubXpi2Y8faCjKLMwmt7l20gipImf5HWgHpGMveEmWmnyBWzvoVwLd%2FV5VyhYZOJFyDIYh1%2BjJhhJL2EiL&X-Amz-Signature=e3d9fbaa75a00f4d11e9a23716dd61faf5e4d0ba3db4a807008561988509bd83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVJKORTX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTm3hV4J8aCrLIp8bkjTlaCH%2F%2BQHGtzLyTIQWMP6rAtQIgIzKf8r5HzcdbR3FiqTC7y3eVCMG1Abh1V%2B2xbVtslNIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB%2BGzAFKsa%2FTrH1ZlCrcA5vNnL8VoHwW3JzUhuc%2FvcsIfv4duKTyC3lmJzEiaAaiFYQ0iZQoUV1mZQf5oJ%2FzrB6iC4S0P%2BmNkgxiTYYTjECoUjaeioUf2kSchQDJgIH9wr6Kg4kGPNLKCL5XyQmmMKwXqlITxLdP2qpwO%2BxUZyASm1Yi2jeigJ5q7VgLyNXh0q5vhO9vhWYy1V4GwmvZqOZ%2BxKoC1asgA%2FeAa%2BLfQswGe9dHN2ApcaNFE6lnLpLelKLuDqOGROT6ZQ6WYk3uQFHDjlIwyHgXkHT6UuDwwYPsiRAx5BoqH3ju6srDyhwJQJvCPSlV5s8FLIvmTZiiR9V%2BaTIXYDbnQfmKqCjrsbjWwQjvuLbmfnb8877mCAKS4ZG1%2FHgJQwfj1avJlHIaorxzPSZLuv36OM3hYUvpLArcBSfaxTMtn904ft3GcZeiFZo2uUYr74WRE6pnhbx%2FlM3Cg33LD1PNiuotVYxe885FJmFRkJhHP7b96EtMFdKMi4Lpe%2Bc2o6vKTA2UYc3qAHusRzhqCgTgq4MmSntD%2BZ8MVgjmg90CuRCWBfoWFSR9Wh%2Fd9KICf042PLooIWG2zLze9LT%2Bss68uSqXSeAhImjBjcB2lrpP3BuhG%2FvaMQbeGngNJjlSa4tM22AKMPK3ob4GOqUB%2BicW4OYVUlNmIH0tsArlH3h7TaehA1i8HfOttQ3OwTgR%2F0DMbtRzx2GwBe5Y%2FrQMD7uecDYafGTzMCCZYPEw5nILjwy6th5LgUDFMTWSls11Jaj2TQYPhH7St5JkUs1lrME2%2FmAY6f9RZonh5gc56b%2FGc8O6eof6CSq3TKlHzPJf1QAqn3EZrNfrFc6Y%2Fe4PlP4sLRK8Yo5uVW5Ibgzqjih%2Fe4Bk&X-Amz-Signature=e54f1e01d639ca80b0e69126f558f84d7f00598df46a215d46298d5ed7dfb18c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
