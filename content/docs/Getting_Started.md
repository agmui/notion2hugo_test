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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYTIZJO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCw8Au9e7wGw5rFKeMOTtdBZ3EQZjr1A30ZRi2X0bCV9gIgainkazGJYDo4Z6Xa53mXEhyCzAXhahpZ%2B%2Fwx7LxbQMkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ2yIqQgIPnzXNMDCrcA0ZK9JXVtYVf6oUaY%2F68MtFdgEg4Es%2Fa3CGDJdoV6nZWHtZtHFDWK5CivGZ%2FsSVDjMt3w%2BJZhgw1Dc1K2%2BEubmLXHf8WKzWcCztRVzTph3e1cOKgoAcsfMzvaKES6yz8N2SiI5TozoVJDDH%2Fx2f72H%2BKnDpclSW8qO65z0roPNIySyuF4A0EoV6cGy17wg%2BWJgI%2BRu%2BlRTTPQ6PKuD3MO5MM2wZ3BWDs%2FHy9lL2nUv8frqjmH727p4IqGQfy%2FPICqyG3RPh0tpclcgxUOGDlYqQ8DScoPtHMeej9Rk1Izp3hZayOmImeajzN3Gyc81DMwik9wAl3Kp7C5g5QgmYPZihrgZOBjUhauECrDV1Ca6j5bOfhfAG%2BWxyssJAdp8msi34b7TtCwI3uA9u9SNwkbJ00mKyXxuN0IhCHIn%2FqVn3lYVfAno0Ki4%2FkaS%2FBfMFF9VBUp0ytFHJzGMSuadQ4A%2BfHiNFrGIDpbb%2BhaSLbjcqkBLrBSO0f8nqgfZI1VYYBdVu89DrFw3uhoK3T8yVUmjVFQNfNhdzTooZLbEM6LOC5VeK8aOK%2BGvQ%2BTmy5OxfaN%2BhHKezEeUspCA5xnlzX1BHpz7S%2Fw%2F9%2FFAdXcORRvtEjSV1ILLaJ1Z5iS6OmMPnvo78GOqUB610zeT2wGm7bXv2vp6N2r%2BWR6oExoYmm8vQqsFUYSa3piigtrEtaDTWOgV1cbCk2qYgDZJ63hzIFoZhNoW61FGJoDOuxst8AwGsMLqboXS0JH1RILHcEFrMsViiMVEsjCeaC%2Bzapzf3g8SZSObR7xc6mfpePEj9mKg%2FMN3V8LhhvH%2BQtafjHiy04DNn%2Fm9cO%2Fg8SkTDcMGfFftyJuTtIsr4jvBqg&X-Amz-Signature=caeb9327461ff56ba07f90bc42be6651a7e22281fca6c54a08df31beafac5e15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYTIZJO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCw8Au9e7wGw5rFKeMOTtdBZ3EQZjr1A30ZRi2X0bCV9gIgainkazGJYDo4Z6Xa53mXEhyCzAXhahpZ%2B%2Fwx7LxbQMkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ2yIqQgIPnzXNMDCrcA0ZK9JXVtYVf6oUaY%2F68MtFdgEg4Es%2Fa3CGDJdoV6nZWHtZtHFDWK5CivGZ%2FsSVDjMt3w%2BJZhgw1Dc1K2%2BEubmLXHf8WKzWcCztRVzTph3e1cOKgoAcsfMzvaKES6yz8N2SiI5TozoVJDDH%2Fx2f72H%2BKnDpclSW8qO65z0roPNIySyuF4A0EoV6cGy17wg%2BWJgI%2BRu%2BlRTTPQ6PKuD3MO5MM2wZ3BWDs%2FHy9lL2nUv8frqjmH727p4IqGQfy%2FPICqyG3RPh0tpclcgxUOGDlYqQ8DScoPtHMeej9Rk1Izp3hZayOmImeajzN3Gyc81DMwik9wAl3Kp7C5g5QgmYPZihrgZOBjUhauECrDV1Ca6j5bOfhfAG%2BWxyssJAdp8msi34b7TtCwI3uA9u9SNwkbJ00mKyXxuN0IhCHIn%2FqVn3lYVfAno0Ki4%2FkaS%2FBfMFF9VBUp0ytFHJzGMSuadQ4A%2BfHiNFrGIDpbb%2BhaSLbjcqkBLrBSO0f8nqgfZI1VYYBdVu89DrFw3uhoK3T8yVUmjVFQNfNhdzTooZLbEM6LOC5VeK8aOK%2BGvQ%2BTmy5OxfaN%2BhHKezEeUspCA5xnlzX1BHpz7S%2Fw%2F9%2FFAdXcORRvtEjSV1ILLaJ1Z5iS6OmMPnvo78GOqUB610zeT2wGm7bXv2vp6N2r%2BWR6oExoYmm8vQqsFUYSa3piigtrEtaDTWOgV1cbCk2qYgDZJ63hzIFoZhNoW61FGJoDOuxst8AwGsMLqboXS0JH1RILHcEFrMsViiMVEsjCeaC%2Bzapzf3g8SZSObR7xc6mfpePEj9mKg%2FMN3V8LhhvH%2BQtafjHiy04DNn%2Fm9cO%2Fg8SkTDcMGfFftyJuTtIsr4jvBqg&X-Amz-Signature=6ee74982335df3101c4a2841b58082087a851f47a780593647732c6dd7aeea23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3GUDNY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCQgpgpAib3vDX8NHaATRh93EeVO6tCY5xGDQipIwU6bAIhAIWzLge1pbWrVL%2FTamQKWx8HVJLgLzjWYYYdCaQ56wI5KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzukKOqRaiqeSdZHfkq3AOWiQdhbexxAdNgxKdEu8qqG%2BAR2GMCbXd8rCu34SGX3i0IQQXZT90SSZFR8J9amE1bQwHmiWmpY7ck4PO%2B4GZIUEi5APVllSsX%2BLAGbJFe4Bb2MloaKZo%2BdM5c8w9Lq%2FfQ9AdjmoArsE2b9XEw0Bdwa0CicODf5PC6nmFWrXoiB9npR%2Bb%2BMiJ4WIWqUqY4FlZZ1hCmnfWgwKalWNZQ1RsQkVD4H0e7y%2FjROkWG3HHudEieRgS1AwWvMi%2BYBRNcLtBl4iFDmhtYJ5CpcDr6grFg4OJ0qZCIFaMTmkwwePWN80dMNTmrpbDrGgjxrJf1o3H%2F3WQ3l7U4GNgSzCWg48xYLLodMWK8zsC7eMtWa6eLF9eTTu0aGmCMdFWDwZmV7k9r1MG%2BXlYCAkDMRJM9jcdecG87%2FOLh%2BH2Iq9Q17we2%2Bcsm2UZKTpXiWBFk12dugkoTCOkSadyGzH2zbpqAHTMSaRXT915tFqADtqo3j4T9PPgiVdYey28sWpO%2Fgf%2BIaLh6V%2FP7noP0ZjooHC8VWPif%2F5z7uTQ3N1R4yUmqyNcXGiO540etP%2FIx83Qm8o8htd18tPeVHSIcfcbtPupK8g36kopoF%2FGTXj3JUPsCWnyQkLQz9KoOGsNeWW2f%2FDCB8KO%2FBjqkAYVtru3hkX9YxchSrOHCIuQ21PB8t84A5mWUP4egFdVgVcX3aQ1tx9Gw8SlzJUprDfT%2FHzvVBhfoHtnRp6Zx%2FY%2F%2Bk9VCQRDjDVXDj5RWjidgy453nKYujva0rM4plf1OjPkgkOGRVtvS5MHsOdFg%2FTFQXublhEa928HsbWdhFkebkai4DZdPm8f9x%2F2NWGAiWO2O%2BVGO8Nfa3DwWwmF5XcKMV5nL&X-Amz-Signature=3fb058eb88fd6e24057ef9c33c0c60e36f6ee1c4516df4e09f0dbd5768bc85fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYULAJFQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDWlVPatlgTXa%2FJSo5OU919Fy8aBJy6gSSIuYpHv40mJQIgVajvT%2BFUISd%2Bz3exHakJM13TVVNouMruOVAXOWr6cEkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJ98BlPKUvIc9lIwCrcA1xGODY4JH5BOFj9GP%2Blztqa1vXa67fBeahIw6K3%2Bnic4xC6YCUOBkRdDruRe4aXjRmkJ8Yewpa2YDVqyxqbIPPm%2FP2l4A5l0OQBsYsWzpbLHmqo7CRRK9y2z8qXCVZmLmJOd8x4LXFEvAfiUhP9p5EShmJ7NpTA9ZmBNRwz4Cos4MqfGeTAwiJrbTOPaBQRFWLAI2yvmoQkql2ipcoEsKTL8QI4pI%2BaNiAr5bKvuCBITv5WSokKYwb0mUTXiXN20DzdV9JyNE4G5vs%2BnGA%2FAi9DCm0VjvJQoYrG%2B3HUhT2dUQjG792joNyYMs1nKfmJIt3qMeEfS%2B%2BHS1uAboUlhrmcBemSCdtHsgliwYjMWno09sqk93a1QzFbqCDrjDkkUtX%2F4GYsErMg4Dtci37asGac9ML2sBttjAqJHDHCltDEkeJfP4OHuRbJrV1EaadXUzvtmHgi5bukIkjv%2FckkEy%2BeFjDuPjSJVbx5NfItzDW6XRWw3znyuQJIGFQv%2Bh0tWAcJPkXWtcuUyjROSfeUsGpaNKkb3WrQU5Yh8KTBQbv5FT%2BXPQI0oldB6tzTSL5wD2zh5lWI8%2Bz6n5md3WXPORJ37MXh1xaI65ozdpbEL3i6mvOzViHWs76sjuHNMMbwo78GOqUBxGqW0foBnLK7%2F2ZwvD6rP9kcRinVibl74NJOpDnZ34gDVgLcvbRsu00ufPwUJN9GD553czoOKT5dXyPKr%2F4Pzy4vYhEL6dta0D9vzWpkcqF0LSfiseUp972Qmft2V5f07aqaQHjFPvQFrN9Qec2d9EqHCNg2O%2FoxG9bnDQJbtIAcPEEyMtt7khU78rCR2jCAnxSVQ9ec2ObnjaOotcc3dX03Fe5R&X-Amz-Signature=e02ea94912abc3687fc370faffed7fb5a78de4e43c184b98f84e1f1a739596a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYTIZJO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCw8Au9e7wGw5rFKeMOTtdBZ3EQZjr1A30ZRi2X0bCV9gIgainkazGJYDo4Z6Xa53mXEhyCzAXhahpZ%2B%2Fwx7LxbQMkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ2yIqQgIPnzXNMDCrcA0ZK9JXVtYVf6oUaY%2F68MtFdgEg4Es%2Fa3CGDJdoV6nZWHtZtHFDWK5CivGZ%2FsSVDjMt3w%2BJZhgw1Dc1K2%2BEubmLXHf8WKzWcCztRVzTph3e1cOKgoAcsfMzvaKES6yz8N2SiI5TozoVJDDH%2Fx2f72H%2BKnDpclSW8qO65z0roPNIySyuF4A0EoV6cGy17wg%2BWJgI%2BRu%2BlRTTPQ6PKuD3MO5MM2wZ3BWDs%2FHy9lL2nUv8frqjmH727p4IqGQfy%2FPICqyG3RPh0tpclcgxUOGDlYqQ8DScoPtHMeej9Rk1Izp3hZayOmImeajzN3Gyc81DMwik9wAl3Kp7C5g5QgmYPZihrgZOBjUhauECrDV1Ca6j5bOfhfAG%2BWxyssJAdp8msi34b7TtCwI3uA9u9SNwkbJ00mKyXxuN0IhCHIn%2FqVn3lYVfAno0Ki4%2FkaS%2FBfMFF9VBUp0ytFHJzGMSuadQ4A%2BfHiNFrGIDpbb%2BhaSLbjcqkBLrBSO0f8nqgfZI1VYYBdVu89DrFw3uhoK3T8yVUmjVFQNfNhdzTooZLbEM6LOC5VeK8aOK%2BGvQ%2BTmy5OxfaN%2BhHKezEeUspCA5xnlzX1BHpz7S%2Fw%2F9%2FFAdXcORRvtEjSV1ILLaJ1Z5iS6OmMPnvo78GOqUB610zeT2wGm7bXv2vp6N2r%2BWR6oExoYmm8vQqsFUYSa3piigtrEtaDTWOgV1cbCk2qYgDZJ63hzIFoZhNoW61FGJoDOuxst8AwGsMLqboXS0JH1RILHcEFrMsViiMVEsjCeaC%2Bzapzf3g8SZSObR7xc6mfpePEj9mKg%2FMN3V8LhhvH%2BQtafjHiy04DNn%2Fm9cO%2Fg8SkTDcMGfFftyJuTtIsr4jvBqg&X-Amz-Signature=74bb77e31493c1b529b250c8840a71db84358d8739350c7422b09dfd4869b785&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
