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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWWBCPH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW554a42pg4E3dK6lb1AAkGix9cgt2qJQKkYTG1JQGvQIhANJHib6YSvT3AdAFJ8n3V5fb0YnCtBDJnmL%2FCuxxRr1YKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYI9CyjgTsugH6bTgq3APrPzQ7XULILG1G6tXjfwlTZKB4ma%2FiSP4recimgv2eRbJzSCSaLpb2G6NzuMQpI%2BR0jYoDdeSDDIV58VS%2FGDpo78q8Mz4N0Ypapr8xQAARzxuosTaU4vzFZOhezVTkeBe0z1Ur8ohy97rHrlA41buRveDxUApz3rP1vuXi4QQaLpwiTpQ9zKuPew7x2fRd4jw6Zg3o6lyLVORaODzpxaXc5Rp9qLOD%2FpS0NVI%2Bb1G40X8ByUAyWdLsI6bHJDS90siVuQsquEd2ZUQhop%2B6n%2FbojLNhyNX%2BcOJCVxoXu5RFXlpswzsqCK0tvdFHdvggJSn3NKwT71OBHA%2Bb0dVDu1aKZqsir17x%2BA%2BlTi16mJt9AvXCgzdFWeidLN5339zlEWyc6cintaa3g56evz43T7ITKEmrHmCofacaquFIKWKrkDPEzyX6GHLLZ%2BNNLsGBDXt1%2FClhVYPqVv9H1tLb9qzPSxRYFmJPzt38stnnzXxsjQlJPKPy2OczOKhASPwLkgxQq7Q7r%2Bgd2an7pmQZDWkNCdFYhC2%2BcUHTru88l80tzVcP6Qm22eLo3H0leHHkGANw4a2OJu%2BomDiUTZDVFtiJz8QdkY1YcYIMOue7WwtavM1ceUudi2Qj4ocDDzDv%2FsTDBjqkASritQ%2BityvMw8voX0yil40eZsoCL68JDYk8xlKs9%2BrS9jzHcDxTYzqXKQrcvrSi7sWJwWX87c3iILt8tchNIG6NU5SRkeas5VZcl4GiyZv3ZwMIFapx0p1Xod4TlgSLeQzRAzMfeCsdiAgRVs8iSULrtziDATHoa7mFWM2rGQ19B84HcoZRuweDGdZnsYxcO5vcoZU2LOR6FzdmX2ZmCRzNySFq&X-Amz-Signature=ac26e9ff7517bc3f17651737efe86ba9b6b26abfa878c375031b533f94567ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWWBCPH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW554a42pg4E3dK6lb1AAkGix9cgt2qJQKkYTG1JQGvQIhANJHib6YSvT3AdAFJ8n3V5fb0YnCtBDJnmL%2FCuxxRr1YKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYI9CyjgTsugH6bTgq3APrPzQ7XULILG1G6tXjfwlTZKB4ma%2FiSP4recimgv2eRbJzSCSaLpb2G6NzuMQpI%2BR0jYoDdeSDDIV58VS%2FGDpo78q8Mz4N0Ypapr8xQAARzxuosTaU4vzFZOhezVTkeBe0z1Ur8ohy97rHrlA41buRveDxUApz3rP1vuXi4QQaLpwiTpQ9zKuPew7x2fRd4jw6Zg3o6lyLVORaODzpxaXc5Rp9qLOD%2FpS0NVI%2Bb1G40X8ByUAyWdLsI6bHJDS90siVuQsquEd2ZUQhop%2B6n%2FbojLNhyNX%2BcOJCVxoXu5RFXlpswzsqCK0tvdFHdvggJSn3NKwT71OBHA%2Bb0dVDu1aKZqsir17x%2BA%2BlTi16mJt9AvXCgzdFWeidLN5339zlEWyc6cintaa3g56evz43T7ITKEmrHmCofacaquFIKWKrkDPEzyX6GHLLZ%2BNNLsGBDXt1%2FClhVYPqVv9H1tLb9qzPSxRYFmJPzt38stnnzXxsjQlJPKPy2OczOKhASPwLkgxQq7Q7r%2Bgd2an7pmQZDWkNCdFYhC2%2BcUHTru88l80tzVcP6Qm22eLo3H0leHHkGANw4a2OJu%2BomDiUTZDVFtiJz8QdkY1YcYIMOue7WwtavM1ceUudi2Qj4ocDDzDv%2FsTDBjqkASritQ%2BityvMw8voX0yil40eZsoCL68JDYk8xlKs9%2BrS9jzHcDxTYzqXKQrcvrSi7sWJwWX87c3iILt8tchNIG6NU5SRkeas5VZcl4GiyZv3ZwMIFapx0p1Xod4TlgSLeQzRAzMfeCsdiAgRVs8iSULrtziDATHoa7mFWM2rGQ19B84HcoZRuweDGdZnsYxcO5vcoZU2LOR6FzdmX2ZmCRzNySFq&X-Amz-Signature=e50d1a9095043916cfc7eced5a7cb24ca70a019d464669ab36de79fdd814ef55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWWBCPH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW554a42pg4E3dK6lb1AAkGix9cgt2qJQKkYTG1JQGvQIhANJHib6YSvT3AdAFJ8n3V5fb0YnCtBDJnmL%2FCuxxRr1YKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYI9CyjgTsugH6bTgq3APrPzQ7XULILG1G6tXjfwlTZKB4ma%2FiSP4recimgv2eRbJzSCSaLpb2G6NzuMQpI%2BR0jYoDdeSDDIV58VS%2FGDpo78q8Mz4N0Ypapr8xQAARzxuosTaU4vzFZOhezVTkeBe0z1Ur8ohy97rHrlA41buRveDxUApz3rP1vuXi4QQaLpwiTpQ9zKuPew7x2fRd4jw6Zg3o6lyLVORaODzpxaXc5Rp9qLOD%2FpS0NVI%2Bb1G40X8ByUAyWdLsI6bHJDS90siVuQsquEd2ZUQhop%2B6n%2FbojLNhyNX%2BcOJCVxoXu5RFXlpswzsqCK0tvdFHdvggJSn3NKwT71OBHA%2Bb0dVDu1aKZqsir17x%2BA%2BlTi16mJt9AvXCgzdFWeidLN5339zlEWyc6cintaa3g56evz43T7ITKEmrHmCofacaquFIKWKrkDPEzyX6GHLLZ%2BNNLsGBDXt1%2FClhVYPqVv9H1tLb9qzPSxRYFmJPzt38stnnzXxsjQlJPKPy2OczOKhASPwLkgxQq7Q7r%2Bgd2an7pmQZDWkNCdFYhC2%2BcUHTru88l80tzVcP6Qm22eLo3H0leHHkGANw4a2OJu%2BomDiUTZDVFtiJz8QdkY1YcYIMOue7WwtavM1ceUudi2Qj4ocDDzDv%2FsTDBjqkASritQ%2BityvMw8voX0yil40eZsoCL68JDYk8xlKs9%2BrS9jzHcDxTYzqXKQrcvrSi7sWJwWX87c3iILt8tchNIG6NU5SRkeas5VZcl4GiyZv3ZwMIFapx0p1Xod4TlgSLeQzRAzMfeCsdiAgRVs8iSULrtziDATHoa7mFWM2rGQ19B84HcoZRuweDGdZnsYxcO5vcoZU2LOR6FzdmX2ZmCRzNySFq&X-Amz-Signature=acfe86ae1d43c50368555eea677f0489bbbcf2605f4c4efca859003d54928852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UD5TFDE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl2dRfaIaSoxj59wxkP2dV07CpZe14daYNEtGTTFs98AiBncXwDq%2BuKb870YwNjMB20X6JYYUT9BXlqRz2TC4W4ZSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9E3eHU2AW4A3wIaFKtwDkWuR5tUY%2Bb3NLOLQoAglBRWnm8%2BL3w92QxfcMhs899KJlaTyPNsCQ1OWYVQNbuye7e8FOBJrYSa%2FSl4svfZ%2FGDWfUTzihtseBP%2FpWFV6LqmZaTm94yQouX%2BU0WpNusZDBWFLv2CEBmcnxJXRPk4ey5WMj1ZppDrQSD0guP0FI8o36Nn3vHADMqVF4wIXdCI9GElJ4auhvfAidEbJK0k%2BEoQbxIKKjqUl6ryjx3fvoImJH2NGsnN9YgD6R4u7K1CCCSbnC96hU40QxOCzCjMqRlzhbzJfLonJ86V%2BfHjWu%2F%2Bxq3hhwo6oSyVYMNBZaArdZ6xRK2CyBBg6t4VBTJIcig4JNDXtiXSB3RrcOod9BuqfAMgPuLITjgbuw6I3abv%2BUS8BOAIRoeerj0Wq4OMjlPEPqoNEsDBGgf1hA9%2FvIw%2FLUFOT3WPLrJPQ%2Fp2ZJQV5fIY09ZV%2F3yIDdErhTRDbznBR7fz%2B3VPciClXx%2B4141ipOZqDKesQUWjHE%2FxD5mJrJY45h4K9C2YHZHnRLrGySGB9sF8h58W5KKUWcAQYvURRVcZOcDBsFPPsu%2FL86968QqiYu7LAF7J9Nw2%2BR2qhnNUtzog7byDb8nHqmJ4ej1EdKBV8VzNAFULNDBAwtf7EwwY6pgEt6yp91lDgexBciTGeziQuNhd5b5QZxYvLeOsY6LBZTsjgQvMPOwasrBPbSRXsWtU6L7Y7z80%2BH99mmoOJ265tnqOL8lQXgthlYnRCmG2diGnoLH32Gav3k2Iwm7wZ%2BjRqG%2BEHTwgfZKx5B2up2jTLb7dIHlH2r%2Fw2e5Cct2Tv%2FwO7QeQllH3JOOzpmE85Uj3T8Iaq6CJh2vXRJOc8VIoiYPXfrcfs&X-Amz-Signature=30dcb76b5da3ec38fef3f6ba594dde5584c76c64a3639623ce15b823e5aa0bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSTGJQRW%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClEEgXxdWWpMEHLjueB5w6SPqySfbI%2FlphN8oybUsVugIhALdwqfZO8o1xt1pWuKx6Hh4VNMf52kmrVtCsIuWY6EbeKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweMWWjmT3%2FUfbiWQUq3AOgVbt8mpTUZGNwiSw8SOf5dhLEEwruph6cbWPM7t7Q4gQZEW9JdrRIqeStaeaOAMCyFEoctQbUK%2BXyfN8AZmfnDUwjOtNEQw%2BltTt3Dgbod1CSEU8CLgSysAutZ5%2FBkMuWwb8bjRuSxMu3NNJsR8W75umXTJYXeVNFgJc9U4xdoU3C0tcOxdcM5EPCYMKofSBaBYNCyhPJCi8SriGib3tR%2F8MmVxBl7YVNOlN5uKyEDNnDptOBJqT939vZTnOg6JM56xRmsWk%2B68QlDmBRvR92tnrnk5y8zdK%2Fk%2BvHGasQEIKi9aPpDHah1bGdHjGH7Ehu%2FoxNg1KhyORUF8UhO7okLN38EnpBqDWFew%2FkfJmoG9aL%2FRi4BrX%2FC9joIR1YQt5KHJxoU8Uxyv9ikfwi5vY%2B1QqLCsPLTjqWB2ClEOXkYajullpiIcn4Y4opZ61WcqOLP2vplqfcee9E8YyW0PJWCYnGWhTdO9OxXjBrOVWgI88vZgAE5LpBOk6OpvMUT2NVC%2FfVqjmZxt5srw65DtYZEFVFTlSkWplszhgfyGzCjjY4o7aWPL3onwRUJ43o8Bsds7w9c5AU2ijuLypb4fbnRN4NV%2FJ%2FIjiXvbkUF8Nedhs6IlNjC8NiOnWUAjCx%2F8TDBjqkAbf5jNlGOX9MtMq0qYWvcWB3%2B7Wis9gDC0FyMikw6bPWyuyeAD1mm016wtgznFhnCgyLUdUhZQsEJQdbqSkpZX509YrpYlPCOA6q6%2Fix4YpcztCbtI4OnbKvR2CYNoQdBiHrYW%2F%2FL0P2mZHDir8PrNS8SH6I5GxEFlumOhM3WhciumsoI8PvkF%2BhlXrvpHwVy9%2FI35sXhEdpLofo4YOjCHvy2DO9&X-Amz-Signature=019e6bbb90d1da03fda172d063ba28040fc6d59550ace9ef2116f5155f225bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWWBCPH%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW554a42pg4E3dK6lb1AAkGix9cgt2qJQKkYTG1JQGvQIhANJHib6YSvT3AdAFJ8n3V5fb0YnCtBDJnmL%2FCuxxRr1YKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYI9CyjgTsugH6bTgq3APrPzQ7XULILG1G6tXjfwlTZKB4ma%2FiSP4recimgv2eRbJzSCSaLpb2G6NzuMQpI%2BR0jYoDdeSDDIV58VS%2FGDpo78q8Mz4N0Ypapr8xQAARzxuosTaU4vzFZOhezVTkeBe0z1Ur8ohy97rHrlA41buRveDxUApz3rP1vuXi4QQaLpwiTpQ9zKuPew7x2fRd4jw6Zg3o6lyLVORaODzpxaXc5Rp9qLOD%2FpS0NVI%2Bb1G40X8ByUAyWdLsI6bHJDS90siVuQsquEd2ZUQhop%2B6n%2FbojLNhyNX%2BcOJCVxoXu5RFXlpswzsqCK0tvdFHdvggJSn3NKwT71OBHA%2Bb0dVDu1aKZqsir17x%2BA%2BlTi16mJt9AvXCgzdFWeidLN5339zlEWyc6cintaa3g56evz43T7ITKEmrHmCofacaquFIKWKrkDPEzyX6GHLLZ%2BNNLsGBDXt1%2FClhVYPqVv9H1tLb9qzPSxRYFmJPzt38stnnzXxsjQlJPKPy2OczOKhASPwLkgxQq7Q7r%2Bgd2an7pmQZDWkNCdFYhC2%2BcUHTru88l80tzVcP6Qm22eLo3H0leHHkGANw4a2OJu%2BomDiUTZDVFtiJz8QdkY1YcYIMOue7WwtavM1ceUudi2Qj4ocDDzDv%2FsTDBjqkASritQ%2BityvMw8voX0yil40eZsoCL68JDYk8xlKs9%2BrS9jzHcDxTYzqXKQrcvrSi7sWJwWX87c3iILt8tchNIG6NU5SRkeas5VZcl4GiyZv3ZwMIFapx0p1Xod4TlgSLeQzRAzMfeCsdiAgRVs8iSULrtziDATHoa7mFWM2rGQ19B84HcoZRuweDGdZnsYxcO5vcoZU2LOR6FzdmX2ZmCRzNySFq&X-Amz-Signature=22f13b9ddc6781e5b00c0e15f420866abacf3f6b0a4de827e69c38f9da9f8c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
