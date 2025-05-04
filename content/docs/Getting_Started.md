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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=e24214fae7670f79851b22cc28b3f2e5dcf7928d70482bb9fb9a7094b1e2a6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=02bfd906d0df407ad994be6396806b4dbc97321f2d9312b83d332fb9671e7643&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=b86946b9d60f4fe7f2a7d23c91b91e2c7a7410d63be46cbf556efc9b516dc871&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QBPLE2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFWdVa%2FVSi0VYqpSlGCKWBPDnbPTeMsIkLwCdL5VZLJ0AiEA5w9M5APHGXEn0ozApxNsG%2BCNJhG0BhslRk6cSof%2B0dkqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbYj65F%2BoVQkUCNvyrcAxk6ElbfZFBz8ElOgsOVPGVhf1P0Ux5%2F99BP1gCHbYegzDVl8BJUYK1mQNsIsMYRmCXVskeCX1%2Ffq2iI36s5e7iTgxpRBeyvwbKUi4szH04bXjWxw7C1aE93gw1aKbjMakiXMNkCX8813Juth12w9L1979RFxWbK46ZidfAKW81JvcjNAdnr8wsDHzvd15fjsu15UjML7zp2JuF9735hRSol%2BNRIraNnnpz7b4roq4VK6tTnp1RvntVrYBBxT8Jd9oSyiwPeaO4jE0z3mglH9jKZ3K%2FyQY6u1FNnimPHIoEiGpA%2BksL2qVYFyT6f7awIP8RVjpNnKVH5Fu0Zc5tVsGfEm1X%2B%2FqmRdg0158Hm3z%2BNCpt5Rmyqud0llP2et51HRQdWiHW3t0PNapT1CW%2F6UUY6a290g1UTZCTXplG7MrpLDtRre7iyUI%2FDYK0VqJpis2ofpg7zLSlbMNveAg1fBcwyOLZbBZbnx9q0Bn1H62N4sVcTf0b2TkSz2DG6a2n3NnjoSj%2Bl9M6qWm24f1jNWbGn15G6uv%2F6wtScboTNPuUB6mYmzwi02S1c46bj9ClW7xErXXf1PreC0lp%2BboSKMifmbSk3pUO7wQFlJwZTtU6YcOc6px4ujyunuhdGMLzr28AGOqUBnz%2BYM3KvdGJ6g1emw%2Fks%2FsFeqyA1MftU%2FZ3UtSDuBj%2FXHV5M2H%2FcOOWJxyUbgesr3cxhUiKqsakumIy%2FqQ8KWTFIkSuyo9G%2Fc%2FCt06Phhp2Lu1OBQHglW3OpMv1bPl%2BXHbh08qzzAtBt6lK7qs4ThyXAR6xDMFbQAve0greb1dIkCY5edKF%2BPF9aE24xQbDjt8POQSY0NkWCfie7ezSun3MxsD7i&X-Amz-Signature=fdf87c23032ea247d1fb9dc554f86fa7d4237f2fc74e0958f2828690e9fabf66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BJX2DT5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHEsZWh1GiYzw3XV4Q3jOhWxTSvCSa%2Bb1iW150921rXsAiEA5JDmpmh5aUp%2FGsWcmtBQfSwH%2FEFzkB6MYAIvDH5nA7sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC01LeIuvaFezHN1nircA%2FTm4tWthPpN5%2FQYeBmiKsuo8cbJ76mc2NASapmhfEktX30dJAG6w9BYR5Z8nzNDW73UMvJ9et9b%2FyKW%2FULtIbvB6jXIDaHg%2Ffxg2yomPekbY8Zrft9n2KIqzWhyowh%2FDUBBpRXMzf7Z1HVt0n2xMExrRY5bw6w45Kiuj6Ebg2QBoQ7SnKdnGnzlkAfsbby1E8qcNtwS4qejJapm%2FLIlyKSbVQt6dH2Xrkz%2FQzKsiNTe8a7vC%2FCeMXWutibXBjPNibkxhS1C1yvygkMgoywcFlPxY%2Fhgl1mwmQP6z%2BekB01G36n%2FdpNkffZD5jJQWL93Aw5sHxyCg%2FwPjsfW8AGB1sEkpvc7eDm%2FwxQeaf4modLl%2Be2eH7OK6irfne27pKPSjEQ0YgbKYpQht7hJrVbzzws8fPUlm48zfT7v7UBNhMVplZ4xZF71UE70U6q5Lzqdk8zOo2wNT1L5yIi0RXVSHOqFtVJBHw%2BcW0ZPQOATsg7IodOXbi8Nvc4xvid2ZcmjIdnS9TPOxHYgvWeG9mwlpeHDY0ysMDGzc5Uo8PQeNolEFcfod9esZt9Af1oselgg9xkDIZVFDx2kRHi%2BcM0zg3ZAS%2Bn8vSsrowfxkA4RVIMI6OyrT0BOSZakWWN1MKfr28AGOqUByDZ5qp0GJBtd8696EfS2hZR0EniZ37m5VREvV%2FdkOmvrn3ZXHsCQkbdYcPle7COeZi%2BzeeuGdMy7SwJOy4aAhUOCJSQ56Z3kEcWfsPd3S%2Bzp2ON9jrNb5yTlfTpSKrcBlrmLbxKHvtjIHXAr3eTcxQJJ12mv76ad3tERp4%2F%2BI20l8hCc8NG6bJy8dfXMT%2FqIGNZEIZUfBvJcDj5eU86JcrX%2BVrFe&X-Amz-Signature=2974e2747f07408394f244b86b0668f9995eca0bb7dea624572d94549deee5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWJ2REWR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCMbD8k14Ygs3dO1iEhfVcsidkVQSp3JYrADUlVaQtYawIgELCPue6%2BPsRP%2BVd1HttUJX4Wpai8akau9tEZk%2FlRQ4oqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFn%2FID7MNCWTQvt9SrcA%2BiOLtmqlrjjSkOpeh1nET%2B6I1lkTB2Cv1BdVMM3XSojUu%2B9RlYZmzRxQGLyy1xgGfBBZDQS7LEmIoSYyv5F5LGJT2A4Vn5gdT8vitvvWaiF4Y0QX3%2BQDHH1fP6b0FXyiR3E8CBDNCAzk4XDw5D322cY85jp6ORNHM2mc2RJFvR5nEzMEJppPPHQxHLNRpECSRLCq4A1%2B1qGKjxEyJ9Q287mDa%2BQ5bqPVc0X5giPAXqKrPnP9Qubb%2BybJ8p5QYZsCp6vlGN7aRtcW1FngRRl92DbD7OGNBioye2zYWNydzFbVb7vl7jG1smbgd%2BHlbJhPzeu1T16gzG%2BnKU0nuFYztP1MmP90DhctvUyob9uoVq%2FOsEEh5irtdChx8tJiCqoQ8Y%2Fxol0bRIoHbVsYvI8V%2F0TICtqNvPYI%2FqxNfAt%2FV3pVT%2BaD5KPBnfbZBii2sN2SM1Wwa8RgSDHxC21hwYxl54pu58nrtT3wp7ShuVCu1vGikM3kNeSFx5wGkAky8pXoEB0nTGLY6y93Ky2GNWH8mM0nG08vWVVVXUsNhEmvCsCTrEBY8UeIockhjFVKwS%2BcW%2BlCv3sUIOCAxEttsfdET6ZGhhcelBhKtsViZIlcOzGbm1e1aCPqi4zU1r%2BMLDr28AGOqUBUZNe2%2F%2FzP28UdK0EzKp5yKzVwd39u4pFLA3cngsMxGCqoU%2BBBALx0avw2NY99lRA%2FgGykFbKpOmYQUeX2J1jgo0IKrSJZyfvm2LJl%2BlNcaWlIJPjPkFossUqiX%2BtmN2kJ6gCnXJWxJLb4W8%2FRGEOHpsKP5tq35dmm2XY67EY%2FYsLXdOO9LMWQPkxD8qUPw22%2FR%2FWMP%2BE96XcVguGSkQKq8dMjv7%2B&X-Amz-Signature=71ce74c02da755b906c9ccfb0398459e196b39772edd4f77cbcbebeb33b1667a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
