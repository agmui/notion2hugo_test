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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXIA3TC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICpvk%2FoklvxiciCSdFiX9kb2k7mgsVZL0pc4ivdujs7WAiB40%2BOv8OyY%2BixavyE%2F%2BKKU%2F5AuJqGf0HxV%2FGXb8QhfVSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8IwqRTC4qbPkHP1KtwDENXBklb9WmbQqKNBvFwJrs2hWmOSaniaRlL2hVNGIUHO10OGW4O0Lq4IGepHiZUwC8mjYXfwpGDOB42ISFUGe%2BD6cxZAwksKx4eqbZEDshquURQ%2F%2Bkp72io9j%2FhLc0hDyzQKEvcZ1%2Fs4nsB3%2BshlUugg2ObyWUdSSByMhiS9bC2FuUZ%2BhSUWCFxMTJgZ66IO2juGqCi8BerfwaBXB3eaERGD3qoRyeeN0Sa1g7pbhI4n%2BEmv%2BW%2Bow9iJ5tUtWWmNCguR4VjR%2FYjO5i40pvxGYWdxRo5CFmbJTJNHLXervnpcdIzwvfoGb1IdUB5H4Kdpp83iIKV7c1dBODq0eGU8zf3gMVAT5h1fp9KAZlW4rfF46L6HsMQD9wG0OyMshGeRJeVjnWWTYuVKB1arLGN0MsUwRy%2FNHWuP1G9YMqvgpT1vGPbqX4nWvek3rf5fBKncpzI%2F6gi%2BG5%2BPwMhBEVcl32t2ohfs%2FbsfFHedVA3xvbL8%2BZsn%2FSHP16m6bYMkWzElEh2t3JLqYiTiX8RkETEMg1plZRfMlPSylOGsxMKGztRxFKqYPUsxX75BBE%2FlYHajhslhY1XhISFJg8yTghXxEPJlsIomtgs5Rmm1IrJBg6a2jqvtlcRT6jVzAVYwk8OJwQY6pgGz2FDA9q60z8SjlzKfZKyLGVKzePL8lKF3ZS8aXVlYPLvDuNp5c%2B4ZodL10a04LIzXr84Z4Dfko%2F9cZC8EoXkYIrwcI8ygtplwfTpdrxZcc3QcAa3Wu6h2ZhWywy9GwLWv6Me8DMCJxlI0ZL4q77z5FumMbnNndGZjsIa4%2BE3mLwGeM%2BSD6fETHruP4bfY0KQJWKfdzOOUCLIFRVtbD1vKFxhBO5fr&X-Amz-Signature=e6027c759b353d13316d2323885bf295c99a47701eb1458a3fc85bad649951b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXIA3TC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICpvk%2FoklvxiciCSdFiX9kb2k7mgsVZL0pc4ivdujs7WAiB40%2BOv8OyY%2BixavyE%2F%2BKKU%2F5AuJqGf0HxV%2FGXb8QhfVSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8IwqRTC4qbPkHP1KtwDENXBklb9WmbQqKNBvFwJrs2hWmOSaniaRlL2hVNGIUHO10OGW4O0Lq4IGepHiZUwC8mjYXfwpGDOB42ISFUGe%2BD6cxZAwksKx4eqbZEDshquURQ%2F%2Bkp72io9j%2FhLc0hDyzQKEvcZ1%2Fs4nsB3%2BshlUugg2ObyWUdSSByMhiS9bC2FuUZ%2BhSUWCFxMTJgZ66IO2juGqCi8BerfwaBXB3eaERGD3qoRyeeN0Sa1g7pbhI4n%2BEmv%2BW%2Bow9iJ5tUtWWmNCguR4VjR%2FYjO5i40pvxGYWdxRo5CFmbJTJNHLXervnpcdIzwvfoGb1IdUB5H4Kdpp83iIKV7c1dBODq0eGU8zf3gMVAT5h1fp9KAZlW4rfF46L6HsMQD9wG0OyMshGeRJeVjnWWTYuVKB1arLGN0MsUwRy%2FNHWuP1G9YMqvgpT1vGPbqX4nWvek3rf5fBKncpzI%2F6gi%2BG5%2BPwMhBEVcl32t2ohfs%2FbsfFHedVA3xvbL8%2BZsn%2FSHP16m6bYMkWzElEh2t3JLqYiTiX8RkETEMg1plZRfMlPSylOGsxMKGztRxFKqYPUsxX75BBE%2FlYHajhslhY1XhISFJg8yTghXxEPJlsIomtgs5Rmm1IrJBg6a2jqvtlcRT6jVzAVYwk8OJwQY6pgGz2FDA9q60z8SjlzKfZKyLGVKzePL8lKF3ZS8aXVlYPLvDuNp5c%2B4ZodL10a04LIzXr84Z4Dfko%2F9cZC8EoXkYIrwcI8ygtplwfTpdrxZcc3QcAa3Wu6h2ZhWywy9GwLWv6Me8DMCJxlI0ZL4q77z5FumMbnNndGZjsIa4%2BE3mLwGeM%2BSD6fETHruP4bfY0KQJWKfdzOOUCLIFRVtbD1vKFxhBO5fr&X-Amz-Signature=0d39a2d47906020f28977b79b7afc21b7fcee30c74feab71670cfd5b0eca52f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXIA3TC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICpvk%2FoklvxiciCSdFiX9kb2k7mgsVZL0pc4ivdujs7WAiB40%2BOv8OyY%2BixavyE%2F%2BKKU%2F5AuJqGf0HxV%2FGXb8QhfVSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8IwqRTC4qbPkHP1KtwDENXBklb9WmbQqKNBvFwJrs2hWmOSaniaRlL2hVNGIUHO10OGW4O0Lq4IGepHiZUwC8mjYXfwpGDOB42ISFUGe%2BD6cxZAwksKx4eqbZEDshquURQ%2F%2Bkp72io9j%2FhLc0hDyzQKEvcZ1%2Fs4nsB3%2BshlUugg2ObyWUdSSByMhiS9bC2FuUZ%2BhSUWCFxMTJgZ66IO2juGqCi8BerfwaBXB3eaERGD3qoRyeeN0Sa1g7pbhI4n%2BEmv%2BW%2Bow9iJ5tUtWWmNCguR4VjR%2FYjO5i40pvxGYWdxRo5CFmbJTJNHLXervnpcdIzwvfoGb1IdUB5H4Kdpp83iIKV7c1dBODq0eGU8zf3gMVAT5h1fp9KAZlW4rfF46L6HsMQD9wG0OyMshGeRJeVjnWWTYuVKB1arLGN0MsUwRy%2FNHWuP1G9YMqvgpT1vGPbqX4nWvek3rf5fBKncpzI%2F6gi%2BG5%2BPwMhBEVcl32t2ohfs%2FbsfFHedVA3xvbL8%2BZsn%2FSHP16m6bYMkWzElEh2t3JLqYiTiX8RkETEMg1plZRfMlPSylOGsxMKGztRxFKqYPUsxX75BBE%2FlYHajhslhY1XhISFJg8yTghXxEPJlsIomtgs5Rmm1IrJBg6a2jqvtlcRT6jVzAVYwk8OJwQY6pgGz2FDA9q60z8SjlzKfZKyLGVKzePL8lKF3ZS8aXVlYPLvDuNp5c%2B4ZodL10a04LIzXr84Z4Dfko%2F9cZC8EoXkYIrwcI8ygtplwfTpdrxZcc3QcAa3Wu6h2ZhWywy9GwLWv6Me8DMCJxlI0ZL4q77z5FumMbnNndGZjsIa4%2BE3mLwGeM%2BSD6fETHruP4bfY0KQJWKfdzOOUCLIFRVtbD1vKFxhBO5fr&X-Amz-Signature=49cb09191ccd85bfce0ee55f684a8081a6ceb2ec1b6fcf2e7149c60c5797956c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZIDISJ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIG9jlf3neZlzpxXV14G0s6tH1EXLS3NA9v3kWJQpp7J5AiEAs85V8KKpDzbANPAQgvbCB5OEJGPsGf1VHN0wyPGvDyEqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcUhZqXzibdwz7JlSrcA4ea41xkne7GgCWfiSvOG3KIv1dx69a0NneY3nG7%2B9XpsaLxY70PBqHaTUK%2BDiz%2Bro%2FPyeo5rDYRARDaQvcYp0pv7%2Fzs01D%2B3kONOi%2FN%2Fn%2Ba%2BU2zYveV5XCgxbpmSqAnHKWxgMerFCozJ8IjpC6Jg%2FfPrtj4tENqFFim4Ugf5lKL4ewOAmnvqK%2FNnh8AnUzNh5sAXuhqTWLE89zuikyXrwPfzC7GGAPf8QoemSpWJHtiCd6cgH1iUJa4UrT4cgp2RuYbHgogpSFtwupnE2%2FmB26Pw7Ope1rWQE0zww3ejY7%2BhalZ9FWjuvMcxi%2Fia1RBLQ7UzG%2FkBHeS01mxua6O%2FDx02uq%2BW3%2B9XgmN9RZupjXQRgxSkA5WY7YO6tYgMy0gCxM%2BJh9fbLI7HQH7Cbxs7RHxec%2BpZidsM6Y9FcmTJkJpFwbAlHkuTBHzA3FUDUXmbLc%2FNeCBUPQJSBAPOgUeceOtZ7Ak5nW1HpsSmzcFb0ZweahaTXJrxhDd8%2FNSjQxpI52tS6qxJrOMmQ%2B%2F2MJtrnq2wg1EQAxsWHwY7jSpXS2NA7bi45ysMDm%2FDiOw7gJcltqbX3jmdrMrRl16eTQdVnQR3%2BoBzFFRDTHKrgmXx8pNYMnNMkTiodJfL41BMIbDicEGOqUByt5S3STZtg0dP2OQDH4M%2FEaMXMRIHCxLpJcamNGULGBQe2KLBfZvOHZYXP4mlc7FqX4z8a3No8z5ek7Df4%2FpiqM8JnuLJvm2GTIN3xcvDDzEHDzTo8GjusCNdIgPNRFVGnS8FzwrS928eifIpvXVNDSRK6DOVKXQlXmdTry23p27bteBgUPz6U85XmaI1bBmKWeLN1zLJgtO4%2FSkEhzQWhFVUFIh&X-Amz-Signature=6ec37de87bf5346f64ea9c4b87963a1c81661efb8c76eb8f38d24d4d3fb72b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LMHKHFY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDQgeNm8jBMh5iZlKfbx2lQb0tRrBS%2Ba9y1ctyOdZJ6XAiBarhux4%2BGCX3drQGBn%2BplKNwwedsm6b4NePrNbfESn3CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM935OQKh7sBzLkb1oKtwDGFy1aPn6qJ%2Fc6EjUEsUbEfgkNHIYEtTlAzYhiyeLeA5K4w9EuvRxuoaYc21cZT55Wi0NIvW9X9vzzQomKxnmpFGiRTZQazbk1JJsBDjXPdz33UrcroRTW1YDd9eTGicvKTcxWWfnZeE9wNi%2Fuz7i%2BssVqpJEgMeZmKQv9ONYc%2B4VBo2H3zo6jTr69ql0HvRkrYq76EPmR5opBm5f%2B6eIjLZ2A7M527IRP2bEC4cRwzl1vlMTvS2BblT9%2BbA%2FPU%2BvWfVEwiI7pJ34tM8M3B03ms%2F6Esje1p6NaV0GXMAzkPqjNQKF%2FJ8cs4I83aTsJ4x4M2Q34ZkP0aVjP4SpRKorQMercnn6E%2BdeFFuUG64LBww5chHhF6nA%2BTwn3T2gTIXcAbU7jJpa22grEyQkNFskAS%2FA7ULInK3z3YjKcf32rt3JUR6yTnG3CFyFe61XM6BF%2FZQ%2BF0XYH2HJjq%2BgkEbTbej4kG%2BImzSVp9q7dU3QSiL6ojNeQAxvXSuzWkB2x9q9uk5Apipj8ieZaTapUu3sKBI%2BfKnrrPVGXIxMlY5TeLJeTcOdsg%2F5F1yre1hbTa7AX%2BL170%2F2lJ6eY9u5gCN2Ce6bxR2hCDzlXsSK207eRhH4VN6YieN2Cw84C28wgMOJwQY6pgFOaRnAUUddZa0hYTLId4BlvpZV6VbZngQquoOFjWtRfSZFThRPP6x0EtCcYaSU6xdMJYLocf9Pmcn1wc9OMBWSV71uINRXu6t75RWLSFoB3fHfFWT8O7Uw8jGwlJ7BOzkW1vbmPvHt4SNNDB%2Fg6D8tLIeXCu9FrF%2Bbz2VawLX1xieLZDrcnfsxwLiQjg5uXruS9qBl20aABTMBuB%2BJGmA6aQhW8TtJ&X-Amz-Signature=b3ca7f4278c4c10bea0c9d67c8730567dfd4d9b787b9d1255a7ed546490ded64&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NXIA3TC%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCICpvk%2FoklvxiciCSdFiX9kb2k7mgsVZL0pc4ivdujs7WAiB40%2BOv8OyY%2BixavyE%2F%2BKKU%2F5AuJqGf0HxV%2FGXb8QhfVSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm8IwqRTC4qbPkHP1KtwDENXBklb9WmbQqKNBvFwJrs2hWmOSaniaRlL2hVNGIUHO10OGW4O0Lq4IGepHiZUwC8mjYXfwpGDOB42ISFUGe%2BD6cxZAwksKx4eqbZEDshquURQ%2F%2Bkp72io9j%2FhLc0hDyzQKEvcZ1%2Fs4nsB3%2BshlUugg2ObyWUdSSByMhiS9bC2FuUZ%2BhSUWCFxMTJgZ66IO2juGqCi8BerfwaBXB3eaERGD3qoRyeeN0Sa1g7pbhI4n%2BEmv%2BW%2Bow9iJ5tUtWWmNCguR4VjR%2FYjO5i40pvxGYWdxRo5CFmbJTJNHLXervnpcdIzwvfoGb1IdUB5H4Kdpp83iIKV7c1dBODq0eGU8zf3gMVAT5h1fp9KAZlW4rfF46L6HsMQD9wG0OyMshGeRJeVjnWWTYuVKB1arLGN0MsUwRy%2FNHWuP1G9YMqvgpT1vGPbqX4nWvek3rf5fBKncpzI%2F6gi%2BG5%2BPwMhBEVcl32t2ohfs%2FbsfFHedVA3xvbL8%2BZsn%2FSHP16m6bYMkWzElEh2t3JLqYiTiX8RkETEMg1plZRfMlPSylOGsxMKGztRxFKqYPUsxX75BBE%2FlYHajhslhY1XhISFJg8yTghXxEPJlsIomtgs5Rmm1IrJBg6a2jqvtlcRT6jVzAVYwk8OJwQY6pgGz2FDA9q60z8SjlzKfZKyLGVKzePL8lKF3ZS8aXVlYPLvDuNp5c%2B4ZodL10a04LIzXr84Z4Dfko%2F9cZC8EoXkYIrwcI8ygtplwfTpdrxZcc3QcAa3Wu6h2ZhWywy9GwLWv6Me8DMCJxlI0ZL4q77z5FumMbnNndGZjsIa4%2BE3mLwGeM%2BSD6fETHruP4bfY0KQJWKfdzOOUCLIFRVtbD1vKFxhBO5fr&X-Amz-Signature=b47dadeef784fa287d629d9c06dff2d4ac21fd69e5599b8107a68821c00f9e87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
