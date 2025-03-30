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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOUMXGLD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFLeWNik1jOQEwpKx5VHVhPruKE4R0PqCrHXfbNt0UQMAiBM%2FpQrP%2BK5ZKWoM6RpjQd2%2B2st4aCNwX0ycvO%2Bb6CkDiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2FA35sRk00zFLKgKtwDS7W8%2B6i8buDZOmP6C7Nn%2BktXenl4LkA2wSHvduIYcMWG%2Bqbb%2F3F3P8BEY1wrLglZxnGZEFdB3S35DqlDnaBoVJJ9bjIducW9xtQZ%2FvU04NMVgBk5zS0kZyraiZ0QbYm8yeTf6yzDZUkS8Fm9CENeszVxFRWGqeK4Pq3CVHUXNzYJWtgP3DBcDbtevfyB850hCRFhCAAEmm6Py8i6WBsiHLQWG4a5kxZ2h5uNAGFJMLXUpU%2FjH6CLroFgCnuAcxtgnQeSvYSDbDp2LXwOgcrduh7CizW%2FK4HQHuNEpv71DCG51RhxBy88QakUttJXL3o%2Fp7CqcAy3R%2F2OoyB5eD0ENDTrXierPnljEJvMqVYYVQMHEgK25z2HiVnUdcCe%2B0BGj%2BR1iMJsHK%2B2A85ybCeA3brYLAmjryfr0PV1r8mwKtyYHIAF%2B%2B3hJxkKRkfg60Ag0Xtd91FdLWEaK8EOwVdlw4r6FR9Fsor4Hn%2FJzjgvBDt6bSBs%2FXmQVzskeoqRBiTwmMtpx7Yz2krFhviNpl%2Fv0ImT5cY7TYlaAIpZYzwC1WNKAFultOlfk3aBFs3FQwaoGSs6lmsuC9RCQDQPu9Jx%2FEc7Yauh%2BFyhYNA%2BuThAGZ78gQ%2BEUWOtvzfNEDgwwuqivwY6pgGDUe7WIkZ8uDXmJrN88vz3JERPnujYPErm2rW6YuWUdSrKBDfGfECagByu6mVl8f4bxQHEhCv%2BVL%2FIFjd2yICy2o7czEbiz0qFaovSdWT61zKzPrHpWJ4pgeMw%2FW54dZqLk4hOAXA7mIHU99%2BNSunfosc3IXxyGYwhAwiaGv4fDp5pJI4DnGdBZEJeSLXDVUHVmdIboCQU%2B5DQs8kDXAChORAUwrPM&X-Amz-Signature=bf3b9336a791cbdf84e2af1d6fac217d577af2cfc3435e5fa6f80ba077ec00cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOUMXGLD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFLeWNik1jOQEwpKx5VHVhPruKE4R0PqCrHXfbNt0UQMAiBM%2FpQrP%2BK5ZKWoM6RpjQd2%2B2st4aCNwX0ycvO%2Bb6CkDiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2FA35sRk00zFLKgKtwDS7W8%2B6i8buDZOmP6C7Nn%2BktXenl4LkA2wSHvduIYcMWG%2Bqbb%2F3F3P8BEY1wrLglZxnGZEFdB3S35DqlDnaBoVJJ9bjIducW9xtQZ%2FvU04NMVgBk5zS0kZyraiZ0QbYm8yeTf6yzDZUkS8Fm9CENeszVxFRWGqeK4Pq3CVHUXNzYJWtgP3DBcDbtevfyB850hCRFhCAAEmm6Py8i6WBsiHLQWG4a5kxZ2h5uNAGFJMLXUpU%2FjH6CLroFgCnuAcxtgnQeSvYSDbDp2LXwOgcrduh7CizW%2FK4HQHuNEpv71DCG51RhxBy88QakUttJXL3o%2Fp7CqcAy3R%2F2OoyB5eD0ENDTrXierPnljEJvMqVYYVQMHEgK25z2HiVnUdcCe%2B0BGj%2BR1iMJsHK%2B2A85ybCeA3brYLAmjryfr0PV1r8mwKtyYHIAF%2B%2B3hJxkKRkfg60Ag0Xtd91FdLWEaK8EOwVdlw4r6FR9Fsor4Hn%2FJzjgvBDt6bSBs%2FXmQVzskeoqRBiTwmMtpx7Yz2krFhviNpl%2Fv0ImT5cY7TYlaAIpZYzwC1WNKAFultOlfk3aBFs3FQwaoGSs6lmsuC9RCQDQPu9Jx%2FEc7Yauh%2BFyhYNA%2BuThAGZ78gQ%2BEUWOtvzfNEDgwwuqivwY6pgGDUe7WIkZ8uDXmJrN88vz3JERPnujYPErm2rW6YuWUdSrKBDfGfECagByu6mVl8f4bxQHEhCv%2BVL%2FIFjd2yICy2o7czEbiz0qFaovSdWT61zKzPrHpWJ4pgeMw%2FW54dZqLk4hOAXA7mIHU99%2BNSunfosc3IXxyGYwhAwiaGv4fDp5pJI4DnGdBZEJeSLXDVUHVmdIboCQU%2B5DQs8kDXAChORAUwrPM&X-Amz-Signature=6affbce4206e86320a4c5bcb2d6e5670ba505af05126a114da14cefa3aa0863a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSODCJSM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQD9KzCtNa%2BKf4k2SNfzkVRhn9lnMh9uGQgphyUHc5gsQwIgSsNCKQHrx2d%2BVUA%2B3jP2LzxCicY54kOsefNE%2BQ0tWYMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfahY6qRsqdNpAEfCrcAxJ%2FraxH35gmamtCqIf4cKDWw76h26IrbaQhuiSf3RIPO%2F0VqvrUvij0PC7%2B8MZvlCueDjkzUQB04d5eU286d3aG7xfYdA1coYr0q4kdVNCdKrWPY01glDhBgb4%2BpfJ0CNcIgw90Ma8%2FCMPkgAO4jaaCloNiWyoHvjjibWbAvLC7st7ZN2N7MfexAkrLZyQK1xT1TT1IZt7r2KF9Z3fm2gapJAwCmmtgwnnC8omFqESmR9IQvdZQzB3DvRThmxSudyAwf1q7E9Hxf8tUe91pIxDZIw6P1fI4BAMh7ZKcf61y7Gs7hMR%2FBbQtr7HNK3qopzz2q29iTUJbdJNXsfMqeLNHOdyMtZEx%2FeGFvveYD3CcM71ez8muwjhd%2FVrvb6c3RhHkt7tJhlollFYZ%2Frl82Zl4MrZ5YWHZ4RUGJ6wOOT32nKn9oqcS5A0SoCaQp3iby9vzWrXIT1XVhKOsy%2Fgcfm5Jye9Xr2edqXxBdn8KjIV6oruStZw17e33ulVHg31jZ9%2BpiP72GlrHR%2FilBAb%2FKiqqvKXZYwct%2FvxfyXGvzSfgz8CSnIhirC7o1ND6w%2B1c1GywJju2cOcoN0dlmsU%2Bmfl7zSGA603vG3CMHNYPEIvd2z%2F2kRyPZFQAPfFjMJDqor8GOqUBg9nKI%2BYH48ukxI555G3YAp19ZY9gyQjrs6NzMKT8R9i%2B5vQKgDAHSh%2FWnpKihd1NfJc4KOjn89X88eVTDsn5sPQ0mxRd7KWsgCF73WPy2zRrQ4UuwlVvF2xy3gRWIqm2orhLLUeYSgAqv4q3G%2BsMSOgw3l8E8t9ruOgaL7nUiCjlwSnINI%2Bc%2BNzf28ezUdnbxV%2F3pvtI%2BlGE92GJ5WhOqgWwlQ8L&X-Amz-Signature=f7efe3abc8f10fd72eeb9a52d686a967f1f97047d2cb2ef038e6863cd79d9fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXQC6DVB%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEOviu20ju%2BSQ3d0dxVG%2B6a8MZbx5S7jGB3z%2FO7es%2BvCAiBuHppk295kICZxROw%2FgGg51Oj9Lj058XwKRX5uobDwOCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0hhSfZTfiFlQrg8uKtwDQ7nwDTMJ0hAGJrnxxIdmXubajatFYXjLo51SbTzPbQ%2BIB3g3DxNYP6HLTcZM4Ht2ZJSwb4VLsv2iuXWVMpukUMDc%2B2upu24HVMXyqOf947nLGpH4kB6NyDQ5tyTS8UCFis2JJK0QTnaGyZpoie3nHiU9zlOlOXSLWLuXFR3TKNCE%2BQ7EG8t8JODxrQHBgZBZMOhuKcQ7dcI7MnCiQL1vgviAZLfm6M3ALzrTwhOhIVzCD7BbfMh9pPsT2JVNpGh3sCpH69%2F0OUthhQj4rh9uJo4uCv6CSMIZcSoIizDWei%2B9rZo3S6vjAn3kCV7uRXVXkNd5feLhxvS8VaRu1LYBd3KMmCyiWyurunwVMDJQ3gerChyLqjTzV6KDWPdHVN0jXh0D4DgvwrvU3BkAJ4dLSwGkY0oIOGPGkDELkpQBPixwhwoFF0teMmj2O9Dsf90Uws%2FFliWYh%2BRAq42p0sq45%2Brd3dThbC2urPHOOMOu2oK37orxnpc2482F%2BHDk0bNxCgxso2x9EfE6yckFXZDH9H0Z675LHtio1aqNYgIgK9K7%2Fdeonj8ejhAFb6LUQ%2Bz87MCfKCnmWC0DWUP9Hk5i%2BQZWdJqaFn9YSqAciM7TD62IYp11GXnMEZSbqo4w%2BemivwY6pgFRg958sYTEYtZf25%2ByWeQK%2BuHDfQSpr0Uj9SaWRL4re6ExsmOS7M%2F8E2M85q5LkYjo3%2BN8ntL%2Fr8h0zbOjvUMUhzAByD40YamFSTuMisMzknNyRc0hgTDHh9LdCHfPP8a9%2BYgQKZRSf%2FvEzfoGkcfTTWxeImIYqKaNUD3fnZAd2CUVNsMUOrdUC0yy8ON3IeFp6J%2B3dftbGsQYRl3vwwSM1KAqOi7w&X-Amz-Signature=546a97087fcbb205f37df0a81b04ecae43ad6408c998338414c52560d6ff2328&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOUMXGLD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFLeWNik1jOQEwpKx5VHVhPruKE4R0PqCrHXfbNt0UQMAiBM%2FpQrP%2BK5ZKWoM6RpjQd2%2B2st4aCNwX0ycvO%2Bb6CkDiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC2FA35sRk00zFLKgKtwDS7W8%2B6i8buDZOmP6C7Nn%2BktXenl4LkA2wSHvduIYcMWG%2Bqbb%2F3F3P8BEY1wrLglZxnGZEFdB3S35DqlDnaBoVJJ9bjIducW9xtQZ%2FvU04NMVgBk5zS0kZyraiZ0QbYm8yeTf6yzDZUkS8Fm9CENeszVxFRWGqeK4Pq3CVHUXNzYJWtgP3DBcDbtevfyB850hCRFhCAAEmm6Py8i6WBsiHLQWG4a5kxZ2h5uNAGFJMLXUpU%2FjH6CLroFgCnuAcxtgnQeSvYSDbDp2LXwOgcrduh7CizW%2FK4HQHuNEpv71DCG51RhxBy88QakUttJXL3o%2Fp7CqcAy3R%2F2OoyB5eD0ENDTrXierPnljEJvMqVYYVQMHEgK25z2HiVnUdcCe%2B0BGj%2BR1iMJsHK%2B2A85ybCeA3brYLAmjryfr0PV1r8mwKtyYHIAF%2B%2B3hJxkKRkfg60Ag0Xtd91FdLWEaK8EOwVdlw4r6FR9Fsor4Hn%2FJzjgvBDt6bSBs%2FXmQVzskeoqRBiTwmMtpx7Yz2krFhviNpl%2Fv0ImT5cY7TYlaAIpZYzwC1WNKAFultOlfk3aBFs3FQwaoGSs6lmsuC9RCQDQPu9Jx%2FEc7Yauh%2BFyhYNA%2BuThAGZ78gQ%2BEUWOtvzfNEDgwwuqivwY6pgGDUe7WIkZ8uDXmJrN88vz3JERPnujYPErm2rW6YuWUdSrKBDfGfECagByu6mVl8f4bxQHEhCv%2BVL%2FIFjd2yICy2o7czEbiz0qFaovSdWT61zKzPrHpWJ4pgeMw%2FW54dZqLk4hOAXA7mIHU99%2BNSunfosc3IXxyGYwhAwiaGv4fDp5pJI4DnGdBZEJeSLXDVUHVmdIboCQU%2B5DQs8kDXAChORAUwrPM&X-Amz-Signature=af09e856898cb1fa95c814086818e570a5273e861265dc50fe5b293a2576cebb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
