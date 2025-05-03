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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3SPICM3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDK%2FH6fXFDPG1uMnhtudl2PWnXfSg3tWTg01ICu76rQqAIhAOTUSngDHOS9Sq9r5Ev%2Bn%2F1IDTIcBWjGkcACEaMoZ98PKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhcly6ifkdTO%2FTOgoq3AN8RqjIifhnii0M6ulsvDSG2C9XIRyrof%2F4jRVyQ9l1U3iiS8wAtBUG%2Fb60lk6hrEXngYNjvhMNo%2FR8xUaUkhkeBDQ%2BUN8MLXsrWqXTYGF2fbc9UMDyIKg200Y%2FI07N6Ly%2BzIfVZMqo%2BQ4MN3kzBSxgO1dyV%2FX9dgHDRWPDLu62jdErs6chIxf4YH4982h7Q49MaLkTD4JvNDQKSfAfqQ1a7AHGYj%2BfHZ0auJ7WdHby29oPDUw0M2L6AXLqjXZg2kzGPE%2B8FftyJj6vzAxYcurMgQ1%2Fw1efWpyUq%2BCBKIxiSfC23yj0q3cspnNLJFw7lS5qpdwjDnb5bTTHNaafagKMaXG1K%2BJVgUUr8IMX88ovdSM7s59OFS%2BCPo0oVsGrRLMOELD2aHBv%2Fz5dWDNhMGvHIqlo59TbpIOiaxesgFbSX5iuCVRBQyH0O1JyLXKvkLK7OM0SDkV5VHTUZkPlsvcEBw9HXz6p6YAEixCYgif64pB3Ay4izAvnPPOx7fFKk301En1y2Eyk%2F%2F%2BXJYvpQOTdmXavckJ8TUzyQup7WD5WGlcWc%2BRDlW7DuKZA95J%2BPn%2Bf%2B3WWkDbz27UiWLs1K8KAOd3V5PnwdyT4hU7ZxMuZSqyT2xrbDd6Bv0bNHDCu3tfABjqkAWEhxpf0Sh4cVRVQofJHbsFynu5waSS%2FeHTyDsmji3Gu2AdgT7943xemh5Li10OXO3Dtyd15VHDfieOC5sBCKknxziZC0QltD80qAw9Mev%2BiCH4xKF4XzSVvbTpAU4mLew5b5zye%2BbpUWqpnjj3B9vzXf4xjSAtkz9j09aR9bCVtHIoFlQy26pcRlvnkG7buCadmAqzMig2CZtU9dZjeJaHPBpHn&X-Amz-Signature=482e8837582d416b4a0b80fb8365105df1828347f2d8175bf01cfe1f47c10ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3SPICM3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDK%2FH6fXFDPG1uMnhtudl2PWnXfSg3tWTg01ICu76rQqAIhAOTUSngDHOS9Sq9r5Ev%2Bn%2F1IDTIcBWjGkcACEaMoZ98PKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhcly6ifkdTO%2FTOgoq3AN8RqjIifhnii0M6ulsvDSG2C9XIRyrof%2F4jRVyQ9l1U3iiS8wAtBUG%2Fb60lk6hrEXngYNjvhMNo%2FR8xUaUkhkeBDQ%2BUN8MLXsrWqXTYGF2fbc9UMDyIKg200Y%2FI07N6Ly%2BzIfVZMqo%2BQ4MN3kzBSxgO1dyV%2FX9dgHDRWPDLu62jdErs6chIxf4YH4982h7Q49MaLkTD4JvNDQKSfAfqQ1a7AHGYj%2BfHZ0auJ7WdHby29oPDUw0M2L6AXLqjXZg2kzGPE%2B8FftyJj6vzAxYcurMgQ1%2Fw1efWpyUq%2BCBKIxiSfC23yj0q3cspnNLJFw7lS5qpdwjDnb5bTTHNaafagKMaXG1K%2BJVgUUr8IMX88ovdSM7s59OFS%2BCPo0oVsGrRLMOELD2aHBv%2Fz5dWDNhMGvHIqlo59TbpIOiaxesgFbSX5iuCVRBQyH0O1JyLXKvkLK7OM0SDkV5VHTUZkPlsvcEBw9HXz6p6YAEixCYgif64pB3Ay4izAvnPPOx7fFKk301En1y2Eyk%2F%2F%2BXJYvpQOTdmXavckJ8TUzyQup7WD5WGlcWc%2BRDlW7DuKZA95J%2BPn%2Bf%2B3WWkDbz27UiWLs1K8KAOd3V5PnwdyT4hU7ZxMuZSqyT2xrbDd6Bv0bNHDCu3tfABjqkAWEhxpf0Sh4cVRVQofJHbsFynu5waSS%2FeHTyDsmji3Gu2AdgT7943xemh5Li10OXO3Dtyd15VHDfieOC5sBCKknxziZC0QltD80qAw9Mev%2BiCH4xKF4XzSVvbTpAU4mLew5b5zye%2BbpUWqpnjj3B9vzXf4xjSAtkz9j09aR9bCVtHIoFlQy26pcRlvnkG7buCadmAqzMig2CZtU9dZjeJaHPBpHn&X-Amz-Signature=f4a203a3aa17b3fe05fa87edf79afd9406400648ce647dee6acaa065c66585a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3SPICM3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDK%2FH6fXFDPG1uMnhtudl2PWnXfSg3tWTg01ICu76rQqAIhAOTUSngDHOS9Sq9r5Ev%2Bn%2F1IDTIcBWjGkcACEaMoZ98PKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhcly6ifkdTO%2FTOgoq3AN8RqjIifhnii0M6ulsvDSG2C9XIRyrof%2F4jRVyQ9l1U3iiS8wAtBUG%2Fb60lk6hrEXngYNjvhMNo%2FR8xUaUkhkeBDQ%2BUN8MLXsrWqXTYGF2fbc9UMDyIKg200Y%2FI07N6Ly%2BzIfVZMqo%2BQ4MN3kzBSxgO1dyV%2FX9dgHDRWPDLu62jdErs6chIxf4YH4982h7Q49MaLkTD4JvNDQKSfAfqQ1a7AHGYj%2BfHZ0auJ7WdHby29oPDUw0M2L6AXLqjXZg2kzGPE%2B8FftyJj6vzAxYcurMgQ1%2Fw1efWpyUq%2BCBKIxiSfC23yj0q3cspnNLJFw7lS5qpdwjDnb5bTTHNaafagKMaXG1K%2BJVgUUr8IMX88ovdSM7s59OFS%2BCPo0oVsGrRLMOELD2aHBv%2Fz5dWDNhMGvHIqlo59TbpIOiaxesgFbSX5iuCVRBQyH0O1JyLXKvkLK7OM0SDkV5VHTUZkPlsvcEBw9HXz6p6YAEixCYgif64pB3Ay4izAvnPPOx7fFKk301En1y2Eyk%2F%2F%2BXJYvpQOTdmXavckJ8TUzyQup7WD5WGlcWc%2BRDlW7DuKZA95J%2BPn%2Bf%2B3WWkDbz27UiWLs1K8KAOd3V5PnwdyT4hU7ZxMuZSqyT2xrbDd6Bv0bNHDCu3tfABjqkAWEhxpf0Sh4cVRVQofJHbsFynu5waSS%2FeHTyDsmji3Gu2AdgT7943xemh5Li10OXO3Dtyd15VHDfieOC5sBCKknxziZC0QltD80qAw9Mev%2BiCH4xKF4XzSVvbTpAU4mLew5b5zye%2BbpUWqpnjj3B9vzXf4xjSAtkz9j09aR9bCVtHIoFlQy26pcRlvnkG7buCadmAqzMig2CZtU9dZjeJaHPBpHn&X-Amz-Signature=30b89f4b7122d2624f688a50acb78e0ba5a017e0dafa559671d6a14c73efa395&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBS726O%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGGIRIKSpf5rD%2BGB%2FTp%2BvEQ%2BZCOQ4qgjRbe%2BG8fSVzYUAiBL4sgz7w3DLMcBUosn8dXiNbivBOQPAeaM6GoyvLgVVyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbdNbsV1PrYiO25jGKtwD%2Fq3lzAWMW7Jr7vHTncc9JuqDQ5E%2BDEZgyXmeV71DOgroOmS8gGUDFKrM9glvfpyDkE%2FWdmjT7KDwJ5FtuCj2azmmdQfXLLNui2MOYJEx8B%2BzmDOubgtPr6bamZuzFBWdzz298fGkY6RYvQgjMymUTt1hjcZNdiLybq%2FdqWyiurNWGr7alY%2F%2Fj6T61bEb1roO2z0p8YfE1H4APXmBvd4Wu6mAy2jVc1uBR3HYXaDQfZ0P8a13sV24hpEoWGT%2Flw8imx0KyweRTA3TNgre86MdreuVW6MDsvOY%2BI8Mt53lvK2xZJflD8K7YSqgID3rzipogezdgpND%2FSKiqqi8FvSkzeqV4pYg3WzhxPccxiQ1v1HNZEwimW2LB8RLU5pk7kQOtYlqF0m4DyJYy80it7q0Thm%2BG1jLXVA%2FAPUU2%2FZYXWGKyyn4plUMOHOOpgNM97DJ5F%2Fnq2mwjEKP7f7SXG9eei%2F7MXqGyN81Ubti1Ej565gWJpMSrDRzS%2Fu9FslgoUCtrQxmdoltQz053m6bZrn8fcnOYLatSwz2YOWJp3Va%2Baq01xQ4DMjrmT%2F7nXu9rXdtchSEej4poGAv7yUpsOaIzLxLhJ5H6i7rWUx8mm2G6h7wBnPsMfdERmewC%2Bow8N7XwAY6pgFAmEjuuQpcXj0cUEmjg8QG8hMgowbqHmMp13l5uTBiWClWLwy%2B99yJwuvrV8HP0%2BHD0mzPJxCXRCBwiiR86P8ZoE3SueOQaM10%2BF79xXr31ifGmfv3jcoCyGTJqKe0GwwQ6vXEPbNDVDIxq2OuxNC8w%2FhuyjZonUO7j4Qze0yVawXV68X65jxHvyE3QJHngbVzGX7wybV6b6tZnm6g1Cue4yQQ%2FKPK&X-Amz-Signature=af3aeb87222812f9c006a55f005d6646486bc80eeb1b862f18f87dbe21b4d6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PI4HPUJ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCxKhUzBy9AswHkCyNRnMshE0tBfMlCHEpVcACRX4M1nAIhAPi8tG%2BkTgmtdJQ6gwA3tOhGTLOveGpzaJBQ07V8Yzx1KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxyy2eAne62t1V03Wwq3AMtJDP5HPN%2BtHQolK8EfigDnMFCBt64tyAjtpTsKHGaR9q16JVsnG%2BoL98LEWw90DYB3ZMTlnb9E1PxaZYFcZ2SP%2FP0THpdTxTTj%2F8cGj4jVF%2BmqF%2BUDfyaNreLmK%2FJZyTsTX9nTzZ4Lmdj6AQ9OVdpAF%2FsK7oNAJvvMjq%2Fm417HD3Mr3S6ttruvw3eXQ5tEP1sEvxBUMOq5tX2Mo7N%2FDtRQgI3ifZTwfTRWIFqVVY5LL1eVg6jCbRhOpG3lq1ufGMvQFEr0hGNWAlUf3csyPC4ecg88%2FPAJ2my95W64WhZcUe1e%2BAiPgstNdTkOS%2BpN6hG5KtC8QC%2FLWslOmixdvixD2io9DKUSehBD49fFIkb6ZtHZDb3VXeJynO4D91hkQLseXy%2F1cExlPbzvpul%2B00mJ7%2BnlLvTFWeaBZPqirIvMg9Qk9%2Fg2z%2FHv1BMzxifk546x7aGb9YPbQa4ocDYs80bJeVHgzPosb%2BvOVDo72JydZMAKsUa%2FOyvJ4cajZP3VpGPf9agpfMG6UyNfklkC5bzWyaBxkykDlK0AAWzQGDWmdwjYqKIjF%2BFquoJVyQut0sFDUL%2FvdfqTsR83kJNwxVLNDi1Vayg%2FeP7YNHzGTDkhJ2rFWKQjMbpxl7mKDDj3tfABjqkASTV21A5MTl7OAfWGaHaLGIfwR8sHNAVx2CUVhOvOq%2BeKTMtZFgcsIJHtBCKHyUoFJeSAQTRJpNBrS0%2FZEgbBgPSKVimdHxh37bdaZNW40ZpyYRVld%2FyIObjJVAqh9Ty0PaOXYQa5Ax0m1CFLWvPL0iZaPRftD0xy%2Bv0%2BT76IerH8ZFJ4ki9u6uDPYrLK8FGDE4QtZAwVySup8RZgacIF1%2Bn5eqk&X-Amz-Signature=840a5ea6f7c0a0c1c7607eec31ffbffa0070c7cd56383cd487088b525e88050f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3SPICM3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDK%2FH6fXFDPG1uMnhtudl2PWnXfSg3tWTg01ICu76rQqAIhAOTUSngDHOS9Sq9r5Ev%2Bn%2F1IDTIcBWjGkcACEaMoZ98PKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwhcly6ifkdTO%2FTOgoq3AN8RqjIifhnii0M6ulsvDSG2C9XIRyrof%2F4jRVyQ9l1U3iiS8wAtBUG%2Fb60lk6hrEXngYNjvhMNo%2FR8xUaUkhkeBDQ%2BUN8MLXsrWqXTYGF2fbc9UMDyIKg200Y%2FI07N6Ly%2BzIfVZMqo%2BQ4MN3kzBSxgO1dyV%2FX9dgHDRWPDLu62jdErs6chIxf4YH4982h7Q49MaLkTD4JvNDQKSfAfqQ1a7AHGYj%2BfHZ0auJ7WdHby29oPDUw0M2L6AXLqjXZg2kzGPE%2B8FftyJj6vzAxYcurMgQ1%2Fw1efWpyUq%2BCBKIxiSfC23yj0q3cspnNLJFw7lS5qpdwjDnb5bTTHNaafagKMaXG1K%2BJVgUUr8IMX88ovdSM7s59OFS%2BCPo0oVsGrRLMOELD2aHBv%2Fz5dWDNhMGvHIqlo59TbpIOiaxesgFbSX5iuCVRBQyH0O1JyLXKvkLK7OM0SDkV5VHTUZkPlsvcEBw9HXz6p6YAEixCYgif64pB3Ay4izAvnPPOx7fFKk301En1y2Eyk%2F%2F%2BXJYvpQOTdmXavckJ8TUzyQup7WD5WGlcWc%2BRDlW7DuKZA95J%2BPn%2Bf%2B3WWkDbz27UiWLs1K8KAOd3V5PnwdyT4hU7ZxMuZSqyT2xrbDd6Bv0bNHDCu3tfABjqkAWEhxpf0Sh4cVRVQofJHbsFynu5waSS%2FeHTyDsmji3Gu2AdgT7943xemh5Li10OXO3Dtyd15VHDfieOC5sBCKknxziZC0QltD80qAw9Mev%2BiCH4xKF4XzSVvbTpAU4mLew5b5zye%2BbpUWqpnjj3B9vzXf4xjSAtkz9j09aR9bCVtHIoFlQy26pcRlvnkG7buCadmAqzMig2CZtU9dZjeJaHPBpHn&X-Amz-Signature=702dbf69d101d0f0831717f602397e057878c390cc5e39ef489f05dbd2bf3f95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
