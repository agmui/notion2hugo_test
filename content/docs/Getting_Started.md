---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJOFOVA%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAumZpKCRjj%2FtS4qXakZqYWaeIoE0iwkiMLZSGo0PfgIgSdBbbB%2BLdPfVeQTEQNP36yXVMOi0O8pa2%2BsXTivUKkAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAUQWayCbUv4Ewa0uyrcA79aUK9bC7bOqDGvnn8h6g39MDbYq%2FoQH9iHWf6r0PI%2BEQ49tQYG97UfSmMV85YOgMM9aWzBiKdTcMqC6f4mlNfV4V%2BkIXH%2F%2FwRWlKoYehJqWUJ6h4tu%2BKP12d6HKsEDKN0KMa%2FdDWD7ymAHax8Qo4J%2FcX8hralFCpKI6vgZnq8pDHTBAAAlJsXghkyMM5%2BJWSjxHfgdMFAr2dNBy9YU5UNGEPTYED%2BkeqMCUIPGaQ1MEIdZqiyC3o9wG9ZAp%2FA6AcNfqLe65E%2FIoXMaSysJ3O17zmiF0L8uuSj8iSBRakmDCREOH%2BLCnQmZRJvB5Ha9YSj89XJK7H%2B5AUmE37SiesN9Rn1mUFwChfaC7q0MlzdrHjTfOEeYSpMwbZsXNRDY%2F%2Fjnxr1D11me149J6wMzKzcOtIZebrbKGocSxA%2Fr9yxNg%2FeaOfrKsqUj7jA6OM33ZD77IshQZIEx7UCq8rWYbOr4%2FJP9E%2FDF38UrCyCGm%2B4lQfFk8Z1uLxLwHaWaZRfY6XjBrt%2BzXyZt7UWZ0IkduOF7klCSOWbKMLREJlckR%2FwAlOi3GKLjiSGurwyF2ZJDIAFAEmX1aJ8L79MP6B9ecMfQYWcuJQXnNyc003IYBMFJgrC0TL9t55ZxuxsJMMbY2s8GOqUBfgoCGGoJh6svoDEcFLLV4k2BNq0%2FLlQIFyaOfRYP13WML%2B0qdmd6E8o0SyNf%2BO6OVunQF4y%2BkiF6exlH3sMShsFuBulNX%2Ff7EM1tnITYkD2ampA1m%2Feik1WJTI%2FIXizDX1XjQ%2FZf%2F2li%2BbAfb6y0E6eSJe52qkSBkGugHN7cyaTPtTFF9xD3jE6x7z4fmjs4WBOBOxw4RxcY8AddW3SOeVH4HZPX&X-Amz-Signature=ac4cd1371a28938d25b390fd00b61664922d6aafca240611d3f2ebea96e4e737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJOFOVA%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAumZpKCRjj%2FtS4qXakZqYWaeIoE0iwkiMLZSGo0PfgIgSdBbbB%2BLdPfVeQTEQNP36yXVMOi0O8pa2%2BsXTivUKkAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAUQWayCbUv4Ewa0uyrcA79aUK9bC7bOqDGvnn8h6g39MDbYq%2FoQH9iHWf6r0PI%2BEQ49tQYG97UfSmMV85YOgMM9aWzBiKdTcMqC6f4mlNfV4V%2BkIXH%2F%2FwRWlKoYehJqWUJ6h4tu%2BKP12d6HKsEDKN0KMa%2FdDWD7ymAHax8Qo4J%2FcX8hralFCpKI6vgZnq8pDHTBAAAlJsXghkyMM5%2BJWSjxHfgdMFAr2dNBy9YU5UNGEPTYED%2BkeqMCUIPGaQ1MEIdZqiyC3o9wG9ZAp%2FA6AcNfqLe65E%2FIoXMaSysJ3O17zmiF0L8uuSj8iSBRakmDCREOH%2BLCnQmZRJvB5Ha9YSj89XJK7H%2B5AUmE37SiesN9Rn1mUFwChfaC7q0MlzdrHjTfOEeYSpMwbZsXNRDY%2F%2Fjnxr1D11me149J6wMzKzcOtIZebrbKGocSxA%2Fr9yxNg%2FeaOfrKsqUj7jA6OM33ZD77IshQZIEx7UCq8rWYbOr4%2FJP9E%2FDF38UrCyCGm%2B4lQfFk8Z1uLxLwHaWaZRfY6XjBrt%2BzXyZt7UWZ0IkduOF7klCSOWbKMLREJlckR%2FwAlOi3GKLjiSGurwyF2ZJDIAFAEmX1aJ8L79MP6B9ecMfQYWcuJQXnNyc003IYBMFJgrC0TL9t55ZxuxsJMMbY2s8GOqUBfgoCGGoJh6svoDEcFLLV4k2BNq0%2FLlQIFyaOfRYP13WML%2B0qdmd6E8o0SyNf%2BO6OVunQF4y%2BkiF6exlH3sMShsFuBulNX%2Ff7EM1tnITYkD2ampA1m%2Feik1WJTI%2FIXizDX1XjQ%2FZf%2F2li%2BbAfb6y0E6eSJe52qkSBkGugHN7cyaTPtTFF9xD3jE6x7z4fmjs4WBOBOxw4RxcY8AddW3SOeVH4HZPX&X-Amz-Signature=db8f4b34fa00b7bc81ca58ed7768ff0cf80fb50bea70e8964f967d6bb7fa5752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJOFOVA%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAumZpKCRjj%2FtS4qXakZqYWaeIoE0iwkiMLZSGo0PfgIgSdBbbB%2BLdPfVeQTEQNP36yXVMOi0O8pa2%2BsXTivUKkAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAUQWayCbUv4Ewa0uyrcA79aUK9bC7bOqDGvnn8h6g39MDbYq%2FoQH9iHWf6r0PI%2BEQ49tQYG97UfSmMV85YOgMM9aWzBiKdTcMqC6f4mlNfV4V%2BkIXH%2F%2FwRWlKoYehJqWUJ6h4tu%2BKP12d6HKsEDKN0KMa%2FdDWD7ymAHax8Qo4J%2FcX8hralFCpKI6vgZnq8pDHTBAAAlJsXghkyMM5%2BJWSjxHfgdMFAr2dNBy9YU5UNGEPTYED%2BkeqMCUIPGaQ1MEIdZqiyC3o9wG9ZAp%2FA6AcNfqLe65E%2FIoXMaSysJ3O17zmiF0L8uuSj8iSBRakmDCREOH%2BLCnQmZRJvB5Ha9YSj89XJK7H%2B5AUmE37SiesN9Rn1mUFwChfaC7q0MlzdrHjTfOEeYSpMwbZsXNRDY%2F%2Fjnxr1D11me149J6wMzKzcOtIZebrbKGocSxA%2Fr9yxNg%2FeaOfrKsqUj7jA6OM33ZD77IshQZIEx7UCq8rWYbOr4%2FJP9E%2FDF38UrCyCGm%2B4lQfFk8Z1uLxLwHaWaZRfY6XjBrt%2BzXyZt7UWZ0IkduOF7klCSOWbKMLREJlckR%2FwAlOi3GKLjiSGurwyF2ZJDIAFAEmX1aJ8L79MP6B9ecMfQYWcuJQXnNyc003IYBMFJgrC0TL9t55ZxuxsJMMbY2s8GOqUBfgoCGGoJh6svoDEcFLLV4k2BNq0%2FLlQIFyaOfRYP13WML%2B0qdmd6E8o0SyNf%2BO6OVunQF4y%2BkiF6exlH3sMShsFuBulNX%2Ff7EM1tnITYkD2ampA1m%2Feik1WJTI%2FIXizDX1XjQ%2FZf%2F2li%2BbAfb6y0E6eSJe52qkSBkGugHN7cyaTPtTFF9xD3jE6x7z4fmjs4WBOBOxw4RxcY8AddW3SOeVH4HZPX&X-Amz-Signature=c79e52cfa909e8ba00987158869fe8ad46fc1526db8fcd73075a6e1ce8a57f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU3TKNPD%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXVvw5%2BRPOw3eW4hoYQVEwKeLZ5Fz5iyjOf%2Bqr6iJqRwIgPduBVLxR00SkEa3HLlgxVnvy2n0lfkeCnl7mo4%2FEBL0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJFFROCMvme8kJzekyrcA1c4%2FDhH7Yx6dT2AbHGXhRGK5NXF10WxBkn4hbWuPkUhJcAcZG5xPTzRr5%2BfIGRSazXADASJpOGHVn5GhutDIRI0Tc8Eo%2Fv2MDmrK3N4d%2FnQFjh6HiLTGgeOWKtiKZaJMfQCtJI5vEyDkI%2B%2BUTdGJr8xiPMVXGu6RIm6brBM03yk77FyfMa0zmRkGQkwIxjtIzJ9BmDBFNnMQCb%2FsRsg2AScZ%2BTI7fGo%2BwGFrg8uUWKbffjYWEdPd2JqM0VIGs87ata9oDO6BzW4cxYgDSN8mhRzISLK%2FHnSqc9T4vW1aqOzl3TIKjl7fVsGD61hOJNe5uygEiyUdudBw4Pcazc3fYOj83QlHS3TqvFr9JaDw7NiPulz4RfZ1JJZr3%2Bd3xTHiXS%2BCVlFHGtSso1CMm8OosgVUU7hTgtBAomR3TyO%2BvUvx7TGumQ8s9yhuPvUQfxTJyXl43NlvHA255Vc0qVxEgVuyhtnMXPoqMvHWa4dABtmT69gjku0nTEyJOL0iHZnUXzHLaXmx%2F6O3O9zhYDp5Uepi6TELTVQmS0oaD4GJvDPS5Hg%2B%2B6ksNxz6mkJFLLP4ail%2B8%2FWY7GynGzoUIv%2F8cw6NR%2BhhWSqbf9FKcE857QeML981mVVsBcCSrmHMMbY2s8GOqUBPhPDMyiAl5D4nmBU%2F7r6d04Oj4ryNt555syLbds%2BHOqauQvKlDuyLQudbshGstUeBcZX%2FOYLwUphPenMFArv7mqIlYextpNiGnGeqhn6oQqJb%2B%2Bs4AIn%2FVTxMC2AygKvSMpQ7ol%2BsRpl1zSw5sNYZFQ4fTK9j47FZZvp73wUxFRuAFrolJ01LDe49kTpreLcl54jvUYAndiCyoPQvHM%2B%2BN1OiJV%2B&X-Amz-Signature=43958d158e1c418fface5d792828008983bc92e9d6987d87547721b21b8a0e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBKHGAWS%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1616iP0ZPvLPPcspT6XXtl0iCCKPWnUbhMJyA%2Fgm79AiAf4B21wa1AznNqbz2svCxijmd6uwCetulXOw0jLY171Sr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMHW3%2F6C9jN7eQVoF3KtwDF9D6lopeNShPyaSRK32r%2F0AC62ED1YL%2BEJZ4umEZBzIP65UoUzAZjoXf6MwNLgIn7AJ1CzCQH7sbcqhmQWvy7HFTKS2c959UOeQ%2B7u7Y%2FJr2rl3C5r9JzQGmpiGr67Xw05rr0RP7VVNZU1wmR8fMk2a9QWZhWj%2FHFFDFKDpu4NvOj5nwvn6NDXUnHZhTGA73WC4m%2Fw4N5jR7x8OgJBUB%2BOEV7q5ZNA9Hon67hWyu2zvxkINBALSmkzxfnO0jUUio2tyx9IGrlkbB1Sj5egJmiStruAZkgzHrgL9IsHpiMDUNNdz6NHmDL4Oph3vhho8JXiOFxa8k7PXCX8TAPItFXIn2tKpF4AINyCSyxZTR63fPxEQWbulJ3rW0FZKGFNn5AfayhPTXzPxUIm5JPA7GlQ%2FOyRGOMSGB%2BjpazQkH7lqgjW6rZ815rLk2h2EFn2VuvFGoiMxPL2MVYbjyIpNOo8XVn9jXpuCx%2FX4WaD3%2FqrlfEtpl25V019twX7u2gFnq8N9HUX0FvCO2SSCIkNkJqpYb2ZMd%2FQ8xkPzVXr%2BVLtiD7kWmz5kCn3GDbo5F0hacJ86f82u8fm2a60c45XDzI5C90t5qFw21eOt8wKq8aKbH2C1e3MzBP3OF%2BtYwwNfazwY6pgGdqjgLyHWI6uV24%2BUQXS8AUd9deXdtBi%2FMlp1DSmYPO%2BMeMP%2BRbAWNZ4U1Zerr%2BZuZy%2FoMjAdYhTvz%2BO%2F5OGKlRd7xewtRyAzF57Z%2BPjqnRD3d8BdiFyhBjO71dE5flDTOGvaM67SrsKHSG6fbNI9Gd4up3A55%2B%2B%2BhAxjlGX7CDYMZpBpnibEt7EgSZSKMIo5sRQBLyLtvKAI%2FaOto6eFS7M4TY1h2&X-Amz-Signature=79a66d5ff68a9ec025e05370692abbfd6b59dc1a8863ad49728d4e3fbae09715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FJOFOVA%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwAumZpKCRjj%2FtS4qXakZqYWaeIoE0iwkiMLZSGo0PfgIgSdBbbB%2BLdPfVeQTEQNP36yXVMOi0O8pa2%2BsXTivUKkAq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAUQWayCbUv4Ewa0uyrcA79aUK9bC7bOqDGvnn8h6g39MDbYq%2FoQH9iHWf6r0PI%2BEQ49tQYG97UfSmMV85YOgMM9aWzBiKdTcMqC6f4mlNfV4V%2BkIXH%2F%2FwRWlKoYehJqWUJ6h4tu%2BKP12d6HKsEDKN0KMa%2FdDWD7ymAHax8Qo4J%2FcX8hralFCpKI6vgZnq8pDHTBAAAlJsXghkyMM5%2BJWSjxHfgdMFAr2dNBy9YU5UNGEPTYED%2BkeqMCUIPGaQ1MEIdZqiyC3o9wG9ZAp%2FA6AcNfqLe65E%2FIoXMaSysJ3O17zmiF0L8uuSj8iSBRakmDCREOH%2BLCnQmZRJvB5Ha9YSj89XJK7H%2B5AUmE37SiesN9Rn1mUFwChfaC7q0MlzdrHjTfOEeYSpMwbZsXNRDY%2F%2Fjnxr1D11me149J6wMzKzcOtIZebrbKGocSxA%2Fr9yxNg%2FeaOfrKsqUj7jA6OM33ZD77IshQZIEx7UCq8rWYbOr4%2FJP9E%2FDF38UrCyCGm%2B4lQfFk8Z1uLxLwHaWaZRfY6XjBrt%2BzXyZt7UWZ0IkduOF7klCSOWbKMLREJlckR%2FwAlOi3GKLjiSGurwyF2ZJDIAFAEmX1aJ8L79MP6B9ecMfQYWcuJQXnNyc003IYBMFJgrC0TL9t55ZxuxsJMMbY2s8GOqUBfgoCGGoJh6svoDEcFLLV4k2BNq0%2FLlQIFyaOfRYP13WML%2B0qdmd6E8o0SyNf%2BO6OVunQF4y%2BkiF6exlH3sMShsFuBulNX%2Ff7EM1tnITYkD2ampA1m%2Feik1WJTI%2FIXizDX1XjQ%2FZf%2F2li%2BbAfb6y0E6eSJe52qkSBkGugHN7cyaTPtTFF9xD3jE6x7z4fmjs4WBOBOxw4RxcY8AddW3SOeVH4HZPX&X-Amz-Signature=bf3fba2ee3fdf911ba29e4a75a8676ee70079e3fe18213e5ec4a7c173f894dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
