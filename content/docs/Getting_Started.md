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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633GCBYA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9cNQK4Hksa3BPJc2jEsoCOWs2xwDp%2FdsFV%2Bse38Kl4QIgbCIwlhYLficD%2Fg4419kfESIW6Xr%2Fdv34McPW5PqoWcYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf6AkJg1Ti%2B9fxNdCrcA9SI6LK%2FwpP1vzYzMTbCzcEnDqO98BdnCMKblouigPJ6yFJICIdBnqBqeihSaW6Q%2BaxzRXoAp0r4CLK%2BZ8avVcYaJ3NLS1O2o0GRMATH6AhQOz4UU7Z%2BufszMd6V2MQIbmjVWtficnF6ocYllvlWhY%2BpGPEOqES%2Fvazod7ple56gBwwwcHvoIv8A2KhefCO4GV0YbfeHvE%2FHShDqmJicJxSScvLyBCyG3HtCA8GebGkgT%2BzN2nXLp17tKsUZn4zNoGsQV40rU1%2F9HysaMSocZbzf8eyD6Y7aTuzBFLxYOYSOEwJYn7PfwTvogUY2fa62ZDsEojbGpEwi3CoqN6H9j9gUM9U%2FiOfxO7KzTj%2BKhl8Abo%2B4s6HMvWOeMubabVImfq%2FFxIYZ3%2FGujIYTl30Tal7LvK7nAWwfiVDoaDIC2mxRgkZ0l4BOptmjvWXIf2DnrEpj7JHM6nkB%2BPXI%2BzcLtcPEoNVFlpbmyT7IfF%2B%2Fn3gcRD8gA%2BGLNvhcL7aamKhZTj7%2BzR6kn%2BCKb7spFf0XsMABwUc23%2B6xOkAsSpZ%2FCJE5YA7Z%2BKxYBdgLWymSJgn4mczK%2FIq7ndyDNwvn1LHlibDbrSjBoH8vSZaJG0u9DdclDC6O7pBWRgdaLPu3MJaUrsEGOqUB3%2BfoUpi2XJET1NYdYtze86rdkayvI1f0W1UmW4jR4ML%2BiOppoSZdyBLVBcXljdW2KROXvTcLiqlCYnpNE%2FaCCXHM3T4MNls1bapf3Vtf2oayHRs76dCZekJwZHqhe15c2%2B%2B8UAXnJu0g9Zl9aDdnJMp%2BK69ees9lvTngrcYj692jlXGzreheBp0UvyD4hXMXlE%2FHM54Cjx21A2JY2v1Ry2Rj%2BNvd&X-Amz-Signature=de54fd33dac16d166dc9c58c6c8fc9bbccfdeb7edaf5897c1e6588fb401c3724&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633GCBYA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9cNQK4Hksa3BPJc2jEsoCOWs2xwDp%2FdsFV%2Bse38Kl4QIgbCIwlhYLficD%2Fg4419kfESIW6Xr%2Fdv34McPW5PqoWcYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf6AkJg1Ti%2B9fxNdCrcA9SI6LK%2FwpP1vzYzMTbCzcEnDqO98BdnCMKblouigPJ6yFJICIdBnqBqeihSaW6Q%2BaxzRXoAp0r4CLK%2BZ8avVcYaJ3NLS1O2o0GRMATH6AhQOz4UU7Z%2BufszMd6V2MQIbmjVWtficnF6ocYllvlWhY%2BpGPEOqES%2Fvazod7ple56gBwwwcHvoIv8A2KhefCO4GV0YbfeHvE%2FHShDqmJicJxSScvLyBCyG3HtCA8GebGkgT%2BzN2nXLp17tKsUZn4zNoGsQV40rU1%2F9HysaMSocZbzf8eyD6Y7aTuzBFLxYOYSOEwJYn7PfwTvogUY2fa62ZDsEojbGpEwi3CoqN6H9j9gUM9U%2FiOfxO7KzTj%2BKhl8Abo%2B4s6HMvWOeMubabVImfq%2FFxIYZ3%2FGujIYTl30Tal7LvK7nAWwfiVDoaDIC2mxRgkZ0l4BOptmjvWXIf2DnrEpj7JHM6nkB%2BPXI%2BzcLtcPEoNVFlpbmyT7IfF%2B%2Fn3gcRD8gA%2BGLNvhcL7aamKhZTj7%2BzR6kn%2BCKb7spFf0XsMABwUc23%2B6xOkAsSpZ%2FCJE5YA7Z%2BKxYBdgLWymSJgn4mczK%2FIq7ndyDNwvn1LHlibDbrSjBoH8vSZaJG0u9DdclDC6O7pBWRgdaLPu3MJaUrsEGOqUB3%2BfoUpi2XJET1NYdYtze86rdkayvI1f0W1UmW4jR4ML%2BiOppoSZdyBLVBcXljdW2KROXvTcLiqlCYnpNE%2FaCCXHM3T4MNls1bapf3Vtf2oayHRs76dCZekJwZHqhe15c2%2B%2B8UAXnJu0g9Zl9aDdnJMp%2BK69ees9lvTngrcYj692jlXGzreheBp0UvyD4hXMXlE%2FHM54Cjx21A2JY2v1Ry2Rj%2BNvd&X-Amz-Signature=7ea11113fc2c857daf5d697c8d588580e6e0e36a2843cfea3ac52c92e5333648&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633GCBYA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9cNQK4Hksa3BPJc2jEsoCOWs2xwDp%2FdsFV%2Bse38Kl4QIgbCIwlhYLficD%2Fg4419kfESIW6Xr%2Fdv34McPW5PqoWcYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf6AkJg1Ti%2B9fxNdCrcA9SI6LK%2FwpP1vzYzMTbCzcEnDqO98BdnCMKblouigPJ6yFJICIdBnqBqeihSaW6Q%2BaxzRXoAp0r4CLK%2BZ8avVcYaJ3NLS1O2o0GRMATH6AhQOz4UU7Z%2BufszMd6V2MQIbmjVWtficnF6ocYllvlWhY%2BpGPEOqES%2Fvazod7ple56gBwwwcHvoIv8A2KhefCO4GV0YbfeHvE%2FHShDqmJicJxSScvLyBCyG3HtCA8GebGkgT%2BzN2nXLp17tKsUZn4zNoGsQV40rU1%2F9HysaMSocZbzf8eyD6Y7aTuzBFLxYOYSOEwJYn7PfwTvogUY2fa62ZDsEojbGpEwi3CoqN6H9j9gUM9U%2FiOfxO7KzTj%2BKhl8Abo%2B4s6HMvWOeMubabVImfq%2FFxIYZ3%2FGujIYTl30Tal7LvK7nAWwfiVDoaDIC2mxRgkZ0l4BOptmjvWXIf2DnrEpj7JHM6nkB%2BPXI%2BzcLtcPEoNVFlpbmyT7IfF%2B%2Fn3gcRD8gA%2BGLNvhcL7aamKhZTj7%2BzR6kn%2BCKb7spFf0XsMABwUc23%2B6xOkAsSpZ%2FCJE5YA7Z%2BKxYBdgLWymSJgn4mczK%2FIq7ndyDNwvn1LHlibDbrSjBoH8vSZaJG0u9DdclDC6O7pBWRgdaLPu3MJaUrsEGOqUB3%2BfoUpi2XJET1NYdYtze86rdkayvI1f0W1UmW4jR4ML%2BiOppoSZdyBLVBcXljdW2KROXvTcLiqlCYnpNE%2FaCCXHM3T4MNls1bapf3Vtf2oayHRs76dCZekJwZHqhe15c2%2B%2B8UAXnJu0g9Zl9aDdnJMp%2BK69ees9lvTngrcYj692jlXGzreheBp0UvyD4hXMXlE%2FHM54Cjx21A2JY2v1Ry2Rj%2BNvd&X-Amz-Signature=d9f4b6cc5b6f52aa609b8a56abe6a0a213a4da6dc8c59c7bdb864aec05db5778&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFF6ZEBH%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGlwBft%2FgzEkD%2Fova%2Bgz9ei%2BuQ87LBup2PzRIeYEwCUwIhALaftzqmFmPGjeaN63enjctoPisoFsNOnGap5f11lqLsKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywEBKUuPDjEOh%2Frqwq3AMcBpnpjgZQJl1BBXZvGhNJPCOH2ve4xGOpqxKhAVk6SniElFszCYU0Io1KXEqkXl6qn2Tq%2FteosZTWFId8f%2BbH%2FMZKsVt%2FWDA%2Fw9uuPo2vwsqUhYtvoIxyApaY5choUgpsGotCKb6b9GMXBYpIc2cq71igumpGhHvSyjtyRswYai3jWvdHCj0H07DBM8iU22yU9IFOppd15afPZFMYofZiZ6fbAK6YmlUqddRe%2BGMa9pqf8hXPSvhypvi6wmJWiawgSPzEPkeDAo%2Bi77dOu3nqp6U8VCXzSiUguhGH0lOCn6D%2B4juZzQfIu4bRSdbL%2Fsq1hz89lYtqOWJOu4D6AWroyDC7DtykiHVQXjefXg4QFv%2F%2FETeYzrmaCllCZnQp%2Fk3a36XecIcxJNEKuM7dYN1Nx7PnwlvrsovXyzZAye0COG7dhA7CJUlN5U3mFcdYorp777u9mJf0qSdG0xwk6cFyHbD1kLF5jvjFvAeORtarx3rF%2BWlwbtVWA6%2FwfqE79IgklXULi5NWvLJ50dQXheBkp7Y1d9kABmEfL66wMHxiR%2FEoR%2FJjKJyWTXd8vX32XbaUuYLfnK1UdxiTDrdb1useEGaOfD2dZr8tKakWW44ZbZIYzCfp71C3uKKf%2BzCgk67BBjqkAdo%2FKR9MJNX7YDu2jzUkLf3yIMD8qz6VzKvTObYe0rFztcMN2AfkQXGXwagydYBAnvxTtDe4qrgyeAbmiqiszykfI%2FFip6C3JJpXtYSYcNt5walnrKKMwWvTe4Wffu4KssWv5GL4RZJW78uTCvBzDcw0IRPS%2FK2OlChPfUpkSRGbUyBop5NKrfXUZd3HcX9xhgF%2F9mwjvGgTxFtYa1aBLYWcgX5W&X-Amz-Signature=1d74533d4540898a0f15fd26e50dbcbc6a857e9d8316add434e235fdd5801ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LFN5CJ3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVlnE8OuPqSBNWuBljAriXf9Q0T%2FqD3TqDVgif3x1TGQIhAKV1lzuM1Psu0wxGEkCNchIdptVxwKkJi2%2Bn93u3I3ufKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl1242aHFtQki1cpAq3AMb%2FXWRCynxEgwuS%2Fje9XzJAV2SEtBPyjqeR%2B%2FTtA0S1bjqMlBX3i3cabHdulveL27ilsh3sL2jexaKW4EyBT7ZS9ldLcQ9f7GVm5r7nlWkMTWTRpRlp0kvXwvUS%2FQyt6KU9vKMJFjEyuBKExf6w9hGKVVQsC2%2BA3o0OALn3062NQRnXFoMbRi6H54FJpV6rVQmEeoH%2BX7ohUEE8meui%2F6c7B0e3LSzDVNOR63pQdz9fAAOb7OaPMR%2FjOzhM9WF3bKEmRnyw80RXRpPeDst3wEfWFzccAiUAIwIdbMudGp7okhlyCHsrUlqNXJyGfVO9PYhAnvUd0HUNwFGIYqyTGrY4FL%2B6CO5c3iHuimw2vzdq%2BEgPt3MvY%2FX3V4s0lsIJPQFHrtp8NtW8utmsM6zvDCE%2FB4plT9R94DuPEJf68w4u00TZ9BjOgaAmRH8cP%2F%2Fqf5R0gkqXj43hfKfsFoeQ1p6Qp0N2V5Ce%2FN8X0qYtm5ZxC3NLStvMTiaA86CJruPjl%2BmGmj4IVONq3ePruiSPjdG6uXbXSbxBRGvMPn%2BbwHtoc43m2Ix9xgM%2Bw6QSSOLS0qAO%2F9eK0nIrauPbG31cbVSRaNDNYapSqv4pBu7%2F1pt%2B%2BL1ze8XJqO6PkYa3jDzkq7BBjqkAc0oZ%2F%2FkjGDPqJHJ9bFTb0f8byv%2BkIEkSSJ17W1FAOSS5Pp3Zonhvpk1q3vtIPpUuVlqh3COXscEZUkswGfoAcnV9m54RtagDqxqvyt3mAhZWAXRSLv4TZnTCq3XTW0uIKI%2BTNyDlocqrAuHUeqUpWGNkW%2BqzoxYpKjjDGESHtzcT5sgokmqVsN2poC2j34ThabfDIBXAf7PzGMirwIQviYVz6ot&X-Amz-Signature=271c18c21d42fd27c1602baefa5edc177d43d6c860b222b3b4aa87a4ac8ba963&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633GCBYA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9cNQK4Hksa3BPJc2jEsoCOWs2xwDp%2FdsFV%2Bse38Kl4QIgbCIwlhYLficD%2Fg4419kfESIW6Xr%2Fdv34McPW5PqoWcYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGf6AkJg1Ti%2B9fxNdCrcA9SI6LK%2FwpP1vzYzMTbCzcEnDqO98BdnCMKblouigPJ6yFJICIdBnqBqeihSaW6Q%2BaxzRXoAp0r4CLK%2BZ8avVcYaJ3NLS1O2o0GRMATH6AhQOz4UU7Z%2BufszMd6V2MQIbmjVWtficnF6ocYllvlWhY%2BpGPEOqES%2Fvazod7ple56gBwwwcHvoIv8A2KhefCO4GV0YbfeHvE%2FHShDqmJicJxSScvLyBCyG3HtCA8GebGkgT%2BzN2nXLp17tKsUZn4zNoGsQV40rU1%2F9HysaMSocZbzf8eyD6Y7aTuzBFLxYOYSOEwJYn7PfwTvogUY2fa62ZDsEojbGpEwi3CoqN6H9j9gUM9U%2FiOfxO7KzTj%2BKhl8Abo%2B4s6HMvWOeMubabVImfq%2FFxIYZ3%2FGujIYTl30Tal7LvK7nAWwfiVDoaDIC2mxRgkZ0l4BOptmjvWXIf2DnrEpj7JHM6nkB%2BPXI%2BzcLtcPEoNVFlpbmyT7IfF%2B%2Fn3gcRD8gA%2BGLNvhcL7aamKhZTj7%2BzR6kn%2BCKb7spFf0XsMABwUc23%2B6xOkAsSpZ%2FCJE5YA7Z%2BKxYBdgLWymSJgn4mczK%2FIq7ndyDNwvn1LHlibDbrSjBoH8vSZaJG0u9DdclDC6O7pBWRgdaLPu3MJaUrsEGOqUB3%2BfoUpi2XJET1NYdYtze86rdkayvI1f0W1UmW4jR4ML%2BiOppoSZdyBLVBcXljdW2KROXvTcLiqlCYnpNE%2FaCCXHM3T4MNls1bapf3Vtf2oayHRs76dCZekJwZHqhe15c2%2B%2B8UAXnJu0g9Zl9aDdnJMp%2BK69ees9lvTngrcYj692jlXGzreheBp0UvyD4hXMXlE%2FHM54Cjx21A2JY2v1Ry2Rj%2BNvd&X-Amz-Signature=b6e76a89a6074d1387873a6938f1f4382dcd202f400b8edbe85d6ea43324e5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
