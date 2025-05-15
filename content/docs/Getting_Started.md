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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664THCCAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFy9kFdHB3jPsCKL2x6W%2Bzr%2Bw2sSl7pJMcTkqTf067oXAiAdqS2vd%2F45%2B3HGJ3%2BnOvuOwEfGn6%2F8n1r26CMhP4y5Qir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMTliD5Ok9ZGkB5ydAKtwDmqQPWJ8bi4CN4eRIDS6HJGjOrPixQaiweTAwRXPwxuqBHrvKJ9G8dRkQIMfmYFNQybyVp6qNHiK5rpAW8KsGCcK1YLJh0dD5oZ20VzL5QjeZ7lcgPR2FS7gZDQaYHU3IORzTT3WCjLOir5txVbyHXqjQljjmS8gHmYZh%2F%2BM%2BwUvJMeSaBk5IX2beSvg8OYFgRBkFVsE6ZELwyWqUUULDRmPnDKOGcZsSePBtD5YknFD0YZZSR3LFMdfLKy6m1qObtYhxG6i19KRSYFyUN%2Fbi0kN06U11U30VSWaG7L%2Fr9IViK1BOnZfv9MFkpyEB2sdFXVUsBkVySxE9Q25yXuat9xsRgZNmk2RfEnWJi68K3amalVlvgvS1CzK%2FYDKtqPaqpmjn2gXbUXyEjxSWuI8EudjsgYfEng04IUTktpNLpB%2Bz1E0LVpNdzUWN9g7oAFjkDy%2Fn1gjxJ5KhYOAEvoOrMIMpEMAvqlQT8O0gPVJhUhGkhjmsT7Z%2BXEUFzUaI38kwjim6VLR3xBlutXgkLyzOd6LHPGkVD%2FCerxuzapM9yTBe5%2BR%2BdDHLwc865rCg9wBbLNi1WSBym4mgplz4vS607xYhYcfHFzL6KHlHL5tLV3RDgwwLz6auaAXn7NIwqPCXwQY6pgHdv%2BADRJWI1LpvZ0YoPEnQ3RGEkkZMWGU6PQRZA2qjp62KyKoaGBg%2FVzzc36zJ9P%2B9WEvumH8cgNAkBGVXM3DIMFhIpxNgGiMCekeRHa65kKhEPU6QM3SOQVF9IKK31fLEclr02qTP4KizD6qbPnvhy5IvXGgjOZ33AeN0ZPkUfCDyK9%2B%2FzL9vN5dSdLNDZSSUq9OCY%2BDf26%2FikJMCAJ5yylfg0u%2BE&X-Amz-Signature=2d67c06c2754051536896ae427f2ea65f227d20aeb77fb698b7354c516905210&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664THCCAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFy9kFdHB3jPsCKL2x6W%2Bzr%2Bw2sSl7pJMcTkqTf067oXAiAdqS2vd%2F45%2B3HGJ3%2BnOvuOwEfGn6%2F8n1r26CMhP4y5Qir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMTliD5Ok9ZGkB5ydAKtwDmqQPWJ8bi4CN4eRIDS6HJGjOrPixQaiweTAwRXPwxuqBHrvKJ9G8dRkQIMfmYFNQybyVp6qNHiK5rpAW8KsGCcK1YLJh0dD5oZ20VzL5QjeZ7lcgPR2FS7gZDQaYHU3IORzTT3WCjLOir5txVbyHXqjQljjmS8gHmYZh%2F%2BM%2BwUvJMeSaBk5IX2beSvg8OYFgRBkFVsE6ZELwyWqUUULDRmPnDKOGcZsSePBtD5YknFD0YZZSR3LFMdfLKy6m1qObtYhxG6i19KRSYFyUN%2Fbi0kN06U11U30VSWaG7L%2Fr9IViK1BOnZfv9MFkpyEB2sdFXVUsBkVySxE9Q25yXuat9xsRgZNmk2RfEnWJi68K3amalVlvgvS1CzK%2FYDKtqPaqpmjn2gXbUXyEjxSWuI8EudjsgYfEng04IUTktpNLpB%2Bz1E0LVpNdzUWN9g7oAFjkDy%2Fn1gjxJ5KhYOAEvoOrMIMpEMAvqlQT8O0gPVJhUhGkhjmsT7Z%2BXEUFzUaI38kwjim6VLR3xBlutXgkLyzOd6LHPGkVD%2FCerxuzapM9yTBe5%2BR%2BdDHLwc865rCg9wBbLNi1WSBym4mgplz4vS607xYhYcfHFzL6KHlHL5tLV3RDgwwLz6auaAXn7NIwqPCXwQY6pgHdv%2BADRJWI1LpvZ0YoPEnQ3RGEkkZMWGU6PQRZA2qjp62KyKoaGBg%2FVzzc36zJ9P%2B9WEvumH8cgNAkBGVXM3DIMFhIpxNgGiMCekeRHa65kKhEPU6QM3SOQVF9IKK31fLEclr02qTP4KizD6qbPnvhy5IvXGgjOZ33AeN0ZPkUfCDyK9%2B%2FzL9vN5dSdLNDZSSUq9OCY%2BDf26%2FikJMCAJ5yylfg0u%2BE&X-Amz-Signature=48ba27c6c12a91b8369b8820068703404ed6b144559b41d517214bb6cebe0959&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664THCCAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFy9kFdHB3jPsCKL2x6W%2Bzr%2Bw2sSl7pJMcTkqTf067oXAiAdqS2vd%2F45%2B3HGJ3%2BnOvuOwEfGn6%2F8n1r26CMhP4y5Qir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMTliD5Ok9ZGkB5ydAKtwDmqQPWJ8bi4CN4eRIDS6HJGjOrPixQaiweTAwRXPwxuqBHrvKJ9G8dRkQIMfmYFNQybyVp6qNHiK5rpAW8KsGCcK1YLJh0dD5oZ20VzL5QjeZ7lcgPR2FS7gZDQaYHU3IORzTT3WCjLOir5txVbyHXqjQljjmS8gHmYZh%2F%2BM%2BwUvJMeSaBk5IX2beSvg8OYFgRBkFVsE6ZELwyWqUUULDRmPnDKOGcZsSePBtD5YknFD0YZZSR3LFMdfLKy6m1qObtYhxG6i19KRSYFyUN%2Fbi0kN06U11U30VSWaG7L%2Fr9IViK1BOnZfv9MFkpyEB2sdFXVUsBkVySxE9Q25yXuat9xsRgZNmk2RfEnWJi68K3amalVlvgvS1CzK%2FYDKtqPaqpmjn2gXbUXyEjxSWuI8EudjsgYfEng04IUTktpNLpB%2Bz1E0LVpNdzUWN9g7oAFjkDy%2Fn1gjxJ5KhYOAEvoOrMIMpEMAvqlQT8O0gPVJhUhGkhjmsT7Z%2BXEUFzUaI38kwjim6VLR3xBlutXgkLyzOd6LHPGkVD%2FCerxuzapM9yTBe5%2BR%2BdDHLwc865rCg9wBbLNi1WSBym4mgplz4vS607xYhYcfHFzL6KHlHL5tLV3RDgwwLz6auaAXn7NIwqPCXwQY6pgHdv%2BADRJWI1LpvZ0YoPEnQ3RGEkkZMWGU6PQRZA2qjp62KyKoaGBg%2FVzzc36zJ9P%2B9WEvumH8cgNAkBGVXM3DIMFhIpxNgGiMCekeRHa65kKhEPU6QM3SOQVF9IKK31fLEclr02qTP4KizD6qbPnvhy5IvXGgjOZ33AeN0ZPkUfCDyK9%2B%2FzL9vN5dSdLNDZSSUq9OCY%2BDf26%2FikJMCAJ5yylfg0u%2BE&X-Amz-Signature=be0143eeb9309dfb4ddc973992b2756f0245e2487185280b9998fc3a2149314f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MDWLE4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDel9ta8q3n520ZrQOKn%2F02hg3z5oljlwM8JwlT0G4xSAiEA12yl%2Bnq%2Bwn6dNsq30USyaUZ50SlzRzcrT9xvd7J8MxUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFU%2Fcv5Om%2Fi8DuJqSyrcA8M2KNa7tT96h2KKpqLAzvhakgoOm%2BOJLV45%2BmJcMkPbuyX1noh4%2FcWr5Fa%2FeZ%2F5rA6uWYGrbEk0VbNVWIBXyC2NUavM4ocl%2FiN7vRdzcXAVzCS2zZ78gM1%2B0V5jCZZoDkNdzw%2F9r9UBriWX7kuCvS1%2B2NcGRFb39Vf%2BN72u1HKCnvVwu%2Bqofk8fdyuQSwFICo8ZD7h9AkYNbKLRidd7xxNJn3mA8OtI2%2B0S2kHz03gEgY1MuOLwweKLqOtUgnws0WNuWiDaHsisOpGtjaoROh5KBhOVMZ6nwE38%2FnAPb%2B%2BkPi5GBP4KYHI5BZOYuVSZqLJ6htfiJoKlrnxIz%2BuNmSJKS30jBNMuNQQzgmGLZP8bHbNinLNDgG%2F522r5JRnLmAhvTKg3pwRKDqFOAw6jAjdqUT4ZQdOXhwkc%2B3yb0VrpCdkVXZlTc6Es%2FUmJd6ioa%2Fl%2Bg8JZULAnVgknr53VtIjMEaDvNmcPpWeX5P%2BcoYc4ds3c1JNhLLq3D1ur9K7n9jXtRt5QeHfTkN3HQAwWsnnjSpLEWlKLdIxYqT1Lv5fczQ1EWCBVLe8xi%2BgJ0JC00Z4kSG4LRL0iy0LNOrU5RY8p4RToiF6Z07YLkErJAHn65dUzNCA%2FsdFTLqptMKfwl8EGOqUB7dq6cnK9EcbY%2FH4rra%2BTNmts%2FXb9ToRVp6NwcI8HOUhaMnK%2B6bhHx7Rle6IVUZeUMw2Y68%2FqWUdJ0TNm8SwBIP5shYFiRAlBpxjAMVNrtBiK7jHLqCVHk7qWXEMPoIetPOJ4w22RPwZyhQALvtYw%2Fpv%2FqL9%2B7VV2tvUDzJZ82Uza1kAbwKbsJOyJ%2F7EuVs3nPDwHLIYHOoYIztv%2B6w9NlD4lplhv&X-Amz-Signature=adcccee129cf303fcc723d569c13c22dd5d6f7d2991e1bd497da4e28acb44896&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCGEJHH7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICZbTuWG4sdQ3B4b7wvygm15jEOTQvVDxz8WhuQeymqtAiEAkgwY4GgTkym%2BwBELgam1FVsz4GI1bFRDdUe0cJbqAqsq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDH1aDpjYKNkEuhNAbyrcA2U%2BSbkjwFPjLpv%2FG0BJCxXvzYx4qYjTNoYMWQbUuKONBMo2Fu43SWcZZC856LuwHM1ad9v04YzRf0H3BZSnpGeWe9XhZ1hq1Ufx0V9rm%2BBVXdcCqxXWzouSEgFrG3kygaSmFu%2BxkPKlyKlSXCMAWpmVeu7luV3koHH8iuPHqfJ9VJmsiTkq1g5D1NPBTqSJ34OuUuZ7hjJbNoCkhJsemKRmeK9yBEXH8atCm8XjoHNdcV0nnYWwfpE2Se7X6EBJL4rrkgBHObFi6p0%2FU59Q%2FI0FMJgDkid741oP97xSPDWsi9oeAlTg0nvqYPDhuY8eYkl8R%2Bqxxg24xHHWzvJ3jMP3dta11Os%2FfYim%2BGYE0EYpw0hzaMhQ78gjpZf3M6vnX02nRRGLc0MFxZNWmBp44stZW8GQ1wPllzIZIS%2B%2Fle1tsL%2F2dh07lNIrFjlbMjetl%2BFWMk%2FV%2FQUs1FoE5PV7R9L54ctSTU%2BeW12tZ3FUL8GkyQp6pmFWcRxqFofztrZ1iHcnkoy0lM9hLdxaixqSiX8bgjka0zhKpySYqQq90%2Bg0NLrMSWgPlQDd6EcY%2BuzA%2BNgLSgVQr4%2FleJcsAxnMetu7I3aTEkgaW%2Fz5EIgiG%2B1pZRnEuZNBajKFaD5%2FMNXwl8EGOqUBhA2aZ3DNjslnIZt%2BDE26jtXIvmNLxjSvwnzar%2B7qqSf2NqcuNTxH%2BoDHvAL9CovVarS9O%2BGVRPcW16WVeMCIXYEacxd93B0NKOQEotJ%2Bo0ncDZBU91BFA%2BeJbyBons3JwRFz2%2BJZ6WXCcTHGFsGj36m0HuTJ1845bSOuaWOObM2xu3qEPLsJCP9QqYURvBIF4zarASL%2FMQmKp505X1%2FChv5%2Fs8%2FV&X-Amz-Signature=de31da18062c4e112394ac71a586f641745c7e42cc341ec81bebc57c66cbef81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664THCCAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIFy9kFdHB3jPsCKL2x6W%2Bzr%2Bw2sSl7pJMcTkqTf067oXAiAdqS2vd%2F45%2B3HGJ3%2BnOvuOwEfGn6%2F8n1r26CMhP4y5Qir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMTliD5Ok9ZGkB5ydAKtwDmqQPWJ8bi4CN4eRIDS6HJGjOrPixQaiweTAwRXPwxuqBHrvKJ9G8dRkQIMfmYFNQybyVp6qNHiK5rpAW8KsGCcK1YLJh0dD5oZ20VzL5QjeZ7lcgPR2FS7gZDQaYHU3IORzTT3WCjLOir5txVbyHXqjQljjmS8gHmYZh%2F%2BM%2BwUvJMeSaBk5IX2beSvg8OYFgRBkFVsE6ZELwyWqUUULDRmPnDKOGcZsSePBtD5YknFD0YZZSR3LFMdfLKy6m1qObtYhxG6i19KRSYFyUN%2Fbi0kN06U11U30VSWaG7L%2Fr9IViK1BOnZfv9MFkpyEB2sdFXVUsBkVySxE9Q25yXuat9xsRgZNmk2RfEnWJi68K3amalVlvgvS1CzK%2FYDKtqPaqpmjn2gXbUXyEjxSWuI8EudjsgYfEng04IUTktpNLpB%2Bz1E0LVpNdzUWN9g7oAFjkDy%2Fn1gjxJ5KhYOAEvoOrMIMpEMAvqlQT8O0gPVJhUhGkhjmsT7Z%2BXEUFzUaI38kwjim6VLR3xBlutXgkLyzOd6LHPGkVD%2FCerxuzapM9yTBe5%2BR%2BdDHLwc865rCg9wBbLNi1WSBym4mgplz4vS607xYhYcfHFzL6KHlHL5tLV3RDgwwLz6auaAXn7NIwqPCXwQY6pgHdv%2BADRJWI1LpvZ0YoPEnQ3RGEkkZMWGU6PQRZA2qjp62KyKoaGBg%2FVzzc36zJ9P%2B9WEvumH8cgNAkBGVXM3DIMFhIpxNgGiMCekeRHa65kKhEPU6QM3SOQVF9IKK31fLEclr02qTP4KizD6qbPnvhy5IvXGgjOZ33AeN0ZPkUfCDyK9%2B%2FzL9vN5dSdLNDZSSUq9OCY%2BDf26%2FikJMCAJ5yylfg0u%2BE&X-Amz-Signature=99377cfdf08410adaa5e44776556f22aa10e4bc72262ea571e5e095bb81995e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
