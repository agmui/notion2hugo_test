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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIJGIPS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO3VJoxu0zdu6RYgFBLaZgJSnNF3LWNdLyMp9CDVUNnQIgBsDTIDa2CbfT%2FncszpI%2Bqx0nNSGUwWxN9qizZnMyHN8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAN1ppAeMjgt1fNjgircA%2BQKZhXQvMOuQKlw29oxKiD1%2FvcgjQPwP2r24o%2BaHwEuRUKfuKK2iTk1ejSYiwwBHiXQe7qnApMcuMsMqDQTUx1bSsPQFEsj%2FzGQfHFhhx8BoRg8ZYJ6jQln%2BCUtShJwdKI7gImessLbMkaVbC7R9gfDGMFK2gGrDqWit4woFrR2ODYSXw1X%2Bsxt5f0YAwRqvUakwERRbTFvkPPiupnodfPhA4INjWi4d%2FJfYSGVoOzHQhewNvaVfBJtl34jpzhDzLvuFjDjZH6CCq5WxWLLC0bkkkdbthEwxb%2BYQffFRTVRi8O31Tis0VFbx3mWjed5LYKGcZH7aOOa9fMDQbO2FDACSe%2Bz0ddrF0rUC54sNVW3D3cG7WE%2B5jLuyIgDavglkli9Oh9CUZbhJchWrw2keuPQV8RRGzxLMNCmckrBBM1NLgFHpLi9%2FofgTzSTSKXmf9ZwfKiRvwcTBJ2NGytYHydy04HMqNZ8lPRXCqGsulKvG9Ssp40RWLl4Wuv068bDrhvgKaRr%2FVQ%2BoY9klR5BilptBKjfJUomRaVYCBSn1V%2FojS4FGdIWxuM1NgkvZ935IRZDYyPwoYdZHvRcrvLLTVEMZJ3EbB6KBAZTrasov3IXvjlqXIFb8u1h49VAMP%2F0y78GOqUBU5q8KAvvHDe0ztdIf9x0yQY5Tp9M0xno7Kl8t%2BZNrBdYVqqSJ8Ai0bxLnW9CX6plyL6jj53%2FQLKsjxUqnEx72PvN%2Bvkpo4Y2wIgmyPrQKWk6rSyT8MZDU7m5fgCIQJinYTupbBAbtQEsDSDnJCutuqJLB3hhEffvDfMmmRC7vGGfnQ8Ac0nFE5N35eL5DLZ667Zg9YGT80C5CzkKc8mdA26Vij3t&X-Amz-Signature=ba0771db9da0affea6927297c77327dd204c794136875d425873d0517b5cd92d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIJGIPS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO3VJoxu0zdu6RYgFBLaZgJSnNF3LWNdLyMp9CDVUNnQIgBsDTIDa2CbfT%2FncszpI%2Bqx0nNSGUwWxN9qizZnMyHN8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAN1ppAeMjgt1fNjgircA%2BQKZhXQvMOuQKlw29oxKiD1%2FvcgjQPwP2r24o%2BaHwEuRUKfuKK2iTk1ejSYiwwBHiXQe7qnApMcuMsMqDQTUx1bSsPQFEsj%2FzGQfHFhhx8BoRg8ZYJ6jQln%2BCUtShJwdKI7gImessLbMkaVbC7R9gfDGMFK2gGrDqWit4woFrR2ODYSXw1X%2Bsxt5f0YAwRqvUakwERRbTFvkPPiupnodfPhA4INjWi4d%2FJfYSGVoOzHQhewNvaVfBJtl34jpzhDzLvuFjDjZH6CCq5WxWLLC0bkkkdbthEwxb%2BYQffFRTVRi8O31Tis0VFbx3mWjed5LYKGcZH7aOOa9fMDQbO2FDACSe%2Bz0ddrF0rUC54sNVW3D3cG7WE%2B5jLuyIgDavglkli9Oh9CUZbhJchWrw2keuPQV8RRGzxLMNCmckrBBM1NLgFHpLi9%2FofgTzSTSKXmf9ZwfKiRvwcTBJ2NGytYHydy04HMqNZ8lPRXCqGsulKvG9Ssp40RWLl4Wuv068bDrhvgKaRr%2FVQ%2BoY9klR5BilptBKjfJUomRaVYCBSn1V%2FojS4FGdIWxuM1NgkvZ935IRZDYyPwoYdZHvRcrvLLTVEMZJ3EbB6KBAZTrasov3IXvjlqXIFb8u1h49VAMP%2F0y78GOqUBU5q8KAvvHDe0ztdIf9x0yQY5Tp9M0xno7Kl8t%2BZNrBdYVqqSJ8Ai0bxLnW9CX6plyL6jj53%2FQLKsjxUqnEx72PvN%2Bvkpo4Y2wIgmyPrQKWk6rSyT8MZDU7m5fgCIQJinYTupbBAbtQEsDSDnJCutuqJLB3hhEffvDfMmmRC7vGGfnQ8Ac0nFE5N35eL5DLZ667Zg9YGT80C5CzkKc8mdA26Vij3t&X-Amz-Signature=a98914a4be5d3dff2c725e907e6889193ef6e59403d4890c844d6cdc9eedf2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPY7ELBX%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhP4jc4rJvk1C3JXFTPD79DUAm800HOej3rgPs67hZbQIhAJRctF3ux7vra%2BwmWM2nhmTpd0rhgDIIQAYtDECSAfPZKv8DCEwQABoMNjM3NDIzMTgzODA1IgzmPuvAmI5A6uDAk8gq3APJkQvIYJtMWj%2FAhcRjPB3bth9XIYKzYsXUZJ0380dVu6XLwzfiQ20DsBJ5ZPTYs2QGBqILfH8jFQ5bjUTih6ltdTZlWt49Wqa0cIIPINS9qjZUKML7DE8C%2F3qc52mYv41a8Z1FpaEdSRenQbxzqL5bBuym8e0gGyaQgoYt6AEyUqCE10Ip5GDZ%2Bof6gIrMe3ofF5CeBR6NPPWWT2vAU05xy6%2FtKbmFq4U34Utb%2F%2Bx4fvWNJiJCv7muZuu7EKhWbZnvnTcI6Azspve4Gem%2BoL2YRy0TIPMdOFj6QO2tcHUvNR%2B%2B6BJ7el5DQ4hOLXbYOrVxJxQE%2FPh6EJKn7faQ4QSSLitPQLLlbgL%2F9wexg3UlAcqUHTQ%2FotI3bsrsj%2BSJ1x37keNbd6f89RcoTxPU7VxZ0%2BxujTCHL2GCsa7%2BjQCaZhQcHEKuW%2FzCqaKSjC5eEa%2F2Xy3SNvkrAY3EqC85YBa0bgHCU8zrtNim8Rfokj0IO2lMtpef3blYtbjMoqkIR0wvCSkklwD6f5dw93%2B6gydSfgbtAVTbxiE%2BMtQp%2BURLfqo%2FKjsd7CMsH45Fev0ydHlS4YMqtnXLJfcblaAH%2BTmTdLIZCMYoSGahKZ4bQz%2BFmVYlVZ%2BESJOcLbHF4jCknsu%2FBjqkAUmK3QNyH4UJ89N1y02dS7mGh2ikt40rY3dNgZUh6EutQrqMdOD3pSEsejs3sbkgrbKl7lEKmhu4%2FM%2FzaKz%2BnENMTnU9PF6AcuqQHVYyCd41vlTf4tXuI5ojv9IIjKzSsY2tTXfODrtYKzO9ILE02t%2BuomGof3zcec5bynXo3GzV02mA0vDZzMsYEj9usRsB1W%2BPzfuiURlbnB5k9fHnK60AB7zr&X-Amz-Signature=2e10f49baebc2f8e7e11b920cdbe8132e115f6ae806510f3f1fa4f5abcdd67ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMQTFN4%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhUXutpHnPAx63DvKvrsuma%2BkBEQVhZdSMHlQiBAQidAiAVrAM4rVkK4KqZCTgtdBPvBpr72GVblokt3nWPzH8xnir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMVuxa4nnrFBlsyfycKtwDVdArHFVBRN3xHQAGUTQEDvP32FLEmsZA8wm2a2DfgxZLh36eeLK56uk%2F7tI1ckdGFHVWioo2YSl%2FbfrMn89ShkMOhZ5f6G8sq24WDNDcQXrka7pt0Y7duZrsJLWrBK90fywe6%2BDOwJ5VfnzGqOjTZVnp9ZyO51Eiv%2FRBSMqh7%2BsmEW2K6vZk0%2FZo9recOTXhEb3%2FJicqyNPzW8FJyRV8Qh0WKmyLKfolxBCid4ZD%2BA9J%2Fci1KSjeLdLXZvqe%2B%2FCUfY1aFgjhnshszGGtJMv2gx1Nwk3RhOc2yR6mpuX4L1hLKioeJtet5LNYCANIXMbeCza9DRlgUp8OUCVJo4WG%2Bw6ogCoaIEd%2Bq9aaXAq6hZ%2FnTwZZZkTRioOcfj%2FZhuvYb20cB0n5yiI9jQTxQJ66MjfnU7Zg9qdQnQDD%2FMtWuP9HKY1NV6btcRKR47o%2BijuCM1U%2Fdog%2BxpqFa4msy6XL8CNjKM6YRNllRm4GcUYPultFflczjsDVJANQvSvIWcJszimhE7YcMPuKRmKkuzM7jvj4N1rzntmtB%2Fj%2FFYOpmCPqcRdnqdcZk8pE1C98WWTiuWPOWmOka87v5hSe8ltOpFEguB7KBjR836WNGfpYX6lDrx6gmuLZde7cWN4w8fTLvwY6pgGZ3BhnqFm4Q%2Bd%2B%2F7JHsF5LimApDdR34116hNYpIuCqRaaBkfHYyDGjg08RD8dgCVS57Gu6yy8kzxtUMofG79m8%2BhFN3f0hCUXZQTEhjxk2IqtlnfBeYExU9i2%2BY6WuPp1DZNnMjLZ6Z%2FatAfx0OqvzBw63Ob2A%2B9VUB122HhRst8jPJDfcUyFvC5uIfkPw0pJBH6UtmC4ll7i%2FoaJriAqKj4JTSMtg&X-Amz-Signature=257b4b703399956b95e024f8d0283cff8ea2ec4692624605043e573c4dddb0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EIJGIPS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO3VJoxu0zdu6RYgFBLaZgJSnNF3LWNdLyMp9CDVUNnQIgBsDTIDa2CbfT%2FncszpI%2Bqx0nNSGUwWxN9qizZnMyHN8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAN1ppAeMjgt1fNjgircA%2BQKZhXQvMOuQKlw29oxKiD1%2FvcgjQPwP2r24o%2BaHwEuRUKfuKK2iTk1ejSYiwwBHiXQe7qnApMcuMsMqDQTUx1bSsPQFEsj%2FzGQfHFhhx8BoRg8ZYJ6jQln%2BCUtShJwdKI7gImessLbMkaVbC7R9gfDGMFK2gGrDqWit4woFrR2ODYSXw1X%2Bsxt5f0YAwRqvUakwERRbTFvkPPiupnodfPhA4INjWi4d%2FJfYSGVoOzHQhewNvaVfBJtl34jpzhDzLvuFjDjZH6CCq5WxWLLC0bkkkdbthEwxb%2BYQffFRTVRi8O31Tis0VFbx3mWjed5LYKGcZH7aOOa9fMDQbO2FDACSe%2Bz0ddrF0rUC54sNVW3D3cG7WE%2B5jLuyIgDavglkli9Oh9CUZbhJchWrw2keuPQV8RRGzxLMNCmckrBBM1NLgFHpLi9%2FofgTzSTSKXmf9ZwfKiRvwcTBJ2NGytYHydy04HMqNZ8lPRXCqGsulKvG9Ssp40RWLl4Wuv068bDrhvgKaRr%2FVQ%2BoY9klR5BilptBKjfJUomRaVYCBSn1V%2FojS4FGdIWxuM1NgkvZ935IRZDYyPwoYdZHvRcrvLLTVEMZJ3EbB6KBAZTrasov3IXvjlqXIFb8u1h49VAMP%2F0y78GOqUBU5q8KAvvHDe0ztdIf9x0yQY5Tp9M0xno7Kl8t%2BZNrBdYVqqSJ8Ai0bxLnW9CX6plyL6jj53%2FQLKsjxUqnEx72PvN%2Bvkpo4Y2wIgmyPrQKWk6rSyT8MZDU7m5fgCIQJinYTupbBAbtQEsDSDnJCutuqJLB3hhEffvDfMmmRC7vGGfnQ8Ac0nFE5N35eL5DLZ667Zg9YGT80C5CzkKc8mdA26Vij3t&X-Amz-Signature=36b1b4376b321dd6044422ac51a0995a493fb93e823e87d80df6023323309618&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
