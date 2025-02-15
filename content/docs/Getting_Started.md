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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QSP2ZM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEX9iKzf8Hfu2OE7zBOkl0UnWnk%2FaIyvpLtaOPQXT7dNAiEAsxVG0Loa8EaDkr1I6OKuFOSoJyk%2Bqh3h8VCoq0YwbGkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKFVD0cnDOi4ysvH%2FSrcA93lQDiz6qAihC6gzeqJ6MYzkM%2Fi88XJi5iRuawn40Ojxzpn7I1QBFu2eWnqTxp%2FeR%2F%2FsnhocQ%2BuxMMQQoAMxvpm4qUTOIvmdmuz%2Bq4BuLYtUOE78su2mzHNOzDIZf%2FE7S0jkofb%2FgtCu6xft7T7HcEW0IJNN2t38DSTPWrDSZ0K%2BhPUn3Idgp9g9y%2BH722mQQHU2FPa19al3KFlL48nIKiUG5c9BRMg0w2kP%2BeCq2EiUtxSXMx%2B3xfdlI1RYWNXN8df55gHWxR9jkUXqBchr2YMwBA8KFncm75umnzy2lJ9t9WK2YZrOsavByG0MmLFreCmb8JtPwTOVcWx7xrbKN2amadhFdKa0ScCDwkmfi3vq7a2RdxLNGG2ot%2BHtu1f76nvPRoMp5R%2FiOXyViUd%2F8ZaqEdwI1nbKQ1BiPuGSd03zAxApCneI0rhIaZ7E3C%2BHX9oLuDM9m4ilJBcmPE9HUrb3x5Yp%2FeJejNiNPio9pO24gwfBHbWtrTv6XHkKK7GyuiT%2BycY0%2BuR26Q4j3xFbYoGuoOBndH%2FewNRHOSTm8zO8oMhp5ycvUex%2FDsFJCwPfRQDWcdZZTBpyaTVTG4s3k6SdctOafyUWvDrY9el5JCpWX9KNAVQqOpkJwBZMNrswb0GOqUBYcu1zfpwFDrjJFmb3Oi%2FIZzSBto4rYNblMP%2Fken0fV1Ykz5JF%2FAnn%2F8O8Q0ZMjUn74Xa7ZJFa%2FRzZ4tDPaPrr0NsFNe51rDr7nAVxUARdGH3VK1uXIgrTGl3YP4PKXn3lVRZep41ao%2B1t1uimJO1B8AslWF7whwDZbNkqvQLhJI5trFworYLh5sPLdBfbGsOVWJWwmzM7%2BuBCfvRagUikAI3dTvq&X-Amz-Signature=db49e206b8d7470d0f6c08791cf40a661e31ef62db0b279e9a890e76dbf432f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QSP2ZM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEX9iKzf8Hfu2OE7zBOkl0UnWnk%2FaIyvpLtaOPQXT7dNAiEAsxVG0Loa8EaDkr1I6OKuFOSoJyk%2Bqh3h8VCoq0YwbGkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKFVD0cnDOi4ysvH%2FSrcA93lQDiz6qAihC6gzeqJ6MYzkM%2Fi88XJi5iRuawn40Ojxzpn7I1QBFu2eWnqTxp%2FeR%2F%2FsnhocQ%2BuxMMQQoAMxvpm4qUTOIvmdmuz%2Bq4BuLYtUOE78su2mzHNOzDIZf%2FE7S0jkofb%2FgtCu6xft7T7HcEW0IJNN2t38DSTPWrDSZ0K%2BhPUn3Idgp9g9y%2BH722mQQHU2FPa19al3KFlL48nIKiUG5c9BRMg0w2kP%2BeCq2EiUtxSXMx%2B3xfdlI1RYWNXN8df55gHWxR9jkUXqBchr2YMwBA8KFncm75umnzy2lJ9t9WK2YZrOsavByG0MmLFreCmb8JtPwTOVcWx7xrbKN2amadhFdKa0ScCDwkmfi3vq7a2RdxLNGG2ot%2BHtu1f76nvPRoMp5R%2FiOXyViUd%2F8ZaqEdwI1nbKQ1BiPuGSd03zAxApCneI0rhIaZ7E3C%2BHX9oLuDM9m4ilJBcmPE9HUrb3x5Yp%2FeJejNiNPio9pO24gwfBHbWtrTv6XHkKK7GyuiT%2BycY0%2BuR26Q4j3xFbYoGuoOBndH%2FewNRHOSTm8zO8oMhp5ycvUex%2FDsFJCwPfRQDWcdZZTBpyaTVTG4s3k6SdctOafyUWvDrY9el5JCpWX9KNAVQqOpkJwBZMNrswb0GOqUBYcu1zfpwFDrjJFmb3Oi%2FIZzSBto4rYNblMP%2Fken0fV1Ykz5JF%2FAnn%2F8O8Q0ZMjUn74Xa7ZJFa%2FRzZ4tDPaPrr0NsFNe51rDr7nAVxUARdGH3VK1uXIgrTGl3YP4PKXn3lVRZep41ao%2B1t1uimJO1B8AslWF7whwDZbNkqvQLhJI5trFworYLh5sPLdBfbGsOVWJWwmzM7%2BuBCfvRagUikAI3dTvq&X-Amz-Signature=bc12544207ce4e11f3628484e0716801cd75b41665e0907e3ac017f377bb4ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDBII2W%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDlp3gzxqzxu1hF0Si41DSfy5IQ7nglFVpp0GRvIPLndwIgOWg8O%2B4luoCkNPKRNhO2woOR7%2Fb2xTu%2Bc9dtKewe8Qwq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDL2y8PyVjzxzO%2FFQLircA6nQV9Pzlwe0HF4qwVejW8QG%2F%2FzVsuzHeorX3zE0o4sXNFSzF2%2FTlCIOOeee3ct2udnQXMcF0vWfM7eSdiJhsKnup%2F6QxZ%2FLYqfsYDXvd%2FFlPqak5Gh%2F6mGzV7VPKrzjavZVyYotVaPkci%2FBPNpKqKFnhGVu8aCC2qq6W0KZq12yoUgNcHTF8awFdZbJslVgxR1vFSNqpj17TuQ1qMjFZ8Pel0%2Fg0rEsk36Iuct4%2Ff9EAZHWFS5FOhGbfaUlS7TCOw8mpjYNoLb70GgT%2Fzj3ncRMTyHaRJFNclJl%2FTGLIPBsygIzWMeL4wj2dmD8qdcrohgOQIukYQYmDUFX8PuwcTmLcmmVHabi56q15WAmxOTCFT%2BSagAc1ojfpd8B7KlLpjgrp26XF7tB48rSq10%2Bqw7QJowpFFwx4IRmpZyAQBkjy074%2BmcAQukBRYlDcddfZgXRjgqToLjAfQxiG4vrRc%2FfaEVZqST4WComXII6Yn87NS1%2FjPKNFTi2G3IkQOzeMs2Xkc6hJuCGxGps6Uwx4%2BABdPXfntiak2be%2BGuAa49cdatswdN8toqOmCn27d%2F7YvvF4jDmXAiAqM8mh89ShamU6L9YwN7p5G4BzBFeCNDN5%2BXsuvbAsR082QnhMM3swb0GOqUBZldlvTQ40egBwWH%2FzuNmi3H%2BOy4Z4HQZCzPSpAbz%2FP0atDJSCX7Lwa1p83x87HdzX4LDyQV%2Fb8UYMEMH3N0J0Nxvhuk2nGMZqbLhgAiH%2FhActsvf2drwTYbCdP5tvUP1iKYE8uECOGq8zdW%2Fh176YlxMzQHBTApW2YngAMIfWehdBhOtlOTgI9KRK9t%2Fb3Ev1d17UvohXaBy2OdyvlAeRgDDu9Bt&X-Amz-Signature=752bd53e8f642e59323f95faa123afc1225d43fa1391db82ff02706330cabbfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NBYY7S%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBgpEWX3dwLkg40b04Eyx10c8LojcsMSiR2NF2XHmcDLAiEAopg9kcn4dakqOO4kKuaWwVaXe9KBVWFkjGZI9e0X8PAq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGjZ9QRPmy6GtK7S1yrcA66yW%2BMSbuheNKVly%2BKm670FrqqBggJfIrDLwKGUw%2F%2Fama1zBhJoGpxsTitY9wPpD3%2BHo2Mub%2BTHpToNico%2FHyws74rv4vBEjcO9%2BIKy94s%2F6k8WTaxGyIPmznKkkeM9R5jorZIgyQw5RSf5%2FZUj7hWlGrxvs9qpd4J0dr2p8XhHtOMLcJnNlguZ5Gl5FagAYlmNyR1CYpGwsc401CaHOJUTeBcNWbtTiM9njYNc%2FO9lS9xMJvOFwzjV7GCynH8IWbQYgS0mfBqbQmc90l84fvtsTPa%2FRZCZ%2B7W0DvWI1PYkO8Wcf6wATdi6ZTQEljU0uJF1V6AWtN8ArD4TocL1guh%2FHgcJBypvAV8GtkL0d79LOwEzcYzmV9cRnBqGpwk9ftAYL96sfj9764GIhXGnMF7uoCR04Fe%2FeE3pEnWOKVJC1YoqPPz%2B7f8TzMZxva3d4kUXeB1X8UMC8jTfFxBG7MdB%2BUXvQ06%2BemFiBoloWfWofxPrGztLcIb2JHUfc5veRB4CxdiQNf9xiKlXsibPQlByaKrcPXq%2FmjGC%2BayaM64grJY%2BjmsGieJeh%2B3JGfpExwbLECMTNGdJUMeb6zB5OHSvE1HLuFbuHdpWcTA%2FoMB3ImTSI7GEdWvdyZa8MMHswb0GOqUBmB%2Bzi%2FEnGpZiquySPnya1yhIgaiuHSWwx1g%2FC9fClLQ3qZHvYpXK2tfSrhNoE7SHEtltrImV6%2BLykG73WbKbSkVxnmiIuVPKM0NetLpy20d2VMi4tu8nVMY65Gozslk%2Bw9vi%2Fut4%2FECotq0E%2BFKooNOWmUHXSDz7rnC9oQCfStZnndLhFthEOu%2BuvfGJT3BkwLoNQDnqfHXvmZ2fcYR30eYe7%2BJ5&X-Amz-Signature=21fd383b39b54a5ed1e8a23fbb75713f010e86b235e15900ac29bbf06f7c611d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QSP2ZM%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T121136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIEX9iKzf8Hfu2OE7zBOkl0UnWnk%2FaIyvpLtaOPQXT7dNAiEAsxVG0Loa8EaDkr1I6OKuFOSoJyk%2Bqh3h8VCoq0YwbGkq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDKFVD0cnDOi4ysvH%2FSrcA93lQDiz6qAihC6gzeqJ6MYzkM%2Fi88XJi5iRuawn40Ojxzpn7I1QBFu2eWnqTxp%2FeR%2F%2FsnhocQ%2BuxMMQQoAMxvpm4qUTOIvmdmuz%2Bq4BuLYtUOE78su2mzHNOzDIZf%2FE7S0jkofb%2FgtCu6xft7T7HcEW0IJNN2t38DSTPWrDSZ0K%2BhPUn3Idgp9g9y%2BH722mQQHU2FPa19al3KFlL48nIKiUG5c9BRMg0w2kP%2BeCq2EiUtxSXMx%2B3xfdlI1RYWNXN8df55gHWxR9jkUXqBchr2YMwBA8KFncm75umnzy2lJ9t9WK2YZrOsavByG0MmLFreCmb8JtPwTOVcWx7xrbKN2amadhFdKa0ScCDwkmfi3vq7a2RdxLNGG2ot%2BHtu1f76nvPRoMp5R%2FiOXyViUd%2F8ZaqEdwI1nbKQ1BiPuGSd03zAxApCneI0rhIaZ7E3C%2BHX9oLuDM9m4ilJBcmPE9HUrb3x5Yp%2FeJejNiNPio9pO24gwfBHbWtrTv6XHkKK7GyuiT%2BycY0%2BuR26Q4j3xFbYoGuoOBndH%2FewNRHOSTm8zO8oMhp5ycvUex%2FDsFJCwPfRQDWcdZZTBpyaTVTG4s3k6SdctOafyUWvDrY9el5JCpWX9KNAVQqOpkJwBZMNrswb0GOqUBYcu1zfpwFDrjJFmb3Oi%2FIZzSBto4rYNblMP%2Fken0fV1Ykz5JF%2FAnn%2F8O8Q0ZMjUn74Xa7ZJFa%2FRzZ4tDPaPrr0NsFNe51rDr7nAVxUARdGH3VK1uXIgrTGl3YP4PKXn3lVRZep41ao%2B1t1uimJO1B8AslWF7whwDZbNkqvQLhJI5trFworYLh5sPLdBfbGsOVWJWwmzM7%2BuBCfvRagUikAI3dTvq&X-Amz-Signature=c7ff5e0afa35f7a8d1990542aa50e54fa93c8a3569b0e5a87e975d8e76b61eac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
