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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDALKYO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSfwdd8%2FJzJmaxG0487FZwumc2DEmdNugLHcTeD5%2F4fAiAo1yCYpsrCzZVgNovM36nX60JDcKL%2BdkOEUX3mpBqMciqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2AYn67gqgjtPUoBZKtwDHsJdHYOtLfVwXaNb7w9cBF1%2FRxsmQb5H1g%2FTjUTF7Ii4blB7pNmTuWJmg7fwrWMqeBCFgeShgRYjjb%2F6M3dWOQsPHKKsngZZ6emmG6uFCdDBqujnTFKL0Ktscff1b%2BCnaV6pdbd4dXgZxLOHp7FTz0JvxPtZe6N88%2FuHQu2TnWtMRfocQjgf6HcyEXhmevJrZMIQq%2FVjIBKUFJyiuejJwbT%2BwLW%2Fi9q00hUttQ2pbreK7XMgIgp0x0PxL%2BLDPsv5YQsZ5de08kZZJxHlzVj3CUXSEVcexERBanW2BhVFT47AjVcAf4nfyftD3WTPbRhOgpqIMmW8KAsnHoYC1hq4oxg3M%2FONub6oMxnyaN9yD8DrZQNhTHG%2B5ns%2FbhCUmvo7LW0zI4Z4j4zyRW6USV6otYQsU65o5rVuNF2G7TRcMA%2FBPn6vhWVQMl1gAx5PEMmR3TWaOk%2BSmg8tHwt3JKWwYrBalSI%2Fler4f5VKciwNvUCc2INxzMp1zR%2BUzEiwIMKBq880U%2B06cN45OJQzB%2F0PL%2Bx9u2mlYlDIFgpe1Yv10Udo81E9XUzR8hCQ3eV3j9UUGN4h9O20gbtmtXQB8TG4HZNXrdwChIYvsvXTvop4i%2BYQPleNiyqeM812%2F4wwypC1wQY6pgGCu93w82PgKlhTGN14JQ1SsiOwg6Y6wndB7fjR30q1w9QiDwARkjkiY00qSN2mSbZ3ql0Fvpizo1blcEaJcfoATKaktk4h7BKh8QN5p1UfEtW6eP3F2fTADKnigoXb0bV46Kr8KX0a4RQi0X1MG9IMbKGIdaV1jpDCAQQmEkjCv3YD%2BncmMdFsmaeiMeUUne1WXTe5y4dCn0erwoZ%2FCO9o41Zw1yKC&X-Amz-Signature=69ebf86d43e27fd84fd55784373645804dead4bfd12b21b1d2963a31b7fc73c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDALKYO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSfwdd8%2FJzJmaxG0487FZwumc2DEmdNugLHcTeD5%2F4fAiAo1yCYpsrCzZVgNovM36nX60JDcKL%2BdkOEUX3mpBqMciqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2AYn67gqgjtPUoBZKtwDHsJdHYOtLfVwXaNb7w9cBF1%2FRxsmQb5H1g%2FTjUTF7Ii4blB7pNmTuWJmg7fwrWMqeBCFgeShgRYjjb%2F6M3dWOQsPHKKsngZZ6emmG6uFCdDBqujnTFKL0Ktscff1b%2BCnaV6pdbd4dXgZxLOHp7FTz0JvxPtZe6N88%2FuHQu2TnWtMRfocQjgf6HcyEXhmevJrZMIQq%2FVjIBKUFJyiuejJwbT%2BwLW%2Fi9q00hUttQ2pbreK7XMgIgp0x0PxL%2BLDPsv5YQsZ5de08kZZJxHlzVj3CUXSEVcexERBanW2BhVFT47AjVcAf4nfyftD3WTPbRhOgpqIMmW8KAsnHoYC1hq4oxg3M%2FONub6oMxnyaN9yD8DrZQNhTHG%2B5ns%2FbhCUmvo7LW0zI4Z4j4zyRW6USV6otYQsU65o5rVuNF2G7TRcMA%2FBPn6vhWVQMl1gAx5PEMmR3TWaOk%2BSmg8tHwt3JKWwYrBalSI%2Fler4f5VKciwNvUCc2INxzMp1zR%2BUzEiwIMKBq880U%2B06cN45OJQzB%2F0PL%2Bx9u2mlYlDIFgpe1Yv10Udo81E9XUzR8hCQ3eV3j9UUGN4h9O20gbtmtXQB8TG4HZNXrdwChIYvsvXTvop4i%2BYQPleNiyqeM812%2F4wwypC1wQY6pgGCu93w82PgKlhTGN14JQ1SsiOwg6Y6wndB7fjR30q1w9QiDwARkjkiY00qSN2mSbZ3ql0Fvpizo1blcEaJcfoATKaktk4h7BKh8QN5p1UfEtW6eP3F2fTADKnigoXb0bV46Kr8KX0a4RQi0X1MG9IMbKGIdaV1jpDCAQQmEkjCv3YD%2BncmMdFsmaeiMeUUne1WXTe5y4dCn0erwoZ%2FCO9o41Zw1yKC&X-Amz-Signature=952a0bded75fa4faa3217be9af0d6a41efa8818d799393bee184d503fe5d66a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDALKYO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSfwdd8%2FJzJmaxG0487FZwumc2DEmdNugLHcTeD5%2F4fAiAo1yCYpsrCzZVgNovM36nX60JDcKL%2BdkOEUX3mpBqMciqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2AYn67gqgjtPUoBZKtwDHsJdHYOtLfVwXaNb7w9cBF1%2FRxsmQb5H1g%2FTjUTF7Ii4blB7pNmTuWJmg7fwrWMqeBCFgeShgRYjjb%2F6M3dWOQsPHKKsngZZ6emmG6uFCdDBqujnTFKL0Ktscff1b%2BCnaV6pdbd4dXgZxLOHp7FTz0JvxPtZe6N88%2FuHQu2TnWtMRfocQjgf6HcyEXhmevJrZMIQq%2FVjIBKUFJyiuejJwbT%2BwLW%2Fi9q00hUttQ2pbreK7XMgIgp0x0PxL%2BLDPsv5YQsZ5de08kZZJxHlzVj3CUXSEVcexERBanW2BhVFT47AjVcAf4nfyftD3WTPbRhOgpqIMmW8KAsnHoYC1hq4oxg3M%2FONub6oMxnyaN9yD8DrZQNhTHG%2B5ns%2FbhCUmvo7LW0zI4Z4j4zyRW6USV6otYQsU65o5rVuNF2G7TRcMA%2FBPn6vhWVQMl1gAx5PEMmR3TWaOk%2BSmg8tHwt3JKWwYrBalSI%2Fler4f5VKciwNvUCc2INxzMp1zR%2BUzEiwIMKBq880U%2B06cN45OJQzB%2F0PL%2Bx9u2mlYlDIFgpe1Yv10Udo81E9XUzR8hCQ3eV3j9UUGN4h9O20gbtmtXQB8TG4HZNXrdwChIYvsvXTvop4i%2BYQPleNiyqeM812%2F4wwypC1wQY6pgGCu93w82PgKlhTGN14JQ1SsiOwg6Y6wndB7fjR30q1w9QiDwARkjkiY00qSN2mSbZ3ql0Fvpizo1blcEaJcfoATKaktk4h7BKh8QN5p1UfEtW6eP3F2fTADKnigoXb0bV46Kr8KX0a4RQi0X1MG9IMbKGIdaV1jpDCAQQmEkjCv3YD%2BncmMdFsmaeiMeUUne1WXTe5y4dCn0erwoZ%2FCO9o41Zw1yKC&X-Amz-Signature=f0d2bfebcf7f73a90abeccd70ccecf2e18997681e00e0fc0ee5d71b87b73e6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPYXH6V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf8kAhN7Wem7Enp7d4q3Sh4XcZKsS%2FjRNPDmQyd7D3KQIhANfOKZZ7lrzeCC3ndQE3eFdntOAUJmqK%2FGaGTVENOfW1KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOG97r9rGdp3z%2Byzcq3AMyqNxeroBcRhYmYjT9uAEKmZER%2Ftbn%2BDypOglHwpLUZX%2BkMX9lhDjPu5r3eAkWz9xCEMzUwUHwryoeqjJkofqhxz0oaDhJSnquHTLYswEqxRr7IemqaPpc2B7uv3%2FodXmzUup%2BqSZi8LxzBzfNzreVncZz1rJa4O9aF5iDnkQm%2BK20wXbV8KkBGkvklgW8ZVUq6Wq5uw3iC%2BCbV0JhTDQs9ePZi54d7%2BAcrOEjT0Lxiw8YGpoK9VvQhYzqV4belVbDp1ICNB0gfFbgyflrxjEL3z1ngZLIaTkQ0xPXtkPaK75EJh3rP9JtJO1spOabz%2BMcMpq5m3gb8fxcsLnWxVy9ayXiZusKzk%2FRs8lPvHkm0GDVU8f%2BPvtNCFQ%2Bmnf8Z3vSuFTE0RDnOBZ2le69IZu%2BaVtW78CTlAe9Smr%2FTAdKiDRTuur8Ixmz52kJXKpwtcw7FiN8RfqzD58ZU%2FE9xLySIaWEKgPvS%2FXOb%2FUD6MLQg50YaUV643J%2FzO8Lirh64m1R%2FXenJ88rxRyumMF3fvFj53XqU6T8HZ%2F5pqWMdmom8O7iIJare4G6qTY60iDLQcZSHtJN9bLeF8WZsmhWTHJrI7y6VfrPtY%2FwI32%2Be3hhsRdsegmrJ9V5AzggIjCvkLXBBjqkAaUDc1C27c8s9E6v%2FpWiOskEOChGsraHw%2F%2Fa1EGHw4V9M5g6asQ3mTiKyZR%2B116DsQEhUzW3fF1EOywiS%2BFXf0kQD%2BbYL4cLVthJEGZmmJPpjnQ4VlT5mUUS3FakLtrl%2BGsXWDNDsqG6juBlHad9tlvQs0%2FC7jWnag%2Bf%2FpWU5vBTYjjw2pnru2OauO6LUphjn9Kalq%2FUCilXU33ntuia8F8KPpZ3&X-Amz-Signature=81219618805c2deed05f2b5c6ed2bcaf250fe87b777e6d0e20335b8e443adf47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJCNS5GB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCACoExMKWK2pK%2FyXaWk32qMWWjAX2iSYsswcHBMq86TQIgXzrs%2FADPqoJzGSZCLDM93WEp%2FnSxHc6BuPkdRk%2FmkkAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1Uo4JrYjbsW2CfAyrcA2DUPpLAhalGU2tuVJUFDdLJugUQHYPbWU5TZflznRp%2FBLQKdScR%2FQ9EVz2zGOWSqPFg%2FfDu52DXkgFggHq%2Bv6l1Tjl%2FQpHiU7sFCO%2BkCU9MpQ4urX2ofPxhh8lTHElUIwZ%2Fe22Oh9TvSSgO%2BxrFlUmgGOK%2FtV%2FUOjJSuHBog9adwrRU2G1iLz5Z1bwVbYWvTZYtAOJHu%2Fxo8S5ZK%2Fw7hVZM7XzhkS28DBxShPe51NrOH9%2BkUr99P3IQ52KFn0g0JMCeJpmTpsEldh7fKmIuLDLkthx0eAa4h9HEoEAtxsNASh6uyhzEKZ0pbZR9tRh4pT6BN%2Bte6WNvnHqMt3l3zw1E6ByXsCnjbNZ7IH%2B%2FvmPfgt3PETdWRntNTBun%2FeK35nkQwRgu3skbFaM280qMI6%2FOMfIitmVYwiZCw%2FBr0ePOGMcKTjSiy9xSukwUHS5xL5zMupctNSJLlPQ4My7Gyd7HWsnrdvYX1QLM%2B0MTgE2SyQUXWUHB052wPFm2jAhzbRiJenMlJEBPILDEo4ldR%2FETtHJCKfs8s0V4YyPcvYNQSsy3pkdJkV0n6ygKCpbZWMH0NY5iGJenF9R%2FOSGICvUWPn9m8WHoiefBXgqLd6gsM9Byuv2cam2mntQdMJGQtcEGOqUB5NwWxEplAJi%2BOmhfo53Y%2BCc%2B5wSEabm9pjoF1qams5cXktQ2TcI95gkgGYDlH%2Br3yHTNinufCgLxQS7RIFrDmOTq%2FtadoyFUYQNWeivXvZW3a1JMZ3hRlOIatP4%2FAF6cYeti%2B8mQUQCvhULGqxkAvefx84WEerRhZkChW7tjOIRbXLktFwsjUpgm%2FVPYM0oRgldUW38siaiWrsonVhA8LcXNl2HG&X-Amz-Signature=904210c3a6bb5031b8dc9fad64c883ac5363ae3411883a8f361ad27983f085e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDALKYO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDSfwdd8%2FJzJmaxG0487FZwumc2DEmdNugLHcTeD5%2F4fAiAo1yCYpsrCzZVgNovM36nX60JDcKL%2BdkOEUX3mpBqMciqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2AYn67gqgjtPUoBZKtwDHsJdHYOtLfVwXaNb7w9cBF1%2FRxsmQb5H1g%2FTjUTF7Ii4blB7pNmTuWJmg7fwrWMqeBCFgeShgRYjjb%2F6M3dWOQsPHKKsngZZ6emmG6uFCdDBqujnTFKL0Ktscff1b%2BCnaV6pdbd4dXgZxLOHp7FTz0JvxPtZe6N88%2FuHQu2TnWtMRfocQjgf6HcyEXhmevJrZMIQq%2FVjIBKUFJyiuejJwbT%2BwLW%2Fi9q00hUttQ2pbreK7XMgIgp0x0PxL%2BLDPsv5YQsZ5de08kZZJxHlzVj3CUXSEVcexERBanW2BhVFT47AjVcAf4nfyftD3WTPbRhOgpqIMmW8KAsnHoYC1hq4oxg3M%2FONub6oMxnyaN9yD8DrZQNhTHG%2B5ns%2FbhCUmvo7LW0zI4Z4j4zyRW6USV6otYQsU65o5rVuNF2G7TRcMA%2FBPn6vhWVQMl1gAx5PEMmR3TWaOk%2BSmg8tHwt3JKWwYrBalSI%2Fler4f5VKciwNvUCc2INxzMp1zR%2BUzEiwIMKBq880U%2B06cN45OJQzB%2F0PL%2Bx9u2mlYlDIFgpe1Yv10Udo81E9XUzR8hCQ3eV3j9UUGN4h9O20gbtmtXQB8TG4HZNXrdwChIYvsvXTvop4i%2BYQPleNiyqeM812%2F4wwypC1wQY6pgGCu93w82PgKlhTGN14JQ1SsiOwg6Y6wndB7fjR30q1w9QiDwARkjkiY00qSN2mSbZ3ql0Fvpizo1blcEaJcfoATKaktk4h7BKh8QN5p1UfEtW6eP3F2fTADKnigoXb0bV46Kr8KX0a4RQi0X1MG9IMbKGIdaV1jpDCAQQmEkjCv3YD%2BncmMdFsmaeiMeUUne1WXTe5y4dCn0erwoZ%2FCO9o41Zw1yKC&X-Amz-Signature=f2fe0e307ccea0497d486da58feffc25383e94faf3b74bf527bc92705ecbe91e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
