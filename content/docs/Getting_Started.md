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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKHAXGP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf0fnkQcqFPFNPov7%2Bv37FsuhOvpQsykTaKTFi7Bw%2BaQIgGr7%2Br1Dad%2FibJkLeMPCt5JamwoxB4I1k3fgtthLJLHsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGEUgXhsaReaoqYr2CrcAzsH%2F7TrWPsa1jBLlEvRJWDard8UfG1f85YX0SmjNRQzxbSYad3u4WESkz%2F0hWUkmxHsY1v0oaHIc%2BRbeodemOuMW9MJ8xysbY9AWfiUQvstqY03RsjyzUMVmwXeIGOq4NV3ORJ7a9bMG6dCPP7mYIycJR1UXJTis3RV4v%2BPVMfAswZJTbv%2FnRWDRMdWpBZfq2kaqxSRyvNofGMF1RfdCOvJqxPoLaPuyXJPecS68prTeLlbM9opXBq57EKHsYgxSOab6DlMhEvdJgHnAe1a7YYnRkRaIOCzlF6RZHCVZAZ94nFCePz5ZXkCByZ3irYxLerFASswhxmXtCGPqQamLUhSHZoQXP6XnXiCRuAEY%2BILvDS2AUEDBLCzE%2FfDha8a3VbxbawxG0ItvRGSREPKlsnnMZzDZrkw8SgxK7rXL%2BBfam6FkiCWtkGqhBZUDHp1dIpcq57vYou0fpmksysPHt1duytZDqhLZOUS0BO9L4uyYGYJiEf%2BAIfH7%2BSNH5uc6kb4x2ZfkVSXoeEoD3QDAFQwi80Rxy2adk8XtPm7d%2BtNWVNP%2FHxN4t52pcDVgr1MOSwQHeaxLA8Hj%2FhoCyrcCkLsr0cxQ%2BHmIT6O2CQUwbDMHdWOeD0SxX2M4XBUMM7AyL8GOqUBc%2B1zoPfSruhRXWhX3RmUEC7%2FKl2lsibOKoBTwm7x%2FM57LqlM95njk%2Bnx%2B0NoquTFJMe4J7DUufwiJNDKWsIRIFb0CSZnxvLoM57EMffqKs9CdgpVuGkXTiK2e9vchG5ImoHWU5%2FmPZj9B7mYNa55NmFtC%2FU793d2MD8J1hzkhBfy2TIHIanXmHde7x2%2FSz2YwJAa6PccPUS39Wh3OpY%2BeqgASezu&X-Amz-Signature=ab0cde6b9c0da7ce62de75b5e111dcbcdb6ed88947cd638bfdab53c52384ada3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKHAXGP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf0fnkQcqFPFNPov7%2Bv37FsuhOvpQsykTaKTFi7Bw%2BaQIgGr7%2Br1Dad%2FibJkLeMPCt5JamwoxB4I1k3fgtthLJLHsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGEUgXhsaReaoqYr2CrcAzsH%2F7TrWPsa1jBLlEvRJWDard8UfG1f85YX0SmjNRQzxbSYad3u4WESkz%2F0hWUkmxHsY1v0oaHIc%2BRbeodemOuMW9MJ8xysbY9AWfiUQvstqY03RsjyzUMVmwXeIGOq4NV3ORJ7a9bMG6dCPP7mYIycJR1UXJTis3RV4v%2BPVMfAswZJTbv%2FnRWDRMdWpBZfq2kaqxSRyvNofGMF1RfdCOvJqxPoLaPuyXJPecS68prTeLlbM9opXBq57EKHsYgxSOab6DlMhEvdJgHnAe1a7YYnRkRaIOCzlF6RZHCVZAZ94nFCePz5ZXkCByZ3irYxLerFASswhxmXtCGPqQamLUhSHZoQXP6XnXiCRuAEY%2BILvDS2AUEDBLCzE%2FfDha8a3VbxbawxG0ItvRGSREPKlsnnMZzDZrkw8SgxK7rXL%2BBfam6FkiCWtkGqhBZUDHp1dIpcq57vYou0fpmksysPHt1duytZDqhLZOUS0BO9L4uyYGYJiEf%2BAIfH7%2BSNH5uc6kb4x2ZfkVSXoeEoD3QDAFQwi80Rxy2adk8XtPm7d%2BtNWVNP%2FHxN4t52pcDVgr1MOSwQHeaxLA8Hj%2FhoCyrcCkLsr0cxQ%2BHmIT6O2CQUwbDMHdWOeD0SxX2M4XBUMM7AyL8GOqUBc%2B1zoPfSruhRXWhX3RmUEC7%2FKl2lsibOKoBTwm7x%2FM57LqlM95njk%2Bnx%2B0NoquTFJMe4J7DUufwiJNDKWsIRIFb0CSZnxvLoM57EMffqKs9CdgpVuGkXTiK2e9vchG5ImoHWU5%2FmPZj9B7mYNa55NmFtC%2FU793d2MD8J1hzkhBfy2TIHIanXmHde7x2%2FSz2YwJAa6PccPUS39Wh3OpY%2BeqgASezu&X-Amz-Signature=cd6cc1cedf0a804beb51df542746c7f795d9d6757deab178aba1f9b69ac2a234&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOTAGOI5%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAt1HQzbu%2BjXXeR5v9Mv3z7YmyTHjVx5QrE8HuOqFAekAiAhob2hXGlv%2Bmd%2BzdN2Mdok9mT7DQiyfhPLdH43lXg1wSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMgO941%2B84S9MMBc81KtwDTswc0Loi%2FL4sVeJtOwb5FLnXivSB%2FgB7agCsZCOqtVuPU5GHebmQ4kazwg%2F33RtwE0ONKx5HH4k1N3n4Gx9AK%2Brsp84YQxMqDZ7EgUmwGRqp0Jwq0foJ9P78Tz%2FeCbylQHO%2F3UyVgvgnkC3QzCKv7wDtY%2BObOArh3iBgGzdTOO4lEEak9ITGhr%2B6SZ1zuzvB%2BkWP%2BP3HqEFeYxj9mDlA2EJICmBtDEy%2F3kBiN5HVySYYG4OQ6OnHpkdLRbvFNu4vEXASGI2UkEoxaWigeMYJ4W5p9HQauapC%2Ba9qB7mKglX12qaZn%2B151FNNGyzueDqFsu0D4qHpvPrI0RskoQtS69lGbeBtbz%2B9Nal9l%2F%2B1kGcKySxE031dp%2Bx%2BSjwpzplU7L356WFWn912urf7du92Oqf4Zz%2FtTImQPuI3HbK8uYfVTIBjXm0m6B5i6gnpLeSV5hMz4iQ3qsu6VCYc%2B%2FZZpRcy8aKkPwvMLg%2BCWIE4p7SX4yhHYEyJj6pTbKglgPihTJb%2FaJt0iL%2FV4uKzClpzzlu1yvKOyIyVpclPK8Zn8T7POcgcUIkj%2B7ga3T16bDdtQB6t0BKvvRf0H1Qz294QU1yGN7z%2FAauQPIdgx0%2FizWaxn1FfReDdPaef%2BIIwv8DIvwY6pgENhnHLagIeN9fTBhrIucFMB2SXhqLg2zi9ntjFiZBmusrL3CSBeXhVcxWzJXYcm9Jn2CyE6MT%2FFbpAjIJQrpnwPgzh4TT5sEELePR0GDBHbCjOMa0ok8gzVwSCqKDf8uT92eX7htkqaTjt7pkpdVlFpbcMsrIEOyxjllSLO55O1s7U2k1TT1j9EdTAsb2VRL%2F%2Bkfd4GzwA%2FhzrDqFZDEMJ1vP0cuDW&X-Amz-Signature=cbbfa02dc767cafe23b1c5fdb90eac9024b0bdfa822468c4295430c1115e2463&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HBC6NAJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7TB25vEkrpbNH3nBo0mbU7yZjqBuXnM4sJiJj11s6uwIhALQOBoUwq9%2Bwov2dhqDv9ZzmMundTW8sqSQ%2Fozr3sV%2F3Kv8DCEAQABoMNjM3NDIzMTgzODA1Igw1Pa9C5PebDCW4Drkq3APrt3p2nGFmkrWfAppdJYDylz5jEdjI726a1Mzn6AFW22kM9XCzbaVXzqMRkEK2vlom5bkPlYmMWwa5R4y0hRVA5HNTM0KNlVoAEkDkv3uZucxu8tmzMIRuhnV3y%2FjiW7xRKZg130BhTO2%2BeV2nI6QCgM47hmv7jK6XSPgUv7cSyU2vj0hKjpIN7KhtOAv66BrASK%2BKxSRQ%2FfUt6SkoWELyhj3xgkWQZPDSHlzIlHu147xSysTLYILnoYLH0XKWSuv9rMQQxNpm6eTnDqCch4QmnIEIVwheLlQROQlKN524KMXtAgkH6fHEsrviHeZSU4b6oxI%2BrtoWxO%2FIDCgbQCn5jZGg4e2yIiYxna%2BlZ7oyweG327IXaXn96Jg3xZUQkaNragAb6pi7%2BDsx6Ssi9GPuHVHqb8DZth6UZEwgyeK%2BK%2Bg9liYiyYsGZeqBNUax1bhjFYxU%2B6uuJ6maz%2BOf%2BFIWR4G%2FiQco2VNnasRAfHvoFlf%2F%2BUUwkHKbsbYwhM3vioDkTikpTTWD7iJ3bS0Tb6ebBFyHx63OOt8X%2BefmMEywUfo2%2F0HOhprVJGdaLZGm6HZ%2BIUdWWfzgaYPJKX%2BLwRyr%2FmoXKV5WDl7qJF1pbjgCCmZQ4Wm83c4dMN8qPzC4wMi%2FBjqkAbOBqTceGddu4%2FT8QCO3YB8b7nolXxGP%2BtMj5%2F%2FN0HA51NO%2F%2Fy9e5vJUMO0%2BnNXHu%2F6K4y0XhPfvB9zx%2B9THaN9SznFNK6xiKoJY24RIXIQ6GPvY9tX8IQz9ncb8HBI7%2B84VJE97xsVoHaUDA3wK9Ac%2BexWNaIi4DzYcxPOBBYl%2F%2B%2F%2FBSkaOF9Po8%2BtPvwyNOYi1sDTT3C4ZYrPrkUpL18Tu1wRO&X-Amz-Signature=3f15c8c73d8ddae860f5364400b7b3f3b70514ac9ecb0590aeaa4a1d16085268&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKHAXGP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf0fnkQcqFPFNPov7%2Bv37FsuhOvpQsykTaKTFi7Bw%2BaQIgGr7%2Br1Dad%2FibJkLeMPCt5JamwoxB4I1k3fgtthLJLHsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDGEUgXhsaReaoqYr2CrcAzsH%2F7TrWPsa1jBLlEvRJWDard8UfG1f85YX0SmjNRQzxbSYad3u4WESkz%2F0hWUkmxHsY1v0oaHIc%2BRbeodemOuMW9MJ8xysbY9AWfiUQvstqY03RsjyzUMVmwXeIGOq4NV3ORJ7a9bMG6dCPP7mYIycJR1UXJTis3RV4v%2BPVMfAswZJTbv%2FnRWDRMdWpBZfq2kaqxSRyvNofGMF1RfdCOvJqxPoLaPuyXJPecS68prTeLlbM9opXBq57EKHsYgxSOab6DlMhEvdJgHnAe1a7YYnRkRaIOCzlF6RZHCVZAZ94nFCePz5ZXkCByZ3irYxLerFASswhxmXtCGPqQamLUhSHZoQXP6XnXiCRuAEY%2BILvDS2AUEDBLCzE%2FfDha8a3VbxbawxG0ItvRGSREPKlsnnMZzDZrkw8SgxK7rXL%2BBfam6FkiCWtkGqhBZUDHp1dIpcq57vYou0fpmksysPHt1duytZDqhLZOUS0BO9L4uyYGYJiEf%2BAIfH7%2BSNH5uc6kb4x2ZfkVSXoeEoD3QDAFQwi80Rxy2adk8XtPm7d%2BtNWVNP%2FHxN4t52pcDVgr1MOSwQHeaxLA8Hj%2FhoCyrcCkLsr0cxQ%2BHmIT6O2CQUwbDMHdWOeD0SxX2M4XBUMM7AyL8GOqUBc%2B1zoPfSruhRXWhX3RmUEC7%2FKl2lsibOKoBTwm7x%2FM57LqlM95njk%2Bnx%2B0NoquTFJMe4J7DUufwiJNDKWsIRIFb0CSZnxvLoM57EMffqKs9CdgpVuGkXTiK2e9vchG5ImoHWU5%2FmPZj9B7mYNa55NmFtC%2FU793d2MD8J1hzkhBfy2TIHIanXmHde7x2%2FSz2YwJAa6PccPUS39Wh3OpY%2BeqgASezu&X-Amz-Signature=518ffc768134cac831a63ffd07070f9310c795fa38f8eaca5da3afb3e5223c55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
