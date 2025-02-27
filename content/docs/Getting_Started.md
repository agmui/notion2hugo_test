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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSHD2Y2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCEl1Ulma1Rc4%2BinBNwhI2%2BRUjzY0Pu2rLBH8DHvpv5IQIhANyzxFKaHvcisblMJgcX1ztVMNfz0dxlTuPdoxLLz75xKv8DCGwQABoMNjM3NDIzMTgzODA1Igx4UOOG8OSxgbggD5kq3AN8NM8eI68POvAr%2BAPVzkneNi36UW97WQ55amaCe%2BTmoBf%2BqpV4qGOjzf7QZR6V1NdNN096ciPkw47xHMkLUjxaqeOHGUQ1ds0CpIjCGfiaMB3pZ0898i6C64HmEeve4rxGt9bMQP3qGvX4zxZ2KcYLKW13zlF4NoMzakmUUhOZmEoGvpS08Df8zQGWkr5iKyiDC%2Fyn9N%2ByLAkjbY2ChWD%2BZxenZadxPBze0zCt698JqH9Ok7a1MMAYk8gGrwGarf%2BlkGQFZ0vKKKRy1a7PeEhaa0xOm2q%2B0ecOt1rAnOFqXwHuNoXx%2Bafsm0LF%2BmRQdnyCptzB1kYq%2FWkw43MXAfFWlK2Xy4QRx8keImtByvpysXrn1C07oWQ5THnuDYAuqye9seMILibjUhAehNVH3kawr6rzCa4Xd5o4yPf8Bz%2BpVsPjce54mjZJbdwHYqz%2BEo83E2XPZ3gphgiw3KL%2FH4TQvinrvJaOoIACbrhZxiDZeuUfYwPTWzJH097IMlarWcYxy5ZZtdrS2cyjOz57E%2BezdEZHW6TvfpT7x1u77zTlXzfGe0exIl%2FVgQOHHZx8zQTLPZypFNIiq8uLFCLBj38njXYvSBjrlsSolMvhQbZ6L1EgvrjzSrJdXLjvMjCFsv%2B9BjqkAVM6f4c%2BOmv9QNhyczhE5B%2BzV9RcM0sN9cc5UOylCCEWO62jyIqhN71kyNhvu%2B2PeZYyzrNAA5Hht1jaf%2FFX%2BfWtKXXymP%2F2pBqsz1v6Y7JOjPnTx%2FOgJsWg189eMjnor6GQbFkh8trICz8rG4yL0v4%2B3SGDH1yD4o1l5uTJiGOQOq5TrvIPq%2BBqzYtHOR%2F8wgpTXNpBFr1vmsnklFF1j2xm0vzg&X-Amz-Signature=96e9a8fbc36b6227d0d8a95096fb3ffab297c6d6dcbe9c39c612c8ad8e744bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSHD2Y2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCEl1Ulma1Rc4%2BinBNwhI2%2BRUjzY0Pu2rLBH8DHvpv5IQIhANyzxFKaHvcisblMJgcX1ztVMNfz0dxlTuPdoxLLz75xKv8DCGwQABoMNjM3NDIzMTgzODA1Igx4UOOG8OSxgbggD5kq3AN8NM8eI68POvAr%2BAPVzkneNi36UW97WQ55amaCe%2BTmoBf%2BqpV4qGOjzf7QZR6V1NdNN096ciPkw47xHMkLUjxaqeOHGUQ1ds0CpIjCGfiaMB3pZ0898i6C64HmEeve4rxGt9bMQP3qGvX4zxZ2KcYLKW13zlF4NoMzakmUUhOZmEoGvpS08Df8zQGWkr5iKyiDC%2Fyn9N%2ByLAkjbY2ChWD%2BZxenZadxPBze0zCt698JqH9Ok7a1MMAYk8gGrwGarf%2BlkGQFZ0vKKKRy1a7PeEhaa0xOm2q%2B0ecOt1rAnOFqXwHuNoXx%2Bafsm0LF%2BmRQdnyCptzB1kYq%2FWkw43MXAfFWlK2Xy4QRx8keImtByvpysXrn1C07oWQ5THnuDYAuqye9seMILibjUhAehNVH3kawr6rzCa4Xd5o4yPf8Bz%2BpVsPjce54mjZJbdwHYqz%2BEo83E2XPZ3gphgiw3KL%2FH4TQvinrvJaOoIACbrhZxiDZeuUfYwPTWzJH097IMlarWcYxy5ZZtdrS2cyjOz57E%2BezdEZHW6TvfpT7x1u77zTlXzfGe0exIl%2FVgQOHHZx8zQTLPZypFNIiq8uLFCLBj38njXYvSBjrlsSolMvhQbZ6L1EgvrjzSrJdXLjvMjCFsv%2B9BjqkAVM6f4c%2BOmv9QNhyczhE5B%2BzV9RcM0sN9cc5UOylCCEWO62jyIqhN71kyNhvu%2B2PeZYyzrNAA5Hht1jaf%2FFX%2BfWtKXXymP%2F2pBqsz1v6Y7JOjPnTx%2FOgJsWg189eMjnor6GQbFkh8trICz8rG4yL0v4%2B3SGDH1yD4o1l5uTJiGOQOq5TrvIPq%2BBqzYtHOR%2F8wgpTXNpBFr1vmsnklFF1j2xm0vzg&X-Amz-Signature=d7904d104d5765a1f9e9ac3c29633b056481768bc9a242ca401f20f4f366d54e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3MCHFL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCICiAP7sX5ZNerLq9Qr9MMFZ4mV9fHWPo9ySn6E5ExxjUAiEA4dj9TT8zFOWD%2FpplPYD0S6t6TGUwc0TrOwlU3TyqqX4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDApJBbgmqtWgDeV4%2BircAx1RNawdaIzvg3a9RBrO%2B7yyLnt2QvwvkXqUg66EflL1N1WvNWBk0NqDGVrs3pTtv2ZAsHXkVX%2BS4LzpW%2FGdwVpPUCD37Ion1eqOFqz8HV%2BS6WZkrdXNPVnNVokLuQaoPxh%2BLRgFmKC%2Fwxj17kDvh1T%2FYHpm5uLrK76xrqi%2FoYwLLrF6e6GHR%2B2GgrUm7aHIOQJVBKw9Lw6AkuYczMz%2BfDlPS8KDOrO4Ai7ErQvGXgyVulTmHbi1RfIWKraC9jLWPm3l8uGe6Vxv436%2B78PvSpsXx35e2jQeJ4NDgSul8zXjo5OmlZZr0DM6t0t4FsqHyjiyXbcSBBcLrzVcMdIm7V%2FZNSKJUzs1gGWoAGCm6zOu%2BX8psnJD9bPG%2BK3iLPe%2FLMGR8jsDACtdFU%2Fg2DWFiwpWD4VaVZ14Ar6XNKbiL5g6RYoUH2P4OrBF2C%2Ff5Z5cAQNrG0hVeSGuVY80cKEHIBqhXFXoUdYWEiwlxtgqLwktx0qfAvh3WEWtjEm5jbsEnEFgucetvScfbJUQ%2FfR3DxogKgM4sAlrN9Yg0U3AfE%2FLjVHoyVac9%2F0OpVEYU43OLV42Ufw8dk%2B7NWy%2FnT%2BCNjYVCcNaQ1CYoF67MW1GMBR3QUwjiLblEjVn2TyDMJWy%2F70GOqUBfotgmDX5dWw6OKKVHrCJpxtbf6mcwaThAApFnCi0Ibgb9hP8Js7JXwjNgAAsgQGik1NRrtoW7tgwZ15e43cPCvgTsul%2BQjZYD7uOWsbo1J6t5xT3AodEKcZj59NlQ7QmpdyksOYA%2FpWrJhefOnsze%2FWgA3LHuvxsLbdJWMHCIxsOOs7YwsOJM3RTx0un%2F0gVTPaZqbAyu3w8sMSc%2BQz712TTLzD4&X-Amz-Signature=da407b808c1f65437d9fb615ddd9e3709d8a991f778fc6c6887850c50a3933fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS2BPNA5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDcrayR7s0vhdV4xMQfx1z8lgNfC9AhRMk9g10FZTDXtgIgYia3sRn3iksUjT9hd6gPqOuUxdNxnQSSS8YB8Q79FZ8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDOPKNC8Vvb1zsXQEDSrcAzJm9LeoanlVrgkQFuLlfSwTvHZvAbjnTrfqIH9ft%2BtgJxMNXrtZ9haG2Lim4biuJ48wfzCVNyIdxW7tUD4Pt%2FG0AQY%2FxKRhPSmmVlDew5HhqGpz2FKP6TagzmKuEWKu8fQ7L2TMT5aQghMEY6c%2BfXtMdq8iHABVnC%2BhAsIlMfRoC7lSyT7YFDiDcBo19sPf%2FZYboz5oirC5x4R%2F0u2mco%2F5DI%2FKKuPPpHUM7g9v2wXlPAVLTh3XwuixTfGxlIR5JEGyib8dXtbMr7NHDD5iuiWzZ5PLzdeON%2B1v0ezBgj0WZqw4c09YFbK26uJzvqsvzVFcNznVXxP0eJOAgmlTl7gLssER8CET1sxeUoCiTfx%2FBg3zTyZTHT7qa2UhX20208aajwLnbbpEre99ZgUqXvapQ5hsrG82RWRwQjk%2FbImtH1QLCDA7%2BI7mdEugZLErFQMM88NEimm7lYW0sZ4ggl3HW1Z0xw0yBrt7SAHFAanbLXY4rztVkrRnC54AYxz1rVdhJs7yRres8uONNG9%2BHO6iua%2Fb9nK66GsfbCwsu5KrOHTXBwkK3md0j2M%2B5pON8yRJZ6adPRcc3ZOgzznv0ZJStZRopU%2F7Z1Kwx5SLhle2QHBIK3OpT4z0dXzjMIay%2F70GOqUBLUP9pmNeo38b86uUv1d2JlSdDN7tC2jkGLAwJ7wlaHE32U1eEw6hx2BdfTp877IruE16mL%2B4Rm04Qbdft9DRz4gYXVTUW%2FLoesYrpi2BuptiOIXBC0PuTKzyDqI9fc16132BA0xUGSSnm8uTlbd6OrIDX6VD86BHMuMwQzm0iOiu4ztLuC3Vj7KNL7YXbwWPTs8oA0IaOOeikYVYEnpnTvcEyEPZ&X-Amz-Signature=1c0adda73c28fa3866436c61060210d171cdd2fc8d9aeac848d7f3095b4e022e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSHD2Y2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCEl1Ulma1Rc4%2BinBNwhI2%2BRUjzY0Pu2rLBH8DHvpv5IQIhANyzxFKaHvcisblMJgcX1ztVMNfz0dxlTuPdoxLLz75xKv8DCGwQABoMNjM3NDIzMTgzODA1Igx4UOOG8OSxgbggD5kq3AN8NM8eI68POvAr%2BAPVzkneNi36UW97WQ55amaCe%2BTmoBf%2BqpV4qGOjzf7QZR6V1NdNN096ciPkw47xHMkLUjxaqeOHGUQ1ds0CpIjCGfiaMB3pZ0898i6C64HmEeve4rxGt9bMQP3qGvX4zxZ2KcYLKW13zlF4NoMzakmUUhOZmEoGvpS08Df8zQGWkr5iKyiDC%2Fyn9N%2ByLAkjbY2ChWD%2BZxenZadxPBze0zCt698JqH9Ok7a1MMAYk8gGrwGarf%2BlkGQFZ0vKKKRy1a7PeEhaa0xOm2q%2B0ecOt1rAnOFqXwHuNoXx%2Bafsm0LF%2BmRQdnyCptzB1kYq%2FWkw43MXAfFWlK2Xy4QRx8keImtByvpysXrn1C07oWQ5THnuDYAuqye9seMILibjUhAehNVH3kawr6rzCa4Xd5o4yPf8Bz%2BpVsPjce54mjZJbdwHYqz%2BEo83E2XPZ3gphgiw3KL%2FH4TQvinrvJaOoIACbrhZxiDZeuUfYwPTWzJH097IMlarWcYxy5ZZtdrS2cyjOz57E%2BezdEZHW6TvfpT7x1u77zTlXzfGe0exIl%2FVgQOHHZx8zQTLPZypFNIiq8uLFCLBj38njXYvSBjrlsSolMvhQbZ6L1EgvrjzSrJdXLjvMjCFsv%2B9BjqkAVM6f4c%2BOmv9QNhyczhE5B%2BzV9RcM0sN9cc5UOylCCEWO62jyIqhN71kyNhvu%2B2PeZYyzrNAA5Hht1jaf%2FFX%2BfWtKXXymP%2F2pBqsz1v6Y7JOjPnTx%2FOgJsWg189eMjnor6GQbFkh8trICz8rG4yL0v4%2B3SGDH1yD4o1l5uTJiGOQOq5TrvIPq%2BBqzYtHOR%2F8wgpTXNpBFr1vmsnklFF1j2xm0vzg&X-Amz-Signature=efcdd32816e64a28a1100e50eee5c6353a659439286048ab5438915b89b8a573&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
