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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULNC465%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAneJj8eRyRjaIOVFwJMkJVNbPg7XGugKUu2wH5sSv75AiEAnVOuQurERUAbiLAdOc9m0vXzkcDBs5v8iP5fgqC5UU8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBeDNdjk5BNzCTZNxSrcAwIDXQgvv7jefkNZ%2BAZCUdPX%2FFYrjpLPn9qa4Te%2BK6mGFk0hEJXOvGUJr%2FX7w8F8lg2tZ7kNL9iqakoz4cfektMZ5aWydaAFsm4xhAWvbwWks1XZFN6RsN%2FIdQp3NmYfZ6LD9T8mljq7bJ8%2BQA9hREwkV4qZiULAI6c%2B4EZaq%2FJgJHPMaRfwnrDCVC7I0BKLqhQdYMzk0C%2B2j%2Fsc1ZTW5Kd9AjSsmAlVCRfSg3zVSY3kcSsAQYQjZieLKfqCii67B9u8Oay5D8azf6HIpAbx9oTOAfQyV3pPNC7HTtzNt%2FfZtAg0AUrAdyZvNn09UfsKh9s9i6Rq5Jrpy%2FdvhG8lN2vHF%2BophZNkE%2FS7YAu457IntQGqgcWrqY%2FN3tnus1HTMMdJG6jGu6aSKZA6bnRN%2Fw9U5V6RvRS295z%2FOCJw68aXwFArKknhTsM6qvp398kItD8Xrg2lQQ14TwNoq3JfHGMDTtokUhs1%2FmsT%2Fv0ClGbgvMtJqwqKw%2FdQpP%2Bueoa5okBBVC4NFpjhYpyCHn6AWjs%2FNTzTnBo5OClden6TpNfg%2BqGq%2Bn5XvQm4as16bwLGRJMaItDASingeRCzmSn%2BRw%2F6SnyBd%2B%2Fr2sO733M6z64gmyy%2Fnf6csYyhJnphMIyH7M4GOqUBHd5BWjC9nZPVaw7GeDdxZMNtDKkIW1k5GL6M3rkqtZwbqspby1wy6wJZtmqcVLOJ8NkctzrFs1PJf9KRD59YxxEXYwQZefHZvUl1IeJUbuhLG5RtL9ofhTUSgY7d2a%2BOY8UQk7pc6VEQ3W2nRdSktuTpIoIbvi2YiFObU8VuGXzfd6qkTYvvIWnXHOe3csz33v77iQqosAPxUSX5XQRcT1CHtGz4&X-Amz-Signature=1c67563caa8bc566b60fc86f9b7f4ec74afbb6295b7d3c4464a4206469291eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULNC465%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAneJj8eRyRjaIOVFwJMkJVNbPg7XGugKUu2wH5sSv75AiEAnVOuQurERUAbiLAdOc9m0vXzkcDBs5v8iP5fgqC5UU8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBeDNdjk5BNzCTZNxSrcAwIDXQgvv7jefkNZ%2BAZCUdPX%2FFYrjpLPn9qa4Te%2BK6mGFk0hEJXOvGUJr%2FX7w8F8lg2tZ7kNL9iqakoz4cfektMZ5aWydaAFsm4xhAWvbwWks1XZFN6RsN%2FIdQp3NmYfZ6LD9T8mljq7bJ8%2BQA9hREwkV4qZiULAI6c%2B4EZaq%2FJgJHPMaRfwnrDCVC7I0BKLqhQdYMzk0C%2B2j%2Fsc1ZTW5Kd9AjSsmAlVCRfSg3zVSY3kcSsAQYQjZieLKfqCii67B9u8Oay5D8azf6HIpAbx9oTOAfQyV3pPNC7HTtzNt%2FfZtAg0AUrAdyZvNn09UfsKh9s9i6Rq5Jrpy%2FdvhG8lN2vHF%2BophZNkE%2FS7YAu457IntQGqgcWrqY%2FN3tnus1HTMMdJG6jGu6aSKZA6bnRN%2Fw9U5V6RvRS295z%2FOCJw68aXwFArKknhTsM6qvp398kItD8Xrg2lQQ14TwNoq3JfHGMDTtokUhs1%2FmsT%2Fv0ClGbgvMtJqwqKw%2FdQpP%2Bueoa5okBBVC4NFpjhYpyCHn6AWjs%2FNTzTnBo5OClden6TpNfg%2BqGq%2Bn5XvQm4as16bwLGRJMaItDASingeRCzmSn%2BRw%2F6SnyBd%2B%2Fr2sO733M6z64gmyy%2Fnf6csYyhJnphMIyH7M4GOqUBHd5BWjC9nZPVaw7GeDdxZMNtDKkIW1k5GL6M3rkqtZwbqspby1wy6wJZtmqcVLOJ8NkctzrFs1PJf9KRD59YxxEXYwQZefHZvUl1IeJUbuhLG5RtL9ofhTUSgY7d2a%2BOY8UQk7pc6VEQ3W2nRdSktuTpIoIbvi2YiFObU8VuGXzfd6qkTYvvIWnXHOe3csz33v77iQqosAPxUSX5XQRcT1CHtGz4&X-Amz-Signature=360c283764c6d1f7ab57bf054a7dd1b6fdf72232bf092e57894eefd22b35fa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULNC465%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAneJj8eRyRjaIOVFwJMkJVNbPg7XGugKUu2wH5sSv75AiEAnVOuQurERUAbiLAdOc9m0vXzkcDBs5v8iP5fgqC5UU8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBeDNdjk5BNzCTZNxSrcAwIDXQgvv7jefkNZ%2BAZCUdPX%2FFYrjpLPn9qa4Te%2BK6mGFk0hEJXOvGUJr%2FX7w8F8lg2tZ7kNL9iqakoz4cfektMZ5aWydaAFsm4xhAWvbwWks1XZFN6RsN%2FIdQp3NmYfZ6LD9T8mljq7bJ8%2BQA9hREwkV4qZiULAI6c%2B4EZaq%2FJgJHPMaRfwnrDCVC7I0BKLqhQdYMzk0C%2B2j%2Fsc1ZTW5Kd9AjSsmAlVCRfSg3zVSY3kcSsAQYQjZieLKfqCii67B9u8Oay5D8azf6HIpAbx9oTOAfQyV3pPNC7HTtzNt%2FfZtAg0AUrAdyZvNn09UfsKh9s9i6Rq5Jrpy%2FdvhG8lN2vHF%2BophZNkE%2FS7YAu457IntQGqgcWrqY%2FN3tnus1HTMMdJG6jGu6aSKZA6bnRN%2Fw9U5V6RvRS295z%2FOCJw68aXwFArKknhTsM6qvp398kItD8Xrg2lQQ14TwNoq3JfHGMDTtokUhs1%2FmsT%2Fv0ClGbgvMtJqwqKw%2FdQpP%2Bueoa5okBBVC4NFpjhYpyCHn6AWjs%2FNTzTnBo5OClden6TpNfg%2BqGq%2Bn5XvQm4as16bwLGRJMaItDASingeRCzmSn%2BRw%2F6SnyBd%2B%2Fr2sO733M6z64gmyy%2Fnf6csYyhJnphMIyH7M4GOqUBHd5BWjC9nZPVaw7GeDdxZMNtDKkIW1k5GL6M3rkqtZwbqspby1wy6wJZtmqcVLOJ8NkctzrFs1PJf9KRD59YxxEXYwQZefHZvUl1IeJUbuhLG5RtL9ofhTUSgY7d2a%2BOY8UQk7pc6VEQ3W2nRdSktuTpIoIbvi2YiFObU8VuGXzfd6qkTYvvIWnXHOe3csz33v77iQqosAPxUSX5XQRcT1CHtGz4&X-Amz-Signature=cc76dff7a2325377eee5249e8642c166dd4f6fa52ade55431b4c20ea57f74033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZENS6AP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAUer7ooZVxuyqGJM06oaYzvBsKIiGMJdEFADAjWR43AiEAmHlaKaWyh5q18UK5d5z9koUAaUK90E0oAB9G5s1%2Bp44q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDOZflbse1pOC%2BP3aRSrcA35DwMMQIMLlUK6SsTfIX9OP0Y5NmE0LKr1Q2NxHfM29ZZCIkh8GXvQknVmr6MauXs%2BveHnZdX1h1CjIDv%2FrKMox5tjMaET0kTNB6LGGPGkwUu0MyWK8xklPXDqiSg%2FkQpJN15whwMkaMXAfpQYiBjFA%2F6hzV80VM1cII%2F51aaBxQT394thN%2BgyY41GmKmxqKjgmO0BNHtA3uWr3j%2BlBtXp3wFtbXttqbfnQL5cQTw2kaVGUIOQeIPYtWPXfLcEThfTap3Yvf0sTZaUIUmWwveI2ra3I4Dc9jj5l7SLDYn123CQl4ZNOENBdzOgajc52b4kOuu33j1Nws9RlqTOJgXtoSR999U4Lc7G6z%2F%2FpkSagVbijt1z5VCTkzVPXDjgT%2FfvyDO2xAS2aM1JglOx2YhhhCIlh3WGcI3YSkg3rrOGknKxQTbSPza3NnJcquYYap%2BCsCve19W3vWdx5wdP69qim7juTOzSIu3DCz7TS36RI%2BHv33UJwdkqGFXUglhmtydcF3YUH1n5gUrGD2cuECtTGgEgKEM9Jo9tCpM33qGkxuifbIWeEC1FNQAS8Ehn41ZKpBL8L2L96QphX1XqZltciOYAbg8PfKbyUYJc84BJXKxhsQMUYBAleN44ZMMeI7M4GOqUBtoDLRaWMv8Z9dDo1ytz52RcW%2BEbDzHD2k5moCfiGHgFHrYa7ktrV4M37fVmswFdcClifzzArO67BTfV2Z%2BBtCi7o7sZoHQDu4MpvkEc%2F0I2ooqPUFj%2BXP8EKLtHS0M0WhQJ2Yg5H1hzUlGl4KFaiBbHFKir0JUI2pSEDzhFPEbZlmx7RbDvZX6uFjSi8IxkbpOjH48VLveYR2%2BY4jNUsFjyGVJXj&X-Amz-Signature=9d64518adffd42ebbc9587015dbc61665013cbcfc19fd143718c9d105c949db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGBOFMLM%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfq%2FVWDJ5qMTdPAeQ1%2Flh0X5VTD2cF1rzANWQWc79u3AiEAoy0jCYMuP%2FvrpGl32Hk9J%2BcKmtRkGOlHXg3cv1SDwzkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDCD%2FiGqMMEMIhRSrzCrcA0cEHFiUAJou1IFOP4fOTVnRgBsL1WVFL4rI%2BnPOsWGIvWieoh%2FL9cXJ6%2BAe10VsA5ofoa4KC69lfdJjMhQ7AR6lP%2BHnEQbWAW0pGm68Pq%2BtG6cOVbufMiiq7XEr4AGXpFHq2GRkKqmNHcj%2FpNCoqKw2l%2Be8VFzpv1oashqcdCWy9oJW5Kg7oGAlwn2gm4fl%2BlKghm65XXcNVQsL0CUdCkS1FxEDCCe9gCX1klii%2Blm9Wu3plN7vu%2BH24C72rF1iqxd7BpZIOeVfkrbwuIVrtwLwdveVXprS7BGhSSLnM37ld1W0bNOAYSGWvbC0HTa%2BgCGw8LhuuGPQXqSIbBn1xa7UHNfMezmLcLLjw8ljqGtj1%2FtIZLIzt2OZkueVbhNwVNyGPpJTDzcyGsRl5r%2FDmvd1JxNLAwrkUir7zSF89LkKVr%2Fr%2BHc3e54xXHM%2By7lWqKWXMxC026CTlgRs5xgd7RxVtfIiIjTHfDf7tjF5mIzZEsPalqaMGbNAtiYMQFwJU3Aw2I91bQU7MOkUsQfynlw4UpVg2TaRRKw6O3PPi0O7wl1HzKP%2BV9ChoiuBG8ZKwqwpcd2xajRqikApdu3Tw6GgTLvxxmSteSuIwBLjR7S%2FVovDMi7RpfsOHE%2FWMLyG7M4GOqUB%2BYOAluBe63%2FW6L70rzVHM15xDXbdelNkgTejkB9A%2FnbVC1sayrp9o0Wcd1IqPc5rQj95p0uK1EoUfuvnBJ%2BJyVnCGNC7LS6K%2FjUr23T9klw%2BkVcC8MFXLbn2zXxgzjj%2FiW3IHv%2BGTc7gs04ymFKGhAYec8aEEjmf%2BSxOqbETwKYMAH9U8l%2Ftna%2FOwR%2FRXBP%2BVHL93UB%2F7rsOu3FSYrLx1WMPotxy&X-Amz-Signature=d08547e680bc776d9511134f80f0c4fb374abe8c62beed4c39b54e44ae56ead6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ULNC465%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAneJj8eRyRjaIOVFwJMkJVNbPg7XGugKUu2wH5sSv75AiEAnVOuQurERUAbiLAdOc9m0vXzkcDBs5v8iP5fgqC5UU8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDBeDNdjk5BNzCTZNxSrcAwIDXQgvv7jefkNZ%2BAZCUdPX%2FFYrjpLPn9qa4Te%2BK6mGFk0hEJXOvGUJr%2FX7w8F8lg2tZ7kNL9iqakoz4cfektMZ5aWydaAFsm4xhAWvbwWks1XZFN6RsN%2FIdQp3NmYfZ6LD9T8mljq7bJ8%2BQA9hREwkV4qZiULAI6c%2B4EZaq%2FJgJHPMaRfwnrDCVC7I0BKLqhQdYMzk0C%2B2j%2Fsc1ZTW5Kd9AjSsmAlVCRfSg3zVSY3kcSsAQYQjZieLKfqCii67B9u8Oay5D8azf6HIpAbx9oTOAfQyV3pPNC7HTtzNt%2FfZtAg0AUrAdyZvNn09UfsKh9s9i6Rq5Jrpy%2FdvhG8lN2vHF%2BophZNkE%2FS7YAu457IntQGqgcWrqY%2FN3tnus1HTMMdJG6jGu6aSKZA6bnRN%2Fw9U5V6RvRS295z%2FOCJw68aXwFArKknhTsM6qvp398kItD8Xrg2lQQ14TwNoq3JfHGMDTtokUhs1%2FmsT%2Fv0ClGbgvMtJqwqKw%2FdQpP%2Bueoa5okBBVC4NFpjhYpyCHn6AWjs%2FNTzTnBo5OClden6TpNfg%2BqGq%2Bn5XvQm4as16bwLGRJMaItDASingeRCzmSn%2BRw%2F6SnyBd%2B%2Fr2sO733M6z64gmyy%2Fnf6csYyhJnphMIyH7M4GOqUBHd5BWjC9nZPVaw7GeDdxZMNtDKkIW1k5GL6M3rkqtZwbqspby1wy6wJZtmqcVLOJ8NkctzrFs1PJf9KRD59YxxEXYwQZefHZvUl1IeJUbuhLG5RtL9ofhTUSgY7d2a%2BOY8UQk7pc6VEQ3W2nRdSktuTpIoIbvi2YiFObU8VuGXzfd6qkTYvvIWnXHOe3csz33v77iQqosAPxUSX5XQRcT1CHtGz4&X-Amz-Signature=278d8dcd570cc82ea9cd2a7774f0aa143be8cbb6556f2859b06ad0a3f1e4c8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
