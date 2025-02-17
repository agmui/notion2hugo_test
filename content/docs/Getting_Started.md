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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMLBIK2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCzK0JdrAhKkwFK7g%2BDuoZdERwrp9Kcu7fiuJCZGaFBTgIhAKlTFZF4puRRUCmqnDZhACMxLXG9axuQNKvCPMNcqKO7Kv8DCHAQABoMNjM3NDIzMTgzODA1Igz2qTkE8Gd7m21ZSDsq3AMUntgAjx93aVF%2FXHAVklr2AbtvAMvt3noI1g8IebyvuZ69Vz4KfoK3vTwVMoBfB0K1oq4jpuZIBtoEypApPK9yhNPDgUrm0J0%2FP8UkTW7qxMGO5lHq2ERbQjNlxAF%2Blp6Z3dmZefOfJej5ZjKEpxGhST8qMA5%2B%2BIIAYXt5ymoqTacxqPoDjVX5xaOCB2QndWKngS68qSodXeZo8w%2FdRCq7ZWXuinl2J0jWQQdLVW3ILeP1PG%2Bl4bQ%2F0Pu7JVllgtKtR%2BC%2BUY%2B7%2FWn2IyOnjMQ%2BSq6SN8eQMDZFby7vmZYF0AcYXrYYXZ9dL6PHHe5c9jBQ1HilGh8%2FerLos3iVzoKQPFn%2FkUglgL%2BG%2F%2FdVbLWSrplJiHzoCSg8U0QD0Cf70hGV1yAGS3ALlgQQP0vU9G7Tq6aBkcOR7iTnLJlnsrLD%2FQgYzQeum7KG4nupfatct14axAHvIyLZIe9KnABH1rX4uqdbt5jMY7LyTWOHiUFWZLR%2FYuH66NWVfyFdP32l0WUyAZ918zEZJJb7hPQqX%2F2njEEZi7%2F%2FPge9SgJJ0D2AhzlfrQgdmlfnNEYVIy5xCBhvQqLiyR9d60GmvVLz3LfOUA%2B5JPMY1hXDG7AcZUBvZrGDHxsCGEBCaMHpHDCRr8u9BjqkAeZ0E57JU%2FUKVVOl9zkWUX1F0P2zL2Dq2meGVLRmvglqSECsqnPEOjaGge4DrZ3Ws1VQ7LgEySHrAW89Cydet7F%2B4OGIpWuIbkNVfW9mePFMO%2B6xScQWE12ooosuwZmxJztQwLYeCzt0C5nt6nRW27WJCEL3q%2BTm1xDpCDo2FZCh6dNm8mQ8Ck92kJ%2B0NLs22jH5L9U9CySUc6BqvBemZ9z%2F8cuN&X-Amz-Signature=a093d0becbcfff3b4b913e5abc6463f859498ec6999e0167e9624d585048e01b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMLBIK2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCzK0JdrAhKkwFK7g%2BDuoZdERwrp9Kcu7fiuJCZGaFBTgIhAKlTFZF4puRRUCmqnDZhACMxLXG9axuQNKvCPMNcqKO7Kv8DCHAQABoMNjM3NDIzMTgzODA1Igz2qTkE8Gd7m21ZSDsq3AMUntgAjx93aVF%2FXHAVklr2AbtvAMvt3noI1g8IebyvuZ69Vz4KfoK3vTwVMoBfB0K1oq4jpuZIBtoEypApPK9yhNPDgUrm0J0%2FP8UkTW7qxMGO5lHq2ERbQjNlxAF%2Blp6Z3dmZefOfJej5ZjKEpxGhST8qMA5%2B%2BIIAYXt5ymoqTacxqPoDjVX5xaOCB2QndWKngS68qSodXeZo8w%2FdRCq7ZWXuinl2J0jWQQdLVW3ILeP1PG%2Bl4bQ%2F0Pu7JVllgtKtR%2BC%2BUY%2B7%2FWn2IyOnjMQ%2BSq6SN8eQMDZFby7vmZYF0AcYXrYYXZ9dL6PHHe5c9jBQ1HilGh8%2FerLos3iVzoKQPFn%2FkUglgL%2BG%2F%2FdVbLWSrplJiHzoCSg8U0QD0Cf70hGV1yAGS3ALlgQQP0vU9G7Tq6aBkcOR7iTnLJlnsrLD%2FQgYzQeum7KG4nupfatct14axAHvIyLZIe9KnABH1rX4uqdbt5jMY7LyTWOHiUFWZLR%2FYuH66NWVfyFdP32l0WUyAZ918zEZJJb7hPQqX%2F2njEEZi7%2F%2FPge9SgJJ0D2AhzlfrQgdmlfnNEYVIy5xCBhvQqLiyR9d60GmvVLz3LfOUA%2B5JPMY1hXDG7AcZUBvZrGDHxsCGEBCaMHpHDCRr8u9BjqkAeZ0E57JU%2FUKVVOl9zkWUX1F0P2zL2Dq2meGVLRmvglqSECsqnPEOjaGge4DrZ3Ws1VQ7LgEySHrAW89Cydet7F%2B4OGIpWuIbkNVfW9mePFMO%2B6xScQWE12ooosuwZmxJztQwLYeCzt0C5nt6nRW27WJCEL3q%2BTm1xDpCDo2FZCh6dNm8mQ8Ck92kJ%2B0NLs22jH5L9U9CySUc6BqvBemZ9z%2F8cuN&X-Amz-Signature=11f1919877f992d1ea0a9608b95c411f55d4ad06fe13c5b2bd44bc95b965df57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM3IN6KK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCGvJ8f5omIteRt9DIXapKbe0rZMWNKMNJTRKrjwNq%2B%2BgIgKNn9Bpdq9m8WS43TTU1%2FxyvbIVMHmZHGRGAwX9wYndMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBHXkeEVlT6cTHNo4SrcA4nTL1gYFQjEz6E%2B6Ha2R0rQ7Ud74FPpyDjOX3GY93pLWOT5uVUZqu69pxKlCuH%2BJZSma9CxXXbtdcZdJfpXZkcPgktN1Qcsv0xsxVoamE34Q%2F%2FWGAik5azU%2FxFqR%2BIrpvirzmgZUlJ0m4A49nPnF7VtXMbgoDcn4yH55vzSZwFPo7AC5n5uZI0QtcYnvX8z2KtMz3raxpROgt2DDA1akcB0dkmzbnpGmEolCGJiL1Bm4ORw6ym7Ol8EG6rTM228JUL9U1nymwJE7F2hEqhtKcUhzWoDLBueuPnRa5oY0yYcPCucFuaQY1GKEw0TmeIUhrLofZAUKduQNlghpS502Yv742snK4Z%2BymqeMMcrsg3v8BTYmbZ9NBFEi0vQZNBYSnOXugU11t8pmbJgaS7BWMMb%2BP9X6hjGUoqv7lAp3MjMhBA8PAYkY%2BAsoqQC25AYVQGeAtlg%2FyRWOdp9RQ1TLxy5rXS7LP%2BpfQYFOU%2FuCwWvYYuH4F7%2FybqEEJskeG0kNJizr5cR%2Fz42m5qdaae5t10KeQmG0imoMQRyAG4JPVkG%2BDnCQ5w7sUQEKB5VytlSP8hIVUGM91cOgvS98lC7ThC2padyNGrzA0ZqIUT7JcspJCfrZbuxhSfhFxYTMOuvy70GOqUBSqPSGoQoZqzE1FQmLZjl2AKYFYrt%2BBRjfrXKgzDXGssRN7jumQxbfDIXTD4TMxuzrn9iArcQ81GBZB0lDtR09oRsb%2BUSRZepN0UF57WasCOE4npytoY8IVvofOAs0lxELI%2BZEiU3U7LEw%2FU1zT1R7hWEXQm1G4Tec0jy1CCEVHWamMx09hy2ycWNjb%2FAfhiOsPAy%2B7f3uTUfIOdLMAZqQU2Hqqyh&X-Amz-Signature=35e8422d4475e4ec40181697a5248157701e611c6376d2252eb5a3864788ff82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676PPPT7X%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCn0szV5zOOIZg8kHNp6Jm7pnBwtaqo0g4jnChcTZH89AIgDsR3CK2nl7tzBh3nwVeiV8ujv6l66cAp%2FJxwS4TkTnUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNe7IQrjB8CKu876uCrcA0aVYHhviaKJlqvtmOykFt7dGirgbN3NivxL1BMRk1l45%2BUAAoHnQeo9bhf%2FhXC5eRyAONj3xJtiiYRyjUZxyHJ%2FFzqe1%2B8ciO2oLpA5lK%2F2F1xX%2BbaZSneSF4ag2gOg%2BYaFn112nVv0%2Bkx9yGD2CBej7zI%2BXtPzuZOPT9hLYbvw4L%2BBjUi3YxszazXBtoAAKtzdstF0%2FEpIAZbNtU1oNMv2D1U43Cbv9BC1YWTwb%2BaKEFzo3fbzvCgNtqptOmz1b6cxTgvYLjXl5%2FchHZZEuZs%2FGOzcci9%2FAWnZxqpcqh6zLPpm8nyhvxudxy7Ap3K6yUM9jqt40hLFnpJpCi2%2FjTXElozZl1L6NPjyeNrTxxJC4peK3J3gIh3U6TmLUvyEo82Axs3%2BKw0Ky3lU3sMVRx2gVEXrJ5Clygv%2BZlz3y9uNF%2BoSFz96%2BAfJWivaRkIj1rKGCN%2FKA9VMVbTKiNeTOMZQlRK5Xwjr0nP%2B7sHw26PtoJyi6RjliUdRpFI9BNBxtVPmYkzw7z%2FPBWa4lOo2aDfslUjk4JzJwi2FZmcLkang8WvhrAGkxXNb5B%2BkXgQcoGf6WoAcLIHx6u%2F06HwKdda91xABqIVhjeFr09SZIWpkykcpqmDIPWX2mIMrMOWvy70GOqUBaqJxHhgSxG4cwPxNK2NBaWphLarSNPwJhlelv9hFRlGtglocDvf73admtkaOvaFvakd6O%2FV8x%2F5hoKz8WsRdWwx%2FP%2FQ54I8HASstVtd1nawadwIIJDMAQYimG%2BmM2jQ%2BlMxoAyR1T0TDTdDhoawGbKoz3f9cP6ksP%2BbCU48GgqhEt5fr8yYF0jIT6dG%2FwkeY18ah%2BOTI1ooqRYLoCz9JhNTUUq8y&X-Amz-Signature=eaadfc69257138bc1c7f62b825d5077ddae6b66a96558ae2e2ba46fcbee1e72c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMLBIK2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCzK0JdrAhKkwFK7g%2BDuoZdERwrp9Kcu7fiuJCZGaFBTgIhAKlTFZF4puRRUCmqnDZhACMxLXG9axuQNKvCPMNcqKO7Kv8DCHAQABoMNjM3NDIzMTgzODA1Igz2qTkE8Gd7m21ZSDsq3AMUntgAjx93aVF%2FXHAVklr2AbtvAMvt3noI1g8IebyvuZ69Vz4KfoK3vTwVMoBfB0K1oq4jpuZIBtoEypApPK9yhNPDgUrm0J0%2FP8UkTW7qxMGO5lHq2ERbQjNlxAF%2Blp6Z3dmZefOfJej5ZjKEpxGhST8qMA5%2B%2BIIAYXt5ymoqTacxqPoDjVX5xaOCB2QndWKngS68qSodXeZo8w%2FdRCq7ZWXuinl2J0jWQQdLVW3ILeP1PG%2Bl4bQ%2F0Pu7JVllgtKtR%2BC%2BUY%2B7%2FWn2IyOnjMQ%2BSq6SN8eQMDZFby7vmZYF0AcYXrYYXZ9dL6PHHe5c9jBQ1HilGh8%2FerLos3iVzoKQPFn%2FkUglgL%2BG%2F%2FdVbLWSrplJiHzoCSg8U0QD0Cf70hGV1yAGS3ALlgQQP0vU9G7Tq6aBkcOR7iTnLJlnsrLD%2FQgYzQeum7KG4nupfatct14axAHvIyLZIe9KnABH1rX4uqdbt5jMY7LyTWOHiUFWZLR%2FYuH66NWVfyFdP32l0WUyAZ918zEZJJb7hPQqX%2F2njEEZi7%2F%2FPge9SgJJ0D2AhzlfrQgdmlfnNEYVIy5xCBhvQqLiyR9d60GmvVLz3LfOUA%2B5JPMY1hXDG7AcZUBvZrGDHxsCGEBCaMHpHDCRr8u9BjqkAeZ0E57JU%2FUKVVOl9zkWUX1F0P2zL2Dq2meGVLRmvglqSECsqnPEOjaGge4DrZ3Ws1VQ7LgEySHrAW89Cydet7F%2B4OGIpWuIbkNVfW9mePFMO%2B6xScQWE12ooosuwZmxJztQwLYeCzt0C5nt6nRW27WJCEL3q%2BTm1xDpCDo2FZCh6dNm8mQ8Ck92kJ%2B0NLs22jH5L9U9CySUc6BqvBemZ9z%2F8cuN&X-Amz-Signature=a8603ba2d2573957692a9fb3374cf5b2726cfbbff6b0daabd854b455ce99653a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
