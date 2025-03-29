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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HPY32G%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICzicwJRD3e8g5R01U67cI%2FouhfHDj%2FU3K3LdlK93E2KAiB%2B7ps3StS31e9ofjnZOGnIae7urzPPruIgYGjl%2FyxwIir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUdpT9g3ADuDKHonTKtwDAxOI5yl2MtLyryu2kuf9mb8U8QuijGePb9MF%2BoKhgzwBqrtSdmbWUTiTLlDoBsZIpfNZl140olp%2BhABvJAdnKcysUj%2F9aHx3Bv6BEBPfdiVQDeb7yl4YBQUmzuUsMTXB5ThfzhtHPkQu7Voakkm68Ep9GSngqNujWBRozkf%2BVDQhUAQTWpE8bsVe8A73Wg6La%2F5xwiiphWF6zKetiz9iCktb7KmIY7jidqD%2BY%2F5UTIL0Yvi1CgvYjb4RSoJ6adp6xPrDxHZ6CTcXG5Yj%2BdKhqhFUqh%2BBglKNFVtXRxBtCXJkt2YcC6megP3bP%2FQVz16G03lOLblKV44T%2Fs7hwvkT%2BkZcRXCmuCfke0ekzaI1tA5U2sH0RueShJ3lnLmRHFRTkGYA2MbNjSZA1ltwBCKmgirKCr6QfI3HDoA4DMtCbVfRWqH6D0KQCOcCrkQhEIruhaGUTP2XAMHvkwnbK1nuV1gyGfuirg13fW7YzcDVwEqCOUy2U84HYSmPs%2BatTzD%2BF2G58ImmAWKHJKScPjiwkm6vFn0zpbTtTDdUX5vjD0rLY8glRQK7t3CR2NaX9qxa3FXVkt1bXo9V5nJBWc2sB1zVAAcDuul5luX1ZHBieidZhFPn1LXo605%2Frysw1N%2BcvwY6pgF1ZfhJRgG1tObwTiCx8qoD2Dz%2BnbyeizU7dAupnqRJ4YuU2BgFDiFI6pEqls7Jx4Nc8ql7tKg6ogz9l5rXtwoPwSYClthecidE6tuwcAFkP7q%2FmpnB3F32Aad2GthruCpA%2FiX7daUJnRGbHDXUt7FRxNx2H5HGZinKXqIeF%2Fg8yEBMeUz1Ko6IJankF1w35LfK4nB2CwK8D90bcmBJzeBjpO2w87Vc&X-Amz-Signature=d718181f0602741396b0e3ebfcfe1841ff06fbe332e65d1ae39f840ccf6f55ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HPY32G%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICzicwJRD3e8g5R01U67cI%2FouhfHDj%2FU3K3LdlK93E2KAiB%2B7ps3StS31e9ofjnZOGnIae7urzPPruIgYGjl%2FyxwIir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUdpT9g3ADuDKHonTKtwDAxOI5yl2MtLyryu2kuf9mb8U8QuijGePb9MF%2BoKhgzwBqrtSdmbWUTiTLlDoBsZIpfNZl140olp%2BhABvJAdnKcysUj%2F9aHx3Bv6BEBPfdiVQDeb7yl4YBQUmzuUsMTXB5ThfzhtHPkQu7Voakkm68Ep9GSngqNujWBRozkf%2BVDQhUAQTWpE8bsVe8A73Wg6La%2F5xwiiphWF6zKetiz9iCktb7KmIY7jidqD%2BY%2F5UTIL0Yvi1CgvYjb4RSoJ6adp6xPrDxHZ6CTcXG5Yj%2BdKhqhFUqh%2BBglKNFVtXRxBtCXJkt2YcC6megP3bP%2FQVz16G03lOLblKV44T%2Fs7hwvkT%2BkZcRXCmuCfke0ekzaI1tA5U2sH0RueShJ3lnLmRHFRTkGYA2MbNjSZA1ltwBCKmgirKCr6QfI3HDoA4DMtCbVfRWqH6D0KQCOcCrkQhEIruhaGUTP2XAMHvkwnbK1nuV1gyGfuirg13fW7YzcDVwEqCOUy2U84HYSmPs%2BatTzD%2BF2G58ImmAWKHJKScPjiwkm6vFn0zpbTtTDdUX5vjD0rLY8glRQK7t3CR2NaX9qxa3FXVkt1bXo9V5nJBWc2sB1zVAAcDuul5luX1ZHBieidZhFPn1LXo605%2Frysw1N%2BcvwY6pgF1ZfhJRgG1tObwTiCx8qoD2Dz%2BnbyeizU7dAupnqRJ4YuU2BgFDiFI6pEqls7Jx4Nc8ql7tKg6ogz9l5rXtwoPwSYClthecidE6tuwcAFkP7q%2FmpnB3F32Aad2GthruCpA%2FiX7daUJnRGbHDXUt7FRxNx2H5HGZinKXqIeF%2Fg8yEBMeUz1Ko6IJankF1w35LfK4nB2CwK8D90bcmBJzeBjpO2w87Vc&X-Amz-Signature=81f0dea87850091305d2717dde0c74fc739209bc53331e8929f331788dcb16da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTVHQJM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD4u8mCQ95Jw3DPnuNRDPq8aUIsQiRz91JveMtMM2WmzwIgfHl1dorGw513du6s8NcxH9xmHWbvSztUd1k52refry8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDEle4xG0i89ruelNeSrcA4NQHl4ewd66EN%2FFjcFfILNr%2F5c82dCFH9N%2F5ex4FTkJpzt3%2FKCFZLJJRQPIIMq61sZIZRkgI245QTkrVSf7JYX7DLrsxrnr%2BlpKeb%2FS6FjoCWoF6I1Io%2FxyZt%2Bjg4QtzCrDMRD7jWXgK7%2FzJvPdmgHcUM5PvuTpeSkGl8RA93OJmRrevt49bcJk%2Fq9sheadEyjy18hEadXtt8rKGKzwnGZy3h5GABDcNQaH4a%2BmY0O%2BaU3Aisp%2Fl2uKOSauqlInyGmYMfcyAoHcRYAXwGY1fO5COBTbpdTgWe3HARjHy%2BRiDNWwuYQv83BzqgFc%2Bvn4XQnyOBKAOUvEhGDdb5IiTwc5IQ2vZJIpHvT6e18Rhuo2A1oFSMhOaRWvF3%2B8pI55LODpXPBTRe2esrxX8HFv52A6aT7hIyXkdm4ziMmxakHxmRuTsfaCxJIJ7N03NSfbKgO015YdQEg%2Bd4Z0A4TAn%2FR9QzEr5ns7I6%2FIhA46b7Kvbp7UtTvc%2FHv4TmhDnQ9knr33yVGj0AKJgwIRg6JD0DPbaCP3xEFBX3NHB%2F6bzU30I8dmqt%2B6FQ%2BZuY3w%2B90ohECTTc4KUXoXoRMWPh2yy1RrspcPs%2Fii%2BhVMaiACMzYC1HsvnIqy%2BOS3RFGCMOzenL8GOqUB89Foa%2BEI95L5jxlN1BW2eme%2FglG1bZAYOSPoG%2F291SrEBgiwycH9MhBH0i58EwyW9jI9GDwCu2vqZwpI8vOagZ%2FJV95xuUOB4anHT3T7fVlSJGrkFm6zbBZYXoYk4Tj80686qfJb9FSiYJmiZdl42NiSGah4O%2FyON6sMH7cTZ5B0BZyD7JgalgtcxrKvIs06o0o0iqbZ8jw1%2BHQkNJwdVUgvrbtS&X-Amz-Signature=c9ab5e1e2fac02e56782c8f065606ac2718bbe2187c0659bbc27c764621b0af2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHQF57P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDcOkgYd1M%2FzZs8LTIm%2BFC1CCxCcxhLpoWjx4hdeMzHEwIhAInxRxipb1nXc2gOGQT81C6sKRRr1dPGdYisE%2FQB8CspKv8DCGgQABoMNjM3NDIzMTgzODA1IgzfPD4e8B7ELRQwuGQq3AOS%2FVMJaUaUkgpE7ebqWqyTSB702j%2B653GHOkwgSkT%2FXGXLwV7TexXhKXjH%2BuEpR1%2FW44XALQhYvCo7zKMtmyTC685rM%2FKTE4v8V9dUpHu16qh%2FHHF7EAD1LBNwV3sMuqh%2BHn8SWoHqym6kHWYgB9Z4pKo2xuB1WEuKzmhTuxq0DTFAPUAtPkIpUtVbYccdb%2BnR0gXRleTOgy%2BmQl1mLuJKaFWraicLLqccabSPvhVDzR4zqcGCj3mGWKLERCL%2BKrfGw%2Bi755fSTIOwccrcZM%2Ff2g%2FNhKtNDCKLnRzkp3hKAi%2FoN11DhClfUvr6CWt9b9CFAcohXcNZHKhnX5jt1fAKJsg0U%2F5rKwlH31MXRS1n1zV4g%2F8smqhb%2FDlBVXvLsPTGo%2Bp%2FcpySqzTkEln7TNB%2B%2F0p7qtnZC1A6IWEchSWlncOZ7XEyqfWvZLsoUS8zSegnk0%2FTafgpnzlOQ%2FPC5bm0cIPHaB51mjohcRJIhkMrR77cco6oAm6BYNQFpyVLLu4lt10gvIjR64BZvF3L0ltrhJFoK0UMLa1jZABwqDF3XDkaKn3eGVbc8N0TkKt0BnSB7zx4m0L3m8uHPBOLWKctXoi%2FGZb3BLSFX3M2Y9bJ411suo7t2CE6tXKfaDCs35y%2FBjqkAQHJxo3vdn%2B1e%2F8FmVuiGkm0r8h4PlQFSPaqaagOnL0aHyOlTd23uqhnJ9QrvaxMjKIyiqps%2Bv5rWm7KTWnsncLcOW4pTr1alGN5aGyaY7wsFsnof5RDkPCWf26%2BCIf%2FUE8nzV%2B4E8cvQgF9GPhW%2BjQN9W6v0U9vQjsNLj1mwudIbiplFF91xArT51dID8Tiu1lHFU1aDLZdG1Im3%2FWW%2FD1JqbrY&X-Amz-Signature=74add28e8adb1cf1239c8272f160e51894ed9aaf3bdaa8f760cfce00bf54eb05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5HPY32G%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICzicwJRD3e8g5R01U67cI%2FouhfHDj%2FU3K3LdlK93E2KAiB%2B7ps3StS31e9ofjnZOGnIae7urzPPruIgYGjl%2FyxwIir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMUdpT9g3ADuDKHonTKtwDAxOI5yl2MtLyryu2kuf9mb8U8QuijGePb9MF%2BoKhgzwBqrtSdmbWUTiTLlDoBsZIpfNZl140olp%2BhABvJAdnKcysUj%2F9aHx3Bv6BEBPfdiVQDeb7yl4YBQUmzuUsMTXB5ThfzhtHPkQu7Voakkm68Ep9GSngqNujWBRozkf%2BVDQhUAQTWpE8bsVe8A73Wg6La%2F5xwiiphWF6zKetiz9iCktb7KmIY7jidqD%2BY%2F5UTIL0Yvi1CgvYjb4RSoJ6adp6xPrDxHZ6CTcXG5Yj%2BdKhqhFUqh%2BBglKNFVtXRxBtCXJkt2YcC6megP3bP%2FQVz16G03lOLblKV44T%2Fs7hwvkT%2BkZcRXCmuCfke0ekzaI1tA5U2sH0RueShJ3lnLmRHFRTkGYA2MbNjSZA1ltwBCKmgirKCr6QfI3HDoA4DMtCbVfRWqH6D0KQCOcCrkQhEIruhaGUTP2XAMHvkwnbK1nuV1gyGfuirg13fW7YzcDVwEqCOUy2U84HYSmPs%2BatTzD%2BF2G58ImmAWKHJKScPjiwkm6vFn0zpbTtTDdUX5vjD0rLY8glRQK7t3CR2NaX9qxa3FXVkt1bXo9V5nJBWc2sB1zVAAcDuul5luX1ZHBieidZhFPn1LXo605%2Frysw1N%2BcvwY6pgF1ZfhJRgG1tObwTiCx8qoD2Dz%2BnbyeizU7dAupnqRJ4YuU2BgFDiFI6pEqls7Jx4Nc8ql7tKg6ogz9l5rXtwoPwSYClthecidE6tuwcAFkP7q%2FmpnB3F32Aad2GthruCpA%2FiX7daUJnRGbHDXUt7FRxNx2H5HGZinKXqIeF%2Fg8yEBMeUz1Ko6IJankF1w35LfK4nB2CwK8D90bcmBJzeBjpO2w87Vc&X-Amz-Signature=5def1110170cf99edc3fab70485c0714e84b0a30a459d9188fbbe008df8ede4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
