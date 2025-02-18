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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=5ec70cfcdf657338fe0a326274a9b4dc8fd290d78804082062a063f07acac257&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=568c87cf4b80091ecfa33f1638240892ce2868396b7555a15bbba383408e9134&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645MIRJP6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCICOizfknrN%2BKbh2W%2BEh2ThOBsOMOjxEXZeetBYe59aijAiEA48Jj9QwwOC4Qq%2FcdmmFrYuS5QlkDlBToAdBB4aAl0CAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSPTD%2B%2FPBk%2BOTpLfircA08rU9HWFs0yFHE1HVEQkr2aRIYJ3noKCAvG2tUPtXOEslWMeCHw%2FYnp1ixJc%2Fakq4h3ekry5rlb3LhT7lDH9fzIVMGWKjAPw1mvjsIDD3NbbacjLv3OsEA%2ByqsiHoRYs9x8oQ1Z%2BsD6Iv2%2BIKGunrZsmVGJcLvyfgQlh7ZXJdXh5sTLdMOBaurFrXXMFvCL37MRfgKVvYR1%2FbiRn1OM8A%2F8hKX4GLN5m5rG8Ygg11niU%2Fu9k8Vmh3bSLQ9ZFHs8o97P1JM77Wjrht9de3sNzyYt%2BB6vHb5Lec%2BdSQdnHa96VqTK6zB86Jk8YxS%2BGxZMm5xcWHUioh%2FBICX95Fju8BBcPvMvPZo7tT6kHcS9rHxPIBkPR0GoNKL5R1R37UPwIMidvfxvrl3zb6ozkjt50t0zN5WmiL3ojIuTD7hnBJYkyJqfOkGjvMTq%2BFAQCO9wapghqW9XcXNPUditFGzNCku2zwasmw4YhNZUzlxGMmqnckxMWhG%2BFI8iWcwCVX3HblOB3JheDu%2BYzfR0YK79K8gLJc1FmTNmPogC%2FWOOPS82iWceV6iuWuju8A5JsG2Rbbb%2BzgcOQWjcKRBucNchJBgj28HzDOag2Wnt9RwDrfhvRpQsBm08hm%2BAswc4MO6x0r0GOqUB5rDQ%2FGGyr79SccI1jn7ucXvDdX0YcJs%2BepJ0vGnIuUhcOWFCH82UtR1eAjqbI1dAhERxHFOQdbRc9FX52d9NXeAhtXLUmOCK%2B4KddOAlhksuRJ4gMF8fO3tqsaWUppPBYYc2x%2FKW8ytcyUhC%2FVa5wSn6c5YTL6UK0VK6x10WmrOTXaQJmx5h7mrSoq3ZJLghbf%2BO8QJXRfMq%2BQxlXixl8r%2BVDGVl&X-Amz-Signature=f9bea2985c199fbccc5a5914b346ef84201836d20094cb7f4c0f2caf5b6a68ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMI2KMUF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCo5OtQOz0t%2BYqBSnW52wC7kNg3qjNk6DQfREbjPMIeLwIhALp%2F1zHtApLGHkmgBM0LeoMYYf9qElWmJ1jFvXhFpvDdKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFDO07%2Fiw7juNfpr0q3AOCCnNeS4fvmGRRHZr2z%2BZOM%2BqQzAPaRnYyqBOLbCfVnAw0EFXH1Ct8pZ%2BTno%2Fcu6RQxoxLlq12PUjRQSBD7W9Xi1xDI43Th1KpY%2FOp5B5w83oiSbN5Z9GDIVxmUM6yzSbI3kQVpDt9JaZKT6UiONxegwOAI45heMHrsZD39GjDZ12%2BHXpOL%2FTdN4H7%2BtA%2BVK6GnSPfm%2F1Ya1XzuFWVGAOMjXtVUSrYBhEBMWHvGqA48LBj29lSExyvQgYI%2B8NInrzr38SOlQcjkJrr1hXbzaUM7Qr6F%2FbbEP4sPY3XHnaKbsbPvA70wXFVJyUAdM%2BW8%2B1YKHRIlIJU9GN4LrrtbppZzFPkx0ANI9NuS%2FJ2zgkt12iVp5u5A11FieSA6OP9esxqfUdSwd0Nj5bdyJn0%2FpMbhmjUAYGIHxbN96qXKvcbAWgCNDddXdZJr0PEV644RBWMk5TZXQjKmWo6v4Z7TQn25JQrOM65kRw%2FfnwZCIkfjsdBCh0YF0gPjepZ8fs2MTG9OI8PBe2L0vDrAIgiJtcsA%2B0E6vbru3QJsldJM95RX3NITqkewE%2BTufWzUfaeJhvs%2BD4UQNY9uNejon%2FBZAp8Mi0nDrmrSR5wzGlsonCwyzJttYwnNfywrFIxETDmstK9BjqkAcRDhb3rNLKwwDLCPx2ltZ4Q1qTKE%2FLkKH6BP48MjWOs0%2FOOqGHIBHz5eG1PIz2Jy7wQexyWMF6MhrhYDsyhkeh9gcZZS%2BUkrAaDVc2v2vuAh9%2BB5NAoxV2%2FDEisC%2F5HJtiQc0LCJ6x3oPSLtrWr%2FN%2F90AIIi5dJm6IHdNxcpAjJlpNcY%2B7NmLbtDecosSa2uwc3TPTYuOZUdw5jBj47GshFRU10&X-Amz-Signature=c715dee8cb3f64991572ee4113f0f9b28979b8a5ee33bd1e71bbb06db22956af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IT3J5R%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCMZTrO6f%2Bisgfb25vIS5p2m2QtOXDOByHzw5idW8rxmwIhAM42JQPkKJ13w4PZCKRQmk%2Bu4LoITWWLdQ0oAOlwuBQGKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZQy3QwjDyn3XNfMq3AMxNNXLDiSfSRhVCF9IhvIUhu60JCvZuloyNGEMwBs85bdRt1odNqCRAyk8LKkp8K9Hu%2Fs1BwZDx5RMyzeXK%2B0Kw0x21%2F5%2BbGAzv%2FYVQsgHl%2B437oRMCLGkt4SNvqICbxeYCKW0U5dBVKG8qg0h%2B5kdw8ELhHFZ6xT9x%2BqAVTkUaNwHguJZlTWC1Ads4uyN0qOU4CB7%2BeC%2BnJwDDpujE9y1fR1dtqQVjvM2W4Tt4HtlUjHigSTc%2Fxra1IxN36xuvVLO9UBAD8XmzN8J0bOR1rx4zsTxxsRTp%2BghdF2FB9ULwsIUF9K0tG3AXP%2BCe3mHkgbde8Om5fnoVt8RJ22JApQioc4zWxfbfErRnH6iLqtu3WP7MZK72tzjOwcmwzjSuHr7zF7sbE6XCCatqQFPkgox9gFp9BAJh68tNE%2BFJZksyn9nm50l1954wh%2B4c4ZujuI%2F%2FJ2zIr1hK80k78lazGm%2BHtX6AK%2FD0TmdN0yLo4t8mMrelUr7WY5Qj%2BoUNSVZc3SQWB3ylCb%2BFVchSHywzNijvcNLn8PChi6c4Kt1xilIxXtW5dycsb%2FlwyDVraFa81o75kA%2BtraCl5NoQEgEK0%2FsK2RG8PiuBguGP%2BRD38ASXwSVXXIY64lNR5tNwzDvsdK9BjqkAfQW0PrjAv5SUhCVQVCkQHCulw92TVAGyhn5DmOgkCdEk7IBxcWD0Gx0%2BZJK9qnY3UBiMetqXnLyO3fK8TrZU%2Bc3twYLWBmn36AdxAF5fUynFWP1pydoO4N8zsRJr9zySWjozWGl3xB60HcGQWLBTjPipElr94TC%2FvG%2Brk0cIc9RSGLoA2UkXJBun1dEbepzSVBpXnn%2Fjpwb7DzIlUNZb%2Fj%2FSNUM&X-Amz-Signature=d29be03e40f8d2e28f9baa17dc4ae27cb8d1540622b19f515614ccf95a3daaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
