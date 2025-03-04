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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6C4PGB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWen3H6dLcm7R69nlMSK99qmyz5nKnxhcVbZ9ynDPu8wIge1O8Oua8QOymfUzR9GP65FOLNGLKLqQT3UZMAOw%2FVDMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkVtF9kZ0y8ZSu0vCrcA%2FqBZyGhR8aZxZ3ZuRue0knaDjr3fdgEBiXucys8GZkdy5s1AC4ZQTzSo6CjNNx1i68VtWNnZbF6%2FWnPRmr6D3NzT9f3NjIswZFaql6NgoV2cUWYSW2zDsinCuCLoEdSOiEWYQQDdK%2FlvK4B8L7deVi%2B32s26rBIXxafwwAYZVZbaU8jYx3MUe02W%2F7k%2FDEAWZ66QKY9JQ8jsCZVdUjpq%2B4%2BiUnRNC4168az4ISPQ2wWUdUJGIMt%2B5wTGupmGoiZmJxQ0Z7cNdF1bzeLP5UywylmdkpSut2xZ4Bg2bOsrVCXIOE2WB8%2F7xXfqA9VqMNrAAkdZwxnpX2k9rgfU9pkhGSUTa57Uqqoefa9pJ8eiKylADX1nLFtwGFlRI0zOVnwkKW29XJx89I85Rkdy6pcqdojq6xFCR8zCoC3AkvJfoSUoqyV3PLwdn%2BBxM2k9QW5IP9Tu3FVf2TdDnG1cFSkKRx8Wia4NQlEkFKMtKhjopjM2qZtlvx5qxkcp8Dcj%2FcaDB76gUcUAEhOUQebzYY8XCVzHVWtqFSpx1XwpONAipJH8FMl3lYxehI4znUpkMeOkjaSCEk1ZxjHmGOprdtN2NlJgtFfEVE%2FRmre0UDGpZuEpU1d6hmKgKIlLFD8MNz4mL4GOqUBpMN38sTWFTqzSvDuKEHXWQvtWrJU95l8v2AGBNoPlb1EMyl47nP1XoM69Xg%2BfCtz21VS%2BkYeVy%2FRdy53oRoIltOP%2FHZnfyggm7AyhWgE%2BvCElC1ZTayIGGRl8sQLFXIs7W%2FrJciQ2e6cnnRUpfd7gF2iQ7SV3UkpnbcfBPrGUZ6%2FYzjwyPrJuZREPQu5IDdmUrp7xrHzFJSQ3jhW9vdi1%2F4sMnKL&X-Amz-Signature=7096ac714d0b167db80a53bd01edf45a8025024b17026b7616f0ae25ffefc9b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6C4PGB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWen3H6dLcm7R69nlMSK99qmyz5nKnxhcVbZ9ynDPu8wIge1O8Oua8QOymfUzR9GP65FOLNGLKLqQT3UZMAOw%2FVDMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkVtF9kZ0y8ZSu0vCrcA%2FqBZyGhR8aZxZ3ZuRue0knaDjr3fdgEBiXucys8GZkdy5s1AC4ZQTzSo6CjNNx1i68VtWNnZbF6%2FWnPRmr6D3NzT9f3NjIswZFaql6NgoV2cUWYSW2zDsinCuCLoEdSOiEWYQQDdK%2FlvK4B8L7deVi%2B32s26rBIXxafwwAYZVZbaU8jYx3MUe02W%2F7k%2FDEAWZ66QKY9JQ8jsCZVdUjpq%2B4%2BiUnRNC4168az4ISPQ2wWUdUJGIMt%2B5wTGupmGoiZmJxQ0Z7cNdF1bzeLP5UywylmdkpSut2xZ4Bg2bOsrVCXIOE2WB8%2F7xXfqA9VqMNrAAkdZwxnpX2k9rgfU9pkhGSUTa57Uqqoefa9pJ8eiKylADX1nLFtwGFlRI0zOVnwkKW29XJx89I85Rkdy6pcqdojq6xFCR8zCoC3AkvJfoSUoqyV3PLwdn%2BBxM2k9QW5IP9Tu3FVf2TdDnG1cFSkKRx8Wia4NQlEkFKMtKhjopjM2qZtlvx5qxkcp8Dcj%2FcaDB76gUcUAEhOUQebzYY8XCVzHVWtqFSpx1XwpONAipJH8FMl3lYxehI4znUpkMeOkjaSCEk1ZxjHmGOprdtN2NlJgtFfEVE%2FRmre0UDGpZuEpU1d6hmKgKIlLFD8MNz4mL4GOqUBpMN38sTWFTqzSvDuKEHXWQvtWrJU95l8v2AGBNoPlb1EMyl47nP1XoM69Xg%2BfCtz21VS%2BkYeVy%2FRdy53oRoIltOP%2FHZnfyggm7AyhWgE%2BvCElC1ZTayIGGRl8sQLFXIs7W%2FrJciQ2e6cnnRUpfd7gF2iQ7SV3UkpnbcfBPrGUZ6%2FYzjwyPrJuZREPQu5IDdmUrp7xrHzFJSQ3jhW9vdi1%2F4sMnKL&X-Amz-Signature=846d4efbbdcd33a75f00ddd20e277856e07601628bd1f77d5f55e76b0524dac6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXB4E4XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXiPvJx7G15z2y48WYMF%2BYwhk3FeEPLgD9LgoQ9FiGTAIhAIu%2FZQPFSmavRui7BxwLVrAQeGVgFyaxZyhpmEZ9G0BdKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz83TKgLqNU2jM5hDEq3AO44%2BoGdefOZW8nCbfi36DjyCBEA8RZQqbOJna72Eiq5DPT0ohIIfyhzqBym%2FeGIhGfgybO3pC%2B7%2B7dgVWyfH2heqPX26bI%2FfDipMx5hQJAyrnykuKwyBz2FmMrgPZhUq7eok8SA52YXntO06GcHBeN876xWp897aqe%2FOBBgH5Fr1%2BiOFoLPp3XkS2qwMtec3wpesW0TSQRDdAOoRQzf14FNJyHbu6z7SVVry6%2FmLnE91P76Yi13afsX4hmwGlYHl1Nz8flWqpqDjeSawdCWngdI99XJCAQdJ8Xw7eDZH6FavFGoMDb3pE5Awxm0fv%2Bp9FO2VblRTK6NrchrAXtYtqRS%2F4c7Pdrzw5LvWoq2U9BuaekogNYDdMLRS%2B0kI2ru26BobgjnZY6FnArfNg5wnnGOgNErIWPtHISdYaNSKtXHg25wVJeklQApsjUvFzKjs%2BwskHZBmJXrLAn346lPwn%2FrWCqQ%2BGKLN23o3l3nazqSfEpegHaPBObVIQDa3ku38OQW2rHT%2F3A3Ejxsrsr%2FQAOjxPYC5Rj0cuMPcgGXg0dkXqVfYJRv85N2PZ2OIq7oHvAbSthR9Yn%2F%2BtrpbB%2FWam9xObitqBjqL7KbIN2Ks6BIG3uoE%2FbTIgoyP3dSzC3%2BZi%2BBjqkATN5LrQUuCOqX759GAV8i%2FkPHt%2BXdRTkbgmG95QL30u48HXVIe996dFPcG68M0XxCkzQBd8K727ZFseyMM%2BARmJ%2Btrd8LudHUWm4JrU1VkwHNjHGB1wHRTpAJ3YeWjcPxn7CzgiclgqzJ68EFGXql0W1dzHWVqE49aTMTIOBjvAoJt6U4X%2F3NFBwewUhRj1kcUypVOrGhBtdc%2BmzyBFvOH%2FJ1s3V&X-Amz-Signature=3e2fef9a096cc67409e455599e490dad7f4498246f58baba57eb479dca932349&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT3MHJN%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZpt5qBx%2BEL0qeti%2FVxbbfRHefxIaIUlu6rOLbIawkmAIgauMsvley0YUgJxLDNRw8qVUCpxycC0Tq6E9dfci52gsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrLTi5OyE8FGm2KqCrcA0lv2qtPnUOYylbgvWItEha00acQB9jKPyS1wRzfhAjn4L6hKvFLx5irpXDFfym%2BdqHN%2F%2Bx8fOJJBZqA%2BYTDVkOK%2BlmbZd5lxFPUlTaMuWPAXK7i2tSB6s4ZbP00hlpi7qOZUl%2F3WmnbtuUO8ZZTMgeFRuEpnedHTuHqFMppd3J1hcOFis5QNsS8HuWFvrU2i%2BdF95DpY40bbKEJpFoQHSV0HO773mh79MW3ptRRAqXn1qTJ6xJGDEgIVceVY6QmXaRbLaxyGQNixCMwjwC25WfVj4pUuaFK6JhTeq9%2Bqld4uduFuJKXRZbcI8kfoJ0JQcQsEAa3tJlJEfWKxoBhX5p4pCAfnUBDSnhm2k3%2FcMTSwkUFZZUNlhukRu0wrs3Ps%2BulghfJxXaE7X8zRmtp6ULV0MXxbE9rhrUnOTFhw7qDDvmMjvIDulgs%2Fh%2F9zQ5DOWyDXUPjnnVBLssl%2F5OMLJ2cMMLdVFjrywrjsxx2fA0xJ%2BUCiJEkAZXwjgTJfuUEx7NUOcBDPGNHm9wtzMFpvtZ1b42WUsVsO0eBaAR08zbcyCqjq7OJ52FJWqmHE9ekZwlKF6H4oEIxvZwFSxt9wfXu6EjR%2FNIA8g29JYe1%2FNW5YyZVD%2BaV4aQD4vS5MKv4mL4GOqUBbkcZAVYWfDELBy0BDVKA9tMNOx675bjSi%2FOuvAQmNGvw0L2H8AKQjuGql18kNqZaxqL3WEN00cfNMjnqgCKG9RaXqsnolN%2Fc6lDKttivNqYpfFdv6MyT4HMpp0stmj0fpd1LmUN6%2FQuruiTbDhjR5AEd10SLC73AoB79RM%2B32Vw0aiB0D252fgFNa188%2BmbUa86EL4n5WuRjxib2Swi3gNkaXdVV&X-Amz-Signature=df9bf2e32c1521ae833638b760ddf68be3cb3b472a7ce2958586072e653d1cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ6C4PGB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWen3H6dLcm7R69nlMSK99qmyz5nKnxhcVbZ9ynDPu8wIge1O8Oua8QOymfUzR9GP65FOLNGLKLqQT3UZMAOw%2FVDMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkVtF9kZ0y8ZSu0vCrcA%2FqBZyGhR8aZxZ3ZuRue0knaDjr3fdgEBiXucys8GZkdy5s1AC4ZQTzSo6CjNNx1i68VtWNnZbF6%2FWnPRmr6D3NzT9f3NjIswZFaql6NgoV2cUWYSW2zDsinCuCLoEdSOiEWYQQDdK%2FlvK4B8L7deVi%2B32s26rBIXxafwwAYZVZbaU8jYx3MUe02W%2F7k%2FDEAWZ66QKY9JQ8jsCZVdUjpq%2B4%2BiUnRNC4168az4ISPQ2wWUdUJGIMt%2B5wTGupmGoiZmJxQ0Z7cNdF1bzeLP5UywylmdkpSut2xZ4Bg2bOsrVCXIOE2WB8%2F7xXfqA9VqMNrAAkdZwxnpX2k9rgfU9pkhGSUTa57Uqqoefa9pJ8eiKylADX1nLFtwGFlRI0zOVnwkKW29XJx89I85Rkdy6pcqdojq6xFCR8zCoC3AkvJfoSUoqyV3PLwdn%2BBxM2k9QW5IP9Tu3FVf2TdDnG1cFSkKRx8Wia4NQlEkFKMtKhjopjM2qZtlvx5qxkcp8Dcj%2FcaDB76gUcUAEhOUQebzYY8XCVzHVWtqFSpx1XwpONAipJH8FMl3lYxehI4znUpkMeOkjaSCEk1ZxjHmGOprdtN2NlJgtFfEVE%2FRmre0UDGpZuEpU1d6hmKgKIlLFD8MNz4mL4GOqUBpMN38sTWFTqzSvDuKEHXWQvtWrJU95l8v2AGBNoPlb1EMyl47nP1XoM69Xg%2BfCtz21VS%2BkYeVy%2FRdy53oRoIltOP%2FHZnfyggm7AyhWgE%2BvCElC1ZTayIGGRl8sQLFXIs7W%2FrJciQ2e6cnnRUpfd7gF2iQ7SV3UkpnbcfBPrGUZ6%2FYzjwyPrJuZREPQu5IDdmUrp7xrHzFJSQ3jhW9vdi1%2F4sMnKL&X-Amz-Signature=f55e23df4068a9a117882054775846345505ae967a1705da5288be680219d9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
