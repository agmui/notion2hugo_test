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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFROAUO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSwjHa2OWfHGXkhw55vm90Hiuw5r4witp2rR9lANrwMAiAq8V%2BXodOLjEJw7SoeMF6Wcw8vj%2B8NFD99%2BM7a5v7VpiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FnlGxvWcH%2FQvF1IKtwDRX3CruMRx0Hc8eAAGCpM1mPM82V60SnHn6diSnYhlB9%2FtYj39qwqbEWS%2BtgP%2BWoE8Zi%2FxxLwczpCRnLRQAxwIJ6TyrKBTER2BaroYumaGOSm1nqJrrzebnl2FuK36agbIsrN4L3grzr5qp%2FwkFIUgTBPfNQt%2FThFFSgyuGZH0DkbxQF%2FiwmuGzPGeDmkGRyAHZlZQHVLPzCR45L%2FEd63cpECOw2we1hRnmqEko7ACVR3ZtXs0vuOcEKAqctypympO8gTL8mITCSTJ2em%2Bz7O%2BYAuDIjLSiGI7jqiJVpB%2B32x4OqA4LehEHhamZ%2FV74%2F3QNLFODjPOp8F%2Fu%2FX1dL826AY0UqqqI0c6AaEOzV3LQ08Zjde0p3yvuYsuJwidz1eSwU947TOzdZw3OSR9lAQe5yq5od%2FczSsGr9K6Ksh6XQQVR3UaimV8c19V4fDUoOwyB%2BBk7jCRC3lTRyPSD0pEIYOuE6Je5TfcdUKtRYZWGjeyrOgqeu58XWiLetqrbhInpnIpHt2y6d9Vebv3LmNmTfWXlAba2rWu4YTHsHIAHqXt%2F6wmJJTDOBzbGPgNuawQqpn8y3i4%2FEqWKjJX9E%2FanVIH7dLzTzIG0kj3iBrLEd1yBhA3hNqSHzvnxIwtLm8vwY6pgGJva%2FQNIu8SAoYVZRcPBHQlj8O%2Bd23mn3Ydfbb%2BPA79k8V1%2FFGyOCbNMnYSqmv%2F8qUqjcF%2FZ2wgyRNkhJeE5ayoV4F5xyWyhZ6pP5XQ7YKo55xn2CFb8VVd72UrDJDe%2FVe2WV2RDr1pJ2r9ET9o3fNtDVA8aZG%2B6aGSzGhB%2FmtvdPSrOQ2YicVADDTRSeqYqVAzfhilH9qsr6rIVfP%2FqFv8u1gWV3n&X-Amz-Signature=3acb74608b13f14708c580fff70e9bc14a35236daf6e5e5132cc28c00416d7da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFROAUO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSwjHa2OWfHGXkhw55vm90Hiuw5r4witp2rR9lANrwMAiAq8V%2BXodOLjEJw7SoeMF6Wcw8vj%2B8NFD99%2BM7a5v7VpiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FnlGxvWcH%2FQvF1IKtwDRX3CruMRx0Hc8eAAGCpM1mPM82V60SnHn6diSnYhlB9%2FtYj39qwqbEWS%2BtgP%2BWoE8Zi%2FxxLwczpCRnLRQAxwIJ6TyrKBTER2BaroYumaGOSm1nqJrrzebnl2FuK36agbIsrN4L3grzr5qp%2FwkFIUgTBPfNQt%2FThFFSgyuGZH0DkbxQF%2FiwmuGzPGeDmkGRyAHZlZQHVLPzCR45L%2FEd63cpECOw2we1hRnmqEko7ACVR3ZtXs0vuOcEKAqctypympO8gTL8mITCSTJ2em%2Bz7O%2BYAuDIjLSiGI7jqiJVpB%2B32x4OqA4LehEHhamZ%2FV74%2F3QNLFODjPOp8F%2Fu%2FX1dL826AY0UqqqI0c6AaEOzV3LQ08Zjde0p3yvuYsuJwidz1eSwU947TOzdZw3OSR9lAQe5yq5od%2FczSsGr9K6Ksh6XQQVR3UaimV8c19V4fDUoOwyB%2BBk7jCRC3lTRyPSD0pEIYOuE6Je5TfcdUKtRYZWGjeyrOgqeu58XWiLetqrbhInpnIpHt2y6d9Vebv3LmNmTfWXlAba2rWu4YTHsHIAHqXt%2F6wmJJTDOBzbGPgNuawQqpn8y3i4%2FEqWKjJX9E%2FanVIH7dLzTzIG0kj3iBrLEd1yBhA3hNqSHzvnxIwtLm8vwY6pgGJva%2FQNIu8SAoYVZRcPBHQlj8O%2Bd23mn3Ydfbb%2BPA79k8V1%2FFGyOCbNMnYSqmv%2F8qUqjcF%2FZ2wgyRNkhJeE5ayoV4F5xyWyhZ6pP5XQ7YKo55xn2CFb8VVd72UrDJDe%2FVe2WV2RDr1pJ2r9ET9o3fNtDVA8aZG%2B6aGSzGhB%2FmtvdPSrOQ2YicVADDTRSeqYqVAzfhilH9qsr6rIVfP%2FqFv8u1gWV3n&X-Amz-Signature=f249e1a49fe2d166a69fa11257fb826b95b3bf4ff99eedda0b1197312f07e687&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J2YPOSO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWNYSjYx3F1a7epUUZZHdMlJdsYQhOz670BFu1yhvYPAiEAk5mvNwWBRNrzFMEnbuQ%2Bf0qXdLrchqBYEz1HkctSrZUqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlb8lSUfSRVSfv%2B7CrcA5ghIrzgmLNC62%2B2WuyySwrDud4IR1h7l8d74BdFNAlvXv6lgdrkPKQJCtRrDYqKzGMxZstBg6rzRtUsJNy2JC6nMQIvNAXq0deqEPuDO%2FEbD2bPON%2Fd4fwIZTYjomTqRwEHObFgW7Bg6BiFiJypVUf8xYl5VenSi0%2FSLETylBWT4Kxar7VggyPaDP0en8QUGnUB5NPgVojrtnacnAK7MHCQG%2FGLyRK5C%2BKoPEqPuDNLMEPfJABLPFovMVqDosLtCN7xluOQCmuoM%2FOOQIvSLGkVVHHcOylFqSZq8%2BxYIPvd2qsnmLstVwRoXLxJiwCoLKoa9qEimVJwLEcoRhE93UuFpfZT1ioK%2B9BQ8Wzjw50vVE8DzZSbB4KNIEFm17oN5KTbHhqlc%2FluvJ5W%2BrWeBKay4D2WhliJKq%2B1WqdaU6nIMcb%2FCA8WPnr1VQ6x9MhSlzLXwLguBTT%2Bcv%2FUPRrsRWACqKd9mvUyRXD5uxwoi4hIidh3C7NybstFz4jH%2BzOR9Mr4fqOzINk6xaq1kGN7M3SPxUpe7uIyrCKftzJHosrROo6mJc%2BpO9l815STsYvnSvdykSvt%2B5ns4rjPQfWup%2Fcl%2FJP%2FkM%2BDJIrxSynFV6j93CHGdM8N3KLpgTVOMIu5vL8GOqUByDafFF3qVMNGJr8J4YRhEn56TMz79Obder36baNzIwMPv6OmPEeVIf5oLmughz%2FPU97IQmq6Gov1bR2ffBic0K6qUEpTrLjlrTDJFw7Z1oZZjEym8ajbF0NJZ2IEmcvVEc7nASEWup%2BBHE7U8P%2FD%2F1qpagoRoJrxOha86x21b%2FAPHtSgUs9OIVuV5JrsTOdJFgVGJgfiXc1hd1rW6GlJfBcIkkjB&X-Amz-Signature=f76ec8a7e17e7b4f89bdc3bcd1fa743d6e65c12ba94f883f1f1d103e736c35fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA65PVW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlygXbDkI71FfzrlwMOYy9bU7k7OHRzJDdYLkFg%2BOAjAiB7qbJMOz3CAbME%2FbqzPug2sopwJoRKFGgjRZq%2F2DTvkiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjlo%2BmUTltoS9zvYNKtwDLtUMi6hxHdMYxSe6u7SY50uh5J7ukM21qQ%2FZzHpONOoTb%2BLednUhxYODPai3b01ayj42QE8dU3x6xUg3eWRWOtkgN0Dk6Y%2FDXWI7dZtvmpNqWNUR%2BnSouvsgvoaQyPyv1Bxtjp3LkDjJLeByNRLMYyoCOfbzpNw9T5bE5yStg%2FXysEzE95%2FaPOZuZD7cUmFee5oN1b9sNtjyEgjyURzmQHOXOM6n6tJjFfgAT1N9hR%2BsDjPmW%2BQjtJlPbAzATeZQ7sHDPdQyT2zFdmc5GdprutMMGacXljOSR8Bk3dFRc5g9G%2Fixqp%2BssfokNuTTrD8U5vf1I8ydj60fsJBMdxEN0CKOP%2Bb%2FVdr0xKkcnvH7ZwOEhOSK%2BrN3jtUkiNqaNjzcsU7B3Cu%2FLPbqDYXwv8BKWlcdTrXyUoBOpQKn4UvBE8akIgLWRzlO733Uft05BkeSlDrLWcJZbd1wBKlI%2FgcVg9tvO8NVe835%2B5%2FEcUcfb7psBqq3ZkoqTC1se7F%2B42NF3217lTI9Ngekr61S5wojrVM8cn8ztuf%2BOkfGbeRw%2BKTFSSlnW8d4LBEdMDGLnDU0LD7aJKR5LsIzitw2JUgPpGaImOT8Mvz8OVbTNDS63obJtQ0PEyf%2FdZM41Dwwnrm8vwY6pgGqtOXfjG1rUPW9%2BMm%2FE1%2B5j6IgWIKzwB6UjFQFvY78Vb3DFGvCWOxh5CSxNaItYAqCQqesPmp6hvi5iawi99EJ4qqnBmRlcFm5CBVUAJytBJeCEk4jDUW2x3kgUMAqOYGC8hRRs94YdNMdh4r0xh5GGv2ryebj1gmxS1ffwpo0ACFqA12VjVj8gu6wmIDtIEPoiu923atnimfU7qajJiccBHgMcWiI&X-Amz-Signature=78e983a2b3f0199923d425d8d58703adb926593323c1da547ade82613dc74081&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFROAUO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSwjHa2OWfHGXkhw55vm90Hiuw5r4witp2rR9lANrwMAiAq8V%2BXodOLjEJw7SoeMF6Wcw8vj%2B8NFD99%2BM7a5v7VpiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2FnlGxvWcH%2FQvF1IKtwDRX3CruMRx0Hc8eAAGCpM1mPM82V60SnHn6diSnYhlB9%2FtYj39qwqbEWS%2BtgP%2BWoE8Zi%2FxxLwczpCRnLRQAxwIJ6TyrKBTER2BaroYumaGOSm1nqJrrzebnl2FuK36agbIsrN4L3grzr5qp%2FwkFIUgTBPfNQt%2FThFFSgyuGZH0DkbxQF%2FiwmuGzPGeDmkGRyAHZlZQHVLPzCR45L%2FEd63cpECOw2we1hRnmqEko7ACVR3ZtXs0vuOcEKAqctypympO8gTL8mITCSTJ2em%2Bz7O%2BYAuDIjLSiGI7jqiJVpB%2B32x4OqA4LehEHhamZ%2FV74%2F3QNLFODjPOp8F%2Fu%2FX1dL826AY0UqqqI0c6AaEOzV3LQ08Zjde0p3yvuYsuJwidz1eSwU947TOzdZw3OSR9lAQe5yq5od%2FczSsGr9K6Ksh6XQQVR3UaimV8c19V4fDUoOwyB%2BBk7jCRC3lTRyPSD0pEIYOuE6Je5TfcdUKtRYZWGjeyrOgqeu58XWiLetqrbhInpnIpHt2y6d9Vebv3LmNmTfWXlAba2rWu4YTHsHIAHqXt%2F6wmJJTDOBzbGPgNuawQqpn8y3i4%2FEqWKjJX9E%2FanVIH7dLzTzIG0kj3iBrLEd1yBhA3hNqSHzvnxIwtLm8vwY6pgGJva%2FQNIu8SAoYVZRcPBHQlj8O%2Bd23mn3Ydfbb%2BPA79k8V1%2FFGyOCbNMnYSqmv%2F8qUqjcF%2FZ2wgyRNkhJeE5ayoV4F5xyWyhZ6pP5XQ7YKo55xn2CFb8VVd72UrDJDe%2FVe2WV2RDr1pJ2r9ET9o3fNtDVA8aZG%2B6aGSzGhB%2FmtvdPSrOQ2YicVADDTRSeqYqVAzfhilH9qsr6rIVfP%2FqFv8u1gWV3n&X-Amz-Signature=0da39dc35a77535b48aecc24568755914ba34b1ec6bc6aac756ce191731c353b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
