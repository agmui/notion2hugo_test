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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQDWLVE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDlT6%2BI%2FmKOrlO5XKnh%2FvRF%2FIbEJE7mMI9WqhS5NrWvZwIhAMuM%2FEaiISVOEHO5J4vwDCyol2wWQWiZqxZQBAup5Wb6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwxdvaFITVGF0j%2F1TAq3AMXZl%2Bk2i7dUGqrxsUyrrISOBo7DkRCrdA%2FfVs086Qs2hrQqyZpjWB4RY8NeT7fU%2F5%2BExnSawdg3%2FBcSSFimEVAO0nBjP4%2BBajnxr28wskqrhZvfKyRzqb2RJWNZqzTiV81UYKAD6qzA1qlV6HbJ7QDGdi8GE9F8cL6yOtv4nPVxSAFbBB%2Bk7pQjABJgxGF9QNzm0kfZzobznCzevzgXpJJQLLqjK6DFWQz8WUmLjgcovwjOHHwjcfoURBiJqD3HoXfHDPQ5FNomxbhWHr42e5HZNGMuwOnMMJoMjY3jrc9FbR0gJf%2FxMlceR1j80zczI%2BtuzlXM0c7GpRkTNZuKvKYZufaX%2BpEzSw%2FwkfLu%2Fj18GFlWFWO7rAMl5fEVEqlSimmSHxqovy%2FZkvw9AsDUUxzhqdh8ZyfZ8JhB6y0L0bBwLHo%2FawWKlvmuvJDdM02rQuKfupfliEYMsaTetpXe34zb1huy5P28wm7trboTgA%2Bn0u%2B3nB1lp004JcmVU6nfjmprfp91j8tuTjlScdoQA2zICmfclCQY1fxVIbw6i3WuZeEbNkSJU%2BK7HXLvSXO52Rbt3ys%2BHdVjCpxnBZj%2Bi504QuZbQnCpoMFUGP%2FW%2BpHy1%2FzUycfbqFP9dR3DjDl1dW%2FBjqkAYntBDo8uJ63szaLUm5Wsqokg9MiZJ9RQzHSms5gsQoMiasyLUQn%2FcAhHlA9VNVd3u%2BqgFYJv2vH2wjgmYTIHUryfINTQ1iCaEoUq4XuFtkd6fgcBSKhswQIV74pBsbwZbuyeCYoXnzdTV4Rugdxs5cHNXCtO3HD8BmTq8rVeOAXS%2BBc28LVT45UEQGlw7LYuwgTTylarTY%2F8C7QWJOSUqX%2BR1Kh&X-Amz-Signature=8bf5f050626a5cf53a3b2037b34b29f30d8d4a7e8dec87255193e32af162d82d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQDWLVE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDlT6%2BI%2FmKOrlO5XKnh%2FvRF%2FIbEJE7mMI9WqhS5NrWvZwIhAMuM%2FEaiISVOEHO5J4vwDCyol2wWQWiZqxZQBAup5Wb6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwxdvaFITVGF0j%2F1TAq3AMXZl%2Bk2i7dUGqrxsUyrrISOBo7DkRCrdA%2FfVs086Qs2hrQqyZpjWB4RY8NeT7fU%2F5%2BExnSawdg3%2FBcSSFimEVAO0nBjP4%2BBajnxr28wskqrhZvfKyRzqb2RJWNZqzTiV81UYKAD6qzA1qlV6HbJ7QDGdi8GE9F8cL6yOtv4nPVxSAFbBB%2Bk7pQjABJgxGF9QNzm0kfZzobznCzevzgXpJJQLLqjK6DFWQz8WUmLjgcovwjOHHwjcfoURBiJqD3HoXfHDPQ5FNomxbhWHr42e5HZNGMuwOnMMJoMjY3jrc9FbR0gJf%2FxMlceR1j80zczI%2BtuzlXM0c7GpRkTNZuKvKYZufaX%2BpEzSw%2FwkfLu%2Fj18GFlWFWO7rAMl5fEVEqlSimmSHxqovy%2FZkvw9AsDUUxzhqdh8ZyfZ8JhB6y0L0bBwLHo%2FawWKlvmuvJDdM02rQuKfupfliEYMsaTetpXe34zb1huy5P28wm7trboTgA%2Bn0u%2B3nB1lp004JcmVU6nfjmprfp91j8tuTjlScdoQA2zICmfclCQY1fxVIbw6i3WuZeEbNkSJU%2BK7HXLvSXO52Rbt3ys%2BHdVjCpxnBZj%2Bi504QuZbQnCpoMFUGP%2FW%2BpHy1%2FzUycfbqFP9dR3DjDl1dW%2FBjqkAYntBDo8uJ63szaLUm5Wsqokg9MiZJ9RQzHSms5gsQoMiasyLUQn%2FcAhHlA9VNVd3u%2BqgFYJv2vH2wjgmYTIHUryfINTQ1iCaEoUq4XuFtkd6fgcBSKhswQIV74pBsbwZbuyeCYoXnzdTV4Rugdxs5cHNXCtO3HD8BmTq8rVeOAXS%2BBc28LVT45UEQGlw7LYuwgTTylarTY%2F8C7QWJOSUqX%2BR1Kh&X-Amz-Signature=5f50c7b06d007be77977f638f173e6363514543f3ed2cb8063e5605cf53abc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QMNM6F3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD38Hv2wdWpgGW5zMG8pU4TO0kNqvJb0rEzHtHCdGj0TQIgMhaqXJgPoHnCnOQe57cGPC3%2Fejo0ya31NNSHhY7OTfYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLqx4Vn4yt1vd5Q%2BSSrcA7VZf8ZM0FX7eo8GP%2Buin3LjPz7MyBIur%2B9G5WX23roxBs%2FX05do%2FF4mSDPqgKP19DO7jkIo5aA2Kyie5jUwHYy0gRkvbD%2BhvH5gI4j955Vr7UynQLVwbwZO7kMSxg9TaocQh2nEoBrHEkorCLImoHNGT7ofVdATlY9boPgMyrlrBov7%2FxP0L1k6P8EnzhFIOdSBae9RnR4A3zZcXc1ClLZYV2%2BoTITqtvwnbt6MlBPd%2FAWUxPmjUMskWBLmtsmoGPsIcGoEs14qep%2BspqS%2Fz949D6BCYM0sGemrlxmrDwjhIaf%2FLicaR5Dqmzpq%2BNDOcMHlEYk8EnntNQU3HZMGuA%2FenxIYTl9K81ot6J%2BcbYfboIC9bV5z%2FTZLa77Padpswh6mIimaXY0BjIbDzS3THcEDsVq0DD%2FF0uEqgK%2FFZbeeRPToNqekpj4L7MU0tV24quHW1VnmNLVxbfo7UZNfh8fVi0IiF6WiRw8amS%2F52SGrULom52YxoWisXW2SjoGdo1bplq8n%2FG2Z18hmBw4VoBnFnxmELeYjQWzMQeFM1BtLcF%2F0GBRLwmPwVtNBKh7sRzWoDKV6ie%2F6L5a3o8F4qu5BoDbFgVmBKyGa92tH4FhLNVm6t39dDv1pVNsKMN%2FV1b8GOqUBQR7YxRY1SOxSQsfVwZB%2BS%2F2sJuBIYCXoU6xPfujO01AKewDd%2Bq9w9YecshljmtaglIJnue1qmr77D9eoTXPksG067rtEvFoJ%2Fl88wu1muhoqyYS8FtoCICeVpJo%2FuB7XFzSZuSCsWFpBBmdiwFq%2Ba%2FohUEBcDl9iiKfuwjDzqhEA6Z0iG2bf5TpCt%2FtfbJANaxQ8LNgdb6Ut845aGVtsE6mDRW3j&X-Amz-Signature=b11188eb624a15f830fd0aefc462a62676f530e0eaba99458accaa58e631720e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBTD3QMM%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDppIcA%2F6fZwrTssbw0Woq8vI04ODKv0Xpq%2BPZrFdLtyAiEAh%2FosAVt73s4eGMb2V%2BlGPZd762rvGvmurim6q2IdYmEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEgJClSRgm%2FPah8PCCrcAxvE68g0rHyDgu7Lv8dXXLeupAercENyFI9%2FZhH0GcLfZ7yy%2FCJqEepRmS4WJrRop1n0QlKjixoVWl7b5lNpiXi6ktrcfKawqxxarWJjZV7HaVAxLwXcU6x4xOluoDSHUqgHEuA3n%2Fqc4tJDGGy4Hh1ua1qozXN%2BhBrJ9moCNqo1nToMU9tjHYADG%2BxepZFRW9M2cj2L18Jj5GKylwsZzWmxVITs2hBHYUJVB8mqEB%2FvxuzW1%2F3nhIDMCYv1pWwA1ngh824fDiR5WUWbHBJ2P4ToKziXUFr3FeSBIQBNraS7FyD8kw7zCoOQqwV%2FqN%2F1%2FvWiyRSf3Z%2B7ihcx65vB6AmkRteXP8XKgLxIWVrfzjXAPLSV1Id%2BPOreeJaVX%2FM6bkIngNaQyocHVhyUt9hJRtMfV5ltEnysySdq7XGz8CX3yLCYPMEqN4fPi5ZcVwPJXuW0yh017DA0qG7QrKBcZeZaPC%2B%2BopTNpLfdg2LbRTG6hNd3g%2FAK3ms4%2BX%2BUDrayJnovc9X9FDMm0%2BUeqfDGTX5A5Y8jodH%2BIhtGHITBM9exzGtWQeCIXG%2FOkY3kAZsqHz%2BGqFA0UzOn8jCN9nVBcKScQoJCdg51Yph24oZTe6F0dFsg%2FP0MzSOR%2F0GyMM%2FV1b8GOqUBJPzOvAM7YRVP1MqAfeQxcIsIcwImnhRNwsfavGNTp600U%2FA8PIMm8lHTvj4zU%2BScvL2oW%2FunXvaet%2FYdQ2y%2Bsd0OzAPuhSjdNaI%2BQ5NBwbuy%2BbNVj53TYbiqNfL3yJQvoV5deIS5uAj9qdDfI8zqMffVI4KXr%2Bv%2BJt8VB9QLNRje6nOOiytd9EhzTdNHkpyF2DLRJWE9yjYOBewFgRSd2D5YCFeY&X-Amz-Signature=28d5f0f35105aba33980a23fdb12aa5d5b4b7fdc2fa8320b57ccb6e3e42b2981&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RQDWLVE%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDlT6%2BI%2FmKOrlO5XKnh%2FvRF%2FIbEJE7mMI9WqhS5NrWvZwIhAMuM%2FEaiISVOEHO5J4vwDCyol2wWQWiZqxZQBAup5Wb6Kv8DCHwQABoMNjM3NDIzMTgzODA1IgwxdvaFITVGF0j%2F1TAq3AMXZl%2Bk2i7dUGqrxsUyrrISOBo7DkRCrdA%2FfVs086Qs2hrQqyZpjWB4RY8NeT7fU%2F5%2BExnSawdg3%2FBcSSFimEVAO0nBjP4%2BBajnxr28wskqrhZvfKyRzqb2RJWNZqzTiV81UYKAD6qzA1qlV6HbJ7QDGdi8GE9F8cL6yOtv4nPVxSAFbBB%2Bk7pQjABJgxGF9QNzm0kfZzobznCzevzgXpJJQLLqjK6DFWQz8WUmLjgcovwjOHHwjcfoURBiJqD3HoXfHDPQ5FNomxbhWHr42e5HZNGMuwOnMMJoMjY3jrc9FbR0gJf%2FxMlceR1j80zczI%2BtuzlXM0c7GpRkTNZuKvKYZufaX%2BpEzSw%2FwkfLu%2Fj18GFlWFWO7rAMl5fEVEqlSimmSHxqovy%2FZkvw9AsDUUxzhqdh8ZyfZ8JhB6y0L0bBwLHo%2FawWKlvmuvJDdM02rQuKfupfliEYMsaTetpXe34zb1huy5P28wm7trboTgA%2Bn0u%2B3nB1lp004JcmVU6nfjmprfp91j8tuTjlScdoQA2zICmfclCQY1fxVIbw6i3WuZeEbNkSJU%2BK7HXLvSXO52Rbt3ys%2BHdVjCpxnBZj%2Bi504QuZbQnCpoMFUGP%2FW%2BpHy1%2FzUycfbqFP9dR3DjDl1dW%2FBjqkAYntBDo8uJ63szaLUm5Wsqokg9MiZJ9RQzHSms5gsQoMiasyLUQn%2FcAhHlA9VNVd3u%2BqgFYJv2vH2wjgmYTIHUryfINTQ1iCaEoUq4XuFtkd6fgcBSKhswQIV74pBsbwZbuyeCYoXnzdTV4Rugdxs5cHNXCtO3HD8BmTq8rVeOAXS%2BBc28LVT45UEQGlw7LYuwgTTylarTY%2F8C7QWJOSUqX%2BR1Kh&X-Amz-Signature=e500e1b9c72dc7f95e36d68514eecf61667c987cd16b18cffe221530ca084c38&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
