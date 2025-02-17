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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJYPGQ7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCedkEeAP%2FGrOcdmtvlfXMapdA6Gk2KfIgkFA9oaTCPxQIgGsp7NSAXMMAcSOcChOcvZsGRjb7leu5HI1LwEbIioGQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKOSQZ8y4Yiqf1JwZCrcA5CLSOBEQoHVXz14LjRdgJL3qvqp6yqyiKEGozi97G88tksnnRbDsjCgCWgtxFp6pONS3pr6BFfzAyXwUyJ0KeFc0CMbjM30QJ0ln85FB2pXPHgSFg4qG4AHohG0Fj%2FPxMTd6sPRwrN8KbP1KySajw%2Fd5ZEguYetiArepPdIUQ%2FPfB4NMv7HuzS0HMoe%2F703b7aUwSACoRQjie6UGaAlQzKMcoY%2FrjPNnJlvyIiHiPHVoQMvtC%2Bix814oDRZLaPblMawErRkCx1m3YQ0ygTeQ14wyfYqUUfY4aE6i%2B51jf%2FKrw9vFL1rUDwh1ka%2BlIK%2BK3%2BrrHfVOvyWlbg1e0DHGM%2FDgf3DwQPIvtkbKJVaah%2FZWJa2s6XPWREUtlmnC67N0x1AKrZTeI8GiMKvPdrjjPVhDr25ZkD8XsrtKYvjx6X%2Fb5BBdfX8iXHy4%2BM9HRPx%2BLOWxvOHRJ0kuPD1PLCefs3njTw14SJPESEtMR%2BFbeKz5cQdfbMZasm5pqaEhWA1dq%2BwwvEsBBbQqQhSg24MKUWWsO7ESbLQcg5ypLMgAwpKvdP9tIY%2Fy5SbaQpfNnSd9tBWbvjwyQNUz3lqCz4rHuLrT%2BYbpRRd0PVL2%2BfOjJEbSU0WEMhCEHFh7%2BtMMNnKyr0GOqUB3NLNOneKtw4umY5Cur01uPuN5kNQprHrKNCVVCNxXoEqDiZKDYcqQsW%2FTrJoxmegTqyIPeWZebVBJ9aKOkc0F43pZ3vPDt%2BmAFFrSMj5lafmHGnD5GUZJbaku5BgoXK0HZXeErprebeM8RhbPvu8T2QjNzexc7aZNK63sALdwkQGpmGJBA%2FjgqMJsQkkfXhxu9n%2FUlvE6%2FrNY5yTY%2BhZnsyvlDdL&X-Amz-Signature=c533f8a5cef917f6a5c9abed4a0ec119a5946eaa696662c83b85e449082063da&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJYPGQ7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCedkEeAP%2FGrOcdmtvlfXMapdA6Gk2KfIgkFA9oaTCPxQIgGsp7NSAXMMAcSOcChOcvZsGRjb7leu5HI1LwEbIioGQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKOSQZ8y4Yiqf1JwZCrcA5CLSOBEQoHVXz14LjRdgJL3qvqp6yqyiKEGozi97G88tksnnRbDsjCgCWgtxFp6pONS3pr6BFfzAyXwUyJ0KeFc0CMbjM30QJ0ln85FB2pXPHgSFg4qG4AHohG0Fj%2FPxMTd6sPRwrN8KbP1KySajw%2Fd5ZEguYetiArepPdIUQ%2FPfB4NMv7HuzS0HMoe%2F703b7aUwSACoRQjie6UGaAlQzKMcoY%2FrjPNnJlvyIiHiPHVoQMvtC%2Bix814oDRZLaPblMawErRkCx1m3YQ0ygTeQ14wyfYqUUfY4aE6i%2B51jf%2FKrw9vFL1rUDwh1ka%2BlIK%2BK3%2BrrHfVOvyWlbg1e0DHGM%2FDgf3DwQPIvtkbKJVaah%2FZWJa2s6XPWREUtlmnC67N0x1AKrZTeI8GiMKvPdrjjPVhDr25ZkD8XsrtKYvjx6X%2Fb5BBdfX8iXHy4%2BM9HRPx%2BLOWxvOHRJ0kuPD1PLCefs3njTw14SJPESEtMR%2BFbeKz5cQdfbMZasm5pqaEhWA1dq%2BwwvEsBBbQqQhSg24MKUWWsO7ESbLQcg5ypLMgAwpKvdP9tIY%2Fy5SbaQpfNnSd9tBWbvjwyQNUz3lqCz4rHuLrT%2BYbpRRd0PVL2%2BfOjJEbSU0WEMhCEHFh7%2BtMMNnKyr0GOqUB3NLNOneKtw4umY5Cur01uPuN5kNQprHrKNCVVCNxXoEqDiZKDYcqQsW%2FTrJoxmegTqyIPeWZebVBJ9aKOkc0F43pZ3vPDt%2BmAFFrSMj5lafmHGnD5GUZJbaku5BgoXK0HZXeErprebeM8RhbPvu8T2QjNzexc7aZNK63sALdwkQGpmGJBA%2FjgqMJsQkkfXhxu9n%2FUlvE6%2FrNY5yTY%2BhZnsyvlDdL&X-Amz-Signature=9d79adc09251f7766f5056afff27da366ad4ee08a41ab4a144271671ebc1b782&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4HJY44N%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHCWsYEBcrd62bhPJrtdaPUf8hDsMC7ztX8lNWDBBD8XAiBtru155Mb9y60I%2FJA7gW81i7PLG12aBZuVNL2XpSegiir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMZS6BZI01Y24OhdaOKtwDT0G96uwCnCS68Yyu8Ik83%2FUNJI51gzPATBuzbfKGzEeg1tbjqZsmIXNYPBYjUVsAfc6HgiRHu9JIADD8yecyPMi5omNajTAV%2B%2BZPRDtpCiOmGDu7tUcIiA9YSHaaLL5%2B4gN6zqE7xOwJB%2FfIkKRrIOTJ9eBrRiiRd%2Fp1nxt587regUJrLcmv0GdAKdm7%2Br6MsPzzv29fL0SX89p7l3cTOs922oX2nQ8ookTqXdsxrh714KYA6YFlmdJO8rNUxksGtTa8eqEFdxR1u7EWidQaBMRxSNsW8EJqihndUO5p0a3z%2FlG8bEOxu3NrrEJFbvCrYsiNa%2Bgyi4ce2eejlFAHJ1QT1Xo8%2BX5kdlVVSDEzID8wn%2Fz0LLIfkzRi6%2FPUOVuQegm2QCk3OwU39VyWXLj2LJgBjUeixy0I6Fwj%2FlXkarFvkPNlZU8LtbIybvo72SGK7KT6QAChiAdvgq7UEhbNCkhJ%2Fe%2F%2BYol45ooKwR%2FzoOJnb29nG8pkfUCGklfKrtBv1MZZYM9EXkxfEF9r2DAyIDeoNl7HWQUmlGKaRxL%2B8Q%2FeXi1tdvG04SArRCD92cbYS5sue26WfAvEGOeojCf8UgArMSZ6uE%2BTO2XLWJLN2v4dHF5mCwDo6jsozJswg8rKvQY6pgEOZ1z%2FO5NofOFDmKWMM3F4uTltH7xpYj7T3osKx06uTmJW9svt4wA6rpjsQPcp9PjxBCbcrzZsMr3hcyF2YM6FDT4NBOYdcBANX2095UkO4frRlvSTrs7KTGmW3QN7e0UHXAiwgi7ProZNo3LxOnO5TZy9emy%2B1cGxWiflk6x35Ocg4ZmJNIfcxvDO3Zcs0SltqpKAasukTFHz4tB%2Bto0BgUlaTX2W&X-Amz-Signature=af4434bea0f76fd3ec3e363353434fdce83875f64e41e3bf0bb6c1354823ff27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCSEERD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDyLLjTYFa2gv%2FSARjdCYS%2BMqJmdjCCyWy2kk7V6H6Q3QIhAK57E1TltDSY5L8BkFhZPMDhrSMbZaJ0OGnYD%2FSunA9HKv8DCGwQABoMNjM3NDIzMTgzODA1Igz5yFfacrZ3FyHBkn0q3APEI4KioLbKOwPpaKC%2BOO6%2F5bTFdEho2ZBTBHeIjDlsqDvH9me0BP24mIdhjDYH70IeusKT4ogRCC%2BMqOcatITBtFqxmZvhRs%2FMvbAjIjcsLWA4M%2BZIvGnhE5NZfHTgJ2y2N%2BYZYl83Ue%2BP6Ov3AnGs7%2B%2FNpPQX%2B2TwZbDMGL%2Bx6b3FrPItFo9eK4Gk5oXXmURywgOBNvtP3Jp%2Bzp7L5RDorOJh2njxsympuxW7EywOvv4TNfg0Y6senjn8RWuEwa3RM7Kaiv3kKa2G8UKx3Vqhgox5Kj4K0qVMokW6K74RN4n67R0FK8y4ezAoUJnVDapHy4dsN%2FicUJmpaSv%2BoO3ObZJZs1M4NcxV2sLqiLgPl6jXTW%2FKVWpXYYLY%2BF7JIa3yicDAoNP%2FcKJFnnF8VDKHqMobpbqFTfF6KIXNO8hbNykkQhLJ6GvwegV165uHDUZFP9rVN0jMKovnEQSkPyyBnM2KWuhnQ38WS%2F4U47VGH3Rq7DfRyvEWave02ssEnRiaBpyfkv56Y802eyKUmrWpPQc3VY%2FH4XVQCvPBmXtwia42ZF%2FToowsJhobpxampVZb3V92j4kgaq8jS4YsHIYfbcwsYjo8xSCaXwZsj%2Fs8tmICsLi7FdYMy83IiTD%2Fycq9BjqkAdj0zq9A2XGETw8HXnjpgkA8k3IzIvfrjvIIhVJz4YKO6FY41rnD8yW%2FJKQgaadHeOtHYxDOaRudNgWJP%2F7IZLVoGjdG37NggsTu%2FslS57%2FbD77UfBr4j7AuJmCKiGUtBLN2PFtthUGUlwZePnYyJZ6w4MdwGjJYjKEL5%2BmisPbTt%2BVw5R%2B6NT5V10OhFwhtyc9A%2FMiF1ifcYvq7cKke%2BFvaF%2BuV&X-Amz-Signature=284f7c395b6a60c6d3d596b9544918e6a84b6bd8e9098c67b8d91cb309b31c83&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJYPGQ7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCedkEeAP%2FGrOcdmtvlfXMapdA6Gk2KfIgkFA9oaTCPxQIgGsp7NSAXMMAcSOcChOcvZsGRjb7leu5HI1LwEbIioGQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKOSQZ8y4Yiqf1JwZCrcA5CLSOBEQoHVXz14LjRdgJL3qvqp6yqyiKEGozi97G88tksnnRbDsjCgCWgtxFp6pONS3pr6BFfzAyXwUyJ0KeFc0CMbjM30QJ0ln85FB2pXPHgSFg4qG4AHohG0Fj%2FPxMTd6sPRwrN8KbP1KySajw%2Fd5ZEguYetiArepPdIUQ%2FPfB4NMv7HuzS0HMoe%2F703b7aUwSACoRQjie6UGaAlQzKMcoY%2FrjPNnJlvyIiHiPHVoQMvtC%2Bix814oDRZLaPblMawErRkCx1m3YQ0ygTeQ14wyfYqUUfY4aE6i%2B51jf%2FKrw9vFL1rUDwh1ka%2BlIK%2BK3%2BrrHfVOvyWlbg1e0DHGM%2FDgf3DwQPIvtkbKJVaah%2FZWJa2s6XPWREUtlmnC67N0x1AKrZTeI8GiMKvPdrjjPVhDr25ZkD8XsrtKYvjx6X%2Fb5BBdfX8iXHy4%2BM9HRPx%2BLOWxvOHRJ0kuPD1PLCefs3njTw14SJPESEtMR%2BFbeKz5cQdfbMZasm5pqaEhWA1dq%2BwwvEsBBbQqQhSg24MKUWWsO7ESbLQcg5ypLMgAwpKvdP9tIY%2Fy5SbaQpfNnSd9tBWbvjwyQNUz3lqCz4rHuLrT%2BYbpRRd0PVL2%2BfOjJEbSU0WEMhCEHFh7%2BtMMNnKyr0GOqUB3NLNOneKtw4umY5Cur01uPuN5kNQprHrKNCVVCNxXoEqDiZKDYcqQsW%2FTrJoxmegTqyIPeWZebVBJ9aKOkc0F43pZ3vPDt%2BmAFFrSMj5lafmHGnD5GUZJbaku5BgoXK0HZXeErprebeM8RhbPvu8T2QjNzexc7aZNK63sALdwkQGpmGJBA%2FjgqMJsQkkfXhxu9n%2FUlvE6%2FrNY5yTY%2BhZnsyvlDdL&X-Amz-Signature=c0a463ca7b3baffcedb36b2fc3a3b990bca64ae1f0b5fcb7df15eece60131a69&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
