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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJFREVJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY1%2Fp9eeh6%2F1Y9Jxa9pl%2BmHbWNAEn5Q4KZSfQFRzxrkAiAKvBILoI1HDMTzrWp1pHdPZieXnsFMWGhIZ7dRlrLciir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMY11fwduSLVLKSr%2BDKtwDwNf%2FcOBcn2t4CACutioZiKIrbyQhOKl90p2ItxA7ZohDBBiPVgmwZcmLOS5s7WD9QaNKYyCOMfaEgvPjxPpf21CMIghKZDLVNkSqMlw%2BiK9aSqcUqDiSQReAx%2FLFAQWTTpOZN8dK0isCd2fLY89ILe096qh0M0EZG1AQtRdXT9ADRAIP8FvE9VGPOBtpQ1%2BzHiop0d6yXGczht0WK10JcFRZMfe5PJu8H039KEF4nppwXQ%2FFbwle8NbKhtHuEA2dEVEQ6%2FoZHOYTZHPnheIUUeKekI3%2FdQLXk4EVPzhddxypH8aEyQZ%2F8Q29t%2Bt5VAThVN2VyjJVaVnzERPq3iNfbN7UnUDJSiqe4DJKQluVdOyplN6VIdo57zq3y2o9Gl8ZMwBuCqVaXKIXZCe1fjWglz5VBJGH9cXjNpLl%2Fqmj8putQVLnXCZWpW9EXy6vnYBDHZsgbrAbonZD3OOWnQw98eph7vfgNDtTi6iHqSQLUE1gnXGzguOrq2jjS2vQZYgbf2jq5nH%2BoVXfrfi8xU6UVAkjfc7Edc8Wt16lXGN%2B3VU%2BIPOZmA3tNXjXOmm9%2FPI%2FoMNYK6NsZzKHt8tAhu1w%2FA%2BpIySsNBnCeGvx0ny5CNRWfvMn2p8DxSRb0sIwu9javgY6pgGCDnvsi58Wda4hCM49%2FCC3tVt3SYmja5N2Vw9ZIoWuEk0fJbZzwH99pv1E1x5A3oKxtzyIPYTKy7EUf%2FV5HSc58%2BwXtGYgLVLf7fVUUuAhACLHtOw2vajradRlJIGEQvUO%2BqzlizGtKxzbQRNWhZEyEnka7%2BRG1gJwjCupHH1BBE9lpyABvHRDyfs351U9VP51g2ioVd8K80Ezkgme%2Bju7QIp7LnbN&X-Amz-Signature=c19f9d021a3244ad004e959edf831c630dcdf434e39bfa9699af136c2886cb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJFREVJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY1%2Fp9eeh6%2F1Y9Jxa9pl%2BmHbWNAEn5Q4KZSfQFRzxrkAiAKvBILoI1HDMTzrWp1pHdPZieXnsFMWGhIZ7dRlrLciir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMY11fwduSLVLKSr%2BDKtwDwNf%2FcOBcn2t4CACutioZiKIrbyQhOKl90p2ItxA7ZohDBBiPVgmwZcmLOS5s7WD9QaNKYyCOMfaEgvPjxPpf21CMIghKZDLVNkSqMlw%2BiK9aSqcUqDiSQReAx%2FLFAQWTTpOZN8dK0isCd2fLY89ILe096qh0M0EZG1AQtRdXT9ADRAIP8FvE9VGPOBtpQ1%2BzHiop0d6yXGczht0WK10JcFRZMfe5PJu8H039KEF4nppwXQ%2FFbwle8NbKhtHuEA2dEVEQ6%2FoZHOYTZHPnheIUUeKekI3%2FdQLXk4EVPzhddxypH8aEyQZ%2F8Q29t%2Bt5VAThVN2VyjJVaVnzERPq3iNfbN7UnUDJSiqe4DJKQluVdOyplN6VIdo57zq3y2o9Gl8ZMwBuCqVaXKIXZCe1fjWglz5VBJGH9cXjNpLl%2Fqmj8putQVLnXCZWpW9EXy6vnYBDHZsgbrAbonZD3OOWnQw98eph7vfgNDtTi6iHqSQLUE1gnXGzguOrq2jjS2vQZYgbf2jq5nH%2BoVXfrfi8xU6UVAkjfc7Edc8Wt16lXGN%2B3VU%2BIPOZmA3tNXjXOmm9%2FPI%2FoMNYK6NsZzKHt8tAhu1w%2FA%2BpIySsNBnCeGvx0ny5CNRWfvMn2p8DxSRb0sIwu9javgY6pgGCDnvsi58Wda4hCM49%2FCC3tVt3SYmja5N2Vw9ZIoWuEk0fJbZzwH99pv1E1x5A3oKxtzyIPYTKy7EUf%2FV5HSc58%2BwXtGYgLVLf7fVUUuAhACLHtOw2vajradRlJIGEQvUO%2BqzlizGtKxzbQRNWhZEyEnka7%2BRG1gJwjCupHH1BBE9lpyABvHRDyfs351U9VP51g2ioVd8K80Ezkgme%2Bju7QIp7LnbN&X-Amz-Signature=06d57f864fb7a139f7fc93d7f8f96fc674d611b50ebd29c02e9e9e57a4d31f3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667EVKELI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA97rVDt%2FMjvEkGjM7huC6EA3tOskb6OvLGP8nucq9qqAiEAqMgp5Vo7lakZ6BgyGajTwbXfeNHDEaRyZyy8pGoZYbEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDA%2F1YXsP6Pn5s0eSeSrcA9tCPx6YGxF8oAE4Bdvw4sWJaiPUO7EzD%2B3uleFlXNjk3karQLuX%2FBS9sXpLIlqD51wGBTeog6zA8YZkidnt%2Fq8uPtIDd22LouEk8MdpDpwsBVubhFedi8GYMYX68ZkZsP6vTSrL%2BnpU7zmXN%2FhIvxFfbZf06VA49OWyXEFtiPQb5pOF%2Fh6Qq%2FgLU7kXdDg%2Fd2gnR5wLvnSYp%2BMTYBAW7iuEh7c9KbTg3NsfEnFlr8pZMsfap51uLJbA7YNNfbu5FO%2FgipqihqMKVvW6Kbv7YUPG0tDXbNBhBC3f%2BHdGDaxq1AuEc96UyldL%2FkcHYrrp%2FgfXc9kwBgEUlfJ569ElC9%2FzOIIlNx5UYt7KYOr%2BQGyilFL9n3ouRss1cSIbtB4LjYylr0MtpGsUFsIe5zjUo2KggzQYvmUyJ41PttyCU1mAJ3LO85uaWMCwxYzS4Iu5NBQPjsxjMOBT5aJ2p5TtHuk%2BnKHjuRlDhipixdJ4Pyt5iF2ecldSobMiO21C2YQKeu5zfVo%2FMwaSPTIAygiTyH68tlbKUYvUNKaShZum20sIkF1aWxVPb81iJs4qpH7vWr9sOPQfdXAPyg5h0%2FOtgK9WDZUXYCln1QT51wwHQ0cSPrzr0KaYOwAMZ3iCMMjY2r4GOqUB0aa77V6Pw%2FrA8JtvCda0DxgNaNT%2FXIRWBUYeseaUl26l3VyyC%2BFuEaDgS%2BncQBOp4S1uVmMLITKLF2sPrg4E%2FWhxzJLsgDIyoOw%2B42sEnv6FQpLw4RRfoC47JqeXy2xbgLE2Zl8OxpY6Ts5MW8WvfIRsTR97iEzMjefK87xpXDL9gqdwOlkGu1xBzK8U9sAcZZRL2smn8Z8J4EkbGjghHV23Bo7T&X-Amz-Signature=f0e64ee4b25c42c1a641d595fbc13ddc98dbf5f7cbb221fdb5d2465b3a220371&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZR56PL5%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXvkUX1qL5AMLi0FBFPJo0i%2BZkalAlEsQroc4I%2Bllg0AIgR1MQhBUpaMkAone7S%2F6Dy0hUMC%2BfYP1YTkdqFtk%2FF90q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDORecwJSITmJLqZpsyrcA6GAgADLyYT%2FM6f8MjCgL5sRyHFmt691ENxJHGNvZmDTr1%2BRQpyW6Mwx0tuDp5uYGvtyEsJTy7RzTyilgH7IrMkj8hOtBehRoVIo9qcpCQI2As%2FUtVFalFaasAyLZaBZcC6ZJAO4CHtga%2BK%2FsEYdYaDgYAJUUzndpAj2Gj%2Bn2wuw0cFJXwu6MpPsSsz8ocF2GiwUQewai8cesx17J12n7Xet6G5juGuPTVC5rx8FMNG%2F4XrlCcrEc0QtA2O7GXm%2F2XzGDHiryomts%2FWaGYMnA%2BKuUGntxFDoq8f6l4AOp2Rzb784h5gSPGeEb7Bwgf9n17RJEoE4NetJpMCFjSDBUzHaLhGRoV6vB083uZBkB57bIzuutJVVQ4NB0vwzGtC5PG2qoiWhrc9ZQWdjQUrwtb%2BkU%2Fql2Sf0UgQGj2u4YiEtGUZ3txaaSF8AisiBzMw%2BUOVnQz8tcP9FPpmIR%2FP5mZYgfUpbfE3FPbr1Vw%2FF08sHJqOsO3VjCabinCyBLGfhLIkSUOCU04MoN7YLSFj9QmUFdKyyr7dgg3iXjqDb%2B%2BVEi3OWiqgz8py325iPnpiyc%2BmA5rGJj44B1dgl98BAbQZGUd6jSNUqy0POmA4BXC1J92kLAZoQ6mMyp1r%2FMNXY2r4GOqUBxsg3GnbDdbufD1poWHLpWTqeJP%2FAOO6Y6%2FNXwTp3RVdL5F2R1yX6TafDF%2BJLc7JHDggKS3Ifracp7bJlxm%2Bo29bTzP3QNp2WbnNcDlMrNZKyfbYhkJmLbvp2QKdN1uYI3klbCW%2BrG9N2iRf9GNMh9zgw20OhqNhGhmCzuiB9KYh08jlimeYaOkuAy1y9snxqQt5XbEMuXRIxvd8vLyjVldck%2B9%2FQ&X-Amz-Signature=73586cde46f531ece13c877290da524aaf32f2d5aa5d483ca198b730fb9b00ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJJFREVJ%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHY1%2Fp9eeh6%2F1Y9Jxa9pl%2BmHbWNAEn5Q4KZSfQFRzxrkAiAKvBILoI1HDMTzrWp1pHdPZieXnsFMWGhIZ7dRlrLciir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMY11fwduSLVLKSr%2BDKtwDwNf%2FcOBcn2t4CACutioZiKIrbyQhOKl90p2ItxA7ZohDBBiPVgmwZcmLOS5s7WD9QaNKYyCOMfaEgvPjxPpf21CMIghKZDLVNkSqMlw%2BiK9aSqcUqDiSQReAx%2FLFAQWTTpOZN8dK0isCd2fLY89ILe096qh0M0EZG1AQtRdXT9ADRAIP8FvE9VGPOBtpQ1%2BzHiop0d6yXGczht0WK10JcFRZMfe5PJu8H039KEF4nppwXQ%2FFbwle8NbKhtHuEA2dEVEQ6%2FoZHOYTZHPnheIUUeKekI3%2FdQLXk4EVPzhddxypH8aEyQZ%2F8Q29t%2Bt5VAThVN2VyjJVaVnzERPq3iNfbN7UnUDJSiqe4DJKQluVdOyplN6VIdo57zq3y2o9Gl8ZMwBuCqVaXKIXZCe1fjWglz5VBJGH9cXjNpLl%2Fqmj8putQVLnXCZWpW9EXy6vnYBDHZsgbrAbonZD3OOWnQw98eph7vfgNDtTi6iHqSQLUE1gnXGzguOrq2jjS2vQZYgbf2jq5nH%2BoVXfrfi8xU6UVAkjfc7Edc8Wt16lXGN%2B3VU%2BIPOZmA3tNXjXOmm9%2FPI%2FoMNYK6NsZzKHt8tAhu1w%2FA%2BpIySsNBnCeGvx0ny5CNRWfvMn2p8DxSRb0sIwu9javgY6pgGCDnvsi58Wda4hCM49%2FCC3tVt3SYmja5N2Vw9ZIoWuEk0fJbZzwH99pv1E1x5A3oKxtzyIPYTKy7EUf%2FV5HSc58%2BwXtGYgLVLf7fVUUuAhACLHtOw2vajradRlJIGEQvUO%2BqzlizGtKxzbQRNWhZEyEnka7%2BRG1gJwjCupHH1BBE9lpyABvHRDyfs351U9VP51g2ioVd8K80Ezkgme%2Bju7QIp7LnbN&X-Amz-Signature=caeb58c408ad0563f7e9201593b09c28838f412e3063aefded80f94d8383248a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
