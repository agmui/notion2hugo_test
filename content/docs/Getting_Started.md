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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CRTWXB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCYdKmlnfovCzjFuILEQlxmtd9ThSONcShvd5o2iTkkMAIgD8MMK1paOUyN0pSvrpEfdCxNLzOT7jHVxbTWfBdiuJQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJ1nspYTe8TCJpio7SrcAwFaS%2BKaKGVd2dJ%2BiWX%2BN8YICnXD2%2FPTOW5vYe1nfkpCMco%2BMQZsCwRskoguzCxlFQKSaHhdQzoKzvWhXShgrH9w4nbXrLFkjmzPAqgwuY%2BzVjp9Lt7Gaw%2FuPUGPKDdPtOLXBDrebDfCGSrITpeBgX0ZFd9i8WjQIMZOVKZvAveplYDX83QY6dmMfIME%2BHQLAQLBgDM8rc2fZ%2BMg%2Bzw8m%2F5lwp85NKJUd7C48uwkqU91X91Xxjo0OzmaE6BPbIvYPZds28xg3FyQaGPT7olMIds9j33V%2ByA7w5a2yF293HOEeM0fZzcdDFQckRl3WYPbc6VnU1O5EEWoQ0cJhg2gn3TfTfR8NLw8aHyNaSxh7xb9DlLGc6y0%2BJdesMVMs5MZKeA05oWyGcqC%2BYZ%2Bcc%2B2FZTv4BASutPP6U%2BTnp%2FhEIcEDc6JvjKEphtN23QYIO6dKzQlADIGhVNkZbJfoF79qF7O%2BSXcC3zJthBOVcKD%2F9o8R7%2FVk1KE3w6wn3km%2BsiUeXodZjJhh2%2BWvUubY%2Fr43mPbhVpatsw0df0mUA%2BFNNm7Y0HgNS0CdIKN5nIX05M9zV1Lb352QJ5SKPFW9NeDqD61G5R83RQqDif0fa%2BU09XSncbIYvQMViFfU3uWMLuLgMUGOqUBoSEVY8DXqc%2FO5xwoPvP7%2BJzhkm%2FtowwPMxdQc3i%2FAe4OAEfWnbuQ%2FQ0by47pPDJBqpUd0L0qg%2Bs2pBDEVXtrwhLZXaMYbsFhvL6RGFg%2BhIJFDY%2FLhHnBBytlPhaYWhFa4OQAf9zw%2B9eK7DqHEwG30aL1kk8LNP1P8VMTYO8BvEOVupZLU2LC70JqWVOCO8JXi1fxBrR6oxaXG9zlIr5vQ4NGMNQI&X-Amz-Signature=2a290c74c37fea86450ad2661c77082dee13ad2efe6fd6f63573c677f82ec8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CRTWXB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCYdKmlnfovCzjFuILEQlxmtd9ThSONcShvd5o2iTkkMAIgD8MMK1paOUyN0pSvrpEfdCxNLzOT7jHVxbTWfBdiuJQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJ1nspYTe8TCJpio7SrcAwFaS%2BKaKGVd2dJ%2BiWX%2BN8YICnXD2%2FPTOW5vYe1nfkpCMco%2BMQZsCwRskoguzCxlFQKSaHhdQzoKzvWhXShgrH9w4nbXrLFkjmzPAqgwuY%2BzVjp9Lt7Gaw%2FuPUGPKDdPtOLXBDrebDfCGSrITpeBgX0ZFd9i8WjQIMZOVKZvAveplYDX83QY6dmMfIME%2BHQLAQLBgDM8rc2fZ%2BMg%2Bzw8m%2F5lwp85NKJUd7C48uwkqU91X91Xxjo0OzmaE6BPbIvYPZds28xg3FyQaGPT7olMIds9j33V%2ByA7w5a2yF293HOEeM0fZzcdDFQckRl3WYPbc6VnU1O5EEWoQ0cJhg2gn3TfTfR8NLw8aHyNaSxh7xb9DlLGc6y0%2BJdesMVMs5MZKeA05oWyGcqC%2BYZ%2Bcc%2B2FZTv4BASutPP6U%2BTnp%2FhEIcEDc6JvjKEphtN23QYIO6dKzQlADIGhVNkZbJfoF79qF7O%2BSXcC3zJthBOVcKD%2F9o8R7%2FVk1KE3w6wn3km%2BsiUeXodZjJhh2%2BWvUubY%2Fr43mPbhVpatsw0df0mUA%2BFNNm7Y0HgNS0CdIKN5nIX05M9zV1Lb352QJ5SKPFW9NeDqD61G5R83RQqDif0fa%2BU09XSncbIYvQMViFfU3uWMLuLgMUGOqUBoSEVY8DXqc%2FO5xwoPvP7%2BJzhkm%2FtowwPMxdQc3i%2FAe4OAEfWnbuQ%2FQ0by47pPDJBqpUd0L0qg%2Bs2pBDEVXtrwhLZXaMYbsFhvL6RGFg%2BhIJFDY%2FLhHnBBytlPhaYWhFa4OQAf9zw%2B9eK7DqHEwG30aL1kk8LNP1P8VMTYO8BvEOVupZLU2LC70JqWVOCO8JXi1fxBrR6oxaXG9zlIr5vQ4NGMNQI&X-Amz-Signature=85b4031d5bf8896ec211b81470470fb787a0f9f6d6ea3768f7b194c3bc210ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CRTWXB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCYdKmlnfovCzjFuILEQlxmtd9ThSONcShvd5o2iTkkMAIgD8MMK1paOUyN0pSvrpEfdCxNLzOT7jHVxbTWfBdiuJQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJ1nspYTe8TCJpio7SrcAwFaS%2BKaKGVd2dJ%2BiWX%2BN8YICnXD2%2FPTOW5vYe1nfkpCMco%2BMQZsCwRskoguzCxlFQKSaHhdQzoKzvWhXShgrH9w4nbXrLFkjmzPAqgwuY%2BzVjp9Lt7Gaw%2FuPUGPKDdPtOLXBDrebDfCGSrITpeBgX0ZFd9i8WjQIMZOVKZvAveplYDX83QY6dmMfIME%2BHQLAQLBgDM8rc2fZ%2BMg%2Bzw8m%2F5lwp85NKJUd7C48uwkqU91X91Xxjo0OzmaE6BPbIvYPZds28xg3FyQaGPT7olMIds9j33V%2ByA7w5a2yF293HOEeM0fZzcdDFQckRl3WYPbc6VnU1O5EEWoQ0cJhg2gn3TfTfR8NLw8aHyNaSxh7xb9DlLGc6y0%2BJdesMVMs5MZKeA05oWyGcqC%2BYZ%2Bcc%2B2FZTv4BASutPP6U%2BTnp%2FhEIcEDc6JvjKEphtN23QYIO6dKzQlADIGhVNkZbJfoF79qF7O%2BSXcC3zJthBOVcKD%2F9o8R7%2FVk1KE3w6wn3km%2BsiUeXodZjJhh2%2BWvUubY%2Fr43mPbhVpatsw0df0mUA%2BFNNm7Y0HgNS0CdIKN5nIX05M9zV1Lb352QJ5SKPFW9NeDqD61G5R83RQqDif0fa%2BU09XSncbIYvQMViFfU3uWMLuLgMUGOqUBoSEVY8DXqc%2FO5xwoPvP7%2BJzhkm%2FtowwPMxdQc3i%2FAe4OAEfWnbuQ%2FQ0by47pPDJBqpUd0L0qg%2Bs2pBDEVXtrwhLZXaMYbsFhvL6RGFg%2BhIJFDY%2FLhHnBBytlPhaYWhFa4OQAf9zw%2B9eK7DqHEwG30aL1kk8LNP1P8VMTYO8BvEOVupZLU2LC70JqWVOCO8JXi1fxBrR6oxaXG9zlIr5vQ4NGMNQI&X-Amz-Signature=b07b81876e2b7c683fdb5bddb1b2361dbb162c44f5e8bf61e25a858fb857e1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KWG5E6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIHCdD0zs42HUagYQLtWLZdX22wSEG0cFyl9%2FkwWCtUQVAiEAkk%2FuARpoh8guJbZ4EDUIA3R%2BkQ5acmykVE2NhzfZhjgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIxKjqFAvKxMX3nOzSrcAxw7Efx9ETVHindYvyEkXImzMsDZ1U7y3ZvqelfiiCemuCqWPNXcWWeHtlLV1ySpSIMI4QsNmWoEjl86WgFINU4KinHmV0qOCtgIytOVAhdY9Jvl6WSVGRwcGPwgvhzd4HhON4hzI9IFoMZKtYdrpXWmfTrvOzWmi10I8TOhrvACxsH8LQXF1eNYkMDGQ9pIE1GCn52U70KO5XTq7XQbvr4ELPuU1CGWZFO3z8H3YpQp90FqFfnzuXz8kRLvx03aP7nszv%2Bs1izxUj%2FqEKlaKxiqhs4Ma%2F89JUhmGUmwQqJJ2MJ9sFW4rzEzCvKDsaHaSiq4KvnMNBZxzTqX4YaguGaqimwdNpA6mjgbS8UKr7gB8dWMb7ExjFG7GK22010G9u6FFQHPz0lXI5QGQasijYco%2FZCy2LKyndaC7CmZo05KcIxftDubu9i9ikE5QY96xykM8xJSlCvgeJvTn7xsoMXVQv0905Ds39M%2BoZQZ%2FOUu1d6h2B2AX3qL7wwSODv3YehiPwavZoyHd7x8w7M1owbGOW3CzPEDDBhdcE50lF0PfkBU%2BaLo0u6hsTnbzyeM5KcnIbNnQr8ybenpaJRQmevT%2BrNoob%2F%2BunPZeGm%2Fpp%2FH22aI%2FNAU2N%2BNv6LcMNiKgMUGOqUBrlDhyQGankcX0EpXvpi0ffZZPIO%2F%2BRUrVdCTcVZD23NqRwsoJurNbD5mmZv3PhhyBGte9i%2FDfouX0kwibBJWeXB6MOWZYy4GxH33WWRELAslyNV1XbvtQEFLtNHTFZKHxzWlP2o%2B8H1kRpU2N546ZqepdtosTXYUBPzJr4iq2kqE5Qlo6%2F1HSRV5Opr7DxjbznYa3oh6tE%2BnZ6XFdEqJNCrNuMj%2F&X-Amz-Signature=d13f1e2fb26ba0cffb11363810c587d55fec4acbff90ee9bed573d15161947b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VXHNCQ2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCfViGd%2FIlxvifHviGNXpVy%2F3hniIg6XqrDu5QJiYCMXAIgPKyIQTNjMb4SpeedJPMI1IPx56i1nUZTxPbDET3%2BFpcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHZinlmmYogdHBDRPircA2khigfbLMU6%2FkJ%2BHiXC3vZ3iMyuUZoxSCUVZvRUZFR7b4BHmwZu0bJ7sMuF02AmAcYVQAd1cOKE53UpL5X6gi7baejOJTZjA4qsgFPDIKjxBqRMtUCyHhjwSyivzuAJi%2BPdC6PFsJ4G6fcxpjjwC5bdFRZfq00wXpfmYnO4B29gE8Fbem54Pa1aacnvPzbtcfBolxycd9C7rZfGDh9B%2BeL9LQv5VV72K0T1pOWmHmBmcJisKqYzOma1ZvbkkoKUfPjdU6zJCH%2FOKBmKOow6M87wYZRL17ZWUwJE0gXa%2FVhRjX01QYGH49lYXB6ANZUzxOeyE8AwL1rdSFVxxwZKvgo4J%2FVLKsUfLd8sQg5XRjpsDnlJJhDeztaqKPUQgniRuYTriXPBgo5oNDvXTF0jnMUtgvD%2BEtRRcQ9nYSWkhb2VU2rb2%2FwDilZaXzBFEI10SX4tfpTX7Bgn7hAwq6xAkcupjcO1HRJtQH3L1BzJ7FHEQZzl%2B3OTveQpBXT9NkbJK1ovDSIN7TAxn9%2BfwgzLuK%2BksZDQfynjc6jx4YYnaoIuKcrKgG30%2Fhk8JdGpsQZiOX1NQkzdTw462g0qvn2%2BfUHVmXk8yF7ZSyOYEEpvkT5BVmZZREVkzta0aBkhMLqKgMUGOqUBDfcPa6DIh9%2FiosAH2MA0crHqoesBSNO7Rj4o7ZkJLxg0FlLkrT2RPWqUDx1esjg3O7oi8hEH%2FWtp0WQnA1yP6d6lFrjRQm%2BztF3ziJi6cf1fAs%2Fuhyp40w7%2Bs5OXN4W%2Bc%2F2%2FxXu7TwKd8xEmoK9S6zh31Hi2QRefJF%2Bq%2F%2Bx9%2BrP%2FKqswHMdmkPkFRvZL%2BYpXwwv8rHrWdcq4acvcWdMRVVIpBiXp&X-Amz-Signature=2bd7d4ac8b0f516bea1bf0713f10019642f088b58aadcebe00a4576e9c15de1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5CRTWXB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCYdKmlnfovCzjFuILEQlxmtd9ThSONcShvd5o2iTkkMAIgD8MMK1paOUyN0pSvrpEfdCxNLzOT7jHVxbTWfBdiuJQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJ1nspYTe8TCJpio7SrcAwFaS%2BKaKGVd2dJ%2BiWX%2BN8YICnXD2%2FPTOW5vYe1nfkpCMco%2BMQZsCwRskoguzCxlFQKSaHhdQzoKzvWhXShgrH9w4nbXrLFkjmzPAqgwuY%2BzVjp9Lt7Gaw%2FuPUGPKDdPtOLXBDrebDfCGSrITpeBgX0ZFd9i8WjQIMZOVKZvAveplYDX83QY6dmMfIME%2BHQLAQLBgDM8rc2fZ%2BMg%2Bzw8m%2F5lwp85NKJUd7C48uwkqU91X91Xxjo0OzmaE6BPbIvYPZds28xg3FyQaGPT7olMIds9j33V%2ByA7w5a2yF293HOEeM0fZzcdDFQckRl3WYPbc6VnU1O5EEWoQ0cJhg2gn3TfTfR8NLw8aHyNaSxh7xb9DlLGc6y0%2BJdesMVMs5MZKeA05oWyGcqC%2BYZ%2Bcc%2B2FZTv4BASutPP6U%2BTnp%2FhEIcEDc6JvjKEphtN23QYIO6dKzQlADIGhVNkZbJfoF79qF7O%2BSXcC3zJthBOVcKD%2F9o8R7%2FVk1KE3w6wn3km%2BsiUeXodZjJhh2%2BWvUubY%2Fr43mPbhVpatsw0df0mUA%2BFNNm7Y0HgNS0CdIKN5nIX05M9zV1Lb352QJ5SKPFW9NeDqD61G5R83RQqDif0fa%2BU09XSncbIYvQMViFfU3uWMLuLgMUGOqUBoSEVY8DXqc%2FO5xwoPvP7%2BJzhkm%2FtowwPMxdQc3i%2FAe4OAEfWnbuQ%2FQ0by47pPDJBqpUd0L0qg%2Bs2pBDEVXtrwhLZXaMYbsFhvL6RGFg%2BhIJFDY%2FLhHnBBytlPhaYWhFa4OQAf9zw%2B9eK7DqHEwG30aL1kk8LNP1P8VMTYO8BvEOVupZLU2LC70JqWVOCO8JXi1fxBrR6oxaXG9zlIr5vQ4NGMNQI&X-Amz-Signature=b56a03137727efe7ae5814c51ef063ef29d2650c469d55cac4d1d95dfca98610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
