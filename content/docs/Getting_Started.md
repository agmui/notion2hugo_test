---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVP6BMSC%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQwlQo0dY2F6c8SGKOty8rkxTdGK7Ik3TNL6pzRVvtjAiBgoesHtKVsEP7S69yrIPR7I%2Fi6oETerFBQwv1cDdApiSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8TW4fJZHXn3EJnN9KtwDJhd7czTzE3qWI%2FnAv89SzoiGlUeKY1lw4biZQOwLe%2FR%2Bi4HJToeNELdv11bv61nnT9oPYs23IN7mF%2BpEp8EWY5GAr%2FUvjtBYsR%2BO3nMDiFkU%2FJcyiniJIxBohno6gGXpiK40FpcBHZV%2BFcBlQ6R1zoXHgCkSf2FDLoWP0vQNoz8Aa793HHGdF6XsYCxmr4MtIHLpFam1KDoRWeWV5SwSHLi6gYrfGCOu5HyGkDQnGVaawNRUcV2ozlK4V1ux1cndeTiwRJ9EST2OK2N6cu5eQryhCJp4OQGYIeIr5vVhjqyXXIdc4R7MvNClms2o4YmmWlEnjsikm9HwmHMsIkmxnf%2Fv3wJJs3X0WQ%2Fsx5sPGN4X8YV1WADEaxf%2FHLRBQcFtyk63ejwlnw0nUiOsB8xCEZAPIOXsk2dolQcDbWiBa6R%2BnrgXJk32KVBOf3OSP1IFM9uOq1OkqSeVfNxX8oZq%2BqUv5kR1jZLqOh%2FVANoKzInF5nDkQoECk4z3moqb7b6b4%2BYjpdDZyJe6soIde39iKTWFCUJ5OcRPf%2FLiL%2FVIK470Pb6wSx2D%2B08odOWgjrNwnwW%2BWkUq%2Bn%2BxLuBxo77%2FQxhHl9Mzn2aPj8Shnhe3pETdDE0yPddbt5uLcGYw98XCxgY6pgHDaaCcbynOl2YUNIFCh14T0WKeZFIVI06%2Fuzx%2Bc9jWeEHFRC0%2B2JSRXyETDpURp7Z5IFg9U%2BQTMx1CFouD696HfsibQDJQhME3K%2FQZwNjthEXrR0%2F2HKoycbVags4IwWaKnVErE30Uof8cApMvkiFnvkkiVr0deLI%2FfLWWVZSFa1BCoBDR0N2ckJclEDREzYweLw4qBIapCDiZxj6LAzCyjwRH9mCk&X-Amz-Signature=119bd052a89debb6e53e85676b347d2b4591fbe1747ba95ce0d57725f3505d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVP6BMSC%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQwlQo0dY2F6c8SGKOty8rkxTdGK7Ik3TNL6pzRVvtjAiBgoesHtKVsEP7S69yrIPR7I%2Fi6oETerFBQwv1cDdApiSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8TW4fJZHXn3EJnN9KtwDJhd7czTzE3qWI%2FnAv89SzoiGlUeKY1lw4biZQOwLe%2FR%2Bi4HJToeNELdv11bv61nnT9oPYs23IN7mF%2BpEp8EWY5GAr%2FUvjtBYsR%2BO3nMDiFkU%2FJcyiniJIxBohno6gGXpiK40FpcBHZV%2BFcBlQ6R1zoXHgCkSf2FDLoWP0vQNoz8Aa793HHGdF6XsYCxmr4MtIHLpFam1KDoRWeWV5SwSHLi6gYrfGCOu5HyGkDQnGVaawNRUcV2ozlK4V1ux1cndeTiwRJ9EST2OK2N6cu5eQryhCJp4OQGYIeIr5vVhjqyXXIdc4R7MvNClms2o4YmmWlEnjsikm9HwmHMsIkmxnf%2Fv3wJJs3X0WQ%2Fsx5sPGN4X8YV1WADEaxf%2FHLRBQcFtyk63ejwlnw0nUiOsB8xCEZAPIOXsk2dolQcDbWiBa6R%2BnrgXJk32KVBOf3OSP1IFM9uOq1OkqSeVfNxX8oZq%2BqUv5kR1jZLqOh%2FVANoKzInF5nDkQoECk4z3moqb7b6b4%2BYjpdDZyJe6soIde39iKTWFCUJ5OcRPf%2FLiL%2FVIK470Pb6wSx2D%2B08odOWgjrNwnwW%2BWkUq%2Bn%2BxLuBxo77%2FQxhHl9Mzn2aPj8Shnhe3pETdDE0yPddbt5uLcGYw98XCxgY6pgHDaaCcbynOl2YUNIFCh14T0WKeZFIVI06%2Fuzx%2Bc9jWeEHFRC0%2B2JSRXyETDpURp7Z5IFg9U%2BQTMx1CFouD696HfsibQDJQhME3K%2FQZwNjthEXrR0%2F2HKoycbVags4IwWaKnVErE30Uof8cApMvkiFnvkkiVr0deLI%2FfLWWVZSFa1BCoBDR0N2ckJclEDREzYweLw4qBIapCDiZxj6LAzCyjwRH9mCk&X-Amz-Signature=be4af20457af65fe90671c43db675e4f5004cae9080d4efed0ec208b564e388a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVP6BMSC%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQwlQo0dY2F6c8SGKOty8rkxTdGK7Ik3TNL6pzRVvtjAiBgoesHtKVsEP7S69yrIPR7I%2Fi6oETerFBQwv1cDdApiSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8TW4fJZHXn3EJnN9KtwDJhd7czTzE3qWI%2FnAv89SzoiGlUeKY1lw4biZQOwLe%2FR%2Bi4HJToeNELdv11bv61nnT9oPYs23IN7mF%2BpEp8EWY5GAr%2FUvjtBYsR%2BO3nMDiFkU%2FJcyiniJIxBohno6gGXpiK40FpcBHZV%2BFcBlQ6R1zoXHgCkSf2FDLoWP0vQNoz8Aa793HHGdF6XsYCxmr4MtIHLpFam1KDoRWeWV5SwSHLi6gYrfGCOu5HyGkDQnGVaawNRUcV2ozlK4V1ux1cndeTiwRJ9EST2OK2N6cu5eQryhCJp4OQGYIeIr5vVhjqyXXIdc4R7MvNClms2o4YmmWlEnjsikm9HwmHMsIkmxnf%2Fv3wJJs3X0WQ%2Fsx5sPGN4X8YV1WADEaxf%2FHLRBQcFtyk63ejwlnw0nUiOsB8xCEZAPIOXsk2dolQcDbWiBa6R%2BnrgXJk32KVBOf3OSP1IFM9uOq1OkqSeVfNxX8oZq%2BqUv5kR1jZLqOh%2FVANoKzInF5nDkQoECk4z3moqb7b6b4%2BYjpdDZyJe6soIde39iKTWFCUJ5OcRPf%2FLiL%2FVIK470Pb6wSx2D%2B08odOWgjrNwnwW%2BWkUq%2Bn%2BxLuBxo77%2FQxhHl9Mzn2aPj8Shnhe3pETdDE0yPddbt5uLcGYw98XCxgY6pgHDaaCcbynOl2YUNIFCh14T0WKeZFIVI06%2Fuzx%2Bc9jWeEHFRC0%2B2JSRXyETDpURp7Z5IFg9U%2BQTMx1CFouD696HfsibQDJQhME3K%2FQZwNjthEXrR0%2F2HKoycbVags4IwWaKnVErE30Uof8cApMvkiFnvkkiVr0deLI%2FfLWWVZSFa1BCoBDR0N2ckJclEDREzYweLw4qBIapCDiZxj6LAzCyjwRH9mCk&X-Amz-Signature=5ee28f6e25d26ecc933e94085d4e623ea4a86b253dcbb7a0baf68a540e53a598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YJAWXBY%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG79OgnIyxllrTM65GsWNadBIhIkV%2FPLeaK9a5%2F%2BoBhpAiEAxqHBb0CdrD6G2KgYHXM%2BLkVYAwkyGPwif2ofdYeBu90q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCa4mEF5Ow3uP8GmsSrcA77geRsizbc1ejm24KvuHnVP5tcErbrJebl%2BUz4Voh8IZJzBqE%2F3uhYGj0I4Y31RCnavwDvlNFgAtg%2BnMwvwt567GHGaDB8HMP%2Fskg2piB6G9YiC0%2Bb%2BE%2BlIKZQMhhc9jmvCcHQWjlNBrQ4QeKtUVliKYxOFhs16lrU8j2CNm8%2F5bUpFxZjX8ZLjSMQ05E5FgOhPVrNTLQr2u2wiQCLA%2BdqYBhpWJvgsahP%2BITkr1jOrqpGx%2FBKU30RdCze%2BxSDGd2eQ2O7FpC9R%2FByY8uHez102TbQNx43HRMox9OdMcTQPo2%2B6JoKYU6rCfZwzW1KzLMjJdzmu5ZZDlIt0p0cakiC10vzMJRr83c0cOuwMyuNMoIBbtNEwWxdtL834TTbwtbKdmp4bypCLnRUmMIAvnKTJsbuAXucnTEHhj5EpTfFRSTPrORFl3TNSlZAvRtxznWxpI1P4e8A5AFtne17w%2Blh%2BqSMXi%2BqUkDNcDvKNika0YCFBBuZ9w8mLC0MB17TBgwntT00%2BtOEnakPAudWFBLBXYHMTO76t%2BP6EEKXwjT5mkV%2FVOofFWiFzaYHlI6nWGEb5ABs%2BGzgU34C6DrY6Mk5FRhcTvjGvI0tbXbqMjIG8HfJXxLDk2QcMoKmkMMHEwsYGOqUB6m%2BczinMSkZCKK%2FPqIr5DiR0buO9tGNqywMssWk4S6fx8LKg9uSmgmF78mYLYKU9DKfYqzm%2B2w81YB86kQQVQgxIrIlaVOEglhweUoGY5LQxYuILZKlIILBhskj5YUmBtYclMPMjpggje%2B451Z8ApzPFq9EfEinyn4dQ9acyTFqc8Ra9zJnFi6yZTa04ZkJmRE4Aoz5lLi04GZGhPPLl2YqIECml&X-Amz-Signature=25f64a8c098543df38f207c9503925b1aef2f4786aa562240f3e0c8e96437b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTEBPLO%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbBwkrTwAvMFWQhwUEuj%2FYFyp9wAJeK96VwaD86fWBFAiEA%2FbOE%2FZ7SFjAOp2AjORYAlHWqgdXhi%2Bkmz%2F5lTO6JDTcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO86sai2w5sseR5wnyrcA1nKqyDj7Sk8B8pcncl66qDXOFk%2FFu%2FBp8bFR8kRTsQPo8Gjm1HqBFm4vMl921337E0aoHV3wLOVvwlD787F%2BydL9xqirfltpTfbWcNksWUoR50gd7IMCAQLoLksz8HxKwSAdlCoMry90sv%2Folg86KiOF7ycvMUIemkArcbTxhbjmGkYAYrkUWn1WGkOz9jmiS5uLlpWNJkbrmRTP3uCDrTA7awVb7BHPo9wpd3w5rx81T6PLO55%2B9xiP%2F8A9AhzVtQLRMPQpIomBC%2Fkm2igGxnHfeU8JyS0Pi6kpNW9kJ5z7%2FVU0dyAj8G07N60BTLyOu9eGn8LylNkUMFoRa0sZ3cEydKXWnMMdBOx5tTMD2upx1V14HtdQIVOeRscMe23hE6VXajrhGIWMZs91dVv2iuhfUKr%2B7q6gaBSss7DhqPyoUjCfzpgLGORckEvLhZPqe%2B25UkBoBVejqw8D7SHMyG6nAlbpCoyacZuS20mqtX3mpmC3hn4ySAitFt9%2FBm8p%2FlN2mkV49tHs1UIP5wa3xEKwEe8DlkV%2F0R5SQMVFgi6g0FGNf%2Bx0hhFTgHZ9ifNO0kkZmF0ccs19uMceQ58hhXWQaS76XGEt26yXBiqLJT08W25j%2FijPAV7zEpwMN%2FEwsYGOqUB3DyhMxkrl15eb7utbNasbYCOrtAaxdTls5iX%2FpHfyxzzW6wH7V8VyVa3suTINK5OFG7U83ECCr2caat6nI2enpCm09oKKwcjse5E5gWCew%2BKKH1HPcXMhPI9qRS2b3vnUBCgBatQ85vd%2B8scDrmSQeEZWx7N232D9tb0ala%2F7lcASEwNWNvJobhxx6nrc6mbabEPloQwNMmz9NKFWZeuF7N2fXME&X-Amz-Signature=615ed575b5188b2fa58ef1c586bb3f2e3fba5f4db5d9c90de6ee1050d37ba518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVP6BMSC%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQwlQo0dY2F6c8SGKOty8rkxTdGK7Ik3TNL6pzRVvtjAiBgoesHtKVsEP7S69yrIPR7I%2Fi6oETerFBQwv1cDdApiSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8TW4fJZHXn3EJnN9KtwDJhd7czTzE3qWI%2FnAv89SzoiGlUeKY1lw4biZQOwLe%2FR%2Bi4HJToeNELdv11bv61nnT9oPYs23IN7mF%2BpEp8EWY5GAr%2FUvjtBYsR%2BO3nMDiFkU%2FJcyiniJIxBohno6gGXpiK40FpcBHZV%2BFcBlQ6R1zoXHgCkSf2FDLoWP0vQNoz8Aa793HHGdF6XsYCxmr4MtIHLpFam1KDoRWeWV5SwSHLi6gYrfGCOu5HyGkDQnGVaawNRUcV2ozlK4V1ux1cndeTiwRJ9EST2OK2N6cu5eQryhCJp4OQGYIeIr5vVhjqyXXIdc4R7MvNClms2o4YmmWlEnjsikm9HwmHMsIkmxnf%2Fv3wJJs3X0WQ%2Fsx5sPGN4X8YV1WADEaxf%2FHLRBQcFtyk63ejwlnw0nUiOsB8xCEZAPIOXsk2dolQcDbWiBa6R%2BnrgXJk32KVBOf3OSP1IFM9uOq1OkqSeVfNxX8oZq%2BqUv5kR1jZLqOh%2FVANoKzInF5nDkQoECk4z3moqb7b6b4%2BYjpdDZyJe6soIde39iKTWFCUJ5OcRPf%2FLiL%2FVIK470Pb6wSx2D%2B08odOWgjrNwnwW%2BWkUq%2Bn%2BxLuBxo77%2FQxhHl9Mzn2aPj8Shnhe3pETdDE0yPddbt5uLcGYw98XCxgY6pgHDaaCcbynOl2YUNIFCh14T0WKeZFIVI06%2Fuzx%2Bc9jWeEHFRC0%2B2JSRXyETDpURp7Z5IFg9U%2BQTMx1CFouD696HfsibQDJQhME3K%2FQZwNjthEXrR0%2F2HKoycbVags4IwWaKnVErE30Uof8cApMvkiFnvkkiVr0deLI%2FfLWWVZSFa1BCoBDR0N2ckJclEDREzYweLw4qBIapCDiZxj6LAzCyjwRH9mCk&X-Amz-Signature=5437b4306e75220eab667883ed7cf6078bbd4c4e465231f3da6c5a011d867774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
