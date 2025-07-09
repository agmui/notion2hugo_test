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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INABWKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZ%2BRtO0a7gnTEJMlkpFo6F1SFgOPrP4ds3T6fO%2Fb6twIhAMHbDpmVxX2B4HW2pSXJP5F8WCQZM9zzg3MCbVD8%2Fo%2BBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3akpf8UADwxuNsVYq3AP2nAYVZjsjJ50Nm4%2FC7lmsYBZh9PE6uEYXX0bCS0FrQqJsIaB51qPap4GCvgiHigZ1MWD8%2BRQn%2BK4HrmTUyl6b7efR5qon5eeN2DdBsHtdsmMm5FiH3Tfr9QGY9l8TZTQA6alRIGGE4afK8cSg%2B9srvILUzKlU65X4LXGvqovUe4E2oh4CDUWjOH06ccKIvZQzn2Dr3uISZ4GOlv84H7soGoQqJcrrspMdiJSPjaC%2BLPNAPKpFCRIgpyyWvWqr0557HEShZwRKb1zLgQsm79kxPDXITUpgSselnT%2B1pAr%2Fi2IRrRldm3znXODueLGSWMu4hqAhLohp5sduozDYyLJPbylwmHY0K9jJ1A5oKP5XvwHZor9YYNJ2Apl6AUqu3K9pIbde25CaTIoa%2FElFotuI5LrsVJ3UPi3UbNWxR2CzNbGezinRlSCb6tBD0jm5a8CIKZAv23sbxW87o59sOb2P6Q%2BRePSgmT0ON%2BFXtzlcMLHpTSyaMk1iFWjXqOj7tMjF5g3YntTiiuS8LsiO09CzlIWvSHVn7cZqe9yepaQK9zLpUYa2tFIjb44ZDVsunQpjjIic28vyUatZGwU%2FUknmWSAmQmrpO47QQpAYjaZZskoZChSoIHmnfTS7kTCEmLrDBjqkASOc3AdB88aC%2F9oH4nCIOFz%2FFvUhHq0fhnsFDAIfQXQOj4g61THsiL8KfzGwOaP2yYY7JtgPty%2FgapAC1ppXn4KGtsy%2BT5Bu%2F9l%2B23n05PQOngKCMksC63oNmxRs8SsxXe7zkzHiPTLM19Q77Fft%2BNtW3kUkEhX9VtdSPEP7JIURFg6TUfn6hq44I75TMX5ltpLyqKjSEMjrbIri1n%2Bg1%2FBdz%2FQT&X-Amz-Signature=0be9a11f7d45706edfb2c11cb1e2ffb7b348b3c8dfa4d8d949910758456b35d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INABWKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZ%2BRtO0a7gnTEJMlkpFo6F1SFgOPrP4ds3T6fO%2Fb6twIhAMHbDpmVxX2B4HW2pSXJP5F8WCQZM9zzg3MCbVD8%2Fo%2BBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3akpf8UADwxuNsVYq3AP2nAYVZjsjJ50Nm4%2FC7lmsYBZh9PE6uEYXX0bCS0FrQqJsIaB51qPap4GCvgiHigZ1MWD8%2BRQn%2BK4HrmTUyl6b7efR5qon5eeN2DdBsHtdsmMm5FiH3Tfr9QGY9l8TZTQA6alRIGGE4afK8cSg%2B9srvILUzKlU65X4LXGvqovUe4E2oh4CDUWjOH06ccKIvZQzn2Dr3uISZ4GOlv84H7soGoQqJcrrspMdiJSPjaC%2BLPNAPKpFCRIgpyyWvWqr0557HEShZwRKb1zLgQsm79kxPDXITUpgSselnT%2B1pAr%2Fi2IRrRldm3znXODueLGSWMu4hqAhLohp5sduozDYyLJPbylwmHY0K9jJ1A5oKP5XvwHZor9YYNJ2Apl6AUqu3K9pIbde25CaTIoa%2FElFotuI5LrsVJ3UPi3UbNWxR2CzNbGezinRlSCb6tBD0jm5a8CIKZAv23sbxW87o59sOb2P6Q%2BRePSgmT0ON%2BFXtzlcMLHpTSyaMk1iFWjXqOj7tMjF5g3YntTiiuS8LsiO09CzlIWvSHVn7cZqe9yepaQK9zLpUYa2tFIjb44ZDVsunQpjjIic28vyUatZGwU%2FUknmWSAmQmrpO47QQpAYjaZZskoZChSoIHmnfTS7kTCEmLrDBjqkASOc3AdB88aC%2F9oH4nCIOFz%2FFvUhHq0fhnsFDAIfQXQOj4g61THsiL8KfzGwOaP2yYY7JtgPty%2FgapAC1ppXn4KGtsy%2BT5Bu%2F9l%2B23n05PQOngKCMksC63oNmxRs8SsxXe7zkzHiPTLM19Q77Fft%2BNtW3kUkEhX9VtdSPEP7JIURFg6TUfn6hq44I75TMX5ltpLyqKjSEMjrbIri1n%2Bg1%2FBdz%2FQT&X-Amz-Signature=fc7aa565aec9dbbd4e9bd650e7cf94f33e3e7d29200bf74a9838b23d08b4e4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INABWKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZ%2BRtO0a7gnTEJMlkpFo6F1SFgOPrP4ds3T6fO%2Fb6twIhAMHbDpmVxX2B4HW2pSXJP5F8WCQZM9zzg3MCbVD8%2Fo%2BBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3akpf8UADwxuNsVYq3AP2nAYVZjsjJ50Nm4%2FC7lmsYBZh9PE6uEYXX0bCS0FrQqJsIaB51qPap4GCvgiHigZ1MWD8%2BRQn%2BK4HrmTUyl6b7efR5qon5eeN2DdBsHtdsmMm5FiH3Tfr9QGY9l8TZTQA6alRIGGE4afK8cSg%2B9srvILUzKlU65X4LXGvqovUe4E2oh4CDUWjOH06ccKIvZQzn2Dr3uISZ4GOlv84H7soGoQqJcrrspMdiJSPjaC%2BLPNAPKpFCRIgpyyWvWqr0557HEShZwRKb1zLgQsm79kxPDXITUpgSselnT%2B1pAr%2Fi2IRrRldm3znXODueLGSWMu4hqAhLohp5sduozDYyLJPbylwmHY0K9jJ1A5oKP5XvwHZor9YYNJ2Apl6AUqu3K9pIbde25CaTIoa%2FElFotuI5LrsVJ3UPi3UbNWxR2CzNbGezinRlSCb6tBD0jm5a8CIKZAv23sbxW87o59sOb2P6Q%2BRePSgmT0ON%2BFXtzlcMLHpTSyaMk1iFWjXqOj7tMjF5g3YntTiiuS8LsiO09CzlIWvSHVn7cZqe9yepaQK9zLpUYa2tFIjb44ZDVsunQpjjIic28vyUatZGwU%2FUknmWSAmQmrpO47QQpAYjaZZskoZChSoIHmnfTS7kTCEmLrDBjqkASOc3AdB88aC%2F9oH4nCIOFz%2FFvUhHq0fhnsFDAIfQXQOj4g61THsiL8KfzGwOaP2yYY7JtgPty%2FgapAC1ppXn4KGtsy%2BT5Bu%2F9l%2B23n05PQOngKCMksC63oNmxRs8SsxXe7zkzHiPTLM19Q77Fft%2BNtW3kUkEhX9VtdSPEP7JIURFg6TUfn6hq44I75TMX5ltpLyqKjSEMjrbIri1n%2Bg1%2FBdz%2FQT&X-Amz-Signature=8e5b7b90d9161470d406650899ed3a399eaef2c71373c6c3a913c1bf20c2d087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRETOCXM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvr%2BzzL0BbQgpuoUMg8IAfKYNIZjKG%2FUXii%2FVeAhn4hAIhAKW0GebmE%2FldCsMP2ozUkDWRG9%2F3SniQ0xOl27K2E1m2KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0ghueWkrAXkmxmCMq3AOPLSvJ5ABoPMwHkYlApys1K3jHezrgUt9WVQu9CTXwRBAenJJ5SQk4yxmutcJxkr4f9Aj5V%2FOPzNvRyN8vJG%2FZxRPNwRv9O8qvLaOwvNAXt9XbRVey26b9r%2BGtJcpujLjirinW6Atj2jORyxxKLhry2AFZazvdov%2BxGJL2w3SJe4w63WVF3Bz1vPDRbXNHvFmDV6VWXmvitbWfz1Z9VXpVGNkpSV2ZoWoEmwOowUz%2BkVb7EhWCJfCSFBISBUvxh1Chl9Ip4fWj1f8AxDV4cVHg84gJvbkYHz4b4QWANn2MVFTb1yFRYErt5ZXnaCXGuUxGhEOZDq4gVIAzZnWqgy6oTzJlBGd7iDLSLWXaPm8gt2kZ%2FvGcb8l0mvV7xMAvOB%2BEKpz3LAJpS8vyQqMytekiGzkNy%2Bj2bRkitQl1pXG6jd8Fv94Z3%2FIfCX%2BfkG1sd56GLMyhL5eGNlyCZvjNuS0EIhs2tIKDJhRyYE%2BfJ0BJKDW5IFvcFFomdT8wsr5QGDONHPieNNkogg0Q6A15ePniaHBvob2vQsPd4lin5w8nUPDdVRN5J6Spg5%2FN0s7KK%2FGRYDzzh7j%2Bqtkcqgs1F%2BZE%2FqDeZ%2BC5WgYY4DM35t6yCsor7LEQLevfAO4SozDwmLrDBjqkAQvL1yzwQ%2FnSIBkdQy7OcUoSw44EzPbLzFTy64somk2EyhDl1N9je2e%2FFZPwMMxe6jMCBFsgNbszU6wLEWajxCAWsqAfQrGeDB6rQX%2FkqZQqk6DAStbQnN8bLcWrun4ak33cmNC6KosfxrrBkl0KeJbfQBnzrAAw%2BT8%2FRg3KOjZrpstKPsoZKpZ0qgr4LdG2kU2%2Fzp0PDjzbA8ce3GjEnMsY6DSb&X-Amz-Signature=f82a699b207351d8bd285ba76147924c58ed084993aa6162131960fb253cf2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBTNX4L%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtsbpJUFjRvfWN0trUYgtfMxMLdVK4BoGXBud4vDFUrAiEAqMoaV7dBEm23pfnL8ubWJpUvighhZrx1fLjpCU8dg0wqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPQb3cjQJNC8M0xqSrcA1GCBHNrMCh73wRiAAudvSeQC99tMuyAyz%2FCQ1KNfafgAB2JJ5oF5BYxAywZPVFN55DNPoXwGU%2Bd%2BZMdlFvvMvBjhP9vXD7Q9o8SiNbyUZw4PgJpbV9DxB2zXgCYVEO1P9fhAheQHb0EZSgIKW5a8Da4BlZxBJZ8IoMq5tAWYEsxjMQzkzahf%2BiCK7D8TSpbQwNyVCCFTkL9jjD9AnX9gdzznKruVkR8EFIxS56tuq9choFxS6Z1MFVNjm5iUy4HTYGLToGi96X3f7n8kgRl32JPL05dVDDx54x2gahVoktzChmfCBw2MvPSITwMEshhFu0a0T8nv6Cajn2PPasdvb6qE2VreW5jVTRqyenJHAR6tysFMTle8fWpOUarVLwlFh5u%2B11Dwf6oPZNZz73EjKrKL5IPwhG8yqYzh%2BmRjio%2BDCmO749ieGKFMKSbwfEmcSkQ7Q9tO%2Bcs4A5vM%2BDMUK%2BuK5Hb2QiM0YTl8tvmRBhrsUkxtrOPZvNV%2FI5q6x2IWhC%2F8pPkP4tg9M68Iq%2FxS6VrIZ4NbANH8VMEdb3Y%2FMa5763k542WeBNF7tx0%2FBsPcSpcO%2F8XuI3s7GFGPBbpZG7wqEfVrCXejptQ1ASkODFaW2wT1hd%2FAzTfkh2GMJeZusMGOqUB0xMrALH%2BT64wQaH9t%2B0w%2Bu73P2mBM1BJrhw5u%2F8FNjddC6ZV7ij4afNnMe91SCKdd%2FCuyi2k%2FrWLz%2BVhnY2mdEoM6danGnpAVK0IMTDp2fsF7UqVbLEzRnmwy8O4H8%2BLKtc1PhpvQhUal5oxBhj4715R3MV68R%2B4cHXXpfkLI5gxRUPAULGRDtlbHMp0iubsQpOtQY8qGcdrimw6zm4dyuZat8rK&X-Amz-Signature=96010374d286d9db6b2da884207240f4ee5e840ec043cf7bc1f931228565207f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664INABWKN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZ%2BRtO0a7gnTEJMlkpFo6F1SFgOPrP4ds3T6fO%2Fb6twIhAMHbDpmVxX2B4HW2pSXJP5F8WCQZM9zzg3MCbVD8%2Fo%2BBKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3akpf8UADwxuNsVYq3AP2nAYVZjsjJ50Nm4%2FC7lmsYBZh9PE6uEYXX0bCS0FrQqJsIaB51qPap4GCvgiHigZ1MWD8%2BRQn%2BK4HrmTUyl6b7efR5qon5eeN2DdBsHtdsmMm5FiH3Tfr9QGY9l8TZTQA6alRIGGE4afK8cSg%2B9srvILUzKlU65X4LXGvqovUe4E2oh4CDUWjOH06ccKIvZQzn2Dr3uISZ4GOlv84H7soGoQqJcrrspMdiJSPjaC%2BLPNAPKpFCRIgpyyWvWqr0557HEShZwRKb1zLgQsm79kxPDXITUpgSselnT%2B1pAr%2Fi2IRrRldm3znXODueLGSWMu4hqAhLohp5sduozDYyLJPbylwmHY0K9jJ1A5oKP5XvwHZor9YYNJ2Apl6AUqu3K9pIbde25CaTIoa%2FElFotuI5LrsVJ3UPi3UbNWxR2CzNbGezinRlSCb6tBD0jm5a8CIKZAv23sbxW87o59sOb2P6Q%2BRePSgmT0ON%2BFXtzlcMLHpTSyaMk1iFWjXqOj7tMjF5g3YntTiiuS8LsiO09CzlIWvSHVn7cZqe9yepaQK9zLpUYa2tFIjb44ZDVsunQpjjIic28vyUatZGwU%2FUknmWSAmQmrpO47QQpAYjaZZskoZChSoIHmnfTS7kTCEmLrDBjqkASOc3AdB88aC%2F9oH4nCIOFz%2FFvUhHq0fhnsFDAIfQXQOj4g61THsiL8KfzGwOaP2yYY7JtgPty%2FgapAC1ppXn4KGtsy%2BT5Bu%2F9l%2B23n05PQOngKCMksC63oNmxRs8SsxXe7zkzHiPTLM19Q77Fft%2BNtW3kUkEhX9VtdSPEP7JIURFg6TUfn6hq44I75TMX5ltpLyqKjSEMjrbIri1n%2Bg1%2FBdz%2FQT&X-Amz-Signature=6f7fe71bb42952862e591604cacce615c3064bf3593dc34adb7ce7af3af91328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
