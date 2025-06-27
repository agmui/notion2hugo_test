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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMQHMGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt44Fy7kG3yEeCYN1NZQ0Gyf1QBK%2FLFMGUmeH%2Fac4iqAIgM%2FMKcIye6FCAsQhv3kHchET4GglNuJe1yy9cCRFMJ%2FIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAj4SbJPHDqCo9KQSCrcAzstsRpWkFJKC8uV53NyBZrGT4EfGmm0bttXImOP0WIGkGQU6d%2Ftyz%2FgHFhhvewEg9fDUIeJPZZyK0cSWKHtM8Fg4OfsWRYI4B5zw1OXO5xLyvVFJQ1QeWuKxriG%2FSvr9ikZG7bb%2FvqqlQhH898R%2FVnhcWI8sK%2B%2BitapGetnRzmC1DU3Qhv%2BmuxFlJaCivpRHdE85ilKLSPV8swHT%2FiQLg8sd4%2FhBdYvTu3oY6RM0h71GUa9hVUC03S49Qs4WlorUfLxfPftj93NDQmPb7fN2jpJeVpnucJt3lQuL0aXDXNdMNLlZrKfA2wq8yf2QWood2jKNvO6AfEDcQmnTQsIxJ3P1ipjtl4KEjmTqXxly2YwXcGa0ZL1AZe8eVHhy9H7zGinlxUUY2tWkhzugeFv4W4KgpySumnr9WLFTg5uFfvJXjiqJZC6wPvmC8aYGNXzgEhDysXwvPJYu03FjOLlzshvR1aOO%2F7XMkw8CZyDfFyP8yXa%2BSw2GuhJlOCEleJM8BXc%2BLEu3J9qaVNL4PT9w1pxNN%2FNbSYjKaR1J6Hx2%2BYNh2TxP81hvVJZuIZf2JrOVnDSgu0%2Bn8LvMfBJOKIKdwSLWHCzLDmEh4FCLbxUrcuRmBSUAkJ7Os7boZ4WMJrL%2B8IGOqUBeiyW%2FWY%2F1m3cy80WhR2IsjyWWTmd2BOvpYoxuU6BK5f5si2xU7MnGzL9JNsWO3pFLcn5x8D%2Be1VAjhTQE9YsUZ2itxwO1005EeatqpigX8HzfLsyjC3d5mkfR%2FMas%2FHQUbtYme59dpc2ALkf%2F8IQOuOEoIal7hkwqTKHtfUzvXZYeAh5R0eAOezJSf1iAovv6ezVmDBM0KBFrPO5RoMy4eGX1NsC&X-Amz-Signature=33bebee021d89ea124c90d754b6adb159ea92e4da4fb63680b1bb03bffdb8c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMQHMGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt44Fy7kG3yEeCYN1NZQ0Gyf1QBK%2FLFMGUmeH%2Fac4iqAIgM%2FMKcIye6FCAsQhv3kHchET4GglNuJe1yy9cCRFMJ%2FIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAj4SbJPHDqCo9KQSCrcAzstsRpWkFJKC8uV53NyBZrGT4EfGmm0bttXImOP0WIGkGQU6d%2Ftyz%2FgHFhhvewEg9fDUIeJPZZyK0cSWKHtM8Fg4OfsWRYI4B5zw1OXO5xLyvVFJQ1QeWuKxriG%2FSvr9ikZG7bb%2FvqqlQhH898R%2FVnhcWI8sK%2B%2BitapGetnRzmC1DU3Qhv%2BmuxFlJaCivpRHdE85ilKLSPV8swHT%2FiQLg8sd4%2FhBdYvTu3oY6RM0h71GUa9hVUC03S49Qs4WlorUfLxfPftj93NDQmPb7fN2jpJeVpnucJt3lQuL0aXDXNdMNLlZrKfA2wq8yf2QWood2jKNvO6AfEDcQmnTQsIxJ3P1ipjtl4KEjmTqXxly2YwXcGa0ZL1AZe8eVHhy9H7zGinlxUUY2tWkhzugeFv4W4KgpySumnr9WLFTg5uFfvJXjiqJZC6wPvmC8aYGNXzgEhDysXwvPJYu03FjOLlzshvR1aOO%2F7XMkw8CZyDfFyP8yXa%2BSw2GuhJlOCEleJM8BXc%2BLEu3J9qaVNL4PT9w1pxNN%2FNbSYjKaR1J6Hx2%2BYNh2TxP81hvVJZuIZf2JrOVnDSgu0%2Bn8LvMfBJOKIKdwSLWHCzLDmEh4FCLbxUrcuRmBSUAkJ7Os7boZ4WMJrL%2B8IGOqUBeiyW%2FWY%2F1m3cy80WhR2IsjyWWTmd2BOvpYoxuU6BK5f5si2xU7MnGzL9JNsWO3pFLcn5x8D%2Be1VAjhTQE9YsUZ2itxwO1005EeatqpigX8HzfLsyjC3d5mkfR%2FMas%2FHQUbtYme59dpc2ALkf%2F8IQOuOEoIal7hkwqTKHtfUzvXZYeAh5R0eAOezJSf1iAovv6ezVmDBM0KBFrPO5RoMy4eGX1NsC&X-Amz-Signature=ae9d3eb34221b6bc8ff11adcc54b2f0b7b3736b164d2314a9eb88f05d09d93be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMQHMGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt44Fy7kG3yEeCYN1NZQ0Gyf1QBK%2FLFMGUmeH%2Fac4iqAIgM%2FMKcIye6FCAsQhv3kHchET4GglNuJe1yy9cCRFMJ%2FIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAj4SbJPHDqCo9KQSCrcAzstsRpWkFJKC8uV53NyBZrGT4EfGmm0bttXImOP0WIGkGQU6d%2Ftyz%2FgHFhhvewEg9fDUIeJPZZyK0cSWKHtM8Fg4OfsWRYI4B5zw1OXO5xLyvVFJQ1QeWuKxriG%2FSvr9ikZG7bb%2FvqqlQhH898R%2FVnhcWI8sK%2B%2BitapGetnRzmC1DU3Qhv%2BmuxFlJaCivpRHdE85ilKLSPV8swHT%2FiQLg8sd4%2FhBdYvTu3oY6RM0h71GUa9hVUC03S49Qs4WlorUfLxfPftj93NDQmPb7fN2jpJeVpnucJt3lQuL0aXDXNdMNLlZrKfA2wq8yf2QWood2jKNvO6AfEDcQmnTQsIxJ3P1ipjtl4KEjmTqXxly2YwXcGa0ZL1AZe8eVHhy9H7zGinlxUUY2tWkhzugeFv4W4KgpySumnr9WLFTg5uFfvJXjiqJZC6wPvmC8aYGNXzgEhDysXwvPJYu03FjOLlzshvR1aOO%2F7XMkw8CZyDfFyP8yXa%2BSw2GuhJlOCEleJM8BXc%2BLEu3J9qaVNL4PT9w1pxNN%2FNbSYjKaR1J6Hx2%2BYNh2TxP81hvVJZuIZf2JrOVnDSgu0%2Bn8LvMfBJOKIKdwSLWHCzLDmEh4FCLbxUrcuRmBSUAkJ7Os7boZ4WMJrL%2B8IGOqUBeiyW%2FWY%2F1m3cy80WhR2IsjyWWTmd2BOvpYoxuU6BK5f5si2xU7MnGzL9JNsWO3pFLcn5x8D%2Be1VAjhTQE9YsUZ2itxwO1005EeatqpigX8HzfLsyjC3d5mkfR%2FMas%2FHQUbtYme59dpc2ALkf%2F8IQOuOEoIal7hkwqTKHtfUzvXZYeAh5R0eAOezJSf1iAovv6ezVmDBM0KBFrPO5RoMy4eGX1NsC&X-Amz-Signature=4c105f32105c78e41cdcfa42f6a012ded37417809c19e1397bf7ad944fe851e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKDWIDUT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXC%2BYEFlwvVtwz%2FENbQTfQI5lCPMC6UbKmRmDNOS5ERAiEA7ZnV72JFjOtrmlgSM33D1COgMtz%2Fv5AlSyFi9Bs9EGIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFUKdqoaaBasjtFCGircA4xoD8X6P1yHJN8KriMtD3nZdoTAZoyIf0M7cFx2ZE7hveTLDSFobtzd7Fs61zw0BRviJQp8Cq7ReB9e8laHpBQcMdfwOAMW68kGEM9m0wXuB7X%2BPuFl2gGFmuuA8Zer1TGgz5lrBPMzY6qYwXXinz%2B%2FXNrlHtylt8o%2FGdx69RpFU64vg3kHyUatcl%2BUlZIS3LBaLM65n0Y%2BsjRZptA%2FdEI1yykgSM1XIi3oNhWYGt%2FVE0IG4uC1i1SGO3%2B%2Fi6FeGk2jibw04%2F%2B1Wfk9gOzvLC2MTC8LRqYTJE0UUJyBYOjNDB5do03dJ0dQ5QWlFWMUqELPTCbDX5nCUqUaW2ysXd%2BYYyY9DW4NuNKoLpmLTHjU0EZ5e97ROj6LdATPwFLsuVXqlZ%2BoTHw31F2LyRy1cx%2FwSR8qccerKxqg6reU%2BP1yAltDOOIPmr8ABIrbpS%2F4VUmw3V%2BbwY64oHAaAo88%2B%2Bzbgo7LruHyU5652u2VJ0Vrhdj4vZiTiSipDRanGbMW9wMGg8KXmzQ%2FPbAXfcTI79nPp8mWQTW5E1t5svH0MPVhmElAviJl%2BMrmYOOlihfEEXnlfnIKFXak8jbLLVOB6gF0jW%2Bm8lqvMGI0Dsj53D0Br0oghCE%2BVRkZxA%2BcMODK%2B8IGOqUBgEbGJSR16faK5YbpRCZfljK3Dx56hBwFCA%2Bm0T5WcBIQFAIIjMGRl%2BGRPEuGhahRuXWCN87T%2BgO9qMfgxZPUmQU3OzJ6osv5tqKt9CvUt4lEKn%2BMc3fY5cFKwd%2FXm7QVL2iPRci5Qs4ljnkFFrYg1N48RfW3h8iw8T42oOcH8kXXl5OK8Uq0hZq7LU2en0PODXCJx4az3sqH2lx58LpBiNGsWJaV&X-Amz-Signature=e592582d8b20302364bdf9ee647e04f9ccec2dae0f6521f251adfd9a9c0c06e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW4FQMU2%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2rX6R7HM6sWbDmaY%2F8d6S0M6l2fClebjWXYoMasysqgIgAJ%2FFW%2BTGWGxme5fgyHiG8cjcO3CuCCG%2FeCZIRflpvIUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOYtUKjxbQFmaRUUuSrcA6UjU8nb8kAtM%2BKo10R5V2jnoQdkUkC7HqEBshw2gh41J2L6sHMpD8MwEMbGLjEA87WaEMpAQWMJp2USFxXnv%2BWTJ8hglbQi9Sphwqs5vrTWYMZa0K9%2BSC6BwC%2BCQagFHY%2B4%2Fhl60QabfhcgZk6Q2nHNqebsG7q6J3fhIf0Avzt3JnaSnLKmddTYp6N7htWF4ydQnr9Xo7HEjVYCmruvhj5K8GxpxzTX8V5TzMk5%2FUh4yKmXqAtCfCyIHP4zIk31vMI1BlUlaY8dirrzRhuKKNYLXB28cM6wtmQ3eGrcZm0LAKa4t9rAsSfosOtufxlh4wv9Npqf1euJ2vRM7dgk6qWrf4VpLuLQq%2FK4Y3MYgVrYGAwPYiyvi1XlW89vaTFsTaGVBgofjqdzQdvJSFYcBinZ4YB6K6Imv%2Bnj%2FJ7hHikCIzm8A802M8Gkz6sqKuyYq6akhSRe%2FmtlbfS%2FP5oTI%2FRDggSE9WcaOh4dmFGfCI3vLBCc7%2BRvlRVB9OSip16J%2FTnCN6oBvd7chHUR6TLg%2BTXABSZZcMQiJv35Db2bW3z%2FYm5AtA490uyk5g8Oo4HB77MYFTBAZEpvMT%2BQcKM8nNNhmQaY0EkrcRYneFXk37Q0AC%2BsO5Tgke5vLfSWMOrK%2B8IGOqUBu3rxq2fM2ougH7Ypkoy%2B7tsUpPGhwNFsmkR8GVCoZIs3o%2FMhob5df4pHq%2BxD4GMXTopn0PczJ6CJI7H2LatBrjj%2BoxuYizNb24WSrk3wxJr1MVlFOr3F%2FBn11UH5U2BpgsIBjxPJ%2FxGcyiek%2B1kLUgDwItXGxL0hoYTo%2FQrebr3AhURH4UHu4FU6mzEHBSxVDGmAOha7lTGBB9BJ4eeAHFgVxVkk&X-Amz-Signature=8f4103bc6923e9835e994af9c02bcbfb1d68a247170e08b2b2bf38764cd91cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVMQHMGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt44Fy7kG3yEeCYN1NZQ0Gyf1QBK%2FLFMGUmeH%2Fac4iqAIgM%2FMKcIye6FCAsQhv3kHchET4GglNuJe1yy9cCRFMJ%2FIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAj4SbJPHDqCo9KQSCrcAzstsRpWkFJKC8uV53NyBZrGT4EfGmm0bttXImOP0WIGkGQU6d%2Ftyz%2FgHFhhvewEg9fDUIeJPZZyK0cSWKHtM8Fg4OfsWRYI4B5zw1OXO5xLyvVFJQ1QeWuKxriG%2FSvr9ikZG7bb%2FvqqlQhH898R%2FVnhcWI8sK%2B%2BitapGetnRzmC1DU3Qhv%2BmuxFlJaCivpRHdE85ilKLSPV8swHT%2FiQLg8sd4%2FhBdYvTu3oY6RM0h71GUa9hVUC03S49Qs4WlorUfLxfPftj93NDQmPb7fN2jpJeVpnucJt3lQuL0aXDXNdMNLlZrKfA2wq8yf2QWood2jKNvO6AfEDcQmnTQsIxJ3P1ipjtl4KEjmTqXxly2YwXcGa0ZL1AZe8eVHhy9H7zGinlxUUY2tWkhzugeFv4W4KgpySumnr9WLFTg5uFfvJXjiqJZC6wPvmC8aYGNXzgEhDysXwvPJYu03FjOLlzshvR1aOO%2F7XMkw8CZyDfFyP8yXa%2BSw2GuhJlOCEleJM8BXc%2BLEu3J9qaVNL4PT9w1pxNN%2FNbSYjKaR1J6Hx2%2BYNh2TxP81hvVJZuIZf2JrOVnDSgu0%2Bn8LvMfBJOKIKdwSLWHCzLDmEh4FCLbxUrcuRmBSUAkJ7Os7boZ4WMJrL%2B8IGOqUBeiyW%2FWY%2F1m3cy80WhR2IsjyWWTmd2BOvpYoxuU6BK5f5si2xU7MnGzL9JNsWO3pFLcn5x8D%2Be1VAjhTQE9YsUZ2itxwO1005EeatqpigX8HzfLsyjC3d5mkfR%2FMas%2FHQUbtYme59dpc2ALkf%2F8IQOuOEoIal7hkwqTKHtfUzvXZYeAh5R0eAOezJSf1iAovv6ezVmDBM0KBFrPO5RoMy4eGX1NsC&X-Amz-Signature=b98b303875c4224406725cd38c28eff97d61c7214c1caca0d7d44dfa364ad840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
