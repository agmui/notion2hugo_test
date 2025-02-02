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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5Q7OZM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6PkzvtZBFfloDHWJ7DUyLyuS05s7kZgNmbJBh59jONAiByBw4GVkf%2BNEk0Fx4CQcHJhKQk9k7RM8dgZGc2QLBCMyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexPMY5hGB57pNSimKtwDcBxEjNeG%2FIdHc54Nnj25dp6fiI7vxOz%2FdesoXub6VVOuHCcb8QQLZ1htLp92NIK5XzKgVnNm49wz1mftPqgFi8KyNzl8ehe4tDzYgQlbyqJguZvsuXRZQAtackCYpNgeo4DmoRPTf1kDCI7MIqoauEXQeyJkR7u2QWD6Enh7cuknNDiqYwzyRxKlcCX%2BymyPxJrokdTuQV8Tzc9XB1BP%2FdI0HfVEWHBJ9TYQV39i6E18pNVV8U%2BeYwQlNEuoTgISVrHchtNB6C%2B9QCzMH5EeMfK%2BuqjV9c7vqvGtZPgn8KONYVMD1tuu3eqe9bb%2F0b%2BiRR%2Fp5wyD0ET%2FmSr%2BafZjDttzkI8HV2IOdxzhC8RUgnMsMAkLhRM0ACbsO0ammcZ1Bx0sLMuTNzEtPpDmXf5Hnflp4rO16ArpNIFvsUzKKYh7Kj%2F8uKfni6wM%2BWkzyi6tkUqQ8ZfnacrRWdaC7Q%2FK0DxTpOqfMJtCaqg1JwvLuStZOIuIKXSTKl5PpVYl59SqR4DMU9O2sw2JQ1zaXaPoXHlUM1imkMWo1epulQOOhPzFp%2F3HV2MiVsu3FPi7mhCySQKUEht8qejKEvmqE73Vluu84x5hX8IJvl45uX29am65xSK1ykgomT7LnLkww538vAY6pgHnQCVFZKbt6i6YPkKO4cCQFRS3aWxJ8e67fabIXMLIEeCLTRMMbPhC5pFQceuMCw9Gnu3%2BZvtC5tscFwzAJrOiTNxgBzpCKoBi%2FkCNuk%2BDCtu6sS9NltbWf22EtR5igqT%2Fz1aV%2B4VG1uc67v5JDc2FY%2BHYKn%2FZF1pby0OhY%2Fa2HaVf8fgYGwLq0ASJYWLdR2s76I8RxZ1VZROcXv34GbUcLrwbjqMp&X-Amz-Signature=17ef817f2200e74549ae97962c488ad4b3a3bf45525fb934e9702f3896bef10e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5Q7OZM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6PkzvtZBFfloDHWJ7DUyLyuS05s7kZgNmbJBh59jONAiByBw4GVkf%2BNEk0Fx4CQcHJhKQk9k7RM8dgZGc2QLBCMyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexPMY5hGB57pNSimKtwDcBxEjNeG%2FIdHc54Nnj25dp6fiI7vxOz%2FdesoXub6VVOuHCcb8QQLZ1htLp92NIK5XzKgVnNm49wz1mftPqgFi8KyNzl8ehe4tDzYgQlbyqJguZvsuXRZQAtackCYpNgeo4DmoRPTf1kDCI7MIqoauEXQeyJkR7u2QWD6Enh7cuknNDiqYwzyRxKlcCX%2BymyPxJrokdTuQV8Tzc9XB1BP%2FdI0HfVEWHBJ9TYQV39i6E18pNVV8U%2BeYwQlNEuoTgISVrHchtNB6C%2B9QCzMH5EeMfK%2BuqjV9c7vqvGtZPgn8KONYVMD1tuu3eqe9bb%2F0b%2BiRR%2Fp5wyD0ET%2FmSr%2BafZjDttzkI8HV2IOdxzhC8RUgnMsMAkLhRM0ACbsO0ammcZ1Bx0sLMuTNzEtPpDmXf5Hnflp4rO16ArpNIFvsUzKKYh7Kj%2F8uKfni6wM%2BWkzyi6tkUqQ8ZfnacrRWdaC7Q%2FK0DxTpOqfMJtCaqg1JwvLuStZOIuIKXSTKl5PpVYl59SqR4DMU9O2sw2JQ1zaXaPoXHlUM1imkMWo1epulQOOhPzFp%2F3HV2MiVsu3FPi7mhCySQKUEht8qejKEvmqE73Vluu84x5hX8IJvl45uX29am65xSK1ykgomT7LnLkww538vAY6pgHnQCVFZKbt6i6YPkKO4cCQFRS3aWxJ8e67fabIXMLIEeCLTRMMbPhC5pFQceuMCw9Gnu3%2BZvtC5tscFwzAJrOiTNxgBzpCKoBi%2FkCNuk%2BDCtu6sS9NltbWf22EtR5igqT%2Fz1aV%2B4VG1uc67v5JDc2FY%2BHYKn%2FZF1pby0OhY%2Fa2HaVf8fgYGwLq0ASJYWLdR2s76I8RxZ1VZROcXv34GbUcLrwbjqMp&X-Amz-Signature=2600a555d54797a00cac45f8d2dff8e15fc5e557e1b5bde7c1df1a3b5e13f865&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLYZRGV6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD53wVz%2BooKVdYTJ3CtkeLVYtwkZmfvoyxqjN6uc4JRTQIgJq3UHKMaa8QjS5U9H2UlxymzSOQPLTI9%2FzMmS%2BGNCcwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYY5HThT4E6eLkgZCrcA2gQUlSZ%2FZ93N0PNUMsOkqShJjWR8NpoajekyW2Dts8dvg%2BAPxTmJFbqc08cs7aNyMNi6%2FhASPB2rpu5rU0nvFEYzv8J%2BJUjtVgDwkwORcBe2nuzwINgwfcYONluSb6m%2FqMO52j1MFbDg3OIV72RFc%2B9u9cNyznl9Z5X%2Bs4TyhP%2B%2Fgu%2F2D1ULbFQ%2BXvb5y0qPRrwNzqd%2F3pRWYfdPyia86owzFYeY91iQ4altLPwWpsZZlhdNe3glfR%2FW9ur5i9S2vmBK4LogMr4OPh49owlwtO4FBNFBPfevNbzMSHu75e0cZ0e1%2BmY0Va4eHD3w%2BcsuQVKUtqon%2BUtIcFgO2f0fNVEyeTDTUD7EpDGUp7waoiEiBaotjHrD1%2FpjSDna8kEafkSnHEnCFeZQhi2IBbZrPZMQBL5ECWJtnEiaje6d%2FQpbQA%2FpEZhuIWrs%2FVxhbdQFIQ9Z5gEhmDHMvfrYu2s9%2BOOG0xPrCfZqBFatvp8yM8wfAIWw4aHdiul6FOYLoDBR2PTZ0Qc8kttdyNBsaThCftGZjev5UebHGjGLGWaUjb9N2tJPf37vcmRbE49j18p%2BLmQ5a6no%2FhNS1sv7LGm61%2BTMmUBmFCA4cPT9DFuBjiSM%2F1Z8nFTZiJiDoGpMJmd%2FLwGOqUBa0GPtYm6lglqsfJUorjBiQrxDCw4SfRuM0E7Us8yLcyLRhBqcQzEhcNQfRQiVcpzY%2Fpv1BcUXQlpZCpR9Tse0NhT9T0iyEIazyRjM%2FoYh8UN25g8GvHoJPtSoWKZNOneoLYryASYQ1dmHy2bzd9yZz%2FkbArmez0vZUkgmBr46vUPr4ZvDXFNEZiCrQ5D8EZU33IWv2g%2BxSHUG657thkM%2BBWUl9DB&X-Amz-Signature=693d7b567b03ddcb503c3bab201099eae492ef534d9c387d03b33d46d7c2d5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI4LFFQL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApt9jyxDa1ZawEpBzeo8u7kei0%2FsSRsbrgpMRHhFj5VAiAiZJ6wqtG5pD7M7TANwWj8z5t4JZXbB9MvYIRj1PLnHiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUdv8q2DSLm8RIWRuKtwDK4EItuHYZUxVrU%2BeSPTFUcdlkyB9JS9BD0NWD5Pqrr4jcBnT7Kdanz21Ebr3DhU4fBcOfIRoRN%2BS6FPDPG17bkRa2%2BRNmxWx%2BV4kta9wuN6Q0it%2Fc0zBsWmlPxw21g%2ByEAjBIpcoeMjFKKk0u2%2FeK1yXRrWPjtICvBmZ3v3lOhiGet%2FvHqwpacVwOgNI%2FTX9bd%2FZrapWLyLhKPc%2BUfcbSWGdoZVKdCPCegGic3FWA4OOZSqhti2OJLoN4QlAGmCXLy2BJnaVCff1jbl449WIzWfiZVaE3K7xfzjPiXtIp1B1Ldunu8qyr6edoul938%2BfvH6WKWA67uzBLlJwZu8nka5b4JiSSU1JFyDQ%2FQN6g1T5eDjLT%2B%2F%2F%2FVwM29BtP9xM1EX%2FCbvRWflDEO7TcdnPbTA2MBDpOeg56zGZGZFQ0auJxrIyyeBkyzZKW4uFNnuGQJw4%2FfIXX4imEQhfBuFUXGd9alQXnhjSERVhxUOFfCHYS7SEk9Fq6MkiBVIIRzW1NUGoCV%2FQdS6ZcShXnJB3agyk4ritBoXqWxK1RjhAL%2Bwt4kux6F7yD6eEfq5Ra9dbLNHkJNHDwHjX2g2DG0iU1CTCXXRTydnEJ3NxZEau8NfK6O2XR8rxjovjYK8wn538vAY6pgFX8W9f19ZLzZig0rbEz4gP8WYs3%2BwW68XCWi3PtQ4DhqCdFWXr9pquG1Qmdzs%2FEAuhf47Qdehs3u8bxefW6Jxv7PtwQRGFiL2zZBKKFBwKW%2F%2F8mmYGWN1whjRZ8yz%2B1yOgziTsqvVO7RswxvKr8WCjCHJ4Abr1s3Nme1RfYVV2UAowZBL95L4pgI37PoCW0x9tXz5RyT9yJ5FwOl47CHofrtS%2BpnUo&X-Amz-Signature=501b9e753a6a3d382421e7a286be7a49bf521dd31e913a042f92167768b59e01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT5Q7OZM%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6PkzvtZBFfloDHWJ7DUyLyuS05s7kZgNmbJBh59jONAiByBw4GVkf%2BNEk0Fx4CQcHJhKQk9k7RM8dgZGc2QLBCMyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMexPMY5hGB57pNSimKtwDcBxEjNeG%2FIdHc54Nnj25dp6fiI7vxOz%2FdesoXub6VVOuHCcb8QQLZ1htLp92NIK5XzKgVnNm49wz1mftPqgFi8KyNzl8ehe4tDzYgQlbyqJguZvsuXRZQAtackCYpNgeo4DmoRPTf1kDCI7MIqoauEXQeyJkR7u2QWD6Enh7cuknNDiqYwzyRxKlcCX%2BymyPxJrokdTuQV8Tzc9XB1BP%2FdI0HfVEWHBJ9TYQV39i6E18pNVV8U%2BeYwQlNEuoTgISVrHchtNB6C%2B9QCzMH5EeMfK%2BuqjV9c7vqvGtZPgn8KONYVMD1tuu3eqe9bb%2F0b%2BiRR%2Fp5wyD0ET%2FmSr%2BafZjDttzkI8HV2IOdxzhC8RUgnMsMAkLhRM0ACbsO0ammcZ1Bx0sLMuTNzEtPpDmXf5Hnflp4rO16ArpNIFvsUzKKYh7Kj%2F8uKfni6wM%2BWkzyi6tkUqQ8ZfnacrRWdaC7Q%2FK0DxTpOqfMJtCaqg1JwvLuStZOIuIKXSTKl5PpVYl59SqR4DMU9O2sw2JQ1zaXaPoXHlUM1imkMWo1epulQOOhPzFp%2F3HV2MiVsu3FPi7mhCySQKUEht8qejKEvmqE73Vluu84x5hX8IJvl45uX29am65xSK1ykgomT7LnLkww538vAY6pgHnQCVFZKbt6i6YPkKO4cCQFRS3aWxJ8e67fabIXMLIEeCLTRMMbPhC5pFQceuMCw9Gnu3%2BZvtC5tscFwzAJrOiTNxgBzpCKoBi%2FkCNuk%2BDCtu6sS9NltbWf22EtR5igqT%2Fz1aV%2B4VG1uc67v5JDc2FY%2BHYKn%2FZF1pby0OhY%2Fa2HaVf8fgYGwLq0ASJYWLdR2s76I8RxZ1VZROcXv34GbUcLrwbjqMp&X-Amz-Signature=170e8e652a742d57a3b91fa34818e8b906a10638b42736a4a8b92ada1976f165&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
