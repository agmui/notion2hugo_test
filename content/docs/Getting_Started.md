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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYLHANM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI%2FV8ft6jpSSC3m9tkKuMXP8Y7tx%2Bvx6hEF7VhjQ0C7AiEAg5RO7dU6CcLtAw%2BGZjzELUGOOGT9B0Oe6iVEQhdgEtoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWQGzqqBY5%2FgKb%2BiSrcA6ih6wyDZNj%2FK1mmZPUn46IQQHWHCv5dG1KdkE2YNFZ908VW5SeydzoyLwGjek%2F9AoID8D23XC6NkleycLWMHCL%2BeGX9l1Lf3fCubMueLLu%2B6ZENfwK54AYOyCkkg6XjNguIM2%2FvfQm5yGPML9cKi3qqFrURagXq4NlmQbq3iDsppN%2BxeS52e6frqAylVjaaOE9xIaHpLJ9WKZaSemwgqtDMt%2FGIzTRpfwaP80BllKsTzGwfT37CiMXIr9LZLJkd0IT8UklTUqvd%2FmtVnr9fVIWszJlk1f9hUF%2Fvhak5OyAEUqBBzvz7JY1CyygfVfzFvIuLeYDeimIHiRrTp4S7Q4j4j%2FdDkCuYDE6Y%2BpPKz2iOFzPBnX6BZ%2BuyiWPu%2BYJEsp6G%2F2Fm12WL5xK4JcvE2f3V52mrnhUDbVJB0HJwhpfgYrRcrrdmjlSiD%2BvMr54ZWBPSZTLQ0vGQM1y0rSE5ORBdTSsspLY4zW%2FZJctddMF9ZowR264sWROkp2ynl1tKcU%2FU5Wdsqf1UmnQchRLAoOr4vOJsXPdvzurW6U477FMCNcWxgVej65zzjfgv5vj9cuqbpvYG5yLEGn%2BFNw0uyo48TtlI7fW1CZI7ToW5I2bj%2FFB69ug71OKaWr6hMKqW48QGOqUBhygKlats%2F8MQDLbVD3MfLXedNzks9A9iiomR0OenshlKZhBpSVrYNg7M0HylC7NEZi1QNJbViWzSADapEsYMfCHqqk9CnT%2B8SWmgZWInY9D5kC4x7465rOc6WsBcBVo%2BwtJjtEowSV9HMckPPb1g1b9uif0xgxIxbxeUEE%2FdlKq0D8OjKRTcH6fes0M836aFf8DjrdnTXhPcRW0%2BgI0Izj1pQspN&X-Amz-Signature=c2a89c6fbbe039dad9f5c4dfcc6c264e23bc78170ddb3127d2804d46dfefb5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYLHANM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI%2FV8ft6jpSSC3m9tkKuMXP8Y7tx%2Bvx6hEF7VhjQ0C7AiEAg5RO7dU6CcLtAw%2BGZjzELUGOOGT9B0Oe6iVEQhdgEtoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWQGzqqBY5%2FgKb%2BiSrcA6ih6wyDZNj%2FK1mmZPUn46IQQHWHCv5dG1KdkE2YNFZ908VW5SeydzoyLwGjek%2F9AoID8D23XC6NkleycLWMHCL%2BeGX9l1Lf3fCubMueLLu%2B6ZENfwK54AYOyCkkg6XjNguIM2%2FvfQm5yGPML9cKi3qqFrURagXq4NlmQbq3iDsppN%2BxeS52e6frqAylVjaaOE9xIaHpLJ9WKZaSemwgqtDMt%2FGIzTRpfwaP80BllKsTzGwfT37CiMXIr9LZLJkd0IT8UklTUqvd%2FmtVnr9fVIWszJlk1f9hUF%2Fvhak5OyAEUqBBzvz7JY1CyygfVfzFvIuLeYDeimIHiRrTp4S7Q4j4j%2FdDkCuYDE6Y%2BpPKz2iOFzPBnX6BZ%2BuyiWPu%2BYJEsp6G%2F2Fm12WL5xK4JcvE2f3V52mrnhUDbVJB0HJwhpfgYrRcrrdmjlSiD%2BvMr54ZWBPSZTLQ0vGQM1y0rSE5ORBdTSsspLY4zW%2FZJctddMF9ZowR264sWROkp2ynl1tKcU%2FU5Wdsqf1UmnQchRLAoOr4vOJsXPdvzurW6U477FMCNcWxgVej65zzjfgv5vj9cuqbpvYG5yLEGn%2BFNw0uyo48TtlI7fW1CZI7ToW5I2bj%2FFB69ug71OKaWr6hMKqW48QGOqUBhygKlats%2F8MQDLbVD3MfLXedNzks9A9iiomR0OenshlKZhBpSVrYNg7M0HylC7NEZi1QNJbViWzSADapEsYMfCHqqk9CnT%2B8SWmgZWInY9D5kC4x7465rOc6WsBcBVo%2BwtJjtEowSV9HMckPPb1g1b9uif0xgxIxbxeUEE%2FdlKq0D8OjKRTcH6fes0M836aFf8DjrdnTXhPcRW0%2BgI0Izj1pQspN&X-Amz-Signature=cd5f7bc57e4786004c47d3fe9eb58d9c889dacac30f53df5b585c4fe876d019b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYLHANM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI%2FV8ft6jpSSC3m9tkKuMXP8Y7tx%2Bvx6hEF7VhjQ0C7AiEAg5RO7dU6CcLtAw%2BGZjzELUGOOGT9B0Oe6iVEQhdgEtoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWQGzqqBY5%2FgKb%2BiSrcA6ih6wyDZNj%2FK1mmZPUn46IQQHWHCv5dG1KdkE2YNFZ908VW5SeydzoyLwGjek%2F9AoID8D23XC6NkleycLWMHCL%2BeGX9l1Lf3fCubMueLLu%2B6ZENfwK54AYOyCkkg6XjNguIM2%2FvfQm5yGPML9cKi3qqFrURagXq4NlmQbq3iDsppN%2BxeS52e6frqAylVjaaOE9xIaHpLJ9WKZaSemwgqtDMt%2FGIzTRpfwaP80BllKsTzGwfT37CiMXIr9LZLJkd0IT8UklTUqvd%2FmtVnr9fVIWszJlk1f9hUF%2Fvhak5OyAEUqBBzvz7JY1CyygfVfzFvIuLeYDeimIHiRrTp4S7Q4j4j%2FdDkCuYDE6Y%2BpPKz2iOFzPBnX6BZ%2BuyiWPu%2BYJEsp6G%2F2Fm12WL5xK4JcvE2f3V52mrnhUDbVJB0HJwhpfgYrRcrrdmjlSiD%2BvMr54ZWBPSZTLQ0vGQM1y0rSE5ORBdTSsspLY4zW%2FZJctddMF9ZowR264sWROkp2ynl1tKcU%2FU5Wdsqf1UmnQchRLAoOr4vOJsXPdvzurW6U477FMCNcWxgVej65zzjfgv5vj9cuqbpvYG5yLEGn%2BFNw0uyo48TtlI7fW1CZI7ToW5I2bj%2FFB69ug71OKaWr6hMKqW48QGOqUBhygKlats%2F8MQDLbVD3MfLXedNzks9A9iiomR0OenshlKZhBpSVrYNg7M0HylC7NEZi1QNJbViWzSADapEsYMfCHqqk9CnT%2B8SWmgZWInY9D5kC4x7465rOc6WsBcBVo%2BwtJjtEowSV9HMckPPb1g1b9uif0xgxIxbxeUEE%2FdlKq0D8OjKRTcH6fes0M836aFf8DjrdnTXhPcRW0%2BgI0Izj1pQspN&X-Amz-Signature=c14173034b6aa6f254a4295db4b63fd9b07af0386a11d298a0f2e79bbdb65929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPT7J6EK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv4ccsH57mzr%2Fnh7%2FiAsenTKG6DDltNyYlFZ6UN9ksrAiEA9jL21vRRcpB31KzhWHNNJXwTKTlv1trOHcA2v19BM6gqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHuBB0cH922vAFVS0ircA9Ce4%2FAoBBw%2BOmfJJL8hcy0NLsvHqidI6SuIO1lw4IC60%2FrhSp2Oh9y413RPjHB3rlWDUxaK8H9aBMCY96yn%2BagGGy7%2FkLt%2BTqNPrH6MdZ5%2BDHABpUvlGC29vxgqWYcc3ud6BmthsgZCeOzZkYaj%2BZhzLqPRbxztl8hFCmN%2Fm0O0QyzJDK3oeH0lxm4UyK4f1A7N8ptlekxZesMmSsMqESgYlrbhpY6G5WGIRpixBgOknGGEqq1XRzNchw%2BNUCoOop3EMUBfHZ3pn%2Fbw1%2FOA5ZCOXzHIK%2Fo8lXwrhwLrigFxsjYEsOghJuqkw7rGis5RsH3VKptPKBPANYzzVvlGN9pXT51patIZknS92D7kbDuD0dI4etl946e5ZDwTn0A00OJZecUS4NdzJgh5Y26QJ9B9L7B3rifIwMWF7FwxsP6Cjwu62ZlVKHriTKEKUm87HO%2Bvyl7zolcQpb00noxT0V3buuuczof7LUp2wi%2FmARor67O8Ds0xTdD5L%2BP42MgwkJtrNt4y9rqsLi%2BBQdloqJ7N4zb0rKuGvvV2vcFQP8Fia1KQJx2Ago6Iis4TPG9P%2FLs0CdbcUWdRSx7O1riAHhHBoPVQ582KqHWj7OcXu8A53WsKGXQErKOnbzJJMK%2BV48QGOqUBI3jrSGnHjyK1YIwTEd3RlyzPNsGnBTH2Q%2F4s2fq0UxahdiI3Kci8tFcEonGkR2w%2Bh9W%2FzLhWg0DZEBeNUTcf%2Ft0uquoFB34oNc2q9ZTTJAyyBW40PsPYr6kgH7tlBDxPmxGNsAFCjtSWnfc2R9lfCn%2FqauaTorj9sgtxwWAzvOfJlWEXLGRz7XrYVnIuYiEykHSzFmrbSTjVV40HGKwOxzEjluqF&X-Amz-Signature=6cfc97e8b1ce17377cab99ede59ee66fc9fe45dbbdd3e3e8b3a7e96ed0abadda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4FXTPG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOL0OWwsLTNzxZ%2Fzfj45rP9ieE7JW6ZyH72SnY7m5bSAiBlfo%2BrVttmN1py1xr9AT5eyJGRi4mCl%2BzBXvR7MLHgvyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4AOTfH%2BlG8ZyREhbKtwDd3%2Bzk5ITikKtKIMePO3Mlg2EuAw09I8brYSRY5Tdy4QuXTeDOiDv4GYlaPL4i04QmiPZx7kaKPpSPFB2GNjWwpzeMX3PZ2jSCyCSO9rB6%2FrONNNyp8%2B6BSswFnCE8pq42ta%2Fk%2F1eL5pseFDVz6cxWBqd%2FD8gZW8CRqyLJ5U8TjDA4p2DWrAdz1636NZIVlpkZXGO9ZViUvU9UrQKWP0%2FWh8ArQPUFOVVWspM%2FZOCbNkz2VMIWICkW96l8pTGUNvjmiZHDfsUboOWFbedaFdfiwGjv7VSQ2rrVUEzYtQtZjwykZZun%2BCRWX8xlp3eqwz%2FNrQotTkj2R%2FUzAXgkMTnWvReb1JQRKUtBgqrZRLy8qHcMfkc79qBlc5CN9lCV%2FnE1x%2BCaP2yxNE10Sk0TeSA7C00U2luzF2oTqepp9333sas5z%2FXzmt8X7zoaaU2RF6d%2BhR3naVbljTJgQO5EFyMZItM0obRYdbcZ61cFrz96XwDrvVGuvrsdsEH1JhTI5MK96jV8s3sQkbsSN%2FjkK%2B6pGZSIJrmmQD8xhRqTNSnuFavalHaYZLtRc7RHs6JV0NpuvzjFrfBcLayI5E7bpOxlsvU6Qlx733UnJWVW%2BWwgGwQg4%2ByXUC3xw5SKAow7ZXjxAY6pgEjQE%2Bz2aQbtXe9qpRKWmJtQnqLQpZG%2BCF0aT%2FYTeVoHAMEWvx52UmkErubSXovteEDGgcqh0Z3LS97qug2beaxPkp%2FCcZSRRR3gS20bv45AMsqjkkU9r8lPfZQouHQtTbDXtPinIZJcR2P8UsUkfjd1efUzw2jP8fyPkvTrYh7bkCJ2ZA3metpGEzG%2B8ZRlDEJ8Aah3QSk16ZlAfbw3gHFqhuJDPWN&X-Amz-Signature=5723144c89689487f961c86c4b8fee28f7c3a19e98e5d0a480caff1a7156cfe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYLHANM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEI%2FV8ft6jpSSC3m9tkKuMXP8Y7tx%2Bvx6hEF7VhjQ0C7AiEAg5RO7dU6CcLtAw%2BGZjzELUGOOGT9B0Oe6iVEQhdgEtoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWQGzqqBY5%2FgKb%2BiSrcA6ih6wyDZNj%2FK1mmZPUn46IQQHWHCv5dG1KdkE2YNFZ908VW5SeydzoyLwGjek%2F9AoID8D23XC6NkleycLWMHCL%2BeGX9l1Lf3fCubMueLLu%2B6ZENfwK54AYOyCkkg6XjNguIM2%2FvfQm5yGPML9cKi3qqFrURagXq4NlmQbq3iDsppN%2BxeS52e6frqAylVjaaOE9xIaHpLJ9WKZaSemwgqtDMt%2FGIzTRpfwaP80BllKsTzGwfT37CiMXIr9LZLJkd0IT8UklTUqvd%2FmtVnr9fVIWszJlk1f9hUF%2Fvhak5OyAEUqBBzvz7JY1CyygfVfzFvIuLeYDeimIHiRrTp4S7Q4j4j%2FdDkCuYDE6Y%2BpPKz2iOFzPBnX6BZ%2BuyiWPu%2BYJEsp6G%2F2Fm12WL5xK4JcvE2f3V52mrnhUDbVJB0HJwhpfgYrRcrrdmjlSiD%2BvMr54ZWBPSZTLQ0vGQM1y0rSE5ORBdTSsspLY4zW%2FZJctddMF9ZowR264sWROkp2ynl1tKcU%2FU5Wdsqf1UmnQchRLAoOr4vOJsXPdvzurW6U477FMCNcWxgVej65zzjfgv5vj9cuqbpvYG5yLEGn%2BFNw0uyo48TtlI7fW1CZI7ToW5I2bj%2FFB69ug71OKaWr6hMKqW48QGOqUBhygKlats%2F8MQDLbVD3MfLXedNzks9A9iiomR0OenshlKZhBpSVrYNg7M0HylC7NEZi1QNJbViWzSADapEsYMfCHqqk9CnT%2B8SWmgZWInY9D5kC4x7465rOc6WsBcBVo%2BwtJjtEowSV9HMckPPb1g1b9uif0xgxIxbxeUEE%2FdlKq0D8OjKRTcH6fes0M836aFf8DjrdnTXhPcRW0%2BgI0Izj1pQspN&X-Amz-Signature=aea13b41abb35e94f143efa824d54d804d9d6ccb4a3b88dac9a989181f7b3240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
