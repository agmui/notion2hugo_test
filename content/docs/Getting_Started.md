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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIJD6W3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCxX%2BBmEO8LvoHjfbUg6JkTA%2BMUkigdIp6szI0gNprlcQIhAN6hvzTWi5OChxE2vLSpvqo0rbn8kOZsstWBv2KyQscoKv8DCD0QABoMNjM3NDIzMTgzODA1IgwV3mH50Rv3Catb7U0q3AN8wQnR4uVlumfy9FpZ5aydV0qMf084ZNV9a6FnG9PlCNk033l695JTfPWG7oJn5ll0YNV2LYJX5TWveWUFpQaABjjs96r1YSnaUuIavOzxdM9KxEsHJGM03aDmNvqB3g8nTO3XrG0UnXvpdv985CuA98yvpFGH4skFzcYOM7ZtIECljHAizpo29ST9ZcwL6Bi5LPk5w5mOtdA5rWh2naVOYFc8p8%2B4JdmTHwIbVm%2FwmNkM0f0m34lSbKypeRp3ypCWbjDbug%2Fp48GSzLk%2FsKh0gFEHmvGx2r0KPHli8JSvj5l3zQYVGKpD8f%2FlmQQh7JhrQyrVCOEDT448Rfo2txc17SQa5Q26c9hS%2F30oc%2FlNYRDv6sjpwpP0WpfqGg7RR%2BI%2Fd7%2FaJSwx3narFkmK4A96hm6YmyynsKbulR6lhaIODhCCt%2BZDPmdeXXIHSDZOB9kyopMie7ZuYoxwR2xeahYLjaLgPeqPMUtMgy%2FoI8J9C27ZP5L4iJ1F0xIow2dT2q9g4WWOFtc1XBsfDvej9bvTMWfeu9uSv6jtndtbPDvJkTNPTg7unc37JMuthhkYbT6BfBax9r9oDFe6WGwgIZ5mCWdjEGgrZ1L8wr0yhn70sTICReTdgGoE38ejsTD9%2FrjCBjqkAY4RtpOFmTpziPs03%2FPiTQHfl2M9y5Tm20aNFag0z0rCXn2IFM40Br3tIw6koHGGTjEU0pisEajESF0qZbHxzlKeHdI4pTPs2RtxHzyOzD2B38RMjcsK9PpWbYEYy99SiuekToatAO92pUZeW%2F82lIZpKYmuSzJguImNBDe1B4iF9mTGXVJWk1y6xOLeOWlDZMNv%2FLKRGFIC3oMqlk27h88kbz%2FA&X-Amz-Signature=07a9b2f27e6af380953d362a4ff877035b88ae4418598b1cfaf7331c6dd65646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIJD6W3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCxX%2BBmEO8LvoHjfbUg6JkTA%2BMUkigdIp6szI0gNprlcQIhAN6hvzTWi5OChxE2vLSpvqo0rbn8kOZsstWBv2KyQscoKv8DCD0QABoMNjM3NDIzMTgzODA1IgwV3mH50Rv3Catb7U0q3AN8wQnR4uVlumfy9FpZ5aydV0qMf084ZNV9a6FnG9PlCNk033l695JTfPWG7oJn5ll0YNV2LYJX5TWveWUFpQaABjjs96r1YSnaUuIavOzxdM9KxEsHJGM03aDmNvqB3g8nTO3XrG0UnXvpdv985CuA98yvpFGH4skFzcYOM7ZtIECljHAizpo29ST9ZcwL6Bi5LPk5w5mOtdA5rWh2naVOYFc8p8%2B4JdmTHwIbVm%2FwmNkM0f0m34lSbKypeRp3ypCWbjDbug%2Fp48GSzLk%2FsKh0gFEHmvGx2r0KPHli8JSvj5l3zQYVGKpD8f%2FlmQQh7JhrQyrVCOEDT448Rfo2txc17SQa5Q26c9hS%2F30oc%2FlNYRDv6sjpwpP0WpfqGg7RR%2BI%2Fd7%2FaJSwx3narFkmK4A96hm6YmyynsKbulR6lhaIODhCCt%2BZDPmdeXXIHSDZOB9kyopMie7ZuYoxwR2xeahYLjaLgPeqPMUtMgy%2FoI8J9C27ZP5L4iJ1F0xIow2dT2q9g4WWOFtc1XBsfDvej9bvTMWfeu9uSv6jtndtbPDvJkTNPTg7unc37JMuthhkYbT6BfBax9r9oDFe6WGwgIZ5mCWdjEGgrZ1L8wr0yhn70sTICReTdgGoE38ejsTD9%2FrjCBjqkAY4RtpOFmTpziPs03%2FPiTQHfl2M9y5Tm20aNFag0z0rCXn2IFM40Br3tIw6koHGGTjEU0pisEajESF0qZbHxzlKeHdI4pTPs2RtxHzyOzD2B38RMjcsK9PpWbYEYy99SiuekToatAO92pUZeW%2F82lIZpKYmuSzJguImNBDe1B4iF9mTGXVJWk1y6xOLeOWlDZMNv%2FLKRGFIC3oMqlk27h88kbz%2FA&X-Amz-Signature=3a31be7fa6fecaf6ec7a9b693864ccf4c1d91c555356c436e7cb3a3a390742f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIJD6W3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCxX%2BBmEO8LvoHjfbUg6JkTA%2BMUkigdIp6szI0gNprlcQIhAN6hvzTWi5OChxE2vLSpvqo0rbn8kOZsstWBv2KyQscoKv8DCD0QABoMNjM3NDIzMTgzODA1IgwV3mH50Rv3Catb7U0q3AN8wQnR4uVlumfy9FpZ5aydV0qMf084ZNV9a6FnG9PlCNk033l695JTfPWG7oJn5ll0YNV2LYJX5TWveWUFpQaABjjs96r1YSnaUuIavOzxdM9KxEsHJGM03aDmNvqB3g8nTO3XrG0UnXvpdv985CuA98yvpFGH4skFzcYOM7ZtIECljHAizpo29ST9ZcwL6Bi5LPk5w5mOtdA5rWh2naVOYFc8p8%2B4JdmTHwIbVm%2FwmNkM0f0m34lSbKypeRp3ypCWbjDbug%2Fp48GSzLk%2FsKh0gFEHmvGx2r0KPHli8JSvj5l3zQYVGKpD8f%2FlmQQh7JhrQyrVCOEDT448Rfo2txc17SQa5Q26c9hS%2F30oc%2FlNYRDv6sjpwpP0WpfqGg7RR%2BI%2Fd7%2FaJSwx3narFkmK4A96hm6YmyynsKbulR6lhaIODhCCt%2BZDPmdeXXIHSDZOB9kyopMie7ZuYoxwR2xeahYLjaLgPeqPMUtMgy%2FoI8J9C27ZP5L4iJ1F0xIow2dT2q9g4WWOFtc1XBsfDvej9bvTMWfeu9uSv6jtndtbPDvJkTNPTg7unc37JMuthhkYbT6BfBax9r9oDFe6WGwgIZ5mCWdjEGgrZ1L8wr0yhn70sTICReTdgGoE38ejsTD9%2FrjCBjqkAY4RtpOFmTpziPs03%2FPiTQHfl2M9y5Tm20aNFag0z0rCXn2IFM40Br3tIw6koHGGTjEU0pisEajESF0qZbHxzlKeHdI4pTPs2RtxHzyOzD2B38RMjcsK9PpWbYEYy99SiuekToatAO92pUZeW%2F82lIZpKYmuSzJguImNBDe1B4iF9mTGXVJWk1y6xOLeOWlDZMNv%2FLKRGFIC3oMqlk27h88kbz%2FA&X-Amz-Signature=a876ccabb867b17b7a27096b22751a2459e8f019c58cd31d5b2ce9bfa15ddfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Z34QE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIDlSQL4tY%2FiqdEEUhfiSf%2F0hvz3xywuJ5o8mksJPLZXgAiAO8iW2sLiz3UVmzD8tdPuq3QnB8eXFEI0%2Br92oLwi2ySr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMQe6PBj5DxL5%2B1OBJKtwDgTm6TRkaQ1fYEO4yEmqVdekkLrtPYAJkuXgC2VXal9UrioKigLVqEaYkUSNVZ9wfIe9hx6fIXf4COKAF4DlkL8zgdtxfQXanIKfjWOfwRS%2Fe1noqStIKs5RX%2BpU%2BhSz9kYPXOK1KrNSSIdPeb%2BJZynMHvNB0uNlUPXCCPc%2FUCCnxPLCkgVe18%2BinRrCUAyyPI5GlBZD1qjrQQN9qg70OHcS%2FObeeKq9ocLewV4cW67AbolEVVmfJXsLmsEi9A3B8qwSioZpMoP2oPJqrlKdps3nFFRcQVFqPq8DZTFzOZODVTdSdfUn7bS8QCtGVabzX3TOohZtIbFi0CANHNXYzxZSy45fLURL1xvKud%2FpnMD76Wg8BR2amfV9bd7Vl4DRVdCVkF%2FWxN3MugEOUK8N7nPoTDhHYllLdM5wZPiELIxzRDqkCknPyUJMVRCrKJ%2Btww%2BBysYd5n9nrmtFBxjKbuPf7f7niD0VU9pCbuEwf3nBOc6MAXnsWYemcQ%2FYsis7VbmSIyJdv079bK1flXlLbBprMXmYMwFTuJT9Y6zkg0mQH4KoME6J9N9IBH%2BMD2jHkskGwzu3k1bS97leG0zMXrIkIP8I%2FkjuLUubD07qW2f2sQ5vVgUNdpFQjoP4wuv%2B4wgY6pgGRPiei6XqNdAfmxty%2FsHbxgeV4Iyv33VnCAm1U1A5B3uDQyBzH9rdp7hYAzrZtweepKBNtWMP2sdAplJOADgdqe5zx4FpR1S945kY5kjHgCCJQnDvYPs9aW%2BxRyYIX9yQNPalzRge46fOVQTCAnOWpRbCwtLL%2F2yjkjl61Xk20uyDza4Rf9gFsQbedjoPbf3ijuBXBMYbClFt4aCJ7TM5%2B9NXM9CAp&X-Amz-Signature=88516d26c8d72aec8358e6d4da6d4f097ea4af355c98be77844b6d148d9f912c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O43CT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIFYRGJdkFd6GFUC2ZThg%2BLg7AH7OO4%2FOJ%2F0gP6cuDjsKAiEAl6%2Fd2Yh90nnHVBeQ8JT6LtI72gusThiFcMkG8LmosJ0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAJE7Dm7XbvphCCLTSrcA5XyVa1rk76%2FxOByllSrRAjcfc72J3%2BqnAwFs8OeWzuXLacAIXU1YvZfUFbgBhrTqhXlw%2FH2mJEkdjE3HiA%2B6JqypXZx5taTFOqNuK2RnOXwEVmUOzbqyNx9Cuc9M%2FTr%2FP%2BRjnbSGYY2vLZCsf%2FsZ5%2ByNwHuV6duqKTUrOsVT2pgEK91K9qCw606qhktrgt6QPFibTIK72yHsK3Wc26UHPnYDujqa9od%2FuHPCAeskwgvwcgk8wL%2FGf9eYNy9gwkXEzX5%2BZOdB57GGy4u5iryNh1fLAplRVW2n10KIwAi%2BtC%2FXbRGQ3Pm3itfsx0e1I45zy3tjOZ7QLSgepQU5lMzWEAQWoIynaexsYPpxR1LFW59e1XGoyBEG60i%2B0BeZ%2Fj0gfL74enoQHIecaQfqJfHLS5d88lYm6wWALtqfBlUe0SmUGo0MR3pe%2B%2Fdh7b166Yc2nOw4V92k3ZJ7GPZFwH7%2BkqCIzk1O%2BDNo8lduW%2F8TjSkADAtN3e5P%2B5lZBqD2QIYgUOmbr3TygHVV1fFrwryiziWOm2wQ%2FVzf%2BlccnxSJpzm9HEQl7SBCn1UbE4%2BdavhGEp2J%2F8Ql2WblxbzU%2BeA8SvHWRPQQoMdt3LUBxPp2DN%2BU7SjN9NrQs1y358NMNOJucIGOqUBlRiikmaHJwha0E6fy6l9zti1leFthJee1%2Bwxyx%2FMjfDMpVox9ZTb9bWfPSbqV4Wcye5TdggzhCP7YGXcI7mdqo%2FR7D4ROf2mkWYKmJvrntqoPjp7VRp2Jq%2FVoP3p5cIO8e%2BHnEX3%2FBUINaxId9wyS4BKymsf2W84ZCJva4ajsP9ZFNYVuncWg5yga85yyYQcxvoc%2FeEP5MZ%2BSHGbODpEjZPOg1TM&X-Amz-Signature=82af334a174e54f4c77dc56a5316cbbf5c091bfd2435938416539a442c55d821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIJD6W3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCxX%2BBmEO8LvoHjfbUg6JkTA%2BMUkigdIp6szI0gNprlcQIhAN6hvzTWi5OChxE2vLSpvqo0rbn8kOZsstWBv2KyQscoKv8DCD0QABoMNjM3NDIzMTgzODA1IgwV3mH50Rv3Catb7U0q3AN8wQnR4uVlumfy9FpZ5aydV0qMf084ZNV9a6FnG9PlCNk033l695JTfPWG7oJn5ll0YNV2LYJX5TWveWUFpQaABjjs96r1YSnaUuIavOzxdM9KxEsHJGM03aDmNvqB3g8nTO3XrG0UnXvpdv985CuA98yvpFGH4skFzcYOM7ZtIECljHAizpo29ST9ZcwL6Bi5LPk5w5mOtdA5rWh2naVOYFc8p8%2B4JdmTHwIbVm%2FwmNkM0f0m34lSbKypeRp3ypCWbjDbug%2Fp48GSzLk%2FsKh0gFEHmvGx2r0KPHli8JSvj5l3zQYVGKpD8f%2FlmQQh7JhrQyrVCOEDT448Rfo2txc17SQa5Q26c9hS%2F30oc%2FlNYRDv6sjpwpP0WpfqGg7RR%2BI%2Fd7%2FaJSwx3narFkmK4A96hm6YmyynsKbulR6lhaIODhCCt%2BZDPmdeXXIHSDZOB9kyopMie7ZuYoxwR2xeahYLjaLgPeqPMUtMgy%2FoI8J9C27ZP5L4iJ1F0xIow2dT2q9g4WWOFtc1XBsfDvej9bvTMWfeu9uSv6jtndtbPDvJkTNPTg7unc37JMuthhkYbT6BfBax9r9oDFe6WGwgIZ5mCWdjEGgrZ1L8wr0yhn70sTICReTdgGoE38ejsTD9%2FrjCBjqkAY4RtpOFmTpziPs03%2FPiTQHfl2M9y5Tm20aNFag0z0rCXn2IFM40Br3tIw6koHGGTjEU0pisEajESF0qZbHxzlKeHdI4pTPs2RtxHzyOzD2B38RMjcsK9PpWbYEYy99SiuekToatAO92pUZeW%2F82lIZpKYmuSzJguImNBDe1B4iF9mTGXVJWk1y6xOLeOWlDZMNv%2FLKRGFIC3oMqlk27h88kbz%2FA&X-Amz-Signature=eee90275a288cadc0b39910737bdfc44017e17820a281a6753f808563757810d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
