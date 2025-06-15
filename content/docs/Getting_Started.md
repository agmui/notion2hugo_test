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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIXGUHL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDeZHRhpmlAAb3i6nnrLQ%2F%2Bf7MMV3wep%2F%2BuE%2B%2Fg8tjbGAIhANCu7RKJLuO3SwP%2BjmEZpz0mYSEu3tNhwjuNnuJbkGM5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyHlj0%2Fj3IztA2ukpQq3AMabsOKtA04DPDqb55YG6eqmC3xrGqin9c70z7tDh4NMxNueD2A72WWUcrUe%2Br%2Fa%2BVbeTopCdnRPvwVVPSOhGawd5v4XrLABmDdvwxl7a2ZhsxBrXn46hg21QTWkqxd0uPAwWvjnFULbcT8aq8MO0lF8DmsGAOo7YUkOn%2FNBEHhqIIjGpfyJBkMjcw6C0jy0zy%2Fcr1x2Toc42YGoZ82Lf8H5VmDTCem%2F630RNdg%2FyQ9OuJBGylI4%2FgYmBVV0mcX69T61xJZ9t5N%2BRGYSbxKifd5AOukRAYT5Zy9LfwbCdizVwWMJ7uIdrKwCS5tT1JG01pKQHjFiQ1rNqPJM%2Fa39K3LzsKW0V3yRHy1pNQvbe1frTuozyUC4Cjoi83%2BHIjrT5KJcsWbuAmcqNOFDcBooWu82IJhTdSevn3M9Iv4yMJKCWRTYoMngU27OWTrunJv2iOGoO63NEcvDyZe6MAdY2PxOAZSBAEDBWD%2BAscrNOLD568zvGJCIL1wQ5lTMu%2Foh3vcofRyIVRnXqwc9nHOzV0dKgT0sQwcXaSB6rscHVtbNATuvL12oUFf%2Fqz6oU1Ma3kR5mWYa0LoIwMnsbUyBn9UThxpCYzYI3rjcre%2FGPdSmqmJfSHHwkrrvJdpbTC%2BhLzCBjqkAVRuORhFwOH%2F4ofrLFadQp9XxO6THBDQPr1BLeV6x9x%2FkhepxbiOnkoTeizaMWglv2fcISt5ZkLwIuwS0XDlfrra9q0brJJRi78BD576GN26PPdJiq0LwxektJho6FFfsxrraZ0QECvNQG0cQqG%2Bhs9knXYhN3JDfGLT0NB2cCN25F38e8h9i8gl7p4ViEQP2pLw1kPDDmCWJekzoxY8H8CxcDBM&X-Amz-Signature=72aa5101d911133dcf4c4c8d573165de0df04cbeb1f93210ea79c31a1249b1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIXGUHL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDeZHRhpmlAAb3i6nnrLQ%2F%2Bf7MMV3wep%2F%2BuE%2B%2Fg8tjbGAIhANCu7RKJLuO3SwP%2BjmEZpz0mYSEu3tNhwjuNnuJbkGM5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyHlj0%2Fj3IztA2ukpQq3AMabsOKtA04DPDqb55YG6eqmC3xrGqin9c70z7tDh4NMxNueD2A72WWUcrUe%2Br%2Fa%2BVbeTopCdnRPvwVVPSOhGawd5v4XrLABmDdvwxl7a2ZhsxBrXn46hg21QTWkqxd0uPAwWvjnFULbcT8aq8MO0lF8DmsGAOo7YUkOn%2FNBEHhqIIjGpfyJBkMjcw6C0jy0zy%2Fcr1x2Toc42YGoZ82Lf8H5VmDTCem%2F630RNdg%2FyQ9OuJBGylI4%2FgYmBVV0mcX69T61xJZ9t5N%2BRGYSbxKifd5AOukRAYT5Zy9LfwbCdizVwWMJ7uIdrKwCS5tT1JG01pKQHjFiQ1rNqPJM%2Fa39K3LzsKW0V3yRHy1pNQvbe1frTuozyUC4Cjoi83%2BHIjrT5KJcsWbuAmcqNOFDcBooWu82IJhTdSevn3M9Iv4yMJKCWRTYoMngU27OWTrunJv2iOGoO63NEcvDyZe6MAdY2PxOAZSBAEDBWD%2BAscrNOLD568zvGJCIL1wQ5lTMu%2Foh3vcofRyIVRnXqwc9nHOzV0dKgT0sQwcXaSB6rscHVtbNATuvL12oUFf%2Fqz6oU1Ma3kR5mWYa0LoIwMnsbUyBn9UThxpCYzYI3rjcre%2FGPdSmqmJfSHHwkrrvJdpbTC%2BhLzCBjqkAVRuORhFwOH%2F4ofrLFadQp9XxO6THBDQPr1BLeV6x9x%2FkhepxbiOnkoTeizaMWglv2fcISt5ZkLwIuwS0XDlfrra9q0brJJRi78BD576GN26PPdJiq0LwxektJho6FFfsxrraZ0QECvNQG0cQqG%2Bhs9knXYhN3JDfGLT0NB2cCN25F38e8h9i8gl7p4ViEQP2pLw1kPDDmCWJekzoxY8H8CxcDBM&X-Amz-Signature=cf0ea29dc641daa21455ae2107f68b270de1a3122ffcf95b36b4e293a53ce6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIXGUHL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDeZHRhpmlAAb3i6nnrLQ%2F%2Bf7MMV3wep%2F%2BuE%2B%2Fg8tjbGAIhANCu7RKJLuO3SwP%2BjmEZpz0mYSEu3tNhwjuNnuJbkGM5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyHlj0%2Fj3IztA2ukpQq3AMabsOKtA04DPDqb55YG6eqmC3xrGqin9c70z7tDh4NMxNueD2A72WWUcrUe%2Br%2Fa%2BVbeTopCdnRPvwVVPSOhGawd5v4XrLABmDdvwxl7a2ZhsxBrXn46hg21QTWkqxd0uPAwWvjnFULbcT8aq8MO0lF8DmsGAOo7YUkOn%2FNBEHhqIIjGpfyJBkMjcw6C0jy0zy%2Fcr1x2Toc42YGoZ82Lf8H5VmDTCem%2F630RNdg%2FyQ9OuJBGylI4%2FgYmBVV0mcX69T61xJZ9t5N%2BRGYSbxKifd5AOukRAYT5Zy9LfwbCdizVwWMJ7uIdrKwCS5tT1JG01pKQHjFiQ1rNqPJM%2Fa39K3LzsKW0V3yRHy1pNQvbe1frTuozyUC4Cjoi83%2BHIjrT5KJcsWbuAmcqNOFDcBooWu82IJhTdSevn3M9Iv4yMJKCWRTYoMngU27OWTrunJv2iOGoO63NEcvDyZe6MAdY2PxOAZSBAEDBWD%2BAscrNOLD568zvGJCIL1wQ5lTMu%2Foh3vcofRyIVRnXqwc9nHOzV0dKgT0sQwcXaSB6rscHVtbNATuvL12oUFf%2Fqz6oU1Ma3kR5mWYa0LoIwMnsbUyBn9UThxpCYzYI3rjcre%2FGPdSmqmJfSHHwkrrvJdpbTC%2BhLzCBjqkAVRuORhFwOH%2F4ofrLFadQp9XxO6THBDQPr1BLeV6x9x%2FkhepxbiOnkoTeizaMWglv2fcISt5ZkLwIuwS0XDlfrra9q0brJJRi78BD576GN26PPdJiq0LwxektJho6FFfsxrraZ0QECvNQG0cQqG%2Bhs9knXYhN3JDfGLT0NB2cCN25F38e8h9i8gl7p4ViEQP2pLw1kPDDmCWJekzoxY8H8CxcDBM&X-Amz-Signature=9bf612cbea9a34dc00ee273a545c714f8e38f0d7f58ded1c368f596f16ebf064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHWAJO2Y%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGU9cm6%2FI%2BrbdLxhoki9TRhRQRx2nDO3Is8QeiLpQo1WAiB7FHRh%2BPFeUTIBLTUJRjgb6pj2EvVVFjiHmBhCVJBypCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMBrNVULYJ7AbT%2F1OvKtwDtcMB7XubwuuJOw1QAMXaD1XdWORlMKuiuQXz2HVGrkQ8ysh%2BgqKf2Ak4VVn2VphfhKsP%2FWSR3W4Zj7MDxDz5%2BAv4LQ0%2FpDOrfPqTU%2Bre2FktjSVGPdPXxxS%2FDPV1xJSqIzfyEg2kRxoEVLv3t%2Fr6SfTaVAWJfkAJlMnmSam1lIU1Lbc2kUI4lvWcifxsB4MDy4FNoO4BrJZpb7RBonNsU8zBmhf2WF9Xzbk5MfbDYPh7dYy4H9A0Ml722XEkv6J%2B5HmMeqyUBdXy2WcyFs0dKO%2Fu83%2BQz4OVcZRuHyFkubvxz8vU4MYPVkBrnsUqF7D2kVndKVxf0f7t1Z92ZstNTjiFzfNNOvcOHGqtpYSbHkXLcmks0BqUtSXcaQC7QQZ90Vz85clR%2BfTxSCxiAIokWv%2FXS1rhYf2QO8r47R0iTQg3qFv5RSI%2FpXQDNBUU9DIcUx0IE%2BJxiQKWHpviG26GoP9pui2gZ%2FeZN8UxNa0ekM82Hf8lBfNC5iDVoxgN%2FGn8K0VVzk4SDnIfiAI5D6TRBNw46MZ8qoMEBUNh7z23KWbJ%2FnI%2FCv7GB1yid3d%2Bh0NVOvEvVzm6gy2s9gOm%2F7vl8NIDtlTCwmRzfQFSAsuqPk%2BonKAs9%2F%2BPFBImpTAw44W8wgY6pgEUABE8E9lrf1wWV0q6KLB6%2FvKa6thZeMVrIB%2FCdSJH0IfKLzLDLvzvZq1OFtHgu9UssosXzuzdpHQBXi%2B%2BBl09GJOkJQwQTBnieFrOa9gu0FgTaGJ15lQppI%2FRiR2KC%2FNXsMqLvUhdhqUJ%2BRCsJx0Tu2TywqxQ%2B1gXupDTr0ZRpxKOawheUYKREyFsIqEfPLcAKegv8u0Xtw9CPUhj6%2FkBsdIZhONV&X-Amz-Signature=0be6034de6a473c1a4648c54f6d95215420b6c7b96bda71c5bdc0eccda1b8c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIULGVNA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDHCq9dY4wf4muD00sssndZhOOpCGriW7pOR%2FmoU%2Bb%2BRgIgSYHhtnGEO9ttJYb1AmaPr7Cq9yO5O7tRfKYZCugf0F0q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDMR1DPngoBJamVIf%2FyrcA3RltUGtNUxnTl1c1ShbXS0UpCw2G2bsBMMXelCycl6fl6w%2F4w1Dobxx09XKNenm5pLKSmLXQUdsEkW7RmbSL1B%2FEmKbF1GWooIRKTkUrYSzKWDsxtzlm0O8D1o3gfT3Kvp5zJLG4sMdfDcM91JCFmpzfvsqmCKld08xYw62eORT6ilwmDyDt0EqW4OkYCCxRnvcgjlU0hjEMdydF3XQknhUur0a9Y99f4pEHF0C7sFW2zjQkm2MdzwyuFsdstSZBIU3kHVGJCM3k3tx1O1WpNS%2BQdcYpHVq0y8y8B5Dcb8hUnwX5yHb1xRXveHmIvTmNBcMmPpCJrkE8lIntXm3OHBUQIEJwG9k3FenxP508aiVE1IyIILS9ql%2Bkbwz8ta1AfrV1k2FfXvZooCcllLtnk5Uz1OeOtwkq2H2Qvg9FnyjO2UzEZiHY%2BfYT6zyXNNp9%2BXO8M5%2FFXzBQAM1uTXPOK8DC15uDzE2C%2FgCDWdFV5Tv2C3oBQOvbAHT2%2FQabVRYZAW%2FcV87T8HrJU5ymYyuhHA66gUISQGk%2FTxA1PGlkAh9Zu10jFMpGN8IWdUlg6ZAty%2FqT7r5L6pkZcgY9yd4Zg5JvA1ARoNiFcvnfvYSYgH6W3Hx8KEDA7yfj9FDMMGFvMIGOqUB1ALiltMhpNxR9H3fVlmdCGQ1Dwn7JwRoqFv9YLu00pjspXm0aAbofxiKFtSKdnD%2B1LoWz9QmM6%2BNUPAbLwVIEkrCSO9qdVS7vU9h4mlwMW0PCYyaVxyyZs6HvAWTyOBRcyg0gf0vMQn4%2FSIhrlCWXS0YMiNIwiRSSBTZ%2BTdSlJfkHBqFaedUkxcUs%2B28GHvysy%2BEgBjt0gyS45fF1uLdLjrjmhW0&X-Amz-Signature=3ebd923fc1b9be1d6011b171153ab2746eeb51e1bdcdd815305be89cf3ba4518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIXGUHL%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDeZHRhpmlAAb3i6nnrLQ%2F%2Bf7MMV3wep%2F%2BuE%2B%2Fg8tjbGAIhANCu7RKJLuO3SwP%2BjmEZpz0mYSEu3tNhwjuNnuJbkGM5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgyHlj0%2Fj3IztA2ukpQq3AMabsOKtA04DPDqb55YG6eqmC3xrGqin9c70z7tDh4NMxNueD2A72WWUcrUe%2Br%2Fa%2BVbeTopCdnRPvwVVPSOhGawd5v4XrLABmDdvwxl7a2ZhsxBrXn46hg21QTWkqxd0uPAwWvjnFULbcT8aq8MO0lF8DmsGAOo7YUkOn%2FNBEHhqIIjGpfyJBkMjcw6C0jy0zy%2Fcr1x2Toc42YGoZ82Lf8H5VmDTCem%2F630RNdg%2FyQ9OuJBGylI4%2FgYmBVV0mcX69T61xJZ9t5N%2BRGYSbxKifd5AOukRAYT5Zy9LfwbCdizVwWMJ7uIdrKwCS5tT1JG01pKQHjFiQ1rNqPJM%2Fa39K3LzsKW0V3yRHy1pNQvbe1frTuozyUC4Cjoi83%2BHIjrT5KJcsWbuAmcqNOFDcBooWu82IJhTdSevn3M9Iv4yMJKCWRTYoMngU27OWTrunJv2iOGoO63NEcvDyZe6MAdY2PxOAZSBAEDBWD%2BAscrNOLD568zvGJCIL1wQ5lTMu%2Foh3vcofRyIVRnXqwc9nHOzV0dKgT0sQwcXaSB6rscHVtbNATuvL12oUFf%2Fqz6oU1Ma3kR5mWYa0LoIwMnsbUyBn9UThxpCYzYI3rjcre%2FGPdSmqmJfSHHwkrrvJdpbTC%2BhLzCBjqkAVRuORhFwOH%2F4ofrLFadQp9XxO6THBDQPr1BLeV6x9x%2FkhepxbiOnkoTeizaMWglv2fcISt5ZkLwIuwS0XDlfrra9q0brJJRi78BD576GN26PPdJiq0LwxektJho6FFfsxrraZ0QECvNQG0cQqG%2Bhs9knXYhN3JDfGLT0NB2cCN25F38e8h9i8gl7p4ViEQP2pLw1kPDDmCWJekzoxY8H8CxcDBM&X-Amz-Signature=af19a8a2d16b02a45478fc50ef950dcc0cd1e774cd59ec1a08efceb026731e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
