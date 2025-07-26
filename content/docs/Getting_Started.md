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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEHNZNU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCH6KTc%2Ff3G%2BNm5rYy5DeEOiJwPE0SgcJ8fBbDf6pSAjwIhAKt%2Bm9i%2F%2Ba5KTUGomfeXjRpU0BDVSsEGyqnfBzOEjxtbKv8DCGYQABoMNjM3NDIzMTgzODA1Igx85yMCr7kivmeSH0sq3AOlkJeik1GgWRZHZOsIMRFJHafCkQ5Sr%2Bec6lJQoeghcRzg9v%2FQqJcJVisHfykd9v3kMbPOwFa0nR5%2BESCbM86rRVpnsPfkqvAZtQjuoFC321KNc3mYPTiKmzV5i1iFRYOr0%2FDOVX70uWXh4ljfTaERwTZI4Ly5Er9GMYPhZH3q257ks04s%2FV%2FMudME7V5GYMbgsRuzm0Xgx42Cyv5fohV9DQDp%2BVZ7hj8EefDvXj2c%2FZrQj8rv7UHrOdvjfiiYR0L0khqzthGEBUHDgd3qEMOH8UnBAG3c1zubQc4ptb0FLd4sZRt8Cr8mXsLSJ9BiNf9xeEnRXgodL4I8dvMUsDop3dpbtgTgEDc6OLsriNRs59Kch58MkVDo%2FA9%2BPlXkP4eEPw1XZfPq7uNp5sqMoUTymTs1TShQi4OGDjCyc05tOZ%2B2aNwiShtruqDwb%2FFElHLL3y%2BlcD2bgnnCxc%2B8g5Y0Tk6sa50sQETGCK58CLuIX63X1f%2B64ggUIInGtsGLdXyWQUMczKjePiY38x6BVcTifsb3miWiJuVpxgjqCvTv9JOV1zPQMfAoAAM6IiSpqrnuOkGy9tcjM%2FDrHdXFFLiV12fUp2r6PbqzTjRACYsUMTrvPRVwjAKRjxfXADD2%2F5TEBjqkARqWTa%2F5%2B60WBhgsxxXv5G%2BAyl8XlS8TIjjxxvvU6mPGpfxVIvAxh%2FDRcKBLErfMyGIeH6PnPyy3HSRPlw9nrQvTaIaFiZeq26VH%2F2rHRons0mzHy8MXvf8FSItK51NMgaSyXoq4xVuqf1ZWyrx9YtsK7gOQj%2B2y4UctvxEmLkbyPC2N8Q9BHYxKhrZksyzUqeaIOnye4x%2FvClgVznb1ltN9jwa3&X-Amz-Signature=944eda20114ca48c60ff467885e10a61df52893769a63778ece6a825c3b68d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEHNZNU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCH6KTc%2Ff3G%2BNm5rYy5DeEOiJwPE0SgcJ8fBbDf6pSAjwIhAKt%2Bm9i%2F%2Ba5KTUGomfeXjRpU0BDVSsEGyqnfBzOEjxtbKv8DCGYQABoMNjM3NDIzMTgzODA1Igx85yMCr7kivmeSH0sq3AOlkJeik1GgWRZHZOsIMRFJHafCkQ5Sr%2Bec6lJQoeghcRzg9v%2FQqJcJVisHfykd9v3kMbPOwFa0nR5%2BESCbM86rRVpnsPfkqvAZtQjuoFC321KNc3mYPTiKmzV5i1iFRYOr0%2FDOVX70uWXh4ljfTaERwTZI4Ly5Er9GMYPhZH3q257ks04s%2FV%2FMudME7V5GYMbgsRuzm0Xgx42Cyv5fohV9DQDp%2BVZ7hj8EefDvXj2c%2FZrQj8rv7UHrOdvjfiiYR0L0khqzthGEBUHDgd3qEMOH8UnBAG3c1zubQc4ptb0FLd4sZRt8Cr8mXsLSJ9BiNf9xeEnRXgodL4I8dvMUsDop3dpbtgTgEDc6OLsriNRs59Kch58MkVDo%2FA9%2BPlXkP4eEPw1XZfPq7uNp5sqMoUTymTs1TShQi4OGDjCyc05tOZ%2B2aNwiShtruqDwb%2FFElHLL3y%2BlcD2bgnnCxc%2B8g5Y0Tk6sa50sQETGCK58CLuIX63X1f%2B64ggUIInGtsGLdXyWQUMczKjePiY38x6BVcTifsb3miWiJuVpxgjqCvTv9JOV1zPQMfAoAAM6IiSpqrnuOkGy9tcjM%2FDrHdXFFLiV12fUp2r6PbqzTjRACYsUMTrvPRVwjAKRjxfXADD2%2F5TEBjqkARqWTa%2F5%2B60WBhgsxxXv5G%2BAyl8XlS8TIjjxxvvU6mPGpfxVIvAxh%2FDRcKBLErfMyGIeH6PnPyy3HSRPlw9nrQvTaIaFiZeq26VH%2F2rHRons0mzHy8MXvf8FSItK51NMgaSyXoq4xVuqf1ZWyrx9YtsK7gOQj%2B2y4UctvxEmLkbyPC2N8Q9BHYxKhrZksyzUqeaIOnye4x%2FvClgVznb1ltN9jwa3&X-Amz-Signature=7b85a7346637658b011be9cd7e17d539e1559b31db814869a1b10516c587386f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEHNZNU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCH6KTc%2Ff3G%2BNm5rYy5DeEOiJwPE0SgcJ8fBbDf6pSAjwIhAKt%2Bm9i%2F%2Ba5KTUGomfeXjRpU0BDVSsEGyqnfBzOEjxtbKv8DCGYQABoMNjM3NDIzMTgzODA1Igx85yMCr7kivmeSH0sq3AOlkJeik1GgWRZHZOsIMRFJHafCkQ5Sr%2Bec6lJQoeghcRzg9v%2FQqJcJVisHfykd9v3kMbPOwFa0nR5%2BESCbM86rRVpnsPfkqvAZtQjuoFC321KNc3mYPTiKmzV5i1iFRYOr0%2FDOVX70uWXh4ljfTaERwTZI4Ly5Er9GMYPhZH3q257ks04s%2FV%2FMudME7V5GYMbgsRuzm0Xgx42Cyv5fohV9DQDp%2BVZ7hj8EefDvXj2c%2FZrQj8rv7UHrOdvjfiiYR0L0khqzthGEBUHDgd3qEMOH8UnBAG3c1zubQc4ptb0FLd4sZRt8Cr8mXsLSJ9BiNf9xeEnRXgodL4I8dvMUsDop3dpbtgTgEDc6OLsriNRs59Kch58MkVDo%2FA9%2BPlXkP4eEPw1XZfPq7uNp5sqMoUTymTs1TShQi4OGDjCyc05tOZ%2B2aNwiShtruqDwb%2FFElHLL3y%2BlcD2bgnnCxc%2B8g5Y0Tk6sa50sQETGCK58CLuIX63X1f%2B64ggUIInGtsGLdXyWQUMczKjePiY38x6BVcTifsb3miWiJuVpxgjqCvTv9JOV1zPQMfAoAAM6IiSpqrnuOkGy9tcjM%2FDrHdXFFLiV12fUp2r6PbqzTjRACYsUMTrvPRVwjAKRjxfXADD2%2F5TEBjqkARqWTa%2F5%2B60WBhgsxxXv5G%2BAyl8XlS8TIjjxxvvU6mPGpfxVIvAxh%2FDRcKBLErfMyGIeH6PnPyy3HSRPlw9nrQvTaIaFiZeq26VH%2F2rHRons0mzHy8MXvf8FSItK51NMgaSyXoq4xVuqf1ZWyrx9YtsK7gOQj%2B2y4UctvxEmLkbyPC2N8Q9BHYxKhrZksyzUqeaIOnye4x%2FvClgVznb1ltN9jwa3&X-Amz-Signature=f0838ae4f3c91bf40ec73b2384c4c7433ef21ebfd1a52d4ace8b27a44653d6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3VMLYJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCWbhoBmZ2Soi%2F4xphkEjOH6vKstF%2Fj04LuLmo%2Fi4qLEgIhAJk6WyXGx6s08OCXHQzqJIDwi8e3G6NNpYECNsEG74B0Kv8DCGYQABoMNjM3NDIzMTgzODA1IgzvA8ROZljlYjKft0Aq3AMBi8mFPjCel341yVTTLdk1a53snYlWUotb%2BsqFcM3Ce8chjv%2BWpq9G3uFLnTuAhzB4Z25XFseYbrBOqBRQZNhgpteA%2BnKaZneHrGAokUp2ggX5xbM5zPYGV84ExwFx%2F1uXAivzM2wf1zG1WwVYxQiUdOW6RjHakF%2BO8DTjV6wKgJx16EEoUpsL0QkToXnq5HU0BDeyADSoiI2b%2FQexpZmvrZxYc1l%2FzkWgAmxoSwMeaQRzSt8RcyL41PLsny533RnN%2B42g0mPrEBc%2FAqfe%2Fn8%2By4%2F%2FvBVKpM2LgDhV1Q0uzkxxgEkEgi0quNH7FWOyeDYQiPohZI7fwkr%2FANF2YmJcmBsgcabL6P9%2FD%2F4m0nQtBTIaS%2FRN2dML18AjhX4uttE3IOAxbP%2BK2IghNwh65Dpxr95kyjaYg3qI%2BxS1keWcwuJjGsGU0Wrr1DJ9iY51D7fud36%2BSk2xoRve38JYgj3MbsNrd5XCxDfJ4Qz3t0S6y0I8rDSK8tf%2FsW9dXAPHDYVzD5cSS2RhED62xFRW177Z%2FWYUq3nPGrEvm9YsMmoO4p0SbXCT9Zw1YPAzdscLcBqmdDuYNITZCp%2BcnMRA8iEVTsGFahoxeeUmG%2BHm%2BIcRhY1Jc6n3LM8jnnxjDzDv%2FpTEBjqkAdk2VlXN3kBpgA252169AXxN93tUJ%2BJmOwShe1ZDRrk1uq%2F2gLxJd%2FLpisAhkQwJyJZlOWjj0xKiHdjODyQHSHF3s5Bfh3taLhxDewG5bTKwi6esp%2BN5eHIi%2BBv0TORc35jjV%2FT%2B%2FhcZe8HikCpEBSm7AM76qjjrSvPE2yaff8CohwJCe7yzg6QMzT6PYqduJbzkV6eUGIYA2K5eFWigYs4%2BSHoI&X-Amz-Signature=3446ec4e03f19f6e6a2b54f54554920150d28fa733c8e9666cef4253f671938f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNB66KR%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCxYg%2FZ5LlSNBiRru5fFqoahxvyAGd5cXpx2%2F7rxzW9ZwIhAOXziv6O57K35DDyNi%2FGXv20b0LhT%2FRk3eltPExpJZLmKv8DCGYQABoMNjM3NDIzMTgzODA1Igzle4qnUMs65DtZMBQq3ANRGcH%2BQXSH2Dti1ueV0o18uuDGoAe%2FdsmqUHLzG%2BeaoBMoKkeYwk12YW6kIv3tLF9tj3dVqNZDMBqLudNZwUumXrlE%2BuF9EtqEig29kIT4Fy02UoH0%2BZhCvTogZLRkJhV0sjkakZNDrslb0FyNPEO7OkX9RJgNJbQxqAQQGYD%2B5zvCgVbh1WoPBQt%2FN2xOQ9Wls9thR%2FRuSfcIBjaQIPfGaCGbF1ilYfzkolnEjQOmZ9JoNtp0YHejYuUdW8gCcF6GRnE1ywwXI03FUmdFMmYtCNzw59wgAykTOOo5rCfVfau4a06VYSakWqszntUPLbxwmFZK5HaEt5jz5fb7212xAvRPils%2B4yhJ%2FXx0UfzfdWCdXCTIup7Q2snbwoH5yNmTlseMXVW7keQaHt2jxp3feCtd8WUKs6UMmfCFXeykYF0SuIwYVRDvFNZmtH%2BjWKkb0qLgmPAiDU7j3qzgZgJb2TVIP8ataXelkPaHh4m6pX2gkkcpQIkgzqSBthd3r%2FieFVwAU0MwSukamUXfz%2By3XUI4ItBWl1lvvH3uV7MKziPHjrCmk5sbD1Xa2HVHNdLzNBRUa7jewYxwHJATAsOS1%2FNsxrDiMrERJd6gkHGh23ifvXxiz5%2FlQBPcdDCR%2F5TEBjqkAcek8Az6Pgf7RsPty1cKVOP%2FWmfv5nz9lOE%2F1qb5DNUzjC1O1MQpFpN6zDOXfSIYWKzabybHOfo6nj29ATu5gDeKtDw17IzctvkfWvZPfI83E1LgQ9fgJIvntJOyG2aEmPFpGx8poNRJfROwOHm4zQfMFQyFEbSrfTuM7CQwEjKXl1oAeM3YGPCoMPeY%2FePvoXL7LAU4DY2%2Fl8tIkBqNW9dcciER&X-Amz-Signature=750c23300c8c406595828f1fc2857c2eaf79ead284aa62cd5c0b2cfaa53bb441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PEHNZNU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCH6KTc%2Ff3G%2BNm5rYy5DeEOiJwPE0SgcJ8fBbDf6pSAjwIhAKt%2Bm9i%2F%2Ba5KTUGomfeXjRpU0BDVSsEGyqnfBzOEjxtbKv8DCGYQABoMNjM3NDIzMTgzODA1Igx85yMCr7kivmeSH0sq3AOlkJeik1GgWRZHZOsIMRFJHafCkQ5Sr%2Bec6lJQoeghcRzg9v%2FQqJcJVisHfykd9v3kMbPOwFa0nR5%2BESCbM86rRVpnsPfkqvAZtQjuoFC321KNc3mYPTiKmzV5i1iFRYOr0%2FDOVX70uWXh4ljfTaERwTZI4Ly5Er9GMYPhZH3q257ks04s%2FV%2FMudME7V5GYMbgsRuzm0Xgx42Cyv5fohV9DQDp%2BVZ7hj8EefDvXj2c%2FZrQj8rv7UHrOdvjfiiYR0L0khqzthGEBUHDgd3qEMOH8UnBAG3c1zubQc4ptb0FLd4sZRt8Cr8mXsLSJ9BiNf9xeEnRXgodL4I8dvMUsDop3dpbtgTgEDc6OLsriNRs59Kch58MkVDo%2FA9%2BPlXkP4eEPw1XZfPq7uNp5sqMoUTymTs1TShQi4OGDjCyc05tOZ%2B2aNwiShtruqDwb%2FFElHLL3y%2BlcD2bgnnCxc%2B8g5Y0Tk6sa50sQETGCK58CLuIX63X1f%2B64ggUIInGtsGLdXyWQUMczKjePiY38x6BVcTifsb3miWiJuVpxgjqCvTv9JOV1zPQMfAoAAM6IiSpqrnuOkGy9tcjM%2FDrHdXFFLiV12fUp2r6PbqzTjRACYsUMTrvPRVwjAKRjxfXADD2%2F5TEBjqkARqWTa%2F5%2B60WBhgsxxXv5G%2BAyl8XlS8TIjjxxvvU6mPGpfxVIvAxh%2FDRcKBLErfMyGIeH6PnPyy3HSRPlw9nrQvTaIaFiZeq26VH%2F2rHRons0mzHy8MXvf8FSItK51NMgaSyXoq4xVuqf1ZWyrx9YtsK7gOQj%2B2y4UctvxEmLkbyPC2N8Q9BHYxKhrZksyzUqeaIOnye4x%2FvClgVznb1ltN9jwa3&X-Amz-Signature=fa748794a98f3d3e84a9180618fb4325ba669b13caa6ba180dc2d47e9a07dabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
