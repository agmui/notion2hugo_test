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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MAR7VL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHzVsNiCNdbHp%2Fn8FAa3e4HZLUyuFBq75xiPNL7q5C6bAiEA8u0gfBhi7ULjDOZXhIpwtM9vA0EGkCR5hOeXFDeVLi8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFNJWQLNv6Bz5mxtfyrcA4%2BH6nIkBTMd%2B6mLiijQ4bKw96cE1q3CdtecJYgqfXgbAJnQHxJi%2BEvqyeCa0ayU%2FdndC4kng86hzNcyVuWLj8jQ5ib7CAtKK1cFIZELvxqS75EtMQgTIsF%2FnYY8ilCQiMnqMmyVADmBUkg8vw1zK2MnUPZ15lyHHZQaL1ZKDgs9bdunTndoUjtyVLOeWMI8iUzUjj59yhN4UBZ0FlE%2FTDixvOG2%2F3LppwBV197uUNkvgNv3QxmQEbNQvsThlsP6s%2BQLxrEGY0BWjtbcuyYrb6qyN9syYoieY7NE7M4Ga25r0U2ddu2L9RTH9VOda%2FRwOnZ8Ffxbmxb3MggjSWrviGNo7jVakZeLqUc5CkHOBX9pk14fnClCvkWxrv3nPGpnCRvh%2FXhZ3KTecIFZjG4OziP9m2rhGgTDqRCX%2BloKOxhztsFqLgjsdzX4ZnCmbss787tT62SU%2FjB40nKd2WQh8R2xG9RDUiMtk4b56Bsdq4alMSPm0RrW9cHpdt2riue%2FwYJB7MPdwyfk5lVAor6XHuWL55hoR4KLQLrKEToKQK4WO5%2B%2BQ%2BQt2bncspRZiYq4UtdkVu7huV3kQRheliIGLSshDMnFNEoJ10Y3uXeAS9Gfy6N0YER%2Fpd11kMOkMKP7zcQGOqUBMjSZwPhQNxx%2FgsrhBJU%2BjZENJ%2FiYCVt3R49f9viAHpEicrfC4T01%2FTUD9GwiE00a9FK12gXg1kOz2nrHU7GvHtbkY8EJTm3lKFWoCboagv52hnt%2FjuJB75XpzEZlCq3qlXdZKok%2Bb%2B44M45u0Q57xOwOxBiGq3CUsbol1i8we8erEGgtbbxFGepY9hvaIBKex9e7nu%2FG1U%2BLSb2W387nxQ4cpQWF&X-Amz-Signature=dbfe69f851ed810585933535ee7f832e3bce00d80d76fc4f31a4d51f8e86b509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MAR7VL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHzVsNiCNdbHp%2Fn8FAa3e4HZLUyuFBq75xiPNL7q5C6bAiEA8u0gfBhi7ULjDOZXhIpwtM9vA0EGkCR5hOeXFDeVLi8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFNJWQLNv6Bz5mxtfyrcA4%2BH6nIkBTMd%2B6mLiijQ4bKw96cE1q3CdtecJYgqfXgbAJnQHxJi%2BEvqyeCa0ayU%2FdndC4kng86hzNcyVuWLj8jQ5ib7CAtKK1cFIZELvxqS75EtMQgTIsF%2FnYY8ilCQiMnqMmyVADmBUkg8vw1zK2MnUPZ15lyHHZQaL1ZKDgs9bdunTndoUjtyVLOeWMI8iUzUjj59yhN4UBZ0FlE%2FTDixvOG2%2F3LppwBV197uUNkvgNv3QxmQEbNQvsThlsP6s%2BQLxrEGY0BWjtbcuyYrb6qyN9syYoieY7NE7M4Ga25r0U2ddu2L9RTH9VOda%2FRwOnZ8Ffxbmxb3MggjSWrviGNo7jVakZeLqUc5CkHOBX9pk14fnClCvkWxrv3nPGpnCRvh%2FXhZ3KTecIFZjG4OziP9m2rhGgTDqRCX%2BloKOxhztsFqLgjsdzX4ZnCmbss787tT62SU%2FjB40nKd2WQh8R2xG9RDUiMtk4b56Bsdq4alMSPm0RrW9cHpdt2riue%2FwYJB7MPdwyfk5lVAor6XHuWL55hoR4KLQLrKEToKQK4WO5%2B%2BQ%2BQt2bncspRZiYq4UtdkVu7huV3kQRheliIGLSshDMnFNEoJ10Y3uXeAS9Gfy6N0YER%2Fpd11kMOkMKP7zcQGOqUBMjSZwPhQNxx%2FgsrhBJU%2BjZENJ%2FiYCVt3R49f9viAHpEicrfC4T01%2FTUD9GwiE00a9FK12gXg1kOz2nrHU7GvHtbkY8EJTm3lKFWoCboagv52hnt%2FjuJB75XpzEZlCq3qlXdZKok%2Bb%2B44M45u0Q57xOwOxBiGq3CUsbol1i8we8erEGgtbbxFGepY9hvaIBKex9e7nu%2FG1U%2BLSb2W387nxQ4cpQWF&X-Amz-Signature=481a0e9e3a7da267f7c4a21ecbe5add06f9faad8099fecbc0c9907d9fe9b1200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MAR7VL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHzVsNiCNdbHp%2Fn8FAa3e4HZLUyuFBq75xiPNL7q5C6bAiEA8u0gfBhi7ULjDOZXhIpwtM9vA0EGkCR5hOeXFDeVLi8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFNJWQLNv6Bz5mxtfyrcA4%2BH6nIkBTMd%2B6mLiijQ4bKw96cE1q3CdtecJYgqfXgbAJnQHxJi%2BEvqyeCa0ayU%2FdndC4kng86hzNcyVuWLj8jQ5ib7CAtKK1cFIZELvxqS75EtMQgTIsF%2FnYY8ilCQiMnqMmyVADmBUkg8vw1zK2MnUPZ15lyHHZQaL1ZKDgs9bdunTndoUjtyVLOeWMI8iUzUjj59yhN4UBZ0FlE%2FTDixvOG2%2F3LppwBV197uUNkvgNv3QxmQEbNQvsThlsP6s%2BQLxrEGY0BWjtbcuyYrb6qyN9syYoieY7NE7M4Ga25r0U2ddu2L9RTH9VOda%2FRwOnZ8Ffxbmxb3MggjSWrviGNo7jVakZeLqUc5CkHOBX9pk14fnClCvkWxrv3nPGpnCRvh%2FXhZ3KTecIFZjG4OziP9m2rhGgTDqRCX%2BloKOxhztsFqLgjsdzX4ZnCmbss787tT62SU%2FjB40nKd2WQh8R2xG9RDUiMtk4b56Bsdq4alMSPm0RrW9cHpdt2riue%2FwYJB7MPdwyfk5lVAor6XHuWL55hoR4KLQLrKEToKQK4WO5%2B%2BQ%2BQt2bncspRZiYq4UtdkVu7huV3kQRheliIGLSshDMnFNEoJ10Y3uXeAS9Gfy6N0YER%2Fpd11kMOkMKP7zcQGOqUBMjSZwPhQNxx%2FgsrhBJU%2BjZENJ%2FiYCVt3R49f9viAHpEicrfC4T01%2FTUD9GwiE00a9FK12gXg1kOz2nrHU7GvHtbkY8EJTm3lKFWoCboagv52hnt%2FjuJB75XpzEZlCq3qlXdZKok%2Bb%2B44M45u0Q57xOwOxBiGq3CUsbol1i8we8erEGgtbbxFGepY9hvaIBKex9e7nu%2FG1U%2BLSb2W387nxQ4cpQWF&X-Amz-Signature=789138c655637790600fc726e57e78b83eb1b9294dc7502a1bb713efc51d9472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJL66NOV%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEDpAbqILd01tzrFquDh3LGvluCzJIZI1lLygycqhglMAiAidebD2kgEj60GzNhLhcQ3INaU3WWYzdKFVGh1mzH1tyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMz7c9gjYKvzUVHNgxKtwDZucK%2FLjzpoAaX6SRVdVhapITv3ccRt1f%2FpYUGE%2B0mwffx2MrpZmwb%2Btk5JbdhsFGZ6INHLblMDZHsnm8KkPzDbW5oqGbdQcPZ1Oe%2Fd0r0SP%2FhJC6qHy0KWA2LIbqssV1WvCHJkJyRsdi7EJ5by0JyoEH6TQ%2FVbMHC1xKa39VSZNglAoNvBjRhHkbU29KL40A5XCGAM7196VyRRP9%2FeJGJrURnXI7SFRyv%2B551MQNA9pHm5yni1w8U%2BT7HDpU%2F7gOWlYFIO20Rk32l60hWP1onLHYVX6DnOnG1n5fU9VVD24YAr99NGkv35S4OKBnkt%2BjL6dMroBiPAVGuLkyJ4JgOiVs9FqZfnERkENK3NAm2VD%2BFGAU2Mhc1a9iVTVojUhPG0AlwMuF%2F99fYSRLmv%2Bg1eWHX85eVPB8ITGpxiLW5Ktlq2hfng6pIqey%2B1uShh9gE%2BIwJL0uayMCkLrKuUf1OUKHTnqBQCkGa5vHi7vB1JurP9eCjmla2XaCg88OeKBurfV5fYOaXi9TSnL2n8jiCNk7w%2BLDtlen%2FJg7XRBzrmohKQ9zWyjzFi2pCheAPTCvLuX6pCiGeKMdiEHTyTAp0MH9yorVdkTh0BAXBE%2BCKk%2Fx%2FFJrEyCSgwX%2FXSMw6vrNxAY6pgE6n62Y%2BntvOzcFFla3uvY474ib8BixlGf5CVhx6CWB%2BTVd06n199BU4dt36MaSZ6ab%2BJNop9fzjA8ZX8Hg5PebZIcGY1cdbWSdCzQdqn40842M3%2FQg7DSYvcZZ6IoLD98yWlGWkJDLHd28SYCRlGhRqX569%2BjO3oFetbsfGx8KJBm1YpyeLZXwqJHwa%2FZnbtRDPeg9cvX2stRhv3YgX4HFrkLL0lkP&X-Amz-Signature=b6b3137db35a0f76f950f8f742bc248d8817b157e617e8b03e09b6f399ac8663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EZZEVMS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCHegQEQnecDk%2BmJ1KYGvXt4GmZzLIC0GJL0z4paDxlMQIgJCiZAqLqIriuMX5xeou0Jo6AGo0z7ngaq8iKwyaFQ5Mq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDP3d7n2ptYP%2FHsz%2FECrcA1i2hEkV%2BjegK3itXVXX3LlLKCb%2BdvqnPd6naNmUtvPBM54e15UcqMLxTMpa%2BLnoeDKne%2F6KLPY%2FADC8fq82T5t3tNs0%2Bra%2BiuB53p8IZ30AbtJF%2FtpjYDK%2FcyDdwBQj6PknRJZTVyR2YtgHn%2B9lpxtGCMVv9EtFk8wfomfF%2FJgqnK3KYgSl0zME2V7PLi2Jnl8qQR%2FYdbjSj24KsfzL8ut1bjdOtlJEY6TsjZzmAxDJTCoMyLBJjyV%2FgIycmawVUNDxd3wbxVbN%2B0HEa%2BxMEh1Fuayz3rJFn68pka3M2wUa%2BYcjgZNPE1OwMgyYO9sM%2BnUd0RZiyW8FwYIDdcR0nGGVjk%2Fmq8S4zAT5SBm3yRFbfv69W24Um8w%2BoTyRpeq2UgNAmuDhAWIertkO4fh4kRsO%2FOhNDt0%2FyWrcg2F1TajKgCmx475i2ASSexkabHZnBQZY%2BJeWCK%2FpbTdoJFAsqpD3cL07cFBpaM4xGeRPn5HdCTSGG%2B%2FK4HpOFpppH%2BbhtrcJkohiqsbXkQxyr0EyL%2BpPbQlOGAvaxbHYqwOhVSCyLVTdnZeZYpnuZ%2FRZSRZycnbNVLJmbC2S3OpBqz8FjJNPUjHXuHs%2F6YGuRMBHkHeOoykWQu6RGD3Q8D22MLL7zcQGOqUBPdX5h%2F2qMj0%2FN4R4eohhZ2bu1yOtIxvlVdSOs%2FCDii9L5t1BAvwDI5bC0lUaFwoAS0f2iI2WUl%2FGyA0BzyrjK4icr%2FGglZf2864RC4KKHpMnoqosF5bBQ2aRjSLbF4VVOpNC5NVyJPTEc3GjVmB4weGAoyGn3MeeHt3gq0Y0ZP1faKJm3xNBfyIWoDL%2FlsI6dh%2F535yZEFypv3pxVY1xaQxaXY9t&X-Amz-Signature=36a16979878dbe9f5c6649ca9f867bb122d8f6c67b2baaf8a82a0a43c30cfa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3MAR7VL%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIHzVsNiCNdbHp%2Fn8FAa3e4HZLUyuFBq75xiPNL7q5C6bAiEA8u0gfBhi7ULjDOZXhIpwtM9vA0EGkCR5hOeXFDeVLi8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFNJWQLNv6Bz5mxtfyrcA4%2BH6nIkBTMd%2B6mLiijQ4bKw96cE1q3CdtecJYgqfXgbAJnQHxJi%2BEvqyeCa0ayU%2FdndC4kng86hzNcyVuWLj8jQ5ib7CAtKK1cFIZELvxqS75EtMQgTIsF%2FnYY8ilCQiMnqMmyVADmBUkg8vw1zK2MnUPZ15lyHHZQaL1ZKDgs9bdunTndoUjtyVLOeWMI8iUzUjj59yhN4UBZ0FlE%2FTDixvOG2%2F3LppwBV197uUNkvgNv3QxmQEbNQvsThlsP6s%2BQLxrEGY0BWjtbcuyYrb6qyN9syYoieY7NE7M4Ga25r0U2ddu2L9RTH9VOda%2FRwOnZ8Ffxbmxb3MggjSWrviGNo7jVakZeLqUc5CkHOBX9pk14fnClCvkWxrv3nPGpnCRvh%2FXhZ3KTecIFZjG4OziP9m2rhGgTDqRCX%2BloKOxhztsFqLgjsdzX4ZnCmbss787tT62SU%2FjB40nKd2WQh8R2xG9RDUiMtk4b56Bsdq4alMSPm0RrW9cHpdt2riue%2FwYJB7MPdwyfk5lVAor6XHuWL55hoR4KLQLrKEToKQK4WO5%2B%2BQ%2BQt2bncspRZiYq4UtdkVu7huV3kQRheliIGLSshDMnFNEoJ10Y3uXeAS9Gfy6N0YER%2Fpd11kMOkMKP7zcQGOqUBMjSZwPhQNxx%2FgsrhBJU%2BjZENJ%2FiYCVt3R49f9viAHpEicrfC4T01%2FTUD9GwiE00a9FK12gXg1kOz2nrHU7GvHtbkY8EJTm3lKFWoCboagv52hnt%2FjuJB75XpzEZlCq3qlXdZKok%2Bb%2B44M45u0Q57xOwOxBiGq3CUsbol1i8we8erEGgtbbxFGepY9hvaIBKex9e7nu%2FG1U%2BLSb2W387nxQ4cpQWF&X-Amz-Signature=29e6e9cc7b0856011e5ee4f6f22bae9d5e9e3a17ab397b01705fd7e92c270238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
