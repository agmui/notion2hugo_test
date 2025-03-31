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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLP4MMS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGs%2FRhdAyfzIFNb6AEOsVZp6pBAq%2F9Y7Tbu3C%2FdPTGqNAiBYbSn9U13sRrPSLOD7jqTgUi9nZA6XxRrSoefLmoQADiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl3pOR1r%2BKus4GfgMKtwDl5s0dWkRKECZPB7iHkcCamFdyUGUJeaZnw7RObE%2BN17yU4BT7KFhB7p9zybAGE70vYtrKWMVs6xsGdVTCxkdIlc%2BMrnes4HiNXd7Iv6XxuzsHThCpOe6KzVMKOA9x7qAw6xCWS%2Bgp2xrbUtkxpZWdeUg3%2BSSLP4T61ylyeAa6LFSbsSgnW30PEzPzq1J6dicUWopewz09C9%2FGV3HI0hLqfS5awjkzIUpH0q27bKNd%2BVxnQLIckia5eJ6e8HhPMlrkkAc8emCOX61aZRF6VVhkWDLSj3kmbMS5MOQKOO6%2BJPn9wTCj0KvguZMitKeTo3LzLFYscKLmNKkaNXDLN2orWvTjdnJn%2FDPZltK5mj1JfSgD%2BbUQYCm5zT2rarOIYoD4JkJ2NsOgUX4Bxa84zw%2FlPAOGegiUOgEJ4MYy2H0gjcwCOjJKDQzIzhn3w26tnPLZLRUDbNr8uWPlWOkyA5ysWc0isAbZ00warDfeTvzoC%2BIK6VI7jB5nhwagSMM5lMKsCTx7rQENHAxJVcJstzLWfuU39KZAzxLhPYQSe7mLG7wi1gZ3JMwj6Yo0roKzzc92bNvCczQQlAu9sVtEYuM75gKkTWhXA9aKyU35TY1wNpL%2BelRmZCnAr8CPJ8wlMqovwY6pgGQ0Dt4KYm%2BCY2CyHiYHWc3Nn54zobb66YiTyGjBPyoGFuWQ6zEcU0D8Zje%2B5XBU1YtyKVNaWvZbC7W%2BCtseYlK1WMCvABOki5iDiZIUdQAd2nhdz242v66njKHrrx0YG3Fv0D%2F21pveGhXQSLG1MrYyR9s0MBg%2FhO%2FtHeyjxchz2IDc9potyyopPKBDPK2ewc77Bmo8jCjUnsln5NqH7JK3LDSxYnS&X-Amz-Signature=a897dff14c59a2d0451bf6bfd96cf1077f8a5c0c7cda76964e3023830ba52fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLP4MMS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGs%2FRhdAyfzIFNb6AEOsVZp6pBAq%2F9Y7Tbu3C%2FdPTGqNAiBYbSn9U13sRrPSLOD7jqTgUi9nZA6XxRrSoefLmoQADiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl3pOR1r%2BKus4GfgMKtwDl5s0dWkRKECZPB7iHkcCamFdyUGUJeaZnw7RObE%2BN17yU4BT7KFhB7p9zybAGE70vYtrKWMVs6xsGdVTCxkdIlc%2BMrnes4HiNXd7Iv6XxuzsHThCpOe6KzVMKOA9x7qAw6xCWS%2Bgp2xrbUtkxpZWdeUg3%2BSSLP4T61ylyeAa6LFSbsSgnW30PEzPzq1J6dicUWopewz09C9%2FGV3HI0hLqfS5awjkzIUpH0q27bKNd%2BVxnQLIckia5eJ6e8HhPMlrkkAc8emCOX61aZRF6VVhkWDLSj3kmbMS5MOQKOO6%2BJPn9wTCj0KvguZMitKeTo3LzLFYscKLmNKkaNXDLN2orWvTjdnJn%2FDPZltK5mj1JfSgD%2BbUQYCm5zT2rarOIYoD4JkJ2NsOgUX4Bxa84zw%2FlPAOGegiUOgEJ4MYy2H0gjcwCOjJKDQzIzhn3w26tnPLZLRUDbNr8uWPlWOkyA5ysWc0isAbZ00warDfeTvzoC%2BIK6VI7jB5nhwagSMM5lMKsCTx7rQENHAxJVcJstzLWfuU39KZAzxLhPYQSe7mLG7wi1gZ3JMwj6Yo0roKzzc92bNvCczQQlAu9sVtEYuM75gKkTWhXA9aKyU35TY1wNpL%2BelRmZCnAr8CPJ8wlMqovwY6pgGQ0Dt4KYm%2BCY2CyHiYHWc3Nn54zobb66YiTyGjBPyoGFuWQ6zEcU0D8Zje%2B5XBU1YtyKVNaWvZbC7W%2BCtseYlK1WMCvABOki5iDiZIUdQAd2nhdz242v66njKHrrx0YG3Fv0D%2F21pveGhXQSLG1MrYyR9s0MBg%2FhO%2FtHeyjxchz2IDc9potyyopPKBDPK2ewc77Bmo8jCjUnsln5NqH7JK3LDSxYnS&X-Amz-Signature=1bf41f9073bb372d99479a0670ef797c63ee60048e4c3751e24f227bd5833335&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTSARKZ%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDc9T7MQGjxueiZrZeKGe9LeI754Ns4eOmp9Pp2BPVLUQIhAK%2FmV2urSn9x3YD3p6sQ%2F%2F9xlZd3lr8ZwEYzBV4t%2FYbhKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyFV2o8%2B4vKOCFZV8q3ANCVoYfRDG%2FsaYWg9%2Fi84MFYH3gc6VjxkmERwp24e7kX0xfHjvvlPotbCKhqMn061%2FkKaT1UewszHyKLYRqisHNyV6xBUo0lEeGHziZLWTdsA95KEVZj6hNSf2MIaIerJT94YxI0a0h9nYqpJIjXDnr1Myjp05lGqboWN3cXVycznLk0AZEanBqf9YLEs3IjBfX7gZR5Leg3ijQa5qSRW8Itl4SYvSVzVgkVPfZaWK%2FTidJL%2F9PDk1%2BRvPxtG9jMp8SXtZtEfxlsbPKKpFsjgjRV8oc3VuUsbPzd7ocAn3Vt002NismJgOKeWzaILjyKcyViH4H8V8dlJ0KamWenrRfTT%2F0CI7b3BPgKgsgI9jCFDHejOzCBNIOP9pff4ExhMe8LpjmRYbao1JFIwWGmyBbdu00kbv8J%2BcDZ%2Brjz6yA0NgxMJMtmcAibTXL8uYDjg1uBhfWSa5JUe7IeUeli1R2co4uoqRTL88XjGA1cXP2XFeVT7XPO3f0qrxsNlObT0LPoavavzMVWa8p53l1XDy15%2F4BEdf%2FbFMT6j6fviavr4K%2BiQQmzJjPNdxAy0V6N4KGOlisvbHfzocX9a5UxMvfJ5P7Blzhxnukygtbr8zPiRpJpPLrNqgqiFhagjCbyqi%2FBjqkAcvnyyRiI2WTcjebF3udfDdUe3G%2FSaV7Zf4p0cM1feouPEJeBd9PjOzRiWJxa9LTRWl%2Bj3y8cMuE1KuLdZFcuDKBUYOlp07x%2Bl8hZ49ZSeQHnVQ089v%2BSyclnTBA30jmfe1jyjuPee9eDNZrEm9xHExiRnhpNQge1wZsF045edV2Hb%2BwT1b1lLsU%2BUnt0Rx7T5mAeIm%2FuQcPHpCI9NY%2F4egFgitr&X-Amz-Signature=fefc7499ab12d31d266c73498678145cb01a55ca215eb26591267c65d1d01930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652PLA46E%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIAE5o88oC5%2BRMMggQ%2BGI5LSWEoQtWAAow4smXEQkjJ3TAiEA6EyKU4GnRWgaG%2B8AKnddJcJU7ZgO6tUa6lNHBsSOxUoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1W6jKhaOVzslHJiircAzWxLKBY2tHi35MdsjWofYauUQ%2BFh52xk%2BPkx0ebsDlr9lBwYoJzOXcj5FjlMSRLO53X%2BZvyM9GOvtg1cf7Oj6z8ptcRY5hmFiLEfzw2lYNXvNHV0iprQWRwNsoRSOD6DvkL3x9M9pGTuVLUhZIsegXhZLuDRcaja0fl2FVM12xA%2B0C3SqPr8hz1m6eOB6rr%2FPhKeLnPwwDZFxDur65CyaDctTKMJlpy3a5HC9v07kimvyVofP7DxuoJ4Ptd1wygaEIQuv3hcg2RmDBJXy3xkGgkzWFfevHQHzfKR3ffj8l2MlwG2dCRqPhxYku229XDPf1w0YrCZIWVaB0du6jaXiwblOL7Ofvl87p8Cp2cvjddBRBdAX7t1ZmObr5IT%2BIl8UtefwqkWgz%2BXsvzXD0379tJ3dM3EjqUsJqdH6idqutSolSYEjAWH12A4YjaSMqya8oEjjsWiB5JrtVIAMDmBN8TBwJVYTwFelAKdddvYX8RUWeo3Mz8yzF3K7kiu27x%2B8xLCXThLGou5%2FAJdoV0h0%2F3yhLbTzYofqCB%2BYCB0h0wRcSO3Y4dxhqBRpM3H9ETIDcFOnUW6KzLr40%2Bln%2FvR51N5KgmuWSIzEVHHt%2FQx6q0u%2FOYfLmYQsGgu6SaMO7JqL8GOqUBoc54pK%2F3fn2vdDTFeQGYHJxCtY9Lrqn691m%2B8No2HbGX66ZHn1raeAgGrQTnawgkn8FmRJkKB0nrDpqbRZjlli171S8evZtaDqPfdfJOwMrWHyQm6pVeKT7IUayjdZ6jn53s21t71GUIGmtWfnd179WVG%2BwNCjNAv7QWfTNWfP1WKL0vwa1rOEG2njx%2BMSpAuLGEYs6ghclGIjE4stVZD3chO21s&X-Amz-Signature=0b162ec784fda7f72867ca7fa6d53fd566d49dd0fd3f31a03be8c383a35019e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXLP4MMS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGs%2FRhdAyfzIFNb6AEOsVZp6pBAq%2F9Y7Tbu3C%2FdPTGqNAiBYbSn9U13sRrPSLOD7jqTgUi9nZA6XxRrSoefLmoQADiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl3pOR1r%2BKus4GfgMKtwDl5s0dWkRKECZPB7iHkcCamFdyUGUJeaZnw7RObE%2BN17yU4BT7KFhB7p9zybAGE70vYtrKWMVs6xsGdVTCxkdIlc%2BMrnes4HiNXd7Iv6XxuzsHThCpOe6KzVMKOA9x7qAw6xCWS%2Bgp2xrbUtkxpZWdeUg3%2BSSLP4T61ylyeAa6LFSbsSgnW30PEzPzq1J6dicUWopewz09C9%2FGV3HI0hLqfS5awjkzIUpH0q27bKNd%2BVxnQLIckia5eJ6e8HhPMlrkkAc8emCOX61aZRF6VVhkWDLSj3kmbMS5MOQKOO6%2BJPn9wTCj0KvguZMitKeTo3LzLFYscKLmNKkaNXDLN2orWvTjdnJn%2FDPZltK5mj1JfSgD%2BbUQYCm5zT2rarOIYoD4JkJ2NsOgUX4Bxa84zw%2FlPAOGegiUOgEJ4MYy2H0gjcwCOjJKDQzIzhn3w26tnPLZLRUDbNr8uWPlWOkyA5ysWc0isAbZ00warDfeTvzoC%2BIK6VI7jB5nhwagSMM5lMKsCTx7rQENHAxJVcJstzLWfuU39KZAzxLhPYQSe7mLG7wi1gZ3JMwj6Yo0roKzzc92bNvCczQQlAu9sVtEYuM75gKkTWhXA9aKyU35TY1wNpL%2BelRmZCnAr8CPJ8wlMqovwY6pgGQ0Dt4KYm%2BCY2CyHiYHWc3Nn54zobb66YiTyGjBPyoGFuWQ6zEcU0D8Zje%2B5XBU1YtyKVNaWvZbC7W%2BCtseYlK1WMCvABOki5iDiZIUdQAd2nhdz242v66njKHrrx0YG3Fv0D%2F21pveGhXQSLG1MrYyR9s0MBg%2FhO%2FtHeyjxchz2IDc9potyyopPKBDPK2ewc77Bmo8jCjUnsln5NqH7JK3LDSxYnS&X-Amz-Signature=beb811829eafcd7361646c7b12e5089f749129010fb9caeb0aa162eab69d1e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
