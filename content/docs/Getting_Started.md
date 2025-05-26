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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2Q7UYA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQ%2BI2oCLqiIChlOdZ1PPDyhfwz0QhfAt6GM19ROSoUbgIhAP2hcXfhw2JzTfxYOojeACVGpqHTFs2SQBujuKHq8QbjKv8DCEIQABoMNjM3NDIzMTgzODA1IgwKZNomTyupV44PIXsq3AP6h869ASSpxBgxIFyK9cIYS9Lg2PYU54rsjkBOfYkqvI33LcLMZswaSAtrSjrYQKrbaWpegS4UXkTPME1DL9uWoXW7p2pmvHcDa9MQJf2k70Eeweac1lGCby%2BjxBd5QISovuQS%2BX36ZmQL3wC4j32Hk3orvPUAMNBppPaFy9CiAOYK8RfAsRLilZcYKVJh0wiHtG1y86Db973xYKiPpUjmY56qFu0oIbyJGfHrqFN2WmBEfCzdycfbfWplTjmu9jjRcPC1fmm%2F3Y4ntzupexsMDH7yjfS5SCLu05X9Oh0h4cCt517bXasErHBf7LdzBTQ2A20RbKPmby7BM3yCSP76ugGTaE5wQN7hn6R1Obx26jHOwhgZGL%2Fx5aiz9TSgd3lEHWqY%2F8ggeUj6fLKG1OpTu6AvVVF1uk9Zbg3ejgy3vMa35It02zuXNM1oGbLFv4hnhbVcvmb0LuLh6%2FTE9dGQqoudNOLvceLuZUUX1KbEjFOyW3WP3UDgM7u4LEy1xMh2FV%2FPecMUd02%2F%2BtA0%2FWL6Mp%2B2uIkgfU2YgJ9ETklod6ydcBlds2pBX%2F0IDQdz1Uclwty0mPcSCUfREdR9hbhAtxVjvssdusJMTJGhOHFhA3MMOaz6%2BEzCL%2FCGGjD51dDBBjqkAa5hESxhO0NA4VRsZXegfgous0hSOvGXjcFU3g%2F1cWb7Sb9gdsLUAnYBKYaMZT8g%2FzCSFOJ8CUEgc071vgSeSH5H7ZYAP5AvhAjXodAllD%2BxBPdvtgLGT9jihfUkE0uj6VT1YJ7gh1WqC3kQ%2FRLDUt9vg6rKh9p%2F4%2FqCcKivUtl%2FWOIXsw59QD3BjiHygKhitA5xgGouiz6J2VwjpAH%2BnWTASwnp&X-Amz-Signature=d851688e9c1a1faaab2486e86f42bbabe1ab318c6c560676160ff4cdb1b55b15&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2Q7UYA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQ%2BI2oCLqiIChlOdZ1PPDyhfwz0QhfAt6GM19ROSoUbgIhAP2hcXfhw2JzTfxYOojeACVGpqHTFs2SQBujuKHq8QbjKv8DCEIQABoMNjM3NDIzMTgzODA1IgwKZNomTyupV44PIXsq3AP6h869ASSpxBgxIFyK9cIYS9Lg2PYU54rsjkBOfYkqvI33LcLMZswaSAtrSjrYQKrbaWpegS4UXkTPME1DL9uWoXW7p2pmvHcDa9MQJf2k70Eeweac1lGCby%2BjxBd5QISovuQS%2BX36ZmQL3wC4j32Hk3orvPUAMNBppPaFy9CiAOYK8RfAsRLilZcYKVJh0wiHtG1y86Db973xYKiPpUjmY56qFu0oIbyJGfHrqFN2WmBEfCzdycfbfWplTjmu9jjRcPC1fmm%2F3Y4ntzupexsMDH7yjfS5SCLu05X9Oh0h4cCt517bXasErHBf7LdzBTQ2A20RbKPmby7BM3yCSP76ugGTaE5wQN7hn6R1Obx26jHOwhgZGL%2Fx5aiz9TSgd3lEHWqY%2F8ggeUj6fLKG1OpTu6AvVVF1uk9Zbg3ejgy3vMa35It02zuXNM1oGbLFv4hnhbVcvmb0LuLh6%2FTE9dGQqoudNOLvceLuZUUX1KbEjFOyW3WP3UDgM7u4LEy1xMh2FV%2FPecMUd02%2F%2BtA0%2FWL6Mp%2B2uIkgfU2YgJ9ETklod6ydcBlds2pBX%2F0IDQdz1Uclwty0mPcSCUfREdR9hbhAtxVjvssdusJMTJGhOHFhA3MMOaz6%2BEzCL%2FCGGjD51dDBBjqkAa5hESxhO0NA4VRsZXegfgous0hSOvGXjcFU3g%2F1cWb7Sb9gdsLUAnYBKYaMZT8g%2FzCSFOJ8CUEgc071vgSeSH5H7ZYAP5AvhAjXodAllD%2BxBPdvtgLGT9jihfUkE0uj6VT1YJ7gh1WqC3kQ%2FRLDUt9vg6rKh9p%2F4%2FqCcKivUtl%2FWOIXsw59QD3BjiHygKhitA5xgGouiz6J2VwjpAH%2BnWTASwnp&X-Amz-Signature=8ba424802c4e00ebd2e17dc54cd51a1ef14894c1fed866e4ba29c3986a4217ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2Q7UYA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQ%2BI2oCLqiIChlOdZ1PPDyhfwz0QhfAt6GM19ROSoUbgIhAP2hcXfhw2JzTfxYOojeACVGpqHTFs2SQBujuKHq8QbjKv8DCEIQABoMNjM3NDIzMTgzODA1IgwKZNomTyupV44PIXsq3AP6h869ASSpxBgxIFyK9cIYS9Lg2PYU54rsjkBOfYkqvI33LcLMZswaSAtrSjrYQKrbaWpegS4UXkTPME1DL9uWoXW7p2pmvHcDa9MQJf2k70Eeweac1lGCby%2BjxBd5QISovuQS%2BX36ZmQL3wC4j32Hk3orvPUAMNBppPaFy9CiAOYK8RfAsRLilZcYKVJh0wiHtG1y86Db973xYKiPpUjmY56qFu0oIbyJGfHrqFN2WmBEfCzdycfbfWplTjmu9jjRcPC1fmm%2F3Y4ntzupexsMDH7yjfS5SCLu05X9Oh0h4cCt517bXasErHBf7LdzBTQ2A20RbKPmby7BM3yCSP76ugGTaE5wQN7hn6R1Obx26jHOwhgZGL%2Fx5aiz9TSgd3lEHWqY%2F8ggeUj6fLKG1OpTu6AvVVF1uk9Zbg3ejgy3vMa35It02zuXNM1oGbLFv4hnhbVcvmb0LuLh6%2FTE9dGQqoudNOLvceLuZUUX1KbEjFOyW3WP3UDgM7u4LEy1xMh2FV%2FPecMUd02%2F%2BtA0%2FWL6Mp%2B2uIkgfU2YgJ9ETklod6ydcBlds2pBX%2F0IDQdz1Uclwty0mPcSCUfREdR9hbhAtxVjvssdusJMTJGhOHFhA3MMOaz6%2BEzCL%2FCGGjD51dDBBjqkAa5hESxhO0NA4VRsZXegfgous0hSOvGXjcFU3g%2F1cWb7Sb9gdsLUAnYBKYaMZT8g%2FzCSFOJ8CUEgc071vgSeSH5H7ZYAP5AvhAjXodAllD%2BxBPdvtgLGT9jihfUkE0uj6VT1YJ7gh1WqC3kQ%2FRLDUt9vg6rKh9p%2F4%2FqCcKivUtl%2FWOIXsw59QD3BjiHygKhitA5xgGouiz6J2VwjpAH%2BnWTASwnp&X-Amz-Signature=3c512d1db6a292ec59c0fc4c3f40a0f78e67d422ffea2c3a79b28c75135c9446&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GOSN32H%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDPTH%2Fa15Z2umNL7ZxDyItG7VkeX1kgcGsjif1L5JgXtwIhAMvPnPJdilz4a%2BGS66yWBTQ9eFv2Qun0Fo9gKzrP412HKv8DCEIQABoMNjM3NDIzMTgzODA1Igz7HO0nES6pNh4kBXkq3APmatTGjwg%2B2Yeszzg0kJFOkjOZURjHpaHoB7LmS5h%2FE23TLIVRTcdm0681fCZdnSuQaqARWLnBEngstcA4EnuOWwTebusyRAyHSj4SySgVvhZjQnDmXKHl%2BfwyducSJDO93zy9Vkb%2B67jzSgOHRZjayd5jFjOVfsYHgxotLfKQ%2FUmUFb0NKv49V%2BxyVYWek3gD1DeVRPBg4aXZX3ke8FKPgc2rV8XEzn4PYQMwGDPN59Sni5vCOYpZjrCZsEo%2FHmu3%2BEn6wnINOdGpv5b94JxXhHiZG%2F%2BHxoWP5lsCSoFqU8GC%2BqGueyLq8uLXgFHCRdedyVUfRilF6qp63khq%2FFMn2wbktRdGYFbiastv76iPOrSBu%2F2hxTIt1cjHzO4SizIAzq%2BD0KmOktdnggsTVLh37AgbsgNL%2BOK%2BEDlmtfNWgDXL1hc2zgdM7MB5xHKNDRwBlr18Ub54yphRgbuz0LbTvASppqDxI2Ur4RguXinZ4gJqdDDF29FowSYBtiilJWj37JfuojAOmUntQGETp85%2FudXJhycynS4uCKfK%2Bb9YIVr8wC7K5tsUdsnpmQCwt%2BmA3SR0dAdhjmJ%2F%2F16cvFXEKl%2Fg8arjt8RgeqygImz6XE6PvrPXmXZ5un82PDDZ19DBBjqkARvtrsOzBRfXN1HF8QEre3h7PahxaWmTNjdr7pMMEhkmiT9hn1VSamoW5PzN3mt5DyUutyzAkSsYc1b4JANpIajfWxBTwzlF9N1r67zPqP30YmvoOrBKwfxQ2V9tiblZD4Fjh0UZir9CF0o%2BKaaReJS2h8FpZRVW%2FxoHUXrXkUmhN89NwajwCEiNf138xY9JknRL4uJ8uoSbIKtvfCKKigrFS4Vm&X-Amz-Signature=e0fc43e1dce7ecb7bd99b130e051345f4012c55d43b3fa5b976a889d1d33d2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z6IBDYE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCKvUm0Qbe7P4iSKlhtmKjIjFWmRgww%2FFJcOEOPg4zsuwIhAIIX95xssqKqum5gM1Q1HoEUiTZCXr9rt0clg8tWTAMbKv8DCEIQABoMNjM3NDIzMTgzODA1Igy2SuBOwm3wtyKXTGQq3AMMAQPJkhS6XDGDO%2B%2FkMWRFWCf1JdQzGFxjW%2F%2B2UWXKm0q7ZnDqxrPOUmOhEObw%2FIGloWlTJGcLCF0ms8wGmQuC7eSeV6Z58AxIRlr9qe7X1vGjZOeHJyqbmnk1XzDBOxMPzTEEJcWKtcAX7qO3QSoyECvmCChR8MYdDwAJ1NMzmMGe0pt04XS3nrvzeS4SEVBrjh3y0kDt5SGVdDGFfSO0673K0J8gzvdO9oW7YzSjH4Mf3XfDOtFCsMX0xHl%2FfH2D1MGTstF2J30SS8bt0hcSsrTsNi8cpPKMHwQYSHCYSdggf52cpXImHSsF1Dib8zXEo%2B0%2BMzoOotyAhdWNCoK1YXV5%2FtYAdShgZDlr72F%2Fkh0xMNLebY1rDGoFXEHT4fwOeZZPYHeFmAtGCcChiSFjRtuc1UoC9Y7UkiBLrJyEgRITbWg4RcaZ0A540ebI3BRgMmQC49Zd070GU76iENsv0eJKsR8SEhA%2Fg5B8d6fiCK1%2BHo4KWCtvvacsuYCxhX4nzhuZ4CD11icPMbVKPytq%2FnDJcDj5C32wEonxVL5hQy2QlTibn%2B0OrOD09iYVj8HpvWrc5UQ59XtCs3hMyF3A7%2Fp1x6CoMf7pBbKxWTM7EOvRs1eaabY2R7OPuzCD1tDBBjqkAf9TQA4OzAFz4jx2SA2%2FLkOHgciouLgKoEsUWmbTO6E3Qb0NN3K8RVMYb1WfOYR28KhsgErlMrh%2FG2pdzU%2BEmrb517sMuf9FcCT8bromTdVADpzyb02Rev%2F8WLExaXkosZZsSCmbOe%2BhYrry%2B38jw7qxilX2PnaCnmw7Og%2BIe0MwJe%2B7sLPTuKJvHcadqTSWAR%2F6TfBKz21x5diwkRo4etuHP8Ty&X-Amz-Signature=09a7986e368ec1b3fa5d85db3e1b215438f0dc01d9b6bf1dcd4d036d98b335c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2Q7UYA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDQ%2BI2oCLqiIChlOdZ1PPDyhfwz0QhfAt6GM19ROSoUbgIhAP2hcXfhw2JzTfxYOojeACVGpqHTFs2SQBujuKHq8QbjKv8DCEIQABoMNjM3NDIzMTgzODA1IgwKZNomTyupV44PIXsq3AP6h869ASSpxBgxIFyK9cIYS9Lg2PYU54rsjkBOfYkqvI33LcLMZswaSAtrSjrYQKrbaWpegS4UXkTPME1DL9uWoXW7p2pmvHcDa9MQJf2k70Eeweac1lGCby%2BjxBd5QISovuQS%2BX36ZmQL3wC4j32Hk3orvPUAMNBppPaFy9CiAOYK8RfAsRLilZcYKVJh0wiHtG1y86Db973xYKiPpUjmY56qFu0oIbyJGfHrqFN2WmBEfCzdycfbfWplTjmu9jjRcPC1fmm%2F3Y4ntzupexsMDH7yjfS5SCLu05X9Oh0h4cCt517bXasErHBf7LdzBTQ2A20RbKPmby7BM3yCSP76ugGTaE5wQN7hn6R1Obx26jHOwhgZGL%2Fx5aiz9TSgd3lEHWqY%2F8ggeUj6fLKG1OpTu6AvVVF1uk9Zbg3ejgy3vMa35It02zuXNM1oGbLFv4hnhbVcvmb0LuLh6%2FTE9dGQqoudNOLvceLuZUUX1KbEjFOyW3WP3UDgM7u4LEy1xMh2FV%2FPecMUd02%2F%2BtA0%2FWL6Mp%2B2uIkgfU2YgJ9ETklod6ydcBlds2pBX%2F0IDQdz1Uclwty0mPcSCUfREdR9hbhAtxVjvssdusJMTJGhOHFhA3MMOaz6%2BEzCL%2FCGGjD51dDBBjqkAa5hESxhO0NA4VRsZXegfgous0hSOvGXjcFU3g%2F1cWb7Sb9gdsLUAnYBKYaMZT8g%2FzCSFOJ8CUEgc071vgSeSH5H7ZYAP5AvhAjXodAllD%2BxBPdvtgLGT9jihfUkE0uj6VT1YJ7gh1WqC3kQ%2FRLDUt9vg6rKh9p%2F4%2FqCcKivUtl%2FWOIXsw59QD3BjiHygKhitA5xgGouiz6J2VwjpAH%2BnWTASwnp&X-Amz-Signature=c62c307b92ed59a54aa5df390beec4788349b2d6085075a475897d1f986655c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
