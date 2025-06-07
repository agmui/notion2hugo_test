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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXPNAH3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8qg0OkBtTgN9bpkFLXkln87mxfUricNAANPsYAqmPywIgU1RE5pPtlZZy9KcgpC747Gpl%2B1Ve5DNreydZ%2Bk9OXN8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNkRi0EeJ11I94KWlCrcA9RUA%2FB%2FDYS%2BPXC5BwF2xsuGO0HWgwW5EcBADMJneEfTQsGHhqjzxFLBNySKJgftIoTRemtcx3a4KqLRkAUrYk%2Fl37eHZGV%2BIrzPnoacSwrsUU5JEQhCjxLI3zgwl0q11X4ZRcYS%2FfK4zKqvlg%2BfJNo8QmdTtIBAVbAIHnpk7Tv84wB6XrCoBswlroTXVQdINjC9KnBm8wSLOd9KXEMo5gQu4AFCCxaqQy0f%2FwqYoIl%2BV8bMKHc2fYTDEiBG%2BvP0R5s5NP5zHqWxiQN1XnM0nZtc2OPxwztSStV929qphuSZJXb8HbMhHZDSqsvl1zlV6VR%2FDebl5XNbF9WdaYtIw1x%2FJKrqLnB%2FMt2z2OpSFISJSNm6KDSCvP2k9b80WNMpde7xDUEJ%2F%2BjpvQ0miy18asClBns4q79f1T4C3JGFJLYmjLSzDHCgldj6QCgkTtm5gcfhgRZ5QoRdYK4%2FQPx8tTVZNQDrD3f1CFZ%2FYXSv68BKbgfPQlweCGBnVVGmw%2FAhRbGkhsxCfF%2Bv2gjOmWg8dim6RBWa9NibfGOY6p24A9fzFdoVMufC2rO6%2BImLNC2O0RemMrBsVev57mjPLrokSzNjVox3HwAgYhKbqjeZE6xWALqn0n2ovZtlYyBuMPnAjsIGOqUBwNKCvBrJ1eGN28dgzBjQQQ5PVmchc9SxMkvxEYXWLmzXJGKKWsVtJ9qbXOA6PSSPrV2BmqnFWUy0e3PIHt030xOTmPfMLi1W2nINjijoI1fGIT5oxkSbCVRCyOlc2Gx88iP5KLhCi7O9b%2FRpDajczv8FUG5eVJEVUrJFrQ85unsCbtGT0bNXTYfFbT%2BlMInAqQ0lBCj4bNYXBxwNWy59aY8Y%2F9U3&X-Amz-Signature=0fd243d95d3083423e63607ef9b7a1f74faedf30e947efeb709fd9ed3298ed82&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXPNAH3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8qg0OkBtTgN9bpkFLXkln87mxfUricNAANPsYAqmPywIgU1RE5pPtlZZy9KcgpC747Gpl%2B1Ve5DNreydZ%2Bk9OXN8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNkRi0EeJ11I94KWlCrcA9RUA%2FB%2FDYS%2BPXC5BwF2xsuGO0HWgwW5EcBADMJneEfTQsGHhqjzxFLBNySKJgftIoTRemtcx3a4KqLRkAUrYk%2Fl37eHZGV%2BIrzPnoacSwrsUU5JEQhCjxLI3zgwl0q11X4ZRcYS%2FfK4zKqvlg%2BfJNo8QmdTtIBAVbAIHnpk7Tv84wB6XrCoBswlroTXVQdINjC9KnBm8wSLOd9KXEMo5gQu4AFCCxaqQy0f%2FwqYoIl%2BV8bMKHc2fYTDEiBG%2BvP0R5s5NP5zHqWxiQN1XnM0nZtc2OPxwztSStV929qphuSZJXb8HbMhHZDSqsvl1zlV6VR%2FDebl5XNbF9WdaYtIw1x%2FJKrqLnB%2FMt2z2OpSFISJSNm6KDSCvP2k9b80WNMpde7xDUEJ%2F%2BjpvQ0miy18asClBns4q79f1T4C3JGFJLYmjLSzDHCgldj6QCgkTtm5gcfhgRZ5QoRdYK4%2FQPx8tTVZNQDrD3f1CFZ%2FYXSv68BKbgfPQlweCGBnVVGmw%2FAhRbGkhsxCfF%2Bv2gjOmWg8dim6RBWa9NibfGOY6p24A9fzFdoVMufC2rO6%2BImLNC2O0RemMrBsVev57mjPLrokSzNjVox3HwAgYhKbqjeZE6xWALqn0n2ovZtlYyBuMPnAjsIGOqUBwNKCvBrJ1eGN28dgzBjQQQ5PVmchc9SxMkvxEYXWLmzXJGKKWsVtJ9qbXOA6PSSPrV2BmqnFWUy0e3PIHt030xOTmPfMLi1W2nINjijoI1fGIT5oxkSbCVRCyOlc2Gx88iP5KLhCi7O9b%2FRpDajczv8FUG5eVJEVUrJFrQ85unsCbtGT0bNXTYfFbT%2BlMInAqQ0lBCj4bNYXBxwNWy59aY8Y%2F9U3&X-Amz-Signature=58e52957c221c5b6707c2eb5476693d74a8431725caac95b0c116ab6f98f64d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXPNAH3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8qg0OkBtTgN9bpkFLXkln87mxfUricNAANPsYAqmPywIgU1RE5pPtlZZy9KcgpC747Gpl%2B1Ve5DNreydZ%2Bk9OXN8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNkRi0EeJ11I94KWlCrcA9RUA%2FB%2FDYS%2BPXC5BwF2xsuGO0HWgwW5EcBADMJneEfTQsGHhqjzxFLBNySKJgftIoTRemtcx3a4KqLRkAUrYk%2Fl37eHZGV%2BIrzPnoacSwrsUU5JEQhCjxLI3zgwl0q11X4ZRcYS%2FfK4zKqvlg%2BfJNo8QmdTtIBAVbAIHnpk7Tv84wB6XrCoBswlroTXVQdINjC9KnBm8wSLOd9KXEMo5gQu4AFCCxaqQy0f%2FwqYoIl%2BV8bMKHc2fYTDEiBG%2BvP0R5s5NP5zHqWxiQN1XnM0nZtc2OPxwztSStV929qphuSZJXb8HbMhHZDSqsvl1zlV6VR%2FDebl5XNbF9WdaYtIw1x%2FJKrqLnB%2FMt2z2OpSFISJSNm6KDSCvP2k9b80WNMpde7xDUEJ%2F%2BjpvQ0miy18asClBns4q79f1T4C3JGFJLYmjLSzDHCgldj6QCgkTtm5gcfhgRZ5QoRdYK4%2FQPx8tTVZNQDrD3f1CFZ%2FYXSv68BKbgfPQlweCGBnVVGmw%2FAhRbGkhsxCfF%2Bv2gjOmWg8dim6RBWa9NibfGOY6p24A9fzFdoVMufC2rO6%2BImLNC2O0RemMrBsVev57mjPLrokSzNjVox3HwAgYhKbqjeZE6xWALqn0n2ovZtlYyBuMPnAjsIGOqUBwNKCvBrJ1eGN28dgzBjQQQ5PVmchc9SxMkvxEYXWLmzXJGKKWsVtJ9qbXOA6PSSPrV2BmqnFWUy0e3PIHt030xOTmPfMLi1W2nINjijoI1fGIT5oxkSbCVRCyOlc2Gx88iP5KLhCi7O9b%2FRpDajczv8FUG5eVJEVUrJFrQ85unsCbtGT0bNXTYfFbT%2BlMInAqQ0lBCj4bNYXBxwNWy59aY8Y%2F9U3&X-Amz-Signature=bef93c2270b68b793441cf1b3275fc5aba10c635a34004c196137c00c6189e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTF65AZI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe1RU6mPaSV53yQ2P0cZAvJeb9hOWvnpC5uIyrzp2NAAIgFJQw9IsEV70cj4Z1qcZi8%2Bqh5T87DNo8lJIJAv%2FkLZEq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBwVZbek0Ss1hcJUWCrcA4fZEJA%2F3Bv2sZOGnxUKKptcrlVRMcF783Zdi6hwDjO%2BKYEEVxokaN0%2BMApAzF992CCWElCMoHwiXxgQtOeWv648Kzy2WUl%2BIuV99tLpDZ5jaedSBt7N1MDJypHK4FSQI%2Fpi4vmMWxDRF8MP%2BA2%2BcEkKLR4k%2F%2B3XX%2FV4Wb7QnIE1qDqm7lQoSsrbxRGEl%2Br40%2B9mh6oitPF0Qh39gXrP6bNurCV3D0sGx1pjA3dZXgOGhJig1WKmCxmbj8%2Fx7WFAo9ix8rewMd2IqkNSd%2Bzjbt9XavcWTzZuPv4v8ypAnO79FMqwQwEVsrgm692dl5J2C6H9EgdGiUOqFw2yr3CLa%2BVbl9V1C9Ca7ahlpmLF2uISF%2BAXVuF%2B0717oy1yO1Wn1qEb3NL9IBBsATZZCLkABkSaj5kuO9cSBh1DyJokGwoPM%2BbCAqx1T%2BgDno4zQJVHOcHiBKdrughGxJVdacccRWV%2FYPGPlBVY2TW3bv%2F2k1JEM3JJItVKdR8O1RjrTNFmO9vSOcgqdN0Fx6%2BBro1uFOwDHQbSB9R4pCYp16cTEjyfR1%2BnrbphEqYXXsAqsWITR7BWzv4gtKOAVp2eclgrwY1x8UwKpo2K9uN8YqdIQxC%2FeJGnuvd6nHD7MzFCMMnAjsIGOqUBJtlC9XWDnarqCU1YFfnlLFWQOyoKq3WP06Go2CrMM5JmSMMJ7jtuU6tIGMbYdv4dZUBQeDTvJwjh4hccoQZxaQlttToUMfulVXZHlgfEE%2FPFAazQaE7EBc7eXvj1IeihMYmylOGOYzJrx0cSzzrP7Ywi4yTHiBNZKsaxko8muACZqh43nLFGhBZ9qLUFPqm1qwW63GK0rDskdBp45q0PnWtP%2BGFl&X-Amz-Signature=d7947cdf9b959333a90d582672c7c3f8d5891aa601ddbd16c47ad7a2f343b65b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z2ILPX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCieL0ce4N7B2rZqczmxm%2FAu4QLZnv0jBzOghcis7LQGQIgBKasCeJcMyV36Rg%2BsLPAe4er4SUrUad246pREqJcSwgq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDGvUYZwKQ6MQvk9DpircA5560u1pksKPGKgkwZPksh3pntSOhJLEMFx8cgbp0S60NCCu4w5BCrBw414t82KKYcZZk8DbyNs3hYEZxJ1lAT%2B7S2UPc36nOImVyCGH2cXeX47PUfH4k5%2FOozEDn8jxgWl6l%2BJHge5bIWLVn6v4Cq9dtt%2F6x38ACH85eoM9Xag4JwLgp0dMKtwNgD3Joew3oFlOQqlnVrEocQpW%2Bp%2F1dbrCn%2FUxBEx8ov9eZq5ixUz1p4a18p9SZ%2BuKtfzXROwCdk33CfV7FxzwaHrvr%2B5PQTEccOeEIqwsDATLpkTMyRZ6uqYuqmzTFcLUtjbnwPhoAdBiCjXH6DwLJ1M1I4Uv4ppMcLGiQrrwCMZnUDiqXhDP6nIgkB06JPfv2R%2BtaxSRUjPm3yvOfwpLB6iYFNDnA8RPiKwZSCQYovbHvFfTiB9fmV3Cpt8U89adpMc7bM92fpXI2iCsCwkyMd02lrqZe%2FeE%2BKlKNaSlgQFFDfeQaz%2FHxqKT8De0pxQ0rJAqA2l4xmag0i3sT4uy9RGkqdLDi50KEJQIDjyRq9hH7a8Z%2BHBn2ZPmsHeyErdjQ9PbuqxSagafGDsIq92q5CNOa8giNxhgkANSgkbnTTorYkpFS4nuoRLstSlAOyHt736jMOTAjsIGOqUBQmXRy2uz%2BWvisBnvkcKUE5UGTulwzdaESSnMmpZXbv7OS3AU80%2BybO%2FkmCeYB%2Bgfz6NAh1ybEOKHrgwnZD%2FdTvzFeIP6Zno6LKlu%2F0LhaV4Rn%2FISLCqJcE4ZNfXTWJ025rmC%2FL4nCJ1SARuwPUWjOi3ysJBd1F3pjRYz1ps5m29xZYkqz4DLoh8u7Okb6oIHjuHW%2B1TMV%2F0GzMOzAJ63yoY6roa4&X-Amz-Signature=dd88d00a508554eadfdeb55d50fe7308e13964db92963929d3cf7a5d54d8923f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAXPNAH3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8qg0OkBtTgN9bpkFLXkln87mxfUricNAANPsYAqmPywIgU1RE5pPtlZZy9KcgpC747Gpl%2B1Ve5DNreydZ%2Bk9OXN8q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNkRi0EeJ11I94KWlCrcA9RUA%2FB%2FDYS%2BPXC5BwF2xsuGO0HWgwW5EcBADMJneEfTQsGHhqjzxFLBNySKJgftIoTRemtcx3a4KqLRkAUrYk%2Fl37eHZGV%2BIrzPnoacSwrsUU5JEQhCjxLI3zgwl0q11X4ZRcYS%2FfK4zKqvlg%2BfJNo8QmdTtIBAVbAIHnpk7Tv84wB6XrCoBswlroTXVQdINjC9KnBm8wSLOd9KXEMo5gQu4AFCCxaqQy0f%2FwqYoIl%2BV8bMKHc2fYTDEiBG%2BvP0R5s5NP5zHqWxiQN1XnM0nZtc2OPxwztSStV929qphuSZJXb8HbMhHZDSqsvl1zlV6VR%2FDebl5XNbF9WdaYtIw1x%2FJKrqLnB%2FMt2z2OpSFISJSNm6KDSCvP2k9b80WNMpde7xDUEJ%2F%2BjpvQ0miy18asClBns4q79f1T4C3JGFJLYmjLSzDHCgldj6QCgkTtm5gcfhgRZ5QoRdYK4%2FQPx8tTVZNQDrD3f1CFZ%2FYXSv68BKbgfPQlweCGBnVVGmw%2FAhRbGkhsxCfF%2Bv2gjOmWg8dim6RBWa9NibfGOY6p24A9fzFdoVMufC2rO6%2BImLNC2O0RemMrBsVev57mjPLrokSzNjVox3HwAgYhKbqjeZE6xWALqn0n2ovZtlYyBuMPnAjsIGOqUBwNKCvBrJ1eGN28dgzBjQQQ5PVmchc9SxMkvxEYXWLmzXJGKKWsVtJ9qbXOA6PSSPrV2BmqnFWUy0e3PIHt030xOTmPfMLi1W2nINjijoI1fGIT5oxkSbCVRCyOlc2Gx88iP5KLhCi7O9b%2FRpDajczv8FUG5eVJEVUrJFrQ85unsCbtGT0bNXTYfFbT%2BlMInAqQ0lBCj4bNYXBxwNWy59aY8Y%2F9U3&X-Amz-Signature=ba3c2f3c0e9cd23529bdc5a3f5123dc34bb406c60bd0ff529e5384ae7d961618&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
