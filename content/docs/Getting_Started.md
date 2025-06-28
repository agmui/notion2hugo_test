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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQLC6K5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwkDrwNuB7DOkA%2ByYwkEq2cJOBX9xS85HQwkaUtmlJeAiEApBq%2BnQqHsEtNXqv4Yw5kNTCpKkTbjS0ut57xDi3MX2IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE56QwzacOd50MgBrircA16vrIEuiNzf1RgxtzjFv9um%2FqWkKXqoGdK%2BM8IowwrH0gE4nl6DStamtjG7yy%2Btqb6IhF%2BWxe7Bfu1G717xXgMJrzZMBirTuokBmMzVhITidTfwqHTfs45feM%2Biiq3LvS3ZMA79Ld0T8hZxwjdYdvH72FhARfWr3uT6Ywen68u%2Bp3xpI7vFHmi8cHyuJIXRhKgEpgYT4tkPtIbNm40ENhnSUtqqtLp2I%2FqSq6VWZuKkqWOcCGrqWxi3D1N71TciEftHXOm89kaEbnOe06ASxcwCZ6Mb83YZnh35EXKbKdZegz7dc8vyWCIWxAGywpSM4m2d%2B0Fge2X58tn0ewWy7t4Lb%2ByH34qq7RaPoe0rXct%2BHbdn7Q1JvV6r3xQlsJIIYeAa%2BUEyT%2F%2BF4j27867eCaSP5aOXP8IO5aN9ZSuqafhTnWXkWTTxACqRNPpyI8f6MkSIjURId7XcFweDRbTiuYe2QL96KV4%2Bl9AZEV4nMG8VmWCJv%2F4Ot6Rqi6cebh2%2BFmQjWjjMWvvBg1T92LUMOeXFnOfgxGIa0G84ulnBK52NIdl8tn5SgvcKdjgHs2cakGt9VBR6Kskdq3SxPyaj02J%2FPpQ7GVPVtHgq6gdYuCNkqmxiNHiH%2F1jDgLT2MJ7K%2FsIGOqUBEo9Av6WwiHHIOU84lM3hzs6xdRudRKMr9x%2FQc23A8PNJfYohyAi56STnNsBsKvDAPfs34k6sq2gJYxEJnNKVdJgAe4ugRSbbnXdwUYAbQfa3KubmQTZPtgfjlWn4Yq7y4l2Nd5ecKKVc0VIZm%2B6Scg9PqmiGedzxNMBaASrxKIQnHJtn2%2BFI20rnqaT9DFYovQwDxxhdAWwCiVVZQQ7cmpr9RQ2W&X-Amz-Signature=4e3b5e8638d4f9d7b5c9b17ed903fb3a215f956a2e421f5fd336df1df521457e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQLC6K5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwkDrwNuB7DOkA%2ByYwkEq2cJOBX9xS85HQwkaUtmlJeAiEApBq%2BnQqHsEtNXqv4Yw5kNTCpKkTbjS0ut57xDi3MX2IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE56QwzacOd50MgBrircA16vrIEuiNzf1RgxtzjFv9um%2FqWkKXqoGdK%2BM8IowwrH0gE4nl6DStamtjG7yy%2Btqb6IhF%2BWxe7Bfu1G717xXgMJrzZMBirTuokBmMzVhITidTfwqHTfs45feM%2Biiq3LvS3ZMA79Ld0T8hZxwjdYdvH72FhARfWr3uT6Ywen68u%2Bp3xpI7vFHmi8cHyuJIXRhKgEpgYT4tkPtIbNm40ENhnSUtqqtLp2I%2FqSq6VWZuKkqWOcCGrqWxi3D1N71TciEftHXOm89kaEbnOe06ASxcwCZ6Mb83YZnh35EXKbKdZegz7dc8vyWCIWxAGywpSM4m2d%2B0Fge2X58tn0ewWy7t4Lb%2ByH34qq7RaPoe0rXct%2BHbdn7Q1JvV6r3xQlsJIIYeAa%2BUEyT%2F%2BF4j27867eCaSP5aOXP8IO5aN9ZSuqafhTnWXkWTTxACqRNPpyI8f6MkSIjURId7XcFweDRbTiuYe2QL96KV4%2Bl9AZEV4nMG8VmWCJv%2F4Ot6Rqi6cebh2%2BFmQjWjjMWvvBg1T92LUMOeXFnOfgxGIa0G84ulnBK52NIdl8tn5SgvcKdjgHs2cakGt9VBR6Kskdq3SxPyaj02J%2FPpQ7GVPVtHgq6gdYuCNkqmxiNHiH%2F1jDgLT2MJ7K%2FsIGOqUBEo9Av6WwiHHIOU84lM3hzs6xdRudRKMr9x%2FQc23A8PNJfYohyAi56STnNsBsKvDAPfs34k6sq2gJYxEJnNKVdJgAe4ugRSbbnXdwUYAbQfa3KubmQTZPtgfjlWn4Yq7y4l2Nd5ecKKVc0VIZm%2B6Scg9PqmiGedzxNMBaASrxKIQnHJtn2%2BFI20rnqaT9DFYovQwDxxhdAWwCiVVZQQ7cmpr9RQ2W&X-Amz-Signature=e50f103c926c0291e3231f5d142a53d513ee83fc4feba91ca9f021d6c235544b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQLC6K5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwkDrwNuB7DOkA%2ByYwkEq2cJOBX9xS85HQwkaUtmlJeAiEApBq%2BnQqHsEtNXqv4Yw5kNTCpKkTbjS0ut57xDi3MX2IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE56QwzacOd50MgBrircA16vrIEuiNzf1RgxtzjFv9um%2FqWkKXqoGdK%2BM8IowwrH0gE4nl6DStamtjG7yy%2Btqb6IhF%2BWxe7Bfu1G717xXgMJrzZMBirTuokBmMzVhITidTfwqHTfs45feM%2Biiq3LvS3ZMA79Ld0T8hZxwjdYdvH72FhARfWr3uT6Ywen68u%2Bp3xpI7vFHmi8cHyuJIXRhKgEpgYT4tkPtIbNm40ENhnSUtqqtLp2I%2FqSq6VWZuKkqWOcCGrqWxi3D1N71TciEftHXOm89kaEbnOe06ASxcwCZ6Mb83YZnh35EXKbKdZegz7dc8vyWCIWxAGywpSM4m2d%2B0Fge2X58tn0ewWy7t4Lb%2ByH34qq7RaPoe0rXct%2BHbdn7Q1JvV6r3xQlsJIIYeAa%2BUEyT%2F%2BF4j27867eCaSP5aOXP8IO5aN9ZSuqafhTnWXkWTTxACqRNPpyI8f6MkSIjURId7XcFweDRbTiuYe2QL96KV4%2Bl9AZEV4nMG8VmWCJv%2F4Ot6Rqi6cebh2%2BFmQjWjjMWvvBg1T92LUMOeXFnOfgxGIa0G84ulnBK52NIdl8tn5SgvcKdjgHs2cakGt9VBR6Kskdq3SxPyaj02J%2FPpQ7GVPVtHgq6gdYuCNkqmxiNHiH%2F1jDgLT2MJ7K%2FsIGOqUBEo9Av6WwiHHIOU84lM3hzs6xdRudRKMr9x%2FQc23A8PNJfYohyAi56STnNsBsKvDAPfs34k6sq2gJYxEJnNKVdJgAe4ugRSbbnXdwUYAbQfa3KubmQTZPtgfjlWn4Yq7y4l2Nd5ecKKVc0VIZm%2B6Scg9PqmiGedzxNMBaASrxKIQnHJtn2%2BFI20rnqaT9DFYovQwDxxhdAWwCiVVZQQ7cmpr9RQ2W&X-Amz-Signature=bfff7d9dfba30ec58cc7a65bdafd2f529b17f64a2bd8579aeec7e807cc0308c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WPG2MQB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNJSo7QB7HnMM%2F%2B27LIVw2%2BSTc2uVM6OzyA1KOcWeY%2FAiAcFAYvBlR6GEOxOHB5Z%2FGyoGcHFJl%2F716l8bXI3XhgkyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYxpi4%2FyhP%2FaJKgdKtwDjgiPaTquX5f3Jo3OWYQhS3XtbzsshD5lqCDf8T7PUGI%2F2%2FWI5rDpfHmApjEArHqR5KlAAjz%2Fzi%2BempFW%2BxSgoQAt%2FvLegfxR7uQkw6AK%2F8AQsEUrx5utUQP9eQxY0IuNBsdiOex%2FQWXJ4Fa7wIGYm%2Bsio91gU3J6T0X9%2BcM710Sl3DBAQ6xVs9aREWsWLF7K%2F77Bco7XrI06u3MaIdQrhqMao6NTtD1cTK61X90yeke6kGO2BXrAknvlDcg8NNhkzLxnKVKsfNeWLqHVoaVbZsNpn%2F5OCbPpO68t3tS%2BFfsnRM3rW5IKptCfcpxPrVCKnxya7O%2F1QiJYt7LRokDNmqePjP6SYxYkh2fDCUKTRZH2q%2FYanuHExAaRam9gdyu6wpGwa1UxOWDnypeERFvgkgcMEl3Zsk%2FJHkxtLS0be0loa9c1tZAKwTKgq6i6EF0%2B6UCIOxTY%2BACr20KS5erya3dUhUBzUDU7deF9g8HIOuUP2pJHjc0aPx6USVqdYD5lms0n9KdY5Vl4LrQs1130JrzLtSf%2BjVJt%2FtyCFOomhlO7poNatBoT%2FH8lVIN1a3%2FqPg1Sq6FFAMok9Qct5Bk3o7Ax0L5nUoW1JIlJNPikZR%2BCkzHa%2FlDP8mtCUJgwksr%2BwgY6pgFfUPAUY9GgWs1hpF3xtBfUrxyqjg72P5FVXUOmfNFA8P55wA%2FYNyK1rQfKkvCGlFGCZ79ho%2B1cbUGzQLg18J6GhhNCH5TTY6iF20J%2BT45sRIWgd%2FqmbxVWh7z0KVX%2BPu%2BgYEWvCraJcijSwnsQbelQBKHKK8RcLlTXj8ERc2h9gzcMMiR8HdZGY1Tmz5nA7QCG2Ady0FvearJw%2FHCKyYKbQd8mSH0G&X-Amz-Signature=6fe83f0842ccc8f360455e9cc8f4ecff28dd500de0220abe0d4cddb540265079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2SOEDXP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAiPBCrPpHHccENLDKN6qYR0ZC72cNCzF67EGjYpawHwIgWAxzlrHaataZNQ64n7SvbT6nQiiY6D2RuoAM9EH26EQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeQ%2B2%2BGgS1wboI0VircA2VNZV4ComgrNoS1BTpKeklZz25WV6IAHE1CxbsDx1QqAT3qxTI3JOVVgcZw6zGzxvn%2BFZXFLy4%2F0v6PEjKjLW9HdlOR6amg1WTB2aNCHWDZwnyFAdGunBG67KusDREdMsEkPpjF3ZrqauQtsfg4fb8DZDu37Od4kkMwjq%2BH1Qele9VEtLR0mhSPEQ4QOqIjLhRcmWNb0tCMreTXSUYHGdqXvRI6FTQHVAnwmL9T%2B9KLz%2BMTMIrwaUnSN0qjcQKimw%2BYVh6XuvRZnNfXLyPCF4a78TLAeyKsdr5A9IouCcKpeNMcLK4uMGa5PaLcVJoCbylbE52IQeqbMUchd9UuA16Gg7F3QLsLTuSDy8wPAeaac32a0YidaxuOitYDA1%2Fp%2FmUjeJuD%2BhxPuwO13rSqFrps62qMZd%2FhIFdl5A8gOgKEnzB%2Fdhzx1UtMf3MZZPyzJuEB%2BAoxCRI64LkJFD7znBXEgyp8kJJRstdKxxRJgwIw%2FIelpL%2FB2qViSGy8AsneC49tLs8fBv2St3yPrH9IAPM8bHTXQIXWCB0wTdRY1VUHDiTsYWTP6VNK%2F5FE7cbZeipCTUajfDpEuWUWLu0%2B5dQRGepdYYaI7T%2FF0gD2Lvw7DDMjtcsMq7vm9qHmMKHK%2FsIGOqUBu2JfUCkZENq6q15otQbqkg80TP41CD0WGoyNI6oHCThjy0rTfTbDq7iQdjNO9shqiFgxnFkajWQTqD4BtrPg75GBVtgeGJLQ8PQU%2FpllKveEN%2FdJqZDTzYHjToreXJvHI%2Fd4%2FrQrbc6JsO2NjcK5MqOeX%2BBugm90xEh3Xp4ANLp1nq7EwhNqWB2J6QqxkJr3QUxuGFbaSlMD4ZAZGEwgfYtvOdrp&X-Amz-Signature=341cdf3d1b10ff05fe0870cddbc6bda1c1fc34648f513960cc39de23fd102bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQLC6K5%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwkDrwNuB7DOkA%2ByYwkEq2cJOBX9xS85HQwkaUtmlJeAiEApBq%2BnQqHsEtNXqv4Yw5kNTCpKkTbjS0ut57xDi3MX2IqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE56QwzacOd50MgBrircA16vrIEuiNzf1RgxtzjFv9um%2FqWkKXqoGdK%2BM8IowwrH0gE4nl6DStamtjG7yy%2Btqb6IhF%2BWxe7Bfu1G717xXgMJrzZMBirTuokBmMzVhITidTfwqHTfs45feM%2Biiq3LvS3ZMA79Ld0T8hZxwjdYdvH72FhARfWr3uT6Ywen68u%2Bp3xpI7vFHmi8cHyuJIXRhKgEpgYT4tkPtIbNm40ENhnSUtqqtLp2I%2FqSq6VWZuKkqWOcCGrqWxi3D1N71TciEftHXOm89kaEbnOe06ASxcwCZ6Mb83YZnh35EXKbKdZegz7dc8vyWCIWxAGywpSM4m2d%2B0Fge2X58tn0ewWy7t4Lb%2ByH34qq7RaPoe0rXct%2BHbdn7Q1JvV6r3xQlsJIIYeAa%2BUEyT%2F%2BF4j27867eCaSP5aOXP8IO5aN9ZSuqafhTnWXkWTTxACqRNPpyI8f6MkSIjURId7XcFweDRbTiuYe2QL96KV4%2Bl9AZEV4nMG8VmWCJv%2F4Ot6Rqi6cebh2%2BFmQjWjjMWvvBg1T92LUMOeXFnOfgxGIa0G84ulnBK52NIdl8tn5SgvcKdjgHs2cakGt9VBR6Kskdq3SxPyaj02J%2FPpQ7GVPVtHgq6gdYuCNkqmxiNHiH%2F1jDgLT2MJ7K%2FsIGOqUBEo9Av6WwiHHIOU84lM3hzs6xdRudRKMr9x%2FQc23A8PNJfYohyAi56STnNsBsKvDAPfs34k6sq2gJYxEJnNKVdJgAe4ugRSbbnXdwUYAbQfa3KubmQTZPtgfjlWn4Yq7y4l2Nd5ecKKVc0VIZm%2B6Scg9PqmiGedzxNMBaASrxKIQnHJtn2%2BFI20rnqaT9DFYovQwDxxhdAWwCiVVZQQ7cmpr9RQ2W&X-Amz-Signature=2243264f89883e086784f25ec233b9443d5c1e7cacae288cdec9e4da5c9af410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
