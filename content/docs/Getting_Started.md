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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITLBA62%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDbGFSkKkyjOrRsj9Z4J5GTDdRGfLwc%2B%2FLtgqwdQZR12QIgSWsGTJZmG8No0U2W13sXmQg0OJf%2BdhOsVak5VwZw8%2Bsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIRD1%2BNa1WGn8GsiQSrcA8oEovjQOOjgd3OgwOw0Djn%2BveHOM8Yo1zAAFgAwbSyeJhjuw%2FEJUT3uWimZr5Wn9T1tXm7E1SyTxa1QzT7YJJqQnY%2FYPqrMqm7LoMdQTdK2otDew40YmdJJK6DKwOE2AdWpufvjjxBk2nywpnJqKNHn9CCiuxwMK3MPP0gU8KhWUBZm64gmvI2j%2FnEAyP%2BIR0NzVrIF5KjYvTMhI%2Fcm8sPQMBxmjsHzONrYtnG7mIGn0NkSsSW%2BMv6iY2D4u6WXkHgldBx7lIkIO9VvFkDotL9%2BoqFU%2F1IvNosQeeq%2BkKE6iY3uVQuaVfcjWYURvnaMyKVz5Jgin2eycH7ytzFoogHhIw85qi2erN6schbXY0qW4qk26vCi%2FX0Dk2GG7SmSzkoVTUkbZZCe3lVpsIkzP%2FS4xPjEOXoP7XnsqMYH%2B7%2F9xFM7eANaHb7gvJh5oZv2FIrj6wTF6%2BtFad8g5sHq9P4IzTiIfrzSiPKb8nPbVeTG%2BWqfOo1IjBhhmfFgZq3Y1rVk6aMkCg2NmWFNejtzI%2BWrs%2Bkb3nNr8ugUjNPkinDCat2PRC4DR%2BzzwuCxr%2F%2FjJMNh8etqpCW9dz4upDD%2FK96jPs1EE7vjDKqox54atm%2FpzS1v2imQchk7DPkiMP7bob8GOqUBIgn670pfsUXzWseGj4NwuUiD%2BHtN07FR2AhpgYQXRLsJ%2F%2BN%2BEpRUN4rXZ1UWe3e%2FsI%2BhP%2BICCVvaN51ubFRIqYZsdNuIbpfo75O2typCaE7NLT69CasBEUwLh0hkB015Zuw6UEujmdgg6Ch5uAsBpk2qo%2BlL9EJ1AyEU0DDRBNsoXiJtA62EFdUpycqg%2BIGUPJKUYPQ2EfKGpE6QfSRAHX9KuZNE&X-Amz-Signature=e38fd945ed6b97629f361b30dcf7232944064747cfdf597927e198f1c723f036&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITLBA62%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDbGFSkKkyjOrRsj9Z4J5GTDdRGfLwc%2B%2FLtgqwdQZR12QIgSWsGTJZmG8No0U2W13sXmQg0OJf%2BdhOsVak5VwZw8%2Bsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIRD1%2BNa1WGn8GsiQSrcA8oEovjQOOjgd3OgwOw0Djn%2BveHOM8Yo1zAAFgAwbSyeJhjuw%2FEJUT3uWimZr5Wn9T1tXm7E1SyTxa1QzT7YJJqQnY%2FYPqrMqm7LoMdQTdK2otDew40YmdJJK6DKwOE2AdWpufvjjxBk2nywpnJqKNHn9CCiuxwMK3MPP0gU8KhWUBZm64gmvI2j%2FnEAyP%2BIR0NzVrIF5KjYvTMhI%2Fcm8sPQMBxmjsHzONrYtnG7mIGn0NkSsSW%2BMv6iY2D4u6WXkHgldBx7lIkIO9VvFkDotL9%2BoqFU%2F1IvNosQeeq%2BkKE6iY3uVQuaVfcjWYURvnaMyKVz5Jgin2eycH7ytzFoogHhIw85qi2erN6schbXY0qW4qk26vCi%2FX0Dk2GG7SmSzkoVTUkbZZCe3lVpsIkzP%2FS4xPjEOXoP7XnsqMYH%2B7%2F9xFM7eANaHb7gvJh5oZv2FIrj6wTF6%2BtFad8g5sHq9P4IzTiIfrzSiPKb8nPbVeTG%2BWqfOo1IjBhhmfFgZq3Y1rVk6aMkCg2NmWFNejtzI%2BWrs%2Bkb3nNr8ugUjNPkinDCat2PRC4DR%2BzzwuCxr%2F%2FjJMNh8etqpCW9dz4upDD%2FK96jPs1EE7vjDKqox54atm%2FpzS1v2imQchk7DPkiMP7bob8GOqUBIgn670pfsUXzWseGj4NwuUiD%2BHtN07FR2AhpgYQXRLsJ%2F%2BN%2BEpRUN4rXZ1UWe3e%2FsI%2BhP%2BICCVvaN51ubFRIqYZsdNuIbpfo75O2typCaE7NLT69CasBEUwLh0hkB015Zuw6UEujmdgg6Ch5uAsBpk2qo%2BlL9EJ1AyEU0DDRBNsoXiJtA62EFdUpycqg%2BIGUPJKUYPQ2EfKGpE6QfSRAHX9KuZNE&X-Amz-Signature=75f0dd9b0717b4cc3c8769a34b167fcaa01545c51972a9a83df360a65d154925&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHINFFG6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCp4TNTQtfOz4WERA2UEyz38INldcjepGzOkziRM8FS%2FwIgGTBYOBxNLqH0jAeX5QCzBdLumH90TRzxDBjtAU7nAw8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE%2BrhxnSVp1Ry1XJECrcA3LJrRbaAcmJQSLdi6Sk%2Fl3Q83BoFhBfZwBzDew3yFzGsQOX%2Fj1CnuCffrl34pUAXVz2J2kCnB9HDdud4VGxSu9L9%2BvzIp8jGUd2s5AU%2BI5SLL5LVKvUrWcvyTGw5aLtQjFgSyKustnWP%2FtvwfVxUOFOc0GTqesm9rjl%2FVomCtOm7k0mBoJrSVPIsDTdAZE%2Bvp1i7THReJqjHxzrAj5MnY9caHCNn2CSMB55kJA4nB531dIUC4PHWMELZWdmLnF%2F5darLYbGujdnOb0EQwzxG7JxPjM5QXYgrinoRcRUfOVhIU8thORaMDT1zEFxzHclBZZS8Evq2h5VNeB54jiof4N5UgdAxjzS41hYI3HAJ8yeuIumo1IZtXD3iOcJkUxJ48ZPRIXiOvPJD8FcQMv8YuNg4v6mm3AGZ6K2vLOLa6ty%2FU27%2BSinfbenTuPCIrgwxqefTEpPNyloj4F9%2BGZ32K8e6wmjJc0gErVRR0dsRKaTYXyLjPcDP48wDGCC8ho1JxaavNLdyZre31oSlcp6gQsnJuCK%2F%2BxSQZ7uLjYHjNejOpV3J5F2ZqyZYuPPYqJGOBzcwmQHANwP1m4xRPKwp5TtMbkye5c4XRB0pjDAsIZv4EYAn4k7mnHbXDmRMPTbob8GOqUBsNhWJiQ5yFyc8BWQwAJRBRbBoqQSnF8iwdlnT8ulUPOl1tnAlN0eNghEugefRD8MDjaUDjT0ve2wTruS%2FXJZ%2FeJ3MP2OolmTnusKHIOy44nIeqWJ5DCraI3Ma2wQc4dIE5ou%2F%2BFLjeOs%2BJDW36gYgA8qYhwUeib%2BcXLbJjTCi9VdU1nrEw9QK1RGt2qHZpugtA4srnGP1tVe0Tb78hKY6ygf%2F98j&X-Amz-Signature=7b2c63766e33f108bee4118018866800e908697d158de5b7f56e10c5d2228e43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXON2C7M%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCEWhNKg1n2TwNcOz%2BsSGTEQc2m6ep47f6GDppmrMmtXQIhAMyxF505XRdi3G%2F4ZHF6xXJpc0Cn2BRD1J3YF1eIFLXbKv8DCH8QABoMNjM3NDIzMTgzODA1IgxgTGZuv4hI%2Fetd40Eq3APIbXxDVUf1Y%2BhtSDERhGdMX2woyYQz%2FlzaG81oiGLRPs1c8VfaYeLc2PjMnrQcGl7QPo6n1Cg60VoE3CsRkLNJc0TzYGy9n4HOn6MbpUMHebCierW8sStF29sPMsVl7q8byydfPiuXA5DX9Uhyd4TTjUcPw0vqpgxzpcZeEU46l0Dj%2FQz%2BPgA%2BvYXMz7YbLiHpUPyA%2FH3kHwOCoVv8peveyZNPmBHyx7RDfm%2BqM5q0VlFs0E1OSddPupEwNkX%2F4QihVCjSReyDRbC54GmfBs%2Bgwb1ZDWPFWxh4cB4Yb%2FjfjcoRpuj2K4Il1a5ymNtU1mO%2F9vnQNTR9wFuYPQE4HWZMZomLdWpqrNSN5HtjQWJgz05aAg8n%2BcZuZ40e2Vom8n9NG44ppz63NoEm3otaTy7hH1Z3sW0Z1zeQ0FcLZB%2BSTD49LUWBjZbnhi6rP7hocscEebKm4yIiFuTIL%2FP6WHgDihNEAE4TOY1f3QECvn38PaY4UK5fAAD9WGREz%2FsavW4JnmEIfBhrWZFxDSfht%2FL0ZGT7z74uAmmyg6Ij%2FALnL0OFNmAlXw2JvGwqwYpr047AwENs%2BCEwxxQQwwFp5%2BuVC2PY8auO1eRiOXDY%2Bz5G8MH3%2Bvhdc4bDwwpRZTD%2B26G%2FBjqkAURj7HRg8A71x3iTSbgoVirWhF1KycmS8f0rrVtha%2BO9KzNMf8rjHfTwXa%2BaUQLbGTVvv6FEAEHCxekV5TMvcYVEBoOr3BQCDVZOwWm9GWpUqLqOvZ7EjK1pXIx%2FBdn3%2BwwHN8vrw17so1ybPMX3X1zHMVwX1gXT8RMUul%2FUBf5S%2BlprGDcP3kVcX4FMfwiEfDbUs6S1FTDIZSuAiEsftIQ0zfjt&X-Amz-Signature=474013e38e0879b82155688c86dd64e819fab6df780d4ed135d751a68c672646&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WITLBA62%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDbGFSkKkyjOrRsj9Z4J5GTDdRGfLwc%2B%2FLtgqwdQZR12QIgSWsGTJZmG8No0U2W13sXmQg0OJf%2BdhOsVak5VwZw8%2Bsq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIRD1%2BNa1WGn8GsiQSrcA8oEovjQOOjgd3OgwOw0Djn%2BveHOM8Yo1zAAFgAwbSyeJhjuw%2FEJUT3uWimZr5Wn9T1tXm7E1SyTxa1QzT7YJJqQnY%2FYPqrMqm7LoMdQTdK2otDew40YmdJJK6DKwOE2AdWpufvjjxBk2nywpnJqKNHn9CCiuxwMK3MPP0gU8KhWUBZm64gmvI2j%2FnEAyP%2BIR0NzVrIF5KjYvTMhI%2Fcm8sPQMBxmjsHzONrYtnG7mIGn0NkSsSW%2BMv6iY2D4u6WXkHgldBx7lIkIO9VvFkDotL9%2BoqFU%2F1IvNosQeeq%2BkKE6iY3uVQuaVfcjWYURvnaMyKVz5Jgin2eycH7ytzFoogHhIw85qi2erN6schbXY0qW4qk26vCi%2FX0Dk2GG7SmSzkoVTUkbZZCe3lVpsIkzP%2FS4xPjEOXoP7XnsqMYH%2B7%2F9xFM7eANaHb7gvJh5oZv2FIrj6wTF6%2BtFad8g5sHq9P4IzTiIfrzSiPKb8nPbVeTG%2BWqfOo1IjBhhmfFgZq3Y1rVk6aMkCg2NmWFNejtzI%2BWrs%2Bkb3nNr8ugUjNPkinDCat2PRC4DR%2BzzwuCxr%2F%2FjJMNh8etqpCW9dz4upDD%2FK96jPs1EE7vjDKqox54atm%2FpzS1v2imQchk7DPkiMP7bob8GOqUBIgn670pfsUXzWseGj4NwuUiD%2BHtN07FR2AhpgYQXRLsJ%2F%2BN%2BEpRUN4rXZ1UWe3e%2FsI%2BhP%2BICCVvaN51ubFRIqYZsdNuIbpfo75O2typCaE7NLT69CasBEUwLh0hkB015Zuw6UEujmdgg6Ch5uAsBpk2qo%2BlL9EJ1AyEU0DDRBNsoXiJtA62EFdUpycqg%2BIGUPJKUYPQ2EfKGpE6QfSRAHX9KuZNE&X-Amz-Signature=0b011bcd97632cc4c51397b4b2b462fb2bc458308d4faa79d3450396e4fbf394&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
