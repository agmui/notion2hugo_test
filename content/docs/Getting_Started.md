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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFSV3IFW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEy84zfKwSC7KEl%2BHsoiypUlr0zn8h6z%2Fgi7sNgIOng7AiEA5kBi10W9noXPBFHkLYZ7dCt%2BlCXRs4GfiuZzQrjus50q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKCOL2riKh8rS1JrcircA%2F3dw6OslEwQXroFeTZ1QxwDlLKm0khdQMC783IYVMRyGI6IE6B6Qn%2FP1A%2FR1cMejcGyhEAX1o90rfMZAGy%2FZSS7HR4OB6OJ%2FxJDS70LCjxNb2Bbi30qH%2Bw8WNvxQsyjmfoiuIrsYIkKURfhAzXQoHcIQaokEb0H%2B7ZGRZHmNhSEvvTZLFIKGy8gRwyfj7hknBYHOj4I%2Bj21UO%2FpZ6vOavGQ8R3B1JxKbcqGbLSWiuJtFRrQfnAExWWLgk7SqxOD4d68%2Bz5gTcKPEEvUBrf62olkNy5NlbKKdJLVT4ZheRD%2Bvp1%2FxdF0XTmbU7NgdXy5ql0w5m1GApN7GmLaAtkDRRDdmeMJlKA5qKjcsT6GH%2F14lvvhRSd6vqUlc5Pv63bxh%2B0xA0P4AB4DfraBkNaehQOKhHGfH9YwNU7%2FSbzMT01huWj9KnRNc1qA8X6PRX%2BWODtwKqfuwvL4LNHBFQoFuELKzMrAyEobXB7M%2BdD1BMtNhv41n7x%2BaY1B6Ehv1mEx1Io3B02JnVxVaMZ3cYrop9UI%2BgZGQeaK3azFzydYLBMyG2pt8J7a4O6NfGkDxB4dn9jVWkKN3oNNwv%2BmTAvUEWbKv%2BB6o9W%2FmJ%2FBU0YdR4LqmzOjApjW6jzcAVRLMO%2BWrMMGOqUBIdGlYR9c7XoMJHk2Q8f323iVattt%2BgDkTxm1VsM9F%2FmlFXA6bhWSSGuqe0ktXP1kYLWz%2BpSqmID75ENdw9xK%2FA%2BwxryWNHS2xmbtMEkwp0ZlI9yhAzUL67%2BjnHO99Fij6txLB5l8sdQS5kMm8QKrZnPU%2BbeyI2Coi7arlFGfqhWYfWxdL9BmujVSFZuqwhbdyxxfzbDl1Ry9i3zIQOn7LDMLrPv8&X-Amz-Signature=e7acce70b9c27a01fa3e896f77aee78deea65648d56a7ca6dae2812990142b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFSV3IFW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEy84zfKwSC7KEl%2BHsoiypUlr0zn8h6z%2Fgi7sNgIOng7AiEA5kBi10W9noXPBFHkLYZ7dCt%2BlCXRs4GfiuZzQrjus50q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKCOL2riKh8rS1JrcircA%2F3dw6OslEwQXroFeTZ1QxwDlLKm0khdQMC783IYVMRyGI6IE6B6Qn%2FP1A%2FR1cMejcGyhEAX1o90rfMZAGy%2FZSS7HR4OB6OJ%2FxJDS70LCjxNb2Bbi30qH%2Bw8WNvxQsyjmfoiuIrsYIkKURfhAzXQoHcIQaokEb0H%2B7ZGRZHmNhSEvvTZLFIKGy8gRwyfj7hknBYHOj4I%2Bj21UO%2FpZ6vOavGQ8R3B1JxKbcqGbLSWiuJtFRrQfnAExWWLgk7SqxOD4d68%2Bz5gTcKPEEvUBrf62olkNy5NlbKKdJLVT4ZheRD%2Bvp1%2FxdF0XTmbU7NgdXy5ql0w5m1GApN7GmLaAtkDRRDdmeMJlKA5qKjcsT6GH%2F14lvvhRSd6vqUlc5Pv63bxh%2B0xA0P4AB4DfraBkNaehQOKhHGfH9YwNU7%2FSbzMT01huWj9KnRNc1qA8X6PRX%2BWODtwKqfuwvL4LNHBFQoFuELKzMrAyEobXB7M%2BdD1BMtNhv41n7x%2BaY1B6Ehv1mEx1Io3B02JnVxVaMZ3cYrop9UI%2BgZGQeaK3azFzydYLBMyG2pt8J7a4O6NfGkDxB4dn9jVWkKN3oNNwv%2BmTAvUEWbKv%2BB6o9W%2FmJ%2FBU0YdR4LqmzOjApjW6jzcAVRLMO%2BWrMMGOqUBIdGlYR9c7XoMJHk2Q8f323iVattt%2BgDkTxm1VsM9F%2FmlFXA6bhWSSGuqe0ktXP1kYLWz%2BpSqmID75ENdw9xK%2FA%2BwxryWNHS2xmbtMEkwp0ZlI9yhAzUL67%2BjnHO99Fij6txLB5l8sdQS5kMm8QKrZnPU%2BbeyI2Coi7arlFGfqhWYfWxdL9BmujVSFZuqwhbdyxxfzbDl1Ry9i3zIQOn7LDMLrPv8&X-Amz-Signature=27310760a6491df8eba84086e12145c516f711a6971b12d425d539c1b9dd016e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFSV3IFW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEy84zfKwSC7KEl%2BHsoiypUlr0zn8h6z%2Fgi7sNgIOng7AiEA5kBi10W9noXPBFHkLYZ7dCt%2BlCXRs4GfiuZzQrjus50q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKCOL2riKh8rS1JrcircA%2F3dw6OslEwQXroFeTZ1QxwDlLKm0khdQMC783IYVMRyGI6IE6B6Qn%2FP1A%2FR1cMejcGyhEAX1o90rfMZAGy%2FZSS7HR4OB6OJ%2FxJDS70LCjxNb2Bbi30qH%2Bw8WNvxQsyjmfoiuIrsYIkKURfhAzXQoHcIQaokEb0H%2B7ZGRZHmNhSEvvTZLFIKGy8gRwyfj7hknBYHOj4I%2Bj21UO%2FpZ6vOavGQ8R3B1JxKbcqGbLSWiuJtFRrQfnAExWWLgk7SqxOD4d68%2Bz5gTcKPEEvUBrf62olkNy5NlbKKdJLVT4ZheRD%2Bvp1%2FxdF0XTmbU7NgdXy5ql0w5m1GApN7GmLaAtkDRRDdmeMJlKA5qKjcsT6GH%2F14lvvhRSd6vqUlc5Pv63bxh%2B0xA0P4AB4DfraBkNaehQOKhHGfH9YwNU7%2FSbzMT01huWj9KnRNc1qA8X6PRX%2BWODtwKqfuwvL4LNHBFQoFuELKzMrAyEobXB7M%2BdD1BMtNhv41n7x%2BaY1B6Ehv1mEx1Io3B02JnVxVaMZ3cYrop9UI%2BgZGQeaK3azFzydYLBMyG2pt8J7a4O6NfGkDxB4dn9jVWkKN3oNNwv%2BmTAvUEWbKv%2BB6o9W%2FmJ%2FBU0YdR4LqmzOjApjW6jzcAVRLMO%2BWrMMGOqUBIdGlYR9c7XoMJHk2Q8f323iVattt%2BgDkTxm1VsM9F%2FmlFXA6bhWSSGuqe0ktXP1kYLWz%2BpSqmID75ENdw9xK%2FA%2BwxryWNHS2xmbtMEkwp0ZlI9yhAzUL67%2BjnHO99Fij6txLB5l8sdQS5kMm8QKrZnPU%2BbeyI2Coi7arlFGfqhWYfWxdL9BmujVSFZuqwhbdyxxfzbDl1Ry9i3zIQOn7LDMLrPv8&X-Amz-Signature=6e3758f9d99e1ab027bea2238a08bfc09b6ca21c455b47786ee28254f848df96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBF6KUIN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGzR0U0cOuTSvx%2FTcEsJZaoV4gr6LfPchRm%2FFJ%2F9UTjKAiBTRbtBm%2B7aSg%2BaoodGWFNosnsFqFtNYptmc%2B1pf%2Bfdbir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM2dLlfpp42AT7Ddq3KtwDXWjE3KOCtNmeJTRbWixVmN2%2B4IFnCnTc2Ew7JUFdI8vFrTMG1XlvUyUczeu9w2XnLXw7twAwHphMUNLTAjvVUiGnH8Y%2FT7YxQSgT427oMJlaB4bhlW1%2B6WDAYEB6c%2B21f3lt%2B51HwHSp1i5fMg9uOMCybpCdrpEc2jwqne4Jzg13vgvn1avVYXxzwNBfkqyEiz25FLt9vQYo3zrAezpcQz5MdIG80JCUHpnuX7x0pW7mWgzcc3vOBBKvZGfc4b8PwRlGmLO8lhzH%2BJ9Ou%2BVxqt7klK6qoNQi9%2B%2BPIjY%2BGivYBWbQSX4cotaGj0F8oKOwHZM7z2tsPB3xYpG44GHydejmKWmA0SwSMeXVL09tkbwlHuMl5%2F89KVz7Kscix%2BwX8S28QT1DIyYNH%2FxyXBBpxUo0ORaxKse%2FjOHW4o%2F5Wzuauv5N8QkERUWj%2FGsU4YwbQGmGRlTWn5f0gk0OdfzLGJt1Ufme6rZaWUZXx5iTHRNuJLj12O%2BCgBDu9HbUxpapu3nCeZK3L%2FTTzrichO4n1efzpQZt7di4OfTW1EjZ3uZpLIkRKQ3dxEnPjHAzf5A1OMFZO0G5DxvtPv1tBW0tR8H5tzXuljFLIHXhXWPP1ZMtektc%2BYfQOti71mowrJWswwY6pgF57MU%2BSDuQvWLURmv8%2FIyrGf4j2SLMYIGvuCUeJBHcbgrnMYbtQqvZ845DTSnnuu5J%2FKVRKhiRzf9KO5tTHdPnu%2FTsVFhuNu%2BbK0Sp2f71s703FUJLrXmsDdJyb3E1mX%2Bg%2FefAeOEB7uPlSwRcchJ51uSg68H6SeXxIT3GszI%2F8DqyI7vaIq3iNY7dhXXbcQYuOkH5cK%2BTT9MpjsCap3FqohbGggem&X-Amz-Signature=0ab7248cb2ca5e106dfa5280baaa357e7b2874ea80bb5ca1d7cd8c5092136872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KEMUW5C%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQC7xKyWM67Xszkk3S1jkvHs89JE9jUpnuIIAA1UsIic6AIhAOSpRIe9y7OIQwKRi3mq9pe0R91fak%2BLGMotkP5%2BY8g2Kv8DCGkQABoMNjM3NDIzMTgzODA1Igw33xqH5%2BrhinITCm8q3AOWz7XiK9Sqi%2FUyiSOCfxPwb11Az0XxpfDy7Zx6wB2fEhZYj0E9WmYxqbTS0QtWP1FZQn4%2BRTwzf8exHYQTAU5WtyUkcdZpwkJ77ONHxrdW%2FysX0IKhBtaag0qVA0SRQiHziEFZapf%2BPrgPk2Wi4EbSCdHj%2BDvCN%2FAC63GiOZ%2BUDFT7M02%2F0dXCllovlJb2xnZuAWf7VhMT2f90OKRZwb1tfL0VdX9VeZ84d0d7jlNE7GycJzQE7M0UFBobL4yDA064ZBS2dwcXot1mQv%2FKMfV%2FyonxFAsWBWD3Php1VrHEr09YYKDMZUmXDMr%2BsgP0CiaIRG8qYnv78UzFmxOBMOWXpSTjVniG1kFO%2FHbd0mthu6pjPvN6zEFL959mgiHJH98HrkKGSWsK4I3aM2uEyj8jEzvlXpGRKVxwj6RuCLVJdImFRYR6WkJveBGIo7PkSUFQS6%2BbtuTCi22N6HHiqb%2B%2BSKgC0%2B7X2%2Fb6ew9BBu2U05WGChTlnGjISTDDt4PsDN652JhW5xR6l1hQT%2BJNxz3Ozc91ZkPMOVFEN%2FPnJO2RrWKyS%2BHT6F6nCdHFm0f3Kei8YDUiuUN0vCKUUslMH32paw6gv5Oe%2F%2Fcu%2FG%2F1112mczcOSeFtnqt6KKvnLzD6jazDBjqkAcE72Dl%2FmpW2HVZPMJlYFxQgyYEAGD8toFI7dKF%2FViP%2BRD4EI1tbMfFX%2FmAjLe8rqjjWw3s5X9G9gLN9ddBNr9jJ5hPN5DjQZU1slbGFycma04qrBKzOxxur%2F0fvakBtJ3Grk6IvDiN5u%2FFToqMTm9vaZAg1Ye9RjcDsIlzIBC3grjZyM%2Bi2cZXp35AegbavOj6%2BxKGyKPFATPNGjdpL8bCYQup4&X-Amz-Signature=7ad10310f7e1b5fb9f87979854dca1dc3a342b3553d791cf81a08e1ef80d709a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFSV3IFW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEy84zfKwSC7KEl%2BHsoiypUlr0zn8h6z%2Fgi7sNgIOng7AiEA5kBi10W9noXPBFHkLYZ7dCt%2BlCXRs4GfiuZzQrjus50q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKCOL2riKh8rS1JrcircA%2F3dw6OslEwQXroFeTZ1QxwDlLKm0khdQMC783IYVMRyGI6IE6B6Qn%2FP1A%2FR1cMejcGyhEAX1o90rfMZAGy%2FZSS7HR4OB6OJ%2FxJDS70LCjxNb2Bbi30qH%2Bw8WNvxQsyjmfoiuIrsYIkKURfhAzXQoHcIQaokEb0H%2B7ZGRZHmNhSEvvTZLFIKGy8gRwyfj7hknBYHOj4I%2Bj21UO%2FpZ6vOavGQ8R3B1JxKbcqGbLSWiuJtFRrQfnAExWWLgk7SqxOD4d68%2Bz5gTcKPEEvUBrf62olkNy5NlbKKdJLVT4ZheRD%2Bvp1%2FxdF0XTmbU7NgdXy5ql0w5m1GApN7GmLaAtkDRRDdmeMJlKA5qKjcsT6GH%2F14lvvhRSd6vqUlc5Pv63bxh%2B0xA0P4AB4DfraBkNaehQOKhHGfH9YwNU7%2FSbzMT01huWj9KnRNc1qA8X6PRX%2BWODtwKqfuwvL4LNHBFQoFuELKzMrAyEobXB7M%2BdD1BMtNhv41n7x%2BaY1B6Ehv1mEx1Io3B02JnVxVaMZ3cYrop9UI%2BgZGQeaK3azFzydYLBMyG2pt8J7a4O6NfGkDxB4dn9jVWkKN3oNNwv%2BmTAvUEWbKv%2BB6o9W%2FmJ%2FBU0YdR4LqmzOjApjW6jzcAVRLMO%2BWrMMGOqUBIdGlYR9c7XoMJHk2Q8f323iVattt%2BgDkTxm1VsM9F%2FmlFXA6bhWSSGuqe0ktXP1kYLWz%2BpSqmID75ENdw9xK%2FA%2BwxryWNHS2xmbtMEkwp0ZlI9yhAzUL67%2BjnHO99Fij6txLB5l8sdQS5kMm8QKrZnPU%2BbeyI2Coi7arlFGfqhWYfWxdL9BmujVSFZuqwhbdyxxfzbDl1Ry9i3zIQOn7LDMLrPv8&X-Amz-Signature=f48434d0a6643007f96fa82f637b3256148cb6019511688e7993de0e49cbbfec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
