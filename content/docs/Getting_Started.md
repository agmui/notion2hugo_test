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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67YBTSS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD1ObymwNrfRKs8RTdDxRhxfuFzHzvC8maBEJySfgAEuQIgYgX7Cgv1IMJajUyUYdXL3F0aN0ckaP1QWe09e9Vx8MAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUr074it%2FtJBqRieircAybKqW1NkKQMA59qCPZ%2B3auMv8coJJjY%2FesDo67XjEps1MVpAo9JHRFOmJkw36weXOJ2J4UN5%2FhGxBYQMuW9w3olxGwyIzCkX6uKyQIoEpye4AaxGRv%2BkT9cg3uMp4w5IzFT7UPGZIo4nI45m1Cw%2FoO%2FPXW2LGHiuGyYcXgfeciZz2ULpX3Lt7LD4r7P5KX42pXRNdK6DFHBsp%2Fe1VYsZgJzanDSwkNjwVEY4QMPMjXRvHLw%2FTDtoyMweMcZLMXOM9Sx%2Fz9mrksHblUtrYnRViG2oKSHcKnmev90FYQrxL8I4JocdCLXp5nzxQFNOaKgQSYhEkn4aAPKzxcF7PsIKXb3iYfIkGbECKXy%2BMxED05tmoWV0FjeOgaH1Cx7R1fXqj%2BICIpxQ7DgMhe6ps9EJHdqrBqWWUZeCOPyBkWO6d%2FYddPVLHpAMu3Y1sgKgcUf9SjVa5ht%2FCHCPCn9JYbC2wY1NF4CSYsEsrhGq%2FZaOCQ2YFuFs8I7ncYzhc2wTkyMV%2BO3hNEdd28Zf1EDrz96BG1AnX0sRez%2BlZkFJyM82qMLu5kJyO16aUTO8vGPvJY%2F5TY1V0KQVau56tctX2D6TxTUdrlIgcvsjO5nmzl%2BE%2Fv2SLFzxQ94Svn3HoGNMJ%2FYpr8GOqUBAzqYKpgsgbAUX70g8cJMtR%2FXNJQTqseVfApB5da6Ksbg9GJOdEpbwf4S0EZLFTvtVno%2FdGDzJhylkgq0HMNXGCUwEhYSnAISMrxjpOdKcA32L5VFkWY235jpoxgqMgXBwGty9K7NHd4vrsAm96nB8j2nguWZQaOiLTaCcpJpy875q%2BST9YwbFHhwo45KNXmiE%2BXFGsAVtBRHu76w%2F7DBKzCpIaTl&X-Amz-Signature=e000eee13351894f613d66fab7384ac01daecc77404162ad4562c02d6778d1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67YBTSS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD1ObymwNrfRKs8RTdDxRhxfuFzHzvC8maBEJySfgAEuQIgYgX7Cgv1IMJajUyUYdXL3F0aN0ckaP1QWe09e9Vx8MAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUr074it%2FtJBqRieircAybKqW1NkKQMA59qCPZ%2B3auMv8coJJjY%2FesDo67XjEps1MVpAo9JHRFOmJkw36weXOJ2J4UN5%2FhGxBYQMuW9w3olxGwyIzCkX6uKyQIoEpye4AaxGRv%2BkT9cg3uMp4w5IzFT7UPGZIo4nI45m1Cw%2FoO%2FPXW2LGHiuGyYcXgfeciZz2ULpX3Lt7LD4r7P5KX42pXRNdK6DFHBsp%2Fe1VYsZgJzanDSwkNjwVEY4QMPMjXRvHLw%2FTDtoyMweMcZLMXOM9Sx%2Fz9mrksHblUtrYnRViG2oKSHcKnmev90FYQrxL8I4JocdCLXp5nzxQFNOaKgQSYhEkn4aAPKzxcF7PsIKXb3iYfIkGbECKXy%2BMxED05tmoWV0FjeOgaH1Cx7R1fXqj%2BICIpxQ7DgMhe6ps9EJHdqrBqWWUZeCOPyBkWO6d%2FYddPVLHpAMu3Y1sgKgcUf9SjVa5ht%2FCHCPCn9JYbC2wY1NF4CSYsEsrhGq%2FZaOCQ2YFuFs8I7ncYzhc2wTkyMV%2BO3hNEdd28Zf1EDrz96BG1AnX0sRez%2BlZkFJyM82qMLu5kJyO16aUTO8vGPvJY%2F5TY1V0KQVau56tctX2D6TxTUdrlIgcvsjO5nmzl%2BE%2Fv2SLFzxQ94Svn3HoGNMJ%2FYpr8GOqUBAzqYKpgsgbAUX70g8cJMtR%2FXNJQTqseVfApB5da6Ksbg9GJOdEpbwf4S0EZLFTvtVno%2FdGDzJhylkgq0HMNXGCUwEhYSnAISMrxjpOdKcA32L5VFkWY235jpoxgqMgXBwGty9K7NHd4vrsAm96nB8j2nguWZQaOiLTaCcpJpy875q%2BST9YwbFHhwo45KNXmiE%2BXFGsAVtBRHu76w%2F7DBKzCpIaTl&X-Amz-Signature=3fd2564e72564184583c93107aef5420aa93b18950a66d62f384e97298abc6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3HYTCZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQC4HXQDG6TLmd5mcqVy62rMkrcDWd21UqPQS0Y4tG3zFQIhAJbB9368bJ2z0zIGTzIOKma3Bn2gfR%2FXgsbXOtYLh55ZKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUQFyw8QIwpOcSoQEq3AOxjL5K%2FlZYYaLUbCpyietSa6bUibvnsrgKOjRD2lYXcH8hHrxH%2FPqgficmSPyIDXH1Ry4LoSVNpjq2metXNxp6lBJ4HffDZptNRJ3iKISyEEI2hdAo%2FvBUf%2FO%2BlFCnDoEG55gRdXso2K%2Bmq15LNG2v6Ugk2EE9yYfIdf4kQfNUOczCkx%2FzJ%2FkkEz8V8Cqbz%2FlJJP%2F%2BSx5hK1plhFO%2Flu5gEVqQ2ZxR%2BWD7dxwO4KgTIxZEq%2Fz7U03SeDgcWdjBmB0V6nfKPTgbRfZ25fNM3ZdGMFzbSegjh2xPLGQwZB1iCWJQNpS7xWK%2Bm8zu%2Bw%2BkQBrv%2FJOky60kyQepLrZh%2BvhlQNap1mrBM8PQdAHdcqLYUleI3ypxR%2BHYEQoh14N281nXfFVoT6H1JyNKqdPb%2BGQ9FPFONqQ98cJOvuPXwqG8xkSMfwSTezU4k7NZf0uh%2FTA9hAPSEEzyCnNlhaA3NSvqKUdWxdcbHwnO4c4HQqkC3U8%2FcrYDs%2FY8J%2FoMOSNSlKvnpQ5XxHwGEhS%2FbVxnVh9yu9jzYFAynoSuVg7opT4r9SzH3hMccDIR3JefCk4%2FHmScGZEfpnRZvdX1wEvGhPriykCp1t%2F8D7HlCOWwy2eXR40B2GcNTW9umbaxTzD416a%2FBjqkARZBnmQiDkyU6ZgPGCNfwDEapeEAMXoMJcPbYVaFDl%2BJI%2FyXhF9PWDe4J%2FU6h7z%2FLChfxWGuMIP%2BypZirx2wyhYH1YZHFECL8lmav6O3%2BZOtwxVO4z%2B7QCyliHYRyefgCjjePzBb5kfXsWuYfrHZcpPvBsSpoBiBjXIKQ8psXe3w6zmftqflfS2RpDx%2FLUm32yUuo1n9kr2Tij%2F9nOxvGCkqY4I6&X-Amz-Signature=eb8d463a4e42482a54c2c2be75b871d29891e09a1438155e552c1b49bd0a83b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WN4TGHR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIFZB6%2B2bCTjMz%2BendDQH4rE5AyIrdG1%2FB0mbWz5ZeT%2F2AiEApFZOSemDPSOrsQkAU3jSBnaUySW2XwXnnWUtcsKtvXcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEe5yd%2BG1QpmMYpThyrcA%2F6MJxW0njAbkzQW4WrGiWocTGCSMCS9IxDWVWQcI%2B8mQtZ5UjfKhmFGsnvbnfDPOFRSqlkXbzpxkG8TzYn4VHaf0N579OEHKkXKlzGpS9fhi20KRE4RD1o2wqftnRDuF%2FBo4se%2BcHb0RHAwYimlcfZpZ1sYeVwDfgXtwORnmKdao7RCdBUbaCWWkBGFCIM8RGxwO7Ac6ze74dOU8YL9%2F1gnWdKYOOosQxyxUgiipIWcZMAM4EdQrBtJ%2Fv26D1d1%2BTTy9%2F0izuamFcw7q4fmN6bFZO9M158lZl1kForSJ621JF5n7lbJSC5UBSLIiy5V1A4GskvYV9cbZ06TWwD1KAWctyuaycnZByu5Y4N6OPsCcsPpQ%2FpLPfCwc6BhRrFkZnOZW6cSQM0PY8jR3PLNXrAmtfeFOHO%2Fikno%2Fi7LL5GN7ttmzcgk1DhzY75%2FAdVpEBGwL3%2BGAw%2FhkIR%2FHFqHQ8HEpoD45WRgOWVaPCnEk2GJuzW8TlK1Us2RvYvUegOQ5QA5NSgJK85aCJIcu8Bxg%2FGilnIMAWwISNjDUxRlzehWkUECOyWrvYHhAIOYp3StbPsDw4zOGNNw7hd74%2Fa6wnakzku8V6VOuTwhOHLzBJPBAH9ljT2F5rrWzAs5MP3Xpr8GOqUBrzBqKKL90K3Oj0ms7Gg9V8P8%2BGEqR8veTKMaSqNurSlxmO94sMnhF9nxz3izxAnixxv%2BCcq6N2T5fOU7iOlhSmrPqoe7RyCl0E0%2BW9yhIgD6lbrSzNw1%2Bv3kBlS4iIv7YTLLWIsVKF1FQw1ySWnFJEF4ZAbtR6tPKyS6uHZeahFCfR2LokdTO7xODS%2FJ9w07q%2B1zW9XxSi0WfOG6aBEKBNUl4%2BUl&X-Amz-Signature=ed12746ae5f08e4d9842c3548fbb184661f6c4d7b7f18c53fb497596340657aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S67YBTSS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQD1ObymwNrfRKs8RTdDxRhxfuFzHzvC8maBEJySfgAEuQIgYgX7Cgv1IMJajUyUYdXL3F0aN0ckaP1QWe09e9Vx8MAqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUr074it%2FtJBqRieircAybKqW1NkKQMA59qCPZ%2B3auMv8coJJjY%2FesDo67XjEps1MVpAo9JHRFOmJkw36weXOJ2J4UN5%2FhGxBYQMuW9w3olxGwyIzCkX6uKyQIoEpye4AaxGRv%2BkT9cg3uMp4w5IzFT7UPGZIo4nI45m1Cw%2FoO%2FPXW2LGHiuGyYcXgfeciZz2ULpX3Lt7LD4r7P5KX42pXRNdK6DFHBsp%2Fe1VYsZgJzanDSwkNjwVEY4QMPMjXRvHLw%2FTDtoyMweMcZLMXOM9Sx%2Fz9mrksHblUtrYnRViG2oKSHcKnmev90FYQrxL8I4JocdCLXp5nzxQFNOaKgQSYhEkn4aAPKzxcF7PsIKXb3iYfIkGbECKXy%2BMxED05tmoWV0FjeOgaH1Cx7R1fXqj%2BICIpxQ7DgMhe6ps9EJHdqrBqWWUZeCOPyBkWO6d%2FYddPVLHpAMu3Y1sgKgcUf9SjVa5ht%2FCHCPCn9JYbC2wY1NF4CSYsEsrhGq%2FZaOCQ2YFuFs8I7ncYzhc2wTkyMV%2BO3hNEdd28Zf1EDrz96BG1AnX0sRez%2BlZkFJyM82qMLu5kJyO16aUTO8vGPvJY%2F5TY1V0KQVau56tctX2D6TxTUdrlIgcvsjO5nmzl%2BE%2Fv2SLFzxQ94Svn3HoGNMJ%2FYpr8GOqUBAzqYKpgsgbAUX70g8cJMtR%2FXNJQTqseVfApB5da6Ksbg9GJOdEpbwf4S0EZLFTvtVno%2FdGDzJhylkgq0HMNXGCUwEhYSnAISMrxjpOdKcA32L5VFkWY235jpoxgqMgXBwGty9K7NHd4vrsAm96nB8j2nguWZQaOiLTaCcpJpy875q%2BST9YwbFHhwo45KNXmiE%2BXFGsAVtBRHu76w%2F7DBKzCpIaTl&X-Amz-Signature=61a53492121de44cf6ca5610ad3b137d4803707036308905b3686d09e9dcb297&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
