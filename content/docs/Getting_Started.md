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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W242RZVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDfdVhE8gmHvZUmj0ql5UAdcSaRJMgElHS5yR1tjj%2F8GwIgbgmEZNtvPX0Q2erOZsAdRH4WoV%2FBybJ%2BmEZfJE3xRK0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHhK%2BDH3aara27G8EyrcAyzmIjc4x926rjzDaNfcO2IBuBGnFdSTVinqEaDpSFujjKbRq%2Fkv%2FUn6RzUA3SEwvTh8nzVvy2NjR6AvJ3yh6D6amk98%2BIopsmgxsNoY9GQHvVSf3qA2e6O2gZnSHsfHilOsQchRchGy6bm7kVVL50d6apv09kCQEzYU%2BAHoUITDlmeIw4Cn%2Frw42pGqO8lm3APTwsTRHpjajAwbtcp%2BluYj9PqDvsVbIABACjL6PZLjpzcdZoHetj%2BbdFYeoH2aNx%2Fu2iSc98vF16lkUzTkyRPxsZ%2FcXKzE2ozJQM2Gvji2Xc4SwT9PBFg1%2FlgM2GrTiLXrbtzDlikHvD7BlShBe8wveIE7tLVqUbsXZWyg%2F9ABPWqXxJKHcjVMuRZBhYXf7Yn7ZIO9p9nNROBxm8JSrFDGN5z0sZUdNEOih%2BG50M20lWoDu8bo5r979hhSMSCJgoYkTrkScvwC4a%2Budh125TieEqTFCqQot%2FI1h2pFC02rIbH7l6tQfiJ1zQILhCeYHEu2hSSVGbn%2FH7BGfzgv%2Fybf048lq7QJh6waDk2Ux%2Br7Zqq80pYZznl4ffWRy9XsX%2BSroPTOukrlbsF8blnhuMKTYk3RgPDQfOTuwwNoJA52H0yJTBRn0HQm9j9NMIuvhcIGOqUBKjnM%2BpX8ktMxLRGGuN6iqeZfKiScM1Oevz4XeD0AY524hBpjex22R%2F0Fu8qR9yR37aDO%2BPIivOVlNUGpYiO7JVr3Aua%2B%2BN5lIQk9DMEnSP1xO2Jp%2B3SZxSq6HZoUT37EcgL37Uu3RQnKJHLaoDY3tMROU0TKZxpII3vKSyPfxnnfvBWefdP%2FaDisQ46KmUqvaUdaONgP3id88c1TcPR%2FAmUAKdnI&X-Amz-Signature=5bd9ef1526856a7298933e13d8e2d1fe13ccb6c5e5b248d1435dca9fa8baa50c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W242RZVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDfdVhE8gmHvZUmj0ql5UAdcSaRJMgElHS5yR1tjj%2F8GwIgbgmEZNtvPX0Q2erOZsAdRH4WoV%2FBybJ%2BmEZfJE3xRK0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHhK%2BDH3aara27G8EyrcAyzmIjc4x926rjzDaNfcO2IBuBGnFdSTVinqEaDpSFujjKbRq%2Fkv%2FUn6RzUA3SEwvTh8nzVvy2NjR6AvJ3yh6D6amk98%2BIopsmgxsNoY9GQHvVSf3qA2e6O2gZnSHsfHilOsQchRchGy6bm7kVVL50d6apv09kCQEzYU%2BAHoUITDlmeIw4Cn%2Frw42pGqO8lm3APTwsTRHpjajAwbtcp%2BluYj9PqDvsVbIABACjL6PZLjpzcdZoHetj%2BbdFYeoH2aNx%2Fu2iSc98vF16lkUzTkyRPxsZ%2FcXKzE2ozJQM2Gvji2Xc4SwT9PBFg1%2FlgM2GrTiLXrbtzDlikHvD7BlShBe8wveIE7tLVqUbsXZWyg%2F9ABPWqXxJKHcjVMuRZBhYXf7Yn7ZIO9p9nNROBxm8JSrFDGN5z0sZUdNEOih%2BG50M20lWoDu8bo5r979hhSMSCJgoYkTrkScvwC4a%2Budh125TieEqTFCqQot%2FI1h2pFC02rIbH7l6tQfiJ1zQILhCeYHEu2hSSVGbn%2FH7BGfzgv%2Fybf048lq7QJh6waDk2Ux%2Br7Zqq80pYZznl4ffWRy9XsX%2BSroPTOukrlbsF8blnhuMKTYk3RgPDQfOTuwwNoJA52H0yJTBRn0HQm9j9NMIuvhcIGOqUBKjnM%2BpX8ktMxLRGGuN6iqeZfKiScM1Oevz4XeD0AY524hBpjex22R%2F0Fu8qR9yR37aDO%2BPIivOVlNUGpYiO7JVr3Aua%2B%2BN5lIQk9DMEnSP1xO2Jp%2B3SZxSq6HZoUT37EcgL37Uu3RQnKJHLaoDY3tMROU0TKZxpII3vKSyPfxnnfvBWefdP%2FaDisQ46KmUqvaUdaONgP3id88c1TcPR%2FAmUAKdnI&X-Amz-Signature=c05e08dd5c1413f9afde96e4d101663238199fe96e5745ff866eb8b19353c6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W242RZVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDfdVhE8gmHvZUmj0ql5UAdcSaRJMgElHS5yR1tjj%2F8GwIgbgmEZNtvPX0Q2erOZsAdRH4WoV%2FBybJ%2BmEZfJE3xRK0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHhK%2BDH3aara27G8EyrcAyzmIjc4x926rjzDaNfcO2IBuBGnFdSTVinqEaDpSFujjKbRq%2Fkv%2FUn6RzUA3SEwvTh8nzVvy2NjR6AvJ3yh6D6amk98%2BIopsmgxsNoY9GQHvVSf3qA2e6O2gZnSHsfHilOsQchRchGy6bm7kVVL50d6apv09kCQEzYU%2BAHoUITDlmeIw4Cn%2Frw42pGqO8lm3APTwsTRHpjajAwbtcp%2BluYj9PqDvsVbIABACjL6PZLjpzcdZoHetj%2BbdFYeoH2aNx%2Fu2iSc98vF16lkUzTkyRPxsZ%2FcXKzE2ozJQM2Gvji2Xc4SwT9PBFg1%2FlgM2GrTiLXrbtzDlikHvD7BlShBe8wveIE7tLVqUbsXZWyg%2F9ABPWqXxJKHcjVMuRZBhYXf7Yn7ZIO9p9nNROBxm8JSrFDGN5z0sZUdNEOih%2BG50M20lWoDu8bo5r979hhSMSCJgoYkTrkScvwC4a%2Budh125TieEqTFCqQot%2FI1h2pFC02rIbH7l6tQfiJ1zQILhCeYHEu2hSSVGbn%2FH7BGfzgv%2Fybf048lq7QJh6waDk2Ux%2Br7Zqq80pYZznl4ffWRy9XsX%2BSroPTOukrlbsF8blnhuMKTYk3RgPDQfOTuwwNoJA52H0yJTBRn0HQm9j9NMIuvhcIGOqUBKjnM%2BpX8ktMxLRGGuN6iqeZfKiScM1Oevz4XeD0AY524hBpjex22R%2F0Fu8qR9yR37aDO%2BPIivOVlNUGpYiO7JVr3Aua%2B%2BN5lIQk9DMEnSP1xO2Jp%2B3SZxSq6HZoUT37EcgL37Uu3RQnKJHLaoDY3tMROU0TKZxpII3vKSyPfxnnfvBWefdP%2FaDisQ46KmUqvaUdaONgP3id88c1TcPR%2FAmUAKdnI&X-Amz-Signature=f5412f72e68bbce06f65a6c20549d531ab46cf043af8299114d82e51d2f7bce9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CHYOFQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDqA9JhwWw9cp5g7mj8i6y8OmuHyYwpLTpQXcPbjiPUOAiBeB4QppAnbk4qTZMzSgZfoDbx%2F0QgCpf1Z7WMEFsd13ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMQ1aZT5V0NIXkFJKhKtwDsWFRKOVeN6Sax7eolaRg7%2B07mqyiXoI05jjn8f6zEz8Sq%2BEVUKZXog1921CJVQP5XmhQ6dE9XsfTvVAYMEU4Tne%2BRAlX8Ft2X9sz4mg7j4byLmjXrEwENOSbeeBeN2WtYSd8dnUjvx4pb4pZyg4xFagC%2B74moQq77%2FojpGvjNrrPWoYMkQmpo8iwkKEdOWMzdQrNgWyevL6nkhAax11EjNEzxSh%2BmkfBd%2Bf9takv8lgmBHmuj8jlFYs%2FedPX2yGgxoPkhthyvEq377DFH7MTMOmCd4%2BzElKKv4oAiLx9Vb2ECn0G4YtpLQY6INOwvT0UtTJncvtvWA8yvop0zTy2%2Fhb%2BLcEv%2FSkMJRrQfM4OyB5StMOqW9EJejBFtxzL8K3kPD7GaVBTZTHpKrpI%2Fyaxz5qRfbDMArJ2uOAMggqPD%2FS%2FcV%2BBCyKk%2F07X5gS57a56eG4VltriVX%2FZvwPSqDp2Q10X9p%2BnuN5GhB7hKKdejVcwOLvz4Jejeab9In9Lv277O%2FQHCpd7hW6lFymCQqhLI0IhPOP87CzM8%2BaWPGxeMBFXr3OJ3w3RtqeeFReKfZHla0kl7Ovi%2FlwEPeWzLp69TAJBbEfcD5D7MXNL3UXS4t%2F1te7U4l7wCVsqXUcws6%2BFwgY6pgG4VUz8X2h3LdMgpf02XeJR6uYDlmFe5ACs5viuaqc0vIusdw1b3LGtaKwA4cygXDbdWoEnMxSZ4NPudWWXiF6gBcTN3KO%2BjTLGIXORCaQ0B33vZ8zeQ856oJ%2F1j9IxdquDED%2F4XGeWfdDS7ROUPUzJSmPwegr4DgUhfSY%2BSSBg9anJxrxfw6WRVVMwkMgBAAXjFkdnonCcZWAFIwxgs8wbnv86hBC4&X-Amz-Signature=043539ff87a4ef1e06e7dc4faaf09d8c3bd5f774b7b17ac9d642bc015f26f50b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXABVDA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH2jr2j0Pm1zZ9dNIajovOzmuUh19pATO%2FTfdUalLaCxAiEA8HoNSEZg8dmu%2FXIdXuV%2BpSs0blqMwdrd0jRnNAk0Hc4q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHXWxwMszpJ%2BFYUmrircA5jHfIVoq0t%2BkuPfbaS%2BYgi4IeDOwM5Ak38lljN92bs10WR6xrzO5RX9x5zYjOXWD4CMvO%2FCVnQ0MSoAXBXkkFdbfP6qNEBJ46sLO4b3y6OAjKekQzGAu9RyAFQUdWuJPG7ZF1jpIAMj2FKPDaVukhMPFfHR30zbiujOBWuce6TDCjIiVtf9EfUFNYTVIzL1zk5N7LVARvYPDzyle8irpc8LIxqC1Ps7uc7E2mOprJgYQ6IBpsyQ0RtZiGg1UY1S%2FbSD4lARNQx3Pl8iYn00ih7ORAgnTg%2Fv6XVkO0tv1d8zLO6QVRwz3cS2j%2FYJuJ8Uf0DnYY%2FCbbguWlYBuxMb8sOI95cYeomobBGuQMsjQV67lDCAtVnEZoMOMSkMp3j2U9yw5RGPuqa1Q7ZDDT44ScLgXnEo%2BaCDU69PqSecvbzLuzM%2BHbVXwzEUJYckzc%2FEzmagOqGFmX9RtB20HS8XyzFo8pgtHlTpB6FrsmBLosRVPZCUVdkkh2%2BJUTZG6Vlv0r2FtrQwPSyPt37FlhQUJlcO2ykKOapuUhSNOZHJ4VtM9%2FVyDkdx7yWkSlDfg8noHN2SGBsuY3Y%2FEArUQy5QikaS93XcMVNrpoEdqUkQhjMqaDvi5PsYDXuvUQwFMLOvhcIGOqUBit0Im47aBaqTabtgcV5TWRjrzTmFANe%2BocJU8%2B46q%2FGG4xt3UM9X%2FY2NvcKkg8buHt6RUIHB5Oj8y8qo6JFahSHRLuk4gZWZdbrXgR6Z9NBNGGa7xiXxYH%2BZTsDXgI2igstwRuq%2BcuGFk%2FntlbEPzJfMLtJJCMZ2crFW%2BrlpVZ3raR4DvY%2Bq6JmK64Z0pRTWzx0cnwUNvZOsXexenc9Ikr4GOVRM&X-Amz-Signature=0dbbcfadb57792ef237d8e2c4e6f1d029d81903e0ec795288e426258ced44135&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W242RZVX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDfdVhE8gmHvZUmj0ql5UAdcSaRJMgElHS5yR1tjj%2F8GwIgbgmEZNtvPX0Q2erOZsAdRH4WoV%2FBybJ%2BmEZfJE3xRK0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHhK%2BDH3aara27G8EyrcAyzmIjc4x926rjzDaNfcO2IBuBGnFdSTVinqEaDpSFujjKbRq%2Fkv%2FUn6RzUA3SEwvTh8nzVvy2NjR6AvJ3yh6D6amk98%2BIopsmgxsNoY9GQHvVSf3qA2e6O2gZnSHsfHilOsQchRchGy6bm7kVVL50d6apv09kCQEzYU%2BAHoUITDlmeIw4Cn%2Frw42pGqO8lm3APTwsTRHpjajAwbtcp%2BluYj9PqDvsVbIABACjL6PZLjpzcdZoHetj%2BbdFYeoH2aNx%2Fu2iSc98vF16lkUzTkyRPxsZ%2FcXKzE2ozJQM2Gvji2Xc4SwT9PBFg1%2FlgM2GrTiLXrbtzDlikHvD7BlShBe8wveIE7tLVqUbsXZWyg%2F9ABPWqXxJKHcjVMuRZBhYXf7Yn7ZIO9p9nNROBxm8JSrFDGN5z0sZUdNEOih%2BG50M20lWoDu8bo5r979hhSMSCJgoYkTrkScvwC4a%2Budh125TieEqTFCqQot%2FI1h2pFC02rIbH7l6tQfiJ1zQILhCeYHEu2hSSVGbn%2FH7BGfzgv%2Fybf048lq7QJh6waDk2Ux%2Br7Zqq80pYZznl4ffWRy9XsX%2BSroPTOukrlbsF8blnhuMKTYk3RgPDQfOTuwwNoJA52H0yJTBRn0HQm9j9NMIuvhcIGOqUBKjnM%2BpX8ktMxLRGGuN6iqeZfKiScM1Oevz4XeD0AY524hBpjex22R%2F0Fu8qR9yR37aDO%2BPIivOVlNUGpYiO7JVr3Aua%2B%2BN5lIQk9DMEnSP1xO2Jp%2B3SZxSq6HZoUT37EcgL37Uu3RQnKJHLaoDY3tMROU0TKZxpII3vKSyPfxnnfvBWefdP%2FaDisQ46KmUqvaUdaONgP3id88c1TcPR%2FAmUAKdnI&X-Amz-Signature=b56c16fe9f08c14ec0dcb94aed43e0dd72c1d1a6653ddadfdfdea11175cbbecc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
