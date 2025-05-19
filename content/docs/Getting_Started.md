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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIXX3AX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcTmTDysD0ikZ1uJY09j2f%2FYq%2BBdBJkLutAPzqwnrizAIhAL0EQ%2Be900V5FEtxK0efdXz0gCSDq%2BIM2xBuWbgqv7pKKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXhsTR5WO6CbH4RAq3AP61LPEsQPC3KWHOSYMT6ZJ1AsmPeTDhzXPQK9qSfBhS3NkXXIi%2BIgkBWjASKYFV4BBAy3LPrMEAoP%2FPv81XdYwvy2rO0K1C3JJjQ%2FQ2qSFAcE2CFaTe627hhEkf8hEnZk5JfKtDd6efCjWc6%2B19U5gfTELkRNK9BycLWB9QCbSj6j20phPr45aW8BtW4ERPQIE8yAqL3xCRK%2Byvofy7qGh4cVBAf6N%2FicJgiiDvUOrF%2F5giHNgoC4GMDXc3KqvGqW88RDKvDjkfyg0%2B0KMS%2By370nhV%2BI7UNVsRcLBCG1ONNgU7NKgx3rr9DnX4dtnYxI%2FQimhbUL1O%2BlPmfM8QQm7BKFOWX%2BXWs61aQUduNZXt%2BIaeoEQ%2BpY0NfoQ%2F3oOsUH1SlT4J0ImeUzA8mTolD9O8tCZsoJQu%2FD5FZecRtE0cyfpvZ8IfIUQUjesPFTzl8eis8CSmGn9S1MtTmwo215NYZnhviEdRpREnn1BctWiWtUdGBT%2F8pA6p0C5SKUBzhx8U1ecvtCIF5U5sidzXgC8Yywcszv0ZYfMELFLCYWh4QlH2rJzeGIf17shYHtEWiQNUPmFGN%2BNylGNHQndXwvySmzEYrIOFqRPbHM0UDEv1UW8N%2BFo4HKkxBeiBzCz367BBjqkAVXD2LIOw3guC%2BOaZPRsxcCiAbrr4Qc4H6W%2BeWL%2BIWdn9h6fCLFEKPqPQoiiu7agCCtJzVWWNAA%2BUoxoXvyeDSSgf4yvI10%2FCdvUuqZ3vTCoq8pAsTtJWGdA5ArFsKBEaco%2FlnzZPHombR0bN2JfrPOuyGpWWzrrdslkUMhOnXaeMI9XKTlHUdl0liBvMgu5e6L%2FPjaUWuIXgjtW%2BLzt%2FFGsg2TM&X-Amz-Signature=3bd4567fa18b7f4e40e88193f6dfba430cf750ddfd6911fbc70d807eda9f0fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIXX3AX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcTmTDysD0ikZ1uJY09j2f%2FYq%2BBdBJkLutAPzqwnrizAIhAL0EQ%2Be900V5FEtxK0efdXz0gCSDq%2BIM2xBuWbgqv7pKKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXhsTR5WO6CbH4RAq3AP61LPEsQPC3KWHOSYMT6ZJ1AsmPeTDhzXPQK9qSfBhS3NkXXIi%2BIgkBWjASKYFV4BBAy3LPrMEAoP%2FPv81XdYwvy2rO0K1C3JJjQ%2FQ2qSFAcE2CFaTe627hhEkf8hEnZk5JfKtDd6efCjWc6%2B19U5gfTELkRNK9BycLWB9QCbSj6j20phPr45aW8BtW4ERPQIE8yAqL3xCRK%2Byvofy7qGh4cVBAf6N%2FicJgiiDvUOrF%2F5giHNgoC4GMDXc3KqvGqW88RDKvDjkfyg0%2B0KMS%2By370nhV%2BI7UNVsRcLBCG1ONNgU7NKgx3rr9DnX4dtnYxI%2FQimhbUL1O%2BlPmfM8QQm7BKFOWX%2BXWs61aQUduNZXt%2BIaeoEQ%2BpY0NfoQ%2F3oOsUH1SlT4J0ImeUzA8mTolD9O8tCZsoJQu%2FD5FZecRtE0cyfpvZ8IfIUQUjesPFTzl8eis8CSmGn9S1MtTmwo215NYZnhviEdRpREnn1BctWiWtUdGBT%2F8pA6p0C5SKUBzhx8U1ecvtCIF5U5sidzXgC8Yywcszv0ZYfMELFLCYWh4QlH2rJzeGIf17shYHtEWiQNUPmFGN%2BNylGNHQndXwvySmzEYrIOFqRPbHM0UDEv1UW8N%2BFo4HKkxBeiBzCz367BBjqkAVXD2LIOw3guC%2BOaZPRsxcCiAbrr4Qc4H6W%2BeWL%2BIWdn9h6fCLFEKPqPQoiiu7agCCtJzVWWNAA%2BUoxoXvyeDSSgf4yvI10%2FCdvUuqZ3vTCoq8pAsTtJWGdA5ArFsKBEaco%2FlnzZPHombR0bN2JfrPOuyGpWWzrrdslkUMhOnXaeMI9XKTlHUdl0liBvMgu5e6L%2FPjaUWuIXgjtW%2BLzt%2FFGsg2TM&X-Amz-Signature=4bef44678a8078bf72b751f15cc71d4f5d456c147979696ea06120db6417f91b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIXX3AX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcTmTDysD0ikZ1uJY09j2f%2FYq%2BBdBJkLutAPzqwnrizAIhAL0EQ%2Be900V5FEtxK0efdXz0gCSDq%2BIM2xBuWbgqv7pKKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXhsTR5WO6CbH4RAq3AP61LPEsQPC3KWHOSYMT6ZJ1AsmPeTDhzXPQK9qSfBhS3NkXXIi%2BIgkBWjASKYFV4BBAy3LPrMEAoP%2FPv81XdYwvy2rO0K1C3JJjQ%2FQ2qSFAcE2CFaTe627hhEkf8hEnZk5JfKtDd6efCjWc6%2B19U5gfTELkRNK9BycLWB9QCbSj6j20phPr45aW8BtW4ERPQIE8yAqL3xCRK%2Byvofy7qGh4cVBAf6N%2FicJgiiDvUOrF%2F5giHNgoC4GMDXc3KqvGqW88RDKvDjkfyg0%2B0KMS%2By370nhV%2BI7UNVsRcLBCG1ONNgU7NKgx3rr9DnX4dtnYxI%2FQimhbUL1O%2BlPmfM8QQm7BKFOWX%2BXWs61aQUduNZXt%2BIaeoEQ%2BpY0NfoQ%2F3oOsUH1SlT4J0ImeUzA8mTolD9O8tCZsoJQu%2FD5FZecRtE0cyfpvZ8IfIUQUjesPFTzl8eis8CSmGn9S1MtTmwo215NYZnhviEdRpREnn1BctWiWtUdGBT%2F8pA6p0C5SKUBzhx8U1ecvtCIF5U5sidzXgC8Yywcszv0ZYfMELFLCYWh4QlH2rJzeGIf17shYHtEWiQNUPmFGN%2BNylGNHQndXwvySmzEYrIOFqRPbHM0UDEv1UW8N%2BFo4HKkxBeiBzCz367BBjqkAVXD2LIOw3guC%2BOaZPRsxcCiAbrr4Qc4H6W%2BeWL%2BIWdn9h6fCLFEKPqPQoiiu7agCCtJzVWWNAA%2BUoxoXvyeDSSgf4yvI10%2FCdvUuqZ3vTCoq8pAsTtJWGdA5ArFsKBEaco%2FlnzZPHombR0bN2JfrPOuyGpWWzrrdslkUMhOnXaeMI9XKTlHUdl0liBvMgu5e6L%2FPjaUWuIXgjtW%2BLzt%2FFGsg2TM&X-Amz-Signature=2856a8b4f3589db5c7f87898fe02adc6b8de4847157a28b1d39055009a701ff5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2WWJ7M%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdrxJjKYcJmPuF2RRA20jwuPcZIgh%2FhGPXM0JfQBBUogIgWUqe6%2FCxu%2FG%2FzNdTY%2FBl7sHAjr3gJ8xMzLfVqIU0WJkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIP%2BvEPPW1LBwn6SJCrcA%2FTOHX8vJqv436jVPC1M2HNy9M3t4%2BVbyIzGRCt%2Fy6OHOqxhZr6ReJjW%2BQ5Mq7KNqtlznbihzf2RCVpLoG%2FwT%2Bf1blPiJVZlCEzQAXtzdC3h46jCMZ6DbU%2BtBnW6w1GTZ2g4TpN2jt9eAZkrp3xpld6fkHlUDv5ASsRPF3vMekTyO1nYmXsy%2BUWBPJ%2FTOiaFefDDvAMPXfUZQcNCrFtRQXSH90jWr0K6AdFZjhIeMVxbbAHDmzAJu1m94HfWV4g%2FxcvXVu0lHT5gOXZZQ6wT%2BrxyRLzumu2IuOM8mA3DEkBxgToiYnHVAh4AdPR46bTvzSKVh7lL49LspEySI%2FtceqNgeoKCTrvgU87esYtDE0g5QVeyRvc2khtYaJzqVnUO6gPqbKP%2BDXTEiqZJTPnlzgN1uwYJ%2FbqBtNzxJPcZJk8%2F9lQ9gjPQXy2DN1wAbFzeuNt3H5QBcCDyUIb6JMT1L0u4GhTMvtfbfL8cHrDH16Wz5%2BPN3KDxaZJ5tZvM%2BQeyinrfmV62fbLffXgSUeGROlQxlvIy5qhoSktmmu%2FouBllpz1%2B1ilRiI%2F1WZAvCYDKVL850oEh9Onim0CZOzNrMQGXK%2FJ%2F56JBVsa%2FvZ3KCrWu%2FddvkkMLQTixvlD%2FMPTfrsEGOqUBqSoEAc5ubfwnDs01DichwJuBiPEBHrdLYvj%2BnjIxN1rtrCRvqkV%2Fw5kwTxUwhXWaRB83fgPl7Z7piRR5W%2Fyl43dmTcpbcVBVKv8VRGt9iRXhUJGkABNPuVra%2Bcoawx7F6jt5IROOj4Gx4lbla%2FEejYIvgw5FfuwT6UDB5cFgy4cv0WCDvS6Seyy2I3oq89%2B%2BCDB9g%2Bc4vXrXsNHpZTT9gq11C%2FZj&X-Amz-Signature=3c9651d7419648c4aa140883fb9400f0fbea0b654b810404bc82461d5db8c7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO34P34C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7ZHNm3gecopr458475rAA9pHZqQYtVcPb5DW6jualrAiEA9Ov6BYuS82T3%2B%2BIZEUr4HF4S%2B5v17oYtCq7DlHu4UQIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFefXgtGZpUXtK9lPCrcA0W9doF%2BdfzeNqLZx0vZeBWHE1HV%2BaYPEja81VcpJjD4XUn2HAZtkSk9iJ3nKslUnLVNaDEw7h66BTN0Ndnw9f15MP0Ug3tzdFn5rsDg1daRFaDiG1lTVHFCrNkEE%2FH81mMxz%2B0m0IxYy%2FoTGz47uXMkvZXNPZ%2BNMNvcSWnB1zYK02iv%2B5ACO8kzutKfAt0rDpHbEzHsGvFtcdP0OMAfCCW7RTH2qiPmgI69XlWmj%2FyRHX%2B%2F7ZmOVgAjm777%2BAgTGpvra4N5hYW7lisvef7dfiFJwVup8aIqzTcrkafHk0jiVxFeXPcHeVlwXb5IwOdqKJjEhtKt%2BgWTAJ8sLKdYVwBuyuC2gpgYJ1lBm8rGTBhk9q7ffS4qtkuyCXvm4P%2Bt9J4sxhbNZw1%2FQA4rdm8GrClF6X0Tfa%2FSVnnaaLxBQ%2BIAnYQzfGxFA2jZSksTQhf8il1e9NDPsIQWbBiM8sRTQ4plIqvazCgbyOHkVsZ9mOVCvdoKxaNQLvtiwZ22NYPCUKK2vuv1Rq9WY8BJSsdrvzmDnsnl9n3v4s0pYUPiIqMb1fVlcsJYTCh5MSEpYYxE00UblBmkTivVuFaSNKOq%2BpQ4YKvEou%2F99MsQZzgl2kvpb%2FIB65oUXZCgu7DWMLDfrsEGOqUBI6SMfOyZgGaRg%2BRA9%2FIF22aC%2BmBDWS0jLZdh%2BGSaDSmAikM%2BCmM7s2D5vouZMJPyvz6BGLGgPFs%2FnqVNrL%2BdVwpVnixr9mS1X1ss33hORpwwxqVrdw3oIYEs%2ByaKphkZd%2FIq9UJ%2FEdyr4VG%2Be1s5%2FvKiF1TTdATvuu6ASoTCOcpovIY%2B3fLz2hXTJ5YojMyVnxiS7gT1i9eGRuRZo6r0YXLKphDj&X-Amz-Signature=91648b1fe0676fa9f56d81098aa6622bb6bf449e08eedcb65bc93137eda0f5af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AIXX3AX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcTmTDysD0ikZ1uJY09j2f%2FYq%2BBdBJkLutAPzqwnrizAIhAL0EQ%2Be900V5FEtxK0efdXz0gCSDq%2BIM2xBuWbgqv7pKKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUXhsTR5WO6CbH4RAq3AP61LPEsQPC3KWHOSYMT6ZJ1AsmPeTDhzXPQK9qSfBhS3NkXXIi%2BIgkBWjASKYFV4BBAy3LPrMEAoP%2FPv81XdYwvy2rO0K1C3JJjQ%2FQ2qSFAcE2CFaTe627hhEkf8hEnZk5JfKtDd6efCjWc6%2B19U5gfTELkRNK9BycLWB9QCbSj6j20phPr45aW8BtW4ERPQIE8yAqL3xCRK%2Byvofy7qGh4cVBAf6N%2FicJgiiDvUOrF%2F5giHNgoC4GMDXc3KqvGqW88RDKvDjkfyg0%2B0KMS%2By370nhV%2BI7UNVsRcLBCG1ONNgU7NKgx3rr9DnX4dtnYxI%2FQimhbUL1O%2BlPmfM8QQm7BKFOWX%2BXWs61aQUduNZXt%2BIaeoEQ%2BpY0NfoQ%2F3oOsUH1SlT4J0ImeUzA8mTolD9O8tCZsoJQu%2FD5FZecRtE0cyfpvZ8IfIUQUjesPFTzl8eis8CSmGn9S1MtTmwo215NYZnhviEdRpREnn1BctWiWtUdGBT%2F8pA6p0C5SKUBzhx8U1ecvtCIF5U5sidzXgC8Yywcszv0ZYfMELFLCYWh4QlH2rJzeGIf17shYHtEWiQNUPmFGN%2BNylGNHQndXwvySmzEYrIOFqRPbHM0UDEv1UW8N%2BFo4HKkxBeiBzCz367BBjqkAVXD2LIOw3guC%2BOaZPRsxcCiAbrr4Qc4H6W%2BeWL%2BIWdn9h6fCLFEKPqPQoiiu7agCCtJzVWWNAA%2BUoxoXvyeDSSgf4yvI10%2FCdvUuqZ3vTCoq8pAsTtJWGdA5ArFsKBEaco%2FlnzZPHombR0bN2JfrPOuyGpWWzrrdslkUMhOnXaeMI9XKTlHUdl0liBvMgu5e6L%2FPjaUWuIXgjtW%2BLzt%2FFGsg2TM&X-Amz-Signature=369893b57452a5001a608839579975817cb313564a96f9c1b4b49b74fbeeffa2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
