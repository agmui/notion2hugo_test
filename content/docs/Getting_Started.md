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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TK7HWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDiHKcS7TjidEY99UdI2k255%2FL13MAogi%2BWvq%2F8f6aLRwIgfgaYHvMfvFfPP57lCrmlm3VoV05hE3qo25F7P%2BpbhNYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKjr9v%2FrwTS0%2BEipOCrcA9tQc62E4QXGsJwshbdgl%2Fk55XaUTzS6ZMaBNLVC2%2BLCuCH8G4tXKfI%2BckfvLjZPA4HYyvFU900LsjxkvA0PmV9mzK4RQ0xNCW085IHRpOdS4Vfugp4NPt20pNOcj2V%2Fwa1%2FEYZSw2RGijlSXwZEzF%2F%2B4TmhVytBhUQh9lhogWD8G6h5XV9j0eGG1tZ9A9R5sb2ZNSXB%2Fyj%2Bq4WHcJBH0Y9%2Ffm6H%2BjyP2c8weotL9VNJBqB%2BhlgER1fRLPbtKDbLpk19k93WYdspwJqphF%2BdQDDedfm19FwAJDL7tuIiBmc3wzenvpT7Cb9DPAtu7xbs%2F9VSwNivBbM2%2FLfuJsUD7hYHUq63ujTUV70xL19tBhWgWYux7RLm2Rz6s9iM47W%2BPaxuWxlPrTEvcHkMJM0vEBvWYxRlHKyGUTlBy%2B%2FpOLMdJDfisChbYeAHaWJP%2FFHANG8W1ClMT5yCWOQsHFxrbOdmfk9vyKXGFDc%2FkK%2BAC%2FO3zKbtjm5%2BRJsn6zs4v4vVj%2Fb1WyCcyDtu3d3jslylTh98HVTcjTgP%2FDVOKTbbZJL3OSGtNWO7YVocCxDAC%2BEr4stDKBOXigdczGhC50Ym53B0bMQ47LwHnfiE6XR9eEVnTOobfqI0h7yroH2sMI%2BcvskGOqUBgClrR0ycndXqfTsggMdR0RD%2FDNxagLmzt%2FRd0PBkRAmHAkKJvsKkZm5Rc8G3OxRHesKmCWSU21wrSMh%2BVGFaJdwvxOdKIcCW33vJuxnSS38oEQYwigoCWKkjjYVz2aF5KSUZkBvRBd5yz6m2uY8GBDTuW74Tegs40d684mGunvEHcArIE002VZvFIvXv6JqLzqEzZ4g2uhpkVASM5tDUXvzAQlVo&X-Amz-Signature=72cc861e2fbd5cae7d1cc860dc9a4030391dc325f0812cf67694db992f319c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TK7HWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDiHKcS7TjidEY99UdI2k255%2FL13MAogi%2BWvq%2F8f6aLRwIgfgaYHvMfvFfPP57lCrmlm3VoV05hE3qo25F7P%2BpbhNYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKjr9v%2FrwTS0%2BEipOCrcA9tQc62E4QXGsJwshbdgl%2Fk55XaUTzS6ZMaBNLVC2%2BLCuCH8G4tXKfI%2BckfvLjZPA4HYyvFU900LsjxkvA0PmV9mzK4RQ0xNCW085IHRpOdS4Vfugp4NPt20pNOcj2V%2Fwa1%2FEYZSw2RGijlSXwZEzF%2F%2B4TmhVytBhUQh9lhogWD8G6h5XV9j0eGG1tZ9A9R5sb2ZNSXB%2Fyj%2Bq4WHcJBH0Y9%2Ffm6H%2BjyP2c8weotL9VNJBqB%2BhlgER1fRLPbtKDbLpk19k93WYdspwJqphF%2BdQDDedfm19FwAJDL7tuIiBmc3wzenvpT7Cb9DPAtu7xbs%2F9VSwNivBbM2%2FLfuJsUD7hYHUq63ujTUV70xL19tBhWgWYux7RLm2Rz6s9iM47W%2BPaxuWxlPrTEvcHkMJM0vEBvWYxRlHKyGUTlBy%2B%2FpOLMdJDfisChbYeAHaWJP%2FFHANG8W1ClMT5yCWOQsHFxrbOdmfk9vyKXGFDc%2FkK%2BAC%2FO3zKbtjm5%2BRJsn6zs4v4vVj%2Fb1WyCcyDtu3d3jslylTh98HVTcjTgP%2FDVOKTbbZJL3OSGtNWO7YVocCxDAC%2BEr4stDKBOXigdczGhC50Ym53B0bMQ47LwHnfiE6XR9eEVnTOobfqI0h7yroH2sMI%2BcvskGOqUBgClrR0ycndXqfTsggMdR0RD%2FDNxagLmzt%2FRd0PBkRAmHAkKJvsKkZm5Rc8G3OxRHesKmCWSU21wrSMh%2BVGFaJdwvxOdKIcCW33vJuxnSS38oEQYwigoCWKkjjYVz2aF5KSUZkBvRBd5yz6m2uY8GBDTuW74Tegs40d684mGunvEHcArIE002VZvFIvXv6JqLzqEzZ4g2uhpkVASM5tDUXvzAQlVo&X-Amz-Signature=aaa8e26fc01a1731aa0bd5b7b0b1e3aca3144e77b16c732e607ae1b510a03685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TK7HWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDiHKcS7TjidEY99UdI2k255%2FL13MAogi%2BWvq%2F8f6aLRwIgfgaYHvMfvFfPP57lCrmlm3VoV05hE3qo25F7P%2BpbhNYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKjr9v%2FrwTS0%2BEipOCrcA9tQc62E4QXGsJwshbdgl%2Fk55XaUTzS6ZMaBNLVC2%2BLCuCH8G4tXKfI%2BckfvLjZPA4HYyvFU900LsjxkvA0PmV9mzK4RQ0xNCW085IHRpOdS4Vfugp4NPt20pNOcj2V%2Fwa1%2FEYZSw2RGijlSXwZEzF%2F%2B4TmhVytBhUQh9lhogWD8G6h5XV9j0eGG1tZ9A9R5sb2ZNSXB%2Fyj%2Bq4WHcJBH0Y9%2Ffm6H%2BjyP2c8weotL9VNJBqB%2BhlgER1fRLPbtKDbLpk19k93WYdspwJqphF%2BdQDDedfm19FwAJDL7tuIiBmc3wzenvpT7Cb9DPAtu7xbs%2F9VSwNivBbM2%2FLfuJsUD7hYHUq63ujTUV70xL19tBhWgWYux7RLm2Rz6s9iM47W%2BPaxuWxlPrTEvcHkMJM0vEBvWYxRlHKyGUTlBy%2B%2FpOLMdJDfisChbYeAHaWJP%2FFHANG8W1ClMT5yCWOQsHFxrbOdmfk9vyKXGFDc%2FkK%2BAC%2FO3zKbtjm5%2BRJsn6zs4v4vVj%2Fb1WyCcyDtu3d3jslylTh98HVTcjTgP%2FDVOKTbbZJL3OSGtNWO7YVocCxDAC%2BEr4stDKBOXigdczGhC50Ym53B0bMQ47LwHnfiE6XR9eEVnTOobfqI0h7yroH2sMI%2BcvskGOqUBgClrR0ycndXqfTsggMdR0RD%2FDNxagLmzt%2FRd0PBkRAmHAkKJvsKkZm5Rc8G3OxRHesKmCWSU21wrSMh%2BVGFaJdwvxOdKIcCW33vJuxnSS38oEQYwigoCWKkjjYVz2aF5KSUZkBvRBd5yz6m2uY8GBDTuW74Tegs40d684mGunvEHcArIE002VZvFIvXv6JqLzqEzZ4g2uhpkVASM5tDUXvzAQlVo&X-Amz-Signature=0c0af6e1cd80b08a2f707f0bf3ed18068d696f043491bfdd380f2d0ddb871e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YJGX45%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA4YOfA%2BMCPf3TZIwoCWlccYdYMG2zI1E3ox2h7RkTRiAiEAjuwxMrIk%2FYiHhKAJh55t8e6I9nZ%2F4mPvx9S%2FYEuMVrMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJWyx%2BL87kBb5VY1byrcA7TxME9WsVB%2B34ctXi5E9ZVkhJi7qe896RDXfp0af9KNCbw0EEiU0SSsFcNwRrfjO7YSTaOLbxw9cOSUCjVuufeJ0eSMQ9sKfU%2BiVcyXPulY3iFNPEKUX2ML4dXVLrXaDmHSU8vE25C%2FDL8E4ueZb7CpA75Jag8fXEt5qczbaTiVflkDhDOAZjbG%2BNFRP4qzInO%2FhgLyiesBt5NfIhlReatOgIxDVNJVid%2BAsby7SiFKG5Ulajz9MR2k5FC9EfG6KWgGGqu9rPx1FWjkAoRcKbpfUkC8L5KjQsMNa%2Byszj4BsGSDrq1edZMt3TlPPfqN0up96DOstXZyiG0kxIXVj2L%2BUgixmfN5ehQSF%2BFNmX7t2oP7ZibFI86JhAFts3DR1pXjtCXR49j03VX0MqvdEyk%2Fj00i1f0gDyqDulFzv11cm5dTD7sCRvtzOP8XQKoWtOlpZw5%2BymPlj3s0WstOikFZMGs91AAZEaSUMLJQDzqgYjLXQoKo2yKS0w2%2BAmTGpfF%2BbphW5cQUYgPg4xy0I%2B%2BdjcG6sGxB5SbOmUuZnhFymIusjBpelpoTr69pkSg9B%2Br6jtn3wu83ALTic55HxJNEf8ati1%2FIbreL3KvicT3IuZNnJZzq6GTQNA1SMNyUvskGOqUB8MO%2FeZlNu2WxzalNa4acjERCPwGjc7DPwG9XDl%2B6FXpMq8Cr%2BQbhvDrgq2GLhnAnipqhLzg7647plR5GnK0yngGl2af%2FI5GKwsIlWXTSXabhRjnUGTcBkekG3IA6T7AECCzDz8LivtSbfKv65fIZ7owpycmIYzQy%2B13zwHqwLi88e37Fuye3oFMXmXw%2FPSsBXdkZQABhTENu2p9K11g3yNvOvqnb&X-Amz-Signature=f06e6e5c0101387e79222f0aac572d7db12fe9493b39cadcb2def5fd3a304347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IEUC2NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD08rOWO%2FW4n0qXyQXsykO2VItGcEjiBv0avKFqETP6QAIgf4Wz3mD8u7mldnhwncVsMoJzuTL3f37mc%2FLytQ3dRA0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDAS4kVu%2BVlQ2A%2BhGVCrcA87cuXmXluACBI4u0mfbaIZ3tNoHSplDb6qaPBWs3z1sLNnufudK%2FtViJpqy7xtGF2MMSM3rlBKZVtLI5jbfgc13VmX%2BdskdGMlZu47LyT1jx9DVKb5IjSEFLNazB%2B22HyU%2BxpfKAJRZZT%2BuBJU3SwGmskbLRy6V3YmGKySh9olmWmfOL%2Fale5mODyffq9f1VcQb0BTBwE1jCT0B58CJ%2BSD%2BeyjXo%2BwJajtVZyW%2FMCf4g5arG4xAZe%2B036FvnZ%2BaChz1VYh8t4igOQ32iK0a%2BRPJWhNax%2F4jIAH4dNJfjjHsolIK7oynESeMuARvf1Ml%2BMkGWub0WIAMWXzc%2BMpnJ%2FocNpVgkFeRo%2F7FfFbZ22GEknKAJO7u3R8gYbsUF3CRNQ0%2BcFnsnloYOTU3g4XBHI3xKf7tUfd3a2CcM7g1h3Y9I7pOSfOyCRDRz4%2F9X82%2FEwejLPgbXBLG4wY0hcvUhQFixYeRgIhwcfXGK6MnSgZ1bcSZN4epIQzEWX0oYBfpOR3atxRmfntxBMM2szmTzMAciqtCq81CASyjAbmZL6J8VtJOiEkBGdz8kM6LVrv4tshtMA%2BvRBHyvhT%2FRiEW3yBvIrYdFzxn7zo52%2FxlqkbakCASPSB2A4czrIFWMMGUvskGOqUBeK%2F%2B%2Bgm9eKLbxywa3WM2zhpjslsEcL8%2F2Bmwhg0UGqEiNHb50kLMKAa6awH9PoOP33xtHLec0eTH%2B1FrF%2FbxK04bD%2F4mFvWgIcBfmf7g4fgcZnjV1fTPZ8bPKw%2BRfVGp5Cohzl6ESzYQFqLBffQxjlwmReLvAOVwStq9LHn5F%2BH7LpIXh0oTvvvMEOEp39ZrYpcs1LrEvpKR6caGO75itfXnm%2FU5&X-Amz-Signature=2e35aa6adad74d06a8ce8cba5f5e4b6f2c450d1691f44dc8f46b546ea08f154c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TK7HWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDiHKcS7TjidEY99UdI2k255%2FL13MAogi%2BWvq%2F8f6aLRwIgfgaYHvMfvFfPP57lCrmlm3VoV05hE3qo25F7P%2BpbhNYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKjr9v%2FrwTS0%2BEipOCrcA9tQc62E4QXGsJwshbdgl%2Fk55XaUTzS6ZMaBNLVC2%2BLCuCH8G4tXKfI%2BckfvLjZPA4HYyvFU900LsjxkvA0PmV9mzK4RQ0xNCW085IHRpOdS4Vfugp4NPt20pNOcj2V%2Fwa1%2FEYZSw2RGijlSXwZEzF%2F%2B4TmhVytBhUQh9lhogWD8G6h5XV9j0eGG1tZ9A9R5sb2ZNSXB%2Fyj%2Bq4WHcJBH0Y9%2Ffm6H%2BjyP2c8weotL9VNJBqB%2BhlgER1fRLPbtKDbLpk19k93WYdspwJqphF%2BdQDDedfm19FwAJDL7tuIiBmc3wzenvpT7Cb9DPAtu7xbs%2F9VSwNivBbM2%2FLfuJsUD7hYHUq63ujTUV70xL19tBhWgWYux7RLm2Rz6s9iM47W%2BPaxuWxlPrTEvcHkMJM0vEBvWYxRlHKyGUTlBy%2B%2FpOLMdJDfisChbYeAHaWJP%2FFHANG8W1ClMT5yCWOQsHFxrbOdmfk9vyKXGFDc%2FkK%2BAC%2FO3zKbtjm5%2BRJsn6zs4v4vVj%2Fb1WyCcyDtu3d3jslylTh98HVTcjTgP%2FDVOKTbbZJL3OSGtNWO7YVocCxDAC%2BEr4stDKBOXigdczGhC50Ym53B0bMQ47LwHnfiE6XR9eEVnTOobfqI0h7yroH2sMI%2BcvskGOqUBgClrR0ycndXqfTsggMdR0RD%2FDNxagLmzt%2FRd0PBkRAmHAkKJvsKkZm5Rc8G3OxRHesKmCWSU21wrSMh%2BVGFaJdwvxOdKIcCW33vJuxnSS38oEQYwigoCWKkjjYVz2aF5KSUZkBvRBd5yz6m2uY8GBDTuW74Tegs40d684mGunvEHcArIE002VZvFIvXv6JqLzqEzZ4g2uhpkVASM5tDUXvzAQlVo&X-Amz-Signature=75109992923c4a3d17ffafd4f2e81a70f31fd525fc1107d63894d125ef29bc44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
