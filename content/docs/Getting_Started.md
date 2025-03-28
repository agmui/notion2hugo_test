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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRDNQLQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGojwu5HpLrVJHGZLZWHh22zm0UFFXABk69nmt%2BkrpSfAiEAlWq%2FjrBFn07IgEgWlDI4evlKH26Y8lF%2FytCMtDakL3oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMBoQSQzMrfbV0kDIircAyIP%2FCFVRRvIYsmaXS3RxB9tKo248YKOS248JXHoZrsD6PNQsiYk54Clmh91Qromlt0Q2JC8Otcg5pcfy5tZMRnshH9K28k3ub4c2ApklTDaZwZPT790Qn%2BYNWMvHUQmH9new7oaxYBN3HAst%2F5jpWYyjNoxL%2BZj6LOOw%2B%2BQARJUJyOHFwQl77G7fGSaThVcz1qiS%2FVY3sQnFxRnscvJnyTwBX1iLnOHqjYkLzGknG5BLYkuElFmvNLBnHW%2F9OKTg4Q6fIJTkNvT8jVN35LaxN0yo3O3nhKBmogyiLv374UXVf8w6qqhbYnCQTflJCOiyzLbqWZ5Z2%2Bv9FMA41lz1a2e8HXtyqOinjYo3VbB3XTdKuj0oLTdMpdDbSyBJCEFxmf2cipSNIHpbwTT4KhBf7k8%2F75ZIb3gTZBqOwbpDj4eKMHQSVLd1fGX8AAjFUf%2Bv46K05FAVrf9w9zZj41WUglQmCmxF%2FQ0s2PgzkAjd5yUMQy10z9s7Jxd32eohjBqcM7aH5fy4fnqyyjAmECTt7zKAcixl1QSJ9lKzo1cCrEmjw5nGN%2B%2FHV2CZdenfpRY%2FSRRN6unGvWqgvhjKYdyutV0yuSWYDy%2BZhyADZwYtUHhuUOSHKA4gC3%2Bstc2MI6Jm78GOqUBHnSFjFIJZ9gktkLLfILskdBeVroE%2BzOZ6n4h%2BvURGtkylm9vq9eEpSKYwL1LOaBx8c%2BLC70K%2FnWl9v4COqbDH00eaybf3t7FGj%2BLTuDcTy761ifJr3fW%2BAiqL%2BEzplgqpZNjXY0Xh7E1QqaCW%2BWpJVtZs8%2BnOMhoC2hbxDYIm%2BJl75As%2B%2Bjn50mxz9NwgQCeb9bZguViuTwt59czA28vRcvLI9ly&X-Amz-Signature=22c965d4294d2cf12237a47d427086da3cfea053956b58152dae382bc24a9237&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRDNQLQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGojwu5HpLrVJHGZLZWHh22zm0UFFXABk69nmt%2BkrpSfAiEAlWq%2FjrBFn07IgEgWlDI4evlKH26Y8lF%2FytCMtDakL3oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMBoQSQzMrfbV0kDIircAyIP%2FCFVRRvIYsmaXS3RxB9tKo248YKOS248JXHoZrsD6PNQsiYk54Clmh91Qromlt0Q2JC8Otcg5pcfy5tZMRnshH9K28k3ub4c2ApklTDaZwZPT790Qn%2BYNWMvHUQmH9new7oaxYBN3HAst%2F5jpWYyjNoxL%2BZj6LOOw%2B%2BQARJUJyOHFwQl77G7fGSaThVcz1qiS%2FVY3sQnFxRnscvJnyTwBX1iLnOHqjYkLzGknG5BLYkuElFmvNLBnHW%2F9OKTg4Q6fIJTkNvT8jVN35LaxN0yo3O3nhKBmogyiLv374UXVf8w6qqhbYnCQTflJCOiyzLbqWZ5Z2%2Bv9FMA41lz1a2e8HXtyqOinjYo3VbB3XTdKuj0oLTdMpdDbSyBJCEFxmf2cipSNIHpbwTT4KhBf7k8%2F75ZIb3gTZBqOwbpDj4eKMHQSVLd1fGX8AAjFUf%2Bv46K05FAVrf9w9zZj41WUglQmCmxF%2FQ0s2PgzkAjd5yUMQy10z9s7Jxd32eohjBqcM7aH5fy4fnqyyjAmECTt7zKAcixl1QSJ9lKzo1cCrEmjw5nGN%2B%2FHV2CZdenfpRY%2FSRRN6unGvWqgvhjKYdyutV0yuSWYDy%2BZhyADZwYtUHhuUOSHKA4gC3%2Bstc2MI6Jm78GOqUBHnSFjFIJZ9gktkLLfILskdBeVroE%2BzOZ6n4h%2BvURGtkylm9vq9eEpSKYwL1LOaBx8c%2BLC70K%2FnWl9v4COqbDH00eaybf3t7FGj%2BLTuDcTy761ifJr3fW%2BAiqL%2BEzplgqpZNjXY0Xh7E1QqaCW%2BWpJVtZs8%2BnOMhoC2hbxDYIm%2BJl75As%2B%2Bjn50mxz9NwgQCeb9bZguViuTwt59czA28vRcvLI9ly&X-Amz-Signature=68bfe88e47a7c1782439b88d59e14ebb9347728516e05cc0af059127ed964fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUFOZ3R%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn%2FGGQbETEDf3p%2B0sDYM1kseTatR9nsvFdKGeN9PhR3AiEAoX9gmTU%2FNvosy5nt%2B7dwe7x1ynHfPbdASp8ju%2BtqNnMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGYqtr%2FuDRIL71uyrircAz9TLYddk%2BMJaAFvFtk5RW1ynsGwdrdN2Pz7rWtoZK%2BFMmF6NVH16Xl5icaCO7J7vVv5u2YuHTBNUwIXAtpmQBHroW9Ql6nKCzlgXJjNAe%2B9aEG7uTzUqdiw%2F30Sb%2BfEKk9PG%2F%2B6eeDhgpuin09u%2Beh6VsVDCsY4AjLHd97NE5VLwGRy8iGnQFyg15H01ZiT294J19P8fcnydUoBlBWtK5xh0Eo1bAgbrCzNAzrCyN2qp4p%2FbQZYiPjQ%2B%2BW%2B4cR7XKEtnWO5hD5LF4OKBs5ayGtZfSrySyFyxEY5LTjTmZ2hxBG4No6uuKbLtblDj2kvlSHvMbQV1Q1Q6OuRZ9HXhBlh3XZyX3r3d%2BoJMeAdiezJDOvDJMHSbGqvEiBR2C9dqOYk5%2BI%2B1wuL6aU%2BpTbDRSHtg6aVOdFyWJUIj2q1fOK1u08dIK%2F5sr1HtV9m5%2FMF2J4ruPjp8UfKIdYMY2oAb1N5rIvWJ7vIVzNOss0ovFai6mYOD4LIwTGHhqgFpzt9NUb1JMXpgnc4ti7gRYOKAlvbeVMdsn7Q0ezYw1Ruk0wPh41G5cO360HIi9uYeql9jrWDkskfsLsOvJf5fqyroxosTxX4z%2B4LNJDsWKNrY0Quq6Zv7xiLlq4YN8XwMKKJm78GOqUB3V%2F0F%2FJYbhCLMMZmZlkbLVHo15ZuKHiqgqkKB5k5LKbeBOZjehfW4HkBMIyPjPyJzdhH43%2FZH2Aiqt5pWgOKxm76bq%2Bi1r4od%2B15NLRHiXIprU58u%2FkrdaSRv3DrM9zeUe4aoC31Bo4inTryZ%2BB07vTWnOGyV%2B0FpYVmd98fhEg7gKflBgUlD3YjHf3UC%2FO2u0eIyogCDrq6EknPXr26bip%2B0vk0&X-Amz-Signature=c81560e1128723db1da8ea11f42d53f6bdf0961ccd0ce44b4b636eed25bc0d89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2DKF3H%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZMnwhLqMGGf8lkrYfnCcRSkJnK3QnNXjtPVE24VhloQIhAMkjLJwK54M39Ru%2Bv7SPj%2FiGFHKGHs51JBC%2F%2BtzaqFRiKv8DCGEQABoMNjM3NDIzMTgzODA1IgxodDc7dNFDWAIR%2B5Uq3AN%2FjOnxN%2FG1q4CGlwCOcuIdT0y2vclrJ9F%2FGFYKsDbg5vKVib5MUU%2FDSxUsI3hAeo9CMfow1nwIuW%2FeE8mHV0S8ZWY7%2FUAuXlQk0r1Bo9Qmr63zvD%2FZXDv4QFmdcpNkXmmvea%2BNYfZlpcD8PeIutBCAouLcXBXn9UUPJ8EyNbhNQGwrU7Qp%2Fsjt0xj0bpEuJVRNoE5IuueFZ2wkfP3Qi9NDWF6%2Bt9B8wg1W0AD1mcjnYUS8OefNiUFTf38EpW3I7tY9lSWbJ490QjXrCnJnivAKxSnZ7krAxqrirnr8p99INijaLXh27ptLh3wS7WXZGJjYdP9ykDEMyepTn8tFBScdzfeFR%2Bq%2Bq8EKJl9uXfk8lsxep0%2BFtfJeER%2B3YQRTcqyfg%2B1ZfDNV3LddmdKBMif7DPSOaZjzjcCK6s%2FZCDZ%2Bs3LyL%2FQozxBBatLatZ8rq%2FFNgIHUj4pbjwzmsrxAUwyPa%2BqoCRXOGdIWWTmRJ32u7aPBb4CakVkwNulEdcTAcBXRpU2RihOI5tMGZ3Y0CUvdoOH9RHkN%2BNIk39W8nfBRM6SVsZ8KmtXBCbYFE59qhy%2BsjJnobpZD6fEI90kO%2B8qoU3YMdsZHzIGSMlaW1bc8qvg%2BQKzTqbajRYy4ljDRiZu%2FBjqkAcKNLmvBsbivkbri4JreGHIrghaNwIHasvNNjtMgDoanQYageoL%2BQOg1CcIgNQwqvScPh1kih1mUz4U8i5smHUrdnCLLrkSAcGhDqQkZgqF3o5CoRwQDLilJW3C2pSBYGCmSTV9cJEQGIy%2BxYa3xcenWUvQy4l2BmLvZ%2BBqwv4nlI550fIbdKTiIAwNauN4Y1sYHeYmHW53GW9BnNYaoU2zZO0mi&X-Amz-Signature=0cf63800f77b8ae4405e57ab92d9c1415ba55fe10c392f934437a834139667c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRDNQLQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGojwu5HpLrVJHGZLZWHh22zm0UFFXABk69nmt%2BkrpSfAiEAlWq%2FjrBFn07IgEgWlDI4evlKH26Y8lF%2FytCMtDakL3oq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDMBoQSQzMrfbV0kDIircAyIP%2FCFVRRvIYsmaXS3RxB9tKo248YKOS248JXHoZrsD6PNQsiYk54Clmh91Qromlt0Q2JC8Otcg5pcfy5tZMRnshH9K28k3ub4c2ApklTDaZwZPT790Qn%2BYNWMvHUQmH9new7oaxYBN3HAst%2F5jpWYyjNoxL%2BZj6LOOw%2B%2BQARJUJyOHFwQl77G7fGSaThVcz1qiS%2FVY3sQnFxRnscvJnyTwBX1iLnOHqjYkLzGknG5BLYkuElFmvNLBnHW%2F9OKTg4Q6fIJTkNvT8jVN35LaxN0yo3O3nhKBmogyiLv374UXVf8w6qqhbYnCQTflJCOiyzLbqWZ5Z2%2Bv9FMA41lz1a2e8HXtyqOinjYo3VbB3XTdKuj0oLTdMpdDbSyBJCEFxmf2cipSNIHpbwTT4KhBf7k8%2F75ZIb3gTZBqOwbpDj4eKMHQSVLd1fGX8AAjFUf%2Bv46K05FAVrf9w9zZj41WUglQmCmxF%2FQ0s2PgzkAjd5yUMQy10z9s7Jxd32eohjBqcM7aH5fy4fnqyyjAmECTt7zKAcixl1QSJ9lKzo1cCrEmjw5nGN%2B%2FHV2CZdenfpRY%2FSRRN6unGvWqgvhjKYdyutV0yuSWYDy%2BZhyADZwYtUHhuUOSHKA4gC3%2Bstc2MI6Jm78GOqUBHnSFjFIJZ9gktkLLfILskdBeVroE%2BzOZ6n4h%2BvURGtkylm9vq9eEpSKYwL1LOaBx8c%2BLC70K%2FnWl9v4COqbDH00eaybf3t7FGj%2BLTuDcTy761ifJr3fW%2BAiqL%2BEzplgqpZNjXY0Xh7E1QqaCW%2BWpJVtZs8%2BnOMhoC2hbxDYIm%2BJl75As%2B%2Bjn50mxz9NwgQCeb9bZguViuTwt59czA28vRcvLI9ly&X-Amz-Signature=4f7b6c1f59a5eb258245523a9636eb4d24712f91827b873bc89497da58a2fbb1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
