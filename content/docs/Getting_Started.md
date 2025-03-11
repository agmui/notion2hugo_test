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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UCNZTA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDCq%2FG3KZsPgXCERf8v5Rh3JQEWgDiBGywR%2BkW%2B%2F1Ba4gIgDzY9T%2BJNirRMfmqQgC55hk%2FHk265Pt0URPPq1BuUw5cqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJUmG8y5i526vYHbircA1TFR0O%2BY2siKOpPHkN4Dk4qH7vk06iDSHM0sWk5WIsU3LUMjQVm6ZhLkFq2HSY22g9VRt1iqamlQGgwtV2W6ARo6qzXpltP12kcLRsUX18FUcMq2bL7pQ5AJQdfRu5cEINm6aCD%2FOpKowuckj6Z4xbhuGa6iw5oCmzuiUH9aNavP248niOAG6TQFUu6dnsUm3MyLT0Lh4SjM58MIYDk2cs0boKaXptsHrhPzJVWK1cl53qFe7a0VZrw8Fbdy1qctNV03GiNXgBke1FpkT6XTqoFmfA4vLL2c6uzJU%2FJqPEM%2B0VNBkOIrD65kHXOe6R8%2FBLf%2Bo%2FwNmd3J6%2FInQLyckM12h%2F9olyLUkX13zpmWO5JXpKgEdVaPxVZ13EELZop3em9hGUhRqQ5NUULN6p0leOBHtU5%2Bi2Gt3ZIbjiN0IxfGRw656DKn0WJa1gzwRCIE9qMVp2pqz8kHKP0ATNWVY0pqy8kwIa1NC3FGoyjo3OyhmEuIW1p%2BjV66R%2Fm%2FJKVkr2aetInahjRTBG5dmb2FdstrRGMpYvPrN9ZdT%2FtRZyWATiEUll2v87dvEsb6iQ1eqPlCD136qvnLE4FYZpOqhdlbXGKFOQ6UmRBbX4HAN8G7gFJhaZzwqwjHHN%2BMPXwv74GOqUBeiba49ZqkNxJBpEDFOXJj%2FMyjxy31DxKKJBpy9HpzSGdKWuA8FCwEjEhHabG7cfi7juMUiePoFRJU4ZHPMWYK29oz9b%2FynGg0O4nIEYis1q3WVRcIb9uqbVp7%2Bx6dm%2Flfeku4GfVwTBh6F1R39CiLOc3qg%2F0tpAbiGsJ0f89u8j6g9mRO6pUSinnpQTx3Ab2I2qI3NfcfHgWmqRogVikByVClglX&X-Amz-Signature=4a8106bf148aece20f0330a3734175e4682e5a0288bb203cae594c04ea1c944e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UCNZTA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDCq%2FG3KZsPgXCERf8v5Rh3JQEWgDiBGywR%2BkW%2B%2F1Ba4gIgDzY9T%2BJNirRMfmqQgC55hk%2FHk265Pt0URPPq1BuUw5cqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJUmG8y5i526vYHbircA1TFR0O%2BY2siKOpPHkN4Dk4qH7vk06iDSHM0sWk5WIsU3LUMjQVm6ZhLkFq2HSY22g9VRt1iqamlQGgwtV2W6ARo6qzXpltP12kcLRsUX18FUcMq2bL7pQ5AJQdfRu5cEINm6aCD%2FOpKowuckj6Z4xbhuGa6iw5oCmzuiUH9aNavP248niOAG6TQFUu6dnsUm3MyLT0Lh4SjM58MIYDk2cs0boKaXptsHrhPzJVWK1cl53qFe7a0VZrw8Fbdy1qctNV03GiNXgBke1FpkT6XTqoFmfA4vLL2c6uzJU%2FJqPEM%2B0VNBkOIrD65kHXOe6R8%2FBLf%2Bo%2FwNmd3J6%2FInQLyckM12h%2F9olyLUkX13zpmWO5JXpKgEdVaPxVZ13EELZop3em9hGUhRqQ5NUULN6p0leOBHtU5%2Bi2Gt3ZIbjiN0IxfGRw656DKn0WJa1gzwRCIE9qMVp2pqz8kHKP0ATNWVY0pqy8kwIa1NC3FGoyjo3OyhmEuIW1p%2BjV66R%2Fm%2FJKVkr2aetInahjRTBG5dmb2FdstrRGMpYvPrN9ZdT%2FtRZyWATiEUll2v87dvEsb6iQ1eqPlCD136qvnLE4FYZpOqhdlbXGKFOQ6UmRBbX4HAN8G7gFJhaZzwqwjHHN%2BMPXwv74GOqUBeiba49ZqkNxJBpEDFOXJj%2FMyjxy31DxKKJBpy9HpzSGdKWuA8FCwEjEhHabG7cfi7juMUiePoFRJU4ZHPMWYK29oz9b%2FynGg0O4nIEYis1q3WVRcIb9uqbVp7%2Bx6dm%2Flfeku4GfVwTBh6F1R39CiLOc3qg%2F0tpAbiGsJ0f89u8j6g9mRO6pUSinnpQTx3Ab2I2qI3NfcfHgWmqRogVikByVClglX&X-Amz-Signature=3a6a9701bd4a8a28540b3da7f02875c14c15858e19242500b4549e7c444a8718&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AOPZ6QF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDrlKdGHh7cyWBplljE8vrZbkNeZ5oN2Wq2g5IBNtNyGQIhAI0faEjoW%2FSLe%2BWTMp7cGJt%2BhpsZsTHXzyJ5HAw5itEqKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQmggrwsVsdOJBW3gq3APQIsZ%2F9USO%2F1pJxfUWSZcGTnvWQCUnuQQ2oMHzica4gpdjQTQFmgLabEI%2FNKmymmstVoVI9qPT2ZKf9m9o%2BKh6aUQs7F5ROI8znydrE9PxLmprCBHAJPkhBgAx8li1rVRI2srsvPu8uBim9TE%2FjF7lpYhjAjURQMTEYLAsv3PGKRFqaiYCYgcdaNNL24AVLCGBBNJd8S8ShMaly%2BcL5WJ2bv2qrZyYZgeyMzOzDm97iNBe0KGxX5Z4WKOy%2BYfeglSGnGmZcPDn5rMacy6jhWqSZxZ1Ugu41%2BUiRbVDvc3%2BRfwQJ8MrJfOxFhqOuhprovY7OFkD8HXHMYR13GrJ76pEpu8Bt68o3fGQt%2BIE8FfsmC%2BhSyaYCaDT6DDE5usib38BfylLCh7Qnf4YG944ushiuZ0O12ZOs7bZycQS7s1fpH62lMLc5xa6epzvnLu%2Bqf53PBAx63WQaqJ9Fft%2FEdwtfkXjz%2F8iD%2BWXAqP4WGPU2QzXEosNCk8l4gO0zx7I8r%2F1ars5j2fWZF%2F9vSSXzTFtDw9Sn4Tb92ng%2B5rnVra7Ahqz38204%2FC9xCHRU2LzhT4p0Vwgczf7h1dqX0U%2FUfaAZTXCdeSGVK3KKTeH51zjL6t0cEVOaeHGbWrBIzDH8b%2B%2BBjqkAZzDz%2F3tupHZV5%2FB2SuZ%2BFA5VHWOJFSn%2BtDy8Fs3QWyaN1HzGnWAJygwcseIuMb%2BjZnnoXQ9Cg%2F6FbLraRY4rkR586pCjfBORoSv9JzssQ1LPYAUPQPX0URNVsaf4FKTThLyLRxN25qbAPU9FypvCHRMeX2RQG6RQfz713suafxw2KY%2FH8wXyVnbrYAuYHE2uunuY0VtvPtw6lC3jqCaHQshaa%2FG&X-Amz-Signature=0c8868a0dac06756423acd5adf2174cd3adbbdf94db2fc878e991f25a5d321cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJCR5ET%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIB1i8lq0bBT1hpBGW3QtyEDKPGzErYXvz89G6uDSBna0AiEA4xuDWzEVDd3yvsjkjm0TPqNV2tybL%2BIcqYZMy%2FVUvasqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHToZgNTKlDYAS8RFircA%2FYIGrapxwc3z2mOys30w5yen7GYn%2Bu7Nh3LKI6ee42u%2FL4Lm4%2FxAEWpi7vS4CUcm778HoYwnrH3WK2BljyAXuUOUEKJ%2BTbaS4N1IZ5%2FEKOpQeubW1FN1JNtoxBS%2BOk3kdZiGFDYmihUqK0cwnmivI7AgNPIprj1w%2B0StrLcCcykoEFn0exnhZKYTQ1W3laRyjGo1XHlseam1FhGCLKKfMkJ7dbOpapHuq3tAbh8J7zQHc1iphGayqPSQav8dz6Pk%2BFprGTWijxeNzfH3Tdd7gAv6%2BFlstQ4OrLmMc01Od7Gmzu37IyjqAdYIsrDffL%2FtLIuZ%2BS%2FIAGtZbiCZzCrUOkNSidt85VKFkKUVVaTZI%2FgcLG7KL8UGks6JXzS%2Fo0vYLgVQEc1G5rUwXgejZFJj1rXQch8cxzCcVtHtgHjA3F68DLf8JljNlcA94MBNkISZP2mpvbn3Qz%2FyyHTSxAkQCTDi0BjM3sMyJqOhbh7DrzcLbnYkkcGuuVcGYO6u2ojMSPvj2FPIPmBj%2B%2FecgPlhiAsW6HwaHo6ApgpbSpHgc%2FQs%2BbEkLqJEIGy6shpkpNz%2F3umdxg2ohEmEolPDvKj5N0xh5H%2BYilQqLFX15JRzPPmgtqoIbvtpP%2Fsgjp8MNDxv74GOqUBHa9r9RGmITYtUNxxpqKH7PV2WEIefUHQEajb0lkmAq1RhKpGKc7vPGTi1SMLR2vS7YodtTS%2BIUXtf21l7dFSMOpttxOn9qWbQU%2BWtNcrrPuMNXY2Xd6zOIS7vJEoCHQtFtrE67i5%2BLfF1yXgbxmLIm%2B8JM7A8g%2FyNM5BGBeFPq89M04aOvlVTYKNe5o%2BSRHVCfTyB570gGSRbjYmLZnc81tl4xrn&X-Amz-Signature=e77d3b8b85734bff1366fc9464a8900680a93d7f618a561b5b9d21c99192395d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UCNZTA%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDCq%2FG3KZsPgXCERf8v5Rh3JQEWgDiBGywR%2BkW%2B%2F1Ba4gIgDzY9T%2BJNirRMfmqQgC55hk%2FHk265Pt0URPPq1BuUw5cqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJUmG8y5i526vYHbircA1TFR0O%2BY2siKOpPHkN4Dk4qH7vk06iDSHM0sWk5WIsU3LUMjQVm6ZhLkFq2HSY22g9VRt1iqamlQGgwtV2W6ARo6qzXpltP12kcLRsUX18FUcMq2bL7pQ5AJQdfRu5cEINm6aCD%2FOpKowuckj6Z4xbhuGa6iw5oCmzuiUH9aNavP248niOAG6TQFUu6dnsUm3MyLT0Lh4SjM58MIYDk2cs0boKaXptsHrhPzJVWK1cl53qFe7a0VZrw8Fbdy1qctNV03GiNXgBke1FpkT6XTqoFmfA4vLL2c6uzJU%2FJqPEM%2B0VNBkOIrD65kHXOe6R8%2FBLf%2Bo%2FwNmd3J6%2FInQLyckM12h%2F9olyLUkX13zpmWO5JXpKgEdVaPxVZ13EELZop3em9hGUhRqQ5NUULN6p0leOBHtU5%2Bi2Gt3ZIbjiN0IxfGRw656DKn0WJa1gzwRCIE9qMVp2pqz8kHKP0ATNWVY0pqy8kwIa1NC3FGoyjo3OyhmEuIW1p%2BjV66R%2Fm%2FJKVkr2aetInahjRTBG5dmb2FdstrRGMpYvPrN9ZdT%2FtRZyWATiEUll2v87dvEsb6iQ1eqPlCD136qvnLE4FYZpOqhdlbXGKFOQ6UmRBbX4HAN8G7gFJhaZzwqwjHHN%2BMPXwv74GOqUBeiba49ZqkNxJBpEDFOXJj%2FMyjxy31DxKKJBpy9HpzSGdKWuA8FCwEjEhHabG7cfi7juMUiePoFRJU4ZHPMWYK29oz9b%2FynGg0O4nIEYis1q3WVRcIb9uqbVp7%2Bx6dm%2Flfeku4GfVwTBh6F1R39CiLOc3qg%2F0tpAbiGsJ0f89u8j6g9mRO6pUSinnpQTx3Ab2I2qI3NfcfHgWmqRogVikByVClglX&X-Amz-Signature=d0b4cbea666b2e8039b24c390a2eaef21bff2264b80a9cb2e49eaf046943020c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
