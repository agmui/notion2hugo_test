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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZQ4VTX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawPWOcd%2BonuTib7oztQhtD0t7cAul%2FdSEybLpHX9gJgIgHG4rTAJUn4MpT2OLSiuED2S4waOrmYBJU%2B1dj0fGpdYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU8k4X9HCx3Igye3yrcAxGVmSObVwpQTVmHOSsvsccViQTKiPO9W3IerahD7Bb5cPq9ouMQm%2FLVzfBwEUKT4%2BgfRJnvAP5nJcq%2BgG0VrWhQADc7BmGRSW%2FB9AZLerRX%2FOF%2FwFrD2o2VpdpB1Vim3uAm4zAcPy1sHxlcIdqamWIVftoSxYQ3vcEY%2F%2BrQI5FMbHbiJk9sLxSbXsYkQi3ezYoveofVND%2FdwEDwRGMoa76KcTaGe08LH%2BUylM7m95wYi5%2FRTRK7qfXK%2BBDaCYg6WQZAkb%2FFTzDD7qB2%2BQXoedw2%2BUddLbcyRGUDfLQ3Ru1%2FrEj3IXCezlgW4jQiVnT8gujlOELtJh6Dpg8yon4NyPXIQzLuMxYZeDxdZfHmnGckiQmvxfTYSuQfKJ2QdIvTnY3hsu4IqF3t%2FR9m2SYkCU166huSM8n33%2FXii3miG6Uw2bxLPKUuu1Bwe%2BfnvXLUhNcYC8lYNBGWIwCDgKafx58xnAUA%2BTl1UC41tefnOkQwIc%2BlGrgxuBgCLYwGJiU1xh%2FVc0Kaiu0%2FiRv7n3Xva6eZKNClmUz%2BdEzAPr2nRwulYsiZ83INwmELfFwvOrXWmYjOJKgkevX%2FUjR3eB97lKrgMf%2BiU9PBbD4w2xyUBZKw3jmOQzDVrP76tqIXMNLX28IGOqUBD5e1y4arakETAdAlXU9cLMpo9%2ByzSvs7G44Zy2dcSWnHDmja0P41tO8WOcU2HSoC2o%2F%2BVs3%2Fvqg1mcc6yhE%2FsTMaZoWv9zSHbCQOMBZKI7%2FygHYdoPm7d%2BpBpgO%2BaUxgoVrXdfmSg8fzpjw2DcAeq6CFFwMW%2BsamYsMBw0Hw1bexuEGhZrYApE73Xv5%2BDPKQemaEUhGBTWkazjAulhy2kcHmJgbo&X-Amz-Signature=64f0893715b2732a5bf153cc6d544fb198963414e2bed77c1a8200ce75c933e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZQ4VTX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawPWOcd%2BonuTib7oztQhtD0t7cAul%2FdSEybLpHX9gJgIgHG4rTAJUn4MpT2OLSiuED2S4waOrmYBJU%2B1dj0fGpdYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU8k4X9HCx3Igye3yrcAxGVmSObVwpQTVmHOSsvsccViQTKiPO9W3IerahD7Bb5cPq9ouMQm%2FLVzfBwEUKT4%2BgfRJnvAP5nJcq%2BgG0VrWhQADc7BmGRSW%2FB9AZLerRX%2FOF%2FwFrD2o2VpdpB1Vim3uAm4zAcPy1sHxlcIdqamWIVftoSxYQ3vcEY%2F%2BrQI5FMbHbiJk9sLxSbXsYkQi3ezYoveofVND%2FdwEDwRGMoa76KcTaGe08LH%2BUylM7m95wYi5%2FRTRK7qfXK%2BBDaCYg6WQZAkb%2FFTzDD7qB2%2BQXoedw2%2BUddLbcyRGUDfLQ3Ru1%2FrEj3IXCezlgW4jQiVnT8gujlOELtJh6Dpg8yon4NyPXIQzLuMxYZeDxdZfHmnGckiQmvxfTYSuQfKJ2QdIvTnY3hsu4IqF3t%2FR9m2SYkCU166huSM8n33%2FXii3miG6Uw2bxLPKUuu1Bwe%2BfnvXLUhNcYC8lYNBGWIwCDgKafx58xnAUA%2BTl1UC41tefnOkQwIc%2BlGrgxuBgCLYwGJiU1xh%2FVc0Kaiu0%2FiRv7n3Xva6eZKNClmUz%2BdEzAPr2nRwulYsiZ83INwmELfFwvOrXWmYjOJKgkevX%2FUjR3eB97lKrgMf%2BiU9PBbD4w2xyUBZKw3jmOQzDVrP76tqIXMNLX28IGOqUBD5e1y4arakETAdAlXU9cLMpo9%2ByzSvs7G44Zy2dcSWnHDmja0P41tO8WOcU2HSoC2o%2F%2BVs3%2Fvqg1mcc6yhE%2FsTMaZoWv9zSHbCQOMBZKI7%2FygHYdoPm7d%2BpBpgO%2BaUxgoVrXdfmSg8fzpjw2DcAeq6CFFwMW%2BsamYsMBw0Hw1bexuEGhZrYApE73Xv5%2BDPKQemaEUhGBTWkazjAulhy2kcHmJgbo&X-Amz-Signature=e3c8e40db79eb58e9aa5c5be45446ab8aef4ed2d62d4fca97438c422856b4ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZQ4VTX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawPWOcd%2BonuTib7oztQhtD0t7cAul%2FdSEybLpHX9gJgIgHG4rTAJUn4MpT2OLSiuED2S4waOrmYBJU%2B1dj0fGpdYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU8k4X9HCx3Igye3yrcAxGVmSObVwpQTVmHOSsvsccViQTKiPO9W3IerahD7Bb5cPq9ouMQm%2FLVzfBwEUKT4%2BgfRJnvAP5nJcq%2BgG0VrWhQADc7BmGRSW%2FB9AZLerRX%2FOF%2FwFrD2o2VpdpB1Vim3uAm4zAcPy1sHxlcIdqamWIVftoSxYQ3vcEY%2F%2BrQI5FMbHbiJk9sLxSbXsYkQi3ezYoveofVND%2FdwEDwRGMoa76KcTaGe08LH%2BUylM7m95wYi5%2FRTRK7qfXK%2BBDaCYg6WQZAkb%2FFTzDD7qB2%2BQXoedw2%2BUddLbcyRGUDfLQ3Ru1%2FrEj3IXCezlgW4jQiVnT8gujlOELtJh6Dpg8yon4NyPXIQzLuMxYZeDxdZfHmnGckiQmvxfTYSuQfKJ2QdIvTnY3hsu4IqF3t%2FR9m2SYkCU166huSM8n33%2FXii3miG6Uw2bxLPKUuu1Bwe%2BfnvXLUhNcYC8lYNBGWIwCDgKafx58xnAUA%2BTl1UC41tefnOkQwIc%2BlGrgxuBgCLYwGJiU1xh%2FVc0Kaiu0%2FiRv7n3Xva6eZKNClmUz%2BdEzAPr2nRwulYsiZ83INwmELfFwvOrXWmYjOJKgkevX%2FUjR3eB97lKrgMf%2BiU9PBbD4w2xyUBZKw3jmOQzDVrP76tqIXMNLX28IGOqUBD5e1y4arakETAdAlXU9cLMpo9%2ByzSvs7G44Zy2dcSWnHDmja0P41tO8WOcU2HSoC2o%2F%2BVs3%2Fvqg1mcc6yhE%2FsTMaZoWv9zSHbCQOMBZKI7%2FygHYdoPm7d%2BpBpgO%2BaUxgoVrXdfmSg8fzpjw2DcAeq6CFFwMW%2BsamYsMBw0Hw1bexuEGhZrYApE73Xv5%2BDPKQemaEUhGBTWkazjAulhy2kcHmJgbo&X-Amz-Signature=86eb9cbfb11e83653ebfd0803faddaa28b3affed17544373ecabf7988bd79462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBKGKWQ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYw98IlJqBfTGGF9jE5ZRdp0CfAmk27%2B4Fxop%2B5V9yaAIhALw1EfruSnKmmYocdMgMeroS%2BRaZvFe4RxXz3%2F%2B3IHMqKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp%2B%2FsFPfk6P2xhyCQq3APuPPm7dkkjsqwJG%2BOlFjwEVUa9mhbbYcrZyYgjmQZFG945mXwg6QIIz4N8%2FocuI5CR%2BcjOjG8oLYE1tEE2puG6%2BZvCvaJjmK9chmVEHOWK%2FVORi%2BnfX5Q%2BxRIlVPFEoF6%2Ba5q%2F2i94jbjkCd0icRBt6%2FEVHg9TwNMfzQ%2FueBlJ7XUQw%2FVYHD9gBHe2qYXmEvIrPXGtEbx4pKBWGWeJFQqJ%2FRFpbozmjOB6Rql1RuwkFS9MCoRJvM4t7Vf4a%2FFgmAJ38gpazTte1SSaa6fZtAYWUJ3bGpGrs9KO8%2B8mGjyv2E%2FXw8hxopUqQY4v2DuldF98kj4Zv114DwyLp3W6iNRcmac3VXGj1JNR8fAlub%2FW0IAM4TDY%2F6Carf6lfHfbBCFq%2Bydq1ulOcUEyI8g0epFNkY86jP5g1XRUUSZE6%2F5cWAdzD1vExVNFVganYH4DL%2Ba1EldAjFqn0HHkgic9tbhp6T9FWMw6ibMURFeiAiYXhzSVYmPxV1EZ%2B4slomQ4p84Wko%2BLPDuEeV9uyhiwOQfTquWc6ZVVrQrb3d%2FWExpW4ICrEAXCnLhzNYGRSomX%2BGPyY27dBAiH7B0pzog3UM%2FvjTN3HULDEqV9kTgruDixioX4o6nVrOTSuss65TCdj9vCBjqkAWukyApHTNC7bLtLIu%2FB6j%2Fu3InmdOJ29fRVhe92zsCdglHUzdB7t8TbGKLcq5H6%2FfPnvkyLsOsQNkYhHE8WQlGiZmpFlQaQgHpPK9i53A6Q4tsyRBlezGpzzDrx0CZoTuv9spbZHMHpWiGtizNUpfnErTkROjMVhmJWWIHme2MR8a1n8ucekj6wQ717UrgmATCQuuZb%2BGcivDb%2B0XWsHVBt4ldT&X-Amz-Signature=5983edbc78423faaf243d3057e503609c0f7a203e488ef078ea47e1d45358b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EUOBKP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdTOXb%2BwjwgVVK3h4Wak4gxF5l%2BXgrJraJX0gH%2FnkTzgIgISPORQPaK0f%2FHfXiJ2MJUfTt1YV%2B5Rk0r3FRaYIaX9oqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDLnppRrRIVZSXreSrcA%2BOLfP%2FK2MqGisf7ioElq0f0mst%2F%2B4QbZY1UReFQfBr4J05DGvacuqyCmnFAhEv%2BBF%2BHhuxvmsat9IuZlvQcW%2BtFuJnggCLDRdcQ5kgaQuEiXojx%2Bt2qVDpMhGTy8O9lYnqWhxw9MVDUI%2Bfl%2BukcZd9nS6LuKSAJ9YItY58R4T%2FZAp9vIIWU4XjIDT1CLtGD3XlOPOfY1CupGRsB5pZ1whOlBblfskEIXiLlIoxWCbNf0JtSje8mLsgo77FgBWxzIUIj2f59a6Il3heJEaV8p5jEBbztOe4ONC0umFrfPZHeU6Kbk7xNRLZncAhOMX1lS46wkylwDuUWR3LVjKJWIAMCXYyGLviveD%2FJvOSyU7WLLmm2yuTVqzMi2HySF3NDtkb1%2F1%2BDrzG4vmKoGkXpqRPrnPY5PfcqiRYR5iztuPXYzIkZIO05GZw4uhPturkUcOPBvcpY%2FTJ3qwZeY9XWRtwfBo4ARk3q5DxFEgrG2ww3RYEvoR8oqWgF1qLtMtyizStpsWFkPiyZKwd9va9%2BLetQmNqWYWbB4w6j1m9Uj5vfNwl46GUinwTQHtIFDTB7ORfs0gHTKNcTcE%2BIlGaZLjBaAcPINIfW1ozbYq5dsYdI2qjVojjDp71Pkyg5MOKt28IGOqUBYiCcl9IgQiaXVZB%2FzYLlujwtKta6%2BcXozRDsycRfWhQCx8wrGzfczrSp8Jesy3rvgnZH3io5oEPlYrJxTvzrVSQECqw1%2BffEzKgE6eqBuBFeZGlapPq2N6y2lDp4cZvCd58vj5pyvhRzTwNKLFQIpvEXaaYwhXizRz2AutPPlDVVU7bdSA1gyKpxLMw1uGnlt%2BVhg2Kc6ECrD48iM7gZl7fRd3eE&X-Amz-Signature=e069a8f6c7b43b128df79ea6df9230327955a2865fa2b32b3955b3d1ed5dcbc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ZQ4VTX%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCawPWOcd%2BonuTib7oztQhtD0t7cAul%2FdSEybLpHX9gJgIgHG4rTAJUn4MpT2OLSiuED2S4waOrmYBJU%2B1dj0fGpdYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU8k4X9HCx3Igye3yrcAxGVmSObVwpQTVmHOSsvsccViQTKiPO9W3IerahD7Bb5cPq9ouMQm%2FLVzfBwEUKT4%2BgfRJnvAP5nJcq%2BgG0VrWhQADc7BmGRSW%2FB9AZLerRX%2FOF%2FwFrD2o2VpdpB1Vim3uAm4zAcPy1sHxlcIdqamWIVftoSxYQ3vcEY%2F%2BrQI5FMbHbiJk9sLxSbXsYkQi3ezYoveofVND%2FdwEDwRGMoa76KcTaGe08LH%2BUylM7m95wYi5%2FRTRK7qfXK%2BBDaCYg6WQZAkb%2FFTzDD7qB2%2BQXoedw2%2BUddLbcyRGUDfLQ3Ru1%2FrEj3IXCezlgW4jQiVnT8gujlOELtJh6Dpg8yon4NyPXIQzLuMxYZeDxdZfHmnGckiQmvxfTYSuQfKJ2QdIvTnY3hsu4IqF3t%2FR9m2SYkCU166huSM8n33%2FXii3miG6Uw2bxLPKUuu1Bwe%2BfnvXLUhNcYC8lYNBGWIwCDgKafx58xnAUA%2BTl1UC41tefnOkQwIc%2BlGrgxuBgCLYwGJiU1xh%2FVc0Kaiu0%2FiRv7n3Xva6eZKNClmUz%2BdEzAPr2nRwulYsiZ83INwmELfFwvOrXWmYjOJKgkevX%2FUjR3eB97lKrgMf%2BiU9PBbD4w2xyUBZKw3jmOQzDVrP76tqIXMNLX28IGOqUBD5e1y4arakETAdAlXU9cLMpo9%2ByzSvs7G44Zy2dcSWnHDmja0P41tO8WOcU2HSoC2o%2F%2BVs3%2Fvqg1mcc6yhE%2FsTMaZoWv9zSHbCQOMBZKI7%2FygHYdoPm7d%2BpBpgO%2BaUxgoVrXdfmSg8fzpjw2DcAeq6CFFwMW%2BsamYsMBw0Hw1bexuEGhZrYApE73Xv5%2BDPKQemaEUhGBTWkazjAulhy2kcHmJgbo&X-Amz-Signature=f9138ab34d91d6fbb4fffbb08f1e421908d94dc981d71e48ace019edb2faa243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
