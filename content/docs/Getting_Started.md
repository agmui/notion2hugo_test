---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANE4KJ5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkjy134t4Iozv%2BzgH9cEZa4N41bEVwQllf3HQWRTVp1gIhAK%2FQCvpF6REKkGr4RIT1rqlRRnNslmxb76X9A2HGcbULKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI3FN%2FEw25gmPwF8Eq3APJrJGHrJ9jK8uOcM7XrJfcScPf2ZwHkY40VzSXdxVAj4M8D0HrrR%2FxZKNMayoT3RJqstwyZLex0iQG3MTv%2BK6seq0bMV%2BOLINGXKhMY%2BfkC8wcZQVaNefa9DFSjg3fBQr47xg92zf8MGdWfKbgzE98uTGdeZgXNIjC2EeX9uxl5oW8EHqjTyOYO8aB5QduiiS4dNJ6n5SzEZFaSllCv0aXC11ES6BxbHLAKEWOVNSH%2Bl0e6mSf5VZOwdu0JYSj38k%2F%2FnW3OtBPXXh5sKPc6CQeqtdpNviChyb0kMcywz%2BADw0Lwk1xdziHb4EBJRGzwTGq3lYQwwSYYwi7E47SedvbUlXyCxxcq0jTNjAq6rQyEn6jrWvibywtd8wo3WS5jxPGyB1huGnXvB%2FR9VdiXcEIfDlKvfojykfZjgGmpN6rrjfh%2FIEm2aG2rGazzmQmBgLIJHlWAWo3HPGrf%2BY%2BEOxKh%2BrtqdU26WpcD9%2BNvpoFR7ccMEuMENFIpUh8RhptpI5Tmv8N4lR4%2BIAC3hl7LPtBLc%2FMg5ESsELKeWZUKAVtt1r8zwWngrkg%2FWmHMfHC93ovv1P9PCRTS3fB3WX%2FGBxenG34RuDz5S2t3vQfvtOthTxEfen4vvGnMQPBJjCikdjNBjqkAZx1Lw3T9XCYiwRUB9NpztDYoroJb34FFin5j34%2BqoqleC1kVw%2BU2Mb4%2BxOHhJy3VvkgfpIk96lFZnLF6c7DLUCzVTkG8mmbkQkfBAS2A6iPCCsSs04VtGXaZz%2FU6ssuwb%2FikyxNBx2BNqtysgIvxdUxppPFdPa6Shb1N%2FJDsD0OARdJhL8GSIq5cFtlNt4lmeXsmRKDWLbm07eKTPae0yvtu0fn&X-Amz-Signature=8252f34398cce1e2eb1ea0d9d0d9fa27418c80914e997dbebac6855dd95e1168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANE4KJ5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkjy134t4Iozv%2BzgH9cEZa4N41bEVwQllf3HQWRTVp1gIhAK%2FQCvpF6REKkGr4RIT1rqlRRnNslmxb76X9A2HGcbULKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI3FN%2FEw25gmPwF8Eq3APJrJGHrJ9jK8uOcM7XrJfcScPf2ZwHkY40VzSXdxVAj4M8D0HrrR%2FxZKNMayoT3RJqstwyZLex0iQG3MTv%2BK6seq0bMV%2BOLINGXKhMY%2BfkC8wcZQVaNefa9DFSjg3fBQr47xg92zf8MGdWfKbgzE98uTGdeZgXNIjC2EeX9uxl5oW8EHqjTyOYO8aB5QduiiS4dNJ6n5SzEZFaSllCv0aXC11ES6BxbHLAKEWOVNSH%2Bl0e6mSf5VZOwdu0JYSj38k%2F%2FnW3OtBPXXh5sKPc6CQeqtdpNviChyb0kMcywz%2BADw0Lwk1xdziHb4EBJRGzwTGq3lYQwwSYYwi7E47SedvbUlXyCxxcq0jTNjAq6rQyEn6jrWvibywtd8wo3WS5jxPGyB1huGnXvB%2FR9VdiXcEIfDlKvfojykfZjgGmpN6rrjfh%2FIEm2aG2rGazzmQmBgLIJHlWAWo3HPGrf%2BY%2BEOxKh%2BrtqdU26WpcD9%2BNvpoFR7ccMEuMENFIpUh8RhptpI5Tmv8N4lR4%2BIAC3hl7LPtBLc%2FMg5ESsELKeWZUKAVtt1r8zwWngrkg%2FWmHMfHC93ovv1P9PCRTS3fB3WX%2FGBxenG34RuDz5S2t3vQfvtOthTxEfen4vvGnMQPBJjCikdjNBjqkAZx1Lw3T9XCYiwRUB9NpztDYoroJb34FFin5j34%2BqoqleC1kVw%2BU2Mb4%2BxOHhJy3VvkgfpIk96lFZnLF6c7DLUCzVTkG8mmbkQkfBAS2A6iPCCsSs04VtGXaZz%2FU6ssuwb%2FikyxNBx2BNqtysgIvxdUxppPFdPa6Shb1N%2FJDsD0OARdJhL8GSIq5cFtlNt4lmeXsmRKDWLbm07eKTPae0yvtu0fn&X-Amz-Signature=be151c01be1aacef42dd0590020f9d74b0cdf3cf3993b7afbd8596bf30d35cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANE4KJ5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkjy134t4Iozv%2BzgH9cEZa4N41bEVwQllf3HQWRTVp1gIhAK%2FQCvpF6REKkGr4RIT1rqlRRnNslmxb76X9A2HGcbULKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI3FN%2FEw25gmPwF8Eq3APJrJGHrJ9jK8uOcM7XrJfcScPf2ZwHkY40VzSXdxVAj4M8D0HrrR%2FxZKNMayoT3RJqstwyZLex0iQG3MTv%2BK6seq0bMV%2BOLINGXKhMY%2BfkC8wcZQVaNefa9DFSjg3fBQr47xg92zf8MGdWfKbgzE98uTGdeZgXNIjC2EeX9uxl5oW8EHqjTyOYO8aB5QduiiS4dNJ6n5SzEZFaSllCv0aXC11ES6BxbHLAKEWOVNSH%2Bl0e6mSf5VZOwdu0JYSj38k%2F%2FnW3OtBPXXh5sKPc6CQeqtdpNviChyb0kMcywz%2BADw0Lwk1xdziHb4EBJRGzwTGq3lYQwwSYYwi7E47SedvbUlXyCxxcq0jTNjAq6rQyEn6jrWvibywtd8wo3WS5jxPGyB1huGnXvB%2FR9VdiXcEIfDlKvfojykfZjgGmpN6rrjfh%2FIEm2aG2rGazzmQmBgLIJHlWAWo3HPGrf%2BY%2BEOxKh%2BrtqdU26WpcD9%2BNvpoFR7ccMEuMENFIpUh8RhptpI5Tmv8N4lR4%2BIAC3hl7LPtBLc%2FMg5ESsELKeWZUKAVtt1r8zwWngrkg%2FWmHMfHC93ovv1P9PCRTS3fB3WX%2FGBxenG34RuDz5S2t3vQfvtOthTxEfen4vvGnMQPBJjCikdjNBjqkAZx1Lw3T9XCYiwRUB9NpztDYoroJb34FFin5j34%2BqoqleC1kVw%2BU2Mb4%2BxOHhJy3VvkgfpIk96lFZnLF6c7DLUCzVTkG8mmbkQkfBAS2A6iPCCsSs04VtGXaZz%2FU6ssuwb%2FikyxNBx2BNqtysgIvxdUxppPFdPa6Shb1N%2FJDsD0OARdJhL8GSIq5cFtlNt4lmeXsmRKDWLbm07eKTPae0yvtu0fn&X-Amz-Signature=b16a67f6faffc6b70d474f5f5bc9671368dec93a56825f0966fa2fd0c99938d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYXSYGE%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcBPp9Ccip5Wc%2BSPKOEo65HpHun7GE0rVZxv4UHGfxfwIhAOgk40OtgiyYIOhFGqF75a8kzV6Z9Sw9oWhwvHGF9D7aKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnN%2BiIX7D298Hr2Nkq3AOMMiPcM2PfxoSwEAx%2FJjQQbtEBBQmmKUAxxL2pJHtisONJuN5femj12ZztI%2B9wQZ35IadXnuH0r3QJLMb7L0PIKRzv0evdC2LA8o2XUvEoKdoSLdEDgLojKVI5Qmjo4J%2FDXln%2F7R%2FZpXmZ5jg5jplXJuO3s7SvxLoL9IYHlsn9KJuTlnjXFZZ8AxYlcMzM7mnjnITr6X1pAELmPvOSHk6iO6m%2F%2F8xPzNZpDe0%2BTY4Ht1oOOgMIrjHUSyPqkRu9oPzYREHjzbmOk2Arob72CNxxE2c%2F90nBAQvaTsE2k9WGViD57jOb2l75yXcq7efm1GC83XdY2mT%2BFpJhYUaRibHwDHB%2B%2FGOl5BDVyYeffcIpTW76Tnf%2B3hG%2BZNh3ArDzq%2FA27bEi3yUff%2B2Gxlrld%2F2cDPDwxSo2JnjAXpLVNkkiT3a%2BQ95v1ca7zsPTKEGiMATQHZsomy4%2F%2F2DHxo6bMjXO%2B7cIgX18ClA6rxzCpNoqu5gQO35CVFLg0uu8aaXfusBo5QypR1ys%2FknKKRc80WXzuSzn3tXVl%2FnuzM7C%2F2NjLZ0TeIFFVUdflB7%2B8umQsdIn3osggcy%2FlRjlFNralhNevbNkAlOunYn5NDJJmQXkla0mZ3NyS85vn1soVjCekdjNBjqkAe1idajE7tjqg4hS%2F8WiEj2cOBHzjhSJ0HPw6GoUWthKXnAZHv7xOWDY4W5j%2FqTEM4USi5XgnWDZxn9E2nAlJgWTLNwtbPS4Xs1Ql0hOeXZqzHPuAdy5g5CtMxwAwh%2BYkOeL3T4wlYYZ06DrXZ7yof7B3lQ92VjTFj6eXRIOYnEENezxcVn0dj63ehy11E1q4aV76o3d1nB%2FNfmfscRhwbROv3Aw&X-Amz-Signature=44784c48478376fe962650a3f97bba9f755de2f8e440c09ed5331e86e89176eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YIMIL73%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGC2F2RJk3pS4s2IREWDpLW2xnKMTYmSEGK1XsuoqiyAIgXJi2ME3vFzl5yb%2BEu%2BxEhwZganLbdKFLIBIyTKwjcmsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoNj1a7qZaiwg%2BT3ircA6giwf9HbHexWW50JnVYCTaE%2FnrA71Z9KYTw%2FVI5GdKcU0IlMU7b2J%2Bvc%2FwJ8BiZQcFrU6LlhxoqQp7I4e1gvmpLCPzcMea7Z8oPXyk067QzflPrBKxiaj16gtUN9kgPhVaTtw2XLL2JzHv%2BM27ccjffj92zHFEyzS8g8c%2B%2BBmQPU%2Bj%2Fro%2FZ1hDgUiRN%2FN89NbGSqFc%2Bfy%2B1jNckWVjONDMa23sVhtdEGlrEmuio3ydTD1EaU%2FHR7c9YfA%2BpqhkJxUlOaum8OrMewBDRgnJJ3JrbkxseKtBMJqrgL6A6iitAf7c%2FNmHeArCeueif7z4Z97UmNIig2OxibfsdI8WMuG01Y%2By1PR9LNOCDfa6jzoiD0Fxw2mkbEli5Uy6xou0r1VqaH0x1VtuZqFIpxomYT87EGQ%2BREOy66J4NW8KutjIRoKpVk4Ak%2F0IC8nGk13tNNHirIqad4QMod1ZgsXls2E8e7xnm4rsJjc5qLbdxfNRLevKXlLcBM1jcwv72PNZWb7YCfjRyI3y1I8WTBAyhF8xbrFBobqcpXQ3sUQN92%2BLlpTccsNxKeqXLixmE2IhBXyNeCJLMJnm%2FUMWdTE77rDuBLqJJXeYb099MIN9x52V3%2BHYsnn8CZT%2FVMsgbMMWQ2M0GOqUB5hLXMFK1%2F0U7QjnQsOdkm2sPzTWrzSICpOTBfcTH35yrfZ6ihsPC6AttpoYWnnTq8S7%2BA31U0fz%2BVuq15bhC98fE8%2FgJsL6YQBE4moYdHTp2OUmMXjGyV10TPken1DnoXo3e%2BQiO1c3V62Q7AfOxoeCfm5QukdMJAjXSWixkymsWVxdtatuUEhtQd3XpZME5S7t5ArvDfHKeg1DiIVBySp0rvtk6&X-Amz-Signature=5e441529ce746d71437a8d42abc63ee827f6e8d423ce4a8bb57d963f7c47eb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANE4KJ5%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkjy134t4Iozv%2BzgH9cEZa4N41bEVwQllf3HQWRTVp1gIhAK%2FQCvpF6REKkGr4RIT1rqlRRnNslmxb76X9A2HGcbULKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI3FN%2FEw25gmPwF8Eq3APJrJGHrJ9jK8uOcM7XrJfcScPf2ZwHkY40VzSXdxVAj4M8D0HrrR%2FxZKNMayoT3RJqstwyZLex0iQG3MTv%2BK6seq0bMV%2BOLINGXKhMY%2BfkC8wcZQVaNefa9DFSjg3fBQr47xg92zf8MGdWfKbgzE98uTGdeZgXNIjC2EeX9uxl5oW8EHqjTyOYO8aB5QduiiS4dNJ6n5SzEZFaSllCv0aXC11ES6BxbHLAKEWOVNSH%2Bl0e6mSf5VZOwdu0JYSj38k%2F%2FnW3OtBPXXh5sKPc6CQeqtdpNviChyb0kMcywz%2BADw0Lwk1xdziHb4EBJRGzwTGq3lYQwwSYYwi7E47SedvbUlXyCxxcq0jTNjAq6rQyEn6jrWvibywtd8wo3WS5jxPGyB1huGnXvB%2FR9VdiXcEIfDlKvfojykfZjgGmpN6rrjfh%2FIEm2aG2rGazzmQmBgLIJHlWAWo3HPGrf%2BY%2BEOxKh%2BrtqdU26WpcD9%2BNvpoFR7ccMEuMENFIpUh8RhptpI5Tmv8N4lR4%2BIAC3hl7LPtBLc%2FMg5ESsELKeWZUKAVtt1r8zwWngrkg%2FWmHMfHC93ovv1P9PCRTS3fB3WX%2FGBxenG34RuDz5S2t3vQfvtOthTxEfen4vvGnMQPBJjCikdjNBjqkAZx1Lw3T9XCYiwRUB9NpztDYoroJb34FFin5j34%2BqoqleC1kVw%2BU2Mb4%2BxOHhJy3VvkgfpIk96lFZnLF6c7DLUCzVTkG8mmbkQkfBAS2A6iPCCsSs04VtGXaZz%2FU6ssuwb%2FikyxNBx2BNqtysgIvxdUxppPFdPa6Shb1N%2FJDsD0OARdJhL8GSIq5cFtlNt4lmeXsmRKDWLbm07eKTPae0yvtu0fn&X-Amz-Signature=b6f509a8d6d4ddee117c734cb7fadb0799e6b9d12d7d8a1aeae1659c82e9aee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
