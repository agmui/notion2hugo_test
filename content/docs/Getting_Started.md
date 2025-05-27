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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPTMHX7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdkjvibC2UfMSzTbCFNKUKxgsfphfz4F0j525AX3Ol0QIhAP%2FrUw3KK51spQQSARLpVqKiGOOkKnjwPUt3KOC7xOPiKv8DCF0QABoMNjM3NDIzMTgzODA1Igzd52W%2F1V7m9gBC8iIq3AMRiBbcMeYFIaid6E537Q3H8g7kPMCI144%2FeveLIsM5Zs%2FAm7UFTbORVe53NWRg6g0qFL7lXBwJaA7QFCqSoE81TursNlpHAWAe9VWSxNiT1MHTpxktpSbxVaqq%2BvwSDPAmvObgmTO%2FHwGPHPo%2F27SddCIsteor0F5W89waB4FQQr%2FBZP%2BarNHmXIY%2FWPodVklJCAU%2B8oWChFGnxrQS6uTI17X%2B0Ky03KcZgqO38wEUtNZo%2B8B9%2BA1AkXMdOErUe0FBjOqCNcr0zzxtX36p9HP1W7nxFcBpUkCMbT4Oxd780Oc%2FF0%2FJwd0lXod5yPd0AMxNoKP1lJcXKzASFlyXOxE41Sh8ZuL6w0ttwlrsbqRae5cjvj%2FI8xDZaxbXTzhMsz1hu6ZtVsrLIyJUm33QKRapmtemfh6m2d%2F74pHrzn%2B3SNbmumUDqFOIWwMmnToSVL0BNq5jQfw9SpUXS5j2wCcG5YdRHNXeN1qtDx0lTjqjDqQsu1Z4bV8e1b%2FW6BOXeoHUrpgbkDGrByKcC45XsDr9Cdg%2FCBRAq6HC9IIFE%2FmENid%2FBLU%2BtWHSN6VbxwZCMXdpQi6X69d8e5FnfYinDCXOIiymIcfQgN7m5dYRwFEcIle1XcE5KgOv7NTkZDCB1NbBBjqkASauKgznrD2ftG7glyOnfPHYskPhmeNslVjaMsqe%2FK8edqCi%2Fr3XLyN4aS0c7ytkkDLzaSzfcIrJWxyL9D%2F5Sh9Yh3g4JQz72bIzTPvbFWeWHhKVfi8%2FH%2BSdI%2FcYEfK451TKMEjeK%2FPcuxe2ZvcrtjYfsqU0BB5NwMutjWvycD1wKMbnLFJ10V0Q1OBV1n9yU8xRNJTMi%2Buwu6m9QE8bhYp9zwIr&X-Amz-Signature=35d603158cf76b4df8c5b2a1c5df74d7e4778e62e16aa2c23528d93805c336d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPTMHX7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdkjvibC2UfMSzTbCFNKUKxgsfphfz4F0j525AX3Ol0QIhAP%2FrUw3KK51spQQSARLpVqKiGOOkKnjwPUt3KOC7xOPiKv8DCF0QABoMNjM3NDIzMTgzODA1Igzd52W%2F1V7m9gBC8iIq3AMRiBbcMeYFIaid6E537Q3H8g7kPMCI144%2FeveLIsM5Zs%2FAm7UFTbORVe53NWRg6g0qFL7lXBwJaA7QFCqSoE81TursNlpHAWAe9VWSxNiT1MHTpxktpSbxVaqq%2BvwSDPAmvObgmTO%2FHwGPHPo%2F27SddCIsteor0F5W89waB4FQQr%2FBZP%2BarNHmXIY%2FWPodVklJCAU%2B8oWChFGnxrQS6uTI17X%2B0Ky03KcZgqO38wEUtNZo%2B8B9%2BA1AkXMdOErUe0FBjOqCNcr0zzxtX36p9HP1W7nxFcBpUkCMbT4Oxd780Oc%2FF0%2FJwd0lXod5yPd0AMxNoKP1lJcXKzASFlyXOxE41Sh8ZuL6w0ttwlrsbqRae5cjvj%2FI8xDZaxbXTzhMsz1hu6ZtVsrLIyJUm33QKRapmtemfh6m2d%2F74pHrzn%2B3SNbmumUDqFOIWwMmnToSVL0BNq5jQfw9SpUXS5j2wCcG5YdRHNXeN1qtDx0lTjqjDqQsu1Z4bV8e1b%2FW6BOXeoHUrpgbkDGrByKcC45XsDr9Cdg%2FCBRAq6HC9IIFE%2FmENid%2FBLU%2BtWHSN6VbxwZCMXdpQi6X69d8e5FnfYinDCXOIiymIcfQgN7m5dYRwFEcIle1XcE5KgOv7NTkZDCB1NbBBjqkASauKgznrD2ftG7glyOnfPHYskPhmeNslVjaMsqe%2FK8edqCi%2Fr3XLyN4aS0c7ytkkDLzaSzfcIrJWxyL9D%2F5Sh9Yh3g4JQz72bIzTPvbFWeWHhKVfi8%2FH%2BSdI%2FcYEfK451TKMEjeK%2FPcuxe2ZvcrtjYfsqU0BB5NwMutjWvycD1wKMbnLFJ10V0Q1OBV1n9yU8xRNJTMi%2Buwu6m9QE8bhYp9zwIr&X-Amz-Signature=bf4e4c7f457eab7ef0d72f9ed9d0969751ee45b3c1476e0bf2bd705dcf884202&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPTMHX7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdkjvibC2UfMSzTbCFNKUKxgsfphfz4F0j525AX3Ol0QIhAP%2FrUw3KK51spQQSARLpVqKiGOOkKnjwPUt3KOC7xOPiKv8DCF0QABoMNjM3NDIzMTgzODA1Igzd52W%2F1V7m9gBC8iIq3AMRiBbcMeYFIaid6E537Q3H8g7kPMCI144%2FeveLIsM5Zs%2FAm7UFTbORVe53NWRg6g0qFL7lXBwJaA7QFCqSoE81TursNlpHAWAe9VWSxNiT1MHTpxktpSbxVaqq%2BvwSDPAmvObgmTO%2FHwGPHPo%2F27SddCIsteor0F5W89waB4FQQr%2FBZP%2BarNHmXIY%2FWPodVklJCAU%2B8oWChFGnxrQS6uTI17X%2B0Ky03KcZgqO38wEUtNZo%2B8B9%2BA1AkXMdOErUe0FBjOqCNcr0zzxtX36p9HP1W7nxFcBpUkCMbT4Oxd780Oc%2FF0%2FJwd0lXod5yPd0AMxNoKP1lJcXKzASFlyXOxE41Sh8ZuL6w0ttwlrsbqRae5cjvj%2FI8xDZaxbXTzhMsz1hu6ZtVsrLIyJUm33QKRapmtemfh6m2d%2F74pHrzn%2B3SNbmumUDqFOIWwMmnToSVL0BNq5jQfw9SpUXS5j2wCcG5YdRHNXeN1qtDx0lTjqjDqQsu1Z4bV8e1b%2FW6BOXeoHUrpgbkDGrByKcC45XsDr9Cdg%2FCBRAq6HC9IIFE%2FmENid%2FBLU%2BtWHSN6VbxwZCMXdpQi6X69d8e5FnfYinDCXOIiymIcfQgN7m5dYRwFEcIle1XcE5KgOv7NTkZDCB1NbBBjqkASauKgznrD2ftG7glyOnfPHYskPhmeNslVjaMsqe%2FK8edqCi%2Fr3XLyN4aS0c7ytkkDLzaSzfcIrJWxyL9D%2F5Sh9Yh3g4JQz72bIzTPvbFWeWHhKVfi8%2FH%2BSdI%2FcYEfK451TKMEjeK%2FPcuxe2ZvcrtjYfsqU0BB5NwMutjWvycD1wKMbnLFJ10V0Q1OBV1n9yU8xRNJTMi%2Buwu6m9QE8bhYp9zwIr&X-Amz-Signature=42ba2f1d00bd4b1dd47c5c75dec4b340a3eac5ed05f637dce321eba7f42f9df4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WVOF3CX%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtxLI%2BfApgQuiwUGSwirqOmwVxeCVjLLimKxleMRuHmAiEAx%2FdnmkZzDDzkWJh5J1gRanweHgPPVk4wxayxy9uV8mwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI%2Be9kDcD%2BjjCUreLSrcAzl5VLbWxhMtvjKnlRUa0t%2F1I33mNsR3nhh2DG1%2FSrsSongxgULrEsLLX3j%2FL1r71%2F9iQk9MmfuBCPX7Hk6lOiK%2BcrPZZByX7%2F6oNbBih3yI1PugN9QpqQXc3Tzy6vNqTOjnIo1knYSg5oFmGIzGIqtkOVpUqGGf7hBzcyQXxKFx16tiqWxySx%2BoMRDZ%2FMKcursScymH6Zc4vW5eMq7Jsvv1zPopJRBgfVtekS8KBekJV%2Fyw5ORaFkMnBYAS4t6lizR6WkdRC8HRl85QDTv9O57kXKmXm0dR4V8F1B8LX5nR07Q9k8c9LfRmZWHdvMmS281LHn8EksIUxbFlSPQdC7Iz1XMTnLJmrKEjzA7KqLmuW6xrrqEvBccsoLJrbq6XZ7UuFdzsAu2GCCouVDeXt1XS4xQ8XFE6CTIk5V3gFVkXxTxoiEv5%2FlBWRPI51PW54H9vbWGDsaNZa7ZdLvCyiUhK3m7NgnT%2FYj27r%2FRAmaqMqCIQQKk2dn8tx0VDQgxtZXHshEpB3UWJn7QwB7UVU9wBRIFo%2FTyJ4NrYeyfwQjrIdD9RiSj%2BNLTGEBRX8hFDOSvVpsUW1eabG9Nj9ZI0GID%2FvWoM0privLe1B8VwHiqsYg%2FJuSHrX6aL2yf0MOHU1sEGOqUBXtpKDBkBJWMV8X5VOsreJi4NGm06YqOmOs6S3RtF%2FlfAHZbs7shTHmf8FKaKtRghRZfn3SALpmeoUJbSWuaJn%2Fl1fZ%2BLDEN%2BQtHoYAFxiOHjs712TIDaHsNuV5uuIXgbDBHOAvkWvIVAxhcfq9T9gR%2BknTQz1GwD%2BKP9UltOWAtS6dCsEF5CIYtnYS3IdcgFVcMqdwLPk%2FEpKsdE3v23AEeUI36Z&X-Amz-Signature=8b3a235e6e81638dc16e8c2bc9c118720a38cf0cfad608b136a2fea19ade2aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JJKWAL3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGe5b9D7oxtvLrKlHS%2Fyh1R00emrVyaZeJgDYYApcdB0AiB5xPYbjvEkrxWkMYJVXOyda0AQnenCRl1kEDE3JCvUeCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMVAnT2qSPwhrDPdJ4KtwDNI8ENPan1Jaj7BlGPT1IQa5hxIXvEnCIdsd6f3EE5wTBhFQ66n%2BGUtryUXXEG2hOQuODq2qqHqAMd4Qqdsp5h3BxXHpZK5LjeCs3WP6oIRQ%2FAa%2FUQA7hc6MMwMtNqrzTfViyP%2Fw1fcuXLqc0aSjwnkcrQ6vthKogklgzpqVlvq1f4E02gjYs5KHBpNw4%2FU7yNvdL0lk%2FfZxTKmbi5Wp1XXa5rZJvOP1FbbVZUlL8SyovDoLrx3yAtFVuf6sZY1vdgKXZif8Pktc1V%2FBCPqm8BeijObaO7Q1Vbe6hkFN%2BEI8mX%2FwzwG6rph3dfWA%2FU4%2Fpt9BZSOW3ZxFFa8CZ5sWoTf8w6BiaOCntjs6U5XKRzp8wHW6B7BxPXR0%2F%2FBcxJo%2BL35p1w2%2FnKCnvMGDoxACJJTdRZM%2FGFD8rIkE8Y1%2F0w%2FmZaMJLtR4aHIHxDPdYAxsJmAJ8fbRVxBOhb%2F9GjnFP2jWg5uLyFu2K0wijfHmh2fGF3MFsx%2BVbZbQA1heYs8JLWe%2BP9LOrYL3kwt4nAynYDDJsKcr4S1NDmb7rBDjXw3CO%2BUo5HS6kYqXUUiiq%2B32s6Tud%2B7RfNZ89JCvqV6u8rUiXXkeCsf2YIXnkVUK8YbISgV28XacgLNCChyMwk9TWwQY6pgEOEorHpVb91qZYoi7pqs3ySZqhvSxIMHBYfWKX8a7EkeQdbhC3pc%2FT%2B3yWOO8RHZ0enZB%2BfRt4Kn1voTVvga%2BgNXaIHA6H2jjjBcDkLjjOe5fz6josee4Is8OTjOAvzKoIi6lootmJbl6d6Zi4aNjiN98dVVVeQvbYEmAc5y4TKd4q2I8vcbTpHsHZ3j4kfrItqcEjhe0Dx4UMY6sygtivNOpGIEIe&X-Amz-Signature=c72935f38b969307a8f0835a975d32bd1ed3d5a2aa26efb0f27f94cc84151526&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXPTMHX7%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdkjvibC2UfMSzTbCFNKUKxgsfphfz4F0j525AX3Ol0QIhAP%2FrUw3KK51spQQSARLpVqKiGOOkKnjwPUt3KOC7xOPiKv8DCF0QABoMNjM3NDIzMTgzODA1Igzd52W%2F1V7m9gBC8iIq3AMRiBbcMeYFIaid6E537Q3H8g7kPMCI144%2FeveLIsM5Zs%2FAm7UFTbORVe53NWRg6g0qFL7lXBwJaA7QFCqSoE81TursNlpHAWAe9VWSxNiT1MHTpxktpSbxVaqq%2BvwSDPAmvObgmTO%2FHwGPHPo%2F27SddCIsteor0F5W89waB4FQQr%2FBZP%2BarNHmXIY%2FWPodVklJCAU%2B8oWChFGnxrQS6uTI17X%2B0Ky03KcZgqO38wEUtNZo%2B8B9%2BA1AkXMdOErUe0FBjOqCNcr0zzxtX36p9HP1W7nxFcBpUkCMbT4Oxd780Oc%2FF0%2FJwd0lXod5yPd0AMxNoKP1lJcXKzASFlyXOxE41Sh8ZuL6w0ttwlrsbqRae5cjvj%2FI8xDZaxbXTzhMsz1hu6ZtVsrLIyJUm33QKRapmtemfh6m2d%2F74pHrzn%2B3SNbmumUDqFOIWwMmnToSVL0BNq5jQfw9SpUXS5j2wCcG5YdRHNXeN1qtDx0lTjqjDqQsu1Z4bV8e1b%2FW6BOXeoHUrpgbkDGrByKcC45XsDr9Cdg%2FCBRAq6HC9IIFE%2FmENid%2FBLU%2BtWHSN6VbxwZCMXdpQi6X69d8e5FnfYinDCXOIiymIcfQgN7m5dYRwFEcIle1XcE5KgOv7NTkZDCB1NbBBjqkASauKgznrD2ftG7glyOnfPHYskPhmeNslVjaMsqe%2FK8edqCi%2Fr3XLyN4aS0c7ytkkDLzaSzfcIrJWxyL9D%2F5Sh9Yh3g4JQz72bIzTPvbFWeWHhKVfi8%2FH%2BSdI%2FcYEfK451TKMEjeK%2FPcuxe2ZvcrtjYfsqU0BB5NwMutjWvycD1wKMbnLFJ10V0Q1OBV1n9yU8xRNJTMi%2Buwu6m9QE8bhYp9zwIr&X-Amz-Signature=213adc936f805490a51eb0125873651d1f93c85ada2352144c391fbba256920a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
