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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRS4XZC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwpQ%2BSTAaJjOOg8QsBLV%2FxAx3PJOf7cyTQGj0JkMJkuwIhAP%2FD%2BLoHI3sukW0DtkU3DPFQtYDHjap47qpuMZ5Z9EQrKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4gT%2BmsrnE%2BAQCFCQq3AO5b%2F6OQmPvPccrSA6SN8EyV06Uhy5u3rXw%2BvnWxHldbqbKxWIV6D5jy8cvZ58iQ6HcovdPhU9yQK5Fx7VGobvyP62gh%2FIkUd6aKZIvkB9pX%2Bmoqf62UVMak3ZvGbn2172%2B0ThYCfUdZHWVH1ATtpVdWVsgeZh1OmCgIPpx4EMNxWrHqFUaJEYjiY858bEbAYEXEmQOcLVOHmJbRnYvcnUzHC1L3scNdmPXp%2B2sGo3SV1wmuTMxQMEsloR43Jnv9Z2NEMOizDkITMBhsXicOo4PwQnDgbMWxGzv8bpx3Qa%2Bhii7AydduzVdJZlvD3ixDsW9qAHaNI3kGb7Eojfe8bTsbOoQ4cT7NLpxT%2FaiSKGHPGv4WHtJoa2V2JGl0ORkel%2BodowpPvmOiTNR23zFpGukNND5FK%2BiIPJdepEdOA30h1S4zlpdTBhj9lyJy%2FbZ4m96dHruB7ThVSaI9vhFbZLzOgq%2Bk1aSUwxD7Rx%2BfTxuXgxNTAqzViY3GCSFjlWhYD2p85cTvE5IAn9shcR%2Fdbo5nSucCsoCa%2FDCn1w8MSWxR69I8feC%2B4M771T0l3%2Bx%2FLzzni39rp9OGsyPK7wb4cGlkWQ7ENLSl1jEE7DYze7dnWJsUR5LkLWd6QrzGTDNvPu8BjqkAfdbmfuBghAK79hPtR4sRVovQiDTbwuJIUWKKqu92XPqkl68du4AdTkKSa0S9QL4icqPHJNwbnp52QY0o51ImEu0GYqsBGqOGoLU9EKbHi3VyN2p9%2BYf0zKQquG2f33KcQtIiAXIaTt%2BA8bNE6brCDCQB6pZBEVj%2F%2Fq2E1vLbfhJD54zkOC9YIyivKQkeo8h6xB7tX21cqk5a4sT6dotoxLpHtux&X-Amz-Signature=e5e5e237d8773c0ec4a8432e92bf14738975f92f58bbcec87172115eb10db9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRS4XZC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwpQ%2BSTAaJjOOg8QsBLV%2FxAx3PJOf7cyTQGj0JkMJkuwIhAP%2FD%2BLoHI3sukW0DtkU3DPFQtYDHjap47qpuMZ5Z9EQrKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4gT%2BmsrnE%2BAQCFCQq3AO5b%2F6OQmPvPccrSA6SN8EyV06Uhy5u3rXw%2BvnWxHldbqbKxWIV6D5jy8cvZ58iQ6HcovdPhU9yQK5Fx7VGobvyP62gh%2FIkUd6aKZIvkB9pX%2Bmoqf62UVMak3ZvGbn2172%2B0ThYCfUdZHWVH1ATtpVdWVsgeZh1OmCgIPpx4EMNxWrHqFUaJEYjiY858bEbAYEXEmQOcLVOHmJbRnYvcnUzHC1L3scNdmPXp%2B2sGo3SV1wmuTMxQMEsloR43Jnv9Z2NEMOizDkITMBhsXicOo4PwQnDgbMWxGzv8bpx3Qa%2Bhii7AydduzVdJZlvD3ixDsW9qAHaNI3kGb7Eojfe8bTsbOoQ4cT7NLpxT%2FaiSKGHPGv4WHtJoa2V2JGl0ORkel%2BodowpPvmOiTNR23zFpGukNND5FK%2BiIPJdepEdOA30h1S4zlpdTBhj9lyJy%2FbZ4m96dHruB7ThVSaI9vhFbZLzOgq%2Bk1aSUwxD7Rx%2BfTxuXgxNTAqzViY3GCSFjlWhYD2p85cTvE5IAn9shcR%2Fdbo5nSucCsoCa%2FDCn1w8MSWxR69I8feC%2B4M771T0l3%2Bx%2FLzzni39rp9OGsyPK7wb4cGlkWQ7ENLSl1jEE7DYze7dnWJsUR5LkLWd6QrzGTDNvPu8BjqkAfdbmfuBghAK79hPtR4sRVovQiDTbwuJIUWKKqu92XPqkl68du4AdTkKSa0S9QL4icqPHJNwbnp52QY0o51ImEu0GYqsBGqOGoLU9EKbHi3VyN2p9%2BYf0zKQquG2f33KcQtIiAXIaTt%2BA8bNE6brCDCQB6pZBEVj%2F%2Fq2E1vLbfhJD54zkOC9YIyivKQkeo8h6xB7tX21cqk5a4sT6dotoxLpHtux&X-Amz-Signature=fff18805f007414242ecfffc0fcaaba98e6579df1c854b4609edf86e9fd8b6ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZNVVJT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpgX1iEW%2B4jjKzB3DKzCw8DAjF4sPlczqTr5VGHGky0AIhANs%2FbYX4s9ahgxFv%2B04Sye9LtEJNzcz1rMfP0ZcnrSPFKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSaBTal2UTvpNgudwq3APNg%2BcOCxtZzZaY1CykUhqQ8L7DkasPpjjm1ZGX202kTFZMgd2KokFdHvDpqkXjfAyRmqEUVd6WM0fubxsFS%2BNzV0zRLevOPQTx0ORT60V856qeWky14BBYmMm4xVht8mDyISAVqEff6OeZEoryetPVP4rACKjFSklgK9McbxISzxnynzQaY8ULxOTbpS2JMRmRtgbu%2Fjk733%2Ft3pYH8SZZLQh0lqwvq%2BPLTQ7FZRX3rHdb9BTgrormP%2FfbZ6DL3flgwRZqDjcvJNwJnwKy28aiwcKH6Cu3SwU3IAOgqvlL%2FDh%2FQN2v0ob4fjWxT8GaN3Q4Glz9vEgVoZ0zS%2FM8YkxDaYboCnQ81bStNy%2F5ijyjl6uLeSNAG6j0D5meK5J13qdUz45nQUzF84ND%2BTd9%2FqZuBCraVzaPGTdWhl7WDViWOZ4130FaGenckhk5KLhygXUwZdQhPSy90Xzqda59LTBcmr%2FKwXsnYxUcgXffIRiL0lZvnALTUc460qk9tlTV8%2FlJIJQYzysPSBbGO3lZomPxXpUvk7AYYIn8sloXuWyrpyQwarZXppizKrQQTBnYaBXLx%2FqctjHm%2BkzsOmCcU29dQJnft2xQ1P81Qg56pa6jKFlZwA7DpzhoEyFLgDCEvfu8BjqkAcStnLznB9BGLRHmblRf1Bbb8G7%2BE0u%2BxHaCUArj3eBjX0rfBTzBJyUVlxvm8Il61Nd%2B7E01h%2Fp1%2Bqe0l0BwROm8JyAb5c1t0M9ZyTMUhWtyX28lwsMGwWfMHzpG3tNmW7QlOk0GzmW2Lp80tuxEjbJTncWfdykxY6OnHABnVs1To4AkEEEJc7pW%2FCv0kxTR7CXafPeilFuZWgIVfsY6OvAhyesR&X-Amz-Signature=7b26194bb574cdb6f09b5f14dceaf0845b057af78326d7361b2b19315456dbb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5BKZ7ER%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDklhmlbcJA5O0NofbL9NWy2U4BnlylinAiZYG%2Bsl67VQIhAIPPkMI8QN84jE30Nji%2F4IrB7pg1dMMeDDbhYsamFMb7KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDr5G0uMvMfWRMUCsq3APHAUPwUYanyRmlhz3yp8uMellaF83%2BDyGI8J0fqT24mdqmKNfMR32yKC%2F0z%2FgPr4TSm%2BeFH3hRt2RIz8s1A9NfMRQsWlvQSE2ruW31ftZh1GJxMLaDU3tJ2nIEzBlAjFOJx19wBusLqnN8AqU4z8ABET5%2BOtQoh1t2IE4qxSpsbjWF%2FXL6wG1r8b80PdDYb2Y4X%2FFe%2Br6qRmaCRt%2FlNsimtvAJSryCUdIx7J6oJWowwub9iYOUgniwai0WYloKyHBV08wqKhEg%2FrKNu7M1SM2rZK4JgnQw77IotGeKkr8Tt4en4Y%2F0sNke7lqM3tGEYS%2FCtT3lOSkk%2FSKPXUkzQ4w0tnCotqGmo%2F43T0T1%2BeIwnVuZJXae1arGKkaoIBX0UQfDBuCHcsKZcsO7K6qG3hLBGldnhVDmaSTbe9b%2F8FUAxOQ5pG0d1p8ROcXLMX%2FjGWVIWUG%2Fv%2FIpXARGS5h9KLp%2FtzA7nX475vRvdRO3R9OUTIg6hU16dHusVAp0E1qCWf6flPstiQq6yaMHulD0mulTwqsJKlryAZaSk0VKOTSGPWJh%2FmMy4hRiAOB6MdBM6f4P%2Ft3QomsKcr78tXFcRno%2BJVmXhra7M5C3z9rSTjyBU32tK9OxIFQi%2Bf2vTjClvfu8BjqkAa3wjebYUl03e9ORlc6ErsxrtsTHxdEPlPl%2BJTBR3Kzs8Gwk1E1zFJjeOXuBbXDbFM41tfXL6gIZOI0Olgu%2Fc%2FnDBI2uO5WV%2FyJ2y3O3nLR1LpOnjYR%2F5mVVvNFvTPWdN5GHubcoID6rGoQVqtH%2B0g5PkJg1a1fwxSNYKGjlFfYOJDfX%2BJbd%2FIC5%2BpZBTG5qwBJJrJ%2BfOYGv5OhGpGLlBx9C56IH&X-Amz-Signature=dddfec55aaeabdcaf4e45b1dde45b235655578cefffc5041cf32f777dc28ae6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXRS4XZC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwpQ%2BSTAaJjOOg8QsBLV%2FxAx3PJOf7cyTQGj0JkMJkuwIhAP%2FD%2BLoHI3sukW0DtkU3DPFQtYDHjap47qpuMZ5Z9EQrKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4gT%2BmsrnE%2BAQCFCQq3AO5b%2F6OQmPvPccrSA6SN8EyV06Uhy5u3rXw%2BvnWxHldbqbKxWIV6D5jy8cvZ58iQ6HcovdPhU9yQK5Fx7VGobvyP62gh%2FIkUd6aKZIvkB9pX%2Bmoqf62UVMak3ZvGbn2172%2B0ThYCfUdZHWVH1ATtpVdWVsgeZh1OmCgIPpx4EMNxWrHqFUaJEYjiY858bEbAYEXEmQOcLVOHmJbRnYvcnUzHC1L3scNdmPXp%2B2sGo3SV1wmuTMxQMEsloR43Jnv9Z2NEMOizDkITMBhsXicOo4PwQnDgbMWxGzv8bpx3Qa%2Bhii7AydduzVdJZlvD3ixDsW9qAHaNI3kGb7Eojfe8bTsbOoQ4cT7NLpxT%2FaiSKGHPGv4WHtJoa2V2JGl0ORkel%2BodowpPvmOiTNR23zFpGukNND5FK%2BiIPJdepEdOA30h1S4zlpdTBhj9lyJy%2FbZ4m96dHruB7ThVSaI9vhFbZLzOgq%2Bk1aSUwxD7Rx%2BfTxuXgxNTAqzViY3GCSFjlWhYD2p85cTvE5IAn9shcR%2Fdbo5nSucCsoCa%2FDCn1w8MSWxR69I8feC%2B4M771T0l3%2Bx%2FLzzni39rp9OGsyPK7wb4cGlkWQ7ENLSl1jEE7DYze7dnWJsUR5LkLWd6QrzGTDNvPu8BjqkAfdbmfuBghAK79hPtR4sRVovQiDTbwuJIUWKKqu92XPqkl68du4AdTkKSa0S9QL4icqPHJNwbnp52QY0o51ImEu0GYqsBGqOGoLU9EKbHi3VyN2p9%2BYf0zKQquG2f33KcQtIiAXIaTt%2BA8bNE6brCDCQB6pZBEVj%2F%2Fq2E1vLbfhJD54zkOC9YIyivKQkeo8h6xB7tX21cqk5a4sT6dotoxLpHtux&X-Amz-Signature=ed8e12c54fd6e12f60e566c05c42eac4ffceb2701070c7d0b2145bbe78fadf18&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
