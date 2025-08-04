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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53BWUHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDUKetuBhejvvrjWXxVBfSnlSqqLemqh2byXssN5%2Fm%2FPAIhAIqCUdVWVClyK%2Bbiv028MHW5OTaXknmNsqoQMRwmEELzKv8DCEQQABoMNjM3NDIzMTgzODA1IgxtM5j45hWANxWsdusq3AM6DRT%2BBDBqKthvL2wnzAh0afjIj3CrWTdECaSAB8NgjVC0w8GIJv1JOGYVllocQj5T5qjuM%2F6agemygcY%2B0W0MpwWHMiLi7qpkSB07nJ%2FOpxu5rUOqnLsypk5MWcsSDgBsFuw%2BunWXK%2Bupv5Zh8SP4hTeyVt6TZ4DXLGl2IGooVoy%2BKcZPVs9x0Lh0TkTnu47NR%2BP%2BAugf7SWpBNjj%2FZgWdI%2BcH7%2FAfOnoA8iMcXZOvlg8WiHY9D9izjl8FTxEIjeUAEgLORadOjUczImu6S%2Bn%2BkMttnZOpT%2BE6PKb0Dijnw%2BgRbgH%2FioUyAQ9hLLLIuEybFaeKx3twQ4e5zdMhxDsnemaqsG9TjdwoHXzthSrQ3vFkQXefSksjmIszVgE6j7GQBTLOFl99zZaJuUOLgzLr%2B2iR0o%2Fu6C6KOYf681REw24K1P48dJf730f9PxqRNGUCqMbJ%2FLGuZHRcWe8%2BGBQ2HNEPtpYQ%2BV8bGHMEQMvgmP1MlBkUG9gv1oTlEZow8z2gi1Af3p1MEOZ%2FClaPmluDeX16FKeAZ1xTNIvSVAe3L8X3t24QSNjvgSXLDWio75cSOHvv0bQBIsCCeOus5jqibNTOX23W8uOdZksN1vIPSv4e6xEsr8kS63VEjCcpsLEBjqkAVOj8bR5nEb55wV5gU5qu8gLKTDGKxz1jIPZsy4Xs9UNWJL%2BeGwTo5UzmDlf6LzHw6ZAQWFc02wxMw76HyHp9mPBVIkLi4Mdbb0cjSpPyBbLwkTc0hZPq%2FaGQjm8%2BBWAnLP8CtjkET55eCjW3pGBL3o53KHOh32rwYFvTYWp4N8G5%2BvAOVK2mKLRoTfD3RAOvrq9uW21whXwngBg3Gn90qSXP6o3&X-Amz-Signature=d16d9015ebb5cc40b01718eccbaf1abdc437121523af043529db012e05ec0354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53BWUHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDUKetuBhejvvrjWXxVBfSnlSqqLemqh2byXssN5%2Fm%2FPAIhAIqCUdVWVClyK%2Bbiv028MHW5OTaXknmNsqoQMRwmEELzKv8DCEQQABoMNjM3NDIzMTgzODA1IgxtM5j45hWANxWsdusq3AM6DRT%2BBDBqKthvL2wnzAh0afjIj3CrWTdECaSAB8NgjVC0w8GIJv1JOGYVllocQj5T5qjuM%2F6agemygcY%2B0W0MpwWHMiLi7qpkSB07nJ%2FOpxu5rUOqnLsypk5MWcsSDgBsFuw%2BunWXK%2Bupv5Zh8SP4hTeyVt6TZ4DXLGl2IGooVoy%2BKcZPVs9x0Lh0TkTnu47NR%2BP%2BAugf7SWpBNjj%2FZgWdI%2BcH7%2FAfOnoA8iMcXZOvlg8WiHY9D9izjl8FTxEIjeUAEgLORadOjUczImu6S%2Bn%2BkMttnZOpT%2BE6PKb0Dijnw%2BgRbgH%2FioUyAQ9hLLLIuEybFaeKx3twQ4e5zdMhxDsnemaqsG9TjdwoHXzthSrQ3vFkQXefSksjmIszVgE6j7GQBTLOFl99zZaJuUOLgzLr%2B2iR0o%2Fu6C6KOYf681REw24K1P48dJf730f9PxqRNGUCqMbJ%2FLGuZHRcWe8%2BGBQ2HNEPtpYQ%2BV8bGHMEQMvgmP1MlBkUG9gv1oTlEZow8z2gi1Af3p1MEOZ%2FClaPmluDeX16FKeAZ1xTNIvSVAe3L8X3t24QSNjvgSXLDWio75cSOHvv0bQBIsCCeOus5jqibNTOX23W8uOdZksN1vIPSv4e6xEsr8kS63VEjCcpsLEBjqkAVOj8bR5nEb55wV5gU5qu8gLKTDGKxz1jIPZsy4Xs9UNWJL%2BeGwTo5UzmDlf6LzHw6ZAQWFc02wxMw76HyHp9mPBVIkLi4Mdbb0cjSpPyBbLwkTc0hZPq%2FaGQjm8%2BBWAnLP8CtjkET55eCjW3pGBL3o53KHOh32rwYFvTYWp4N8G5%2BvAOVK2mKLRoTfD3RAOvrq9uW21whXwngBg3Gn90qSXP6o3&X-Amz-Signature=8f90bed4c341d5301ad5fe626307e7b9f7597fb206cb07b91edd0a07916e1d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53BWUHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDUKetuBhejvvrjWXxVBfSnlSqqLemqh2byXssN5%2Fm%2FPAIhAIqCUdVWVClyK%2Bbiv028MHW5OTaXknmNsqoQMRwmEELzKv8DCEQQABoMNjM3NDIzMTgzODA1IgxtM5j45hWANxWsdusq3AM6DRT%2BBDBqKthvL2wnzAh0afjIj3CrWTdECaSAB8NgjVC0w8GIJv1JOGYVllocQj5T5qjuM%2F6agemygcY%2B0W0MpwWHMiLi7qpkSB07nJ%2FOpxu5rUOqnLsypk5MWcsSDgBsFuw%2BunWXK%2Bupv5Zh8SP4hTeyVt6TZ4DXLGl2IGooVoy%2BKcZPVs9x0Lh0TkTnu47NR%2BP%2BAugf7SWpBNjj%2FZgWdI%2BcH7%2FAfOnoA8iMcXZOvlg8WiHY9D9izjl8FTxEIjeUAEgLORadOjUczImu6S%2Bn%2BkMttnZOpT%2BE6PKb0Dijnw%2BgRbgH%2FioUyAQ9hLLLIuEybFaeKx3twQ4e5zdMhxDsnemaqsG9TjdwoHXzthSrQ3vFkQXefSksjmIszVgE6j7GQBTLOFl99zZaJuUOLgzLr%2B2iR0o%2Fu6C6KOYf681REw24K1P48dJf730f9PxqRNGUCqMbJ%2FLGuZHRcWe8%2BGBQ2HNEPtpYQ%2BV8bGHMEQMvgmP1MlBkUG9gv1oTlEZow8z2gi1Af3p1MEOZ%2FClaPmluDeX16FKeAZ1xTNIvSVAe3L8X3t24QSNjvgSXLDWio75cSOHvv0bQBIsCCeOus5jqibNTOX23W8uOdZksN1vIPSv4e6xEsr8kS63VEjCcpsLEBjqkAVOj8bR5nEb55wV5gU5qu8gLKTDGKxz1jIPZsy4Xs9UNWJL%2BeGwTo5UzmDlf6LzHw6ZAQWFc02wxMw76HyHp9mPBVIkLi4Mdbb0cjSpPyBbLwkTc0hZPq%2FaGQjm8%2BBWAnLP8CtjkET55eCjW3pGBL3o53KHOh32rwYFvTYWp4N8G5%2BvAOVK2mKLRoTfD3RAOvrq9uW21whXwngBg3Gn90qSXP6o3&X-Amz-Signature=7f507138bf6369a990f835777bfd3fc725fe72dfe69d06792a4827a7694fb68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZOS5LRF%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCpvabmUwd1vE%2FjJ%2FBd%2FfSGplX6VR1AGtdBP2VuQ%2FW%2BvQIgO7dm2J%2Fb%2F7Wid0wzop%2Bs8kMmxHsS%2Bdh7QGNPOdZMGCQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKLv8w5sr5OM9DQ8wyrcAzxZKxiQeUgxpSUtWT%2FoMLO7sqI3RO7InZ3gwZMPP7xtZTNymbRnIFV9UZWVhmHnxL%2BbpoWkgAAoJT9YEiKn6OXpYfdB0sqi1MBfQ0ffolihWDNF8Thbt47oS2ZgZ2sKdoapX8SgbhSu%2BkoVG0fLBV5%2FVXYcDDVx88A8loC4Hzq8ErxIs%2B0ZKk%2FhyvXmL4Nv2%2BQGsAZxnTvw3qfkIZ3qUAHWM%2FjiZIwdHaZ4NHj%2BEgXJ9En6qpx%2FETUKDhg3H1DEC3IvGEfw4DccBf87oVex2LuuCRLu7gdqxjNMpumG31tuXdXH1yhuOT%2Fhc2cFA80I55LTARAr7U0lL6r5FlMWgXzbsBn3Z2ebbL4aN69SEx0%2FloFYg%2FPJqR86V%2BdNuRhOXbNR930H%2F5aKKiFipci7AC7fjEEftl4xAyKcvmrWPmDLkm8Y6vJ1FEhZAq6cdR048ynoy68%2B99YqaJRnfCGW%2Bqpv%2FKfY1oRjyKaw7mr6P%2F4L8kk5F67Xt%2F1ui3E9%2BMwIvpApV8sm2Vg6IqlQLeVBnkzdBGZTox3TY0aOkD6wATH3nYEP0toRNXwy0n%2BIqHzeLRNER4QKi6hd3R8%2FH1YDYDbpDVWucJ3GzkVb887%2F9rBSgu%2F3h%2FTZXuZkd1jGMKGmwsQGOqUBrLcHP4Q%2B50zSCI3dDD9%2BcduQ%2BvTpAu1kgSYJOd0K00PJ2Il86YcoWESBI0xyGdhDGmrdR1YhwHBUEXh6W9NJMCGQlYA23XZD6EIWlXW%2Bs4e19EV99bLWo%2Bp0RgkQKNQrdSEjEkcWnW8dIFZzu5zlogVWLrNxBmHDns61djWxxn%2BjElPzl09RkMdzXhpr5Y%2FYfrw2XnMQCjdVhJmsiAsbLBQBgkyU&X-Amz-Signature=7400875efb6093c2496fe5ab5c504ef4551e5844a4ac2d09861aa2f065952d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPTVCN4X%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIBYiKyVktekkOjsJGF47T9cJjbXy85jlRSZu%2FMujc1l5AiEA6%2FTSafiTPi%2BMNTj7MsgeqGFCULRFgh4o9TsT2Qfp4LYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGP%2Bs7i6%2FiddfE1aWircA4KD3Xj6GuKOzIzf7r2GNYfwjjxUnQmqY3ComdGXEoFGOV8uKQPUMJjOS3%2FoIVL%2FzMKc0xfJ7rfD6eegSU7lkr0f6M%2Ff%2BZtrYFEPYgZnnjZ%2Bd9QghZlHkqzi%2BkK483VOcZkwvwPcRUoJ7QksLpOblD4TRthJdPGgWRbP3zN2cVi38kVcQI2mSlvXxoMwoGyltBy2Nf7CBfK4UrvS8yrfQAie7aePCpSl4BHsT7wbRIhKNIIH2ctRsWpu0Fd6jputKBYOUzgWg15wEJHatpbKKXQKfoAaCsU%2FUpbaRkQ%2B9X7FT2SAc1Ddwk1eCauY2tjwO7LaoiOXNtdIE7MM4ALQYR9pOlOvEC7uzvBDQ8S52esAaspe08z0epmqqSO2AlNTtE%2BnoeDaXXPWmCcyqiWyKFBLzNEgroBNwFUauVIRIG6OvsozFJpIoRf5qNVkcMWFb6c6EarFQqpSG%2BRuYCEEDyef5TMe6rWwuhWJpi6aEzNsrmxF36%2FFgZEPHOL3gl7UbZ81kjDSbgeHMSsrlKEei6im%2BIG%2FXqG8CkcR1Iwxaeb5mXhgWAKjSa6DIw9F5aqdps1FmoLRQZKALQpv3zW9nD0kHkkc55y9OJNtzfMIiAugejKzWJcfL4B5akeIMOemwsQGOqUByIGCmFk1aDGElubkzUNqHXpIT3mLD8SNykXiHf7mwKIigtqmJBegtyY9NBl%2Bg2Z2KwrxZgdEMEKmXj3iYCIuEBDjrzpeRcyYn%2FtDrCWBCPRn1LoyHhgYRmr1vvSGQlyeqaYlsfaSC2Yw%2BAsjb3CbaOv%2FNH6rVCxPrQCPjcwC43DmiXnyNFModRO9apA4MhMsCf5BKDqPL1nx%2BlOthlhKjNJ9Wbk6&X-Amz-Signature=afe609fa67f80a6397809330957342dc7eb5d4e7fedd64238006e6d0c6d00172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z53BWUHN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDUKetuBhejvvrjWXxVBfSnlSqqLemqh2byXssN5%2Fm%2FPAIhAIqCUdVWVClyK%2Bbiv028MHW5OTaXknmNsqoQMRwmEELzKv8DCEQQABoMNjM3NDIzMTgzODA1IgxtM5j45hWANxWsdusq3AM6DRT%2BBDBqKthvL2wnzAh0afjIj3CrWTdECaSAB8NgjVC0w8GIJv1JOGYVllocQj5T5qjuM%2F6agemygcY%2B0W0MpwWHMiLi7qpkSB07nJ%2FOpxu5rUOqnLsypk5MWcsSDgBsFuw%2BunWXK%2Bupv5Zh8SP4hTeyVt6TZ4DXLGl2IGooVoy%2BKcZPVs9x0Lh0TkTnu47NR%2BP%2BAugf7SWpBNjj%2FZgWdI%2BcH7%2FAfOnoA8iMcXZOvlg8WiHY9D9izjl8FTxEIjeUAEgLORadOjUczImu6S%2Bn%2BkMttnZOpT%2BE6PKb0Dijnw%2BgRbgH%2FioUyAQ9hLLLIuEybFaeKx3twQ4e5zdMhxDsnemaqsG9TjdwoHXzthSrQ3vFkQXefSksjmIszVgE6j7GQBTLOFl99zZaJuUOLgzLr%2B2iR0o%2Fu6C6KOYf681REw24K1P48dJf730f9PxqRNGUCqMbJ%2FLGuZHRcWe8%2BGBQ2HNEPtpYQ%2BV8bGHMEQMvgmP1MlBkUG9gv1oTlEZow8z2gi1Af3p1MEOZ%2FClaPmluDeX16FKeAZ1xTNIvSVAe3L8X3t24QSNjvgSXLDWio75cSOHvv0bQBIsCCeOus5jqibNTOX23W8uOdZksN1vIPSv4e6xEsr8kS63VEjCcpsLEBjqkAVOj8bR5nEb55wV5gU5qu8gLKTDGKxz1jIPZsy4Xs9UNWJL%2BeGwTo5UzmDlf6LzHw6ZAQWFc02wxMw76HyHp9mPBVIkLi4Mdbb0cjSpPyBbLwkTc0hZPq%2FaGQjm8%2BBWAnLP8CtjkET55eCjW3pGBL3o53KHOh32rwYFvTYWp4N8G5%2BvAOVK2mKLRoTfD3RAOvrq9uW21whXwngBg3Gn90qSXP6o3&X-Amz-Signature=7298d29eea61fedc1ef3c38cc1a9206965109632e310e4db24d556b12a844392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
