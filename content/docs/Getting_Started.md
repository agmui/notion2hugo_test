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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPBRCBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI%2FTbS6Vi8uDk0BTovslVTMyYjQUlTBu0g1t8GMGGFeAiEAylk85JCwXIaYWYX0lhKzN%2F0by21kf1sANy8FmEoPLbAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL00FrMVDSpSS2zHCrcA1P6qNc7KXiuFpq0o8KGmY7hVzf4w6xTjcCdC2NRBU8%2Fk4swyus9UHwdvzLbwzNBSRviHPnYmKjI17591e2vXY28Hs8V4h9oiMV9KIJ8bD2DE2MX0TMKyGUnvVl1dQh%2B%2FP4NFXRdYSwkA0M70dIV0SCa9TUxB1bRa8%2BE248lZnVSup2uLcs6I8XQUN0KFTAmqTV3LDiRU0oex%2FQf81HJcSGfGg62OO0USBQrVM0M0bHK1rEYI5WBaCRvQ068lMynrarcCQioSKlUoDIqSMfzeCoyv%2F42b5YLN81wkudHaxJ2dqaQwkhQk9ENfKjmb1En8fem22Va4n7H7AqBdmVO8hMDoowDdPfpjvCpSSmfh3I1uR1MSziTygF2jQwLFYpjrZD7Hvp5%2F%2FYHbnnzZ1SCo5DSmz699T402UuXiZpJEGwPID7Z5ef8wqGW%2BR00ZVhxDJr8WWaweRP%2BwoBKBHhnY%2BIbND4IFq4%2F8Tx3zk8%2Fnicv51Vf0kl4lD71GJ1R51NY%2BVr2qdvJk2OyN24zDyfqAO2Ubd0j4OFsdIeujMDVF947H5XXCF0Q0322W09M0bZsrNbQS0gJfrJInbEt3Jr8d2QyyzvaTJ8XOU8YDeTrQb9zfaKij43hr9U1kKQWMJWCrMEGOqUBwe6yJP4tW2odx%2FuLpvKmH9UjVBNuqs5UVedlYoYpOOPfvQZHTzJcOBtwDIG4M8mTclVVvknhWMxqNxXSK%2B4FS6Wi68QclA87sHokCxYWMKmYH%2BCkUy7GkR46CI%2BY35Vdq0ruwLI%2ByPEUA61LDB2hT%2FS1FEz2W4A7%2BKm9ch%2B95b3srXhV2AO%2F%2BxpJ9azM1bs3jE8jRlFhSacU53BZ%2FWZIwP%2FD6COz&X-Amz-Signature=8a28310cae550e1fb9d0523a2669e73110829ff2b8c0a4d1330393f3f119ddc4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPBRCBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI%2FTbS6Vi8uDk0BTovslVTMyYjQUlTBu0g1t8GMGGFeAiEAylk85JCwXIaYWYX0lhKzN%2F0by21kf1sANy8FmEoPLbAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL00FrMVDSpSS2zHCrcA1P6qNc7KXiuFpq0o8KGmY7hVzf4w6xTjcCdC2NRBU8%2Fk4swyus9UHwdvzLbwzNBSRviHPnYmKjI17591e2vXY28Hs8V4h9oiMV9KIJ8bD2DE2MX0TMKyGUnvVl1dQh%2B%2FP4NFXRdYSwkA0M70dIV0SCa9TUxB1bRa8%2BE248lZnVSup2uLcs6I8XQUN0KFTAmqTV3LDiRU0oex%2FQf81HJcSGfGg62OO0USBQrVM0M0bHK1rEYI5WBaCRvQ068lMynrarcCQioSKlUoDIqSMfzeCoyv%2F42b5YLN81wkudHaxJ2dqaQwkhQk9ENfKjmb1En8fem22Va4n7H7AqBdmVO8hMDoowDdPfpjvCpSSmfh3I1uR1MSziTygF2jQwLFYpjrZD7Hvp5%2F%2FYHbnnzZ1SCo5DSmz699T402UuXiZpJEGwPID7Z5ef8wqGW%2BR00ZVhxDJr8WWaweRP%2BwoBKBHhnY%2BIbND4IFq4%2F8Tx3zk8%2Fnicv51Vf0kl4lD71GJ1R51NY%2BVr2qdvJk2OyN24zDyfqAO2Ubd0j4OFsdIeujMDVF947H5XXCF0Q0322W09M0bZsrNbQS0gJfrJInbEt3Jr8d2QyyzvaTJ8XOU8YDeTrQb9zfaKij43hr9U1kKQWMJWCrMEGOqUBwe6yJP4tW2odx%2FuLpvKmH9UjVBNuqs5UVedlYoYpOOPfvQZHTzJcOBtwDIG4M8mTclVVvknhWMxqNxXSK%2B4FS6Wi68QclA87sHokCxYWMKmYH%2BCkUy7GkR46CI%2BY35Vdq0ruwLI%2ByPEUA61LDB2hT%2FS1FEz2W4A7%2BKm9ch%2B95b3srXhV2AO%2F%2BxpJ9azM1bs3jE8jRlFhSacU53BZ%2FWZIwP%2FD6COz&X-Amz-Signature=80521822256870d263c323720c28d2b44bfe52450d8d1741d0331be617d63bac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPBRCBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI%2FTbS6Vi8uDk0BTovslVTMyYjQUlTBu0g1t8GMGGFeAiEAylk85JCwXIaYWYX0lhKzN%2F0by21kf1sANy8FmEoPLbAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL00FrMVDSpSS2zHCrcA1P6qNc7KXiuFpq0o8KGmY7hVzf4w6xTjcCdC2NRBU8%2Fk4swyus9UHwdvzLbwzNBSRviHPnYmKjI17591e2vXY28Hs8V4h9oiMV9KIJ8bD2DE2MX0TMKyGUnvVl1dQh%2B%2FP4NFXRdYSwkA0M70dIV0SCa9TUxB1bRa8%2BE248lZnVSup2uLcs6I8XQUN0KFTAmqTV3LDiRU0oex%2FQf81HJcSGfGg62OO0USBQrVM0M0bHK1rEYI5WBaCRvQ068lMynrarcCQioSKlUoDIqSMfzeCoyv%2F42b5YLN81wkudHaxJ2dqaQwkhQk9ENfKjmb1En8fem22Va4n7H7AqBdmVO8hMDoowDdPfpjvCpSSmfh3I1uR1MSziTygF2jQwLFYpjrZD7Hvp5%2F%2FYHbnnzZ1SCo5DSmz699T402UuXiZpJEGwPID7Z5ef8wqGW%2BR00ZVhxDJr8WWaweRP%2BwoBKBHhnY%2BIbND4IFq4%2F8Tx3zk8%2Fnicv51Vf0kl4lD71GJ1R51NY%2BVr2qdvJk2OyN24zDyfqAO2Ubd0j4OFsdIeujMDVF947H5XXCF0Q0322W09M0bZsrNbQS0gJfrJInbEt3Jr8d2QyyzvaTJ8XOU8YDeTrQb9zfaKij43hr9U1kKQWMJWCrMEGOqUBwe6yJP4tW2odx%2FuLpvKmH9UjVBNuqs5UVedlYoYpOOPfvQZHTzJcOBtwDIG4M8mTclVVvknhWMxqNxXSK%2B4FS6Wi68QclA87sHokCxYWMKmYH%2BCkUy7GkR46CI%2BY35Vdq0ruwLI%2ByPEUA61LDB2hT%2FS1FEz2W4A7%2BKm9ch%2B95b3srXhV2AO%2F%2BxpJ9azM1bs3jE8jRlFhSacU53BZ%2FWZIwP%2FD6COz&X-Amz-Signature=685575716548bfb37e3d9d28187518cff4bd2e24a9eb798ce36c5c604a50b670&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYMM2YV%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF48ZScf1qHat5X%2BKbhd9cnNyex9lW2JOOpwNQ6%2BmNjtAiA5cZNhHrTn%2Fg8gtrRmw4LYzri97ii0l%2BD4d6Z9FYlMGCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM2GXpH6Lv5hUJu%2FaKtwDVN9v7kIZv7IuTOGN2VIHx1Gx1tLXsUh%2ByCroK3l8t7R8yExZf41rj95%2FIyHKMIqArOpf6KuM4MamFgGE1ItvvXDK8ECJ4Ik81AhklvHsAQ6CacCAHj0TvWKItnVKouamj8GwwJK0Oi11aH2oQ0x7cbxoYjNDLrvdQ0x9V6KDC4t8f3RnNR0aGUtA%2BlIgmCY0GVrCBJ3%2FD%2Bzy45PlmtkGazRiDjBoeNanytBUZKz3ahpny978XwXnLJ2zgP%2BVlczv%2FJOY%2FKng8%2FqC0STDvYsK7P3Xbx7iM0r68DT8SQKv4MYjrwsEt4BegTQaFdTS3Be78LO2b%2BTin5qDq4iju%2BvSPM59IbAzjcssSujzacn3dn17XsvSMC%2FEGxehnvcYqyzqJq9dtib2crLB%2Fm%2FSRIB%2BPswpONNgKZnlgoxl%2FSfkT5sZfjYohmuKiquta10OmLwwjp8i7rWhqRUMATCvZO1mBiqq9lLJ2kNYjL3ck7zuu30cL8ceEEN%2B8jXmz7bIsvMt4TcieRXRB%2B1nUa5IBTkzpgzVBXFPoJ%2FXGPm3yJlfzu3cj51qooE4aXOZEvfpeTI9Ax9BeH0SFaxWzx9PvjwZl0uf1UADnAeZhZjxsRpM9MdniFry7idGwGtWdGYwt4GswQY6pgGxhhZP2hfq3czKBWdF27WnfzK5gUfciMAlEKWlY%2ByYvD6vo0Ycth4nOwt7PfTDvEQ7IzzaZsYdrFo8PwqlQYi7pOhJI5Ty4E7tVmmeZ39xBQA1ZdcVHzBFIXOvn%2Fl6ZAq3Tg%2F6HH6yhBgsDEG6%2F7gOI5kFRCQYDLZsPVMMR9JBoBS7eCWuPO2udC0V0qRfKS7hBsoc%2FbmpEy4U4RIfARv5aERzBn7x&X-Amz-Signature=7dfba16458ceefe2d1ffa7b1702bfb6ca42fd78927c180172bd9612f413f39b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSCXLNYB%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbkfrtb6St%2BH%2FAUNbwt9mv%2FjP%2Fnxs1eUQmg%2FTd6pjJIQIhAMrB3eJ52Cme4YKNNLMbHN4bMGMezyRnITbYzchUbpStKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwuZEStL%2BPVAknevIq3AMmTAPBi1wCpVlIhAu6Achf8H2H2qker5kfrvvSNF6gsJCouD3KlTsbO0Yth73pi0CiPnNbP%2BPPPNy0tKkbgFIboZIhZlPnrDZIuS2CVqCBz%2BQTEgHGxrQsC4J%2FzXS7Ioxx5jbpu0epUI%2F3VAHW7xryhcE6iPY17t2ZwJ5PKrMNl81Tj09yLy7JwZBsaKhAg6jLl%2FI1myQBTJMF6yn1lB1FUqhNufPgD0H2s7%2F0UJqI3kmkEDoTR2bJt%2B9VFTiqC4aBk8heVIjvnKisIL01Pdjml%2Bs55AtMruztOJ0MiqzDO9M5aXZWJu%2BPqybKriQSfbNmVNsz0CXWmb%2BJEr3iuiJHON95A3Ao0RSloUzU%2FmlplcrFwOLwdItZDubzkJ9Cls%2BXjrbO6DajaAeRbc3o%2BVJpecSG4kjfuEKsBBrpmSQtjWeeFeGXExAINgkr5VmIPH1iC5lQN1SjV6%2F5KT4qDozHUwvVV6A%2BgrR2kRVB8dzQuSCucWahAyCKDl0bnqaVVcIK8M3R1aokQQu8%2Fay2f8ofxL0NAtKzqA6MztZ3%2BCoHTplOOalpwEmsVHFS0Z8l31mFjH2y9glG%2F0MAvslmNbl7HacLaL%2BKtZR12WyCfpQ%2FMVhsYqobvqBv%2BhSAyTCUgqzBBjqkAYM%2FztJ6my0KWAq5tgb7DqgftHPriPsBfqPUz%2BnW6pR6Sc1E6Ako7b9mRXzM95EguJP0RS3jiOMekmqc2%2FhwST%2FAJBovvm3BfPrBXsHZLtw39FC0xeiod7tvIP7R9oIFko4F1F0Q%2BQHxURrSuxTFUO%2BW4x%2FhJNj41lRxMYob3iiHyDCLKw0U%2FZSlsXmq9meq%2BASkUZgoILnSQoKoFhfBOTl8Uozg&X-Amz-Signature=311e8544f479fa678767288d03687b682ff6c107a064140402238f59ef628033&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPBRCBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI%2FTbS6Vi8uDk0BTovslVTMyYjQUlTBu0g1t8GMGGFeAiEAylk85JCwXIaYWYX0lhKzN%2F0by21kf1sANy8FmEoPLbAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGL00FrMVDSpSS2zHCrcA1P6qNc7KXiuFpq0o8KGmY7hVzf4w6xTjcCdC2NRBU8%2Fk4swyus9UHwdvzLbwzNBSRviHPnYmKjI17591e2vXY28Hs8V4h9oiMV9KIJ8bD2DE2MX0TMKyGUnvVl1dQh%2B%2FP4NFXRdYSwkA0M70dIV0SCa9TUxB1bRa8%2BE248lZnVSup2uLcs6I8XQUN0KFTAmqTV3LDiRU0oex%2FQf81HJcSGfGg62OO0USBQrVM0M0bHK1rEYI5WBaCRvQ068lMynrarcCQioSKlUoDIqSMfzeCoyv%2F42b5YLN81wkudHaxJ2dqaQwkhQk9ENfKjmb1En8fem22Va4n7H7AqBdmVO8hMDoowDdPfpjvCpSSmfh3I1uR1MSziTygF2jQwLFYpjrZD7Hvp5%2F%2FYHbnnzZ1SCo5DSmz699T402UuXiZpJEGwPID7Z5ef8wqGW%2BR00ZVhxDJr8WWaweRP%2BwoBKBHhnY%2BIbND4IFq4%2F8Tx3zk8%2Fnicv51Vf0kl4lD71GJ1R51NY%2BVr2qdvJk2OyN24zDyfqAO2Ubd0j4OFsdIeujMDVF947H5XXCF0Q0322W09M0bZsrNbQS0gJfrJInbEt3Jr8d2QyyzvaTJ8XOU8YDeTrQb9zfaKij43hr9U1kKQWMJWCrMEGOqUBwe6yJP4tW2odx%2FuLpvKmH9UjVBNuqs5UVedlYoYpOOPfvQZHTzJcOBtwDIG4M8mTclVVvknhWMxqNxXSK%2B4FS6Wi68QclA87sHokCxYWMKmYH%2BCkUy7GkR46CI%2BY35Vdq0ruwLI%2ByPEUA61LDB2hT%2FS1FEz2W4A7%2BKm9ch%2B95b3srXhV2AO%2F%2BxpJ9azM1bs3jE8jRlFhSacU53BZ%2FWZIwP%2FD6COz&X-Amz-Signature=da2893925dbd33e1dc29e507b96afba9c0d999e57caa74b4b16f0804dcd4d986&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
