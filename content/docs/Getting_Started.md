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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=ef5f7c13767de0801f0cd38ba98c70f8f879727e4f138d36f293cc4c8f1cbe03&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=668082fc92074235acaa8832cb6cba62990c138da66e4788a90421486aedc12b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=9548746970a60c2c0e2433b16eee456b4fe57e9d8fff3e778a8d812f875ed5e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665D5C766%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqefnuWZxMaob5ZxfAJCcBxzua0y1p0URTMWmUjB6k8wIgChBy%2Bbou0BTvP9kkqkZsgze5z2pjvLE8rK9PIYTmJ8sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGgOVVcnPdA9yN75iyrcAyH4SwPF6qYka1dJZpjW5CrJYfDDYWJkYka21eo7s%2F1niEK%2B9VVe0cKf%2BxQdvM1ubz39VkWvtfwwNlK%2F%2FHi8B%2BHOKYtnebM5EVAOUhTk4X%2FHtfhSmJakseqqiqmsS0Giqw9bCVZSdUc481jf6HBPjJzVnmRcuStliWjNn1sWsMfiQK8%2BjFKn%2FTOXdb02NfH0bGzpTIFAbIR2kKjWewljABYL0X4cxjKeMFvCEUovzBmQfIyr8XX%2F2%2BDbEcs8fqg9%2BLaifs0cLc4AKJbcxAUjt6qBOoGQej%2FmBVhFx1Poa3dOpHGQZK3myxd0Sq3LCBxM7nCsq%2BHoJDgR0BhBzWREN3wWctfwViqrNX50rMagxoN37rPqbNGDCfNf8tC1Dy9pZJJ2RtbyylENhp%2F4OPsxOAJeH%2F3l%2ByFzbi9YAGX%2B6ObY2aWof2CfzeVEa2rDVBOMBw%2BYmesV6htchjeaRIjNp8F0dAbLHYgGbWeLSWKX%2FCWTwsnXRyfFZ2bkS6UMnkN1W4FnmYmWdoCXwie5hBKxstseItYvvs%2Boog7c5sLKUUV9gprNiW1cgwXBkqNu7tWhmFFpbDXuw97lRsbctbruDNEcn4F0MGOKBtwnHKKg6wxGewNehpP0kdIit6n2MNKPp8EGOqUB%2BFXkat5QEM6LZ1UqNyhZwwAFenFKlFl79q2ueseqGlYinbiYlbNU2B1hReQ1lRI%2F9aTDfDMe%2F1v9D2O9lDn1HKxF5t0I2SC2xlMTE3T6CXQZV79Eott6NbZOyg0py8jL2%2BkAjOcmApAOu7UKq%2F8oY%2FlyX1dbEwXw8UNO0AsyTHjXXOipsTvW9Pc0Ctv2FEqW0iF3kQ2fpX5lxrZkc6eV6D4ocXJ7&X-Amz-Signature=67cc4b6a596ccd4f6d8b09f000d0325583d2163ce1f00d0bf7055fefc882ad7d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Q7NFBP%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Tbu3UwPiv1Dp%2FJ%2FTUfwJaTT2Aj5APEKZnRwGYaassgIhAIkE9C4jLkUopZEdrzVp1OwarNFWxSfq3OuupiDe8SyQKv8DCHMQABoMNjM3NDIzMTgzODA1IgwioWl7uKBxMRhBqTwq3AORLT%2FHnivndbTLLQZzXFN9MNI0V%2FKt4dszcI%2FsRszhm%2Byvjne%2FlbPhSl2BOiIB53iBGbpVIjl3Hv9v8NredGSFDa8eeu5N6R21xD4qEyLzzJUJdZoz5vZtVLL1Ia%2B%2ByASq0LbUGRgbXHwEXoQHf1m%2F6IrBfMyQFsN1U2E%2B1JPubnFN8yarFAmgOoUbO%2BWtZkrcF2FRwR8qAS5w8pDaTIe8R3efOvgC5u%2Bqcg5q94MBqj08PftyyOkc50%2BiMD9WqbPqaI7wiUmRhDGFU7QzOQjuZkTfPXK%2FD8M01yIAdZXJ6tRAxoBwICumO9xK7%2FlMijJvQXW5eRDIxWrhutAVLhxos6IMH1qmVRAgT3di4sxFDa%2FoXvJUetJ2y4hxsZlzQjmf1a6x%2FGKYbHxp3b%2FNVt7L%2FIn6OUQvNt8aENoJxTHnBbFrmFx%2FeGW%2BySt5J37f8MpsqRJOqQG3fyH2AKRkKJoBMNqKQzw%2FLQy%2BWIRRc1g6%2B9tYtXIqsYHYcT%2FoG1%2Bidu4H%2BH3hHY%2FYfSIRBmXv5OHWCnoNcrzYv8wegR1iWZoZAx6gunUBDhTIRQRefC6699dc%2Bnyrz9CF25KkY%2FacvGNtpOAZ%2F7pxU0Ti6kjZiX5KgcZ%2FwHbecRzBvc%2FQyDD%2B0qbBBjqkAZwlx77GRpFDM1M%2BI2zaQ20M3eVq6d%2FODffO%2BdJbI%2FSQH3fogtf4MRR7ojuHYdW%2B%2FT6Fy6e57LYEDiKKw2N3aKGmLDUKEq4DIhM11lQhYoSLAdWojTMEQk%2BFqWp7pbKljRixJfR7lXAfrZE7XdoK5yKIx5XFLG2vUZWV02H18CDoy9Y2FYsl0KrdoDNewIAeumP8FhuCyVFvKOEgoMXsoYDY53XO&X-Amz-Signature=385d37b546e312c7d847def4a757d70df4ddf87bf1b1b6ae100c073c58ef735d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677P2X5WL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZVw74Jk2e1w%2BzC37exHQ%2BrgRCHmgbWzmjd%2FaE6WubwAiAdHNdROsyRrWWNDXfQ2weRQHe90xPTMeQOLfaoLDoN4yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM%2BlciV8HFh6FRxV%2FtKtwD0Q3Nv%2FQ38KhDACeE34daFocJKzfJUj4DPSVRiIheOQy8MemUM9gin%2FFvPoCm4WphByeb4b47p7BboX23nth1MOzbIXHsiTVTHUcuXIPPkiinrwEL%2BOmh009MuDUmsWilCD0JCOHR2OukUjTksA8DtINPTg6AgSI3mp48awqiTh1nH1kAYa9ozrqRZc0Cwh2vPzzxM3XAdrGB9KalKMmjEDy0Z00mukkwr7Gg5B31efbQGMsTiyGejTJU%2Bj6AaA%2FwTaK%2FzzktRwG6k0wp1o66Zlhp2ayOMZX%2FGkM1TFc3E5uDaGmtGZajynZyEvgQQnqhgThIA%2BHbv52nK2LcYSgLyhczfq714Zlb8TMDq9X7Dj9H0kKz0Fa%2FYecOmWkGqUTw1KF%2FHNRE%2FZHQptlJTzB4r4khlSa7TSkq4HIGzZPfXekOQCmEa1fsif5BDdPcLor30z8E78yvdDdgQOf2OIUcdhcxE3WH4dyO2uivBMZ8nq7iAIf%2FoqC%2BxbbraXflEeM%2BB%2BMJO82wEE4gQ6LsnlZAR9XQyipNTdZncsKD84ZFwRAhUcdzJLgA5e85%2FauZncfV0RyQVQyLZSV4wKvyZkqs%2F4T%2FXBCNWRUsdD6oBKKSjp6PE615iIBHaEorWXwwp%2BKmwQY6pgF0Dqz4ixb9MTn3M7%2Fh6Bv702GL3gb%2BCFgqejkQIso4b%2BmHJO112wIUsYTYbXnZHgOw5N8mwMAU4Qb1loHZzqdqzKCir9LVgEHMRBU5JpI1tqZ9gOULVq1fqI3uyXfuYT6T9L626O1KUcEkZMYM00%2Bt7Wq6M0IMoK1BuiJaDVJ9EXNI%2BtRkSjCnf3eOFa4cZFwtupkLAYHbFwMHY8MzWLA6yvT7gZWj&X-Amz-Signature=9bc1502a0474b7af6b54693f1c4f2b7e276104790a56205d51edc7af12ec2931&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
