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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7XUJ5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqzLxxIgnu%2BnxIsUqjDN3IqhNepL7KEae4DytjcPJjlAiEA8XvHzEVaXcJPtwFkP%2BM%2FLpcQltIZey5URFsxsrOtAcIqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdq%2F3q%2F0xgzj9TFuircA%2FR34eXJGQwpe4oLbNgrrE8fCfWWvFemCcFYmPnbyh%2F7EQ%2BY%2BznKMLgM%2BeelmpHXVyKhUQE%2FqSqB9GwJjRFs3Z7ZBw78GkKT8bvjQ3RnM7n3CvMPWt5Y6Rj7l1TlYfFDp1FUU31dK4CvPTOEB6D%2FKHg1ffTBh0gPj%2FGfyasmw8jCnz8JIWAtySpg3PikApC%2F5sDMUg7RUfU8OICMDQ9yu%2BK%2FC%2FIbkSxsNfTHHEuuH8tTNk%2Bb8OOwCTtZ8jggzVDwT3%2FEqZ1Co6aEvCbK0yBkYvnfob951QlbekuD7wm27Hqs0BZsjtF6BwUy3Diuil0Q4IQ1P43uhIWSCqzBSBsXv5JXIM2LzY%2F%2FbSbWTol42kwkDED%2FYw5DWNkOjWXlC2O1oL4R9dm0nQ1YsoSHA0ypcsB%2FnqsqdeJsfJ%2ByvHIvw5BtujVnAYhfqFw5ZX4sWWKSXjjwlY%2B5d2qpfW2tLW7a3AwAKoPNFa0mcM%2BpHlDlb2lTUNZk0Y%2FMXSNzKCRtpZv%2BL5PvJsligG5KqxmVbY7CT9LiWiejPLdH4b%2FwCISBfv%2BI4qSSv5WdA5yPWa%2FgswVJQyOd6cT%2BzreoxcgpVLGz3gUiDWBVbSG6F%2FuxKtg9f9dMH7FjXazSuGCADX5DMJ31sMQGOqUBvGj8WgKKA7EvJVXzXuq4zxXtBRM%2BcPbCJ%2FhFr2IvOzmG8F8nNjsc1F%2Fo0vO8SEvUG863B7hBmU2grs28b3P%2FC3vgBO1bvTN29ryn0zlsA2p9haKdGzS2F6Vbwj%2B107kcAxuyWnpIJozZGMIjr%2FaqfC0o5v1cqz1nUYpDdhhLMPhEwC52NnI18fubUu4GrdWk7njQbSj8mlaTfZJAqfk5U8q4Al0s&X-Amz-Signature=0bf64018c7bccbd36eca169cf07a7188bb06915188fd707e37f05fafd1915c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7XUJ5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqzLxxIgnu%2BnxIsUqjDN3IqhNepL7KEae4DytjcPJjlAiEA8XvHzEVaXcJPtwFkP%2BM%2FLpcQltIZey5URFsxsrOtAcIqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdq%2F3q%2F0xgzj9TFuircA%2FR34eXJGQwpe4oLbNgrrE8fCfWWvFemCcFYmPnbyh%2F7EQ%2BY%2BznKMLgM%2BeelmpHXVyKhUQE%2FqSqB9GwJjRFs3Z7ZBw78GkKT8bvjQ3RnM7n3CvMPWt5Y6Rj7l1TlYfFDp1FUU31dK4CvPTOEB6D%2FKHg1ffTBh0gPj%2FGfyasmw8jCnz8JIWAtySpg3PikApC%2F5sDMUg7RUfU8OICMDQ9yu%2BK%2FC%2FIbkSxsNfTHHEuuH8tTNk%2Bb8OOwCTtZ8jggzVDwT3%2FEqZ1Co6aEvCbK0yBkYvnfob951QlbekuD7wm27Hqs0BZsjtF6BwUy3Diuil0Q4IQ1P43uhIWSCqzBSBsXv5JXIM2LzY%2F%2FbSbWTol42kwkDED%2FYw5DWNkOjWXlC2O1oL4R9dm0nQ1YsoSHA0ypcsB%2FnqsqdeJsfJ%2ByvHIvw5BtujVnAYhfqFw5ZX4sWWKSXjjwlY%2B5d2qpfW2tLW7a3AwAKoPNFa0mcM%2BpHlDlb2lTUNZk0Y%2FMXSNzKCRtpZv%2BL5PvJsligG5KqxmVbY7CT9LiWiejPLdH4b%2FwCISBfv%2BI4qSSv5WdA5yPWa%2FgswVJQyOd6cT%2BzreoxcgpVLGz3gUiDWBVbSG6F%2FuxKtg9f9dMH7FjXazSuGCADX5DMJ31sMQGOqUBvGj8WgKKA7EvJVXzXuq4zxXtBRM%2BcPbCJ%2FhFr2IvOzmG8F8nNjsc1F%2Fo0vO8SEvUG863B7hBmU2grs28b3P%2FC3vgBO1bvTN29ryn0zlsA2p9haKdGzS2F6Vbwj%2B107kcAxuyWnpIJozZGMIjr%2FaqfC0o5v1cqz1nUYpDdhhLMPhEwC52NnI18fubUu4GrdWk7njQbSj8mlaTfZJAqfk5U8q4Al0s&X-Amz-Signature=ae35563b580746c82c54ca08e3493bc7924620d16d026be5eba0aba1f0554022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7XUJ5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqzLxxIgnu%2BnxIsUqjDN3IqhNepL7KEae4DytjcPJjlAiEA8XvHzEVaXcJPtwFkP%2BM%2FLpcQltIZey5URFsxsrOtAcIqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdq%2F3q%2F0xgzj9TFuircA%2FR34eXJGQwpe4oLbNgrrE8fCfWWvFemCcFYmPnbyh%2F7EQ%2BY%2BznKMLgM%2BeelmpHXVyKhUQE%2FqSqB9GwJjRFs3Z7ZBw78GkKT8bvjQ3RnM7n3CvMPWt5Y6Rj7l1TlYfFDp1FUU31dK4CvPTOEB6D%2FKHg1ffTBh0gPj%2FGfyasmw8jCnz8JIWAtySpg3PikApC%2F5sDMUg7RUfU8OICMDQ9yu%2BK%2FC%2FIbkSxsNfTHHEuuH8tTNk%2Bb8OOwCTtZ8jggzVDwT3%2FEqZ1Co6aEvCbK0yBkYvnfob951QlbekuD7wm27Hqs0BZsjtF6BwUy3Diuil0Q4IQ1P43uhIWSCqzBSBsXv5JXIM2LzY%2F%2FbSbWTol42kwkDED%2FYw5DWNkOjWXlC2O1oL4R9dm0nQ1YsoSHA0ypcsB%2FnqsqdeJsfJ%2ByvHIvw5BtujVnAYhfqFw5ZX4sWWKSXjjwlY%2B5d2qpfW2tLW7a3AwAKoPNFa0mcM%2BpHlDlb2lTUNZk0Y%2FMXSNzKCRtpZv%2BL5PvJsligG5KqxmVbY7CT9LiWiejPLdH4b%2FwCISBfv%2BI4qSSv5WdA5yPWa%2FgswVJQyOd6cT%2BzreoxcgpVLGz3gUiDWBVbSG6F%2FuxKtg9f9dMH7FjXazSuGCADX5DMJ31sMQGOqUBvGj8WgKKA7EvJVXzXuq4zxXtBRM%2BcPbCJ%2FhFr2IvOzmG8F8nNjsc1F%2Fo0vO8SEvUG863B7hBmU2grs28b3P%2FC3vgBO1bvTN29ryn0zlsA2p9haKdGzS2F6Vbwj%2B107kcAxuyWnpIJozZGMIjr%2FaqfC0o5v1cqz1nUYpDdhhLMPhEwC52NnI18fubUu4GrdWk7njQbSj8mlaTfZJAqfk5U8q4Al0s&X-Amz-Signature=40fc97a49b64cf7bbad32d0f9afcf1da633f14721ba74345f2b84edc3fefb154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CVP4WBI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfeqOu9A3hBr3jOQiOGNV2Nhn7raAuFNtgDQ8Kf8S8nAiEAk4MKbTPxYZ538IxpOUufSuHqKUaceK4NLqjerghw98sqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKktL8oaaSjHnHPCCrcAzk0LC3fGqQ2LSwZ8YPi1F61bdcnje8si6qVBwJUtCxd2qj1IdPLN70aa9WgJi5185KNPETL%2FhDjssB%2FP0hCCapIIwEI5i%2FqALMEPcZGZfkqUqYz9p3gkGQ0oh5QiFAsMXiN7oO%2FeOFReaIQ1FxCCws17ahTF7Mo5HmpPj5XBLBko73Bm6G4riQsDEY54UPcLRH2PXPLl8UhoAwLlk4eBL7gGPfOz6twXNdqSZQGXAk2dF1NBuGG63oLZlNPWrC3dm5xLSPuLQ9Rx4ZvEPk9n7Fpr9FiqfAGof1Bn%2FuAOkkkAhp9wdeaPpnTnZv6uk0xpRIDF%2BqYbIW59FH%2FuuwLEbrZvOtsj0vkfn1WwoEy2h1dAtjxUMmQK4raq3vHK0HR3iPPPIEDWZU0QunYOtBvJdCNqMo%2BzXVmxsA%2BPxQAmaTBnqPkQKmi1lXU3iNQFNMUdlqUeWAyCVVZeDvHb406TS4oq8VMmwQXzC3%2BAzLwiZXZLqoydCazvdkdH%2FH2cUenees2FzzsqjqZfroHfuGx2rJQ72vJ89Sx9knvNG8KJdiQcnUuE9IlXL%2FBluWhBbw06PIKU3IjsN0KJtThNod4pdwcl4zQV1MiMTy4pS6F3aChLLwfMoFY2on799qPMLb0sMQGOqUBr8meG%2BaDKLPZ9klc4mq90ddkgjG0o67GncVKGT%2FY6uCSszkMttNORcawtgxXwtgvYplgsMPcUjEF0DThvcI0kKySrX5L9Ab%2FbgWnopuM1gDwmdmuwcf7k9EK7Xh5GtybM5PZ3%2BkLaNGiDsBMoTvjBETDPSjnVg%2FXwDciHOnrL5eVlPWnKCJz2JxEZvTQILfEw7b3ueeXe2xSd5qcxh%2BPsINXJytI&X-Amz-Signature=3becf7e1d3a1a9716fee50c2825b2aa567e1187214ca3cf15e77ce0db8f4a5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZ43JGH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgybsP8C9tLLQiQ1SjfoMqyUDJTS0mI%2FbdKJUE2%2BH%2F5AiEAhd4QciJyjaAE0LZRd0EYyu%2FCtNroDmS%2B8g%2FpFm86%2BHUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOH3P0RPsyc4oOnmircA5krPsPQFD7HQsML3qc%2BaI6Ky97oDBEeVcIdTe%2FtEt77OCg73LoBY9TUgVw6ddCHRxgehAT0LJAgv2sJC00T%2Fzo7mN3fBGREdfkQ7Krdkeyjncr9CfeI932TvTQT%2Bfw6IBdCYLDpPp%2FuK%2Bxwmt4OOVHMOn6q3bJk7iu65GhhHtVran4o7v4xTgot6RjEsRLYW%2BUgX63XtnxhJck5xFWyrtWZ9k0g9trRV5G13NQnfdsVWEl9S%2F%2BvE4gRgj5GWrRpllbtyq%2FhQYhCZ8ex%2FJkvQGolKt1xkJzGr%2BU3tfhmfNQXypimyxflR8XizteDZXPvozVvdVg1zWYFO57HWieXsWU8CeNi%2B5Scey7M7urECpC4IEQH2Gh46AshdY8IEftKPUhzoBVOEpVS05dtYwxM1rtDjG%2BeDzolvMuShG7mkNkXgUMw7kofPJaAIipxRSN4eYR1R7Iv3o0kt%2FPUp80mOiBWEhhlWKdqQNgGuone1EeDk%2FEw0kYZVO0H0erqUtDn7130rZBHCPw2Bzo3utm7aoLl0STYYet1O4PuVfVPw8GccPvIg9N5zuUTp5MM4r3RWJnctuqOJkaAd9PxZGr3oubXy%2B0%2BUH%2FIwFbEBjd%2BdjdObgdpo%2BjXkjpF2eLUMNv0sMQGOqUBlm49MtIwg8ZWkQNXs%2FCqFD5BJgfHVFZkQPepB99QTvc7blkzrAZDUHQoiXjfYkEJycqjA7pGCOStryq595maqHJOoP8BEm%2BE3GUostNpycx61DsHo5U6TdGq%2BReTzFq3Bo7amb6J%2F%2FHrWNuhmTl1NsUBXKI5GvhXDZ6MPD6KAaMWxy7FrvL1K79odUVPyeDyUlMCMCmblH6bFGf1Z80yckmu%2F1j4&X-Amz-Signature=f06dcc9ea6b07dcf8021c8e681ac2e311a6db75379355c15b1983f85f5df53a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7XUJ5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqzLxxIgnu%2BnxIsUqjDN3IqhNepL7KEae4DytjcPJjlAiEA8XvHzEVaXcJPtwFkP%2BM%2FLpcQltIZey5URFsxsrOtAcIqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdq%2F3q%2F0xgzj9TFuircA%2FR34eXJGQwpe4oLbNgrrE8fCfWWvFemCcFYmPnbyh%2F7EQ%2BY%2BznKMLgM%2BeelmpHXVyKhUQE%2FqSqB9GwJjRFs3Z7ZBw78GkKT8bvjQ3RnM7n3CvMPWt5Y6Rj7l1TlYfFDp1FUU31dK4CvPTOEB6D%2FKHg1ffTBh0gPj%2FGfyasmw8jCnz8JIWAtySpg3PikApC%2F5sDMUg7RUfU8OICMDQ9yu%2BK%2FC%2FIbkSxsNfTHHEuuH8tTNk%2Bb8OOwCTtZ8jggzVDwT3%2FEqZ1Co6aEvCbK0yBkYvnfob951QlbekuD7wm27Hqs0BZsjtF6BwUy3Diuil0Q4IQ1P43uhIWSCqzBSBsXv5JXIM2LzY%2F%2FbSbWTol42kwkDED%2FYw5DWNkOjWXlC2O1oL4R9dm0nQ1YsoSHA0ypcsB%2FnqsqdeJsfJ%2ByvHIvw5BtujVnAYhfqFw5ZX4sWWKSXjjwlY%2B5d2qpfW2tLW7a3AwAKoPNFa0mcM%2BpHlDlb2lTUNZk0Y%2FMXSNzKCRtpZv%2BL5PvJsligG5KqxmVbY7CT9LiWiejPLdH4b%2FwCISBfv%2BI4qSSv5WdA5yPWa%2FgswVJQyOd6cT%2BzreoxcgpVLGz3gUiDWBVbSG6F%2FuxKtg9f9dMH7FjXazSuGCADX5DMJ31sMQGOqUBvGj8WgKKA7EvJVXzXuq4zxXtBRM%2BcPbCJ%2FhFr2IvOzmG8F8nNjsc1F%2Fo0vO8SEvUG863B7hBmU2grs28b3P%2FC3vgBO1bvTN29ryn0zlsA2p9haKdGzS2F6Vbwj%2B107kcAxuyWnpIJozZGMIjr%2FaqfC0o5v1cqz1nUYpDdhhLMPhEwC52NnI18fubUu4GrdWk7njQbSj8mlaTfZJAqfk5U8q4Al0s&X-Amz-Signature=fd6c51da9261cc0282f3323bf5b19d8800d40ca9f36bc228d1f885b09131a17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
