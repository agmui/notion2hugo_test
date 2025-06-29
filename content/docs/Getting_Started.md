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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVQWDPT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgjJTKUV07YNbzpKNEznvy%2B%2F2%2Fnkep0ifRkajFk1JwKAiABzw50BbvEOKk1GAe3%2BRPbvplbqaE4uQ0CLK10gQYrUyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp6rOah5RQTQlcLMKtwDbx2c55cGGwYU06fOQliNYxLO9QBMxSceGYJKQq8iuXsGNU7a8R11xdgTDF6Qy3ei92jazDcKk37%2FUPZ5M4kbJQezS81%2FzhgO3yDUaMkXLRmvC%2BGWDVeCspOt44FO1vVVG6ZxvZx%2FJv1pI1fcxYkxXXUo3YLycSw7CsQj%2BAGgTVUJV56GsftECKvgJB8lX4L2z31n7ARWDdCk6jwK%2BysZcoPoP4nDLEy%2B4ZfKCyPw5JZYWTflF%2B7mk%2FLJyzAXZ1u%2F%2BG2%2Fq4I8nnbG5%2FYZmCK6befMMX6Y4775NWbv%2Fv0V76elaZm2qEJaGjBlJjY8V9BgOtRk%2FAs2jKqGiYuD2jOkpuvs6bxqA8z1%2BDGWtzPB90NKMJr2WtMlTPlvMtxA1os00%2FKZDQphZCqnywKFeVaYhawA2bEuN1FM5Oh7NvrcW3BhyLpyCVLtQW%2BohckLtgWt0GUpI3Ur959Y4eYbEFajt0jiDVwzyeHMRbkpoldTJzey3%2BUqhCmzkxIBNDoKW2ilAO%2FPglB1WheLaG2o0Smo2yVI%2FUviZaVJRQkzmpD%2Fm441UdPOmtCCTEBpR0Kug5y9P3m6%2FD8ANbVcF%2BujsnAw%2BLK27QwvlKQvjhjfHkZOGHJDca4Qfq1vXaHblQMwq%2FuFwwY6pgEGZbAJx3TNToibu8vIQVbl1MK8J1XfUo6hJyq9dEg%2BvVvP9BfbyrKZuCtB4vrFjUSftSLbreRT%2F4KplmY0U6sh3A7SuLNHnRZEwR%2BaEsuffHnUg66RTXDN1C3Z%2FyMYgwHsxQ4kZK9sHvukBzfez7aTSmJI0Y1xRiygN26DBG72BYmsvZjislQBZ5vS1vxzY37hNIHlh7QZZDzCeQeJDfNaXDH4U2Ij&X-Amz-Signature=45c072934839229178c16545c6172b89e610cb60191c694518b318e936a517d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVQWDPT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgjJTKUV07YNbzpKNEznvy%2B%2F2%2Fnkep0ifRkajFk1JwKAiABzw50BbvEOKk1GAe3%2BRPbvplbqaE4uQ0CLK10gQYrUyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp6rOah5RQTQlcLMKtwDbx2c55cGGwYU06fOQliNYxLO9QBMxSceGYJKQq8iuXsGNU7a8R11xdgTDF6Qy3ei92jazDcKk37%2FUPZ5M4kbJQezS81%2FzhgO3yDUaMkXLRmvC%2BGWDVeCspOt44FO1vVVG6ZxvZx%2FJv1pI1fcxYkxXXUo3YLycSw7CsQj%2BAGgTVUJV56GsftECKvgJB8lX4L2z31n7ARWDdCk6jwK%2BysZcoPoP4nDLEy%2B4ZfKCyPw5JZYWTflF%2B7mk%2FLJyzAXZ1u%2F%2BG2%2Fq4I8nnbG5%2FYZmCK6befMMX6Y4775NWbv%2Fv0V76elaZm2qEJaGjBlJjY8V9BgOtRk%2FAs2jKqGiYuD2jOkpuvs6bxqA8z1%2BDGWtzPB90NKMJr2WtMlTPlvMtxA1os00%2FKZDQphZCqnywKFeVaYhawA2bEuN1FM5Oh7NvrcW3BhyLpyCVLtQW%2BohckLtgWt0GUpI3Ur959Y4eYbEFajt0jiDVwzyeHMRbkpoldTJzey3%2BUqhCmzkxIBNDoKW2ilAO%2FPglB1WheLaG2o0Smo2yVI%2FUviZaVJRQkzmpD%2Fm441UdPOmtCCTEBpR0Kug5y9P3m6%2FD8ANbVcF%2BujsnAw%2BLK27QwvlKQvjhjfHkZOGHJDca4Qfq1vXaHblQMwq%2FuFwwY6pgEGZbAJx3TNToibu8vIQVbl1MK8J1XfUo6hJyq9dEg%2BvVvP9BfbyrKZuCtB4vrFjUSftSLbreRT%2F4KplmY0U6sh3A7SuLNHnRZEwR%2BaEsuffHnUg66RTXDN1C3Z%2FyMYgwHsxQ4kZK9sHvukBzfez7aTSmJI0Y1xRiygN26DBG72BYmsvZjislQBZ5vS1vxzY37hNIHlh7QZZDzCeQeJDfNaXDH4U2Ij&X-Amz-Signature=b463f49744ce8d968ca001b61ffa9af481fc2135db4a8edf898fa863a9c9c7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVQWDPT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgjJTKUV07YNbzpKNEznvy%2B%2F2%2Fnkep0ifRkajFk1JwKAiABzw50BbvEOKk1GAe3%2BRPbvplbqaE4uQ0CLK10gQYrUyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp6rOah5RQTQlcLMKtwDbx2c55cGGwYU06fOQliNYxLO9QBMxSceGYJKQq8iuXsGNU7a8R11xdgTDF6Qy3ei92jazDcKk37%2FUPZ5M4kbJQezS81%2FzhgO3yDUaMkXLRmvC%2BGWDVeCspOt44FO1vVVG6ZxvZx%2FJv1pI1fcxYkxXXUo3YLycSw7CsQj%2BAGgTVUJV56GsftECKvgJB8lX4L2z31n7ARWDdCk6jwK%2BysZcoPoP4nDLEy%2B4ZfKCyPw5JZYWTflF%2B7mk%2FLJyzAXZ1u%2F%2BG2%2Fq4I8nnbG5%2FYZmCK6befMMX6Y4775NWbv%2Fv0V76elaZm2qEJaGjBlJjY8V9BgOtRk%2FAs2jKqGiYuD2jOkpuvs6bxqA8z1%2BDGWtzPB90NKMJr2WtMlTPlvMtxA1os00%2FKZDQphZCqnywKFeVaYhawA2bEuN1FM5Oh7NvrcW3BhyLpyCVLtQW%2BohckLtgWt0GUpI3Ur959Y4eYbEFajt0jiDVwzyeHMRbkpoldTJzey3%2BUqhCmzkxIBNDoKW2ilAO%2FPglB1WheLaG2o0Smo2yVI%2FUviZaVJRQkzmpD%2Fm441UdPOmtCCTEBpR0Kug5y9P3m6%2FD8ANbVcF%2BujsnAw%2BLK27QwvlKQvjhjfHkZOGHJDca4Qfq1vXaHblQMwq%2FuFwwY6pgEGZbAJx3TNToibu8vIQVbl1MK8J1XfUo6hJyq9dEg%2BvVvP9BfbyrKZuCtB4vrFjUSftSLbreRT%2F4KplmY0U6sh3A7SuLNHnRZEwR%2BaEsuffHnUg66RTXDN1C3Z%2FyMYgwHsxQ4kZK9sHvukBzfez7aTSmJI0Y1xRiygN26DBG72BYmsvZjislQBZ5vS1vxzY37hNIHlh7QZZDzCeQeJDfNaXDH4U2Ij&X-Amz-Signature=3d9361807ae6e7445878cc97d221464d163d795bf931cf2c3d584633f213b811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXIKQKC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9ZNOGhF%2F89YZ3G7ntV4l4AcijrC4Nt042uFD%2BLpQ0iQIgAwtO5zlkt%2B6JNX9HFG0Pi%2BBYNuu4JGUDYHhiZ3X%2FdeUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChGKHygLOVcqjHqOyrcA8iWSZLlga%2BxVciGQ%2BuBxosN7v7HWqPwX%2BYa7Ee8yjdCsB2rb94k8KJTDwX%2FkDQzDRxc3MQfECDewOL6QAIrGoz7BxoLrdJCK%2BvPUZFNtAmm4Y6AhwXdwBn0%2FJC7cwKDi5D%2FlqCjumvaeigQU3KR1KAgJDrRPUbtAQiWKdMtr0uFLr8VpD7TPUIZLa%2BUvrf24ekFvVBM1%2BugyIDRDZ0lygObWPsL7nDguCFOPLV%2Feyc6HVeugqhL1b1tZ000Z8zRVVIhP8lSil4bkWkz6EP6l5S8epLZGWebsaBJGg%2BNFiCbb65RIBzQXxXJaFM822y6Dd10OtoUakQMtaJftgp%2BaoYiqYPcjnre5v%2BFQNTYgnXB42YznBnpuAJIqGiJXnpsCd7KlDjpB0Xnp6fgahR8yZWcrMMdkPl2L1CY%2B9qHPr2IztGs7WWtWSux8yKE4MWN5jaF1dzzXdPmBvX5sYGZ8apZSSsN71pbxIpoU%2FfawHtho6%2F5tIntbBSNKwJjaKFCEga5x6nHI4iNT5QfLADL9SY%2B8p7dH6t4ZCKH1IyVywM7uJx9OaNTIV9qR1oHBvSXaJ0ci9O42To0hrt84kCLc9IdFSg69zTC9uuuI3XcD%2FVFZpqLpZyZViEKcuiyMIj7hcMGOqUBLIPK%2FTUFgunsBDQeO8wZC91ws3w1%2FNwagdVbTKzbXYhoakj7kw%2BaMiV3jvupddFSBGrIgBBShXqqin%2Fnkk0UhVy22tzYV0Zol3nfW30ISR8uJ4Xv5hnPq9VcLV8iHrC%2BG5e7eQlN0vgamT8bYWaBe%2Fd%2FFc2nX%2BVHz%2BOyhDJKLH8xRdeCDU2Ph%2F4J%2B9u9xHmaRnCYoO82YzxT9x2A2zi84epKiiXS&X-Amz-Signature=b2ed26c2d7e975d3ac29931db8e98cd6d0db188f79c947e634cb7ed8a87fb02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRHODQB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4WP%2Bc2YoM5Bz%2BWk%2FKUHy0s%2BIoqzirDwVre%2BY%2B0ysMxAiEAvvmDUA%2F%2BPK%2Fyaprtt8%2BLpuNhr2Jf17UOyKBW4eV6u54qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg%2F%2BeRjTEsg448dgircA3qfT5tScxOzdUi8Pb42zlQwKd5jxnsrxb6dxAqLoR6JaVOm19Gtuhmb8XXO%2BTfMNZbaPjs2SHKcRZnP%2BO%2B9cMij3xRbIMzI0nmgBtRHbaTmAXHpCoh4zAazTycSfhJ3eVtg1I0KTa%2BRri0RqxVvvqV4cisq1H9qOL5GSUWMNyJzFcIwhlS2ZwT1YjgzSkBmxMiZjTFxh46whpOnQ7ASPpheNZknqR5rFa8YbMiFJQ2Uok%2BhcaOHTM2cO63BCYhSF2jBVD3H6mXGaS%2BYuiThh0kGHwCQhCwmiWsNHIc2%2BAHmFhgHKwAwpEeTgkGqmfQB9XlM0RdaPOXP3gyczSXPWsfu3L1YtRXhX65aiaY30ZK6j401Pv8cMUx1P3%2Fe9JbkXPCqm%2FP8%2B5Y5Is6c4K5Thg6F8wlhspHnV9cUOSnwdGCNRtvXzuoS7APcQZgNwuEuxohLxKwDADaEfrt9rKc9Q48fdhC%2BNy%2FivBf38CsS8LivKQwCKmU1u955ubrZEKrumoAgj%2FedRDZ%2BfJmdF8soc8g1yC%2BCdQt8vpQxj2LBG5TrNc9ELJ2WJkoGX0KqMYaSqNQLv8b9lawgrKnboj3xSRopXIItmD7sb72dFZRtY3npl22sZcbbyTzcyb4%2FMK76hcMGOqUBotM182yAvS4kOd90CDYYGR0m%2FErnGyykysrWTg%2FfmBXrinGiFuEqYaxM7j0BSeluBMsQb5DbAeoeO%2BqMhMMN58YKnV%2Fc9WMAzGWfp4M2otNeFjdFF5rO1ustk2NcGaau2%2Fuo6r9nQu3hhjmdgbsu1eg1nJNPYfdsvJQFG6fI%2BFWqew7koI05tSxY4DpKzNyat59qW7snxvYQyyrtRVHG2IUN%2BZE%2B&X-Amz-Signature=3c7c3bd5b3b30c4c35e084b04703cf3562be5cdb619a9ccc1c7f3085a78594df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AVQWDPT%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgjJTKUV07YNbzpKNEznvy%2B%2F2%2Fnkep0ifRkajFk1JwKAiABzw50BbvEOKk1GAe3%2BRPbvplbqaE4uQ0CLK10gQYrUyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhp6rOah5RQTQlcLMKtwDbx2c55cGGwYU06fOQliNYxLO9QBMxSceGYJKQq8iuXsGNU7a8R11xdgTDF6Qy3ei92jazDcKk37%2FUPZ5M4kbJQezS81%2FzhgO3yDUaMkXLRmvC%2BGWDVeCspOt44FO1vVVG6ZxvZx%2FJv1pI1fcxYkxXXUo3YLycSw7CsQj%2BAGgTVUJV56GsftECKvgJB8lX4L2z31n7ARWDdCk6jwK%2BysZcoPoP4nDLEy%2B4ZfKCyPw5JZYWTflF%2B7mk%2FLJyzAXZ1u%2F%2BG2%2Fq4I8nnbG5%2FYZmCK6befMMX6Y4775NWbv%2Fv0V76elaZm2qEJaGjBlJjY8V9BgOtRk%2FAs2jKqGiYuD2jOkpuvs6bxqA8z1%2BDGWtzPB90NKMJr2WtMlTPlvMtxA1os00%2FKZDQphZCqnywKFeVaYhawA2bEuN1FM5Oh7NvrcW3BhyLpyCVLtQW%2BohckLtgWt0GUpI3Ur959Y4eYbEFajt0jiDVwzyeHMRbkpoldTJzey3%2BUqhCmzkxIBNDoKW2ilAO%2FPglB1WheLaG2o0Smo2yVI%2FUviZaVJRQkzmpD%2Fm441UdPOmtCCTEBpR0Kug5y9P3m6%2FD8ANbVcF%2BujsnAw%2BLK27QwvlKQvjhjfHkZOGHJDca4Qfq1vXaHblQMwq%2FuFwwY6pgEGZbAJx3TNToibu8vIQVbl1MK8J1XfUo6hJyq9dEg%2BvVvP9BfbyrKZuCtB4vrFjUSftSLbreRT%2F4KplmY0U6sh3A7SuLNHnRZEwR%2BaEsuffHnUg66RTXDN1C3Z%2FyMYgwHsxQ4kZK9sHvukBzfez7aTSmJI0Y1xRiygN26DBG72BYmsvZjislQBZ5vS1vxzY37hNIHlh7QZZDzCeQeJDfNaXDH4U2Ij&X-Amz-Signature=3c13a7c8df9f68286793b112a8adc0a18c4a40e7e916fa46714f501b78e67da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
