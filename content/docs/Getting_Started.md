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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SSVKQN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIASWU8mBb8Z1RJvlcHpY4aw7Q1%2FegKcqz0%2FB37CWinWDAiEA7wQbWsmjRki%2FQ%2BBcGjW6igaGEERCoEkULTvPPcg2mNoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHbShFHFoYvPwOAnsCrcA5kwCFKLlVzLQmfpeQoW4Vd52k73Be%2B39J1oKL3gtI9FiXsQL%2BsNfTUhiF2xCCEUpdoy23JzmQK9GELOSOldrUCvv8N%2BVnhrPxRSQddwLf6RRzigiCTa1c4ij2AvnhZEO%2Fig5ULOCVykodUW4On7dpLd6GgHayPWgeLkliEKWjWhh9%2BBnRRvz6E1AOLiWNUsVT4mk5gwoipm3x9q1CFVqLGqxLdxvrLZPJwRNISfFuX98GHFCT6AKVz3xS0b%2BgXJp34U4kX5gVfZE73Od3cFYp1s2LgYzo0bFmbWMdOUNIxqWkQ3aAWX92QMPTaqu38jYrikH5BxWb9AQvmfYXnF7VosieHjxxGF7W4N223KxSNVnoBs83CdoSR7ZT%2F%2BW32RD62ULAkpAtlL80jwMe0b8IJypHMBCl0SBvMeEOvnlUFrTESTb8JPDnLew0%2Bl%2B20Euge5o%2FopL5bOgY6itnbqFMN0TaChd92DMnB3NreaIinX%2BF%2F4hb5a5XO5teAuSpD62nxvzwfkZmcWXMcTjzG7YnMx37p3wg4UtuulUuZcuBeUoeKWPLihb37f2T9ubD6rxrKZdeQZTbuej%2By1eYcA9XtZiZKkTTQYd0ZPP9%2B7GK4guIdYnh5f9b3Y%2B6GsMJK9tMIGOqUBzLoKKopW9LWEeeQGyi1ixy%2FQMTCJGKPRS%2FBuz4uFbdTzfJHqHMXXBCzmIBnGcSG9y1DEd%2F1HG%2FGEOEQY3bBDRcg8KPaFrxDEFQczquxjvqOs1oacJ22xZolPy77HsYLFO%2Bam2nVph7gWN2YCyCTH1gQwmaeav6yfnj0kzFnqYIxo0j%2BOOfU1w8mxCIwdLil1oRi3EIbCCocHNxH4gGg7nLiZW18z&X-Amz-Signature=553ef56655d86cba11b01ba3f94487a393c2ebdf893af17d10389b61e86ab590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SSVKQN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIASWU8mBb8Z1RJvlcHpY4aw7Q1%2FegKcqz0%2FB37CWinWDAiEA7wQbWsmjRki%2FQ%2BBcGjW6igaGEERCoEkULTvPPcg2mNoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHbShFHFoYvPwOAnsCrcA5kwCFKLlVzLQmfpeQoW4Vd52k73Be%2B39J1oKL3gtI9FiXsQL%2BsNfTUhiF2xCCEUpdoy23JzmQK9GELOSOldrUCvv8N%2BVnhrPxRSQddwLf6RRzigiCTa1c4ij2AvnhZEO%2Fig5ULOCVykodUW4On7dpLd6GgHayPWgeLkliEKWjWhh9%2BBnRRvz6E1AOLiWNUsVT4mk5gwoipm3x9q1CFVqLGqxLdxvrLZPJwRNISfFuX98GHFCT6AKVz3xS0b%2BgXJp34U4kX5gVfZE73Od3cFYp1s2LgYzo0bFmbWMdOUNIxqWkQ3aAWX92QMPTaqu38jYrikH5BxWb9AQvmfYXnF7VosieHjxxGF7W4N223KxSNVnoBs83CdoSR7ZT%2F%2BW32RD62ULAkpAtlL80jwMe0b8IJypHMBCl0SBvMeEOvnlUFrTESTb8JPDnLew0%2Bl%2B20Euge5o%2FopL5bOgY6itnbqFMN0TaChd92DMnB3NreaIinX%2BF%2F4hb5a5XO5teAuSpD62nxvzwfkZmcWXMcTjzG7YnMx37p3wg4UtuulUuZcuBeUoeKWPLihb37f2T9ubD6rxrKZdeQZTbuej%2By1eYcA9XtZiZKkTTQYd0ZPP9%2B7GK4guIdYnh5f9b3Y%2B6GsMJK9tMIGOqUBzLoKKopW9LWEeeQGyi1ixy%2FQMTCJGKPRS%2FBuz4uFbdTzfJHqHMXXBCzmIBnGcSG9y1DEd%2F1HG%2FGEOEQY3bBDRcg8KPaFrxDEFQczquxjvqOs1oacJ22xZolPy77HsYLFO%2Bam2nVph7gWN2YCyCTH1gQwmaeav6yfnj0kzFnqYIxo0j%2BOOfU1w8mxCIwdLil1oRi3EIbCCocHNxH4gGg7nLiZW18z&X-Amz-Signature=0908f6abd6820a0abb98b64833bc494ae9a68c158d6b15710ef44092ba312b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SSVKQN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIASWU8mBb8Z1RJvlcHpY4aw7Q1%2FegKcqz0%2FB37CWinWDAiEA7wQbWsmjRki%2FQ%2BBcGjW6igaGEERCoEkULTvPPcg2mNoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHbShFHFoYvPwOAnsCrcA5kwCFKLlVzLQmfpeQoW4Vd52k73Be%2B39J1oKL3gtI9FiXsQL%2BsNfTUhiF2xCCEUpdoy23JzmQK9GELOSOldrUCvv8N%2BVnhrPxRSQddwLf6RRzigiCTa1c4ij2AvnhZEO%2Fig5ULOCVykodUW4On7dpLd6GgHayPWgeLkliEKWjWhh9%2BBnRRvz6E1AOLiWNUsVT4mk5gwoipm3x9q1CFVqLGqxLdxvrLZPJwRNISfFuX98GHFCT6AKVz3xS0b%2BgXJp34U4kX5gVfZE73Od3cFYp1s2LgYzo0bFmbWMdOUNIxqWkQ3aAWX92QMPTaqu38jYrikH5BxWb9AQvmfYXnF7VosieHjxxGF7W4N223KxSNVnoBs83CdoSR7ZT%2F%2BW32RD62ULAkpAtlL80jwMe0b8IJypHMBCl0SBvMeEOvnlUFrTESTb8JPDnLew0%2Bl%2B20Euge5o%2FopL5bOgY6itnbqFMN0TaChd92DMnB3NreaIinX%2BF%2F4hb5a5XO5teAuSpD62nxvzwfkZmcWXMcTjzG7YnMx37p3wg4UtuulUuZcuBeUoeKWPLihb37f2T9ubD6rxrKZdeQZTbuej%2By1eYcA9XtZiZKkTTQYd0ZPP9%2B7GK4guIdYnh5f9b3Y%2B6GsMJK9tMIGOqUBzLoKKopW9LWEeeQGyi1ixy%2FQMTCJGKPRS%2FBuz4uFbdTzfJHqHMXXBCzmIBnGcSG9y1DEd%2F1HG%2FGEOEQY3bBDRcg8KPaFrxDEFQczquxjvqOs1oacJ22xZolPy77HsYLFO%2Bam2nVph7gWN2YCyCTH1gQwmaeav6yfnj0kzFnqYIxo0j%2BOOfU1w8mxCIwdLil1oRi3EIbCCocHNxH4gGg7nLiZW18z&X-Amz-Signature=440d931542627748396905e1b8262de77194d5a79e2dd047ad8838f9020bacf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5WC574%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDoynHFS5lwBPvTmgfERZ2jwNXgjuw11T5q%2BuGJ2o8giwIhAOw0ho0V5wvfB4Rl5kW3GbssOppWSgT%2BJ2c486Y%2FHiLMKv8DCCgQABoMNjM3NDIzMTgzODA1IgzqtrT%2BcYMCiQzJjLkq3AM2ZO%2FSNHxHKEwRlrTFQZ0WJa%2FbsEmWZabrLKP0rFi5rM0%2Fsdf7MubR41iODMrcUjsgGE8JOfvPbMkDgDglclZ7JG6VSnlokMqtN6BWNpSdxhAeqjgjbI5rceBRNSmb9bEXyMVJ9Y3wUQzhLD8UBF2BqUjcllMgYj2GiSBLucLaq6LQYOO4GYuWTQXdYo%2F3313RucUHo%2BMC2V13wlRwGBjQxPxyKoIk%2BtXwE5Dg45O2VoxxksaVcypyTL8nZSWbG79nprCY%2Fhf62w2wfNMHkRSKJAb0cvSnmHxOnm%2FXFCoDNZV3ExRJ%2Fd0Db%2FBpIQCo%2FGxSMsuEaxIi4kQN%2BYmIQX%2BcqIdtt22U72PgN3feWxz1YdQcOKmj%2F%2FEt%2BBF9ByUEOQIEag56I7nHXPfci3NUFx62aEOZZoO2KO6m%2FE%2BE9hHfQgyJscUxX5NRN60TvytyV8QQXubfH8V8PMvxBo1nubsYbfz3uoENaGYy9QXIlYEDaUnrltrG7oCmISTHeqG%2F1C45tQ53doPyPwLBs423PDjYihgE2ifRvHBZKRR6vZbHouOoHPbrlIUry2W%2BXkCGs%2BR5SmXeRebWfRb%2Bk259OVEHG%2FZRKBVmGhGQq%2BM07Hj235m4y7f6jbqjuoyL0jDQvLTCBjqkAa%2BJcvg7A0fvUH3%2FxvwL17z%2F0w65FDHFfDmEfkYsSJVymDRQQmcyUunghorv3JStFF0bXDUyEccMnQHI3ClVxbCLafT4HD%2Fxm2aykf%2BtwjxeiCJ5zB2Llmv6HsI6jG6%2FUU50I36ZMqbqi%2FTW8UhFH3JzCrb5Z%2FnQljv2T91mYGokGbvXuCl6bdA90JUHXtElbvIyPnJmLFW215IjqBKHHxrEJKc1&X-Amz-Signature=67151554738042b4f1fb23cad161cd279da5cbc7171b5f05f45ff77056f83ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WZET5W%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDPoimh1oFx2xi3TytAJHJBj%2FFfz%2FfL9QH%2FzRVRPHhB1QIhAPJHKCfZJrOCNEAwsH%2FJU7pHReuHe9%2FU4JUniMUO4%2BQhKv8DCCgQABoMNjM3NDIzMTgzODA1IgxwvzC9ph3eZfc4tBkq3APp%2FVdCzWOcfSn8hQNWuQ3m1pQPFTC7qPKWYU97m7Nbg2xjL%2FHprE1cxiVfjaMneG18H7zhMKdsSwylLdPazHIcPvcGiYcGFK68UYgkhcCYheBKGvOG845rrrgx12ywOktAAxdFY6BMsddPWKQYnX8QXEbr8VdQTm74MzFqLQwFzbBkJGuMdwTc03loQjyX3NgSX5CXI9KXG6OB37pgFwIgK84PbU7ieSXI3T3672K41WW8Cw95cQz9Vr84nDsu3M6bcwzWhxDzTXGtcE8ugIthDAD0GUWyUMM%2BBSgb9ObMw24Uh4Q6pVZgKM8xrPWNv3pwQi2T0gc4nWlSQJYmQo%2F9cKnjOU61dgiIq9lewRimEbeE6f30i9fGPV2UBvKJA%2BXLL9GWeCQS38ZgP%2FYlTY%2BaCd%2Fkss%2FOjQ1lW9vpPliM4vurE54%2BDs7uDB6lIf%2FTXBXDZ%2BKHCfLlfp42IAdEeFArseeERBx48tsrOq%2FO1%2B4ogeKao7sEWDnpMoVOCJKSEZji9%2BrAM7vV1hK6qqdP%2Fq39PoxCj5qUcMofHR5o1Ie6z1hfCnKetaaWcQ1x9OYKt%2FHspxModhdT1tl9gYp115qqsPnXKmom5iQ1XElitxJn8rKBDWo7SEl6e6HxcjCBvLTCBjqkAcWjdQkNmtuJxCA4URlD5%2FpPBC1j%2ByEqlLYq%2FyoLLjbD%2Fe2fSTEDLX1sSTMx9vmlTHPA3LYyUmhmLdctiINinfzU8%2BDL6q4ieXTMWvoWvsUUmq5L8iUsypBzRe%2Fm2Jqgga0adOSmUKfSSuWi9H5dnOrc1MYP9wSMj78b4VrAWryDCGX73WBQpYT2dm5l1pbmYFeqyBb94Lywm%2Btpbmu8GeqX1bHP&X-Amz-Signature=2a508b0fd7c497591fbf7c2df6b995a1770692ae3e3a092341d8ac8a550e31b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SSVKQN%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIASWU8mBb8Z1RJvlcHpY4aw7Q1%2FegKcqz0%2FB37CWinWDAiEA7wQbWsmjRki%2FQ%2BBcGjW6igaGEERCoEkULTvPPcg2mNoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHbShFHFoYvPwOAnsCrcA5kwCFKLlVzLQmfpeQoW4Vd52k73Be%2B39J1oKL3gtI9FiXsQL%2BsNfTUhiF2xCCEUpdoy23JzmQK9GELOSOldrUCvv8N%2BVnhrPxRSQddwLf6RRzigiCTa1c4ij2AvnhZEO%2Fig5ULOCVykodUW4On7dpLd6GgHayPWgeLkliEKWjWhh9%2BBnRRvz6E1AOLiWNUsVT4mk5gwoipm3x9q1CFVqLGqxLdxvrLZPJwRNISfFuX98GHFCT6AKVz3xS0b%2BgXJp34U4kX5gVfZE73Od3cFYp1s2LgYzo0bFmbWMdOUNIxqWkQ3aAWX92QMPTaqu38jYrikH5BxWb9AQvmfYXnF7VosieHjxxGF7W4N223KxSNVnoBs83CdoSR7ZT%2F%2BW32RD62ULAkpAtlL80jwMe0b8IJypHMBCl0SBvMeEOvnlUFrTESTb8JPDnLew0%2Bl%2B20Euge5o%2FopL5bOgY6itnbqFMN0TaChd92DMnB3NreaIinX%2BF%2F4hb5a5XO5teAuSpD62nxvzwfkZmcWXMcTjzG7YnMx37p3wg4UtuulUuZcuBeUoeKWPLihb37f2T9ubD6rxrKZdeQZTbuej%2By1eYcA9XtZiZKkTTQYd0ZPP9%2B7GK4guIdYnh5f9b3Y%2B6GsMJK9tMIGOqUBzLoKKopW9LWEeeQGyi1ixy%2FQMTCJGKPRS%2FBuz4uFbdTzfJHqHMXXBCzmIBnGcSG9y1DEd%2F1HG%2FGEOEQY3bBDRcg8KPaFrxDEFQczquxjvqOs1oacJ22xZolPy77HsYLFO%2Bam2nVph7gWN2YCyCTH1gQwmaeav6yfnj0kzFnqYIxo0j%2BOOfU1w8mxCIwdLil1oRi3EIbCCocHNxH4gGg7nLiZW18z&X-Amz-Signature=1ada33f40891dce1245cb8c4839acd4fba42dadb22cd882e313a918274fcde13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
