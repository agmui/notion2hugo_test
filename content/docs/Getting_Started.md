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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHUAHCD5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbhPN6SK0orw1bj7CqDXp2GSM69qwv5BtRw0rB%2FHBkFAiEAnxHaFSzlbU58H3OQklOUsu8odPwJa3auZhWvgWz1eN0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLFVlJQHv9%2BzaXE6ayrcAxdaxEfaakXwG%2BGkNJpndvl3ucSNdxHBy930tdOobA7wzW%2Bw6x9e7fl2Qqv644YLsEbGAM0H%2BZg8si%2B1rCRXEy%2F1iYXjRTBexOMKB45PgvvEUcHGFsDJ2xz%2FWrVLz0VZwmVLmaH6JQkJ%2BCt%2BCjXikl%2F%2F1riJY4ZWlrysjh7Ug0%2BH4qdWypD%2BhQHIP0e%2FjEy9hQmKnDofH4X1iuYp9x0oOrHSDHlC5AI3WCQNUF8PEDM1ji94IRvVS3Q7NqF%2F3mHr%2B%2BZXPiPvvAOGlVhy%2FSykC4zxsnLtc2sjMpxLX5RfVP8gTj%2B6gYjRdN%2FEfCCObOheg02wCV851nHFgQcwU2SvKpl%2BOnK5s5735J6tsaMJpnFIDbm1U6s7UWOfafnsLhDrMmTR7ONBgwBg0RueSvXVKxTnCUwirjeRDsuiH6tg%2FxAFJurIZ4LdwsCztwa%2BJIIcFwTZ7H6moD4fU3OasTf0KTbldigTwWGgmJ8WBOoFMrVw2FpIatgGl9sQ1jZuSTFrzA8ZcmAI%2B3kPeHEEH463F2IlmjEEqLo8tNtGH453z7SsK0rING0dFwd8WfZcGIKbeZEHX7hQPTBLpgOM9VRW%2Bt5mxy4eQSw6%2FVSkS4y8ObY9zWqpEnJAvpDireVFMMzKtr0GOqUBoB5UgJGdmpzpMcZBxmCHisZfVFGH6kJC%2BtnIj8UoVk%2B3XCu8kJT1m%2BB9LiT81pF2lXKOIvie7wgn%2BABrXyPxJmNRrORFd%2FycAeZb1ejl%2BNHhi4r%2FALJl14LB7i8X9Dq28ep6JCck%2B4avVquITp%2FxXFpCYB25ZWhXoSNYDDKNByE7QHWrO0EZ3eNmb1aSMxSwyIX49tFhIGFilQSV2fdcKeDvDQUc&X-Amz-Signature=3f938c5c5ee2b61000953e0284f5bf84c512aa7be964d1aad7359b3bf702450c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHUAHCD5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbhPN6SK0orw1bj7CqDXp2GSM69qwv5BtRw0rB%2FHBkFAiEAnxHaFSzlbU58H3OQklOUsu8odPwJa3auZhWvgWz1eN0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLFVlJQHv9%2BzaXE6ayrcAxdaxEfaakXwG%2BGkNJpndvl3ucSNdxHBy930tdOobA7wzW%2Bw6x9e7fl2Qqv644YLsEbGAM0H%2BZg8si%2B1rCRXEy%2F1iYXjRTBexOMKB45PgvvEUcHGFsDJ2xz%2FWrVLz0VZwmVLmaH6JQkJ%2BCt%2BCjXikl%2F%2F1riJY4ZWlrysjh7Ug0%2BH4qdWypD%2BhQHIP0e%2FjEy9hQmKnDofH4X1iuYp9x0oOrHSDHlC5AI3WCQNUF8PEDM1ji94IRvVS3Q7NqF%2F3mHr%2B%2BZXPiPvvAOGlVhy%2FSykC4zxsnLtc2sjMpxLX5RfVP8gTj%2B6gYjRdN%2FEfCCObOheg02wCV851nHFgQcwU2SvKpl%2BOnK5s5735J6tsaMJpnFIDbm1U6s7UWOfafnsLhDrMmTR7ONBgwBg0RueSvXVKxTnCUwirjeRDsuiH6tg%2FxAFJurIZ4LdwsCztwa%2BJIIcFwTZ7H6moD4fU3OasTf0KTbldigTwWGgmJ8WBOoFMrVw2FpIatgGl9sQ1jZuSTFrzA8ZcmAI%2B3kPeHEEH463F2IlmjEEqLo8tNtGH453z7SsK0rING0dFwd8WfZcGIKbeZEHX7hQPTBLpgOM9VRW%2Bt5mxy4eQSw6%2FVSkS4y8ObY9zWqpEnJAvpDireVFMMzKtr0GOqUBoB5UgJGdmpzpMcZBxmCHisZfVFGH6kJC%2BtnIj8UoVk%2B3XCu8kJT1m%2BB9LiT81pF2lXKOIvie7wgn%2BABrXyPxJmNRrORFd%2FycAeZb1ejl%2BNHhi4r%2FALJl14LB7i8X9Dq28ep6JCck%2B4avVquITp%2FxXFpCYB25ZWhXoSNYDDKNByE7QHWrO0EZ3eNmb1aSMxSwyIX49tFhIGFilQSV2fdcKeDvDQUc&X-Amz-Signature=50fdccaba268033269417319a227b333a5c4f2fc083e069da206b991011bdfea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634UH5FAG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGo7Vt%2FBh1YILg%2B%2FAcqKngZSM8r%2BfaL%2Bcp5ORRe5H6YcAiA6iZNF9e2YBhxXLi%2Fa9M5B05vrWiBVy9iE9WprmIc8Xir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMud438yUmYmMpFFoVKtwDJDuT0pzbkcTnEsQypgPjcH8FN6pmiI%2BDZpKNoCIndVmzgOprBG8Qm3aiqqqjI2%2Fue4vj3kf%2BuRz1xrFc0Aaw37EKNea9ar0N8pXmxAH%2Fj%2BR0HU8daTfrqLN%2BaN5zT0ge0LWuyKjWRX0SuaPvj1swDYxPuOR9G911Lj7h4ZCvnPMlvM6%2BBUG%2FRiNFjxPIM9f1o5nH0is5R5e6SvgFu7Q07Cc0WpDyoOxYY%2FM1uoYgkJwvwhLWRcrk%2Fm0N2n8A%2BTGkaLvxqjp0%2BRN6PJqRS9mCyws8SEYkIAzrkNyuVehCPC08%2Fq8I5xkn7QG9bntmAfOAFMPdLzb7y7rFvqgyV5guc7GWABa64eemvkikZAqelIxrrPgWRk1h6auqeNF4ysLmWBPLur%2B%2BJoOzsr26Pn9QrQW1%2BG36T4qTIaZRWfZ6fcTeRTqLuBJf2RH4QL2UO7ecS%2BPZKD7VcDDGUy0k6IQbvq5WsrWDYgbIYg%2FtD0LPaqie6IXIQQdENaAqjvOSKZvejtxrvvnoK6faC0RoK%2F0CO70fKLO4IUeSsqE2oHKJfmCv7SjyTrGGH56r0Nun4xjAvjS%2Fskj9YGA5PPwwzswC2PJi4B56K3gJkFl8jhpN0oYPAKMRMJcjnA1Tnj8w48m2vQY6pgHy0NIcVOB16FFx%2BSk0WMalPa2FrcFsYItegXYOdxEWwqK61CxNTiJ7NFLTWkss7ayPHVNqnPiMQvkjhnt4dpGnxY6EDybCj1oSFOvz1Pui4ALdqxXSMgskeXAMJ1eFO1Lkil0VtTAgDhlD2iRmrTxk3GQVc02cH41ECse6Vj5%2FNvCkEtxP%2F2%2F8ajecO6xo31jE8hKD9RNV2oIBy1KQe1LgXM6DuJsJ&X-Amz-Signature=9a09184680560837bb26736f3d9b2cfe19e92fb85c9e60c0980228b01c68aece&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664PIJ5M2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXkgRUeqJHyfgUI991tXGrYqdomqHrAV8d%2FQ%2Ff6SLgGAiB9mIjPf2yqap7b1nD7Sn5qh9awyglOTzKI6KAT6lM7%2Byr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMbNBzcUKYAsRQZV%2BsKtwD0wzQH0j6PrMUKAXHILet6KY1K2kmU%2FzyU8d22UZ2quSoOMRUo1wGxZp%2BMAUk%2BtVPmkf0onNuBdpA05%2FC%2Faurt073H3i%2Bu4VJwzpidDhUn94XDG0%2Fcm7IAbkbd8xG%2FpLGJ92cNkFhp0oRk1aNIiVUIDmgMWXMRk1UlDn7w4PDK3XEY5Kv9v2BZl0jnktZO4yqfmrC28UHBBziSK4DcJC9XJHujp7%2BoZsCcYhSMv83WeOhHMtqn32J38eEgIaQi7rtXbtCvzfTm2og63BqcU8Lg82hYIU6%2BX0FBQULF6qvyMcwPb1Rm7%2BcMpi5a4nQs9Xh3JZ5VNj6mSir2vfEOQhDxF2kBi5ai1%2F6MvASxpXPfpGWDI2eYcqBWYQH5w8y2ryp6HKh9Pdoq6DAo55YzVAzCwXt5T%2B1PH%2BmAo3SnmUaGUhVHdNhns%2BB2BNNAUpDOshCAOwdcT9BQsOpZ8YG3lB6hTqhZKS5SQGwu7%2BmyFTba%2B5P9zQ69%2FxpiWKFz5TRRbhgf3H4WWFb56EMJ5M5vtXXYKeT19fV7kdhCAlivH97OHmLMgovOxdtieIh3fdB8bvV0JSGJnZv%2FRV4Vb5KaZdwqThcaTQgnWsNVo6O2vzydpUA3uh38i3M%2F4VY7Iswysm2vQY6pgFqyIQ8RO0Fb9CyvOhShJJXjJjtKBbedBDB4Q%2FfDEq07jF92yoaTd45sKWwOv35B7F0FQWFQgpLhplUqvvZy9i%2FClGgtU%2B8ATcB3kkoacBNYir84Nj%2B3ZS4x%2F1mLOBhb5oIgJdBVaemq2ph9WRjiy%2FPryxVd5Tg2AdKWcSYOSQy%2FnabBEaFqsKccVcar979RiTKORDGbfOJvmwASsdc64ACJxBlpgnL&X-Amz-Signature=7a6ce2b9962ba47d517adc0858b4bb34d695536ecbb4f5ac1636403a79a5a15a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHUAHCD5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbhPN6SK0orw1bj7CqDXp2GSM69qwv5BtRw0rB%2FHBkFAiEAnxHaFSzlbU58H3OQklOUsu8odPwJa3auZhWvgWz1eN0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDLFVlJQHv9%2BzaXE6ayrcAxdaxEfaakXwG%2BGkNJpndvl3ucSNdxHBy930tdOobA7wzW%2Bw6x9e7fl2Qqv644YLsEbGAM0H%2BZg8si%2B1rCRXEy%2F1iYXjRTBexOMKB45PgvvEUcHGFsDJ2xz%2FWrVLz0VZwmVLmaH6JQkJ%2BCt%2BCjXikl%2F%2F1riJY4ZWlrysjh7Ug0%2BH4qdWypD%2BhQHIP0e%2FjEy9hQmKnDofH4X1iuYp9x0oOrHSDHlC5AI3WCQNUF8PEDM1ji94IRvVS3Q7NqF%2F3mHr%2B%2BZXPiPvvAOGlVhy%2FSykC4zxsnLtc2sjMpxLX5RfVP8gTj%2B6gYjRdN%2FEfCCObOheg02wCV851nHFgQcwU2SvKpl%2BOnK5s5735J6tsaMJpnFIDbm1U6s7UWOfafnsLhDrMmTR7ONBgwBg0RueSvXVKxTnCUwirjeRDsuiH6tg%2FxAFJurIZ4LdwsCztwa%2BJIIcFwTZ7H6moD4fU3OasTf0KTbldigTwWGgmJ8WBOoFMrVw2FpIatgGl9sQ1jZuSTFrzA8ZcmAI%2B3kPeHEEH463F2IlmjEEqLo8tNtGH453z7SsK0rING0dFwd8WfZcGIKbeZEHX7hQPTBLpgOM9VRW%2Bt5mxy4eQSw6%2FVSkS4y8ObY9zWqpEnJAvpDireVFMMzKtr0GOqUBoB5UgJGdmpzpMcZBxmCHisZfVFGH6kJC%2BtnIj8UoVk%2B3XCu8kJT1m%2BB9LiT81pF2lXKOIvie7wgn%2BABrXyPxJmNRrORFd%2FycAeZb1ejl%2BNHhi4r%2FALJl14LB7i8X9Dq28ep6JCck%2B4avVquITp%2FxXFpCYB25ZWhXoSNYDDKNByE7QHWrO0EZ3eNmb1aSMxSwyIX49tFhIGFilQSV2fdcKeDvDQUc&X-Amz-Signature=3a709cf7c9fb877401e231fae3eac4e444930aac4bbf8382030a2d8aaa5c0e47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
