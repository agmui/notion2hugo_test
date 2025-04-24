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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOCHGTQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xBvsjO6jWSgsNcC6r1hOeCldYGZ%2F3kJmO%2FA4kBkr6AIgNAjotS23znHXb48CGRE%2F0%2FUYMqGTenjPcRNpsmekq5Mq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJzfvVsuKlAtTt4k8CrcAy9DfXzsb3XaKAtsGfDd1nKD%2BGeLVPQx3QdgwRPqvZKRbi6tYBzO%2Bejlf7Th7UkGzguBVB6axmbVreFa%2FwKSZP8kLrZg4Jdt%2BcdJ%2FXmn5FUe58kzHE1EOorRkRJZp5JA2K8P0zzYz6U81R5cxXVrEtu9ej1PE29eNcBKgfNpQ3WkR%2F9ZPFT53Ade65dv8%2FMDogt62wyiJEHu0u%2B9BSwX6DCU7MCFssZITq2t6VyEmnWnjGxW4W%2FsHkiL1HcWqo0kQTRV%2Fmq%2B1CY%2FMTEBFin4%2FeSsbHuO1q3k9RovG6LflaZ9BMfoe9vME9kF3CnYzLJ0rrEFosMxc3q2xPnSc5HISc8uRHEz4Tz924ayHbtVs0VB9c3FumjOUbyqXO%2Fv4m3pkkWfG0KQoGLrMxiRWIURgHkJcOE4TC58qc8SsWkaewKfHMmufB%2Bj4SNRXj%2BGrsZxxtX%2Fv9nA8KagJ2yQgnpusuHHw%2BJt6FT9mUcxYYbCDHMj4eahSSKr%2BmvdIZUpLbZ5ACjbysI%2F36f1iSbqEoQd1llPeFdQk4hgzUS4cIBUanNJSvxDgjWvZx1qrnZRNA5MKAmVy48F4uagnpHll8IV3Ltbn1kUc2g0uS3wMv7PcMW%2FFeye63PQu2wn%2BpJuMLKkqsAGOqUBiqQBqq9AsrFVP%2BAhA0z47w7RHLmkSmvffLXT3cM0jyPrbP6wLOvUw8y%2B%2BKEfYlYhxdoGJsqpeGSerXLuT4PnWLKsOkJ%2FIkJWQvq3DG8V369QAPkTfiVCtve9m%2BfbxMkPFUngE3P50VsU8rj8Ldz3AHBaTkkRv8FpjrFP46xLe3OIZTICr%2FuqkItKMPZtqpcpluF%2FFtxlDNUQH0wT7FMyPLeC8Nml&X-Amz-Signature=92b5288181141605ec45b4b1eece82fc699c0fd29575c3e0924ade544b113288&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOCHGTQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xBvsjO6jWSgsNcC6r1hOeCldYGZ%2F3kJmO%2FA4kBkr6AIgNAjotS23znHXb48CGRE%2F0%2FUYMqGTenjPcRNpsmekq5Mq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJzfvVsuKlAtTt4k8CrcAy9DfXzsb3XaKAtsGfDd1nKD%2BGeLVPQx3QdgwRPqvZKRbi6tYBzO%2Bejlf7Th7UkGzguBVB6axmbVreFa%2FwKSZP8kLrZg4Jdt%2BcdJ%2FXmn5FUe58kzHE1EOorRkRJZp5JA2K8P0zzYz6U81R5cxXVrEtu9ej1PE29eNcBKgfNpQ3WkR%2F9ZPFT53Ade65dv8%2FMDogt62wyiJEHu0u%2B9BSwX6DCU7MCFssZITq2t6VyEmnWnjGxW4W%2FsHkiL1HcWqo0kQTRV%2Fmq%2B1CY%2FMTEBFin4%2FeSsbHuO1q3k9RovG6LflaZ9BMfoe9vME9kF3CnYzLJ0rrEFosMxc3q2xPnSc5HISc8uRHEz4Tz924ayHbtVs0VB9c3FumjOUbyqXO%2Fv4m3pkkWfG0KQoGLrMxiRWIURgHkJcOE4TC58qc8SsWkaewKfHMmufB%2Bj4SNRXj%2BGrsZxxtX%2Fv9nA8KagJ2yQgnpusuHHw%2BJt6FT9mUcxYYbCDHMj4eahSSKr%2BmvdIZUpLbZ5ACjbysI%2F36f1iSbqEoQd1llPeFdQk4hgzUS4cIBUanNJSvxDgjWvZx1qrnZRNA5MKAmVy48F4uagnpHll8IV3Ltbn1kUc2g0uS3wMv7PcMW%2FFeye63PQu2wn%2BpJuMLKkqsAGOqUBiqQBqq9AsrFVP%2BAhA0z47w7RHLmkSmvffLXT3cM0jyPrbP6wLOvUw8y%2B%2BKEfYlYhxdoGJsqpeGSerXLuT4PnWLKsOkJ%2FIkJWQvq3DG8V369QAPkTfiVCtve9m%2BfbxMkPFUngE3P50VsU8rj8Ldz3AHBaTkkRv8FpjrFP46xLe3OIZTICr%2FuqkItKMPZtqpcpluF%2FFtxlDNUQH0wT7FMyPLeC8Nml&X-Amz-Signature=7bff3384498cdd2120d33c8d013eecf3772a46b39d930a2b0bd197128556195d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UIFWQA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3x0tXZvLktKTxMENMOazBBYv0yVZzwXMlPmn1dZRMGAIhAL74x5fdEeZubR7w93s1dqCFKtrFpniNbbPUJkuittLLKv8DCB0QABoMNjM3NDIzMTgzODA1Igyo1N%2FqV%2BCkFpqALawq3AMN0PkpLW%2B5sRDQtf8QqQsFT%2BVshWpnT6y7d9CoKKAyj0oydmqlZvwuI%2B7o4JJkhTHqZ3WFnKcBMrphfxHZ%2F%2FG57BAXR5zFeIv39Hx9RctKO0%2B1tqID9uk7UwKLwPyVwqSi4HbiYgKGVDbYnjDdd0XYXEKXBo7%2FPu5wsJopYifXid8QvUnExWx5pvQ21IRZb1i%2BPpxsylwhLj%2BKD0q27yQF1C1yJey2Rcqrf6javZd1qGdWqts9ghU8eQbLKW3xNH4iLTdH6VdhzP2355DxH6rIG2zy8mn0wjSbawNW%2FgMJ8NIdP8z3FPdS%2By%2F4hinIBRCJ2zazvgSQ4PHArv8f3%2B7qsN%2BOXctudeP8qWsUGv9Lf%2BwFygdvgAFr1%2F9QmB9jDRcJbemQjE5INqvwGPjfIniku1Xjz49Rt57UUgakQaIp7gRlhGfWEQGh66EZjxJCw7GXwoGoWI%2BKERVpXNFn9W6Kl3cUELrhx3jnKVnVM0HSef6z3QUJ3dpjFLeRVibXcJwuav2FMPivz7lreigh6gwsYbZT6%2B0wnBCvLaPo9QpF%2BUgDaXODArsN8RczuNK2FFwoQfJCxDLXOynECrNvGG7K%2BUg%2B0MNmtTh3OKhSEV28zS4zB96uKFj6MQ0nKzDTpKrABjqkAXsVY1N2qKNLQS%2BR9Pf05JgJTOk%2FBIXzXMxFbTyzAdfH4qyn1%2BPyrOB%2BeuPzJpo35DYiqb0upZ1XKPyZEHjEakOfDblN1mIEXtJ4nqiUawNfXk9esmgZunmLTyKJxWuOpN5L00TJzy4YMu07n0wm40r4WaxOCDKODT3lfHOo%2BaF%2BBB1TxgUvnmj5p8jzl%2FkIP2SpYaq4ERQQJJ62CoNjotYwRAft&X-Amz-Signature=875df31cc2841aaaa41099cb98067f7492422cbcab5171ccfb5d76a17a0c8b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOTATJR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVA8IfSrqOiK3GfZ7TbHHPmsmzYhKOefb80eFzRdsQAAiBPBGkEwB1OAFVCwUt0NVMCRZTGuojgy5mTBJ3djEGLYCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMzHwXVDMfkIS%2Be%2BSsKtwD7NrvIZ5ZXfpESUZip7Vl0xaOo0h6R%2FWFp5mRHWBBTZojvyF65xmpA0zqdcyD61j0%2Boahq5XQfY829%2FasHJyTQ4C42FFwiZeZ5ZTrHxqedrXHpSRy9074DsRRNVR5Yy8Xk7n%2FjIZuTUwpJJTtDZnELuVOBlC1SLdwable9TWMenX5uJNEWauvL9oPQCAMbJC9aiKglBVoZP3c7qVCgklGSygDsuGrNVNOr%2BnE9AmEb12H8IVNTINH4Jl2dCEw3%2FrEMXso3O6fnG%2B1ag4zcAS4Zf8BfQqPvp8VOI8xzy4u1Udbu%2Fur7nJVEwRQcbvDYiyOErXxTQOPJFKJXDnS567dZILSzHSi0G%2FhpBTK0iNhxKR82M5G8lMsQGYQ5q2bsqO22qUpHLWektKil39rKtceZnEOXqdxxZhiQHDq3mIc%2FGip14nqxl2%2BV3ZikNe7JZiLDxghZNim7H%2F%2BNjtDtWUY5vuSLQn9KiEFJN4LP2q38vAn3NxZQPGIBtgb%2B6A1ICW%2FbiLNZ5BcK86IOKUpe9kgHNyqjIszGO5aFZPyNfAdRpawrJZpI5ivx%2BI046j6MvFsktMmmHLJS8csYT6EUyBAhzS%2BhMgeodMdw%2BMGxT1T5L2LjOeL3mWgpRPUOYgw6aSqwAY6pgGjyF3mv9c2AwuN93%2FLMthaD%2BRLqLpwmxLvDZ%2BdQvjlhbp%2BnxCZiZHToAogd2RLBz%2Bq5vTbDXqToPuTXOyJDm7BrI322qW6OARWPbSQo1Pv3H0d8Oh%2FMQinzAFCCmM656zSYAXh2Gqmja4lxFV3nUcMl8SvORv4PPrvF1OIkX04YZbcQuEz3fBZPuT6SK%2Bjk4G7gDP%2B137zstutfXVswq%2FACsrrWUh5&X-Amz-Signature=fe26081d9bc7ed724bd31cb407fa688bf5d6485ad3d335dbb063fc0c623c44af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOCHGTQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7xBvsjO6jWSgsNcC6r1hOeCldYGZ%2F3kJmO%2FA4kBkr6AIgNAjotS23znHXb48CGRE%2F0%2FUYMqGTenjPcRNpsmekq5Mq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJzfvVsuKlAtTt4k8CrcAy9DfXzsb3XaKAtsGfDd1nKD%2BGeLVPQx3QdgwRPqvZKRbi6tYBzO%2Bejlf7Th7UkGzguBVB6axmbVreFa%2FwKSZP8kLrZg4Jdt%2BcdJ%2FXmn5FUe58kzHE1EOorRkRJZp5JA2K8P0zzYz6U81R5cxXVrEtu9ej1PE29eNcBKgfNpQ3WkR%2F9ZPFT53Ade65dv8%2FMDogt62wyiJEHu0u%2B9BSwX6DCU7MCFssZITq2t6VyEmnWnjGxW4W%2FsHkiL1HcWqo0kQTRV%2Fmq%2B1CY%2FMTEBFin4%2FeSsbHuO1q3k9RovG6LflaZ9BMfoe9vME9kF3CnYzLJ0rrEFosMxc3q2xPnSc5HISc8uRHEz4Tz924ayHbtVs0VB9c3FumjOUbyqXO%2Fv4m3pkkWfG0KQoGLrMxiRWIURgHkJcOE4TC58qc8SsWkaewKfHMmufB%2Bj4SNRXj%2BGrsZxxtX%2Fv9nA8KagJ2yQgnpusuHHw%2BJt6FT9mUcxYYbCDHMj4eahSSKr%2BmvdIZUpLbZ5ACjbysI%2F36f1iSbqEoQd1llPeFdQk4hgzUS4cIBUanNJSvxDgjWvZx1qrnZRNA5MKAmVy48F4uagnpHll8IV3Ltbn1kUc2g0uS3wMv7PcMW%2FFeye63PQu2wn%2BpJuMLKkqsAGOqUBiqQBqq9AsrFVP%2BAhA0z47w7RHLmkSmvffLXT3cM0jyPrbP6wLOvUw8y%2B%2BKEfYlYhxdoGJsqpeGSerXLuT4PnWLKsOkJ%2FIkJWQvq3DG8V369QAPkTfiVCtve9m%2BfbxMkPFUngE3P50VsU8rj8Ldz3AHBaTkkRv8FpjrFP46xLe3OIZTICr%2FuqkItKMPZtqpcpluF%2FFtxlDNUQH0wT7FMyPLeC8Nml&X-Amz-Signature=c90dc0f97bbf294a2297bbd9f9d0f13037f976c4afdba99f1342e556f5655e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
