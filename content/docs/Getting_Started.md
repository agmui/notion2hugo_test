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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNU7SSA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDJL8e1ktdKXjUPz8wEdUMh2V2CgXawkm5j46ovJuYSnwIgJX9r1XjA9FizT0klEGh2tQUR9DLVC6swHsPUog7%2Ff%2FgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK3oeHeJQHxjRspzSrcA5G5bjyE0ZQDLsgwbsDjtc%2BwGBcgLInrkLqZ%2F8%2FAg06T0kmqG41ot1OFC1JqJ7w%2FbYn74BxMVkiHO1CT2My8j4SRsUXWTKhmflZK9iH6oD8x0IznKI2AJfkMrKnlCQSmkycZUjwb2xdaR9VFbav%2BSD9Tz0F0B6oAo9dlXp47rCkN5HClZLWRh5RoaxZBw9lvlP11E98fwNuMEfFkTAaPUaUFcDh66RZCzsegvAvwJ2OL5VwVq3OVcweKqX4MaOcQMS%2BbOk%2BVCcoRjKFK13jb9%2FXwMncaPlYHrqdlZ7dPT2RcpS3DzaIDN9MX534LAMgxLgOjhDxwW36GSI%2FWL4ptQO67A3pIwTjpwXRNuqBoiyzPMZDfL5mh1jDJJcz%2BFOXX9TNGGlm5ns24bSjNenilZfS5RoGFnAGU5Wu4NmbEn2awKz3y3DUMAr6%2BFsQCT5hXyovTqTxzUgHx7HWIPeFntzmEYqo9QxxI8dXDBHi5IuyTj%2FIjHJ2UYPj0VsIw6KvnrbbGJG7niZ3si1mBxJnmA4Obd5GS9sInP8f5thlB4t3778OyxuUBDl7wuXjYm8N%2BJEgzIkKhwdAKdGh0s8R%2B0E5NKJKjEhYoLKDedLU%2FhG18kf6e%2FP39qpnTHZ54MP231sAGOqUBIGHn3q4y8cBtKITTcahf0%2FZ4OS5yIDKl6GzuZt0CQj8clhbc%2BPukbSUsqJTAYGUqY8PzXpYo4ETESLpM6GqxFxiynzARseeuJgnoEdaloBXgHEd%2BIS7%2Fie1yO7D%2FXwfwTJ%2FNYmwcAcxTZb8HoJjRMvVsxw0Lb6Hjx7Hu4h0NKmxIOcnUBEMMCsfPWOVSbty14HbJkJl6KUyZwjy%2BY2SCujKN168X&X-Amz-Signature=8f1089b6ac450f47b6797f8be5e6e79fa5cd317f1b1b056b7251413419232830&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNU7SSA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDJL8e1ktdKXjUPz8wEdUMh2V2CgXawkm5j46ovJuYSnwIgJX9r1XjA9FizT0klEGh2tQUR9DLVC6swHsPUog7%2Ff%2FgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK3oeHeJQHxjRspzSrcA5G5bjyE0ZQDLsgwbsDjtc%2BwGBcgLInrkLqZ%2F8%2FAg06T0kmqG41ot1OFC1JqJ7w%2FbYn74BxMVkiHO1CT2My8j4SRsUXWTKhmflZK9iH6oD8x0IznKI2AJfkMrKnlCQSmkycZUjwb2xdaR9VFbav%2BSD9Tz0F0B6oAo9dlXp47rCkN5HClZLWRh5RoaxZBw9lvlP11E98fwNuMEfFkTAaPUaUFcDh66RZCzsegvAvwJ2OL5VwVq3OVcweKqX4MaOcQMS%2BbOk%2BVCcoRjKFK13jb9%2FXwMncaPlYHrqdlZ7dPT2RcpS3DzaIDN9MX534LAMgxLgOjhDxwW36GSI%2FWL4ptQO67A3pIwTjpwXRNuqBoiyzPMZDfL5mh1jDJJcz%2BFOXX9TNGGlm5ns24bSjNenilZfS5RoGFnAGU5Wu4NmbEn2awKz3y3DUMAr6%2BFsQCT5hXyovTqTxzUgHx7HWIPeFntzmEYqo9QxxI8dXDBHi5IuyTj%2FIjHJ2UYPj0VsIw6KvnrbbGJG7niZ3si1mBxJnmA4Obd5GS9sInP8f5thlB4t3778OyxuUBDl7wuXjYm8N%2BJEgzIkKhwdAKdGh0s8R%2B0E5NKJKjEhYoLKDedLU%2FhG18kf6e%2FP39qpnTHZ54MP231sAGOqUBIGHn3q4y8cBtKITTcahf0%2FZ4OS5yIDKl6GzuZt0CQj8clhbc%2BPukbSUsqJTAYGUqY8PzXpYo4ETESLpM6GqxFxiynzARseeuJgnoEdaloBXgHEd%2BIS7%2Fie1yO7D%2FXwfwTJ%2FNYmwcAcxTZb8HoJjRMvVsxw0Lb6Hjx7Hu4h0NKmxIOcnUBEMMCsfPWOVSbty14HbJkJl6KUyZwjy%2BY2SCujKN168X&X-Amz-Signature=619d8971f9721ec047857892e3a1937e2ccbf5655d9bcec98a880489bf07cf11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNU7SSA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDJL8e1ktdKXjUPz8wEdUMh2V2CgXawkm5j46ovJuYSnwIgJX9r1XjA9FizT0klEGh2tQUR9DLVC6swHsPUog7%2Ff%2FgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK3oeHeJQHxjRspzSrcA5G5bjyE0ZQDLsgwbsDjtc%2BwGBcgLInrkLqZ%2F8%2FAg06T0kmqG41ot1OFC1JqJ7w%2FbYn74BxMVkiHO1CT2My8j4SRsUXWTKhmflZK9iH6oD8x0IznKI2AJfkMrKnlCQSmkycZUjwb2xdaR9VFbav%2BSD9Tz0F0B6oAo9dlXp47rCkN5HClZLWRh5RoaxZBw9lvlP11E98fwNuMEfFkTAaPUaUFcDh66RZCzsegvAvwJ2OL5VwVq3OVcweKqX4MaOcQMS%2BbOk%2BVCcoRjKFK13jb9%2FXwMncaPlYHrqdlZ7dPT2RcpS3DzaIDN9MX534LAMgxLgOjhDxwW36GSI%2FWL4ptQO67A3pIwTjpwXRNuqBoiyzPMZDfL5mh1jDJJcz%2BFOXX9TNGGlm5ns24bSjNenilZfS5RoGFnAGU5Wu4NmbEn2awKz3y3DUMAr6%2BFsQCT5hXyovTqTxzUgHx7HWIPeFntzmEYqo9QxxI8dXDBHi5IuyTj%2FIjHJ2UYPj0VsIw6KvnrbbGJG7niZ3si1mBxJnmA4Obd5GS9sInP8f5thlB4t3778OyxuUBDl7wuXjYm8N%2BJEgzIkKhwdAKdGh0s8R%2B0E5NKJKjEhYoLKDedLU%2FhG18kf6e%2FP39qpnTHZ54MP231sAGOqUBIGHn3q4y8cBtKITTcahf0%2FZ4OS5yIDKl6GzuZt0CQj8clhbc%2BPukbSUsqJTAYGUqY8PzXpYo4ETESLpM6GqxFxiynzARseeuJgnoEdaloBXgHEd%2BIS7%2Fie1yO7D%2FXwfwTJ%2FNYmwcAcxTZb8HoJjRMvVsxw0Lb6Hjx7Hu4h0NKmxIOcnUBEMMCsfPWOVSbty14HbJkJl6KUyZwjy%2BY2SCujKN168X&X-Amz-Signature=064f71f8f5eaa1e548f7a509359fb7d45d09913cb04b2a2021681688c9d1839a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633TK5OPW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD2MRJpCnyZB6daduku16pjQ8AFuKY3SrEC8joL%2FVoWBgIgKETRqD1zWOHFPzDzz8W16An9xpN3CIe7BqEoKUjZ2doqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMEuyduCN4QiqXFgyrcAxjxR4WAry5vy9c73o9jUVGnrpTCEtWiOT8fiTSf29ZM%2BdLsI5O1lcYgV7gL%2FLz7x%2Fd1BKfAxJ2DhWOPkJAudJwvvZ93Z708khnUvxWUXHr11jqGQVIe4zmp5GelLNB%2FiPf4iJfCBuWQT9BiyEPhfS%2BYM%2FNzoLid5CzRC228mjWKfAs1nFmXWuJAAllMmcGZwDfwnHhb%2FChhP0w7CAPjNOpGTtui%2Fjs%2Fbp9T3gTMUGCaeeUf4pHMn56C5De6a9LZYjGxp2FqEufK%2FlVs29sYJs8KOHzVl2%2FSymLTj1XESgjNiJjd9Lrxg6MApbNWkvzLAsAA8zi%2Bxqp9iID3DivhliMtU%2FlH2TT0bABDEdHYTi6NvFAjPSPxLkjg%2FywUPleyZ%2FY%2F%2BwP4NYN9MLrpQc17ZxpbQvCm7LkxRcqlesv636zBa1y1fSrGUxIFINeIVC8XeKFRxKdavr%2FIlKoNlfveLZEu7QSqNtj2O6bH95Z8XAADIBXyTGVufh1iGgiU9m4B6jSbnbdwRksJDZqugqFl8KsFO8SMGnJvSTtlaXtxXHXPSpTs83dZMBDf%2F6QGpBeLpaIfML9ETZL8YkGIfP%2FN4cyqaOnkAtVlSwQsv5e5oUFU8ITVCGFa%2BoF6SYSMMIKH1sAGOqUBeWZpu%2FKiaCmVzSsnltriyf5PpklRlqXgqohZ2HROaMTEidv%2FvfS9nLCSkc4JBAAjIAwXoYaFwDmtUlPcuKCM1xyL7vIyWRRWkTjgspvGJazXytDJpzMjssBdQ%2B94xDZ3R3zbzVJ4QeEgXCXqoucETJkR1ee%2BYINQ6CA9wc7bhlp8EhtKor%2FnuTkEt3x%2FBBe52yBOUq1Skk02kaoICVWKYtIMyr0F&X-Amz-Signature=71a00dc09cc2a052b25fabb37947a5b766979043540b032411060c24ddb2879e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ3FPOTC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIG8lKn5bN9ElT8j1ffMBeOKkwhVW1r4BMptnODVsDUqOAiBguCiSALrgiL6L%2FPuH52YxGesJfF5S6pWnrvbOMttG0CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtWyGWmN9oszeRBeWKtwDXz8g3VM1%2Fka0GdherXDHfrnBS1ergJDXsljBl6j0ca%2Fl4AwOHZ9sFFg3YMVwLNDWNh5wqAKz0UNaHlC3qyzYCUPfAzF1oBzhDBNzvsxLCkJ3%2B60wXEcxswGoWGXybp8zrbU6LhT46Zi1kN9dC87w%2BWk4ZoUsobF%2FJ0z2doXPWFeIEtn30ig98cW6f0dyo%2BkjiToyMfYaGg5DZgoyknWbWsvPY3tVfA5kYY4AJQlxr2x13TE4CKpA1RtA30VXS6FXCSSXTD6CPxWqUfWe%2FTBQO1HNbQ8j0kz2TnHN1QJGujDk6TyhDosUvEiW9mw7bU2hgE88hF5IgZr9UAwYykFe4kHuDBMtr%2FGGBKj0DYt2KWws0kMG5Vp1a0ejTQQ8BR38Ty9sPeoMu0yjg0Xv4QLsLurq%2BMVZgevK9RE%2BDXA%2BNrNfzV%2FFCFKdIJWPiTRPYcdRMMnymrsQ%2FxmxrGEi8%2FdDKKKuS6QdIfOOXzojv35XWAF7sjQ8mES1%2BLBJTZ8C6E6waihIVG%2FfEpfYZe1txnXz%2FU8%2FHdl3O7bJj3OM7fjz1B9etb8zTih1UN5lWu7gEaqYNzGM9aQUfOo1HyOFmzM0Vvrat4hmHpTEd4eGKZJYtAEnLUNEA5uXzNVv9rUwg4fWwAY6pgGV87K6Lo%2FTBBBs7Tu3%2Bar3dW16DkatmTZLq2CAVqZchHuhNeAuvIMt02aZYQr1H8s9xVDj8EEeMPXwg92Y2lEC%2F5xnKm8HaaTXekQNQvRh%2BaYfs9tLGz2X8oJ7TDcZkjvJUi7OtId2LfYUG7d1VbpHY%2FQwo1ERjeaPM5zrraXu66WwuWDZIsO%2BkiB708bk9N8SVwZA5Cl9tRtnignPvmBrSvM%2BSLRv&X-Amz-Signature=b23ba50d243f5295aaa372a330c5d6a6d524df9ddac14a7adf54fdaaa25ecef8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNU7SSA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDJL8e1ktdKXjUPz8wEdUMh2V2CgXawkm5j46ovJuYSnwIgJX9r1XjA9FizT0klEGh2tQUR9DLVC6swHsPUog7%2Ff%2FgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK3oeHeJQHxjRspzSrcA5G5bjyE0ZQDLsgwbsDjtc%2BwGBcgLInrkLqZ%2F8%2FAg06T0kmqG41ot1OFC1JqJ7w%2FbYn74BxMVkiHO1CT2My8j4SRsUXWTKhmflZK9iH6oD8x0IznKI2AJfkMrKnlCQSmkycZUjwb2xdaR9VFbav%2BSD9Tz0F0B6oAo9dlXp47rCkN5HClZLWRh5RoaxZBw9lvlP11E98fwNuMEfFkTAaPUaUFcDh66RZCzsegvAvwJ2OL5VwVq3OVcweKqX4MaOcQMS%2BbOk%2BVCcoRjKFK13jb9%2FXwMncaPlYHrqdlZ7dPT2RcpS3DzaIDN9MX534LAMgxLgOjhDxwW36GSI%2FWL4ptQO67A3pIwTjpwXRNuqBoiyzPMZDfL5mh1jDJJcz%2BFOXX9TNGGlm5ns24bSjNenilZfS5RoGFnAGU5Wu4NmbEn2awKz3y3DUMAr6%2BFsQCT5hXyovTqTxzUgHx7HWIPeFntzmEYqo9QxxI8dXDBHi5IuyTj%2FIjHJ2UYPj0VsIw6KvnrbbGJG7niZ3si1mBxJnmA4Obd5GS9sInP8f5thlB4t3778OyxuUBDl7wuXjYm8N%2BJEgzIkKhwdAKdGh0s8R%2B0E5NKJKjEhYoLKDedLU%2FhG18kf6e%2FP39qpnTHZ54MP231sAGOqUBIGHn3q4y8cBtKITTcahf0%2FZ4OS5yIDKl6GzuZt0CQj8clhbc%2BPukbSUsqJTAYGUqY8PzXpYo4ETESLpM6GqxFxiynzARseeuJgnoEdaloBXgHEd%2BIS7%2Fie1yO7D%2FXwfwTJ%2FNYmwcAcxTZb8HoJjRMvVsxw0Lb6Hjx7Hu4h0NKmxIOcnUBEMMCsfPWOVSbty14HbJkJl6KUyZwjy%2BY2SCujKN168X&X-Amz-Signature=16e7eb70299d6bec805cd65bdf364aa06ebb561c9acbf0fcc339fb63a220f906&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
