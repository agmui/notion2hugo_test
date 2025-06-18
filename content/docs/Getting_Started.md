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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP5EMIN%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICt4lB%2FfjJGdMOG96Mlh1Il3D%2FcloCeuY5lym%2BBjS9I9AiEApUVx1rcTGxVZIhcLgSSJoraEwZsUiAJ0X5PmGD2ZJB0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBup4OMRrsdQwPFDASrcA8be7tNFY11ADLJs1z41I8tT%2BxMXOKxcZkxu9qoWiGTYr43q3B5eJdEkxNcsXfmvUv1o83hu89BWVQ0fEWgd7eT4EHR4yixADwhdwoqsSXLjEUrLPAVbg1NBcgJKO9mAjp9riqUxW0UznO8oI1Jmsdj08Y742GPkfMdiHOmBEnOfYcXnDxW3%2F1dQHDLxpaf6gMCFJB7YAufPbF6lFkWpySo9iMxxj2hD1L8fsF%2FmHm3%2Bfx%2BV%2FSRlH6irG950mvVPOTasKQ%2FGxAqBep2gyWOxQPLx74gN8ntqju%2FvEJI88%2BqbCYuFICr%2BADh5uoOPuE%2BjabIzu9utUnFZ09oyKur5k81ihFo6o1OCU6AfvMz5YDjrb84AT4Seto1GLBobt5uPernCu7%2F%2FwXzoEPAagm9iCgCIFYPq%2FtQrBVYpL39WqjII1YlAw0gF%2BhaxN8TdTjP%2BHItKuDAEyS49SCUpqu4V5nJ9SXhDvDb8FHXIu445yq%2BALWQwDSm1Obr8NpbAH%2BawwullHyUUQ7XiRaeZfPF74c8cCsvvwj%2FahgtPTl8z8bGMqgLQC2x39tvD6DficiG2gB2JGxiu4ekI%2BSbON2xI2uVGUTUPo6lfesuNg4A0W%2F%2FaCPzSA8UUyNxdvtrMMISNysIGOqUBAKrx7kd8yWdC4B64cK2vsiOiov4feE4fTqsZKO%2FheAvUUuAbPoM8q%2FWQa6vNbNMDpJ5KRYNK4D2%2BLJVtkMPmNvLqwaHuLP1wVyQeD6s%2BmLG8X7pl0d%2FUsxS3nml4%2B%2BxvDVxijVp1hYhxY39q5zgrbwUaiZarQzV3WSVUfMkM5YyXDykP1K7i4NkgGSL0lVgTG8gPUZaxnch5fYFncottihKbMvIT&X-Amz-Signature=b6bc38ebf44fca46e0976e293dac86196632d36bd24d85b7b7f385ea81a871e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP5EMIN%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICt4lB%2FfjJGdMOG96Mlh1Il3D%2FcloCeuY5lym%2BBjS9I9AiEApUVx1rcTGxVZIhcLgSSJoraEwZsUiAJ0X5PmGD2ZJB0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBup4OMRrsdQwPFDASrcA8be7tNFY11ADLJs1z41I8tT%2BxMXOKxcZkxu9qoWiGTYr43q3B5eJdEkxNcsXfmvUv1o83hu89BWVQ0fEWgd7eT4EHR4yixADwhdwoqsSXLjEUrLPAVbg1NBcgJKO9mAjp9riqUxW0UznO8oI1Jmsdj08Y742GPkfMdiHOmBEnOfYcXnDxW3%2F1dQHDLxpaf6gMCFJB7YAufPbF6lFkWpySo9iMxxj2hD1L8fsF%2FmHm3%2Bfx%2BV%2FSRlH6irG950mvVPOTasKQ%2FGxAqBep2gyWOxQPLx74gN8ntqju%2FvEJI88%2BqbCYuFICr%2BADh5uoOPuE%2BjabIzu9utUnFZ09oyKur5k81ihFo6o1OCU6AfvMz5YDjrb84AT4Seto1GLBobt5uPernCu7%2F%2FwXzoEPAagm9iCgCIFYPq%2FtQrBVYpL39WqjII1YlAw0gF%2BhaxN8TdTjP%2BHItKuDAEyS49SCUpqu4V5nJ9SXhDvDb8FHXIu445yq%2BALWQwDSm1Obr8NpbAH%2BawwullHyUUQ7XiRaeZfPF74c8cCsvvwj%2FahgtPTl8z8bGMqgLQC2x39tvD6DficiG2gB2JGxiu4ekI%2BSbON2xI2uVGUTUPo6lfesuNg4A0W%2F%2FaCPzSA8UUyNxdvtrMMISNysIGOqUBAKrx7kd8yWdC4B64cK2vsiOiov4feE4fTqsZKO%2FheAvUUuAbPoM8q%2FWQa6vNbNMDpJ5KRYNK4D2%2BLJVtkMPmNvLqwaHuLP1wVyQeD6s%2BmLG8X7pl0d%2FUsxS3nml4%2B%2BxvDVxijVp1hYhxY39q5zgrbwUaiZarQzV3WSVUfMkM5YyXDykP1K7i4NkgGSL0lVgTG8gPUZaxnch5fYFncottihKbMvIT&X-Amz-Signature=f043a25454c55aa9659a42da0cf939fe3576f174e94c102561f68e8cd09f3726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP5EMIN%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICt4lB%2FfjJGdMOG96Mlh1Il3D%2FcloCeuY5lym%2BBjS9I9AiEApUVx1rcTGxVZIhcLgSSJoraEwZsUiAJ0X5PmGD2ZJB0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBup4OMRrsdQwPFDASrcA8be7tNFY11ADLJs1z41I8tT%2BxMXOKxcZkxu9qoWiGTYr43q3B5eJdEkxNcsXfmvUv1o83hu89BWVQ0fEWgd7eT4EHR4yixADwhdwoqsSXLjEUrLPAVbg1NBcgJKO9mAjp9riqUxW0UznO8oI1Jmsdj08Y742GPkfMdiHOmBEnOfYcXnDxW3%2F1dQHDLxpaf6gMCFJB7YAufPbF6lFkWpySo9iMxxj2hD1L8fsF%2FmHm3%2Bfx%2BV%2FSRlH6irG950mvVPOTasKQ%2FGxAqBep2gyWOxQPLx74gN8ntqju%2FvEJI88%2BqbCYuFICr%2BADh5uoOPuE%2BjabIzu9utUnFZ09oyKur5k81ihFo6o1OCU6AfvMz5YDjrb84AT4Seto1GLBobt5uPernCu7%2F%2FwXzoEPAagm9iCgCIFYPq%2FtQrBVYpL39WqjII1YlAw0gF%2BhaxN8TdTjP%2BHItKuDAEyS49SCUpqu4V5nJ9SXhDvDb8FHXIu445yq%2BALWQwDSm1Obr8NpbAH%2BawwullHyUUQ7XiRaeZfPF74c8cCsvvwj%2FahgtPTl8z8bGMqgLQC2x39tvD6DficiG2gB2JGxiu4ekI%2BSbON2xI2uVGUTUPo6lfesuNg4A0W%2F%2FaCPzSA8UUyNxdvtrMMISNysIGOqUBAKrx7kd8yWdC4B64cK2vsiOiov4feE4fTqsZKO%2FheAvUUuAbPoM8q%2FWQa6vNbNMDpJ5KRYNK4D2%2BLJVtkMPmNvLqwaHuLP1wVyQeD6s%2BmLG8X7pl0d%2FUsxS3nml4%2B%2BxvDVxijVp1hYhxY39q5zgrbwUaiZarQzV3WSVUfMkM5YyXDykP1K7i4NkgGSL0lVgTG8gPUZaxnch5fYFncottihKbMvIT&X-Amz-Signature=f6af10610c27fd810305e313e9afc856040e4b9f801b0d438a4e5b97dc998f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NYSOPQH%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLNPJbwm5h76QIoqi61BFxTeHX8k0a%2FflPQFeA9vP5UQIhAL%2BvAyRgrJh81APhPtqsXZfsIU1uY71BAjxEieYU9bQZKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyppsMWRdEpGs%2Brt7oq3APB4y%2BzBJCLpR%2FjQdXIank9IrQ2bJzIGzRUL7gB35RQmB%2FG5J5sXYvmUGk%2F7YnQVXmzKov19WJtjMsbF5rh1ebtnDchvckR%2B94aciVI7Ocb%2F0n0AWJHIqHto4JerYyl6SK7MzTU7MFjYK9nkhajWcJYmFln6rjHKbLCKkFEeB8tEOGvnZiJyByGruldqcNF1%2Fy393FtNueQ1a9nglBlSXm4bbWa685qYNeO87NpYy3Kl%2BQyUDDEsMTdomJqrn8P9uMgLkOSVz7CJL06S2vCE1jlK91Y6rI4oh%2FHNxXUXSVviVYQyg9KHkl8UBfIB5JC7MfpQPP%2BMobv1fUNlU8KFWFjUyhNqx1MeoqDnMVht%2FY9LBzgnMn5MM2TKMNh5Q%2FO1WFKftg0quCjgPIhyGXAAC0rn1N6foNZI%2BTndbP3%2Fr3iNwoT8UJrp%2BEI3ijM27D%2BlBLl4Tr5oIfrzizlCNGDNOjWGBEj5iC3diEijqA5bKaH99E0H7Qxiu8PAeHa7nOVDYH%2FIq0P%2BYmJ9cqdnzZNX1WPcccElbIPiGtAkJcVKAqfL8iUwFkZwqG%2FVHm2jhb2CCCBB0beZn9WX1ndRmE35P%2BK7868UCC1hnMn9TnNDpGJVq83f4bysy6woFTBNDD8jcrCBjqkAXY7ugloI%2Fo0TnDKQHA2c4BYlCT61DHV%2Fy%2FxlmKgaVWfKpsdb1dt8%2FwUX7iDBEXssp%2Fn%2FWrOFziDDuIoU7AGLWdK%2BKaJQJY3n%2BtxpR7ugeexJv6tTQSlAy7Hd0EJWYZTNkFAi2y2iPfEgBgtWTFO%2Bli0Wln7RZ7MtsW%2FrvRrn7E1C4KaNL5rr7ezOkjJQteE8hu%2BOH6%2F6ts7zIM6H409pAI%2BhwZU&X-Amz-Signature=b2c9cf71172b462fa031927af02d99600281b42b6e2b0a9bdd532b53b138f6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKCDQ7CP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzRtnTiIUHdTT3q2QK8NDsmlhPVgvsndftnWM7Wr2u2AiAZAiXkgWcYdcvOak4I6al3Fmdj6XONdxdk8a5WXpk8liqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDUZst%2BvrO3Kznw%2FKtwD1behXFFaQhtL96MC3iigezOVFwLpeXCDdXkibHNDGFMgW2Cj1NY8kFzms5wi4iyv%2FOQt1ZTltYXRGzYGYBgfFUDDGZ5HqTM%2F4JXK9%2BeYzCF6nXOpDa9SlA%2F8pJo2OjSKPKzan2Z0RnXw8QvH8HQ3bpxi1IZXFqdr8ElXbY5OU%2Bqs2g3bto93TbtePkagos9YOkqHRnwsiLymr0oEdVnh69MbiRtS0Ou%2FO2s09pnU%2F4%2B%2F5imm3JVxTL0Iy2BiJ8pzV9SW76LMb3RYnQNVANYZRoyIKMz6axySssQkwRs6trP7%2BKtJS0AjrxdrAZQsaVKWQ5KGgQ0Uw1NV8eorcP8%2FgfYy7ihdNVuuC6U9pUW44l5cMHoUj1P9KKQ3glHW8%2BQ3a590%2F9CS7Kn5AErhlHDHmhgeOaaahDM0%2BNoA8QE%2BgDG%2F9v7Q5t5CGBuGjeZ4J%2B97PDY3VMO4Rav2JBd8CnEppooXm%2BlS1fqPJYP0wYLEW0bUSnF0NFZAw8piHT4R3GoNKkn4exw7kKZRX5ljaVbZ%2BfBSJ7sFoUrzTzSctRJyG6gYf5TykMezTG3sb3jPkcV6r1zr4KcYaSVsqkbhIToRGBZplKxZMLvV2sfBzozG9tYAMi9Co9GoU0CTUHww343KwgY6pgE08Th8oyQ2PpvkLSCsXhjjaA6rtRz4cf3lhnUegqr9nMZFc2QNn7ptO2n%2Bk17ks%2FHM0UPoBa38W1zMYK1xxqh%2FGzuYZTobFJzEC%2BHZ8FkaT6g5KsPu1TjlS%2FUDH5Yop9ax1NugOen%2FoEB2fra6KYy9HMvLUvgEy3ExqQ6SHQ%2BBwqWw2%2FlC6Z%2BEkksK96D3B4gDnDi1%2B8ZeVctqP1C3Zn%2BlCuG2Oq7y&X-Amz-Signature=2b0cdb4c7e4a8ed33bcdbd354d8b4436e17ec18fdadbe78f51cf74b4cc188bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RP5EMIN%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICt4lB%2FfjJGdMOG96Mlh1Il3D%2FcloCeuY5lym%2BBjS9I9AiEApUVx1rcTGxVZIhcLgSSJoraEwZsUiAJ0X5PmGD2ZJB0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBup4OMRrsdQwPFDASrcA8be7tNFY11ADLJs1z41I8tT%2BxMXOKxcZkxu9qoWiGTYr43q3B5eJdEkxNcsXfmvUv1o83hu89BWVQ0fEWgd7eT4EHR4yixADwhdwoqsSXLjEUrLPAVbg1NBcgJKO9mAjp9riqUxW0UznO8oI1Jmsdj08Y742GPkfMdiHOmBEnOfYcXnDxW3%2F1dQHDLxpaf6gMCFJB7YAufPbF6lFkWpySo9iMxxj2hD1L8fsF%2FmHm3%2Bfx%2BV%2FSRlH6irG950mvVPOTasKQ%2FGxAqBep2gyWOxQPLx74gN8ntqju%2FvEJI88%2BqbCYuFICr%2BADh5uoOPuE%2BjabIzu9utUnFZ09oyKur5k81ihFo6o1OCU6AfvMz5YDjrb84AT4Seto1GLBobt5uPernCu7%2F%2FwXzoEPAagm9iCgCIFYPq%2FtQrBVYpL39WqjII1YlAw0gF%2BhaxN8TdTjP%2BHItKuDAEyS49SCUpqu4V5nJ9SXhDvDb8FHXIu445yq%2BALWQwDSm1Obr8NpbAH%2BawwullHyUUQ7XiRaeZfPF74c8cCsvvwj%2FahgtPTl8z8bGMqgLQC2x39tvD6DficiG2gB2JGxiu4ekI%2BSbON2xI2uVGUTUPo6lfesuNg4A0W%2F%2FaCPzSA8UUyNxdvtrMMISNysIGOqUBAKrx7kd8yWdC4B64cK2vsiOiov4feE4fTqsZKO%2FheAvUUuAbPoM8q%2FWQa6vNbNMDpJ5KRYNK4D2%2BLJVtkMPmNvLqwaHuLP1wVyQeD6s%2BmLG8X7pl0d%2FUsxS3nml4%2B%2BxvDVxijVp1hYhxY39q5zgrbwUaiZarQzV3WSVUfMkM5YyXDykP1K7i4NkgGSL0lVgTG8gPUZaxnch5fYFncottihKbMvIT&X-Amz-Signature=f27939c202eb96e3b23d6cf9740ee0927bd03c0652263aaeaae19e2feefde334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
