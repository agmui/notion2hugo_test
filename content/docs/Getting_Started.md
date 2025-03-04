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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4UQJB3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYtkYiqLL86zCxd5WItYdoGooegBYGZiw2d9bD0lfcPAIhALvyz5IAHjyUrDnvynRBtnjqnNsdpWYJUX%2F3YPyfxLc1KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzub3BodDpPe3MTjwUq3AMI4aHAz63zbRQtdZfAvayp2z4D6GING28PlMUP8hylHATbXplDdupnaOl46X3Eq7xE6buuYtTSJxAv%2FXhX%2BNVfk3IXQ1uycXpyAq%2FXeWaYfY7aE%2BfqLYnxklVCQiCb5yU6zy4oKhBb8HKJTj%2FKm6hZsENRZjrSEMZaqFBQCGnHnocntdLTMcVZ9SbSLPhPCZx6dmc69u0YZKU%2FwgYYZEqqq4%2F4uk9EIYTDP5jByGn6kqopm2Km5oZcqDy35mVi6W%2Bzz10ALTtVSYFBARm9WsmY1htWm0%2FlCnx1LYBMnYZa1zI9E01RdGoUyphWsp1W69nIvcbkBFXkYv03gh8IX1fS2O6zN79KHs8yZT6Y3kUkrIhkmGg3utKkTq8wKaj%2FqpJ23j6N9EC14YJ%2BGtVaWN%2Bo9DyBYqI4iv6v64wjVkcsx0guZ0KVUEx4wCT%2FgYDJAQ8M26PUnR3ncTzY0H8k9DK0y5fJAdQFSCJ9tZ8JXxa%2FqSpBaSEllouWwdsq%2BlWQbwkhnqDK8U%2FXC9xUKax%2B5jHu4UU6TE4yXgx%2BlNUDsvVOBkhvoosQrsSk6I9irn7dzSN24lG9v8j%2BRTaHi6tv2PDMEpPzgoIPZ7ywZvRaSRzCWdaWTjdw3PS2CoceJTDUipy%2BBjqkAbDh3o39cu%2B%2FKAl5fIwllPhEzhx%2BbNZxmjiSpfHrYXTsj5paaTJ%2BJRitFn3p8o4D%2BUHoLjGSjc89Q0mM0MHsIQzI8ShoDK4D03Gpeji2yKE3lk7%2Bo8km%2BOYwTx9g5P51TcJCUBUmaMEbqMeKqFJ3id%2ByhR55seKFpwOnaxLWe24tmgEFduRcDcXrXnNjhzCmr%2F7IVDqn85FjpJikK05b2X6reO6N&X-Amz-Signature=4e0f02904593619a7b512d6b34015e3669412c41614cb9feffb6e5812094d676&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4UQJB3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYtkYiqLL86zCxd5WItYdoGooegBYGZiw2d9bD0lfcPAIhALvyz5IAHjyUrDnvynRBtnjqnNsdpWYJUX%2F3YPyfxLc1KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzub3BodDpPe3MTjwUq3AMI4aHAz63zbRQtdZfAvayp2z4D6GING28PlMUP8hylHATbXplDdupnaOl46X3Eq7xE6buuYtTSJxAv%2FXhX%2BNVfk3IXQ1uycXpyAq%2FXeWaYfY7aE%2BfqLYnxklVCQiCb5yU6zy4oKhBb8HKJTj%2FKm6hZsENRZjrSEMZaqFBQCGnHnocntdLTMcVZ9SbSLPhPCZx6dmc69u0YZKU%2FwgYYZEqqq4%2F4uk9EIYTDP5jByGn6kqopm2Km5oZcqDy35mVi6W%2Bzz10ALTtVSYFBARm9WsmY1htWm0%2FlCnx1LYBMnYZa1zI9E01RdGoUyphWsp1W69nIvcbkBFXkYv03gh8IX1fS2O6zN79KHs8yZT6Y3kUkrIhkmGg3utKkTq8wKaj%2FqpJ23j6N9EC14YJ%2BGtVaWN%2Bo9DyBYqI4iv6v64wjVkcsx0guZ0KVUEx4wCT%2FgYDJAQ8M26PUnR3ncTzY0H8k9DK0y5fJAdQFSCJ9tZ8JXxa%2FqSpBaSEllouWwdsq%2BlWQbwkhnqDK8U%2FXC9xUKax%2B5jHu4UU6TE4yXgx%2BlNUDsvVOBkhvoosQrsSk6I9irn7dzSN24lG9v8j%2BRTaHi6tv2PDMEpPzgoIPZ7ywZvRaSRzCWdaWTjdw3PS2CoceJTDUipy%2BBjqkAbDh3o39cu%2B%2FKAl5fIwllPhEzhx%2BbNZxmjiSpfHrYXTsj5paaTJ%2BJRitFn3p8o4D%2BUHoLjGSjc89Q0mM0MHsIQzI8ShoDK4D03Gpeji2yKE3lk7%2Bo8km%2BOYwTx9g5P51TcJCUBUmaMEbqMeKqFJ3id%2ByhR55seKFpwOnaxLWe24tmgEFduRcDcXrXnNjhzCmr%2F7IVDqn85FjpJikK05b2X6reO6N&X-Amz-Signature=dea6f585c7fad1a5315e4adabcf18d22eb624c1090e281607cbd718044b4854c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBTHEWW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEu4ziEhqCggpNztXcZybetkc2gIDbVSwtRRgUXpDid6AiEA8ixUzbnzkoaanf5odrJyQdv2JwYCJFtgl2Mdc5T3xtsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZcjhB9DLGwdSC%2BPCrcA7och8bD6Emm8UuQN8vaEPdENdzrPzHg5QmFBKG7J01o%2FdJiWnZizJ0B0YBR8k1CivV44vXDztuVGyOzaKoB0bIIV72kOcka42U7EXRSX1zz9SiudSIb76am6b3%2B5ZjqRX1ZXlPnP5TFUlVMn2pA%2F8dZd3V1bMs3nBmrahqEeog4qiftAIPtP8LsKPP67YbwjZGLVh1G0AhkL0EZICVzjBcBNNddxO0ByPoZJ2zDW0HUQar%2BrtYv277a9CSkfl8DtJvXN5wUxv1YlAjHSE7KO4VDmpymsAH0OwoZrxb%2B4XXBOS1tQWWy%2BStQmruVbvgK8yAQcSW%2BwEK8ihDq9P0R7MtFUlgUYGJbiYjzBS3G4wpppdW%2BzBwZ%2BRfXc%2BKKunXwI1LL6BGQ8LM7WIYGedesuHc9yqfTeA6qJrv2wIjcxOlQ1Zk2Yv3F2UMqJcCu2yIzkR8EGGC15zCmCLVGL1PaX%2FHgvdwfbViJ0WtuCCkzyA9uua%2FsVDIQ6FvOybGl7vD7pZPK8LDrXpUrOD518ra%2BTDuP2EC%2FOLhzVXyCbcdIrUCtmD5L2IF34caL2LP64lCOERp1eEIOUmU6EDvAG5IGrF94EVxCBLxpdKYIx%2BZV6CvjviIxBztpcrOQBc9YMOCKnL4GOqUBj3fEyzard%2BKA5e8D46TS6SkKSCYophj3qWBki22VJ0DjdTYB3dHIsVdoF%2BRAp%2BXNncdEjsFsFYnuqgaVp3%2FRK2FRAii39yZbrJW3g4OUU7llNx80HWX9ES1fPLDkIBIt9J6YnugGDcWotL2bDvExALROwdBte%2BlVbk5%2BCUWLX76oDt1%2BcRltnmJ%2BfNVLVKOnXwnv4jLwovYairAYcPENvCMhH%2F8r&X-Amz-Signature=f76cdf66f48dd26ec731cf6e92bc62c3c55e6dcaeabcb9bafac2704f4281847e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U66TRO3U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3zAxnf%2By2gihaZ4OUf4KL%2F25TZlhM%2Fr6I5i6ZTObAAAiB9QyCYEPk9VOGjnXk15RjiniOMNcmbi1KLWCT1RkhHWiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoOYNp%2BoZZTjqnhDCKtwDoXgaCiEqyonZOgNFR%2BKqLPcqdgGh5CtC4senRZdUKommCYaTbwDFTro7GIe4RDbQ6dyaM083SGgF%2FIxR6gzYio%2Bf%2FHenv1%2FF9FQxLYxHF49m7alMjqT9w7zKCub2lyMJ1um0RxdSZm5ZO%2BoVxJgTT364TcbDdOQjaGp8H2fgpXzoBa5Ca54VMj34Y%2FHDxkbequqgCR9qjTnVBvebStvsdVx2kig3ajnD46HNSP1lCqR7jJIJJ2Bz3WHStD%2FPrQnlvbFcYKWEdNlDXOFIwIT3V%2FQ4FhTX3CA1%2B%2FjUM4GX%2Bv1xfoOf5e%2FabsP5LmY8N029sCMq2sYumzD1ygf5TvYQ5zZYYjyAcLxunikkzBD%2FsLq8VFZRoaXrE9VoMPbA%2FWd9rbe%2BQyZFyIqnhVO9QqGZUNDZyH4lmSOXUxf4DnU0xlKRA45bh3pea9GIBcztIMIYdSesNoMl5fHO92XuEYMLXMsdbldaYosHy9SwoQeSDj5HO3GykDKgGbaYEL1ANSl%2BcR%2FYN7L223F9UWVpvZeoChiWJZLTKkV3mN51CAksRGI3ox0GLdyEjYicq0FQIqS%2BMZ2RUybBwIiIsLzn%2F1AMDWkRyATkPy9%2ByP9UOCZFOuI35NFYWAX2Aqjc0Ucw8oucvgY6pgFXHt07V%2BplhAc7KsaaoOB7kTufARCi8a0%2BN%2FisHdbcwD9xZNLBll1rrbLT3CCRekJWjFQzAbAR2Bb9zTsWqDY3xJwjvPIBzvt0XQONxUceWNDgrqTxAc1FtliJZeBG6Bt9XwDV2WttsMNO5Ry4lo1tUMjZOJ5RV7iyOqOX6pIIuc%2Fl90Km9xTxymQ4tUU1kWvor0TTr12fFwEEamvkvF4VxMYXJI5J&X-Amz-Signature=6b596b76a4ac167b03967d9e5f859f559a7f196927331d623465542ea870e544&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4UQJB3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYtkYiqLL86zCxd5WItYdoGooegBYGZiw2d9bD0lfcPAIhALvyz5IAHjyUrDnvynRBtnjqnNsdpWYJUX%2F3YPyfxLc1KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzub3BodDpPe3MTjwUq3AMI4aHAz63zbRQtdZfAvayp2z4D6GING28PlMUP8hylHATbXplDdupnaOl46X3Eq7xE6buuYtTSJxAv%2FXhX%2BNVfk3IXQ1uycXpyAq%2FXeWaYfY7aE%2BfqLYnxklVCQiCb5yU6zy4oKhBb8HKJTj%2FKm6hZsENRZjrSEMZaqFBQCGnHnocntdLTMcVZ9SbSLPhPCZx6dmc69u0YZKU%2FwgYYZEqqq4%2F4uk9EIYTDP5jByGn6kqopm2Km5oZcqDy35mVi6W%2Bzz10ALTtVSYFBARm9WsmY1htWm0%2FlCnx1LYBMnYZa1zI9E01RdGoUyphWsp1W69nIvcbkBFXkYv03gh8IX1fS2O6zN79KHs8yZT6Y3kUkrIhkmGg3utKkTq8wKaj%2FqpJ23j6N9EC14YJ%2BGtVaWN%2Bo9DyBYqI4iv6v64wjVkcsx0guZ0KVUEx4wCT%2FgYDJAQ8M26PUnR3ncTzY0H8k9DK0y5fJAdQFSCJ9tZ8JXxa%2FqSpBaSEllouWwdsq%2BlWQbwkhnqDK8U%2FXC9xUKax%2B5jHu4UU6TE4yXgx%2BlNUDsvVOBkhvoosQrsSk6I9irn7dzSN24lG9v8j%2BRTaHi6tv2PDMEpPzgoIPZ7ywZvRaSRzCWdaWTjdw3PS2CoceJTDUipy%2BBjqkAbDh3o39cu%2B%2FKAl5fIwllPhEzhx%2BbNZxmjiSpfHrYXTsj5paaTJ%2BJRitFn3p8o4D%2BUHoLjGSjc89Q0mM0MHsIQzI8ShoDK4D03Gpeji2yKE3lk7%2Bo8km%2BOYwTx9g5P51TcJCUBUmaMEbqMeKqFJ3id%2ByhR55seKFpwOnaxLWe24tmgEFduRcDcXrXnNjhzCmr%2F7IVDqn85FjpJikK05b2X6reO6N&X-Amz-Signature=f860a5932d6332e996606b6d216ea7e294fbc4f5c9469b057c9465e77e34a9de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
