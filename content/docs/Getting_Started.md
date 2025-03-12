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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6DHTG4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCAgybevW5kTr2ESwfYcvsDQG9%2Bb8PFI901%2FD1tYWXLsAIhAPyFDTpCM0O4p9I2Hyvcyw9jKePoErytzYkdL581hLq%2BKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhvOugeNtl%2BWeefWsq3AMooNxTHkCs1dKXgJKr8z5XkpgedcgwiXyhZSiV%2Be4EoykB3H%2BUn7NIuvQmK6cCIiZVR5n0jjRFDK29GeDUnyjfs02BQyw%2FATJ7n3q8jUK7oFEiUGxMjbloapuCPZFvLmDuz09n3obQTJwyFdshxsZ6ePF6EbfxyQHtXVyZJW3%2B3EbCuP2GHmDJmcL1x5AOQC6snpDAbPpIAqp7GONEDkTPb9uuiEuEUMbUyADEKIA9VaLh7D5bz4xDUFkjqjftaI0cfWt2fbsX7zAKgX9Dez6vXRBjQ5fqq2U%2FvmBymH8wKmAWs%2FQZUgzcVQZ%2BhhckamwPo%2BeBzCOWAmfMiE9DhZsRUWPZhox%2BzhjyYjLbdQy8IzJ1IWVI3eVn713nVqKlys%2Bf6BX2nMYz%2Ff5JtFZD53Kt33WKVMhnRK2eFlBLgg1EUKTMlhBiWpuxXf4MYo9uLhAZ7kg8jolME2mTdMUGcUjvdCtqnTrW2WdyCTq1OEMLN674nEc0uFPqv%2BQBo2fBTF046QlfMxitmN3c8HLujtT4Zo145n7Kbov%2BA3o9EkN%2Bmg54KhKJ6RbpAyTaPVLgxcLfvSthE6yTnJsr8zqZYs8va3QkvyH5l%2BFXfa2u7NZFdra2LAxTc6OpFVioATCujsO%2BBjqkAcCxZtsAzkOwGPbKp%2BpVW3owm%2BCFaP%2FSFoP19jQM%2Fk7n01T2aS%2FFNuF6zfg45B%2Bnk6FiWYQ%2BPlZqgbUAqNSt1vNTDS1zz0q3jhWUVRHa7VIxuiDXmvh6mf1rwIqc%2BsfQtBDOxiweBJ9USPmxfiaGKmuyx%2FajW%2BTGgWqd0wEO7TVsTQavNFlOYF0JmDswJQJ9QOq%2BCh9mOu%2FNKsviSETeRwJconCw&X-Amz-Signature=8ebcb59049e253d4af2aba3f7765269e0ff5ba7fc0c42f332534962ff02463e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6DHTG4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCAgybevW5kTr2ESwfYcvsDQG9%2Bb8PFI901%2FD1tYWXLsAIhAPyFDTpCM0O4p9I2Hyvcyw9jKePoErytzYkdL581hLq%2BKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhvOugeNtl%2BWeefWsq3AMooNxTHkCs1dKXgJKr8z5XkpgedcgwiXyhZSiV%2Be4EoykB3H%2BUn7NIuvQmK6cCIiZVR5n0jjRFDK29GeDUnyjfs02BQyw%2FATJ7n3q8jUK7oFEiUGxMjbloapuCPZFvLmDuz09n3obQTJwyFdshxsZ6ePF6EbfxyQHtXVyZJW3%2B3EbCuP2GHmDJmcL1x5AOQC6snpDAbPpIAqp7GONEDkTPb9uuiEuEUMbUyADEKIA9VaLh7D5bz4xDUFkjqjftaI0cfWt2fbsX7zAKgX9Dez6vXRBjQ5fqq2U%2FvmBymH8wKmAWs%2FQZUgzcVQZ%2BhhckamwPo%2BeBzCOWAmfMiE9DhZsRUWPZhox%2BzhjyYjLbdQy8IzJ1IWVI3eVn713nVqKlys%2Bf6BX2nMYz%2Ff5JtFZD53Kt33WKVMhnRK2eFlBLgg1EUKTMlhBiWpuxXf4MYo9uLhAZ7kg8jolME2mTdMUGcUjvdCtqnTrW2WdyCTq1OEMLN674nEc0uFPqv%2BQBo2fBTF046QlfMxitmN3c8HLujtT4Zo145n7Kbov%2BA3o9EkN%2Bmg54KhKJ6RbpAyTaPVLgxcLfvSthE6yTnJsr8zqZYs8va3QkvyH5l%2BFXfa2u7NZFdra2LAxTc6OpFVioATCujsO%2BBjqkAcCxZtsAzkOwGPbKp%2BpVW3owm%2BCFaP%2FSFoP19jQM%2Fk7n01T2aS%2FFNuF6zfg45B%2Bnk6FiWYQ%2BPlZqgbUAqNSt1vNTDS1zz0q3jhWUVRHa7VIxuiDXmvh6mf1rwIqc%2BsfQtBDOxiweBJ9USPmxfiaGKmuyx%2FajW%2BTGgWqd0wEO7TVsTQavNFlOYF0JmDswJQJ9QOq%2BCh9mOu%2FNKsviSETeRwJconCw&X-Amz-Signature=47b762d009943348e4a4416f35715685dc8b646ae489a0db70cb4341489dc28a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY44K6RV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDbygBuOzE6IGhHIq2s%2FMn5CFPUohnTiGUrNYzB9pALoAIhAMBInf91ePNVeXqQyaa2CkGonepBtHD%2FXEqh1ctudMKBKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7zp77J0sKj2%2FQitEq3AOpH8fOdy6bJlsL6fCwZO2P3Zl%2FKIGYQxfIwVBY6Y2oLOplJgLtux17CaLInXEr6KiRzzxBrYK2goENKPqG13%2Bh9aNtNx0%2FQIeXTfiKW0mjeRXRs%2FDHj4nXdUHEAmHb714CzYgC05qv6ZU3gkO7GUVqtjNKTNJpmZYBg7KkGliT%2BdUPQaB24gvFHSLxSi3iyeVr64j5KjDrzLs4MBEE0mj8O0zdFOaMOtrGNUH0E9FskbC6rFlqpboBf55s3ZCIJzyfBK4oSHGvP6j%2BOUbKQQ3TXXRZ%2F%2BRzkiAf1MN5ogjLxqxwRKNr2OSuGRKUJjWs9gYfM0uENr43iT2Cw%2BGlRSoJgJqsenbwCKE2mhAsV1AXkrn0fbKnIT8J%2BNbt8viD39iZh7twQ5YlFcoSYGhFsa3eony%2F33jxUtaaZAAFRA%2FfD7%2FURs%2F0HkfTULPQL%2B2zZ1JvzQTAd02NWzmMJrQkCTg7D%2BzLIqRhy%2F3Cu%2B5%2BHtsRrmolRQft8MwMGs7xiyBPD6jbRvOmQ1IXtM8UZWuFE5CdD5gJEFaJg0yTE2yaMu8nn%2BY1k%2Bs0MOqoIYiwBunAfd%2BoWFzoD%2F9VXHrrBe3vsYY6qrwv3BUzdjkZE2PF5lVIqarjbkspIb2EDzlQ%2BTDojcO%2BBjqkAffE60usGhKycxv4DnjAKZoQMu1zffgzVAHqVSHVFakD9YkRW9x4kg89vUT0FkMUJGXzRejcix42Ouz%2FD88XEgEgn4X119ZoPRpzOKcug5JwvHh1CiL746CPm3juANoWrWNoWvATen6hOrp8ThtO4H2%2BUtW7YGxuGhgMu1NH92FQEehg4kX5qrivk7NoIzfvbxVSG6a3Bgip1ZTtipvu4xLZwUqj&X-Amz-Signature=6b23a73fbb38986e63dd92289d95003f1f81f84bbee05eb1d55d10d5a8630e33&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQMRHST%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDVvxTfqxK6HXY5CkYkBfN%2FcUuTTpnBzXS9JgiDH9mGyAIgYejGPT0yhKPkNgJ7rGYXMTx1CweRZa2UVpPDUGzD1HYqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnFMuljpUJ645sEMircA60AHwJMlYWnYG6b5wW%2B8wvEVaE6c6iJEpJqiMceOeWHhmXLuu%2F35Xt7EdtfzEsNSFGLyeHsGqyA8i1%2B%2FHKuGKUe4ObMKTQj9Rfjaa1zXoSr8l7Cg1F%2F3saQ2ClJ74%2F9u9Zk85J6EtqjFd8oWyOaTxtQL1W4IdQedxKXWzhXXiWhYd22BUXU7Ke2ylzJionp9qG7os9Y%2B5VhIYj3e0cSXtBmKFe7vp5ZJ6efaYHJ64IJj8svil1E4OWhsEqMn7KYF0BNc7EoGO7xnpAjDzWylBb2IkDNhuI3dMKvld4BkhiRzgjM0tOvjNno70WryuOLVNSpj9Ev3xg%2FYfA%2FvJNdAvXsuXSCkbOjy1UrhWMpYc4hIlmTRod8qIiJAaTjZEsJw3OB7pgXlOVcIpwtGtCSbZPDlcQLW5u1%2Flk5MrNztDnrvByxbyGp1zbulMoinkHB1haDYSO%2FXyafZT2LS0SP3Gt%2BQH%2FkUScrkD6ke7MSetbY2WDiNLwytu0aZVbewhFJbBXD0XBwrn7kcoYPiiolpQ6eQnnTm7kWvk%2FkkQfl55JHRi9xB7eLuiUUHchRZRF8fqGATjoHN2C2zKfcVUimpcTKJ%2BOQhWdpqT4y8NC7MKMtJjXvpgsd3vosUgQ3MLKOw74GOqUBBFnFxDp3Tbkn2W4IdC0tO23JBDQo2USRlQOw5r8guY0XWgEcj0f3byTq1WM8AVp9dMAkQJicy37%2FlDXj78jmy0N8kVYqJ%2B1N2MJ%2FMdsvHrgaF%2B8TwF5p3q%2Bx1aTZdpZwfPHmQWnfOJuy7eKb%2F6pxI7eT9zawhSpA%2FhoCl7vRmgu7sPSquhwr99%2BMG9KPnE1jKIOoHoewldOn%2FdzKqzhhcJ1ocyya&X-Amz-Signature=4cbf4e231cbc2a7a9b62feb4249aa9524b9e9a7d069d08784dc5d18684e9606e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6DHTG4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCAgybevW5kTr2ESwfYcvsDQG9%2Bb8PFI901%2FD1tYWXLsAIhAPyFDTpCM0O4p9I2Hyvcyw9jKePoErytzYkdL581hLq%2BKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhvOugeNtl%2BWeefWsq3AMooNxTHkCs1dKXgJKr8z5XkpgedcgwiXyhZSiV%2Be4EoykB3H%2BUn7NIuvQmK6cCIiZVR5n0jjRFDK29GeDUnyjfs02BQyw%2FATJ7n3q8jUK7oFEiUGxMjbloapuCPZFvLmDuz09n3obQTJwyFdshxsZ6ePF6EbfxyQHtXVyZJW3%2B3EbCuP2GHmDJmcL1x5AOQC6snpDAbPpIAqp7GONEDkTPb9uuiEuEUMbUyADEKIA9VaLh7D5bz4xDUFkjqjftaI0cfWt2fbsX7zAKgX9Dez6vXRBjQ5fqq2U%2FvmBymH8wKmAWs%2FQZUgzcVQZ%2BhhckamwPo%2BeBzCOWAmfMiE9DhZsRUWPZhox%2BzhjyYjLbdQy8IzJ1IWVI3eVn713nVqKlys%2Bf6BX2nMYz%2Ff5JtFZD53Kt33WKVMhnRK2eFlBLgg1EUKTMlhBiWpuxXf4MYo9uLhAZ7kg8jolME2mTdMUGcUjvdCtqnTrW2WdyCTq1OEMLN674nEc0uFPqv%2BQBo2fBTF046QlfMxitmN3c8HLujtT4Zo145n7Kbov%2BA3o9EkN%2Bmg54KhKJ6RbpAyTaPVLgxcLfvSthE6yTnJsr8zqZYs8va3QkvyH5l%2BFXfa2u7NZFdra2LAxTc6OpFVioATCujsO%2BBjqkAcCxZtsAzkOwGPbKp%2BpVW3owm%2BCFaP%2FSFoP19jQM%2Fk7n01T2aS%2FFNuF6zfg45B%2Bnk6FiWYQ%2BPlZqgbUAqNSt1vNTDS1zz0q3jhWUVRHa7VIxuiDXmvh6mf1rwIqc%2BsfQtBDOxiweBJ9USPmxfiaGKmuyx%2FajW%2BTGgWqd0wEO7TVsTQavNFlOYF0JmDswJQJ9QOq%2BCh9mOu%2FNKsviSETeRwJconCw&X-Amz-Signature=87a4c5ef969d902e21e74f484a9b02042e45b83bd71aabac46db55d34782accb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
