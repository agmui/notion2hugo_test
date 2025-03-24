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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMBA2NH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtFCim%2Butf%2F72gQWmHqVHchQnrhHYyPv%2BeSLw6zQI4kwIhAOiT7LprDrQr7HQfVgjW8w2K%2FR8LlaF%2B0MjRV1H%2Bugf8KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzssSIAtxPNFYtCv8wq3ANP2IxxWAi6%2FYGntDaJUPfg5lxaa9U5kGYN8e6HbD0H%2B4biaP0YeTxZKjW774bz0In6oLd48LnVsZeu%2FMLgA4kHeN75SC%2BHsEzmh4lpipSkGt1e80OAE72Wtc3tEf04HCKb3ACEukrl4WpWzyqTFTyfkK8GFkBaw%2FbzmqH1wwoyDommvvWLkt2WPBZOF6LL8FyladztErlg4ft8vCJFli%2B6NuThWiED1HerzHI1Ta46NaI7K4ZX4R5sDslxgBWfJZy85qCuTjQYcf3YgInIhMaOmYfiWpzXIbvm4PLIrPwRFARRipFgR91%2Fo4CZaY9lJ6RSNIwYpIdo%2BQWSXe8CDhMJ7zGbMdq6bQghCauH23ng4SGmd0AHCwPEApmNoH8JA5LFh2kl69Go0TxldCMuei%2FVIdQCfdLPxoy2%2BfM%2BAQp%2FNIXFqPiqOKrowN0%2BAAiiZZIK7qhoUmpSA63RHzCv%2F2MCZn9xzdm8I%2FbSCXQFTQ8yu4AqGrydDQu0WQEQ4dSQgRQRi%2BtqwSNECtcSKsYXdFhL3tnbyitYRYcqqOxO6H0vtqC5EF2ebHrUkWVAEQczlMGs%2Bsqy8mEAVJ1sRPhog4apmqADjKXRd4X1TkUyW0dqGHvl0jqszQkPv2Y%2F0DDn%2FoW%2FBjqkAfos%2F0ijBEkI0CwyTcbIl0PBuMv3US2kZRRA6Ck8ImAGr%2BwJQCshuwPrI5JtQCaCrRgna9WCoBy3JmO4K5B4HKu1g2IJ6lHrDuV4nJod49azj7CjIVNg9G6x%2FRfKe7GN2TvK8gPvb1Mr1GqoAPetJq0Yv3WxlDTL2uu8GkOQOlgvD%2FQsSWvaNgVFBQsJOhdEIP%2FRSyejK28qYTXnkgwHKFujPUMQ&X-Amz-Signature=952cd30fd3007b0da9a79bf782a66a7a4cd6a8afe1b93d11d691f2d2805e619b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMBA2NH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtFCim%2Butf%2F72gQWmHqVHchQnrhHYyPv%2BeSLw6zQI4kwIhAOiT7LprDrQr7HQfVgjW8w2K%2FR8LlaF%2B0MjRV1H%2Bugf8KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzssSIAtxPNFYtCv8wq3ANP2IxxWAi6%2FYGntDaJUPfg5lxaa9U5kGYN8e6HbD0H%2B4biaP0YeTxZKjW774bz0In6oLd48LnVsZeu%2FMLgA4kHeN75SC%2BHsEzmh4lpipSkGt1e80OAE72Wtc3tEf04HCKb3ACEukrl4WpWzyqTFTyfkK8GFkBaw%2FbzmqH1wwoyDommvvWLkt2WPBZOF6LL8FyladztErlg4ft8vCJFli%2B6NuThWiED1HerzHI1Ta46NaI7K4ZX4R5sDslxgBWfJZy85qCuTjQYcf3YgInIhMaOmYfiWpzXIbvm4PLIrPwRFARRipFgR91%2Fo4CZaY9lJ6RSNIwYpIdo%2BQWSXe8CDhMJ7zGbMdq6bQghCauH23ng4SGmd0AHCwPEApmNoH8JA5LFh2kl69Go0TxldCMuei%2FVIdQCfdLPxoy2%2BfM%2BAQp%2FNIXFqPiqOKrowN0%2BAAiiZZIK7qhoUmpSA63RHzCv%2F2MCZn9xzdm8I%2FbSCXQFTQ8yu4AqGrydDQu0WQEQ4dSQgRQRi%2BtqwSNECtcSKsYXdFhL3tnbyitYRYcqqOxO6H0vtqC5EF2ebHrUkWVAEQczlMGs%2Bsqy8mEAVJ1sRPhog4apmqADjKXRd4X1TkUyW0dqGHvl0jqszQkPv2Y%2F0DDn%2FoW%2FBjqkAfos%2F0ijBEkI0CwyTcbIl0PBuMv3US2kZRRA6Ck8ImAGr%2BwJQCshuwPrI5JtQCaCrRgna9WCoBy3JmO4K5B4HKu1g2IJ6lHrDuV4nJod49azj7CjIVNg9G6x%2FRfKe7GN2TvK8gPvb1Mr1GqoAPetJq0Yv3WxlDTL2uu8GkOQOlgvD%2FQsSWvaNgVFBQsJOhdEIP%2FRSyejK28qYTXnkgwHKFujPUMQ&X-Amz-Signature=ca4572cd567ed4535f40c399aa3581298f07b184422e00b3447b23e9e381fc6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBTZPHY%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCywBIaIeui37tYAM6kM3CC8ZEN1oQmWzBJOcCG5XLRCAIgcFgULPSq4f6XZaf76XeXiXFv9AZGXMf0qCAUiRqgtI4qiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdY9LprG7RFumQhaircA6rQMbB4jMwUlwsh7uKrjocZFmWcFLOBAXwZgQ%2F%2BEdGkKOpNNk0PC6zqN%2Fr1v%2BXHh9jfMyDkBoLlRDtWdj8RxgZC5%2B%2B81sQ7O2g2o4fInDsYh9KkQatUsXyMp3hNppAFXlGL%2BJPkNWBfvOeMCU13nTrGb%2FQ81LZ3TWiu25yntIO8nYTVgDSvhQLl%2FDwQD1QhrZhsoVS%2FE0SUKFyjBZrfyA3r%2FQTFDKcGHHT%2B%2BjVB%2BGmL3iE6eGDLbBlNd503w8qunBuIjxVaVaFkI9wbFNj%2FRLdwdhY7GIIOLwvrOMUAzVjwCFtkJYPJY1Zu9DRMl7%2FIeA70aUzqkWLifECMZ8G15SWiTS16sxyLytjL2laDWm7RbcUg1dpTElsxVreUcNs%2BhDNhMVSpWya2ASnvMPW6O3jAGUlGK7t%2FbC3G2qU3uyfCO5RP3hNcJc5rpAJIL7berKcQUCAUs1phPpKlqr3jgjdsfGo18c4Tl3esPKoqnpa%2FbhY1SOpbdw426aTQg8ynKF%2FM8BucdEcen80FgoEauR%2Bdm7XeSitU0Gk6HbtIVJQ7J6Aww1iYwkACQ75SxXv5nc9sySxCczoMp9%2B%2FFVR6Hf4yCIkVvUmx9uk4mSWIYBeDlwRSLYR%2Bub%2BgLWJiMJL%2Bhb8GOqUB5fG30J9VMipcqOeAiMn5RoSqDWJ3QgiYu0pAgrVDRBVP3qzvtwR0dT8KEAptD0gnIcNWNmeU9VdAh1GuLteb1N90xTgRRD8AMjTnmF4bVI%2F9PhLfP1G1PhpbWuHeCJiakSjvfKU1nreB%2BSElnubVlcqMTmpHJBshs49joVUxUqBEAlJ1NKuYLk8TEzDxJKaz0et2WVI7nDLlg%2BLNOswmob7FLwzJ&X-Amz-Signature=da35849d78306250b2e2804890816a446f7268b08024bfb74ddc4d934ab0e58b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSY7SMZO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzjDDOvjO9kO5k7m4TFRJ%2FW367GoxHXuHpE%2FeXTO9SkAiEAm9SrpvhllJcdHjlseijQT%2Fk8KIBkcelXiuQFNq9cBHkqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfc7Wjbq61Xy0tCQircA06X%2BUJdqb5Xq%2BtRXuDkTEiDZGQk86feLXtfYvSsHHnn1SMt2P3nyXavMrce%2FBtz3Zj992Hvst3NE%2Bre51sx7HcXg1JlkmzcdWGKzwZ8R2i03yJEgur21H14cALAw8kQSEz2Lati%2B%2FML2mEJ91Dc2iGRaZNj%2FbNDFZSQZDEvRGa4OUqtRnhz8LuzbU3fH7T9PCE46Oj5wEaCst2NqbPcYY7RVlbnntMIaZN3DHUoXw7UGoNaGoVQjWDE3lYaZ4rHOOBCHcqaF68jRyOfNrEIOlvkGOaMQrhVwRJGaHtOqpb8GkCot3kL6gZjzV0i8FQbNfSBzTPOH%2FqjmkjnXBcxGwrbvyzcvVPYTXbn%2Fd3CWMRR2qN3eOuiXHgZNb0UFzpoLoEQ%2FMc7mLTFdI0uebOCty6CjzXVNGPPbSCilitlWqYTUFd4rSphWEfaYP1iDkP4I3wxH6HCudnSkjEgGz%2BBXpeQ1p5T4PtdzS%2B7EwtmwADDmjO%2FpwKHJ3uOSzcbG8N6ocWrPUYCokZO1nqIQwoSbqx6xQLewD%2FKtwKOmAntepkfcVb02gsa7JEZfEHG3jEv2PDuL4pqcj3Q%2Bq%2BBrcquyVCaVbSxwlEFraDeZbYm8BUi1L%2BCx3%2F8%2B1r%2B2OzfMIj%2Bhb8GOqUBeT4uOCYH6MbQxBPh8X7qMc%2FpZlruw1OOjYKp6nPlk3oVOglMfmkZd5xlSpzazqXcjHGXeBXBalyrJ9715HCPv9dXlp22fnMC8uSChSwtE8Ri69PckvDjYMxZaS%2F7TVg9w7klAAjKaeDrY03iRAWAjy0IWZclpx6tmMJLzXp4qKKcQbIzfMs4a2dXcgja26naMgP2Ydi5vhuma4bv%2FU0JlCkB8Hvq&X-Amz-Signature=36b10a53dd6039b62fe237987c8b1ea02d9e31e847abc65d91e125082c733b26&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WMBA2NH%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtFCim%2Butf%2F72gQWmHqVHchQnrhHYyPv%2BeSLw6zQI4kwIhAOiT7LprDrQr7HQfVgjW8w2K%2FR8LlaF%2B0MjRV1H%2Bugf8KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzssSIAtxPNFYtCv8wq3ANP2IxxWAi6%2FYGntDaJUPfg5lxaa9U5kGYN8e6HbD0H%2B4biaP0YeTxZKjW774bz0In6oLd48LnVsZeu%2FMLgA4kHeN75SC%2BHsEzmh4lpipSkGt1e80OAE72Wtc3tEf04HCKb3ACEukrl4WpWzyqTFTyfkK8GFkBaw%2FbzmqH1wwoyDommvvWLkt2WPBZOF6LL8FyladztErlg4ft8vCJFli%2B6NuThWiED1HerzHI1Ta46NaI7K4ZX4R5sDslxgBWfJZy85qCuTjQYcf3YgInIhMaOmYfiWpzXIbvm4PLIrPwRFARRipFgR91%2Fo4CZaY9lJ6RSNIwYpIdo%2BQWSXe8CDhMJ7zGbMdq6bQghCauH23ng4SGmd0AHCwPEApmNoH8JA5LFh2kl69Go0TxldCMuei%2FVIdQCfdLPxoy2%2BfM%2BAQp%2FNIXFqPiqOKrowN0%2BAAiiZZIK7qhoUmpSA63RHzCv%2F2MCZn9xzdm8I%2FbSCXQFTQ8yu4AqGrydDQu0WQEQ4dSQgRQRi%2BtqwSNECtcSKsYXdFhL3tnbyitYRYcqqOxO6H0vtqC5EF2ebHrUkWVAEQczlMGs%2Bsqy8mEAVJ1sRPhog4apmqADjKXRd4X1TkUyW0dqGHvl0jqszQkPv2Y%2F0DDn%2FoW%2FBjqkAfos%2F0ijBEkI0CwyTcbIl0PBuMv3US2kZRRA6Ck8ImAGr%2BwJQCshuwPrI5JtQCaCrRgna9WCoBy3JmO4K5B4HKu1g2IJ6lHrDuV4nJod49azj7CjIVNg9G6x%2FRfKe7GN2TvK8gPvb1Mr1GqoAPetJq0Yv3WxlDTL2uu8GkOQOlgvD%2FQsSWvaNgVFBQsJOhdEIP%2FRSyejK28qYTXnkgwHKFujPUMQ&X-Amz-Signature=c810a2e10b113deadf50ccaee754609fd087607ba0cb11112513759380a2ee32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
