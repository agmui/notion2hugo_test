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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCS2QRP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLV%2BdAtFWh6Qz9cCsQn2UuO9ElDf8kMKFCsOf%2BBynEAQIgcoDJmSJgmf7cnF3UX9Cf9OTGJiZ4R6vavs7bSZlKR6AqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLjSsdeVLv6MXXbqCrcA8vD7poQX%2BEJAGUPq1OjlC1HUu8lkoApQvjSRRJPrHZT6SOuf7v4xXNF2t6%2BcyPAB6fqwqBkRnby4KgZPTVJxV4%2FjHZlk9c158cRkHG8F69DHR73HtLPdah8SIG7VLhXI7oPVpkyGkrOuglGJcBI5XmonXdi8lE%2Bn9RoBaS06EtLmHiBtQ1DXEmwDcaQyaDfkqTdV%2F0nkkEMqA8Af19ssszOGJhvin9msPiku1BVaZPdswwf4fnas7w8kg2j2ZZ3IQcHF0BeANUwQn7kwnR0ZJy5Ss%2FKpms2SqEErpmQdeKjvRM48kpDONtmUlSDoyYMSV0LqIwf6wYHkKBDoeEJ1oD9gFFz0uZyd9xIRwWeINTu6dbCq6dUYzzXTa63adSiAJbI5HOdk4qzJ4uws7%2FtOG9pvP%2BO3WHcytJYkAOPrP60oWNaJzDCALuD7jUivlwoY7E6By%2BoviUz9AqJiRj8C0YCpVojUxM3DmvzkVUN4WLQXd%2F1cqZ8zj77wKD3OXiVMKs7aZen55OP%2BRcX0%2FmaK%2Bu0ooC%2FAdjXJH2J%2BEC5mG98XDQet2KgOlkDhwYqnuErcNlXz%2F8q5W4vuHskgFWk0WATvasVFGHZmh4c2sItoVBoxd%2BDyK8jey9dYgG3MIernr0GOqUBcspUi8pdbDjbd86DY0DwyuYqHIkrECEZGBOdezXiejB6wKP6a4ZYbceJBoGRZPw0ulOb6ayrRBouZ66tvYNrgPZG8nLilgyr8k7OKvHK18w7BquK3yKbufPed4C7f64qvrA2pwaa3b0b%2BLGPO4fJg92WAH%2BPhactKrwVFWLBj3UyOJBp6FISkDbYrAPFG%2B9kEfXa%2Foga1zZAwKnZLWU0gMVyZzfk&X-Amz-Signature=5ad9768fc64a7640325dac6144218fb614ac688ee3119bb22ece307c556e8fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCS2QRP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLV%2BdAtFWh6Qz9cCsQn2UuO9ElDf8kMKFCsOf%2BBynEAQIgcoDJmSJgmf7cnF3UX9Cf9OTGJiZ4R6vavs7bSZlKR6AqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLjSsdeVLv6MXXbqCrcA8vD7poQX%2BEJAGUPq1OjlC1HUu8lkoApQvjSRRJPrHZT6SOuf7v4xXNF2t6%2BcyPAB6fqwqBkRnby4KgZPTVJxV4%2FjHZlk9c158cRkHG8F69DHR73HtLPdah8SIG7VLhXI7oPVpkyGkrOuglGJcBI5XmonXdi8lE%2Bn9RoBaS06EtLmHiBtQ1DXEmwDcaQyaDfkqTdV%2F0nkkEMqA8Af19ssszOGJhvin9msPiku1BVaZPdswwf4fnas7w8kg2j2ZZ3IQcHF0BeANUwQn7kwnR0ZJy5Ss%2FKpms2SqEErpmQdeKjvRM48kpDONtmUlSDoyYMSV0LqIwf6wYHkKBDoeEJ1oD9gFFz0uZyd9xIRwWeINTu6dbCq6dUYzzXTa63adSiAJbI5HOdk4qzJ4uws7%2FtOG9pvP%2BO3WHcytJYkAOPrP60oWNaJzDCALuD7jUivlwoY7E6By%2BoviUz9AqJiRj8C0YCpVojUxM3DmvzkVUN4WLQXd%2F1cqZ8zj77wKD3OXiVMKs7aZen55OP%2BRcX0%2FmaK%2Bu0ooC%2FAdjXJH2J%2BEC5mG98XDQet2KgOlkDhwYqnuErcNlXz%2F8q5W4vuHskgFWk0WATvasVFGHZmh4c2sItoVBoxd%2BDyK8jey9dYgG3MIernr0GOqUBcspUi8pdbDjbd86DY0DwyuYqHIkrECEZGBOdezXiejB6wKP6a4ZYbceJBoGRZPw0ulOb6ayrRBouZ66tvYNrgPZG8nLilgyr8k7OKvHK18w7BquK3yKbufPed4C7f64qvrA2pwaa3b0b%2BLGPO4fJg92WAH%2BPhactKrwVFWLBj3UyOJBp6FISkDbYrAPFG%2B9kEfXa%2Foga1zZAwKnZLWU0gMVyZzfk&X-Amz-Signature=c6a9f12a55d912c84771f1bfa21d3507da95bd3354a0f9c89aad189a408adf4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664XQQAV5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHYvhWMiB1QfCjNqTXBeaHoEVDWdB%2Bb4zY4c2%2FHtoHB0AiAbQne%2B2bKSeQkFQUE8O4kFkaZ6%2BW6MYX5bVJ44N0UNriqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYDCSh71mzJM3%2BaTCKtwDPW5cUSjJAqMVXfTqZplT2OeRTKt3dwP5mis6qVdGPyDGi6GJwFpDUSF2QiDM%2BLO8geAevMt1ddjWE%2BezzPafMoCkCtYpBSLje7GKo8M0WiOCk3Kz%2FPE8J%2FWEx6ZUIf3c00rCwQ4O5LzcQp6NYVAfUbuUPOr1rNZ63Pp%2FsYLXbhVpE1vz8dwu7vTSscizS6h7WIWpnfMrVkT4hZfHaLLnrhvv1opQrFM1jAs1RV1LjwPTXgqQNmarMK3csLjMQJcGC5XMvrZSMo61PPS6SS80rof3Zp7OLVxbFNKKrBofV%2Fne6I4Xc57AsYthrW254H1Jzt%2BGv3SocE%2FtChg5Tj%2BRN9FMhSbZ26k4ZQakB53kw0HkbXG6Jje2Ok5CIaDa8ej6E%2BZ2pFHOVibHvWAMcoZ9lMY%2FoR9nYiKvbYjriYzcz2fOo%2FnIisZpyKIsT9dzx8r5DEF4HBAWAdw594P5s2X5xmMX6FpGGe0SNWAz%2FBOLV7nSraI1tH%2F5UdLfYG0XWNrxOW6w7BMytkDO63omFmMmDvpMk4U%2FINXVrXjdpLfE01Q5Pz%2BtlUgQ1zHTt9CeCB4SLfV26rbp9cHILt%2B2%2BiXcl2tKiNNTvLqiHN8943EFGkbN4QNMYomvcAY8zTUwxKqevQY6pgG6RjUj2GvP6roqAd%2BwYdDsDgHBcboTuGwgSURq8L%2Bo04l1x4Rh5lRnIeVtKOxdaADvXGJ%2FxgWNmuljSVXCjz9wuM%2B3KPUT9engjBHl7xSh8AvQ%2Fr634SDreazH%2FxhmwRO9RYjBn7PrnJyEsEB6t7a2VKacUN2u0UCaID86Dle6T4ITNDSawt6ac62EUoPmkA5cMHwiPKDTphC%2BV2SPTJDLtDUbmELo&X-Amz-Signature=ef65b26f5f6814262788f830a6a96cb5a276b6574e1cf78da7ea5cd32bc723d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZALQ7RI7%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDrVGr5uWJah%2BpfJF5Ey6S7fQPQb5EWo5ZjLoj5Iz0IVQIhAL95rGNGvKiLpMK9eS6QkUd5IPKt08%2BWqw%2BJTozECSKJKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9JIxz2BuJqvILcW4q3APa%2BEBOVTwvG23laQoUEgJGVh9oEqOspHiv5m8JFWNIPTmZ%2F6vm1Q2hwBH55roltT1TP9YKAjKOwR2AYyrD4XYX%2F609IbN6YHAOhSTcj6L9%2F%2BFfThuNhaj8P43zN7lW8ZtNrERbe5jPKaSoLdx0GpzLF7H2z2YGn7vCXkAeC5%2F7c3oekikbSZheDmHDD5rL9TudQdP8kQd9G3x%2BS5LGtZqrXI1MEht5ArWV7S0THnyLLt7kHSHQePXRn78JsvG8%2BMPUitmx1UIZ3olR53EqqJRHEhTPe9q80eieN3rHfT5UxN5IF8eHh8mp8ypOwyZCXr%2FcT4dkNiJD0%2FgFvl2R5Jv5WQ9q3%2B9V9rbGKkasl7FjmbjXmFTO5%2BjCaC%2BJHADc7FmoFR%2BPO%2BoWrLe959rjN6Q8IxYU3en6f6Em7PAyhahx%2F3ivE2lMAqU3%2FsYr%2BtJLnc4JDoz0dtFbOSw6PDrVqoPetBd6UuPL6HMucH5B9zrgFkq8AqFCrnWzH%2BBkd3Ozb0z1SMtcPKLTlnngOGKvcsSbQ49QRRo53lLY3n48gPa0l4KOfvGB6SV%2FEYLkHeSpb21iS8%2FAYPi%2BFhFZPsYTRoRRf1L3BnvamySTOlWI1%2BYVg8oRYl0RQ5Exjr2uGjC4rJ69BjqkAfhkOGUiQmYw7tXkA42OVF40VZSxQTmkQLOc9fXZYEcMk%2BvgHLj6F8zF9YdwyMJeHNSmbkWtrSyTO%2BOdWfDgQA6zSkeFR1ph9lqqzUUtxj75FPbNQov6F7yg9WFW6ws1MjGy2ncSSJv5UNmbdXAHUzp4CreeI07dv3QOp6cKYmaPVSLRPAG1DZOGZA13LYYkPenONv7ek490M8qppKbwxUOIsBJx&X-Amz-Signature=f0f3c35b2f0fbe2b042672f8c0b709ac04cfa5d75274ebcdfcd11ab9b890d6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LCS2QRP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T180839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDLV%2BdAtFWh6Qz9cCsQn2UuO9ElDf8kMKFCsOf%2BBynEAQIgcoDJmSJgmf7cnF3UX9Cf9OTGJiZ4R6vavs7bSZlKR6AqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLjSsdeVLv6MXXbqCrcA8vD7poQX%2BEJAGUPq1OjlC1HUu8lkoApQvjSRRJPrHZT6SOuf7v4xXNF2t6%2BcyPAB6fqwqBkRnby4KgZPTVJxV4%2FjHZlk9c158cRkHG8F69DHR73HtLPdah8SIG7VLhXI7oPVpkyGkrOuglGJcBI5XmonXdi8lE%2Bn9RoBaS06EtLmHiBtQ1DXEmwDcaQyaDfkqTdV%2F0nkkEMqA8Af19ssszOGJhvin9msPiku1BVaZPdswwf4fnas7w8kg2j2ZZ3IQcHF0BeANUwQn7kwnR0ZJy5Ss%2FKpms2SqEErpmQdeKjvRM48kpDONtmUlSDoyYMSV0LqIwf6wYHkKBDoeEJ1oD9gFFz0uZyd9xIRwWeINTu6dbCq6dUYzzXTa63adSiAJbI5HOdk4qzJ4uws7%2FtOG9pvP%2BO3WHcytJYkAOPrP60oWNaJzDCALuD7jUivlwoY7E6By%2BoviUz9AqJiRj8C0YCpVojUxM3DmvzkVUN4WLQXd%2F1cqZ8zj77wKD3OXiVMKs7aZen55OP%2BRcX0%2FmaK%2Bu0ooC%2FAdjXJH2J%2BEC5mG98XDQet2KgOlkDhwYqnuErcNlXz%2F8q5W4vuHskgFWk0WATvasVFGHZmh4c2sItoVBoxd%2BDyK8jey9dYgG3MIernr0GOqUBcspUi8pdbDjbd86DY0DwyuYqHIkrECEZGBOdezXiejB6wKP6a4ZYbceJBoGRZPw0ulOb6ayrRBouZ66tvYNrgPZG8nLilgyr8k7OKvHK18w7BquK3yKbufPed4C7f64qvrA2pwaa3b0b%2BLGPO4fJg92WAH%2BPhactKrwVFWLBj3UyOJBp6FISkDbYrAPFG%2B9kEfXa%2Foga1zZAwKnZLWU0gMVyZzfk&X-Amz-Signature=1b3cc9f7d509896c43f89fe9d5575a06adf5bacf1b6ba2892aca17de3cc66d22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
