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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNWERXY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCrZzZ5vgWlLw4tL1ousC8c4YES713gTrmLGSE1muA5JgIhAI8cuZQW1%2FA1tND7cUctf8HNOEZyO%2FDEsy1j%2FgzWRO9dKv8DCD8QABoMNjM3NDIzMTgzODA1Igzted6u46tErGtFK9Aq3AM8IBiGB2GGLF%2FgDickwxid10ai7En4I2jN0Tm9wwBaleowoDU%2Bd%2BO3Ij2yHFB%2BA4Qe8Xs9VM9PQ2FZx4dXp4EuGjOrW2OYDdIuPXZXE6R2ebkgpr3mIOeEEi%2BluwgMnoHOlk%2FLesU%2F%2Fv6zbDRdlMTMTCufEILBD3gHtZ%2Bly%2B7PM2qdbY69c2YK5Nh4ieGKsoF6P4fHzK32iL2XErekev0W0mA5zHUecQ2PaTu28DRjXL5z0TfQjH%2FbKiSFvWpaVB10UNLkLQ8VL56bl%2BQ%2F%2F1d7FHZV7dCzGmqCNHkYUB8YM%2F0iJRp7g85DPu6prvhTguqyN3ymiSZlGhy13sd1GzInC9u0%2F9K7NOfhgX2F52sRx9vXXF570JX7j0ejf4JHG%2FqT7h%2FYkb0BQvpirglLwWV454BhdVRAusQI9R39YkzYNYYAwpx%2BfzN3RVTtXY8vT2%2BDKPJ10rId%2FzrGBy80hCx7BdhbUS65oWXGzbECQcLRCJpC2xd1Cvi2obPIJkd3A%2F7ZBb%2Fc1NVEwFZfQ4HkgYhNCJIZv8%2FTenxX6tVVAvkEjJIx5IRRxxQ7L%2BaPlJVZqZcxHxYh5A%2B4d8yKp4bAcf5k8uiStx%2FK335q3ul8O8Xy2aYLB1NwaOGThKW3WzDv5YTCBjqkAXmZyRKywB9Zbu0f%2Bt2bKO%2F5Vo3x1Mb7gbR%2BQeklnNwAkNLdaDQI7V5Fku%2FMq%2B%2FfCJCLiCsnU7sZxbtN5EP4FbvIuzKirquoPWu%2BSYNJD1pApJVwqbNZFsn483OowVmcr%2B1J0BMa2s7ZDjLT9MCmTsWZxY%2Bam%2BXg4UTNa3FqTtfiBYRI3IUpM48Nt1b%2BniE6ncr3ck%2BwY9gsOHaDP2jOFmPDy4GO&X-Amz-Signature=b7802aafd19fa58ce7b5f1119d88bbf9536fbc9a243b03c5e08d086a51083c87&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNWERXY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCrZzZ5vgWlLw4tL1ousC8c4YES713gTrmLGSE1muA5JgIhAI8cuZQW1%2FA1tND7cUctf8HNOEZyO%2FDEsy1j%2FgzWRO9dKv8DCD8QABoMNjM3NDIzMTgzODA1Igzted6u46tErGtFK9Aq3AM8IBiGB2GGLF%2FgDickwxid10ai7En4I2jN0Tm9wwBaleowoDU%2Bd%2BO3Ij2yHFB%2BA4Qe8Xs9VM9PQ2FZx4dXp4EuGjOrW2OYDdIuPXZXE6R2ebkgpr3mIOeEEi%2BluwgMnoHOlk%2FLesU%2F%2Fv6zbDRdlMTMTCufEILBD3gHtZ%2Bly%2B7PM2qdbY69c2YK5Nh4ieGKsoF6P4fHzK32iL2XErekev0W0mA5zHUecQ2PaTu28DRjXL5z0TfQjH%2FbKiSFvWpaVB10UNLkLQ8VL56bl%2BQ%2F%2F1d7FHZV7dCzGmqCNHkYUB8YM%2F0iJRp7g85DPu6prvhTguqyN3ymiSZlGhy13sd1GzInC9u0%2F9K7NOfhgX2F52sRx9vXXF570JX7j0ejf4JHG%2FqT7h%2FYkb0BQvpirglLwWV454BhdVRAusQI9R39YkzYNYYAwpx%2BfzN3RVTtXY8vT2%2BDKPJ10rId%2FzrGBy80hCx7BdhbUS65oWXGzbECQcLRCJpC2xd1Cvi2obPIJkd3A%2F7ZBb%2Fc1NVEwFZfQ4HkgYhNCJIZv8%2FTenxX6tVVAvkEjJIx5IRRxxQ7L%2BaPlJVZqZcxHxYh5A%2B4d8yKp4bAcf5k8uiStx%2FK335q3ul8O8Xy2aYLB1NwaOGThKW3WzDv5YTCBjqkAXmZyRKywB9Zbu0f%2Bt2bKO%2F5Vo3x1Mb7gbR%2BQeklnNwAkNLdaDQI7V5Fku%2FMq%2B%2FfCJCLiCsnU7sZxbtN5EP4FbvIuzKirquoPWu%2BSYNJD1pApJVwqbNZFsn483OowVmcr%2B1J0BMa2s7ZDjLT9MCmTsWZxY%2Bam%2BXg4UTNa3FqTtfiBYRI3IUpM48Nt1b%2BniE6ncr3ck%2BwY9gsOHaDP2jOFmPDy4GO&X-Amz-Signature=be9b9ebde05f16e3aebff3bd82b2ffe690ea332c70d699355c1422fd631807ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNWERXY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCrZzZ5vgWlLw4tL1ousC8c4YES713gTrmLGSE1muA5JgIhAI8cuZQW1%2FA1tND7cUctf8HNOEZyO%2FDEsy1j%2FgzWRO9dKv8DCD8QABoMNjM3NDIzMTgzODA1Igzted6u46tErGtFK9Aq3AM8IBiGB2GGLF%2FgDickwxid10ai7En4I2jN0Tm9wwBaleowoDU%2Bd%2BO3Ij2yHFB%2BA4Qe8Xs9VM9PQ2FZx4dXp4EuGjOrW2OYDdIuPXZXE6R2ebkgpr3mIOeEEi%2BluwgMnoHOlk%2FLesU%2F%2Fv6zbDRdlMTMTCufEILBD3gHtZ%2Bly%2B7PM2qdbY69c2YK5Nh4ieGKsoF6P4fHzK32iL2XErekev0W0mA5zHUecQ2PaTu28DRjXL5z0TfQjH%2FbKiSFvWpaVB10UNLkLQ8VL56bl%2BQ%2F%2F1d7FHZV7dCzGmqCNHkYUB8YM%2F0iJRp7g85DPu6prvhTguqyN3ymiSZlGhy13sd1GzInC9u0%2F9K7NOfhgX2F52sRx9vXXF570JX7j0ejf4JHG%2FqT7h%2FYkb0BQvpirglLwWV454BhdVRAusQI9R39YkzYNYYAwpx%2BfzN3RVTtXY8vT2%2BDKPJ10rId%2FzrGBy80hCx7BdhbUS65oWXGzbECQcLRCJpC2xd1Cvi2obPIJkd3A%2F7ZBb%2Fc1NVEwFZfQ4HkgYhNCJIZv8%2FTenxX6tVVAvkEjJIx5IRRxxQ7L%2BaPlJVZqZcxHxYh5A%2B4d8yKp4bAcf5k8uiStx%2FK335q3ul8O8Xy2aYLB1NwaOGThKW3WzDv5YTCBjqkAXmZyRKywB9Zbu0f%2Bt2bKO%2F5Vo3x1Mb7gbR%2BQeklnNwAkNLdaDQI7V5Fku%2FMq%2B%2FfCJCLiCsnU7sZxbtN5EP4FbvIuzKirquoPWu%2BSYNJD1pApJVwqbNZFsn483OowVmcr%2B1J0BMa2s7ZDjLT9MCmTsWZxY%2Bam%2BXg4UTNa3FqTtfiBYRI3IUpM48Nt1b%2BniE6ncr3ck%2BwY9gsOHaDP2jOFmPDy4GO&X-Amz-Signature=787acfc7ca0804fe8bb85e0f33f09ff5fa2eb833777614ba6f1f8f4d7a292114&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHRIZEL2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICd11fK%2BFS0qU2mbi0K9wyyLE5KBMg%2FDUrXUbpsa5vsRAiBKsamzwa%2BFHx4fiQwbCiUoZQjyM1ZOO5FfturEcDlZvSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpV6POYbZJKnlLJgUKtwDNVSN8saLT%2F7LteSreVUJQnyY5u4z2LjGkoDXkfyQxQ2akB%2BTfR99RO9tllS3RwwSID%2FvOrxsEMcyYyqFeXyvuEOT2j17DwO7e5C261UKLqfrKdMyPNyKkQANSjDiQroO0nqbQL0mxGeEF6YA4i4C%2FkfcxkyUSyL890zn%2Fq6pI7t0cMM2YrLoGVwg8Ejq8SMLwDZXaV7U7%2BcJYFqsM%2B9tblbKW9qqPtvtFcqbjyEVKTDWXT8WygoWEWPGpcdp5Gv6ktLssq4jgCoFcTBMlDlWK6GXX%2BwtDqsI5imBMlayDwk05T108NnVDIN421EGTpz0iXXLuhbnUX3Ucr8pZAAc4BMa6HsMZk%2BGo7GNrdZrSjL4m2MuplAlJGyp2AQPBMCND%2BEMWZviWsAhf7nH%2BEU1PXniiB4ICFF6Y49AdCyUAetPRh8Mdse1kxj894MFxnWlT7E9HoyB2XzN6q%2F9Ujq26%2F2v2cUpHSVw94Zp3Vgr%2F8z3jPRzTmT1Y7n7Uubrm0gp%2BMxmO4muMoIv30vZyJuCeoeDJ2iqBdBvCKv8Do0246HOgKhImsI2NslOhxT%2FUkd5lcVMzVrpf5SMUv7I0GbMZLTwGVmP5NtSZWeQgCMxMfsPDj80MOiUb258NUYwhOWEwgY6pgEQ6f9NcDymrQZ0eJDlSTTRjDTrsaHYqJxjly7iP4MEMvXPCONtS6v5tH9YqhOOgf0pnzOjTmkMCXIbaNBFxZ7SdGVf1S0n%2FhBjugRl3wO5cHJKOoIPoivD249xgSbB80zRdFJ4UG%2BIwPfj7ZkvVCqt7D2hXkh7zI%2BmrS%2FVy%2BuEL%2Bjj2%2B6la87tEfoSTOnoGm9aovsvdH4TY%2FcnYMB0unSqosis0zA0&X-Amz-Signature=4e463c284cbfa20d5d53361ddf287a80f034a53f7084e0a08c2b72ea3e363680&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEE5MYS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIG8B7wx257%2BW0bh4Gu0MsgyTh4LSQ0F7jN18WDQ4rGLyAiBd25jgs0H1g81RGhBMsu%2FwH7SyEMY70DEhCDxZxcg1PSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMGG9ar8OybHfssGr3KtwD7Ylptwd3Jl7ETgdezAm7zKCYMywGxGD6ojGxTI79Pz%2BpPrSSX8h5VnxrmbCwx%2F8Zn6DRqnNxiUgFs3p1sZg5VXq7Qf0lWnBKz4JULUpDKlHycY8kmMKRf1QLoQQGj%2FeeXBU56VpagMyCb6BUhI7F%2FuaoOBjzhBsWPhjrUqFePQkdLIyurArOnOGZ464WZ1ueoEe7VbI5IiIPRmLAS%2FKQkkIbMDCEHzUSzEy71wsgdMtzsMXWNU5zCajbmWDNaTSDnw49JRNxmxnv49p0oxPxmYoj468d5jxAFbd%2BhLi%2F6%2BPkSMTTneaEWCcDdwT6RJzANvhO7c3BlMShyr3FzmCiiU5KaSErx5zPxOnv4ML9a1f23t%2FDTMO2H5%2FaZTq%2B6d8UT4CTUpoBRYki%2FeoyysLOIEp9k5mhtcCHKUmjjisr%2BMOT%2B4Z1dJnA%2B%2B8WQ99ljUm9gx64bHWY%2BwBQlY6o4Tq4DC3LP8V64%2BjUDdc425nhsiBUVwFBBE0GzUCEcS%2FUjaalyQ%2FLLXPzqF%2BjZizxWXR1e43ayspCgM26lkKKV8ShfYa5nYCkQ14QfEhssIuw4nACHNeFdmJGSquzalESFny7C2njwkP5wM3gYLmGlrlzop3Uvud2Ea1Rm067zQEwguWEwgY6pgE3LKzYscqjJzynv%2Bf%2BUcuqCC%2BY635EySA6jDg6twYJDDmgWrdoHeqeQs6c8Z%2FmuVVKvvMvic0UuNGdxQkOAsR8NV6sqCTfNhZPGRFhSGKoVuyv5WNh23rCVXIjF1dg2UjdhKLS0QyfIGM4UO79AgPqE9QLKguOLKTtLxvR78uMlPoodlMixzdk9W%2BcjkLC9FEeV8UF3ktUetVQmhWQyNgMJ8fhwPc2&X-Amz-Signature=eb08d05ce4c6f2fcc81e76bc2183bdf8172b99e721fe60c0d0d1d7791b51ca8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNWERXY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCrZzZ5vgWlLw4tL1ousC8c4YES713gTrmLGSE1muA5JgIhAI8cuZQW1%2FA1tND7cUctf8HNOEZyO%2FDEsy1j%2FgzWRO9dKv8DCD8QABoMNjM3NDIzMTgzODA1Igzted6u46tErGtFK9Aq3AM8IBiGB2GGLF%2FgDickwxid10ai7En4I2jN0Tm9wwBaleowoDU%2Bd%2BO3Ij2yHFB%2BA4Qe8Xs9VM9PQ2FZx4dXp4EuGjOrW2OYDdIuPXZXE6R2ebkgpr3mIOeEEi%2BluwgMnoHOlk%2FLesU%2F%2Fv6zbDRdlMTMTCufEILBD3gHtZ%2Bly%2B7PM2qdbY69c2YK5Nh4ieGKsoF6P4fHzK32iL2XErekev0W0mA5zHUecQ2PaTu28DRjXL5z0TfQjH%2FbKiSFvWpaVB10UNLkLQ8VL56bl%2BQ%2F%2F1d7FHZV7dCzGmqCNHkYUB8YM%2F0iJRp7g85DPu6prvhTguqyN3ymiSZlGhy13sd1GzInC9u0%2F9K7NOfhgX2F52sRx9vXXF570JX7j0ejf4JHG%2FqT7h%2FYkb0BQvpirglLwWV454BhdVRAusQI9R39YkzYNYYAwpx%2BfzN3RVTtXY8vT2%2BDKPJ10rId%2FzrGBy80hCx7BdhbUS65oWXGzbECQcLRCJpC2xd1Cvi2obPIJkd3A%2F7ZBb%2Fc1NVEwFZfQ4HkgYhNCJIZv8%2FTenxX6tVVAvkEjJIx5IRRxxQ7L%2BaPlJVZqZcxHxYh5A%2B4d8yKp4bAcf5k8uiStx%2FK335q3ul8O8Xy2aYLB1NwaOGThKW3WzDv5YTCBjqkAXmZyRKywB9Zbu0f%2Bt2bKO%2F5Vo3x1Mb7gbR%2BQeklnNwAkNLdaDQI7V5Fku%2FMq%2B%2FfCJCLiCsnU7sZxbtN5EP4FbvIuzKirquoPWu%2BSYNJD1pApJVwqbNZFsn483OowVmcr%2B1J0BMa2s7ZDjLT9MCmTsWZxY%2Bam%2BXg4UTNa3FqTtfiBYRI3IUpM48Nt1b%2BniE6ncr3ck%2BwY9gsOHaDP2jOFmPDy4GO&X-Amz-Signature=d64942660817c4a92abbd46ed517e27275ee0a70779805fd21bb5a7b53b115a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
