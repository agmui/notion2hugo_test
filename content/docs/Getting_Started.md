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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3L762B%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEkhTFM4T5llqaCoAKUQ2qRKtGMMaDSAj%2BrUybUOTkj6AiBRwzbdtCV%2BVaFGii8FSPokdYErDCV2fIbFMICOshJ9Cyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYH1mYU2Nc%2B6j8FgSKtwD8ew4gs5bYapx2OJ%2FUxKLC%2BlXCaxgMLxMvtU2O5MIPCGgYJs8T5DGQFt50XWBLuhWC1ndIwUPye5LWtDBG%2F%2BPrYF8FJ%2BsBOOclsW8MApsCS3wwI2PPP%2BZSkHXN4FdZlphAR0Ye1ht4XqKXD7F8oRSiQCYdqKesSn3H%2F45Z7F9KcLSYuPVybidChXSFiWqFhrE5mELnxjF8Y%2FFNVOwtZNQ9wvworfTngjSh%2FdR22Je8nvrrn%2BVTO7PBfLwVG35Fe4Yz0sJT6O%2FIQIrJUh%2FHlc8rtPvMK%2BZVLXg%2FBW2MzNjnZv2PxltPGln5RTh6CqsW%2F2%2FYyzDpJPoycUjOC%2FGjveV1grPaPSL1qWsr9%2FZhBkQattpXd7Mp%2FZNFRe5K8kJjNqOoB9wBSH3vgNdq%2B0fh0%2BHw4K3QwUJsqcAjfYy2VW61RQbi51RzByV2TuVROOW3NELzS0eu7XnZ9Oa7ikLOp26l8YQb8ZwT2bbzYkN1Ttw4qshgl3jDFdKu1iv%2F%2F4CeAnnrLqp4FknjYQoaRiMABIPMx5fDnTiY5kb37KSYjanM1YbOHItkMoZCfcnsOnyQwdm1O9HdQpQ%2FJqebZUne%2Bx2ksfDaSMw1EIaSKbfZmIDAxKzQMpZrYwbsLOmnF0wg%2BTpvgY6pgFRw5Pey%2BPY2G%2B73VECJeaOoeAvzVypRR5L2brgYc5e17Oted1hPnSS%2BybtxZd9L%2Fgqknh%2FDxEfkgtDi%2BvphdQbX7YKz3SSD2qL5Ujx8FcYGWxwpDANXEmIhhVhmLG4glcAc0sfp8Z0V89hR8mKtZK364Yn4wxVg6cJrcZTYtzrx6mshl%2FAwcIJ5yidewoAFj2B7KIbRInxKB7nLpmcYA7eCKBSFlpG&X-Amz-Signature=6403df422b4732bc604522274ff69127da21cf18e15b9f0a6734f8d711bef0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3L762B%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEkhTFM4T5llqaCoAKUQ2qRKtGMMaDSAj%2BrUybUOTkj6AiBRwzbdtCV%2BVaFGii8FSPokdYErDCV2fIbFMICOshJ9Cyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYH1mYU2Nc%2B6j8FgSKtwD8ew4gs5bYapx2OJ%2FUxKLC%2BlXCaxgMLxMvtU2O5MIPCGgYJs8T5DGQFt50XWBLuhWC1ndIwUPye5LWtDBG%2F%2BPrYF8FJ%2BsBOOclsW8MApsCS3wwI2PPP%2BZSkHXN4FdZlphAR0Ye1ht4XqKXD7F8oRSiQCYdqKesSn3H%2F45Z7F9KcLSYuPVybidChXSFiWqFhrE5mELnxjF8Y%2FFNVOwtZNQ9wvworfTngjSh%2FdR22Je8nvrrn%2BVTO7PBfLwVG35Fe4Yz0sJT6O%2FIQIrJUh%2FHlc8rtPvMK%2BZVLXg%2FBW2MzNjnZv2PxltPGln5RTh6CqsW%2F2%2FYyzDpJPoycUjOC%2FGjveV1grPaPSL1qWsr9%2FZhBkQattpXd7Mp%2FZNFRe5K8kJjNqOoB9wBSH3vgNdq%2B0fh0%2BHw4K3QwUJsqcAjfYy2VW61RQbi51RzByV2TuVROOW3NELzS0eu7XnZ9Oa7ikLOp26l8YQb8ZwT2bbzYkN1Ttw4qshgl3jDFdKu1iv%2F%2F4CeAnnrLqp4FknjYQoaRiMABIPMx5fDnTiY5kb37KSYjanM1YbOHItkMoZCfcnsOnyQwdm1O9HdQpQ%2FJqebZUne%2Bx2ksfDaSMw1EIaSKbfZmIDAxKzQMpZrYwbsLOmnF0wg%2BTpvgY6pgFRw5Pey%2BPY2G%2B73VECJeaOoeAvzVypRR5L2brgYc5e17Oted1hPnSS%2BybtxZd9L%2Fgqknh%2FDxEfkgtDi%2BvphdQbX7YKz3SSD2qL5Ujx8FcYGWxwpDANXEmIhhVhmLG4glcAc0sfp8Z0V89hR8mKtZK364Yn4wxVg6cJrcZTYtzrx6mshl%2FAwcIJ5yidewoAFj2B7KIbRInxKB7nLpmcYA7eCKBSFlpG&X-Amz-Signature=ee984130ed2647bfdb343ed111078a6f36c630c519373afcdb475e8c99837e13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675F6MVDD%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD0Zl2A89aKpsTmYM8m5muObeTP35yGwT5mGcOewT%2Bu9AIhANl1Z3MISHdwCvaSNqPwn3MK2TRzebthUjAiyq1eb0KlKv8DCHEQABoMNjM3NDIzMTgzODA1Igy7L4VFsrFSeh5Fybsq3ANk%2B7r0%2BBy9ASTVVASHfyaJvW9Rw5stbFK%2BMjc2QuWeX8g2cEcKB7133CrpnpXdhNaRGdUhVO5yQu9%2Bi6u5eu4a7hzjgscLRF3ioUr%2Bst1k6%2FnsrH5RFVPiXdr6heUBKaBz0%2FvnvPGnqMbMmO2L%2BiNAR5A5rK5euM717xDpO1JEB7750RBre13SxQgHok2OhRKv7z8yCSU77lTqpeL4EaSlW3yX2QwUrsu3XlPOxc0nSdc2l3XgE7GSxy2A9lCzD%2Bz6zCsnYLDXx1aFaHkclMUH3HikB4y3XMBLwKQBiXVjAN6isirRYTRwsj0%2FbqZJboaT8BCbcCTL2hHfYwZxoknwUWhCvHL%2FVxPkpLq0%2FFb9a9rGWpkMHiXKP%2B2Sh%2FdHwXX22A8sjrJiqdcBMwV95ur%2B%2Bs3Q1Mfn2ZuyuxvlHlFYfbPvJ3dTxs0%2B32cU38SIxLS%2BgreYQe8ErQ1djvVZF7bCceSvRUkpx9Cbq3plvWYF%2F0nqZ8ZwBsnm8u25QHVggPHQitYq5qibuzmP6q5ilGuPZv57HNpjcby5PzkZgDDO5SjjCfHIYv4%2Fh3nIoWe8HqUnYSTNR%2FNb5PcDfShQG4NEp%2F5j6dVZcf%2FqKx1X8mdiRanf9icqYbXtFBBaijC34%2Bm%2BBjqkAe5kN%2BlW9dGMM2e7%2F0IcHJDmcGUXDqBhzF8B7%2B1q%2FRjMn%2BoXKuTfMNGXFwHdoki%2FZe9158ONxS05wRLXb7Jw04AiMwLJU6g0IEtvgqGWsxB2r3c078KxnVmeuRypNMYstGPxhmlKRXMZpcrnmuvnWXIEFh1XCMXDMm%2Fzu%2FPCXvZ0XjudeA5L%2BD3VTbxy2TaPmRzHPYSutYCcLvsU0xGdPKtMTTc4&X-Amz-Signature=888061238ea58a3f4c735d967ebcc7d8e0ac036c24278567b170770768748a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFUYLGL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIHwFRAwmK14VOJAiq8dbvgWpQ%2Fqt3kd2esLeF1YWLJagAiBwtd9r79aYtSotAEtgtS5fDsBXJCk0hUZeNIBSafzKZSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkhz0bcWWhvGb470wKtwDX4%2Fai8tnmksf2h2wFaNxt7C3NalbjvwgleCn754HkmxW4mU9dHy1gPbAbcoWi8ulUK%2Fp7GQ%2FxpVP4ULOf9n8so5%2FP7RrZOfDRS2%2FB5R44kc745mlomIEuU0NRvX5xFae3BL7c4HIrP3bgue4KMafbLoSLUXB%2BQEvMYpYHdR81SAq80A8sn747YHPMeHW%2FUZAV0iAcOx1M%2BicZV%2B%2BsxPQG4CrdoS0YzvijLE6eXl1ICwwwDkt7Q4xB5dIdGMK9%2BKtmu0WcdR02XwWTGPynfpWCl4LWX2x2nS8u008D%2FxIvUASzSqzoJ%2Btnc7lJE5hNiM3Nq21RmihcAvC3kmuEe%2Fbuj5DswsT9JyjuV8YNDkLuxEC%2FxYSNXE3ajLKERoIkK1i36B8cdiwf1XJWVGRKxVjxWjGsORLX3sAXxM8w3AzOJSsXltijqQIWEp5TwzJddKZvn21kPYJ5ZbF3texUUOMsLDqlRasrQfhCbu4dWu5BmuO00e3hbqI%2BZ4qmKGQaJKYZvmfiU68VSuGZZa8Q1QJV7ZglySJ1YvrPiNj3OMUDpjzCF1ds0xNwoanbVa%2BXakdQm9tDpYkvE%2BP1bvJ9SrXWn2hU8qYLJO0N1%2FbZUnmta2bsDd6T1MjUANJkA0w3uLpvgY6pgGUxAhIE4%2BVyPXkhr47MfBQXRzfWQxj62LVbiiGSqgRtzBjPhhFbAav9qe73sWnm95ShOgXVzwVQIERRPmrAVxGAm9jPZJS76B9pq50FyA7jFJq%2BhcXbk1qKgH6W1CkDO%2Bb%2FxJaLj69VMbO5NMr0VPgejHej4AmFVBePmZYZC4pbpdb5%2FueRTnYry49J%2BVGvAczdsbUFTKh6UW0GJ1am2fa96DJAWKg&X-Amz-Signature=7f4cb95e9150e925417148ba7193a4f7f34f153690cb3406974731d96ad20b05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q3L762B%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIEkhTFM4T5llqaCoAKUQ2qRKtGMMaDSAj%2BrUybUOTkj6AiBRwzbdtCV%2BVaFGii8FSPokdYErDCV2fIbFMICOshJ9Cyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYH1mYU2Nc%2B6j8FgSKtwD8ew4gs5bYapx2OJ%2FUxKLC%2BlXCaxgMLxMvtU2O5MIPCGgYJs8T5DGQFt50XWBLuhWC1ndIwUPye5LWtDBG%2F%2BPrYF8FJ%2BsBOOclsW8MApsCS3wwI2PPP%2BZSkHXN4FdZlphAR0Ye1ht4XqKXD7F8oRSiQCYdqKesSn3H%2F45Z7F9KcLSYuPVybidChXSFiWqFhrE5mELnxjF8Y%2FFNVOwtZNQ9wvworfTngjSh%2FdR22Je8nvrrn%2BVTO7PBfLwVG35Fe4Yz0sJT6O%2FIQIrJUh%2FHlc8rtPvMK%2BZVLXg%2FBW2MzNjnZv2PxltPGln5RTh6CqsW%2F2%2FYyzDpJPoycUjOC%2FGjveV1grPaPSL1qWsr9%2FZhBkQattpXd7Mp%2FZNFRe5K8kJjNqOoB9wBSH3vgNdq%2B0fh0%2BHw4K3QwUJsqcAjfYy2VW61RQbi51RzByV2TuVROOW3NELzS0eu7XnZ9Oa7ikLOp26l8YQb8ZwT2bbzYkN1Ttw4qshgl3jDFdKu1iv%2F%2F4CeAnnrLqp4FknjYQoaRiMABIPMx5fDnTiY5kb37KSYjanM1YbOHItkMoZCfcnsOnyQwdm1O9HdQpQ%2FJqebZUne%2Bx2ksfDaSMw1EIaSKbfZmIDAxKzQMpZrYwbsLOmnF0wg%2BTpvgY6pgFRw5Pey%2BPY2G%2B73VECJeaOoeAvzVypRR5L2brgYc5e17Oted1hPnSS%2BybtxZd9L%2Fgqknh%2FDxEfkgtDi%2BvphdQbX7YKz3SSD2qL5Ujx8FcYGWxwpDANXEmIhhVhmLG4glcAc0sfp8Z0V89hR8mKtZK364Yn4wxVg6cJrcZTYtzrx6mshl%2FAwcIJ5yidewoAFj2B7KIbRInxKB7nLpmcYA7eCKBSFlpG&X-Amz-Signature=db299335d24544935ba09b3a3fe3bc8ac50cab57c59188b4e836eee648d4a807&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
