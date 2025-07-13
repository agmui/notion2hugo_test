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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLMH3AD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAB20UaQqSfQeVPVkEdwOlZUZJBJrFB3n83BICpQ9PWgIhALqFmOxPwvWupQJLzxRoqV2OVpRwV2WnGAvhX4ONaYUtKv8DCBAQABoMNjM3NDIzMTgzODA1Igxyndv5yK17alXvYbIq3AMR50hUBgzlXKI7TvFojRv8NkPiJSs2GDOgfeM%2BJ%2FVl0vYoNQ%2Fo%2Fhgresj%2B1dn602EQGiCSnZGaomdHo5txRJ4QvXQxBBsDSevMqVNHD0y8WXOTBxcJEWtnefbfsjiVRUZIEZm1ZWR3Lst3xhyqJ%2BxBeUwoMpHRU%2FV2AfM4xJ23nTuhEG5Evko7USB4nun8zCU52PAzkn16%2FyK76gR9FWkyDdbVIRv4wx85MMnAgXv8WUQuf7buJF4hFygu2BHyo4xvLNxMRHIW45wQN9SWUXhdWMfMUGu51tuRssegdYYc%2FXxLVpNdiM1A173ToGpdBsfXMpATdLAoikKjzCLCvKevAVoVuQH4yZaPfFLVV1bZYueLZ2JaIPHPHICm8L58gi4ltt2%2FRfFu9xGasEpQpEiLz0N4jkbBbPbV%2B6KubmjdWmrztxtl1ps8T74U2XtrCxH5VEWu0OzUMJcrnEJBHiVDZjSWEy8upiBbVqXEzw%2FZemW7ELza%2B2NtdC%2Bj8xLX%2FHiAiPGGlprRat7eWmg0qnJomWhgU0IE73URZkrzek%2FXf925i2asHuhBEEqcCDzWUM%2BWWYX%2BoNRJ8hMaTS1tDGfGEfkwNKmjPY49hVxvLhTGThFQPVEzsYICczOW3DDso83DBjqkAdDaPSE3FKTYgXRllc9ewh4S9EyPI%2BYFD6InKqkJP25sMkmi6E7DeFcfCkWhilxvi%2FaCBY6hhYCaaGuzihQPfB4xGw1bX4wXYV8AY0Q0YcPA9jhaEv9l9zYv%2FrcDxN4WWFgVTEaOYdjZN7IZuvcPGZWD2Jk6fYL94TpLrkBTBtV325%2FK2%2F%2Bte4FHRvlsiLE9uPlE6ABYxUSgpf3mJ3l5gWudkjzY&X-Amz-Signature=7e2bcf68b500bb6bfc7a006507653614178af527b29c1e4caccf83291b4b86ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLMH3AD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAB20UaQqSfQeVPVkEdwOlZUZJBJrFB3n83BICpQ9PWgIhALqFmOxPwvWupQJLzxRoqV2OVpRwV2WnGAvhX4ONaYUtKv8DCBAQABoMNjM3NDIzMTgzODA1Igxyndv5yK17alXvYbIq3AMR50hUBgzlXKI7TvFojRv8NkPiJSs2GDOgfeM%2BJ%2FVl0vYoNQ%2Fo%2Fhgresj%2B1dn602EQGiCSnZGaomdHo5txRJ4QvXQxBBsDSevMqVNHD0y8WXOTBxcJEWtnefbfsjiVRUZIEZm1ZWR3Lst3xhyqJ%2BxBeUwoMpHRU%2FV2AfM4xJ23nTuhEG5Evko7USB4nun8zCU52PAzkn16%2FyK76gR9FWkyDdbVIRv4wx85MMnAgXv8WUQuf7buJF4hFygu2BHyo4xvLNxMRHIW45wQN9SWUXhdWMfMUGu51tuRssegdYYc%2FXxLVpNdiM1A173ToGpdBsfXMpATdLAoikKjzCLCvKevAVoVuQH4yZaPfFLVV1bZYueLZ2JaIPHPHICm8L58gi4ltt2%2FRfFu9xGasEpQpEiLz0N4jkbBbPbV%2B6KubmjdWmrztxtl1ps8T74U2XtrCxH5VEWu0OzUMJcrnEJBHiVDZjSWEy8upiBbVqXEzw%2FZemW7ELza%2B2NtdC%2Bj8xLX%2FHiAiPGGlprRat7eWmg0qnJomWhgU0IE73URZkrzek%2FXf925i2asHuhBEEqcCDzWUM%2BWWYX%2BoNRJ8hMaTS1tDGfGEfkwNKmjPY49hVxvLhTGThFQPVEzsYICczOW3DDso83DBjqkAdDaPSE3FKTYgXRllc9ewh4S9EyPI%2BYFD6InKqkJP25sMkmi6E7DeFcfCkWhilxvi%2FaCBY6hhYCaaGuzihQPfB4xGw1bX4wXYV8AY0Q0YcPA9jhaEv9l9zYv%2FrcDxN4WWFgVTEaOYdjZN7IZuvcPGZWD2Jk6fYL94TpLrkBTBtV325%2FK2%2F%2Bte4FHRvlsiLE9uPlE6ABYxUSgpf3mJ3l5gWudkjzY&X-Amz-Signature=747c6af095c7c1d2a709fe6912630e89b629c8f51046590ab4a71892180304e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLMH3AD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAB20UaQqSfQeVPVkEdwOlZUZJBJrFB3n83BICpQ9PWgIhALqFmOxPwvWupQJLzxRoqV2OVpRwV2WnGAvhX4ONaYUtKv8DCBAQABoMNjM3NDIzMTgzODA1Igxyndv5yK17alXvYbIq3AMR50hUBgzlXKI7TvFojRv8NkPiJSs2GDOgfeM%2BJ%2FVl0vYoNQ%2Fo%2Fhgresj%2B1dn602EQGiCSnZGaomdHo5txRJ4QvXQxBBsDSevMqVNHD0y8WXOTBxcJEWtnefbfsjiVRUZIEZm1ZWR3Lst3xhyqJ%2BxBeUwoMpHRU%2FV2AfM4xJ23nTuhEG5Evko7USB4nun8zCU52PAzkn16%2FyK76gR9FWkyDdbVIRv4wx85MMnAgXv8WUQuf7buJF4hFygu2BHyo4xvLNxMRHIW45wQN9SWUXhdWMfMUGu51tuRssegdYYc%2FXxLVpNdiM1A173ToGpdBsfXMpATdLAoikKjzCLCvKevAVoVuQH4yZaPfFLVV1bZYueLZ2JaIPHPHICm8L58gi4ltt2%2FRfFu9xGasEpQpEiLz0N4jkbBbPbV%2B6KubmjdWmrztxtl1ps8T74U2XtrCxH5VEWu0OzUMJcrnEJBHiVDZjSWEy8upiBbVqXEzw%2FZemW7ELza%2B2NtdC%2Bj8xLX%2FHiAiPGGlprRat7eWmg0qnJomWhgU0IE73URZkrzek%2FXf925i2asHuhBEEqcCDzWUM%2BWWYX%2BoNRJ8hMaTS1tDGfGEfkwNKmjPY49hVxvLhTGThFQPVEzsYICczOW3DDso83DBjqkAdDaPSE3FKTYgXRllc9ewh4S9EyPI%2BYFD6InKqkJP25sMkmi6E7DeFcfCkWhilxvi%2FaCBY6hhYCaaGuzihQPfB4xGw1bX4wXYV8AY0Q0YcPA9jhaEv9l9zYv%2FrcDxN4WWFgVTEaOYdjZN7IZuvcPGZWD2Jk6fYL94TpLrkBTBtV325%2FK2%2F%2Bte4FHRvlsiLE9uPlE6ABYxUSgpf3mJ3l5gWudkjzY&X-Amz-Signature=f8b0d4b839bbb441e8a572cc3dbae541ed24e1ffd97214ad2441fa782ae4b5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EOJV4UQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8hVdad4VnT6j3sNLEp6ZBsC30zih33y2X5uuZamUvRgIhAJDcce11kKxkL7xhVItFYOjL1P6tRNhkbOI%2FLFdxvo3VKv8DCBAQABoMNjM3NDIzMTgzODA1IgxpUtjU3q2UHOhKHjoq3AP2zLXBZec12ZyDBNpYZDSCE2XhRJwbB4ngSh7XzPUN0KRYaka2PIJSbM4Hqq6muk9ijaD3LAo92e1inMpCeTISgmJkopoTQGRkV2h7zVxSnY%2BtVj6SdKVRkf9FmiaYssZTGS9p35ThgTO%2BtpbuL1nFgGdpP0RFE4eWeSfUvrLo%2BhyHVRqfTjEPynyv7Db1pEo%2Fe3m1rSrbyXPtNzNFQhFRYGNHgMkkehQZ9oHH0C3qqcR8OaEDAuyRE%2FY4XQkMMUutpaBmjZ8ACqZK7nVvLgm6wXoOjQ9bJStQ3bqjtJO%2F%2BHR%2BBanOEPRDlCSgIJMj4cD35xmMU%2B6jVHF1PpnhPZbchujowyu6B%2BcLaK5pdpsk%2FvtYfyqVA457F%2FDK7Ad0sW1Bbcby7YkTXXvZaLAEAHCAismrkDaIZDBShO2%2FNJaBLWC1KYQBCA61vTs0cFUchpJVAkGkyJeO06WMGBhXD9oIHsKj4YOFlN1Hpwmy6GjZiKEm0FbVNigpCvno9%2FZXjcO2TX9juVmgq0%2F2cT1gG34XL0wN9%2B1lBnd4Jjv0q2elUJcff4ZxLX9pIOQycuADC6wFnasVAzfq5LqsQM0ZNKh5N%2Fz0I%2FaWEEJD2RMcjAv595HUGqvZMsJ1iuyWSzCYpM3DBjqkAV1lxjtdISh7euNrCsoQz8a4LLYyVYakvBHfW%2FBT1T5hDRTspJT465nOgPq6L4VA0gUw54ru%2BDXYTwsEeNhXMYw%2BiWJrW%2B5uRqa8z2rtc6RCmUGk%2B%2BJW7hBZA5ClBefCPcnazMGN9ucVcQOaCCM0jeB%2B%2F92cZyXeH%2FCRYOGJ3Hp4Sbd3%2BIH1hTmIP1ornr9kMcX7R6QCZ3XfSpJFT0j1OcpJBO9s&X-Amz-Signature=e2b86d21bee647216b26d7f1f81915ecedb77fdb28cb53f36f7cf598d57c16ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPAPGGBU%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI5kGNeRZ3onXtgeYeeyLuwZGSRgMDs0YFgIqdb6QtYAIhAI57s4fPlC9o8DMflzU%2FSpDmhhiwG7YGW%2FBDeDNrQKDRKv8DCBAQABoMNjM3NDIzMTgzODA1IgwzLu5X%2FGtsHSZj1yMq3AM16Nj2Y9ID1%2BRtRA%2FVmonEh%2BjeOyx6XHtK7UffWtm%2FvaV%2Fo8uH%2FO7GhHzOZXKJNxlJ%2FHGU2320dNFeF%2F1HTPL5kQxE82FN5FHmvgn0uvXLtgdRTOD6hz8GhiPhHh%2FuDSrav6gGka3np7U4lM6GXW8UhGU584FGybqwXOoDQBWVN4Q09Ql7BXW2NqhYEjSx2OBg8lvoD%2Bg8gGHtSnevP8rcxo55ocC7nmVbFb5Bq%2FLuMzgq4%2Frvsk1xV1E26TNCM6bzlN9%2BwJ40%2F7cbtPjyno2EXNCrWLW%2BgwlAW2IQpt6bpgQssJlXMtUU96QbW7tiJITyJN0QmT84Oc6NpZLc12o7vAnselmSYtYQpPKMD1a6fvS%2BasgVEPtMTtqDqvLzcuo4JLng%2BmY97Z9fMYQ2Wt8f0uRrysWw3yc8qlkJlBYeLoXpqAo1Wdxssddt%2Bjxz6NgT9iPar%2BoAoo2VX9ZK9J9AKIOXkUeE5GfKswe5FyS9nlCt%2BJT6wDOI68TR3Tb7ttiT2lVSH0wXKK4BuO%2BkDxL8IuuDW3dRPrE4aVLB3IlhK5iZfpBxsa2OXMT2ALsri3JTD68O7pK5DHIKgCjyHd9ilGvXJvxuWmqReFh4O0olMqzMlKmcZ22agJN3iTDSpM3DBjqkAU5kn8NTRUZRY83XxybboFxEHBeGZWtJXW6W7CypsnUanFPm%2FBXrmvghSzjAWLJjGFAHPQkDsS%2F43EB9vJ8E6pWy8f0qIvxhvrShb%2FqE36XtoU2N9aJoCWXw%2B%2B4xDE26SpR5Tkwn9LnWjnw9YnAeq%2BcYgs2uEdgtQ74obaNIvv6R%2FlTj9fl1Vt5%2FDPxc9vg%2FYJlZo%2B%2F9cHguucE4N34OpTJDrDBo&X-Amz-Signature=697b72d5d67db22e3a4fd34a2c6cd512475799ce886ed0f8bae3a73770b35e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLMH3AD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAB20UaQqSfQeVPVkEdwOlZUZJBJrFB3n83BICpQ9PWgIhALqFmOxPwvWupQJLzxRoqV2OVpRwV2WnGAvhX4ONaYUtKv8DCBAQABoMNjM3NDIzMTgzODA1Igxyndv5yK17alXvYbIq3AMR50hUBgzlXKI7TvFojRv8NkPiJSs2GDOgfeM%2BJ%2FVl0vYoNQ%2Fo%2Fhgresj%2B1dn602EQGiCSnZGaomdHo5txRJ4QvXQxBBsDSevMqVNHD0y8WXOTBxcJEWtnefbfsjiVRUZIEZm1ZWR3Lst3xhyqJ%2BxBeUwoMpHRU%2FV2AfM4xJ23nTuhEG5Evko7USB4nun8zCU52PAzkn16%2FyK76gR9FWkyDdbVIRv4wx85MMnAgXv8WUQuf7buJF4hFygu2BHyo4xvLNxMRHIW45wQN9SWUXhdWMfMUGu51tuRssegdYYc%2FXxLVpNdiM1A173ToGpdBsfXMpATdLAoikKjzCLCvKevAVoVuQH4yZaPfFLVV1bZYueLZ2JaIPHPHICm8L58gi4ltt2%2FRfFu9xGasEpQpEiLz0N4jkbBbPbV%2B6KubmjdWmrztxtl1ps8T74U2XtrCxH5VEWu0OzUMJcrnEJBHiVDZjSWEy8upiBbVqXEzw%2FZemW7ELza%2B2NtdC%2Bj8xLX%2FHiAiPGGlprRat7eWmg0qnJomWhgU0IE73URZkrzek%2FXf925i2asHuhBEEqcCDzWUM%2BWWYX%2BoNRJ8hMaTS1tDGfGEfkwNKmjPY49hVxvLhTGThFQPVEzsYICczOW3DDso83DBjqkAdDaPSE3FKTYgXRllc9ewh4S9EyPI%2BYFD6InKqkJP25sMkmi6E7DeFcfCkWhilxvi%2FaCBY6hhYCaaGuzihQPfB4xGw1bX4wXYV8AY0Q0YcPA9jhaEv9l9zYv%2FrcDxN4WWFgVTEaOYdjZN7IZuvcPGZWD2Jk6fYL94TpLrkBTBtV325%2FK2%2F%2Bte4FHRvlsiLE9uPlE6ABYxUSgpf3mJ3l5gWudkjzY&X-Amz-Signature=7aa84452a9b2c7f44a70421a7b61b154265829c3e147a085960b4828a245454f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
