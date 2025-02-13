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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKB7SNGX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8mYLosFAet7M9z0Pq0HCzMeBIC3xPQRh4MOpGBrasTAIhAIXfovzi0d0Y05LDxxOoatDOPWoXq8v0iiPtea%2BJbsO1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igx39YDeMeX7mDCsw74q3AMjohZ5PvjWd3kEOIOAl1aplzaKtL6Cc8cz4%2BZQ%2FQF3IYXy0gazzX%2BUGqdxbScYoyzaA7%2FBMmHftkqHaLJRX%2BExc2d%2FkeFTSHUg3YCFwf53FEf%2FkOV3%2FbPbNA%2Fooiv9W89vLuozq1qiKnIMi2YDA2gs4oaTBUqOJDFeD5TC0nbCcxNwYGKaPEIz6bszuMWCDrN6Di9ug8r5PHEgDWj93PDHTpjlXJ%2Fq0%2BzqF5dtt2rPmUIDaO%2F4bGaA9%2FVlo0xTM4Bfkvn5WaiGcv8zbCSHkzWbQPoMO0MMKfc9CThB71lsWdPZxsfYWuUENFNDdgWqA50kpF%2FHiGNIGt%2FQ8X4RE4LrXb8BOMsLulsUuacCbr%2BbnMe%2F600%2Fm%2B58YqXEOOJ%2BF6Q%2FSvCyYwGH6kUL6mySgq3ngHV5g9KutOttLwX9%2FLNHNQIWNcsxah1Q1sqFIfHb2HWxLw9yOaJtipua4mNuxy6m9yEEhg%2ByIDfLZ89zTgqmeUtAaBfLZFV8d3D1p%2Fg4NELI2HBE8JsXIgpd2fp0hPJmvF00J0VHjxexi3SuRFEllyc%2B7%2BmnhxLxj%2BnAkEhJSC7AWatvb0yezOLRABFF1rHe0er1PTGc8jTKfwM6fTRRLTSXitkBBn62H26j3zCswre9BjqkAcLQuDpx8QZcuSsxLiAZLF15Ros0E4S9VEXd8EArb6J3okpPiXcMxUYWlnlL8iuR1I1sCaTbRCltbx73uALLgvP%2BLhsEvyT%2BLMTQkH6QaEzWR3oKmSGJTCHQZWjDO9ncpuRS37Wu28f6IV39gCVk0ceN6radA9IG09ZDdLcMS6NYNIZ79cCHCfxeQpZhRxH5yWKpj89nJhOhCGIgQ0krlEC5inNw&X-Amz-Signature=49e924c1cef474504d6b6d826099fde8b98d7408a0d85b33e7f3cf3526311229&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKB7SNGX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8mYLosFAet7M9z0Pq0HCzMeBIC3xPQRh4MOpGBrasTAIhAIXfovzi0d0Y05LDxxOoatDOPWoXq8v0iiPtea%2BJbsO1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igx39YDeMeX7mDCsw74q3AMjohZ5PvjWd3kEOIOAl1aplzaKtL6Cc8cz4%2BZQ%2FQF3IYXy0gazzX%2BUGqdxbScYoyzaA7%2FBMmHftkqHaLJRX%2BExc2d%2FkeFTSHUg3YCFwf53FEf%2FkOV3%2FbPbNA%2Fooiv9W89vLuozq1qiKnIMi2YDA2gs4oaTBUqOJDFeD5TC0nbCcxNwYGKaPEIz6bszuMWCDrN6Di9ug8r5PHEgDWj93PDHTpjlXJ%2Fq0%2BzqF5dtt2rPmUIDaO%2F4bGaA9%2FVlo0xTM4Bfkvn5WaiGcv8zbCSHkzWbQPoMO0MMKfc9CThB71lsWdPZxsfYWuUENFNDdgWqA50kpF%2FHiGNIGt%2FQ8X4RE4LrXb8BOMsLulsUuacCbr%2BbnMe%2F600%2Fm%2B58YqXEOOJ%2BF6Q%2FSvCyYwGH6kUL6mySgq3ngHV5g9KutOttLwX9%2FLNHNQIWNcsxah1Q1sqFIfHb2HWxLw9yOaJtipua4mNuxy6m9yEEhg%2ByIDfLZ89zTgqmeUtAaBfLZFV8d3D1p%2Fg4NELI2HBE8JsXIgpd2fp0hPJmvF00J0VHjxexi3SuRFEllyc%2B7%2BmnhxLxj%2BnAkEhJSC7AWatvb0yezOLRABFF1rHe0er1PTGc8jTKfwM6fTRRLTSXitkBBn62H26j3zCswre9BjqkAcLQuDpx8QZcuSsxLiAZLF15Ros0E4S9VEXd8EArb6J3okpPiXcMxUYWlnlL8iuR1I1sCaTbRCltbx73uALLgvP%2BLhsEvyT%2BLMTQkH6QaEzWR3oKmSGJTCHQZWjDO9ncpuRS37Wu28f6IV39gCVk0ceN6radA9IG09ZDdLcMS6NYNIZ79cCHCfxeQpZhRxH5yWKpj89nJhOhCGIgQ0krlEC5inNw&X-Amz-Signature=993f76dcf4aecc68df60ec33395f4b6c99adc016484e845b99f58aea51c7706d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNTL7UGQ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjXI0D7I0RvU%2FWGp92HSdEECRKI%2BStBGhf23SDwzjeWQIgdTTpxI999W6AttBqG%2BUqrX3bNL%2Bdjr5wbweLYJ0S1AAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHx6c72IFJ%2BjTPKpYircAzyvUvOQIZr5qTK%2BS3mgNefBIJcJqlDwzEJrMSZiw5DhRGvnp5ViwfOng9rdd04Mu9eSz3CrhYoVrQRRL%2BbEwqyznsDpO9XwNvbcsSTqWSCdYZrHLlV6HzbUIPPDQ%2FV60ikM9hS2BvpVjqK5OKfJpPiyN0BbEjjzH%2BMeWsjTmDdczXm3RJQDq65baBd1SdRuY52d5eZOH2chtvhmzeZf1IlaLhw%2F2vNkkTyNh7wcg4YufcuINsrx72seWFCaqeEeaCVjuLGKhC31DGcsZdNG0qocPMnWDhHrKt7lyiVtuW9nl2VBDjklhC8x8%2Fg6o42FWvCFgQERzLZsn1c2kOXRh71X4dp2rLb%2FfAsbQ%2Bzq%2FxO8LLqZnwqzv9XiQmT8iwfuqT0K8M6dvIsTX1YCw3skY20txzx4SakLMuJpzaQ6VisOs339B%2F8613JpYLaZ%2B1wai08%2B4WhOCLhILrQaWJuYMoe6x7maw8ohdEzDiXXj%2FV2rxE6hWLzyZ%2B59IejfTe8mC14LGir4c59c4aXzo3%2BvQ1Hjq7fH4F1EH8x5sIEhcQJqUbqGeklogCAKE1UK1nCu8Lj9NEbxf88rqbj4kMDnA3MmKR%2FR2gCD65aWexbtH%2BMaOAg8PbyLscv6On3dMOHBt70GOqUB9Uo0gdDR8BMojkiCeFKObHHJdJboVbyUThqIrdgL6z3J0BKRp9AMvcVLlV5odMemnNuyToWMS0HAFkTmX%2FX694ndiWE8LOJTaxNhKFD4%2BcizLF14CEIY%2BgUqJxqOyYD4pm4eL2tsGFYp98oQSdRSYvCMg%2BnmIFgmsTShnZZEjClEUwkmuik7c2S4X9nY3zJLlL84MlzL6vNi4f3UFWJ9yDJJ%2BRaW&X-Amz-Signature=9645f871c281d30f2c2faf7d85c6b61bf2e98365db684fd9dda8623ad9caa023&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I35OAA4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyUD5khKZRtT6uDsxJMVTjSuBEDib5aKfELNxyVZGTlAiEAvN2B1fqGUWsrRKdxq13GuVM6BDT%2B%2FO27mulVGQxCisMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDEAw0F%2FURf1IpwRPnyrcAypeG7D2iTeKtcglX%2Bkebm6LIFZSmQvZgSUFm75uqMYIVwyVbmjpLPUzVG6PHO9dFtAyfbYvoHy%2BFS38dCaQPUiY01RJs0uCGOJlPaYITqNRrg0BrIF9pXPciBHKsrtOrHs52o6Im9geNNCsWtITX3U1G4%2BmsDamaioFIEwr%2B9Ov4EOaD617ouWutTVzZFlndMSxYI4gxiGD1EKNfyRgvX4Pz6sU58EV%2BAu%2BxW9tSg4iDPGbJnucGK6aV0fm5Wjk2S3TvF%2B%2FyURvmSi5a0IDRZErP10wOIgGaLYcOUdtIfGtzrWxAXBX6s%2FecO4dvABF3UA01%2FiYyBeoQkoLZ9HULLSUmb7jv7ijY9TIFjIP0YgHHLNXXWytJIHOrmmLv6gakdRjuLoISWc10U8vutG8Z2lQmJ9Xvik32694jwGoLTphaVoC1sa6hqjG6oPFgxr%2BIH44f4S%2FhbY2SIK3ZUBAvLJZhtFa%2B1hqodxjTVATkahGzc%2Fe218PhbAzy%2BTuwaqW8jH2DdLViglQuQ3b%2Fv2KXGu3nYPqbur8kD0S5yXZocyAwNRhtWybxSxHCmunVq4eVncosQMAD2zRLqkLicYSGHiuRzdds3SOvEG0Uxir6KdjJCB0eEB%2BEpvZM8lsML3Bt70GOqUBgDBHSqa7iwcugOCrQ2mL18fzCtEjWvkTOW4fd1FMbR8ti2IhPUqz%2B%2FVPoKk%2BvqaB%2BW%2FIpuR2VClsmtKArw4h%2B254hyFmYsEbVmcZNrYz3ub%2FkYpvHbeAxXJ5820Rey3rRB39lNQAv6s1bz9J5Ri1CaEG3Y%2BlkqRTwi2vQi78K2C7roDLXdtkPaxM%2F4Y%2F09IDr6Y88WYO9YJ8sV%2FI9DbQ6NmT%2BTrt&X-Amz-Signature=9340ddc7c41bde57f725233d3bce887b2e02e23e985f76f6649b89522b1844bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKB7SNGX%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8mYLosFAet7M9z0Pq0HCzMeBIC3xPQRh4MOpGBrasTAIhAIXfovzi0d0Y05LDxxOoatDOPWoXq8v0iiPtea%2BJbsO1Kv8DCBUQABoMNjM3NDIzMTgzODA1Igx39YDeMeX7mDCsw74q3AMjohZ5PvjWd3kEOIOAl1aplzaKtL6Cc8cz4%2BZQ%2FQF3IYXy0gazzX%2BUGqdxbScYoyzaA7%2FBMmHftkqHaLJRX%2BExc2d%2FkeFTSHUg3YCFwf53FEf%2FkOV3%2FbPbNA%2Fooiv9W89vLuozq1qiKnIMi2YDA2gs4oaTBUqOJDFeD5TC0nbCcxNwYGKaPEIz6bszuMWCDrN6Di9ug8r5PHEgDWj93PDHTpjlXJ%2Fq0%2BzqF5dtt2rPmUIDaO%2F4bGaA9%2FVlo0xTM4Bfkvn5WaiGcv8zbCSHkzWbQPoMO0MMKfc9CThB71lsWdPZxsfYWuUENFNDdgWqA50kpF%2FHiGNIGt%2FQ8X4RE4LrXb8BOMsLulsUuacCbr%2BbnMe%2F600%2Fm%2B58YqXEOOJ%2BF6Q%2FSvCyYwGH6kUL6mySgq3ngHV5g9KutOttLwX9%2FLNHNQIWNcsxah1Q1sqFIfHb2HWxLw9yOaJtipua4mNuxy6m9yEEhg%2ByIDfLZ89zTgqmeUtAaBfLZFV8d3D1p%2Fg4NELI2HBE8JsXIgpd2fp0hPJmvF00J0VHjxexi3SuRFEllyc%2B7%2BmnhxLxj%2BnAkEhJSC7AWatvb0yezOLRABFF1rHe0er1PTGc8jTKfwM6fTRRLTSXitkBBn62H26j3zCswre9BjqkAcLQuDpx8QZcuSsxLiAZLF15Ros0E4S9VEXd8EArb6J3okpPiXcMxUYWlnlL8iuR1I1sCaTbRCltbx73uALLgvP%2BLhsEvyT%2BLMTQkH6QaEzWR3oKmSGJTCHQZWjDO9ncpuRS37Wu28f6IV39gCVk0ceN6radA9IG09ZDdLcMS6NYNIZ79cCHCfxeQpZhRxH5yWKpj89nJhOhCGIgQ0krlEC5inNw&X-Amz-Signature=5868fcc0b8af0ed1a2c84eae2d663fe551e67c0be461a6e900fb984f44b00117&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
