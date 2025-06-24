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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPYWXAB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIB93MLvqI17%2B5BUgxnP9Zm2kPa0BZFVIcMS23%2BwFmHucAiEA9OjGP7EBSjve%2BaS%2BDrnMSLR7v670Q4KjOGYiWUn9zcYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJkm3cSpOLExq40%2F8yrcA2NgPk1cyuTPkWMIrUOK%2FW%2ByOglOhzOLOQIuY7k76JQU6cv9gWAKXZvSTPNgy3GlwJ0OAiwgqL9uYNhPihtpk4IdYQ5N4nEG9vnCS4fywod1xphcgM6isd2SScOs0XSpWWV4S7c2IQN8lYAMYJSe7l770N27xpghY6m2ETTa7FUEw9UYIa4%2BukHt4%2FHr3SyrMnfBl9POsxM3dLUCXdq9Ww0ZyH%2Bg8FdNKs3Xxns2O%2FeBi5V5x9bEeY9q1zmXbghMFpr6u9awaJU2W3tZPHVGYHxoLk3fHAMlnxyhr6Zrs0wZ4qsB4cAUxRspnm5Wc79RyUfiyZcZYNy2PT9sSta53OR6UCnvfV4%2Baus5AEESVERslg62LV7vmxqd%2BaZAPp7mSlKge3nUeM8ZCyvHO87GB8O43c%2B%2BWqrQqBs8KoNkqftN89BvUa0gdXW1kcqQl9YBN0N26fkNhpOXCl2vmDwBExrB1up0PFwKCONp%2BuJ037Mw%2FPWOYWVWBx%2BYu5oZqB26TXZA%2F%2BamrsMgcRw1ur8K8GKl2zMog2uENDFPhgSyGPrac4e%2FnbdCRvTWaS%2FaPG7SQnPIshuYvGJBCzNmp7XWmW5B2Qn9sTfU4z7ktlKNVootxflzhhf9Wl%2F2vabqMO3E7MIGOqUBrBXNPKJUf1cHh5ZW%2F5%2BOefT9F35rqPaLIGsrld8J0fwT5eoPt32XmfUkvAkYfvSKRWJnZ1d%2BNwXAZoSI6PX%2FLQZlW8lrlbqmhbJ91DLGoTxngm6tMcaeW%2BcAFyn53tsZK1HIa1TEwqidiigKppWQoG8GUYyZKAED6xv3I%2Fce8rxgrJ6DYk4b6apuh73FDmSFaESo5LPYC40%2Fi9%2Ft5FiUxG2UlHPh&X-Amz-Signature=e73166d7f9459b82f17b1e3307ac16ee03b441c528e73f3f50725bf010ee2274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPYWXAB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIB93MLvqI17%2B5BUgxnP9Zm2kPa0BZFVIcMS23%2BwFmHucAiEA9OjGP7EBSjve%2BaS%2BDrnMSLR7v670Q4KjOGYiWUn9zcYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJkm3cSpOLExq40%2F8yrcA2NgPk1cyuTPkWMIrUOK%2FW%2ByOglOhzOLOQIuY7k76JQU6cv9gWAKXZvSTPNgy3GlwJ0OAiwgqL9uYNhPihtpk4IdYQ5N4nEG9vnCS4fywod1xphcgM6isd2SScOs0XSpWWV4S7c2IQN8lYAMYJSe7l770N27xpghY6m2ETTa7FUEw9UYIa4%2BukHt4%2FHr3SyrMnfBl9POsxM3dLUCXdq9Ww0ZyH%2Bg8FdNKs3Xxns2O%2FeBi5V5x9bEeY9q1zmXbghMFpr6u9awaJU2W3tZPHVGYHxoLk3fHAMlnxyhr6Zrs0wZ4qsB4cAUxRspnm5Wc79RyUfiyZcZYNy2PT9sSta53OR6UCnvfV4%2Baus5AEESVERslg62LV7vmxqd%2BaZAPp7mSlKge3nUeM8ZCyvHO87GB8O43c%2B%2BWqrQqBs8KoNkqftN89BvUa0gdXW1kcqQl9YBN0N26fkNhpOXCl2vmDwBExrB1up0PFwKCONp%2BuJ037Mw%2FPWOYWVWBx%2BYu5oZqB26TXZA%2F%2BamrsMgcRw1ur8K8GKl2zMog2uENDFPhgSyGPrac4e%2FnbdCRvTWaS%2FaPG7SQnPIshuYvGJBCzNmp7XWmW5B2Qn9sTfU4z7ktlKNVootxflzhhf9Wl%2F2vabqMO3E7MIGOqUBrBXNPKJUf1cHh5ZW%2F5%2BOefT9F35rqPaLIGsrld8J0fwT5eoPt32XmfUkvAkYfvSKRWJnZ1d%2BNwXAZoSI6PX%2FLQZlW8lrlbqmhbJ91DLGoTxngm6tMcaeW%2BcAFyn53tsZK1HIa1TEwqidiigKppWQoG8GUYyZKAED6xv3I%2Fce8rxgrJ6DYk4b6apuh73FDmSFaESo5LPYC40%2Fi9%2Ft5FiUxG2UlHPh&X-Amz-Signature=8831c6d13628582eaca7d0f7b7cefc4e81893e75891464870a22cdb39a9fa93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPYWXAB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIB93MLvqI17%2B5BUgxnP9Zm2kPa0BZFVIcMS23%2BwFmHucAiEA9OjGP7EBSjve%2BaS%2BDrnMSLR7v670Q4KjOGYiWUn9zcYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJkm3cSpOLExq40%2F8yrcA2NgPk1cyuTPkWMIrUOK%2FW%2ByOglOhzOLOQIuY7k76JQU6cv9gWAKXZvSTPNgy3GlwJ0OAiwgqL9uYNhPihtpk4IdYQ5N4nEG9vnCS4fywod1xphcgM6isd2SScOs0XSpWWV4S7c2IQN8lYAMYJSe7l770N27xpghY6m2ETTa7FUEw9UYIa4%2BukHt4%2FHr3SyrMnfBl9POsxM3dLUCXdq9Ww0ZyH%2Bg8FdNKs3Xxns2O%2FeBi5V5x9bEeY9q1zmXbghMFpr6u9awaJU2W3tZPHVGYHxoLk3fHAMlnxyhr6Zrs0wZ4qsB4cAUxRspnm5Wc79RyUfiyZcZYNy2PT9sSta53OR6UCnvfV4%2Baus5AEESVERslg62LV7vmxqd%2BaZAPp7mSlKge3nUeM8ZCyvHO87GB8O43c%2B%2BWqrQqBs8KoNkqftN89BvUa0gdXW1kcqQl9YBN0N26fkNhpOXCl2vmDwBExrB1up0PFwKCONp%2BuJ037Mw%2FPWOYWVWBx%2BYu5oZqB26TXZA%2F%2BamrsMgcRw1ur8K8GKl2zMog2uENDFPhgSyGPrac4e%2FnbdCRvTWaS%2FaPG7SQnPIshuYvGJBCzNmp7XWmW5B2Qn9sTfU4z7ktlKNVootxflzhhf9Wl%2F2vabqMO3E7MIGOqUBrBXNPKJUf1cHh5ZW%2F5%2BOefT9F35rqPaLIGsrld8J0fwT5eoPt32XmfUkvAkYfvSKRWJnZ1d%2BNwXAZoSI6PX%2FLQZlW8lrlbqmhbJ91DLGoTxngm6tMcaeW%2BcAFyn53tsZK1HIa1TEwqidiigKppWQoG8GUYyZKAED6xv3I%2Fce8rxgrJ6DYk4b6apuh73FDmSFaESo5LPYC40%2Fi9%2Ft5FiUxG2UlHPh&X-Amz-Signature=f748b64457272d4463968299667dff8e70b8f626af12e07e6cd75b23c9e7d60f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKTUYNOQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIGWJg9XxYzE%2F4gtGzQZEfZW2NynK20tVu1g19EcnfrJlAiEA9YIPSaGe%2BdeuP0rUKfwBGNFgun6kA%2Feyp5NLoP4RIGIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFtpdiUnTj%2FyHgiFfCrcA0jupJtJhSmsWkCpe2K71AF6hhx4q4XkQJgcD3dt8fgbK42TaxG%2F5U8sSdhZkuT26c6VcRC9vYIoTOj7EIUIuQJSsNo2iWiN5ejWtBFmtfQKIEHaJaZL%2FwT4wyoqpaTH0Wud7crAOVqRvKugj9%2FiEyYK6HGkFfaiI6KiuFUuZ3Yfzg486mBtJBLIIAYpDgWI0b0b7lfpJryg%2FeiYmkSUVKcIa7cMq%2FjP0Cp8jn7AZJd6RX873CN20Jb%2BzPQwe9KebMZLkut6kF9550%2BNzMNDxotCz5r7pqMSKzGtA95TpMdESe8WtX3LPHk2192E503g6daM4aBoIrzzFmrkhv7WlFD9Z4ubi3XPUa6SLWxK12YUQ2xSv7P8MsYb0JfydmfxUMjK8f7MXdKcxavvd8TkJSafipXB43YHqNSHAOVYq1uADa41WbpToqpeMuarlmorygkOE%2FEF4KFyNBZJFZlcb5vk3uZvzCy24u7azHLbKaMped%2FFhEJoKrucQxT9YJ4QHosQ1MzPSkPAnSEjm7AVJophX0RM7iA8D11k4fFeeOrxjdUp4nR4rEn0rTclS7RqqKqX7zBKRdQZgbYdSZrorT9zmWdD919CNxXxFtZlqfoKoSeGHqReba5wEI1bMIK57MIGOqUBcIZk8fhlyU1K%2FA%2BF5yQ96Qs9cimVyG%2B3knRuSEXK1LAYMk8L1D7HlMpBpYHkjaOYCN6dfsVP2Ftx2NMPIRNupjxEZKUD921oqkMMpyZxKvU%2FSdHbFRYQRq3vgxJ1xTcRfXSLPDrUN7m1bIB5l9Ln40mPKx%2BcVM2WyIoupeuuijsTdo4NVH3FWHtH63FupLHE1jROd5s0P0pspCXQEpmwPS9nAV9z&X-Amz-Signature=ae3a6cf0dd7b6fe93cc2d0cebe5a4c0e639fc8b336d40a2756101b0955edab21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XU6JMZK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIEfOXT1f%2FKbD3xt401ac8phJxaY3UDW4wPDW4S2P%2B%2F%2BpAiBvbU5hADhHZAbHTQBxsBjBDbPtrDZNFjekF72dFt2TDSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMI9gcQZxMVEaKpdmKKtwDSykEuUxF6yl34HrCYY0IvBGAwO1QWMbZgQRa%2FfjYi8yAdfNwioXJ%2Fib3GzJFQmNOcfR0L%2BAVYyDNeVNLMmOg1TuoPvi6hxrwIFTGeg7Uj%2FTBGjKYmOJJoLvkNCxbh6wDNyOSfYDsa%2FLr40QyuCG3oe3DQ1gk9ZckGsHxOvolSi3g2OKo9P23wRFp%2FXlKdcj7t9m5gfI%2FQw4%2FQ%2FrxxmZMOqOXHDRnW9PV55IdD8elKz2oiPt39ult6Ie4Tosxt9iolRbGC3IysKyxpYxpq2IP2pJNBRNN2Jtk3EXTNgLHuAFWG410cfxR6NfOy2h2AS9oLuFAxZ9V1CFosjo7Zz77tU5nx7o4Byk2MCrwvmTOOSUK2WWLWGFA%2BrtUmezXZuaHnbxjOgmQXlBaLjUcoeOL0%2FdY4YdeB0GZ7yOfbJEDs%2BrQ9ovcjnzDgd3R9n3xo9mx%2BhqIEC2uPP6oJTaviLgDG7Mi9wK9zJGMl6hKIxYEYnY2aAbhNRgMKYZx0sAjlvACQqUwa8SaR6GI4ev325naFHUDMTnYFqT0UZ9pjHXvIve0mGB9qFw%2FPZxAT8F%2B7OJuj9XYgbg4Qe%2BjYpMzZnXnh4y3HJrUjnsAyTN%2FAoC7gBinqn7f%2BwiPpUCzirIws8XswgY6pgHgWFzxZeMaimqAWi6y0KzZmsLeOZQtZdiSCn%2BhtWZvaQbPFQ2xE4s61vFrm62jIlpaxYdCQZNr0VZn2%2BWiUnjH3luHrz9qswe5P%2F8xpxrtpo24jtx94LIfHgEBb8H1xtT%2FZjif%2FZPfTZBC%2BjME5wpUzEO4n9sG5hND%2BfN9H6ZlMLMpyx0edQwg0k4sXjhdNk4Q6ozrzOeNTBZX1QggbqNhSxA3JzDC&X-Amz-Signature=eaa89fc58427ad9ccfcabf3a30ab10378ac1c6105c927a053836cb07994bd7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHPYWXAB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIB93MLvqI17%2B5BUgxnP9Zm2kPa0BZFVIcMS23%2BwFmHucAiEA9OjGP7EBSjve%2BaS%2BDrnMSLR7v670Q4KjOGYiWUn9zcYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJkm3cSpOLExq40%2F8yrcA2NgPk1cyuTPkWMIrUOK%2FW%2ByOglOhzOLOQIuY7k76JQU6cv9gWAKXZvSTPNgy3GlwJ0OAiwgqL9uYNhPihtpk4IdYQ5N4nEG9vnCS4fywod1xphcgM6isd2SScOs0XSpWWV4S7c2IQN8lYAMYJSe7l770N27xpghY6m2ETTa7FUEw9UYIa4%2BukHt4%2FHr3SyrMnfBl9POsxM3dLUCXdq9Ww0ZyH%2Bg8FdNKs3Xxns2O%2FeBi5V5x9bEeY9q1zmXbghMFpr6u9awaJU2W3tZPHVGYHxoLk3fHAMlnxyhr6Zrs0wZ4qsB4cAUxRspnm5Wc79RyUfiyZcZYNy2PT9sSta53OR6UCnvfV4%2Baus5AEESVERslg62LV7vmxqd%2BaZAPp7mSlKge3nUeM8ZCyvHO87GB8O43c%2B%2BWqrQqBs8KoNkqftN89BvUa0gdXW1kcqQl9YBN0N26fkNhpOXCl2vmDwBExrB1up0PFwKCONp%2BuJ037Mw%2FPWOYWVWBx%2BYu5oZqB26TXZA%2F%2BamrsMgcRw1ur8K8GKl2zMog2uENDFPhgSyGPrac4e%2FnbdCRvTWaS%2FaPG7SQnPIshuYvGJBCzNmp7XWmW5B2Qn9sTfU4z7ktlKNVootxflzhhf9Wl%2F2vabqMO3E7MIGOqUBrBXNPKJUf1cHh5ZW%2F5%2BOefT9F35rqPaLIGsrld8J0fwT5eoPt32XmfUkvAkYfvSKRWJnZ1d%2BNwXAZoSI6PX%2FLQZlW8lrlbqmhbJ91DLGoTxngm6tMcaeW%2BcAFyn53tsZK1HIa1TEwqidiigKppWQoG8GUYyZKAED6xv3I%2Fce8rxgrJ6DYk4b6apuh73FDmSFaESo5LPYC40%2Fi9%2Ft5FiUxG2UlHPh&X-Amz-Signature=8379b39d40e18a347c70447a98de85bca1beac3ef09641087b59cfc09e09777e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
