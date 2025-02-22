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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BC4HD3X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwpnuE7uQnf%2BhEypiur3SFJr9GbxdytqhCqmKDn02mfAiAnx9KcLYDl%2FLgCKe1zuNgQQQsd0VmPbAu2xSK%2FIlELriqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfCwTYaNyHzbHkt%2BKtwDQbRnMISFD1Hg%2B5fuh8cXIRwLR9ZvjdGSXi9pyChrjprFdLD47cLeQubmTLrBcO1wzSZ0NLN%2BfNihBlEh08oF1tnUVPfjA3nHe3FrcI7vPcZJ7UnjNQVmKZGlKNTql8x1WJbDftqV4RgZdeMgIexyl2K6JSgLVBgLOBAu0Ax9f6XCDky3m%2BrKjJOpsx7y9fl07EU1vjfRIbiIiCNqM388ZyD8C%2BlrsDclq%2Fw3XibtzOuneoi2WfgovCo01geH6Wi9LKXQzKmDIagGh1xqQEwiB8yZx5Pu6rb%2FZ%2Ft5ij9uOY4fQyg6WxP%2FwIqsAulYhOJZXifB0aOXKiNLS3MGeVR4Fq%2FBnIrFtmLfD4D6WBfV35%2F5gqxgkO1RcAHqK7RUn7iEiW6USWeQdz3IFPOB8DLmVljiY35IOEfAfEe0Ts9RQN3VacGWiyEj0ufgrfVzS%2BAenMJykPfsGh7vxUveNJREcMkH2DZjEnu2nZLA2lrEaR50H7uJr1OeZ5ctxFPe1XUXAmFSuwJbQ2u4kXvAbrST1zuxg4dVl5TRVFR5lJyVpydFg3FyNRLw%2FRndozuXPSMvL3oIZp%2Fyq7oA18HQvRYnLjN3JNZdpK%2FND1VsdLa086gT52ZpmoibZznjnxIwpILovQY6pgEjN%2B4IQQx3kPXT2O19LF%2FwgSdltt6BLduoY5RtnXvx3RrGBdqdctZVvXLrzfIfYhF%2FvsI%2BK3lRyRLN6SazZoc%2FJ7UE2YVE18jgVJ6%2FNN1xH3JhyC04wV9dNKAKkVUptcTp6xa6quK07AyMm1dwFfkIBJFTZgQV3r2L17YVojFHu7si2w26FK%2FgqvxuvATUs3Oks%2FRMShyPQexu%2BtrNi7q5Z0thOgYp&X-Amz-Signature=f42c00d8f90b3ce98778545c7f140452a7421bb7290d1e3f29e1c75c491ef251&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BC4HD3X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwpnuE7uQnf%2BhEypiur3SFJr9GbxdytqhCqmKDn02mfAiAnx9KcLYDl%2FLgCKe1zuNgQQQsd0VmPbAu2xSK%2FIlELriqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfCwTYaNyHzbHkt%2BKtwDQbRnMISFD1Hg%2B5fuh8cXIRwLR9ZvjdGSXi9pyChrjprFdLD47cLeQubmTLrBcO1wzSZ0NLN%2BfNihBlEh08oF1tnUVPfjA3nHe3FrcI7vPcZJ7UnjNQVmKZGlKNTql8x1WJbDftqV4RgZdeMgIexyl2K6JSgLVBgLOBAu0Ax9f6XCDky3m%2BrKjJOpsx7y9fl07EU1vjfRIbiIiCNqM388ZyD8C%2BlrsDclq%2Fw3XibtzOuneoi2WfgovCo01geH6Wi9LKXQzKmDIagGh1xqQEwiB8yZx5Pu6rb%2FZ%2Ft5ij9uOY4fQyg6WxP%2FwIqsAulYhOJZXifB0aOXKiNLS3MGeVR4Fq%2FBnIrFtmLfD4D6WBfV35%2F5gqxgkO1RcAHqK7RUn7iEiW6USWeQdz3IFPOB8DLmVljiY35IOEfAfEe0Ts9RQN3VacGWiyEj0ufgrfVzS%2BAenMJykPfsGh7vxUveNJREcMkH2DZjEnu2nZLA2lrEaR50H7uJr1OeZ5ctxFPe1XUXAmFSuwJbQ2u4kXvAbrST1zuxg4dVl5TRVFR5lJyVpydFg3FyNRLw%2FRndozuXPSMvL3oIZp%2Fyq7oA18HQvRYnLjN3JNZdpK%2FND1VsdLa086gT52ZpmoibZznjnxIwpILovQY6pgEjN%2B4IQQx3kPXT2O19LF%2FwgSdltt6BLduoY5RtnXvx3RrGBdqdctZVvXLrzfIfYhF%2FvsI%2BK3lRyRLN6SazZoc%2FJ7UE2YVE18jgVJ6%2FNN1xH3JhyC04wV9dNKAKkVUptcTp6xa6quK07AyMm1dwFfkIBJFTZgQV3r2L17YVojFHu7si2w26FK%2FgqvxuvATUs3Oks%2FRMShyPQexu%2BtrNi7q5Z0thOgYp&X-Amz-Signature=027367e66ba4c3ecc4bb41c54691419380ada7452bc6de4c30efa987d665aab5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDGG3YG%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVLBrFQXtvYB4wNb0GlJm58nxvr3%2BGvpEjvzPXwAYcmQIhAOErD3aqnpFMCbCj5Ms%2B7VhXAp%2B%2B%2FuKhUnnqFG4hNpXhKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx34FS7uNzI9IladVUq3AN3%2FJaKB47uAtcnaprX4HZRmhfQGViZuT96BLN0qssw7BQTPkVPIUkM4aFO2HRlu%2FzGrwblKgEe0fGu8lHGc641DgPA7vv4ASNlEexqDkCTRmeyBOwdT1l6buHVR%2Fp%2Bnx8xmeX%2BjotrtjDf5d82bCw8imYt0GOA8F8x9HXf84i47U%2B7sDszpIuyQ2foPQycU6WuOtppacXUkd67lz8bTqky9zjWAb4Mwe6qANLA%2BrIvo8tf9RponrbvFEVQWQnvSUp6uB43c1G7Xfo1%2BHdL%2BRi4fUeSUfpX09DqCLXiXCkVGWRKZ4L925miWjhQv6QemARotw0vjlmD4RzmK50qso4pXcoYYlPljnbuNW%2F9ps2x4rIG3OaYhBbLZhYNpmcEoGbOhP%2BtlAvz5NXGLwanT2ZxVUHgmeWR6ZlpZixwB4C40bsJBFMKmAXyqhFuk4vtt61ZBk110sg0KvnnCmKNrQEGwET7VXaJ6M7LEUZRcYqh4%2FaQBfQZHW2NM1CTg83y0cYhslWf1Vstzf2AQrxEVVqv0SWjHiFJ8VUjdE6gqBOhbOeVZini0xNaQTRYTGXSI4exMLFLiwMH5XoAtDz2RKdLcQkvXoyysYWCy%2FHynMEreLlfgZJKWeV3AT%2FaoDD8hui9BjqkAXXfddAFIVTJzylqDgUi9VeHcJSuVb4v91eZJjmOZsGjBGzMcsBEyKp53frPA40tr5gr84ItfY9l4hlyKezHTrgGjhyjx3WJEJzTyWeYVN2nRKjVZWNVF2rlAksEEgkYqO0tRoTiyMHHGKByXdtCBL%2BBNN3pll1X6S%2FEUzmDllf6OIwE1CpD7AG9VATvso9dXZlcdQy9e0SO3h0rZJhAx2fvY1gf&X-Amz-Signature=4542386533d2a789813e2d52bfef611dee8022d384692fd83749660e42da07a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMS5ICF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRSanT3IbdQbYtK5R7KQIW5mCpMu9aHKup45YSrOucsAiEA3yLGn4e1i78%2FySKoaIdkTN%2FJHcgpLds9%2BKJdH0fekRoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCAWmLJTfXoJccCfyrcA%2FVBsL3lAMeX7qdaaZRqExPbfwuvEyh9e0DUPj1nkJkKTj4RN28tZE8IUyeLFrL%2BlnyLUs9%2FYyId0LoxoSlEhPR5riUFEJHNyLx9ffFoC2%2FnbHl6o3GPb3uSQnXVe%2F%2FjJSe%2BW%2Fqx2NdtDxExTiA4sHRqjUzpTTmEMblnH7edTNG9yAqHlTqmmklw8NllStLf2B%2BjdBQX6zEqD7eCYzOKcIX6epSccpPDCLs7DrHj4uuTd44ElvY614r5nsCktVCuzf%2B0%2B0AZ0eomt3P4UwvWyRHSMO%2BQecyW3BN%2FDyO5GXI%2FoUQYrtLqVfRaWGrYAhJvD5NykxHekGqJICmWiQgk6Loq9%2FKl9FYTh9jrW1QnmPOmlRfjQu%2BllfBMiVad%2FOKDweG9gtXwpjidJicEijVFSEZuYqMJISIrvF34jo0s6S6MUEQyPIEsAd0hvu70Iggyj4pIudlH07FJAo9P980yMXcAvmh69GMDZeVJKil9x03r%2B7kRNW3U1hfAPUkkyyjbxqqAhPnN74dgYpnRucEPri%2BxYy0%2B7TWiVAepmXEHIje3z%2FdVMLSSaFGEtw8XctkL7eAsEhMLAe%2FqSnkMyW0klspmH4EZegjH2IFIJYDFhoaGi%2FtSyQt8yT70iuDOMOL%2F570GOqUBWzpVmAq%2BFNvPk5ks5yioqYAGduoYl88ztIDWNJn%2BkKfLu4428Jm%2Fg3xsgfrcVBrWRNrIcH1hJIIh5QTtXaDGwPbr4odfLrF0DopvDa%2BRwr8Oshnk6CozY4VLWNPupe5IXyCHeSFn5GTodCPc2bl5Gvt0sD3VWCLQTR2FFTkpcvz%2F9ak3oi%2F2u70B%2F4%2Fv423MKcipTKgKFrjaVpBf4%2F5AXVO0Oa31&X-Amz-Signature=1b275d482dad6273e840e0f1a3323ed6e2a1103801b46274c6de576c35a0311e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BC4HD3X%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwpnuE7uQnf%2BhEypiur3SFJr9GbxdytqhCqmKDn02mfAiAnx9KcLYDl%2FLgCKe1zuNgQQQsd0VmPbAu2xSK%2FIlELriqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FfCwTYaNyHzbHkt%2BKtwDQbRnMISFD1Hg%2B5fuh8cXIRwLR9ZvjdGSXi9pyChrjprFdLD47cLeQubmTLrBcO1wzSZ0NLN%2BfNihBlEh08oF1tnUVPfjA3nHe3FrcI7vPcZJ7UnjNQVmKZGlKNTql8x1WJbDftqV4RgZdeMgIexyl2K6JSgLVBgLOBAu0Ax9f6XCDky3m%2BrKjJOpsx7y9fl07EU1vjfRIbiIiCNqM388ZyD8C%2BlrsDclq%2Fw3XibtzOuneoi2WfgovCo01geH6Wi9LKXQzKmDIagGh1xqQEwiB8yZx5Pu6rb%2FZ%2Ft5ij9uOY4fQyg6WxP%2FwIqsAulYhOJZXifB0aOXKiNLS3MGeVR4Fq%2FBnIrFtmLfD4D6WBfV35%2F5gqxgkO1RcAHqK7RUn7iEiW6USWeQdz3IFPOB8DLmVljiY35IOEfAfEe0Ts9RQN3VacGWiyEj0ufgrfVzS%2BAenMJykPfsGh7vxUveNJREcMkH2DZjEnu2nZLA2lrEaR50H7uJr1OeZ5ctxFPe1XUXAmFSuwJbQ2u4kXvAbrST1zuxg4dVl5TRVFR5lJyVpydFg3FyNRLw%2FRndozuXPSMvL3oIZp%2Fyq7oA18HQvRYnLjN3JNZdpK%2FND1VsdLa086gT52ZpmoibZznjnxIwpILovQY6pgEjN%2B4IQQx3kPXT2O19LF%2FwgSdltt6BLduoY5RtnXvx3RrGBdqdctZVvXLrzfIfYhF%2FvsI%2BK3lRyRLN6SazZoc%2FJ7UE2YVE18jgVJ6%2FNN1xH3JhyC04wV9dNKAKkVUptcTp6xa6quK07AyMm1dwFfkIBJFTZgQV3r2L17YVojFHu7si2w26FK%2FgqvxuvATUs3Oks%2FRMShyPQexu%2BtrNi7q5Z0thOgYp&X-Amz-Signature=f70e44e6e8ebaf580a8a89ae74484eeabe6a6a17c02bd771e5385a974d54a446&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
