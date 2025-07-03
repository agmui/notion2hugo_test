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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKPRU3X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWWSbrZg6o3W%2Bi%2F1OThR1SdAIcpkSeWyGgzdC5A%2BDWwIhAKtHarNh57uH7xaPVlrMAKqWaAzgq7x4wXr0k6oJV9chKv8DCBsQABoMNjM3NDIzMTgzODA1IgyAU0%2FgQJUC8k2hZN4q3AOz3oqEPc2ggBVNsXSKdyZg4sRR5HbPZRJHJCSXUHqdm40h8vb5YKhBNDiyOcUmooR5E%2F%2FcbvQ5syP48PCFlNA9nccPBdSpihfm7VPPh9s%2FJYNeqUTchcKm%2BX1k7fQBZ%2FW0CJ%2FWchvOdvX%2FgW2dKwymjL9E%2FzHYNthOdNvSCX82UTeMp%2FuK8TSA1pbiCBZTYe1Mh6Q46JRND5MVJYSCVpXPawxjyDVBToWnwri4beKhrM6bYv57Z6BJcSx5ZkrPt%2BEnRcB0OOR2wYPuvmIOIOPIabGjIBYJeFnm3EykVX1ptA%2FE%2B%2F3sk%2BTNelcqAJR0F%2B9MPtQ4ypeO21RU2B57dpRoVdDBBt%2FkAUP9bqQJYBiZPATE5%2FzjBB3kWZSXTAfX6Rl6FYvYan9uzANSXwcgBWTTRU7TWMH2AWjwgT96JLkgxLuoqiwS%2BYMofC13W7yUdzUvtG3LDYt9rDWWOmRPlyn%2Bgblt1cR%2FMrP5Ec06FeSvCD%2B1%2FVO5o8TguTVUDI4BHY6F5OwTpvxqfudkoXyhU2s%2BLeb7%2BYkkYLCCd%2Be3KBJsdPxUADYD6mLpaQjUWcaC2kXyJ7scqiaPSZ%2B4nOzVgEnXvT3WB4X4K6tyPZR1P3i6i0iuCq6CWQbKrRZ%2FfTCakJvDBjqkARVSIVbzCx3kvApuLAw27PD5CxdAMWaf%2F7s2ryZKxHBUcV1jmREPzxEFSEe2upT6OgPMe2gF9jnXNjGW2EbcTiYK4tgC%2FxZaq4lxRJkylEHJocMR7G8uraOnjTizHB9IuQuiycZ1igjzmdk2sV%2BB%2FPAdQ3KtACkx7csIXmZwgxFyaWu0t5p6po4EZl34xz%2FEro0KSom6WSnnlEdSo3RpcnOXAtw4&X-Amz-Signature=2bdb8b9394f9f8c932382162beff7033906adf7e47dbff775791fdca3fbeefe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKPRU3X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWWSbrZg6o3W%2Bi%2F1OThR1SdAIcpkSeWyGgzdC5A%2BDWwIhAKtHarNh57uH7xaPVlrMAKqWaAzgq7x4wXr0k6oJV9chKv8DCBsQABoMNjM3NDIzMTgzODA1IgyAU0%2FgQJUC8k2hZN4q3AOz3oqEPc2ggBVNsXSKdyZg4sRR5HbPZRJHJCSXUHqdm40h8vb5YKhBNDiyOcUmooR5E%2F%2FcbvQ5syP48PCFlNA9nccPBdSpihfm7VPPh9s%2FJYNeqUTchcKm%2BX1k7fQBZ%2FW0CJ%2FWchvOdvX%2FgW2dKwymjL9E%2FzHYNthOdNvSCX82UTeMp%2FuK8TSA1pbiCBZTYe1Mh6Q46JRND5MVJYSCVpXPawxjyDVBToWnwri4beKhrM6bYv57Z6BJcSx5ZkrPt%2BEnRcB0OOR2wYPuvmIOIOPIabGjIBYJeFnm3EykVX1ptA%2FE%2B%2F3sk%2BTNelcqAJR0F%2B9MPtQ4ypeO21RU2B57dpRoVdDBBt%2FkAUP9bqQJYBiZPATE5%2FzjBB3kWZSXTAfX6Rl6FYvYan9uzANSXwcgBWTTRU7TWMH2AWjwgT96JLkgxLuoqiwS%2BYMofC13W7yUdzUvtG3LDYt9rDWWOmRPlyn%2Bgblt1cR%2FMrP5Ec06FeSvCD%2B1%2FVO5o8TguTVUDI4BHY6F5OwTpvxqfudkoXyhU2s%2BLeb7%2BYkkYLCCd%2Be3KBJsdPxUADYD6mLpaQjUWcaC2kXyJ7scqiaPSZ%2B4nOzVgEnXvT3WB4X4K6tyPZR1P3i6i0iuCq6CWQbKrRZ%2FfTCakJvDBjqkARVSIVbzCx3kvApuLAw27PD5CxdAMWaf%2F7s2ryZKxHBUcV1jmREPzxEFSEe2upT6OgPMe2gF9jnXNjGW2EbcTiYK4tgC%2FxZaq4lxRJkylEHJocMR7G8uraOnjTizHB9IuQuiycZ1igjzmdk2sV%2BB%2FPAdQ3KtACkx7csIXmZwgxFyaWu0t5p6po4EZl34xz%2FEro0KSom6WSnnlEdSo3RpcnOXAtw4&X-Amz-Signature=35373209eaf5ce370a4aa3acd8565a3173764c537180783021b27a615ad3c808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKPRU3X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWWSbrZg6o3W%2Bi%2F1OThR1SdAIcpkSeWyGgzdC5A%2BDWwIhAKtHarNh57uH7xaPVlrMAKqWaAzgq7x4wXr0k6oJV9chKv8DCBsQABoMNjM3NDIzMTgzODA1IgyAU0%2FgQJUC8k2hZN4q3AOz3oqEPc2ggBVNsXSKdyZg4sRR5HbPZRJHJCSXUHqdm40h8vb5YKhBNDiyOcUmooR5E%2F%2FcbvQ5syP48PCFlNA9nccPBdSpihfm7VPPh9s%2FJYNeqUTchcKm%2BX1k7fQBZ%2FW0CJ%2FWchvOdvX%2FgW2dKwymjL9E%2FzHYNthOdNvSCX82UTeMp%2FuK8TSA1pbiCBZTYe1Mh6Q46JRND5MVJYSCVpXPawxjyDVBToWnwri4beKhrM6bYv57Z6BJcSx5ZkrPt%2BEnRcB0OOR2wYPuvmIOIOPIabGjIBYJeFnm3EykVX1ptA%2FE%2B%2F3sk%2BTNelcqAJR0F%2B9MPtQ4ypeO21RU2B57dpRoVdDBBt%2FkAUP9bqQJYBiZPATE5%2FzjBB3kWZSXTAfX6Rl6FYvYan9uzANSXwcgBWTTRU7TWMH2AWjwgT96JLkgxLuoqiwS%2BYMofC13W7yUdzUvtG3LDYt9rDWWOmRPlyn%2Bgblt1cR%2FMrP5Ec06FeSvCD%2B1%2FVO5o8TguTVUDI4BHY6F5OwTpvxqfudkoXyhU2s%2BLeb7%2BYkkYLCCd%2Be3KBJsdPxUADYD6mLpaQjUWcaC2kXyJ7scqiaPSZ%2B4nOzVgEnXvT3WB4X4K6tyPZR1P3i6i0iuCq6CWQbKrRZ%2FfTCakJvDBjqkARVSIVbzCx3kvApuLAw27PD5CxdAMWaf%2F7s2ryZKxHBUcV1jmREPzxEFSEe2upT6OgPMe2gF9jnXNjGW2EbcTiYK4tgC%2FxZaq4lxRJkylEHJocMR7G8uraOnjTizHB9IuQuiycZ1igjzmdk2sV%2BB%2FPAdQ3KtACkx7csIXmZwgxFyaWu0t5p6po4EZl34xz%2FEro0KSom6WSnnlEdSo3RpcnOXAtw4&X-Amz-Signature=420e51dacca44d12bce6665416e32c6c18e4bc8ceec8f99b75498c20d4421752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZMY7D5H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDpH7tM2kSo6srkK4Mx8fnHDU2FZrjJv%2F7T%2FKsSSIT64QIhAMCoWdZ2%2FuiHyKJgGfEZHp%2BrPgtLGbhWHqjYGU0hld%2FbKv8DCBwQABoMNjM3NDIzMTgzODA1IgytI11N%2FsKtW4vZarYq3AO0CIRPa3OWb9MdJ8B1q%2BS%2BnRULQytd6OMLk3JR5ZJDYtYOZDIXqJSEC30Vd9ysj1skMzp2cO8Y1v4yiVXyH0ZpqH0krorvqyrda3wfUR%2F3sN5VYixW%2B25GJSiEwozsNOyVga5HfyUBLgA07RoxvM%2FuFUp27HZKI2u5mucfhx4h%2BjE6gpg5R0K%2B40rE%2FrxdqZgaO9YLRtQpJLBwwnyldcBWmAU9%2B9Ijp6SQ3lO5dmZl0nY8M0UlPjznY7vUEEQ%2BcJlmqusXKmRHJH8hpNPtgu%2BlV5KA%2FK%2FPy7j7%2FP6HX2MsbNZIeutYeSVvKwA2CkAo4A%2F7O9RnS6BkbuAhvHBPGnYQv01m7EQClJSOloQuOdSGqV2blVqxZ7V%2Fsb55VXgNNWJQe0t2lorDGUMM8l08GKpy60yWi%2B2vdhytjvPyWRZ9pySj2T732q0H0E4WdQFvjb3NJKT0oTN4nBL6Yp4ZzLcLK7ZdEXCD0O8R%2B82%2FoGhG9RqnjwsrWs3HCmp8YsjP%2Bc3B%2FP7q3yP0xqhjbyorQRs4y5mxmAK6OiR7%2BWZ2PgxsarF8gqAODOGNqD2cx6BOgT1tXRX5TnoScDq9nCwqvLwqsKtOXNmhcWXKsMewjUrN87R%2BFGGy04cU9EYgiTCYlpvDBjqkAcPQtGJKTzGsi0%2BFsJjyDyG6D27NjJIViacPLPgOg81TbkpsAEuIukg6pe2v8YIi%2B241bAgfpHyas6egmazbOJQnPWYCA4%2BRPGCRDzKxjFhgxCVUE3qEu7FsTXUSBaXCf0qdRdWVTPCyqeFv%2BDZj%2BlppnMnnY%2FB%2BZ0YcXCo4IwFOBT6ZDp8mFy7QxrdxztglYKd3%2BOLDnQjJ2Uj5sxoD18%2F3FwKF&X-Amz-Signature=0c5bb097a949d664b2272832ef5f79ececcf1deca922bedb7a961dc2dd784053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KYBZ7RX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsz1iIiRHFtaVF1WcLQfsBYmETBmxlNcOs7jpF1xhr4QIgO18GpdfEycQ8hFJmV8C5wLhBRbulQPMaoWnPacbFYOsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDjxvuouKv0qIbIrpSrcAw3o1DSMvfUCCqA5I7eQCRjwVWMKxqidfjiA1bo0ukdR%2FOv2qS406XIdDYWPw9toyTdiL8F7ZhjxKFFPtfQaiviub97%2FnNSvKOI5owEeqi%2FuJWCkYo9tQvC1MIA8ylSywGa7o3OcPyKNo%2F36tAbBMzhciHgSSNvxRVTrFe6%2FMPCPbx2HR5Y%2FnOxGZ4JvsWevGHNqY2TOfQd4Ew3C8hHXC5ULXY3IQEWzEX44b%2FGrD%2BAYf%2FsRVfjO7TuNQc6Y8BvtlXVSWMynXq3TWqgOM7UBPMPArlkINDFa5q7BXYGZPH1yZuKFE4qzrOZgnQBbA4KhM7jgavdvkevsnbss8rTu78znIoRe0GxYNaYIrH3iHv1cOKvXkeYpyCABfq%2BpxOnzgiiDy18wKN8KOCG3zavdMyutfbm%2BmAhmTw5r6FN1RSKst0RrTpKxV1%2FxeNrb347EaBIxM%2B%2FYT8oNKJFT9M%2F5GweJHv0s7TGMQE0ORWgzJ%2B%2BG60WIDKxglQCO4EVjy%2B%2FnuP8p9QyKMRBx2Fjy9kQ3eBNvrfX2wX198cq5p%2FH7AWnr%2Bg9wRhtqwGG7ETznLQz%2BkVLvraZqEEbENMA%2B1flfZGniFrYbrmHwJBhgVT76BA%2F0bOLkqurmse6cr6e8MJyQm8MGOqUB30jAHw%2FgWlUWFmxs3i%2BAxQePbtkzByebkQg%2BbYTQza5S6bdn1e24toKHWaMOvtJ60yN%2BoQwivuyRUun7uGnxhTlE2zfeZCBaBiC09umXGdYIut8b5RgcIcG%2Bq6lrvvvu07Jl%2FQ%2FIz1cBWvBcM0rXQUVXEH3Vair6Axq1YgxawroqYpPyFhjBX3LvIvuaEfPsj8r49AgbHrOfBxFuu0ed7Il9J5lW&X-Amz-Signature=6eba23099cc9eaa99d2c47ded9ec40e8768a438cfc7e79b75e17310a08ceb319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKPRU3X%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWWSbrZg6o3W%2Bi%2F1OThR1SdAIcpkSeWyGgzdC5A%2BDWwIhAKtHarNh57uH7xaPVlrMAKqWaAzgq7x4wXr0k6oJV9chKv8DCBsQABoMNjM3NDIzMTgzODA1IgyAU0%2FgQJUC8k2hZN4q3AOz3oqEPc2ggBVNsXSKdyZg4sRR5HbPZRJHJCSXUHqdm40h8vb5YKhBNDiyOcUmooR5E%2F%2FcbvQ5syP48PCFlNA9nccPBdSpihfm7VPPh9s%2FJYNeqUTchcKm%2BX1k7fQBZ%2FW0CJ%2FWchvOdvX%2FgW2dKwymjL9E%2FzHYNthOdNvSCX82UTeMp%2FuK8TSA1pbiCBZTYe1Mh6Q46JRND5MVJYSCVpXPawxjyDVBToWnwri4beKhrM6bYv57Z6BJcSx5ZkrPt%2BEnRcB0OOR2wYPuvmIOIOPIabGjIBYJeFnm3EykVX1ptA%2FE%2B%2F3sk%2BTNelcqAJR0F%2B9MPtQ4ypeO21RU2B57dpRoVdDBBt%2FkAUP9bqQJYBiZPATE5%2FzjBB3kWZSXTAfX6Rl6FYvYan9uzANSXwcgBWTTRU7TWMH2AWjwgT96JLkgxLuoqiwS%2BYMofC13W7yUdzUvtG3LDYt9rDWWOmRPlyn%2Bgblt1cR%2FMrP5Ec06FeSvCD%2B1%2FVO5o8TguTVUDI4BHY6F5OwTpvxqfudkoXyhU2s%2BLeb7%2BYkkYLCCd%2Be3KBJsdPxUADYD6mLpaQjUWcaC2kXyJ7scqiaPSZ%2B4nOzVgEnXvT3WB4X4K6tyPZR1P3i6i0iuCq6CWQbKrRZ%2FfTCakJvDBjqkARVSIVbzCx3kvApuLAw27PD5CxdAMWaf%2F7s2ryZKxHBUcV1jmREPzxEFSEe2upT6OgPMe2gF9jnXNjGW2EbcTiYK4tgC%2FxZaq4lxRJkylEHJocMR7G8uraOnjTizHB9IuQuiycZ1igjzmdk2sV%2BB%2FPAdQ3KtACkx7csIXmZwgxFyaWu0t5p6po4EZl34xz%2FEro0KSom6WSnnlEdSo3RpcnOXAtw4&X-Amz-Signature=303382e9c234c4cecd9e929210872e36ca2225603c4e4bce3d6b283e582d959d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
