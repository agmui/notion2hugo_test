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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2HWW5O%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd2rTsegW7NwZ8xFnp5eL6j5kPXstdBu1IO%2F689fM0EAiBYX8Tz8WkmHU697cUjj%2F4D0l9%2BkPdv6VyYRokoR4mevSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvdcKtpEDCdCdLR4WKtwDpvMISEt8oteqEsVPEYg3Xnr%2BgFebZGS0YOiirWzNm64qLQ6CXWF6bUBZxjkSISvmVOf7ZByJAb3jnEYtrX4sulYK9cpvYwToLJVpijYFdIVTdIRZQfnTFyDDtOLzvB9WFNrkOsIa%2Fie3YPMfRTmx0cF2M3aMyz0uGA7L0CCUoCSybieCZ7bhtJQqB3V5Z0VS8NCJ81D4F9UoT6xzGldgy9R1wZxCsIWUXh05JqeYrwdvYGM27b%2FQZqEhHHmhkGXA8yxiElgKC4y9obru2cRETtufiKWRqbnmYjzfCmYamEAgaHnvioTmHywsRu%2BEjHYQWUX7gn9tW2LmJX%2BIG80kaaOEhMyaryQh%2F1c5AvJ1jH7RB%2BGdTLY%2FC1URRclzcEnaS4BU48NlHB3J0jfKBcMQykHQP0OTh8eaFXqEzC1H2MaGtgaZn5UJhkrFMGzadVtHVbebOT4h9GMv4D54OP52g7cRIOa%2BCtfkhHanszWgfaVaWNXyLjf112c6EpQqlvBULLmYtt8ucbvwghMrnsbb0r5mgC6QG5MNwVj2%2BZg0bAA%2F%2BTyUUKcRy%2FOtzJ%2BCQt2hntMF%2Fj8j2P%2FlNQEtJkgzhcDMII2YtqHX6KPXLl5nYFjuq6SFtbojkZW39wIwufjcwQY6pgH%2BoQcMZD6t2hNIAdLYHiU4yl%2FNW84dAAtF%2Bnaz1ho%2Fwyy1iD2WKeZgJt505UOXy77foOw6rtc0oQ7Br6XXiJJ3gff9ipe69z1NiHtcE1%2BbbsfIRF5knpmF%2FoCTxIZO003xI2S9gQYEuXi%2B%2F5smdqp8KhVTyygCww0LS9FHPnZ58R6mPf5q98rrSJeBFSeGUQ1kqnAhoKsvxHopbK9GHTPbsbVMzOvY&X-Amz-Signature=f4d69ab2332ffb1997beb3fd7aac95acc612b5b1b6e9f42c5e80b9f75902ba19&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2HWW5O%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd2rTsegW7NwZ8xFnp5eL6j5kPXstdBu1IO%2F689fM0EAiBYX8Tz8WkmHU697cUjj%2F4D0l9%2BkPdv6VyYRokoR4mevSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvdcKtpEDCdCdLR4WKtwDpvMISEt8oteqEsVPEYg3Xnr%2BgFebZGS0YOiirWzNm64qLQ6CXWF6bUBZxjkSISvmVOf7ZByJAb3jnEYtrX4sulYK9cpvYwToLJVpijYFdIVTdIRZQfnTFyDDtOLzvB9WFNrkOsIa%2Fie3YPMfRTmx0cF2M3aMyz0uGA7L0CCUoCSybieCZ7bhtJQqB3V5Z0VS8NCJ81D4F9UoT6xzGldgy9R1wZxCsIWUXh05JqeYrwdvYGM27b%2FQZqEhHHmhkGXA8yxiElgKC4y9obru2cRETtufiKWRqbnmYjzfCmYamEAgaHnvioTmHywsRu%2BEjHYQWUX7gn9tW2LmJX%2BIG80kaaOEhMyaryQh%2F1c5AvJ1jH7RB%2BGdTLY%2FC1URRclzcEnaS4BU48NlHB3J0jfKBcMQykHQP0OTh8eaFXqEzC1H2MaGtgaZn5UJhkrFMGzadVtHVbebOT4h9GMv4D54OP52g7cRIOa%2BCtfkhHanszWgfaVaWNXyLjf112c6EpQqlvBULLmYtt8ucbvwghMrnsbb0r5mgC6QG5MNwVj2%2BZg0bAA%2F%2BTyUUKcRy%2FOtzJ%2BCQt2hntMF%2Fj8j2P%2FlNQEtJkgzhcDMII2YtqHX6KPXLl5nYFjuq6SFtbojkZW39wIwufjcwQY6pgH%2BoQcMZD6t2hNIAdLYHiU4yl%2FNW84dAAtF%2Bnaz1ho%2Fwyy1iD2WKeZgJt505UOXy77foOw6rtc0oQ7Br6XXiJJ3gff9ipe69z1NiHtcE1%2BbbsfIRF5knpmF%2FoCTxIZO003xI2S9gQYEuXi%2B%2F5smdqp8KhVTyygCww0LS9FHPnZ58R6mPf5q98rrSJeBFSeGUQ1kqnAhoKsvxHopbK9GHTPbsbVMzOvY&X-Amz-Signature=db85ab302560eb8b6214c3b99afbfc779173113c844a9446197934f80ca2fb3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2HWW5O%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd2rTsegW7NwZ8xFnp5eL6j5kPXstdBu1IO%2F689fM0EAiBYX8Tz8WkmHU697cUjj%2F4D0l9%2BkPdv6VyYRokoR4mevSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvdcKtpEDCdCdLR4WKtwDpvMISEt8oteqEsVPEYg3Xnr%2BgFebZGS0YOiirWzNm64qLQ6CXWF6bUBZxjkSISvmVOf7ZByJAb3jnEYtrX4sulYK9cpvYwToLJVpijYFdIVTdIRZQfnTFyDDtOLzvB9WFNrkOsIa%2Fie3YPMfRTmx0cF2M3aMyz0uGA7L0CCUoCSybieCZ7bhtJQqB3V5Z0VS8NCJ81D4F9UoT6xzGldgy9R1wZxCsIWUXh05JqeYrwdvYGM27b%2FQZqEhHHmhkGXA8yxiElgKC4y9obru2cRETtufiKWRqbnmYjzfCmYamEAgaHnvioTmHywsRu%2BEjHYQWUX7gn9tW2LmJX%2BIG80kaaOEhMyaryQh%2F1c5AvJ1jH7RB%2BGdTLY%2FC1URRclzcEnaS4BU48NlHB3J0jfKBcMQykHQP0OTh8eaFXqEzC1H2MaGtgaZn5UJhkrFMGzadVtHVbebOT4h9GMv4D54OP52g7cRIOa%2BCtfkhHanszWgfaVaWNXyLjf112c6EpQqlvBULLmYtt8ucbvwghMrnsbb0r5mgC6QG5MNwVj2%2BZg0bAA%2F%2BTyUUKcRy%2FOtzJ%2BCQt2hntMF%2Fj8j2P%2FlNQEtJkgzhcDMII2YtqHX6KPXLl5nYFjuq6SFtbojkZW39wIwufjcwQY6pgH%2BoQcMZD6t2hNIAdLYHiU4yl%2FNW84dAAtF%2Bnaz1ho%2Fwyy1iD2WKeZgJt505UOXy77foOw6rtc0oQ7Br6XXiJJ3gff9ipe69z1NiHtcE1%2BbbsfIRF5knpmF%2FoCTxIZO003xI2S9gQYEuXi%2B%2F5smdqp8KhVTyygCww0LS9FHPnZ58R6mPf5q98rrSJeBFSeGUQ1kqnAhoKsvxHopbK9GHTPbsbVMzOvY&X-Amz-Signature=34a84ca71fb41deb3bc8d279b3018f263a6598d18b361554112829dee9515ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQJKHOR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzsdMj3SiQMrEO4gITMr3OIVwDAgsyvGWSrgu9fvC5RAiEA1au5V%2FyEO%2B372cpTHKTp4QHwxAnrDlZcRCIBmWzrU4oq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDObjkFPmeju%2BrPZRdircA1AY60v6%2F1r52JA8lB79GH5to5xzU7XvEehntR0zWB0SqfTqtx1TsyvywnMo1ZJBy%2BF1rIHF4UurDDN3kL6aXE0OZahrWAaqGeeDtUzVh%2FPmL%2BTfZuoVFMz1ZbQ%2FE3uPfsUltQS0WErIkSsoFozNO2kLnZCeVbxgHaWt9%2BGwhXMwZXw1QRWihDDcSMHx0DebqA6kyWFpMoqY0Ft%2FUK%2FZO8D65Z2vHM%2Fsaz8Wbfr8UbDxic%2BZuJEtJ84%2Bi8ROFhHNcXlX4GxBlpIZ0xBy8WcWbb1tlt6V2%2B%2BgPi9WTp14VArffevH8%2Fy7w4%2FI24%2BggAdVO4HpzsAcYclFnFWHbf%2F%2FVqh44YMU7ycFAENy%2Fe%2BW6JS0iSCn%2BPQVK58ZpbiTA3Xsf9JwYshOgxUO5aEi6xp4btBHrZp2SQ%2FgS0XWjY0%2F088NKosAS9ljaoiVJu3pVaFu1eDHNyPQHLfr4c6piilwYkp%2FdJFmtEsGQRC19aflweLx8YAp%2Ftr7mmyUByS7AygRLDkIEFx8X3gr586s3nHAzpdivWwbFjexQ1G0N9NGvGdSvbTud0mJiDZZ40SNbVPSh78U2DSr60pwTPH3yJnD%2B7lzcrrWgTQzF7xZZfo8Vl0vEWVQZWuNKbbEBc8ZMJz43MEGOqUBJeOFUO0%2FFGgY2I4hWCUx%2FiJMb8QDnXBTRTUKfKJ4UZAQqgO3iXXCKhDPjwl1fBMU8t%2FeUFgvuTqtfoX%2BRqXz%2BmtApR5ajLmyOm%2BQBwxjP1oQ4MrQI9CVACrXe%2FuhK0aF1F1Ik7jGLkjk5HeHl5o1EjpHxIYsHSbAe9MvXGZfEISMZTu99BMq%2FAHVp21Uqr7UdDMpgMx4hTG7h4iElPAATCAeI8bz&X-Amz-Signature=eff040878a548c97b7d70610a705acb9248213b7126dac7722412642af06029b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJLNLYC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5I7T6U66r%2B7d4cR0Xff%2FV9TGZzgCH7oUiOBeCOyUH5wIhAIGxfrZFCHlsKezrxtVv2IjcNa5LznB9HM8hzNd8XbM4Kv8DCHoQABoMNjM3NDIzMTgzODA1IgzKgIU1E%2B7tLnS4%2BDwq3AOqiDlPFoQ%2FC0TDieljNkz3QmCkO4ERhqIQdhIwooRFKyz%2BRa8ocNmL7HXl6EfAOB%2ByagKS6HMTRVMxRs6VMHXvCetCyHnnMiui8KNmDYDy%2BgJeq22ZFjMJ%2Bnk2rM%2FpEa%2BFyuT6DwFiOnmRXrohlVWRdgnSLprAhs0OBLKIlpxZ62sfhH6NxXuEIVy8CEnHtDVsjA35m0%2F7ApLHe8VHs%2BUJNsgJi6i5rzVc9DhwVw%2F6vIhZj%2B1al3%2Bjms7t%2B6xBkwQ05isLMPQdTtqFvdZtXdRk5Kuv1XhAdZNvDc%2FBusDBdzqoRnWfSrgxc9yzVsfkyOysX%2BPlLfDFQ3Nb2DqG8a6%2BUWkwwXDc4hi%2F2UjQJuBXAgu9UVBsOs8X%2Bo9rZ5Gdf%2BFkSM2VPQolK79n4Rt0iUUU5YPdWuGgoCYuMWGiT8foYIVHsnGdBxhb%2BmczFArqk%2FOmt3ufw1hWdOLpdRa3MYID6OagA8FUsKe0xTyWcNb8k1F6yqiFbWZe5JEeB6%2F9rUMDc0GYBHbktJQTnOwr02F4fcydF4MyIDsW31AoiBVgdpt2QJ2h%2BayPsZtQJMicuUmLL3hWRcCLvfrEewxPQMkxbKdtrTGgIFBoh9MziUJiJCtmsoHQzdezkZtTaTCZ%2BNzBBjqkAZjkVFrvXeoHL4xYJfnIkftojIAp0E4GJdtx6OAYVxTpH%2Fp1kzwHyhHoyd1vvnLxRAiL5f8boqBdShVxwzWlq226Aw6L3dgIlTxM%2B2MtGEyO2LH18k3DDUUqspU3TubPAdwO9r2PVqg%2FU2ew6frDNejJ0AI%2Bp3chaY8QCwNufIVoI1pnDqNtRpPT5eJP11eU%2FJAZiAJyLAIfuKYAamfqAgL1i9v7&X-Amz-Signature=62f5b22e38fd65ff3a7c700573511bb05b74ff7a9be81e483947c3ffd3a39924&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2HWW5O%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd2rTsegW7NwZ8xFnp5eL6j5kPXstdBu1IO%2F689fM0EAiBYX8Tz8WkmHU697cUjj%2F4D0l9%2BkPdv6VyYRokoR4mevSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMvdcKtpEDCdCdLR4WKtwDpvMISEt8oteqEsVPEYg3Xnr%2BgFebZGS0YOiirWzNm64qLQ6CXWF6bUBZxjkSISvmVOf7ZByJAb3jnEYtrX4sulYK9cpvYwToLJVpijYFdIVTdIRZQfnTFyDDtOLzvB9WFNrkOsIa%2Fie3YPMfRTmx0cF2M3aMyz0uGA7L0CCUoCSybieCZ7bhtJQqB3V5Z0VS8NCJ81D4F9UoT6xzGldgy9R1wZxCsIWUXh05JqeYrwdvYGM27b%2FQZqEhHHmhkGXA8yxiElgKC4y9obru2cRETtufiKWRqbnmYjzfCmYamEAgaHnvioTmHywsRu%2BEjHYQWUX7gn9tW2LmJX%2BIG80kaaOEhMyaryQh%2F1c5AvJ1jH7RB%2BGdTLY%2FC1URRclzcEnaS4BU48NlHB3J0jfKBcMQykHQP0OTh8eaFXqEzC1H2MaGtgaZn5UJhkrFMGzadVtHVbebOT4h9GMv4D54OP52g7cRIOa%2BCtfkhHanszWgfaVaWNXyLjf112c6EpQqlvBULLmYtt8ucbvwghMrnsbb0r5mgC6QG5MNwVj2%2BZg0bAA%2F%2BTyUUKcRy%2FOtzJ%2BCQt2hntMF%2Fj8j2P%2FlNQEtJkgzhcDMII2YtqHX6KPXLl5nYFjuq6SFtbojkZW39wIwufjcwQY6pgH%2BoQcMZD6t2hNIAdLYHiU4yl%2FNW84dAAtF%2Bnaz1ho%2Fwyy1iD2WKeZgJt505UOXy77foOw6rtc0oQ7Br6XXiJJ3gff9ipe69z1NiHtcE1%2BbbsfIRF5knpmF%2FoCTxIZO003xI2S9gQYEuXi%2B%2F5smdqp8KhVTyygCww0LS9FHPnZ58R6mPf5q98rrSJeBFSeGUQ1kqnAhoKsvxHopbK9GHTPbsbVMzOvY&X-Amz-Signature=a7af046b0476bf644bc1cdc829c4ac90afc246869a125adc301525714c02e455&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
