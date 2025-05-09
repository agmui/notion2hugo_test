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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP2VHQL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5XOaF5DDQ%2BF65dnJhPF11IuL5esKnHoPDvIWdJWcYlgIhAJy12GgFHRhbw0OCjWI5XwhV8%2Bc6k8wjfa4CnnFSMDJWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3GNidNbKS8uuPr8q3AP5GIzarSSgY3QYMP25O1LBR6i%2BFvCLPWSWNnfCxd%2BPq%2BshIPQoghzT6XtSZ%2BBfMLqbmEsjV0Oh3G7I17MjpsWWbkhA1JiufIP4ykNR8uKxa%2B%2FXuJub%2BEoWUq14nrNnQBldB9l7gPqYffNx%2F60AoaL0ttDMEo6Dfam%2B5JP7IVX2HoyoWeCg2d5Iaj4%2BRFY%2B1uF7pEkdQPSjgdYX6YbpUt1bBDJXzU6DFfgtjn3XesrF5rWA7UNnlm%2FbE0ByzylGyqHu8Iia%2FZp9Ct8ce0sZ7wx%2Boq9xXouAhn94Gyr2GI2JbWVgSak6PvJ0tgagZDjYHYms%2FOBojcIHgzmaJAFvAUxYOi2aFKQfSJ52WXWF57gi5Oo%2FcIwjm4OML1swgaFyIaBj72QjRcowvYQEDWri1%2B3BbfysoEYkmU%2BzgD8TdX1zgfbIi6uoMNqUw8NUP0aZ3wQPfYDGg3s1F0yPDY4CWmz5S%2Fad3WWUNGtl7gVEeolGuBogkwn5jnQqMi3WB785%2FGCrtiM9ecpC9ZVJAe12Od3CKglbKthhK%2FTT8WqAdaa8JNqsBM%2F8Vax14d6Hl1KLOfpUecoayQ1odiCVYp1t0dOJCLSneLHN1aGUbFZ4D28YX7Hs%2Bw0YL55M%2FIZEcDCz1%2FjABjqkAZbDT5sfTaySOLoGvTYYD6PatSGntDZAJBJqNS9sXOly3RelSqlOs87PXEDHKqKVD5OWY4RfdXDE7b1IcFfAajnf%2FohG8O5fPGnMAYRQmnEPORLYJciDkAni6HxZl0NJobj2R2OImRSBdUAKdjkhIdUnRdXTP9M6UjDztTwa0Knz1cOfwVeXXBpTRN61q0e7IzK4NkqNzEDVIpYZE5pOgT0JYqSQ&X-Amz-Signature=48732e64dbb4c4c5e74b3f47e974f9a5ddfe886f245f11e908704057bbcfa721&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP2VHQL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5XOaF5DDQ%2BF65dnJhPF11IuL5esKnHoPDvIWdJWcYlgIhAJy12GgFHRhbw0OCjWI5XwhV8%2Bc6k8wjfa4CnnFSMDJWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3GNidNbKS8uuPr8q3AP5GIzarSSgY3QYMP25O1LBR6i%2BFvCLPWSWNnfCxd%2BPq%2BshIPQoghzT6XtSZ%2BBfMLqbmEsjV0Oh3G7I17MjpsWWbkhA1JiufIP4ykNR8uKxa%2B%2FXuJub%2BEoWUq14nrNnQBldB9l7gPqYffNx%2F60AoaL0ttDMEo6Dfam%2B5JP7IVX2HoyoWeCg2d5Iaj4%2BRFY%2B1uF7pEkdQPSjgdYX6YbpUt1bBDJXzU6DFfgtjn3XesrF5rWA7UNnlm%2FbE0ByzylGyqHu8Iia%2FZp9Ct8ce0sZ7wx%2Boq9xXouAhn94Gyr2GI2JbWVgSak6PvJ0tgagZDjYHYms%2FOBojcIHgzmaJAFvAUxYOi2aFKQfSJ52WXWF57gi5Oo%2FcIwjm4OML1swgaFyIaBj72QjRcowvYQEDWri1%2B3BbfysoEYkmU%2BzgD8TdX1zgfbIi6uoMNqUw8NUP0aZ3wQPfYDGg3s1F0yPDY4CWmz5S%2Fad3WWUNGtl7gVEeolGuBogkwn5jnQqMi3WB785%2FGCrtiM9ecpC9ZVJAe12Od3CKglbKthhK%2FTT8WqAdaa8JNqsBM%2F8Vax14d6Hl1KLOfpUecoayQ1odiCVYp1t0dOJCLSneLHN1aGUbFZ4D28YX7Hs%2Bw0YL55M%2FIZEcDCz1%2FjABjqkAZbDT5sfTaySOLoGvTYYD6PatSGntDZAJBJqNS9sXOly3RelSqlOs87PXEDHKqKVD5OWY4RfdXDE7b1IcFfAajnf%2FohG8O5fPGnMAYRQmnEPORLYJciDkAni6HxZl0NJobj2R2OImRSBdUAKdjkhIdUnRdXTP9M6UjDztTwa0Knz1cOfwVeXXBpTRN61q0e7IzK4NkqNzEDVIpYZE5pOgT0JYqSQ&X-Amz-Signature=a41af6dfebcbcdf1e5e85b2715d6b112f9e639103d7b8ab2fc7772f9b1f836cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP2VHQL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5XOaF5DDQ%2BF65dnJhPF11IuL5esKnHoPDvIWdJWcYlgIhAJy12GgFHRhbw0OCjWI5XwhV8%2Bc6k8wjfa4CnnFSMDJWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3GNidNbKS8uuPr8q3AP5GIzarSSgY3QYMP25O1LBR6i%2BFvCLPWSWNnfCxd%2BPq%2BshIPQoghzT6XtSZ%2BBfMLqbmEsjV0Oh3G7I17MjpsWWbkhA1JiufIP4ykNR8uKxa%2B%2FXuJub%2BEoWUq14nrNnQBldB9l7gPqYffNx%2F60AoaL0ttDMEo6Dfam%2B5JP7IVX2HoyoWeCg2d5Iaj4%2BRFY%2B1uF7pEkdQPSjgdYX6YbpUt1bBDJXzU6DFfgtjn3XesrF5rWA7UNnlm%2FbE0ByzylGyqHu8Iia%2FZp9Ct8ce0sZ7wx%2Boq9xXouAhn94Gyr2GI2JbWVgSak6PvJ0tgagZDjYHYms%2FOBojcIHgzmaJAFvAUxYOi2aFKQfSJ52WXWF57gi5Oo%2FcIwjm4OML1swgaFyIaBj72QjRcowvYQEDWri1%2B3BbfysoEYkmU%2BzgD8TdX1zgfbIi6uoMNqUw8NUP0aZ3wQPfYDGg3s1F0yPDY4CWmz5S%2Fad3WWUNGtl7gVEeolGuBogkwn5jnQqMi3WB785%2FGCrtiM9ecpC9ZVJAe12Od3CKglbKthhK%2FTT8WqAdaa8JNqsBM%2F8Vax14d6Hl1KLOfpUecoayQ1odiCVYp1t0dOJCLSneLHN1aGUbFZ4D28YX7Hs%2Bw0YL55M%2FIZEcDCz1%2FjABjqkAZbDT5sfTaySOLoGvTYYD6PatSGntDZAJBJqNS9sXOly3RelSqlOs87PXEDHKqKVD5OWY4RfdXDE7b1IcFfAajnf%2FohG8O5fPGnMAYRQmnEPORLYJciDkAni6HxZl0NJobj2R2OImRSBdUAKdjkhIdUnRdXTP9M6UjDztTwa0Knz1cOfwVeXXBpTRN61q0e7IzK4NkqNzEDVIpYZE5pOgT0JYqSQ&X-Amz-Signature=863482feaf645bbb04ebd221c12fd1d084a231d3de2f4851dd34700c6bc9fec4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627PHLQXF%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBNtSremDmqX155pz0Z7xKUW0NOMCkSr%2BpYwlvOmbHyAiEAv5NupbR5Maev8LkRqecVKXl2p93ziam4HLKTAiwOYnkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5re6r5O3Re41%2BbgircA934lZdU1kVH7FZHW0SoShLGl%2BWmIep3meesM89RQj%2FpSvizZsewxB4yKkvUTcFj3dtilTFsh8FPNJFULcUZS23I8Qlal05wFQHes9FUMdfV1q3hb4L7YwFSGVd8F0MzDjNL6QKa6ZGwc9PU8bmXl20ZCPAaF6Jvm6ndiOAhgqWf0PhHYKTRgmlvZfIe%2FPbOKFrzL3Iyjxtfm0TjlWZJ%2B6Y7oqYR2BqlDt7EBDa%2Bi56mulVefEM%2FOd%2F80vtgFhyLLu4cjEGtNCwqZnbZBSefCd4OGpE04u%2Bgv9m8d3lmAJzlo1ag%2FG46qI86vWdXNdLKJbNA2mGWv1Od9EsPN4M5eEdFUSEOzbvdUwIxN51hhJfFjS7ejHg1IsMxbYKTTbH8lNv0BZc%2BcNM26v4QxY%2BGWHsXjrr%2Bggq3jJm24cIdbJYsCCMqP45igmIIjua61z5TNuF2Fi92dP4xHnaYv4HcnFTAMAVh%2BqJi3yNjQrz5zEGZOQL5X1HwMDWU6x1SEaE4UkKGukdz22pnByNwHM7NUj4IhLSTohiFXfUmP4QcEoduvfUbqfZ%2Bz2lIxeSsv1yU4pQPDDlyMMTadkMTdTumNqZkbXQsv3JTdAXa%2BVVrfU4ycbGjUp%2BmQPQrmaq%2BMKvX%2BMAGOqUBfxhbC55bBH2nAt2Uoueb9xELCJcMeMgQNV4TaEtmVdHi69SAZVtFmrhJLRpEQg%2BTmivJpgU%2F6V0QtFebOg67CQ1OXMUa2YYCyHeG7BwrIACwnU6k9EuqHLWn2uN05zVuQFIFcTVKTt7xjXzdSp7xaaUbnXK%2Bb30T8o5Qy0BvUoyVYDELViBa7v4Z%2F9GRKVq8lo3IL81F3Y9MGwVyrnGGPXDI4%2F3k&X-Amz-Signature=537836e851fa67d1f047b9cd6d0c2255dc41936fc939f3abda0d9d575c0efd1c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YA6ZLKB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQhmyobQTxvt1jtCcMGmMyZwoRhSiM7FO%2Bw0DIIrLtLAIgaRKSVyEE6VjsS2N2kDdUWsR6qOJzCqYCSVPqx%2BnN%2BsoqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLuo3ZFanUMQ0zHwBCrcA7rRDtrcs3%2FJG9KkjtDkXZMsKGhgSJc90s%2BMMWJDpXtqIMfOmf9ngbSF8zYFS9L%2B88uV1EWuM9YRoH56ReRJ2EOtNpAZg%2ByCWt32p5wHJscYd%2F4PL%2BA%2BbtZconRirjfMMFcHoxaUenK85%2Fiat6iPxEpzxZOzqU7yliQyqcB9ltZTe50FwIdvyk5bN50S5sykeF3DlesHEqayxlPWCyvPOabluCR%2FzJIYx5GoMteVUds7gkHnjUDJKhEhsGDmkf9ZbFMWO0j%2FQSOMuj7NzayNsbtTy1lQF7CiZx0rdNAVv9UiL4exWjY1cA7IxV54HzsuahNnlMZZt1Ike0xY7JyqXQUiGUmcM0dnB5K2yiR%2F7hrT8Cjycs6RtYprD08getpQlpMZoWmINoZgb1qcOnzlX%2FrH1q%2FaOXUvWtX626skf%2F0MUyVa7wBzr%2F%2Fu7jMep%2Bm8%2FecyoHthNeAi9LCYoxxeJksnFJZLpjvPKfF%2BmI4%2B3Fmyr6JP7nOz9PqXyjUjQ9w3ooy8FlvexBh3vJPhMBe1hhtm%2F2gz00lp92hYcEzVe1wu%2F3G%2B0H7iL8fDGMs3Uli2YiZWdDxVf4lLixoYu%2FVOx1y2E9wfuaQArXeiJUqPzy93ZsiQeb8WitTWK%2FMdMJfX%2BMAGOqUBzmQYxevHpeTEtQXjTHOSbqI2el1mLVm%2FVmX07S%2BR0ojsaT0pLmoj2cg11nZS4db9ku2Z0ypW5ETEOHVEKbYma5KEkuBvQuvKkyZI2B4wnij4ca8fXMVHDfQ7EnkNRZfWZb1uPqJA7YUni43eR3uyZt2jQ5y9Cf8STz4jZCA%2FVFTX5s59durg4%2BtmQ7qgJJ73S%2BakkvMm8jJ3aqcTRn6KjfcMU63a&X-Amz-Signature=80a7786a434c7f5517b20eb2a6b1d15aaa12e34a23126b9183845ec9a2bfc495&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOP2VHQL%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5XOaF5DDQ%2BF65dnJhPF11IuL5esKnHoPDvIWdJWcYlgIhAJy12GgFHRhbw0OCjWI5XwhV8%2Bc6k8wjfa4CnnFSMDJWKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igws3GNidNbKS8uuPr8q3AP5GIzarSSgY3QYMP25O1LBR6i%2BFvCLPWSWNnfCxd%2BPq%2BshIPQoghzT6XtSZ%2BBfMLqbmEsjV0Oh3G7I17MjpsWWbkhA1JiufIP4ykNR8uKxa%2B%2FXuJub%2BEoWUq14nrNnQBldB9l7gPqYffNx%2F60AoaL0ttDMEo6Dfam%2B5JP7IVX2HoyoWeCg2d5Iaj4%2BRFY%2B1uF7pEkdQPSjgdYX6YbpUt1bBDJXzU6DFfgtjn3XesrF5rWA7UNnlm%2FbE0ByzylGyqHu8Iia%2FZp9Ct8ce0sZ7wx%2Boq9xXouAhn94Gyr2GI2JbWVgSak6PvJ0tgagZDjYHYms%2FOBojcIHgzmaJAFvAUxYOi2aFKQfSJ52WXWF57gi5Oo%2FcIwjm4OML1swgaFyIaBj72QjRcowvYQEDWri1%2B3BbfysoEYkmU%2BzgD8TdX1zgfbIi6uoMNqUw8NUP0aZ3wQPfYDGg3s1F0yPDY4CWmz5S%2Fad3WWUNGtl7gVEeolGuBogkwn5jnQqMi3WB785%2FGCrtiM9ecpC9ZVJAe12Od3CKglbKthhK%2FTT8WqAdaa8JNqsBM%2F8Vax14d6Hl1KLOfpUecoayQ1odiCVYp1t0dOJCLSneLHN1aGUbFZ4D28YX7Hs%2Bw0YL55M%2FIZEcDCz1%2FjABjqkAZbDT5sfTaySOLoGvTYYD6PatSGntDZAJBJqNS9sXOly3RelSqlOs87PXEDHKqKVD5OWY4RfdXDE7b1IcFfAajnf%2FohG8O5fPGnMAYRQmnEPORLYJciDkAni6HxZl0NJobj2R2OImRSBdUAKdjkhIdUnRdXTP9M6UjDztTwa0Knz1cOfwVeXXBpTRN61q0e7IzK4NkqNzEDVIpYZE5pOgT0JYqSQ&X-Amz-Signature=fb339589722c50189e5d94251e0988fc2e2d4c2b29a8e5b94550aacbce2db0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
