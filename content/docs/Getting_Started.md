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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVVRKGZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQChAM1GgLykx%2BVYf7Gmw%2BXNKk78bJP90h9JaOnRH7ukiQIgO8SvLEu7YQp3dsnLN5XIckPU5cHilDmQSj1F3AE4QkIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLyU7%2BW%2B7kj4I70Q6yrcAxMi19RnySLPuw63WhSwd7%2BwyZelcjPGu%2BaAn4e1hOe6QnIVGEqjTfI1oXHAKSliIzen4ojQXUU%2FGKj%2FTJuzc1JTFKtg0DPcqPm5By9Vx%2BtfOC6fFOWMoycCOJfjhmfUkqT1xuxH3e2YW%2Bdb3tKvRPLI%2BU2S6d5fZ9iC%2BzDcT3pJ4VQ7r%2FkNzkSDBW5d0gWDYsJALayjJ5bwA%2Fzqs4d14QqYnYRHBZIuJJbjeV5xItBetOSPfKoE4evDtYz%2F9Nyd8y9J0Mn5M%2F%2Bar1NUiprATsYpjh9SJV35tWam2nt6fzAJ4CNnR9qLzwtuaGcOujtxFGzov2EPGSev%2F0ZZGUwGIguiRKjxnim6ZvYSGHF2sZKACWNrny2ap32TezL54FqthPMGTAhaj5%2Fppjo0gEoxm58eEewn3%2FQKq8E0ZuRMbvego%2FBOeuVKDhIAwaVuFAuecS1QsqG%2F9aeRwPY9heFaQNSiExjdV3w6S2JZN5MROaWYHua1FsUPtreIaJQYJmf9C%2B%2BHKHekWdz6VjczPmeAI70IpkC%2BFB2p7WSnGRl8NknIWGu6UQvVk0d6Yj5skWJq7UbLaFQzqH4uSpfylBx7zMcC5X5U6GLKZ4hd5u5rz7T14th6F9uCjD1fjivuMPa2%2FMQGOqUBRV4HV%2FR6%2BZJLfkYSWDWulkPVJZ%2BfnE7IrVOr5mDA7xc4AH45nZ20vMgUMpnfDFVCqmtJmRbCV4OJf5YC2a2TjrTwEKx3wG6%2FYQxTOcpgsbdhXOVoWwat9TAtVpu79RGuNg7c1d%2Bag7tm5qTMWvJPWM3Fc4Iv8cGxIUrPFCWQmkGCNBwAIM9uCFZZ5ZGMODLm%2BhQl%2BADAs4jB3LQoLb67i%2FP95hoF&X-Amz-Signature=ba6e54d6c935297521e56e1e769dfc585641c523de9e44d91c7f80e773910532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVVRKGZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQChAM1GgLykx%2BVYf7Gmw%2BXNKk78bJP90h9JaOnRH7ukiQIgO8SvLEu7YQp3dsnLN5XIckPU5cHilDmQSj1F3AE4QkIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLyU7%2BW%2B7kj4I70Q6yrcAxMi19RnySLPuw63WhSwd7%2BwyZelcjPGu%2BaAn4e1hOe6QnIVGEqjTfI1oXHAKSliIzen4ojQXUU%2FGKj%2FTJuzc1JTFKtg0DPcqPm5By9Vx%2BtfOC6fFOWMoycCOJfjhmfUkqT1xuxH3e2YW%2Bdb3tKvRPLI%2BU2S6d5fZ9iC%2BzDcT3pJ4VQ7r%2FkNzkSDBW5d0gWDYsJALayjJ5bwA%2Fzqs4d14QqYnYRHBZIuJJbjeV5xItBetOSPfKoE4evDtYz%2F9Nyd8y9J0Mn5M%2F%2Bar1NUiprATsYpjh9SJV35tWam2nt6fzAJ4CNnR9qLzwtuaGcOujtxFGzov2EPGSev%2F0ZZGUwGIguiRKjxnim6ZvYSGHF2sZKACWNrny2ap32TezL54FqthPMGTAhaj5%2Fppjo0gEoxm58eEewn3%2FQKq8E0ZuRMbvego%2FBOeuVKDhIAwaVuFAuecS1QsqG%2F9aeRwPY9heFaQNSiExjdV3w6S2JZN5MROaWYHua1FsUPtreIaJQYJmf9C%2B%2BHKHekWdz6VjczPmeAI70IpkC%2BFB2p7WSnGRl8NknIWGu6UQvVk0d6Yj5skWJq7UbLaFQzqH4uSpfylBx7zMcC5X5U6GLKZ4hd5u5rz7T14th6F9uCjD1fjivuMPa2%2FMQGOqUBRV4HV%2FR6%2BZJLfkYSWDWulkPVJZ%2BfnE7IrVOr5mDA7xc4AH45nZ20vMgUMpnfDFVCqmtJmRbCV4OJf5YC2a2TjrTwEKx3wG6%2FYQxTOcpgsbdhXOVoWwat9TAtVpu79RGuNg7c1d%2Bag7tm5qTMWvJPWM3Fc4Iv8cGxIUrPFCWQmkGCNBwAIM9uCFZZ5ZGMODLm%2BhQl%2BADAs4jB3LQoLb67i%2FP95hoF&X-Amz-Signature=5f5425f322d22de217449b8a7bf0d72d673f3ac883393ee75c7326878e42309a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVVRKGZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQChAM1GgLykx%2BVYf7Gmw%2BXNKk78bJP90h9JaOnRH7ukiQIgO8SvLEu7YQp3dsnLN5XIckPU5cHilDmQSj1F3AE4QkIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLyU7%2BW%2B7kj4I70Q6yrcAxMi19RnySLPuw63WhSwd7%2BwyZelcjPGu%2BaAn4e1hOe6QnIVGEqjTfI1oXHAKSliIzen4ojQXUU%2FGKj%2FTJuzc1JTFKtg0DPcqPm5By9Vx%2BtfOC6fFOWMoycCOJfjhmfUkqT1xuxH3e2YW%2Bdb3tKvRPLI%2BU2S6d5fZ9iC%2BzDcT3pJ4VQ7r%2FkNzkSDBW5d0gWDYsJALayjJ5bwA%2Fzqs4d14QqYnYRHBZIuJJbjeV5xItBetOSPfKoE4evDtYz%2F9Nyd8y9J0Mn5M%2F%2Bar1NUiprATsYpjh9SJV35tWam2nt6fzAJ4CNnR9qLzwtuaGcOujtxFGzov2EPGSev%2F0ZZGUwGIguiRKjxnim6ZvYSGHF2sZKACWNrny2ap32TezL54FqthPMGTAhaj5%2Fppjo0gEoxm58eEewn3%2FQKq8E0ZuRMbvego%2FBOeuVKDhIAwaVuFAuecS1QsqG%2F9aeRwPY9heFaQNSiExjdV3w6S2JZN5MROaWYHua1FsUPtreIaJQYJmf9C%2B%2BHKHekWdz6VjczPmeAI70IpkC%2BFB2p7WSnGRl8NknIWGu6UQvVk0d6Yj5skWJq7UbLaFQzqH4uSpfylBx7zMcC5X5U6GLKZ4hd5u5rz7T14th6F9uCjD1fjivuMPa2%2FMQGOqUBRV4HV%2FR6%2BZJLfkYSWDWulkPVJZ%2BfnE7IrVOr5mDA7xc4AH45nZ20vMgUMpnfDFVCqmtJmRbCV4OJf5YC2a2TjrTwEKx3wG6%2FYQxTOcpgsbdhXOVoWwat9TAtVpu79RGuNg7c1d%2Bag7tm5qTMWvJPWM3Fc4Iv8cGxIUrPFCWQmkGCNBwAIM9uCFZZ5ZGMODLm%2BhQl%2BADAs4jB3LQoLb67i%2FP95hoF&X-Amz-Signature=42f7182e80200b4b9d87fcaaced80222d0f2e6e0adc069e3d6b022f22a407d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZTOXKE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDN6vXCBp4twYoZGfJDmrCBWrWFpniDBsbrGhuPxlO8CQIgWSZLA%2FSAxI2fB6KH0EiGHJ51VgOT8rRv%2FYzZV%2Bux6jkq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLMElM0RDsXBL38CQircA7PlWVuIJuSMnwj6T0YWdVgpSxTOz14kbQ51IzUC9S2Qc3cMZaYQncjKEdqLV9iAGYzNvBZaXd2hiObJTGeSgjaZqNJu3ds%2Fy2XpefoVT1Ln22m9Y03pDJbkMdHQypcnhy83h7YBMEUHdcLZwD32KutYYPy0%2F8fizAq4C8S%2BGyBi2%2B5FyGI7VwpxgQz032YhrEHnU3yAYWKVDhl0Ob3bchGMyL1DM6oNGXC7Q21yX01khN6QzoVjhELtjDkdenaVfQjI7R0Mv43axD3g%2BErAYHh%2B%2F1Bw8l52Oo0kaw%2FP8uxOuS1JM%2Fgb1%2FgzzrOahssDWF%2FJP9rfn%2FhDqlg3VIoAT6E0%2B5hszNs2W%2FiAbLIQhQd2wtISJ5aFp4RwsIS8EMFOxuqJDnG6Md5VR9DbFjw8YIUxT%2FuCAIYfd%2BbZpAnUEu0wMoNrNgEW%2Fgj5x2lwfm1V2cX2csuyBHb7N2TkRQL9ZzuX8uBiQCC3pVQwrQvFTVAFLbYZM9yrJeqhEUy3uffu%2BEO5ypGZItWKPqpD8uV8962%2FZc%2FpBgkH4OiFpo54wzPCPKcJF5HfYQWULnZmW0SKmYA3HK%2BIhxKMqKG282HH43m8%2F%2FJAwKdAPk9CQvQ8SF7ChZk0FzS%2FScqZ2VKbML%2B3%2FMQGOqUB%2FzkbDP28j7rsf7I%2BFqgbONTfhHh%2BH91sgHUut5%2Bdtjcdo2FebSvpIay0m0K5szAJcsY911Cm55AV5FvGmeMunyPN4cVL6gNPebdHDiEIXk0Zsld1dse6KAc0dLagkY6aXhJoWmfJ3eTCbS7sDldgjjFggN6f7ZVAqO4dbsLLxVQ44wdwdLY%2Fy1loEtg7QlPM2te0y551A42xh5dnLK9%2BXlP3A8MZ&X-Amz-Signature=aa6110146de337d62797ccf310453d30bb52bd2e3f1c6470cb8b2bbc243511fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5XYV2J%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCDhZavWOSmgT1yG8gW867Emv2Vyf6xkHJE1ngVqoF2GQIhAMY%2FS1XZFaFXpak8TJcU65gxvh9r5iFSbwBS7ppk5VuTKv8DCF0QABoMNjM3NDIzMTgzODA1IgxMklTxC4fQDYjql%2FEq3AOxkLwzeApPRz5U5XFYMf%2FTsrrOqG0umQND4u7oJYQZl%2BDKnOw%2BnpqFaQZmtGjzVsDxQS20ZGpYmf2B%2F3qJABkVJp%2Fy2ZqQHZuvIC5HkFnOzHEqt0PD7zKxRQJY2Zw%2BJI3RmIZr9hJFnmeyndAOwgSJTn0iOYl6ufISOkgFtuFcQxPUXKP8H9Gsjvwh7rxk6tp%2B24%2BuzJCG9boESSz3Xug8xMXLGgBTsxy2jQwWcDl1SfKfDIt6hc2M153JDqK96Rs10%2FzvChDRfPmIKRw8gJCEoOa%2FtEwQ2yKc06XW7XaTHq7BXSoW%2BM5L6Nwi17FUSqMSMwQp9mhp4IvWbhT9Y3ehLOFjW4Dfncv%2BajR%2BRUZH4E8UVxET9R%2FYb2nLpTfiYyYeMR28Qtz23AXcx%2Fgrx9nkI8GGVz5%2Fq%2BQvXhLYdhNLuJyAHfaAJbDFz1NBKMK9kwjmWJuWz3O1xDC67et1NPshtsspn80EG%2FpJMxE9DqqzwTZYdlBYSB%2FL0qfg5SNkwPnhIasA16YQS%2FxZf89xFDbKUhdcmiAEXj9bhov67imML5ptmC%2Fj3C6QvxrVMy4G8rOM%2B%2FQ1WN7f33ILNNskzZusplQTC8DeyG3EPQOsvUVKRF8Wlox4L2O2uHVy6jCBt%2FzEBjqkAf0S5XKSKFDXVHPHW2f5GHBNepw6oEDE8yqrfF8q6TYyiEJvtTM2DjlGTZkL1I5tbIV6xme%2FTWPQ%2FHWxjlVTRltx6%2BZPaqkohjkij%2B1pyH8B7JSb3lE91A6%2BYTz%2F1sfOiOgYg6dLYQs88X5yoVzQoWjknBmMrB8JPB7KOJvp1q4ps4O2uSTMTOe9nsuqX8Pjb80rkcYAThM1EQGXs91k1VCcnZcE&X-Amz-Signature=c5039107fc45f3c24cf1093c5abfd856ec76469162375449653163800c2ff017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVVRKGZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQChAM1GgLykx%2BVYf7Gmw%2BXNKk78bJP90h9JaOnRH7ukiQIgO8SvLEu7YQp3dsnLN5XIckPU5cHilDmQSj1F3AE4QkIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLyU7%2BW%2B7kj4I70Q6yrcAxMi19RnySLPuw63WhSwd7%2BwyZelcjPGu%2BaAn4e1hOe6QnIVGEqjTfI1oXHAKSliIzen4ojQXUU%2FGKj%2FTJuzc1JTFKtg0DPcqPm5By9Vx%2BtfOC6fFOWMoycCOJfjhmfUkqT1xuxH3e2YW%2Bdb3tKvRPLI%2BU2S6d5fZ9iC%2BzDcT3pJ4VQ7r%2FkNzkSDBW5d0gWDYsJALayjJ5bwA%2Fzqs4d14QqYnYRHBZIuJJbjeV5xItBetOSPfKoE4evDtYz%2F9Nyd8y9J0Mn5M%2F%2Bar1NUiprATsYpjh9SJV35tWam2nt6fzAJ4CNnR9qLzwtuaGcOujtxFGzov2EPGSev%2F0ZZGUwGIguiRKjxnim6ZvYSGHF2sZKACWNrny2ap32TezL54FqthPMGTAhaj5%2Fppjo0gEoxm58eEewn3%2FQKq8E0ZuRMbvego%2FBOeuVKDhIAwaVuFAuecS1QsqG%2F9aeRwPY9heFaQNSiExjdV3w6S2JZN5MROaWYHua1FsUPtreIaJQYJmf9C%2B%2BHKHekWdz6VjczPmeAI70IpkC%2BFB2p7WSnGRl8NknIWGu6UQvVk0d6Yj5skWJq7UbLaFQzqH4uSpfylBx7zMcC5X5U6GLKZ4hd5u5rz7T14th6F9uCjD1fjivuMPa2%2FMQGOqUBRV4HV%2FR6%2BZJLfkYSWDWulkPVJZ%2BfnE7IrVOr5mDA7xc4AH45nZ20vMgUMpnfDFVCqmtJmRbCV4OJf5YC2a2TjrTwEKx3wG6%2FYQxTOcpgsbdhXOVoWwat9TAtVpu79RGuNg7c1d%2Bag7tm5qTMWvJPWM3Fc4Iv8cGxIUrPFCWQmkGCNBwAIM9uCFZZ5ZGMODLm%2BhQl%2BADAs4jB3LQoLb67i%2FP95hoF&X-Amz-Signature=a893fb0c0060bf91015747a410f14ffdcd23e658ffd737f5bce15c33aeb2db92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
