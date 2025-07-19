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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQ5C624%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIEt9ib%2FYtK8Zs7bzIuThMiloB6sbyUxnUggcb7jLgIhAOA3rrfT9uEi1hXvbjo8yinCdjuRxy0mteS3AvgOcjKaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ZwQZoQlZtmhccPIq3APbQVvToAAxaq9TI6gbxO9QXgCoCrQvHhH43vAYerBFwJLSnCnLDp%2F%2FK%2FlXKSiXp5XYYCdfxwPVzpx8trW69X06U2YfRmRts2o0%2FTqMHraY6XjQlRWZlm7%2BsEOuPf%2Fs%2FntK%2FWKbtH2uZEDd0OdMR9667CF8PiPaxyyjJJuPl9hlm1dAf1lGOBtkzeRprN3TaYybGifofV%2BHQTUR5z9XJjtk9pjwMGc3ZZeROig0I0v05BEGj%2FGpRe3TkHdIG0StXM3rNAAtoIqNC8qfXHGOBdO0dlmLWIWpsH9zl3eTaNDx1FeFmLwarrESJQa%2FwRoUH1XmB2tRhtfVfg7upean2iTHbNN4b05KAb0kKXs28e4dv5qRloFhGGnWen6weXbwCV1cKOIJvQTLKFAIRQhsA3IT8okar%2FbQcPNkjHCuTqo8dMQpc72VK%2FR4hDF5stqZI4E7sTUUPdPxviYyYYc6v2U0SpjRhPJvQHCVmZkOfPQCsqDCEXD5wzrsMmBcwGNhITAOI5yP31gvQiKkz%2BUgUz9rvkmbpQfh8p7YXtgZN9el280o3qnoQYCU5UKvUatieQGufkMip9qELPcLye7K85FY7rDqJeK4grmgkemZCck7JDw%2BqAgGXz4t2dQJRzD4t%2B7DBjqkAVbGW8eV3XlXepmHWuE73lehn3ktibNcwBzWF6Gi1vsvNENdeGsTp53dQRxWFkw6wwL3%2BXkdC6igirZe%2BujEckubOk7l4iyjYNgXQ7Z4x8%2B38XcgbQC8quN%2BD%2BWVuS35FKTMen6HJXHE%2F7%2BFJgzrYNdutI0zgNcdgiDqhOD%2BynN2yVjgnbeEV2pWZmxjMMlvFp9fC6N0mUb6c7Kt8tJFl9u9mfR6&X-Amz-Signature=5580196814dec23edc5c3f3e4abaac9ecb1cf50355074c8b9cc7a2109e287399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQ5C624%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIEt9ib%2FYtK8Zs7bzIuThMiloB6sbyUxnUggcb7jLgIhAOA3rrfT9uEi1hXvbjo8yinCdjuRxy0mteS3AvgOcjKaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ZwQZoQlZtmhccPIq3APbQVvToAAxaq9TI6gbxO9QXgCoCrQvHhH43vAYerBFwJLSnCnLDp%2F%2FK%2FlXKSiXp5XYYCdfxwPVzpx8trW69X06U2YfRmRts2o0%2FTqMHraY6XjQlRWZlm7%2BsEOuPf%2Fs%2FntK%2FWKbtH2uZEDd0OdMR9667CF8PiPaxyyjJJuPl9hlm1dAf1lGOBtkzeRprN3TaYybGifofV%2BHQTUR5z9XJjtk9pjwMGc3ZZeROig0I0v05BEGj%2FGpRe3TkHdIG0StXM3rNAAtoIqNC8qfXHGOBdO0dlmLWIWpsH9zl3eTaNDx1FeFmLwarrESJQa%2FwRoUH1XmB2tRhtfVfg7upean2iTHbNN4b05KAb0kKXs28e4dv5qRloFhGGnWen6weXbwCV1cKOIJvQTLKFAIRQhsA3IT8okar%2FbQcPNkjHCuTqo8dMQpc72VK%2FR4hDF5stqZI4E7sTUUPdPxviYyYYc6v2U0SpjRhPJvQHCVmZkOfPQCsqDCEXD5wzrsMmBcwGNhITAOI5yP31gvQiKkz%2BUgUz9rvkmbpQfh8p7YXtgZN9el280o3qnoQYCU5UKvUatieQGufkMip9qELPcLye7K85FY7rDqJeK4grmgkemZCck7JDw%2BqAgGXz4t2dQJRzD4t%2B7DBjqkAVbGW8eV3XlXepmHWuE73lehn3ktibNcwBzWF6Gi1vsvNENdeGsTp53dQRxWFkw6wwL3%2BXkdC6igirZe%2BujEckubOk7l4iyjYNgXQ7Z4x8%2B38XcgbQC8quN%2BD%2BWVuS35FKTMen6HJXHE%2F7%2BFJgzrYNdutI0zgNcdgiDqhOD%2BynN2yVjgnbeEV2pWZmxjMMlvFp9fC6N0mUb6c7Kt8tJFl9u9mfR6&X-Amz-Signature=f642b079a73fd558fe559ef6c6270639f5f28c9942a91e641ae8bf34d71ef2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQ5C624%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIEt9ib%2FYtK8Zs7bzIuThMiloB6sbyUxnUggcb7jLgIhAOA3rrfT9uEi1hXvbjo8yinCdjuRxy0mteS3AvgOcjKaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ZwQZoQlZtmhccPIq3APbQVvToAAxaq9TI6gbxO9QXgCoCrQvHhH43vAYerBFwJLSnCnLDp%2F%2FK%2FlXKSiXp5XYYCdfxwPVzpx8trW69X06U2YfRmRts2o0%2FTqMHraY6XjQlRWZlm7%2BsEOuPf%2Fs%2FntK%2FWKbtH2uZEDd0OdMR9667CF8PiPaxyyjJJuPl9hlm1dAf1lGOBtkzeRprN3TaYybGifofV%2BHQTUR5z9XJjtk9pjwMGc3ZZeROig0I0v05BEGj%2FGpRe3TkHdIG0StXM3rNAAtoIqNC8qfXHGOBdO0dlmLWIWpsH9zl3eTaNDx1FeFmLwarrESJQa%2FwRoUH1XmB2tRhtfVfg7upean2iTHbNN4b05KAb0kKXs28e4dv5qRloFhGGnWen6weXbwCV1cKOIJvQTLKFAIRQhsA3IT8okar%2FbQcPNkjHCuTqo8dMQpc72VK%2FR4hDF5stqZI4E7sTUUPdPxviYyYYc6v2U0SpjRhPJvQHCVmZkOfPQCsqDCEXD5wzrsMmBcwGNhITAOI5yP31gvQiKkz%2BUgUz9rvkmbpQfh8p7YXtgZN9el280o3qnoQYCU5UKvUatieQGufkMip9qELPcLye7K85FY7rDqJeK4grmgkemZCck7JDw%2BqAgGXz4t2dQJRzD4t%2B7DBjqkAVbGW8eV3XlXepmHWuE73lehn3ktibNcwBzWF6Gi1vsvNENdeGsTp53dQRxWFkw6wwL3%2BXkdC6igirZe%2BujEckubOk7l4iyjYNgXQ7Z4x8%2B38XcgbQC8quN%2BD%2BWVuS35FKTMen6HJXHE%2F7%2BFJgzrYNdutI0zgNcdgiDqhOD%2BynN2yVjgnbeEV2pWZmxjMMlvFp9fC6N0mUb6c7Kt8tJFl9u9mfR6&X-Amz-Signature=cc8a3971d9134bd1fbbecba96c59f1ae5419f107a0f977fa76a6a57bb17b6a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKYN5YS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEx%2FtZbsmKS2HNso9Espq05EzGjoq8bQ%2Bu8ab%2BQv0LWYAiBMb6o8LS3xcDntGam67hpNOWfKG9%2F5IN3s8DcyLbclFyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe35xZHeUuJO%2BL5NBKtwDVRyGQSvwRv8hbAYXC65QH9YSk7g37SszbWb7k3s%2FZQq7oI%2FJgMdZ8fIipcHHbKwZVlhlZ06xU81%2FbjSn%2Bhm8ReosIQ3CQPm2CB4gWDOljnT6l%2Fbms7IjlWe8rVr4atyi3trygWaEanMz4enlSO064k9943KHuiwgoBnEzdgpX%2BGE%2F%2BndmHnpe88dmMgmjJLXj0NzUOcAtaUaUtovUmABy3CCT2WebgG3TD2O7dRymaHVWNd8z0JUpNRy7MyTEaoT9OJhdDkcZ5wSLz6gdAHaoX%2BfLKrEs7LNgpiHPYwkpmU7DJmmW42TUkaNGzyMq0CazSEtwOKlBhXboJNDpLBCjmGWPOrkD3Q1e%2BZarRasSBnAKsKgw6OdF%2ByyZYS11Z4DThUgca1OWER28Ox%2F5jM56rcCy7bp3wKFHuFmxRah1hCnYiWHOa%2Fl5QIymufd05pdmQMwnAOQu59dDudlZDLYiRqcqSAM5cEpX3PeIZnQnbI5Z8Xq5BQXQ1sk49jF7011GDPO%2F0Z93enWrCA4AFiyp9nq8jT18M9aXMsTyEP%2FvuROwKmcSSVJ%2F3OKduVb8FO0sc2ieuEnGXDIMjfnrhb2xJWlERgqGLEOmBdU28JvJuWBhSCPYdTkeW10Q%2Fww%2BrfuwwY6pgGbbx906kG21GFaX4w6y1uTEDSDVIsRfRA0vPgQ5Oi1KDBaDF1fn2x5vJTv%2Bfk4nQXa%2FByMQq6z4nANGELebLMKFfqaFcrK%2FA1KBCj1Z%2FTbBX%2F%2B8dTcnGbLPeTQyHzLSo1CE3KZ1IhQLWAk1QIH4jBP4ifXBkYrGT5%2BGn039PJrNXz%2FALlKKVWFDApbr%2B7RYWEm8agtLTNXi%2Bwr%2FPKoK1EDvUtNzbqW&X-Amz-Signature=51fbd17f3f4172d26f29125f44ccc0321743d5dd2ec6503f49eb9d2594315666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG2H3PTU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRADRlJHxhCmp9fdYHg1n0oZlz%2Bm9kJ0GaFwXcP9ODHwIhAMVpJ2ZEuCER2iepMbSZjtDhmrPGgzGvhlhvPcFw9z4NKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIYZLQ2wFbfgeuHOwq3AOHYNx%2Bq%2B2XIGQZkV1fN7izPdkrwV6w14vnFE2Z8oXpLBq75vbJUBBiqF1bkwAQ%2FqsQ205atOJ26oIfGIllNig%2ByZ0IGLfyK6p0l89tNej2oNa9p%2BBnSA8VYC785AM54a1rBinTBBOjZZZlI%2BjynTiFAIAm9leQod%2BsVPqEh5Tjbvp4Al1vlyKwftTgp9FT4C5Z4Wt3d1nEVxRQpnAKjIcuyYEjtguug17mEHgQK%2B%2FxQnFYroG68s%2FeMzpJeQAWJDvzCBhSSYNxo6US%2F3VEd0znftWdNwDA9he5RT1cm6%2Blx9evk3DappTPX9KGoRMIildPoVzAueyYj079EDoITWVEspw86zDzFj96MKnzjsfe1UO031Zyc5ixKEJw660oFBnH6kLx%2B%2F9L0efvPjfFyTJIMz9bkz0F9vWCu02jFxVUfyyHZV%2Bu2HDt0y0RiHkFMexIudKRmhGNCP31cR9exG500ITMbAXsj25X%2BFCH2F5MWSDez4Wr1RCUpZcXIvRLNBbjOVoyP5wtaWHROmetQkWvfP2DLOJIP%2BlTV1b3A%2FNeYjQRXbfBTtOO7KtP6zYyEEcBjUhLAnyFDHpPEhRZ0JuDFagWpK%2Fz6KoncmnACtn%2BFT6n%2F4XQrUvxEsWGSjCauO7DBjqkAdOX%2BoStlSlHIEECW6aIJ70TpgLxUQF8pTXHs1aEjYPoxskS%2Ft3u1E1TDyLSvkYnRt0zZY%2FFdS1e%2FRjiSeGEzhdU05nEZyhqgXD7Xy9rx8wGShGedzAjPusMZPsPHGGhLgutBnAHg6VBo6gfxA0nBuQ6i088yUUCo37bXRobCDxUpkpy0pqzYednIdFy%2FmJzs6nx9kgGuqSpgWJtOKaxkf91vQdo&X-Amz-Signature=1e5e38a5c76dcf7f3a95a78d2a91a1fc12dfc1819ca9ac891e9979ce30a2ae45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQ5C624%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7rIEt9ib%2FYtK8Zs7bzIuThMiloB6sbyUxnUggcb7jLgIhAOA3rrfT9uEi1hXvbjo8yinCdjuRxy0mteS3AvgOcjKaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ZwQZoQlZtmhccPIq3APbQVvToAAxaq9TI6gbxO9QXgCoCrQvHhH43vAYerBFwJLSnCnLDp%2F%2FK%2FlXKSiXp5XYYCdfxwPVzpx8trW69X06U2YfRmRts2o0%2FTqMHraY6XjQlRWZlm7%2BsEOuPf%2Fs%2FntK%2FWKbtH2uZEDd0OdMR9667CF8PiPaxyyjJJuPl9hlm1dAf1lGOBtkzeRprN3TaYybGifofV%2BHQTUR5z9XJjtk9pjwMGc3ZZeROig0I0v05BEGj%2FGpRe3TkHdIG0StXM3rNAAtoIqNC8qfXHGOBdO0dlmLWIWpsH9zl3eTaNDx1FeFmLwarrESJQa%2FwRoUH1XmB2tRhtfVfg7upean2iTHbNN4b05KAb0kKXs28e4dv5qRloFhGGnWen6weXbwCV1cKOIJvQTLKFAIRQhsA3IT8okar%2FbQcPNkjHCuTqo8dMQpc72VK%2FR4hDF5stqZI4E7sTUUPdPxviYyYYc6v2U0SpjRhPJvQHCVmZkOfPQCsqDCEXD5wzrsMmBcwGNhITAOI5yP31gvQiKkz%2BUgUz9rvkmbpQfh8p7YXtgZN9el280o3qnoQYCU5UKvUatieQGufkMip9qELPcLye7K85FY7rDqJeK4grmgkemZCck7JDw%2BqAgGXz4t2dQJRzD4t%2B7DBjqkAVbGW8eV3XlXepmHWuE73lehn3ktibNcwBzWF6Gi1vsvNENdeGsTp53dQRxWFkw6wwL3%2BXkdC6igirZe%2BujEckubOk7l4iyjYNgXQ7Z4x8%2B38XcgbQC8quN%2BD%2BWVuS35FKTMen6HJXHE%2F7%2BFJgzrYNdutI0zgNcdgiDqhOD%2BynN2yVjgnbeEV2pWZmxjMMlvFp9fC6N0mUb6c7Kt8tJFl9u9mfR6&X-Amz-Signature=1a1639aed2fb609b3a35b8eac2a0438e6d2222e4b6b91ec44bb56661fee2aad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
