---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "null/Getting_Started.md"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T62OPNZL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCQA0Jbde3UC9q4SUQg9aHaAXeVS5Pr3yimBqHWoAPU1QIhAKjhPSd4KEENMu3FC0RUoS93IZyecHPkmCxCvOFctXKkKv8DCD4QABoMNjM3NDIzMTgzODA1IgxXh0TEPfzKiHNdjdkq3APsFN0HfLwhY6kmJ%2F3LYIkASPup91Xw%2Fk3ObvGfk95kVyUyVtQu0HGGZqTRSvrF7Ocog8w%2BaWsBMKjoRFLKeUIBul17rhFKlw1eXL5bebXspsKgqvXRV4P9%2B4G%2FoVnHl9mO2vFq%2BQgo71NhUKvQwuFo%2BHeJB5llNjlTASip4DKM2Fg8NbOkKYR8nNQJSHJEH2C80Hmp2Kk8asuAX0hHr9NXArqP5Iw%2FJ9DeiCvdcFPWpFKpg8%2Bh0RGkXYneTi%2FmQJePFQpJRjyWQhGCGy4JtTL35PMmeswnGkwNRrk7KIaatocfbI7aNwDI8qvc2sxAF%2BQVMYv3AcCwgMCEdpcBjB0YZxyCQwt6P0%2B%2BrgUHMq3pUovkhUZtH3l2aqlsJm4Z3QI1amORJfOGjSelzfJ7da1o2Kr5ziE5gshGoiBxo%2Fr2%2BOqFzVeWZMZxp6AK77fnt2uVQxxghpjStfD5POFUCalMkxifoQ3GVAa9Hy8Uyl0ITu7RRTog3eIYrCHgocQNGLPDpHK8lkCzsipHH3MCFCDqk%2BNPD%2FIFudIsdvS%2BxWWo1lQfU1k%2FURP%2BXn8fYKG1Lew0pjMZyuUZq9EYQ6B7dS%2F%2F6mJbnI8bkPWT1pSk9F4%2B%2Bx%2FiSugNEkwhS1AKNjCc34u9BjqkAQEMTiXWF24r8rn%2FM%2BN%2FXQRY%2FAt34%2BaZ6cwFLU1%2B5UHRJyC7zAEmrYupCYBVFkimQ5U7nGEJ7HwwHB7pBexoxcNYxsM9QFXdcpFAnZSPQrrLm7kiccRpjOtKDseiwhEjuQcGOKFJYcD7b04vfdcTNxWtu8Js%2Bg8LiqZ23g9MOJ1cOyhcze1bvo%2BMKrfDl3xhgqM0c83wz7Rzsjwz5vp%2BCGUJW0cI&X-Amz-Signature=549d1177fa4750e1d7a14cecf8578b804ba800db5c6673e15bb9a265e0aa6d30&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T62OPNZL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCQA0Jbde3UC9q4SUQg9aHaAXeVS5Pr3yimBqHWoAPU1QIhAKjhPSd4KEENMu3FC0RUoS93IZyecHPkmCxCvOFctXKkKv8DCD4QABoMNjM3NDIzMTgzODA1IgxXh0TEPfzKiHNdjdkq3APsFN0HfLwhY6kmJ%2F3LYIkASPup91Xw%2Fk3ObvGfk95kVyUyVtQu0HGGZqTRSvrF7Ocog8w%2BaWsBMKjoRFLKeUIBul17rhFKlw1eXL5bebXspsKgqvXRV4P9%2B4G%2FoVnHl9mO2vFq%2BQgo71NhUKvQwuFo%2BHeJB5llNjlTASip4DKM2Fg8NbOkKYR8nNQJSHJEH2C80Hmp2Kk8asuAX0hHr9NXArqP5Iw%2FJ9DeiCvdcFPWpFKpg8%2Bh0RGkXYneTi%2FmQJePFQpJRjyWQhGCGy4JtTL35PMmeswnGkwNRrk7KIaatocfbI7aNwDI8qvc2sxAF%2BQVMYv3AcCwgMCEdpcBjB0YZxyCQwt6P0%2B%2BrgUHMq3pUovkhUZtH3l2aqlsJm4Z3QI1amORJfOGjSelzfJ7da1o2Kr5ziE5gshGoiBxo%2Fr2%2BOqFzVeWZMZxp6AK77fnt2uVQxxghpjStfD5POFUCalMkxifoQ3GVAa9Hy8Uyl0ITu7RRTog3eIYrCHgocQNGLPDpHK8lkCzsipHH3MCFCDqk%2BNPD%2FIFudIsdvS%2BxWWo1lQfU1k%2FURP%2BXn8fYKG1Lew0pjMZyuUZq9EYQ6B7dS%2F%2F6mJbnI8bkPWT1pSk9F4%2B%2Bx%2FiSugNEkwhS1AKNjCc34u9BjqkAQEMTiXWF24r8rn%2FM%2BN%2FXQRY%2FAt34%2BaZ6cwFLU1%2B5UHRJyC7zAEmrYupCYBVFkimQ5U7nGEJ7HwwHB7pBexoxcNYxsM9QFXdcpFAnZSPQrrLm7kiccRpjOtKDseiwhEjuQcGOKFJYcD7b04vfdcTNxWtu8Js%2Bg8LiqZ23g9MOJ1cOyhcze1bvo%2BMKrfDl3xhgqM0c83wz7Rzsjwz5vp%2BCGUJW0cI&X-Amz-Signature=6853b61eca438ca886dbf5ee5d3be05a04349bcc2c0dfe99e932c65b4d7ab6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7KW52UW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDxGWSZ6Otw5JsXyJKwoUm7U8VwDfVoJC%2FSfS0gOYrB7gIgFfCbX2eZYHogJPqyUBsN%2B23lTSteGDilfuFjvGCae2Iq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBfxhcGE1ec8wZFs1yrcAyomN%2BrgSjpdgrr7m7ftS1ze7XoQNZALxP4gCpyUVGkKerp2z5rEDONLuwBGLC2TUN0YqaINfAIcials7TBDNblCSawksstSnLdS6zdwuZK2D354kEzD%2BoPlrgBOtTafaqqi0MJaG4rJv5vN4qSm58nKA%2F0nZfRQOgErcmJ%2FD4cA0XkiY%2Feuukzbf4KfRS6BYo0qs5QtqFTG1PwON4eDG6X3isKuNP0hbbEnTvivauIzO2C6t85z7jNWMlv4LRuPb5DIFGPbGNxfd6Rh7HY8zY%2F2%2FUV1V8lZLs4%2FYAsEchc%2BfSk5efBCMZZAP9tqSY7ZH1HF9%2BmSU6%2FlxjT1x6T5A1cTovYjuqTOWjJQvTEMhpPaGOAmSD5GJXg7k9jMKapi3xrljR%2BAE2%2BSCnukDbBTTOZ%2F3CoRg%2BCPrXkm1cLIIDixD3letCVB4KlhkldxFyVLvgj0fttfY91g9ZuoI6QOAHhWDIpkOsb2eQi75IltMwpnJLeNrz7Y4aJcY4kcOEoUT5QD2QZpfpMj5kBPohusWONCRb25Lk4x9CeQljQFBKgUS1g2Nw%2FRoQm3sbcRvcgm3jMal4IOGHN671kJfm8Yhh7UMZpDfBjC8%2BnrCJiFeRu1vmurnvlhJDivtj7MMNzfi70GOqUBwPP0o17G5qCpAds72Adwn2sby2d5QNzQ3drj8sdpkqlfNuQbbYSxmvIhre8%2FjuesGKgDiMdd8JZaiqYf0XMjqXyJSu%2F5dRpRPREQy9EtMP0ByzdaFAAQrAgEXtdv3edaKDq%2BXJwN8zxkufsHziqojSh70hJW2SiMvoKcuVzmXYT09Ql8hUUU2wfFXZVVCm8IBPGWkF4kM54F9IjMHk6rl75RzR4K&X-Amz-Signature=234fa485563ff0361e545ac7f2ce1557bcad4b782a8c48d93091b588417a7064&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NR6N46%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIDsghc58DIfvm%2FLCa3y8hJeMNml%2FO%2FVlAMkKfQtD7bf2AiBDDrtG2khmnJkp5h1TYmFsz5k67jgUUpnluD68T%2F2cRyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM4KyjU9I4obY0kf1%2FKtwDxLbs%2FSeCLs3%2BtjH8uPO2r3hvmabagLV4O2BDlYexh661qtGWXZNNxFxvdg8RIkYvz5FOx3TRp00UA2A7sAg7c1GD2xt0Lfbu32tC9QE%2Br%2BMJ%2BC0aJ6jPf%2BqPocSikzTv40T2hyUHF7ch0%2FBI82K8JaXtMybYRMK%2Fsd3nFMJDOmT7zq2DBzGfNPA66AlUjv478xaZgZ1DBQBfXNjYcxmi7jwQRjAybFOHCldHZVjnkGUeRdE5H1xa3JoQFzMSCxFSxU5mZXS34Uoi98FcUkGwycBUUf2RrWJKzkkpo2%2Fzt1PHPZhJTndZ1YQZqkmijIUr%2Fg%2Bt53%2BilQVHa%2B04Cv9WABqByWrBuJtk78A6SS1OlSBtjOUAjM7lKykbKewUZ2WVGTS8k6nU%2Bkgz5nsczBuD4qxH2%2BuVei%2Fsf0MF6FoPmuYTRRUtbSTOB9H4bJkCLQBSp7vnVHkQZiLAi3Cz%2B7nDbZdYfcawr6Q9i9sYcgNZpmLvL6yC%2BnTBm2k5ME1rQ5fZXJg3UHajXpcxD9jXx2KtWicI96%2BIhMA9qFNTwVsC6ptaiJ3p1AasqB7J3Vz3mrFKZoB7%2BLRIL3ZSDHqTSuC3SOyoddPxSiiJ9V9hZxtpHtMlww8eCzyG9XQvqHkw6t6LvQY6pgGeKEI5rC4J1xbDsXW%2BpedsrSrSGA%2FiovIw%2B9K%2F4EYKUFqWmHsPVTP1R5j8zrmw03tK0xvvUrA%2FlbdgbE5vZGO3Sn3sRemFDoEOXmjVsDWQblfB4CblC1pw25efvEg90wU%2Bxg%2BbtIDIU5Paq6LfqbXH7oq%2FIpgr8LMkZuTl6EdTlP%2BmLhFwvSlKm30kxM%2BN%2BseCLJL0%2FU1zcFBU%2FgECPs68fei4Donh&X-Amz-Signature=e8d4257ba7ffe7f3870c8ef1b3d24ec63462db73ff434b3eda93717ad13fa79d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T62OPNZL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCQA0Jbde3UC9q4SUQg9aHaAXeVS5Pr3yimBqHWoAPU1QIhAKjhPSd4KEENMu3FC0RUoS93IZyecHPkmCxCvOFctXKkKv8DCD4QABoMNjM3NDIzMTgzODA1IgxXh0TEPfzKiHNdjdkq3APsFN0HfLwhY6kmJ%2F3LYIkASPup91Xw%2Fk3ObvGfk95kVyUyVtQu0HGGZqTRSvrF7Ocog8w%2BaWsBMKjoRFLKeUIBul17rhFKlw1eXL5bebXspsKgqvXRV4P9%2B4G%2FoVnHl9mO2vFq%2BQgo71NhUKvQwuFo%2BHeJB5llNjlTASip4DKM2Fg8NbOkKYR8nNQJSHJEH2C80Hmp2Kk8asuAX0hHr9NXArqP5Iw%2FJ9DeiCvdcFPWpFKpg8%2Bh0RGkXYneTi%2FmQJePFQpJRjyWQhGCGy4JtTL35PMmeswnGkwNRrk7KIaatocfbI7aNwDI8qvc2sxAF%2BQVMYv3AcCwgMCEdpcBjB0YZxyCQwt6P0%2B%2BrgUHMq3pUovkhUZtH3l2aqlsJm4Z3QI1amORJfOGjSelzfJ7da1o2Kr5ziE5gshGoiBxo%2Fr2%2BOqFzVeWZMZxp6AK77fnt2uVQxxghpjStfD5POFUCalMkxifoQ3GVAa9Hy8Uyl0ITu7RRTog3eIYrCHgocQNGLPDpHK8lkCzsipHH3MCFCDqk%2BNPD%2FIFudIsdvS%2BxWWo1lQfU1k%2FURP%2BXn8fYKG1Lew0pjMZyuUZq9EYQ6B7dS%2F%2F6mJbnI8bkPWT1pSk9F4%2B%2Bx%2FiSugNEkwhS1AKNjCc34u9BjqkAQEMTiXWF24r8rn%2FM%2BN%2FXQRY%2FAt34%2BaZ6cwFLU1%2B5UHRJyC7zAEmrYupCYBVFkimQ5U7nGEJ7HwwHB7pBexoxcNYxsM9QFXdcpFAnZSPQrrLm7kiccRpjOtKDseiwhEjuQcGOKFJYcD7b04vfdcTNxWtu8Js%2Bg8LiqZ23g9MOJ1cOyhcze1bvo%2BMKrfDl3xhgqM0c83wz7Rzsjwz5vp%2BCGUJW0cI&X-Amz-Signature=b339936f8a5c074bd9aef9e756bebda70dab96074506e55ff8cc222ebc5da644&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
