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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVPUAQJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVXPpdbbBFUJbC7H60xaazuVzRdc4DFepHe2embFiC4AiBv%2FChpcaBTk8dn3FXIPFX27ikgV0DUlMFCX6K23Sjt9yr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMkvc6z4XJDzTB2PG6KtwDtCAYzaCZyOgjAQfbgOaUuxy94KUIb%2F%2BFgn4x3N%2FbCkQOEKbndH4KHUN6wpudXICygMh%2B9Xn8XTqF4mwaDvggdvJ12pQPDQX4MrhroH%2BulsO0Q9OCtyJFwpeg7TK4%2Fznv6PXNY%2FVarEt6nr%2FCn5c%2FxGVbvXomVhswJ8JeYdBX7Bd9m8%2FfDi4ElsTrJO1SRmxiQhaDgT8gSg61cKZ2GzHJaW7XNqXfEszTwgcbZ1Y6t50x2GjzDtJVge5HIOVJ3ycetTnur4mm9qGv3UaW4PL9O%2FNZoRnWXgOfEIknOi%2BKZWXw8M5cKtPQAy7zDAi9jgRslT9IrazTlUDjY3CUT18Xh6QJic9KKhdDmxw5ZYjBH2V2%2FX8%2FgDLX1TluECSBs2R4brz5yafeCud%2BQ6WXWWL9InfFpGJEdXdlvD7ClvFG7SiAiUEguQgXE78huvOPOYxtrS3CQ%2FoIc4pOM4sGx00gfQ6zwDiNEq92S1CC%2Fi0mhe%2BAZMzlvNiCzj3nHl%2Fjdzj1YhkOJXh48TLnvUZQbGfeTj68hRee9INtQd2NLxRPFv3VyKMyAICxFUe7aORiukBPzib8Yi0JHJ%2BjnGZri9NA6oJua77qpxT%2BZVFE9EBBQpA%2FopoIYeKhq3hM9O4wl%2B%2FVvgY6pgE3GIRrPoge26HE%2BP4%2B3I4VFnyZLIk0SD23JbzuWMcGzJtU3x0D%2B55bJmUBq1Vw2AzBIDjBtahLqht%2BNzJYhaw8id4xoaiIWTgWZNQ2TP1tx%2Fde2UJdE75UCMTpgoi4JjaPCUofNDPVdIajbbyH9Er3eFZreppkk9Q7xfzX9tQ2S7GrlcedhjOiCZil2f%2BBeG0r%2B7p2vWOLIGbJD74N1Hs6WdGPxQ6x&X-Amz-Signature=d2cfeb9faa3d38f694b9ee93716d0676a2f5e15a234241c70eb7899edecce655&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVPUAQJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVXPpdbbBFUJbC7H60xaazuVzRdc4DFepHe2embFiC4AiBv%2FChpcaBTk8dn3FXIPFX27ikgV0DUlMFCX6K23Sjt9yr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMkvc6z4XJDzTB2PG6KtwDtCAYzaCZyOgjAQfbgOaUuxy94KUIb%2F%2BFgn4x3N%2FbCkQOEKbndH4KHUN6wpudXICygMh%2B9Xn8XTqF4mwaDvggdvJ12pQPDQX4MrhroH%2BulsO0Q9OCtyJFwpeg7TK4%2Fznv6PXNY%2FVarEt6nr%2FCn5c%2FxGVbvXomVhswJ8JeYdBX7Bd9m8%2FfDi4ElsTrJO1SRmxiQhaDgT8gSg61cKZ2GzHJaW7XNqXfEszTwgcbZ1Y6t50x2GjzDtJVge5HIOVJ3ycetTnur4mm9qGv3UaW4PL9O%2FNZoRnWXgOfEIknOi%2BKZWXw8M5cKtPQAy7zDAi9jgRslT9IrazTlUDjY3CUT18Xh6QJic9KKhdDmxw5ZYjBH2V2%2FX8%2FgDLX1TluECSBs2R4brz5yafeCud%2BQ6WXWWL9InfFpGJEdXdlvD7ClvFG7SiAiUEguQgXE78huvOPOYxtrS3CQ%2FoIc4pOM4sGx00gfQ6zwDiNEq92S1CC%2Fi0mhe%2BAZMzlvNiCzj3nHl%2Fjdzj1YhkOJXh48TLnvUZQbGfeTj68hRee9INtQd2NLxRPFv3VyKMyAICxFUe7aORiukBPzib8Yi0JHJ%2BjnGZri9NA6oJua77qpxT%2BZVFE9EBBQpA%2FopoIYeKhq3hM9O4wl%2B%2FVvgY6pgE3GIRrPoge26HE%2BP4%2B3I4VFnyZLIk0SD23JbzuWMcGzJtU3x0D%2B55bJmUBq1Vw2AzBIDjBtahLqht%2BNzJYhaw8id4xoaiIWTgWZNQ2TP1tx%2Fde2UJdE75UCMTpgoi4JjaPCUofNDPVdIajbbyH9Er3eFZreppkk9Q7xfzX9tQ2S7GrlcedhjOiCZil2f%2BBeG0r%2B7p2vWOLIGbJD74N1Hs6WdGPxQ6x&X-Amz-Signature=c130c4d24e587d5b78cc19d56138f9f530ec41c06340c4b58838ad9a7274e265&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOBAPZM5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNtqa7%2BRyEnv1ZlyYFUbi5OLOJeAoph7vv1OmUCcV1qwIhAOPfJ13ufp%2BtUS8hPIZ8JpYfiYJWr5od%2Bc0wGTC0HSkDKv8DCBYQABoMNjM3NDIzMTgzODA1IgzncWZQnRdPmiocV8kq3APQJuegZCUGvKh9GI8hylvx7aPXNfl9IwXqDNGRMZ9Mk%2Bjr2b5qvvgcMFAjQW2UQRe%2Fteu7ZbXTKGKJ2W8N%2FJ9IjpgPbgDuqsRy6aI07XDIAKJdBEJbR8zCoxEGp2r%2Fv6eX2kU%2FrXnMHnO%2Bs3XcHczTDKAJk1QkW4zcbLuzVVnSK%2B28Gckl5GnFPCbMK8JvH36DK5VyWP0NU2uV9d3KWDnNZNtvHzvEfCXhaFsHazrk41gNZwj1vLgcVd%2F5qB1Fs2hpwQKw4C6%2Bo373rSwzqh67KHW5eRS8jmLggZwulPXhMYcftNQkJu%2B%2F7b4hBS7ManoNuLRmr7WJPK%2B6z2R2YT8kslLSrmk3ccWUcQNcB0a4FceZyGca%2F0CkzMHSqNgeZ5EU8UjUXldzmqjwkqOXf38n%2FlsJkmeNd4zl3%2B44oouPX%2BhKiSEWrpVnhPCHxXau8qv9wU8uBwRyslPy7lARmw1NLl53kyITHFlX%2FbIQZLazqh8W0sbwIxZOn3z4Bt3ceVTYVR5pEGGbEI0%2FdaRHNhUfTF7X%2BfLztRNDrLNzowSj2v0GlzyVrxqWQ88xu%2BNYbdZiHwVE%2FTb1bWcRV85DxDFBLNQsd53oqcee%2FsH90Gx63WbjSvZrH6DJ2IYSdTD87tW%2BBjqkATnr17P762UyhaUEdJHhkuV0vmZUEU5EaCHauzWgjtHOYDH1fMEmIGsETJU1H32hugB43dvgqHt6U7zCAlONWpgHxntgxWJF1%2B4oNIu%2B2E5bP0%2BrE%2B%2B3V8rY%2FyxKMwtHYsevoeBFAO4XgedP1vnqV8h9L4gm1SCfV4%2B0QAqNhVJWp5xKeaceD2w%2FSSA1mTSlLN4ODIppxDWWx1K7n3vD2cmGHnYr&X-Amz-Signature=8f7065742f675c1b5ccc090bc5a050856804c7dae90a58029c95c8ae0224d444&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQZREKV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt%2B2hAmGKquQpKhggrBkH7prFAKRGtXk0BhHj5ktf8BgIgTFUsoYKTR%2BbYmt8gLHvhCBiTgmnr17Oc9T%2BmOBwdqPoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDM%2BTm%2FI25Ux54dpESrcA6jHQ7U216gXtylI%2BAZ4dy%2BGjqZ37obctovzqRYSJ0MQOIx%2B8anGLAKAkX%2BbLo8XTlhnV%2Fne2qfuPNONAu%2FP7EuGTlesIDvxLU6VL98oenK4fXqvWMhNdHzxioJxici6kqqgsB5dyRff6tg85IXES9I3sdL0vU%2Ff%2BOecWa2JVKDYDNTmjplxa1GDh2HiX%2BZl51jzfbviY2FUrbSH0Ip6pPP3H34fv8C24F4j5u9nj5zXYBTe2jguhoKbWFpSCy2XUAge3nUdRaHxOVBnTJ70gMV9c8uk5yBEN7UCiE8i3bugteNcmRJgZvDCYFUBUAg5HlHdAIQcYbeSdGfV8I4VdEmuCynku9zqFhDVCFODo2UQpdvRUxSdr7XC%2Bj48Vkdqo9xwYgv86%2B1L5vKKi9kECMBAWcY5qdYz%2BXnhCOKvlRFoowPjD2bYw9i2xXABg8Mphf9x0QgWIKfj9HWWdCmplfmi7xIiwUiemh%2BGPD1E7%2Bh7QToNAuMpBbezsg5ppAvIi6avh%2BOyJzA8LMI%2FLX7b7t8WhL2rQ9wJj1xjYlLKb%2BxNBMJWUI9x%2B4G6qfzT1cnU2OM%2F9aQ%2F0xIYZaBsSZ1vvZXNuSptr7GKKtAJZZ1k%2FCi4YppwyjkoDcmSuEXaMIPv1b4GOqUBvggWAigl6fp0Kf8OAV2LdISW%2F%2FDy6UzlC7I4sOeOpwwRMhGxHLffyQoqv7tXQUJah%2FShAL8jKAyQIQ4aCo9rAUBURW5RR40I6gr7zgEZQlTKNsZgnUNmmWOgAWjJQpH%2FklJId5zbcDhhxeuqmPrz6B8Md8J7vVT%2FIXHnZUf9UYD%2FJ5KJYFAdUq%2B8f0n89nhNYZPkgGviqbufMXgOZECwZEPGMc4t&X-Amz-Signature=7ca256f5549345d30473cb0e4d43e9435c8fe77c725b068fd8eb4e02d9adb530&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVPUAQJ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T150516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVXPpdbbBFUJbC7H60xaazuVzRdc4DFepHe2embFiC4AiBv%2FChpcaBTk8dn3FXIPFX27ikgV0DUlMFCX6K23Sjt9yr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMkvc6z4XJDzTB2PG6KtwDtCAYzaCZyOgjAQfbgOaUuxy94KUIb%2F%2BFgn4x3N%2FbCkQOEKbndH4KHUN6wpudXICygMh%2B9Xn8XTqF4mwaDvggdvJ12pQPDQX4MrhroH%2BulsO0Q9OCtyJFwpeg7TK4%2Fznv6PXNY%2FVarEt6nr%2FCn5c%2FxGVbvXomVhswJ8JeYdBX7Bd9m8%2FfDi4ElsTrJO1SRmxiQhaDgT8gSg61cKZ2GzHJaW7XNqXfEszTwgcbZ1Y6t50x2GjzDtJVge5HIOVJ3ycetTnur4mm9qGv3UaW4PL9O%2FNZoRnWXgOfEIknOi%2BKZWXw8M5cKtPQAy7zDAi9jgRslT9IrazTlUDjY3CUT18Xh6QJic9KKhdDmxw5ZYjBH2V2%2FX8%2FgDLX1TluECSBs2R4brz5yafeCud%2BQ6WXWWL9InfFpGJEdXdlvD7ClvFG7SiAiUEguQgXE78huvOPOYxtrS3CQ%2FoIc4pOM4sGx00gfQ6zwDiNEq92S1CC%2Fi0mhe%2BAZMzlvNiCzj3nHl%2Fjdzj1YhkOJXh48TLnvUZQbGfeTj68hRee9INtQd2NLxRPFv3VyKMyAICxFUe7aORiukBPzib8Yi0JHJ%2BjnGZri9NA6oJua77qpxT%2BZVFE9EBBQpA%2FopoIYeKhq3hM9O4wl%2B%2FVvgY6pgE3GIRrPoge26HE%2BP4%2B3I4VFnyZLIk0SD23JbzuWMcGzJtU3x0D%2B55bJmUBq1Vw2AzBIDjBtahLqht%2BNzJYhaw8id4xoaiIWTgWZNQ2TP1tx%2Fde2UJdE75UCMTpgoi4JjaPCUofNDPVdIajbbyH9Er3eFZreppkk9Q7xfzX9tQ2S7GrlcedhjOiCZil2f%2BBeG0r%2B7p2vWOLIGbJD74N1Hs6WdGPxQ6x&X-Amz-Signature=3862859f2fa513cc169e651848abcd9191ffa7cbfb53672c3207c22a6f16a0e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
