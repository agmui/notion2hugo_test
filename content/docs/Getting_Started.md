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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4HBPWT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZTur5Ie013%2BJrS05sknTlTg1HqOZskis2kZgdZ%2FHLbwIhAIDSL1QCpOT05CJic0OVrCq6rTLLAg8gCtompZebH0pfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdyfttJ0hDRinibNEq3APuJ7c%2F%2BEmDMtRe%2FTkSjQDGdrUHXpkn1bNyNNIoZd5%2BoMAbCSSnMj2bKR53gfnwAkmxpeiYNh4TV12%2FdLqyQUGzZxu0TTBGwuE91R1O1xCQax5PSGKbg5HzbRDfRC0Ok5u92L8xAiBbKZ00SFwe%2BS3JtJQvjScKKz7sFngnvl8XIrUyknAvDs5tOaOISpCKXn%2Bfi0VHTcadQg7B8wxjkIUB7sQSjLkmbadhkEi0LjTaPzMoYwpqM%2FDQHmeeKj15BCCJjvX4ehczvB%2Bzb2ltPw8TKJpwf7CwAYF6TCamNn6oEjNB6Dv4AIwEiI%2B30ObxYKh6fe0bZAAbjX%2BK5UYXat0UsN5nfuNLrWD4qk%2FBTk9vJltgql9XVvltEF6qzwsJIFul%2B6rxc2Uooz%2FQP%2FRBF8WOMH6bQ0O%2BIYc1meOYcHwhhUUAz6yk%2F6Q3uN0CexJ3zw3YeRuq0PJLfDrZccexjm8mum4hCAZF8pI03Z8h9I2wFkUWDAIwe3OitTcxXzKKkkVcNeg78NPLCYJ23gyqnYD%2FVOaPhNHDLxnb9jeaOn%2FTk4cG56DFEWcXkYDal4Rf0c8gL70Krb5gnNe6rBjCVuXHPpb8GIXIXpqtXJjOSFIkESEz%2FV3W8hPnYiZvzDCt%2B63BBjqkARx%2B0Rh5%2FsOw%2B2CoAcKG5r5s5HFgN5rK7KyZWW8rBiIeAH7ExNpSf%2B4sfJgzRUkLOmCBb0k51g38IEigxgOqxBgKdK6Bo7R01enpJYjqLcf3n55OdfDxKts0qLr628rXhzF9EYcgu4TAfFPdXRprcUiw7rYu1gFHL888fXrCb4fMz0PzfsPEdWsaJnjV2C8yIrSCqDol5NDXqQKiKkd%2FKlE2RLWJ&X-Amz-Signature=057597daa5b1c8a2f114ef10f7b374b18e62bf055b886a3288743541999f9703&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4HBPWT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZTur5Ie013%2BJrS05sknTlTg1HqOZskis2kZgdZ%2FHLbwIhAIDSL1QCpOT05CJic0OVrCq6rTLLAg8gCtompZebH0pfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdyfttJ0hDRinibNEq3APuJ7c%2F%2BEmDMtRe%2FTkSjQDGdrUHXpkn1bNyNNIoZd5%2BoMAbCSSnMj2bKR53gfnwAkmxpeiYNh4TV12%2FdLqyQUGzZxu0TTBGwuE91R1O1xCQax5PSGKbg5HzbRDfRC0Ok5u92L8xAiBbKZ00SFwe%2BS3JtJQvjScKKz7sFngnvl8XIrUyknAvDs5tOaOISpCKXn%2Bfi0VHTcadQg7B8wxjkIUB7sQSjLkmbadhkEi0LjTaPzMoYwpqM%2FDQHmeeKj15BCCJjvX4ehczvB%2Bzb2ltPw8TKJpwf7CwAYF6TCamNn6oEjNB6Dv4AIwEiI%2B30ObxYKh6fe0bZAAbjX%2BK5UYXat0UsN5nfuNLrWD4qk%2FBTk9vJltgql9XVvltEF6qzwsJIFul%2B6rxc2Uooz%2FQP%2FRBF8WOMH6bQ0O%2BIYc1meOYcHwhhUUAz6yk%2F6Q3uN0CexJ3zw3YeRuq0PJLfDrZccexjm8mum4hCAZF8pI03Z8h9I2wFkUWDAIwe3OitTcxXzKKkkVcNeg78NPLCYJ23gyqnYD%2FVOaPhNHDLxnb9jeaOn%2FTk4cG56DFEWcXkYDal4Rf0c8gL70Krb5gnNe6rBjCVuXHPpb8GIXIXpqtXJjOSFIkESEz%2FV3W8hPnYiZvzDCt%2B63BBjqkARx%2B0Rh5%2FsOw%2B2CoAcKG5r5s5HFgN5rK7KyZWW8rBiIeAH7ExNpSf%2B4sfJgzRUkLOmCBb0k51g38IEigxgOqxBgKdK6Bo7R01enpJYjqLcf3n55OdfDxKts0qLr628rXhzF9EYcgu4TAfFPdXRprcUiw7rYu1gFHL888fXrCb4fMz0PzfsPEdWsaJnjV2C8yIrSCqDol5NDXqQKiKkd%2FKlE2RLWJ&X-Amz-Signature=6c6f4452cfd57f857812070881fd972f8f88578cdf89533af5481b14f00de06f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4HBPWT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZTur5Ie013%2BJrS05sknTlTg1HqOZskis2kZgdZ%2FHLbwIhAIDSL1QCpOT05CJic0OVrCq6rTLLAg8gCtompZebH0pfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdyfttJ0hDRinibNEq3APuJ7c%2F%2BEmDMtRe%2FTkSjQDGdrUHXpkn1bNyNNIoZd5%2BoMAbCSSnMj2bKR53gfnwAkmxpeiYNh4TV12%2FdLqyQUGzZxu0TTBGwuE91R1O1xCQax5PSGKbg5HzbRDfRC0Ok5u92L8xAiBbKZ00SFwe%2BS3JtJQvjScKKz7sFngnvl8XIrUyknAvDs5tOaOISpCKXn%2Bfi0VHTcadQg7B8wxjkIUB7sQSjLkmbadhkEi0LjTaPzMoYwpqM%2FDQHmeeKj15BCCJjvX4ehczvB%2Bzb2ltPw8TKJpwf7CwAYF6TCamNn6oEjNB6Dv4AIwEiI%2B30ObxYKh6fe0bZAAbjX%2BK5UYXat0UsN5nfuNLrWD4qk%2FBTk9vJltgql9XVvltEF6qzwsJIFul%2B6rxc2Uooz%2FQP%2FRBF8WOMH6bQ0O%2BIYc1meOYcHwhhUUAz6yk%2F6Q3uN0CexJ3zw3YeRuq0PJLfDrZccexjm8mum4hCAZF8pI03Z8h9I2wFkUWDAIwe3OitTcxXzKKkkVcNeg78NPLCYJ23gyqnYD%2FVOaPhNHDLxnb9jeaOn%2FTk4cG56DFEWcXkYDal4Rf0c8gL70Krb5gnNe6rBjCVuXHPpb8GIXIXpqtXJjOSFIkESEz%2FV3W8hPnYiZvzDCt%2B63BBjqkARx%2B0Rh5%2FsOw%2B2CoAcKG5r5s5HFgN5rK7KyZWW8rBiIeAH7ExNpSf%2B4sfJgzRUkLOmCBb0k51g38IEigxgOqxBgKdK6Bo7R01enpJYjqLcf3n55OdfDxKts0qLr628rXhzF9EYcgu4TAfFPdXRprcUiw7rYu1gFHL888fXrCb4fMz0PzfsPEdWsaJnjV2C8yIrSCqDol5NDXqQKiKkd%2FKlE2RLWJ&X-Amz-Signature=acbcd55d57f4502970092539e12cb1bee611f203ed415ef34d911d09e4044ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5EELL4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaEEEFXR%2FyriLsf3Ekbdf10cOGUjLg0CPEx2eFPEHmowIgYrVyINN3p1BcLRzscoV5VZCptHM8PiTZ8wn9X%2FgCyHsqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBL9Y%2FwQuB24TmmfmSrcAxbwKUGfUz%2BGOmoHAan0cOMndCeF3maGPsP04SdZEleyGqOghCTX2RYW6F9uue8Qu8GSeoqMQj2PSYX38a43l7meaVCFNvkboj5CLTRD6hoakqY1AKM%2FSL0%2FTIMBJgA%2BSyyfUL9OGBBR8p9tUr1RzRHbaCQt7iM2j0yHLTE3icgK1LW9nFCn7xqrmnsrbY5KHbr55%2FO9UAfOLYz4krRApCec7imY7SZFzZA2o%2B3efOsw2vRztIM7HjU89FnMZ7NS%2Fv3lPnzp1mPEIQu1b8p%2Fd2nkNXZ7%2F5MSr5z8XK8CiEUWKOjQM%2BR87Q545KouEXFeKEIht5BINrxSX8DMstmb3yL2OKmFvhaMprFRrclxhr7Dz7s6oO67Jdz%2FIT5TDLT3IKPksP%2FfLeLgacSemWuDV1arWXQeLJnU5FNb%2FCy3BEHFu2dkY%2FXLo8B3NqyOxSNOIpWsn4983vdy9V6kwZ8%2FnfFWhUPp8ZBrfVB2pHcjqJj0lzbuAU2ztqAOs5trmEsqzi1c9zpBqnZmfs8x%2Bf9y15UdWZ8SYFvjC6gVrB60G%2FD0rJ9XOB%2BpG5kFQWJvCY3Id6%2FEeLrsbn1ht6m5xXJev5dc7Ay%2BEXmvraQb61Qk%2B3JgVyAAcd6%2Fhu%2BZsSEuMMn6rcEGOqUBlnXJtqGysCOQgSG9%2FSMEwoHceonu3TL0N51VJ1kUmu2eAmov8QNn20bkiu8IplPq8GKznjhuJ%2BofGVNSUa0SzlhEl75NLv7Spgy3xmcZ2U4IJhZm4BelZuCyYHVw6Gzpl53tR5l3F58hSaKmDh4MzuxZgP1JfTjSix2Ff0tCN515UpehHp861mn4ntOAUW3llVGTlkdsJ1TfX9j8CMZyzAN092%2FV&X-Amz-Signature=b6d2d55183b4e280a9d1e55b744a1505efc416a749c620afb69731be43410d37&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTZYBWR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP2l04SmRY5C8sNqG7WfJPbOs2AGXMEUFvWxJPf5LkrgIhALSIAjOMj68MA1qOcz%2B5D4wiVaAjxWYrl8i6Mwffp%2FzSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziVBMx8aKLZW6Dcesq3ANdA2twPAt17V3LRqWp%2F5zP6LFoYXoZtGu8F%2BBZYq5OjzNogMAVb5OJvfcYeaoj8zpLt3OZt0xi3Qkvtwu4p79ioPHAVvLDGmvIzYQEIDoCEwkyVfxwyPa7gm2IdtYhEfrph6fBiqFDvdKRjl4dvEC6nKnfYXLOc8BzmP7U3qyrHpriikrBbr8BAreUEgfbPlIVgDye1oRYARqLO%2B6v9pSPey01nOqH8Bfn3AG3x%2BODPMD%2BVXSJaNmLjUofAN4AMuCEsbJZoNJ9504gFh%2B4J8uA8RHL3tXvuaek%2B40iKa5VBwlUaKA4eIqADnQPaTVhxpy1y7zPzct75I%2FlA5yVKdxp%2FbF0JSaGepm7wNw1WLxe774dQYX6kBPL1QpwSwVJFQo8Y9FqlOhVX%2Ba%2F54NyE1lp90yZIgbtzMj5vQP30pPHrPf5f0jq4Sku%2BuXMKpNzFZ%2BFC0jug%2F8jRL8D5dLL%2FJ%2FBS7aE177yA0ZZCj39RyT76Dft%2B5%2BiS%2BsqdgcJZb7KeNwrKJiQjyuo0T8Y6AjG48JRfvEk4pWMmlBr1NC1oJCpaulecNS22Ie2EXm3YYFTzb4rpExIY8AhjV1b8N1h48sczx%2BxxT3AEXJ6b115Evht1Dt0KW4jDXDSu7nP4jDY%2Bq3BBjqkARJ6CwlaD0qAHN1sa5qWx3lxAKG1PBhl3i3LahMqSfR8GXeV%2FqXCB2r9f2Yz7K3sbsG38cZ5FoUd6kgg4YNZHIymLnkWwUscWp4p6WkxcpuymQtfFRqTX8UIHwwUbWS8OZH4vqlwshISRGkiP%2FyGTAxlBsQzhzw1Lu9XbyOEPRrtsomcVy%2BZkQX32OIZhujEo42uzNYdxXLAzcx96yIbJg9OID%2FJ&X-Amz-Signature=0bea89c0b281bbbda64178514f2d5fe164b0d89800a78f95200c68a112eb0a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ4HBPWT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZTur5Ie013%2BJrS05sknTlTg1HqOZskis2kZgdZ%2FHLbwIhAIDSL1QCpOT05CJic0OVrCq6rTLLAg8gCtompZebH0pfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdyfttJ0hDRinibNEq3APuJ7c%2F%2BEmDMtRe%2FTkSjQDGdrUHXpkn1bNyNNIoZd5%2BoMAbCSSnMj2bKR53gfnwAkmxpeiYNh4TV12%2FdLqyQUGzZxu0TTBGwuE91R1O1xCQax5PSGKbg5HzbRDfRC0Ok5u92L8xAiBbKZ00SFwe%2BS3JtJQvjScKKz7sFngnvl8XIrUyknAvDs5tOaOISpCKXn%2Bfi0VHTcadQg7B8wxjkIUB7sQSjLkmbadhkEi0LjTaPzMoYwpqM%2FDQHmeeKj15BCCJjvX4ehczvB%2Bzb2ltPw8TKJpwf7CwAYF6TCamNn6oEjNB6Dv4AIwEiI%2B30ObxYKh6fe0bZAAbjX%2BK5UYXat0UsN5nfuNLrWD4qk%2FBTk9vJltgql9XVvltEF6qzwsJIFul%2B6rxc2Uooz%2FQP%2FRBF8WOMH6bQ0O%2BIYc1meOYcHwhhUUAz6yk%2F6Q3uN0CexJ3zw3YeRuq0PJLfDrZccexjm8mum4hCAZF8pI03Z8h9I2wFkUWDAIwe3OitTcxXzKKkkVcNeg78NPLCYJ23gyqnYD%2FVOaPhNHDLxnb9jeaOn%2FTk4cG56DFEWcXkYDal4Rf0c8gL70Krb5gnNe6rBjCVuXHPpb8GIXIXpqtXJjOSFIkESEz%2FV3W8hPnYiZvzDCt%2B63BBjqkARx%2B0Rh5%2FsOw%2B2CoAcKG5r5s5HFgN5rK7KyZWW8rBiIeAH7ExNpSf%2B4sfJgzRUkLOmCBb0k51g38IEigxgOqxBgKdK6Bo7R01enpJYjqLcf3n55OdfDxKts0qLr628rXhzF9EYcgu4TAfFPdXRprcUiw7rYu1gFHL888fXrCb4fMz0PzfsPEdWsaJnjV2C8yIrSCqDol5NDXqQKiKkd%2FKlE2RLWJ&X-Amz-Signature=5d7317d0e3f30b106fd353bb86fa5635972dcc7a94fc8273c50da603faefbd71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
