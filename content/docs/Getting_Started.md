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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEFYWKX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDgdio5Nc5Ztg2ZwUlduGu%2FjtwlTytSIzcG%2Fbf01CXKtQIgWBwN94JYVNOOGcTkqZuT9z81936IQor%2FKCX8UUWdEJQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFDoXnkROYQ%2F%2BkJYXSrcAxQluvEZaBkWt44mBKhy0%2FX9H37EdItHc9qheKIBBhSr75a2RiSNI6g7pmZFOla%2Bwb4Gv8POJO0fe%2BeQF3zfU5uiBaDa6F7khw1t%2Bxjy3HLpEV5D1rzeN4lf0Tkd47B61wgtYHWQGtXXhMdSGSmDj8o3UwmpJ9hljxo%2B0wUrZ%2BUzMmDgizGwyXiQ3aLUUP1AVT74pVphBde3b1TOySSy0RuyDa7ZjrNFd%2BQfAr7UcxGAkg0bgp24RwQigfI7M83iCu5GZa5IySds985wKE6AognDCAwkMijtJCmF10QfpjtFZf46LmRm5j6btjmFpikyNCyXmW44I84Ddq9AeeEYObpVYb3rg1P3u%2FaC4rySZqaHpWRCSH5wvk7lGW2FXaq%2BlWyzu9BdoGs6m7klW5EPoVRVAZLJ8rXc8MuDJa6F5pLLtzm5JqaZpY9tHDEs%2BRdrsJl%2B3etzLnjS3WM%2F%2BA8b4W78eh1lGaTfY5i0Tke9EzMiR4nF6i3UWz5o6jJmSDi%2FZ56OpvgejsvojwW6oh1NyXjUwuy81cstcSHKu2X%2B3WtTTrGMpxuAShtzFUXkHlljmm2AFaFmJsZNUskAgORHbe%2Fgsbu7%2FIkEcusqMneSq8C0UE%2FyTfxRouTl14VoMIjY%2Fr0GOqUBsJsce3csSIc3wsJ1OwYx7oibvxGMxS%2FWs50TTN0BA8y%2FnQQYzBFknl3eegkFQbZVFArTE77jQdHejvjMJZD%2F39vy7sf3tFzRcBCbUN767PDcBS3BZAOSjnB47xVVCp%2BaRwkkalkucaJf0GHYx%2FlTI9H%2BRn0SEDgrIL1%2BT31zJMDcRgxXpNkrjTqbysSbP%2FT%2FlUrGWXsy8tvjuNZECdBQcVp6E4Hi&X-Amz-Signature=58f10cf14e4ae37c719ca2049fd5d66636d603805c86263e3cc2987d14881182&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEFYWKX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDgdio5Nc5Ztg2ZwUlduGu%2FjtwlTytSIzcG%2Fbf01CXKtQIgWBwN94JYVNOOGcTkqZuT9z81936IQor%2FKCX8UUWdEJQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFDoXnkROYQ%2F%2BkJYXSrcAxQluvEZaBkWt44mBKhy0%2FX9H37EdItHc9qheKIBBhSr75a2RiSNI6g7pmZFOla%2Bwb4Gv8POJO0fe%2BeQF3zfU5uiBaDa6F7khw1t%2Bxjy3HLpEV5D1rzeN4lf0Tkd47B61wgtYHWQGtXXhMdSGSmDj8o3UwmpJ9hljxo%2B0wUrZ%2BUzMmDgizGwyXiQ3aLUUP1AVT74pVphBde3b1TOySSy0RuyDa7ZjrNFd%2BQfAr7UcxGAkg0bgp24RwQigfI7M83iCu5GZa5IySds985wKE6AognDCAwkMijtJCmF10QfpjtFZf46LmRm5j6btjmFpikyNCyXmW44I84Ddq9AeeEYObpVYb3rg1P3u%2FaC4rySZqaHpWRCSH5wvk7lGW2FXaq%2BlWyzu9BdoGs6m7klW5EPoVRVAZLJ8rXc8MuDJa6F5pLLtzm5JqaZpY9tHDEs%2BRdrsJl%2B3etzLnjS3WM%2F%2BA8b4W78eh1lGaTfY5i0Tke9EzMiR4nF6i3UWz5o6jJmSDi%2FZ56OpvgejsvojwW6oh1NyXjUwuy81cstcSHKu2X%2B3WtTTrGMpxuAShtzFUXkHlljmm2AFaFmJsZNUskAgORHbe%2Fgsbu7%2FIkEcusqMneSq8C0UE%2FyTfxRouTl14VoMIjY%2Fr0GOqUBsJsce3csSIc3wsJ1OwYx7oibvxGMxS%2FWs50TTN0BA8y%2FnQQYzBFknl3eegkFQbZVFArTE77jQdHejvjMJZD%2F39vy7sf3tFzRcBCbUN767PDcBS3BZAOSjnB47xVVCp%2BaRwkkalkucaJf0GHYx%2FlTI9H%2BRn0SEDgrIL1%2BT31zJMDcRgxXpNkrjTqbysSbP%2FT%2FlUrGWXsy8tvjuNZECdBQcVp6E4Hi&X-Amz-Signature=c5f0058b3210ff4caa677543bbaa27a50952746c27c04c6b584911e0313a803d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JUGCPWP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEFhK1BsNyy0Dg72d9xRmyDERpdQ3UOXg4Wz%2Ba%2Fr1S2QAiAckLs9fle9JQWHXTg%2Bm%2BP%2FOO8RJSYrOORH4Pfm1jEfEir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMSV5cC9aOROTMTn5%2BKtwDVu%2FFY6LC1WmerMsapfnzpM76lvqxZche8ZhXSFiDd27MZKraxSch1EEk648XvB7qHHDPTBTKevakd0RSlivNCx8dbZ6RSXeUfWJ35ChjpgMTVWbUeBe1HP76O3q0B3%2BAHkoKH5N09vAAzGSEwgaIZBX1fgdzWwnxnq60a9M%2BI2ItpW3m1XMUFOLhQLkmAxdJjTsdwk8oEWAMXL2zb5tr2HVQu5kSWQEPZCPdm6hGxInJcyc2hAgHHKNKiHF%2Fd9yHCO8DDQv4oz4HJqdtRrGMH5NpCKIPVbJrwsZTiT9gTzvUfbNUgR32fD7NiMPIgjzvrpD5kg4yZcIz4t6eYFYDdvgTN%2F%2FJ7WOX5hRPjLC3rDUMikgJlSTSFiyZgQhHja2rJw6OWOC%2BR5No%2Bcbaq5ptjMmrdl1gxJm%2BPq%2F4rPMAi%2FFg5ftEHsZnJTKjgEMMISVNpbhwVOwbXXAv9pzAxEcXxMV1iRTI9Gtg9eEDyFonUFcTuhC5c8RxyU67Z%2FPpejgVq0qmyeEdL3qkk%2FyG9TRAzFtCZ9c2k7P6JZdbBaFMfBGLlf5uw5kwjqLuZNE8Sh09SBElZB5meCVludkHyAbP8WBYkc%2B797p%2BqXs7tLblCHFPEiiRvBPq1VqNg5YwrNj%2BvQY6pgEOnXK%2B%2FOD3nswIvrc2iYqe0Nplu37A1%2ByrKJ9aXMQMa%2BqpfdWx%2Ffta7Biw324iaRZ8IP5KWRKzA8z%2BqAPyp%2BajSD%2Fv5VbhP%2F8Bsz9%2BdsPArnhXx9TccTmzR%2FjMFGXEKM656J6xU9ber4cIlWfl21Opsl0Rg4CRJkpJSnYfRcPs5YJlsId0AIgYzTwxYDSBbmipYiiNpxfLOoeC1IRN23zglmYNeSZR&X-Amz-Signature=3291c292b7bce296d5b84aa11bef83234e591bae76bd18d434ae6a4f99748be0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NUFRSXI%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDBdbu7nakpfRBh8HcNu03ooFxvVZ3kL2xR6crXhpgsEAIhAJyCpHFsQZPFGHtu1aCxuPmD9%2BHavGyfoEtjvkn4SJawKv8DCGkQABoMNjM3NDIzMTgzODA1IgyKSJeSP50B5RrFtc8q3ANwC8yU0dYRSCgnlQX%2BrvDqyBDb3fcXZ%2BsxbyycC4eYg5soDQRc6Xu51ApNxZkrh%2FisFVATMzTQWXvHmYCVU8%2FNe0w3r8nWRLc4wHMYJJpRN9FRacmkiN8lCrnyKD3opHFH69ZWmQ9yjtPd8INWLGcBDesevXIxNMkE4et4xRJPCBvrp%2FOqsgooTcy9JId9TdWVxqx7isWEN1yDvBURLeXhph3efqYINhZYKVofpJET1Rex1pqyaAbD0mLKSLVD1WimD3J%2BPVDq%2FLNqZZ5akt9Nj1c7i3jL%2BFT6yPTe8Qkt6c1SbK6YRVH%2BRXKI8VpV7BC8Ik2veAHhgNXz1I0x8q8nu6CMMVLd7AovB7%2Bcp4gReJLu3Kx9L0Yed5EvE2Lf3BxQuq15fi6ssDOup%2FnlpFJaebM18%2BMigYesIogDStb5g0u%2BWG5WVf2nE91xyPU%2BreDrIau8beijDpTHUHtPWYeq8hnP3jK8aX73Puykhr8eanNZJ308rxpln6R%2F0eld8Pr2I02K8YsnRQYSzBdkdd9BMhGoF2laIj7UySzC%2BSrB8yC62JfzI8ev%2B8DfTfJfJsvQmzT%2BFAas29liafIrZ0qv90zio9hV52fIxLEboWHbASC3S9Rf65ZkWsOz9zCm2P69BjqkAXEI8adq2SO6vQpFFVN7COt%2BxqRUfdCQhO3Q6l9RbMXSdevxf44z07reBU2M0Bd2MMXqV1XOhZOLWU1CYaJPgnqO37XNMlWpaiRHDnZr04yHkE4gvRPSCLnVHG5e3RaOLg5J%2FqLrTDVw6BXoyEPy1TqANYeVL4ng%2FyyolaXzM%2Fj3bKc0fXNXwKJWCJMxIkpl6TJG5oZp0pG30aZa0v%2BfQiXo3r%2FR&X-Amz-Signature=a55a4565523d13da2a8a8325804792bc3279d0635efadf16703370ae25ddd142&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEFYWKX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDgdio5Nc5Ztg2ZwUlduGu%2FjtwlTytSIzcG%2Fbf01CXKtQIgWBwN94JYVNOOGcTkqZuT9z81936IQor%2FKCX8UUWdEJQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFDoXnkROYQ%2F%2BkJYXSrcAxQluvEZaBkWt44mBKhy0%2FX9H37EdItHc9qheKIBBhSr75a2RiSNI6g7pmZFOla%2Bwb4Gv8POJO0fe%2BeQF3zfU5uiBaDa6F7khw1t%2Bxjy3HLpEV5D1rzeN4lf0Tkd47B61wgtYHWQGtXXhMdSGSmDj8o3UwmpJ9hljxo%2B0wUrZ%2BUzMmDgizGwyXiQ3aLUUP1AVT74pVphBde3b1TOySSy0RuyDa7ZjrNFd%2BQfAr7UcxGAkg0bgp24RwQigfI7M83iCu5GZa5IySds985wKE6AognDCAwkMijtJCmF10QfpjtFZf46LmRm5j6btjmFpikyNCyXmW44I84Ddq9AeeEYObpVYb3rg1P3u%2FaC4rySZqaHpWRCSH5wvk7lGW2FXaq%2BlWyzu9BdoGs6m7klW5EPoVRVAZLJ8rXc8MuDJa6F5pLLtzm5JqaZpY9tHDEs%2BRdrsJl%2B3etzLnjS3WM%2F%2BA8b4W78eh1lGaTfY5i0Tke9EzMiR4nF6i3UWz5o6jJmSDi%2FZ56OpvgejsvojwW6oh1NyXjUwuy81cstcSHKu2X%2B3WtTTrGMpxuAShtzFUXkHlljmm2AFaFmJsZNUskAgORHbe%2Fgsbu7%2FIkEcusqMneSq8C0UE%2FyTfxRouTl14VoMIjY%2Fr0GOqUBsJsce3csSIc3wsJ1OwYx7oibvxGMxS%2FWs50TTN0BA8y%2FnQQYzBFknl3eegkFQbZVFArTE77jQdHejvjMJZD%2F39vy7sf3tFzRcBCbUN767PDcBS3BZAOSjnB47xVVCp%2BaRwkkalkucaJf0GHYx%2FlTI9H%2BRn0SEDgrIL1%2BT31zJMDcRgxXpNkrjTqbysSbP%2FT%2FlUrGWXsy8tvjuNZECdBQcVp6E4Hi&X-Amz-Signature=f9513d8eb31f7b11639c5556fb80b9fd6b1634741c2bd0558c7bef3951349662&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
