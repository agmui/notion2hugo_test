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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4AJMDZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQChjE4qziGT4kdsJ4pbGwwknI1%2BbOWAite14k5kNKeLpgIgG8%2FcB8Vv9mjh7aOnp5VJ8WYLEMv2xR93b5YBvED4kiUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1dhWg7xdFlp6OQWircA0FnQEorb2shjX7vILWDW5hP%2FrCm5bQI6XfEHvJ9TTdUnqy%2Bg1uE8BfqyFW8LeA1%2FsgRyDdo2W2stX62GwPt1hYFrkD%2B6FUiTWDYHbx272EVDUVPLsmRVWsACwIk6iys8sVxTYYGC7wCpm2%2Fw%2BGmnfMOctL9YliL8KHoLKBGCLoXPApJzefF43%2F8hdY0QTJfMqlYqQfVfylP9aBqS9DdtEmiugJ6pyyydcN7QhGjqk8vgo%2FKfhRvT4PPkMc6IwsLAecIWrJVlQ9ShyV2RaLe8%2Bt9PUDtYw8h%2BGAbgDfeP9VwRqBmAIaJ6mSAP21rVzDPZytAhyPmBmtpx1sL6Wf2FAr7OqO6xUyaYEGbBLmzUkKDX4LLvwKBX3xK7iRh0NtuhUI5kGuykMNw5qcT6Yyly9TVDSAIW8WswqRqYw4osrjPiysJpjYFx0enFGSOiQcaCRMn6ZEXi12EhJWL7xe5Rp%2BExX%2BFA9ptIFYnviudQr%2BiCarwA9vRh0N%2BZAbpt4fsK%2B%2Fb1SiFoSt4hRr4V23D84AdIxb%2FI1Y%2F5nMgQOSzV24DNBPZF%2B3eZmy6sKaIlw%2Fgw%2BHy5i9f6NpvldSbnZLMKO4hFrL3Hztu9E%2Bm1a%2BrVFTY%2FApkWoDL%2BtvTfhxoMKT8t78GOqUB3TLTrjlbAzwcCfPdk6OrR90nFZdmIz9%2FFohvAOk9z7kOvvDdpWMssUcm0sp7WwtQq%2F8W7IdWR2SwfBe6MkSG3T%2BVfMlXWd2GyK%2BdeaatGYevfdiswtMghBCsDDb%2FiU9B4DEYXAaaO12dtKZ9ZTIFC3wBe2vJ6Nk%2F4VdGDtHkvj23IcEQbv8r99TE39MDKfD4RcKZ7Ua2MXIOtYI8b7JLrCE49veq&X-Amz-Signature=e39e3a055161e7184a4c5d7050b2fabc3651693ac7a4495eb482e28c6df1e2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4AJMDZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQChjE4qziGT4kdsJ4pbGwwknI1%2BbOWAite14k5kNKeLpgIgG8%2FcB8Vv9mjh7aOnp5VJ8WYLEMv2xR93b5YBvED4kiUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1dhWg7xdFlp6OQWircA0FnQEorb2shjX7vILWDW5hP%2FrCm5bQI6XfEHvJ9TTdUnqy%2Bg1uE8BfqyFW8LeA1%2FsgRyDdo2W2stX62GwPt1hYFrkD%2B6FUiTWDYHbx272EVDUVPLsmRVWsACwIk6iys8sVxTYYGC7wCpm2%2Fw%2BGmnfMOctL9YliL8KHoLKBGCLoXPApJzefF43%2F8hdY0QTJfMqlYqQfVfylP9aBqS9DdtEmiugJ6pyyydcN7QhGjqk8vgo%2FKfhRvT4PPkMc6IwsLAecIWrJVlQ9ShyV2RaLe8%2Bt9PUDtYw8h%2BGAbgDfeP9VwRqBmAIaJ6mSAP21rVzDPZytAhyPmBmtpx1sL6Wf2FAr7OqO6xUyaYEGbBLmzUkKDX4LLvwKBX3xK7iRh0NtuhUI5kGuykMNw5qcT6Yyly9TVDSAIW8WswqRqYw4osrjPiysJpjYFx0enFGSOiQcaCRMn6ZEXi12EhJWL7xe5Rp%2BExX%2BFA9ptIFYnviudQr%2BiCarwA9vRh0N%2BZAbpt4fsK%2B%2Fb1SiFoSt4hRr4V23D84AdIxb%2FI1Y%2F5nMgQOSzV24DNBPZF%2B3eZmy6sKaIlw%2Fgw%2BHy5i9f6NpvldSbnZLMKO4hFrL3Hztu9E%2Bm1a%2BrVFTY%2FApkWoDL%2BtvTfhxoMKT8t78GOqUB3TLTrjlbAzwcCfPdk6OrR90nFZdmIz9%2FFohvAOk9z7kOvvDdpWMssUcm0sp7WwtQq%2F8W7IdWR2SwfBe6MkSG3T%2BVfMlXWd2GyK%2BdeaatGYevfdiswtMghBCsDDb%2FiU9B4DEYXAaaO12dtKZ9ZTIFC3wBe2vJ6Nk%2F4VdGDtHkvj23IcEQbv8r99TE39MDKfD4RcKZ7Ua2MXIOtYI8b7JLrCE49veq&X-Amz-Signature=bab110eec5ef69aa9b8c3c8a2725a48cf8b2901ad098d0b73b349c76a7e5c056&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOVUDEGL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDXMYEW6XIUFHgX3T5CQOwcBTsyXJ7WRFc2QN%2FeuabTIAIhAP8AFW7F9q8mj5I4LpnfBX7X512CBXaFZ6VCnn9W8Ue6KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3zIMG%2Beg5e%2BsBqLwq3APWWuJrso7KZ1Hw%2F9%2B04NUbWo37YxEic8UWE5V9fiWoT2pb%2BBcg5mSBDT5ldN74FuvDPTJJ5aZVDZVoESe1MrtIUbFrwiKTYY1dE7JB3tHB25jlQFxNysvyP0eOP%2BooiPW3DGfFY3TXlzDIBt7NXrrch9uq9ikdmsCpWeFldwTyUarOBZ0yrPUQ%2FGa8rqyDEkC1%2FXOa%2FLzYWB%2FjZBJSgTC5vLmUR47mWEqUK0v%2BO62wXGyb%2BMttiZN5kGrp5RyTqBBIk3f9MiTFqlOw8gbHUAcRCs6Jo8PqP0kcQflzh1dxnxw6kesFW%2BIW9jnD8R1vSCjwPzwA60pExdrju%2BOcgaGT9DVJzl95GbfGMvtIppsN%2FnaiLgCBhN71aEe3iIyCIuwOdf6VY6ayhtZjakuaOegvgwv7c75D1ZZcPJ5d1P0IrilZPZUXJDFLr5olm8BNsLmiFzZg58Yb23lwsWSdKK%2Fl8HO7%2FkVvoG82j1OZivy%2B6QdVD82YZrOjs%2ByEFb6AQ14YZ0Gf6ZWoXfLCOpHxGrft6ilmVPEeD7cIlT8TSCEWyzr7WNDl4nMetpR%2B78ZWycQmhhZZUx2eMJ2nN61onKCYKmhzCPQF8PDbbQXZ2qBPKPFetHiktGEMzoXk8DDP%2B7e%2FBjqkAa4mlwdWXOlYdhJxPkWxcZfisQLvA5FK%2BoOVj90tA%2F7AdQ2WquSRzUfZ6N1js4hhTxmXQUeVJ5OCm0dDNuxE4oYuV56P9ls86Lli1I6VQmuOZvCHyBw651AukBkM3tRepoAGcRjQMurcM5SM5dINg09AcrFr6BhmadkhO6FoHeVcr%2BjM1T3oYfRAQo1Nax4kn6nOx6nImkOV54wwGCo9fSsDZPMg&X-Amz-Signature=12a710f5882b7092c056b76de432cae3aa95134152838e436e9df83f1bfff015&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKSB5MJL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD3tkqeallXCAFnzMYzPgUuS1IF9BVTZpaW%2BOUJ9NpbwQIhAN55GPodlzYiYwavj6OyuBrKpdvf7EHQBK1tFNsKFFG%2FKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3uyj8b48J%2FknzwTIq3ANCwt9tRgg%2F3nNgrrKByplsCJVp0DeTFPnZpVvNaAU6FGfsLGsPA6Iub%2BsUz7w8%2F01Q7waPYWyK6u5JGy2VDeYeMDrV4oldynRqZrm90fNQkBv3nMl%2BQGLm6mLkbn22VYllTYgbAJw2Vonn%2BHCMZIZM%2F0%2FbUJdvfonscrZ4p3OGhpMJ8Ne%2BbyJxhwYwTM%2ByhM%2FSy95YPA858Qn67urUa7Hc8L9p7k1nULS28AyWX1UxkI%2FS4%2FmT9PjzObtOreURSzxcP38FcN0dWLqB2SkfIGnnjB%2FDBjuzyxSa0Tz19mFTomc%2F9eDZfPVJfR6%2BJ6nvUs60NO8F9bXesfOFDVF7aK0AD13tNNSTqi%2F5X%2BAhEMspIGyL%2FnFkMIO9XOGoEpfwFxomARg5eL%2FPWGKnnHPQmyHu41%2B9H%2BvZo6rLlG8vmzOs%2FtgjU4nbmv%2BWPCAhC0J78r7hSESc3GrK%2FwSO3s7pdHh4%2FBeDVjQGrHv49AtlpxYnqQV5r9E2JhPn4XhUOdHYhYYCyjPp5xx60K89khD3x3skwUebGqHxxI2Pvu%2BdBoBJpYpRBfVgnR20XcZgHozU1Fxw14OUqiu19bL5y8qLuk6WGxxBvrK%2F0a5%2FhuGlFTwQZjw%2Ba7Wv2r5iOeiqLTCWjbi%2FBjqkAUJeFfBksM%2BSd6TAAC67pSkTYwtYx9TCoK8%2B8GuK1i%2FTQ1TC0B8vBNUvWfzrOrggZCFQaJK%2Fd%2F2hp0FxawXVt0Jw2UcoNzKhG1wExBZiiVitAmtNxnjWBMbMtdv1bWRU74rISKbGfWBDp2isNRmWCy8m6%2BSWck68C64rmV6%2FLSLIq2%2B4Ip%2Bz3lO6ECAQRfoMdvESVs078ML4o%2BjSta0byzRqQkwf&X-Amz-Signature=55bbe59d3fdeb099097713887b438d27863c0c7e985538a00881f3b0ead37311&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B4AJMDZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQChjE4qziGT4kdsJ4pbGwwknI1%2BbOWAite14k5kNKeLpgIgG8%2FcB8Vv9mjh7aOnp5VJ8WYLEMv2xR93b5YBvED4kiUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1dhWg7xdFlp6OQWircA0FnQEorb2shjX7vILWDW5hP%2FrCm5bQI6XfEHvJ9TTdUnqy%2Bg1uE8BfqyFW8LeA1%2FsgRyDdo2W2stX62GwPt1hYFrkD%2B6FUiTWDYHbx272EVDUVPLsmRVWsACwIk6iys8sVxTYYGC7wCpm2%2Fw%2BGmnfMOctL9YliL8KHoLKBGCLoXPApJzefF43%2F8hdY0QTJfMqlYqQfVfylP9aBqS9DdtEmiugJ6pyyydcN7QhGjqk8vgo%2FKfhRvT4PPkMc6IwsLAecIWrJVlQ9ShyV2RaLe8%2Bt9PUDtYw8h%2BGAbgDfeP9VwRqBmAIaJ6mSAP21rVzDPZytAhyPmBmtpx1sL6Wf2FAr7OqO6xUyaYEGbBLmzUkKDX4LLvwKBX3xK7iRh0NtuhUI5kGuykMNw5qcT6Yyly9TVDSAIW8WswqRqYw4osrjPiysJpjYFx0enFGSOiQcaCRMn6ZEXi12EhJWL7xe5Rp%2BExX%2BFA9ptIFYnviudQr%2BiCarwA9vRh0N%2BZAbpt4fsK%2B%2Fb1SiFoSt4hRr4V23D84AdIxb%2FI1Y%2F5nMgQOSzV24DNBPZF%2B3eZmy6sKaIlw%2Fgw%2BHy5i9f6NpvldSbnZLMKO4hFrL3Hztu9E%2Bm1a%2BrVFTY%2FApkWoDL%2BtvTfhxoMKT8t78GOqUB3TLTrjlbAzwcCfPdk6OrR90nFZdmIz9%2FFohvAOk9z7kOvvDdpWMssUcm0sp7WwtQq%2F8W7IdWR2SwfBe6MkSG3T%2BVfMlXWd2GyK%2BdeaatGYevfdiswtMghBCsDDb%2FiU9B4DEYXAaaO12dtKZ9ZTIFC3wBe2vJ6Nk%2F4VdGDtHkvj23IcEQbv8r99TE39MDKfD4RcKZ7Ua2MXIOtYI8b7JLrCE49veq&X-Amz-Signature=0c0157d1972d7767b9c7f6962a464a70c288a481923ccdfcaa4ade303b1600a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
