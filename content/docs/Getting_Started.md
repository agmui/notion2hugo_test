---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEWGFPW%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDApx1n%2BZSqpHEfzi7%2FH8LX17Td6yY2EmYCopoffnzM2AIgXABngv0w7XI2EoSnkxsqGCbfEurWXTXxIpJMbQ7aidoq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDDo5XU%2FcB9CNbrNfPircAxrmCJ3U%2B906WqrU4T%2B0V8C8EOxDR9jGwwNgZZdK1VusNuV0LezIWZNNa6SK3rdCg9dgMPimOuwj9lsqWLBArBsCg0A36LA2Yb0nu7uxuY%2FC53ep6JKmn0PWk2XoJQnWET8SvmfG0UjgWA36FUxxFQjk9ElN%2F%2Fm6b7fOQwm%2FiDDUbqovOLNY%2FpING6Gh7e08DfhmAF0PLc5wWBaOdH0nuJDGxlnz%2BJQ2oKDFMMmyIM0XaEsafZH5O8vRVDWhHHpMyhl3F0efs22WfTAQtNrXB3Z0VsNFtINyWKO0oBaRTnrQoC0NdER1HZgb0DM0yBVRWMsn3fnU4PPr%2BuQwJqGVclOoLjzhS2ZxzHxNC%2FLn3j5nAgCcNjsSKbvxYtuiaDan1KRiIBsf%2B8I72dk9akw0rDsLxzPIA5b1vzU5tDNv3ILhTA4y9qgBQwB44ZKpYCx6Oon05hPbNdvBqnH%2Fjp830hqNjWG7ajeuVCAop7xkUn3aylPb0jmK74iZXGcx0clDVVBBv%2B3hxNA%2BhXOYiVBf3I48K9EDU7EBxkjpadRUAqaKSfGWZ3ylT7TN1QqqMVcRKPjuT46qgwmhkYeKeIXbfg%2FORqQd%2B3r7Qs2d7XouTjR%2BSw9rSmeOOhfBQaTiMOTfuMkGOqUBiXcnk5wB5W7d%2BzzXrXlsbv6hMLAl6iU%2FSaS4K%2F4AzxFES3t8KEeON1rT%2FrlG%2FOwhBhxDn%2FHANOcIvJEgFkSPwbXlagQP%2Fiw7B6C%2Fy5pfJTE5i9BBAKABlHqBPxWL3HJCCpx9BZIzf6r92MQ%2FI%2B4QhFP5y%2FLoGv5TzVHmXmrn5O2Z39OSugDDmYlCnzNrn1%2FV42bXgI73AgWRd2XcvgnQL25ivH8F&X-Amz-Signature=00de1fe6d753e7606c5777b1564b871d7da6e92d8a0ba0820f18e71518b6d533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEWGFPW%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDApx1n%2BZSqpHEfzi7%2FH8LX17Td6yY2EmYCopoffnzM2AIgXABngv0w7XI2EoSnkxsqGCbfEurWXTXxIpJMbQ7aidoq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDDo5XU%2FcB9CNbrNfPircAxrmCJ3U%2B906WqrU4T%2B0V8C8EOxDR9jGwwNgZZdK1VusNuV0LezIWZNNa6SK3rdCg9dgMPimOuwj9lsqWLBArBsCg0A36LA2Yb0nu7uxuY%2FC53ep6JKmn0PWk2XoJQnWET8SvmfG0UjgWA36FUxxFQjk9ElN%2F%2Fm6b7fOQwm%2FiDDUbqovOLNY%2FpING6Gh7e08DfhmAF0PLc5wWBaOdH0nuJDGxlnz%2BJQ2oKDFMMmyIM0XaEsafZH5O8vRVDWhHHpMyhl3F0efs22WfTAQtNrXB3Z0VsNFtINyWKO0oBaRTnrQoC0NdER1HZgb0DM0yBVRWMsn3fnU4PPr%2BuQwJqGVclOoLjzhS2ZxzHxNC%2FLn3j5nAgCcNjsSKbvxYtuiaDan1KRiIBsf%2B8I72dk9akw0rDsLxzPIA5b1vzU5tDNv3ILhTA4y9qgBQwB44ZKpYCx6Oon05hPbNdvBqnH%2Fjp830hqNjWG7ajeuVCAop7xkUn3aylPb0jmK74iZXGcx0clDVVBBv%2B3hxNA%2BhXOYiVBf3I48K9EDU7EBxkjpadRUAqaKSfGWZ3ylT7TN1QqqMVcRKPjuT46qgwmhkYeKeIXbfg%2FORqQd%2B3r7Qs2d7XouTjR%2BSw9rSmeOOhfBQaTiMOTfuMkGOqUBiXcnk5wB5W7d%2BzzXrXlsbv6hMLAl6iU%2FSaS4K%2F4AzxFES3t8KEeON1rT%2FrlG%2FOwhBhxDn%2FHANOcIvJEgFkSPwbXlagQP%2Fiw7B6C%2Fy5pfJTE5i9BBAKABlHqBPxWL3HJCCpx9BZIzf6r92MQ%2FI%2B4QhFP5y%2FLoGv5TzVHmXmrn5O2Z39OSugDDmYlCnzNrn1%2FV42bXgI73AgWRd2XcvgnQL25ivH8F&X-Amz-Signature=990031b6fbe764d1be5bb2c16b1d0b18b7af5418d24b20c9be666b0e85334c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEWGFPW%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDApx1n%2BZSqpHEfzi7%2FH8LX17Td6yY2EmYCopoffnzM2AIgXABngv0w7XI2EoSnkxsqGCbfEurWXTXxIpJMbQ7aidoq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDDo5XU%2FcB9CNbrNfPircAxrmCJ3U%2B906WqrU4T%2B0V8C8EOxDR9jGwwNgZZdK1VusNuV0LezIWZNNa6SK3rdCg9dgMPimOuwj9lsqWLBArBsCg0A36LA2Yb0nu7uxuY%2FC53ep6JKmn0PWk2XoJQnWET8SvmfG0UjgWA36FUxxFQjk9ElN%2F%2Fm6b7fOQwm%2FiDDUbqovOLNY%2FpING6Gh7e08DfhmAF0PLc5wWBaOdH0nuJDGxlnz%2BJQ2oKDFMMmyIM0XaEsafZH5O8vRVDWhHHpMyhl3F0efs22WfTAQtNrXB3Z0VsNFtINyWKO0oBaRTnrQoC0NdER1HZgb0DM0yBVRWMsn3fnU4PPr%2BuQwJqGVclOoLjzhS2ZxzHxNC%2FLn3j5nAgCcNjsSKbvxYtuiaDan1KRiIBsf%2B8I72dk9akw0rDsLxzPIA5b1vzU5tDNv3ILhTA4y9qgBQwB44ZKpYCx6Oon05hPbNdvBqnH%2Fjp830hqNjWG7ajeuVCAop7xkUn3aylPb0jmK74iZXGcx0clDVVBBv%2B3hxNA%2BhXOYiVBf3I48K9EDU7EBxkjpadRUAqaKSfGWZ3ylT7TN1QqqMVcRKPjuT46qgwmhkYeKeIXbfg%2FORqQd%2B3r7Qs2d7XouTjR%2BSw9rSmeOOhfBQaTiMOTfuMkGOqUBiXcnk5wB5W7d%2BzzXrXlsbv6hMLAl6iU%2FSaS4K%2F4AzxFES3t8KEeON1rT%2FrlG%2FOwhBhxDn%2FHANOcIvJEgFkSPwbXlagQP%2Fiw7B6C%2Fy5pfJTE5i9BBAKABlHqBPxWL3HJCCpx9BZIzf6r92MQ%2FI%2B4QhFP5y%2FLoGv5TzVHmXmrn5O2Z39OSugDDmYlCnzNrn1%2FV42bXgI73AgWRd2XcvgnQL25ivH8F&X-Amz-Signature=2949e6e24a53631a256cb58a724f1d269e9a7110fe6bc96cea6cb9293b0c081e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72E2WHM%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIBg1%2FL5hHQ9rH%2Bd%2BWSIXpQnzA9d1ScC6RH2WjiDri1fwAiAFhUraG8kIJog1duylWSVqRHCgdvHcUpge80ewkQ1iCSr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIMb%2FzllrkQEjg0PTYNKtwDc2cC9usXrvkxpassuB7VMYvWJAghLdd21P8LiClndlpjRNH1BvjkDCZtCPZaL94dPBIhxat7sOHVa%2Fi8mpUCZcFnOmxkvaKR5YEc9SXkB5dCyGRJWIIy8LL1r8pjMAROS32JBRdXMPT34Y5XC6ZTQ%2B3coIIrUfREd0gAEchEV%2BUyzPP8L3bYpS%2FvCC1n7fqLOyN5ZiE1A1yLDC4PWO0feUyyILDAam%2FcCERsDQClhND0K18tF5rdc2JsKuTgBz%2B8j%2BwVBrIJy7HPm5CqrixQi4orbP4ZAiKs89t87F8KTxQvgIo2kkGrH3It8GPJu0wU26VZsjk1P4uD0fegzEZBvu%2ByWIWhJ%2FZY%2Bwkj1Y9L%2Bmta8UExqG1LB2GDTMiBjAjcgcA2ZBJy9heNLHrukP5xjppx0qT2XBmeQAU1uD2bmbqJL7Hem5lRnsfgFfRgPnpaYVoYp7yOeuiT5rF9iMENg4p6M11FyFxupeKKoBqgNfqnZRDJcjqpQHxr9Dn1NTkCtIG9Fo%2FUvi3uFtltrmfW4YQt2ANbNm%2BM4LbP6KzHzrEjQApXsVYXeQhD8rIqSqNOFJ7BEM49biBkFMc%2FHPLk7DENIMPFnWGmt7%2BLB8933GAOzkUW6iWg9J%2Bxv4ww9N24yQY6pgGu8BUVAMS63x5262JpNO0t9dwRbET7lGiTuLU9YDw9UU4uxQ4QX56UnKZjqFImIZzY1H492WypeGhyCctYWMJTTvd5ilOTphM2vDjVOIammvChKBl7BzpdCRnJM9K4edYUqkwRhpfQeAmORW9CWik%2Bz1a98kdzGz%2BY6KLTYtylaHGiWVFr0LUZJmvRCkSkePV%2B9M%2FCdSEaWBleVWlLy3wAYszaQ2cj&X-Amz-Signature=55bb3da33bd6cd8f1be273174736dcbf53ddd894cccf6150e3bb0a1f36fecaac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NRCXC4%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCgttZ7NT3rCPJsWAaWhVmjicJv3ltj2sN39jx%2B%2FNEeBQIhAMUnkhHrJPCVmywR3vMsc8QoBNEoJOAFPVFP2%2B%2Fr7y78Kv8DCAkQABoMNjM3NDIzMTgzODA1IgwkGdj7RRrjlVtsWvcq3AO0Q9UcktIyN1DcTAISY8LxQacV41bmI1SVP9awWUefKfW6HrKFkb4o3tT6bi67eO83Z3PDq9wKnMMRME5SBSLbfrHpOxOIXMCueWdR%2BxNsewLnb1JBXO3Emu5eS8ZENBO%2B6EI4C65bd6YcmyrKS30fH3E8aepLP8GTOc1VoPdcUvTasuc7kPsVAhGO%2FlX35Amxmhuxd0rg891dsRGi79b0w3%2B3Jr%2BM4QlgoaVadrl9QvHSJK7hMkSYiJHCpP8uzTP54uMRBGU1ZDS5gVQAT2%2BJMr1mbxWksy4pfvdOj4POTL9cNKSc4NUJ1yfxmWNDtr33mFrht1N%2FRsdeh1gDH63qG9foaLR9u0vhwNvMD8%2BngPOcIgiXpMnVN%2FBSPbpeJE2b1PtYlbxvod0sMRSetjjeKZXB2WT%2FAd52rBISvc90shdbpdLmmMBYIbiAWE1%2FiH3kQRO%2BQ5zl8VGikh2DpwA5P4n7KI4gkqIDaWlg%2FgRjlFGIBcFbGoyNIyU3hvr08gtxKFB0r1V076JjbtOvjtEJiW6gSANkHpQNKx2LawpRedMynB3JFUEeVIY1z9Q9SQR2XNbf6y%2BjEJNXRRCAC%2FqeyjhcF7JGAXBQyG8MjhMaaGlTfly%2FX8IVLF2rgDDq3bjJBjqkAWDsIEGlky%2ByVUUTbGO6o9VLPA1GLbx73F2S4X6XpuFy0hh9OxjTy00pQtKJWWGLCqectZVACh%2FKXGbjKm409IYLfS6UE8%2BpDi4fMHh%2BUXJ9GR3VMabHjnG6Huey2eK1Z7UJsDgTNWuASRic1U2GdGV4pgOmshLLkJMa3aovwk4zEZ5UhRSQ0zzv2Mb2hSaq5oWg2%2FkJ5hBvceCgpngsjGbxH0vn&X-Amz-Signature=0c995da4d41374fb8ab73548d5fd89be78226687b0b58289b6cc7e87017afa8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEWGFPW%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDApx1n%2BZSqpHEfzi7%2FH8LX17Td6yY2EmYCopoffnzM2AIgXABngv0w7XI2EoSnkxsqGCbfEurWXTXxIpJMbQ7aidoq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDDo5XU%2FcB9CNbrNfPircAxrmCJ3U%2B906WqrU4T%2B0V8C8EOxDR9jGwwNgZZdK1VusNuV0LezIWZNNa6SK3rdCg9dgMPimOuwj9lsqWLBArBsCg0A36LA2Yb0nu7uxuY%2FC53ep6JKmn0PWk2XoJQnWET8SvmfG0UjgWA36FUxxFQjk9ElN%2F%2Fm6b7fOQwm%2FiDDUbqovOLNY%2FpING6Gh7e08DfhmAF0PLc5wWBaOdH0nuJDGxlnz%2BJQ2oKDFMMmyIM0XaEsafZH5O8vRVDWhHHpMyhl3F0efs22WfTAQtNrXB3Z0VsNFtINyWKO0oBaRTnrQoC0NdER1HZgb0DM0yBVRWMsn3fnU4PPr%2BuQwJqGVclOoLjzhS2ZxzHxNC%2FLn3j5nAgCcNjsSKbvxYtuiaDan1KRiIBsf%2B8I72dk9akw0rDsLxzPIA5b1vzU5tDNv3ILhTA4y9qgBQwB44ZKpYCx6Oon05hPbNdvBqnH%2Fjp830hqNjWG7ajeuVCAop7xkUn3aylPb0jmK74iZXGcx0clDVVBBv%2B3hxNA%2BhXOYiVBf3I48K9EDU7EBxkjpadRUAqaKSfGWZ3ylT7TN1QqqMVcRKPjuT46qgwmhkYeKeIXbfg%2FORqQd%2B3r7Qs2d7XouTjR%2BSw9rSmeOOhfBQaTiMOTfuMkGOqUBiXcnk5wB5W7d%2BzzXrXlsbv6hMLAl6iU%2FSaS4K%2F4AzxFES3t8KEeON1rT%2FrlG%2FOwhBhxDn%2FHANOcIvJEgFkSPwbXlagQP%2Fiw7B6C%2Fy5pfJTE5i9BBAKABlHqBPxWL3HJCCpx9BZIzf6r92MQ%2FI%2B4QhFP5y%2FLoGv5TzVHmXmrn5O2Z39OSugDDmYlCnzNrn1%2FV42bXgI73AgWRd2XcvgnQL25ivH8F&X-Amz-Signature=f49713dcf5fd5ab3292d18e9850fb4c3a20176642eb3ea155407f06fbd1679d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
