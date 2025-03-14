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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6QUBCP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmbF6Ry1YKqoCqPzHydqc%2FOipEpS64a47DGnJ5yS83jAiEA8wAF5J4%2FeJbE18SQPqjXcfn0rAnirWYFiI%2Fkr7G%2BwL0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQLs1A%2FLiK3rKuliSrcAwq11r8hpiArQ6Nny2w8myMv0db0a50TbJsX2mTBFL1q4UApU2i4p7WP9IPmuY31w1jg7H02xKso1KsTWpGALA7EthhR3A41NLRjB4hy%2F9fT6tSuXm%2BRvBl3%2BIWx%2F00mqOf2qUXNGi4c9QJbr5jQbGZz9eBNb%2FM2lu66kFL7DukX1VpTcA1wJxERnTGy9ssFTcO408lZd2jCckerfT3KRMi%2FuGjzrVod4Sm3T8iO%2B5uHd6jOy7uuHvDxJIB98K1T7ZaJldWkfyY3XErJtTFTSMTiVdeuaErX5Pz%2BZsho7ZYxtm9W7VoLtefKNsSGD%2FMNeUcf%2Bc%2BtaopqBX112f3HVWRxMLVB7yssshtOMuAJWE5vzIViTOY%2BRk2gnv8Dqq7mV1qX7%2FPADWVPmmUHEskqLn5tNhlWYYBW8fdmmzVlicYhb2ZfPpFHLDbiyM2SCmQ5D8Acp3U2oTtnwe8ud8sZrKU5m2QPl%2BorxK7b922j5QJl7t%2BdHi%2FzK6jTqQ6VJ%2F0zPcYSMjHGolM6XMtfCAKx%2Bck3vnLBek38Lgnd2DrESDUIARM8HQo61OI7aYzWBdKcZRAV5HaCVYt9ETS0wqDd1SwEw7bs7UFLvmsFHXClT0xkiD9c%2BuFLnHaVSCHCMPnQ0r4GOqUBPdODAQtGb070U9wsOG1ssDYpy6xECEjSvkIXPLFu3mvhTrShoQI3QVdw8h5akbb3%2BnbhGyxM8tkVqg0WWpXugPLZG%2FnFAN1gss9bW%2BxGB7hN6yNOBLS9EJImXMoY51oTgvXwBxHDIBDrZMKp6ySAhGdHZfaP6XR7g7%2Fg5lr4Cmx96K8bHUx3bhmxg1NCPDKg6n4fICZsEVJurdPsza5GjwdWICRh&X-Amz-Signature=589998673344a711997d2cada3fe1c20960d9ba408bebd9a39c78baa7957cb40&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6QUBCP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmbF6Ry1YKqoCqPzHydqc%2FOipEpS64a47DGnJ5yS83jAiEA8wAF5J4%2FeJbE18SQPqjXcfn0rAnirWYFiI%2Fkr7G%2BwL0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQLs1A%2FLiK3rKuliSrcAwq11r8hpiArQ6Nny2w8myMv0db0a50TbJsX2mTBFL1q4UApU2i4p7WP9IPmuY31w1jg7H02xKso1KsTWpGALA7EthhR3A41NLRjB4hy%2F9fT6tSuXm%2BRvBl3%2BIWx%2F00mqOf2qUXNGi4c9QJbr5jQbGZz9eBNb%2FM2lu66kFL7DukX1VpTcA1wJxERnTGy9ssFTcO408lZd2jCckerfT3KRMi%2FuGjzrVod4Sm3T8iO%2B5uHd6jOy7uuHvDxJIB98K1T7ZaJldWkfyY3XErJtTFTSMTiVdeuaErX5Pz%2BZsho7ZYxtm9W7VoLtefKNsSGD%2FMNeUcf%2Bc%2BtaopqBX112f3HVWRxMLVB7yssshtOMuAJWE5vzIViTOY%2BRk2gnv8Dqq7mV1qX7%2FPADWVPmmUHEskqLn5tNhlWYYBW8fdmmzVlicYhb2ZfPpFHLDbiyM2SCmQ5D8Acp3U2oTtnwe8ud8sZrKU5m2QPl%2BorxK7b922j5QJl7t%2BdHi%2FzK6jTqQ6VJ%2F0zPcYSMjHGolM6XMtfCAKx%2Bck3vnLBek38Lgnd2DrESDUIARM8HQo61OI7aYzWBdKcZRAV5HaCVYt9ETS0wqDd1SwEw7bs7UFLvmsFHXClT0xkiD9c%2BuFLnHaVSCHCMPnQ0r4GOqUBPdODAQtGb070U9wsOG1ssDYpy6xECEjSvkIXPLFu3mvhTrShoQI3QVdw8h5akbb3%2BnbhGyxM8tkVqg0WWpXugPLZG%2FnFAN1gss9bW%2BxGB7hN6yNOBLS9EJImXMoY51oTgvXwBxHDIBDrZMKp6ySAhGdHZfaP6XR7g7%2Fg5lr4Cmx96K8bHUx3bhmxg1NCPDKg6n4fICZsEVJurdPsza5GjwdWICRh&X-Amz-Signature=138730cfff5d98ebdec460b502dbe053ed13579917f677cb2c4aa66f051b481e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNWNFECT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTWS%2FKnJhBj8J%2ByAa7v%2BpVYDhK7oM7VUVjxViBnpAg%2FAiEAgN1Q8gnyBzb7utOytyOovB90UvYOlkFaAl07FWeUyLIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3GuG%2F%2F97AkcKa4IyrcA3y7VDx16e9277Xx5Ci8UPHFk5pCcaO9zCPw0ejs6HBdX3yZsuZMH5oy%2BNBChs6dDjQv6OWi7rnlUPaQ4%2BZXahocsonxp5YKItf%2Fzwfc3kE5arQeylCPGSTfGoKg6MDG3IG2%2F%2F24g4MssgVrr007Lvk16H4BHXrQBw0uBShziKD1LNFWphrHC1jKtCs1C8SxIERrH4sfcQEZICBMu6uqpgsAM7meY1NTjAu0FZV0Zm8iXy5AG0Ns%2Fbz5ZDBuA7M7dIs8%2B0stJW%2BHjFc4UoAMnqxCTDfbVOr3Q13Z1YceyyIh7jK%2FZDAKvyqGeveGKSbW8jC0UJ9jz6ur5beFsaxCCypMDcUyDkdvtYCrxSWactBMgqpRIArqUVCc8%2FK4nlNLR%2Bnpj7b28fiD1HHQ4ALEa5jUBeSzAnnEBPo%2BQPOabTW%2BoqyRLy6xUe31p32Z%2BHWA0y9Hrm953eBCfqILcJDMDgjj7oXPfQzmwpPexLhX6yMbK%2F0%2BaQhJ2pphRbgRul89YXGLkG5WkRtA%2FtBuNq3ThqsDbzyLO6Mzk1NZgrlyzrVpVfROGXfRHwmn97VGsl9loHRvk6lZjTvmoobjIgda6E1ybp%2Bx4O0t%2BDdiQ9UaDXbm2ytAILlDD0a%2FwmgvMLXQ0r4GOqUBQrntU8pQuO3jEWK%2Bp8AS%2FPQ0PdrSzs%2BwnTx3R%2BxqeL5amxpWWqAI%2BDQc15F3QDUmvGdGvU009PKJn9ZptyLBWIbHVfVhiLWtzGOTVipwgeoQoIanQC3b0JabuBz%2FXnYPogBXhg7ADIFEHo2zyGYWPiSKTxq3yY%2FxycgC4tQjb39B2EURmySxuQgDkcs9xLOovxtv%2BJ4xuoa4tLYki0PZkiUXQ%2Bt1&X-Amz-Signature=575433242b6068ce93092c0fe6061406419e8f70f687f738ed4981e3ac6fc069&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIPDNZY3%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxn3uxK%2BwxPqSBKMVWUlSiGPK8qRpmkcKsp7waJi1bPAIgCuCS8Sg6S8HvKlS8r6K1P0Qs9wDhPbZ5C3bhi8NcWIEqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBStBpJAxllFt%2FV0nCrcA8jbEOJ3hgLF0D7qGMR9nkMKPGGIqKAYnAuCAhzjZU%2FYQnF%2FzNTJ6bx8e1qz5gq9f96A3sSuekr0S32dUujO4XuQDXc2UolnIdNc1DRU9TCEdn3CkdaOGkx7RpPDXMBWCRAJrhEzKQhmXCuLt92%2FFjRPQwAZBthUfHsLIH0IPrbY%2Bi8wOQtbWkpVHO28bHLjDxkfk9YbmT5497c%2FHYbeOFWpjOf%2BrM9jpYdK%2FWiTYJTsKT33iJDmD6zjBR9dYC0hR%2F7mVWRKFV5UHi6DmuHcsNHsL0tO1C0%2Bts1F4bTv2A54NHcK3s2Us2UHfeizx4JMrJhpjCntaL1LVwFH%2Fn4Xm2zbuD6K3N7t6lOdXJx6oGOVrNGpH5NeZiXUQoLjMsqdImtcXMlQ5VxoVYDDRQfe9zkmgzKb73IORutbIRv43RqYTUTIsh6GjLDOy4xaJBGKdBgOr%2FEzSKYMbzY2ob7BGw%2BJf90%2FNFFccjlC8wDs%2BUhP3ikrMEohYxpw7herBlY8sC1f80y7IjVecE4O%2Fga23Mg9zNV6ehBImJCSXiaG%2FJbRdg0ww2aHHRYhYOZ9hl3Ax9tvHhI%2BhAKDnnZoxZkiEdW22kAUjlymZgOPgh1%2FowZVxXAziAPrY40AZzUMMKPQ0r4GOqUBGh0QRqzsQQxu3lHxpeXS6zIvSiC1SdLhqGwfTDkDa%2FZC%2FQM6AwL36uYw47GIbIbuSs9XRnOC3KrHz%2BXJv8c07csbA9iqQpQ6dB2eNEINJzUooGxq0aWVIOgvCRIU8eQ5d1FtIhMTm3fYGAXEg2u%2BZ%2FtLzmOdxi7L9Pihadmed%2FUZvTiK4Yi9lfnSj9u8DIw1TeHqWzyKzHrvvMnsbr940Vzslezo&X-Amz-Signature=492c4fc3a851e3179499f8d59f88a31abea163670b5eb871c9cffa49b3ea4114&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6QUBCP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmbF6Ry1YKqoCqPzHydqc%2FOipEpS64a47DGnJ5yS83jAiEA8wAF5J4%2FeJbE18SQPqjXcfn0rAnirWYFiI%2Fkr7G%2BwL0qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQLs1A%2FLiK3rKuliSrcAwq11r8hpiArQ6Nny2w8myMv0db0a50TbJsX2mTBFL1q4UApU2i4p7WP9IPmuY31w1jg7H02xKso1KsTWpGALA7EthhR3A41NLRjB4hy%2F9fT6tSuXm%2BRvBl3%2BIWx%2F00mqOf2qUXNGi4c9QJbr5jQbGZz9eBNb%2FM2lu66kFL7DukX1VpTcA1wJxERnTGy9ssFTcO408lZd2jCckerfT3KRMi%2FuGjzrVod4Sm3T8iO%2B5uHd6jOy7uuHvDxJIB98K1T7ZaJldWkfyY3XErJtTFTSMTiVdeuaErX5Pz%2BZsho7ZYxtm9W7VoLtefKNsSGD%2FMNeUcf%2Bc%2BtaopqBX112f3HVWRxMLVB7yssshtOMuAJWE5vzIViTOY%2BRk2gnv8Dqq7mV1qX7%2FPADWVPmmUHEskqLn5tNhlWYYBW8fdmmzVlicYhb2ZfPpFHLDbiyM2SCmQ5D8Acp3U2oTtnwe8ud8sZrKU5m2QPl%2BorxK7b922j5QJl7t%2BdHi%2FzK6jTqQ6VJ%2F0zPcYSMjHGolM6XMtfCAKx%2Bck3vnLBek38Lgnd2DrESDUIARM8HQo61OI7aYzWBdKcZRAV5HaCVYt9ETS0wqDd1SwEw7bs7UFLvmsFHXClT0xkiD9c%2BuFLnHaVSCHCMPnQ0r4GOqUBPdODAQtGb070U9wsOG1ssDYpy6xECEjSvkIXPLFu3mvhTrShoQI3QVdw8h5akbb3%2BnbhGyxM8tkVqg0WWpXugPLZG%2FnFAN1gss9bW%2BxGB7hN6yNOBLS9EJImXMoY51oTgvXwBxHDIBDrZMKp6ySAhGdHZfaP6XR7g7%2Fg5lr4Cmx96K8bHUx3bhmxg1NCPDKg6n4fICZsEVJurdPsza5GjwdWICRh&X-Amz-Signature=30692d8211e216d1eec1fa00baa9131e15489151ddf296d34438280c927cc429&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
