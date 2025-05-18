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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OKSTIH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3eJvfKLmjrBM9x%2BinpjJ0C%2FyROH2hof6Fgq5NWaDxVwIhAJlt8mk5wXaGwlbMAYSO9dzMkyrJxwh4irOqx9Iw3%2FN5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxwAHia0lzadfnSbF0q3AMungPdePZiFmxSW2jmJ7kucBZIzKv54CTIaSYa%2BUTWcOCfYf8PlTi2xt6c4MnF4hVdIUQykPavamygmA8Sq%2BH6X8ouhj4m1vpgI8oBhGtj%2B0HUJVy2vXRGVT2aAperzo%2FN%2FMBx4k3U8o%2BR3aFFUTo3YIDjgfjBxXkoednWuMru6qs107aABHOLVQ7t%2BVVOWa4%2FPTsnR7wSfOLowptztrNc32wmLSp9by2dbD9wY5Tgqi%2FghHtEdF6C5f6OtikHT3znC%2FPJEeb7vNsMnpzL4RDxS0alG0poGkdRInRr7ruuarg1DmCyNLV3M7cQfOnYXt7fgx8N%2BcaJNawh8oGp4VzVmeZX8udCRMcvJydj0PGUDUoDK5nNw58fNU6b2ICw2rLLnMUEmEdL5PGcXfe8q%2BjjS8KLlLoknccDUmO%2FN7MVfS0aPq2aDQNJJkKxwM85hrV0F029o%2FcOmsK8kPXNCJBPda6XLK%2FW0g9btdsPWKAsPxF%2Bd25GHIw%2F5WDTTR7ZCJtZ6wyOpIemUSNKKh1%2BjSh0bjhzdCoQU6lDw38a4TCbiXOejihJ51qorSm2i072UAWqv1juMKoPmTCYzA38O9q7bl1O5k3bdTTWqK%2FeIXkesWCDQAF6EDK4267XsDC9lqfBBjqkAZ9m7xRSRET5IuPYje6CZ28oSXgQro%2FqXjuCKckA7%2FGTNu4srgz7q3QZOjiEfGFYjuiaJB6WVKKZogPTOaXlC5tmyS11aazoXS%2FW2wcxTMvGFhwg7oRlhH5hFHuuumxvptPdhSalIK3t6MoEkooq9%2FQIXKRH8TaUC34nlt1IoQax7456VAMZbUVcEbJ1OjAosr4Gcs2wet7Z%2FV7fqdCD0yH7abbA&X-Amz-Signature=acedead0ebbdd194a51d549dab31dea3f1e9e91b344a6223634648338e5f4393&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OKSTIH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3eJvfKLmjrBM9x%2BinpjJ0C%2FyROH2hof6Fgq5NWaDxVwIhAJlt8mk5wXaGwlbMAYSO9dzMkyrJxwh4irOqx9Iw3%2FN5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxwAHia0lzadfnSbF0q3AMungPdePZiFmxSW2jmJ7kucBZIzKv54CTIaSYa%2BUTWcOCfYf8PlTi2xt6c4MnF4hVdIUQykPavamygmA8Sq%2BH6X8ouhj4m1vpgI8oBhGtj%2B0HUJVy2vXRGVT2aAperzo%2FN%2FMBx4k3U8o%2BR3aFFUTo3YIDjgfjBxXkoednWuMru6qs107aABHOLVQ7t%2BVVOWa4%2FPTsnR7wSfOLowptztrNc32wmLSp9by2dbD9wY5Tgqi%2FghHtEdF6C5f6OtikHT3znC%2FPJEeb7vNsMnpzL4RDxS0alG0poGkdRInRr7ruuarg1DmCyNLV3M7cQfOnYXt7fgx8N%2BcaJNawh8oGp4VzVmeZX8udCRMcvJydj0PGUDUoDK5nNw58fNU6b2ICw2rLLnMUEmEdL5PGcXfe8q%2BjjS8KLlLoknccDUmO%2FN7MVfS0aPq2aDQNJJkKxwM85hrV0F029o%2FcOmsK8kPXNCJBPda6XLK%2FW0g9btdsPWKAsPxF%2Bd25GHIw%2F5WDTTR7ZCJtZ6wyOpIemUSNKKh1%2BjSh0bjhzdCoQU6lDw38a4TCbiXOejihJ51qorSm2i072UAWqv1juMKoPmTCYzA38O9q7bl1O5k3bdTTWqK%2FeIXkesWCDQAF6EDK4267XsDC9lqfBBjqkAZ9m7xRSRET5IuPYje6CZ28oSXgQro%2FqXjuCKckA7%2FGTNu4srgz7q3QZOjiEfGFYjuiaJB6WVKKZogPTOaXlC5tmyS11aazoXS%2FW2wcxTMvGFhwg7oRlhH5hFHuuumxvptPdhSalIK3t6MoEkooq9%2FQIXKRH8TaUC34nlt1IoQax7456VAMZbUVcEbJ1OjAosr4Gcs2wet7Z%2FV7fqdCD0yH7abbA&X-Amz-Signature=6285169e23edd5f1e4c119b8abacaa090c1361617b02ea5eeee8e3c3f581b4ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OKSTIH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3eJvfKLmjrBM9x%2BinpjJ0C%2FyROH2hof6Fgq5NWaDxVwIhAJlt8mk5wXaGwlbMAYSO9dzMkyrJxwh4irOqx9Iw3%2FN5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxwAHia0lzadfnSbF0q3AMungPdePZiFmxSW2jmJ7kucBZIzKv54CTIaSYa%2BUTWcOCfYf8PlTi2xt6c4MnF4hVdIUQykPavamygmA8Sq%2BH6X8ouhj4m1vpgI8oBhGtj%2B0HUJVy2vXRGVT2aAperzo%2FN%2FMBx4k3U8o%2BR3aFFUTo3YIDjgfjBxXkoednWuMru6qs107aABHOLVQ7t%2BVVOWa4%2FPTsnR7wSfOLowptztrNc32wmLSp9by2dbD9wY5Tgqi%2FghHtEdF6C5f6OtikHT3znC%2FPJEeb7vNsMnpzL4RDxS0alG0poGkdRInRr7ruuarg1DmCyNLV3M7cQfOnYXt7fgx8N%2BcaJNawh8oGp4VzVmeZX8udCRMcvJydj0PGUDUoDK5nNw58fNU6b2ICw2rLLnMUEmEdL5PGcXfe8q%2BjjS8KLlLoknccDUmO%2FN7MVfS0aPq2aDQNJJkKxwM85hrV0F029o%2FcOmsK8kPXNCJBPda6XLK%2FW0g9btdsPWKAsPxF%2Bd25GHIw%2F5WDTTR7ZCJtZ6wyOpIemUSNKKh1%2BjSh0bjhzdCoQU6lDw38a4TCbiXOejihJ51qorSm2i072UAWqv1juMKoPmTCYzA38O9q7bl1O5k3bdTTWqK%2FeIXkesWCDQAF6EDK4267XsDC9lqfBBjqkAZ9m7xRSRET5IuPYje6CZ28oSXgQro%2FqXjuCKckA7%2FGTNu4srgz7q3QZOjiEfGFYjuiaJB6WVKKZogPTOaXlC5tmyS11aazoXS%2FW2wcxTMvGFhwg7oRlhH5hFHuuumxvptPdhSalIK3t6MoEkooq9%2FQIXKRH8TaUC34nlt1IoQax7456VAMZbUVcEbJ1OjAosr4Gcs2wet7Z%2FV7fqdCD0yH7abbA&X-Amz-Signature=a95b686397cb1efaecd9fd92f4dd615ad5166f14108a7aef02deebeb4259f021&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSHKGF5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCigbVrAdhfSVXKIb0%2BZt23pFxFbx0tsg2yX2h9WW0FNAIhALbTMYKxlTKSUD26c%2FGc7WITf04GIqoIMgU349%2FMjIXxKv8DCHYQABoMNjM3NDIzMTgzODA1Igx5v1bIfaiv1vRwVEoq3APFJWI9pzTuXvuWVFva91SJE9JplBasmNfIQDkXmKtQANJOV5ao7AwtxuMzQKgCC6WFgzkyiAHxxLL6TTD1W40LRnE47CrvNC8pr3%2Bssyx86xCA4CUe3bCU6vlt%2FbPhv07FXI69f%2BG2wA5IIR6zcbbNwVD1m28LDv6sqaI1S5naRlQZHBdsLN65znjZd0NdAhbJJZJrXK%2BiIxT8vKxilzUGOR7CQkUXQkgrPzJeQzDgMNgg4yFSfgu%2FkZ1v7H5om%2BHVaO4oFtW1XTfu9sL185v1BmeVP4P9qc%2FaagfNYTAap8KMLvDEmvqJxVzPGw5HUXaHeMMd6TS6%2FMhMJwmWX27xMlEBi4aiDS8Y%2FTprAyNl1iaRAOV%2BemvVJ5T7dBiI3bhtTnQuGKGJV5K6PaYGS%2B8WwXPqS0UEKuzTvLrxGtJOPZfFlK1hCYuXLNLLev21lIR%2Fm%2B6Xvpv0gna3ZviuE7HTXoNL%2B83x9lnDbV6Lz2Nuv8dd%2Fsmfdi16nomQXqV0xLtlUnrWUNmjN5dEg1rIpVtcMiLltvT2%2BlWMfebvcfcOIiY2wcdAe0US4b0zmJt2UriGxmTl9V8dIUrBm%2Fksb4DN%2BkPtluPGAAsaSQcI%2BdF93bn3dNiPkvVPa1YQvjC5safBBjqkAcBAAc6WaXyfDISSwAYrKpQBcdVN1cQ%2BodANxsEQ2k2wf3eh1GQJ5LeEL%2Bh4waLA4PqWCbwRYbJMDQiQc2O25LaXL5hnwZLdV1T9emTRC%2FanzV8GXQeZ943EaEWVz1LumL7eW%2F0Uk7jLgBHO1nJTAJ3B3yiXX9Z%2Fm%2Bu8G%2ByPJVDUqo%2F3jkcJvQYdusFjb8bX1QSyGc3ik9FXB3jLTLWeqM0hMaZ8&X-Amz-Signature=c2cf64f38e544f4b181ed2690e86b9faee8874063313266f85f7f737dc5f8175&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNLH5HZH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdiulz%2FRORzWJ5tC6orTDD1oB%2FmVeKc5i4yXto%2FMayfQIgTcCxPZmVEVHGTuqHic9HOvZ25WH7sM1Sk7k7PCgJ%2FEcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGTws7ypie%2BnxclvASrcA0BepKLXEgfxqJScmIg7qDsFBDgczDb9B7sMJEG0yCoIgE5TigcHKCIGB6BPSydqvSCE%2BeIyTFNRueNEpJiuVohfJngS8qm7nbBG8UgtAS2xPruIPHln4qTlFzbPRwdiE9wUp9fedVLBSOjQNq7cQai1etTi7yuVPWOx0uz7ghbMYMrweoL%2Fl4ZoS47eo9rz3DTKe55oMmvTBwch%2FbakFn%2Bu65PreILYTdd6OhYRwb70WXiCvMq2YTI80DlRytBI2eTp%2FB14kgWrKB05HKAHUgygGlH43upFEPPzFipjiIv7LOwyK7KQRtxrkRmkCot0HYoEROD%2BCxJxAG2C%2FlgjB2rT0wG7ZCzCOst6Uf%2Fa%2Ba29n%2Bda%2BhVKcqz3DDgxYkznYCE8jPLMMgovIG8M12Ppmjh04dD%2BR5%2FyFvdhnuGGDsNSFpfsSS%2BBQNqD9lqILt6upOWQTvX%2BDphfFMBy8MLf%2FoIY7qSmstSM%2F2oiiANee8OK2Hj39FYhl2MZrJnHKM%2F2GYxrFGtiyWVck6oSzMmnZwU894DYE6uR6FG1RXRROv3g6GMiG903ljil3VA1xPS3rAHuixcwPpd9GlASRyIq3wwvlEcknZ7CJAQDDqPnaqk4PE%2BDY4lbT9zaXz1OMML7psEGOqUBWleABuKClJpuXwE5CTBb5uwwTg6iSw9mqlTYytzCN6JCfY%2Bf2dEOv2RILaWQ7K1CljQvtEx0Ogm2zakgCfcuxvLyhHb5iYSQHnX6UkqRMxdy2x3lC37eEA8%2B3fKR%2FyuaJs14uD3OI00t9s9O3kEbc3WNVfG2wFWNLItCb2zv34uCyrdidcKfB7d%2FXPB0m5JlvQu2UPIcVL8YXlfFzrF7C%2BtgCNUb&X-Amz-Signature=ad784f8cd9825a88367a303feb9d2821c9bcbba884495aac88d114703734f77f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2OKSTIH%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3eJvfKLmjrBM9x%2BinpjJ0C%2FyROH2hof6Fgq5NWaDxVwIhAJlt8mk5wXaGwlbMAYSO9dzMkyrJxwh4irOqx9Iw3%2FN5Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxwAHia0lzadfnSbF0q3AMungPdePZiFmxSW2jmJ7kucBZIzKv54CTIaSYa%2BUTWcOCfYf8PlTi2xt6c4MnF4hVdIUQykPavamygmA8Sq%2BH6X8ouhj4m1vpgI8oBhGtj%2B0HUJVy2vXRGVT2aAperzo%2FN%2FMBx4k3U8o%2BR3aFFUTo3YIDjgfjBxXkoednWuMru6qs107aABHOLVQ7t%2BVVOWa4%2FPTsnR7wSfOLowptztrNc32wmLSp9by2dbD9wY5Tgqi%2FghHtEdF6C5f6OtikHT3znC%2FPJEeb7vNsMnpzL4RDxS0alG0poGkdRInRr7ruuarg1DmCyNLV3M7cQfOnYXt7fgx8N%2BcaJNawh8oGp4VzVmeZX8udCRMcvJydj0PGUDUoDK5nNw58fNU6b2ICw2rLLnMUEmEdL5PGcXfe8q%2BjjS8KLlLoknccDUmO%2FN7MVfS0aPq2aDQNJJkKxwM85hrV0F029o%2FcOmsK8kPXNCJBPda6XLK%2FW0g9btdsPWKAsPxF%2Bd25GHIw%2F5WDTTR7ZCJtZ6wyOpIemUSNKKh1%2BjSh0bjhzdCoQU6lDw38a4TCbiXOejihJ51qorSm2i072UAWqv1juMKoPmTCYzA38O9q7bl1O5k3bdTTWqK%2FeIXkesWCDQAF6EDK4267XsDC9lqfBBjqkAZ9m7xRSRET5IuPYje6CZ28oSXgQro%2FqXjuCKckA7%2FGTNu4srgz7q3QZOjiEfGFYjuiaJB6WVKKZogPTOaXlC5tmyS11aazoXS%2FW2wcxTMvGFhwg7oRlhH5hFHuuumxvptPdhSalIK3t6MoEkooq9%2FQIXKRH8TaUC34nlt1IoQax7456VAMZbUVcEbJ1OjAosr4Gcs2wet7Z%2FV7fqdCD0yH7abbA&X-Amz-Signature=638cc020232b3e8fd2864f39e85080b93384bf4ec95829cb0724c675d2f5ea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
