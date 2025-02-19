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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3C2CHYR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGNY8Kl2Yu8ddJmzogdmmib74NVGzJfgNwX1ThyAhKMcAiEA0chYMZx%2BdntcQlK4KKiVESSr0H8wqG66UY9TnFNfRwwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6Lq3hvhXBuWo22byrcA1MEpnz8kkRoBM5TNYbT8vq7AWd8O8bp3bZRI%2FPhM6Jb2QKuGAdQZEK9zT19yEdKGJiLE1JsySV%2B%2F5pNF%2BAWetkkLRMYgXnMrdbedOT3E38%2BOB%2BO%2FwChNOQ5VzWN0nfY0QrxX6M75kxP1OikEPXq7p%2FALxRKZey0YWkU%2F3XCnQ3RKMrD5ADzl04CMAsF0HykPe0jIZcfIeIbCbp%2Bl1GrddwUN57plYGCRvjzcEbPRRIzTRBWxPOG8pFjSXB4fT4yMkRkDBBACuhbza4qBd4Fs6rH4rldCrB1eNY2XYUQXHfubhyH1O6gMF%2F38zyAjYgjQ0lDz71PAN5JnLW71Gf2K%2FjWeWCNM82wlsT78dYwOHPpVx%2FA0oTBDe9OAyukjNSJ20hZVV3mO4JpoTTrKDAe5GRrb2Eg8K3hs40gko8DoHmA16e%2Ft5FJHPxs0i4%2BUQkpeW7Q7CMewFNO64LDFltuF%2BvOEd%2FdvLzK4t7Ub8inuNj%2FkGvOKHU4yykl2YMj9234%2Fc6Xt8juF5aNlWKVyyzQdz4alcgOyolsSfvphf4hcnIvrjICFJnXLskRu%2BaFg%2FoFPRaR%2FxvraeuZ%2B1bKTUmVyCJDdBuigfxyFiOJDy%2F7rH3d2bOANgI4GrbjrG6PMODE1b0GOqUB84pJWbDptXqkb1mxOlv9GwmKyelu2aJwnonppFVp%2FYv%2FOc%2Bmqn2jR1RsZ7Mcq4suibXJl17M%2FZ5yqQINhphjK%2Bn8jdc1%2FQ4byppkDBu5wIg2MG1jU0DDKJhUqi%2BRM2OEOpCPq6ySV9A6o9RyHFYZLBRVjCXGnUVQsECjQuHbJfo5YRN34IoAL%2FzEJNc2V5Yel%2BTxVHSqM69qyaaGWauvnvg%2FYLrw&X-Amz-Signature=ba2db531142024d00812bcd869e57e68c9f8c3f43f9973fa451b342441826630&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3C2CHYR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGNY8Kl2Yu8ddJmzogdmmib74NVGzJfgNwX1ThyAhKMcAiEA0chYMZx%2BdntcQlK4KKiVESSr0H8wqG66UY9TnFNfRwwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6Lq3hvhXBuWo22byrcA1MEpnz8kkRoBM5TNYbT8vq7AWd8O8bp3bZRI%2FPhM6Jb2QKuGAdQZEK9zT19yEdKGJiLE1JsySV%2B%2F5pNF%2BAWetkkLRMYgXnMrdbedOT3E38%2BOB%2BO%2FwChNOQ5VzWN0nfY0QrxX6M75kxP1OikEPXq7p%2FALxRKZey0YWkU%2F3XCnQ3RKMrD5ADzl04CMAsF0HykPe0jIZcfIeIbCbp%2Bl1GrddwUN57plYGCRvjzcEbPRRIzTRBWxPOG8pFjSXB4fT4yMkRkDBBACuhbza4qBd4Fs6rH4rldCrB1eNY2XYUQXHfubhyH1O6gMF%2F38zyAjYgjQ0lDz71PAN5JnLW71Gf2K%2FjWeWCNM82wlsT78dYwOHPpVx%2FA0oTBDe9OAyukjNSJ20hZVV3mO4JpoTTrKDAe5GRrb2Eg8K3hs40gko8DoHmA16e%2Ft5FJHPxs0i4%2BUQkpeW7Q7CMewFNO64LDFltuF%2BvOEd%2FdvLzK4t7Ub8inuNj%2FkGvOKHU4yykl2YMj9234%2Fc6Xt8juF5aNlWKVyyzQdz4alcgOyolsSfvphf4hcnIvrjICFJnXLskRu%2BaFg%2FoFPRaR%2FxvraeuZ%2B1bKTUmVyCJDdBuigfxyFiOJDy%2F7rH3d2bOANgI4GrbjrG6PMODE1b0GOqUB84pJWbDptXqkb1mxOlv9GwmKyelu2aJwnonppFVp%2FYv%2FOc%2Bmqn2jR1RsZ7Mcq4suibXJl17M%2FZ5yqQINhphjK%2Bn8jdc1%2FQ4byppkDBu5wIg2MG1jU0DDKJhUqi%2BRM2OEOpCPq6ySV9A6o9RyHFYZLBRVjCXGnUVQsECjQuHbJfo5YRN34IoAL%2FzEJNc2V5Yel%2BTxVHSqM69qyaaGWauvnvg%2FYLrw&X-Amz-Signature=30db6252ae3ba7a823ad0eeb40fed472e0c35b33acedbcdd7af95db2a8535b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OXDY4FZ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCd1PYe81xk3lOiDFMQZMWOqNRCpDVJ6hNwIifnurGxQAIgFOjOpskh2q5nXNk37TV4JalA46vVRH9rORE2VvKBmKAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOAlsW6FbESFd%2BTKircAySI9rD9LUbvfo%2BpeqzHr0nsOEi3VqgynYgJMn3v9VJpwYaHMdSHv6HCsSgTxmzg4TAP7Q%2FZQ76v8jFXRURjZC0NohAr%2BlS854YRMAcQsG0GdqsWN7Q8PFuh7%2BIwrBTWtaMMXWQgohU0uPnsQZch4rj5EIGLRWsnHMmulMREmrc02s6ux0liMP9luLh8rSPmN%2BxHNTofV8tsysze3CU3sj3uAhr8QSoylUdz4ooCa%2B%2FwBVuE4kNPN%2B8FKOrKm5tB%2Bj8hgUbN1KUI69ricxcZMiPMvXiWT%2FFSlE8q77pB%2BwxpKTqYmwfB290DAHd6cmDe%2B%2FSgqx9mm1LvTwjaWMmRcSJez77WeO%2BbkisEKXFgS%2BLSuhwDjo8XlfvTpUpJidErKUVFG4rbA46zSOZSxYd%2BOe4Zx5h%2B3%2BXs8hPHFjb8pOJiQQUeFcHJWnzzdRWSMnMqvL%2BM%2FbY5NG3LEYbSYD8N2tXeqlbZhcKfVSWUyWJ1r2Opb1su2jzT%2BIHwRVV%2BpifVCeJqa9YzykoNfDRNrk2fhR%2FNHjEUEW2qw9f1tyDvrckG3K2RnplxKlqEFBxWil%2B4PGFKkPYo4ry8Vx70q8hQUoxjYF41STZ%2BiqzSF6rdFEJD5VowQw7jMAvJg5R5MNfF1b0GOqUBT4rhDZZmGZEnYVqa%2FrIqIVhNaZHnVgUXZe8Mhkxv6SBoh2vwARE5EfMQvQ82ZRA3NMCa2nCKq3phhEmXYP86B8utXy8UoH8ReZNGny5Syfjm1kANeILDMQ4dFo0cUPJ3lS4JBS7bm6vmunSSYW01xNKp5DzRelUDHzQ1dSp2TTr9MK%2Bawrem21qCh2YCROK%2BzRJf%2FbXKM23n2YR%2BpGCyJw33Hitw&X-Amz-Signature=b1cef207aa9386b788a4866024c25a4962d04925a17308bbe85e9f86e8305362&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6KPUHUT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCIbUbug69HEMlkoXzMjTRhH8NjJb6%2F701M%2BiDYFxtFFwIhAKk0x01bm9MZYrpHFgunuKbK9yeHn18PPfaMFDss0DeqKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzpu%2BqO3WyXWyN7HVkq3AP7DV6PwblgW7pwJSjDeTrd9M92QEi7ZKUnrQEyb8kvKfeZOs6As7TuwxmCR139%2BfXFizCA6DUy86TmBSOi3SNvUpHVcp1Qagb8CzF45UWX6fYrjInZ27EQj%2B2YhBAWQZW5zvbNeubexm%2F7lC2XbQWXs62zgYI4DHjMDowel8%2F9Q1jG5gCzVyTQePjWoRb2DiqjJPiNmKbmaJk11hpVhwzuSiz5lGKOYtHYjAtTowCco0qOzQOW4kjhPG6yzz7VS3Le2LgPrzFRhEMsmNb%2Fftv2mXJvD5moXFEnxVx6YzeD0LiVjC0RQWbZP7FXE4j5K45SDV4fFn8jkcKCjjM0LcYovg1eoz%2BsPPVVCgusQ8x0oa1PRVGzd4THbvPg7X5rAxNi%2FL8afk5AQ50G33CRB5SlLhSdngb%2BNaiEgM2ZGKAq27C2JaokW6xcTfbk08v1SL99Eu65jcuVVBKnXFVaPPReovfKXmlKAe8%2FgmDoO1FWNqF5njxlAhEaEztXPbLhoYiV1qGnmqj2kKCFcuXtLfbCeieB%2FDXY7175%2B4uKfETq6%2F6e4FvwmvBXPtBeLlTMHf0S7Ld78q7je8TL8Uazv3sXHyURHPThnuIsV3N3740NVhAAQB7W5KLR3JmmSzDXxdW9BjqkAYteEq%2F6z8oFQ5i8gQxzCtkOdfpGyOwJD3r2Rd2Qr8fxFqsBRwkAL3pCyjEg7s6S3bXMxrjQOZ%2FiA8W8srqIEKaqdFAmBOI8QoUlZmED3x1k0IXJ1dmHBiYXDBIBLfw1Wf5Zsq8cYVgjcRanwu06HTd5UmGRzufcdk9QfuQ7bFDW7s1t7sr5h7aOjCAeBqTROpWNJSSAxPOXqrpbqxMXSPBeCYtB&X-Amz-Signature=a35274f7d3dbeeaeed5d1b6bf5a2eb60a6f61555b7466ac256345a488c176e27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3C2CHYR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIGNY8Kl2Yu8ddJmzogdmmib74NVGzJfgNwX1ThyAhKMcAiEA0chYMZx%2BdntcQlK4KKiVESSr0H8wqG66UY9TnFNfRwwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6Lq3hvhXBuWo22byrcA1MEpnz8kkRoBM5TNYbT8vq7AWd8O8bp3bZRI%2FPhM6Jb2QKuGAdQZEK9zT19yEdKGJiLE1JsySV%2B%2F5pNF%2BAWetkkLRMYgXnMrdbedOT3E38%2BOB%2BO%2FwChNOQ5VzWN0nfY0QrxX6M75kxP1OikEPXq7p%2FALxRKZey0YWkU%2F3XCnQ3RKMrD5ADzl04CMAsF0HykPe0jIZcfIeIbCbp%2Bl1GrddwUN57plYGCRvjzcEbPRRIzTRBWxPOG8pFjSXB4fT4yMkRkDBBACuhbza4qBd4Fs6rH4rldCrB1eNY2XYUQXHfubhyH1O6gMF%2F38zyAjYgjQ0lDz71PAN5JnLW71Gf2K%2FjWeWCNM82wlsT78dYwOHPpVx%2FA0oTBDe9OAyukjNSJ20hZVV3mO4JpoTTrKDAe5GRrb2Eg8K3hs40gko8DoHmA16e%2Ft5FJHPxs0i4%2BUQkpeW7Q7CMewFNO64LDFltuF%2BvOEd%2FdvLzK4t7Ub8inuNj%2FkGvOKHU4yykl2YMj9234%2Fc6Xt8juF5aNlWKVyyzQdz4alcgOyolsSfvphf4hcnIvrjICFJnXLskRu%2BaFg%2FoFPRaR%2FxvraeuZ%2B1bKTUmVyCJDdBuigfxyFiOJDy%2F7rH3d2bOANgI4GrbjrG6PMODE1b0GOqUB84pJWbDptXqkb1mxOlv9GwmKyelu2aJwnonppFVp%2FYv%2FOc%2Bmqn2jR1RsZ7Mcq4suibXJl17M%2FZ5yqQINhphjK%2Bn8jdc1%2FQ4byppkDBu5wIg2MG1jU0DDKJhUqi%2BRM2OEOpCPq6ySV9A6o9RyHFYZLBRVjCXGnUVQsECjQuHbJfo5YRN34IoAL%2FzEJNc2V5Yel%2BTxVHSqM69qyaaGWauvnvg%2FYLrw&X-Amz-Signature=20bc25f8ceb28c3109b3d8264cae46f2e4b3d77bc9e9388ad523d3d5d5ba18bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
