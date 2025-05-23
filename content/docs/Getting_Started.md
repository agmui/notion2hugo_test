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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLY7FEY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMTUbj%2F%2BPpJTw15iqKPb0SNPiqsfd7q4PkmFj7HWFPVgIhAMdMqqJQVeoMbQTBJsqLJ69JE0Sh0MPN3DBhaTjfGRW4KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FAJxcFQ3KtgQ6G4Iq3AO61udoDoYkOPeGS%2FfP2TwhMAIyN031bveb4abEzUU1awBNp2BC6z06oTtgqaDeT3mkhldfaJjG0LclpapEfQGoRVkiKQ4cZ7JAg69hudfd5tK2emJYVqXdBtsNqrIwbYlScicPX2NzT4z0i8s20mIHu9rCUDDXeeBY6reSwwPMesqyfGk%2FMON2srEXI3ll1XNmScToBHjWZXXSa%2Fqk3QqExUWkoi0ExAby6Vr0%2BHR82u5u0pGpzTLiWefr%2BBhZfNi8zmyGjqNdr406gH%2Fnm7cIUBbuvojQT2OonVCK1TyB2klxtGA7oIVw%2BuIW35fSzG3zi8wGyKBq7yNtcXLsN%2FmoR2UrB820lPm98MlZ91ci786BJUBVy28vZEClY6K9frS1fIUJmqLhO9ug2FRS0AGyqwF8Mxkt6qjYNDzIowKuckhRQ2Ycu0p8Hps9QXT%2BYHj3ZojHPyc13Ke7PA7vxq88CHsIja2hmVTC61J1Qcg6Jy7y4ASOc%2Bw84vloGIK2N%2BR50mg9FAr5nO%2F2EL6SRmuaEK%2BuYWlH%2FJMi5RL2iUbW86l1b0CtKf0hZl6e1X8XYd1V%2Be7aESFljzkh7aE5yHhzN4PdW271EfWVP89wW88RXyaBQq8d%2FrK7vK%2BGWTDlxMHBBjqkAW1Di%2FS5DjrhZU8FBz0fN6vQ0N8que8LIKvbkXlA6MK4EfAx0qfzqAwAxlSdvJbFC1qV15s9jpSUXq7dtKX8C32UiijBPJg1vgzDlEcUGZlx5OCk1O9Ri9Kul6KX%2FObHtyDK2FcqSNy9aV21jO4drN%2FU%2FQ41R8y7c4p8%2BGOmw9qaEw2DK2qR8poOhJvFckW%2FyuupJ4psW8U46AnOdNBimqj3PJZF&X-Amz-Signature=991472fd775917db71f868061170f05792e1590b7b8778dd67070654c07826aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLY7FEY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMTUbj%2F%2BPpJTw15iqKPb0SNPiqsfd7q4PkmFj7HWFPVgIhAMdMqqJQVeoMbQTBJsqLJ69JE0Sh0MPN3DBhaTjfGRW4KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FAJxcFQ3KtgQ6G4Iq3AO61udoDoYkOPeGS%2FfP2TwhMAIyN031bveb4abEzUU1awBNp2BC6z06oTtgqaDeT3mkhldfaJjG0LclpapEfQGoRVkiKQ4cZ7JAg69hudfd5tK2emJYVqXdBtsNqrIwbYlScicPX2NzT4z0i8s20mIHu9rCUDDXeeBY6reSwwPMesqyfGk%2FMON2srEXI3ll1XNmScToBHjWZXXSa%2Fqk3QqExUWkoi0ExAby6Vr0%2BHR82u5u0pGpzTLiWefr%2BBhZfNi8zmyGjqNdr406gH%2Fnm7cIUBbuvojQT2OonVCK1TyB2klxtGA7oIVw%2BuIW35fSzG3zi8wGyKBq7yNtcXLsN%2FmoR2UrB820lPm98MlZ91ci786BJUBVy28vZEClY6K9frS1fIUJmqLhO9ug2FRS0AGyqwF8Mxkt6qjYNDzIowKuckhRQ2Ycu0p8Hps9QXT%2BYHj3ZojHPyc13Ke7PA7vxq88CHsIja2hmVTC61J1Qcg6Jy7y4ASOc%2Bw84vloGIK2N%2BR50mg9FAr5nO%2F2EL6SRmuaEK%2BuYWlH%2FJMi5RL2iUbW86l1b0CtKf0hZl6e1X8XYd1V%2Be7aESFljzkh7aE5yHhzN4PdW271EfWVP89wW88RXyaBQq8d%2FrK7vK%2BGWTDlxMHBBjqkAW1Di%2FS5DjrhZU8FBz0fN6vQ0N8que8LIKvbkXlA6MK4EfAx0qfzqAwAxlSdvJbFC1qV15s9jpSUXq7dtKX8C32UiijBPJg1vgzDlEcUGZlx5OCk1O9Ri9Kul6KX%2FObHtyDK2FcqSNy9aV21jO4drN%2FU%2FQ41R8y7c4p8%2BGOmw9qaEw2DK2qR8poOhJvFckW%2FyuupJ4psW8U46AnOdNBimqj3PJZF&X-Amz-Signature=4b611d5aea41397cc93d4656ac60d5afeb375e0640506a0c7c3d7b269ee677ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLY7FEY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMTUbj%2F%2BPpJTw15iqKPb0SNPiqsfd7q4PkmFj7HWFPVgIhAMdMqqJQVeoMbQTBJsqLJ69JE0Sh0MPN3DBhaTjfGRW4KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FAJxcFQ3KtgQ6G4Iq3AO61udoDoYkOPeGS%2FfP2TwhMAIyN031bveb4abEzUU1awBNp2BC6z06oTtgqaDeT3mkhldfaJjG0LclpapEfQGoRVkiKQ4cZ7JAg69hudfd5tK2emJYVqXdBtsNqrIwbYlScicPX2NzT4z0i8s20mIHu9rCUDDXeeBY6reSwwPMesqyfGk%2FMON2srEXI3ll1XNmScToBHjWZXXSa%2Fqk3QqExUWkoi0ExAby6Vr0%2BHR82u5u0pGpzTLiWefr%2BBhZfNi8zmyGjqNdr406gH%2Fnm7cIUBbuvojQT2OonVCK1TyB2klxtGA7oIVw%2BuIW35fSzG3zi8wGyKBq7yNtcXLsN%2FmoR2UrB820lPm98MlZ91ci786BJUBVy28vZEClY6K9frS1fIUJmqLhO9ug2FRS0AGyqwF8Mxkt6qjYNDzIowKuckhRQ2Ycu0p8Hps9QXT%2BYHj3ZojHPyc13Ke7PA7vxq88CHsIja2hmVTC61J1Qcg6Jy7y4ASOc%2Bw84vloGIK2N%2BR50mg9FAr5nO%2F2EL6SRmuaEK%2BuYWlH%2FJMi5RL2iUbW86l1b0CtKf0hZl6e1X8XYd1V%2Be7aESFljzkh7aE5yHhzN4PdW271EfWVP89wW88RXyaBQq8d%2FrK7vK%2BGWTDlxMHBBjqkAW1Di%2FS5DjrhZU8FBz0fN6vQ0N8que8LIKvbkXlA6MK4EfAx0qfzqAwAxlSdvJbFC1qV15s9jpSUXq7dtKX8C32UiijBPJg1vgzDlEcUGZlx5OCk1O9Ri9Kul6KX%2FObHtyDK2FcqSNy9aV21jO4drN%2FU%2FQ41R8y7c4p8%2BGOmw9qaEw2DK2qR8poOhJvFckW%2FyuupJ4psW8U46AnOdNBimqj3PJZF&X-Amz-Signature=a28b90135664fb6fe3878d3cb861b1f33f10c900c1da2ee5909d5d9ef4bc6957&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WRX6GX%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCz%2FzJfcLeIxVIsHQHtPe6wfhKdSqUKKOa1thPNhcGmxgIhAPMD3NEzC3tP1K2qVlnfN0yWj8aH9JXtdPguL1f57D70KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIQqrWee171co1g9kq3APQuCpr6SlrChj6oL5j%2FFAZNvW5gYClmvbc0VT%2FgLD%2FUWeprYldjJstsfhwhiMD73u6xvLSCmmeqVzXmKAdMF6IlZyVtJxXgTAnrdOEOVNR8Fk%2BmXYK1lOnOG3uFa2QNKql2QNFC%2BqNo4j9rB15gG4P36xHtDZKb1AqmV1fVQx9UgTsSf57yZqK5pCXCPULCtIU56QOKSsNSrnWaia1xTaU8q0YHnp0d9BWmsyDRmlPZRWtT%2FflZlAld2yBt6WeJFZE%2F8%2FavgTkcFuF%2FrssWDik194kGrmf%2BnWlf1AiC6sMoJ93tTALHs2Os6Pb385WWWUzc5kxe3XqQyWJu97jQKoqM8FIh0GpCJ3QnIIh3wM9BELGJ1ADvhui5k0VVFlii%2BhzSnpZ8zlh6pjqk%2BkGL4W1Yw1Itarv8cXa4NTKmWTb0AZXHdqRm7MEdZ1J5M2YZYwZ1ItpzOnVj99R6I5Gck7PSH%2FXSuqqoe%2FIXoOhBhkrUkuLhChbShegvHn5ACbM%2B%2BGO10Yb%2Bs2OewlsZUCBNE8eG28TGC0S9mfBsppDVKfsvSlAbKbmBObdBw4Cw5dyxsLVKgw591PY9xda0fxIQCkBdIWv9A%2BNGCD8mmI%2BSxn2kdi8u4ggwlsY6UChwjDNxMHBBjqkAVmd9GrSen0Z07%2FyIwYATfJtyz0GjnfHC45FA1arjXGINDMXShg2spOnM2UW8gdhSAa2%2BKoSz4HU%2F9tn83qKXsuKSQnSrZkT8wGs2J7edcGWFkAYvsNA1Y9uEb%2FzRd5AEQbNZu9S6DZY47z7i%2FxHdtt3057W9AI3w09VyLR%2BXycn6bJFazcLKgXGanv60jg%2Bi2ViOa49pZzIoRh5xayXb9gbVQXf&X-Amz-Signature=d435dde29d7f0c75423951634c39390af4179ca0b94d9cda9574db6726b827d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTQ2IXZ%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDeOSrEFIRftaj3AHp87KdIy3VSkis6Ty2wv55aih1m4wIhAItQJJCuHWzHhXnVaSStxOxwoEbpktFONzFXVIyx97g2KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQAXVSCRzMUpQYDpsq3AOuuA2SDDxzQ3uubt3PwZDSntuXOf4pV6C73juhauMsPlQLEUwGc0uazgAUEoCXCu57JvDkv%2FrVm9FvWmPcDzz6s%2BWzFsmAJpLkAHdzrrhj6nGfBHjCfih2WBTp6NunvZrx8w63V1XwxfmJqTR6Q2dbaW5LdI0bvgViUn9oW9auJZ6A%2FJGjACCYJN0Bc3XNm6JAwdS%2BombA8iaP0ObYxHuRfeK%2F%2BntgxwSdFwb6tZgXbVlLViEKZiDv8ZtAwPdo3rewA9m5DTuHRf4%2BR288PdScqohbFfOM2dlzQHp%2FNO2fS544DbsDfxaAcM5GE%2FgK%2Bmwopn%2BNQiDMEvQUFkZG%2Fe4B9vyrCcr6Jf4J2Lt5OfQDnx%2F9QlldTee8mAtkA1opQi3NTatd6Ybed8V9tw%2FGlg26ESVksUxo8FLm3r97KM8XXhSKAytI0KjOwRD9yNbM2iSq1MDPSG58LNsJee2Rl6CCYUcI%2BaK2FCLkDnJ6%2FUiw8uSMNfpI8tnEJTf0STWEvkKQXhPJobLDXEb%2Bn3GB8LxsxVHdSedSCsYvBse9BiK1hnjRY6WOzepwNxnzRRnQVnj%2FJpb2aguBYaYucRCR0B2Sp8UnIuarFjyuBzgXwA6n%2BNBa%2Frh3QPXSrmrAdTCtxcHBBjqkAZThGLVGgR4ImdF%2F1laAQudUhDw1coN8FBtPoq6QIYjztKZYCYmDcQFykEBXDtrWtgM4txvoGNb%2BDWgl4LVNENT9oW6vcsKzHM3z%2FVQ5O0AzCsndi3SXlHAxmXn4Yq8syrf9HzfyE5mcw4VC7o7tGZTJM5XkoCsJeK1hHTq8YZjDJBUMtl8lUyO%2BIeY71DmyQ0ww2J%2BWKPV7EUBYnkqzaIn5IMBq&X-Amz-Signature=4fe6d847ed9799150ae1f0079dd5330a45a80517963bea0916451c7fa5f082a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLY7FEY%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDMTUbj%2F%2BPpJTw15iqKPb0SNPiqsfd7q4PkmFj7HWFPVgIhAMdMqqJQVeoMbQTBJsqLJ69JE0Sh0MPN3DBhaTjfGRW4KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FAJxcFQ3KtgQ6G4Iq3AO61udoDoYkOPeGS%2FfP2TwhMAIyN031bveb4abEzUU1awBNp2BC6z06oTtgqaDeT3mkhldfaJjG0LclpapEfQGoRVkiKQ4cZ7JAg69hudfd5tK2emJYVqXdBtsNqrIwbYlScicPX2NzT4z0i8s20mIHu9rCUDDXeeBY6reSwwPMesqyfGk%2FMON2srEXI3ll1XNmScToBHjWZXXSa%2Fqk3QqExUWkoi0ExAby6Vr0%2BHR82u5u0pGpzTLiWefr%2BBhZfNi8zmyGjqNdr406gH%2Fnm7cIUBbuvojQT2OonVCK1TyB2klxtGA7oIVw%2BuIW35fSzG3zi8wGyKBq7yNtcXLsN%2FmoR2UrB820lPm98MlZ91ci786BJUBVy28vZEClY6K9frS1fIUJmqLhO9ug2FRS0AGyqwF8Mxkt6qjYNDzIowKuckhRQ2Ycu0p8Hps9QXT%2BYHj3ZojHPyc13Ke7PA7vxq88CHsIja2hmVTC61J1Qcg6Jy7y4ASOc%2Bw84vloGIK2N%2BR50mg9FAr5nO%2F2EL6SRmuaEK%2BuYWlH%2FJMi5RL2iUbW86l1b0CtKf0hZl6e1X8XYd1V%2Be7aESFljzkh7aE5yHhzN4PdW271EfWVP89wW88RXyaBQq8d%2FrK7vK%2BGWTDlxMHBBjqkAW1Di%2FS5DjrhZU8FBz0fN6vQ0N8que8LIKvbkXlA6MK4EfAx0qfzqAwAxlSdvJbFC1qV15s9jpSUXq7dtKX8C32UiijBPJg1vgzDlEcUGZlx5OCk1O9Ri9Kul6KX%2FObHtyDK2FcqSNy9aV21jO4drN%2FU%2FQ41R8y7c4p8%2BGOmw9qaEw2DK2qR8poOhJvFckW%2FyuupJ4psW8U46AnOdNBimqj3PJZF&X-Amz-Signature=2187acf43e515cd108f0d06d96be27263569af2499d48a4b1ee0283f7e5d475a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
