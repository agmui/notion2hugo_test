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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLDMCTB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCktlQBMH02seSJgAAZK4mmYExrhWaLO%2Fw41u3G352TKwIhALDnJE%2FInEjBEH%2FibI%2BF1mwKDxZk0RJVFgMJYOLqGbjmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwsFdM2GK3gI3Gcegq3ANQhZAEVy1YwqV%2B0HsinS%2BXWixSMEuom5SjR%2FTgcNHBiGnEEBfD6wX6cBK4mDL15qB%2FwwmSARNVRQ0Ktjk8fASNGs3hESMbg13VasCDxNayDvoagFErnn5kcusqVgX1N92vZV2cxr1CxaO%2BAPPRb%2BDJO200epERsZ9MXl%2B%2BkTVI%2FeNQQk6x%2FmCtcak%2FPPB7fLOYKrhHkZyQGt%2F5aMuw0nQk0YL6N50VHPzarXR6yDImUMK27lcck0Gh1mF6fLSA25%2FCfdXMJq1%2FiFbZXhP7WWUXg9yiJ7o0pic1eqWs%2BSfD9QtKP22huEbHvOUq2JpWydYb7lzza3TDmOovEtDyaV%2BUbktcW4zKJncG8TSn%2BFMV50ZBzarob%2BlW6ilFnlueJCb3xOqvO75NADzmKYdu5itKICqw%2FpWni5rxC5U9ysZkmYgf%2BnI5ELARLEYYtkYsP%2BDWqfET8xCk3MLap8N4WehBkQXZrq3YwZ303Uw4nwPkD%2BPhyxhJvhc9%2FKLid9WvhCoyjuFiHgq%2F%2BnfBZUpFVArgw9fVMNftZpqOTguTX3wlA1mzEohNMx0zFjxhyTj%2Fy6JN9swWGjzbFWWo0Gb5uxP5CG7BGNFislgFaCyJX%2FeLaWAukMEQUw%2F7y1mB%2FDDhncnABjqkAV62p285KNgESn%2BaMw%2BFOJ6jHZeX2ZGWL6kgXdwiRhlkhp%2BjXEZ%2FDp6wycZPVzadKH4fVPYkU854sZPlc4mT%2Bc5YPJNjUJD%2BZZTPFlzny3UO1leFbZzKnNoUUmsmKmdlOe94YBbx0o6inhCFDaGqbRbZbqYUS62uMNc2oxekctOQL3E3qprmTvGGuMRs5nggAJbx15pK7t0ZyQWtC%2BPtTsy%2FomPN&X-Amz-Signature=7ee524e92be7b08a9936542ec5c045088ca9c9c36fc09bd8506d3088a00e8ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLDMCTB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCktlQBMH02seSJgAAZK4mmYExrhWaLO%2Fw41u3G352TKwIhALDnJE%2FInEjBEH%2FibI%2BF1mwKDxZk0RJVFgMJYOLqGbjmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwsFdM2GK3gI3Gcegq3ANQhZAEVy1YwqV%2B0HsinS%2BXWixSMEuom5SjR%2FTgcNHBiGnEEBfD6wX6cBK4mDL15qB%2FwwmSARNVRQ0Ktjk8fASNGs3hESMbg13VasCDxNayDvoagFErnn5kcusqVgX1N92vZV2cxr1CxaO%2BAPPRb%2BDJO200epERsZ9MXl%2B%2BkTVI%2FeNQQk6x%2FmCtcak%2FPPB7fLOYKrhHkZyQGt%2F5aMuw0nQk0YL6N50VHPzarXR6yDImUMK27lcck0Gh1mF6fLSA25%2FCfdXMJq1%2FiFbZXhP7WWUXg9yiJ7o0pic1eqWs%2BSfD9QtKP22huEbHvOUq2JpWydYb7lzza3TDmOovEtDyaV%2BUbktcW4zKJncG8TSn%2BFMV50ZBzarob%2BlW6ilFnlueJCb3xOqvO75NADzmKYdu5itKICqw%2FpWni5rxC5U9ysZkmYgf%2BnI5ELARLEYYtkYsP%2BDWqfET8xCk3MLap8N4WehBkQXZrq3YwZ303Uw4nwPkD%2BPhyxhJvhc9%2FKLid9WvhCoyjuFiHgq%2F%2BnfBZUpFVArgw9fVMNftZpqOTguTX3wlA1mzEohNMx0zFjxhyTj%2Fy6JN9swWGjzbFWWo0Gb5uxP5CG7BGNFislgFaCyJX%2FeLaWAukMEQUw%2F7y1mB%2FDDhncnABjqkAV62p285KNgESn%2BaMw%2BFOJ6jHZeX2ZGWL6kgXdwiRhlkhp%2BjXEZ%2FDp6wycZPVzadKH4fVPYkU854sZPlc4mT%2Bc5YPJNjUJD%2BZZTPFlzny3UO1leFbZzKnNoUUmsmKmdlOe94YBbx0o6inhCFDaGqbRbZbqYUS62uMNc2oxekctOQL3E3qprmTvGGuMRs5nggAJbx15pK7t0ZyQWtC%2BPtTsy%2FomPN&X-Amz-Signature=581d8c6e630bbec7a88c02d83c48c27a0be1397c15e2a8dcc44ca4420f2245ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLDMCTB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCktlQBMH02seSJgAAZK4mmYExrhWaLO%2Fw41u3G352TKwIhALDnJE%2FInEjBEH%2FibI%2BF1mwKDxZk0RJVFgMJYOLqGbjmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwsFdM2GK3gI3Gcegq3ANQhZAEVy1YwqV%2B0HsinS%2BXWixSMEuom5SjR%2FTgcNHBiGnEEBfD6wX6cBK4mDL15qB%2FwwmSARNVRQ0Ktjk8fASNGs3hESMbg13VasCDxNayDvoagFErnn5kcusqVgX1N92vZV2cxr1CxaO%2BAPPRb%2BDJO200epERsZ9MXl%2B%2BkTVI%2FeNQQk6x%2FmCtcak%2FPPB7fLOYKrhHkZyQGt%2F5aMuw0nQk0YL6N50VHPzarXR6yDImUMK27lcck0Gh1mF6fLSA25%2FCfdXMJq1%2FiFbZXhP7WWUXg9yiJ7o0pic1eqWs%2BSfD9QtKP22huEbHvOUq2JpWydYb7lzza3TDmOovEtDyaV%2BUbktcW4zKJncG8TSn%2BFMV50ZBzarob%2BlW6ilFnlueJCb3xOqvO75NADzmKYdu5itKICqw%2FpWni5rxC5U9ysZkmYgf%2BnI5ELARLEYYtkYsP%2BDWqfET8xCk3MLap8N4WehBkQXZrq3YwZ303Uw4nwPkD%2BPhyxhJvhc9%2FKLid9WvhCoyjuFiHgq%2F%2BnfBZUpFVArgw9fVMNftZpqOTguTX3wlA1mzEohNMx0zFjxhyTj%2Fy6JN9swWGjzbFWWo0Gb5uxP5CG7BGNFislgFaCyJX%2FeLaWAukMEQUw%2F7y1mB%2FDDhncnABjqkAV62p285KNgESn%2BaMw%2BFOJ6jHZeX2ZGWL6kgXdwiRhlkhp%2BjXEZ%2FDp6wycZPVzadKH4fVPYkU854sZPlc4mT%2Bc5YPJNjUJD%2BZZTPFlzny3UO1leFbZzKnNoUUmsmKmdlOe94YBbx0o6inhCFDaGqbRbZbqYUS62uMNc2oxekctOQL3E3qprmTvGGuMRs5nggAJbx15pK7t0ZyQWtC%2BPtTsy%2FomPN&X-Amz-Signature=dd3cb9c344d0cb43f6198a6326ee86ac6ebd65663909542c8470ec94a6222b57&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4MH23HC%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIHvyqQMoixidUddGnWilMxyOWFPMrfC%2FV38gI5g2ATdQAiAzjDXMCV1WnNrpqjTMUxu%2FsEtD2TvxIL%2BtIwKhra51xiqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQgdGU8M6E0%2FZqtLuKtwDTcEbVlt%2Br20SRwl1PJ5fSUgXk3HzCBPQJjLI5W6rZ5l4HczlcTLHHNBA5iJIZSzvrLzzu9NRfbDbu4Kz3FyIfsBJRCV1aIEIsY8SDfTUzf21ps%2BXv7H6BZGoZpuxq2mQAfcAIqOjPZPMN%2Fkv8gNtt8rQX9lq70VPNF6IiaIbpgkYZL0I35pu8Y4%2Bh6K0HbkCXr53jIx5nE9eWZSUNc4DUHWs2z9f1yOccZ%2F2HD276yZf%2BuXiALjo5%2F8GZhXhw9iSSQna%2BiuYNZ3wP95PNQDRoR0AJnf9mmrAThrEroBycFX5DoZi4De1s4HrVFDFM12kTuB%2BTUR9h9R6ZDMTkdnYIfSZjjfoCzXIZg%2FAHDSnWxPJrVPNDLdnfnUhze5UZAx2odQ%2F%2BaYyep%2FGqjWL%2B8R5%2F2kkG327V8rBpvG8s5PleR8DVN4jAsH6U9csyATWBSKajPrZ23h%2FXPmWnUi2WtNaLvt9Nu38xcRNK7smrEOgyAE49FBGpUKP1xZcinSxRfxnbtrGMRpxhRVMZeYObUy2ulMDxBo1nJaNxYzIf4JyDgxSd44LwVP%2FIvmtGz5i4V6hXCbwLnROBpolrJL1Xq6MFU%2FIfytYgl8Y9PS%2BX4AFmJwiItkXo%2BOhHGXEXV4w4p3JwAY6pgHW%2BH6mS0sS2CuBmoi%2BJqnAIRBDI7%2BY3ASgwnT9%2BvHbpF4OVAPk4BQF7ZOCqMhwhyCliii%2BpcZKXTvbyEYth1GeUZ1THLGGdWXCdpuBZUQExfiGv3SvQjgFPguToREaePnllKxWVUzfxpwqbdrYV2hzrjiK0l6q9GBrDpZc4SQfKnFjHahwn9mZrgAiRRlb2s28ypb6uvyCFfF569S9%2BfpGF9seyHv6&X-Amz-Signature=26021b897f585f10436357febe0e5e5af390d45cab9c994fa2c9e0021daf447c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWUW5XNO%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIHTvGLDa07BZd5d4TbbevTh9VAV56jnXxxwLIWRJ4pFWAiEApjFiECjZQ4VUki39R7aNLMZMla6nYtG4k8DIp%2BZpJGkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONdblnVkAlIm5Yd4SrcA81xfbWv%2FIn8YABhmr5YU7GAY4%2FUxAchne%2FI3xNwO4VhCk6ZSS%2B0ilKXETNdCLLPYB87XRkvrllNj2rvxTCl%2BT%2BZzSBdhjiT%2F619tlZUz6S98y8rm2gU2r7UYH9r9k0Y7IGhdqBriVGGuRFz9NTqW8%2FXvl7sqN9FnYEWLUDGW8dBhx5GLiKdgpJQqzEFwLPxbQ%2FhfgXpW1Qpnu0vYn3YAdEfLcx2Pduu6fgpeAultB8SJW2V6y9S4sBRCvF%2B2SFpTuR4Bs8efAsTzeNfGXj6cuSfv3K50AsjFRqT8k%2F1EXOKd1nYsrX6bNbFF2t%2BdvnuuIqDZYcQnYYeobJp1hZhYdLcwVKSqXUteBXPGVVRHkXLhWi75%2B7oou4s92cz6V0HooHWw5vml7CJObGh0OxUhs1d42fEk6P33Qe3zXQV6352k8qI8wdAm3b5N90SuwmlG1%2FTAAReq%2B2ZaA97PXQY3PCafKSmK1XzRpYylfZhv5L7XflTsJySoCdW9FRS4jOHAHS9Kdl2YVjmTuXaT7YsOV61HJfC3r9Au3N43AZ24j6DHqyN6C%2B38sY3ZFvvxI25SySvix2AvLnUb3WKFheOEdzXKrjhLLfOY5SSRqQPWnm0mkJNbPZ0piocM26qMOGdycAGOqUB0%2FXUBbR5ebPI1mYroxVLtHA%2F4Uhddgf6y%2FxzFCtQydXz35ey8AlTvVjY%2Bam%2BX%2FvyQkUhvATzDEphdx5OP8rtN%2Fk4QEX0RLUP1IdYs9iUUNJTcu%2Bq62x5adrELmxqRv4T6UWQZxzs8j2hAgoI%2FDmyx0xFG2eOfUa28MPB3mnGIvF3QP%2BvUT8LiNfBpMhp0myNoLLlekz06NLcZ5Zib1kLtZIySt7z&X-Amz-Signature=acafebb606b9b3e8b854cd4bf4ab8f031872de6dc97ecb3ae2ee394d71d3e9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKLDMCTB%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCktlQBMH02seSJgAAZK4mmYExrhWaLO%2Fw41u3G352TKwIhALDnJE%2FInEjBEH%2FibI%2BF1mwKDxZk0RJVFgMJYOLqGbjmKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwsFdM2GK3gI3Gcegq3ANQhZAEVy1YwqV%2B0HsinS%2BXWixSMEuom5SjR%2FTgcNHBiGnEEBfD6wX6cBK4mDL15qB%2FwwmSARNVRQ0Ktjk8fASNGs3hESMbg13VasCDxNayDvoagFErnn5kcusqVgX1N92vZV2cxr1CxaO%2BAPPRb%2BDJO200epERsZ9MXl%2B%2BkTVI%2FeNQQk6x%2FmCtcak%2FPPB7fLOYKrhHkZyQGt%2F5aMuw0nQk0YL6N50VHPzarXR6yDImUMK27lcck0Gh1mF6fLSA25%2FCfdXMJq1%2FiFbZXhP7WWUXg9yiJ7o0pic1eqWs%2BSfD9QtKP22huEbHvOUq2JpWydYb7lzza3TDmOovEtDyaV%2BUbktcW4zKJncG8TSn%2BFMV50ZBzarob%2BlW6ilFnlueJCb3xOqvO75NADzmKYdu5itKICqw%2FpWni5rxC5U9ysZkmYgf%2BnI5ELARLEYYtkYsP%2BDWqfET8xCk3MLap8N4WehBkQXZrq3YwZ303Uw4nwPkD%2BPhyxhJvhc9%2FKLid9WvhCoyjuFiHgq%2F%2BnfBZUpFVArgw9fVMNftZpqOTguTX3wlA1mzEohNMx0zFjxhyTj%2Fy6JN9swWGjzbFWWo0Gb5uxP5CG7BGNFislgFaCyJX%2FeLaWAukMEQUw%2F7y1mB%2FDDhncnABjqkAV62p285KNgESn%2BaMw%2BFOJ6jHZeX2ZGWL6kgXdwiRhlkhp%2BjXEZ%2FDp6wycZPVzadKH4fVPYkU854sZPlc4mT%2Bc5YPJNjUJD%2BZZTPFlzny3UO1leFbZzKnNoUUmsmKmdlOe94YBbx0o6inhCFDaGqbRbZbqYUS62uMNc2oxekctOQL3E3qprmTvGGuMRs5nggAJbx15pK7t0ZyQWtC%2BPtTsy%2FomPN&X-Amz-Signature=6bc61611017f191f81c2e6abfe70883999f7b62e06799e99cdb071c123eb37e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
