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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZPU3PO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKUfSMiXQiudyxrCVQSqdfYK55UlvFTGKV%2Fu1nIzs%2BQIgTx4igUWODP%2Fe%2FHeBwLL2pAYoaOzewTZynkr%2FV7baVBIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNbFwF0GBezEs8g7KircA3JcbAIfpBTSdOIWlQw9m%2BUqpmDOZEOk0EaAa%2B6rnCWpU%2FmW2H47lFXRnFpQeOhNr%2Bz2ODNVvv1%2BWvGGYF7Gvh9TtP1nnBpvulAT5CpiZd2BhKr0sDv4rJHBMrq8j7ERnidsRjp96AhR3RjUU7mx5nQ759PmKSe2XkoU9C6IhdPAM%2FD2lUX%2FMTrj0S89uawZCC2qDtwVSn%2Fl%2BAnuWoU6BzheSTgCdi%2BZRwOxZMvNOW4IQnxTi%2BY%2FhhxsN7gUg61Q3Z%2FZkqpOlmJeeqs%2F9gZhuB%2F6kd4zyMFyL6NUo4NlWp1ZCH6ViUG5gC%2B3voXf8jjsCn%2Fos2ORmu6%2B1KGnpLc6Q81ElhEcH4Ssr57XxDR%2BwpVPRoG7r8SfRbbYXcAedtwx9kzQaxvyiJ%2Fkw3IU0gmRQsyO20tj1OGdbsPMo9572HbDetSmitig%2BxK7UFxNOAnesrJrhfDsMq4%2BUaq317mLyDldP5wwHGDBVljnESoAJxO%2B2dTIUMIjNJEq2Jk1v91XFasPpdYWW7KoPMtLmb3x8BYl1WpZH9TiiA%2BqGlxpx%2BONBSox7zWF8h%2Be2nWOnZpQadrIE8BwdN82rCVqHHw0IKyuhfQG6yB2osFhAgIOiHFR1QgcRUuG%2FQbrg4TOMJr%2B4sAGOqUBa3lyZ0Vl0kfKT%2BNohCAuDSD%2BtiNvChmhgIA8r0w6V8GBemqjCPihkQN0PQirKR0fEWg7bIa7uJwwnifqItXsbMjhTVRL91xZgZ2TLSqwaJl6vogG9ykzVQ%2FhynXDPzathDh4J5AC83BoDkRbrUW6KpnT330aamHsymC3ddMO4uj3vKALOBblXzigOOmzgU3x60%2FEcXw7USyslIgbzQ3yoxIbW%2BQd&X-Amz-Signature=7bee92574d2dbc8dec633b901236ea3596abef5ab18fd4425b97dd6851bd62f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZPU3PO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKUfSMiXQiudyxrCVQSqdfYK55UlvFTGKV%2Fu1nIzs%2BQIgTx4igUWODP%2Fe%2FHeBwLL2pAYoaOzewTZynkr%2FV7baVBIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNbFwF0GBezEs8g7KircA3JcbAIfpBTSdOIWlQw9m%2BUqpmDOZEOk0EaAa%2B6rnCWpU%2FmW2H47lFXRnFpQeOhNr%2Bz2ODNVvv1%2BWvGGYF7Gvh9TtP1nnBpvulAT5CpiZd2BhKr0sDv4rJHBMrq8j7ERnidsRjp96AhR3RjUU7mx5nQ759PmKSe2XkoU9C6IhdPAM%2FD2lUX%2FMTrj0S89uawZCC2qDtwVSn%2Fl%2BAnuWoU6BzheSTgCdi%2BZRwOxZMvNOW4IQnxTi%2BY%2FhhxsN7gUg61Q3Z%2FZkqpOlmJeeqs%2F9gZhuB%2F6kd4zyMFyL6NUo4NlWp1ZCH6ViUG5gC%2B3voXf8jjsCn%2Fos2ORmu6%2B1KGnpLc6Q81ElhEcH4Ssr57XxDR%2BwpVPRoG7r8SfRbbYXcAedtwx9kzQaxvyiJ%2Fkw3IU0gmRQsyO20tj1OGdbsPMo9572HbDetSmitig%2BxK7UFxNOAnesrJrhfDsMq4%2BUaq317mLyDldP5wwHGDBVljnESoAJxO%2B2dTIUMIjNJEq2Jk1v91XFasPpdYWW7KoPMtLmb3x8BYl1WpZH9TiiA%2BqGlxpx%2BONBSox7zWF8h%2Be2nWOnZpQadrIE8BwdN82rCVqHHw0IKyuhfQG6yB2osFhAgIOiHFR1QgcRUuG%2FQbrg4TOMJr%2B4sAGOqUBa3lyZ0Vl0kfKT%2BNohCAuDSD%2BtiNvChmhgIA8r0w6V8GBemqjCPihkQN0PQirKR0fEWg7bIa7uJwwnifqItXsbMjhTVRL91xZgZ2TLSqwaJl6vogG9ykzVQ%2FhynXDPzathDh4J5AC83BoDkRbrUW6KpnT330aamHsymC3ddMO4uj3vKALOBblXzigOOmzgU3x60%2FEcXw7USyslIgbzQ3yoxIbW%2BQd&X-Amz-Signature=58857ce6b803639375e763cd937a700ff12a145423ba28e4b3f6063ad713525b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZPU3PO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKUfSMiXQiudyxrCVQSqdfYK55UlvFTGKV%2Fu1nIzs%2BQIgTx4igUWODP%2Fe%2FHeBwLL2pAYoaOzewTZynkr%2FV7baVBIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNbFwF0GBezEs8g7KircA3JcbAIfpBTSdOIWlQw9m%2BUqpmDOZEOk0EaAa%2B6rnCWpU%2FmW2H47lFXRnFpQeOhNr%2Bz2ODNVvv1%2BWvGGYF7Gvh9TtP1nnBpvulAT5CpiZd2BhKr0sDv4rJHBMrq8j7ERnidsRjp96AhR3RjUU7mx5nQ759PmKSe2XkoU9C6IhdPAM%2FD2lUX%2FMTrj0S89uawZCC2qDtwVSn%2Fl%2BAnuWoU6BzheSTgCdi%2BZRwOxZMvNOW4IQnxTi%2BY%2FhhxsN7gUg61Q3Z%2FZkqpOlmJeeqs%2F9gZhuB%2F6kd4zyMFyL6NUo4NlWp1ZCH6ViUG5gC%2B3voXf8jjsCn%2Fos2ORmu6%2B1KGnpLc6Q81ElhEcH4Ssr57XxDR%2BwpVPRoG7r8SfRbbYXcAedtwx9kzQaxvyiJ%2Fkw3IU0gmRQsyO20tj1OGdbsPMo9572HbDetSmitig%2BxK7UFxNOAnesrJrhfDsMq4%2BUaq317mLyDldP5wwHGDBVljnESoAJxO%2B2dTIUMIjNJEq2Jk1v91XFasPpdYWW7KoPMtLmb3x8BYl1WpZH9TiiA%2BqGlxpx%2BONBSox7zWF8h%2Be2nWOnZpQadrIE8BwdN82rCVqHHw0IKyuhfQG6yB2osFhAgIOiHFR1QgcRUuG%2FQbrg4TOMJr%2B4sAGOqUBa3lyZ0Vl0kfKT%2BNohCAuDSD%2BtiNvChmhgIA8r0w6V8GBemqjCPihkQN0PQirKR0fEWg7bIa7uJwwnifqItXsbMjhTVRL91xZgZ2TLSqwaJl6vogG9ykzVQ%2FhynXDPzathDh4J5AC83BoDkRbrUW6KpnT330aamHsymC3ddMO4uj3vKALOBblXzigOOmzgU3x60%2FEcXw7USyslIgbzQ3yoxIbW%2BQd&X-Amz-Signature=ce4ad8c6c8388182aafa72c2578bce98a5857ac9d377d6c9496410a1a50678d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM2QOXDE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCxUpYa4Ue96TYvNdbcpe%2Fg1P0d2miFUplnR1DdSwNbwIhAJ9fN3jych9rjx3qThblQaMdFB9AU4Rjg2S5z%2FfFquObKv8DCC8QABoMNjM3NDIzMTgzODA1IgxKwbRcmINanbX7md0q3APQ9ZM8PfqD3kq5zo9pgeqFH%2FPuFF6ZL6k50ZsJwkoGZ7MOg45Ocbb2dYI02RIjGv6yY2yZH09u%2FdHWhlPmBdPR66wSGwF%2F%2Fa3WEaZDCesrnArqmg7umPgKsuQfITXm3uVAjeE3RA91XRBHHkhJT2NsuRn8ugfzD%2FnsUl8QvZukDkIUxbDQ2I8Co0I%2B%2BROtkuVSKwH9WEbqTGOVF4F5hs7wAhStfRtxrwfloXYm86vUELmxeQayXyPJSaywqEyprSiMrwMdfSB%2BGPaAYicWdOuaDyJwdNnmiJEpemroUu4mM2%2F8HBKPLPSXQCK62BtkG2s%2BGUjkjhJC63IDNjHeW4afcF3TUEHuHa%2FQNu%2FbapRffXFJJO0rWzjyPP5d7%2FySloaPb991hXHIiYEB725vD%2F0jHk7Nko6MAcIFwnt9yCbwqW8VcuvvMpWPpvMbjSCZS9qwyzV6d4WJOn60YqfXA8arQqqeoYwnp5MOZA%2FJDra3%2FqM3kKodYVwFCLLoagNShKnv80hXG6yT2%2FprrTYUtfbnYod9DSf2cz0EO14wCMpu8l4KAHqLTGyThMRDeohIHvr%2Fk2Bkmg9YNxil%2BIzyTz96wAM%2BK8j5F5IlgzWPHqLKtKr3fvbcuxlQ5wGakDCn%2F%2BLABjqkAVqLrkGpTGGV7CSw2HH%2FVxkV0ImlpVQ0zsbjUz5z3nxF%2BVJXfG2tZHzIoTPpTWFyPVbPxzaoZerkGNhxQSaTdlK9ne%2FWmAQN8bEdSIcrwL3n%2BAUZmTz62B%2FwHU7OaH5RxgXYLD9LfyZAy8RTRon3%2FNfVveWa5IhAeZTkHK0Uj0tL%2FWVyKMwI8%2F6%2BTUSbrnGwQL3Fvi7IBu7p5yKcRarleVFWjnp5&X-Amz-Signature=7c3037455398efe4881391823bc6fe209097e5c2d8e15e8d0f39fc3cb13b614b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ6ZZU7E%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCejRcWzaH9k3Nav2aRbsIiIXxVNMc3bQ6gJLEa7Np3tAIgD79fi%2F1zBwqj%2BOV2E%2Bq52uCqJbR5vvsAKybqpfbMvRUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFpfUyNUh9u0PCvmXSrcA3y3B0L%2Bnghygx6hXCNcJ772B6cL%2FNFv2UKFZU0UTDfZS8Gh%2BVr%2BVGen7XH0WvYOkU3b6wgYj3XQ7juQ%2BF5svISU59Nn%2BW2%2FH56VE%2FlTMAIgAMkOTzJut9zd81z8kRmpZo%2BTbg0OrrBDprtigsCvAYWdxd8%2By6vHvj6M98%2Bjjh9T%2B6mfRo95XVgrtIAvwlzz9gcFRAlYIdt2heq3SpsidUVuGE7SN2qfh1vlKCzr%2BajSbpPU1UudaRHcJ%2B01jz9pb%2Bc6tj4Fw1Q0rjltHXUx5qqDonRMwScU3SqrvBW8G8JluqFziR6CdFIzNwY7x%2BK2lXpgSKJZpL8n%2F%2FtZC90zl4ZR2NxoxoJKVNXOhKyL81MHupoKCrSqraMPpXiGHidiWaS0qF9K%2BYe63SixbtuSr92j1Id4Iv%2B%2BBAOVrqkGH4KzDaG04LYdur4zh%2FI%2BtIS52bOMD5Hkw%2F3wGFsNHq1rliQTEVFj9MrZ4x7GrdUD5d1n44lEjY6OfftvnvwVyCVi%2F5lhFBjO3F9XxrBSHVFododEHapmXIIU4sHw8ZBrK4PfezZSjpsnuo7nk3XTUywR%2FczuP8AUTekmq5%2BQ15qdHLErGXINM29ATt4%2BLep%2BLEi%2BVEfF2N7zENJRFjfvMOOK48AGOqUBFXBo83N7ZPznmI1aN60Ir7EAwW9Gj4phPi7CKfHQ8yIFTz%2Fr2GhqXEYdoBprZl%2FNr1IvoWiBgjtAA1YHb5xhHTRhJT2ULUXlPuWs5%2F1IzpUziMDBgndx71BqM7BeCFhWWV0SsqgH37rpJ5PfdXDYXcZyUC3vm3tQ%2FeXfT4gEg9pPK5q7OLIqVqcFiVusS7NrPi%2BlBiWlddfcjPpuvhlyXZiz372j&X-Amz-Signature=26fbc16777f9189f64698a7a521a3aef9f909c78d9946adbcb767aa3b1336dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZZPU3PO%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEKUfSMiXQiudyxrCVQSqdfYK55UlvFTGKV%2Fu1nIzs%2BQIgTx4igUWODP%2Fe%2FHeBwLL2pAYoaOzewTZynkr%2FV7baVBIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNbFwF0GBezEs8g7KircA3JcbAIfpBTSdOIWlQw9m%2BUqpmDOZEOk0EaAa%2B6rnCWpU%2FmW2H47lFXRnFpQeOhNr%2Bz2ODNVvv1%2BWvGGYF7Gvh9TtP1nnBpvulAT5CpiZd2BhKr0sDv4rJHBMrq8j7ERnidsRjp96AhR3RjUU7mx5nQ759PmKSe2XkoU9C6IhdPAM%2FD2lUX%2FMTrj0S89uawZCC2qDtwVSn%2Fl%2BAnuWoU6BzheSTgCdi%2BZRwOxZMvNOW4IQnxTi%2BY%2FhhxsN7gUg61Q3Z%2FZkqpOlmJeeqs%2F9gZhuB%2F6kd4zyMFyL6NUo4NlWp1ZCH6ViUG5gC%2B3voXf8jjsCn%2Fos2ORmu6%2B1KGnpLc6Q81ElhEcH4Ssr57XxDR%2BwpVPRoG7r8SfRbbYXcAedtwx9kzQaxvyiJ%2Fkw3IU0gmRQsyO20tj1OGdbsPMo9572HbDetSmitig%2BxK7UFxNOAnesrJrhfDsMq4%2BUaq317mLyDldP5wwHGDBVljnESoAJxO%2B2dTIUMIjNJEq2Jk1v91XFasPpdYWW7KoPMtLmb3x8BYl1WpZH9TiiA%2BqGlxpx%2BONBSox7zWF8h%2Be2nWOnZpQadrIE8BwdN82rCVqHHw0IKyuhfQG6yB2osFhAgIOiHFR1QgcRUuG%2FQbrg4TOMJr%2B4sAGOqUBa3lyZ0Vl0kfKT%2BNohCAuDSD%2BtiNvChmhgIA8r0w6V8GBemqjCPihkQN0PQirKR0fEWg7bIa7uJwwnifqItXsbMjhTVRL91xZgZ2TLSqwaJl6vogG9ykzVQ%2FhynXDPzathDh4J5AC83BoDkRbrUW6KpnT330aamHsymC3ddMO4uj3vKALOBblXzigOOmzgU3x60%2FEcXw7USyslIgbzQ3yoxIbW%2BQd&X-Amz-Signature=fd17fe0cc2a4a682aaebcfa0319de5700c7983cc284fa821820c733c634008a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
