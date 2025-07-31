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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWXFRFL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGehbqUTD%2FSSRAUTFgqGdyhO8VNqB8G582MjK%2FSoOcMdAiA0%2F7SLiSL4ZS%2FPrpuPFtETs8oPBdaz9VzCqLwjZx7QeCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxJBeUnK%2BnR7dcHNKtwD8aRXuwfA7te5vIMDVeUigHc4gQYnNli1qsL0Jyhbx%2FPKypAKk8kwbY9d8KvoSGaud2gd0swL7CyrnQsBj8RkuVEPnowDEsNNXYvHtrqRCMjGzrYz20cqnx0GopEyyS64N5yZ%2BVolB29oKiJlkRZzVENcUxvskU34crkx2eZei9%2FDHsP6YkT%2BzgYJvmkZjb3rd17nXLkCJesb85%2B6u7A5DlBLycF3v14dEADPx5l6me9ILpFe6NDm6jM3RyQL1jiipadbhjYq3SuKvgpDVftjRlqBj%2FEwOKIC5KevTb267olLXkk44%2F0k4V2%2FwY40zn6NSNLw8uY3eIXneVPXUDIq%2F6qpzO5DoUMw9DRckS6YooRC7ztHAtltv3Ufn5EBQApJf90%2FSYovWI0rQq%2F7M2Zz7sS6WsBsEFkOUhDp1MpohmLR8XKLWPMV5nlZEAOMP5SLZg8Ln6vpwFr3kribsH%2FNG8HgOIXYg4s5iROCG0wKxcJ7pTZQE2VSUKGh2j59glh%2BEtMvWrAIRzDF2XA2crWYSLsKblhl48kq6jlJeBPwnWYt7obtNj6SAzgJpbDf6VZvfIkJsJPiG9BXNqLJ%2B4kNl3GjF%2BxlUYPGWQAmSQU3HbY45Wg9D56sQPffxgswlMqrxAY6pgEaEO2uGXWbU1V3NDWXznT4C12ajDDEovvuAe84vwe7Qw%2BE4gptN4zaPCy5MvIk0vj3CdyPVHONuY%2FIGUuEd2XQc%2FkeBDT2xuqNUNKXKw%2BOpNMiqAiJ1MQe%2F7fh%2F8LTGy7Fs6OD4xPPaE4%2BFtm88XMh4e8x0pcZN1bNqa4bAJze4sRmDg%2FlxxMLN4C0CtaIquTkt3Zx5LZswA16AoqUH3SgVVm15Oy3&X-Amz-Signature=8b33f953fcb16f034641c8a4e18da1b70eb4af2079aa0ebb22e48ffe242cc778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWXFRFL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGehbqUTD%2FSSRAUTFgqGdyhO8VNqB8G582MjK%2FSoOcMdAiA0%2F7SLiSL4ZS%2FPrpuPFtETs8oPBdaz9VzCqLwjZx7QeCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxJBeUnK%2BnR7dcHNKtwD8aRXuwfA7te5vIMDVeUigHc4gQYnNli1qsL0Jyhbx%2FPKypAKk8kwbY9d8KvoSGaud2gd0swL7CyrnQsBj8RkuVEPnowDEsNNXYvHtrqRCMjGzrYz20cqnx0GopEyyS64N5yZ%2BVolB29oKiJlkRZzVENcUxvskU34crkx2eZei9%2FDHsP6YkT%2BzgYJvmkZjb3rd17nXLkCJesb85%2B6u7A5DlBLycF3v14dEADPx5l6me9ILpFe6NDm6jM3RyQL1jiipadbhjYq3SuKvgpDVftjRlqBj%2FEwOKIC5KevTb267olLXkk44%2F0k4V2%2FwY40zn6NSNLw8uY3eIXneVPXUDIq%2F6qpzO5DoUMw9DRckS6YooRC7ztHAtltv3Ufn5EBQApJf90%2FSYovWI0rQq%2F7M2Zz7sS6WsBsEFkOUhDp1MpohmLR8XKLWPMV5nlZEAOMP5SLZg8Ln6vpwFr3kribsH%2FNG8HgOIXYg4s5iROCG0wKxcJ7pTZQE2VSUKGh2j59glh%2BEtMvWrAIRzDF2XA2crWYSLsKblhl48kq6jlJeBPwnWYt7obtNj6SAzgJpbDf6VZvfIkJsJPiG9BXNqLJ%2B4kNl3GjF%2BxlUYPGWQAmSQU3HbY45Wg9D56sQPffxgswlMqrxAY6pgEaEO2uGXWbU1V3NDWXznT4C12ajDDEovvuAe84vwe7Qw%2BE4gptN4zaPCy5MvIk0vj3CdyPVHONuY%2FIGUuEd2XQc%2FkeBDT2xuqNUNKXKw%2BOpNMiqAiJ1MQe%2F7fh%2F8LTGy7Fs6OD4xPPaE4%2BFtm88XMh4e8x0pcZN1bNqa4bAJze4sRmDg%2FlxxMLN4C0CtaIquTkt3Zx5LZswA16AoqUH3SgVVm15Oy3&X-Amz-Signature=9261fdb16e94b90b2f5de05ec90c4b8d4fb3f6ad2e97e9c36cb952750b5e2569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWXFRFL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGehbqUTD%2FSSRAUTFgqGdyhO8VNqB8G582MjK%2FSoOcMdAiA0%2F7SLiSL4ZS%2FPrpuPFtETs8oPBdaz9VzCqLwjZx7QeCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxJBeUnK%2BnR7dcHNKtwD8aRXuwfA7te5vIMDVeUigHc4gQYnNli1qsL0Jyhbx%2FPKypAKk8kwbY9d8KvoSGaud2gd0swL7CyrnQsBj8RkuVEPnowDEsNNXYvHtrqRCMjGzrYz20cqnx0GopEyyS64N5yZ%2BVolB29oKiJlkRZzVENcUxvskU34crkx2eZei9%2FDHsP6YkT%2BzgYJvmkZjb3rd17nXLkCJesb85%2B6u7A5DlBLycF3v14dEADPx5l6me9ILpFe6NDm6jM3RyQL1jiipadbhjYq3SuKvgpDVftjRlqBj%2FEwOKIC5KevTb267olLXkk44%2F0k4V2%2FwY40zn6NSNLw8uY3eIXneVPXUDIq%2F6qpzO5DoUMw9DRckS6YooRC7ztHAtltv3Ufn5EBQApJf90%2FSYovWI0rQq%2F7M2Zz7sS6WsBsEFkOUhDp1MpohmLR8XKLWPMV5nlZEAOMP5SLZg8Ln6vpwFr3kribsH%2FNG8HgOIXYg4s5iROCG0wKxcJ7pTZQE2VSUKGh2j59glh%2BEtMvWrAIRzDF2XA2crWYSLsKblhl48kq6jlJeBPwnWYt7obtNj6SAzgJpbDf6VZvfIkJsJPiG9BXNqLJ%2B4kNl3GjF%2BxlUYPGWQAmSQU3HbY45Wg9D56sQPffxgswlMqrxAY6pgEaEO2uGXWbU1V3NDWXznT4C12ajDDEovvuAe84vwe7Qw%2BE4gptN4zaPCy5MvIk0vj3CdyPVHONuY%2FIGUuEd2XQc%2FkeBDT2xuqNUNKXKw%2BOpNMiqAiJ1MQe%2F7fh%2F8LTGy7Fs6OD4xPPaE4%2BFtm88XMh4e8x0pcZN1bNqa4bAJze4sRmDg%2FlxxMLN4C0CtaIquTkt3Zx5LZswA16AoqUH3SgVVm15Oy3&X-Amz-Signature=66b6dc3f10173645d35ca1e3645767a8858ac35792bd84c1e30089992190ee1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632DHHKWN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FS7jxuYWSCRK73LkKyL1cdzkym3tNfd%2BdozJqxFyHGAiEAibDmvDHUSlg5RSH07h%2BkX5Svrsy7Dzm72UZ2MtP9MbsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEC7A9HYTRRpmsei8ircAxFmcbetpgJjntVoVyKvmGyK1CycApALiiEv3ySnOzAH16AekjtzJokpErkjHEnKifiK7MW2%2B1Blcf4v3WhhlqdTUDx8gUmrq0oD9e%2FHRsYaGd8KyXuO6%2FwE183PNHTkYjytkR8M3uOV4GexelmL%2B3%2Fu2BcSZnAhWXU0NBkJ1ZCfF9MBjqfU7sfFqzhCuAZLZRfv5D%2BAuLERQrvNccnm0o%2FdXlBJwhP%2BZXMlMqZQdjgJhCL1aJQyhVR6XT8cyCHtPs90iSB8nk1HbGopw2mk%2FO4oWvHPFeeq311iH0OIMhjFQ0oIowN1TmWZKJW7WRplDw9G5Lz%2FXAetUmBtRzxu6YkICAAgsYh9K2OekM94ijXBxLt6SBI3saEhQD1HGir%2FOqU044OvK%2FyFdOiQQkL9chJdH7%2Bf2l8h0LZ3Y3PBRU3ggBAcuFhT7qF%2FRbjy7%2F1oXGsVAVpi3HWx2jNr37xn8g%2BEBNfmJPhkXKu7V2EUgnrjpBsKpifetXmH9hDyxcnEkElh%2B5b%2Fj%2B5jfaXx0Ti4bv5bApBePYc8XyxURGVBU3oARwBgEpYTPnyd0dCSPyFl0evxWOpAkq3%2FW0c3KYTtX51tno1QiN4Jvhy6SJxPZCsD3aKZN1F%2FizgQ7%2FvMML7Jq8QGOqUBtV3oNEE%2Fvj%2BT0uYyYyhqwEowbuEqppWPPQFt7tv%2Fbj2YdC3UsrX3DjLajPIzxcyqA53ciFhrvufz27sT3D1y6mzyQuZD%2BvqKh86TrjFIjbcz7mk6%2F%2BNSauymV6YwpwLkdUz8JJmkmc4rVPKXXl%2Bfql4dIcAN%2Bt2g4u8EWbq1mpxFwknh%2BXw%2BISJaQMqTKpxXxflXVVenV172pcyabxWXTKx7prxN&X-Amz-Signature=3866d229389e8a5ebe72baa579026c1c54a7183d4e17a0edb154d7275490ba90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIW72ANQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3h6TEgrqStDWm27g1Fzwa%2FD8PjkKN2EznBm5rc91CfwIhANdEENQXrqvaZOI7ZchOT8fADUR8T90%2BnaxQMC%2B3RwWjKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B5xqTbuB4iJxlNhgq3AOYgDq%2B5dM9%2FxnmADxalBmZ%2FAnC6NGgeOpwZS33o1%2BySjYDOaAKrpMvr9HLOInSyBMzIe%2F0sXiJqaHOWxOnx7Mo%2FswtB9DZE%2FKCrwgBzqk5lqrTv12WmKvclFUGbVuVbUgFpdjrgyDGvBXYsoH%2F8uGtSd%2BjLfYpC1YeIYd9Jkk2AKT4MSRpYtFKRMYcLOGmm8ZnGEvjc8e5t1ap%2F%2FLIlAN6Q5jGBKH5JWOUEeaRf1zWRE0XgyXGrEfKtmdCvKpXPiN4Bs7Q6xHk0TzLlCW7VRRRBVsz35JdHoq79KgDq1oQWy%2FZGF1C91XIdywygIcRYDZX36DTzJX9tcgdhj85n6WzWZYQFXsqOmbp73Utwe4C9jJCaonfikAohSIRNMWvWZFFsiu%2Be0N%2BGGU2hR1QDQbDr%2BAMR6Y2%2FhoYHJjF9m5p0iMb0PhPdBQxPaM5C37T5fijenQZmuT9HutMn9wKay73H41K4b0l%2FXQKDw%2FqqrScT%2B4u20Uk%2FQT6l%2FwV4t8rs8QG09dx7hurpHM2odUFxrI%2BZ54Ew3u2pgiXqTcMU8RrwmKbfYLn0s6ApbKcz16kBDPkiGKm7DMIFadrnzG0TJu0nb1RiLknS6PMQkZZxYtkI8HHQaxygO6kDr37HDDTyqvEBjqkAZJAfiv2xo7MIr3GTdBThIVwW9mjasJBCq9v8xxnKDOmAeMX1fQ4Y8zmZEcbMFadHPVNGNfMZ4qyGJSsFqojuIoBG861i1xmnSFStKOKOuN4KAiZ8AOuh3GfTMt7greBKhLQ5Jzr%2BfDVp7n5U5cgDzfaCrt3RPMMYIk6ytJpXCCsOR4dt%2FWUAwzod04tjIQwooKIw%2B3YhiEBb83F1wZR6YFK9qAx&X-Amz-Signature=8e786c21ec026e10b3b0f2bf331cd6717661ae5e8b7eab31b1e75cb06abdc0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REWXFRFL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGehbqUTD%2FSSRAUTFgqGdyhO8VNqB8G582MjK%2FSoOcMdAiA0%2F7SLiSL4ZS%2FPrpuPFtETs8oPBdaz9VzCqLwjZx7QeCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuxJBeUnK%2BnR7dcHNKtwD8aRXuwfA7te5vIMDVeUigHc4gQYnNli1qsL0Jyhbx%2FPKypAKk8kwbY9d8KvoSGaud2gd0swL7CyrnQsBj8RkuVEPnowDEsNNXYvHtrqRCMjGzrYz20cqnx0GopEyyS64N5yZ%2BVolB29oKiJlkRZzVENcUxvskU34crkx2eZei9%2FDHsP6YkT%2BzgYJvmkZjb3rd17nXLkCJesb85%2B6u7A5DlBLycF3v14dEADPx5l6me9ILpFe6NDm6jM3RyQL1jiipadbhjYq3SuKvgpDVftjRlqBj%2FEwOKIC5KevTb267olLXkk44%2F0k4V2%2FwY40zn6NSNLw8uY3eIXneVPXUDIq%2F6qpzO5DoUMw9DRckS6YooRC7ztHAtltv3Ufn5EBQApJf90%2FSYovWI0rQq%2F7M2Zz7sS6WsBsEFkOUhDp1MpohmLR8XKLWPMV5nlZEAOMP5SLZg8Ln6vpwFr3kribsH%2FNG8HgOIXYg4s5iROCG0wKxcJ7pTZQE2VSUKGh2j59glh%2BEtMvWrAIRzDF2XA2crWYSLsKblhl48kq6jlJeBPwnWYt7obtNj6SAzgJpbDf6VZvfIkJsJPiG9BXNqLJ%2B4kNl3GjF%2BxlUYPGWQAmSQU3HbY45Wg9D56sQPffxgswlMqrxAY6pgEaEO2uGXWbU1V3NDWXznT4C12ajDDEovvuAe84vwe7Qw%2BE4gptN4zaPCy5MvIk0vj3CdyPVHONuY%2FIGUuEd2XQc%2FkeBDT2xuqNUNKXKw%2BOpNMiqAiJ1MQe%2F7fh%2F8LTGy7Fs6OD4xPPaE4%2BFtm88XMh4e8x0pcZN1bNqa4bAJze4sRmDg%2FlxxMLN4C0CtaIquTkt3Zx5LZswA16AoqUH3SgVVm15Oy3&X-Amz-Signature=acbca6cbca4bdfa439102c35be3c8879e40598591cd1ad643f73c2f3bedf740b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
