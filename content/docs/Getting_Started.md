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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VDVKED6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDdIeBNh8O8hWvLh%2FzJsf3g9cMYV5opa2k7r7Qk%2FL8yxAiEA0C%2Bgv3AvSahUIhBPaVO57mkWll3jCtajhNCfQ7Oxaeoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI%2BNDOsH%2Bn9V1DnLrCrcAxDzABphtH2Zz2ZgxUIRVNQikuIuAlp6l4l4%2F71RYD18LFPIQSweqUuhB423Klmvh9Vv8g7Br%2BPNtxByxCSYMDVGuCFFKZSuXBT2g0XWUvsRkWru1SA0CQ1q4CCKbI8iWKIXd2txK6JPNRnVf%2B7zBnyLzdRzuEgINuhPLnAJdNkzRxeqkqesTjcW4qkEJVjIS0V3YQwqq1efap83DxnsRmRhsPuMCRKB6cP4yov2SsVMmDHRtdZSGBp%2Bu1w8fAqdjVtIRc0T2%2FJWTR0TeFB3BYSYvy%2F976mvd%2FBt43w0WuEn%2FjqTaK6Fh7cZ8%2FnZl8HwxdCEaedIQ%2FeiZaqY8p2QKPFpXzTfH8s4I0hbs%2FIjxVGotjEBETFI%2F3xQj8RmkT%2BGOyhWZBQgGBv3ks3nlmS3UCPH3ds0k2tqjsDWZORSGr74kM9dVFoCopCDDyXxMdXxke%2BSCwq9d3gkk2%2B1mAgRwyo2TF6duZhUYAV18OcJk5ws9R8OmuKbZ5JQva0InkX%2BKt6De1tSs2aaaH9hS2C6ZIYmJPCWwaFfk%2BISokfY6KckWlMshQJ%2FZJ%2Bmi98BUGw9YLsYtpafR%2BdNAHfoPowkYqHsD9cAteMkbznX9P8p6OW8noPL%2FpuoB8m%2BP1oEMJDSgr4GOqUBjSzdtTVOBJu4Ps9ZK1P0qASG48cEH62x%2BZ4p00DPI8vauxUJ6Qr3ICFS93K%2BKlmpMzWxprJI9jEXw81AZKBvhuFI42qlWpzWg8hYftWmimPxoXBMs%2FfMfHIYA6onK9sfn1Jye4J5V0tdjnSL9gDogv1b8WqEnr1rZ6ccZrA873hDrgNuyZ2WHI%2BUzE1cvFADjSSqNGjFskktueTNG%2FF1kmv1jP5z&X-Amz-Signature=07afdbb083eac96d34c31e9d63f9178d6dc15bba714ec0396780f67caced2883&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VDVKED6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDdIeBNh8O8hWvLh%2FzJsf3g9cMYV5opa2k7r7Qk%2FL8yxAiEA0C%2Bgv3AvSahUIhBPaVO57mkWll3jCtajhNCfQ7Oxaeoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI%2BNDOsH%2Bn9V1DnLrCrcAxDzABphtH2Zz2ZgxUIRVNQikuIuAlp6l4l4%2F71RYD18LFPIQSweqUuhB423Klmvh9Vv8g7Br%2BPNtxByxCSYMDVGuCFFKZSuXBT2g0XWUvsRkWru1SA0CQ1q4CCKbI8iWKIXd2txK6JPNRnVf%2B7zBnyLzdRzuEgINuhPLnAJdNkzRxeqkqesTjcW4qkEJVjIS0V3YQwqq1efap83DxnsRmRhsPuMCRKB6cP4yov2SsVMmDHRtdZSGBp%2Bu1w8fAqdjVtIRc0T2%2FJWTR0TeFB3BYSYvy%2F976mvd%2FBt43w0WuEn%2FjqTaK6Fh7cZ8%2FnZl8HwxdCEaedIQ%2FeiZaqY8p2QKPFpXzTfH8s4I0hbs%2FIjxVGotjEBETFI%2F3xQj8RmkT%2BGOyhWZBQgGBv3ks3nlmS3UCPH3ds0k2tqjsDWZORSGr74kM9dVFoCopCDDyXxMdXxke%2BSCwq9d3gkk2%2B1mAgRwyo2TF6duZhUYAV18OcJk5ws9R8OmuKbZ5JQva0InkX%2BKt6De1tSs2aaaH9hS2C6ZIYmJPCWwaFfk%2BISokfY6KckWlMshQJ%2FZJ%2Bmi98BUGw9YLsYtpafR%2BdNAHfoPowkYqHsD9cAteMkbznX9P8p6OW8noPL%2FpuoB8m%2BP1oEMJDSgr4GOqUBjSzdtTVOBJu4Ps9ZK1P0qASG48cEH62x%2BZ4p00DPI8vauxUJ6Qr3ICFS93K%2BKlmpMzWxprJI9jEXw81AZKBvhuFI42qlWpzWg8hYftWmimPxoXBMs%2FfMfHIYA6onK9sfn1Jye4J5V0tdjnSL9gDogv1b8WqEnr1rZ6ccZrA873hDrgNuyZ2WHI%2BUzE1cvFADjSSqNGjFskktueTNG%2FF1kmv1jP5z&X-Amz-Signature=adfcad2647440faa7d3a75adf3564269f43427830b8afb5e22ff70d0c3e06365&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUGKEHU7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2LwJd2G%2BW2MHUm0Z5NAkB3sHuzMfg5bXgEPNy0Z51CQIhALQD1ucMk6unJ9dPALJhBIvhWQNVszMvWo94LinsMlIHKv8DCHsQABoMNjM3NDIzMTgzODA1IgyyxQmk%2FCmQOJmOoaYq3AOQQCcSvp0Xq%2F40wmaaTQYHm6Kps7g7QynXyOIPnGQuWoBJtZw2ihKHGxJ2O6IIEzetBhr%2Fm0%2FGxE6UF4hCsLEgHucJ8M1jWoPF13Xkq%2FzQBJ69zTG3W%2BNa4PzHW3HmOTR5hO7Plkil%2FBhXKjNqZEz52LZGNfysX2KmsmheZGX4hsNzAL3j49gN007rXkb8k2ROldtSko8h5r80b1Gja1gEToBOa7P2%2BzANUOovSH2juAgPxoUWJnom20wXpymUQEJlZMWYOenAxhcGC9oIL%2FeW1RlWIYBFT4H4my0e%2B01HpeuV6qJHolu0yEB54f5nMGhkf9N3bJ7L6an8kbCC1Y95yWCtSNavFPxKxKmN3CxnI84m5%2F6Br5MtnyHgyqZEEFzmxhiHiCCq6RJbFKZWpvk4ZoRoUhafU7M71g2Iac1cIv1ra6H%2FzFw5cdvlzi8og1EX2izvO4LlWs4F8UxiGqRd8sK9QaVGQqmNXfUhMo1mMY%2FRs3ukRRSB2LbTOv5BVGVDFD%2Fjv3V3PKkNDm24ZoWEPPq%2FBZEx7ttJu17UzYUSuwFRTnG5qUZFYQnPORzWWEbY6%2BgFHV3MGwZD0v2NmHqKlGH%2BTEmpLJqWbKBJ%2FWhN1Fp0ZKS6BINfIkK%2BPzC30oK%2BBjqkAcRM8OyixTRLoLD%2BG%2FE1luv9squKIMJGSZ7FXJUHkyQAEPmZRbOuSadzK%2Fo%2BPwoYqCuNRMZXB%2B4sPrx5eb6hpK57IZSmdK6Ka6IokIfG5KJUHTg0x65GotiViQxmZQQ%2Bubv5WLM70NKETcLyHlwiuJM6rkxPkRyB0i4rHTkUFq1czl3tQUYoYlSiPMCkPKzErYyP55Ys%2FY9zmiKSY3xYvgaXp7k8&X-Amz-Signature=b57cf4717da14871ff8c00e2939f2c79e009931cf3b8548fe9b6a2ab3b8a2c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCQENFE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIEArc9qEupTIBHEhuzKrJ41XMmS01aMnHW2SYo5SAgd%2BAiBluth9BX5S5HYp5cYA5hM8sUoqmuX5FD9V8lX6FE%2FUwSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMfE6OGsrZhBS5mB40KtwDWFgfnJbvP9glAaOZ0XdcrPa2r0578cABLutGk8OX78zpDD4j34d5JFOOjTh7hZX4zqvga9v3UiMSPpy3EAMVGgef0ESRrGJqcGuV0EhhmagTf2W8DhAQb%2BB3Z9bNStXXNyKRiVDo8869kzIMrcI9dPmLYpusEOKhXcNImUsuYLpSSowY7O29Rf65ay8fUfZv%2B0kKlpYCleGiGYVCLGrCJfA07djibg23xPVSoPapKr3xhZ86MJQExpEQA4Y7KxeBSPP2isciGRioxvH3Omfr8pf19uSjutcJCZ5HSDkJdT%2BHJU5EdaV1CIH%2FApjBi2EPjlJbioaU7mIvA9WmVW9ma3LrRaRyjbTtm92qahkTArMpTLHUS%2Fcoc8BQRAwV%2B2uLYWdMYRbhW0%2BiO5TFS7iOZGqcjOk3e39T1bbIeUtua6SePBOaXM3doJpJ%2Blrf2KgwFiZUc7seJ7AX3PHJKArjCdad%2BlIKQHgrr0AAJ8KKcze0UBOSiN5PN5m5uPbF5aidwqIWpdsCzseV76%2Fk%2F7ZX5YQPkIYM4JIauCDwgzu54ziswIECA%2B7VQXiKAUXgEPbBdtqk8pC3GpjaRJlVaw%2Fghp3VmBpUnTiRcFJK44efF2kXle9BnIGQUCMmJoEwttKCvgY6pgGwus8Gm9kUsLT3QQ5rpx0PQdJZQxEKDAJASlHwGsa29TWrnfRKsISnEVrtQv1Ki9yqkQteLwJCtviYmFhuqymsG%2Fd04BX%2FqoQzM4vozRqT0mZKX8a%2FyjZpFxrEKuVzWtYERLRHnj9o%2B3G3jFiVAvkV%2BOyWQTpM37FFNAZbtF6U4rxTCGHCOKAHaImaBLVlc2%2BlofdnWutacxlAQ1XVuhoGA0CqvXeU&X-Amz-Signature=5488a99236e59f8524e14f9e7b01cd7d778660656f4ec4599cf4c65a4a60cd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VDVKED6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDdIeBNh8O8hWvLh%2FzJsf3g9cMYV5opa2k7r7Qk%2FL8yxAiEA0C%2Bgv3AvSahUIhBPaVO57mkWll3jCtajhNCfQ7Oxaeoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI%2BNDOsH%2Bn9V1DnLrCrcAxDzABphtH2Zz2ZgxUIRVNQikuIuAlp6l4l4%2F71RYD18LFPIQSweqUuhB423Klmvh9Vv8g7Br%2BPNtxByxCSYMDVGuCFFKZSuXBT2g0XWUvsRkWru1SA0CQ1q4CCKbI8iWKIXd2txK6JPNRnVf%2B7zBnyLzdRzuEgINuhPLnAJdNkzRxeqkqesTjcW4qkEJVjIS0V3YQwqq1efap83DxnsRmRhsPuMCRKB6cP4yov2SsVMmDHRtdZSGBp%2Bu1w8fAqdjVtIRc0T2%2FJWTR0TeFB3BYSYvy%2F976mvd%2FBt43w0WuEn%2FjqTaK6Fh7cZ8%2FnZl8HwxdCEaedIQ%2FeiZaqY8p2QKPFpXzTfH8s4I0hbs%2FIjxVGotjEBETFI%2F3xQj8RmkT%2BGOyhWZBQgGBv3ks3nlmS3UCPH3ds0k2tqjsDWZORSGr74kM9dVFoCopCDDyXxMdXxke%2BSCwq9d3gkk2%2B1mAgRwyo2TF6duZhUYAV18OcJk5ws9R8OmuKbZ5JQva0InkX%2BKt6De1tSs2aaaH9hS2C6ZIYmJPCWwaFfk%2BISokfY6KckWlMshQJ%2FZJ%2Bmi98BUGw9YLsYtpafR%2BdNAHfoPowkYqHsD9cAteMkbznX9P8p6OW8noPL%2FpuoB8m%2BP1oEMJDSgr4GOqUBjSzdtTVOBJu4Ps9ZK1P0qASG48cEH62x%2BZ4p00DPI8vauxUJ6Qr3ICFS93K%2BKlmpMzWxprJI9jEXw81AZKBvhuFI42qlWpzWg8hYftWmimPxoXBMs%2FfMfHIYA6onK9sfn1Jye4J5V0tdjnSL9gDogv1b8WqEnr1rZ6ccZrA873hDrgNuyZ2WHI%2BUzE1cvFADjSSqNGjFskktueTNG%2FF1kmv1jP5z&X-Amz-Signature=5d13a564b4ab3fbff446c8f0ce33c5ba219a7eaeb2d829bec5dddf1fe931dff5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
