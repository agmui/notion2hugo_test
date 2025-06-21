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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQR32KH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDywtZtSlw57CXLUkKOCAaA0dd2WD6NBIrntlmWs7g6qQIhAJmCYlQ5z3np8JNHfJAScA8qzTj1Ymmq6jfduxZc2QdVKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhoa%2BKC0dJsuJcNMwq3AOVPXb%2FcC2bPVH91UDwCw%2F6x4K5op7Qb346ECox2IB%2BxIGzn6906fPms%2FWd34EAo3DdQE1lVEgDwBCg2MJ3jaghgDufAoGa5sq3vuTghtfzbjwBdbIluvxA3T72DxkSuKfYxK18V1FzCT2II5qS2MeB0BL9zv0UnKJnU0nP5z0rUUwRy5ZusWYLnzJFAAdnIvFrmUW743rVs94mjXEK7qy1SIGIEeT%2BvvyRxf0fquTQvh4fWnjJio9yXsbRPoW9NTqYGorB6bXVrH1l%2FvFLWd08A8K3w1xKptsiEt%2BHTb%2B2lJeIc9G6Pn4P8ioW1oSuvtHLvBz1g3ViLwlIOjQSYE%2Bp8u%2BdA80K8NviRLy0bkmZY9p4Gx4U349e5Jt9st0mSWA53eugdGePtlKISo7m%2Bq8Yrb8wscFaTeAmKdanILSsxjvGvyn9SDXj2kkBr3D2%2FhcShMwHumny62Xv%2FgYm5hwni9l43ZTAFueMQcMVEyiGgDM2DhX%2BDC%2FsXxjL%2BnN2RGhGCVDqdRxdbeF6DOYSSRamkBGtFXrKoWaSkXV%2Bx8faijGJQGFRvvUnYajpQ046lPeKI0IOhdiG4jHfAuHB4fV%2Bqt5M4EnjKYc7LNrezArAZpKbm8EISNYD4ab71jD2ztnCBjqkAeOngLqbiK67w5H09JFZlpD5G%2BeoFdtvwsQisbFxjwfDy2fZKhR9zh3jlVJ2PZic6x2%2FDLDMU8E4DXlAcQdNMaC0LCkGzj4U9YOlbws8dNRAhFtlXmHu9BMg2foL8dlaySzuFURFegaXezcw1VcVkG8fDvrBAT4Q2XZmyifq%2BpLRduHHFblo9go6xDpaliUWmpBw%2FJcvOOo4GPPhD9InGgkZW0GT&X-Amz-Signature=2248da48d65daefaa38d7aeb49000d03ec0a53cf2a5eaf867bd9d0aa3e8cb794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQR32KH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDywtZtSlw57CXLUkKOCAaA0dd2WD6NBIrntlmWs7g6qQIhAJmCYlQ5z3np8JNHfJAScA8qzTj1Ymmq6jfduxZc2QdVKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhoa%2BKC0dJsuJcNMwq3AOVPXb%2FcC2bPVH91UDwCw%2F6x4K5op7Qb346ECox2IB%2BxIGzn6906fPms%2FWd34EAo3DdQE1lVEgDwBCg2MJ3jaghgDufAoGa5sq3vuTghtfzbjwBdbIluvxA3T72DxkSuKfYxK18V1FzCT2II5qS2MeB0BL9zv0UnKJnU0nP5z0rUUwRy5ZusWYLnzJFAAdnIvFrmUW743rVs94mjXEK7qy1SIGIEeT%2BvvyRxf0fquTQvh4fWnjJio9yXsbRPoW9NTqYGorB6bXVrH1l%2FvFLWd08A8K3w1xKptsiEt%2BHTb%2B2lJeIc9G6Pn4P8ioW1oSuvtHLvBz1g3ViLwlIOjQSYE%2Bp8u%2BdA80K8NviRLy0bkmZY9p4Gx4U349e5Jt9st0mSWA53eugdGePtlKISo7m%2Bq8Yrb8wscFaTeAmKdanILSsxjvGvyn9SDXj2kkBr3D2%2FhcShMwHumny62Xv%2FgYm5hwni9l43ZTAFueMQcMVEyiGgDM2DhX%2BDC%2FsXxjL%2BnN2RGhGCVDqdRxdbeF6DOYSSRamkBGtFXrKoWaSkXV%2Bx8faijGJQGFRvvUnYajpQ046lPeKI0IOhdiG4jHfAuHB4fV%2Bqt5M4EnjKYc7LNrezArAZpKbm8EISNYD4ab71jD2ztnCBjqkAeOngLqbiK67w5H09JFZlpD5G%2BeoFdtvwsQisbFxjwfDy2fZKhR9zh3jlVJ2PZic6x2%2FDLDMU8E4DXlAcQdNMaC0LCkGzj4U9YOlbws8dNRAhFtlXmHu9BMg2foL8dlaySzuFURFegaXezcw1VcVkG8fDvrBAT4Q2XZmyifq%2BpLRduHHFblo9go6xDpaliUWmpBw%2FJcvOOo4GPPhD9InGgkZW0GT&X-Amz-Signature=e02c4b46a040c7baa60148a3d7e5b45613dd512784c4d585b1dac654448021bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQR32KH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDywtZtSlw57CXLUkKOCAaA0dd2WD6NBIrntlmWs7g6qQIhAJmCYlQ5z3np8JNHfJAScA8qzTj1Ymmq6jfduxZc2QdVKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhoa%2BKC0dJsuJcNMwq3AOVPXb%2FcC2bPVH91UDwCw%2F6x4K5op7Qb346ECox2IB%2BxIGzn6906fPms%2FWd34EAo3DdQE1lVEgDwBCg2MJ3jaghgDufAoGa5sq3vuTghtfzbjwBdbIluvxA3T72DxkSuKfYxK18V1FzCT2II5qS2MeB0BL9zv0UnKJnU0nP5z0rUUwRy5ZusWYLnzJFAAdnIvFrmUW743rVs94mjXEK7qy1SIGIEeT%2BvvyRxf0fquTQvh4fWnjJio9yXsbRPoW9NTqYGorB6bXVrH1l%2FvFLWd08A8K3w1xKptsiEt%2BHTb%2B2lJeIc9G6Pn4P8ioW1oSuvtHLvBz1g3ViLwlIOjQSYE%2Bp8u%2BdA80K8NviRLy0bkmZY9p4Gx4U349e5Jt9st0mSWA53eugdGePtlKISo7m%2Bq8Yrb8wscFaTeAmKdanILSsxjvGvyn9SDXj2kkBr3D2%2FhcShMwHumny62Xv%2FgYm5hwni9l43ZTAFueMQcMVEyiGgDM2DhX%2BDC%2FsXxjL%2BnN2RGhGCVDqdRxdbeF6DOYSSRamkBGtFXrKoWaSkXV%2Bx8faijGJQGFRvvUnYajpQ046lPeKI0IOhdiG4jHfAuHB4fV%2Bqt5M4EnjKYc7LNrezArAZpKbm8EISNYD4ab71jD2ztnCBjqkAeOngLqbiK67w5H09JFZlpD5G%2BeoFdtvwsQisbFxjwfDy2fZKhR9zh3jlVJ2PZic6x2%2FDLDMU8E4DXlAcQdNMaC0LCkGzj4U9YOlbws8dNRAhFtlXmHu9BMg2foL8dlaySzuFURFegaXezcw1VcVkG8fDvrBAT4Q2XZmyifq%2BpLRduHHFblo9go6xDpaliUWmpBw%2FJcvOOo4GPPhD9InGgkZW0GT&X-Amz-Signature=fcb88f1a664f021131616c6f83831d81aba7529958757edfde4e407dfdefc1d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S252JSOQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmunE29hGQgHxQXp2G8EaIPoy5k5fsSi5l7C3kn%2F0snAiEAi19pTEdi60itkuZabFGrrE9E9kQ0C%2BKLe447DQp4f%2BwqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6pf1jwy3tPyBfrdSrcAysvuS7pat%2BQwcwHLhtswsWepU6kixjwfeEIV2ZtjerGEBGAlLD1iSH2EWzYf3Z3l65MOalN2E31fo6mMbZkKq0nCOJPAqq6FfrmUToEHN6uithgEYETAos%2FZxYU4Rw2%2FDKfcsddgM4hZBcDzX1NBUJv0T2q0yCbXbrH0Z0mtKMiDbw38Sp%2BTSpFUF7v%2BDgkL8dog0KLQYKeariwHfW5V02d6UCJgsRGE%2F0oEfuSNy%2FUNkUSYH%2BtrgBbCuSuFnmoWxDt%2Ffe%2Byq9TysYl5qVhXAr3EdwFzpZqKgBnZYBIWTxekMcaM0keBmom8mGQKA4uV6nKjdKr4Bi8esYwUgbrA9%2FcIxSow5opI28nEFfhxgehcNvsbXWNu49xkCtT4bxv2%2FJCDCU8sssdJTx1UVKskOFQa5u%2BXbWtqQ%2B54S0f0ojPf6Smjc3e7DtYB0YA8lGVdYPotPKB%2Bxfzz8O3IU86XXaiSAJk64xZo2wjXiXWGQEjUDFkC7JkDfgB%2F3ilTlY5GGR03HFa9%2F%2Fs9B9ngBtjPOE7r%2B%2Bapv52kSjXXOagOZvmHZqMafbBI%2Bme%2F%2B7bu9bbexaI2VtvAzHP4aFjqQsBfhC65JASroveW4FGWCsYGbLyflCvNCTl%2FAooYYC%2BMPaQ2cIGOqUBbHlOfQKEHXsrwMdlua9nar9OTeZOV3LNy%2F166qU2oi56nXNDq4FIf3zDPxQgPEMrLLbLbTdqeWZPzDqYtFmO1o0bkwTNck%2FcQBFzW1wFB8dbJwDYxL9%2B%2BEfDdBfj9GhuMXD8Rww1Vmv0bEz54rWPdTSnPQlH1uH87aLZlTvsY36UddYGtTpGEsbsOqGFXcVj3QduLkME4yFFdGX0LSVjHJy%2FiVcQ&X-Amz-Signature=22637287ca4983a001765e4ca970fe14744a5cbc540752153d435be41b7bafed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VECVTF44%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDssh9y%2Bki1m8AIYM7SdC53l99v8jhz4y35i34n0PYh8wIhAM8HZsJXkpcZlxq%2BZXQVptZeSjQSAhxh4LQE%2FXlhGuB8KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyamOPla%2Fpt3g9FOQoq3APww4PKn3DDbcXNALT79a9DIT8r%2BcrCVoSG4kO7UNOrXeYjGyPrprV446kdidxATGNEqj7gg7%2B19g7QV5LbjwOdrXnvmHgQNShsrjytPbYBzEUZGmtwuQyoNVDYh3jveEWM4CqVFR1ae0Xi8J70fUSDAfCJAlaD%2BhumSKylx77e9VFu1gNK1ThIQmCAn1%2FVUXwMTKCayDOLKgNpqrKHk0g5OZyYsUCqYDRjWQw1gnfcezB2Hy0m19MP%2Bhq55vKZc6r8KTrEmo4skZFfVxuy5EBbqzv8U3JbOr0aKnj%2F8MN9ltB401kxNMcoy%2FB1f%2F1yZxHsQysYF4RnWFayWzrUiyPAkHaGP%2FQ%2BBoviKGjsWp8mFjyoA5L6M2ZT0bOi9wGog5k9VgcjvJ%2FHuXSoMnNYI1RJ0vCrqGGTlPb2xb00UiIZajMnxgyr%2FItKzth2fsPQreZJx5NoDa%2BGO0hfJKNH8NBRxDpb3OXbfUUZ9nf275U5SKpkHYuB3tznPVKKkIhUrNd88d6Js1mrJ%2FMzTmueDaWU3%2FgW5DS6m09c4GUSvw2%2F5CeKdbu4x40qcjDWHSqQFfUGi41evNdxnS94tpLBtZVk0whHGS6lVHEk09cXw%2BqZZK983WjobkL9SnXlzzCB1NnCBjqkAZXvTnucqI19ZSjLiokb4F8tkgx8K%2BS8pLAqsGGCFwJ%2BMtrIuZk6IobebVl0Lug2Ea1SD44MWR2d099djL%2FadYjVmIT82UK9IpYoBQfgtEUmY2oqPgw%2BFA7OH0MjMD7gBV3F%2BW9gWOsCMluSjRrbmkWqEWDCfi3QfFsh1pWu%2BD1M70nhUrFK4ML2hnaaR%2F1a3Q9u2%2F7pL1PPCQlvHiiXdBu2ZTTx&X-Amz-Signature=b442e7d0f57564830349706a811c45c18d7161b8d96b0d080dc1604f3b529469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQR32KH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDywtZtSlw57CXLUkKOCAaA0dd2WD6NBIrntlmWs7g6qQIhAJmCYlQ5z3np8JNHfJAScA8qzTj1Ymmq6jfduxZc2QdVKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzhoa%2BKC0dJsuJcNMwq3AOVPXb%2FcC2bPVH91UDwCw%2F6x4K5op7Qb346ECox2IB%2BxIGzn6906fPms%2FWd34EAo3DdQE1lVEgDwBCg2MJ3jaghgDufAoGa5sq3vuTghtfzbjwBdbIluvxA3T72DxkSuKfYxK18V1FzCT2II5qS2MeB0BL9zv0UnKJnU0nP5z0rUUwRy5ZusWYLnzJFAAdnIvFrmUW743rVs94mjXEK7qy1SIGIEeT%2BvvyRxf0fquTQvh4fWnjJio9yXsbRPoW9NTqYGorB6bXVrH1l%2FvFLWd08A8K3w1xKptsiEt%2BHTb%2B2lJeIc9G6Pn4P8ioW1oSuvtHLvBz1g3ViLwlIOjQSYE%2Bp8u%2BdA80K8NviRLy0bkmZY9p4Gx4U349e5Jt9st0mSWA53eugdGePtlKISo7m%2Bq8Yrb8wscFaTeAmKdanILSsxjvGvyn9SDXj2kkBr3D2%2FhcShMwHumny62Xv%2FgYm5hwni9l43ZTAFueMQcMVEyiGgDM2DhX%2BDC%2FsXxjL%2BnN2RGhGCVDqdRxdbeF6DOYSSRamkBGtFXrKoWaSkXV%2Bx8faijGJQGFRvvUnYajpQ046lPeKI0IOhdiG4jHfAuHB4fV%2Bqt5M4EnjKYc7LNrezArAZpKbm8EISNYD4ab71jD2ztnCBjqkAeOngLqbiK67w5H09JFZlpD5G%2BeoFdtvwsQisbFxjwfDy2fZKhR9zh3jlVJ2PZic6x2%2FDLDMU8E4DXlAcQdNMaC0LCkGzj4U9YOlbws8dNRAhFtlXmHu9BMg2foL8dlaySzuFURFegaXezcw1VcVkG8fDvrBAT4Q2XZmyifq%2BpLRduHHFblo9go6xDpaliUWmpBw%2FJcvOOo4GPPhD9InGgkZW0GT&X-Amz-Signature=cb272091090c76826b467225cf99576f2aa10b85850b6e889e55b4ca7094001b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
