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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCN67NOY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7n8nFnxw84XbVu%2BbniUeQ6DFuNny%2FO%2FLNemU7fKbNfgIgWXmfYuph6TB1hi%2FRS9xhLw3v15trSSKIcgvJFW64R%2Fkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCPDfxMSBIVjEFpEqSrcA7Rir5gf0obaKaeDjoX3ZVPI0fk7KXMqYT7x%2FPbAtxhllEzFdL%2FXIA1%2Bwt2y7Muo48xmsOljdUb3lJJE%2BSHWtdwR4yOYv9mlTGrmfhLJntiMS3QeDXpWN1RUcjX7vS0%2FVtQW1I5tXFPe3FkpymxyP%2Balm29mPRu0hevaSzNeouYhytrY1fU6N4oy9oF7efelgpheXJPwObJGh2qmMmx8H%2F3ALQWS7Vp4H6VHgVjnqM7MKAVHC8JNnwAEbgNXMfY1zDuIc0SJEGdUzUXZFJrFfrWQ0uB663dqo0SJUxXQlFwmGyP5ua81Uhk28nFLE0y%2BjE3sTU3MZ5X%2BkMR%2F9gGlWwa5EuB5n3apHUjZSiWCX%2F%2Fmfh6rA%2B4YFPElZc4itvSK8XD5JnTpjdTegmAOE8ay3en8OtaysJCnJTlYLMNhC7x4zRfRh1lfvIsHnVgxhGV8awTN9wd%2F3BoCrhfb8822i1Q2XqMR0qZBd%2Bm55KZM14g4wmNBQjUTyW7hAZ1Gs7JAoas6cSUJn33TARWViGQWNBqNgydgHmAhTvTx3pQGuTXYLgcawaDC6Qg7mqwdH0K8i%2FyBy6%2BGO%2BUDc5WMD5Edqk402PFhnwi6kcbUjrE0f4XYkFfQaKh%2Buq0orH%2BKMKutiMAGOqUBKw%2Bhg8GLBkbHqdJ5xx%2BhtmaRahVFXlBdNMDVv7QkgZPcVlWlh9pIa9a%2FvcoeHnoPN6wfm0o0405j%2FYX9VBg1CBZX4%2BRCJcrfPNZcK96zWCV3BsA%2BiK0GbyBi%2BVu9chhoXKnzHQbCzx17tX%2BXifoVfl%2BbN7TJssWMpgNu2SnXim19WgCZf8SGf2VN1CLV0yem3e5T6bJc%2B86Yg4BPgYse3RtQdyFS&X-Amz-Signature=6cfa0a3c4a69da8336dc871af1a881d09890a590946d973a7a76afba84293377&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCN67NOY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7n8nFnxw84XbVu%2BbniUeQ6DFuNny%2FO%2FLNemU7fKbNfgIgWXmfYuph6TB1hi%2FRS9xhLw3v15trSSKIcgvJFW64R%2Fkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCPDfxMSBIVjEFpEqSrcA7Rir5gf0obaKaeDjoX3ZVPI0fk7KXMqYT7x%2FPbAtxhllEzFdL%2FXIA1%2Bwt2y7Muo48xmsOljdUb3lJJE%2BSHWtdwR4yOYv9mlTGrmfhLJntiMS3QeDXpWN1RUcjX7vS0%2FVtQW1I5tXFPe3FkpymxyP%2Balm29mPRu0hevaSzNeouYhytrY1fU6N4oy9oF7efelgpheXJPwObJGh2qmMmx8H%2F3ALQWS7Vp4H6VHgVjnqM7MKAVHC8JNnwAEbgNXMfY1zDuIc0SJEGdUzUXZFJrFfrWQ0uB663dqo0SJUxXQlFwmGyP5ua81Uhk28nFLE0y%2BjE3sTU3MZ5X%2BkMR%2F9gGlWwa5EuB5n3apHUjZSiWCX%2F%2Fmfh6rA%2B4YFPElZc4itvSK8XD5JnTpjdTegmAOE8ay3en8OtaysJCnJTlYLMNhC7x4zRfRh1lfvIsHnVgxhGV8awTN9wd%2F3BoCrhfb8822i1Q2XqMR0qZBd%2Bm55KZM14g4wmNBQjUTyW7hAZ1Gs7JAoas6cSUJn33TARWViGQWNBqNgydgHmAhTvTx3pQGuTXYLgcawaDC6Qg7mqwdH0K8i%2FyBy6%2BGO%2BUDc5WMD5Edqk402PFhnwi6kcbUjrE0f4XYkFfQaKh%2Buq0orH%2BKMKutiMAGOqUBKw%2Bhg8GLBkbHqdJ5xx%2BhtmaRahVFXlBdNMDVv7QkgZPcVlWlh9pIa9a%2FvcoeHnoPN6wfm0o0405j%2FYX9VBg1CBZX4%2BRCJcrfPNZcK96zWCV3BsA%2BiK0GbyBi%2BVu9chhoXKnzHQbCzx17tX%2BXifoVfl%2BbN7TJssWMpgNu2SnXim19WgCZf8SGf2VN1CLV0yem3e5T6bJc%2B86Yg4BPgYse3RtQdyFS&X-Amz-Signature=9afc89ebb5b501034bbebf0d2c67ef911b490520ff58ebe82cb6c516282c8aec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD3ZMLA2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8vjNdg3DyNu9kBBNwUsGheeuNMZSAHlKq3%2FnFmiRDZAiAZsjOrhhO8uuzB3jS1pusDJXsv4X7tJiagulkfKbkspCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMsDw34hESctJN6QorKtwDVwUdeZwldb5icMQB4LRX%2FSQZeTdlVXJrvja5VvbbFwKYziVn5mEK67laLYquT2U8iJ%2Bfmy3HcaqCdG4NtECGL8w9%2Bvea9vTV0K9H68KkHnfLO%2FecDdKYb5yslAWzqa%2FJXCoDulUsbEfi6qSw0HRHtSFOR%2Fktk6CpLp1EIDbcuP%2BrzJVsLyfTl%2B1nRK%2FstCY%2F4MltxVUAVgF98OMQ6B8WwzVV7u1%2BqXNB4HBV1FUSNqOYVtaia0sr8C47C%2BYSb2wj06XsZxmywSfTAZq8B2BUcKZogqZXq3gKRefTjChFlaTy3zL%2Fo9mlpPu%2BoGkMGAte7mHT9qWvHGQn%2BvJ%2FtxgndtHQN2wo43f%2BHWFz5nEEkYImlO777W0iKlhvgEphH53x8iN293gpKxf3jzds65co2hu2%2BhURRn2EXsdCLHwlnSN%2BXcCbLYpvN7fdC6iiiX7cNIdpB3lD6ykowKOUVEVxB%2BuBrC6qW37x0ihW83gQAlwIbPl92G3h%2FCcgW68GnQW8YipzA427xmFx7fDf65Jz5UFhdOONKVNONH%2FhVnnu1Io9xJEbn5GnGNSmyfVo%2BCALg1jAeumCmi3WjcRJamKsvmIE%2FoV2%2BWh0%2BRIK1AY2WbuYQ6I9xrxmTPWbIoAwoa2IwAY6pgEsbUQBo8vMIKIqcq%2FqR9REoLzJolHccG6EIOzpqIGPPPeRDp6eAwICkcfYk%2FQzUNQbt2%2BQGptkwfqX4LrB6VK%2BPcp1xTl2Ryu6YPrzLu9bvO3ghcqXDMIKIwDaQwuh6BcFK7J41yUkiZzns46N9q4u8kOaCo5B9uFcAkshodzecnirENPovcpi1gK6bLGUiWeSwwEbfqlYq9zno8rCrzQc7D87rbbd&X-Amz-Signature=fbe16b0184ea6ac72e09d7fb12cfb17d45fc7ee8eca254dcab78984ddfa0a7db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMPLARC%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr1dgZS3vXkgpLCH0lEq4xmrCXwXXalLoh2nFFCNjTswIhAObvp6JD9Or2zxL46e1ybSCOJwrfNCg8BeD%2FXJn8XOzYKv8DCHIQABoMNjM3NDIzMTgzODA1Igw2hG5Dx3POrG5%2Bi6Aq3ANB3vFrk5%2Fs4lfrEW%2BsONlMlGbUkAKHYn2PxmdpolpCL8ihCVf%2FTfRFHejwR0fzEZxi5k8sWcOGpJqJmZSMQ6uPj3tSvNZu%2FIw7%2FPLtob6hXL32TE6NagkSqv8A7vxxZksmmFfTj2zHoLKub5jFbGmyejMaSIYETbNUJiKtZqxXJgrWbPohTxm3c2WdCU1g6kVrCzA2mYqsL3l%2FmlA8dO%2BYwgRy5LQUXNRr%2Bwwdb%2BwhCMqYwCITM7fZY8JStRZBZnmPNVLq94bVHnBz72QEKvV%2BJycEl19oemff%2BcwozRvvHoq1TuXKLQjrY%2F9j56x%2BaJ5Vvj3hUW4r8vVDztle1K7eeByP0FJ9AcRKN%2FPAGquk3ZRO9YE7W38lsajDDT1%2FnA03LpVrd%2F1kmDJmMaxmA0HDC4WIx5byWOzqzrkonopQo%2FAUksgn0ebr9DmgtDrvktv%2BpJE9E8g4kMj%2F%2B0rYJp%2B3a9vw6lqaGofC1xWLvZTzquamGVueUNctUhLEWu%2B3q95o6N7fVaosrI2a75mXLtq%2BZ8k2Fs7LZ0ZE%2BrPKNrtZM3MZylKD0wV%2B9z%2FuEMS5AmxEKs0cU%2BS2QaFvRu1vCZEfab2etDCBmMID7hyPlE093sDg7MmchZq7wYp%2BfzDjrIjABjqkARwYq6x52JL5%2Boag79fPm8107xr1kxWOdRSZrJYJ4bOiY8E%2BYMdSpWprogoeUVk6KaehT9Xl1yeacS%2FaLte4YQ%2FwJuALomDm23QkeCSLCpSYnozeIWjnVTOn0Qs0Vv4xJRV0lxoYplKHu02XEayoQEbOv6kPYkCgrVf1SOopZsGRZXRDdg51fGpAq1nGFLAHZAJvFm5fr6W4rfgKgW4SLYV5FYOt&X-Amz-Signature=15b383cce381bb0886eb02c11cf902cd4e6afadf85320bdc8161788e79f2a620&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCN67NOY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7n8nFnxw84XbVu%2BbniUeQ6DFuNny%2FO%2FLNemU7fKbNfgIgWXmfYuph6TB1hi%2FRS9xhLw3v15trSSKIcgvJFW64R%2Fkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCPDfxMSBIVjEFpEqSrcA7Rir5gf0obaKaeDjoX3ZVPI0fk7KXMqYT7x%2FPbAtxhllEzFdL%2FXIA1%2Bwt2y7Muo48xmsOljdUb3lJJE%2BSHWtdwR4yOYv9mlTGrmfhLJntiMS3QeDXpWN1RUcjX7vS0%2FVtQW1I5tXFPe3FkpymxyP%2Balm29mPRu0hevaSzNeouYhytrY1fU6N4oy9oF7efelgpheXJPwObJGh2qmMmx8H%2F3ALQWS7Vp4H6VHgVjnqM7MKAVHC8JNnwAEbgNXMfY1zDuIc0SJEGdUzUXZFJrFfrWQ0uB663dqo0SJUxXQlFwmGyP5ua81Uhk28nFLE0y%2BjE3sTU3MZ5X%2BkMR%2F9gGlWwa5EuB5n3apHUjZSiWCX%2F%2Fmfh6rA%2B4YFPElZc4itvSK8XD5JnTpjdTegmAOE8ay3en8OtaysJCnJTlYLMNhC7x4zRfRh1lfvIsHnVgxhGV8awTN9wd%2F3BoCrhfb8822i1Q2XqMR0qZBd%2Bm55KZM14g4wmNBQjUTyW7hAZ1Gs7JAoas6cSUJn33TARWViGQWNBqNgydgHmAhTvTx3pQGuTXYLgcawaDC6Qg7mqwdH0K8i%2FyBy6%2BGO%2BUDc5WMD5Edqk402PFhnwi6kcbUjrE0f4XYkFfQaKh%2Buq0orH%2BKMKutiMAGOqUBKw%2Bhg8GLBkbHqdJ5xx%2BhtmaRahVFXlBdNMDVv7QkgZPcVlWlh9pIa9a%2FvcoeHnoPN6wfm0o0405j%2FYX9VBg1CBZX4%2BRCJcrfPNZcK96zWCV3BsA%2BiK0GbyBi%2BVu9chhoXKnzHQbCzx17tX%2BXifoVfl%2BbN7TJssWMpgNu2SnXim19WgCZf8SGf2VN1CLV0yem3e5T6bJc%2B86Yg4BPgYse3RtQdyFS&X-Amz-Signature=d0c19996a19c54efe1e3ce22279a40b95aeee3eaeb143cda3c2ad9f32a927ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
