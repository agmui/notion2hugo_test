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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJJXCLG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWogdbzARow6XwoukKQn%2F%2Bhd9IMCBALNRkugUnF2q4pgIhAJ%2B4LAQvorZbvXzJt26NWlSjLkzwKaNTm9HMRHaji9%2FjKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX3JL8CU2lZv%2FpUHoq3ANOrHl0GCqDYnILL87vf1Sfj3nEBq6m5lctfGoeCch95llsaS2FPOABCbGVsp0bdNQ3%2BE8zhlJAQ0kNq5p6glZmNkvQW8tv7F%2BPPLuJnSFTFtECxxAy6CvrFjuAB0E4FRDqC6%2Fn4VEHMiwfM%2BncSHx0Ag4lwRS56N%2Fclth9kiSFbTT0PimOrrLWcckywAsJSaUtXDfNwD87AwnLbzpxbFJlU0fWKrMWG2Nt4L2heJv3gmrud%2FVjt1RW5tDdLWpC6qudppHfvckTfc1vCk%2FlAoNXUPvmAWHfTS8TUl1fmKkPLJ5oqc0IzT3eH7uBd2zBUtvhSbCrK2EVMpOd%2FVgBX3mD9VzweDUcyCOn2Ba%2B%2FGr0%2FR44kC9BzKtVLzjEqdIPpEn4v12WVew6ITYRZzJgag60LTzngSU3UZUHiFQDsSpeJEoca5tsngTMyaKM3RmtsmJAoV3OBFhA4ns8lTmUQP0MVFY5OaJ2WHEYEtB7Q5g3Q064%2BxYJERO5xqZLTX4ki9rnl66R5mtnUfcGamdDKlhmZ%2BaiDVQoOfAt%2FIjrDS4GYqdeA5ceQEckRkyl%2FTn1JOzTop1GzTEkskZ%2Bo8aUQ9OMHHl9yMJ3j6Ob3CoFhqwz02oU8XY8RUPbqr0s9zDb%2FMjDBjqkAcszmi1RmFdsxwycn2OaTLZeWzPas7EmqJdXAOQY22znr%2B1yIAfYnvpkCH%2BxysUc%2B1cJy4iJr98T2vzyD2b1Zz66Tg7H2P1V2POqUVTeyaQrXtMjHsBnfJZ9weA%2BGJtXW4cGG0wb3cbb7rcLtZncXQVXxZVY77e9VmWMZdgP6FcBNc5XQijjCd4nmIgcAkI8YexdwVecJPItR%2BT2ZWTeg7u62sn4&X-Amz-Signature=0ef280ce2f07e256d32a596e44eb527c6440671e325ee35dd23452402c2bf320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJJXCLG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWogdbzARow6XwoukKQn%2F%2Bhd9IMCBALNRkugUnF2q4pgIhAJ%2B4LAQvorZbvXzJt26NWlSjLkzwKaNTm9HMRHaji9%2FjKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX3JL8CU2lZv%2FpUHoq3ANOrHl0GCqDYnILL87vf1Sfj3nEBq6m5lctfGoeCch95llsaS2FPOABCbGVsp0bdNQ3%2BE8zhlJAQ0kNq5p6glZmNkvQW8tv7F%2BPPLuJnSFTFtECxxAy6CvrFjuAB0E4FRDqC6%2Fn4VEHMiwfM%2BncSHx0Ag4lwRS56N%2Fclth9kiSFbTT0PimOrrLWcckywAsJSaUtXDfNwD87AwnLbzpxbFJlU0fWKrMWG2Nt4L2heJv3gmrud%2FVjt1RW5tDdLWpC6qudppHfvckTfc1vCk%2FlAoNXUPvmAWHfTS8TUl1fmKkPLJ5oqc0IzT3eH7uBd2zBUtvhSbCrK2EVMpOd%2FVgBX3mD9VzweDUcyCOn2Ba%2B%2FGr0%2FR44kC9BzKtVLzjEqdIPpEn4v12WVew6ITYRZzJgag60LTzngSU3UZUHiFQDsSpeJEoca5tsngTMyaKM3RmtsmJAoV3OBFhA4ns8lTmUQP0MVFY5OaJ2WHEYEtB7Q5g3Q064%2BxYJERO5xqZLTX4ki9rnl66R5mtnUfcGamdDKlhmZ%2BaiDVQoOfAt%2FIjrDS4GYqdeA5ceQEckRkyl%2FTn1JOzTop1GzTEkskZ%2Bo8aUQ9OMHHl9yMJ3j6Ob3CoFhqwz02oU8XY8RUPbqr0s9zDb%2FMjDBjqkAcszmi1RmFdsxwycn2OaTLZeWzPas7EmqJdXAOQY22znr%2B1yIAfYnvpkCH%2BxysUc%2B1cJy4iJr98T2vzyD2b1Zz66Tg7H2P1V2POqUVTeyaQrXtMjHsBnfJZ9weA%2BGJtXW4cGG0wb3cbb7rcLtZncXQVXxZVY77e9VmWMZdgP6FcBNc5XQijjCd4nmIgcAkI8YexdwVecJPItR%2BT2ZWTeg7u62sn4&X-Amz-Signature=15751b31496edee3944bbe465d204eec46fa3f1f9866b06f2ccde0e83fca92b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJJXCLG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWogdbzARow6XwoukKQn%2F%2Bhd9IMCBALNRkugUnF2q4pgIhAJ%2B4LAQvorZbvXzJt26NWlSjLkzwKaNTm9HMRHaji9%2FjKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX3JL8CU2lZv%2FpUHoq3ANOrHl0GCqDYnILL87vf1Sfj3nEBq6m5lctfGoeCch95llsaS2FPOABCbGVsp0bdNQ3%2BE8zhlJAQ0kNq5p6glZmNkvQW8tv7F%2BPPLuJnSFTFtECxxAy6CvrFjuAB0E4FRDqC6%2Fn4VEHMiwfM%2BncSHx0Ag4lwRS56N%2Fclth9kiSFbTT0PimOrrLWcckywAsJSaUtXDfNwD87AwnLbzpxbFJlU0fWKrMWG2Nt4L2heJv3gmrud%2FVjt1RW5tDdLWpC6qudppHfvckTfc1vCk%2FlAoNXUPvmAWHfTS8TUl1fmKkPLJ5oqc0IzT3eH7uBd2zBUtvhSbCrK2EVMpOd%2FVgBX3mD9VzweDUcyCOn2Ba%2B%2FGr0%2FR44kC9BzKtVLzjEqdIPpEn4v12WVew6ITYRZzJgag60LTzngSU3UZUHiFQDsSpeJEoca5tsngTMyaKM3RmtsmJAoV3OBFhA4ns8lTmUQP0MVFY5OaJ2WHEYEtB7Q5g3Q064%2BxYJERO5xqZLTX4ki9rnl66R5mtnUfcGamdDKlhmZ%2BaiDVQoOfAt%2FIjrDS4GYqdeA5ceQEckRkyl%2FTn1JOzTop1GzTEkskZ%2Bo8aUQ9OMHHl9yMJ3j6Ob3CoFhqwz02oU8XY8RUPbqr0s9zDb%2FMjDBjqkAcszmi1RmFdsxwycn2OaTLZeWzPas7EmqJdXAOQY22znr%2B1yIAfYnvpkCH%2BxysUc%2B1cJy4iJr98T2vzyD2b1Zz66Tg7H2P1V2POqUVTeyaQrXtMjHsBnfJZ9weA%2BGJtXW4cGG0wb3cbb7rcLtZncXQVXxZVY77e9VmWMZdgP6FcBNc5XQijjCd4nmIgcAkI8YexdwVecJPItR%2BT2ZWTeg7u62sn4&X-Amz-Signature=94e5bf4f0a6d1d8938e2ddb0bfc9508217d7d33ccbd2e1635edcd3096a5c626d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORKOHDI%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkC4N51S3UgqcRzOB%2FdEt1MHdIs%2FOVoBzzIydr5RGrEgIgDJNq3myA%2Fp%2FCYsFzED52Or%2FRb7hbVucn5zPpoXh2lhUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwC1h09pAIHuxAsVCrcA5k4gE4QZh8FjNzYEJ9D8qxlDbJWf02u3XcyKMsdmQe1Vrt6rRb4tR3WD7U8CElb9W7fogoS8Mb2S0yGB05VOXk3mKhAW%2F61TNGab7TERe%2BsQTIbg8vByBkLqUprytpzuFZJSYocGiBLqLWp1HMQ0mBKDb%2FL3V8T63Kbw06lJuzV8Gj4MxtvZ18SSvFQJZwOUfub%2FTpydDMajJD6Tuc9dW96mC3KaQFggeS87pp4BHcml3tWpoLM0YR%2FhuFJpdDSE85jFd8gpb5dinV6D6Yh07B4W9PpqskmrPxgnCQLE4RRbeTWmLjXiRDBZGWsqTurBwsFapEqjcvMYs%2Bx%2B1Ai7KKE6E3L1KutqdFMQFJTH5XKV3ej6bo0dKH4z6Q6jcSiRhzUp0eq48vCm05qJ3gmGIiYbZgJMTAxdVeZpgltgo8zmNp8HtfsKbp8ppeWziuBCCjKnf5w3GR1KAduBWhIQkUOetr1IlAvNSL%2FXGzxH08nz8hdoLeA87e%2FhpinQcDXCKaI7YYV3YYv6Tfi%2BCwpz7l%2ByyU6RmUTI9gTmN0sVMntV%2FzISmZKj0%2FB70oJKlRH%2FMBJlZoulj54swFKF0q5DHtsYN5IZniruNtKPAuczE0K1CKHnSvaaEOtFe3tMJ%2F9yMMGOqUBcKKWx5iPzCTriKYnVh8%2F7eCmGUadiwDVQBeM9BYBVdruNVN%2Fx3Q6XJU8sqtQbHK2vO8nZl5od3buJUTvFUZnx1TZnu2kwlQVtBKumWxYwNHKDjHvE8ccCLujNobKoSvzgw6501US8EuVJ9ctoJYsFe8kN8mFm0k3mgUhPUFgZXeld9wqMhI1iyy1SPt%2F49wAwwzO3LZObIgf5rc0vsRhzq3ir5se&X-Amz-Signature=79c5731b59a1fb090778dfa4cefbe1af100fc5e733c6c7603f95d893c5c5149d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHVOUJF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRUChzPLLVm75BGJtDoZXY26IEe1hVdFhBG6jJEaLApAiAaJn2KJ%2F6RcZmiJDgAe%2Bhd5qgBaA5adnAK0bFrOQfbwSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc7RhNIQmgQcL%2FJeRKtwDaIEVdh7zgT5C3M7Hjf8j2tT1H9VChHuabZNvIum7ucXZXY0DP8IFWkZH%2BesGcw5yrYR3J%2Fue%2FaKgPZVTg51j02R5kpkZ62GXLDbVHysXZxVGR3aTyDw2W6hXuFnRF0JttAqKTBlwu6p2%2BvTybmDi6uODgIWrvLVGhN75wzvbMHau%2FP7tp2SSJM9AYHR4thUCq2d8WUr6dOHRuOK6ag9HlC8XLduFd%2FXodsNt3aafdILSUoAJlEwLlyNmgko1rn0fINweEprs%2F4y28hE4c6cDdbIouNZcdkiKGVZifym%2BxZYTPy2pTXDMnSP45FStZa2Pxis%2FAjpJCGUy6yClNCq4QQ8WT4B0uTXmRnSTvfG8AXyILrI717xDuhryNYzDdpM8XzuAC5Mm4wOErBtRBwRwHX3hDiF%2Fnt7uBqngtSuh21iPhYrFeSm6a1ytn0FrzorjN09W3K6gPmD%2BNdKhlXsgiyb6qADYdHi%2BrmfNoz5CtDwZ44Lw6DygXuzFhgyzz7qBxzDyTF2eouGU%2BFSjB30CZFhj%2BC3S%2BvtB45Y7l%2BYHUP0g%2FgN%2FAK0YtMx%2F50aOSLuNIhJ9WWby%2FgAh8FCQHkSKZx7buhmYDVZ%2BcUaDopBVhMV6aCdXqfq6PEkCgYgw3PzIwwY6pgEti6jVdBVazCPWax2GkZwwpOM2UlMKZF0gXN3AkxwWTSzvAxy3J3CP9G6YnQp%2F4M0uBZegbDO4taFYfz6EOW%2BSJ3KqiVMk0hBJnNZMmNR%2B2NwxLKf3F2P8dnLKLddJrKL8d49OTTg566%2FbnriqbTrf4R2yZJ1p%2F%2BKXwc2ceweF44cH3uCK2kxcygwS%2FSpzRchz16Xhpn8E2brJg0rjOhIyLA4h8VsC&X-Amz-Signature=082090ef9a6ddb4c62bd4a91cb9d4da9dab73450a6220aae6077947403bced6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJJXCLG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWogdbzARow6XwoukKQn%2F%2Bhd9IMCBALNRkugUnF2q4pgIhAJ%2B4LAQvorZbvXzJt26NWlSjLkzwKaNTm9HMRHaji9%2FjKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX3JL8CU2lZv%2FpUHoq3ANOrHl0GCqDYnILL87vf1Sfj3nEBq6m5lctfGoeCch95llsaS2FPOABCbGVsp0bdNQ3%2BE8zhlJAQ0kNq5p6glZmNkvQW8tv7F%2BPPLuJnSFTFtECxxAy6CvrFjuAB0E4FRDqC6%2Fn4VEHMiwfM%2BncSHx0Ag4lwRS56N%2Fclth9kiSFbTT0PimOrrLWcckywAsJSaUtXDfNwD87AwnLbzpxbFJlU0fWKrMWG2Nt4L2heJv3gmrud%2FVjt1RW5tDdLWpC6qudppHfvckTfc1vCk%2FlAoNXUPvmAWHfTS8TUl1fmKkPLJ5oqc0IzT3eH7uBd2zBUtvhSbCrK2EVMpOd%2FVgBX3mD9VzweDUcyCOn2Ba%2B%2FGr0%2FR44kC9BzKtVLzjEqdIPpEn4v12WVew6ITYRZzJgag60LTzngSU3UZUHiFQDsSpeJEoca5tsngTMyaKM3RmtsmJAoV3OBFhA4ns8lTmUQP0MVFY5OaJ2WHEYEtB7Q5g3Q064%2BxYJERO5xqZLTX4ki9rnl66R5mtnUfcGamdDKlhmZ%2BaiDVQoOfAt%2FIjrDS4GYqdeA5ceQEckRkyl%2FTn1JOzTop1GzTEkskZ%2Bo8aUQ9OMHHl9yMJ3j6Ob3CoFhqwz02oU8XY8RUPbqr0s9zDb%2FMjDBjqkAcszmi1RmFdsxwycn2OaTLZeWzPas7EmqJdXAOQY22znr%2B1yIAfYnvpkCH%2BxysUc%2B1cJy4iJr98T2vzyD2b1Zz66Tg7H2P1V2POqUVTeyaQrXtMjHsBnfJZ9weA%2BGJtXW4cGG0wb3cbb7rcLtZncXQVXxZVY77e9VmWMZdgP6FcBNc5XQijjCd4nmIgcAkI8YexdwVecJPItR%2BT2ZWTeg7u62sn4&X-Amz-Signature=62d1118ff77f47fb3684b935225340fd2c5a4873698a384675f4a4901936e1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
