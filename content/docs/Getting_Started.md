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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JWLKG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChciPyJbKGOOEkzcztQ4Ra5CVTKo9E2zE%2FjGbzXeNaKwIgUA78FRH%2F11X9y2upIhCuYxF3xcdnqmpKLcHNxm3gIOQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGsumBwYaghFoimKircA6fOc8y%2FKcKMZWggBRUFlBzDGt9qTPRZznFyx4phqpZXjhjUMRNCF6dkV3GjBCiVEmX2xmGOXxN%2F1YUTZtylaBRbYfs1KuZzq3KA5Xrnc1l7DOZxvNFJ2u3ABrlN8amctgqu8Q%2B7x6NHuGmCoijeyI4dhW1BlvCj4cgY3i9Dx1vMPOB3Vt3JGbrRt5oGVmOptgZSFcj9QExstYv81vxPcjGEdIRSsTW3uenB7AV6xuDt2IsNaiuJSrdVl1Bx4Y3IR%2FZdO8ZQ5N6RUKeT41s10FTl11AdBvNsyijsddH%2BEwmtYag9fpbmvAvuq1e6%2Fm5HgHEvenXHhFeTDc7l36DlSp9Rn0GFCr0gkc6gKmm3acOQQ2qkA2z3Li6AmguhSx9ibM9Pi01nM5iFfsDqWH2KDiPj%2Fn4W1Xt6rIkSS97eTus2KYwRKi%2FNKiqmkcvtOHfCBWbEYlb%2FRWclXZD8afelX%2FMlhcoazHx%2FQsqrPg0AiY7FdEvAc9UkD2pVCR92ee6ITES5bOyRnYXboQfY%2FCufv8AT1QoS8JFVEWJXAJi8B1VnhDZsvusMhQWixWeUNG0USj48ciO4iZeJ0ukvYzRrkDFJetHdmHFc3edQvC2IebOZABzaa1hxKAfZcjDhMI6WnMIGOqUBxgaCNgJDY%2FZ9%2BmlKAxodCBKDhWfA7o90fdpYEbn%2BL9lg4aRk%2B0LNhabqR%2BhoNj7fAUtlbqA%2Bqb9z7pOlyUQmcQsee4%2FasOnrP4RHSHW5PZelXRosypDNrJfV1kntsumsv9Cd58FCz5v%2F3PRpfp44K9XxNj9MlnkOmsTdKk%2BmzBzUC3iClWmcZVwicCpWiKF4YRBDZ6GA807HVeWtJQ5qky33Gq2T&X-Amz-Signature=872be3703ecd51cfde0aa41a83cbcce4b27b219a9d8f3ac00ff357e0194a7cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JWLKG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChciPyJbKGOOEkzcztQ4Ra5CVTKo9E2zE%2FjGbzXeNaKwIgUA78FRH%2F11X9y2upIhCuYxF3xcdnqmpKLcHNxm3gIOQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGsumBwYaghFoimKircA6fOc8y%2FKcKMZWggBRUFlBzDGt9qTPRZznFyx4phqpZXjhjUMRNCF6dkV3GjBCiVEmX2xmGOXxN%2F1YUTZtylaBRbYfs1KuZzq3KA5Xrnc1l7DOZxvNFJ2u3ABrlN8amctgqu8Q%2B7x6NHuGmCoijeyI4dhW1BlvCj4cgY3i9Dx1vMPOB3Vt3JGbrRt5oGVmOptgZSFcj9QExstYv81vxPcjGEdIRSsTW3uenB7AV6xuDt2IsNaiuJSrdVl1Bx4Y3IR%2FZdO8ZQ5N6RUKeT41s10FTl11AdBvNsyijsddH%2BEwmtYag9fpbmvAvuq1e6%2Fm5HgHEvenXHhFeTDc7l36DlSp9Rn0GFCr0gkc6gKmm3acOQQ2qkA2z3Li6AmguhSx9ibM9Pi01nM5iFfsDqWH2KDiPj%2Fn4W1Xt6rIkSS97eTus2KYwRKi%2FNKiqmkcvtOHfCBWbEYlb%2FRWclXZD8afelX%2FMlhcoazHx%2FQsqrPg0AiY7FdEvAc9UkD2pVCR92ee6ITES5bOyRnYXboQfY%2FCufv8AT1QoS8JFVEWJXAJi8B1VnhDZsvusMhQWixWeUNG0USj48ciO4iZeJ0ukvYzRrkDFJetHdmHFc3edQvC2IebOZABzaa1hxKAfZcjDhMI6WnMIGOqUBxgaCNgJDY%2FZ9%2BmlKAxodCBKDhWfA7o90fdpYEbn%2BL9lg4aRk%2B0LNhabqR%2BhoNj7fAUtlbqA%2Bqb9z7pOlyUQmcQsee4%2FasOnrP4RHSHW5PZelXRosypDNrJfV1kntsumsv9Cd58FCz5v%2F3PRpfp44K9XxNj9MlnkOmsTdKk%2BmzBzUC3iClWmcZVwicCpWiKF4YRBDZ6GA807HVeWtJQ5qky33Gq2T&X-Amz-Signature=b995c46efdc354e8bea0f8b637aef4c2ef5a4334d67562000055fb181e38214c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JWLKG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChciPyJbKGOOEkzcztQ4Ra5CVTKo9E2zE%2FjGbzXeNaKwIgUA78FRH%2F11X9y2upIhCuYxF3xcdnqmpKLcHNxm3gIOQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGsumBwYaghFoimKircA6fOc8y%2FKcKMZWggBRUFlBzDGt9qTPRZznFyx4phqpZXjhjUMRNCF6dkV3GjBCiVEmX2xmGOXxN%2F1YUTZtylaBRbYfs1KuZzq3KA5Xrnc1l7DOZxvNFJ2u3ABrlN8amctgqu8Q%2B7x6NHuGmCoijeyI4dhW1BlvCj4cgY3i9Dx1vMPOB3Vt3JGbrRt5oGVmOptgZSFcj9QExstYv81vxPcjGEdIRSsTW3uenB7AV6xuDt2IsNaiuJSrdVl1Bx4Y3IR%2FZdO8ZQ5N6RUKeT41s10FTl11AdBvNsyijsddH%2BEwmtYag9fpbmvAvuq1e6%2Fm5HgHEvenXHhFeTDc7l36DlSp9Rn0GFCr0gkc6gKmm3acOQQ2qkA2z3Li6AmguhSx9ibM9Pi01nM5iFfsDqWH2KDiPj%2Fn4W1Xt6rIkSS97eTus2KYwRKi%2FNKiqmkcvtOHfCBWbEYlb%2FRWclXZD8afelX%2FMlhcoazHx%2FQsqrPg0AiY7FdEvAc9UkD2pVCR92ee6ITES5bOyRnYXboQfY%2FCufv8AT1QoS8JFVEWJXAJi8B1VnhDZsvusMhQWixWeUNG0USj48ciO4iZeJ0ukvYzRrkDFJetHdmHFc3edQvC2IebOZABzaa1hxKAfZcjDhMI6WnMIGOqUBxgaCNgJDY%2FZ9%2BmlKAxodCBKDhWfA7o90fdpYEbn%2BL9lg4aRk%2B0LNhabqR%2BhoNj7fAUtlbqA%2Bqb9z7pOlyUQmcQsee4%2FasOnrP4RHSHW5PZelXRosypDNrJfV1kntsumsv9Cd58FCz5v%2F3PRpfp44K9XxNj9MlnkOmsTdKk%2BmzBzUC3iClWmcZVwicCpWiKF4YRBDZ6GA807HVeWtJQ5qky33Gq2T&X-Amz-Signature=690513dd02ceb4f152364bbe9c8697d5310e01f8d9802f4dbfc326ab2ca9d032&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466556Q5USM%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkNHh%2F9iV3KfwE37F63HeE3olCzgK2h1wB6Wv9LZZB0AiB3fCk4GcaGiXfUeYHBPdzNZW4drZ%2BytISBDcir6u0FOyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUctP%2B5yXAlVyTvpuKtwD7DIIRzllJ%2FpQjjLitUQslsDlyaozAFBrlif79B3fQKziepLDtaU84ZMsaDI3cWWtAYqOwKbSqbS1yb6yXxsCYM1Dwb%2BwdV%2FIDLQ5QXrjFPKu3GoQKpLUcYSped6F241cjO5a8MEd05k8yxBpUIBPnLP4sFErZB1y9jPLSqftBNXNNz1q8mh3yuASx19McNxNt1QmU%2FnTRaE0ivnjBbZHCP1SfOwwvuMt65jy3Eo5mWI20h%2BWcXru%2BVA74xCvHY4QlleHw0fzz3QhraWXG7UhAZZW0T3gxbeu%2B%2FkRf%2BeSz2bWi82Hpdsu3gokA8nfzqL0pT8aYMWeYrWs%2Bf60Y%2F08QngrtFnxNcMl8k2CYo44FiE4Lht7JTi%2BVRN2Ha24pLqZrf4Ir4VeIYi5AismjRv5Y0HDMBLFXvMCsu%2FITrDwYMmPRIVvTv9aCDXdzm73k6%2F0MVf1budOeQiSYTiZ9M4%2BcgDMctcWxM%2BQ%2F7s%2BU8XiDNOZcvhDULWXmb2fMgePLhEFV%2BmI2cM4ZPK%2FMt%2BFfJhQ0vMKHbToztsjs8i240ZDQy68kvvuISixS13IRT8TvbQFpjUWeKMUVKG4oGiTF3jP4flXtGyVO2WnGqNI57nSWn6Iv02XKIfXRbq7bSgwmZacwgY6pgGCJC%2B5%2FZtHZ8VMCdeq6kE8%2BKEn9FixE6U3sQypAA7PYveKORGqpRxssyvVolMuxmnkNz2Ufgtqk2r%2FgBMcpXyL%2FGYmgbNAFQXh%2Bs51jTErtD4dHnwqb28EyT%2FEHRBINfMcVWaIZJWAcJzkzwno1kxQUfdM%2FjQoZ6eKkAATBLhRa9Gd1YYcOwLdntgdqoILmdeksrQ%2F0XqNhN2P0vMBu%2FwnjQ78RI4n&X-Amz-Signature=5494fbfe57c08792210a1c7bfd4a98fd82fbe9562963cb3dd948d7f3a279bd82&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXOT7HQ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYSVkHAu8cmCQNDMXFxk%2FUlF0tttPRFjKvJjktbhyasAIgAuZjsZUjrUzNu5GOsUQkvMydlzVWW5qS%2FIVb7UYoJ%2BYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbChxiYszmjrWKetyrcA4LpnTvwOur1bWUf2bAqKyIpxdgTNEDR3zjS1v8q%2FnSoCruKgDlRtkyWjMKQah24n4gOkIpVjomdVFebDUSdQMqtb3hMfwFgrq%2FzH9lcnZpjZ5gvXsRmnCGteNE5rAKMr2so6hTTL91xNnQpJBFmI635SngS%2FanLExI5gCl9n0Bx9Ohzv5%2FBnNjFFLRKVjqBZrHS6SzknQh5fjmk5k1yDJqZngkT5bthXCb4Wye0aYFvi2HYNDgi2rMhTvddD9GX7GTmOAjucSkEmstatFFxSZ3T9%2BhlPrvgN%2BzV%2BfcmhTl2dLqN%2BRx9HWpciu8lSDU0%2BO5VnBj6i73Fxx0tZkm2PCnIBKPpD7hD%2BZYn9LXBjnE6DifWZ7WkwMr2LpKAyG61B25NcSrnx9kk946mTvHseyaPhVHIetTPkFvfdnf%2FvuR8KKl3Cf6jRqTXiLyHH7AB6U6XCaeQEagxOe5HT%2FqkuZSuq7rish7O%2F5QBX6JYQ3iTldktz0Fv0pWvjUFbXq7RK0cF1dONl2II5dH%2FAMuk6AElhwmQaLDjM1Z370NZOF60iMuG3DSBUKEA63eygAZZmJ0GwXlMD9y8SEsstBR8LiDpHLQFbHID66kMPEfQUZWED2tvzmvADVUXbmGxMJ6WnMIGOqUBfSnAk0Kuy4PM4DWMI7yX8fnuYswzra76sG4mqpxPvrh1z5%2FQAMVWPgrE6Ik9WVDK9ZIGTCoOee0PL%2F5EPKa3TU0AypwK6xORJUIcZuxbYGthSpR43l187XGEBQYfxiGlnC%2FCy0pjeqD2S2WGnHxDu3e2P9xlEFCrupEYknBI%2F3gKlrY83NPu%2FBKtYjnEtL8o0BzPfDn3VLLu7ArVSB7gPlKVFj2e&X-Amz-Signature=1020d7fc49530624e99dcfb2725efab9b4180e2f08f5142e89ba573023fae153&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JWLKG4%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChciPyJbKGOOEkzcztQ4Ra5CVTKo9E2zE%2FjGbzXeNaKwIgUA78FRH%2F11X9y2upIhCuYxF3xcdnqmpKLcHNxm3gIOQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGsumBwYaghFoimKircA6fOc8y%2FKcKMZWggBRUFlBzDGt9qTPRZznFyx4phqpZXjhjUMRNCF6dkV3GjBCiVEmX2xmGOXxN%2F1YUTZtylaBRbYfs1KuZzq3KA5Xrnc1l7DOZxvNFJ2u3ABrlN8amctgqu8Q%2B7x6NHuGmCoijeyI4dhW1BlvCj4cgY3i9Dx1vMPOB3Vt3JGbrRt5oGVmOptgZSFcj9QExstYv81vxPcjGEdIRSsTW3uenB7AV6xuDt2IsNaiuJSrdVl1Bx4Y3IR%2FZdO8ZQ5N6RUKeT41s10FTl11AdBvNsyijsddH%2BEwmtYag9fpbmvAvuq1e6%2Fm5HgHEvenXHhFeTDc7l36DlSp9Rn0GFCr0gkc6gKmm3acOQQ2qkA2z3Li6AmguhSx9ibM9Pi01nM5iFfsDqWH2KDiPj%2Fn4W1Xt6rIkSS97eTus2KYwRKi%2FNKiqmkcvtOHfCBWbEYlb%2FRWclXZD8afelX%2FMlhcoazHx%2FQsqrPg0AiY7FdEvAc9UkD2pVCR92ee6ITES5bOyRnYXboQfY%2FCufv8AT1QoS8JFVEWJXAJi8B1VnhDZsvusMhQWixWeUNG0USj48ciO4iZeJ0ukvYzRrkDFJetHdmHFc3edQvC2IebOZABzaa1hxKAfZcjDhMI6WnMIGOqUBxgaCNgJDY%2FZ9%2BmlKAxodCBKDhWfA7o90fdpYEbn%2BL9lg4aRk%2B0LNhabqR%2BhoNj7fAUtlbqA%2Bqb9z7pOlyUQmcQsee4%2FasOnrP4RHSHW5PZelXRosypDNrJfV1kntsumsv9Cd58FCz5v%2F3PRpfp44K9XxNj9MlnkOmsTdKk%2BmzBzUC3iClWmcZVwicCpWiKF4YRBDZ6GA807HVeWtJQ5qky33Gq2T&X-Amz-Signature=0904e366112f53213dd0d2382c4cdc1ef636564dda36cf7a1dde51bc6e36da49&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
