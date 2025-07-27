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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBUPFIE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGra8oPLyjgu7p0uO4yupcGMoAID5l9nEARrmBwEBRM8AiBG5493xBmTS%2F2XkJeZ0HzEnCsQnTJde2%2B86PLWSjZEfyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4X9ka8IFUl8GXjrRKtwDPEo14gzjHtaH10JJbfYj6qfWG29ZLCQe%2FKLmHMl2QLxaKWWz6kFtwtN05%2BOOXq9XGuLl%2BIvHY4jzCkLgbdRMnMQsRDqejwCkOcZXHFMDKZKxXclQpmoVLMa7pP4OMaJJjDBjzGoE6e%2BZLekDa2HbCMgCJSEeIt5JosBJZaWEPa%2FatQvs%2BYl4Ae9d116aZnbZ1Jobv0GC%2BrNNPRwqNtvOd1V1H7er4zac%2BykyrtAhSkaydidrLrfHNMxCcJiC7Eb09pt%2Fim11diO8TlnTrgUM4oQbIBn3VDRsRdUHvCLS2XFD6nG7nR7KLfxT7CrUBf9tUOsmcRxgiEV4RwJg4k9e9e%2BchJmpOH8Ix2mk3TU2x3yp41cnqEDPP13x9GJ9%2Bp5FL8UTmLxXgSqldOUJF9%2F5A83asHr1Pcj85akSWnpr5Ps7cgijUBQjoYGgEUDDwpoEE3TlReSTdR4YpovJXESRmfoSHjjjddL4ZPsgQB%2BZ4%2Fxg1RImwv64vnSLpjD6L0ockExIRIJ3uOZOPu5sBg5AlrFwRPdShudKuTBnDa4UfEiAskglXxRwBySGz8f%2BbX3yEKzrDIH3PkOpYpMujcLBQ6HItT%2FcVKPWsd8C2EJQd9chpXrs8IHQDRuzSAgwzISZxAY6pgG8xiURIY8%2B9yEmt%2FFnebozOGcMBkCIiM%2Fw%2BQy7FgeUgoYIYAwICbqrmTCUFJ1g7ZTi6rSPQ1gvuUDFvAvpn%2FVPkd8DJgnNVFvYpQ1aG8GDzmDkJ7IhG3q77l2zw%2B3Q9%2Fu4M3TtFEAUgL4%2Fi8yNzE3uuMKSGLo06zZzzyMhRWltUdc1%2BsoKxi3H2fejkkGHUtDoCcgJCRiuHS%2BDK%2FJAQvW5ioOcPfkt&X-Amz-Signature=a8f58a7d4348b7a0e211da635a765368d8f16dd6cd72730ff9a36aeea2c3a9aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBUPFIE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGra8oPLyjgu7p0uO4yupcGMoAID5l9nEARrmBwEBRM8AiBG5493xBmTS%2F2XkJeZ0HzEnCsQnTJde2%2B86PLWSjZEfyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4X9ka8IFUl8GXjrRKtwDPEo14gzjHtaH10JJbfYj6qfWG29ZLCQe%2FKLmHMl2QLxaKWWz6kFtwtN05%2BOOXq9XGuLl%2BIvHY4jzCkLgbdRMnMQsRDqejwCkOcZXHFMDKZKxXclQpmoVLMa7pP4OMaJJjDBjzGoE6e%2BZLekDa2HbCMgCJSEeIt5JosBJZaWEPa%2FatQvs%2BYl4Ae9d116aZnbZ1Jobv0GC%2BrNNPRwqNtvOd1V1H7er4zac%2BykyrtAhSkaydidrLrfHNMxCcJiC7Eb09pt%2Fim11diO8TlnTrgUM4oQbIBn3VDRsRdUHvCLS2XFD6nG7nR7KLfxT7CrUBf9tUOsmcRxgiEV4RwJg4k9e9e%2BchJmpOH8Ix2mk3TU2x3yp41cnqEDPP13x9GJ9%2Bp5FL8UTmLxXgSqldOUJF9%2F5A83asHr1Pcj85akSWnpr5Ps7cgijUBQjoYGgEUDDwpoEE3TlReSTdR4YpovJXESRmfoSHjjjddL4ZPsgQB%2BZ4%2Fxg1RImwv64vnSLpjD6L0ockExIRIJ3uOZOPu5sBg5AlrFwRPdShudKuTBnDa4UfEiAskglXxRwBySGz8f%2BbX3yEKzrDIH3PkOpYpMujcLBQ6HItT%2FcVKPWsd8C2EJQd9chpXrs8IHQDRuzSAgwzISZxAY6pgG8xiURIY8%2B9yEmt%2FFnebozOGcMBkCIiM%2Fw%2BQy7FgeUgoYIYAwICbqrmTCUFJ1g7ZTi6rSPQ1gvuUDFvAvpn%2FVPkd8DJgnNVFvYpQ1aG8GDzmDkJ7IhG3q77l2zw%2B3Q9%2Fu4M3TtFEAUgL4%2Fi8yNzE3uuMKSGLo06zZzzyMhRWltUdc1%2BsoKxi3H2fejkkGHUtDoCcgJCRiuHS%2BDK%2FJAQvW5ioOcPfkt&X-Amz-Signature=fd62bbb634fa64e0e5f130c277b66bb1ee95c47a79ab3b1782ec9ba6f3f7aaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBUPFIE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGra8oPLyjgu7p0uO4yupcGMoAID5l9nEARrmBwEBRM8AiBG5493xBmTS%2F2XkJeZ0HzEnCsQnTJde2%2B86PLWSjZEfyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4X9ka8IFUl8GXjrRKtwDPEo14gzjHtaH10JJbfYj6qfWG29ZLCQe%2FKLmHMl2QLxaKWWz6kFtwtN05%2BOOXq9XGuLl%2BIvHY4jzCkLgbdRMnMQsRDqejwCkOcZXHFMDKZKxXclQpmoVLMa7pP4OMaJJjDBjzGoE6e%2BZLekDa2HbCMgCJSEeIt5JosBJZaWEPa%2FatQvs%2BYl4Ae9d116aZnbZ1Jobv0GC%2BrNNPRwqNtvOd1V1H7er4zac%2BykyrtAhSkaydidrLrfHNMxCcJiC7Eb09pt%2Fim11diO8TlnTrgUM4oQbIBn3VDRsRdUHvCLS2XFD6nG7nR7KLfxT7CrUBf9tUOsmcRxgiEV4RwJg4k9e9e%2BchJmpOH8Ix2mk3TU2x3yp41cnqEDPP13x9GJ9%2Bp5FL8UTmLxXgSqldOUJF9%2F5A83asHr1Pcj85akSWnpr5Ps7cgijUBQjoYGgEUDDwpoEE3TlReSTdR4YpovJXESRmfoSHjjjddL4ZPsgQB%2BZ4%2Fxg1RImwv64vnSLpjD6L0ockExIRIJ3uOZOPu5sBg5AlrFwRPdShudKuTBnDa4UfEiAskglXxRwBySGz8f%2BbX3yEKzrDIH3PkOpYpMujcLBQ6HItT%2FcVKPWsd8C2EJQd9chpXrs8IHQDRuzSAgwzISZxAY6pgG8xiURIY8%2B9yEmt%2FFnebozOGcMBkCIiM%2Fw%2BQy7FgeUgoYIYAwICbqrmTCUFJ1g7ZTi6rSPQ1gvuUDFvAvpn%2FVPkd8DJgnNVFvYpQ1aG8GDzmDkJ7IhG3q77l2zw%2B3Q9%2Fu4M3TtFEAUgL4%2Fi8yNzE3uuMKSGLo06zZzzyMhRWltUdc1%2BsoKxi3H2fejkkGHUtDoCcgJCRiuHS%2BDK%2FJAQvW5ioOcPfkt&X-Amz-Signature=e74e99722626597cc40ba7cedb3be2bd6b1e20fcaf591108003fc7b505f72450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KU4QENV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCEjeGeHcclftDXTrvTIiJQvuHU%2BVWQzavj5CTR0MX9JQIhAORw9WlUnpGVADJPqqcB7Ny2Ks5f0CdV3KmYV1lAqnOWKv8DCHgQABoMNjM3NDIzMTgzODA1IgwbLpCQLYd%2FNe9isokq3AOtse9whZjva6h7sqfXYg40rgKpmb27Z8gUa%2FTvsWXftkPnKcDyCvi4DPXiJCfLp9kZNggTRHh8GS1nCejTOrddoO5d%2BcZgRO6IVaZ5Bpeb0jc%2FLIccPASYV7Se6QeNLYoA22E%2FP32SvUM1YhubXoKPO%2FcjMz2LCENYOirRJCmW9fxZ9Vz6rkCysk0UvNQFtCsFIYbY7zEqyEdSbScJcHrnD%2Bt7TbIzO0ByYMwh%2FsT2ir1GnjFbcwh8oeG7h2MOZ%2FKNZhO8H7nhv8e6ZCcqzdLdvmT%2BHTrcobreIQqNUdG7Pn4NiXRaXb5W8cEuvEinDs3uFHwOf%2BBovJQqeoRyTLVbiycTyeDf1E3t69%2FoAhjvSVES36xifuV2F7alCjNJktKp7%2BzQZ1ciZ0lF1OvKmY5lbRhAhTeasDcv8%2B5hpjFlS5%2B87fNqKa3MmbSiKLKIi0Ut%2BBMrOJfg48fyxVPIxkCaD2YTkqGrcYGcMLjf%2FGE2dxsBPojeeFwhzPP%2FRZPj7XRMCgPKcYOHzrgzLyCqcyJjkyeWH9QCCsRat3QEg%2FHdXuH1c3sVtpyQcPrlLezgh%2F1M9sfa%2FxV8cgzEkOSZXqE5n%2Fpx%2BwOIIrKuNeDPdmP5NbAe9K4FyxSgs6BYjzD3hJnEBjqkAWKX4IcnO%2Bid5W4RF%2B6Z4YxQ8vQLVHjwcadPKZ1j3L2Cyfp6qZoB3%2FkBeUl%2BdBZDr34yAX9Ttl9VmChFRlvet8nauxEWeHZexnMYIrIA6INArwTutbw1XVXV9s3sl0ghkJxfLLfLF9LihIUKIoHDfqBToGqTmAZ1X0SsmMuvEwhRNdtsqHZT%2BLy1UnHgqRsySQPe5JGD82l5Wa0XGMGxeEr0CMMg&X-Amz-Signature=888d2245c0217e8ed9ea9bdd94a8860790df79048b5fa185b2f75deda6717fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFFJHY%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpeZeQSIpSv9Yfu44%2B%2FCBZtNdQkH2CpOY8SjMHEdJZtAIhAL02P9U0TE9Stsr2uDLpefYcozWL0urBJBNJWQ%2FVulhLKv8DCHgQABoMNjM3NDIzMTgzODA1IgwxETUjZoN3xpKlx88q3ANO89X33lNppsgEqhxjubte0PtV7t0oNaUeWwadu4r4vKYANtgm%2BvItvXL5Oczjx7RmXluBuBYcam%2Fe94AneP4TTA3l7ehG80GJSWamhCxgs3VIo1g4ESIs98EzvVUysMqqzxZ0FKpT%2BcpXd3xmAH4HyWzEN%2Ft%2FnheoV%2FuE6AFAid8yAIdiojbIi5%2BymM66GFUdLr5u6QmrlGtTXn003%2BnDiPTixNHn%2FUlO%2F4ldp8ex7vx9zV6%2FpnMmWReHMKcgugaenjapxNmU7XV5SMGIWsC1egNnyMEIWTT6jtA6A6D0h50plDYPKYI5KV97kEgbcFLOoeWgMFknZBWg8ielk2UExu3zFYn6HcQ6A4SRkwd7GA5ZXcXWtxlXzRms4KjXwqC3osPbTneA2gYxBbmNA6lWxZrMf4tXbH2Q%2BG62Dl%2BRyPpKY6q8CYuNHFulmNF6z0RF0KhtanrAfUvCrDuq9EAl96CGeVAz9XoauuqJdaeSSR49sRC1P68hBsT9%2FZAnTyrNw6I%2Bjeu0RtfAZMIYIRe0lH9nUQdqLJI45FLBOUorgL0prPKrGF0FdYsSc1bUUHGagAhajdV6AWCbk1QrU02B4vMNbF6wegSW%2BJqf0hVeJv9ms90O1jpSAraiGjCOgpnEBjqkASeOloqeWve7u9spcemnR5AzzsbeGByZIV2mflrGT0S4DUAKoz3eTQRSk%2FMxmDHTSu37kJ2XJ45dMVz%2FyOC%2BpEe6pi4qoRVxOPygsN1HFDtLx1Z%2BM%2BaPbgjkRX85xjBQ0rpCwX2LCNxfo6dBjqCnNEywZzYrJsXIipoQ%2F3gZOccrTvMVd9naavwYLWE0DxlkqTS1LeuZ7aQONAlD3UMLTZQcOdAF&X-Amz-Signature=a1029b9a848023ce91456c16dc3aac3c4354bae7b14eb727cefad1c5393e042f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBUPFIE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGra8oPLyjgu7p0uO4yupcGMoAID5l9nEARrmBwEBRM8AiBG5493xBmTS%2F2XkJeZ0HzEnCsQnTJde2%2B86PLWSjZEfyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM4X9ka8IFUl8GXjrRKtwDPEo14gzjHtaH10JJbfYj6qfWG29ZLCQe%2FKLmHMl2QLxaKWWz6kFtwtN05%2BOOXq9XGuLl%2BIvHY4jzCkLgbdRMnMQsRDqejwCkOcZXHFMDKZKxXclQpmoVLMa7pP4OMaJJjDBjzGoE6e%2BZLekDa2HbCMgCJSEeIt5JosBJZaWEPa%2FatQvs%2BYl4Ae9d116aZnbZ1Jobv0GC%2BrNNPRwqNtvOd1V1H7er4zac%2BykyrtAhSkaydidrLrfHNMxCcJiC7Eb09pt%2Fim11diO8TlnTrgUM4oQbIBn3VDRsRdUHvCLS2XFD6nG7nR7KLfxT7CrUBf9tUOsmcRxgiEV4RwJg4k9e9e%2BchJmpOH8Ix2mk3TU2x3yp41cnqEDPP13x9GJ9%2Bp5FL8UTmLxXgSqldOUJF9%2F5A83asHr1Pcj85akSWnpr5Ps7cgijUBQjoYGgEUDDwpoEE3TlReSTdR4YpovJXESRmfoSHjjjddL4ZPsgQB%2BZ4%2Fxg1RImwv64vnSLpjD6L0ockExIRIJ3uOZOPu5sBg5AlrFwRPdShudKuTBnDa4UfEiAskglXxRwBySGz8f%2BbX3yEKzrDIH3PkOpYpMujcLBQ6HItT%2FcVKPWsd8C2EJQd9chpXrs8IHQDRuzSAgwzISZxAY6pgG8xiURIY8%2B9yEmt%2FFnebozOGcMBkCIiM%2Fw%2BQy7FgeUgoYIYAwICbqrmTCUFJ1g7ZTi6rSPQ1gvuUDFvAvpn%2FVPkd8DJgnNVFvYpQ1aG8GDzmDkJ7IhG3q77l2zw%2B3Q9%2Fu4M3TtFEAUgL4%2Fi8yNzE3uuMKSGLo06zZzzyMhRWltUdc1%2BsoKxi3H2fejkkGHUtDoCcgJCRiuHS%2BDK%2FJAQvW5ioOcPfkt&X-Amz-Signature=37aaf4eb536ec557e52fdc243bc1475c840793aca30476a0a4d7b1ef41f965d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
