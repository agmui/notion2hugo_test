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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6SQ4PS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID8WWWFoYHzYiYLvG7mGdZWkJN%2FzRbs7RJ2SnrTjk8XVAiEA73c6CNuBYUJEXvAHrEugyb72by9B4MHCaTJRuE7FwNcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1G8X%2BP0uhLc4O1RyrcA3720YhR54wJodAU8UsTXc47asdsKlF1o3%2FLcciRRKe5V6MZ1cvGXfxm5jyUIoyY7%2FYfzSQIrmBb%2BW1zM3jCsYhg4b02adBxzyaLJxu9HxpoiOsdawb%2Bv%2BQhB1aLM6hEpXpS7RuyL%2F7Nzav65O3iQlDmrQq6ZEpeGPMiTKBRGjLUYsO8H0OBNm%2FFp%2FmKhBshyTHwMZ5Cn6%2B9HrPukVlVggiQ9%2FGxvgMaF7H15PqjVYBd%2FFWDeSoJFYQcfAum6BuHVE0TjrCWkWONqZzWpI%2Bk8B6xcOckgPagzX2U%2BeOi7y4QE30HOistkoS8IhB1cJ5PGpFyZRFPjD7yMg0wqU1rXkbLvJeJabcm1As6SaXPKZyOcS4DRO9lsgtVc4VhNDvvDL6FHmQqYJ%2FKyX2w83cy%2FcG0I348LhLB8Q9%2FKkr6IoZAAJCXoBCBLzmvv1sPwwYF7GcRFaEdc%2FEkinTIC3HfUhgAUvzdwCBj%2Feb%2Bey%2F2%2FuvB0JDc3ntp9XhLp18sn39mfl5V6CI7DslgnIsk7Tu%2BVffGizrIiECfbkyxvKHe4hRRzqvXm2WcqNn12LreGSEdlpuS1R0K6IrfOi2jegcStQmcwK26m3r26SoyA6flacUkt87WtO%2BTpEX8BngtMKrl08AGOqUBMIJVzPqsKFCBFGrDpkwx1G%2BB3xZ2QhnlWl46S8tyESS6cMe9LAlXpxgZeMqKoslpXB5uTZL%2F7xXamj%2Foz8IHG4z3LAoH7%2BP4ZyzSiNzjLFotf9fFYJddVq%2FIRp88BOxT1VnjT8stvmbnq6HvpjYrKuKrrs1i1QfoBZ5zAzm97XQpc0lXojj%2B%2FlJbav8UIgmyeVAfh9SwBqYz%2BoVWSihSl4dkFOLt&X-Amz-Signature=05aed46be451de21c2b785c9e8966608aa66d2bc9d793a5aee7f2726379a6700&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6SQ4PS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID8WWWFoYHzYiYLvG7mGdZWkJN%2FzRbs7RJ2SnrTjk8XVAiEA73c6CNuBYUJEXvAHrEugyb72by9B4MHCaTJRuE7FwNcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1G8X%2BP0uhLc4O1RyrcA3720YhR54wJodAU8UsTXc47asdsKlF1o3%2FLcciRRKe5V6MZ1cvGXfxm5jyUIoyY7%2FYfzSQIrmBb%2BW1zM3jCsYhg4b02adBxzyaLJxu9HxpoiOsdawb%2Bv%2BQhB1aLM6hEpXpS7RuyL%2F7Nzav65O3iQlDmrQq6ZEpeGPMiTKBRGjLUYsO8H0OBNm%2FFp%2FmKhBshyTHwMZ5Cn6%2B9HrPukVlVggiQ9%2FGxvgMaF7H15PqjVYBd%2FFWDeSoJFYQcfAum6BuHVE0TjrCWkWONqZzWpI%2Bk8B6xcOckgPagzX2U%2BeOi7y4QE30HOistkoS8IhB1cJ5PGpFyZRFPjD7yMg0wqU1rXkbLvJeJabcm1As6SaXPKZyOcS4DRO9lsgtVc4VhNDvvDL6FHmQqYJ%2FKyX2w83cy%2FcG0I348LhLB8Q9%2FKkr6IoZAAJCXoBCBLzmvv1sPwwYF7GcRFaEdc%2FEkinTIC3HfUhgAUvzdwCBj%2Feb%2Bey%2F2%2FuvB0JDc3ntp9XhLp18sn39mfl5V6CI7DslgnIsk7Tu%2BVffGizrIiECfbkyxvKHe4hRRzqvXm2WcqNn12LreGSEdlpuS1R0K6IrfOi2jegcStQmcwK26m3r26SoyA6flacUkt87WtO%2BTpEX8BngtMKrl08AGOqUBMIJVzPqsKFCBFGrDpkwx1G%2BB3xZ2QhnlWl46S8tyESS6cMe9LAlXpxgZeMqKoslpXB5uTZL%2F7xXamj%2Foz8IHG4z3LAoH7%2BP4ZyzSiNzjLFotf9fFYJddVq%2FIRp88BOxT1VnjT8stvmbnq6HvpjYrKuKrrs1i1QfoBZ5zAzm97XQpc0lXojj%2B%2FlJbav8UIgmyeVAfh9SwBqYz%2BoVWSihSl4dkFOLt&X-Amz-Signature=5d2956474712248567d56f6bbefc984d616ceb41f466dd5a3b724cb7d5adc256&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6SQ4PS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID8WWWFoYHzYiYLvG7mGdZWkJN%2FzRbs7RJ2SnrTjk8XVAiEA73c6CNuBYUJEXvAHrEugyb72by9B4MHCaTJRuE7FwNcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1G8X%2BP0uhLc4O1RyrcA3720YhR54wJodAU8UsTXc47asdsKlF1o3%2FLcciRRKe5V6MZ1cvGXfxm5jyUIoyY7%2FYfzSQIrmBb%2BW1zM3jCsYhg4b02adBxzyaLJxu9HxpoiOsdawb%2Bv%2BQhB1aLM6hEpXpS7RuyL%2F7Nzav65O3iQlDmrQq6ZEpeGPMiTKBRGjLUYsO8H0OBNm%2FFp%2FmKhBshyTHwMZ5Cn6%2B9HrPukVlVggiQ9%2FGxvgMaF7H15PqjVYBd%2FFWDeSoJFYQcfAum6BuHVE0TjrCWkWONqZzWpI%2Bk8B6xcOckgPagzX2U%2BeOi7y4QE30HOistkoS8IhB1cJ5PGpFyZRFPjD7yMg0wqU1rXkbLvJeJabcm1As6SaXPKZyOcS4DRO9lsgtVc4VhNDvvDL6FHmQqYJ%2FKyX2w83cy%2FcG0I348LhLB8Q9%2FKkr6IoZAAJCXoBCBLzmvv1sPwwYF7GcRFaEdc%2FEkinTIC3HfUhgAUvzdwCBj%2Feb%2Bey%2F2%2FuvB0JDc3ntp9XhLp18sn39mfl5V6CI7DslgnIsk7Tu%2BVffGizrIiECfbkyxvKHe4hRRzqvXm2WcqNn12LreGSEdlpuS1R0K6IrfOi2jegcStQmcwK26m3r26SoyA6flacUkt87WtO%2BTpEX8BngtMKrl08AGOqUBMIJVzPqsKFCBFGrDpkwx1G%2BB3xZ2QhnlWl46S8tyESS6cMe9LAlXpxgZeMqKoslpXB5uTZL%2F7xXamj%2Foz8IHG4z3LAoH7%2BP4ZyzSiNzjLFotf9fFYJddVq%2FIRp88BOxT1VnjT8stvmbnq6HvpjYrKuKrrs1i1QfoBZ5zAzm97XQpc0lXojj%2B%2FlJbav8UIgmyeVAfh9SwBqYz%2BoVWSihSl4dkFOLt&X-Amz-Signature=5b91bccb8529e3fe1b2d5d9fc70d9b45d44bb9d9cf125e763013895fe3718d29&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CICJBJ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIAVn0oVTdIsNgXDc8LnFmJUWJKGCfB5cGBrrpmSUGjrqAiAyO3BCyWE5dOs6fZzvfuosSjJCnNdFALKuMSdIEBERDiqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZBB2ONK7a%2BE%2FmMcKtwDyEHsYk1i8QR2XFVW2A6PnPYsikrCpXibWwlS72O8Gy5Cxl9oXbGesvioXbG34ICG1J%2B35zbhgbMiNSTaMhalY%2Bqr27dfJePg98ZwSUdxKFSf06WlwdqRc00EP7DiFF85zth9seHpmDXqTEDNFoaD16J%2FQfaglCdw49eBvYoVhoU%2BfiFJbnsbBk8xUGjSO02SyHurH6gKjCTMF5bdlDmRq2tjGIjjyJEbPLjOiXuHj%2FTB5vDZskfPruKAbGFahcp25pDoj3xFl168w92OAHrjVZbl9VAooaFCI6PjLLXHlBBrZlJQelTcyT3jTStHhLeAZ8maFvsaeMsoz%2FYze95zSfJxn93wAg%2BDce9vxh8Bm3ONgz5I%2FcWcRPMHltW4kta0PIeCd3CNfboilzbRKHRLBzntdM77lkW0qbD9BC0iFy%2B%2BFdPFthATswQavYsDyKxG7Ocezcql1ZRyN7oMkhMIgxdz8vXGPhSw72ZXE0RsOEMjC34HZoKK2%2Blfx3KuIKUvMNg2tlTFQWh38uEPexpjcaSJHQ9%2FmYEdI7VmaTXiWRM7TvliwM7qvDt05f%2F3g6jC%2Bri2PdDr3Fx8yURdAwZ7880DK34NEnGZe3BwFaG2wQubaa%2BM6Hcq1qgPg8owlOXTwAY6pgE8NVk6va3is56sRKJkrNGEN9PL%2BJGmUYs8Xo%2BioDKIOdcjIDj0iUEfmZSmWsSgM86HKtsnKq5hsVAP8IbXhTeJmLNYyJS%2FVeUKZRsov4XiB8cPkyVdBWsSSSuLLjEV4h65ZKL2XhoaXfklHZBdpnUBCz2Ry3RMAbMr2vn74l2scFqLRJ2RjhGfSzFrYlx9xYENubZstAdFuFxpL6lr0AQQ0oHAKYzJ&X-Amz-Signature=66a5a07eefaab117b3361e8d473daa0a3aaf9065da0328037872b99bcce15184&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4H6OX7%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFNpIurxqUTMadpT3FNbHvzjOwrIUsX49hzlBda3yRjyAiBSk0LPCierpIEryfN1y2j9ZjxXIe%2BHpeSNS4FcRwfbISqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FTF0S1xc8kdMbANfKtwD3b1VPI2o5a%2FxTJn1Sd1kl70qYmvBBYBC3HC53ojKdgwUG8Cu8i8n0armqsfnrEL3HzJDVEZD5n320Qp%2BppJzvhpjFFbmOAO%2BAQpE8pFqN%2FgXJZQ7uzB1wy9wBdQ5GJmXwPFCdAPU1pr8t3FX1sVbTPDBFFLT9rqd7hFxWLtVVI0MpYbmekZlfogOHVOAqElkhPmDFrf%2Fkp3oRvj%2B%2BR6mgKEzJfdAp4FNkXHs4HeentM0HlaB4e%2F5uTQnQAWF%2BwScnX8n8CpQ0gxuKhutTS2z27y3DkibHe2QYFx%2FhjPe2icPfv%2B6zYpjBnXj08gXopGSCoRCyEHIsq0Gd14qIO61uMimzayC8M4Usuct0XQbYLTTdQLmsHdt8sR11h47NtovMprTWjSeiGnBlLpme2zF8yngQE8J0h90GnjjAPvDW4uf0vvxir5Mjkq%2F7%2FQ9WQB1vGf1abkbIMCUp2P%2FMcrS0eLNye3whci%2FfDoUnzR%2BKVeTGvSyJr39t1g1Mm5jlc36iRbw3FBMw7%2F37yT0PWF%2BR2TXIDB3saOYNosvsTxtyLrj1Y5drCWBRaq7jqzPUyM8T%2FyYPPxz0og82CtbbRdsOxTJzzuxwC56xwc3rGilFEjgFfXaYWjU5FMmOSwwluTTwAY6pgHPXl3EUtsQLkQvfMw1r0vm8tISEnSL4%2FZYS8HKUHGioadQARqbVwjnxROfxPLhkgkcWsn4yhU1yFCVwcEl%2FF50ys7SY2Zz4fdu2kl%2F%2BFmdqFW93tJgLM8ymqVFAegJuY3SJ8vuIkdwdeQ85Qa6HFKW0Xlh3cgqZegbEq5YSNcXVMz%2B55Io3hwjkLpg1LeGL5KkHHeta%2BgfrHbeKBOskK2uMnbjttGb&X-Amz-Signature=f9c10eefb23e7cabec1f4430077178c4bf94d268964dda0931ce6faed5c5972c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6SQ4PS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID8WWWFoYHzYiYLvG7mGdZWkJN%2FzRbs7RJ2SnrTjk8XVAiEA73c6CNuBYUJEXvAHrEugyb72by9B4MHCaTJRuE7FwNcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1G8X%2BP0uhLc4O1RyrcA3720YhR54wJodAU8UsTXc47asdsKlF1o3%2FLcciRRKe5V6MZ1cvGXfxm5jyUIoyY7%2FYfzSQIrmBb%2BW1zM3jCsYhg4b02adBxzyaLJxu9HxpoiOsdawb%2Bv%2BQhB1aLM6hEpXpS7RuyL%2F7Nzav65O3iQlDmrQq6ZEpeGPMiTKBRGjLUYsO8H0OBNm%2FFp%2FmKhBshyTHwMZ5Cn6%2B9HrPukVlVggiQ9%2FGxvgMaF7H15PqjVYBd%2FFWDeSoJFYQcfAum6BuHVE0TjrCWkWONqZzWpI%2Bk8B6xcOckgPagzX2U%2BeOi7y4QE30HOistkoS8IhB1cJ5PGpFyZRFPjD7yMg0wqU1rXkbLvJeJabcm1As6SaXPKZyOcS4DRO9lsgtVc4VhNDvvDL6FHmQqYJ%2FKyX2w83cy%2FcG0I348LhLB8Q9%2FKkr6IoZAAJCXoBCBLzmvv1sPwwYF7GcRFaEdc%2FEkinTIC3HfUhgAUvzdwCBj%2Feb%2Bey%2F2%2FuvB0JDc3ntp9XhLp18sn39mfl5V6CI7DslgnIsk7Tu%2BVffGizrIiECfbkyxvKHe4hRRzqvXm2WcqNn12LreGSEdlpuS1R0K6IrfOi2jegcStQmcwK26m3r26SoyA6flacUkt87WtO%2BTpEX8BngtMKrl08AGOqUBMIJVzPqsKFCBFGrDpkwx1G%2BB3xZ2QhnlWl46S8tyESS6cMe9LAlXpxgZeMqKoslpXB5uTZL%2F7xXamj%2Foz8IHG4z3LAoH7%2BP4ZyzSiNzjLFotf9fFYJddVq%2FIRp88BOxT1VnjT8stvmbnq6HvpjYrKuKrrs1i1QfoBZ5zAzm97XQpc0lXojj%2B%2FlJbav8UIgmyeVAfh9SwBqYz%2BoVWSihSl4dkFOLt&X-Amz-Signature=9f524d8e2baca2e2b218820350cbee493e29acdcec99433542f214aa7db16942&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
