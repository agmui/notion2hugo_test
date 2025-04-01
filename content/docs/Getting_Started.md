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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEYO7FK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDeItKG%2BZYsXyem0AhaRP2tgIUuLvceA790SJjWuUeicAIhAID92XK3vBxtdUAC%2Fy7Qa7qfIDY3%2F%2BSxyLuSlb4gu8oVKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrZENpmqhPcghyhEUq3AP8QB4LZabGutWeACwxF1cHefpFDeLwJ%2BvPVYebEf8hUhHaA3bzE9uvE2g094ksYAi7%2BcV6P8fgR%2FKYY2uxiZ%2BGbgfyWxIDR%2BIhkZzGD0LLcjltGHxqBcfOistyPtIDnkZBaL%2BYEJv1MnVIWDN7Mh%2ByXGNNtrvwToGuIf%2BB7dTjAqXdxwE74rJBppg1fOPW8iYgY6lUwtMe2ikPeST6412eU4ERjmKIHTxfDWlma%2F7A1F0CCVAyuKwYFOQl9r5eVLz3tcvOhcgGGIUFHEEO6uWkuuE3L3qDI0XP4b%2BJ6oWmpsG1XZXHLLIW3%2BxY24Lb4NcAUNA8joBL1gdtCFkxDbxtL4XFWN23XnT7biNupQ9BkUpZp%2Fy27TW%2FgVFsoUkTrGJ5WPKYNhEYNDzhIkfYYeeVgjZgJTuH31oUZEtveSAmdcIEZDRp1A3qI%2FhmgFwVlg0LLwiXZ2d8FcxzOZo%2FK5%2BkSPd344hFvHLFLK3wvpFvlx%2Fem3%2BgwSrn%2BoUrcfqOtG4Fy5oHTDxh5L0cHc4HA%2BjElfkGqiYmn7F9gePuWV4HMW%2FxDzcJRD5L7teAACXsyl3klCoNHX65FUiqds%2FUIVFN6LyAzEBp55ksQPNzlYqoGVbm6kcteFfXAN9GIzDQpa2%2FBjqkAZFr0o7NeSEQmJUke7TeJ1HWTQ62yPz68z6IDK%2BZbuko%2FD3GdVJXRZiFAB7ocDO7TAF4SFelyVU4fXOUYYy47yU%2Fi1L8H6FMYYb%2F9cXqWDTyVL2r2y2M%2Fbu1G5lJyuZZDLiCSSYy8mQMUH3XXtA67NpTvGx1Yd8pIuDFIFa%2BsT35GRX01EcsHYYBXOJj3k8QA07dkyrtUmDc%2BhpmMvRWhFnwMrOt&X-Amz-Signature=3a44dbceb394498f44b0e269e7b8d6c477cbd42c84df5e671bb20a98bfc225b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEYO7FK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDeItKG%2BZYsXyem0AhaRP2tgIUuLvceA790SJjWuUeicAIhAID92XK3vBxtdUAC%2Fy7Qa7qfIDY3%2F%2BSxyLuSlb4gu8oVKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrZENpmqhPcghyhEUq3AP8QB4LZabGutWeACwxF1cHefpFDeLwJ%2BvPVYebEf8hUhHaA3bzE9uvE2g094ksYAi7%2BcV6P8fgR%2FKYY2uxiZ%2BGbgfyWxIDR%2BIhkZzGD0LLcjltGHxqBcfOistyPtIDnkZBaL%2BYEJv1MnVIWDN7Mh%2ByXGNNtrvwToGuIf%2BB7dTjAqXdxwE74rJBppg1fOPW8iYgY6lUwtMe2ikPeST6412eU4ERjmKIHTxfDWlma%2F7A1F0CCVAyuKwYFOQl9r5eVLz3tcvOhcgGGIUFHEEO6uWkuuE3L3qDI0XP4b%2BJ6oWmpsG1XZXHLLIW3%2BxY24Lb4NcAUNA8joBL1gdtCFkxDbxtL4XFWN23XnT7biNupQ9BkUpZp%2Fy27TW%2FgVFsoUkTrGJ5WPKYNhEYNDzhIkfYYeeVgjZgJTuH31oUZEtveSAmdcIEZDRp1A3qI%2FhmgFwVlg0LLwiXZ2d8FcxzOZo%2FK5%2BkSPd344hFvHLFLK3wvpFvlx%2Fem3%2BgwSrn%2BoUrcfqOtG4Fy5oHTDxh5L0cHc4HA%2BjElfkGqiYmn7F9gePuWV4HMW%2FxDzcJRD5L7teAACXsyl3klCoNHX65FUiqds%2FUIVFN6LyAzEBp55ksQPNzlYqoGVbm6kcteFfXAN9GIzDQpa2%2FBjqkAZFr0o7NeSEQmJUke7TeJ1HWTQ62yPz68z6IDK%2BZbuko%2FD3GdVJXRZiFAB7ocDO7TAF4SFelyVU4fXOUYYy47yU%2Fi1L8H6FMYYb%2F9cXqWDTyVL2r2y2M%2Fbu1G5lJyuZZDLiCSSYy8mQMUH3XXtA67NpTvGx1Yd8pIuDFIFa%2BsT35GRX01EcsHYYBXOJj3k8QA07dkyrtUmDc%2BhpmMvRWhFnwMrOt&X-Amz-Signature=c8cbf1de41535747137f6aa2b29d3c2f5db0a46b9790f36d8676401d162ac35d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEYO7FK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDeItKG%2BZYsXyem0AhaRP2tgIUuLvceA790SJjWuUeicAIhAID92XK3vBxtdUAC%2Fy7Qa7qfIDY3%2F%2BSxyLuSlb4gu8oVKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrZENpmqhPcghyhEUq3AP8QB4LZabGutWeACwxF1cHefpFDeLwJ%2BvPVYebEf8hUhHaA3bzE9uvE2g094ksYAi7%2BcV6P8fgR%2FKYY2uxiZ%2BGbgfyWxIDR%2BIhkZzGD0LLcjltGHxqBcfOistyPtIDnkZBaL%2BYEJv1MnVIWDN7Mh%2ByXGNNtrvwToGuIf%2BB7dTjAqXdxwE74rJBppg1fOPW8iYgY6lUwtMe2ikPeST6412eU4ERjmKIHTxfDWlma%2F7A1F0CCVAyuKwYFOQl9r5eVLz3tcvOhcgGGIUFHEEO6uWkuuE3L3qDI0XP4b%2BJ6oWmpsG1XZXHLLIW3%2BxY24Lb4NcAUNA8joBL1gdtCFkxDbxtL4XFWN23XnT7biNupQ9BkUpZp%2Fy27TW%2FgVFsoUkTrGJ5WPKYNhEYNDzhIkfYYeeVgjZgJTuH31oUZEtveSAmdcIEZDRp1A3qI%2FhmgFwVlg0LLwiXZ2d8FcxzOZo%2FK5%2BkSPd344hFvHLFLK3wvpFvlx%2Fem3%2BgwSrn%2BoUrcfqOtG4Fy5oHTDxh5L0cHc4HA%2BjElfkGqiYmn7F9gePuWV4HMW%2FxDzcJRD5L7teAACXsyl3klCoNHX65FUiqds%2FUIVFN6LyAzEBp55ksQPNzlYqoGVbm6kcteFfXAN9GIzDQpa2%2FBjqkAZFr0o7NeSEQmJUke7TeJ1HWTQ62yPz68z6IDK%2BZbuko%2FD3GdVJXRZiFAB7ocDO7TAF4SFelyVU4fXOUYYy47yU%2Fi1L8H6FMYYb%2F9cXqWDTyVL2r2y2M%2Fbu1G5lJyuZZDLiCSSYy8mQMUH3XXtA67NpTvGx1Yd8pIuDFIFa%2BsT35GRX01EcsHYYBXOJj3k8QA07dkyrtUmDc%2BhpmMvRWhFnwMrOt&X-Amz-Signature=db066bc6c6adc0dc69c471842fc0a1181eb67a4098eb5bb73c43bcf44cf13575&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX45KMBY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQC2OA9uYmH8WnxuXUcLeYqNYYbzm6dwO8qotbFPeyYfbgIhAJF0QrBfnYd5yXGAH5CF7Fkt9uVsUmTQvUjjM89aXm3xKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZnuPAWTgQo5X4rvgq3AN75mDQVq3KVRyJMcYQzCKs9HbcIl0bhWQM0ggqWoWHDilqTrcaj2UPomeyfLoK%2FNbpcoKVqtWuferSzU6hBt3Q%2BMvJPw4WOwSTN%2B4JmQap73AMxMH4nCthcFZlKdWV4x0wescelZyMvn6%2BxmyDe87tDlpWn43acJITHajrFkwYvLWA1rJLXIjzBHan63iwKvFUTjhQ5FOTIJxDhQXGBacik7aDNpP4LJWl6Q9JfCrpoedvnGu3dvIO7LlWzWNc1UUoChIsy%2BN%2Bn1xVnO71ZqHckcZ85fejx9opLDMuEbu6nzntyAGj%2FWQDqPwXoaPyBHWNeGR2ixFxZW33DMGr3ZDQScJcpslIufpAr8EQiPwH0ZZwuGYpN4ugJg7nKihzGh3X%2B2v%2BH5CPBTBNih24B4gi2KBzPW2FrbY%2B4o%2BYcpVYyhwlZ4kpaHvHDcsOgOyIF5PakDUwQd66OfS%2FRV%2FJGZMQ4gEd7lv3O%2F6TsMm4j9W5KD0VlyAMhL%2FsX66bEVw3bjSxJVfC47SRce8ZfEg9uoJpfVw7iFHr7WI1M7P9%2BoabQPBT3FF3EDtX2D4i%2FSv%2F9iSlZ22durUtbj80TzV1Y%2BNtFHL%2FFRVTICl%2BRl1q7UxYzSMj19For84zXhcXRDDFpK2%2FBjqkAUiZCNYu2km4oCKfH2Wt6576%2FPYlUMpEdEfubcOsYwYN0uV1FkiPXV6EYqHHRbfQiIERVhCXLR4FSNAiYw16Mq65U%2FhR9PXMuALrgqkfaFudX4lmzonHo1kz9eJussdcGeDw7TtH4%2BI0%2FB0%2FISDJoT7IPWyVeHu3tkB7iQFXSRKC8hJMf7Ijfu8mzAsT6w%2BklLI%2BJJ8nBABtnaZl3nKfuDap61Sw&X-Amz-Signature=a21af48623900ae2d6a90a09d685f333eb750edd8b68b2c05fbcf60897d89138&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEYO7FK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDeItKG%2BZYsXyem0AhaRP2tgIUuLvceA790SJjWuUeicAIhAID92XK3vBxtdUAC%2Fy7Qa7qfIDY3%2F%2BSxyLuSlb4gu8oVKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrZENpmqhPcghyhEUq3AP8QB4LZabGutWeACwxF1cHefpFDeLwJ%2BvPVYebEf8hUhHaA3bzE9uvE2g094ksYAi7%2BcV6P8fgR%2FKYY2uxiZ%2BGbgfyWxIDR%2BIhkZzGD0LLcjltGHxqBcfOistyPtIDnkZBaL%2BYEJv1MnVIWDN7Mh%2ByXGNNtrvwToGuIf%2BB7dTjAqXdxwE74rJBppg1fOPW8iYgY6lUwtMe2ikPeST6412eU4ERjmKIHTxfDWlma%2F7A1F0CCVAyuKwYFOQl9r5eVLz3tcvOhcgGGIUFHEEO6uWkuuE3L3qDI0XP4b%2BJ6oWmpsG1XZXHLLIW3%2BxY24Lb4NcAUNA8joBL1gdtCFkxDbxtL4XFWN23XnT7biNupQ9BkUpZp%2Fy27TW%2FgVFsoUkTrGJ5WPKYNhEYNDzhIkfYYeeVgjZgJTuH31oUZEtveSAmdcIEZDRp1A3qI%2FhmgFwVlg0LLwiXZ2d8FcxzOZo%2FK5%2BkSPd344hFvHLFLK3wvpFvlx%2Fem3%2BgwSrn%2BoUrcfqOtG4Fy5oHTDxh5L0cHc4HA%2BjElfkGqiYmn7F9gePuWV4HMW%2FxDzcJRD5L7teAACXsyl3klCoNHX65FUiqds%2FUIVFN6LyAzEBp55ksQPNzlYqoGVbm6kcteFfXAN9GIzDQpa2%2FBjqkAZFr0o7NeSEQmJUke7TeJ1HWTQ62yPz68z6IDK%2BZbuko%2FD3GdVJXRZiFAB7ocDO7TAF4SFelyVU4fXOUYYy47yU%2Fi1L8H6FMYYb%2F9cXqWDTyVL2r2y2M%2Fbu1G5lJyuZZDLiCSSYy8mQMUH3XXtA67NpTvGx1Yd8pIuDFIFa%2BsT35GRX01EcsHYYBXOJj3k8QA07dkyrtUmDc%2BhpmMvRWhFnwMrOt&X-Amz-Signature=6e74896008fb447829c08a6e3fd416a106fa4e7330aa3d88a482b5db8f9f9e33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
