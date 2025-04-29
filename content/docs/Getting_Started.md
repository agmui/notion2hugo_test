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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2QKT3Z2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUEtaU1dRjqt9D%2B4X3ZAOvpVrjKZLHCq7Qx2nM0hgV%2BAiB5QnluyCmulj3JQHqnjGvaMrR%2B9Uyx32D6xNi7bcuv5CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM927mSDtPNlMKBhQdKtwDGbjuAs6Fom%2BMEh%2F8c2oSoFH3De9MerzXe7d7ayjdQIsid31iMg5g9uDgVGDQrQmC4GNdIy7Ti1J7KqycoqptvK9vjSMudYntTd4ZpzXj7hjElcduOs0GNQoV1Q%2BbwYfcBKVeV3t8Aaci%2FlpObpiIaAzgKsHVjT9gR0zsGqASlxUAnA1aAvueTa2xtX31amptt%2BfpQNHcvLGCpqy2fIr2vB9QaTpLqSRbj8iK5GlBVf9Rw87krp40KGOioWY6I%2BI1M%2F65Y%2BY%2Bg6LJ3pPfAgCi7LaLbcFH6QM5JSFPW5TtqSi0UPWYliTm3x1GvxNvcTk233VpK%2FPuXj8eecONcNXO2QFTmj2luHmR6XnCXbUVNmT8uGjX9eqIGO2YdsnKc6xcKz5mshGnC78zy35l9ft0m6vsZuJ%2B3Bmbm%2F5BgIz8edIA%2FG09Gf4IfXs5JQpqviyjktMT8M0c9cVdprg8NFEhqThfGaTivqgV3ASQ6t0kCuoQiXvK5MBvP0xL5TY9x7NQr8CnEBA5tkSAPXCjBkhbogmyK033331uXnTdEHXePdqGAZ1UiN3IYsk30FEeV7UQs6vMRsixA%2FdJSCaRIE%2BnVcPNETEADGGN8QpKJsBLeDq2jJ4anwpz0UQIpjcw9KPDwAY6pgFUyZ8YTSURqYWm6juSb37ICuHBjhhTgNadFTrOyG4oDXVNpL5omgu7m91H99wBFA868ggPvXNMHmr4hIf30JWTQDezeE5Y9gh4hxT5Tz2Cr%2Fo5GFbRJhKDkJ7irl8W22El%2BdthNDXYYsjHqaMm13AQwHeSJpawf3SDRsQ0iPJ%2BUJn3uYl3KMAfT8TzvT1%2FKmjLnqYN5v3INw5UPJf%2FJaDOGmxW0vGO&X-Amz-Signature=b497de324d10f323a22f03d8db027755f8c6ab2e18ee979d836dd181d8847e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2QKT3Z2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUEtaU1dRjqt9D%2B4X3ZAOvpVrjKZLHCq7Qx2nM0hgV%2BAiB5QnluyCmulj3JQHqnjGvaMrR%2B9Uyx32D6xNi7bcuv5CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM927mSDtPNlMKBhQdKtwDGbjuAs6Fom%2BMEh%2F8c2oSoFH3De9MerzXe7d7ayjdQIsid31iMg5g9uDgVGDQrQmC4GNdIy7Ti1J7KqycoqptvK9vjSMudYntTd4ZpzXj7hjElcduOs0GNQoV1Q%2BbwYfcBKVeV3t8Aaci%2FlpObpiIaAzgKsHVjT9gR0zsGqASlxUAnA1aAvueTa2xtX31amptt%2BfpQNHcvLGCpqy2fIr2vB9QaTpLqSRbj8iK5GlBVf9Rw87krp40KGOioWY6I%2BI1M%2F65Y%2BY%2Bg6LJ3pPfAgCi7LaLbcFH6QM5JSFPW5TtqSi0UPWYliTm3x1GvxNvcTk233VpK%2FPuXj8eecONcNXO2QFTmj2luHmR6XnCXbUVNmT8uGjX9eqIGO2YdsnKc6xcKz5mshGnC78zy35l9ft0m6vsZuJ%2B3Bmbm%2F5BgIz8edIA%2FG09Gf4IfXs5JQpqviyjktMT8M0c9cVdprg8NFEhqThfGaTivqgV3ASQ6t0kCuoQiXvK5MBvP0xL5TY9x7NQr8CnEBA5tkSAPXCjBkhbogmyK033331uXnTdEHXePdqGAZ1UiN3IYsk30FEeV7UQs6vMRsixA%2FdJSCaRIE%2BnVcPNETEADGGN8QpKJsBLeDq2jJ4anwpz0UQIpjcw9KPDwAY6pgFUyZ8YTSURqYWm6juSb37ICuHBjhhTgNadFTrOyG4oDXVNpL5omgu7m91H99wBFA868ggPvXNMHmr4hIf30JWTQDezeE5Y9gh4hxT5Tz2Cr%2Fo5GFbRJhKDkJ7irl8W22El%2BdthNDXYYsjHqaMm13AQwHeSJpawf3SDRsQ0iPJ%2BUJn3uYl3KMAfT8TzvT1%2FKmjLnqYN5v3INw5UPJf%2FJaDOGmxW0vGO&X-Amz-Signature=ac924c008e060f9d181f8964f1250184989f153df3146fc0fc4ed41a0de1f584&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZDYYDW%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkPZLMktvil25oMKXllfB8%2FHhUqQLUGB8IAEV9%2B1mIUAiBcGXvipwaY%2BNqR0xiEHRfFIbTyriTM3nxy7Q0EikuP7CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCd0WJWcsQhPTchopKtwD3G7zTm%2BrPIjEYwibLNiB6vM4zaOtdmZXkSzHmqpB0NXwH8CBenfSq3KQpRRODh9XmpZyiwsj19%2FyD3KtmXNPEwdziAOrcc1YgPFVLxpu5KAGUgudcMwIW%2FKRXXEPD%2BFeRXqhAZLji%2BaEmDTFi0SGt07shJLCPjiP1zLauV6xAWet3ddQE219fWKWz%2BIMsG%2BAUGCBlyDOFKMd9frlRpA4NMlccxu47fJUz8AXwXEEV6YnVaQsY4bhci%2FUC0%2FJ2acLQOkYTQ44DsLmndIvSsZFwk%2BlaaA6P%2B04gIhDr7QKqtWSitfVQID9jEH%2BS9CIE7CrRDVeP%2FQ2VANd8EU6Stj4nwfgzes5Lw1dF4RWvYFv6LcLy2LArfq1ctjyztD3dikYU%2F0M0QNj0GvLrJ5%2BZiVOI6bdil6BTbejULGICZZeTFC7MsY5WJUezZAmalmVMpGlrbYRG9M8gYvZh2iDxPy%2B%2B31uiyd1uPsRhi7sm6XfurKm3xvsb3oNYV8PrMpLRma%2F%2BhjfloDLBmRLD9xfJXciu3Y3ikf8fcUWXexakQTQ%2BSYiRPbkiwpNAti9%2BRyIltuFHx2YEl3CiVNwt8CXP6fKJlzfiJJfr15y9%2B%2FDspdv7MOBZEaB0q4wnEUglosw76PDwAY6pgHKzKWcn%2FHGScAmxPKsEDAGPwQ6YceLl%2B5M3ZkFr%2Fx%2FHBxrVd8TyV1kJuFm8IK5goLfbHF6sjYh2I6qer3xSlOv4l2Mp9qhYie89hBj8xuB9fgnxqbqC3CNkz7ZgSMuECzjEa8fUR%2B213NhH4Phmdb5f3fJHwzM5xmzAPKVijza6MOQs2PMtUfLKhMrrgHlkhPOQ4GjVwqUG3rnfWKa8bOfeKJSt87e&X-Amz-Signature=bb1d1cd59ee24c458c0a895cf833259f3f25871e6bcc07c2c7f0c5eb5d6d9077&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGXQ5C4%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqCTTbhuQtPSsH9VxjCzQCzF3WGh98NWDxeJIAHqN1OAiBQ2vz9HrdeBQzHCNKHUwRTjS1T53VuOOBYV5s5ZbMzIiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAFlpwerO90arY2A1KtwDt2m35%2BNRjJNaj5KB9SfCA0tx1XtYrzZ0F6upllCHWDrGRkGGA2FRgwyOLm1iycvCtXTQ6VXxQZBWyGzI%2Fqat%2FzTodRESyCACf2G86bMKUN4yCk4acz5IjvaJUg1Pf%2F%2BlgoF3yf%2F3sI118uRHjNdriBj5EgWrE47DrJYsIbCa%2BibIonTYDtqyf6rnLvKUk6PnK%2B5GuIDPoqXMgGveOP%2FfjwiTLT0sdBuqsfBsV6Z1kGX%2B035E9yh25WRDWoO20F7VihdbBgjANQx1TCXLk1aNnLrgRgQ%2FzmRoTYsJaGQMqf7iicz3vmbQ4JiYwG5t9MR%2FgKRCs24zbXFKQpE4Va7pwjAQu26t3Jcq0KLbZz11Hrxgch5cJUBYy5G5eANw3PvxZvTvQCLPRoOeSMxoc4FvuO%2FVSBoXyNlo6beAWdaNSg1LSPND1Bl%2BAu17WPC6kxJcWP5soLzpF1ljv0HLTOYsN3EBbmU25sKufPFuTr1aXtK8IYSMerHTuWLAfKvO1nb7ma06pJ0zgEjwPQDD9VqbxQyQRfRTp5swyCUO0UfUtflgZC9jc4fh9spDKLtQO2bLvLh%2FwHZF%2B%2B6MOYGUFmxRx8RdOSIqwCQSxAK5YWuhRtzpklpFerG%2BdRjdvi0w0qTDwAY6pgF7B8qPicVFZ%2FCrcnYs%2F%2BsywLlOGqV8wVE1fM18T6y%2FrejJ0KV2Tgp2TI2iwn7MjG8HZSDkcCpC7OVMLP8v9dBoWzc5q%2BsM9ecjZ3sdZOGoFSo3x10VifIncNH4W7xbICrkTfsCJzrdhTcuj7stoTUGly8p8ytuSDG1ixXP%2FkISo39HHtbbBrDy1fd34m4rwElRYWIJUutoVHUHf4YvDuW9a0ERxZwO&X-Amz-Signature=43a97d4e581c3b896d2fcfb6a14bb7b6a54d1548d05357d4e79dfb28f4339fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2QKT3Z2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUEtaU1dRjqt9D%2B4X3ZAOvpVrjKZLHCq7Qx2nM0hgV%2BAiB5QnluyCmulj3JQHqnjGvaMrR%2B9Uyx32D6xNi7bcuv5CqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM927mSDtPNlMKBhQdKtwDGbjuAs6Fom%2BMEh%2F8c2oSoFH3De9MerzXe7d7ayjdQIsid31iMg5g9uDgVGDQrQmC4GNdIy7Ti1J7KqycoqptvK9vjSMudYntTd4ZpzXj7hjElcduOs0GNQoV1Q%2BbwYfcBKVeV3t8Aaci%2FlpObpiIaAzgKsHVjT9gR0zsGqASlxUAnA1aAvueTa2xtX31amptt%2BfpQNHcvLGCpqy2fIr2vB9QaTpLqSRbj8iK5GlBVf9Rw87krp40KGOioWY6I%2BI1M%2F65Y%2BY%2Bg6LJ3pPfAgCi7LaLbcFH6QM5JSFPW5TtqSi0UPWYliTm3x1GvxNvcTk233VpK%2FPuXj8eecONcNXO2QFTmj2luHmR6XnCXbUVNmT8uGjX9eqIGO2YdsnKc6xcKz5mshGnC78zy35l9ft0m6vsZuJ%2B3Bmbm%2F5BgIz8edIA%2FG09Gf4IfXs5JQpqviyjktMT8M0c9cVdprg8NFEhqThfGaTivqgV3ASQ6t0kCuoQiXvK5MBvP0xL5TY9x7NQr8CnEBA5tkSAPXCjBkhbogmyK033331uXnTdEHXePdqGAZ1UiN3IYsk30FEeV7UQs6vMRsixA%2FdJSCaRIE%2BnVcPNETEADGGN8QpKJsBLeDq2jJ4anwpz0UQIpjcw9KPDwAY6pgFUyZ8YTSURqYWm6juSb37ICuHBjhhTgNadFTrOyG4oDXVNpL5omgu7m91H99wBFA868ggPvXNMHmr4hIf30JWTQDezeE5Y9gh4hxT5Tz2Cr%2Fo5GFbRJhKDkJ7irl8W22El%2BdthNDXYYsjHqaMm13AQwHeSJpawf3SDRsQ0iPJ%2BUJn3uYl3KMAfT8TzvT1%2FKmjLnqYN5v3INw5UPJf%2FJaDOGmxW0vGO&X-Amz-Signature=986bc16a3ed21988b56e8cfee04fff47874ff113954f7a27e694e1e357a1bb78&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
