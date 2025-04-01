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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664N6YJ6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCcecdXq95SsOXh9jlN5vhWuTvclw3qwudiSPMRCmLuvgIhANecB%2FcRuZL9sPDGwTe5n3kiDnIO%2FuJkOf4cVGKFy2UeKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmp6J7DLcn4B4AavQq3ANMwy%2BEyJdy%2FXtnjHpF02l1OEe5weCxGwiJKXsC83Y78U7SWATGlbIBj6LRL%2F7%2Fsc74dubYEtC610oN6yxwk8PfKk4rmGrXPQaSybDAIzVQHyzGphohhiceNUhsdldpKfcKNkOUaIWqdZsP6O%2BOC4Dyg%2Bfdi6SE0kmMZmqJrq2PhuYVARcMIKHdLoOu89INbSnx9bFKVCgbVIoabFGwh7Q3juihKpPTgsGX%2FUa3xOkbWkVWrOvRWxuOiECZMAW6t%2BoUGctAReJ2emaI50I6E3nL8eKn%2BQz%2ByykCcKByIvsYTd28femRH5namCK1G4QwkM%2FhpPKgeYmqvgpoIM6MwGPC4BMDoxFv2R7k39k7hX%2B3NAItCGypE3sen21Zy2noFqV4he32mtpM%2FVXRcVdry5eACJeYkzdHvkNJx3irT%2B3r5tNFKoqy6Nbwlwt0V%2F%2FConAfeIeiCbFkdCg48NaTY2TiJgsJR5sFR1%2FVYjx%2Fx62FjjkEO3mILFA4Qi3UDD8Z8fqT5pvOi0oS%2BTrO2q5WiE5Kx%2FDsVkHrKOXhEM5Rj5x%2F9X6owP8L5xBgLwOYd%2BfJrrtrtChjhrmJozZ3f9EgTvQejjfKLrH7W%2FQpdD7ipU%2FSoXl4bf4l%2BqDaIx69RTDd0a%2B%2FBjqkAaKEhA8aMJ9q1RXag1i840%2B%2B%2BPo2jzpwfyQduImnKasqyCE3ndiRJOhUGXOlLMHhgUQRMyBlzV6C3DD5DxRc9kDGM0scBJc6qkG901pV1tGU%2BpLY6bh24jMlGASAhJn7Nw%2FEfYdjhkc1uZkH%2B95C1yAo94TIKMNXHAoJRvOoIJKlwhKIpc6DMwFWvk5HZPQh1NZPBGnmDGhKc2turQ42zteCEQCK&X-Amz-Signature=ab2da826554caa92447b02da85db7c7c9830f2d9c36c718b27f98df96b561af0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664N6YJ6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCcecdXq95SsOXh9jlN5vhWuTvclw3qwudiSPMRCmLuvgIhANecB%2FcRuZL9sPDGwTe5n3kiDnIO%2FuJkOf4cVGKFy2UeKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmp6J7DLcn4B4AavQq3ANMwy%2BEyJdy%2FXtnjHpF02l1OEe5weCxGwiJKXsC83Y78U7SWATGlbIBj6LRL%2F7%2Fsc74dubYEtC610oN6yxwk8PfKk4rmGrXPQaSybDAIzVQHyzGphohhiceNUhsdldpKfcKNkOUaIWqdZsP6O%2BOC4Dyg%2Bfdi6SE0kmMZmqJrq2PhuYVARcMIKHdLoOu89INbSnx9bFKVCgbVIoabFGwh7Q3juihKpPTgsGX%2FUa3xOkbWkVWrOvRWxuOiECZMAW6t%2BoUGctAReJ2emaI50I6E3nL8eKn%2BQz%2ByykCcKByIvsYTd28femRH5namCK1G4QwkM%2FhpPKgeYmqvgpoIM6MwGPC4BMDoxFv2R7k39k7hX%2B3NAItCGypE3sen21Zy2noFqV4he32mtpM%2FVXRcVdry5eACJeYkzdHvkNJx3irT%2B3r5tNFKoqy6Nbwlwt0V%2F%2FConAfeIeiCbFkdCg48NaTY2TiJgsJR5sFR1%2FVYjx%2Fx62FjjkEO3mILFA4Qi3UDD8Z8fqT5pvOi0oS%2BTrO2q5WiE5Kx%2FDsVkHrKOXhEM5Rj5x%2F9X6owP8L5xBgLwOYd%2BfJrrtrtChjhrmJozZ3f9EgTvQejjfKLrH7W%2FQpdD7ipU%2FSoXl4bf4l%2BqDaIx69RTDd0a%2B%2FBjqkAaKEhA8aMJ9q1RXag1i840%2B%2B%2BPo2jzpwfyQduImnKasqyCE3ndiRJOhUGXOlLMHhgUQRMyBlzV6C3DD5DxRc9kDGM0scBJc6qkG901pV1tGU%2BpLY6bh24jMlGASAhJn7Nw%2FEfYdjhkc1uZkH%2B95C1yAo94TIKMNXHAoJRvOoIJKlwhKIpc6DMwFWvk5HZPQh1NZPBGnmDGhKc2turQ42zteCEQCK&X-Amz-Signature=0f585db62db55a599d5e25af220945841dfaf67d5ae3d90a8d6ba97b43dbe91e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQGAQXJ4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCpEEToiVMiQGVPW%2B3id4wz%2FjGnIGSOcHUgvWeTBAEnoAIhAPdnOnoiE7lF4ehLjrwzI%2FnM1guYXPfJfzkEXPHZYGUEKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCEOCyzPmeBlCDB0sq3APjXmdFGHJ5LE%2FYbhiTaKnQhpCpiZVZWSLK2Nws7SVSqD%2BiJmXaObyUiQViGK7qp%2FefaI8adYs8V8tnNLgZGlbkkgqgwxNZ22Jc0kRcSrAOfMz7Jht9ATZkI9fUWgZ522pjWssVrKwab1iAmZpFuQAkTYd296XsagVpJs9BNnlK0PxEAn2%2BnOiG1aXMUwgg6P%2FzSsMKA8JdDup0KKbGBH5iUGpH49deibQcHCIgrUApGziyHBlLS0qnwMuS5U55QlK18VtSdwn%2Fo56p0T0Awi22yi2F1r6wfyEK%2Bj%2Bp8yej1Q0oToIwplYAhKvDdqqNBkZ%2FuCPIf23vF56SKCBsHHCEhyCy2QAhAN2jtsVyXxQxzF5AXOP0URP0WwPal8mWOzThtyQ7lp2xupJp0QIV8b1WVl1Z4e9qcTNDtgDUWwgHNa%2Bi%2F6pInM6ECjCArvJrN%2FM78aRw4QwKkL8UTZ2UExKlnfR%2FRT7%2F1PPH%2BfjMLoY%2BFaZ72zFnGE3ckIfWP4QJW6M7HOnXVQV7ArVc2PYFg4kbb9jQdWxIghNk%2BPmQVDVRABOJ0djLmR347zrdzdzYMiicpYo%2FoaeZF4FFrS0SEQI5GHzhTt91pxt21z3zElCtPFD643fFI8yP5QYADTCl0K%2B%2FBjqkAXMAyhnqrLFFxNPBm5EMD9BbZ%2FQRYEJtGU3ZqINJcA6PZYynYlMg0jT7ygqP%2Fk3Hp54pQRqvm5ep28RMb8PwDkcCDuwUIPgC37%2B2DXh3Dm81j1azMJVymiRnlo%2BbSq5%2FL4YP4gTRGmrqEB8o%2BaCBTDX3VtsHDKn7SuxvbfnMSOWWRwaEcKGHwvwjA1YKv0MWa0gdJDINI1lRMfrDtA0KJupsyDK5&X-Amz-Signature=86524a94cabad61be79f8044025cef11ff537984919ee9aece98721387378ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCQY35IN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgei9yshuMNeTI3293EIvvs6Rp3g7yHpOVUhi%2B9dt99AIhANmH%2Fam9%2BpIadvAFL61W39jkHLgv3st8mwJtX95YE0HgKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnHCbvUgvFpaUlXsAq3AMwF9%2FRLVcnwEKjkDEEFY0J2ArYLp%2FvwFWSoOFFc10ed2kEUVKiNeTgBVEic4SBXqZrIFCZEJRK8uEGkYb430%2BeXuwXxaC4NxSTQDKod9gJ17DcWkiUEKOiNGl8f%2BPDgHT779%2B3xN4XrcZa5fz5Vt4264qRVzQzzivfgGkB1uZ9ZWOzzBf1cdhSC7Uu8%2BO220OTbFhXHUHUK8pnUdJcv6DR9pXtYABI7FjwaVOS0VETO1I06DcLRFdbM5Ldy43Ym3zMtmS3bCT8hwfJt8XBIAUxZrxaONKWa38OqBaid9sz6Z5FNLyvWLuDAdvVGjBD%2BU3%2FnZZSKnJr%2Fp%2FMGRMmNsWTvSfQ1dQ%2B%2F4cIHNKPJ4qLXpPyJmCLmBE2aAKSLi0yndz5MOHPAqmQg15KAPy4qucbBr3k6z6qyJl116cdsJS5h7%2BbOXt1oJk1vhCIF6NqP3AZX48tvBG%2BJ1Zpbic4QiyYuLWChECJ1VNni9zWz4fICn5b2Sc5qbpcpyEOuVRHmtuuaaca9jg6rc0dBhQorVdFRIrwQINh951ti5nF%2BOMcR5TFjS5Feu6yJPzDNCLAZBMWdjXFJyXx4TElLHvDkvVHPmhe%2FAzb0hGMC%2FXqhoWt4eQNEIIkGHVAee00mTC%2B0a%2B%2FBjqkAfrlKT%2FOi343d%2Bu4n7Qw3D726zPJ2bmdX6N0Yqfhj2ny2%2Bl0h1PHg5eDYgwFIrmbi61SeANx6CE3Vq1hhbDUAOCin3bXkS6sxCYS9IaywHEzB58tlZO3OJLpN6talsRXJOGyRWb9EbkYVHAH5yXyolrFGiyVh6jgvDjctS48dQNuDZ668rPoPCH%2Fkbc8aKK%2BSKM2XJWqY%2Bm1nLkCArNdxiGJuk2R&X-Amz-Signature=b798432953a10663df5d7f85f369472445d9f1c30a711668d8d88979f4086316&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664N6YJ6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCcecdXq95SsOXh9jlN5vhWuTvclw3qwudiSPMRCmLuvgIhANecB%2FcRuZL9sPDGwTe5n3kiDnIO%2FuJkOf4cVGKFy2UeKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzmp6J7DLcn4B4AavQq3ANMwy%2BEyJdy%2FXtnjHpF02l1OEe5weCxGwiJKXsC83Y78U7SWATGlbIBj6LRL%2F7%2Fsc74dubYEtC610oN6yxwk8PfKk4rmGrXPQaSybDAIzVQHyzGphohhiceNUhsdldpKfcKNkOUaIWqdZsP6O%2BOC4Dyg%2Bfdi6SE0kmMZmqJrq2PhuYVARcMIKHdLoOu89INbSnx9bFKVCgbVIoabFGwh7Q3juihKpPTgsGX%2FUa3xOkbWkVWrOvRWxuOiECZMAW6t%2BoUGctAReJ2emaI50I6E3nL8eKn%2BQz%2ByykCcKByIvsYTd28femRH5namCK1G4QwkM%2FhpPKgeYmqvgpoIM6MwGPC4BMDoxFv2R7k39k7hX%2B3NAItCGypE3sen21Zy2noFqV4he32mtpM%2FVXRcVdry5eACJeYkzdHvkNJx3irT%2B3r5tNFKoqy6Nbwlwt0V%2F%2FConAfeIeiCbFkdCg48NaTY2TiJgsJR5sFR1%2FVYjx%2Fx62FjjkEO3mILFA4Qi3UDD8Z8fqT5pvOi0oS%2BTrO2q5WiE5Kx%2FDsVkHrKOXhEM5Rj5x%2F9X6owP8L5xBgLwOYd%2BfJrrtrtChjhrmJozZ3f9EgTvQejjfKLrH7W%2FQpdD7ipU%2FSoXl4bf4l%2BqDaIx69RTDd0a%2B%2FBjqkAaKEhA8aMJ9q1RXag1i840%2B%2B%2BPo2jzpwfyQduImnKasqyCE3ndiRJOhUGXOlLMHhgUQRMyBlzV6C3DD5DxRc9kDGM0scBJc6qkG901pV1tGU%2BpLY6bh24jMlGASAhJn7Nw%2FEfYdjhkc1uZkH%2B95C1yAo94TIKMNXHAoJRvOoIJKlwhKIpc6DMwFWvk5HZPQh1NZPBGnmDGhKc2turQ42zteCEQCK&X-Amz-Signature=e8caca9210c7e0c4cee97e0546ccea1088f06841a579f6c93564cd4f8b93ead9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
