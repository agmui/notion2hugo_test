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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTJL3MD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClzDx7IbEMth9wMKM53Bm%2BLRakASopomBIeUwjoxZ%2FAiBaZXqKJBRxXn4zcnEfkpQHu25jt3ApHW7zSQHB2A77UyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWCOTAWMsEqG4hDzKtwD%2FIEr9oUdqAwImJ3hPHQIUSCyvdWMmqcnaz9LBd6zOfFwFArky%2FwT570%2B17kwXVK4Py0p8iMRr2rUyaIQA1OwLhnawXnSneu5uOv782nYrqkfVheeuv2TV16s7BnWgAdb%2BQs%2FIMM8GYiItJSpSx0SIpyWEzzOTVFuKHclj%2FBp6wz7Fc1UPZ4E8H7UwL3lEyFjoD8LyIPsT17V6tRgXhThbTlL0XX2yWSExXVCS5PhcYnrjFCHktXXiFIYp6DZBCzPzsBIY%2BeJF782WR9FGNt1IzKF0boEELUZC%2Bi6%2FSXIcjhzPfCQUnUQfiPwRz2mYiQpf9%2FQ7ZoWF2kXh6uMuMWv3bjREzzDQMehVhqs%2F8MVMfcuBUXvSVS%2FQ9WwtJ1MHrKxt%2Ba9rKZICdBj72pP%2F6MSBuiPdfxGUYAQe4BU1CRrC2Dv%2F7WO0xXDHsLaYKCtyzIDpFYeRvFxlKChxgGA%2BqfgvQch1eJMxB5iLLvq5s1IxPj%2Fr%2Bjcfr1wac5o8J5WN0PJ8ddz%2Fu0lnyOfz3XtYg5AFdm6sdb%2BG8gxQ0XwXcSYuXizLjAqFBxXKymZoIKn4LJLfrh2Om9tOx3y1uoLFWY3bpWw73pLAyrYYQlsOO3xpOdT3FpPnbGynscL3r0w4Ky1xAY6pgFt3hCl%2Bx5xwBBIKEIjxEP9XSWDtsvhdSbVyNYoqbPD2VPUt%2B1QlggM6G54dDUpLiOsP%2FXTPl7RLUhOlolc3fDWLN0iQJxMG5LWQ1ljyKjXR1w9Nkz6IadAxnSDrGrlurDO%2FWCC7CidqD4SuhczQ6C%2B7cM8hC4SFvueHhm19QuikowKloO4vUq%2BZMvszR0JL0mXMuY3WeQ4Gi3Ezcd6%2B%2FTgoDHUJBdu&X-Amz-Signature=6d8afc19b83ba49edc2645adb6bbb98b965017f761bfd5f774cf9354f2061305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTJL3MD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClzDx7IbEMth9wMKM53Bm%2BLRakASopomBIeUwjoxZ%2FAiBaZXqKJBRxXn4zcnEfkpQHu25jt3ApHW7zSQHB2A77UyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWCOTAWMsEqG4hDzKtwD%2FIEr9oUdqAwImJ3hPHQIUSCyvdWMmqcnaz9LBd6zOfFwFArky%2FwT570%2B17kwXVK4Py0p8iMRr2rUyaIQA1OwLhnawXnSneu5uOv782nYrqkfVheeuv2TV16s7BnWgAdb%2BQs%2FIMM8GYiItJSpSx0SIpyWEzzOTVFuKHclj%2FBp6wz7Fc1UPZ4E8H7UwL3lEyFjoD8LyIPsT17V6tRgXhThbTlL0XX2yWSExXVCS5PhcYnrjFCHktXXiFIYp6DZBCzPzsBIY%2BeJF782WR9FGNt1IzKF0boEELUZC%2Bi6%2FSXIcjhzPfCQUnUQfiPwRz2mYiQpf9%2FQ7ZoWF2kXh6uMuMWv3bjREzzDQMehVhqs%2F8MVMfcuBUXvSVS%2FQ9WwtJ1MHrKxt%2Ba9rKZICdBj72pP%2F6MSBuiPdfxGUYAQe4BU1CRrC2Dv%2F7WO0xXDHsLaYKCtyzIDpFYeRvFxlKChxgGA%2BqfgvQch1eJMxB5iLLvq5s1IxPj%2Fr%2Bjcfr1wac5o8J5WN0PJ8ddz%2Fu0lnyOfz3XtYg5AFdm6sdb%2BG8gxQ0XwXcSYuXizLjAqFBxXKymZoIKn4LJLfrh2Om9tOx3y1uoLFWY3bpWw73pLAyrYYQlsOO3xpOdT3FpPnbGynscL3r0w4Ky1xAY6pgFt3hCl%2Bx5xwBBIKEIjxEP9XSWDtsvhdSbVyNYoqbPD2VPUt%2B1QlggM6G54dDUpLiOsP%2FXTPl7RLUhOlolc3fDWLN0iQJxMG5LWQ1ljyKjXR1w9Nkz6IadAxnSDrGrlurDO%2FWCC7CidqD4SuhczQ6C%2B7cM8hC4SFvueHhm19QuikowKloO4vUq%2BZMvszR0JL0mXMuY3WeQ4Gi3Ezcd6%2B%2FTgoDHUJBdu&X-Amz-Signature=4bca78df88d61997a064b6ca3b538d9ebf16fbcf4702f7873fa97262a3e7fa43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTJL3MD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClzDx7IbEMth9wMKM53Bm%2BLRakASopomBIeUwjoxZ%2FAiBaZXqKJBRxXn4zcnEfkpQHu25jt3ApHW7zSQHB2A77UyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWCOTAWMsEqG4hDzKtwD%2FIEr9oUdqAwImJ3hPHQIUSCyvdWMmqcnaz9LBd6zOfFwFArky%2FwT570%2B17kwXVK4Py0p8iMRr2rUyaIQA1OwLhnawXnSneu5uOv782nYrqkfVheeuv2TV16s7BnWgAdb%2BQs%2FIMM8GYiItJSpSx0SIpyWEzzOTVFuKHclj%2FBp6wz7Fc1UPZ4E8H7UwL3lEyFjoD8LyIPsT17V6tRgXhThbTlL0XX2yWSExXVCS5PhcYnrjFCHktXXiFIYp6DZBCzPzsBIY%2BeJF782WR9FGNt1IzKF0boEELUZC%2Bi6%2FSXIcjhzPfCQUnUQfiPwRz2mYiQpf9%2FQ7ZoWF2kXh6uMuMWv3bjREzzDQMehVhqs%2F8MVMfcuBUXvSVS%2FQ9WwtJ1MHrKxt%2Ba9rKZICdBj72pP%2F6MSBuiPdfxGUYAQe4BU1CRrC2Dv%2F7WO0xXDHsLaYKCtyzIDpFYeRvFxlKChxgGA%2BqfgvQch1eJMxB5iLLvq5s1IxPj%2Fr%2Bjcfr1wac5o8J5WN0PJ8ddz%2Fu0lnyOfz3XtYg5AFdm6sdb%2BG8gxQ0XwXcSYuXizLjAqFBxXKymZoIKn4LJLfrh2Om9tOx3y1uoLFWY3bpWw73pLAyrYYQlsOO3xpOdT3FpPnbGynscL3r0w4Ky1xAY6pgFt3hCl%2Bx5xwBBIKEIjxEP9XSWDtsvhdSbVyNYoqbPD2VPUt%2B1QlggM6G54dDUpLiOsP%2FXTPl7RLUhOlolc3fDWLN0iQJxMG5LWQ1ljyKjXR1w9Nkz6IadAxnSDrGrlurDO%2FWCC7CidqD4SuhczQ6C%2B7cM8hC4SFvueHhm19QuikowKloO4vUq%2BZMvszR0JL0mXMuY3WeQ4Gi3Ezcd6%2B%2FTgoDHUJBdu&X-Amz-Signature=025b46d24319861754bb9df18d746ec810a58b738b8f55d0c38d8b16453d7439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPWEYSJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBwUcEq9CYF90aYkBa76LDYsF%2FjqUrXxeIggijsMSh1gIhAJ9fAdaXntbaoIBjW4wK2zkyfqA4D4%2BCIqlx1m3D1TmrKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJKb6b4W2BU%2Fn7saAq3AN2Hre9eM79zUT7hMtncNcXQizbYbPIMx1Za1FrimKRL5aHmYfg5itlEIeflFq5yXQDIc45BCMd%2B%2F92xgxM4kJ0ohaPWaWc3xgtxccY2BjOhOZaosDopKm%2Fz2Oom%2FXaEThVQisoVT%2BOTzrvVsPpYUrXxhd6QAbhaWMBXicSpCvx%2FLv4Q%2BuwYcfLtbMAqgYtqv2sgjJawxmFhQgviQu726uvUyOxEJM87ZdnTq4KsKAa1apGw3eyhhK9ekQ%2B9wBYPRYia62oC%2Fiv2lhjwPF0pwe1ZPNjax%2BLPdUdc1vGFQ6W8M8M8AtywNoxl3oPKXW%2BdZyoQo%2Fffh7RmXOXZIKlXzfVVJ6ZYu5qrWEgBTwwktLi%2BxUlCMaDTh50t9lMpiptoIBvzCFA0RBtNB3cMWoccuLK7qlLirMHBfJ9NBRt00m3Po5rXpIVyV%2FZcODGhe7RKrbZo5jWADTuCVJAfyICzrRnBvaaK0K6%2FUeISjnwGeWsHtKA25R2aCCJZKMDwr5GsGgEbOPyjokJ2R2YD1axGXT1P%2FKDGoBK28GCIQdLsRPRT1gdmADUrNEwL%2BwfEPHsNocZiuOiuPHh%2Fu%2Bsl%2BofVtSFCxMMCInrw%2BZsBZ0%2BY7gatG7PEuMHdd6GBa%2B0TjDNrbXEBjqkARmkFv36mWa4waBnC%2BW%2F6TOkBcT7F5RH%2B%2BvlgTB0%2FTwjQqRwFOzawQA0GsJy4%2BY6Gmhm2NhF3Ss2ycmH6R0J6IG894UMqB8f1wQUgMvxsXCXqgDLOQsbIroNy9QGyoIWRi82YuwOsRH9OBoKfG%2FoZNjYBIQSuz4aeUnJbZe5nnzWbJ%2BKIjGTvHISZCBnrvwXk2ypjWmjdWoF260h20GeOivXIQ%2Bm&X-Amz-Signature=f8527109d79c6097442031bc4fcdf103c8ac2fb8477d09b97da1b5c07cab959f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPCH2TC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf0kJLqWlLTV7c8NocSELHonR8dPi3h0CroMEi8aZqIwIgYg9I9vjzpz%2BZfvt8aLVljzjU%2B6Pi1fNaGxlzsIzwOQcqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqJvcfXgYn67gMyfSrcA3Pl86XAA%2BZ01ftgbSe8QS14lbGJg4dl2GPtALOTZ6ZsfjRknPbHTwAN7FmvGsfmHrJ6LrXy6y2B%2FH6xRl26XgrodIClziiqmLaDwlrLYEP8ewGqqYiE%2BdPvpLWBa7tIqv%2Bhx48O14xRDZlFDC8qPDvlA3tgjEdTbx7c%2BK01gpggdFwFN4555urxAjHKr4o7hykyZbdZycAGD5YBDaDgrlaIPoMJqFKKFrh8sXgj86Qs3xXR3EMcxQJin3Mz9AANoFZqeZQBFfr8EQE6tVvJjvUnbYxSRL7wK6%2BHK5tUTUh7dWJOBzgJFpvc0WVrlt1mFZGi6EAMTRDsSoQ7fzO3wr%2F61VqrJzzuZHWVekaH91%2ByX5AxnAXegDiA0kmYT1NHaLfEfbbjim6wpOBrQzZlDn%2F9qqeHDyDGbAwa1wnJrpzMCK5cbfY4%2FfSesC9ZQiqEyUd5QLDJNzzSKoimZKdI7r4Muz3i0OtgPxUZ%2FpEaswXsS0cvG85XDRyt0mn4jUIHpFUyIqm%2F4RgZj2CJGIUJaHdvGmQDDY7bApL5T8qtbxL9%2BxU5RNaWryphnFSFS4gHHJyG1hmN33wrhCpByYwkMOuxNVPThj0EWncDuwSh7qbR3E5K12qUsHPFeDi9MOistcQGOqUBDfQaOTcLfT3xcRj5yiMtaKrpM%2FXDNg533MPopeK3m6lN7eGi18DdtioV1EkBLMjE2Tc66SQGPDplCrBPkpTJNZqs4fHLsHiGysdOrsDCXwCUpXRpwBPWXDa%2FkhGddsMaIGa8Hx79s0WAtNmfUe%2BMgda3Qz0DU2sDwktI72L6jUffkoThtUgxqQnzYLggIsF%2FAiQRT4ddrXsbvd7GPqfKCFSHg0qd&X-Amz-Signature=0492346fe2f646a68347119e4dd510d0c6fa99fbcb7f13f53ca00f1554f800bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTJL3MD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClzDx7IbEMth9wMKM53Bm%2BLRakASopomBIeUwjoxZ%2FAiBaZXqKJBRxXn4zcnEfkpQHu25jt3ApHW7zSQHB2A77UyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOWCOTAWMsEqG4hDzKtwD%2FIEr9oUdqAwImJ3hPHQIUSCyvdWMmqcnaz9LBd6zOfFwFArky%2FwT570%2B17kwXVK4Py0p8iMRr2rUyaIQA1OwLhnawXnSneu5uOv782nYrqkfVheeuv2TV16s7BnWgAdb%2BQs%2FIMM8GYiItJSpSx0SIpyWEzzOTVFuKHclj%2FBp6wz7Fc1UPZ4E8H7UwL3lEyFjoD8LyIPsT17V6tRgXhThbTlL0XX2yWSExXVCS5PhcYnrjFCHktXXiFIYp6DZBCzPzsBIY%2BeJF782WR9FGNt1IzKF0boEELUZC%2Bi6%2FSXIcjhzPfCQUnUQfiPwRz2mYiQpf9%2FQ7ZoWF2kXh6uMuMWv3bjREzzDQMehVhqs%2F8MVMfcuBUXvSVS%2FQ9WwtJ1MHrKxt%2Ba9rKZICdBj72pP%2F6MSBuiPdfxGUYAQe4BU1CRrC2Dv%2F7WO0xXDHsLaYKCtyzIDpFYeRvFxlKChxgGA%2BqfgvQch1eJMxB5iLLvq5s1IxPj%2Fr%2Bjcfr1wac5o8J5WN0PJ8ddz%2Fu0lnyOfz3XtYg5AFdm6sdb%2BG8gxQ0XwXcSYuXizLjAqFBxXKymZoIKn4LJLfrh2Om9tOx3y1uoLFWY3bpWw73pLAyrYYQlsOO3xpOdT3FpPnbGynscL3r0w4Ky1xAY6pgFt3hCl%2Bx5xwBBIKEIjxEP9XSWDtsvhdSbVyNYoqbPD2VPUt%2B1QlggM6G54dDUpLiOsP%2FXTPl7RLUhOlolc3fDWLN0iQJxMG5LWQ1ljyKjXR1w9Nkz6IadAxnSDrGrlurDO%2FWCC7CidqD4SuhczQ6C%2B7cM8hC4SFvueHhm19QuikowKloO4vUq%2BZMvszR0JL0mXMuY3WeQ4Gi3Ezcd6%2B%2FTgoDHUJBdu&X-Amz-Signature=324ba459856980d77af4a5995074be4bdd2511bb8dcf36c548ae017a1e071f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
