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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUOA6GR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBJpXK7eaGThCbksVsIIZ0gSh7Q9Sv7RNAmGa0gy98rsAiEA5cpleSFV0Xb7NbAlGdKXBY1r0htzoT2kUU%2BkHwRIHE0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWtRb61k4YZdvaFXircA4FF2xqY2QxzP%2Bkq3jPw9LQqkZ%2FLRkpwRQJpoaVZYqnLLjFTJuv35nPv%2FZze6JB31SL6gHClO9YEoUMNXtWrGHPE8etLP%2F8ptwDvZXFLrOMWKkAXcYs8KKnWkXnocpo%2Bpzc0dzoIJwBfeGzb6TEDXHnfiSNVZb71LtECn0SN7bqY%2BBLO0tWvONIfQXBLYU9RGy5T%2FLqSF0KhBMcRh70hneIrpXNJMebpKwfuI3fspN4GkfVoF6UrkV%2B4NhFOPU%2FikaZ9%2B4Jw%2Bi%2FSg5IY4OEMpCiVh9Glq3kKBtyMcAvF%2BefC5dqSyPsjX5RT45o%2FFGd%2F21CKUQvtlxWVumpBUOUOu4bO5VzzZHDgqVNgCGE2c7rADCvplLdG5rCupoLrIHS5G32BbdwCfWzs%2BETuwvArAofIYhE01882SXZG72cm4MwFo8yfqzj7rhxpeXmGsaGeaPl58D39MV8Gr0apDnOl9ptjKibcXlsW5p0KBtHq6A841eAZfe54JZgIuHigT6bFP6IrawV0sTvE6AcPZZtCL8mOmYwjoXvTTsbru2jqFTJ8znXONAmLCzvjPRhwbWgze7bVQG89Zbl84upa90eznkEwbS%2B8Duk1xcb3RCFfo6LP2H36spI14B%2BpCEINMK2l8L4GOqUB0k8UnmddfAIjhD90PU7RdbeG1Sd9j%2Bq2LWdm%2FawLMU%2F9DZPtOoUXfggkj9cYx8WE3b%2BHWN%2B%2FuGLK93aFbigRFwmB1yuUJKgvU2mf1rtllIq%2FMzRVpaNWGM8nyri0NpoILwchYuUixdDbR3Ut2PNBVWf6qhZPU6V1ayxC%2FLvzpJhc8CltKWn0%2FL%2FGuwkeDQz4qpgSYDBKt6exRG4rObYYObD2QibL&X-Amz-Signature=89ac0c8e83cdfe960b8d711664c7d4c7224f289822d30d1b85a5ba8f594f8acf&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUOA6GR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBJpXK7eaGThCbksVsIIZ0gSh7Q9Sv7RNAmGa0gy98rsAiEA5cpleSFV0Xb7NbAlGdKXBY1r0htzoT2kUU%2BkHwRIHE0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWtRb61k4YZdvaFXircA4FF2xqY2QxzP%2Bkq3jPw9LQqkZ%2FLRkpwRQJpoaVZYqnLLjFTJuv35nPv%2FZze6JB31SL6gHClO9YEoUMNXtWrGHPE8etLP%2F8ptwDvZXFLrOMWKkAXcYs8KKnWkXnocpo%2Bpzc0dzoIJwBfeGzb6TEDXHnfiSNVZb71LtECn0SN7bqY%2BBLO0tWvONIfQXBLYU9RGy5T%2FLqSF0KhBMcRh70hneIrpXNJMebpKwfuI3fspN4GkfVoF6UrkV%2B4NhFOPU%2FikaZ9%2B4Jw%2Bi%2FSg5IY4OEMpCiVh9Glq3kKBtyMcAvF%2BefC5dqSyPsjX5RT45o%2FFGd%2F21CKUQvtlxWVumpBUOUOu4bO5VzzZHDgqVNgCGE2c7rADCvplLdG5rCupoLrIHS5G32BbdwCfWzs%2BETuwvArAofIYhE01882SXZG72cm4MwFo8yfqzj7rhxpeXmGsaGeaPl58D39MV8Gr0apDnOl9ptjKibcXlsW5p0KBtHq6A841eAZfe54JZgIuHigT6bFP6IrawV0sTvE6AcPZZtCL8mOmYwjoXvTTsbru2jqFTJ8znXONAmLCzvjPRhwbWgze7bVQG89Zbl84upa90eznkEwbS%2B8Duk1xcb3RCFfo6LP2H36spI14B%2BpCEINMK2l8L4GOqUB0k8UnmddfAIjhD90PU7RdbeG1Sd9j%2Bq2LWdm%2FawLMU%2F9DZPtOoUXfggkj9cYx8WE3b%2BHWN%2B%2FuGLK93aFbigRFwmB1yuUJKgvU2mf1rtllIq%2FMzRVpaNWGM8nyri0NpoILwchYuUixdDbR3Ut2PNBVWf6qhZPU6V1ayxC%2FLvzpJhc8CltKWn0%2FL%2FGuwkeDQz4qpgSYDBKt6exRG4rObYYObD2QibL&X-Amz-Signature=077ca1277ab417e5f1b1f1fe3cdc65998dc04e18d6a315a571f72adc01deb1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V26X7NDN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCHn7cv1jEdAwviRXtfTkkMH5QZUoORmaVBVtWilHMoTQIhAK7JtSVtFkV29Ma2UIpaBJoPcrMoMd%2BiIejDjDN9MBcFKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO94eHYh2JDwcSLGcq3AMethHUAyAqC9C1ZZT%2BcAZUH5Qcitp%2FH%2F965jai2GhQZVV02m%2BCdqkafoXtxM9rxYYdQgrcKRRgiMVwYhoWYtNa3PwmZFNlYFlAB4kuSIygOjOw649T1Z6R1dCLR8NCtK%2Fu4B%2FzRw2cFrPUX0HCT%2Beb331EpnZbKnE9wsmgGBLN2%2FipLjj4dzR0P3I40Q5jmG87lrmzrPF6Rz8IKKFGsDkAOo6v4t4ngAlk01vx5ohNNer43%2B%2BgIXNcyqbObca0%2F%2Fvx6iVt1XRfqav2XZqM%2Fw9JTNBtvnznj2GZQuw%2BjH4QggrVuVGXfe7kd3U%2BnuPvE6Nf1mxzAGKOohbobW8rThEWiqjMiDWBBxv1iKK0QYA6RWoRwlVhSoMU2W6odwGNK3KpHoy96mpjYYTVIh%2B1djDOcipeD2d3mdW7X%2BdlPmAIyncImpn%2FyfTEvqmelaJjofMCaeup5Cv4gnv%2B%2BTTC42PXZJOkO8uxKF9QVdqaoQmtGMhYUgJJa%2BBW%2FFDSM%2BGLzgzZWLSALN7d2T4k6EhdyaDvOvlWxCYRFZizz0DbaXLcWeCojCRhEFIMRFkdSB3CEFbVp6UHFriZU7MqpM35berY6uz%2FNdpRJ2EzykfHyAyH3jl3Mt8AuhEqspiSaDC8pfC%2BBjqkASMFRqieyfNJy6Ox7j2xnRYtYPxLSJrUDYVE4%2FB5be0pMn8sEAlfEM%2FAug6zmT%2B8i0AZRfoitqcYu87tWRnhxw0%2B%2FagaOnR9Av2PZOBbsYkQLi64eK11txdyWHWpn0GcS3ejcQdnYr9iT%2BdZv7Ui3cCjHfDYv%2BeDqfYbhBIM7acVUugGlyBDZO5jop9sZDUNk3QLiVqSZSHuBgrbk20L3b50dySg&X-Amz-Signature=568ce9d5ee3539f348b145d7e92e8b0eeed71a407cc0ecfa4634e985cdc296f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSUYBKC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBtRagba%2F33i7PG%2BLa6hmpa2Hz9wBotgH9cbtXsdRT8NAiEAkjTYx0NiCsTh6iRDSditXw4HCPuqC%2FToAYLd0uHBftYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1mNJdOCKM4m7qeOircA0NqS3qZsm0G%2Bq4zyMse04chTxVs5iFb8UpNfG6H4c0TUiBhaeFCP06bNfcGBMIlw6pUTBlbT8g2KuejlDkXdJyscnImw8SR0aYBb%2F9uA2kJ4LYueq9Ka5cyAncYdneC3Y%2B7Ndll15WoB5UEjH%2BFqPeVGDswM5XsDkdOACS%2BCvRZCE4DEwKPDiTWTtZmn0rl0t8aMw33pSlLBvBiuDALIuCNqs7SbSD3A5GZPawhkn4b48Y3LWjuodRrfSiFa7a7X8hpA1s%2BfiSAS%2Ft%2BSsYB0d9RaVs%2BE%2FIO%2ByW8j3%2F8HRJYyfcDwpPD1fHvcDzwzzXAM9lq3G601XKr1zPUawumf55P9cY8RkA%2BSh5fmhh0C99rPw1QzHp60JoZWRhV%2Fr4j%2FaMapaaAJ49yJyCTye7HmfR09oE8Bk6mUv%2BGC2EAHizlZEvnyrUZKEJDahCWrQg3ryVOq6QI7mT9tb8zJlkV4JXuVqUM4q20D%2BCd3L7Gjm94y4%2FfsSmmyWYd4MSWGVmlWbl2BWc5A4PSjtg1Fb6mr5MZDjvgPkEhByoEt9bFXBu5ASJ50O8ygplpONKhBzw%2FEw8Dm3El0gVJvWgBK%2BiYiXmwDoGwZBzufWbSG%2FrGlzCJtsQ1Q%2BUXrtzj9g6bMMCl8L4GOqUBsyc%2BcufK81axibDYrbyOE%2FikcQatY7oEnK8YvVumUGzq8Mdtj3By2HyV4obzy%2BfdNBoRmw%2BQNrJADBDJlfNL9uow5RiEoo7ued448fBB4pVBLf9RvdmK1JRV5QpbvP%2BwMwgx5gz8pgrBwDEuo87XjW7Cvn8u85cVh5VpnY%2FKziAnMNUbAolkdCor%2B6Ctq4utMaauLTwKGBFwo%2BDREJ64ZSWOAgOX&X-Amz-Signature=c792f4a0b0ea7c23b9cbffb39ef05ba35ff1a779f188bcc0e2c8920ce733ad53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBUOA6GR%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBJpXK7eaGThCbksVsIIZ0gSh7Q9Sv7RNAmGa0gy98rsAiEA5cpleSFV0Xb7NbAlGdKXBY1r0htzoT2kUU%2BkHwRIHE0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWtRb61k4YZdvaFXircA4FF2xqY2QxzP%2Bkq3jPw9LQqkZ%2FLRkpwRQJpoaVZYqnLLjFTJuv35nPv%2FZze6JB31SL6gHClO9YEoUMNXtWrGHPE8etLP%2F8ptwDvZXFLrOMWKkAXcYs8KKnWkXnocpo%2Bpzc0dzoIJwBfeGzb6TEDXHnfiSNVZb71LtECn0SN7bqY%2BBLO0tWvONIfQXBLYU9RGy5T%2FLqSF0KhBMcRh70hneIrpXNJMebpKwfuI3fspN4GkfVoF6UrkV%2B4NhFOPU%2FikaZ9%2B4Jw%2Bi%2FSg5IY4OEMpCiVh9Glq3kKBtyMcAvF%2BefC5dqSyPsjX5RT45o%2FFGd%2F21CKUQvtlxWVumpBUOUOu4bO5VzzZHDgqVNgCGE2c7rADCvplLdG5rCupoLrIHS5G32BbdwCfWzs%2BETuwvArAofIYhE01882SXZG72cm4MwFo8yfqzj7rhxpeXmGsaGeaPl58D39MV8Gr0apDnOl9ptjKibcXlsW5p0KBtHq6A841eAZfe54JZgIuHigT6bFP6IrawV0sTvE6AcPZZtCL8mOmYwjoXvTTsbru2jqFTJ8znXONAmLCzvjPRhwbWgze7bVQG89Zbl84upa90eznkEwbS%2B8Duk1xcb3RCFfo6LP2H36spI14B%2BpCEINMK2l8L4GOqUB0k8UnmddfAIjhD90PU7RdbeG1Sd9j%2Bq2LWdm%2FawLMU%2F9DZPtOoUXfggkj9cYx8WE3b%2BHWN%2B%2FuGLK93aFbigRFwmB1yuUJKgvU2mf1rtllIq%2FMzRVpaNWGM8nyri0NpoILwchYuUixdDbR3Ut2PNBVWf6qhZPU6V1ayxC%2FLvzpJhc8CltKWn0%2FL%2FGuwkeDQz4qpgSYDBKt6exRG4rObYYObD2QibL&X-Amz-Signature=dfa0bbde6072c1762b62e7da43ef1da7c2fe4ea954b72c9468c1489905434278&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
