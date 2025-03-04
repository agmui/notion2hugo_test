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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWUTJZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FssPucLrvxTEJviSpQHL5Ds7fgbsVGQWb%2BmmPOnXMgwIhAJbXJDg%2BRixK0FtHpFoUmH76bIx5zXU%2FtfqmjY9mMLIHKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLyIPdR%2FXVxTUOgsMq3ANwmJjOOeP%2FbSN%2B0INH%2FvXRFBzUK6bVDKOrBqM6F5GsVVVgGNQvIHCantf%2FGQFmY7JbP0TwI9JplJwSuTo%2FLiXjuWmzKYFSeBem0sNz3gczy7f1nLLO%2B1vJYK4X6IB%2FeUHl9cmFmOnUnzf4qdshRb1%2Bb7dZ3BN5vvKL%2FXoa6fpYVWvF2t%2F8UgYioRQmfihBTreG2bu%2FTL%2BNmbDFcO3cvD%2BofmwezgyWiiCQNVqQRTxPUiOpI7H%2BV1MjY5OGh1oep1PophvNqpRPzbU28FbyLCgJ69IAHWwsnqhcYQS3FjPjKU0DgBU0xoM8sDt7dQS%2FMirBlrNYq5LuNbfghz%2FkC72vfMXmmgdsowXsfat9VEobnu3Kf5heXbkicFXNtalFUNrSmLttpiYI0bTHUb0mReySQVnBboT8qsCMxTF%2BxxvvUjSwNyWwhrnHzbVtu74Ir6FYMIoxF8d5VK9GprhEYfOvUTkXd7kUo3xG5KHZKlq4oK1MQURChqzu3NMeW%2FB2zZlzAdJUn1emmj2SWsxusbnYv6cQLG34UOXYg1XwZgFRA%2FVNimwRyQSCytJrHxNYw8nd54VpaMdAbN2Kem7Zm3VbpYnsduvXZkCb8Q%2FDERLYWaQ52f5VxD8Poc5cdDDbmZ2%2BBjqkATwPjqzNo8FZBn%2BHukg6%2FQjnvQyGZu2xsAH95uLVKtj2V1A1svBg5hyQzMMIayWa6AMF1MLBSx39wEgSuiTh%2BYCAwaL9tvtzx7El9n4QW1wZAcXAgeaKHBt%2Ba%2BsKxji2UGpp4vb04tnixef6CE1YT%2FEZ0LCmr5SFCmHiU3iXOWFO5MAQtMyrzg%2F%2BaxhcGE2HqQZrL5qBHMCmd7lyHbo%2BbfDZxqOY&X-Amz-Signature=4fa2b715fb66f869504123fe87f84013c700a0ad3b9d05ec7e77fed25dc73011&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWUTJZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FssPucLrvxTEJviSpQHL5Ds7fgbsVGQWb%2BmmPOnXMgwIhAJbXJDg%2BRixK0FtHpFoUmH76bIx5zXU%2FtfqmjY9mMLIHKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLyIPdR%2FXVxTUOgsMq3ANwmJjOOeP%2FbSN%2B0INH%2FvXRFBzUK6bVDKOrBqM6F5GsVVVgGNQvIHCantf%2FGQFmY7JbP0TwI9JplJwSuTo%2FLiXjuWmzKYFSeBem0sNz3gczy7f1nLLO%2B1vJYK4X6IB%2FeUHl9cmFmOnUnzf4qdshRb1%2Bb7dZ3BN5vvKL%2FXoa6fpYVWvF2t%2F8UgYioRQmfihBTreG2bu%2FTL%2BNmbDFcO3cvD%2BofmwezgyWiiCQNVqQRTxPUiOpI7H%2BV1MjY5OGh1oep1PophvNqpRPzbU28FbyLCgJ69IAHWwsnqhcYQS3FjPjKU0DgBU0xoM8sDt7dQS%2FMirBlrNYq5LuNbfghz%2FkC72vfMXmmgdsowXsfat9VEobnu3Kf5heXbkicFXNtalFUNrSmLttpiYI0bTHUb0mReySQVnBboT8qsCMxTF%2BxxvvUjSwNyWwhrnHzbVtu74Ir6FYMIoxF8d5VK9GprhEYfOvUTkXd7kUo3xG5KHZKlq4oK1MQURChqzu3NMeW%2FB2zZlzAdJUn1emmj2SWsxusbnYv6cQLG34UOXYg1XwZgFRA%2FVNimwRyQSCytJrHxNYw8nd54VpaMdAbN2Kem7Zm3VbpYnsduvXZkCb8Q%2FDERLYWaQ52f5VxD8Poc5cdDDbmZ2%2BBjqkATwPjqzNo8FZBn%2BHukg6%2FQjnvQyGZu2xsAH95uLVKtj2V1A1svBg5hyQzMMIayWa6AMF1MLBSx39wEgSuiTh%2BYCAwaL9tvtzx7El9n4QW1wZAcXAgeaKHBt%2Ba%2BsKxji2UGpp4vb04tnixef6CE1YT%2FEZ0LCmr5SFCmHiU3iXOWFO5MAQtMyrzg%2F%2BaxhcGE2HqQZrL5qBHMCmd7lyHbo%2BbfDZxqOY&X-Amz-Signature=e861b08522a0250c1674b5a889bd9209735ee8d5858e4c690c5a6164e9adc272&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R32CYQV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwQD3gxh%2F3qeEUr9kbUQfQQQbNd35XTthW4svuwwh7gAIhAK83UupYq61WaFJpjHCZrmnJIEJDtDR%2FbJESKiFYnA47KogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvQf5hWdfI%2B2qwvcMq3AMntxJVnZOzVEcHR7SiWl%2BASJ78b08anWuzrq4UbddJnLLk%2FBhrfkEmH38ICatF73paGGrGfwFaBvV9nJNwXAFTH5Diginp6fB79IgIWTJCdTsYR6nr3Z7Ik85LzFGRBMAfGi%2B%2F81VSniBAcqDhm8OvVVEOW7ZhbIDOTT2lq5O3oC6K41XW1WL38HJnBWr2NnLCMYA8lJcvRap1EtR%2F43m6XJAAHMXxpAOwuVLHkuiNuPoz2Y%2BXXzIrg7dhdNtvpeEtwnDYAJbSh835HPywNPQeOkj5jgWavb3CAHm8TJz1%2B0PPYrlArOi1RBS34uzvOm%2BYIJtzxv8BfT2Qd%2F4Jb95OwjzqJpWHqjSdJ1r4SaLLYqXRM1LytgcB5kXBDm%2FT6ciMjv7YqnniL6Nh5CBZ%2BrF2nYMA7BS7SsZTqzFe3kgKUjVP%2BdbSdsgMyFB0%2BuBu8mEQ2hM9bzrrG0fGYwQr9BVtQgiCPKcPOomBK2B8YVDsCNpy0yq0CosmgLD%2BQGartT4W646bvH%2FeXndiKylOQp7VUmoQk2%2F0R7M3WdHa53cou2NqxIec4rAbDuCKgXzbGBnNevVtga1JrVsznwu%2FNElo9WPG97ZA72MEkRjJrAB9NfhgTQYWtuEnn83PMDDnmZ2%2BBjqkASpPR6bTmdsKaYWoClcQFXT64XO%2FpZU44fyAEyuOo9HBdZS3joClXbENsCP7oUOe2CmEJ5qtHVx0sC9l5ZiWt%2FwOM4cjZStEeg0prdJ0Xa2RE00P0e6NZxRJSjfd6MgfLCWZh0Q9KROcYRsiWnrrGXKz%2B2HAhUeuftRmswLbHXyEFfahrMI5X0QLlLg27CLbIRKVYsULUhPE%2BAyZB99vVsdcXhp4&X-Amz-Signature=d0891458da8bf9aedd785480e51969e98bad9dfcaa0365145eee7e5c42074c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOO43DTF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxt6QveZjgTK0CrodTLdpFMZjl3uNQmOh70rRTktf3PAiAfiIxsk5FihAgGNDIsBfm4gMLC16XxNqYaGc035KuVKSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvEbC97E%2FODgzrP1OKtwDk2NKbC4ExSFQmsd3mgGDs0K%2FBntzQOUoH5YrFA8KlqSAoe2CrYTvyFlNBCZCWRozG%2BwI9US2d651tpXOn0D9e5PWR09Tg6NAXHo9radlGoAXCID%2BE7HOne0HV1ba2evlcNL%2Bpu%2FWcQMGDJK8jAVy4UFYG4787ddKL1THKacLJzRRG5dGLlAd0KNrD8xdxrSOGGFF%2FCMNWHDTzYjrUpC31HJO9MHdtsohZOEmKgfSMuHfGWxu9Iux2SEzkVPZo5Wb84rrJ%2F189bvUjsDjupXwJeBww5wn8bVXWfkouuJ0cKpgwrpvFF%2FbU%2B1SdlJE0u7pr9KqB41VL2foqQcVP8YNp0n%2Fm6TTPjLNEp7H%2FBP4GB8XL9iPF%2BCFPnM0j%2BlsjtS4OSCP3khfOr6aY9HyjrvrhtRuTzQnEsH1Ersxa2LRNZ8j5O1WBfi3%2FoXCbzMA78ORC5xq57%2F7ozxgGPaqr03vOnv%2FW1%2F3OomYvlLAqRQIupk6t0HKOhgYL8r%2FVy8a0BaUZxcw6eQtO%2F%2BDG2SlU0cnR%2BLpHqg5QaZkX2t9Jk0wF4ZMkQc51OUZ1LVWBNNdRsR2OTwO5Wq4pCFchrJNY8LCgCQV%2B2kPsIhzVDpguNfhHX7YI0z3xQwKmWRsjvow%2FJmdvgY6pgGjnNb4SKoOp4C%2FL%2B1rOGYKMquenJK2h9cVMQ3cznC1IQU9wY3%2FqtMCV3V3U1ndTRA3PnEBuftJ8%2FWMt9m9YfWXOTeDRs7zysq7woMNMNtDeB1BWwgFXlbAxvP46PnTTBJYDVEEgHwnN1yE9UN8tJsdjyOEX%2BRJ6CKg5Wo8sR0BSNOAj4vrvTtxHaHaNCND4s1pUFfIP1aTR6hlIAHni0aUnylksQP1&X-Amz-Signature=7937666cf913eb6827303751aee9ef27fbde9f468a8d8e3f52b38381444659ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QWUTJZB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FssPucLrvxTEJviSpQHL5Ds7fgbsVGQWb%2BmmPOnXMgwIhAJbXJDg%2BRixK0FtHpFoUmH76bIx5zXU%2FtfqmjY9mMLIHKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLyIPdR%2FXVxTUOgsMq3ANwmJjOOeP%2FbSN%2B0INH%2FvXRFBzUK6bVDKOrBqM6F5GsVVVgGNQvIHCantf%2FGQFmY7JbP0TwI9JplJwSuTo%2FLiXjuWmzKYFSeBem0sNz3gczy7f1nLLO%2B1vJYK4X6IB%2FeUHl9cmFmOnUnzf4qdshRb1%2Bb7dZ3BN5vvKL%2FXoa6fpYVWvF2t%2F8UgYioRQmfihBTreG2bu%2FTL%2BNmbDFcO3cvD%2BofmwezgyWiiCQNVqQRTxPUiOpI7H%2BV1MjY5OGh1oep1PophvNqpRPzbU28FbyLCgJ69IAHWwsnqhcYQS3FjPjKU0DgBU0xoM8sDt7dQS%2FMirBlrNYq5LuNbfghz%2FkC72vfMXmmgdsowXsfat9VEobnu3Kf5heXbkicFXNtalFUNrSmLttpiYI0bTHUb0mReySQVnBboT8qsCMxTF%2BxxvvUjSwNyWwhrnHzbVtu74Ir6FYMIoxF8d5VK9GprhEYfOvUTkXd7kUo3xG5KHZKlq4oK1MQURChqzu3NMeW%2FB2zZlzAdJUn1emmj2SWsxusbnYv6cQLG34UOXYg1XwZgFRA%2FVNimwRyQSCytJrHxNYw8nd54VpaMdAbN2Kem7Zm3VbpYnsduvXZkCb8Q%2FDERLYWaQ52f5VxD8Poc5cdDDbmZ2%2BBjqkATwPjqzNo8FZBn%2BHukg6%2FQjnvQyGZu2xsAH95uLVKtj2V1A1svBg5hyQzMMIayWa6AMF1MLBSx39wEgSuiTh%2BYCAwaL9tvtzx7El9n4QW1wZAcXAgeaKHBt%2Ba%2BsKxji2UGpp4vb04tnixef6CE1YT%2FEZ0LCmr5SFCmHiU3iXOWFO5MAQtMyrzg%2F%2BaxhcGE2HqQZrL5qBHMCmd7lyHbo%2BbfDZxqOY&X-Amz-Signature=a511b3223b8737a850482ec3ce94a0a39e8126db34de8386d35b6ea77b110431&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
