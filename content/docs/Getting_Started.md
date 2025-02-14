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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKMTRUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDgvnTfey1DvhZ4xLBCdwIBLHe%2Bvfug5whjGMIGbWOkeQIgYoVHAaJ9%2FDyTWhxxj3K2FsjpY1VjU6E9w9tV6TAHnbIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHqRufDne8gzLijRAircAxnqidUGyrv2ZQ73W0MUjaiI2%2BdBhNvJxMcCeFYVtVEP%2FOBcTdxuKH2bGWakOTAz%2Bms94Okbrbrxkd6gwC9zg062BCgM%2BwVXeI852ldUYPrx86ZQUv%2BEl5aFvzq91PxfbhOdNp0mFjfZbpcioSJALpqSw%2FemP9lf7AtDuTCOXV6zK2zaEjsvEWPdramyT72ZsJAmFSV7RPLUFeHYQ1zl%2BboydinNVn8%2B%2FxDWRjsqStLKRFQYU2pznIPmgI4axBRIZchcPjQfVNEnbMyRgo%2BfFrM5kBtIfD%2Fkd5sZ6%2BbG%2Bm6nkscI3mASPDpB%2BWhDK9sRV6XCkZWb9Y1Tvbwr1CG9NW4X4AgcpMdtscH%2FW7Iw3BfzJigXTZ385QF%2BO%2Fly5zR7zMzU04%2FoPV3EefH3wagFhG48LKeC4GOri%2F93kiSu0KcragrnfKPL4ynTcnIfCQcejdhUOmQltf2qMxdUUgf0maVHjIyCBBTFC9t%2FfAAl8mficFiiSZKgj3stwNrcQVC3MvH2wR2NHvvgXpEu6yHbmtZsawlI%2Bu7Rnx2Sd6NPdWE0vr3pGbIIIfPOrXgEccBOePRG8so1FaiwhF3mWUgQfaA5cNrrHblbKlW2UMUt2mTypc6QYQVkiF3CjMMmML36vb0GOqUBWLt%2Be%2FI5GwIjB5aPokRI8vlGp2htNu7cLO1gvuILIPIqn4uTZJNuCsT%2FrM%2FICZhhRWzkfO%2BPx5FoT%2F6k8twiukGa7RpurTwJxY%2Bn%2F6zTHjRol3iX6%2Bmta89sgl775as1uD67jcvQiC3Zjc1XW89gPQ%2Fo8DEVCz22XXesiyJ%2FRj3lkbHDVqMN1PLf9zhaUdVspJGcN1TrO8I6N1KDXQohep7uRgTk&X-Amz-Signature=724f1c7a1e3944fbdbda0da0cd0fba7687a63e6021720426120217f6c57ebec9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKMTRUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDgvnTfey1DvhZ4xLBCdwIBLHe%2Bvfug5whjGMIGbWOkeQIgYoVHAaJ9%2FDyTWhxxj3K2FsjpY1VjU6E9w9tV6TAHnbIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHqRufDne8gzLijRAircAxnqidUGyrv2ZQ73W0MUjaiI2%2BdBhNvJxMcCeFYVtVEP%2FOBcTdxuKH2bGWakOTAz%2Bms94Okbrbrxkd6gwC9zg062BCgM%2BwVXeI852ldUYPrx86ZQUv%2BEl5aFvzq91PxfbhOdNp0mFjfZbpcioSJALpqSw%2FemP9lf7AtDuTCOXV6zK2zaEjsvEWPdramyT72ZsJAmFSV7RPLUFeHYQ1zl%2BboydinNVn8%2B%2FxDWRjsqStLKRFQYU2pznIPmgI4axBRIZchcPjQfVNEnbMyRgo%2BfFrM5kBtIfD%2Fkd5sZ6%2BbG%2Bm6nkscI3mASPDpB%2BWhDK9sRV6XCkZWb9Y1Tvbwr1CG9NW4X4AgcpMdtscH%2FW7Iw3BfzJigXTZ385QF%2BO%2Fly5zR7zMzU04%2FoPV3EefH3wagFhG48LKeC4GOri%2F93kiSu0KcragrnfKPL4ynTcnIfCQcejdhUOmQltf2qMxdUUgf0maVHjIyCBBTFC9t%2FfAAl8mficFiiSZKgj3stwNrcQVC3MvH2wR2NHvvgXpEu6yHbmtZsawlI%2Bu7Rnx2Sd6NPdWE0vr3pGbIIIfPOrXgEccBOePRG8so1FaiwhF3mWUgQfaA5cNrrHblbKlW2UMUt2mTypc6QYQVkiF3CjMMmML36vb0GOqUBWLt%2Be%2FI5GwIjB5aPokRI8vlGp2htNu7cLO1gvuILIPIqn4uTZJNuCsT%2FrM%2FICZhhRWzkfO%2BPx5FoT%2F6k8twiukGa7RpurTwJxY%2Bn%2F6zTHjRol3iX6%2Bmta89sgl775as1uD67jcvQiC3Zjc1XW89gPQ%2Fo8DEVCz22XXesiyJ%2FRj3lkbHDVqMN1PLf9zhaUdVspJGcN1TrO8I6N1KDXQohep7uRgTk&X-Amz-Signature=e7b80251831ba4522440a8646856983eba52319762e496ee37ebdd13b3080281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PCPG6F%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCqfpl217JwXFoXxZ5VR9omL8HEqL9UVHSeGZwcUVhMUAIhAPhQ3fnm9WcW%2Fx6fVFoiz9LAGnKDHDeoN5kkfh4dYOTcKv8DCDMQABoMNjM3NDIzMTgzODA1Igxy5uv%2FJfYjM%2B8iidIq3ANrBlMf%2B6SUWawhtgK2OfLofAzCStyzCKI1K1CpFzbhHeva4R8HBEg29qdu3yF8VITwnmOVCqUnovXGRSj61%2F2FfLcows%2FGIq3M8rfXY59%2FEpEKfROUv6ugtRuURanjNvmlDdcTWR1LeK6Rav5Ak8eaLz6lhQ9GaTcgGdPUXHzx7ttK6WxSyG2Et%2BbpyozyKYj1tgQk9S3H6uTeDduuciUmctgRtLnAH1ZrfqShJNhZqWCFWUV%2BtjaPBzN1nWM7ClM4Zhd43oOCiy8QpPzYZ591CPI7ZAqYPZKK2a%2BTxmoWB750fzIf7nUYUhzpPqLascCwcqfq2yfUFNCfaOZ9EKpUhNE%2BW%2FSkGTDlpsrtNjpyQjDi%2FWpZ17NO2%2B51KfoYqsZmAy9CF6GtySVF1MCc290gJTqRGHQzDeEsexxX3IyLuxPw6QKIbxKJRzurtPMCXlk0WG8xtDMhSfo09S5CPA3pd9K924ei05NUCzjBO0JKFvASuOJHlxIei0wDaQ7XkF2Lq9MTifW7YO0aieYrSa9gF7BiAlGSyKNZFFc6ca3I8DfVyTweX6WLnhCjKIoPF5FPFFYb6v13waKlCvuuwSpPFM1WbgzBwnZCnNHO7TMHoGBESn55djXBLIyQuDCJ%2FL29BjqkAZjka3qMlgZiL%2FsuPb9u3UuwiO7CshRtnX%2FDFJ%2By5lNbt%2Bv9EFAVSvEU7lFXt8iooVMgnI%2B1fYoAEUQHXfBjWfY4I5lP3IqySv081gUfZKrGHbeSr38GZhp4fcvu9MqX%2FVF9VNEXQurXuxVhS%2BnobWTpzBQeaSY%2B4ZlJzJEwPzE%2BAf94AgDRX79AtIJdBNVANu6Lv%2FZkT5gVlmuW%2BlvJeZwaw8ar&X-Amz-Signature=84a2b96bd1f8cbce3a5f860c2923d7f5b04aac7e70f4c93a3d4a5d5e37f64a4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKRLWFR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHIhi09%2Bf1WwX%2Bo1%2B1F%2BCre0kZZHDfQ6jqgWivh2fWz6AiEA%2Bidl5Ofvac0UaYjzZ1PagkGpvwznCUeMcNr4FG%2BP1rYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPrp7ZqMYIsgYwPbKyrcA%2Bf8eEYdj97FiTq77IqGFpZgKtlKtHNijzcYxbPUwuCgFP5gflsCysSdlmTw3J0DkwgJZFAfPLDc%2FbPxOQZsG%2FK6bMn7XVc856j9N%2Bo47zVftouLl92RQrMZPJxuIM98Z5uTYCqGnopnfJU4Bf1xnpYANjjVu8Rx25p4PK6XhFMsbfBTwkKU1872wtQRUP42%2BlE0pErI20iWi1r5shfGW3H%2FByNco7XGVsfL2fKAwyXkrOI1%2F%2FCAwBw40EkTX%2FaSJf4wstn0%2BdoGP%2FVt0eTRkj1QdpfBeJP6dPScFCFZwNSQ04JiIrAWbV9IHpMniNdNh%2FSOAWOFBypIDa2XaPkzrBufZA7CF46Fg2Qr5Ok5nR8tO3rePt7DRxfEke%2FnPI4YHbGnIImWPrY419gNS3BkNPl8eLsnBi6U5AuCUYQ1aJNtfCGX7jaukPOp4tJa1A36ExNSSiueKix1Tu%2F%2B2ZEoB2r7Ije74NffzNOa7WtpxYrCvITw%2BCi8Bn0Rk2T4vt%2Bj17DZhKroytXi7avejyH2REZ6MKi%2B5fdtOVYohBk8qYCWYLA0VR25Uz1AYAzD82efk%2F3uanGJva3fMklIIPu3v4qZSrs87CjxzKvb%2B%2Bt1Ixh5HUC1vx%2F8NB83TqoxMIj8vb0GOqUBbuiRJEG%2FUDSmrzFY8NxBs%2BI5hDxMGy5rcu3LfPbs%2FjZM9QNNxGd22%2FlNqAt1lYKZuaayjdIguBEp3hLPpiw%2FYcF%2F%2BOK6zO%2BVUsyKNBDCl8t8ggTHfs%2Fo9MdHOd6jiyG3k81ftC0k998v6865mxX2L5rp0AXQh%2FLdHO1Jrr5DbWEiadnbFlKROUkhWvwfYExV0J8JE3VLEE82Yu1XCqkPc2T%2Fu2Tc&X-Amz-Signature=0c4b821e719b0d314c982d3255c7f448545a65c8d295ecf0b9f721d7d82ad080&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKMTRUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDgvnTfey1DvhZ4xLBCdwIBLHe%2Bvfug5whjGMIGbWOkeQIgYoVHAaJ9%2FDyTWhxxj3K2FsjpY1VjU6E9w9tV6TAHnbIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHqRufDne8gzLijRAircAxnqidUGyrv2ZQ73W0MUjaiI2%2BdBhNvJxMcCeFYVtVEP%2FOBcTdxuKH2bGWakOTAz%2Bms94Okbrbrxkd6gwC9zg062BCgM%2BwVXeI852ldUYPrx86ZQUv%2BEl5aFvzq91PxfbhOdNp0mFjfZbpcioSJALpqSw%2FemP9lf7AtDuTCOXV6zK2zaEjsvEWPdramyT72ZsJAmFSV7RPLUFeHYQ1zl%2BboydinNVn8%2B%2FxDWRjsqStLKRFQYU2pznIPmgI4axBRIZchcPjQfVNEnbMyRgo%2BfFrM5kBtIfD%2Fkd5sZ6%2BbG%2Bm6nkscI3mASPDpB%2BWhDK9sRV6XCkZWb9Y1Tvbwr1CG9NW4X4AgcpMdtscH%2FW7Iw3BfzJigXTZ385QF%2BO%2Fly5zR7zMzU04%2FoPV3EefH3wagFhG48LKeC4GOri%2F93kiSu0KcragrnfKPL4ynTcnIfCQcejdhUOmQltf2qMxdUUgf0maVHjIyCBBTFC9t%2FfAAl8mficFiiSZKgj3stwNrcQVC3MvH2wR2NHvvgXpEu6yHbmtZsawlI%2Bu7Rnx2Sd6NPdWE0vr3pGbIIIfPOrXgEccBOePRG8so1FaiwhF3mWUgQfaA5cNrrHblbKlW2UMUt2mTypc6QYQVkiF3CjMMmML36vb0GOqUBWLt%2Be%2FI5GwIjB5aPokRI8vlGp2htNu7cLO1gvuILIPIqn4uTZJNuCsT%2FrM%2FICZhhRWzkfO%2BPx5FoT%2F6k8twiukGa7RpurTwJxY%2Bn%2F6zTHjRol3iX6%2Bmta89sgl775as1uD67jcvQiC3Zjc1XW89gPQ%2Fo8DEVCz22XXesiyJ%2FRj3lkbHDVqMN1PLf9zhaUdVspJGcN1TrO8I6N1KDXQohep7uRgTk&X-Amz-Signature=b2811b626830e7bf5a8f0644abd06192c437291abfd16a17100c40d2a401a130&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
