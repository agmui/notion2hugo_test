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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46BCQOJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFnZd5%2Ffn%2B5KdvijgW3Sp7IvamXxlD9PnACnqK5USfuQAiEA5eo4ms%2BEHaxOTctcBEFSIdWcH1hI8jr6IaFPkixya9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI4t53qDsre3Ws6kTircA9%2BknxufEHF6iAhRJW47XXkCJdQlKZVS8bCQXGbDo5H8qalnuzksmcCGTCUcx7Bc4ZPnHxP9Jub3Hg7ktfXRTuwo%2Biuh0bhTC8oWbXxdLAk5%2Bu%2FeifAuAcslO1u5cGsUXsSc12FKxV0wkTTX%2B246jw3YtjN6fKQZW5o8svhYmgKJMKe0ULUlyLzFYUJEf%2F%2B%2Bl%2Fgco8gZbW0X8OUyuy3NOwoujaGL%2FVlQhifJ%2B0GazSEAEkDacPPUA0ddzRSotwQd1w%2BwHmsazDzaHYCtof6DVC7pJXPu%2FleE0LALB278pgEGeqrS1ggedgHYUYhMJ7eFHD%2FGZRfC7ZGt8qNv7yVPbGyQzcBcm%2FXqOvnKvopR8tlpS37WQQbJD8ISRl7iQ04NogLuk1O8qgDwMwOGTeRC40NAFmbmBKnrFy7AowbC2U8CXZG4M6%2BxoTOm%2BUQphkFjYa85r%2B72pfww4bxozaSzENHo1omenz1VyuFRxae0Fa11q18EJsLTBjz1vopnNsvoU8E833Xx1ohcH14u89o64qVdC5xYQtfsbkA8nXAlEMMB2ZLw3%2Fj1qVjnCuVBSMMcwuG41SlZCK%2FG93XXosyqoESQBHEAHZ5blfM3QQ5WPQlYlp%2FE9rspc7mptYKUMKmOtr4GOqUBLW%2Bc12lij1KlDLSO3isAih3d1dSPPeAY1rTDvWvGr5TlKXC6GhXULO7kwPbACMxuVEDf4fYKb2Wb2QAE89ndf0Gbzy3vK57kDumrdX8qd8IoSVWa2r7E63%2BkeYzzYdJwyht3%2B8MdICaEivWkCXvSAouDxHePHwngxJJ2U0jOW75LQJ8nPBHYMGgXpaqSs%2B8xE742TRN04jXhzrtLorwmkUbrl2aG&X-Amz-Signature=5f190e0ab262b68ea6249362dd70fc8320234f7de9a5602f20ffd15ec520005a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46BCQOJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFnZd5%2Ffn%2B5KdvijgW3Sp7IvamXxlD9PnACnqK5USfuQAiEA5eo4ms%2BEHaxOTctcBEFSIdWcH1hI8jr6IaFPkixya9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI4t53qDsre3Ws6kTircA9%2BknxufEHF6iAhRJW47XXkCJdQlKZVS8bCQXGbDo5H8qalnuzksmcCGTCUcx7Bc4ZPnHxP9Jub3Hg7ktfXRTuwo%2Biuh0bhTC8oWbXxdLAk5%2Bu%2FeifAuAcslO1u5cGsUXsSc12FKxV0wkTTX%2B246jw3YtjN6fKQZW5o8svhYmgKJMKe0ULUlyLzFYUJEf%2F%2B%2Bl%2Fgco8gZbW0X8OUyuy3NOwoujaGL%2FVlQhifJ%2B0GazSEAEkDacPPUA0ddzRSotwQd1w%2BwHmsazDzaHYCtof6DVC7pJXPu%2FleE0LALB278pgEGeqrS1ggedgHYUYhMJ7eFHD%2FGZRfC7ZGt8qNv7yVPbGyQzcBcm%2FXqOvnKvopR8tlpS37WQQbJD8ISRl7iQ04NogLuk1O8qgDwMwOGTeRC40NAFmbmBKnrFy7AowbC2U8CXZG4M6%2BxoTOm%2BUQphkFjYa85r%2B72pfww4bxozaSzENHo1omenz1VyuFRxae0Fa11q18EJsLTBjz1vopnNsvoU8E833Xx1ohcH14u89o64qVdC5xYQtfsbkA8nXAlEMMB2ZLw3%2Fj1qVjnCuVBSMMcwuG41SlZCK%2FG93XXosyqoESQBHEAHZ5blfM3QQ5WPQlYlp%2FE9rspc7mptYKUMKmOtr4GOqUBLW%2Bc12lij1KlDLSO3isAih3d1dSPPeAY1rTDvWvGr5TlKXC6GhXULO7kwPbACMxuVEDf4fYKb2Wb2QAE89ndf0Gbzy3vK57kDumrdX8qd8IoSVWa2r7E63%2BkeYzzYdJwyht3%2B8MdICaEivWkCXvSAouDxHePHwngxJJ2U0jOW75LQJ8nPBHYMGgXpaqSs%2B8xE742TRN04jXhzrtLorwmkUbrl2aG&X-Amz-Signature=e351fdefa1ceef5515e0ef1881277ad86d87a39a20d8b4e3a7037c7258c71335&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MBQVMUL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFKefMIdC08oBchDqc81SX2t5aXNSqJ6a0CXRgy%2FCs7CAiEArloi%2F7V7DIfer0cAXDaVIPiDPAxz1LHXPsvhEvON%2F%2BMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDH7G8YUGw9cuUnL9USrcA1iPX9FtbrBCeTz1AulhysDWf6jKcrIia%2FZ68Mi50Rxdm3Hj3fqzF3a1%2F7hiQ0phGAkP1SfB6PvUKCNyC0ix5WwiiCjh9wazzhRSa1fY6aqAf9d%2F96vku%2Bna1hB9jLkiibrgYkif9tTgDxnJLuCbUqYLfFsjCdVevs0N8pzqXRulh9wL5fESNmIeFv%2F17ShzFFrGqh%2BXeR8LHUJkStEQb3L6shM5y12nCU2Gm01cnVhXgjbpnGaAXiOb%2B25dTMMx0j4PwRob1dnIZqhARDvJvLaclH2hxDqAGELGDvmbtIeX2ppQHO2wKPR2oWilQNfeQdKBQ5nAWgLRKh13nu771ETCpAQ3DeJTNwSu%2FQ%2BMTJWB5vTbmloAPh8hHCV8Z4VqKSmJm7m8Xry6pFB9reDaE9RS5k54JOU2nNLlUIe6hBJ%2BQ8hYpIDSmPsABJ8czUT5x%2FfuTPLKOb157o7T75uzc4reCZV%2FyYZ8ZQ6tU29qneypfk9iFqwdTEjfZbOPJ%2Bhtb6rpz25mztdbcd5IVOx2TlFxq7iHr0WJh8wTo9HV7YnatSeyOUHmAIyKti0AVu47kIYRhGcf6X%2BEf5N5mBeb5dthZIktT5pTZ%2BPoA3aqfE1JPdenFpkybCzqNPF8MO2Btr4GOqUBWiHbvFcryPh4RYw06cOp9KhsSu%2FPkl3a5XhfGRBaca9QU6DhocF6S9yMsk68SE7OLJM4LYSYQ19cPe8kMbVFC3ovCxORVMSIWxM5nhMpNKUBmXub03OYBDNtPEq6BH2uRSpTmEP5QMTmX3h25kjMBkuiUujB%2F83ViNHyW0TsckVwUZjyyo8IwSgClu7DmLj1Y1XirAafkDCxnqopXw7lIH0zvbqd&X-Amz-Signature=ecd53a0ac5a7172dc7a879f1cc46c72b7e9e1d366eda77a828d4d96587bff8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UA2ERLB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDweO0xaCf21zsUKqhx4K3dLsQZu1Df1K4FQ36xH9X9UAIhAO74NksVTZFDItjgCBpB6tK3lAJ9wtzlgW%2FKNcrr8gDiKv8DCHUQABoMNjM3NDIzMTgzODA1IgwMVmWEAZ4ZX0zaA7cq3AOWmBUrInR3rKcvmxN%2FpYTEuZu9N7sn9vzE%2FCLPzM5VzTV3B%2BOh1W0mGhmtzNUprWtqvWiZc1dc0gi0AWgjTnU5XCWSbD85DOeNsg2A7ThLR5sXZNjlZD4wd9xu%2BPP7dAc0MCNyhLKcRUkSshKizgNhoCWGnftzEsKmuicX7if72Awtcb20Okh%2FQNMIEgx3equkAKK7H%2FtnWLFLy%2FSZeaWh5Hc%2FzDRO7W60XqnT7qY9A3NpHlUZRu0gI7r71Y1ueLpl7Gnn2HTpewwZPOAii%2FPNEHfTjUOQIKdT7ON1rqaH1Uxv24K06ynzSMqkvrZyei0O%2BwyxoqgGoRcOBkasb%2FVhzQ3K8x8WVOFgesoToTonr59SVYEdckfQ5Ii24UZnYY7yZ7Hc8e0V0c8ppr9yzC%2F1825XfpCRSj4yyTFUbEGA%2ByXewlku6I8epaGKI1uitqv4l8x%2BzxImFMejqlTczq6xGzQDDerZeKaOAG5AtcDM%2F3p7y%2Fr4bfcHavXqmsPH53j9lZZMYDzH8elS4lq4wmd%2FD%2B25mw5ytQnrx5xBI5rufTJyO%2FjMN41t0wweaDua79qWD%2Bz%2BjtTmT%2FOJCgiB%2Fck3gXMD0X3TnewdeZNqtrJBmhN9IHqUZu3k1Bv05DCDi7a%2BBjqkAfDd4KFS0W2KF%2F3%2BrNthrMmacqhZid944Ax6qD3fazEgNm3KqRKscEmpRN%2FDtUEqWZn2CXUm0Zx%2BOfghefBtL8VjsBBLiOA7AmzFcvwm3XGw7oMwvbb%2BtpUr%2BaYzFD%2BcbtXMeFRveFqSuNtrPzZKl68ojpJeJVMrctLu1IpIcIhvqfzjVjE2q2QjsUURzfDXizjSFNuDvPd6UdOPYriRKzL5q4DN&X-Amz-Signature=ed6298e225a4ce9f9639d7ec3aac7dd3e0246440552519e329aac756736abe2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R46BCQOJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFnZd5%2Ffn%2B5KdvijgW3Sp7IvamXxlD9PnACnqK5USfuQAiEA5eo4ms%2BEHaxOTctcBEFSIdWcH1hI8jr6IaFPkixya9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI4t53qDsre3Ws6kTircA9%2BknxufEHF6iAhRJW47XXkCJdQlKZVS8bCQXGbDo5H8qalnuzksmcCGTCUcx7Bc4ZPnHxP9Jub3Hg7ktfXRTuwo%2Biuh0bhTC8oWbXxdLAk5%2Bu%2FeifAuAcslO1u5cGsUXsSc12FKxV0wkTTX%2B246jw3YtjN6fKQZW5o8svhYmgKJMKe0ULUlyLzFYUJEf%2F%2B%2Bl%2Fgco8gZbW0X8OUyuy3NOwoujaGL%2FVlQhifJ%2B0GazSEAEkDacPPUA0ddzRSotwQd1w%2BwHmsazDzaHYCtof6DVC7pJXPu%2FleE0LALB278pgEGeqrS1ggedgHYUYhMJ7eFHD%2FGZRfC7ZGt8qNv7yVPbGyQzcBcm%2FXqOvnKvopR8tlpS37WQQbJD8ISRl7iQ04NogLuk1O8qgDwMwOGTeRC40NAFmbmBKnrFy7AowbC2U8CXZG4M6%2BxoTOm%2BUQphkFjYa85r%2B72pfww4bxozaSzENHo1omenz1VyuFRxae0Fa11q18EJsLTBjz1vopnNsvoU8E833Xx1ohcH14u89o64qVdC5xYQtfsbkA8nXAlEMMB2ZLw3%2Fj1qVjnCuVBSMMcwuG41SlZCK%2FG93XXosyqoESQBHEAHZ5blfM3QQ5WPQlYlp%2FE9rspc7mptYKUMKmOtr4GOqUBLW%2Bc12lij1KlDLSO3isAih3d1dSPPeAY1rTDvWvGr5TlKXC6GhXULO7kwPbACMxuVEDf4fYKb2Wb2QAE89ndf0Gbzy3vK57kDumrdX8qd8IoSVWa2r7E63%2BkeYzzYdJwyht3%2B8MdICaEivWkCXvSAouDxHePHwngxJJ2U0jOW75LQJ8nPBHYMGgXpaqSs%2B8xE742TRN04jXhzrtLorwmkUbrl2aG&X-Amz-Signature=bd93dace26b97712c64f84ef38e10aa70e84f0f723f54e9de4e40f877a37179a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
