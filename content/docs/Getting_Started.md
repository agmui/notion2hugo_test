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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLPTZ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDPQLn0Wzt3N7o%2FjrSpUntheRtsCF9fuG9UVc7LX0GrVAIhAOUpsZaEjiw%2BozzH5yjjZmOtgTqPQ80N2QlWmQ0%2FOfaSKv8DCDwQABoMNjM3NDIzMTgzODA1IgwpZlmtozigyKxQep8q3AMfM8eLJlL26bCec2rBCoXa7iW%2BbcdHnTxnl%2BUfKpVF2zAW%2BP%2FmKvqw12JLmwT321dfFzd3spxOWA45o1ez0nvXaF5UGPOrMAmHbaTAzBR%2FoLeuwgBU6y2r8gIRhVusTaBEWj2p4N4094Q2PfoeuMuc8kKloU3%2B3fIdE0N1vwbVDwjS6oLUYzbNY0qsYIsLwRHCk9TCiQHEAbk8sNlJgJbXSYyu4WlXFIGP44VBl5a7IEFfTCtcfQP8W%2FnTA13WxpQYH%2FwTHqakQyBy1Krl91%2FK4fY5O8HJLsB8tavx8XnFYS7sqKAG%2B17hMBeaVCXBZReuPUHOTzgKDtJ629T1sdZZmew5PVkjsRDDeWhUA2W3Nlwn7r3ryakj6pEYkuKngaQoG83PHWXQr0EXhPaqwaaq%2BJdsB4ND5r3pMybp4UY3Cvpt9h6XJm2iMCu3ZA1sUNClbYsfK3JIwQY%2FwJZjfcKfi9wDSYDEucZVtdR6me9bJaLvz3eYFISeP%2BqYOcmkS8ROVKdp6L8OZ5O4tYAoJWS4qflxLJmYcEqjMB3H%2FBq02kOmCQCNtBre6EXxJQa2P05dR8D%2FXxP3STJHyvz%2FYiTIYY1kFPZkqiTqtNXuAAonqE7vzjnP6SwVcGIIGTDBzO3CBjqkAalwN4kKDk6IJVTTyOrqmGGiJt0kMjQDatJVdvUfL4%2FScXZSUY79TlHf2U%2F3vqJd5RK%2Bkh5EhS4ca%2BAhrs%2BMv73SfMqyyjGKTl2exYy%2F3OVzc7NynF3fjTUPmGkARTQ%2B8yDtosrkc6Q7OddYPrJ80K9LYdViB7hYBlENJ3KHQCG6RIOPRGbza5pgdysPHNLDhAJ%2BhgrF%2BQBO4950C1yNtMQRV%2FGR&X-Amz-Signature=af3779177f2d3eb6e4a27d92cdf789811200b8585387563fa9f9fdc46942d1b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLPTZ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDPQLn0Wzt3N7o%2FjrSpUntheRtsCF9fuG9UVc7LX0GrVAIhAOUpsZaEjiw%2BozzH5yjjZmOtgTqPQ80N2QlWmQ0%2FOfaSKv8DCDwQABoMNjM3NDIzMTgzODA1IgwpZlmtozigyKxQep8q3AMfM8eLJlL26bCec2rBCoXa7iW%2BbcdHnTxnl%2BUfKpVF2zAW%2BP%2FmKvqw12JLmwT321dfFzd3spxOWA45o1ez0nvXaF5UGPOrMAmHbaTAzBR%2FoLeuwgBU6y2r8gIRhVusTaBEWj2p4N4094Q2PfoeuMuc8kKloU3%2B3fIdE0N1vwbVDwjS6oLUYzbNY0qsYIsLwRHCk9TCiQHEAbk8sNlJgJbXSYyu4WlXFIGP44VBl5a7IEFfTCtcfQP8W%2FnTA13WxpQYH%2FwTHqakQyBy1Krl91%2FK4fY5O8HJLsB8tavx8XnFYS7sqKAG%2B17hMBeaVCXBZReuPUHOTzgKDtJ629T1sdZZmew5PVkjsRDDeWhUA2W3Nlwn7r3ryakj6pEYkuKngaQoG83PHWXQr0EXhPaqwaaq%2BJdsB4ND5r3pMybp4UY3Cvpt9h6XJm2iMCu3ZA1sUNClbYsfK3JIwQY%2FwJZjfcKfi9wDSYDEucZVtdR6me9bJaLvz3eYFISeP%2BqYOcmkS8ROVKdp6L8OZ5O4tYAoJWS4qflxLJmYcEqjMB3H%2FBq02kOmCQCNtBre6EXxJQa2P05dR8D%2FXxP3STJHyvz%2FYiTIYY1kFPZkqiTqtNXuAAonqE7vzjnP6SwVcGIIGTDBzO3CBjqkAalwN4kKDk6IJVTTyOrqmGGiJt0kMjQDatJVdvUfL4%2FScXZSUY79TlHf2U%2F3vqJd5RK%2Bkh5EhS4ca%2BAhrs%2BMv73SfMqyyjGKTl2exYy%2F3OVzc7NynF3fjTUPmGkARTQ%2B8yDtosrkc6Q7OddYPrJ80K9LYdViB7hYBlENJ3KHQCG6RIOPRGbza5pgdysPHNLDhAJ%2BhgrF%2BQBO4950C1yNtMQRV%2FGR&X-Amz-Signature=74f402837084cf4d069a5f1cdfae92ea2b5060609b544dbee6d04fa03af159c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLPTZ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDPQLn0Wzt3N7o%2FjrSpUntheRtsCF9fuG9UVc7LX0GrVAIhAOUpsZaEjiw%2BozzH5yjjZmOtgTqPQ80N2QlWmQ0%2FOfaSKv8DCDwQABoMNjM3NDIzMTgzODA1IgwpZlmtozigyKxQep8q3AMfM8eLJlL26bCec2rBCoXa7iW%2BbcdHnTxnl%2BUfKpVF2zAW%2BP%2FmKvqw12JLmwT321dfFzd3spxOWA45o1ez0nvXaF5UGPOrMAmHbaTAzBR%2FoLeuwgBU6y2r8gIRhVusTaBEWj2p4N4094Q2PfoeuMuc8kKloU3%2B3fIdE0N1vwbVDwjS6oLUYzbNY0qsYIsLwRHCk9TCiQHEAbk8sNlJgJbXSYyu4WlXFIGP44VBl5a7IEFfTCtcfQP8W%2FnTA13WxpQYH%2FwTHqakQyBy1Krl91%2FK4fY5O8HJLsB8tavx8XnFYS7sqKAG%2B17hMBeaVCXBZReuPUHOTzgKDtJ629T1sdZZmew5PVkjsRDDeWhUA2W3Nlwn7r3ryakj6pEYkuKngaQoG83PHWXQr0EXhPaqwaaq%2BJdsB4ND5r3pMybp4UY3Cvpt9h6XJm2iMCu3ZA1sUNClbYsfK3JIwQY%2FwJZjfcKfi9wDSYDEucZVtdR6me9bJaLvz3eYFISeP%2BqYOcmkS8ROVKdp6L8OZ5O4tYAoJWS4qflxLJmYcEqjMB3H%2FBq02kOmCQCNtBre6EXxJQa2P05dR8D%2FXxP3STJHyvz%2FYiTIYY1kFPZkqiTqtNXuAAonqE7vzjnP6SwVcGIIGTDBzO3CBjqkAalwN4kKDk6IJVTTyOrqmGGiJt0kMjQDatJVdvUfL4%2FScXZSUY79TlHf2U%2F3vqJd5RK%2Bkh5EhS4ca%2BAhrs%2BMv73SfMqyyjGKTl2exYy%2F3OVzc7NynF3fjTUPmGkARTQ%2B8yDtosrkc6Q7OddYPrJ80K9LYdViB7hYBlENJ3KHQCG6RIOPRGbza5pgdysPHNLDhAJ%2BhgrF%2BQBO4950C1yNtMQRV%2FGR&X-Amz-Signature=3bd56b4dd740e753850720516b38a88244b6543b5f0485cac9a65ad58c4f1899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSCG6V2%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIEvhr8l6j6xXYjVjX%2BvhFUyG67Fpl9cc4mWVO8A912FRAiEAlMXUTtawZopxnLa0ycTF1X8HIUuiqiDRnSzvm%2Fur5Tcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDM5N0ToL4zMkJ9hdtSrcA3Pg9brn4YXRCZXg3HX3L0WyHnhE5Cdj7IJ7fgbj2qpyTyK8LMPeQh4rX2R5kLfkORynr8sqS2d7wBmfy5156EtpvfUQMwzudG%2B%2BtK%2BBtbtXDWkj0mnBbzJEgP9Wpvv6NpfevFNTwdaiW40%2BuKo1icw%2BfsjIyMYWdy7jEtGzU%2Fkg2IVjL9WfEAfZ%2BRB32xAc%2FZ790bunl3t4z%2FlqHCtNK0GYscpizF5nRtJJwPURyjZMZdp5iyP3FtsE88F9RiFqagdupkCIoebP%2FJ%2BbRtKbfSlmBImYOmyDzYEAWxZ%2FZPJRIA3QdDxscn7dwGHOlP9WP9tmXyrnbSsEz1c7T%2FY4CCYml50HPgBb7qZPMP6fATAjeury%2BfnCGExaptC8aKM5WzUb51QrVcGlr%2Fdf0SXnc%2BRXSMVLsparjvMIhAsA2pBycBk17FOH5D2zBL7O%2BCyJ%2BqrFluyrJvNfxHLRvbf%2BCZJ2UP6Twr5ZH8BA8bsqFTDnomXD%2F1iqFaIWQF8mDAM55P0Z%2FHGwH4LkKDFZlUk2yQq96w%2FyCaqxkG7G7TiMVU63JhQTvzkAYBSVWt39CSyyIXxCxYUQBelEcsA4whGBcZZPcXA7BVOGp%2Bi43OVQEvkuPPpqrgbptY%2FiTRxtMM6K7sIGOqUBNPR6D3T%2FN8T6AI0xzd2cs97gORwOc4dzsxsfJqpk6HQLkdnxwOj5YwRXlGWLgVEOZC1DQ6MUKNFchB%2F%2Fd0IOgoGT3hDwuNMV4oKL3gBtKvzCu6gyRUaoacrbhzA5phIOphZ%2FGKak3H1Pl3h%2BNxIuiTsIzaOjlUFTltIWOTfBWuEhgptJbpTiC%2FVoL6cQYA8BZHDJxVZZosWbmpXtxCEoxQs6P%2Bza&X-Amz-Signature=183ed03e6ad6641262a60a36bffe7b794c628570d6b32fc570296ba7a46bbb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2UTKDFM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCICqZ3jYoFCAcUvUXpzdE5EqXAA6bL%2BXoSBBAS1tsfvjzAiBpLwhI2FmwJ4oJ8vK1663%2FwWE0Fe6canRtv5hv%2Fxujoir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMdLwVvZsfvOXm%2BTXHKtwDID4EUpkQPf18Yk9OyEl6KHrw3fN4%2BUIXT3pBTvQvDdtrB2zubRSooTaquQhM%2FAWvJ0%2Bs4W7m83nn40s4kLT55JgaNN9HJvoqZDsbrIaA3gr5x848HfzAxf8qroRwzsrCUHzrKh0le%2BvWPlkjKbCSazNgPXT%2FojjuupEnkvyjm23drpVLiOJ3FnmqpOJEQNNUJybCXHP0MLZWwwG8FWyjSeUORrHRhZ%2FSHceR98Unyw4%2F9lvynQ8iXkFKWB2NVwqCXg%2BJzaMmsQ%2FkOg4mllexARglkKR88oQGJvfnO3GRiJadhdVwA2DGEiDTghADIub9Yo4LgFXCA4Crbvc7v1gDKQUE8tyAd86uqWGJxxmbw1u%2B5hMDw99wBLsz%2FemvbHkHkgH2lkVhPpyWsM%2BGy7D9bGZa85E%2FtA%2FMxdJXV0jU528EXjFq8oz62idsDfkVgEso%2BIld5zmVtObnVDxPAY6uEseocuW7BKsUEcY8ecrCJUIzi19fk20wh80qL6n9eUCBobEOgI%2FNzmAvJoFcFY4Um%2BDUgIto5DYP7C5k5bn2fpQUKMWtb0UxO%2FIkzu1lFQj6Bw3N3KeyAsGMq5BNUIsJ3gXBc6BfTmkLzGHkvdottf1fiT3uqasBamDZvPgw36XuwgY6pgGHxN9IHxB6RcUzr34A54caUQGhVqhV4EcvFcWcyh4mj%2B1ahx98H4Q4MMLT%2FMlFg3ZUwewC0A3HanrCM2%2Btq4CCuseRKwlJY29WKk5GIvXNOk3YE8DkXpQDTAt0NdSX8Fxvv1F2IDNF2VMLhBzNLJXizzRadfLc6P87bIxLILq4B%2B7Im%2FRnvJkd%2Br%2B4mN6ZoVfglKZ1j7WX2FD02Z8mE%2FPTKl2lmWEI&X-Amz-Signature=78957aaa10fb40ba0c455f016ea020a84bc7b557755a08fe16d1a2b6ecd93e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQLPTZ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDPQLn0Wzt3N7o%2FjrSpUntheRtsCF9fuG9UVc7LX0GrVAIhAOUpsZaEjiw%2BozzH5yjjZmOtgTqPQ80N2QlWmQ0%2FOfaSKv8DCDwQABoMNjM3NDIzMTgzODA1IgwpZlmtozigyKxQep8q3AMfM8eLJlL26bCec2rBCoXa7iW%2BbcdHnTxnl%2BUfKpVF2zAW%2BP%2FmKvqw12JLmwT321dfFzd3spxOWA45o1ez0nvXaF5UGPOrMAmHbaTAzBR%2FoLeuwgBU6y2r8gIRhVusTaBEWj2p4N4094Q2PfoeuMuc8kKloU3%2B3fIdE0N1vwbVDwjS6oLUYzbNY0qsYIsLwRHCk9TCiQHEAbk8sNlJgJbXSYyu4WlXFIGP44VBl5a7IEFfTCtcfQP8W%2FnTA13WxpQYH%2FwTHqakQyBy1Krl91%2FK4fY5O8HJLsB8tavx8XnFYS7sqKAG%2B17hMBeaVCXBZReuPUHOTzgKDtJ629T1sdZZmew5PVkjsRDDeWhUA2W3Nlwn7r3ryakj6pEYkuKngaQoG83PHWXQr0EXhPaqwaaq%2BJdsB4ND5r3pMybp4UY3Cvpt9h6XJm2iMCu3ZA1sUNClbYsfK3JIwQY%2FwJZjfcKfi9wDSYDEucZVtdR6me9bJaLvz3eYFISeP%2BqYOcmkS8ROVKdp6L8OZ5O4tYAoJWS4qflxLJmYcEqjMB3H%2FBq02kOmCQCNtBre6EXxJQa2P05dR8D%2FXxP3STJHyvz%2FYiTIYY1kFPZkqiTqtNXuAAonqE7vzjnP6SwVcGIIGTDBzO3CBjqkAalwN4kKDk6IJVTTyOrqmGGiJt0kMjQDatJVdvUfL4%2FScXZSUY79TlHf2U%2F3vqJd5RK%2Bkh5EhS4ca%2BAhrs%2BMv73SfMqyyjGKTl2exYy%2F3OVzc7NynF3fjTUPmGkARTQ%2B8yDtosrkc6Q7OddYPrJ80K9LYdViB7hYBlENJ3KHQCG6RIOPRGbza5pgdysPHNLDhAJ%2BhgrF%2BQBO4950C1yNtMQRV%2FGR&X-Amz-Signature=8f1d11b01c4b00d8ac5e7897cdfe6bf230d26d92e84b5f804920cbe7a9858fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
