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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAEXK5A%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3pr8tHg9RMMEHE9mtF6bER1UOptwZGReykD2Cf%2BagQIhAJH3Zmyp0JfxVrCuXXxpQyfJ2dfwpoj6%2B0tJ5lfQT3UWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDBGyFmaJuIZ3fKcq3AO2AdSCdIP5pcMxZyHUJOOsnc14iBLohNgv7kh3%2B6iZ71PcLg7Q7Ig1fUK7yNSMANxL5oWq4LOYmKReJtpMloU3qN%2BKuAmK5npY%2BX89zHaZzVJuTD1BLOIC4kQqkVNWLc2xytxYI7NianLRVjbTeCm6UtOgw8jHOwH80ZX4aN81lOiVlDKWLlFLQPIxJLSzG5IlzYrbueETSzlv2oG6wHvzMqhbhABe9QNNLrPczCNZxDK2re7wP62l94s1Jn2%2BhcpMkKR6%2BQnBsT5n%2FIs6HyT717cKAjElmryCVXegSfxTr2K0Z3mjHmzov09bmkTM8dILphot0ZjYnCaaorxmt%2BNQouNx72OBK09s%2B5fp%2BS45uxkYA%2F7U3QAyZ9vzskLRfXksH8H4X9EcqxjfFQT6vwsVVVbU1KY1LUM3Fe41gPtfXyq2rOU60xVbNstNKxerXmM3LQSQP1DM%2Fod2pQ6OohKcooDeSXnNo9JdPfuXikN%2FqO2T74isWjj1RhrT8HhxL7%2BqKXytvokMHfxY%2FPP3c5F4%2FqVkdY81IypZIBdJSN23iH8xLtxJllOVoiTXtGtRypcSN4SLxVL1TdlIhTB0UUWnzHPwBt3FKNyU25E19XEzPQc6V7ApEEVh6SVIVjCHwpXDBjqkAXMZHihJQW6NhBgGrj0ixCHPsGdFO9lUykrBlTx1ozDU%2BCgyle7hYqaHRtDZcaloQD1zKOCLYWCCEvybLsZLcFxI0nnYECz0QUqEN9FoRwLs%2FLHZXCLzA51ESin9D5S5s1N%2BOILewv7DPMRSe%2Fm4SZozQ%2F5zIgzFo%2BfE3JQLMiw1en0XzG6O1LghY0j0Zu%2FXrVMitqlqnDNY4uOwZJcl4x%2FmOJho&X-Amz-Signature=25c2ce46e3db5466cf9803ac8c3f451a6218601b29691fcdbb6576c3d60f8874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAEXK5A%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3pr8tHg9RMMEHE9mtF6bER1UOptwZGReykD2Cf%2BagQIhAJH3Zmyp0JfxVrCuXXxpQyfJ2dfwpoj6%2B0tJ5lfQT3UWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDBGyFmaJuIZ3fKcq3AO2AdSCdIP5pcMxZyHUJOOsnc14iBLohNgv7kh3%2B6iZ71PcLg7Q7Ig1fUK7yNSMANxL5oWq4LOYmKReJtpMloU3qN%2BKuAmK5npY%2BX89zHaZzVJuTD1BLOIC4kQqkVNWLc2xytxYI7NianLRVjbTeCm6UtOgw8jHOwH80ZX4aN81lOiVlDKWLlFLQPIxJLSzG5IlzYrbueETSzlv2oG6wHvzMqhbhABe9QNNLrPczCNZxDK2re7wP62l94s1Jn2%2BhcpMkKR6%2BQnBsT5n%2FIs6HyT717cKAjElmryCVXegSfxTr2K0Z3mjHmzov09bmkTM8dILphot0ZjYnCaaorxmt%2BNQouNx72OBK09s%2B5fp%2BS45uxkYA%2F7U3QAyZ9vzskLRfXksH8H4X9EcqxjfFQT6vwsVVVbU1KY1LUM3Fe41gPtfXyq2rOU60xVbNstNKxerXmM3LQSQP1DM%2Fod2pQ6OohKcooDeSXnNo9JdPfuXikN%2FqO2T74isWjj1RhrT8HhxL7%2BqKXytvokMHfxY%2FPP3c5F4%2FqVkdY81IypZIBdJSN23iH8xLtxJllOVoiTXtGtRypcSN4SLxVL1TdlIhTB0UUWnzHPwBt3FKNyU25E19XEzPQc6V7ApEEVh6SVIVjCHwpXDBjqkAXMZHihJQW6NhBgGrj0ixCHPsGdFO9lUykrBlTx1ozDU%2BCgyle7hYqaHRtDZcaloQD1zKOCLYWCCEvybLsZLcFxI0nnYECz0QUqEN9FoRwLs%2FLHZXCLzA51ESin9D5S5s1N%2BOILewv7DPMRSe%2Fm4SZozQ%2F5zIgzFo%2BfE3JQLMiw1en0XzG6O1LghY0j0Zu%2FXrVMitqlqnDNY4uOwZJcl4x%2FmOJho&X-Amz-Signature=7818f551abbaf4580678f06d5676476b22dddfe35d39859d4967af9e92572a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAEXK5A%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3pr8tHg9RMMEHE9mtF6bER1UOptwZGReykD2Cf%2BagQIhAJH3Zmyp0JfxVrCuXXxpQyfJ2dfwpoj6%2B0tJ5lfQT3UWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDBGyFmaJuIZ3fKcq3AO2AdSCdIP5pcMxZyHUJOOsnc14iBLohNgv7kh3%2B6iZ71PcLg7Q7Ig1fUK7yNSMANxL5oWq4LOYmKReJtpMloU3qN%2BKuAmK5npY%2BX89zHaZzVJuTD1BLOIC4kQqkVNWLc2xytxYI7NianLRVjbTeCm6UtOgw8jHOwH80ZX4aN81lOiVlDKWLlFLQPIxJLSzG5IlzYrbueETSzlv2oG6wHvzMqhbhABe9QNNLrPczCNZxDK2re7wP62l94s1Jn2%2BhcpMkKR6%2BQnBsT5n%2FIs6HyT717cKAjElmryCVXegSfxTr2K0Z3mjHmzov09bmkTM8dILphot0ZjYnCaaorxmt%2BNQouNx72OBK09s%2B5fp%2BS45uxkYA%2F7U3QAyZ9vzskLRfXksH8H4X9EcqxjfFQT6vwsVVVbU1KY1LUM3Fe41gPtfXyq2rOU60xVbNstNKxerXmM3LQSQP1DM%2Fod2pQ6OohKcooDeSXnNo9JdPfuXikN%2FqO2T74isWjj1RhrT8HhxL7%2BqKXytvokMHfxY%2FPP3c5F4%2FqVkdY81IypZIBdJSN23iH8xLtxJllOVoiTXtGtRypcSN4SLxVL1TdlIhTB0UUWnzHPwBt3FKNyU25E19XEzPQc6V7ApEEVh6SVIVjCHwpXDBjqkAXMZHihJQW6NhBgGrj0ixCHPsGdFO9lUykrBlTx1ozDU%2BCgyle7hYqaHRtDZcaloQD1zKOCLYWCCEvybLsZLcFxI0nnYECz0QUqEN9FoRwLs%2FLHZXCLzA51ESin9D5S5s1N%2BOILewv7DPMRSe%2Fm4SZozQ%2F5zIgzFo%2BfE3JQLMiw1en0XzG6O1LghY0j0Zu%2FXrVMitqlqnDNY4uOwZJcl4x%2FmOJho&X-Amz-Signature=3706ecc5e2a495221ad84b2205cd84bcfb08b7124f5fbd7b9635755968832446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJXUSAE%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEjsFDo33AfF7UNQ1eilQG7tnkyCsgRdM58NbaRpp6SAiAfQHPyodTA55XOI2Bjt%2FqNQ7hdwS1ZBO8Fv3mcGsc1DiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMluZTSovMbU1Bw7qtKtwD6SeczI48zFx71STnYBXtUnOkj9Fr7AiNSVAQKT7AOqALVOfHYc6aF14HhbQ6bcPtaL%2F6xbZIlJ5tGzkUXqi3yheUR%2FDFTSTTU7TzHkcksx%2FORnGAXhAmN5qnO%2FCLMzIndzI8OLLUTNVBSDu%2FhaKdv2QJhQwTZfjkj67MLugkY9T5VmOPEFtNO1xYRTaoFEyldIh%2BH5KFp00UfAyH65RdDDi4FFkQhVYhNpz6KNsNDpzC5TzX%2FFGmcqIFPGKTzJqxKMD4F1hbVs3eXLhLLKXfxTk5S0xnlzv0XRIlxYSVxgj7cy8tIHWqYlKYQImw2q2LSThUwC0w%2FYqhM91LnSGl4FDPCHK01KKJ6Bm2bs5B3pAnWSlCG95vNIrP8TOsV4ho%2BjUSGqCn0pYozH%2FSBDOCs5mUsp%2FB3ZLYJ261lHbcgLySIXLafeWzIrmnKdpsG03uHP%2FLyt6yUkMQUZMWUGsXwgoKPtH7v2ApzEzQy3p5OkARGxXIQSr8Zl3eL6GSLji%2Fwfo70vPNkpVZBXZ493MSEcakEPjtIO8a6MEW6h3XhB8XzogPWUjUCtQJgw3HdIuEgPvG21r1MxgOQl5bctWwQ1%2B4Ess2jIPG2ogr88JZsRPbP8eoEra%2BEl7Rz5gwpcGVwwY6pgE6cW%2FIhNDQg6QOij3pGIAvmPClDmAbYImiM%2F%2BI3zRES91WUYkMsL5iaAWVPUiuhbG0BDyLfeSYoRcz7lRwT82ypRLA7ZGSdcGjTm1e8xurOpyXYVeOs0TxMF6gtjLZITfgMj1%2BvpLBse%2FM0uqJmAQQff%2B6QCMM2N%2BcVmZEvzJftkjDu2Z0XewHZh47wRtEnCyzFpYDXZL2vjpfx2SMzvCxwFo81iZz&X-Amz-Signature=31cd07f5bcb05c7b926246d284eb2109e85f63a8771aa1477b5dbee69add2a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IT7TDWQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5oy1uL9M8QblZJvgtsitnNmTl0vAmpIq9YCxr%2FubyNAiBlh5CayW5zT3XG297nVhnCS5IaJlL%2FtWmvxm5NTDqkRSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NRtoLw42rrscVtYKtwDm5C11hfHM%2B4qUbfj3kMlE%2BfGD5IfwxFiq6pPRFEzsTW%2BlfukKF2bfNAfrF4Z%2BdiieSfOEiEIYIIxt9yQUQT9LFovBb4ZFxqF7tQ%2BK%2BnvMY3jaEWZodcD6fD7I4doQ5BItnP29LfaRj%2FLYVyPWiqXsTQnRFRnl4MpLSx4Mh0h%2B720v8LR9QoTJj1y53dweq6tquttTGlFhackmYX7Psv4rgpKfH5e9%2F7Sv5b9hAwVeLeBArKrL%2BHtSzS1ICA9AbMqCh8h2kLEcZrNSCp8%2BO4aG9%2BQ2m5DjaasSJ91M2xersHVN95vyOA75r3eplRZat%2FKIWUwA9lcRvcf3n2CzocaDKZ%2FSSVPuLeNucrY6hmxyeB47A5om8iw15KAguIhfIWKsVdJtycL9i239%2BExBC8UT8BN7YXDPXTO5JVoSUV%2FgXRI%2BPsCua0oqIVv%2FzSmfsXw9nMcAb2gFbjK3J9pbu6%2BqRjMK5rlGXq6V%2FXjU9KbdqfOiRCG9GHL%2FfqGXo1kqoQ0Z5CL3PtrMzT9MfzO3dGwgE29n1BQsfaBFAr4waHxGBjB%2BchDscofYQ2hK8qemE700ch2zpeoXTrjgbaTZsFWPT3Jwt4ZMaCLRfP6kA5DlL5hjlQRYRcEs9hjrZEwncGVwwY6pgEGrPoii%2FTM0hLMnOki3LX%2BLr6BVukwpyy%2B2XNlDEE5Wf1%2FBZviblR6ko87TOVT46FePjBeQxQuwyYDvlGeq875gq%2BnPbvzOUbfbXGcLzSXB%2F1CYFi9%2BT03IkmUZXAc%2BOldv0jAyHFcRFpC4qyqehS%2BcbAFiMU%2B8o99tQVhtQ1Dj6RvfB1Ao09CDDdqg95zwjLawZqFYr7tD5lzus%2BM7BHQeIVzB%2Fip&X-Amz-Signature=f1bdf6eb4f045345fa459fe448d133e34bb3902d744ea9a00868e65079608faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAEXK5A%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3pr8tHg9RMMEHE9mtF6bER1UOptwZGReykD2Cf%2BagQIhAJH3Zmyp0JfxVrCuXXxpQyfJ2dfwpoj6%2B0tJ5lfQT3UWKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxDBGyFmaJuIZ3fKcq3AO2AdSCdIP5pcMxZyHUJOOsnc14iBLohNgv7kh3%2B6iZ71PcLg7Q7Ig1fUK7yNSMANxL5oWq4LOYmKReJtpMloU3qN%2BKuAmK5npY%2BX89zHaZzVJuTD1BLOIC4kQqkVNWLc2xytxYI7NianLRVjbTeCm6UtOgw8jHOwH80ZX4aN81lOiVlDKWLlFLQPIxJLSzG5IlzYrbueETSzlv2oG6wHvzMqhbhABe9QNNLrPczCNZxDK2re7wP62l94s1Jn2%2BhcpMkKR6%2BQnBsT5n%2FIs6HyT717cKAjElmryCVXegSfxTr2K0Z3mjHmzov09bmkTM8dILphot0ZjYnCaaorxmt%2BNQouNx72OBK09s%2B5fp%2BS45uxkYA%2F7U3QAyZ9vzskLRfXksH8H4X9EcqxjfFQT6vwsVVVbU1KY1LUM3Fe41gPtfXyq2rOU60xVbNstNKxerXmM3LQSQP1DM%2Fod2pQ6OohKcooDeSXnNo9JdPfuXikN%2FqO2T74isWjj1RhrT8HhxL7%2BqKXytvokMHfxY%2FPP3c5F4%2FqVkdY81IypZIBdJSN23iH8xLtxJllOVoiTXtGtRypcSN4SLxVL1TdlIhTB0UUWnzHPwBt3FKNyU25E19XEzPQc6V7ApEEVh6SVIVjCHwpXDBjqkAXMZHihJQW6NhBgGrj0ixCHPsGdFO9lUykrBlTx1ozDU%2BCgyle7hYqaHRtDZcaloQD1zKOCLYWCCEvybLsZLcFxI0nnYECz0QUqEN9FoRwLs%2FLHZXCLzA51ESin9D5S5s1N%2BOILewv7DPMRSe%2Fm4SZozQ%2F5zIgzFo%2BfE3JQLMiw1en0XzG6O1LghY0j0Zu%2FXrVMitqlqnDNY4uOwZJcl4x%2FmOJho&X-Amz-Signature=9af6285c120e71b65e44105537052f232a99811ef52704367e24b1ca5bb2c8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
