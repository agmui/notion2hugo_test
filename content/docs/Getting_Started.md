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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFWJQZJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEDDRBqUvxp4ZjRWjIup%2BqD00JWrYcuBB7rQApln7IWvAiEA3ms1JFE8ozcliHBaR3E4yxJ0TBq24gZFP1gLhQ3uOU4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxlVuL%2Fv3hg6FvnbyrcA8cwwhRQL4hhUhCBuAL9JC7nA1SmyHxdo3gBKwNut2%2F2tEURzQQZXJeXVxz6wcqB87ixr6%2BAYVmFJHgWwfyhhqtw7sH7bHq8%2BPodBClBl4sayt0NO4Ux8nAmGcqqUpMoP%2FhafFXHFHbEqNluD8pBEjOog40p%2Fkf83F4Oy%2B07XcvEVoDKUP1%2FO4sAnyKV7s1bo1rptF2wMDRLBTzPElefYSFnjAPpFbKXcivJQEWDvoPCXvDt%2FOgtW0vNxRzex4O4u0OzSO2mC4Mt1c%2BFIhezOMoDL2DRq889WEo5IkE6ZKZrQb0O5xJDEaPQfjUMx8A%2FU1E9H3jp3ugUHg5QKym2lOu6V4iUJ5gG7tUD%2F3cC2YdOJ5Dz6HtEtHghZJcjqyUxefJz%2BWWoASo4B2aOoNc%2FpNU56kB8Pt6micG1uldBbwIgFR4kUwghzRl1axd6kH0kkHEOcEYa%2BdUIAPElUkT0vooFNsEZ%2Fdj8W6QHlXIRP%2BSQWFOeHViIG2NLzRbu92ytXKSIbdQGjylP1YVSZtItWJPN%2F7A2r4tz5nNC4ArtVwkZVQwcw0BbaVNGPRGry0XWIKNBZdtnBBJIh0vZK2hpxUXwQmlkNi0O3iBd0WfMYo%2Bxd86So0XPiNJAXZ3GMN7%2BvcEGOqUBwPbQTYK%2BK4r9WfLgy13fLGxCUN1kBV7MTfybj9ZWj%2BcxsCcR%2B5OjSUKVGhfc%2BEyRdDXiSTty0%2FGuipA1CgF8hRA8SkmBCW1TTmoUEoOtvqG6QxWN3ea%2B%2F4CG4l4jJAthByH%2Bm6FIpC8%2F8LY%2F50B8eG8auOWOgzTqh3VHKzk3DCQnBrKK79JQDBZcmo%2B7wuqaB47F4h7ySc3cJSdDIvz9rS0qV%2FsT&X-Amz-Signature=b2e435fb4935ae0a8f14f6c32a19d1ec17d6e0cf78c439cdf0930862a31e3e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFWJQZJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEDDRBqUvxp4ZjRWjIup%2BqD00JWrYcuBB7rQApln7IWvAiEA3ms1JFE8ozcliHBaR3E4yxJ0TBq24gZFP1gLhQ3uOU4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxlVuL%2Fv3hg6FvnbyrcA8cwwhRQL4hhUhCBuAL9JC7nA1SmyHxdo3gBKwNut2%2F2tEURzQQZXJeXVxz6wcqB87ixr6%2BAYVmFJHgWwfyhhqtw7sH7bHq8%2BPodBClBl4sayt0NO4Ux8nAmGcqqUpMoP%2FhafFXHFHbEqNluD8pBEjOog40p%2Fkf83F4Oy%2B07XcvEVoDKUP1%2FO4sAnyKV7s1bo1rptF2wMDRLBTzPElefYSFnjAPpFbKXcivJQEWDvoPCXvDt%2FOgtW0vNxRzex4O4u0OzSO2mC4Mt1c%2BFIhezOMoDL2DRq889WEo5IkE6ZKZrQb0O5xJDEaPQfjUMx8A%2FU1E9H3jp3ugUHg5QKym2lOu6V4iUJ5gG7tUD%2F3cC2YdOJ5Dz6HtEtHghZJcjqyUxefJz%2BWWoASo4B2aOoNc%2FpNU56kB8Pt6micG1uldBbwIgFR4kUwghzRl1axd6kH0kkHEOcEYa%2BdUIAPElUkT0vooFNsEZ%2Fdj8W6QHlXIRP%2BSQWFOeHViIG2NLzRbu92ytXKSIbdQGjylP1YVSZtItWJPN%2F7A2r4tz5nNC4ArtVwkZVQwcw0BbaVNGPRGry0XWIKNBZdtnBBJIh0vZK2hpxUXwQmlkNi0O3iBd0WfMYo%2Bxd86So0XPiNJAXZ3GMN7%2BvcEGOqUBwPbQTYK%2BK4r9WfLgy13fLGxCUN1kBV7MTfybj9ZWj%2BcxsCcR%2B5OjSUKVGhfc%2BEyRdDXiSTty0%2FGuipA1CgF8hRA8SkmBCW1TTmoUEoOtvqG6QxWN3ea%2B%2F4CG4l4jJAthByH%2Bm6FIpC8%2F8LY%2F50B8eG8auOWOgzTqh3VHKzk3DCQnBrKK79JQDBZcmo%2B7wuqaB47F4h7ySc3cJSdDIvz9rS0qV%2FsT&X-Amz-Signature=35252c13c1eec756b84814f4b60aebbd216e1172ca77c84ed9ca7880e18ebf8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFWJQZJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEDDRBqUvxp4ZjRWjIup%2BqD00JWrYcuBB7rQApln7IWvAiEA3ms1JFE8ozcliHBaR3E4yxJ0TBq24gZFP1gLhQ3uOU4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxlVuL%2Fv3hg6FvnbyrcA8cwwhRQL4hhUhCBuAL9JC7nA1SmyHxdo3gBKwNut2%2F2tEURzQQZXJeXVxz6wcqB87ixr6%2BAYVmFJHgWwfyhhqtw7sH7bHq8%2BPodBClBl4sayt0NO4Ux8nAmGcqqUpMoP%2FhafFXHFHbEqNluD8pBEjOog40p%2Fkf83F4Oy%2B07XcvEVoDKUP1%2FO4sAnyKV7s1bo1rptF2wMDRLBTzPElefYSFnjAPpFbKXcivJQEWDvoPCXvDt%2FOgtW0vNxRzex4O4u0OzSO2mC4Mt1c%2BFIhezOMoDL2DRq889WEo5IkE6ZKZrQb0O5xJDEaPQfjUMx8A%2FU1E9H3jp3ugUHg5QKym2lOu6V4iUJ5gG7tUD%2F3cC2YdOJ5Dz6HtEtHghZJcjqyUxefJz%2BWWoASo4B2aOoNc%2FpNU56kB8Pt6micG1uldBbwIgFR4kUwghzRl1axd6kH0kkHEOcEYa%2BdUIAPElUkT0vooFNsEZ%2Fdj8W6QHlXIRP%2BSQWFOeHViIG2NLzRbu92ytXKSIbdQGjylP1YVSZtItWJPN%2F7A2r4tz5nNC4ArtVwkZVQwcw0BbaVNGPRGry0XWIKNBZdtnBBJIh0vZK2hpxUXwQmlkNi0O3iBd0WfMYo%2Bxd86So0XPiNJAXZ3GMN7%2BvcEGOqUBwPbQTYK%2BK4r9WfLgy13fLGxCUN1kBV7MTfybj9ZWj%2BcxsCcR%2B5OjSUKVGhfc%2BEyRdDXiSTty0%2FGuipA1CgF8hRA8SkmBCW1TTmoUEoOtvqG6QxWN3ea%2B%2F4CG4l4jJAthByH%2Bm6FIpC8%2F8LY%2F50B8eG8auOWOgzTqh3VHKzk3DCQnBrKK79JQDBZcmo%2B7wuqaB47F4h7ySc3cJSdDIvz9rS0qV%2FsT&X-Amz-Signature=595753964deff77ab6364daf7ff3bc73a95b1da357e9454746da238cb5af0587&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUI5JONY%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFmTid%2BgjWUaBtD5ciHCbX6L%2BnIW7y4iB08zaBwmEl9KAiA00oYpqdU%2Bxhzkmanp%2BdrxJWB876OZk766uPb6ReZcDiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLdOMWAlqs36u8pJiKtwDQzgswjryW9XVoqsb0QIsf4SUHe2eEnzQiY%2BeXLZlohS1BMQCJu0%2FYZPYjnBipU%2FUY0T0g8z1vpNZxgARhLsU%2BD1BjQ%2BN4cmrJ34K5amgV7Ml3X%2FY6gJ3MDl8MK7qQ1Do6bVnA7xzkS1IpOQkbELLU3uzqxiSj6xKQOnqZkDv6%2ByWH0H7l4oNU1%2Ff0dP2MygaLwN%2FlacsBhBuJ8tjE515VGCdpub4nNv4CAuaY%2BTa8YJicxiqt9Q4tLzFyGRD%2B8Rj%2F1QDRAfGpeX0dOGp1s%2BHlCs0IWrnlkV68pT%2B82FieV9jiN8OQcEWpMOYj23dFgAxV7ckDH52GTyC6qoPJb8rb%2BW7Lx%2BtN0Rtr%2FtjTOqP6gmfUWutpM9hoqTimEYRL9Ras7rV2Nx%2BSOCK%2FJgwOmx1f1gk6QEjlQIDECnuNb5u8X6bgFAFkUcoS8UNnSe80d3GGvOa%2F9BriOI1hW1zzatZAcAmiirg%2F%2B1Qi%2BjkOQgFWBX4YktxFFSDLfI1TedfQRO0I3aEjIZCtaLFgEI0A6d%2BeATB4xdTphqKVbQaSLnltxexnR6JAGHU1okoPl%2Fkyb%2Fbz0eNafkOs0uMhgGJyH1wLNs%2BG4WjiYH6k1%2B42Nz4nlLJw%2Fq6kY%2FzxjZLiB0woP29wQY6pgEtatJi7x6utTIViYN1ri6ObB%2BOAV9sRtPevctNtG98XmN4Lb0czbc5MhG%2BRkJwgyvuwelsuOH4hDYkrDlI8JQxS3KdpwuOolmtXakpZjw%2B8G%2FuY3zHkWCZFW8aJ15LB6iJDx85ODlxA3lJ7rWJ5cXcxNp2qJN69UJDiK%2BWcuWLi%2BCKZfGuT7ZznQbyt4XQ767T0FFuYGxkLPNfZXvU0PAyeA06ZtGQ&X-Amz-Signature=6173a88193354a0a71a0d5f2a90fd5da0d594020bb883e03eaaaec2b3e87c101&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYI55UVI%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD6NoxXPeJB8pq8STWyK8LvqLm6CPFH1n3ETS6JPT%2F5kgIhAJdWiWsyV8PTCDNlHC8TPES%2F7NY4if0g6PB5FfHS6E3WKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeBsCeUpYgIISVRSwq3AMMKuf94XBQxSgbbXCdePhSpV9Pb9xrWgRpZJ01qkPflzcRx20sDVR%2BrsE9YnqWrfbWiOGZIYZ572hsVwlr9pfnkGdR9N5Zr3HPqlogTMsYdxr4DXSxlhv9QLTnfk1LtTsuC7v5HqoiJT0VHXsZ9Xx26C%2B7D0Qhxa60ZG3WbZ%2FACqJBOctXuNPQfyhltwtnrh1p%2F9ND84O%2BXPtdWoaitdP8AJ6Yo6MnSDrFAWv12bTOxbHkJzF2apd4uQRrxPslrSKY13D%2Bo6E3uVXoj7hMjaBW%2BXt1a5uS%2FzJtCY5kbR87%2BQyRdQaVivLvD0GazK3hUj0B7a9lmLxkIlYcUmqV3thS3cTJpwDRMYHeIl2ST6Ip8cN2m5Z9%2BklB8AHuDdRx0K090v6Fu6NNVx5Jpn9GXekjYLkxsmNv0n91Z2qRDNffZsPXUnAxCD6pyy%2FytjYhGLMlveqfJqrbgTkU4t1Y9UBDkuhoG%2FejS4Gw4R6wk%2FnWR68KtZ0xitxybyzdvMltC2GB2JRkYbPRXBz8GdaxWc58ZxIBfeOX3g3oV5k%2BSMgisdps5H6AsO2T2EQeP5yJT%2BFTPkjCeiT2WTHwBFP0%2Fdl1ycTtWgTcZoYwvKWaVdqX3ZyWFXetiMFqbBuJPDD5%2Fb3BBjqkAWA6SoNjBQvEMHdooWU4Pkxvh0INV0chrVhXD%2BWj1g9JFXhnBQ3o3mu7A6i9U5qbwleSyMtqyBhGT3XB17L%2FjV40fLF%2FiMSqnhPSNyIdeF1Mgjzi44uBvqnBNZflKVc%2Bxe9X6WcR5mBzGrbCPacojKD5CxmyiUdheuSxWW0%2F1naf8irDt%2Bqb7RVJpdQ7AMj5chaRL8TFrKcqjd1%2Bev9QVe6BK4LQ&X-Amz-Signature=61b0bf982193b16b634de65e9e04bd8e33f4cf9d4791cda18d29bee02b9ddd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFWJQZJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIEDDRBqUvxp4ZjRWjIup%2BqD00JWrYcuBB7rQApln7IWvAiEA3ms1JFE8ozcliHBaR3E4yxJ0TBq24gZFP1gLhQ3uOU4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxlVuL%2Fv3hg6FvnbyrcA8cwwhRQL4hhUhCBuAL9JC7nA1SmyHxdo3gBKwNut2%2F2tEURzQQZXJeXVxz6wcqB87ixr6%2BAYVmFJHgWwfyhhqtw7sH7bHq8%2BPodBClBl4sayt0NO4Ux8nAmGcqqUpMoP%2FhafFXHFHbEqNluD8pBEjOog40p%2Fkf83F4Oy%2B07XcvEVoDKUP1%2FO4sAnyKV7s1bo1rptF2wMDRLBTzPElefYSFnjAPpFbKXcivJQEWDvoPCXvDt%2FOgtW0vNxRzex4O4u0OzSO2mC4Mt1c%2BFIhezOMoDL2DRq889WEo5IkE6ZKZrQb0O5xJDEaPQfjUMx8A%2FU1E9H3jp3ugUHg5QKym2lOu6V4iUJ5gG7tUD%2F3cC2YdOJ5Dz6HtEtHghZJcjqyUxefJz%2BWWoASo4B2aOoNc%2FpNU56kB8Pt6micG1uldBbwIgFR4kUwghzRl1axd6kH0kkHEOcEYa%2BdUIAPElUkT0vooFNsEZ%2Fdj8W6QHlXIRP%2BSQWFOeHViIG2NLzRbu92ytXKSIbdQGjylP1YVSZtItWJPN%2F7A2r4tz5nNC4ArtVwkZVQwcw0BbaVNGPRGry0XWIKNBZdtnBBJIh0vZK2hpxUXwQmlkNi0O3iBd0WfMYo%2Bxd86So0XPiNJAXZ3GMN7%2BvcEGOqUBwPbQTYK%2BK4r9WfLgy13fLGxCUN1kBV7MTfybj9ZWj%2BcxsCcR%2B5OjSUKVGhfc%2BEyRdDXiSTty0%2FGuipA1CgF8hRA8SkmBCW1TTmoUEoOtvqG6QxWN3ea%2B%2F4CG4l4jJAthByH%2Bm6FIpC8%2F8LY%2F50B8eG8auOWOgzTqh3VHKzk3DCQnBrKK79JQDBZcmo%2B7wuqaB47F4h7ySc3cJSdDIvz9rS0qV%2FsT&X-Amz-Signature=229d422a11ea8a41547785ac3c403bb689455685db546f3a7dd06656523ee367&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
