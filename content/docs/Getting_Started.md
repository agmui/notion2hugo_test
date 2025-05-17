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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORLTNO2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaa2UfAm2JX0JHUtKj6KAtqNecVL791wh8cxl2d1K8wIhAIwCVG9ErCEpi8zzqy8rolPE3uNNJ2dUOmHWdCyE8bFUKv8DCFQQABoMNjM3NDIzMTgzODA1IgzU1tqZc%2Buy9MVQKyMq3AMqo1FH%2Bvrm3qO0hLywWz4yLYK3NE8kp0UxWr3JdnXRCVIXVxKie%2BV0I7YOBIQ4d0wdBq3e9c%2BOGoVz%2F0rZk6Yp5cWcXCtQVWc1uJFq9UEJzpYM1CqosRGLY%2BVTqT9%2B2CUG2LqGJM%2FqMDY0dSsoRxbcUJwMTPp3XnCwNvCigvvjapqvVVsDkhM8FjZ7eE4K%2BpWtGYzMTZNAM%2FURYA61OL9xACdnhAk%2Btg0JzUBS5YIsM1PXczXzc%2BgewKOWI0UBrK5cxbUJzx2sAQ4NwHm6wKDxojI1Xtor0gWMff4MWMKkJpw7QrzVBKZaZIOIrpPXddvN5zYm8bJ%2F35jghzbEIidantv%2F%2FsED5i3y07FCohxFbp6IijUfztbPL4YSh17c3RupFSdCw%2FMlaJ3G%2Fw3hU5%2Fx3JafHJbilcSCEVKGGI83dfCXCZ5z5Bm%2BRGDSBeR9xKZQhtvnDK0Z754aXKWPwD4f0A3h7pJtjHhqFKBiVstNoKbHC1sG0bRQZFI3ub6B947QdufghfgqIz2r6rhLutFmJrlXwSeAjDFzKQ8F8rMpzDodU3aux9xxFlyg1L6EaVNv9O4Mn09bTGlSRLkErJ7UERBMtitiSQq7XcTJh1X8SuIX3jUjpokwhH6vEDD%2F95%2FBBjqkAVTXAwcuybiml87ls%2FYC3fHjGG7ZcWBKHLm7xt2bbtAksf483qROrRyY3DH4BrrDFYftg9jtzboxXwVjQIGFTHzXIN%2FGcJlvhk48rXIXmX%2FofBE%2F3vynyGcCcm2dGJs1nMzi3W2qr0jj8yhqXB9quYueHU4XxbBZ53FRcNsQMa3%2FbR244tkV0BCkGkqvM6lE0DIVcSPIzrJ3L%2BqwDyqmZAkAgNI9&X-Amz-Signature=5bca069d7b4bbf3e6551f03f09e473f546df357e87630d4396e55169ad4b2e29&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORLTNO2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaa2UfAm2JX0JHUtKj6KAtqNecVL791wh8cxl2d1K8wIhAIwCVG9ErCEpi8zzqy8rolPE3uNNJ2dUOmHWdCyE8bFUKv8DCFQQABoMNjM3NDIzMTgzODA1IgzU1tqZc%2Buy9MVQKyMq3AMqo1FH%2Bvrm3qO0hLywWz4yLYK3NE8kp0UxWr3JdnXRCVIXVxKie%2BV0I7YOBIQ4d0wdBq3e9c%2BOGoVz%2F0rZk6Yp5cWcXCtQVWc1uJFq9UEJzpYM1CqosRGLY%2BVTqT9%2B2CUG2LqGJM%2FqMDY0dSsoRxbcUJwMTPp3XnCwNvCigvvjapqvVVsDkhM8FjZ7eE4K%2BpWtGYzMTZNAM%2FURYA61OL9xACdnhAk%2Btg0JzUBS5YIsM1PXczXzc%2BgewKOWI0UBrK5cxbUJzx2sAQ4NwHm6wKDxojI1Xtor0gWMff4MWMKkJpw7QrzVBKZaZIOIrpPXddvN5zYm8bJ%2F35jghzbEIidantv%2F%2FsED5i3y07FCohxFbp6IijUfztbPL4YSh17c3RupFSdCw%2FMlaJ3G%2Fw3hU5%2Fx3JafHJbilcSCEVKGGI83dfCXCZ5z5Bm%2BRGDSBeR9xKZQhtvnDK0Z754aXKWPwD4f0A3h7pJtjHhqFKBiVstNoKbHC1sG0bRQZFI3ub6B947QdufghfgqIz2r6rhLutFmJrlXwSeAjDFzKQ8F8rMpzDodU3aux9xxFlyg1L6EaVNv9O4Mn09bTGlSRLkErJ7UERBMtitiSQq7XcTJh1X8SuIX3jUjpokwhH6vEDD%2F95%2FBBjqkAVTXAwcuybiml87ls%2FYC3fHjGG7ZcWBKHLm7xt2bbtAksf483qROrRyY3DH4BrrDFYftg9jtzboxXwVjQIGFTHzXIN%2FGcJlvhk48rXIXmX%2FofBE%2F3vynyGcCcm2dGJs1nMzi3W2qr0jj8yhqXB9quYueHU4XxbBZ53FRcNsQMa3%2FbR244tkV0BCkGkqvM6lE0DIVcSPIzrJ3L%2BqwDyqmZAkAgNI9&X-Amz-Signature=e0cc2145491448fae510fd0c1686272e0ab46a673f748683fae586882da432fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORLTNO2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaa2UfAm2JX0JHUtKj6KAtqNecVL791wh8cxl2d1K8wIhAIwCVG9ErCEpi8zzqy8rolPE3uNNJ2dUOmHWdCyE8bFUKv8DCFQQABoMNjM3NDIzMTgzODA1IgzU1tqZc%2Buy9MVQKyMq3AMqo1FH%2Bvrm3qO0hLywWz4yLYK3NE8kp0UxWr3JdnXRCVIXVxKie%2BV0I7YOBIQ4d0wdBq3e9c%2BOGoVz%2F0rZk6Yp5cWcXCtQVWc1uJFq9UEJzpYM1CqosRGLY%2BVTqT9%2B2CUG2LqGJM%2FqMDY0dSsoRxbcUJwMTPp3XnCwNvCigvvjapqvVVsDkhM8FjZ7eE4K%2BpWtGYzMTZNAM%2FURYA61OL9xACdnhAk%2Btg0JzUBS5YIsM1PXczXzc%2BgewKOWI0UBrK5cxbUJzx2sAQ4NwHm6wKDxojI1Xtor0gWMff4MWMKkJpw7QrzVBKZaZIOIrpPXddvN5zYm8bJ%2F35jghzbEIidantv%2F%2FsED5i3y07FCohxFbp6IijUfztbPL4YSh17c3RupFSdCw%2FMlaJ3G%2Fw3hU5%2Fx3JafHJbilcSCEVKGGI83dfCXCZ5z5Bm%2BRGDSBeR9xKZQhtvnDK0Z754aXKWPwD4f0A3h7pJtjHhqFKBiVstNoKbHC1sG0bRQZFI3ub6B947QdufghfgqIz2r6rhLutFmJrlXwSeAjDFzKQ8F8rMpzDodU3aux9xxFlyg1L6EaVNv9O4Mn09bTGlSRLkErJ7UERBMtitiSQq7XcTJh1X8SuIX3jUjpokwhH6vEDD%2F95%2FBBjqkAVTXAwcuybiml87ls%2FYC3fHjGG7ZcWBKHLm7xt2bbtAksf483qROrRyY3DH4BrrDFYftg9jtzboxXwVjQIGFTHzXIN%2FGcJlvhk48rXIXmX%2FofBE%2F3vynyGcCcm2dGJs1nMzi3W2qr0jj8yhqXB9quYueHU4XxbBZ53FRcNsQMa3%2FbR244tkV0BCkGkqvM6lE0DIVcSPIzrJ3L%2BqwDyqmZAkAgNI9&X-Amz-Signature=29c5f18e08feac69593d4f9fc6bc72ba50c79e3ce44be57fe7b1d0cbb3f80fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AWAX3Z3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYvGT3Q3hU3UHHBAcc%2Btnw%2FaiTrQI1fZNHmsCItgKn3gIgSOcHNMAlgUmUdjfvkJitECDoCBQ1%2FHiSLyD8x1fwksYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ%2Fq6b%2FqlDhgiE6klircA%2FSwbaUyjQU%2F59ui74bu08hed2ZIbIFSg349newqlGkbRaiK307RGUgPWGWO%2FR9NMBPfo8wypPCiasx5WVFjG4AaoT9sZxj5TH%2BJMEHIuy03e2rybxXWoabfCaIRxYeqr7d0eH4W%2FUF36MYagMymssEProWj8upDiZoYHI%2B3Is4z%2BoqW370vqOEp17bUIaitl4NBY8KFa4ywSd5X3lkjIvVKRDRQ1fwz1tDkG%2B%2FqNQ%2B3RelPdhb8H3kycocxcpMSgrHkhRdqPVSXIEj33ojuogAQOc3RBryNfwlOWfumaMbNpYm%2FnngD%2F6FYDjoy2z36iGrIdXR2trXW920E2Ue3LGNnb1WMZ72viK8cszdymxTBhkfDhiI9%2FdchNvWqGklCIhxvYbAmVZmowcp%2FDSLqWtNVgiVYrwBsxUKvxe6FBVtl5%2BJvdmy9yL8Tm8vqpPAakhHXEJY%2B8Fojx9FNPqI7RPHpffGcahZoY76nNNwJdpHzK4LQit6SA4PD%2FEcyFTeVwWKQmTuIVUiOZy%2F8r76MHCS2cflILBnEV5ICIWxXHGhLDIy5tsup%2B2DQUSafFmjb%2BsLOKv%2FEV%2BP2Ei91cuyJY26WFOOsRBNtTko9KR1pxrIRan%2BdUsE3P8%2FavNvfMLz3n8EGOqUB0Iioq25ZSMJexcLDRWRlgANQ1ePELuxS%2B%2FknjVuXBKevJHVyq487pXNcbPQBcIINXBnS9rkMX2Q5%2F2aDqLzKixAOtHqZZf5HJYzQghu3Juxp8JdITvM3SuDsHeEM36Ar7vr5QUILPJxi9N0ZZKB2WH7cB8mO0tZIenbM%2Brv4Kp4mmeKiYCO72Jk00fLkDQd90P901aZ1JBdBOsCCC6yAeGtpDGgm&X-Amz-Signature=75b3e9328cdf08ea0ab106ed17bf1d179fb581b11d2010a35f15ab8f80f2e77c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z56DL3G%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIiTq5GGUgKhRZ8XV98gIwmSQaiscS3%2B6VKZ3MqZYKAAiBIqN%2BFR%2BI%2F1nr%2FxBUP6IBM0k8paY5mnUdpcyIcwdR15Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMARkQrqa35oHSrHn5KtwDKNnj1Q2Dp%2FMsSIRCn7%2Ftb2yzkuybB4byZnsdHH2Jb6%2FvPgs3NXBUtAdJPX9bNYUe86rFejBqLJ3fPSHUek3hsz3lKM0vYhInLxYWS%2FxiFVE%2FALMn%2Fz8klUKnut0%2FqaeUEDA9Unuo2oqjG4e%2FT71oTW51v4uvyqui%2BPl8HheI8F%2FzoSjPRwXFTLDFsO4UnyGqpUFQRvuruSOqQtYRupXMKDF5RLAQsxcyg%2FoZO%2BHbevK9TDUxYrDLQmSY%2FB6D48IEhecRSZRFy7JhzYhIlSpgF7SMFh5I9KuUxodwwevWATF0eun58isBnCGfjJNKqXWcd5qOj1bB4U%2FEUUGiG935mkWvFH69%2Fbb9Xub6nZrRjiWTJfB27YhLwRlSvWW5Rf0XyNmCvQcW%2FjbpfPg4LcPPmXgmICRe3c25Z3al3v8Q%2FSrzsl2%2Fcu46sPMHA%2BzqO%2BQe0oQtphkFsqw9XdgDgB8aNIgTHrLiexW%2BybG3jlcJgIa5NzJkoC8puv5UNdFU0RzSaFLF7gGDofVi8dC83%2FzR2BrfUEIXoMLo%2FlKmKsWbYRP5FLRY4Fjf1UqidfQiwvg64dR3FZ%2F8t3TBN2VLaufCnHLmb9EwY38hLCrXiZOSnfFA3lSe89JN5XQ9N%2BEw9vefwQY6pgE8PMIOQT9XThd2unI4BLi6bMU82%2FnXXCzdX4ywwWM8EvTNNPSlGUrIcu0uZW7ezrn0CZAmos3a5WPqGAFKi55EjxqkdYMUWLPO5H%2FhjAvyBa6y7arD1blBXgjBcle3BL9k1yc8xU2eH5sd%2BctZx0t%2BtrWmsrmeKAiB71PUcwknx7lGVuMDU5OugGzpDXOxwbW0249XeQEiF%2BaWssYlOIBvYrWQlm9E&X-Amz-Signature=34d77b8b1f6bd5d23a875e257f369b364125b02cb2b0e76fc830a711334aeac5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORLTNO2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCaa2UfAm2JX0JHUtKj6KAtqNecVL791wh8cxl2d1K8wIhAIwCVG9ErCEpi8zzqy8rolPE3uNNJ2dUOmHWdCyE8bFUKv8DCFQQABoMNjM3NDIzMTgzODA1IgzU1tqZc%2Buy9MVQKyMq3AMqo1FH%2Bvrm3qO0hLywWz4yLYK3NE8kp0UxWr3JdnXRCVIXVxKie%2BV0I7YOBIQ4d0wdBq3e9c%2BOGoVz%2F0rZk6Yp5cWcXCtQVWc1uJFq9UEJzpYM1CqosRGLY%2BVTqT9%2B2CUG2LqGJM%2FqMDY0dSsoRxbcUJwMTPp3XnCwNvCigvvjapqvVVsDkhM8FjZ7eE4K%2BpWtGYzMTZNAM%2FURYA61OL9xACdnhAk%2Btg0JzUBS5YIsM1PXczXzc%2BgewKOWI0UBrK5cxbUJzx2sAQ4NwHm6wKDxojI1Xtor0gWMff4MWMKkJpw7QrzVBKZaZIOIrpPXddvN5zYm8bJ%2F35jghzbEIidantv%2F%2FsED5i3y07FCohxFbp6IijUfztbPL4YSh17c3RupFSdCw%2FMlaJ3G%2Fw3hU5%2Fx3JafHJbilcSCEVKGGI83dfCXCZ5z5Bm%2BRGDSBeR9xKZQhtvnDK0Z754aXKWPwD4f0A3h7pJtjHhqFKBiVstNoKbHC1sG0bRQZFI3ub6B947QdufghfgqIz2r6rhLutFmJrlXwSeAjDFzKQ8F8rMpzDodU3aux9xxFlyg1L6EaVNv9O4Mn09bTGlSRLkErJ7UERBMtitiSQq7XcTJh1X8SuIX3jUjpokwhH6vEDD%2F95%2FBBjqkAVTXAwcuybiml87ls%2FYC3fHjGG7ZcWBKHLm7xt2bbtAksf483qROrRyY3DH4BrrDFYftg9jtzboxXwVjQIGFTHzXIN%2FGcJlvhk48rXIXmX%2FofBE%2F3vynyGcCcm2dGJs1nMzi3W2qr0jj8yhqXB9quYueHU4XxbBZ53FRcNsQMa3%2FbR244tkV0BCkGkqvM6lE0DIVcSPIzrJ3L%2BqwDyqmZAkAgNI9&X-Amz-Signature=3468bfa9366ae53ee9f59ff179625f3a6300ec6e10c1cd9e3bba351bebe5923f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
