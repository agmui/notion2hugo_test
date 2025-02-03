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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4G3KPJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDLzslzssSwok2Z8IsiwRldvdEliyLsEJgi7p9xp%2BT%2FcAIhAMhrfpnBiv30IvctNWJjdmGVaLGGVXLjovjBu3XGSUEpKv8DCBoQABoMNjM3NDIzMTgzODA1IgztmftSos19MDUwd%2BUq3AP5qKCL3JweMz75ixl4MPGf4k7bnWdoFYFCDRRWj3ruvD95xNThv7vWy33D5vMMQuh5lYUTBhnChD%2FInYQf2pAlisEz5%2BIzlOfeTUUi7IrbEs%2FJgNp8eza2lqBjqiFQZmFESyRbG1ywG5rvgAcx5gnYQ9Rj5HaGXRwE4y4gFoZe9kq%2FwB4TAp8e55tcsGOxD%2FSkk5xzxZ%2Fi%2FEAGeLb1eik8vqY2Tiu6TpF1IjDZZkRGOLNM06ux30ihuTGK7p9aM6kJ1yno8bNF%2Fpu%2B9X3tJ3s%2FG%2BXJ4EEn7ckIawpA4bUnuodg6LBqRdoF8iRjcecvPmfNKhu83UXXWJMtFujCU02MWP5%2F8QX7Xy4HSFxVZWjjGbJZ0%2FShcH5z%2FitLwXyExMgNM25qMlEYbT3YEe6T1x4SeNCRFrrtQFbpZMi%2B2O0JD3yldOXiD%2BIGWUeEHZafBD2XHw5Itjouck5RR5s6bXK23LezZJosfdfKmukUVLryO6xs3XRQq92Ct8uVxv2eUppPP2e8C%2F%2FOqkqP0uwjRezZsCjfqAtWP1Vj6ANqhdya1bvXdSNJ0sDTh6shNpyDC6Do%2Bda61izCBKQho%2BDYHOKyHFnM9Ps1wQRwILGzMUy%2BEJr%2B2NU9x4HR29Pn%2BTCm54O9BjqkAWuiBb9vN112QZcXFu7TwVv9Mi34wRklbxqgOfQzfWaOoG2q9bVj9VVwmdqMcSvOGjfjm141T3IGsXe7CwgDm3fdt%2Bx0N1hETP6U34MKwdSwNym2rVCYm92%2BIw0G9ElgKJyczo2hEye8Jz6UW%2F4JP2KvzlHcqvyT%2BOb6UZwLXz1bQiJZsIZiVqSzWNkSuEsOnxY0wHcyTF6QeEPE0%2F0%2FPawjF7s6&X-Amz-Signature=729fa883e8394cd5cd79f501adae2a4fe27511d991c33a1bb6d3e7ae6dc7882f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4G3KPJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDLzslzssSwok2Z8IsiwRldvdEliyLsEJgi7p9xp%2BT%2FcAIhAMhrfpnBiv30IvctNWJjdmGVaLGGVXLjovjBu3XGSUEpKv8DCBoQABoMNjM3NDIzMTgzODA1IgztmftSos19MDUwd%2BUq3AP5qKCL3JweMz75ixl4MPGf4k7bnWdoFYFCDRRWj3ruvD95xNThv7vWy33D5vMMQuh5lYUTBhnChD%2FInYQf2pAlisEz5%2BIzlOfeTUUi7IrbEs%2FJgNp8eza2lqBjqiFQZmFESyRbG1ywG5rvgAcx5gnYQ9Rj5HaGXRwE4y4gFoZe9kq%2FwB4TAp8e55tcsGOxD%2FSkk5xzxZ%2Fi%2FEAGeLb1eik8vqY2Tiu6TpF1IjDZZkRGOLNM06ux30ihuTGK7p9aM6kJ1yno8bNF%2Fpu%2B9X3tJ3s%2FG%2BXJ4EEn7ckIawpA4bUnuodg6LBqRdoF8iRjcecvPmfNKhu83UXXWJMtFujCU02MWP5%2F8QX7Xy4HSFxVZWjjGbJZ0%2FShcH5z%2FitLwXyExMgNM25qMlEYbT3YEe6T1x4SeNCRFrrtQFbpZMi%2B2O0JD3yldOXiD%2BIGWUeEHZafBD2XHw5Itjouck5RR5s6bXK23LezZJosfdfKmukUVLryO6xs3XRQq92Ct8uVxv2eUppPP2e8C%2F%2FOqkqP0uwjRezZsCjfqAtWP1Vj6ANqhdya1bvXdSNJ0sDTh6shNpyDC6Do%2Bda61izCBKQho%2BDYHOKyHFnM9Ps1wQRwILGzMUy%2BEJr%2B2NU9x4HR29Pn%2BTCm54O9BjqkAWuiBb9vN112QZcXFu7TwVv9Mi34wRklbxqgOfQzfWaOoG2q9bVj9VVwmdqMcSvOGjfjm141T3IGsXe7CwgDm3fdt%2Bx0N1hETP6U34MKwdSwNym2rVCYm92%2BIw0G9ElgKJyczo2hEye8Jz6UW%2F4JP2KvzlHcqvyT%2BOb6UZwLXz1bQiJZsIZiVqSzWNkSuEsOnxY0wHcyTF6QeEPE0%2F0%2FPawjF7s6&X-Amz-Signature=14c5abae1bdc1b80d473fc0d5605037ae301bb49afa7182325f82d622ab8104c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XEBEZUS%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCPbwI08c0azWKH7rwa2i2oEo3ESPSj78Q1W5CSYOX7bQIhAJSASSrDFo1OJLdDapxbmeX78yIiGIhyTn0RbqPq19ilKv8DCBoQABoMNjM3NDIzMTgzODA1IgxOcpQYOBwHncaJLZkq3ANpAw3UNR%2FxFvt9q5hLi%2F%2FogcRSlxWoVSyOo8loSyHVTNf%2Bo5c%2FoXWHt5bu9whyJVQpF51stT3VjNsq4F7vme7539H6rbfHhobJ05MDKDD1ZTf6nKHzqwbMpmDEYxC7QdB3GFiOf8N0U9AUDA4NiE6iWb6vpckIR%2FoJUZbWKy06qdDwj3jzB3UtWKgp9tY5SQznU%2BDezz4e3Qz1XhEqRQKJwOHDmsVZiFSz5cfNZLxsywG9qmAMZZLeCcdsP3wS9gnyovs%2Bshe6v%2BMmKI092xViP%2FuS3xC5OHcuu0RcIa%2Bv9tK52%2B0l2GVm03hV4uQk9fiHOzPa35h8cmOYyUj8DTn1PJ0TO7SMZ42omLAUISsNhG%2BDmpemM6CZfx9ghgjXBoODZelXdFe%2B8kBw5r4DZp9ADk0%2BNfS59wuJE%2BMcrwKwVQGMNyDRAN8D%2B3fJvh11BkSrgj0z2BOx5Cf%2FXiHABQpsSomF2s5ZnHVxCISxm2itb6mXIKKlzasLHMcIlyo%2B1Fyf%2Bo2E74JqEfVmAKwY9qNg8zgbPjZLUaIKUt%2B2AALRu7YXgWKL4VtThkU7LObmVdnCr%2Bv9lu3LUxUz5SvxmOcREjJUf7ziXRr7Bf9der89UigbKb1W4LuNCyQTjzCt54O9BjqkAU0eRvhuhQWrfuiPPsJzrwraV2h5dkGO3uDo5S1CpPIBAZUGts5Q1X1140yXOvbzNZ5pZq54dNLSk67XPabPdbvmpS1J2vvg9vljJgw1I4ZSA90%2F6garjVW%2BYmHTPas36QL4p5ks080akQcqk3XdsWRKgCYPfb8HdUQRg4%2B%2BwTyFVT%2B4ylj8K3UU3JujsHq3t6HhsAbs%2BRwie3hEloD0EEzsVeFt&X-Amz-Signature=a571a8233ad0b7f85e1d9b0dab738dfcd796ab79ec489c2adfcd55918d4144af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WLBNRFW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIH5sOOqfi60JGosz4%2BVumUuwdsy3IG8ui6vCdHlnE7kNAiAm4wRhp%2BVvD5ak3HjTBjqYN6oTsQhl%2BSuzX7iuPZGjgir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMZ6VjGaaDUJOBqEu5KtwDpXXCsA1%2F8PzwM8WK6Tv8vr6bmgtXDgQRXaIrBLIs0q7F%2Bwzf7pOcpgbeUBmeLfV9kKyx6vqxHMQAiHUQAXDwQ98Fm4wSY%2Fx9sUoQfxeFUGBsaqhXXleSzmkvxwPZCAdkH%2FwQBIHWZ8XPGbBJGeoT5%2BV1r7PDK8KYsYQDPjSZWYoxbBpmeYiwjpLEaGgF8Z%2BMF%2FhB4lpmS8ArXLveLsAsC1pBpH62A%2FGUrVuN5W60bIDoNOq15tA56OPxJew9pIYT3WCMiUHHVVqK53B2k25u20GV9RKKqvvDTf9XUimPF5UfsztCCN0ezZjsHNG03%2FFMtBmowZrPDsPFvS1Uf%2Bm71FQSyn%2FklBnS8xBEe9zBBn3hqmW2%2FOD4YnDoYnrPfRE1zWT%2Fli6IrrXcYF8A%2Bs%2BfojhtKXF%2FIgp1p2OB5qS9KyZiIbw%2FA1okxWcp4I0aPu8wv5LHRuukk0UGsgkzj7r5K5zMyMmDL%2BsgxHwnr%2BLE3UV3Zm7t8F216Fok962GQutNcWnJUK1vrEmaJyopJj431ADtxLD5VFvIVPQgEPQp1mCk%2FGi7qxVzpIz5SNt3wAwbLMSAAB3qaij%2BXBMKyXU%2FAXikLA%2Fl4gzo4US9YVE3b%2F%2BLL1Yn47NiY%2FmdkBUwpOeDvQY6pgGkj%2BHntLD4saWlY3I839KPX5tglws%2Fyrb0LOk3r0LNdlRLo8rJ5aPJJD%2BU03KSPmFOjzANX9G%2BO4a1i8LaoY%2FrUfGzk600JNoacDVi9wQwvGNkakefeZzsvfMENNriLSh7lPaKbGZwbEq9nLzC2tPvjl%2BD6jfONrdzn9BJyM34qE6kafpBpWab5HXPIDmo2R7B6aSYp%2B9Lr1oOwzqcKU1gPwNgF1bX&X-Amz-Signature=f2a08fc6bab7cf721524cedd318bddddf609bb6720b600296ba4fc928691053a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y4G3KPJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDLzslzssSwok2Z8IsiwRldvdEliyLsEJgi7p9xp%2BT%2FcAIhAMhrfpnBiv30IvctNWJjdmGVaLGGVXLjovjBu3XGSUEpKv8DCBoQABoMNjM3NDIzMTgzODA1IgztmftSos19MDUwd%2BUq3AP5qKCL3JweMz75ixl4MPGf4k7bnWdoFYFCDRRWj3ruvD95xNThv7vWy33D5vMMQuh5lYUTBhnChD%2FInYQf2pAlisEz5%2BIzlOfeTUUi7IrbEs%2FJgNp8eza2lqBjqiFQZmFESyRbG1ywG5rvgAcx5gnYQ9Rj5HaGXRwE4y4gFoZe9kq%2FwB4TAp8e55tcsGOxD%2FSkk5xzxZ%2Fi%2FEAGeLb1eik8vqY2Tiu6TpF1IjDZZkRGOLNM06ux30ihuTGK7p9aM6kJ1yno8bNF%2Fpu%2B9X3tJ3s%2FG%2BXJ4EEn7ckIawpA4bUnuodg6LBqRdoF8iRjcecvPmfNKhu83UXXWJMtFujCU02MWP5%2F8QX7Xy4HSFxVZWjjGbJZ0%2FShcH5z%2FitLwXyExMgNM25qMlEYbT3YEe6T1x4SeNCRFrrtQFbpZMi%2B2O0JD3yldOXiD%2BIGWUeEHZafBD2XHw5Itjouck5RR5s6bXK23LezZJosfdfKmukUVLryO6xs3XRQq92Ct8uVxv2eUppPP2e8C%2F%2FOqkqP0uwjRezZsCjfqAtWP1Vj6ANqhdya1bvXdSNJ0sDTh6shNpyDC6Do%2Bda61izCBKQho%2BDYHOKyHFnM9Ps1wQRwILGzMUy%2BEJr%2B2NU9x4HR29Pn%2BTCm54O9BjqkAWuiBb9vN112QZcXFu7TwVv9Mi34wRklbxqgOfQzfWaOoG2q9bVj9VVwmdqMcSvOGjfjm141T3IGsXe7CwgDm3fdt%2Bx0N1hETP6U34MKwdSwNym2rVCYm92%2BIw0G9ElgKJyczo2hEye8Jz6UW%2F4JP2KvzlHcqvyT%2BOb6UZwLXz1bQiJZsIZiVqSzWNkSuEsOnxY0wHcyTF6QeEPE0%2F0%2FPawjF7s6&X-Amz-Signature=406894ffd70dc40f90b2150d04e968800f5ee53263f69a3b674679966c14405b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
