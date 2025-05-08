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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=d9e8aa6bf4b8693fb54f1012093f7e312f6c35ca752d523f626348630c5c4ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=7b420f1a6ed757b9526084d94b4b27bf0cd5b9fc75275f9fa9955228d604c024&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=92119c6d8250e75d63c9852f4adad5cb9129d0d673d07150079d1bb81391b259&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHSVPNC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnzVT%2FdwjAUIeot25m44OT2zJlr9CVabR66zWh6I6utAiB3HjTYtUbjQvVw6yTI%2BxOc8nMIRq9IrA4zSmZfKElv4yr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8TX7ZgekJ8Se0%2BC0KtwDmZglfgJ8mkW1t%2FdFkqyIWERLE8E%2FDvpgAQAzW%2F1%2Bkh0prWX5vLTq%2FI1ZzNxjOhhljGmIo7%2FpHdVCmH%2FOQtw8SlVWuAmjvVOY6a0QboIR4qj5%2ByXEXoTRZcuahgH5d6yZ8bIVta4szMNIuXus1e1IYBzQWZQAiwJvtq3h3nWD2GwlT3XnFxLVXnXw0h3ANtcSsj9EGkb9r9R9yMeD45%2FbNk7LKsclezeMM1RF18SXgRxdzNTdJG90aClUpicxuJQu0sGDuBjKetqIo%2FxoO11KLM7Fxx69oqxckh9plzSk8z0raYvLtPsuHWaq0aIXnEQQrWJRimfhTM7Eh7locBf0mal%2BI98f2MKR%2BHEIHHNHli3lU9SeCmTvQmt9iCR9ywngT2wEFBfcLEXC%2BDApXHfUcvnNN442Hu4IdMS33u7vxxDejl4cEhjFRhRQ19C4YvvhpaMY87HeEG%2FixnLnahSNFtGw3yA%2Fto1VbaV%2Bbi3v30%2FVO3MoyTy7KEN5hE8HEBLJX7JN27XwMAoClvS8ONgtvjh7ZEAt7X6j%2F%2FH2pGsusiBFNlnwqIccSf5WTjtSCOzQzisR6hjY1LdverUzSy0q5wuHMcBBSI3se1eLo6Q5lp193gNdV%2BkQQdQt928wyavxwAY6pgFeBlRscOz4i8GdaK8r8nAZkkz3nTxMGz0OhGtcQt7y%2BUm2sGkOGs75Mt9JNpJ3ni3P3eJ7JCb%2BCVZur5VPSUpZ0Ra1eRjCl7W58rftokhqc59eseNKAbsQDCHl7yGRCfFLFvLWgPpRb0le0sCqA6lgU20Np0Wbm3F1A67ZvfIfSYgbY%2B2nMRzhcCSGZjQN8Soa16eY17XrhEcG%2B9yZ6F4XOun3%2BlZy&X-Amz-Signature=92388f18274fe44c40f8fec51c75165ecc489b1e376694c24fadc4ca59959c07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMZWNPPL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1hTrwtcyTS9s0%2BkVP3mVj90yKps96nObEHXHCthpdGQIgFxJrov2RmmhryGBSNkG7tbDxCAyBaZN3EEELk67R5vIq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKddl9mBs5DRyBpT8ircAwIfhlIbLmaz%2FL%2FgDskazklcN%2BNTu%2FaioQiEN%2FMddRpJ2CJ2WyP1zL3f%2FvDKSOOjUGIVu%2Fyp%2Bw0eYaEolAsIQe7UoMg4a3wY0QOIL8EltRRQkk8wjyEFedQqABjwIq5%2BbClkGcUUQjnezwpnfloBMEJI%2BJZNwLcTWkYPNipkVKdGjTTHWngNH1ic31cqwGRmn2%2FGnlxZ%2FRKWOI6LGav%2B%2B4oPme8HJr5KnmFoo4sTgES7T3%2Fvx6mEhDJ%2FVZd60%2FKtC9oAQKVQL%2Fb4KZrWqP8YAyegN%2BAaMfU8ZcdMToPK4u%2FkmNOcIxUYp8AO0oKZuyqN2cobI%2FX9NH7vxz7oU2QkMccFv7nI76EFfO8JYZWngh6HjcvulLcFEXJeU63rzDRYBTKmQXjdhX6lGPSIlFHnexCQAc0mHU%2BNchMVB%2BmwBHBGV%2BaPlZP9Q1j%2BiyuFvr6Ni6%2F27%2F%2BQL%2FBXLPg4MOQ4w9kQbHdIdCvM4kNfClSfe2zw%2BKM0%2FB5MYKxMG9VuxyILhSfCJalBy5w0iLnB63Yw1QkeSg3fFT7K%2BfguzgyqrFxELVtSrC2yU2rqbpD7MBOYt81KzW9zckiCKV1S8g17RD7yyFrrblGxYkuEZkoeo1nXK5la2J0%2F2N2bJJWDMPmr8cAGOqUBepe9BgaXSw5tH770yiQXh6c%2FhUo9nZCm3kJPpf3WVQChsIttWNxeE5KC0Lvw64%2BE6UYKxwbLwIBtc74oBIzNQL%2BkYvBx8qDUWVFjVRXaILhyOVyD588urmpfwNjMvwGlfxa%2FJBqBDlcqm2%2FFd%2BI7bB9Krf0I%2FiTvuJAlu6pRLDxb%2Bj42pHWhI%2FwvF2m9sJcHwSMBpva5%2BPGXh04jXV%2FiPaprJtzT&X-Amz-Signature=752478dff0efe52b38d0ab0c2bcdf0b7b476e28a001e1b101f50deae118562cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BQEHLGA%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAYHJC1u2v4sdT4k23H%2B%2FTLAajSDlnwPXkPPuQN3zvZ%2FAiEA%2FX7clAplpnSPoV6zY8DMUC29EtbsfBG%2FlTvNq4S3%2BY8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGD4NMMaRfXPPrZiSrcA0m8JRLsery7B3xjdMoBrlXZjG%2FBYe7oemhYhfDEegZSjB6V%2Ff3UK%2Bgh%2Bfq7OHZH7CRmh%2F8QVIsHuyHW7P%2BwuWR5xzF8k8VzQmbDE21wLaKjSHzZoBWo98BuTHzqVZ6XQ64ZsGfkjjfBkq5EW7EjQWoxNuejJFXp7hEEnEtNIFTIuquI%2F1wBvjDmT2EvXsKtECJHy1Lpgfrm%2FmBxKF%2FJj7rPg8VW9WALxzXdgX9J%2B%2F09S%2F%2F9QPHeI3QGUNYTdj9%2B4P2Ccyh1yCDv0SQXICQARO47fNcrqRNIT2oECvHWIbaKwJqRWHyiNQ5ixv6DeM13%2Fd2YXMyy47CNvlfQ1TX3Lz%2Brzi2nVlfmvA1o%2B4psTXxMD%2FM0cfVfgjbJllDobz4dGLRJRvFLKDOJtsEJ7c1gKKtD2leGXISdHzjujglb2B%2FoWXMd55q%2F%2FbQKa62PhNUnZ0xXtMwDn9OHVgzmZb%2FDQIxZ%2BrqJXMlEHsTA16S7u0HCJ2sma8FRxnzJt5PzJUBwHs4Xh3A5R9jzpQoTZGiDbgDfSX8FCkcnjjSRh0gzYuxJWaqvFz7MuUOruAnYzBxUrNCZ%2BGAXsMJLdjevbBm822HPwvrj2GWJXfKjbgWx53t6YBN3bx2Ie9xBmXMTMMOs8cAGOqUBsPlzZSZEe5oGyRjq7uW0mt0wjq3edNoFIZI6jywvlJmXxYejvP%2BDizKpTZnBIHy6Mr5se%2BzOZWLbpREGPijPxana1fgEUKbYb6oRAW1D2Ha0YDQtZMY5HN326o7LCpXhwQ4vFJ8W9PxSNvGaB5KPHe2k93Y2BGin7Z8xmkdZj9pEpa1vNUehGtXD0rTcem9njtkc7CXdS3WJ97T8gv3TIbSlcaQT&X-Amz-Signature=7130d95ffebcd451c2c5f9d58a0634892e08e9144cbb0b8d602f14c1c9d2a970&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
