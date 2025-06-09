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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHI6MMA5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpPyb0dR%2BSrzczBw2ivfsg6IxL4KWzq%2B3g%2BCTrvxYrAIgXF28%2FhRQ8Ns%2BpdQ3V0Uu71Epe9RWss1rDs85UDcmrmIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmezC0OcQ8W9%2BLOnyrcA5vDWXd%2F4OBykHO3LXQgj0Im5ZePpgnTsaNRJI3pQcU0nyNXsDWQuaKGY53dOcrUTWFHPocQoNtP34hr%2Bqto3VTn8Js%2FTl5t4z%2BGjri8Jn4x%2Bd%2BT54ZnvB1PK2CmM8EdjQ6DC0GQm89L%2FzbIoqSTwqp%2Bw0I8dEPcx3ZDC5PQ1ihq%2FB4u1%2BKLtxwTzEt0EyaVVfL1X8dhG9KJiIEv3UGq7DIHlCryvX9vg2adC0Zo6iSZLddQwxcWWK0K3wuYmCvOB%2FPlVUJa6EdCOZJuWgW1pdNCmbgq5uDYxgNeEftH3b1sRHys2LljdQjKuhpSRt%2Fh0LRFME5RpL5uucrwVLnBrTbQLXwaC6jCgJqDmRPfFdG7Q2pz7nWaoMUDKZYcP%2FAMXGEdA6cBoeSYWE1wDgvTteKGflAXgUgLzWwGCIYkOTB2FxGo692G3y1dXhBeepudavsIdVLWJa2fhzU8t1zb5z%2B7xjVQNYryW0xm%2FmaR%2FboOLXNw5E3FRqfsO0c6miGdOFNPNWyta5DBLnxStREVJ3Gw5AJEhay8cvZy5ht0SO%2F6a566%2FnhqQC9QOcmYllodRRxlRFaRpkqNWI6ZpiI%2B0SxUlzfKRNoCLjaVUVvwvPG%2Bx1D8KhtiMWX1HCwZMPOcmsIGOqUBQu1OQBts7OnAolqTgjZ5meiKs7JisR4qeZQUWPmJ2pBCOlfF3fXPmFC4lyX8nA4%2B30B3NZQugpQAl800LsnvlMjyreqsciMDe7%2FOepkGjUUM5LRTpgLvpU0S%2FLRs4cvqjn0Ib3gme0u4BPKeGhaoSbY%2FHYcEXoVnS4dlamQ0hxDj9AonM2OSby7N%2FAAdTwyFz%2FBYKXtPUyRDvb9ecytn9laY6uUt&X-Amz-Signature=87d96fee31e868c75369ae790e66d4bdf9125ddae06302c38ee06c0a4c912e61&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHI6MMA5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpPyb0dR%2BSrzczBw2ivfsg6IxL4KWzq%2B3g%2BCTrvxYrAIgXF28%2FhRQ8Ns%2BpdQ3V0Uu71Epe9RWss1rDs85UDcmrmIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmezC0OcQ8W9%2BLOnyrcA5vDWXd%2F4OBykHO3LXQgj0Im5ZePpgnTsaNRJI3pQcU0nyNXsDWQuaKGY53dOcrUTWFHPocQoNtP34hr%2Bqto3VTn8Js%2FTl5t4z%2BGjri8Jn4x%2Bd%2BT54ZnvB1PK2CmM8EdjQ6DC0GQm89L%2FzbIoqSTwqp%2Bw0I8dEPcx3ZDC5PQ1ihq%2FB4u1%2BKLtxwTzEt0EyaVVfL1X8dhG9KJiIEv3UGq7DIHlCryvX9vg2adC0Zo6iSZLddQwxcWWK0K3wuYmCvOB%2FPlVUJa6EdCOZJuWgW1pdNCmbgq5uDYxgNeEftH3b1sRHys2LljdQjKuhpSRt%2Fh0LRFME5RpL5uucrwVLnBrTbQLXwaC6jCgJqDmRPfFdG7Q2pz7nWaoMUDKZYcP%2FAMXGEdA6cBoeSYWE1wDgvTteKGflAXgUgLzWwGCIYkOTB2FxGo692G3y1dXhBeepudavsIdVLWJa2fhzU8t1zb5z%2B7xjVQNYryW0xm%2FmaR%2FboOLXNw5E3FRqfsO0c6miGdOFNPNWyta5DBLnxStREVJ3Gw5AJEhay8cvZy5ht0SO%2F6a566%2FnhqQC9QOcmYllodRRxlRFaRpkqNWI6ZpiI%2B0SxUlzfKRNoCLjaVUVvwvPG%2Bx1D8KhtiMWX1HCwZMPOcmsIGOqUBQu1OQBts7OnAolqTgjZ5meiKs7JisR4qeZQUWPmJ2pBCOlfF3fXPmFC4lyX8nA4%2B30B3NZQugpQAl800LsnvlMjyreqsciMDe7%2FOepkGjUUM5LRTpgLvpU0S%2FLRs4cvqjn0Ib3gme0u4BPKeGhaoSbY%2FHYcEXoVnS4dlamQ0hxDj9AonM2OSby7N%2FAAdTwyFz%2FBYKXtPUyRDvb9ecytn9laY6uUt&X-Amz-Signature=fe247990565685818bd16e30200960b5dbd58c8347e621db9648e819b6db282b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHI6MMA5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpPyb0dR%2BSrzczBw2ivfsg6IxL4KWzq%2B3g%2BCTrvxYrAIgXF28%2FhRQ8Ns%2BpdQ3V0Uu71Epe9RWss1rDs85UDcmrmIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmezC0OcQ8W9%2BLOnyrcA5vDWXd%2F4OBykHO3LXQgj0Im5ZePpgnTsaNRJI3pQcU0nyNXsDWQuaKGY53dOcrUTWFHPocQoNtP34hr%2Bqto3VTn8Js%2FTl5t4z%2BGjri8Jn4x%2Bd%2BT54ZnvB1PK2CmM8EdjQ6DC0GQm89L%2FzbIoqSTwqp%2Bw0I8dEPcx3ZDC5PQ1ihq%2FB4u1%2BKLtxwTzEt0EyaVVfL1X8dhG9KJiIEv3UGq7DIHlCryvX9vg2adC0Zo6iSZLddQwxcWWK0K3wuYmCvOB%2FPlVUJa6EdCOZJuWgW1pdNCmbgq5uDYxgNeEftH3b1sRHys2LljdQjKuhpSRt%2Fh0LRFME5RpL5uucrwVLnBrTbQLXwaC6jCgJqDmRPfFdG7Q2pz7nWaoMUDKZYcP%2FAMXGEdA6cBoeSYWE1wDgvTteKGflAXgUgLzWwGCIYkOTB2FxGo692G3y1dXhBeepudavsIdVLWJa2fhzU8t1zb5z%2B7xjVQNYryW0xm%2FmaR%2FboOLXNw5E3FRqfsO0c6miGdOFNPNWyta5DBLnxStREVJ3Gw5AJEhay8cvZy5ht0SO%2F6a566%2FnhqQC9QOcmYllodRRxlRFaRpkqNWI6ZpiI%2B0SxUlzfKRNoCLjaVUVvwvPG%2Bx1D8KhtiMWX1HCwZMPOcmsIGOqUBQu1OQBts7OnAolqTgjZ5meiKs7JisR4qeZQUWPmJ2pBCOlfF3fXPmFC4lyX8nA4%2B30B3NZQugpQAl800LsnvlMjyreqsciMDe7%2FOepkGjUUM5LRTpgLvpU0S%2FLRs4cvqjn0Ib3gme0u4BPKeGhaoSbY%2FHYcEXoVnS4dlamQ0hxDj9AonM2OSby7N%2FAAdTwyFz%2FBYKXtPUyRDvb9ecytn9laY6uUt&X-Amz-Signature=702f61e071f2575d130037410a944ead283c3e4029ae53992c97708fd000ec29&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRAV3DG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHWF7%2BHXe32LmHGDNadePMkVd5FMvb6hbCH6pzWCWtPAiBkfWmf9dpi5yLUg8R6MM%2FyuQmfgrxCkCDXYfmYtMkM6yqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMdu3G4KITf84g6FKtwDnUsTOBHsXTt%2FTT4gylJvFFuN%2BXiRaZvYmzhG4hLX%2F42VpoO%2FUXUrc8PLKsCukUJJYmzqXZp%2By1%2FYaCEIBoD%2BLHXR2sFfEAIx4vA2Sy3jQyC%2B1SWgublBffwqEof1kxPW6qjkgQ%2B9KWDhCu839YuOsTzWgXgHuexypTB3rsvYYAEvKH0TCKIB2lNaSxSABOrWAsYbhDVpHPOy0Z1%2B0E2DJjTJez12gGVGzMC62iwXKcWo863FTWA1VflUImmHl4LBrAHwnIDPbPw3SQi1gG7xDIlcz39yCAQO1l64PjfNuqejzfDA24pwQUA1XwDb8xKyE5fhHJ7B9HxkSH9RvdvLQW%2BchHNiqCe%2FRX1NfMUWi8PzzsIEBh%2BhOMVmIDx0Z%2BZfqu145zIrK324upxxbsLK0EYbf5Ffysks8W01WpC8NkCtm1mAtvCaSfoNRySJBXLN0n4Ac4Q62BGOauzbL99WToxNtLhxbR3RTpE3ZFfo8MKb3jtp5%2F%2BT0h6frv8ilGyHk7ka%2FEGKKWE6RhYU09z2ypw7mu58U5VK6PC8jdl%2BCv3vyC1UKcM%2FjyYinlXM1pVD8b2v7ySLUQNibqGI3tY2H52MPMEHzSYMmjYHrUTCTKsT86LP6LdsV5%2B13%2FEwzJ6awgY6pgFFkJWjfime98anwjlffv7v85N97KYxwlAX4XNrIJic%2F%2FlxziN9nsCNKDLcRTw4Hb8Fq9C%2BG6qL4SSUBnmu7ViK65vvVv2QLFiIesszfxcc8VDksCG6Qcn7e5AqnVNlchDRKGNFoepfk0XGOK47EX8%2FTckD5lV4GHgCq5%2BvP0Ibo7dxcr%2BynYHOITJat4L28F4V3urRFGyaD6NRqcsm3tFsQtDRo6Vc&X-Amz-Signature=1463f2b6483c79592d4d958ef45c969d0dd340cda9b7d6f307ae78452e7331c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KE24SV4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwkJk9wa3eYaTsdZPL5y2YBeEtfUOU1DOos%2BtG%2Bny3OgIhANUTH4ocVkEkloHAA8YCx861wPYUVmppeEAWoKRxMXMfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsphOwW7a6ZlQAgiIq3AMW7rg3FvPUU%2Fzr%2FVHQhHgqIKunAJiRmVwez%2BijLKg92Z5hC1HKdBJFfO1TsH6FLtD8%2FLADOz39DZL%2Fx9KYw7wDIj6FxQSnG%2BcbQfNbVi7EmbYCwi7v1UbCCCdzU3NvrLjjWoWyHTtd0EgatjjdE18mEyLEv6Nz4fOpUmLSfrsX5W9pTW01bEd5ujGa03aKr6JObhPe1MfeNQKne6dSQ%2Fy4ZOiBHV%2FplMT0uyRrBS%2B3A2e9LXGSgh7BvQJYD3152xj245ATQlMU9tGWlYcAuhCA8jMVozTLg3UTHe%2BZVOrn49Nt0eJfHpiZtDoQqtTWK5u0caL3%2BG7tMt7qeA0YoKkA10vrBvtO8YNW74DBTs7PXeB9lKjZLbwOJjh4lbOQ8NS5nBxe3ZN8uqi024Du0AUEgDefG8VGH0QSdRLnPmAcMUZCAlEjK1rhuJ%2F9qloQIhsWRKQwOuZwWamhI2uYjb2WHNsBOTmCjrEYC3hdTMioJ5Ff1IUKtYBryAWrb7JXeWt3U%2FazRYIjNKXMveymaRjJVVH6mSCffxWHJYx5qXnBq6sDma247GAiRhiokTAqyi9oTh7pn84K0w5u5KlEDw9%2B6pBmfYKRO6q56JmDAoCBAK558n0KgnraBiaQlTCXnJrCBjqkAYEne70igkRtkbtd16Afv%2FaL7d0oPYWpbg%2FZgBOhQN%2FVs%2BZksSO1c8t7CCWBjVAJYukPU17tXYZZ%2BrOFz41y6TACshctyy8BZeaqPSpOeziVBfvYcYHLMzIaeDd%2BOE89yl7ILYFrTB%2FSmlbaErHPbASGhAUlcrhENWGC8myFPPt6evowuKk7lL1lw3h34GzgPfkv16sVieQ70sTX22ADpWLUvch3&X-Amz-Signature=d5b19f55091ef758e4da411881bfe365e0137c88509028b98818954d96ad73a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHI6MMA5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqpPyb0dR%2BSrzczBw2ivfsg6IxL4KWzq%2B3g%2BCTrvxYrAIgXF28%2FhRQ8Ns%2BpdQ3V0Uu71Epe9RWss1rDs85UDcmrmIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmezC0OcQ8W9%2BLOnyrcA5vDWXd%2F4OBykHO3LXQgj0Im5ZePpgnTsaNRJI3pQcU0nyNXsDWQuaKGY53dOcrUTWFHPocQoNtP34hr%2Bqto3VTn8Js%2FTl5t4z%2BGjri8Jn4x%2Bd%2BT54ZnvB1PK2CmM8EdjQ6DC0GQm89L%2FzbIoqSTwqp%2Bw0I8dEPcx3ZDC5PQ1ihq%2FB4u1%2BKLtxwTzEt0EyaVVfL1X8dhG9KJiIEv3UGq7DIHlCryvX9vg2adC0Zo6iSZLddQwxcWWK0K3wuYmCvOB%2FPlVUJa6EdCOZJuWgW1pdNCmbgq5uDYxgNeEftH3b1sRHys2LljdQjKuhpSRt%2Fh0LRFME5RpL5uucrwVLnBrTbQLXwaC6jCgJqDmRPfFdG7Q2pz7nWaoMUDKZYcP%2FAMXGEdA6cBoeSYWE1wDgvTteKGflAXgUgLzWwGCIYkOTB2FxGo692G3y1dXhBeepudavsIdVLWJa2fhzU8t1zb5z%2B7xjVQNYryW0xm%2FmaR%2FboOLXNw5E3FRqfsO0c6miGdOFNPNWyta5DBLnxStREVJ3Gw5AJEhay8cvZy5ht0SO%2F6a566%2FnhqQC9QOcmYllodRRxlRFaRpkqNWI6ZpiI%2B0SxUlzfKRNoCLjaVUVvwvPG%2Bx1D8KhtiMWX1HCwZMPOcmsIGOqUBQu1OQBts7OnAolqTgjZ5meiKs7JisR4qeZQUWPmJ2pBCOlfF3fXPmFC4lyX8nA4%2B30B3NZQugpQAl800LsnvlMjyreqsciMDe7%2FOepkGjUUM5LRTpgLvpU0S%2FLRs4cvqjn0Ib3gme0u4BPKeGhaoSbY%2FHYcEXoVnS4dlamQ0hxDj9AonM2OSby7N%2FAAdTwyFz%2FBYKXtPUyRDvb9ecytn9laY6uUt&X-Amz-Signature=b580e6fd696dc310c6c3badf2d0b74cb6e7dbbbcf4fc5edb66e2f32ba50247f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
