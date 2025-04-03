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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IU4TKDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRAQUrJgwHsIguUYT0TPZy%2FvUXgnROT5qBiTX8YUNpwAiEAyKg1noMLivbhTDbihdJFahepglIcJKlPy1yJ2ASZph0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE3fMI%2B%2BiamApN2myrcA79dlLSJY53F2Yc4fIN9JgVoIABKcx2bqB%2F3XGzIWe0qoZevSkZzeuk6Q6w76TX80QMuQul8BqxG09lndbtEwCGtt6UrKfGmkZ6yGXgNOwdUBr7U%2FgXQxguDAAcLjf%2BviCQwfuwnZS8VSY2K1XSJ%2B7M3LSAeAiyziO2e%2FTRL1rpykTUZ6DmHP0QlKvGdhh8hDWSMzAD8bwrLA4IeYmATMLnZeUfYe2Zcffg7zPFnTCkB%2FGa8cgykLXsRb%2B6mZPuzmdo%2F3xzkKMteFsqtpKINnMVglhJfs1SOWDwfU8IsHY4ymSX3eepC9NDK3nmsZ%2FRrEpEKt2%2FJXwYDer4fa2kvCQ71KNM8qs3t69xaxktjcnG8uWIwz5a%2Bd%2BTfKQIXVmZ8QJkRqfc9%2FAZWMGb4JIcdkTpmQ5o0X%2BVjP5lux99lMgiBtSVHURGYTWeRCyyVTDnmjUxgGMpUgd1zwWkvi9CZMcCsxBA90%2BgT2OHtbzztKnawtgZPZueYMGhaQQJCDqhveTwgsSq46aa3CsPluj9KaIyXs0eFHOnSKgi%2FGk%2B0%2BeEnJuDqww57gDvJHHGmReNy0FEb0SvlrPN8%2B7Q73jXZgj%2F9NS7rZ9Zj3jXteQsTfVhYyXu1jxKGnBnS7ge0MIuYur8GOqUBS71yE6nEIU0U8NCTEquWDbGKxe7%2FftZdIlIWuoZQLAry7SwX%2BUzbfsNpJw5%2FVZbvhDaz95xWHGtTcZJqXA89Z%2BMB0yZ6RJXWZ9cf1P0Pu5kKht5i0Ku00QwZGmR1mJ0Wvjg6QU%2FzdJH9ZvAm%2FsxpE%2F8bAGGPYl47Z8QUY9VACS3xuW9w779PVm3jP6CadG9zZtLTKeXVmC3M2xK9BD3ACcTFc9P3&X-Amz-Signature=cf4f89bc81c94f7cdf43b841f9887a8ffd75a921912f3fd4b381347ccbc8edc8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IU4TKDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRAQUrJgwHsIguUYT0TPZy%2FvUXgnROT5qBiTX8YUNpwAiEAyKg1noMLivbhTDbihdJFahepglIcJKlPy1yJ2ASZph0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE3fMI%2B%2BiamApN2myrcA79dlLSJY53F2Yc4fIN9JgVoIABKcx2bqB%2F3XGzIWe0qoZevSkZzeuk6Q6w76TX80QMuQul8BqxG09lndbtEwCGtt6UrKfGmkZ6yGXgNOwdUBr7U%2FgXQxguDAAcLjf%2BviCQwfuwnZS8VSY2K1XSJ%2B7M3LSAeAiyziO2e%2FTRL1rpykTUZ6DmHP0QlKvGdhh8hDWSMzAD8bwrLA4IeYmATMLnZeUfYe2Zcffg7zPFnTCkB%2FGa8cgykLXsRb%2B6mZPuzmdo%2F3xzkKMteFsqtpKINnMVglhJfs1SOWDwfU8IsHY4ymSX3eepC9NDK3nmsZ%2FRrEpEKt2%2FJXwYDer4fa2kvCQ71KNM8qs3t69xaxktjcnG8uWIwz5a%2Bd%2BTfKQIXVmZ8QJkRqfc9%2FAZWMGb4JIcdkTpmQ5o0X%2BVjP5lux99lMgiBtSVHURGYTWeRCyyVTDnmjUxgGMpUgd1zwWkvi9CZMcCsxBA90%2BgT2OHtbzztKnawtgZPZueYMGhaQQJCDqhveTwgsSq46aa3CsPluj9KaIyXs0eFHOnSKgi%2FGk%2B0%2BeEnJuDqww57gDvJHHGmReNy0FEb0SvlrPN8%2B7Q73jXZgj%2F9NS7rZ9Zj3jXteQsTfVhYyXu1jxKGnBnS7ge0MIuYur8GOqUBS71yE6nEIU0U8NCTEquWDbGKxe7%2FftZdIlIWuoZQLAry7SwX%2BUzbfsNpJw5%2FVZbvhDaz95xWHGtTcZJqXA89Z%2BMB0yZ6RJXWZ9cf1P0Pu5kKht5i0Ku00QwZGmR1mJ0Wvjg6QU%2FzdJH9ZvAm%2FsxpE%2F8bAGGPYl47Z8QUY9VACS3xuW9w779PVm3jP6CadG9zZtLTKeXVmC3M2xK9BD3ACcTFc9P3&X-Amz-Signature=907140083051ff32144920613d2476ffc58016bafaa326ac1a8391bd47bded8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JUHRBN6%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEDJXDhOxsjWlO4tUBBB%2FkjTHwMgjRbk%2Fnny1rXesVPoAiBYUvxY3rarPCFKdVn72RCwlBp2kof29CI3bCvhCRq5UCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy%2FqBSe1jAI0SXOQpKtwDDYGhVLaH20R6r6%2F31O7h6eJA8lb5KTsfpQjy2T5h4dKPYp1%2F4ssLoY%2BNEBcnclsLw15qKQLbSQFpvANsvvF%2BryppwnSU8VGj%2FrDQ3e0FYYuNPIAeccel7H3K1rwxau%2Fr3rgF0Rxx9iP56hpvSrP9HtSZiH2jRVen37eVUsO%2FNIGfTOCovHRI1B%2B2JZye5BLWkyQOhzOV3oFUmmnOVR8%2BZIc%2B9tkpqzjwGMs8t9oRuSZXYp%2FycZW9%2F4bC4s33ku%2FcO7ibIsmZU6lQKO5wdTNWHis4b36IpTvPb0bpZ3sw8kBi1jCkClauyWaqMeYLcewNHaVgFb%2B6snyvSZWDHu9rq8f8RVs0nw6TZAsHzf4clfm15HOKxQKNCqfYa4VOq%2FF7wTp%2FjpXeGa2PfN9BdA0aA%2F7WUMREC8GfliCIP1vHSytpMtBOWTPZT0xp5fGY6%2FVpVJ7pMJm5%2FhU8NGSnEX4Q3D4uM5cliwO5Aht8bTLQau%2BABG9gBoCgT%2FKGZxkoJTa2PLu9VuVvtuf%2Fu684gc5ZE7zbYp5JR5dzNLt7GnahgYK%2BaaiCriB4pFE75holrkZGbf%2B24UDS3cWEXVdYYiNzthQq06iS3jfiWD6EOTR066cezcVnUYLN9aSdWIowt5i6vwY6pgH5A3Vp7egO%2FX37D5w3xYaLuaXh0ImHsvrL5QlZnXFzj48VyBxLsRp7eg42QW2BWkgWE%2FiyYSsuJO148PgXkBJILUPfQQLRHy3LyXjzL6z4a%2BRARhTlaHRKmgGRyIwJSHc9R6jvx9TYEgXTYVuB%2F3l0i%2FYhJ5sQ5%2BL5PUZB9tB1MFKZhGzkM%2FJ7yhX7EiTZvqvuoxzjkKe5cc5D6RzVcsIuIT1prbKM&X-Amz-Signature=ee7a9a8c312f1d28d357be23ee36e19b60bb5b1e8f5b7462d6f088159ff5bf9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUIHFGAJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYufqT1lmelikV81xVdDUaprp0ck2A5s4fZDJHvQSqmAiEAv3%2FuOyZtTFXdEXee0fxM%2Fw4ARsG3Gqi%2BAi0i0BNZ49oqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEWobXYc0uYscFVgSrcA2W2AIKsnliiJAD7HqHvZkE6SY2Y5VqO5KfBcThtXiop5PBwzP4Fau%2BAB4BsbtK8%2FeTRXEUvYU1OnKCsVGLGewTDCJ1J85dSJTLjE2ZL0rNZldrW%2BGtk7%2BseX3S3AXLDjG%2B0uE%2FKwnBszzY%2FmXoSWLFt1rmz7vB6LOSHzDKneWs7VtvHOa9GmJ9ERyTnnXHGk%2F2XO4nRmK7lYyXY9DFTrPh7kRPUyRcB00mLfZGG7HQuZNMgJQdYk6YnVOxGX9p3p%2Be0F6OJT1xhsCB1PExsHn%2Fze3MaMB2aV4PeHfAKLELcabYyPhaNi%2FIaelapI%2FmWGTSV9loR5tVMPPQte%2B5OhQwvCh%2BIBRi%2FHnHI2OHerTTz8HnwLmWcqS9cjtK0r0T0%2BPl8CxS1fotWbVACpKLgU8%2FrsgvYwrIVH2PcDLeo1v1LJozpLDiKirWHewo4FOA%2BvkztxzO8dEup6mqtb7pxKR5EZeKV8m2BIotfZQ92oO2o1bWnWiIPT7h%2BN2r5XYksOdNdubuZ%2F6xuViLd3FWrxIdJTlup2UQVilFhlVnLRvKrZ6RFwsRhIwvEkZoda28FIf9GNZ2fewHxGhnKyBWEYVSwzmBgCTRxbHK7UBOTkUrepZaL6nqP9EG%2BkQ9rMMGXur8GOqUBZ6AU0V9Fc40JetIAmHvFbmk8f9aroW0nKzGrOPSRivuvRBpmmFdD7EI15Mt4fpIY08oVh7QA3408Lkw5GecX9V33JrMzybOC11DF10GJwYt1jFmQtRGT9my%2BhgNUUNlcizniCY5GPCrL1BJMmPYYjC7HnVkcQYf0iMWZEEfA4foRj2WT93utO0V6FczjCcuFVdFGLsUYafkbYBP5Vvpq73ROLe1o&X-Amz-Signature=76287abf8df5ea97db49d17a539c3ed5e82b99efd0826a47ea6e1bca0c47e26c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IU4TKDU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRAQUrJgwHsIguUYT0TPZy%2FvUXgnROT5qBiTX8YUNpwAiEAyKg1noMLivbhTDbihdJFahepglIcJKlPy1yJ2ASZph0qiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJE3fMI%2B%2BiamApN2myrcA79dlLSJY53F2Yc4fIN9JgVoIABKcx2bqB%2F3XGzIWe0qoZevSkZzeuk6Q6w76TX80QMuQul8BqxG09lndbtEwCGtt6UrKfGmkZ6yGXgNOwdUBr7U%2FgXQxguDAAcLjf%2BviCQwfuwnZS8VSY2K1XSJ%2B7M3LSAeAiyziO2e%2FTRL1rpykTUZ6DmHP0QlKvGdhh8hDWSMzAD8bwrLA4IeYmATMLnZeUfYe2Zcffg7zPFnTCkB%2FGa8cgykLXsRb%2B6mZPuzmdo%2F3xzkKMteFsqtpKINnMVglhJfs1SOWDwfU8IsHY4ymSX3eepC9NDK3nmsZ%2FRrEpEKt2%2FJXwYDer4fa2kvCQ71KNM8qs3t69xaxktjcnG8uWIwz5a%2Bd%2BTfKQIXVmZ8QJkRqfc9%2FAZWMGb4JIcdkTpmQ5o0X%2BVjP5lux99lMgiBtSVHURGYTWeRCyyVTDnmjUxgGMpUgd1zwWkvi9CZMcCsxBA90%2BgT2OHtbzztKnawtgZPZueYMGhaQQJCDqhveTwgsSq46aa3CsPluj9KaIyXs0eFHOnSKgi%2FGk%2B0%2BeEnJuDqww57gDvJHHGmReNy0FEb0SvlrPN8%2B7Q73jXZgj%2F9NS7rZ9Zj3jXteQsTfVhYyXu1jxKGnBnS7ge0MIuYur8GOqUBS71yE6nEIU0U8NCTEquWDbGKxe7%2FftZdIlIWuoZQLAry7SwX%2BUzbfsNpJw5%2FVZbvhDaz95xWHGtTcZJqXA89Z%2BMB0yZ6RJXWZ9cf1P0Pu5kKht5i0Ku00QwZGmR1mJ0Wvjg6QU%2FzdJH9ZvAm%2FsxpE%2F8bAGGPYl47Z8QUY9VACS3xuW9w779PVm3jP6CadG9zZtLTKeXVmC3M2xK9BD3ACcTFc9P3&X-Amz-Signature=410f6e721285cf69ae0b792c5794b1f1cab3ac69f81207af35b4ba0c3cf392ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
