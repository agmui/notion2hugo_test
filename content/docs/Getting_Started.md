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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MEYXA7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDsIbuRevpMekeXaIo76IVnME%2FtRblAcYwFwf%2Fe8nQLawIgEeZ29W%2Bfhxj5fMdHhMJ1fJgAE6jRBe%2Fd1Tvbzf52Ti0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNL8xwVYl3oK%2F8JOCircA9FScNeWVt0zcIgfDc9fLxP3uwwNQpg%2FvgKiZAUi%2FbbW6Fz1sXoqJvz%2FCjWZmwiSn%2Fztcp9I1HNSf4KngTY8ADvhJNgLAlbwQe2djA2rPRab5Ok30hany%2B3x7u6s1%2BD0zyp2j%2F6oleQEwdKq2KmBHiBn%2B7aPfpnLAZCcCwR3sdeM8K0YewcohYpQtK3YCDgVAa6FVKeLNsS6iTqvIUaXhh42bhCq519p9O%2B40VxW%2BbXurVFRPgOsbBMcqIG47AUwySUTSu%2Bc7AxPBgJukOLKvH5h5xzrinYKU2lleESfHUfzz1sjYD1uAkM8dAqKPG%2FEUCfU%2FTyYSmcTfar97Y3tryeNqlIGfrL9XYhWHLRn%2B9PZyVQk56EhzjrbHBNdO2Vx2NHeUf5oN3dQyc4LkPNKfBULlDrprpS9Rzl6azj9Pj2mPCRQDX2PVpSSwVsQy7r1WZ8CCHjmZnzlRMZ%2BPrl4XbH%2FlSzDH%2B9EIgvBvsvZk8BRkqQ1KJEaC4Pv%2BqK4FSr84%2BoIizQenIAnm9wUuuY09pCrGsAWEJrdzFE4H8HijkT4sfq8RiUu%2B08ttl4%2F65QE9QtOSfiR3MENk%2BxyjkCztfYiOJuWiHYmdSV7Ba5JOmwCnQv1CR5hXIdZ1vcvMIuc9cIGOqUB%2B2oRbof1fjayB9MPuOuzsP2X%2BttIadMF%2FaKuwYMgnQpHNBuNTN0eBpghCZTekpIXog8O1YMTbHbv5vxW0DLJ4etUk%2B0%2BFiZ0RSpjBYmzObKD3nDIqTIPzvbOFAXJo11%2BJhIXYiHQogMP46MKhyUMUJrycAYdzmI3P3kW9c4eK%2FcL5ouAuLnC0s2JfgH%2Fq7Y%2FTnynXaPvCgShdFol%2B2zmPiXJtne7&X-Amz-Signature=b6329956e3b0c4187b188ec3247b412ba1273c43f410c38a7d558522625df352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MEYXA7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDsIbuRevpMekeXaIo76IVnME%2FtRblAcYwFwf%2Fe8nQLawIgEeZ29W%2Bfhxj5fMdHhMJ1fJgAE6jRBe%2Fd1Tvbzf52Ti0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNL8xwVYl3oK%2F8JOCircA9FScNeWVt0zcIgfDc9fLxP3uwwNQpg%2FvgKiZAUi%2FbbW6Fz1sXoqJvz%2FCjWZmwiSn%2Fztcp9I1HNSf4KngTY8ADvhJNgLAlbwQe2djA2rPRab5Ok30hany%2B3x7u6s1%2BD0zyp2j%2F6oleQEwdKq2KmBHiBn%2B7aPfpnLAZCcCwR3sdeM8K0YewcohYpQtK3YCDgVAa6FVKeLNsS6iTqvIUaXhh42bhCq519p9O%2B40VxW%2BbXurVFRPgOsbBMcqIG47AUwySUTSu%2Bc7AxPBgJukOLKvH5h5xzrinYKU2lleESfHUfzz1sjYD1uAkM8dAqKPG%2FEUCfU%2FTyYSmcTfar97Y3tryeNqlIGfrL9XYhWHLRn%2B9PZyVQk56EhzjrbHBNdO2Vx2NHeUf5oN3dQyc4LkPNKfBULlDrprpS9Rzl6azj9Pj2mPCRQDX2PVpSSwVsQy7r1WZ8CCHjmZnzlRMZ%2BPrl4XbH%2FlSzDH%2B9EIgvBvsvZk8BRkqQ1KJEaC4Pv%2BqK4FSr84%2BoIizQenIAnm9wUuuY09pCrGsAWEJrdzFE4H8HijkT4sfq8RiUu%2B08ttl4%2F65QE9QtOSfiR3MENk%2BxyjkCztfYiOJuWiHYmdSV7Ba5JOmwCnQv1CR5hXIdZ1vcvMIuc9cIGOqUB%2B2oRbof1fjayB9MPuOuzsP2X%2BttIadMF%2FaKuwYMgnQpHNBuNTN0eBpghCZTekpIXog8O1YMTbHbv5vxW0DLJ4etUk%2B0%2BFiZ0RSpjBYmzObKD3nDIqTIPzvbOFAXJo11%2BJhIXYiHQogMP46MKhyUMUJrycAYdzmI3P3kW9c4eK%2FcL5ouAuLnC0s2JfgH%2Fq7Y%2FTnynXaPvCgShdFol%2B2zmPiXJtne7&X-Amz-Signature=60c29a9eb9d274cb80392ac9cce09e632b902d6825491488b56368d5437fa1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MEYXA7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDsIbuRevpMekeXaIo76IVnME%2FtRblAcYwFwf%2Fe8nQLawIgEeZ29W%2Bfhxj5fMdHhMJ1fJgAE6jRBe%2Fd1Tvbzf52Ti0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNL8xwVYl3oK%2F8JOCircA9FScNeWVt0zcIgfDc9fLxP3uwwNQpg%2FvgKiZAUi%2FbbW6Fz1sXoqJvz%2FCjWZmwiSn%2Fztcp9I1HNSf4KngTY8ADvhJNgLAlbwQe2djA2rPRab5Ok30hany%2B3x7u6s1%2BD0zyp2j%2F6oleQEwdKq2KmBHiBn%2B7aPfpnLAZCcCwR3sdeM8K0YewcohYpQtK3YCDgVAa6FVKeLNsS6iTqvIUaXhh42bhCq519p9O%2B40VxW%2BbXurVFRPgOsbBMcqIG47AUwySUTSu%2Bc7AxPBgJukOLKvH5h5xzrinYKU2lleESfHUfzz1sjYD1uAkM8dAqKPG%2FEUCfU%2FTyYSmcTfar97Y3tryeNqlIGfrL9XYhWHLRn%2B9PZyVQk56EhzjrbHBNdO2Vx2NHeUf5oN3dQyc4LkPNKfBULlDrprpS9Rzl6azj9Pj2mPCRQDX2PVpSSwVsQy7r1WZ8CCHjmZnzlRMZ%2BPrl4XbH%2FlSzDH%2B9EIgvBvsvZk8BRkqQ1KJEaC4Pv%2BqK4FSr84%2BoIizQenIAnm9wUuuY09pCrGsAWEJrdzFE4H8HijkT4sfq8RiUu%2B08ttl4%2F65QE9QtOSfiR3MENk%2BxyjkCztfYiOJuWiHYmdSV7Ba5JOmwCnQv1CR5hXIdZ1vcvMIuc9cIGOqUB%2B2oRbof1fjayB9MPuOuzsP2X%2BttIadMF%2FaKuwYMgnQpHNBuNTN0eBpghCZTekpIXog8O1YMTbHbv5vxW0DLJ4etUk%2B0%2BFiZ0RSpjBYmzObKD3nDIqTIPzvbOFAXJo11%2BJhIXYiHQogMP46MKhyUMUJrycAYdzmI3P3kW9c4eK%2FcL5ouAuLnC0s2JfgH%2Fq7Y%2FTnynXaPvCgShdFol%2B2zmPiXJtne7&X-Amz-Signature=b2baf8fbf00af9063bf596d4e099525dec6bf38d56e4da45aa06f7ca8a7a320a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UX5ZDHF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCwKq%2F%2FoR%2BowJOdpBS%2B0HYFc3Y0YvpR80nKeLnA0JnCEgIgeXjZ0wEU6te81hA12YciDXnyK0zsNSjV92t5vjYaSPcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKuXmy%2Bud%2FkKbA3ZOyrcA6YEPfqHLXNMsabhvrQ%2B%2FLrTrnXn65BG0tqkUoU4r0drXmGB7igUHQeajWCmixfTfQVqbg21Ifm36uyw5hX%2FIc%2B0R5TzOmt%2BNfna0kDzyvD7sMadmPcSIo40xlot4BX9m3f8i931rA5DNHX6LHkF3urrLElZZ522gZrwA8ooZbckx861KcOAlrHZyXnJGGAFuJ1b34vihLlkUQeFpIYYGIwg%2BV0vNLDFRsRt7UOheZ32WqZckiYnaX62vbV9yHRsdIAJUu9%2F6XqtWHB7r9LfSWjtx%2F4yZKHIW%2FrqwuGX7Gx2uvfl5uciWGsPlGFXoWrKTGMG9UVmcxMUNMH0lG43khvvnpaNkU%2FudEpZUm79p704pKgcfWGbv6%2Fb5F1Bvt0FsE3D%2FEfomg5Sjy2El6lbdJwHG4K6jmud9NIVjrrpQ6a0jET0MK6Gu3ptQAKVsB1jeJOZo0ZaR1fQXU1PyWhxnURNedZ9f1wougo0o8gbpKWmr4hDh7LyvxhiVNnHwKY%2FzpRvdqZdujO71c3ofV93dled1dxkIcm87RMh1ZkoJiVl2xzyBUbvdYF%2F5Nxf6VVIf7WFLEKWH%2BcydvsAn3TYTJwSYCHUYGMP7SSOSpdoJtwXE8IPfFmzrbzJ0ybWMPWd9cIGOqUB7IdEYRphS%2FHfqqn9FB7%2FrMkiiu%2BKmxizKqoExgt%2BfY%2BFxqCBTEQ5RM1LqgjwiSM5z3JYuMuiPNqq9DLOHcw8Gb9ADyeTJsI9mnvVS43QakYEDUSMI1spqlGEXBcryfrMEGocLW1Tc07Myb3ltD4enImYQSFCCrCi74Syjm017dk%2FnwgXPHLBux4fEFgQktlyMEBDPCtkPmtOM8EpdoCW0kZXzq%2Fo&X-Amz-Signature=42409e5263d8f57f489fb7bc9b3207aa2ba90fd1647da62bbbb73ab1f96157ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJE32EV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD9Kob9FKULwolBEbU1hUBxixQXhGLEaxwRBITG450KBgIhANktH1SSUfwRmKjtJIEzd2ncRUdXy1jDLSvHJcE8mr5CKv8DCF8QABoMNjM3NDIzMTgzODA1Igy0lRedgD77aanIZ7Yq3APFeY4PLEDFH4uErmxAw%2FX%2BNUk%2BtI0eQjUgFX5Ui3Nw3GUIJom96Z7yrr9oc90TbCLtE2JHafSioO6S8yTtgzsHR31uBIsNzSVRIyiK%2FQV8nU1g2FxxAavAGfmunnfDtNazcTJlGyzKX%2BRwqJiRcW%2Bbw7QjICC7M%2F2I%2FCqYTVFhSP3OdMDUzqOTRbJ8cC9LlERJi2g1UA3LZ5SwzeezHZJrjj1mZEg7K1RQwdlCV3Q9Eot9WMv2ZQ7rzh07zuiSkhq3EPjiw23fjpDOqD8f6UGd4SryS5vfUOBPzPWZ2REcn3rlNnzvgzXXb%2FoaOIw8jqvUExmqyVrrYUjV4p38IKMKU3%2FdvhXg5KeKIvqL3VuIw2FOr7aOfkkQOngpuKFJTmIM%2Fi0znJgZT6R6%2FKS1Pxkp9y0EX75uDo%2FIWiVnx0ahrnEhvXR1FKDHLV%2Fb%2BKqH2UYgYlOGiBMyHvGlPbqaLfUPAGveb2bNt7oAGkv2xTburYvsBSsRrTTZyNVQ4vr4k%2FZI2SUq73%2BvlO7iTa8y5PhA2OL2kmf%2B0HW1MLGahyEdZnw7bI5JOyTTeaEhpSCdC6xmtgdcx353s848LiQJupDqVoEEKjeh%2FIWsn%2FikVh9Ibg0Vf3dMN%2FsUTx6PFzCanPXCBjqkAW92luI0%2FhaSQz3CBiSYJ2%2FWJNYOSQa3fhURKiDnDWu8S1k9bQuXyA9%2BePt2H%2BHPklqHtRXFtbYhdLOPT5St9qcq7WLvZjSUn6k%2FwwHhKUfHNgbaN3YM9FIB7jTr7ZFiDkyBsmzVX7cuUFevUIA8eIg%2FlpwJJ6jMu5xmFixvGrQ1zYdN7cKDoAOQ7nPuscHzFq9LM2v1gJ12nmJKjwshVkJbgLuw&X-Amz-Signature=dbc05e57b473b764219f31e0517951cdb806f6634eb41032552fabae45d5e4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653MEYXA7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDsIbuRevpMekeXaIo76IVnME%2FtRblAcYwFwf%2Fe8nQLawIgEeZ29W%2Bfhxj5fMdHhMJ1fJgAE6jRBe%2Fd1Tvbzf52Ti0q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNL8xwVYl3oK%2F8JOCircA9FScNeWVt0zcIgfDc9fLxP3uwwNQpg%2FvgKiZAUi%2FbbW6Fz1sXoqJvz%2FCjWZmwiSn%2Fztcp9I1HNSf4KngTY8ADvhJNgLAlbwQe2djA2rPRab5Ok30hany%2B3x7u6s1%2BD0zyp2j%2F6oleQEwdKq2KmBHiBn%2B7aPfpnLAZCcCwR3sdeM8K0YewcohYpQtK3YCDgVAa6FVKeLNsS6iTqvIUaXhh42bhCq519p9O%2B40VxW%2BbXurVFRPgOsbBMcqIG47AUwySUTSu%2Bc7AxPBgJukOLKvH5h5xzrinYKU2lleESfHUfzz1sjYD1uAkM8dAqKPG%2FEUCfU%2FTyYSmcTfar97Y3tryeNqlIGfrL9XYhWHLRn%2B9PZyVQk56EhzjrbHBNdO2Vx2NHeUf5oN3dQyc4LkPNKfBULlDrprpS9Rzl6azj9Pj2mPCRQDX2PVpSSwVsQy7r1WZ8CCHjmZnzlRMZ%2BPrl4XbH%2FlSzDH%2B9EIgvBvsvZk8BRkqQ1KJEaC4Pv%2BqK4FSr84%2BoIizQenIAnm9wUuuY09pCrGsAWEJrdzFE4H8HijkT4sfq8RiUu%2B08ttl4%2F65QE9QtOSfiR3MENk%2BxyjkCztfYiOJuWiHYmdSV7Ba5JOmwCnQv1CR5hXIdZ1vcvMIuc9cIGOqUB%2B2oRbof1fjayB9MPuOuzsP2X%2BttIadMF%2FaKuwYMgnQpHNBuNTN0eBpghCZTekpIXog8O1YMTbHbv5vxW0DLJ4etUk%2B0%2BFiZ0RSpjBYmzObKD3nDIqTIPzvbOFAXJo11%2BJhIXYiHQogMP46MKhyUMUJrycAYdzmI3P3kW9c4eK%2FcL5ouAuLnC0s2JfgH%2Fq7Y%2FTnynXaPvCgShdFol%2B2zmPiXJtne7&X-Amz-Signature=2b79e81fac9dab1cd9d2fea13e0e40c7efdf42682e148a668aa882d816e52439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
