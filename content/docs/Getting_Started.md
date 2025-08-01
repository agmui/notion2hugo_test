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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEMA7KZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMcPmQRY5osCJZf3yyhDflPXMI5%2FydRdKaxOwOuh4kIQIgLHE2QCjbnMXmo9%2Fq%2ByWcYxkdMeOkDVHqEgzI%2F%2FKJ490qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlGDbpsFbZPwzkqwyrcA%2F9EECR0cjujyTOkdAxSw9t3cLArweSRm13bOriPiM86CfjuL5iKrzSjlanyaGvqNm5ad3serpvkqnq1EVa5tXa4A9v%2FN54lReW5lGcg%2BCSd9rTQV5bhttugjCaoxLh8lgUj19NKUSw51qvAsi7woQzKfYkwCuDbOXonoMVvJ0jjCYjXfBDSfx8EUQGBDVsjicgt8zILx%2Bqkbr9NkK2qB481rKY%2FxMfOZ2xmYglkXJN9kYk1mQKEcQ979V6%2BQfo9auallF9%2FHdSpNv1huQwdHmP9Tg%2FTu6PEJNV6du3YAlxTM4Pw%2FUHmmYp%2B%2FeGrsWkZQEHKU%2BO2K%2BB%2B1ZH69BaRi3NLSfiM6FAYTM82JnyhzF699%2BbdjcM4Xig8EB3k3Azd09H4Ed4llcr%2FvP9UqVY0WzrQQyNJ3ckFof3fILrrcOyqBP%2BG6lkquAPHyDbqAdgXRZDdd%2FHw7ugj2rTzL%2F3z46CeTPtdNF7AXTsOhMMHREBqYOsnf78FtFTNDXimd%2BLi98BcVM4jKXwKWze6GEJtUQGjusdZqWUMpGIfRlfbrLzlo4ovV4CH4Xvbn8ntQqQkwP7jRB5KdISAse8S8CCJMsD5%2BkCfwPjNhD%2B27nKgnsOsIm3iJpFwLpgMYD2qMLaws8QGOqUBUsu1h67lGSQQH66%2FZdNhOrrj1Np6erchAH0hbVioZr0bpWnaYkDLBialQeLw%2BCPdzrQqvrtsjlzI2wVQqghHCajO%2Fh7piNsgIxXvQ4VviKf5lxYs9D8xH%2BJSuz36BkNQkWvqkN0ByHdcGeuKAtqNaiq3uLf%2FFtXcon39Td4wLezQnq3IY174SfsNKi3r%2F73C2UJ4VGOhfexIGl6xpqpA26PsLoDk&X-Amz-Signature=ad7e79efeb8159ecdf4ddf6e35a32a37db9a411c3602270d1994c37e90d6f29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEMA7KZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMcPmQRY5osCJZf3yyhDflPXMI5%2FydRdKaxOwOuh4kIQIgLHE2QCjbnMXmo9%2Fq%2ByWcYxkdMeOkDVHqEgzI%2F%2FKJ490qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlGDbpsFbZPwzkqwyrcA%2F9EECR0cjujyTOkdAxSw9t3cLArweSRm13bOriPiM86CfjuL5iKrzSjlanyaGvqNm5ad3serpvkqnq1EVa5tXa4A9v%2FN54lReW5lGcg%2BCSd9rTQV5bhttugjCaoxLh8lgUj19NKUSw51qvAsi7woQzKfYkwCuDbOXonoMVvJ0jjCYjXfBDSfx8EUQGBDVsjicgt8zILx%2Bqkbr9NkK2qB481rKY%2FxMfOZ2xmYglkXJN9kYk1mQKEcQ979V6%2BQfo9auallF9%2FHdSpNv1huQwdHmP9Tg%2FTu6PEJNV6du3YAlxTM4Pw%2FUHmmYp%2B%2FeGrsWkZQEHKU%2BO2K%2BB%2B1ZH69BaRi3NLSfiM6FAYTM82JnyhzF699%2BbdjcM4Xig8EB3k3Azd09H4Ed4llcr%2FvP9UqVY0WzrQQyNJ3ckFof3fILrrcOyqBP%2BG6lkquAPHyDbqAdgXRZDdd%2FHw7ugj2rTzL%2F3z46CeTPtdNF7AXTsOhMMHREBqYOsnf78FtFTNDXimd%2BLi98BcVM4jKXwKWze6GEJtUQGjusdZqWUMpGIfRlfbrLzlo4ovV4CH4Xvbn8ntQqQkwP7jRB5KdISAse8S8CCJMsD5%2BkCfwPjNhD%2B27nKgnsOsIm3iJpFwLpgMYD2qMLaws8QGOqUBUsu1h67lGSQQH66%2FZdNhOrrj1Np6erchAH0hbVioZr0bpWnaYkDLBialQeLw%2BCPdzrQqvrtsjlzI2wVQqghHCajO%2Fh7piNsgIxXvQ4VviKf5lxYs9D8xH%2BJSuz36BkNQkWvqkN0ByHdcGeuKAtqNaiq3uLf%2FFtXcon39Td4wLezQnq3IY174SfsNKi3r%2F73C2UJ4VGOhfexIGl6xpqpA26PsLoDk&X-Amz-Signature=828643327a4bd6f22f8f829e38f6d26d38629eef22e1f2abdd754624ccc89cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEMA7KZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMcPmQRY5osCJZf3yyhDflPXMI5%2FydRdKaxOwOuh4kIQIgLHE2QCjbnMXmo9%2Fq%2ByWcYxkdMeOkDVHqEgzI%2F%2FKJ490qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlGDbpsFbZPwzkqwyrcA%2F9EECR0cjujyTOkdAxSw9t3cLArweSRm13bOriPiM86CfjuL5iKrzSjlanyaGvqNm5ad3serpvkqnq1EVa5tXa4A9v%2FN54lReW5lGcg%2BCSd9rTQV5bhttugjCaoxLh8lgUj19NKUSw51qvAsi7woQzKfYkwCuDbOXonoMVvJ0jjCYjXfBDSfx8EUQGBDVsjicgt8zILx%2Bqkbr9NkK2qB481rKY%2FxMfOZ2xmYglkXJN9kYk1mQKEcQ979V6%2BQfo9auallF9%2FHdSpNv1huQwdHmP9Tg%2FTu6PEJNV6du3YAlxTM4Pw%2FUHmmYp%2B%2FeGrsWkZQEHKU%2BO2K%2BB%2B1ZH69BaRi3NLSfiM6FAYTM82JnyhzF699%2BbdjcM4Xig8EB3k3Azd09H4Ed4llcr%2FvP9UqVY0WzrQQyNJ3ckFof3fILrrcOyqBP%2BG6lkquAPHyDbqAdgXRZDdd%2FHw7ugj2rTzL%2F3z46CeTPtdNF7AXTsOhMMHREBqYOsnf78FtFTNDXimd%2BLi98BcVM4jKXwKWze6GEJtUQGjusdZqWUMpGIfRlfbrLzlo4ovV4CH4Xvbn8ntQqQkwP7jRB5KdISAse8S8CCJMsD5%2BkCfwPjNhD%2B27nKgnsOsIm3iJpFwLpgMYD2qMLaws8QGOqUBUsu1h67lGSQQH66%2FZdNhOrrj1Np6erchAH0hbVioZr0bpWnaYkDLBialQeLw%2BCPdzrQqvrtsjlzI2wVQqghHCajO%2Fh7piNsgIxXvQ4VviKf5lxYs9D8xH%2BJSuz36BkNQkWvqkN0ByHdcGeuKAtqNaiq3uLf%2FFtXcon39Td4wLezQnq3IY174SfsNKi3r%2F73C2UJ4VGOhfexIGl6xpqpA26PsLoDk&X-Amz-Signature=cd418bc53c03205c55dfb213da6bba8cd9930bedc79c6cf7af1b99aa6a0a1944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJNGGBP%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8iSvFLp70W2hf2bb6LN83T72QTGCuZ41lCPi8nyyQuAIhAIPe3k4Xz3fzU8dp1fJksNiv7KevDltGnzFaVYPSOz41KogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydPzipT742Oo9UV50q3AMkIvSjRyn75NsRFf%2BiP7L%2Flh26QPT3MrABfB7mi9S7h%2Bw75nstx5Laqg0teg6pG2Lx31%2BeLSkqSj9CJbZFb4mMhwOX2kRR%2BbXcCQYe%2BHxvLS7mq3iz%2FLWXAxJqs44iyoSyL%2Bp0kwfpJJk526EGpEA21p9zAUaCxhWV6hnYVh%2BiaSCDjhDGxkAv0253RqejakRvqsZgC5r4zpal3IHmGLGY60rOVSrN5wC%2Bzd3HU7WbpAmB9LaxFKgK57hwAnyuPjQINb3u%2F3yL2QCOV%2BBfnl%2BE7G68dyGS5ym%2BWEG06GzQ5gS9dIs2V9pr9AnZ1HAyvJL3y9DlD0WD29gQnyW224h5TbbISNXTa5K22klQ4mTb%2FXiM7xz%2BDne%2FknsQYaJ2B4oZLhrllNoC1vBR%2FSgLCbE6yPdkOrB0om7m3LjVzXsJ2%2BurHc%2BoT0tsEyxgN41XFyS6cS4Cl%2BJ9PWW5Z7c9fljN5PGYJA8RHU%2Fp5AEqnoa6hKbnJHeNRU5kvK%2BD02b%2FMXs1cO0V3Ds3JhIgV2tiw5zWS1c0hutmWLfP1R%2BTVEHTMmbfYz2g26tm%2BQ5nMLk0hEXQKuGAmGEWMIkVIrBr4WoFkBbWsbnZSqE3VwiNkj%2B52HwNaF%2BiKgKn%2FAG2CDCPirPEBjqkAXsH7NO4Y1Epudn921THw7kBgsC4LHXYKTDN5GUN3YXpNDE0U0M02GQwQKOFS4WNOuJ5bUE8d7foQudd17x%2F8uaPHY4vHJpSxaNmfkngfM6g4EwcQ8PMqZ0XV6s4VIDRrOu26Wc9vy5Cd5FQTF%2FV%2BeDrr7px%2FUbWnwbm7enN7Ak85n3nhJ4RPAcCycq4kUVmKdn1fJb8p9rCIUlx04YW1lmIwUKN&X-Amz-Signature=f82f968c9f2baccd93d8b686056f264bb38b06b20b16673f26795b45aa588665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F465IAR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwDS%2FkDbfs0AHOWFZTT21Ff7cPOtbaMJlGCALH5y8S7AiEAlDipf8XV2iXcssPBSHUBi5%2FAX6PLHRMyXbGJviryPokqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0s0%2FdFKDSVjrA9cyrcA3EqJDhNJYNBvIo2I5rBwKWccAO%2BaT6p885Eo71STzi8iPtemw4o6R9XhTyyZL8nx0pBEprcDvPNp5BgJPP97MoJsVa89UrcNGwAv4IQxCnsY2czoS86SyxRrAtCkhsF6Kx6pM5kA4q%2B0HSRhOoaXxaponYAk4rpHp7QTR7Iu7Xywefro8v4tPjLL4oaQDrxFH%2BJG7uko91D0%2FUYmqEPGh4tot9nIbuayBZnYhj41o1JMnGhibPt%2BcbxzowdleegPoEkaDIDO6UUBVcWdmqmM91O0nMN8c9q2JIha9ahqd21dDUTOe8gtACXPuc5Py1Rp0VIkS%2Fh%2Bd243Tt36AQN%2BYbUxNDW80L1yEx5eS0X7UGjIveARz2o5dL8%2BynNv5k2RO%2Fmp1Vwhm9EaxOy%2F2tGOUGnn9GUR5cpAXLgeC%2Bi4KV6o5RHyu2c5Q0iokhHH%2Fm4JfwmTseOQm44m9Jo7Cnhg%2BtvhBmdr8X1WKvDuPCFTb6w56deK1sjGdA%2FXBEgJYZw%2BgIliGSq0GPYba4yJWPUMvxDhRuFbvjuCMCWrx6ZfsIU%2BXEk2JLAszhr9EzgHp6tiALtuygoYzTvluiRd0MjIz9UpoRIv1nZ7aqQ3QleCRimHuLfhMw37lb%2FQ88jMPqJs8QGOqUBYNZu9uQwZUmnIgNOybr2hPcB6dmL6T%2FUzOwXslM2N6C2SMqy97wv6VZVGAKOJYmdR4%2Fz5JKho667lDKaO25KxW1wAN%2FcrjmShOifoZYQmbfwFWh6hSG9W5Ryw6e2UYKzcFWOyGV5Il%2FwHxX1tEpMWDvhQj0lLtac8QSQUMXQ%2Bl7yARUj0iTQlJ4JpL87V2mp78XBstTHAICVVE7JVGiWdRYbXJzY&X-Amz-Signature=dabb701791385ad1fb4c48d4b15fc93e740631af25bae89d507eb6475de6af6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SEMA7KZ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T151006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMcPmQRY5osCJZf3yyhDflPXMI5%2FydRdKaxOwOuh4kIQIgLHE2QCjbnMXmo9%2Fq%2ByWcYxkdMeOkDVHqEgzI%2F%2FKJ490qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlGDbpsFbZPwzkqwyrcA%2F9EECR0cjujyTOkdAxSw9t3cLArweSRm13bOriPiM86CfjuL5iKrzSjlanyaGvqNm5ad3serpvkqnq1EVa5tXa4A9v%2FN54lReW5lGcg%2BCSd9rTQV5bhttugjCaoxLh8lgUj19NKUSw51qvAsi7woQzKfYkwCuDbOXonoMVvJ0jjCYjXfBDSfx8EUQGBDVsjicgt8zILx%2Bqkbr9NkK2qB481rKY%2FxMfOZ2xmYglkXJN9kYk1mQKEcQ979V6%2BQfo9auallF9%2FHdSpNv1huQwdHmP9Tg%2FTu6PEJNV6du3YAlxTM4Pw%2FUHmmYp%2B%2FeGrsWkZQEHKU%2BO2K%2BB%2B1ZH69BaRi3NLSfiM6FAYTM82JnyhzF699%2BbdjcM4Xig8EB3k3Azd09H4Ed4llcr%2FvP9UqVY0WzrQQyNJ3ckFof3fILrrcOyqBP%2BG6lkquAPHyDbqAdgXRZDdd%2FHw7ugj2rTzL%2F3z46CeTPtdNF7AXTsOhMMHREBqYOsnf78FtFTNDXimd%2BLi98BcVM4jKXwKWze6GEJtUQGjusdZqWUMpGIfRlfbrLzlo4ovV4CH4Xvbn8ntQqQkwP7jRB5KdISAse8S8CCJMsD5%2BkCfwPjNhD%2B27nKgnsOsIm3iJpFwLpgMYD2qMLaws8QGOqUBUsu1h67lGSQQH66%2FZdNhOrrj1Np6erchAH0hbVioZr0bpWnaYkDLBialQeLw%2BCPdzrQqvrtsjlzI2wVQqghHCajO%2Fh7piNsgIxXvQ4VviKf5lxYs9D8xH%2BJSuz36BkNQkWvqkN0ByHdcGeuKAtqNaiq3uLf%2FFtXcon39Td4wLezQnq3IY174SfsNKi3r%2F73C2UJ4VGOhfexIGl6xpqpA26PsLoDk&X-Amz-Signature=4695c0508575ab9a8210ed5564fb4bdb9bca9c8b3627e1d3706a3d6b1e4bd2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
