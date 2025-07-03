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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMRT5SF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFKZpjApOoNmvx3MRMJJ6J3OhExz5Ra32JBPE%2BucqNMwIgZhNvkuzOBIT1jtnedbHw7u8HetWj4qZKGuiEAXKHpd8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJlS%2FLOWGnJowKZQ2CrcA9I2xUZtu3kJ1YXupmDz6IFsXDcOWY4ci9iYwCWneTAPzk99aURqvLaWvqT0xbfYKeDyhxBNPOI1hP%2BdgHwZQT6dTRdksQZEhSWoQwifF098bFitPGxMersjoS1lJjSzWITgGg7NC3WPiGEinV0mNqGKkAXhT43eDTMSANxXgrg8OHlRFA4wjZs5BM9842vh2La5BQwga2uVb6G%2FwzCWQyrJvErLiPHnmNV67bKwgE6LWCMd1TSOstIZGO3R8Hv5Xko4D9NzisZpP2c%2BFfm1rWSnRl9zVt7GiukzpTgCBN9GMOrONmCzalNKZwQh%2BjvJVatgtJuwha1FHuffJlW7Uh6Qd2zonW4Z4zkApsx0Rv7XvQA1BZQIXmFgYvxGw6v93ibi9CnibzRZoyrIvAEgyUBYOjbio6DmLUvSowAOy91u6hpeLivqq9RbjNueeI8gpfLTEQdmm9UVZxNhYwkz3JeNPhHx8Sn6T9Pna4P7AeXQIlohdTSaqxPamzrIqlZYPs3i%2F%2FHeUfpVMmVoxOBu5cWJ2ZEvCPIfwxO%2BI6IvrjybdUa89F6nL%2Bd9xGcWykgRlpL86NkJrT%2FN4zXzUTzsFXIgu22xZA29jCBK2QFfe67DRWz%2BsMOGsguR39o9MIqPnMMGOqUBfDkK0V42AVhGUyI1uJxr9gfZRTtn7PgHtZRpcP48p32Dn%2BkFuyGNiMSc7vcaEOqrtkcVYXWsLSpxsXxx8IOgnzSClKlrw3s%2BjDCd%2Bvy7rJIYr2wEhkXzozr2mvbQrqsSiBe2OJMSool0gGbJIiHcVpUXz7ia95nZuDImfCppTlPOSOyQFNVSJP9fr2gdU3UR4AVWfdVzMUA9EyfymXec6njx2gga&X-Amz-Signature=126efb4777ec60159d2b0beb2a29de7678d839dda2fd12151e0310646e59d752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMRT5SF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFKZpjApOoNmvx3MRMJJ6J3OhExz5Ra32JBPE%2BucqNMwIgZhNvkuzOBIT1jtnedbHw7u8HetWj4qZKGuiEAXKHpd8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJlS%2FLOWGnJowKZQ2CrcA9I2xUZtu3kJ1YXupmDz6IFsXDcOWY4ci9iYwCWneTAPzk99aURqvLaWvqT0xbfYKeDyhxBNPOI1hP%2BdgHwZQT6dTRdksQZEhSWoQwifF098bFitPGxMersjoS1lJjSzWITgGg7NC3WPiGEinV0mNqGKkAXhT43eDTMSANxXgrg8OHlRFA4wjZs5BM9842vh2La5BQwga2uVb6G%2FwzCWQyrJvErLiPHnmNV67bKwgE6LWCMd1TSOstIZGO3R8Hv5Xko4D9NzisZpP2c%2BFfm1rWSnRl9zVt7GiukzpTgCBN9GMOrONmCzalNKZwQh%2BjvJVatgtJuwha1FHuffJlW7Uh6Qd2zonW4Z4zkApsx0Rv7XvQA1BZQIXmFgYvxGw6v93ibi9CnibzRZoyrIvAEgyUBYOjbio6DmLUvSowAOy91u6hpeLivqq9RbjNueeI8gpfLTEQdmm9UVZxNhYwkz3JeNPhHx8Sn6T9Pna4P7AeXQIlohdTSaqxPamzrIqlZYPs3i%2F%2FHeUfpVMmVoxOBu5cWJ2ZEvCPIfwxO%2BI6IvrjybdUa89F6nL%2Bd9xGcWykgRlpL86NkJrT%2FN4zXzUTzsFXIgu22xZA29jCBK2QFfe67DRWz%2BsMOGsguR39o9MIqPnMMGOqUBfDkK0V42AVhGUyI1uJxr9gfZRTtn7PgHtZRpcP48p32Dn%2BkFuyGNiMSc7vcaEOqrtkcVYXWsLSpxsXxx8IOgnzSClKlrw3s%2BjDCd%2Bvy7rJIYr2wEhkXzozr2mvbQrqsSiBe2OJMSool0gGbJIiHcVpUXz7ia95nZuDImfCppTlPOSOyQFNVSJP9fr2gdU3UR4AVWfdVzMUA9EyfymXec6njx2gga&X-Amz-Signature=37db6b552efb7a09412d22bed14c54ac71a9bdb94bee77cb3420eebc722e4190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMRT5SF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFKZpjApOoNmvx3MRMJJ6J3OhExz5Ra32JBPE%2BucqNMwIgZhNvkuzOBIT1jtnedbHw7u8HetWj4qZKGuiEAXKHpd8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJlS%2FLOWGnJowKZQ2CrcA9I2xUZtu3kJ1YXupmDz6IFsXDcOWY4ci9iYwCWneTAPzk99aURqvLaWvqT0xbfYKeDyhxBNPOI1hP%2BdgHwZQT6dTRdksQZEhSWoQwifF098bFitPGxMersjoS1lJjSzWITgGg7NC3WPiGEinV0mNqGKkAXhT43eDTMSANxXgrg8OHlRFA4wjZs5BM9842vh2La5BQwga2uVb6G%2FwzCWQyrJvErLiPHnmNV67bKwgE6LWCMd1TSOstIZGO3R8Hv5Xko4D9NzisZpP2c%2BFfm1rWSnRl9zVt7GiukzpTgCBN9GMOrONmCzalNKZwQh%2BjvJVatgtJuwha1FHuffJlW7Uh6Qd2zonW4Z4zkApsx0Rv7XvQA1BZQIXmFgYvxGw6v93ibi9CnibzRZoyrIvAEgyUBYOjbio6DmLUvSowAOy91u6hpeLivqq9RbjNueeI8gpfLTEQdmm9UVZxNhYwkz3JeNPhHx8Sn6T9Pna4P7AeXQIlohdTSaqxPamzrIqlZYPs3i%2F%2FHeUfpVMmVoxOBu5cWJ2ZEvCPIfwxO%2BI6IvrjybdUa89F6nL%2Bd9xGcWykgRlpL86NkJrT%2FN4zXzUTzsFXIgu22xZA29jCBK2QFfe67DRWz%2BsMOGsguR39o9MIqPnMMGOqUBfDkK0V42AVhGUyI1uJxr9gfZRTtn7PgHtZRpcP48p32Dn%2BkFuyGNiMSc7vcaEOqrtkcVYXWsLSpxsXxx8IOgnzSClKlrw3s%2BjDCd%2Bvy7rJIYr2wEhkXzozr2mvbQrqsSiBe2OJMSool0gGbJIiHcVpUXz7ia95nZuDImfCppTlPOSOyQFNVSJP9fr2gdU3UR4AVWfdVzMUA9EyfymXec6njx2gga&X-Amz-Signature=65cfe8c55d3b8244e8d57138d8a978b15a7d06e6a4aa01b59c30c1641e8b328c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G7BZUWV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIDCb8tJgs5oQQ%2BmGmMYsCA6Gn%2FEg8dQUznVanITVsH4xAiEAzXw9m2xbmVPwm54wMTcu1XfCTa8AdusznALKgHtLvLwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCGEqMbZnfJYCZq0UircAykze4CBXnuyFZu7f6vBRXAp9s3JVvetynK2qE%2FkHhY%2BmPHh2o%2Fwm3cms%2F0bNElEM8oxwEmDJfYm2jOc6MIsrr6%2BkDpIjf5ZNT2BBDNE%2B9gzrx7vSBlKk45PVAcZB3WOhFd9%2BnPmRdSGcPx9HOEltYRpNHrfIdvvoSO93Uh86xH95vN1cgO7ouzvO1nUv%2FRRvVOsJR7eIyTJ6gaWqb7zE7pHyiZ38PCefaSryZ1Q69UpU9czM1XaAT5RDDmZ%2BkKB%2FhWRhJJ2E85jL6dMY5l8sungybqbV7sNzRToU51BgvWOzDS2bJ9GUzeBt17Du7RBiDiNJiejynA65AASfn0cxX1yoWRIJtjJb04uHhGXdlUOog44323ZibcxzsmpLO2Vt4wZJm2T0botNHvNuU90j38p%2F5MvEsGjg1mkEytpQjmjqD2rsrL8z4b7d5rpf7fzmXQBlSNP8EXg0pkTW%2BqfMzVmid%2BR6jbuMChkCslVsXyvkQck%2FN%2FRk8MDc58xBNRfsclp3kpTuTt%2BoPsKWpnBufpgY9Kv5P4nZgeRiavxI4VpzeTGv9RN1mIGxDr08yD0f9AEXFYXFH05f6nPwa2%2BdTPISmSly9vcIKP0Q0f4h57LkC26HkS3w7JtJvM0MIGOnMMGOqUBnI8H1bKmiDLvmGg0bew8Uf2cOzvjQo4gGrpNNAhLEJbOW2786K%2BWy6IV5uVnzzk49ar98EjrptdHOrdnBndC67FvPAT5SPof6QzXHWYkMWH8t7oMeSF%2BwDK7m%2BQPAoZfPDO%2Fj9DnQfNzkpC7YTGYVTLFqSv%2FJVdsaa50KRZHLhr9Uj%2FEDtM1V5OmbgmKDLin47949QgSpH8ogtugjFs9YQX6u%2BgP&X-Amz-Signature=2aaa3932e663aecf57ffc3c9aeca1939ccae49844ead4a645f570767c6f7cc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKCDNAMA%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDk13fd3JjyqwctZLqvjFiI3vcw%2BvB44FrfOdc%2FRCaOgQIhAOnrlyuob6yOmqzOq5FoEetI5CwbLaXZWlrjo8fbjzmnKv8DCCAQABoMNjM3NDIzMTgzODA1IgzEDHobKHHjLJmCkkwq3AMBZJfw%2BFcgBJuA2tKAuisrGE6ZyCuCItYJNXMNaW2VOfsppXmW3enyEm1PpiSc3u9KIUyiIJBjD8nVwGcTNEICEB4DkZL5gqRRupSFklDhfpJmH1RHVV%2FZZS8x4YqoGF8zbL8o3u0eRlcKNCFq5HTX54kusfkPLs%2B8dEYj07bjTJzmKNqojsSa9k5kETYyR5yqY%2BrNHLSr%2F%2FLoqOS00XlYT%2FJXzeWREFDTL15zVT%2FhvTXbALr3j5Bps%2FBp3%2FtRB9EwPHihWPXxDMtEVJaJYZHzWK7CR0k%2BvWAHvlK%2BwrgIXdEPGtSjBoEpLsYFnIWQqRIJFEIqc21wKV1068xlulC1S6nP2la1CzcC7Hlo7o9KT365A9W%2FFEeCFcyJYQY9WhbVml9kc2cL9uQqOjgdwCqMLU7cN443QmdE8JCoTZMM%2FGwbKn291QvS%2FfaNTQTsvK2cs%2FbW7XvuRVm2dtBjBd8Zr%2BKKQU8r244uZ6h5Oqm3hcKlc3b6lYthOtemni2V9mLJxMQ7%2FOec6NQq%2Fa7AP6l3MVxUJjoivrGg5lOvlsVpCUJRyNTPdg3aEsEzWRL3c8KWjboW4C4GxDGGNOtNB5FguRetQmXcgOBIP8Fu7ANWroS6DiqX0c8YCLeTdjCrjpzDBjqkAchA6mKgvtqIsPiMSKmHtXo6LLQxYZ21s5w3W3IZnaLa9zbpfPXrAHHPKNeg2gWSQX0%2B2n0P4eawDaXqgPCUEU20OscjVV7%2B%2FJYSzhKqb3GY4b%2BgHPIC26KT2iojMxHfSfwaESkoGYdGXQtI7UAMybZXkYX%2FLx1P0rHAaE2LDi1%2BYF67FzIoC%2Feakfkj%2F%2F%2B9DK3bKtIEwFONBoEA7qv8Q08gaqSt&X-Amz-Signature=3dbc029ac06575da213a54cc052dd6c6c28aa1dc294c9c5ff7bd838149ae47da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMRT5SF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFKZpjApOoNmvx3MRMJJ6J3OhExz5Ra32JBPE%2BucqNMwIgZhNvkuzOBIT1jtnedbHw7u8HetWj4qZKGuiEAXKHpd8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJlS%2FLOWGnJowKZQ2CrcA9I2xUZtu3kJ1YXupmDz6IFsXDcOWY4ci9iYwCWneTAPzk99aURqvLaWvqT0xbfYKeDyhxBNPOI1hP%2BdgHwZQT6dTRdksQZEhSWoQwifF098bFitPGxMersjoS1lJjSzWITgGg7NC3WPiGEinV0mNqGKkAXhT43eDTMSANxXgrg8OHlRFA4wjZs5BM9842vh2La5BQwga2uVb6G%2FwzCWQyrJvErLiPHnmNV67bKwgE6LWCMd1TSOstIZGO3R8Hv5Xko4D9NzisZpP2c%2BFfm1rWSnRl9zVt7GiukzpTgCBN9GMOrONmCzalNKZwQh%2BjvJVatgtJuwha1FHuffJlW7Uh6Qd2zonW4Z4zkApsx0Rv7XvQA1BZQIXmFgYvxGw6v93ibi9CnibzRZoyrIvAEgyUBYOjbio6DmLUvSowAOy91u6hpeLivqq9RbjNueeI8gpfLTEQdmm9UVZxNhYwkz3JeNPhHx8Sn6T9Pna4P7AeXQIlohdTSaqxPamzrIqlZYPs3i%2F%2FHeUfpVMmVoxOBu5cWJ2ZEvCPIfwxO%2BI6IvrjybdUa89F6nL%2Bd9xGcWykgRlpL86NkJrT%2FN4zXzUTzsFXIgu22xZA29jCBK2QFfe67DRWz%2BsMOGsguR39o9MIqPnMMGOqUBfDkK0V42AVhGUyI1uJxr9gfZRTtn7PgHtZRpcP48p32Dn%2BkFuyGNiMSc7vcaEOqrtkcVYXWsLSpxsXxx8IOgnzSClKlrw3s%2BjDCd%2Bvy7rJIYr2wEhkXzozr2mvbQrqsSiBe2OJMSool0gGbJIiHcVpUXz7ia95nZuDImfCppTlPOSOyQFNVSJP9fr2gdU3UR4AVWfdVzMUA9EyfymXec6njx2gga&X-Amz-Signature=e36830cd5adcfe3f7c54beb29caa513d8e16b1a7edf841ea2d534bcdd9b2b8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
