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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R62E5EC7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGSQNwSaSbOWhAPf4oCy070VCszQO8lm276BXZYufiNhAiBXCP%2BFIR9dgVhQIgyHU3bl5wk3ke9zkConWKpPwRIPjyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcgGSTHHdx4TIt11kKtwDwZIZPPJ8be%2Fsa5psB4jMcflCxskS7M6py9m1TG93mVb%2F0kLx6wSHbffVZ%2FzTLquhxwLJKNsmyplN6PZzdRLV%2FBq2K3ppXRbP5RWq0IxQNoGx%2BFExT3X1GA12hiXzKuIPZh4eeAoYaBpgCt0%2BVPIRdpbN6LDLBLq7jClygo5d0D%2FZH1%2BbdkNr%2BZrkXvVbUVukucuyVsely0NeWK2fgaz30pZP7GJAK1cIqiM7rIPgyI7BoaEi6TIzNzcJXNV7nrYanRvuLsdtCbj%2Bew5D9NSjthCPg7cn8pbglgWGf2MhtjA7ES60ZdnZrQ8Mcxl6MpQpWy17b5jI%2ByTKd%2FVzIG%2FqbWo08i%2BmxHqckoUtTovF1qwjlfPJpByxxD%2F0GwTRydJBTOQO6yBJkSOYHFssCEKFiu6r13umxE%2BNVSN%2F8ofTBpa%2Fqhr5tiqzluy4%2Fh4rjM7zLrgWEtEF890bMY9n3pJlgEUsfuuLcXM17LXZw%2B%2BzS8F7pCcxS8LMThIzX17z%2BgcEl7MMJfAVNGBXLJIKC0AdIj7%2F%2FHFEmTzTbTgs9A7ndwUbYX2iOyaWuRVpIScHkUo0wWuv74OIWISYFLci%2BkYloHUkjH52gD9kYmW5r1yIueq9W9ZErXOr890cc08wnZOHvQY6pgH%2BQpdXsVkIFHNE4ZJiB42pULJHPqXmX4H7L0hVuS7ltroTFwVSr5NaYUp%2BfnpzXKMaQ5ltGpaIzjSeeMDWakd2cg5HK4sArzFU%2F60xtml6LoxN5qYlabBHJq%2F2%2BChB4O98KMKAN8Ov6uIeP8Y3VXIHtAvCiHJGgEZnm%2FyjNeqwXsojA4p9TNCVibCC6uAo2GtsKI%2FyorrfvWjXALdTER6WgQF44lu3&X-Amz-Signature=aac69b1c02682501de2400e3f29d4a82393339db7c2d752ad655243b3db3a1ec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R62E5EC7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGSQNwSaSbOWhAPf4oCy070VCszQO8lm276BXZYufiNhAiBXCP%2BFIR9dgVhQIgyHU3bl5wk3ke9zkConWKpPwRIPjyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcgGSTHHdx4TIt11kKtwDwZIZPPJ8be%2Fsa5psB4jMcflCxskS7M6py9m1TG93mVb%2F0kLx6wSHbffVZ%2FzTLquhxwLJKNsmyplN6PZzdRLV%2FBq2K3ppXRbP5RWq0IxQNoGx%2BFExT3X1GA12hiXzKuIPZh4eeAoYaBpgCt0%2BVPIRdpbN6LDLBLq7jClygo5d0D%2FZH1%2BbdkNr%2BZrkXvVbUVukucuyVsely0NeWK2fgaz30pZP7GJAK1cIqiM7rIPgyI7BoaEi6TIzNzcJXNV7nrYanRvuLsdtCbj%2Bew5D9NSjthCPg7cn8pbglgWGf2MhtjA7ES60ZdnZrQ8Mcxl6MpQpWy17b5jI%2ByTKd%2FVzIG%2FqbWo08i%2BmxHqckoUtTovF1qwjlfPJpByxxD%2F0GwTRydJBTOQO6yBJkSOYHFssCEKFiu6r13umxE%2BNVSN%2F8ofTBpa%2Fqhr5tiqzluy4%2Fh4rjM7zLrgWEtEF890bMY9n3pJlgEUsfuuLcXM17LXZw%2B%2BzS8F7pCcxS8LMThIzX17z%2BgcEl7MMJfAVNGBXLJIKC0AdIj7%2F%2FHFEmTzTbTgs9A7ndwUbYX2iOyaWuRVpIScHkUo0wWuv74OIWISYFLci%2BkYloHUkjH52gD9kYmW5r1yIueq9W9ZErXOr890cc08wnZOHvQY6pgH%2BQpdXsVkIFHNE4ZJiB42pULJHPqXmX4H7L0hVuS7ltroTFwVSr5NaYUp%2BfnpzXKMaQ5ltGpaIzjSeeMDWakd2cg5HK4sArzFU%2F60xtml6LoxN5qYlabBHJq%2F2%2BChB4O98KMKAN8Ov6uIeP8Y3VXIHtAvCiHJGgEZnm%2FyjNeqwXsojA4p9TNCVibCC6uAo2GtsKI%2FyorrfvWjXALdTER6WgQF44lu3&X-Amz-Signature=accbc1e1e447b18352217e86e1bf239257a3d1a9afc5d0bfaa387fef01ea5173&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXY42YYL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCiCCbC7of6yNHGM7hU9S2tctWhOlfKAI3viVOnpcmhzQIgftQJaItY1f7wWlA4HLQtTQEbnUEMJJ68YT%2F%2FoJG7eW0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLNTSUyFJt2o5K9VfyrcA1GaduAUxtSAGATMMa99gGORhLp1lH3Nzlg9M%2Bb2eeKHBBRHrFQlTPx90%2FcdUkd16%2FsZf8cb%2FqWkob8rnvoZAmXPnQODceS6Q03pHt8Hf7d9s%2FpRKY9C2AGvQKVW1vCcG9tazrOSv%2Ffagj5a8nkhyp2S5n0GeNL4Zx085g21neBwf77LdL8QXFtVVpSdsBHkH%2BysdzAMGf8bAvTBwkdsMfLJLZNvY0T%2BNzT3WlXzKQyltq3oPta3QdeSJSn3EnSRBb%2FIYBKpxr%2FxbfDjhT7PN5xfkNK0%2B%2BloCmjd%2B04mxl%2BG9hobiycbh3Jh%2B%2BR8VfQEuBFCbFl0V1eEg1DWMkkloPvD024qxX8lmi4F0PT5UXbIu6r7PYIfQLc3tujyI%2Fqii32ztzaw7vGU%2FsLhgsN40bEPXcPknmyy9BjOBIW8YxPZt9DGIDem3RQQXiR2P9oMnJLRu064%2BGQ%2BluoUVztW98J7pDmpk%2FDtKLajx%2BIqhgGKo0MIFVa5DY7mIwEUsvhflWrUhF1LuNM7OWnNVJeDltPiOpTOYwr3PPSZf%2BqDX5RuoMda3O00EK7MPqasYT8P7vJdKtxB97xLXqymkekWYErW%2FABveEaUeJYb%2B%2F1cya1HCmO0c%2BQ5n1ddHfA7ML6Sh70GOqUBOvR5VKKMLg3ZUnAlP6yFY7igJdfQAodxYDlKlmM3J1XLovFzthjoItwNWxCk9dWK87kIVPZWGtjryJKt7wUnAhNvx9f168TzyVwZ5ro1urFt9FBIUQpbuMUIYn9yLkipxdeDaYQCcitLeR6doeOcUXNhaYgnVpLobgQSJsCH6ozGlEzUe7OL76LxY9v%2FX8O65tuEaLT3GCQnh9NBcBae0sIpNatl&X-Amz-Signature=61b2b072a2b11a2d741bd738964c46c66f4bfb1e3968d120b4420bf1907c255d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77J46XS%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDUtXbiP1%2Bx%2FEAVLeyDI3U214zgsFZ9fTPs2YniVciYeQIhANPgx%2FOs7Plypk6J5UB0%2BjC5iK2jsXaZhqA38PbC80J7Kv8DCCkQABoMNjM3NDIzMTgzODA1IgzBFluTwKiSUZvWTZEq3AMpdIE2nN6BVm39ARTCJEm%2BYCpW3GxlcJQmNhzWz3WGblAg8VK0fLS7%2Bf4rF4OGqa5lDZq2q0fmpmpcDDC1rnza6I%2BhIGX4NvxN8SbNLCHd1dsciJ%2F9R%2FlVpOY1xIya5bxVSk63uMYTGMChRS8cH4S7DNanwP9YpgS82sLZe1RxZuiaKi7EhW%2Bz69Di7rON55%2FQrunmbMTztvOlRds4vHjNtyBj3SrsrWWusszlEBRRdRdqfAHE8u9EratSdZi4aU3qthti1D9pr3zyE4QBJQjMY3stHc3snVbIAoDYmrxuQmahHpE5Iyeu33SZKOjKZhz1P2RDtb9bmlTRm14LBeavaeaqOq5XDsIi7PSTi71yjHAkM9BvGVp%2Bo3XL2M7CaqkSLHsmW6lDV8XNrZxK2CBcKB9y5nT4%2F9rhVLX6yf90KPoi2RUzs2gqArBmFkqVA9RpP9kiHhU9THTbPGjZ7PSRdBPw6iy51seIPLLgzpfnyUDh29L1R4YPDk049AU44kYV2caf8Qv6gACq93SY3a4k56SXwnCMSoZv0p6f8b5uAU%2BOGpY4wPzfpkWvcwkacD6Ju65pW7VWDRDcX8W4zsbdL9KDFdpCfGEdqh1YCipoLvHnuFkPldfD%2FyY8ejD8k4e9BjqkAZKUh9la%2BAmdmbWwLpIt%2BjEeIWjKCoIxs2b%2BFZ8FCwdkvSxqbgGWWtqH8e2hqJqkanWmkHtF8PalWfKSWfEIu5%2FMoEPYIxmX77l6zExO3E4T9fjR4UKopeZ03wpvvxeDHs7NBBPiZqYAJ3WFOmWvXDOwPKvxtqeBuisG4ZY94UOdLEvFSGbzyM%2FNEHbkxVyw5%2F%2F5xpKCHMwni0zKkrR5ZQAfjcMx&X-Amz-Signature=d0b0727e56bdd3055a9289c3677e41970edc1fb6ffdb556ef44af9060e325f80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R62E5EC7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGSQNwSaSbOWhAPf4oCy070VCszQO8lm276BXZYufiNhAiBXCP%2BFIR9dgVhQIgyHU3bl5wk3ke9zkConWKpPwRIPjyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMcgGSTHHdx4TIt11kKtwDwZIZPPJ8be%2Fsa5psB4jMcflCxskS7M6py9m1TG93mVb%2F0kLx6wSHbffVZ%2FzTLquhxwLJKNsmyplN6PZzdRLV%2FBq2K3ppXRbP5RWq0IxQNoGx%2BFExT3X1GA12hiXzKuIPZh4eeAoYaBpgCt0%2BVPIRdpbN6LDLBLq7jClygo5d0D%2FZH1%2BbdkNr%2BZrkXvVbUVukucuyVsely0NeWK2fgaz30pZP7GJAK1cIqiM7rIPgyI7BoaEi6TIzNzcJXNV7nrYanRvuLsdtCbj%2Bew5D9NSjthCPg7cn8pbglgWGf2MhtjA7ES60ZdnZrQ8Mcxl6MpQpWy17b5jI%2ByTKd%2FVzIG%2FqbWo08i%2BmxHqckoUtTovF1qwjlfPJpByxxD%2F0GwTRydJBTOQO6yBJkSOYHFssCEKFiu6r13umxE%2BNVSN%2F8ofTBpa%2Fqhr5tiqzluy4%2Fh4rjM7zLrgWEtEF890bMY9n3pJlgEUsfuuLcXM17LXZw%2B%2BzS8F7pCcxS8LMThIzX17z%2BgcEl7MMJfAVNGBXLJIKC0AdIj7%2F%2FHFEmTzTbTgs9A7ndwUbYX2iOyaWuRVpIScHkUo0wWuv74OIWISYFLci%2BkYloHUkjH52gD9kYmW5r1yIueq9W9ZErXOr890cc08wnZOHvQY6pgH%2BQpdXsVkIFHNE4ZJiB42pULJHPqXmX4H7L0hVuS7ltroTFwVSr5NaYUp%2BfnpzXKMaQ5ltGpaIzjSeeMDWakd2cg5HK4sArzFU%2F60xtml6LoxN5qYlabBHJq%2F2%2BChB4O98KMKAN8Ov6uIeP8Y3VXIHtAvCiHJGgEZnm%2FyjNeqwXsojA4p9TNCVibCC6uAo2GtsKI%2FyorrfvWjXALdTER6WgQF44lu3&X-Amz-Signature=a51926673a6bd2432d4144526bba77ce52508f62a032caea6a74c26978f3b968&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
