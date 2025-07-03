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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3V7CRY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC4rLUxjEBWgp9Z8orHNhruBCC89Q%2F5hUGxnQsBCpFh6gIhAKSNCmMD2X2tX2X9PgxrEZG0wLRW1XfLrJfGaMtgyRm7KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySUOFnYcZPBxg26DUq3AMy3HfdPDkxn8g8zAmmG8VqEAvvoT%2FGFlk8IIxHAMspYckRoqLWhCNJYVS7XKxeWpw%2BWy%2FTouq8gn5KxZVgY2fQoeMiDvv44iNU5LusV%2BPIW5oUoDDRQ2vqCkd3%2FjqkyloS2%2FdA9NkrGnwO9vOQaeVW7mt1zx26lLiFC68TB5VydW4a8hJ5UL3yzKXaxIfjK9GWgfxSt%2BAQFcPEmBQ78xY0AGX%2B2eeKXvdabG1ha8xRjA4Mpq6JrsE1MQsyx%2FdPxo0MLDL3HRr6a64eZa4k13fAgjZFPvofiur0Yis%2FCRTpxk85uvZpoRQI%2BBpsY1DMRutYlKO%2FgZMj5UPrl1acCLMiTAmqs45aoBj3oRwO%2Bg%2B3zRqxeqOtW5ax%2BcYK1vUNsc2ACldIaXuRg%2FTE11kVVCHHJfZNHxdHta9Qmv66mBX4iH4a1GL3MVnPTZX7SBpG3ee5dz4XtzEUlSKNYqjXmgVJd%2FUvcfSnLcHqUoHg5%2FUn%2FMQJoiKq7Q3eDOpeQg9B1sTAqFe5R4Ywqd32aFa921iBqw1jcXZg0eOa9dZuGDU7o6H%2FRD4A%2Bmp3A0ZXIuvq9f2TG63JA6BQArvbESKvmzc8yvNNlgjfOGZzYy0%2BzSQZ0I0LwIXaEqSRhB7wDjCv25fDBjqkAWfta66mEs2sQGgxQzUyCY7B7aTynT7O8A4hDyc%2Bz%2FfI%2FvPcXGkwJZrpdNy5J35NpZnW4VuETl5ZXwiXJDtidLTMu4UuBwxrilDQ3ebUEqtH0b3LlEZfx%2Bq9goWnZyyK%2BPDElvi5XvRaJGmPZBJUMsvSOxeZDGSJMRpNUcnPYFlN7AMC0CKqyvmVg61KJQh3b5jjKCMRXjo0YQj0ISxR%2BkghvDB8&X-Amz-Signature=01fcf661ebe59806420c32cbfb4a36a37c0047e2c792a7e2608a258f911904aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3V7CRY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC4rLUxjEBWgp9Z8orHNhruBCC89Q%2F5hUGxnQsBCpFh6gIhAKSNCmMD2X2tX2X9PgxrEZG0wLRW1XfLrJfGaMtgyRm7KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySUOFnYcZPBxg26DUq3AMy3HfdPDkxn8g8zAmmG8VqEAvvoT%2FGFlk8IIxHAMspYckRoqLWhCNJYVS7XKxeWpw%2BWy%2FTouq8gn5KxZVgY2fQoeMiDvv44iNU5LusV%2BPIW5oUoDDRQ2vqCkd3%2FjqkyloS2%2FdA9NkrGnwO9vOQaeVW7mt1zx26lLiFC68TB5VydW4a8hJ5UL3yzKXaxIfjK9GWgfxSt%2BAQFcPEmBQ78xY0AGX%2B2eeKXvdabG1ha8xRjA4Mpq6JrsE1MQsyx%2FdPxo0MLDL3HRr6a64eZa4k13fAgjZFPvofiur0Yis%2FCRTpxk85uvZpoRQI%2BBpsY1DMRutYlKO%2FgZMj5UPrl1acCLMiTAmqs45aoBj3oRwO%2Bg%2B3zRqxeqOtW5ax%2BcYK1vUNsc2ACldIaXuRg%2FTE11kVVCHHJfZNHxdHta9Qmv66mBX4iH4a1GL3MVnPTZX7SBpG3ee5dz4XtzEUlSKNYqjXmgVJd%2FUvcfSnLcHqUoHg5%2FUn%2FMQJoiKq7Q3eDOpeQg9B1sTAqFe5R4Ywqd32aFa921iBqw1jcXZg0eOa9dZuGDU7o6H%2FRD4A%2Bmp3A0ZXIuvq9f2TG63JA6BQArvbESKvmzc8yvNNlgjfOGZzYy0%2BzSQZ0I0LwIXaEqSRhB7wDjCv25fDBjqkAWfta66mEs2sQGgxQzUyCY7B7aTynT7O8A4hDyc%2Bz%2FfI%2FvPcXGkwJZrpdNy5J35NpZnW4VuETl5ZXwiXJDtidLTMu4UuBwxrilDQ3ebUEqtH0b3LlEZfx%2Bq9goWnZyyK%2BPDElvi5XvRaJGmPZBJUMsvSOxeZDGSJMRpNUcnPYFlN7AMC0CKqyvmVg61KJQh3b5jjKCMRXjo0YQj0ISxR%2BkghvDB8&X-Amz-Signature=d59fcc030758ebb9da0e27596ce3c7a21bc8fee1e2b46bc5923fc75e4628e215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3V7CRY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC4rLUxjEBWgp9Z8orHNhruBCC89Q%2F5hUGxnQsBCpFh6gIhAKSNCmMD2X2tX2X9PgxrEZG0wLRW1XfLrJfGaMtgyRm7KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySUOFnYcZPBxg26DUq3AMy3HfdPDkxn8g8zAmmG8VqEAvvoT%2FGFlk8IIxHAMspYckRoqLWhCNJYVS7XKxeWpw%2BWy%2FTouq8gn5KxZVgY2fQoeMiDvv44iNU5LusV%2BPIW5oUoDDRQ2vqCkd3%2FjqkyloS2%2FdA9NkrGnwO9vOQaeVW7mt1zx26lLiFC68TB5VydW4a8hJ5UL3yzKXaxIfjK9GWgfxSt%2BAQFcPEmBQ78xY0AGX%2B2eeKXvdabG1ha8xRjA4Mpq6JrsE1MQsyx%2FdPxo0MLDL3HRr6a64eZa4k13fAgjZFPvofiur0Yis%2FCRTpxk85uvZpoRQI%2BBpsY1DMRutYlKO%2FgZMj5UPrl1acCLMiTAmqs45aoBj3oRwO%2Bg%2B3zRqxeqOtW5ax%2BcYK1vUNsc2ACldIaXuRg%2FTE11kVVCHHJfZNHxdHta9Qmv66mBX4iH4a1GL3MVnPTZX7SBpG3ee5dz4XtzEUlSKNYqjXmgVJd%2FUvcfSnLcHqUoHg5%2FUn%2FMQJoiKq7Q3eDOpeQg9B1sTAqFe5R4Ywqd32aFa921iBqw1jcXZg0eOa9dZuGDU7o6H%2FRD4A%2Bmp3A0ZXIuvq9f2TG63JA6BQArvbESKvmzc8yvNNlgjfOGZzYy0%2BzSQZ0I0LwIXaEqSRhB7wDjCv25fDBjqkAWfta66mEs2sQGgxQzUyCY7B7aTynT7O8A4hDyc%2Bz%2FfI%2FvPcXGkwJZrpdNy5J35NpZnW4VuETl5ZXwiXJDtidLTMu4UuBwxrilDQ3ebUEqtH0b3LlEZfx%2Bq9goWnZyyK%2BPDElvi5XvRaJGmPZBJUMsvSOxeZDGSJMRpNUcnPYFlN7AMC0CKqyvmVg61KJQh3b5jjKCMRXjo0YQj0ISxR%2BkghvDB8&X-Amz-Signature=1c62a176badc29a92af795cefa065568ede190833b3ef565fa1d36aaff5a3742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIJUD4BU%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDzUH9aUWlciVsGeqjVsX2qrSNV4%2FWmwh1mLiUVOEireAIgNRXyxHU9vLqEKM%2FwpG1%2Fs1k1GX6VzWRQ06P9ypaXRMAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDlxBH0Z1bwJMn9cyrcA6JHmLaUdPP5k9aoWR%2Fk7GwTP63RAfn%2Fs0PLULjJJM86b4HkvhhB2NzyQ9TK53ECxvTihibUxojpwoPoM1mZ6ghwzKowZd7XyZNLFhIXC3p1fO%2Bf4wd4Bj%2FlYRWUvYP%2FH9%2B4KgtC7ivSXdhaM1%2BQORzcTedbo3u75qEZTfV6FF%2F1CzKQgVXgUi96mkyUmgxsQekh%2FvCVjMNERj8DzCFTGn0Jpsg063TbJUEjX3mRq9554Lqz4KFcnN8vI1H6PpGE4LuP7y4mGfvbcgNTg9bmHZNOSNF%2BqZh5ykSpJJ8PgqBUgQTitKeiVs1R3DQ6jYimGlwNlq7FkjxmQ1ZedjUXmAWLO89c7Jr4XBpzkPkP0KlbSoQuGbVwlkZ83TeKjrz68P4r1JwgCGn5h72QDyhfPFia9%2Fu5rbA0X%2FynfsSFj9UJwLo3fQmIvePCprIGWO9AF1hhwzjKN%2BFauc3qe8w2jpcgR1fJnyQ8Wbr%2BSKrooGzc%2Ftg%2BvzOuSBQ%2FT0cWPr8G7TkOMExfNY4PR6zBWW1tYrGTQZhSA%2FRcRmxEJplUWaynxaPngQM1h9qtUG1GfVcoGehbjoZ2i7UIQpg6QOj%2BjhwkPW0dBS4%2F%2FO3CoBjIP8MostW0pRzhpoL%2Frgm6MIuxl8MGOqUBcSR%2BJjgjnHryKG9gl1%2FfGP73pRZZiZeYmvbgcAy2BU8oEqV5jb%2BCubXHBI%2FsScf8NAlb7CqzD2zA3S5w6BEEpS7FYvQbYzNG%2F%2FfEEi65E%2B16w8HxfWf4x8EXPKMlFttD81mUsWLQNZI7zdnxfEORw2o%2BYxTzqHbWXrYwrfqcuzHsEyjt0m%2BrTC4clWB%2BeKKhBqaDH8rvfSxAb363k%2B7h5MpDz2Xy&X-Amz-Signature=c377c59ab431dc0f0faacb8662ddd3346e8376e978346b6f581ae0f5296ba61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRDLYY5%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCdhBxNNYicWuxi5aQg%2FnfaSKNa3XinyL%2FW2QKZbjJouQIgC6gPtLBiOKJ6yuDER%2Bj2MpQ62TOR4iE2f3lNIKQ4WmEqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiUM3NqeG2QZzvZmCrcA%2FeftBjzlEZCIeGD9hjv26Ij8ksLDzGaWjYyaiDaInSwquIzptQbTfvYm63ZuqMhUg%2BsCbKIrflEGlAUasEEhsWolcbZcNYA64xeqF9dUZWXAFcqiyhQenK1NJoR225us5a%2BqgYuqR5ICW%2BcyvXWQpeoyxK%2Fq7MnsNa9pvQpezsq2zVwAOr3WLp2Lzu8DoZr%2BKaCbbmi%2Bhr9uBU0kpZthxVgF131%2BgrGjDAAGcD5w5srSR5YVDs9Di%2BHevSV903MRxVvhGoHq5VTc2z%2BTAPC2XiUty7KGT7iq4nTNQaUAZxv33BUDmyfPZaIz6fs%2BVkzK0IcwdPuxhx29N9mtwD8PaX0DgC86hSxV1%2FMWw10INf9wB87dJbxAZFal%2FovHgJSkucv54gfy5%2Fve3JaFZzWVu6zLaQCbJkoGlYFsc1Jm6KIpfjZnGoxz4AjXk1h5K2asVU%2BSHa%2FK9wzBlRTxaXWSx4JWLdYneBXXw7i%2FU8UrT9LFh1we%2BVdge8rGZX3b3w6FuN8MhbSze97%2Fbqh8ttp34i6jQRwOsQP0sxE%2BHAiO46MVYTm0imCf%2BphSADVg8V2Hyupt%2Fm9jay6qv7sXZD19q5p2uhab3tQeBDBUU0hOVvVORE9tcLadhoRe%2BCoMMjbl8MGOqUBmRRb95wlUVqopCXGJi%2F5YQjZdK5pPRnZLwaDT0hJFY8TK31Onlmo%2FAoi8tgh1M%2BgiLHQWdSdOm8ecxILfuAk0Wa7wBEp7VW%2Fjifqxaso1L2Wrf1c%2BTSaPM1wt8Ki73FP8o4q9l4irf1ZM1cxc0l5WSp9MH2O0k3nYFTCrdTAqq6w3BroJ8yJ7WSfpXnzYN9c0IY8xiqGfjfDUGdrGUAJ1fyVunib&X-Amz-Signature=c1acfde45716d00cfdd5c07559964e10a30dfd76f9a70fb611eff708077f72a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3V7CRY%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC4rLUxjEBWgp9Z8orHNhruBCC89Q%2F5hUGxnQsBCpFh6gIhAKSNCmMD2X2tX2X9PgxrEZG0wLRW1XfLrJfGaMtgyRm7KogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySUOFnYcZPBxg26DUq3AMy3HfdPDkxn8g8zAmmG8VqEAvvoT%2FGFlk8IIxHAMspYckRoqLWhCNJYVS7XKxeWpw%2BWy%2FTouq8gn5KxZVgY2fQoeMiDvv44iNU5LusV%2BPIW5oUoDDRQ2vqCkd3%2FjqkyloS2%2FdA9NkrGnwO9vOQaeVW7mt1zx26lLiFC68TB5VydW4a8hJ5UL3yzKXaxIfjK9GWgfxSt%2BAQFcPEmBQ78xY0AGX%2B2eeKXvdabG1ha8xRjA4Mpq6JrsE1MQsyx%2FdPxo0MLDL3HRr6a64eZa4k13fAgjZFPvofiur0Yis%2FCRTpxk85uvZpoRQI%2BBpsY1DMRutYlKO%2FgZMj5UPrl1acCLMiTAmqs45aoBj3oRwO%2Bg%2B3zRqxeqOtW5ax%2BcYK1vUNsc2ACldIaXuRg%2FTE11kVVCHHJfZNHxdHta9Qmv66mBX4iH4a1GL3MVnPTZX7SBpG3ee5dz4XtzEUlSKNYqjXmgVJd%2FUvcfSnLcHqUoHg5%2FUn%2FMQJoiKq7Q3eDOpeQg9B1sTAqFe5R4Ywqd32aFa921iBqw1jcXZg0eOa9dZuGDU7o6H%2FRD4A%2Bmp3A0ZXIuvq9f2TG63JA6BQArvbESKvmzc8yvNNlgjfOGZzYy0%2BzSQZ0I0LwIXaEqSRhB7wDjCv25fDBjqkAWfta66mEs2sQGgxQzUyCY7B7aTynT7O8A4hDyc%2Bz%2FfI%2FvPcXGkwJZrpdNy5J35NpZnW4VuETl5ZXwiXJDtidLTMu4UuBwxrilDQ3ebUEqtH0b3LlEZfx%2Bq9goWnZyyK%2BPDElvi5XvRaJGmPZBJUMsvSOxeZDGSJMRpNUcnPYFlN7AMC0CKqyvmVg61KJQh3b5jjKCMRXjo0YQj0ISxR%2BkghvDB8&X-Amz-Signature=a0072d3b1acca92c42fe559544b801b76aebeb8ffd88e6719c5f32c4a3c66164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
