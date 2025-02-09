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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4PSWMO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ%2B1x%2F4T4Bo0LccPT%2BWvwBVfNd1ewdqmJjE1xuSgClGwIgAJZu1%2FlQK1qDJJBIivMz%2FiSM9aTE3mcmKoYWFYaYCoYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGioua%2BFTxhVjth87yrcA3MhJS%2FU%2FTXRZuRa5f55CwOtAptkTws8MSu4fVszNRkyiFHv1hr%2BAiiyMoSVEkjkxLXqn2IfQxBgTzTg%2Bf7E6fqqqahE8ljjui%2BzkYzZAKE5hB4FDZ%2F1lma0l9K5bQvA%2BieTTtHE0dlAqzGQvXsMxiQ2PsSUtUx097nYbauGG15zLjwoU1hVsoL57jlazO2N%2BKQGOA%2F011pE7BTCZgjIrzpF4LR%2FX4SADfO3k6dWkvCY7LrSJSW1iqwd4L5FdNn2yAC0yc8Bo0O7hMaucojYcOCVRyb46mjsE5hEL27Jt0HkKZuAYiqnTw9IbOkabT7Z9VHCi7VuZTJAc7ZPeJah3aWL9Ma6ZBf7rXPns%2BGq7TgwUCKP4o4vNPQzHZKSgkVPD7Lanw%2FIKmbUu94Y8ByJwzjq1W7jglbHVdkZsQOa2AzwX%2FeK016FbYdYzpcVcvVEDClYRQIlQtMyCe6Nf1nZSiLeuH6mXgGBRRsSkkVsuKouszryNBOEJRoHOR4kwI4kzCqEFCXbcghHAuIVP9SV%2B1GQX4noN0UgEyu5x9YDglXE3M0SpK9y2zCzwgVA4sWQTqsTLmDdgQGRp7lEUiOvh0hBZdKnPbkvP4FL3INlnQ9PVeAbv%2BeL8AU64XreMOfkob0GOqUBM%2FiVuqHIJu%2FXcBukZViOY%2BLYG3hfj1X8IajnlIOxWc0GIrfZFbJmyVbSJpATF47tiPZaZKsYqz52v5umY6Q3VHPB%2B0r27iPh1ZuBvp%2BFB1GN6rtgjnYOY7QFtVQtx1JUVzq6pUmOCP4tV7EInEC5ngLP0Ysk86HqS%2B4wp2Si3Ovg6fHZGECKZ2x7LWXxa9GJdbttgbXdKiPU6O%2ByCS6AI5AeV7WC&X-Amz-Signature=4aa3b6f3eb9c03336c376326b14a7b1fb4d2de8278b2133edc593702bb60593c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4PSWMO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ%2B1x%2F4T4Bo0LccPT%2BWvwBVfNd1ewdqmJjE1xuSgClGwIgAJZu1%2FlQK1qDJJBIivMz%2FiSM9aTE3mcmKoYWFYaYCoYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGioua%2BFTxhVjth87yrcA3MhJS%2FU%2FTXRZuRa5f55CwOtAptkTws8MSu4fVszNRkyiFHv1hr%2BAiiyMoSVEkjkxLXqn2IfQxBgTzTg%2Bf7E6fqqqahE8ljjui%2BzkYzZAKE5hB4FDZ%2F1lma0l9K5bQvA%2BieTTtHE0dlAqzGQvXsMxiQ2PsSUtUx097nYbauGG15zLjwoU1hVsoL57jlazO2N%2BKQGOA%2F011pE7BTCZgjIrzpF4LR%2FX4SADfO3k6dWkvCY7LrSJSW1iqwd4L5FdNn2yAC0yc8Bo0O7hMaucojYcOCVRyb46mjsE5hEL27Jt0HkKZuAYiqnTw9IbOkabT7Z9VHCi7VuZTJAc7ZPeJah3aWL9Ma6ZBf7rXPns%2BGq7TgwUCKP4o4vNPQzHZKSgkVPD7Lanw%2FIKmbUu94Y8ByJwzjq1W7jglbHVdkZsQOa2AzwX%2FeK016FbYdYzpcVcvVEDClYRQIlQtMyCe6Nf1nZSiLeuH6mXgGBRRsSkkVsuKouszryNBOEJRoHOR4kwI4kzCqEFCXbcghHAuIVP9SV%2B1GQX4noN0UgEyu5x9YDglXE3M0SpK9y2zCzwgVA4sWQTqsTLmDdgQGRp7lEUiOvh0hBZdKnPbkvP4FL3INlnQ9PVeAbv%2BeL8AU64XreMOfkob0GOqUBM%2FiVuqHIJu%2FXcBukZViOY%2BLYG3hfj1X8IajnlIOxWc0GIrfZFbJmyVbSJpATF47tiPZaZKsYqz52v5umY6Q3VHPB%2B0r27iPh1ZuBvp%2BFB1GN6rtgjnYOY7QFtVQtx1JUVzq6pUmOCP4tV7EInEC5ngLP0Ysk86HqS%2B4wp2Si3Ovg6fHZGECKZ2x7LWXxa9GJdbttgbXdKiPU6O%2ByCS6AI5AeV7WC&X-Amz-Signature=f6c035bd7e4eb45490222fb458d0b576070070970aa459e4dc944ab500342eae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBINZWQS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLexXz1SZcvHYasUBqIiQpCPuQH%2FUPXmTxtl1FFVo%2FnAiEA6fw3mIJjhNdXUP2NWuemG0SrOettNBtHqCfIKe9T1PQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYKCnzLwTeB%2Fz5ytyrcA%2B6effDP3WF%2FL9uqYeTjGHzlcgAWWAe3SbbzyTl%2FuAuWpCbat5XCuIXbF1mX2LbNhQroGBKDppZBuNWaepiH45UIYT5F%2FcNqmwPDXjdfXIQ%2BsLcLxvNP2E4cMjD590CRS%2Bpfv1s3up6FEMb0E74sz0evkPaZmTeOHqoc3TMucukraZkRyUJolqDN9dtoD3y2IGj8EeH47%2Bt8FD0ckpotCySdAHMuiN%2Fblc7XoVIXt217OIitIk7HLN2mj3Wd3vLYOud6IzdzGHRQR1aGpjZBsnXiUIUY36KsXcHJXSrH6QxfIeEJwv863xsanUecJkur8%2FMr0ZvuOdlUGGuVrOPPDwDC6m8yltHEPL8JJeAJZ9%2F3ZJh52hWcKy2B%2FzfrODOkgIMRC2VK%2F722Ygs18AFRakds%2FB00G4N40W0sSrzKf4Sb%2BsxuhzCVale3OYW3CkYv97lzshmg40LW9shwuGs%2FdBaJ29onyvMHkLW%2FZStnYu59evqkbQzaxDOe6%2FCHS1EZGUVoMi7A0XqlfU4sStxF98uR3lGzxYf1VEzYxFNkav%2BxJepi3q6z9EpoBhzmLIOsgjaEjtXO1fI7GRRQJCFG2cZVP2OBzY75dKAj%2Bry1AevRYOibYrSzJVQoavKJMILkob0GOqUBFNIa3JXB9GWRDhY8ub%2Fiw%2B3fwt%2FZh%2BpircqqotO0H9L2A2A0HZC39QGiZORLFgLLzLKW3NA%2FItMsl%2BAgg%2FFLE%2FEYmMEjJfYiw4U36Stdh1ztnXFexlk7zm8xl9Kn6RRzxZdvJG40exxMenoR2keCuzR1S%2BNcXe6Eu4Hi2ZpkLZ1g6SyjqQ73iHYuCvQVpCRy4cjl9dJmTClN%2F%2F2vief6ZY%2BH11ZW&X-Amz-Signature=2cdb6974c4c85695f92c620c6efa7aae81a37291df5df3723f16667f0576ae0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XHHGUMI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLdN4sp2GwkZDKfJJEAXEg%2Fyt6BJyfXBDt4yw1wSy2jQIgUouvSWuYcUs1Ssfhn1wsLaXYygi4gsdHKkbvE91fKsQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5WDjbNjdp%2BaNVy0SrcA%2Fw8gaVk1ned6GeJ09VPGTmfm4lnAUxUfW3kzumoib0%2FGax3m6ftxGmGvqsheqfIUSLyAW6rI6W5YbrZ2NoQlKzCzem6W0WZTyYLO0uobZVAhPDLDES1jtF5M0Hk6KzwGqY2DFuPo11FIjpgPBRnbiEHu68MiR9gJdjvVwp1k9MXQqKm4xDcAlyphYcPqqkVJ0swVcae7xCY625lRdtvpcJF78NDbdjVNBj31Lpi9t5VXYKessnR9uSKpMiy%2F20KXAVp%2BslBk0lie7tlh4k6wefQ51fd%2BS6fRWoo4HHaif%2BV0fzPl3JykzxJfbVLCb734D5xuWSUNimcmAU06%2F6R8chqdhaduSXpSE74QWl7FbbkjvJtSx%2FlAM2na227366PFbLRtqSr6nXNV5uv87Ut1THMZ9rPymY4IJFZgYdtO6iRe29%2FcZ4f%2FS1SZ%2FYC53cQOP9hYEp%2BzkXeoYVFOGU88zMPYYyKG0qs%2FtcMsreJkxjFg2nMoizFKgUhZ7C%2FfVS99Y%2FAh20pLiN4NJy5CFwomHUs%2Fz0YaDLHd4hLO72%2B9O3%2FKw272n2jofBAls4RPOm%2FXlt8abgieXgHOwLF7zLmekvcGBeYek5YKhdSo%2B3rxpUQjidh3JchbBpTB1oiMMXkob0GOqUBtx%2FniEhsfmE5yx7njR9h2kQ1wXT%2BoTMH2jGCN95XRLLcE3ZfJDfsp2f8nrSQ6qttsU3HTtH3K6uJgw92CFwfdiBmvX1qarvm%2BEyvpjw1g5rkLWZDFKt2BnObXBan%2BuKfnKOKVUwpWgvvK9QBxNu14s2wZTkEJc%2BGFO29jOHQb4PMOfnFAtVb04zo2WBH3MCLRoqkAcTxMP363fmRhgyf87yZSl%2FO&X-Amz-Signature=16a15cea0f35dea673f4ee9dec85e288a25f903149174e0e516f0f9698b37503&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR4PSWMO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ%2B1x%2F4T4Bo0LccPT%2BWvwBVfNd1ewdqmJjE1xuSgClGwIgAJZu1%2FlQK1qDJJBIivMz%2FiSM9aTE3mcmKoYWFYaYCoYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGioua%2BFTxhVjth87yrcA3MhJS%2FU%2FTXRZuRa5f55CwOtAptkTws8MSu4fVszNRkyiFHv1hr%2BAiiyMoSVEkjkxLXqn2IfQxBgTzTg%2Bf7E6fqqqahE8ljjui%2BzkYzZAKE5hB4FDZ%2F1lma0l9K5bQvA%2BieTTtHE0dlAqzGQvXsMxiQ2PsSUtUx097nYbauGG15zLjwoU1hVsoL57jlazO2N%2BKQGOA%2F011pE7BTCZgjIrzpF4LR%2FX4SADfO3k6dWkvCY7LrSJSW1iqwd4L5FdNn2yAC0yc8Bo0O7hMaucojYcOCVRyb46mjsE5hEL27Jt0HkKZuAYiqnTw9IbOkabT7Z9VHCi7VuZTJAc7ZPeJah3aWL9Ma6ZBf7rXPns%2BGq7TgwUCKP4o4vNPQzHZKSgkVPD7Lanw%2FIKmbUu94Y8ByJwzjq1W7jglbHVdkZsQOa2AzwX%2FeK016FbYdYzpcVcvVEDClYRQIlQtMyCe6Nf1nZSiLeuH6mXgGBRRsSkkVsuKouszryNBOEJRoHOR4kwI4kzCqEFCXbcghHAuIVP9SV%2B1GQX4noN0UgEyu5x9YDglXE3M0SpK9y2zCzwgVA4sWQTqsTLmDdgQGRp7lEUiOvh0hBZdKnPbkvP4FL3INlnQ9PVeAbv%2BeL8AU64XreMOfkob0GOqUBM%2FiVuqHIJu%2FXcBukZViOY%2BLYG3hfj1X8IajnlIOxWc0GIrfZFbJmyVbSJpATF47tiPZaZKsYqz52v5umY6Q3VHPB%2B0r27iPh1ZuBvp%2BFB1GN6rtgjnYOY7QFtVQtx1JUVzq6pUmOCP4tV7EInEC5ngLP0Ysk86HqS%2B4wp2Si3Ovg6fHZGECKZ2x7LWXxa9GJdbttgbXdKiPU6O%2ByCS6AI5AeV7WC&X-Amz-Signature=9bd09f42176b6f2182260254ae5cdc37bf76b1eda6f797cf40b99599d8539a50&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
