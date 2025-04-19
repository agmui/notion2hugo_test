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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6YFXGI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC9WHbKg7RemG6iGeq%2BYQCSdMQ5nEaV8JIWxrZWI8QpLAIgTAdmxbNfAxKFRoq%2FvgRYjwj%2FybfCUaKkGb8VYFpDQEEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMutSvsz6ftF0nie%2BircAwa5ztZxjLO2BfaEUZTKbzMsddLaUUKFcFbfMIQQCEntBi3eycI2K04ttjSYTu88ceIAivc%2FoGyxQUCJ5FRfbPxM7sp6G1HD1ikiXipwK0tXRul8Wb0jIRGiYHRywjxJ2DtqjSzUPRxqeRGb%2FBTWKxzUbcy3PTqENI%2FFmDvfhQt7A24YtGOcGgzKxvsXFTOR7qn%2FtG1kVyHogE6s8QcfTgzLBxMvZMGEQ5npH%2BPVM4d2jMLpteJxD5l3%2B7jRiQvgdqw5SK0eKcxq5KE%2FOFJDem%2Bl1w0UvhIeOn5oaX6FGy%2BY2CXwDFYZ3hwnaFuzcpzAMdGeHITiczKsIzWkDua3I20xEHo7hEXGVtQziOtJ%2FVQ7aDkDVuD3JrwazlE0P74MLk%2FuKanATExNTDiaN%2BsrWr5xInen2RpBChEkEYzkFOwAttoeXCcko%2B0ya2r4fT2SnX1g%2FE8IBV2oKpDvd5VWty221o1owG7qpY%2FyDA3a9MKGntLdBHw%2FuwIBju69ux3l1%2BNMO6tC03bKFJMT5tycD92TMfqH8F4WxjUT6LlIsuIskm%2BnotkM2lRKvaYXp4OWrzyiSJczpOFJeAFnlNmYe0IGA9C2YD908kyva%2BLunfhH3sS9%2Bj7%2B3Sq%2BOlXWMIegj8AGOqUBIyDb8xdxN8INit3p6uR4AjnxPgghkn6E4Qh5LxXN4zvV0hJei%2B9Q06PUbTieqvkxct09UGdNJZJaX098BJR0sGuY%2B0zcpfCGtnJRxSNSUeH7IzKneGFIGN1W%2BYQrOhxxAd%2B5Ex02%2FSWZYtcDnMaynZ2x9gYOLpOb06CZcpPm83nG9HzhEWHgm5mvlt0tem9nLcTtWvWheUtkTLxr4cigepHEbJfv&X-Amz-Signature=dd40ad10c09f4cd89f3a4dee80f170f92eb966b872dbc369bd221ec5df3e0152&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6YFXGI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC9WHbKg7RemG6iGeq%2BYQCSdMQ5nEaV8JIWxrZWI8QpLAIgTAdmxbNfAxKFRoq%2FvgRYjwj%2FybfCUaKkGb8VYFpDQEEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMutSvsz6ftF0nie%2BircAwa5ztZxjLO2BfaEUZTKbzMsddLaUUKFcFbfMIQQCEntBi3eycI2K04ttjSYTu88ceIAivc%2FoGyxQUCJ5FRfbPxM7sp6G1HD1ikiXipwK0tXRul8Wb0jIRGiYHRywjxJ2DtqjSzUPRxqeRGb%2FBTWKxzUbcy3PTqENI%2FFmDvfhQt7A24YtGOcGgzKxvsXFTOR7qn%2FtG1kVyHogE6s8QcfTgzLBxMvZMGEQ5npH%2BPVM4d2jMLpteJxD5l3%2B7jRiQvgdqw5SK0eKcxq5KE%2FOFJDem%2Bl1w0UvhIeOn5oaX6FGy%2BY2CXwDFYZ3hwnaFuzcpzAMdGeHITiczKsIzWkDua3I20xEHo7hEXGVtQziOtJ%2FVQ7aDkDVuD3JrwazlE0P74MLk%2FuKanATExNTDiaN%2BsrWr5xInen2RpBChEkEYzkFOwAttoeXCcko%2B0ya2r4fT2SnX1g%2FE8IBV2oKpDvd5VWty221o1owG7qpY%2FyDA3a9MKGntLdBHw%2FuwIBju69ux3l1%2BNMO6tC03bKFJMT5tycD92TMfqH8F4WxjUT6LlIsuIskm%2BnotkM2lRKvaYXp4OWrzyiSJczpOFJeAFnlNmYe0IGA9C2YD908kyva%2BLunfhH3sS9%2Bj7%2B3Sq%2BOlXWMIegj8AGOqUBIyDb8xdxN8INit3p6uR4AjnxPgghkn6E4Qh5LxXN4zvV0hJei%2B9Q06PUbTieqvkxct09UGdNJZJaX098BJR0sGuY%2B0zcpfCGtnJRxSNSUeH7IzKneGFIGN1W%2BYQrOhxxAd%2B5Ex02%2FSWZYtcDnMaynZ2x9gYOLpOb06CZcpPm83nG9HzhEWHgm5mvlt0tem9nLcTtWvWheUtkTLxr4cigepHEbJfv&X-Amz-Signature=03fe1a9c106227f3fd23f8ca421702d465c2d0bfdd8acb74a72e9e345edf763f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR4REJTL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICJdahzGcFQkhz0djzx9rYu6LWnR2Av4Yl7XVfSyl8YyAiBIuhNU2YVX%2FBWpldSC43cPDymWb%2BS87qRO3lHt2N5ryyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHv1gAMkN2F5vR0QKtwDrPv33hj3YcTKCUp%2FmygFvg9jSkYnV%2FsrqAdLDFigmLoLfqBg53l58%2BDE5QLaCleIPaK8Cxy3KD3D%2B8lX2Zecqi4EluPFTGJqyGIGBByK2ovJLVV8VP0v3KUTsQa5g%2F2j0B9vfYoDphLr8TTc2K2ENabjtjkAFrG6mXcF%2F2vmcgEa7GZoEfbWPnsptjGnJa3X9uR%2FiK4M2geZlxfX8I3qXqDUm2ZXs3s9Yq1vqynNpRLlGD%2BHF89z5cfFRkgjU%2BPxSjnrJ5CkyMq%2BWberj%2BVAXXLa2Pj2%2FmsvjnLpID9%2FlVp8ljzG1lKGArna4ZBv4QAAVZonBNiblo3TdPosXGi70ON8JHOmAGFq%2BDNv1H4%2Be%2Fh2UhYuHVhq%2B9std%2FyhrgLqTnbQ2NYzqfS0k86SUO%2BnwDhH%2B0Zx0Fy%2FBf1FpEjCC4blug63W3JKGLS5VgV4t4OMTknEZ%2BB2zwF9t9xiWe%2BIwoTwGTkl9cTLQMJax7vSPAy9uXwQo%2Bqx5KbiXQbcdtLjfyacpUyhiokgL4J8p0yRzH5f4l5QieCutT377vWP1%2B02OZ%2FaCjOmsWKQ04KiqBSRqENJ38iOPDVw9JfyiZ%2BLJF8ZmQ6TtFZ%2BY2JhbrrnbBvvCw51EwNm1XhKfA0wgaCPwAY6pgGJ8XVnG6XOtGzG2gdxAmEYH4NPttsCYCSbN63PWwMFpGTUMF6%2BqtlX0JQv7jGvwjsEx4IsT2svFn8MiCQkVsZclpfdh0CF8jJOdYZ9RujyrW328dR%2FpwrLS5Kw4urfJa4nO8c1F1cIH9TKzZTzJeqBKBiS64A1%2FQVV%2FHY23ieqFk6LoAdv9YI1Du3pcFXRgVjw6iWVAbk%2BnuEALu505vuBGZCmss7t&X-Amz-Signature=42da3a9fca6116483c64c0f9161c5aaf3750b4f0489893b4ab5969ba036bd5e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NPNUX6%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIE4jdkDG8jy0SgwMrmFq4C%2BxwxLtssZLodPCSQ4RGJCQAiA9DqmfMf8m0eC98TV35skAe5TfARNMKl09aAr8YapqxSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNX8kxse4cI0XIkKMKtwD0xgVQ2Fgwm%2FNqxlX0EVccCoPJP77%2BiWndqJJqKAHDDPbc2C2NvoMdMuxxOtLKhfMFi3V2iHuHfpFh1GdYPs8Ykaw%2BXUSI8NKGKs6g4KeAgC25lvN0JTAE%2BmJ3G4RWvKxx2Pki47ZSQajMcPUD92tlSRkUeKHdJOORsTMXIusVrpCHWtXx9QaJa2mh%2Bs7jBo1mhhmhWPYv4VLL%2BZjAQa5xQeap82c5oyxyXAFrWO2Q09zNxNdtKeZJGf6dPlAAk6JR8o8Zhrbg3gCM4X0ajkSiScUoL1xfW53BRTBMugtD%2BvsA185nfO9sbh2C0sLBj2P1w1gJ2NBUaoGXbu8PUxSjR7MgRzijajdbh1G0D2skRgrk53WvwPezhnDeqXZ12ta0Y9JFou3tjtt65Bn7BMT0lH0KF7Y8SNELCOtV%2FRjYudSS%2BIAB%2FqMV2aMqrkOKJkmReIV%2Bxhu15meDcDrBxnFqmBSN2RJzkwG%2FJxlRCHSuqxqO%2BHFCrafq91wVaBYAsIKUH%2BndZehG%2BHV9eN%2BDlRZY8ZkO6RbtEr1Q48JFRcgJDkX5UiHUAQoiGBIv%2BKsA4gBUb7kMN88QcRX4BacTqAT6WIy6bVqujomGVXlojl7ZqeFjw%2FcXxodTmAr0%2BowpKCPwAY6pgGisuTQRBuS7n5U7iktButSKkvH3wuCAiKclBeoDD%2F0y%2FHcv5fsdGcDQqoN8C9Itz226XIq4HAuM9rdJfWMXOE4%2BfCyYGS0A5%2F%2FtykJPkUgsom750oGV0whI28iCDx3udHr4lO256g3sHgKde7v9rUCsnjhM5kgVGHzMx%2BkZojNmsFaFIzv%2B6fmJF32RxyIGs8n5JZMdOQ%2B4fBvhxk6xjL%2B%2Fi%2Fpa%2F4Z&X-Amz-Signature=bc175f61d56cd8b88c4e9144789d6a9738b2b4ae089d4b6373577a9508eacc8a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6YFXGI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC9WHbKg7RemG6iGeq%2BYQCSdMQ5nEaV8JIWxrZWI8QpLAIgTAdmxbNfAxKFRoq%2FvgRYjwj%2FybfCUaKkGb8VYFpDQEEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMutSvsz6ftF0nie%2BircAwa5ztZxjLO2BfaEUZTKbzMsddLaUUKFcFbfMIQQCEntBi3eycI2K04ttjSYTu88ceIAivc%2FoGyxQUCJ5FRfbPxM7sp6G1HD1ikiXipwK0tXRul8Wb0jIRGiYHRywjxJ2DtqjSzUPRxqeRGb%2FBTWKxzUbcy3PTqENI%2FFmDvfhQt7A24YtGOcGgzKxvsXFTOR7qn%2FtG1kVyHogE6s8QcfTgzLBxMvZMGEQ5npH%2BPVM4d2jMLpteJxD5l3%2B7jRiQvgdqw5SK0eKcxq5KE%2FOFJDem%2Bl1w0UvhIeOn5oaX6FGy%2BY2CXwDFYZ3hwnaFuzcpzAMdGeHITiczKsIzWkDua3I20xEHo7hEXGVtQziOtJ%2FVQ7aDkDVuD3JrwazlE0P74MLk%2FuKanATExNTDiaN%2BsrWr5xInen2RpBChEkEYzkFOwAttoeXCcko%2B0ya2r4fT2SnX1g%2FE8IBV2oKpDvd5VWty221o1owG7qpY%2FyDA3a9MKGntLdBHw%2FuwIBju69ux3l1%2BNMO6tC03bKFJMT5tycD92TMfqH8F4WxjUT6LlIsuIskm%2BnotkM2lRKvaYXp4OWrzyiSJczpOFJeAFnlNmYe0IGA9C2YD908kyva%2BLunfhH3sS9%2Bj7%2B3Sq%2BOlXWMIegj8AGOqUBIyDb8xdxN8INit3p6uR4AjnxPgghkn6E4Qh5LxXN4zvV0hJei%2B9Q06PUbTieqvkxct09UGdNJZJaX098BJR0sGuY%2B0zcpfCGtnJRxSNSUeH7IzKneGFIGN1W%2BYQrOhxxAd%2B5Ex02%2FSWZYtcDnMaynZ2x9gYOLpOb06CZcpPm83nG9HzhEWHgm5mvlt0tem9nLcTtWvWheUtkTLxr4cigepHEbJfv&X-Amz-Signature=74c2ba3618b63be1d4c09272a21457c2341d44f350b0642f4a3dcd942adabb90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
