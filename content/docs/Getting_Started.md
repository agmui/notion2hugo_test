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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667BQFSL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnOxb8gUk11094hnW6qlFdqGDzUJT13yI9Iw7zrOmGwIhAMVI%2Fec340ZoXliLiq3K1OP91ivB1NoFqEm%2FBhnCKOiVKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS0pIx8VfFufiCgmcq3APraFHL1ul0rdMDdJPjMzDISGGxHDpVh7ESJdK%2FObfwZdIwarFHMQzIsl0a341vOwpWOU0mNoGIfnGySCI4bU2N9USIKiG2n9PG2uAeHTx0rT6%2BbRv%2BqBRG2TEursW08wv9lDuMgWX%2BSOUl2PL73KWueUSw9I%2F4E2L6nb0CCrrSxs9WWxZcF907ugwgqtQxvEd9dy5PN672YpvIgWiIQTF9QzS8W59gcZYp5pZWsPob8tACPXzpp%2FaiA7ZI1%2B6tlx0XdVfKgJip8UE9TvwKeZHQCELUHtTJshJyqhKOWffEMjSllCZNAT%2FZUdSdLGDmXIYZ65UUE75BU2DabKukKWMay0UWDjPpYr4IQNDkZKFkLcY6RORoqwE7gN9ANf%2FktbATwGjHPvfZyWmDmewbRIzHQ5l%2BmKgAA3ywl5R%2FapMpVPEpKuz8SxDMGqzBNcvDu6Ph6M7aR3aEULDv%2FPCsRIxlErWFuhR0f9iNYBufxO%2F1%2Fs7mBvLDn5pkXrVXBIxuxxVgKTcG7ge4SWMZjF8eX1K2F2wfVt9L%2BxTLwQAAeYvRr1wvrTTMr33gok6KaeF6B9%2Ft92mCsRXAA%2BUrn9Mtwe%2BOBKY8ye9lJ1tRd8jlKqidKYHnbJhilsXrIgILpzD3hem8BjqkAXUEaaw3NQiG0auZJS%2BqabWZ4J0oljSeESOVRv9nMMuU8HppPatBKra8FQKwn7FHyYRpEa7bXDXro%2FScWUfeHjb%2FNE348v5L7zeqjXwvkix2oSJCj76y0Qe7gAP8bhNd%2BaN0oSbZFuSXz5d4qmx3TaiLMVfPS8qn%2F2TbAOLvP0tjAQaklyVidvOSJf1bMOuJz%2B9C2C3JwUqznWXcx6s5%2FLIuUQ%2BB&X-Amz-Signature=5227cbdc0589ee4003621f9c75ebcde6c55ebe6184ecf71e0f6898d4653c5130&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667BQFSL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnOxb8gUk11094hnW6qlFdqGDzUJT13yI9Iw7zrOmGwIhAMVI%2Fec340ZoXliLiq3K1OP91ivB1NoFqEm%2FBhnCKOiVKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS0pIx8VfFufiCgmcq3APraFHL1ul0rdMDdJPjMzDISGGxHDpVh7ESJdK%2FObfwZdIwarFHMQzIsl0a341vOwpWOU0mNoGIfnGySCI4bU2N9USIKiG2n9PG2uAeHTx0rT6%2BbRv%2BqBRG2TEursW08wv9lDuMgWX%2BSOUl2PL73KWueUSw9I%2F4E2L6nb0CCrrSxs9WWxZcF907ugwgqtQxvEd9dy5PN672YpvIgWiIQTF9QzS8W59gcZYp5pZWsPob8tACPXzpp%2FaiA7ZI1%2B6tlx0XdVfKgJip8UE9TvwKeZHQCELUHtTJshJyqhKOWffEMjSllCZNAT%2FZUdSdLGDmXIYZ65UUE75BU2DabKukKWMay0UWDjPpYr4IQNDkZKFkLcY6RORoqwE7gN9ANf%2FktbATwGjHPvfZyWmDmewbRIzHQ5l%2BmKgAA3ywl5R%2FapMpVPEpKuz8SxDMGqzBNcvDu6Ph6M7aR3aEULDv%2FPCsRIxlErWFuhR0f9iNYBufxO%2F1%2Fs7mBvLDn5pkXrVXBIxuxxVgKTcG7ge4SWMZjF8eX1K2F2wfVt9L%2BxTLwQAAeYvRr1wvrTTMr33gok6KaeF6B9%2Ft92mCsRXAA%2BUrn9Mtwe%2BOBKY8ye9lJ1tRd8jlKqidKYHnbJhilsXrIgILpzD3hem8BjqkAXUEaaw3NQiG0auZJS%2BqabWZ4J0oljSeESOVRv9nMMuU8HppPatBKra8FQKwn7FHyYRpEa7bXDXro%2FScWUfeHjb%2FNE348v5L7zeqjXwvkix2oSJCj76y0Qe7gAP8bhNd%2BaN0oSbZFuSXz5d4qmx3TaiLMVfPS8qn%2F2TbAOLvP0tjAQaklyVidvOSJf1bMOuJz%2B9C2C3JwUqznWXcx6s5%2FLIuUQ%2BB&X-Amz-Signature=6007e33b9cc5b738b0005071d423405f02a536d68898c9d383eb903233d23cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QRVKAP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQdbclKsKTQLZNqFpAeVE4VLcNS0rQOl%2BEHTDOkLZGgAiB0tUta%2FBFm7SEboNYtlhxVt6AODXX3GAzOp9ThQ%2Fe5fCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhofrO1wfkdGE6vdKtwD5S4Ay7%2FJdfBw7BVsdhIu7Y2wBcMHBIKVP%2FNvvlCoP1GfV2KHeWh%2BAAVn9dwuS43%2Fq3DhyM6rD5150lh0%2BzKCXZ4nffVC3xrmOMXRp193rlODMtu45EOH70SL8J2eD3A6wgKCHjiyo2aOZQlEFDIMfCTAWk9x4w46rSxEv93R44Pl3m5N8biVV99T%2B8hIPL3ozUazZprAMYck4zM2ed%2BRO%2BXfj7IkElRhczkc6JmGw1Zjc7RPyWNexq%2F7xFNRxpvNMq2DVKiJJdX3hwLM5m1%2FK93MeAoayiQeUwnK%2B5OHOX15UhxlYRdfAeBVNvX7upFGOmZFKS2TvkgfMKeNBwV4Vy38hh4oxvgjUasSJ0Ns5%2FcYKrFTZaniuqvCkXr4OgrMZS7TGglRBUJDRWjIRs7s4qNQLvE9CGxi6NjDXve%2BzwewoFYnuJzti4NwNIvrfSxCayC989BSWsMXNfkzIjYs2qgaBg4Uu0XknE69kH2JO7mb3upi8n6Ddde%2FgKPBY4wRLFei8yovOJMeIBWxq4PCRb4TK72kOWjgWiw2cZ0QqoQtztwrDlmGpVfAs6yTXZsKhxZQRa44XP7zIEKaYR5k7V2%2BoS1cQ0FM4cYd1on13291VbHglq5dqEsznG4wl4XpvAY6pgEKE6li4YlRzDA%2BYcFz%2FgbK8ohAZAz4ASvQgf6htquxAwlUjBO83b4EOF53hoSFwsNC4yUXx%2FfH2HkHq8NPFTW%2FaNILGlQ6Yv4bzCzXma7h7SQLLSCUPBHSCZXpB8ad8vKfeOfh26vMRTNW5UMiIAC1e4Kv3a19adMP%2BN6D9b0EuXh767oEzXWcOWGZj%2F2poh2wEGOgzSPYH6jV8EqPRMzM%2BeNAnFIV&X-Amz-Signature=01d0e72d2b286bc6b67cc3f862de93fc582d661ad5ae5cca7a23dbb8a2db74a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X42NH3BE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwCZKz5sf180JYBsNw3MUDj74%2BhJBIBdcg%2B3Sn88%2BvXgIhAO32pMgWrnJW00AuCTSfOEM7yDLf2Qo4XK00tpBdzEDJKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEnjsbI9XhNCGqbMAq3ANTVyLZFtLEmQz3oNsSgRXtd9epfWZ%2F5MrXHIAuACRZ8O4vAUr5XgeBGyFps7MU3sm8SWgJtlFy7GpvnilM8RxraSL3WtxTr3StsAPH4CB8KcjUmEvtYLCn3vnyumR44CJbNrCGFhu%2Br6lXdKh7d6VzhrRmUNdzS5JxJBCR%2F9RZWL3NVtmZYS%2BPnowbtiev67XGiw13mI%2F2%2FhQHEpbQ8Z9Z86qH3B5XqHZAw3TzTTD0lRlK18DZszaLlVnJETHjQxS0w%2B1KJEIl3Bk%2F%2FhSSNXWw3i0D2iorTn0nVWTqvb%2FhaJw87zVfrXU%2F41YvrVQG99kVZN7Sg%2FQMGsrlOM0GOzgsI8Gtd%2FiGqqB8TVTT96gfaKDrNEVJyJsg7Zf12FMHEMR6CmIEotAkQSXqb4U3GrqqWrbd%2BbYVLNSnrtVkbvIsuQko3%2FmQygcZa1zwyu7hIfG13GpVmBcbAFf4NXbRw1pGPI9QfaZa6BCrz9zd1NfuBJilJGBAs%2F06eVJ0%2FuD9yP2NVk3Q%2BQowkIRXNYTIh1%2FrzvYyQoT%2B32r7EWdMTDP4OhKx%2Fc2FMQGl%2BsPKpXji1xoBAqXnnx2gmRA5%2FKcu3AyR1VDrwMZbcy1CGDLsq1IT%2FmY7rlrAzHI5erO0ADCXhem8BjqkAY6U4x9SB1UC9C288yuDcLmWUVtkerhQDfSgsi9p1XyMyzYdZi7bjwoPfVVmkrzrmbK1bQXSzMs9GkGefp2XUXw9fBr5%2Bg8jtcARNTD52WfIZhearzt8yIzOysY3cUeN0TM9lNdNHbyH%2FsOBxqp9eZQnbUwrjyZgeZnZJYkd8P0pABwbsKwy5udG450cic9WfmBTyYKnb9QjoCimPfOGgAtpGeMa&X-Amz-Signature=74b7f44b2b6bbb00bee377545349cebdf2d5e66d63735346ce78d6da8dc8c9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466667BQFSL%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLnOxb8gUk11094hnW6qlFdqGDzUJT13yI9Iw7zrOmGwIhAMVI%2Fec340ZoXliLiq3K1OP91ivB1NoFqEm%2FBhnCKOiVKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxS0pIx8VfFufiCgmcq3APraFHL1ul0rdMDdJPjMzDISGGxHDpVh7ESJdK%2FObfwZdIwarFHMQzIsl0a341vOwpWOU0mNoGIfnGySCI4bU2N9USIKiG2n9PG2uAeHTx0rT6%2BbRv%2BqBRG2TEursW08wv9lDuMgWX%2BSOUl2PL73KWueUSw9I%2F4E2L6nb0CCrrSxs9WWxZcF907ugwgqtQxvEd9dy5PN672YpvIgWiIQTF9QzS8W59gcZYp5pZWsPob8tACPXzpp%2FaiA7ZI1%2B6tlx0XdVfKgJip8UE9TvwKeZHQCELUHtTJshJyqhKOWffEMjSllCZNAT%2FZUdSdLGDmXIYZ65UUE75BU2DabKukKWMay0UWDjPpYr4IQNDkZKFkLcY6RORoqwE7gN9ANf%2FktbATwGjHPvfZyWmDmewbRIzHQ5l%2BmKgAA3ywl5R%2FapMpVPEpKuz8SxDMGqzBNcvDu6Ph6M7aR3aEULDv%2FPCsRIxlErWFuhR0f9iNYBufxO%2F1%2Fs7mBvLDn5pkXrVXBIxuxxVgKTcG7ge4SWMZjF8eX1K2F2wfVt9L%2BxTLwQAAeYvRr1wvrTTMr33gok6KaeF6B9%2Ft92mCsRXAA%2BUrn9Mtwe%2BOBKY8ye9lJ1tRd8jlKqidKYHnbJhilsXrIgILpzD3hem8BjqkAXUEaaw3NQiG0auZJS%2BqabWZ4J0oljSeESOVRv9nMMuU8HppPatBKra8FQKwn7FHyYRpEa7bXDXro%2FScWUfeHjb%2FNE348v5L7zeqjXwvkix2oSJCj76y0Qe7gAP8bhNd%2BaN0oSbZFuSXz5d4qmx3TaiLMVfPS8qn%2F2TbAOLvP0tjAQaklyVidvOSJf1bMOuJz%2B9C2C3JwUqznWXcx6s5%2FLIuUQ%2BB&X-Amz-Signature=313b68c5393f57538ace8d7027b4a53d6a1dea8a563bef0d3f64495a5152d915&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
