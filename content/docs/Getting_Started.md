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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTFG233%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDejkP1%2B0yo%2BQHv%2BUCPqxr2BPO67m0ya40u5cb27fchiwIhAKm7BLgIan%2FV7dxWB0q%2BW%2FTobZSheTVcB%2B1bQkibcYPDKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlvMXzLCarzdfPm8q3APOLGSMFZtAiPPTvjIt740u%2B5Yby1Tbf0jzuS11NwfCoAWl2vb0iNjZfxf3C4maoIZHrtKeEaakICJCuHF5Ti7DaBk80ttYuD1KvojpabyG00VwkhvZTWq9f9jnmPo5FZCtBkjgkzNzYQ4xth2AZDxlyYn8nepOVPz4KYfK4xyv3fXvegqOP05deGNJVIQ5YDGHjYazl%2Bmzhkz3Q8TdeLIqs778ROA9skJ%2FLkSYZJ%2F%2BwoCzxbjWepVxalJs3%2Bx%2BAXPorqe9ED0jf5uf3xnlnoc8dWffz6JtlLDb44EAUITIX0w6LAHmLBFXhK3tnYNZVN%2BkgL%2BSFnA%2BUQ1vefJVo0w0RLsyasQ4UMbc0DT9AHaEXsY2MC1LhZAI14Q1ZNJ%2FB9zq10ytETEaM5dHDWHrQc%2BGw2x4LatrDTEInUMQNX41JXNSrjvK%2FLJN%2BsHUKVHh9bbdY8UnLihT8i6yj8CUml36ozFn2EoLnjpuAGGMkh9Ewe7xDrEa6db7%2FwbZsMhYVQPVAwdN%2BFT%2BF%2FREBq%2FvTEAKbi8Hc5FuYCZ7exDSXUAZK%2BbbHZc9sPDNLXknoSwjfll2R7uqI0sGCKQdhGOg%2F52ohIs%2BwtJAbny3Vq6BPf%2FByXdNdvZ0UNlsEomprjDU%2FYW%2FBjqkAbslfSFU0ww84vbkOYN2mU15cL%2BryUTRRBriQ9D%2F00mH31m18JsoBsvYuH4SspysFl5E%2BUc2Bod4ynmDNFzSI5NtyFt8oPsgA8jwUDBVHC62n2gG2INMFXkBykuzgiq%2F8ddTcrRcjMol6et5H5rE3yIZpZy8iP3LXcuaGHmP7br69uHiW4lz9mCuP91uPqr%2BaiHAKAKIa76RyWXlHRkiwULaM4Kd&X-Amz-Signature=ea34517760cb2b27b189a6a7fa4f16789257a12c47821cff6974ea8e6802ae3a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTFG233%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDejkP1%2B0yo%2BQHv%2BUCPqxr2BPO67m0ya40u5cb27fchiwIhAKm7BLgIan%2FV7dxWB0q%2BW%2FTobZSheTVcB%2B1bQkibcYPDKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlvMXzLCarzdfPm8q3APOLGSMFZtAiPPTvjIt740u%2B5Yby1Tbf0jzuS11NwfCoAWl2vb0iNjZfxf3C4maoIZHrtKeEaakICJCuHF5Ti7DaBk80ttYuD1KvojpabyG00VwkhvZTWq9f9jnmPo5FZCtBkjgkzNzYQ4xth2AZDxlyYn8nepOVPz4KYfK4xyv3fXvegqOP05deGNJVIQ5YDGHjYazl%2Bmzhkz3Q8TdeLIqs778ROA9skJ%2FLkSYZJ%2F%2BwoCzxbjWepVxalJs3%2Bx%2BAXPorqe9ED0jf5uf3xnlnoc8dWffz6JtlLDb44EAUITIX0w6LAHmLBFXhK3tnYNZVN%2BkgL%2BSFnA%2BUQ1vefJVo0w0RLsyasQ4UMbc0DT9AHaEXsY2MC1LhZAI14Q1ZNJ%2FB9zq10ytETEaM5dHDWHrQc%2BGw2x4LatrDTEInUMQNX41JXNSrjvK%2FLJN%2BsHUKVHh9bbdY8UnLihT8i6yj8CUml36ozFn2EoLnjpuAGGMkh9Ewe7xDrEa6db7%2FwbZsMhYVQPVAwdN%2BFT%2BF%2FREBq%2FvTEAKbi8Hc5FuYCZ7exDSXUAZK%2BbbHZc9sPDNLXknoSwjfll2R7uqI0sGCKQdhGOg%2F52ohIs%2BwtJAbny3Vq6BPf%2FByXdNdvZ0UNlsEomprjDU%2FYW%2FBjqkAbslfSFU0ww84vbkOYN2mU15cL%2BryUTRRBriQ9D%2F00mH31m18JsoBsvYuH4SspysFl5E%2BUc2Bod4ynmDNFzSI5NtyFt8oPsgA8jwUDBVHC62n2gG2INMFXkBykuzgiq%2F8ddTcrRcjMol6et5H5rE3yIZpZy8iP3LXcuaGHmP7br69uHiW4lz9mCuP91uPqr%2BaiHAKAKIa76RyWXlHRkiwULaM4Kd&X-Amz-Signature=3e0c9b49f8d36a1cd69defc9fa1c466397ec16a9f16915ffac88ed0ea01c5bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466224ZJMYK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJqu4h8vnjAdrvjfXHzjmPhctvKcDVpo%2Fsns7JGqNXlAiEAnutThTwFahyQ3Lp8QL%2BqqZUCycZvXnhC4hwTnOJBzxQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwIJ2NiT1TxueytYyrcAy9siAT%2BaaGfpnvPNnvXlIYS%2BQQs%2BCk52alSLdxMJaDoeKhCnLGeXQOv1CuRL4DtctVdKHlcJK%2BfBlLrdFDtdGGS9HbDqhiQ27alxM3V3OxTxNUwZHI4mwYABypOMfStuzhJSWcTPiWhqtQvJrP6o3If6aBt2ekLQBrbz1la5wOnhWdTpm7ugnHlitnCXH81TfGc1l6cVl9ggv%2FfbF7u%2BKZqBs%2BksUDk16i8%2F1G4X7mVgSLVzIJPf9otzm%2FDXoA46IzMHfyUE5J2eYh2vT6lY8ppCSBwFO569B8eUJfNRGV02s0cYBD3yUxRg9Q4jyubV2JcfbUlakqDVKPUP2VMJChFJwyDWYxb5d%2BH3pV6xAklLGUNEVhjIEvHB3k5NTOFzs9pbT%2FsBv%2BNE2eXoTwKAo%2FTwxPElb4PlRp4Gh9zn8lB8J2az%2FKvxiprIbuN8gyYfYqgbRrYzPb28VQcF998KLeSX%2FIIa77lZS8PEc6p5GExnGm4KY3LSAabM7uxJZVh4ecV0SXgxK80DoNzfUvsSF7m%2BZsBVUtfDDeg2Vw4RPjrmSpe8TW9q6RMlaC8xsGMmJ0EFjXLnzhfzcfbV16F2JM0XZWRncw9wFIAGCt93uxcho6hF3KOirlA0%2BHjML%2F9hb8GOqUBocdpgxdrsx8SuhAq9r4LOQa%2BBK8IK3SkZxjhKlXQxKhGGHy7kB98pXBDT%2BNKTqXk5H2V2gS5oWR3tUFDMcOH%2BZqgc4wu6OyaNHY%2FlBJ8Sk2dcqJj1xwDn56KdNfqHXihZvJn3vT1MBAMTPpUKSe9XMpZ%2BWpI2k%2BN6odGUbcCCMvzT6Dn9d%2FVoDc10gOCMwjQmCGZ2c6QUS%2FjxZRbXpkDYsNqjCyx&X-Amz-Signature=ace4d6f2ae79eea6cb20b2fe168406ca36546c63a38e2074bce5dc25b128d4a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLSUH4M%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtf8OxO58YDeD2yVp5mt7BpdYDFBELFle7pkSxIUvFeAiBd1fL21tNWgUheF6JmvmEA%2Bj%2BkVzqj%2Bu1UZWzpMmsSPSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMmgLTukL6RrENX1fKtwD5R2Etiknl84gpEi8Stxug4s2DK8lp2r58d6X5v%2F3f3929UN78VUSMI20nkboEXdbxOZGOREMXyhKT%2FwyqQbSv%2BuB7pPu97I73xIPWILl6TsYKgptIB2I%2FnIwYgpftIQvWYg3aLAUX2UPce4Z6jtp9ouqwJ3pgK9%2FumRXq8EPlvqIZXKs%2BPVZrUvoh6bg1t70chg81RNZtvFgfgLVPpeO9pa1vn0xYiKDtA%2FAC5sDOXenKiaHrDtRgGokzllJgirCQ637b%2Bc9aIDtBf5PrldnE6YZ0BPAP1jKOeR9SGvgUwGuPoy1ObHRapQOxFLe%2FNqU2hjv523tTGOV8UJF1OcyUpXHHj9U3xF52n5MmRNjcrm%2FnDzFs3uCX1cDj02YcHZSW9VUq8Rt39h7prPhYPujUMT817tiiA4vpKAm2df4%2Fygfo4LOwcOd75rRPPUBIAhEySF4WACT5i%2B6qDjcxP9THdpKB9tUAxbqj0Nl8KBtLwuCu1l5ugnCoHs6nhC20uR4W16KfttSIkJNP%2BmJZNEt%2B8xquHgiWRi8uPSy%2FP9EWJ7JP6ZqZaY2zTeHnN%2BJghz8C%2FPkjBAdbtdLklhwCeYgrza7J96qWdFo3qLCDuovOpSSNUFZ7iXpb8UL18IwsOGGvwY6pgGcKQ4kcRcAqJLenNdu7tBp8xEJLSt3wb5sV%2BbLiQzYac3a3jGzmaHt6KIyLLVwtUFTXcVyFOgae2qJK%2Fa4TLqxcF5TH7QM%2FeppDkzsAVl4JnzLu%2B27%2Bf1JFwA12o3OomGIgFI09gy2YEz5MA4erD4z57qH%2BwhIzRwPKn2V1PRLE%2FaS5BZlD5TA9K5ezq7x4c2Q7MJhuIgMiqZ2RqVJTVHD05RBg6AZ&X-Amz-Signature=02a0d57c08efb45256e72bddbbb0410fa6415993f19d5e7b6a33ec2f11220d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCTFG233%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDejkP1%2B0yo%2BQHv%2BUCPqxr2BPO67m0ya40u5cb27fchiwIhAKm7BLgIan%2FV7dxWB0q%2BW%2FTobZSheTVcB%2B1bQkibcYPDKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPlvMXzLCarzdfPm8q3APOLGSMFZtAiPPTvjIt740u%2B5Yby1Tbf0jzuS11NwfCoAWl2vb0iNjZfxf3C4maoIZHrtKeEaakICJCuHF5Ti7DaBk80ttYuD1KvojpabyG00VwkhvZTWq9f9jnmPo5FZCtBkjgkzNzYQ4xth2AZDxlyYn8nepOVPz4KYfK4xyv3fXvegqOP05deGNJVIQ5YDGHjYazl%2Bmzhkz3Q8TdeLIqs778ROA9skJ%2FLkSYZJ%2F%2BwoCzxbjWepVxalJs3%2Bx%2BAXPorqe9ED0jf5uf3xnlnoc8dWffz6JtlLDb44EAUITIX0w6LAHmLBFXhK3tnYNZVN%2BkgL%2BSFnA%2BUQ1vefJVo0w0RLsyasQ4UMbc0DT9AHaEXsY2MC1LhZAI14Q1ZNJ%2FB9zq10ytETEaM5dHDWHrQc%2BGw2x4LatrDTEInUMQNX41JXNSrjvK%2FLJN%2BsHUKVHh9bbdY8UnLihT8i6yj8CUml36ozFn2EoLnjpuAGGMkh9Ewe7xDrEa6db7%2FwbZsMhYVQPVAwdN%2BFT%2BF%2FREBq%2FvTEAKbi8Hc5FuYCZ7exDSXUAZK%2BbbHZc9sPDNLXknoSwjfll2R7uqI0sGCKQdhGOg%2F52ohIs%2BwtJAbny3Vq6BPf%2FByXdNdvZ0UNlsEomprjDU%2FYW%2FBjqkAbslfSFU0ww84vbkOYN2mU15cL%2BryUTRRBriQ9D%2F00mH31m18JsoBsvYuH4SspysFl5E%2BUc2Bod4ynmDNFzSI5NtyFt8oPsgA8jwUDBVHC62n2gG2INMFXkBykuzgiq%2F8ddTcrRcjMol6et5H5rE3yIZpZy8iP3LXcuaGHmP7br69uHiW4lz9mCuP91uPqr%2BaiHAKAKIa76RyWXlHRkiwULaM4Kd&X-Amz-Signature=ef1a2f8f8ed1a5903ffd621cd3853daf83ae84aa3d7be41ba4ea1b8cb434fe27&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
