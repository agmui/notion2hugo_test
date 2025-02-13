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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPOBQHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAx3hHl2tsnzVRUXSTbi%2BVKQtiQR4eAUvrQZs88cMTXAiBjiImbu%2FOjRvBWJonfTWR2JBmMfQJtx%2BYlum0pQ%2FLZ2SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmeQnEkL3b4FAwZKpKtwDJ95%2FAwM1HsDOrqhgzcTtpifMQUxrjT1jQINVYF8bwCofc7Aqwiyrt2wJIlIX06hOM07lcOQpcxOLKm1Y4TUTiO1R%2FabY%2BDWETM3qif8fXiWOVOVIU9HnXjUaptIWQIuDFxjA8pryGPa2b5uU9Sfp3uhoVJszmd4hYfE%2FNXIboRMXjw85ET05y2R6Mkm2%2BtHJJNEdJy2nrQrYe6%2Fst9abh4RfAjl5TcZ%2B%2FOow5Aj4ASTff5miUqRut2rPK0CdguacQ%2FW1qqpqD2JrNXgL7J%2BQPkTDCHHzkHPWIariqWA42bO1SoB%2FRT2ha8CRX5GxtkbMs%2Fo8syU6vZsd854W13V%2BrFAFouW6A76huUVl5b1JmyagkxrgaNLiIosmmW7uKU90eJ5MjQ3fEB7bYGBbgmQP0M6OSz%2BB4AaiGjeT%2BgluFFavQ4vy%2B8fpyHfD5ljFd9oze73OpD%2FIEeP%2FglV3gponXGBJ41nfQlIe2PIZjN1KscczXTGTYjyMuN8JmKpYdvnIkPOWVUAx%2FX9kYdyAoeRZ6H9KpHkmIye244cEEBpOL9jY%2FFXYau4gT62xXE3oj2wqh9EZ5UFMHYCJjRc2YLf8kV12rQ8wUkc0v3NGyRAL%2FV4531I7fI1r%2FOG%2FYMowi5m1vQY6pgGK7V%2BV1eh7OiwpZI%2FYMilx9anxJRLCTkDzVyC1ksITOqgHBh2Blrf9pn%2BGk%2Fy5qZ%2BJ1pMjq2Z%2FPKFbJGURGZYknG0Ynu24jQmAPWTXym6KFKK%2FXLfaKsSWfjKep%2FaiOj0EEdcjXEMcuq0TndzKL%2Fq3A7S6dp39ZcoV%2BGJwT94bKF0zDteHa1mh5l2FUGDzSjQ2jcsyQjRdyhXdpEgl7FWc0N6FrkDx&X-Amz-Signature=4ae3eda36176a70a1ea7567dd34a22991229a63fa0c9172c26f67dc4e5243a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPOBQHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAx3hHl2tsnzVRUXSTbi%2BVKQtiQR4eAUvrQZs88cMTXAiBjiImbu%2FOjRvBWJonfTWR2JBmMfQJtx%2BYlum0pQ%2FLZ2SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmeQnEkL3b4FAwZKpKtwDJ95%2FAwM1HsDOrqhgzcTtpifMQUxrjT1jQINVYF8bwCofc7Aqwiyrt2wJIlIX06hOM07lcOQpcxOLKm1Y4TUTiO1R%2FabY%2BDWETM3qif8fXiWOVOVIU9HnXjUaptIWQIuDFxjA8pryGPa2b5uU9Sfp3uhoVJszmd4hYfE%2FNXIboRMXjw85ET05y2R6Mkm2%2BtHJJNEdJy2nrQrYe6%2Fst9abh4RfAjl5TcZ%2B%2FOow5Aj4ASTff5miUqRut2rPK0CdguacQ%2FW1qqpqD2JrNXgL7J%2BQPkTDCHHzkHPWIariqWA42bO1SoB%2FRT2ha8CRX5GxtkbMs%2Fo8syU6vZsd854W13V%2BrFAFouW6A76huUVl5b1JmyagkxrgaNLiIosmmW7uKU90eJ5MjQ3fEB7bYGBbgmQP0M6OSz%2BB4AaiGjeT%2BgluFFavQ4vy%2B8fpyHfD5ljFd9oze73OpD%2FIEeP%2FglV3gponXGBJ41nfQlIe2PIZjN1KscczXTGTYjyMuN8JmKpYdvnIkPOWVUAx%2FX9kYdyAoeRZ6H9KpHkmIye244cEEBpOL9jY%2FFXYau4gT62xXE3oj2wqh9EZ5UFMHYCJjRc2YLf8kV12rQ8wUkc0v3NGyRAL%2FV4531I7fI1r%2FOG%2FYMowi5m1vQY6pgGK7V%2BV1eh7OiwpZI%2FYMilx9anxJRLCTkDzVyC1ksITOqgHBh2Blrf9pn%2BGk%2Fy5qZ%2BJ1pMjq2Z%2FPKFbJGURGZYknG0Ynu24jQmAPWTXym6KFKK%2FXLfaKsSWfjKep%2FaiOj0EEdcjXEMcuq0TndzKL%2Fq3A7S6dp39ZcoV%2BGJwT94bKF0zDteHa1mh5l2FUGDzSjQ2jcsyQjRdyhXdpEgl7FWc0N6FrkDx&X-Amz-Signature=ef18ea40918ab8f4fcfd5437bfd16f77bbf677c57fe9c53acfff8eaedd0f2a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YASQZVPS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBh1Bs1WRW69e9B3Wnd3YZdmh0rb%2BtRxgvT1pfZ18ggNAiEAkoFmzANb25UJgh9qCRAkeyouhX8%2FSipiMvqWlUzRZx8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHb6nNn3O42wjz8JwCrcA42B3RDhWXbu%2BhE3COL%2FXf3Dg%2BYSf1WAum0y6A2AIgu2S1PkP5DUdn3niRtdR1kvAAvTHJt6s7KMN5Wwrupt%2FCkW2W%2FcJT%2BdyGpxoPegsMGEjMeQDR9oXWEloHe7FPTHjRY%2FXu%2B%2BL7zkJoiPHJmcj9Owdoju9JUUXR4Vb%2BW8nPuGNCZuFmJE5FVJVvbjELjfNj00qOqWWTt6YiOEbfwl3RcQzcSqZZeknGXo%2B6yuV61AeLG8RW7UCj6E%2BxsvkCzoxD5Fqa9j4vl2zUXSJxv%2FHv0xg8Zo2gzzfzY1IfKN1hfnWon2k6Bhc9tL0beiY1S0%2Bj71tctBhxekRU8LJ3YG0sBcZfD%2BUwk5jTspGUArYRgmCctyEYQ5JFjYEqeloM3LakJQVrShQ70bWgzZdJ8UmrBB8TjEoG8FDOI8FO2D5BZuhf68whGlVht8ALFRGm2Ew9CFfIJr8yPQnhnW%2Ba41K7o1WDGDwHAck54JmLondTONcRhSTCVrwngXBuLNAUt8CzZxH9AiDH%2F%2BZvbLCKvdxBqRQ9sv6lzEDqQDrw4zGa6TrXrrTJrI5LmK6jm33qVXXjSQOf4IsEoVHPfECmp%2BNRMvIhmbkMBr6UMMLsWzbk6aof%2FV2N0VaP%2B3QKAUMJyYtb0GOqUBiopI3G%2FhxZhYh9a9LuUJAN%2BFz4Q9KVB9HuCN7Tj6Ginhj3uHcODd7Mt2d0qz6mys8IVhbBMdwWAfiQ1lST4L%2B%2BnteshUft9hDPxEQsi19Ij7Pq%2Bl1sgnDN%2B6phVKaD5GpQOATDcY5Rpc0xjROalxJWfFmxLOAUaftKstWyQi3MbGFkSM1M05b3UfCmn2zfdOtneOtlDv0CTfjuDca6qFyVGt3eTO&X-Amz-Signature=8d00f03c27df97aa5ab7328d425fdbc51a88e10b5e3bc23b6417c383fada58c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WRPFZ5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCk9JjeaGfQxaGqosEzMlPpoXiQCt7R2hYMlgzS0x2gIhAKefq6PWdQD4caF27AKYkGtG68qV3t0TYHSpH7x1Vs1eKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Ih1Q77O81N4IP%2Bwq3AM686t0CUKnUh0cVNnL2w91mg9Iv5PDBXNkuNC6BbyT3dTgPMuekojC7XE49cfcrw8HBgBP1mWMgKyt%2FVtRh3CVAf1vDoxIFqULGzNXR9qt3OpEzvsGxuVVuCnf0kTg%2FQj6SByzlbXFGQkS1pQkuzoVxMyXInH6%2BzTT4Ziu%2FGs1zNqVVAon0iOxlaN6Sw%2FkmsHkdxWw%2Fpps0vvDu5e8VHgr9kFwmvj4b5EA7BGwCFJUjuVEazV%2BU2TxItzjYh6TiBdfZtHzkgNEsbX%2BjlHc0PQqcDQRBKQEy%2FMV2qJq0yJXKekORMbizyzVOwq5XEh6n77P5yznEzu8ugHzqlstDkZCOvHS4V3Nv%2FvLeyLvEG6QvM8eIqh%2B94y7p%2B4LM4ve1zIlzlorvsSr92W6Z0WEuaWoKrOIfZitI4jePkxYKFAs%2BWNZwXwB66eHTVe67%2FwKdtfUFCu5ul3uXdD%2BIEqxsge3EQyrf7g7q65yPhxJrzo0m%2FaPQXcMM5%2B0ey7oNK0GjzLx2rFLDSujY%2BQxUlivTBgwY9PBeCBZpf1yVLNJ%2F9SSqSJmXJ%2BBXVvrTKLF8Xb0sCTqzGIvHRmr61eP68PyoRiwX2AFXAXqxNZQ16OTH6yigQXMwRUyFadZTJlXJjCcmLW9BjqkAZKhmxiXYhbYS23SK2cW5Ju8YDVKSZH9R3zaEGZGSho2nJ0dva5EjPhf3SvE9FKxpLERCTxPp8eIMbBU9CntNDCAqu1VtR%2BKZG9ztAyd7jCzf1aH%2BDL7450F7UiiKMk36FcLtdhMfu0ihHDJGeFL3AAIslXgSDEKiCw8rCvVllwZ0wXeENbVkL1EQbjZbE0I71c8xyX61W3OAj6D%2B9E3chTmWHg4&X-Amz-Signature=fcd451cf35fe135772250adb62841be78fcaf3a8d3280efefbdf94e9804f177d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPOBQHQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAx3hHl2tsnzVRUXSTbi%2BVKQtiQR4eAUvrQZs88cMTXAiBjiImbu%2FOjRvBWJonfTWR2JBmMfQJtx%2BYlum0pQ%2FLZ2SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmeQnEkL3b4FAwZKpKtwDJ95%2FAwM1HsDOrqhgzcTtpifMQUxrjT1jQINVYF8bwCofc7Aqwiyrt2wJIlIX06hOM07lcOQpcxOLKm1Y4TUTiO1R%2FabY%2BDWETM3qif8fXiWOVOVIU9HnXjUaptIWQIuDFxjA8pryGPa2b5uU9Sfp3uhoVJszmd4hYfE%2FNXIboRMXjw85ET05y2R6Mkm2%2BtHJJNEdJy2nrQrYe6%2Fst9abh4RfAjl5TcZ%2B%2FOow5Aj4ASTff5miUqRut2rPK0CdguacQ%2FW1qqpqD2JrNXgL7J%2BQPkTDCHHzkHPWIariqWA42bO1SoB%2FRT2ha8CRX5GxtkbMs%2Fo8syU6vZsd854W13V%2BrFAFouW6A76huUVl5b1JmyagkxrgaNLiIosmmW7uKU90eJ5MjQ3fEB7bYGBbgmQP0M6OSz%2BB4AaiGjeT%2BgluFFavQ4vy%2B8fpyHfD5ljFd9oze73OpD%2FIEeP%2FglV3gponXGBJ41nfQlIe2PIZjN1KscczXTGTYjyMuN8JmKpYdvnIkPOWVUAx%2FX9kYdyAoeRZ6H9KpHkmIye244cEEBpOL9jY%2FFXYau4gT62xXE3oj2wqh9EZ5UFMHYCJjRc2YLf8kV12rQ8wUkc0v3NGyRAL%2FV4531I7fI1r%2FOG%2FYMowi5m1vQY6pgGK7V%2BV1eh7OiwpZI%2FYMilx9anxJRLCTkDzVyC1ksITOqgHBh2Blrf9pn%2BGk%2Fy5qZ%2BJ1pMjq2Z%2FPKFbJGURGZYknG0Ynu24jQmAPWTXym6KFKK%2FXLfaKsSWfjKep%2FaiOj0EEdcjXEMcuq0TndzKL%2Fq3A7S6dp39ZcoV%2BGJwT94bKF0zDteHa1mh5l2FUGDzSjQ2jcsyQjRdyhXdpEgl7FWc0N6FrkDx&X-Amz-Signature=60fc42417a8125e66d19afa0fbc8ce6c5d1d5f5c775759a86992c79e1ad67d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
