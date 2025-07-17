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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU4TOFB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBNXzzbZyMY%2BsX8kCA5tfkqF1VevELRwOWcC1D8vMQxbAiEAt%2F1ZuinauBhNQhWTP72aIWPtRwyLKVNcCG4%2BUpnXud4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJIhi9SIrREEVSi1nCrcA42s51jvSEF9r8WRJiIAML7k%2BVmSwaZ1PWsiMlFNhEHH9q8QM%2BFZ9mVHd%2BwGDimXNTZGColRxx1IO1QWdIhMuhHzsKX7IpeeWkNRF3MKSWMB%2Fb8jki6%2B1WqmThT7sLDNrjjnS4qq8HGtN%2Bcl1gdtR2K3teWfeNRvcFhk%2BiuooIOdNgeBH5KHOgY%2BXngpkkBW0H9Aj1OMjjbcwprT%2BKMOJW%2F5yLUeKeEo7EA2Bwckjgdg6CiechqeUZZu%2FlIfV2iEuUBue8DAEKrgmPDqsBOs9DPBx%2Fui3c2uRcbTUNtkndK9I1%2BGa0CO5Cn6gtAWqPPhlxYS%2BhW4MRMvVhKSOFavGw%2FZtySEo4SHxGUnO7ZxtHvJGOwUE7c2KeMBI9l0vRJpwmoBd08hzMHJs3fZleF%2BJCVLOMaCfvvrxgX9qhf494g7tyKlAwkSwMQzU2qKICgWafgKnzVaTrCQiQuV4GY6F5JczBIgRShV%2F9lgB8dy2BGdAk3NakU1tI5sIArm4d4gouShpc8xmprF%2FEx9Y4AQJ43ykmqqW2LkGTvFzXQ0%2F5rCHWLj2XF9WbHQLZg8A%2FNdtrx%2F4Tq1RJXYzW7ZJPM1C0ViuDumOHhc9qQkYGBwcA00uNHxkY8BtqRvUSdeMIu848MGOqUB4Z3V%2BNkSkd2IG%2F2GvCGWrJKVk2Mbrfvj79xnrKcWMEkLbdHpKus0sXRSinxwAHBiThyz7ecRadmeIh9x2Psth1NdhGX33FZ8STZG%2Fk2m%2FOvKftlHEF18utBOQA8F3wr142E6GUfLcDchFDn713H6V%2BYvHrF5vJ06pG%2B0KY6ENJFprx72LTFqyvR1Gfhte4%2BrYpKjyzHSwH6wDsbXvaFJXuU8%2BpYL&X-Amz-Signature=71406c92903ee28e6ac6687da4173e5f462646c51e019a4a129bf9b133daace0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU4TOFB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBNXzzbZyMY%2BsX8kCA5tfkqF1VevELRwOWcC1D8vMQxbAiEAt%2F1ZuinauBhNQhWTP72aIWPtRwyLKVNcCG4%2BUpnXud4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJIhi9SIrREEVSi1nCrcA42s51jvSEF9r8WRJiIAML7k%2BVmSwaZ1PWsiMlFNhEHH9q8QM%2BFZ9mVHd%2BwGDimXNTZGColRxx1IO1QWdIhMuhHzsKX7IpeeWkNRF3MKSWMB%2Fb8jki6%2B1WqmThT7sLDNrjjnS4qq8HGtN%2Bcl1gdtR2K3teWfeNRvcFhk%2BiuooIOdNgeBH5KHOgY%2BXngpkkBW0H9Aj1OMjjbcwprT%2BKMOJW%2F5yLUeKeEo7EA2Bwckjgdg6CiechqeUZZu%2FlIfV2iEuUBue8DAEKrgmPDqsBOs9DPBx%2Fui3c2uRcbTUNtkndK9I1%2BGa0CO5Cn6gtAWqPPhlxYS%2BhW4MRMvVhKSOFavGw%2FZtySEo4SHxGUnO7ZxtHvJGOwUE7c2KeMBI9l0vRJpwmoBd08hzMHJs3fZleF%2BJCVLOMaCfvvrxgX9qhf494g7tyKlAwkSwMQzU2qKICgWafgKnzVaTrCQiQuV4GY6F5JczBIgRShV%2F9lgB8dy2BGdAk3NakU1tI5sIArm4d4gouShpc8xmprF%2FEx9Y4AQJ43ykmqqW2LkGTvFzXQ0%2F5rCHWLj2XF9WbHQLZg8A%2FNdtrx%2F4Tq1RJXYzW7ZJPM1C0ViuDumOHhc9qQkYGBwcA00uNHxkY8BtqRvUSdeMIu848MGOqUB4Z3V%2BNkSkd2IG%2F2GvCGWrJKVk2Mbrfvj79xnrKcWMEkLbdHpKus0sXRSinxwAHBiThyz7ecRadmeIh9x2Psth1NdhGX33FZ8STZG%2Fk2m%2FOvKftlHEF18utBOQA8F3wr142E6GUfLcDchFDn713H6V%2BYvHrF5vJ06pG%2B0KY6ENJFprx72LTFqyvR1Gfhte4%2BrYpKjyzHSwH6wDsbXvaFJXuU8%2BpYL&X-Amz-Signature=651fccc4cbb3e319036e173d3aa8a1253044b9a3c2587e1d5de9083850333e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU4TOFB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBNXzzbZyMY%2BsX8kCA5tfkqF1VevELRwOWcC1D8vMQxbAiEAt%2F1ZuinauBhNQhWTP72aIWPtRwyLKVNcCG4%2BUpnXud4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJIhi9SIrREEVSi1nCrcA42s51jvSEF9r8WRJiIAML7k%2BVmSwaZ1PWsiMlFNhEHH9q8QM%2BFZ9mVHd%2BwGDimXNTZGColRxx1IO1QWdIhMuhHzsKX7IpeeWkNRF3MKSWMB%2Fb8jki6%2B1WqmThT7sLDNrjjnS4qq8HGtN%2Bcl1gdtR2K3teWfeNRvcFhk%2BiuooIOdNgeBH5KHOgY%2BXngpkkBW0H9Aj1OMjjbcwprT%2BKMOJW%2F5yLUeKeEo7EA2Bwckjgdg6CiechqeUZZu%2FlIfV2iEuUBue8DAEKrgmPDqsBOs9DPBx%2Fui3c2uRcbTUNtkndK9I1%2BGa0CO5Cn6gtAWqPPhlxYS%2BhW4MRMvVhKSOFavGw%2FZtySEo4SHxGUnO7ZxtHvJGOwUE7c2KeMBI9l0vRJpwmoBd08hzMHJs3fZleF%2BJCVLOMaCfvvrxgX9qhf494g7tyKlAwkSwMQzU2qKICgWafgKnzVaTrCQiQuV4GY6F5JczBIgRShV%2F9lgB8dy2BGdAk3NakU1tI5sIArm4d4gouShpc8xmprF%2FEx9Y4AQJ43ykmqqW2LkGTvFzXQ0%2F5rCHWLj2XF9WbHQLZg8A%2FNdtrx%2F4Tq1RJXYzW7ZJPM1C0ViuDumOHhc9qQkYGBwcA00uNHxkY8BtqRvUSdeMIu848MGOqUB4Z3V%2BNkSkd2IG%2F2GvCGWrJKVk2Mbrfvj79xnrKcWMEkLbdHpKus0sXRSinxwAHBiThyz7ecRadmeIh9x2Psth1NdhGX33FZ8STZG%2Fk2m%2FOvKftlHEF18utBOQA8F3wr142E6GUfLcDchFDn713H6V%2BYvHrF5vJ06pG%2B0KY6ENJFprx72LTFqyvR1Gfhte4%2BrYpKjyzHSwH6wDsbXvaFJXuU8%2BpYL&X-Amz-Signature=76388b52740b0fc2edaeee37c0fe7d5169adc9a6b28ee61b3620c51bb46eb21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WO2UTJP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCQPrMWfueYhCgiI4z6jLJCa8ycrurJhJaIvJOUf6DGTQIgepKZFZGjfD1wefJ8aW63p5ktuslmP%2Fb%2F%2BFBgiVMCR3sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHPrKlg8cUlRcN8P4CrcAzVmALb3Z6COkfajywNY5%2B8rAEytu49K4s4jdo2tFwWQmcOQAAPpJ8AXjXTHbVmz2qhMYTZXmtJvox8nb9Kd3th%2FHXDcqlVq7EKIqj7sXs8ZJhE2kz9HNf7o%2Fv5MRqsBwZZiXih340nWvmj1AweMwOZQCMyUESHDj9%2F8VBVRo6bYcWfP31mY0xCgmrgwWybESxFWYGxW4VTDgycmpcQ2pb1e1LfsRQWcTK3emX7UdNNX4uO9O%2BjrnzFnfhY7CpigyPd%2BWUGRQDfggLrGxubVm1ZDLtdHiUYqae4OMByyDwcOKaP1RuZhbQTBfQka3w5uicA%2B%2FkoLvnvBeBCeHPrqH3CsWRqw6BbLk64ndsbPWdEghyJnUkDGSk7dFUI3LnYK9zLE3UhE%2FKnkxz9bw8hoPAzxWLBYDv7ahFDQoSY4mo1ieF0spKXsLiV%2B%2FNrmSavt%2Fs4WcAeJSWEKwuST%2BvXiMSWiUXmdGSa7On%2FD3YGHXaZ5ZhTlzMwEZNc2AQA56lf%2FUjzN7k64d8Bca7ZwMscLj5nfRvzOWlcb0CeSme27OO7S%2BndnGyxnDdvzbpXM%2Bq5V5dggjc7b7MW0s6kciIoVoGGvtvaD3vbO7Ok9%2F0FtbgkbZxAE0P9BGUzkP98pMMG848MGOqUBBD0LYYOs5Rl%2BUN0JVs2qorjC4Go8YA8xUceU56GRBOaWjoOJAQSPzUngVudcV8VxryIu6STFyGlBc06QToTgVBI%2F2sEw0Ygio1eRM9PmkH6i7LO4eDpDp9ce7EeCb1ejPTOBB0Kk5FnjhMOPU947ruoHxNXk%2BR07cgubZv0MK4Bpzmi6E0ySy71UJt5NX%2F9YU7HpJhMDlkWA8415b5EJ%2ByYeCr2%2F&X-Amz-Signature=ed43daaa4086a69cdb127b894f8d8c9a6a8779722a37d65f0d2792a1d6c79daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEYZ43U%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIB9yen%2FgMJgF2x7k%2Fst2iMs7w4FYSJuI51%2FSuf38ebg9AiB%2FvFeb%2FgKKxJBF42KXEaI08SZKQVftKYJstAit9Hqj6ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM2oyFjSIaob9UFfr9KtwDPZKrOLshrXZ23cVe2ge%2FlusUmKqf0IO%2BBKyWny1F%2FEgOYuz4ZcmW4rYZmn5YGGWIb0nsLiHS5TrJ4pE2QFffR6bNj%2ByyYQxBbKBTac8VbdYTNQe1NNHdxdcA4W59DGXFiZqvHEffJQxodNMLtxsBRZW72YSjBYRo1ajUmomZtwoV1Z0RNPqubfptJOuUmE%2BbyNWtmOOGsVZ1OjMF1%2B67bu7%2BYRd8HrD%2Fre%2F8%2BQce2IJGHmFPHQL8Xtzl9hu%2BDeMrrtXJxsqS9xnNLUWRoBeDBsefO0EAbNKMGPeHUwzFAO4VJsNKp1A7Q7JRtHcZozLWx30skUMylGkZaGDhqoM%2BWzie3Bn%2BwoZEmzkQATZuLbuFe5gHftj1RfRZ2pQEu3qKlW0naTHOm0vGPzwV64GZLbvmVt0v9TSSmUidhXhH2t%2B3ECLzyBCBGva8KNvEpnga2BlM1XsH%2BJgHc5Ys5XxWGlw6M%2BrJuEhOKbnKB3%2BoOb650agy7e%2FcSuhr34huTCrmL3KOJ0ws%2FDpI7cwWjTL9dk%2BAtkai4aq04kUK%2F%2F40LUBoe5EpsPgsAObS%2BBT2JJnfBKCLhb3rC4GTDkhePKvWiOiJ4Ntks0o5rXr8juRuMsl5GVx4ECIiJFqhgCswrLzjwwY6pgEjuX6MJXESVUiSkvu1pwTUkOw8iNTvaOsa3yoDXb7Ki%2BUOLsQNTzW4lef%2FUtasRnUR1xOjMws8whk4TlVY8AE1VUKHXqw4DNXZf%2FE5DRPPv1CVW%2FnvnLwqrc0C1E59rrDX1ADgaEZfYxmCMzICtt8k0QoVttkdEQUhw7w5FLe7s%2BPTEIl8zXPHavwDByv5verUFHoHLWJx4Yx6CeqlFcL4k1vn7afv&X-Amz-Signature=f20c962cc005bb3665b3ad533075473113567e67e1dae7f11c89208ee40f6e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU4TOFB%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBNXzzbZyMY%2BsX8kCA5tfkqF1VevELRwOWcC1D8vMQxbAiEAt%2F1ZuinauBhNQhWTP72aIWPtRwyLKVNcCG4%2BUpnXud4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDJIhi9SIrREEVSi1nCrcA42s51jvSEF9r8WRJiIAML7k%2BVmSwaZ1PWsiMlFNhEHH9q8QM%2BFZ9mVHd%2BwGDimXNTZGColRxx1IO1QWdIhMuhHzsKX7IpeeWkNRF3MKSWMB%2Fb8jki6%2B1WqmThT7sLDNrjjnS4qq8HGtN%2Bcl1gdtR2K3teWfeNRvcFhk%2BiuooIOdNgeBH5KHOgY%2BXngpkkBW0H9Aj1OMjjbcwprT%2BKMOJW%2F5yLUeKeEo7EA2Bwckjgdg6CiechqeUZZu%2FlIfV2iEuUBue8DAEKrgmPDqsBOs9DPBx%2Fui3c2uRcbTUNtkndK9I1%2BGa0CO5Cn6gtAWqPPhlxYS%2BhW4MRMvVhKSOFavGw%2FZtySEo4SHxGUnO7ZxtHvJGOwUE7c2KeMBI9l0vRJpwmoBd08hzMHJs3fZleF%2BJCVLOMaCfvvrxgX9qhf494g7tyKlAwkSwMQzU2qKICgWafgKnzVaTrCQiQuV4GY6F5JczBIgRShV%2F9lgB8dy2BGdAk3NakU1tI5sIArm4d4gouShpc8xmprF%2FEx9Y4AQJ43ykmqqW2LkGTvFzXQ0%2F5rCHWLj2XF9WbHQLZg8A%2FNdtrx%2F4Tq1RJXYzW7ZJPM1C0ViuDumOHhc9qQkYGBwcA00uNHxkY8BtqRvUSdeMIu848MGOqUB4Z3V%2BNkSkd2IG%2F2GvCGWrJKVk2Mbrfvj79xnrKcWMEkLbdHpKus0sXRSinxwAHBiThyz7ecRadmeIh9x2Psth1NdhGX33FZ8STZG%2Fk2m%2FOvKftlHEF18utBOQA8F3wr142E6GUfLcDchFDn713H6V%2BYvHrF5vJ06pG%2B0KY6ENJFprx72LTFqyvR1Gfhte4%2BrYpKjyzHSwH6wDsbXvaFJXuU8%2BpYL&X-Amz-Signature=d40c8452e971846a3c2c772ce470fc58a5409c50a768a390d4713853264fdf4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
