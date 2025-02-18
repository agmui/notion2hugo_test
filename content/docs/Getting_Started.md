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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYD3CPJQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDMpled8E8jCL0%2Fg5%2BpMek2IaZtBBcszSdWWDxwbKe%2FrQIhAPkCG%2FBG3KyLaDjXsGfxZxTnfY%2F%2F6lI82M1sYcP3ZRSbKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGRYx4CT3P8MtQOzgq3APUfrDMLxum3XowQCkx7urvnv1Vt58Fay2EdD3RPMOUyfv1DQGhUj3cKmJQ%2BRsjINmOICMjrWaTPZAAIatK4glktcIWDNOvR%2FyAwcDtZHkcu14NP0ZcNG3rE2hbK%2BJKD9XUwNtDu2VNE443Tie%2FI6BuYJXlUwT1T531XA0Mmtl8CLDz8JP9RDex0VUztmEIRHILLpDfkfXvo6y2O6FAGiiJvBBeuTeYk2tRhGivMOC9POuAtyn2wtoAhTj24dMtRiuqFi3rt73QOROLoznNlIHlzKaUdhktVI388RzTt03RSfhxQp2UJBYE%2FybvB9U%2B7lffQUP4eEPGCfSUFD3SNT%2FwB4yY2cUdDxvZoKyEgH%2F77hVzJWxQP6JCi81vehDRHmo5ceFHZNkyOvqoTnrv9WCDhkg0RJdX%2BpW7iY8rMC2QsjmYEc2VB9OPhsm4CIXiLCMu78vPz%2FtBeW4LGs8O75Rm46Zq2l4e4jLm4MBiw0xykZlHwI3Ei4kONgybXa5D1dqXIug6fOfNqdeg7GMWa10r32q%2Fuu3tfjcZcd6R6EJgUtkpzs5m99s1sy1gTtlbDOZndbODT%2B8tjFgilAxKXg4K2YoBN80VS2%2FQ7HJGt0Z0Q5u6duo3q1LqmvS3kjCpjdO9BjqkAe%2FFP%2FVP1OSOd%2F5VGKgsXkPGICo54W6TJmP8riE5Z%2Bq7VwRZdWYfssOkfZQRkgNnwDBiLJSflOM3xoLS7ouvqubxGvm6YxLuG%2FJaAZayGPcVZ%2Bq69kE4VLyYEBwFg0VDzhMGm3VNnU0l%2BX7G0hoKWv4tHA1wDl%2BNNu2G6d5nl%2BP8xYdKlBFIs4s43ELDwJ9h8VPsVKXwwh45BTcNtXtVU9xBlg5n&X-Amz-Signature=d3a89c67159cfaada69afa9cf80b5fda1a0a0cf661b3e0c30f115e6c2c9ff5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYD3CPJQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDMpled8E8jCL0%2Fg5%2BpMek2IaZtBBcszSdWWDxwbKe%2FrQIhAPkCG%2FBG3KyLaDjXsGfxZxTnfY%2F%2F6lI82M1sYcP3ZRSbKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGRYx4CT3P8MtQOzgq3APUfrDMLxum3XowQCkx7urvnv1Vt58Fay2EdD3RPMOUyfv1DQGhUj3cKmJQ%2BRsjINmOICMjrWaTPZAAIatK4glktcIWDNOvR%2FyAwcDtZHkcu14NP0ZcNG3rE2hbK%2BJKD9XUwNtDu2VNE443Tie%2FI6BuYJXlUwT1T531XA0Mmtl8CLDz8JP9RDex0VUztmEIRHILLpDfkfXvo6y2O6FAGiiJvBBeuTeYk2tRhGivMOC9POuAtyn2wtoAhTj24dMtRiuqFi3rt73QOROLoznNlIHlzKaUdhktVI388RzTt03RSfhxQp2UJBYE%2FybvB9U%2B7lffQUP4eEPGCfSUFD3SNT%2FwB4yY2cUdDxvZoKyEgH%2F77hVzJWxQP6JCi81vehDRHmo5ceFHZNkyOvqoTnrv9WCDhkg0RJdX%2BpW7iY8rMC2QsjmYEc2VB9OPhsm4CIXiLCMu78vPz%2FtBeW4LGs8O75Rm46Zq2l4e4jLm4MBiw0xykZlHwI3Ei4kONgybXa5D1dqXIug6fOfNqdeg7GMWa10r32q%2Fuu3tfjcZcd6R6EJgUtkpzs5m99s1sy1gTtlbDOZndbODT%2B8tjFgilAxKXg4K2YoBN80VS2%2FQ7HJGt0Z0Q5u6duo3q1LqmvS3kjCpjdO9BjqkAe%2FFP%2FVP1OSOd%2F5VGKgsXkPGICo54W6TJmP8riE5Z%2Bq7VwRZdWYfssOkfZQRkgNnwDBiLJSflOM3xoLS7ouvqubxGvm6YxLuG%2FJaAZayGPcVZ%2Bq69kE4VLyYEBwFg0VDzhMGm3VNnU0l%2BX7G0hoKWv4tHA1wDl%2BNNu2G6d5nl%2BP8xYdKlBFIs4s43ELDwJ9h8VPsVKXwwh45BTcNtXtVU9xBlg5n&X-Amz-Signature=b18db1eaf22681c0a3fac2ea8c188bf96c1c0dc2a748a67cc53072733747ce73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX6IY4HQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICRV%2FIGyR1PIFGBwSLJq8jeerkkSRf6k7N4%2FuZm5yVUfAiEAjNcl65xvei5eeYVaxH3QYDeklrLFJNvuszradmdfNG8qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdQfB4zxLJJGtv5MircA7%2Fm%2BZAWLHRItFBDqro0%2BMJHjtuourANchP5JlNghD9zARgRy3UOOed9WKrk%2B%2B5qHRmbJGAeVltHSAJQbcYx2s%2FcUFd0QlVFIQr6Zj5Gnfj8uXVMGBMOLmYUkf9iuQV9vlwnXW0T3%2F6g6Lf0E2MGUkPxDpqoJHZJ%2FeTajQjZGL5seyOsX3Sm7McVWn3gbU%2BU7aHSZum77u%2BW6eXBPUKVfR4dNDMojRKzMyzRiSTdT1zcpYMUWxnyeFNjAD1zGZj6%2BAsno4ELwO0xsvEyNdFPRUPBpk1N7cYj8sXyYkGXayvyuMnsvcKBGpmRacpUg5q8WZjf7GWKWtvKFZgjszjaKZ9U0e9ar7AVxDdpEi8oyJ4u5lMIXUzD5AlSDsGD8TKTcAFIoB3suGkOTrRtsUyYwgV0PBYqI%2BVRQpqh8nllpTw1%2BPvuo01HEXKtX4SX8lxeoWZ58KHu3YDMHKRJUOmyiRZeDjHEPavFj2NEkqealk9prQOOw9g1oUsA%2Fnb4DyfE1%2BAeCaKtBnuUjatfr7GnTdQlMM8BgpeD3UtwAQ14EulctGt9SJheT5DLZdFJ5Jma6cthiCvd3r2ed5yHaWEKun%2F0BVIrYFEF58B%2FCXakPVYHvMu19hAVffwJmYuTMOD90r0GOqUBtZQ6tHg5AJt%2FpmewW4wrFkt0xNG80u7keqLRbvNmwordfKtS6OJKQ4QJbB3qSrJAeklopZ6jGUrP96dfozCxdJqg8zRHBI6v7lhvnWfwwh8YkVe%2BTnqb33RD2H%2FdYzjt6XsbKYqeVALYas5QHNLZ7AdHEhbJ6hw9HINBn%2B6Jj4BicuIrUcZEupBwKzcdPfdvgmnOuo%2BGVjkTaLfE0tD8kna4LJ8%2B&X-Amz-Signature=1a6a78686efd4363fe6ea76fa1df62de6f022976c5b79834c97121713dc70da9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL5W2QCM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC3g3Yt6QCW%2BDPwu3cEZk1CLa4pMQWZmdfRdRAOiu38dAIhAP4A%2BGNBV3c1Rg3lASAo9PGHjBsz8kUp%2BFGxF65WOUgRKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeNluq9pbm%2BWafWkgq3APAaJuAXcpiU8U5XsmmkII7fsJSQxki1MN9MKUxTez80Y%2BkhFATsoKGEcS4XPYQxDj3wjIfQcLHa5bXgjO6n4qpjtS23ZET%2FaP3ChocpGfOhvIqRBW1I%2BGowaaI88wRLiW0kQ21Qi6m4Cgw%2BEEwF5ETOguzR%2F9p9oKQVaQvCbtrv%2FBazx6d5yRJTMTfxJ%2FrdY3Yzfx8KWmH1E0SnEUnFr62tJmcCzIbngUz7PZTjocHizkPWfsqe9GvwMUn1v2iYv%2F7ayBwE%2BQNJ0S7e%2FRAp001Hg9jsgQGaEnpN8d4aDZy0%2FOyKZVcfxTzD21m2LdOuO0hHGLxEcghdKNFzLUyG4mzsf6u4%2B7mPW92sfiadCbs%2FNaV20jrRsdtkyz1BAMHchUPquUQRTGAcmgTiyaxWCE9UbB%2B9m%2FwONA%2BO3F1iqD63%2BLvhq95XGxBmRkvByRpqjAuTNW4A3PBIz0s1KWqiKxZP1fCxnDMlEcYu15u4ENbXLmD%2FuLlZSn7SQEqLW4h6ks%2Ft2NYsc1NapKE%2B8TY1fJvJuTdGUJ3NsjwRa4YedHSlN10h%2B4E6vLlYGWEZO9Am6xB%2FheZcicVxkJ5%2F4p4PWuiXu%2FY5Ygs9idp3iUrKi%2FDYdlXEGC7M2t6MBjIxjCp%2FtK9BjqkAcAChnhMTnBeJbTtjp5qdkvME%2FGw8dn8UlUeso3n4hVX7QGwMfuqQhHz6i9N%2BLZ0ogkwNmQpO3r2QmC7%2FnLA4gKnZ1A%2BNA8ojAkin1T%2BtrP71My%2BO8j3ULGdcAa02RGAZ8pnI3U0pbEqiAN%2BdcFmtkCLxi2ZtNBTS0rkhTlWdlvSwq1pXNswQ5iG4a2NadchaUjNDOzUfdsXX93QmQ7bZI21UGcr&X-Amz-Signature=e9f7f72a08d37178adcaab2b2a19f24aa8782f9d1c4bd26e279b8a939782df56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYD3CPJQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDMpled8E8jCL0%2Fg5%2BpMek2IaZtBBcszSdWWDxwbKe%2FrQIhAPkCG%2FBG3KyLaDjXsGfxZxTnfY%2F%2F6lI82M1sYcP3ZRSbKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGRYx4CT3P8MtQOzgq3APUfrDMLxum3XowQCkx7urvnv1Vt58Fay2EdD3RPMOUyfv1DQGhUj3cKmJQ%2BRsjINmOICMjrWaTPZAAIatK4glktcIWDNOvR%2FyAwcDtZHkcu14NP0ZcNG3rE2hbK%2BJKD9XUwNtDu2VNE443Tie%2FI6BuYJXlUwT1T531XA0Mmtl8CLDz8JP9RDex0VUztmEIRHILLpDfkfXvo6y2O6FAGiiJvBBeuTeYk2tRhGivMOC9POuAtyn2wtoAhTj24dMtRiuqFi3rt73QOROLoznNlIHlzKaUdhktVI388RzTt03RSfhxQp2UJBYE%2FybvB9U%2B7lffQUP4eEPGCfSUFD3SNT%2FwB4yY2cUdDxvZoKyEgH%2F77hVzJWxQP6JCi81vehDRHmo5ceFHZNkyOvqoTnrv9WCDhkg0RJdX%2BpW7iY8rMC2QsjmYEc2VB9OPhsm4CIXiLCMu78vPz%2FtBeW4LGs8O75Rm46Zq2l4e4jLm4MBiw0xykZlHwI3Ei4kONgybXa5D1dqXIug6fOfNqdeg7GMWa10r32q%2Fuu3tfjcZcd6R6EJgUtkpzs5m99s1sy1gTtlbDOZndbODT%2B8tjFgilAxKXg4K2YoBN80VS2%2FQ7HJGt0Z0Q5u6duo3q1LqmvS3kjCpjdO9BjqkAe%2FFP%2FVP1OSOd%2F5VGKgsXkPGICo54W6TJmP8riE5Z%2Bq7VwRZdWYfssOkfZQRkgNnwDBiLJSflOM3xoLS7ouvqubxGvm6YxLuG%2FJaAZayGPcVZ%2Bq69kE4VLyYEBwFg0VDzhMGm3VNnU0l%2BX7G0hoKWv4tHA1wDl%2BNNu2G6d5nl%2BP8xYdKlBFIs4s43ELDwJ9h8VPsVKXwwh45BTcNtXtVU9xBlg5n&X-Amz-Signature=9dbdaeeb08cd05dce3930182ab61251b1832ee66a6502b054ee290936423d459&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
