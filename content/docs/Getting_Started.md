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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NRYFNA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Wn2EG16iyAAfrJRZrdDeqWJ5T0isFFJ%2B7d1odYsG3AiEA7Rw55Kxt2lPs8fWIxQ%2Bg7jI1dun2s0p%2F6jMslwAMt6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8oj2YFG2Cuty1DircA2MbVmdoNPBIvDGL%2F%2FV%2BSWS9az9ynSRlaao8G1ig1FHitDZJ1k7INEuLZbhHmqoENOUNevPGI1QcVZAWwIronVuA0KxVMe3Ep7dGbTF1pewUYAEO6sJhj9coFe7Iwa2gBpIbzlwAirqHiO%2B6r6ISyTzJp1FljyuK%2BkS4MbfR%2BCtKUTCzQ6GS6WY9HSjwvBuze5GMTU1yzgHVGDr85IxcRP8UNig%2B7aVrQ4gshn693huG1NEFc%2FBYsVVe2FhUf4QBmLgQtOWs10I35tiKwV%2BOgXUK0sU82EscBlWML2I2TN46xP7UUbaUPIdVI%2Fi1ceOG7k0HEPcEjsq0gAq1MsgujUdWFZyIXjs7trTCECKCVP87qhPpgI2k0cS0%2BXoXyeCC6gbb7hTL6mzIabkvLGymDmWg6uIEsOUV1vsfeuEUs6sDiUY5kU1Jwh11P1%2Fu%2BPCNoFfm9Fyx99xp7sPo80rKohCrj69f0C1m8GBSCcFYWm74hny8qKslWYEPaUXEXYeJT%2BhV47yCT2jmiP3iJqrtQF44Uhv5xVzokihUKE5%2BgYwk7xRd1GCixAJRLpmZh%2FTJsFRvcUA3EDeFmyy4kSTx1SmKXtQJ%2BLjIyFQpo6jvNARYTzvNCMkc0bCu9ZBTMNLV2cIGOqUBtnhXTjaben77IEO%2BIdyp%2FvKdDyb8E0DVhn2CWf1zfAzwSFUN2w1pabMyWO5PMtD45h2XkDjFfyZ0ZbLeyCuIVQ61XpFTLiXPlK0tSHNMcO1izqZV%2B1wWPzVDtIx1SlbAQNuIvkw%2FeIemB7%2Fn1jNClfYAA9XMtkY1I6gmNN8Zijs50%2BtFTTXUOrEFjzbFSyoIAIdUgsEoy%2Fi5OX01WGx2pHkdnNhH&X-Amz-Signature=6b9241942ba13f5a2306d8ff6793ec4413884263ee10ec154b5ef1fcafbb954f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NRYFNA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Wn2EG16iyAAfrJRZrdDeqWJ5T0isFFJ%2B7d1odYsG3AiEA7Rw55Kxt2lPs8fWIxQ%2Bg7jI1dun2s0p%2F6jMslwAMt6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8oj2YFG2Cuty1DircA2MbVmdoNPBIvDGL%2F%2FV%2BSWS9az9ynSRlaao8G1ig1FHitDZJ1k7INEuLZbhHmqoENOUNevPGI1QcVZAWwIronVuA0KxVMe3Ep7dGbTF1pewUYAEO6sJhj9coFe7Iwa2gBpIbzlwAirqHiO%2B6r6ISyTzJp1FljyuK%2BkS4MbfR%2BCtKUTCzQ6GS6WY9HSjwvBuze5GMTU1yzgHVGDr85IxcRP8UNig%2B7aVrQ4gshn693huG1NEFc%2FBYsVVe2FhUf4QBmLgQtOWs10I35tiKwV%2BOgXUK0sU82EscBlWML2I2TN46xP7UUbaUPIdVI%2Fi1ceOG7k0HEPcEjsq0gAq1MsgujUdWFZyIXjs7trTCECKCVP87qhPpgI2k0cS0%2BXoXyeCC6gbb7hTL6mzIabkvLGymDmWg6uIEsOUV1vsfeuEUs6sDiUY5kU1Jwh11P1%2Fu%2BPCNoFfm9Fyx99xp7sPo80rKohCrj69f0C1m8GBSCcFYWm74hny8qKslWYEPaUXEXYeJT%2BhV47yCT2jmiP3iJqrtQF44Uhv5xVzokihUKE5%2BgYwk7xRd1GCixAJRLpmZh%2FTJsFRvcUA3EDeFmyy4kSTx1SmKXtQJ%2BLjIyFQpo6jvNARYTzvNCMkc0bCu9ZBTMNLV2cIGOqUBtnhXTjaben77IEO%2BIdyp%2FvKdDyb8E0DVhn2CWf1zfAzwSFUN2w1pabMyWO5PMtD45h2XkDjFfyZ0ZbLeyCuIVQ61XpFTLiXPlK0tSHNMcO1izqZV%2B1wWPzVDtIx1SlbAQNuIvkw%2FeIemB7%2Fn1jNClfYAA9XMtkY1I6gmNN8Zijs50%2BtFTTXUOrEFjzbFSyoIAIdUgsEoy%2Fi5OX01WGx2pHkdnNhH&X-Amz-Signature=4d3ddaa240496b35bc5c02ed2efa232c297464bf5a2d94a7a31748eb97e67f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NRYFNA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Wn2EG16iyAAfrJRZrdDeqWJ5T0isFFJ%2B7d1odYsG3AiEA7Rw55Kxt2lPs8fWIxQ%2Bg7jI1dun2s0p%2F6jMslwAMt6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8oj2YFG2Cuty1DircA2MbVmdoNPBIvDGL%2F%2FV%2BSWS9az9ynSRlaao8G1ig1FHitDZJ1k7INEuLZbhHmqoENOUNevPGI1QcVZAWwIronVuA0KxVMe3Ep7dGbTF1pewUYAEO6sJhj9coFe7Iwa2gBpIbzlwAirqHiO%2B6r6ISyTzJp1FljyuK%2BkS4MbfR%2BCtKUTCzQ6GS6WY9HSjwvBuze5GMTU1yzgHVGDr85IxcRP8UNig%2B7aVrQ4gshn693huG1NEFc%2FBYsVVe2FhUf4QBmLgQtOWs10I35tiKwV%2BOgXUK0sU82EscBlWML2I2TN46xP7UUbaUPIdVI%2Fi1ceOG7k0HEPcEjsq0gAq1MsgujUdWFZyIXjs7trTCECKCVP87qhPpgI2k0cS0%2BXoXyeCC6gbb7hTL6mzIabkvLGymDmWg6uIEsOUV1vsfeuEUs6sDiUY5kU1Jwh11P1%2Fu%2BPCNoFfm9Fyx99xp7sPo80rKohCrj69f0C1m8GBSCcFYWm74hny8qKslWYEPaUXEXYeJT%2BhV47yCT2jmiP3iJqrtQF44Uhv5xVzokihUKE5%2BgYwk7xRd1GCixAJRLpmZh%2FTJsFRvcUA3EDeFmyy4kSTx1SmKXtQJ%2BLjIyFQpo6jvNARYTzvNCMkc0bCu9ZBTMNLV2cIGOqUBtnhXTjaben77IEO%2BIdyp%2FvKdDyb8E0DVhn2CWf1zfAzwSFUN2w1pabMyWO5PMtD45h2XkDjFfyZ0ZbLeyCuIVQ61XpFTLiXPlK0tSHNMcO1izqZV%2B1wWPzVDtIx1SlbAQNuIvkw%2FeIemB7%2Fn1jNClfYAA9XMtkY1I6gmNN8Zijs50%2BtFTTXUOrEFjzbFSyoIAIdUgsEoy%2Fi5OX01WGx2pHkdnNhH&X-Amz-Signature=104aafcd7d0ca5867d30e5642ba0486d0bdba9789fe3659492d7eb33d8c6283a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHRG3KU%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFjnI8UVpDkqWVC2ofdH5I4odyDQUI2d19TR00IAQZmQIgXdIr2%2Bh0ya0dPHnmP1oZNcsZSK%2BTAENcRt9NOPH4T%2FoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMZ0dTplPo70zHTRCrcA695H%2BFWWZFeGGJu7hvsvbmXH%2FCbwtzI7dxkt1xB9047FH2CX1%2Bhs8WAQutJyDEXit%2FrPqw0gEjKqicBPBcpJYgtyxPdLWQ47yb7JEOOSosNN5PDSqjsBQ8HJ%2FNdoORNGi1Pfw%2BRNBWMBcY40xZEtjZCm3Ebx6ICkwE6y47wePvruhsDI19kUytEqV3TJtK9MTpR%2FeKdEGg1CUIhs5%2BCpkPBKwh36KE2%2FjVQ3dqF%2F45pRI6ivE8%2BaUF1kuvmg84iKtPKSDFRUj6DKLqzofkSY4b2SYHODBjSyRQxdoY5uQycLQYgh9eUtHoxnfGp%2FqBl1IwO%2BC6F6DZkwapC6fmsLRhOB4sL8ZFbbNXq0PjvTgkyXqLqRHJt9PMXy6kk9aP4FthnDsoUCMq4ye2ECY%2B9PnrxwW7KFU1dU7e12qM7VXKRnco5NtTgOLpekzdSszrDMi6vqZkMIWp%2F2hGJ%2FgfXtwOVsYORKAUAjI6i%2BzzvH%2F5LciEwLifGyMmyXH1giqZNfPbcDUVLPn217nk9V8U67bbF8ugSpSJUxPMiwgAOcEmIm7%2F%2FGUibw2hT0Wu7f5UY0CRqkBDldNhr19qXcncSAhA0weLHPS%2F76JMc4XkzKtqfS%2Fi21EStGBVwRlW5MLbT2cIGOqUBqUCLXV2I8mqY4ytCeWA6P6JrwSPdHJhcBTriol%2BeObdCx1G6x98ktd0gsPKjuaqtvvdBROKdgsd7zd%2BuPWkLP3iO%2FhAO3%2BG2soHDakjBcXVqbjaaU9L3c1Nj1z1xCdOZaZVYMt%2Bv6rLx3ZgjH7vk81gizpGZquD4bPZBXdsg6Bg3q6rNriraWiKaiBvHtwzZ9%2BQMGLmGgP2cKGHCKcBs31ogWHKj&X-Amz-Signature=1cb303da7198934db52d276f36331149ab13a6daf7fe0b71a6715cc36d76b360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPU7AI7%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdXIbWvXuoJ7i7wyL8MwEGGnlJFlgdozBOmdxBQJ408AiEAsGIsQqSJYBp6PHKTe4R%2FxLuQiSsTs3yPRG7Wz%2BXjhBAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHNI6qAAyWb4IFG8CrcA1Vhh03xRqqAq6Xz6SwdsXDMZTp7AEmzvfUnCLIj0mR68PEs%2BF3FE36h1Bd6FokEuvLOnLbTuMXoLp7KSvGI4XagG4mUsYkIlLvX8Rs6yIwh0v7hWfkBV3Mko9hovdVAb32FE3%2BXlguqmV5E7jRA9RR81guoX9zhi3%2B6nK5gOIeLFNbeiXiPkWBkTrboEmCPKo7ive8yu0Xq5RJcsCTfbT2Klfk%2Fjwd9dT83gmWys9ZGY4LxqcRRIoESnVbAyT02jdU%2BZrELkUNezgkxLjeQyWjW33UXeV4roAzng%2FLuHn4YJuwvOdi4VEPubmNGtdYcyravEfj4vEwFTQ3PN%2FN%2FSRzwi7peYBPdx2wfZsBpkWnZQ5%2F%2BPFC2V7Sa5LbT8IhH0FDADW%2Fdv27EOi1iDpkqZ95CVZsMpvIppcYaibbkFGXv1ucZBR0H17nbsEPqsLl9L%2BJbQz6B9pMbOU9tzl0Kn8jwXQUW5Z9WNszvthbKfZc3gzCSLQNDNyYSUQvLqW5J7PqvOrdqcJQdO5mYjXM9vKcUuRh%2FTRZNGQtEyCzOyF55FQfRVj24pPYBJ1yd9q4jOINHw96uIkqSBE3hb%2BNSMgvp9WqoS%2FLdxJ1BMHOZJiWByrEQC3f4DPjxpxWIMLTB2cIGOqUB%2BgUHwOKlIr6%2BD6phbDEhIqxWReKhmHUehDBb1I19MHPqWXYtdhKevPrUH898kSJlpztEP37qMLXKuZu%2Fzigc%2Fy1quFCFxKg6wAJpBowB%2FUNOS0rfdrLhqWoFWwUshYAu%2B%2FZH6mB27p%2BThpRG9KDxxmZQp3aYwcTUyMA%2FLI%2FnzviLXNFnRmDTPm4OdUOU8wXdg69obiwApQpzb1vI6s3jvjozERrR&X-Amz-Signature=8c038a66243a3da04faccb6afc07a61ee659f2a76cad61630f21d53b1efa2dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NRYFNA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Wn2EG16iyAAfrJRZrdDeqWJ5T0isFFJ%2B7d1odYsG3AiEA7Rw55Kxt2lPs8fWIxQ%2Bg7jI1dun2s0p%2F6jMslwAMt6gqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEP8oj2YFG2Cuty1DircA2MbVmdoNPBIvDGL%2F%2FV%2BSWS9az9ynSRlaao8G1ig1FHitDZJ1k7INEuLZbhHmqoENOUNevPGI1QcVZAWwIronVuA0KxVMe3Ep7dGbTF1pewUYAEO6sJhj9coFe7Iwa2gBpIbzlwAirqHiO%2B6r6ISyTzJp1FljyuK%2BkS4MbfR%2BCtKUTCzQ6GS6WY9HSjwvBuze5GMTU1yzgHVGDr85IxcRP8UNig%2B7aVrQ4gshn693huG1NEFc%2FBYsVVe2FhUf4QBmLgQtOWs10I35tiKwV%2BOgXUK0sU82EscBlWML2I2TN46xP7UUbaUPIdVI%2Fi1ceOG7k0HEPcEjsq0gAq1MsgujUdWFZyIXjs7trTCECKCVP87qhPpgI2k0cS0%2BXoXyeCC6gbb7hTL6mzIabkvLGymDmWg6uIEsOUV1vsfeuEUs6sDiUY5kU1Jwh11P1%2Fu%2BPCNoFfm9Fyx99xp7sPo80rKohCrj69f0C1m8GBSCcFYWm74hny8qKslWYEPaUXEXYeJT%2BhV47yCT2jmiP3iJqrtQF44Uhv5xVzokihUKE5%2BgYwk7xRd1GCixAJRLpmZh%2FTJsFRvcUA3EDeFmyy4kSTx1SmKXtQJ%2BLjIyFQpo6jvNARYTzvNCMkc0bCu9ZBTMNLV2cIGOqUBtnhXTjaben77IEO%2BIdyp%2FvKdDyb8E0DVhn2CWf1zfAzwSFUN2w1pabMyWO5PMtD45h2XkDjFfyZ0ZbLeyCuIVQ61XpFTLiXPlK0tSHNMcO1izqZV%2B1wWPzVDtIx1SlbAQNuIvkw%2FeIemB7%2Fn1jNClfYAA9XMtkY1I6gmNN8Zijs50%2BtFTTXUOrEFjzbFSyoIAIdUgsEoy%2Fi5OX01WGx2pHkdnNhH&X-Amz-Signature=a7bdd9984c1147367fea1f0e07d37a91dab8c1ba9f7823204d0bf4df41b65262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
