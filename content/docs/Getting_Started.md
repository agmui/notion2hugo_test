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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3N73W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICru8FP3rX5MQl47brtcXtkDFR5J4MMDanJ4cE%2B45nyUAiAnpgGJ2YoRkG2UyYxPSllrnT%2FooIhQ9Vagc%2BYxUMCelyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbehIz53f19EfHVEKtwDWlsHcLwD%2FGi0xLLipiGjEdJkFihczghZdeZ9YxXNB9u5PGKduBDmdvLYZXYSups9hsbitq2UE0YcvFN2LYyhFj20H2J%2FtxP3XAXoNUi%2B2UnnwmLtjOdpzAySvS6gg%2BKJobE0TGAgvFBzgsjdk93lrYlxEh2w%2F0CUyDXPzPxhZE%2B3%2FfxUmLt0CoHrXyGNxASpj9TYeN8xuYJWQLnsaIFpwz6dgZ0gFVBQz7I7L7EtZ9cvion6uGhLqp2eWW8kcKijZM%2FqpQXVm%2BD4V9%2BJT1bAuCIju1ysCJlpZQ447ADIiOps1HIRnRFJHSs14XJNK2Gn%2B7YIEF5rhyyIf%2B9LgVg3wOl2yjGO3q4HvGqrXUZExJb1TfLKT76lNZlxPkMSgavzhoGiihBCUdFsXohz1qwfgzDmppH8rJZRJQmzxcOrJMgg5K11lDUY3tuVWpvqrLpfFnEQwcCgB0EqzY%2FMs8JKS7uVNIMCr66EfD5ADfHo6UFi%2FY6RELqpEwVExOabBgInurVCwolhPDU3hDJ1wKWtANT%2F0%2Fn%2FDKUOjyg11WdTE6TDSThZ1cMfWKExCyrORGLGxm98nqr0M5LFGBAonmFyivkIVSTgJqmo%2FcuLC190AnVmRBqH%2BRTfDFyaFzowmeXhvQY6pgHWmUX52d5PxOdwTytixpIFIS%2BAJp7hzDExc%2BJcGNqxH4h2eIKgEDZCFwx%2FJsp4neHIPDlwJT8RjuhRzpcZJT%2Fz2OdLe%2BQYDgXPpfM0LaqgaqZ1tho9yDNogPwUAwscqYfvxQ1mL3WogDB%2FIKRmwElYsyFKIuxOR%2FPEfylLT%2F9EJAQy8jok2BAO48nC1ADtqWlxptYote4eT2RyPQvzbb0JC2WXwFdY&X-Amz-Signature=b8333581408d1359c13bc763d1ef654cb525360e70b6abfc1151aa692964bf83&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3N73W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICru8FP3rX5MQl47brtcXtkDFR5J4MMDanJ4cE%2B45nyUAiAnpgGJ2YoRkG2UyYxPSllrnT%2FooIhQ9Vagc%2BYxUMCelyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbehIz53f19EfHVEKtwDWlsHcLwD%2FGi0xLLipiGjEdJkFihczghZdeZ9YxXNB9u5PGKduBDmdvLYZXYSups9hsbitq2UE0YcvFN2LYyhFj20H2J%2FtxP3XAXoNUi%2B2UnnwmLtjOdpzAySvS6gg%2BKJobE0TGAgvFBzgsjdk93lrYlxEh2w%2F0CUyDXPzPxhZE%2B3%2FfxUmLt0CoHrXyGNxASpj9TYeN8xuYJWQLnsaIFpwz6dgZ0gFVBQz7I7L7EtZ9cvion6uGhLqp2eWW8kcKijZM%2FqpQXVm%2BD4V9%2BJT1bAuCIju1ysCJlpZQ447ADIiOps1HIRnRFJHSs14XJNK2Gn%2B7YIEF5rhyyIf%2B9LgVg3wOl2yjGO3q4HvGqrXUZExJb1TfLKT76lNZlxPkMSgavzhoGiihBCUdFsXohz1qwfgzDmppH8rJZRJQmzxcOrJMgg5K11lDUY3tuVWpvqrLpfFnEQwcCgB0EqzY%2FMs8JKS7uVNIMCr66EfD5ADfHo6UFi%2FY6RELqpEwVExOabBgInurVCwolhPDU3hDJ1wKWtANT%2F0%2Fn%2FDKUOjyg11WdTE6TDSThZ1cMfWKExCyrORGLGxm98nqr0M5LFGBAonmFyivkIVSTgJqmo%2FcuLC190AnVmRBqH%2BRTfDFyaFzowmeXhvQY6pgHWmUX52d5PxOdwTytixpIFIS%2BAJp7hzDExc%2BJcGNqxH4h2eIKgEDZCFwx%2FJsp4neHIPDlwJT8RjuhRzpcZJT%2Fz2OdLe%2BQYDgXPpfM0LaqgaqZ1tho9yDNogPwUAwscqYfvxQ1mL3WogDB%2FIKRmwElYsyFKIuxOR%2FPEfylLT%2F9EJAQy8jok2BAO48nC1ADtqWlxptYote4eT2RyPQvzbb0JC2WXwFdY&X-Amz-Signature=81f6dee1dd6b501db49ed9d8f7079ee02abd7bc0610a132dfdde1b508f2fb508&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=2e772118e99f24b7eb389f45bae74e262b23c4d779f3ae2e2c6fe95e4a423a79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDB2L26%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBM3kzyXkycCLvipva2uVDCz1V7YTO67SeCCr4ZFEaOfAiATJ96ju6e1TQBY3T%2B31mDEQYMWhcKXqlFH5XBlt5EBNiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHWFvrs64yi2mVr5sKtwD9tL25XmJrQ95PcHPLgvYGUqC%2Fj%2BQZpoqvDH5sCWYo6enakhC5XeIJLStDJDMYDVZyAdqTTn9jleUIhWvKXf7nRpYbZbAMmYkL1hmLPd5VxDgEUtQlPhM%2F3xffK%2B9aRS2uZyrH7%2BhpPD9GDGkOtEQvmMwM5DH480osJa2Bu%2BHaL%2BS9R4s9PbtfraY6dPh%2F1%2BmKz2%2Bo%2BvJytJ4Vn7FEgDKywuU7fct8lCGgk7R%2Fo2EGl2pTi0qSvzP17IGriNkkGCgNDiGR31t2Aw7K6Oq4nyAQ2E68upRGjnuCDgLhe%2FgoXQaP86iQj1ETYUUaWrdvEKUeoebNpSa02CbDUxMLzm83HTrjbxmkYxjI8LAV2HO16m0gmsy46aH5TvWorElX134mqRHmyymY8l%2BfHlfj0yTmndmPYBV80Z8PyyWm47bZaB7tTQob0ZtwJGcTUmlUntQVTpmFG3LpN3JdFXy2zmEe4Yvu255Uf8Aa%2BGvZg%2BXejYKu1MAM2P7lkC3XzVgiS9dG37pN%2FIi7GY7xNp%2BQAAmegQpMcfTl3uiepCkT24%2BCrGYox642%2F62ebI5zLWQWgufX4svKXfs6N%2BafwS6RRXmjv2SBPZgUPPwrFF8dmohv7SM9C6%2BZybk6F7IquMwiubhvQY6pgFNyFHJmGybecaZ23IQxZNjI3Y2Pen4fTUFRcEVNE%2BGlLY0Gna5EJ3nKhn%2BGlXzkVy5oG4WHUXBgyCQIJe1ipNNrT7PpqL9q0FTNeOW8GEUraMLE%2FNGh9A7%2F3kObeZDGhqNVr%2Fl5pDH5ZqQROBwuJ15JTOLReGABqicqQERN4cfZHyqYPWuONBiRVUNWGaazDC0SPPCFZxrpy0cldK9SDiOGGY0w%2F9s&X-Amz-Signature=afb9079242fe7e80158d3ffa693c56909043c51ebb6c477eb32e283774a2dfbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3N73W%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICru8FP3rX5MQl47brtcXtkDFR5J4MMDanJ4cE%2B45nyUAiAnpgGJ2YoRkG2UyYxPSllrnT%2FooIhQ9Vagc%2BYxUMCelyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbehIz53f19EfHVEKtwDWlsHcLwD%2FGi0xLLipiGjEdJkFihczghZdeZ9YxXNB9u5PGKduBDmdvLYZXYSups9hsbitq2UE0YcvFN2LYyhFj20H2J%2FtxP3XAXoNUi%2B2UnnwmLtjOdpzAySvS6gg%2BKJobE0TGAgvFBzgsjdk93lrYlxEh2w%2F0CUyDXPzPxhZE%2B3%2FfxUmLt0CoHrXyGNxASpj9TYeN8xuYJWQLnsaIFpwz6dgZ0gFVBQz7I7L7EtZ9cvion6uGhLqp2eWW8kcKijZM%2FqpQXVm%2BD4V9%2BJT1bAuCIju1ysCJlpZQ447ADIiOps1HIRnRFJHSs14XJNK2Gn%2B7YIEF5rhyyIf%2B9LgVg3wOl2yjGO3q4HvGqrXUZExJb1TfLKT76lNZlxPkMSgavzhoGiihBCUdFsXohz1qwfgzDmppH8rJZRJQmzxcOrJMgg5K11lDUY3tuVWpvqrLpfFnEQwcCgB0EqzY%2FMs8JKS7uVNIMCr66EfD5ADfHo6UFi%2FY6RELqpEwVExOabBgInurVCwolhPDU3hDJ1wKWtANT%2F0%2Fn%2FDKUOjyg11WdTE6TDSThZ1cMfWKExCyrORGLGxm98nqr0M5LFGBAonmFyivkIVSTgJqmo%2FcuLC190AnVmRBqH%2BRTfDFyaFzowmeXhvQY6pgHWmUX52d5PxOdwTytixpIFIS%2BAJp7hzDExc%2BJcGNqxH4h2eIKgEDZCFwx%2FJsp4neHIPDlwJT8RjuhRzpcZJT%2Fz2OdLe%2BQYDgXPpfM0LaqgaqZ1tho9yDNogPwUAwscqYfvxQ1mL3WogDB%2FIKRmwElYsyFKIuxOR%2FPEfylLT%2F9EJAQy8jok2BAO48nC1ADtqWlxptYote4eT2RyPQvzbb0JC2WXwFdY&X-Amz-Signature=511fcbe1e47cd871f372868df19f283d1b5dc5e77209c69a7951e5909bc3b05b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
