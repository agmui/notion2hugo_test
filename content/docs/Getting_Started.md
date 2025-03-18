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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTMEJMG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFpcuwTfnJ9kxEpzGLrhEopUpGLzYNAadXa2AmlEvnXAiEAoenOPqF4j8gQGmNMlAQ21S9qZzPMSm5UDquXAKWWMAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOOiQEJHHyQNFczS1yrcA2YmO%2FVlBbuHCLKh555xDvc6sPQMat6N8xUzzj%2FcnPZQlJ9LZtXcV4xIXPJAHy748qIHy1YzEjTvlpKaYYYE%2BOey9gvtm%2BdjgMaSxtJVvTSThxI8%2F%2F%2B9BycB1IkxYp6ZS34UvOBP8Tib9Xi6QNuG1HcBHH%2FUVRy7YgIY0ADIKN6VQO5RcGEf9JHdiIWhoEXZfgryaN7%2BlhlFIYkNs4xIc5c4kVcBcakvNhq1rvvh3zSs%2BaTsTfqARQ0NNFapAfqJRsfp%2BJsesdbMS0V8LQ%2FoHBGTyMDHVvnrH7RshtxyVr60FGLPbmJwKIG4XFoKhOktW6N%2BZsFk1gutuZTT9YGzesdx5kYnKC%2FLtCYpsfpVa%2FYwkOj9RgJcC5jLXaepJU95T%2BV1riLTtnxxvhrryU3pD%2FSXVz4x5RQacEtdO7BMxOpITHlImClaVO4gsgCnqChtz6UOE4oJ7Y2QTyoEZnPULuT5U%2F1W5pF7Nm50TtSJ354M%2BviAQRIk8hEe89JTwoQkxH8HHz6wgUW2glBOzmN93vpGfzw0nJH2RjgqwtXa6H3oT1WdBO1z2tc9wWjrSU4K73KNOOaHer9VbXg3D2Jk49jiSUljX%2FQ6MftNxTDTsjX7XOI3oDShPbv2XAgtMJOH5L4GOqUBbx09sRgnqfZemRWvw%2FQFHrK%2BY0oUAgffa3t0Fjxbu954%2FOSKa5GChPm8gGjtL889gk8eowJOb8J62NtcNqu5Ac9iK0%2BxsROP6Pi%2Fndmv4TincJ7hwA9a%2BidGYuPfTCawlBTxiZ4zSpEDriCansKuCosoJIIV2Zo6HikmaJYnNtDdOQTQIS720I7OEwvpNKzvQgv%2Bv0nBx1I4znBMEaXQFtKianL1&X-Amz-Signature=bc62eae7bc0a27f3dce2d7c4aa0f52aa9a197eb867db0cc0880971865b14a7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTMEJMG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFpcuwTfnJ9kxEpzGLrhEopUpGLzYNAadXa2AmlEvnXAiEAoenOPqF4j8gQGmNMlAQ21S9qZzPMSm5UDquXAKWWMAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOOiQEJHHyQNFczS1yrcA2YmO%2FVlBbuHCLKh555xDvc6sPQMat6N8xUzzj%2FcnPZQlJ9LZtXcV4xIXPJAHy748qIHy1YzEjTvlpKaYYYE%2BOey9gvtm%2BdjgMaSxtJVvTSThxI8%2F%2F%2B9BycB1IkxYp6ZS34UvOBP8Tib9Xi6QNuG1HcBHH%2FUVRy7YgIY0ADIKN6VQO5RcGEf9JHdiIWhoEXZfgryaN7%2BlhlFIYkNs4xIc5c4kVcBcakvNhq1rvvh3zSs%2BaTsTfqARQ0NNFapAfqJRsfp%2BJsesdbMS0V8LQ%2FoHBGTyMDHVvnrH7RshtxyVr60FGLPbmJwKIG4XFoKhOktW6N%2BZsFk1gutuZTT9YGzesdx5kYnKC%2FLtCYpsfpVa%2FYwkOj9RgJcC5jLXaepJU95T%2BV1riLTtnxxvhrryU3pD%2FSXVz4x5RQacEtdO7BMxOpITHlImClaVO4gsgCnqChtz6UOE4oJ7Y2QTyoEZnPULuT5U%2F1W5pF7Nm50TtSJ354M%2BviAQRIk8hEe89JTwoQkxH8HHz6wgUW2glBOzmN93vpGfzw0nJH2RjgqwtXa6H3oT1WdBO1z2tc9wWjrSU4K73KNOOaHer9VbXg3D2Jk49jiSUljX%2FQ6MftNxTDTsjX7XOI3oDShPbv2XAgtMJOH5L4GOqUBbx09sRgnqfZemRWvw%2FQFHrK%2BY0oUAgffa3t0Fjxbu954%2FOSKa5GChPm8gGjtL889gk8eowJOb8J62NtcNqu5Ac9iK0%2BxsROP6Pi%2Fndmv4TincJ7hwA9a%2BidGYuPfTCawlBTxiZ4zSpEDriCansKuCosoJIIV2Zo6HikmaJYnNtDdOQTQIS720I7OEwvpNKzvQgv%2Bv0nBx1I4znBMEaXQFtKianL1&X-Amz-Signature=8cd1bb9374e9bf7394356838f9cac203d528168aa04e47dd117e6e1616bf25bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRCQIL5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BKvBR9dLwXxg7yTjy52LAOS%2Fki3UVQWKxipQgE6jl4AiEAoYW59Yb4WEjLonH%2FWjrioapCwjmxBCWsLR2Qr1iZu8gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDN1g%2B4eGoJL3jL9CnircA2HsnG5utaqs9Y0ODTH%2BZnPRu0LRmN7Ife50OSHB64nMzQV%2BT4iepzBirI1QO5iHc8GpQPx7enyF74gZ0r92T6utFqkIMidGJIq92hpDeHosz9IKHaQ1KvaT%2FJQgwroCmaR5MkYsWXz7MZWU76l63vGJfSz4MAbwy47yJkF2YTiETUAhW98SsHkYA1DY7mil1auIuEQuUZj8czDo1H8h5PyR%2BVFQIUo3pdAn1YzDsiVIyBuVys14gLhEomT7ZD3E3uGA6YO4%2B%2BKokgsTqMQzRpq1w3L9NLKGk2tTwZ0NJS42XQGkFl65%2BasotKlV2iBQtD6WUVs2G1aL80giMFNe7L7Z4PZmsQNb2zMQmBiWiuW%2FViMCVRxVd3O5C%2B1hqftHhdS4gVb4eXy2pNgrqCZAIkjsqUf213YG%2F4NnCkhc717hRXDRJkgLa%2Fy3RC5%2BWbbtFTXE5iCsLgIWMGDq30sU5DDyrJBwGStd9Wf7NZcOw2oO80oeJdl2Bf2Z1didZoXEfh2jIkDpt8bFaWv6FvK9Ds%2FQlu3KXN%2BVhqRGHb1zu%2BYiqcPbA8Vwotg3qYYiIr%2FRt8G8KxLcf8V0NMsx1Pf4jwGX7rKndzpRhjSIT0dA7QVV80hjPU0MMjYoxAVhMKSH5L4GOqUBT5ITEHIRH5YciAjtsPdW%2Bb8Qv3pueX6PUIyXx9zwBurAl3TgIRT5NTuqQF3Iv6x87L2GzjcfKQMSvTJ89Kkifv2Ne2zgncmuEiv%2BMuP8wLkCO6FqISu5NU6g4xr1wsCxEtcr7UdNQFiIzXQ4nqElmRDVmW8N8jxvN8j7p%2FdIZYgj1Fu53uwEmqhwxp07N1j9lQ1gtheq%2BH5vIhKr4DtAPIi5d5tJ&X-Amz-Signature=988e7a15f8183206a7adf4a7fdeba27165c4df3cb7b30041381b3632e2692dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR2IHUFQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8q6AK12al13Wc1xZogGkoet8bZtM9WOLye73LT5gqewIhANEqf8ksXRHiIRdQVXuD36LLS1IXFQ%2BtsBBSEwmMlEkyKv8DCFYQABoMNjM3NDIzMTgzODA1IgxJwyRIF20MBC22zucq3AOqD8f2gYhwU7Pa0sExj0f4x9K%2BP3qonKiJ82aTNQHPgjVCGIBb76hNKZtpR6WejFLg%2Bj%2BZZ64j9TeqHtX8GHKxpXT%2Bfx%2F5btcwvf67zdkknHBoBTaKaHfGZ%2FmPDLEN0Y20UkgnJVUpFqFGKJKX4RvnZk8KZ0xqcZEZKBRJOF%2FHXQ99q0AMvSCbqJLKFuR4JnJ94b5dD8FPViWbjw1iFj9V4%2Bz%2FYA6qgHxgHRT8Fprm3urDuJ16W1jMGgOa%2FVapjrENVag4n%2FpnrZKK85bHM9mz0ngQFoltotV7qC17FnlXLuBmPL9Qj1kGX9AWQc4zVHVmf3gVJ5thqyRavWFISjlEWbiO5mIo42b5Qmqdy4HNO3HJ%2FwiAAvn3b%2FQc1mFxU6DXMOFMWTocAr330j1Jl6IF1ZTK8uciFOU%2BYb6T5YTSweP9eHueVir9jLLe7dBE8JLlF2l3hYlc9h6nRaU5NrUPC8Du1w%2FAVIJXTbxRgt1hDSn5aBRRmj2pwR7GDfqH5koEvU99SvTfrvYg4TIRcl1tZD3YSbhh8qo77femZiLyWmrjx2a7bzNLH1IMiaJqM43tpS026nfqvcsthmfwK%2BxZp%2FACyth%2FRXx9ucDRya5t%2FK6J0Drkfiot4MV9EzDZh%2BS%2BBjqkAdyTlODTH%2BNK1hPs6TCoEtJzQc1EHiK3%2F%2Bv6tNxhPdyg3yfYqTn1wkWKkN6R4JYCEjufMsrKgxVAhMruyw2s5V5%2BKi8i7fX2Ik3KniEuarWXAs4dDaASvoPxv3Bz%2BG4lUUfXEMq4qt8nhQDgc2LJXVczbgFOmktRPRlXgu5Pv3jp9hNGMZjJIzPu5%2BfR00fRlEwnbrem7Z78LhufCj0tQx6VCL9g&X-Amz-Signature=35f9b48e527bc5f36fb0f940f178550f1e0117a55e1b31e0a19aa4241348aac3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JTMEJMG%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFpcuwTfnJ9kxEpzGLrhEopUpGLzYNAadXa2AmlEvnXAiEAoenOPqF4j8gQGmNMlAQ21S9qZzPMSm5UDquXAKWWMAAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOOiQEJHHyQNFczS1yrcA2YmO%2FVlBbuHCLKh555xDvc6sPQMat6N8xUzzj%2FcnPZQlJ9LZtXcV4xIXPJAHy748qIHy1YzEjTvlpKaYYYE%2BOey9gvtm%2BdjgMaSxtJVvTSThxI8%2F%2F%2B9BycB1IkxYp6ZS34UvOBP8Tib9Xi6QNuG1HcBHH%2FUVRy7YgIY0ADIKN6VQO5RcGEf9JHdiIWhoEXZfgryaN7%2BlhlFIYkNs4xIc5c4kVcBcakvNhq1rvvh3zSs%2BaTsTfqARQ0NNFapAfqJRsfp%2BJsesdbMS0V8LQ%2FoHBGTyMDHVvnrH7RshtxyVr60FGLPbmJwKIG4XFoKhOktW6N%2BZsFk1gutuZTT9YGzesdx5kYnKC%2FLtCYpsfpVa%2FYwkOj9RgJcC5jLXaepJU95T%2BV1riLTtnxxvhrryU3pD%2FSXVz4x5RQacEtdO7BMxOpITHlImClaVO4gsgCnqChtz6UOE4oJ7Y2QTyoEZnPULuT5U%2F1W5pF7Nm50TtSJ354M%2BviAQRIk8hEe89JTwoQkxH8HHz6wgUW2glBOzmN93vpGfzw0nJH2RjgqwtXa6H3oT1WdBO1z2tc9wWjrSU4K73KNOOaHer9VbXg3D2Jk49jiSUljX%2FQ6MftNxTDTsjX7XOI3oDShPbv2XAgtMJOH5L4GOqUBbx09sRgnqfZemRWvw%2FQFHrK%2BY0oUAgffa3t0Fjxbu954%2FOSKa5GChPm8gGjtL889gk8eowJOb8J62NtcNqu5Ac9iK0%2BxsROP6Pi%2Fndmv4TincJ7hwA9a%2BidGYuPfTCawlBTxiZ4zSpEDriCansKuCosoJIIV2Zo6HikmaJYnNtDdOQTQIS720I7OEwvpNKzvQgv%2Bv0nBx1I4znBMEaXQFtKianL1&X-Amz-Signature=d78b7147a2c46129e156399711411331cf7ba37d2cce64c53b0073d46c6238d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
