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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYT654C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBfKtSQg15e%2Ft5nCe7TL7Ysr2HDyauKEc0CglPZRZGAIgahBp5QG3hSPsQXdwIbrReyvUbFFqUR6zqH4xXzWnT5Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFYxoPt1F94X%2BXAf%2FSrcA1tep2BdihIWPFC1SpQH5Lp4vXShqC2isV9Z%2FCcCGDIcWQIHLymyfQvH%2F0nT0%2FmFZUh0hqS2wYmwAjxo52CH1gKfBzhDpwUgdzd6KfUh5mruDXEu4y9A52f0UFqeoHHKG37YXTyWZnpXPiGOBbvSmptVUUYUpozdJ7fcUVPLOM465%2BzZZhtGccTrZPScUY1TuCo1aP4GF4bmWuVRV%2BW%2B71henrdL5gTzMHjBsT5ivRgxAaGhWgr7%2BFDmv3xUgxzsgTzOTvBlbI94pJJygsDMkS25Bs4B1WyBmme2xXbLiK9c3cAZgEcU4k9eeQ5DqWYoWaWy%2B9MyhsGJ49ZtNB0WAdv%2BIFA%2BNw87G1F0MfLQgNSv4frICV1fur%2F7M6t4MLvj2fMZ9R28%2BUB9hm0HUe0%2F9woZPS2qvwecDtAo5iVBE7rO0VmcdlDh%2F7BbTUI6W9ydv8jiD3hRY3XHxSICDr3TKWBxXfWmObHJTxBztQAif7Rs%2BYkydioQFImmH8U4vJoD2BQUEAwIsJ%2BOM2bT8Azx7kuZ72KlfQVyu6Mj%2BmTdv1%2FV1U1qMBYWRso1yM0A%2B5M1eaex6K4IIuMPy%2Bq%2BGPMN97pEmuZrE%2BGtA8aYuFhMdsUxHOZ55h3QXlLNwyDDMIT8j8IGOqUBBFPoT%2Bd728VQCytxLffuVMi6b01UrXuzOUYUMgcm9tQyeYgTcWzlbnawelvYHQYp85TmH%2Bbb2hGw1V3Q1JqHClV3J2WcrxdEG94kGK60%2B%2Bdp4h%2FSBsrRC4Wa%2F%2FVtCITXrbrSnv9f%2F2SKWSJ%2Btsw7su5gWqyomX%2BgOz6MuP8Gn1%2B3Zp88lr5AzYaW%2F8Z%2FSXvIfIrXAY10ZbnpNHVFQbmcYS70u8YK&X-Amz-Signature=75e5f7059af55e5171048b3111717186d3fc6df59725d2fd79d9bfc500d54227&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYT654C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBfKtSQg15e%2Ft5nCe7TL7Ysr2HDyauKEc0CglPZRZGAIgahBp5QG3hSPsQXdwIbrReyvUbFFqUR6zqH4xXzWnT5Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFYxoPt1F94X%2BXAf%2FSrcA1tep2BdihIWPFC1SpQH5Lp4vXShqC2isV9Z%2FCcCGDIcWQIHLymyfQvH%2F0nT0%2FmFZUh0hqS2wYmwAjxo52CH1gKfBzhDpwUgdzd6KfUh5mruDXEu4y9A52f0UFqeoHHKG37YXTyWZnpXPiGOBbvSmptVUUYUpozdJ7fcUVPLOM465%2BzZZhtGccTrZPScUY1TuCo1aP4GF4bmWuVRV%2BW%2B71henrdL5gTzMHjBsT5ivRgxAaGhWgr7%2BFDmv3xUgxzsgTzOTvBlbI94pJJygsDMkS25Bs4B1WyBmme2xXbLiK9c3cAZgEcU4k9eeQ5DqWYoWaWy%2B9MyhsGJ49ZtNB0WAdv%2BIFA%2BNw87G1F0MfLQgNSv4frICV1fur%2F7M6t4MLvj2fMZ9R28%2BUB9hm0HUe0%2F9woZPS2qvwecDtAo5iVBE7rO0VmcdlDh%2F7BbTUI6W9ydv8jiD3hRY3XHxSICDr3TKWBxXfWmObHJTxBztQAif7Rs%2BYkydioQFImmH8U4vJoD2BQUEAwIsJ%2BOM2bT8Azx7kuZ72KlfQVyu6Mj%2BmTdv1%2FV1U1qMBYWRso1yM0A%2B5M1eaex6K4IIuMPy%2Bq%2BGPMN97pEmuZrE%2BGtA8aYuFhMdsUxHOZ55h3QXlLNwyDDMIT8j8IGOqUBBFPoT%2Bd728VQCytxLffuVMi6b01UrXuzOUYUMgcm9tQyeYgTcWzlbnawelvYHQYp85TmH%2Bbb2hGw1V3Q1JqHClV3J2WcrxdEG94kGK60%2B%2Bdp4h%2FSBsrRC4Wa%2F%2FVtCITXrbrSnv9f%2F2SKWSJ%2Btsw7su5gWqyomX%2BgOz6MuP8Gn1%2B3Zp88lr5AzYaW%2F8Z%2FSXvIfIrXAY10ZbnpNHVFQbmcYS70u8YK&X-Amz-Signature=e88641317e599dd2e09bcf801286d5266a3723544da8ae24aabfd43eb825128d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYT654C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBfKtSQg15e%2Ft5nCe7TL7Ysr2HDyauKEc0CglPZRZGAIgahBp5QG3hSPsQXdwIbrReyvUbFFqUR6zqH4xXzWnT5Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFYxoPt1F94X%2BXAf%2FSrcA1tep2BdihIWPFC1SpQH5Lp4vXShqC2isV9Z%2FCcCGDIcWQIHLymyfQvH%2F0nT0%2FmFZUh0hqS2wYmwAjxo52CH1gKfBzhDpwUgdzd6KfUh5mruDXEu4y9A52f0UFqeoHHKG37YXTyWZnpXPiGOBbvSmptVUUYUpozdJ7fcUVPLOM465%2BzZZhtGccTrZPScUY1TuCo1aP4GF4bmWuVRV%2BW%2B71henrdL5gTzMHjBsT5ivRgxAaGhWgr7%2BFDmv3xUgxzsgTzOTvBlbI94pJJygsDMkS25Bs4B1WyBmme2xXbLiK9c3cAZgEcU4k9eeQ5DqWYoWaWy%2B9MyhsGJ49ZtNB0WAdv%2BIFA%2BNw87G1F0MfLQgNSv4frICV1fur%2F7M6t4MLvj2fMZ9R28%2BUB9hm0HUe0%2F9woZPS2qvwecDtAo5iVBE7rO0VmcdlDh%2F7BbTUI6W9ydv8jiD3hRY3XHxSICDr3TKWBxXfWmObHJTxBztQAif7Rs%2BYkydioQFImmH8U4vJoD2BQUEAwIsJ%2BOM2bT8Azx7kuZ72KlfQVyu6Mj%2BmTdv1%2FV1U1qMBYWRso1yM0A%2B5M1eaex6K4IIuMPy%2Bq%2BGPMN97pEmuZrE%2BGtA8aYuFhMdsUxHOZ55h3QXlLNwyDDMIT8j8IGOqUBBFPoT%2Bd728VQCytxLffuVMi6b01UrXuzOUYUMgcm9tQyeYgTcWzlbnawelvYHQYp85TmH%2Bbb2hGw1V3Q1JqHClV3J2WcrxdEG94kGK60%2B%2Bdp4h%2FSBsrRC4Wa%2F%2FVtCITXrbrSnv9f%2F2SKWSJ%2Btsw7su5gWqyomX%2BgOz6MuP8Gn1%2B3Zp88lr5AzYaW%2F8Z%2FSXvIfIrXAY10ZbnpNHVFQbmcYS70u8YK&X-Amz-Signature=0215b29316f174016c76128d9c327379391ffa2e9836c6b2ddd0faedd9b43ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62V2GRC%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzxu7oxMK4uTrSJappL9iWgF5PY5zO3ero4WAHvFe0UAiEAxn%2FNVwLqaAzPJVurwYl8TN7DdHByKu%2FujbjVMUYRPjIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDItFR2oULTamKHYRcircA8rNGVRNyRZmg5ORZXQk0xNGMMaD6drEf3ig5HDfSwe0EpJ%2FrNSUIcv1jI%2FpLtwDCzCX21ebXp797g1rugxp%2BZ07TLY4UUnZ8926jQz63NtKG0zJNzepAY3aLjYdC%2FORjYlWx9XXw%2BS42QF%2BPg4fl1UTjOGzgu9ll6MsM%2Bb5JdDnXK%2BWhpVcCsTkuTTVSVBM4AxfrG812rgiRJXNsDi35qqlPYyKKQjrhg2218kb69M93DZ4PN4CfZ%2FEM1Z4rrCwl%2BY%2BybFzi6nCxP0RzUS4Ut%2B7b5Q0%2FCOj6RZt7jqU1KOJCjn4TtMm8IlMUDH4mvZ6G0KotDcg3kdHZfMY1OsAmJrEHhlhSpDtkUlFukTolwYgfLoO3WdUZvyzxx6ZTogy6FpXkj5LufZLTuxLFl4QOWXU15Bkzxs4HHjUal1NKKfdXyXDRLHLHfgsG79ePBPplnaZWrgrNlNUTmHFlIVwuAalX2tero5QTJR%2BaiQNmRFGvYCZMIuq5qd3RZUdC9suuMUEGq67uqvsY8C55zdiDHuEQAjSVhkXUh%2BStxQVUsgFZWn1vAA94D7hswK%2FSJI%2FyS2Fcm9fxpz078tD5gfPcRD1iQD5ip%2FWFzDACmzgovazpd97QuM57QBTdICrMLT6j8IGOqUB1GrZctASTH%2F45ziVw3KuHZ35AZOPcc03s0WW3YOyHq6gTHZkWfKyAVmlctdUmbvwKH9VbbXmtPGMllwcohKQl8p4arZNaDJcjPHaLm38o76zHo4nkzQjwy2DzutKz0dEccmaLBGtljyG5tTcfTqN4YQ1ERLpZgu7URBxB66Tb6UF%2BiAgvQA3IW8w6z8WGyW4H3u7ZCMls8NHzc0Vb1OBbw3Hgcog&X-Amz-Signature=a41b56341af67adc09508734e3810264780be1f0cf261b2b5b170fb0902fcd70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYI7ZDV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxPFMVD1L00FTElPSWwYiXvvGQvUxbRRSmbMLwZld2cAIgDX9fHTjXU2Urgx6hxt6nb8IzRrcsCi7PwO4EZFopTjcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIIc0w5m4jxXdSYsSCrcA%2FnX4Z%2FwF7KA02DuWwEoC9XYsKqZQsz9stlWkjOoZ2o9HzL%2FHjYxTdl0YuDAZOKI1Yr6XIUdzHYmtcdBJaUHYbpf7BJFgat%2FxNCYLjQrxjJJ7i%2BtP0YeeUpAtsS%2BSS9ILYg0J9E6P3KEAacP%2B0YeEZTDVb7LM8ct4rTAI2iCYWWoIwtAiDlGNfu%2FV9orAhb7QkSrhOLrRPl%2B8Q9eaoBKUihZFNa5fxI8deT8x6BIRr%2FGtitYERwG1kmDOpu4iQXpFE3CDEtDKnJm%2FR1mt3gn%2FaBO66ObAViReeY0RkNzLLZrJUVzAMGuryLa0kh1pmo0erekvwPBm2fwWvAlKX4CpPs2r1Huk7vmTNjGc874c5ubvioR69DQ46QB1eqi7Na9rm8Oj%2BfKkFc8IUeTeqYs71W3VQh%2FdeP7dBCzbxSHr5fYoB87Q3%2BzUJdIrTngLqjnqTYZZk%2F%2Bbjw6z8u3v7mt4rk4mgim1%2FxDCb96i0i38i3KIuz7Y9%2FOwsWBYcXKV1gaVtPiQfos%2FCFWpT0LzQCFR%2FidYqNqZS%2BhKy5LPOrPDoibo35L%2F4kREhVzrpXnGryr%2Fz8MdDf3xT%2FUKRmPT6ZDigSZ22P7iAiZfohvjdnVUrGoNLon3Xd2QAVH%2FsNgMKv6j8IGOqUBgasHM36n74879WrKu8%2Fbl5LJpo9%2FtYezUbvRRba523Ul2ZXzMQ7xZZ0W4iqmzi%2BWamV2F85Qqh4Jf5Xs1Lv6yiFjHtu8d6T%2BnX%2FZFK8WG%2B%2FS9ulE29qaPI2GwB8D6hS8%2BHqFWtxmKYjiXcaQiL9DWS2%2F5AJAepTZT2N8SKJ5IBMQE5Ub37el9G9laa%2FCluDHzbzF1Khw7VVRgOqRZBCIxkyFyZad&X-Amz-Signature=1de6babe9f8ce26a9f576a1a43ea6ad5d225f6f8fdb0335f2f6a996e1215ec5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTYT654C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNBfKtSQg15e%2Ft5nCe7TL7Ysr2HDyauKEc0CglPZRZGAIgahBp5QG3hSPsQXdwIbrReyvUbFFqUR6zqH4xXzWnT5Uq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFYxoPt1F94X%2BXAf%2FSrcA1tep2BdihIWPFC1SpQH5Lp4vXShqC2isV9Z%2FCcCGDIcWQIHLymyfQvH%2F0nT0%2FmFZUh0hqS2wYmwAjxo52CH1gKfBzhDpwUgdzd6KfUh5mruDXEu4y9A52f0UFqeoHHKG37YXTyWZnpXPiGOBbvSmptVUUYUpozdJ7fcUVPLOM465%2BzZZhtGccTrZPScUY1TuCo1aP4GF4bmWuVRV%2BW%2B71henrdL5gTzMHjBsT5ivRgxAaGhWgr7%2BFDmv3xUgxzsgTzOTvBlbI94pJJygsDMkS25Bs4B1WyBmme2xXbLiK9c3cAZgEcU4k9eeQ5DqWYoWaWy%2B9MyhsGJ49ZtNB0WAdv%2BIFA%2BNw87G1F0MfLQgNSv4frICV1fur%2F7M6t4MLvj2fMZ9R28%2BUB9hm0HUe0%2F9woZPS2qvwecDtAo5iVBE7rO0VmcdlDh%2F7BbTUI6W9ydv8jiD3hRY3XHxSICDr3TKWBxXfWmObHJTxBztQAif7Rs%2BYkydioQFImmH8U4vJoD2BQUEAwIsJ%2BOM2bT8Azx7kuZ72KlfQVyu6Mj%2BmTdv1%2FV1U1qMBYWRso1yM0A%2B5M1eaex6K4IIuMPy%2Bq%2BGPMN97pEmuZrE%2BGtA8aYuFhMdsUxHOZ55h3QXlLNwyDDMIT8j8IGOqUBBFPoT%2Bd728VQCytxLffuVMi6b01UrXuzOUYUMgcm9tQyeYgTcWzlbnawelvYHQYp85TmH%2Bbb2hGw1V3Q1JqHClV3J2WcrxdEG94kGK60%2B%2Bdp4h%2FSBsrRC4Wa%2F%2FVtCITXrbrSnv9f%2F2SKWSJ%2Btsw7su5gWqyomX%2BgOz6MuP8Gn1%2B3Zp88lr5AzYaW%2F8Z%2FSXvIfIrXAY10ZbnpNHVFQbmcYS70u8YK&X-Amz-Signature=595cff6b71873e2c250c712345b7decd4321a3f5bd6ac2928d621f5a8dcba37c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
