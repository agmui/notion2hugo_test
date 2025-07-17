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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOY7KKSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHZY1oaglWqdHZ3xHi9utgCGGzWC%2F2cE%2BVs%2FS0HawFFLAiAIPW%2B%2FuD7btvE4wSYnW5PgVsAY1dO8DRatXYe8J%2F6tHSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvqxbQgsGrIw8gPrAKtwDa%2BQGVPiC6b6BkmDgdKoZz8Ukf242wTOf1ao28fBKV48XT9X1zmfZt6CtGNsDM2yRO5iarYL9yBEpgZjeqNSjUhopPnEpVb2pWjJ%2BvA9pjKPXK5MPoNBabeMKLA9d9NlzHBLL0eT0h6btUdwka%2FgKhorjO4z7kDWTnjnhNh33eZP08MOOkWPdPv8x6STpERLhnH40qd63rH2U2NWbfZp9MwwwvaRiyHfy4oy0pRKQA6p3NjjtNIYTHp%2FRHzTzb2ZTKtE3C38TlIU2mYsMp6XD7LSTHCLgPADdCcObehXdTs2%2BifsmI%2F93vNFb1l6zuQB82yjv8J1vRYgPwsyahtKnYzPCai8j7DAZOyDmwsrmT2t%2FaOTWaatnYMYiFry4ecU%2F0Vaftay%2F9n5w5fOt%2BMEMDHJwPhMQiRYpvn4ISsnwOlQnTTJevKr3OOhYLUuVWFjktHGl0duWIpNBO3Qr7a81%2BT%2FCIXilqlWMdDgiW3JxIxlAlsJuYApg%2BmumC2ZEeI8HVSvWepsGdmGc7QBeV3f1WF%2BGf9P3yvb1464DYZmvU3FJPgQn%2FkIiXxwOndWwVXbh%2F0bXRz3qiiccBZ9Ya%2Brjm4EFMBo9oBVLr7w17tZc689GCIMB17L7KhimTCUwmufkwwY6pgH1dv1slbGrMOcS4sCxVBJN02wZtbK6ULJEXNEdmQqoi8kSOGoDE38ZTBxJDUTH5El5aIjM%2BuLNjVvQAP%2FZ2sYQz8eCVkpTqGT8lj0sYXV3yauQoF%2B1Txer%2BCMZ7bSr6Vaq%2F2T8N40VFnW%2BGzS7vR3na6nVu6TAa%2FPWhnpN9vgsNShlS2eHA%2B3rLDANAhR1J95dxKi%2BjmLbJebspDs%2BMsFZK1doq9VG&X-Amz-Signature=9f3b1fd4142aa9ff5f2bf90268e7b17b128723b53bc1782e4321df84d2510452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOY7KKSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHZY1oaglWqdHZ3xHi9utgCGGzWC%2F2cE%2BVs%2FS0HawFFLAiAIPW%2B%2FuD7btvE4wSYnW5PgVsAY1dO8DRatXYe8J%2F6tHSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvqxbQgsGrIw8gPrAKtwDa%2BQGVPiC6b6BkmDgdKoZz8Ukf242wTOf1ao28fBKV48XT9X1zmfZt6CtGNsDM2yRO5iarYL9yBEpgZjeqNSjUhopPnEpVb2pWjJ%2BvA9pjKPXK5MPoNBabeMKLA9d9NlzHBLL0eT0h6btUdwka%2FgKhorjO4z7kDWTnjnhNh33eZP08MOOkWPdPv8x6STpERLhnH40qd63rH2U2NWbfZp9MwwwvaRiyHfy4oy0pRKQA6p3NjjtNIYTHp%2FRHzTzb2ZTKtE3C38TlIU2mYsMp6XD7LSTHCLgPADdCcObehXdTs2%2BifsmI%2F93vNFb1l6zuQB82yjv8J1vRYgPwsyahtKnYzPCai8j7DAZOyDmwsrmT2t%2FaOTWaatnYMYiFry4ecU%2F0Vaftay%2F9n5w5fOt%2BMEMDHJwPhMQiRYpvn4ISsnwOlQnTTJevKr3OOhYLUuVWFjktHGl0duWIpNBO3Qr7a81%2BT%2FCIXilqlWMdDgiW3JxIxlAlsJuYApg%2BmumC2ZEeI8HVSvWepsGdmGc7QBeV3f1WF%2BGf9P3yvb1464DYZmvU3FJPgQn%2FkIiXxwOndWwVXbh%2F0bXRz3qiiccBZ9Ya%2Brjm4EFMBo9oBVLr7w17tZc689GCIMB17L7KhimTCUwmufkwwY6pgH1dv1slbGrMOcS4sCxVBJN02wZtbK6ULJEXNEdmQqoi8kSOGoDE38ZTBxJDUTH5El5aIjM%2BuLNjVvQAP%2FZ2sYQz8eCVkpTqGT8lj0sYXV3yauQoF%2B1Txer%2BCMZ7bSr6Vaq%2F2T8N40VFnW%2BGzS7vR3na6nVu6TAa%2FPWhnpN9vgsNShlS2eHA%2B3rLDANAhR1J95dxKi%2BjmLbJebspDs%2BMsFZK1doq9VG&X-Amz-Signature=dfec8b3910f04a5291118f852a899bd3a5a51ee0ec9d9e8cdc962a061891b2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOY7KKSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHZY1oaglWqdHZ3xHi9utgCGGzWC%2F2cE%2BVs%2FS0HawFFLAiAIPW%2B%2FuD7btvE4wSYnW5PgVsAY1dO8DRatXYe8J%2F6tHSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvqxbQgsGrIw8gPrAKtwDa%2BQGVPiC6b6BkmDgdKoZz8Ukf242wTOf1ao28fBKV48XT9X1zmfZt6CtGNsDM2yRO5iarYL9yBEpgZjeqNSjUhopPnEpVb2pWjJ%2BvA9pjKPXK5MPoNBabeMKLA9d9NlzHBLL0eT0h6btUdwka%2FgKhorjO4z7kDWTnjnhNh33eZP08MOOkWPdPv8x6STpERLhnH40qd63rH2U2NWbfZp9MwwwvaRiyHfy4oy0pRKQA6p3NjjtNIYTHp%2FRHzTzb2ZTKtE3C38TlIU2mYsMp6XD7LSTHCLgPADdCcObehXdTs2%2BifsmI%2F93vNFb1l6zuQB82yjv8J1vRYgPwsyahtKnYzPCai8j7DAZOyDmwsrmT2t%2FaOTWaatnYMYiFry4ecU%2F0Vaftay%2F9n5w5fOt%2BMEMDHJwPhMQiRYpvn4ISsnwOlQnTTJevKr3OOhYLUuVWFjktHGl0duWIpNBO3Qr7a81%2BT%2FCIXilqlWMdDgiW3JxIxlAlsJuYApg%2BmumC2ZEeI8HVSvWepsGdmGc7QBeV3f1WF%2BGf9P3yvb1464DYZmvU3FJPgQn%2FkIiXxwOndWwVXbh%2F0bXRz3qiiccBZ9Ya%2Brjm4EFMBo9oBVLr7w17tZc689GCIMB17L7KhimTCUwmufkwwY6pgH1dv1slbGrMOcS4sCxVBJN02wZtbK6ULJEXNEdmQqoi8kSOGoDE38ZTBxJDUTH5El5aIjM%2BuLNjVvQAP%2FZ2sYQz8eCVkpTqGT8lj0sYXV3yauQoF%2B1Txer%2BCMZ7bSr6Vaq%2F2T8N40VFnW%2BGzS7vR3na6nVu6TAa%2FPWhnpN9vgsNShlS2eHA%2B3rLDANAhR1J95dxKi%2BjmLbJebspDs%2BMsFZK1doq9VG&X-Amz-Signature=bef7e9918a815cbcdb7b7fda8f991096bf534831e40d7db3fdced1394ac9f32f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPF5VNR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCICATGUsIvWIJ8Hc3aNrE0W7o%2BpFx65vFLF679C2HrUjrAiEAqghNu8wXdk3kaMuubHAyMLQxuQ2DVoqOXIaAxMEoYl0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAfyXmMlJU517KDayyrcA4ktbt3REwmfKq5GJgp0RBC3S8PIYno65BmNpUSAUrWpQq%2BFIH%2Famn1jMChPYEgEpIa4wkJ7%2Fhw1tCsgLNJT9H%2Fp%2F0eIpo5BNZF16Ze137BSUGluI6icz%2F531veHIQhK2xSNKs0bimc40kMUitRhdcSSdkp1YG11etPTWCtqC7roZk%2BLNASWiJxf0IOUjFYnq08OecXFoTKxl5dLvKLAC9QQI%2BWgXdGe0mwz%2FmNJAqXhMc49pxtIDVnOktiVMqxsn8JXrZvdg1gbJQL%2FIfRoVINANgsGj8zMNlYElDLNN2lqovkA9EP69XO0B0e8JHAyteD36KInK7ATvP7HkET0MPGMQJbXjR8TFkQe%2BvLcedvPR909%2F%2FsYrXUmbAaMb4%2F4plkk17xp2MQ%2BAsVvKNl5wAwU7rNyAaXxBUAefXMwW0bIPZrC8iS2zDVTFv%2BJgkV%2BJJbdlUhXtHY090Ol3KCATdp1t5WIBFZ2o1tR8ol7H9v6HBUwiZU0QK6GJRBEZ8%2FDBiYl1engU8rEYe2NCTX7HRh91XI0FOvt7YXlZY8lksvMZEMl9FWha75ojON1NdL%2BaLpQaZqt1meD09olvNp1WtCtOOHCauZQO%2FdFWMESR7Q16okoEjVlp4FIZKUrMI3n5MMGOqUBIdrswk69S0eGQ8Vuz4jYYTVvj3dlLqLUfXAoQNDlHT9U9NTYkuRcnzLXRIGDxp09WIsQkgEELztScuA7AVG6CPkhnyH2SLge%2FrAtk7yfUnx2MllRPSs8tiapH0Xni7xqwKk15epQnCkchSgNiFtjP4dpqZE60CgfVXj8sXEUNYIEjdDh0%2FCeJG6SYZpwwEkuHjgZ9nZ1jPRYfwMkYuQc99wRloHX&X-Amz-Signature=36d3e4abcc25a3788ad4abf4881f2d743e765e29cc87d0dfaa0d6123bd09b628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q76YUMHT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCQ9x8CQITK2zbZWqtk%2BvEnq6mFGthDU7WGhi6U92VQdwIgPvmASmzgudzCjrH33zus2jVLXVzAoV3TpsUuWCsXQ%2Bcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFLxgFw1EciJKPLTlyrcA2bhP4XUWiRkWVyl%2FqKU5EDgSFougE4%2FYeNcqkRc6kQuQe%2FnDOivYM8fsps2uhNYW0oJx0Ox4FR0c0zrdTN6Y5VhBjuT%2BZHcQL%2BrDtn8EPdX6PaA6TjvVFRS9LZsTkqDtDHhK5TtG85dOZH8gt7zs9MJwhJ2VFy52u9Tzl1S%2F9Q2p0fZA%2FGb1nqQ03rTOx5FRy%2FoJ0vYLVjaEO%2FdPz7tAjAPcoRi0M%2Fh5V7Ooyv5wFuHuE0RjPp2mf67%2FOAoJLALpyCGINGLpgqqtnzs34IeIP33m48udEETj1Ujg36PT6sjHN%2FhWKAgVqDapFT2SqkgYh7BYi7tiQ3ZoHUkzNp1tPn490izaYeoTgDZ0uccpc7OJFqWI9dhPRT2vdstEL9DiRn2a1HHTlJcA%2FEm%2FG1smEiSaVtB04lNu6JJfqSoS5q%2BVKKdGa0rfV%2BioSjJ1sgYNtxq4zNSbVSfnYLbitbwtmo58WqAVT0CeLt4vqho8McK8wyrzvGn7HLw3rvZHg%2F1W9y2FTv9d0%2BhE%2Bj3hacL4l8x%2FL4aStDUF%2BfVg%2Bpz%2BGlBWAwR9zMiCxpDGjMfXaYxy0M4IHJaTmICG4GlvJ88o2bBmB%2F79Ps9643kxYXIsuFJQsf%2BHhxYtwquUH9CMPnm5MMGOqUBR6VU7fbRypK%2FCAKJxRmuz1OTN%2Fp0gN2VynqGbnWGvYdR10PugyZDKpTTl59Kv%2FFNV26R9brWwgnrfeaWZVOs9MNxD9Fpa0cgJBtSniExyGSXTLG7gwJTy440Lq5OxYTH3UP6Xt6i%2B7V9D5FDUl8QMJmrS1zqtcTBzPDizGLQOID1O7%2B5adv5%2FvYS9NFKIzGorTPLLK7b4FNGxMSlwUyPKcEffrh1&X-Amz-Signature=4243504c7d115a61c75628492478cf42565f216a845dc47da48a259a0e9a6f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOY7KKSU%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHZY1oaglWqdHZ3xHi9utgCGGzWC%2F2cE%2BVs%2FS0HawFFLAiAIPW%2B%2FuD7btvE4wSYnW5PgVsAY1dO8DRatXYe8J%2F6tHSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMvqxbQgsGrIw8gPrAKtwDa%2BQGVPiC6b6BkmDgdKoZz8Ukf242wTOf1ao28fBKV48XT9X1zmfZt6CtGNsDM2yRO5iarYL9yBEpgZjeqNSjUhopPnEpVb2pWjJ%2BvA9pjKPXK5MPoNBabeMKLA9d9NlzHBLL0eT0h6btUdwka%2FgKhorjO4z7kDWTnjnhNh33eZP08MOOkWPdPv8x6STpERLhnH40qd63rH2U2NWbfZp9MwwwvaRiyHfy4oy0pRKQA6p3NjjtNIYTHp%2FRHzTzb2ZTKtE3C38TlIU2mYsMp6XD7LSTHCLgPADdCcObehXdTs2%2BifsmI%2F93vNFb1l6zuQB82yjv8J1vRYgPwsyahtKnYzPCai8j7DAZOyDmwsrmT2t%2FaOTWaatnYMYiFry4ecU%2F0Vaftay%2F9n5w5fOt%2BMEMDHJwPhMQiRYpvn4ISsnwOlQnTTJevKr3OOhYLUuVWFjktHGl0duWIpNBO3Qr7a81%2BT%2FCIXilqlWMdDgiW3JxIxlAlsJuYApg%2BmumC2ZEeI8HVSvWepsGdmGc7QBeV3f1WF%2BGf9P3yvb1464DYZmvU3FJPgQn%2FkIiXxwOndWwVXbh%2F0bXRz3qiiccBZ9Ya%2Brjm4EFMBo9oBVLr7w17tZc689GCIMB17L7KhimTCUwmufkwwY6pgH1dv1slbGrMOcS4sCxVBJN02wZtbK6ULJEXNEdmQqoi8kSOGoDE38ZTBxJDUTH5El5aIjM%2BuLNjVvQAP%2FZ2sYQz8eCVkpTqGT8lj0sYXV3yauQoF%2B1Txer%2BCMZ7bSr6Vaq%2F2T8N40VFnW%2BGzS7vR3na6nVu6TAa%2FPWhnpN9vgsNShlS2eHA%2B3rLDANAhR1J95dxKi%2BjmLbJebspDs%2BMsFZK1doq9VG&X-Amz-Signature=ee4c2457b4056b4bf2bbe5b8b35a43838ce80ac29b1ef3e26139d29778f5b87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
