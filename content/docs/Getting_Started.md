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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QN5PFFV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5xTTg1VvNodwD4HchzCILkTHOZVYtwf0SR0rOrBs7AIgEow%2FhrZZSm1VTuMVQLLjBahssGKOjZs2%2Fe2h1UVDlykq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNVbyupd7vewm1wqbSrcA%2BwtPy%2F6USwZrUgRe9IqzVYfioi2bg9KhtzBVB4WzJB7nfgv7ZIkqD%2FSITuY7LLkWNPn6gYgLjRiwPvP%2BlE1NKX590%2Fo2S2yQULtAVaU7j0y%2FvWnFxEjg455yV3O1Ex5JxwTCrg684psSJdRzE8poOjBYB6qezlS9rHP3cVxz8posm5MAMEKRMn7pVDVaKu0PZJwuDDgF62dLcoR%2BF7fQzF8SfN%2FObyW563sndc7IG8NG2WAMpS%2F2XrH3c903OopRug73HPEExCCVP%2BDe%2FiNkgQ9m%2Fv6L66462Wc0G%2Fr8JeR6%2F%2FenXGS40O4EFywGnd6ptX9pMpWmU1d%2BjPM2ccvsc0NCe42%2BSWiZ7uHY7iP%2Bu72ho5wwA3WxbxW3FnFyYEj8ACcyv88NiU1gHKsNybz9God36DiIXWHpL7VPeDroBwDsqOyV60Eij4W41mzmp%2BxudAw1MflQCN%2BxJK3J55bOBn4LWlSOoR9ZG8P2Nm7eOQwc%2BYvft4a5BDEaZCUycHkeWtktixc%2BTpbIg%2FaGznWQ3mIvCux4xBrg8EAz3XIq%2BIFp%2BjF4knCs2WwsPouEglV%2B8Wgvqrs%2BnZc1pbPi2TBprc9QEwd8fM4UoVb%2FSKwI0HSwdKzJzmmdbxu8g9UMNCn878GOqUBR15nqyNoTk1%2FNt1FLLW5LySaYsdmFd4%2FDhvfDJOZNGLkyMRz0lLHdDq1qRQ64l25Ei47eiFzUGfV59aktYdpowAql3sykt5kVHjfB2GpHqgCWTpxvj1Z6HBqBFhBJECnhS4ij9BROMtASy0UuTeWkJTZMYbW1i1xJDvnJdgq86EcF6H3xIyZUK99hsrop0%2BhL27ouNSbZX%2F8dbukCBS5Wk63Lc2c&X-Amz-Signature=9d175723fe72b6b320d78d8e93ccca9c027fb02dfe3852d0b75b36c68cfc90bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QN5PFFV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5xTTg1VvNodwD4HchzCILkTHOZVYtwf0SR0rOrBs7AIgEow%2FhrZZSm1VTuMVQLLjBahssGKOjZs2%2Fe2h1UVDlykq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNVbyupd7vewm1wqbSrcA%2BwtPy%2F6USwZrUgRe9IqzVYfioi2bg9KhtzBVB4WzJB7nfgv7ZIkqD%2FSITuY7LLkWNPn6gYgLjRiwPvP%2BlE1NKX590%2Fo2S2yQULtAVaU7j0y%2FvWnFxEjg455yV3O1Ex5JxwTCrg684psSJdRzE8poOjBYB6qezlS9rHP3cVxz8posm5MAMEKRMn7pVDVaKu0PZJwuDDgF62dLcoR%2BF7fQzF8SfN%2FObyW563sndc7IG8NG2WAMpS%2F2XrH3c903OopRug73HPEExCCVP%2BDe%2FiNkgQ9m%2Fv6L66462Wc0G%2Fr8JeR6%2F%2FenXGS40O4EFywGnd6ptX9pMpWmU1d%2BjPM2ccvsc0NCe42%2BSWiZ7uHY7iP%2Bu72ho5wwA3WxbxW3FnFyYEj8ACcyv88NiU1gHKsNybz9God36DiIXWHpL7VPeDroBwDsqOyV60Eij4W41mzmp%2BxudAw1MflQCN%2BxJK3J55bOBn4LWlSOoR9ZG8P2Nm7eOQwc%2BYvft4a5BDEaZCUycHkeWtktixc%2BTpbIg%2FaGznWQ3mIvCux4xBrg8EAz3XIq%2BIFp%2BjF4knCs2WwsPouEglV%2B8Wgvqrs%2BnZc1pbPi2TBprc9QEwd8fM4UoVb%2FSKwI0HSwdKzJzmmdbxu8g9UMNCn878GOqUBR15nqyNoTk1%2FNt1FLLW5LySaYsdmFd4%2FDhvfDJOZNGLkyMRz0lLHdDq1qRQ64l25Ei47eiFzUGfV59aktYdpowAql3sykt5kVHjfB2GpHqgCWTpxvj1Z6HBqBFhBJECnhS4ij9BROMtASy0UuTeWkJTZMYbW1i1xJDvnJdgq86EcF6H3xIyZUK99hsrop0%2BhL27ouNSbZX%2F8dbukCBS5Wk63Lc2c&X-Amz-Signature=f22bb69edb0320a5bf5515218b1ad0ed496bd25b1d3560a863c5a453d9c1394c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3NBZUS%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyaJvh%2BPo4fMCOacmeXZT4JdyukMnDqpJro4uSBMzVxQIhAJr8Oulncc%2F3%2B1A5pDCxKYv6jaNCVlCTbp5zaN9r%2BVYmKv8DCBIQABoMNjM3NDIzMTgzODA1Igyb%2BJ5gP4zyihS829Qq3APZtWmzPdWZJodIsmcBc9wnPiooIvMr72W%2BdgK3M5GQ52tDDH1ejftVDyGnubnZboA93NA4JGdMt7J8EQNY6FSgmkKv2DNBTX3qA8kZzprAXoSvfWoixRgAOCVp40GPX21RyMh4q0uYwiGuP8gUBwdWpjKCo4h36ZlSeJH%2BAB80XRo5XQAPtcmj%2BbPjZSRJx4VZzdZixQS2DPbbgeEcMTh1toPfVz1SGe%2Bl7NSTIRe55Bzt653uq6ichMB31XOpebLdPAAI7bE2uRAQsNO5eDnLNTuCqhTv8N8LTLe6l5Ns62hhKZBYfCP4W1FQ8hB5eWRc3p6U5xLV33%2FSWsBlPi4Ne79vhHnRPXCaAynNZrGRWc8YqileuGCDNUESOeFfysO0BQ8DesKO0dyDVEWCqIsvdMGG9otMVcmTKOA49oDnPz0jgymTCYmd6FVCqzgbLpAUDpvPb5fKYZxzeEHkwqx7qmJsyWJnCz3XFFXOHmkzkmlnZDSJp8s4xK7jMJKGXwdIX80YwmumBuNy82O0Dt6Mmg%2BhPI%2F8McUB7tTX9m9vHYuG5znwEiZOKJn1BvL2Pq3TCTsZUxZ1ZMTv2WmOD5sap1bHfVPWj%2BeOg7%2B0bUc2bIbY48wLuw77EozyPTCkp%2FO%2FBjqkAWbHEei%2FipD9Cppr7PtI94GJFNvMGvmKYNedpWDpV4j4MovkrsxBos%2FVv4ffRQ5c%2Bk4%2BzJ5YH%2BIP%2BWbjceFlCwjeG%2Bk1rO%2BnqT%2BsVUnAA%2FZPkC7c4ZXwIB6Gth2UCddzWLAsACzWmMMaqOReT1Mb0APiPAugkNzN%2F5s1KRHAKLppOH4MU3ZdieENWl37Jek7oQLNfqBELYpwGg%2FsrxlkB%2Bllv2is&X-Amz-Signature=9afcc7d3706d476b06ffe855e30af27fb4486cf5162e860b45dadd25eb359bef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMC7MOT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe%2FdBtmq1J%2FarWCCOCaPm4kipk2RT%2FCm9efY5c5E9kWgIgDeTUflEIZEoPPgB1VknUuvz8RHSWTYl8Z7YgDTzNIi4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMbaeE4QuTOpWKugdircA2rA38dGKN2nQffo6FQKjHsGQQoVJ3gD9HTQn956exKjgzF80LzksDv7EscVSqskjDxe8IImhMkPbQcDZKpQQ%2FuApo5dGc2vmyzr4upuUMoT9iCasWmjW%2BDrnxXURnHGl5b20UKh078egIInocKYHtb8RFsc1pli1oh%2F4BXSvWuqgKeCp%2BSW34jwLbtwakB54ed49xn8%2FR9KqEOfoHQFhW3VZuQ%2FBwZZWAikyIxPYlgHzn0u7p0erMvYEvnT9Z6Rr9mGG6zEZ07nd88SOUetgQxHRT7tWpLBi9ncvZCEJmCECBgFUs5cwMhIWvBZh9%2FhCaQV6PXuMavoaIoBb6h3wlK9pa2%2FUWC8j2ox1sdZfg7dz%2Bf7SD09VtbSiwrZrRWZPOs%2BAOmSA7pk5%2B33g222GmAUyipJZAIIgZHmlL3TrtkGx4GmDqxlokbgW7gv6OkihBH3SIGR2rf1XdoCdA%2FQ%2FZZbYbjUvtkDc7Mr0nIOPwMHl7rHnqzf7jyzFGcGrmQM1yKL6EoFBcccbVQA2jiKYlXhCARERIyk2pBBeZVg7w6Yr1e4WuHTk8Egxqz5ZaCE%2B89fv26iRGhZzYvbdASQKeluZ%2FRybC%2BCPRiT4qupPGN3035J56Laa42IgsyCMLyn878GOqUBpMJ5G8g8LqHyZWZswDwy7%2BUJb2bamVeeTL7Ux3Qozkho%2BEQAiv8hEsjVmFdJ4%2F1Qeydt6vWHliZK7sYd2tr6CQGWKqepnxG3x%2FIQ5ScmcASL2DfhJ9TVRdLgp2jjjr%2B85eRLGhpN9gss1k0N0irDKqT04wX%2Fl8NtGGi89ibI2xCnN4%2F%2FYaHn%2FFIM8zYUu88he7WpD%2BSIWEAi%2FonTJQ0Jm%2FjNxUqM&X-Amz-Signature=a2b171bc62f554e2374fe98f1333292f3c36b1cde9337062808216f8e59647e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QN5PFFV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP5xTTg1VvNodwD4HchzCILkTHOZVYtwf0SR0rOrBs7AIgEow%2FhrZZSm1VTuMVQLLjBahssGKOjZs2%2Fe2h1UVDlykq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNVbyupd7vewm1wqbSrcA%2BwtPy%2F6USwZrUgRe9IqzVYfioi2bg9KhtzBVB4WzJB7nfgv7ZIkqD%2FSITuY7LLkWNPn6gYgLjRiwPvP%2BlE1NKX590%2Fo2S2yQULtAVaU7j0y%2FvWnFxEjg455yV3O1Ex5JxwTCrg684psSJdRzE8poOjBYB6qezlS9rHP3cVxz8posm5MAMEKRMn7pVDVaKu0PZJwuDDgF62dLcoR%2BF7fQzF8SfN%2FObyW563sndc7IG8NG2WAMpS%2F2XrH3c903OopRug73HPEExCCVP%2BDe%2FiNkgQ9m%2Fv6L66462Wc0G%2Fr8JeR6%2F%2FenXGS40O4EFywGnd6ptX9pMpWmU1d%2BjPM2ccvsc0NCe42%2BSWiZ7uHY7iP%2Bu72ho5wwA3WxbxW3FnFyYEj8ACcyv88NiU1gHKsNybz9God36DiIXWHpL7VPeDroBwDsqOyV60Eij4W41mzmp%2BxudAw1MflQCN%2BxJK3J55bOBn4LWlSOoR9ZG8P2Nm7eOQwc%2BYvft4a5BDEaZCUycHkeWtktixc%2BTpbIg%2FaGznWQ3mIvCux4xBrg8EAz3XIq%2BIFp%2BjF4knCs2WwsPouEglV%2B8Wgvqrs%2BnZc1pbPi2TBprc9QEwd8fM4UoVb%2FSKwI0HSwdKzJzmmdbxu8g9UMNCn878GOqUBR15nqyNoTk1%2FNt1FLLW5LySaYsdmFd4%2FDhvfDJOZNGLkyMRz0lLHdDq1qRQ64l25Ei47eiFzUGfV59aktYdpowAql3sykt5kVHjfB2GpHqgCWTpxvj1Z6HBqBFhBJECnhS4ij9BROMtASy0UuTeWkJTZMYbW1i1xJDvnJdgq86EcF6H3xIyZUK99hsrop0%2BhL27ouNSbZX%2F8dbukCBS5Wk63Lc2c&X-Amz-Signature=97f8f1b9f71ff9c04bda6114085860a2206b8413e6e1223f7bc584ff74823046&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
