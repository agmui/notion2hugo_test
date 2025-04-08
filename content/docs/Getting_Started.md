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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UPHCAFU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyud75s4ML6PAeLDVaQxxm9pCq%2BkfJdirzsfdQiug1dwIhANDr5NGTeVPwpAoquitcUPrvyHLUSPELYf4bS55N%2BlmnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxlubUcdlxc470jCZ0q3AO%2F2FZOKfbSXu7Zh02c%2FnaHRDBBPRvLqA8Zus20AdzWXS9wdi%2Ffbj7R4c6ZFE0Y%2FFTZcL5U%2BviO%2Bc34hXFHOxBQJd5l8hqFuJeYvuWj0x5AullzFHjw7jjydHA%2F9NCkNmtZ8L3QyEmkq87H8faZUFvLCsxsGE7lhXNeeePzZLunkUe1rbxcPKVkgOjDydL2dWm2sXhCiOOAV6NbEWqjdWrp%2FCGQBE3jgYe%2BlT9A5eMShpEWOnTPIhdjfu%2BWL6nwo%2BAFpSoFr%2BTYQjYcw98uCJQVwIO%2FxfidW6gqw%2F74mDrSlI0Fi51KZEzxWAeZKyIpMWrd0xh4VO6a3LFcc4iAq8a77XpIEU6MvsChg8XZq%2BJqQo7hRxpEbM5D5n2ohW2j5zi4v8zJPDI6i9XPTlUmjg8eo7NcqybgGVvIxyobW6dBkXA1zSdUSke5GuSiXUcOg3Bx4nFi3YfVWBVCgYNhKDFFCRN46prbrTjHlqrFsuGlLuo5bOWU0s7KSkdf4w0VZ1Sc0gR1ZIxkMnYx056zKr7umtO6Dn0w%2Fs7E8ZI6zzC32oI0Quj6gKRL7gTB1rxizqyBmRYOeo6MdC7pW%2BuLBNxs2z%2FumJUq%2BB0xnH3rj%2BhbVyiz%2BIUgFuQ4W31sSjC7vNO%2FBjqkAdaDrzbAY2RB6M2ojl45OMZz6CeNyTOwv0PsCdfnJz8f2NitSWg2nu%2BYdLkSDOzs8LE5%2BCtVsBl7k02ncoNa1GdAwIt%2FpdtRgyWDMjszvPDURUIIAYpeZnoasfZzF8b%2B%2FTv3SM9CVZ71OxmPiH7C14cbtjj6DQIMVxBB%2Fd4ocf6q6524KbBmVmEfueArxZ2xtSMDFPYw4vyQoVxxgP2JchWOb%2BfX&X-Amz-Signature=b56079347f270c14257b9964275586b68c18698e164287143151d82ae1dedcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UPHCAFU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyud75s4ML6PAeLDVaQxxm9pCq%2BkfJdirzsfdQiug1dwIhANDr5NGTeVPwpAoquitcUPrvyHLUSPELYf4bS55N%2BlmnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxlubUcdlxc470jCZ0q3AO%2F2FZOKfbSXu7Zh02c%2FnaHRDBBPRvLqA8Zus20AdzWXS9wdi%2Ffbj7R4c6ZFE0Y%2FFTZcL5U%2BviO%2Bc34hXFHOxBQJd5l8hqFuJeYvuWj0x5AullzFHjw7jjydHA%2F9NCkNmtZ8L3QyEmkq87H8faZUFvLCsxsGE7lhXNeeePzZLunkUe1rbxcPKVkgOjDydL2dWm2sXhCiOOAV6NbEWqjdWrp%2FCGQBE3jgYe%2BlT9A5eMShpEWOnTPIhdjfu%2BWL6nwo%2BAFpSoFr%2BTYQjYcw98uCJQVwIO%2FxfidW6gqw%2F74mDrSlI0Fi51KZEzxWAeZKyIpMWrd0xh4VO6a3LFcc4iAq8a77XpIEU6MvsChg8XZq%2BJqQo7hRxpEbM5D5n2ohW2j5zi4v8zJPDI6i9XPTlUmjg8eo7NcqybgGVvIxyobW6dBkXA1zSdUSke5GuSiXUcOg3Bx4nFi3YfVWBVCgYNhKDFFCRN46prbrTjHlqrFsuGlLuo5bOWU0s7KSkdf4w0VZ1Sc0gR1ZIxkMnYx056zKr7umtO6Dn0w%2Fs7E8ZI6zzC32oI0Quj6gKRL7gTB1rxizqyBmRYOeo6MdC7pW%2BuLBNxs2z%2FumJUq%2BB0xnH3rj%2BhbVyiz%2BIUgFuQ4W31sSjC7vNO%2FBjqkAdaDrzbAY2RB6M2ojl45OMZz6CeNyTOwv0PsCdfnJz8f2NitSWg2nu%2BYdLkSDOzs8LE5%2BCtVsBl7k02ncoNa1GdAwIt%2FpdtRgyWDMjszvPDURUIIAYpeZnoasfZzF8b%2B%2FTv3SM9CVZ71OxmPiH7C14cbtjj6DQIMVxBB%2Fd4ocf6q6524KbBmVmEfueArxZ2xtSMDFPYw4vyQoVxxgP2JchWOb%2BfX&X-Amz-Signature=cc2a5200d4dd34ec5a673557260c5d4872b782b8fd2eccbcc64bbbf63159cb41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HZGQ3U6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhg0RYnJrdPhx%2FepCo7jQxMi9xIkRGl4jLKRRcELzFlAiARuQY2TBF5PNd%2B59DGTeQuESi1aJwJ7vPtyEZY0DbTKyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMC45SBiUJYoXkIKoNKtwD7ZPBjWb0qSHA%2BbfADm5cQjn7DnruSBYwamD4fmD8UPRi6LJNYtHASaQbrmDWSsBXv%2FoiM5f5HbC4LPKtnKXdjv1kcD6qyihVPO8CHpe4BjNyr2kue8C5UuNP2L94nyaKn0j4QeTjMhLrwk3ph8%2Bs62r54A%2FJPRpqcgzC5Z4lD4RM77bxdJCpC5TDvsC1jK85JR%2BM9dPCkAjPFQFjK8QNLnMHRH9k2NNG6zmfYx2Nh2P9ieZpOhEVhA8d%2BgDHaKZG3qz%2BZKkd3epgdcWD7P3PV2fRrT18uzlO%2Fc9Hy8DdLYRb4zRv3iTQIsEg7bh4IobhHC0Z2rOv8UCPxtuRThqNkNxgU2gEcsjImqllkzVVyA2ubfNBHJi1L3m0tskVw6vbb2tr0yTRByDHKMeT8OGBs7iFmmwWLJosYh3rUGt%2BXrI1eVzT%2FUf%2BGHDmxOV41ifdq0%2BA0WyYOyG52%2BQZXwZmJTCu%2BOqafkHdqIT5z4BWh%2B1SAZzhtzvv%2FAQ%2BvVmH7w03ZYAIKVk%2FwlyOf7L3A4WbKQPx%2FPoJ3VCiVCpO7uwisl9IbRyz2%2Fg2BCjdZnOH0nFrly%2BsBjvFdk%2BaJQEdSklre%2Bfmr3ZkTI7vopg1jc%2F3Ylw1bhCjXHn5CKuasVsw5rvTvwY6pgHPOIpbgoV4jwKO8AetqhXGSIPB7%2Fk6wgFPjFcSLh74iZ0RDViH1Mq8iZpFbE9QmYS0bJctePLP3zu5zzRoYXzZHrTrQMAnT28VM2HJSVBOsjHJsiZD5FWMw1IDIMLf1fXFNltjUONX7PGdnEnUdCVgtNk6KjP4Kd4bz%2FmFaafBdVFiQe14UY%2BOP04Vr3Cxcvj0V32V6bdmumhOOX2rUsPeF5uMgGXu&X-Amz-Signature=29435bdf2127f758a344bc7cee097a316ce65e1cf7066552928c52caf995b994&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFZI2QYH%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICG8a1xgom3A4Q%2FC%2FpxhE7KVchMRw8%2FzU5dtsNAJpw69AiEA4FTci6ap%2FZSoaCrUFvUdk8e2u%2BuKarxw%2Btdsx1mWQWwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCY9RJcVfLF4vYHtACrcA4AD2WM2q21%2BB%2BxVS4UOV50WrEBHSlU2BWQ%2Bte2uHac1VLQW52B%2F85QiCwXtP%2Fqr3Do2uMbCbHh9AeCc9Dj8FToxhVUbdsM2By2gFKp689HWPb04qc2ef%2Be3uXFiiQNlFK7jBLoeNXwBxIUi%2BiN8%2FLLdHZwr%2FfoOaQYfJ4bs5oQghtxVxAj%2BTAcW9Bj3u3j5fCl865%2Fp6CXpFf%2FXX52FyBAaUPbY0tlOrHK%2B52Ma8wsYTpbVdoH4Q3AGcA6z7p%2Bu%2FoKQAUXikYVdkYB4WRVqf71K1mNAWaU9Z1qPkdmsXm0DZjwhZPm8yRa71kY7NM8ET9U6D2fembQwTMIvcbwxv85GHKxTvRs6a6mmsOdbjy7iFcKkG9yfCLx38I041%2BjtkhvY8vD78a%2Bl%2BDQunky17728rTidcuPXhChkS6oxSw1XZOsWYzV2ffR997o8nERjGCxmebVNOSEHv2n6gGEk2NcfCTaQwKCPP4vxlDoHErvxP4y66OLJvG0j5ulp%2BxCb4VBY32Qgpun90omg14nnIKV5iSboIKrtNoIHCXFS4SxZZGRjlq6rO5dY64pPiSkEb33ui7Hl%2FmtJfuMmIaY6hTgR22DTLKwwoM5vsdwRx9pVxGgxaQwSchXAKnjUMM%2B8078GOqUB3R6iyEiImW3g4ZKBpXgFZkOmo%2FSzSF9HBUznBYLyjvqBcrcJQUub%2BXIcXq2efoue3wK8%2F2GygHnlK%2BZfeUjb7OW0rG9hdmuuYAylNAJGj7mvoCKLRVUyeiiDxwuPmuRI%2F44dLenPhFmivc6UT1x9wJY9ANu5X607hzPqnoUPJ7dUtKQXd6yKl%2BOvxfbhFcu5cc10OlKO1r4SXBhMbkQFH960N4GL&X-Amz-Signature=c72e1264d35610ed929b79902a82a965e9ee27878d80498885e9688781cefc95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UPHCAFU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyud75s4ML6PAeLDVaQxxm9pCq%2BkfJdirzsfdQiug1dwIhANDr5NGTeVPwpAoquitcUPrvyHLUSPELYf4bS55N%2BlmnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxlubUcdlxc470jCZ0q3AO%2F2FZOKfbSXu7Zh02c%2FnaHRDBBPRvLqA8Zus20AdzWXS9wdi%2Ffbj7R4c6ZFE0Y%2FFTZcL5U%2BviO%2Bc34hXFHOxBQJd5l8hqFuJeYvuWj0x5AullzFHjw7jjydHA%2F9NCkNmtZ8L3QyEmkq87H8faZUFvLCsxsGE7lhXNeeePzZLunkUe1rbxcPKVkgOjDydL2dWm2sXhCiOOAV6NbEWqjdWrp%2FCGQBE3jgYe%2BlT9A5eMShpEWOnTPIhdjfu%2BWL6nwo%2BAFpSoFr%2BTYQjYcw98uCJQVwIO%2FxfidW6gqw%2F74mDrSlI0Fi51KZEzxWAeZKyIpMWrd0xh4VO6a3LFcc4iAq8a77XpIEU6MvsChg8XZq%2BJqQo7hRxpEbM5D5n2ohW2j5zi4v8zJPDI6i9XPTlUmjg8eo7NcqybgGVvIxyobW6dBkXA1zSdUSke5GuSiXUcOg3Bx4nFi3YfVWBVCgYNhKDFFCRN46prbrTjHlqrFsuGlLuo5bOWU0s7KSkdf4w0VZ1Sc0gR1ZIxkMnYx056zKr7umtO6Dn0w%2Fs7E8ZI6zzC32oI0Quj6gKRL7gTB1rxizqyBmRYOeo6MdC7pW%2BuLBNxs2z%2FumJUq%2BB0xnH3rj%2BhbVyiz%2BIUgFuQ4W31sSjC7vNO%2FBjqkAdaDrzbAY2RB6M2ojl45OMZz6CeNyTOwv0PsCdfnJz8f2NitSWg2nu%2BYdLkSDOzs8LE5%2BCtVsBl7k02ncoNa1GdAwIt%2FpdtRgyWDMjszvPDURUIIAYpeZnoasfZzF8b%2B%2FTv3SM9CVZ71OxmPiH7C14cbtjj6DQIMVxBB%2Fd4ocf6q6524KbBmVmEfueArxZ2xtSMDFPYw4vyQoVxxgP2JchWOb%2BfX&X-Amz-Signature=5c37c3f3f4be548f971124a10a29fcb0c0f6527b2684ec991d7a16df1eb3392d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
