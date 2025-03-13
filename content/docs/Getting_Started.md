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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOMEKSV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt2optZhj4xFck9lqPjY7x4ZJSVTk14gpgBU4v%2FbOfsAiEAgzvLY%2F%2FBdCvgoZYqMNxmdMLE8%2BAb%2FouzrMrJUMxGZxsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXAfno4sGj59QIzGCrcA%2B%2FX1alCIWcHJmH69G27vQRQJXnOL7BHbK1lFvkfM5RYl02V4Owl5KaUwBqAiWaSy5OIwrnDRSnWj6yfi8zmOphJlBgHB2p6b36%2F8QsaFF4ksmPcIs9EwiHZ2VR9igXXqMgzdfWcV04pOjYnoCO3pENpIGFHTV9z6nQuQ7hc8wyTTxZZLjmbfdg42fVTvZyRAY%2FDDN0r3VbMo6tqS5%2F9I8May1fSIMRipx90TmA9YWE%2FsG9bix9QqbIb0SW5vUl%2B%2FpP8orKG%2FGLdTNRQnL%2BZp8C1T%2FQtq7dK2jR%2BzsrGJmiS6tI0XaJEmW9s0Re7CDtSPhnkMtybwGnUMOiydVOxiIWJvuXjIBxwKoQSgbvBAu7Ys4gayxqmeCLtbHULJ0Z3SOyc2mtkWu%2FeBEaIrpkM2O0M3J3DMiyb4JVWGPcirbbolyYsbrFfSq9YfaOaVhy1YKgd1HrCwJQi2HpQcrxaLQeioA5xBBKzzNPAkDE30KXfnF2g0A82k32fIquwCgJFPEPQDBe0EpOYxs5O2PA8vkIh9jLIGqM5iPcvr4nygM3BuDLzEQ9D2BkXe%2BFCCo8wkeTgEcuZLWWN%2FyNijbc0AtZSs%2BmYChjNugEwBaU9vACr4lZhM91YqeLfKIagMP7kyb4GOqUBpOw6D3YdhLxTkn0jBPwbGHJ%2FcyEqlZ4aDJevD0rmw3SQzhvyE6egsHMkeLbyvShdG86%2F8%2BLtHCaDTx3vRsi40Wk4%2B1or57GGNWoHoFqs%2F0MqkSh6%2B8kc0eHq%2F9zYgWEGQGJH6VeVqA1NxIC4vtFcGrYrZ4kbC3hTccWFxrOreiTlfB2eQm36EvDjm6Sy9EVIAYvPsNjf42NrzFlcGwUdLq5Yr%2FZw&X-Amz-Signature=0f83cbb9d64b5dd7f7c4a742aa338f5f211ea984f1e9a54ca52fe2c00a788466&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOMEKSV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt2optZhj4xFck9lqPjY7x4ZJSVTk14gpgBU4v%2FbOfsAiEAgzvLY%2F%2FBdCvgoZYqMNxmdMLE8%2BAb%2FouzrMrJUMxGZxsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXAfno4sGj59QIzGCrcA%2B%2FX1alCIWcHJmH69G27vQRQJXnOL7BHbK1lFvkfM5RYl02V4Owl5KaUwBqAiWaSy5OIwrnDRSnWj6yfi8zmOphJlBgHB2p6b36%2F8QsaFF4ksmPcIs9EwiHZ2VR9igXXqMgzdfWcV04pOjYnoCO3pENpIGFHTV9z6nQuQ7hc8wyTTxZZLjmbfdg42fVTvZyRAY%2FDDN0r3VbMo6tqS5%2F9I8May1fSIMRipx90TmA9YWE%2FsG9bix9QqbIb0SW5vUl%2B%2FpP8orKG%2FGLdTNRQnL%2BZp8C1T%2FQtq7dK2jR%2BzsrGJmiS6tI0XaJEmW9s0Re7CDtSPhnkMtybwGnUMOiydVOxiIWJvuXjIBxwKoQSgbvBAu7Ys4gayxqmeCLtbHULJ0Z3SOyc2mtkWu%2FeBEaIrpkM2O0M3J3DMiyb4JVWGPcirbbolyYsbrFfSq9YfaOaVhy1YKgd1HrCwJQi2HpQcrxaLQeioA5xBBKzzNPAkDE30KXfnF2g0A82k32fIquwCgJFPEPQDBe0EpOYxs5O2PA8vkIh9jLIGqM5iPcvr4nygM3BuDLzEQ9D2BkXe%2BFCCo8wkeTgEcuZLWWN%2FyNijbc0AtZSs%2BmYChjNugEwBaU9vACr4lZhM91YqeLfKIagMP7kyb4GOqUBpOw6D3YdhLxTkn0jBPwbGHJ%2FcyEqlZ4aDJevD0rmw3SQzhvyE6egsHMkeLbyvShdG86%2F8%2BLtHCaDTx3vRsi40Wk4%2B1or57GGNWoHoFqs%2F0MqkSh6%2B8kc0eHq%2F9zYgWEGQGJH6VeVqA1NxIC4vtFcGrYrZ4kbC3hTccWFxrOreiTlfB2eQm36EvDjm6Sy9EVIAYvPsNjf42NrzFlcGwUdLq5Yr%2FZw&X-Amz-Signature=876b8ad02c0a8485046806ed51206a3f9610191217db58a0c7a18dfb9bf8950c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3VH5CC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYGnVFM%2Bfn49kj8BCLye3E7dVhP0cGbWOBbUYYwo3zwAiBxLJDb7%2FVvTYUkQMVv7Zl%2FAyMyHR4ChZBOKcxxGLTFhSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNlD9l1WfUiKDaOKkKtwD0wlIKE7AKhk7gnRwHt3cegGTNU%2BhfJSRPYLqTKYWdD0RoOJOxxXrXXnVIOyqytCmY7V0uKcTXBBOWIYSKehLZsv8BJfEsrr%2BFz27Vm5taZwq3b%2F5hnVqrCzvP5uBTtXDeMQ59O2l5j%2Faz7AXjuLzGX6yFVVxFDRByU4JRouXWIOeLtLJCPWvFxIWF5HWCsgL4GTY7H%2B8Iq4ADAYapsIJKnhykknu9U6Wp2itxTJD3vXLKTHRp9lEqviNM9G3pZ4SxCs5LgmHPJhB4dGLltK8d1N3LBZ1P3ou5WtxGJ4V9eK3ahln6ytq5HEPrNW1kA8Mbv5wtjladWObtTdv4poFaYZySMnEZVszP6zzMrw9A2X10crmSQkdWSC4BH%2BQ%2B5Jg3cRZq%2B1FJmzEo1sCidtexmw15wsszn%2FFliTSWOuji1jzTjzuLXozm5eFfoD8027ZJry9lhZayd22IkXZsA0Rj0Hkq7gUi4d4v8GG%2BvpTnY8oT6P05%2FGbTlEx24nkuYkLe1xfKZDenFhhZz6DZkRnNm3tQwDNPcQAulRSjb1AzaRQCTvUZbBbbuyNa%2FhdFRbYxTbNm494PLid1OowjPHJ3De%2BTufy1xs297xeaNFOSYeZ4HUTeNnJdJGqZRcwo%2BXJvgY6pgGBwfBI2PNQTWRAM1OdeKTYjdUJNwCExKI9dUwXDwDWWqNxR2WBYzaxB3NOVRqslHbuqiSOgbE2DjVd%2F2Jh7BStZANuLpGJ18sjqmyDuebAeZ%2BQckyqGe04%2FnUyn%2FGdG%2FYbzc61xpyV1jD2siWjTj%2Fh%2F7kIvzqN%2BtmV2%2FlI1yYsXlg7EYGm5xQvLx5KR%2FvLvOHsP7NXcXWpRXVqokkrf8dnmVpHxMhb&X-Amz-Signature=0b98c788ce7e790dcdcb151dc7538e816b97e08c781fbd5f1d58a182fbfadff2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655QUZPQ5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeA1CIM2kiZdg9WR62g8oIdySq0CARQ80RCaoFSNzjsAiAuOUN5KVGWaomWZF%2F6n%2ByXmn9IMa46p0LH52sJ8aefESqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFYRubxD%2BPsPs3W08KtwDh1GMTEG%2BARNlfetBeN49qz69Vx8vc7E%2BDaJiyR%2FbKALmFjUK%2FyMZlx0cLPqNYWG9Rb1AHwZV7hrW%2Ftlchipk9FCBcLGbHX1uslKfemymBSG2qjkKjH2teTLO1dMtWmH6bLurw4c66Iam%2F%2Bm8A9pigixpNLwa9eskc3TtZUE6auGIYdB2TgYywz5qy56LiRmZEX0WnGKaV%2Bn55pJ9M%2BeZ80M9HHfrasWXo8kE9NzZY1DhSx4OyujBcPWseCJGoeegRjsKJv0Z5qsFKNEdTfLpfvZstHEOsGg2aOLHhhGPKr7x2uMX%2FIjY1b7lP00Sq6TeEBRPPyVpGo1QWIDQAUSxqjfKahFsQZLHEF0rENbnMfkdG6OHSp1YFztWrsyPZ0wP%2FaH1KA9kiDxaYB92%2FcNmDunI6Yz4VR8UL48qjSGb7NF44XLTNJ5nUSE769eepZjW3VUwitD4g7LIbIwWc5aimQ5Bh8hCmeAwSplqVN6GcfamOOGcv5%2Btg6UL40uVT7KvGKgarda3%2BNHonYj318VsCNtKJchph5STbO5xnDut1mJx8JETQjKDGrguXqWD7ej3ubO3Ey16q1vSpbjbtTbk0Mf06Zrut0IZPTemMuPme1gqLdVqUmfw%2FA9J85Ewj%2BXJvgY6pgE6%2Bj1xvJxuZEYF5%2FH92l9cWCMTS3SbHd5KHc9HfklmcplYYUx35VdBO9Rb2ysZ8NvkGurC3WJCP26CcsuItQWrpk9vZL9AZBC3vlBYpCn%2BOC3T8hjQMTNTDHrZCGwQeJU5ACNMTZJ3TdRlGC%2BeaGEvKLTlTPeuhvx0C694vnICIzh1t3aroILBheLznNSYVaYgeMpyyBQORi%2BuWl0Va6LuF4iCvug7&X-Amz-Signature=8b6afdb98e515966537c7f7cf3e0f82d082d5aca0b1dbbf1cdc4476e63d8d752&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOMEKSV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEt2optZhj4xFck9lqPjY7x4ZJSVTk14gpgBU4v%2FbOfsAiEAgzvLY%2F%2FBdCvgoZYqMNxmdMLE8%2BAb%2FouzrMrJUMxGZxsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXAfno4sGj59QIzGCrcA%2B%2FX1alCIWcHJmH69G27vQRQJXnOL7BHbK1lFvkfM5RYl02V4Owl5KaUwBqAiWaSy5OIwrnDRSnWj6yfi8zmOphJlBgHB2p6b36%2F8QsaFF4ksmPcIs9EwiHZ2VR9igXXqMgzdfWcV04pOjYnoCO3pENpIGFHTV9z6nQuQ7hc8wyTTxZZLjmbfdg42fVTvZyRAY%2FDDN0r3VbMo6tqS5%2F9I8May1fSIMRipx90TmA9YWE%2FsG9bix9QqbIb0SW5vUl%2B%2FpP8orKG%2FGLdTNRQnL%2BZp8C1T%2FQtq7dK2jR%2BzsrGJmiS6tI0XaJEmW9s0Re7CDtSPhnkMtybwGnUMOiydVOxiIWJvuXjIBxwKoQSgbvBAu7Ys4gayxqmeCLtbHULJ0Z3SOyc2mtkWu%2FeBEaIrpkM2O0M3J3DMiyb4JVWGPcirbbolyYsbrFfSq9YfaOaVhy1YKgd1HrCwJQi2HpQcrxaLQeioA5xBBKzzNPAkDE30KXfnF2g0A82k32fIquwCgJFPEPQDBe0EpOYxs5O2PA8vkIh9jLIGqM5iPcvr4nygM3BuDLzEQ9D2BkXe%2BFCCo8wkeTgEcuZLWWN%2FyNijbc0AtZSs%2BmYChjNugEwBaU9vACr4lZhM91YqeLfKIagMP7kyb4GOqUBpOw6D3YdhLxTkn0jBPwbGHJ%2FcyEqlZ4aDJevD0rmw3SQzhvyE6egsHMkeLbyvShdG86%2F8%2BLtHCaDTx3vRsi40Wk4%2B1or57GGNWoHoFqs%2F0MqkSh6%2B8kc0eHq%2F9zYgWEGQGJH6VeVqA1NxIC4vtFcGrYrZ4kbC3hTccWFxrOreiTlfB2eQm36EvDjm6Sy9EVIAYvPsNjf42NrzFlcGwUdLq5Yr%2FZw&X-Amz-Signature=cdbc88c61648c51d42f9c8f4c234260a38e2c2f19e07f882a0123224303c81de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
