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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DCEFGP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDKJVTP%2BPkRc9IMh5yU8nJXAxgXfabJmG2fIWlYJZurXAiEAyAkVoRUotcZQAPRzB9F97owM%2BVIUil%2BZk6eqTgjndAoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAr6CWT%2FYRA0KGWNSrcA5Ql%2BeiY0ZuRsjPl71Zxx9nB7n5Wo%2F9uwmNwLI6%2F9a7cvMX0QgDObC0j0DhkwIFedsQfc5pjpuGkr1hylklfbXfFU6r%2Fw30vSquMHvZ6Sz9jzwc44jsY5v%2BkdG1LeGXlE3Gk8W%2BKa4ztWYTgFbNSGQEpoq3GPFF52XYgk%2BM5VvIFi3UGFVbZgot%2BDjd7Q9vE%2FkjAggtarQ57y5dJOiFx6JSxCcHVN6EbGjMwdsuCS11xdL3atQPrMQK0Ey%2BCIs4mzhBOsWeKm5GXcHtu7Z9063WQH%2F6lIhBc8TWJGJjOpVMWtsBaeD9FroPCTD50tD16iR0AWYZKCThQxv2E6FLOSDM7YDfzfppVyfS6I59lSNOWJewrBStpjUk3v8tfbCRMvVjv9o31LuCMkVwGtT6TPiQsI2h4m1rPPkRYzyxuQc2pLVUF90DQwZfyVV4LK%2FfbSlzaTTN%2BKuL2mvVrkjntN6Mo1rO9S2Z8LR6DZfTcwlwtIYtxlZZ4Z0S%2FancxDyWayXTbhMo41TnIa0baQpa6v6f9uEGcoM1LFTM9Vr2E3G9hY6pARnCD7atsrVAj1Y1yND3V%2B6SqRX%2BFrPEAUC%2FysmFLm8XBp6q13bhpaE%2BlncvWpER3FZQvZUr%2Fh2mKMJ3jz8AGOqUBsh2LVUxq9%2F4aoflYtPkDQoFsaDxhxhCabiJ%2F%2FXGcmBeCmcoOmMshszAhBToVEVsZIr1GIaKUKm80C8irfVNhkyd0Ljox8AyZgZjTjCJhVy6un8G194qKEL%2B7NX0jTjZiJ45f2rpK8l9hFg54UOS%2Big%2FBI9G6Uz9yHLA3lV%2F4z8aOXestmL6rvO%2Bk0g9duNd4vOrYbofT3vGjwSqXqYk0g1sPJ2Fm&X-Amz-Signature=25640307ebf843936f18f1368ed04b91eb8b14eca7e3badbb8892dfc695705ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DCEFGP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDKJVTP%2BPkRc9IMh5yU8nJXAxgXfabJmG2fIWlYJZurXAiEAyAkVoRUotcZQAPRzB9F97owM%2BVIUil%2BZk6eqTgjndAoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAr6CWT%2FYRA0KGWNSrcA5Ql%2BeiY0ZuRsjPl71Zxx9nB7n5Wo%2F9uwmNwLI6%2F9a7cvMX0QgDObC0j0DhkwIFedsQfc5pjpuGkr1hylklfbXfFU6r%2Fw30vSquMHvZ6Sz9jzwc44jsY5v%2BkdG1LeGXlE3Gk8W%2BKa4ztWYTgFbNSGQEpoq3GPFF52XYgk%2BM5VvIFi3UGFVbZgot%2BDjd7Q9vE%2FkjAggtarQ57y5dJOiFx6JSxCcHVN6EbGjMwdsuCS11xdL3atQPrMQK0Ey%2BCIs4mzhBOsWeKm5GXcHtu7Z9063WQH%2F6lIhBc8TWJGJjOpVMWtsBaeD9FroPCTD50tD16iR0AWYZKCThQxv2E6FLOSDM7YDfzfppVyfS6I59lSNOWJewrBStpjUk3v8tfbCRMvVjv9o31LuCMkVwGtT6TPiQsI2h4m1rPPkRYzyxuQc2pLVUF90DQwZfyVV4LK%2FfbSlzaTTN%2BKuL2mvVrkjntN6Mo1rO9S2Z8LR6DZfTcwlwtIYtxlZZ4Z0S%2FancxDyWayXTbhMo41TnIa0baQpa6v6f9uEGcoM1LFTM9Vr2E3G9hY6pARnCD7atsrVAj1Y1yND3V%2B6SqRX%2BFrPEAUC%2FysmFLm8XBp6q13bhpaE%2BlncvWpER3FZQvZUr%2Fh2mKMJ3jz8AGOqUBsh2LVUxq9%2F4aoflYtPkDQoFsaDxhxhCabiJ%2F%2FXGcmBeCmcoOmMshszAhBToVEVsZIr1GIaKUKm80C8irfVNhkyd0Ljox8AyZgZjTjCJhVy6un8G194qKEL%2B7NX0jTjZiJ45f2rpK8l9hFg54UOS%2Big%2FBI9G6Uz9yHLA3lV%2F4z8aOXestmL6rvO%2Bk0g9duNd4vOrYbofT3vGjwSqXqYk0g1sPJ2Fm&X-Amz-Signature=25778a514d6af33c547200f56b20addc0d1410c936a15393e63db22524352763&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DCEFGP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDKJVTP%2BPkRc9IMh5yU8nJXAxgXfabJmG2fIWlYJZurXAiEAyAkVoRUotcZQAPRzB9F97owM%2BVIUil%2BZk6eqTgjndAoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAr6CWT%2FYRA0KGWNSrcA5Ql%2BeiY0ZuRsjPl71Zxx9nB7n5Wo%2F9uwmNwLI6%2F9a7cvMX0QgDObC0j0DhkwIFedsQfc5pjpuGkr1hylklfbXfFU6r%2Fw30vSquMHvZ6Sz9jzwc44jsY5v%2BkdG1LeGXlE3Gk8W%2BKa4ztWYTgFbNSGQEpoq3GPFF52XYgk%2BM5VvIFi3UGFVbZgot%2BDjd7Q9vE%2FkjAggtarQ57y5dJOiFx6JSxCcHVN6EbGjMwdsuCS11xdL3atQPrMQK0Ey%2BCIs4mzhBOsWeKm5GXcHtu7Z9063WQH%2F6lIhBc8TWJGJjOpVMWtsBaeD9FroPCTD50tD16iR0AWYZKCThQxv2E6FLOSDM7YDfzfppVyfS6I59lSNOWJewrBStpjUk3v8tfbCRMvVjv9o31LuCMkVwGtT6TPiQsI2h4m1rPPkRYzyxuQc2pLVUF90DQwZfyVV4LK%2FfbSlzaTTN%2BKuL2mvVrkjntN6Mo1rO9S2Z8LR6DZfTcwlwtIYtxlZZ4Z0S%2FancxDyWayXTbhMo41TnIa0baQpa6v6f9uEGcoM1LFTM9Vr2E3G9hY6pARnCD7atsrVAj1Y1yND3V%2B6SqRX%2BFrPEAUC%2FysmFLm8XBp6q13bhpaE%2BlncvWpER3FZQvZUr%2Fh2mKMJ3jz8AGOqUBsh2LVUxq9%2F4aoflYtPkDQoFsaDxhxhCabiJ%2F%2FXGcmBeCmcoOmMshszAhBToVEVsZIr1GIaKUKm80C8irfVNhkyd0Ljox8AyZgZjTjCJhVy6un8G194qKEL%2B7NX0jTjZiJ45f2rpK8l9hFg54UOS%2Big%2FBI9G6Uz9yHLA3lV%2F4z8aOXestmL6rvO%2Bk0g9duNd4vOrYbofT3vGjwSqXqYk0g1sPJ2Fm&X-Amz-Signature=33c67deecd51fc52f80a61e34dea6f3e385a4d9b674a824177cd3751ea2b52dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D7YWNL7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCz1E09EwEQMccOd4wFgFE45uEHW6vZTFwn5iQ6wJwauQIgAowTOQ3cUoSoLM48k92HY7vaoeAk%2BdOhvQqCmVbhpZwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvtHN2WpldWyDoZPSrcA%2Bm8mLXscf2RfOgtUDS5iMnFNeZrsGmgK7ox4bvR8Z6zDH%2Bp7H9AYNHGqnAl%2BeL79BkyJffdGck8jqX5A%2FIJAn4uRZgyoqeBlxAwOQPh1U6YNM4buc8NArz5KWikDg2mLj6kfgH4DcU5x5BTyHrqh8U2SSCuVHpjHbkctV4DX2Lwd%2BCGoZKYkvQh6W2VGZepMrr7cMzhixoJ%2B%2BpR7yfRisYAlXyp03fCZB8e1nO2WRKeBaurZrbEJXnJSdcQXNQcmaaXrNkBhYlmTq6EJ6Ylm5CqqKvJs6o6GqXBI8g%2Btm1XJ6VtynB2DAXPd1MohcIWoLqcd29hKq6Ge%2B6ReRQlII0lhQP8u4dyNaUgWTz7Pi9hs6A3hVvcWq9tlEB1%2Fwln0n8bDmLXC982oBtxXEnaBAb%2BiatQOQ9%2FhUK%2B9N3Zqw3kUbh8MdARogp4gc36W3p5KCXMl8EPmg2KsT7nYBgSAL1couAYsPfgd%2FIDT5zv4lnxWniGYndqw9BydQUquZu1cn%2FAO2BBPGB8fJqWjwC0p%2B2LmfsBsPL%2FrmabIf59egxw2z372OdLTSqc4Xx9jRR%2BMquyNHCID8GdPUUTr5t2Ga6kyjdEr53xJHULDM6VnD%2FA01r6yB3tggvaXo7hMILjz8AGOqUBPBc5TK8bZ8cfRPbnk4qI7sykECdIFp9Wc1qiO9ZtG%2BFqOkHw2NtrUEzNubnGN1WlXJr5GPEEEeJDFqD7R04RyDfr7KS%2FAACQh1Sn7SuBSFTUEDS7X%2Fh0kRiI8Ia1X6CBm3FhdBoiWDuuK%2BvEL0Jq8Bi3Vfq55EIDNqNG465aKZyNxuvImM%2BMrmfl9E6sB64gwlytaAB%2FMlgOegwmP2Vh%2F%2BxQqAeh&X-Amz-Signature=209e26ad7e7d8f4e45a4a7d981a289a25c658d52d5bb7ab4cf981a53cfecbf56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMDBZNF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCFLqT2f%2BHQmh5lhoR55k6aN%2Bcddp0hkEzvSjBS7ilzPwIgIPUI%2Bfa2pk3CJlUKPQAZHLYxhY4KtACD85WvTMnUFkMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCr5gXD7SRaiW7dfjCrcA%2BXWwtx98fExxuQbmSnn9067ZLRxOzQpTrt72Nuix261gsssooBtxxuFmBI2Sc5cBSU474U%2FVuIkQS356zukaopi0mnyM6WqcWq0LXQ8mJY29jLsdzEzugIwQ%2FSpX%2Bj9yfq63Mq8Mso9s9yTQhZW21m51YCZfKhCraRF4UjUkS66xmVbjYpV1vXfI9xKglGNBSDbBC%2FfRJDtZr%2FBaIY1egX0QfHVhlbt5AGyLhzY69eapjdkGWJxueIQLXria%2FzuTsPsZKlj2aondVGCifzrmWONaPqZZTh9NKgUp4t2014%2FIKgygN0ZWGbTdxIe9u8r0ejXfE3ADe0cpApdKti6K2uEGC6CPDFgA2bbF%2FiV%2BSJo9%2FmGwsFLKeLl09DRgRe0hFwRQB4mbhhGS7NdQcTCZ6NB1tOfGTRT2b9xLJixB4HieFl0lu7v5PfAd4n9o%2FOEd9SnV4IlNdAlpw%2FPyWfl6jNT64oEuLkH8EvS9fSRxO3UVilFlgZTqH%2FkSFX0q%2B%2BO6U2OpsGrq2Q2lrUK6%2FYbGOOAzQ5JjYHEJCySj2aBaRBiDGKqaTiOsbq8WI1BAeaTCC8gMruecMURkWvJoAH2ikSJu5iLMkilkmlkccTO4nmTN6NoZncrw93hDjU7MPLjz8AGOqUBbXwBr1jc0i1sVoZgc6g3Jgr1LpjrOcv9TeXrr%2B9M8neGU6xZLOUUfly8xz%2FLtxm6VXQ5BrXR%2Fbgcz008LUCz9O3G2HC4JFOvHS9bhbCLHqyKpHsPB2RBpuLh2HaPc5iypU%2FVF0Jj0av03EV0Zj357p%2FFKyiCe%2B6vBkGl0IDQTtnSdw%2FnI4OcVZh5qrfTCEYR%2FGFuUtzJh1D0nU4VA36qyUMrFjFa&X-Amz-Signature=5a2b777bc0d689146a96339fb60e5fef76d75e7dd4f785ad2228b8e433697e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4DCEFGP%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDKJVTP%2BPkRc9IMh5yU8nJXAxgXfabJmG2fIWlYJZurXAiEAyAkVoRUotcZQAPRzB9F97owM%2BVIUil%2BZk6eqTgjndAoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAr6CWT%2FYRA0KGWNSrcA5Ql%2BeiY0ZuRsjPl71Zxx9nB7n5Wo%2F9uwmNwLI6%2F9a7cvMX0QgDObC0j0DhkwIFedsQfc5pjpuGkr1hylklfbXfFU6r%2Fw30vSquMHvZ6Sz9jzwc44jsY5v%2BkdG1LeGXlE3Gk8W%2BKa4ztWYTgFbNSGQEpoq3GPFF52XYgk%2BM5VvIFi3UGFVbZgot%2BDjd7Q9vE%2FkjAggtarQ57y5dJOiFx6JSxCcHVN6EbGjMwdsuCS11xdL3atQPrMQK0Ey%2BCIs4mzhBOsWeKm5GXcHtu7Z9063WQH%2F6lIhBc8TWJGJjOpVMWtsBaeD9FroPCTD50tD16iR0AWYZKCThQxv2E6FLOSDM7YDfzfppVyfS6I59lSNOWJewrBStpjUk3v8tfbCRMvVjv9o31LuCMkVwGtT6TPiQsI2h4m1rPPkRYzyxuQc2pLVUF90DQwZfyVV4LK%2FfbSlzaTTN%2BKuL2mvVrkjntN6Mo1rO9S2Z8LR6DZfTcwlwtIYtxlZZ4Z0S%2FancxDyWayXTbhMo41TnIa0baQpa6v6f9uEGcoM1LFTM9Vr2E3G9hY6pARnCD7atsrVAj1Y1yND3V%2B6SqRX%2BFrPEAUC%2FysmFLm8XBp6q13bhpaE%2BlncvWpER3FZQvZUr%2Fh2mKMJ3jz8AGOqUBsh2LVUxq9%2F4aoflYtPkDQoFsaDxhxhCabiJ%2F%2FXGcmBeCmcoOmMshszAhBToVEVsZIr1GIaKUKm80C8irfVNhkyd0Ljox8AyZgZjTjCJhVy6un8G194qKEL%2B7NX0jTjZiJ45f2rpK8l9hFg54UOS%2Big%2FBI9G6Uz9yHLA3lV%2F4z8aOXestmL6rvO%2Bk0g9duNd4vOrYbofT3vGjwSqXqYk0g1sPJ2Fm&X-Amz-Signature=d55fd717e133ab544fc23b29d9d8b095ef5019edb391dd362a45569d07a38f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
