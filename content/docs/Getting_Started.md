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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LZ32SX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChs3LvWGLB80vvBYVlnJlGxfwCaFG3ori8UmnX02U0yAiBlmAGM8d4JnJmLQpTmZ2v2enKzwKWsKN%2F5Q4H5hIxCayr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMCBRuK4JcIkIQNtOlKtwDwGJ6Aywyz00xMpwTU4DQRwCjtB%2FA0X1UYuDSCoiL2SIS068GlQl4xHwQsJ6EY%2Fd3i71Voj0%2FnsbCQUO9sbhNoK9O%2BERbVehzGM7S%2FFO7oixWogF5198IM0c8pQbPeWwkNG0hFNJv3wvN%2FJHBhvbJpqcl%2FzU2UkRwINzsszedOK%2FYGXTfeJJBpwNf20vpRSifPsWM8eYagrJ65pEWKQqreczKayn0PSlVpc8sLOoXKkvxeHc8C9ByLX5w2wDh%2BeNKIRpEyQPkCyszn0fBOx0gWFAFQnP7s4j0SsxavbC83otK8ykPf4OVV4639%2BhrP4Mdg5qp5ZHDIV2iRNmp1RMFv6Tk0E4MkL6W%2FDVbfM0QQCbV4W%2B7P8FZ%2F7cORYmfdEGsy11%2Bi%2Ff4IbsOD3bcKgl%2BE0OtPFUBB%2F1Oz75jYM4uueW2akTBaDpCuTVEXkIz04yIVjsj%2BP0EudlCXsbxwVHCyjtpU1rlNIatJyQYC0qPsHhKpqy5rR3l2e5aKBo9EBKs7dQYmwAOs7EMEJ%2FV7oc4bwBuflRw2R3O%2Fm7suXDCcBbvrv2A0%2BYkG6FWkUi8PhvCNKhIR0OFjWsQa5YugkqTVRnXMqCaSatgfWaBXsF1u6%2BsUpX1GFmbqMuNQwcw9trevgY6pgHpkf%2FXBu%2Fr2zhU9%2FicuDsUDIu6zWAVKkn2PxQ7dMpJ7A2bUCJtSHdwrpDS9AV28%2Fau9qJRAPyUV45Oj2TGxUZYiiOQJ0bHz3Smf9g%2BWoc%2FcbXrys%2FImuI1vAfVRQH%2FPBVx%2FbAMprKVvrLXd3%2FYmlXZoNJE1FJCv%2F6Jyswk5zgw7W5xbCTPMkTFCqOmMPLcLrEdnEWFGYnX%2BMbrAiAUoABdozjUlJHb&X-Amz-Signature=3ba8faa9c36579c832c6c69a044dd57707085f278049fadac01867a006ff3b53&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LZ32SX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChs3LvWGLB80vvBYVlnJlGxfwCaFG3ori8UmnX02U0yAiBlmAGM8d4JnJmLQpTmZ2v2enKzwKWsKN%2F5Q4H5hIxCayr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMCBRuK4JcIkIQNtOlKtwDwGJ6Aywyz00xMpwTU4DQRwCjtB%2FA0X1UYuDSCoiL2SIS068GlQl4xHwQsJ6EY%2Fd3i71Voj0%2FnsbCQUO9sbhNoK9O%2BERbVehzGM7S%2FFO7oixWogF5198IM0c8pQbPeWwkNG0hFNJv3wvN%2FJHBhvbJpqcl%2FzU2UkRwINzsszedOK%2FYGXTfeJJBpwNf20vpRSifPsWM8eYagrJ65pEWKQqreczKayn0PSlVpc8sLOoXKkvxeHc8C9ByLX5w2wDh%2BeNKIRpEyQPkCyszn0fBOx0gWFAFQnP7s4j0SsxavbC83otK8ykPf4OVV4639%2BhrP4Mdg5qp5ZHDIV2iRNmp1RMFv6Tk0E4MkL6W%2FDVbfM0QQCbV4W%2B7P8FZ%2F7cORYmfdEGsy11%2Bi%2Ff4IbsOD3bcKgl%2BE0OtPFUBB%2F1Oz75jYM4uueW2akTBaDpCuTVEXkIz04yIVjsj%2BP0EudlCXsbxwVHCyjtpU1rlNIatJyQYC0qPsHhKpqy5rR3l2e5aKBo9EBKs7dQYmwAOs7EMEJ%2FV7oc4bwBuflRw2R3O%2Fm7suXDCcBbvrv2A0%2BYkG6FWkUi8PhvCNKhIR0OFjWsQa5YugkqTVRnXMqCaSatgfWaBXsF1u6%2BsUpX1GFmbqMuNQwcw9trevgY6pgHpkf%2FXBu%2Fr2zhU9%2FicuDsUDIu6zWAVKkn2PxQ7dMpJ7A2bUCJtSHdwrpDS9AV28%2Fau9qJRAPyUV45Oj2TGxUZYiiOQJ0bHz3Smf9g%2BWoc%2FcbXrys%2FImuI1vAfVRQH%2FPBVx%2FbAMprKVvrLXd3%2FYmlXZoNJE1FJCv%2F6Jyswk5zgw7W5xbCTPMkTFCqOmMPLcLrEdnEWFGYnX%2BMbrAiAUoABdozjUlJHb&X-Amz-Signature=13e8b1d87678cc46a9995369f432e0231c197db186a5e6abb9926fd5aba6a566&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZH63V47%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV2DobByuWo3YU3WEWAD2GS8A7vzlVdDzSl9RX6QHMTQIgOM4ILEk%2BJFltbup%2B5W1MtWJBIy2W21xinXRMq2zp2qgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDEe3gQzxXBDZOa0O0yrcA%2BlVK%2B2%2BtVSxh1c92r%2BiyIwAGvYAC%2FWjphRtTB3JurVY%2Bikl%2BXCqAIXAuEf7p2Gp4HZH3VhJAu5XVqpm7L3N7in8X5fyxi6rTYIz2mnboHc54JuKzbSfRbwtPRFaIzD%2BK%2FYqtkC9x4sboF5zGP2Yoq9NL1EeLNryWeUOdMLXE510LwZqmRUmFhKriGuJ%2FCtGlIGNd4cjUc%2By7IAypFFjaHUcAwXmw%2BlTi%2Bh2m9OrQizpRRxOnRvqv1JVTSk8atX%2BqXgGnAzUN8tMFyV3SPjSCKLe%2F%2F60TLafS%2Fjdrpc1dgylIutAZTPowRi9tbl%2Fxt%2BvOMhcLnGtJRcogKETQCh9gYHqHFr6zP70hkWOftctseSafx9HDZdtjqWEuv2Ef4Le0ZJ9Uo15oS1PdZJd22Tv8RGFjmotQzZhXx6uVM0Z9FCG9%2BiKKrvJswegCoMzEHcBMiON6qQ2Bnrktg8C8V5IuyWKP7iNulmCZUjfXUXElPNI%2BgEPi0qmAfoyI4oZvMg8AXSjRQlA9qWOHD3RIcTNxOLdqmXwvtkU1XwVjJRP1VSYMEfZ7BFHMkXcJJylp5QgZJ3F3kNu7vLxkWSy5NgFblK3jp5lcSoUnZN4hCopfsvBDI0dLtWJ752AmRv6MNfb3r4GOqUBTTMPu1rIEpJsIN8JC6DcW1r7L9nimb%2FkXkttAYvTxpIp%2Fwk2eMZuY%2FMOnC8kcgSI%2BsySZ5lATkYm1NbIuTc58hCAWVkgou7SyNOeSTGiL9uoYYJypJrFCk1AYJOZF8skbC6AMQ1UNiJmCWWP0LTZy%2Bs6zRv89Yg%2BWpvSsS0sSLZB2%2BIxQU%2FiVbLnHLXtFIo9y1F2pIVGbH0z%2FE0SAMj9IhZXw33j&X-Amz-Signature=fe3783caa9e11e747aa70fd342b275e92fe4e2d7dbebe9eab3e5970241cba3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFEKM3%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDORYHWsfuwX2giTt1dyZxDQKbRVUeklbN6TV1kHsFRSwIgSAx8fjE25Qo5bqtTeo2heQVyBOMlJIG4taLnopyRvPQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDDKlQ5idOEw5WJHOircAxHrcs6FyU%2Ff3vMBcGC3oHOtK4KsgFT%2BtZmdqwb7hwa%2BVZcY5WZH02DTdCJY%2F9a0gt2CEAjkdNs6EVsDkXqJSVBsv2HQS%2Fa7EFR9XFrWA6uSeT%2FJG21F8ArVxhOWwr%2B3kWA62GogFErc3B2gUdPQ%2BOh%2Bu9X0Xnb2y5sJXresKIxRF4QFQz5V3YXOLiTH2%2FuaAvCUk91dKZnvTmZDBrBz3wzoFmkmJ%2F2CQLbeTdsYcjMryTLbhTpbBjWobamM56lcPrC9HVHkHjK8LrEkmV512qJaOtdT4ovNFo0fEHEXktIuEjVnv8rdM3yt8u75Z5dtcbuqJ1wf2x%2BKz3EusAfuGNrFxx%2B0waDGnX5Fu2Fj0U1VxpmNM4quwYvwOt%2FyLdAOgpx8uffs82EWOuzp%2Fjznxo9UMOe0RqSa9tWdxsmdZlpyyP%2F9S6hatD5hTcCFi08a%2BFz%2F5XDKtO33VYLxrGJEMpHXahgTwktAExWlGBeVr6Z4SDBF3vVyEkY%2FUT%2BOxXeQBfL9BK%2BXdkwgP9jlJW92cShk9Io66ka8Td%2B4JHe%2FzIYnfo6D7Pqrhkd3mTbnTQPXW4f5wBPY5BtUrYa2BZw3a15P8ASIxiFZGTxlXfgRBep%2B2nUg1HWue1z7hZf5MP3a3r4GOqUBvcCHdC%2BQdxViSWUMBF6M%2F4wmhktGGbMicrHK2HXy6Nq2VTGCW1OlYRGGlMoVa%2Fo2pACblkOjfmai%2F1oH%2B%2FC5t5HJx5M8GczfgIb86yO8GbtLPQiUBb7X4ZdtCdzwh1m0z9lgt2xq2tOkJ0J0sPHrldydll6TTVk3BfCPmk3FwwVt2ygHBaWyGynWXh%2BD3g3hBsm%2FHNWJG9rhHsvKs%2FAIck9%2F%2FbSl&X-Amz-Signature=2c55f2394fad251d7f93cfc8b1069ef572faf99ebda0a2ae4caacbe68e2969fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LZ32SX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChs3LvWGLB80vvBYVlnJlGxfwCaFG3ori8UmnX02U0yAiBlmAGM8d4JnJmLQpTmZ2v2enKzwKWsKN%2F5Q4H5hIxCayr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMCBRuK4JcIkIQNtOlKtwDwGJ6Aywyz00xMpwTU4DQRwCjtB%2FA0X1UYuDSCoiL2SIS068GlQl4xHwQsJ6EY%2Fd3i71Voj0%2FnsbCQUO9sbhNoK9O%2BERbVehzGM7S%2FFO7oixWogF5198IM0c8pQbPeWwkNG0hFNJv3wvN%2FJHBhvbJpqcl%2FzU2UkRwINzsszedOK%2FYGXTfeJJBpwNf20vpRSifPsWM8eYagrJ65pEWKQqreczKayn0PSlVpc8sLOoXKkvxeHc8C9ByLX5w2wDh%2BeNKIRpEyQPkCyszn0fBOx0gWFAFQnP7s4j0SsxavbC83otK8ykPf4OVV4639%2BhrP4Mdg5qp5ZHDIV2iRNmp1RMFv6Tk0E4MkL6W%2FDVbfM0QQCbV4W%2B7P8FZ%2F7cORYmfdEGsy11%2Bi%2Ff4IbsOD3bcKgl%2BE0OtPFUBB%2F1Oz75jYM4uueW2akTBaDpCuTVEXkIz04yIVjsj%2BP0EudlCXsbxwVHCyjtpU1rlNIatJyQYC0qPsHhKpqy5rR3l2e5aKBo9EBKs7dQYmwAOs7EMEJ%2FV7oc4bwBuflRw2R3O%2Fm7suXDCcBbvrv2A0%2BYkG6FWkUi8PhvCNKhIR0OFjWsQa5YugkqTVRnXMqCaSatgfWaBXsF1u6%2BsUpX1GFmbqMuNQwcw9trevgY6pgHpkf%2FXBu%2Fr2zhU9%2FicuDsUDIu6zWAVKkn2PxQ7dMpJ7A2bUCJtSHdwrpDS9AV28%2Fau9qJRAPyUV45Oj2TGxUZYiiOQJ0bHz3Smf9g%2BWoc%2FcbXrys%2FImuI1vAfVRQH%2FPBVx%2FbAMprKVvrLXd3%2FYmlXZoNJE1FJCv%2F6Jyswk5zgw7W5xbCTPMkTFCqOmMPLcLrEdnEWFGYnX%2BMbrAiAUoABdozjUlJHb&X-Amz-Signature=5ab486e79c6f44c956a36d45e6dfe1e09005bb3ce34a6a53ead3d0c295122047&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
