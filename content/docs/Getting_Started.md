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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UWYXDYU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTBORyBinVEXlDzJcDMWn75ExwP1L9wnFsapODei63gQIgUEQbrZHAfcy6xtAZDHQDK3dob%2FJlJ1Dyx4dH%2BbeB8hwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmZUdpJ7tRBdcAoTCrcA5vxVq7HWIjoQet1XdSx32GV2vDSRFJ%2B7CZlsE3z20O0smT8O8vGLR5nxofkkZBSGbxl9Ew7sGENgwVzy8%2F%2FcarQLawqMm%2Bvf%2FM7u5jYGEcJfOkvS%2BpbwAd4Zf9VcFir1NzEnEACgalAktcjc9umwyBUmD1YzUtLc8sPUVKRcaXlzElwaKO0SmNADW13x2NDodwRM%2FH0bt0mKwF9wF97hXob6CITRBw8c3Ymkq5Yc6z1y%2Bx%2F9%2FyuaO5IDxenPxKTFdRokvBO6gEbtX9Gbku3Kjpvi8Lo8J2Ow%2BEO7ofdp%2FV8Buk1bd9PCkItcq8bLUmJmECn%2BNUqsDwpRTfZjqslyk7iIVdj9NPeRed6P93O%2FD3OWKyVhKOTX1AArvBwtNsa0pRQSrSfCzsMZ6LrzHSgADEcAwgUDuAPMgO3nHVsLHmVuOQn2Mffi%2BrQVyD6QYluukm0jjVSRIRFU5b3p5iNyaUjfzB2Rnz8N9SPdJEu4cDfLClQLht11LPI3iYu5EAC5qdn9zOZz7xm7hgadieSFTqtJLTbq87iHVxuvOb7B4%2FNYmokjbmkqjw0wkxO1w0BXBhOaUCtispnQG5ff5CZR6Lh5RHjtykenZ6Ux8BXVaotonplDkU6fAvQaT2zMP%2BhosAGOqUB7KXsCMTyigXkG3QorGgWLZc7he4ML4iKJjA2JH7iS9UOde8DhVdVL0N2fY3QH1OtQsJ1umuXmrCLvxPNPqY3arydt1EVCRkIjR1jwb%2Bk0YPcfU908uP3qVt8YZDLCD7qQYs3M9LqGdIUFJxC7WBuPdYo%2FhYPp6yEAWSBf69iW7B7MLMksrT5n90VlnoG5mi9L89qlOeEsnpKP2d53S06%2BIp5aORO&X-Amz-Signature=1bc5d2d5b306d517c0f08684a9697cc37146ed0e9e1d87b3d6043abbe8d55de0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UWYXDYU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTBORyBinVEXlDzJcDMWn75ExwP1L9wnFsapODei63gQIgUEQbrZHAfcy6xtAZDHQDK3dob%2FJlJ1Dyx4dH%2BbeB8hwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmZUdpJ7tRBdcAoTCrcA5vxVq7HWIjoQet1XdSx32GV2vDSRFJ%2B7CZlsE3z20O0smT8O8vGLR5nxofkkZBSGbxl9Ew7sGENgwVzy8%2F%2FcarQLawqMm%2Bvf%2FM7u5jYGEcJfOkvS%2BpbwAd4Zf9VcFir1NzEnEACgalAktcjc9umwyBUmD1YzUtLc8sPUVKRcaXlzElwaKO0SmNADW13x2NDodwRM%2FH0bt0mKwF9wF97hXob6CITRBw8c3Ymkq5Yc6z1y%2Bx%2F9%2FyuaO5IDxenPxKTFdRokvBO6gEbtX9Gbku3Kjpvi8Lo8J2Ow%2BEO7ofdp%2FV8Buk1bd9PCkItcq8bLUmJmECn%2BNUqsDwpRTfZjqslyk7iIVdj9NPeRed6P93O%2FD3OWKyVhKOTX1AArvBwtNsa0pRQSrSfCzsMZ6LrzHSgADEcAwgUDuAPMgO3nHVsLHmVuOQn2Mffi%2BrQVyD6QYluukm0jjVSRIRFU5b3p5iNyaUjfzB2Rnz8N9SPdJEu4cDfLClQLht11LPI3iYu5EAC5qdn9zOZz7xm7hgadieSFTqtJLTbq87iHVxuvOb7B4%2FNYmokjbmkqjw0wkxO1w0BXBhOaUCtispnQG5ff5CZR6Lh5RHjtykenZ6Ux8BXVaotonplDkU6fAvQaT2zMP%2BhosAGOqUB7KXsCMTyigXkG3QorGgWLZc7he4ML4iKJjA2JH7iS9UOde8DhVdVL0N2fY3QH1OtQsJ1umuXmrCLvxPNPqY3arydt1EVCRkIjR1jwb%2Bk0YPcfU908uP3qVt8YZDLCD7qQYs3M9LqGdIUFJxC7WBuPdYo%2FhYPp6yEAWSBf69iW7B7MLMksrT5n90VlnoG5mi9L89qlOeEsnpKP2d53S06%2BIp5aORO&X-Amz-Signature=672cb31988e0be90e4a632801528912e996a3e300eb4990a890b1272c0f351b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HP2ILR6%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQDRIFZZ3nlC81g%2FuvaoqTHWw%2Fsad7CleKZ4d1FNIXIbJgIhAMgvi7J4IidugIaDJthB0DTBoV%2Bq4P7eoUuCkBlDpd8IKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzvf5B1TWkjYc1%2F7GMq3AOMlcduLBZjZE%2F%2FsJfLKRMrOTpR977irUERq1bbRHRWrwVms8SjCRuD3yWqHi7ffbPtYfkArRYEf75RFH69hsZ2nQtax0g5Y9SkPavFog18ib%2FW62LxOE89zQOI9uPP2HiB31poiaF7%2BLVeBfNb5STQC%2FbGMmC1XQkEgrUSzCRc77ieY5KIDQgNpN89BZ6MaOqbF1yhu3HfMnRBbfRdRknOEQMhjpQ%2FzgfmvNRlz7whM902rgtWHW6qA0q8sojI4L05ZnBnKos4EGOQ5eqW1jMJgMAKfN%2Bc0DJdM3h2Cgd1d5SkCcEqIt0HxsWGrlTVOcKhbCJp77lI2e2d5n1XkRGNpadcZaOmtDM5lSK4JRMtjZQD3ENyTlV4J%2FLo3V6wcpBRobwc%2FjbCsLnMVKNF%2BFNzwbcT9vNetCFdlTZe65CEqPod8D%2BFGcRvMZ5VQyUsHd%2Fg%2BQu%2Fvyh2abk9hgs7kMinN04gIXpcJh952Jvj4mcqK80QJrbxBtKEMbayZDoE0aUc5Mngy4FHC9dXPCnJsVvE47QuMWeeoPIyt8nFMr5S2Vjn1%2BJRaIcgfzbTs9p7r%2BIhfFuVG4kvO72y77wBkVWNbWLcxpr%2FE%2FYHo9SUIzhHrx6oXsRxmPw4VVLQUjDov6LABjqkATyfAQIT%2FUMHAfJ%2BqlAXoVAKhBGiYczNxB3aeaj1Hx7JvNM1gwUlM8pxQMw5dHL%2Bf5ullnnzDOBzz3zz8HuJtZstd31MQIKPfsi5GRateA1qmqAyhCa9tTORUgUJl7dmtECMWJK9yxD406QxyLV6NjmXLWJW6MdoxZufPhQqRYNThCalQYTqqikee4rZFfn6ZJ7oHDgLkdylp0dXrJRnsNTJ%2FLWe&X-Amz-Signature=4cd74f35bd94b5d1970bf18338bda677ccd44fa0960524d95aa150f7c520520f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQD4FTNN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIG6sLB%2FcmjNO%2FXws94B7AgnPSqO1ij1a4TKmRJ1nodX%2BAiB2bXo72XAwCTT3HkGZ2QYcRpq6H%2FP4iHSj1q4qboM%2FYyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcNEjTP%2FlcQja%2B5glKtwDc%2B7B5jwtuTfP6gKXvRlaNuP6D716jXfHJXU0U90XnHZ%2BAw9SP%2Fwbv1mM0heu7PLf6wUdhNyBqXz9RUjB7ypVdpUVzvA8c%2FmOMj6vOn5Ku%2BlS8iN%2BovhZYV1MexXRmCt63objZDkwHVMsymU1hSCGUVTd%2BPZAyv%2BqyrVAOMiQ%2Fzd2WJdoB2jm2STO7%2BOvOfLigKZHYDKQYM2klC%2BBIaosQtZFOAkX4hV%2Bplvf6OJFu6e7OL3O%2BBCaNU2T0A3z2WStnPHOIu%2FKsdZbW%2B%2B7AxtS0SxMAbB2S7ijmyDnDHX52g2%2BhmSiwuFPft8mBUKHBALEE8GHu3Jcx0LsA8tJ%2BmbDLrIq9%2B%2BN%2BVewHvFX4o8Aa7xPmG0z5Egt61fXlWnSEwbsT4FETnjaYcL4Kt%2BtOuG8xEKoLpywcGlHcJIw%2FUnoy9d7Bbh6tthdCpTeHL41P7%2F2aGRsaI8Gk6bKEzN40qd%2FXGOYqOZKabDyIijIWFuBZzaWbca%2BQqI3S6lnZkkDfMYODiOFk4cf5acgxhP9oNxKxZ9WZWeHQYmUKeVRrpzLs0ZWRg%2FN7KWw5FT2yKesYp0v4m%2F5%2FwK%2BOwpx4zWIpLuZ0KUseDU0Ug1RVmb%2FrykCbp%2F0ViY%2FUxw8eqamFtgw5piiwAY6pgFKh7yMB8qtPjW0%2BONwypdh8UlcStlaZXs6BuzcsZepcwIz9sR9V%2F%2FLU5%2F6roW5bKVvtwfV3r4jncd%2FxzdNl6afQUM7QLSB%2BUV157ytaXMoalkNfGuQRLpJg1yCoL37tIY5ruJebH6%2Ft421Onx8p2kUu0NjPkW7pp1%2BwYwDafmR8qoBJ9NY9DzP%2FFUsUqTEp68z6wu6J5U%2F7Iy2dbGEUulSPi5Q9S3W&X-Amz-Signature=494c7f2c5689e1d53d08f7ab4b01b1da4ed79c0b7fef8f68f7d5c54678b6b508&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UWYXDYU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCTBORyBinVEXlDzJcDMWn75ExwP1L9wnFsapODei63gQIgUEQbrZHAfcy6xtAZDHQDK3dob%2FJlJ1Dyx4dH%2BbeB8hwqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmZUdpJ7tRBdcAoTCrcA5vxVq7HWIjoQet1XdSx32GV2vDSRFJ%2B7CZlsE3z20O0smT8O8vGLR5nxofkkZBSGbxl9Ew7sGENgwVzy8%2F%2FcarQLawqMm%2Bvf%2FM7u5jYGEcJfOkvS%2BpbwAd4Zf9VcFir1NzEnEACgalAktcjc9umwyBUmD1YzUtLc8sPUVKRcaXlzElwaKO0SmNADW13x2NDodwRM%2FH0bt0mKwF9wF97hXob6CITRBw8c3Ymkq5Yc6z1y%2Bx%2F9%2FyuaO5IDxenPxKTFdRokvBO6gEbtX9Gbku3Kjpvi8Lo8J2Ow%2BEO7ofdp%2FV8Buk1bd9PCkItcq8bLUmJmECn%2BNUqsDwpRTfZjqslyk7iIVdj9NPeRed6P93O%2FD3OWKyVhKOTX1AArvBwtNsa0pRQSrSfCzsMZ6LrzHSgADEcAwgUDuAPMgO3nHVsLHmVuOQn2Mffi%2BrQVyD6QYluukm0jjVSRIRFU5b3p5iNyaUjfzB2Rnz8N9SPdJEu4cDfLClQLht11LPI3iYu5EAC5qdn9zOZz7xm7hgadieSFTqtJLTbq87iHVxuvOb7B4%2FNYmokjbmkqjw0wkxO1w0BXBhOaUCtispnQG5ff5CZR6Lh5RHjtykenZ6Ux8BXVaotonplDkU6fAvQaT2zMP%2BhosAGOqUB7KXsCMTyigXkG3QorGgWLZc7he4ML4iKJjA2JH7iS9UOde8DhVdVL0N2fY3QH1OtQsJ1umuXmrCLvxPNPqY3arydt1EVCRkIjR1jwb%2Bk0YPcfU908uP3qVt8YZDLCD7qQYs3M9LqGdIUFJxC7WBuPdYo%2FhYPp6yEAWSBf69iW7B7MLMksrT5n90VlnoG5mi9L89qlOeEsnpKP2d53S06%2BIp5aORO&X-Amz-Signature=84b667012f5a8ca1ca4a84594af173db8dd90e212a510a368a1593f468e21c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
