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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA2ODZ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE59t8FDwrMwC99Q8cXxTkGHYeo2c7tJHufwwz3HxC%2FJAiEA7dqDi622ML2d2iAA2fmQxv2FJ%2F9%2Fhtb96eyI3sn0%2BhoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiXfeeoOToPIKmExyrcA55yevdTx4v%2B1XtiKW%2FSwumuu5YDjHYVBzG44lIDgoFMnHdkSMaiaBV83WdsT59Gvc8Z3uRnuVoNSMdL5zHgCtQuf4DJ25qlCW9VMOHJ0WNMoM97H26qcRHy0Ij2F25QGTWT5yaxrygc2mPoURbY9sKCrEL04Os9DGbhTcHJxAtbRTIaqXr%2B5%2Bg2zdJbGyB4sJkkexhgROFo6m8W8SW8kJAGSf4EnpCTj2X9FS%2F5T7frB7NmTpaxUTFaP9BTxedMh20RHRPW5rC%2FnBUyN31d1YY7bFQS0bBk1Yl%2BPpP6CkZODJi6jEgUU8l5zF3iY1yZApOIfTbUWhcIqA1uFP0382baccQ6keO4WZt5pjDEyrgiuoUK%2BV0g9odPqDxtUjT07DD%2BgMj6xwSMEzaQItDqIWHhyDVeKU7T%2FNYx0Mdf21wZs6qRazQgm3v8cSar95mCv%2FsmWzNzlWouXEGxKaUq9w2i1sas64Et6W%2FeDJVf7ti3s1qoNDT%2FDuTsA00297KPIvSZo1N6SvTdXmWkk5dIqyotqaSz3jrnhIwnc%2FRfCtGRBpXQ6K4aZZJzoopaCNxZtPcPqpyoNcAKy4SYi0LlmubEqXQhKXIP67Yx%2B2%2BGwTZ1B6jHaO3idokmVFJMML3178MGOqUBZY1xZYQeqtcjVFHAEaD3C0iyQhU%2B%2B8gJkuRVlqsPlgc3jGZdC3%2BGMOAB%2FtNHMgZpeM67MKeLdV7S8yqnxUJs46HlXZTHz5pvh%2Fizojp%2B9rtQ000nTUCKZ6o%2Bq2%2BET46kkQjwWxm9PxuTrNBZMyATp%2BX3KeZvtUzeGpyqFa2cPJaXW%2BLi1WVaf638Pgh4DIch2Pzm99dlKWdgVcR%2FKkNitbyCMoz5&X-Amz-Signature=194e928f3dcb2dcc84af8c6237cc90c11c4da7d3285a7e1709282e2448240e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA2ODZ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE59t8FDwrMwC99Q8cXxTkGHYeo2c7tJHufwwz3HxC%2FJAiEA7dqDi622ML2d2iAA2fmQxv2FJ%2F9%2Fhtb96eyI3sn0%2BhoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiXfeeoOToPIKmExyrcA55yevdTx4v%2B1XtiKW%2FSwumuu5YDjHYVBzG44lIDgoFMnHdkSMaiaBV83WdsT59Gvc8Z3uRnuVoNSMdL5zHgCtQuf4DJ25qlCW9VMOHJ0WNMoM97H26qcRHy0Ij2F25QGTWT5yaxrygc2mPoURbY9sKCrEL04Os9DGbhTcHJxAtbRTIaqXr%2B5%2Bg2zdJbGyB4sJkkexhgROFo6m8W8SW8kJAGSf4EnpCTj2X9FS%2F5T7frB7NmTpaxUTFaP9BTxedMh20RHRPW5rC%2FnBUyN31d1YY7bFQS0bBk1Yl%2BPpP6CkZODJi6jEgUU8l5zF3iY1yZApOIfTbUWhcIqA1uFP0382baccQ6keO4WZt5pjDEyrgiuoUK%2BV0g9odPqDxtUjT07DD%2BgMj6xwSMEzaQItDqIWHhyDVeKU7T%2FNYx0Mdf21wZs6qRazQgm3v8cSar95mCv%2FsmWzNzlWouXEGxKaUq9w2i1sas64Et6W%2FeDJVf7ti3s1qoNDT%2FDuTsA00297KPIvSZo1N6SvTdXmWkk5dIqyotqaSz3jrnhIwnc%2FRfCtGRBpXQ6K4aZZJzoopaCNxZtPcPqpyoNcAKy4SYi0LlmubEqXQhKXIP67Yx%2B2%2BGwTZ1B6jHaO3idokmVFJMML3178MGOqUBZY1xZYQeqtcjVFHAEaD3C0iyQhU%2B%2B8gJkuRVlqsPlgc3jGZdC3%2BGMOAB%2FtNHMgZpeM67MKeLdV7S8yqnxUJs46HlXZTHz5pvh%2Fizojp%2B9rtQ000nTUCKZ6o%2Bq2%2BET46kkQjwWxm9PxuTrNBZMyATp%2BX3KeZvtUzeGpyqFa2cPJaXW%2BLi1WVaf638Pgh4DIch2Pzm99dlKWdgVcR%2FKkNitbyCMoz5&X-Amz-Signature=530aa8086666eceb5337f13abdc41a9fe704db079596b1c78917f584bd95344e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA2ODZ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE59t8FDwrMwC99Q8cXxTkGHYeo2c7tJHufwwz3HxC%2FJAiEA7dqDi622ML2d2iAA2fmQxv2FJ%2F9%2Fhtb96eyI3sn0%2BhoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiXfeeoOToPIKmExyrcA55yevdTx4v%2B1XtiKW%2FSwumuu5YDjHYVBzG44lIDgoFMnHdkSMaiaBV83WdsT59Gvc8Z3uRnuVoNSMdL5zHgCtQuf4DJ25qlCW9VMOHJ0WNMoM97H26qcRHy0Ij2F25QGTWT5yaxrygc2mPoURbY9sKCrEL04Os9DGbhTcHJxAtbRTIaqXr%2B5%2Bg2zdJbGyB4sJkkexhgROFo6m8W8SW8kJAGSf4EnpCTj2X9FS%2F5T7frB7NmTpaxUTFaP9BTxedMh20RHRPW5rC%2FnBUyN31d1YY7bFQS0bBk1Yl%2BPpP6CkZODJi6jEgUU8l5zF3iY1yZApOIfTbUWhcIqA1uFP0382baccQ6keO4WZt5pjDEyrgiuoUK%2BV0g9odPqDxtUjT07DD%2BgMj6xwSMEzaQItDqIWHhyDVeKU7T%2FNYx0Mdf21wZs6qRazQgm3v8cSar95mCv%2FsmWzNzlWouXEGxKaUq9w2i1sas64Et6W%2FeDJVf7ti3s1qoNDT%2FDuTsA00297KPIvSZo1N6SvTdXmWkk5dIqyotqaSz3jrnhIwnc%2FRfCtGRBpXQ6K4aZZJzoopaCNxZtPcPqpyoNcAKy4SYi0LlmubEqXQhKXIP67Yx%2B2%2BGwTZ1B6jHaO3idokmVFJMML3178MGOqUBZY1xZYQeqtcjVFHAEaD3C0iyQhU%2B%2B8gJkuRVlqsPlgc3jGZdC3%2BGMOAB%2FtNHMgZpeM67MKeLdV7S8yqnxUJs46HlXZTHz5pvh%2Fizojp%2B9rtQ000nTUCKZ6o%2Bq2%2BET46kkQjwWxm9PxuTrNBZMyATp%2BX3KeZvtUzeGpyqFa2cPJaXW%2BLi1WVaf638Pgh4DIch2Pzm99dlKWdgVcR%2FKkNitbyCMoz5&X-Amz-Signature=edaafc6d04fd14617e72a5aa614190ed3489a5031a791c49a8ad0f0190ded8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADQLY33%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqbgokyO1XcW4cCdZRhRMP9TOsmBsTJQc0FuuhS%2BnYNAiB4QaQwkt7NJOvs6OKiPZetcrVhI0IVHMoYkjVJyrLf9yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfkbzLnTkgQETvGdvKtwDM9ljxOmPuFFM7Ii%2FdRyUFXJaN4Juix34R1gNct%2BVxWgAhNWYpdalo0hF1UJ56insO3OuKGAS%2BhQPaCJbgYPeRKfki1BzOQqmFDebHXwXaOFJm8p2huMP%2FrXn3wxrGqp3kH4O5P0SfmxOF1lGXfFpyjzyB5uv%2FRDm6YtqcAXKhI0W2wBh0ydlElwKsP7RRLHsO35JCGrEHvSavzk48Rv%2F7uzxieu5IikFXKXTWpVr92aFJQwQdpmOYMLOqZqnj7%2Fdr59WZ9IH3xO%2B3So7RE9QGL3A6G5oosaAdnp5VNloxmKQt%2B1SmvyggQdxxagXp5yCPq0kyOS7Ecext2jgcKIi9BrabkpO%2BTSKYQzQTyTere33TzrstRgmX0gmHlwNkjj3SiD6l6PuyaSm5Pj%2FP67Y001JYzGCJK2ketoAWC58LcbIrn5NyuHqUe687cBiDJjbOu1RK%2FRUwpZEdrulbhJB2TWgGrhXWT3LcrEd35wPp%2Fd59N8CVumQS7LKikHmT1sbntu1mTaYZH1PlR6Fh1ycFCqtkG7WT4nghxdfhLujKYLgoLkJALPkwaCKRUSJc9ZEt0JsptIfXLbE8y%2Fj4VmTS5EaCsHWknVDrNc35JdN5Z%2BPPXv0Qd21V8UMPtkwvfbvwwY6pgGOT0APlZN20mcSdbQD%2F%2FDn4MKueyRyO9rmTAXWQoNyrda6zzyKQIPnLsr3emXUSXuPYoPNZ937qVGiwwW%2FthwVj2AXvJl401y6RDvcOADhmrLE0W2Wycn4KKmo5Pwt0xgL2kPTYrNehfT6QeSzxwruVI63uYzzZZYp0U1Ce7DzOrEsYmRJZlMJy3CQJ%2FP8GBL2a97fjgagv9yC%2FOUIiaGNVaoUABJL&X-Amz-Signature=42a535fcad3c4272b4f2fc1d41bfb8bfc2787a93ced7dbefac9cea7c00e3a414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHVP3BBL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoWK5vqo3e6tGg9PvJf4mNp5usjBXsoC6qCOVNzxmC8AiAM2mVfE9VN8AMVUF0h29nn2JXgujkrPxTlK5ciIv14TSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF4cz8VNN0VDDZZfVKtwD%2BZn4p%2BzkS96Vn1uK9dKnfeL10CLJ2Rx7bEi5PYUATwJzegToxuUdPvkmPAT2aQANYk8Gyl5xSPbxYdcn2BxIygFi%2BR9eMnKMcHsVFdjTA5tbs2bG02HqRxkFnOzvZyIBakR4vKtrJjYI1Xlx1ACAdLUvunolW%2FlMUM1aC6GAbxnFDm4dl%2B16USbxmadHMDImVXyz7sOut6Ex4MS%2Byb%2BoyDGbjakKUqdpddqUdY3cGDSBUUWCUduWKLf6dw%2Bj%2B4EVS16a%2B0PK48iTzUy9utbcskK7cUctJ2v6xbQKAsAxcvkeze%2BmOy5rfMEZvZ6qC1wJtXqhqh6IkiddYgXtNQlUfLc1LaFDBv0v2DVKrn5pJPpCa4jlFiOJWR9fmlW08WabTZxBtqSBkjVv9wz6lmGO5b4f5v0nHcuRg1E%2FR6%2F97%2FJUlLeGs9K%2BYbpnRCBijq1Tf16ChF0C8tK%2Fss6bPOzgnGIQ%2FYeqG4owIsK94TDmHCjeijyyKT7OGZ02CGRfU1vZw2MYewqxwWvY5FoAJtoZcvTHB8JD8U%2Bae2MlupY3C8nnwsHUoX1%2FpV7W3BszEl6YU2hW%2Brl1VgFJlFatUE3Xhn6GIkDYPFyfxoZ7ENrecarU8tBDKicJYxIsISYw0PXvwwY6pgGwN6QiivcWJPFb2dxPEy6JRUY%2B5AvEOsOXAKpq%2BBSnpMqi2BPI6U5ldPRAmJZsE2OGAGZMvBgWfoXz7ayol9ZY7YCHtdzGgy7gw7N%2FBfSJpQW%2FJREq6nyntMosn5tlBuTQdmHjpOZHAWR8%2B24lfUiAss7ldDAp0Yj%2Bh8v2hy0%2Fm7V8dHYFCIrwNGwF%2BlZ%2F2jUDD8bgTeXfW6SHGn7baDa%2FyAITWzA7&X-Amz-Signature=f699b545ffd59f55af3194180cf5f7d55f4330971752320a8aebf64efa6642c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA2ODZ4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE59t8FDwrMwC99Q8cXxTkGHYeo2c7tJHufwwz3HxC%2FJAiEA7dqDi622ML2d2iAA2fmQxv2FJ%2F9%2Fhtb96eyI3sn0%2BhoqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiXfeeoOToPIKmExyrcA55yevdTx4v%2B1XtiKW%2FSwumuu5YDjHYVBzG44lIDgoFMnHdkSMaiaBV83WdsT59Gvc8Z3uRnuVoNSMdL5zHgCtQuf4DJ25qlCW9VMOHJ0WNMoM97H26qcRHy0Ij2F25QGTWT5yaxrygc2mPoURbY9sKCrEL04Os9DGbhTcHJxAtbRTIaqXr%2B5%2Bg2zdJbGyB4sJkkexhgROFo6m8W8SW8kJAGSf4EnpCTj2X9FS%2F5T7frB7NmTpaxUTFaP9BTxedMh20RHRPW5rC%2FnBUyN31d1YY7bFQS0bBk1Yl%2BPpP6CkZODJi6jEgUU8l5zF3iY1yZApOIfTbUWhcIqA1uFP0382baccQ6keO4WZt5pjDEyrgiuoUK%2BV0g9odPqDxtUjT07DD%2BgMj6xwSMEzaQItDqIWHhyDVeKU7T%2FNYx0Mdf21wZs6qRazQgm3v8cSar95mCv%2FsmWzNzlWouXEGxKaUq9w2i1sas64Et6W%2FeDJVf7ti3s1qoNDT%2FDuTsA00297KPIvSZo1N6SvTdXmWkk5dIqyotqaSz3jrnhIwnc%2FRfCtGRBpXQ6K4aZZJzoopaCNxZtPcPqpyoNcAKy4SYi0LlmubEqXQhKXIP67Yx%2B2%2BGwTZ1B6jHaO3idokmVFJMML3178MGOqUBZY1xZYQeqtcjVFHAEaD3C0iyQhU%2B%2B8gJkuRVlqsPlgc3jGZdC3%2BGMOAB%2FtNHMgZpeM67MKeLdV7S8yqnxUJs46HlXZTHz5pvh%2Fizojp%2B9rtQ000nTUCKZ6o%2Bq2%2BET46kkQjwWxm9PxuTrNBZMyATp%2BX3KeZvtUzeGpyqFa2cPJaXW%2BLi1WVaf638Pgh4DIch2Pzm99dlKWdgVcR%2FKkNitbyCMoz5&X-Amz-Signature=001ca0d3361c1223f302d2a40f0045bb2f508c30a58d3685e42aad6fe1c490e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
