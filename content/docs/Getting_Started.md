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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRQG3P%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCAxuAGP4OZ5DSuMh%2FTH7hPJOzQDj8RzeLqpgr13c9T%2BwIgN1wcIxBlCZmdA5vhU9foGQJajWizMlTJGADAr7o8Z%2B0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDFjZZxA6TC6%2Bp%2FISrcA8WrFSaZCvr4DyaVtWOYn2BsemosrwY2m94hY8694KTbbH2tQ%2B3FPH55klbs49UXD6%2BTrYYQR2UfpjMxziLoECtJmARP67mWxc9mybAvx5GXaqUyBXdcKq89W5K96W%2Bno1lL63RH%2Fyh8dsREh6VZnnA0bi%2FN3r01zIOHw8YXvPSXW%2Fi9t5gG3y4WyjSuqy35sXkSUYxV4h726M6%2BSo3v%2Bl9uOKusOOkYWOQGHuXdsjZq0pRXyqL5zQRAbEE2hms8Xnv43Sdp%2BAmg5tQMQYvt3pnT8v2uOG2gea7aeOcc%2B7EX59Y6sT8RitXDBU9tjKZhsupY20qYRzdchso2fRjmD4qwvotQrvEhHA4fg4qfdjwUXxvM8lVWMFawDFot41dIGvKr2QaGAP%2FZGAA8HhDHalpplpP2gKn%2FDUjYXph2x6FpSH26imm03vkz0kuewi73ZDda9k%2FJp%2FFQTrA9oZv1W2YiOEUZiVehbXbto3dxDj93FbGVGbW9%2FDsCjdUTPjnStPp%2FOWRrHDn9o%2FwH5m4AHUAzW79kzmkxuFE2B23dCn6N3Wb3nAFGNruLCX34CmEEOL9SBNy58Na%2FZqIifdV3KkjTLpFsODvkHSaJA%2Bl1eG7rSTTXXxDUxECxBLH6MIS4170GOqUBJJ8tmVN7NkR%2Fm%2BfAecFL1bQRhA7BlQ%2FjAQz0eyqSJlarIqr0mQS1zso%2F9eoeaTv9xm7czd0XHtOZ88PpNKFxsfxJlLueMUwX%2FBHeSDlgvzJAPh8C1AwxD88SjykMy1oKWsi3cbhD0PDGhBNztg37AZfjH9OGsohR4ojgBfreswcHyf7Hjom9NsxopHQPaO11S258KXRunVxURbukVN35IWr56n9A&X-Amz-Signature=719c1ba8d6ea2fdf54e774068a6deb5c353ac31e2253b9c30354e3eb4a980b48&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRQG3P%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCAxuAGP4OZ5DSuMh%2FTH7hPJOzQDj8RzeLqpgr13c9T%2BwIgN1wcIxBlCZmdA5vhU9foGQJajWizMlTJGADAr7o8Z%2B0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDFjZZxA6TC6%2Bp%2FISrcA8WrFSaZCvr4DyaVtWOYn2BsemosrwY2m94hY8694KTbbH2tQ%2B3FPH55klbs49UXD6%2BTrYYQR2UfpjMxziLoECtJmARP67mWxc9mybAvx5GXaqUyBXdcKq89W5K96W%2Bno1lL63RH%2Fyh8dsREh6VZnnA0bi%2FN3r01zIOHw8YXvPSXW%2Fi9t5gG3y4WyjSuqy35sXkSUYxV4h726M6%2BSo3v%2Bl9uOKusOOkYWOQGHuXdsjZq0pRXyqL5zQRAbEE2hms8Xnv43Sdp%2BAmg5tQMQYvt3pnT8v2uOG2gea7aeOcc%2B7EX59Y6sT8RitXDBU9tjKZhsupY20qYRzdchso2fRjmD4qwvotQrvEhHA4fg4qfdjwUXxvM8lVWMFawDFot41dIGvKr2QaGAP%2FZGAA8HhDHalpplpP2gKn%2FDUjYXph2x6FpSH26imm03vkz0kuewi73ZDda9k%2FJp%2FFQTrA9oZv1W2YiOEUZiVehbXbto3dxDj93FbGVGbW9%2FDsCjdUTPjnStPp%2FOWRrHDn9o%2FwH5m4AHUAzW79kzmkxuFE2B23dCn6N3Wb3nAFGNruLCX34CmEEOL9SBNy58Na%2FZqIifdV3KkjTLpFsODvkHSaJA%2Bl1eG7rSTTXXxDUxECxBLH6MIS4170GOqUBJJ8tmVN7NkR%2Fm%2BfAecFL1bQRhA7BlQ%2FjAQz0eyqSJlarIqr0mQS1zso%2F9eoeaTv9xm7czd0XHtOZ88PpNKFxsfxJlLueMUwX%2FBHeSDlgvzJAPh8C1AwxD88SjykMy1oKWsi3cbhD0PDGhBNztg37AZfjH9OGsohR4ojgBfreswcHyf7Hjom9NsxopHQPaO11S258KXRunVxURbukVN35IWr56n9A&X-Amz-Signature=659fd35261ed456512ddb5c5f5d12c5b428295bfc602f44a3dd1ed749b3c2802&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PP36TDM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICWyRoZskJa6B4pV1UyEjn8rGjWmq4xfU4WoWbrEPbMMAiA056A%2BgMtVD803PCRWesAoTx%2BnXn1GBk4I%2BLpo0aklnCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgXW7WXt1kjpg1yuOKtwDUuH6CSRS4TDywtajklGRuKNHItEcNj9buSvR6MjSRHdiU%2F%2FijAgdWGxIB5VCi7D1G10MkhDv3jx0qLb7k1n3wOT7AYfJLdeXmrH8EDMojKhEfm3M8kOCSXFzCuj5T4%2FRg5vRgsM5lSxhiod34Pbz0ZI8CozvAiv6G9aAwo2KCtpuuKJbY1hYAj4kQ1EG7QXXq7dnHa1wpseJveaCTVdpaEH6uxvsBjy90dC9eMN%2FiXf5We%2Bb3Yf8ypHurz%2BSTtSAaxkNeghSARPzHU04uSqdZNJwO9rGJDNCvOchmWhn6fmoKWHuDisPpKPxS5Yvvn%2BupTBmlSwdz7BxFspPnGVJ16o6x2BKXiK6lDH5isJqOqmDOvMLribbQ9eKrbQgJHCGUrZtWk1xlRtq6HZZJRGr7PLJtLYfdblBHn%2Bp7VaW5sWNJtMtoVH9MiMyWOdco37JoLL68Ocry9ucPvgtAdFv9CkTff6lyfc99RtltmUOXXzUVsRHkCbpvtbIKAyRI6i3ZkzKgNLtP%2BSqv%2FP3lkzZKWqRq61ytTKNvR1QD2x2KwLbPvv%2FXBIhwROquJmjolccrZ54uILLD3xtXcBXs6HoZDPYggjOhiZZQ%2Bl7sETcCiKFaQO%2F7u4OFI4K%2FBowkfvWvQY6pgE1qVu1q%2FACSqiW87nk4vtND439Q6cQxfjVw4f8pyB9QvuL5xVBJhcIwm6Quyrl36aVjE8JKnqghJUk7tTWIEZD5woEAruxuaxiw8%2FNcEg7TBESXFd8kHp4H2ySDi6esGOgj3Ax9hJ79ElmVvIGAyAhYvTzUoZ5cNjElc4zwhQ6cSaAP0P3%2BXcE0l%2FFBV2YEEG6LP3n46YtMCi7ulBH7q%2F5YGjPPIM5&X-Amz-Signature=c04c2f722ed61d4258ca963789eb029f594eb01c3a26f3732dbeae7a2ed3da5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AO56VY%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDm4wyrDmYzeLD4kGwMAp%2Fmo0TFES2CSyBL9uH8%2F82SEQIgG6bfmMIDXDpS2c2vyOY3mjeW5RcqNAgA3Lm00eyQ8hAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFp6czdEKRU0wFYQSSrcA6nWCBdiYttrURylsBXrjrBplxTdtT%2FkpwxdznXZGYKup3drpb4M0XZ7TGmAvOs3RKQbDhZnnHZIi51mtmM1D8f6K7ef16fHiNovZH%2B9aNrfH4PGxGY%2FmR0%2BVgfWb8RDcMhlfmemPhA2QdyHt8XWLdUAUoURBo%2BfIdg1gEdm%2FkubhlvLYTpjYROgTzoDdNrjPxS4kK4CodbVNs0zLLkwyf1UGDPlajx%2Fbni9f4tyykqbSXUvPgZQ4DSxLs69P3P6qCK%2BU%2FeuOnDceesELmTfu1ANhfQAsidvIibtAzwqeCOAKStX%2BeJRd%2Fr0c%2FlYL2bZEC1JtFM1H%2FakAotpUAfQm9JsxG8iyCff%2BjdoUozMKNSwr3C91ORLENAnjSc3miZa46lnNTHwBdOVSfQEbSF%2FlOme4dyFmbuygSJB2D4%2Bq5Cq0ynx7NbB5Qew2XTs85eX9Q2ezo5drjJXHbUT8mP5dcnmUI9QMXbv7%2F4Q9WYd387Pw4lN4uPyVR07kBiGMTDBUWelAWvKY2g7yCFF%2BX2L1Cce5YQnP6Kle9sC93Y%2B7sdyqRLbxOQDOZTjVZp8MZ%2F6MpMke0KJ%2FwFvRAw%2BGqMcQUgWZIykLFmXqgFvUonHrV7gJFrVLPWQ0lUhEMakMNf61r0GOqUB2iGgh6drm%2FCvDdlEsvp48zz3jQ%2BKlzkDWUDixehqVGX7T9c9E5LjEb5gLLGxatAmV5oAbHHs95Q4aUnEDxWp1gRrJfVxxSUNq936N3PmAdyojlAp8MyT5c%2FY%2F1CFBxU8lqaO0qpUNLaRP13HcdDXUYxyakrWCDm%2FBadxutQa5P7tvBNRcw5Aa2p4EDAuf1g9bvqOfOwVnm8VzSFYQDOHudlI7Ni7&X-Amz-Signature=b5e6855cdf4ad92ab092d055e19139c4c94bd4f21255edd089f7e6e0f8756e1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSRQG3P%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCAxuAGP4OZ5DSuMh%2FTH7hPJOzQDj8RzeLqpgr13c9T%2BwIgN1wcIxBlCZmdA5vhU9foGQJajWizMlTJGADAr7o8Z%2B0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDFjZZxA6TC6%2Bp%2FISrcA8WrFSaZCvr4DyaVtWOYn2BsemosrwY2m94hY8694KTbbH2tQ%2B3FPH55klbs49UXD6%2BTrYYQR2UfpjMxziLoECtJmARP67mWxc9mybAvx5GXaqUyBXdcKq89W5K96W%2Bno1lL63RH%2Fyh8dsREh6VZnnA0bi%2FN3r01zIOHw8YXvPSXW%2Fi9t5gG3y4WyjSuqy35sXkSUYxV4h726M6%2BSo3v%2Bl9uOKusOOkYWOQGHuXdsjZq0pRXyqL5zQRAbEE2hms8Xnv43Sdp%2BAmg5tQMQYvt3pnT8v2uOG2gea7aeOcc%2B7EX59Y6sT8RitXDBU9tjKZhsupY20qYRzdchso2fRjmD4qwvotQrvEhHA4fg4qfdjwUXxvM8lVWMFawDFot41dIGvKr2QaGAP%2FZGAA8HhDHalpplpP2gKn%2FDUjYXph2x6FpSH26imm03vkz0kuewi73ZDda9k%2FJp%2FFQTrA9oZv1W2YiOEUZiVehbXbto3dxDj93FbGVGbW9%2FDsCjdUTPjnStPp%2FOWRrHDn9o%2FwH5m4AHUAzW79kzmkxuFE2B23dCn6N3Wb3nAFGNruLCX34CmEEOL9SBNy58Na%2FZqIifdV3KkjTLpFsODvkHSaJA%2Bl1eG7rSTTXXxDUxECxBLH6MIS4170GOqUBJJ8tmVN7NkR%2Fm%2BfAecFL1bQRhA7BlQ%2FjAQz0eyqSJlarIqr0mQS1zso%2F9eoeaTv9xm7czd0XHtOZ88PpNKFxsfxJlLueMUwX%2FBHeSDlgvzJAPh8C1AwxD88SjykMy1oKWsi3cbhD0PDGhBNztg37AZfjH9OGsohR4ojgBfreswcHyf7Hjom9NsxopHQPaO11S258KXRunVxURbukVN35IWr56n9A&X-Amz-Signature=108f74317f85907220dc5e78351d518dfdce89928aeccf3a4c6017b204bc2cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
