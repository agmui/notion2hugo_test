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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF7IZQJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKtWk7H8n58Tgm4Z%2BnTBDLlm7MeSVMhcLxpImlOPI%2BpAiEA26xLDicdptb%2FR6XcyVZ%2BLxIHx3QEiE9SJdi31ltASmMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYd%2Bc%2BMUe80arRXnCrcA9UEL9CmaDKwT69ctN3kT59cz%2F17ThqNYvVb6AXV4Z9jyY4G83aG%2FssdqlODA6r5nDbiHpBhK44K8AndDYaoTlOmJCjdBQU5KMpO1gvmQMhqcNKRevTha8ARvqA3%2FZUuUecDEVSlzvhLq4X2AP2V9ptlI%2BMGtZRo42lgdCiYcqcCEpiXxQfjyNu8i7DznjtxwgXDMYkdyJxDKYdQBzBR%2Blhv06l8uKTmDES5z%2BGUiLdWi1rzgv25VoudSYG73WRHBUnGL5vcxshAozvT4bxm8kgh%2BPFMgvCY05Cbp%2BfCcl2oPFWnMpmhEoAP0kN3iRxr58iPWLo99boLHH9vKhl74CsraL01lTdKLOfxz5WQblYoMg0%2Bk0D5cvLRiVxWXeQv4SSz%2FmMBbbwTAe9bpOJ8oGlgSbfiiA8vh%2F7VO0p77AQ65DV9uFxAcT2wIjs81XMlTqsZPMMKkiCbEZpfrvXHPswPRKmz0Rrot%2FbAAN00PJmMh9fs4z3wxh%2BVmYw%2FgLMummK3Ly0YIDC1MKDtHqHZ26jCG80XfOh7qLuS6triZR%2BhCYnrLl6RXWG7RzBRvvzrWn506abouOrFuor8MkQE5I75yeAJFH7AGKGeoQ%2FAtHzVV%2BUTmMvhWFKQ0wJWMLW9%2BMAGOqUBt%2F0D2QH3xMzmCM40Wyc5ojYxBXIvbUc322K%2BtbUtjZoq6u9ZOh%2BjkeClehL%2Bi57pm6jq62%2BE62NexSFIyVgqaOwwfH0nhuoDdVBvUeyJ7XiYNvjAZzTkVnBPbk4SPahScXtF27xeJpxgycluVewW%2BKjlBsYXhAtT7mlrjGYI6tbpLEXAXjLC3dOiXdbhfMByLah3Ij9q7%2FM65udsYaNLL%2B1Xg98S&X-Amz-Signature=4af9c69e64dbfc257db558032626f2d91e50c1a257c587e69ee99d030f462447&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF7IZQJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKtWk7H8n58Tgm4Z%2BnTBDLlm7MeSVMhcLxpImlOPI%2BpAiEA26xLDicdptb%2FR6XcyVZ%2BLxIHx3QEiE9SJdi31ltASmMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYd%2Bc%2BMUe80arRXnCrcA9UEL9CmaDKwT69ctN3kT59cz%2F17ThqNYvVb6AXV4Z9jyY4G83aG%2FssdqlODA6r5nDbiHpBhK44K8AndDYaoTlOmJCjdBQU5KMpO1gvmQMhqcNKRevTha8ARvqA3%2FZUuUecDEVSlzvhLq4X2AP2V9ptlI%2BMGtZRo42lgdCiYcqcCEpiXxQfjyNu8i7DznjtxwgXDMYkdyJxDKYdQBzBR%2Blhv06l8uKTmDES5z%2BGUiLdWi1rzgv25VoudSYG73WRHBUnGL5vcxshAozvT4bxm8kgh%2BPFMgvCY05Cbp%2BfCcl2oPFWnMpmhEoAP0kN3iRxr58iPWLo99boLHH9vKhl74CsraL01lTdKLOfxz5WQblYoMg0%2Bk0D5cvLRiVxWXeQv4SSz%2FmMBbbwTAe9bpOJ8oGlgSbfiiA8vh%2F7VO0p77AQ65DV9uFxAcT2wIjs81XMlTqsZPMMKkiCbEZpfrvXHPswPRKmz0Rrot%2FbAAN00PJmMh9fs4z3wxh%2BVmYw%2FgLMummK3Ly0YIDC1MKDtHqHZ26jCG80XfOh7qLuS6triZR%2BhCYnrLl6RXWG7RzBRvvzrWn506abouOrFuor8MkQE5I75yeAJFH7AGKGeoQ%2FAtHzVV%2BUTmMvhWFKQ0wJWMLW9%2BMAGOqUBt%2F0D2QH3xMzmCM40Wyc5ojYxBXIvbUc322K%2BtbUtjZoq6u9ZOh%2BjkeClehL%2Bi57pm6jq62%2BE62NexSFIyVgqaOwwfH0nhuoDdVBvUeyJ7XiYNvjAZzTkVnBPbk4SPahScXtF27xeJpxgycluVewW%2BKjlBsYXhAtT7mlrjGYI6tbpLEXAXjLC3dOiXdbhfMByLah3Ij9q7%2FM65udsYaNLL%2B1Xg98S&X-Amz-Signature=aac19ad221aa0c0755e25ae16aae41e4c88bc65bde27e652bcbdb033c69423b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF7IZQJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKtWk7H8n58Tgm4Z%2BnTBDLlm7MeSVMhcLxpImlOPI%2BpAiEA26xLDicdptb%2FR6XcyVZ%2BLxIHx3QEiE9SJdi31ltASmMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYd%2Bc%2BMUe80arRXnCrcA9UEL9CmaDKwT69ctN3kT59cz%2F17ThqNYvVb6AXV4Z9jyY4G83aG%2FssdqlODA6r5nDbiHpBhK44K8AndDYaoTlOmJCjdBQU5KMpO1gvmQMhqcNKRevTha8ARvqA3%2FZUuUecDEVSlzvhLq4X2AP2V9ptlI%2BMGtZRo42lgdCiYcqcCEpiXxQfjyNu8i7DznjtxwgXDMYkdyJxDKYdQBzBR%2Blhv06l8uKTmDES5z%2BGUiLdWi1rzgv25VoudSYG73WRHBUnGL5vcxshAozvT4bxm8kgh%2BPFMgvCY05Cbp%2BfCcl2oPFWnMpmhEoAP0kN3iRxr58iPWLo99boLHH9vKhl74CsraL01lTdKLOfxz5WQblYoMg0%2Bk0D5cvLRiVxWXeQv4SSz%2FmMBbbwTAe9bpOJ8oGlgSbfiiA8vh%2F7VO0p77AQ65DV9uFxAcT2wIjs81XMlTqsZPMMKkiCbEZpfrvXHPswPRKmz0Rrot%2FbAAN00PJmMh9fs4z3wxh%2BVmYw%2FgLMummK3Ly0YIDC1MKDtHqHZ26jCG80XfOh7qLuS6triZR%2BhCYnrLl6RXWG7RzBRvvzrWn506abouOrFuor8MkQE5I75yeAJFH7AGKGeoQ%2FAtHzVV%2BUTmMvhWFKQ0wJWMLW9%2BMAGOqUBt%2F0D2QH3xMzmCM40Wyc5ojYxBXIvbUc322K%2BtbUtjZoq6u9ZOh%2BjkeClehL%2Bi57pm6jq62%2BE62NexSFIyVgqaOwwfH0nhuoDdVBvUeyJ7XiYNvjAZzTkVnBPbk4SPahScXtF27xeJpxgycluVewW%2BKjlBsYXhAtT7mlrjGYI6tbpLEXAXjLC3dOiXdbhfMByLah3Ij9q7%2FM65udsYaNLL%2B1Xg98S&X-Amz-Signature=41b6e10af6423d331be28151bf949b7a0546623d3c47c00d788fdd7c8fdb8e32&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQB73OWV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxCmINLOSGP7zUgrLhx1BnxEBmD84XfBHAzj0v8R5yaAiEAlFc1q8V%2BuzKqiC8tKDkJcaSaBLMafNP87di%2FHsko1rAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyos2pNDk%2F0clXMhSrcA2029kr7IOIVSuRxIEA2zfivvzeFASuKCNc3BKOjUCipnoJft8LGod3q5AHDDlOy%2FQ8wMFhL58fVQlg4XHnjT4qc%2FdHHOmcqUgjDgBH4oAu2XgBX7pp1gOAP1iVXCeXgz7WJ5UtpJrBYvrM1RavPlm9ZVoW9xKitlwOe%2FYxmTVpLwBF2pj%2Be19gNdoq8pEpiMXkOI78tP9MOY1ARi7aD5nntn%2FdqIBcsfA7sXPL3wMjGZACLP1zaX55ZbWSvEVaZSV5fc%2Be0vdNRt6ueecaqT2QKnZXxqpEAuJ%2FWtiRYEtFoil0iNwhlDQMsf7uPtqV2Y%2Bt9x%2Fyit0SPy8CGoFSfxwuiMFvmHqL2v0nZGqpNyAMO7%2FMwSQnkbZdVVhKkOiZajX4bGS607b1%2BjcEiiRMozCEvp8TEnwzGwMiLKp3XZWKBz%2B8viWyMwjPBsakhlAP0MzXoiXhEv2m8vqKYljpTsBsDYfsFXxUE%2F7PYLb%2FI1jHfsmbVnxmlNWXthv7k3nxCGD7ePZKxv2gHL8M4giYsxWD7GDN%2F2EATJrZD1ph4uBUWBKIe8%2BAyGAn7rxQY9HkxdQuWNYjP1%2FVTPwVkh4RQuUGdaYxhz2qQB8mQtUSuiXq3Xde59KrdLX2ez6WVMLG9%2BMAGOqUBmXDzyP037Lpa%2BwEP%2BTtcuJ6cqfNtaAhtYOPGoCAcF4RlIojQ68fRHgozINrInzYZlIxCNRwfPe09dzcoI7Qqnuwps2J%2FR9aWoZvm%2FMNnRVorTyEjlJ23y2M21MfdpqUR5jN%2F2DVSp%2BsL6xnjd8%2FQg5up%2Bg0z%2F3bM4je9JcFGdkZuXb%2FTvgYxfNpv7IPJazHQ911kAUNPR2KNDOaux8%2BJslty38%2Bd&X-Amz-Signature=7bac84aae7b8b92f773ec2db8401e2df18cb07debfdcbd51c0338919d78b5f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFXOR3Q%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMqvwxFE3holxUDvub6oYORf8v0umrxL33Bmvc%2FLvl%2FwIhAN4mV5EVQWiCOiR5sDkUoRxQXzgwqg0pOMJO4b7Gr8KFKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3nH0kwbQu%2FOMG76cq3ANQ1GCjPxSnu4%2BBw7oE%2BBNdu3QYB2KsRWyPxiSUOKuWg3sMGh5XQG7NB%2FgC%2FTTHu1CRl8evdpUAOldyn7GmF64Ig9XvPvqvRPCR5ErS0KI3CMzjUJiGKU78NxyGx9DXtOBd%2Fc6GSAzhDOQhlhXOrEVxXfFo%2B9tD7TXZQuRrLNy3Sj9rg16MvHrMVx0Op0AXk48kefTeUaMH98qFemC1ebHKWPVr23xPdnQQS8tCBnPiSrBAqYGx6Bv%2B%2Bwywq5V4q7t%2F8Mmwei6MqZb%2BMiBoYw31txQL9tDnNYXgebDvLOe%2FVxyFwf%2Fvgm7QAoGWgc1lFImNtq4LEMZIhfyubU1Opf4uSqj%2BAIttRYrcIvGNu7hdtGmUhU988vly1YXQfcgnlFqHawyydWRHoIfm6ciwIJhMryg%2FTd7fuvOifVAR6HqgO27Fnb5Mb6Qgs5zupsiABJiEgdr%2B%2FevspIyYQGxz%2FjiX2%2F3RTOumlYCOTYTSpChAx2ItqQMG2Oke5ftnAqDM646eGQBRcbX1l1N%2Bu3HmXQ6Ds%2FAphIekiXOATEtqGXxdrLILY2Geyq39H6VimtBn323NOXrVIFina5H1mYTCH%2FK7LZaCGxI7y24ACZDmuCtaVAmP0t%2FY%2FvoTLs6wBzDPvvjABjqkAaO1kCWmh4NkXFnxgO4tr%2BjT1JzxcftrgEaD9tGg9%2F66uAdsFP8csgBgtJa%2Bm0N9iqQh2CUne9gk2%2F1uZrwi0ozGCT0mxT1u01isN0DDitzrFyxcSE72GzpdH0pcPK2Zb10h5P7CRgbGhAK2r%2Bd6LShGDTjnyh1grwCmexrUqpuwk%2BWUcssTHtgsRlbP%2FlvmtCUCHscbsfV3pX%2B5pNCVFsYPZLzE&X-Amz-Signature=ecea788df39ca3517c6b711dd4fe41774825c6a70a6b014d039ea4ea83667971&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF7IZQJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKtWk7H8n58Tgm4Z%2BnTBDLlm7MeSVMhcLxpImlOPI%2BpAiEA26xLDicdptb%2FR6XcyVZ%2BLxIHx3QEiE9SJdi31ltASmMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYd%2Bc%2BMUe80arRXnCrcA9UEL9CmaDKwT69ctN3kT59cz%2F17ThqNYvVb6AXV4Z9jyY4G83aG%2FssdqlODA6r5nDbiHpBhK44K8AndDYaoTlOmJCjdBQU5KMpO1gvmQMhqcNKRevTha8ARvqA3%2FZUuUecDEVSlzvhLq4X2AP2V9ptlI%2BMGtZRo42lgdCiYcqcCEpiXxQfjyNu8i7DznjtxwgXDMYkdyJxDKYdQBzBR%2Blhv06l8uKTmDES5z%2BGUiLdWi1rzgv25VoudSYG73WRHBUnGL5vcxshAozvT4bxm8kgh%2BPFMgvCY05Cbp%2BfCcl2oPFWnMpmhEoAP0kN3iRxr58iPWLo99boLHH9vKhl74CsraL01lTdKLOfxz5WQblYoMg0%2Bk0D5cvLRiVxWXeQv4SSz%2FmMBbbwTAe9bpOJ8oGlgSbfiiA8vh%2F7VO0p77AQ65DV9uFxAcT2wIjs81XMlTqsZPMMKkiCbEZpfrvXHPswPRKmz0Rrot%2FbAAN00PJmMh9fs4z3wxh%2BVmYw%2FgLMummK3Ly0YIDC1MKDtHqHZ26jCG80XfOh7qLuS6triZR%2BhCYnrLl6RXWG7RzBRvvzrWn506abouOrFuor8MkQE5I75yeAJFH7AGKGeoQ%2FAtHzVV%2BUTmMvhWFKQ0wJWMLW9%2BMAGOqUBt%2F0D2QH3xMzmCM40Wyc5ojYxBXIvbUc322K%2BtbUtjZoq6u9ZOh%2BjkeClehL%2Bi57pm6jq62%2BE62NexSFIyVgqaOwwfH0nhuoDdVBvUeyJ7XiYNvjAZzTkVnBPbk4SPahScXtF27xeJpxgycluVewW%2BKjlBsYXhAtT7mlrjGYI6tbpLEXAXjLC3dOiXdbhfMByLah3Ij9q7%2FM65udsYaNLL%2B1Xg98S&X-Amz-Signature=45784efba013a7bf2df1a93a60f6f90b2a4a6816dc1afabf27f99aef40c23f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
