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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XKWVC4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK4nJ90lVVWquR0FKDLZH6Is6P5vmfRcqSQ%2FamEik40AIgKw9fKo5e4tMUbNxRU%2FnCYxPSnSD1jBNtziC9whuYxF8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIQ%2Bc%2BKyHlx5DwG5CrcA9UuLcOuSPTAFFTtTBJV9mL6nvbfXdQGbQfss9A5vqFVvDuDfGxkIR%2FC%2FvLS%2B5a%2BGh4Q2Dv5rwaC31soOnfeSX1%2Fznpz0VikDTz7u%2BAhZDO1oRh5gsYdTzCuJrVW9FRtZnypdyjnlYQUnA%2FqRhUZz3sBTxtrZsI8UEaEsdvIoTRj%2FKUqdC9lazCJ7d%2FWADTrXuzHjV%2BZXN2U6BrG2KWHwWKqJuy4dVdqM7OzAbRuXvF1KRp%2FkjEHbqo6mB1QkUCW6yTof0IPRHMh1pzmhmn7JUx9folrrdoRbxaEHBznmfr2TxaElLPF6%2FxbHE6qmF%2FC3Xfh6HgHi9Z6TZ%2B0FTIjnnWNFIv9aE%2B7T0PCPVUvfTl%2Fq%2FQP6vAx5IEuc9dktsbbwPHksPb%2FtIoJyWRQrRdrnM05ybDJj9ESjWQs5Qfzpi1yt1DI%2FdrqiWk9v2aL5PdIoepAOqAWd4IcwuqzuRvvdbWWHMVNQmkpRG3DPxsnlBJdi8F8KkJJ%2BxKkwg7yyTQdwLGcAIkcjHAJ9xgFt%2ByFCYH9tBlQnL2UM0Z8yO35vAf1cOdFGJU7hihADMfgBc6TOscpgbbj8Nh1bNE0jkO9QALlD69JGNfKpdAWhN5DR1yBvrjlHlbscibO2TwnMNeN3r0GOqUBuTMVaDX1GKr6q7bDk9uJ9FNaDlqTbPkN%2B0MLIpD9mwyMObPhzfc6CiqPVJ%2F%2FiXsxvbEzilUKWf%2F%2FiTDcp66%2BTsd%2FEWZdjwJniuTnqZDFTpHgwbS1ptreHVpEBhrtMXk5rlCbAV27eZbHS6Q2UZ5PjVSsr8n%2Bc0pJ9b6OUaYfV5YIvR1SrqeX6CD4BAs4UdPXt66yiXnt1K0%2BiMcBniuAPv7SISS%2B&X-Amz-Signature=c28eed7587b6cad301b6ef10d8504e29b1541cde761f646217504abc6e24780d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XKWVC4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK4nJ90lVVWquR0FKDLZH6Is6P5vmfRcqSQ%2FamEik40AIgKw9fKo5e4tMUbNxRU%2FnCYxPSnSD1jBNtziC9whuYxF8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIQ%2Bc%2BKyHlx5DwG5CrcA9UuLcOuSPTAFFTtTBJV9mL6nvbfXdQGbQfss9A5vqFVvDuDfGxkIR%2FC%2FvLS%2B5a%2BGh4Q2Dv5rwaC31soOnfeSX1%2Fznpz0VikDTz7u%2BAhZDO1oRh5gsYdTzCuJrVW9FRtZnypdyjnlYQUnA%2FqRhUZz3sBTxtrZsI8UEaEsdvIoTRj%2FKUqdC9lazCJ7d%2FWADTrXuzHjV%2BZXN2U6BrG2KWHwWKqJuy4dVdqM7OzAbRuXvF1KRp%2FkjEHbqo6mB1QkUCW6yTof0IPRHMh1pzmhmn7JUx9folrrdoRbxaEHBznmfr2TxaElLPF6%2FxbHE6qmF%2FC3Xfh6HgHi9Z6TZ%2B0FTIjnnWNFIv9aE%2B7T0PCPVUvfTl%2Fq%2FQP6vAx5IEuc9dktsbbwPHksPb%2FtIoJyWRQrRdrnM05ybDJj9ESjWQs5Qfzpi1yt1DI%2FdrqiWk9v2aL5PdIoepAOqAWd4IcwuqzuRvvdbWWHMVNQmkpRG3DPxsnlBJdi8F8KkJJ%2BxKkwg7yyTQdwLGcAIkcjHAJ9xgFt%2ByFCYH9tBlQnL2UM0Z8yO35vAf1cOdFGJU7hihADMfgBc6TOscpgbbj8Nh1bNE0jkO9QALlD69JGNfKpdAWhN5DR1yBvrjlHlbscibO2TwnMNeN3r0GOqUBuTMVaDX1GKr6q7bDk9uJ9FNaDlqTbPkN%2B0MLIpD9mwyMObPhzfc6CiqPVJ%2F%2FiXsxvbEzilUKWf%2F%2FiTDcp66%2BTsd%2FEWZdjwJniuTnqZDFTpHgwbS1ptreHVpEBhrtMXk5rlCbAV27eZbHS6Q2UZ5PjVSsr8n%2Bc0pJ9b6OUaYfV5YIvR1SrqeX6CD4BAs4UdPXt66yiXnt1K0%2BiMcBniuAPv7SISS%2B&X-Amz-Signature=620148269a831e3e35038676ae89a2a76e4b632deb6d42d78887bb514d107acb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THX7UAGH%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXdZZrtczE7Y94gHYvpYyLOYa35uQt32jIAs9eybQK%2BwIhAM9kAPzEf9j8bpslaQ%2Bs5%2B38CzudrGWN4SGcIYUuJnAbKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFz9G328U323kV8mAq3ANgeZIBLg0yyW7QiqsQz%2FcB7jt%2B4SitYkp21tHkRTrD1vgqedynEL9EX6VAiVflD3j%2F8vJO0TPGAegeYrTPv9jGvrz%2BuCJW0xjjrbaA1Le3z7vEcKiQtEu4Xf5yHFzfk5W0b6%2BOaqnylh4oN2%2BP5sC%2BQegV7TWma0wv1bPWGGz7C3mynJrN1GE3L5304g1RnTWgkXiJtCxhQyQbeI3pNTWPty5uNmAHmReNbZ616IwbVkGcMpOWLf7aheQf%2B1rkK4dSnD1Jyx0pYAPEhSxaq4GmRswYb%2B9Gq7IoWrmzxADDHuYVzVaOSq4%2FjqO%2B4MIzEUC9zw7ShiG9YviaXAiEHF2M6kdMgI87w%2Bb7AeglYjUJkDFidMoDFecp%2F0lxpQaVs4Q2tGlsNdNf8pOp3xyREiLC%2F5i3VzgOADYmsbMuCsiiKGpoQItEj1ABssMt9S9oRMSDyd7HefvavxvLoeNn90Wu156explZMgoigsesOduEwVt6Ie3ttsRZg2pqKftbPyVzCQt%2F5TbDyTxgU1V9ALaY%2FjUB0qKgNDzrgvrq283gOaXMJTwF15q%2BnwstYxrJjfUcCWWlt66kwmuFcm2ERJiCHLfxhhyLX5rqOovy88qOXB1nxRN5w93JGgjgcDCkjt69BjqkAccZQfZCYkXFtPRHIHnprD7ls%2Blox5uZbFQh%2FdM0%2Budz8rncAmswO9kK85nL%2BdysN1%2BCnO9QDI2kF4tl2hqs%2FCRNSgPKIGzWmEinHDpxS%2Bnanz4F9OdR76qnPc6UXuFJ2dRmNwgf29Zc2gGnZoqetKeO15FHT5aVli8pW%2By2LfZ83O0ouoQ83qC7kMzlNUdoqePNkLKW8hpKC6EXPo8fimTTskcD&X-Amz-Signature=d739c6a026ccb56734d30059e31224ba8ca752858d06a31088c549ac87ade9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZGFKXP%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwRWDgUMtPwZ8AO3ptVf8eIx1%2BpKP2II9RkcF9EfoX8AiBehJDGnPlLyGh6irf3TOzSgcfn5lWTB08aycHoQp7c%2ByqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFMaGly66wvLE4OZhKtwD4tj5n6zQX0T5a%2FY0YrC2O1Q9EpAkta9YVu6yfvkuyL5effI9L85NckSMpHjcwSlNsY5nrlwomf1S2yhDi2j%2B6s5GW%2B19zD5Zo4RQrR6PjflQIHwZWGSBwqBJfaj5JFP4u3pv3TtwRUAD%2FPk7qA6KWZVYC00DJOeqF4nApIPbEXQPa2A6cRwTvjKYomlXVE5v7bLXn68GVLNA9Q7bodZozHf0j%2BNM2rQCGferVOY3HP8eFiYrXCA5LBnk5Ln9QZzCGCRqBxFLptzuAdRzqdMpX%2BO99sLiOPw%2BOCw9VE2TOZWHaiuQ7GbsyV3iHHpYrdZFPmgFvR2a%2Fbk9M3D05eTl9lSHAfWVrA0CULgdH9H3GfmjWmXpdld4zIM8jF4Q0EVRPF7JUM4ICxr0UBPm8ZsYU24n0PPPguoS0%2BWFS84vPR0qevfpwr3NgNHRtKAJjX9HwA98%2FTyZzINta%2FMlZkwXTb%2BiSNx7HD9WNs0Jgnoh6Kg2yYTblxPL27iP3ATCun9wBpBqSdFHmGMMXFS7ZQwB4eoj7bTe40IM9RiiU7p3NnSR%2BdL9110pL7p0Y%2Fs8J9S2bnYzaa%2FZwvr30vozOU6uloR9pI11Nqr%2F3nKj%2BRt4BVgF3IfZZiBXMt4snvUww43evQY6pgG2WfqBxA4bD8DyL8bF4u%2FgyEiRkRQ%2Bth%2BVK9bMYiB1SRB1wrA0gmocVv9dHvSwanzJ%2BcmAPKpFNL%2FgHmfMXXqeDA7xSBPXhfhbWzC7akVA9NvDTTZGEu87wgDZ6nzgJjysYq3qD%2FkaoOv94j2FPojIwbGcZLR0GsU3ciVrE0mnR5ex61W3NScJawfL%2FU5bN81ZnT%2FkP9cPvGzuPjywxr133JTvWXjO&X-Amz-Signature=d49f99cdf0092bfca63edd17ea499c5677a48aa78da07a490d46ff0e9313155c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2XKWVC4%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T210613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK4nJ90lVVWquR0FKDLZH6Is6P5vmfRcqSQ%2FamEik40AIgKw9fKo5e4tMUbNxRU%2FnCYxPSnSD1jBNtziC9whuYxF8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIQ%2Bc%2BKyHlx5DwG5CrcA9UuLcOuSPTAFFTtTBJV9mL6nvbfXdQGbQfss9A5vqFVvDuDfGxkIR%2FC%2FvLS%2B5a%2BGh4Q2Dv5rwaC31soOnfeSX1%2Fznpz0VikDTz7u%2BAhZDO1oRh5gsYdTzCuJrVW9FRtZnypdyjnlYQUnA%2FqRhUZz3sBTxtrZsI8UEaEsdvIoTRj%2FKUqdC9lazCJ7d%2FWADTrXuzHjV%2BZXN2U6BrG2KWHwWKqJuy4dVdqM7OzAbRuXvF1KRp%2FkjEHbqo6mB1QkUCW6yTof0IPRHMh1pzmhmn7JUx9folrrdoRbxaEHBznmfr2TxaElLPF6%2FxbHE6qmF%2FC3Xfh6HgHi9Z6TZ%2B0FTIjnnWNFIv9aE%2B7T0PCPVUvfTl%2Fq%2FQP6vAx5IEuc9dktsbbwPHksPb%2FtIoJyWRQrRdrnM05ybDJj9ESjWQs5Qfzpi1yt1DI%2FdrqiWk9v2aL5PdIoepAOqAWd4IcwuqzuRvvdbWWHMVNQmkpRG3DPxsnlBJdi8F8KkJJ%2BxKkwg7yyTQdwLGcAIkcjHAJ9xgFt%2ByFCYH9tBlQnL2UM0Z8yO35vAf1cOdFGJU7hihADMfgBc6TOscpgbbj8Nh1bNE0jkO9QALlD69JGNfKpdAWhN5DR1yBvrjlHlbscibO2TwnMNeN3r0GOqUBuTMVaDX1GKr6q7bDk9uJ9FNaDlqTbPkN%2B0MLIpD9mwyMObPhzfc6CiqPVJ%2F%2FiXsxvbEzilUKWf%2F%2FiTDcp66%2BTsd%2FEWZdjwJniuTnqZDFTpHgwbS1ptreHVpEBhrtMXk5rlCbAV27eZbHS6Q2UZ5PjVSsr8n%2Bc0pJ9b6OUaYfV5YIvR1SrqeX6CD4BAs4UdPXt66yiXnt1K0%2BiMcBniuAPv7SISS%2B&X-Amz-Signature=4a375838d8205fdfae2021e4a3e23041d7d98d21e9c51282d98e2c4978963780&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
