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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4BRX5B%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3CcA2eFQhSA7eHcPaU6wzmKe4duXvbDgqmV%2Fks6m6AIhAOMct4h%2FIgig885mZBh7yKeC5pUHbWUdKTmZfdueO2CoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FnZGtaZnYhMz6ImIq3APXLGA4Nwi%2FqYj%2BV6SIS9yX4lurxzjdLMWbaDDVKA02FyoS3ifl0nHiQrNc8wOVBLFiKuRTUJk97lxrEA0sl%2Bu5x5X%2FPE04P9HCzYLmR9uvmyy9brPfLFIij8HXIskgwAuqkAidi%2Bqr2L3wHBn%2FHYSkMlJ00ft%2BZiNAF%2B1VgnR3YoGWn6NA2Q6KsQXJJXqQgf2hAOfxJqoY94im%2BR%2FcCPbIUFUnhrTD%2BpoHYtSPP293Q1ijE4xBrqaGUUMrRzVopX2KbFe0WCTUIGxi9a%2FPHOWs1aZMWW7oAxI5s8crGsT9QKnViXrlKIGj%2FXeFQ4H%2BU3fq0KRhx%2BdWAyAFwQndTd4Gra%2FPgdnHHzH112WQZfG3lAfWNR7zPh1VYCtHxCznmoDpSQI2nJnh7kXVv7NQJFtNA5P5%2BUzDFIEB7cFSe%2FMp%2F1ZaYEU4gNBTmZsM6fAgRj33A%2BDeu259jO4KKVAPSR1cjDY8xVUBfGKd4GrTNpIcNbvfgtZCnEWbx1RblwHjXnPl9syhqjbypT3ilNUkHbulO5EWAmmU%2BJS%2BQZXJBOzEFamICwWQyunhmTuxcVA9e9YXk8YpystqfTE1pk5KADClqQmJjIAussE6vmDvcZH1Pk0STsoDPGHZ6Hc7KzDe2%2BDBBjqkAZ9ifIwpEjK1UEWFSO9TmxhtrbCoBdrw8y4b%2FGcr1KGdYJ8J5gbEqF8uKqA%2FFVjSUH5i1ybfWx%2FjqmcLTMKoaBIcqeGqJLNuPCQi730nqGHisXMcQgNLeMUSZDlqJynwa0vnx8gytseoQxhr%2FAqkOpsGAkS5g71XsCbhVgl5Fji139gjKGkw4w%2FpM0M%2FzMKH2XUMnGQAt2lODKt6xoHpU3P0%2Beq1&X-Amz-Signature=73273eaf7c7b6dd6aec7063f0b52d4cb4b3e7bd2630128ad05aad9a8870fd603&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4BRX5B%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3CcA2eFQhSA7eHcPaU6wzmKe4duXvbDgqmV%2Fks6m6AIhAOMct4h%2FIgig885mZBh7yKeC5pUHbWUdKTmZfdueO2CoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FnZGtaZnYhMz6ImIq3APXLGA4Nwi%2FqYj%2BV6SIS9yX4lurxzjdLMWbaDDVKA02FyoS3ifl0nHiQrNc8wOVBLFiKuRTUJk97lxrEA0sl%2Bu5x5X%2FPE04P9HCzYLmR9uvmyy9brPfLFIij8HXIskgwAuqkAidi%2Bqr2L3wHBn%2FHYSkMlJ00ft%2BZiNAF%2B1VgnR3YoGWn6NA2Q6KsQXJJXqQgf2hAOfxJqoY94im%2BR%2FcCPbIUFUnhrTD%2BpoHYtSPP293Q1ijE4xBrqaGUUMrRzVopX2KbFe0WCTUIGxi9a%2FPHOWs1aZMWW7oAxI5s8crGsT9QKnViXrlKIGj%2FXeFQ4H%2BU3fq0KRhx%2BdWAyAFwQndTd4Gra%2FPgdnHHzH112WQZfG3lAfWNR7zPh1VYCtHxCznmoDpSQI2nJnh7kXVv7NQJFtNA5P5%2BUzDFIEB7cFSe%2FMp%2F1ZaYEU4gNBTmZsM6fAgRj33A%2BDeu259jO4KKVAPSR1cjDY8xVUBfGKd4GrTNpIcNbvfgtZCnEWbx1RblwHjXnPl9syhqjbypT3ilNUkHbulO5EWAmmU%2BJS%2BQZXJBOzEFamICwWQyunhmTuxcVA9e9YXk8YpystqfTE1pk5KADClqQmJjIAussE6vmDvcZH1Pk0STsoDPGHZ6Hc7KzDe2%2BDBBjqkAZ9ifIwpEjK1UEWFSO9TmxhtrbCoBdrw8y4b%2FGcr1KGdYJ8J5gbEqF8uKqA%2FFVjSUH5i1ybfWx%2FjqmcLTMKoaBIcqeGqJLNuPCQi730nqGHisXMcQgNLeMUSZDlqJynwa0vnx8gytseoQxhr%2FAqkOpsGAkS5g71XsCbhVgl5Fji139gjKGkw4w%2FpM0M%2FzMKH2XUMnGQAt2lODKt6xoHpU3P0%2Beq1&X-Amz-Signature=c1ab03ff26546d984ea01f04fbc3835b70c6563046c1697dff37b1453ede5396&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4BRX5B%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3CcA2eFQhSA7eHcPaU6wzmKe4duXvbDgqmV%2Fks6m6AIhAOMct4h%2FIgig885mZBh7yKeC5pUHbWUdKTmZfdueO2CoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FnZGtaZnYhMz6ImIq3APXLGA4Nwi%2FqYj%2BV6SIS9yX4lurxzjdLMWbaDDVKA02FyoS3ifl0nHiQrNc8wOVBLFiKuRTUJk97lxrEA0sl%2Bu5x5X%2FPE04P9HCzYLmR9uvmyy9brPfLFIij8HXIskgwAuqkAidi%2Bqr2L3wHBn%2FHYSkMlJ00ft%2BZiNAF%2B1VgnR3YoGWn6NA2Q6KsQXJJXqQgf2hAOfxJqoY94im%2BR%2FcCPbIUFUnhrTD%2BpoHYtSPP293Q1ijE4xBrqaGUUMrRzVopX2KbFe0WCTUIGxi9a%2FPHOWs1aZMWW7oAxI5s8crGsT9QKnViXrlKIGj%2FXeFQ4H%2BU3fq0KRhx%2BdWAyAFwQndTd4Gra%2FPgdnHHzH112WQZfG3lAfWNR7zPh1VYCtHxCznmoDpSQI2nJnh7kXVv7NQJFtNA5P5%2BUzDFIEB7cFSe%2FMp%2F1ZaYEU4gNBTmZsM6fAgRj33A%2BDeu259jO4KKVAPSR1cjDY8xVUBfGKd4GrTNpIcNbvfgtZCnEWbx1RblwHjXnPl9syhqjbypT3ilNUkHbulO5EWAmmU%2BJS%2BQZXJBOzEFamICwWQyunhmTuxcVA9e9YXk8YpystqfTE1pk5KADClqQmJjIAussE6vmDvcZH1Pk0STsoDPGHZ6Hc7KzDe2%2BDBBjqkAZ9ifIwpEjK1UEWFSO9TmxhtrbCoBdrw8y4b%2FGcr1KGdYJ8J5gbEqF8uKqA%2FFVjSUH5i1ybfWx%2FjqmcLTMKoaBIcqeGqJLNuPCQi730nqGHisXMcQgNLeMUSZDlqJynwa0vnx8gytseoQxhr%2FAqkOpsGAkS5g71XsCbhVgl5Fji139gjKGkw4w%2FpM0M%2FzMKH2XUMnGQAt2lODKt6xoHpU3P0%2Beq1&X-Amz-Signature=d8460656873786197509176e8ba7afee39332d19ccabbbdfa57f901d57037111&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE45TJ74%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVt2VuibrE1DbRMXguIJ0rgoIlScsvQ0d4Ti7LGYCZ0AiAUeh8Gpk6%2FM6qpwAyRVABt%2BiH78LbEjYbe%2F70yX4WhjSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoQhkUo08yG2W3CUGKtwD5O9JwnHlhSYwx0XgozRPQNpZwKjIZbZWURUYEKNWvF6wgIxcU%2BxQJd8FO%2Fe8B%2B8ijbnXHd7rcmZ0I%2F5PhNO9zLfw%2B7h58mcXYvOelWRB08id8LbfvT3UxbHsLPuIN9YsWsOcOBezFuBkytS9YByEcaXUrVZ630XXf0fH6ermTM3cCZTPGaAJ4F9hI1C37IVKLTc0r3MmWYQnHmD3bMxLE8VyRp273d8NIHlnfb9wbsVOkaEWpcvFjEloPhPCvzQAHRifho%2B2Km5IUf22a%2FuWjR97DyQVFw5e5gXDMZO6ygdNdBDtH42wUyRpZKbzzm09ZW01qkMa3rJ11pggFjQoStaE8PAfTGoKsDAfJBQcwNVaj9b6wfS%2B9ZR8aXXEWEVZjRo0c1K4GpByA60Gleyr5zlSmp577Z5RNBSZYKDDWAdUCS1lEIBZBAv1n7C6HKpm42R48JVXJFo7redHEC982Sco%2BXsvaizNpJY5gFqXXBm8hPvU3LO4o4YkwkeCsLdwaisMiPZR8d8rtN77RaD77DP%2Fhew4586WGd98rHTBeyRyxErYmcmqPc%2FTqa4uo69UhafxhZ8KOVARpny9dRQDhVWbtG49sF1mZzuRCLTLzi734R3qaVqVBup4ikowhNzgwQY6pgGnkrFMLhz%2FdY%2FQdq%2BflS%2B%2FOqlBZFd0GH8ljt0qddFuwfS8tbpnBgPYEcYEhVIA329eaReWj5RuQ0Qr0y2mvBKOZbt23X7YAX1Kw%2FPOi0HwduHbOZBRyvXmCGYgFBUSEuouCFNtSyNRrdA1nEicMNKmYztgwlTnJUwnw%2F8rN2CqvL1d%2FY8OwIrRQLxlKQ7ttZIj7rsELAq8GeC3plGaIfMxYuBbs7W1&X-Amz-Signature=38a7dc6c1ad6beeedc3b8e8617b2444256cafff0f5f4818058d69f586984b5be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL6RXX62%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCQankwVBx%2FBa6el5l6DuWzpt4Wm%2BXkx8uOD4pvpN5UQIgBt7YVtRhQEi7jOha9pUVpdV57Ji30fLIeCLi915gDYEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkVRDnPxZzMrkOxkCrcA8Bjfsf%2FbIJF2tgaWQ75f9HJGOfzCHn4wqaBD57uL3Oqc5Rlegu%2FeGHE3UcBAYsSXOCoaNwVSPsoNuGwwPGH5T9jfawwGz568xVgUtbE9gzWTROnZgdkpes35%2B2SXfOPZdNJrvNJxjM%2B9%2FbWdl%2Bdc4EhcCwBud0eas5Wbl0UcwHjlmV6Ywv8yTYbowcPuqJ1S1x8gSV2khLVCRJb6sTAwkbUIFdz1tJsCF6ubyTIO%2BbU2Gedr3f9arHl3fR3yljjtlUTYVO0RLc4hV4tuhqd42NChILU1G%2BHEkJ2t8YBx7xi9d2ybxDrga06ouOlyLa8eJVjH0y%2F3m45WUp1Bo6zKerDTQxjTWDWx%2BJ9r7n6HUMNUd6%2F4m1bRSdFKPkld500mELHGeeH4y8tdMSZD9hmFRChkMQo5p8BxcyfnBkJuu7kjUwyVhU%2FWzci%2BbjbaV2nT7kG89dZX14p%2FrWfTJ0w1o2nUIXZuYnReS1UpIO0dCqJFvC6ncVMMM%2FM%2Fh6SUwGohRv%2BHINUoWS7QH4lte3myblnnsQxYgHf97U740j6pRBjLZPu2X3QSBS5xoWZi9hNx2bFWGayUsuedau2qwo%2BR93UoEZisEMCSj3l9OLHVvrDwm3KJYDEbIBhhq76MPHr4MEGOqUByhQOAOI7nuIv6PgysS8JjCQAHetOqvTy5z3%2BJ3TwOYl3cWq1ORRQTX2tnT31eDu56ASOOaizQRUU3cq3%2FSJnvzlu87fWVk%2FpAYt0rnSUzfoIh75FEuuBrPqkl045Z%2FMLcEproJnEftMxZ34VTO4VEaaUlEyJmG6r10rKZ7KCyZSgk0xy06n7JByTazY6sJm2YmF4fvV03S2sTRtTvdV6gHF96%2FnB&X-Amz-Signature=221618c8714b06434784ceb5f67b58858c76ea3a3c1b4e532dd01fe7ce5c1516&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X4BRX5B%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDS3CcA2eFQhSA7eHcPaU6wzmKe4duXvbDgqmV%2Fks6m6AIhAOMct4h%2FIgig885mZBh7yKeC5pUHbWUdKTmZfdueO2CoKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FnZGtaZnYhMz6ImIq3APXLGA4Nwi%2FqYj%2BV6SIS9yX4lurxzjdLMWbaDDVKA02FyoS3ifl0nHiQrNc8wOVBLFiKuRTUJk97lxrEA0sl%2Bu5x5X%2FPE04P9HCzYLmR9uvmyy9brPfLFIij8HXIskgwAuqkAidi%2Bqr2L3wHBn%2FHYSkMlJ00ft%2BZiNAF%2B1VgnR3YoGWn6NA2Q6KsQXJJXqQgf2hAOfxJqoY94im%2BR%2FcCPbIUFUnhrTD%2BpoHYtSPP293Q1ijE4xBrqaGUUMrRzVopX2KbFe0WCTUIGxi9a%2FPHOWs1aZMWW7oAxI5s8crGsT9QKnViXrlKIGj%2FXeFQ4H%2BU3fq0KRhx%2BdWAyAFwQndTd4Gra%2FPgdnHHzH112WQZfG3lAfWNR7zPh1VYCtHxCznmoDpSQI2nJnh7kXVv7NQJFtNA5P5%2BUzDFIEB7cFSe%2FMp%2F1ZaYEU4gNBTmZsM6fAgRj33A%2BDeu259jO4KKVAPSR1cjDY8xVUBfGKd4GrTNpIcNbvfgtZCnEWbx1RblwHjXnPl9syhqjbypT3ilNUkHbulO5EWAmmU%2BJS%2BQZXJBOzEFamICwWQyunhmTuxcVA9e9YXk8YpystqfTE1pk5KADClqQmJjIAussE6vmDvcZH1Pk0STsoDPGHZ6Hc7KzDe2%2BDBBjqkAZ9ifIwpEjK1UEWFSO9TmxhtrbCoBdrw8y4b%2FGcr1KGdYJ8J5gbEqF8uKqA%2FFVjSUH5i1ybfWx%2FjqmcLTMKoaBIcqeGqJLNuPCQi730nqGHisXMcQgNLeMUSZDlqJynwa0vnx8gytseoQxhr%2FAqkOpsGAkS5g71XsCbhVgl5Fji139gjKGkw4w%2FpM0M%2FzMKH2XUMnGQAt2lODKt6xoHpU3P0%2Beq1&X-Amz-Signature=e7212249a6d8b46b553fe0009053c609268d47b7ae7b7f112f4cea5ac83f228e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
