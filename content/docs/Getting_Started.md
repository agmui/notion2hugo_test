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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIOA6XG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD9QjJ5H7vAXo9kYIk%2BPotxF4BkarFqQRad3lDmN8cj0wIgZHi3W79buFZ1bYDRnF1nAcA88mi9swa6L37oN1KivUkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ7f87WbxaPjryxSyrcA52Ul8gGusUQ1eKS%2Bf14EehlmXTFJVSICkbJ9SDiH%2F8P5cB8OOoiXz2J722ZMTObMphyEWrKUqZkpdOlsWRhq%2Fm0ZsawaBMSuQ2He8siF2NWBg2EwYKbsNdBTc3OVviNBiwCA4ol5dXaZRcccoam78ko2Y6fwTZ6cpMyLVl2Ke%2BnN%2BXXakcW7mMDs4A7FzBCFxEKgYb06AGX%2FAViS45kfZuV9vSLTr%2BsEAyHRH0ia6DbGcFltKOtsnQ5G5eSt05eTbH5f05fMx%2B9udtBWN98dHDtkMkNSoriZpAtSwE9WllJ259ZEG%2FM6KW7kOcg7aNDeTYm0sR6jDOk1oIuyYWq9gnsqJHerJ5nfSjFx4KIHFwEiuSO3RDWpTKbQQ3k5I5Ru%2Fbm7ADgTftO41nrMoIpOMKh4W%2FFCRZxTWNrrdMB538NK0Yn%2Fh%2B5jqNlsTcuv8Y%2BF4hrQfQtxKYgqCOES9fVqVPl7DAPTJhsD14fmR3m9w3JI4qyIkqYgIDYzMtBEJjwY7oP8Pi2Mu5YUTL%2FJobfAPERl43DUZtpfoWFw9gZm7Uk640PLbTmm76X2jGoCb6yN4HKEJwgfzqhv1qozPoXKjzRpJu1G4gPKXWuLRpY4OUNh2feXyhaHmQqaN%2FEMJ722sQGOqUBgBY5qYywZo1XUCPSwB6m30RKRGqVn%2BTbdjkZKIrOyVq7h9v9ALwAOyH7j4zMFsnEsTpuYbifak7hiyoXh7XrEm1A6Ns2M8Qgig5YgXbU68Ckb9%2Fm3RF9vPLZg0kyK9EGlxatYIEy771yBPzBJiWOsDKTpTjCy6n2pUNjx4zqUrKnlnHurZzizee7Nvj0CarD7LFC1jZC4jMaP2KyyP%2B5nGH54%2F6c&X-Amz-Signature=d5dcb7794a4b4df60baf3bf3e14e80c2eebdcfec5b5cd1b82ccfb4e2b98b1a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIOA6XG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD9QjJ5H7vAXo9kYIk%2BPotxF4BkarFqQRad3lDmN8cj0wIgZHi3W79buFZ1bYDRnF1nAcA88mi9swa6L37oN1KivUkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ7f87WbxaPjryxSyrcA52Ul8gGusUQ1eKS%2Bf14EehlmXTFJVSICkbJ9SDiH%2F8P5cB8OOoiXz2J722ZMTObMphyEWrKUqZkpdOlsWRhq%2Fm0ZsawaBMSuQ2He8siF2NWBg2EwYKbsNdBTc3OVviNBiwCA4ol5dXaZRcccoam78ko2Y6fwTZ6cpMyLVl2Ke%2BnN%2BXXakcW7mMDs4A7FzBCFxEKgYb06AGX%2FAViS45kfZuV9vSLTr%2BsEAyHRH0ia6DbGcFltKOtsnQ5G5eSt05eTbH5f05fMx%2B9udtBWN98dHDtkMkNSoriZpAtSwE9WllJ259ZEG%2FM6KW7kOcg7aNDeTYm0sR6jDOk1oIuyYWq9gnsqJHerJ5nfSjFx4KIHFwEiuSO3RDWpTKbQQ3k5I5Ru%2Fbm7ADgTftO41nrMoIpOMKh4W%2FFCRZxTWNrrdMB538NK0Yn%2Fh%2B5jqNlsTcuv8Y%2BF4hrQfQtxKYgqCOES9fVqVPl7DAPTJhsD14fmR3m9w3JI4qyIkqYgIDYzMtBEJjwY7oP8Pi2Mu5YUTL%2FJobfAPERl43DUZtpfoWFw9gZm7Uk640PLbTmm76X2jGoCb6yN4HKEJwgfzqhv1qozPoXKjzRpJu1G4gPKXWuLRpY4OUNh2feXyhaHmQqaN%2FEMJ722sQGOqUBgBY5qYywZo1XUCPSwB6m30RKRGqVn%2BTbdjkZKIrOyVq7h9v9ALwAOyH7j4zMFsnEsTpuYbifak7hiyoXh7XrEm1A6Ns2M8Qgig5YgXbU68Ckb9%2Fm3RF9vPLZg0kyK9EGlxatYIEy771yBPzBJiWOsDKTpTjCy6n2pUNjx4zqUrKnlnHurZzizee7Nvj0CarD7LFC1jZC4jMaP2KyyP%2B5nGH54%2F6c&X-Amz-Signature=4662ec196e284d3c7b232a5be74e30bb6d6896b04f6b61251593a23955c66033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIOA6XG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD9QjJ5H7vAXo9kYIk%2BPotxF4BkarFqQRad3lDmN8cj0wIgZHi3W79buFZ1bYDRnF1nAcA88mi9swa6L37oN1KivUkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ7f87WbxaPjryxSyrcA52Ul8gGusUQ1eKS%2Bf14EehlmXTFJVSICkbJ9SDiH%2F8P5cB8OOoiXz2J722ZMTObMphyEWrKUqZkpdOlsWRhq%2Fm0ZsawaBMSuQ2He8siF2NWBg2EwYKbsNdBTc3OVviNBiwCA4ol5dXaZRcccoam78ko2Y6fwTZ6cpMyLVl2Ke%2BnN%2BXXakcW7mMDs4A7FzBCFxEKgYb06AGX%2FAViS45kfZuV9vSLTr%2BsEAyHRH0ia6DbGcFltKOtsnQ5G5eSt05eTbH5f05fMx%2B9udtBWN98dHDtkMkNSoriZpAtSwE9WllJ259ZEG%2FM6KW7kOcg7aNDeTYm0sR6jDOk1oIuyYWq9gnsqJHerJ5nfSjFx4KIHFwEiuSO3RDWpTKbQQ3k5I5Ru%2Fbm7ADgTftO41nrMoIpOMKh4W%2FFCRZxTWNrrdMB538NK0Yn%2Fh%2B5jqNlsTcuv8Y%2BF4hrQfQtxKYgqCOES9fVqVPl7DAPTJhsD14fmR3m9w3JI4qyIkqYgIDYzMtBEJjwY7oP8Pi2Mu5YUTL%2FJobfAPERl43DUZtpfoWFw9gZm7Uk640PLbTmm76X2jGoCb6yN4HKEJwgfzqhv1qozPoXKjzRpJu1G4gPKXWuLRpY4OUNh2feXyhaHmQqaN%2FEMJ722sQGOqUBgBY5qYywZo1XUCPSwB6m30RKRGqVn%2BTbdjkZKIrOyVq7h9v9ALwAOyH7j4zMFsnEsTpuYbifak7hiyoXh7XrEm1A6Ns2M8Qgig5YgXbU68Ckb9%2Fm3RF9vPLZg0kyK9EGlxatYIEy771yBPzBJiWOsDKTpTjCy6n2pUNjx4zqUrKnlnHurZzizee7Nvj0CarD7LFC1jZC4jMaP2KyyP%2B5nGH54%2F6c&X-Amz-Signature=af858480786ae2f6bb495f2060602d15a0598cdfaeba95be107d27484b1afb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYU6MXBB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEgzqKklBlNhNV9PZQOvwrEcV1aA3DU7sqc12El5oOgEAiEA7VsQOfF0EGi44WNRzoalJcqpuscLUT8xdCvF%2B5xFAxkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQjvnyBl0pE404AUyrcA66FknPd1NrQZoazl3DDhkYQkzYF%2BbOToxNC0LRYVl6sen9qI5YusMp6%2FDfbP8U%2BEHDFL38%2FcjoJlSARzExirTS4sc2%2Fd9QPsXHHcHg8iMm4j6Jcut%2FPnE%2B%2Ff6K7QhIR%2BtmsOhEvBuCjl%2FUB2it9AUuqwJcJyuUOYR3ggNTanUnmilWLAqW6VnAwz6fL%2BJTMjbWz7sb3PCvWkFIAS3dIEb%2FH%2Fv3wUUR9nxLx2DaQ272rGtZhQv0e2QcAm%2B2dXOKUIHZDNaTH5IbBPN4LHb%2FVSvXFSx5Yykf8PKnF6erXrllWaMVuhb4TblKJwwHGue1IYnUkjxLlj%2Bv2lqRMw1rHTvO2VZtU%2BZp5WR%2BlsTqNDWXPTJA4od9TFiCbUnX2Tik0wpyY64%2FAuSusieuKOF7%2F4AiRf4AbB4Al%2BdAc%2B0MIPaIwcO0bHSUKl%2BeAmlfP7qguCQi6xjKrNBaWa22hiw3BGoKFCUHH6uPLinHiJb6WXty6gCU8Mipf6%2FgCTXNnkX4W6lLCY%2BNS%2F6MQJzXR%2BgcDI8I3rLcvCpfoYIj4WFtuhxA9xyHIXCabrKaTmwfxCroj4iWqa554FkCdh5sQW4CFwBrq%2B5jhC8LwMydZv5DuzFRPF%2B60aXvFo5bkE5LcMO322sQGOqUBHg1sD5uWJDMS%2B6I8K%2BWMqUuqDG8kOlgHGhhs5mzJQRVD0yLMOyXazUU35aprepPN1tOxwr5GJVssVybusfk6TY5D%2F%2BeeqdJedRTUKICwAnZKCXBkXFxyNCinSop6rgIYiczBJP225NfpgJA8q%2F9ZFm9Ty1n7zSsTH2VfRqwS222E2wmQoFhrVuoPW1xZIQsXVf3Y11uxDci%2BP%2BfY6D9XPWiwvBGy&X-Amz-Signature=d4a17255b1a6ddcc0cbeed9e775a87d91138bcecd530c5ffe77c3bed0316ee8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE356466%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPr1xqNMFcMX3cDIoz%2BaUYcFVvEH4vlpWvV6%2FDNCC4bAIhALjigrJCaXOO%2Fea1vUa%2BDYGTbg4r0ZMoUV6LLtDQCDvLKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRwq0ILX6yenIQe9Iq3AOo%2Fhu6aXnI8EHmeGxFB9fMp%2BLIIicTji1aeBncis7V1hjRurkq%2FkmhmJ4aOTD6wkjqejV1wfTuEyupEJfdAxbaiREvchNWWrFeah58awwfNtAop1q1wW%2Ffr8%2BoDxJ2zDkkwxwTxOcDqrZWqn5GXeErfcVybdXATJhs6pE3y3drHq%2FusWmDICwnTC5ABUta3aUi2vcxzidJvnz2QnouRGyo19rBFxPrPupTmlrdAIua2JnpWslCDkh%2FZhRszh2nq%2B7vMelZKd0SjkZrYhvOEzzqHh3UkdTin5UDOgYeNfixczO9fZy1KpYU44Adt6O%2B1bsYcSv2ASmqvfYbqV71btmjV9ycGJRsQCFKUqQ9rdH5152%2BjnC9Way203AzGSvkZHvYonVuseHgRpG05w9%2BUaVYld9hImwMBaMw0gA68ZBF5EFAHRvSmnvBL%2BtHBX2zQnUOeZX03Jmlzi4NFNSGAPST%2FOvy%2Borv1JS6d93%2Bk%2F6z9poRZVJyR04egYN%2FJGvrxJqHe2W5cdXstInpy93swwHohzQmQKvO9ysJ6Jj7xSS8aiQ6Qlq%2BPVH3sH88SYAilpxN%2BcZ7%2BuF%2F8uyf0A71jowOX9Qg9mmunCOuqZWyA0APTNDXPhJwCVGtpXbAFjCT9trEBjqkATcMvjrGMJXSXOgoDE8%2BZFEfWAKoPkmQ%2BzF18pojVcaXS2kLbOANsBZTO4aWsfvm4jm63einG2zoM3Svr%2BQOOMqsoe0pQChnO8qUG9hW0sNjvqXNxNQFJpVjf0%2FsR0iLx2Xpu4umgLxYURSyzyp12IfbJe%2FD1m1FonN8KyTtYcRoVY1bDtXes5ETiwZop8L4bufZCwYTklOyiKjeH7uNcTpv8eU%2F&X-Amz-Signature=e5e22dce8424117c4f5d9850e715a85d34c2046f091f5aa4fce2f53948371ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIOA6XG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD9QjJ5H7vAXo9kYIk%2BPotxF4BkarFqQRad3lDmN8cj0wIgZHi3W79buFZ1bYDRnF1nAcA88mi9swa6L37oN1KivUkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJ7f87WbxaPjryxSyrcA52Ul8gGusUQ1eKS%2Bf14EehlmXTFJVSICkbJ9SDiH%2F8P5cB8OOoiXz2J722ZMTObMphyEWrKUqZkpdOlsWRhq%2Fm0ZsawaBMSuQ2He8siF2NWBg2EwYKbsNdBTc3OVviNBiwCA4ol5dXaZRcccoam78ko2Y6fwTZ6cpMyLVl2Ke%2BnN%2BXXakcW7mMDs4A7FzBCFxEKgYb06AGX%2FAViS45kfZuV9vSLTr%2BsEAyHRH0ia6DbGcFltKOtsnQ5G5eSt05eTbH5f05fMx%2B9udtBWN98dHDtkMkNSoriZpAtSwE9WllJ259ZEG%2FM6KW7kOcg7aNDeTYm0sR6jDOk1oIuyYWq9gnsqJHerJ5nfSjFx4KIHFwEiuSO3RDWpTKbQQ3k5I5Ru%2Fbm7ADgTftO41nrMoIpOMKh4W%2FFCRZxTWNrrdMB538NK0Yn%2Fh%2B5jqNlsTcuv8Y%2BF4hrQfQtxKYgqCOES9fVqVPl7DAPTJhsD14fmR3m9w3JI4qyIkqYgIDYzMtBEJjwY7oP8Pi2Mu5YUTL%2FJobfAPERl43DUZtpfoWFw9gZm7Uk640PLbTmm76X2jGoCb6yN4HKEJwgfzqhv1qozPoXKjzRpJu1G4gPKXWuLRpY4OUNh2feXyhaHmQqaN%2FEMJ722sQGOqUBgBY5qYywZo1XUCPSwB6m30RKRGqVn%2BTbdjkZKIrOyVq7h9v9ALwAOyH7j4zMFsnEsTpuYbifak7hiyoXh7XrEm1A6Ns2M8Qgig5YgXbU68Ckb9%2Fm3RF9vPLZg0kyK9EGlxatYIEy771yBPzBJiWOsDKTpTjCy6n2pUNjx4zqUrKnlnHurZzizee7Nvj0CarD7LFC1jZC4jMaP2KyyP%2B5nGH54%2F6c&X-Amz-Signature=13abf07fda863b63f350cc3c250882cd7a9871be0b5f1a77767360cbf4c76e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
