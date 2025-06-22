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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX53ZWKJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdB0IZPlQtZsjqZEGZxzjdX4VQGJGemQG0KtKLSyforQIhAIGPoGq%2FA2mjnXhe073gfP0QWa0RbO%2Bg8v%2BIninaw%2FqMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynYSJl8WQcHgvmmGsq3AMZZW4aXXKFrkRfk3RCct5UhZbKZDuDtFefVYaQ%2BcF9gXUGXpYdX2zx5CFLr5JAAj1woeuQMg%2FcGYZCBu7PyBCmRc8DwwBgdMA3EW6HYFTI%2Fv%2FAfxGzWtv9Yl6AOXm4bLFciS4fQ23Y0mYtlcXQyzaqK%2BhVkrbZnLf5sYVBXT4sW%2FhJEI9heCdtNLtRKoRF5pSKcdF%2F2p7jgvB2weI7ouMJLe90w1gBOjWsvfO%2FUI3WdF%2BzQ1DB2i9jCZqq0lkyeNC9c13iZLv%2FvFIbJUO6kZPpnjzHllomz47FW13Cn7pBlWLrFGHjXyWOG8PZ75Fxnz4zzhJDkTVn4ojanczH8Vbyc%2Fd%2BSzODC1AChL%2BckdvngXAgqFG1OebssSke91ysxjYaInHdVStud41GzJ988Ch93AgUsvnrnsU9xPpCMCxRQ5IklmXaInktM69Opo%2B7ded9t5ClKhx96LvTJiPn3HmknVc0hSHRJts3yRTUfXLIpjN0C9KTLelmu0Q3hUmo3PVTgm%2BbEwUA5kgdzwQjcmGbII0Mv75%2BAPZ9klm8QMHOWNaBsv8SnK8%2FubOOohN0lqNXEvm7lWj2fdeErrzjRxlcDO2%2FQFyOUQaH1i0cgFz1A3Tg0d7Fqw8D%2FY%2BvGzCH8%2BDCBjqkAUJraVL4bdtomukZbCHcZn5m%2BGh%2FPbfZz0j2%2BEkIDj6BUrQ4RYV33hwY3yMjehhPBzKpqZz3JwZJb2TSxzR881o9045bb8bOLozhukMocO8zeGAa1HxuCPesO%2BGRdCMdKTVp2qxbQtiCpfwFGoOo7UnyFp1lpyysbGNT6gMN7q5cAOcO4soBacPDtDGOADZhIO0mgnD0bYD1s4Yf8mjr7BiaDSxj&X-Amz-Signature=5de66b1be141dcd5b606d0f0fc23a9398924acd6ce68d08c9154fb3cdfd53ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX53ZWKJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdB0IZPlQtZsjqZEGZxzjdX4VQGJGemQG0KtKLSyforQIhAIGPoGq%2FA2mjnXhe073gfP0QWa0RbO%2Bg8v%2BIninaw%2FqMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynYSJl8WQcHgvmmGsq3AMZZW4aXXKFrkRfk3RCct5UhZbKZDuDtFefVYaQ%2BcF9gXUGXpYdX2zx5CFLr5JAAj1woeuQMg%2FcGYZCBu7PyBCmRc8DwwBgdMA3EW6HYFTI%2Fv%2FAfxGzWtv9Yl6AOXm4bLFciS4fQ23Y0mYtlcXQyzaqK%2BhVkrbZnLf5sYVBXT4sW%2FhJEI9heCdtNLtRKoRF5pSKcdF%2F2p7jgvB2weI7ouMJLe90w1gBOjWsvfO%2FUI3WdF%2BzQ1DB2i9jCZqq0lkyeNC9c13iZLv%2FvFIbJUO6kZPpnjzHllomz47FW13Cn7pBlWLrFGHjXyWOG8PZ75Fxnz4zzhJDkTVn4ojanczH8Vbyc%2Fd%2BSzODC1AChL%2BckdvngXAgqFG1OebssSke91ysxjYaInHdVStud41GzJ988Ch93AgUsvnrnsU9xPpCMCxRQ5IklmXaInktM69Opo%2B7ded9t5ClKhx96LvTJiPn3HmknVc0hSHRJts3yRTUfXLIpjN0C9KTLelmu0Q3hUmo3PVTgm%2BbEwUA5kgdzwQjcmGbII0Mv75%2BAPZ9klm8QMHOWNaBsv8SnK8%2FubOOohN0lqNXEvm7lWj2fdeErrzjRxlcDO2%2FQFyOUQaH1i0cgFz1A3Tg0d7Fqw8D%2FY%2BvGzCH8%2BDCBjqkAUJraVL4bdtomukZbCHcZn5m%2BGh%2FPbfZz0j2%2BEkIDj6BUrQ4RYV33hwY3yMjehhPBzKpqZz3JwZJb2TSxzR881o9045bb8bOLozhukMocO8zeGAa1HxuCPesO%2BGRdCMdKTVp2qxbQtiCpfwFGoOo7UnyFp1lpyysbGNT6gMN7q5cAOcO4soBacPDtDGOADZhIO0mgnD0bYD1s4Yf8mjr7BiaDSxj&X-Amz-Signature=d6b750a78e0b5e6c839517f20680daaf4fc5a39d18b208ec6484f83078345462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX53ZWKJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdB0IZPlQtZsjqZEGZxzjdX4VQGJGemQG0KtKLSyforQIhAIGPoGq%2FA2mjnXhe073gfP0QWa0RbO%2Bg8v%2BIninaw%2FqMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynYSJl8WQcHgvmmGsq3AMZZW4aXXKFrkRfk3RCct5UhZbKZDuDtFefVYaQ%2BcF9gXUGXpYdX2zx5CFLr5JAAj1woeuQMg%2FcGYZCBu7PyBCmRc8DwwBgdMA3EW6HYFTI%2Fv%2FAfxGzWtv9Yl6AOXm4bLFciS4fQ23Y0mYtlcXQyzaqK%2BhVkrbZnLf5sYVBXT4sW%2FhJEI9heCdtNLtRKoRF5pSKcdF%2F2p7jgvB2weI7ouMJLe90w1gBOjWsvfO%2FUI3WdF%2BzQ1DB2i9jCZqq0lkyeNC9c13iZLv%2FvFIbJUO6kZPpnjzHllomz47FW13Cn7pBlWLrFGHjXyWOG8PZ75Fxnz4zzhJDkTVn4ojanczH8Vbyc%2Fd%2BSzODC1AChL%2BckdvngXAgqFG1OebssSke91ysxjYaInHdVStud41GzJ988Ch93AgUsvnrnsU9xPpCMCxRQ5IklmXaInktM69Opo%2B7ded9t5ClKhx96LvTJiPn3HmknVc0hSHRJts3yRTUfXLIpjN0C9KTLelmu0Q3hUmo3PVTgm%2BbEwUA5kgdzwQjcmGbII0Mv75%2BAPZ9klm8QMHOWNaBsv8SnK8%2FubOOohN0lqNXEvm7lWj2fdeErrzjRxlcDO2%2FQFyOUQaH1i0cgFz1A3Tg0d7Fqw8D%2FY%2BvGzCH8%2BDCBjqkAUJraVL4bdtomukZbCHcZn5m%2BGh%2FPbfZz0j2%2BEkIDj6BUrQ4RYV33hwY3yMjehhPBzKpqZz3JwZJb2TSxzR881o9045bb8bOLozhukMocO8zeGAa1HxuCPesO%2BGRdCMdKTVp2qxbQtiCpfwFGoOo7UnyFp1lpyysbGNT6gMN7q5cAOcO4soBacPDtDGOADZhIO0mgnD0bYD1s4Yf8mjr7BiaDSxj&X-Amz-Signature=ee2c1867cc7f9c1dd56228fc0c433880900f195dc1dac6af534764ab87e21bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EJM2TGR%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCb1Hv1Q4gJQOK0P7%2BOPhh0IOflJVYimw%2BhsEvuIeeV%2BgIhANpWALanbzKWGlN0ga8z%2BP%2BhMIXDlRck%2F3ZZ7HHj0OyHKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcY57ELXOj0wCvrSEq3AOvDqoBvL57lUhlOazQbVCL%2B7gpbhh89jX4uUaRM%2BUEWZkfXEf%2FI1sQ7YqjLmsZtdnlR65NQjAQ%2BXyq1%2FWcIhLAYYqEXnYjzhZ8XqvinxzkgG8n04o1m2fsYPU6JvHTFBfwlRgky7krR5chY4Pih9GqdX%2ByNYCqYi8cSilOEePrxSJr1dSQxi78kuHyV71mCy7LhUhk4DHAiZ9cwWmb%2BWuUdC3C7Kr8zGyXo%2FcDXavlD8AepzV3VzpY6Fu%2B58Q0nCZhBQpkVPHuvN867gSM%2ByprsxE2O%2F7G5OiKabePHmmydsyjfU0VeI6JV6IxbkVqQStU%2FbsyJwCQf7Bv9c7BPQkMf6lM9titS1aYIutqcRkhuMiTiftU973uN7D0sTb80hi1GoaZE1imgqyxvsgIqvLIiwetvhMEx2hc0Pr5xORppzipLGokvqCmr96BssR0DbwnH00IkPU3RzeEAIiXr8y0XtWfBVuZsbxuGrahUmsAnHsCdr%2BM7lPm7E%2FBEE0c1oRulxb3%2FGPfodsib9NB28nnfsuWxptyo%2F%2FhZS3NmwQKOzYB9eWN7sK0l%2F1qr0P6yZhoaD%2BdGiZVVqe1sAnldOHROi087sGQr%2Bnjob9Jsw97OeV2AhB8zl4yu7sfDDDX%2B%2BDCBjqkARQlAQYj5FTtEkiKNl5erRfG80ox7IuZxbkTjfj9sGFqjzem1ucFehPwOT06p2qBfQH%2BjVcnCCOxufFZK%2BaMz2QWMYESMJcC5orfRli4sBZbX4q448T5DKn5OoxgRdqWDXwvWST2uPxRk7CqiV9C0iRGi3KIZRD7y0qMOVuTZiNa9MWZ03OwIx6VlEa6kSAzDMbx0oZkJEQ8BTu7OuLk491YeRj4&X-Amz-Signature=27760a754ec31433da69c934cd894d4c8668b22cee6571f60cc3082cb3942cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBWADDK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQD6m1H5UiTFm8BAaHY1OQvHTYwX7CRqsxHKRjUdm0dDJwIgD8I%2FUFvcsB6s3w%2B4%2FpzK3ZnUIhTxWZz%2Fi7dfFDrw0tQqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOQwz%2FCgdzOmAsc2SrcA8UoDqY4CyRC6FNsr3XdzQe3GpFDHrEqMlh8Yexqdka%2BH3osHGOtGItFZD%2Fhw2ZQk819fIZs5%2BRc1%2F%2Fe5JXSjb2XgEVkxO5ea43JaUsjo%2F2YzroDN7umlaorqXTYfqzPW1wUvfoM1RW71GuJrUfOl8SA6x0YmI%2BqE9kQcQk6sDI0QpspObUuN3%2BsEgq5Caj36nEth3iR3Hojy%2FZJu3s1nNjPvuYMqysskgD7%2BqfieXcET22MFyazcsmSWAGGeAVCzefGa4v%2F7DMZPboAjN3Uj8LWvIOlYuw6t0OCko0cN3yYFJOhgoDKLa3BVYMztA%2FpMKzOdFzoJzRyvHCSvGqNU7p136Os51Kuns%2BchkYzSabPrS13HWv7Lqm%2FwBEvkf3C2IPLgxqcZCuF0XNIEjAGiJVf2zosXKp8L4hO5PNSsMvhFTChSbvQnNgYgSHHmWBSgFs5MCWfemv6ZkLVbDZF1YEPfLX1On9cVco4zKW9SAqG6hn4pgcZOZg9UeejogifAZzUMTY6nn0%2BsHYPWg600wcSl9NxXPMvz5TQKf8AAMNODbW%2BhlALjfOu%2FS4IsSmXoZAlPbwZjrsApkX0lU3A5NS2obpWpQw8LY%2B9ohl6ZYaYJ1qWCdJWtaKW7w5rMIio4MIGOqUBQUz7JjXsg9K2VULpKmLO%2FGIQPk4RwAMu3mU6U2Qj6y6w3RsU3eA%2BRfggHpBA%2FAiyNJzB8yqmIEirA6CGOfDzuA3%2FbpjTQaNSES%2FHZN%2B9xYv0WnEHNAXOyn5oPuPwrIemsCcdLeEEb2tsFvXpKO0dEuWurQmlVZLewWvMsydZwiSSHbgZzBmBjJtWJG%2B%2Fbr8cZxxOxBiaWHHYsVR2z7Q5mnh6Z%2Bce&X-Amz-Signature=bf40f67f493ea30481bc6ed212867da70c8f0e7d05264a1efa9e2ecf64c474a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX53ZWKJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCdB0IZPlQtZsjqZEGZxzjdX4VQGJGemQG0KtKLSyforQIhAIGPoGq%2FA2mjnXhe073gfP0QWa0RbO%2Bg8v%2BIninaw%2FqMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynYSJl8WQcHgvmmGsq3AMZZW4aXXKFrkRfk3RCct5UhZbKZDuDtFefVYaQ%2BcF9gXUGXpYdX2zx5CFLr5JAAj1woeuQMg%2FcGYZCBu7PyBCmRc8DwwBgdMA3EW6HYFTI%2Fv%2FAfxGzWtv9Yl6AOXm4bLFciS4fQ23Y0mYtlcXQyzaqK%2BhVkrbZnLf5sYVBXT4sW%2FhJEI9heCdtNLtRKoRF5pSKcdF%2F2p7jgvB2weI7ouMJLe90w1gBOjWsvfO%2FUI3WdF%2BzQ1DB2i9jCZqq0lkyeNC9c13iZLv%2FvFIbJUO6kZPpnjzHllomz47FW13Cn7pBlWLrFGHjXyWOG8PZ75Fxnz4zzhJDkTVn4ojanczH8Vbyc%2Fd%2BSzODC1AChL%2BckdvngXAgqFG1OebssSke91ysxjYaInHdVStud41GzJ988Ch93AgUsvnrnsU9xPpCMCxRQ5IklmXaInktM69Opo%2B7ded9t5ClKhx96LvTJiPn3HmknVc0hSHRJts3yRTUfXLIpjN0C9KTLelmu0Q3hUmo3PVTgm%2BbEwUA5kgdzwQjcmGbII0Mv75%2BAPZ9klm8QMHOWNaBsv8SnK8%2FubOOohN0lqNXEvm7lWj2fdeErrzjRxlcDO2%2FQFyOUQaH1i0cgFz1A3Tg0d7Fqw8D%2FY%2BvGzCH8%2BDCBjqkAUJraVL4bdtomukZbCHcZn5m%2BGh%2FPbfZz0j2%2BEkIDj6BUrQ4RYV33hwY3yMjehhPBzKpqZz3JwZJb2TSxzR881o9045bb8bOLozhukMocO8zeGAa1HxuCPesO%2BGRdCMdKTVp2qxbQtiCpfwFGoOo7UnyFp1lpyysbGNT6gMN7q5cAOcO4soBacPDtDGOADZhIO0mgnD0bYD1s4Yf8mjr7BiaDSxj&X-Amz-Signature=a4749bbdb626f4808911c9199e4993e63af06df9c4e2b439873f5632cd375443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
