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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDRRMRZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDfejDeRwSP5pckLgJClHtXdhIrC1YSWXipbRl3bfB2%2FwIgLFV7CfVLRbDSWbTzg35nPE3SPoEUvfnZeOjFiZdvV0Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOA1xM4OuI1wJBa1dCrcA84hfIzZ8Zs11hs87v8x%2BBXGFftXiZCnKYZvB3uBo9gmBKeWYdfbWuYS9WpyRj1KA86tjklZFD1LR6r0W0%2FGTl1GpyaDzsZhQLKHoMjJzbb4u4tV12XooQamU5%2FsPTgAye%2Fti44v124RoknSp%2FzguRfAPs%2F20b7gVN09pqJHC1QqUuJVfgcPuckGGk0uzZ2TYFXckz6YpbpBLsQTESRubuBsrZmE1ctXpOx3OZJ1aozZdw6%2Bzwo5kChSADD48sKH94BoSKPB1IYcSD2W%2FOCsyalbjptgEX6bU9SljvpcCOoafQfTZQKR4rJgjYqMT7ZrE5ie8qs2xz7xydgr3o5rOO49ZvT1039Fa4Y9OMkLP%2BxNt47w4w%2FMpgly6je1sehapb3gJJstjUHsp3Qn4GZnIuzGGwwYZXrFQDyQU%2FoI3lW5YgUuuL%2FplAlSo3v7PfPXhMbqdjEJqCmQr28Km3ACpMeIWDGf%2FmupqrKRYinaKi4xHxJGeO0n84%2FmOVa2dSNON8b%2FWX4jP8d3TFbsDIsUDVDRbv5vpgeRlv8ZELN2fMlMS71m8h7M%2F1%2FHY%2FRWDdEBZdJ2ajvuBz%2BUX%2B217Zt9WNLHMfiLXZf7IqtTY%2FZ3RMaAdgLp5dDPQqwB%2B4nRMOuwo8MGOqUBhLWTonHJBcLsb50rFp%2FTZHAdeRPMPWptiY6r05n2%2F3P8WRf6kQLUy2zlo8GNNFZbCbloz6QFmY1oCIOSD6sdJbVFp%2BOTZi%2F35ALyT1HHm%2Fh3rf4tpg48mNzINpdKJei4MOPD2ygwnS1%2FnhSaLp3rbfyXxYsehfC5lpg2cDKttlWGCEoGj%2FoGbYrzGbVaggb8izSeh1rAHcu4sSJ4dRpJWafx8ghC&X-Amz-Signature=d64489d43b45ced69a4960ef402cc8eda9c8a441b142e5e66010225cf1ae7666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDRRMRZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDfejDeRwSP5pckLgJClHtXdhIrC1YSWXipbRl3bfB2%2FwIgLFV7CfVLRbDSWbTzg35nPE3SPoEUvfnZeOjFiZdvV0Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOA1xM4OuI1wJBa1dCrcA84hfIzZ8Zs11hs87v8x%2BBXGFftXiZCnKYZvB3uBo9gmBKeWYdfbWuYS9WpyRj1KA86tjklZFD1LR6r0W0%2FGTl1GpyaDzsZhQLKHoMjJzbb4u4tV12XooQamU5%2FsPTgAye%2Fti44v124RoknSp%2FzguRfAPs%2F20b7gVN09pqJHC1QqUuJVfgcPuckGGk0uzZ2TYFXckz6YpbpBLsQTESRubuBsrZmE1ctXpOx3OZJ1aozZdw6%2Bzwo5kChSADD48sKH94BoSKPB1IYcSD2W%2FOCsyalbjptgEX6bU9SljvpcCOoafQfTZQKR4rJgjYqMT7ZrE5ie8qs2xz7xydgr3o5rOO49ZvT1039Fa4Y9OMkLP%2BxNt47w4w%2FMpgly6je1sehapb3gJJstjUHsp3Qn4GZnIuzGGwwYZXrFQDyQU%2FoI3lW5YgUuuL%2FplAlSo3v7PfPXhMbqdjEJqCmQr28Km3ACpMeIWDGf%2FmupqrKRYinaKi4xHxJGeO0n84%2FmOVa2dSNON8b%2FWX4jP8d3TFbsDIsUDVDRbv5vpgeRlv8ZELN2fMlMS71m8h7M%2F1%2FHY%2FRWDdEBZdJ2ajvuBz%2BUX%2B217Zt9WNLHMfiLXZf7IqtTY%2FZ3RMaAdgLp5dDPQqwB%2B4nRMOuwo8MGOqUBhLWTonHJBcLsb50rFp%2FTZHAdeRPMPWptiY6r05n2%2F3P8WRf6kQLUy2zlo8GNNFZbCbloz6QFmY1oCIOSD6sdJbVFp%2BOTZi%2F35ALyT1HHm%2Fh3rf4tpg48mNzINpdKJei4MOPD2ygwnS1%2FnhSaLp3rbfyXxYsehfC5lpg2cDKttlWGCEoGj%2FoGbYrzGbVaggb8izSeh1rAHcu4sSJ4dRpJWafx8ghC&X-Amz-Signature=a958025b052a495aca0a83e9bac7d082a958f437c33a8f788f37f192e72b8243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDRRMRZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDfejDeRwSP5pckLgJClHtXdhIrC1YSWXipbRl3bfB2%2FwIgLFV7CfVLRbDSWbTzg35nPE3SPoEUvfnZeOjFiZdvV0Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOA1xM4OuI1wJBa1dCrcA84hfIzZ8Zs11hs87v8x%2BBXGFftXiZCnKYZvB3uBo9gmBKeWYdfbWuYS9WpyRj1KA86tjklZFD1LR6r0W0%2FGTl1GpyaDzsZhQLKHoMjJzbb4u4tV12XooQamU5%2FsPTgAye%2Fti44v124RoknSp%2FzguRfAPs%2F20b7gVN09pqJHC1QqUuJVfgcPuckGGk0uzZ2TYFXckz6YpbpBLsQTESRubuBsrZmE1ctXpOx3OZJ1aozZdw6%2Bzwo5kChSADD48sKH94BoSKPB1IYcSD2W%2FOCsyalbjptgEX6bU9SljvpcCOoafQfTZQKR4rJgjYqMT7ZrE5ie8qs2xz7xydgr3o5rOO49ZvT1039Fa4Y9OMkLP%2BxNt47w4w%2FMpgly6je1sehapb3gJJstjUHsp3Qn4GZnIuzGGwwYZXrFQDyQU%2FoI3lW5YgUuuL%2FplAlSo3v7PfPXhMbqdjEJqCmQr28Km3ACpMeIWDGf%2FmupqrKRYinaKi4xHxJGeO0n84%2FmOVa2dSNON8b%2FWX4jP8d3TFbsDIsUDVDRbv5vpgeRlv8ZELN2fMlMS71m8h7M%2F1%2FHY%2FRWDdEBZdJ2ajvuBz%2BUX%2B217Zt9WNLHMfiLXZf7IqtTY%2FZ3RMaAdgLp5dDPQqwB%2B4nRMOuwo8MGOqUBhLWTonHJBcLsb50rFp%2FTZHAdeRPMPWptiY6r05n2%2F3P8WRf6kQLUy2zlo8GNNFZbCbloz6QFmY1oCIOSD6sdJbVFp%2BOTZi%2F35ALyT1HHm%2Fh3rf4tpg48mNzINpdKJei4MOPD2ygwnS1%2FnhSaLp3rbfyXxYsehfC5lpg2cDKttlWGCEoGj%2FoGbYrzGbVaggb8izSeh1rAHcu4sSJ4dRpJWafx8ghC&X-Amz-Signature=35195b2a59eae3289aeb9862eb73ee734f4c7f4c5c9b3fb93109acd724b8cdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFXUSNH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCeGCUk7tOR0EoS%2BkYLWNM7NILjW3OrFyp8%2FgVJ1FDa1QIgH27rQNUcLA6rfhEM88jB3KGaxlCbL2FJmkaNGAkpo14q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKH%2BFkmr8CErHW%2FFdircAwrNu1mHm4Eqofb4QWxSCryvu905NL2pZzr8d2OVEd2eQ%2FmuzG%2FoXf95JfTC3gNG%2B%2FxXgRR8JsO3quSNyExpryboE48H90IPz%2BXAV8bQUoLM0MB9vb7oVSd7Lc3dSrt572N4oUFdxCOMFO9ma77WLhypxTLR08GArMNZkms3GQKF4xaKdlL%2F3UTDy1NkZQvwLllquBTGN%2B3tDOiDbsa7U4hn%2BNyy05j%2FuR1JCH9V2hknvb5uJcZj%2BgR%2FJ81QAqDH%2BOa75myZhGse4kB%2BmFa12LtgVCI%2B7njpTmlI8a%2FKM20tYxj9eelrt1GQ5mmn8vfeIJEXcmCXYZ8mreJSZjoeezuMzt%2FS5LRnG7Py%2Bl7au1pKhRHP3E37jsKR70Zdbsw0%2F4Gdq8KPTBAE3wOa6h%2Byfu7wpjEOk1ZL%2BzDXNZ4Q1z7EPojqEFGqW%2Fxfu6dT7johugcXE5BB8MAbr1HCkrXvpFXsADfXaxcHMUmgPSdMo10lOP8zIz%2BaPRw362IAvitunutWwL3eknZhRv5nQhEgCAN5Cls1e7FTIp25a2dL5D3v9ZOrDNvEkBjKV%2BsAfa8WZu%2BpGxW%2BW3ivkX5Mqp5YhYBIQd6Gp2XIJfTESgpneSjOwUnSFOCKcaXOfpO9MOato8MGOqUBhRpD%2BP5rLX8mv8Mjb9cuwXDXSynYU%2FSazUjb63oY%2FRKIqcb%2FaUg4M8r09szxH%2FYMeLPBm6PS9YLh83NBNERvOs1Zk6oCf2D22a7jdEgsiEhHsRGYYLqFPamg8quPeWcFj%2BGOpN6kR70kRitLm2wyDcdEPKhUZvT7iu1oDYGKgwsoXE3F1%2Bcju3ZiX07ep2Y3hEB%2Fa95lVsZHiKNOKox705WwRsYw&X-Amz-Signature=96e2f774b0850cbc7fdf2a5630c0bcec0f71d27a509fb8deb968595d27b966ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQM3XJV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDtdw0cVNrhGUI4OW3bXKTLsIHJxYfriGxEMqC%2B3ewu7AiEA3ueVKZc8aW6UJ15oZwTAAQNhZdMwnRWSegdtBP62KL0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIKFk1W1YjEFNO6aAircAwcW7zcDvQZMy1lZI3jW7KDntYAbHvXQ%2FeupnRIAWTnHU5JtyfNA%2BL7Wm3odFqMYKds5s882zo0OXwYTjtnzk7dE6pYgqmN0xpta9JFaFegyg7JZj6IhLgWLnf7QteysNgsINKe7K50cmWVE%2BEZlxz4utP2Kqe5a24GksTZpJQZwZJzM1xAASqgsxTCySdtsyx25YCwdeBJm44xe47u%2FgW9wFqHZctQQSlkI7XKD3C2BGksRBW5bQcREfK7RkaezXydDStawtCJz2fRYqzwaPWQQrQjR3rhZGWo4sSi3iiT1XIuBSBAfvXpbRK59kERucom%2BZqXVGae4uHfxjLl4CPzxyGaHA6xXVLQ5A3tZ%2BDlHRt7coN5FDoc6Lp27zeAwnmsSlGhM4kKADBqI6W%2BMNaKUmnkXvuBUEFhXuuGqKjz3bWEtyc6YAccwH7TTukqpoY6sOjWENyfyTOI5g%2FGq2X1pBHAYzQaaDz05SDROx3B08AcOIuhMD1eEHrd2kstmOiLagR6jhcwcP9zg1jzaZ9nTfPfnh7o2V1Gz%2FMwgS5TEYKTiXzddGHnOxh7NbvrgL2CO8CcSYnXIYPoqdz6JUuD2WInvKxHFq0z0EFe23BnqoTAGNrBgXZ3kRSD3MPelo8MGOqUBZvrP%2Bdu7eAL1Vh8aFygxaPYuYXMOGWFr9RWvtOY6n9zd3%2FgeGvZvduheGHTKOfnubNZcw3foOGeSa17rSZ33TpID%2FHdHLASLiLKgLo0REcwZ6vylwgvZGxcHT9HZ17%2Bh2JEFS5lgIYipS27wyjcystWOmwelF9cpOZHQz6VmyCxc80qLnRaq1IHegekYLIohFA0%2FvI5Wx9ywk0xV5H1ytnsIqYAu&X-Amz-Signature=b0f44fe5db2f8949b538176c1fe881c9cb84ffd160e9e9c089e8bef13cf3efda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDRRMRZ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDfejDeRwSP5pckLgJClHtXdhIrC1YSWXipbRl3bfB2%2FwIgLFV7CfVLRbDSWbTzg35nPE3SPoEUvfnZeOjFiZdvV0Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOA1xM4OuI1wJBa1dCrcA84hfIzZ8Zs11hs87v8x%2BBXGFftXiZCnKYZvB3uBo9gmBKeWYdfbWuYS9WpyRj1KA86tjklZFD1LR6r0W0%2FGTl1GpyaDzsZhQLKHoMjJzbb4u4tV12XooQamU5%2FsPTgAye%2Fti44v124RoknSp%2FzguRfAPs%2F20b7gVN09pqJHC1QqUuJVfgcPuckGGk0uzZ2TYFXckz6YpbpBLsQTESRubuBsrZmE1ctXpOx3OZJ1aozZdw6%2Bzwo5kChSADD48sKH94BoSKPB1IYcSD2W%2FOCsyalbjptgEX6bU9SljvpcCOoafQfTZQKR4rJgjYqMT7ZrE5ie8qs2xz7xydgr3o5rOO49ZvT1039Fa4Y9OMkLP%2BxNt47w4w%2FMpgly6je1sehapb3gJJstjUHsp3Qn4GZnIuzGGwwYZXrFQDyQU%2FoI3lW5YgUuuL%2FplAlSo3v7PfPXhMbqdjEJqCmQr28Km3ACpMeIWDGf%2FmupqrKRYinaKi4xHxJGeO0n84%2FmOVa2dSNON8b%2FWX4jP8d3TFbsDIsUDVDRbv5vpgeRlv8ZELN2fMlMS71m8h7M%2F1%2FHY%2FRWDdEBZdJ2ajvuBz%2BUX%2B217Zt9WNLHMfiLXZf7IqtTY%2FZ3RMaAdgLp5dDPQqwB%2B4nRMOuwo8MGOqUBhLWTonHJBcLsb50rFp%2FTZHAdeRPMPWptiY6r05n2%2F3P8WRf6kQLUy2zlo8GNNFZbCbloz6QFmY1oCIOSD6sdJbVFp%2BOTZi%2F35ALyT1HHm%2Fh3rf4tpg48mNzINpdKJei4MOPD2ygwnS1%2FnhSaLp3rbfyXxYsehfC5lpg2cDKttlWGCEoGj%2FoGbYrzGbVaggb8izSeh1rAHcu4sSJ4dRpJWafx8ghC&X-Amz-Signature=d348bc223ed67782c7c9a4c3fbc86a53873c4c4b82c2f9079743f29f7779eb8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
