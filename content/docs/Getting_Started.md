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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPDC6GF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC2%2BfQWEuz%2FNOWpf6avENS5z4bR5s%2B0F5bScsQJgMBQIgIhAM3H8BkXVk%2FonTcTLoSToqrFR7LzWEz8T6M%2FTI6YYd30Kv8DCHUQABoMNjM3NDIzMTgzODA1Igys1bwpQ1Fkr18WRMsq3AOZPRbZj7kQ%2BukezLg8vOiMWs2V2VrWbkz6Hz%2Bjpbx%2FMC5LjxeIAFLXHbOyPNhIbkg8TnOW95yUEj8GKNsCSHATZHsQCbZVCei5%2FS5UotoamluuC%2FGx0tgrN9WlveVkbcbOQswPR2%2BTmZIoyfjWBuD1w0zGuU7sH371Mv9vO72Mrudgoao80u6g9fvoy%2FdV9Mkx5yod4lk5nScL0AK3ZWEYynomPGsdZVq5MM7UbeQP8BRP0bIJXIE2R5LWwdvj2zXEBVp5%2Bzu8qmbG2x5sv1mSM%2BRg3ObqvPGipuJ6bkt7%2B72cgX5gQ7S2Y6zdOFtYrhOCwepI0ENm9aYnOCuORKT2Y9VwB40YlCNgg%2BEK96eNWe8jrqTCg3ErNSAIh0ohbw1kCovnuvErbVplOCeYMGJOR1730a1PtRypiogGPqSTxVcKoLU%2F8ZeHYbR12kqH8zQv3sqdyW7wndQBZbi5ECc%2FpWBj%2BexZi3VWZebCCN0Pr9tLdvlvnZTBgN6s48noZhhZR6YIUSUaa%2B50YOq0rWqamd6bD77I%2FB54ZeDYfuQYg0526kh4D4kLCOkJ7phMzMC88LeC9XTbcOQRK9bhDUyVgYXM4Im33XsrEEnVXYh9IxbK14%2FDmZ8g9tOfzzCLiLa%2BBjqkAWfzSgTCJGhXOJ6jn3e333BebDJSdFY0w6LVtK8V2yzQVX4zmFzPiILb3BZpL0ukf1pRrc5CWLxewpICuDIgg7VnAws1eCUf4ahFkU4Dtj5LRfouAnERmcZTNg%2BwADp6N1jBTvSjMnK9GTtcwb%2FUGs8Dt2CqUflHslN0WbJjNANOQGnTpb7j4al40sVYfW41q%2FqrYct%2BFC4bOVJR05Z%2FdUMpBlKK&X-Amz-Signature=12b3f7e1ee191b4caf990c45e444b4d27a5216b0f49131af98e53d5951e5fa5a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPDC6GF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC2%2BfQWEuz%2FNOWpf6avENS5z4bR5s%2B0F5bScsQJgMBQIgIhAM3H8BkXVk%2FonTcTLoSToqrFR7LzWEz8T6M%2FTI6YYd30Kv8DCHUQABoMNjM3NDIzMTgzODA1Igys1bwpQ1Fkr18WRMsq3AOZPRbZj7kQ%2BukezLg8vOiMWs2V2VrWbkz6Hz%2Bjpbx%2FMC5LjxeIAFLXHbOyPNhIbkg8TnOW95yUEj8GKNsCSHATZHsQCbZVCei5%2FS5UotoamluuC%2FGx0tgrN9WlveVkbcbOQswPR2%2BTmZIoyfjWBuD1w0zGuU7sH371Mv9vO72Mrudgoao80u6g9fvoy%2FdV9Mkx5yod4lk5nScL0AK3ZWEYynomPGsdZVq5MM7UbeQP8BRP0bIJXIE2R5LWwdvj2zXEBVp5%2Bzu8qmbG2x5sv1mSM%2BRg3ObqvPGipuJ6bkt7%2B72cgX5gQ7S2Y6zdOFtYrhOCwepI0ENm9aYnOCuORKT2Y9VwB40YlCNgg%2BEK96eNWe8jrqTCg3ErNSAIh0ohbw1kCovnuvErbVplOCeYMGJOR1730a1PtRypiogGPqSTxVcKoLU%2F8ZeHYbR12kqH8zQv3sqdyW7wndQBZbi5ECc%2FpWBj%2BexZi3VWZebCCN0Pr9tLdvlvnZTBgN6s48noZhhZR6YIUSUaa%2B50YOq0rWqamd6bD77I%2FB54ZeDYfuQYg0526kh4D4kLCOkJ7phMzMC88LeC9XTbcOQRK9bhDUyVgYXM4Im33XsrEEnVXYh9IxbK14%2FDmZ8g9tOfzzCLiLa%2BBjqkAWfzSgTCJGhXOJ6jn3e333BebDJSdFY0w6LVtK8V2yzQVX4zmFzPiILb3BZpL0ukf1pRrc5CWLxewpICuDIgg7VnAws1eCUf4ahFkU4Dtj5LRfouAnERmcZTNg%2BwADp6N1jBTvSjMnK9GTtcwb%2FUGs8Dt2CqUflHslN0WbJjNANOQGnTpb7j4al40sVYfW41q%2FqrYct%2BFC4bOVJR05Z%2FdUMpBlKK&X-Amz-Signature=c391218785e91a8cda2ec8a9df01d8de356f74042a9621c06a85c5e0e474f846&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466244SBOBF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCLo%2B5xq2T3VdEu6pB8EY2S%2BQwHQwp%2FY0j3b6EzXnfYYQIhAM30jDDy670fwAgncWyWagS8J8HLbmcCxxvidK9yXwApKv8DCHUQABoMNjM3NDIzMTgzODA1IgxvUfO%2BW%2F1xunbxDvwq3ANAfQ%2BtpMhQEGxg8BZfsIUjjorqYp%2B1wktiV3YSU0QOL80TX3n9fIG0fRW9E0DM4%2B2S4y2i9F82DJg16%2FHi3aabI2gkEq%2Bnj0zd3HI9sNQMfyWrdPHc6sWoaYGzCzcJB5Wpq%2BYfvBGLkRQEavZZZiLC1GC%2F2UqoevkAXz30vqSJ5OdEpuVtW1w6B8GiNd%2Bl4kYrgyLU8WNH14ldiciobudLxLMri9E8veQmZlgnxoXTUttcMOLEOG6Hci5x36n8%2BhfspuvLimTxfRksPgTf9ZpgEDumCzSh7bIi8C%2BlXFknLnpQxh1qtD8Up9OdfRjsSCwKLN3Y5jJdJAecc9maO6x3N5y7ede9E6HZG3dBmr3z%2FhPZnZslWRhk0hPtgjK4gmuv0koz3XPiOAc7plHRaAAGY7UUL07ekcTV%2BpWEJ74OU3J0do4K2A3q%2F2u2IPesytJteRlRAYMnwqtmndmZnYv0yrJHlHoab4MxNgEa6TSM%2F5Kdu7ME7iSGSjjsp4uPfUStWF5LUYJHiHPe7bufrFwMaBWjH0VkcQ%2F6zqJfvJpwOBhNhul0%2BPUEtf1mvk5GP9Ib9EN8cIhRMRSIzSu3MWAUkN2hG2EILO6W22PZYJZUmYT7acH9KgmMmSa1gzDwj7a%2BBjqkAYtaImesxRPGbjpHO%2FgZyDEJ00rro1mG1hC%2F008nK1EFY7tEjCDd8iPDkcn9hUPKwadtsZtrOWYReW%2FC%2FTvkdYQzpAqFLhQvDIZjHBmxhJijNt1qjHVU8Rb35ije2QavfUAGIvM9UFwMbn5aI7KMilQYHvEw8qIjARSefv1WRYpBoOcDHNZR0fcE7hwe7quwzT%2B3n1NqM%2BlM%2FV9Nvay1dWYuNteF&X-Amz-Signature=8152e7cc0138a8f1c552c9cf625cedc2da6d551c67ed7ce4072f65f5f1714cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2EBPMQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDjSBu%2BajHF0swIUr7ixibxcPrllO1sL6gLVZt9PVnlIQIhANuYJhwO%2Fr4HY9ebiaYp0pu5enOb5QdvZJrBdHNv31htKv8DCHUQABoMNjM3NDIzMTgzODA1Igx4zO1NK%2B0WF%2BVxXDgq3ANqqGj9hKoCxttW%2BJs5mNHSQmRAck55oJcuNvW%2BDCxPeWPgxlhHt4ehSN2zZ%2BlF2xLl%2B00roOIY2GoFPTAeYwKRF4rLbV74XdNxQU1aKidVJaNI6H6ujDNPUFYC39D2MCty8JPGyneBAQoI3JfKruJ%2FQPUgLgwek6ddhVvemfXDykOl1KUF2RCm0ORBoifWylt4dE8XS6NLersNgVHSWiMO%2F5UBAZCP%2BUkZGqv7NnLRJVUbRiTcwy5fxKwyHl9N1qOcAOXdQumU0XEHYXQckwbrP%2BP1W9tgE3egAAJEhtXkttZRk%2F4AImpjuSXjjipJVpaowaTT5U%2FR53NP6kgmwe8SENG6SUtwX1heBMjF%2FP11d%2B3FBdyMH%2FcmBHBiCacLsp2qXqDvY1bUfp0i5psDSTytjLzWs7Zyn29mWFdPTOMm%2BwnrlcPXGZ1V5J1mcNqfB7NMAhxm3snxZWdFiluEafLWD%2BlByP6qGIAUH13%2B2Bxarqz0g%2BKRDWoLyID2JDbI4QCb7t7%2F52ecmqa8kBqOtEdvYyoPPY7izoFSHLEtN%2FnpamBUD7g1Gq9EdL%2BWEs4r8XwhCLcPH23hOUJZYM8F9mRoDaKO%2BdhDvzyC9QbinMVod4xeBH3McNtfoP%2FIfjCb%2B7W%2BBjqkAcbHEb2aUma0Gj9ih6lOT0cK6G5TaDcpu2AW%2B9aYHv6q%2FGsan9PlQHTm%2Fo8CgDz2qf4LKc8aYrUGAfAORSfA1NKwATods9LWI9cBZxQJtP7PxEDsRUO3KOjJgZhAVlNMndtAw1E%2FFr45SI6rS%2BoZuUmbGj2I1bx3xnXdyewm0yYw5icdOTZ3vqWFDDWP4wOgDHLwvHg3s9QKR8dHwU4Y2WSkTTdM&X-Amz-Signature=8b49f3327987b1b3f1c3fc41fc387c22924bec162671abad0934504517c62b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WPDC6GF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC2%2BfQWEuz%2FNOWpf6avENS5z4bR5s%2B0F5bScsQJgMBQIgIhAM3H8BkXVk%2FonTcTLoSToqrFR7LzWEz8T6M%2FTI6YYd30Kv8DCHUQABoMNjM3NDIzMTgzODA1Igys1bwpQ1Fkr18WRMsq3AOZPRbZj7kQ%2BukezLg8vOiMWs2V2VrWbkz6Hz%2Bjpbx%2FMC5LjxeIAFLXHbOyPNhIbkg8TnOW95yUEj8GKNsCSHATZHsQCbZVCei5%2FS5UotoamluuC%2FGx0tgrN9WlveVkbcbOQswPR2%2BTmZIoyfjWBuD1w0zGuU7sH371Mv9vO72Mrudgoao80u6g9fvoy%2FdV9Mkx5yod4lk5nScL0AK3ZWEYynomPGsdZVq5MM7UbeQP8BRP0bIJXIE2R5LWwdvj2zXEBVp5%2Bzu8qmbG2x5sv1mSM%2BRg3ObqvPGipuJ6bkt7%2B72cgX5gQ7S2Y6zdOFtYrhOCwepI0ENm9aYnOCuORKT2Y9VwB40YlCNgg%2BEK96eNWe8jrqTCg3ErNSAIh0ohbw1kCovnuvErbVplOCeYMGJOR1730a1PtRypiogGPqSTxVcKoLU%2F8ZeHYbR12kqH8zQv3sqdyW7wndQBZbi5ECc%2FpWBj%2BexZi3VWZebCCN0Pr9tLdvlvnZTBgN6s48noZhhZR6YIUSUaa%2B50YOq0rWqamd6bD77I%2FB54ZeDYfuQYg0526kh4D4kLCOkJ7phMzMC88LeC9XTbcOQRK9bhDUyVgYXM4Im33XsrEEnVXYh9IxbK14%2FDmZ8g9tOfzzCLiLa%2BBjqkAWfzSgTCJGhXOJ6jn3e333BebDJSdFY0w6LVtK8V2yzQVX4zmFzPiILb3BZpL0ukf1pRrc5CWLxewpICuDIgg7VnAws1eCUf4ahFkU4Dtj5LRfouAnERmcZTNg%2BwADp6N1jBTvSjMnK9GTtcwb%2FUGs8Dt2CqUflHslN0WbJjNANOQGnTpb7j4al40sVYfW41q%2FqrYct%2BFC4bOVJR05Z%2FdUMpBlKK&X-Amz-Signature=002317d616d69971e38d60cab496880ab4d013b1ca448ea632d9a99136f7a38a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
