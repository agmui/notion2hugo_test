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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EVHG4P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAk2qf0i8A2XXIefMZbMubLiUhU51X2KmFfv2u2A5l%2FwIgfByVc0czpO9ALbqXlnEU9LrVjXcvlqptowp89N6xXpEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVMiatj3JvzOg003ircAwLWktKDXwjTj2clG9Oda4AApYMKSGYXK6rYEHwLtiHMOlPRF5mBz22TbgM%2FrC9bMLVKKOTiumzSxV7Set5lhEn7KaWqqhEmaQ4GuzrpmLQ77%2Fn4n3fR8gvLvhGAo1Fii4egKLNPHzHyJz5bUtqmqQVpfNTg3Z68XtgVohc0PmTSqUA8BimrQSCryVCmeCpABx0cvoYYVUge7JF%2FrnVT8MyMadRVm0n1Z6LZm6mBDthhI54tivKxecO9HGcE6ybxCIVr7W703cyr%2Fj4HQoIZf7FAo2hxrTm7OOVG52eFb7oxAst1qI9U2iohXANW7uDr4dl5T7pgtpfXR%2FjBG3aERm3ysddbm5Jv7%2BC1AwcSCchibNjSVLUBquoO8PTZ3lNVXiMWAJUn%2B1DMpknQ07comdT8p%2F6dT5qNKsuYrFBE0g1apqcuK%2BEGRFQLGr6uftJs7m8INjO0tYJyVGXWQye0VMcROtCBVV4dMmoLTgOo7i%2BFQY0c%2BboHZRqBt4m5WB8AxRmMZ0ieDuTCPsVxAdfkwC5BcqfkOGNRWthmamsaa%2F%2B9pqX9cO1u4cPC8hwKfKvXXRYpDJuELTyT84gzTgLBeOQPcgfFOfKErRA%2BzPEpeT%2FpdStQDQaKCCo4e1MjMJSg8cMGOqUB%2B9UUWPk6TgzXyJJacY%2FFha3GrLGLoDwH10wt5EqP7LbXb5hF4N5rOgPWc5E%2BoWRLjjYexW7wzje5zOwQEuDiuqqsJwxCQRwYMg4WEHlj5u49AwkfagxZ5BJKSI7h1CDOl9CzyhQ9GEO3ltjJIoiWXM6XLyixGmAFX5sigiF9CfD4tfsMJ8DUzyT9BDo4fkZ6XMuTGYlMAXEjhtZNouF4%2BcyZXqFa&X-Amz-Signature=94baac40bc5f2edf5e14bce6c959565cd57a7a080e0e6b64657fec47808f17fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EVHG4P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAk2qf0i8A2XXIefMZbMubLiUhU51X2KmFfv2u2A5l%2FwIgfByVc0czpO9ALbqXlnEU9LrVjXcvlqptowp89N6xXpEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVMiatj3JvzOg003ircAwLWktKDXwjTj2clG9Oda4AApYMKSGYXK6rYEHwLtiHMOlPRF5mBz22TbgM%2FrC9bMLVKKOTiumzSxV7Set5lhEn7KaWqqhEmaQ4GuzrpmLQ77%2Fn4n3fR8gvLvhGAo1Fii4egKLNPHzHyJz5bUtqmqQVpfNTg3Z68XtgVohc0PmTSqUA8BimrQSCryVCmeCpABx0cvoYYVUge7JF%2FrnVT8MyMadRVm0n1Z6LZm6mBDthhI54tivKxecO9HGcE6ybxCIVr7W703cyr%2Fj4HQoIZf7FAo2hxrTm7OOVG52eFb7oxAst1qI9U2iohXANW7uDr4dl5T7pgtpfXR%2FjBG3aERm3ysddbm5Jv7%2BC1AwcSCchibNjSVLUBquoO8PTZ3lNVXiMWAJUn%2B1DMpknQ07comdT8p%2F6dT5qNKsuYrFBE0g1apqcuK%2BEGRFQLGr6uftJs7m8INjO0tYJyVGXWQye0VMcROtCBVV4dMmoLTgOo7i%2BFQY0c%2BboHZRqBt4m5WB8AxRmMZ0ieDuTCPsVxAdfkwC5BcqfkOGNRWthmamsaa%2F%2B9pqX9cO1u4cPC8hwKfKvXXRYpDJuELTyT84gzTgLBeOQPcgfFOfKErRA%2BzPEpeT%2FpdStQDQaKCCo4e1MjMJSg8cMGOqUB%2B9UUWPk6TgzXyJJacY%2FFha3GrLGLoDwH10wt5EqP7LbXb5hF4N5rOgPWc5E%2BoWRLjjYexW7wzje5zOwQEuDiuqqsJwxCQRwYMg4WEHlj5u49AwkfagxZ5BJKSI7h1CDOl9CzyhQ9GEO3ltjJIoiWXM6XLyixGmAFX5sigiF9CfD4tfsMJ8DUzyT9BDo4fkZ6XMuTGYlMAXEjhtZNouF4%2BcyZXqFa&X-Amz-Signature=a030a65f9f255eb84935df8604edeb274bc22773691b01309f7994ee36c89c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EVHG4P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAk2qf0i8A2XXIefMZbMubLiUhU51X2KmFfv2u2A5l%2FwIgfByVc0czpO9ALbqXlnEU9LrVjXcvlqptowp89N6xXpEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVMiatj3JvzOg003ircAwLWktKDXwjTj2clG9Oda4AApYMKSGYXK6rYEHwLtiHMOlPRF5mBz22TbgM%2FrC9bMLVKKOTiumzSxV7Set5lhEn7KaWqqhEmaQ4GuzrpmLQ77%2Fn4n3fR8gvLvhGAo1Fii4egKLNPHzHyJz5bUtqmqQVpfNTg3Z68XtgVohc0PmTSqUA8BimrQSCryVCmeCpABx0cvoYYVUge7JF%2FrnVT8MyMadRVm0n1Z6LZm6mBDthhI54tivKxecO9HGcE6ybxCIVr7W703cyr%2Fj4HQoIZf7FAo2hxrTm7OOVG52eFb7oxAst1qI9U2iohXANW7uDr4dl5T7pgtpfXR%2FjBG3aERm3ysddbm5Jv7%2BC1AwcSCchibNjSVLUBquoO8PTZ3lNVXiMWAJUn%2B1DMpknQ07comdT8p%2F6dT5qNKsuYrFBE0g1apqcuK%2BEGRFQLGr6uftJs7m8INjO0tYJyVGXWQye0VMcROtCBVV4dMmoLTgOo7i%2BFQY0c%2BboHZRqBt4m5WB8AxRmMZ0ieDuTCPsVxAdfkwC5BcqfkOGNRWthmamsaa%2F%2B9pqX9cO1u4cPC8hwKfKvXXRYpDJuELTyT84gzTgLBeOQPcgfFOfKErRA%2BzPEpeT%2FpdStQDQaKCCo4e1MjMJSg8cMGOqUB%2B9UUWPk6TgzXyJJacY%2FFha3GrLGLoDwH10wt5EqP7LbXb5hF4N5rOgPWc5E%2BoWRLjjYexW7wzje5zOwQEuDiuqqsJwxCQRwYMg4WEHlj5u49AwkfagxZ5BJKSI7h1CDOl9CzyhQ9GEO3ltjJIoiWXM6XLyixGmAFX5sigiF9CfD4tfsMJ8DUzyT9BDo4fkZ6XMuTGYlMAXEjhtZNouF4%2BcyZXqFa&X-Amz-Signature=81ef05866519291528019cd885bd2a6d4a0c46d9563c035cdb92a8c963a3d74e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZE2MJJ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOLlo70VOfHQq42iznlbDYaIZcIvqgGGVqkCo%2Fozc26gIgUFbEMv%2BnnXvkFtMyVCv3ZEj1kqn79TfTSot6raq74%2BsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQr4VIsRpGf8FtitircAxjKfq6SN8A%2FOq8BDfoyeQ7TBOSkLV0ZgSw6wwXwdU4mklQvAHaftBrAybLnDk7dUyLLvu1DIosQ%2FshUNirJZsbW998%2FC%2FSQDuvKbgd25SM4%2FNsoDzRPCvd0nCKm7XodJRIKy5c%2FS5FeERhIlZxRrE%2FIJTBqjmTFvOSPJh%2BM25cZeBY6juW3u6WWdHX%2BbTJ%2Bfddl0v5Hx2v55U8tYjysgcuSmdqqR%2FZl4SBfHNQgv3oN5Xho9Cqj7hDK97ezteXKVWDPjikZPjrmZm%2F3EuJzd840X0EcqmAO2U%2B5Y4%2BaqNYik7XaZ8Du3GR9xeNJGJ86rZ0F4tHl6ztAausCLTiNLGoC%2B4WOhsK4zBSiNGReXtf%2FQ3XV%2BJIppBFokgMdM3H6Y5zSvItbTEUxA6gjKhE2IhYkHgFZlc%2FZH03H6tz%2F3Hj6tBM1KoAASsiooXfrA%2FGsFRVW%2FBPAqij2LMKSDcD6Xk%2BcjbaoQVEhzAhgvHWOXbuhRQR0qXhqOiv4Vx2hL1IEdiSEBVlgTpn1hhr5G7Y764YbvRh8g6nT7FwdUEEFEMz5Fp6WOOHK5dO2HetcsW7MVAMcbQtWtGtOHVfBiVOjh10li75x1qlPCg3TUB2uxdEoh2PQK2CzB9L2HjaRMKaX8cMGOqUBCHr6gutBkPoH378boH5j78lhG8uUarMGOJWB%2Fv%2BkmbqRR9J5eXAMCEQUT6YcDHnt5t9mOFKgwPOgPIxiXMQqVqeZQjuvCpYCQWnY%2BXfmxwPVEzlwW748cyGThT%2FioHksi7hzGZR%2FY7N5hEUU9i0A0jSSQdipcpO6eAm6%2Byh%2BGECt57BxotU0IrbnG6dc9Ufms27W7EAgF1NXnJw9lwlEMzUCgOj3&X-Amz-Signature=7fcd5b410b7609f8d14c27cdaabbc3a0e3656b9999b36d576f9767a9168d20b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTV5ZDGC%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWuH5GsyKiD7yda2VoDXT7bZjj3Sz6jTzF5V8B12IA%2FgIhAPN9VfI5TM8mBYwRZ%2BDYHVNwWlmjuih2eM2hiaFMeZyLKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxz46Xj1yFqJzS4gjEq3APaYOZSs%2FoEuO7iGlHkrL49Oy8f0N145dRHNP1T32U0kQVhcSAWRbKQ3HXk%2BXRHx%2FHqJqsk0dgYYqqTISN9zJ2E%2BHvnDEHaOPUhgBweuzY8siV4Zd0f58wI6g%2FmsL3oOxcuLMuIN9AZ2olzcxEq5SGtWLLBKMRyY6lkmvAC4yN83icbfVSXux0E0C%2F39nbhIQX3BXgogUB6Piom2E%2Bf%2BH1IgWyx4mfg3alKmYZHPG3VAQ4SJda21kDvoBC9JZkHHAI%2FaYgfQd1XvdcKEa6sjsJm7W2rDluTsF3K94rAs7QEU0KqMMn9xOgD8DgMvT%2FGudG%2BOpF3GoHwxkE5Nugl7ptWbXPiGiHxafJ51NFlhj2BGECDSmkSbzdECXcSVTJfwN6WZBefOdntKTleeIOlRWVBfhSBgfsW5saLDAIFOWEEgcD46KIW0AmAiYePDLoKt57dSJBTnpZJSymAahqpFN8flBsD%2F2izza1z13PcSAm7JaojcoATIAeNMMCKdm%2B%2BjRCkKPy6wl8ivQwx7dW8vFdC8vAwsP2iUb61m%2Fl8JoTPk3Mm5m3KNicF7JxYRvvvj6tZ9QZZBirvSUURBRitO1TiZxHuENl4%2Ff1AbLRtY7HDrhaiWT1nQL0A%2BD%2FxjzCRl%2FHDBjqkAcO5RLUZw6WtrUbRt4IraQ37vbGUXuZp9O0BuFAu1JEA%2BcDMWvDGKuaKvmch8hm2EiEgt2Z%2FjWyMnCB6NRozKqG0SMHT66i5L96kcoYJlQ32uFBncceTjsMyFFQ7UcNL%2FLnH5s%2FORDBtey8%2FnPoq%2Bha0NGljevKmv6ZiSX2aVzfiTO9rdW3sZnBL%2FqQjSFfKsOZ60s%2BOeGQvdog3nOPnFOusS%2BKw&X-Amz-Signature=b525b0ebbea03d08760d7a1e980cd908a4b7506f31dd7b365ea6db824586ed03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6EVHG4P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAk2qf0i8A2XXIefMZbMubLiUhU51X2KmFfv2u2A5l%2FwIgfByVc0czpO9ALbqXlnEU9LrVjXcvlqptowp89N6xXpEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVMiatj3JvzOg003ircAwLWktKDXwjTj2clG9Oda4AApYMKSGYXK6rYEHwLtiHMOlPRF5mBz22TbgM%2FrC9bMLVKKOTiumzSxV7Set5lhEn7KaWqqhEmaQ4GuzrpmLQ77%2Fn4n3fR8gvLvhGAo1Fii4egKLNPHzHyJz5bUtqmqQVpfNTg3Z68XtgVohc0PmTSqUA8BimrQSCryVCmeCpABx0cvoYYVUge7JF%2FrnVT8MyMadRVm0n1Z6LZm6mBDthhI54tivKxecO9HGcE6ybxCIVr7W703cyr%2Fj4HQoIZf7FAo2hxrTm7OOVG52eFb7oxAst1qI9U2iohXANW7uDr4dl5T7pgtpfXR%2FjBG3aERm3ysddbm5Jv7%2BC1AwcSCchibNjSVLUBquoO8PTZ3lNVXiMWAJUn%2B1DMpknQ07comdT8p%2F6dT5qNKsuYrFBE0g1apqcuK%2BEGRFQLGr6uftJs7m8INjO0tYJyVGXWQye0VMcROtCBVV4dMmoLTgOo7i%2BFQY0c%2BboHZRqBt4m5WB8AxRmMZ0ieDuTCPsVxAdfkwC5BcqfkOGNRWthmamsaa%2F%2B9pqX9cO1u4cPC8hwKfKvXXRYpDJuELTyT84gzTgLBeOQPcgfFOfKErRA%2BzPEpeT%2FpdStQDQaKCCo4e1MjMJSg8cMGOqUB%2B9UUWPk6TgzXyJJacY%2FFha3GrLGLoDwH10wt5EqP7LbXb5hF4N5rOgPWc5E%2BoWRLjjYexW7wzje5zOwQEuDiuqqsJwxCQRwYMg4WEHlj5u49AwkfagxZ5BJKSI7h1CDOl9CzyhQ9GEO3ltjJIoiWXM6XLyixGmAFX5sigiF9CfD4tfsMJ8DUzyT9BDo4fkZ6XMuTGYlMAXEjhtZNouF4%2BcyZXqFa&X-Amz-Signature=b671c67441679ba0ea4b9308505c104540af50c2069a53c749d802b2e0ff167c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
