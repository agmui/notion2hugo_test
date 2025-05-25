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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664AQEF2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCJ6af7QnytPtv5ddpZRbGFfvzEVWaz%2BzP%2BBLI4HIcJIwIhANG0F6p49DvSnI65w2HXgahaa7SdiujArhY1yllE6JuwKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9a7cO1gqIoZU6Argq3AMdxp9CvJscodXOGPQ%2BrWCRjYcVbQEm3Z6byS8bah1i4MtF220KHGBYixnyGaKjNg9n5iXU%2By%2FbPlmN587Tom39sCePZ3MmODfj5PeqEnVNfg%2FeGxMEXTDRelfdt38lQNXbumz4KuvV%2B5HHtWt6lOVBo3nbOr6OkfhwNycozPci6Y0tPqGSh7ZtGlS0RG8f2IX2ZU8efjAg0jMyuDHyuQnKYAfq2pSIIU6YO44IG4kUIjcUe0f5kC5O31O8Up3hQTee0BSWAcEaM6ehyQNfx%2FlW%2BgfV%2FiJ92mMtHZupbfcxT42m2%2BrWZ955b7XCk3t3SF6PQMMlGAgmHIdN5SRUhrM01Ax6ja3XmP161rVgYxjOHq7mob85tA5isZabccEIdTNbkEi%2F0wmJg4F715p25E7PNXH5ro20mbBh1P0JmvxrI%2Byj9RfRRm02x2XxOqEBvVqgpB95WifG5%2Fajpg%2Fm6W3LNE5ZoxzzwXKEiV6X89lkzDqv%2FhNfrEWAhauufrHtsElVGYtlWYMXUOp0mzHCtu1gUtLUmb%2BvOvkVq4x1B04PHf2jvx1BYE0IfMNwi8U%2FmwYRuuvuwX%2FBc2nwuA5pLA0DrGlEwQzWCguBPCyVuTv27WlHzMHFjXSmqmYCfTCV%2F8zBBjqkAe1isxJWhHvvWAno9layKY0vwZEEBA1YcTlIF8EdDrEjnUB2wS%2FDVAisKXjb7Xv%2FMLE%2Bqz5bvUZu0PZtT0oAaljgruREhyT6TBXRYpA%2B0F6Zgt2i1fy6D%2BLiEeSBhl%2FAKKdZZR7x%2B%2BnqDK9h7YRht2FSTCfDb3C4CxuN2szCHsrSw13GHIqvzlaL7EhO9Ya23yWwR3dOT5vk6jk4%2BUn3nm4kvF5j&X-Amz-Signature=d136baf6527c455ea3d3e1bd36c709b7017f231bfd18390f3748f4b244c03dda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664AQEF2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCJ6af7QnytPtv5ddpZRbGFfvzEVWaz%2BzP%2BBLI4HIcJIwIhANG0F6p49DvSnI65w2HXgahaa7SdiujArhY1yllE6JuwKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9a7cO1gqIoZU6Argq3AMdxp9CvJscodXOGPQ%2BrWCRjYcVbQEm3Z6byS8bah1i4MtF220KHGBYixnyGaKjNg9n5iXU%2By%2FbPlmN587Tom39sCePZ3MmODfj5PeqEnVNfg%2FeGxMEXTDRelfdt38lQNXbumz4KuvV%2B5HHtWt6lOVBo3nbOr6OkfhwNycozPci6Y0tPqGSh7ZtGlS0RG8f2IX2ZU8efjAg0jMyuDHyuQnKYAfq2pSIIU6YO44IG4kUIjcUe0f5kC5O31O8Up3hQTee0BSWAcEaM6ehyQNfx%2FlW%2BgfV%2FiJ92mMtHZupbfcxT42m2%2BrWZ955b7XCk3t3SF6PQMMlGAgmHIdN5SRUhrM01Ax6ja3XmP161rVgYxjOHq7mob85tA5isZabccEIdTNbkEi%2F0wmJg4F715p25E7PNXH5ro20mbBh1P0JmvxrI%2Byj9RfRRm02x2XxOqEBvVqgpB95WifG5%2Fajpg%2Fm6W3LNE5ZoxzzwXKEiV6X89lkzDqv%2FhNfrEWAhauufrHtsElVGYtlWYMXUOp0mzHCtu1gUtLUmb%2BvOvkVq4x1B04PHf2jvx1BYE0IfMNwi8U%2FmwYRuuvuwX%2FBc2nwuA5pLA0DrGlEwQzWCguBPCyVuTv27WlHzMHFjXSmqmYCfTCV%2F8zBBjqkAe1isxJWhHvvWAno9layKY0vwZEEBA1YcTlIF8EdDrEjnUB2wS%2FDVAisKXjb7Xv%2FMLE%2Bqz5bvUZu0PZtT0oAaljgruREhyT6TBXRYpA%2B0F6Zgt2i1fy6D%2BLiEeSBhl%2FAKKdZZR7x%2B%2BnqDK9h7YRht2FSTCfDb3C4CxuN2szCHsrSw13GHIqvzlaL7EhO9Ya23yWwR3dOT5vk6jk4%2BUn3nm4kvF5j&X-Amz-Signature=f17c0ecddc1f5e3e8ade493abdd83ef1d16f438ed7759fbc517748e89cb1c0a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664AQEF2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCJ6af7QnytPtv5ddpZRbGFfvzEVWaz%2BzP%2BBLI4HIcJIwIhANG0F6p49DvSnI65w2HXgahaa7SdiujArhY1yllE6JuwKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9a7cO1gqIoZU6Argq3AMdxp9CvJscodXOGPQ%2BrWCRjYcVbQEm3Z6byS8bah1i4MtF220KHGBYixnyGaKjNg9n5iXU%2By%2FbPlmN587Tom39sCePZ3MmODfj5PeqEnVNfg%2FeGxMEXTDRelfdt38lQNXbumz4KuvV%2B5HHtWt6lOVBo3nbOr6OkfhwNycozPci6Y0tPqGSh7ZtGlS0RG8f2IX2ZU8efjAg0jMyuDHyuQnKYAfq2pSIIU6YO44IG4kUIjcUe0f5kC5O31O8Up3hQTee0BSWAcEaM6ehyQNfx%2FlW%2BgfV%2FiJ92mMtHZupbfcxT42m2%2BrWZ955b7XCk3t3SF6PQMMlGAgmHIdN5SRUhrM01Ax6ja3XmP161rVgYxjOHq7mob85tA5isZabccEIdTNbkEi%2F0wmJg4F715p25E7PNXH5ro20mbBh1P0JmvxrI%2Byj9RfRRm02x2XxOqEBvVqgpB95WifG5%2Fajpg%2Fm6W3LNE5ZoxzzwXKEiV6X89lkzDqv%2FhNfrEWAhauufrHtsElVGYtlWYMXUOp0mzHCtu1gUtLUmb%2BvOvkVq4x1B04PHf2jvx1BYE0IfMNwi8U%2FmwYRuuvuwX%2FBc2nwuA5pLA0DrGlEwQzWCguBPCyVuTv27WlHzMHFjXSmqmYCfTCV%2F8zBBjqkAe1isxJWhHvvWAno9layKY0vwZEEBA1YcTlIF8EdDrEjnUB2wS%2FDVAisKXjb7Xv%2FMLE%2Bqz5bvUZu0PZtT0oAaljgruREhyT6TBXRYpA%2B0F6Zgt2i1fy6D%2BLiEeSBhl%2FAKKdZZR7x%2B%2BnqDK9h7YRht2FSTCfDb3C4CxuN2szCHsrSw13GHIqvzlaL7EhO9Ya23yWwR3dOT5vk6jk4%2BUn3nm4kvF5j&X-Amz-Signature=6114c5626a79fce75c710aadcb8a45f7af3bbb75033ac641499b27bef74b6447&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFGV4MD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDJRHEPVNpW8KjDiZyolTIW4mwWJIl7%2FwtiEOFg7DoNEAiEAhdERzsqtRTgO%2F6xcjo5W30oaoQYQkCneiPbwOY4cRqgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDEBpRxpxrQu9axAGoCrcA9ZdCLDaR5UybcOBJ7PmLamm83W3g40N3Qd6NjX%2FHXk9I8TlkwGh8XkWM%2FTf%2BStb8Snu%2B9FBoXfX6nUcs3k8qg2prjeRPayYH3ZoZFx4gWJ4K%2BTFwd0zs%2FLcGzGCW2v%2F3tGy2b0LeUFyxTq%2BKrRrWaGSRHVIsyBhbkd1ikIokReX%2F0CELWL9nA1orRgs5HNWFWCUnOcqk%2BvUPJSqLFHH1HceYwc1v57isZV7RSgjC%2FqHJQxy5zlCFIC02iZ1IfCaleZ5nVMeyNqXJ6UrRXFhUXmvITRY9d5Lj0rBTi4HWdjerQ0QE8cWtrT8%2BJtgjutSb7NTiywzeggTCtjJCDVGpu9z12DnlOqzGwZGl%2BpPy6SOMcyV03FMScmqBWbkxXuHreacRqUY2pPIs8NHertU4zHTFKU0JteyiV0DAJQah1jcYABIPLY1axKmTWRcJorCU7kApd8DTratRq0Jx%2BRceDLKKU8n9%2FoCVhD7txU%2FvtPMTkLsciXHl9xyr%2F%2F0C2ixJ%2FUyuK5gmbs5eROoMH3C4sY4IsyIU8FJCzRH58f8dw%2FZamIcL%2FmnXK0kdUrwUQO8KvPL8Z1slKdqzbyLUq1UKBa0HIB3%2Faegf6Fa92ELVQpemVFOb%2BlKugJWcLNTMID%2FzMEGOqUBjFu7Yxgw0Th1ZsDrj4fcEewJKAdtm8rXX9zkSprHWUnndGsIjR%2B6ccg%2BE%2F9450aopZUexavEUy51sljWGJY%2FZnJKpeM0Sb1Rr0E%2Fl%2FZGxR2lmarWe6wfQenwfextpG6MBgsHkNsHmuMTSnUQUDThebotQ8Q2xz9B0whKLHJR4WxIF5e3%2BlL74oSrixttAmheb%2FrA1F%2FOB94Ekmsifi08Rg9Bnugu&X-Amz-Signature=4053dea0659b6030b8218cecd5d9e54e9bb554811b53eb87a30e00968b5632c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XPVRC3%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDqm1buDo3g4%2F1Yrwt%2BvRm0xCULj2DFFztReCbi5d810wIgOaruw7b8JnBPMskr09OAwGnpDo%2BPy2fmTfKKk9EF3TUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJmfz%2FVDiKT3pCjxQyrcAwC0%2FcBdSPuT%2BtuTJCVzvimCmo4cVuNptq%2BsNNUucHncwUqIddo9qbiEWTz5IAQOC%2BmJNoaOqN35uaqgwXTJ%2BcDTnw1%2FBIbj3G2KDG70zGSypm7l7BFQUmfq%2FhCEb%2F0Hf%2BflmccefHiJzh9qSlYk7Emk8KRMSCQHhPhnsY%2FwG8fW%2Ff2Upds%2FN3%2B3QaZnudA6Un5lj43Yv%2B3M2QbS6mWSpO3eF%2Fmvbuhqj%2Fal%2F%2FUdm3QILjP%2F15gg%2ButHctSWi5RPZ0Gp4Vbp5dztIBinypLAXO2PRDIdiHFqk3K0%2F2mhhTi7IZ4o7ih%2BCeK50wyAcrdtN6BKaPN4CsAU3Q2NbzpCA%2FARcRcfcIX5sgEK7isc2wxuZFTBljm33H2Xzug%2FI7wa6gCCGks9PPdzQi0Tf2CTnyeG%2FTz%2BTDPMJ%2BoWxsNFMgRX4DySGd4zCepTVbu8saOTguFiIbY11MsTnKcY6kPWaOfG9DCsJejsdcbbfduaoqirAkCj%2FzDriwwdBXeZWOVeJqnANAs70RxXuBEVGPmvWC%2F2yuOpxZH8VXbjrukbKwwYRavQyTXoloqLFq0LaGbslEqctJlA6iODQsAtSWrmVDBgh3UKLilS5tV8iQI8Yej1MskJ4KafD2DV47P0MMv%2FzMEGOqUBVikWiUvTM%2FCMznlHqGlMpDj7nOGXUkJQ%2BEYvKXBwtb0VSJyRAQaVJgOiKcJ8XFDvM%2FpeGQqfDNVHBylWg0cHveQ8DJcGRst%2FitMpUBfe8rQlSzvH1lkgwbp8%2FacG58uJpIrBE7pfkzKEX0YCzU2xtwKIyv7EU%2FCakrPJdJ0U9ANyTTwKj71veOmOGDAs%2FuRkglOn%2ByntAbKXM3Ach7Eok%2B2RDlfU&X-Amz-Signature=7e176f26847f7683efc1400b8ba7a084f72550c50fc379913856112e19f3489a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664AQEF2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCJ6af7QnytPtv5ddpZRbGFfvzEVWaz%2BzP%2BBLI4HIcJIwIhANG0F6p49DvSnI65w2HXgahaa7SdiujArhY1yllE6JuwKv8DCDEQABoMNjM3NDIzMTgzODA1Igx9a7cO1gqIoZU6Argq3AMdxp9CvJscodXOGPQ%2BrWCRjYcVbQEm3Z6byS8bah1i4MtF220KHGBYixnyGaKjNg9n5iXU%2By%2FbPlmN587Tom39sCePZ3MmODfj5PeqEnVNfg%2FeGxMEXTDRelfdt38lQNXbumz4KuvV%2B5HHtWt6lOVBo3nbOr6OkfhwNycozPci6Y0tPqGSh7ZtGlS0RG8f2IX2ZU8efjAg0jMyuDHyuQnKYAfq2pSIIU6YO44IG4kUIjcUe0f5kC5O31O8Up3hQTee0BSWAcEaM6ehyQNfx%2FlW%2BgfV%2FiJ92mMtHZupbfcxT42m2%2BrWZ955b7XCk3t3SF6PQMMlGAgmHIdN5SRUhrM01Ax6ja3XmP161rVgYxjOHq7mob85tA5isZabccEIdTNbkEi%2F0wmJg4F715p25E7PNXH5ro20mbBh1P0JmvxrI%2Byj9RfRRm02x2XxOqEBvVqgpB95WifG5%2Fajpg%2Fm6W3LNE5ZoxzzwXKEiV6X89lkzDqv%2FhNfrEWAhauufrHtsElVGYtlWYMXUOp0mzHCtu1gUtLUmb%2BvOvkVq4x1B04PHf2jvx1BYE0IfMNwi8U%2FmwYRuuvuwX%2FBc2nwuA5pLA0DrGlEwQzWCguBPCyVuTv27WlHzMHFjXSmqmYCfTCV%2F8zBBjqkAe1isxJWhHvvWAno9layKY0vwZEEBA1YcTlIF8EdDrEjnUB2wS%2FDVAisKXjb7Xv%2FMLE%2Bqz5bvUZu0PZtT0oAaljgruREhyT6TBXRYpA%2B0F6Zgt2i1fy6D%2BLiEeSBhl%2FAKKdZZR7x%2B%2BnqDK9h7YRht2FSTCfDb3C4CxuN2szCHsrSw13GHIqvzlaL7EhO9Ya23yWwR3dOT5vk6jk4%2BUn3nm4kvF5j&X-Amz-Signature=06c95e5d04193d8dc8c5b0fb1d9090cb66cac0e0c71baef295de495bc9ee74a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
