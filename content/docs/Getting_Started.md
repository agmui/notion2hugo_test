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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBPH4TB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BU6E8QA%2FeoZAGDVjyV27d5Alw%2FFxbqiLV5Oaf2wsCXAiEArmN0E1YnlcM0n%2B6SjR6dvEJpCnfQ2PztNEQ9IOVwkwsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaIa0fZ1326CtUNByrcA1gZUQ3oDU2WqMsgb8WXwTHhq0%2Fz3ngNi4CvjLoEGSwmjXNLNNOZNabdtbU1cac28v%2Fkso1d%2FUbFmedwqEzHaVgM9L4RJYvYsPkH%2FCr3KbOotTKemMwSRC%2FLgoN9zMDWV%2FS0kNxHoon3JMZZD1NpirWC%2F3CDBXBsNihtE9GoZpRnk7Uai6OGUAIum1LGUji7J4KIoFQouRQnmVWKazFXAugWc9orx2tLhMa%2Bx1JAzwY9TTM9l0JRckeuYtyoNjeID%2FEZ2KXFC7tRZUu9zw8XzOTnlAMVEq9RjQnsoOLfsSDAIJLRhn0V2OhCMsAYij%2FhT988NE%2Bz%2BQa4YY6zwcPwuX0KlUwo2WtS0nA2Wj3qD2utxSnQkxX%2FiriHMZjt3Gcp8lpaAlikgtGSnl1kDEoUkcEr2qFzjcoglBCMi6n6ZxSxQu5ec4Zwty6oLJDBmdaHr3rsrKnNVbQXgt5CkcKtSJH6tWgDEOYuJrqBMGDVB1Gcqe9N6s6XxJ1uSmaxHRPjJHNam65t8Y2ytfTBLoKyQv7twQ4keJXsZXAmMCh3Zd657BF98adfHGK8KPZQR5NMFMmMH1HDLDBeNjN6%2BJ1fAO91EpKHZ%2BUVjpaJ%2BFDNMMb%2BUIUaTmZxs0L%2Fh%2FAFMPD7y8IGOqUBBiN9b9vT3mwAh0dqDuhEfBL%2F4wWFBXPYdnyyAmF%2FOUFg3E69jIZxCXO5Jzg6W4uXZt1QEayS0uswc9zXkIU9WxaiLyODrD8lRpwnmp9vD4hLXTwM2ZllslMXUuEwAe1iUPlUyl5gqivs3GCLLIXFbHF89owiMA0uDIPWhJVsYBfTyktTcnz%2Bl%2FuIVHNWmtHwtOHooDAi51RGucEaaVaJPm1nm5hX&X-Amz-Signature=63f238bba5e82fc7acf90b8e8406ee04439978632654e603098fce96389fd02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBPH4TB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BU6E8QA%2FeoZAGDVjyV27d5Alw%2FFxbqiLV5Oaf2wsCXAiEArmN0E1YnlcM0n%2B6SjR6dvEJpCnfQ2PztNEQ9IOVwkwsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaIa0fZ1326CtUNByrcA1gZUQ3oDU2WqMsgb8WXwTHhq0%2Fz3ngNi4CvjLoEGSwmjXNLNNOZNabdtbU1cac28v%2Fkso1d%2FUbFmedwqEzHaVgM9L4RJYvYsPkH%2FCr3KbOotTKemMwSRC%2FLgoN9zMDWV%2FS0kNxHoon3JMZZD1NpirWC%2F3CDBXBsNihtE9GoZpRnk7Uai6OGUAIum1LGUji7J4KIoFQouRQnmVWKazFXAugWc9orx2tLhMa%2Bx1JAzwY9TTM9l0JRckeuYtyoNjeID%2FEZ2KXFC7tRZUu9zw8XzOTnlAMVEq9RjQnsoOLfsSDAIJLRhn0V2OhCMsAYij%2FhT988NE%2Bz%2BQa4YY6zwcPwuX0KlUwo2WtS0nA2Wj3qD2utxSnQkxX%2FiriHMZjt3Gcp8lpaAlikgtGSnl1kDEoUkcEr2qFzjcoglBCMi6n6ZxSxQu5ec4Zwty6oLJDBmdaHr3rsrKnNVbQXgt5CkcKtSJH6tWgDEOYuJrqBMGDVB1Gcqe9N6s6XxJ1uSmaxHRPjJHNam65t8Y2ytfTBLoKyQv7twQ4keJXsZXAmMCh3Zd657BF98adfHGK8KPZQR5NMFMmMH1HDLDBeNjN6%2BJ1fAO91EpKHZ%2BUVjpaJ%2BFDNMMb%2BUIUaTmZxs0L%2Fh%2FAFMPD7y8IGOqUBBiN9b9vT3mwAh0dqDuhEfBL%2F4wWFBXPYdnyyAmF%2FOUFg3E69jIZxCXO5Jzg6W4uXZt1QEayS0uswc9zXkIU9WxaiLyODrD8lRpwnmp9vD4hLXTwM2ZllslMXUuEwAe1iUPlUyl5gqivs3GCLLIXFbHF89owiMA0uDIPWhJVsYBfTyktTcnz%2Bl%2FuIVHNWmtHwtOHooDAi51RGucEaaVaJPm1nm5hX&X-Amz-Signature=927296ffeea10adf6ae482820efe595c90884b2a0af304906e0443c9d3eff1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBPH4TB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BU6E8QA%2FeoZAGDVjyV27d5Alw%2FFxbqiLV5Oaf2wsCXAiEArmN0E1YnlcM0n%2B6SjR6dvEJpCnfQ2PztNEQ9IOVwkwsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaIa0fZ1326CtUNByrcA1gZUQ3oDU2WqMsgb8WXwTHhq0%2Fz3ngNi4CvjLoEGSwmjXNLNNOZNabdtbU1cac28v%2Fkso1d%2FUbFmedwqEzHaVgM9L4RJYvYsPkH%2FCr3KbOotTKemMwSRC%2FLgoN9zMDWV%2FS0kNxHoon3JMZZD1NpirWC%2F3CDBXBsNihtE9GoZpRnk7Uai6OGUAIum1LGUji7J4KIoFQouRQnmVWKazFXAugWc9orx2tLhMa%2Bx1JAzwY9TTM9l0JRckeuYtyoNjeID%2FEZ2KXFC7tRZUu9zw8XzOTnlAMVEq9RjQnsoOLfsSDAIJLRhn0V2OhCMsAYij%2FhT988NE%2Bz%2BQa4YY6zwcPwuX0KlUwo2WtS0nA2Wj3qD2utxSnQkxX%2FiriHMZjt3Gcp8lpaAlikgtGSnl1kDEoUkcEr2qFzjcoglBCMi6n6ZxSxQu5ec4Zwty6oLJDBmdaHr3rsrKnNVbQXgt5CkcKtSJH6tWgDEOYuJrqBMGDVB1Gcqe9N6s6XxJ1uSmaxHRPjJHNam65t8Y2ytfTBLoKyQv7twQ4keJXsZXAmMCh3Zd657BF98adfHGK8KPZQR5NMFMmMH1HDLDBeNjN6%2BJ1fAO91EpKHZ%2BUVjpaJ%2BFDNMMb%2BUIUaTmZxs0L%2Fh%2FAFMPD7y8IGOqUBBiN9b9vT3mwAh0dqDuhEfBL%2F4wWFBXPYdnyyAmF%2FOUFg3E69jIZxCXO5Jzg6W4uXZt1QEayS0uswc9zXkIU9WxaiLyODrD8lRpwnmp9vD4hLXTwM2ZllslMXUuEwAe1iUPlUyl5gqivs3GCLLIXFbHF89owiMA0uDIPWhJVsYBfTyktTcnz%2Bl%2FuIVHNWmtHwtOHooDAi51RGucEaaVaJPm1nm5hX&X-Amz-Signature=03a45dfe1996313333357a3258f9258b4efaeeb99d5740c97db31d4148f8b588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPPP2QI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwUp7VT2vY5wFf198y0NKY%2F5%2BAYTDK1C%2FzY5oEp9mTJQIgHonT%2FMMSnAnkXTz4CDrZB6cr0FmprldbxIWEPhA7YekqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPQAlH%2B4yVJbr8DiSrcAzUrQ8H78IuKnXaM%2BB9blMbGlsTycbxe8%2FYroSZDPiTUG7vVe%2FM6dv%2BOQ1zT2hn5NqRtpTpv17Ly%2F4tI2n0CfgOdjFBNouDjTAKyGKFFwXuAGKhCrzfnhk8QM1f81Nf9DnRuJ3kA2DEmFze64Ke6nYGgIZPiUzxnqPxPG%2BdDAiu2LEHbCC%2FtlKuqyRzzVKX8QHT6ZxXq2SLtjFvhdGOQ3svs5u1SrSL4OUAs2luLAs0nJdyEyWgmsvsDwp5tBvDTwoybpoEcROcNLQqwO9cctsymQ7yuEBr%2F5Wz5nO4jKjUloN9SZhZ5mRHbiVeKLn5xJ5pkhJgpdBivMXknK8OqQC6UfQxC22DdXLKFY1mHfboeUya31lc4PraqZPX7Ff1nHu414B%2FHBaQjYYr9OgvlN1czb8fhla8vUa2wABF3HpN0539LDdBRwwRQaUqI9EiVZxhpKVZVwG0h71kNb599UQP3jOTkA4wnL3PhQR0U56sB3Tx9S%2B80uGxky4hbllrNfsoC5XmRaxNoOvVbMVSt7MJ2T83hQcCpXDqH9e9WQDa3wNHdoGrTXRXgNVrlNJ4gID4QVStZoIY3alyWNOtQKmoFr3uj8h6cupeNMD4kyFPqe2OGMBvriuqqLXqAMKL7y8IGOqUBw7oTnRi%2FdWAsL9HuDUp58Cu37DDpUpTxoGJNiC%2Bb9IOZULhrbFR69hQoyU2Xpa0fUbEmKiAFfjZXodOPBxwb8FJ65IynR%2FZBnPy8Qk9Y9iyRikig4edQlqSQpKKRB5UwlldlLfaWCtrIoWb9v1ipFS8OV2UF%2B64C8qn2pj1MM0QLGdHQV8eYvYvnhR30oZd77mDHcy%2B3foN%2F3H45lSfMazSjBr7s&X-Amz-Signature=4751569103ee11fe49bbc088870c006343214ec5a799278fe8c9a325278f68f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOKIOSI%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbR5ejY73m2T4I0rCBW3x8WcB79YXH3jm2virTSD%2BF2AiAal%2FtOEzfAxpMwmfHFWsnsyNRcA3ldXSmkJ3kbrHWpzyqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjUIUZY0l%2FvZSEE%2FmKtwDOfhNy21rx6ODVfiKtZUI0W1U03FucfNU3NouZU7XVCz2stltqEmRTS3UNBrrsvv%2FyvulJICp%2F5mcBz%2BrzYti4DK59ov7TLXyo9HDYfhL7GxmjjLpI%2FiWa1glHvFpERhiZQ9%2FW8%2FbWBO9SDM8lZUcfaDkpKliDf6QlT63cI8U8NK%2BHVLC0fRSR%2FNrpec9Piz8HeUHy5bdU4pkCvF7s2g3zat7NjtBiGyEFKuUXgyZGJ2KxsPzf8P6nwtKUoBuwri4Uay6GxQGCMkzkjaoHlUgT7PDu%2FSSGvrEQiHvZGDtq9RjKKTCw%2FNlNroAeRU1szqNSmqEjS%2BMoac%2BV8APJB8MILHPjsfMCwCjx9YymTbwc21tpDZ9pUz2ImvF3cmtQ88TLQ3oV0MEsG%2FJRB%2BR2Cs9NtuDpaMhxBmligLxsUK4H%2FnMXhKI%2BhIQWrcp9WKLGqqqxcGdmR3UxWua0EU9YuGfT5yitxXoXCORhyrnnrGi6t2%2FKqP360ktDwzdiI3mG3vpM3VtGfT%2F7vrpGIH60f038DbIfypm%2Fsp1umPP2PcculFz1dDBnliOazIoOE6QXF7Tt0vaYSpYrrkM4ZG9I%2F67pZRWdKJrEyYO4UNlfV8H1J73CfhXGESJrHuFaIgw%2BvvLwgY6pgG9Q%2FuZZ%2BqInFSeJd5beulzGfUox11kOYuea43nm9VGJ5BakA5lJpISP%2Fxj62Q1utrdBZZzxMuS2vsRrKaQv0MWQ6sCtwmkMRzZXgie%2F19yGr0JsMzGaAwiSwDIE14OlZAebhiHbeAFsbvKtOPkCeWFM%2Bf%2B8M8bWimla3UBGVAUluJQaNqfeetnOUN4fbezdWQvNzxLAR1%2Bulv8YODOp%2FUfb5Tn%2F1F9&X-Amz-Signature=de5abcc9cc1b617b3d9ba465a8a919d59278060b12e734e34dba08c451bc72fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBPH4TB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BU6E8QA%2FeoZAGDVjyV27d5Alw%2FFxbqiLV5Oaf2wsCXAiEArmN0E1YnlcM0n%2B6SjR6dvEJpCnfQ2PztNEQ9IOVwkwsqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaIa0fZ1326CtUNByrcA1gZUQ3oDU2WqMsgb8WXwTHhq0%2Fz3ngNi4CvjLoEGSwmjXNLNNOZNabdtbU1cac28v%2Fkso1d%2FUbFmedwqEzHaVgM9L4RJYvYsPkH%2FCr3KbOotTKemMwSRC%2FLgoN9zMDWV%2FS0kNxHoon3JMZZD1NpirWC%2F3CDBXBsNihtE9GoZpRnk7Uai6OGUAIum1LGUji7J4KIoFQouRQnmVWKazFXAugWc9orx2tLhMa%2Bx1JAzwY9TTM9l0JRckeuYtyoNjeID%2FEZ2KXFC7tRZUu9zw8XzOTnlAMVEq9RjQnsoOLfsSDAIJLRhn0V2OhCMsAYij%2FhT988NE%2Bz%2BQa4YY6zwcPwuX0KlUwo2WtS0nA2Wj3qD2utxSnQkxX%2FiriHMZjt3Gcp8lpaAlikgtGSnl1kDEoUkcEr2qFzjcoglBCMi6n6ZxSxQu5ec4Zwty6oLJDBmdaHr3rsrKnNVbQXgt5CkcKtSJH6tWgDEOYuJrqBMGDVB1Gcqe9N6s6XxJ1uSmaxHRPjJHNam65t8Y2ytfTBLoKyQv7twQ4keJXsZXAmMCh3Zd657BF98adfHGK8KPZQR5NMFMmMH1HDLDBeNjN6%2BJ1fAO91EpKHZ%2BUVjpaJ%2BFDNMMb%2BUIUaTmZxs0L%2Fh%2FAFMPD7y8IGOqUBBiN9b9vT3mwAh0dqDuhEfBL%2F4wWFBXPYdnyyAmF%2FOUFg3E69jIZxCXO5Jzg6W4uXZt1QEayS0uswc9zXkIU9WxaiLyODrD8lRpwnmp9vD4hLXTwM2ZllslMXUuEwAe1iUPlUyl5gqivs3GCLLIXFbHF89owiMA0uDIPWhJVsYBfTyktTcnz%2Bl%2FuIVHNWmtHwtOHooDAi51RGucEaaVaJPm1nm5hX&X-Amz-Signature=97bc49d9b91e918acbfc046587018ff715ffaec871eb774bdb6c96344dda7948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
