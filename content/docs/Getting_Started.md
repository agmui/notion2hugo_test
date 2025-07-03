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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF4SE32%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDrY0R9qbm6DrTAU3MATJPpgUy8kNKK7gZJXyJT560%2BQgIgGLpqIoE5UOIlF9MalJCE6DaXgBzGASbE6vTYYfewKcYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDkasyteoJWY%2Fr6hryrcA0n9k3tS5tBgfkAACmlyEz6Y2IEBHYfi2k6WWVYk5hmK7W42TP1%2Fckk4hjQOhiNBW3YwvTbR4ovAWheMWPSIw7o9g9fLUTp3hrqv3MZWbD%2FaNOkoXgPKoTL4IiPrkOEfYiaaUGIJC80AgjMehGr24tU%2FB368nLuVTcmf25Ql84CSJ9nrL7nYpkklzMgbN29PLvTJgXKGPgZ77mV2VZaecoeR%2Fl6T9VbTebxrmte3IEIosR41eLVO2PLCQEBQS8axC4BFst0s1lfCMJBZmhPRGLb5%2BzbRusf1d4osvL0iiZ8OkHVXF7%2FT%2BhN5YpnkIHvkpwgwZh2Sk1IoQfyYVaacB4HSsWU1Wed8rjFxjxzIizmQeiChojQ9KmbLv5UBtcwSvpaYGYfrWMXM%2BjnGbIE9FThV2%2F8RK7ksekCCZBpwt5A9nopSRAPSmd9MuleqPnihzSrY7IyxJVkaStMUrlxSfBe89B7qaI6VXycQOEE2byMn5hfdVg854%2FOqrgPcuE%2FojpWu3LkTyTfJ0hOr8fUJ833LX52ZUp054IkWBDjqAwHjkbouSxYJSvJxg3OA1TAixYb9ufHMxVoLGGcnu8A68jkASzzoi0qbw%2FNA4Uqw0nk%2BkuQBayp7CWBkryj9MI25msMGOqUBt8Ye2%2FH%2BjcdwC2iZay2bV7FBteOEijujwR76jzNuNVeTKNV2leB%2BHXtp1teo7HdZb5sOzUI%2BMa9%2F8lFc1zhyYJahzgJpqeT9or8cGPkePKE4hxy7FhV7uTyFHndJlnipcfaidliXv1bDFF4sD7JVENkFFGAoKzH%2BJ8Cg53dsf7gN7t8JQYqfyL304QXj99mTyyiAydPpmO9094RqAV8A1pQmNBq7&X-Amz-Signature=90e8494143aada08941628bf5859ab2aed187b6e773c666438b2db2c68084fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF4SE32%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDrY0R9qbm6DrTAU3MATJPpgUy8kNKK7gZJXyJT560%2BQgIgGLpqIoE5UOIlF9MalJCE6DaXgBzGASbE6vTYYfewKcYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDkasyteoJWY%2Fr6hryrcA0n9k3tS5tBgfkAACmlyEz6Y2IEBHYfi2k6WWVYk5hmK7W42TP1%2Fckk4hjQOhiNBW3YwvTbR4ovAWheMWPSIw7o9g9fLUTp3hrqv3MZWbD%2FaNOkoXgPKoTL4IiPrkOEfYiaaUGIJC80AgjMehGr24tU%2FB368nLuVTcmf25Ql84CSJ9nrL7nYpkklzMgbN29PLvTJgXKGPgZ77mV2VZaecoeR%2Fl6T9VbTebxrmte3IEIosR41eLVO2PLCQEBQS8axC4BFst0s1lfCMJBZmhPRGLb5%2BzbRusf1d4osvL0iiZ8OkHVXF7%2FT%2BhN5YpnkIHvkpwgwZh2Sk1IoQfyYVaacB4HSsWU1Wed8rjFxjxzIizmQeiChojQ9KmbLv5UBtcwSvpaYGYfrWMXM%2BjnGbIE9FThV2%2F8RK7ksekCCZBpwt5A9nopSRAPSmd9MuleqPnihzSrY7IyxJVkaStMUrlxSfBe89B7qaI6VXycQOEE2byMn5hfdVg854%2FOqrgPcuE%2FojpWu3LkTyTfJ0hOr8fUJ833LX52ZUp054IkWBDjqAwHjkbouSxYJSvJxg3OA1TAixYb9ufHMxVoLGGcnu8A68jkASzzoi0qbw%2FNA4Uqw0nk%2BkuQBayp7CWBkryj9MI25msMGOqUBt8Ye2%2FH%2BjcdwC2iZay2bV7FBteOEijujwR76jzNuNVeTKNV2leB%2BHXtp1teo7HdZb5sOzUI%2BMa9%2F8lFc1zhyYJahzgJpqeT9or8cGPkePKE4hxy7FhV7uTyFHndJlnipcfaidliXv1bDFF4sD7JVENkFFGAoKzH%2BJ8Cg53dsf7gN7t8JQYqfyL304QXj99mTyyiAydPpmO9094RqAV8A1pQmNBq7&X-Amz-Signature=840e9c84d790cd1f5cffc1cba1cc4bf1b5f924b6bfd62ae7bcca433a932547ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF4SE32%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDrY0R9qbm6DrTAU3MATJPpgUy8kNKK7gZJXyJT560%2BQgIgGLpqIoE5UOIlF9MalJCE6DaXgBzGASbE6vTYYfewKcYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDkasyteoJWY%2Fr6hryrcA0n9k3tS5tBgfkAACmlyEz6Y2IEBHYfi2k6WWVYk5hmK7W42TP1%2Fckk4hjQOhiNBW3YwvTbR4ovAWheMWPSIw7o9g9fLUTp3hrqv3MZWbD%2FaNOkoXgPKoTL4IiPrkOEfYiaaUGIJC80AgjMehGr24tU%2FB368nLuVTcmf25Ql84CSJ9nrL7nYpkklzMgbN29PLvTJgXKGPgZ77mV2VZaecoeR%2Fl6T9VbTebxrmte3IEIosR41eLVO2PLCQEBQS8axC4BFst0s1lfCMJBZmhPRGLb5%2BzbRusf1d4osvL0iiZ8OkHVXF7%2FT%2BhN5YpnkIHvkpwgwZh2Sk1IoQfyYVaacB4HSsWU1Wed8rjFxjxzIizmQeiChojQ9KmbLv5UBtcwSvpaYGYfrWMXM%2BjnGbIE9FThV2%2F8RK7ksekCCZBpwt5A9nopSRAPSmd9MuleqPnihzSrY7IyxJVkaStMUrlxSfBe89B7qaI6VXycQOEE2byMn5hfdVg854%2FOqrgPcuE%2FojpWu3LkTyTfJ0hOr8fUJ833LX52ZUp054IkWBDjqAwHjkbouSxYJSvJxg3OA1TAixYb9ufHMxVoLGGcnu8A68jkASzzoi0qbw%2FNA4Uqw0nk%2BkuQBayp7CWBkryj9MI25msMGOqUBt8Ye2%2FH%2BjcdwC2iZay2bV7FBteOEijujwR76jzNuNVeTKNV2leB%2BHXtp1teo7HdZb5sOzUI%2BMa9%2F8lFc1zhyYJahzgJpqeT9or8cGPkePKE4hxy7FhV7uTyFHndJlnipcfaidliXv1bDFF4sD7JVENkFFGAoKzH%2BJ8Cg53dsf7gN7t8JQYqfyL304QXj99mTyyiAydPpmO9094RqAV8A1pQmNBq7&X-Amz-Signature=0866d23e532162dec06ce26819b6142305d2281d79bf429423539c16c4858852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IG3CPC%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDmWQHzW1oQNTjYeYnGUQdVFfMP0VXWjRwBgq6uZ8wnmgIgKFf7FvP2ptIwHXBKYChoGGSzTs1dhh4bNleI6CtQ%2BzIq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDEGrJx3Bi8hoaYHDoircA%2FhUpv1mIU64vik0Zd%2FO3PjtnWpW7Cxqx%2BDUrrnC7zF8Vn59IvdzshXapdUq6itIBC%2BgSvmVvL51xDgRud1Z1qqqCqM9t5NHQFXSvODkOWpJIy1099Pq0FJEqiCLrHgRbmR%2FFBx4aXQWX%2FtotkkppB1wPgDmJzDZpKbf99Qtrh8ir5v6uQyIhgF3WZCjJGWYHhX3VPUdvBXp9tmLtQ9Q75vrbOo%2FvSVUESM7FXdiJHr7X9UQCfMmJF7IXQOKPHJnCphTbSaACJOPpyyUc3L0A09LGBuI9%2B94vM3PUs3f3D6zT2N2fIOdBWCm0pV1JsxUAg3SLKSPsVSSHdQyqvzQPr%2FK81N%2BUq9WcC49H42DcTbioZ17wnJDX%2BWfM%2B%2F3cfqnbD%2FfeGzp8pRjc4PCvjhgYMN9X8RzYyg9BdqKLvykrH061YtEY4BsR%2BD50tgr0nLQM4xFYc1wGsoXAImDtRqjHzUx8wC3aY6eXkxO8dH8Vz8%2BzNwNB%2F%2FjiIMmidePMHOThpwyMin2CO6NRWDXQyF%2F3jXqT0MVpzjDtSh1yuAppzwAXZAE%2BgHTbImWyfJy935N35Chnb3JsACz3LDpRtQQgaf1DpXudV5Rs4MeZgXcSGecSWMOhksY0Fhx45VYMPm4msMGOqUBnkJAi3D2QOYB71gfcUIoGeIp8SEIlYoPtR2RK7XfcW3NAXpdgtEYd5%2FgZCLig3Rz1aAZ%2F7ulwqHyjP0%2FdWzlUcTFrsjXOT%2F2%2FxlIXCnqes9Mb6RQsWAKhM5B0tqalRrW9H7DPJlqlLIqc5jbrvrwW3vazQ5ozUf%2FDqX7ublkuNF99mtDEWhzOSQNszfwq08%2Fg0nZcNFoNN1lU5tEzzRWgFlBbtfH&X-Amz-Signature=0eac6753fae0332bcc98bb806874a100dd22d839011aaee682e3cb98aec6ebdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZJN3XJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICVluHAeaa9SUogPAQRV0Ge5pYRF%2ByqIkO5s%2BGghMrjiAiAzE0p1cr9mYkTMw4cxhBuje2S1ELUV8fUZsUl8kW5ZrSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMQyO4jfLadE7ktmkRKtwDkJ4BOEh%2FJcxfZpaP1XAFCJJw%2Fts9MUrNtaUjG1J%2BCKxcQs1BAPP9svVzr%2B%2BCK4%2FdkHIiFoZ7CpfrYVThy1%2BORlA1keIVS0qQMCCuFiWlMmKwsk9JJ006Y3wAUHOQDEosAcyj2rCuVeXMnxSJ%2FsMz8fIYXA%2B4LQrWv2Jhk1pmX6OKl7SkSBU8IKr9pypaKzdK509uxrP4wQbl9fJhOJrMK7HngvUbXVVr86FCO5B3LBGVs6klvPgHdbje%2B1F%2FmpsAgXqGNGfR2tPxMqrEDNlRSx5cI%2BBFAKx35YnGRwTMvupRKmA9iHAsLBWAUxjiKpH0UTgwbLFkBY24xW9P%2FiueqZOkygVYaxacAvGg%2BA57yZqhlYnWuAACSY2FJGtU8532ijoSqAkN%2BaNOczHOSc5d4MsBKFhix%2F7I7nu215IIGR6ScIOdOsijGKNAzZf39yrBZMhV768y7VJaXHegJH%2BMbCzlBLVmKNYczkwBH2fnHWNCbL3P0ipnYadTgY76lfRUCOaZIa3zGQE8d%2F3lYsFuukuRUNrssdBEBAdo2WOfy95Hq7iLRS1y1Q7wJ3G68vxeGU3J3krP9zzrOO00kOeeKG3W72S3A991C5iuyKqb3%2FKUVbp6meCFirDaBu4whbmawwY6pgGItCm0mCPRP2R4S6WGtEs53ETGIWoC1yBUlamVTygIBVASv%2BnNKlJoZcge192BOiOImT2B2QgzPl2XF2KLyTkHQ8DZSdMvLtbk%2FRb3XZN2M0%2FD6B4QLg2slbHTzi2ex5PwzZcCT7JZdbXNRWJLuCmjk%2F3yyN6ljOEs5TnSJHSkzJJWXvSlQXMg9WY%2BaSu9TslYazCuzkTCknYe1WZcxtmxcDwWhHP2&X-Amz-Signature=db6fe40e30b864f908ee3ebfdbeb980cb3fe80365a27e831acca5dcc055b21fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF4SE32%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDrY0R9qbm6DrTAU3MATJPpgUy8kNKK7gZJXyJT560%2BQgIgGLpqIoE5UOIlF9MalJCE6DaXgBzGASbE6vTYYfewKcYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDkasyteoJWY%2Fr6hryrcA0n9k3tS5tBgfkAACmlyEz6Y2IEBHYfi2k6WWVYk5hmK7W42TP1%2Fckk4hjQOhiNBW3YwvTbR4ovAWheMWPSIw7o9g9fLUTp3hrqv3MZWbD%2FaNOkoXgPKoTL4IiPrkOEfYiaaUGIJC80AgjMehGr24tU%2FB368nLuVTcmf25Ql84CSJ9nrL7nYpkklzMgbN29PLvTJgXKGPgZ77mV2VZaecoeR%2Fl6T9VbTebxrmte3IEIosR41eLVO2PLCQEBQS8axC4BFst0s1lfCMJBZmhPRGLb5%2BzbRusf1d4osvL0iiZ8OkHVXF7%2FT%2BhN5YpnkIHvkpwgwZh2Sk1IoQfyYVaacB4HSsWU1Wed8rjFxjxzIizmQeiChojQ9KmbLv5UBtcwSvpaYGYfrWMXM%2BjnGbIE9FThV2%2F8RK7ksekCCZBpwt5A9nopSRAPSmd9MuleqPnihzSrY7IyxJVkaStMUrlxSfBe89B7qaI6VXycQOEE2byMn5hfdVg854%2FOqrgPcuE%2FojpWu3LkTyTfJ0hOr8fUJ833LX52ZUp054IkWBDjqAwHjkbouSxYJSvJxg3OA1TAixYb9ufHMxVoLGGcnu8A68jkASzzoi0qbw%2FNA4Uqw0nk%2BkuQBayp7CWBkryj9MI25msMGOqUBt8Ye2%2FH%2BjcdwC2iZay2bV7FBteOEijujwR76jzNuNVeTKNV2leB%2BHXtp1teo7HdZb5sOzUI%2BMa9%2F8lFc1zhyYJahzgJpqeT9or8cGPkePKE4hxy7FhV7uTyFHndJlnipcfaidliXv1bDFF4sD7JVENkFFGAoKzH%2BJ8Cg53dsf7gN7t8JQYqfyL304QXj99mTyyiAydPpmO9094RqAV8A1pQmNBq7&X-Amz-Signature=ec1ffa9c2b7053dc2fbd796ec9f09adec2e0b9cca5edc2d300b3d24c7550f3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
