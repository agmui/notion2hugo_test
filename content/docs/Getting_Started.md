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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQIYYVN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCCVtjUtweXHQqZ5WLU52D1ykblQuYev5lmedlJk00dtgIgFEH514iR9DofjfqiTspzzyo8gsTl9PCd1otxyRFmvqAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP3d%2ButDlTg2o51c0yrcA0W8mpMxtgfx9xBgn3UtQ0q8yylK%2BvoOtRyXYnrkPqqUHmU0AQkn4bLAaEXGSYqyyhvPZTjGETee9J8vqN45QwKjcGDn%2BuBq7DO8DjfOjxchNBfhaeYH7OMGOPYwifNJ91oUQoXPfmxwVGgOkS3KVJSs%2F5lZa9LND3HN5DnVDPVLCt%2Ft1gpZTdgLVceATS9hlLPu0cov6tO5vDVzZALS92vFzWVQZPAdp89BDtyNfNXWs50LnH0ZA0aZHhCddZJinqCOZV371aIO1ITKaEPFkUuGQX53UzeRSjHaQrSj47uYiG7By%2FZoXN0aO6H7l8ysTdrrTay5jAvQf2eng6W0GPWG5P0zMTDD3Fsti9xV6Ggb68dReGpHhVDo9sSQEa4BGWjvbJ44D3ETN4TJ1ihTIVgzp%2F5aci%2BoWqBfLvJ75oYdl52nyjIFXWDTrj4ETaZH83tnlNTD%2Ff22CXlAeuk6W5OLxdqnAhzZ5fpEiTvJwc%2FF%2B4mBU79omFdAMJolEbzW%2B1AJlkiaiXEz9IIdMzv%2FYVZg8ho73ElWUTj8aCbRUx%2BxEuvsQmNXxXq2QFAGRbXNB4SAJKdVYF5GaivAvxZHbz%2FYiGt85zsUzTUSVB8GJFUeIRwmuyWlCTQ%2BrcfAMLK0v70GOqUBEm2795paER8WYwjCfxvun6JtUZ7eGkM8f6yHJ0r7JXFH8vDRtYG7BaH%2FF5E3jo60NOW%2FtelB63d%2F9lklk5jlx4t7Vfzf9tQYQMvo%2BsT5EC52EIyeEuJXIMc5gp3d5Ab%2BRhHEBodLdXJkVAzg%2FTkzcsFdCYUlW5cSTGqC7115A6fxNSuNX6s8mJEzafrFR%2BRa%2BS2yx9HTAc2BqDsqEuklUD5%2FkGeU&X-Amz-Signature=f9e50b340bfd1189b60bac0176e4cdcd9b4f67d1e10552be3da7c0a8c4036950&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQIYYVN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCCVtjUtweXHQqZ5WLU52D1ykblQuYev5lmedlJk00dtgIgFEH514iR9DofjfqiTspzzyo8gsTl9PCd1otxyRFmvqAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP3d%2ButDlTg2o51c0yrcA0W8mpMxtgfx9xBgn3UtQ0q8yylK%2BvoOtRyXYnrkPqqUHmU0AQkn4bLAaEXGSYqyyhvPZTjGETee9J8vqN45QwKjcGDn%2BuBq7DO8DjfOjxchNBfhaeYH7OMGOPYwifNJ91oUQoXPfmxwVGgOkS3KVJSs%2F5lZa9LND3HN5DnVDPVLCt%2Ft1gpZTdgLVceATS9hlLPu0cov6tO5vDVzZALS92vFzWVQZPAdp89BDtyNfNXWs50LnH0ZA0aZHhCddZJinqCOZV371aIO1ITKaEPFkUuGQX53UzeRSjHaQrSj47uYiG7By%2FZoXN0aO6H7l8ysTdrrTay5jAvQf2eng6W0GPWG5P0zMTDD3Fsti9xV6Ggb68dReGpHhVDo9sSQEa4BGWjvbJ44D3ETN4TJ1ihTIVgzp%2F5aci%2BoWqBfLvJ75oYdl52nyjIFXWDTrj4ETaZH83tnlNTD%2Ff22CXlAeuk6W5OLxdqnAhzZ5fpEiTvJwc%2FF%2B4mBU79omFdAMJolEbzW%2B1AJlkiaiXEz9IIdMzv%2FYVZg8ho73ElWUTj8aCbRUx%2BxEuvsQmNXxXq2QFAGRbXNB4SAJKdVYF5GaivAvxZHbz%2FYiGt85zsUzTUSVB8GJFUeIRwmuyWlCTQ%2BrcfAMLK0v70GOqUBEm2795paER8WYwjCfxvun6JtUZ7eGkM8f6yHJ0r7JXFH8vDRtYG7BaH%2FF5E3jo60NOW%2FtelB63d%2F9lklk5jlx4t7Vfzf9tQYQMvo%2BsT5EC52EIyeEuJXIMc5gp3d5Ab%2BRhHEBodLdXJkVAzg%2FTkzcsFdCYUlW5cSTGqC7115A6fxNSuNX6s8mJEzafrFR%2BRa%2BS2yx9HTAc2BqDsqEuklUD5%2FkGeU&X-Amz-Signature=0ef967aead5149fa43815cf1db35ca5c3e9ac0afc9ea4a9fa068bc0ea047ffc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IDSONPO%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA4L3oyn4lus2swqdSKS2zw62OqJnFEsW%2FfDOMZF8mp4AiEA4aZv99Smlr0VuGj2%2BkXqTXhsnvlUPYRJ%2F%2BuXUXSznIgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGTMuelgTaNwv75LLSrcA6OXxLwKMj7k64XEG45eS0ARa0f2ZXzMXbOKnaRCMm7O3FmNv88QwbOKqwOtciLAVTjSWAyq7KykS2i1XjdtLM82OCSUfCn3pdxzGFD1Ln9C5l7jv4J39uJiicTAXPprS2%2FDL2wvV6B7VCxIMx0IECTqwktuQ8EA5JzZFj8Y75a7106H6gWdGzxKSgP2PsKrEmLyeo%2B%2F3S8TU7bG0gRlSo%2B9XWSzT8Jv0q0rTZ0Uc8QyYeJOB8OEUydsX%2FwFesDeBnQoiRCcwTAvszGMzsJFhQq4ShpCg5N9BQOP9dyKS65z2ddTalteisozySwA%2BrEBjViIKS8f4cUtW9pJmDGAhD0B8UJhsWF3HJoU3AtjHoP7CRzD2ypOxn8gkBUKtIj%2BC5OYsfD2JPhqrkAdO7wWJt8GpvtGTJra%2Fv3l7p8uMG2JXnczX0lWPL8BBzLHItHBoo3nUYmjHUUSskgp%2BElxYf0mu9LvmCduMmnxNhCUQSMpuRbjAzfmVPtWuvwsxqVKzEFzxITlASLJ7HXHuPXbrZLpxNlcnaeJhAm3wsOvXAcFglu7KNMdL0t%2FB8biu%2ByhzJvCysfvEa0be14fLjaRQZRMJ2RHKjFcSX0eMe7KlLGPIWtAl9S5fnuKvtRFMLK0v70GOqUBMBRFZXLY76cVfoaB4YSV2SPW%2Fpv2mHevfP4bWTd6wZwzzeV7NQlxLfhKpGDbvX3Mse3JFqQM4n9u8Dexn0ccpuPqKW%2Fnj3eCwAU6zGBIuhpAKHIRLwDDRjbrSFpGD%2BdEzod6pqaincmkVLppsjf0BjwcU5jnXLYyCuDjUYup1UsAGre441e%2B8FTwOlD65CnD9KzTKmvqOPVKNodzRO%2FtWFCPHfbX&X-Amz-Signature=180e8d5f27093cdc7f5248d17f48666f68965fd2fe1cca64eeedde2b378b56ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLHYKPB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIAkyvrsP004%2Fk7Wwhw%2FvYHt3GZwTLfLEQzS6w03PfuWaAiEAuFl7L7V12C3iQqDP2pbYloGjv36RJc0cT62TECekGzoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDBJGS6R%2B8%2F%2BJjQUesyrcA4oVDv%2BSk4bsMQsIBHQKUvceQXZ5odzePz4UiMpQ6JOtCSMO4byW93MyJtSALRuYi%2BGSNOJcvlKSx9FIy0HU7iy0%2FhxUx609i2Wu2ukghAghPwD7zoA1jUDlea9o84K%2Bd1eUyGtoFvsxZ3nGwl7WTcs%2FDhLEfDpXY1H7uIYdZ70TqFf3sHbvK%2BmTSXM0OHIjHho21qTdAO6bo8B5SNk%2FipJ%2BV%2FXNa49uxFQinPhEPn4S5lT84LL8YwCmDyLmt1%2BkJAex4NqDvBMtIutJpr0S3OHESYN3sRWJeT84EBI6xdJtrTuPd%2F8bmrCwwmJW3Pvv5VgXDWQK8BsfN7gd65B6J7Y8PczKQZMF2EBkfYqIben9lviKsTefhU5eblhfXx5p4ghR00Iy6fuyPl6XrMieBMtoPTp%2B%2FFm3hPxXqcwIaCAZhZn78AYLuiKnh4X9mW4M%2FNSQSjIqwQKcroT2eh6T0Z5QfktiD9uMB2TtIpvrQgEq6TJwFbgl5VvTHyGWRI%2BCNOwsNiOlVplcDNbn5ObFSg%2F5i6Kh%2BoIPBlKQSNRnIrKhrCOLAzeRYYMJNaaFLIskEjsFL1MMnk1EYJcP6R9nDJfodCGqryPXNO4LfHs%2F8sYdkaNAn9GU4RHwlNLpMP6zv70GOqUBsJVUzwbWxidl5DYo00H58iN5EP9SzORqeLrJxF906VvhOZ%2BsizRL%2Bi1Vl6lABu3b5nPZ5JKqelEzKlcIrBDgNrtukbZxCl5U0IPSmkIVbvUpb7e%2F%2FTwewMTkAk8e%2BGBa4BZehm6s5etpxC7H8dZgB%2Fq%2BbNQDvcmETE5mjoZ7BDFr8getmRcU3rxOCTMxhDQhRnsfyb7xt6Mf%2BQl3t%2B1a7FBVzF9S&X-Amz-Signature=4b6462216be4235e4d90095049726f36aaea67c922d903b4a0473e7592ffc17d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPQIYYVN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCCVtjUtweXHQqZ5WLU52D1ykblQuYev5lmedlJk00dtgIgFEH514iR9DofjfqiTspzzyo8gsTl9PCd1otxyRFmvqAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDP3d%2ButDlTg2o51c0yrcA0W8mpMxtgfx9xBgn3UtQ0q8yylK%2BvoOtRyXYnrkPqqUHmU0AQkn4bLAaEXGSYqyyhvPZTjGETee9J8vqN45QwKjcGDn%2BuBq7DO8DjfOjxchNBfhaeYH7OMGOPYwifNJ91oUQoXPfmxwVGgOkS3KVJSs%2F5lZa9LND3HN5DnVDPVLCt%2Ft1gpZTdgLVceATS9hlLPu0cov6tO5vDVzZALS92vFzWVQZPAdp89BDtyNfNXWs50LnH0ZA0aZHhCddZJinqCOZV371aIO1ITKaEPFkUuGQX53UzeRSjHaQrSj47uYiG7By%2FZoXN0aO6H7l8ysTdrrTay5jAvQf2eng6W0GPWG5P0zMTDD3Fsti9xV6Ggb68dReGpHhVDo9sSQEa4BGWjvbJ44D3ETN4TJ1ihTIVgzp%2F5aci%2BoWqBfLvJ75oYdl52nyjIFXWDTrj4ETaZH83tnlNTD%2Ff22CXlAeuk6W5OLxdqnAhzZ5fpEiTvJwc%2FF%2B4mBU79omFdAMJolEbzW%2B1AJlkiaiXEz9IIdMzv%2FYVZg8ho73ElWUTj8aCbRUx%2BxEuvsQmNXxXq2QFAGRbXNB4SAJKdVYF5GaivAvxZHbz%2FYiGt85zsUzTUSVB8GJFUeIRwmuyWlCTQ%2BrcfAMLK0v70GOqUBEm2795paER8WYwjCfxvun6JtUZ7eGkM8f6yHJ0r7JXFH8vDRtYG7BaH%2FF5E3jo60NOW%2FtelB63d%2F9lklk5jlx4t7Vfzf9tQYQMvo%2BsT5EC52EIyeEuJXIMc5gp3d5Ab%2BRhHEBodLdXJkVAzg%2FTkzcsFdCYUlW5cSTGqC7115A6fxNSuNX6s8mJEzafrFR%2BRa%2BS2yx9HTAc2BqDsqEuklUD5%2FkGeU&X-Amz-Signature=e1aec9c089701d9e09dd323a9adadcbe4740c0fb089e5616c5f234d4ba4f8bed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
