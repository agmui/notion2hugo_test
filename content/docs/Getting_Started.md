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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SBNELS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGtOTB3vPUio0halsLnI5uAXF0JAS%2FyIOOuRS7VlFYAIgHTuNpUVhAbF437IA7SAY3vZUaTDjxbGLJO6nNCSRmoQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH9u6iL7EcvDKDyYwyrcA%2FvHAFA%2BpMetCQiK1N2PMz0LlB6RzQzq39qanqx96JOfetoRUJyHDoRIV7EWIQYQ668CMwyj299QvlASNwx7Hu6%2FJYUfMqPNNIm6rVhrHse8J5nHneIjZNPD4h3wdR8M51l1dgeufJp8T3mSGIxMhQsGKZR8dLGowSFr1HfFs8VTPjLl1Bgi9AcURH%2FZ4y%2B5VvNPYJQjajtWWMtAirm%2B%2Bjk7XGTSmTute6HbPEwo8O0oCt%2BEsOk1xlWVXwI2efi3guz%2FB1m3uaFon0oyUpMPxnP1hK93B%2F%2B90virYAhnvYsLUnFsfEj4ZPLa0oojJIgvuogz7fcKJxE78R3k18lQ207LXdFZL1VDgmJPXlqHc2BLewUnA%2FiEIxIfrDQDMWsSIE7T%2B1pdxnUBJUjlUwNdLOSbIY5uDtu4YBu0Z5V0BAnkiV9D2iVP0dEIMPyUtDMFvjEVwwK8T7C5%2BX4MpZ%2Fb0ZSdOppIcbSrAuQQu4IMjvi6V9JGjZoLPSSCZ26i547vGKIZ2JSpoJ%2B6K0ViVKRkaZ53RkQPUW4jyMGiS2WuoK5b4NoZt75Hbiqd8yFFafiWRuZp%2BkeQPUk2VfV%2B6Xl%2F9hQnV7nIns5lf6nV2Z2tEI4R8z7h4GONNSCjjZl%2FMN%2FPncEGOqUBBXfFeWRYBqR119J35krkXZxccT9eQJO1Ig0J6pHNxuASezsGGSJ%2FZI2CKFTBuSc9xMySMPxhG%2BmEh%2FxPErEQgtfdlBXp9FvZWsa7E53P5yJt%2B2iVUFOMkZO9D%2FaRWRbdI2ST8b0PfQmfgUEgZ5On6cxP14IHAq40HEDbCw%2FJm8lJB3CedwEpbhusqMjJbccJzwUyZ8OlzfePuCPIsGBeQu0U2euK&X-Amz-Signature=ea912b76d8b0d066f4a797de4f24f30cc9be5d9ed9c8b3a18d4821a6b3c7c06f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SBNELS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGtOTB3vPUio0halsLnI5uAXF0JAS%2FyIOOuRS7VlFYAIgHTuNpUVhAbF437IA7SAY3vZUaTDjxbGLJO6nNCSRmoQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH9u6iL7EcvDKDyYwyrcA%2FvHAFA%2BpMetCQiK1N2PMz0LlB6RzQzq39qanqx96JOfetoRUJyHDoRIV7EWIQYQ668CMwyj299QvlASNwx7Hu6%2FJYUfMqPNNIm6rVhrHse8J5nHneIjZNPD4h3wdR8M51l1dgeufJp8T3mSGIxMhQsGKZR8dLGowSFr1HfFs8VTPjLl1Bgi9AcURH%2FZ4y%2B5VvNPYJQjajtWWMtAirm%2B%2Bjk7XGTSmTute6HbPEwo8O0oCt%2BEsOk1xlWVXwI2efi3guz%2FB1m3uaFon0oyUpMPxnP1hK93B%2F%2B90virYAhnvYsLUnFsfEj4ZPLa0oojJIgvuogz7fcKJxE78R3k18lQ207LXdFZL1VDgmJPXlqHc2BLewUnA%2FiEIxIfrDQDMWsSIE7T%2B1pdxnUBJUjlUwNdLOSbIY5uDtu4YBu0Z5V0BAnkiV9D2iVP0dEIMPyUtDMFvjEVwwK8T7C5%2BX4MpZ%2Fb0ZSdOppIcbSrAuQQu4IMjvi6V9JGjZoLPSSCZ26i547vGKIZ2JSpoJ%2B6K0ViVKRkaZ53RkQPUW4jyMGiS2WuoK5b4NoZt75Hbiqd8yFFafiWRuZp%2BkeQPUk2VfV%2B6Xl%2F9hQnV7nIns5lf6nV2Z2tEI4R8z7h4GONNSCjjZl%2FMN%2FPncEGOqUBBXfFeWRYBqR119J35krkXZxccT9eQJO1Ig0J6pHNxuASezsGGSJ%2FZI2CKFTBuSc9xMySMPxhG%2BmEh%2FxPErEQgtfdlBXp9FvZWsa7E53P5yJt%2B2iVUFOMkZO9D%2FaRWRbdI2ST8b0PfQmfgUEgZ5On6cxP14IHAq40HEDbCw%2FJm8lJB3CedwEpbhusqMjJbccJzwUyZ8OlzfePuCPIsGBeQu0U2euK&X-Amz-Signature=b2966abeadf4fbfcc02fd7588be11326fe884846c1717e74727eed30e12436a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SBNELS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGtOTB3vPUio0halsLnI5uAXF0JAS%2FyIOOuRS7VlFYAIgHTuNpUVhAbF437IA7SAY3vZUaTDjxbGLJO6nNCSRmoQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH9u6iL7EcvDKDyYwyrcA%2FvHAFA%2BpMetCQiK1N2PMz0LlB6RzQzq39qanqx96JOfetoRUJyHDoRIV7EWIQYQ668CMwyj299QvlASNwx7Hu6%2FJYUfMqPNNIm6rVhrHse8J5nHneIjZNPD4h3wdR8M51l1dgeufJp8T3mSGIxMhQsGKZR8dLGowSFr1HfFs8VTPjLl1Bgi9AcURH%2FZ4y%2B5VvNPYJQjajtWWMtAirm%2B%2Bjk7XGTSmTute6HbPEwo8O0oCt%2BEsOk1xlWVXwI2efi3guz%2FB1m3uaFon0oyUpMPxnP1hK93B%2F%2B90virYAhnvYsLUnFsfEj4ZPLa0oojJIgvuogz7fcKJxE78R3k18lQ207LXdFZL1VDgmJPXlqHc2BLewUnA%2FiEIxIfrDQDMWsSIE7T%2B1pdxnUBJUjlUwNdLOSbIY5uDtu4YBu0Z5V0BAnkiV9D2iVP0dEIMPyUtDMFvjEVwwK8T7C5%2BX4MpZ%2Fb0ZSdOppIcbSrAuQQu4IMjvi6V9JGjZoLPSSCZ26i547vGKIZ2JSpoJ%2B6K0ViVKRkaZ53RkQPUW4jyMGiS2WuoK5b4NoZt75Hbiqd8yFFafiWRuZp%2BkeQPUk2VfV%2B6Xl%2F9hQnV7nIns5lf6nV2Z2tEI4R8z7h4GONNSCjjZl%2FMN%2FPncEGOqUBBXfFeWRYBqR119J35krkXZxccT9eQJO1Ig0J6pHNxuASezsGGSJ%2FZI2CKFTBuSc9xMySMPxhG%2BmEh%2FxPErEQgtfdlBXp9FvZWsa7E53P5yJt%2B2iVUFOMkZO9D%2FaRWRbdI2ST8b0PfQmfgUEgZ5On6cxP14IHAq40HEDbCw%2FJm8lJB3CedwEpbhusqMjJbccJzwUyZ8OlzfePuCPIsGBeQu0U2euK&X-Amz-Signature=f95f20b84d625d09c378e3d48d5ec28fb6aa2817aa30fbb8354fa2e206b0ebf0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEDAAND%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRyLNsgd9m%2FKshYzhHR0hw42r2xUufaVjNmYIfsI5J8AiEAzd5O73ttxGy%2BNVMTsZeNSxvCkjN%2FEj6%2FnF3z4R%2BY5mAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGyzZFEzya09vA1BlSrcA04zRe8XgTIbUyP8C2Z4ZgCxOThAxnT8ttc%2B67UYrkoIyQkLkpZs5AGXT2Dfs6HCkpYhdSBhH6SSZrBAY38y7NTMQdpd8pLJS6SRLBNmCsifdtMuJLjPO5ej5xVOOlq3W5ZIHzOaLMOKFu0mET%2BINxdhcH4s1FgOb3%2F77HXq%2B1CDh2m4OepMuW1S7n54hT8QLm79ByfGv%2F0EqVOoEH0knIwlubIRDQbd3hWp%2FtBeC992LA7KXhU3Sk8AhA3UxJOrStVCUSGQvJlbui3d%2Fi0r4qWMTv%2B0lWPK4BnXPRYouNK9drCQwry%2FUGuMc7hPitOUrXPb6dK8yG1fwX2Epyh7jBgikz%2BBnc5QZpFfRXtro45atrrLxQCfrg8fTiGZRA0OITAVlOjyS%2F9X08Sqqj59A%2Bl3P3M7SrTKgiesAoZsqa7kLHrDkgXO9%2BVRVY7Dfs1D%2FjP7HdEU0JnMyKAFxnGkTyTmJHKHRa8sunGx4ay44YlyKbiLYbDBaB3kludDjrPS7P0gXgNsdy8tBzbbOcLmxhsgiZSceD5HdSQX8xym%2FiuvVyWyW%2BN54o2IwIBM1aUTLDGsPn4pQ2GWJPoChsmShSqfJqYaXRTQ5E75HLIXRKUbWqAEj69Yi%2BAGBBHAMMnQncEGOqUBxSrIzxWwjprjLDKABBmcVZIaeUN7Lw9UGl2Yr7pqaUOkg0WOPLqwKSiwnjGvCd%2FlMTJbyispdgyIMXtIplx%2B67GuC4Begku9Oo1iabjWXBzyIbNxKjIJKqsKMqwgUM9%2Bx3nCiwCB5Z9om%2FcDqY24GeiIqa2773rrNoHKJHkatZ1uNLpF52XR%2BBjpkT65W2wdf%2Byu0%2FZ5GruvOl9EhMA3DZiYcRj2&X-Amz-Signature=2d0107c7cbadeb9872139ffeab7c8ee82c10075d309e77b1b0687c53961395fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GSKNCG%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwHn8p6rl3%2BAnOG3UjaiWge3xkxYtqFAzsfFd%2BcletCwIhAPAinqWEZXHFSlc8tOlvB6uJrlo3bM6E9zUA6PuRCQs2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzHnHML09eaty1P9qAq3AN4Gl32lFDI%2BKCjFq1R9ukwMCzASvjhyom0PVxdMvcPP8RZtMKVXhWMiNqec84LoNQJTad6DXsKRoI4f0OyCYDuR6%2BaFS5G378xc4cYfp9oPmCk%2BNYNTjU31zozk9CPqzWz%2F0LtmIAUZ1Opd8uA4o%2BgND4MK457rwYJHsMTO44eA40hAO4XnsVC2Qn40iksyrzOYZzyoY7%2FJVYg9Uqm6OirSGdiD4S7H7FnM6qXfJzZrfwtLA0tUD1IfoHMnT0RsHIuXIsdBTEIh3P2KSegSlDBLwXfvqZgPYYhHPI%2FRhodelSqEfB6Ar030cv0qvrfka8yBKkezxINDPi42EGD7iU671oO67D8wESyZmeB8TFJ%2BjJXGbPrU6IBvs8kGlqzYwIUpsOzv3zY%2Fyw%2F0rBVtEVe3MWW6Hp5I2%2FKXtpjxVtS34qaxAuhSdMPQcC16hiQo5oudS8hqGy9OIY%2Bj9yRU7Wsf4bMfR5RFMMOmV7VTySNIgUHtQGvLFnJSzzyFdkd%2B7d%2FZAwVJZKpkSSVhG6yDGCtk3kVRLCuVRi7YNP2YsI5nE%2BBOirniEx9c4zsSkfO7kR2dVR5LBmZX8KHA8wd%2B4RsU%2FABlBy82IYbK29M0rDtwLhQ0bUS8AQh1o61xzDkz53BBjqkASIRZVhVR%2Fy%2Fd1mYtJ083qgW6dOVIRQuqeD4TG9jlwr2kwKB2dVYX7jmVfkK3gEnT8PAAVxKi0gmvoG%2B8bS1b8Q3Z8N8D%2B1WUOsOca2oaIokMv7TbKQeclRInc0Dtv%2Fv2mFyycjmymhv%2FPy%2BIHO40llJV6zbAc7uL4B5dsq5C7yS5H%2BKMTSHh96PFaFAV%2F%2FcSk7z0NEt0kj%2Fi02lq6YvmtWjNdRp&X-Amz-Signature=ff0316c4afdfb2aca9e4a5b6bf799208f824cf4f67068d9562b4ac5438a2d040&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SBNELS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMGtOTB3vPUio0halsLnI5uAXF0JAS%2FyIOOuRS7VlFYAIgHTuNpUVhAbF437IA7SAY3vZUaTDjxbGLJO6nNCSRmoQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDH9u6iL7EcvDKDyYwyrcA%2FvHAFA%2BpMetCQiK1N2PMz0LlB6RzQzq39qanqx96JOfetoRUJyHDoRIV7EWIQYQ668CMwyj299QvlASNwx7Hu6%2FJYUfMqPNNIm6rVhrHse8J5nHneIjZNPD4h3wdR8M51l1dgeufJp8T3mSGIxMhQsGKZR8dLGowSFr1HfFs8VTPjLl1Bgi9AcURH%2FZ4y%2B5VvNPYJQjajtWWMtAirm%2B%2Bjk7XGTSmTute6HbPEwo8O0oCt%2BEsOk1xlWVXwI2efi3guz%2FB1m3uaFon0oyUpMPxnP1hK93B%2F%2B90virYAhnvYsLUnFsfEj4ZPLa0oojJIgvuogz7fcKJxE78R3k18lQ207LXdFZL1VDgmJPXlqHc2BLewUnA%2FiEIxIfrDQDMWsSIE7T%2B1pdxnUBJUjlUwNdLOSbIY5uDtu4YBu0Z5V0BAnkiV9D2iVP0dEIMPyUtDMFvjEVwwK8T7C5%2BX4MpZ%2Fb0ZSdOppIcbSrAuQQu4IMjvi6V9JGjZoLPSSCZ26i547vGKIZ2JSpoJ%2B6K0ViVKRkaZ53RkQPUW4jyMGiS2WuoK5b4NoZt75Hbiqd8yFFafiWRuZp%2BkeQPUk2VfV%2B6Xl%2F9hQnV7nIns5lf6nV2Z2tEI4R8z7h4GONNSCjjZl%2FMN%2FPncEGOqUBBXfFeWRYBqR119J35krkXZxccT9eQJO1Ig0J6pHNxuASezsGGSJ%2FZI2CKFTBuSc9xMySMPxhG%2BmEh%2FxPErEQgtfdlBXp9FvZWsa7E53P5yJt%2B2iVUFOMkZO9D%2FaRWRbdI2ST8b0PfQmfgUEgZ5On6cxP14IHAq40HEDbCw%2FJm8lJB3CedwEpbhusqMjJbccJzwUyZ8OlzfePuCPIsGBeQu0U2euK&X-Amz-Signature=1adb0f2f18f949e5beb3f036a1a0262e521d85aae2e8756418ca499a91a6f1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
