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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2DLL3X%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIA99Bvl6l3%2B3NGpQbwaZnNJfLahrZAnOgFlXOGNmOSUsAiEAy0BwVOrUHjrFnYSwadfgQhbFrTfv56%2FKgO3CcthekGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJN4wvMhcUqnnPuTWCrcAxIzSRIv3zX5Er97qkz15E0EAKiGQPtzKIy1R43BQzebxDpvbQ98AJv98wb6zXhgc4R1XmSUC%2BNJkcPR0JWhYDJc1PVEy60teaKoi2WAPCkseLWsDGleLi%2FefrMk0F0hrE5%2F%2FqiRQGS3fKR4DCA0aJDgdSFTL%2Fxrg2aWLmRREWWNYppeqV03pWz900uHW%2F7KCCd6TZ5TBSWzk2h9taB7utDSDPsjTEVqBDyu1UEOQvV6zVEeCRtTNoO8ytByqoH%2F%2FrfqYphzhgDGCczih%2FWt%2BWPxzEwJUmpQCD7UDmzWWzOJt%2Fk5HIX%2B%2B7PSu3QSLgDk40G6dnqlZWzMy2%2FAtrkiuMWTuTMFxG7gZQ7F4O6J0F%2BN7oSPJE43XMCEzJ8I%2FsPxbz5MfjExwqStRUwzPiybDPQrUjRSMVGjW8dsfQMBbq7XQXcdsnd3g4PL%2F6vrtlxlu6%2B0XeVAU0MraA6EmKBKSWytvJ%2BDk7OI46fmD0oMe9dflF0iQ5LECpNAi%2FbPap8j7EL2Kjv%2BKPLbcnZz0fNM1H7nqwGMZm4uzQTaUthoSPrAmH%2B%2BHuFZjO1baHYgQlMtd5YJJysbZtZXP0eYKCvpRZdYWIAH4%2FmL9GIkoMFFE%2B0t6G1t6kHS2F4gKDtuMO28%2Bb0GOqUBbX0p56UcZn9X5PHOiO2EZyK4TP6j6yrmS1jMeJOWK237%2Be%2FQ%2BA7%2FgKw1puO2SOY7HxhIpZYWudPlu49fM1if6%2FGUCAGwEgD2DbwpIf%2BwZKSrVd5e9nOex6se9l%2BLkLS3IetlKSmZblQnyDrgWe1Zk4pgNLq75ak4d7OPrIgnxQg2yvO3wzfH3HEgGvzbOOmCH5bbHzpRFa181OL4eVMQW9aBMOyN&X-Amz-Signature=401cf84b5fcda0ff7b8515aec17401d3a4768746cc755f6c22b81e43de14df3c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2DLL3X%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIA99Bvl6l3%2B3NGpQbwaZnNJfLahrZAnOgFlXOGNmOSUsAiEAy0BwVOrUHjrFnYSwadfgQhbFrTfv56%2FKgO3CcthekGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJN4wvMhcUqnnPuTWCrcAxIzSRIv3zX5Er97qkz15E0EAKiGQPtzKIy1R43BQzebxDpvbQ98AJv98wb6zXhgc4R1XmSUC%2BNJkcPR0JWhYDJc1PVEy60teaKoi2WAPCkseLWsDGleLi%2FefrMk0F0hrE5%2F%2FqiRQGS3fKR4DCA0aJDgdSFTL%2Fxrg2aWLmRREWWNYppeqV03pWz900uHW%2F7KCCd6TZ5TBSWzk2h9taB7utDSDPsjTEVqBDyu1UEOQvV6zVEeCRtTNoO8ytByqoH%2F%2FrfqYphzhgDGCczih%2FWt%2BWPxzEwJUmpQCD7UDmzWWzOJt%2Fk5HIX%2B%2B7PSu3QSLgDk40G6dnqlZWzMy2%2FAtrkiuMWTuTMFxG7gZQ7F4O6J0F%2BN7oSPJE43XMCEzJ8I%2FsPxbz5MfjExwqStRUwzPiybDPQrUjRSMVGjW8dsfQMBbq7XQXcdsnd3g4PL%2F6vrtlxlu6%2B0XeVAU0MraA6EmKBKSWytvJ%2BDk7OI46fmD0oMe9dflF0iQ5LECpNAi%2FbPap8j7EL2Kjv%2BKPLbcnZz0fNM1H7nqwGMZm4uzQTaUthoSPrAmH%2B%2BHuFZjO1baHYgQlMtd5YJJysbZtZXP0eYKCvpRZdYWIAH4%2FmL9GIkoMFFE%2B0t6G1t6kHS2F4gKDtuMO28%2Bb0GOqUBbX0p56UcZn9X5PHOiO2EZyK4TP6j6yrmS1jMeJOWK237%2Be%2FQ%2BA7%2FgKw1puO2SOY7HxhIpZYWudPlu49fM1if6%2FGUCAGwEgD2DbwpIf%2BwZKSrVd5e9nOex6se9l%2BLkLS3IetlKSmZblQnyDrgWe1Zk4pgNLq75ak4d7OPrIgnxQg2yvO3wzfH3HEgGvzbOOmCH5bbHzpRFa181OL4eVMQW9aBMOyN&X-Amz-Signature=24eac373581db0593d64715b12ae291a93ea6ba2b944df2540810d1d0271c227&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GFUVRIY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDMDuxM%2F2azXpPeYRko7lTnd%2FWX7PSYu%2BgM5g3dVUuhMwIhAJyLKRAeI%2BFdS%2FFYjNk63PokQ5khRbnpgVOe3NNAewFkKv8DCFEQABoMNjM3NDIzMTgzODA1Igw0gUI3eee%2FTz814toq3ANx5gUlErk8%2B1joj0XOg%2BVdWbc5SExX1r1FxHST7%2B7PXJD5teNCHVWMRMhChcR%2BogBcuAPoOcoLgjlc1u6Bt%2FVrATnIz9iWCqJroRAkPIrgmgpz%2B6%2BsfGzk%2Fi%2BJlHLkWG743EWiIP55waBJpxttr5zhv6ECAhlrUSnc901sLIAdSyWCOoKH20GEUFXjcKeXL%2Feh6OwgIDajShZeTry39RBqMP2AFEi6O%2BB%2FSqurNgDNXYHQCP8JXCrrdGAn6KHQ095BEx6iYB4Wqce6IoNqLqHYIoo5BmkW%2FwDoh2BwvwPNAmeDDQ%2Bp8PyTenF36B1Y612nVG%2FMCfJXnDWBbZBKnT0A0b9yPR%2FZ6edreU2y0qnOni46vsCl1Cy%2BeOwzVzygNbxTBcKKx93LWupX7mc6Hrawydsju%2BYmrIEQ4AQd9%2BelLEszyJq7aaTUQSpprEUHc5m%2FvM0FKuSq6jnfxbW2MkQ5N0SGdLwBLkvdT29eNp0z4umtK08SS31Ngvo0fXLgn0xbbm9zA8gU8okyfdIiTuxuebSwhvTAkM3Tdb8TVh%2F1ZaIRyCy7nOB%2BDxLA%2Bm14hVVqhrHWQ7l81yQowrjLWMYngz5Rtk%2BewUP1ODFpOunEI%2BrlURxyKFJyTm3AEjCsvfm9BjqkAWC7Bqo4G26ZUNLSOsMBG%2BdRGcp52761oREf7mT4OqPUc%2F%2FPA1oIhNkBPmnuyVCRR5MbxU4%2B%2FE5%2F4l2S1izYMXWJ%2B1mfBSlX4R0pW%2BHKv2NmxMQlOSlzK69K6IHKEXL0ZfhMwTP43wWcBSK2pPwK6FhLyKeVnUwND3VMduRI4vXQUXJxWDTH75rkYSv7O2LTqoTiCgLDF%2BKDOp6WORLk%2FGbj86p%2F&X-Amz-Signature=de4ffd1cbfcb59fdc3f9594822760605eabddc20ba557a82dce5e50448770f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAARA35%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDTSrqmnkZ68nQTcRMPXfGnwe4UBmBaVRybNWizvYF0RAiAsopC6hQazI8Aqng4lgtLguNfzJbEaf0cWbjlVhOIScSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMuRTzocyalkbW0%2BudKtwD8vvaL3YAYTQRW7gi4q5g5wY1K6XO7d2QSgioErdKXnKNPPbfnzjawszEXTMuCOK6oV5Gk%2BoM70WH7f4ytJOI%2B%2FCvjffxgGJwgZKsS%2FJdDJX8XShaA01O4qYBuRG4IEKKiIfbxmucIB1pbLrmAziOfMPjWkRLyODjJtKVuWJ7w0Oa9PqqbowEzRCL3cR%2BUn6a5cBdtlUUJMCq55LPYasc%2F%2Bxwcg4%2B1BUdpziH4tzZm4YJAov%2BaXyGVM%2BePAQFjFMo%2Bo0m9V%2FJ%2BqPcQtHz5AcrRxMoeLX8CW7gz3gSCOmqnJN4mzLpDhbXRuVTT9Wax%2Bof2PM5hNdpRCTPLxZQo5n%2FhgHt7MyXnw%2Fs1KUC3sjtrJwe2pcWljE7mEnh7TDn2VYfm4fXmjg2YXniui4m7qWHRzO0qhJBVSoKEooBH%2FoYUcUUY5yqS%2B8QbVxbD1kUJBMNIdKWaEebEgtWft8me8ZC5%2FxmefKWBpodtJj3P8Pe5hxW%2B62SVHevZcsT22PMqWr3OUPGl2qwwACtlQIUV%2Btpu4LJRzG6OuXdgU8eLcozkLHkTNnP5HWUOifV2Fr37td5Omf5XH8Ol5%2FU5NThoYPYNq5VUSPZ9jlkPeGbUobi6yScvyijEgf43%2FpMnpIwjr35vQY6pgGAcJJocjyDDsZ80SNFmZBtOstrioOyE6bMc3SZZGhlrRgjFE4cJcshc%2FuZIOFhXouFnmEQo9AQFHabC1bIxdCT7qq3xpgNeXXDPTKU5O4uGDizwOXcPr2wmSqT7WY0a2v0CjbEjovXxNVK4LU9%2FZ0MH7tP9oeL2ei2BAY6rO7Xzm1LhkAhUIIy3SxsFsFjfjtbLXplLsKuu2iL2VOUCfdJDsr28oTP&X-Amz-Signature=3c5cb6b32fbdfef305e9c51dc93c2e2776de0be83affe7a31b348105d9cb99ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ2DLL3X%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIA99Bvl6l3%2B3NGpQbwaZnNJfLahrZAnOgFlXOGNmOSUsAiEAy0BwVOrUHjrFnYSwadfgQhbFrTfv56%2FKgO3CcthekGoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJN4wvMhcUqnnPuTWCrcAxIzSRIv3zX5Er97qkz15E0EAKiGQPtzKIy1R43BQzebxDpvbQ98AJv98wb6zXhgc4R1XmSUC%2BNJkcPR0JWhYDJc1PVEy60teaKoi2WAPCkseLWsDGleLi%2FefrMk0F0hrE5%2F%2FqiRQGS3fKR4DCA0aJDgdSFTL%2Fxrg2aWLmRREWWNYppeqV03pWz900uHW%2F7KCCd6TZ5TBSWzk2h9taB7utDSDPsjTEVqBDyu1UEOQvV6zVEeCRtTNoO8ytByqoH%2F%2FrfqYphzhgDGCczih%2FWt%2BWPxzEwJUmpQCD7UDmzWWzOJt%2Fk5HIX%2B%2B7PSu3QSLgDk40G6dnqlZWzMy2%2FAtrkiuMWTuTMFxG7gZQ7F4O6J0F%2BN7oSPJE43XMCEzJ8I%2FsPxbz5MfjExwqStRUwzPiybDPQrUjRSMVGjW8dsfQMBbq7XQXcdsnd3g4PL%2F6vrtlxlu6%2B0XeVAU0MraA6EmKBKSWytvJ%2BDk7OI46fmD0oMe9dflF0iQ5LECpNAi%2FbPap8j7EL2Kjv%2BKPLbcnZz0fNM1H7nqwGMZm4uzQTaUthoSPrAmH%2B%2BHuFZjO1baHYgQlMtd5YJJysbZtZXP0eYKCvpRZdYWIAH4%2FmL9GIkoMFFE%2B0t6G1t6kHS2F4gKDtuMO28%2Bb0GOqUBbX0p56UcZn9X5PHOiO2EZyK4TP6j6yrmS1jMeJOWK237%2Be%2FQ%2BA7%2FgKw1puO2SOY7HxhIpZYWudPlu49fM1if6%2FGUCAGwEgD2DbwpIf%2BwZKSrVd5e9nOex6se9l%2BLkLS3IetlKSmZblQnyDrgWe1Zk4pgNLq75ak4d7OPrIgnxQg2yvO3wzfH3HEgGvzbOOmCH5bbHzpRFa181OL4eVMQW9aBMOyN&X-Amz-Signature=af3a428e94c40b9974ff4ddabe4e2926ca2e71c4f976aedc67b1110a4cab86aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
