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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUA46NY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtxzMRdV84263z7nbXcmTcMFEnqejrWJmQGzSzFeZAAIgAX1pTxqCzMDQNWYQxlGrM6ShCpYjWNm570qRKAzgGDwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1%2FNts6hzC%2BlyRDCrcAzCHTDVzqLLsaoDs9oeaPmn1%2B4Fe6HDigbxGBwZMfPQ8whI4ymG8lxpYt5US3yiyiyGcOaGDX%2F91HZHd5EiRYgtaBIPLsgu16j3PecngeLM4XtmGHg9%2BOtq4zTopDLXBi7muxuWSxZ3aIfy%2F0k4L1pKlvp7pwPt9rfOAI0BhVj9t6228WOQYWsfooV2TyTnONmau%2FqhRQm5qb3QcS6tKPPVDqqHEE6exolMMBS4EdrDxdhUiz%2BB%2FdP%2BSm%2Fo0136x7740QCtLP4x8BDjQMWuqs4Sb8erPZSQyuK7KdjFxmcljKddJHawVT4F6opQpdvYerV4s9LppMvg4ZThSPMtH09xbVyC5t4wvgVya0GPGAk8SVwPLgHRJc4FMoG3v5ceEhFiTjjITawY2q22vJFjforKxtgDfPnAdnHkc4qxyVHiipbEuy%2BfAhlbD2FrS%2F%2FLihfDxR8gHN28Ypqzc1QWbo77FKAYxSOqcOxISRFDgXthmZGbF9bSDyG1A9ZkM2ErwOt6j%2FpC9%2FU8YXOJfv%2F6i84lSdRLEzqOyC8NA9k7uZH8FpQFTEstXp93n02gBLj00hxxcF4OfAa0%2BxGI9qLWo8PtocIfwny%2Bkw1b%2BzDKDncwt9nwD4mpNkgXQ11qhMJDX%2FMIGOqUBwplDKJGuf0VPFzMEt9bu1MqYq4mJ4nnViDP%2B94igpRav%2F3jnVn9H5opRpuqQxH6wkcJx9bVwFaCQ8Jw7nuHjJC9nZ51BAGJIwgBnQcWjlP5WvwqET%2FiCc%2BxJ54Sjrc5qYPsJWRmKoTF5F1SkY%2B%2BuNG1jSP42MtB4GdvUu2ACD7Tl0oiNDgHPPWJMcX0ijpo2SDUTqc3IhQzA5Cn%2BZZ%2BFv8waIH7D&X-Amz-Signature=05d990811b7a7bd67266fbbb60b7ad141f2c300fb908f8fb965db49d1f3a728d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUA46NY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtxzMRdV84263z7nbXcmTcMFEnqejrWJmQGzSzFeZAAIgAX1pTxqCzMDQNWYQxlGrM6ShCpYjWNm570qRKAzgGDwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1%2FNts6hzC%2BlyRDCrcAzCHTDVzqLLsaoDs9oeaPmn1%2B4Fe6HDigbxGBwZMfPQ8whI4ymG8lxpYt5US3yiyiyGcOaGDX%2F91HZHd5EiRYgtaBIPLsgu16j3PecngeLM4XtmGHg9%2BOtq4zTopDLXBi7muxuWSxZ3aIfy%2F0k4L1pKlvp7pwPt9rfOAI0BhVj9t6228WOQYWsfooV2TyTnONmau%2FqhRQm5qb3QcS6tKPPVDqqHEE6exolMMBS4EdrDxdhUiz%2BB%2FdP%2BSm%2Fo0136x7740QCtLP4x8BDjQMWuqs4Sb8erPZSQyuK7KdjFxmcljKddJHawVT4F6opQpdvYerV4s9LppMvg4ZThSPMtH09xbVyC5t4wvgVya0GPGAk8SVwPLgHRJc4FMoG3v5ceEhFiTjjITawY2q22vJFjforKxtgDfPnAdnHkc4qxyVHiipbEuy%2BfAhlbD2FrS%2F%2FLihfDxR8gHN28Ypqzc1QWbo77FKAYxSOqcOxISRFDgXthmZGbF9bSDyG1A9ZkM2ErwOt6j%2FpC9%2FU8YXOJfv%2F6i84lSdRLEzqOyC8NA9k7uZH8FpQFTEstXp93n02gBLj00hxxcF4OfAa0%2BxGI9qLWo8PtocIfwny%2Bkw1b%2BzDKDncwt9nwD4mpNkgXQ11qhMJDX%2FMIGOqUBwplDKJGuf0VPFzMEt9bu1MqYq4mJ4nnViDP%2B94igpRav%2F3jnVn9H5opRpuqQxH6wkcJx9bVwFaCQ8Jw7nuHjJC9nZ51BAGJIwgBnQcWjlP5WvwqET%2FiCc%2BxJ54Sjrc5qYPsJWRmKoTF5F1SkY%2B%2BuNG1jSP42MtB4GdvUu2ACD7Tl0oiNDgHPPWJMcX0ijpo2SDUTqc3IhQzA5Cn%2BZZ%2BFv8waIH7D&X-Amz-Signature=8301993902aaeb2275df6ddb7610ebee21c548aa15951d8c8486793551bdc911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUA46NY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtxzMRdV84263z7nbXcmTcMFEnqejrWJmQGzSzFeZAAIgAX1pTxqCzMDQNWYQxlGrM6ShCpYjWNm570qRKAzgGDwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1%2FNts6hzC%2BlyRDCrcAzCHTDVzqLLsaoDs9oeaPmn1%2B4Fe6HDigbxGBwZMfPQ8whI4ymG8lxpYt5US3yiyiyGcOaGDX%2F91HZHd5EiRYgtaBIPLsgu16j3PecngeLM4XtmGHg9%2BOtq4zTopDLXBi7muxuWSxZ3aIfy%2F0k4L1pKlvp7pwPt9rfOAI0BhVj9t6228WOQYWsfooV2TyTnONmau%2FqhRQm5qb3QcS6tKPPVDqqHEE6exolMMBS4EdrDxdhUiz%2BB%2FdP%2BSm%2Fo0136x7740QCtLP4x8BDjQMWuqs4Sb8erPZSQyuK7KdjFxmcljKddJHawVT4F6opQpdvYerV4s9LppMvg4ZThSPMtH09xbVyC5t4wvgVya0GPGAk8SVwPLgHRJc4FMoG3v5ceEhFiTjjITawY2q22vJFjforKxtgDfPnAdnHkc4qxyVHiipbEuy%2BfAhlbD2FrS%2F%2FLihfDxR8gHN28Ypqzc1QWbo77FKAYxSOqcOxISRFDgXthmZGbF9bSDyG1A9ZkM2ErwOt6j%2FpC9%2FU8YXOJfv%2F6i84lSdRLEzqOyC8NA9k7uZH8FpQFTEstXp93n02gBLj00hxxcF4OfAa0%2BxGI9qLWo8PtocIfwny%2Bkw1b%2BzDKDncwt9nwD4mpNkgXQ11qhMJDX%2FMIGOqUBwplDKJGuf0VPFzMEt9bu1MqYq4mJ4nnViDP%2B94igpRav%2F3jnVn9H5opRpuqQxH6wkcJx9bVwFaCQ8Jw7nuHjJC9nZ51BAGJIwgBnQcWjlP5WvwqET%2FiCc%2BxJ54Sjrc5qYPsJWRmKoTF5F1SkY%2B%2BuNG1jSP42MtB4GdvUu2ACD7Tl0oiNDgHPPWJMcX0ijpo2SDUTqc3IhQzA5Cn%2BZZ%2BFv8waIH7D&X-Amz-Signature=83e8152469485201792969f6f099327b0208dad3fea0abea490893284d2962f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NJNWIFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuwNSOICnid%2BS%2BpiGoIh3r%2FznKZKby15RFceGC4faKvAiA7sZ27wzaM0RJAyJ4zsxTD6oeywLhKNOmwrcdK3ReZWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf748yV5olKwui74BKtwDk8kTNNrQRhcsGVfmbFV%2FYsd00%2FDPPNuWyt6EFFUYC8SsEXAwkKJAONU9vDnGVvaoFZZShnp54gHY4hrS2ZP9vUZ2zFopCHgNuLRypoWwaTKI%2FVqCzGoNkG%2BFh1w64YdBA3m0dbSVUQSLku8DjeLSjmOzqijDUIJQBAOiVf1le1O%2BcRXHD1FM0qQMr3muh6CiT3sGZmlSdWgfPXeAs7xAkWINgzxcKlfxiEMaan00Hw8njG8QcPRyCTqe6Ixh%2FyTNmBhX7Qx749p24Nz4ctm8irX7Of7GP67my9OmywSxEy3VYHlTtP26DS9PaZp3nO4IUWwAMOO0aynZMWexwRn4t5h3QpuprD64MVHJfs2VOD5nyhCoGq3zy5O5spFAOMEvmFfI%2BxyW49dNSGuBLsUWzrqg%2BS%2BdhmqPnbVgXJ1m5egNHHOK0sVDEhPlSL4Qxik%2Bg3%2BdKX85ydaEpAGqj4eZjle6CoiCOdkgbMU35TbMyjHpKXd50WwhrFYmzgJ9xBRMIMj72GugfpmFT4C9X7xJyBWGp4XQdDa7oA11WgXhN%2Bbr8aFebLdyVu4APNImT4f5fQd%2B5eFxEn2jhj5JKI9iy3NEMQx71BFcs0aBRz7fG5PQNaom%2FZ6ItV%2B7TX0wndf8wgY6pgGzT7VyfB5cTnSQeD3b272ejQ7CVCZAjtVJu%2FUgtv8RIFuE1ohocfkoPF7lJ8ZBBh2f6yehydj6tE6bGNZEcS2%2B6GOdfbreSzwAwMtpXz8KO9gUYIrSWf3fpbjHgfOC7BP9l8p7DzCZUEUh%2B1ON47t4j5n8mWmSohhGrzIHgguMMxfQd%2F5zZszwLCLvGIT%2F%2BSLBYAo02WSrHCvjI9K6zdAcyIwxzL66&X-Amz-Signature=bd649d9545bdbefff33de2e6fb29306e85a0e41cd14ac83aef758bad57fbf118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAM7UYQN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICuRjJwb0JbZ%2BNtl%2FgqE69syT%2BVmQ2124yCUI3mA%2BA0nAiEAkyqFMzwgsbDMB1aGrVTbYABQ9ZvJf6gjZkAExKMpiMMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2PqFxFGtZOEB%2BcpyrcA%2BN374ScY2LH2oobiJ6sbh4sNXk0LPSwv8zHHT9RL0evzvzPbjBY9%2FaSBE9nn7yPwYd48cPAcvb2y5BcfFwMIag%2FQT0rBgap488T5LtGKYwcJ8Iy%2BjSK977ov0BNYo0zJHAlIR4y2l5KcRp7ZtJNQx5DUJ7qVInI%2BdBzqzCfGW7ZlpgFiSiyyJFY4FHDoLYlpr5ft%2FnmoGRrC%2B4nEMkAE4x39uXYnXjOUqZWiEZ2IeC3VqKaHqf90Zy7mygori9pTxWgeS%2B6oiFHXzdiGkO8BwCJv6VGr0fMtI%2FXmd3hkv%2FSwvEm4V9myG2WKN2Uklr12k4GDGxjYkZbIAtwBjizHjiDffTJ6dQsqErExdpCJUQZYKSwSqGyb3xO4nz6RXpysNdwqfrFuTgxercTZY1RXU9ly5GDKCO8nsIdLTfkHQ9ctYs1gge6xlhRGcEAo33yCzKIgQnHwcMRjiGRmDTyu8Yuhh55ak%2B0uKNY7ZiYAarc5ojp4DSOWxTiZiprNBjaKijePfbyNvYlVL9%2Bv5bNnEl9NhNKg50t%2BRMi8XKne37stmfDHoKVP%2BJUJkVl%2F4t%2BNQmB1ZYGd24FLYO%2BjSm8Zhw7jm0xntxQAEsbg7y275mx23zCBac1di4DIkS1MJrX%2FMIGOqUBRSo1Azb0kEh7djdzpWMQPM6pfZ2z3Upt9ecVjSK3WZ%2FHMdMR9%2BqcAHu5OYlHqU%2FvtktitfoUieL0WZD0GKlFDsOnas3eEzUkW9VpEBZYbIR%2Ffnun0VVvnRwYKBJFBjbm4sc19P%2BF5KF%2FasZFLKA1oUFwQYIkscdq7W2GT%2BHaV1%2F6LsaFs%2BfAqJdqOXPuRtKhHu4cGNs7Wtp0mFSXeTxqLgaLkR1f&X-Amz-Signature=d68717e27820784c5708ce217f677df6dc95778d27fdeb9fd1d6e5440451ffa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUA46NY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtxzMRdV84263z7nbXcmTcMFEnqejrWJmQGzSzFeZAAIgAX1pTxqCzMDQNWYQxlGrM6ShCpYjWNm570qRKAzgGDwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGz1%2FNts6hzC%2BlyRDCrcAzCHTDVzqLLsaoDs9oeaPmn1%2B4Fe6HDigbxGBwZMfPQ8whI4ymG8lxpYt5US3yiyiyGcOaGDX%2F91HZHd5EiRYgtaBIPLsgu16j3PecngeLM4XtmGHg9%2BOtq4zTopDLXBi7muxuWSxZ3aIfy%2F0k4L1pKlvp7pwPt9rfOAI0BhVj9t6228WOQYWsfooV2TyTnONmau%2FqhRQm5qb3QcS6tKPPVDqqHEE6exolMMBS4EdrDxdhUiz%2BB%2FdP%2BSm%2Fo0136x7740QCtLP4x8BDjQMWuqs4Sb8erPZSQyuK7KdjFxmcljKddJHawVT4F6opQpdvYerV4s9LppMvg4ZThSPMtH09xbVyC5t4wvgVya0GPGAk8SVwPLgHRJc4FMoG3v5ceEhFiTjjITawY2q22vJFjforKxtgDfPnAdnHkc4qxyVHiipbEuy%2BfAhlbD2FrS%2F%2FLihfDxR8gHN28Ypqzc1QWbo77FKAYxSOqcOxISRFDgXthmZGbF9bSDyG1A9ZkM2ErwOt6j%2FpC9%2FU8YXOJfv%2F6i84lSdRLEzqOyC8NA9k7uZH8FpQFTEstXp93n02gBLj00hxxcF4OfAa0%2BxGI9qLWo8PtocIfwny%2Bkw1b%2BzDKDncwt9nwD4mpNkgXQ11qhMJDX%2FMIGOqUBwplDKJGuf0VPFzMEt9bu1MqYq4mJ4nnViDP%2B94igpRav%2F3jnVn9H5opRpuqQxH6wkcJx9bVwFaCQ8Jw7nuHjJC9nZ51BAGJIwgBnQcWjlP5WvwqET%2FiCc%2BxJ54Sjrc5qYPsJWRmKoTF5F1SkY%2B%2BuNG1jSP42MtB4GdvUu2ACD7Tl0oiNDgHPPWJMcX0ijpo2SDUTqc3IhQzA5Cn%2BZZ%2BFv8waIH7D&X-Amz-Signature=84991e03b9fd1afda541a39ec4e220ca35bfe8c13900db58d692cc60250785d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
