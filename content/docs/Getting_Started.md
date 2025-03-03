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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5AVYPV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FjscsaYVejXQKJY5Si5yaMy%2BB012N%2F0uxuSntZdvlTAiBwPw7k8fwNBgPQxpalqyl0341mmdwj0iJ%2BSqd1ClXyUiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YafDnqM6QPBEv%2FwKtwDPIrw5WajFFVaFKHF2pHce5gwCEWfGKDoB%2BD1IpcxVtYRG%2BEmWy9ZQ60F%2BccO1yK%2BGsyoTMm7rHymBLJyxQHR%2B%2FYrsTc%2BXev6p3CGwAxK%2BmQW9CMWPPHKb5ZbaIktOVz23fHdkxh8OLenfY67I7dlN3IRssbpbkYKA2VGSngFFZZRThh%2BWSvByaYsdEECBwyPlyItC5Cjxg%2BVBUgHbR79OB6o4rvDjW9vywIRsr83Q%2Be0LUEiTO%2BRHviJFi0R%2BubAesnDE7LPCof34JQyakjqQiYJGb5Ukp6nxdNWaBrIzLECAK27pQfKLsNXG9y85zctJGTJy0FNmb9j9zzihN%2BqQMiC6it2M%2BbOfesqTuhbN12drAdiv9Kvm1looJoz4%2BC6HUSYjWIQos3oCVikRfNurnJ8vl8BEIO0kWszigZFd2dsDZ9mv9FYjiqyFW3xAu4h0Lgh%2FKgzLxTyt90UZv3t6eRr61Ud3Zzi2mXsLfCPuhElnuwz6RrDIrLClfSfiyt6xZiNQ%2FuKA126l4Rx%2BZholUCIO0wkNh760SlamUUWhp5JZBc1uOc9nnP8XUHx3u2dySkqIFUZob4xr6NgCVMnZJ6nQ8B0oLwXS4C62wWUOun1xuz5DfV4xRW%2B3XYw%2FJ%2BUvgY6pgHm9PwqwezycR1fqYtgfoeof7ccVK36fsmVEZOCzMOlvoLgFypdiyXTLb52blqz26g%2BrANChX7KcxfiBkspP6HHxs95G4XxL2I6lY8UlJ3yJ7TiI4GlXMhTSdhNJK%2Bk%2FEAEeRLHfTnk7psqPgeFgSARKCFxosXNldLXWfWraKp9yDOFJW8mQRzT9XDBVi2h23PwMcGHilTc58Zx%2BDRjadwForlusXWz&X-Amz-Signature=71b910f2fa24051ab405b46a42097c0a872c89a890a4868147f40eb5a17daa40&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5AVYPV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FjscsaYVejXQKJY5Si5yaMy%2BB012N%2F0uxuSntZdvlTAiBwPw7k8fwNBgPQxpalqyl0341mmdwj0iJ%2BSqd1ClXyUiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YafDnqM6QPBEv%2FwKtwDPIrw5WajFFVaFKHF2pHce5gwCEWfGKDoB%2BD1IpcxVtYRG%2BEmWy9ZQ60F%2BccO1yK%2BGsyoTMm7rHymBLJyxQHR%2B%2FYrsTc%2BXev6p3CGwAxK%2BmQW9CMWPPHKb5ZbaIktOVz23fHdkxh8OLenfY67I7dlN3IRssbpbkYKA2VGSngFFZZRThh%2BWSvByaYsdEECBwyPlyItC5Cjxg%2BVBUgHbR79OB6o4rvDjW9vywIRsr83Q%2Be0LUEiTO%2BRHviJFi0R%2BubAesnDE7LPCof34JQyakjqQiYJGb5Ukp6nxdNWaBrIzLECAK27pQfKLsNXG9y85zctJGTJy0FNmb9j9zzihN%2BqQMiC6it2M%2BbOfesqTuhbN12drAdiv9Kvm1looJoz4%2BC6HUSYjWIQos3oCVikRfNurnJ8vl8BEIO0kWszigZFd2dsDZ9mv9FYjiqyFW3xAu4h0Lgh%2FKgzLxTyt90UZv3t6eRr61Ud3Zzi2mXsLfCPuhElnuwz6RrDIrLClfSfiyt6xZiNQ%2FuKA126l4Rx%2BZholUCIO0wkNh760SlamUUWhp5JZBc1uOc9nnP8XUHx3u2dySkqIFUZob4xr6NgCVMnZJ6nQ8B0oLwXS4C62wWUOun1xuz5DfV4xRW%2B3XYw%2FJ%2BUvgY6pgHm9PwqwezycR1fqYtgfoeof7ccVK36fsmVEZOCzMOlvoLgFypdiyXTLb52blqz26g%2BrANChX7KcxfiBkspP6HHxs95G4XxL2I6lY8UlJ3yJ7TiI4GlXMhTSdhNJK%2Bk%2FEAEeRLHfTnk7psqPgeFgSARKCFxosXNldLXWfWraKp9yDOFJW8mQRzT9XDBVi2h23PwMcGHilTc58Zx%2BDRjadwForlusXWz&X-Amz-Signature=9dd788ebb33acb4aa110ce11804bfcb433bb9d56569bf4da787df88cfb4aedcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHRPNAQF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F0ZPQ4HkLKJL2u4LAQYs%2FNaU59A%2FkG%2FHkFTqvdYRKCAiB3K6r7apOPX%2FhHkkO3pVfOZUqL6cAm7K1R7X5jC%2B4JASqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBKRnj88aAg1WRW3JKtwDv9MB85nEmjj5eWtN2otYevFx0%2BWutBdQwndZP6qQ5OAfThUHnmCvQ5sv5ICcy228%2F0QxK8tmUnRVPpUXibMXc%2FhZ48WD5PlX%2F5XvBGcK0DMCATYe7uJ%2BwI5GkWgqad1nd6ISm1SD6TTDwkWPWtByI5TBgVTv51d6uK7Kk6nXPP%2FGuzhvXcWdyctaG1QGFsL0Fzn3puA1IiaJ%2FUkYIp288HXAaaSz2sBvfh0Ebb1v4bqWkmU79ZkMd2SOgvNKLM9wzjJabGBAYB0cEsO0p204453f9P2RoJe4sLAE3E8eAoSAfO3FJ2oS3%2FWPZEUoar7isamchFfLs%2F5iUyu4j7jVUreEX6inoUAhOHseOfoPq5SwsFTEhy0ZStMi094QMUwaeFYDSJNFFI0NBvuz4KHK%2FZtMu4iHOlTs1%2B5vqnqes9boLfL37XCea715E8TQoJNx4x2CoJIXLYbC7nYSY0MVSluOEn6Z5DLGDIpj296mjCsCLjyr5z1Uv97E0PNoeT%2FvKivSujwsS3WmaNhDUyO8hVzz1ZY0PGSy9%2FRg4c14zRcK0f0Em%2BYfzhYGfydOyRVfFGrQNpHmyNnxTmRlgRU9h2GkSFEGcVMcYOMmICmQgr86NdiV5kwr4gkVfrww2Z%2BUvgY6pgH%2F2GGPlTMdUSd%2BsnaEwBvyDdRZ1CyOLrhyijHNKsnHFGFChxQEQ3eJvJ2L10v3HpkKLkZQotQwOqnRSd%2FsKI1DVb4vsym8E1yMmqcFhW5z8ycxJKWuursrC%2BrPihANw%2FIkULnDjJIlz9w6ajzycGN5dgDoxx4e9ocYn39Aap%2B5yUZ4cOhmnGD63KCczu6St2gOPS9PNjxhqFYCfdtByzCksKTFnEoQ&X-Amz-Signature=2412f46c22676791679ed82726f059252b1aa3bb81856aacae2b46655aed8efb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EKMRAYC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP1oaR2qrXu5aTHAZhnIZvelk1skVpWMGMQQwH3SdyjAiEAkXU3XqBJji3t5Al%2FOfCSqT%2BANMeuT3SWaHPBy7y03bMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXxlRkJp4NJ8GUZzCrcA6q2TB33LocbWhJK0ogozGuLW0QKsRAKwNuwvqK%2FGZjZibGGJuyt4KjbkGdZS36hWy%2BOpI%2FZKDHSjNyitPftrqyKU06KS%2F6nhMZL0SHT55FqdAGscZUTTaF2mnSl9tuMPJL%2B1LJahaHIK6K0HnNALG26B8OPp88u4sq85cTlrl7%2F0sowDMXYj64BiQF5dlSZM%2F5%2FyEb8WZmRDrtwQPkPNdLLBZgOcdZt1usU5aGobG54cJZqHgYTA9fCM3241Bjj3zJiwCGRRtrecwHGkaR2AgcXoypkrs3p7jjjpRSC0vNLAccK4LYuhaEpzaQx0jvNv7xNr%2F7xbRvwRCgirTbD16FMYmz5CP56snF8r1tJEyFcbxdFFiUYIPmL0gD8LNujVq31Ei4F8IiLtDq%2BI9Ne35kQyj7R9WtlMKs4AMJ76%2FBLE4tHjkUdGiLP8xBV1msluRgpYtNp3tBo%2BXZwLWWSch616rSML0Sz9ckh1zTYdkTjV1UiD6EuRnortkOqQdhWGE%2BRtfVbHVvw8OxWU0dK4dYgyb8eh7Isti5KX1FJ4Un%2F1yh1G2QGlwsHjTOau5onbn6GkvcWlV8V5eY8sAXE06LFpXbHUez5Ig6bvWto%2FGmVLmJDl300%2F88fStn0MMaglL4GOqUBXPJiby7GGUv9dOpjMcp92OmTQABoCXtwVD25nK2ne%2BHUii5nQbRhM87cQT46Sfne1Zoni053hehdSnfknNFprcXtkV84wcu5%2BNC%2BSinj5wGVuMLMWEAHGkAZcpTV%2Fgrf9P0jjEx5lCD241vb3MUM27luTiHLgmZyAP5vrG%2Bsh%2FTj9qhYpNW4CyLP3avAvq5OhXI5SQnz0HU6koBX5Wk8a9uRQFFt&X-Amz-Signature=6eeaf62b66b8b17ca890020edd238376c0c07b61cbe63ce21b674b358e9d43ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C5AVYPV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2FjscsaYVejXQKJY5Si5yaMy%2BB012N%2F0uxuSntZdvlTAiBwPw7k8fwNBgPQxpalqyl0341mmdwj0iJ%2BSqd1ClXyUiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3YafDnqM6QPBEv%2FwKtwDPIrw5WajFFVaFKHF2pHce5gwCEWfGKDoB%2BD1IpcxVtYRG%2BEmWy9ZQ60F%2BccO1yK%2BGsyoTMm7rHymBLJyxQHR%2B%2FYrsTc%2BXev6p3CGwAxK%2BmQW9CMWPPHKb5ZbaIktOVz23fHdkxh8OLenfY67I7dlN3IRssbpbkYKA2VGSngFFZZRThh%2BWSvByaYsdEECBwyPlyItC5Cjxg%2BVBUgHbR79OB6o4rvDjW9vywIRsr83Q%2Be0LUEiTO%2BRHviJFi0R%2BubAesnDE7LPCof34JQyakjqQiYJGb5Ukp6nxdNWaBrIzLECAK27pQfKLsNXG9y85zctJGTJy0FNmb9j9zzihN%2BqQMiC6it2M%2BbOfesqTuhbN12drAdiv9Kvm1looJoz4%2BC6HUSYjWIQos3oCVikRfNurnJ8vl8BEIO0kWszigZFd2dsDZ9mv9FYjiqyFW3xAu4h0Lgh%2FKgzLxTyt90UZv3t6eRr61Ud3Zzi2mXsLfCPuhElnuwz6RrDIrLClfSfiyt6xZiNQ%2FuKA126l4Rx%2BZholUCIO0wkNh760SlamUUWhp5JZBc1uOc9nnP8XUHx3u2dySkqIFUZob4xr6NgCVMnZJ6nQ8B0oLwXS4C62wWUOun1xuz5DfV4xRW%2B3XYw%2FJ%2BUvgY6pgHm9PwqwezycR1fqYtgfoeof7ccVK36fsmVEZOCzMOlvoLgFypdiyXTLb52blqz26g%2BrANChX7KcxfiBkspP6HHxs95G4XxL2I6lY8UlJ3yJ7TiI4GlXMhTSdhNJK%2Bk%2FEAEeRLHfTnk7psqPgeFgSARKCFxosXNldLXWfWraKp9yDOFJW8mQRzT9XDBVi2h23PwMcGHilTc58Zx%2BDRjadwForlusXWz&X-Amz-Signature=5cd664c767fcc42836c2030c4595f1c533848a5f32fd4cbc8cd50c715edd8ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
