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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZM62WQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ioIbMjulKUGt5HB2jWFxKMDVnih3w3IBVtW%2Bf2h%2FEgIhAOgx2KDgluzryNB0rKFGeqPrHB%2FG%2BgW6K5gCHJ7%2FBT3MKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO64tvaeGrnIpwhawq3ANvWJXu4PgsEACClCFMMCzwRjjH4msZ6pMgOi5dte9RTUCJaCt7qWvpCE25IJ432PGbChfmMhYmB3Q7HFWDoECHuDqRceTm9VPqPdkE5VFIKzmJGiddEwSb8ZvTn3pAoZGA6133EUxp0xh3Eab%2BcavNTYItclbpEYpRqIt4iD2X0zHSDmFigpU%2Bsb4Byh5e4vN2NgnCOqCswRKUsGYyHEZZv7zbq8YkmG4wmEKVNzg1fK9RTXrXeCPP9PkcYq52Evcca2c0LdbymwFqcZwfJw0pCM1oUjET29QZXUSJ842SayUQT1TorhXqBBhvY1S6j1BnbdtoVsn7SmWrPZwa4EoZu5oizbxwKo4xOc%2BQSQEntad4LJfcUBkohLzT%2BG2t3NDU6C8Vt0Z6QmHue0NXnm5F1HeihHjxtBtG1PNJ5n%2BRPItNKtHA%2Fd4WoJ4jUvVResmlOQe2J7oRXY%2F8iyutU6%2BumZ1yRUzq14uZtALN9vbtrRMrhOGlLTQlmpsxYsURm8kYMnBvEa%2BWOlT12itGcH%2FOGXNhm0lxdkj9%2FRBFCxDGOTfOGUJb2j%2BlYFX88HXli4WRZJdT5KZCB77hl09%2BSMwWER1NQtkYzvjNWQJ2Ay1oEldZ802TpH9KNrU3SzCw8J3CBjqkATTSr%2FkyCmwKCo7Il%2BWd5Aeg4TXDUcOdOLPcMuM%2BJuCf0rqvFG824Dbc5TYaTLFAKdbR26vCgk5fFZQ4lWv8IYd75PBQTYpuyRz4kA1zwCcB%2BzvrkWWnrujfNpkkAA2ji%2B3179q9Mdaav1FnuaXhJ7GnrTt4IK46sqWWKsUlJ7Ekd9BUnO%2BmgvsnJnYE5fOwFpxhqxaRjbT5oA41Bg1%2F9X98gU%2FA&X-Amz-Signature=b3bb0f8138417b4969646ab009cf80d77b1fec452e36547a873cdc8a42281fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZM62WQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ioIbMjulKUGt5HB2jWFxKMDVnih3w3IBVtW%2Bf2h%2FEgIhAOgx2KDgluzryNB0rKFGeqPrHB%2FG%2BgW6K5gCHJ7%2FBT3MKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO64tvaeGrnIpwhawq3ANvWJXu4PgsEACClCFMMCzwRjjH4msZ6pMgOi5dte9RTUCJaCt7qWvpCE25IJ432PGbChfmMhYmB3Q7HFWDoECHuDqRceTm9VPqPdkE5VFIKzmJGiddEwSb8ZvTn3pAoZGA6133EUxp0xh3Eab%2BcavNTYItclbpEYpRqIt4iD2X0zHSDmFigpU%2Bsb4Byh5e4vN2NgnCOqCswRKUsGYyHEZZv7zbq8YkmG4wmEKVNzg1fK9RTXrXeCPP9PkcYq52Evcca2c0LdbymwFqcZwfJw0pCM1oUjET29QZXUSJ842SayUQT1TorhXqBBhvY1S6j1BnbdtoVsn7SmWrPZwa4EoZu5oizbxwKo4xOc%2BQSQEntad4LJfcUBkohLzT%2BG2t3NDU6C8Vt0Z6QmHue0NXnm5F1HeihHjxtBtG1PNJ5n%2BRPItNKtHA%2Fd4WoJ4jUvVResmlOQe2J7oRXY%2F8iyutU6%2BumZ1yRUzq14uZtALN9vbtrRMrhOGlLTQlmpsxYsURm8kYMnBvEa%2BWOlT12itGcH%2FOGXNhm0lxdkj9%2FRBFCxDGOTfOGUJb2j%2BlYFX88HXli4WRZJdT5KZCB77hl09%2BSMwWER1NQtkYzvjNWQJ2Ay1oEldZ802TpH9KNrU3SzCw8J3CBjqkATTSr%2FkyCmwKCo7Il%2BWd5Aeg4TXDUcOdOLPcMuM%2BJuCf0rqvFG824Dbc5TYaTLFAKdbR26vCgk5fFZQ4lWv8IYd75PBQTYpuyRz4kA1zwCcB%2BzvrkWWnrujfNpkkAA2ji%2B3179q9Mdaav1FnuaXhJ7GnrTt4IK46sqWWKsUlJ7Ekd9BUnO%2BmgvsnJnYE5fOwFpxhqxaRjbT5oA41Bg1%2F9X98gU%2FA&X-Amz-Signature=efda3f50d3459277461116dd12187ab1a87c7e9429b9e276a85d3b9f29a1f47f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZM62WQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ioIbMjulKUGt5HB2jWFxKMDVnih3w3IBVtW%2Bf2h%2FEgIhAOgx2KDgluzryNB0rKFGeqPrHB%2FG%2BgW6K5gCHJ7%2FBT3MKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO64tvaeGrnIpwhawq3ANvWJXu4PgsEACClCFMMCzwRjjH4msZ6pMgOi5dte9RTUCJaCt7qWvpCE25IJ432PGbChfmMhYmB3Q7HFWDoECHuDqRceTm9VPqPdkE5VFIKzmJGiddEwSb8ZvTn3pAoZGA6133EUxp0xh3Eab%2BcavNTYItclbpEYpRqIt4iD2X0zHSDmFigpU%2Bsb4Byh5e4vN2NgnCOqCswRKUsGYyHEZZv7zbq8YkmG4wmEKVNzg1fK9RTXrXeCPP9PkcYq52Evcca2c0LdbymwFqcZwfJw0pCM1oUjET29QZXUSJ842SayUQT1TorhXqBBhvY1S6j1BnbdtoVsn7SmWrPZwa4EoZu5oizbxwKo4xOc%2BQSQEntad4LJfcUBkohLzT%2BG2t3NDU6C8Vt0Z6QmHue0NXnm5F1HeihHjxtBtG1PNJ5n%2BRPItNKtHA%2Fd4WoJ4jUvVResmlOQe2J7oRXY%2F8iyutU6%2BumZ1yRUzq14uZtALN9vbtrRMrhOGlLTQlmpsxYsURm8kYMnBvEa%2BWOlT12itGcH%2FOGXNhm0lxdkj9%2FRBFCxDGOTfOGUJb2j%2BlYFX88HXli4WRZJdT5KZCB77hl09%2BSMwWER1NQtkYzvjNWQJ2Ay1oEldZ802TpH9KNrU3SzCw8J3CBjqkATTSr%2FkyCmwKCo7Il%2BWd5Aeg4TXDUcOdOLPcMuM%2BJuCf0rqvFG824Dbc5TYaTLFAKdbR26vCgk5fFZQ4lWv8IYd75PBQTYpuyRz4kA1zwCcB%2BzvrkWWnrujfNpkkAA2ji%2B3179q9Mdaav1FnuaXhJ7GnrTt4IK46sqWWKsUlJ7Ekd9BUnO%2BmgvsnJnYE5fOwFpxhqxaRjbT5oA41Bg1%2F9X98gU%2FA&X-Amz-Signature=fb52043324cf3da5d03d713ba112dbe7bff5536502afca5f79d8f0895667e912&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVHVY7S%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO1CwYJoB1C%2BbdSQVnQYNhEvdf5IbMIW7rG1noV7lFDQIgeXzqDksxusyPXA8xUgl%2B6ccbZ6lGxT%2FLdP1iVMbeZn4qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIh4I%2B5%2BH6eTk3aF%2FyrcA%2B2DezEShHLsgwHfVoatHj2PIqS4cOCtm1IxtKv%2BTAfaw8EHymV5cvJRDGjbGi3iKXT8%2FA8icBcci6mQSpHDq2CmP23pv2rd28%2BBcKDgEYL6Hpy4yeLB%2BwXPBTIf4ZpjysNmCNJMd5%2B%2FpgjpZFooc1lOsQqNzTxUQVfwifcUYfM0sQjWlHKw00EydOGPZw3mCYUg5o4o%2F9vTa0EwNHfK79k2TJDYqb6%2BSTdcVW6LtzS798h1yxKBAI%2BJiFp05vrzIPzzrjmZvINXGC3EFb5fmK5VEX0F6sLi1EgrA5f%2B4ISjuPIa9ApLQX7ZZ0Fip2q1uGpNw4Dw2tqUKPvck6w59B2uniJci3pAJ26aWkw4l3UpO8A%2FEjGMLsU0uEPTbVl5GyKhspkXCZoM3XV0mFbJ%2FaEvklzflEZljqxLwxsW5g3FzThGbIBc15HevTXhmF3f%2B8Lx8WL9DOX2EcnyN7xhWLmXQDA72Wuw%2BaYfxLY0bPBRHoninloXvJ1JBZ2q4gk%2F0wibFB2%2Bagv0SwNdDom5XmF9xgdzULPn854Q288U7vDcXZft%2FhSvIKYLCuG%2BY0952%2Bhk11jQDhUJaU4SN0PiqEIUydGfsqMLqHKkolOF89wl155gvRqJaDp5SAG6MK3wncIGOqUBLTBBjQ2I8GVYNIE1s9Gdvn2b1PT5fZanNpLLcaNQntaq%2BVXrhAZyzBmptoL9hzeJ4WXLy9S3V94Wx2j17NwpzkXtkP9MewXkWFcFGTgNMp79J6rYDRuT%2F5EUsXvuUI%2F8spIdojVRaLmqxzTdOC6s9ll5xS0HdMRVb082XPPM%2BnowWmcPMRzrs9I2qZMRs8hMtDCN40T6s7wEwAcL4b%2FgDgrMEIWN&X-Amz-Signature=27f1e79181d58fa03188650c321ae0eca9c7d3658696764fa7d2266f86cc2a34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2R5ATV%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDkawVcfzzdAVjjBv%2FQf9JDIOrf3bsyozktYX1WtWGAAiB9%2Bp%2FSJfcRyGfPhmpcXo3gCZQhdMZ4xhGXi10ZeteQ1CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbCQZ1cjfkOPwRGkCKtwD0JfG1u5i%2Fl28hlIoJ4%2ByQLuYcq6lMlshIxqctIeOw4WiQB%2BnhmIJqPgOQjCdhCbPePLOTLYinQiWRO74KpEdukvdgjpZnk6NidcICFSs9WgfOWI5euwO3ykpLCxSpmoppNw5tyQRm6i2fQbb8OMzxcSgUw%2FiW%2F2lceuVmTi9DQjkZ%2FRnzguMaKf%2FjbKKsHT2D7GpBt8KhNOSm6UVXzZhiL%2FF8MR8LsrhptVdNU4IDjW0GrqI7W0zypGRFo2VIY05mFyEntlmxqgSy2jkkcBSzGQnpAsA8pWJuKlOU%2FvtUfed0cqgdGjF%2FTkdfR1tb%2FyS6V7zW5LXPiow4%2BI6Tkxv4SqdjZw3M4I2BTwjiXIfpKk6sCzKMLCffUkifVPt8kk9vfS8e6MfD32uuNAM1tTN630Pty1PYplmCLdSNOPOML8UhXzQPw6u3PoWaHDArEBmbVCWGnYQ5vKaLPW04f45M6GFnYiGvOBNKDe2a6na5uFSUmYJqD0dcsKo34oVZ14wsKTwe%2FJ4d6MsPH%2Fbz1xes5yN5hpVnNy76ddKinO2WpMWEHPxnzhxCABwdg1J%2FcI9TBS0oP0VdAXqPbe2m1tlBU2z%2FlYPVFxcYvycM5BVV85BDYF3yRRrmyvAC3Mwz%2FCdwgY6pgHdNj%2FvRAj2wXfshMeKxIVHlL0%2FpsK%2BUT8L2qRgpsELbt3CjPuJEKX03GLs58IBdBDWoC%2BBWSZAVXsWCdh7aYzaRnsCo9jljtNW3C25pUHcgXWZarzYU0jDRQm3LzxKGKQxLpbPQ76C%2FSo8oZUmHM4mni%2Fx0llfkJTEHycOfMAnhoU8iDS5fPDPXZYzSO8dqpTD4uGaZcqZJQ5lrhdyi6628NKsm2em&X-Amz-Signature=c2246fd32df07eb60d61a576d8235288a821f49ce29478a07bab8708ec01a8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZM62WQF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ioIbMjulKUGt5HB2jWFxKMDVnih3w3IBVtW%2Bf2h%2FEgIhAOgx2KDgluzryNB0rKFGeqPrHB%2FG%2BgW6K5gCHJ7%2FBT3MKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO64tvaeGrnIpwhawq3ANvWJXu4PgsEACClCFMMCzwRjjH4msZ6pMgOi5dte9RTUCJaCt7qWvpCE25IJ432PGbChfmMhYmB3Q7HFWDoECHuDqRceTm9VPqPdkE5VFIKzmJGiddEwSb8ZvTn3pAoZGA6133EUxp0xh3Eab%2BcavNTYItclbpEYpRqIt4iD2X0zHSDmFigpU%2Bsb4Byh5e4vN2NgnCOqCswRKUsGYyHEZZv7zbq8YkmG4wmEKVNzg1fK9RTXrXeCPP9PkcYq52Evcca2c0LdbymwFqcZwfJw0pCM1oUjET29QZXUSJ842SayUQT1TorhXqBBhvY1S6j1BnbdtoVsn7SmWrPZwa4EoZu5oizbxwKo4xOc%2BQSQEntad4LJfcUBkohLzT%2BG2t3NDU6C8Vt0Z6QmHue0NXnm5F1HeihHjxtBtG1PNJ5n%2BRPItNKtHA%2Fd4WoJ4jUvVResmlOQe2J7oRXY%2F8iyutU6%2BumZ1yRUzq14uZtALN9vbtrRMrhOGlLTQlmpsxYsURm8kYMnBvEa%2BWOlT12itGcH%2FOGXNhm0lxdkj9%2FRBFCxDGOTfOGUJb2j%2BlYFX88HXli4WRZJdT5KZCB77hl09%2BSMwWER1NQtkYzvjNWQJ2Ay1oEldZ802TpH9KNrU3SzCw8J3CBjqkATTSr%2FkyCmwKCo7Il%2BWd5Aeg4TXDUcOdOLPcMuM%2BJuCf0rqvFG824Dbc5TYaTLFAKdbR26vCgk5fFZQ4lWv8IYd75PBQTYpuyRz4kA1zwCcB%2BzvrkWWnrujfNpkkAA2ji%2B3179q9Mdaav1FnuaXhJ7GnrTt4IK46sqWWKsUlJ7Ekd9BUnO%2BmgvsnJnYE5fOwFpxhqxaRjbT5oA41Bg1%2F9X98gU%2FA&X-Amz-Signature=9e5d473863634a248b26c18a31212b05d57f6b159806435e61421f12df79fc1f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
