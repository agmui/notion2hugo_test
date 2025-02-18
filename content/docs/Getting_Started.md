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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRLPUF3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGTs1WCKxD6GaPtV20aotGsbbhyeQaWSEmdu1Fe3YD%2FiAiEAs4aRSqLMr4tk%2BEoy28uOZ1AvVfWoy71l7mtqIo5XGl0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMhzHW9wtOubr%2FQ3ircA2V3fvfQg29fMPNyCd6EWKeUFJ3Oo%2BPB9hc3Je6EDUBJkUKtTkXLSMe7DLXwn9v%2FVtskSA4d%2FO%2FTkTWyk4ILRnoq1jHA4NBFEtYwuDzbQksJVjl%2FjzMNt8I5HQavigCgkj54l0bIbfcslkhO8sZ5cE9%2FBPVjMzJRqLrB%2BI6TbjO4Mr3kGO5mr3ZCKcePOexMJY85BXTxJ0IaTKjEeBDyY204dJy4sD3dIjGkI11aE%2BTiFvt6%2FVZX%2FdszWJibzH8sSqWaO%2F%2BoMrldkoDu36v9l6EKrdJG2jwEQZm5nFbQjfvhkS5Wh7Olv5GunwNrRTEBQxr663niCg%2FiwGTSGHXyExpiDK6c9eadUL3PG5ob9EKBKrxh%2BZUrD6NciJbu9DdyrCgGOGib469ujdQBcOAXYtSiYgbqVKgYBp%2B3Qg0FLt2HX172uide0gt4iwXzCsqYcd7tzDJ52c4fjq4K6g34setU60Ywm71RDOCv84MTxBGJrArukaseCgs6U%2FFF1wChvtjxyn0ROHttCE72ztYQpw8u3JDN7MZv8OdDDrnjgy6cnXZriKnIvlckdTh1xhg0Vo%2FBPrjz3KBeSTWSWel%2B9Ut%2BXOWO6RQ4OqlaWktXfCQUloyHXh5295LLDcO%2BMPWS1L0GOqUBOi4RoK%2BX8eL5ncCd%2BU3%2Bi%2B0xaDBgpnRxaCcpby70QZqc4tDcnXtTWfq8L5efPYmu7RQnGZysaMkw4x3AeMvVixmJZKwEoYKGfyfomex%2B5LdPJNTcmoCBDajwa6eFeYGcEGF%2FWvEg%2BPh0J3ZS3kYv48Mnn88a80BRE584IKW5Dj%2FkUV2v%2BaHnzaSoSloL7930NrJ1ciN79EkiNRDD489wOcqzFVFv&X-Amz-Signature=851b580ac188f3a2cacf636686df2f373cd7a887f05b32a655fe82ec78d91014&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRLPUF3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGTs1WCKxD6GaPtV20aotGsbbhyeQaWSEmdu1Fe3YD%2FiAiEAs4aRSqLMr4tk%2BEoy28uOZ1AvVfWoy71l7mtqIo5XGl0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMhzHW9wtOubr%2FQ3ircA2V3fvfQg29fMPNyCd6EWKeUFJ3Oo%2BPB9hc3Je6EDUBJkUKtTkXLSMe7DLXwn9v%2FVtskSA4d%2FO%2FTkTWyk4ILRnoq1jHA4NBFEtYwuDzbQksJVjl%2FjzMNt8I5HQavigCgkj54l0bIbfcslkhO8sZ5cE9%2FBPVjMzJRqLrB%2BI6TbjO4Mr3kGO5mr3ZCKcePOexMJY85BXTxJ0IaTKjEeBDyY204dJy4sD3dIjGkI11aE%2BTiFvt6%2FVZX%2FdszWJibzH8sSqWaO%2F%2BoMrldkoDu36v9l6EKrdJG2jwEQZm5nFbQjfvhkS5Wh7Olv5GunwNrRTEBQxr663niCg%2FiwGTSGHXyExpiDK6c9eadUL3PG5ob9EKBKrxh%2BZUrD6NciJbu9DdyrCgGOGib469ujdQBcOAXYtSiYgbqVKgYBp%2B3Qg0FLt2HX172uide0gt4iwXzCsqYcd7tzDJ52c4fjq4K6g34setU60Ywm71RDOCv84MTxBGJrArukaseCgs6U%2FFF1wChvtjxyn0ROHttCE72ztYQpw8u3JDN7MZv8OdDDrnjgy6cnXZriKnIvlckdTh1xhg0Vo%2FBPrjz3KBeSTWSWel%2B9Ut%2BXOWO6RQ4OqlaWktXfCQUloyHXh5295LLDcO%2BMPWS1L0GOqUBOi4RoK%2BX8eL5ncCd%2BU3%2Bi%2B0xaDBgpnRxaCcpby70QZqc4tDcnXtTWfq8L5efPYmu7RQnGZysaMkw4x3AeMvVixmJZKwEoYKGfyfomex%2B5LdPJNTcmoCBDajwa6eFeYGcEGF%2FWvEg%2BPh0J3ZS3kYv48Mnn88a80BRE584IKW5Dj%2FkUV2v%2BaHnzaSoSloL7930NrJ1ciN79EkiNRDD489wOcqzFVFv&X-Amz-Signature=b02c2d678c521c93a246ef5af17ed5c71b61314a87cd88f44cb9e56243b47b04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ZD5OFC%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDjeFzKs5NZgpUeZTfrbzhl4MoqSAoCO7E1MZiFc%2BSNNgIhAIBcdZ9ScHP0uxfwEF3rMPQPip4QZrJfmC6gpBcY1%2Bc8KogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLajOTW875J5gd08Aq3APUP0vdXpuMs6ckHkhPB4v28PGWwHz%2FDjhH8wMbGWq5G%2F0SOZNos8hN%2Bc8Xx8xalXOPZ89Vd60JiEPju2Dx0Dq1vtk41mTvSQYV0pT1o%2BYXnme5Q4IR7cjgnBA13s6Dr%2BcrRJgdbO%2Fj1gOCt3fYHOg3B3A9pCzNhpfOclBOvTH0EPxEASOxkkcQ0gDWjMPyJs5rBoHJneQ6od6w1AGrGCDuLrIVdvVpMl2udP1MIOJMLwKuMmYMhwWGMQ%2FS1KPVgcN0IUQWsvkIQ5mMcAhaaY8x8N%2BVH4zvZiYJh53pvIf4RPxMI7l9mRmCzjB7kodfptGgO4zBO6f4iopfHvgR0QZ6OX2HAB2ttTNH%2FrIPSdF0v%2Fc9C%2FKWiG5HQM1LjA52y1dCOBCEK8miyz%2F6RyfkW6iMoP%2FN47pefSL8DHvSgvh2gtNhyjbZjyA7%2BrmbxOJDuAl9wxbDR09zq8CjJZIbBx8A4iEMedkcglWKig0BkY1Os0e5WwiJzgn8DtpHFV8Uj50Eo2AeHQSaM%2Bt%2B5vih%2BfesI50cGhCN2nm%2BvRCtkGbuNeXHLxrVoFWpWwvT65kYEOTA6vNOJJ9YXjAlFHGUlHCKX1zKbi%2FQgesZ56RyDrqB%2FJMA0GSm1UVzOjL8TjCjktS9BjqkAcA2Eh61Pp7Qwym7Sl5xUzaCBPLWVU%2BXy568CU%2FrsYKpAljILepFlDBkkqQc937pSlAz%2BSbYCPmGE21xHvP1UiyYDv%2Bpst6RTex%2BwyopBW%2F1oMr7wUt43Ki74HwU%2FUOKxdqYs9ge2xb%2BzlGY9hT8YviXUqoEDk9i1yrlIF6sv9MIuE16CNY%2F7nP64QzjZnvgrKOqa%2BWg1M2xTlW4A%2B9kSacoAbcY&X-Amz-Signature=96e67f69f1e3745c63fd010e02591ca03d75c149349eba457d4a1f88e1332b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SSYJVFX%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIH7%2Fq0zvwesSA7zgrpRaFe90d%2FMXT%2BVtd5uyMq22NWCcAiAXeeYGBW3c%2BQ3QJyaX5VHoNlOaf14XQVnNtK5B8QBFnyqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK93lxZ2BU9Adla0vKtwDOGspCQBCgc7FZnDtz75ptx9nBxUOJZNGoBMaph3NRg%2FpMhHYIGpFxdabhkMO2GKb6DWtSEBtkVtQB7qVdegDuOyFPh8Vw78NXME9%2FVTZkvTXarbk%2F4uLZBrY4D1TzJfbGTVk%2BezePlKjSUbZzXvGcT21NUerEHUQFZQcmdBIGhWuYW459ON%2BNRk%2B7elDTBYo%2FFbfR6hFp3MN0keEdpovVovzj0tIooEbe4nOs6wpnVcyTmy6efghNsBHK8JKThYh%2FXeTlOjo5V8%2FVsy3j7nIMzCzPBJDgtfclZiz71a7VMJKSvJ2TRAXmSkeFTqL6POa0M4U%2Fn4Bn064Qu21p1nZJdGw%2B6dl3mqMN2CQb7RHJNclNzzfO34SrzTg3f7kMEC0g5jNTvG50gCMw2iwtRn8unv6ndTIIz3j7LHVTh%2Bsrx3ZAfeMbsGWlh0%2F4sNO00xkarIK0yFoovyTI78cAiZvF1RN0vXeriBktkNF7J64Hl0eqFJz6%2FeiX1eCcxIubA4cEnWlVUxlP96OFZETa2eeN92EmKigSN5O0T%2F4U%2FQXM1RIytzA7E7QmvzDzFXy862P6Nq4KvpPuOgKPLutmxe2ayQfrVlNxFmuYmgvhEVB9zPz0m%2Fz%2F6NxvoMoga0w%2BJLUvQY6pgE6WObdUsXkp4BgLJDXUBAqAOJz6Ygb%2FuIoh4IfYxpqQSjREHVmWIe%2FguVlgMHScmizeWsqY3nBnluAFSpEKveYpYDxDg62A%2F408v7gX9Ms5eWqJm4td6CIi0l%2BmjgEY0jXBR5VblSkDM16YLA2a0IwJlUTFbVig%2FLJcEKzisuzCHsjqksz83PfWK6vAakCGFUvtjKBLJerg2zMjfq7TvJVevUHJTmY&X-Amz-Signature=2ff6629336be88e7975e8edd079f8e304aedbcb3872b30cba2085031d7cf4670&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRLPUF3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGTs1WCKxD6GaPtV20aotGsbbhyeQaWSEmdu1Fe3YD%2FiAiEAs4aRSqLMr4tk%2BEoy28uOZ1AvVfWoy71l7mtqIo5XGl0qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMhzHW9wtOubr%2FQ3ircA2V3fvfQg29fMPNyCd6EWKeUFJ3Oo%2BPB9hc3Je6EDUBJkUKtTkXLSMe7DLXwn9v%2FVtskSA4d%2FO%2FTkTWyk4ILRnoq1jHA4NBFEtYwuDzbQksJVjl%2FjzMNt8I5HQavigCgkj54l0bIbfcslkhO8sZ5cE9%2FBPVjMzJRqLrB%2BI6TbjO4Mr3kGO5mr3ZCKcePOexMJY85BXTxJ0IaTKjEeBDyY204dJy4sD3dIjGkI11aE%2BTiFvt6%2FVZX%2FdszWJibzH8sSqWaO%2F%2BoMrldkoDu36v9l6EKrdJG2jwEQZm5nFbQjfvhkS5Wh7Olv5GunwNrRTEBQxr663niCg%2FiwGTSGHXyExpiDK6c9eadUL3PG5ob9EKBKrxh%2BZUrD6NciJbu9DdyrCgGOGib469ujdQBcOAXYtSiYgbqVKgYBp%2B3Qg0FLt2HX172uide0gt4iwXzCsqYcd7tzDJ52c4fjq4K6g34setU60Ywm71RDOCv84MTxBGJrArukaseCgs6U%2FFF1wChvtjxyn0ROHttCE72ztYQpw8u3JDN7MZv8OdDDrnjgy6cnXZriKnIvlckdTh1xhg0Vo%2FBPrjz3KBeSTWSWel%2B9Ut%2BXOWO6RQ4OqlaWktXfCQUloyHXh5295LLDcO%2BMPWS1L0GOqUBOi4RoK%2BX8eL5ncCd%2BU3%2Bi%2B0xaDBgpnRxaCcpby70QZqc4tDcnXtTWfq8L5efPYmu7RQnGZysaMkw4x3AeMvVixmJZKwEoYKGfyfomex%2B5LdPJNTcmoCBDajwa6eFeYGcEGF%2FWvEg%2BPh0J3ZS3kYv48Mnn88a80BRE584IKW5Dj%2FkUV2v%2BaHnzaSoSloL7930NrJ1ciN79EkiNRDD489wOcqzFVFv&X-Amz-Signature=691b41d565cabc3d861290f6be4dc21a20534185b9519ffb9d36695667a190c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
