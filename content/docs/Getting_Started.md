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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYOMVM3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCjlreOQ6TGezM9AEoa8Dqxqb8TyE3Xnd0Jjfnfb9Ui8QIgc5hLKcjLgcVQ3SBU%2FTPAJhqxTFN6G9z9NGiOeyYPj7AqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS7OhGqqgTbUhZGAircA%2Blhqiu4LYleWfdFwn4CpBxZFf8e419uQjwVd3JR80CViEN9yiW%2FSNdQ9nu5D7DduaaLUPqiME6ck9yG8kHM70f%2BQnxGEvS7yGPCOYmsRGhJR83BJqLM6iz%2BCCNkozY6JuoLNTjV2kj9WV10ew6HcKPDabL5iPFgB3k20N68f2FcF%2BYWyAhbE9GVeee1vxqCUjXLngoXGBLXxhcoWOAdaXbZlSZuuHY%2FKWg1i4jizJHt6tC2rSaoPIIZGjsJN7yk3gFppN5keETY2ToIEN1XCRDaQ8MmIFFYg6SZW36cQWpz4SWqoSvIcUZVWRNiE4hSj8DxtCE3eZesFPsTs7iI5i0xxtR5JwFETbQTX49oICzFjWBEMSWMxcnaWrE6bYWMMN9sObBqre59RSk3l04rnes8gUkEPVEgAb4K4tuUblNPyZ61jmDBr3A5jqGXzSzf0K6RufgJIrXvM5xGYyUxCvcXFyZrJFnpLw4xISPKMNjlFCHWGrNjqazbimzgUDMDpELJKHZVQLXyxZ50p65gWL0YlpiPabJiPZ2AUArWSBF3Wt8d%2F%2FdPlDkSmvPbWtHih2U5NW1CmapnqZbqUFlLpy9s5lOXbEiIaDpFOX43jckGD3YxlzxWrtu0v0twMIrr28AGOqUB4TotwD0GsQBLdB93rut%2FcdI2lyJOy9rIQE1wBAdJ589tieHtLJbPG4lsYkT5Zw3fG%2B%2FvspNDjBlJShH%2BfxoM3Guwc6B95CfzRtpEhRREaBXFyEHwOiUmWdzWrVxJ7TucqCK%2FU9CFeZCZG96L13hKAhzkiYYAuGmcUKTuDug1catZoLbeWXK5TG3jgEAqRzE6UyUeOMpJ0W0gG%2BIsWm%2BIafDVLxEO&X-Amz-Signature=9011bf06616bd633c1b72f8d0a4cf88d0f41c155d1447e4fa3181f53c24559ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYOMVM3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCjlreOQ6TGezM9AEoa8Dqxqb8TyE3Xnd0Jjfnfb9Ui8QIgc5hLKcjLgcVQ3SBU%2FTPAJhqxTFN6G9z9NGiOeyYPj7AqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS7OhGqqgTbUhZGAircA%2Blhqiu4LYleWfdFwn4CpBxZFf8e419uQjwVd3JR80CViEN9yiW%2FSNdQ9nu5D7DduaaLUPqiME6ck9yG8kHM70f%2BQnxGEvS7yGPCOYmsRGhJR83BJqLM6iz%2BCCNkozY6JuoLNTjV2kj9WV10ew6HcKPDabL5iPFgB3k20N68f2FcF%2BYWyAhbE9GVeee1vxqCUjXLngoXGBLXxhcoWOAdaXbZlSZuuHY%2FKWg1i4jizJHt6tC2rSaoPIIZGjsJN7yk3gFppN5keETY2ToIEN1XCRDaQ8MmIFFYg6SZW36cQWpz4SWqoSvIcUZVWRNiE4hSj8DxtCE3eZesFPsTs7iI5i0xxtR5JwFETbQTX49oICzFjWBEMSWMxcnaWrE6bYWMMN9sObBqre59RSk3l04rnes8gUkEPVEgAb4K4tuUblNPyZ61jmDBr3A5jqGXzSzf0K6RufgJIrXvM5xGYyUxCvcXFyZrJFnpLw4xISPKMNjlFCHWGrNjqazbimzgUDMDpELJKHZVQLXyxZ50p65gWL0YlpiPabJiPZ2AUArWSBF3Wt8d%2F%2FdPlDkSmvPbWtHih2U5NW1CmapnqZbqUFlLpy9s5lOXbEiIaDpFOX43jckGD3YxlzxWrtu0v0twMIrr28AGOqUB4TotwD0GsQBLdB93rut%2FcdI2lyJOy9rIQE1wBAdJ589tieHtLJbPG4lsYkT5Zw3fG%2B%2FvspNDjBlJShH%2BfxoM3Guwc6B95CfzRtpEhRREaBXFyEHwOiUmWdzWrVxJ7TucqCK%2FU9CFeZCZG96L13hKAhzkiYYAuGmcUKTuDug1catZoLbeWXK5TG3jgEAqRzE6UyUeOMpJ0W0gG%2BIsWm%2BIafDVLxEO&X-Amz-Signature=51e98af0bb942a7a182c0b96d8ad96c05115a5b2ac2064846011567e2cb85a74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYOMVM3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCjlreOQ6TGezM9AEoa8Dqxqb8TyE3Xnd0Jjfnfb9Ui8QIgc5hLKcjLgcVQ3SBU%2FTPAJhqxTFN6G9z9NGiOeyYPj7AqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS7OhGqqgTbUhZGAircA%2Blhqiu4LYleWfdFwn4CpBxZFf8e419uQjwVd3JR80CViEN9yiW%2FSNdQ9nu5D7DduaaLUPqiME6ck9yG8kHM70f%2BQnxGEvS7yGPCOYmsRGhJR83BJqLM6iz%2BCCNkozY6JuoLNTjV2kj9WV10ew6HcKPDabL5iPFgB3k20N68f2FcF%2BYWyAhbE9GVeee1vxqCUjXLngoXGBLXxhcoWOAdaXbZlSZuuHY%2FKWg1i4jizJHt6tC2rSaoPIIZGjsJN7yk3gFppN5keETY2ToIEN1XCRDaQ8MmIFFYg6SZW36cQWpz4SWqoSvIcUZVWRNiE4hSj8DxtCE3eZesFPsTs7iI5i0xxtR5JwFETbQTX49oICzFjWBEMSWMxcnaWrE6bYWMMN9sObBqre59RSk3l04rnes8gUkEPVEgAb4K4tuUblNPyZ61jmDBr3A5jqGXzSzf0K6RufgJIrXvM5xGYyUxCvcXFyZrJFnpLw4xISPKMNjlFCHWGrNjqazbimzgUDMDpELJKHZVQLXyxZ50p65gWL0YlpiPabJiPZ2AUArWSBF3Wt8d%2F%2FdPlDkSmvPbWtHih2U5NW1CmapnqZbqUFlLpy9s5lOXbEiIaDpFOX43jckGD3YxlzxWrtu0v0twMIrr28AGOqUB4TotwD0GsQBLdB93rut%2FcdI2lyJOy9rIQE1wBAdJ589tieHtLJbPG4lsYkT5Zw3fG%2B%2FvspNDjBlJShH%2BfxoM3Guwc6B95CfzRtpEhRREaBXFyEHwOiUmWdzWrVxJ7TucqCK%2FU9CFeZCZG96L13hKAhzkiYYAuGmcUKTuDug1catZoLbeWXK5TG3jgEAqRzE6UyUeOMpJ0W0gG%2BIsWm%2BIafDVLxEO&X-Amz-Signature=2167603c3d51b99306c44b6e3afe4a91c96788ddaed750d1ee7b98b2d8c54e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCFE6I5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIG%2F29P1vEgPRTVLJ0ZFsOaNfYUuVV6hjYm7oZlAGWIhoAiEAxjuHP5L6emEw3vdsrDFbqLKsXI4NQg4zAhgF8BtL6lYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJXaHsc66j6Bl8CWSyrcAxcS3Nqh3Jpi9GtABwNgzPmn7LVuJLUlx3xbKGSzKjXWVVQcH63gbu3L6cyfPEwKBlvwD1WhuU0C6xwXH7fLi2KS7EcV7UOMuKRzOJ21v%2F44JdrFbCNZOgsCPnX%2F%2B2E%2F0II2ga0KUSGIVGrxG5%2B%2FXussubevgtaJprGYF7Nq57%2BnbR2DXKMEyOWoPaJRCP2nxLJkMDM%2FuNOqwwO42YHq5bB%2Fv9TrrXwTcHVCuK62JkU1cYRN5h5jf2iZsHJT61CJ4IDjwTsZu3S4FzBViBT%2FRoe5rTjMlRTM6bcTRZ%2BdotHAKtyMKiZ9YJ1QAWRtsuYQHnKzUNimPh4YTT466IKMCxU6KByZ5reOB%2BsCdag28JYFPSd5uhB4bdt18wBBvVCRxkFMvdRZXuMvMEDNjs3JuZWqr1tmRa4XMj5h2LordSsTmfq7cecs8k8YS0ppEa8hRqEE3Zu6ZNOE00ZBiYnuH%2BW7yjU9pzImZUthmfkdipysSsq5TfO%2FDNZl461tsM8OGp5U6i%2BQGkKMbCXZN33sKPl3Fptkkc6y%2FvR%2BwBLpee8x2MZ9glYeoeb6UNYR59%2FSPqWlk4XWvjvv0G%2FgGh4A5k%2BrJBwUhz5d4TOszS4pUpP2WE4Woreqd8dEuyhYMIXx3MAGOqUB3OqUHsRR6OllgDFw8a3XzlQyuBYZlY%2BVeWIl7vAFnDXL75l5v5W3x4VETKJmipz2OeOJy6ExDXN3Z6ni3G%2F%2FmAFHxuVShL%2BXlYccLh8ssl2h35%2BjhTCMPnvkP6Xg2Q%2B0HiX%2F8aVdNUeEdpApxAsLkuvObcfEnlJVRHmBLFeYtUL0gG6%2BLr1VGIWahI%2Fo%2B6lod7hzaNQ3kHzSXTcblKawBPnVFwmx&X-Amz-Signature=00af1d36d13e905b7e6183e009b9e2165ff762c8d3076670a2604ec89df4bc01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ57CCZ4%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDDurUKKU82nlVVBhuvdgy2TxRi3hMyyku4E7yLml%2BPywIhAPCZpGXAdniUwQ9XDzEWlf%2BdTz%2Faocefs297GTlj93H%2BKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSI6MbUvxH5DjhMz4q3ANwHtTVGPYK9yk3BVo9mNLUEfFoH9VwcdVvNz1mBrcaL7R44om8bZOD3GLqJrhs89Cj%2BsdDVLwDgfVfYgIinjjNhMwAbn7YfH9RIgg%2BbfNewPBDx9v%2FEshtqdVBGm6fVo%2Bmie3hW2%2FUQSgZPTTU38nzJkZ92E7r7V1BZsBvluxEYKEO0Zz362xA4Y1iBuDpFSpEi9uWg%2F%2BHi1Zv0Kt%2FgkqYFATrHPy%2B%2Fm7C8kET2yxar4mL2slOS8Gu1hU40jStWhDF3EBoXyWlvDsMBQ2lwJWKV230n4vBd88n77snKmYrJvYeA8jt4d5clbyew%2BtcAPSgcBuj4o0yxt%2FQmVtmb96elAR4kTp9P5bqqq519WUjRudDRZMRopQ%2BrzelHImh1XHNGA7M%2BlS5CNW%2FExPEhsIEX%2FWa6pey5fYp4HYYrtzy%2Fm3XahNO5ZhH1FzOCQlVX%2BySmbKHJd%2B8ixlR5RoW%2F95mgW9apKtdethpvkO4nnnYjWM4Uho%2FEqcwV5TE15AjYqk7xuofhxKKwBDUuhFMSSasGdyW5Dv0JuBjiVUE0a3%2BBSaZy54z%2F0p%2FEcJZTY5xC44frrTyA5mJCvgEXIraVVP94OXa9ExvTp7OYF7MOV1qfgLxipNs5TPu3vNUQTDC69vABjqkAeW6x0DsYI0uXfSuh3jgAlH1exRX%2BIN0xB0VO0zpVBOhna8%2BWYViAiq%2BEsAVNFJe7SXz9eSq0PF%2BGp3h1uWs%2BNsMuCYxZtl0nQY46N96sczYAkDsXlHjLbHhNlyLZOXy8rQvGN97%2F0rgoTbxuVdqKYKXd5BCLCIe48hZ2Cml7PJiNVBJ1eY6OEV5B5vDBa40UMsWG0CY8UvvWDOl2kP%2BTK%2BFhRMU&X-Amz-Signature=f2ad03095cac583aee7ca7320a5f59e2c3580461271b310ddb7b07a4d8430b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCYOMVM3%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCjlreOQ6TGezM9AEoa8Dqxqb8TyE3Xnd0Jjfnfb9Ui8QIgc5hLKcjLgcVQ3SBU%2FTPAJhqxTFN6G9z9NGiOeyYPj7AqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPS7OhGqqgTbUhZGAircA%2Blhqiu4LYleWfdFwn4CpBxZFf8e419uQjwVd3JR80CViEN9yiW%2FSNdQ9nu5D7DduaaLUPqiME6ck9yG8kHM70f%2BQnxGEvS7yGPCOYmsRGhJR83BJqLM6iz%2BCCNkozY6JuoLNTjV2kj9WV10ew6HcKPDabL5iPFgB3k20N68f2FcF%2BYWyAhbE9GVeee1vxqCUjXLngoXGBLXxhcoWOAdaXbZlSZuuHY%2FKWg1i4jizJHt6tC2rSaoPIIZGjsJN7yk3gFppN5keETY2ToIEN1XCRDaQ8MmIFFYg6SZW36cQWpz4SWqoSvIcUZVWRNiE4hSj8DxtCE3eZesFPsTs7iI5i0xxtR5JwFETbQTX49oICzFjWBEMSWMxcnaWrE6bYWMMN9sObBqre59RSk3l04rnes8gUkEPVEgAb4K4tuUblNPyZ61jmDBr3A5jqGXzSzf0K6RufgJIrXvM5xGYyUxCvcXFyZrJFnpLw4xISPKMNjlFCHWGrNjqazbimzgUDMDpELJKHZVQLXyxZ50p65gWL0YlpiPabJiPZ2AUArWSBF3Wt8d%2F%2FdPlDkSmvPbWtHih2U5NW1CmapnqZbqUFlLpy9s5lOXbEiIaDpFOX43jckGD3YxlzxWrtu0v0twMIrr28AGOqUB4TotwD0GsQBLdB93rut%2FcdI2lyJOy9rIQE1wBAdJ589tieHtLJbPG4lsYkT5Zw3fG%2B%2FvspNDjBlJShH%2BfxoM3Guwc6B95CfzRtpEhRREaBXFyEHwOiUmWdzWrVxJ7TucqCK%2FU9CFeZCZG96L13hKAhzkiYYAuGmcUKTuDug1catZoLbeWXK5TG3jgEAqRzE6UyUeOMpJ0W0gG%2BIsWm%2BIafDVLxEO&X-Amz-Signature=13ae052eafb83aa5f5e1c3924a4e94ede7f1b4f752acb811e98d99afb8ef5fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
