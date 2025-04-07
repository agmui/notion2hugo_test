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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPR7IUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2FqLJvBrnFe5kxLnzlNx2Mn6lxbplkdO26%2FrzWLm%2B6QIgO5hmslRyvz44P%2BE9IVgR3qdUsy7vifb0%2B6zVmnqZQzwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBufQCNBGjQqbKN10ircAza8kzOUOaNX5NWch9K8UdlfQ5xWHs3y%2F8ckJYbYpaXE5w2k0sCOTzpVhF%2FHG06oy0IZZUcPyGjBBmnUl2Fc0P8L0PAnhGbgBaqrQYyxdQiCapIJ92c0r6gupoN2yz8rmOs3mN%2FgLNbf4FY2AHl39mazicXreej9LrodXpbwN2E%2FkQ14O5k5svgiCRSjEg4uCMRluuYctsS5ekulm%2F74zRUNq%2FapCXcgW7HEC4Hl%2FxzMTHAFRWgmHgvzQCBZtPgF0Nh2ZXm0eTEDSmnrKk8GK8vK6TF0EYPSCe4I%2FbI8LuGYAigBwWJmCLFu5xE2IQoe%2BahnF6oR6xXUuB9iz9vZwYgGIFGY7lI3CVzxnTKt2lKbQ1qbeYG%2BxYSvNLvE3w7tq5ZBXoQGffq%2FB80%2FkaCzd4heJJCN1S3TOoL2%2BWoL%2BDxCOKUCG0%2Bfy1P4Ifim018Gy%2B1Rlri7gl%2B7McUPSQ0APSAjKVwYyuUXJUoZIzkgxgH0T9EzhfpA01iH74xhHNbsEAjD%2Bp%2B5U9ZhgFLDhhjrVRQTdOKazaXz6sJH75IOKzerWlCvAm4lapj3%2BiHd9ghgWzRphCsomscULcyHr1ZhNn4tLs06y3FOZIYw0KJWxIyW118j4SRTcAOS9VJIMI6fzb8GOqUB88cOqv%2Bh%2B4y4aGNbLk1Ya%2FNOK7G8mcczUCLkrpRvJ0hK1seSToVTQ%2FIeqSBiSc8vE7HKhJgGNyy2ZW9%2FXinRdOWcm%2BFOq3XZGedrkVKLS%2BcwdwSxapL2dXL%2FhK%2BxoPfyhdvnixonfenGe3HC3kqX8JDT4TtBZDqHODP2xqSynXXGQMQXzqHztFMqE92jcXe3Ntxx7vLjHdumtm3%2BXZ4c7qKbWGhy&X-Amz-Signature=05d1a038f026ff97557a83895d0b60926a2276442f9dcb8553a10ccc510a5708&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPR7IUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2FqLJvBrnFe5kxLnzlNx2Mn6lxbplkdO26%2FrzWLm%2B6QIgO5hmslRyvz44P%2BE9IVgR3qdUsy7vifb0%2B6zVmnqZQzwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBufQCNBGjQqbKN10ircAza8kzOUOaNX5NWch9K8UdlfQ5xWHs3y%2F8ckJYbYpaXE5w2k0sCOTzpVhF%2FHG06oy0IZZUcPyGjBBmnUl2Fc0P8L0PAnhGbgBaqrQYyxdQiCapIJ92c0r6gupoN2yz8rmOs3mN%2FgLNbf4FY2AHl39mazicXreej9LrodXpbwN2E%2FkQ14O5k5svgiCRSjEg4uCMRluuYctsS5ekulm%2F74zRUNq%2FapCXcgW7HEC4Hl%2FxzMTHAFRWgmHgvzQCBZtPgF0Nh2ZXm0eTEDSmnrKk8GK8vK6TF0EYPSCe4I%2FbI8LuGYAigBwWJmCLFu5xE2IQoe%2BahnF6oR6xXUuB9iz9vZwYgGIFGY7lI3CVzxnTKt2lKbQ1qbeYG%2BxYSvNLvE3w7tq5ZBXoQGffq%2FB80%2FkaCzd4heJJCN1S3TOoL2%2BWoL%2BDxCOKUCG0%2Bfy1P4Ifim018Gy%2B1Rlri7gl%2B7McUPSQ0APSAjKVwYyuUXJUoZIzkgxgH0T9EzhfpA01iH74xhHNbsEAjD%2Bp%2B5U9ZhgFLDhhjrVRQTdOKazaXz6sJH75IOKzerWlCvAm4lapj3%2BiHd9ghgWzRphCsomscULcyHr1ZhNn4tLs06y3FOZIYw0KJWxIyW118j4SRTcAOS9VJIMI6fzb8GOqUB88cOqv%2Bh%2B4y4aGNbLk1Ya%2FNOK7G8mcczUCLkrpRvJ0hK1seSToVTQ%2FIeqSBiSc8vE7HKhJgGNyy2ZW9%2FXinRdOWcm%2BFOq3XZGedrkVKLS%2BcwdwSxapL2dXL%2FhK%2BxoPfyhdvnixonfenGe3HC3kqX8JDT4TtBZDqHODP2xqSynXXGQMQXzqHztFMqE92jcXe3Ntxx7vLjHdumtm3%2BXZ4c7qKbWGhy&X-Amz-Signature=9d976de11f6e6c126d26c0429c4bdc3c087f2b7ec99186f2e2fa3c1f81d8be33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5O264T%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUHVMW%2FUkf%2BpiZMVI%2BBUVzBUKkIrYZWOMviQ8QDFoSwIgD%2FEFEY%2BYLterwMHM0Zgf2IJc9lN5wXlhKB2FyvoppYYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDND96u5rnFTmG0NC2CrcA%2Fq93styBkR7pxBBiiO84fMBqIv62yL1y9OeH7I6vyeYnnn1Sytb3FZ977xK2Uv6T9SLmHYhyx%2FArWndMySLiteqQpbmL4017GvTz3pmtt0kOkwdxe2cJ5vSTUgIvmyA7AyU3EbbcjXvaEQAXGOBsEmwYbt%2FtoflI07RDe7EJTsGM3wD0wKMvsT2IeDC8c2LpN%2Bb7EjnazyNcFihS4uT%2FCj7OgaYwDor3amMFaBl1Qu30r2zqArJiWXhuo2nu3ClzO19RBPaRHB4rwgz4SFdyHLEFY%2FqF091LEPk73YuY22rn6%2B0TVxTBZzOgiB4L5KY2%2Fup80A8ijUnRZfZFlGk%2F3TaNXilGp7QOdxofNSmYrdp1%2Fl5rAnmBAVjly2WMNQvG1DJ%2B0jQS7KGw6V4rx5diX0neuVnAOP98qc4IC5dkakNYthfdu08qLBd9OJjbRuctFSiGVeHms0TtgrW1%2BDR4%2FqNArg9Dl2C53G3QvQEBdppjvTw77Rd6ceo1rYLdce0%2FKdFxqUUPhjq%2BRt09M0sGcfvgoaRzDTkC5UiRNZIShxBzp4TB65MRH%2FUoW8x8ZOuRS9j1VWVfHxdZrlBgBJnUqBsi1T3sHOrs%2BjRZcRVxUFBldk6yTKDAkgXDVksMNWezb8GOqUB77oiEfYnyqnJIUznJHGtK3cyXEnq2P238pfZbX%2BddM8Y6n8CRs8KGHMWMlC4ucZ6NBOBUNTEBX6ludN%2FcyZ16o%2F55Ah20RXSUN96E4tPO1A4C1FoIZJxxGM8VAG3p%2Bnhxh1L3eY2giwDkKKoCD2h0OIrLokODNY696SQ%2B1p8RjjNdox2HU0uYvNOB95SC82pDn5WTsCzukpx4ZiRoEGHth3mpANj&X-Amz-Signature=7c737029084029c3ca70eae214b135d07f4a28ae1d31b14d5e4774e9747925bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7Y4SP3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwn%2Bx0nhBI26iCVB8AXcEwUOtL3jQ%2FmvgD11jAEgCI4QIhAPfJB8Oktauy3KOHe9fPuK1%2FB32PeF7fjIwQRWf2s2fNKv8DCFUQABoMNjM3NDIzMTgzODA1IgynmY6imTF0ES3kicMq3AP%2B7MftFtRS3uA6GyEJ7eyoOAv6TldwGyWd%2BvyJxh8pXStBHqIRCCQo6ohwfznm5c8d%2Fy1Fbxd7%2Bf%2BAogafjM6LuG4G1x6UhVpU4EsCCaDTeFp9t9q8IPkogn0b9vJEwoiIZxt5zcMGoRyz%2FR7jXQrN6sCEy6dM%2BtobGN3vGiSL3DQBZ1pb6CtYp3cBgYOzoLQo2akp0dhLAaE0jXfdh68GCD%2BY7ZGrfGYS%2FOqyNbTaVJwe%2FZZx5qVnHKgYDZaSOhRhy5%2B0R8ecB9ULaqW7dIY7uZ6mU%2FCqoYU67K5DSHHxQTQ3dCHE4U3weuhfG%2FzCkAK4QhlJRUN2bCB35F%2BfwfeMiVU05H9h%2BEEyEVOJRe5deEy6pVAjaG9UlEgRPaz7mUyulXtfcEVo2ZpPDRfunmVTdlNm5TmVHyPkrVFbjRhjob94KhbmecpTjBsptk9DRI7jU0L%2BuXAVcqfjWQgYRPjxZROwXrkV0utszKcn6amW6WH%2FAj7%2FefsRiBxZYoV4Knndupta2ZG6YgGJckme6%2BVM4RTXaU2M%2F4SRjuvSOq0dcjvpGyrDzVHDfZG5AzZl1WDEONBuaNR4IvFSTQh53W9xmEoJjsl57LJic5viT0dajm9QkhGv19v950YJzTCRn82%2FBjqkAdGwPhyzapphBmItlpoV6DHUiSILrf%2Fz1eOaqopJI5bh6EmijKvULO9gznAYmKpCD42T7QPArYsmobCl%2BF3iUrVRDf%2B9hXrWs7BSpL6aMEnC9y%2BPN3NgAW81nAa7DoXO9xAN11EXOPclFsEzuGCotGDEHC7%2BlKZx9PRtqGXegq7m7LSFsIFKr0SHhqnqgGl8kGyRKHVtzxXXKS%2Bw2Pq3WZ0fJigP&X-Amz-Signature=8723e96e00e66acb667778627777bf1838b41ce11f1c0fd87fc099171b35de48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HPR7IUH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5%2FqLJvBrnFe5kxLnzlNx2Mn6lxbplkdO26%2FrzWLm%2B6QIgO5hmslRyvz44P%2BE9IVgR3qdUsy7vifb0%2B6zVmnqZQzwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBufQCNBGjQqbKN10ircAza8kzOUOaNX5NWch9K8UdlfQ5xWHs3y%2F8ckJYbYpaXE5w2k0sCOTzpVhF%2FHG06oy0IZZUcPyGjBBmnUl2Fc0P8L0PAnhGbgBaqrQYyxdQiCapIJ92c0r6gupoN2yz8rmOs3mN%2FgLNbf4FY2AHl39mazicXreej9LrodXpbwN2E%2FkQ14O5k5svgiCRSjEg4uCMRluuYctsS5ekulm%2F74zRUNq%2FapCXcgW7HEC4Hl%2FxzMTHAFRWgmHgvzQCBZtPgF0Nh2ZXm0eTEDSmnrKk8GK8vK6TF0EYPSCe4I%2FbI8LuGYAigBwWJmCLFu5xE2IQoe%2BahnF6oR6xXUuB9iz9vZwYgGIFGY7lI3CVzxnTKt2lKbQ1qbeYG%2BxYSvNLvE3w7tq5ZBXoQGffq%2FB80%2FkaCzd4heJJCN1S3TOoL2%2BWoL%2BDxCOKUCG0%2Bfy1P4Ifim018Gy%2B1Rlri7gl%2B7McUPSQ0APSAjKVwYyuUXJUoZIzkgxgH0T9EzhfpA01iH74xhHNbsEAjD%2Bp%2B5U9ZhgFLDhhjrVRQTdOKazaXz6sJH75IOKzerWlCvAm4lapj3%2BiHd9ghgWzRphCsomscULcyHr1ZhNn4tLs06y3FOZIYw0KJWxIyW118j4SRTcAOS9VJIMI6fzb8GOqUB88cOqv%2Bh%2B4y4aGNbLk1Ya%2FNOK7G8mcczUCLkrpRvJ0hK1seSToVTQ%2FIeqSBiSc8vE7HKhJgGNyy2ZW9%2FXinRdOWcm%2BFOq3XZGedrkVKLS%2BcwdwSxapL2dXL%2FhK%2BxoPfyhdvnixonfenGe3HC3kqX8JDT4TtBZDqHODP2xqSynXXGQMQXzqHztFMqE92jcXe3Ntxx7vLjHdumtm3%2BXZ4c7qKbWGhy&X-Amz-Signature=0f0f9242d43b6c4099fcd6c24803d45cf3dd613349a67f8e479d6277a21316e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
