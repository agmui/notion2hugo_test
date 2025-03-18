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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPY7YPE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEjuHa6X%2BO2y97KVqeiyUyasM76W4%2BQTIW9AnFEZ8PTAAiACZjAgV6d6lRVCCipUqNEbZovYvv23vj%2FjyFJINgjdDCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMgh8lFq%2BfLDBKJuGVKtwDOkXyAbmPhUbGcjo1KOj2S6jEcIcHaODF4S%2FwaUx4J%2Bu2YIFUie1xRxIjfeF7YCdLLfQruHwrRBN2hbwKzWl8b99LWkbl6AScumDEJL8QCPC3r%2BHiXi14hh2HnDhUCx%2Fq0%2FMbtmtlHLqaSKmM7Q5gu7twv9LksloAks%2Bun9etl2YuHTaU3FCZV4KRUqp7AZy4rqfBc1c6ZG4wfv1anleULGjTLZMUdpaQzJKJkR50mDB92Lhad9BWjlWX4o8aqv%2FYjZCXsO1EQf89lgcau4p0HdNd8LNu5ljjItcxvVI8iIAeVnhEIygdFTxEnlvVst%2Fz7qL5w9lRhEr02SoiwgTEjbzo0CJ0wrk1%2FuWhEyhrCP4emOPyNMbu2NQQH6thzDN77iG5vjdje%2BFQhwx%2B5yHR9AAH63qhEhHb8J0ITSgST9v%2BKuOU9f9Xyvh8lrek3zx9FA4%2FCuRoFa0jtzGDBFozehDyqRSZ2C8ZoV79YzhdAWKEQwvaqAhnjDBKHcmXbVhPqA2NRXhqyhVvK0PL18RLzICqBE9iOh1yhQ7srhpS1g5QD19FuPfZCC365Qimi%2F%2FFQLBCjVifPc1F4nN79Mqezxtgw8F70JjmwkJoHA5sjjUD2v2BRabOiCIko9Iw8JTmvgY6pgHWY%2BwFJPbJhAPwggt2P29%2FB3jt0JSNuLmeShJiKUtHfjHgh4i44dA437O27Qm4hBOSiYLgramOV1CVgEDYcWjcXj7AMPKvjXZUZDCEcyXGw6X91wBueIfwkIYq9uaqDDE7XxX7nhShozrgM6at2kZoNWgd4ZUZzz0rv5bmqLP8ZFIVeiibgaCFq95%2FTPGdQR2yWHRbcUEhED36BU7xpPFM1C1SEdD6&X-Amz-Signature=3a420120771c546d4f37f1c382dbfa8acfb79e99d8eb8882f55de1494e161418&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPY7YPE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEjuHa6X%2BO2y97KVqeiyUyasM76W4%2BQTIW9AnFEZ8PTAAiACZjAgV6d6lRVCCipUqNEbZovYvv23vj%2FjyFJINgjdDCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMgh8lFq%2BfLDBKJuGVKtwDOkXyAbmPhUbGcjo1KOj2S6jEcIcHaODF4S%2FwaUx4J%2Bu2YIFUie1xRxIjfeF7YCdLLfQruHwrRBN2hbwKzWl8b99LWkbl6AScumDEJL8QCPC3r%2BHiXi14hh2HnDhUCx%2Fq0%2FMbtmtlHLqaSKmM7Q5gu7twv9LksloAks%2Bun9etl2YuHTaU3FCZV4KRUqp7AZy4rqfBc1c6ZG4wfv1anleULGjTLZMUdpaQzJKJkR50mDB92Lhad9BWjlWX4o8aqv%2FYjZCXsO1EQf89lgcau4p0HdNd8LNu5ljjItcxvVI8iIAeVnhEIygdFTxEnlvVst%2Fz7qL5w9lRhEr02SoiwgTEjbzo0CJ0wrk1%2FuWhEyhrCP4emOPyNMbu2NQQH6thzDN77iG5vjdje%2BFQhwx%2B5yHR9AAH63qhEhHb8J0ITSgST9v%2BKuOU9f9Xyvh8lrek3zx9FA4%2FCuRoFa0jtzGDBFozehDyqRSZ2C8ZoV79YzhdAWKEQwvaqAhnjDBKHcmXbVhPqA2NRXhqyhVvK0PL18RLzICqBE9iOh1yhQ7srhpS1g5QD19FuPfZCC365Qimi%2F%2FFQLBCjVifPc1F4nN79Mqezxtgw8F70JjmwkJoHA5sjjUD2v2BRabOiCIko9Iw8JTmvgY6pgHWY%2BwFJPbJhAPwggt2P29%2FB3jt0JSNuLmeShJiKUtHfjHgh4i44dA437O27Qm4hBOSiYLgramOV1CVgEDYcWjcXj7AMPKvjXZUZDCEcyXGw6X91wBueIfwkIYq9uaqDDE7XxX7nhShozrgM6at2kZoNWgd4ZUZzz0rv5bmqLP8ZFIVeiibgaCFq95%2FTPGdQR2yWHRbcUEhED36BU7xpPFM1C1SEdD6&X-Amz-Signature=b9b27f8bf60fa3df21134afa51bf52609cb8e840bc72f1a94fbb12a73b57cbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNEZ6R35%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHR6EsCjCaJ%2BMWM%2Ba0vKa2uCXPxc1GVCEqg7OFFS8ApvAiBTKxCHanK6J6UzgCnzLhmirS1MDCwGnisasWCAnHsP3ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMxqOlkSfLZv6DYQP%2FKtwDQ4lcR6SZBoonwueWcExDm7Xc0dvuQ3PydCbtOC%2Fs3NVifX76jCXnIaZR8LRqzj2nUy0rRh6GI7eVZ%2BzicIFh88THuSb7C76BOU5V8sJbuGAK6yE4PExvEsiUd5qtMNDR0hew0gGGuqjj6P8UJWNgf8RzLG9y1wn2cON1miGoPI9in%2BI7jFtDdOZ6l8DoOaN66bhzqXobiPaCplu1hfdGt0L%2FRRhUQodBWBzXIM%2B7KD4CfjfAWlZ6fO2L6PcEh%2FyLMiI3lMG4ThBjnAvgYD%2BhYRi4eaaWBRNP7zmPm8eTh19IL2qdHw3mgDHMdvGr3pgGUR9wAeeh61mEy0GroqLG%2BV1kBFsXj1gdD1h52tRzQQ6OEoGaViUCczPnJZxifNs3xMr3G2PdfKy08CeNmUDVWGwhlye%2FRoB%2FBiFYVAMWZVw5q07TxDo1LMJj5lp9WNao6jjPlUEmuiJdkowFWOBFyYt5jDJiu6OmrouBLBHqAJxphBQneXhXIFzokCFeoFZO7KFq14f0jed2WtlN7kpZcqUwcA4%2Blmqp7xQ44e7Pw3DayntGtwIOAfNDD79srCLZI8Xo1hbQvgkwvVanUk4OH3jsLcw5qC%2BCtMGi4u5lUYpfRfoU%2FhCtd2JeWXQw85TmvgY6pgHRbm3ZT19Sx%2FrC6TueOtn7qRLVDrtoLpmfiHmEYKYNz1NRr8JryknCHD0LYQXUqUhhRzmfpFR3rLHaeLkyaJSK6fZhOswtoKAiqmKr8%2Bu7eXFe%2F2B8YKtWQjBI7rzgog2UMhRV%2FKHCxStSABh3J7Mdcei2FPOEl%2FqpRuy9szOsK81lNqUPbl34NU4SNvhiNnhQ4Mr1etH%2FR5lmIeKz2TQynRmpgmmv&X-Amz-Signature=7da8e4ac5c43df961ad8cc49c25e7ce31b3d3e0bafca58b4ea0d257e49f7f30c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDSNERZK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDnODox%2FTSduhmh%2FSjMSOcPPYSS9nCHy2r8shw2VziapAiEAsm0vI4AkBTDl6hX%2F%2BzCIjiHuHpNbQpuEsVUxmH65QXsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDH5uHoPrcbKnN5ioCrcA4wmertmEhXI0bAFFxLYyHAA0Wh0pEEgt3YCHlzYvft4jH9%2Bo%2BrhvVcplt8qoWrsgqLKUqJRAMIS44YfAZF0hXqZ%2BYTJF9jIavZNPq45wY32Ybp8GVs9Gz%2FABgnUw7KbtSowx5vUM9Pvgih3DTrz4fsSkuaglPbr5rUJ8n9JDAzPNdnMCKjZn0JqsjfYzp%2BQ2m8QejsKRLL8FopRSoYNY3ej7hn7ufqUWFRQ4QSkKO62LdMfYov0tLWmH8uzeb5CKXJzDuE2MAeHur3yJqkHIhxx48M3AwUJkf0j1q96V0DQfGZi0LCdG03tM9ebrk7UzAj%2Fm3%2BiWErIWNwj5vyxnGg3VZiopkjcT0H%2BMfe8XxMkus6bzfNpKzr6z%2FyTIN%2BjsBxyDRIBtrOdvhbGQKLogYH7RgJh9i9TIXen9RhF8tIGz6NpLB%2BzSxneIv%2BlHk4Vf7eqdIHnmKTmqi%2B2njxK9OUwUL5C2Rz%2BhDfDhV1MSRmI9VBWWk%2BYwcldvIOAV92Kq4%2BrPvooSGRoCdIODxd%2FRgczrmRe9Rt1IyujgZ0NkhGR51NWugyIfK1fmzV9f1oTar7K4Sw7m2%2FR4z%2FyZoNyZXxJJqoSZ%2BX9XfsHg7pOhk3o5JO2rHV7Iv0K8OhAMNCU5r4GOqUBYQdJ7uJETqUwQfAmZtylLzehgGinPmCQLoQwHtbnzumPPdX4HxSo3RdIaO5qrqmbwn%2FhN8F8KPbq2AxxuI27JIdeWwN6Kx5D6A2MAHrEX8%2Bj9RCNobGid7CPrdNU%2BnVaTG5cyQftnVrt0dw5YQFlyOMus%2B23PiFDoncY9kl7feVaGI2SUbUkWKEaf924awAv20%2BTPqBMIRIZd1u%2BZkyI4B6NUr%2FG&X-Amz-Signature=dd4b4760a8aa865466562314da703a0b428644d2a5275757e16d153dc3286a77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPY7YPE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEjuHa6X%2BO2y97KVqeiyUyasM76W4%2BQTIW9AnFEZ8PTAAiACZjAgV6d6lRVCCipUqNEbZovYvv23vj%2FjyFJINgjdDCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMgh8lFq%2BfLDBKJuGVKtwDOkXyAbmPhUbGcjo1KOj2S6jEcIcHaODF4S%2FwaUx4J%2Bu2YIFUie1xRxIjfeF7YCdLLfQruHwrRBN2hbwKzWl8b99LWkbl6AScumDEJL8QCPC3r%2BHiXi14hh2HnDhUCx%2Fq0%2FMbtmtlHLqaSKmM7Q5gu7twv9LksloAks%2Bun9etl2YuHTaU3FCZV4KRUqp7AZy4rqfBc1c6ZG4wfv1anleULGjTLZMUdpaQzJKJkR50mDB92Lhad9BWjlWX4o8aqv%2FYjZCXsO1EQf89lgcau4p0HdNd8LNu5ljjItcxvVI8iIAeVnhEIygdFTxEnlvVst%2Fz7qL5w9lRhEr02SoiwgTEjbzo0CJ0wrk1%2FuWhEyhrCP4emOPyNMbu2NQQH6thzDN77iG5vjdje%2BFQhwx%2B5yHR9AAH63qhEhHb8J0ITSgST9v%2BKuOU9f9Xyvh8lrek3zx9FA4%2FCuRoFa0jtzGDBFozehDyqRSZ2C8ZoV79YzhdAWKEQwvaqAhnjDBKHcmXbVhPqA2NRXhqyhVvK0PL18RLzICqBE9iOh1yhQ7srhpS1g5QD19FuPfZCC365Qimi%2F%2FFQLBCjVifPc1F4nN79Mqezxtgw8F70JjmwkJoHA5sjjUD2v2BRabOiCIko9Iw8JTmvgY6pgHWY%2BwFJPbJhAPwggt2P29%2FB3jt0JSNuLmeShJiKUtHfjHgh4i44dA437O27Qm4hBOSiYLgramOV1CVgEDYcWjcXj7AMPKvjXZUZDCEcyXGw6X91wBueIfwkIYq9uaqDDE7XxX7nhShozrgM6at2kZoNWgd4ZUZzz0rv5bmqLP8ZFIVeiibgaCFq95%2FTPGdQR2yWHRbcUEhED36BU7xpPFM1C1SEdD6&X-Amz-Signature=4c9076fa0c13fa391bec12fc10a2b5b4c26fa2832cc15010d414c07e0b6abcfe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
