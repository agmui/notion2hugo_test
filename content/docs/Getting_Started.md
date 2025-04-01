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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7INDE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDnNWnLQbCHBf1%2BNVKj67M14jJjzuBDZdwWuuKLBDAUQgIgInwZ3GLEc3%2FG9xjz23vUjTEqd6OgxJMafB01zUS8JbEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmkpISxD9vAVnKY5yrcA1aOqfUs24A2eegKyKjtP%2FiUo6kCpnzsIg0Mbg%2Bsc3EUhOVM0EtkVm67SVruxD5RL5CuA7xzBMQAMSDgUcA%2F%2BZ0eH4gMItJnwIh1o9HKu7lOqtCAvIWU%2BqVvqwryJDuTPCiTX9vLcRomBgCFgl8fkAI532q3DoCc1I2292u70lCWnhtHe3TUs8zDPUptMhGfTruWZbuUc8WP5FzKCVK5cbl%2BZcxI0RrWyP4fRukAKmz7P5oGhu7MHcfj9761IlUlaFi1S5mzuZTXroBDSMA60zaFhKC3AusmJWQ%2BTYhOZ17KDy7Dfv7PT6STjwtVJVvpySr15ru8X992BwcKJH5mmQkaJriofN%2BCBtyQNcP2XGpHxK5pUCOepVRtehBgGNpBCyUldSuVyZxL4cc0%2Bg3i3X%2FuKLaUy%2FIgeGqklJpckfmvqsdiPx9ZU9UEda5qOyzcdi5%2B%2BTt4XNIDxRx0Vy1tRCplXYsiBemg5bjSGE6pSLBTfh5BlRwQHBvM0PqxYzO7dV1%2B9KA1U71m6aS5OolQUS9av7ZSRAeklXmjjR7UQ5huxjigvXAW221lY%2Ba5Ewrs1%2B1MXRSkHT1a1I9EGo6YOOqKIVjljiXX7I0YywGPbjOE0kcExehvEtruldpEMIPMrr8GOqUBfok%2BEa7Qt5olZ%2BiCmrqSDXHgs5YJb5iH2cANlcBQ5I8hlba%2FIIGJ4Ci6%2BSDiM%2F93Uy9lNzFSTz8O4UmeSqPVll69ntOUW9R4IZT3Q3%2FQBi%2FJFUQ88j8LLuupO0PPaMQXEwRSUT2%2Fr%2FLwOjGdiulj8VM%2FpcgTrr782oJmaXruzUuiqEiWsvhoXGJR%2FWcpGvOhHGUj1iac0UxEkbA87urXEOU8exdk&X-Amz-Signature=7d69fe524262f4db7fae71b139fc1335a9093a66ec17865be299af1e42a11ade&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7INDE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDnNWnLQbCHBf1%2BNVKj67M14jJjzuBDZdwWuuKLBDAUQgIgInwZ3GLEc3%2FG9xjz23vUjTEqd6OgxJMafB01zUS8JbEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmkpISxD9vAVnKY5yrcA1aOqfUs24A2eegKyKjtP%2FiUo6kCpnzsIg0Mbg%2Bsc3EUhOVM0EtkVm67SVruxD5RL5CuA7xzBMQAMSDgUcA%2F%2BZ0eH4gMItJnwIh1o9HKu7lOqtCAvIWU%2BqVvqwryJDuTPCiTX9vLcRomBgCFgl8fkAI532q3DoCc1I2292u70lCWnhtHe3TUs8zDPUptMhGfTruWZbuUc8WP5FzKCVK5cbl%2BZcxI0RrWyP4fRukAKmz7P5oGhu7MHcfj9761IlUlaFi1S5mzuZTXroBDSMA60zaFhKC3AusmJWQ%2BTYhOZ17KDy7Dfv7PT6STjwtVJVvpySr15ru8X992BwcKJH5mmQkaJriofN%2BCBtyQNcP2XGpHxK5pUCOepVRtehBgGNpBCyUldSuVyZxL4cc0%2Bg3i3X%2FuKLaUy%2FIgeGqklJpckfmvqsdiPx9ZU9UEda5qOyzcdi5%2B%2BTt4XNIDxRx0Vy1tRCplXYsiBemg5bjSGE6pSLBTfh5BlRwQHBvM0PqxYzO7dV1%2B9KA1U71m6aS5OolQUS9av7ZSRAeklXmjjR7UQ5huxjigvXAW221lY%2Ba5Ewrs1%2B1MXRSkHT1a1I9EGo6YOOqKIVjljiXX7I0YywGPbjOE0kcExehvEtruldpEMIPMrr8GOqUBfok%2BEa7Qt5olZ%2BiCmrqSDXHgs5YJb5iH2cANlcBQ5I8hlba%2FIIGJ4Ci6%2BSDiM%2F93Uy9lNzFSTz8O4UmeSqPVll69ntOUW9R4IZT3Q3%2FQBi%2FJFUQ88j8LLuupO0PPaMQXEwRSUT2%2Fr%2FLwOjGdiulj8VM%2FpcgTrr782oJmaXruzUuiqEiWsvhoXGJR%2FWcpGvOhHGUj1iac0UxEkbA87urXEOU8exdk&X-Amz-Signature=ed7c4728da0323ecd78a0139e2efa4db4a277dae005b1f204ed18f94e4a3d35f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJISNEWW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHSH7KrW%2BpdBzwXRwplZEd1TvM4uDpuGvH8cf%2BgL7WZTAiEAktRMTfDY5rrdKc9CFLTiIhYRqP9UNR2aVuk%2BAVESWrEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0U76T02q9uByzdNSrcA8r87SH7ZTIwUF6yXF66DbTlkXsHLSaQo3I7HddLTVJ5jX3TF30cWxeBJtevRODAtG6XenN2mgKMw%2BcAXTM6BCj%2BqOgaFIE28B2jsUv0GUAAMdlhxQN%2B1pyVUQs9A7miORXCGFTtfWYMe634VSgEMRT3dosIW4XnN%2Bcr5oR9CP4u2Ul3eSf5e%2FexbmTm5eTfmhsCqPOZht6EGIgzwwAGNK4TxEw95dE7NWKHs0VkLnadZROu5Vi2IlQcxgxacjaWHkjuHtn%2Bpj1A%2FPn%2F%2FpJuqPxlKkriGwrafRairQIrO0%2Foe5vgeDdclKV%2BEHJ1raWz5Hrinb3QrdBv4pWk6TmYgir7QRBKFh2vpP7RCVp8lO5m0EOzTkZ3ugwJC3WLB%2BnCpP%2FcIz6rRrYGNpp0VxPrca2LW5UDg3Tl%2F37sSyonZnUsbk4Tpq0Kxo%2FFADWUahRld6HBXWXjRnb8PMBKbZ9SgOHX07F5YVb%2BNjVT4%2F7UhYE7cxN7Exg%2BNMY2X3y4sPFX5UpOWwZ5xPgQ%2BMzNlQz6T0wkr%2BNxk%2BpmvGhiUi%2FWPAzI1mTyCd3mGfCLd6fQMoOmVKoazqiss%2FPtT4%2BS%2FXz9ag%2F2vOHM%2F%2Fc2BZv3WKtV%2B4ZqLbKTtwgsMzpHpd7NMMnMrr8GOqUBc%2Bw0ECkYtvtMQ4r9%2F5JKHLup0gJ9doSu85rwKndBaWpeGchjj0TCf68TYvTDjvAiczVnkQluYkWp4qSQjkPBnpqvojX%2BaSS2aeFKind6qIIcz8behhypwxT7RsEo5hjLrE3NMaGVgY0s6TYk5beZ%2F6fmUEWAxZhVY6Fqzut8lNa5rwZsESp2pinLaawWZw9WHIKem%2BoVdBlftoUPDcJgqEur%2Bx%2BY&X-Amz-Signature=4d909b7a0860ed03015e849ff3945bc412db8057e6a70257e5b1d6ed63627cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656XBQQYS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIBKZTIwjWuhTdbaL4wy%2BEKy%2BViupJ9ixV2y8ZlZbYWcDAiADMSF584iw%2Bh32TD4a%2FlQ5iZz6H7cyyZzCA3R7MhpnGCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmflbSwsgE4UpY50%2BKtwDpxCuVQJuyuGDnEdRKcY7K9Nu7o3eQBaraeXzxjAqJLgJspKZFpWM5%2B9Iw4WIoG2uB8FyXFir0YVXCbHjIkNDsUQGq0gERbCI3DC4hYxg2QoZWqDZUUx9xhDMh5nb%2FzGRK0kLhOZo51RLBq5fu4hYtEHa3zzTBPEpZxxGxFbUw0Fu0H6s4wVaWGjLqY8UcgmT%2BvdbNEjoMDqGehCVUKxgZR5wzpcdwvB8s4rzngsu18QlSK4QRbXBWgng8PXThmU%2B%2FFRzI4L6F%2BG5XaGzVEKPL8Qs9mv%2FpO17e7zystPt9d8F4tXGwQMGMgOE3%2BNv2ZwXPR%2BIivztdQXv0RM4QXl3Cot3JdbMbzD6fxfoory99rFIdjDBD3XyO%2F%2FOmihE7CimBUGB2JLtAuDyvbimMuU5y49oJk5jZhIj4iOeuy%2F1Qb8ZhEt8lX8mEMUjpkvErJ%2FWrDcVfG8wATpEOmjCfEz4yCg9Craz3PMaCGoF5Wc15Xd0%2BPAEyyTdY%2BQUAD62x9VlUBqXtwlsh1cOKARdVVbxHjBjyVg%2B4ti1rg39RDCSFIF7BJC22cGqooRDzhye0j%2FEtmveX8uvIAAJXaeppQdrod5dmRARgiei%2FOer3DThPHr%2Bf1hpgKenzKN5sLYw8suuvwY6pgF7qL6V4bIEFqafQ2zyqW9o0HqK2mzgWb1JFOqzE1icMcbhQYow7dhvkqI%2FG5uyF31bT%2F1MKQ3kP5YhaqWceXljRRfK%2BxsIiROuIw%2FxigukKOuOpQZDF1qbsMN2b0u%2FoZVrKUXTZxNW6kAmilDqgUeThNS6eLLownD4BaQYY0zFlfvlLr3bthgV%2BV3IQ5Y62am%2FC65VN5WC9gRSf5hMLGcdolwzFOKX&X-Amz-Signature=8718b81349fc9ce71cbc6cae54c060e143013670146a6ad8dd7535b69b76e0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OY7INDE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDnNWnLQbCHBf1%2BNVKj67M14jJjzuBDZdwWuuKLBDAUQgIgInwZ3GLEc3%2FG9xjz23vUjTEqd6OgxJMafB01zUS8JbEqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmkpISxD9vAVnKY5yrcA1aOqfUs24A2eegKyKjtP%2FiUo6kCpnzsIg0Mbg%2Bsc3EUhOVM0EtkVm67SVruxD5RL5CuA7xzBMQAMSDgUcA%2F%2BZ0eH4gMItJnwIh1o9HKu7lOqtCAvIWU%2BqVvqwryJDuTPCiTX9vLcRomBgCFgl8fkAI532q3DoCc1I2292u70lCWnhtHe3TUs8zDPUptMhGfTruWZbuUc8WP5FzKCVK5cbl%2BZcxI0RrWyP4fRukAKmz7P5oGhu7MHcfj9761IlUlaFi1S5mzuZTXroBDSMA60zaFhKC3AusmJWQ%2BTYhOZ17KDy7Dfv7PT6STjwtVJVvpySr15ru8X992BwcKJH5mmQkaJriofN%2BCBtyQNcP2XGpHxK5pUCOepVRtehBgGNpBCyUldSuVyZxL4cc0%2Bg3i3X%2FuKLaUy%2FIgeGqklJpckfmvqsdiPx9ZU9UEda5qOyzcdi5%2B%2BTt4XNIDxRx0Vy1tRCplXYsiBemg5bjSGE6pSLBTfh5BlRwQHBvM0PqxYzO7dV1%2B9KA1U71m6aS5OolQUS9av7ZSRAeklXmjjR7UQ5huxjigvXAW221lY%2Ba5Ewrs1%2B1MXRSkHT1a1I9EGo6YOOqKIVjljiXX7I0YywGPbjOE0kcExehvEtruldpEMIPMrr8GOqUBfok%2BEa7Qt5olZ%2BiCmrqSDXHgs5YJb5iH2cANlcBQ5I8hlba%2FIIGJ4Ci6%2BSDiM%2F93Uy9lNzFSTz8O4UmeSqPVll69ntOUW9R4IZT3Q3%2FQBi%2FJFUQ88j8LLuupO0PPaMQXEwRSUT2%2Fr%2FLwOjGdiulj8VM%2FpcgTrr782oJmaXruzUuiqEiWsvhoXGJR%2FWcpGvOhHGUj1iac0UxEkbA87urXEOU8exdk&X-Amz-Signature=738e3a2dd50d8482abda716c25db1e5eb7bfcea17c44ae8d9ce73f6fc66a8847&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
