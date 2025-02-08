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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QEA4G2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD2NEOyGPwcefTx%2F26v4eOtjb9xslc3kKZ6cKx5pIV96gIgRDZFWE6lYDQUmxWqyXhvoQYw9e8bmN90iDQsRz8nT8gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0tvXXNPTBC8vEq8ircA3u8yz14Ea5xsYcEJ3SUANbwZo2JXsKpkhn6I1ZTPs1f1FO%2FC4TazyqEBXCyUs9E7Y5wF6lGfP7Dj9xdKWCEUN4Ndb9nqaw8hXaiDtoq0QrWqCWfr0eVuNdwZ83y5MUEQePb3TnxCNOHFQuIWlBmMABx0iGt%2FWAe%2FZ%2BAqnnCkOm30du8eLdHdTQHxm3uZo4rxSvLZsLFUMdXxYNKFZSozN2EYwt76nSsnCn4B8CK5XSkIeHbIXTWTmQ%2FuzceaVqc6kz%2F5%2Fh72WwVLPZvemhWoSVO9soEboRa0gzbsKGqKiWZzKeLgp9gbhkl5gZLxzpD1NiuI3RJshsdeQfuBN%2B0BV9VELgdaNbON6YH9sCrnosX2YpmYC%2Fw1Vyd5UqlFURr5%2FMl9TBfsK7ac%2FVU46I3A2YH8owv1fpNMkaWB%2BQW64Ya8r6AgaBtz6JJIsS%2B2GiPUpOQ857vfopP66lic7z3qPvwZiOsXIHXrRudo7tzokILNc76lU44W1Ozo%2B8yszc8OmzkkO8coBFPdnXpfwkQtzfMO82Us2zJMNU3tzdkUys5PKIE1A9PNZUcwurHiJgyUKSGX3Eo6vEg5G8Z3k8CLuCb8gcOuSahg4j5Kyn%2FhGuhVFzcYFVTnE7Q3IwRMP7vm70GOqUBfyD7Qr1f%2FGaWi2Q0SobmxihHVfTVq4R6nYBtyc4TIfggu9bAFmaVo5GEl8pDeqYkLOYkABdp%2FvLi8GSReXgwVjqoGx1XUr%2Bj91UKh8k32wMd68fc1COhq8u5q8n3dM08lFe%2BpmOCCp1IIzRlP%2FuSw1nmxo83LpCKUjjZhiHdiwNuHWsZ%2Bv8sIDYkVL1a4Kixit0RWpzQ40wSXAj8ShCrqb%2F5oppY&X-Amz-Signature=3fca1f5aaf31dfe8cecdb276676e0ae8760a1429c04eff71c0b321f7b0fa5d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QEA4G2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD2NEOyGPwcefTx%2F26v4eOtjb9xslc3kKZ6cKx5pIV96gIgRDZFWE6lYDQUmxWqyXhvoQYw9e8bmN90iDQsRz8nT8gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0tvXXNPTBC8vEq8ircA3u8yz14Ea5xsYcEJ3SUANbwZo2JXsKpkhn6I1ZTPs1f1FO%2FC4TazyqEBXCyUs9E7Y5wF6lGfP7Dj9xdKWCEUN4Ndb9nqaw8hXaiDtoq0QrWqCWfr0eVuNdwZ83y5MUEQePb3TnxCNOHFQuIWlBmMABx0iGt%2FWAe%2FZ%2BAqnnCkOm30du8eLdHdTQHxm3uZo4rxSvLZsLFUMdXxYNKFZSozN2EYwt76nSsnCn4B8CK5XSkIeHbIXTWTmQ%2FuzceaVqc6kz%2F5%2Fh72WwVLPZvemhWoSVO9soEboRa0gzbsKGqKiWZzKeLgp9gbhkl5gZLxzpD1NiuI3RJshsdeQfuBN%2B0BV9VELgdaNbON6YH9sCrnosX2YpmYC%2Fw1Vyd5UqlFURr5%2FMl9TBfsK7ac%2FVU46I3A2YH8owv1fpNMkaWB%2BQW64Ya8r6AgaBtz6JJIsS%2B2GiPUpOQ857vfopP66lic7z3qPvwZiOsXIHXrRudo7tzokILNc76lU44W1Ozo%2B8yszc8OmzkkO8coBFPdnXpfwkQtzfMO82Us2zJMNU3tzdkUys5PKIE1A9PNZUcwurHiJgyUKSGX3Eo6vEg5G8Z3k8CLuCb8gcOuSahg4j5Kyn%2FhGuhVFzcYFVTnE7Q3IwRMP7vm70GOqUBfyD7Qr1f%2FGaWi2Q0SobmxihHVfTVq4R6nYBtyc4TIfggu9bAFmaVo5GEl8pDeqYkLOYkABdp%2FvLi8GSReXgwVjqoGx1XUr%2Bj91UKh8k32wMd68fc1COhq8u5q8n3dM08lFe%2BpmOCCp1IIzRlP%2FuSw1nmxo83LpCKUjjZhiHdiwNuHWsZ%2Bv8sIDYkVL1a4Kixit0RWpzQ40wSXAj8ShCrqb%2F5oppY&X-Amz-Signature=6942beada61b47a8ce0212d0adbbf5b920861cad0aaa79320c5510388951602f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6BVSCH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGMS0op6xDIUNSMGFlc3wVuMD4BSm85wQ%2FkbPB4U7ZB5AiAI9s8%2B2BAbR9hu2O%2F9pPyTkNmj1guCfuwBVRBRExlFiyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuetLwW%2BQ4D0qgtDUKtwDYO0bh39B7KJPjMNumH9m9YSRh8ZT6ok%2BfSXHFWn%2BQM1QU5FNLEWCT2vN4%2BZ8WsPqKia7VQbTrYx4PO6nQNdkvoKfIVLx9Rb0fbgLUC3uBMIjn592Yo%2BGWZd5Pa%2FG%2BK2jouXq0Bh9tKfz6zEPcxKL0vZcZq2cKK31oO%2F6AKoBmQMb04Wfr37TXDaU69jn4Ym1x5JWOjI2KsxGVi9ryE5gerWU3KM%2BxZywz8a6czoQpTw8%2Bq9eHR3XLBogGN3Vd%2BVWcQ%2BNkTA5BgyNAvHdgs2U%2Bk%2BdUA1h%2BHWt%2FKPBpNQivu6WEh0JmOHHDtwNq%2BZ5UCWDiMKpifPSbTdmkwOnCK%2F6kciiZQvJS6%2F0uuaU4mphiX1rwbJcoUiaEEb2ss0NaRAwZRhAFvtMoVVn6wcnCpfZpbC3hJitNXSTsA2fBfgjrhLlIU75hQ4TiSOWDbEYSkPsbagR07cNSa2%2FuKXWsYJaIL%2Bl%2FwC8CtI8No7yLAckk%2F%2BwmofmvNotFntrm1urSG8xzBsfa2vZv8AGv8xd9zeDhzYxaz7ru6ozAf3NeLbSNq9wG0hqQrBc4wd8HtNsr7QbDYOeJ4i%2BQ8i%2Fad1y%2Ff7n5bt8CgmfnFAr5FEI2JzpBiIiG9YtunWpI63%2Bvm4w2vCbvQY6pgFAJJ2jVClGfNkoIdLYWQgXqZvHkRKKe7gxT4gk%2FldAuswp7yI24xbULPLqbmr8x3m0Gq4fI7PiQW%2Bn6M6sTKIbgytIPUX6ByOFJoUwP4%2F1duH7xfZ%2B5IlAdpEhyMeG8c5s1Vov9fkr3wh4BzoTecBnNozBkbNG0NrnbZYYKXyOaOxEeZHGZsqpvt8AeuSSkIMcqFkT%2BdPYKoKMVrO1gkEdiimnVgDU&X-Amz-Signature=f8fa16b7ad854631401b0768a7e8bc47760f85c2a5da85c76d5d9e01cbe68309&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNB36SFX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDjhf9A1tGfHBjTu%2B20iraGQXTwwiReI8FmqJ3aaj98aQIgAMT0Tq1Us1Ipi8W2LxQgc7zTpDDvNaof3LGz0xEzkXwqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOV2%2FZe8WgTJ32YauyrcA0jDfhyweVUmdEYVXevu1aeFTrG1pGJLehvHto1bFYYRe4kpXyeOAZ9Eoj5FwJ0DRZ2%2FmOteRSIhgbCQSPbIwYs2v52lVMeLgCPrzUT3RdJDkIu2HDgrfaYer08TBoOIfpOzK9T5VTmIhwEWua7Z4kt%2BFNZAt%2BDDHzuVOAEMeUI%2BojtDKm80BppsZx3wpes0D1HHsjQiDdkZ5jw0oaoj%2BVqwAS%2F3TCMWp9EsEgpal%2FdHzGypg2d0iX8aAqbiGBKrmvv3r%2FjsLEaBI47bEHSC73LvtgYDYkqAg2U6jVPiWN1i3WW%2F7296DD6upINHKdyd1OVK8IKY%2FdeJr6q%2BIO6GRiz5uis930dHxnWECxGPj8R3RmgILmzqV4stkiZje%2Bf2nZUK9%2BnFz3qKvhTK9DB%2F8X9RSkREs6iaH73YEkwUdOgZfEah0WZWaOOfSN98nPprTb9VHfAO5tcGpICIhq5xm%2FF3k0byL%2FbRR57dlv7GuGLcK9I5GP7yY2r7kn4iF%2FYpeCVH8pH8ZNRHpPg47A44BNZAepeEPtrFM3QDYfBh3PU6kq5w73AnHQgrKEsQEks9N7oqeq37tv%2FP7QvOvhfvuGZeAZJyUvHb0GKrxHaVqwCFvdJDHAC%2BtUxRd7MdMIXxm70GOqUBEoWLeqtn5yMVzkllEbghHJ8N8Lw2NChGk9OLxzUJYZ%2BMoguvlBIGOtLbscz0WFwLl8c3AgpbA27JuFYNQisvVo8GHV3VIM0npGhH1hoXu059QeapyybstFwL%2FKJIzD4BZwF%2BSL4MfzeDjsIzQEi1TNBoh8xNjIwp1QINZfAZzma2AMl5Xvqi2%2FfJfqt7R9jFsEGXrEJY9jrSRcI%2BjCmaJxTThNwf&X-Amz-Signature=f89d412013429b899c267fe6cc3d6360c966c9a49cb99e5c1112d1ff04687052&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QEA4G2%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T070055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD2NEOyGPwcefTx%2F26v4eOtjb9xslc3kKZ6cKx5pIV96gIgRDZFWE6lYDQUmxWqyXhvoQYw9e8bmN90iDQsRz8nT8gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0tvXXNPTBC8vEq8ircA3u8yz14Ea5xsYcEJ3SUANbwZo2JXsKpkhn6I1ZTPs1f1FO%2FC4TazyqEBXCyUs9E7Y5wF6lGfP7Dj9xdKWCEUN4Ndb9nqaw8hXaiDtoq0QrWqCWfr0eVuNdwZ83y5MUEQePb3TnxCNOHFQuIWlBmMABx0iGt%2FWAe%2FZ%2BAqnnCkOm30du8eLdHdTQHxm3uZo4rxSvLZsLFUMdXxYNKFZSozN2EYwt76nSsnCn4B8CK5XSkIeHbIXTWTmQ%2FuzceaVqc6kz%2F5%2Fh72WwVLPZvemhWoSVO9soEboRa0gzbsKGqKiWZzKeLgp9gbhkl5gZLxzpD1NiuI3RJshsdeQfuBN%2B0BV9VELgdaNbON6YH9sCrnosX2YpmYC%2Fw1Vyd5UqlFURr5%2FMl9TBfsK7ac%2FVU46I3A2YH8owv1fpNMkaWB%2BQW64Ya8r6AgaBtz6JJIsS%2B2GiPUpOQ857vfopP66lic7z3qPvwZiOsXIHXrRudo7tzokILNc76lU44W1Ozo%2B8yszc8OmzkkO8coBFPdnXpfwkQtzfMO82Us2zJMNU3tzdkUys5PKIE1A9PNZUcwurHiJgyUKSGX3Eo6vEg5G8Z3k8CLuCb8gcOuSahg4j5Kyn%2FhGuhVFzcYFVTnE7Q3IwRMP7vm70GOqUBfyD7Qr1f%2FGaWi2Q0SobmxihHVfTVq4R6nYBtyc4TIfggu9bAFmaVo5GEl8pDeqYkLOYkABdp%2FvLi8GSReXgwVjqoGx1XUr%2Bj91UKh8k32wMd68fc1COhq8u5q8n3dM08lFe%2BpmOCCp1IIzRlP%2FuSw1nmxo83LpCKUjjZhiHdiwNuHWsZ%2Bv8sIDYkVL1a4Kixit0RWpzQ40wSXAj8ShCrqb%2F5oppY&X-Amz-Signature=d3096237ac5fccdc7d49d7362fe244e3af2052f6667fd53c463d929b41d97ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
