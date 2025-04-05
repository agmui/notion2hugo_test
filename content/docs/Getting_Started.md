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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKONYYJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHP8rtGzcl%2F8tLQMaXakQQcJfWF%2BazQcEyoq0nCjTLxAiBbJB27TZVi1kK1PQANYQ%2F6N1Lf4iH7iXhA9X9WD253oSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2BcRISHLUK4R6%2B92EKtwD%2BDqwG75L8yrqQdAr0wd4QC5djT%2FYZK9CZWzIiBIblZE4XXEcxYVltNPbq6gOCoQJRppBcFC8LjGWGbdZZPw5adTZ%2BfZZjJm2uIVzouCws98ikxPha1DXS%2F6IWfOSfWopMabgJlLoE63czKxyTXAsQ16k1bmaKEbqnUCNbLwEFB2TCORBAkcXvs%2FlbnL9PKsft1UpO49JN3UqnPkzfpzgctzO6j4plzO7wYV4zWTaHLvnC3%2BlFpS9tImpygAo1bhypbuuxxX1xjGRlOhjD1U5m7p316Kxh9lMb7pI8gNSz2BbU3A0N3cddqnL7Z2j9Xjyl3k5mrTzUTVSctXJQbMTZl6CRhCK1nuAAMb8oDVTaIVQtCXuygzjUCJ1nmY9hvwhz0LSav%2BBLWUsLgLjJD4Vy4lQ19kMqBI%2FaJoTAKfYVaRZz9fTYIAlag2BqLEHXE05bbFzRB2e4Qn5z72uZ5HkBpu7TtpaKFOvKekzNjBOfxVrARZKOEjXTPVr7Nsawp8ZqXP7eV95cyhDdzlBx6zuEN5s1aqyFKVMASXc1Pg%2BPdrDHcykw6XjwcXkZfPLfZKvmyfoozwzFXFD3oWFGyZkJ348RUAbNIc6kueFTERoeJFFJqxqd0Tfet9mzX4wneTDvwY6pgHgk3MQcUNyBull1Cqx%2FxwAM6gcUR5MsPt3NgRzEk97oq3BKbreEwAsPttiBpreYh9j03Rqenw%2FsYrZbi0ItW40Z8AJfKvyaBqvTMwUPDE24yYRWgb03gOzla%2F%2BXXTCwZe2KPrUjhxePIcNL8UF8mhB8A5bubOZ7EvltSy3HnE9G22myCZLwv5k76fUNuOTHw18G5wXF1be1dqQNUPn0%2FMSHBzK0yFR&X-Amz-Signature=244bd7bf935bb719d0873e82711482083b9d398b62c1f6a09f68248651b89ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKONYYJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHP8rtGzcl%2F8tLQMaXakQQcJfWF%2BazQcEyoq0nCjTLxAiBbJB27TZVi1kK1PQANYQ%2F6N1Lf4iH7iXhA9X9WD253oSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2BcRISHLUK4R6%2B92EKtwD%2BDqwG75L8yrqQdAr0wd4QC5djT%2FYZK9CZWzIiBIblZE4XXEcxYVltNPbq6gOCoQJRppBcFC8LjGWGbdZZPw5adTZ%2BfZZjJm2uIVzouCws98ikxPha1DXS%2F6IWfOSfWopMabgJlLoE63czKxyTXAsQ16k1bmaKEbqnUCNbLwEFB2TCORBAkcXvs%2FlbnL9PKsft1UpO49JN3UqnPkzfpzgctzO6j4plzO7wYV4zWTaHLvnC3%2BlFpS9tImpygAo1bhypbuuxxX1xjGRlOhjD1U5m7p316Kxh9lMb7pI8gNSz2BbU3A0N3cddqnL7Z2j9Xjyl3k5mrTzUTVSctXJQbMTZl6CRhCK1nuAAMb8oDVTaIVQtCXuygzjUCJ1nmY9hvwhz0LSav%2BBLWUsLgLjJD4Vy4lQ19kMqBI%2FaJoTAKfYVaRZz9fTYIAlag2BqLEHXE05bbFzRB2e4Qn5z72uZ5HkBpu7TtpaKFOvKekzNjBOfxVrARZKOEjXTPVr7Nsawp8ZqXP7eV95cyhDdzlBx6zuEN5s1aqyFKVMASXc1Pg%2BPdrDHcykw6XjwcXkZfPLfZKvmyfoozwzFXFD3oWFGyZkJ348RUAbNIc6kueFTERoeJFFJqxqd0Tfet9mzX4wneTDvwY6pgHgk3MQcUNyBull1Cqx%2FxwAM6gcUR5MsPt3NgRzEk97oq3BKbreEwAsPttiBpreYh9j03Rqenw%2FsYrZbi0ItW40Z8AJfKvyaBqvTMwUPDE24yYRWgb03gOzla%2F%2BXXTCwZe2KPrUjhxePIcNL8UF8mhB8A5bubOZ7EvltSy3HnE9G22myCZLwv5k76fUNuOTHw18G5wXF1be1dqQNUPn0%2FMSHBzK0yFR&X-Amz-Signature=1aacf2851839d840069f7b245d473911de733ed2348dd7faa06d03c00b1364d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZS57O5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FPdjvjDy25K6YXpkrpa9IzqbN1DLHp7uhY%2FqDJ9CswIgJIv1YbpSEXhS%2FS3bmlubpG%2Fl%2F5XTpJhUVjJE8a6LVJYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDM1I1%2BLWSvcgDlYxCrcA1pnuzWnCDrWTvRwNwobqLQBt7H9t6nN7PNdInJ74SfllMZdxJUEyAwEr8J7YhS2XIrhJViVXYbIPJC6HC26i0TvmL2L2BKvuZz3NSSZBEsOTeu6CRqWARNZTqBMNmPvu449O882NvwxebI1Rww7TfbgX0wzOvOEBCNiQ01IeZ%2BahOLid94teOLn6boFSdx88T6JBPM3aoj5unS52qksauFl3HH5kuvR2m8sE%2BKgNR7B1u2L7Dw0cmssZVZwucXurIAzSP6z15CQawKyudsYMzTMnKX%2Ft6Fct7z0U%2BJ7DY3m0mizYUUz8h%2FIW%2F0N7u5BF4eq5HTe%2FHywy6M%2BXScGDlKJH2tBRWG%2BCNivhl%2Fo6S%2BkNo5ibBTFgzvjBEfezMVSBmIQD7nvSauWe1NlMDJF0Pa1m1Y5DE%2FTe9CkmRZLxr7%2F7qzoOW8KbedLaiP9Ko298n2thOJnxkP1GjYvnD9l%2ByeV1pgd0uXwerfRYZnwdZu5naq6w11G6QxagVT2xd0lYeLj7F8LraHKq1GbwyL5EOP%2B4jCxV9NC6QXc7e14DOtlYDSUXGgpPGsYuWYUGIz9CeWrRi2q7O9FF7uoFpihkmTdHHwjZ5SvzEwjS6YcHcmZyAqoxmjHt0KOpfLrMPbkw78GOqUBi5VvP1RrgIbB82MaCbKgMFA0QOdPm4QSdHdP67JsKoHlDmWYhe9dIsB%2F6d274EbYXyXBYEZ%2Bu9pare9sjWv5PweGp95hBjAK%2BuuqG142qDR6HpVMpySi0Ytgo0yfe%2FKF2ER16ZDjnN9wY4Y3Fr6ldBiJXXNl0RyXIXtC6mso2VrDf9uNQBrgrJc8iS14T15vlg0%2BhdzCrSpUmR06F5TzorNRjnCd&X-Amz-Signature=59003107aea17b51211f8baa65ac26e0020356b39618edcf0b9972ce264db1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDFKR6N5%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEI0uDw%2B5%2BSnJTfePko%2BV9uFCaMC8D%2FPVkGxo2DVi%2F3MAiAoQwIrmSeNqIqyTbg1hpbJ5M9Z77W8YzLBthyN9m40lir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTzBrzbQOTugnG5m7KtwDYsYTyR8z9FkfgdJAcF6nKbvKc1rJMVHoe70pKpTghUNIe%2Buhy1jHSOZEveZbUg67jsMRQw%2F4w98PbBu53CTFohWGVvn6NgK5gVvZy5eyU0EpGkq8cle%2Bx%2Begy0SaedX26RZCSXAltjGkOtp125RKzJG1VghOIi1pf1hxR1ca91z7Anb5kqKDSbPSeNDaSUZen9hha51K5rJxDo3w5CR65Yp0OC%2BcTl%2BWTW1LTSIe4vXfMiiE8moKygNEgi8g76%2FORi56s1g5BrUAMDQO%2BH1uMMuBOMZ57%2FAs%2BvVSEC2O%2BBuzefFFCMrMo3Y%2FpBBTvwM6Y5HWsMc9GWom3lFkDDG57hggL09lkYgoh2fJ1ZzDXYBHGxHLUCvW64pL5brZpJWx2SEjQycd9%2FmVZ%2F%2F%2ByYxBoXGCVQMhwovJbVnKsFG9KRE7Z1AGhon1vOrgxMtyd%2FlqJAcNUxSYUkgEKS7r9c3jQ8ZT1HMBfOuyjWprLuaZ7sQwZCigBjvFIblBp1Asd3%2Fn78zB2U5yRI86v1OIwR1vZ06kNea11wMOmikHsodg2vA%2FsdRNVVStaVm8HAwhI%2FKd6u7Z%2F9T5BxPJEdyM8I1FENtFWYwYOGM9tdPUO0iklXFvIzSFyG%2BE1oeJtrww0eTDvwY6pgF3U5xPX%2BngGlfuKn9HbyN2Kjz2yUKkDccXaPXIid6te18HhsBqW8RtzCLP7jcJGETrASoi9272kpLOUDWGaauvQQcJ6m8X0ELO9NlKpPi3iPXA%2F%2BdAJ4ixFpiBU%2BkSDnmh48TS8aFzuJBtgY3Ek16PNnX%2FKdwfCxcuFx7mUu7P15mq1LUgFfaqf5DyJRdssi6Ztxs1SiGGUEiiuZ8ilT11wIDmP8Lq&X-Amz-Signature=5eb87ccdb88b12e8c0cb3f49747c119f79edcc50fed4c792661ac2c6db1e0536&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGKONYYJ%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T140407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHP8rtGzcl%2F8tLQMaXakQQcJfWF%2BazQcEyoq0nCjTLxAiBbJB27TZVi1kK1PQANYQ%2F6N1Lf4iH7iXhA9X9WD253oSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2BcRISHLUK4R6%2B92EKtwD%2BDqwG75L8yrqQdAr0wd4QC5djT%2FYZK9CZWzIiBIblZE4XXEcxYVltNPbq6gOCoQJRppBcFC8LjGWGbdZZPw5adTZ%2BfZZjJm2uIVzouCws98ikxPha1DXS%2F6IWfOSfWopMabgJlLoE63czKxyTXAsQ16k1bmaKEbqnUCNbLwEFB2TCORBAkcXvs%2FlbnL9PKsft1UpO49JN3UqnPkzfpzgctzO6j4plzO7wYV4zWTaHLvnC3%2BlFpS9tImpygAo1bhypbuuxxX1xjGRlOhjD1U5m7p316Kxh9lMb7pI8gNSz2BbU3A0N3cddqnL7Z2j9Xjyl3k5mrTzUTVSctXJQbMTZl6CRhCK1nuAAMb8oDVTaIVQtCXuygzjUCJ1nmY9hvwhz0LSav%2BBLWUsLgLjJD4Vy4lQ19kMqBI%2FaJoTAKfYVaRZz9fTYIAlag2BqLEHXE05bbFzRB2e4Qn5z72uZ5HkBpu7TtpaKFOvKekzNjBOfxVrARZKOEjXTPVr7Nsawp8ZqXP7eV95cyhDdzlBx6zuEN5s1aqyFKVMASXc1Pg%2BPdrDHcykw6XjwcXkZfPLfZKvmyfoozwzFXFD3oWFGyZkJ348RUAbNIc6kueFTERoeJFFJqxqd0Tfet9mzX4wneTDvwY6pgHgk3MQcUNyBull1Cqx%2FxwAM6gcUR5MsPt3NgRzEk97oq3BKbreEwAsPttiBpreYh9j03Rqenw%2FsYrZbi0ItW40Z8AJfKvyaBqvTMwUPDE24yYRWgb03gOzla%2F%2BXXTCwZe2KPrUjhxePIcNL8UF8mhB8A5bubOZ7EvltSy3HnE9G22myCZLwv5k76fUNuOTHw18G5wXF1be1dqQNUPn0%2FMSHBzK0yFR&X-Amz-Signature=1a6a756adb4d437d73c3f595c4feb0268096a30e4294a5f2f04be8f69ac9ffc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
