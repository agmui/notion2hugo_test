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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NMPK4V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGWpaMUJR%2B6I%2BqehqlFYDz0F6PShalp6wm1X4txsVE8RAiBfhYQQD0SoNOGBHbJfChnvvyNOu56ujDte34awMHjucir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXUQpm1fEruRLA9mhKtwDzi8lxBmWLJZlvVlX6HDgLM%2FqLFxt8sW5%2F8nyFoJ4DjL%2F9XZIrOEV7brirwz0Hf%2FapcbIOkdUd4bB%2B4wGvdpM5%2FHoovrPFr0HVqTK0vhEgbDtsHEn0H4GwNHBP2gXaU8qV2%2FtQRwIr%2B%2Fm8oGEnItXCtP2IMXIMs7rw%2BndQ2NVkxIXRS2SYYOMo4pungmcHcdw8lFIFfhex%2FEdl8lrJmeFogYEaCEjp%2FazKqBhtqWKfRNhnr%2FmsGsKQWenXlKAO0v1HPKorwO4cMBgIHY%2BZI%2BK%2FX5IqfgoC1SLJSqL6ttomoG1VTW72cw%2F0bp9XsRKgbawoh4wPF9qZc29CZZdVEXY8jUQglSQFefLuPbyXre6hjCo1qX1Xk6k54udplWa1tOzZzbusQeH5fwio8YT24I7tR2Jn%2B076MaK3tnRVf0RvDRi%2BIkgoL5KAIu28IgSrxWG9KrxczFA%2FWh8UOQtyg2argQYffjIGWtUNIV59lHLKRWLrkrTPLivNzHy2tXvXnmKVud6VJMkR6kanqxBUTXKEmPatBaZQ9ZEuPmPAHgvsEwoS1zYPt1xWZLvQ5lNASHXVRHJrx%2FK2JKjQITb8mRZgy0SdeFw0NiNT4%2B08fuYmdhpe86Wg4UxAj0EB6ww2KLHvQY6pgH4fGedTg44DwirQ9yWg2LUJgz52jJC0bcZnpxywwfS0J9nBfXL5uqHfKzaEII880S2gBRMVLplt6cWlCM7w9HAFzifd6wYPbiL%2B3YJ5nrwoqyspSapQE6YksY%2B0fAzN4xP7AFAdLU%2Bf4sD1fNWFkkQbfqissK4e8mwRYlEjWZs2eAH0bLQHEJa8IvexsqyIbo2BL4bRwONfV8m3CqgGtpawISqzA77&X-Amz-Signature=5f42fbb5304eb58d331e577c25539dd194acfd0210235266de9264d52f83e533&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NMPK4V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGWpaMUJR%2B6I%2BqehqlFYDz0F6PShalp6wm1X4txsVE8RAiBfhYQQD0SoNOGBHbJfChnvvyNOu56ujDte34awMHjucir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXUQpm1fEruRLA9mhKtwDzi8lxBmWLJZlvVlX6HDgLM%2FqLFxt8sW5%2F8nyFoJ4DjL%2F9XZIrOEV7brirwz0Hf%2FapcbIOkdUd4bB%2B4wGvdpM5%2FHoovrPFr0HVqTK0vhEgbDtsHEn0H4GwNHBP2gXaU8qV2%2FtQRwIr%2B%2Fm8oGEnItXCtP2IMXIMs7rw%2BndQ2NVkxIXRS2SYYOMo4pungmcHcdw8lFIFfhex%2FEdl8lrJmeFogYEaCEjp%2FazKqBhtqWKfRNhnr%2FmsGsKQWenXlKAO0v1HPKorwO4cMBgIHY%2BZI%2BK%2FX5IqfgoC1SLJSqL6ttomoG1VTW72cw%2F0bp9XsRKgbawoh4wPF9qZc29CZZdVEXY8jUQglSQFefLuPbyXre6hjCo1qX1Xk6k54udplWa1tOzZzbusQeH5fwio8YT24I7tR2Jn%2B076MaK3tnRVf0RvDRi%2BIkgoL5KAIu28IgSrxWG9KrxczFA%2FWh8UOQtyg2argQYffjIGWtUNIV59lHLKRWLrkrTPLivNzHy2tXvXnmKVud6VJMkR6kanqxBUTXKEmPatBaZQ9ZEuPmPAHgvsEwoS1zYPt1xWZLvQ5lNASHXVRHJrx%2FK2JKjQITb8mRZgy0SdeFw0NiNT4%2B08fuYmdhpe86Wg4UxAj0EB6ww2KLHvQY6pgH4fGedTg44DwirQ9yWg2LUJgz52jJC0bcZnpxywwfS0J9nBfXL5uqHfKzaEII880S2gBRMVLplt6cWlCM7w9HAFzifd6wYPbiL%2B3YJ5nrwoqyspSapQE6YksY%2B0fAzN4xP7AFAdLU%2Bf4sD1fNWFkkQbfqissK4e8mwRYlEjWZs2eAH0bLQHEJa8IvexsqyIbo2BL4bRwONfV8m3CqgGtpawISqzA77&X-Amz-Signature=6e8abb0de9d8d5beedc8239e2a2bff128b853a059f6fedce8c1bf251f03596a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A5AFMD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFKIwZlpnGvCbsIu403S6nw5uv5oHaG1fgEFDt6ld2XAAiEAykdTGfm4A3mgLcDVGZBydGvXYcSWxyIEOcLdJ6su93Iq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDMFtJMpv4ZT%2BoAXeCrcA7ewj9JoIvb1Nn9p1w9QQSSgzOS7%2FGnhNDeQJeAcmIsj4GLFtgvfu%2FiQrd9qEzIy10kRqTqaycyYUP2QKlSauoU%2BQ8JT3cXuccRtYi03y4CXe1A1TTOfERAI%2B5YJ1nONpTLPXHDVKF4ptYB%2ByKetBFPw9%2BG4vEaCeDvQzKiEYwrZlUtIYSm1rIhFujx%2FClaRS1jlWlOJFmJnxsB046KZQ8zGigBFxIYiUdTzTRIgs3uwKUGJYLrn4IjIV19HaNhsCiEiQssiccffUHuCyqq%2F4FcTBWYQC%2FwNFp7kvudvGr3ocPu5Vhg7J9LCvoVTSSKlcfpGBvHzbDmA1rJnCpm3mpEB2pmek6cEhmoXa1ag4%2BdRal80HrhTXP3BXVYbvwfP0sVGzWivQWvRBCugjOZClCIP2RTmNh9VSGD7WleMMxB40YKJpsPq8T41pxyBUFumC89FUfAffnOwQvvkiDoNVcMpkA7p8LmLLGlWR%2BNohjGNmLeN6o5yRCHG2MEDFZbVcdIy4IVOaygQSlLj4MltLGeBQXHs7d%2BmTCw73LjlgmivAvECxBFjv2VIajyRIs%2FoUPSSLXYWApCRz%2F8Sxi%2FhRYNPAH%2Bio8TCvaVYu9dEsfKZD3JKJEBH5qrKBSfhMO%2Bfx70GOqUBRk7j3u6s46Dp9yUs%2BBhSHD9VNCMuzKhdeN%2FUX9Fccl%2F3Kkcoz6g3WiqrxPj2f5tb5jPVAEs821TmPcCxINqGAG47NOEzAOq5ZS4LtJmcPPrMayr7pEP%2FwGY0CuJrSzMatH9L9ftzCYHVr61o415p9bVluMR5Bq0pi57u2GS%2F5SR3E44X%2FtiI6bC3avFtV9Y1wf9kehlW%2F%2F0ecBAXXlmtVKbYpkc3&X-Amz-Signature=d9ea78ddaa71771db6275814fe88435a8f2aa6577424ccd928478f59676faeec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAYGGZ3%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIBdbUx2%2Bs55lP6tS0hxByPspvKklztzbElesNArIWe00AiEAx%2BfrdTRjHdgy82AKGHte07vHWJkipn93A0tnN8h7r5Qq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDHN2L1ZmNCnxxZudcCrcAyTUnOSqLpsVzULgQHt%2B2eVCnTO65cfu6aG91OKc82RzoecIpm5XawAocSSUT%2FzGIXfzgmsX9P6L12aM79GvkZGEsuJUKSQflkflX4s5Pc7JXRu%2Bc8DUU4aibI%2Fx9WcKJgIp1rt83sKuWZhrdqRuZA8WWcQX9ovzzMhzbj82TRT8HAsLRlThmkpYfhl1c6Ma27nuzBhDa6Kc1nv8kF3QxLeqSSPesF2mv9jKz%2FX24NHTdw9qg%2Brp%2BCsPwWKGg1QcfbHur7I%2FAqa06GZj8qqbMU0JcppD1vPQKbmli07XuM97ppl9K9UruOgMUFlCHv%2FECSZWeUT%2FwhLumuWAH4qpqUaW5L%2F3yHnyA7ht1v8Lca8bYpHvcAiflnkp00uioRBS4ODUE48M9NeeZwokoW6lKQm16KLLMrSr%2BHidosoOqQNBFnuilEOnDvWye2KAxFJc0d9ocEyfs%2BCZLly3XNaEg2eQleHFjZ5d720yGcVwTMWUEdUuWEutIY4LWbtn47nVwfcCEmFai73dZswqXqEEnLDe2UZeYN%2FjoBDudKBQHX5yEdJ3iGzQWtHSJNhS05bUlq5EtmfXTOPtAtDvo5taqETJGRthav0RQQyr7cETUfuGamg4%2F2sdRon9PNC%2FMNijx70GOqUB2HtlyFf%2FF4yb1sPiyg9g%2BSrLKLE4nz4bUskZ%2FACUxYdGMlPyyiZ81P6COpaDiUYZu7GIeh6oB43X%2BvYI0YZbn%2BvoLVhZs8MWjSJq0JWCT5tXdfCA2GUNMXX%2FT9AUOUb09rIgNDk1kAS9gQPETyGeLiqVSqQTfs0kNG%2FsYuP7y3NAUF9efwMj%2BA3JXwibZ7w%2Fcsf%2FkqT8sr7floQ%2Bu270J%2BWLX%2Fa5&X-Amz-Signature=016cc4a895814155843020a6ae5cd54038db0807cdad56172dcbfb2b0ad5fb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NMPK4V%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIGWpaMUJR%2B6I%2BqehqlFYDz0F6PShalp6wm1X4txsVE8RAiBfhYQQD0SoNOGBHbJfChnvvyNOu56ujDte34awMHjucir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXUQpm1fEruRLA9mhKtwDzi8lxBmWLJZlvVlX6HDgLM%2FqLFxt8sW5%2F8nyFoJ4DjL%2F9XZIrOEV7brirwz0Hf%2FapcbIOkdUd4bB%2B4wGvdpM5%2FHoovrPFr0HVqTK0vhEgbDtsHEn0H4GwNHBP2gXaU8qV2%2FtQRwIr%2B%2Fm8oGEnItXCtP2IMXIMs7rw%2BndQ2NVkxIXRS2SYYOMo4pungmcHcdw8lFIFfhex%2FEdl8lrJmeFogYEaCEjp%2FazKqBhtqWKfRNhnr%2FmsGsKQWenXlKAO0v1HPKorwO4cMBgIHY%2BZI%2BK%2FX5IqfgoC1SLJSqL6ttomoG1VTW72cw%2F0bp9XsRKgbawoh4wPF9qZc29CZZdVEXY8jUQglSQFefLuPbyXre6hjCo1qX1Xk6k54udplWa1tOzZzbusQeH5fwio8YT24I7tR2Jn%2B076MaK3tnRVf0RvDRi%2BIkgoL5KAIu28IgSrxWG9KrxczFA%2FWh8UOQtyg2argQYffjIGWtUNIV59lHLKRWLrkrTPLivNzHy2tXvXnmKVud6VJMkR6kanqxBUTXKEmPatBaZQ9ZEuPmPAHgvsEwoS1zYPt1xWZLvQ5lNASHXVRHJrx%2FK2JKjQITb8mRZgy0SdeFw0NiNT4%2B08fuYmdhpe86Wg4UxAj0EB6ww2KLHvQY6pgH4fGedTg44DwirQ9yWg2LUJgz52jJC0bcZnpxywwfS0J9nBfXL5uqHfKzaEII880S2gBRMVLplt6cWlCM7w9HAFzifd6wYPbiL%2B3YJ5nrwoqyspSapQE6YksY%2B0fAzN4xP7AFAdLU%2Bf4sD1fNWFkkQbfqissK4e8mwRYlEjWZs2eAH0bLQHEJa8IvexsqyIbo2BL4bRwONfV8m3CqgGtpawISqzA77&X-Amz-Signature=f38b27152693ebfa45d1064fb882126650cdb912b5c229a2ac095eace17c4dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
