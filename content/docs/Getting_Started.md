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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTWJGEP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBG2xcYv75lUSkhKglXVlO8a2swPJiL1AVWWg25Sm%2BHXAiAtjdNHtoupZdtGbjo1uOqhzOD50IAsF%2FkOr7KWVHtfjyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0ZZYxnQVV06JgUqKtwDoTUN9YiCWdqjuxTrUrtCTD%2BCzO4WilBZfvhVOuAHKG%2Fn3zyQbpZZN4EBRyOIy2VC9s8TS2NBpCLdFJsXAkkfRB0wQRhQp%2FAmSQcTK0WFwvg%2FMvP5J6%2BQfl%2BGUchqHqrA%2FjdT1A4Vy6vnc%2FbAOtFgzqlZmwwyidsiumbAKj9x6OYhbhKuYpxt4Uk5Vy2Pd98EaKgpl4isCe%2BL6DdgGM%2BFw7p%2FWtAXXjGym5UY4tWPQgwNf1%2Fvx0XIpXfcjl2jr1P8NgXZ1peSzgJM0UPT00%2BiGtp7BiqkkzfSyW7oAzlISijAdWTv0anFr0mgmgnEFcMT5pkVxCCMzMA6UYnkZR0ira8STSpxqgddjoNplNCEL3xIJzv0vRMxu32VDQL%2BK7PONcORix68n%2By1wXvPqC144kOI80JY3H9zJjMp4PAB2PQ9YL9mfDOaO%2Bpgn%2BFHjyUuhxm6mKHzymsFBcna%2B1fIQEw5LkcHgLoqfMf2nQB01w9PEojgIIIqFt36zmFYJeHTzNXe7XRF7D49OlpKWY66nWFf6%2Bd16Jzo70G19nZwd4FYz7i8rtbDHaCq5pMeGti8haiYOupu2xsd5JfMi58bSnQ4mEGydZusF9wYE0UKr0bDDnUDK9251aqmsC4w5YeYwwY6pgHG51EG7F53LdNLpbSCVvuS8R6yqVcgtaQ8n9cy91Q3o8peO6d7NQj%2FICdRfZTAdyYToMK7J0COXoe5N6jyVFWQPEVWv7rnqHqFnEZp9szX2QcNvMrZvXDcARG6PVmUPjftBxuMDABHfLcepjwgwhihFfkxwghUbONKHpfl2xLX%2Fvv6OqUKJGPxmsVxF7mTFeXhSVu2raHyOX2xJNyt%2F3A691RsbHyO&X-Amz-Signature=e33362004440083f90e962ad0fee2cf40f7fa7dbc300a64247f5fb3d0433a8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTWJGEP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBG2xcYv75lUSkhKglXVlO8a2swPJiL1AVWWg25Sm%2BHXAiAtjdNHtoupZdtGbjo1uOqhzOD50IAsF%2FkOr7KWVHtfjyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0ZZYxnQVV06JgUqKtwDoTUN9YiCWdqjuxTrUrtCTD%2BCzO4WilBZfvhVOuAHKG%2Fn3zyQbpZZN4EBRyOIy2VC9s8TS2NBpCLdFJsXAkkfRB0wQRhQp%2FAmSQcTK0WFwvg%2FMvP5J6%2BQfl%2BGUchqHqrA%2FjdT1A4Vy6vnc%2FbAOtFgzqlZmwwyidsiumbAKj9x6OYhbhKuYpxt4Uk5Vy2Pd98EaKgpl4isCe%2BL6DdgGM%2BFw7p%2FWtAXXjGym5UY4tWPQgwNf1%2Fvx0XIpXfcjl2jr1P8NgXZ1peSzgJM0UPT00%2BiGtp7BiqkkzfSyW7oAzlISijAdWTv0anFr0mgmgnEFcMT5pkVxCCMzMA6UYnkZR0ira8STSpxqgddjoNplNCEL3xIJzv0vRMxu32VDQL%2BK7PONcORix68n%2By1wXvPqC144kOI80JY3H9zJjMp4PAB2PQ9YL9mfDOaO%2Bpgn%2BFHjyUuhxm6mKHzymsFBcna%2B1fIQEw5LkcHgLoqfMf2nQB01w9PEojgIIIqFt36zmFYJeHTzNXe7XRF7D49OlpKWY66nWFf6%2Bd16Jzo70G19nZwd4FYz7i8rtbDHaCq5pMeGti8haiYOupu2xsd5JfMi58bSnQ4mEGydZusF9wYE0UKr0bDDnUDK9251aqmsC4w5YeYwwY6pgHG51EG7F53LdNLpbSCVvuS8R6yqVcgtaQ8n9cy91Q3o8peO6d7NQj%2FICdRfZTAdyYToMK7J0COXoe5N6jyVFWQPEVWv7rnqHqFnEZp9szX2QcNvMrZvXDcARG6PVmUPjftBxuMDABHfLcepjwgwhihFfkxwghUbONKHpfl2xLX%2Fvv6OqUKJGPxmsVxF7mTFeXhSVu2raHyOX2xJNyt%2F3A691RsbHyO&X-Amz-Signature=0c8a590b75f9804d9671b5e1817101b4a61860e635c89886fe1e2a8cf2adfec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTWJGEP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBG2xcYv75lUSkhKglXVlO8a2swPJiL1AVWWg25Sm%2BHXAiAtjdNHtoupZdtGbjo1uOqhzOD50IAsF%2FkOr7KWVHtfjyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0ZZYxnQVV06JgUqKtwDoTUN9YiCWdqjuxTrUrtCTD%2BCzO4WilBZfvhVOuAHKG%2Fn3zyQbpZZN4EBRyOIy2VC9s8TS2NBpCLdFJsXAkkfRB0wQRhQp%2FAmSQcTK0WFwvg%2FMvP5J6%2BQfl%2BGUchqHqrA%2FjdT1A4Vy6vnc%2FbAOtFgzqlZmwwyidsiumbAKj9x6OYhbhKuYpxt4Uk5Vy2Pd98EaKgpl4isCe%2BL6DdgGM%2BFw7p%2FWtAXXjGym5UY4tWPQgwNf1%2Fvx0XIpXfcjl2jr1P8NgXZ1peSzgJM0UPT00%2BiGtp7BiqkkzfSyW7oAzlISijAdWTv0anFr0mgmgnEFcMT5pkVxCCMzMA6UYnkZR0ira8STSpxqgddjoNplNCEL3xIJzv0vRMxu32VDQL%2BK7PONcORix68n%2By1wXvPqC144kOI80JY3H9zJjMp4PAB2PQ9YL9mfDOaO%2Bpgn%2BFHjyUuhxm6mKHzymsFBcna%2B1fIQEw5LkcHgLoqfMf2nQB01w9PEojgIIIqFt36zmFYJeHTzNXe7XRF7D49OlpKWY66nWFf6%2Bd16Jzo70G19nZwd4FYz7i8rtbDHaCq5pMeGti8haiYOupu2xsd5JfMi58bSnQ4mEGydZusF9wYE0UKr0bDDnUDK9251aqmsC4w5YeYwwY6pgHG51EG7F53LdNLpbSCVvuS8R6yqVcgtaQ8n9cy91Q3o8peO6d7NQj%2FICdRfZTAdyYToMK7J0COXoe5N6jyVFWQPEVWv7rnqHqFnEZp9szX2QcNvMrZvXDcARG6PVmUPjftBxuMDABHfLcepjwgwhihFfkxwghUbONKHpfl2xLX%2Fvv6OqUKJGPxmsVxF7mTFeXhSVu2raHyOX2xJNyt%2F3A691RsbHyO&X-Amz-Signature=0cfd4866f47bf2618e63c17710d835672f6107089981061bcf7fdb80dffb7849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC5GS6G%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCqxMXjnCfyStR7g6zGGH6rzhtY2ZwKSl1U2TvNQF4%2FmAIgZUY8i%2F%2FDw2L3sevU3BFm5DEkx073NQ9mO1aMBIN%2F9CoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbiMBrSIYylgIKi0SrcA3HFAbEfuQQQbfb3i%2F25z21zb2qdZk4pO9vNMu9%2FSufnOO6dSaO5h1Fdqrv%2BxOHKNO%2BNkyOo%2BdnrL0R84xzB3Nx7cKWboWPQkdIHJPRUW%2F5lt7BXYiWIgPxZ7GhGvLp4Jq28Vw5LM63tBn9PNEgYlJ6PtitefDwupqmExtOGGl2Ni6spP4QUGiOWrzOiJpyRDxckMKqVx8GPN%2FGt8vMcGg3kCxUz0BCSWzUv%2FG9hAABC2%2FveCwrTRZvA0S9eKlwKiw4hUiVE3uzdKz3HZU9sqtOEbGBhWEZMLRIdVbqOroASU4Qw9gbkP0jC%2FDzqNS68YpzFEw3jiNfiDlxeTQE4cl49fwrV6xlxXUAdSUCmJJWLpcugPz%2FxhrZyYtahlZUZOaBd0f7FOdcMKB8Rb3puZpOq4nuMHfSDoHDTYdi9t%2FogUth6EHgvdokAfmZ6A5hEskY8eYRp4hNVV4ylHFjqmqs1EVZ1atoZuAlu0XrTCMkV8VIibfDdCyNPgJnIT3qyjZRc1TYeRAzLZF6UlkFsS7mtjO3woiZeS00ERXOtW%2Fvn291Bvx6OkGqHXFZTNtsj0iLrGpV7Myj4ZHQderlqMKRXhpSUu%2F83jUoovvrVQ31JEKw5QgcRT2SinF1jMOOHmMMGOqUBE4fYjLpJ0VmY6RkJaLhwqlTHhwP2tBqnflNlVfWM7kVhMzSvSG2UGN431vy1PYwpxr%2BEtmHN%2F4mukIsch3FqiQfoJDckibhmIQHBYs1tk9VNvzcW59JBiktrjU8n61Gbcu8pnLzyYrPcla8lGcawXtPwLUSSV81%2BeWZ2kZHAQlUvhtqBaYdWUtVVKzK5C3ayxWkr8Ovy1Ahdjgibx7K3Z8vwvTXo&X-Amz-Signature=b2fe1bd704c6d5bf6f883d4369767e288093731ff1d2e1e0a013491151a84202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR4SHAX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCwbMOZUdkAeW7hqheMiYs5wrckV7OPtdrcnutM7g8wlAIgWlZZcyXCRbmHIyFLNHG5xw%2BqfUibnQ2wCgAUYWF93u8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0PTta0p3XEIuBl8CrcA0j0Um63KE3NfNJKqxNFGc64jtjCmA8BuZH6kCOB8KV1D7cNy%2Bt9BLF64PtqqdE%2B2X1OR8QGST%2FGklUOWX8KGjXSlpNvr18V6Oy6bK3H1s2MHU5OB%2B0MBW6eaxQ3VwZ5o3Lu6qwTJxN2mUy5ltpb4GvLxDZ09BX5LyWHFvtCYcr%2BcjYIZxjSblCrzd%2FLhN%2FMcFutBY3UZMuGXj3XUm5RNgoSdwMoSaPXhwDK695%2FubuWFwLqEFaRjH8y%2FloQ46uIPwrzus7I%2FFet%2BAO3sHt8UJo8dZxG9c0KYJYaRy1yrqX7pNtlS28uBc6f7W5QoPC6RiG%2FruQXBdHI6w7WaQQ6AU7aiPridjNTi%2FVLxYQyJCNZ7N0mzpGhKgxKNPiHHMnm12Hl5akKpgRPV1yfISGMiI%2FH9kvm01Gh1Erb9TbqFR4kb%2FdRfG4YZG0Y2hHMlEaX%2BCYPgZubyh3qR9TrLNreEA9MafatectPRuB5VZvIbg%2BnU5xs6AVyNwjEvwRZz1cMkeoBQX4mmZ0lhvfinhIu225w8Ynz6KjPocrtdzXyvf8gb4M12SubD64X5J0bTREkAqDW%2Bm5xrvqcL2%2Fh3dT4M7kjkC%2FZln512MUfZywFPFkPpX79NUkNZADeAucKMMOHmMMGOqUBxEpHXDnDoLZWLwOLsxEAN2cKeJoWBnK9Sj4ibGfV%2B9hmeEJUcaHzEY18HydqnH69gmaGvUkpKuhbFDRhdvTTYewxX2TKryaqpGNds%2FepxRV34goqLBGo4f9DpV9IA91xkqlNxR2k0HIa2uzXBN%2FNNsAiEugZO9lM33WbsfxEWqGEPEwEu6%2FNmFIXT45w4abPqBjHn98JrJAvOS23QmJ92015uYCw&X-Amz-Signature=4a1aa44229b53a3d1a7b489172cf893d12cd5255ff4fd241c6c47ed5cb5cde7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTWJGEP%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBG2xcYv75lUSkhKglXVlO8a2swPJiL1AVWWg25Sm%2BHXAiAtjdNHtoupZdtGbjo1uOqhzOD50IAsF%2FkOr7KWVHtfjyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0ZZYxnQVV06JgUqKtwDoTUN9YiCWdqjuxTrUrtCTD%2BCzO4WilBZfvhVOuAHKG%2Fn3zyQbpZZN4EBRyOIy2VC9s8TS2NBpCLdFJsXAkkfRB0wQRhQp%2FAmSQcTK0WFwvg%2FMvP5J6%2BQfl%2BGUchqHqrA%2FjdT1A4Vy6vnc%2FbAOtFgzqlZmwwyidsiumbAKj9x6OYhbhKuYpxt4Uk5Vy2Pd98EaKgpl4isCe%2BL6DdgGM%2BFw7p%2FWtAXXjGym5UY4tWPQgwNf1%2Fvx0XIpXfcjl2jr1P8NgXZ1peSzgJM0UPT00%2BiGtp7BiqkkzfSyW7oAzlISijAdWTv0anFr0mgmgnEFcMT5pkVxCCMzMA6UYnkZR0ira8STSpxqgddjoNplNCEL3xIJzv0vRMxu32VDQL%2BK7PONcORix68n%2By1wXvPqC144kOI80JY3H9zJjMp4PAB2PQ9YL9mfDOaO%2Bpgn%2BFHjyUuhxm6mKHzymsFBcna%2B1fIQEw5LkcHgLoqfMf2nQB01w9PEojgIIIqFt36zmFYJeHTzNXe7XRF7D49OlpKWY66nWFf6%2Bd16Jzo70G19nZwd4FYz7i8rtbDHaCq5pMeGti8haiYOupu2xsd5JfMi58bSnQ4mEGydZusF9wYE0UKr0bDDnUDK9251aqmsC4w5YeYwwY6pgHG51EG7F53LdNLpbSCVvuS8R6yqVcgtaQ8n9cy91Q3o8peO6d7NQj%2FICdRfZTAdyYToMK7J0COXoe5N6jyVFWQPEVWv7rnqHqFnEZp9szX2QcNvMrZvXDcARG6PVmUPjftBxuMDABHfLcepjwgwhihFfkxwghUbONKHpfl2xLX%2Fvv6OqUKJGPxmsVxF7mTFeXhSVu2raHyOX2xJNyt%2F3A691RsbHyO&X-Amz-Signature=5d1139be3436a6375b42b63a807ce361c5ab8546d6a54354c3197f4d81351c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
