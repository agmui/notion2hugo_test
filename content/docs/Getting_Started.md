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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626R6E57K%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBlwWBNSF0wHkgwFMLBoAkuS0iyTttdVLn2MZuyRPQGdAiBmI%2BcqQQO0Ljg61oAu%2FmRs5GZEDjQXFxIvxoL9bmlw3ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMMUbgq4hq2rTaintLKtwDmR8uO5eFMHinu9%2FscveOiA5Bq33mGx0V5UlTAJCOu4w83zu0klWkGILpl%2F7erbIF6FD0unH%2BFwjMv0KC0fFnEJDNeHxjWv8VinIc%2Fkwsfw41liy2TWIsrkQlPso2wIjq6leGeij6YIUp4wb016LlbJ4m%2ForK6BW96S7WQZt5%2BfPaNaYbq6H4r0Oqn8Gp7eRN1OiRXhTT%2BAPKstofonrw7%2B1n%2BCk3gFX4DCY5rh41rx%2BnxD8pwJImuDhopslimdC4q0JrPn%2BbCebrvdtaMIZMlRwgQpoPsq%2F%2B7%2BLBe3bDkZlH0cqFZ2exfVXWelpusrLZ2s056hYnU0UH0CNsyWZGXKsyYpPQ9pz8Yjo3lZjLFRCnB%2F4AKpLiiJwlvriAo2U1fopJ2wZ%2B6bVUy4ap7eIrIpJinmEocpafOe%2B9ZqkNqwZTA9EP1kyqtBwhtO6ZEkv2o5zAUiqmsJaG4fqFuZJ6okRZo1mJ0amcoNzq3vAjnpXDY8tHL2EoNZFpEwvWjRIo98JmIjClBe%2B1hVyvNhTdKit2vlG3IXBPUAI77pDGVhASskiyOwHdveDEY0tJ8VLBf8Gcixi1W%2BuAtI7pZmP8SxcdLcGC4sxtuPEoZ2xrh0B%2FXAyeYWXm2rKbYJUwk5evwgY6pgFDjYCAPaXSvnguLRGVJygpel5I2t8Dn7fPibOPIro0FJwcR5bPTWdWkbWRP7xl%2BJd1WeT4C6DkBdTrzwjq7no78HTssuW3m9Wn5ukVv5EbDn0fM8vIbZMmmCuMa0TOGtFjITYqNbVXOBY41WsGWcS1hTMd%2BsYIPndhM1wIkH1sIp91Js2ZRrbaVUPbozik9G3obIP2flQdtMkwG4P27IzUgoBXexGe&X-Amz-Signature=c30b5668b910fe930f3546f127157f9c2870f0cff6c6102ce8fcdf89ce485805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626R6E57K%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBlwWBNSF0wHkgwFMLBoAkuS0iyTttdVLn2MZuyRPQGdAiBmI%2BcqQQO0Ljg61oAu%2FmRs5GZEDjQXFxIvxoL9bmlw3ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMMUbgq4hq2rTaintLKtwDmR8uO5eFMHinu9%2FscveOiA5Bq33mGx0V5UlTAJCOu4w83zu0klWkGILpl%2F7erbIF6FD0unH%2BFwjMv0KC0fFnEJDNeHxjWv8VinIc%2Fkwsfw41liy2TWIsrkQlPso2wIjq6leGeij6YIUp4wb016LlbJ4m%2ForK6BW96S7WQZt5%2BfPaNaYbq6H4r0Oqn8Gp7eRN1OiRXhTT%2BAPKstofonrw7%2B1n%2BCk3gFX4DCY5rh41rx%2BnxD8pwJImuDhopslimdC4q0JrPn%2BbCebrvdtaMIZMlRwgQpoPsq%2F%2B7%2BLBe3bDkZlH0cqFZ2exfVXWelpusrLZ2s056hYnU0UH0CNsyWZGXKsyYpPQ9pz8Yjo3lZjLFRCnB%2F4AKpLiiJwlvriAo2U1fopJ2wZ%2B6bVUy4ap7eIrIpJinmEocpafOe%2B9ZqkNqwZTA9EP1kyqtBwhtO6ZEkv2o5zAUiqmsJaG4fqFuZJ6okRZo1mJ0amcoNzq3vAjnpXDY8tHL2EoNZFpEwvWjRIo98JmIjClBe%2B1hVyvNhTdKit2vlG3IXBPUAI77pDGVhASskiyOwHdveDEY0tJ8VLBf8Gcixi1W%2BuAtI7pZmP8SxcdLcGC4sxtuPEoZ2xrh0B%2FXAyeYWXm2rKbYJUwk5evwgY6pgFDjYCAPaXSvnguLRGVJygpel5I2t8Dn7fPibOPIro0FJwcR5bPTWdWkbWRP7xl%2BJd1WeT4C6DkBdTrzwjq7no78HTssuW3m9Wn5ukVv5EbDn0fM8vIbZMmmCuMa0TOGtFjITYqNbVXOBY41WsGWcS1hTMd%2BsYIPndhM1wIkH1sIp91Js2ZRrbaVUPbozik9G3obIP2flQdtMkwG4P27IzUgoBXexGe&X-Amz-Signature=5351c647ea4b3b20f5db6731686a8171c80740a615759e1160bfd3a93ffd7051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626R6E57K%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBlwWBNSF0wHkgwFMLBoAkuS0iyTttdVLn2MZuyRPQGdAiBmI%2BcqQQO0Ljg61oAu%2FmRs5GZEDjQXFxIvxoL9bmlw3ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMMUbgq4hq2rTaintLKtwDmR8uO5eFMHinu9%2FscveOiA5Bq33mGx0V5UlTAJCOu4w83zu0klWkGILpl%2F7erbIF6FD0unH%2BFwjMv0KC0fFnEJDNeHxjWv8VinIc%2Fkwsfw41liy2TWIsrkQlPso2wIjq6leGeij6YIUp4wb016LlbJ4m%2ForK6BW96S7WQZt5%2BfPaNaYbq6H4r0Oqn8Gp7eRN1OiRXhTT%2BAPKstofonrw7%2B1n%2BCk3gFX4DCY5rh41rx%2BnxD8pwJImuDhopslimdC4q0JrPn%2BbCebrvdtaMIZMlRwgQpoPsq%2F%2B7%2BLBe3bDkZlH0cqFZ2exfVXWelpusrLZ2s056hYnU0UH0CNsyWZGXKsyYpPQ9pz8Yjo3lZjLFRCnB%2F4AKpLiiJwlvriAo2U1fopJ2wZ%2B6bVUy4ap7eIrIpJinmEocpafOe%2B9ZqkNqwZTA9EP1kyqtBwhtO6ZEkv2o5zAUiqmsJaG4fqFuZJ6okRZo1mJ0amcoNzq3vAjnpXDY8tHL2EoNZFpEwvWjRIo98JmIjClBe%2B1hVyvNhTdKit2vlG3IXBPUAI77pDGVhASskiyOwHdveDEY0tJ8VLBf8Gcixi1W%2BuAtI7pZmP8SxcdLcGC4sxtuPEoZ2xrh0B%2FXAyeYWXm2rKbYJUwk5evwgY6pgFDjYCAPaXSvnguLRGVJygpel5I2t8Dn7fPibOPIro0FJwcR5bPTWdWkbWRP7xl%2BJd1WeT4C6DkBdTrzwjq7no78HTssuW3m9Wn5ukVv5EbDn0fM8vIbZMmmCuMa0TOGtFjITYqNbVXOBY41WsGWcS1hTMd%2BsYIPndhM1wIkH1sIp91Js2ZRrbaVUPbozik9G3obIP2flQdtMkwG4P27IzUgoBXexGe&X-Amz-Signature=ba85901cdd2043934a8d00647f92ffb7cdbcb37998a979173742c900bb34722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G4HZYIS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIFft%2F%2B1XEMm2BV%2B1a9bs2UgPWbdH989wzL4yV0jfQQiyAiBW3K%2BdRmvCcLNyJ5DSCYhYZ02jQDSeZhsPxdRIy7CZNiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVuJ4%2BDdIOkfigt2wKtwDQtWbWGosqLQZl2BYIhG0DTpL0tP7bAZmefMYyU%2FpmkLXwnbqT0du6KmNO0jNWL9501cE5Y3ku9yFglPdc0DOp4sLcfHuj9ej%2Ffsx7jjD%2B0w%2FoaYV8I1QmKDAmdaFXKSKEd4opE%2B16A5aVziOM6msJu%2BE0ypzcz9CnvWedlod9N3xsjs0mDN03YYTX8VkML8BXm738LwgNNSIEMAmktGsHBrK%2FIYJNNa%2BlsleGe%2BFw%2B8qSOKUDdlHessKGEt4CHyEHJQgugcHTaUPK8jMjovaH6X06jOwDKTFwaDH2ww7x4uwJlMAj2hmk%2FkmIFbWxRLa0pZewd0D0Cai9BbrgL0FOoVYKXfsZfWrhXiDAo4uSgROohJJH99iIB2%2B%2B3WZu0ZcJqAuNTuVwrZYTNxoyOhTeFeHxDYSdDOojh3je%2BjdiKBSgEwAz9lia%2BNo9XvQBQluh%2BZJDd8xYMElvdDbEKxZnytC4k5%2BZLXdkv9RHG7hS0abMHIdHMFbx6j%2Fb14WMKZ0TMwgh7yC34q0KV3mJhu08WZ9RqBc%2Birijp1H4Nb%2BKb4Rgi1r340Vs7QBx6gfz8cWxGJOZVMJJC74O%2BEYSDqs2GSTvPGv%2BzmSixhf5HrTRwQopZN%2FHa3MgM0fr8kwr96uwgY6pgHkM8anOlaiCFq5LizenOHqgysTIzw%2FZXRuh0K4mjCCnFXLwQWAnug05tbiRI4C8c3ojL8GVxymXph2HBWho5Vr3OyyFX%2BPOf59TZ8ttv%2BCRFWFOQI%2B%2BogjUDSz5ELjrJ35xWyAZio6fkiEdxcaRS1%2F%2Bye8vLwCLVQbIh4pd8gsOBPIvI%2BSnbTOKryNRyjDbmEsAE2LZYKy%2BQlMJIizsVk2fyWm2pW3&X-Amz-Signature=1082faa4a6e6b0e816e94752ce30f5ca5cb9f805b6a4e6ded73eb31e6ec5423c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC5S6TU7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCequ79aWqziHBGD9soYxICNP3qt4Ii1wrzWcEabO7vZAIhAOpTnzq%2BTPSkMtO2WYn5S%2F9mymveOtwZQEn7cx5SUwVMKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxy9zAXYqAXNwxbkhsq3AOcI9lHJUj2cx4kbB%2Fpz0Givft9skzOJTMaiED0QShNxsGIuAbkEJDj7Yv9dSfQ1KAEfQTsGdlwc0JAbBwt1agyw9s8n%2FG5nn3zz6JWVKOxyDg3F2Y8Gsf3VPEtqLwoXOBBc1l%2B1YI%2FNLpJmZMaqjWMh76EWccLskcBbrShY3iAPYEoWcGQymI4bIk9lpEKPmfUfoG8AU1cBgbyR%2BQyC3uCbhtt%2BGPMidBnzhTkQNhDEX%2Fw4gvmrbuXDbJyZ0IUOtSkDLLS2Yx0ppP0nXbphCb%2F6wP6tbrzsjYYE8q059wqDueSCqjAifiRyUvGroBAv%2BHumQjRKY9yNUNGi2a3ZJCDyV9vwOsFOlHsIF1QQ9jRqAkOXwfBtbdAmMeUcsw%2FioOX8zRbEVMhQqdjiQiPed9iJUnQGePZcU%2B68UbVVMAdoi3Mx1cqUEip%2FKD54WOh1mDVdykUaVu1E0xnkZoLjA2jTXObF80QOBh6M9bkIXl1%2F0zAiOCiOoJ8OaghkMdN81iml%2BvkxqHqXmo7V6qapLF9It9Wa97xsQvXilkKX4rDrV2%2BBTidtIeJSHuCqj3L3rCFzUHEhY5H7A1WmJ81chJor8r3kSslXVBN%2BrP2pU8boJ0178EXbf2%2Frv%2B1NDDd267CBjqkAeXW2r13R0Xu3pwrjFcRWHwOp3Py%2BB99kUz%2BN6utGDsYs%2FvTHzY4wBsnTqWnXLfVBfy7HJnGpjJHJvLiTrcmr9d%2BFUN3J0TrG1OXgkxDbutq0seABK%2BbYVSNBJp7ZOtR8E6EtKRkyfKxEbucO6%2Bhp4me3QOeZhz%2By41nG41oZbz04HX4pdPjJCGhLrGMDw%2F7a1rrEhDsdzFx56PTicJH%2BnfNBZtX&X-Amz-Signature=40ee9a9e89b4339b0b68e4adca94e05f450123b0c123d7729ae0844f3d0f6941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626R6E57K%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBlwWBNSF0wHkgwFMLBoAkuS0iyTttdVLn2MZuyRPQGdAiBmI%2BcqQQO0Ljg61oAu%2FmRs5GZEDjQXFxIvxoL9bmlw3ir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMMUbgq4hq2rTaintLKtwDmR8uO5eFMHinu9%2FscveOiA5Bq33mGx0V5UlTAJCOu4w83zu0klWkGILpl%2F7erbIF6FD0unH%2BFwjMv0KC0fFnEJDNeHxjWv8VinIc%2Fkwsfw41liy2TWIsrkQlPso2wIjq6leGeij6YIUp4wb016LlbJ4m%2ForK6BW96S7WQZt5%2BfPaNaYbq6H4r0Oqn8Gp7eRN1OiRXhTT%2BAPKstofonrw7%2B1n%2BCk3gFX4DCY5rh41rx%2BnxD8pwJImuDhopslimdC4q0JrPn%2BbCebrvdtaMIZMlRwgQpoPsq%2F%2B7%2BLBe3bDkZlH0cqFZ2exfVXWelpusrLZ2s056hYnU0UH0CNsyWZGXKsyYpPQ9pz8Yjo3lZjLFRCnB%2F4AKpLiiJwlvriAo2U1fopJ2wZ%2B6bVUy4ap7eIrIpJinmEocpafOe%2B9ZqkNqwZTA9EP1kyqtBwhtO6ZEkv2o5zAUiqmsJaG4fqFuZJ6okRZo1mJ0amcoNzq3vAjnpXDY8tHL2EoNZFpEwvWjRIo98JmIjClBe%2B1hVyvNhTdKit2vlG3IXBPUAI77pDGVhASskiyOwHdveDEY0tJ8VLBf8Gcixi1W%2BuAtI7pZmP8SxcdLcGC4sxtuPEoZ2xrh0B%2FXAyeYWXm2rKbYJUwk5evwgY6pgFDjYCAPaXSvnguLRGVJygpel5I2t8Dn7fPibOPIro0FJwcR5bPTWdWkbWRP7xl%2BJd1WeT4C6DkBdTrzwjq7no78HTssuW3m9Wn5ukVv5EbDn0fM8vIbZMmmCuMa0TOGtFjITYqNbVXOBY41WsGWcS1hTMd%2BsYIPndhM1wIkH1sIp91Js2ZRrbaVUPbozik9G3obIP2flQdtMkwG4P27IzUgoBXexGe&X-Amz-Signature=569bdedc6ea5e4bde8aafac982fec3ea6e56ea7845917791d37ea0c776ebdafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
