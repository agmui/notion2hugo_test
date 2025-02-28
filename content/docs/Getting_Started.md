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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75QX5WR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICBhJug%2F8VDKkT0Iaxu3vIhTDJ1rZ%2FDeiJ94f8wBfIYaAiEA7RD%2Fkz62ux79tOYpFEwai%2Bw61gnnw7NDWtkMSoO1gBcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN434rnxZeN3jpmRqyrcA0Ktrj0GwcGlhwosw%2F8WIKSazywc0SEZoSzACEZEMvgJi1L2ygdzkHQiWPI9UrreSKtRf%2BHJAcSXgOXtMxSfx%2BN6nMVQ5FFg3lH5kj%2ByazUL%2BLlwEBmdhqSYIFzG6ILLchmFuXKoXti%2FL8lw6qznCcG%2FZhClnNWhoCVPnFIkoiFjB5Sz0pQNrlscIf402iwbG083SoMBM0XzLPMj3PgB5ZVfM0S%2FKarPMXmGx3PmnobX9uNfAfNm%2F3ooseOlzzgTn%2BDGIL1tYMCUJiGY%2BrrxLOGZCJ5wcibjkxT2BLTDVfYc%2BoTP9uJxI5f2CeTq%2BQhJBIKLoa3gA3VdRs72%2BqWtJrdTh5yhoqiyB3OV294j6mJFAh9%2Fby5i%2FcKDGkC%2FBSEjBfrYiRtZNzTzjfZrq75L0fV3GkPxCpdarsQ%2Bx0h9LelHcEUvQd9QjF9IkdNBjXt%2BGujTLKOFWKBRQwhrN8E7bCNGyL1Y%2FXoEe3DdTDl7SNEGVcAqehCf1W3YJlWZcl6gZBZLQll0tRlh2xOJuRvQG0dr9nRP2mA1mCoyUEQwHtyJD%2FOJDbOD45ZPvJvM7CU7LL3eqyCGZ73JuKIukwMhswfKHMcwRWeVM9waf2AwBcDfK9f3R6Et%2BS60pTkbMJewhb4GOqUB41gWG8Id7q3U97A6EK7qR1BLPzYG18fI5os%2FgccqD6lbOJI2pigR9sZe1KTWkPZbLh4zTJrUA3rgEQoKpCHGWRc21JiQQdv8G0LYKyGt2%2BLvfaW3TZPYjsa69Ucuixu6NmUFqaRz1kgP6gNRCBcEpRktM24QlXE4nGevrv0NBKN9qWZOjsr%2FjezTnEcm0YkiAl2zktILUTbDITtjlVkMrXsktQjJ&X-Amz-Signature=24278a9d40890730a104f7dfc4bda0a68e371d1603aaba9f7b8eed3cacc55ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75QX5WR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICBhJug%2F8VDKkT0Iaxu3vIhTDJ1rZ%2FDeiJ94f8wBfIYaAiEA7RD%2Fkz62ux79tOYpFEwai%2Bw61gnnw7NDWtkMSoO1gBcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN434rnxZeN3jpmRqyrcA0Ktrj0GwcGlhwosw%2F8WIKSazywc0SEZoSzACEZEMvgJi1L2ygdzkHQiWPI9UrreSKtRf%2BHJAcSXgOXtMxSfx%2BN6nMVQ5FFg3lH5kj%2ByazUL%2BLlwEBmdhqSYIFzG6ILLchmFuXKoXti%2FL8lw6qznCcG%2FZhClnNWhoCVPnFIkoiFjB5Sz0pQNrlscIf402iwbG083SoMBM0XzLPMj3PgB5ZVfM0S%2FKarPMXmGx3PmnobX9uNfAfNm%2F3ooseOlzzgTn%2BDGIL1tYMCUJiGY%2BrrxLOGZCJ5wcibjkxT2BLTDVfYc%2BoTP9uJxI5f2CeTq%2BQhJBIKLoa3gA3VdRs72%2BqWtJrdTh5yhoqiyB3OV294j6mJFAh9%2Fby5i%2FcKDGkC%2FBSEjBfrYiRtZNzTzjfZrq75L0fV3GkPxCpdarsQ%2Bx0h9LelHcEUvQd9QjF9IkdNBjXt%2BGujTLKOFWKBRQwhrN8E7bCNGyL1Y%2FXoEe3DdTDl7SNEGVcAqehCf1W3YJlWZcl6gZBZLQll0tRlh2xOJuRvQG0dr9nRP2mA1mCoyUEQwHtyJD%2FOJDbOD45ZPvJvM7CU7LL3eqyCGZ73JuKIukwMhswfKHMcwRWeVM9waf2AwBcDfK9f3R6Et%2BS60pTkbMJewhb4GOqUB41gWG8Id7q3U97A6EK7qR1BLPzYG18fI5os%2FgccqD6lbOJI2pigR9sZe1KTWkPZbLh4zTJrUA3rgEQoKpCHGWRc21JiQQdv8G0LYKyGt2%2BLvfaW3TZPYjsa69Ucuixu6NmUFqaRz1kgP6gNRCBcEpRktM24QlXE4nGevrv0NBKN9qWZOjsr%2FjezTnEcm0YkiAl2zktILUTbDITtjlVkMrXsktQjJ&X-Amz-Signature=ee32fd1c8203a1f268770e08067ae2c69e72b02cfb95e7da4a18fd49e1e66684&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBR7HIDR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCICYOdst2qjRVx%2BtJNw%2FMXNe%2F7vr9ybRGT3VwGlKuz9L1AiBDEtGRG7xn69p%2BnV%2Fdu3Ol4yYJMteWYHd0oawVuzAe1iqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxbBm0%2BQCKy3KAUVWKtwDf2X8iRCmPf7CWBPl62TjHrSOulQ5Rc5EfQiOzupvXZNtRXs9KDC%2FScGXnxT5xghuIptEgp%2BkirQnAUO%2FTsYKwgNKRgQqazO%2F9pL1YGnWUPFB3n0vB%2FsIYXdCNtWFOiYrlW%2F1rEYOH%2FBSlQ1eI1XC1kSv5lWBlyYPUfZ5NFUD92EoK0z559zAu3cZtLzMMFP9QY0I%2BewtoF1W0UKbo1koqtF7uHZeVcY0otcpr7oGBiPQ%2FOPtlft166qo21yusUg2qlqpn70OEcxObROjeOhEIzuAcFU%2BJ4sVOLi5zWT9QiiY9D9FWPd%2Fu8zMeuwvdYKgjmD3BDAUe2PUvleRgtyJ4CfWgnSXV5QZSQ7oadAcbxNGVvKnhZ%2BAb7DjIHB4ewhH4AN8XoIshQ4G4iijsUNlHToPi05H%2BxbnqCCaEgL3AQz3mQMnMwMCEvi3OFP1t%2B60HxrY9G1gDOQvM5FgeWaCMoK9LJaNpXmsasONongBarWKSBYlEEUhypwtKVj4KYhqgmLsm85pEVAz7fqBS9dewBgKk4hDPSuE7j2Uy%2BUJjDQtwU%2FcvYlxd2xxMhqqTV0VsTPPlfs%2FE3WkqIgVsEH7E5eCKKI5f8JTXMmbp8gOK8wxI7KbIkPwtUbkMugwq7CFvgY6pgHOhyubTUzNN24i2prZhI86zlLAjQ6%2FeB5l90RBM8z8WAqBKRwucnDnfnKbU4mr5qI%2BZRnOBSC%2Bk6ADnhOILIL2WxXRan33Nar8FkVHmNuEoNY4mMiSJLQ%2Ff8EZQYFKLNez%2Bl9W9pRiriYtkEHSn95eV97NyIIj3lMM8T6h8ZF38QEIdmoy0TvQde8SYIT4EMREGbHU8FvkYsY%2B90OjXMlyElM0Y0iS&X-Amz-Signature=992828cff852ef6cd2be5185b6741ce4c2575b1cb799a6766a53567cebf5a640&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIVEGV7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIA%2FjYXuPAHJwFEeScdo7LwQWxdhyyZvJGe6byK2zLGGmAiBzYPM%2ByWn7Ie445ZEf29jbp0Z8ETv8mLXEz1cxGbitCyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWiPgyJsBl6sp02w5KtwDGx6vhWr0J1z62L2KMLb9JofHegr2XzSOpQDMY1x%2F44JHu8kXBuZjAugEh74VNc2VL%2Fsm30N%2FqGkbd0NvLgCW4wqcf6IlE130voK7gK2I0xk1%2BP5O0Ey8X%2F8GjRSQvin8iPSKrZbNd%2BXv0Bs4t6eYSyPgcT4Zz5OfY%2BkrwYYxxXLCQdFbAeVhcOUWlu9F%2Frk1vOjTquIyuwrJF8hqIQgTNze5Exfco91KTummtRPdc1PGHYafPXypvM%2BHOduOWGAcoB%2FZmjnOKMqCpus0PyXuZ555mLn1V2ODI%2BXvP4JJ%2BknFXkszNyF%2BbQ7bSGKXueMJAknDMnztTXv6m3THtcniwUCLCOxxsO%2BhtCFksme3x19V3QvOxop8Dlz1NFc%2Bg81nqEoK%2FB%2BPzaEkYde7eWSGfVLPhlZo80aWByV1ASvaDIU9GNkg7iS4KeuIxOfr4kLjnWNmcz%2Bpw%2BS931eQd4qRrc1EJoLoxPOhvjjaHp79NoUbH0mzwoCefwi6fivIngZDE70zCcjf2BJfEvr7h04wRmOwL7%2BsYlJ1X1f7Y6pOlynT05Id%2FEe%2FgxZoOn4tJny7gA21%2FAElvSYR68BDjvHJDvEQoQmVbGhH868eqGrGj7aZlcFiC2BpGUvyNJEwnrCFvgY6pgGym8T9wx5QH5DljjgS7Hh3neowjv31Uyhb0cu1rkkRaRiKRjGyQly2VFg56JWXKB3i7Ftlwp%2BAXQ8gLdo42B78%2BpzC%2FAIXHHuLa7RYGD5NmL%2FNUlJcuSCWRjmvc6ITA4dy4gl4WImvX1mm0RjGznI%2B8i96u%2FPJyLWzsvovGgrDbaUYqMLDO0a3L8FRiL1OK4Cz3eRjMdXyqobCYoeBBrH2UD2Ex%2Bpt&X-Amz-Signature=b38717a231a7a393d8be35afdc9c2772376931b29d97e6317621060ec0472a61&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X75QX5WR%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICBhJug%2F8VDKkT0Iaxu3vIhTDJ1rZ%2FDeiJ94f8wBfIYaAiEA7RD%2Fkz62ux79tOYpFEwai%2Bw61gnnw7NDWtkMSoO1gBcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN434rnxZeN3jpmRqyrcA0Ktrj0GwcGlhwosw%2F8WIKSazywc0SEZoSzACEZEMvgJi1L2ygdzkHQiWPI9UrreSKtRf%2BHJAcSXgOXtMxSfx%2BN6nMVQ5FFg3lH5kj%2ByazUL%2BLlwEBmdhqSYIFzG6ILLchmFuXKoXti%2FL8lw6qznCcG%2FZhClnNWhoCVPnFIkoiFjB5Sz0pQNrlscIf402iwbG083SoMBM0XzLPMj3PgB5ZVfM0S%2FKarPMXmGx3PmnobX9uNfAfNm%2F3ooseOlzzgTn%2BDGIL1tYMCUJiGY%2BrrxLOGZCJ5wcibjkxT2BLTDVfYc%2BoTP9uJxI5f2CeTq%2BQhJBIKLoa3gA3VdRs72%2BqWtJrdTh5yhoqiyB3OV294j6mJFAh9%2Fby5i%2FcKDGkC%2FBSEjBfrYiRtZNzTzjfZrq75L0fV3GkPxCpdarsQ%2Bx0h9LelHcEUvQd9QjF9IkdNBjXt%2BGujTLKOFWKBRQwhrN8E7bCNGyL1Y%2FXoEe3DdTDl7SNEGVcAqehCf1W3YJlWZcl6gZBZLQll0tRlh2xOJuRvQG0dr9nRP2mA1mCoyUEQwHtyJD%2FOJDbOD45ZPvJvM7CU7LL3eqyCGZ73JuKIukwMhswfKHMcwRWeVM9waf2AwBcDfK9f3R6Et%2BS60pTkbMJewhb4GOqUB41gWG8Id7q3U97A6EK7qR1BLPzYG18fI5os%2FgccqD6lbOJI2pigR9sZe1KTWkPZbLh4zTJrUA3rgEQoKpCHGWRc21JiQQdv8G0LYKyGt2%2BLvfaW3TZPYjsa69Ucuixu6NmUFqaRz1kgP6gNRCBcEpRktM24QlXE4nGevrv0NBKN9qWZOjsr%2FjezTnEcm0YkiAl2zktILUTbDITtjlVkMrXsktQjJ&X-Amz-Signature=3bd7365dd32e1c3e7c8f3883a12c53ca2567201852e9b80ba66583f216a5d918&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
