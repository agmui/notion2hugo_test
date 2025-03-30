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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FN5AKE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCGeK0i65z1yHFd8IGCJyypmV%2B%2BJlqiZiCAi%2Brng3kEAQIhAKnq1%2FDvQ5a91Qi%2B0a1yauiUsoUQy%2Fgmho0IDyWndXICKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc1MUTgX0FGdGxdSIq3AO1Oz304KeXnCfVezm8a4WIZau1d8ywgluFapy%2BPpd9g6CpUozKpEU%2F9hxZHJx%2FjnoFRxYpMTuphcNyvSlrz3jyIcOFq%2FlFSSV8H%2BOFbfHHq2bFRD8qqeOd0A6NShXYVbWlj7RdDmyTOxRVlrKjylqlzrZU7N16QzjLSXBq9w3PbZXjwb9cWHc9zz8mknpm5gdoz49Pow56aLQXvYTpui3sOQA3XuaMeoUf7WnXjhm%2FXGpiJPm0CnLNPs5gzSMNDxybjIno8B%2Bg0vmlexDQH8nVy6w5GqnvPWNWNTSnB10jDJ91%2FhOF944Pny2%2B3yuIH%2Bp6YyV7cFcbXktq%2FPP2ppn5rcnzjRSYThQcyFH5h1B6NVXGeF9rQeikMFLZyiJNusI7zOiCftnPFrhJwwrWbqypOMqUky1TStrZJ3gy1ak%2BJQhA%2F61ZxZ83V2xpiEeuiLfjTjDRL%2F1EgpNMTQoyuh6vs7RkPZ6QpByZhtLkU5dw815O4KzFetUG%2FWOHsndr8Ba49SZZG2N7CDt6So8znbdmfSZzjvBXKUohu1irwxnTd79nbtQ8f0yITfTmVzMJzM4VbHDOoUmVh%2BZe5g%2FEgVTu%2FRN4g%2B7HQ%2B%2B9tUKi09TVaoDim%2FG0SYNpqVUfQDCN6qK%2FBjqkAWk5jVH7xuRNpofIKi%2FXLZSJl15TYbXx0F01Pd3uPcUavjUO5ZRZVBW0oLlRoOjcArSLKSHr3k7o98vKQLKryqxMjKIyv%2FL9TEHFlOmxPGobJ5N%2BfRc5OuzVwJENsVvKJY8pV2tfd3%2BLGtHtNhzGKx6QR05X9Kox%2F7iGq8bKwjI3jP4vvMm0HRmCDJpeZeXAMFWEfE2T8OV5505zVCiequ26B7y%2B&X-Amz-Signature=f01f588307200133585cf0c0dac7e2b87b705737d1881b89adbbbe6bbe56713b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FN5AKE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCGeK0i65z1yHFd8IGCJyypmV%2B%2BJlqiZiCAi%2Brng3kEAQIhAKnq1%2FDvQ5a91Qi%2B0a1yauiUsoUQy%2Fgmho0IDyWndXICKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc1MUTgX0FGdGxdSIq3AO1Oz304KeXnCfVezm8a4WIZau1d8ywgluFapy%2BPpd9g6CpUozKpEU%2F9hxZHJx%2FjnoFRxYpMTuphcNyvSlrz3jyIcOFq%2FlFSSV8H%2BOFbfHHq2bFRD8qqeOd0A6NShXYVbWlj7RdDmyTOxRVlrKjylqlzrZU7N16QzjLSXBq9w3PbZXjwb9cWHc9zz8mknpm5gdoz49Pow56aLQXvYTpui3sOQA3XuaMeoUf7WnXjhm%2FXGpiJPm0CnLNPs5gzSMNDxybjIno8B%2Bg0vmlexDQH8nVy6w5GqnvPWNWNTSnB10jDJ91%2FhOF944Pny2%2B3yuIH%2Bp6YyV7cFcbXktq%2FPP2ppn5rcnzjRSYThQcyFH5h1B6NVXGeF9rQeikMFLZyiJNusI7zOiCftnPFrhJwwrWbqypOMqUky1TStrZJ3gy1ak%2BJQhA%2F61ZxZ83V2xpiEeuiLfjTjDRL%2F1EgpNMTQoyuh6vs7RkPZ6QpByZhtLkU5dw815O4KzFetUG%2FWOHsndr8Ba49SZZG2N7CDt6So8znbdmfSZzjvBXKUohu1irwxnTd79nbtQ8f0yITfTmVzMJzM4VbHDOoUmVh%2BZe5g%2FEgVTu%2FRN4g%2B7HQ%2B%2B9tUKi09TVaoDim%2FG0SYNpqVUfQDCN6qK%2FBjqkAWk5jVH7xuRNpofIKi%2FXLZSJl15TYbXx0F01Pd3uPcUavjUO5ZRZVBW0oLlRoOjcArSLKSHr3k7o98vKQLKryqxMjKIyv%2FL9TEHFlOmxPGobJ5N%2BfRc5OuzVwJENsVvKJY8pV2tfd3%2BLGtHtNhzGKx6QR05X9Kox%2F7iGq8bKwjI3jP4vvMm0HRmCDJpeZeXAMFWEfE2T8OV5505zVCiequ26B7y%2B&X-Amz-Signature=febd37ff449fcc18d22392e9db5aef53db003c045c9356c303ae240860402a60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XR7AGBA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEZ67Sv28uXLosUvNfto08x7NPLTpCul2hjdIN8idRg0AiBB0amfM7VDqS5aPfbb1CDPV8WQ7nQXfyzq%2FtMnsO9PXiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtxJyzjmAxiLcxs2jKtwD5jWPCiANn9RIYQ2K4OA4j%2FBIQA1Aq5Jj%2FJrArRpiTLcrVaicABfenJNDtd6Carp25jxv8gZUTeCql3yk%2BICw2qlo1ju9gU4qrOVdeobsj%2Fa97lt8BOb8OgiQTCV%2FizK9wLWrs%2FB4w2lh%2B3ZNP8juFPazxbTU80e4rBJsK1ujE4VbvyRRZT65OJTmTWk%2BpO31GZu7SuD4xpzkB4ulVZNJdK9vyQyg9aoQYXn0TEx%2BBCmariwOV87AQIs8Cj6nNG5UjFFVqVxaN2HDcbRZ%2Br9LcNz4X9SQ5JbTOM3LRqbulDjGB5y6Evmlr0g2yyXdWmXLJp7eoApU9Hqel3bwwEXvewAgmU1B8yMdim%2BcsNpHRFBGOnuD5ydvYnn3WFFkgkLEG7V%2BhRH8%2FmM9cVb%2BREVJmBwJimm5SX2ZB4yfjs9FuQPfoPUx5nefAB6ioyzYN6tXsEsZi7wC4T5m%2BX3hUxZuNZ9F0mlfWVzebpql4jC8qZy9KuSFGtXytudJ5FxcveHBMcujNokGxZMApCKyzzQWS9XuBCcnE6T8lFWtAHxIgPlnCnt0fxTubjgrlLJGXP0NjdcTzrNTCpn44XhdvIfY7x3fSgoBzqu1yUZK7upk2bjBLRE%2BL0lb4N547gkwoeqivwY6pgHFdEnrXb1hXSZnOAvcrR1ywJDt1qKHxH808lHVfTq8w39wOEDCGRR%2FUappuB%2FHd1OVi9z0JEpg4ZWSBWADyPVDeUwW%2FWGOg0eUo3MsEoZTHxIOXCjt7iiDRwYWFomjJnZ6QniQ4OTdL9dbO5pX7hxGjd3uCqwdowJza8%2BuVlofbaq1uIrKrQmpeCEImKyKX5RmzKTIP9czbP2TruBJv%2FYivllR7XyA&X-Amz-Signature=df8a0fab7e05f65d19e1c6cc28c302cd6c427d85e1f9912aa67e4afd61aeb670&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATW2KPT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDKz7zh9U4r6RWIVcv3%2BA9lQ%2BIGosBI%2B0504gFrrxvBWgIgHYH3yXDHyNWMFZPGbIcyNbNfzlgap8drhpAOpt3zs6QqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4cQX71GlnA659lTircA3bSareE2ChVJyFlTPdXzsgp8n9yqc6hxQFhwVAQeqXx6Py6SzMt1dwoWHAmjMOx2F3wNu9HNchVQoQAVYPdnGo26q5G4Ipc73%2FbQ6do1OKbrUsP4tuEb1s592uTRpTljaWSB2lWj3LlSXcSyhWc7PKsYVkhyu2%2B2mXqAQyQUJsRY%2FkGKdBsIH%2BQmx8zifd1ZUsdscXonjhbUPk%2Fx10RKe7OwFda1ceRGGcQoDUWIXYINb1xZS6FLO7hrk9aOS8u1gco1JXmilJUugTyrwaNJ2yHjajVLa1HKr4t%2F0PDWGwsSBftX0b63G9dngnAKePACwXrmN8TRkawk5%2BAJqi5wNHcffXY5NHHfQQ%2FjmyYLePf2och6tRFVsPm6wEc0X3nyx%2BJgL4p6KecXkRR8qKNKc6VjP2XG4PWMpeqlfMyFmlARUyaWLdKuxSzNRDGQWJRNmN12sf28jhV6sTnhd7aoOt0GJGBHS0k6z%2B0pFfiYM4VbR8ORdhJcRY%2FM6Hw%2FQ0sfOw7%2F7woS5klPHGhN1RfPGSegRcEabSBOdxwJ7dYUC3Qx1JzjDKb%2Fx62nea%2BMU2%2BsypkwAV5Vhq4HNeye9JVyvwvDXI0GF84qEuCLcQ9xiVVyO1RXB8jY8mUmQyDMJDqor8GOqUBDhlPRXpp3350aWzkxsHFVhERjdo4XbkgXJP34pxJdA5olK4AHj5NlE73rR6kce8%2FE7pW8sVtIlGmV9O5cPKRlOx9scoSCnDysV7a8SnAvHwSrDmF%2F18aTXhZbEL1enPdIkehADc8MKxxhDVldzDN6WHvoiyRnR6Q0RKJy7frlLOwSwlEWlGvT9Qdf6zW%2FyHyk64vlLa6GG%2B2nwrcqAY0lbm9R2Gl&X-Amz-Signature=8cb98cf423b57903f17dedf49b6f038481783053a567d81f52815735d1840928&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FN5AKE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCGeK0i65z1yHFd8IGCJyypmV%2B%2BJlqiZiCAi%2Brng3kEAQIhAKnq1%2FDvQ5a91Qi%2B0a1yauiUsoUQy%2Fgmho0IDyWndXICKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc1MUTgX0FGdGxdSIq3AO1Oz304KeXnCfVezm8a4WIZau1d8ywgluFapy%2BPpd9g6CpUozKpEU%2F9hxZHJx%2FjnoFRxYpMTuphcNyvSlrz3jyIcOFq%2FlFSSV8H%2BOFbfHHq2bFRD8qqeOd0A6NShXYVbWlj7RdDmyTOxRVlrKjylqlzrZU7N16QzjLSXBq9w3PbZXjwb9cWHc9zz8mknpm5gdoz49Pow56aLQXvYTpui3sOQA3XuaMeoUf7WnXjhm%2FXGpiJPm0CnLNPs5gzSMNDxybjIno8B%2Bg0vmlexDQH8nVy6w5GqnvPWNWNTSnB10jDJ91%2FhOF944Pny2%2B3yuIH%2Bp6YyV7cFcbXktq%2FPP2ppn5rcnzjRSYThQcyFH5h1B6NVXGeF9rQeikMFLZyiJNusI7zOiCftnPFrhJwwrWbqypOMqUky1TStrZJ3gy1ak%2BJQhA%2F61ZxZ83V2xpiEeuiLfjTjDRL%2F1EgpNMTQoyuh6vs7RkPZ6QpByZhtLkU5dw815O4KzFetUG%2FWOHsndr8Ba49SZZG2N7CDt6So8znbdmfSZzjvBXKUohu1irwxnTd79nbtQ8f0yITfTmVzMJzM4VbHDOoUmVh%2BZe5g%2FEgVTu%2FRN4g%2B7HQ%2B%2B9tUKi09TVaoDim%2FG0SYNpqVUfQDCN6qK%2FBjqkAWk5jVH7xuRNpofIKi%2FXLZSJl15TYbXx0F01Pd3uPcUavjUO5ZRZVBW0oLlRoOjcArSLKSHr3k7o98vKQLKryqxMjKIyv%2FL9TEHFlOmxPGobJ5N%2BfRc5OuzVwJENsVvKJY8pV2tfd3%2BLGtHtNhzGKx6QR05X9Kox%2F7iGq8bKwjI3jP4vvMm0HRmCDJpeZeXAMFWEfE2T8OV5505zVCiequ26B7y%2B&X-Amz-Signature=d83778c7f65e7b953b774e470e941e3776159cb010fdceff4f657c9e5df89245&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
