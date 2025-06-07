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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBR6T4K%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9BM1WNl3xQxqb%2BpdkQyaczaRHKUVfS9jecGD9ivE0QIgJUCuBA7jOcI494Bq6y45z%2FkPc8hClmRv0eSLbDFNnIUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEVduNQPRV1H%2Fo%2FjVCrcA1VrDuQbwWmjf60rpPYUKnbgH5JbOlxrYDO%2BADTB8dKqTG7S57rx3axcKwkCa040XGkq297HALrdmVQIEbn9LQgTOGG%2BNMbKlN0XUwA9xXiiq3Cws0Gf162kawLMmB7ISzs7LTPypsE2m5D8re3Q3lKcVTL24%2BjwrO7PFksXk4x00VCy6NNBpTyQGqZdODf7h1sBSZAXZuV5dGjIba%2BZA6I7z8qBt%2FgCS1kTxuqHp5g%2Biqv7PwwFV4mcW%2BvUuIH9EgzlTN1wLv%2FWgJrTECnJLc8qYOnios9HGBbbekvUY2zjdkoCnSnPQUuh3N%2BD26d%2B0OTnm%2F5BQfpvNlPyKLxgWFnh4XOwGVvqMvp64YpVXifr%2Bh7fPsujz0mAEr3OWXEP7UejAcpDBQMjdJbwwnMbqu8CNUJY7m5rHyoVbJUTSRwcDE0N77q%2FSyq9NkuGNQuZ5XdFyudhha%2BTmpsplWzStkxi%2B%2FL6mGPR2yq8orEhMx%2F4LraOvBhbkFlgcHqaap%2FT8GIgNsMO%2FvSP8vFWAWkpxMMqDAjlnf5MgdMvyHdqE2aMe2XgrKgSNYI2SOaj8AtWg5IL8EE7QXjAfUlv0FDpkFkp8iS%2BdCW3z8KOCD3oa%2FN15gspJ%2FL5jzhH3eSOMNHGj8IGOqUBilCwWlVdDjz7cpnhjpsJuDsxXSdBSylAG9LRqwGaHNX2R%2Fz%2FyAUE0gIVF5eByRk7taIv785Lw7LUxljVJVDwQbkyUcbxc7cK6LZeML%2FfulkjnLu5MsfEYXnoZnbxxU1NyyX7aLKrBC9oNs%2FwNvxn0eVDo%2Fm%2BGsUYU1lVFTA6tyyNWKNfLGWWRJm6cbIG4sJLJOxR7S88l%2F9JkGmugVryBZKuEl5u&X-Amz-Signature=b74f04e27779611a9274a33e7a6a8f22a07a7446f564048da7f77917c72ebc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBR6T4K%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9BM1WNl3xQxqb%2BpdkQyaczaRHKUVfS9jecGD9ivE0QIgJUCuBA7jOcI494Bq6y45z%2FkPc8hClmRv0eSLbDFNnIUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEVduNQPRV1H%2Fo%2FjVCrcA1VrDuQbwWmjf60rpPYUKnbgH5JbOlxrYDO%2BADTB8dKqTG7S57rx3axcKwkCa040XGkq297HALrdmVQIEbn9LQgTOGG%2BNMbKlN0XUwA9xXiiq3Cws0Gf162kawLMmB7ISzs7LTPypsE2m5D8re3Q3lKcVTL24%2BjwrO7PFksXk4x00VCy6NNBpTyQGqZdODf7h1sBSZAXZuV5dGjIba%2BZA6I7z8qBt%2FgCS1kTxuqHp5g%2Biqv7PwwFV4mcW%2BvUuIH9EgzlTN1wLv%2FWgJrTECnJLc8qYOnios9HGBbbekvUY2zjdkoCnSnPQUuh3N%2BD26d%2B0OTnm%2F5BQfpvNlPyKLxgWFnh4XOwGVvqMvp64YpVXifr%2Bh7fPsujz0mAEr3OWXEP7UejAcpDBQMjdJbwwnMbqu8CNUJY7m5rHyoVbJUTSRwcDE0N77q%2FSyq9NkuGNQuZ5XdFyudhha%2BTmpsplWzStkxi%2B%2FL6mGPR2yq8orEhMx%2F4LraOvBhbkFlgcHqaap%2FT8GIgNsMO%2FvSP8vFWAWkpxMMqDAjlnf5MgdMvyHdqE2aMe2XgrKgSNYI2SOaj8AtWg5IL8EE7QXjAfUlv0FDpkFkp8iS%2BdCW3z8KOCD3oa%2FN15gspJ%2FL5jzhH3eSOMNHGj8IGOqUBilCwWlVdDjz7cpnhjpsJuDsxXSdBSylAG9LRqwGaHNX2R%2Fz%2FyAUE0gIVF5eByRk7taIv785Lw7LUxljVJVDwQbkyUcbxc7cK6LZeML%2FfulkjnLu5MsfEYXnoZnbxxU1NyyX7aLKrBC9oNs%2FwNvxn0eVDo%2Fm%2BGsUYU1lVFTA6tyyNWKNfLGWWRJm6cbIG4sJLJOxR7S88l%2F9JkGmugVryBZKuEl5u&X-Amz-Signature=67a54a341c895253db9c584c6f85ec5df4cae759db46c68fd6844958c572ef40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBR6T4K%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9BM1WNl3xQxqb%2BpdkQyaczaRHKUVfS9jecGD9ivE0QIgJUCuBA7jOcI494Bq6y45z%2FkPc8hClmRv0eSLbDFNnIUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEVduNQPRV1H%2Fo%2FjVCrcA1VrDuQbwWmjf60rpPYUKnbgH5JbOlxrYDO%2BADTB8dKqTG7S57rx3axcKwkCa040XGkq297HALrdmVQIEbn9LQgTOGG%2BNMbKlN0XUwA9xXiiq3Cws0Gf162kawLMmB7ISzs7LTPypsE2m5D8re3Q3lKcVTL24%2BjwrO7PFksXk4x00VCy6NNBpTyQGqZdODf7h1sBSZAXZuV5dGjIba%2BZA6I7z8qBt%2FgCS1kTxuqHp5g%2Biqv7PwwFV4mcW%2BvUuIH9EgzlTN1wLv%2FWgJrTECnJLc8qYOnios9HGBbbekvUY2zjdkoCnSnPQUuh3N%2BD26d%2B0OTnm%2F5BQfpvNlPyKLxgWFnh4XOwGVvqMvp64YpVXifr%2Bh7fPsujz0mAEr3OWXEP7UejAcpDBQMjdJbwwnMbqu8CNUJY7m5rHyoVbJUTSRwcDE0N77q%2FSyq9NkuGNQuZ5XdFyudhha%2BTmpsplWzStkxi%2B%2FL6mGPR2yq8orEhMx%2F4LraOvBhbkFlgcHqaap%2FT8GIgNsMO%2FvSP8vFWAWkpxMMqDAjlnf5MgdMvyHdqE2aMe2XgrKgSNYI2SOaj8AtWg5IL8EE7QXjAfUlv0FDpkFkp8iS%2BdCW3z8KOCD3oa%2FN15gspJ%2FL5jzhH3eSOMNHGj8IGOqUBilCwWlVdDjz7cpnhjpsJuDsxXSdBSylAG9LRqwGaHNX2R%2Fz%2FyAUE0gIVF5eByRk7taIv785Lw7LUxljVJVDwQbkyUcbxc7cK6LZeML%2FfulkjnLu5MsfEYXnoZnbxxU1NyyX7aLKrBC9oNs%2FwNvxn0eVDo%2Fm%2BGsUYU1lVFTA6tyyNWKNfLGWWRJm6cbIG4sJLJOxR7S88l%2F9JkGmugVryBZKuEl5u&X-Amz-Signature=40619a83832d56b810794615eedad625d6a9edf73be8e5b8b5c8358b90a193db&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZXBDPFP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BjikmYjSaWaBl2CEvcUd9tfZZIfRglhj3u0QyH2zDjgIgZPYSwbc0n2G6NgA3Zq%2FB1dOobnCSWllKjF8RomaywPIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLlsPxE0pmP7bP%2B%2BdyrcA8lEw2KiKuWF70Whee4m3jmtVWp1UMIeyvOKbyLNs%2BvPBwrcrkcULjsI58EJLNN4PgtDj46PHLec9DGoU8vs5hvMlA56mV0pBjcy9JV514ramAFNHvASzXu6AYKx%2FFmhOWQPVgbeHC4DVFXj5XuXgon9LqAdh2kR6jTCaU1FNq%2B%2BQA%2BW3wR5XAePkHbKbPm0ck590jeD7JlCWPylxzsKHU9XbGoZnEsvXZQPa29l3830rB%2BilrO55V9V9x%2B1q8MdBfLD48XgTJ7BlTNHoIBC51Sejqz5jbydihMEHRLMO1l96RxVqkj1eWj0i%2B48mpuCJi5jQqiAnjRVrk%2FkRTkP5qppXahP3TQe0lZGXHBaKYadS2yBzHTpOC7DFpdFBnHJ4y8UZc7SxgFxtLWZO0Kr9%2BdE8tM9r5djsJvE3toIP%2B8d1yjdApHtWOWkXWjYcrkbumog0W8TCEhP0I0ukjvEUx4OxQsTljLmFeRIA99cdy%2F9qKZUKHU1GPKjy%2BdtasuB%2BUt38BbDhG0MJ0e%2F7oYMMsKEwkb5JR4IxWLo%2B963Hy0B4hOcT0pCxCAANoVjXcrHT55xwtLMcLOtmeDSdFMHTLQhHWlLyghebTomrPw3EbLAIP%2BqFpHBiyd6Xks6MOK3j8IGOqUBHQ67WqXI59Xy7ASksxaimlnSzYIiGCYftvqz3wE%2FSueJr%2FyPpj%2Fhhmud%2Bilp1JhGUlyuoNsmuc6yCBTagDBgBYgMYJlbrDsCzw%2FNxr8xpgcHyzzBsopC4WnspVlVlpzJfKvJK9u1TKpbR19nX6V3d%2B%2FMWwVboaIBuD738LpYY0ox1NZcSYv0H7NAPnfwNX5rZhFp2MXEHrHhMEEMYipX8d7aD2nv&X-Amz-Signature=c6d25aa39c5f2bb673d1c9e74857fb8470c39c0e2ff72692cc7164e3b511c006&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z5UEEPZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDT0el6wXC3XtmDQiug8dgkgKqpLQ7S0ZTWR9RZih55fAIhAO05Zchj2t7nsdy9JosPu5eH1A5EwVIT0ZFX9cuH0kYSKv8DCHAQABoMNjM3NDIzMTgzODA1Igzc%2Bg7xhdDyBYzlX1cq3AP5AIPwL4BbMAZbSNw%2F2jpX7V5Z993MOshAXu5fNzbetxqppzTcqWAKOJkGm%2FoLjK8R2nvGQOV0mC%2BwnvwlFeIq2TM7GUR%2B29SdddZ6i7L9FEXHXD9QoEEVQvKEBatdflx5fb4Y2S%2B%2BBFLB0cbj%2FNyqjp5JhX2mylXH5BOqXtPT3GnvHqGXjhVQuX%2BW08nWkjZnFKIl%2FpCtSGN5ZU5M0cWd0JabsTV1Cp8Uuyh0IVpPv%2BTYWUSItLeTFT0iZ5GoxFEXyqf%2BHiwEAM8ynvDuIkOt7Job1OMc5fEGFJbuMh7r%2Bouz5ufVWQySow4ek1DRLbcYu6RNom91%2Bnx5Js79SCkzK0JCskAzWQb5JlyqT3xN45V1vyNoH590DdoyZIVo%2BXRzGjZbl3uJpclGN3ME%2BjiWl2x2SYlJ8xmyg0jQmMhkCaWNdEBhwcBqhbF236lWTktLz0k0CMdQzwps0uC8bkiB0qbTcDBM%2BR4fVeEKf5Eq1%2BMMMnLNx4CakhVMGPFjAl8DKO0Lkbrb0rlMUax%2F1WxCeKLKtt%2FSlXqDZ%2FoVgF5fW6XFFm0iAXOTKsz%2FK5MfgRtZNh%2BI38rNGnJDdIIxXtZNDf0bfEVSePgfkJ2NY3u7kGTvl4GyxJUjqu2qmDDWt4%2FCBjqkARPbXOpXrjzxBbOYSBos1a4SG2kjfcJ%2BK%2BpD6CK6PjvEWrh4CWsxma%2BBsUGU3NJbbZq%2BBNjhcsEZAY2cP8yP2RyXbTtzO1Zw8%2Fi5KavQoJEQwp3Z0hTtKoqVr0qE4vaL14Iu4AHi5P1I253XrA5XX%2FPKar0iowba6YfYQHwjKLqRhi1Z3Z10jpGdllhIe40Ume3Cp3k2Fgde10XwxsPdNsEA1L9J&X-Amz-Signature=de276b1b0d34919968306e10f397db94161bd3612edd40a4ea87484305cd0af2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBR6T4K%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE9BM1WNl3xQxqb%2BpdkQyaczaRHKUVfS9jecGD9ivE0QIgJUCuBA7jOcI494Bq6y45z%2FkPc8hClmRv0eSLbDFNnIUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEVduNQPRV1H%2Fo%2FjVCrcA1VrDuQbwWmjf60rpPYUKnbgH5JbOlxrYDO%2BADTB8dKqTG7S57rx3axcKwkCa040XGkq297HALrdmVQIEbn9LQgTOGG%2BNMbKlN0XUwA9xXiiq3Cws0Gf162kawLMmB7ISzs7LTPypsE2m5D8re3Q3lKcVTL24%2BjwrO7PFksXk4x00VCy6NNBpTyQGqZdODf7h1sBSZAXZuV5dGjIba%2BZA6I7z8qBt%2FgCS1kTxuqHp5g%2Biqv7PwwFV4mcW%2BvUuIH9EgzlTN1wLv%2FWgJrTECnJLc8qYOnios9HGBbbekvUY2zjdkoCnSnPQUuh3N%2BD26d%2B0OTnm%2F5BQfpvNlPyKLxgWFnh4XOwGVvqMvp64YpVXifr%2Bh7fPsujz0mAEr3OWXEP7UejAcpDBQMjdJbwwnMbqu8CNUJY7m5rHyoVbJUTSRwcDE0N77q%2FSyq9NkuGNQuZ5XdFyudhha%2BTmpsplWzStkxi%2B%2FL6mGPR2yq8orEhMx%2F4LraOvBhbkFlgcHqaap%2FT8GIgNsMO%2FvSP8vFWAWkpxMMqDAjlnf5MgdMvyHdqE2aMe2XgrKgSNYI2SOaj8AtWg5IL8EE7QXjAfUlv0FDpkFkp8iS%2BdCW3z8KOCD3oa%2FN15gspJ%2FL5jzhH3eSOMNHGj8IGOqUBilCwWlVdDjz7cpnhjpsJuDsxXSdBSylAG9LRqwGaHNX2R%2Fz%2FyAUE0gIVF5eByRk7taIv785Lw7LUxljVJVDwQbkyUcbxc7cK6LZeML%2FfulkjnLu5MsfEYXnoZnbxxU1NyyX7aLKrBC9oNs%2FwNvxn0eVDo%2Fm%2BGsUYU1lVFTA6tyyNWKNfLGWWRJm6cbIG4sJLJOxR7S88l%2F9JkGmugVryBZKuEl5u&X-Amz-Signature=e5b57e64d47f90c8fae87fdfb1282fc9a32a1a232522b00f359967f39d26447b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
