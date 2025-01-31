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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTJ4H7H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1GlA4SCh%2F1%2F2gkCCt2rfUhYhvq1MAemXWizeqvhorcAiBXBW9rZ3qsp%2F54K2ANqgQoJYSTZmiLQndKIZORDk6tXyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9E539oICVzckoyXKtwD2S83%2F7PatF1%2F7icYJCrz%2F5YrN1tB%2Fbqt3IsA54HQvUJWvuFUWJRNr3yWcnPyhcreFOD9V1AJuR2I44SzGu7%2BJvGcgtl76pWdty0djN6qTHky57q%2BmSKBWYX7KxIoGCjM7Sr67HVzkOEt9eJu1mnTtVOLpQy2fzbJSPd9qr6%2FwRgsXIawML4%2B2naHdoLJ25Jm4WoK5MvZGTlQk0KqwP6wCqVP%2FTf%2FhbL4FwWryoeBkVC6BnkRgTLSPucIxMmvwjplD1Ju9e%2FTP5Bv270QuRO%2ByRKWmBRcjcWuEVigzcOKR0BFimrYualUcc6%2F%2FRpwSQ0QfRg%2F3qruEvDWDW2%2Bg7rNO08rG5x1Xi4kT28pjOBnLBu8drNUYWKPOe%2BDfOw5SGjrXmV%2FM9eihzbC7CWurEWRXgj2S0EBBIDKPNjl679e%2FAt5rZwsGGNRE5i70ePHBBTY5xd%2FTVlEs0O48tQPP2V2Huj7ElEr7cc3EDjqx79nagqXsrxMTAgg1j1yisRufTzIXsYY3Hc3jIBeXWjnf28U%2FvtmCX13N8yUuofV42yrrZXEbCfTWgDxm1tZ1Plpa7cBzo22uaRvr%2BwksdBC%2FXR6ilfMyzyOqCBam43OXhY5RrOnVRlh%2FiEo52PPwYsw25DzvAY6pgHd%2Bc0rVEVkWOZQTZDnio%2F%2FevVw%2FtppX3OPjys9QiCLddxObe0ZKr6t2jW6C6fFlS7B0xAU0u%2BAT%2BugqKmG55Afn7q9nr3jCQYEKPg1TsAnxoF9QKckY93qbFrZBA%2Fpu%2FNFmTiTANmKjKAjTDrxnrrQdNJvu1WfHSpOg3jwhU5ppRKqU9xwZ%2BVAiZO7SK2IDA4G6iAGtx%2BS0XLPiZetA18DewjkCX%2BM&X-Amz-Signature=10dc49bdc7877919a5a32883f09b3ff89fe0d96b62e8412136d62beb1a698fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTJ4H7H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1GlA4SCh%2F1%2F2gkCCt2rfUhYhvq1MAemXWizeqvhorcAiBXBW9rZ3qsp%2F54K2ANqgQoJYSTZmiLQndKIZORDk6tXyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9E539oICVzckoyXKtwD2S83%2F7PatF1%2F7icYJCrz%2F5YrN1tB%2Fbqt3IsA54HQvUJWvuFUWJRNr3yWcnPyhcreFOD9V1AJuR2I44SzGu7%2BJvGcgtl76pWdty0djN6qTHky57q%2BmSKBWYX7KxIoGCjM7Sr67HVzkOEt9eJu1mnTtVOLpQy2fzbJSPd9qr6%2FwRgsXIawML4%2B2naHdoLJ25Jm4WoK5MvZGTlQk0KqwP6wCqVP%2FTf%2FhbL4FwWryoeBkVC6BnkRgTLSPucIxMmvwjplD1Ju9e%2FTP5Bv270QuRO%2ByRKWmBRcjcWuEVigzcOKR0BFimrYualUcc6%2F%2FRpwSQ0QfRg%2F3qruEvDWDW2%2Bg7rNO08rG5x1Xi4kT28pjOBnLBu8drNUYWKPOe%2BDfOw5SGjrXmV%2FM9eihzbC7CWurEWRXgj2S0EBBIDKPNjl679e%2FAt5rZwsGGNRE5i70ePHBBTY5xd%2FTVlEs0O48tQPP2V2Huj7ElEr7cc3EDjqx79nagqXsrxMTAgg1j1yisRufTzIXsYY3Hc3jIBeXWjnf28U%2FvtmCX13N8yUuofV42yrrZXEbCfTWgDxm1tZ1Plpa7cBzo22uaRvr%2BwksdBC%2FXR6ilfMyzyOqCBam43OXhY5RrOnVRlh%2FiEo52PPwYsw25DzvAY6pgHd%2Bc0rVEVkWOZQTZDnio%2F%2FevVw%2FtppX3OPjys9QiCLddxObe0ZKr6t2jW6C6fFlS7B0xAU0u%2BAT%2BugqKmG55Afn7q9nr3jCQYEKPg1TsAnxoF9QKckY93qbFrZBA%2Fpu%2FNFmTiTANmKjKAjTDrxnrrQdNJvu1WfHSpOg3jwhU5ppRKqU9xwZ%2BVAiZO7SK2IDA4G6iAGtx%2BS0XLPiZetA18DewjkCX%2BM&X-Amz-Signature=6717cb5ea08329532ad523e316f115fd172701b448bb7c56b7250969cf9933e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFNUZWT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJjX36IKEu%2Btxm1UXDnDasNcojI8IEOCsFNCgHsp9u6wIhAI5UGrSUKnCa%2Fjqt%2BmMfQWxo4rp7yabR1BVDVCrWe3y1KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLJFYYd8FLv9FAFrkq3APN7fkg3R9z2W4lKmXJgpjUyMeyhl8RyPKZB3ijFlnZ8JL8LgwypjKsGIWO9EuWACj2p41ReOYl4v4mBWMx7cYn%2BpP%2B6HMg2XBNRc%2FB8wGBYfPX1Ms5wz8znEunJ%2F7CaSQ2HjP7XmMqeXxZqvaPDQ993LfbUMDxMxhuJjhodnenxie%2FgB4Z0FDedhKqEO5JwpFx8BmV2GTPhYsjEZXjsQPDpJFiv03n%2BOpysFwHot9O1z3yg4VOs4gV4cl47W9RxTlmjh7hh%2FMAfFGdcgZ6XVgkP%2BWay8IOpluARZl%2Faqm9yPgAhPxMSkcLrt6IHqyw7xI4lOCiTamC0RXtANxRIGxlL55VDVWRo2YYLIgHyZLi%2FHzPaJ60a%2Fwac1PnE9qZwXQ30oPz%2FVmtbkNxeBBr3dC88co%2BwL6%2Bum%2BumZREFrH%2FPgoNBELC5VNGQ4EvjEYRf6fUrRSnfLVieA5fhh4IPaKuyrgxTJ%2BBLyycW8i78tLl6ih1%2B%2Bl%2FuG5KY9iqtgJ7MytiUnuyu12e%2B8WmypkPHwbXmEdRm2gRcm54QJzcjG5%2F6qewF%2FoRW11xG551ONNKQ6HzksFyZ1zmtr20yP%2Bw3Vd%2B90e3SvCffK0e%2BcDJTt5Kd9WQ1CKHjBoUlQ1DsTDckPO8BjqkATSjNO3Y0d%2BzVkB%2FLkdD6mlruir6%2FQQKCqxUZaCkbKdiZMye%2FmZ878BfY3acCf9AWDmNfhJWUebDMTipHPg5F5KLPgVTc%2FSexy8TN4mbHlSRapXb8zNmHqzoCezZHwFLQzs5cKN%2BuO%2BvG3h%2BYflMNJSr%2F%2Bjvd7OAkMz8Vn%2FdpgyvBJRi1vTdQnbA2PLBUSKlV7YMRpBBCpYfIN2eoFSDuJ1IIxD1&X-Amz-Signature=31d57ca896828f6c7436eaeae57e6269317313fb7700a5cc47c22a4eee0bb19d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILTJRET%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AiHtVryu1NtA7C3UXsgzfZV4%2BndrxAlPKY2L3DAo5AIgBfwKM4SlnumAKHeaCozeo4TGQ6SwidG2%2FMxMDiqG6eYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDezF93OWYzoYi91ICrcA0HRTLblPOcSJOC1jT%2BLBuTSA9kwI2m6LWb6d%2FlEi0ibLJ5VXuEla8LhxTolGqi98gktkmGm3IDZZWEori2IwOt6CgxkM2Jo8WtnNwyjarxm8Vx2F1u%2BS9CJVE73Dh5JHSR76g1RJr9wBX0OSCyN7%2FgCRXYW6Zcykj8ZR8VSQLiu6YkGCtxrWb%2BJWzJl7qoQnZown1Vpz7kW1gWYcS3CN9pmoIH3FllbDgEvpBiAJesN2U1aLWrMPkQ5lXLZ8YEyZQ1nlOWVDTuj2k8WAtOJx29gI52%2F9Xpbm978f%2BB82CQdCk7IF8eSCqKnnqcHc9sXnyTWQRA1H2FFO8UJhR2xp0o%2Be39dN4yzXmuku8Clo8DJXyPgtp0KhGJe9T6enolrH2EZIVPAiDvNpUM8Tj2d2TgPfRIwekeapQKbAwF2Nl0hJFH3AYonXs0b%2BVK9QZ4roOwm1LxOJhXxUIUbuQnGUwiSUBcUeyDNL5mtPE02FnPxjioDXCMyF8bm%2FXhR7ry7RKUlLmWXlrZ02A3jzpmkhojrzdrhShydjKUZjakYIc05fJGySR1oXDPkMzPXDwiWdV%2BJLruUMGKEB64hTLYrR388emSEKuiRweVRWBu71w0bXT3QZOx7P1DX8Hd3ML2R87wGOqUBt1fUyKMSKxLer2DCEAD8PDN3tvXs8XG85g7OD4MrWEDLYzs8b30tRvr2mr8j3xhzFILbJnuK%2BbS0OuRDxtUgwKiw3gXaohpmHnthoqgCaCQQY9ZDekwzAVfmotbv0PG3MfsFiBUU8jDvgxB1Y0mDgldaULI1wrtIq5tt5BF6c1vkIPQoqb774dWe6gOA0avC6KQUR1iH%2BoknETD%2F2xvbutCPpbPL&X-Amz-Signature=93139fc3eef2ce3a454194d2afa40e2be7d69cd7983170c8253caf8fd37edeae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTJ4H7H%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T131340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1GlA4SCh%2F1%2F2gkCCt2rfUhYhvq1MAemXWizeqvhorcAiBXBW9rZ3qsp%2F54K2ANqgQoJYSTZmiLQndKIZORDk6tXyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9E539oICVzckoyXKtwD2S83%2F7PatF1%2F7icYJCrz%2F5YrN1tB%2Fbqt3IsA54HQvUJWvuFUWJRNr3yWcnPyhcreFOD9V1AJuR2I44SzGu7%2BJvGcgtl76pWdty0djN6qTHky57q%2BmSKBWYX7KxIoGCjM7Sr67HVzkOEt9eJu1mnTtVOLpQy2fzbJSPd9qr6%2FwRgsXIawML4%2B2naHdoLJ25Jm4WoK5MvZGTlQk0KqwP6wCqVP%2FTf%2FhbL4FwWryoeBkVC6BnkRgTLSPucIxMmvwjplD1Ju9e%2FTP5Bv270QuRO%2ByRKWmBRcjcWuEVigzcOKR0BFimrYualUcc6%2F%2FRpwSQ0QfRg%2F3qruEvDWDW2%2Bg7rNO08rG5x1Xi4kT28pjOBnLBu8drNUYWKPOe%2BDfOw5SGjrXmV%2FM9eihzbC7CWurEWRXgj2S0EBBIDKPNjl679e%2FAt5rZwsGGNRE5i70ePHBBTY5xd%2FTVlEs0O48tQPP2V2Huj7ElEr7cc3EDjqx79nagqXsrxMTAgg1j1yisRufTzIXsYY3Hc3jIBeXWjnf28U%2FvtmCX13N8yUuofV42yrrZXEbCfTWgDxm1tZ1Plpa7cBzo22uaRvr%2BwksdBC%2FXR6ilfMyzyOqCBam43OXhY5RrOnVRlh%2FiEo52PPwYsw25DzvAY6pgHd%2Bc0rVEVkWOZQTZDnio%2F%2FevVw%2FtppX3OPjys9QiCLddxObe0ZKr6t2jW6C6fFlS7B0xAU0u%2BAT%2BugqKmG55Afn7q9nr3jCQYEKPg1TsAnxoF9QKckY93qbFrZBA%2Fpu%2FNFmTiTANmKjKAjTDrxnrrQdNJvu1WfHSpOg3jwhU5ppRKqU9xwZ%2BVAiZO7SK2IDA4G6iAGtx%2BS0XLPiZetA18DewjkCX%2BM&X-Amz-Signature=d42adf0ada2d0cfebb1508a0077346a6744b271d9faad642398092de07061a94&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
