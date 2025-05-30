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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIOUBHJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jYm%2BwoAihySdWV0snbYge05QNA8bUQPyCuW8mEPY%2BgIgIL0bA%2Fto9z2Vfmgy2kwIVcS527Oh7%2FymYPmWohi6%2Fr4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmgSf%2BXUDYhSYpqJircA4QgC%2Bbe2E9q8BQG48UmlCo3B7DmEtBLGC7o4%2FNt%2F71qRxsSWvF7MbpaqXkoALxvEzUgNKcJb2KJ%2BK9IMp9aVShEEmInj%2FUnViXG5SC2Et%2FSrHzzdJbEvnwsSJ3xGz6iLdVBVQJo%2BRTB1q3NNYtuv5tO1DRo2%2FKy1feLu5dyh4LCXO4SFdIltbae9eOome3XkBzfAVLecYFok%2Br2PWbBOYRiC3sLZ%2BOjL7ZUcXJYQSYYzOWnGMS6uXAgu4w9Tb%2BSNkGmShFkFq11EmXRXkzl0bJbpGw%2FBho4N97riLfxpryoqT%2FWtkh7lcNEWynpyg6sD%2FeT1IeqykSAAVTv8Uf5jsMWI%2BOLX411V7p8KkhPYQKjxcrhWZzC8z0oReeqweY0JbUB5mad0wa4o0RL61qdYdbfnN1zJn2NPAgjr1Yfe795C7vMWd8jkyh1QqSJlAgY13xuIUPyUwiGvM32FGHJrf0dkg7cRXaAuaiSu%2Bqa2yBhyR9v7vc%2F9cZawHtVVShwAheqvY%2B2BcXsuBIkMp4w6v9Ji7QCcS3zQr79AXt7IjbvJ%2B4UisXTkU6xcKOohyeWQIgXvnsrFbuPlTNbl0en9ch1CEtMsUiHxjwAnBrljAH9DBZGDYsEMVBWcZLvMLbV58EGOqUBLu5p24DiBd41SKV%2B7Y62iXcyu9h5Djpgf2Ugvw5l31fVKOKTvvl5OpdYveI3yvj5913qjqNkrOz0jZXKV8nj%2FU%2BaiDI1%2FXz1PMbVa7ULj33EhH8PWPlViVb8hyvlV%2Byk35bzbCAojDFTdjp829ruz8j0QHfosjMgkQ237cv5KW3SAEdtMIKbGJb2nfUxeFBjFZEZxX1JFxjKQJQNzSCjAQrQv7a5&X-Amz-Signature=8ac488ffe1c3d484b0c096832dec720ef6397699cc5dd051108ecaba073291b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIOUBHJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jYm%2BwoAihySdWV0snbYge05QNA8bUQPyCuW8mEPY%2BgIgIL0bA%2Fto9z2Vfmgy2kwIVcS527Oh7%2FymYPmWohi6%2Fr4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmgSf%2BXUDYhSYpqJircA4QgC%2Bbe2E9q8BQG48UmlCo3B7DmEtBLGC7o4%2FNt%2F71qRxsSWvF7MbpaqXkoALxvEzUgNKcJb2KJ%2BK9IMp9aVShEEmInj%2FUnViXG5SC2Et%2FSrHzzdJbEvnwsSJ3xGz6iLdVBVQJo%2BRTB1q3NNYtuv5tO1DRo2%2FKy1feLu5dyh4LCXO4SFdIltbae9eOome3XkBzfAVLecYFok%2Br2PWbBOYRiC3sLZ%2BOjL7ZUcXJYQSYYzOWnGMS6uXAgu4w9Tb%2BSNkGmShFkFq11EmXRXkzl0bJbpGw%2FBho4N97riLfxpryoqT%2FWtkh7lcNEWynpyg6sD%2FeT1IeqykSAAVTv8Uf5jsMWI%2BOLX411V7p8KkhPYQKjxcrhWZzC8z0oReeqweY0JbUB5mad0wa4o0RL61qdYdbfnN1zJn2NPAgjr1Yfe795C7vMWd8jkyh1QqSJlAgY13xuIUPyUwiGvM32FGHJrf0dkg7cRXaAuaiSu%2Bqa2yBhyR9v7vc%2F9cZawHtVVShwAheqvY%2B2BcXsuBIkMp4w6v9Ji7QCcS3zQr79AXt7IjbvJ%2B4UisXTkU6xcKOohyeWQIgXvnsrFbuPlTNbl0en9ch1CEtMsUiHxjwAnBrljAH9DBZGDYsEMVBWcZLvMLbV58EGOqUBLu5p24DiBd41SKV%2B7Y62iXcyu9h5Djpgf2Ugvw5l31fVKOKTvvl5OpdYveI3yvj5913qjqNkrOz0jZXKV8nj%2FU%2BaiDI1%2FXz1PMbVa7ULj33EhH8PWPlViVb8hyvlV%2Byk35bzbCAojDFTdjp829ruz8j0QHfosjMgkQ237cv5KW3SAEdtMIKbGJb2nfUxeFBjFZEZxX1JFxjKQJQNzSCjAQrQv7a5&X-Amz-Signature=cdabf6f07447b3b61183ee3320641a0f639934e9f11299316bd66c6aea042481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIOUBHJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jYm%2BwoAihySdWV0snbYge05QNA8bUQPyCuW8mEPY%2BgIgIL0bA%2Fto9z2Vfmgy2kwIVcS527Oh7%2FymYPmWohi6%2Fr4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmgSf%2BXUDYhSYpqJircA4QgC%2Bbe2E9q8BQG48UmlCo3B7DmEtBLGC7o4%2FNt%2F71qRxsSWvF7MbpaqXkoALxvEzUgNKcJb2KJ%2BK9IMp9aVShEEmInj%2FUnViXG5SC2Et%2FSrHzzdJbEvnwsSJ3xGz6iLdVBVQJo%2BRTB1q3NNYtuv5tO1DRo2%2FKy1feLu5dyh4LCXO4SFdIltbae9eOome3XkBzfAVLecYFok%2Br2PWbBOYRiC3sLZ%2BOjL7ZUcXJYQSYYzOWnGMS6uXAgu4w9Tb%2BSNkGmShFkFq11EmXRXkzl0bJbpGw%2FBho4N97riLfxpryoqT%2FWtkh7lcNEWynpyg6sD%2FeT1IeqykSAAVTv8Uf5jsMWI%2BOLX411V7p8KkhPYQKjxcrhWZzC8z0oReeqweY0JbUB5mad0wa4o0RL61qdYdbfnN1zJn2NPAgjr1Yfe795C7vMWd8jkyh1QqSJlAgY13xuIUPyUwiGvM32FGHJrf0dkg7cRXaAuaiSu%2Bqa2yBhyR9v7vc%2F9cZawHtVVShwAheqvY%2B2BcXsuBIkMp4w6v9Ji7QCcS3zQr79AXt7IjbvJ%2B4UisXTkU6xcKOohyeWQIgXvnsrFbuPlTNbl0en9ch1CEtMsUiHxjwAnBrljAH9DBZGDYsEMVBWcZLvMLbV58EGOqUBLu5p24DiBd41SKV%2B7Y62iXcyu9h5Djpgf2Ugvw5l31fVKOKTvvl5OpdYveI3yvj5913qjqNkrOz0jZXKV8nj%2FU%2BaiDI1%2FXz1PMbVa7ULj33EhH8PWPlViVb8hyvlV%2Byk35bzbCAojDFTdjp829ruz8j0QHfosjMgkQ237cv5KW3SAEdtMIKbGJb2nfUxeFBjFZEZxX1JFxjKQJQNzSCjAQrQv7a5&X-Amz-Signature=c30bb264de9916046a99404a1c8cfb990c7b531b90a5e14ad7e5be96a796bed7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3IE6H2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcGTEe81HxwRC8SThamQ0AuKqKlrpj8bZdE2vjOV1t8QIgcj%2FtC9oWHqdGRyZ01sVxVGgHxfDHi5U7U9aGNcH4n8cqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BMIZUzL0uIbHZj5CrcA2JnIi9bv6nz3wDv3vm8gAW4pbSSV0waQH2TE0ZtXvxdQO6q9ePSVuhAnAAoab6BqcXS0qWwJ%2BQWRocA0pn4JI1eK42mIp0PDoVy%2BSOlCFQ8DhfdhvsE3Y6HYyCBjzjf6Ycpr2%2F44fnt6OSwBOrOlWQMzAFiHUtKt6QtlJsqpqT5x03VXp5DRB5M3b3YNvDKtz1AoyejYzLfKyiSAr%2FoZd8hcr%2F9RamhCSNz7oBOa21c7OyXfGPRlyNFfAfkxsAsBxu0%2Fv%2FJs7cExFQwXbp8s%2FPX3uOebLOj2QTmZpuL2bbgN8aYld%2BdY9KTxlGp9PBL9VSkQ5wmH1FB66vErgcInH5dXzMWRFL0flRdBy5z1JCG%2F7RtEOC23xGoa8QQWL3auVklhXxJRG0azljZRVcZBMIjD8Uk8resnKF1THTIGAiqcO5JwNtsBiH1bldIHPPPszYRulqH72UkcQ9Cb2fiBUNdHn7v9aw%2BMd0wVI7r6zKvdj7afCa0D7UmJ%2Fe4rEyX4dq5ZbJgypplRUo5%2FWoWQkDmOQyfEHPzzaD7ETzCZbXtuyytvXpmjAGiS7isSkR3cIAzgjx5PdJttruW%2FeTE8E7aT9bO%2FYfr2hQf1c8pr3ve8Ypft7AVNpTuze3IMNfU58EGOqUBQqioeUBP9ZuB21%2BxjhGo7rR3r0eRqu%2F%2F1AoncbR1zLgXBhTSKuu3QH4wN6FGnJ79P%2FEoeNnDOfXKN6NJDaTMqBSJ%2Fwh5rimnmgtrzGz53%2BbubAwXVTqmyB%2FcbOPKSg9bgDVt39lnSIjxh6lyMLU0pihZV4M1uXG%2FoZ6t0mh7r09Fohdu%2BodAmPdi8xtfQ6frYLoq89a8hPFml2ls6iYZkyh4jyYU&X-Amz-Signature=5d52d96a222efd0386cc8704025b07babff2a1426f48b9af01fc66792b92d785&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPNR7UY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG4ABPx0k96k2tUXJ5q23ySQvB9XlGfDGZrQTuMI4%2B3AIhALcfou%2BI56YwkPW%2F6uE3EGQJS6LyDyWdaSW%2FauEU0sN%2BKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZJaF4BMAz7QN93%2BAq3AMVgKMsgZz3ZqlkrVhM1s%2BIm0%2FcAcamFermogK2Epq%2B%2BfXbbklE29nqkDpZXKe3NCOf2uoquUj1QHknaWFBQXVErHb1Q7475WL6gjIF265GKbJCi%2BdwpC6b06EMgIli4OPR7s3fMiplBo7vlvECBg%2FginTr8CJFon1scEPkcyrC5ZzJJHnMDNPgyrXKwmjZee6bfqdzemvvOVg7iaKljmmBVrN992b5H4i%2FqNxEx11EjBqNGBRXljBKh%2F4a7XSJZeOB82dyKTKA%2BZxFiTmC5Lf4ySOVL5EmE6datwF3qwxqg9C8WztnpbBcKGR2oKNsFEiQSWk4Fnqj5H%2FdtWZKKLkKJSfCrOXrDuFibvaZ9Z0Cor3yeNyHXNZSK7R8PvZH2%2B9l3HaE1LG61DZz6cxtwMJmpmwIuzdaqle31sE3Bm1MK4yhGub29E9iH0%2F5TcG7mFUSgZtgrv4gDBb55GWLIckrwlJt6n1%2FyrGOIKOpkIBloVeOeJCOHPP2GuxoX38ejPHF%2B%2B4zMotJ9fMV07MBWYrrWbEasu1owhdR5cbYsFAazLpw%2F9d4xWMryYrH5LkfffeQYYylMBNogNWw22TXLgKug4YsmdGzwF72f4Zs4WaQEROZmRu088mXNFZHCDDP1OfBBjqkAVUmeQh0MoGOaWiXEKMbBl7drg9TjpEG7fbKvXLevJRR4mKRAvPBL2Y%2FFFjQLlP72mh%2BmHRvYbsmjIlqv17R9mRM0xCTyScLmqK8tWBt0Fk32R6UmYjoP7jiP2pdEUnpOHHjVA%2BITlkohE5WOddDikxu%2BAs0R0%2BneBvcAjRouL%2BdCwXs7wML%2BR%2BrPBKMozRvkhy57qoZ3HDAxn3VopssT%2FLX1%2FuY&X-Amz-Signature=429fea81420c67ace11cbe5ea417250d1dc71a25090b77f8abf9a1f07a724946&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PIOUBHJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2jYm%2BwoAihySdWV0snbYge05QNA8bUQPyCuW8mEPY%2BgIgIL0bA%2Fto9z2Vfmgy2kwIVcS527Oh7%2FymYPmWohi6%2Fr4qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDmgSf%2BXUDYhSYpqJircA4QgC%2Bbe2E9q8BQG48UmlCo3B7DmEtBLGC7o4%2FNt%2F71qRxsSWvF7MbpaqXkoALxvEzUgNKcJb2KJ%2BK9IMp9aVShEEmInj%2FUnViXG5SC2Et%2FSrHzzdJbEvnwsSJ3xGz6iLdVBVQJo%2BRTB1q3NNYtuv5tO1DRo2%2FKy1feLu5dyh4LCXO4SFdIltbae9eOome3XkBzfAVLecYFok%2Br2PWbBOYRiC3sLZ%2BOjL7ZUcXJYQSYYzOWnGMS6uXAgu4w9Tb%2BSNkGmShFkFq11EmXRXkzl0bJbpGw%2FBho4N97riLfxpryoqT%2FWtkh7lcNEWynpyg6sD%2FeT1IeqykSAAVTv8Uf5jsMWI%2BOLX411V7p8KkhPYQKjxcrhWZzC8z0oReeqweY0JbUB5mad0wa4o0RL61qdYdbfnN1zJn2NPAgjr1Yfe795C7vMWd8jkyh1QqSJlAgY13xuIUPyUwiGvM32FGHJrf0dkg7cRXaAuaiSu%2Bqa2yBhyR9v7vc%2F9cZawHtVVShwAheqvY%2B2BcXsuBIkMp4w6v9Ji7QCcS3zQr79AXt7IjbvJ%2B4UisXTkU6xcKOohyeWQIgXvnsrFbuPlTNbl0en9ch1CEtMsUiHxjwAnBrljAH9DBZGDYsEMVBWcZLvMLbV58EGOqUBLu5p24DiBd41SKV%2B7Y62iXcyu9h5Djpgf2Ugvw5l31fVKOKTvvl5OpdYveI3yvj5913qjqNkrOz0jZXKV8nj%2FU%2BaiDI1%2FXz1PMbVa7ULj33EhH8PWPlViVb8hyvlV%2Byk35bzbCAojDFTdjp829ruz8j0QHfosjMgkQ237cv5KW3SAEdtMIKbGJb2nfUxeFBjFZEZxX1JFxjKQJQNzSCjAQrQv7a5&X-Amz-Signature=3f90e38408415491ac787bc4d5f1e0c6149319b22db662125605a440e55602e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
