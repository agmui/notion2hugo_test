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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSMJJFO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAqgI7%2Bfpr0i3%2FBGdiJPU8PgS3NwViScv0e3sDJBOwgIgY8JZAwq8%2BLOdzqv9XZc9VLG7GdlrFJRIT6xQSaLQIocq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIbf%2FQ4BDhcMXnnzByrcA3pF4F0WUfwomuU%2FBv1YY3c1mEDqx%2FbK9tVFQltzHWij9Ukr12Xe0iOVO559VpuQnhVSP5qygu%2FdTaka8qWYWqo9zgFLCYjHM6d2sgW7kaRdGOcNgQQOzPrz7xttvywsBE%2FG5IMTmH4Kw0y28BJ64%2BoI8y7VvDT6CQ2P9DRB%2BkUNCPl7ks98rVKL2BijFAMHSEuYpNFnxVon77LM5Z7xtB6nZXcOJqkK%2FI7x%2FpDVNs5ibBeG%2FB%2BmWjQZGgpsMVYrRRa891iDA5Qa6gKnxc8MpJH9z7d%2B1levMeWiPo0RbwkVKWIgcXo5Y5xtkQj%2BMJX%2BFjz7kzrFdBX11R20tXFvHoPRbdiVrgywuIBofTPuwpUuHqafLTdSvee7D9gabvd4HPCxDs%2BayEsVeyLrvCFogqXbOZDp8DHTrOQ9O3hkaIdyLVPpbkveYVES6e94%2BXQBwMpJwwGyjIJGsQmnPGHCjBzexMOVR5J%2FapE487UKrBCgNg8nUKZ%2FMq%2F5PPJyEchQWpSG4%2FwASF4US8cOCTRuBBwM5%2BmjeZRRitIoslpnMUDyaEwvlUuixpwBQmW51eP%2BZ%2Bi65A6TXZ054740jSDSe40HktAcHOTZkO%2F7jpcfjuiQLMl5kYLKiJtdIeg4ML%2FP4cAGOqUBraDTHm8qFBxpIRqyIjT8OH7NVsVI7xXie%2B2QpcBch%2FnDR0Cv1TWNzEJCpCdbYgC%2FNFqdx%2Bh3HBYXvQwba6tHvViDnEA43WHNkjMXEFU38xXD1gP315vJvRZoAXBkdqKYhx%2F4VLndjRxhHmhclhcqx4Y%2FSjFJzfyKsUbsC6Ce2RqJvpHn5P2UhsiYygPkBoQsZNcD%2FQCCYOf3dF%2BnsFj%2B3c5M4OaN&X-Amz-Signature=f9074fc6662aa599686194ea4d7d5d274edf62c740b8112763486abc52936388&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSMJJFO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAqgI7%2Bfpr0i3%2FBGdiJPU8PgS3NwViScv0e3sDJBOwgIgY8JZAwq8%2BLOdzqv9XZc9VLG7GdlrFJRIT6xQSaLQIocq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIbf%2FQ4BDhcMXnnzByrcA3pF4F0WUfwomuU%2FBv1YY3c1mEDqx%2FbK9tVFQltzHWij9Ukr12Xe0iOVO559VpuQnhVSP5qygu%2FdTaka8qWYWqo9zgFLCYjHM6d2sgW7kaRdGOcNgQQOzPrz7xttvywsBE%2FG5IMTmH4Kw0y28BJ64%2BoI8y7VvDT6CQ2P9DRB%2BkUNCPl7ks98rVKL2BijFAMHSEuYpNFnxVon77LM5Z7xtB6nZXcOJqkK%2FI7x%2FpDVNs5ibBeG%2FB%2BmWjQZGgpsMVYrRRa891iDA5Qa6gKnxc8MpJH9z7d%2B1levMeWiPo0RbwkVKWIgcXo5Y5xtkQj%2BMJX%2BFjz7kzrFdBX11R20tXFvHoPRbdiVrgywuIBofTPuwpUuHqafLTdSvee7D9gabvd4HPCxDs%2BayEsVeyLrvCFogqXbOZDp8DHTrOQ9O3hkaIdyLVPpbkveYVES6e94%2BXQBwMpJwwGyjIJGsQmnPGHCjBzexMOVR5J%2FapE487UKrBCgNg8nUKZ%2FMq%2F5PPJyEchQWpSG4%2FwASF4US8cOCTRuBBwM5%2BmjeZRRitIoslpnMUDyaEwvlUuixpwBQmW51eP%2BZ%2Bi65A6TXZ054740jSDSe40HktAcHOTZkO%2F7jpcfjuiQLMl5kYLKiJtdIeg4ML%2FP4cAGOqUBraDTHm8qFBxpIRqyIjT8OH7NVsVI7xXie%2B2QpcBch%2FnDR0Cv1TWNzEJCpCdbYgC%2FNFqdx%2Bh3HBYXvQwba6tHvViDnEA43WHNkjMXEFU38xXD1gP315vJvRZoAXBkdqKYhx%2F4VLndjRxhHmhclhcqx4Y%2FSjFJzfyKsUbsC6Ce2RqJvpHn5P2UhsiYygPkBoQsZNcD%2FQCCYOf3dF%2BnsFj%2B3c5M4OaN&X-Amz-Signature=e14ff53e2d6b0bb905725fe1c7221d8ddd2f97f7f86c6276c8f813fec6c234e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSMJJFO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAqgI7%2Bfpr0i3%2FBGdiJPU8PgS3NwViScv0e3sDJBOwgIgY8JZAwq8%2BLOdzqv9XZc9VLG7GdlrFJRIT6xQSaLQIocq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIbf%2FQ4BDhcMXnnzByrcA3pF4F0WUfwomuU%2FBv1YY3c1mEDqx%2FbK9tVFQltzHWij9Ukr12Xe0iOVO559VpuQnhVSP5qygu%2FdTaka8qWYWqo9zgFLCYjHM6d2sgW7kaRdGOcNgQQOzPrz7xttvywsBE%2FG5IMTmH4Kw0y28BJ64%2BoI8y7VvDT6CQ2P9DRB%2BkUNCPl7ks98rVKL2BijFAMHSEuYpNFnxVon77LM5Z7xtB6nZXcOJqkK%2FI7x%2FpDVNs5ibBeG%2FB%2BmWjQZGgpsMVYrRRa891iDA5Qa6gKnxc8MpJH9z7d%2B1levMeWiPo0RbwkVKWIgcXo5Y5xtkQj%2BMJX%2BFjz7kzrFdBX11R20tXFvHoPRbdiVrgywuIBofTPuwpUuHqafLTdSvee7D9gabvd4HPCxDs%2BayEsVeyLrvCFogqXbOZDp8DHTrOQ9O3hkaIdyLVPpbkveYVES6e94%2BXQBwMpJwwGyjIJGsQmnPGHCjBzexMOVR5J%2FapE487UKrBCgNg8nUKZ%2FMq%2F5PPJyEchQWpSG4%2FwASF4US8cOCTRuBBwM5%2BmjeZRRitIoslpnMUDyaEwvlUuixpwBQmW51eP%2BZ%2Bi65A6TXZ054740jSDSe40HktAcHOTZkO%2F7jpcfjuiQLMl5kYLKiJtdIeg4ML%2FP4cAGOqUBraDTHm8qFBxpIRqyIjT8OH7NVsVI7xXie%2B2QpcBch%2FnDR0Cv1TWNzEJCpCdbYgC%2FNFqdx%2Bh3HBYXvQwba6tHvViDnEA43WHNkjMXEFU38xXD1gP315vJvRZoAXBkdqKYhx%2F4VLndjRxhHmhclhcqx4Y%2FSjFJzfyKsUbsC6Ce2RqJvpHn5P2UhsiYygPkBoQsZNcD%2FQCCYOf3dF%2BnsFj%2B3c5M4OaN&X-Amz-Signature=dd39acfcc7846e8e1854ed31c09a68d6322c21dc3eb1217b189ec5b3cb0ce434&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5MAEXU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFou6rs3QTpKnBnFXdKyPB3ijqaLe%2F%2FXCP0UuqstYWYmAiBZPCe2c1Tlt6riF5Kk8vFjTL%2BFZc%2F2pCE1FU7ZRsaB8ir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMgrQ0SMwVqr6GxkHdKtwDcj7Szv5xGmpLVtttRZaVhZJl1iCNdtFv4DtY61bdNlvuNi2%2BgQNGa3K3Oz4tusoFtdrJ6iv1UUVZtFue7StUJS9JKPqjOPLYHwOP36IuW%2Bwwmbb4n6LgSjPaAZCD3TA09bYh1XlGBRtWod1B62cM4VrQYWSAnE5%2Fg2slGwCXy19r14XzCNUeqJJFNDyXJsQb%2BYGjqLNIVF5dx7ox0k55AcWbKnwCwPyIuDT04rGGzjiz9ACTNPfYhXFTifKvdcxrzJGHTPacQwQdN3nCMif42R1kUNvLtL3D27BXzZgBe9wHjsmILv7eitdXnmnxaqC%2BimgShiwidCU1Yso86sX2am4TFp8x2RKiys93kRTjhpzwc67DpeIiWIbo0cI%2Bo1LsiZy0VoFn2dWU609Ymy5YvygY0dNffH489%2BA1xs1ZyLQfKKGtc8vqQU11AZDSjuGv%2BEQSEem3zl9lDDtq5IJaOwigpQxo%2Bhx2Mhq8q1LAkv0b0RlasXjRu0WsXmm7qYBP4u1PgnUZHQfUeC0eyuxeqNkUbHy9LDPhgcqj%2FuxT31TsTLkdYLbdbeYSK%2BMxjVWphKhGGK%2FZeaEn%2BxS1m4m8WgbWbwg3mTgO1CCH%2BJA3Veubvo5kF9KSo7GUkuowms%2FhwAY6pgEUvVSAsPdwJ18nNJMp1185znyD9qIV92Xa8fX6Gd%2FQ%2FgDpphvTrPqevOU3GlTVCp4wx4suOK7pxU1Y4J8M7caaR79wLr3Aiz5dlrKURoc%2FT%2FYpSgZrnkZE1yKjQwCfFy0xLLdcwe39IoUlgmJyoalcJGzetLG0SYQDhSDXEq25RCUMw1E1bV4fGC8jOEflEzQnduIr3FxyspAcpKxE7yAgVIdIncNO&X-Amz-Signature=a22f2856d972fb2b3b0378add72a748ab3eb4d05b08bb7066a7ec5406c288c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIB6N5Q%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3LK4SiEeZDPP7v0QV5FT7Z592ZnQN8wj6mO9fkNjWnAiBSsbN7K53t9wGGzfjxuBmmz16eN%2BoZ2rzTs38D6bzu3ir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMUAQbO%2BTwOLElQGf2KtwDpzQDpA1QexJ8siBpIO4h3NXnatBYdL5XfnTe1rIpvRm2M23n%2Bah1wsCkldLo56k2hIEDUPBJ9DYpeqtQI8wlzPnIvusWf4arXWMwdZ9%2FTTDToqf3KmbXFAoryLCqX6tG%2F%2Fez9LXJwU8rQep6ECAUjNxHRrNjJDwNZf5yc4OgYqyDruxP88XZ0Ro78ciAhShB80xuqK8HV%2Fmc6WuJpaAsJQLi8jHG2utBLz%2BfOSacTY7EqsCoJHj0wJprp6GDcPe9TdRC2LBQc%2BYe8qafFOAaLOLlPBzVZbiVLUd3LOXVXAkbYrlyItsJg8oVBnVse0I7W%2F3uu0KWhEyvnaR8RdyT1SnLGbDj3HGpgO9JZvXmt5wz6NXRR98WIsJ9EsV7%2B1HNdIA%2BuH5hXhBSpir7BYQbzUhfJtsZyHWDKnbZ4JFRwLXoeL5Mq8kFOoDbzelcjt0%2FyNqbFS0PCde1BxT3VOF0hda9qy9IeRfgxxHEqzW4%2FSxjqMY0yv47hrWjBVaahqBvNuIke3vU5eBHzFTPuJuO7UVKNVCE6x6pHHoiv7wnZnaZI0LAzZTMUoLMsaDX34nOT%2Bv0tQXeZlB%2BcdjmEhUlq7xlzaszgdfcYJReaWrLqzS6RguJKrqSg%2FTLjpEw48%2FhwAY6pgH3eKKAggKjG%2F7Ko3Vzx%2FA4EGMbTroOpfReA%2BUI8lVd8cixRFYBpnWFB6f7DiAtwV3oSBbW5oadm8bRTXe8avcz2TTN8YQnIz6elJBT9hwl2ZM3tRlDXx3x6EX5lc%2FKS%2BStaOf9QLLRyx2MFHf2m80Hj6xsG7i4D%2B5MIeHWkSyPHyRgme%2B0zO8ZE8u%2FYXGtEHDPCZ7%2BH8VhzX9yInuAiEmXTiAvaflh&X-Amz-Signature=25dde783ec66838b72b2bb8d482df923bea2979ebdea1968b07d430fa048554a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KSMJJFO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAqgI7%2Bfpr0i3%2FBGdiJPU8PgS3NwViScv0e3sDJBOwgIgY8JZAwq8%2BLOdzqv9XZc9VLG7GdlrFJRIT6xQSaLQIocq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIbf%2FQ4BDhcMXnnzByrcA3pF4F0WUfwomuU%2FBv1YY3c1mEDqx%2FbK9tVFQltzHWij9Ukr12Xe0iOVO559VpuQnhVSP5qygu%2FdTaka8qWYWqo9zgFLCYjHM6d2sgW7kaRdGOcNgQQOzPrz7xttvywsBE%2FG5IMTmH4Kw0y28BJ64%2BoI8y7VvDT6CQ2P9DRB%2BkUNCPl7ks98rVKL2BijFAMHSEuYpNFnxVon77LM5Z7xtB6nZXcOJqkK%2FI7x%2FpDVNs5ibBeG%2FB%2BmWjQZGgpsMVYrRRa891iDA5Qa6gKnxc8MpJH9z7d%2B1levMeWiPo0RbwkVKWIgcXo5Y5xtkQj%2BMJX%2BFjz7kzrFdBX11R20tXFvHoPRbdiVrgywuIBofTPuwpUuHqafLTdSvee7D9gabvd4HPCxDs%2BayEsVeyLrvCFogqXbOZDp8DHTrOQ9O3hkaIdyLVPpbkveYVES6e94%2BXQBwMpJwwGyjIJGsQmnPGHCjBzexMOVR5J%2FapE487UKrBCgNg8nUKZ%2FMq%2F5PPJyEchQWpSG4%2FwASF4US8cOCTRuBBwM5%2BmjeZRRitIoslpnMUDyaEwvlUuixpwBQmW51eP%2BZ%2Bi65A6TXZ054740jSDSe40HktAcHOTZkO%2F7jpcfjuiQLMl5kYLKiJtdIeg4ML%2FP4cAGOqUBraDTHm8qFBxpIRqyIjT8OH7NVsVI7xXie%2B2QpcBch%2FnDR0Cv1TWNzEJCpCdbYgC%2FNFqdx%2Bh3HBYXvQwba6tHvViDnEA43WHNkjMXEFU38xXD1gP315vJvRZoAXBkdqKYhx%2F4VLndjRxhHmhclhcqx4Y%2FSjFJzfyKsUbsC6Ce2RqJvpHn5P2UhsiYygPkBoQsZNcD%2FQCCYOf3dF%2BnsFj%2B3c5M4OaN&X-Amz-Signature=5ca306051f0368eb9444b7fecc7553d542c67371d85d4e71365f717bb6b22c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
