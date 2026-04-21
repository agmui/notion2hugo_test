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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3UWDOU%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDA7rXMWdPZKrgL3QFjulRuzNAZuP6G1MuCLDvpMEHgOAIhAKD5akPB%2BlUe39Zd4qdB6F%2FUfjITq5ShhEAFF2ikLvx2Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwWmlu6RnlsE6sNRRgq3AO4I%2F9XzuQA9cl%2B6s55oAoD2tSZlmQIXW5fHs7p5QG7ggxF50Z8M9huc124tEKi5vDcfoxseGYHH70FWIBkAf2ASsGUdMVilYbUG%2FTcchdGuSMsCo9pMWHdeIZ%2FkLkH26FQ6yFKQaMmQ%2B09Y9MQ3ltILe4cITPpj%2BPksnt8i%2FR6g20cnNApI4bV1piOcb688ErZ0VEHhXDdsoOkuVejb%2FvM33WfHMZCYQDmzh7XIE4iv6DkM%2BX6VvQoj%2FYK0UIZBw75BmdaId7L3U8wBx6%2BqQqHCCcc6zJ9IetFbdpzlnPd1EcxLFPq6orGfnIjcS09OIW2sgJWeIsvTPSJvp0eZ%2F51RUEwh%2BukB%2BpX0MDktx1h1%2FD3O8Z%2BoI2DpwtdYAQWA8WJSFWa6JvQRjHz6fOj%2FY2jDWvV72ehb0CpFNK0LNLgWvsPK8ArUQzS9WVghlTQgQY%2FdYdJGxo2E6pPUzTfHdOV6zELwOHlXcPtZHxkHyPsJ3tQIpaFIBq78jgDKYqXjr%2BGOzbnSQW5oHo1ytI4GxDWo2mvjV%2BhWWeU5s5OC3QLF8irVFoh8x5UvprXauCcIpx62zMcRlkT0SYFb415Kha0tcdG%2BugPFluy99sANCjm5xiO%2F0k3ub28J55aezDdrJvPBjqkAVIZ0COLwp9Zk5HbhfADhTAO1FuzqhBbu3QQBV2xg3cWPj%2FgxxoalOm70lcXfgx%2FIv2LJ8fRwA48j9gb5rQDdw3WANDDVeGfsDTHA0dEverinwKaJx7J%2FvP7lqqa%2BeADrTC1PWQFdYyKAqqb6ZQ2dFEmZ0quREt%2BHv4K2XmIUwxIVn7hRoJJ0O63QB%2BT6VOHZPpT%2FCb8tC1VverTew6B1smv8tFp&X-Amz-Signature=0425ed97d22b096c8ab12150648c0f83b5ce686474d85810d58e04af9be9495c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3UWDOU%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDA7rXMWdPZKrgL3QFjulRuzNAZuP6G1MuCLDvpMEHgOAIhAKD5akPB%2BlUe39Zd4qdB6F%2FUfjITq5ShhEAFF2ikLvx2Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwWmlu6RnlsE6sNRRgq3AO4I%2F9XzuQA9cl%2B6s55oAoD2tSZlmQIXW5fHs7p5QG7ggxF50Z8M9huc124tEKi5vDcfoxseGYHH70FWIBkAf2ASsGUdMVilYbUG%2FTcchdGuSMsCo9pMWHdeIZ%2FkLkH26FQ6yFKQaMmQ%2B09Y9MQ3ltILe4cITPpj%2BPksnt8i%2FR6g20cnNApI4bV1piOcb688ErZ0VEHhXDdsoOkuVejb%2FvM33WfHMZCYQDmzh7XIE4iv6DkM%2BX6VvQoj%2FYK0UIZBw75BmdaId7L3U8wBx6%2BqQqHCCcc6zJ9IetFbdpzlnPd1EcxLFPq6orGfnIjcS09OIW2sgJWeIsvTPSJvp0eZ%2F51RUEwh%2BukB%2BpX0MDktx1h1%2FD3O8Z%2BoI2DpwtdYAQWA8WJSFWa6JvQRjHz6fOj%2FY2jDWvV72ehb0CpFNK0LNLgWvsPK8ArUQzS9WVghlTQgQY%2FdYdJGxo2E6pPUzTfHdOV6zELwOHlXcPtZHxkHyPsJ3tQIpaFIBq78jgDKYqXjr%2BGOzbnSQW5oHo1ytI4GxDWo2mvjV%2BhWWeU5s5OC3QLF8irVFoh8x5UvprXauCcIpx62zMcRlkT0SYFb415Kha0tcdG%2BugPFluy99sANCjm5xiO%2F0k3ub28J55aezDdrJvPBjqkAVIZ0COLwp9Zk5HbhfADhTAO1FuzqhBbu3QQBV2xg3cWPj%2FgxxoalOm70lcXfgx%2FIv2LJ8fRwA48j9gb5rQDdw3WANDDVeGfsDTHA0dEverinwKaJx7J%2FvP7lqqa%2BeADrTC1PWQFdYyKAqqb6ZQ2dFEmZ0quREt%2BHv4K2XmIUwxIVn7hRoJJ0O63QB%2BT6VOHZPpT%2FCb8tC1VverTew6B1smv8tFp&X-Amz-Signature=92e2752ca4aaa889067a142f97f822c71358c37c37e1f048b27c1c05d2f28f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3UWDOU%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDA7rXMWdPZKrgL3QFjulRuzNAZuP6G1MuCLDvpMEHgOAIhAKD5akPB%2BlUe39Zd4qdB6F%2FUfjITq5ShhEAFF2ikLvx2Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwWmlu6RnlsE6sNRRgq3AO4I%2F9XzuQA9cl%2B6s55oAoD2tSZlmQIXW5fHs7p5QG7ggxF50Z8M9huc124tEKi5vDcfoxseGYHH70FWIBkAf2ASsGUdMVilYbUG%2FTcchdGuSMsCo9pMWHdeIZ%2FkLkH26FQ6yFKQaMmQ%2B09Y9MQ3ltILe4cITPpj%2BPksnt8i%2FR6g20cnNApI4bV1piOcb688ErZ0VEHhXDdsoOkuVejb%2FvM33WfHMZCYQDmzh7XIE4iv6DkM%2BX6VvQoj%2FYK0UIZBw75BmdaId7L3U8wBx6%2BqQqHCCcc6zJ9IetFbdpzlnPd1EcxLFPq6orGfnIjcS09OIW2sgJWeIsvTPSJvp0eZ%2F51RUEwh%2BukB%2BpX0MDktx1h1%2FD3O8Z%2BoI2DpwtdYAQWA8WJSFWa6JvQRjHz6fOj%2FY2jDWvV72ehb0CpFNK0LNLgWvsPK8ArUQzS9WVghlTQgQY%2FdYdJGxo2E6pPUzTfHdOV6zELwOHlXcPtZHxkHyPsJ3tQIpaFIBq78jgDKYqXjr%2BGOzbnSQW5oHo1ytI4GxDWo2mvjV%2BhWWeU5s5OC3QLF8irVFoh8x5UvprXauCcIpx62zMcRlkT0SYFb415Kha0tcdG%2BugPFluy99sANCjm5xiO%2F0k3ub28J55aezDdrJvPBjqkAVIZ0COLwp9Zk5HbhfADhTAO1FuzqhBbu3QQBV2xg3cWPj%2FgxxoalOm70lcXfgx%2FIv2LJ8fRwA48j9gb5rQDdw3WANDDVeGfsDTHA0dEverinwKaJx7J%2FvP7lqqa%2BeADrTC1PWQFdYyKAqqb6ZQ2dFEmZ0quREt%2BHv4K2XmIUwxIVn7hRoJJ0O63QB%2BT6VOHZPpT%2FCb8tC1VverTew6B1smv8tFp&X-Amz-Signature=e8e1340b0cce9b39f4c7ecbd584f072dfa313731910e4db5652414b0337d417f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYZWC63%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCCnjFkGemG3l3PFpgaqOhEXY3T%2B%2FGwSdH%2BvWTCWDm8yAIgIRaqIedyQDnvyip%2FqbdtU5KORPFPWM9ykLZdw%2FR2xcEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDDYQDGaSFkZD7bQyRSrcA6%2FTJkbmrP0p3d2j%2B5zvIwQ4T5TAnzbKxLlWdTe5ivTcLH1rpTr9GFMdMWZYYbyBfaXmjzPaw9DTHv6bj4AHEtWxd%2BPzFUFhR89wBp9uQDiRwhP21dkEFh71E8VQNEJ%2BNy4YuDpdUJzwppOECGMX56CEDuuXMGnXaEv0qEbBycbWmwqUn0utIM9gXOojQWEyludvc4IJNZtv1BcbEhTTTMPaYM56UohRJQ2UMv%2BhK9EbQrBc3FkBfT8kG7eX7HcOFGJkQ5HhAOISlhwCbnPmLx9i%2Bhxy09i9bBNskAc8FlHc8C3LkqxOG9tRKvmIztiZ7XA0a9dG6%2BkLCERO3C7MccN0gr24HDBYLxPqRDqOaxjjfdeCZo0YWgDiiUzP4Iv7UnJ4xuDXOLkiIvxEuYTyFdYX%2BggCiVjpPxJ62%2B1fT6YKOzT2oN3xn32tel%2BQFMt%2B3zSYDstyE3TXNzedtpUiGatcZPhF%2FIMDVCtx2iFdrGYHtlRpyWUKDIvcKGChjyZckvqkthQZflMhFWSMsHWpnH%2FrxeB07di9N7dMCCmYbT9alIiSU8pGhyQyxHuHWtdJh3EWGd5CidMJhomJx6Nw1roUDNEGgpWqzXANZ48z3MUp9VeTvSazoc9uvpWkMKSsm88GOqUBA20hHD8Qsb5Znm4lP6psJ7I82YybFIj0h2x5XbX%2BbrXrxikSclQj8Q5lqUImOGGf4ecKz1nrjtOPYxy%2BhJr6e9ePfMq%2BnxViwsJck6Bz2S%2F8y5hgdjFYehLp7xVY%2FhQXf60rzFzQcVEGD0RLQV5BEyTRkm5PvQriPBPXa%2Fh0SLT9jx4%2FxWKBBXiTjeYKpQ9d3%2FmBNGShyam1dS2WT4QJpFrqtz98&X-Amz-Signature=b63ea3d2fbecd50537adb2e609aae33e41ff2d845c4c9f360536ec2c53f9eff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666PTF4EN%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDacVfY5zUzatl32lL6FVkrDcN1WUUqmma6IRkzU0knsQIhANhX6TpqyAjSUQkivjLim97IhlQQyQD5eMoi8v2DVFjBKv8DCCsQABoMNjM3NDIzMTgzODA1Igyia6t1Eb7ElKm07ncq3AO5LKv0lNxUnZHwdfa0dCzB5G0KHHHYuH6Lvpy5KKGobaTIQHDbW7BkAJWs9va4N97iyW9iKa6gk0UAZXqCEDNDAE6n0UOrfJD3qNGkrZE5r1%2Bdvh5Ib5FHtqX12mjYW1JIcJ0Qob9nrT%2FfptjL1Eg4%2BzFDfV%2BzFcO4GukfjzA1I7WLVvmM1zQorzC02Odxa5kw%2B1ky%2FFHHY2ZCkKUqnvZynqAMe9QZ6tiaI9yqWKmb3zRoTyviEr4VmHEAgV3FPNR%2FPP8e%2FnQ5S4JldvgtoQ7475BMMi837nB5Nvd%2Fy6fdxbj%2FkajGV0yre20r3w3Zxf%2Fc%2FoW7bezP%2BxzEQBxBSPQ6ZDohKIdd9aWjU%2FU2Rr4jjCx7ufA71nPbbqTlD7kD%2Bvq0Fq%2FIy%2FdqlKZVt%2BPVEq8TAy9t4k7eeU9s%2B5gkWPsbYAhIMipj%2FuHFk%2BLvO7ph9SZUKrwsGsVuzOL81TJ%2FG0W4X68DrX2iqDE8Gyn7JHlB3lD8Y2ZbyJGLUhlTU6R0fC2RJpi2fYvm7UF0176Kjw36uuuY75kt7YhJUPdfZ8XbQhyGKNlGuf%2BAdlTJ1X0a84LEd%2Fm4TUV%2BeCvwlR00G0nFL1wMNL9pmBqntV6ADCOLFP3yZjtmAXHFk7ez%2FTCeq5vPBjqkAQGwkU3T4bi%2FCrzY2s3QmvqfRSaVuOG3aXgbeOVMO%2BF5guaoFlzUZdDukopvLqYAWd3pAQvu76eZgmn%2FNpt7BMn8qNAk66D6d%2B4dMUg5iH5Vqyox2HVNuOkI%2FlsDXdH%2FlXfqf7TpuuVU1%2BvTU6%2B0nsken5e5qv%2F1J0zuWOcNYngTku7CXslXi57ksfiIIZCAUacKvZzedbyHSo3G5RT%2BermGqaXc&X-Amz-Signature=b3840961609bcf36540328fe65db26c74cd472523d47352e5f9e18305c146c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO3UWDOU%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDA7rXMWdPZKrgL3QFjulRuzNAZuP6G1MuCLDvpMEHgOAIhAKD5akPB%2BlUe39Zd4qdB6F%2FUfjITq5ShhEAFF2ikLvx2Kv8DCCsQABoMNjM3NDIzMTgzODA1IgwWmlu6RnlsE6sNRRgq3AO4I%2F9XzuQA9cl%2B6s55oAoD2tSZlmQIXW5fHs7p5QG7ggxF50Z8M9huc124tEKi5vDcfoxseGYHH70FWIBkAf2ASsGUdMVilYbUG%2FTcchdGuSMsCo9pMWHdeIZ%2FkLkH26FQ6yFKQaMmQ%2B09Y9MQ3ltILe4cITPpj%2BPksnt8i%2FR6g20cnNApI4bV1piOcb688ErZ0VEHhXDdsoOkuVejb%2FvM33WfHMZCYQDmzh7XIE4iv6DkM%2BX6VvQoj%2FYK0UIZBw75BmdaId7L3U8wBx6%2BqQqHCCcc6zJ9IetFbdpzlnPd1EcxLFPq6orGfnIjcS09OIW2sgJWeIsvTPSJvp0eZ%2F51RUEwh%2BukB%2BpX0MDktx1h1%2FD3O8Z%2BoI2DpwtdYAQWA8WJSFWa6JvQRjHz6fOj%2FY2jDWvV72ehb0CpFNK0LNLgWvsPK8ArUQzS9WVghlTQgQY%2FdYdJGxo2E6pPUzTfHdOV6zELwOHlXcPtZHxkHyPsJ3tQIpaFIBq78jgDKYqXjr%2BGOzbnSQW5oHo1ytI4GxDWo2mvjV%2BhWWeU5s5OC3QLF8irVFoh8x5UvprXauCcIpx62zMcRlkT0SYFb415Kha0tcdG%2BugPFluy99sANCjm5xiO%2F0k3ub28J55aezDdrJvPBjqkAVIZ0COLwp9Zk5HbhfADhTAO1FuzqhBbu3QQBV2xg3cWPj%2FgxxoalOm70lcXfgx%2FIv2LJ8fRwA48j9gb5rQDdw3WANDDVeGfsDTHA0dEverinwKaJx7J%2FvP7lqqa%2BeADrTC1PWQFdYyKAqqb6ZQ2dFEmZ0quREt%2BHv4K2XmIUwxIVn7hRoJJ0O63QB%2BT6VOHZPpT%2FCb8tC1VverTew6B1smv8tFp&X-Amz-Signature=c84d27f0f62f715785a86473e24eef6eee00575baa6467a1f07976a9720eeac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
