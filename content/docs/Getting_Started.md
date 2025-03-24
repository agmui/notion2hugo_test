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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6EBJOT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEA4QpLTC%2FIk79vlSB5%2BXT2gTnP65YeugFWyxJLDEvHwIgE0DeGGHA9UwaEW1YQqWwSHSsJpqanIVCeLBH%2BluMLL0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQXdDdJkbs%2FShMguyrcA6XpTPf2AaEjTyQybLgTKn5jEzZvTCy%2FJRFaOnxfL0YHWRPs2ASGOM5EZ0dkeIyGNlPYUcuBUVCe%2FHk5em8Lz19v3joACMlg%2BCZqzYI0O4H%2B1wdRm0qj4EEnSOLAh%2BiHwvprB4C3uUbOuwbQLkePP9Z8kvYobZVm3GjhAu7iddDsRBUD2sKZ2ff%2Bri6xz8ZG91D2LHctUzWYHiSi%2FQGbSY4jDGSbqao%2Ffp%2BnGlGWi8YJniexP1ePci%2FhrFMfGpGt94MiyUNNEY2%2BS%2BuPeREN6JJqAbehtpgfhJsvAcbkKyx7XWAFXYnR1iazOr3pp%2BM%2BW0aaxWDRT9JSaI%2ByLEY9D3T4Yl71LmK5Sgrzz56UkEqdxWJGoQMrOB8AeeMqEhTCT02LT4QT5GBI7ZbJb%2BlflFW%2BRdXrvMgCSYCk8wEqfbOr9Oc9tS4PNY1%2FwkKpHBNSCD34kRriguHIuWthuKaFU2WWjilYkJ3OhjM%2FsR%2BHgbwGiJbrI0xilfzWknuHdFQWIRZXWp39L8%2FJ9F4iLYVsYe583nqsHuTj9Q6TqpXvAxinvZ7j23BpKgk3k5k0iXKkCaPoe4ChTS82xjAPaSc92CkeWmEp6fEbtqVD4%2BD5G%2FNzoS6aMlhbX0m5%2FXdMMPeRh78GOqUBeLJ2OczBJ3kV3K1FnC5ke1oASIaa48enozYKxgv2etx5TZH%2BobDESNPpjrxxwVPybTDZrJsPpohvHcYLQxmkQUDPI01F9Bun3PLoMfv69PNYLPKelBXjgCMCZU7PDzbddCm4QUkU70JkvM7U06qOmPAZKRF3AzGIpokfPSDnRMDVOD8s1ICMiFmQOcq8iRk%2BbC3n1vqufNTLMO8Jrv%2FsRayXgKQ4&X-Amz-Signature=dd3fa0b7b78a9077091052a7d55741d3d3da37e2ee9a2b78d87cc0d016a8f147&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6EBJOT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEA4QpLTC%2FIk79vlSB5%2BXT2gTnP65YeugFWyxJLDEvHwIgE0DeGGHA9UwaEW1YQqWwSHSsJpqanIVCeLBH%2BluMLL0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQXdDdJkbs%2FShMguyrcA6XpTPf2AaEjTyQybLgTKn5jEzZvTCy%2FJRFaOnxfL0YHWRPs2ASGOM5EZ0dkeIyGNlPYUcuBUVCe%2FHk5em8Lz19v3joACMlg%2BCZqzYI0O4H%2B1wdRm0qj4EEnSOLAh%2BiHwvprB4C3uUbOuwbQLkePP9Z8kvYobZVm3GjhAu7iddDsRBUD2sKZ2ff%2Bri6xz8ZG91D2LHctUzWYHiSi%2FQGbSY4jDGSbqao%2Ffp%2BnGlGWi8YJniexP1ePci%2FhrFMfGpGt94MiyUNNEY2%2BS%2BuPeREN6JJqAbehtpgfhJsvAcbkKyx7XWAFXYnR1iazOr3pp%2BM%2BW0aaxWDRT9JSaI%2ByLEY9D3T4Yl71LmK5Sgrzz56UkEqdxWJGoQMrOB8AeeMqEhTCT02LT4QT5GBI7ZbJb%2BlflFW%2BRdXrvMgCSYCk8wEqfbOr9Oc9tS4PNY1%2FwkKpHBNSCD34kRriguHIuWthuKaFU2WWjilYkJ3OhjM%2FsR%2BHgbwGiJbrI0xilfzWknuHdFQWIRZXWp39L8%2FJ9F4iLYVsYe583nqsHuTj9Q6TqpXvAxinvZ7j23BpKgk3k5k0iXKkCaPoe4ChTS82xjAPaSc92CkeWmEp6fEbtqVD4%2BD5G%2FNzoS6aMlhbX0m5%2FXdMMPeRh78GOqUBeLJ2OczBJ3kV3K1FnC5ke1oASIaa48enozYKxgv2etx5TZH%2BobDESNPpjrxxwVPybTDZrJsPpohvHcYLQxmkQUDPI01F9Bun3PLoMfv69PNYLPKelBXjgCMCZU7PDzbddCm4QUkU70JkvM7U06qOmPAZKRF3AzGIpokfPSDnRMDVOD8s1ICMiFmQOcq8iRk%2BbC3n1vqufNTLMO8Jrv%2FsRayXgKQ4&X-Amz-Signature=c1a3fa292fa07189c54cf8e36f134c9aaaf263f406b2a773d953d0006fa5de4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXY4HLK%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRBRKEOrFBe4UEIcsjcGj5gVIZtofUmLZ%2BQVFVtG6IlwIgWpb51ldQbR6X1rgb3ZKIS5MdQ4YUehzWlCvBRtlDyvUqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU1mol5YWby5o0i2yrcA8YGEG%2FcxEneS3Jk%2BZ5G4dWSC9WCdMURDcPD9m89cLr7YnPPMeVrHPUwHIazVfn7Ip%2F%2BkprlvL9uhSyyuqV1ioXDLh%2F3G05wkgUeV16YNxSXrD38fRzZ0Oq1N%2BlRQh8NzZ%2Bl%2FOM9uQLHutAkNN9Vte2%2FDkZHCgLYNuNwa5Td42hxIw9r%2BxYtTSbyE9m2BlR9Yg2sk%2Bua%2FgMj592nGq3n6GE6EPQ%2FkSff5SXPB%2B7QZcbj3bSwFyVE7KNxWfFK6NOtEf4ZH11OqfT00h7qU%2FQ5Qf%2F4YqCqfPUGSOe0gZa%2Bvcso0IOX%2Bm2YbjXLxHnRajuo9IQRh5VKacMiEA%2Bt2RPoHHaPqNM0AQ0UgHSGl8hY226hafI7UkPZQ0B%2BSXV2MPORRK4wjnzAw5nsGw9eo4vAchSsJzTrl0d2prNkPjxfogrJeImKyUGw8uh9OTbYZSxlo%2BfTomcCtmjTkBw4A%2Fw2pj%2BZ%2FitYuWpktz%2F9G3McMwqh79%2F6DzWoXrQpzy4L6q46QyELHc9vr7I1xAAAbDJH5tkSqdirNU0Pjk7xBNPpb9o7lRHU5n0zzHOFD9HOc0Ha9K4EvwZ6Fiat6WjXm%2BAkC4%2BNAtInoKdL4bnOUQlVpsbGvoeiyfPrVyQiAVCKMKeSh78GOqUBWgg9T2yVHfPqiTcsfmbevWOXakb8JNTL0%2BnYzUTEorgPqhFJkXXjhS5IUaj%2FF5fkhg1Sqr4GGQBx%2FkyP0SIQcWPoZF%2BFMwqf58BWL6n2dcRZIIChs3kECW%2FqB1rVLdRjHYoFI9HZ6%2F%2BXf%2BS7RXjlGNNTn2VCqFw2r2n7x8cWeItMiPCveTNgTU0Jb6uGJd%2FJeRz3NR5PVlf91bZpcMkguiaU7Y1Z&X-Amz-Signature=fdbebd8266e6eea92811a9a636c5d0f839f49941a58d0f7bb3b4803f516b3038&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BP25SQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyMlgrz9FJHGlREWx%2F3Z7x0tBC8PO7iU0nWtnWpntjNQIhALh%2FfAMMiHMZ3xQ0pjQQMNKvbyvyMX9o1Y0ajZksdVfYKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFDyfrE2G4ECExXuIq3AMJFsJ8N1XracQ7sB1ipneLcWGlHCoMo3%2Fh3tshwNS4KAzutKYUi6SugckemHTDy3DBr13x0VwZdBd7bn6jH8zacEhyT5iQBC4qbEhuwsVwypZI46aKoPxzmvMC4GAk2XDcPDMaOxeKvH42S7MvapC14hXuuaQWXW7Ypi00qmQYESpQcNMmLPcl%2F%2B5%2BH%2BnyYQUrJ2kaMmyt1ZZ2NL6%2Fj0YSbnEeXm1eExgGlfsy82nCEDvRR4ic3kAlzT7qvbm%2BOXHNzbcLoRM4MpbTJJrnR6PfODL5WxhSF%2F3FZNKaMaYvhGGMr47vX8XdWiQZZ4fOPKbg73fdskPulpnEANxcg2kYkpdUT%2BRHnqqsgaObjwzz1RZQikR%2BhmmNnAJcJ1%2BQW2K6OygPBEapdxFhj3WOaJ%2F0JN10G12txxCw2vw%2FUWPTvsxvveHfAFFQccLYHZ9j%2BPJGZDEEs2TogdoYGYJfQzP%2BV2%2B%2FhG%2F4uxphTwjyOo5HajJK1ktco9lFXtT%2FnEV0pp6%2FoYuZUA%2Fwn1YtwQ8gyvye90pmnlE%2FwS%2FLYnz%2BLFkCo8gtXcd2lpB2IBbjG5KxezeYwYLHUu0zBmCPBmrQo6R7xMWn4sl01%2B4FuHaiilJQnN%2BJdk7NS%2BQBl2CWUzC5koe%2FBjqkAZJ%2F6ls64D%2FOKn4Uq9AXv1l%2FBawtN0E5H42lO8Y7p3yd9k8EQExgNs5toOPsUaZeD4hmt8%2Ft6Tveha7w7gEsMcM3Y56rcPvpCuN23urbT3mL7kv3fwLpN5D37zm1gmge27jQAHDmnFc4oi0aqVkhraQqIQPZ3Jw%2BCmZd2yMluuya%2FTGM7hWqlizXG65mcb4cYVtFnyOaDhtq0M1nvKQJ7jRVVAGa&X-Amz-Signature=ee294fbeb65ef5645fe406cec0a55f5257189e8840328b4a8dcc8c0de25aa2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6EBJOT%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEA4QpLTC%2FIk79vlSB5%2BXT2gTnP65YeugFWyxJLDEvHwIgE0DeGGHA9UwaEW1YQqWwSHSsJpqanIVCeLBH%2BluMLL0qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQXdDdJkbs%2FShMguyrcA6XpTPf2AaEjTyQybLgTKn5jEzZvTCy%2FJRFaOnxfL0YHWRPs2ASGOM5EZ0dkeIyGNlPYUcuBUVCe%2FHk5em8Lz19v3joACMlg%2BCZqzYI0O4H%2B1wdRm0qj4EEnSOLAh%2BiHwvprB4C3uUbOuwbQLkePP9Z8kvYobZVm3GjhAu7iddDsRBUD2sKZ2ff%2Bri6xz8ZG91D2LHctUzWYHiSi%2FQGbSY4jDGSbqao%2Ffp%2BnGlGWi8YJniexP1ePci%2FhrFMfGpGt94MiyUNNEY2%2BS%2BuPeREN6JJqAbehtpgfhJsvAcbkKyx7XWAFXYnR1iazOr3pp%2BM%2BW0aaxWDRT9JSaI%2ByLEY9D3T4Yl71LmK5Sgrzz56UkEqdxWJGoQMrOB8AeeMqEhTCT02LT4QT5GBI7ZbJb%2BlflFW%2BRdXrvMgCSYCk8wEqfbOr9Oc9tS4PNY1%2FwkKpHBNSCD34kRriguHIuWthuKaFU2WWjilYkJ3OhjM%2FsR%2BHgbwGiJbrI0xilfzWknuHdFQWIRZXWp39L8%2FJ9F4iLYVsYe583nqsHuTj9Q6TqpXvAxinvZ7j23BpKgk3k5k0iXKkCaPoe4ChTS82xjAPaSc92CkeWmEp6fEbtqVD4%2BD5G%2FNzoS6aMlhbX0m5%2FXdMMPeRh78GOqUBeLJ2OczBJ3kV3K1FnC5ke1oASIaa48enozYKxgv2etx5TZH%2BobDESNPpjrxxwVPybTDZrJsPpohvHcYLQxmkQUDPI01F9Bun3PLoMfv69PNYLPKelBXjgCMCZU7PDzbddCm4QUkU70JkvM7U06qOmPAZKRF3AzGIpokfPSDnRMDVOD8s1ICMiFmQOcq8iRk%2BbC3n1vqufNTLMO8Jrv%2FsRayXgKQ4&X-Amz-Signature=260c0d92a3eff8e3267d38a1b8d8590e1354ff8aa66eb7f096781dcc0e73992b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
