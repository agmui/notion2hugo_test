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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJMQYUW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo8sAzeov5BOl%2BZBpxbsl3VvdylOmPNVv6tah2L3n72wIhAO1z1mfoIsYZDtXXw0qr7WpXD5%2F%2FmyMPxukmIoACY%2BD%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycH%2FpDk%2B1giNPz0mAq3AOs%2FGWZY4kDRfSZYOlDTezdezHbcH%2FB5X6JppFEyVXQGr5rJJQlN20r6Y0rrb9dZ8gu5iSEH1AoBMStH5%2B%2FUga3aEWsmkF4jd9VW5XOVXZ8YjDR0L57tmQm2HIFca5wUxNfnXgKWqho0qMUBdqGsbOTks1t%2FxKFVLgc7FwywRoZUxdbA%2Fsne0XelwwoWCTHMS56Lv%2BJ5k5ART7QYUXAjAxF24g7J8bh%2FM8rszXBo4vHr2KKG1IktrtKZ3vFqs7uGW4w56RFJnpIE%2BVDWSizSJjVCyZWD%2B7575c%2BHzsm45IQmaTobORDijac1VpRVazt1fJNN%2BCO%2FmM0SWJPaehMvCJZRUX5VcTZun1LR%2F1jlL3QIcLYoPf7zWFWak8dT12S2diuHRA%2F0zdeTPWU%2FjChbwEn3M4TRwKOzoatjx45XAZzBP1GOKuAxkoPg3Ss39WurLwzAMA3vwWmewiV%2FT%2BCAsX24HDFCoPsTAha%2BZKkFLIA0clf5zpufpuSGXatOXgL1RlATmUpd%2BY18%2FIzZEMyLLHQGz4%2B6MLoZ9luPoIEf6LFNj3Qa7MZM3QtQVmReaau7W%2BC559S6ebXV2DM5lagPFqJPie11u45Ey6IbjrETv9%2FLRGSNfu8m9Yj2KJMozC25oLDBjqkAShfvxbv4q4n4GLxcbgnxpbbUgeJVPb0uC9WQNkGHqdf59JoSNvraLulDRFQqV3hPgj8qkzmpV3Ghh9mPBUpNcpSodjwJrndwPruQfFAI4aumgYdD4Q9hPtuq1Umga%2BCyCYxOtgkIry77bjrOf2xj479KvthC8IxrI8K3fS7SL8jpM1VxLryLOxE0w7HjpVh6dL2O6Oj%2BGYugF%2FFcBnePKPlOoMP&X-Amz-Signature=2865bd04966d98cf1bdb836b04ec012722194e5e470f2ea5d1a42f0ba8e6b5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJMQYUW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo8sAzeov5BOl%2BZBpxbsl3VvdylOmPNVv6tah2L3n72wIhAO1z1mfoIsYZDtXXw0qr7WpXD5%2F%2FmyMPxukmIoACY%2BD%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycH%2FpDk%2B1giNPz0mAq3AOs%2FGWZY4kDRfSZYOlDTezdezHbcH%2FB5X6JppFEyVXQGr5rJJQlN20r6Y0rrb9dZ8gu5iSEH1AoBMStH5%2B%2FUga3aEWsmkF4jd9VW5XOVXZ8YjDR0L57tmQm2HIFca5wUxNfnXgKWqho0qMUBdqGsbOTks1t%2FxKFVLgc7FwywRoZUxdbA%2Fsne0XelwwoWCTHMS56Lv%2BJ5k5ART7QYUXAjAxF24g7J8bh%2FM8rszXBo4vHr2KKG1IktrtKZ3vFqs7uGW4w56RFJnpIE%2BVDWSizSJjVCyZWD%2B7575c%2BHzsm45IQmaTobORDijac1VpRVazt1fJNN%2BCO%2FmM0SWJPaehMvCJZRUX5VcTZun1LR%2F1jlL3QIcLYoPf7zWFWak8dT12S2diuHRA%2F0zdeTPWU%2FjChbwEn3M4TRwKOzoatjx45XAZzBP1GOKuAxkoPg3Ss39WurLwzAMA3vwWmewiV%2FT%2BCAsX24HDFCoPsTAha%2BZKkFLIA0clf5zpufpuSGXatOXgL1RlATmUpd%2BY18%2FIzZEMyLLHQGz4%2B6MLoZ9luPoIEf6LFNj3Qa7MZM3QtQVmReaau7W%2BC559S6ebXV2DM5lagPFqJPie11u45Ey6IbjrETv9%2FLRGSNfu8m9Yj2KJMozC25oLDBjqkAShfvxbv4q4n4GLxcbgnxpbbUgeJVPb0uC9WQNkGHqdf59JoSNvraLulDRFQqV3hPgj8qkzmpV3Ghh9mPBUpNcpSodjwJrndwPruQfFAI4aumgYdD4Q9hPtuq1Umga%2BCyCYxOtgkIry77bjrOf2xj479KvthC8IxrI8K3fS7SL8jpM1VxLryLOxE0w7HjpVh6dL2O6Oj%2BGYugF%2FFcBnePKPlOoMP&X-Amz-Signature=c05dead60561e0135a46d92e185af7029854d64d61a4564e76e10ce7b4d3eba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJMQYUW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo8sAzeov5BOl%2BZBpxbsl3VvdylOmPNVv6tah2L3n72wIhAO1z1mfoIsYZDtXXw0qr7WpXD5%2F%2FmyMPxukmIoACY%2BD%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycH%2FpDk%2B1giNPz0mAq3AOs%2FGWZY4kDRfSZYOlDTezdezHbcH%2FB5X6JppFEyVXQGr5rJJQlN20r6Y0rrb9dZ8gu5iSEH1AoBMStH5%2B%2FUga3aEWsmkF4jd9VW5XOVXZ8YjDR0L57tmQm2HIFca5wUxNfnXgKWqho0qMUBdqGsbOTks1t%2FxKFVLgc7FwywRoZUxdbA%2Fsne0XelwwoWCTHMS56Lv%2BJ5k5ART7QYUXAjAxF24g7J8bh%2FM8rszXBo4vHr2KKG1IktrtKZ3vFqs7uGW4w56RFJnpIE%2BVDWSizSJjVCyZWD%2B7575c%2BHzsm45IQmaTobORDijac1VpRVazt1fJNN%2BCO%2FmM0SWJPaehMvCJZRUX5VcTZun1LR%2F1jlL3QIcLYoPf7zWFWak8dT12S2diuHRA%2F0zdeTPWU%2FjChbwEn3M4TRwKOzoatjx45XAZzBP1GOKuAxkoPg3Ss39WurLwzAMA3vwWmewiV%2FT%2BCAsX24HDFCoPsTAha%2BZKkFLIA0clf5zpufpuSGXatOXgL1RlATmUpd%2BY18%2FIzZEMyLLHQGz4%2B6MLoZ9luPoIEf6LFNj3Qa7MZM3QtQVmReaau7W%2BC559S6ebXV2DM5lagPFqJPie11u45Ey6IbjrETv9%2FLRGSNfu8m9Yj2KJMozC25oLDBjqkAShfvxbv4q4n4GLxcbgnxpbbUgeJVPb0uC9WQNkGHqdf59JoSNvraLulDRFQqV3hPgj8qkzmpV3Ghh9mPBUpNcpSodjwJrndwPruQfFAI4aumgYdD4Q9hPtuq1Umga%2BCyCYxOtgkIry77bjrOf2xj479KvthC8IxrI8K3fS7SL8jpM1VxLryLOxE0w7HjpVh6dL2O6Oj%2BGYugF%2FFcBnePKPlOoMP&X-Amz-Signature=1e504454443ee30e0e37244d14dade3000a70c7869f57491dcc25ef868cc0e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJ6BV6E%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBk8mj%2BjpHY6BH7Qoo1A9QG5NMe84mO8fu4v2FkyY8VZAiEAl06LBgcTXIprGpyZNmVltVjEbZ6X4xfXuS16SJgQ8JQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8Gd1QydVQ2QRzcOCrcAzV2QRXWAPDvi21iHHvK1W4o4HO22bvVQLmBT2FsmOxkd94BKU5pRbQslsbVNq1LzF5UEWHb%2FeoMrROkV6R7nd3kqu08oPRfTWrd7h1zHwZjOgd%2FwGTauZneUVt%2FGL2eCkDPBuFfBQm4h8oKGEo6uIV3sIyEGj043ws9ylbMkMoBWGZhsDeV7Z2NT%2FGraLfLpuMHdJnFI0NBFR%2BY11CQHJBZxv6yyHYGE%2Bi61E71AoEFh4Ndip%2FPdRchiqdDpiux6uPbEhu7qCJzco%2BH6CYkKWjBPxVsFSgc6r0XVUYapjeo1JBYBKN8KuOIbcUJkK2TQFavYm2aR8%2BWZDEC5firWFSMZXsykQ9uKhsQ33PJMj%2FzvF25SytU1XG%2BPOpFW5XkgtIL61Qn9sZCej1EV5CLWW%2BOHkgiBwez%2FS7aQc4Xi2WzDfQJbXIf%2FgM4iqqc4N%2FxdYK1RTglhRWDAWpQEjLubnjQFg7oZdjF2jOIeP4a9THHEUzCeBoHKsC3AI4H529zmpiZVxtAFwFinYNO%2BNuBw8wmG1KRld6niaorOkb36mX4zLKI%2FeWy8U5vF71YdgiPt49%2FhL6NFRZ%2F6zMCtKzVEH6B7LHv%2B3SLSZX%2Byv8V59xy4e%2B5v0ZxSFu0%2BaCqMJKng8MGOqUBg84ko46AHBCSyCmBCfN8dnlloQKzJm0pDMLWDQgPCmLhh6O8jKGQYykDUFVL%2FAszoO%2FhbGn%2BvPPnBugDzrdk7lBe8hMEnd7WSY66FO70COBvP%2FeL2%2F3jFkqHiXQaUO1NKXoVfrGJfbQlB2Z9PB8cKt3WNw7FlmTWlHfT0XFbcalY498pxojJZPzf0Dvh9aP%2FxazukQHEfYC6Ns94S1ikwCjio8UU&X-Amz-Signature=a81276fd078fb88d0707d25a7120debc56ba0e5c4806a00ecce5047898d85c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NVBLPMI%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPE%2F7fd0yPf%2BRWRUga6xNQbWyjBxw3EwgpdeGpxFPKygIgQMstt6mU5rwkVsKxjXiTQeWPQ4SMgVACyWG3LdYvk0kqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC%2Bh18JKeYtzf6nrSrcA3i9Zb1DlNhX0vegOHV1mbA%2FNRP6jEkn0oqy5rvgxHefeiaP%2Bvjp2AZCAcOTe%2B0JeGK5ZqeTUfPBN45Hn0hCMFFG%2Fdw2A7Ip3q4bgrEvHDWnQ9iE14OMBP7TuARFZ8FeFGfL7KedKB2PGWvchLsgZ3V1586LORisPm7bkczR%2FLre4HILss7%2FXQ86EJw77jISk1cdbryPWtcfqDoy8Gr25pA7DJvOve8C5%2BD7NqouHuQyqynqFHAjjlULsTYxq6miEiC1ZP8HBezzl3WoBj8fmbX1wVyRIAcV8Z7oKe%2BJ3rX7f7GUlmI%2BP4Ntk4bGMLvm7v7FJ%2FB8XIvA4x6u4AgnyFTDzo%2Bp%2F52PgPgAKdlBk7thEGBDPKWzeZujEbVIuusQJgg8XutGrFEUVMsWebRJOdaxp4gqahd%2Bp1cWSrErk7Ik8oIXURR6GWTt50tBEsJRlWiWtJ%2BalAp65iI5S8FRz8opZvpTnmnds%2B7wL0hyEODGTEqh36GxiCLVF2mx94vuDM5w5ssh7h8BQT%2Fe76Wa7bapgPwLZRIuAjLfaXdv%2FUQt5ukwLuO1GJOoIiYiB5NsQ%2B43J%2Bn0KGLqgbPOI1xxEHktjQZoac%2F8ylm9qcTroWOiTStrZRq7VbEU6wtnMMuzg8MGOqUBePGQ00V441bqres4obteVttUOF3txw0H1XO9P5IzELtTm5wCngiD5VNvpM5uCmcx8m043DU3Ca6N1jibVA2KfDlBl0rzfhpas0QEsFnEHRyBYYJrzdI6pnoJGb9hsDGTOmX0hY0TNjYgGD9EJU7zgESX0oAZuao9IeVwU9Mt59Y2SVdaUUTJMJJeObEtGXH2LZ7Pyv4VNZdTZJ9ni9VI0nik2w4g&X-Amz-Signature=8b523f64bcb0b504592f13d375e120433d8326e0293298a7b6545ecd08d62da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGJMQYUW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo8sAzeov5BOl%2BZBpxbsl3VvdylOmPNVv6tah2L3n72wIhAO1z1mfoIsYZDtXXw0qr7WpXD5%2F%2FmyMPxukmIoACY%2BD%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycH%2FpDk%2B1giNPz0mAq3AOs%2FGWZY4kDRfSZYOlDTezdezHbcH%2FB5X6JppFEyVXQGr5rJJQlN20r6Y0rrb9dZ8gu5iSEH1AoBMStH5%2B%2FUga3aEWsmkF4jd9VW5XOVXZ8YjDR0L57tmQm2HIFca5wUxNfnXgKWqho0qMUBdqGsbOTks1t%2FxKFVLgc7FwywRoZUxdbA%2Fsne0XelwwoWCTHMS56Lv%2BJ5k5ART7QYUXAjAxF24g7J8bh%2FM8rszXBo4vHr2KKG1IktrtKZ3vFqs7uGW4w56RFJnpIE%2BVDWSizSJjVCyZWD%2B7575c%2BHzsm45IQmaTobORDijac1VpRVazt1fJNN%2BCO%2FmM0SWJPaehMvCJZRUX5VcTZun1LR%2F1jlL3QIcLYoPf7zWFWak8dT12S2diuHRA%2F0zdeTPWU%2FjChbwEn3M4TRwKOzoatjx45XAZzBP1GOKuAxkoPg3Ss39WurLwzAMA3vwWmewiV%2FT%2BCAsX24HDFCoPsTAha%2BZKkFLIA0clf5zpufpuSGXatOXgL1RlATmUpd%2BY18%2FIzZEMyLLHQGz4%2B6MLoZ9luPoIEf6LFNj3Qa7MZM3QtQVmReaau7W%2BC559S6ebXV2DM5lagPFqJPie11u45Ey6IbjrETv9%2FLRGSNfu8m9Yj2KJMozC25oLDBjqkAShfvxbv4q4n4GLxcbgnxpbbUgeJVPb0uC9WQNkGHqdf59JoSNvraLulDRFQqV3hPgj8qkzmpV3Ghh9mPBUpNcpSodjwJrndwPruQfFAI4aumgYdD4Q9hPtuq1Umga%2BCyCYxOtgkIry77bjrOf2xj479KvthC8IxrI8K3fS7SL8jpM1VxLryLOxE0w7HjpVh6dL2O6Oj%2BGYugF%2FFcBnePKPlOoMP&X-Amz-Signature=84c8ba5f69491d360847bb7f17523df88a12426d39b5174bb6df109f62ca2a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
