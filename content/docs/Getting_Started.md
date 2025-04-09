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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DX6FPU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDFjnkIodNwFMg2d1jjEJptPYrujjWdujNtQKAW2hsWoAiEA%2FQ%2BXhRiEYyl4j51gX1qJ1AWDDMaNteFXlvudq2XsI7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN30Yx6u0mxRtsJhSrcAyVji2X8Ds8Hej6acor6%2FK08xnTxh6jri%2BdwCwILSu1d5QE9WFd%2Bsjg1eKf6YXaLz0L0t3BGoNOdidbQKnhDvzoMkhKc1ahrjj55JX212QxZu8xia%2FVI5J7Kn35gDekGTxa5mWLJViKpitYxM4Z%2FaNTsnInsv%2F%2Bb6GCC%2FU%2F9u3Ng2lAiEIQ96dSr94epGAt3ndsXwVEuH%2FmUDQvFkoAo%2Bpd9pSbA%2BJ8T%2FUwwlc96S85GrbnYCT8DIYlQoq9Sbf69zkoaaU%2BUZWkqJF7EzPsIoAIT%2FTQIX2J6Nl03Dk82bPBOu3k3SZaG6r8ihP6DSc5AWyc4iYit4wKspTi26HArtjTO7oO9gpRa0mMUanEbGGYjuNOia5z1rAYMzwdRCWopca74nKPZkPLjY1k8OonrmQ2w7FIXjXuXVDm83l8E2GHoGIvwzJ9EAnmiMcmpNfbMOo%2Bww3DonxEoZueBl0KYpb6G9K0PrxjT%2Fc6RrfaNI5utsxJmep9KERO6Irw2PRuNu2hpV8WL5mpRhqcXakVU8lOG1wVPVF5cFQDFL4ARRBSN%2FUJBrhLk6cpYgNUc4r3HuJngoCJAB63Cq%2BBgcn8W0T9AdGzEoKX%2Ftpz3L0pSxudCpJpqmkaZDD1WJ55VMLjK2L8GOqUBkNIfEanTPLUU1fgKmb728zOQpaFhJmleeg5ZY%2FAgJ3%2FW60CshOvSWA3FPDU8KICkfeOmyp7xp9e1qQ1H8ZHBornMCxuxbqSDz2sTPd1Q3vRIdaep3Y5yo%2FoWQQFvj9K5wG4d%2FAm7jAd0HcnWhSm0A%2BrDjZjGYWY4qd3JjAb9km5jKsMO3%2Bq%2FGxpGpw8RS%2BdMZnDJLpjZe0L5FprvVds0qaWb2Pry&X-Amz-Signature=23fe28fb74f2f7fa6d93946ef033563cc964f536b46dad20e5b92c491f2588f4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DX6FPU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDFjnkIodNwFMg2d1jjEJptPYrujjWdujNtQKAW2hsWoAiEA%2FQ%2BXhRiEYyl4j51gX1qJ1AWDDMaNteFXlvudq2XsI7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN30Yx6u0mxRtsJhSrcAyVji2X8Ds8Hej6acor6%2FK08xnTxh6jri%2BdwCwILSu1d5QE9WFd%2Bsjg1eKf6YXaLz0L0t3BGoNOdidbQKnhDvzoMkhKc1ahrjj55JX212QxZu8xia%2FVI5J7Kn35gDekGTxa5mWLJViKpitYxM4Z%2FaNTsnInsv%2F%2Bb6GCC%2FU%2F9u3Ng2lAiEIQ96dSr94epGAt3ndsXwVEuH%2FmUDQvFkoAo%2Bpd9pSbA%2BJ8T%2FUwwlc96S85GrbnYCT8DIYlQoq9Sbf69zkoaaU%2BUZWkqJF7EzPsIoAIT%2FTQIX2J6Nl03Dk82bPBOu3k3SZaG6r8ihP6DSc5AWyc4iYit4wKspTi26HArtjTO7oO9gpRa0mMUanEbGGYjuNOia5z1rAYMzwdRCWopca74nKPZkPLjY1k8OonrmQ2w7FIXjXuXVDm83l8E2GHoGIvwzJ9EAnmiMcmpNfbMOo%2Bww3DonxEoZueBl0KYpb6G9K0PrxjT%2Fc6RrfaNI5utsxJmep9KERO6Irw2PRuNu2hpV8WL5mpRhqcXakVU8lOG1wVPVF5cFQDFL4ARRBSN%2FUJBrhLk6cpYgNUc4r3HuJngoCJAB63Cq%2BBgcn8W0T9AdGzEoKX%2Ftpz3L0pSxudCpJpqmkaZDD1WJ55VMLjK2L8GOqUBkNIfEanTPLUU1fgKmb728zOQpaFhJmleeg5ZY%2FAgJ3%2FW60CshOvSWA3FPDU8KICkfeOmyp7xp9e1qQ1H8ZHBornMCxuxbqSDz2sTPd1Q3vRIdaep3Y5yo%2FoWQQFvj9K5wG4d%2FAm7jAd0HcnWhSm0A%2BrDjZjGYWY4qd3JjAb9km5jKsMO3%2Bq%2FGxpGpw8RS%2BdMZnDJLpjZe0L5FprvVds0qaWb2Pry&X-Amz-Signature=239d237f3a811459750d95a42b1e471c81f60a04bc464ad8163dd924d6b76cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSREA6H%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHEiB%2BN9J6NW4QNlS2nczCgB2f%2F7IJwCcC4MkppNWrQeAiEAzWCIwg8bNYPmstTbBS4hfcQlUm8md82YBAZlq0CV%2B2oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPFKXZwEf5m7Q3aoCrcA7Csw2oBibmaXxAz%2B%2BCvwtSeTk550NGN5mFC4MC4i%2Fy3w0IZ%2FxMyoXo0ZwxDoTh%2FEZnGz5TZTh%2BBFBZOJnpB3gdPJvM1QHwFu%2B2NHkPx5AQh7WXepKDlUOQz0MDKVhSC9yb43Aq4JBIZ7JNryNNuzB1voM5xk2v%2B%2Bj1k%2BW7LPmbXlYZtvOSybIrySDzBraJtofy6uYx5bi8PEXVKyOHkihTIZUOThHMj6Bxl3iFDiBONcjo197zd6rQvROLQHG%2BZvxoPgc1S%2BAuXqB7BlmCkWAr4l52AC%2FUQITti92EQ99936Ez3fG25%2FQN4tDSGA681x4Q45npsBMrdl5QAo1GRE%2B2CstW7OIbJP7oz0NqWH%2FXxtmPDflzfDjjXu06Be8HVN5U4%2F4fFyBgljnh%2Bh2sTyjmINeFAQskdITQR63EA4myB%2FxSY1yPL3Ijr7sIAQQTV1vLXlLjCOFKU%2BO9KWz%2Bm2m%2BPDR7HUdWwDyjW1dOfvxUVbHlcXdNIyee2krWisaUGq8K%2BGWb6tNl3qEThBqPcKFaJf0QN3u8ZTo6dnwlZCXwJ5B%2FeayqVAvafKlphWVTmxspocJCv8%2BTp3YFA6DXeIVymaCpSbNtfI3yxg3509LB94t%2Boyi9mkOU7Xt6QMKrK2L8GOqUB7P%2BSZx1qDrydd7jymlbHfPikKEixbH83ASwc6GO6203kc5FpuSWC1jIHFMSk1kR9sYTS%2BWQ00lpAWLZ4hLkQDAN6q3L%2FpW1c1t5HVjg46WpOsiJZRogAWe0UFtzpT%2Bb3Q9aysIFHk9cHjeerTiaReysNTmD6kUjvYpml9hj7vNV7bTrbFs89IrTEyp8U7vbjYOwk%2FmyAkkpzeoXpFETVEBIsreO%2F&X-Amz-Signature=c2b7ba50619cb5ddeca233da16e35caec084776812a638f8cab5b795b15f7784&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZIQPEM%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCKDSo8Y1a5HnZfC2EMRzilomDCaJt7btOvatgsnEYRMAIgI7IBBBt5lfAlUnNVZsHr6th7V%2BQjnCZkDjBQdpHEbRMqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLw%2BG5DXK6WAv5bvyrcAyn%2FvJ%2B9zdqkSW0qLFM3Atn7uqrolw9WcQjcs5bdf6%2BZQITgMgxmgAQ%2B%2FVFUImk6veeUHGMFAqPwkZaGM1a3goxf9ZaJv%2F7XET%2Fd8bpazVHUh763%2FlQljYWWzBzq7r1wbFYnNDPOvWqgG01Z54hfQAu3tQ%2BGcJnQrLedl5e2xsFO5907%2B2Buu0xBmZYKV9Hw230dFeO6LTLXWa0mmQBv9klCJYEKDwT7IeSKT6RYPlWzrl7C8SVqVOm6rdTe2BAZIpq1Pm1I307jgknK4HVkwrgb9ota9wyv6PqzCihvNmGixDy79OczDJg%2FUJL0ITVRgV5rXrfqAiC0nMg4k9Exk7iPW7aYTEMVjm6%2BrXp%2BEKumGaQWsrXelodmjl44QdAj4doZcNqsNxhsddOEdqbC8Sf7uIVO%2B8hKhsoaMuXTMFYINLiN13sDKWHB6R%2BYc20s9b5EGAY1XY3IFZvG%2BR1Yo4xS0lUeZWB%2FtzXb5mdxt87wV2oVUNJp0om5BMw4PGZ%2FwsaWgFDvZVYG8r2HSduDjaVBC5XM0%2BWDBgRq6XxiJWq4OsnVv4eh3xed%2BK908R2nOxHM4X2S0t%2FhD114CB5wbOrXpHy7xmg0KSGwumq%2BmaD5mE%2FcLW9MhznT%2Fgn%2BMIXL2L8GOqUB74KZNjZ6IfgTlWCZmow8KvnEuX0OPBSfpZKeullV2Y4x3Kjfew0jIGSpaF5CnMV4AILx1UbxUxi5FSuEEIvoF0r6%2B10PoiL0bGwbBMFL2iLL1x1hlsunzBoK6%2B6wGCjpz942b9do%2FFjF4ZRpK0YPZHdNvNfUxHFXtRZ5Gl4sOb14InwO2iXpDLqaZzIOINaXbtKhMp1aGQSkXJtk6XdbXEUl4CAH&X-Amz-Signature=8550f1a7eec1d44144f4280be34a85dbfe00f855f61acaae1558b1def7f4a7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DX6FPU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDFjnkIodNwFMg2d1jjEJptPYrujjWdujNtQKAW2hsWoAiEA%2FQ%2BXhRiEYyl4j51gX1qJ1AWDDMaNteFXlvudq2XsI7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEN30Yx6u0mxRtsJhSrcAyVji2X8Ds8Hej6acor6%2FK08xnTxh6jri%2BdwCwILSu1d5QE9WFd%2Bsjg1eKf6YXaLz0L0t3BGoNOdidbQKnhDvzoMkhKc1ahrjj55JX212QxZu8xia%2FVI5J7Kn35gDekGTxa5mWLJViKpitYxM4Z%2FaNTsnInsv%2F%2Bb6GCC%2FU%2F9u3Ng2lAiEIQ96dSr94epGAt3ndsXwVEuH%2FmUDQvFkoAo%2Bpd9pSbA%2BJ8T%2FUwwlc96S85GrbnYCT8DIYlQoq9Sbf69zkoaaU%2BUZWkqJF7EzPsIoAIT%2FTQIX2J6Nl03Dk82bPBOu3k3SZaG6r8ihP6DSc5AWyc4iYit4wKspTi26HArtjTO7oO9gpRa0mMUanEbGGYjuNOia5z1rAYMzwdRCWopca74nKPZkPLjY1k8OonrmQ2w7FIXjXuXVDm83l8E2GHoGIvwzJ9EAnmiMcmpNfbMOo%2Bww3DonxEoZueBl0KYpb6G9K0PrxjT%2Fc6RrfaNI5utsxJmep9KERO6Irw2PRuNu2hpV8WL5mpRhqcXakVU8lOG1wVPVF5cFQDFL4ARRBSN%2FUJBrhLk6cpYgNUc4r3HuJngoCJAB63Cq%2BBgcn8W0T9AdGzEoKX%2Ftpz3L0pSxudCpJpqmkaZDD1WJ55VMLjK2L8GOqUBkNIfEanTPLUU1fgKmb728zOQpaFhJmleeg5ZY%2FAgJ3%2FW60CshOvSWA3FPDU8KICkfeOmyp7xp9e1qQ1H8ZHBornMCxuxbqSDz2sTPd1Q3vRIdaep3Y5yo%2FoWQQFvj9K5wG4d%2FAm7jAd0HcnWhSm0A%2BrDjZjGYWY4qd3JjAb9km5jKsMO3%2Bq%2FGxpGpw8RS%2BdMZnDJLpjZe0L5FprvVds0qaWb2Pry&X-Amz-Signature=df04f0d5c24a5e29a553d358ad4be481a68378e9fcac6c6052bd9b24c439e92e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
