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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIJYCVB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDBnQmXkQ%2B31tGeYGtCoi3b%2FeS6nHXAeC2tUzbTQf8C6wIgN3EsuzBu9jL23nDT5K6hHJwn%2FuAu4XW6yqYvg3KLRR4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKVuOZH1gdDpAl0bbSrcAygZHlj9hmDBYOlCJVREGznmUeQwqvP1sXf9of89XKl7cfbOghwWK2G03ezWPV7D9Hf7xoc2tcM6M48dZ%2FPFs7Cd6oi8VLxLfesccqowm%2FzWEoQ44NkCUjgfJec%2FusD1s8e7HGlRCs9x6shjPTys6GD%2BSNqz6N6tkNQrxhF2CXLmxpLtOe%2FMvBQ%2FV5iL8oanTLMCM2CrsaNtWwRzSbgf%2Ftd4AbsTi9g0LljexY%2FUHg%2BBCbDVX%2FomGRBMdFtJqNubjbd0FvJVB2488XdeyhVk14QMFsitx2qiuoN%2BDvb6VOVQ8goN%2BG3SzxN2Nnl7NCysIKNCJCPxlmxXFrzUBU4SkJM378AYhU4eZxevFP8na3M9zM5vC3LVzGEnuNbOwwI4PKq8X35wfuRq1z69fBRY5466%2BLwNOLYRBPQh%2Fz1Ga%2BDOHQUN7jLBhDlK%2BGNmjYPi9AoiLACaTqxULgxl118%2FRhdkmL3CdckRnOSJnXTPSYkuIMKQHimI0NiZ4pm3kLe9DwuBxYkfhnoLQW1k2ycgYmQHGkNm2mMPbTYwnteovXmnKintKlj3upejVyl7sVAb7LKP8cJjl3O7PDQMDEPd5Sv9AHyszH8lX5yemXto1JzGNkDNnXFT0RDFbMN7MN33%2FcEGOqUByOMv3xz0304qOQQ3fnA79MUdZ8TaF0HlnkorrleYnsxPEhZEPBDopRMvZq6E8cE2mcavoHOtFFFfJnGmRZHJiA6Y8nRz7DJfNQqEZ%2FFNN5%2BEtU1jtHdkH9UTATO7qHuRNuQlTJo42sbUwzx%2B9cMsNqzoJCVJnJA9ptil%2FXW2K3jBDRJuT590l8nR%2FHV29kFShJpVsNV%2B2HFULfNiEloOOnLCReq2&X-Amz-Signature=f6484f52b6d1d57188ab48d4802406897e4244e646d1e6b3fd1ac1964a2be51e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIJYCVB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDBnQmXkQ%2B31tGeYGtCoi3b%2FeS6nHXAeC2tUzbTQf8C6wIgN3EsuzBu9jL23nDT5K6hHJwn%2FuAu4XW6yqYvg3KLRR4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKVuOZH1gdDpAl0bbSrcAygZHlj9hmDBYOlCJVREGznmUeQwqvP1sXf9of89XKl7cfbOghwWK2G03ezWPV7D9Hf7xoc2tcM6M48dZ%2FPFs7Cd6oi8VLxLfesccqowm%2FzWEoQ44NkCUjgfJec%2FusD1s8e7HGlRCs9x6shjPTys6GD%2BSNqz6N6tkNQrxhF2CXLmxpLtOe%2FMvBQ%2FV5iL8oanTLMCM2CrsaNtWwRzSbgf%2Ftd4AbsTi9g0LljexY%2FUHg%2BBCbDVX%2FomGRBMdFtJqNubjbd0FvJVB2488XdeyhVk14QMFsitx2qiuoN%2BDvb6VOVQ8goN%2BG3SzxN2Nnl7NCysIKNCJCPxlmxXFrzUBU4SkJM378AYhU4eZxevFP8na3M9zM5vC3LVzGEnuNbOwwI4PKq8X35wfuRq1z69fBRY5466%2BLwNOLYRBPQh%2Fz1Ga%2BDOHQUN7jLBhDlK%2BGNmjYPi9AoiLACaTqxULgxl118%2FRhdkmL3CdckRnOSJnXTPSYkuIMKQHimI0NiZ4pm3kLe9DwuBxYkfhnoLQW1k2ycgYmQHGkNm2mMPbTYwnteovXmnKintKlj3upejVyl7sVAb7LKP8cJjl3O7PDQMDEPd5Sv9AHyszH8lX5yemXto1JzGNkDNnXFT0RDFbMN7MN33%2FcEGOqUByOMv3xz0304qOQQ3fnA79MUdZ8TaF0HlnkorrleYnsxPEhZEPBDopRMvZq6E8cE2mcavoHOtFFFfJnGmRZHJiA6Y8nRz7DJfNQqEZ%2FFNN5%2BEtU1jtHdkH9UTATO7qHuRNuQlTJo42sbUwzx%2B9cMsNqzoJCVJnJA9ptil%2FXW2K3jBDRJuT590l8nR%2FHV29kFShJpVsNV%2B2HFULfNiEloOOnLCReq2&X-Amz-Signature=913baaf19010fa49a8b17736ef9fa7025e921483b592129336ad9b9b7d8be4d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIJYCVB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDBnQmXkQ%2B31tGeYGtCoi3b%2FeS6nHXAeC2tUzbTQf8C6wIgN3EsuzBu9jL23nDT5K6hHJwn%2FuAu4XW6yqYvg3KLRR4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKVuOZH1gdDpAl0bbSrcAygZHlj9hmDBYOlCJVREGznmUeQwqvP1sXf9of89XKl7cfbOghwWK2G03ezWPV7D9Hf7xoc2tcM6M48dZ%2FPFs7Cd6oi8VLxLfesccqowm%2FzWEoQ44NkCUjgfJec%2FusD1s8e7HGlRCs9x6shjPTys6GD%2BSNqz6N6tkNQrxhF2CXLmxpLtOe%2FMvBQ%2FV5iL8oanTLMCM2CrsaNtWwRzSbgf%2Ftd4AbsTi9g0LljexY%2FUHg%2BBCbDVX%2FomGRBMdFtJqNubjbd0FvJVB2488XdeyhVk14QMFsitx2qiuoN%2BDvb6VOVQ8goN%2BG3SzxN2Nnl7NCysIKNCJCPxlmxXFrzUBU4SkJM378AYhU4eZxevFP8na3M9zM5vC3LVzGEnuNbOwwI4PKq8X35wfuRq1z69fBRY5466%2BLwNOLYRBPQh%2Fz1Ga%2BDOHQUN7jLBhDlK%2BGNmjYPi9AoiLACaTqxULgxl118%2FRhdkmL3CdckRnOSJnXTPSYkuIMKQHimI0NiZ4pm3kLe9DwuBxYkfhnoLQW1k2ycgYmQHGkNm2mMPbTYwnteovXmnKintKlj3upejVyl7sVAb7LKP8cJjl3O7PDQMDEPd5Sv9AHyszH8lX5yemXto1JzGNkDNnXFT0RDFbMN7MN33%2FcEGOqUByOMv3xz0304qOQQ3fnA79MUdZ8TaF0HlnkorrleYnsxPEhZEPBDopRMvZq6E8cE2mcavoHOtFFFfJnGmRZHJiA6Y8nRz7DJfNQqEZ%2FFNN5%2BEtU1jtHdkH9UTATO7qHuRNuQlTJo42sbUwzx%2B9cMsNqzoJCVJnJA9ptil%2FXW2K3jBDRJuT590l8nR%2FHV29kFShJpVsNV%2B2HFULfNiEloOOnLCReq2&X-Amz-Signature=77c7bf7543acd28193fd267558bdff8fd00295a45e2f174ddedf07ffbba87e20&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQE6T2R%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD6pm4FqtZA7IvBVJY9yAeZwZu%2BZyOBCga1G0mKluGYbwIgIxPOujtO8Q3ljVgZbA5bCxoMt4qUP6kOoXI3rrmysuYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMam3zlgrdjjmum5GCrcA9xVGv9d4SW77nbpz2hNa4j5ls8GfMbz11yj81NiyHS4Im6MYfwcATZPpR6dAGIEY1DIeQxF44cHOv8ouJHXRtgrY3JANmBdnmvrk9uTqdohU9HnssU6uorOiOtZuOQQV4uoU8v%2BQj%2BU5E%2BbW5Kj10D7wIb7i%2FlDnBDd47k%2Bc6pj%2Flg2E9F4LdRB3E8wfYZ31%2FaYl2D5tpnFSj%2BblTvl%2FRNSJdoswU9wUkykJ88cCDjd4EFkkGAccKi18arYjDBtGVUs3P9dLomeVM7rxz1ThgOtbGJfjeaa6OZVPTJhb11stA0oL72JQMBgicV7DtS8gXSPgOkObRd6dfhUVDF94J%2Bip7oUjWnRnq6IxBesvVEbZsH4ncRnsPYZE7TWJ%2B7XgP6JhpUnXlWVK3Kb47ieDBKNHU%2Fgnhl3ft1LxTFE2iDvr5ssMrGgDk%2FekCD%2BmfGVA9jvkF6JhrXLx7VgmXOONhA6yYv1IQ%2BUYEcGI2IH3D2%2B70Aet48RMUT4xrshKztPf4cRDuxEC7MkWWRnJ0OjoX1zABq0snyGq9YJ0BB15pF9IIXF0FkNeenwF1E07DnFjovSUnH6BwKkErpcnrzUCVwyGOSj5snRl7YBsT6Ckz%2F0eKQXftk8%2FVrevOr%2FMKb3%2FcEGOqUBn4PPo%2B8RllwzUkMpDXJEBdJyCCVNDz3jUIoUlrd1rGGvKUr%2FLtsnTb%2FQtRCRoL8MnJ7XKdGWYL0gR6D6LNBoM6UjbXvaQObCL2exebm38sxkvoNRV7TqCYiPCkySuO71D1UOg6ptO3%2FxZ4EQqDIrwnk9bXAPC5Dq2oOVni41dyRgqFdrdCG7CqRG13IBayAOIC3HCiKO3NCROntO9k3TdfuRqUzO&X-Amz-Signature=6c059e944805ec3445b285a58a2411303296d2adb0c0646519e3af0b16fbdfb2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2LGECB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCfTNV4DgjJhTm8zIAiIuppy3CxAuxHHFfpDDC1mof7xgIhAMDQvAsAQ1VFL7Nq13FUdWYgNcaqh0FUJQ6ud1mGncXCKv8DCCEQABoMNjM3NDIzMTgzODA1Igxgg3i82puAJat4DFwq3AOnsvA3uQcMco%2FPgp6%2FFSo6ys5JIYPnzcQCX722itTcq4Qn6zRMGGi4Cuo%2FoDnvWax8ame6aP4da%2FsyLbR0DC%2FHvphpIw3v3s4wqtDigds3vY9WXp1bXBOuzeceLomzjqynwTjoDITE2wXfV8H7A8Yj%2Fyb7akKsxcCb%2FYc8S94iGLZpzgRSy9fEuHTCEuYrq3Cnlh6oEArknhKszOJxRnd8aQFxid50E6PowaRpwbbY7tKFHlGxE1tB%2BbPGMsVVUl4i9dkVLdIgumUN1%2FEqyW8MwDCeRohQoE%2FxRmvSjXM0r6Sn7sPFcdGC6JGW3gYaHuDiiVr9DUE%2B2%2FQ3w9duMHQ6xtUJIxhCudkTCR3Lq9SQvmfj1FSCXoblwaytosF5gQuRBs%2BZWubFhjSpHouS6%2BPNMeD46RciklheJGhrRCvsytffQUptgG8zfxhAWbCxxZCCnrzW2hyzTvGkIksbPg65TnapdWjNNh31K6unVA9ydydiiMWh1FPb9Yqv6EooR%2FRccl8rsnVvys%2F0Av0ou%2Fnd4NRwQnQXuW%2BR3UfaFxIocZjiD6OFINYW%2B9Ug02%2FgfUXUgZ25xEsv3ErBtW3Jn6GgKFcxH%2FLLtvEa%2BCMWfKDTHeyq%2FannB7lXjp5goTDukP7BBjqkAXs3N98WGv7rQxZxu0kix6E5aJT0f9%2FniNzPue6ZFP0zAmIHbDkqfgM1FGgaA%2BvhAUYkxlJDi62Eh5FjYqqgVHrlhApFkAG9QMXoukifslpfN5JG9Buwp5tqcyrz1XfwRQbwiyeM1XKzeLPyYFAYwTimlsqwYJCjE%2BgDz6gGBMs9R0uSQzQWGo2EbyP8gtTIxCeEfNFzsOqWbbQ0zYMyzolCLqyE&X-Amz-Signature=4edc714a199ba0235f6f8d887c7fb312a29101bd53eb449dab889c784893ae06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIJYCVB%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDBnQmXkQ%2B31tGeYGtCoi3b%2FeS6nHXAeC2tUzbTQf8C6wIgN3EsuzBu9jL23nDT5K6hHJwn%2FuAu4XW6yqYvg3KLRR4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKVuOZH1gdDpAl0bbSrcAygZHlj9hmDBYOlCJVREGznmUeQwqvP1sXf9of89XKl7cfbOghwWK2G03ezWPV7D9Hf7xoc2tcM6M48dZ%2FPFs7Cd6oi8VLxLfesccqowm%2FzWEoQ44NkCUjgfJec%2FusD1s8e7HGlRCs9x6shjPTys6GD%2BSNqz6N6tkNQrxhF2CXLmxpLtOe%2FMvBQ%2FV5iL8oanTLMCM2CrsaNtWwRzSbgf%2Ftd4AbsTi9g0LljexY%2FUHg%2BBCbDVX%2FomGRBMdFtJqNubjbd0FvJVB2488XdeyhVk14QMFsitx2qiuoN%2BDvb6VOVQ8goN%2BG3SzxN2Nnl7NCysIKNCJCPxlmxXFrzUBU4SkJM378AYhU4eZxevFP8na3M9zM5vC3LVzGEnuNbOwwI4PKq8X35wfuRq1z69fBRY5466%2BLwNOLYRBPQh%2Fz1Ga%2BDOHQUN7jLBhDlK%2BGNmjYPi9AoiLACaTqxULgxl118%2FRhdkmL3CdckRnOSJnXTPSYkuIMKQHimI0NiZ4pm3kLe9DwuBxYkfhnoLQW1k2ycgYmQHGkNm2mMPbTYwnteovXmnKintKlj3upejVyl7sVAb7LKP8cJjl3O7PDQMDEPd5Sv9AHyszH8lX5yemXto1JzGNkDNnXFT0RDFbMN7MN33%2FcEGOqUByOMv3xz0304qOQQ3fnA79MUdZ8TaF0HlnkorrleYnsxPEhZEPBDopRMvZq6E8cE2mcavoHOtFFFfJnGmRZHJiA6Y8nRz7DJfNQqEZ%2FFNN5%2BEtU1jtHdkH9UTATO7qHuRNuQlTJo42sbUwzx%2B9cMsNqzoJCVJnJA9ptil%2FXW2K3jBDRJuT590l8nR%2FHV29kFShJpVsNV%2B2HFULfNiEloOOnLCReq2&X-Amz-Signature=df7c7e4f8f50fc6893cea45225b2d35e6aebfb691da31cf1c90de905424d58f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
