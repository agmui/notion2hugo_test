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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TZOVA6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeqHhSnB1biqkEufkFp9eN1SuAL9GxqFaVOVfKD6EISAIhAN9f4r5tcccf6cMWOqEkz%2BjDFeE5MzWrPHfzaXqmcnz3KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyVs%2FviZ7V%2BoTKMoQq3AOoG4oxwxUARqHRhE6JJIo8BQ%2FetwWXbe0NM7U6H5D%2FwEwYGbuIrobv3YaxUAAu%2FGHQ4%2BJtMacone%2FKtMBx6AgzCeUif7hmU2GxJkLmzRcdDX5t7LMENaOJDAjqSkie915hbYBT%2FQpYmd2FU6JkneEVQSZxL9V%2Fl3EWZLC8qk%2BGsC4r%2ByzF9wY4Zzosy1WQvbSSYfb21imv%2B2N%2F10skGElQis0pIM7PBnb86RWd8EoEXpdFVHPkAvP9wcyzCMjHRl5EQiqsCQhzM%2FUO31VVtijFMKxszNK8btwToDzVZWQbiw08%2FQ5GRd%2BarOIRuvnYDcX%2FIJhXIOA6Mo%2BLDku4KICnte%2BU2A6rjqYqdKqX81AfIbqMVx2knICteKjNQa8VmwjwWHI6QfeXijbyvr68sgZ5Uuq%2BrcoVnwi1v7VxPcXz7KBlDm07iERUYTfNDsxon3qJkgBR%2FSJM2yx1UhKv%2BLkI%2BTki17VW3V4MAvSWoccctWegt8mvQ9naDh%2BsIM%2FB2WU5QZpqylX8k89F5z%2Bo%2FP1066egW7LSh3MmunPNo2mjh%2B2MiObgAr3%2BA4cFXlaHW4bqKvR%2B48xdP6bh5RaNMk4lYuXvcxSyH%2BGhRFRBJXyPSah7BEpSS2caEDDMfzCBuvW%2BBjqkARxL%2B7BqXA0NNoj1%2B2qrgTtwXwFGqWQz4342HXVxdulEVUbs62AmU88RwFeeGcHkpE%2BwnFRcabct2Lpwunf%2FJ5YytXnS46dfGMWDtmG%2BiOUqAQqCNHDQoEQsKtPaxBzmHmbsGIKc4fEfVXOkk1f8rY%2F7m1fRu%2FP14%2BbDXK9tGRs2Er68FYkgX4ZC%2BKXoNomNC6JuqD3iuiK9o%2Fjb54OnivLFWZkV&X-Amz-Signature=266a3b35c44ce29e7187815b4c25db7729b478299a0813fd91dcb195b443b3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TZOVA6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeqHhSnB1biqkEufkFp9eN1SuAL9GxqFaVOVfKD6EISAIhAN9f4r5tcccf6cMWOqEkz%2BjDFeE5MzWrPHfzaXqmcnz3KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyVs%2FviZ7V%2BoTKMoQq3AOoG4oxwxUARqHRhE6JJIo8BQ%2FetwWXbe0NM7U6H5D%2FwEwYGbuIrobv3YaxUAAu%2FGHQ4%2BJtMacone%2FKtMBx6AgzCeUif7hmU2GxJkLmzRcdDX5t7LMENaOJDAjqSkie915hbYBT%2FQpYmd2FU6JkneEVQSZxL9V%2Fl3EWZLC8qk%2BGsC4r%2ByzF9wY4Zzosy1WQvbSSYfb21imv%2B2N%2F10skGElQis0pIM7PBnb86RWd8EoEXpdFVHPkAvP9wcyzCMjHRl5EQiqsCQhzM%2FUO31VVtijFMKxszNK8btwToDzVZWQbiw08%2FQ5GRd%2BarOIRuvnYDcX%2FIJhXIOA6Mo%2BLDku4KICnte%2BU2A6rjqYqdKqX81AfIbqMVx2knICteKjNQa8VmwjwWHI6QfeXijbyvr68sgZ5Uuq%2BrcoVnwi1v7VxPcXz7KBlDm07iERUYTfNDsxon3qJkgBR%2FSJM2yx1UhKv%2BLkI%2BTki17VW3V4MAvSWoccctWegt8mvQ9naDh%2BsIM%2FB2WU5QZpqylX8k89F5z%2Bo%2FP1066egW7LSh3MmunPNo2mjh%2B2MiObgAr3%2BA4cFXlaHW4bqKvR%2B48xdP6bh5RaNMk4lYuXvcxSyH%2BGhRFRBJXyPSah7BEpSS2caEDDMfzCBuvW%2BBjqkARxL%2B7BqXA0NNoj1%2B2qrgTtwXwFGqWQz4342HXVxdulEVUbs62AmU88RwFeeGcHkpE%2BwnFRcabct2Lpwunf%2FJ5YytXnS46dfGMWDtmG%2BiOUqAQqCNHDQoEQsKtPaxBzmHmbsGIKc4fEfVXOkk1f8rY%2F7m1fRu%2FP14%2BbDXK9tGRs2Er68FYkgX4ZC%2BKXoNomNC6JuqD3iuiK9o%2Fjb54OnivLFWZkV&X-Amz-Signature=525f19910dc0fdea65b2fb3bce80d64289d2a38606c033ee66db929df694cf19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDIOAM3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDCdprT25yPZEL4%2BZDBLceogt18slB9C8N%2FG2qj0TyCTgIhAIlpMY65AVm6AS%2FI29%2ByR3hBur7cpalZn3%2FkQaIwS%2F0zKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjvtRZxuFT6EbOoNYq3ANYPD1T9QS0IF1yM9qqvwYq11oGik37svwOmZA%2F4NrwS7%2Fpc29YbVqNP0lkW9IA676VtDWJbBbFEhKSGy1DYvvVz3Mqz6G5eB2OMbGLPzRs%2B0Ui9yWNPaaQvIWBJ%2FSjOoO9j2SGxJXcXUmINrVBLWpdn9RFeubTrD3kBmTdvCAI5K43KDiEkxGqi2hfV21mGO%2Bri2dJ38xWO8X3g7hTWzNUngBc%2Bf9qqUDEh8Wf5ZVbPraLgC5ajLLSstXIsSnZEm8bjjUhM2D%2F42vX0vxOGjDD9a3zwZpe7UFcX0rr%2F%2B48GbNsfUbWAw5PZxFx%2Btsn8SP7QlWXNOSg4Ja1rH7E6CVndbdFLDRyNA%2FDb68Py%2B5GTuJsdG4mXxIVpTIj7nyVmJA%2FJrFjNukPTHB1De1DohHRJ8xJNW%2F3x1BwMQEuAUa9SOrZ0AIrBNZqUCug6KvHjye75EoH29bvTMhTZCk3vRg4kUzyYFV0IlpdMV6UDu2EA236zGDzKOxZlN9kkl3UKkjwujHgBeQRN7TNA8jwaFL7XCV%2BosmTMxpQh1ynQ%2F9Pi3HWSdA7CfWQHDYwKioIsDcun0QLc6KuYwFSgV%2BxEJ4S34VFWk3iDnQlV0U7iMtV1lKSPdBKxMLwERgiFDD2ufW%2BBjqkAdS5xfDqerWwq8F9kN0X3yQRWf2vQHAGvpyUSZc7UA95r3wOJQkixbybabZEATXthjXYr57SK5%2FuM8nR39wnbDJ%2BA8EDY%2BEmpRAhOVtLFkLguskVZuIryfAndCpupdKN6HjAqchNYaUHVtrouwotfY5ynGFi%2F1SHFi2Qg67ZkvlZa%2BEeTKpZLEGTFrbeHXhrT%2BumkKQZGg2aZAvhWCcEvG8Ohp%2F3&X-Amz-Signature=5da6c2ccb83d8194543e74a806a1f89dde7c0314b9ef83c319aa805a52e302d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOC3HWGE%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCxlC5myeSv33DpBiZ9Nn9lj8oC0bDClErRciTyBonw9QIgFOX%2BxMCJPlL7%2BBcLC1kdZ38iLgtA2y6RNATyXQMnygUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcewwM4yCxvZzLBzCrcAxFQ7tfBT7yaTAt5OD76o9BB%2BJmQ8knL%2Fjn5HKioRJMHlyZp%2BgV1HBDFC5wV%2Bc2grvOGx%2F80dPxogbkqTRg1Gc%2FMo8t40cgKyPMSguB8L7X08ysd3i8ukfhTombhU5BmIbt8GxJVN7JY%2BNNOFkwp7wgq5NHvSGED%2FdB%2FSAEnlPqcxbGtTkJKUvPYQ6QHEigqQh6ums34UmAvOs0Cl5k6SCLz9VTNMpc4uNjckiFaE5XVBJFVDnpxuN%2BDg2IIOx2PXeLr4TUxe7LiR0sOgI38QmbFdqGy9FKHTOc569r052MpOLe6q21UOv3vGND8U7%2BllRkLGnQKNQJDQUPyHV%2BMXiJAfaUb5TyTVn7q2TRJE2vX3O4NcbyfeEOHne3ZXGyXryfirFQQqlIBEKPy%2BZuUmsb1A6LOunlGaEZ7uXmOYmXCGhe7acP3eXMB1zMe41Rn0QZa3b1Ir63lay5gkIfgbiUCKBuh7SE%2FNIFo7vv6E%2FtlPgcSS0U5MR%2FUJAzDmQloxQPVC7U3%2FopBLPGDrfet8scJRzCVrO5lQdNdcV%2Fa6TY%2B%2FZJWMd0Q6bvAVrzEqVmqv1oIHAHbawWW0XhUJR9GweaaNZQ0mXjizn98fjDDGx6uE5yWbNUfIZxu%2Fl1gMNW59b4GOqUBtxwgUQ%2F1YXgq1KebnI2AafImtW9hYGEFzG0lpxq%2BOyql8vL%2Fpsd0g1MLaPc1Wlf7oFEK%2FcsqP6HTCVwbKJ6eUBn7aXRzBrsPr3FVdI2Jz6wceIAVMQVA9BG2pBsQWuYOAMrDWhtuGCch3UsTAhKq2pZWlXVVn2TuA3GvtaqC1j1vE%2FcEgD%2BGKc21t1xqjBed7%2FwZxrpkNyi6oabWK682vxe6s5yH&X-Amz-Signature=23d11839b6a1aa20a326c71dafebe2d0eb6503d1d33e4f15cc2bbc7674d69f36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5TZOVA6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDeqHhSnB1biqkEufkFp9eN1SuAL9GxqFaVOVfKD6EISAIhAN9f4r5tcccf6cMWOqEkz%2BjDFeE5MzWrPHfzaXqmcnz3KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyVs%2FviZ7V%2BoTKMoQq3AOoG4oxwxUARqHRhE6JJIo8BQ%2FetwWXbe0NM7U6H5D%2FwEwYGbuIrobv3YaxUAAu%2FGHQ4%2BJtMacone%2FKtMBx6AgzCeUif7hmU2GxJkLmzRcdDX5t7LMENaOJDAjqSkie915hbYBT%2FQpYmd2FU6JkneEVQSZxL9V%2Fl3EWZLC8qk%2BGsC4r%2ByzF9wY4Zzosy1WQvbSSYfb21imv%2B2N%2F10skGElQis0pIM7PBnb86RWd8EoEXpdFVHPkAvP9wcyzCMjHRl5EQiqsCQhzM%2FUO31VVtijFMKxszNK8btwToDzVZWQbiw08%2FQ5GRd%2BarOIRuvnYDcX%2FIJhXIOA6Mo%2BLDku4KICnte%2BU2A6rjqYqdKqX81AfIbqMVx2knICteKjNQa8VmwjwWHI6QfeXijbyvr68sgZ5Uuq%2BrcoVnwi1v7VxPcXz7KBlDm07iERUYTfNDsxon3qJkgBR%2FSJM2yx1UhKv%2BLkI%2BTki17VW3V4MAvSWoccctWegt8mvQ9naDh%2BsIM%2FB2WU5QZpqylX8k89F5z%2Bo%2FP1066egW7LSh3MmunPNo2mjh%2B2MiObgAr3%2BA4cFXlaHW4bqKvR%2B48xdP6bh5RaNMk4lYuXvcxSyH%2BGhRFRBJXyPSah7BEpSS2caEDDMfzCBuvW%2BBjqkARxL%2B7BqXA0NNoj1%2B2qrgTtwXwFGqWQz4342HXVxdulEVUbs62AmU88RwFeeGcHkpE%2BwnFRcabct2Lpwunf%2FJ5YytXnS46dfGMWDtmG%2BiOUqAQqCNHDQoEQsKtPaxBzmHmbsGIKc4fEfVXOkk1f8rY%2F7m1fRu%2FP14%2BbDXK9tGRs2Er68FYkgX4ZC%2BKXoNomNC6JuqD3iuiK9o%2Fjb54OnivLFWZkV&X-Amz-Signature=729447e21fdf13ff38a6dc87e57d91a1ae8ac2296587c7c96963acea1bbbef79&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
