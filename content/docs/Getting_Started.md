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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NUJLA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCaCZvv2Dc3B3n3ziOK2as7iFx4J%2BqG3awlP2ItvCKKzgIhAM0sZhddEh7htQA6jbSLuOO7qu8e4wvg7EFrT9OXmINhKv8DCD8QABoMNjM3NDIzMTgzODA1IgynsL1Dyi2oNwfi6Xoq3AN065%2F0GY6dmS1%2BVPyBseZkZJr%2BGMn6TxHMx1X3aPPiW53KqaU6kOZcYiB4hAU1%2FmUygeyCHBTlUjewu8MMXdz8vd5J21LIr2Nr2t5%2BCEReFvVb99mAsylxE5kavjKGKKoCe7TEi1SuwY0tnktTcX6NA9i0%2BuOoI0lY0OUnZNgyKT4XZrt5gQZaHqlIitjBZDa4RixglThve3BjitfBRGlSl0MEKiaYE2HO8g2LCtyPW9%2FpIP3RTH3sg%2Fi8is1TP2nlaxcfBxeY2vn7o%2BoZVarA7mwtM3DfDS44tIJLWMoAWgDrlI1%2FK9Bd5j4BbrIdJrfN%2B%2BY8K5EPn04wZFLixT6yGSjpcktWPH5CbVsboUtuvowLDD8bA810pGX%2B8hbDm1TfcHXrWpm6s48uWgB%2FD1nxkN3hCZAHoFtPM%2Bb%2FUMXvSLzDf6QqmmQ%2FdtaUmSqVTgZZiJL1TA1pMv9Liao%2FcrgGLWJmKsQy0WKF%2BDZm%2FldX6Zb2GRAOoVrSDEs0Q1EWdCt2XuzPZ29QIgMnybcv0d%2FNIcRLq0cvsq3%2BUUe55wwd3rVjVGngtgo0VoKTFXa168XmaLXr8DCkJDsAJUwqolQ9R6eR5eziXyJpuyLVh19li1KKKQGQnoiCcNx5FTCurvW9BjqkAUsngHso%2BWPeA6OuZcCfgXPDlOSTKT1dNJbOAyTnpGUg31VSMmik4FrJh0%2Bd%2BSaF3WW6itui6YLukrOZC5Vr5diZM28LrdV3kIIkHZlLZDHV%2FfnOJhhNOPkWfc4tReNgcMDF8CPatdr1zCD9fIgZrW%2BzmY4xXcb1sYqauIWJyzsGU%2BTn%2F8IFOSBVecFqmRGaND%2BlGc3oUm5Ns8SMxRq84oFdEurj&X-Amz-Signature=c6a5c6ed33ab0679886e6b5158a446537df6a468fd632599d6c0fbbe17953327&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NUJLA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCaCZvv2Dc3B3n3ziOK2as7iFx4J%2BqG3awlP2ItvCKKzgIhAM0sZhddEh7htQA6jbSLuOO7qu8e4wvg7EFrT9OXmINhKv8DCD8QABoMNjM3NDIzMTgzODA1IgynsL1Dyi2oNwfi6Xoq3AN065%2F0GY6dmS1%2BVPyBseZkZJr%2BGMn6TxHMx1X3aPPiW53KqaU6kOZcYiB4hAU1%2FmUygeyCHBTlUjewu8MMXdz8vd5J21LIr2Nr2t5%2BCEReFvVb99mAsylxE5kavjKGKKoCe7TEi1SuwY0tnktTcX6NA9i0%2BuOoI0lY0OUnZNgyKT4XZrt5gQZaHqlIitjBZDa4RixglThve3BjitfBRGlSl0MEKiaYE2HO8g2LCtyPW9%2FpIP3RTH3sg%2Fi8is1TP2nlaxcfBxeY2vn7o%2BoZVarA7mwtM3DfDS44tIJLWMoAWgDrlI1%2FK9Bd5j4BbrIdJrfN%2B%2BY8K5EPn04wZFLixT6yGSjpcktWPH5CbVsboUtuvowLDD8bA810pGX%2B8hbDm1TfcHXrWpm6s48uWgB%2FD1nxkN3hCZAHoFtPM%2Bb%2FUMXvSLzDf6QqmmQ%2FdtaUmSqVTgZZiJL1TA1pMv9Liao%2FcrgGLWJmKsQy0WKF%2BDZm%2FldX6Zb2GRAOoVrSDEs0Q1EWdCt2XuzPZ29QIgMnybcv0d%2FNIcRLq0cvsq3%2BUUe55wwd3rVjVGngtgo0VoKTFXa168XmaLXr8DCkJDsAJUwqolQ9R6eR5eziXyJpuyLVh19li1KKKQGQnoiCcNx5FTCurvW9BjqkAUsngHso%2BWPeA6OuZcCfgXPDlOSTKT1dNJbOAyTnpGUg31VSMmik4FrJh0%2Bd%2BSaF3WW6itui6YLukrOZC5Vr5diZM28LrdV3kIIkHZlLZDHV%2FfnOJhhNOPkWfc4tReNgcMDF8CPatdr1zCD9fIgZrW%2BzmY4xXcb1sYqauIWJyzsGU%2BTn%2F8IFOSBVecFqmRGaND%2BlGc3oUm5Ns8SMxRq84oFdEurj&X-Amz-Signature=4f4ca7f5099836957678087075cb90b9f67ef7873528785c8e14c09c2fd02bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S2IYMXG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDYQIZsrudOkfbUvRVPo2Vio0JTL1FbAQeG%2FeYZeVCQwAIhAJYBYayVXz%2BUyG%2BSjnpuATAzU%2BZRx2dQlZRMaKf9fA3cKv8DCD8QABoMNjM3NDIzMTgzODA1Igwbtdiesu3Lt74kRBEq3ANfXtUvpEPvsSAF7MDnkBcVHsMZOTlPrRf6I56oLwWk7bmfhNveBVikwlX038IKcyyFwc2Qed9z8BGP427OEwYAMIHPY54LsWEZESq%2F08O8GKh0SYokcmWaj%2FxL73faeSKlYKcjMZ6tOMrjMpFl%2Bl%2FGXdH63auEI32LC8yIqiI30JxKAB44M5XV6wv9POh%2FtjnCfiqSRNB%2BkbrX2g5iJT1OU1LgQ2mKVJ7%2BtBmh6km5sbTGW9KVNeniuGCt4qg6%2BCd7F8HqrWFHE2o6HKRrRTZT8oJOwPPcIQ8TVNpr%2FhUd6P%2BWZIk6eauvSFS8xljoTKMRfGAYGIznzW29%2FjeYmaDmyym%2FdZnppGqneh%2B2%2BYDoVaK7lir%2BNSSAqRAOsmopzamcKmfHCm2KwTo8w6361DAn3Zkrw%2F9yp1xyac%2Bls4qOnMLJWL1Yg0HdwV7UGlaA2TuRN1dqfjlNeRaWEWY2BYbh9jiqTD0t5JK0qPS%2BlIpMJzqlShrDLIrtXFZ3d%2BCB6jwunijQzYN9URUsDXrX1jgNyp2n3IujGgNoD4Am9uyARh49o3QzzskO6aokCUGJD7kFfv0%2Bdv8Ga%2FBDaV0jLz5fXnJpCK5M7PwM3ZAjVVaYxXN0%2Fkgsi7a1OkjT2DDQrfW9BjqkAc%2FIOnTGevBTttXLQjrQVThdiIRp2%2B9kiQll%2FqJlWfXfz8JG7fK7IRnha0cDyvK5%2FpkbukhXvUNLh3Y6W3yOf3W3x0G%2BcYO2IobHNtFmykwxhlXcw7Wr2Q%2Bxxrd6CrrIKAgJi6U%2FkEhY0txO4qoA2ungkUlH3kxug9CaqvjrlIBWJMYMxEV%2B0q7E5zv2dgjudsGABlswE98%2FfUhvXH4IV5IaZzHe&X-Amz-Signature=8e320bb9c648f9133f2178bd5c6935ae58740582613944066842a9dbbfb93cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFEFZF3L%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDjTqMwpCfxqzAfBpQJftJ8b2A7wMqGkXpLobsHgZX%2BTwIgcG4ztpSE%2BfQN9I5H85Bs%2FW42f%2BH0YCfMRav%2FuKTVNoEq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGOBnXoGE%2BIUeAOOjSrcA8MruaVRLwc6rxLcR0OUawzGDDb%2BMPUu0Xj8Jy%2BwaU0741Su6U8P%2FJPErxDFOrPC3jNjhoFOY5eU1L8Iun%2BLlMi4SBpN5gge9LK%2FNwV3BwPAHyWKhTA9c0z5PN0ulsCuwGaiuiRch8rqmz9iWK1O9KPjUDGliMhW%2F8%2B6cuuwJzRI61xHaxTfbc%2F%2BjFY02PSaCiUPlLFNmn6Qc7PIozrcRxG%2Fpq7P8wKv9MdVbjPSm7z3oDkIhur5kq%2BkBSkztG8IT7E70ujke7tjHw21yLXLJ9mN7PKU6kUq5eONOYKaUtE7s81gGEo8WANoTbIY0RS0hKtyx8vUzeacQADcKuUL8oKPXh%2B%2FlVsOdNCtCXKeXGY7ovyXr23Oi5r%2FjgDtsGGaUqTLwiKlrTgIau%2FAHDiCt3%2FNKXUm2CgYYsgQKaU6tHdF9QjNxA40ZanOm8iUckXx1jNXjZYUX18wyhy9S7Gr7hxCyCSqBLHwyho7OdPdQtDdAJ3OukWoPbEp1xiZ4Hw%2FiD4Iri7xBvfr5ysYSw0FCJAP5noz%2FjtUfbUEejeA6NBDv15DEo0nrGwJUP%2BMfQk93noBBNMXUghBpwdplgiXm2sLg%2BnScFwMggVXQCZZ2g3Eq%2FiKLZAHodLkarVeMIWt9b0GOqUBy0gWtyi%2Fn7BjaWj4rYAvsvbXd1LjSL1ZEefZYFW9KZDmEumYRxzRhBH7KwPGaZ1V%2Fw25N3ntAthew%2BYOzUiQ8Z1Poe%2BsV8BxcxvQO5LOe%2FvtqgVzvbJVaPPsDJVjRP%2FNbbzrg%2ByCQ1WIckA8l2O7REuaSXtRwBuxiSOoPzqqexyYNKJ2bmXGyVZf8FNHp%2BEDJDE4tMfYkT2BwlN48EeRJnOCrt5f&X-Amz-Signature=c6a677bf827a37a02e97d551008d94c19156dae4f3dc2e65ff2b7c28f846f9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU2NUJLA%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCaCZvv2Dc3B3n3ziOK2as7iFx4J%2BqG3awlP2ItvCKKzgIhAM0sZhddEh7htQA6jbSLuOO7qu8e4wvg7EFrT9OXmINhKv8DCD8QABoMNjM3NDIzMTgzODA1IgynsL1Dyi2oNwfi6Xoq3AN065%2F0GY6dmS1%2BVPyBseZkZJr%2BGMn6TxHMx1X3aPPiW53KqaU6kOZcYiB4hAU1%2FmUygeyCHBTlUjewu8MMXdz8vd5J21LIr2Nr2t5%2BCEReFvVb99mAsylxE5kavjKGKKoCe7TEi1SuwY0tnktTcX6NA9i0%2BuOoI0lY0OUnZNgyKT4XZrt5gQZaHqlIitjBZDa4RixglThve3BjitfBRGlSl0MEKiaYE2HO8g2LCtyPW9%2FpIP3RTH3sg%2Fi8is1TP2nlaxcfBxeY2vn7o%2BoZVarA7mwtM3DfDS44tIJLWMoAWgDrlI1%2FK9Bd5j4BbrIdJrfN%2B%2BY8K5EPn04wZFLixT6yGSjpcktWPH5CbVsboUtuvowLDD8bA810pGX%2B8hbDm1TfcHXrWpm6s48uWgB%2FD1nxkN3hCZAHoFtPM%2Bb%2FUMXvSLzDf6QqmmQ%2FdtaUmSqVTgZZiJL1TA1pMv9Liao%2FcrgGLWJmKsQy0WKF%2BDZm%2FldX6Zb2GRAOoVrSDEs0Q1EWdCt2XuzPZ29QIgMnybcv0d%2FNIcRLq0cvsq3%2BUUe55wwd3rVjVGngtgo0VoKTFXa168XmaLXr8DCkJDsAJUwqolQ9R6eR5eziXyJpuyLVh19li1KKKQGQnoiCcNx5FTCurvW9BjqkAUsngHso%2BWPeA6OuZcCfgXPDlOSTKT1dNJbOAyTnpGUg31VSMmik4FrJh0%2Bd%2BSaF3WW6itui6YLukrOZC5Vr5diZM28LrdV3kIIkHZlLZDHV%2FfnOJhhNOPkWfc4tReNgcMDF8CPatdr1zCD9fIgZrW%2BzmY4xXcb1sYqauIWJyzsGU%2BTn%2F8IFOSBVecFqmRGaND%2BlGc3oUm5Ns8SMxRq84oFdEurj&X-Amz-Signature=95de928f3a147475750c04bab1ea33fa04662426e02c31ace464c23d942d8c80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
