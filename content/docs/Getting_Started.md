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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXQD6TE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFcHmk%2BECFBNcLWVd28HhiUSJMtdg%2B3W8w6SAOX%2FixfAIgbF9JL02bqHb2p%2BVoWjOXTD1KUnHX6loRw5gMCZLbujEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7IJ9%2BZOP9Ku7tUDyrcA52aKWR2c0D0ftY2d%2BvL47lrWCGZovrv5PDAZsZxwOYQtCcm54yUOed25eWrFgn7QB6%2FU%2BeBLph46DZqCyi48dLRlh8UmMmDvAC9r7GoJmASRGDLPAGidYervZ4mAEGcPjCuH3cQLN9yFtneLbF6NoIrq644MhWBmgll%2BK%2BpkFu3Kzaq6yPf5m8vVPHArDHe3%2FP%2Bv3SUjLzPAzmf%2B7VKXS2jYBTU1Xu2lqykIIfhUcqMQogvA8JrOsy9xTqD%2FBkwHsxsQSwyM6yH5mry4ny8%2BJbVMAjogEunCf%2BsmEXnhp09lAfKrAsQW6DTszlt30Dir3FSiMJkLz8e1N%2BRZy0NDD2lsF84RYh8fDSWyePv0LGwynjdHLP%2BemS9%2FJ3SIFbyKV8%2B1ASQiXttaXXqEQ0kHtgpFrZfsWnVb7F1rzYy%2BHFWvtUl10U6ywdtw5rwOMhK%2FjpD4VE3hJeuwwjm1BZc46hlTTMuqFOua4kU9sTyFFEVtUJLC8Y6A6o4Mxs2UfFdUDi8v06uEPduXG9J02o5xkk9UoukpSjGr0k4aa6AoN3AK3asWEYyZmdhVT5yFfC4SVJERtDBiJFlhAio%2BPTqCIiAx72SkQQoWsj0vFP0uXJk4AsHJol33T%2BnrYQ7MP2Z8LwGOqUBfbY36h5088%2F8eIUIx1ftWMmdvdvLqZMaN%2FvaZ0MSWmp6XGVIEPj%2BJQPqHZ47eWz0N6DYL0nUZP%2BBS8fND7ZO3ubgVn7My4bDDZsjvD%2F8xd12XbVjZRRO7Q8hvC4yZ7CGVQ%2FZDS6Zd%2FH8AN4DBWNEB13YFVl85THRBeCFam7kOiknY6wFTzXvw2tmuM3gLy8f%2BcKdsGwgvoFM4jnYUFMs2IZsZSEK&X-Amz-Signature=159a1e9ce3f48ecc5174f4543c6f6e0c4c764c5fe8661fbf572ff2d00eda29cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXQD6TE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFcHmk%2BECFBNcLWVd28HhiUSJMtdg%2B3W8w6SAOX%2FixfAIgbF9JL02bqHb2p%2BVoWjOXTD1KUnHX6loRw5gMCZLbujEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7IJ9%2BZOP9Ku7tUDyrcA52aKWR2c0D0ftY2d%2BvL47lrWCGZovrv5PDAZsZxwOYQtCcm54yUOed25eWrFgn7QB6%2FU%2BeBLph46DZqCyi48dLRlh8UmMmDvAC9r7GoJmASRGDLPAGidYervZ4mAEGcPjCuH3cQLN9yFtneLbF6NoIrq644MhWBmgll%2BK%2BpkFu3Kzaq6yPf5m8vVPHArDHe3%2FP%2Bv3SUjLzPAzmf%2B7VKXS2jYBTU1Xu2lqykIIfhUcqMQogvA8JrOsy9xTqD%2FBkwHsxsQSwyM6yH5mry4ny8%2BJbVMAjogEunCf%2BsmEXnhp09lAfKrAsQW6DTszlt30Dir3FSiMJkLz8e1N%2BRZy0NDD2lsF84RYh8fDSWyePv0LGwynjdHLP%2BemS9%2FJ3SIFbyKV8%2B1ASQiXttaXXqEQ0kHtgpFrZfsWnVb7F1rzYy%2BHFWvtUl10U6ywdtw5rwOMhK%2FjpD4VE3hJeuwwjm1BZc46hlTTMuqFOua4kU9sTyFFEVtUJLC8Y6A6o4Mxs2UfFdUDi8v06uEPduXG9J02o5xkk9UoukpSjGr0k4aa6AoN3AK3asWEYyZmdhVT5yFfC4SVJERtDBiJFlhAio%2BPTqCIiAx72SkQQoWsj0vFP0uXJk4AsHJol33T%2BnrYQ7MP2Z8LwGOqUBfbY36h5088%2F8eIUIx1ftWMmdvdvLqZMaN%2FvaZ0MSWmp6XGVIEPj%2BJQPqHZ47eWz0N6DYL0nUZP%2BBS8fND7ZO3ubgVn7My4bDDZsjvD%2F8xd12XbVjZRRO7Q8hvC4yZ7CGVQ%2FZDS6Zd%2FH8AN4DBWNEB13YFVl85THRBeCFam7kOiknY6wFTzXvw2tmuM3gLy8f%2BcKdsGwgvoFM4jnYUFMs2IZsZSEK&X-Amz-Signature=ac0f9f60044b105812e578b92b65f4e78745d29d251af116eb3f209befc7533c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4XKSS5N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlfZ8WPJIthuuNrynBMswy2KDzOx0ccKY3bZvDgHHIxAiEA%2BGKAWDu%2BObJuZulOl1cbszrfmEHFTEUSM0nvkVRiXVQqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrp2VmaNpaaQuYlAyrcA%2FbBYjJE9NkTCmxQh864oSiIM%2F8Q6BF9yx0pbK8oFoMwYyJz5fEI42GRBt56w%2B6UCm%2Fp9A9GzHEx6LCYJmOdtbVZcyWpkfui55QRXHJBHPS7RH16yJXe9YcP3wEWxNtq8yJl4qIPFW6FUdUCoi5gJbKdWo1%2BFkaQSgYE2WyyDODX%2B3c5ae6CnQdvM%2Bz4VgEE%2B0BtETn2nknumEVKiUSNvfkH9I%2FykBGW5O%2FV%2Fn5dA1a28xMfI%2FkUHXom1H6bjt%2F7S3MvmCdiax5bEd2XzT9QCjhE9DuiJnw10IncjgEDJEYEL7hrCrbDnHe8iSEC7zRaGBG7y5Tu5A0advbozpduNvZMZLG6Z%2F6R%2Bc7SPfv0ZuyW2gXLOb91pN7AmJRmdpOYK5buuIgOWCjCY7DUd59UvykE%2BotbPJIX4cQI%2F3k%2BAV6ZPuOHUhAbfeGJCtOrCWwtLvnd1v%2BZA6Q1%2Ftr6%2B56rhjLWBWBSqQUSM1Tu3yXFM4txR7UzOcGx%2ByDFRsRVziUT736hxAW0zjiU6Wm83EVyk09w0fAC3WULKGqmmySQhl4e1cK13%2F05DNQt4dJPm9nnyb0vBjA9zTy4DkLtzY4DDcLCRQZlPkdR7w6JMlydqlva%2F%2BTV9vMSyEvQ7dMhMPSZ8LwGOqUBSoEJUoCZAZ%2BmVGrSYmpHvUTnGHQu5R88xeiRL6dbh%2Fjs3usdrkK6E%2BeWK%2FBqfBWOG2ot6nKE4pXikLWDrmQu%2F8CU1DiPe8MtlJXj2UBjxGDqhNGJCRLk8kdX%2B7S0zNvEixPUU5z7iRehfv2Vbuhh42RbwqP1Yv5v8Fcb410jXLiv3Z0dQB0sjQbxcef89R0la%2FDQ%2BJSfKC7od2Fk9GAt12%2BLHI4Q&X-Amz-Signature=33f90c7a9564624fb8fb1a1bd29102c9bfd689df48445ecc17e76d306afd3b57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2D5D5WR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8c1uE5WPmmcXGmGuSnq4k35T%2BA8B6xtlTDCB7V7fPSAiEAmFjcMAgDPyh2vkA3XjTV9quczlHyXOdQ3%2F7yUN8Ym%2FMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPHRbYpUk1vuM5FnyrcA2wucYmu7XL9SC9Qe2utB%2BTfOHnG%2B12wmstc0ElhbFjn2DkHtIJtQwDXRrHT7R6u08NneioJMFlHJmawsfOXDYU0ffaYuLhTzuqCyyERymCNajhN7pQO8Q5qjNDDJuoagp7zv5P%2B3FeT8nJa%2FOMQ1buAOh6%2Fgy7MKKoI2npHxWZDDl0lQ%2Bt6IShnh5ODrGNGqldgQkqfMXsAKlirD0yx3k3ZIsssoJYFk1UIwxq0%2FBVasD0nviSu4sWvwLPv%2BOdpIj8VOa4cdV%2BCzWknujE7utuNU7UJAD7UHOED0NoU3GitcLbAiwAsapXuTEqdmBeZn4XPE2eWxtdBSJT4MoT7cuC8sb98TZz69nv9wyivsBC3PLEkBMcSKhytgqtruCy4taV5YDBkBwzwQwsC%2FeFnYDohhDKxwQT%2F4XI9ZiCQMwPQ%2FmHFaS2yw0pYgzh8471uFrsDKMYyHiX6CvkmnfNFCMJvpqvMqxhyMfP76elHI%2BfuPvl4ZN%2BRopKP5EwZr%2Fca%2FVdeydKcT3tF126PKFzVg8UFwpuenT5tjKrmkfdcKcvSQ68f4lbQwIKHt6bzinvXUPpQ%2BHTrbx4vqW44EFUl3rtJiFir635lPV4K4gmBFQ4HHPvsdukkb9pnwJnqMMWa8LwGOqUBW%2BUu3I%2BM1LtX8AhRm%2FdzjfZLcEkpD%2FKTa7WRPi%2BcMB3Q92diiE2Z8wdMtqoT316S1JC%2B8gSQSR0OOFKsFfBBZb5qVGTZc%2BxTSEQ%2FEnJPxTwOImJiqYAST%2FO8nzh0MH4S9iPhNy9gp9oST8bWANpc2uU6p4MqJGXNBdzlgfK1AoDnCZydfO%2BYQTbztN%2FfgMssbPHuYVgR4Y09NsOAqAe2%2BL4Ypmc7&X-Amz-Signature=8982c3aef8fe9738a818299377fc99136c9a6f9c8213ac9f9cd3d405f39d30c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EXQD6TE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T003514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFcHmk%2BECFBNcLWVd28HhiUSJMtdg%2B3W8w6SAOX%2FixfAIgbF9JL02bqHb2p%2BVoWjOXTD1KUnHX6loRw5gMCZLbujEqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7IJ9%2BZOP9Ku7tUDyrcA52aKWR2c0D0ftY2d%2BvL47lrWCGZovrv5PDAZsZxwOYQtCcm54yUOed25eWrFgn7QB6%2FU%2BeBLph46DZqCyi48dLRlh8UmMmDvAC9r7GoJmASRGDLPAGidYervZ4mAEGcPjCuH3cQLN9yFtneLbF6NoIrq644MhWBmgll%2BK%2BpkFu3Kzaq6yPf5m8vVPHArDHe3%2FP%2Bv3SUjLzPAzmf%2B7VKXS2jYBTU1Xu2lqykIIfhUcqMQogvA8JrOsy9xTqD%2FBkwHsxsQSwyM6yH5mry4ny8%2BJbVMAjogEunCf%2BsmEXnhp09lAfKrAsQW6DTszlt30Dir3FSiMJkLz8e1N%2BRZy0NDD2lsF84RYh8fDSWyePv0LGwynjdHLP%2BemS9%2FJ3SIFbyKV8%2B1ASQiXttaXXqEQ0kHtgpFrZfsWnVb7F1rzYy%2BHFWvtUl10U6ywdtw5rwOMhK%2FjpD4VE3hJeuwwjm1BZc46hlTTMuqFOua4kU9sTyFFEVtUJLC8Y6A6o4Mxs2UfFdUDi8v06uEPduXG9J02o5xkk9UoukpSjGr0k4aa6AoN3AK3asWEYyZmdhVT5yFfC4SVJERtDBiJFlhAio%2BPTqCIiAx72SkQQoWsj0vFP0uXJk4AsHJol33T%2BnrYQ7MP2Z8LwGOqUBfbY36h5088%2F8eIUIx1ftWMmdvdvLqZMaN%2FvaZ0MSWmp6XGVIEPj%2BJQPqHZ47eWz0N6DYL0nUZP%2BBS8fND7ZO3ubgVn7My4bDDZsjvD%2F8xd12XbVjZRRO7Q8hvC4yZ7CGVQ%2FZDS6Zd%2FH8AN4DBWNEB13YFVl85THRBeCFam7kOiknY6wFTzXvw2tmuM3gLy8f%2BcKdsGwgvoFM4jnYUFMs2IZsZSEK&X-Amz-Signature=edf9112dfedc47ad81a331dec585e3bf805e5ee41e835e89f8c91e97d8d48be8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
