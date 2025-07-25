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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUVEXHWR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDBjgf%2BeKqb7lVY8S6wK25c%2Fo5RCc8WUJstR8hSmkZ33AIhAPIU45jrsRqS4DeC%2Fbb9LyaGrAMsR0wzD4585lz2XvR7Kv8DCEQQABoMNjM3NDIzMTgzODA1Igygkw0z19lZzTskCr8q3ANhOOl0Ip4pv96WmxJil2aoxa%2BA0bzturanfBxm0an8H2y2AwJPXIHTXZY3%2Fg5mQ1Y21WnyhLlBa3%2BwTaOVzwZRzVpkGXtlTcImd8a93V9h1oGneHYReNocapmrSdQuogfSa7h%2FY4uVdXpQ6TxtcXJYa%2BMHVJeRfwkWQocvwNuFzJkYFugtL2xT2W6gDcA82q99SbJf1SchqLDjCk3%2BtXEDPzDunj%2BFpOVYigQDbkSFSGiL1%2Fx9eohwRQtVUBH%2BANtlEy07v7dWFAAB2qti45lJYgRa8vc1QEuzibyO5WveSMn7V8YhEyFkuf3dYslNXsEtTdky6txOJKKkRjVB2QfLPZyWUUJawDMGfKjWrBRJozOMmEJ1Qyw8vSh%2BEAfGI9kK1GQ%2FKNxnRw9%2BpxTrCOLEW%2B%2FNOB7wuPgrW%2FualYDeNv6rS8870oVsDVv1m0eMCeiYJajHjX%2B5NXi5FrzPmxlbOEQlovj8V6FyKIqWp4lEs15p3veb7JtBeLfd4pMh3kRHdIOZlsxJdn2NWCKp0vcHhgYvk6q6aZKD8V3DtVxEY2%2F%2BHB0TzSsx%2Fv5%2BGhNfOmdlKepnuZ%2FM7uW1%2Bqa65tqOU1ml35FSuSYpXbkiuzBHO1nt64FdkBpus3gmDDCwvI3EBjqkAUC7CXxJNf%2FYykM8t9wUnS%2FgMERT2LIUgxk10EFKVlfUuYzrv1qFyaznMg4gM3X8wc9leEgb2rL794bTiVFml%2BJps4He8mPxbahT%2BbKQ8Lxl01sgwfAGt3aoLy56HlMCt5oJsok7DW6aLLYKNx6p1ZWY8NQqUdq7RZAELg1U6%2FhUWI5GrDNMfgTvS5cmNuQA4vtCwa%2FIRsyROauFHkwfRW5ClIUe&X-Amz-Signature=838731355549dc31a9eb6bb8a137d266e0d5624acfd0aca79d9a666ab8aa8859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUVEXHWR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDBjgf%2BeKqb7lVY8S6wK25c%2Fo5RCc8WUJstR8hSmkZ33AIhAPIU45jrsRqS4DeC%2Fbb9LyaGrAMsR0wzD4585lz2XvR7Kv8DCEQQABoMNjM3NDIzMTgzODA1Igygkw0z19lZzTskCr8q3ANhOOl0Ip4pv96WmxJil2aoxa%2BA0bzturanfBxm0an8H2y2AwJPXIHTXZY3%2Fg5mQ1Y21WnyhLlBa3%2BwTaOVzwZRzVpkGXtlTcImd8a93V9h1oGneHYReNocapmrSdQuogfSa7h%2FY4uVdXpQ6TxtcXJYa%2BMHVJeRfwkWQocvwNuFzJkYFugtL2xT2W6gDcA82q99SbJf1SchqLDjCk3%2BtXEDPzDunj%2BFpOVYigQDbkSFSGiL1%2Fx9eohwRQtVUBH%2BANtlEy07v7dWFAAB2qti45lJYgRa8vc1QEuzibyO5WveSMn7V8YhEyFkuf3dYslNXsEtTdky6txOJKKkRjVB2QfLPZyWUUJawDMGfKjWrBRJozOMmEJ1Qyw8vSh%2BEAfGI9kK1GQ%2FKNxnRw9%2BpxTrCOLEW%2B%2FNOB7wuPgrW%2FualYDeNv6rS8870oVsDVv1m0eMCeiYJajHjX%2B5NXi5FrzPmxlbOEQlovj8V6FyKIqWp4lEs15p3veb7JtBeLfd4pMh3kRHdIOZlsxJdn2NWCKp0vcHhgYvk6q6aZKD8V3DtVxEY2%2F%2BHB0TzSsx%2Fv5%2BGhNfOmdlKepnuZ%2FM7uW1%2Bqa65tqOU1ml35FSuSYpXbkiuzBHO1nt64FdkBpus3gmDDCwvI3EBjqkAUC7CXxJNf%2FYykM8t9wUnS%2FgMERT2LIUgxk10EFKVlfUuYzrv1qFyaznMg4gM3X8wc9leEgb2rL794bTiVFml%2BJps4He8mPxbahT%2BbKQ8Lxl01sgwfAGt3aoLy56HlMCt5oJsok7DW6aLLYKNx6p1ZWY8NQqUdq7RZAELg1U6%2FhUWI5GrDNMfgTvS5cmNuQA4vtCwa%2FIRsyROauFHkwfRW5ClIUe&X-Amz-Signature=6da2bc1d2979870d30cb9464b422590ae394faa43678d5223a9e13b8ebaac48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUVEXHWR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDBjgf%2BeKqb7lVY8S6wK25c%2Fo5RCc8WUJstR8hSmkZ33AIhAPIU45jrsRqS4DeC%2Fbb9LyaGrAMsR0wzD4585lz2XvR7Kv8DCEQQABoMNjM3NDIzMTgzODA1Igygkw0z19lZzTskCr8q3ANhOOl0Ip4pv96WmxJil2aoxa%2BA0bzturanfBxm0an8H2y2AwJPXIHTXZY3%2Fg5mQ1Y21WnyhLlBa3%2BwTaOVzwZRzVpkGXtlTcImd8a93V9h1oGneHYReNocapmrSdQuogfSa7h%2FY4uVdXpQ6TxtcXJYa%2BMHVJeRfwkWQocvwNuFzJkYFugtL2xT2W6gDcA82q99SbJf1SchqLDjCk3%2BtXEDPzDunj%2BFpOVYigQDbkSFSGiL1%2Fx9eohwRQtVUBH%2BANtlEy07v7dWFAAB2qti45lJYgRa8vc1QEuzibyO5WveSMn7V8YhEyFkuf3dYslNXsEtTdky6txOJKKkRjVB2QfLPZyWUUJawDMGfKjWrBRJozOMmEJ1Qyw8vSh%2BEAfGI9kK1GQ%2FKNxnRw9%2BpxTrCOLEW%2B%2FNOB7wuPgrW%2FualYDeNv6rS8870oVsDVv1m0eMCeiYJajHjX%2B5NXi5FrzPmxlbOEQlovj8V6FyKIqWp4lEs15p3veb7JtBeLfd4pMh3kRHdIOZlsxJdn2NWCKp0vcHhgYvk6q6aZKD8V3DtVxEY2%2F%2BHB0TzSsx%2Fv5%2BGhNfOmdlKepnuZ%2FM7uW1%2Bqa65tqOU1ml35FSuSYpXbkiuzBHO1nt64FdkBpus3gmDDCwvI3EBjqkAUC7CXxJNf%2FYykM8t9wUnS%2FgMERT2LIUgxk10EFKVlfUuYzrv1qFyaznMg4gM3X8wc9leEgb2rL794bTiVFml%2BJps4He8mPxbahT%2BbKQ8Lxl01sgwfAGt3aoLy56HlMCt5oJsok7DW6aLLYKNx6p1ZWY8NQqUdq7RZAELg1U6%2FhUWI5GrDNMfgTvS5cmNuQA4vtCwa%2FIRsyROauFHkwfRW5ClIUe&X-Amz-Signature=c2e3bb5aba68f68b80eb08729395b1862c3c73ac5a47cce5f83820c59eb85aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNKTRWK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIFzHOnicXvJlqjjPCrcIdtZ%2Bk4VC%2Fz8DzE7E0E8s6tyuAiB2INRfR5FpMXbQ68fvIjbDBqlI43BHpW%2FY3WS9MI4q%2Fir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMtO3%2BCC2X0h5NKLewKtwDVGlICy8k4lIuhm%2FXiYuaKQhi72jjcaPTgYOq3868is7yVaHEPT9QR%2FrQfkbSQz7YHHe0jrfHOptMQWUkA3IraksiPMslX3ypnxJSsQw2SlfHx5tpWlI%2BbHgGFe%2F3IL5i6Sr1QoPVJ0DPc3KxlTlgY0S3INTI%2FDcSO2fdhgh6jLxo%2Bo0H1xzQNNppPp3BBhIMGYc2iZkqk17KXqB%2BGcieXvQqbL5SlO1TaI3R2Muw%2BjTxwavr9Y4RetT3ovN%2BN7HQJUlGA7Zma0BP%2BojeCx0PmwzNjSXPTsaQiI%2B%2B26UxMfvxm3lmT0MABbswSWtGH1bp2X%2FqhTpu%2FNIly50H4%2FGcWrkdST%2FkekyJlGaiS3N3SXeHqvTBR5X5l25%2B3FAizz%2B2jt2UGQJQWkj4W7HiyR0%2FcbA1c8haK0vHWR%2BqhSAXZ4NsN7tC%2BgkWB2ymxmE4xhJKeGb94Yoe%2FqfZO3UAO6kOEFRuBthgT0R4OXsoV2%2FKEs4kY1Gaq7CGs5zjuout4f%2FVM2M6FYvVFodoRqSiX9l%2F%2BO5GdW%2BTXC7YkkLKDpMwRlsQ5%2F%2BhJp6aX0ugZ23lrQGyMCgx%2FbNasB5m%2BWZson%2F%2Fgz2ek9dM2kBPr9ivbROZFbsK%2BTqdCKtUYK6mqy8whL2NxAY6pgH2R3z8XdVvUvhgOZesJjq8ZMbG8T%2FSpKzIjrT%2FRccPhp35LRXhhzGbOA3X8xlzWNwyeFhTDkr0KEOmRKc7FHwd%2BQGV%2F5NRPiTrVM3Z04Fynpqs4vUo6tpZdtd2LLupYM3%2FZ4dCnVstKNhCeWVRExEYKIGHlu0avodIpcWY9LkxBvBEhC6EFnLEOW7Ci98fyT9NfYVHg50dXDf1nTuO8xc9BoOLInkI&X-Amz-Signature=dcbfb393b2d82f83689bb5b0d2302b81ab2b35b1a6ad319b017d56e09ca698ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTPGOJNA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCtAOINEypcR2e6hEVr6194NG5v%2BiUdbI2DrvpsDmsVhgIgJTlQG5ANmoWGFojfiLqqMuSxW%2B0CTnIzKstN%2Fc0oUCgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPuKs35RjXMvEnO3hircA%2FbKx2hjXQ%2BdaCPGSlQGGI0Q5%2BMi1jckEpRLlwdaLThuQwiHut9DJL7yvBwOa8vQ6EdZPhB91gDiThYxELIFH9QUw%2BhqMsy8DZasHkCxX%2BqchvtA32w0sQA0zF8uC8VuwIUIDY02AOlXgxEFkZ0rniIkpQ8vrvsl0LcOcQFvjq4iCAyfN8VTbjqBZr8tfeLxN0Zz30KE%2BhJk6%2Fj%2B7P0O%2Br%2FyecfMdLNI%2FjJhIs4AmJq2IfJEcxBrrrp609vTZe2f7DrHRl%2Bkmd6FcsEcNt9zy90FOLT6usPqeTNXLOLQknORnDdbUIFv5DQ1W5%2BkX8R6inPJpz%2FquiyMj21avD%2BzwRH240wtXS3fSigQfIBlvB5tjFyDUgQeVIiOlqMES%2Fbwf8MrpiUypqUc6RyjQdyo%2BMG%2FYd0LwUYe5bL%2Fo%2BweszHwjvjFFOJCBm%2BEuPhiiaki3hwIgX4tDGMypuyY9zH6tjk%2F41XYm6RFbLn%2BYf0qW0gzElJQ%2BQMB3NrE167%2FhhPh9y9qYKqjOZZzpwkJnTMIiFEx42KvWxv2Sm7gS9bTaXDM2xO86dQnppWI6iG5O7Fu7VFog6c%2B%2BAQWKElH4Ktwby1IKWu%2BCHDIkdKaJkFBGPkij9z%2BcFyIr0fUsRKKMPO8jcQGOqUBDKUM3BlCnu0RjEuMr7Wkpz6SyfQcUv38sbatgTrABDtZ7X6i3aPnPfVLgsCyrL1Q7APOUIT7r5%2BySWmqL%2BdWqck78OAlb4Ed7VTjJT0vnvcmDc%2Fs9lpxmflYw1JysdtRjze8xern1FzmAa3IJC0BnN36xY2tMUoTz7LGQUu6BFgKemHZwnnS8V7abudGSQnmhs%2F0yGTwqhq37yc4qL8n7Dr2o5hF&X-Amz-Signature=d3214f4c80cb19b47526fd941dd9fc71cf6503ea2083f7fdb0b0fc76184c82ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUVEXHWR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDBjgf%2BeKqb7lVY8S6wK25c%2Fo5RCc8WUJstR8hSmkZ33AIhAPIU45jrsRqS4DeC%2Fbb9LyaGrAMsR0wzD4585lz2XvR7Kv8DCEQQABoMNjM3NDIzMTgzODA1Igygkw0z19lZzTskCr8q3ANhOOl0Ip4pv96WmxJil2aoxa%2BA0bzturanfBxm0an8H2y2AwJPXIHTXZY3%2Fg5mQ1Y21WnyhLlBa3%2BwTaOVzwZRzVpkGXtlTcImd8a93V9h1oGneHYReNocapmrSdQuogfSa7h%2FY4uVdXpQ6TxtcXJYa%2BMHVJeRfwkWQocvwNuFzJkYFugtL2xT2W6gDcA82q99SbJf1SchqLDjCk3%2BtXEDPzDunj%2BFpOVYigQDbkSFSGiL1%2Fx9eohwRQtVUBH%2BANtlEy07v7dWFAAB2qti45lJYgRa8vc1QEuzibyO5WveSMn7V8YhEyFkuf3dYslNXsEtTdky6txOJKKkRjVB2QfLPZyWUUJawDMGfKjWrBRJozOMmEJ1Qyw8vSh%2BEAfGI9kK1GQ%2FKNxnRw9%2BpxTrCOLEW%2B%2FNOB7wuPgrW%2FualYDeNv6rS8870oVsDVv1m0eMCeiYJajHjX%2B5NXi5FrzPmxlbOEQlovj8V6FyKIqWp4lEs15p3veb7JtBeLfd4pMh3kRHdIOZlsxJdn2NWCKp0vcHhgYvk6q6aZKD8V3DtVxEY2%2F%2BHB0TzSsx%2Fv5%2BGhNfOmdlKepnuZ%2FM7uW1%2Bqa65tqOU1ml35FSuSYpXbkiuzBHO1nt64FdkBpus3gmDDCwvI3EBjqkAUC7CXxJNf%2FYykM8t9wUnS%2FgMERT2LIUgxk10EFKVlfUuYzrv1qFyaznMg4gM3X8wc9leEgb2rL794bTiVFml%2BJps4He8mPxbahT%2BbKQ8Lxl01sgwfAGt3aoLy56HlMCt5oJsok7DW6aLLYKNx6p1ZWY8NQqUdq7RZAELg1U6%2FhUWI5GrDNMfgTvS5cmNuQA4vtCwa%2FIRsyROauFHkwfRW5ClIUe&X-Amz-Signature=212da825b797e38369597842c1588404a41e7af7f6033d370a036ba6cec73cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
