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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLU32XFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCN5yM50T8UamYiqIRopj2onItlJIOLMsDO%2B%2BYbTTWWGAIhANJMzAKal3GhZ0Jo39H%2FH1qpthHK%2B4BZqMrR4KIH9IVeKv8DCBUQABoMNjM3NDIzMTgzODA1Igw%2Bpef%2F7AeEm3xVOSYq3AMOyu37BIdHZ4N6eZcvImYtV6fKyf0zHZNyie3vQOvXcwmq6pmX0fAa6cRTmK7W0MIqEOpaayGyN09cQaiqkV2AEheO7gHQ%2BvVA%2BYaj%2FS9GV9zGC80cGsxgkqfFkMU7M3ZKqLwtj64NaQgqQ6A8%2B3GyZzM9pFTlsJmA%2B8YazH8jgToMRBX0a7Bhx%2FvWroHq%2FK59NfUAdJ%2FdYy890WHgMQnEMe5Kvw9gbewD2jcsYy0tgEaqk1LaYOzPdfERVaOBHp0%2F%2FttZYlqQDnrMF5cpshOLIb5Y3k4dn43UgWP3yufF8c4MXKOCzy6PUDMG1yHjwObhRSpmp5hazZ0kxV0yKbANJCDG0Xds2CYbZzAysYYFLeWB0%2FGWyF8i04yhlLV9Xj9sbDGPx%2F0F%2BFI1kyLR9OaGdeffBnks56vx9cGX8KZK9Ikn5Rm2ujkz2ztndQslmKKot%2BN7qkxD%2F3tCpsPaizQRZaq7T4V%2BSu%2Fndq3mbPbzXecQiNFqA0JagULWdM7R46nFUpYAQVpgaHDhkJLgp7HBqTnB74GqTVntH2%2BRppHIebqEBuW630RoXoltkvG1znG61i1ArACe2oH2tNN5cC62VFkq4Do6KdW0gZno1q7wWi%2BDrM8dxjvfLwdokzDl4ZnDBjqkAcMsv1VviXtG3AOT7gbz0cRkbab9RD%2BitLpe7hFv7u4f6qFSw7Y%2Fwuc66rIjl7v8WOyAZ%2FByGhi4hD3nRKOVlEBBvBjqMDU22YOTgxfhtvV%2FAu7Ut2FJHerAb%2FtBH4MGh0pnf6H5wKhtlk39kxjY9nXhR9SytJDJ19S3fMRuteRczQuo0AOAdlk56PJSVglamplU6E8icFGI3lr%2BDKgQ5ppFMgMV&X-Amz-Signature=78e9025c6cf192db3a7befdd1f11472cc05b13617de279a074a1f8589fc778f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLU32XFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCN5yM50T8UamYiqIRopj2onItlJIOLMsDO%2B%2BYbTTWWGAIhANJMzAKal3GhZ0Jo39H%2FH1qpthHK%2B4BZqMrR4KIH9IVeKv8DCBUQABoMNjM3NDIzMTgzODA1Igw%2Bpef%2F7AeEm3xVOSYq3AMOyu37BIdHZ4N6eZcvImYtV6fKyf0zHZNyie3vQOvXcwmq6pmX0fAa6cRTmK7W0MIqEOpaayGyN09cQaiqkV2AEheO7gHQ%2BvVA%2BYaj%2FS9GV9zGC80cGsxgkqfFkMU7M3ZKqLwtj64NaQgqQ6A8%2B3GyZzM9pFTlsJmA%2B8YazH8jgToMRBX0a7Bhx%2FvWroHq%2FK59NfUAdJ%2FdYy890WHgMQnEMe5Kvw9gbewD2jcsYy0tgEaqk1LaYOzPdfERVaOBHp0%2F%2FttZYlqQDnrMF5cpshOLIb5Y3k4dn43UgWP3yufF8c4MXKOCzy6PUDMG1yHjwObhRSpmp5hazZ0kxV0yKbANJCDG0Xds2CYbZzAysYYFLeWB0%2FGWyF8i04yhlLV9Xj9sbDGPx%2F0F%2BFI1kyLR9OaGdeffBnks56vx9cGX8KZK9Ikn5Rm2ujkz2ztndQslmKKot%2BN7qkxD%2F3tCpsPaizQRZaq7T4V%2BSu%2Fndq3mbPbzXecQiNFqA0JagULWdM7R46nFUpYAQVpgaHDhkJLgp7HBqTnB74GqTVntH2%2BRppHIebqEBuW630RoXoltkvG1znG61i1ArACe2oH2tNN5cC62VFkq4Do6KdW0gZno1q7wWi%2BDrM8dxjvfLwdokzDl4ZnDBjqkAcMsv1VviXtG3AOT7gbz0cRkbab9RD%2BitLpe7hFv7u4f6qFSw7Y%2Fwuc66rIjl7v8WOyAZ%2FByGhi4hD3nRKOVlEBBvBjqMDU22YOTgxfhtvV%2FAu7Ut2FJHerAb%2FtBH4MGh0pnf6H5wKhtlk39kxjY9nXhR9SytJDJ19S3fMRuteRczQuo0AOAdlk56PJSVglamplU6E8icFGI3lr%2BDKgQ5ppFMgMV&X-Amz-Signature=cb7130e905eb2ff3c3bf581816cb7dc965e0cddd1d454679ccfcf772e61a0bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLU32XFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCN5yM50T8UamYiqIRopj2onItlJIOLMsDO%2B%2BYbTTWWGAIhANJMzAKal3GhZ0Jo39H%2FH1qpthHK%2B4BZqMrR4KIH9IVeKv8DCBUQABoMNjM3NDIzMTgzODA1Igw%2Bpef%2F7AeEm3xVOSYq3AMOyu37BIdHZ4N6eZcvImYtV6fKyf0zHZNyie3vQOvXcwmq6pmX0fAa6cRTmK7W0MIqEOpaayGyN09cQaiqkV2AEheO7gHQ%2BvVA%2BYaj%2FS9GV9zGC80cGsxgkqfFkMU7M3ZKqLwtj64NaQgqQ6A8%2B3GyZzM9pFTlsJmA%2B8YazH8jgToMRBX0a7Bhx%2FvWroHq%2FK59NfUAdJ%2FdYy890WHgMQnEMe5Kvw9gbewD2jcsYy0tgEaqk1LaYOzPdfERVaOBHp0%2F%2FttZYlqQDnrMF5cpshOLIb5Y3k4dn43UgWP3yufF8c4MXKOCzy6PUDMG1yHjwObhRSpmp5hazZ0kxV0yKbANJCDG0Xds2CYbZzAysYYFLeWB0%2FGWyF8i04yhlLV9Xj9sbDGPx%2F0F%2BFI1kyLR9OaGdeffBnks56vx9cGX8KZK9Ikn5Rm2ujkz2ztndQslmKKot%2BN7qkxD%2F3tCpsPaizQRZaq7T4V%2BSu%2Fndq3mbPbzXecQiNFqA0JagULWdM7R46nFUpYAQVpgaHDhkJLgp7HBqTnB74GqTVntH2%2BRppHIebqEBuW630RoXoltkvG1znG61i1ArACe2oH2tNN5cC62VFkq4Do6KdW0gZno1q7wWi%2BDrM8dxjvfLwdokzDl4ZnDBjqkAcMsv1VviXtG3AOT7gbz0cRkbab9RD%2BitLpe7hFv7u4f6qFSw7Y%2Fwuc66rIjl7v8WOyAZ%2FByGhi4hD3nRKOVlEBBvBjqMDU22YOTgxfhtvV%2FAu7Ut2FJHerAb%2FtBH4MGh0pnf6H5wKhtlk39kxjY9nXhR9SytJDJ19S3fMRuteRczQuo0AOAdlk56PJSVglamplU6E8icFGI3lr%2BDKgQ5ppFMgMV&X-Amz-Signature=80983ba1542842c1286a1bf6e6ada592b189c25bc4185d14191a9b93508c2779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5PHMCA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQD7cunaeTxc8WGY0Kgmg7bniMpJegXEvQNgE%2BJBMrrNKAIhAIGwjRitYov7OSGK3BbF26b9H9fm30DNNEidCgDVWjl9Kv8DCBUQABoMNjM3NDIzMTgzODA1Igw8544Syj%2FHe3mOz%2Boq3ANblqJadsVKuOpqHHupvuAY7Cr5aOhy8HktFlCYb46Bsuo0qMIftZA6MhzJbiJ2gyY3zL1T67RXHF9qhNwmLjYj81yl959O1W%2FB9wnQSAl4eNsKIEA0H1Nc3LypiZqeGGMfMr2bz%2BiGJXoSuuRS21GZ0HhWQ8KxX%2FUfv4rHITmaa0%2BrH3KaXyKp8BvFX%2FDsPTH9bbideh8UR8Jkd8AyJ1%2F5%2FCbO%2BCaDZcoziy2bW8HlD0m7hinMO6Fla6jB0onlx5z8mqFzY9U%2FZeZ7c0noMe%2FZI6UwZYvD7UQokxWUP%2BRmVDULbNWSk6l8QOwvsp%2Fpt6Xl7mpGfTmY%2FQbToHnJSqD74oZS7N%2F8%2BkEvOXIBBxa%2F3iJktkveK4U1hz11s1WX77FIf%2F6sok3sdTswAUAN3NHBE5dUwttOYnQXnU9FDxDdmjdIY4UQ%2BP4PyFZt1PS5%2Bwt1qucutprgaQOPHNKkmg6lOHEe3iHVOcXsfCKLIxECAHQqTviPWY3%2FDL5Nw%2B5O%2FdLRf5TGrOiZYMJTMRgJ1dbxIUP7mLG6LE4WKq4Ewdq%2BUyFEgQVvQu43OH655XlbyQDoNM7riL8mzlXvxEqo09GWkzC1thUg8LTngc6s9rTNPzzK0NYnubXG8tFldDDA4ZnDBjqkAZf%2FByXTXynicQ6xANISVIGCnMqBWMBezSMr8d8Cn8afP8Ucw09Rc6tN14mVr2EqWptX3Y0AQWkwEF5gGHu%2BfluC2NmCR0Wc3Tmr%2FWrSs5Ce3MNjiehFzN0nK3y7dG%2Bk2GIiS2rw1ItW1B6EkGmJAhGl4vX68ZlJC4YHWI8uhCltKIpW28HIAGMrEfr8MW09L8cZG0t0ng0bofmChcd45T4eXVva&X-Amz-Signature=0a3d82462c356b7cef58ce5f98028ea158e2805fd3fde0436c08b9856affc63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUUL4R%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCh%2BgkJFyEr5oXYULa4BFMNcJOLTkXiUDsNFwXbaT2%2B8QIhAMnMx%2BSyKJEu25ivliid%2FiBS57MsBkwqHv4MZDmFEgfCKv8DCBUQABoMNjM3NDIzMTgzODA1IgzzrAJVSXEhNneaG6oq3AMWXMtyZihJ19Lg7Cyi2D0mZuLlTduWAP2zuLrb%2B%2F2rhma8ma1eFDaLcb%2FMM4NxXgdz27ZUwRY0cppKqg1QDRNMllfaVQRHBFgmj4dRDA8ODLHTqxerPI5H1giNe41kWUNsk9stGjPMSCbScnpzJveuLFdbli2CcXLl6n8wIdW492r1U8Qb%2FVHV5%2FqFmDWh%2FFsW93J4skgRjB%2FzFffsNRchSWoqpYyQ4PtRJnPaKybzPVKzAS4yNzaJ%2FIVLJk5oUCNBMrZMAE%2BureQIGsC1eHywRb%2BCpHv1zVcRYjqo7pS4fsRMZXDVXsLmm%2B7PkSVAspBs3rrF%2FXqRwj4qLKR7NH226r9k%2BrOvXwXu3ozTm9VynW%2Bfy5PG4a8qTLjR2svoPZWgGn14Z%2F2DoMTBXn938rTab54lhJBkXwPeKYttoGpAtrC0LSiV6tXZdJgcuD4a0FOuMWJ9XqptSfZ%2BU4%2BUeKnW47p41AZg7NCXX%2B%2Fgk4XRjain7x8F2l5ANguee21vs8nu5qCdQKeciXvVjWAd3ufyH7iZpcyo1r7B2avTMnq1CwLJZ2afizjP93F7D%2FJIQ%2BQcAq3Y5LYEe1GJgXEMnLNoKZvAlYCOjvpXPJitt78UQdmEJbA7sjmKTk1CzjCg4pnDBjqkAXfjrlNynhLwviwXU8i5Y6J41dIp5dHus9WC89nS3eGoJMry34K0Uuzf%2FJKCMABDdwyJ99HriQKUGrAx75QgeLFpQIssOcg9NCf7MEs%2Bx%2BlnQRAZLu3ep1cBXipXNJ2guycrILUkdRPZ64yB4k%2FIVA6wPj4LqqnGa%2F5%2FpJlWLRiONqFmej%2FDXrC0%2Ft%2FYSh2lUJjuJVp2rqHbGocEFTVNwwGuAQx%2B&X-Amz-Signature=21475311b6eb48e31d1e1af49a3d8a210894b4cd65667339f9bb14fc2b3adf3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLU32XFR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCN5yM50T8UamYiqIRopj2onItlJIOLMsDO%2B%2BYbTTWWGAIhANJMzAKal3GhZ0Jo39H%2FH1qpthHK%2B4BZqMrR4KIH9IVeKv8DCBUQABoMNjM3NDIzMTgzODA1Igw%2Bpef%2F7AeEm3xVOSYq3AMOyu37BIdHZ4N6eZcvImYtV6fKyf0zHZNyie3vQOvXcwmq6pmX0fAa6cRTmK7W0MIqEOpaayGyN09cQaiqkV2AEheO7gHQ%2BvVA%2BYaj%2FS9GV9zGC80cGsxgkqfFkMU7M3ZKqLwtj64NaQgqQ6A8%2B3GyZzM9pFTlsJmA%2B8YazH8jgToMRBX0a7Bhx%2FvWroHq%2FK59NfUAdJ%2FdYy890WHgMQnEMe5Kvw9gbewD2jcsYy0tgEaqk1LaYOzPdfERVaOBHp0%2F%2FttZYlqQDnrMF5cpshOLIb5Y3k4dn43UgWP3yufF8c4MXKOCzy6PUDMG1yHjwObhRSpmp5hazZ0kxV0yKbANJCDG0Xds2CYbZzAysYYFLeWB0%2FGWyF8i04yhlLV9Xj9sbDGPx%2F0F%2BFI1kyLR9OaGdeffBnks56vx9cGX8KZK9Ikn5Rm2ujkz2ztndQslmKKot%2BN7qkxD%2F3tCpsPaizQRZaq7T4V%2BSu%2Fndq3mbPbzXecQiNFqA0JagULWdM7R46nFUpYAQVpgaHDhkJLgp7HBqTnB74GqTVntH2%2BRppHIebqEBuW630RoXoltkvG1znG61i1ArACe2oH2tNN5cC62VFkq4Do6KdW0gZno1q7wWi%2BDrM8dxjvfLwdokzDl4ZnDBjqkAcMsv1VviXtG3AOT7gbz0cRkbab9RD%2BitLpe7hFv7u4f6qFSw7Y%2Fwuc66rIjl7v8WOyAZ%2FByGhi4hD3nRKOVlEBBvBjqMDU22YOTgxfhtvV%2FAu7Ut2FJHerAb%2FtBH4MGh0pnf6H5wKhtlk39kxjY9nXhR9SytJDJ19S3fMRuteRczQuo0AOAdlk56PJSVglamplU6E8icFGI3lr%2BDKgQ5ppFMgMV&X-Amz-Signature=9fed8b91dcbf9d1a49e67ac5cb331d855ea5a3503039867bbfb4ac0837c8a8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
