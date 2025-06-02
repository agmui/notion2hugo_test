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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUXULA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGC2E20KmbBcmsG8Th7T00aLcPNsqPqzd%2FcNLerDkEC%2FAiA55bafUp%2BKSt36BLzBjC3%2B%2Fj0BPwiyWMO7p9sudl0EvCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnoLIB1pb1lqQRzGKtwDSWaovFHenlab3rEc7dg4Mu8BYWqemxPF9Sx8UQBhoBwkAqzLxofnYAY6Q7oV51OFtJ6Oj8D55x3Z3RxNfbAH0o5LIOzWSbTSRjkZTB%2BTfOuW61NU7%2BD8h05D79KCiO4doCVvKZcN%2B1eHdINnbHFGd%2FKJD3KDay4EuDfptkec8IgVut71OecC5YRyfBhU3DbhhAtEWo81jDPMFzzp7p4dBFAAKHmGwJW1r%2BSoo9oS44%2BCqZxe%2FqzyMACL6OoJRLeC6I6wNpCpInCqp02xQZgnxo8Fu%2B9IGcPVAZn6NBSZKQVZDBktvkO2UdCmZy8qZvMboNnsCo17dkNCJjcqImmeT46mx1InU2tdXq0HcIE4J4uWiNsOS6ylzHOIoDAxX1k2wHzpNeAOhmsx2J5J1slWM6eNxtRoNNuPNtwOyM3X1XTLC9c4Q1zwIhy5W%2F8K9SJ%2F4Tw2MqI6m0ERu9gTIO7BPzg8rN0qgK6y9LbvEAL5TXyX006IJ5KO3j4dpL4cKjyQguKjvUq%2BpZ8UPAOpjdTi4EM7nmE3nI87rYvb1taj9g7MODPNdUDoeWNE3%2Fa08Wl6kPpExDaAD839KmmfFzgHAoAvYc8Js8viQnCoHsTk6IHQgO9IiJre00NWBt8w%2BOH3wQY6pgF7kgo5eAdB8gQW0K5ltr%2BfsDhTU8%2B7ajhSj4Eh%2FMeyRjnYfgJ5dNS4skSd1ERx0UEkwdwJ94%2BZ4Og8pctsOeKXDj7IHUCoeF7D3p2iyjfAhfrc5CelIehKx1ZCYhuXU%2FRVUCCKOYr%2Bw4Cd%2FMXxy0ZIOvW1bK6kqRbzFkX%2FhGZCYvYIUo9zFMmqNDDV7YZ3w4qc%2Bt89oZmvz0VUhAsS0Szm8rVnNlcQ&X-Amz-Signature=e47caa053a55001b6ec541741fe2606a3bea7d3306839a1b96d33c0add6c828c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUXULA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGC2E20KmbBcmsG8Th7T00aLcPNsqPqzd%2FcNLerDkEC%2FAiA55bafUp%2BKSt36BLzBjC3%2B%2Fj0BPwiyWMO7p9sudl0EvCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnoLIB1pb1lqQRzGKtwDSWaovFHenlab3rEc7dg4Mu8BYWqemxPF9Sx8UQBhoBwkAqzLxofnYAY6Q7oV51OFtJ6Oj8D55x3Z3RxNfbAH0o5LIOzWSbTSRjkZTB%2BTfOuW61NU7%2BD8h05D79KCiO4doCVvKZcN%2B1eHdINnbHFGd%2FKJD3KDay4EuDfptkec8IgVut71OecC5YRyfBhU3DbhhAtEWo81jDPMFzzp7p4dBFAAKHmGwJW1r%2BSoo9oS44%2BCqZxe%2FqzyMACL6OoJRLeC6I6wNpCpInCqp02xQZgnxo8Fu%2B9IGcPVAZn6NBSZKQVZDBktvkO2UdCmZy8qZvMboNnsCo17dkNCJjcqImmeT46mx1InU2tdXq0HcIE4J4uWiNsOS6ylzHOIoDAxX1k2wHzpNeAOhmsx2J5J1slWM6eNxtRoNNuPNtwOyM3X1XTLC9c4Q1zwIhy5W%2F8K9SJ%2F4Tw2MqI6m0ERu9gTIO7BPzg8rN0qgK6y9LbvEAL5TXyX006IJ5KO3j4dpL4cKjyQguKjvUq%2BpZ8UPAOpjdTi4EM7nmE3nI87rYvb1taj9g7MODPNdUDoeWNE3%2Fa08Wl6kPpExDaAD839KmmfFzgHAoAvYc8Js8viQnCoHsTk6IHQgO9IiJre00NWBt8w%2BOH3wQY6pgF7kgo5eAdB8gQW0K5ltr%2BfsDhTU8%2B7ajhSj4Eh%2FMeyRjnYfgJ5dNS4skSd1ERx0UEkwdwJ94%2BZ4Og8pctsOeKXDj7IHUCoeF7D3p2iyjfAhfrc5CelIehKx1ZCYhuXU%2FRVUCCKOYr%2Bw4Cd%2FMXxy0ZIOvW1bK6kqRbzFkX%2FhGZCYvYIUo9zFMmqNDDV7YZ3w4qc%2Bt89oZmvz0VUhAsS0Szm8rVnNlcQ&X-Amz-Signature=8f2ffaefc44de0a3ff994e39cee606abcbcebf988118363a8719270020504227&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUXULA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGC2E20KmbBcmsG8Th7T00aLcPNsqPqzd%2FcNLerDkEC%2FAiA55bafUp%2BKSt36BLzBjC3%2B%2Fj0BPwiyWMO7p9sudl0EvCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnoLIB1pb1lqQRzGKtwDSWaovFHenlab3rEc7dg4Mu8BYWqemxPF9Sx8UQBhoBwkAqzLxofnYAY6Q7oV51OFtJ6Oj8D55x3Z3RxNfbAH0o5LIOzWSbTSRjkZTB%2BTfOuW61NU7%2BD8h05D79KCiO4doCVvKZcN%2B1eHdINnbHFGd%2FKJD3KDay4EuDfptkec8IgVut71OecC5YRyfBhU3DbhhAtEWo81jDPMFzzp7p4dBFAAKHmGwJW1r%2BSoo9oS44%2BCqZxe%2FqzyMACL6OoJRLeC6I6wNpCpInCqp02xQZgnxo8Fu%2B9IGcPVAZn6NBSZKQVZDBktvkO2UdCmZy8qZvMboNnsCo17dkNCJjcqImmeT46mx1InU2tdXq0HcIE4J4uWiNsOS6ylzHOIoDAxX1k2wHzpNeAOhmsx2J5J1slWM6eNxtRoNNuPNtwOyM3X1XTLC9c4Q1zwIhy5W%2F8K9SJ%2F4Tw2MqI6m0ERu9gTIO7BPzg8rN0qgK6y9LbvEAL5TXyX006IJ5KO3j4dpL4cKjyQguKjvUq%2BpZ8UPAOpjdTi4EM7nmE3nI87rYvb1taj9g7MODPNdUDoeWNE3%2Fa08Wl6kPpExDaAD839KmmfFzgHAoAvYc8Js8viQnCoHsTk6IHQgO9IiJre00NWBt8w%2BOH3wQY6pgF7kgo5eAdB8gQW0K5ltr%2BfsDhTU8%2B7ajhSj4Eh%2FMeyRjnYfgJ5dNS4skSd1ERx0UEkwdwJ94%2BZ4Og8pctsOeKXDj7IHUCoeF7D3p2iyjfAhfrc5CelIehKx1ZCYhuXU%2FRVUCCKOYr%2Bw4Cd%2FMXxy0ZIOvW1bK6kqRbzFkX%2FhGZCYvYIUo9zFMmqNDDV7YZ3w4qc%2Bt89oZmvz0VUhAsS0Szm8rVnNlcQ&X-Amz-Signature=756d50787d814d0627aaea90435de29012c154a7abb350bc1877b30b06930e54&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMFXUNX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAjYd44AdLbaqrHXijEuVQDeQsFmEMyvUPoggEoKVtg%2FAiBmgQPR6jYxIcdLB3WtGIt%2B4q72wITCAcC7AHPruhUsICqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoZ6zhRrwBICclcPtKtwDnHx9dLOJnKF9SfFKXlUizUOd2HA6w806sggqn%2B9nbvXqJwcnKxZrKSM3HVJ%2F9SSedCPw3vt5OTRCOiWw3cVaK7EO9aji5T2S7PNdJoid0w11sMUUKXqjaXzsWbCEkx6fOxxQ8ZlBCFSsBFZB%2BTVqJagMZzqpWnuVGIcowsTg0JxbxlJOeYs4oXcr%2Fts4CABVdNhTnInz7jimRhBpxKzAfXZ%2FRj8n5NLsBEHlEwnTFRyO%2B9rTzkTOzrHnqMDANulwcOIV9yLXawVMUcddZJ88HSDTyghpjeqcmCqDIcrKilwT6M2XCdPmY73uAqmn37XQ54bOFit1SexrlDPBWtYnEUCcHgXKAHjfxbzR%2Bm7JgKX2LZPlPX4SDBFiPqUz318pe7DqsL7yu3nDPqSSBDy9UJoimMYxY42PPmvwEdCea1%2Bky9piTzAJrWSL5Wy9hciXTQvZMAxIoYWIVcUqGIwDY2pcnoyxwvPMFJDQfy3JAwXSWSfu0AJm3np%2BYHcfzo7EUyu99Yf1IHzglzOSfdQ9Sp767hvOj7Ey6RrtaYWjutgvJMH%2FDluTtDyksHBcvyrpZIgWINw%2BOW0o5Copi%2F76SHNZHCdUKrnwuT%2BfQjdN7BhxbwStjoqk6nMm0rkwl%2BL3wQY6pgHfnzdAgoCNxevt81fHJ5sIACvJNQJvL0jXLrnH9OTlL5IUPCrIp3rM%2FNb4e%2Fb4UKiaGAK1VRUqGKuh%2BtV9AwGV6hVVvAcffRnX5MsjgyHJCwvdQEmulRZHT5cq48FtuvdToT9SAghNUMS0NXif7fusd9k%2Bxu%2FZ1IMhXk1IQdHSvDC85OfHHnb1kshJLxm%2FEtRczaMPJ9jhYIXSIArA2oCo8AuKWVBZ&X-Amz-Signature=814e52f75a590e29237833ad35cd15b45c9be402295502a3576a17ca774e3141&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYBZT6VY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAnFlsob8NEXo8XsE9jpuRuRqAAHaAfTd3Sr1Cai3iAqAiBsDIZsIwp9v4qhUVN570Wx1LEOOlT3LD7pH3lSSUVdGiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe37egjXByJwJXsCuKtwDpG8wJMD8jeE7sQYUhXIij9IsZPEAw966CcG8z5nmBO9TQKaP3ys4W8IUltuGnbOeeRhma25Ke9z%2BFSGvfAKEM5cAAvZ84eMhGP5Ad0S9mcXodAryegHdDIXVCat1hm12ybh7isNp6dKHsX45MM8ORoixlDNe7A0b1Au2425zBQeN%2BS8dBmCxTvpWw5oASI6E6Q3bGlfW3rrozHz5c4CEUh4%2FVKmM%2Fs5%2Beo9T8nhjor%2F55hW08mx8rKGDcKQlVGj5fUlVQMK6PynuqnCSeztGp3eAQq1vlQrTYsPsozAjpI4FBJ%2BE2IK32qTj5aNEBdNGxxxR2na7eJSHU3RnPELy%2FNffuK2LVGPZyKSK8bCD9n7YXKKttMQsQ1oO85z6Tu5ZkgH3cLK6k6cUuHGD%2B1450jpm7E5UO8Exh4t68gEKHS%2FMw4hwkoPl8UAtEbmp8dFVLzTgPbbnpNYMLCRCew3QtaSdnJRkECzIQ1FPmUL0Q%2BFMs7OyMw1JQEI5QXsuDFLWE1TiJ6NzMND5T0amrKIL8XqWB9EjF%2BZVCaeMfdjrJ5YTHokK%2BwshF1Uf%2BhDQ4zvehu7%2BrGIVv21p38M%2BPunfqKsXbxru4Oh9d5zte9uABCzTkuhgO3ZnM6ZsHdEwweL3wQY6pgHOjVCau4GgIzRqJz8RcG0pILCknlzxPpu1i3rtFs5jVni7eFmXhnNfj8IGTKIHsR9m8uPcyPz1SkTy01FYHL1kYonWFk2OCG66ayl5ccL2T1wZjAqDuPA36652qtIjWRRv7UO%2FzSaxM59v8ztHeV9oeVSifh5a85oMqGyBGBXaKH5nLe8nteE4qgtqI9lAYdTLVpiorcDx%2FBZtyBcW5YkaD9S51390&X-Amz-Signature=0f22e0b7766cfe7f6a213035cec7e927286aa3ffeb9a20fb36eddc7e02646e27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RVUXULA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGC2E20KmbBcmsG8Th7T00aLcPNsqPqzd%2FcNLerDkEC%2FAiA55bafUp%2BKSt36BLzBjC3%2B%2Fj0BPwiyWMO7p9sudl0EvCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrnoLIB1pb1lqQRzGKtwDSWaovFHenlab3rEc7dg4Mu8BYWqemxPF9Sx8UQBhoBwkAqzLxofnYAY6Q7oV51OFtJ6Oj8D55x3Z3RxNfbAH0o5LIOzWSbTSRjkZTB%2BTfOuW61NU7%2BD8h05D79KCiO4doCVvKZcN%2B1eHdINnbHFGd%2FKJD3KDay4EuDfptkec8IgVut71OecC5YRyfBhU3DbhhAtEWo81jDPMFzzp7p4dBFAAKHmGwJW1r%2BSoo9oS44%2BCqZxe%2FqzyMACL6OoJRLeC6I6wNpCpInCqp02xQZgnxo8Fu%2B9IGcPVAZn6NBSZKQVZDBktvkO2UdCmZy8qZvMboNnsCo17dkNCJjcqImmeT46mx1InU2tdXq0HcIE4J4uWiNsOS6ylzHOIoDAxX1k2wHzpNeAOhmsx2J5J1slWM6eNxtRoNNuPNtwOyM3X1XTLC9c4Q1zwIhy5W%2F8K9SJ%2F4Tw2MqI6m0ERu9gTIO7BPzg8rN0qgK6y9LbvEAL5TXyX006IJ5KO3j4dpL4cKjyQguKjvUq%2BpZ8UPAOpjdTi4EM7nmE3nI87rYvb1taj9g7MODPNdUDoeWNE3%2Fa08Wl6kPpExDaAD839KmmfFzgHAoAvYc8Js8viQnCoHsTk6IHQgO9IiJre00NWBt8w%2BOH3wQY6pgF7kgo5eAdB8gQW0K5ltr%2BfsDhTU8%2B7ajhSj4Eh%2FMeyRjnYfgJ5dNS4skSd1ERx0UEkwdwJ94%2BZ4Og8pctsOeKXDj7IHUCoeF7D3p2iyjfAhfrc5CelIehKx1ZCYhuXU%2FRVUCCKOYr%2Bw4Cd%2FMXxy0ZIOvW1bK6kqRbzFkX%2FhGZCYvYIUo9zFMmqNDDV7YZ3w4qc%2Bt89oZmvz0VUhAsS0Szm8rVnNlcQ&X-Amz-Signature=652a929137ed1cf7851a860e0bb304448595475b31c2f060cf2f9c35d2c143f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
