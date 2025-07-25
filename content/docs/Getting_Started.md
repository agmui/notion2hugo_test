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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPF7PXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAbUTj4QJR0PZ41r%2BPGCgMXe%2BooXnJ5v2cW2B%2BtMRQXOAiB8JqaaDEYErWSFXQ7tMbTbERuklZv63cExQIEmRMVQ7Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2FZLgqBZrPQ6hDg69KtwDwMM0HPAKWcs6PVhMK3J8YNQhnG8zSxAxMQRzbMvRuAs547DZXlx1mNBWjMCDWsw27lEARHWLiSElg6r78OAk25kcXkN5RxVrYOgrahywsSgEzdjPvr6Gm%2FGmbZBT7rabPYMcabaYtmncx7JP2BtNM6hiSp6TkSHQMzytb7bE2FGMa48J7IvoSqnb5n%2FkeWICBQfMcxzy2u4w4%2BvtxieCwRFoRxvedg%2FU4ga7Q%2BpsedPmJAexzLTd1hB04wSTFHdNVUM68%2B6mnaa0nhQ6Vs3%2FHUT9TyPu%2B0mu9tRXZsrAmV%2FnNSZZA01xBHYuA9CEFWP01dM5qjgj55eUbWJ4TiJaQ7GOP1%2F6shOcNdx22QfgvlufHlDAVSzWhCWFa%2F9mqfSdH9oMlt2Pxyzbd1YwoFXlBpg2UplGL9eY7WVixhhMvcqtJbrYl80LFmE0O0gWm4ZF7rtVOXWtv83H%2BYLXtu5HZDidQCQUtG0zq5Jmot6zo2oct5tfQmiyoUKlHyCc2m101DFVvB%2FP5jXAcCBXXclpz%2FhVEHeWuIZ95Pv94lTV23Adb4NgV5m2qq3trPNjdPbHkcXVcocHqZy3ykEJz8E7NUEoLavldPp6XKnU%2FVIfcLVUMRfjcpMc6zTC4ikwkviLxAY6pgEGHc9aBbP7ll%2FUa5Z5TmD93MB011wEp4CehHW0%2FRIrKlfi4zjs6ItDQ84S6RcyNk7a6R2UfUqAucOcpIxhr9irNWuw7tMgRJx7rPGhrhCHcHYjNhos30jR8eU3NuQf%2FKQcwaaJlB2UP1ozqR3hJwN4aLnXXeUHMJcM67Ot%2FQSl9uQQTpFsAkyv9FLijq0TXojoQZghugDpwb8HuIO6kDszQFPY%2B8YJ&X-Amz-Signature=8b64cd5477f7cd7708c32b296c4256fd5a7425d696220001cb7454bf442eeef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPF7PXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAbUTj4QJR0PZ41r%2BPGCgMXe%2BooXnJ5v2cW2B%2BtMRQXOAiB8JqaaDEYErWSFXQ7tMbTbERuklZv63cExQIEmRMVQ7Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2FZLgqBZrPQ6hDg69KtwDwMM0HPAKWcs6PVhMK3J8YNQhnG8zSxAxMQRzbMvRuAs547DZXlx1mNBWjMCDWsw27lEARHWLiSElg6r78OAk25kcXkN5RxVrYOgrahywsSgEzdjPvr6Gm%2FGmbZBT7rabPYMcabaYtmncx7JP2BtNM6hiSp6TkSHQMzytb7bE2FGMa48J7IvoSqnb5n%2FkeWICBQfMcxzy2u4w4%2BvtxieCwRFoRxvedg%2FU4ga7Q%2BpsedPmJAexzLTd1hB04wSTFHdNVUM68%2B6mnaa0nhQ6Vs3%2FHUT9TyPu%2B0mu9tRXZsrAmV%2FnNSZZA01xBHYuA9CEFWP01dM5qjgj55eUbWJ4TiJaQ7GOP1%2F6shOcNdx22QfgvlufHlDAVSzWhCWFa%2F9mqfSdH9oMlt2Pxyzbd1YwoFXlBpg2UplGL9eY7WVixhhMvcqtJbrYl80LFmE0O0gWm4ZF7rtVOXWtv83H%2BYLXtu5HZDidQCQUtG0zq5Jmot6zo2oct5tfQmiyoUKlHyCc2m101DFVvB%2FP5jXAcCBXXclpz%2FhVEHeWuIZ95Pv94lTV23Adb4NgV5m2qq3trPNjdPbHkcXVcocHqZy3ykEJz8E7NUEoLavldPp6XKnU%2FVIfcLVUMRfjcpMc6zTC4ikwkviLxAY6pgEGHc9aBbP7ll%2FUa5Z5TmD93MB011wEp4CehHW0%2FRIrKlfi4zjs6ItDQ84S6RcyNk7a6R2UfUqAucOcpIxhr9irNWuw7tMgRJx7rPGhrhCHcHYjNhos30jR8eU3NuQf%2FKQcwaaJlB2UP1ozqR3hJwN4aLnXXeUHMJcM67Ot%2FQSl9uQQTpFsAkyv9FLijq0TXojoQZghugDpwb8HuIO6kDszQFPY%2B8YJ&X-Amz-Signature=de887e32e54f4f75af3ac1ad643dcf3a31d93466c8c6bd3bfe70561957ad011f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPF7PXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAbUTj4QJR0PZ41r%2BPGCgMXe%2BooXnJ5v2cW2B%2BtMRQXOAiB8JqaaDEYErWSFXQ7tMbTbERuklZv63cExQIEmRMVQ7Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2FZLgqBZrPQ6hDg69KtwDwMM0HPAKWcs6PVhMK3J8YNQhnG8zSxAxMQRzbMvRuAs547DZXlx1mNBWjMCDWsw27lEARHWLiSElg6r78OAk25kcXkN5RxVrYOgrahywsSgEzdjPvr6Gm%2FGmbZBT7rabPYMcabaYtmncx7JP2BtNM6hiSp6TkSHQMzytb7bE2FGMa48J7IvoSqnb5n%2FkeWICBQfMcxzy2u4w4%2BvtxieCwRFoRxvedg%2FU4ga7Q%2BpsedPmJAexzLTd1hB04wSTFHdNVUM68%2B6mnaa0nhQ6Vs3%2FHUT9TyPu%2B0mu9tRXZsrAmV%2FnNSZZA01xBHYuA9CEFWP01dM5qjgj55eUbWJ4TiJaQ7GOP1%2F6shOcNdx22QfgvlufHlDAVSzWhCWFa%2F9mqfSdH9oMlt2Pxyzbd1YwoFXlBpg2UplGL9eY7WVixhhMvcqtJbrYl80LFmE0O0gWm4ZF7rtVOXWtv83H%2BYLXtu5HZDidQCQUtG0zq5Jmot6zo2oct5tfQmiyoUKlHyCc2m101DFVvB%2FP5jXAcCBXXclpz%2FhVEHeWuIZ95Pv94lTV23Adb4NgV5m2qq3trPNjdPbHkcXVcocHqZy3ykEJz8E7NUEoLavldPp6XKnU%2FVIfcLVUMRfjcpMc6zTC4ikwkviLxAY6pgEGHc9aBbP7ll%2FUa5Z5TmD93MB011wEp4CehHW0%2FRIrKlfi4zjs6ItDQ84S6RcyNk7a6R2UfUqAucOcpIxhr9irNWuw7tMgRJx7rPGhrhCHcHYjNhos30jR8eU3NuQf%2FKQcwaaJlB2UP1ozqR3hJwN4aLnXXeUHMJcM67Ot%2FQSl9uQQTpFsAkyv9FLijq0TXojoQZghugDpwb8HuIO6kDszQFPY%2B8YJ&X-Amz-Signature=d2475d48887a0d21e7e2a5b15719c5b0b3d42e88a3819b789b0d115dd15b7c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4SRR3YM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGk%2F2ZtXOW7%2B2u0%2FkcQDHS15YzfAKDa4zJb95F%2BuuDXdAiEA8FecB0kEPV7hn70C4GKQu4K%2F99peYyi3DIevQIxuUVsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDaOd9YOyCa9L4Ho7SrcA7fvphTeLlYZ8M4X3AhPQw78Z1QbHKDbxBvpxOvmha4ias2v%2Fj3JEV27qwC9jaXh%2BoKMJZKOz5lqxGVAKmWG5Cwqh7vUhNJ%2F2huqfGlyOp7wZ4TPDYS4cYgwoHW7%2B%2BO0WWN6avqNEYS6pby9FHMESiPeGdxv5eWzqc7WbhEIiP4XQAF%2BJKdsaFzcDUNJxMqKLoc%2Fj16pANCpLYssSFp%2B5uYsHhqJi6f%2B9%2FlH5IqMqiE%2FZTWjDBW9ElqCp9RB%2FiYW3fgbVagT7VilidJrpw%2FfE9tkupeivk9Cf7HdffSCPu3FvwNwqEjc20k%2BJ%2BjXD4aA9Q1QTQggiJkyZQx6grCIGuPzp%2FoIXaikgSaZvhXwjDYHzWmuBXqKaNru2vLElfJ9dwbjILF4RWruBjMpkrbQLJ1lVn6XXrSy%2FpjmNkt0vXMzZNutapsQBnmsmZvbEwmnKc2DR1NLwazilAEGH%2FhhgIn7lRvS0vbfh9YX5jC01gmNQh4YmIFE8QLY9llmL66mDWBezBOpXaG5VhHXM9ekN24m3OE3XYLoePE06oXZ4785QY1M%2Bp9ClhCE7dYz8yCS2t70dzoCvzWy7P07tT0Lo6Zsy12dqqyAE6CAL0CxOseFquhSyju550jiYPtrMMT3i8QGOqUBe1C4qekjAsAsWFGkcK4dolDxiurKx0vQn%2FDA61Y238x68FXlv%2B8yNg%2BIhXPIvRC7NKZw8eLpDUXvslic7oTBd%2F1KNg619pFjgIfdDCp8bt%2Bx%2BodI%2B9BI1GZT1Yw3S6%2BQSw8WnwqHOUQDGkXTzc%2FfJOSh5uzeylkEdL73%2BnLL3bbs%2FISHVXj5Vej40Ii2%2Bfw3vO3yaEHI%2FP60DmiwU5qyoe%2FHPNnX&X-Amz-Signature=31dddaedfea7892e5dca5679c5f8012ad5dbacc2324fa23f5c83e5b7063df281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7D4X4YQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIF2LIZttUGVg%2BgVKvXPXCHCKtyUa7ZuykOs1NNssYr4OAiBf4%2B8%2BLkcjplgMPl0eO7d6LstFAZ7dqZ%2B%2FPG8LN1%2Bm%2BSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMsId8r1PBqcl9YPVnKtwD7tI97Gdp6V0B5GHQedEyh6QmMqLfmdH59SxWdNbK2Qqt9Edf1v0NE0%2BPKEx8rlCkUlBA2N5VnRLWi7snJzuhRpbb2i91A08wZs826cV%2BRWVdd6mvZAJaRopaT1g%2B0xTI4pwlZ3xzW5SWUAwDSQjwOmga8EK%2Bhl%2BcdAaWkK5%2Bx2fhSsfQDpk%2FS%2BMS3yVHJ8IJ7BfDSmnOkbNsHn8eCdemobsmMmSfN9D2z43CBMLPAXZe3IqNs6%2FCxlbTKHOrukAAhoGW3TPCsSPt8zHIGFxzapwX%2FLthATXeDBQZ%2FNcTpWxRCf0D7CviFQWyh%2B4LtaEmHRnqTnKTJhL80nwkxydkSSKEary9Ayxv%2BT2UTKK%2F8CdrxYXPXHGLCLFnfcJhOd1GBEOlf4jTQHZHAOo4vn2ykjcXTwWyY2s7YpNFA5vu5pTaOgJP1iJ7g7pccYd5Pp7wx9aDajV%2FvFXOaoV7abZ6x0HKVeB30L9i13x2tESwX3FzBCjHbck7bwcdyJcZ6d3KaMtWofX2Tco4YDlyccb1d1yYr3JvKyv5wV%2BzU%2BRQaCunbCjeu0py8qq1QbVe%2B%2BuRRCb33qxGbt0NifqLzACTH1n45oqUnaLce3EUZkabmUp9fyx9Pl%2B0bpBIw6ow0PeLxAY6pgG%2FuCQ5FytgfxBITInjIWfL1vMoVFEyDI51DWnMuWj8icSMjL7VPWyMQfK90OscPIUEE7rbcM9xugD%2FFp5BbDIsgAxgm32MEWdVWD%2B30sKwod2vaY%2BqJD4W%2BPG7VwVoJH3n0GbvUcAcVpsg8X4YC553debomwxoQZ5Wad3%2Ff6LudskQ6aboEh7nVtL4T3awyOu7j8X5xivd%2F0jS%2BOpyk5%2FnYy8aZjnG&X-Amz-Signature=b6f749316400078ab80f458a48756a38b15b2ac0ae4fa9ae26644216601e04d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPF7PXA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAbUTj4QJR0PZ41r%2BPGCgMXe%2BooXnJ5v2cW2B%2BtMRQXOAiB8JqaaDEYErWSFXQ7tMbTbERuklZv63cExQIEmRMVQ7Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM%2FZLgqBZrPQ6hDg69KtwDwMM0HPAKWcs6PVhMK3J8YNQhnG8zSxAxMQRzbMvRuAs547DZXlx1mNBWjMCDWsw27lEARHWLiSElg6r78OAk25kcXkN5RxVrYOgrahywsSgEzdjPvr6Gm%2FGmbZBT7rabPYMcabaYtmncx7JP2BtNM6hiSp6TkSHQMzytb7bE2FGMa48J7IvoSqnb5n%2FkeWICBQfMcxzy2u4w4%2BvtxieCwRFoRxvedg%2FU4ga7Q%2BpsedPmJAexzLTd1hB04wSTFHdNVUM68%2B6mnaa0nhQ6Vs3%2FHUT9TyPu%2B0mu9tRXZsrAmV%2FnNSZZA01xBHYuA9CEFWP01dM5qjgj55eUbWJ4TiJaQ7GOP1%2F6shOcNdx22QfgvlufHlDAVSzWhCWFa%2F9mqfSdH9oMlt2Pxyzbd1YwoFXlBpg2UplGL9eY7WVixhhMvcqtJbrYl80LFmE0O0gWm4ZF7rtVOXWtv83H%2BYLXtu5HZDidQCQUtG0zq5Jmot6zo2oct5tfQmiyoUKlHyCc2m101DFVvB%2FP5jXAcCBXXclpz%2FhVEHeWuIZ95Pv94lTV23Adb4NgV5m2qq3trPNjdPbHkcXVcocHqZy3ykEJz8E7NUEoLavldPp6XKnU%2FVIfcLVUMRfjcpMc6zTC4ikwkviLxAY6pgEGHc9aBbP7ll%2FUa5Z5TmD93MB011wEp4CehHW0%2FRIrKlfi4zjs6ItDQ84S6RcyNk7a6R2UfUqAucOcpIxhr9irNWuw7tMgRJx7rPGhrhCHcHYjNhos30jR8eU3NuQf%2FKQcwaaJlB2UP1ozqR3hJwN4aLnXXeUHMJcM67Ot%2FQSl9uQQTpFsAkyv9FLijq0TXojoQZghugDpwb8HuIO6kDszQFPY%2B8YJ&X-Amz-Signature=d7bb7593a1b8a5bb3260def3e6efffaf2c695e27f2fe4576b7e06bf97d6b326f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
