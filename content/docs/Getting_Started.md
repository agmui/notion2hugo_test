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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURFBFTM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHukw2SjGqISs9wN20fweVS4gZmN6Z6X15I%2BYefekDW5AiEAlwHlaw2Of5%2FUqIQ%2FocBnDMDSjvzQLtD7OEvt9o5j0IoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTp3Bp3m6C2uZ3J1SrcAzKiD44Tmu%2FNJ8wzxuaql6olipJcrULneVcB0HlRCQ3qh1obu0u032bRfQLlbyrfuW%2FqGs%2BFCEn5r0klExEvZTnawW9CZHbCmY7RyCcbiYQMiJc580HeG2w6jNOTOI5Yfuf6ZecydY9aW2VcBz0PgAEi04VquVRiWriv%2BMgNr1RlUVq9GKAWYbMxVXdCzPepMOTZdbC8J8l0pAkk%2FsC53DTY6BpKUuqyhmLSFQ8I5oyX%2BXc0QaZcbszWg%2BzzuNzqBlQkGQEys7AJoxqYKwOGWDzMML2FTJQ9Uf2Hvxl2i6m8cf4tGQK70mEttkAQcMsGR1aBq6JuIs0mLdkKPyVMs4q%2B1ix3zHYUI%2BkTSBMXuLtwaj3RcuHtroS9b58HYOfSfaGqjWYeW1PKmEAHpn8g3486wo%2FU5AKQmoO4WWqR%2F94KxHp6bRGdMczaguH9Ag9IfUwKL3gsRd55NSDp5aQgfXukQt41NxV%2F6%2FMs1K48rw7XlFmxxvSQVpQ5eu0nXKVBQpTCjxDFeccu9TmwiLJmv8Dm46mMKIxqWtZCtuyltO8l26ki5Up%2FCQ5MLOK%2BfMhVVNoNDCcVIhT5z0mVa%2FVjBp0k5HHYwy%2FhYVYXs9zTmNDWud31uvd0Hv50vd4PMODVxcMGOqUB0j5%2B7tyo%2B3M%2F3pyubbNevvMqLbbNQAhKYn%2Fys6elFhvEq0htSY6JLBWsKIbOsRbCJT9z3bMu4oKebm46vgenPeMpaWddkuwkgXCrHbNrd2gloGpwfMA4ejHlQezpiHQSmKyKhNlNjUXfE7eqrsurCM9%2FIyKjTHwemMK%2B1aljiebFobDbor4HzMu%2Bltj3TPmgJJhL7F2dTYk21zJ%2FJkGEF06xAh7U&X-Amz-Signature=9e4b430fdf421067a7498fac9d4f4937ee44e57244095da56449bfd7eee595c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURFBFTM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHukw2SjGqISs9wN20fweVS4gZmN6Z6X15I%2BYefekDW5AiEAlwHlaw2Of5%2FUqIQ%2FocBnDMDSjvzQLtD7OEvt9o5j0IoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTp3Bp3m6C2uZ3J1SrcAzKiD44Tmu%2FNJ8wzxuaql6olipJcrULneVcB0HlRCQ3qh1obu0u032bRfQLlbyrfuW%2FqGs%2BFCEn5r0klExEvZTnawW9CZHbCmY7RyCcbiYQMiJc580HeG2w6jNOTOI5Yfuf6ZecydY9aW2VcBz0PgAEi04VquVRiWriv%2BMgNr1RlUVq9GKAWYbMxVXdCzPepMOTZdbC8J8l0pAkk%2FsC53DTY6BpKUuqyhmLSFQ8I5oyX%2BXc0QaZcbszWg%2BzzuNzqBlQkGQEys7AJoxqYKwOGWDzMML2FTJQ9Uf2Hvxl2i6m8cf4tGQK70mEttkAQcMsGR1aBq6JuIs0mLdkKPyVMs4q%2B1ix3zHYUI%2BkTSBMXuLtwaj3RcuHtroS9b58HYOfSfaGqjWYeW1PKmEAHpn8g3486wo%2FU5AKQmoO4WWqR%2F94KxHp6bRGdMczaguH9Ag9IfUwKL3gsRd55NSDp5aQgfXukQt41NxV%2F6%2FMs1K48rw7XlFmxxvSQVpQ5eu0nXKVBQpTCjxDFeccu9TmwiLJmv8Dm46mMKIxqWtZCtuyltO8l26ki5Up%2FCQ5MLOK%2BfMhVVNoNDCcVIhT5z0mVa%2FVjBp0k5HHYwy%2FhYVYXs9zTmNDWud31uvd0Hv50vd4PMODVxcMGOqUB0j5%2B7tyo%2B3M%2F3pyubbNevvMqLbbNQAhKYn%2Fys6elFhvEq0htSY6JLBWsKIbOsRbCJT9z3bMu4oKebm46vgenPeMpaWddkuwkgXCrHbNrd2gloGpwfMA4ejHlQezpiHQSmKyKhNlNjUXfE7eqrsurCM9%2FIyKjTHwemMK%2B1aljiebFobDbor4HzMu%2Bltj3TPmgJJhL7F2dTYk21zJ%2FJkGEF06xAh7U&X-Amz-Signature=9f1eefe9a76c9c9f19866d02f378213d039e66f1fa5281ca1565b32fa8c41efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURFBFTM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHukw2SjGqISs9wN20fweVS4gZmN6Z6X15I%2BYefekDW5AiEAlwHlaw2Of5%2FUqIQ%2FocBnDMDSjvzQLtD7OEvt9o5j0IoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTp3Bp3m6C2uZ3J1SrcAzKiD44Tmu%2FNJ8wzxuaql6olipJcrULneVcB0HlRCQ3qh1obu0u032bRfQLlbyrfuW%2FqGs%2BFCEn5r0klExEvZTnawW9CZHbCmY7RyCcbiYQMiJc580HeG2w6jNOTOI5Yfuf6ZecydY9aW2VcBz0PgAEi04VquVRiWriv%2BMgNr1RlUVq9GKAWYbMxVXdCzPepMOTZdbC8J8l0pAkk%2FsC53DTY6BpKUuqyhmLSFQ8I5oyX%2BXc0QaZcbszWg%2BzzuNzqBlQkGQEys7AJoxqYKwOGWDzMML2FTJQ9Uf2Hvxl2i6m8cf4tGQK70mEttkAQcMsGR1aBq6JuIs0mLdkKPyVMs4q%2B1ix3zHYUI%2BkTSBMXuLtwaj3RcuHtroS9b58HYOfSfaGqjWYeW1PKmEAHpn8g3486wo%2FU5AKQmoO4WWqR%2F94KxHp6bRGdMczaguH9Ag9IfUwKL3gsRd55NSDp5aQgfXukQt41NxV%2F6%2FMs1K48rw7XlFmxxvSQVpQ5eu0nXKVBQpTCjxDFeccu9TmwiLJmv8Dm46mMKIxqWtZCtuyltO8l26ki5Up%2FCQ5MLOK%2BfMhVVNoNDCcVIhT5z0mVa%2FVjBp0k5HHYwy%2FhYVYXs9zTmNDWud31uvd0Hv50vd4PMODVxcMGOqUB0j5%2B7tyo%2B3M%2F3pyubbNevvMqLbbNQAhKYn%2Fys6elFhvEq0htSY6JLBWsKIbOsRbCJT9z3bMu4oKebm46vgenPeMpaWddkuwkgXCrHbNrd2gloGpwfMA4ejHlQezpiHQSmKyKhNlNjUXfE7eqrsurCM9%2FIyKjTHwemMK%2B1aljiebFobDbor4HzMu%2Bltj3TPmgJJhL7F2dTYk21zJ%2FJkGEF06xAh7U&X-Amz-Signature=fec3c59c12d4f608e2035cb0b94dce7ff03702f0c6a804a401a5ca26984d62e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VYM5OGO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP2MbvgrfcgKR6jI8O7rISA1RZTRIGlq15NUHRxqj3eAiEAlHYmjFvVA1lDHjH67Z0Bsz88y0JhPtlMXdv51YyvUJgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMRk3S8LeHoswL97rircA8wbf%2FZlH0lNOyEqOHgs0%2BJ9KSuROf%2BH0WAcEV6wpmmZP7JjmUwgq5PyBSqIzwZ1iqQn8HfvvzlC%2Fy5Gdd4ymS4BZBw8Cdmv488LveO2NZFWGj0LPyX93%2FCKeSOv86tl4qcXNA5lsJPYeqOnZ7XbdVNHfP2Woia0Sv05OKSumNOHySjJP%2B1YZKnK5vv0%2FHYsZcJHafyYRnu7KIqXKdwZyrPP%2F3rs3q%2BMBTtAJ0QMiILTmo%2BKgLpw4CO56syT5N%2Bgw6n5PmCaC0B805FJSwSzX9AWyCaflm9bpMIVHO0G69hGoPP8oDynonyYsSvA3zaOUyCoYVBh%2FSplaxeoMsvzjhytgM3IpF2TmJgoIJ8gjgND%2FLDfXfITC41Qtc9oHkaEDSwITU47Q8zOQ7sOA4wAg2mYT%2BcPUwQ2RLo%2BAiRyca%2FUqZ3FVOiu3%2F15rWd5bDfpDlRE6nbrISxrD73FJmPalq4X%2BHUk5Gk5ku8FDcJDK4r0fsMHAExTitMEPcYEwKliNmm8lZplxc%2BUqojFYE6uGTUXslrxRyyNX336%2FAciCvaqdVaR7kxrRWQW%2BlOF8UbZQyv9ZkbxgsRGWPBql4ZSIcgYz4pQxvOhnqor3buFfOLiqXA3XQMXmk2C8iWnMOrVxcMGOqUBuB4LcEdyxz9JAwRlnhb%2FuYy8%2FI01l6heq0lf0JtYFbsqDkQBSavhJjs4AQTr%2Bj2sPZMcMt8wZIRKAxf3hEM6Akyyw83D1hqso0S46AiwHaJi8O3cLtDj5sH8DDJR6emCgEjTdhygLZ3F2g7XptE32GmhWdApOD05Q9L029F2OYnAmzUnl2gG0wBbtXR66E4she4bHISnGdhiDeQo%2F16Enw9NM%2FnP&X-Amz-Signature=4239a67523033d041721d38ddef261930336da238f76c99d300bfcad8ed1ade9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R655GD3A%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpgWxZDp%2Bp4RXTGpvRy1rQQJ%2BpwlBYXVHKHR1EclRszAiEA6QwsO8d8InqTfQJzBGM7EUKH4p%2FGVHl2ppyLNtpNuLMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJKihVgiDsVxIxZxyrcAzIUJKC3qEtxHoJwBBj2OmpdUmubRLN4g88kT6IDy0Zh%2ByPGPn%2BWuiZBxvnnmPYoskSgAkzwV4twcessCf8r1lX1z1Z3pmwFnzcFbEhfSqUpkAM7amBLd535uwyWnOvI3CBwO3VHLmnh0%2FIxQOv6g7WiyYgBcwVy%2FvfSNmZZvMekR6yEX9rOsin78WaXugV6qLJr9lnEOMjzWJlSXT942H5Dr%2FI5OC0HX2wcqA5oJ%2B%2FiwizOctDwIg9LwMWfpvjcvLcIRDItLNb%2FQukMKc0umnWWrm9V44PGl3Ip4Paad3pppCwDqbb9Xh4V%2F9qKKfFDztBArscAZU5TS2Y7JyGRMGHgGmSRafKrBDJoR5dWSej8KfSaX%2BC3wHEnLtw6yN%2FSb%2FOln9agYxKyXaUVeNtF8CJp8jgNlM3XGoErnPjhxfc6YMlzHN%2Fo9lzYrpEJmrd%2BvDgBZMNQ1%2BuwOjhzh6PLd2XhUWR3I1B0P9uKaXlMhGuJOrcNiZ4CFWbt0rlVv6QWk0mzs8wnjJSyNv%2FuBj%2FNrfsZsKM7Ql4y%2BSaPbOYxdqmMouEVu%2BngrayMBu9EtAHHVAhsxTDDZd4VZn2%2BcNY0g1SdnNMkJE7MhgqQ%2FZisaXm8lLAn5BcTaiEVIxPDMPPVxcMGOqUBg0Xz26N%2B3sGoF6UoNhf2c0DvfZhn5kWktDc7eiFHs8Ucv78tylUdnnc%2Fu6t3SoSPM7B2ReNTRXUHWeqs8s%2B08xToK2BQp042etm92C9y3kq8fS0hgxTf6q8kjiL6MtaGzfQ0xW%2BD8%2BrBdiNDiYq18USIr6Qxf98w5QyfnoMhMmZV%2F1kZKxiFNa9exHHp1wMnMYrrlEP7FBIPC%2B8wcKX1YnYxuxNg&X-Amz-Signature=b88938bcad23e2355295dda710c8b6ed33c3d72898b2d140e76711d4306a7164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURFBFTM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHukw2SjGqISs9wN20fweVS4gZmN6Z6X15I%2BYefekDW5AiEAlwHlaw2Of5%2FUqIQ%2FocBnDMDSjvzQLtD7OEvt9o5j0IoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTp3Bp3m6C2uZ3J1SrcAzKiD44Tmu%2FNJ8wzxuaql6olipJcrULneVcB0HlRCQ3qh1obu0u032bRfQLlbyrfuW%2FqGs%2BFCEn5r0klExEvZTnawW9CZHbCmY7RyCcbiYQMiJc580HeG2w6jNOTOI5Yfuf6ZecydY9aW2VcBz0PgAEi04VquVRiWriv%2BMgNr1RlUVq9GKAWYbMxVXdCzPepMOTZdbC8J8l0pAkk%2FsC53DTY6BpKUuqyhmLSFQ8I5oyX%2BXc0QaZcbszWg%2BzzuNzqBlQkGQEys7AJoxqYKwOGWDzMML2FTJQ9Uf2Hvxl2i6m8cf4tGQK70mEttkAQcMsGR1aBq6JuIs0mLdkKPyVMs4q%2B1ix3zHYUI%2BkTSBMXuLtwaj3RcuHtroS9b58HYOfSfaGqjWYeW1PKmEAHpn8g3486wo%2FU5AKQmoO4WWqR%2F94KxHp6bRGdMczaguH9Ag9IfUwKL3gsRd55NSDp5aQgfXukQt41NxV%2F6%2FMs1K48rw7XlFmxxvSQVpQ5eu0nXKVBQpTCjxDFeccu9TmwiLJmv8Dm46mMKIxqWtZCtuyltO8l26ki5Up%2FCQ5MLOK%2BfMhVVNoNDCcVIhT5z0mVa%2FVjBp0k5HHYwy%2FhYVYXs9zTmNDWud31uvd0Hv50vd4PMODVxcMGOqUB0j5%2B7tyo%2B3M%2F3pyubbNevvMqLbbNQAhKYn%2Fys6elFhvEq0htSY6JLBWsKIbOsRbCJT9z3bMu4oKebm46vgenPeMpaWddkuwkgXCrHbNrd2gloGpwfMA4ejHlQezpiHQSmKyKhNlNjUXfE7eqrsurCM9%2FIyKjTHwemMK%2B1aljiebFobDbor4HzMu%2Bltj3TPmgJJhL7F2dTYk21zJ%2FJkGEF06xAh7U&X-Amz-Signature=e3cef8e79b1deb07c92b0ad6dfce68c3b9b585b1d936b09405ac4a8cabcae1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
