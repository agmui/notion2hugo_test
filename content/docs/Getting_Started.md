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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436GEH4W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiCJk%2BgWMdfvELCQXzC9ICe0W4SYVh1n4A1mhYv%2FYNFAiAglFAD7unQCE4zDXS8PMXR%2BSppCrS73mZE6PragGd29SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yCsCm5aSJbDnx0fKtwDcrsiECJkrboHmX55XAiPm91OMCDg6soh46TPELjqpzSCKDO3t7C8P6EZHThRoXQdj0DQ5B3qxoHT%2F0StOEnT36ZeJXujXaCMjXNi9q9HHgfORF%2B5sp62EgdJ1CLsOVm82ZFWrcFesC31jZCazbujH3gFCeys%2BNyK4RTHHz6IAxelgGpuhi8Vx8lzhoFDh3hCq3vjap2ORI9f4SSWphLGkCM6TYZaCtdAz8jrXaNIupnvOeWoTxqlEwOREPX3swuKuABsl8nX%2BbmdpNDhYblNnoLPLoIQnJn%2BGwuRTvvFUo4rK9BrQHpgWcLo5b0KquQLzl4YlSoohTK%2B1zQGYnVMTFUCewI%2BiagH8aDVx7UOtN50TmGne5hPVEOssqcFc3LnYoI%2B3KUgdTgxccwTSDr2k6698yciv1o67FXXXDqLnSo7NVBnx37bORVTtzpkMrTsuf5fJnVF8awOxHbxJ2ZC4mDueFrTroKUUfZsCHSx13KBn8RuKBJN02ZaSfnrrBXPML2Hjio1R6ly4tKIZZDD%2BJ6bvDAbXJylR5PCmfd3Qng34gKJnKfHTKU%2BLmqi1uDZ16pKwE67DF1FuZ2%2FFYCQ52PVY89vR%2Fvbj3F%2FHzovCDfM82ibXYF6A2d3mwwwj7PiwQY6pgGUPR20oB2QhNc1%2BSWScAiCG838SMISmY1%2BUNc5iRBBbn9sgTYxq%2BfHrTKhEiRAA7gCyMebLTCEnRaufKXSSLE%2BaeV9M9ay%2Fd%2Bq2CI5eMYJRdwBv4YyFEVinQZPLJixU56Cl1EPAQU63ryNkIDZQnJz3DhrP6%2BWRgCHIw%2B0UVyuTEvgAC3yziloJOQwaorYcRgM4eFmRmct2kJ5GfhZRnWKzvX4tqRD&X-Amz-Signature=9df67c214419c6af269756654d70638a16e546ac91a7ecaf1b59f3b40959cd76&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436GEH4W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiCJk%2BgWMdfvELCQXzC9ICe0W4SYVh1n4A1mhYv%2FYNFAiAglFAD7unQCE4zDXS8PMXR%2BSppCrS73mZE6PragGd29SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yCsCm5aSJbDnx0fKtwDcrsiECJkrboHmX55XAiPm91OMCDg6soh46TPELjqpzSCKDO3t7C8P6EZHThRoXQdj0DQ5B3qxoHT%2F0StOEnT36ZeJXujXaCMjXNi9q9HHgfORF%2B5sp62EgdJ1CLsOVm82ZFWrcFesC31jZCazbujH3gFCeys%2BNyK4RTHHz6IAxelgGpuhi8Vx8lzhoFDh3hCq3vjap2ORI9f4SSWphLGkCM6TYZaCtdAz8jrXaNIupnvOeWoTxqlEwOREPX3swuKuABsl8nX%2BbmdpNDhYblNnoLPLoIQnJn%2BGwuRTvvFUo4rK9BrQHpgWcLo5b0KquQLzl4YlSoohTK%2B1zQGYnVMTFUCewI%2BiagH8aDVx7UOtN50TmGne5hPVEOssqcFc3LnYoI%2B3KUgdTgxccwTSDr2k6698yciv1o67FXXXDqLnSo7NVBnx37bORVTtzpkMrTsuf5fJnVF8awOxHbxJ2ZC4mDueFrTroKUUfZsCHSx13KBn8RuKBJN02ZaSfnrrBXPML2Hjio1R6ly4tKIZZDD%2BJ6bvDAbXJylR5PCmfd3Qng34gKJnKfHTKU%2BLmqi1uDZ16pKwE67DF1FuZ2%2FFYCQ52PVY89vR%2Fvbj3F%2FHzovCDfM82ibXYF6A2d3mwwwj7PiwQY6pgGUPR20oB2QhNc1%2BSWScAiCG838SMISmY1%2BUNc5iRBBbn9sgTYxq%2BfHrTKhEiRAA7gCyMebLTCEnRaufKXSSLE%2BaeV9M9ay%2Fd%2Bq2CI5eMYJRdwBv4YyFEVinQZPLJixU56Cl1EPAQU63ryNkIDZQnJz3DhrP6%2BWRgCHIw%2B0UVyuTEvgAC3yziloJOQwaorYcRgM4eFmRmct2kJ5GfhZRnWKzvX4tqRD&X-Amz-Signature=d437c9d7882aae78425a2b503f9b3b61d2ec159b8704edededad4f0ca2493b43&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436GEH4W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiCJk%2BgWMdfvELCQXzC9ICe0W4SYVh1n4A1mhYv%2FYNFAiAglFAD7unQCE4zDXS8PMXR%2BSppCrS73mZE6PragGd29SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yCsCm5aSJbDnx0fKtwDcrsiECJkrboHmX55XAiPm91OMCDg6soh46TPELjqpzSCKDO3t7C8P6EZHThRoXQdj0DQ5B3qxoHT%2F0StOEnT36ZeJXujXaCMjXNi9q9HHgfORF%2B5sp62EgdJ1CLsOVm82ZFWrcFesC31jZCazbujH3gFCeys%2BNyK4RTHHz6IAxelgGpuhi8Vx8lzhoFDh3hCq3vjap2ORI9f4SSWphLGkCM6TYZaCtdAz8jrXaNIupnvOeWoTxqlEwOREPX3swuKuABsl8nX%2BbmdpNDhYblNnoLPLoIQnJn%2BGwuRTvvFUo4rK9BrQHpgWcLo5b0KquQLzl4YlSoohTK%2B1zQGYnVMTFUCewI%2BiagH8aDVx7UOtN50TmGne5hPVEOssqcFc3LnYoI%2B3KUgdTgxccwTSDr2k6698yciv1o67FXXXDqLnSo7NVBnx37bORVTtzpkMrTsuf5fJnVF8awOxHbxJ2ZC4mDueFrTroKUUfZsCHSx13KBn8RuKBJN02ZaSfnrrBXPML2Hjio1R6ly4tKIZZDD%2BJ6bvDAbXJylR5PCmfd3Qng34gKJnKfHTKU%2BLmqi1uDZ16pKwE67DF1FuZ2%2FFYCQ52PVY89vR%2Fvbj3F%2FHzovCDfM82ibXYF6A2d3mwwwj7PiwQY6pgGUPR20oB2QhNc1%2BSWScAiCG838SMISmY1%2BUNc5iRBBbn9sgTYxq%2BfHrTKhEiRAA7gCyMebLTCEnRaufKXSSLE%2BaeV9M9ay%2Fd%2Bq2CI5eMYJRdwBv4YyFEVinQZPLJixU56Cl1EPAQU63ryNkIDZQnJz3DhrP6%2BWRgCHIw%2B0UVyuTEvgAC3yziloJOQwaorYcRgM4eFmRmct2kJ5GfhZRnWKzvX4tqRD&X-Amz-Signature=cfcc73d1a7ace8ec6b56cc6e37a40811ac6c60178283510c56d1d1ea721a2e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHK3SFOQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBYj3AhdX9EoVotiJhPRukurWU3x%2F%2BHW8%2BDP5UBlvfbAiEAwPawtII7aW1FKEUff%2BfsJOsRkql4oXXcK%2FIq%2FeJAKewqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN26NG5KeceLeC4FYSrcA0qulhr7HI5Y0VnJmXbP71v9AvKxMvNh3ZT99w2jDkJJqHyW2hvbtWKukrjnDudPUOv7I3vMbtwGm%2FgFoI0fwbKSlOKFEfYv1ZaEY9gWNKHLwqXefSGFFQj6g3P2HSpDPJ7ZWnhTlOxhSaVM9ByiASjAFcLHuZVpbCKNbHl6OXQfqhqHz8wA%2FbE0dDxnzqRvbfzDYndxELI1qUJ59x3uacP7bvhyORZO9ys0Jq%2BiPxvlnlPEfiFIZwh3JH3llcrP133KqdfI7YzLtULVd70gjbWnl6asWfuyih4offQrdmwcFi11mrHK6P2Wc1HYkUlvRNMedQp0Q7fz4o3BeWUzg1aNakdAkt9knn2nfNrV3wUk4T77ko2gy%2FScSMmxZrX5nb1HhhIaU1gQREavkcdlBr5WtEznCKf0qUgD90xdv%2BhM6ZxBwru0S%2FcpT%2B0czdfckSrnJQskrVdA2GeK6mJR7ZGEBosgmsN9A24FIozOxwjrlAfF5FLLj0Z5s8eCREzDobyfVM4L2gr7e23ak8hxZ606ijAO6Xpv1ryoxI8xVbFQfiSiX4NX6n983Nz81LiL6BzykV0bc6A8JO6ZRgIJHD2mcG7wV6vDz2k8%2FdTmpxtuIcyunf0533b7ibBkMJaz4sEGOqUBXnM8UcsRI4ZgxoPZRI3r5SlBKwKArM8jMdtFqypjrcMoHlDIqYiZdmbcbtUmCNsT3SQvE3K5SrVZx8eJQPoDQuef%2F7KmhHnHEOfAwvk%2FzdMhr9FgSCWX9i3Py5HC1OIs521zwuJilEejrnaS4WrJY1kvC8oaD7Dvb4DTkC2puOSTowc20C8zb37V7tedbzIxqv6UO91UGyN6m%2B5FfWb3rnb0MS3C&X-Amz-Signature=ad813943a7b966ba5cc7e783fc750f8ad8726f6828f04cd519966fd0a68757d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI3QIA5W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMe%2BawIZLcdFeviLEX9q9dUyEowITySFb0DIs1JzxBeQIgO7Y9xkhyAXGzrxPp4MCWeVnN1JZ1o3GXGHeXed7%2BwjcqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeE8HKXib9XHp3H3yrcA8EHZ0z4ACp%2Fk%2F9V12J4OHOTlNqh0CMbHZV9Bh2nzuBXDvutXM7SJjvuPPTRgCcAUd2D56wFUWMpugH0eGf2RHp8s58A1G8vuycr970HSXs5qJkYhnCh1ZV35lN4tTHRBvhheo0LUq0THtuukG60LnNceFfNlABqDpD%2FiZikFTtN5%2BZ7StJb%2FZKncS0Yz2HomabXYygrP5LnQQ9dSH0slv%2Fb5GACdogyrGHLd5elH6CtQg7eLbGgupcIhcUNKu%2BmAKgM9a6ZuxHqfBPzp2iLkWNmKbvKEMX%2B2miPFo8eJMhoeW%2Fjd8Gwuzc1YJZscPuLVkJ6InwqnaffGxaSTvYfUPR51BjWp6Ycn%2F7ZWsj0rQFvnTGl18GK33REZ092Et9j7qPZ6%2Fy6HbP%2FkT6ACTOmYdwNoD7xtu8njxJyYBHvmF894WpFKM6r31CwcFM2tBXLsodgh1zApeA7ig3mc4lOrZlnGwTv8eA6QBS6ms3ZijvTb3kSANwoXbj4ElJQE9vyTXeVK0mV76ZAHZOk9BRxzHjBBgdgqRKNTPbD%2BZREc0TM1yFjs49KwF8eg2N3RVkxe3TYrHvBk9BA8%2BT6XZvxaB38NqsDnnwxwSAK0rWe7IapOBPdsyOWP9GnUsPPMMaz4sEGOqUB%2FbbkAANlf46tBoOQQHrctz6TWti%2FnNEcsmwvOee2OcY7HyTXdM%2BVErwSsmIelwV1cWS7PD6CJ7XjR1TdDe3UNW%2Fi%2BSHEdbKsP3nU5H7A3bi7ENNRY4nAegFHEG4yBATE54ZLFtY7xDkXepm45aMFj65gkYSH812MvN14PB9355uXahOzRhA9wJZFMxaDLIytVlFJ2R8aDuk%2FAcaVZv9MUUgN7kYv&X-Amz-Signature=d750f7d4277a90f71e7e7ee24289ea326228302798a4621a32f6b9bd61dd3ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466436GEH4W%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFiCJk%2BgWMdfvELCQXzC9ICe0W4SYVh1n4A1mhYv%2FYNFAiAglFAD7unQCE4zDXS8PMXR%2BSppCrS73mZE6PragGd29SqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3yCsCm5aSJbDnx0fKtwDcrsiECJkrboHmX55XAiPm91OMCDg6soh46TPELjqpzSCKDO3t7C8P6EZHThRoXQdj0DQ5B3qxoHT%2F0StOEnT36ZeJXujXaCMjXNi9q9HHgfORF%2B5sp62EgdJ1CLsOVm82ZFWrcFesC31jZCazbujH3gFCeys%2BNyK4RTHHz6IAxelgGpuhi8Vx8lzhoFDh3hCq3vjap2ORI9f4SSWphLGkCM6TYZaCtdAz8jrXaNIupnvOeWoTxqlEwOREPX3swuKuABsl8nX%2BbmdpNDhYblNnoLPLoIQnJn%2BGwuRTvvFUo4rK9BrQHpgWcLo5b0KquQLzl4YlSoohTK%2B1zQGYnVMTFUCewI%2BiagH8aDVx7UOtN50TmGne5hPVEOssqcFc3LnYoI%2B3KUgdTgxccwTSDr2k6698yciv1o67FXXXDqLnSo7NVBnx37bORVTtzpkMrTsuf5fJnVF8awOxHbxJ2ZC4mDueFrTroKUUfZsCHSx13KBn8RuKBJN02ZaSfnrrBXPML2Hjio1R6ly4tKIZZDD%2BJ6bvDAbXJylR5PCmfd3Qng34gKJnKfHTKU%2BLmqi1uDZ16pKwE67DF1FuZ2%2FFYCQ52PVY89vR%2Fvbj3F%2FHzovCDfM82ibXYF6A2d3mwwwj7PiwQY6pgGUPR20oB2QhNc1%2BSWScAiCG838SMISmY1%2BUNc5iRBBbn9sgTYxq%2BfHrTKhEiRAA7gCyMebLTCEnRaufKXSSLE%2BaeV9M9ay%2Fd%2Bq2CI5eMYJRdwBv4YyFEVinQZPLJixU56Cl1EPAQU63ryNkIDZQnJz3DhrP6%2BWRgCHIw%2B0UVyuTEvgAC3yziloJOQwaorYcRgM4eFmRmct2kJ5GfhZRnWKzvX4tqRD&X-Amz-Signature=ff0c5bdc2fd9ba39024f467a14305c3c9cba0506817639b0b0bbe17b906c6d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
