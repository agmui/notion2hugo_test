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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXOQIMY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGyupg4z%2B2kt8VQKnRc1gDFeZc4E9oOk5l%2BpQOVbdVuuAiACVYIDwmpLsSm2JNwWKxc1nGXuykzVMiP%2FBjofbJulzSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvq%2F0%2BpUGlMB6Z1H1KtwDRrZ3ERRmcBTDoeVNIUyWEVgi5RplFk3LjB4lodfgyO%2BdVKWcl3OQ6Jhak90WJfhx7Bj3qza0nXOg3PaOUCaURocNkzYsS5KRRXwMfg6uIlAAOvMB%2BlqTTNqQ%2FtWt37%2FHL28ivI02wfjdJnZL6ZNbvdMJX01uTvFLiGNss9W2U5ykrAyylqtSJ%2FthyNggtg6IXqeNZ%2BQo0RoR4gPlhWwHzV6O7Mzv55cnrzRwu2rcV6s47PGmqnyVlmYSKU%2FxqILf6o4jzaLOYYhArxeoyTEjz65qLnVIxlRdGMNj%2FW4iNHcMep5mIYIn6j3PDjBCnXhsIZkkaRqBH0sduPXyoQvrj39VlEzXvpToVNAcjFH8Rn%2BfGEY0uFPGjc4d%2BK6iR4JfxD0Zl7iytclWPskkbcFtY1uOkDMSfYeB7J%2FSWObhvwPH6appyAuqVlPEdaFN2zqVfXzgwh%2BozzxxTGqjSl6EQf5Dn4Ltf4gcLLRCl3NyV94aXUVq%2FaszlKb5ul1s7IPXQS23fe5bN7BJJCWSaVdGasl67eN8aDtiWR6%2BvaLfuU%2Bk1IDgzCy3Fyy1nPV3idTrRDdaBzyslb5Hn8Gggo7z2uNhXMk41uReWe3l3nHkflLBZQPnE9QNHyIuwFUw5uTxvgY6pgEl%2BzaepC9tIpXUDtUYdNn4ZB9G%2B1HJVNFW%2B7ZJ9urPjQzwJx8J%2FrZLb616g1ztdIdBxbnH1Ob7fCHH3i9q8totI%2BQbxHt8fjnQnubI%2F162E9ZFvmKYmH5qBm%2B1xW9NUxxQxBSjlt1cnlgSfik91XiI3s2VC4aPiAuFpIi8Z%2BYbq9KNDIGf4Zy16ZU0aAaMpnn7DqcRYiOxa%2FjeAxJ8mk5inV7pSyAW&X-Amz-Signature=b1456dff8a2255554409d62bfba196bee1cbd4978fb2a472e70b52296ff90e20&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXOQIMY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGyupg4z%2B2kt8VQKnRc1gDFeZc4E9oOk5l%2BpQOVbdVuuAiACVYIDwmpLsSm2JNwWKxc1nGXuykzVMiP%2FBjofbJulzSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvq%2F0%2BpUGlMB6Z1H1KtwDRrZ3ERRmcBTDoeVNIUyWEVgi5RplFk3LjB4lodfgyO%2BdVKWcl3OQ6Jhak90WJfhx7Bj3qza0nXOg3PaOUCaURocNkzYsS5KRRXwMfg6uIlAAOvMB%2BlqTTNqQ%2FtWt37%2FHL28ivI02wfjdJnZL6ZNbvdMJX01uTvFLiGNss9W2U5ykrAyylqtSJ%2FthyNggtg6IXqeNZ%2BQo0RoR4gPlhWwHzV6O7Mzv55cnrzRwu2rcV6s47PGmqnyVlmYSKU%2FxqILf6o4jzaLOYYhArxeoyTEjz65qLnVIxlRdGMNj%2FW4iNHcMep5mIYIn6j3PDjBCnXhsIZkkaRqBH0sduPXyoQvrj39VlEzXvpToVNAcjFH8Rn%2BfGEY0uFPGjc4d%2BK6iR4JfxD0Zl7iytclWPskkbcFtY1uOkDMSfYeB7J%2FSWObhvwPH6appyAuqVlPEdaFN2zqVfXzgwh%2BozzxxTGqjSl6EQf5Dn4Ltf4gcLLRCl3NyV94aXUVq%2FaszlKb5ul1s7IPXQS23fe5bN7BJJCWSaVdGasl67eN8aDtiWR6%2BvaLfuU%2Bk1IDgzCy3Fyy1nPV3idTrRDdaBzyslb5Hn8Gggo7z2uNhXMk41uReWe3l3nHkflLBZQPnE9QNHyIuwFUw5uTxvgY6pgEl%2BzaepC9tIpXUDtUYdNn4ZB9G%2B1HJVNFW%2B7ZJ9urPjQzwJx8J%2FrZLb616g1ztdIdBxbnH1Ob7fCHH3i9q8totI%2BQbxHt8fjnQnubI%2F162E9ZFvmKYmH5qBm%2B1xW9NUxxQxBSjlt1cnlgSfik91XiI3s2VC4aPiAuFpIi8Z%2BYbq9KNDIGf4Zy16ZU0aAaMpnn7DqcRYiOxa%2FjeAxJ8mk5inV7pSyAW&X-Amz-Signature=efcf0bf4ceb8b84212f1a686592429f6bb613df85e80d1f413e56c6013a95c25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU32INJJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFEVYI4eECm%2Fv8gvR%2FXoDxEnYv1vSBMYdJxEWsV0TJ66AiEA99ToJE1njDmZYhC34TSAo%2BI3LnJeDg40a2%2Bt5ChGpZMqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHcTW7kRxlfczQ5eircA3A%2Bz2MdjnzQlxaxw1CYxGgo8JEqJ7JmCovzPeoe%2F0UF0m0O2JnxiG49BkyUeZlJJWUvDOWWCeCG3ZeUUAVyzGkSqBnhF%2FSNKSn7rzYeAri8Mh57TfY1HmWpmAxXNFNrzd%2FpxkyB2juh4bPGay66%2FopmBlrZ7uibF%2BIM8dWhZzvFdX5f5Bg5IXihY7z%2FlqmoK5V6jgZ5D5Kqd%2BsG%2Fyzvz8riytAY4aZTZIye9uBeKkerirWohJ8CBUzoP5MYi3uHawwyiUXDz9JpRYsejcV3ExfVEGOF6m4Xsmmb6IGaj54ExHB3dtR38pSDQbBI0denl4ppEo1cxISqI8PkNzSP6VYonI5n9yPwVcL5rKpwR4X6Ft4Qa50SdbouWvyXIlpO61VxKwNrFlCiUPczZV%2BBqxl5YLUUy%2FV8nJ0HOKfk7v%2FVLHqRbquCIBHhlVulo74Np5Da1rLAfMZO2S%2FTi4NwVojsXwYGFDkkAfK2QBZez4zmC0UcBcYspzdmwaruqRpbuAdqrncFBVrj%2BkcrkuXMM3xpUdAaXEG%2BIBX4mZ9AFk9uG5ow7ATX78Oq%2Bl1%2BYHHJYGJG0PnHNNVFvyTeLbIEzVt5QUfTKW5QXLjk8W6MXers9k3BWVurcVnq9psrMN7l8b4GOqUB0zjKLftDZehUDiCAYc9VkU7B79a6H6cN6iFeoFnI1l54vUGYmq0qtiB8b7MSqePP0yMd%2B6K%2F9n8vOmUY3SZeoqvjZ6RCF3CUWig%2BJfjgfoGZXf7SuUsKJ%2BACLDe%2FV5ZC5eFhG6%2BwJmS7z8WYkzVUtoPtfvX6MJt7KJvEDhK%2BJUgBeOlPqbu6zoZF2kEC6GSzSMDfk8UXOO2MngRBPgiGo1%2FMbqQp&X-Amz-Signature=23fbaa0da69124ba02fb88b4923f75bf605c28bb88400067d694c440ccc9bd0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUYRS26%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDb4p46vJdclVb3m4Dq68n%2FrHaNyYA%2BLmt6hAHwkCw8eQIhAOzlqmkGBZC6Y%2Ftv%2BjGBbecZqPdKesG94qJHx7Q6yQMIKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSjWfbJirYga%2B9YTAq3ANsU4a5z9WZAF%2F9htRF%2B7miT7AC0jvGrNVAfW65LUVcFrz1CvrOyxxdW2DkjJlDXHCOT6K6dSM3IgSRUICo3klF0DlJQdUgmbjBliPu55A6tsI1owXaEq1tN15DF1P8tEK03FwiAswKEssCbbnb1mRkZCb%2BZQ440PjVxVUST1zab%2BZDQ3bAIBrhtVDLJkw9fZykWB7AVt0vSO8PnhpMf1J2hK1xpTMYTjwf%2FOy59jpylDm4%2BcUK7%2Fe5AqHcYKwHYh6DccxIbJ7hBh%2FtCTIz72PDI9kXzN0WdihzQ%2FNI0bO8su%2FswNEhVmaTsXrdN3%2BiDMzeUDRfAqQy7j4A2VfecVBSmAy81JUZIgqZ5rwSvlDXTMUDuXE8qlxZbo73D9Tm%2FQFP%2B0ouQ5QNjeo48tibJoOIUrPuwloan93IjULZKYgoFRfZGAJSS%2FogxBjgVG8FnX55xcwrN2YiFhe5UfhMU%2FivwbH4QTXXicemmWbGueHy7B%2Bs%2FSb5C95LThZcTtsv5i1rxZ5NRjxiicqrWXcQRHaJLXpX1j2t6KAhbY226jJQsbNsoR4PwVnIANKsDKottMtAc1TQUeMX0dWZM5cnq2%2FShgI0xtpWlJSy91K8kJK88QzunkpTX23RR66zozDe5fG%2BBjqkAbI760JwHI1tmTO7CaDbN84JkB0ZOp15XMocdmY9wLfAlvigNii8fNR3cQLeVYgxTVHqN3jxyp3KfSFrIiwJ5OXnWVbEgIQ%2F4a3jrgqHvSwTFnBAGieBeT3qx8%2BpK4fhiqcK9MIL6j9k%2Fash7z0ncyMYRNCHGCgK8xOg7fuffs%2BQBtjWdQlZPiFEjSjbtI6BHB2rDu0q4jXfMNdFLfTNwnLE%2F0vn&X-Amz-Signature=96e7f5c48d49ddf23c6c433471e938901b6dbbbf3f6eee76a58ad6ce982ca8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXOQIMY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGyupg4z%2B2kt8VQKnRc1gDFeZc4E9oOk5l%2BpQOVbdVuuAiACVYIDwmpLsSm2JNwWKxc1nGXuykzVMiP%2FBjofbJulzSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvq%2F0%2BpUGlMB6Z1H1KtwDRrZ3ERRmcBTDoeVNIUyWEVgi5RplFk3LjB4lodfgyO%2BdVKWcl3OQ6Jhak90WJfhx7Bj3qza0nXOg3PaOUCaURocNkzYsS5KRRXwMfg6uIlAAOvMB%2BlqTTNqQ%2FtWt37%2FHL28ivI02wfjdJnZL6ZNbvdMJX01uTvFLiGNss9W2U5ykrAyylqtSJ%2FthyNggtg6IXqeNZ%2BQo0RoR4gPlhWwHzV6O7Mzv55cnrzRwu2rcV6s47PGmqnyVlmYSKU%2FxqILf6o4jzaLOYYhArxeoyTEjz65qLnVIxlRdGMNj%2FW4iNHcMep5mIYIn6j3PDjBCnXhsIZkkaRqBH0sduPXyoQvrj39VlEzXvpToVNAcjFH8Rn%2BfGEY0uFPGjc4d%2BK6iR4JfxD0Zl7iytclWPskkbcFtY1uOkDMSfYeB7J%2FSWObhvwPH6appyAuqVlPEdaFN2zqVfXzgwh%2BozzxxTGqjSl6EQf5Dn4Ltf4gcLLRCl3NyV94aXUVq%2FaszlKb5ul1s7IPXQS23fe5bN7BJJCWSaVdGasl67eN8aDtiWR6%2BvaLfuU%2Bk1IDgzCy3Fyy1nPV3idTrRDdaBzyslb5Hn8Gggo7z2uNhXMk41uReWe3l3nHkflLBZQPnE9QNHyIuwFUw5uTxvgY6pgEl%2BzaepC9tIpXUDtUYdNn4ZB9G%2B1HJVNFW%2B7ZJ9urPjQzwJx8J%2FrZLb616g1ztdIdBxbnH1Ob7fCHH3i9q8totI%2BQbxHt8fjnQnubI%2F162E9ZFvmKYmH5qBm%2B1xW9NUxxQxBSjlt1cnlgSfik91XiI3s2VC4aPiAuFpIi8Z%2BYbq9KNDIGf4Zy16ZU0aAaMpnn7DqcRYiOxa%2FjeAxJ8mk5inV7pSyAW&X-Amz-Signature=a304e4726c40789709fc9bb1330c5040300d0e4e434176def38589943fa9e378&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
