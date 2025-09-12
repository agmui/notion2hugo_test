---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPIIGOE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1I6jOROMf8tNonXtWdujwdXlQnUV9DA7c%2BmhODsVVIAiBdSvo1Bm2F6sMRz7R%2Bfh4de7UeycnqRMxNPhpRajfCkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMPdOe5Rli5o4Xo81cKtwDwqQ%2F9LbbjSnG69QYcmiITN3B6ifMVhQhriCuH20zASSsGyXi%2F8H4d6KDCICpssuRsjs7Ds7KbyWVZi0%2Bz6wAVbLJtkfJhRFs4daAFRA4btnakoie%2BKm9y9hyj3xRxT2A%2BgltVeOxnZ0kycOZaK8y6Rv9xmn%2B12vremQOUNpiylA4cDlVXUS%2BWyXAK1XfxjMDRaJCY6Yw2CoBHp3E%2BYIUwZRu5kb0HNgkt63ZUUOgc7DN%2F4dMDGJrCY2wehb%2Baj6BJSg5nozs08Etdgmpke6MnNI6MluISamBRL2LawGYGIrazBmyw85KNZ5zSW57jXFiCnK58wQ1ePIzEPZx3C9ld2OWdSFmikeB%2FBJtnjJGtNRDc0gWMsZWkPuAu%2FPKefRDCRP6rRg4YqBbdP0Ye7W5b8kDqWjOrVZ65WXwk7Qxu%2B1a9sFR7UoLza0m9f9Jih6%2BLvHGZQK2H7STPaniAqPmI%2BnGgGK4glklz1hdzxUj%2B6xIBzXPB%2BfV3PxUIxm0l7PZYKTkYpK0acMKMVoY89KjBGDQXbPTeI%2Bh39K0fsdfcCYMzLYTP5WC5Qr7eUCDLtbSSF4PtiAYn67rachVgGI4j8MFOp4iDV3pnipC9nCI5ebk%2FnBjG0op3XgiEvswtdGNxgY6pgGuhqOl9sfBA4AMS31JcFDYCNo2c5E5DB7UcoO7rMJY58%2BghzgohapOqLoDeLbefIHKCfT9hmGrlV2NdBgx2GM%2FcmqHkxSRWxz23D6%2FMlZ9VPdYVd2AJpU9y6wxnXJg50syYmcq7kFqEWggsTOxqBkWOZ%2BY3jqcB%2FYhVwm2%2FNdQV1tGVRCqMQv%2FROwYPxQWODcppGEpdQlj6Ktaz%2B3NdItwKL524AUP&X-Amz-Signature=590b7de0a36f0937db3c0039e443d63a5dc518273ee5f6e5298323de1e3665ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPIIGOE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1I6jOROMf8tNonXtWdujwdXlQnUV9DA7c%2BmhODsVVIAiBdSvo1Bm2F6sMRz7R%2Bfh4de7UeycnqRMxNPhpRajfCkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMPdOe5Rli5o4Xo81cKtwDwqQ%2F9LbbjSnG69QYcmiITN3B6ifMVhQhriCuH20zASSsGyXi%2F8H4d6KDCICpssuRsjs7Ds7KbyWVZi0%2Bz6wAVbLJtkfJhRFs4daAFRA4btnakoie%2BKm9y9hyj3xRxT2A%2BgltVeOxnZ0kycOZaK8y6Rv9xmn%2B12vremQOUNpiylA4cDlVXUS%2BWyXAK1XfxjMDRaJCY6Yw2CoBHp3E%2BYIUwZRu5kb0HNgkt63ZUUOgc7DN%2F4dMDGJrCY2wehb%2Baj6BJSg5nozs08Etdgmpke6MnNI6MluISamBRL2LawGYGIrazBmyw85KNZ5zSW57jXFiCnK58wQ1ePIzEPZx3C9ld2OWdSFmikeB%2FBJtnjJGtNRDc0gWMsZWkPuAu%2FPKefRDCRP6rRg4YqBbdP0Ye7W5b8kDqWjOrVZ65WXwk7Qxu%2B1a9sFR7UoLza0m9f9Jih6%2BLvHGZQK2H7STPaniAqPmI%2BnGgGK4glklz1hdzxUj%2B6xIBzXPB%2BfV3PxUIxm0l7PZYKTkYpK0acMKMVoY89KjBGDQXbPTeI%2Bh39K0fsdfcCYMzLYTP5WC5Qr7eUCDLtbSSF4PtiAYn67rachVgGI4j8MFOp4iDV3pnipC9nCI5ebk%2FnBjG0op3XgiEvswtdGNxgY6pgGuhqOl9sfBA4AMS31JcFDYCNo2c5E5DB7UcoO7rMJY58%2BghzgohapOqLoDeLbefIHKCfT9hmGrlV2NdBgx2GM%2FcmqHkxSRWxz23D6%2FMlZ9VPdYVd2AJpU9y6wxnXJg50syYmcq7kFqEWggsTOxqBkWOZ%2BY3jqcB%2FYhVwm2%2FNdQV1tGVRCqMQv%2FROwYPxQWODcppGEpdQlj6Ktaz%2B3NdItwKL524AUP&X-Amz-Signature=c8a73cefa1b62bbf166663d02679041a0623e35f74c254be996f3b2c7359433a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPIIGOE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1I6jOROMf8tNonXtWdujwdXlQnUV9DA7c%2BmhODsVVIAiBdSvo1Bm2F6sMRz7R%2Bfh4de7UeycnqRMxNPhpRajfCkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMPdOe5Rli5o4Xo81cKtwDwqQ%2F9LbbjSnG69QYcmiITN3B6ifMVhQhriCuH20zASSsGyXi%2F8H4d6KDCICpssuRsjs7Ds7KbyWVZi0%2Bz6wAVbLJtkfJhRFs4daAFRA4btnakoie%2BKm9y9hyj3xRxT2A%2BgltVeOxnZ0kycOZaK8y6Rv9xmn%2B12vremQOUNpiylA4cDlVXUS%2BWyXAK1XfxjMDRaJCY6Yw2CoBHp3E%2BYIUwZRu5kb0HNgkt63ZUUOgc7DN%2F4dMDGJrCY2wehb%2Baj6BJSg5nozs08Etdgmpke6MnNI6MluISamBRL2LawGYGIrazBmyw85KNZ5zSW57jXFiCnK58wQ1ePIzEPZx3C9ld2OWdSFmikeB%2FBJtnjJGtNRDc0gWMsZWkPuAu%2FPKefRDCRP6rRg4YqBbdP0Ye7W5b8kDqWjOrVZ65WXwk7Qxu%2B1a9sFR7UoLza0m9f9Jih6%2BLvHGZQK2H7STPaniAqPmI%2BnGgGK4glklz1hdzxUj%2B6xIBzXPB%2BfV3PxUIxm0l7PZYKTkYpK0acMKMVoY89KjBGDQXbPTeI%2Bh39K0fsdfcCYMzLYTP5WC5Qr7eUCDLtbSSF4PtiAYn67rachVgGI4j8MFOp4iDV3pnipC9nCI5ebk%2FnBjG0op3XgiEvswtdGNxgY6pgGuhqOl9sfBA4AMS31JcFDYCNo2c5E5DB7UcoO7rMJY58%2BghzgohapOqLoDeLbefIHKCfT9hmGrlV2NdBgx2GM%2FcmqHkxSRWxz23D6%2FMlZ9VPdYVd2AJpU9y6wxnXJg50syYmcq7kFqEWggsTOxqBkWOZ%2BY3jqcB%2FYhVwm2%2FNdQV1tGVRCqMQv%2FROwYPxQWODcppGEpdQlj6Ktaz%2B3NdItwKL524AUP&X-Amz-Signature=608168173e92b1d91bebffe51817f4185e64b7c0e0179e2846bcc27930cc3b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCSGDRQ%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqgohCFMdk1g7EoXYr3O2d4%2B9SE4tCQuB9npeFcou9bAiEAr%2BuMjVqtbbl93vghwuonOYcHfOgii6XnN0AJHJRZ1sMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLKO9%2BgSXKg7lju5TSrcAzsxCUJQaMAZnKIaGa8mCH7oNF5KrOGoWfsr0taFYxzbyafcZtnk8BmlupBoVxoRQ42LrCx3x2PeUl%2FzEe%2FTjXsryLGLCEECvkXAC5QRcFQs%2FquVOjaZplypA8mgQWnmc02fomFTwF7gj4Ez7E2%2BFUbF%2BhbN81F9d8eCXdrtRmHyJAO4eFV9pwD33%2BhT4uYNFz3dWpoMttH4CcrlT1Ewe0LTi7yMQ4IV4wFL8cF2b39Sy%2Fm0EpiQvrFh6WLfhj2ezn5D62DIYdgEo1dQz97nlUkvzVMx4poN7d%2FNAiV0UJmvXkVam1zUhl%2B6w3xq0EQDb39nA%2BfvEpnG9afR1jBzrQIEpapFUdMoFdXByTXjEmYFBzP%2FBpVWfrZUYmkd0faE7oKNJmEUPLFXsKkOvkSh1q5ON9UP10f73ZrTR%2F21NZ3QwwyVwL44NIKRIO%2BLU08Ce%2BlKNOeFlIA4fLOAa7cJAjWEjbCfk5yZrJ4oybxJUSzDOcUsiigyyz1Lvf7Vg5iCwM3JSHfR89Omsi0tHCyYDh8tB9wh4ObkOXLWSOTgVir71tmyQ67%2BYVuNOOIk1iS%2FRrg%2BzZi1j5qWiv6w6Z8wpUB4pU%2Fel%2BRx3CtwG8U5CM8OT3pJTEPLnNON4TN4MODRjcYGOqUBYbVWLpKpIFhaAtQOjtR2E62KScGRH4o85KIyvZ7iceSpQOIWHWxFeJ4ZW%2F1X9Y1oOJXzBgabHmAvmf51ZHjibTxKx0lfW%2B586dfBVF3gmNhbKLYyovgASzp5ywZrXCYJ7y%2BRv4p1vgETRATYo%2FdnPdW5TjZwVLTfkwam0yjUXrEQAA6RTRPsvl6NXePpBsfbdLHhYr1tNjf%2BzrxLICh6nbG7fTfD&X-Amz-Signature=0f937ed8c83cf4185784f06b4c93ec62e3369ac4c8b5b1bb2c9a3fffabab525e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBU4QJKP%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnwv2jMl33TjsJRH2PFAI79sPGRjIeApczXN6PCMiR0wIhALe1b0MTvmwAqV6nixu664mBJ%2BNUDWND1Y0ipYdHclggKv8DCCIQABoMNjM3NDIzMTgzODA1Igxum64MLHGtFDpA8%2B8q3AOdsGMBGqISibty6v6Iw1r8ldE3H8xuv5kF3Um3Pi9cl913H%2F4TQ1chJOVegE%2BPpY%2FDwBC7QMneMDOUi9Po0unFycMvAKY4SD72MqBVz%2Fmkeo8sX5tbEYwjktfwZHwv0BLU3CB6DP7hmKhZOErAAH9ZR4bYfLDg3gEU%2Be8w2sEDTZkdGZa7vyU%2FVLjNSrtyyPXKvK0%2FzqFUj4rldSxovKXEj2eEf3aZoY0ioT%2BQT5sBKWO1GOx2GLDMKHNj1H%2FD3KgTIKyU9Rk2q8kUHYSchG5XkX%2FTU%2FWrYciR0oBk6m3nJtDmhUK%2BkZpEYjhMRnPLnjL80ujuMlXhDMQkfC0OqHHQDLXYsca7UmPe9oddXdQMprCQkKlOtaTjpckBRnLer7%2BJ8%2BvhB0x4p7ttjuZzHIdw5kJJtH6u%2FoFAyv1N0FKwAmbIN50H1UbMo9ybYRm3kgmmgYJK7lF7fy4bgTXqYaePprH1Z47gQmeHyq0wwn2xsIGBuop%2F1RwEWgBgwACxC95J5CyWRnG3uHYWqTDcuD%2BMyeGGG%2FsV6mOq3qcWztdFG8aAXY%2BwDURwAz%2B%2BuUFz8%2B%2Fv20pBR0LSNwdoKmQzp%2FmNdWpVzeMxTVxievX4vBLHrVyvO2JtLSVRFmiLUjCT0Y3GBjqkAUuQL%2F02kM8VP0gn13SluPciP4PPi6owEolMQ0d2ZUXm74r9C7vX6IXSKuVsBFJkjwR6CX4aOQaQ80fXS8vHt7pjsvZurB8osB5ry82Ro%2FqQ7CQNznkTSzwz5XqCmFoSyzokaDGE6QDWWx3cQD997g8CdXjb%2BMFv2b40A2ogeAS8szPigBDFAztwFpCgwprrwj6A3fv43Z3LYjZDN4%2BmXJkZ0YP3&X-Amz-Signature=e3055e65efa0b0fbcbeba77e5b739adb7aa67fe22fa3b34ae33adab062ff1ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOPIIGOE%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1I6jOROMf8tNonXtWdujwdXlQnUV9DA7c%2BmhODsVVIAiBdSvo1Bm2F6sMRz7R%2Bfh4de7UeycnqRMxNPhpRajfCkir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMPdOe5Rli5o4Xo81cKtwDwqQ%2F9LbbjSnG69QYcmiITN3B6ifMVhQhriCuH20zASSsGyXi%2F8H4d6KDCICpssuRsjs7Ds7KbyWVZi0%2Bz6wAVbLJtkfJhRFs4daAFRA4btnakoie%2BKm9y9hyj3xRxT2A%2BgltVeOxnZ0kycOZaK8y6Rv9xmn%2B12vremQOUNpiylA4cDlVXUS%2BWyXAK1XfxjMDRaJCY6Yw2CoBHp3E%2BYIUwZRu5kb0HNgkt63ZUUOgc7DN%2F4dMDGJrCY2wehb%2Baj6BJSg5nozs08Etdgmpke6MnNI6MluISamBRL2LawGYGIrazBmyw85KNZ5zSW57jXFiCnK58wQ1ePIzEPZx3C9ld2OWdSFmikeB%2FBJtnjJGtNRDc0gWMsZWkPuAu%2FPKefRDCRP6rRg4YqBbdP0Ye7W5b8kDqWjOrVZ65WXwk7Qxu%2B1a9sFR7UoLza0m9f9Jih6%2BLvHGZQK2H7STPaniAqPmI%2BnGgGK4glklz1hdzxUj%2B6xIBzXPB%2BfV3PxUIxm0l7PZYKTkYpK0acMKMVoY89KjBGDQXbPTeI%2Bh39K0fsdfcCYMzLYTP5WC5Qr7eUCDLtbSSF4PtiAYn67rachVgGI4j8MFOp4iDV3pnipC9nCI5ebk%2FnBjG0op3XgiEvswtdGNxgY6pgGuhqOl9sfBA4AMS31JcFDYCNo2c5E5DB7UcoO7rMJY58%2BghzgohapOqLoDeLbefIHKCfT9hmGrlV2NdBgx2GM%2FcmqHkxSRWxz23D6%2FMlZ9VPdYVd2AJpU9y6wxnXJg50syYmcq7kFqEWggsTOxqBkWOZ%2BY3jqcB%2FYhVwm2%2FNdQV1tGVRCqMQv%2FROwYPxQWODcppGEpdQlj6Ktaz%2B3NdItwKL524AUP&X-Amz-Signature=6f4d8f5712b2687216cac4b35759e0d9eafd9263a31b878a519955a5df26217b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
