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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKUMKXBR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF%2Bm4EAlw5CWyx1AyiW7fvsmjQyBX%2BJ6iNzlRxCiVRSlAiB1ZfDbHYdK7EdeytXRM1hXBac%2BDpcUXjsKIQv1PfWzZCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmx2p2JVzUWfOUV%2BeKtwDHk6%2ByHv4zOBpS6Ks3nhHLy%2B7v%2Bu3Qmjb9LdC46dh9utBZU2Mx1yYCwRipMNtxrAqEWznvKXK6YM8c6n%2F3JlhWrPgTOj2eJDsAKZDE2Zf4EzUcGf9AqElwniZ6xAjcjm063q%2BoPENovZNxqGWQn7IGLHxL5eTx3U0IuurGMrBvwS2Q2Dp991DToPtI7KMGEQdIvdpaAhamQ7IR1K1y8hqfdwm9CiedMy4S283krMInQ3z7tJ8lYzHuRBwI%2BwzS1gwM7OBRVkTTpO3aXr7iaGCufrdjNDWgajwpOsyNGkn3gfCl8Yqg5QXV83m4trHhJbKGmMxKheVlCNnD%2Fpkhf55n10nav%2FCI8f0kZHsTdiGTnZuYzjXj56%2FGgqdR4HjxFr5sQIuCQopBtX8ljHJV61msKIKiIFslGbEDDNDVpVShSpvFdKlPGeCnGn8j8cE8H%2B10%2BqSGv8FJnFCKEYkJ7BNnmZQ%2Fr1f3hs0TVwPNlBTxvogf0%2BWutByH%2Bx4VCQzVg7KKJ8tpOMvyD2NVdBzbrEGSaqa4ADasnFXYYVveJ7j9bGPa2fESG30a%2BRlCpgFwy8LOOBJXgPRA2jVN%2BGhSVksdFiv8axgleO56AAfOXx8LiPB1U50PKvUfssB4gUwqPvpvwY6pgEnoLi%2B4aEutMMtVAX8C92RZCRRZaoQC%2FU7NKnc5qIK2qpBRu6s7r0ii2haLa4yCff6PVFceW7Uuuejh6Dp%2BNpwny1T1%2FjBzr3z%2FI9Z5pjYDU3WcZK6lr7DGmZ63moCfCrwQJrb3k0YT9NzQA0NQ75WDMgvXy16ikkYuJYJhvD%2Famh%2B02pcKrUEAaXRP6eqctghcxEW9KDJzk9QbKJsDaLwOhyF6CaB&X-Amz-Signature=a195c38d03eb50e7ab71a4b0972b8e788514314430545ff1f39242017d55e628&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKUMKXBR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF%2Bm4EAlw5CWyx1AyiW7fvsmjQyBX%2BJ6iNzlRxCiVRSlAiB1ZfDbHYdK7EdeytXRM1hXBac%2BDpcUXjsKIQv1PfWzZCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmx2p2JVzUWfOUV%2BeKtwDHk6%2ByHv4zOBpS6Ks3nhHLy%2B7v%2Bu3Qmjb9LdC46dh9utBZU2Mx1yYCwRipMNtxrAqEWznvKXK6YM8c6n%2F3JlhWrPgTOj2eJDsAKZDE2Zf4EzUcGf9AqElwniZ6xAjcjm063q%2BoPENovZNxqGWQn7IGLHxL5eTx3U0IuurGMrBvwS2Q2Dp991DToPtI7KMGEQdIvdpaAhamQ7IR1K1y8hqfdwm9CiedMy4S283krMInQ3z7tJ8lYzHuRBwI%2BwzS1gwM7OBRVkTTpO3aXr7iaGCufrdjNDWgajwpOsyNGkn3gfCl8Yqg5QXV83m4trHhJbKGmMxKheVlCNnD%2Fpkhf55n10nav%2FCI8f0kZHsTdiGTnZuYzjXj56%2FGgqdR4HjxFr5sQIuCQopBtX8ljHJV61msKIKiIFslGbEDDNDVpVShSpvFdKlPGeCnGn8j8cE8H%2B10%2BqSGv8FJnFCKEYkJ7BNnmZQ%2Fr1f3hs0TVwPNlBTxvogf0%2BWutByH%2Bx4VCQzVg7KKJ8tpOMvyD2NVdBzbrEGSaqa4ADasnFXYYVveJ7j9bGPa2fESG30a%2BRlCpgFwy8LOOBJXgPRA2jVN%2BGhSVksdFiv8axgleO56AAfOXx8LiPB1U50PKvUfssB4gUwqPvpvwY6pgEnoLi%2B4aEutMMtVAX8C92RZCRRZaoQC%2FU7NKnc5qIK2qpBRu6s7r0ii2haLa4yCff6PVFceW7Uuuejh6Dp%2BNpwny1T1%2FjBzr3z%2FI9Z5pjYDU3WcZK6lr7DGmZ63moCfCrwQJrb3k0YT9NzQA0NQ75WDMgvXy16ikkYuJYJhvD%2Famh%2B02pcKrUEAaXRP6eqctghcxEW9KDJzk9QbKJsDaLwOhyF6CaB&X-Amz-Signature=acd8ae3e8edee41901543d4ca266602cc07714d4e6087ef24b2fb0cd27534d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466332F4MXJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD16T%2Fx8gLGsiHDNKLK%2FMeSSiHp6sfYSf3hjwcROL5kQQIgHGQtM7vkXK1erN%2FsTb26ocRdnq2uLMrV1wIpM49LPUsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFf2LVqNYhsWT%2BZIhSrcA5pq8Hl4SMeEnOB6npziT61f%2Fq1ob47STqUy2VUVfoFc6Qzuh9KVfEyGIjRsnJu%2BgRNBPphGOGIhRCHMvvyEa8Tuw5zOCem2bGJHYz2WNcwQAHiWtMGYBpc8VPaRlTLjY6uBVmMzU%2FGk4d%2Fnh6OOOCgwblMqdT9CL1sQ%2BrgZ%2BkE9uWOi8zkDY6Q1DHZw7bTMZcKZ2%2BPcCntiv%2B8cFChIyFUwW5nmUxNQTSDy2io8GN%2B4sIU22qSk4q7mHtz0KpBqwTkoIQ9fxR1u6qYxBSH0hFtPOO4PRgxEmOufWCYDe7qN44zzYEdp16Mlncvf1ZuEdfnaqkjkLD0nJEISCO3EuqP4HiXVNqnRWOi9XE2KPDCbJyEuSJ%2B2WDacRBvPSCwLZ3ipeH5nUmSkPNGev8fEag0YDc00KqF3duVxwyuE2iS3PgfGTvpPe4a2mrhjy31JD2TdCdgp26EBZyKfoAWXwYU8pI83yUb9JmV9urcb5gl%2F2wVqAaISAtjiCSkbRwnt3IN9JHOiIF1ZdsAKCbJMAb7zn%2FpEcsKFuSj82JZiK0FRsEzT3bMqGco1iRdePX8tEaNMQHvS5y4bHtaKwxuTsWDHWTw1T4DkcS1H6N2q%2BQQSYkuo08EMCYFPNUnoMOn76b8GOqUB2%2FTmIzwB8VoRoccOgU0zxUsucC93CFl8PxAA4kWdN3j0csCaD53k8ruD0AF%2BFgL9ySOquVkEYmS2qh6FonbS1RWR%2FZnJvo7D6%2BoFPOlz8e49rBG3RRTBc9oDNVJuQUrzyPrOAp22drwXBgXk1KZGtvA%2FWCqYXUntl8zs3JeZTZSj%2FMWIcBKh5QnkIHGM609PdTyvAdkFg0q37OzOc0ui28UA1aIm&X-Amz-Signature=77ac2550c19dac16ad3789392057691a2194f2acf8c1b1804762130cf401436a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7SOPPPW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCJrUWtqQKpaBFBbzsJSb3CZE52wHI2f3meWTKoVcpJaAIgIUa2q4jdMeCJKet1Q8GIYMzdQgmt71vjiicBF97bvuwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMS28sQpewKzLOUKYircA7FaUfXcR9%2BAV644le3tb%2BLhr%2BR%2FcxTb2xsItRaXqLF%2Ba2ep7BVJDgsUjuU3UkttlsVVV7pcfqRF3n0cF8TYp9Ai0wykSVA0pGdYa6rHDmLda7SWs3f9td4qrEKIH9hJtTTCjSY1cFh1OE1MfypJcUr%2BfkkCTu1YM2RycGkkaFluNpkQpJ1zkKk6RDjNWNjbpQ9urdj%2BFyq40W5NA5xiRgSYxSSn5CHZD6vYmAKyKSvwmPu5nlKvhU%2BEXVt8H%2B%2BqC8RMeOkYC0D4Y9nZf2wljTsxFROHIni15zkQVbDW2N32Zi%2FsR4wkZZAGW6YU1as1Pwf7j4so73JFdYyBrKm477NwNV3Fv%2B%2BJ53ytP%2BmjYo2S9g9LTBd4oLUnUTOtVeSx0AFw7P6EgK3fv1ig17%2BbICfGhrfWqeI24UOabYGrbl20%2BRuppeh8qx3sKe5%2BHlaptNZRLp5c13EwtkocOo74i8RaeTgX7FC2T2bs3Rv687x6xJvwoFg4hIu6hXfcwomyy36yx46DQ5fxa5ucK3A3P5L0iYHxrWZ9hzITpeROfSPRVBZ8OZprOWX5AabAfCRq7Ut%2FB6MDl9wpf64sbhqiFOqtLU1ADwVNBzrVHiuQPxl7SRXL4PgW8yJKQoUhMO%2F66b8GOqUB9nee1aBEpXKCj3dpArTEI42HaVblpkWa3WCXZwfBxctipYVkUywfblgTBHbS6P4nQriTGo4%2FoY0TfhS8IxkiyrSpc%2BbGirWunPJve4AFQlyM5ta4%2FjUOri%2FARle8KeIo7ppuE6JfadtgPuRZQ9huCcpq3N9QE0IZssLXr%2BiU06QSGAmQ2TupNpC59qGchq9ex%2FIhN98MlMi1n3dkJmc9iGVb63DM&X-Amz-Signature=80abe08de61a478e1667f3e1542215af8cd23eb0b0bfc32bd4cbb96394a51323&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKUMKXBR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIF%2Bm4EAlw5CWyx1AyiW7fvsmjQyBX%2BJ6iNzlRxCiVRSlAiB1ZfDbHYdK7EdeytXRM1hXBac%2BDpcUXjsKIQv1PfWzZCqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmx2p2JVzUWfOUV%2BeKtwDHk6%2ByHv4zOBpS6Ks3nhHLy%2B7v%2Bu3Qmjb9LdC46dh9utBZU2Mx1yYCwRipMNtxrAqEWznvKXK6YM8c6n%2F3JlhWrPgTOj2eJDsAKZDE2Zf4EzUcGf9AqElwniZ6xAjcjm063q%2BoPENovZNxqGWQn7IGLHxL5eTx3U0IuurGMrBvwS2Q2Dp991DToPtI7KMGEQdIvdpaAhamQ7IR1K1y8hqfdwm9CiedMy4S283krMInQ3z7tJ8lYzHuRBwI%2BwzS1gwM7OBRVkTTpO3aXr7iaGCufrdjNDWgajwpOsyNGkn3gfCl8Yqg5QXV83m4trHhJbKGmMxKheVlCNnD%2Fpkhf55n10nav%2FCI8f0kZHsTdiGTnZuYzjXj56%2FGgqdR4HjxFr5sQIuCQopBtX8ljHJV61msKIKiIFslGbEDDNDVpVShSpvFdKlPGeCnGn8j8cE8H%2B10%2BqSGv8FJnFCKEYkJ7BNnmZQ%2Fr1f3hs0TVwPNlBTxvogf0%2BWutByH%2Bx4VCQzVg7KKJ8tpOMvyD2NVdBzbrEGSaqa4ADasnFXYYVveJ7j9bGPa2fESG30a%2BRlCpgFwy8LOOBJXgPRA2jVN%2BGhSVksdFiv8axgleO56AAfOXx8LiPB1U50PKvUfssB4gUwqPvpvwY6pgEnoLi%2B4aEutMMtVAX8C92RZCRRZaoQC%2FU7NKnc5qIK2qpBRu6s7r0ii2haLa4yCff6PVFceW7Uuuejh6Dp%2BNpwny1T1%2FjBzr3z%2FI9Z5pjYDU3WcZK6lr7DGmZ63moCfCrwQJrb3k0YT9NzQA0NQ75WDMgvXy16ikkYuJYJhvD%2Famh%2B02pcKrUEAaXRP6eqctghcxEW9KDJzk9QbKJsDaLwOhyF6CaB&X-Amz-Signature=af229bacb2c0ee46a74f7a45317edf317a82ca80d0f3f78c5924a7e9dbdf86f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
