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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJJBCZP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsuIU7wEWqU3TFBSuMFSyoc92%2F76kmSUqk8wv3Q%2FpToAIhAPipp6ik7HHFkN4ONhTsY4Ucz2k4qBUIqvKEdhG8bvhoKv8DCEIQABoMNjM3NDIzMTgzODA1Igz7LEoOZAaNc2hkoE4q3AOg9o3l4f89fgQnw31EraZgaE6r936b%2BHqJr3eNtgBgdwBMIFvqbbUpacg8HsiCwauRTrAlaydYbNjULrRge6vtwP3eduXcUlNX3MjqyGBPlMNGwPIFPil6d9NDYZKpKYX8%2FzxOb8rgx6RLVrXhZXxAvoj67xbTfNbe0zWzG3y7RHk9HRhZyJgfIm%2BCAHEjsGp5WFvHfs4HDBJi%2BPBf3WzXp%2Fu1hgkkdgROOnHC%2Fz1CdS9GW1ARGP0bJdq6sjt9sYZgU%2FcejK3WK3%2BjkA%2FHL8wfUmPIVVQCTSLqLt7g%2FRKqcs9pDrDrroDOP26BZlKzBzi1tVQENrfWvIzwhq%2B8DYwfU9dXWFu2euSVR2yW7aFKSlyqyQTtdZs8eDR1FhwsmZM74BWgBgFIpj0uBR6JKn%2BUEoJmbBHd71AFucXP%2FaCgR%2BkxAjVuBFkjriRUpdL3nIujyk1dTqrygmQ3ZLXf0r3PrtHUvTbi3u2CDCt4RSu2uOKpMPN0RF7A8PchLAniZZDGMN9jiTJxDihtY5g0KhrokebMNYNt%2FMsdx7gyPaQqjxdIMvh5Hjtzt7t4Svd3hjIqiYM6mBhzKkHlKagwoQ9h9P6bGgCOE3ClOVIAZHu%2FGqzSpiqlAx3aqwFDmDDC%2F8i%2FBjqkAV2pbzvUhrqgc24%2Bq1b%2FFQBNitUe%2BeKXryvobw3QF8Cog16kb3tJB011KveBnBAATkA9fsTrrm20uMjgXdfB0T9j0dbjl7NvU7qLjRjGxy8N%2BUjbKNs9sPY9EhWA8iDSNcYzci9N%2BFEFFQI%2F682AjHHSnO5sSgMvBTkdamrCriAFzFxQkA6QsHmTZZ7t%2FwWDsId3CGhJRtS8NNiraKTmyztrFa01&X-Amz-Signature=43983dd98d89b53dcd938dad1f83a6819cfbc3eaaef3cccd79f8d1ec85d9c0de&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJJBCZP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsuIU7wEWqU3TFBSuMFSyoc92%2F76kmSUqk8wv3Q%2FpToAIhAPipp6ik7HHFkN4ONhTsY4Ucz2k4qBUIqvKEdhG8bvhoKv8DCEIQABoMNjM3NDIzMTgzODA1Igz7LEoOZAaNc2hkoE4q3AOg9o3l4f89fgQnw31EraZgaE6r936b%2BHqJr3eNtgBgdwBMIFvqbbUpacg8HsiCwauRTrAlaydYbNjULrRge6vtwP3eduXcUlNX3MjqyGBPlMNGwPIFPil6d9NDYZKpKYX8%2FzxOb8rgx6RLVrXhZXxAvoj67xbTfNbe0zWzG3y7RHk9HRhZyJgfIm%2BCAHEjsGp5WFvHfs4HDBJi%2BPBf3WzXp%2Fu1hgkkdgROOnHC%2Fz1CdS9GW1ARGP0bJdq6sjt9sYZgU%2FcejK3WK3%2BjkA%2FHL8wfUmPIVVQCTSLqLt7g%2FRKqcs9pDrDrroDOP26BZlKzBzi1tVQENrfWvIzwhq%2B8DYwfU9dXWFu2euSVR2yW7aFKSlyqyQTtdZs8eDR1FhwsmZM74BWgBgFIpj0uBR6JKn%2BUEoJmbBHd71AFucXP%2FaCgR%2BkxAjVuBFkjriRUpdL3nIujyk1dTqrygmQ3ZLXf0r3PrtHUvTbi3u2CDCt4RSu2uOKpMPN0RF7A8PchLAniZZDGMN9jiTJxDihtY5g0KhrokebMNYNt%2FMsdx7gyPaQqjxdIMvh5Hjtzt7t4Svd3hjIqiYM6mBhzKkHlKagwoQ9h9P6bGgCOE3ClOVIAZHu%2FGqzSpiqlAx3aqwFDmDDC%2F8i%2FBjqkAV2pbzvUhrqgc24%2Bq1b%2FFQBNitUe%2BeKXryvobw3QF8Cog16kb3tJB011KveBnBAATkA9fsTrrm20uMjgXdfB0T9j0dbjl7NvU7qLjRjGxy8N%2BUjbKNs9sPY9EhWA8iDSNcYzci9N%2BFEFFQI%2F682AjHHSnO5sSgMvBTkdamrCriAFzFxQkA6QsHmTZZ7t%2FwWDsId3CGhJRtS8NNiraKTmyztrFa01&X-Amz-Signature=48b7422780be661635214f993911b98fd688fda867b9286d05c251eaf28ca66e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XLHKJI6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6mVMQWEP0kjxv1e5fkTq622WtXoHWmIW2MDkDMWAUAiBinKNLgdBW8TL1p4Ydma2BSjpoKcrAsEAFjfXqjEekWSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaalDzmN%2Fv%2Bo5F0xHKtwDLq61dIirUXONripspTrsrBbuuk1fLdwgkhl98Tcp3%2BNc9rcA5Qz8SmufMcRJyFKbSbtBOZ4Fo6ATOOoZAGjnQlXFG1shc0O9zxh5ZJc3AOTqxXk4LVFjEivVT7k5IbfQ9idjFNSbylt%2FW7yk4um71umw8oTqoTdkHd5rGsOzy2A8NVLWQHyyKNdG%2FjbkcKhVn2YwyD%2FdgW5bJWWe7OdKwwOCdMoAWZe1vAq98x1i5W1xNvecUYVjMbEjP1EGxiv7rHY4V2MrhlFoyorW9k5yyZRwRHcHsiG4CvjxTpMPHWWwD4BCmycVQ4xdHZzYpRVv8%2FPXN6p7xMwcgkOWQo2sqqR8iUk0dmFblFPYWsc1tTFLExvVqUmM4cS4pMrHHtyqpulf5A8SGRTZiUsAsGIs1i5ZrzMVQLLXQyeefBtGCOes2fG%2FistVpjTUYUutmnyxLVYEXe9ASyliC9MZZ0JEv%2Bj6K0UCY9F6k%2Br5Fr4xVlmJvAxzDHbLdrDhRpJyzlaxUQodOY549bm9%2BYPGtfQCOkImFswA4DnoNKvn4Blcp96mCjSFgnFekGUF0jUNVU%2BL3AYKxOlPNHxHAchSRgVBDJIqIfELAmCqnpOa2MmKDqllX0ElTep2OT1ErH4wrf7IvwY6pgGc7Y9vdiL4H77VnVOPW52LFGcGKqKiL%2BIufDvswjZ116StzJQzW%2BZ5ZJl5pYr8SSYdvNJCbD5c0hd8E1qwvV9USMQ3QDmXdfAwCm6tlUyzo%2BegNuBeRex2Sh%2FYBFLmDN%2BzLw%2Br3iivZfioVOhcbws%2Frm6ViMqdBOUkkXqRK6cG8q%2FVgYUwwTpCiHt%2FelBkcRSTjCxPO8Mb21AEoTdvihQwXwzSHUTj&X-Amz-Signature=86199ca035e41232defc2d42358a605a05486980f3daa9c3d03e239bf0e176dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I4FLTRO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcd3XA9NYfb2i7KEEP6MAoDw7fs41xUO2ReEWm6lYG%2BwIgCaGNrEwopS2MDniqcDFLuOGYAaONdhCxB08rfeDr91sq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqhhZedtDs4xSKk9ircA%2BkITVaDr8yk7BN%2FMwKlLnozMrx%2FklL3ptpFNiuajMNVCdMqQJXYTBbHV8SszOuOPirHhgU9qDDaSM5C7ImykHw%2BH8y9zr3D8Ig2t%2FTNtxBbF1ioMrhVWQHHZhYHIpjf2m5C%2B3cl0tBXmWxIIrC1UWE1miNCz4NW%2FDtgjFBl9W1wi3TFReBxP3fTEDFt%2Fxiv4OjZe4OnBVaXw8NSyzEPCT0dCz1ZNsdweyoI%2FKiqLyeJkWZ%2F1zNhHj1CyDsvkTbdl0QxvDHylyH59QrLINQpNsVvvKXodug9VgYGM%2BGiL8GdhjJRv4x2Vi%2FCzHcplcXcI9X3gtE1liF%2BLRonlv5XPrGyGvJ3RECDiZ4ZctqfcJJo8CXRisUCgimrljcwGA34pX9Wth7RVHOpOt7fP1W1NHh87ymGaLQGDTPQcyBPmyAQmUl9JA1Aol5sC5mwTHEN%2BYbC4WFOOIbi97wG%2FlN6OgaCXRF8XHShDlmmVvHIYKnKoZJ1ciWsRE2OX6MiWRCeFtSEzS4vZgpPD%2FGU3AXv9jhMAPGnWSEdreNkW2F17ytXVHTlVVli4Bcahrm2YL2gFfE72YEBV6a%2BLo0hY96qYbTqKfbEg%2FKuI8JdwBvlG5%2B8tc1KKEReQyZNYFuhMKr%2ByL8GOqUB8LmnHnIrh6JS3LQTffCmbC8zoBOI7lQLjMmPMH551iupbQFqDiKIL1CVyJjOAk4I0p8xJR2HUrr38QdO2buOVVdnRjloNFo5%2FR9ob2NogZUtVsdd1bhgsh0G9PZbAQh%2Fd%2BWB%2Fu%2B4jzleBsADEfqWM9rydfjF%2BY5S09BDrL6a8R8DtOyRqO5%2Byg2U%2BV%2Fgk3MMm7nCoQJgZ%2B2MdCytxsHvx3Gd2ke4&X-Amz-Signature=64487f1ec968a6c5cbb4dbd241dcce85cf5bf55e2a475cc2b87a316e87ca716b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJJBCZP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsuIU7wEWqU3TFBSuMFSyoc92%2F76kmSUqk8wv3Q%2FpToAIhAPipp6ik7HHFkN4ONhTsY4Ucz2k4qBUIqvKEdhG8bvhoKv8DCEIQABoMNjM3NDIzMTgzODA1Igz7LEoOZAaNc2hkoE4q3AOg9o3l4f89fgQnw31EraZgaE6r936b%2BHqJr3eNtgBgdwBMIFvqbbUpacg8HsiCwauRTrAlaydYbNjULrRge6vtwP3eduXcUlNX3MjqyGBPlMNGwPIFPil6d9NDYZKpKYX8%2FzxOb8rgx6RLVrXhZXxAvoj67xbTfNbe0zWzG3y7RHk9HRhZyJgfIm%2BCAHEjsGp5WFvHfs4HDBJi%2BPBf3WzXp%2Fu1hgkkdgROOnHC%2Fz1CdS9GW1ARGP0bJdq6sjt9sYZgU%2FcejK3WK3%2BjkA%2FHL8wfUmPIVVQCTSLqLt7g%2FRKqcs9pDrDrroDOP26BZlKzBzi1tVQENrfWvIzwhq%2B8DYwfU9dXWFu2euSVR2yW7aFKSlyqyQTtdZs8eDR1FhwsmZM74BWgBgFIpj0uBR6JKn%2BUEoJmbBHd71AFucXP%2FaCgR%2BkxAjVuBFkjriRUpdL3nIujyk1dTqrygmQ3ZLXf0r3PrtHUvTbi3u2CDCt4RSu2uOKpMPN0RF7A8PchLAniZZDGMN9jiTJxDihtY5g0KhrokebMNYNt%2FMsdx7gyPaQqjxdIMvh5Hjtzt7t4Svd3hjIqiYM6mBhzKkHlKagwoQ9h9P6bGgCOE3ClOVIAZHu%2FGqzSpiqlAx3aqwFDmDDC%2F8i%2FBjqkAV2pbzvUhrqgc24%2Bq1b%2FFQBNitUe%2BeKXryvobw3QF8Cog16kb3tJB011KveBnBAATkA9fsTrrm20uMjgXdfB0T9j0dbjl7NvU7qLjRjGxy8N%2BUjbKNs9sPY9EhWA8iDSNcYzci9N%2BFEFFQI%2F682AjHHSnO5sSgMvBTkdamrCriAFzFxQkA6QsHmTZZ7t%2FwWDsId3CGhJRtS8NNiraKTmyztrFa01&X-Amz-Signature=ef8fea033449ca26e2f696f8712595b56ebc9b6c34ec84cd6f0db0ccf727170e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
