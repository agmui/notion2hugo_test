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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBUAI3G%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCr1g%2B4dDfWW7DobZsuVmY9TBdlwX9mmbHZeku1Dda3bAIhAIYBI0pZzwLvJFZyRXzryQCPHrz771uJ6H4nSpQQRPOcKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlI8d7vrEUrAFf1HIq3APf6B9T3xlpxOmElETFcF52d2nVPhEJxPz9wfEYTV72MYxzxLhUOZEQ8ZTfqa909zMjnMQF5un87qFBo8A7RZlYalOEO4nGfj1zpE6Wvv2%2FKxHzMSejPfRwiYmpOcoDlSNOERN645jyZY4QNGOFU%2BJd44l2gXsRTrM7DiCmwYWsccwHuN2doW1VwtnsewHZWpGM0h%2B7HOCAIkVfj0Bj8JyqVtPz9FnFwpoT9gK6I39dp3SNjoFS92E3VIuvsoclSbkv0dK%2FOAYBfvvPmopa3VRihqTL%2FNd3R69tyFomeKb5D4RzvDhcoZ4DM4s543C7xpCVzLIYKhCc4i6mp4eL2B5z%2FGdRK06rXTcWpVXCEssCD5C7idhlUnu%2FDYlM4NnpAeVeig2mFSkSvL7tBs3AGP2aSDDZBUgrj7R2BJBCmyLVhpoVUQ8dBvm8ST7kKs9%2BClmMxe%2FSBSSaJGyar0jdWlCwqLCIKlXg0KIyeWSXLzTmfQgXoS9lrL8C%2FM9m6gRFwtr10Xbko%2BtSzvEJFI7wKcDpbFx5hxIJKSVTtRGMe9Qpg7QuwmbaHUi%2BdvycuabqmTpi4hxCREpjeyxDjRrQhEH2gA6a%2Bje6NXT%2FSfvxjFi6C5rYRwJ9Z8%2Bxtx%2BICzCh%2BfK%2BBjqkAUNSboxw2mWyDlx7zHpKIbvpr%2F0UQGe%2BZHilmzToQ0XPwk9bnPAQCi3HGYkFjveisfESFN0JHU8j0pQSnJVic6oMCcIAUSKqksxbqJJES2Iuonx1tRIup%2BviPsuxsouxLjbKwFey8SQMgw3nF%2FXc%2Fry41689XV3DvIMJBAOUnulDkwnv6VuDhlvsK0hvI%2BnCpohX5MfU%2BGXtni5SfVXNRw5wuTBb&X-Amz-Signature=ca59e6d052bc0d393f951c335f7f2ef6dfc6a330f8fab1de56a6164601d3003b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBUAI3G%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCr1g%2B4dDfWW7DobZsuVmY9TBdlwX9mmbHZeku1Dda3bAIhAIYBI0pZzwLvJFZyRXzryQCPHrz771uJ6H4nSpQQRPOcKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlI8d7vrEUrAFf1HIq3APf6B9T3xlpxOmElETFcF52d2nVPhEJxPz9wfEYTV72MYxzxLhUOZEQ8ZTfqa909zMjnMQF5un87qFBo8A7RZlYalOEO4nGfj1zpE6Wvv2%2FKxHzMSejPfRwiYmpOcoDlSNOERN645jyZY4QNGOFU%2BJd44l2gXsRTrM7DiCmwYWsccwHuN2doW1VwtnsewHZWpGM0h%2B7HOCAIkVfj0Bj8JyqVtPz9FnFwpoT9gK6I39dp3SNjoFS92E3VIuvsoclSbkv0dK%2FOAYBfvvPmopa3VRihqTL%2FNd3R69tyFomeKb5D4RzvDhcoZ4DM4s543C7xpCVzLIYKhCc4i6mp4eL2B5z%2FGdRK06rXTcWpVXCEssCD5C7idhlUnu%2FDYlM4NnpAeVeig2mFSkSvL7tBs3AGP2aSDDZBUgrj7R2BJBCmyLVhpoVUQ8dBvm8ST7kKs9%2BClmMxe%2FSBSSaJGyar0jdWlCwqLCIKlXg0KIyeWSXLzTmfQgXoS9lrL8C%2FM9m6gRFwtr10Xbko%2BtSzvEJFI7wKcDpbFx5hxIJKSVTtRGMe9Qpg7QuwmbaHUi%2BdvycuabqmTpi4hxCREpjeyxDjRrQhEH2gA6a%2Bje6NXT%2FSfvxjFi6C5rYRwJ9Z8%2Bxtx%2BICzCh%2BfK%2BBjqkAUNSboxw2mWyDlx7zHpKIbvpr%2F0UQGe%2BZHilmzToQ0XPwk9bnPAQCi3HGYkFjveisfESFN0JHU8j0pQSnJVic6oMCcIAUSKqksxbqJJES2Iuonx1tRIup%2BviPsuxsouxLjbKwFey8SQMgw3nF%2FXc%2Fry41689XV3DvIMJBAOUnulDkwnv6VuDhlvsK0hvI%2BnCpohX5MfU%2BGXtni5SfVXNRw5wuTBb&X-Amz-Signature=1526f52f9885cac525c8a600b6b600da6a58723f16b9435cee8eba813bd464d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJD3NBO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCLtoC0ZCUOWGDngp7gXa8Y9hGBsHlAOg%2FS9JQkDJ4xxAIgW60qJgWQp9OIJRJ0Iw5ZLpIPmicbFoxNn3SOru6LVCgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGn5JSLP7Ny9ookiyrcAyEFucC3MacvTeMeOfR7DTbsnRpRpUVOTHxnLIm9QVZj0PPmAvT01wLJV9jhHSZULzbAqABA5N37loUDN%2FdLeYOxqZL%2F1G7EEFVUgYmUD8z2Z3L3bb3y0PvVSGyn8A0uaCceO00Gbml9WKW1cPL%2BaHNXUNMrWWqPNcNIqXOVeeDGzjXDPShR0duQnWdPs%2F6NW1n1bDXmSeOGIK3k2kxkwOMUPUazFKpyFChfiJL1bnFkjZQMjrkIogAT7k7%2B7S%2FzVh18ycs2DqgPuoYrTdkF0w2c3RORE7R7rQ1lqpcoGzf7SZvBcB%2FZAkHUq3pYwLKoK140HG3g15hm6eluo2cCcwoYNFjVjB9AMJ%2Fq6vgh5WEp4qtp500UNryd61tNjrCGrWybpJNuMUfU9Es1t9pkq4woRvjVt07hyYXAfU5UIBNHxmPDxF8rOpdfeBMH94dpb%2BS%2Bem8RPPyIqxrJDds2uzAWnms2%2F4uFYNfRB4VPBwUfoB1UTslrao7Z%2BJddG2M9grm7LB3owhff5LiGe7Qb0bPehR%2BUvXbVUVRV7KL01MnvTGdOE5eL8B59Xr3eRGS3uM%2FBOfuCb1D%2F8w3pWsMtUmbYEnkhwjdRg4amsfYRWTPOeXfOLjjm7zVQ7cF%2BMP738r4GOqUB3mmpCV%2B6Fc%2FAKJlkkrDVNucZSsfIOrrPIYMKmpKjygKerVjL6WKeZNOIhYTF55qbG4X%2ByZpoEhCZdorljqwqv5X574ldpT05VtJwAOJXTXJJbfhVPbErR%2FzXVV2VEFmZ29Q8afI2pfYjUCkRfQgmeb5e2Z6qWgb2PnwqSvs8jJfcAKmHEdd9NId9p8NTFpM4i6GyXsB9pKB3WBkYGSQggJKaWtGF&X-Amz-Signature=76b5392267e0bde69a72d30faef37e0024d2d60864081f8765c0c429d75a6231&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y26CE4AS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIECWovChaQ0Rzu%2BTH6bWFIKzD771xx5i7cCTZFX23R00AiEAqw0J3m4pskxlHRhuLmz%2Bcipj%2FHc5xLUB%2FClvCAC9hWAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHptHJUqMEdX8WOtbCrcA77HVCmNOVB8wyKn%2BtJUb0bsgudEdutQgWoVJWvvWP21%2FNMPyCBp1PUqockK7d%2FQTmJcEWfL9297qkkmi8Hg%2BHo3TUHpMIfDpTyU6VCuCCBD%2FBQMEr0zpuYtLlPBErBtc4b0S1wC5Vdq9W9Pg5LBZXkD7QVeghvwlH0m6AJPtg4PqSZOT7PyRrZ0%2BCkD%2FcFTsi4vP0NZxx8RiAIPrbaotPsO3DzRXBebJoQId0T5ecE1C9gm42stPfKj9OG9qXzyf40M00M6YaTztX%2BrVkyB6QG%2BTk3J9EfBYSXhmg2RINiGdEAzFkGqjQ34SFY0Rj1KsmZzo%2FrWz9J7wbo8I8ZihfaP1ORvs0Fhyo5zmj1URlIlwK6Ca%2BzK%2BSqkP5d%2Fu6Ik8SOH0%2BtNlyXX4vat9AbDhMjfcKve8PTZIlbpLReVVjhKCmgfPUPWWbOQEbh8DGkLfDPoB5Q%2B66w4Nh2OxUkYvXHRDpL1schYtj1yhykZ7vhWtVhLJPlHlJ9P9o2oOq0N9TA%2BYGUVh6DFZB7jdIdLOMoGLbm5vmjqg5J8JRYP077LJWBYfw3c7REZI7OH7ysZb1SIEi8AhgCtRy9UKGJP5wDpjrnOgLdSPuakFOqD2UxoQ3TRcpU5MxEryd1cMKH58r4GOqUB6xFCErCYbluAGD9go2Gwy0zoULnjcjoHu7Defyqbs985uLBjD%2BKFnxE5u%2Bu7UvXsAqfiE6C4gDY%2FPqTE6sqJiUrMnv6yXsT6eNJOTXmf%2BMofdmYgAKOkuYNzlKbhIURRgP0U5F4oOzU8a2fC%2B4ZdSNEwEAcuznmcCf%2BTb6qhff6cUZ7kGOr%2Bc%2FBJoB%2BdQ7Tl0r%2B%2BaeOD9FWmfYdpM7NFyh6Si90%2B&X-Amz-Signature=f1f649cc420e77bb775536af8ad1dce3115a126a4154aebc4fd9d7af2fa89f15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBUAI3G%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T021729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCr1g%2B4dDfWW7DobZsuVmY9TBdlwX9mmbHZeku1Dda3bAIhAIYBI0pZzwLvJFZyRXzryQCPHrz771uJ6H4nSpQQRPOcKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlI8d7vrEUrAFf1HIq3APf6B9T3xlpxOmElETFcF52d2nVPhEJxPz9wfEYTV72MYxzxLhUOZEQ8ZTfqa909zMjnMQF5un87qFBo8A7RZlYalOEO4nGfj1zpE6Wvv2%2FKxHzMSejPfRwiYmpOcoDlSNOERN645jyZY4QNGOFU%2BJd44l2gXsRTrM7DiCmwYWsccwHuN2doW1VwtnsewHZWpGM0h%2B7HOCAIkVfj0Bj8JyqVtPz9FnFwpoT9gK6I39dp3SNjoFS92E3VIuvsoclSbkv0dK%2FOAYBfvvPmopa3VRihqTL%2FNd3R69tyFomeKb5D4RzvDhcoZ4DM4s543C7xpCVzLIYKhCc4i6mp4eL2B5z%2FGdRK06rXTcWpVXCEssCD5C7idhlUnu%2FDYlM4NnpAeVeig2mFSkSvL7tBs3AGP2aSDDZBUgrj7R2BJBCmyLVhpoVUQ8dBvm8ST7kKs9%2BClmMxe%2FSBSSaJGyar0jdWlCwqLCIKlXg0KIyeWSXLzTmfQgXoS9lrL8C%2FM9m6gRFwtr10Xbko%2BtSzvEJFI7wKcDpbFx5hxIJKSVTtRGMe9Qpg7QuwmbaHUi%2BdvycuabqmTpi4hxCREpjeyxDjRrQhEH2gA6a%2Bje6NXT%2FSfvxjFi6C5rYRwJ9Z8%2Bxtx%2BICzCh%2BfK%2BBjqkAUNSboxw2mWyDlx7zHpKIbvpr%2F0UQGe%2BZHilmzToQ0XPwk9bnPAQCi3HGYkFjveisfESFN0JHU8j0pQSnJVic6oMCcIAUSKqksxbqJJES2Iuonx1tRIup%2BviPsuxsouxLjbKwFey8SQMgw3nF%2FXc%2Fry41689XV3DvIMJBAOUnulDkwnv6VuDhlvsK0hvI%2BnCpohX5MfU%2BGXtni5SfVXNRw5wuTBb&X-Amz-Signature=4317cbc505cfb6f79a404584eaece9b74555bfd91b08f03dce040124380e0d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
