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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y3QOOKE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCHnZXu1Ue1daB75CSWau%2FGVrvnqAg4Lt%2FUwpe6h8zo0AIgWQPBtR8V9%2BCSJ3CwapCcqWOC%2FYg521TZYVLt00rztLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAu%2FcSpc2iz93gdADyrcA%2FlGxBgdjMwiIjGoi%2BxnDCZMkGo%2BAEuNIZN%2F%2Fdt9xz3FiZqzeqHMsgTxdpZkSUhuK46brAKA5ZRv1Lx7Qy9OWb5TWoAmVMcxCm0Co0FA0O9Oa9XIxfu5YPppoHWOj9Q%2BRxCgeIixcPIUHzwndrTVbXVHVsU4J2mtGGJCEQ%2FTm0rzo0yBeuE5adQybT%2FHpndOew1SCo67jEKVLW7a7f9TSKMphFQyVdhj%2Bj31zsRdiDgdBAgNmi457%2FtQ4flAqyIbJE6ghqZIrl2MzAeq1%2FJuY52QDVrHSVgkZgEh0Y4D5%2B6pD%2BE%2B0W9WG6JcS6v2ShiuEG2foAoLoPrEXqSufd%2B82qq6mlNSbe%2FQ8xOixs6DNRMIUlyPjlyxvSb8U3RNXngPo2bxstQkYKA36TL5sn9VaaqWU9PPO9uMgB2xsRRBaYV3HZBv8KwwQUUsP84PCsimH%2FFiEq0B%2BzsB9RiDIIXAH8irR5J0RLFcdwE%2F%2FwGijC6vgSpLqSMpsE1qT1IRmZ2TgHmXN%2FYtkpI%2F7B%2ByebeSEhA8cWbnSN1l0fae3KPGxTbVt0GLC6IfOgiJg4d%2Fl%2BZWDhW79TNn5GkceJtH6tjrB2xUO5IcBMKjZcBPrnhMAIYbJyex%2BiZdkrcrPZp7MIut%2B8EGOqUBijmwLKYRc2Hr8VUkwIeoJmwCVPoRWzT779vfqTp5VdEO7q4VL4OF4AjbPmjSMODvTFoaHTCeWadPC79UlcdIeaq5Nfz1%2FOtkRm%2BiR0o5xjORU5fNr2g4tpl6ZFqoq2raeEKPKd%2FIb1nt7377z4y%2FA%2F5dVBNDSC%2FF1zd8IcN07cg%2Bc7KiS58hIKgJjMsNwtQNYzsXxUdEes9mSJCQg4itTlIUOi5L&X-Amz-Signature=03255aec3f2d07bbdca5ed30e49c1170e98bd6a1b801ec7fb634ed36411e0fed&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y3QOOKE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCHnZXu1Ue1daB75CSWau%2FGVrvnqAg4Lt%2FUwpe6h8zo0AIgWQPBtR8V9%2BCSJ3CwapCcqWOC%2FYg521TZYVLt00rztLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAu%2FcSpc2iz93gdADyrcA%2FlGxBgdjMwiIjGoi%2BxnDCZMkGo%2BAEuNIZN%2F%2Fdt9xz3FiZqzeqHMsgTxdpZkSUhuK46brAKA5ZRv1Lx7Qy9OWb5TWoAmVMcxCm0Co0FA0O9Oa9XIxfu5YPppoHWOj9Q%2BRxCgeIixcPIUHzwndrTVbXVHVsU4J2mtGGJCEQ%2FTm0rzo0yBeuE5adQybT%2FHpndOew1SCo67jEKVLW7a7f9TSKMphFQyVdhj%2Bj31zsRdiDgdBAgNmi457%2FtQ4flAqyIbJE6ghqZIrl2MzAeq1%2FJuY52QDVrHSVgkZgEh0Y4D5%2B6pD%2BE%2B0W9WG6JcS6v2ShiuEG2foAoLoPrEXqSufd%2B82qq6mlNSbe%2FQ8xOixs6DNRMIUlyPjlyxvSb8U3RNXngPo2bxstQkYKA36TL5sn9VaaqWU9PPO9uMgB2xsRRBaYV3HZBv8KwwQUUsP84PCsimH%2FFiEq0B%2BzsB9RiDIIXAH8irR5J0RLFcdwE%2F%2FwGijC6vgSpLqSMpsE1qT1IRmZ2TgHmXN%2FYtkpI%2F7B%2ByebeSEhA8cWbnSN1l0fae3KPGxTbVt0GLC6IfOgiJg4d%2Fl%2BZWDhW79TNn5GkceJtH6tjrB2xUO5IcBMKjZcBPrnhMAIYbJyex%2BiZdkrcrPZp7MIut%2B8EGOqUBijmwLKYRc2Hr8VUkwIeoJmwCVPoRWzT779vfqTp5VdEO7q4VL4OF4AjbPmjSMODvTFoaHTCeWadPC79UlcdIeaq5Nfz1%2FOtkRm%2BiR0o5xjORU5fNr2g4tpl6ZFqoq2raeEKPKd%2FIb1nt7377z4y%2FA%2F5dVBNDSC%2FF1zd8IcN07cg%2Bc7KiS58hIKgJjMsNwtQNYzsXxUdEes9mSJCQg4itTlIUOi5L&X-Amz-Signature=2daa53a6ae9259ce426d3b71a09a25eb25870dfcdd56335c16d631c1d8b96b16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y3QOOKE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCHnZXu1Ue1daB75CSWau%2FGVrvnqAg4Lt%2FUwpe6h8zo0AIgWQPBtR8V9%2BCSJ3CwapCcqWOC%2FYg521TZYVLt00rztLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAu%2FcSpc2iz93gdADyrcA%2FlGxBgdjMwiIjGoi%2BxnDCZMkGo%2BAEuNIZN%2F%2Fdt9xz3FiZqzeqHMsgTxdpZkSUhuK46brAKA5ZRv1Lx7Qy9OWb5TWoAmVMcxCm0Co0FA0O9Oa9XIxfu5YPppoHWOj9Q%2BRxCgeIixcPIUHzwndrTVbXVHVsU4J2mtGGJCEQ%2FTm0rzo0yBeuE5adQybT%2FHpndOew1SCo67jEKVLW7a7f9TSKMphFQyVdhj%2Bj31zsRdiDgdBAgNmi457%2FtQ4flAqyIbJE6ghqZIrl2MzAeq1%2FJuY52QDVrHSVgkZgEh0Y4D5%2B6pD%2BE%2B0W9WG6JcS6v2ShiuEG2foAoLoPrEXqSufd%2B82qq6mlNSbe%2FQ8xOixs6DNRMIUlyPjlyxvSb8U3RNXngPo2bxstQkYKA36TL5sn9VaaqWU9PPO9uMgB2xsRRBaYV3HZBv8KwwQUUsP84PCsimH%2FFiEq0B%2BzsB9RiDIIXAH8irR5J0RLFcdwE%2F%2FwGijC6vgSpLqSMpsE1qT1IRmZ2TgHmXN%2FYtkpI%2F7B%2ByebeSEhA8cWbnSN1l0fae3KPGxTbVt0GLC6IfOgiJg4d%2Fl%2BZWDhW79TNn5GkceJtH6tjrB2xUO5IcBMKjZcBPrnhMAIYbJyex%2BiZdkrcrPZp7MIut%2B8EGOqUBijmwLKYRc2Hr8VUkwIeoJmwCVPoRWzT779vfqTp5VdEO7q4VL4OF4AjbPmjSMODvTFoaHTCeWadPC79UlcdIeaq5Nfz1%2FOtkRm%2BiR0o5xjORU5fNr2g4tpl6ZFqoq2raeEKPKd%2FIb1nt7377z4y%2FA%2F5dVBNDSC%2FF1zd8IcN07cg%2Bc7KiS58hIKgJjMsNwtQNYzsXxUdEes9mSJCQg4itTlIUOi5L&X-Amz-Signature=57a4247172823a788946e6fe7c4cf4dcf820a57a3d46dceeff25089d496db1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE2KJYO2%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDiUN%2B4dcl9kUv%2Fqd9ITiEQz%2B8iKkn%2F7T%2BS%2Bx5%2Bk9blwwIhAKJxutKi4x3EAL%2BTSrlDzIqr7Osx6nt6y0RSn6YmfB8MKv8DCBQQABoMNjM3NDIzMTgzODA1Igwdpjmibmr9bfAszPEq3AMmwiEBY7DaDnWMZwTLmNxDRFT2zA1D%2BaKjjW1ez9Srlia4%2Fcr%2FdKuum1KvTNPJZ4SBVLMnqvl5pJyIptdXPgmxs0BVikqVM9tMKS0tmZRdTiBguvHnaDfpngd%2Fs1Tt3I2%2F%2FCIihdHbhyVATJ6o6adhH5qaI9SKxtgjDG%2FBmBo4mq0rz3MEzY%2Blx1xnuUU3xfu9Q0ZMPXZJmP%2BBDKdN7QY9oSBMPtasOAX26uMXBIHWiWCFs%2BDk9hIP7jal7K%2FI4fpJgC%2BeZb9pgEy8aJbgGGi0ZO4jLb3j2XQzr%2FVsdU0JGR%2BjpwAedFyXRlcxh4uJkWLbIcicme7spcWzC8xPhYikSqhI%2BB%2B1DCNxulwZZnXcpvFooh5L313%2FbZ7CKkWjK7lWeB%2Fe7C57IC1rflnZ4Pt5WULBmtSQSw90iNWZEXMXTlQcn6g1ozaGnTypOiRMps7O7xYbH5LfIZDYoh33zlxnytmhdxDZqyxPw%2FUfY9zkSHwgKrNFH%2BwXBAafbNTMugxWyklyCZfzOfTVAvhXjOdkXTDMjfAHAXdKdzhFNZ5Sph6sAiwlaLkNDRr9j0%2FIWAM8cu%2Fg1rj7eW22fmMoCYU7E%2FLjS4j6u75mDQ2kUb5SCoGr89lzhIg6RI6UhjDErfvBBjqkAVsrd0YlGpwm8pQnvyL855hp8qrtjIDX0PDVwEvtWNtD%2FcPnkMEjPyJDmko06H3L4mbMNjVYqYbRxQJpF%2BE%2BhHEiRLhGMnAk%2F%2Fe3DfB%2BSmBH5GwpIXarhugW2E3Z9qz9yTGvvWckVXr37xBfOufGpcEAOjTPRdedv0rTS0GSv5pnG%2FKqg6eMk4x7jhknab0eAWDJ9XzwOQG0HHGTrAkvNl8m19bv&X-Amz-Signature=65944dc438b0dd61db75194d24d5c95bd45e0ddfce1e07c240971769508cb284&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFWL5EV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCzm4JugUv%2BzaGQN0AOFEnVkwdI3d%2BbyFQe70maX46O7wIgQ5L7EuEac%2BL4cuPTwAKo%2BXfv%2BOeZIozmIBqHRwEQtDIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLz8XT%2FjB3f156spiSrcAwkuz4FAe5qVs%2BkTqNHTCq62c%2BcZ4dL%2BUlZ98MPd5YcKTjb%2BAt0z1NaQaZd9vRKTxcxUvWwMf9hZ08SFz8XygGhUYsSKYwJvW0dp%2FJzyPiG%2B44AoK%2BSVn3TjyQZKhAAuQcFSfmLRyzNdrefoa2LtWuMkj%2B%2FQ%2FRKL%2Bmxbpuu95BjUPqPTMM4yQsGMhON4vxP7CQ3adACQONBeQKSVrzsyoXHd5jiY1CFdo8oi1gtvj3HbqVbyHVxf28STNYWr1L3yyBHahAKSYGotdaWq5YueZepcUAfrxWN1j%2BZPi%2B9YFAJLeHqHRiQ0gveMSjBr4yyMFBh%2BCzoWS9cGYKLLSyG3wm6%2F0nl7WX6GmDi3cO8M7jSUcAWYoTM6we%2FeMn813PPOqAnZzDAlyF756E3OvSpVx37blIvdfpkCr7SU9N%2B%2FRijXT561dH%2F3WET%2BSnqg7GDbKbn7crH7mIkyGbGyPgMTsOxEIi1BQCvoXRzaKtsOqqRDjBmE0s3d915KtB4HN0t8sycrsV9uPmBskaZD912bo1NlfJSE1CmYOpQvq1Z2SgZXwV8SRQDkKuA%2FXJ6Q3wo5TKllHBK3YNiUKs6doWrawtgeO2UiBkZ69ccg96zV6uBgXlSm66UqhA3EkmxVMKqt%2B8EGOqUBDqkHLQkI7di96z%2Bk%2BFjYXu76EhLWbSL7PrA5Go1T4v1xPSh%2F1TfgyeG6yjnJXTijJVoXCrfNpOyvWbBGvkXq%2B8LMXMQrh%2BUXK2GUvXRkfYZsQzIJ9ykXvLkVDt5aKcxwXnmQnXIx%2FyJ2jx65Z%2B1uQ4%2BgSf5yZcMf0rjxwDKCs5D%2BxMeav9KKr38PlBr46bAJelJ3%2Bj%2B0PvTQcTqSOzn1kYw9K81M&X-Amz-Signature=c365e2bed71726ec9a2cfdc2812cca115246875c09589d60f4129a049354fc28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y3QOOKE%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T121607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCHnZXu1Ue1daB75CSWau%2FGVrvnqAg4Lt%2FUwpe6h8zo0AIgWQPBtR8V9%2BCSJ3CwapCcqWOC%2FYg521TZYVLt00rztLIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAu%2FcSpc2iz93gdADyrcA%2FlGxBgdjMwiIjGoi%2BxnDCZMkGo%2BAEuNIZN%2F%2Fdt9xz3FiZqzeqHMsgTxdpZkSUhuK46brAKA5ZRv1Lx7Qy9OWb5TWoAmVMcxCm0Co0FA0O9Oa9XIxfu5YPppoHWOj9Q%2BRxCgeIixcPIUHzwndrTVbXVHVsU4J2mtGGJCEQ%2FTm0rzo0yBeuE5adQybT%2FHpndOew1SCo67jEKVLW7a7f9TSKMphFQyVdhj%2Bj31zsRdiDgdBAgNmi457%2FtQ4flAqyIbJE6ghqZIrl2MzAeq1%2FJuY52QDVrHSVgkZgEh0Y4D5%2B6pD%2BE%2B0W9WG6JcS6v2ShiuEG2foAoLoPrEXqSufd%2B82qq6mlNSbe%2FQ8xOixs6DNRMIUlyPjlyxvSb8U3RNXngPo2bxstQkYKA36TL5sn9VaaqWU9PPO9uMgB2xsRRBaYV3HZBv8KwwQUUsP84PCsimH%2FFiEq0B%2BzsB9RiDIIXAH8irR5J0RLFcdwE%2F%2FwGijC6vgSpLqSMpsE1qT1IRmZ2TgHmXN%2FYtkpI%2F7B%2ByebeSEhA8cWbnSN1l0fae3KPGxTbVt0GLC6IfOgiJg4d%2Fl%2BZWDhW79TNn5GkceJtH6tjrB2xUO5IcBMKjZcBPrnhMAIYbJyex%2BiZdkrcrPZp7MIut%2B8EGOqUBijmwLKYRc2Hr8VUkwIeoJmwCVPoRWzT779vfqTp5VdEO7q4VL4OF4AjbPmjSMODvTFoaHTCeWadPC79UlcdIeaq5Nfz1%2FOtkRm%2BiR0o5xjORU5fNr2g4tpl6ZFqoq2raeEKPKd%2FIb1nt7377z4y%2FA%2F5dVBNDSC%2FF1zd8IcN07cg%2Bc7KiS58hIKgJjMsNwtQNYzsXxUdEes9mSJCQg4itTlIUOi5L&X-Amz-Signature=8a2a76b7779787799ae577cc042a74c4dc40c227dedcea0eb88732e74c8fbc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
