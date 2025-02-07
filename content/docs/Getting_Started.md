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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SYFJNZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUuVITfr4QJc3ERJ%2FrczBO9L5XLYG9SbFUpNNux47oGQIhANpIRlk2vychWnvY3dy219AtXzxRgfSJHb4c8HYufpC0Kv8DCGkQABoMNjM3NDIzMTgzODA1IgxSHJQsJoqn9iGsT28q3AMW5NBarsdylRo%2BwGKIhkE%2B0ly%2B7OruXaGKwe9sI9UM4VjqtMzuy5zrCAsq3xHR5WM4f7fBLksyZ%2FTeqv8EV2JkrrlA9O%2Bjl99I6xsLI1LVaxmAnblEhJqdNCPfY%2BkWbuA%2BjdR80wPl6q86PSAcYFuL4UetzEblca3Xwb1OeyAoiGn%2F3uE%2FFCTcscJCcq3qLhF3LKoTOpNGadG8wOmRvHGLfB5F87TZtd1MT4LLmbxIJR4vc9Xh6Lggat%2B5fJGd7NpmIcWJN1i3vVPuQDLaJ%2B6q4NUoEUUE0pwOQewt%2Bl1FexKVka4NQLIf1AkjRWsK8PLdxNCLtgchLNBGzBte6dF%2FpWDf%2Fd8R2UoVvB9XB%2FJ%2B7%2Bq4ydBGFnV0BXipi6kQYE9x1t88xc6jrpEoenLqda7WyzDwJIXzdxgL64lmRWmORvt58a8k8yz73XB8h2cYUPwohAFd%2F5zc7Kmhg2uDvX8rojWQ7oey8Ln2Fbrm8pgsjJ1utdgdD2kNUHUc7PeJOOXVbdD0K8LeXP2Y4zSRk%2FkvqoDyEqmFn62%2Fq1R9vZWe0hk1T0blEMJkoBYvpsZ4jbBUDdIEw45xTErjuA1px0q713fC0dROs2OCtuz9nkfK5C6LwPuDWVqGD%2FKitzDanJW9BjqkAWE923yDPVCCXA0YE7BVj%2BTo0PmtCRWS%2BPoYhuOp7stDQOTAUL6NnCKu3fqyrebdQWhX7DSsV9qDjDq%2FB%2FyRyQRC6Bnt2HgFrN86NnqaXUFZ8KRZUustSsia7ghklJ5HkTTqdmW8BwpKHxjDc9Q06FQv%2F7YXPES7Y6Y8RiE3gCYJZJ20Jd11hXy6JZja0qhz%2FBWukQzwoDoKlFz%2FvC5IrKo8UChj&X-Amz-Signature=f4f59fe5d85b4ff61df8b1318e682cb713cf63478899e2e294ed2395c204d113&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SYFJNZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUuVITfr4QJc3ERJ%2FrczBO9L5XLYG9SbFUpNNux47oGQIhANpIRlk2vychWnvY3dy219AtXzxRgfSJHb4c8HYufpC0Kv8DCGkQABoMNjM3NDIzMTgzODA1IgxSHJQsJoqn9iGsT28q3AMW5NBarsdylRo%2BwGKIhkE%2B0ly%2B7OruXaGKwe9sI9UM4VjqtMzuy5zrCAsq3xHR5WM4f7fBLksyZ%2FTeqv8EV2JkrrlA9O%2Bjl99I6xsLI1LVaxmAnblEhJqdNCPfY%2BkWbuA%2BjdR80wPl6q86PSAcYFuL4UetzEblca3Xwb1OeyAoiGn%2F3uE%2FFCTcscJCcq3qLhF3LKoTOpNGadG8wOmRvHGLfB5F87TZtd1MT4LLmbxIJR4vc9Xh6Lggat%2B5fJGd7NpmIcWJN1i3vVPuQDLaJ%2B6q4NUoEUUE0pwOQewt%2Bl1FexKVka4NQLIf1AkjRWsK8PLdxNCLtgchLNBGzBte6dF%2FpWDf%2Fd8R2UoVvB9XB%2FJ%2B7%2Bq4ydBGFnV0BXipi6kQYE9x1t88xc6jrpEoenLqda7WyzDwJIXzdxgL64lmRWmORvt58a8k8yz73XB8h2cYUPwohAFd%2F5zc7Kmhg2uDvX8rojWQ7oey8Ln2Fbrm8pgsjJ1utdgdD2kNUHUc7PeJOOXVbdD0K8LeXP2Y4zSRk%2FkvqoDyEqmFn62%2Fq1R9vZWe0hk1T0blEMJkoBYvpsZ4jbBUDdIEw45xTErjuA1px0q713fC0dROs2OCtuz9nkfK5C6LwPuDWVqGD%2FKitzDanJW9BjqkAWE923yDPVCCXA0YE7BVj%2BTo0PmtCRWS%2BPoYhuOp7stDQOTAUL6NnCKu3fqyrebdQWhX7DSsV9qDjDq%2FB%2FyRyQRC6Bnt2HgFrN86NnqaXUFZ8KRZUustSsia7ghklJ5HkTTqdmW8BwpKHxjDc9Q06FQv%2F7YXPES7Y6Y8RiE3gCYJZJ20Jd11hXy6JZja0qhz%2FBWukQzwoDoKlFz%2FvC5IrKo8UChj&X-Amz-Signature=270b97b2ff90649b553610413430e75a88fabb0fbec29b24c6d2cca3e8299af3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERWTPZE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCh7RSNBztzBSNjJMDvmurL8b80tJuUVQjEDDNTF4Ji9gIhAP9plqYe5agVaoaDyLzqB8W%2Fxal9iGLnogbH4d%2FPVXXKKv8DCGkQABoMNjM3NDIzMTgzODA1Igy3QvJCvPCwjYzyw50q3ANQjjbqXLabRl4k05uQlqpOLLCA4eHSJyhiFMw%2B4Dr%2F8XMGOuRaS%2Fq49s7ROvSempkKJzVI0krYNw%2BXqeszhX0%2FBPpHq4%2Fznpzyvzb0cs0MEnwb%2BkPA7yM%2ByjNJcWL9lQWZGP3%2BIfhTWiv%2BDKBsc6GVi3T6jti5phWURMCXsRqi%2FSxTx0Nekyu6NjezAKnSaE0vBCd7oCinm7W5OFBL%2BZ%2F15YfxjB4GZWZEbRiysB5X4SAsnN8uw9veQOeU%2BLtgOO60BZDfRljuT7Td5S%2FgB3FZjfv5LTSP6mgHGUss9mcr%2BLAIaB4C%2BxtdjzmvLBfnY9gb7bJbAhWkwAMf%2FSwqcdhKeWxmrLf9UlgeHK569DqQDxM78yDaCwFr%2FyOIef3TAmKS2j2sfpUOLkwAq4CL8FTMeu%2Bq5gwVkUFhVXoRudZXFj1Cd2VmlK5uJVLuqKyDkg8Bs3Ufvlmued1m9DvNkevLWm4UcGjv0E4mBOqNIftNgQXUQBOnPatBifx8BrcYlUTtb5mV3TMmha12RyVR5hOSfGHOH0Yt7rA3B0ejGXTkIo7vh5sc3tkJoHxDrSAVn6sRwWRB22yXLR%2BQ5IqOBMHGRY64GSz%2Bvu5BoFn4LS2sqa1wZVd8or6tX2QNBDCem5W9BjqkAeqZWDnYIu9K8bL4NjM6H0Oe2G3OB9p82pGBPLhKDa0Uu%2BgkOaHCvBy%2F%2FUQLmC0%2BbwmdjlRJCxfmLgcTLkD5DIKCpCZztqklVLTkilxLgJQ2MsziVR5P%2Bd82TrDi5XyKb1tgd%2FSjjGRdOIUEW52v%2BIutekbGo96SlYEKOFvPZQE%2BJLTtUTy%2Fv6dVG5Sk%2BpQqowQmp%2BrTg1QmD5WRPNdxGdQoRYJI&X-Amz-Signature=e69e695def1857b1ea9cabbe59c7984761b303d4975d7b096dbb987483c93b91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BHTNIVB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFZnP6ujrmz9zgi08uivCVzI7ZNJFMiSM2RMb5K%2BnFzNAiBb7iR%2B%2FSJ2XlwiOWJW1V8awj59EPnvGXVNa16RMewFeCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMeJMz%2FQK5Y83uJuvBKtwD5Mgsqsb1i%2FI2z29GcFWLztRmWH%2Ff70tyghNtEhrqP8Jn5xa0PCAQP45ahjA4mrPelSckazzSOfRSKkU0Be9peB33tFsOawqcfDld7OE8YvIZarJTLaglQmPYSynZ99W3i0Lx3bJYsoDUUI%2BxIUlNPULGvRa1h1vDF0hkAtB2TiMBa9EgtMny%2Bn%2FSrhL4d9QC48SUMWVlTQTXPCK%2FOO8j7IgoWm9P47YAa7na95zHA%2B%2BrFukkwjliDvNhOOTEE5IECX%2BmQiIKgUnpxnzvhMIiZWBvjVphIZj5Dkw3N46SuWC1nbPJVqC%2FSAow9gBj%2F6wCMWWXHBI9iZOG4JMShDmHir6Y1x4DiaYupSRm61bkl4dFHxjVFBQd589zCsmsPuFNgnyK3MYZ2Js5Rf3c2tc3ZZY4SeB%2FWPpNFSwKY7u49UOMfwQrw1chJDWkmLgKN0B%2Flwa6FDI2pj9qt8rgma7Zvvv4AfCC9zAYvFeW6VNPhq6qiT%2Fk%2FJ%2FSmaC%2FfvlgeY9EWfciH0QpB0UZklOhQbwy1rK%2B6cfZ%2BHG5VYuuVMyRmsRvW%2BLDuZc1%2B%2FFgxbfQjuAS8%2BJJjuxkoAk2DuuqAJmfwo5I7seYZMCwDyrTkzVsV7JQujn6uYa2rWGLBOwwi5uVvQY6pgF7Xbzn%2BHHX5owOtuyAcC0rasQS3QaMKDRs%2BnUrte%2Be0JUM0atW%2FInsWkhppaZnbzZ7jdyJN03LS1baz9ztEyLcaRgiEZFIGPz%2BiSUpSJ8KDdwszp7ItIehNtZUhd%2B%2Fnxz7Qg%2B%2BtgJoguiomF11JdfXSmBLatdyIMWsCoVCC%2FEUqX5QigTxxQctj%2BqvEj6fN4NAFBXKN1AnqGzPk6ECW6EYB%2BE2XDsL&X-Amz-Signature=92754a10d23e9b46aaa73840746d0e11b8adca88671feeb77737b40173f58028&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634SYFJNZ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCUuVITfr4QJc3ERJ%2FrczBO9L5XLYG9SbFUpNNux47oGQIhANpIRlk2vychWnvY3dy219AtXzxRgfSJHb4c8HYufpC0Kv8DCGkQABoMNjM3NDIzMTgzODA1IgxSHJQsJoqn9iGsT28q3AMW5NBarsdylRo%2BwGKIhkE%2B0ly%2B7OruXaGKwe9sI9UM4VjqtMzuy5zrCAsq3xHR5WM4f7fBLksyZ%2FTeqv8EV2JkrrlA9O%2Bjl99I6xsLI1LVaxmAnblEhJqdNCPfY%2BkWbuA%2BjdR80wPl6q86PSAcYFuL4UetzEblca3Xwb1OeyAoiGn%2F3uE%2FFCTcscJCcq3qLhF3LKoTOpNGadG8wOmRvHGLfB5F87TZtd1MT4LLmbxIJR4vc9Xh6Lggat%2B5fJGd7NpmIcWJN1i3vVPuQDLaJ%2B6q4NUoEUUE0pwOQewt%2Bl1FexKVka4NQLIf1AkjRWsK8PLdxNCLtgchLNBGzBte6dF%2FpWDf%2Fd8R2UoVvB9XB%2FJ%2B7%2Bq4ydBGFnV0BXipi6kQYE9x1t88xc6jrpEoenLqda7WyzDwJIXzdxgL64lmRWmORvt58a8k8yz73XB8h2cYUPwohAFd%2F5zc7Kmhg2uDvX8rojWQ7oey8Ln2Fbrm8pgsjJ1utdgdD2kNUHUc7PeJOOXVbdD0K8LeXP2Y4zSRk%2FkvqoDyEqmFn62%2Fq1R9vZWe0hk1T0blEMJkoBYvpsZ4jbBUDdIEw45xTErjuA1px0q713fC0dROs2OCtuz9nkfK5C6LwPuDWVqGD%2FKitzDanJW9BjqkAWE923yDPVCCXA0YE7BVj%2BTo0PmtCRWS%2BPoYhuOp7stDQOTAUL6NnCKu3fqyrebdQWhX7DSsV9qDjDq%2FB%2FyRyQRC6Bnt2HgFrN86NnqaXUFZ8KRZUustSsia7ghklJ5HkTTqdmW8BwpKHxjDc9Q06FQv%2F7YXPES7Y6Y8RiE3gCYJZJ20Jd11hXy6JZja0qhz%2FBWukQzwoDoKlFz%2FvC5IrKo8UChj&X-Amz-Signature=692b7700697570a2678b8e4fcda7f8eccd21f16dedc9e7ad9333eda64838d7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
