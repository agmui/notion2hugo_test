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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHPOFEM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGapbgRiYQYpdWBxqLMUzrTq80uNVlQOUvIfB2VTK%2FaRAiAa95980KsjizSwAKznZL6oBgv2RZsvsyLtMhLMx2o9wCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUJDGcyAyKGZ0LJCKtwD0vCA70FRNCd%2B4xLcNbP%2F%2FBLnbLQPU%2BhXBgyD9aDmAqIgp5e%2FCAMg17fWg5Lhz5DPGMLyOrfC8INTwHFk%2B0PBxcKGS0Szc5Cs%2Flm%2FvJHMPWD60rJiIKrn16tWRb6frakFhzhaqoVO5Pk1OoOVTCZ3zxA6S9%2BM0MfYfhWRVryyTq9i0NR1C6Gc5MHCyj7vL3HcKpVR2KpQeqU1KkhXCROLEDkutZHKbdX0rIMpwUkjM5ka1sheKe%2B75bu1fVgWAF3A2x2Q9daDsLdmBVQupEq6JvWQLODqDbYTkLRftUf9y6OwSgtK1fh0Hh8BlrY2Gy6fU45hulrViE7thB0DFasvzg2hMlDUrcL3pZgSd%2FXAnKq0pJb8WaZ%2FQ7gEvEkLynC6qb8gM2s0e2ImZVW%2B%2BNce%2Fsc9RJJYmZ3D0RK0Cy0UfaACsOgQanRqN1ZQm2cYNLOhJvPFzcdxTxppR8Zibj%2FeeHAbEJlYITXKSycNESFW6ENqo0DNwCh509xsC2Dfr7c3Ngwy6D%2BISju9isVo4vNUNJLkD7MseQjl2bch7bcQAzuXr8gjB3Fo9qDxim0QjD2AnSH09wMzYIi24xVO9p5%2BF8AZ4kMu5ojXMh1adgcVTFZ858%2BWy08OpUVAW1Qw27r%2BwAY6pgFoTFCW49GLZEREyCurBN7scnIZo7x%2FAPABGgd1jBOi2SQVtZw3Ns%2BPNNe7StOKKsaLnM4V82mdX9mOGYclJ3MwA6HkXvyKnTgn02iJAP4dcZwVxg7nEIPDv2ZZzTiiCVj5PzGW4lNEEmUd0WiHPD2l19sffFeADANSW3su%2FUftkjqaVi%2FIlKtyztJSMkxkEQ5iBZi0bSKliEHdq63zpeagk5cqLjdu&X-Amz-Signature=acf5c035330523b8168a5d0d213ff19d3232b007d1b453d86d298cf2bd9040ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHPOFEM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGapbgRiYQYpdWBxqLMUzrTq80uNVlQOUvIfB2VTK%2FaRAiAa95980KsjizSwAKznZL6oBgv2RZsvsyLtMhLMx2o9wCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUJDGcyAyKGZ0LJCKtwD0vCA70FRNCd%2B4xLcNbP%2F%2FBLnbLQPU%2BhXBgyD9aDmAqIgp5e%2FCAMg17fWg5Lhz5DPGMLyOrfC8INTwHFk%2B0PBxcKGS0Szc5Cs%2Flm%2FvJHMPWD60rJiIKrn16tWRb6frakFhzhaqoVO5Pk1OoOVTCZ3zxA6S9%2BM0MfYfhWRVryyTq9i0NR1C6Gc5MHCyj7vL3HcKpVR2KpQeqU1KkhXCROLEDkutZHKbdX0rIMpwUkjM5ka1sheKe%2B75bu1fVgWAF3A2x2Q9daDsLdmBVQupEq6JvWQLODqDbYTkLRftUf9y6OwSgtK1fh0Hh8BlrY2Gy6fU45hulrViE7thB0DFasvzg2hMlDUrcL3pZgSd%2FXAnKq0pJb8WaZ%2FQ7gEvEkLynC6qb8gM2s0e2ImZVW%2B%2BNce%2Fsc9RJJYmZ3D0RK0Cy0UfaACsOgQanRqN1ZQm2cYNLOhJvPFzcdxTxppR8Zibj%2FeeHAbEJlYITXKSycNESFW6ENqo0DNwCh509xsC2Dfr7c3Ngwy6D%2BISju9isVo4vNUNJLkD7MseQjl2bch7bcQAzuXr8gjB3Fo9qDxim0QjD2AnSH09wMzYIi24xVO9p5%2BF8AZ4kMu5ojXMh1adgcVTFZ858%2BWy08OpUVAW1Qw27r%2BwAY6pgFoTFCW49GLZEREyCurBN7scnIZo7x%2FAPABGgd1jBOi2SQVtZw3Ns%2BPNNe7StOKKsaLnM4V82mdX9mOGYclJ3MwA6HkXvyKnTgn02iJAP4dcZwVxg7nEIPDv2ZZzTiiCVj5PzGW4lNEEmUd0WiHPD2l19sffFeADANSW3su%2FUftkjqaVi%2FIlKtyztJSMkxkEQ5iBZi0bSKliEHdq63zpeagk5cqLjdu&X-Amz-Signature=0f4b4b3b9c1120fff12afafea7ecfad896ace9bdd6ec9efd1ff5c7d2f19b0fb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHPOFEM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGapbgRiYQYpdWBxqLMUzrTq80uNVlQOUvIfB2VTK%2FaRAiAa95980KsjizSwAKznZL6oBgv2RZsvsyLtMhLMx2o9wCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUJDGcyAyKGZ0LJCKtwD0vCA70FRNCd%2B4xLcNbP%2F%2FBLnbLQPU%2BhXBgyD9aDmAqIgp5e%2FCAMg17fWg5Lhz5DPGMLyOrfC8INTwHFk%2B0PBxcKGS0Szc5Cs%2Flm%2FvJHMPWD60rJiIKrn16tWRb6frakFhzhaqoVO5Pk1OoOVTCZ3zxA6S9%2BM0MfYfhWRVryyTq9i0NR1C6Gc5MHCyj7vL3HcKpVR2KpQeqU1KkhXCROLEDkutZHKbdX0rIMpwUkjM5ka1sheKe%2B75bu1fVgWAF3A2x2Q9daDsLdmBVQupEq6JvWQLODqDbYTkLRftUf9y6OwSgtK1fh0Hh8BlrY2Gy6fU45hulrViE7thB0DFasvzg2hMlDUrcL3pZgSd%2FXAnKq0pJb8WaZ%2FQ7gEvEkLynC6qb8gM2s0e2ImZVW%2B%2BNce%2Fsc9RJJYmZ3D0RK0Cy0UfaACsOgQanRqN1ZQm2cYNLOhJvPFzcdxTxppR8Zibj%2FeeHAbEJlYITXKSycNESFW6ENqo0DNwCh509xsC2Dfr7c3Ngwy6D%2BISju9isVo4vNUNJLkD7MseQjl2bch7bcQAzuXr8gjB3Fo9qDxim0QjD2AnSH09wMzYIi24xVO9p5%2BF8AZ4kMu5ojXMh1adgcVTFZ858%2BWy08OpUVAW1Qw27r%2BwAY6pgFoTFCW49GLZEREyCurBN7scnIZo7x%2FAPABGgd1jBOi2SQVtZw3Ns%2BPNNe7StOKKsaLnM4V82mdX9mOGYclJ3MwA6HkXvyKnTgn02iJAP4dcZwVxg7nEIPDv2ZZzTiiCVj5PzGW4lNEEmUd0WiHPD2l19sffFeADANSW3su%2FUftkjqaVi%2FIlKtyztJSMkxkEQ5iBZi0bSKliEHdq63zpeagk5cqLjdu&X-Amz-Signature=0d88121fa559efdc4f7bd0891ddd5d0c557a76af024f39777536920bc3dcaace&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666FNKSVJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBjb9GmSOPp%2BXKJAhULvM17WSgLpyZHZ5betRjjE9Ua1AiEAr8epb3p4W7c3kMXqRSU6JZujnOhfMb4ktWZlOMtGn9sqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2JNYDXdFy%2FRsMLgircA%2FYqnWW6CdtX%2FMlWP%2F%2BT%2FNl2FBA4tLdLfCyEh6n328orrgu%2BmRUkLVO0kXVjfO94Xufw3kD%2B3oedjmxEs0WEv8T1Evezt%2FabZsszMoEfY0toBUbtrHaRS1KawB5Yowp2ovV4I0k%2Bz2FJblWPnZddRzJRhkwbpgQQZjvJZ%2BmdVLsIfIoEeFRzlzDNlu63EmH1hRAL1ERIbvi3LHgd6z%2B%2BaXA1RdlJilsKzs%2Bs9kQgZ1nItdShSb2dEisJX81yVXFL5cT6ocmkmmWd0M9lretJIe661DKGMuoxRBD2zSWfM3UB%2FT4aRpexrqbrNQ640%2BuX5tuX57D81EdB7uQwlTJKqlCjrLxX%2BY0INtlV61juaPiF0QOEErxPNcgo5%2FGfqmVXBbSAbvKwmsXvLwYJ1OP%2FD8bTd9BNzhy%2Bkhj91LVqBrrPs0Rl3Ukhj3StTiOKU%2FcuI5%2B0eGH8IiirVQxr7yfakmxzijtyXhg4eVhTy4pDKmH6VMJ3Bl2HFWKoS3MLB329uZOpJ8%2BH58vHEKhlNowWkmrshnwBwi45YLB28qJkC%2BSjEnYyK1HxwMrnoUZMcCRababZ0QNyYlOrp0hMX9FFgYngxaH0hay9F39SoeowQZpEzhHW8qWcz3bTrl9BMIq7%2FsAGOqUBnwqtLrA%2B4fOKN73cVB9R65zHH8MgagF9JBfrwRN9COwsga38DwqONQZ3PwcQcfetRERau3SI0UAjVXGtlcneKQQa6eOFT6bwmRd4%2Fo7ALSW8%2B7f1N5gt5F1X4dv5bVXAYlbdzcSffRY96Js4NmltK1b356TGfVndu%2BKx47SJWU8agAOSaLCjXWxFZkSLpy9cpgKiU6sVEfupp1%2F8PBhbwLQn0%2BE6&X-Amz-Signature=b3d7babf22fc474ee6851ba907703927f0377d711f092c9eef85f1966d6d8071&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYSZ7MH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCtU%2FFM0eYkzQUObqZAeEBTF9ZM%2Fd7gMpYmgACnEJ9kLwIhAPvr9z3MTuiuE4Aze8D97TI5tEd1ptXEUzBZFzE0X%2FjrKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWU3KH%2BK%2Bdm%2FaiiEwq3AOayGSWnPco2cXt3e%2FQKG40GbiJDjAXoh8LFolR3xqDIP3cLV5YulNNnyiBxAmp0hHZ5WSBK%2BqjOvF10amr4134q9GmfIFPSuI86Bkhthd2xU%2FwvvW06I7x0YzWhDvVbKs7XwSzQdN4ct9%2BTgAHs%2BKDdu4V5YJpgAgRWmKCd0THJgKI3xE8RjInQ8b70F2sHCQnjV1P286X5nHu%2FOI5vnOqmYEunc2EUG%2FQZoa4B1gWfKK7BkK9ZEkJ4y8nP8BA00%2B9ugxqmDtbTH%2F0HhvzTCLYB3wYnh67D5V4WjUHHmR%2BT7kMAIb1Csr4V6d3cQ2TmXJc%2FhFKNK3LRz1JyDOpFUY9SaMyqUVTy9L7hcmeqD12DX6NKSG0IZB2GEGpNoT1HNmKJKsXdyecra%2Br%2BDelj%2FdzBLovF%2FLJ3%2B9Kaa9%2BXfCqBmKDZbhbS%2FBc5OrDNUMa2MfKcH8MsBLRvOpEXdmLXqRIKmaXXEE8nDgOkI81tqZ4IonEmgfTudMS%2F4AnfL0Pfv3%2Fbdi4GAzHPu971M12F6W69z1kZCEPVtATKcQ0Bxe6sOlywK13eaDZO7TRSkobtnQzQcrSrfdgVeglcLHzp2fsIU%2FrWd5HH07B5n3InvMXggOFiHuNaKSOOnkRWzDSuv7ABjqkAe4TvashDdx1GL55JWzNdz1crJuNHSN5AA78iDgp%2F%2B0T6knsAEMW4cGUcNUZu2FLxBnR1NVNHczxZzYieNVH0WAPF%2FUub%2FkSioicybL8wjUEZgJ6LAA1Okfgp1CY5ozxuuA2gOUJXuvG1h7y0nSyJCygt9fd6WLHz4YQW6G%2B2fD0HncpSQ4J%2B19ct3aV9RP%2BruKWUCKTg5tD1atNSFGMSAfbC8Du&X-Amz-Signature=bf82117a5be1bdbf88a96d4d74c5ed2f6b3e89e88bcd531e52969c027752b4be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHHPOFEM%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIGapbgRiYQYpdWBxqLMUzrTq80uNVlQOUvIfB2VTK%2FaRAiAa95980KsjizSwAKznZL6oBgv2RZsvsyLtMhLMx2o9wCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUJDGcyAyKGZ0LJCKtwD0vCA70FRNCd%2B4xLcNbP%2F%2FBLnbLQPU%2BhXBgyD9aDmAqIgp5e%2FCAMg17fWg5Lhz5DPGMLyOrfC8INTwHFk%2B0PBxcKGS0Szc5Cs%2Flm%2FvJHMPWD60rJiIKrn16tWRb6frakFhzhaqoVO5Pk1OoOVTCZ3zxA6S9%2BM0MfYfhWRVryyTq9i0NR1C6Gc5MHCyj7vL3HcKpVR2KpQeqU1KkhXCROLEDkutZHKbdX0rIMpwUkjM5ka1sheKe%2B75bu1fVgWAF3A2x2Q9daDsLdmBVQupEq6JvWQLODqDbYTkLRftUf9y6OwSgtK1fh0Hh8BlrY2Gy6fU45hulrViE7thB0DFasvzg2hMlDUrcL3pZgSd%2FXAnKq0pJb8WaZ%2FQ7gEvEkLynC6qb8gM2s0e2ImZVW%2B%2BNce%2Fsc9RJJYmZ3D0RK0Cy0UfaACsOgQanRqN1ZQm2cYNLOhJvPFzcdxTxppR8Zibj%2FeeHAbEJlYITXKSycNESFW6ENqo0DNwCh509xsC2Dfr7c3Ngwy6D%2BISju9isVo4vNUNJLkD7MseQjl2bch7bcQAzuXr8gjB3Fo9qDxim0QjD2AnSH09wMzYIi24xVO9p5%2BF8AZ4kMu5ojXMh1adgcVTFZ858%2BWy08OpUVAW1Qw27r%2BwAY6pgFoTFCW49GLZEREyCurBN7scnIZo7x%2FAPABGgd1jBOi2SQVtZw3Ns%2BPNNe7StOKKsaLnM4V82mdX9mOGYclJ3MwA6HkXvyKnTgn02iJAP4dcZwVxg7nEIPDv2ZZzTiiCVj5PzGW4lNEEmUd0WiHPD2l19sffFeADANSW3su%2FUftkjqaVi%2FIlKtyztJSMkxkEQ5iBZi0bSKliEHdq63zpeagk5cqLjdu&X-Amz-Signature=56ef6177491b9df7b03d582a2bd5ba8a093c100487925bf86bb37484a95e282c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
