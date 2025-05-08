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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSVSCZL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgpOkYM0gKTDQ4lIC5cr9BuoESpvCF5014JzkoSSAM6AiEArxIckY0L%2FXsz5TzC2DuPSJzH07qkchC2wIR5oVnCgpYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLgLoaSqQmZ0zo87aCrcA8Gwe3qfnn4FUrDiSlTGBgJGITidsHj3D0%2FMNvYFh72i7iSMmfdwTXKePE7tbed6nweHKyedeVV8me9YyJ10wyWhfSMkW2FRe3oIllOScYyVE7yNpUeU9yldW1G0PSnBR0yNxGWt3qUxKN07y8c43%2BrpEny4IDgZW5McpFsRACkPDHq5fDBolcbfIsFVUdW9NlK8ksui9JNfdpIFZXpJQBv0Vn3mqI9LNX3nnMCbQ31DYy%2Fp9GOg6IaHJjyaLOsOvy4rxO0TQscCl4k%2F%2BBRTX3o1sQIKeCKoNR9TSpJkglSXqjgAuThk4yXBMfllDN3vNNPDhHh8tnIF5O6gQanqmYYzZ%2BSPIbRaSr6U%2B6OzgjxfExeZg16%2FjJ2eX8381rDF9yS0kMcibTUUk9gKPldHK4J5GdY8TEEw1UCGH7%2BkK2jESjcR90TCmuPzbVepkj%2BYri3v0UL1pLjWupjxt3vmFiUVm%2B1fCDRPge7Y%2FP1jOhXPyQAl1h%2BmD6V54RHtza0q0birhAFGPtPmrg05gy28suzn0vUgPZShKYs8Whtoop4f7yDbmYiDb8VVEg9QATW0AUCSw6u%2Bc%2FMEB9Cp6A4CD2eXa4eJ5EZpdjKM3KtznKYFpM7nmpK8YXvE8I9KMJma88AGOqUB7LlRxLU3RuNNuaX7pT3xnfqASktYSkO%2B8QpGbSdi%2ByTIYB4jamg%2BoMi0AsdTjnor5njmG6TIOgRpWy6Ywz%2F9kVp446NsSHBTTzYiOhKAcSK%2FxbjH3jGtkA1WlymXAfyV%2BpOaTgNqfVX6lSzSex2txEXagUXaxGnqERc2%2BGUneWJPW13PvoWSzYLsiEA0VMhnrZ1YSWF91%2BMb%2BQW%2FxI45HOzcpDT%2F&X-Amz-Signature=c9ca26e2a3d6728ef45b0d916f9e1eefab7079b9ce9e3ffe79ba7474776175ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSVSCZL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgpOkYM0gKTDQ4lIC5cr9BuoESpvCF5014JzkoSSAM6AiEArxIckY0L%2FXsz5TzC2DuPSJzH07qkchC2wIR5oVnCgpYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLgLoaSqQmZ0zo87aCrcA8Gwe3qfnn4FUrDiSlTGBgJGITidsHj3D0%2FMNvYFh72i7iSMmfdwTXKePE7tbed6nweHKyedeVV8me9YyJ10wyWhfSMkW2FRe3oIllOScYyVE7yNpUeU9yldW1G0PSnBR0yNxGWt3qUxKN07y8c43%2BrpEny4IDgZW5McpFsRACkPDHq5fDBolcbfIsFVUdW9NlK8ksui9JNfdpIFZXpJQBv0Vn3mqI9LNX3nnMCbQ31DYy%2Fp9GOg6IaHJjyaLOsOvy4rxO0TQscCl4k%2F%2BBRTX3o1sQIKeCKoNR9TSpJkglSXqjgAuThk4yXBMfllDN3vNNPDhHh8tnIF5O6gQanqmYYzZ%2BSPIbRaSr6U%2B6OzgjxfExeZg16%2FjJ2eX8381rDF9yS0kMcibTUUk9gKPldHK4J5GdY8TEEw1UCGH7%2BkK2jESjcR90TCmuPzbVepkj%2BYri3v0UL1pLjWupjxt3vmFiUVm%2B1fCDRPge7Y%2FP1jOhXPyQAl1h%2BmD6V54RHtza0q0birhAFGPtPmrg05gy28suzn0vUgPZShKYs8Whtoop4f7yDbmYiDb8VVEg9QATW0AUCSw6u%2Bc%2FMEB9Cp6A4CD2eXa4eJ5EZpdjKM3KtznKYFpM7nmpK8YXvE8I9KMJma88AGOqUB7LlRxLU3RuNNuaX7pT3xnfqASktYSkO%2B8QpGbSdi%2ByTIYB4jamg%2BoMi0AsdTjnor5njmG6TIOgRpWy6Ywz%2F9kVp446NsSHBTTzYiOhKAcSK%2FxbjH3jGtkA1WlymXAfyV%2BpOaTgNqfVX6lSzSex2txEXagUXaxGnqERc2%2BGUneWJPW13PvoWSzYLsiEA0VMhnrZ1YSWF91%2BMb%2BQW%2FxI45HOzcpDT%2F&X-Amz-Signature=01c5dbd78ebd78bba3a1d89f848efb5a75b884a9220db9b605914e2488008627&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSVSCZL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgpOkYM0gKTDQ4lIC5cr9BuoESpvCF5014JzkoSSAM6AiEArxIckY0L%2FXsz5TzC2DuPSJzH07qkchC2wIR5oVnCgpYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLgLoaSqQmZ0zo87aCrcA8Gwe3qfnn4FUrDiSlTGBgJGITidsHj3D0%2FMNvYFh72i7iSMmfdwTXKePE7tbed6nweHKyedeVV8me9YyJ10wyWhfSMkW2FRe3oIllOScYyVE7yNpUeU9yldW1G0PSnBR0yNxGWt3qUxKN07y8c43%2BrpEny4IDgZW5McpFsRACkPDHq5fDBolcbfIsFVUdW9NlK8ksui9JNfdpIFZXpJQBv0Vn3mqI9LNX3nnMCbQ31DYy%2Fp9GOg6IaHJjyaLOsOvy4rxO0TQscCl4k%2F%2BBRTX3o1sQIKeCKoNR9TSpJkglSXqjgAuThk4yXBMfllDN3vNNPDhHh8tnIF5O6gQanqmYYzZ%2BSPIbRaSr6U%2B6OzgjxfExeZg16%2FjJ2eX8381rDF9yS0kMcibTUUk9gKPldHK4J5GdY8TEEw1UCGH7%2BkK2jESjcR90TCmuPzbVepkj%2BYri3v0UL1pLjWupjxt3vmFiUVm%2B1fCDRPge7Y%2FP1jOhXPyQAl1h%2BmD6V54RHtza0q0birhAFGPtPmrg05gy28suzn0vUgPZShKYs8Whtoop4f7yDbmYiDb8VVEg9QATW0AUCSw6u%2Bc%2FMEB9Cp6A4CD2eXa4eJ5EZpdjKM3KtznKYFpM7nmpK8YXvE8I9KMJma88AGOqUB7LlRxLU3RuNNuaX7pT3xnfqASktYSkO%2B8QpGbSdi%2ByTIYB4jamg%2BoMi0AsdTjnor5njmG6TIOgRpWy6Ywz%2F9kVp446NsSHBTTzYiOhKAcSK%2FxbjH3jGtkA1WlymXAfyV%2BpOaTgNqfVX6lSzSex2txEXagUXaxGnqERc2%2BGUneWJPW13PvoWSzYLsiEA0VMhnrZ1YSWF91%2BMb%2BQW%2FxI45HOzcpDT%2F&X-Amz-Signature=1b9fd46dc29b69ff1a9d05847a1126f5301fb3290da5dbfd72ea2173079f8a90&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNSALTSP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCloupMpzOsoQIVWmOgZFLJeZd3Oo46%2Bm5Z4hQ0DP%2Bh2gIhAPkdvHob8EHghpO7td2eo2XsLJ8nOrfVRfPSiQXl7oNPKv8DCHkQABoMNjM3NDIzMTgzODA1IgyE7uP%2FMxWqhKZ7y6Mq3AMSXcf8rm1zB6Sx%2F%2BNl%2FSMwV21Uke3ixSepSnHpfgAUl%2BbBkllKezsmMnDrFlBSbNd8dyXKgdgzarnU6mpt9mTxbx%2FJIuSioi9PqIoIV0gLSt0cm0esmMYfSQEKxCZ9M6ZGYRDcYP0JWrj0aDh136WCRLTwIzlZmfqzQk15pR1Gaf%2BJNwbRekuRaiJnHEMCpY5BkGZ2kl8YWZR9ztc4m0YyNc92a6GwGmN8xBiVhovtkRxi%2F53kLcqhKfIMB2vqs%2BG7cMKQUll1Z0G4GeAvq4Av5HIKI2QYTZMZALlnKn64oRf2V81R48u03EJ2DzWBVO3rKOewHuaWl13hLYn1sLJ%2FqEIN8oH0eUFOWBC4tEBn2llRglrB7VPq5RM%2B7J95eH%2Ffif5xQheQjKBdJi5np9w9Jzmpb5UXz7qs47Yi%2BpxYHuYE5ic7DN0tZjC0Uh4h3MUhuBKV%2BrrVlOSapwUVr625Ip%2Bemj4uu9RzAiQsIT89kqhMwFWl3ulcVBfnyGKo0hy7We9Jag6eQAxLvJJaESMkT%2BjgNXkvcBiZKgSxDxoQ%2BpLgZH1wgNQOgjean%2BWt2rwdjrB2NZo2w853j8xjIDWDqIzc8zfuc5Rk7zkqZMzFfd5JMXsd0yym9rlkvjCJmvPABjqkAY%2BxwfhYKStuExwhbsz0onkAlwuoKquJURwb8qOP0cptAiPhx3aaUqS4MCTOCcaasQNwcbM9DIQDMOtXJlZhO5UAwVZbsrTFRTMVQKSENsbPsGfgt%2BK7H3ApVMSeR3yX6rhxVHDbAChibaTGdap4%2BmLRDyX2KEkFMkoaKkwQhgVHvDlejPOhAEWN724v3BjYHR87%2FJERoY01aLHHnxYalPnoFuus&X-Amz-Signature=13c81631c8191f83a52f48d9b1cd1c6ff3bc9c2b20b17d73d1c2805cdd2d02f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEHVWRG7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMiFZR4MlryqvfS0S7xNRdhQOfNoL8%2F3E8FyXy9qW3egIgCHnKrG%2FeRpsY092MtJDHwZnF725HJH1GRru7h7sgPlsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBc4KCm%2BVGl47Yr62yrcA8xTcXxxXw%2FxkiJ%2BRVzfvxYtHsM6cp34LzGdVAa4hSJ%2BFMYwZd%2BWZ0knNhAE8liRp0YqFe2m7j5uoHL8f9Pafpxw7nnU5pj2%2FvdAMXmhpklLNpYIYmZyseo%2F7JLyYm1%2FseSPIP2AnSHzLELTwnSRJqEa3MaQndgJstWcOh%2F6xgqAyKDSMjmtIrYBQK05BiOu4lWzl1YQh2aRDAD%2FJUht3mhwLFmJiyeu1S9lw7mMAL13kPbVaKUUa%2BFtZx3knGXDG11WXHk%2Ba7hteC2Ix4KJXp%2BLq47zpCsU%2FytDA9wT73858MIsObY2zcq6V2l8PPChEqg0DVFDC%2F9QnUfeGLBJX9Yrr7dQnabHkpZkmHNWMhVgDuEpsbK4suR62yTxt%2BX9E0HH5jyrmqupBSSoxAFZ6%2B%2BdbCm8C%2Fl3EL5a4baFiwzIIbKI0ppzPAwCEW0hjSJDkSBUjZqOwV80pDUPT04xTYed8gwFY27s%2FguyA%2FbGmItCneZ5A4LY8anXk3fhQVtSiUuLJIDtMLjKr6R%2B6whdDtIn0u7utw0bbdoSF12UvkCe4%2BXeAEdBKBXXeJic3%2FtgTtp%2BCQjsVVV2coQZjz%2Bm9MCFMsVvoqROrdzm%2BUNz%2FdoIh2bbgPiAkkaEAp%2FsMNOZ88AGOqUBJu7oXsziOF1B6AioIbPsgSTZgM4UEipUDbeTGmhrUcVGKHuo9UGHzbdsjpbCwzbS3dto43lTXeuq%2BVrVnt%2BGcHCt7fk1OA9p%2B63SmRQj8RFoFgjTPeM7Fjw8yy0wppZ2rumYqnrMB3Cofhktn8KY1xrbKKNYH52VByyS0C41nULKppl%2BYz%2FMcQscnvPSvM2xq%2FEC8nS%2BtsAGsxuUrK4HdJFxSXhZ&X-Amz-Signature=538109a76569052cad0a243532a99bba6019d72c66e8ce7567002edd232eb26c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BSVSCZL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgpOkYM0gKTDQ4lIC5cr9BuoESpvCF5014JzkoSSAM6AiEArxIckY0L%2FXsz5TzC2DuPSJzH07qkchC2wIR5oVnCgpYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLgLoaSqQmZ0zo87aCrcA8Gwe3qfnn4FUrDiSlTGBgJGITidsHj3D0%2FMNvYFh72i7iSMmfdwTXKePE7tbed6nweHKyedeVV8me9YyJ10wyWhfSMkW2FRe3oIllOScYyVE7yNpUeU9yldW1G0PSnBR0yNxGWt3qUxKN07y8c43%2BrpEny4IDgZW5McpFsRACkPDHq5fDBolcbfIsFVUdW9NlK8ksui9JNfdpIFZXpJQBv0Vn3mqI9LNX3nnMCbQ31DYy%2Fp9GOg6IaHJjyaLOsOvy4rxO0TQscCl4k%2F%2BBRTX3o1sQIKeCKoNR9TSpJkglSXqjgAuThk4yXBMfllDN3vNNPDhHh8tnIF5O6gQanqmYYzZ%2BSPIbRaSr6U%2B6OzgjxfExeZg16%2FjJ2eX8381rDF9yS0kMcibTUUk9gKPldHK4J5GdY8TEEw1UCGH7%2BkK2jESjcR90TCmuPzbVepkj%2BYri3v0UL1pLjWupjxt3vmFiUVm%2B1fCDRPge7Y%2FP1jOhXPyQAl1h%2BmD6V54RHtza0q0birhAFGPtPmrg05gy28suzn0vUgPZShKYs8Whtoop4f7yDbmYiDb8VVEg9QATW0AUCSw6u%2Bc%2FMEB9Cp6A4CD2eXa4eJ5EZpdjKM3KtznKYFpM7nmpK8YXvE8I9KMJma88AGOqUB7LlRxLU3RuNNuaX7pT3xnfqASktYSkO%2B8QpGbSdi%2ByTIYB4jamg%2BoMi0AsdTjnor5njmG6TIOgRpWy6Ywz%2F9kVp446NsSHBTTzYiOhKAcSK%2FxbjH3jGtkA1WlymXAfyV%2BpOaTgNqfVX6lSzSex2txEXagUXaxGnqERc2%2BGUneWJPW13PvoWSzYLsiEA0VMhnrZ1YSWF91%2BMb%2BQW%2FxI45HOzcpDT%2F&X-Amz-Signature=6cd10bb2324b182b39d30a4dd8e5d4d88ecbb112af2a6efa05e3ee648de81613&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
