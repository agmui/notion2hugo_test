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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MZ4PF7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGsP84HePmjTaxlmqOiBCKazscUfrr6lYkENKtyhDFBFAiBfkVjtyLbfXzfp2kUA%2B2DSnMmngaX6jvs4mPNjsFUTcir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMdBU7RJmjyXr7wALaKtwDbLWgC3%2FqfMhXgLnSbxborUrzMZGfMlPeH0WNNMgrLnSixUK2UqmYNKkrZFGuLy%2FsyXqNcj49HCnBNdVovmHldADhh5l5FdGgo8hyVKerPRiZIvpEMczHHgC%2Fcwu9JTFrUW9ssRlWVF5Jrw0BBszn8WxZsqHGGconY%2Bm%2F9gPEbO2yVpvCAu3vpub4FXjtSldFshOGq9QanMWwzBCrGU%2BIAibmyIO2yvuDSMyntouR9d3r6qM8shbtAKsIxdBC1Xhz1LW%2B4YaVOaBKyp1fCX%2FdKgAfUpbowaycCQuMwMuPqX0R1h5xUqanffPRsUrsoWvjL8AWr%2Fo9fGpbdKB5eeLW6wtpMgki1EwRJuyWXZMnpnsBXU8AEX5NYLCrAd1p3psN051%2B6QDW6%2B8HvQ%2BIKh4PGwtWKMMLoGjmhRr56ZAbhWlkVkDIIBCGzaOLDIyy3IIdv9xm497CIb7xA0ZABVlYHP%2FzfYa2tyA0vD1%2FRgmtBMHlhK3%2BrgnSZnDN%2BZ4sLOUx7JjoLwKt0cm5repw3wiyhJzqby1v1TrfWDr%2BvC0bqpiAIq%2FoHCQ%2F0jrXjZD%2FmOFrzDLizNBJaaJf%2B3KtfTBEXqfKhAUJKZQaLr5a7%2FbrY%2F%2BKRp8YVFa7eAGPJzAwnNKVwQY6pgE6PkTHCN5L1KHVQSlWOTYMevcjRIeDXx017lVsYFQMpYews%2B1PyMpawM3VlNgUA6CGQQkwppetG84kHOP7B88cc3FfSY%2FrPgYcqXwMHNWMpEyhH6ChEk6RFDS7rqLUeR38D1ykrre7LyyDhGc6cksuPcKGpxZRsb%2Bm8e8asmbD83zkhHFwNPre3l42yOCUUSE9shEGeijpSymGs6MBMsDs2HWX0pK4&X-Amz-Signature=b2da9493585bf0caa8a854957ea5dbfa49854e4af8143c5d73a49b115b9b2066&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MZ4PF7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGsP84HePmjTaxlmqOiBCKazscUfrr6lYkENKtyhDFBFAiBfkVjtyLbfXzfp2kUA%2B2DSnMmngaX6jvs4mPNjsFUTcir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMdBU7RJmjyXr7wALaKtwDbLWgC3%2FqfMhXgLnSbxborUrzMZGfMlPeH0WNNMgrLnSixUK2UqmYNKkrZFGuLy%2FsyXqNcj49HCnBNdVovmHldADhh5l5FdGgo8hyVKerPRiZIvpEMczHHgC%2Fcwu9JTFrUW9ssRlWVF5Jrw0BBszn8WxZsqHGGconY%2Bm%2F9gPEbO2yVpvCAu3vpub4FXjtSldFshOGq9QanMWwzBCrGU%2BIAibmyIO2yvuDSMyntouR9d3r6qM8shbtAKsIxdBC1Xhz1LW%2B4YaVOaBKyp1fCX%2FdKgAfUpbowaycCQuMwMuPqX0R1h5xUqanffPRsUrsoWvjL8AWr%2Fo9fGpbdKB5eeLW6wtpMgki1EwRJuyWXZMnpnsBXU8AEX5NYLCrAd1p3psN051%2B6QDW6%2B8HvQ%2BIKh4PGwtWKMMLoGjmhRr56ZAbhWlkVkDIIBCGzaOLDIyy3IIdv9xm497CIb7xA0ZABVlYHP%2FzfYa2tyA0vD1%2FRgmtBMHlhK3%2BrgnSZnDN%2BZ4sLOUx7JjoLwKt0cm5repw3wiyhJzqby1v1TrfWDr%2BvC0bqpiAIq%2FoHCQ%2F0jrXjZD%2FmOFrzDLizNBJaaJf%2B3KtfTBEXqfKhAUJKZQaLr5a7%2FbrY%2F%2BKRp8YVFa7eAGPJzAwnNKVwQY6pgE6PkTHCN5L1KHVQSlWOTYMevcjRIeDXx017lVsYFQMpYews%2B1PyMpawM3VlNgUA6CGQQkwppetG84kHOP7B88cc3FfSY%2FrPgYcqXwMHNWMpEyhH6ChEk6RFDS7rqLUeR38D1ykrre7LyyDhGc6cksuPcKGpxZRsb%2Bm8e8asmbD83zkhHFwNPre3l42yOCUUSE9shEGeijpSymGs6MBMsDs2HWX0pK4&X-Amz-Signature=8d71adf8ecc96775edb736c7666a61663c5c2cb13c6a4d7ca2fb5cdd2f592242&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MZ4PF7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGsP84HePmjTaxlmqOiBCKazscUfrr6lYkENKtyhDFBFAiBfkVjtyLbfXzfp2kUA%2B2DSnMmngaX6jvs4mPNjsFUTcir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMdBU7RJmjyXr7wALaKtwDbLWgC3%2FqfMhXgLnSbxborUrzMZGfMlPeH0WNNMgrLnSixUK2UqmYNKkrZFGuLy%2FsyXqNcj49HCnBNdVovmHldADhh5l5FdGgo8hyVKerPRiZIvpEMczHHgC%2Fcwu9JTFrUW9ssRlWVF5Jrw0BBszn8WxZsqHGGconY%2Bm%2F9gPEbO2yVpvCAu3vpub4FXjtSldFshOGq9QanMWwzBCrGU%2BIAibmyIO2yvuDSMyntouR9d3r6qM8shbtAKsIxdBC1Xhz1LW%2B4YaVOaBKyp1fCX%2FdKgAfUpbowaycCQuMwMuPqX0R1h5xUqanffPRsUrsoWvjL8AWr%2Fo9fGpbdKB5eeLW6wtpMgki1EwRJuyWXZMnpnsBXU8AEX5NYLCrAd1p3psN051%2B6QDW6%2B8HvQ%2BIKh4PGwtWKMMLoGjmhRr56ZAbhWlkVkDIIBCGzaOLDIyy3IIdv9xm497CIb7xA0ZABVlYHP%2FzfYa2tyA0vD1%2FRgmtBMHlhK3%2BrgnSZnDN%2BZ4sLOUx7JjoLwKt0cm5repw3wiyhJzqby1v1TrfWDr%2BvC0bqpiAIq%2FoHCQ%2F0jrXjZD%2FmOFrzDLizNBJaaJf%2B3KtfTBEXqfKhAUJKZQaLr5a7%2FbrY%2F%2BKRp8YVFa7eAGPJzAwnNKVwQY6pgE6PkTHCN5L1KHVQSlWOTYMevcjRIeDXx017lVsYFQMpYews%2B1PyMpawM3VlNgUA6CGQQkwppetG84kHOP7B88cc3FfSY%2FrPgYcqXwMHNWMpEyhH6ChEk6RFDS7rqLUeR38D1ykrre7LyyDhGc6cksuPcKGpxZRsb%2Bm8e8asmbD83zkhHFwNPre3l42yOCUUSE9shEGeijpSymGs6MBMsDs2HWX0pK4&X-Amz-Signature=9c2c4c05ccf325c1cfb649448c31065a1bb487b1a7f1bb039ae62eaa13c1b05f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVDL24JL%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIFXppkRRIV4fZifq6FRB6W8DWjT8FAgZp2bunkpPHiWfAiEAhsVY8sde1c%2Bxf5tKfe7Y%2By%2FGZi9UkIof23wQ3GRTjAEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKZkyZeJVuIWZQooyCrcAxFqiPl2oqLCjQEfmaBsLMH%2FxbpO6ZLkuP%2BC7%2Bnska73AUeRuGFAl%2B%2BYTXEY0H1Kqf8qvuCQD%2FhuAzitKKMxvmyUpRValdvbxJq0oZkRlhsjRfI1o%2BmqfGuj2rnlbxlS2o9VIFsz4r%2B%2BrmD2hjFCQWtyjXZd49%2F3l6VTEo4EZFpBrNQJX4s9IDJRWljEQOLlfLiQHBGbFzR31yAK%2BdTyd%2BvXKQye4DVS3iedym%2F1sWtzfrgYLsv7j%2BW1IIC9mfk%2FZBCBVxaCyUBjkZv0fTul2pavku920U0vhL0aLKNScyQxxs4q9HbnLfKpAV%2F9O1yvcIcQiSMfMmzDnksbelz5QSkbic0CSXZy8%2Fai4xtE3tMmkM2eBKVFiCDQDY68jq7%2BnxfI0x%2BQf%2F6rWiHk%2Fon8g%2FpGAk2sKn5qnP0no2bU63isQLSpjlXKnZIVrD4VGWqzhaG8WPcVQBE4P3Ld6J8mpbzeOqUXuI%2Bv0SEbYSByYZ4bgCvj9t2tb9vXLp%2BqxTwJmlWquPSFtnSbJL1%2BOeybId1xhMTKvRTWLpaSjUBpjWPGtVkhCYr4OE5%2FBBS0uy6VaM5855MqWROt3HyxVOaz59TZSLaNgMVN61oG6id0N1HRxN64%2BRuzRUNCoJK3MJPSlcEGOqUB6KX3njew9evMXdG5hH89hz4Izr8RenK03DkZicyqjg8AQ9n5eNv%2FjWvyDXMkqw9kEjLdApHI5K7nD1fPa8plYo3GlBTnGNLMw37kIZu3NqjL4eoD5NNANKwuSOkK%2B7L%2BiunWNAmyBFlqOn7m4qxZhpjkyAEo2Y9sptPKYWZPfwN9qC9vlTuTD2NfbgkCyIGd0r4jVlNRpxf49zCQF94W7E5sR%2Ba0&X-Amz-Signature=f221f0f91c4fa3e008f05c3c8ba052b560df22c22cfd408f17a4969bea216284&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666DVI37K%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDckMKpw1gZJBMofmDD%2FMdxy6UWNgX%2BIFnZyczYvRoUfQIgeqBd3ssh3T5gApWvK7o5ro%2FkxwPYgb5gjrdW3Ut8%2B6wq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDA4%2Bs9wJKsLDo48pqSrcA80l95QR%2F5Mvc0pK4c52FyW6Iz2%2F6oLpH17cA5bMJQ0TXKzSrcocLRe7ysvE3DGq21wKZeIA528FbC9pmXfCbkSo%2BsbCAqoNEOcbsZylrkLJqzJDMRCRcx%2BZcSOUly%2Bcnn3U83sxczgJ6yW2XFCos0y%2Bx4FrUgod8UbMmwaCEIPFSeSuaU4motuvgYUCFNzatN984047CcoohOe8ByyF%2BbwG26DEtX%2Fw9MmyYzXNtVNvhs1E9Y6CO4zBDkz6DSd5llCXW90gbuLMn%2FzPRh4L2joF4gLbx3m5lMke23WLLE9TXAerI2ET7ThBPSvEkcLcst4Hqq7tRCjB8RdEHMosXOmKKRmpgWcrTrh6QXJSauiduUruluBoIPBptgFmFUkbZAsV3hebwmeP8zZmai7XsJW5Guf8gEecgvxo4U4s4MjTzt0y3bBXPM22JRa7B3fHz1hqpfaS54%2FiXDS49K%2FydOeCkAI2H3t%2B%2Fjy0u26hWrlYHDkRbatdmNbXEftSnATFyOozZwuBfcBQGg5%2FiqIgdWW%2B1hRD1l%2BePGbSKP84EMhi7XUZtZqRKduB0HRB6qQ3rpkZT4Ev%2BXZBw0w6I%2BrUhVasRNYr8zWTG7dbT6zi0Pyq71Q16ipxe0ZiKgV4MPzRlcEGOqUBY%2BdAgDJYxvxMsv8zXCHM5kL7R%2Bp108%2FuFWjqNl55kLff5pKtCYLGVB1SAz%2B8e1Zq%2FYJ5Mc8txiCkcodQL8wgl9e9nVhrsU%2B12%2FVe%2F5LMC9FtzRMaYSv%2FjHRqKdYOgAPy4OUADj4tB9B4OqWwgxZwDQAn2lzF%2BZsrorXokgiFtt1QlVYolqhPtBu6WMY8CTCRUaV9JHvI4ckkl0cfBcX7ACKG0TQg&X-Amz-Signature=f47caf78156c95d6169ae1d07d8815c9cc6845b969efa4f7ffb5f1624f9e71a8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MZ4PF7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIGsP84HePmjTaxlmqOiBCKazscUfrr6lYkENKtyhDFBFAiBfkVjtyLbfXzfp2kUA%2B2DSnMmngaX6jvs4mPNjsFUTcir%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMdBU7RJmjyXr7wALaKtwDbLWgC3%2FqfMhXgLnSbxborUrzMZGfMlPeH0WNNMgrLnSixUK2UqmYNKkrZFGuLy%2FsyXqNcj49HCnBNdVovmHldADhh5l5FdGgo8hyVKerPRiZIvpEMczHHgC%2Fcwu9JTFrUW9ssRlWVF5Jrw0BBszn8WxZsqHGGconY%2Bm%2F9gPEbO2yVpvCAu3vpub4FXjtSldFshOGq9QanMWwzBCrGU%2BIAibmyIO2yvuDSMyntouR9d3r6qM8shbtAKsIxdBC1Xhz1LW%2B4YaVOaBKyp1fCX%2FdKgAfUpbowaycCQuMwMuPqX0R1h5xUqanffPRsUrsoWvjL8AWr%2Fo9fGpbdKB5eeLW6wtpMgki1EwRJuyWXZMnpnsBXU8AEX5NYLCrAd1p3psN051%2B6QDW6%2B8HvQ%2BIKh4PGwtWKMMLoGjmhRr56ZAbhWlkVkDIIBCGzaOLDIyy3IIdv9xm497CIb7xA0ZABVlYHP%2FzfYa2tyA0vD1%2FRgmtBMHlhK3%2BrgnSZnDN%2BZ4sLOUx7JjoLwKt0cm5repw3wiyhJzqby1v1TrfWDr%2BvC0bqpiAIq%2FoHCQ%2F0jrXjZD%2FmOFrzDLizNBJaaJf%2B3KtfTBEXqfKhAUJKZQaLr5a7%2FbrY%2F%2BKRp8YVFa7eAGPJzAwnNKVwQY6pgE6PkTHCN5L1KHVQSlWOTYMevcjRIeDXx017lVsYFQMpYews%2B1PyMpawM3VlNgUA6CGQQkwppetG84kHOP7B88cc3FfSY%2FrPgYcqXwMHNWMpEyhH6ChEk6RFDS7rqLUeR38D1ykrre7LyyDhGc6cksuPcKGpxZRsb%2Bm8e8asmbD83zkhHFwNPre3l42yOCUUSE9shEGeijpSymGs6MBMsDs2HWX0pK4&X-Amz-Signature=9ed238e333869d699408fefaf1fff4d32e86c2260facad55c060c326cc6da491&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
