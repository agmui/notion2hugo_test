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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLJVSAR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDEtLldHo4tgCJUTjfjOFOkspzAgqgnnA86HoK%2BSW8w%2BAiBPujbqatNfKJfgn164N%2BdRf%2FPLTDee6RjV0gjk%2B137ZiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QYsx4oCFDK85FNXKtwDk4sGHRdxVTmjQhsqviZPdQJkqTQ4NBA13Yihg%2Bi9Y%2BarRKsk9WYrOGn%2BVaR%2By5eMF0L9ybTWhQpBNve7ps0PfkY8EwDZQ5GqbS0x36NP2axs1OXOK8fkaFNAGuiiUjP7gquEUMj7IOCcZv1IfOg6Tzs%2FtiNHiAaGCQ9GTNdeEdy0N4Hbrj4Sp0fKbBOs4tqWax0qyQh5tPlctZ86Xheosq%2B3UM0X0lvBrgtVjM94y1%2BQgAcXepy5HCjtjAJcqkZZ18HWSnFF5AzS2vsNlvVkwBD3L5OP5op%2Bck5HwUOfGsRrrn744p6i837Mh0ZEWqjYs2V1GzHLhKgbtCZnmJb85v%2BRoiymgdxE55myOy6N0MmsqGjxma4u5ANnX%2BREdEq%2FuYcnYxpuyP9x5izyM4ooZwHrdMc0x4WCFwNQVik3W3Ying6CQuvkiGaBRZJADndWHSaK%2B1E%2FCOOVQDug0ZtNhhg8lnh3yJTaRyF6s4E4HFtTRp%2FQpe36p0s8xFLHbX8M3DbbwGED9opzpZQMmPEiKXL%2Ba0haSw9QtluLMZ0BeC99gfHKKJA%2BlMbtFJiMVZKIggAhLQE4Ne3yQyiETVUDLi2FBBz3LADu29dwovgVZpyO9wjYQgF7juPA6I4wnevbwAY6pgHvpSZUX5IMxPZ6xQjiePN5DyizR8g5MPFX71g%2BO5dw%2FJEO6G5%2Bi0CICHjeZvdJWpUjfzUw%2Fq6HEmgZdCK2n%2FhiUT%2Bpx0Dm7NqClf%2Fxt3X%2FX4Yn19EveAvTQhZpTYiFZEB44EslhEZj%2F93GdK7dvlthb%2BM4rDOIDVyZaO7oH9s9ghmyJTMP0scKZdXsLTW5TuZOdEEa2bso0Rr76SbmDs6hVPZnme%2Fd&X-Amz-Signature=40c07465286428d42eb9457659b2d6dcab2e4908fa0c41360b0792e8bc770b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLJVSAR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDEtLldHo4tgCJUTjfjOFOkspzAgqgnnA86HoK%2BSW8w%2BAiBPujbqatNfKJfgn164N%2BdRf%2FPLTDee6RjV0gjk%2B137ZiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QYsx4oCFDK85FNXKtwDk4sGHRdxVTmjQhsqviZPdQJkqTQ4NBA13Yihg%2Bi9Y%2BarRKsk9WYrOGn%2BVaR%2By5eMF0L9ybTWhQpBNve7ps0PfkY8EwDZQ5GqbS0x36NP2axs1OXOK8fkaFNAGuiiUjP7gquEUMj7IOCcZv1IfOg6Tzs%2FtiNHiAaGCQ9GTNdeEdy0N4Hbrj4Sp0fKbBOs4tqWax0qyQh5tPlctZ86Xheosq%2B3UM0X0lvBrgtVjM94y1%2BQgAcXepy5HCjtjAJcqkZZ18HWSnFF5AzS2vsNlvVkwBD3L5OP5op%2Bck5HwUOfGsRrrn744p6i837Mh0ZEWqjYs2V1GzHLhKgbtCZnmJb85v%2BRoiymgdxE55myOy6N0MmsqGjxma4u5ANnX%2BREdEq%2FuYcnYxpuyP9x5izyM4ooZwHrdMc0x4WCFwNQVik3W3Ying6CQuvkiGaBRZJADndWHSaK%2B1E%2FCOOVQDug0ZtNhhg8lnh3yJTaRyF6s4E4HFtTRp%2FQpe36p0s8xFLHbX8M3DbbwGED9opzpZQMmPEiKXL%2Ba0haSw9QtluLMZ0BeC99gfHKKJA%2BlMbtFJiMVZKIggAhLQE4Ne3yQyiETVUDLi2FBBz3LADu29dwovgVZpyO9wjYQgF7juPA6I4wnevbwAY6pgHvpSZUX5IMxPZ6xQjiePN5DyizR8g5MPFX71g%2BO5dw%2FJEO6G5%2Bi0CICHjeZvdJWpUjfzUw%2Fq6HEmgZdCK2n%2FhiUT%2Bpx0Dm7NqClf%2Fxt3X%2FX4Yn19EveAvTQhZpTYiFZEB44EslhEZj%2F93GdK7dvlthb%2BM4rDOIDVyZaO7oH9s9ghmyJTMP0scKZdXsLTW5TuZOdEEa2bso0Rr76SbmDs6hVPZnme%2Fd&X-Amz-Signature=6b9f36e0c86726ebe20b9cc91af27bef6c5fec6a1317bf4a32a5a63db93581a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLJVSAR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDEtLldHo4tgCJUTjfjOFOkspzAgqgnnA86HoK%2BSW8w%2BAiBPujbqatNfKJfgn164N%2BdRf%2FPLTDee6RjV0gjk%2B137ZiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QYsx4oCFDK85FNXKtwDk4sGHRdxVTmjQhsqviZPdQJkqTQ4NBA13Yihg%2Bi9Y%2BarRKsk9WYrOGn%2BVaR%2By5eMF0L9ybTWhQpBNve7ps0PfkY8EwDZQ5GqbS0x36NP2axs1OXOK8fkaFNAGuiiUjP7gquEUMj7IOCcZv1IfOg6Tzs%2FtiNHiAaGCQ9GTNdeEdy0N4Hbrj4Sp0fKbBOs4tqWax0qyQh5tPlctZ86Xheosq%2B3UM0X0lvBrgtVjM94y1%2BQgAcXepy5HCjtjAJcqkZZ18HWSnFF5AzS2vsNlvVkwBD3L5OP5op%2Bck5HwUOfGsRrrn744p6i837Mh0ZEWqjYs2V1GzHLhKgbtCZnmJb85v%2BRoiymgdxE55myOy6N0MmsqGjxma4u5ANnX%2BREdEq%2FuYcnYxpuyP9x5izyM4ooZwHrdMc0x4WCFwNQVik3W3Ying6CQuvkiGaBRZJADndWHSaK%2B1E%2FCOOVQDug0ZtNhhg8lnh3yJTaRyF6s4E4HFtTRp%2FQpe36p0s8xFLHbX8M3DbbwGED9opzpZQMmPEiKXL%2Ba0haSw9QtluLMZ0BeC99gfHKKJA%2BlMbtFJiMVZKIggAhLQE4Ne3yQyiETVUDLi2FBBz3LADu29dwovgVZpyO9wjYQgF7juPA6I4wnevbwAY6pgHvpSZUX5IMxPZ6xQjiePN5DyizR8g5MPFX71g%2BO5dw%2FJEO6G5%2Bi0CICHjeZvdJWpUjfzUw%2Fq6HEmgZdCK2n%2FhiUT%2Bpx0Dm7NqClf%2Fxt3X%2FX4Yn19EveAvTQhZpTYiFZEB44EslhEZj%2F93GdK7dvlthb%2BM4rDOIDVyZaO7oH9s9ghmyJTMP0scKZdXsLTW5TuZOdEEa2bso0Rr76SbmDs6hVPZnme%2Fd&X-Amz-Signature=22a682a2606fe87e004b0fa074c0b7cc1030c15b22598a1f1be32ca3d140fd04&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXGTEAOD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDROfsLGc8LW3lQqCMxAWMKLGBRRZgroiLrzcI%2F3DlpQgIgLho3937gJDRsrRtG8dYauRukUnR1kWHYkbhWTRtiKgQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLIhVGxZJ0eCiamuCrcA3ed%2BXmE%2BEV5vrCp4CiH0bAsH53pi9V6hVwtlLkTIhDow%2Fr6XHsdSjkTtmYFsZzNSaQLesGSs0BDReGkl%2FaLpVQk%2BcnQphy%2B8eUDYauUdDMJBvf3wC36X4tVozp6JZBJfQGOQV2jkXGfxYG%2BF3WZO1PcaWxG9Nj4EjTZyNMwIg0smBwup7ii64LU0WTN%2F7SaVcaHtN4qHfj41suUsWa04qOrpOIsOux5dwwTwqGt6XDH7bsdo3f7RJo5PcsioLzZRrPsXqIs3STzRezXtwG4MWZu3vJAGR723fDcMsNg%2FuZkWMc6Y7TyCnajV6Hv3MXI19FtGXPaMi3KY%2BIGcwMth%2B8a584MouOV4a7kq2%2F3q8wepXLvoNnhef34E4s707PRqesV%2B30yTT2RP3Zbx%2B1CkPvwanBpMxUBnxyiQLzrXbmzX928nQHp6diKjh5xtAtmwvyZZiXObfxZw7si0x6HK2uL1Y99zYrSUIyzQT7mEx43r2dN1dFvxRVaNExV38deIobhQ6yMvPzu0BL4Wls2vE3enUeRoXLbI0P9mMJH4oBIntonRTUoNZJQflKV2d%2BjQzTSkIi%2BxJNDRi%2BeKhVKmBOfUY51oxTSgGecTszadOGirDwt4LaNhL7fBgj0MKfr28AGOqUBWVspxL8R7EAOZ8ETA%2FP43euiv%2Bo2Yiq3eUmvU3c3g%2FEq2cLszMJ9jY7RKdpjrdvTgGghR3CjRRCGgT0G%2Bj%2BGGOKDh%2Bf3l65t6muBY7b%2FpKMB7pCRsqdhp%2B9mKaqWhPP7%2BuxpzzhsQEJE6EI2Y3IdtEir8OTPmFUQ1O4iXkZwvX4RTZ5qyaMw78ifMEekVeYyPd1sp6ruxjBuygNkeHG0Zzy%2FoEsn&X-Amz-Signature=53fb39ed0778a8a2be8d586ff43c3c32f2c13b8ee034d16823e5280f50ee4ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U64HHVX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDal6%2BKoch5bDbSIA3k2BkmldFGQ2Ej1LfwMCZgEd3deQIgKFwHpS18QWxI70OXgWriP7nsw7MYzvvLes2t4mt8Ku8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMXzTgPlWGk2cGu6CrcA%2BrA9NaPFjInpgsygEAI7cjeSzRKBkghD4b%2FFbevnp8yJV0QilTPftYq%2F2Z6HVT9hSvx4wT%2BU%2Bt29UxhQQ5ubXqxlqFt0oM%2BpkTrKB4CDHkWVFfG%2BRzuoVF%2BLV%2Fu%2FDj4o1A7yzP4E9GeCv9%2BbCpOBTrkuK0hZxwHDZxeJLMZliY05uQen2%2BsbBog5adCo10HjbPzwAsrev6xlkPk7QJA%2FpGbtJzcuz5pz15BGLPs8kDky1oi9xW0J8aXd62ZKxIPiBWpWzSRL11uQYxrBOzFj1gFXkOqh%2BU46zH9tfi%2B1qivdPv1FUXgVhZWOlmyzRWFHirhPr5VmLB5kX3sXqwSx427r6RKg5xRp%2BSH%2FveWI8euXvjNV%2BwnTsyWzGr44ghu5GS%2BSrVDfUE1Qm4uiSoSfsRYhoFaS78IhcIGbGDZSUUCIkRYC%2Bn7nUckOkk6WIh7zqR2GjTgHv6MfGmih576ATnWGEsC7cFGWWr5cVJdo6h1JCkfWFgXh7TNVJNTgcP65ffxuaWy%2FnW8Pz98iKkEof3V%2Bh6pSFYXOjVIivR0NSoK2WS%2FVluU9lWlNSn%2FalTXffSkSS9iMTRIdo%2BL2jw92t%2B0h2G8vEtHbxYZBVW3XSe%2FzOvj%2B73UiPHZEvwMMMLr28AGOqUBEykHwb37qkln1B%2FVRuuiMP1xZSLuLlTIJJQUmDAE4uqeVWoOArk%2FFpCBj97IuHujCvA2WCuItmZ209jLsLuvPKsSGM66bvGu0QdoIUPQ9kiTh10Boa2ru%2B%2Fm%2FxTec72EuINDwXkwxIcXzPBTed%2BOXKU0m1VAMiuaZ5jv%2FyphexHFEfMVpXJnWR4WpKsB45sRnnVo%2BfPVqrKsdlBviW2WpKQZThAm&X-Amz-Signature=2828d871a42044badc2c5d51c666e33004c0ac5da4e02022a20598c18df03df8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLJVSAR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDEtLldHo4tgCJUTjfjOFOkspzAgqgnnA86HoK%2BSW8w%2BAiBPujbqatNfKJfgn164N%2BdRf%2FPLTDee6RjV0gjk%2B137ZiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4QYsx4oCFDK85FNXKtwDk4sGHRdxVTmjQhsqviZPdQJkqTQ4NBA13Yihg%2Bi9Y%2BarRKsk9WYrOGn%2BVaR%2By5eMF0L9ybTWhQpBNve7ps0PfkY8EwDZQ5GqbS0x36NP2axs1OXOK8fkaFNAGuiiUjP7gquEUMj7IOCcZv1IfOg6Tzs%2FtiNHiAaGCQ9GTNdeEdy0N4Hbrj4Sp0fKbBOs4tqWax0qyQh5tPlctZ86Xheosq%2B3UM0X0lvBrgtVjM94y1%2BQgAcXepy5HCjtjAJcqkZZ18HWSnFF5AzS2vsNlvVkwBD3L5OP5op%2Bck5HwUOfGsRrrn744p6i837Mh0ZEWqjYs2V1GzHLhKgbtCZnmJb85v%2BRoiymgdxE55myOy6N0MmsqGjxma4u5ANnX%2BREdEq%2FuYcnYxpuyP9x5izyM4ooZwHrdMc0x4WCFwNQVik3W3Ying6CQuvkiGaBRZJADndWHSaK%2B1E%2FCOOVQDug0ZtNhhg8lnh3yJTaRyF6s4E4HFtTRp%2FQpe36p0s8xFLHbX8M3DbbwGED9opzpZQMmPEiKXL%2Ba0haSw9QtluLMZ0BeC99gfHKKJA%2BlMbtFJiMVZKIggAhLQE4Ne3yQyiETVUDLi2FBBz3LADu29dwovgVZpyO9wjYQgF7juPA6I4wnevbwAY6pgHvpSZUX5IMxPZ6xQjiePN5DyizR8g5MPFX71g%2BO5dw%2FJEO6G5%2Bi0CICHjeZvdJWpUjfzUw%2Fq6HEmgZdCK2n%2FhiUT%2Bpx0Dm7NqClf%2Fxt3X%2FX4Yn19EveAvTQhZpTYiFZEB44EslhEZj%2F93GdK7dvlthb%2BM4rDOIDVyZaO7oH9s9ghmyJTMP0scKZdXsLTW5TuZOdEEa2bso0Rr76SbmDs6hVPZnme%2Fd&X-Amz-Signature=9fa217354e456b7000d34421b75fcd440bde2a5f9089425071167498c23245fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
