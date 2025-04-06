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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYWBBGJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQMp%2F7DfbC8VHTMF%2BmhH%2BB3A%2FynHvIy0eVDgnlYHvN2AiBt4lmA%2BA2lsj9wob%2Fo9Osjy%2FMoau8LPdFPoFLam8YlRSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9aqVuYWRygSQ6wvlKtwDAkic4435kT0B17Vz2VKPbPd1A4EZK6H7JjxdH2j5ehtQzxDpDEatJRaHuqSeJ02uiHAsxXYEMh3ytOMa5erUlx3rF0AP%2BJuOHHQbXnC7poNRNOPBE7rR0nOMCT%2B0YR%2FQHs3OEtx%2B97aEgP77u32XpnI7mo14iONK5LBwp2%2BxGBmLaliuKnUt%2B6mCun3ovPNAAhXmKjF5dtavQ8RR6hu%2Fr5MCznx6CkLl%2Fs8Kxg0Hr8ajPHWs2p0rgf4ua0cKnxyMuRybuvYsaFcd%2FAn3Ct9P8IuGTuNy1lUOqCgVEMUue8bl2hULQcoC2FR326Fp1v5KtANgWP9VPsUS71TF%2Fo2Qq7O2TjI9FVMI1ql7EzShkQP2Fux%2FCzdqwLsrqojsqv2c3xDUxtPEqUEyvrjV1d2r7zChb9R9f2t%2Bn7QvIqLp0RuXZf2QHQt8cV8BnkLXPh7wyVPQpJ5j8w6pJgUFAMnwsZ0V%2F7%2BKF6perwg4pZP7CF8V9e%2BAYOLKBgikrKX1mYrxJM%2FKm%2FeKJL3Fluk%2FfAAY%2Fqtsnrxosn8ufooGV5MLuutq6VLR1Kve0yy%2FeqfFdbpNxSs0k%2FW8jJbMS4xtXgoPy76oDKu26cQ0%2FXUhtNxgERrYuLbQWmnUS5W8GLYw7p7KvwY6pgHOD7uosU7yrh8SWFOOgViNo25CnbNyJDmz0aD%2Ff9%2F2lYiwYyve9HbE9tZ7GCZ%2FD55rfJFeDdiW8HTbvPfr6oRDPEQ0C8X3hptq%2Fs2M%2FEF4HR29ElMysQVlRaDBX88PK46LRpCaRuJ%2BQqhK3kQlUjPxVpGJsBdW3ybBdVuZi2j0rYGrwElSqs4dZYayyvZkOr3jkBVnzB5joTYH6KVQhY8AtyS7vNDJ&X-Amz-Signature=5aee048eed95602064590b4dafe0bd36110208f92429cdf1dc9cc8e1ae7224dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYWBBGJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQMp%2F7DfbC8VHTMF%2BmhH%2BB3A%2FynHvIy0eVDgnlYHvN2AiBt4lmA%2BA2lsj9wob%2Fo9Osjy%2FMoau8LPdFPoFLam8YlRSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9aqVuYWRygSQ6wvlKtwDAkic4435kT0B17Vz2VKPbPd1A4EZK6H7JjxdH2j5ehtQzxDpDEatJRaHuqSeJ02uiHAsxXYEMh3ytOMa5erUlx3rF0AP%2BJuOHHQbXnC7poNRNOPBE7rR0nOMCT%2B0YR%2FQHs3OEtx%2B97aEgP77u32XpnI7mo14iONK5LBwp2%2BxGBmLaliuKnUt%2B6mCun3ovPNAAhXmKjF5dtavQ8RR6hu%2Fr5MCznx6CkLl%2Fs8Kxg0Hr8ajPHWs2p0rgf4ua0cKnxyMuRybuvYsaFcd%2FAn3Ct9P8IuGTuNy1lUOqCgVEMUue8bl2hULQcoC2FR326Fp1v5KtANgWP9VPsUS71TF%2Fo2Qq7O2TjI9FVMI1ql7EzShkQP2Fux%2FCzdqwLsrqojsqv2c3xDUxtPEqUEyvrjV1d2r7zChb9R9f2t%2Bn7QvIqLp0RuXZf2QHQt8cV8BnkLXPh7wyVPQpJ5j8w6pJgUFAMnwsZ0V%2F7%2BKF6perwg4pZP7CF8V9e%2BAYOLKBgikrKX1mYrxJM%2FKm%2FeKJL3Fluk%2FfAAY%2Fqtsnrxosn8ufooGV5MLuutq6VLR1Kve0yy%2FeqfFdbpNxSs0k%2FW8jJbMS4xtXgoPy76oDKu26cQ0%2FXUhtNxgERrYuLbQWmnUS5W8GLYw7p7KvwY6pgHOD7uosU7yrh8SWFOOgViNo25CnbNyJDmz0aD%2Ff9%2F2lYiwYyve9HbE9tZ7GCZ%2FD55rfJFeDdiW8HTbvPfr6oRDPEQ0C8X3hptq%2Fs2M%2FEF4HR29ElMysQVlRaDBX88PK46LRpCaRuJ%2BQqhK3kQlUjPxVpGJsBdW3ybBdVuZi2j0rYGrwElSqs4dZYayyvZkOr3jkBVnzB5joTYH6KVQhY8AtyS7vNDJ&X-Amz-Signature=0aa35152d28d8939314080175ddd27402f69c0d26f8efef5bbb9c1b02b1d81a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGYHB67N%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUuSimFPuHaTfc3OPSnUQx0dUavVJ80MnyktZ8TVUBmAiEAtKwF2ATY14dYlj4ORZDypE0Lcmp%2FD3l0XndYiU1fTWgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDN9801iXkbXl50CGRSrcA4RqlxLzzpI4SDewHA5C%2Fm5%2F5Cu4KI9OdeOSNCS6clWWAsdAHHlWKAO9Si4nRyiKpWWKASoHKaAQa3TqEcJkbD1oH6vgZuxh23LxL%2Bo9s35B6m0FyNo7bGNw9W1RRYQMuGV%2BLUyXJuHKzRBQqc8tBVLPl%2BaWmy0Bdv1BkYTUEZTnI3n2qVIQHYpfAJYihNsp6y7z4iZXbs1UkoeEtoBaB79JWyPDdiJxiEQGbw1MFoYMYoZlM%2FVwRGpTvhylUbP%2Bshm5MwbLmSgo%2FyyMIYFotkQi1m6O3Bsi8oJbz8bPzaQ8BihaXWAMnL5oFCCGZONJDH0lcia0JL6BfUlZJOB5sbN%2BHmFQSQBPNenzwLROOALOf8EJGPltWxbn8ZYtMbc13F7NrTUSoQd6mQc83gHGHZYeTvbCiMtRDThkXIZ1dLrsIgCH5o5xBZrXagBbXgd7K9cAO7KvVc8PRxsfvGhI7VbsaWn%2FHHIwcldrR%2BTAy%2BDR2b7o5NU4g61uAmi151NRwqgobaLHqmSQ1GHyecz8tnsnqhbEtGgqm0h%2FzVu4BdSx%2BFYvoqMCXPw4XA0%2FDUToaJcKp22kcIswox3ct4zr7e8dGLCa2jTl5k0jQ7SaO1K8y%2ByOsSqznXruj3nHMMGiyr8GOqUBMIpRFxfGNvg%2B2XBeRC1pqqIXy%2BM6YzTvucPTKejlKdmpWEs%2FStMrt2fyEP28Ikrdf1wmoVpcajGd3cWBQs8H%2FmN9SMCa3zvAIy9mAI4aG55DSqR0yz5LZLjgexjhEuB7yja0P3VVIkwG%2F59Il67g3o6DfZ%2BV1os%2BOia7LXLM9RNo2xwea9p0HupI8C9H%2BULvcpQgzxuk2upWjgj79tvc3nzgV6tW&X-Amz-Signature=3d998d00a4e1a1881ac13af461bf400c3c61833ee3a1f49c568e0ff2b632c03f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625RPYT4U%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC4UA%2B9s04qyCwfyfrbf7jj%2FS9BHtptY1YRxlcMZAMeAIgc7j9IuBjU5YP9VTk17RlEekt8OMrWCDRvK1%2Fy%2Fdc%2BCsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDI0vIfocFbklrIjBHSrcA2wryUyBD%2B%2F8%2BH3ynYB6VwzBiyois7DYIDkJMAGHRFvAUEBFvCpRniWsohDeChTDP4MrW92yCWb1E8etH4dqAq%2F6Oo0IQmkepgb6iWCH%2BEN7gGN5UL19nEiZ1kbKQvwAP1Wu4S%2FJNJ%2FrrlOyR%2FOKIg08URjIgeGbeA%2BC6WUWsERe03Sq4J3tEdFUQ0Jkt%2B2m6CiTKiSzuMb60IuisGq6jwvkDE7v2OW0Ef26MvjYM3dCKbSxryyDSqUrVJ02PXrYJPzrKDy25kY8rOoOkFWapI3QVILQWersbcUBxUMGOeyFpv%2Fn8qnwrR7%2BMBv0QlUk1X%2BL6XTWxCZdGcHkMHqi6eIaf0e0v2dpSQLfGkmKMxIUi0go8iofvIl9iyOFunqH2xDj6Dx0sPl80u6IRsCBWVVIyIpeLmnaCS6vOQ%2BDvPFhO%2Faj9d3OKDN%2BYtTIdSXLybfJEBe5QdRGKsDLdla%2BBJyuGM%2FazR%2F1ofCY2ZJovLZAlfup8ysbBPK1bkHHd4D2XaW%2FBszvhEhP4uRRb31nKAU8yoD4pqTrOqJv59mVp6mxR6zJIjj1W%2FYDMKglFhFeV%2BjuIpw4pk8WfJgdptTvLcDvpa453xVxPhk4OwgSqYiYQqfZRHIP7dPRmVmTMNukyr8GOqUBnbkmWXA%2BM3fPB%2BtKpvezRde1UNglEoOglPm2%2FCgwzOZvpDe%2BE5Mnm1BerJ1jqqCmwh6FUpFOBkUqZWejLKugsY0y%2F%2FVGIrFDWAFvCE6xgmaHmITLIsblTejMEUlR9QnCOi2wLy4%2FM2BIdhjVxjiT9OWOG%2B6s0n7F4f0MhBozRGOSsTWB4wOtLRzkg7P4PgF1aD2AvHkGQF1a1gjVeE6Ejdu5JZyF&X-Amz-Signature=921bf9421e3d5814e39ce407fb3a8d1ae8fad63d55a08262c3e38fed8a945ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYWBBGJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQMp%2F7DfbC8VHTMF%2BmhH%2BB3A%2FynHvIy0eVDgnlYHvN2AiBt4lmA%2BA2lsj9wob%2Fo9Osjy%2FMoau8LPdFPoFLam8YlRSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9aqVuYWRygSQ6wvlKtwDAkic4435kT0B17Vz2VKPbPd1A4EZK6H7JjxdH2j5ehtQzxDpDEatJRaHuqSeJ02uiHAsxXYEMh3ytOMa5erUlx3rF0AP%2BJuOHHQbXnC7poNRNOPBE7rR0nOMCT%2B0YR%2FQHs3OEtx%2B97aEgP77u32XpnI7mo14iONK5LBwp2%2BxGBmLaliuKnUt%2B6mCun3ovPNAAhXmKjF5dtavQ8RR6hu%2Fr5MCznx6CkLl%2Fs8Kxg0Hr8ajPHWs2p0rgf4ua0cKnxyMuRybuvYsaFcd%2FAn3Ct9P8IuGTuNy1lUOqCgVEMUue8bl2hULQcoC2FR326Fp1v5KtANgWP9VPsUS71TF%2Fo2Qq7O2TjI9FVMI1ql7EzShkQP2Fux%2FCzdqwLsrqojsqv2c3xDUxtPEqUEyvrjV1d2r7zChb9R9f2t%2Bn7QvIqLp0RuXZf2QHQt8cV8BnkLXPh7wyVPQpJ5j8w6pJgUFAMnwsZ0V%2F7%2BKF6perwg4pZP7CF8V9e%2BAYOLKBgikrKX1mYrxJM%2FKm%2FeKJL3Fluk%2FfAAY%2Fqtsnrxosn8ufooGV5MLuutq6VLR1Kve0yy%2FeqfFdbpNxSs0k%2FW8jJbMS4xtXgoPy76oDKu26cQ0%2FXUhtNxgERrYuLbQWmnUS5W8GLYw7p7KvwY6pgHOD7uosU7yrh8SWFOOgViNo25CnbNyJDmz0aD%2Ff9%2F2lYiwYyve9HbE9tZ7GCZ%2FD55rfJFeDdiW8HTbvPfr6oRDPEQ0C8X3hptq%2Fs2M%2FEF4HR29ElMysQVlRaDBX88PK46LRpCaRuJ%2BQqhK3kQlUjPxVpGJsBdW3ybBdVuZi2j0rYGrwElSqs4dZYayyvZkOr3jkBVnzB5joTYH6KVQhY8AtyS7vNDJ&X-Amz-Signature=106c93cfea0e3b619a8eed83cfe21b6e5672627bd4e0b3a67cfd378bdd26b956&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
