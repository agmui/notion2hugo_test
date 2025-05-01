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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRP7YQEF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFDWHVck6fU2KPzjy0dnhVa%2B%2BTiVlAUm7YF5fQIwpRKOAiEAp44j7AGrbW7%2FnMEmEspxRl95XpeDc0U50%2BfHh1ffuOsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg6WPzWoWvc2FDa5ircA5k4jfKPRp41i2R0uxY2tutLKrGENBtnHxbQ%2BY%2FGnVOVZ0MsMyqmRXb%2FGFkjwCkDdM3JOyJA%2BFrGc89I48rsH8A%2FlDGzyLJRGXiGfQ5YgjHs4ea7YB5UL5IENOPNp%2BPJt%2B%2Bq7AmGAOkZz9vr6Vw2sDSBh%2F2J8DbFcRE9KT04XHIEx1SHHONNGkUAEJQ6UPPqR8ymWeMmMkwfJx1QkBke987t%2F1o62RqhjWP4cSaRZ1Rm%2BZVBHkn%2FC53tYhIKSETNfXyW48g%2FXQ8gEnfStIQ%2BcQoH%2FCmyIco%2F3HBRYcVNwptWa5%2BT%2BGa0wW4JxT4nsqn9nq%2Fg4lvCKgKWg24ulIzYF%2F7UqzyILsGr1TtoBERsRoZ04XioWiiEFjB3kj1WPN7z1cGCBjeuy216n46y4RzVQM0ooTGEcEywdUX2xdqmNilV09jx7KJPz1bai6k8Mgv66I2Qe%2Bn5KcFElMoLZC2OHO%2BBDTwWtuha5SdWA50lsTO16y8DWDQTXDDk%2BTP9dxU08UUwfQfaGz3g%2BO5hNYSokHzoLKhFJzz9swDKqVlfTFXg2E9jepuC9i8RrPcZ1mmHxyFFADNTTcKyClPKaNkDYRB9c0Zfw5r%2FqeEarfBJzXTPBWF63eIHEhocZoSAMLXqzMAGOqUBHj7VL9ied%2FjBsPyAD7WjRNSJ966mxFfnErIgiD0xmUr6Tb7dd%2BCqrmSFX9ymbG1UdyLQM3fUYMp80ZVCtw%2FGuyvUFFDtxaIruPv9D044A4GJzkchgB3Mtf7SJfQDY12ITQkWyIOAsHynN3K%2FrDw0912LYonhFWm%2BL0ROkurgY095uFXtAzv4u5bT3eoan8P9ItNowceXwT0m431XpPc0sE%2BIyVrU&X-Amz-Signature=e2c586727249b3b50df9c3e6adb2d99015fc94fe75773475cb30ce2ff8ca6dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRP7YQEF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFDWHVck6fU2KPzjy0dnhVa%2B%2BTiVlAUm7YF5fQIwpRKOAiEAp44j7AGrbW7%2FnMEmEspxRl95XpeDc0U50%2BfHh1ffuOsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg6WPzWoWvc2FDa5ircA5k4jfKPRp41i2R0uxY2tutLKrGENBtnHxbQ%2BY%2FGnVOVZ0MsMyqmRXb%2FGFkjwCkDdM3JOyJA%2BFrGc89I48rsH8A%2FlDGzyLJRGXiGfQ5YgjHs4ea7YB5UL5IENOPNp%2BPJt%2B%2Bq7AmGAOkZz9vr6Vw2sDSBh%2F2J8DbFcRE9KT04XHIEx1SHHONNGkUAEJQ6UPPqR8ymWeMmMkwfJx1QkBke987t%2F1o62RqhjWP4cSaRZ1Rm%2BZVBHkn%2FC53tYhIKSETNfXyW48g%2FXQ8gEnfStIQ%2BcQoH%2FCmyIco%2F3HBRYcVNwptWa5%2BT%2BGa0wW4JxT4nsqn9nq%2Fg4lvCKgKWg24ulIzYF%2F7UqzyILsGr1TtoBERsRoZ04XioWiiEFjB3kj1WPN7z1cGCBjeuy216n46y4RzVQM0ooTGEcEywdUX2xdqmNilV09jx7KJPz1bai6k8Mgv66I2Qe%2Bn5KcFElMoLZC2OHO%2BBDTwWtuha5SdWA50lsTO16y8DWDQTXDDk%2BTP9dxU08UUwfQfaGz3g%2BO5hNYSokHzoLKhFJzz9swDKqVlfTFXg2E9jepuC9i8RrPcZ1mmHxyFFADNTTcKyClPKaNkDYRB9c0Zfw5r%2FqeEarfBJzXTPBWF63eIHEhocZoSAMLXqzMAGOqUBHj7VL9ied%2FjBsPyAD7WjRNSJ966mxFfnErIgiD0xmUr6Tb7dd%2BCqrmSFX9ymbG1UdyLQM3fUYMp80ZVCtw%2FGuyvUFFDtxaIruPv9D044A4GJzkchgB3Mtf7SJfQDY12ITQkWyIOAsHynN3K%2FrDw0912LYonhFWm%2BL0ROkurgY095uFXtAzv4u5bT3eoan8P9ItNowceXwT0m431XpPc0sE%2BIyVrU&X-Amz-Signature=7863bedc2a38280945716a54bb6fa2a5a02e93b60b8985310bb6c6fdcfa71253&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRP7YQEF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFDWHVck6fU2KPzjy0dnhVa%2B%2BTiVlAUm7YF5fQIwpRKOAiEAp44j7AGrbW7%2FnMEmEspxRl95XpeDc0U50%2BfHh1ffuOsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg6WPzWoWvc2FDa5ircA5k4jfKPRp41i2R0uxY2tutLKrGENBtnHxbQ%2BY%2FGnVOVZ0MsMyqmRXb%2FGFkjwCkDdM3JOyJA%2BFrGc89I48rsH8A%2FlDGzyLJRGXiGfQ5YgjHs4ea7YB5UL5IENOPNp%2BPJt%2B%2Bq7AmGAOkZz9vr6Vw2sDSBh%2F2J8DbFcRE9KT04XHIEx1SHHONNGkUAEJQ6UPPqR8ymWeMmMkwfJx1QkBke987t%2F1o62RqhjWP4cSaRZ1Rm%2BZVBHkn%2FC53tYhIKSETNfXyW48g%2FXQ8gEnfStIQ%2BcQoH%2FCmyIco%2F3HBRYcVNwptWa5%2BT%2BGa0wW4JxT4nsqn9nq%2Fg4lvCKgKWg24ulIzYF%2F7UqzyILsGr1TtoBERsRoZ04XioWiiEFjB3kj1WPN7z1cGCBjeuy216n46y4RzVQM0ooTGEcEywdUX2xdqmNilV09jx7KJPz1bai6k8Mgv66I2Qe%2Bn5KcFElMoLZC2OHO%2BBDTwWtuha5SdWA50lsTO16y8DWDQTXDDk%2BTP9dxU08UUwfQfaGz3g%2BO5hNYSokHzoLKhFJzz9swDKqVlfTFXg2E9jepuC9i8RrPcZ1mmHxyFFADNTTcKyClPKaNkDYRB9c0Zfw5r%2FqeEarfBJzXTPBWF63eIHEhocZoSAMLXqzMAGOqUBHj7VL9ied%2FjBsPyAD7WjRNSJ966mxFfnErIgiD0xmUr6Tb7dd%2BCqrmSFX9ymbG1UdyLQM3fUYMp80ZVCtw%2FGuyvUFFDtxaIruPv9D044A4GJzkchgB3Mtf7SJfQDY12ITQkWyIOAsHynN3K%2FrDw0912LYonhFWm%2BL0ROkurgY095uFXtAzv4u5bT3eoan8P9ItNowceXwT0m431XpPc0sE%2BIyVrU&X-Amz-Signature=c81429bea25d91709922d1e60c21f53a2d54a42243ff87f4d689aa3c5f442358&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q65GX6RC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIH%2Fbq29Ys3J93kxG7f1h%2FGWbvAPRAKxCETNzrQJs8UobAiAc4X7j%2FubJW1QZ9a0Jk0Lh0NQPH9ZKOyjEcU7O3H4%2F0CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqbRNpeitl2PaqTpKtwDPq0P6fb5kTMuw5EhBZGvZ5VkYZug7l53R5ZoE7CxBZTTNV4thnmM2bkatkw6UenUuFTrprvNsgg8s137IDizplDaNM1ZYoALde2sMLrkpGW91c03EobeaXPps5OExb%2FlS%2B1MAOxedJLXgNKWudUInVEljiixWi5Dj6xTyHBq85R%2B8vFPmr56dxUJ3%2FsNovCcDsadFcfIsXX2z3BFdbPdg7hR0QFqpKxTQ2gRy3sE4diVYUnnHgzrTMYLkXlsASvKT%2F0cei9zWrt6X0oVdxouYW1XshJRzLQ9X%2FGly84GFgSDxwhAKwlbLKc%2FwFcoj54D8Lg15P6lKh1ff1StNNhThntTzfwojkBXqFH2h9z0eo4G0Vyr8E6pLoRmOrCo%2BkRjnBomcyHbHR%2FqURsCbOoM9cjDgdm%2B%2BARcEjmw1lEMpB4l8lWLWiI3Z7B3MLSTHB8c%2Fc72lAacN7doCLxydjfUhEXJWLSFz39o0O40lkguRZjMxsR0K6gPBVrQ2q8KVsll1JY4wWdkIWasdFrcz1vhJTJbu%2B99XcIDCkKaT2uN55QN5dxL79IshH%2Bvs8GwXqIxYYZBvF9sre8pMP7NXxaB8a69bE1Prd0p%2BNZfftRTbtVfrWzNJzGNob6yonswuenMwAY6pgHBsWz77V94Dxb5XVcWxNd4%2FSnkJP%2BuE9JmWa46Hy88oHn1bynOSxCs1ltLjtyTabEdNVxiHbVNw8Y31xNxg0CKJqlACJ2YsEfeTuuTbtSqw8IpAsHvjnfli4q5bbeLZUuYA6Hy31xNZlJQE3N%2FF8cE0%2B21iOjkGIFY0uGjQISilcpLJCAokubfhAHkZWXzYAl8YPuPpa%2BA%2Fav5AxEPJJ1bnZ8dKQPJ&X-Amz-Signature=373d39524ea95ffa7d7245dbf2acc611846c5c144b20c750606ee974fdf646ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZJ4T5NF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIA8jnh5oy4yR21zE3E4DnIzL63RsArsptvkZWlxODVwcAiEArDEk8het99E2ghFEysfzYu20qVYLFDLeCEgbZRiDAlkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgIAiFB8YBgI9U7QyrcAxjB%2Bow5YZYgGgkY96%2BBdmnVHBS3V8DT2cu%2B07OPZ%2FZRF9t4zKI%2F8zkUwQpJTrV%2FPqyGJgGIiOx5sTeA1rA5JcC7ZbrfQBfQJcLKpeotrnvQtTLS0UIryN5z%2FUtOZ9SBUHGg6cSRzCLag%2FrVRu%2FQR1t6wvbjxOWowB7dP9ivk2EnHuymE2OwcT70lHnWA62%2BksnOGq1qAyYU%2BTJBKTmZFpytMQYLxdGIUMj07YXP8bCf%2FgQFc8%2F5j8pjyfW47vILFdi8oer%2BfbFOiZPSPYbLetBflkmwNjnPXyjHUbttbNjo8wbxGXsJswOWcD63qQeGthP5T3dO0TAMENhAiAHWaAiorRFEIpY8zSuf%2FW9mVbX9N0y5sPz9nUkMLLNZhzw52QUKF5pQCs%2FzQ67LpUF94%2BPX8BK%2BJcV1KJP4eyMais%2BnTIQufbBvtO1jb0DplkmR%2FFYLh9%2BwqbAxoVLlOHVTLNZYIiz2C%2BvIHGtkyQJAjym0V7JgTF5Iog9QjG%2B%2Fhq8%2FTlvvJzIOhEUDe73cxXBIjew6qhPRxJL3FgISJMEGEgF7w8gghejNN4Nfi4slTSaNAbZ1z9q5qJIx3Ypx07TANDB9Zk8bMN4sQCTkfxCBKdkSmZTKyAwOdnby1aIhMInqzMAGOqUBJGsBbCHYraiEZ0TlFVHPAJmZHIBR7eEPjymkHJC6m%2FyLoCZG62GPOyBA0olfHMIxnUj9caAFkPsPdpTlqzV6wECyPF4Sc9xocki9rWLFF6pTAI3N7N%2BGgyIbSMQzo%2FuwWXnp0OP4USRxeqVtH1jCraHxA%2FMZHarMeVGpDixoSe9Icwdv%2FCt%2F6lWarcg92QqCknKSjXNFFBjgVwlSknzKX8xC89mF&X-Amz-Signature=b26927c3af75fcbfd88869d7cf8978d216a7d6f42ea7e74021735f16649c1d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRP7YQEF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFDWHVck6fU2KPzjy0dnhVa%2B%2BTiVlAUm7YF5fQIwpRKOAiEAp44j7AGrbW7%2FnMEmEspxRl95XpeDc0U50%2BfHh1ffuOsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg6WPzWoWvc2FDa5ircA5k4jfKPRp41i2R0uxY2tutLKrGENBtnHxbQ%2BY%2FGnVOVZ0MsMyqmRXb%2FGFkjwCkDdM3JOyJA%2BFrGc89I48rsH8A%2FlDGzyLJRGXiGfQ5YgjHs4ea7YB5UL5IENOPNp%2BPJt%2B%2Bq7AmGAOkZz9vr6Vw2sDSBh%2F2J8DbFcRE9KT04XHIEx1SHHONNGkUAEJQ6UPPqR8ymWeMmMkwfJx1QkBke987t%2F1o62RqhjWP4cSaRZ1Rm%2BZVBHkn%2FC53tYhIKSETNfXyW48g%2FXQ8gEnfStIQ%2BcQoH%2FCmyIco%2F3HBRYcVNwptWa5%2BT%2BGa0wW4JxT4nsqn9nq%2Fg4lvCKgKWg24ulIzYF%2F7UqzyILsGr1TtoBERsRoZ04XioWiiEFjB3kj1WPN7z1cGCBjeuy216n46y4RzVQM0ooTGEcEywdUX2xdqmNilV09jx7KJPz1bai6k8Mgv66I2Qe%2Bn5KcFElMoLZC2OHO%2BBDTwWtuha5SdWA50lsTO16y8DWDQTXDDk%2BTP9dxU08UUwfQfaGz3g%2BO5hNYSokHzoLKhFJzz9swDKqVlfTFXg2E9jepuC9i8RrPcZ1mmHxyFFADNTTcKyClPKaNkDYRB9c0Zfw5r%2FqeEarfBJzXTPBWF63eIHEhocZoSAMLXqzMAGOqUBHj7VL9ied%2FjBsPyAD7WjRNSJ966mxFfnErIgiD0xmUr6Tb7dd%2BCqrmSFX9ymbG1UdyLQM3fUYMp80ZVCtw%2FGuyvUFFDtxaIruPv9D044A4GJzkchgB3Mtf7SJfQDY12ITQkWyIOAsHynN3K%2FrDw0912LYonhFWm%2BL0ROkurgY095uFXtAzv4u5bT3eoan8P9ItNowceXwT0m431XpPc0sE%2BIyVrU&X-Amz-Signature=6ff10a86db4f93d11084ccd56a5c7697ba561d9fb65671a817d35266446f8c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
