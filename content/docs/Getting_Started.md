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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ44YZHH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnYWF5dT9kdQVXiPbAWSQtZvsv0hgzYrJn4RCzVU7zwIhAPoopySFPLm5cFtX%2Frnbtx6BJzXkVwzzPWZNF9I4OPLbKv8DCEYQABoMNjM3NDIzMTgzODA1IgyG6rUG3R2Qbaf8KOAq3AMEVCg6ttuUVW4oJqN9QhJ5kscHYjAIXfDLa28FsHec2TjvTBOZuLxOt9rI30lEY4rH1aRxaZK5wvNPsMCz3mDWKshaHKwxXpeNsWudRJIEfbTsP0ftXBUyCpr16ZD82wlxodVnDUvpR%2Fm6Hb0NOfzAjdIA47uTi2Wr6NAPtqmrQaDyCWNy0osgRPi2m1iPADNd74HMVjaagbOnpGSa7GNotoJFZOeKlxRsW4Q5YtwfNfZPC0I6aIv8jp3a6a3FmpaiKL04U2wnzF0zyidLLmYKox%2B5VwGWFYT3z%2FQABJGiHP8wVUGg7VQPSmRLIL%2F%2B42s3WepJ1G6sjqxVaR%2FfxFs879dGae1P2yYIajYD6VjU39X%2BS2vQ0fMCsAyMFMH86UKLKE884i7%2Bczcwm%2BNnwHXbNVRRRYAASAdb5zej345dyLDJeEz4rgpVNTo%2BVqwNq0ovtrIHByx%2BZrYOZRcuEzW%2FIaJgla5tq7vC9m4n92K84jRx0nvrKvLGTnfW3NjRN7FY1roBkf%2B6a72ufLxOQSQRg2pwsa3vrCcnZsIKmUWkYnvfmgTVU%2Bsr8SWbUKA9qL1S49ksg6zA9CeUA7zkSTKvAd58%2FmKlQPQz6prH2RIteSqtBsCAjf3Ar%2FRviTDNq%2BC%2BBjqkAdvrI%2FPjf9GIFVotJ0fOtKEvxKKGE%2FDcru8JmihjYgRAU4lZIgqUqibL8M8PJpH5ikxJ1uDLc5xxv122Ngdw7qFYpops7%2Bm9F2pudU1%2FOdVKSRvMi9kXzmZHDQAxkr6UMZ2TRUw0nKcbgx3igXjp2bfGACAiM%2FNz1bcN508rKJsTCHTXb8SxcpWISlbfQlmA3re%2BK9aLnolk2ss7bVHmYHCV4yvM&X-Amz-Signature=735285efc9ccb06d1552f609f02341d4bddfd5a126af96373a933bd2535b7fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ44YZHH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnYWF5dT9kdQVXiPbAWSQtZvsv0hgzYrJn4RCzVU7zwIhAPoopySFPLm5cFtX%2Frnbtx6BJzXkVwzzPWZNF9I4OPLbKv8DCEYQABoMNjM3NDIzMTgzODA1IgyG6rUG3R2Qbaf8KOAq3AMEVCg6ttuUVW4oJqN9QhJ5kscHYjAIXfDLa28FsHec2TjvTBOZuLxOt9rI30lEY4rH1aRxaZK5wvNPsMCz3mDWKshaHKwxXpeNsWudRJIEfbTsP0ftXBUyCpr16ZD82wlxodVnDUvpR%2Fm6Hb0NOfzAjdIA47uTi2Wr6NAPtqmrQaDyCWNy0osgRPi2m1iPADNd74HMVjaagbOnpGSa7GNotoJFZOeKlxRsW4Q5YtwfNfZPC0I6aIv8jp3a6a3FmpaiKL04U2wnzF0zyidLLmYKox%2B5VwGWFYT3z%2FQABJGiHP8wVUGg7VQPSmRLIL%2F%2B42s3WepJ1G6sjqxVaR%2FfxFs879dGae1P2yYIajYD6VjU39X%2BS2vQ0fMCsAyMFMH86UKLKE884i7%2Bczcwm%2BNnwHXbNVRRRYAASAdb5zej345dyLDJeEz4rgpVNTo%2BVqwNq0ovtrIHByx%2BZrYOZRcuEzW%2FIaJgla5tq7vC9m4n92K84jRx0nvrKvLGTnfW3NjRN7FY1roBkf%2B6a72ufLxOQSQRg2pwsa3vrCcnZsIKmUWkYnvfmgTVU%2Bsr8SWbUKA9qL1S49ksg6zA9CeUA7zkSTKvAd58%2FmKlQPQz6prH2RIteSqtBsCAjf3Ar%2FRviTDNq%2BC%2BBjqkAdvrI%2FPjf9GIFVotJ0fOtKEvxKKGE%2FDcru8JmihjYgRAU4lZIgqUqibL8M8PJpH5ikxJ1uDLc5xxv122Ngdw7qFYpops7%2Bm9F2pudU1%2FOdVKSRvMi9kXzmZHDQAxkr6UMZ2TRUw0nKcbgx3igXjp2bfGACAiM%2FNz1bcN508rKJsTCHTXb8SxcpWISlbfQlmA3re%2BK9aLnolk2ss7bVHmYHCV4yvM&X-Amz-Signature=2ee6c41dd05e8231a2aaf15b80c536357cde26b685fddfb45fefa39a44713f78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2EOJEA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSzPYhVZYxh85rmm3fhAJM7GcrEtPveiayG8BdjRcKAIgGGxV9hjlmi5orB7PYPfc9AdDXGx%2FH9du8EeHFbDI28wq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDL1yrmnW%2B%2FsM06AfaircA70kdep9StjT3bSqaO%2FJk0ysSvrcOvNrFm0M4o2dlHX6CPrqIUViVR%2BbLo17eRHOeErmX%2FNLZMPGDCL1%2FCF5NoNdaFBN2yBPVV0jEbq61EIKAJ6GI04SH76GQpVgn9loS43PNuku0LG9hed7O%2B9BTiiJsFNwpTjmWA7KYjQXNQRrI7mj39fLDrmJhNZ0bweAh6%2Fm1AZGdTq9zbN56x5HRMDvqGJfG%2F0hCgUFrrfTpR3%2BKRIf1BEbtaMvVM7q8huvqD7SZCxGl3P8nHJVyZ%2FIt05AObAulY9mw3v5qa71kLwQ8xylZclZwx8MylH3ZNMeX1lfCQY1FRCB22Q56AUa3OKz19dReU5JuYKZX%2Fkmgju%2FuGKqfFHKr7GTRsC7esGSCyJYEKLY1deM3JcqycVaSNdyxPuVZqenFaheVywiNWBYZhVxd2I5IK4nwVKb7XTwMq9N96D2Qak2QP9f42ISVXTMjHkeXvwfN8WCWas%2FA%2FbWPXYXzkXtu72fJpHJO3PMnYbH8OpbReab1P%2BJ%2Fcv1VxyB43I2EttU7XRj2YiOf10ze38vZd8G%2BtKUA21Mo06QXJP0vP60Kpy9bKD8gSfS%2Fa3ntBmX5zSieI%2BKjr8XwC13PN8kTVGcABerS%2FAKMOSr4L4GOqUB82MLReWh%2FdVdfI4B5Dy5yffpne7Sv4rELew5j7nxLASN%2FYdhidhN3zNxCejQUxUqkeYZNEdJg5OjjW5zUzV4d5MD6QKntRW3L5%2BjZbcOMj7q4H9UBjmPcSzVPcgefRDiZxaHxJoLcxDPZfudyUS%2BjdI2UjKJ9uKDRJ%2B86Crx7q89vqyTNYZ%2FeWmHFWSvOQyWDL5deVIJG%2FROvk%2Bg%2BiwO4NpPrKG9&X-Amz-Signature=1ec1e7e7abf102dc51a88bda321879b80c161392dfd0fb24b43ed4f343771a93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBBP6KX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgDYu0y6jCVYpbIAEXKKKqFiSOC9jyNskl%2B1zV1QmQ8AiBfQKuMaFfGJrdmlXQCJCz8SZPcRvZti2YdGNTBMUSWsCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM78b1YvUcBz%2By%2FehSKtwDSTQnqvkux2JVU7qLcT%2FNikPf9%2BsRV%2B3K%2Fd6PjL8d4Cjrx6gNyrcY5Q56f6FE9ksu3K22wkrNDKkvKTdxzcJqdrKzQRRwbFbb4QUiLCGdPpbSveVXij0kvsdxNEA1NQkVCSYjcNwVDzBMp5AJT1sDN2ZUWjHUS4MIjoayfPSWezC6t%2BmFnIP979KUTYvO3eBWhywAkrRfOxONtbcG%2FyOcPYXQXg%2BkCyu6vttUtR8hjgHF%2BV03Ak%2Br41SWfy1RLiffmAgsOOT%2FSxeWrJ8vdJ3Ae12jCWewXP0TY8V65OdpBBYR9afHirhmF2p4Grp%2BXwi%2FGbXQZwoDuxsHGl3hcF0YY3mMEcgqoZpgqf1PBecyMY%2BUoPfnEs2YDPRRZ6jnuPfYbPcZ3TdZvg6seu%2BalX9nqIun%2FGEsbQ0H953zTp8tgbowSiXt33yVqXtdKzQAI5xDF%2BgEoUFhy3IWk61iTtnognx5VHvCm7VaLeRTaPaXIN10Dy9aWSeBQZAX0fd%2BI3q82bcUBGSjFEON7gbRKlo8TaWCef%2FsTmU8IOZ75wCM0AIOceQKgMCuu83tq76hYJ8EAL9P%2FIuvqgq%2Buin07l%2Be55XG1ozQ9mb%2BXoS6BdlMi3OwdBFBVgW0HyIFtt0w9KvgvgY6pgHeSjBSGqczdTW1bIv6ngxtzsfmI6itwuVpbsWXNMhmHZsc79MQCzqI63JHWnn7LLmjLjCYgUybasM7FXb0Jkcxo0XxvnYbgdkmQ4JmCTJalOgalENoZ43Sx2LjGRuQOJXq48SLI6PXklVbWEDghQxj755lhKwH9TbGZMY8sKecFwl2sNXfPJAk7%2FKLICEm8%2FPiKw0BGhKpx4c8aXgMsvaQq87wPWLW&X-Amz-Signature=2aa275c97e4d4db5234ce99ec60a04251259071ddf341ee5c4164b28afe84224&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ44YZHH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcnYWF5dT9kdQVXiPbAWSQtZvsv0hgzYrJn4RCzVU7zwIhAPoopySFPLm5cFtX%2Frnbtx6BJzXkVwzzPWZNF9I4OPLbKv8DCEYQABoMNjM3NDIzMTgzODA1IgyG6rUG3R2Qbaf8KOAq3AMEVCg6ttuUVW4oJqN9QhJ5kscHYjAIXfDLa28FsHec2TjvTBOZuLxOt9rI30lEY4rH1aRxaZK5wvNPsMCz3mDWKshaHKwxXpeNsWudRJIEfbTsP0ftXBUyCpr16ZD82wlxodVnDUvpR%2Fm6Hb0NOfzAjdIA47uTi2Wr6NAPtqmrQaDyCWNy0osgRPi2m1iPADNd74HMVjaagbOnpGSa7GNotoJFZOeKlxRsW4Q5YtwfNfZPC0I6aIv8jp3a6a3FmpaiKL04U2wnzF0zyidLLmYKox%2B5VwGWFYT3z%2FQABJGiHP8wVUGg7VQPSmRLIL%2F%2B42s3WepJ1G6sjqxVaR%2FfxFs879dGae1P2yYIajYD6VjU39X%2BS2vQ0fMCsAyMFMH86UKLKE884i7%2Bczcwm%2BNnwHXbNVRRRYAASAdb5zej345dyLDJeEz4rgpVNTo%2BVqwNq0ovtrIHByx%2BZrYOZRcuEzW%2FIaJgla5tq7vC9m4n92K84jRx0nvrKvLGTnfW3NjRN7FY1roBkf%2B6a72ufLxOQSQRg2pwsa3vrCcnZsIKmUWkYnvfmgTVU%2Bsr8SWbUKA9qL1S49ksg6zA9CeUA7zkSTKvAd58%2FmKlQPQz6prH2RIteSqtBsCAjf3Ar%2FRviTDNq%2BC%2BBjqkAdvrI%2FPjf9GIFVotJ0fOtKEvxKKGE%2FDcru8JmihjYgRAU4lZIgqUqibL8M8PJpH5ikxJ1uDLc5xxv122Ngdw7qFYpops7%2Bm9F2pudU1%2FOdVKSRvMi9kXzmZHDQAxkr6UMZ2TRUw0nKcbgx3igXjp2bfGACAiM%2FNz1bcN508rKJsTCHTXb8SxcpWISlbfQlmA3re%2BK9aLnolk2ss7bVHmYHCV4yvM&X-Amz-Signature=4b366b6b8824729bbb8c2838c2a700c1af1c1502f30a0d3c694d1ffbc9d38a79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
