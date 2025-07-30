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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75325YC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsnoI%2BTLfINm7gFnBC9XlrYZKRmdFvOfD1Fi9C1SqRkAiEAhti7EJZZcz6M1dGoEQQiXL3KfVsVvuCv5utl9NYK5lMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRglYI3CZt%2Fl78uZircAzvONYFA0ruwOoN5XJFmSXn%2BHd6i5R5frfBjuQcGHZhCq7PGthLQowP87ewtCUJSUP5Ti3HIbaqIsZY4YUYbeWoJIpDWU2kowr8jTCKaZmXClT8JBMapyZaCrce08fG2%2F6%2BoxYdevRzAzEFYlfWFNrRwRu9YqLM9nvF6WN7cMqMxU2Fq68y8rUyk8Xinct%2BnogYJinSrzF6xpMKuEk4UZ%2FcsMgfaLyFS4A%2BM4wWFsmTWagENpST9GgP9FWZ2MGViXl9y0U3Iw3Jsa2KJ1jKvkjueoJ6jsOqr%2BTRuPWpKADOXdQy%2F6qOF5Ak%2BzAum%2BUbYET8AS6IAaleiIOXeI0Ot6jkTvyF7osENNKaOTdI1hVh0gOlLJ%2BvwFzGp1KeBG5WDUQHyZKexTKbGwsSe85W2JYpqtwnq%2Bu2Rqk%2FY3JpZGe0Vj76nfe%2Fy6XP3BGymA6hEGjkUME0ZaIZ701X7Z1fyqJhJauMkVQTZ6gF4HT8AVMkjmjmbnZNnG40M91kb2J4FQPTbbNXMiGoo9O8E45LjCyP2Y3Q2aOcPSwQZBgvfO7EaeH556fjMLm6xqxC3nvKaRHDZwzP8mLx7k3VYJA%2BDWT1wH%2FDGqf5Ne8Xa7SvY6808%2FVuYieZqMYD40X3mMLrypcQGOqUB%2BsEFJSIX44yjg1R60eBlNPuhSD9MPkWrVbTsRA6FphugXK3BzbBdGtKoYJJ%2B03CKnaQewNx7JXyye3AtDw%2Fyfu2vWgyphZwhByPjBY88VH1X3LSSKlpBRcgtZBA09zqZyttf9jwGPhSWyxSuq0F3LIih57dr8JnJZt9AYjh%2FtRwANCz59jT%2B4Om1mZgzl7AJJFt7AJYNZtBZTbvYQqCcJgqLzw9%2B&X-Amz-Signature=a4514bba89fe64148c831b2241d3cfd9f4ebe597cf70e924ceee0b97be82722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75325YC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsnoI%2BTLfINm7gFnBC9XlrYZKRmdFvOfD1Fi9C1SqRkAiEAhti7EJZZcz6M1dGoEQQiXL3KfVsVvuCv5utl9NYK5lMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRglYI3CZt%2Fl78uZircAzvONYFA0ruwOoN5XJFmSXn%2BHd6i5R5frfBjuQcGHZhCq7PGthLQowP87ewtCUJSUP5Ti3HIbaqIsZY4YUYbeWoJIpDWU2kowr8jTCKaZmXClT8JBMapyZaCrce08fG2%2F6%2BoxYdevRzAzEFYlfWFNrRwRu9YqLM9nvF6WN7cMqMxU2Fq68y8rUyk8Xinct%2BnogYJinSrzF6xpMKuEk4UZ%2FcsMgfaLyFS4A%2BM4wWFsmTWagENpST9GgP9FWZ2MGViXl9y0U3Iw3Jsa2KJ1jKvkjueoJ6jsOqr%2BTRuPWpKADOXdQy%2F6qOF5Ak%2BzAum%2BUbYET8AS6IAaleiIOXeI0Ot6jkTvyF7osENNKaOTdI1hVh0gOlLJ%2BvwFzGp1KeBG5WDUQHyZKexTKbGwsSe85W2JYpqtwnq%2Bu2Rqk%2FY3JpZGe0Vj76nfe%2Fy6XP3BGymA6hEGjkUME0ZaIZ701X7Z1fyqJhJauMkVQTZ6gF4HT8AVMkjmjmbnZNnG40M91kb2J4FQPTbbNXMiGoo9O8E45LjCyP2Y3Q2aOcPSwQZBgvfO7EaeH556fjMLm6xqxC3nvKaRHDZwzP8mLx7k3VYJA%2BDWT1wH%2FDGqf5Ne8Xa7SvY6808%2FVuYieZqMYD40X3mMLrypcQGOqUB%2BsEFJSIX44yjg1R60eBlNPuhSD9MPkWrVbTsRA6FphugXK3BzbBdGtKoYJJ%2B03CKnaQewNx7JXyye3AtDw%2Fyfu2vWgyphZwhByPjBY88VH1X3LSSKlpBRcgtZBA09zqZyttf9jwGPhSWyxSuq0F3LIih57dr8JnJZt9AYjh%2FtRwANCz59jT%2B4Om1mZgzl7AJJFt7AJYNZtBZTbvYQqCcJgqLzw9%2B&X-Amz-Signature=500d62adfafa682d2f6b99baf48435274d473d481d68db79514b2e6d980ed151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75325YC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsnoI%2BTLfINm7gFnBC9XlrYZKRmdFvOfD1Fi9C1SqRkAiEAhti7EJZZcz6M1dGoEQQiXL3KfVsVvuCv5utl9NYK5lMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRglYI3CZt%2Fl78uZircAzvONYFA0ruwOoN5XJFmSXn%2BHd6i5R5frfBjuQcGHZhCq7PGthLQowP87ewtCUJSUP5Ti3HIbaqIsZY4YUYbeWoJIpDWU2kowr8jTCKaZmXClT8JBMapyZaCrce08fG2%2F6%2BoxYdevRzAzEFYlfWFNrRwRu9YqLM9nvF6WN7cMqMxU2Fq68y8rUyk8Xinct%2BnogYJinSrzF6xpMKuEk4UZ%2FcsMgfaLyFS4A%2BM4wWFsmTWagENpST9GgP9FWZ2MGViXl9y0U3Iw3Jsa2KJ1jKvkjueoJ6jsOqr%2BTRuPWpKADOXdQy%2F6qOF5Ak%2BzAum%2BUbYET8AS6IAaleiIOXeI0Ot6jkTvyF7osENNKaOTdI1hVh0gOlLJ%2BvwFzGp1KeBG5WDUQHyZKexTKbGwsSe85W2JYpqtwnq%2Bu2Rqk%2FY3JpZGe0Vj76nfe%2Fy6XP3BGymA6hEGjkUME0ZaIZ701X7Z1fyqJhJauMkVQTZ6gF4HT8AVMkjmjmbnZNnG40M91kb2J4FQPTbbNXMiGoo9O8E45LjCyP2Y3Q2aOcPSwQZBgvfO7EaeH556fjMLm6xqxC3nvKaRHDZwzP8mLx7k3VYJA%2BDWT1wH%2FDGqf5Ne8Xa7SvY6808%2FVuYieZqMYD40X3mMLrypcQGOqUB%2BsEFJSIX44yjg1R60eBlNPuhSD9MPkWrVbTsRA6FphugXK3BzbBdGtKoYJJ%2B03CKnaQewNx7JXyye3AtDw%2Fyfu2vWgyphZwhByPjBY88VH1X3LSSKlpBRcgtZBA09zqZyttf9jwGPhSWyxSuq0F3LIih57dr8JnJZt9AYjh%2FtRwANCz59jT%2B4Om1mZgzl7AJJFt7AJYNZtBZTbvYQqCcJgqLzw9%2B&X-Amz-Signature=3dafd3aa37ebc0e7ad9bf0e6f2f41ad34c91a9857fcbea6f5f58a65f80c1d9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTVNBKM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHb%2BWJZ07s6oXqi1hhXDrmgJiuDN221rDTLOJKvTIbSdAiEAxDvlU4qYPNBkj7%2FgWe0GwnJHbHM%2FQ8uTScSQqe3nzlYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5TZLkTN61lfWbICyrcA%2FBVYQXA9xOxpKctB4To0Aa091yE1V8jPtw%2F1fRs1tK%2FtJApJ5jYLIYOqWqWHqgW2gHD3h%2Bl0j6NkA7oSe0r4Jgpj4VKtZBpQAkNXC%2FDqcibRHQP72nUhD22uj5fq0OXRAI1C%2BT5V4M5nLOMc8omJk%2FtAVdQkmD7n0pA6Wub5qbiGZS5Av7vCztzKDW43W8ASLKe6CZw7WS7PUbhPeAheh6iPTpCmC2OQSUOFIIxtcBoCRbj1I8HjA3wU9mq%2BrdzaFw%2BjGt1Y53lTZTlGaxVNuRdUCTF5wevKiYFlj1z%2BGC3Mbv%2BfazKaSxK91AkfZW5WBe0wy%2Fpbxu6YFmSf4URG0xNnuyVqIm4fE2as5VdZKZSmP2tbHi74RLI3jBkbQ798OLAX7yFSgcHlj3s%2BjvfDQpRUcnOmMo6BwHs5Z3JVsi76HuofFv9ral%2FvLJ%2B8AZ4UzRtK89OF88pNiqkgo2N9%2B%2FPk%2Fz4tO0S8lnaGZN5theYMA0IXA9UxGj9Rhd40IWVkNj%2BriO0mSSkbTMAgKAEHToL8BRvAAdMoIDtAsZyUeyElvVB3iCMmIK%2FfigYdMDPgc4wxMlVABRUMyAMX9moLQTF%2B5qQNyoDRBYf1k8KcXClTYbotKnwbi%2Bm%2BRelMInxpcQGOqUBGGOPI6A4N81YiHtSBVYg0G%2B94PSL%2B%2BSaOZlbIMOnVSuyLf5HPbL2Q1KxbS0EjE%2FgzWU6Wc3muvifMutUJCZuVqD%2F12Z1gGKuxkcK1KKZ80g1MU%2FwTXOnszd8JHUupw%2BuK99RwViFafVc8s1gGOkuv0YIfFve6O9G22MnFlcR1NwiL9886gulzLda3xo%2BOlXkwzYz9ayQHc%2FQ0CO%2FuvcKcSBXBM2Y&X-Amz-Signature=b36a4f7174e277e3cec7c56b409c1394ce8134f8308fd5e291c676ae4589a0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SRP7PN5%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo1o7Moq7LGpRB9sj4wyI8x02GPBXjeL%2FNWU6PleVkigIgPn1jKezyvEjypSnkDqWNkmPOjuvnsM%2F6jDISel4a%2FjoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKriD77GjYff%2F%2B6AircA8EZlRnx48fHu4lGgbFGfZUROXIkTbslO%2FvLaj3HJTQuxBTN11zZ%2BdJ5sMYNLJRQMgZSDFZKkfimp0UwinuD1NglggsvGUieyh8ncIip534JBs1wCzuR2s2V6w%2BbVS7uM8SW8y0jIYurCvuB%2FWWyzuf8S8Q3tvu3NzFOi8lm5A606DzlxflGs4d1l6Ho17L%2BfRb5fHd8jelmBF0bn8GmZOxeJU%2BJPiBAzyc%2Bk0iKQoF8c5dwUHzqDTN6kKDFhMTPtKkKAXzmqHkhWU0%2B4%2BWbxCj4qc9FonqvdAjQQUChM5NMk%2FtVhZXVAxwaY9AqU8xWkyOk126dBsFEzWXaEo74mdPOeVbHKgT4uE7xHnqEw98%2BtorQBuKOltxY5%2F%2B%2FuNjA7cCkrOOAI%2B1F%2Bfn6kNpYcUUWl%2BsQU1TJfNxGGhmR8itQ%2FchklNesaz3xy7FXj4ks1GwPjOuh03Rd4f1F4r%2BGc1VmfwtcLjrOZRm3bM6duQSUELSpVWzghYTLuflwV%2BzdZeDdObcumTzGKeN%2BIrYsNkC7QRbxVei9Wck5tZNDeWbfS3ETwFWkKu%2F%2B5vVSDCxvQ65qWnIarH%2BskI8KdO8gYOLmS8Ihgp3Az1vW0JFJhVaj53yJtMSkaMZCLSkoMPnypcQGOqUB3O6rmyD%2BL3IswpI6eJ95zwu%2BMyYwxn1CT9DLXrqSXFaOan8ln8FJKXNF%2FXSj4Mc536nN9h4vXMyXPwHItVISFGC3fEfVEVoqIkAxfLdgar9E9zVp5C12QThuFrNnepb3jmpg4LyKGlVlLZDwN8cxq29rASRjXTWF5JuetC0yQWXC6hijMsmSfizJPpX9wekLV%2FnSzjyLto9EZQBozYwcog7bfMgo&X-Amz-Signature=dc24f1f03fda13c2d37334639b9d0cd4401436bf39eee7b4981da1c91d0f16b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y75325YC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T025431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsnoI%2BTLfINm7gFnBC9XlrYZKRmdFvOfD1Fi9C1SqRkAiEAhti7EJZZcz6M1dGoEQQiXL3KfVsVvuCv5utl9NYK5lMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRglYI3CZt%2Fl78uZircAzvONYFA0ruwOoN5XJFmSXn%2BHd6i5R5frfBjuQcGHZhCq7PGthLQowP87ewtCUJSUP5Ti3HIbaqIsZY4YUYbeWoJIpDWU2kowr8jTCKaZmXClT8JBMapyZaCrce08fG2%2F6%2BoxYdevRzAzEFYlfWFNrRwRu9YqLM9nvF6WN7cMqMxU2Fq68y8rUyk8Xinct%2BnogYJinSrzF6xpMKuEk4UZ%2FcsMgfaLyFS4A%2BM4wWFsmTWagENpST9GgP9FWZ2MGViXl9y0U3Iw3Jsa2KJ1jKvkjueoJ6jsOqr%2BTRuPWpKADOXdQy%2F6qOF5Ak%2BzAum%2BUbYET8AS6IAaleiIOXeI0Ot6jkTvyF7osENNKaOTdI1hVh0gOlLJ%2BvwFzGp1KeBG5WDUQHyZKexTKbGwsSe85W2JYpqtwnq%2Bu2Rqk%2FY3JpZGe0Vj76nfe%2Fy6XP3BGymA6hEGjkUME0ZaIZ701X7Z1fyqJhJauMkVQTZ6gF4HT8AVMkjmjmbnZNnG40M91kb2J4FQPTbbNXMiGoo9O8E45LjCyP2Y3Q2aOcPSwQZBgvfO7EaeH556fjMLm6xqxC3nvKaRHDZwzP8mLx7k3VYJA%2BDWT1wH%2FDGqf5Ne8Xa7SvY6808%2FVuYieZqMYD40X3mMLrypcQGOqUB%2BsEFJSIX44yjg1R60eBlNPuhSD9MPkWrVbTsRA6FphugXK3BzbBdGtKoYJJ%2B03CKnaQewNx7JXyye3AtDw%2Fyfu2vWgyphZwhByPjBY88VH1X3LSSKlpBRcgtZBA09zqZyttf9jwGPhSWyxSuq0F3LIih57dr8JnJZt9AYjh%2FtRwANCz59jT%2B4Om1mZgzl7AJJFt7AJYNZtBZTbvYQqCcJgqLzw9%2B&X-Amz-Signature=d2112b0bda06e1a3985a8487805a6313e36e2656f22c8af18f66ae75806a54fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
