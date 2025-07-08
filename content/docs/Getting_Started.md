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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN6R2U3S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCcO5rSugE5qny%2BKUeSl7j6x6LunKIveERvNUmOjm6J3gIgeUhD6odiUDJ9tvJWYNoyX8PHsd5qBpGd%2B%2BFNeUcFmskqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUUkXA8dW80RcQO9CrcA3WcCwc%2Bn1lZnrOa7aitbGOtE4l53n1qxULrXcR%2BpodY3v1zabSgrGiJUyYlouFRy7l3uaNGr5LEG%2B2xMSu%2Bt5zUSclX0nM8G8guucQMTPT%2FzupY2gjrLHrd5wh5ViPrqVsKc9JGp37G0HK0d9vBKlRDclezwsCVS6Jt1dBJ5bxrBEKq50JXYso2UfxXlL492e9XUl3KoNFsa7SlAQJgoVBZM1t8Uyh4VIOQy9cD%2BCU1E%2BBsSuQKa2VWMBLMyEpptIXqzoysuiaY9qp6GdkdfyE8%2B%2BfryvD2l2GRQZz1uU6ePa1ag01vXAf8WDqloFgtoVPpjvCapvP2HEPctcMwXj9lcoKcLXpfR2N9TGfhCAiwxKsM%2FpIytIl1KlRF%2FKq0tCII5746G07iQ4X%2Bkv8GHY%2Frvv5cF6kFe2Sgd%2F1w%2F4ERFdcGAM8Z07CXgOhAN7mpZvyprQAdkGZBPdkXO%2FzeDW2KKhFU3XQkscQFmes6V1ZU%2F4963xWsXUEAmc%2Fal7blLuktBR8m9PswhSo1w6iL%2F6%2FcVkZG0vuVSdnUs0F44Nl%2BOilZKtPg7szwOnMC6mClvAQQIIN9FFEMvjWlnvJfNHQ%2Bwwk5RakyEgNiCnAsWdWr5naoUMH%2B5Qwn5xMfMKeEssMGOqUBbOBnssuXJjl2RrbbhHRpui53XmUfWurJ%2Fjvg4V%2F3iUOKa4kOcQp6hA1hneIeC8PXEtF7REmns%2FpTXyeaPEQBdTyKUTbiLwP1xU9%2FFC6%2FH%2FPbDvaFSj%2BFftiFmDwrgKbEff2K5xN%2FA7C%2FBIVLTt66ht7TM%2FsWS49qYvl5zPzkLK4k3pcsW386MhTYChDkElhSfE52ZiiBQxjZc9rYeqyX616e1SHg&X-Amz-Signature=39d7e230a9a1833a1eb144e69023a9ae0a35f819d099087d67d96a8cd38da6a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN6R2U3S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCcO5rSugE5qny%2BKUeSl7j6x6LunKIveERvNUmOjm6J3gIgeUhD6odiUDJ9tvJWYNoyX8PHsd5qBpGd%2B%2BFNeUcFmskqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUUkXA8dW80RcQO9CrcA3WcCwc%2Bn1lZnrOa7aitbGOtE4l53n1qxULrXcR%2BpodY3v1zabSgrGiJUyYlouFRy7l3uaNGr5LEG%2B2xMSu%2Bt5zUSclX0nM8G8guucQMTPT%2FzupY2gjrLHrd5wh5ViPrqVsKc9JGp37G0HK0d9vBKlRDclezwsCVS6Jt1dBJ5bxrBEKq50JXYso2UfxXlL492e9XUl3KoNFsa7SlAQJgoVBZM1t8Uyh4VIOQy9cD%2BCU1E%2BBsSuQKa2VWMBLMyEpptIXqzoysuiaY9qp6GdkdfyE8%2B%2BfryvD2l2GRQZz1uU6ePa1ag01vXAf8WDqloFgtoVPpjvCapvP2HEPctcMwXj9lcoKcLXpfR2N9TGfhCAiwxKsM%2FpIytIl1KlRF%2FKq0tCII5746G07iQ4X%2Bkv8GHY%2Frvv5cF6kFe2Sgd%2F1w%2F4ERFdcGAM8Z07CXgOhAN7mpZvyprQAdkGZBPdkXO%2FzeDW2KKhFU3XQkscQFmes6V1ZU%2F4963xWsXUEAmc%2Fal7blLuktBR8m9PswhSo1w6iL%2F6%2FcVkZG0vuVSdnUs0F44Nl%2BOilZKtPg7szwOnMC6mClvAQQIIN9FFEMvjWlnvJfNHQ%2Bwwk5RakyEgNiCnAsWdWr5naoUMH%2B5Qwn5xMfMKeEssMGOqUBbOBnssuXJjl2RrbbhHRpui53XmUfWurJ%2Fjvg4V%2F3iUOKa4kOcQp6hA1hneIeC8PXEtF7REmns%2FpTXyeaPEQBdTyKUTbiLwP1xU9%2FFC6%2FH%2FPbDvaFSj%2BFftiFmDwrgKbEff2K5xN%2FA7C%2FBIVLTt66ht7TM%2FsWS49qYvl5zPzkLK4k3pcsW386MhTYChDkElhSfE52ZiiBQxjZc9rYeqyX616e1SHg&X-Amz-Signature=889e0a2bab692928b18bb8bc4ffdc33742e9b33a929b8d46810556b64c2c69ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN6R2U3S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCcO5rSugE5qny%2BKUeSl7j6x6LunKIveERvNUmOjm6J3gIgeUhD6odiUDJ9tvJWYNoyX8PHsd5qBpGd%2B%2BFNeUcFmskqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUUkXA8dW80RcQO9CrcA3WcCwc%2Bn1lZnrOa7aitbGOtE4l53n1qxULrXcR%2BpodY3v1zabSgrGiJUyYlouFRy7l3uaNGr5LEG%2B2xMSu%2Bt5zUSclX0nM8G8guucQMTPT%2FzupY2gjrLHrd5wh5ViPrqVsKc9JGp37G0HK0d9vBKlRDclezwsCVS6Jt1dBJ5bxrBEKq50JXYso2UfxXlL492e9XUl3KoNFsa7SlAQJgoVBZM1t8Uyh4VIOQy9cD%2BCU1E%2BBsSuQKa2VWMBLMyEpptIXqzoysuiaY9qp6GdkdfyE8%2B%2BfryvD2l2GRQZz1uU6ePa1ag01vXAf8WDqloFgtoVPpjvCapvP2HEPctcMwXj9lcoKcLXpfR2N9TGfhCAiwxKsM%2FpIytIl1KlRF%2FKq0tCII5746G07iQ4X%2Bkv8GHY%2Frvv5cF6kFe2Sgd%2F1w%2F4ERFdcGAM8Z07CXgOhAN7mpZvyprQAdkGZBPdkXO%2FzeDW2KKhFU3XQkscQFmes6V1ZU%2F4963xWsXUEAmc%2Fal7blLuktBR8m9PswhSo1w6iL%2F6%2FcVkZG0vuVSdnUs0F44Nl%2BOilZKtPg7szwOnMC6mClvAQQIIN9FFEMvjWlnvJfNHQ%2Bwwk5RakyEgNiCnAsWdWr5naoUMH%2B5Qwn5xMfMKeEssMGOqUBbOBnssuXJjl2RrbbhHRpui53XmUfWurJ%2Fjvg4V%2F3iUOKa4kOcQp6hA1hneIeC8PXEtF7REmns%2FpTXyeaPEQBdTyKUTbiLwP1xU9%2FFC6%2FH%2FPbDvaFSj%2BFftiFmDwrgKbEff2K5xN%2FA7C%2FBIVLTt66ht7TM%2FsWS49qYvl5zPzkLK4k3pcsW386MhTYChDkElhSfE52ZiiBQxjZc9rYeqyX616e1SHg&X-Amz-Signature=0e5d36559029e20629a79a4041a87a16a9143ef293a59f53dec46743f1b3a0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFBPWQW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCAjjCRTqy3MVVY%2Fr2L%2Fg7nO321KyKu5JSRQGQOs9nOcgIgHWIoh3BZIjMMLdrxwTs%2B2LSxUiKNqluQVhX4Te%2F4rykqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUuk7y6WWey8kcYzSrcAxRjE4VVRqbt%2Fl5Nmuj%2F%2Fhkth4X5HnHGVkm0NINto1DF%2FZ78Yn%2FtKgEkFiTcCVDFbc0WbtijJDHOa44V0OxUO%2FP3pYZSviwgPtDCUIX%2FK%2BPPgUexoj2ILSqhfsIdbD0oerGDN5tHEeI%2Bd4MR4kmqoNIzsj%2FNgkGkvPUXv9stbduY4ubiOH6Jb731z4H4d7Oize%2B6FeB8zXlIpSXL8UZZ3qtmRKORM0EUyPqDewBKthBgI%2FRSzMncWP%2FZ4GoPqCxRbPUwvTFyNt3732mpD4oIeczc26pfNiCucDj7couSYNlEF6vBLv3pJBxBgIv24DUSJXic2%2F7xxWaOvmlyyEs%2Fw93rfLp6ly4C%2BnaFksrZyqm9hP0XF25yn0vzELuzpSAxqcPSLIOwjLmLKgYQfinAhTxdSxOSLlWQxYjCZD8jU2ZA6%2B4Y3mY8Yufhajyl6rP6N3s1hHdt345HlA18riaqpCkQPxqjFnXobwt0d40QNTqkn0UFR4CibZ31cgAJ4q1%2BpsNb9n514SFuGqalI8k%2BqcfIxllslwyrNo%2Bib6kLX83HxuXt6jOiPUv4zKT7SX%2B4q%2F3UyU1I2rkExdxHoay0PFbEjNZiU%2Bpot7EREP2n0VoaOR%2FDk0azV54mihN0MIyFssMGOqUBI2cc5%2F3nYjbN12IouZkM1LLdh5Fb3CQ6WFu%2BVvN9rk9%2Bn%2FuPspddoSShDLvWblSgBbNvXCNjjrmlgXJ1VqKQ8RoEyZ9Ov94dbBaMJuMpDP4%2F3loup5F1VLl7p8qlwOwawmCx%2FLkCtAWaR5tlpOE47YkfzabbloUSpua6ZVN%2BCm02zFf6UndxeVOMbo8T7x290DjScBOIGwDvDbqc2JkN%2FJkoYWiC&X-Amz-Signature=a817598368e0aa6afe3a27517a89b97ba81f72c3d4dcfeb4fa2fd2af304867ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2W7CWJI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD%2FGeRA4MFsgiT9ohFOY%2FmxXE4Hy5cfNb%2FKw5jh2W42GAIgB%2BNhIODBmAW6xqCeP0%2FzJs5LQsU5nFIoLqCroltlXQ0qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcLhuGIjmyyoaC9RyrcA%2BXw53OocP1F8%2BvJZugoPytMV9knEKhyRFsJNUA53d3WmyhpxdSny18XginDFeRQYqlDT6AAe8Lf1Z%2B6cRfYkgWaWWKf0LsCIhml5UsCOAmQoYGfV8ELl%2B3zw6z6z6DDO3tNMB7NfnVUgFdGCVDFon623wL7oDN0QUG083eeqB5WLoZvxHawf9%2F8O1bfHd7VcRD7xsgFPONESmom12X%2BIL9XdKJ9MBzGAhXZIpojHf8GaFRjKEPFUQqNOm5XJafHF%2BoqjHC3UK2bU1vnsmcuMHx9KAIPhq0vf24cfKfasH0P0Xq0vptvrIrxg7KUB13v56d2U%2Bw002yzHBzwkdmHcQaBOvEvLRsDw8j0eOdihpeu4FPns77ymk5LTS36j5nlJwJKOjAikylexCs00EDhAkripSOeTiJTQ8fx%2FtiVJO6gsdntNOnnM7FoAw14xMOnBsOuamxPeExq89Sy5KwCYyIfq5UMlkQdMp3t80qRcDl%2Fg%2FqDTaaxTNQzOTiWQzgxzBuDM208FXDQzMweQ42Vydg0wRJDSG3G4bpILOPbMMVe3tVYNkLR7sFg7gK4VdTm5qbVNOS6GI%2BeBrtGbutnemMPxR7ELozVyxo2E2RdB9sB2gT4X%2BcafCiriNGRMP2DssMGOqUByzWtVp6q1wtAYs6ekXJ4FlwUxxvpm3BhuyrY6T%2BjRUdcQ5Nbgp%2BJzAtgLWoDoz5MEHsnGxpX8gc9VpepxNc8NU4Y592EuOboAN5fEya0WiNOSoh9PwbCvHqx%2ByLJIa666dETG18lUvidNbAkmqMH3JwhlM2s7dyEv2IFlaNGpsFRHTJAUquEgxcCCtLKQmspE6pArk1jPWD1W2XU1C%2BoKKoyBN7N&X-Amz-Signature=3a8c26f5657c1b976f1b7d574b288c9b81404131e9d7fd561b59687cb7d61541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN6R2U3S%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCcO5rSugE5qny%2BKUeSl7j6x6LunKIveERvNUmOjm6J3gIgeUhD6odiUDJ9tvJWYNoyX8PHsd5qBpGd%2B%2BFNeUcFmskqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUUkXA8dW80RcQO9CrcA3WcCwc%2Bn1lZnrOa7aitbGOtE4l53n1qxULrXcR%2BpodY3v1zabSgrGiJUyYlouFRy7l3uaNGr5LEG%2B2xMSu%2Bt5zUSclX0nM8G8guucQMTPT%2FzupY2gjrLHrd5wh5ViPrqVsKc9JGp37G0HK0d9vBKlRDclezwsCVS6Jt1dBJ5bxrBEKq50JXYso2UfxXlL492e9XUl3KoNFsa7SlAQJgoVBZM1t8Uyh4VIOQy9cD%2BCU1E%2BBsSuQKa2VWMBLMyEpptIXqzoysuiaY9qp6GdkdfyE8%2B%2BfryvD2l2GRQZz1uU6ePa1ag01vXAf8WDqloFgtoVPpjvCapvP2HEPctcMwXj9lcoKcLXpfR2N9TGfhCAiwxKsM%2FpIytIl1KlRF%2FKq0tCII5746G07iQ4X%2Bkv8GHY%2Frvv5cF6kFe2Sgd%2F1w%2F4ERFdcGAM8Z07CXgOhAN7mpZvyprQAdkGZBPdkXO%2FzeDW2KKhFU3XQkscQFmes6V1ZU%2F4963xWsXUEAmc%2Fal7blLuktBR8m9PswhSo1w6iL%2F6%2FcVkZG0vuVSdnUs0F44Nl%2BOilZKtPg7szwOnMC6mClvAQQIIN9FFEMvjWlnvJfNHQ%2Bwwk5RakyEgNiCnAsWdWr5naoUMH%2B5Qwn5xMfMKeEssMGOqUBbOBnssuXJjl2RrbbhHRpui53XmUfWurJ%2Fjvg4V%2F3iUOKa4kOcQp6hA1hneIeC8PXEtF7REmns%2FpTXyeaPEQBdTyKUTbiLwP1xU9%2FFC6%2FH%2FPbDvaFSj%2BFftiFmDwrgKbEff2K5xN%2FA7C%2FBIVLTt66ht7TM%2FsWS49qYvl5zPzkLK4k3pcsW386MhTYChDkElhSfE52ZiiBQxjZc9rYeqyX616e1SHg&X-Amz-Signature=8de657e960ddcebef7db78821af6ce35d4a7bb72294bd0e0bd492a7e505790e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
