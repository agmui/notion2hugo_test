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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625BZDGXZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEmwsyfhb5gT7ZDFhbcucs5%2FrtIpLwLWemfhYdsohKQmAiEAikvlJ5Yp7PhD3bBC5NKKvjAiIT4j0sZi8v3yKBkYauIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvV77Pu%2FkQwkqKPOircA08AqsV6Aqx07UZcb6%2B6xJ9A3UH8jRF%2FjEawr1x0Kyb1%2B4yCSVHkZiE7mp9Qq3lW6NQ%2FqqHgAPD6dDP8NJfMDUzJEXr5aU81ExmUNFBkleTxvf1%2BNEzuhrr5rWDvlP7p%2BBw8AdluaoH5P6M3xs80wTh5LGvZbImTcnMgIGO7UtyyNY8Ve4%2FgMjBiclxmsDfnutVze8LZvlUqQHpf3sKoE0W4pFhEGhpyX6z%2FWqevDW851ZuEzpTL9eFrRKexP%2B39%2F5GjVnDPQgH6bbcabvLgEJ1xJRW3%2B0gz9KhoufkYcI%2FnpUCKm6mn5lFaKmXNhmeh%2FP4CE1gT1RcNtfLZEscZdyW9BH9Iu4Go8Nz1Opvip0xGR%2FDiO%2F7gGjgQnh1IVqGahuzc3fhji9BSm6KLDIGcuBkSamI3d0gFW3BepZ0AJyrQEluU9ikCi7PuRa%2BxWszFpL1qrOTwmi383VXUQWXAok4ljUeJvbPDQ85ShFhGw9VbqB%2BqTT2w%2BaFyc68QXqIOuO6JvVU%2FEmdr6AFelUCa9%2FSDCCNIwSQDntLWxESlfQeWBJ1phC0HmHCBr8JAbBAnVjjVLWlMar1Y36DtyjCSv0Tg8YAyRs7pLHRp3%2FUw1mXPPWtfSxXV%2BIF5ApazMIvQhr4GOqUB9ndFjcx%2FeMCoEOYXP4M%2Bm7bNGomLX5LD2goAemzpcH6jtspGUV8QVUXYdggdqNA4pipJPdXUGg61GywYwJZBuAAancvEbz2ipIqaziTqypw5fMkl3zqDglOdagVsQCwT8BiLuL4dndK%2F6YeAetlvdvLLgbV40OP5FPIf2YHdNARYl%2FYU8c9UswVGYbdzL23b7onNevI5a90AeNes3k6d8AI2%2FPX%2B&X-Amz-Signature=4ce19f1acdbae7d4abd5c74129fedccc5519df87a318f3f768aa2aabbc86437e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625BZDGXZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEmwsyfhb5gT7ZDFhbcucs5%2FrtIpLwLWemfhYdsohKQmAiEAikvlJ5Yp7PhD3bBC5NKKvjAiIT4j0sZi8v3yKBkYauIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvV77Pu%2FkQwkqKPOircA08AqsV6Aqx07UZcb6%2B6xJ9A3UH8jRF%2FjEawr1x0Kyb1%2B4yCSVHkZiE7mp9Qq3lW6NQ%2FqqHgAPD6dDP8NJfMDUzJEXr5aU81ExmUNFBkleTxvf1%2BNEzuhrr5rWDvlP7p%2BBw8AdluaoH5P6M3xs80wTh5LGvZbImTcnMgIGO7UtyyNY8Ve4%2FgMjBiclxmsDfnutVze8LZvlUqQHpf3sKoE0W4pFhEGhpyX6z%2FWqevDW851ZuEzpTL9eFrRKexP%2B39%2F5GjVnDPQgH6bbcabvLgEJ1xJRW3%2B0gz9KhoufkYcI%2FnpUCKm6mn5lFaKmXNhmeh%2FP4CE1gT1RcNtfLZEscZdyW9BH9Iu4Go8Nz1Opvip0xGR%2FDiO%2F7gGjgQnh1IVqGahuzc3fhji9BSm6KLDIGcuBkSamI3d0gFW3BepZ0AJyrQEluU9ikCi7PuRa%2BxWszFpL1qrOTwmi383VXUQWXAok4ljUeJvbPDQ85ShFhGw9VbqB%2BqTT2w%2BaFyc68QXqIOuO6JvVU%2FEmdr6AFelUCa9%2FSDCCNIwSQDntLWxESlfQeWBJ1phC0HmHCBr8JAbBAnVjjVLWlMar1Y36DtyjCSv0Tg8YAyRs7pLHRp3%2FUw1mXPPWtfSxXV%2BIF5ApazMIvQhr4GOqUB9ndFjcx%2FeMCoEOYXP4M%2Bm7bNGomLX5LD2goAemzpcH6jtspGUV8QVUXYdggdqNA4pipJPdXUGg61GywYwJZBuAAancvEbz2ipIqaziTqypw5fMkl3zqDglOdagVsQCwT8BiLuL4dndK%2F6YeAetlvdvLLgbV40OP5FPIf2YHdNARYl%2FYU8c9UswVGYbdzL23b7onNevI5a90AeNes3k6d8AI2%2FPX%2B&X-Amz-Signature=627eae2c7d3f8997f9c3baaf413d23eb7b5a5d37023bc5578d922278ffbca458&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJOWVQW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDuHEpOjLwpyBTmn3xknFHDqw154EOWKhGOZBRvgQTjRgIhALL3aOEPKnXXv%2F6QNpIF6k31KqaeLPRqmDVZfGxvc5DCKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6D11%2FgjsRinomCDwq3AN%2BZnz2NN8sxUUBNpdWkVE40%2BuTTzifc9vCM2f1oaEbWzLXdgTXNTwC3GoxL4HGed1%2F2pbQ%2FrqRxRPSaWtyAqxJlY7X6UI4JFwz4SmZIH4RtrnxfvkemffCpOvo%2B2bU5kKsedtGwYvyTyzPUJ6hsGZn372IZPFOQq%2FdJchqdh81LcTdYH9urlAjymjlQkaA3mGKio%2B%2Fb36Fb3%2BM8sYNsQHy1thUK1SH38xceJQdJqGRrzo3p5TwSuECT7SHMqZ3UWNSHbuyzEX629SYNqbuWlxgMktQDTtJtHMt0GOYlge%2FtIfIdu51UtCl1fF1eFYqQa73wN8CvjDZ8MIGmA7XkmRF4ix3zUwz0vJ7iZqZ0w1%2F%2BW62ZYjBDn%2F7bWXG308cTIaWp%2BJ%2B7t0zjH9eGFTkCJPVa2CiDD2kW%2BSaZJpIsDe42aWDjXnPS9epENT8SaeHejtyuIET2n%2BeVUhp9MUN4cCG4K4V0rlM4MjaXjRqUs3o5lTKJUvl%2BVgsC3z%2FQayDA%2Bx2YQj%2BI8X2IYkYWro3C5Ro8AQhp%2FqcdODxKIt6baYuWSlTiLu%2BuyNv7JNqF%2FYukYLH%2FM0i6PJuKVVXJEN2FleMmuJC4NcTId4YqOOsD6uzTAFAVbhlSDbqq3UhcTDN0Ia%2BBjqkASWLk%2BEqEKSsIUf7F0PiQqNB1kZ2fpNijmw1D%2B5SbSzZDtnIMmc0a4ABxVBKm9WOTn9x1ADeDCbm7Iort0vLr0KbcYDJp1j55QcbgZMw1zTIT9roTFrLyDWjm%2BGqhGHz1mknsW9tkUE0uFb%2FI8Rgku4vK4UjpQ1eFDK40jxP6qzGT2XrQmCbYEXzd3PSX3M30b5qB8GKJfXGXaZe5MUJn3DzrJKs&X-Amz-Signature=a07a618e4d997597a38865951b6089e2b7b31f0fdb79dd992057d451bf5608f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646EHXM6B%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIAjZ%2BdK%2BzOvF27SMncZV91Acju2tx45RULzjBWD9s%2F9CAiB4S4WYmErjVD4ugomeibd4NgLix4nwQKe9yxopjdq%2BWSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2LYW6tFMBoZ34xjqKtwDthR1ecc4%2FjQpruyIF66WidHCbZKP0TFEyf7Scd6TgH4I60bpW8jNUwx2SDByg1GKCSG6e71XFC6tYrKQOvtIGd5oJAJwygMws1%2BCb0m6qfSn9vZKaeLQl2OGnaEGLVM6LBe3udDkeqlZ041gZZXVMk8TtRZXJMeTsTx4%2BR6ujBNFx9S6Ow0kUH1PWEfKS%2FLZYTZbGqS1s3LPpIjZ5VoL7Xmi5AysjE%2BT6OhElpTKvt3bi15BQrfN2FAYHQi8Hzjo32hjiWVz0w%2F8dMJzDq9iI5P6YBmSeKGgO%2FrmkXU0Rralj4osVT15zP6hDBXMCELXJfklc05psNFHn8dssthjUwTtBSwf8XaCEP7LQVHXv3Mm5Z%2BWQzLJqh45ly6TnNPfk7%2FuMjHobQa5X586zczuyMyZpAYNSSMjOQnM1P9LPMnMfw9SKDbSTcaRKYTU59BIH6TlRykSkXycQs72rupLiJtKjjYvVs9q%2FbY89lM1ghRCRw7e45FXa3w5o9IatIBRqEKT%2FVe1t2FIv4hBrnOdhroZ07dcPbaGhVyFwhJJlGVmHu1TEG%2BfdUlWpkbfEeFAa2SQZ5kHLgr%2F%2BKPsMdwh2HRoYT5MxiRznU2ik2g51lGnqcNdQFn7bCLo01gwmdCGvgY6pgFRv4rf%2Frfz0p9IrjB6xtexJhMhyak0JBTv7NV2R%2Bn0KEN2wbMPGlrC6jN84zQJ%2BPLo1EOE8emKgKZ4cH3Raq0AjFXQkT4MDV9rWtx5GWX4e24cm5667jescwdnqDSgMs4w7CD1VWewx3ZG6WO63ygRORPLnz2V9K1w%2B%2Bk1FDvFZSrFpb%2BDJiiny769rP6trXxlC%2B2JoYXHIAzHTfoY7ZTlpxElhsVB&X-Amz-Signature=91fabf046e977e465d304dc6567190370161e90d99accbc28b5806d4aa8cdb27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625BZDGXZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIEmwsyfhb5gT7ZDFhbcucs5%2FrtIpLwLWemfhYdsohKQmAiEAikvlJ5Yp7PhD3bBC5NKKvjAiIT4j0sZi8v3yKBkYauIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvV77Pu%2FkQwkqKPOircA08AqsV6Aqx07UZcb6%2B6xJ9A3UH8jRF%2FjEawr1x0Kyb1%2B4yCSVHkZiE7mp9Qq3lW6NQ%2FqqHgAPD6dDP8NJfMDUzJEXr5aU81ExmUNFBkleTxvf1%2BNEzuhrr5rWDvlP7p%2BBw8AdluaoH5P6M3xs80wTh5LGvZbImTcnMgIGO7UtyyNY8Ve4%2FgMjBiclxmsDfnutVze8LZvlUqQHpf3sKoE0W4pFhEGhpyX6z%2FWqevDW851ZuEzpTL9eFrRKexP%2B39%2F5GjVnDPQgH6bbcabvLgEJ1xJRW3%2B0gz9KhoufkYcI%2FnpUCKm6mn5lFaKmXNhmeh%2FP4CE1gT1RcNtfLZEscZdyW9BH9Iu4Go8Nz1Opvip0xGR%2FDiO%2F7gGjgQnh1IVqGahuzc3fhji9BSm6KLDIGcuBkSamI3d0gFW3BepZ0AJyrQEluU9ikCi7PuRa%2BxWszFpL1qrOTwmi383VXUQWXAok4ljUeJvbPDQ85ShFhGw9VbqB%2BqTT2w%2BaFyc68QXqIOuO6JvVU%2FEmdr6AFelUCa9%2FSDCCNIwSQDntLWxESlfQeWBJ1phC0HmHCBr8JAbBAnVjjVLWlMar1Y36DtyjCSv0Tg8YAyRs7pLHRp3%2FUw1mXPPWtfSxXV%2BIF5ApazMIvQhr4GOqUB9ndFjcx%2FeMCoEOYXP4M%2Bm7bNGomLX5LD2goAemzpcH6jtspGUV8QVUXYdggdqNA4pipJPdXUGg61GywYwJZBuAAancvEbz2ipIqaziTqypw5fMkl3zqDglOdagVsQCwT8BiLuL4dndK%2F6YeAetlvdvLLgbV40OP5FPIf2YHdNARYl%2FYU8c9UswVGYbdzL23b7onNevI5a90AeNes3k6d8AI2%2FPX%2B&X-Amz-Signature=c2f7d6ecb435c950fe495664649fffef5a8f0e240f8a3750b634512dcd90d398&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
