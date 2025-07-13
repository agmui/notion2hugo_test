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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326OWC3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLto6eYgFXdr%2FUrjmV8SOlFdRk5OkOiAtAvj%2BY77hZvAiEAz5N8UhxshxFIrfPb3qPU8yBCvF1NFY1dD37dVcjYZUQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO77keJfQD9df0ThVircAzvk1zVbhj4QVZp1oxNrskE%2Bg7K8jTENu48%2BvOvMAjjyXmgkOFRIt62McVAwoq5FMARIUeJ4NOt3P6zZm9f5zvmj51jut0lIViEMUxCMabeYiGmjvlfJCsjqkQQIv07m7DkDprYHjBhOutSqCb9alMldsa99RG0OxouTA5%2FyM2mFPyg%2BAzQisIfPQ0%2BCN1oVdZyAr%2FX9KPynF5k%2B7ZkAozfM3shcxJdCO9Ju2X4X3EesQxCv29WjIZg7dMde6vrQry4gxuEtAahF1pcRSuxkrHlulyBkxLz%2FRPyZuq9czhwBwTIEf2GHnonZjcJlq5CK%2FmA8R%2FJkZBpEv2f%2FCbACapc3g3paTjmlIiv%2But79qcPvRPSfsQ2TTXHtjHBZbiTt0Q%2B5iishrinlUIk0VaxZEEJhqOxX0AP20hNAcA7l1YzXefg2cNCXctR%2Bg5qryGRPy0%2Fb%2Bee0PHitK22wV%2BiT4nLSXjCXodacY98SF8VHcDkgJxknSpEn%2FzCWW3DkSupXXht%2BzMe963n9%2Bw3XeQBaAIQC0XR9NDSi3GrroW1tCLrQbc8tYpAZmseJB%2BB4b4k15fXplWKPGDyRSK4sw%2B%2BA7HJA9ddosnMBQ%2FuK2UT4jC49TWtEbjCnSfdCUspVMMLFzsMGOqUBbUJO95OyPRkWkvbAAh6N4xFF4f6sgwOmtsCWBQfHmd1AI1xT23D3CIgbZ4FKzl5AOCKCOpdYNeD4Xo5jfWtUofNhJZVm0orRgBmy9u00uKkECb3z2HH8bzYlGpQ4uLb7foNtT8Tqda%2FITLm1%2FQZ6fe791rHu2UXsBt%2BMklhw%2FIICK2%2B%2B17P9kclnCOGqf10HmL1RPYnVtrWGhiys8%2Fbo7%2FW70FpX&X-Amz-Signature=a0d2b50b5125f0651d15b3cdddbec391c1fd660dfcb731b7068d50852401b1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326OWC3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLto6eYgFXdr%2FUrjmV8SOlFdRk5OkOiAtAvj%2BY77hZvAiEAz5N8UhxshxFIrfPb3qPU8yBCvF1NFY1dD37dVcjYZUQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO77keJfQD9df0ThVircAzvk1zVbhj4QVZp1oxNrskE%2Bg7K8jTENu48%2BvOvMAjjyXmgkOFRIt62McVAwoq5FMARIUeJ4NOt3P6zZm9f5zvmj51jut0lIViEMUxCMabeYiGmjvlfJCsjqkQQIv07m7DkDprYHjBhOutSqCb9alMldsa99RG0OxouTA5%2FyM2mFPyg%2BAzQisIfPQ0%2BCN1oVdZyAr%2FX9KPynF5k%2B7ZkAozfM3shcxJdCO9Ju2X4X3EesQxCv29WjIZg7dMde6vrQry4gxuEtAahF1pcRSuxkrHlulyBkxLz%2FRPyZuq9czhwBwTIEf2GHnonZjcJlq5CK%2FmA8R%2FJkZBpEv2f%2FCbACapc3g3paTjmlIiv%2But79qcPvRPSfsQ2TTXHtjHBZbiTt0Q%2B5iishrinlUIk0VaxZEEJhqOxX0AP20hNAcA7l1YzXefg2cNCXctR%2Bg5qryGRPy0%2Fb%2Bee0PHitK22wV%2BiT4nLSXjCXodacY98SF8VHcDkgJxknSpEn%2FzCWW3DkSupXXht%2BzMe963n9%2Bw3XeQBaAIQC0XR9NDSi3GrroW1tCLrQbc8tYpAZmseJB%2BB4b4k15fXplWKPGDyRSK4sw%2B%2BA7HJA9ddosnMBQ%2FuK2UT4jC49TWtEbjCnSfdCUspVMMLFzsMGOqUBbUJO95OyPRkWkvbAAh6N4xFF4f6sgwOmtsCWBQfHmd1AI1xT23D3CIgbZ4FKzl5AOCKCOpdYNeD4Xo5jfWtUofNhJZVm0orRgBmy9u00uKkECb3z2HH8bzYlGpQ4uLb7foNtT8Tqda%2FITLm1%2FQZ6fe791rHu2UXsBt%2BMklhw%2FIICK2%2B%2B17P9kclnCOGqf10HmL1RPYnVtrWGhiys8%2Fbo7%2FW70FpX&X-Amz-Signature=246afd00c9a661138749b1391e2b6d6a630094e6caab46e2d2cec3d7183b73fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326OWC3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLto6eYgFXdr%2FUrjmV8SOlFdRk5OkOiAtAvj%2BY77hZvAiEAz5N8UhxshxFIrfPb3qPU8yBCvF1NFY1dD37dVcjYZUQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO77keJfQD9df0ThVircAzvk1zVbhj4QVZp1oxNrskE%2Bg7K8jTENu48%2BvOvMAjjyXmgkOFRIt62McVAwoq5FMARIUeJ4NOt3P6zZm9f5zvmj51jut0lIViEMUxCMabeYiGmjvlfJCsjqkQQIv07m7DkDprYHjBhOutSqCb9alMldsa99RG0OxouTA5%2FyM2mFPyg%2BAzQisIfPQ0%2BCN1oVdZyAr%2FX9KPynF5k%2B7ZkAozfM3shcxJdCO9Ju2X4X3EesQxCv29WjIZg7dMde6vrQry4gxuEtAahF1pcRSuxkrHlulyBkxLz%2FRPyZuq9czhwBwTIEf2GHnonZjcJlq5CK%2FmA8R%2FJkZBpEv2f%2FCbACapc3g3paTjmlIiv%2But79qcPvRPSfsQ2TTXHtjHBZbiTt0Q%2B5iishrinlUIk0VaxZEEJhqOxX0AP20hNAcA7l1YzXefg2cNCXctR%2Bg5qryGRPy0%2Fb%2Bee0PHitK22wV%2BiT4nLSXjCXodacY98SF8VHcDkgJxknSpEn%2FzCWW3DkSupXXht%2BzMe963n9%2Bw3XeQBaAIQC0XR9NDSi3GrroW1tCLrQbc8tYpAZmseJB%2BB4b4k15fXplWKPGDyRSK4sw%2B%2BA7HJA9ddosnMBQ%2FuK2UT4jC49TWtEbjCnSfdCUspVMMLFzsMGOqUBbUJO95OyPRkWkvbAAh6N4xFF4f6sgwOmtsCWBQfHmd1AI1xT23D3CIgbZ4FKzl5AOCKCOpdYNeD4Xo5jfWtUofNhJZVm0orRgBmy9u00uKkECb3z2HH8bzYlGpQ4uLb7foNtT8Tqda%2FITLm1%2FQZ6fe791rHu2UXsBt%2BMklhw%2FIICK2%2B%2B17P9kclnCOGqf10HmL1RPYnVtrWGhiys8%2Fbo7%2FW70FpX&X-Amz-Signature=27c9a81ff169ef64bb36d2fb4348d4d48bdd685bdecb59dfc815c9ebd8bb7f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYB6CEOA%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDv3G960lgrmk5pETPPn0VE2%2Fkcaf9pRAbgTaqPVfGySwIhAJt2b%2BQ2AtXldbnTnChmIjEEiAy%2FO6b0ULYQR0hIb3eOKv8DCBUQABoMNjM3NDIzMTgzODA1Igy4vUOyq7h2%2FiJR7%2F8q3AN3bifqPbYhdrGtjoQ7r%2BnudzdElaC5qHM%2B%2BkwOY3VaVnbjNG74DpHJlAVl%2BdTFQTLfDPS7pROvMDGsGmC9d2B4sja2G07kzq7DPHeXIX2jSPIYfymftlux0KTfwbhDGFUcSaAlUCRMQc11TK3Bw5B1PklLWBM6IXo7iVv0oj9Nv0Cx2GJFXQyrlHF0bKWn9e2RJGkR6BB3lyDNtgriDzfYt5UkcmIK8yuJgxmQodgGMC3074FwWBKke3GdRiP3NTrf1XNUaNBMd%2Bc7t84mj9rkc67xmGBfsdXh5Mb7IU5iTCah6P4OhEag3JJxZxqTwomA2%2BaiYvGEM%2BIsaYf8nSi%2BvNdjJF6jBQT2wkofq7%2BLbIlr0ExVKqbmUTVmrmOkvPpFrsuE40oUi42OijgYWp2F5m86dpiKXg8jN1d9MiVGhMkc%2FSq8sAoo6s9imKGFT41ESpK2cgZ2bYZfQEfR1EgeBl3%2BNOtcGc1tXnCPi9Ci5De%2BcIydtOn9D7GRzB6gBKykJdU2IXA0pHVUZOXXEY4SJKlHNSNdbwCzx%2BiyaVuPhoWfim4uuUs2RMT5grTGNY3deKfIFUjLcNmVOLXd%2BiQ%2BmsAMKOxKu4gc6%2BklL5KaDWzrMZmFTsqV27k6DTDhv87DBjqkAV1oJrLapDp0EnZA0yEZzIOZ7ISyWOVKvNMxz4EP926CPz84S2bgTQv4iooziuLIE0lP3F7KCV8QIZOZG4N47opeYfY%2BYLMkia9c5UYlzLt2VqYoTBZSniez5UWUwq2emDq9hHx1sUIqLFruhaaoAUMRrY77L87dXXpbjWdyzqXKUBq%2B0JnAB7EjS4KTl3aj9p7uPvU7Ns2bpz9qoU5mGsg3v9kX&X-Amz-Signature=5fcced2b7c44098e910c161976bd1a910a57152304814a21df906b04899db52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU2X7C3O%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2dQYRZfAUtlmSDAdtpq4lA1HSxd39lb7e%2B0Wv9ruCnAiBIulMqV%2FrrXW0URzHyEri%2BQ22Kvmlpavi0QslI7gV4dSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMpsOt2IEOYBJKym1GKtwDDkpZPbiugOZjHIW3sGduxDBgbdEoQqg4OQJ4oVUMo%2FKxcKYk01tQM39WFONx6BS%2Ff3sWVMqyYKsGZ2n5WgFpMee8KTt3Qi16hmkVle2nQCwvpHV%2Fo4QR6uzm4vsKXfu9kTTitOnLTVINOfGTPMkvV9G7xtK1o%2BEZGmVegl802bMHWhkIRqH%2F%2BISGmjH0CqU5oldNuc3GGWX5qace6vT%2Bvb1z4jBiYvD1QvZBg%2B0sdPEvnXZLEr7I0C%2BFNwgfWFom2CdlZtdyaP2sCYMpK8xeXvkQA4A82lP%2BOyM6oW4EI4kWtrdmZQ0bl6Ya4mLPA6Z72Uj9TtNuvUZ6zjcAkc8CEOp%2BGmk21RsTfHC%2B3ijWtIJzU%2FyAryZ7%2FYbWoob1xo2Ubq4Rww0uhMGSp8orloSEv0yCd8%2B5E%2Ficriew5rVD3DcX67HhjwBh8CrDIKqi7p301JM8ZdlIHEG2dbD39SBuO8%2BRGWu6hX85JuLQpizAvKcYQubbJgkam%2F6LAjnGsLwXtcDV2OFx6qhJ9Nj3cbYgfqZgL85k%2B8fSWprrIl3%2B2hbJaFMf%2BhCP1n3lLj%2BAUC32QnzWK46yUsy3z6FGm7hpJc%2Fen21kSU7r080uZG6L%2FX9Kg2qd0l6ZaMt3GrIwscXOwwY6pgEqHRJ3FY5N12sNgfOgRcEapaR0waqdUvXH9J9PEyVRYVbXLz4VYAh5MDcrveQREVG%2F23Esvpq5mlMkgtwnKHcJOKGEToweg%2FxedDgUdGwDjyUpHmqzAvYkqi7ycFQ54UP1bHQi115VPahsDwgkatAU7BhPIC7%2Fn9PSyRkUi%2FhbMNvbmvtUTtIJGzXifIwr6sQhVdtXTc4xC3aeBBwI4NKKfb44FV6h&X-Amz-Signature=8e0d3f4e686416be0bbb419066716cb8e3274473fbc8f96c887b445a36d05757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466326OWC3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLto6eYgFXdr%2FUrjmV8SOlFdRk5OkOiAtAvj%2BY77hZvAiEAz5N8UhxshxFIrfPb3qPU8yBCvF1NFY1dD37dVcjYZUQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDO77keJfQD9df0ThVircAzvk1zVbhj4QVZp1oxNrskE%2Bg7K8jTENu48%2BvOvMAjjyXmgkOFRIt62McVAwoq5FMARIUeJ4NOt3P6zZm9f5zvmj51jut0lIViEMUxCMabeYiGmjvlfJCsjqkQQIv07m7DkDprYHjBhOutSqCb9alMldsa99RG0OxouTA5%2FyM2mFPyg%2BAzQisIfPQ0%2BCN1oVdZyAr%2FX9KPynF5k%2B7ZkAozfM3shcxJdCO9Ju2X4X3EesQxCv29WjIZg7dMde6vrQry4gxuEtAahF1pcRSuxkrHlulyBkxLz%2FRPyZuq9czhwBwTIEf2GHnonZjcJlq5CK%2FmA8R%2FJkZBpEv2f%2FCbACapc3g3paTjmlIiv%2But79qcPvRPSfsQ2TTXHtjHBZbiTt0Q%2B5iishrinlUIk0VaxZEEJhqOxX0AP20hNAcA7l1YzXefg2cNCXctR%2Bg5qryGRPy0%2Fb%2Bee0PHitK22wV%2BiT4nLSXjCXodacY98SF8VHcDkgJxknSpEn%2FzCWW3DkSupXXht%2BzMe963n9%2Bw3XeQBaAIQC0XR9NDSi3GrroW1tCLrQbc8tYpAZmseJB%2BB4b4k15fXplWKPGDyRSK4sw%2B%2BA7HJA9ddosnMBQ%2FuK2UT4jC49TWtEbjCnSfdCUspVMMLFzsMGOqUBbUJO95OyPRkWkvbAAh6N4xFF4f6sgwOmtsCWBQfHmd1AI1xT23D3CIgbZ4FKzl5AOCKCOpdYNeD4Xo5jfWtUofNhJZVm0orRgBmy9u00uKkECb3z2HH8bzYlGpQ4uLb7foNtT8Tqda%2FITLm1%2FQZ6fe791rHu2UXsBt%2BMklhw%2FIICK2%2B%2B17P9kclnCOGqf10HmL1RPYnVtrWGhiys8%2Fbo7%2FW70FpX&X-Amz-Signature=d1b1d877750b226163d5e62c927f0fea3b06c0c283e94048b772dadecc76457b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
