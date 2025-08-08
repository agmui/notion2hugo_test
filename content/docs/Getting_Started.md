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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YV4YVT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCuutBmH22xnmB3aCDtt941SPFcuz7b1ZjMQXGE%2BOb3lgIgN51XqVlQuchskvh6IfhvBN3J3brTNselGS7wGmI4780qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgVn53k8Rs5VZ6sVCrcA5Spb9h6p9d4xeLi0nNrMKK6P%2FlMpV85dFI4wfbYP%2B0PddSos1ogfBHH66BFlA4ceyYNAwTHbyfVFuW0Ttgfx8RSZ4AACWydUMT9uBL2pWTFcGmQbW9xqbEN6A5inmzV7Iv7TNRWSnMkQGtKvazzU56ufNOD%2BOYrio8oFhJF1kk%2Fl6hvqOrv0o2w4yToOYL1ErWtnKZI%2F0QLup0yDK%2FThkvp1z%2BP4E47WJQ0xC5Yydir6VWAb4rbPNswoiBbSlKY0l44Xo8KmyltfP3BzuSWxbbjs0Wa9k%2FbrhSrr6I5IavT6o1eR3MLWMRgdJwNfn5mcMe51sM3FieAIww5M1fVwoVm4Dpdcb%2B1tGv%2FIaUB8YllYBU2KJFyOkU0%2FdFTtc5DIlUmvCNkv3VPuGHIeQQsbOssAC5Bx5w5pjHL4I7dzS%2BaVUxowbf9uc31vGAQyWcSVYEMutl7zIaJk5TqYGTwizphOlZBfChXyWKs9Eiw6oBQzXB2%2FKea0NgUt2MrW9teX0peSDiQyhHwKy0uIMuYG1gzJ4mr%2BRcjATCnplYOHsXKvowU829PbB9FwOTg76%2FQy84PVMfWYJUKeh3SIyTY9KnU%2BTrVkPNRrQhh6b4adwJNNK8szqtDpSQENXcqMJGu1cQGOqUBa%2BtIIc0oniuu2rQ%2BBP0S30NpdhRWEZjXAT7HzXiQvhucKZvHTQs8xuWRk2NpvId1PXfxStku913NnNdDuVay8ua4d2arm%2F5edy4eC%2F%2FOJ%2F2%2F7%2B%2BJtgkribr7Wt05uTtdSLJptv2giXbBi%2Fn93ovkgctGXyVQSQR0TiYnN8g7piUpWkLwift7qEoGZv%2BHhm8kJK%2BZ5qn3SPXYzNJTqKQo0AlWu%2FcR&X-Amz-Signature=7c44ae2a7d04d07ddc509702c49adf79983eafed351fbdf76df7e5a142a777de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YV4YVT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCuutBmH22xnmB3aCDtt941SPFcuz7b1ZjMQXGE%2BOb3lgIgN51XqVlQuchskvh6IfhvBN3J3brTNselGS7wGmI4780qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgVn53k8Rs5VZ6sVCrcA5Spb9h6p9d4xeLi0nNrMKK6P%2FlMpV85dFI4wfbYP%2B0PddSos1ogfBHH66BFlA4ceyYNAwTHbyfVFuW0Ttgfx8RSZ4AACWydUMT9uBL2pWTFcGmQbW9xqbEN6A5inmzV7Iv7TNRWSnMkQGtKvazzU56ufNOD%2BOYrio8oFhJF1kk%2Fl6hvqOrv0o2w4yToOYL1ErWtnKZI%2F0QLup0yDK%2FThkvp1z%2BP4E47WJQ0xC5Yydir6VWAb4rbPNswoiBbSlKY0l44Xo8KmyltfP3BzuSWxbbjs0Wa9k%2FbrhSrr6I5IavT6o1eR3MLWMRgdJwNfn5mcMe51sM3FieAIww5M1fVwoVm4Dpdcb%2B1tGv%2FIaUB8YllYBU2KJFyOkU0%2FdFTtc5DIlUmvCNkv3VPuGHIeQQsbOssAC5Bx5w5pjHL4I7dzS%2BaVUxowbf9uc31vGAQyWcSVYEMutl7zIaJk5TqYGTwizphOlZBfChXyWKs9Eiw6oBQzXB2%2FKea0NgUt2MrW9teX0peSDiQyhHwKy0uIMuYG1gzJ4mr%2BRcjATCnplYOHsXKvowU829PbB9FwOTg76%2FQy84PVMfWYJUKeh3SIyTY9KnU%2BTrVkPNRrQhh6b4adwJNNK8szqtDpSQENXcqMJGu1cQGOqUBa%2BtIIc0oniuu2rQ%2BBP0S30NpdhRWEZjXAT7HzXiQvhucKZvHTQs8xuWRk2NpvId1PXfxStku913NnNdDuVay8ua4d2arm%2F5edy4eC%2F%2FOJ%2F2%2F7%2B%2BJtgkribr7Wt05uTtdSLJptv2giXbBi%2Fn93ovkgctGXyVQSQR0TiYnN8g7piUpWkLwift7qEoGZv%2BHhm8kJK%2BZ5qn3SPXYzNJTqKQo0AlWu%2FcR&X-Amz-Signature=146ce13bd5695854a00df94e77270a33c7f96fe7f110291f3a4f92263aad2e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YV4YVT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCuutBmH22xnmB3aCDtt941SPFcuz7b1ZjMQXGE%2BOb3lgIgN51XqVlQuchskvh6IfhvBN3J3brTNselGS7wGmI4780qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgVn53k8Rs5VZ6sVCrcA5Spb9h6p9d4xeLi0nNrMKK6P%2FlMpV85dFI4wfbYP%2B0PddSos1ogfBHH66BFlA4ceyYNAwTHbyfVFuW0Ttgfx8RSZ4AACWydUMT9uBL2pWTFcGmQbW9xqbEN6A5inmzV7Iv7TNRWSnMkQGtKvazzU56ufNOD%2BOYrio8oFhJF1kk%2Fl6hvqOrv0o2w4yToOYL1ErWtnKZI%2F0QLup0yDK%2FThkvp1z%2BP4E47WJQ0xC5Yydir6VWAb4rbPNswoiBbSlKY0l44Xo8KmyltfP3BzuSWxbbjs0Wa9k%2FbrhSrr6I5IavT6o1eR3MLWMRgdJwNfn5mcMe51sM3FieAIww5M1fVwoVm4Dpdcb%2B1tGv%2FIaUB8YllYBU2KJFyOkU0%2FdFTtc5DIlUmvCNkv3VPuGHIeQQsbOssAC5Bx5w5pjHL4I7dzS%2BaVUxowbf9uc31vGAQyWcSVYEMutl7zIaJk5TqYGTwizphOlZBfChXyWKs9Eiw6oBQzXB2%2FKea0NgUt2MrW9teX0peSDiQyhHwKy0uIMuYG1gzJ4mr%2BRcjATCnplYOHsXKvowU829PbB9FwOTg76%2FQy84PVMfWYJUKeh3SIyTY9KnU%2BTrVkPNRrQhh6b4adwJNNK8szqtDpSQENXcqMJGu1cQGOqUBa%2BtIIc0oniuu2rQ%2BBP0S30NpdhRWEZjXAT7HzXiQvhucKZvHTQs8xuWRk2NpvId1PXfxStku913NnNdDuVay8ua4d2arm%2F5edy4eC%2F%2FOJ%2F2%2F7%2B%2BJtgkribr7Wt05uTtdSLJptv2giXbBi%2Fn93ovkgctGXyVQSQR0TiYnN8g7piUpWkLwift7qEoGZv%2BHhm8kJK%2BZ5qn3SPXYzNJTqKQo0AlWu%2FcR&X-Amz-Signature=dbd23bf82a8c9c42dbb29dc557efa29e4817442618b97506388561141b109575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPWCCRY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBsrmhndfYf4jT8kbNv7DliSJWAkrSz%2BeSmLPK37YhwyAiEA6sWYtS3gLTRXvGCX0RjjnANdTWw724FbsOMKgNlhhiwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLoQOkrwdFmJf%2BbaLyrcA6S5mfhVskddoxDBtOoQqLn4wkcP6y%2FpDEbM4HLw%2FIwNf4YvHHIQkgvjVrVYUTYxBXxTHOhbr6FPb3IU22CJdiBkpHzEIknIL2AxDfn2f4z8ijY6nJUPSGgF0fDk0kaLO4MXoktvaxr%2BZV0jMcHaAMELO2BVKLpgqiDnY21YM%2FZkyETFsFqeShws%2FhXZJDihUO92IwgtxlLjHsc5DZTRa12bkmV9%2FdG5aj0LEZh9QpUzzlte9SqbZLhueK4%2BVc06tzcvB5IJsngnk8BpjiR5Kbshlk08haebyFMD%2BHA7OdThBq7UtoqyUtVsXnTF0XGvAvjp2JTv%2FjL7GLrLEIYl8id3luuKCpFHI9ZJTZTNL3%2BqyRrztt2%2F06Cs1cCR13Tywdy2LLcQ94gG02Dk8%2FnZGDzan4VFqv8ZTLs%2FRZOXFla3dmCTK2pfaqgZqGNezRnNJCdAqn84Zp7Gshcak6yZQA8AtIrknJGF%2FtJ8lHdakYikRFn1lJ%2FYBDfI7xJjUwuiNCNpfZmysd7MnPGGttCX7DkuzxR8Jdi1F2%2BjnuAmGLZaL%2B0v0vozgvMnIVH9xd6CMqCdVkfZ93ZgGCQH5PfaWwLhDPsw0yjqwXT4cnFTH9Iz9AhBm3wk0GwONRtvMI%2Bu1cQGOqUBm1vDXGeIt7y2yPsagtp51jJL2i943un%2FcA5twKs3ovyAQTfR%2B5jnX18VA5cqM%2FY%2Btfig%2FcZhy98VvLB5qG76ql9ENkO7pF%2BNSXwoxP6BM6F4wdzrLtU4k2VZC6ZUriYNZrvcBqUZ1cRoZKkDVO4Bya8EOY0CmMxNnb%2FQavr%2BHxiWEdHq7Sv%2FMwI1aV%2Fz%2FcVBHX7LcLwMEsUkX22vADOUsZ8zWQcM&X-Amz-Signature=ed8ddcfa466e555d9507fb6eb50dde0d027566d349d80fcf8d63b41ac77baa29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LJDRMW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDqZSki4yVJGJtOSs0ibGSfdDcz4Ccnpem3NNZt7yLKRgIhAJ7PgT0YZqAgQJzXPHREp14r%2FRwSe9rzYR%2Bl0EjFqYo1KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0TWdGbouzzY7zq1cq3APlW7DWhm8mRLbzpgENN%2B5OLEQTGixX6QtJgNgYb%2F%2F%2B3ZRlIsF42d1jHqfBsvT%2F95lAy96HMsPSd7nnforWXP9GjoO%2B1LbUglzbq1Pne4wjX9USgh5MdF6b4vsbwLiDyxPA2YpSQIlfKBwwB348z38lJarRxBgQgqPntWMrIwHZfcFp8BmAU63USaceN0zcIgXP04qcJtZXqu2GRvBaCbNvmU5yfY57ikDgm4dzd8cPOFN19GFc2uXEAHtJbY4qP0PZjOMBrz%2BigZybOBrwY2WiaMuKLGv02w1y9ZKwFSRS28E5wfmO9q5kS4KsItnQfqYJoJAr7tX1jYrdQ2b0jG0XH6t9RAZkzaCXyJvwUDE6IQ%2B0u6bv1S%2FXSm3Lq8kOOWTZvvM%2BdA842Ln9xUqIWMPmf2uvCyfkegYRSjIvivPSQFaDn%2BPjukxX0oLugjQFYN3jmWmlLSXIVvMTqOltmCZtIcE%2FlIh%2FOhz5FHI598W9dm1MGvFT3D99r3g8Y5MD%2FKwQjqzcl0zWAiZE7wo%2BqT0OnADfB%2F%2FD1RQPEU%2FuuJCxnfOCTHc1gX2%2FC0iCoKLl2BvdPEatYfZ469xKulPXvY64T3E7ZH0mqvBdlmR8P%2B7gk2Ub2FrUSmJxJAs6ejC4rtXEBjqkARVGo1d5c6cMvRe%2BeEHxVNPqE94iGDOAISxUQUpEz60tEnSV4x%2BdcrhaokJH7V3KYG4BpDaf1YiUeHumqFY3zPipu9AwYNbGRZr24y0L3srFfcxS3bpK4BOZaAhV6rhMmVsgwzO9osTzIVdg0PZvtomfKT7i9Cku1ajWUqpmXtPhmTCn6ItHT2E%2FEwZuRoVfkSqlyhnwnf5C5xTugacN3Yt%2FUc7K&X-Amz-Signature=8393a67c253203b45e58ea183e38be59acab1a797ab54927737f539cfac57ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YV4YVT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCuutBmH22xnmB3aCDtt941SPFcuz7b1ZjMQXGE%2BOb3lgIgN51XqVlQuchskvh6IfhvBN3J3brTNselGS7wGmI4780qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgVn53k8Rs5VZ6sVCrcA5Spb9h6p9d4xeLi0nNrMKK6P%2FlMpV85dFI4wfbYP%2B0PddSos1ogfBHH66BFlA4ceyYNAwTHbyfVFuW0Ttgfx8RSZ4AACWydUMT9uBL2pWTFcGmQbW9xqbEN6A5inmzV7Iv7TNRWSnMkQGtKvazzU56ufNOD%2BOYrio8oFhJF1kk%2Fl6hvqOrv0o2w4yToOYL1ErWtnKZI%2F0QLup0yDK%2FThkvp1z%2BP4E47WJQ0xC5Yydir6VWAb4rbPNswoiBbSlKY0l44Xo8KmyltfP3BzuSWxbbjs0Wa9k%2FbrhSrr6I5IavT6o1eR3MLWMRgdJwNfn5mcMe51sM3FieAIww5M1fVwoVm4Dpdcb%2B1tGv%2FIaUB8YllYBU2KJFyOkU0%2FdFTtc5DIlUmvCNkv3VPuGHIeQQsbOssAC5Bx5w5pjHL4I7dzS%2BaVUxowbf9uc31vGAQyWcSVYEMutl7zIaJk5TqYGTwizphOlZBfChXyWKs9Eiw6oBQzXB2%2FKea0NgUt2MrW9teX0peSDiQyhHwKy0uIMuYG1gzJ4mr%2BRcjATCnplYOHsXKvowU829PbB9FwOTg76%2FQy84PVMfWYJUKeh3SIyTY9KnU%2BTrVkPNRrQhh6b4adwJNNK8szqtDpSQENXcqMJGu1cQGOqUBa%2BtIIc0oniuu2rQ%2BBP0S30NpdhRWEZjXAT7HzXiQvhucKZvHTQs8xuWRk2NpvId1PXfxStku913NnNdDuVay8ua4d2arm%2F5edy4eC%2F%2FOJ%2F2%2F7%2B%2BJtgkribr7Wt05uTtdSLJptv2giXbBi%2Fn93ovkgctGXyVQSQR0TiYnN8g7piUpWkLwift7qEoGZv%2BHhm8kJK%2BZ5qn3SPXYzNJTqKQo0AlWu%2FcR&X-Amz-Signature=92c418f1a5e1d1114daaffb04928eb6d9af0114dc4898d3447ad23aa55b1a9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
