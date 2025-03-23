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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCZPLXS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHGg1jeJkugtMkRCj5Nl3BOXcnx1adg0TvERayhDMcOGAiBsswRvmpAKAJ%2Fu%2FzocQ%2F3c9hLsGdTpROYSg923B5l%2FICqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIjUVMLFlvnIl5533KtwDC8HGoBYpD2sad2QnG5cj%2Fg6pdamA8PRIwCR8109qVHpCZJ3Ju9JOBAh9CjBTOZz1Zq2F%2BfD32N%2Bv99npvPGPfLUsvxvkQSRZWo3mT2RTzjY33n%2BkM53yNj%2B4XEJfmWk9qKthO40kjeEwqdrWfN%2FuDOedwgN8NMSt1xBA61CBA7%2FK4b1iiWgwT0A5RjuVEtPwi56poCcFqMNpm75g33rAt38vJortzsxtpU%2FYqjZajJYre%2B2VeVvnRgPBLTGUN2LS0ybrzW%2B9TWzwiC9BKxq%2FgRqdEPCDhIIg6zTIsi33ksQAyTSCbLFVoHumxPj4L4LGiU0kj6WcrZGY69zwaV6vVNjZpSXCsa6PBCwnRwbwZoT1JnsxVRatqGqpDs9vnxpFBxgrgnMRLliBsfXvAERls3taGcYk7fRWDXWdUzuELUAiPKLNRUWGtJKmeB5OyQkfbPIxxuxC6yg3bFCUtxg643ifvjLKsQa8t8GvioS9fYRgjAPX8oB7kRvEPH7GKaPStRVpTPQ1HtBQrtjeCwcegnVuf42v3crbcrWiILSCNNESlBc23v3y2fg4S4Gl4p8nNviDDCmW6XLqYeM2%2Bk9ocN%2FcXZt3x9S418ns%2Fm62foM5cHb8zcyUFsBhpXswo%2BP9vgY6pgHHAUjSV4HdibXOeShyukDB2ZPoy6wknjRNUqZkFNffgDIss85lHIrDSc%2FP4nufzOeAGvqpZO6bgbpXFCzGc1wkhhn1U%2FowB8ObCDTSY2M96fKEO2QiMJxpWm%2Ba%2B0Zgt9u62Bx2PSfO4P6d8ZR%2F7kJMULHivBlAyCmZapJQtDK2MXJdAz0z%2B9Zgfn0F%2FoLaCSq5MPmGCNbpL2nn7Wfo6rzqdpSwaIZX&X-Amz-Signature=e6a4e97bffb30465d7130ba0c628d4ce9659ea03244c0c2b0af41bd05c649d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCZPLXS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHGg1jeJkugtMkRCj5Nl3BOXcnx1adg0TvERayhDMcOGAiBsswRvmpAKAJ%2Fu%2FzocQ%2F3c9hLsGdTpROYSg923B5l%2FICqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIjUVMLFlvnIl5533KtwDC8HGoBYpD2sad2QnG5cj%2Fg6pdamA8PRIwCR8109qVHpCZJ3Ju9JOBAh9CjBTOZz1Zq2F%2BfD32N%2Bv99npvPGPfLUsvxvkQSRZWo3mT2RTzjY33n%2BkM53yNj%2B4XEJfmWk9qKthO40kjeEwqdrWfN%2FuDOedwgN8NMSt1xBA61CBA7%2FK4b1iiWgwT0A5RjuVEtPwi56poCcFqMNpm75g33rAt38vJortzsxtpU%2FYqjZajJYre%2B2VeVvnRgPBLTGUN2LS0ybrzW%2B9TWzwiC9BKxq%2FgRqdEPCDhIIg6zTIsi33ksQAyTSCbLFVoHumxPj4L4LGiU0kj6WcrZGY69zwaV6vVNjZpSXCsa6PBCwnRwbwZoT1JnsxVRatqGqpDs9vnxpFBxgrgnMRLliBsfXvAERls3taGcYk7fRWDXWdUzuELUAiPKLNRUWGtJKmeB5OyQkfbPIxxuxC6yg3bFCUtxg643ifvjLKsQa8t8GvioS9fYRgjAPX8oB7kRvEPH7GKaPStRVpTPQ1HtBQrtjeCwcegnVuf42v3crbcrWiILSCNNESlBc23v3y2fg4S4Gl4p8nNviDDCmW6XLqYeM2%2Bk9ocN%2FcXZt3x9S418ns%2Fm62foM5cHb8zcyUFsBhpXswo%2BP9vgY6pgHHAUjSV4HdibXOeShyukDB2ZPoy6wknjRNUqZkFNffgDIss85lHIrDSc%2FP4nufzOeAGvqpZO6bgbpXFCzGc1wkhhn1U%2FowB8ObCDTSY2M96fKEO2QiMJxpWm%2Ba%2B0Zgt9u62Bx2PSfO4P6d8ZR%2F7kJMULHivBlAyCmZapJQtDK2MXJdAz0z%2B9Zgfn0F%2FoLaCSq5MPmGCNbpL2nn7Wfo6rzqdpSwaIZX&X-Amz-Signature=3fa21b0a6dd345703671b8a6571008801f5d28e3d88edde644fff76081a01491&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663TXDK6K%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB7ErQpbSeJLkDau7wQ4T5w3BCOMtyn%2Bpw%2F8FUxMdrzXAiEAxvHF3QEezXS%2F6QjQWZ4fTDw3lPL2zSR8DqSxrTB8iaEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbJwoUcEeuBvylf9yrcA4L3qJcSZrR5bm1yAKH25X%2FazYtdZG2rIF7RKJNETHibxYQvJYrBrM8iSSV18J%2FWqhogYwK8JG%2FmhajCVs99kDDqYXictXm9UkMZXz5%2B%2FEVAQsBpIZ6qYcShU90acdcXAcgsTBdSgsPjpyfE0AC%2B%2BMRFrPW3Bcxpltg6pNWU8PhiFZwbn10jU6li4lyWdRB2eJflMoji9Jxc029NP9sK8DMWngDd%2Fp3oJc4eZBKYsISoTGy7XCmiQlP6sh6TDPvmB6oRgJTJni1VZhN6zNr9ZIvjutI4HWuH9jpKFGtjvGhKMxl9sAb30Hvwij1LMLApTfDB56EIIYorViTozSBjnGKB5osR6SxE%2BIWTIo0Uqac28gnZcNIHsGBBX3eAi0D83NnZaKaLTl0gV%2ByihdUzjx9kpKW7kMsX4AEIbBRpght14N9KRbH6JFFE%2BcFgsSK9uFKdO3aqYj7Nb5To5c28KRQZFbhNoSUUcM7l8I84%2Fz5UHPagwHA7QbWubpJG7H98jOiC9VMaQehDP59pCpsV%2FLohuDw%2FcSD3p5CCfHm0FaJSo3sRSk6P%2FAVw%2FZ1Xw41R%2Bs%2BONPp37Wpx6bYh%2FmkwfJo1trCNp9zDHP%2FqI9ZZFjLCnpBAaX1HeCe8sNcKMKXj%2Fb4GOqUBJLmoFx2WirJkwqQ7YJr5rx7r7xoyutHdk0h%2B%2F7E%2BE2JePYu4cplRzAk1KT3i%2B2SWBpUCa2NTik8Cy68zfJBrFKkYeZA%2FkuoR1d2tzilo%2BfrYK2ApI%2F3LA2No61qXR72uiztv4yn4fFzyPZXzEwqoaPSjnWB49Eeq4D6jvnE9fZgjYQyJUDHYpTfidDeUMjucBtecXR%2FdWeKsbrf8wg3rbwgNvXpI&X-Amz-Signature=23a53d6b6807acb4067bd0b1fc67ea7ba8ca0decb2230e970214420885dae9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MEATJ4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC%2B78kNFVzlWJVrsH1IyHsfwfyOtw48nN4Bg0p4EzLBDwIhAMhOVvhxrB%2Fm%2FAYcfcW2XyGWywd5%2FDfpIoipP38ruU3TKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHpcd3X%2FNUak84u5Eq3APDZUL1nURS3wdYU3OT8nvNDTBVeNhhFgmAh67pQmBY3svzraTUi9Nrzx7fzxmZdeG%2FfbLefYIYRxRrVHXbJTWgw8CcV0NqbyIh2cVQAS7oFulpE8vl5cSbiZ%2FmAQRXMS9aGTcPJEwyNzcErEamkuEJIhYzS8vTcj64govp1upRdJ0vuKORG%2BOpg9oT%2F2ed8i0WUU5Ut2v98EBS3OlnezQbCqoh3cuPF21aUJycr1CE7czg%2F3mrOnQ3D8ES0oVzTEj2eui7A7sSk6X%2BRrfTCYVGJIHw7IeNXn0AfcjbGhZYDTQlUzwEUckpSWq8IseNdeL1C0snZvAuAtoHK3WSMZzFZN7FqMbhbfrMo7lBBN6daI4goYwn5f8ZYnju9wn0sBpt1%2FaScIGqviO9kjIbAqGwe7aFm6OOenMTCwT81vXdPbehD5om8QfXUHvvd6wKl45yHgX24HEebSZVHRHJ7kLcYLYqnCMCvZYbSlZpscHOr7VzP7N20oRsNYDJSuKXHoOLbEAG7orAjL3q8ypgTaDLh32tf%2F4t0AVwRYOn6UgqoPsuVNJAw5HaWKIvkukhw0KicTdTTiye6ZnDsqd4P%2FVuku3603kiJ2sST2KFzO02CvleOBtbaQGtpG5aZTCP4%2F2%2BBjqkAfQ8m%2BJQNpRf0C5wcTRFhjgiPZSClXSoiB%2FeYCSw6ONy3QZFVHE2luH797IrQc989nz78cTkSjNS2gWU8E%2BcXi225mcn7jkRnvz1cvDFp5761W4l3JdxiTgzjHXbDjAqLSYMC3jjUm5tuOWcL86Rxp1SUGx8SrBKh3H79oPzYw4vBo6%2FppHvu3y%2FH8rlDYzgP4Fdy8xoYO3a%2BqT0vQHVc4hRtkTp&X-Amz-Signature=b7d1b3730fd1ce86bddc735a3d9ce34337bfa799bb27a1fae80b517da4727977&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCZPLXS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHGg1jeJkugtMkRCj5Nl3BOXcnx1adg0TvERayhDMcOGAiBsswRvmpAKAJ%2Fu%2FzocQ%2F3c9hLsGdTpROYSg923B5l%2FICqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIjUVMLFlvnIl5533KtwDC8HGoBYpD2sad2QnG5cj%2Fg6pdamA8PRIwCR8109qVHpCZJ3Ju9JOBAh9CjBTOZz1Zq2F%2BfD32N%2Bv99npvPGPfLUsvxvkQSRZWo3mT2RTzjY33n%2BkM53yNj%2B4XEJfmWk9qKthO40kjeEwqdrWfN%2FuDOedwgN8NMSt1xBA61CBA7%2FK4b1iiWgwT0A5RjuVEtPwi56poCcFqMNpm75g33rAt38vJortzsxtpU%2FYqjZajJYre%2B2VeVvnRgPBLTGUN2LS0ybrzW%2B9TWzwiC9BKxq%2FgRqdEPCDhIIg6zTIsi33ksQAyTSCbLFVoHumxPj4L4LGiU0kj6WcrZGY69zwaV6vVNjZpSXCsa6PBCwnRwbwZoT1JnsxVRatqGqpDs9vnxpFBxgrgnMRLliBsfXvAERls3taGcYk7fRWDXWdUzuELUAiPKLNRUWGtJKmeB5OyQkfbPIxxuxC6yg3bFCUtxg643ifvjLKsQa8t8GvioS9fYRgjAPX8oB7kRvEPH7GKaPStRVpTPQ1HtBQrtjeCwcegnVuf42v3crbcrWiILSCNNESlBc23v3y2fg4S4Gl4p8nNviDDCmW6XLqYeM2%2Bk9ocN%2FcXZt3x9S418ns%2Fm62foM5cHb8zcyUFsBhpXswo%2BP9vgY6pgHHAUjSV4HdibXOeShyukDB2ZPoy6wknjRNUqZkFNffgDIss85lHIrDSc%2FP4nufzOeAGvqpZO6bgbpXFCzGc1wkhhn1U%2FowB8ObCDTSY2M96fKEO2QiMJxpWm%2Ba%2B0Zgt9u62Bx2PSfO4P6d8ZR%2F7kJMULHivBlAyCmZapJQtDK2MXJdAz0z%2B9Zgfn0F%2FoLaCSq5MPmGCNbpL2nn7Wfo6rzqdpSwaIZX&X-Amz-Signature=346323cf425d120f84eef88bd1293b718f7aec5dc8156389f89599d597184975&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
