---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIS7AKE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2FnyEC3%2FYorDkiN7w%2FrO30RYTxMDY4nwnU%2BO8JVRmRAiEA5LMzQ4iL7PyxHNS4I6OSOiVn7sl74K52oi4aoHkW1FsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjm8Es%2FfrOkPEUdhSrcA2XmJwmJINghX3vy4jwqfGayrVaNcYPnRloTbD9iZJiJPbvHnAfVmNty2PzVp718aOxRAehq%2F4HTv1yVI937ycbGTNTLgjrWTSNJQvI7Z6zzKooQgK85Onh547cwE0BygYZ6qtiRXgEMrYi31p3Sp4MB4XskW5bJXXyvNraruUKbg61Unx8D9vJIUrJ2wuB5O3%2FHA7BhkbliE2xH0BjGatsJaSOJ3%2B7zX%2Fe3hC95%2FebMQWT3Yc814Yi%2F6fr14AJBH%2BzNEPVH5ImxY8KHfUuf4JDkhjWvmH%2BF4LL7s9lPhPBDx5wk%2FLM9vnJm%2Bns%2FhcK54Eb3R%2BAml%2FFdAGIgv6MWiOdD0RK%2FjjQa0MtBHhZbS0c3LK%2B%2FoH7czrfMO08EBSNra0wT6at%2BjcpE3iiB%2BsW7lNDLiVt%2FCjRfar9bL5wRFt4AD9CWjPSS39w5qY0d9IL6%2FQSu6NNRFyH2%2FbJbBEirRN4aACbab43xYZdBmjm0i3I2PQSpMfrGODnsTJyd%2BhxLbopPzptpPl%2B817OtHfqerKEsVAD3n%2BsasBgLK1rth%2FjzcM%2Fzto6BoqPxgKcSfktSyjIj11eqg8D1Y3K0uZpDhcKv6lh1qKKVHq93XIxRIDUuj0MUZGXYaqWrk%2FtUMMq0xscGOqUBnK79wDRPwGxDDNaDtNvjC8l1pNzH9MwxAHPog8gOLa8tXnCOHVSJ5OBPvVbQjVM3qgZvyS%2Fh72%2FXwdB9t%2FCPxqbZEgxBxXGDjYRf7TIkBNGZDdrTrAZq30Kq6ZIL4arEGHG7%2FjZUumj5qny%2B%2FumL%2F378I%2BcnfSwo3Hh74HyLLw85ZMD73%2BBzJiGbXkVENE01UgsqD%2BENnJ08hAQAHUTrWnFIscBU&X-Amz-Signature=ed284c95767301ea3f8d3a000cef065b3e33ed05670ee67dbfec75f64e8e652f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIS7AKE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2FnyEC3%2FYorDkiN7w%2FrO30RYTxMDY4nwnU%2BO8JVRmRAiEA5LMzQ4iL7PyxHNS4I6OSOiVn7sl74K52oi4aoHkW1FsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjm8Es%2FfrOkPEUdhSrcA2XmJwmJINghX3vy4jwqfGayrVaNcYPnRloTbD9iZJiJPbvHnAfVmNty2PzVp718aOxRAehq%2F4HTv1yVI937ycbGTNTLgjrWTSNJQvI7Z6zzKooQgK85Onh547cwE0BygYZ6qtiRXgEMrYi31p3Sp4MB4XskW5bJXXyvNraruUKbg61Unx8D9vJIUrJ2wuB5O3%2FHA7BhkbliE2xH0BjGatsJaSOJ3%2B7zX%2Fe3hC95%2FebMQWT3Yc814Yi%2F6fr14AJBH%2BzNEPVH5ImxY8KHfUuf4JDkhjWvmH%2BF4LL7s9lPhPBDx5wk%2FLM9vnJm%2Bns%2FhcK54Eb3R%2BAml%2FFdAGIgv6MWiOdD0RK%2FjjQa0MtBHhZbS0c3LK%2B%2FoH7czrfMO08EBSNra0wT6at%2BjcpE3iiB%2BsW7lNDLiVt%2FCjRfar9bL5wRFt4AD9CWjPSS39w5qY0d9IL6%2FQSu6NNRFyH2%2FbJbBEirRN4aACbab43xYZdBmjm0i3I2PQSpMfrGODnsTJyd%2BhxLbopPzptpPl%2B817OtHfqerKEsVAD3n%2BsasBgLK1rth%2FjzcM%2Fzto6BoqPxgKcSfktSyjIj11eqg8D1Y3K0uZpDhcKv6lh1qKKVHq93XIxRIDUuj0MUZGXYaqWrk%2FtUMMq0xscGOqUBnK79wDRPwGxDDNaDtNvjC8l1pNzH9MwxAHPog8gOLa8tXnCOHVSJ5OBPvVbQjVM3qgZvyS%2Fh72%2FXwdB9t%2FCPxqbZEgxBxXGDjYRf7TIkBNGZDdrTrAZq30Kq6ZIL4arEGHG7%2FjZUumj5qny%2B%2FumL%2F378I%2BcnfSwo3Hh74HyLLw85ZMD73%2BBzJiGbXkVENE01UgsqD%2BENnJ08hAQAHUTrWnFIscBU&X-Amz-Signature=acb199194e43f625d56d9a015ef2eabf1710b870bf953b9a05dc46a81b0f0a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIS7AKE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2FnyEC3%2FYorDkiN7w%2FrO30RYTxMDY4nwnU%2BO8JVRmRAiEA5LMzQ4iL7PyxHNS4I6OSOiVn7sl74K52oi4aoHkW1FsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjm8Es%2FfrOkPEUdhSrcA2XmJwmJINghX3vy4jwqfGayrVaNcYPnRloTbD9iZJiJPbvHnAfVmNty2PzVp718aOxRAehq%2F4HTv1yVI937ycbGTNTLgjrWTSNJQvI7Z6zzKooQgK85Onh547cwE0BygYZ6qtiRXgEMrYi31p3Sp4MB4XskW5bJXXyvNraruUKbg61Unx8D9vJIUrJ2wuB5O3%2FHA7BhkbliE2xH0BjGatsJaSOJ3%2B7zX%2Fe3hC95%2FebMQWT3Yc814Yi%2F6fr14AJBH%2BzNEPVH5ImxY8KHfUuf4JDkhjWvmH%2BF4LL7s9lPhPBDx5wk%2FLM9vnJm%2Bns%2FhcK54Eb3R%2BAml%2FFdAGIgv6MWiOdD0RK%2FjjQa0MtBHhZbS0c3LK%2B%2FoH7czrfMO08EBSNra0wT6at%2BjcpE3iiB%2BsW7lNDLiVt%2FCjRfar9bL5wRFt4AD9CWjPSS39w5qY0d9IL6%2FQSu6NNRFyH2%2FbJbBEirRN4aACbab43xYZdBmjm0i3I2PQSpMfrGODnsTJyd%2BhxLbopPzptpPl%2B817OtHfqerKEsVAD3n%2BsasBgLK1rth%2FjzcM%2Fzto6BoqPxgKcSfktSyjIj11eqg8D1Y3K0uZpDhcKv6lh1qKKVHq93XIxRIDUuj0MUZGXYaqWrk%2FtUMMq0xscGOqUBnK79wDRPwGxDDNaDtNvjC8l1pNzH9MwxAHPog8gOLa8tXnCOHVSJ5OBPvVbQjVM3qgZvyS%2Fh72%2FXwdB9t%2FCPxqbZEgxBxXGDjYRf7TIkBNGZDdrTrAZq30Kq6ZIL4arEGHG7%2FjZUumj5qny%2B%2FumL%2F378I%2BcnfSwo3Hh74HyLLw85ZMD73%2BBzJiGbXkVENE01UgsqD%2BENnJ08hAQAHUTrWnFIscBU&X-Amz-Signature=e30ceb08760271773cc4badeb33aa4a7d6d6b121fe912201d950227c03283128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUCC3GHN%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK9vuywxPz3%2F4yHqvSZZS4eiN5Z8nczZVZNTJ3QymyyAiB8gwzLDTU3G4MJyrZkXDkKoLQvFgUANSYyeUInxmfAoCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhwahjjRIlstSAiSAKtwD5Bo4mPqqrHCBqco7yMrIl5v0oZv44rPPEYJNNI9psRi5qtFdn%2BkFwhGwElMSv33gOpugnztmrzmwVIejzS%2FXB%2FY%2B2Ah1a32I%2Fq2%2FC7qTa0cKLpv06rWbSf1Oz32Md%2Bvn4COw5VdKlGgkb5aDISITqLHO%2F%2BHg993cwSBAdCmxMk8mbd6KwfbLLE477dTOpoZTtw1i4he9gk91JSML07GPlvNf22Rpd3ZwB9Nd5UCPrPQMSyfSWmwyoZsSEtwaUlS0CRq0PCcX51JWdOMpEezuAE7wVhXx4VTpfenBl8ErQmDqBe4NhnvDx6urxDi0ssGY3DYgt7cRfAwteVR6s%2FCW2VzKVtdw0fcIDckSXV%2FmQkji23WBsLtzu70WB3Nm3JT9KgEdAB%2BzNtlqHuD48U0l%2FLbXud2jR7pvi7xPDCHq3b5GvwngBiEDlbf%2B80hLtmsonpbKvkIiWN89j2m0g2ffJiQJlTUzB%2F7%2FDFb75nCMThij4FiicjnhFo3vHlb7epX4NT9rng8UilQP5IVFtDFypUDpcVSoeGE7D6AxDMflRmcTCFFRJM94arbVD6ODa4v1fZxU5lq7x2%2Bnu%2BdKJQU%2FaMLKrW1Pj6Zau3ITyyhjoxRi5rE0TvGTtsOwrSIw7Y%2FGxwY6pgGKPAMIzD4H6WGebVTXSAAo%2BixED6Pn2oC4YXRC6UeZYum%2BdQGoZ18RP5C5k3xBg6pVA9l9LChhsaRgqXZGV%2BljSOXJUFlPeIapSDIrY1mAiHLbcUqraS3Mz7ZB1NRnpD3WuQGD3%2BdVfOJElnXcsuphkh7B5%2F20qIE6sMkB5nopUXnoPhxxHw181EOhfu3uG5zBQGmvM7K%2F%2BLyrgTqpxfGHI9pc4eiP&X-Amz-Signature=0e8c8ea7a2f84809b341f8d6d899cad1179acac14e82426930a0d60dd7cdc851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB6PAHZE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaYQjxeA4%2ByxvaT%2FnJvrEq6owSQDL6j6dFDYqz%2FqQdNAiB7EZ7gKB4fXYTqYnZgMsPWSOD8IAcpgqB2Z30gnkwnBiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUDJYUPHnu2SjRso7KtwDavThQzccochaIRuVHsUERg9L0jrgwGza2ZdO3ca6IW7r7ndmVSX0xo3WADEKpnbGyIuGD6c4HKUgL9QIGhxeVcY5jHfLdImwY2eyW%2BSbWiw4JDrqBWcB5tn4bADCzQsD%2FJj10SHMVd%2Btrhp9jw64li%2B%2BCHFLRFlM28t8fcTKnCxa3xuaGMyfpcV0dARy2antXs9axZO5CTa3zU%2Bo45VfZdJzOZD4ao9D7gEeTkY2NvMJ9rdOB1EegGTCdIYBDgbXimFGWeuoGQERqHfPatRcXxOQHirRd4PRRZ9RaXaG%2BMCnmjumIK%2FyULHBDn5HcRj6wjjyhtQPa%2B%2B8%2FG5mSNiAHEFNPWB18CiAVOxb5U%2F7QaGtYWEJOcMlFZZEZ8Duvogijs4t7W3nWV8H0D8SJkuizn5TWrP%2B1Ta1ldjQ4D6Ny9sJacobATtYZxP%2BWPgSI6kxPLbBxo91bBCcddPhH8pqRR6bEQE9NeFWXdSPfk9Y6oEWLDflFa4DH4cN%2FJoB0UHDlkKWf%2F36t1A2hhO8LWixO4RkS%2FDByHogcHYTRGF%2BTUTDX731Q%2BffYF%2F%2BMTi3%2FTbhq0yz6suzVdTvcl92x1FLqQEu37qiJkBg4HOPeimDTFHqjdBLRO%2FoPbwYymEwupHGxwY6pgE9F9aoAjf1eDjtnoXGL6361Lm3yPKQPuPNS7aaSp4vxDD0iOCyHJy8xMfOlSEVFxUMAHSc13LrEiiEIFx8FC0cQFEExRwYM4v2P%2By0A%2B3guLrM%2F4WPBSTOsamc%2Fqi8D6dwWMi%2B3NxZ65dhPck%2Bjm7OQTUE7XWjfo2Zv6b6Qrvwv%2Bo2WvrdgXKVwdm8N0O9r0%2Fqj5lzvyKR7JwNMqX174%2B0FeQ9MBA3&X-Amz-Signature=1b1e7c1f2a118769e56fe9a2718e7c05a56984b5e321207a9c152f4f5e6fe129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIS7AKE%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1%2FnyEC3%2FYorDkiN7w%2FrO30RYTxMDY4nwnU%2BO8JVRmRAiEA5LMzQ4iL7PyxHNS4I6OSOiVn7sl74K52oi4aoHkW1FsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjm8Es%2FfrOkPEUdhSrcA2XmJwmJINghX3vy4jwqfGayrVaNcYPnRloTbD9iZJiJPbvHnAfVmNty2PzVp718aOxRAehq%2F4HTv1yVI937ycbGTNTLgjrWTSNJQvI7Z6zzKooQgK85Onh547cwE0BygYZ6qtiRXgEMrYi31p3Sp4MB4XskW5bJXXyvNraruUKbg61Unx8D9vJIUrJ2wuB5O3%2FHA7BhkbliE2xH0BjGatsJaSOJ3%2B7zX%2Fe3hC95%2FebMQWT3Yc814Yi%2F6fr14AJBH%2BzNEPVH5ImxY8KHfUuf4JDkhjWvmH%2BF4LL7s9lPhPBDx5wk%2FLM9vnJm%2Bns%2FhcK54Eb3R%2BAml%2FFdAGIgv6MWiOdD0RK%2FjjQa0MtBHhZbS0c3LK%2B%2FoH7czrfMO08EBSNra0wT6at%2BjcpE3iiB%2BsW7lNDLiVt%2FCjRfar9bL5wRFt4AD9CWjPSS39w5qY0d9IL6%2FQSu6NNRFyH2%2FbJbBEirRN4aACbab43xYZdBmjm0i3I2PQSpMfrGODnsTJyd%2BhxLbopPzptpPl%2B817OtHfqerKEsVAD3n%2BsasBgLK1rth%2FjzcM%2Fzto6BoqPxgKcSfktSyjIj11eqg8D1Y3K0uZpDhcKv6lh1qKKVHq93XIxRIDUuj0MUZGXYaqWrk%2FtUMMq0xscGOqUBnK79wDRPwGxDDNaDtNvjC8l1pNzH9MwxAHPog8gOLa8tXnCOHVSJ5OBPvVbQjVM3qgZvyS%2Fh72%2FXwdB9t%2FCPxqbZEgxBxXGDjYRf7TIkBNGZDdrTrAZq30Kq6ZIL4arEGHG7%2FjZUumj5qny%2B%2FumL%2F378I%2BcnfSwo3Hh74HyLLw85ZMD73%2BBzJiGbXkVENE01UgsqD%2BENnJ08hAQAHUTrWnFIscBU&X-Amz-Signature=ba33b9c42a4a055c1b5dce0c795893241e8c16f0d57c6e7a57f3ebe17cc4ba85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
