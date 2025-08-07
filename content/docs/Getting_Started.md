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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYSQRI5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG%2FI45ywoOIRueWYcuGZDX7SioP55%2F5arPcQf6oxvpsYAiBvbk6w8WFDIGMetiBZfubGLdejvft6DH6oJ7dyYGNvvSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQoanAXCSFl2bEWKKtwDYx1DPfITFpAMW1lZp4AQhFyyx7DLAru8D4J1P%2FY29cdUrHRWh3o2Sb0ZE%2FVoMXbj43HPfe3x%2Bh90U5bzo4fzOu9bdnk4YYc62ZHrkwMyt4slbbuDOi7NMVHgS9DXm8oWQLYmz7yKSfK%2F%2FWoOxc0khYzPgNBRNrxFuJj7eHuqIDb4q1aUIZyWt8ylyuDxddGXvtYq7W1pjbNTt6CP4A3s1rxeXB7AyeIgvWh9b44Lg%2BsqN%2FuzI5max%2BBe%2FSUvfJDHjBjcU2ftRrnUoye5PDqhE9UlFZLTN1VL%2F26RATeptXVqoexhZ%2BAleG006IrTb2pR%2FiPlLycgTxe7ArdZpDCpQeckjD1KrG7Vp0rYKhEdigbiNoKHV2swVc7YyiluLyMtAueZosn0P8Z6IriZoM%2FQT584LfWwuuqwxGKXbmqGk5mHut%2B4oFtZoPxJzAUYQDbjGsOaESrYg2P7gTy3vFwkABL5DRAn1OzJajUHyo%2BiquglKbFdCKGJIe6frSVKpT7yO3C7mCEUTevLFEE3JcclPAxFcLieFCId51dNbaxCoFKkLTtM8HkLAWtt6EsZuoNysq%2Fq0LdC8L5aXcl2slL2mb2R5in%2B7233wtG73%2FoxMecWWWfYvAMYQTkuUWEwqKLTxAY6pgEsYdNDhuH5ZGi3KmFYaNZcYaAG2y1toLnpbk33ATARZNZSWERS1YBl5jDkJqfkLxB5Jn5IdoPekWMLM34twWsLoXI5eq7sK1GxTKTusE2wmMqBoAGJYfxicdZh1jrDxdJqCWfpALV3OqV9XQ4TarfMAUWvgJxCOzA8F7d1%2FGXV6U6ubFU7hVd%2B7Eh0GC6WsLCSwOUwvsOkm6dSjrtNfPDCq3JlGjPj&X-Amz-Signature=054a76ca91f38def9a15dcf0abf1a2f4dc7942e52fa9640cacb812b265932e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYSQRI5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG%2FI45ywoOIRueWYcuGZDX7SioP55%2F5arPcQf6oxvpsYAiBvbk6w8WFDIGMetiBZfubGLdejvft6DH6oJ7dyYGNvvSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQoanAXCSFl2bEWKKtwDYx1DPfITFpAMW1lZp4AQhFyyx7DLAru8D4J1P%2FY29cdUrHRWh3o2Sb0ZE%2FVoMXbj43HPfe3x%2Bh90U5bzo4fzOu9bdnk4YYc62ZHrkwMyt4slbbuDOi7NMVHgS9DXm8oWQLYmz7yKSfK%2F%2FWoOxc0khYzPgNBRNrxFuJj7eHuqIDb4q1aUIZyWt8ylyuDxddGXvtYq7W1pjbNTt6CP4A3s1rxeXB7AyeIgvWh9b44Lg%2BsqN%2FuzI5max%2BBe%2FSUvfJDHjBjcU2ftRrnUoye5PDqhE9UlFZLTN1VL%2F26RATeptXVqoexhZ%2BAleG006IrTb2pR%2FiPlLycgTxe7ArdZpDCpQeckjD1KrG7Vp0rYKhEdigbiNoKHV2swVc7YyiluLyMtAueZosn0P8Z6IriZoM%2FQT584LfWwuuqwxGKXbmqGk5mHut%2B4oFtZoPxJzAUYQDbjGsOaESrYg2P7gTy3vFwkABL5DRAn1OzJajUHyo%2BiquglKbFdCKGJIe6frSVKpT7yO3C7mCEUTevLFEE3JcclPAxFcLieFCId51dNbaxCoFKkLTtM8HkLAWtt6EsZuoNysq%2Fq0LdC8L5aXcl2slL2mb2R5in%2B7233wtG73%2FoxMecWWWfYvAMYQTkuUWEwqKLTxAY6pgEsYdNDhuH5ZGi3KmFYaNZcYaAG2y1toLnpbk33ATARZNZSWERS1YBl5jDkJqfkLxB5Jn5IdoPekWMLM34twWsLoXI5eq7sK1GxTKTusE2wmMqBoAGJYfxicdZh1jrDxdJqCWfpALV3OqV9XQ4TarfMAUWvgJxCOzA8F7d1%2FGXV6U6ubFU7hVd%2B7Eh0GC6WsLCSwOUwvsOkm6dSjrtNfPDCq3JlGjPj&X-Amz-Signature=57d8b54e58d5e1f2a6f1407026705f748fad940df79478b8ad593c882dee05ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYSQRI5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG%2FI45ywoOIRueWYcuGZDX7SioP55%2F5arPcQf6oxvpsYAiBvbk6w8WFDIGMetiBZfubGLdejvft6DH6oJ7dyYGNvvSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQoanAXCSFl2bEWKKtwDYx1DPfITFpAMW1lZp4AQhFyyx7DLAru8D4J1P%2FY29cdUrHRWh3o2Sb0ZE%2FVoMXbj43HPfe3x%2Bh90U5bzo4fzOu9bdnk4YYc62ZHrkwMyt4slbbuDOi7NMVHgS9DXm8oWQLYmz7yKSfK%2F%2FWoOxc0khYzPgNBRNrxFuJj7eHuqIDb4q1aUIZyWt8ylyuDxddGXvtYq7W1pjbNTt6CP4A3s1rxeXB7AyeIgvWh9b44Lg%2BsqN%2FuzI5max%2BBe%2FSUvfJDHjBjcU2ftRrnUoye5PDqhE9UlFZLTN1VL%2F26RATeptXVqoexhZ%2BAleG006IrTb2pR%2FiPlLycgTxe7ArdZpDCpQeckjD1KrG7Vp0rYKhEdigbiNoKHV2swVc7YyiluLyMtAueZosn0P8Z6IriZoM%2FQT584LfWwuuqwxGKXbmqGk5mHut%2B4oFtZoPxJzAUYQDbjGsOaESrYg2P7gTy3vFwkABL5DRAn1OzJajUHyo%2BiquglKbFdCKGJIe6frSVKpT7yO3C7mCEUTevLFEE3JcclPAxFcLieFCId51dNbaxCoFKkLTtM8HkLAWtt6EsZuoNysq%2Fq0LdC8L5aXcl2slL2mb2R5in%2B7233wtG73%2FoxMecWWWfYvAMYQTkuUWEwqKLTxAY6pgEsYdNDhuH5ZGi3KmFYaNZcYaAG2y1toLnpbk33ATARZNZSWERS1YBl5jDkJqfkLxB5Jn5IdoPekWMLM34twWsLoXI5eq7sK1GxTKTusE2wmMqBoAGJYfxicdZh1jrDxdJqCWfpALV3OqV9XQ4TarfMAUWvgJxCOzA8F7d1%2FGXV6U6ubFU7hVd%2B7Eh0GC6WsLCSwOUwvsOkm6dSjrtNfPDCq3JlGjPj&X-Amz-Signature=1f427f2de25a69d9dee1d2e2a57cd299a8e60f76e5f125e4246bfc213bead9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWTAB2MU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC1zh0cXQs8maS6oXAbRzyFwieZnyl89OS%2B%2Bt1hlU4U3AIhAKx%2FIEILaElDWQDcBjtz0Ot0olfNQctrGMnbr8R3bulnKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv0mfQFD7pTDFm68sq3ANKrhsq4fwucrDrSrjFTPtZHXKUT4CJ2PstVGonJlWN%2FE488lItU1s7RctBpqMcACD122v1SA5iQ7%2FU10Bol49GPZwsbGAN8k0mURAxSussMBiLpeYdqfURKPlKBNAn%2FXxGMTpvkhJiZ8AFBAMPwcwZtRtNEBF2JRyCuskhrFxLwLKkwjVBhcWCpByCHYGWoAK%2BbjWkhlWgdSIZb4W3RcFdjRMExvMHWtPtqCO2Xj1lKYzq002Gey6wwj4UWZbiakx8NORw0oaGHHOCtGpyCAbz3ZCZezfZFpyIfS9LwTHp7U3LWWxp8c01ruXdiL2D0QmTkhitpEe9HoQ%2BfEunQUbvD0leopRmlD3mAytVXMjcOPLKk2YKspEFeti4z5VzbZGw9Ez2HM5fBfMAYGrMVIS3kto7Yjbs0dQ9CQn9XN5CEhg5HH0pIVi9WlOmpg%2BT%2BtejNXhSXpx35Hd9H1ak2L%2BJSOkZekcc8vJ2K2vG9NcVTyj9UfJZn%2FwWhqHtq%2BCv3KBeZ93viRpr1srLC1xO9JVyejIak%2Fc9bklTQKnJF1YZRquJeUqKOf50eFqWOuUWfXYku%2B5IYbXceXpjSXlWkDsluzY%2BNyKMtHVKIoAda%2Fqykfomk9%2BcS6868P8H6zDhotPEBjqkAbMZGbYtIQRaqWC6jaFVN96ITtifTlhuG6xru8SsKuy8S%2FKUrrjFHJhZ18THnNdhRgW5X7IksR79U7VQ0UDEVQ%2FLRo7QU%2BP4Iw0r0rQoawEQOZl%2BQqQBrL%2BnY%2B35IqMKbrqoKPNurtYVEj80Io%2BORILKCPhuMQYsJHZu3I2Q0fa82%2F2DJvOcdFQtuyAfInHAai9bHwWD2%2Fejf3HplBARkzTwLwIc&X-Amz-Signature=c52c9d3f47088a95900573d27ee3634a9a06ac60a18f2323899836dc82a51890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DD44J4Y%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD8WVdjonBBqdmu38pfA7Xnu7xoW5ylQOF8cshliCcsOQIhAM1WZSOIsYV%2FEoYmux0RFaBhgLZktkZ50bqHTOCHUWFGKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhEf%2FwOVklRCO%2BfeYq3AMH5keK2n%2F%2FM%2FZo4rPnGtJHfZFjEPmLr9YZlMljRJfuo%2FR7acmJ0m%2Bo6REwk0qXD1dM2wtlsPDSiwPc1ug9yZCkw9jIUYbsp46JyRB6oPMbbY48%2BMurNzarScyZMBlsigbno%2FMI4tmLwRTV3mrBqdFfj3oYhizg2jDScRaeOrzWlfNPNnVl%2BrnJyYltPDzydMuHw0gUkivrNSPbR7ElF7Ut2vXQyrrp3Pe45W40D9zqtHilf7omUkslWgiAqPwf53OYQbZYiamBmcN8jKPwEMSdezyHEPCudrjXEWmnrsczTmAInfRzCOsxnlBMtfkoxIyvayo5oLD26DCfSbreIVVMjXaSWX7%2FeSWtiNUbZwcsi5kIKciSCgdHxCEKFbD2h8RUR7TVzl3IR%2BEKh1NUlpDLG%2FHkVRKFwJGYxjJe%2FNpoLe%2FuBQKNEUZnCPclN8ogWdX%2BAmQXMfN7LRCLPjIMqRFbbAYCTgdcXSvrpdHi9m2YckGGtNXdaheg5yvYpzn53IlqumlqMxyjuhv7LX4lPjRe03zZhCbheB0kzv%2F12H8kZD4nuOz9uCh6JEZJBwQ3pmS%2FAVi7pW8oo08eiL4xypElVyppxK8%2FDW0BKWdEwwTyp3q%2BcYbpyTQ7BraqQzCEotPEBjqkAWfkQScAeCxFRs5ddDujs3FFgoJ2VgNL%2BWCiAx9W6bv%2FULCEgLj6%2FFguoRahmoPswYUX3t7UudDhx0YUtcQTTZPwHJxpugKkE2dQCtveMT27z0mIRGovejinXosJRhYhyGuOSXax9CZYiw1mU3vqMoticnAid%2BEDP7P4Ff1oA6OjmgvbaZM7EE9vxoHyNSMzkMMeNfbnHWg%2Bzqxa6zDSlzwfKvYo&X-Amz-Signature=551afadb573238f5415638d26b5e93ed392e471cb64db5cd9559dad19f2fa00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYSQRI5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIG%2FI45ywoOIRueWYcuGZDX7SioP55%2F5arPcQf6oxvpsYAiBvbk6w8WFDIGMetiBZfubGLdejvft6DH6oJ7dyYGNvvSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgQoanAXCSFl2bEWKKtwDYx1DPfITFpAMW1lZp4AQhFyyx7DLAru8D4J1P%2FY29cdUrHRWh3o2Sb0ZE%2FVoMXbj43HPfe3x%2Bh90U5bzo4fzOu9bdnk4YYc62ZHrkwMyt4slbbuDOi7NMVHgS9DXm8oWQLYmz7yKSfK%2F%2FWoOxc0khYzPgNBRNrxFuJj7eHuqIDb4q1aUIZyWt8ylyuDxddGXvtYq7W1pjbNTt6CP4A3s1rxeXB7AyeIgvWh9b44Lg%2BsqN%2FuzI5max%2BBe%2FSUvfJDHjBjcU2ftRrnUoye5PDqhE9UlFZLTN1VL%2F26RATeptXVqoexhZ%2BAleG006IrTb2pR%2FiPlLycgTxe7ArdZpDCpQeckjD1KrG7Vp0rYKhEdigbiNoKHV2swVc7YyiluLyMtAueZosn0P8Z6IriZoM%2FQT584LfWwuuqwxGKXbmqGk5mHut%2B4oFtZoPxJzAUYQDbjGsOaESrYg2P7gTy3vFwkABL5DRAn1OzJajUHyo%2BiquglKbFdCKGJIe6frSVKpT7yO3C7mCEUTevLFEE3JcclPAxFcLieFCId51dNbaxCoFKkLTtM8HkLAWtt6EsZuoNysq%2Fq0LdC8L5aXcl2slL2mb2R5in%2B7233wtG73%2FoxMecWWWfYvAMYQTkuUWEwqKLTxAY6pgEsYdNDhuH5ZGi3KmFYaNZcYaAG2y1toLnpbk33ATARZNZSWERS1YBl5jDkJqfkLxB5Jn5IdoPekWMLM34twWsLoXI5eq7sK1GxTKTusE2wmMqBoAGJYfxicdZh1jrDxdJqCWfpALV3OqV9XQ4TarfMAUWvgJxCOzA8F7d1%2FGXV6U6ubFU7hVd%2B7Eh0GC6WsLCSwOUwvsOkm6dSjrtNfPDCq3JlGjPj&X-Amz-Signature=26516a82c885b609498853a2acf202d9b86b3533def30d379059e40c968d4f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
