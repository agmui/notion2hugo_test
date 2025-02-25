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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYI35CBN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIENjDvBAHv7TjrTkM5TjNCny3vjPnYrmZsUhSnBODK2dAiAdShVEEXuTFwkDL20d5g1Z%2F7BSLRNhW8eC%2BBmaOwAo5Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMvDI94lEllCiD6w%2BWKtwD51tw5%2FcJ5rjpY6SAN7jdBo4PQzVc%2FDJyWgeQCK47o7%2FmasErRrVpWI1Oqm1Uh4nyqXEFI8QQpJX4Bqgr7C3B6SnS7LhZHDfrzMAaU5BZ%2FTkwYElNRM6QH54%2F8e9%2BmcSlBL04OCn8r%2BZZQc1Lx9zPWcl8dHIMuVz5kJe57dpfi2HBbQmEnn0%2B39LJduS8eOZqPQTKuLpPM5wu4mLBWfsqTfsQFKCdGFQRaLGeYH1XpmeWkIMBnDcY47MaMqndYRWFZUh%2BjGJwWumbmtE2FtcL2L7AC0XRy8ozqNZ4itXDtkdUrh7hqt%2FA72sonfSRhXqD1q688Cw19K25qwTUh0KnXwBtSdB7SSNgBKBt4wSiruC119k5tlVDeG2PJ00gBt6Gv0SGeTT5d8W%2FA8yZToeHNr89n6sd%2BMIBaJdXRfoH8Xe9z4xFUU81UuVG8OESzh3IQlfLEnW5pcpx2GSXrGUb%2FgFOZmZbX48eGQUm%2B%2BINrKUPS5yWxgGt4gly8QfF4oxh42DslUfUlNxYwoy%2FvMQzq%2Br5f6j5Pyno8vNSltfEqkUOj762X45xGqz7aMV2OOSL%2FZOial6BqhpR1%2FkwCRU2VpbhhVmp8OfGWwqROMiMTxpmVr9d2jmuwR%2FIbM0wluT4vQY6pgGpIVNo%2BIoGQzl8DoeEPRv5%2BwmlHh%2FqwjL7wfBfCZVbYkBUWjdbtjehuBDYZyZiSFv5zluU3tfXXL9HjQ1Y0gJNv22UxNDZoqUZcQjcffJ4W%2BU%2BC3D2y9RaUjua8uAbcZTj5laViwA3QsJcApkHfbds62ChlP%2BIiGF9I9aiRD%2BTSR%2FKN3fn8Zabb1uTiHIbnTL72GtHHA5JZWD%2BFuC6TXwSbgp2QNSD&X-Amz-Signature=28f09ff15fa2e6936e67d6321475fef09b36a1ae063f8be8e0d3b6d2f4e72e97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYI35CBN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIENjDvBAHv7TjrTkM5TjNCny3vjPnYrmZsUhSnBODK2dAiAdShVEEXuTFwkDL20d5g1Z%2F7BSLRNhW8eC%2BBmaOwAo5Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMvDI94lEllCiD6w%2BWKtwD51tw5%2FcJ5rjpY6SAN7jdBo4PQzVc%2FDJyWgeQCK47o7%2FmasErRrVpWI1Oqm1Uh4nyqXEFI8QQpJX4Bqgr7C3B6SnS7LhZHDfrzMAaU5BZ%2FTkwYElNRM6QH54%2F8e9%2BmcSlBL04OCn8r%2BZZQc1Lx9zPWcl8dHIMuVz5kJe57dpfi2HBbQmEnn0%2B39LJduS8eOZqPQTKuLpPM5wu4mLBWfsqTfsQFKCdGFQRaLGeYH1XpmeWkIMBnDcY47MaMqndYRWFZUh%2BjGJwWumbmtE2FtcL2L7AC0XRy8ozqNZ4itXDtkdUrh7hqt%2FA72sonfSRhXqD1q688Cw19K25qwTUh0KnXwBtSdB7SSNgBKBt4wSiruC119k5tlVDeG2PJ00gBt6Gv0SGeTT5d8W%2FA8yZToeHNr89n6sd%2BMIBaJdXRfoH8Xe9z4xFUU81UuVG8OESzh3IQlfLEnW5pcpx2GSXrGUb%2FgFOZmZbX48eGQUm%2B%2BINrKUPS5yWxgGt4gly8QfF4oxh42DslUfUlNxYwoy%2FvMQzq%2Br5f6j5Pyno8vNSltfEqkUOj762X45xGqz7aMV2OOSL%2FZOial6BqhpR1%2FkwCRU2VpbhhVmp8OfGWwqROMiMTxpmVr9d2jmuwR%2FIbM0wluT4vQY6pgGpIVNo%2BIoGQzl8DoeEPRv5%2BwmlHh%2FqwjL7wfBfCZVbYkBUWjdbtjehuBDYZyZiSFv5zluU3tfXXL9HjQ1Y0gJNv22UxNDZoqUZcQjcffJ4W%2BU%2BC3D2y9RaUjua8uAbcZTj5laViwA3QsJcApkHfbds62ChlP%2BIiGF9I9aiRD%2BTSR%2FKN3fn8Zabb1uTiHIbnTL72GtHHA5JZWD%2BFuC6TXwSbgp2QNSD&X-Amz-Signature=c436c745797e5ae1e67396d14f291815eb9d7bdc68cbc64d34a23c229514c5eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2KPZWB%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGFf3bo7%2FBm%2FFaJ8kMA5SKG8BwlCwgiM4fLmmmXmx3j4AiAWKGeNcY7%2FlC%2BBvER60D03bz63IfrvlWlWHYVId4z2hir%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMYA05lEbHlY1Ack%2BoKtwDezQEt0l6o4daRPZ9kK3xY7gNBHELHqQ7u6g6IGVQEcSecTncdDacAGsPzrAlwGAxdmIM%2BaqalLAqil0rzjghOcYBv6I8Enb2rhdA4HpGgJX4CGqzeYUJJJf%2BeXjMha72bTTe1rBDcjhjvGykzxFwohJEPswA8ifVCN%2FXPTRchwcEGZxcGVY5QAp5jo1g7oEnAWh%2Frm9HVN9GhBxcXHqjUdy2lT2D%2FTdBL%2BtAZU25I2ldO2rJBBcWjkO8jFBzTejjZKad%2BsQZByQIELG2FLSYIRnjCHUcZfdNVXujLIohR6%2F%2F7pCnZN%2B4qhZqNVAl8zZ276u2kXVyGxcTXRddCmI80av7LtHsExEC9sOmotdelLEY0D87GD3YOKeGK5FQ52nX4oYtFRE%2BkMNBh4bQA5s7vg5Zu8N7QqQ2dbuqEkrkDsn%2FAwStVT3KMOXLfyavjhXCc6hRRAMOQju8y2LXeSbdVdgFWEYPS7CA7551eu2F6OfihKi%2FmEgM5K2d3xrcQPvqcLPX0TJ7qlsMwXm5tuB4HcI9NiWqZXVYb1BtbAE3PhEOX2PEKqD6vPPh7qC3y8AbBeNu%2F1JpyK4odDMa%2BhN%2BgzgpJfDcsUuqaeult6lRA%2FEY0NTP1PtSqK2aTXIwluT4vQY6pgGtik1Z0aRKVwXTjk54b%2BE3yH5XqBgSkAJWMtCR%2FEKT7gmQ7QHfra3G7%2B9ZM6Lx71mOTzXihfERK3Z%2FxmDFpljKx4uFTjaw%2BoFzt%2Fc8j1OkIlrH7ZenoXONkL%2BFi1v7P%2FCWDcDba9x95iZ%2B%2F25AkfA2Is%2F9l%2FYFz2h9MY64S%2B3bfRGtsHdyUGlFDypYji4CDxKwIRYoq8pd6O260o%2FKTs0lNAHvL5Yj&X-Amz-Signature=d7e0ecf0246357cf8c71cd071b3796809813b5e9d3289e5884ef2f0adeea214f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCFXMDD%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDTfHZDW%2BmYt7sK78nWLkrdG8CyJ3c%2FIlR1fV3ru7bgkAIgQ2SXUd%2FeeSSDm%2FufGydsdroLK%2FLP6Wu0aZjUVy0I8Woq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGwiHDtug9JAQL278CrcA0wqsLYsRrKV3s1LmRhy0%2BEVcSfZaOvIih8J448L0%2B6HM6Di7Qp0CHgTN%2FtJrMk3ccgcbSwRbgZAGd4pg3d85g%2FDCc3Ze4dnLVmnfZpY2fB6kMilivnq5gZG2YUYXIeEKYe8hxByL7LihGQmNtg%2BKq92ufvHXX0nsRFZ4%2BVVcHUXhoF2zNJ6BGPkGhK9Ttn7Wkc8piBEUyKTB3bWS3giRUP9uQ1F8yiNaJf7d40GtLWaRwdrUGnwXwbUXGeOVUPBBY%2Fyk5S95N5Dn%2B3nMosTWJIVZ%2BK9bElKQ9mt9YtT43jsRRCiwcCKrEYxhl%2B3RTJ0aco6LeDnaa49p5dFemhytrmsZ0gzFmu%2BFDEaooo0BZ1jYIVrd78x7kiB%2FWVlJ59SL115ZQ4kq7UxHfzEFhLRsbf2YvODCmSdhkbWauaI6aTsZ5RT1Hy2an0h8kq3Vhj9UcznIm1Kwzy2KcJTjQoPBE%2B7NEMwm9UBx78Ii1IP64jzgYgpHq3dL%2B0TsJOc6z4LtxJyNduds3JnEM5dNj4QOHQzllRolDafo7O0VMV6nyfubYuRvCO%2FqYInO1rUaL4bcbX0TL%2FK8YqhVVjvSo3oWtxAY95GVvpJCL06VpFBeb6WyAJc4aoiqQGAXBeYMLHk%2BL0GOqUBNCu1HfAmJnB6OoiAxsJPueYxCvOBXSm747Yws%2BHVr90iyg7j4ubc3M3x6VRcz%2Br9Pp5wtzAw62Tsvcs7%2FPRayL4bjVOM%2BT8FCPpCZ6nDHUyBPdCyma70dqtFkrY9hfwbGb22FE6ADZ6zenCUzJraoJ72CVWGiqZsRs9RfYLjqx79z6sE8igkJEiUvu1cppK6edKnvvne4EOa98WxGDZk3VFP5T9M&X-Amz-Signature=e6d8c834ab2f6c90f195f7a9ba49968096431ca541d23f2d42646701a0467bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYI35CBN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIENjDvBAHv7TjrTkM5TjNCny3vjPnYrmZsUhSnBODK2dAiAdShVEEXuTFwkDL20d5g1Z%2F7BSLRNhW8eC%2BBmaOwAo5Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMvDI94lEllCiD6w%2BWKtwD51tw5%2FcJ5rjpY6SAN7jdBo4PQzVc%2FDJyWgeQCK47o7%2FmasErRrVpWI1Oqm1Uh4nyqXEFI8QQpJX4Bqgr7C3B6SnS7LhZHDfrzMAaU5BZ%2FTkwYElNRM6QH54%2F8e9%2BmcSlBL04OCn8r%2BZZQc1Lx9zPWcl8dHIMuVz5kJe57dpfi2HBbQmEnn0%2B39LJduS8eOZqPQTKuLpPM5wu4mLBWfsqTfsQFKCdGFQRaLGeYH1XpmeWkIMBnDcY47MaMqndYRWFZUh%2BjGJwWumbmtE2FtcL2L7AC0XRy8ozqNZ4itXDtkdUrh7hqt%2FA72sonfSRhXqD1q688Cw19K25qwTUh0KnXwBtSdB7SSNgBKBt4wSiruC119k5tlVDeG2PJ00gBt6Gv0SGeTT5d8W%2FA8yZToeHNr89n6sd%2BMIBaJdXRfoH8Xe9z4xFUU81UuVG8OESzh3IQlfLEnW5pcpx2GSXrGUb%2FgFOZmZbX48eGQUm%2B%2BINrKUPS5yWxgGt4gly8QfF4oxh42DslUfUlNxYwoy%2FvMQzq%2Br5f6j5Pyno8vNSltfEqkUOj762X45xGqz7aMV2OOSL%2FZOial6BqhpR1%2FkwCRU2VpbhhVmp8OfGWwqROMiMTxpmVr9d2jmuwR%2FIbM0wluT4vQY6pgGpIVNo%2BIoGQzl8DoeEPRv5%2BwmlHh%2FqwjL7wfBfCZVbYkBUWjdbtjehuBDYZyZiSFv5zluU3tfXXL9HjQ1Y0gJNv22UxNDZoqUZcQjcffJ4W%2BU%2BC3D2y9RaUjua8uAbcZTj5laViwA3QsJcApkHfbds62ChlP%2BIiGF9I9aiRD%2BTSR%2FKN3fn8Zabb1uTiHIbnTL72GtHHA5JZWD%2BFuC6TXwSbgp2QNSD&X-Amz-Signature=87467de7574ee34a34507b423c01507a8bf68a8e15074ce7f25d2b57d8b7bda4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
