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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDULOOE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCm8OH2B8rA2v%2BTB47lEDSSfTBVgUMGoPjkmA5PerJu%2BwIgbcAVVIimZlT928PjRbIpAWM4msHEuT3vRKRqUEzV6DwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc1DVVPnOzkZ6j88ircA8gAMysZ7jrdg71HPauSv6Sx2ZSFr4sfnWwLC%2FusJ3ze%2BzJ%2FBED6IzO0vs0YLKVu35YUlKq9Sknj2c%2BUvQ%2BJUHEpbx19ghZVpEzeHnHSwChcJHtkgD9%2FS661YINd479NiRHBB%2B99h%2FB8pvgE7bhHu2gM0CLEkMI1zgsXYm8EEFq9lGEDP9QwNufzhEfEJIAzOTWIg%2F1r3OGFzq%2FkJaPnmroa6g8pKtAU54%2BkqiJjvMD9oXXzWJtMsnrIdpVkj3Gfp00eCIM%2BKFSD%2B5CfE9bCz3geZwYE1vH8KIJH3YCHEnzRLnO1KhzoXIqZ9AvUZzCH3rOOfYox2sKZn%2F5LAYM9X0zttG%2Fn2aC0AR44PehJ5akuuYFU9PZPMaKoieyDrJjzz5UJskIeJI%2FpJDxkzNyIRot9eWOZvlXJHX9FafNjM6%2BfJoNE%2BZGZbN4k0o9CZUD%2Fatf21v9XnJ2RSL0EbkouyZVKzLXVYEXmX9LWWtxgCfaMBA8nUYOD10aYV0XzFNwcvCLYt%2BCl1Y3BBnHge1jeZBfxRGzCvrk4DcgTqvghTduLgD42aCBNRLjCE%2F7eoMyv58oZiAVAva%2F0BHESLevPRE2MXl2VVJWxftigA2qL2%2FEfRoW9%2Bo3Y4UIegOdfMJiQnL0GOqUB9IrGuh%2F51mwCiMGvgtMaBsbV10qfeDy0yRBhhp1UiqF%2FzALl2Yv%2FwKhyB2CpELH%2FdjWghdVLr0kHkqQruotO9mrKVmGOgXDy7kq6h37OG8Y2v9y5oBFqvMDIWjL3jVcxxp2TfrFf8QSUlR%2FsHhKVUGQUZMhR5quQRxZpy9Us6iw9zeTWXgN2QRLkyzgHmnmkBWSFPSL%2Fgd53DXNfjjGv4VPzH2zF&X-Amz-Signature=a6973eed61e7d8d999d39e8da01b358c445af33150ae3b508c5280804f0ebcb3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDULOOE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCm8OH2B8rA2v%2BTB47lEDSSfTBVgUMGoPjkmA5PerJu%2BwIgbcAVVIimZlT928PjRbIpAWM4msHEuT3vRKRqUEzV6DwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc1DVVPnOzkZ6j88ircA8gAMysZ7jrdg71HPauSv6Sx2ZSFr4sfnWwLC%2FusJ3ze%2BzJ%2FBED6IzO0vs0YLKVu35YUlKq9Sknj2c%2BUvQ%2BJUHEpbx19ghZVpEzeHnHSwChcJHtkgD9%2FS661YINd479NiRHBB%2B99h%2FB8pvgE7bhHu2gM0CLEkMI1zgsXYm8EEFq9lGEDP9QwNufzhEfEJIAzOTWIg%2F1r3OGFzq%2FkJaPnmroa6g8pKtAU54%2BkqiJjvMD9oXXzWJtMsnrIdpVkj3Gfp00eCIM%2BKFSD%2B5CfE9bCz3geZwYE1vH8KIJH3YCHEnzRLnO1KhzoXIqZ9AvUZzCH3rOOfYox2sKZn%2F5LAYM9X0zttG%2Fn2aC0AR44PehJ5akuuYFU9PZPMaKoieyDrJjzz5UJskIeJI%2FpJDxkzNyIRot9eWOZvlXJHX9FafNjM6%2BfJoNE%2BZGZbN4k0o9CZUD%2Fatf21v9XnJ2RSL0EbkouyZVKzLXVYEXmX9LWWtxgCfaMBA8nUYOD10aYV0XzFNwcvCLYt%2BCl1Y3BBnHge1jeZBfxRGzCvrk4DcgTqvghTduLgD42aCBNRLjCE%2F7eoMyv58oZiAVAva%2F0BHESLevPRE2MXl2VVJWxftigA2qL2%2FEfRoW9%2Bo3Y4UIegOdfMJiQnL0GOqUB9IrGuh%2F51mwCiMGvgtMaBsbV10qfeDy0yRBhhp1UiqF%2FzALl2Yv%2FwKhyB2CpELH%2FdjWghdVLr0kHkqQruotO9mrKVmGOgXDy7kq6h37OG8Y2v9y5oBFqvMDIWjL3jVcxxp2TfrFf8QSUlR%2FsHhKVUGQUZMhR5quQRxZpy9Us6iw9zeTWXgN2QRLkyzgHmnmkBWSFPSL%2Fgd53DXNfjjGv4VPzH2zF&X-Amz-Signature=d57a5e9029547f47dbb048b32980a27f82268c6753d18d0119b25916d0ddae6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W26V25VH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFKmWEQEt8zKSf3DdMNS0qbmNxDVon8B8%2Fa1TKMNB%2Br1AiBwtxmC6rZzQwtkY%2FG%2F%2FimuULhyV7kThGdkt821a2VRJyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkfDJc3ZDZiVHFLkgKtwD4cqS1epVwQgUUOJ6TN4OUGWdHNGh%2FUWQRs3LozCQ89i9X5MPnmZbPkIGWCzOIvDHN6GXHsQ6HpIiRVdl%2BhEyVfoIG%2FOiDarzonmbRVtJqSwlat%2FNN0%2FKHL4v90Bha%2Flc9aM%2Bl46ZdoGFXSLaUyVg01zkUFFEOPknF2kjaoKHA2WeGIsXqwR4bsADCesYZd0dS21mmEP6EcXvBhruRTpJ6KSK0%2B46kF0FUS167mmIRL9iGH0pHBvnBMrDj3p5%2BjS8gLn4Q9jjSoQt6yGjnmzwzSj339hxLSz0mkb9wvnRznZNc0%2Bp02Dc%2F8SV9KVhQY1x9nR6xXy3bRUozZvkympTu6vMhTu8PZvrBRwoB72hY4laDS%2FwzVsv889gNKhcP1RvwX4Cf2ELWCBz6difEB0qFg2DcurkDs063hb%2BBkKIctn7JDmuxdPxV9m%2BxwynLeaAR8FfUlFykd83LDj%2B2I3oex3mVA0NW%2BUVELizC8EpTitTUOLR10aBsEJc2t82qhzRpu%2FxIDeGuiG0%2BK8okon7VPeDF85cSTZTUp%2FCpe0Yrw0wpBHIN7VFrBF6Z0Le%2FCovxZanEJ2PkCETKBhEL7EyaHvcCkNr1BwPJU8fZfUynKeYORWvqN2ist4uzTowyJCcvQY6pgEY051P9q%2FAvahVsJkuL4HBlfL4BoLhLbkGvZ0y0Yzp4Bus%2Fsv8yWcrrG%2Ft%2FQdlL8%2BybwGGwE9gN3ljBb4j8cgPFlM1F%2BrzkuFWeXjflupcoqTPxklFHDN08KDsgsPZ%2F3TPaE91GSajp4Nn6CPytWRKvWQoaCH%2FoF9wD9ueGNz90Kxd0TYGt%2FgClIbyMj%2BlsIzXMU3tyhpzbfjYuKq71gktgXgxFIvw&X-Amz-Signature=eb849d9371b1f29050a6771c8c792edbe84d2959e56e636cd846c11101006148&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXETPPYR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCiyuGTAg2V%2Fo4qdIOEhUt2wBK09nutY9I7%2FXKTog5NgwIgPt0kosfB2xpGDJ7xeMPRztz7KTw09c2mCJgpSjGxBOgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjGJnqw4fgFiQ4h6yrcA%2Fg6LJMk6w9sUb4H%2FlUY6NdjzLL%2F2ze6JmkIkSf%2FnWOota3FvPPPeyXjFw2NZaAyAN6%2Ft7hVV837AOw5%2B7xiMcKn8KOcZiJz%2Bj8ktVGFUu63Mfx4wCIic6Hl1q7MVP9HieIyPyjgtzm0HX6EMBY%2FTLJo0Y7S38yhsvoBhuL7WRHM58l%2Bxc%2FBcmjY9%2FW2nh0QV4MtAsUHMqLSrtBWRyz9zwc5Ruug6ozOzojQSqC32ByoFdWClGvvVCuYXK%2BL6cvwZOpMhkv1RzpCtTGJqzrHJsmZuNU097qGgznMv5%2B8hYqjWfHVNPq95g9li6Zy7dgHe7LQb3dE%2Bnmnli2o70LbDlk6djG4Mj4lU48pO%2BlkZ9a7n3WjsgjGbwWP9ClrMAtK1b0XH2ZmhxYdkAgKFVVbsUpHIjOr8G2NLITWvzgOzw5GrAfnfPj6CKz4ashS4mr%2BiZBtHjKzvWLEDSOBNxgm0RaX1iOlcIOhMlfiRhv2EG%2FvnrFihuJruozthgiVSfrwZznjpApktWxAKq%2FFcs5rzv4bZzBZoE1znP9aovocnHSKODJ%2BczAXIhXqDPVG1fko0wO7tc0DZ%2B8m2RuYv4gjt0%2BQBgpWyEdWG3aaFu6grAup%2BrYR7nCSQWTb1iBBMOCQnL0GOqUB9HSUK3%2Futv9VAl%2BJFwS4fTGqQ9GTln6hvLhPEMnONo8HqCmZz%2Bnac4e7kpo92iJMX1uYQze3ooYbhIWMzZ%2BYObuDJGQFIFZDhcQzPlu7L30KUEBPC%2B6oWlG3t569AthYk9vr1VVKgDpSiQo%2B1Me10NkpHfZHFlz3e5mXF%2BAqRMVLLZTKEC19KIRAnWdmsRowYVGXmgUdbtVzEC3CcoAQoXwZthOT&X-Amz-Signature=5466d111bfa7afa9e70d14f22476c142a1335a6e12c48f358811bf5fa3a863db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZDULOOE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCm8OH2B8rA2v%2BTB47lEDSSfTBVgUMGoPjkmA5PerJu%2BwIgbcAVVIimZlT928PjRbIpAWM4msHEuT3vRKRqUEzV6DwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJc1DVVPnOzkZ6j88ircA8gAMysZ7jrdg71HPauSv6Sx2ZSFr4sfnWwLC%2FusJ3ze%2BzJ%2FBED6IzO0vs0YLKVu35YUlKq9Sknj2c%2BUvQ%2BJUHEpbx19ghZVpEzeHnHSwChcJHtkgD9%2FS661YINd479NiRHBB%2B99h%2FB8pvgE7bhHu2gM0CLEkMI1zgsXYm8EEFq9lGEDP9QwNufzhEfEJIAzOTWIg%2F1r3OGFzq%2FkJaPnmroa6g8pKtAU54%2BkqiJjvMD9oXXzWJtMsnrIdpVkj3Gfp00eCIM%2BKFSD%2B5CfE9bCz3geZwYE1vH8KIJH3YCHEnzRLnO1KhzoXIqZ9AvUZzCH3rOOfYox2sKZn%2F5LAYM9X0zttG%2Fn2aC0AR44PehJ5akuuYFU9PZPMaKoieyDrJjzz5UJskIeJI%2FpJDxkzNyIRot9eWOZvlXJHX9FafNjM6%2BfJoNE%2BZGZbN4k0o9CZUD%2Fatf21v9XnJ2RSL0EbkouyZVKzLXVYEXmX9LWWtxgCfaMBA8nUYOD10aYV0XzFNwcvCLYt%2BCl1Y3BBnHge1jeZBfxRGzCvrk4DcgTqvghTduLgD42aCBNRLjCE%2F7eoMyv58oZiAVAva%2F0BHESLevPRE2MXl2VVJWxftigA2qL2%2FEfRoW9%2Bo3Y4UIegOdfMJiQnL0GOqUB9IrGuh%2F51mwCiMGvgtMaBsbV10qfeDy0yRBhhp1UiqF%2FzALl2Yv%2FwKhyB2CpELH%2FdjWghdVLr0kHkqQruotO9mrKVmGOgXDy7kq6h37OG8Y2v9y5oBFqvMDIWjL3jVcxxp2TfrFf8QSUlR%2FsHhKVUGQUZMhR5quQRxZpy9Us6iw9zeTWXgN2QRLkyzgHmnmkBWSFPSL%2Fgd53DXNfjjGv4VPzH2zF&X-Amz-Signature=53c59bdf38a62a482dbff3b2917e96b0c8b2a355e70943a3b460f258160eba3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
