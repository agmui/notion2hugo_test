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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665VLBGG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAoAjUqlW4AjczlcdFEepX7wz7fEC3xCErF35%2B15wV1TAiEA23EVepo4RS6h4VJ4utMMHM1pilIIDoEUkyTOeCzio2Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGCvyEZPrHqidWxF9CrcA8fZfLDQ%2Fq3hnyZO9B8unT%2FpCDbfusSbfXYTNEZQUHxd0Sqc6QcqDNdI%2BeY51mq7yQ73eh0E7E05Vx0lSJrZmdmlvFusEVik1lTeh%2FWX2ocpDmV0Dsxi7HyZRSs8uKycmFZFIB32h03x5%2BXb9DnJwfJwnuA3XoEqIScNFUNEBrqAMf90SJvXnjarYMAv5FlPW%2FOcewbMAcqBxwYyNeq8eVDR1jMpt3hjt%2Fj9uS95W3gecvQqoGGBqs6Tcvg5Wud35FosyxD%2BH68wxOUoDA2uUk6TELKXcTcfgCznyK9QRWUKwvmG6cOahXf22Msje0BCWtQ8aLZZZJcjqo9Yt%2FR2OhsXZ5sHREaIgtbebe8qFYAXHEZcPFMZTIFacZI%2BM1UCOYeqTR%2BHKR7mwnJWPFVOhsq9BeHg6FTx6Che1KZDJBOcKuk8wggV0Zn8PjpLl8YqKsh1lLs7ytmSmKG%2F%2BU3i0hne0o8GZbge%2FUNpC%2Bs%2B%2BA8eNk6aZMEEqSPHp5o46HjTk8vXgIDj%2BgbUPTVbeh48fuDl15RJhl9sFHxDs79215v8GjFofkqCEG5Lx%2BD3k%2Fy7LnN4PheWG6biG9bsB91pv9IHDkSettoFWQw%2BLY4hQS%2FbB%2Be%2FnSqJlbYLfzjNML7Vq8MGOqUBmjc8tq%2FgpRzx8RVxiO5q5QmhFu4P%2B5uR4yUUUk31ijuHFjdSo3wD4QCVPa3FcB23Cc5aWbYrSpffdi0olPQXx41%2BewV%2B7hsDpZbAiuP0bi4MCZy9lWURUFnNquv3BJmtpAIR1ZR3xba%2BzveO4IIBoff6I6MJEQknUDvGpDzVAVjppAMduMik%2BseJWUt6ioKVbdlkyKjNWoBAqaK%2FjhEuus0q4bO3&X-Amz-Signature=62c811b6c4c65c18bc1bd03ef7682b70c579a40ddac30f741796c4566d780fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665VLBGG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAoAjUqlW4AjczlcdFEepX7wz7fEC3xCErF35%2B15wV1TAiEA23EVepo4RS6h4VJ4utMMHM1pilIIDoEUkyTOeCzio2Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGCvyEZPrHqidWxF9CrcA8fZfLDQ%2Fq3hnyZO9B8unT%2FpCDbfusSbfXYTNEZQUHxd0Sqc6QcqDNdI%2BeY51mq7yQ73eh0E7E05Vx0lSJrZmdmlvFusEVik1lTeh%2FWX2ocpDmV0Dsxi7HyZRSs8uKycmFZFIB32h03x5%2BXb9DnJwfJwnuA3XoEqIScNFUNEBrqAMf90SJvXnjarYMAv5FlPW%2FOcewbMAcqBxwYyNeq8eVDR1jMpt3hjt%2Fj9uS95W3gecvQqoGGBqs6Tcvg5Wud35FosyxD%2BH68wxOUoDA2uUk6TELKXcTcfgCznyK9QRWUKwvmG6cOahXf22Msje0BCWtQ8aLZZZJcjqo9Yt%2FR2OhsXZ5sHREaIgtbebe8qFYAXHEZcPFMZTIFacZI%2BM1UCOYeqTR%2BHKR7mwnJWPFVOhsq9BeHg6FTx6Che1KZDJBOcKuk8wggV0Zn8PjpLl8YqKsh1lLs7ytmSmKG%2F%2BU3i0hne0o8GZbge%2FUNpC%2Bs%2B%2BA8eNk6aZMEEqSPHp5o46HjTk8vXgIDj%2BgbUPTVbeh48fuDl15RJhl9sFHxDs79215v8GjFofkqCEG5Lx%2BD3k%2Fy7LnN4PheWG6biG9bsB91pv9IHDkSettoFWQw%2BLY4hQS%2FbB%2Be%2FnSqJlbYLfzjNML7Vq8MGOqUBmjc8tq%2FgpRzx8RVxiO5q5QmhFu4P%2B5uR4yUUUk31ijuHFjdSo3wD4QCVPa3FcB23Cc5aWbYrSpffdi0olPQXx41%2BewV%2B7hsDpZbAiuP0bi4MCZy9lWURUFnNquv3BJmtpAIR1ZR3xba%2BzveO4IIBoff6I6MJEQknUDvGpDzVAVjppAMduMik%2BseJWUt6ioKVbdlkyKjNWoBAqaK%2FjhEuus0q4bO3&X-Amz-Signature=16cbba4b2ea03d9a735ab4040e81d938979eb2d026aa2cdb250e3dcec20c2e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665VLBGG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAoAjUqlW4AjczlcdFEepX7wz7fEC3xCErF35%2B15wV1TAiEA23EVepo4RS6h4VJ4utMMHM1pilIIDoEUkyTOeCzio2Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGCvyEZPrHqidWxF9CrcA8fZfLDQ%2Fq3hnyZO9B8unT%2FpCDbfusSbfXYTNEZQUHxd0Sqc6QcqDNdI%2BeY51mq7yQ73eh0E7E05Vx0lSJrZmdmlvFusEVik1lTeh%2FWX2ocpDmV0Dsxi7HyZRSs8uKycmFZFIB32h03x5%2BXb9DnJwfJwnuA3XoEqIScNFUNEBrqAMf90SJvXnjarYMAv5FlPW%2FOcewbMAcqBxwYyNeq8eVDR1jMpt3hjt%2Fj9uS95W3gecvQqoGGBqs6Tcvg5Wud35FosyxD%2BH68wxOUoDA2uUk6TELKXcTcfgCznyK9QRWUKwvmG6cOahXf22Msje0BCWtQ8aLZZZJcjqo9Yt%2FR2OhsXZ5sHREaIgtbebe8qFYAXHEZcPFMZTIFacZI%2BM1UCOYeqTR%2BHKR7mwnJWPFVOhsq9BeHg6FTx6Che1KZDJBOcKuk8wggV0Zn8PjpLl8YqKsh1lLs7ytmSmKG%2F%2BU3i0hne0o8GZbge%2FUNpC%2Bs%2B%2BA8eNk6aZMEEqSPHp5o46HjTk8vXgIDj%2BgbUPTVbeh48fuDl15RJhl9sFHxDs79215v8GjFofkqCEG5Lx%2BD3k%2Fy7LnN4PheWG6biG9bsB91pv9IHDkSettoFWQw%2BLY4hQS%2FbB%2Be%2FnSqJlbYLfzjNML7Vq8MGOqUBmjc8tq%2FgpRzx8RVxiO5q5QmhFu4P%2B5uR4yUUUk31ijuHFjdSo3wD4QCVPa3FcB23Cc5aWbYrSpffdi0olPQXx41%2BewV%2B7hsDpZbAiuP0bi4MCZy9lWURUFnNquv3BJmtpAIR1ZR3xba%2BzveO4IIBoff6I6MJEQknUDvGpDzVAVjppAMduMik%2BseJWUt6ioKVbdlkyKjNWoBAqaK%2FjhEuus0q4bO3&X-Amz-Signature=be197f966e70f00120b04b6bc7349d3429226247b6c16d2e4c2050a071a3d900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUZVWPU%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDl3mDVFV1Y%2FF4QwagpfQ9cAnu82UnkjFthi2P%2F%2BLpI1gIgEZkZlgR5PzTNfW9JHLuptKOIycvNP%2BMnej4DJUPPNgMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEIafKVdkKdDFJIopCrcAxqm17lqT4cEIMbA5BDnxDVUIPYZK0k59CeVf%2BHFwY3kIEBgwV7ehUIZrzfOi4ZTyFMlvuIAM763yEUyRI1Is9vNKwft31SK0QOtwe%2BEGFD%2BAmAOvK%2B4DDC9PFaglb57lVXeisxQRipgtuq9C%2F1SZIRBizFy9eoCqQ%2FBhxxErrA7szHjYcq7fyRiPWCRHAv7heoi599Z9dZ1ewvheC5uw2FxkOyeTS%2BEl207%2BS55b3Vwn8HciEp3IylaxWCBPmObPB%2FaFVbhOxdyViEgloV0bcpqJElymYu7GEaXY%2BVeCLsDcA4y%2Fbb85MN5KMhJ%2BcS9EQ3mDih%2B5Cs5tsoxXQC79ZnNhwBB%2BJplqtryuu9M%2BEfbsgq3Yqh2vdPknUqWrr312%2BxBd6mMB5hCNU4xVd03zcjPwSI4u%2BUhfQLUP5m0%2BLpcV3jN3YXh%2F1qDNhFVrZWf%2B%2BuUH5OXw%2ByhJcCt42GhfA%2FIFh6FxBVrPrFc4zrK9HSPwonxS0wgXkPJWqr7qaguVWh6E4bVS5JXYHyEzWIYl9nEo%2FD8%2Fw%2F0%2BQ7hnEUqCL7eEoX0UP5aFO4I4Vf8jyI5A%2FMmVnkejMqMBk03kWrR%2FomF549WHD8AZ0Q%2FSw%2B9r16vuMu6%2BO%2FD3bzufVn5MP%2FxqsMGOqUBY3wvZaAaZcvDemCCZE5xqvHakLBIUx%2Fm2kBOXjkVzBK2PO1ZIlhYaP72qXfjZ6b%2BSHI7ldfyV6Dr9VxtcycI3vB3xa4VjvKk8cMh10jC9XZ%2FIFGCf%2B8Ji8EM47ohkCRiCg%2FQ9iJJnrw%2FVZ2J4Ac1MKNgSTomjxNuLLHnrIKT67AXZeP8yvmp2bGtUu8OhMb2dTh1Pd8qOAbz%2Bvl6FzPrMR8OXDmx&X-Amz-Signature=019db7254286fbd9924a914870355111b07dcff2787868fcb64c441f67a096cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SYNCFV%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDVtcCVmL4vlnuHtmUP5CKREJbHpdJ%2FxB9k5XFC%2BN%2Bh2AIgVRBGwxJndZpR76BQhsLoWx2GVSlFUG7i0zHDdzEksXQq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGX%2Fu%2FeYE3vWBHyQLSrcA9S2wFeOvkD8jFWrQPcv%2BtMfF18qR6T%2BsO92JVGpLqgsbLTUm0lcNJHWrZ2qWVU18HGpkmnuJ0b7VbEp6UKevX3iTvaOHU51wXiV4iJCXn8wr0YF4eDd8GOXqdaYhi2RwIBQarYLQiqUWbDz3uT%2BhsCcTl3X5rEEesUQrR99%2FqxOyL%2FAOhNSEKrCsVoI50M7bHTuKwY6UU5FLBwRSFmYx1M4mbFBN0NoRnntkwLQhbs9o%2Fp0n2sxi39QBj93T0fo%2FrUg7ZKs0IGVjfeOQO%2Bwu0tUsvNEaRs11y5DI1xip7QyVF0JtcYjyKvrvPhir1Y%2BCUZSRliMKe6kJKygUeCaMbQ8IjhpWBL5QLfdPT4qLUJ0tImmpEEaAmNZeEIb13AyBoHnrM8Gl3asOG%2BaYyomjQoWACoC0kzMPAL33GjkVRK2E5c1SzJRXtGp62Z4Wc8YcxSxK1U74gdwkWWDrObzDO6sCzo9DL67pkZB2EJYb0w0yDz3UisUsJwG0xllAZ6TprenTU7ADzHVBideA8v7%2BKxgj3q9cyh6H4lhTjeS4j%2FMU9bsFQvQa5JK%2F4B7bqE72mP0nI1AKmsEQDPWmAz0uWF%2FT%2Bp9WEf9cZRywnSp4jUfvlthKx8IrUsU4Z2yMLrwqsMGOqUBsZnxoiGdy0UIhDjKGMBBxzP0DC4g%2FG%2F9ocWvOcxQYtwSbevraMIe%2Bt9vi%2Ftn2GE%2FMLW1gM5%2Biz%2F1Zb1ErlNCA%2FLSuxs1DncferwsQVhyT0j5h0%2BZhfl0RnDDbYxLW9Kd3yaB1vysvBuktnXU29qxYCeNl4IgGNwPvGGIOG3b9WIR%2Fb%2FeIeWd%2Bwz%2B5Q%2F%2BQkSXA7%2F4bVKB3IyY3uVpqEPu5K8iFELV&X-Amz-Signature=871b72d5e651838f8e6c02e0877340b8f0a9d6797db556c38e8c7b8d392fcf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466665VLBGG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAoAjUqlW4AjczlcdFEepX7wz7fEC3xCErF35%2B15wV1TAiEA23EVepo4RS6h4VJ4utMMHM1pilIIDoEUkyTOeCzio2Mq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDGCvyEZPrHqidWxF9CrcA8fZfLDQ%2Fq3hnyZO9B8unT%2FpCDbfusSbfXYTNEZQUHxd0Sqc6QcqDNdI%2BeY51mq7yQ73eh0E7E05Vx0lSJrZmdmlvFusEVik1lTeh%2FWX2ocpDmV0Dsxi7HyZRSs8uKycmFZFIB32h03x5%2BXb9DnJwfJwnuA3XoEqIScNFUNEBrqAMf90SJvXnjarYMAv5FlPW%2FOcewbMAcqBxwYyNeq8eVDR1jMpt3hjt%2Fj9uS95W3gecvQqoGGBqs6Tcvg5Wud35FosyxD%2BH68wxOUoDA2uUk6TELKXcTcfgCznyK9QRWUKwvmG6cOahXf22Msje0BCWtQ8aLZZZJcjqo9Yt%2FR2OhsXZ5sHREaIgtbebe8qFYAXHEZcPFMZTIFacZI%2BM1UCOYeqTR%2BHKR7mwnJWPFVOhsq9BeHg6FTx6Che1KZDJBOcKuk8wggV0Zn8PjpLl8YqKsh1lLs7ytmSmKG%2F%2BU3i0hne0o8GZbge%2FUNpC%2Bs%2B%2BA8eNk6aZMEEqSPHp5o46HjTk8vXgIDj%2BgbUPTVbeh48fuDl15RJhl9sFHxDs79215v8GjFofkqCEG5Lx%2BD3k%2Fy7LnN4PheWG6biG9bsB91pv9IHDkSettoFWQw%2BLY4hQS%2FbB%2Be%2FnSqJlbYLfzjNML7Vq8MGOqUBmjc8tq%2FgpRzx8RVxiO5q5QmhFu4P%2B5uR4yUUUk31ijuHFjdSo3wD4QCVPa3FcB23Cc5aWbYrSpffdi0olPQXx41%2BewV%2B7hsDpZbAiuP0bi4MCZy9lWURUFnNquv3BJmtpAIR1ZR3xba%2BzveO4IIBoff6I6MJEQknUDvGpDzVAVjppAMduMik%2BseJWUt6ioKVbdlkyKjNWoBAqaK%2FjhEuus0q4bO3&X-Amz-Signature=17a8bd5f9bde43b824d24b2ad04961731d40492bdb4e346f876617a57f61b8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
