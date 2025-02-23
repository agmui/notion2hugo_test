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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVD246Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8Qmv6GDxgnR6RKpMXlTeiApOQHBZC4DETl%2FFvTedfMAiBnVRa2x8TRwG9167Jb9qiZDfp7T0h%2BULuPQ6Rd5KNVXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5il%2FCWpgXPjwgx2BKtwD9FT1s2gnI2hgT9aQBaC2RKj7%2FryI3htIqILK7ZUfJTTrev0VGZR5Zex07ExwN2DOFMrewaSHF2SoGSCsjuNilYYTKkabbXeja6o214UF1sOODcDlz55eeGqNf6QoBuCkRywhRvk8xBv4hQEbXP8KpUgkc0SabOxIz25%2FVk2UEu2FvC1glxzKEROATNyuVi2Fxns5Rgw5amP6h22ZjSqSoKzSytCxVuwXZBdPygPB75c%2FmweQknNEi6wKtmCI10XdWq3PBZh%2F2OwLIBX1IiPRIAkGYb0rjrDKqQIYz08Jk%2F1W66WQXtO2vPFLmr4Fd8PpGIX2PUAz0u0dW2seF62eqEa%2Be6OA2u59MiTd7PVqSaMx4SrSQ%2F4FkRKPmF6ZCbX4gLtHGhhUfXxFCs6mKb2oauzQYyjjr5KJtjsWTgGE5aAjvkTz4l0YQN4Inhbn9Q4bXrB35u81zbJDL6bIL%2FinbhplIdnD9vWOpfBETxI%2BJ0ZjnLUO40cdgE8sVpepWtcXp936H1ZNJvwWWdnjnfKfKrCeBSkHAToUAzdPF3aoogh8AQV4%2Fv5Vv9aNpcC%2B02w6JyuWnuVs89QzLWOEzR67BdRZcz5ty%2F%2FtHoJsNaSrzSqXePxPgUmnfLFptfswgdfpvQY6pgFqXeh4WTmnEFyNDFvNZTbCKT6P%2F0tsazKpXq81mMhJaXHicRHrpHY9BOBMVIXkzmLkYY8fkziuhJ338ldZPy1vXvM5HCThyVhn%2BraMrnqWDkEr2JskGYuAl%2BUFbMxNV4vUVhiHDZKNo%2BlzvuxT3Oumn2fZz1uocGArnrjUgmBzhRW9I5BFNZUvW6nWpot64pcESh4waY59klCL%2BFwtT3K4qjnotVyC&X-Amz-Signature=67be9ddbc35eddc047137744956d658267ad7e4cb8b1f70795f3a39769a27966&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVD246Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8Qmv6GDxgnR6RKpMXlTeiApOQHBZC4DETl%2FFvTedfMAiBnVRa2x8TRwG9167Jb9qiZDfp7T0h%2BULuPQ6Rd5KNVXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5il%2FCWpgXPjwgx2BKtwD9FT1s2gnI2hgT9aQBaC2RKj7%2FryI3htIqILK7ZUfJTTrev0VGZR5Zex07ExwN2DOFMrewaSHF2SoGSCsjuNilYYTKkabbXeja6o214UF1sOODcDlz55eeGqNf6QoBuCkRywhRvk8xBv4hQEbXP8KpUgkc0SabOxIz25%2FVk2UEu2FvC1glxzKEROATNyuVi2Fxns5Rgw5amP6h22ZjSqSoKzSytCxVuwXZBdPygPB75c%2FmweQknNEi6wKtmCI10XdWq3PBZh%2F2OwLIBX1IiPRIAkGYb0rjrDKqQIYz08Jk%2F1W66WQXtO2vPFLmr4Fd8PpGIX2PUAz0u0dW2seF62eqEa%2Be6OA2u59MiTd7PVqSaMx4SrSQ%2F4FkRKPmF6ZCbX4gLtHGhhUfXxFCs6mKb2oauzQYyjjr5KJtjsWTgGE5aAjvkTz4l0YQN4Inhbn9Q4bXrB35u81zbJDL6bIL%2FinbhplIdnD9vWOpfBETxI%2BJ0ZjnLUO40cdgE8sVpepWtcXp936H1ZNJvwWWdnjnfKfKrCeBSkHAToUAzdPF3aoogh8AQV4%2Fv5Vv9aNpcC%2B02w6JyuWnuVs89QzLWOEzR67BdRZcz5ty%2F%2FtHoJsNaSrzSqXePxPgUmnfLFptfswgdfpvQY6pgFqXeh4WTmnEFyNDFvNZTbCKT6P%2F0tsazKpXq81mMhJaXHicRHrpHY9BOBMVIXkzmLkYY8fkziuhJ338ldZPy1vXvM5HCThyVhn%2BraMrnqWDkEr2JskGYuAl%2BUFbMxNV4vUVhiHDZKNo%2BlzvuxT3Oumn2fZz1uocGArnrjUgmBzhRW9I5BFNZUvW6nWpot64pcESh4waY59klCL%2BFwtT3K4qjnotVyC&X-Amz-Signature=dff7abae6d5862134e13bce433612455388de12af5e82e2e72cf6b7aca3e997b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK3QRK6W%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd5A0lcRpvjCq9tOCqPVZ4P4t1HXwaZHgdM4xe1R%2FK1wIhAO7bzjQ9deV%2BWp5UAcoDqt%2FqwcJGerRPlZuHMOzKF9AwKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8DFUruR%2BHFQSApQUq3APJkI1htk0wJTOA0Ku1kK%2FNF8gG5uD8mjxFBXSPor1%2B9ObYMJdqt9pSq9xzcsYgU3T8KyZ2Sf3NRkNNk5yIumhqNlMH8tjzFP9iBpY%2FsWbQRbSH5nqsJEfrKns%2BKprvFuTWBkAS2RCIEraPheucz1KAWIBV%2Fpw34WGpqNbNzA1T22gXwM7epIMdUW2nY1WdbA6QdHKF2Yfozk0Dwtl7%2BNykl9KfDVEJENoZ%2FvJe9O%2BfT63GMO%2B1OWoc5%2BJ72ZfMuV4NFS19KDuA8vBRLuRrVR2vbMn53yJ8lzqxOWt63HjzKZP2XVxMswtWcEmXdDTwd6KGlQ78LJAQ0YPJ6AEXPWHO1K7hyyRD99uFL6w249IFjO7pfekfq5a%2FBVaHa2wHLLdJXYCZj7gz%2FphJcJjH2weBEGdL85sEEx0Hvy5YdMQBeP%2FPMrj1pSq3sfZZ8K5Sv576wEauSL7FyYzBDcrF7sa1z%2FFuEsZASHRZGFa55IzcetBi6%2Flmc1kDJ1wC8fPI%2B98dZZQyQlLCWOTYUnkuKPBeq7X0lVkaDz9BaQP88%2Bj5vlUclrNYLwSBbUywCYM7Ae0VdnOCc2scGLzyinGQpdggOtII6JQZgx%2BnkX%2B8Qd%2F%2BWmwBY7OHRL%2BeLuHBKjDfo%2Bm9BjqkAYLBfV0d8j%2B8fJNIOruztX3R%2Ff3gWQdCMAnBIE%2FHRz59v8%2FLANeJyzgYjxYr8POxgYDDJhf6vlKQvLC%2FHba6ebLSZRUaFVi0vEGlmNh93bvNd3g0uDuV43gMrs7%2F6h2oIeGFYiQ6Cbl4bZ72ODz%2F1rvZb%2FQQQk2EvpuibubbKeijJcLKUTvHGVdLsSXiZ%2FIpxD5GK4vYY7w0XjNveqz21MewIs4h&X-Amz-Signature=f673457a4ab691c317b4f5bf56fccb1d6570da187949da2cbf6e6442008f7265&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTEHOLU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf4eZNZhi9Twhq%2B0UF76A9WPGkNoW2SmBHbqyiIe3XXgIhAJpiJbv5taEXiOQru2UrpT3K615f2A1G5zEMlEoXRzPBKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOE0wr%2Fh6%2FK9gSCxUq3AMCOcuXSWCQ0tVPYerpza4b7dUV5fkXAU2k7jZfRLqTrZwKZ5iGEsk1m2wAnscA3FFMNI7dYlo7SEtzwAlItCkwmSgkYtK5z76sl8D%2Fz5WW3qDyIhVJQxBdZck0R26tLZ06UgsQCfzKJ5vHt5SYFAsK1%2FdZ6UCT7XKegY3gKkN%2F2RZRpdqKuVunrVh%2FK18EdqGilFObDtoFhGsj4OwJJnlSh8t8H2LLxQqz0CqJgjPGeyEN%2FncrG%2F2XzZT5d3Ae2sUqIyRLij9Mh0OUngFiqX5wzHwPMfewBaL4hOQgknTZBRHARfryhWCG2Sj5c2J7jDWt%2Bbw6WL2Avw4%2B3LHT2SQICPWZNTxRGidjx8UxcDFv4SWkNuH6p1bs97M2rLyqqN2ApeJvRqI1nU47RU5EbZpcdnLozscuw6ERb0SBHfwyRWdXGmZs%2BcHlFVComA3RVzbg44SpXfBh5PVdPiooRDb%2BRmkWrUUCVBSs2fnl92PsZIDMglmxmZ6PtmGh6horC9QnLP5jfOFHuUkK5%2FP5HHcHTq02h5ZOKZoRKRjKwjhg3cDBsiZnnUK52MgYghFkdMVZ4d7AExUKTtEQL%2BaEMH1aiSkkrqZpTJqSXPaKWBa75OTMUm9olPgrGj2OrjCIpem9BjqkAd%2FNfMLjtyU8AxYz2t5FFKsXERYTBE7YBVhe749wy%2BHn3%2FbbSv5bqFuF5u9cMfTlBldqPOIqy4yJSTRK2ZqsgRZ4PiYDPDBeEvWNv%2FJUiBJjY1T042F2NjFZifqESlicc2brMF4Mr3sdoznEEzEm0XUEnV9RWUtgz4XTKRGHqLaqU6P5iDMPlsqU%2FKxniCa9fXncJqK0YAV4bCf7BlAN0trUqwMl&X-Amz-Signature=8c23d6c1f35387b7a97c32d1cd583d4d9658887f5bd134874cb6b43976ef0f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHVD246Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8Qmv6GDxgnR6RKpMXlTeiApOQHBZC4DETl%2FFvTedfMAiBnVRa2x8TRwG9167Jb9qiZDfp7T0h%2BULuPQ6Rd5KNVXiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5il%2FCWpgXPjwgx2BKtwD9FT1s2gnI2hgT9aQBaC2RKj7%2FryI3htIqILK7ZUfJTTrev0VGZR5Zex07ExwN2DOFMrewaSHF2SoGSCsjuNilYYTKkabbXeja6o214UF1sOODcDlz55eeGqNf6QoBuCkRywhRvk8xBv4hQEbXP8KpUgkc0SabOxIz25%2FVk2UEu2FvC1glxzKEROATNyuVi2Fxns5Rgw5amP6h22ZjSqSoKzSytCxVuwXZBdPygPB75c%2FmweQknNEi6wKtmCI10XdWq3PBZh%2F2OwLIBX1IiPRIAkGYb0rjrDKqQIYz08Jk%2F1W66WQXtO2vPFLmr4Fd8PpGIX2PUAz0u0dW2seF62eqEa%2Be6OA2u59MiTd7PVqSaMx4SrSQ%2F4FkRKPmF6ZCbX4gLtHGhhUfXxFCs6mKb2oauzQYyjjr5KJtjsWTgGE5aAjvkTz4l0YQN4Inhbn9Q4bXrB35u81zbJDL6bIL%2FinbhplIdnD9vWOpfBETxI%2BJ0ZjnLUO40cdgE8sVpepWtcXp936H1ZNJvwWWdnjnfKfKrCeBSkHAToUAzdPF3aoogh8AQV4%2Fv5Vv9aNpcC%2B02w6JyuWnuVs89QzLWOEzR67BdRZcz5ty%2F%2FtHoJsNaSrzSqXePxPgUmnfLFptfswgdfpvQY6pgFqXeh4WTmnEFyNDFvNZTbCKT6P%2F0tsazKpXq81mMhJaXHicRHrpHY9BOBMVIXkzmLkYY8fkziuhJ338ldZPy1vXvM5HCThyVhn%2BraMrnqWDkEr2JskGYuAl%2BUFbMxNV4vUVhiHDZKNo%2BlzvuxT3Oumn2fZz1uocGArnrjUgmBzhRW9I5BFNZUvW6nWpot64pcESh4waY59klCL%2BFwtT3K4qjnotVyC&X-Amz-Signature=7dde996b3576b6cc51d3151eef18ca50b63ce0ea21fc8225717ef13526cb3f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
