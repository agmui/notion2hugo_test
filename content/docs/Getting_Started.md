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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGQXTL6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2iqgvZ%2FtOPqp%2FZvjbOokLxv0Y2uG1HdflJyEdYWtmyAiBv8VYPvGB5T66rp8FLZh5SsyFa2BpldkDFDCu6eqHvTSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyUiuIkK5%2BFplzMgKtwDdOxTzAE%2Fcn2kyDUD%2BN4rc5Bb%2FzmdtkjmgEGbeazywPJ5c0BZi6rsMd9lBFO%2BOwPrYOcjdHzpCWooEVHOSn5cIGzNa19wiRUTp%2BGEETUFyiKqPxU89Ud5sTY17TRiKDY72neyIVS3FW%2BtEcNCaud778I6i%2F1OOVgJKvXZI4GY7n2p2LFsun9M%2BldDFTq6FhkTIrQS%2F%2F02KwNceah3vS7cpEdNmFjv0LIbo2EzAwqov9QaKt63tDoHL%2B%2BdCp7M3oGidOT6KRZnx%2B8ID4Sx9nawa9N4E3WPfM%2BJ5ZQrCHulrodo0PkFua4ZckNQlsNXUUz4jZEHgEOyfrGdqATuN%2BR%2F9uKBsytV1kl%2BFeNCfUh7l2GG%2BGXfGeY3pdgkBiI1%2F80lNLgTn%2FNw51eiCz9cgOCnYmZSY9gRNP6f0ZpyEM3ehvp%2BvkUpwZKumHEGYlycPf%2FP%2B20nO6IsXDz1sIAdl3oNsRZyM8S5YhUAw5cxOrqpOfaoE%2BNI6sHI%2FfZuU8E8YChfj88rlkGJMKEzesH%2Fze9Uj6sNc%2BopToTxE5ErfQ2y5Kdvh%2FAbQ9prf0Hmts%2F5JaRstSCVtwRXyzOwW0E9nfYPh5hpD5g8t5T8Rjdz01EL5zZFQon6wD0n3zjlm54w5vicwgY6pgH8yreblqbHoNdIkUHw5TVkouNYYYG9OLl5ui%2Fkv3JuSvsLwFBHlMzJ6rSc6Bl092tnbLJtfo2LEP7CzD2NBVtDwP%2F97OHy7thPDkKpJSOv5fmZ5vgvqy4rc3EIM%2FivHz7PVvK7WtRnUHpCel0aP4D7KmXcT8S2cKwcV%2BGJ%2FPS6hSq%2F0hJNBRbXdZL4TVMQgb3IDWz7f8o5pduw6V%2FDIsFmiQk0eeKO&X-Amz-Signature=81d3559fc3c3be32e3cccc0ddc090d7ea632587cfed046e5aa5e11026c6f0ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGQXTL6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2iqgvZ%2FtOPqp%2FZvjbOokLxv0Y2uG1HdflJyEdYWtmyAiBv8VYPvGB5T66rp8FLZh5SsyFa2BpldkDFDCu6eqHvTSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyUiuIkK5%2BFplzMgKtwDdOxTzAE%2Fcn2kyDUD%2BN4rc5Bb%2FzmdtkjmgEGbeazywPJ5c0BZi6rsMd9lBFO%2BOwPrYOcjdHzpCWooEVHOSn5cIGzNa19wiRUTp%2BGEETUFyiKqPxU89Ud5sTY17TRiKDY72neyIVS3FW%2BtEcNCaud778I6i%2F1OOVgJKvXZI4GY7n2p2LFsun9M%2BldDFTq6FhkTIrQS%2F%2F02KwNceah3vS7cpEdNmFjv0LIbo2EzAwqov9QaKt63tDoHL%2B%2BdCp7M3oGidOT6KRZnx%2B8ID4Sx9nawa9N4E3WPfM%2BJ5ZQrCHulrodo0PkFua4ZckNQlsNXUUz4jZEHgEOyfrGdqATuN%2BR%2F9uKBsytV1kl%2BFeNCfUh7l2GG%2BGXfGeY3pdgkBiI1%2F80lNLgTn%2FNw51eiCz9cgOCnYmZSY9gRNP6f0ZpyEM3ehvp%2BvkUpwZKumHEGYlycPf%2FP%2B20nO6IsXDz1sIAdl3oNsRZyM8S5YhUAw5cxOrqpOfaoE%2BNI6sHI%2FfZuU8E8YChfj88rlkGJMKEzesH%2Fze9Uj6sNc%2BopToTxE5ErfQ2y5Kdvh%2FAbQ9prf0Hmts%2F5JaRstSCVtwRXyzOwW0E9nfYPh5hpD5g8t5T8Rjdz01EL5zZFQon6wD0n3zjlm54w5vicwgY6pgH8yreblqbHoNdIkUHw5TVkouNYYYG9OLl5ui%2Fkv3JuSvsLwFBHlMzJ6rSc6Bl092tnbLJtfo2LEP7CzD2NBVtDwP%2F97OHy7thPDkKpJSOv5fmZ5vgvqy4rc3EIM%2FivHz7PVvK7WtRnUHpCel0aP4D7KmXcT8S2cKwcV%2BGJ%2FPS6hSq%2F0hJNBRbXdZL4TVMQgb3IDWz7f8o5pduw6V%2FDIsFmiQk0eeKO&X-Amz-Signature=e3e2346149ba11933e9bb9df4c9e3c94e65c8bc676f031eef0828387c73b1602&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGQXTL6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2iqgvZ%2FtOPqp%2FZvjbOokLxv0Y2uG1HdflJyEdYWtmyAiBv8VYPvGB5T66rp8FLZh5SsyFa2BpldkDFDCu6eqHvTSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyUiuIkK5%2BFplzMgKtwDdOxTzAE%2Fcn2kyDUD%2BN4rc5Bb%2FzmdtkjmgEGbeazywPJ5c0BZi6rsMd9lBFO%2BOwPrYOcjdHzpCWooEVHOSn5cIGzNa19wiRUTp%2BGEETUFyiKqPxU89Ud5sTY17TRiKDY72neyIVS3FW%2BtEcNCaud778I6i%2F1OOVgJKvXZI4GY7n2p2LFsun9M%2BldDFTq6FhkTIrQS%2F%2F02KwNceah3vS7cpEdNmFjv0LIbo2EzAwqov9QaKt63tDoHL%2B%2BdCp7M3oGidOT6KRZnx%2B8ID4Sx9nawa9N4E3WPfM%2BJ5ZQrCHulrodo0PkFua4ZckNQlsNXUUz4jZEHgEOyfrGdqATuN%2BR%2F9uKBsytV1kl%2BFeNCfUh7l2GG%2BGXfGeY3pdgkBiI1%2F80lNLgTn%2FNw51eiCz9cgOCnYmZSY9gRNP6f0ZpyEM3ehvp%2BvkUpwZKumHEGYlycPf%2FP%2B20nO6IsXDz1sIAdl3oNsRZyM8S5YhUAw5cxOrqpOfaoE%2BNI6sHI%2FfZuU8E8YChfj88rlkGJMKEzesH%2Fze9Uj6sNc%2BopToTxE5ErfQ2y5Kdvh%2FAbQ9prf0Hmts%2F5JaRstSCVtwRXyzOwW0E9nfYPh5hpD5g8t5T8Rjdz01EL5zZFQon6wD0n3zjlm54w5vicwgY6pgH8yreblqbHoNdIkUHw5TVkouNYYYG9OLl5ui%2Fkv3JuSvsLwFBHlMzJ6rSc6Bl092tnbLJtfo2LEP7CzD2NBVtDwP%2F97OHy7thPDkKpJSOv5fmZ5vgvqy4rc3EIM%2FivHz7PVvK7WtRnUHpCel0aP4D7KmXcT8S2cKwcV%2BGJ%2FPS6hSq%2F0hJNBRbXdZL4TVMQgb3IDWz7f8o5pduw6V%2FDIsFmiQk0eeKO&X-Amz-Signature=548f2472b6069b166748205c1cbbb9a961f3e9086dedafd2c3ab8bf5ce0ab240&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FK4D7OD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBU3aFHPD%2BIfYKQfLnL11PhPmeEon5bIXMOY59NQv9YAiEAxJ9z604wb%2Bq0GE%2BSJGLtiaeMuDcLZxS8mfq1Rmrq97IqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFUJQWVyIV%2BM0wLOCrcA9zy%2FSj5aqyP3zXtXQzGZIeWDF6IuNipFezzaBZrRCov%2Bidf4SCo1O14XcynagVnp0HYSBPtqCzL9agK2Sq72CjoplcyCtv9mgeK%2FrycUez0fmWVCmifl6BK439qmI1bOjJWmIkYkP7qU%2By%2FjlCg%2FH9lv9YcIrPZqei3Q4yXohhf%2BHk2wjwIA0xbEISeQpfiBgnOwbt5W6OBOpdyYOxTAjoFR%2B6AuNdh2BmnQh2odg0wrcMCO94mRchuGMkF88K74VsuqmaQhxC3IR3HlqtD5l4ourGHdNwL9IBTligPZnCc%2BzMOzTGcBkojmbtuWT3y9zMchqPOJoSW1XAant7DlnwnymI%2BoieyYmD%2FOu%2BGdY%2B2fgWuZt2r%2FEoggIZ0xLk%2BvdcmrIAD1SYi5LdD%2BNSgFZ0Swm%2F8EbAbJWT9TMj3KhnIm5zTvcn3R393ZTUy%2F%2FQFnPzsf%2BhKYJuv%2Fg49fo%2FB3p%2FiEdgFf5HdTmCspcI7xRzyWEwY8SUdfNv%2BFUNxeAA7Nc5PiZVlVkekwlhwp69v6RuxcHr0e4Gj3VthKaDZZlSJIYRDb49uRj25grs%2BBSDiXL%2Fv7J2Jq2xrv9%2FHaxKYukimEHnSv2VFK2xY%2Bb%2BU8UnVILjLiHbk9vkQPPmaMNj4nMIGOqUBm8Egiij3ebA4C7nHMuxfTbY0VpzxdlCK2CGkQxj0J8pYVfW3GuX7XiAy5Mc%2F9dq3KWcuaJyUAeDoyLKFiD1NNPV9PRGb54JBuY9niA%2B4PcCGd3mKAYxbS4O%2BuZV4iaD1ZA%2B%2Fr7e57T6hPOS73Sr0%2FEX4JzAC3DQF16TMKp8CzCx7OTjlkB3LLysgRt%2F6okXOPMfsi9GtUMZIYNe8jtFqwjfS6k6o&X-Amz-Signature=21dc5467e5ec40e559856fb3e852b604165972306ab71103a5a266cbda31fa11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWK44E3D%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ98UmJrEO8AZGYs4tdVYSACLzVscukC%2F5D0hA67HXPQIhALBwk98FCInGyoGLUZlWx3OALXj5oSdwu2IrtGPJZnX4KogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwb0WNkCY%2BnhVSb9JMq3ANUAyy8EYLZBkc8nn1Rr70ClmJv%2B79p3cCHhkaTHp%2B0J8SyeCW1%2FrKBtHUyqBuTqpJ4ihTM0jiuSSB3H0rhREZSSz4wxLygj%2Bdg%2Bk26%2FCTYDp8EtctogJnWy3L8egmt4EdQ%2FLMVKviGZI1VPnQxlnIAjKB2ADl%2FHrftEsA5cYBjtjfnw4oywfPgXxd8EQBgQPGMftoCq3r76s38nygIsK4oB%2FdiJrBtAjJYBSvuGjgyDtLLowLn8JBvIXy0bPhShtD72GJA%2F0JxBUxDjH7DHIdnUgd78NESIe0jm9lXxuXX1jXefvFumff5fLcAUsTpHAp6AlY%2BydrRPxBG1Vqc8ugvzeQAbZCgEnLC83HWFWVIYixv2Xr35aCtBxW4tbHoPivQclmxK8LmDelbo%2FSlmX9p44pqjgjMgOkU%2Fcrx4opb0DBqJxTdccntPvi7Fqv7skPjNLmrSovF4ltt33INq7momZ3PekDFwaV6EUNo%2FZlZTXZ3TbqQpX83w1BxhBe532JbB35fUGUdecyZI4ow2quxPYVk2eg3nESUDL7b26qsO6mP2edYCLx4TH9uTfObue%2BG0%2BkUX%2FVejRFQuszV%2F3sBjDFCG%2Fu1SyB8QeJZYtzvfXnbch%2B4OrsKpY923jCv%2BJzCBjqkAS15hG8H%2BteKqQVoE6kjavgIchICK0wbDdv0jpXl9tC3SGGTpjvgTdhnFlnjo%2FOZkiN2N1wmfOsL3r1RL9vvIRTScPzgOaSj8nHNZ3xw53xqGWsflQmiaGGZrFzYG%2FLMbVmve%2BKZhCxYet4mC6N13sb93Wb6EAMymHoKRucHDG2o1om4Xk%2FyeoYGj%2FnipbXc34BLtFslLtY%2FIcdoZmW0y6QVtxIj&X-Amz-Signature=8f6368d85c31fcb553590dc000885a39ebabc160c115b2347085345d1c497140&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYGQXTL6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2iqgvZ%2FtOPqp%2FZvjbOokLxv0Y2uG1HdflJyEdYWtmyAiBv8VYPvGB5T66rp8FLZh5SsyFa2BpldkDFDCu6eqHvTSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyUiuIkK5%2BFplzMgKtwDdOxTzAE%2Fcn2kyDUD%2BN4rc5Bb%2FzmdtkjmgEGbeazywPJ5c0BZi6rsMd9lBFO%2BOwPrYOcjdHzpCWooEVHOSn5cIGzNa19wiRUTp%2BGEETUFyiKqPxU89Ud5sTY17TRiKDY72neyIVS3FW%2BtEcNCaud778I6i%2F1OOVgJKvXZI4GY7n2p2LFsun9M%2BldDFTq6FhkTIrQS%2F%2F02KwNceah3vS7cpEdNmFjv0LIbo2EzAwqov9QaKt63tDoHL%2B%2BdCp7M3oGidOT6KRZnx%2B8ID4Sx9nawa9N4E3WPfM%2BJ5ZQrCHulrodo0PkFua4ZckNQlsNXUUz4jZEHgEOyfrGdqATuN%2BR%2F9uKBsytV1kl%2BFeNCfUh7l2GG%2BGXfGeY3pdgkBiI1%2F80lNLgTn%2FNw51eiCz9cgOCnYmZSY9gRNP6f0ZpyEM3ehvp%2BvkUpwZKumHEGYlycPf%2FP%2B20nO6IsXDz1sIAdl3oNsRZyM8S5YhUAw5cxOrqpOfaoE%2BNI6sHI%2FfZuU8E8YChfj88rlkGJMKEzesH%2Fze9Uj6sNc%2BopToTxE5ErfQ2y5Kdvh%2FAbQ9prf0Hmts%2F5JaRstSCVtwRXyzOwW0E9nfYPh5hpD5g8t5T8Rjdz01EL5zZFQon6wD0n3zjlm54w5vicwgY6pgH8yreblqbHoNdIkUHw5TVkouNYYYG9OLl5ui%2Fkv3JuSvsLwFBHlMzJ6rSc6Bl092tnbLJtfo2LEP7CzD2NBVtDwP%2F97OHy7thPDkKpJSOv5fmZ5vgvqy4rc3EIM%2FivHz7PVvK7WtRnUHpCel0aP4D7KmXcT8S2cKwcV%2BGJ%2FPS6hSq%2F0hJNBRbXdZL4TVMQgb3IDWz7f8o5pduw6V%2FDIsFmiQk0eeKO&X-Amz-Signature=34749a027e3f587bf109bea15dc87ffbec915677f26c657ca5b621113c52c233&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
