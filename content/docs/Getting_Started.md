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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUY5ICZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BPx6W85f7IqoRexzOAlo91FFjiIccUNkkTfD3G1KUgIgWYYynsgnyrOwK3UPj1PSMy31Wn8uYGCdOe77VDingtoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2Bno6P44DXu%2F13vSrcA%2FZr3xXFC%2F9tNKTSLQrvl1yT1bvPYd6vNwnBmYFDpM2qAQeifx%2Bm2h2UOUEd6zS%2BmKAfQv414oUqz%2FhYtV2gsiV6mkNgj3KdD5oVMS06srllCOwqOsXF08C1oUruKqU4IhLKqBFOzEmlxKeYLIcrPUNa6YY2u1Ea%2BycsCN4JsXcnn1nrHcqwLSzrKd1szrgGYxmThqVwtlvaqpW6ASEgLcxD6w%2BW6ioN5F93mxgVtVFdzowaN1PJmCw7Ur%2BXWmAS2e%2B7kwnQR1y1xiTfQ%2FAkTwxF0mHQ%2B2XmODLdIngobnsz2%2BxLe1yYhzZXLQ%2F%2FsK4syLU7lgIs%2FYlqjNx1t%2FhxUxLVFCvUpHUL12fWsSxXNkyMXnET7q3ozL%2FXASAQqTFKdZZKmsGQ%2FYZ66vgOb%2BCyd2exnYqmVA0eLyzW8Vr8kGu07f%2BdxL6L8JbUa93nbr4GvI5wliEX1QT2mAnOUHZVxkLbYxspes4Jmw63OJrrSy69ZBlcrosbs8Fs0pFQzzT5Hz%2Fw%2FmyFm6sceR7jm5TQvB%2BUpwk1bblV7oy%2FCb2L%2Fmtxx5v305T2s3II%2FKZl6sxBquk31YmBZnU9%2BjkB0Ax7%2Fgo7AdCV2Sw3aoDRXK8eHjb8hm%2BJmBs3TjBcgpFTMMvwh78GOqUBlAP%2FDnXQSu%2BHWR67LkcqaPzYn0x96CN4prALLmwSpB%2F%2FDPJiEa8X6buyi2oG6dQyrJDh790Gv0wgTirIb0qXtlFSpdVzr4Zzb%2FJ9k%2BMliNHchLNOLRdyqZi4HugQUDgqUEU4MlTwnEMjXbYPZfXjIIXwHISmiA6vvQfR2dG8B3KQUPhYruQLOR94%2B1kO8PgJXjwkv4EmRKRLAJaLlYyWYe8i7Bga&X-Amz-Signature=5a189ca05bfadeb678eac7cb368d171b8a15b75350ff34bdfdbc5551c5814097&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUY5ICZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BPx6W85f7IqoRexzOAlo91FFjiIccUNkkTfD3G1KUgIgWYYynsgnyrOwK3UPj1PSMy31Wn8uYGCdOe77VDingtoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2Bno6P44DXu%2F13vSrcA%2FZr3xXFC%2F9tNKTSLQrvl1yT1bvPYd6vNwnBmYFDpM2qAQeifx%2Bm2h2UOUEd6zS%2BmKAfQv414oUqz%2FhYtV2gsiV6mkNgj3KdD5oVMS06srllCOwqOsXF08C1oUruKqU4IhLKqBFOzEmlxKeYLIcrPUNa6YY2u1Ea%2BycsCN4JsXcnn1nrHcqwLSzrKd1szrgGYxmThqVwtlvaqpW6ASEgLcxD6w%2BW6ioN5F93mxgVtVFdzowaN1PJmCw7Ur%2BXWmAS2e%2B7kwnQR1y1xiTfQ%2FAkTwxF0mHQ%2B2XmODLdIngobnsz2%2BxLe1yYhzZXLQ%2F%2FsK4syLU7lgIs%2FYlqjNx1t%2FhxUxLVFCvUpHUL12fWsSxXNkyMXnET7q3ozL%2FXASAQqTFKdZZKmsGQ%2FYZ66vgOb%2BCyd2exnYqmVA0eLyzW8Vr8kGu07f%2BdxL6L8JbUa93nbr4GvI5wliEX1QT2mAnOUHZVxkLbYxspes4Jmw63OJrrSy69ZBlcrosbs8Fs0pFQzzT5Hz%2Fw%2FmyFm6sceR7jm5TQvB%2BUpwk1bblV7oy%2FCb2L%2Fmtxx5v305T2s3II%2FKZl6sxBquk31YmBZnU9%2BjkB0Ax7%2Fgo7AdCV2Sw3aoDRXK8eHjb8hm%2BJmBs3TjBcgpFTMMvwh78GOqUBlAP%2FDnXQSu%2BHWR67LkcqaPzYn0x96CN4prALLmwSpB%2F%2FDPJiEa8X6buyi2oG6dQyrJDh790Gv0wgTirIb0qXtlFSpdVzr4Zzb%2FJ9k%2BMliNHchLNOLRdyqZi4HugQUDgqUEU4MlTwnEMjXbYPZfXjIIXwHISmiA6vvQfR2dG8B3KQUPhYruQLOR94%2B1kO8PgJXjwkv4EmRKRLAJaLlYyWYe8i7Bga&X-Amz-Signature=d32dbd5dc47d7bcb249cd4001120957966edaf35ec1325ab2330e4a94036d70c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCQMMUZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCSjzC1%2FYX9fJSxYH12SdHWkGvld3D184HLxHMNeKhFAiAzoOMPqTefrrWm3HCSwYou1zaIcojgATb1vTIxSo63jyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2b1Y9vSTLPCqGCA0KtwDQ%2BeklMESdCPlMCXRlTzCUJ9Fg4oTC6DZDM3lMXdQWcvZ6ctTAuP9mNj3w7en4eIB4b8tB8jTUQy10GbZMDm6XEgGohOVuQuagH%2BWQrsviTkd4nZovAbIv17nbjR9Sg0qR3aaf2I5gzqlbh1CA7AykjajpNlVXg8Wq6YHhFBkAtoOVyB44z2EKymHKQS5f25unHz6T%2BTsuL70qEzjozQK5xNeoms0kHXwHWznbuEX7HwUsxqGdXzCfLpOqMIhfCgbtc4zCxMnTOgvYm%2FcsYqo6jlaDw%2FzfNl6dh%2B8UtaeTcyDTfNtpHbJSUAbHqPYNelNERq1ByOza4F1FwAOV974RrRJtc0IsIP9r%2FfXQZefzPPiBtWlHqDWJDdHKF65qG4U6NQyBXOnnzVYoJNALqGkhee26F7cyK%2FlV0Qe7cmjGdh0RHynifcSRtjRbtdYfYQhEAGZLMz3UMidIg33MLqX%2B0CAGS99NbbXor%2B2ltrfdLPNMeSrl6niYPI42c%2FHtHcpx0fVQ8I%2FtzZNE6j5545UtR4uGLJdc%2FYTLRC%2BhQp8GRb54CR5L6qa5WrcDhfdPykeJVfz%2FJh0Sd7rqxycgrolH5bAXlvnHX2ZB9tf4B2l0U1DLnp3Pwp6QBhiMhEwoPCHvwY6pgGwCw1Cvo3oAQsYEwkJ2pVIya3L8aZRna2uxvS3pGneyzPTZZkhRt1G0wWeKJUB0C%2B90FLneVoOQp%2BlhoXuJ035AMg5SjxxjMYseZQsXQ%2FxG2494CmBROsCXIBS3a8wTgsttdhazgU8iCFdJxF4He%2BzVbcbITDtpDSDaz8Gsv%2B5ZtbHR1AqmfAlINDMikwn7LGS%2FpjmpLp1nrqDBem4iCvgeNxqU64D&X-Amz-Signature=2c75adaa2d48d97ed0e26c53f42ec9b6cc2d84d4ba91860a1202b37bbc1add32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2L5KPZV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuTrstak4vMkPYbYb2Nu0%2FcZSaiPUGrSZ70MhKh%2B2qgAIhAMjtPg9LJGipYw4E3rLw%2FbKyJOqHevP7IUGtwESu8n0uKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysbfD1tToS3cEfIaoq3AO2SmOxdzhfGlbbJwILBLgHH59Mkr%2BX29ndW0GCtc9MajM%2FvxkpvcbAjtmftE5sNFvwENx%2BgHjT2bjWfsqa5wTY0czVlUvrQH6ny2ifCPI3SnxGWMKZn%2BPhZxeadm59NDvXb6AzIWE6P9p9P56o1g%2FwjCWdutFb6e9phXwvYxfxDB5zF8ekAVioTczSGN%2FAuaKj49JkCkm5F3dye7oR08d0JriPcdhVaJqm8n9CgP3RMPcyZb4HE06TLssH2o3SSVCNqxnllpFKjibCGMtj6yxNLcZBlfY2Lc%2Bn8jtTIgQGCuQxoCVUZ6V%2FpMjLL3%2FL%2FOxFdxaxniStFmRxZhjhNGuU2e3YmVObjyePLatf2J1Fny%2F7TxXCVXjPjKBjOgzvjq4bn8U2MMYwY%2FsGMC3PU0RbUArHTG7pDLrPCpxKHt5MIL4XTaNMAUhOE1qmQvk7M5hl5qST%2Fo3baJr10d1tv%2BwJ5lNTry2Z7mn1%2FZCVKOjXevtN5QrStgM26ccwUX1%2BS%2F0ZVRjBIcbquVytJLHqm6IQmWvkL9ziP0ALhCR2uE9XagTFvBX57txBglqpT4%2FPJEKFi6dk3EpHl1F3yr26zwV5f1HIgTKSpUumR0e6y2DcuBXUzBdTYw5OsEt7XjC%2B8Ie%2FBjqkARYyyWw1mrhnmTwFAatQwqFMLB%2B%2BWlcLOUlDIenbeRzon97kDMGqHIkEEBN1%2BEPfgWg%2BlG0tUfUgGvfhQ76xJ8KNfiDmtmHIkB2S6do09wDeg5Jtkl%2F7dP7NkGAWHujkHNYV%2FUkGg%2F9GSJ%2BL6tXU0n4NgBjjuwt2mqKZrN6kMOipV4juYDIVff6VM%2BAI1nPdCaZOdTeOfK7rM%2Bm9vmDi4lA55CaR&X-Amz-Signature=5e81f3024d18f53c7ca6e56e60cb988172102f020189621183ee633dfd926db2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUY5ICZ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4%2BPx6W85f7IqoRexzOAlo91FFjiIccUNkkTfD3G1KUgIgWYYynsgnyrOwK3UPj1PSMy31Wn8uYGCdOe77VDingtoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6%2Bno6P44DXu%2F13vSrcA%2FZr3xXFC%2F9tNKTSLQrvl1yT1bvPYd6vNwnBmYFDpM2qAQeifx%2Bm2h2UOUEd6zS%2BmKAfQv414oUqz%2FhYtV2gsiV6mkNgj3KdD5oVMS06srllCOwqOsXF08C1oUruKqU4IhLKqBFOzEmlxKeYLIcrPUNa6YY2u1Ea%2BycsCN4JsXcnn1nrHcqwLSzrKd1szrgGYxmThqVwtlvaqpW6ASEgLcxD6w%2BW6ioN5F93mxgVtVFdzowaN1PJmCw7Ur%2BXWmAS2e%2B7kwnQR1y1xiTfQ%2FAkTwxF0mHQ%2B2XmODLdIngobnsz2%2BxLe1yYhzZXLQ%2F%2FsK4syLU7lgIs%2FYlqjNx1t%2FhxUxLVFCvUpHUL12fWsSxXNkyMXnET7q3ozL%2FXASAQqTFKdZZKmsGQ%2FYZ66vgOb%2BCyd2exnYqmVA0eLyzW8Vr8kGu07f%2BdxL6L8JbUa93nbr4GvI5wliEX1QT2mAnOUHZVxkLbYxspes4Jmw63OJrrSy69ZBlcrosbs8Fs0pFQzzT5Hz%2Fw%2FmyFm6sceR7jm5TQvB%2BUpwk1bblV7oy%2FCb2L%2Fmtxx5v305T2s3II%2FKZl6sxBquk31YmBZnU9%2BjkB0Ax7%2Fgo7AdCV2Sw3aoDRXK8eHjb8hm%2BJmBs3TjBcgpFTMMvwh78GOqUBlAP%2FDnXQSu%2BHWR67LkcqaPzYn0x96CN4prALLmwSpB%2F%2FDPJiEa8X6buyi2oG6dQyrJDh790Gv0wgTirIb0qXtlFSpdVzr4Zzb%2FJ9k%2BMliNHchLNOLRdyqZi4HugQUDgqUEU4MlTwnEMjXbYPZfXjIIXwHISmiA6vvQfR2dG8B3KQUPhYruQLOR94%2B1kO8PgJXjwkv4EmRKRLAJaLlYyWYe8i7Bga&X-Amz-Signature=cdd075abdd9192146655b8d8afbe07e6a1c02c23fd28c8de899dc774ba8880d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
