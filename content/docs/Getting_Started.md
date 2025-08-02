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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666S6U4AY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRaI6AiFRPKUIKYGHEC7BUGAvd12gzmOG2AHSZqxQc1AIgZCHsRAdYT1fxbOpsIT1aEk8MNGuVniTuFuI1VKC1Egwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAfZurVeCMbR2mpdwSrcA75RwQGvuqldGV3Oixnb80mNq53omNjBxLvE1rPNfKSt9Ak0C4xblBPFRObz9vrNLVgxtLT%2B06lTf91WtOzuQYPnGgVXowipI%2Bo%2Fu85byRb3AdaCdUgr5hJ2AS8nppYyF4A2IKFdq9993Utd1qvdE6NFfH0JDJg5vj2NHMgilO%2FQ3NCq3ps%2FC0GH5qbVqfcqEp3WDKY5mTXGevA6s8WzVuaS7LlrD8kK8rIyZ3SrYh4%2FHxXRf5e0xpyln1OnAsSQZKDqHrWCRkUejJE7XIsAp3FPLOAFYsDkhLQHGAmKHsfQeZ38IMRgoZf7XN3P%2BnA0wRPQ7oSk9Nnf%2BcSOOnM0B2rur2GS11y%2BLMBpS20s5COEkFSRZ9B9yDn6WUiiSHOrnHh%2FONFFTE%2BALKz4UNzhg8AM5%2FJ%2Bun%2Fb9XWdqBpjDJEbXqcPD%2FHDmMQZkF0vbQwO3z5rTWRru0xvnIMc64KdHjpM6odkU343v2maLoMvQcXFj%2BK0mZYtP1g0yJhEKXkOwpx5SZJueffJDjHrIGUier8M%2BD1Ysls3QwxO4nbIJdYbFgNADHJ0Du%2BkPZykVEcAuqwF2HxlgLh9vawaS2sx9y1wXbsr8VKqWnCwuzHwncz%2Fy4NyQCDdw47k1YQ3MOLvtsQGOqUBXvxj2uh7uz9uzyFreCWIlQmjkQ%2ByENxEdac5etSjMVwFU7Usa6a5xVhPcCDno8cKQEkka62exbKa0KR9pzB8nUGvJIx65ZvoF7kqaEP%2FtUe%2BWtwy3wBgxm1OtDpzGOQSxtIXPO%2B62VOMSPkpdg8s7Y%2Beps94WIezIxQoBObDv2NxIAN7VEmy7RWWtyssmD1Kts5LzC4BRDtvehRqUsG6csYR34v%2B&X-Amz-Signature=ee9bdfd1ab5e1c2236304319463585b70a4feeeea581368b643c29ff438ae7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666S6U4AY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRaI6AiFRPKUIKYGHEC7BUGAvd12gzmOG2AHSZqxQc1AIgZCHsRAdYT1fxbOpsIT1aEk8MNGuVniTuFuI1VKC1Egwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAfZurVeCMbR2mpdwSrcA75RwQGvuqldGV3Oixnb80mNq53omNjBxLvE1rPNfKSt9Ak0C4xblBPFRObz9vrNLVgxtLT%2B06lTf91WtOzuQYPnGgVXowipI%2Bo%2Fu85byRb3AdaCdUgr5hJ2AS8nppYyF4A2IKFdq9993Utd1qvdE6NFfH0JDJg5vj2NHMgilO%2FQ3NCq3ps%2FC0GH5qbVqfcqEp3WDKY5mTXGevA6s8WzVuaS7LlrD8kK8rIyZ3SrYh4%2FHxXRf5e0xpyln1OnAsSQZKDqHrWCRkUejJE7XIsAp3FPLOAFYsDkhLQHGAmKHsfQeZ38IMRgoZf7XN3P%2BnA0wRPQ7oSk9Nnf%2BcSOOnM0B2rur2GS11y%2BLMBpS20s5COEkFSRZ9B9yDn6WUiiSHOrnHh%2FONFFTE%2BALKz4UNzhg8AM5%2FJ%2Bun%2Fb9XWdqBpjDJEbXqcPD%2FHDmMQZkF0vbQwO3z5rTWRru0xvnIMc64KdHjpM6odkU343v2maLoMvQcXFj%2BK0mZYtP1g0yJhEKXkOwpx5SZJueffJDjHrIGUier8M%2BD1Ysls3QwxO4nbIJdYbFgNADHJ0Du%2BkPZykVEcAuqwF2HxlgLh9vawaS2sx9y1wXbsr8VKqWnCwuzHwncz%2Fy4NyQCDdw47k1YQ3MOLvtsQGOqUBXvxj2uh7uz9uzyFreCWIlQmjkQ%2ByENxEdac5etSjMVwFU7Usa6a5xVhPcCDno8cKQEkka62exbKa0KR9pzB8nUGvJIx65ZvoF7kqaEP%2FtUe%2BWtwy3wBgxm1OtDpzGOQSxtIXPO%2B62VOMSPkpdg8s7Y%2Beps94WIezIxQoBObDv2NxIAN7VEmy7RWWtyssmD1Kts5LzC4BRDtvehRqUsG6csYR34v%2B&X-Amz-Signature=6d3320c0a0fc80b203d8fb710784be3cdaf95d1012d49e3de92b5b668fe0d06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666S6U4AY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRaI6AiFRPKUIKYGHEC7BUGAvd12gzmOG2AHSZqxQc1AIgZCHsRAdYT1fxbOpsIT1aEk8MNGuVniTuFuI1VKC1Egwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAfZurVeCMbR2mpdwSrcA75RwQGvuqldGV3Oixnb80mNq53omNjBxLvE1rPNfKSt9Ak0C4xblBPFRObz9vrNLVgxtLT%2B06lTf91WtOzuQYPnGgVXowipI%2Bo%2Fu85byRb3AdaCdUgr5hJ2AS8nppYyF4A2IKFdq9993Utd1qvdE6NFfH0JDJg5vj2NHMgilO%2FQ3NCq3ps%2FC0GH5qbVqfcqEp3WDKY5mTXGevA6s8WzVuaS7LlrD8kK8rIyZ3SrYh4%2FHxXRf5e0xpyln1OnAsSQZKDqHrWCRkUejJE7XIsAp3FPLOAFYsDkhLQHGAmKHsfQeZ38IMRgoZf7XN3P%2BnA0wRPQ7oSk9Nnf%2BcSOOnM0B2rur2GS11y%2BLMBpS20s5COEkFSRZ9B9yDn6WUiiSHOrnHh%2FONFFTE%2BALKz4UNzhg8AM5%2FJ%2Bun%2Fb9XWdqBpjDJEbXqcPD%2FHDmMQZkF0vbQwO3z5rTWRru0xvnIMc64KdHjpM6odkU343v2maLoMvQcXFj%2BK0mZYtP1g0yJhEKXkOwpx5SZJueffJDjHrIGUier8M%2BD1Ysls3QwxO4nbIJdYbFgNADHJ0Du%2BkPZykVEcAuqwF2HxlgLh9vawaS2sx9y1wXbsr8VKqWnCwuzHwncz%2Fy4NyQCDdw47k1YQ3MOLvtsQGOqUBXvxj2uh7uz9uzyFreCWIlQmjkQ%2ByENxEdac5etSjMVwFU7Usa6a5xVhPcCDno8cKQEkka62exbKa0KR9pzB8nUGvJIx65ZvoF7kqaEP%2FtUe%2BWtwy3wBgxm1OtDpzGOQSxtIXPO%2B62VOMSPkpdg8s7Y%2Beps94WIezIxQoBObDv2NxIAN7VEmy7RWWtyssmD1Kts5LzC4BRDtvehRqUsG6csYR34v%2B&X-Amz-Signature=c1c4a421633e99a9f67323a4c3796446e18af55d323c237542877af725dea8ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MJPZYMK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDpBDL4W71tH26Y1OlVPLt0HZHZEK2fniZbfSkteFJhQIhAI9rjp7Ep31d69vOzqOGolpzUKoDogCs0Qt9wwHx7EYzKv8DCBAQABoMNjM3NDIzMTgzODA1IgwLeeHP1qZjVd07%2Byoq3AN2RV1mY%2B%2FfTJbcSsjex7XQ8i3gVztV0tR4Of1oQ8jw0fOOtVJllXHpPd2O6BOZ4CcpnraOi%2BF3%2FP2bqNQVXQIVh08%2Fcsj8qyl5TvNjAR2wUXB4HV6wQPl9GBnsCe2YJNExSTXW8PPGNenoA0jmoePiekmOjarbqUpEeeMCIvAWECmsl0oodYGgApm68ys6VI2cJJ8hMVhWLNKuM2mgQHO5LHKNdjBmsIkszcMVUfNyasWIjRoyM1srrvovl6nrXEXIwod5Mmp%2FipaYVvSafJ7XHC5e6Ko%2FJYimZmQ64yyguVL1IQgZdbi8ZhQnBls37oeypX5nzBYcaNl0phU%2F4bQVLKIqt70xRDnDRdjXgJz9pX63Dsml58XNZzsG%2FRC41Yd8gW36QO1jwtcBcPbzxDirxL9iX77kWow0Z9XWK5qVSu7YE6bTwpeF3k6Kh%2FveR0PsNeHjNSxUwYRA%2ByL8VDK%2FxZjgmTXwsSZT61epK9WtpryCmVrm6qzBjTKDZd6ZCd6Tkn7WGy7bFL6MGABhhvCEPFmVUKskmRAadnOYCpIscbKXrdj9e%2FXjVkARxZplArQMksQADNd8wZoSuqeRJllLJHDXi7ljuD5bgcS1qADnIElkXXkkkQIqK4%2FMOzDq77bEBjqkAeWdWyG128DbyX83JD8yjLdhcjW6vfXFmn2kzxZ%2FNG2RnZUDDsplIgAFPrfUD9Zux8hlTKwamE65YkefuIPJY8AqrRF9SHaMh0yUD8fEJymmXLAIoc4RmJdPWNpFfDmwVht%2BZBZ2RiO7TborCwSmxDE0RD7lidxIpUUcGx0yxau%2FEjm10bGOP%2BYAqFjL2DGuzz0%2BCtLtsDVVnBkKmVJ8WZI90u1w&X-Amz-Signature=7ed062b71e466a606b32a75da6128a934e272af3cabc0ff8884f7e58f0536faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNWTYNAF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMn8Oa%2FMA4geMUO2GpklyA7oblCBMH2AB0kvqKAfXKBgIgLLIsMbB4NMol7E5GIRO1K59sbfayTG6vSARWi1ADbGwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDM082Ee9Db87zxCniircA7rkiMCKGErxf8N78ePmGnr8vu9jsxC%2BfIXk20N%2FhdmmdSnwmMu3NsIYF6xt%2Fdy2Ds%2FGaBGYu0aTXADz7eg%2FmSaMluYPgZgQBTK1sW0%2FGIL7VrCsmFrbPciQiPShHnkLlxs%2FBpSt27uTl6WtpE56BLBYv8MpuUOA69EERI93ga51oFxjQaEOFawi9nq%2ByGjYq7Xf6qwwGcw9kSd9UsXKKTYgffxyWLjOIR0ubgF5Rrgrii4jXvHFCz5rApNiVt4A5On3SaqM%2F%2BbVrZ14IF3UPympt%2FgGS3v%2FctfH1RY7eBc0zvVHquT%2Fm2Mn4G1CKMLtfjT0YSiH290Cmg%2BGB8HdanKsrJZpv4Nn%2BjPwA%2BWlddqrjZfwOe%2Bf2sYVsEGZuIXgfBKZjjFV8X%2FfAeY851cKs3Ng28Z9KVozkHXhds%2BRox8%2FNXKt3JpcQXGxuO5hTEW6kIbUdiT%2F0uuWWvrtxTOhGVGnvba%2FxB0DX3PtIwng1O8NXKM2Tb%2BJkIgOBUYklJSLehV%2FOZD7JfCp3ORwjxp%2Bc7phcIKwzI8wOQ5pmncf3yQ%2F4nT%2F3EjlbTVRancktpDImMEBcn18BuOezUaGhFdcNfTzp2VTQQpGMB7ykcUqG7VO5A1ZOWeijsOxXfjWMIXwtsQGOqUBGnCBfdnziFSbIF3OqeMbOu7hXvuyabF4Vk061YG8DPMhpGtmm28PNnHM5povK3n01nKRIlUgs7YbOM6%2B95bh2kKkmzZZwRjDYzkOiF21LWBXiAF1Dk33oFGDMU5kCy0bEdtqeM5kCfrwPnzh4WFPMcfN%2FWyJIK0IVSGtHcvwGOB4zJEA%2BJJmwTis0SJhKgCcloqb3dWDxXO3qEbFXj12sliYNnQ%2B&X-Amz-Signature=a403b7fbec844f0fa52932b9ee81ae63c626dc9f81f010fe3656dc09c215ab5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666S6U4AY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRaI6AiFRPKUIKYGHEC7BUGAvd12gzmOG2AHSZqxQc1AIgZCHsRAdYT1fxbOpsIT1aEk8MNGuVniTuFuI1VKC1Egwq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAfZurVeCMbR2mpdwSrcA75RwQGvuqldGV3Oixnb80mNq53omNjBxLvE1rPNfKSt9Ak0C4xblBPFRObz9vrNLVgxtLT%2B06lTf91WtOzuQYPnGgVXowipI%2Bo%2Fu85byRb3AdaCdUgr5hJ2AS8nppYyF4A2IKFdq9993Utd1qvdE6NFfH0JDJg5vj2NHMgilO%2FQ3NCq3ps%2FC0GH5qbVqfcqEp3WDKY5mTXGevA6s8WzVuaS7LlrD8kK8rIyZ3SrYh4%2FHxXRf5e0xpyln1OnAsSQZKDqHrWCRkUejJE7XIsAp3FPLOAFYsDkhLQHGAmKHsfQeZ38IMRgoZf7XN3P%2BnA0wRPQ7oSk9Nnf%2BcSOOnM0B2rur2GS11y%2BLMBpS20s5COEkFSRZ9B9yDn6WUiiSHOrnHh%2FONFFTE%2BALKz4UNzhg8AM5%2FJ%2Bun%2Fb9XWdqBpjDJEbXqcPD%2FHDmMQZkF0vbQwO3z5rTWRru0xvnIMc64KdHjpM6odkU343v2maLoMvQcXFj%2BK0mZYtP1g0yJhEKXkOwpx5SZJueffJDjHrIGUier8M%2BD1Ysls3QwxO4nbIJdYbFgNADHJ0Du%2BkPZykVEcAuqwF2HxlgLh9vawaS2sx9y1wXbsr8VKqWnCwuzHwncz%2Fy4NyQCDdw47k1YQ3MOLvtsQGOqUBXvxj2uh7uz9uzyFreCWIlQmjkQ%2ByENxEdac5etSjMVwFU7Usa6a5xVhPcCDno8cKQEkka62exbKa0KR9pzB8nUGvJIx65ZvoF7kqaEP%2FtUe%2BWtwy3wBgxm1OtDpzGOQSxtIXPO%2B62VOMSPkpdg8s7Y%2Beps94WIezIxQoBObDv2NxIAN7VEmy7RWWtyssmD1Kts5LzC4BRDtvehRqUsG6csYR34v%2B&X-Amz-Signature=1b393975276a0511a9d8631293c55e3aa03ca7fcdaf6c5cb239fcf0c6add05e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
