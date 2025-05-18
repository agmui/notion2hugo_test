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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IVYFPW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuu2XgLnBteRW04mHFq8kBFWH75QS%2BEXgrGsGRyhYrHAIhAJ76x5nuQhR%2FRxWtcLGx2C9PbqVEwK1NHCoRes1V0RIOKv8DCH0QABoMNjM3NDIzMTgzODA1Igx186DsgpZtAP6OQ%2Fwq3AP%2F6JDxL1aLVFTO%2BoLykjhuMofeDKmf3JRq6joHMYMJpJlEJhBw1JJHwHDRC6Kxx%2BvvHfGAdinLfJfCfqPahVcgFJMdhikSCDT2Ny7tUC1l79O2elZmobYufsUefrpEscd4BpT%2FPxmCHU6uopSoqMzcJEWHIMyc4ijFLnPChhKTpVAzkSgvFObUtysoyBeoTx88PKMo58IZ1ZfiK8JHyocUgEX6DX0qbEvq%2FLlCAtqy3RrQCjWuW4cLaqtS739xFFzlqI3J7yt5g8f3bExgvPVQKtv1kxESuFO44ObQXKEn9%2BWc6Is%2F83Vjl4O60PU4WRQ6uBV7VIK7ql%2BhIpkpgfD3z4dGafqW1hI%2Bw2Ced0%2BMtLj4DjDYvSbsIlAaEPODP1RY0nDCGHJMDwfpFpwFMIniPoUvC8O2FL9iFNxNRJuZPZD3VPR9cHasuoGdZv6zg4slIMRr7%2BBayHJQ4Npky9Q9oCK6NV0ui4%2FJgbk8gnZSq%2B0q50KgeDqqCRn0j4dba2DO51m%2BTxiY5kFWECWD28kwT1Rc9x8bWCNUm%2B4bNKhA6aB5zhIOkmF6WM%2FrxdoTtBevhr7yu5kF4urHc9BADFkkguB6o981CNw7phZQkQWfizmd9vIE4IuFQViZYzCj56jBBjqkAeQncd1quNMmT3gS4k8B%2B%2B6BrFvqfK5GT0ad%2FBV5riODRawSE8Fi1lMfkK9TZkBjuTeWXT28L11ZxaJ2zNc2kyGYMFT3C3T2mMOw9waEgQJVp2ZNJhf3m02qvMmyIQvcUoFh95V6Pvn3e%2FWa%2FEMMuunPYtQ1zyhS8GXDB%2Bwa3AK8ra7N9XQAnSFSqQFYivCSVCev4yqReX2nwjHE%2BFZF4RLx%2B7gA&X-Amz-Signature=58f36253560ffe7896a86ffb4ce9c41bc042b90a2e759c513dfa01ba9c936658&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IVYFPW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuu2XgLnBteRW04mHFq8kBFWH75QS%2BEXgrGsGRyhYrHAIhAJ76x5nuQhR%2FRxWtcLGx2C9PbqVEwK1NHCoRes1V0RIOKv8DCH0QABoMNjM3NDIzMTgzODA1Igx186DsgpZtAP6OQ%2Fwq3AP%2F6JDxL1aLVFTO%2BoLykjhuMofeDKmf3JRq6joHMYMJpJlEJhBw1JJHwHDRC6Kxx%2BvvHfGAdinLfJfCfqPahVcgFJMdhikSCDT2Ny7tUC1l79O2elZmobYufsUefrpEscd4BpT%2FPxmCHU6uopSoqMzcJEWHIMyc4ijFLnPChhKTpVAzkSgvFObUtysoyBeoTx88PKMo58IZ1ZfiK8JHyocUgEX6DX0qbEvq%2FLlCAtqy3RrQCjWuW4cLaqtS739xFFzlqI3J7yt5g8f3bExgvPVQKtv1kxESuFO44ObQXKEn9%2BWc6Is%2F83Vjl4O60PU4WRQ6uBV7VIK7ql%2BhIpkpgfD3z4dGafqW1hI%2Bw2Ced0%2BMtLj4DjDYvSbsIlAaEPODP1RY0nDCGHJMDwfpFpwFMIniPoUvC8O2FL9iFNxNRJuZPZD3VPR9cHasuoGdZv6zg4slIMRr7%2BBayHJQ4Npky9Q9oCK6NV0ui4%2FJgbk8gnZSq%2B0q50KgeDqqCRn0j4dba2DO51m%2BTxiY5kFWECWD28kwT1Rc9x8bWCNUm%2B4bNKhA6aB5zhIOkmF6WM%2FrxdoTtBevhr7yu5kF4urHc9BADFkkguB6o981CNw7phZQkQWfizmd9vIE4IuFQViZYzCj56jBBjqkAeQncd1quNMmT3gS4k8B%2B%2B6BrFvqfK5GT0ad%2FBV5riODRawSE8Fi1lMfkK9TZkBjuTeWXT28L11ZxaJ2zNc2kyGYMFT3C3T2mMOw9waEgQJVp2ZNJhf3m02qvMmyIQvcUoFh95V6Pvn3e%2FWa%2FEMMuunPYtQ1zyhS8GXDB%2Bwa3AK8ra7N9XQAnSFSqQFYivCSVCev4yqReX2nwjHE%2BFZF4RLx%2B7gA&X-Amz-Signature=90a556368ab11782620125d3499f904bbdb2b2f343440897c71e569caf25518a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IVYFPW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuu2XgLnBteRW04mHFq8kBFWH75QS%2BEXgrGsGRyhYrHAIhAJ76x5nuQhR%2FRxWtcLGx2C9PbqVEwK1NHCoRes1V0RIOKv8DCH0QABoMNjM3NDIzMTgzODA1Igx186DsgpZtAP6OQ%2Fwq3AP%2F6JDxL1aLVFTO%2BoLykjhuMofeDKmf3JRq6joHMYMJpJlEJhBw1JJHwHDRC6Kxx%2BvvHfGAdinLfJfCfqPahVcgFJMdhikSCDT2Ny7tUC1l79O2elZmobYufsUefrpEscd4BpT%2FPxmCHU6uopSoqMzcJEWHIMyc4ijFLnPChhKTpVAzkSgvFObUtysoyBeoTx88PKMo58IZ1ZfiK8JHyocUgEX6DX0qbEvq%2FLlCAtqy3RrQCjWuW4cLaqtS739xFFzlqI3J7yt5g8f3bExgvPVQKtv1kxESuFO44ObQXKEn9%2BWc6Is%2F83Vjl4O60PU4WRQ6uBV7VIK7ql%2BhIpkpgfD3z4dGafqW1hI%2Bw2Ced0%2BMtLj4DjDYvSbsIlAaEPODP1RY0nDCGHJMDwfpFpwFMIniPoUvC8O2FL9iFNxNRJuZPZD3VPR9cHasuoGdZv6zg4slIMRr7%2BBayHJQ4Npky9Q9oCK6NV0ui4%2FJgbk8gnZSq%2B0q50KgeDqqCRn0j4dba2DO51m%2BTxiY5kFWECWD28kwT1Rc9x8bWCNUm%2B4bNKhA6aB5zhIOkmF6WM%2FrxdoTtBevhr7yu5kF4urHc9BADFkkguB6o981CNw7phZQkQWfizmd9vIE4IuFQViZYzCj56jBBjqkAeQncd1quNMmT3gS4k8B%2B%2B6BrFvqfK5GT0ad%2FBV5riODRawSE8Fi1lMfkK9TZkBjuTeWXT28L11ZxaJ2zNc2kyGYMFT3C3T2mMOw9waEgQJVp2ZNJhf3m02qvMmyIQvcUoFh95V6Pvn3e%2FWa%2FEMMuunPYtQ1zyhS8GXDB%2Bwa3AK8ra7N9XQAnSFSqQFYivCSVCev4yqReX2nwjHE%2BFZF4RLx%2B7gA&X-Amz-Signature=93383e953c3362d9a3cf2e4104dceb12279c4a46b2a89fbb3ebe2e0593a9b71b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPBDW4B%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaQKQU7acDJ9Mee%2B9nfnmMwj3rSNsz%2F0pu3%2Fkn6T1FgIgBq2Pa6vy%2BZvLoi6pyFNvpNdx1WE0VHwC9H3u3WH5U6Yq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPsqJANa6jVc9AE8GircA4BmXBmy97UBO6j3JbTuYqDmBmnlWd5C8xPdwuDMV3YAVOn761OUuNLqgZD%2FAVIvC9cgRuzChCU0CVxPojQAso0lHw2kEXvvnJ2CHP4NVNF6Mjpj4iT9HAa6GIUC7S3MH7j1cJV%2B6RUvjJfuNet7tlm%2FfY69OsC8%2BAP58k2F5UDuVnqfCbc2%2FDRwB8G1fPAtD0KWCBC5g4hdorO1fD7h%2B3Vd1BSCnd8EbJ0tys13BK1bvAYTPez%2BNjtrn4GIJVLB9R1hHkaDZxX5YuZtVTYeFBStIiyA6TeHrl9G7WUQbN%2BiMvR1oeL4da5sEqSI43zLGftWMIf9MPu737bG3LsdWYW6QxpQNFu0THGxNUUHLF9j5ybFZ9Vo5GuLwMby3%2BXUqUwvk8JLBbyYtUfl6ILdVX5ZKW93jRBM8is1qaVr51VRzczAVSssov3ZnOn2R1Hq%2BplHMlTauPD7eX6anDh7TG4HPAWAUP6ZZp1YIJPn4uOkyioQMwQas%2F25Hw3gvJPXy4eAqoK7GcnDIaq4dgsmZGbI62Nyq06j2Uz858p9NJjHEW8LG9GIfrV1Bqbm8UQZcg1Nh3%2Brm8UfLPJqOcouhVJE74uatiY9zCAz9CrFwGtJOUPNdYCDdTb%2BXhA1MIHnqMEGOqUB868b234SJGywcSmBikt%2F9WOaQ9j6%2F%2Bkvb8zpGfdkIykV%2B82vh60DVODFnNsg8WJOaqtL3V4pyr6KWIALzkJSutarJHY33L7eS1VyiaWksorpkeKdnF5Nzry%2BmlD36tUO5Za7iStzYscYF5t6mh1nUDj00kBG%2FhoBWX%2BKWu8zSutrt4jeJmGfxGm4JWxrAMyF9BB5eaLjjiDIBMSbGgqR8%2F7Tts8f&X-Amz-Signature=726a6b539917b36d057f168f7411bfec9b589cea44c8596eebbf2987bbe30153&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MISXWIE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEq9vEE31m7dePXHBJRcW4PLigOv99dxjL7F2%2FL%2BzuEPAiAgio2%2Bl3tHUgQJqD%2FsacfPEFqv1Xb2reFIbvkdS2B7Gir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMzAYNlhG6%2B227Xht9KtwDHfVRqthJ%2FdMqguaiZvHYmfuKenUXPJQHUWAIModvZshDeDDIHIEOBnu4EhM6QfvaD4xPIB0YFmZbtmjH2k%2FsMK2TBOLZE6aAk06pOhWtN9aHZxTjHNSyaBWHFoIh73jwlR1spxuhd%2Fl4CHbaAawUrhqlk3h7FZIjVK4w9AtIUu2BEPFLzvsO7ATjfDskInBrsbC2y%2BFvKPae%2FtgF2ss65MKteRNCWsdTwAHVg8gpKLRfUsPAN6igU8igd3RqIyk%2BYdMvegcJOHG4GMF0zmaDxyzAdFsRyIu8cjgvbqeF3R1gIybf7a0c64OaecMGn3qhYZDeXapDq6G45SKeTQF0qjQaX3DK4I3wtrkDX%2BhxfpGX8w2gQW5BwMnvQU6AjGYP8y7K9aLPgRSDHIUNWubYPH3Mg3rqaX8Ix5nFtJBG0Xf0erRxmFG9bagKSMMB8hSDBbH9EBErcB716wHOQbWv%2BmUjR1NTAEmYC8EriSTOn%2Bneqhi3nEu8ytlCtv3TVYVGIGVWP7wRp32gseLZzSIXpy4Lt8wXDBXKfUJekBrUsTIrcwrYPkJenWVvKkPFYmtfN5OwH5v%2B2ijhXXc1Eoa1HoBHuIytwv4k0A6OGfMEUaUtgbZIy%2B5y8dPv3xswwOeowQY6pgH%2BjjWpQVMmeZ186jJJQlCpotRnB0oXt7UcnZpNSoXVkji17u%2BYitETtisDDGZmKNh1vbUQpZyoCZVnV4OQUDfjqSr5FwkIg%2BwzgsNBINy58q8D6SoYu3GnKfXurrAGLBlQM%2B9vESX%2B9DHw%2BOFmdBcUtUPqwFdCSlcXCtQoBVnT8eItgsfCo3khsao8P5AxlpPvo%2FCyPki%2FPDAhA3ImXUgshe%2BvPFl7&X-Amz-Signature=6d579029684204bed1d38fb7b8446dc8a18c8e337b4ee48f4a8ea8ac23161c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IVYFPW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuu2XgLnBteRW04mHFq8kBFWH75QS%2BEXgrGsGRyhYrHAIhAJ76x5nuQhR%2FRxWtcLGx2C9PbqVEwK1NHCoRes1V0RIOKv8DCH0QABoMNjM3NDIzMTgzODA1Igx186DsgpZtAP6OQ%2Fwq3AP%2F6JDxL1aLVFTO%2BoLykjhuMofeDKmf3JRq6joHMYMJpJlEJhBw1JJHwHDRC6Kxx%2BvvHfGAdinLfJfCfqPahVcgFJMdhikSCDT2Ny7tUC1l79O2elZmobYufsUefrpEscd4BpT%2FPxmCHU6uopSoqMzcJEWHIMyc4ijFLnPChhKTpVAzkSgvFObUtysoyBeoTx88PKMo58IZ1ZfiK8JHyocUgEX6DX0qbEvq%2FLlCAtqy3RrQCjWuW4cLaqtS739xFFzlqI3J7yt5g8f3bExgvPVQKtv1kxESuFO44ObQXKEn9%2BWc6Is%2F83Vjl4O60PU4WRQ6uBV7VIK7ql%2BhIpkpgfD3z4dGafqW1hI%2Bw2Ced0%2BMtLj4DjDYvSbsIlAaEPODP1RY0nDCGHJMDwfpFpwFMIniPoUvC8O2FL9iFNxNRJuZPZD3VPR9cHasuoGdZv6zg4slIMRr7%2BBayHJQ4Npky9Q9oCK6NV0ui4%2FJgbk8gnZSq%2B0q50KgeDqqCRn0j4dba2DO51m%2BTxiY5kFWECWD28kwT1Rc9x8bWCNUm%2B4bNKhA6aB5zhIOkmF6WM%2FrxdoTtBevhr7yu5kF4urHc9BADFkkguB6o981CNw7phZQkQWfizmd9vIE4IuFQViZYzCj56jBBjqkAeQncd1quNMmT3gS4k8B%2B%2B6BrFvqfK5GT0ad%2FBV5riODRawSE8Fi1lMfkK9TZkBjuTeWXT28L11ZxaJ2zNc2kyGYMFT3C3T2mMOw9waEgQJVp2ZNJhf3m02qvMmyIQvcUoFh95V6Pvn3e%2FWa%2FEMMuunPYtQ1zyhS8GXDB%2Bwa3AK8ra7N9XQAnSFSqQFYivCSVCev4yqReX2nwjHE%2BFZF4RLx%2B7gA&X-Amz-Signature=cfa3d010d1d8bf72e4aebeff8ef68fb24c8495721653d46a2060421e929bfd48&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
