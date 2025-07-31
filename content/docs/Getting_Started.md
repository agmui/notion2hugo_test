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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FHB2LK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd1iT0JL%2BFbCf6fMN5QuwO%2BBzX2C1udeHE9iMzlICdKAiA9t33JsxVzPwiBZWNbosQNgJnA%2FGunAzsqd3E2VahWFCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBonbBtenR5eKtVMxKtwD8PzKcV49Mwx2ATvkS%2FdgN%2FcyAjgkv1ZHEEBGyKwVNbMks27XNJDOGQs%2B1WEes%2FZKSiK94Qg%2FvndNPchlmO1o5w2mDwI6sx0KT8q5gwxBnb3nqObZlvV2xGP%2FlMRBpkptSNl99IvxyrtEX1LJG%2FGPeP1vkKZoYQoO5wQkEAZWqgiDj1wb89PY7cooCNU0QgB1Udjq0ViruXZWUpT5Q9MvQBGl3hkFhiyHCQAj0Y7zGHTcEucFAZtIf3ifkDRnukM5AQjOlW2RXcNoK%2BmT6bKOeViDnUa4SxunqtvbchezybKwx5%2BbrmQyUPjDc7NDwHX7a871c%2FgoTcYHn%2FxiTLcr2Sh2yt5hpy1xr8MXvkInmPX2iEOKsAYKAA%2Bn7ZSDSLfGkGhnLIAr9rbAIb8uVyFOfa4nF9%2BrgAx9wX9s2NwBsdJEVWSWcc9Lb31NSGr23tovnsZXStcSZP4rsukyP1vFpV2qu%2BrloBGiao3w%2F66ahfbjVWqr2vmdCtJ0LGNnMEHuEojxayyuWaN6dGCl89KhyRZ0w107FztwgdkU%2BC4lTS7lEQaq9HihnCPgrqPb%2FYPZtD8XzKLuUzqBYRrB3gPSVIoc2rvfPxH4KtLDuM2WnEfNzgWpbBTtufBYYgcwp5qsxAY6pgGytvJ1m%2FKrL4vPk53xbFJhGAKlL2wwWDNgIuqpurg0L1GdGkOxVzPjMHfKorueGP1XrM%2F05h9LJvCWG5lEfWU8RWLE1f8Ljg2vyjiT9tlCMp4SOyPnOcg2TfRcB0GHbBAAIHlGK%2FZIuGsOXBaD7OrLfGStZjfJV%2ByHAXBDbtJ%2BkXX%2BgoJeB8n4PgaE53iehR9PxTGrOO2U2n7%2FByclYL%2FgNCX4ET4Q&X-Amz-Signature=9ad1f6b7eaba258273bdf20f789a9d063850dc2641f540079f0e55c50003adac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FHB2LK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd1iT0JL%2BFbCf6fMN5QuwO%2BBzX2C1udeHE9iMzlICdKAiA9t33JsxVzPwiBZWNbosQNgJnA%2FGunAzsqd3E2VahWFCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBonbBtenR5eKtVMxKtwD8PzKcV49Mwx2ATvkS%2FdgN%2FcyAjgkv1ZHEEBGyKwVNbMks27XNJDOGQs%2B1WEes%2FZKSiK94Qg%2FvndNPchlmO1o5w2mDwI6sx0KT8q5gwxBnb3nqObZlvV2xGP%2FlMRBpkptSNl99IvxyrtEX1LJG%2FGPeP1vkKZoYQoO5wQkEAZWqgiDj1wb89PY7cooCNU0QgB1Udjq0ViruXZWUpT5Q9MvQBGl3hkFhiyHCQAj0Y7zGHTcEucFAZtIf3ifkDRnukM5AQjOlW2RXcNoK%2BmT6bKOeViDnUa4SxunqtvbchezybKwx5%2BbrmQyUPjDc7NDwHX7a871c%2FgoTcYHn%2FxiTLcr2Sh2yt5hpy1xr8MXvkInmPX2iEOKsAYKAA%2Bn7ZSDSLfGkGhnLIAr9rbAIb8uVyFOfa4nF9%2BrgAx9wX9s2NwBsdJEVWSWcc9Lb31NSGr23tovnsZXStcSZP4rsukyP1vFpV2qu%2BrloBGiao3w%2F66ahfbjVWqr2vmdCtJ0LGNnMEHuEojxayyuWaN6dGCl89KhyRZ0w107FztwgdkU%2BC4lTS7lEQaq9HihnCPgrqPb%2FYPZtD8XzKLuUzqBYRrB3gPSVIoc2rvfPxH4KtLDuM2WnEfNzgWpbBTtufBYYgcwp5qsxAY6pgGytvJ1m%2FKrL4vPk53xbFJhGAKlL2wwWDNgIuqpurg0L1GdGkOxVzPjMHfKorueGP1XrM%2F05h9LJvCWG5lEfWU8RWLE1f8Ljg2vyjiT9tlCMp4SOyPnOcg2TfRcB0GHbBAAIHlGK%2FZIuGsOXBaD7OrLfGStZjfJV%2ByHAXBDbtJ%2BkXX%2BgoJeB8n4PgaE53iehR9PxTGrOO2U2n7%2FByclYL%2FgNCX4ET4Q&X-Amz-Signature=107415b2354fe6a024bad977a3db0211666a016db29598b5f3f1aa56c2724386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FHB2LK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd1iT0JL%2BFbCf6fMN5QuwO%2BBzX2C1udeHE9iMzlICdKAiA9t33JsxVzPwiBZWNbosQNgJnA%2FGunAzsqd3E2VahWFCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBonbBtenR5eKtVMxKtwD8PzKcV49Mwx2ATvkS%2FdgN%2FcyAjgkv1ZHEEBGyKwVNbMks27XNJDOGQs%2B1WEes%2FZKSiK94Qg%2FvndNPchlmO1o5w2mDwI6sx0KT8q5gwxBnb3nqObZlvV2xGP%2FlMRBpkptSNl99IvxyrtEX1LJG%2FGPeP1vkKZoYQoO5wQkEAZWqgiDj1wb89PY7cooCNU0QgB1Udjq0ViruXZWUpT5Q9MvQBGl3hkFhiyHCQAj0Y7zGHTcEucFAZtIf3ifkDRnukM5AQjOlW2RXcNoK%2BmT6bKOeViDnUa4SxunqtvbchezybKwx5%2BbrmQyUPjDc7NDwHX7a871c%2FgoTcYHn%2FxiTLcr2Sh2yt5hpy1xr8MXvkInmPX2iEOKsAYKAA%2Bn7ZSDSLfGkGhnLIAr9rbAIb8uVyFOfa4nF9%2BrgAx9wX9s2NwBsdJEVWSWcc9Lb31NSGr23tovnsZXStcSZP4rsukyP1vFpV2qu%2BrloBGiao3w%2F66ahfbjVWqr2vmdCtJ0LGNnMEHuEojxayyuWaN6dGCl89KhyRZ0w107FztwgdkU%2BC4lTS7lEQaq9HihnCPgrqPb%2FYPZtD8XzKLuUzqBYRrB3gPSVIoc2rvfPxH4KtLDuM2WnEfNzgWpbBTtufBYYgcwp5qsxAY6pgGytvJ1m%2FKrL4vPk53xbFJhGAKlL2wwWDNgIuqpurg0L1GdGkOxVzPjMHfKorueGP1XrM%2F05h9LJvCWG5lEfWU8RWLE1f8Ljg2vyjiT9tlCMp4SOyPnOcg2TfRcB0GHbBAAIHlGK%2FZIuGsOXBaD7OrLfGStZjfJV%2ByHAXBDbtJ%2BkXX%2BgoJeB8n4PgaE53iehR9PxTGrOO2U2n7%2FByclYL%2FgNCX4ET4Q&X-Amz-Signature=ef20b0c2fb1a9faa40c88d63593e1cd3ba36411013f6066a678fd810b7016da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEU45TY4%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkCKih9wVoHjGOg4o60jTJePbkHpfvTTTOumNhQDgmHwIgan0Ci%2BGy9Wf2ziSS7xF3jXAK80ocKiDzVYuSoKiQAPYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhSMgvlisczIX7iVCrcAzmO8YUYsUN2CDWPADPjX3MZN56%2BuT6PesPF9sBnBsSozf9eyoSLGidQsTys6%2FXQ0xF5MFT5TwDFQwGfcscOQlp%2FM0sXXZB8Jw8PA037SUrJ%2FQjTTxDy8t%2B0WN8Fc42iSJgN50OPew4pmBkBHOosF53rLssDQ9QWTet6yxELwwx2WVsoGdxNOF0SqjEfTmiEzacc0dOElPmfvs62cEM0wq6ExyujC683QHALp9bFcCZF%2FyddS2lgybo8mQ%2BOIc3MjjuSOQzJ%2BEwFf0BXm1nLDpkMKth%2BgO%2FRIU%2BI5fDq7%2B%2FqoJ93Nr3IxETWH%2B%2FmQIBYG8XYEn9wSVL8Scex92ZOl5zUKLbilA7LQyYTMIsZZz%2Fe4eZVyoabyXD4RL8j2WFcT8WrRMTPpksfWSsWLCYyCAY%2Bc%2B4yPvSy0TeWAstMljr02Fq%2B0Y1V3TsElLz0X53DMLyymkQ%2FFtEzeSLo7y8qeHRCME%2FWMFva%2FZTsO2a%2FdZfy5hBfQvH9UG2Y1nSxLSIQXGpgm1cVep70XLpgYPeaL2Q6yz3w1IP%2BK%2FARdDDzRSeZisE2iZ%2FB7zhuwcKb5rCnLXYfojkvRIOkHy2xLMesJdDNewMwqxNCo6wTsxJsMOQFu6SxP6Sm%2Fu2RQnSiMI%2BarMQGOqUB6Aom7SRfRuB%2F986epqm3AVD6%2B9076Y214DUmDSWJbkUp4UVUL3L7fn5AAM2C3QCQZkiTdH7%2FEC5RnHAIpr9Y1BBwfyec%2BJi1K%2FOJB7lFyObLwjrWqt%2FwoVHY%2FPxzrHU%2BmK%2FKCYbyuPGRnB25iTZr0sEqUZWFoC%2BVXhCO79lA4FtJP6uiBymIzYgbGolngR%2FSWI4ZXBPeN2HUgqfNQhgJ%2F4sLfItr&X-Amz-Signature=d09e26b9b1ba20ff94c7d10f4d0e3da8bea514636f6566746ebeaba76d3ba23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTS65SA%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtk3YWni%2FwnK7oclUkEntYS0caY6jUWm5UZaK1mAPaMAIhAOyz%2FtjmRgTkT6nQ23%2BBWL%2BMxfJLBZ%2By6HLZScthEW1KKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYX0E%2FAALZFVJpKkcq3AM6txtf6wBpwe%2BAN6YtByPOvT%2BRwwiHfdZPAP%2BmjQHc%2B6hiwLch0WjTBsrIB8mCqBnSuhfOEfOjntj3sirUqyFY8A%2FoL5%2BTtd%2F%2BhHz6%2FC9xiwkxbcveJkr%2BMwGPDorJmVq%2FVS8VuYJiYkUUyS%2BKroZpjvArZeYDbCWnepH%2FigiOcBdkOzZrHI7GCsqz8c%2B%2FCpOVvECRogc0gSB9XVWju4BxqdAy%2FTaw8qvdfzmJThB1Tmsyi%2FOhcVIEiWn8EFKsIehVj5s%2F%2FMGLIzewp7jDJCoWy0Tkn13lkBV9vIznjY9jF3Z%2B%2BMVA5oBrkughYL76Ubb3Ejv7hE%2Br5z6jgyusZf43L3D6PMUMhCh5IOabFbc9%2F1vKVXP0dGR5bbmTQxG7L4ct0po5VNdEaU852rAyvFMv2x1VsyrC6KNFTKOKKoABCEu3ANF%2FnmjlaWUv8fI4trirDPTfFqX%2FGuDEcb%2BPPe5zmONxjFEOJUcSQkkNYaRWuYtiIyXR80%2FEEHqocjCvmOiiaAjDcnxDYAQGZfHJF6SSghMdcmxJu6EsXA%2BOUIaNeJhAZx%2F8O6xnCdDi%2FNzDhbf%2Fbq1h%2BkO2qu%2FvndaxSlwaXIJdANYfnEgJUuz7qqWLx%2BfocByVZaskM%2B%2BBSDCQm6zEBjqkAfd3%2Fj9ZLPUgs%2BOvAgn2xCvyvTW5PpypREeLXkTJONFYiw0wpENhC4wFy2CBdN2J%2B6gcE12abcbLFMhZVMpes1KUFrAAU8UpMpXMruxShvAIa6%2B2qjLMJ7yJgTKLkEv5VfsKJGVVL7BYaEB2hXkn5KWRLXmwlgY1Bo%2BKwSUGeCzDV6ZhiYnlE2EjO89teAnQbQrTo6GsMl89MDFZoNy2V0vST795&X-Amz-Signature=a6f213c21774c6444698c8b068933ae87482344437d512838e4a0444f151a066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FHB2LK%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd1iT0JL%2BFbCf6fMN5QuwO%2BBzX2C1udeHE9iMzlICdKAiA9t33JsxVzPwiBZWNbosQNgJnA%2FGunAzsqd3E2VahWFCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBonbBtenR5eKtVMxKtwD8PzKcV49Mwx2ATvkS%2FdgN%2FcyAjgkv1ZHEEBGyKwVNbMks27XNJDOGQs%2B1WEes%2FZKSiK94Qg%2FvndNPchlmO1o5w2mDwI6sx0KT8q5gwxBnb3nqObZlvV2xGP%2FlMRBpkptSNl99IvxyrtEX1LJG%2FGPeP1vkKZoYQoO5wQkEAZWqgiDj1wb89PY7cooCNU0QgB1Udjq0ViruXZWUpT5Q9MvQBGl3hkFhiyHCQAj0Y7zGHTcEucFAZtIf3ifkDRnukM5AQjOlW2RXcNoK%2BmT6bKOeViDnUa4SxunqtvbchezybKwx5%2BbrmQyUPjDc7NDwHX7a871c%2FgoTcYHn%2FxiTLcr2Sh2yt5hpy1xr8MXvkInmPX2iEOKsAYKAA%2Bn7ZSDSLfGkGhnLIAr9rbAIb8uVyFOfa4nF9%2BrgAx9wX9s2NwBsdJEVWSWcc9Lb31NSGr23tovnsZXStcSZP4rsukyP1vFpV2qu%2BrloBGiao3w%2F66ahfbjVWqr2vmdCtJ0LGNnMEHuEojxayyuWaN6dGCl89KhyRZ0w107FztwgdkU%2BC4lTS7lEQaq9HihnCPgrqPb%2FYPZtD8XzKLuUzqBYRrB3gPSVIoc2rvfPxH4KtLDuM2WnEfNzgWpbBTtufBYYgcwp5qsxAY6pgGytvJ1m%2FKrL4vPk53xbFJhGAKlL2wwWDNgIuqpurg0L1GdGkOxVzPjMHfKorueGP1XrM%2F05h9LJvCWG5lEfWU8RWLE1f8Ljg2vyjiT9tlCMp4SOyPnOcg2TfRcB0GHbBAAIHlGK%2FZIuGsOXBaD7OrLfGStZjfJV%2ByHAXBDbtJ%2BkXX%2BgoJeB8n4PgaE53iehR9PxTGrOO2U2n7%2FByclYL%2FgNCX4ET4Q&X-Amz-Signature=0582f366c94c8eeeea1d5736b0b761353db6400e2b12f5f62d25e29437d48018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
