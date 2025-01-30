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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNJGZVY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQqAa7p0sfJqukMVBOT6LZM0EOTNEmg19Fq5MeSWdsuAIgNbwxdAZa2YNhIQ691HUzNkP0sMXq10cSVturSWBMGAEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIqU55Hlbn7LVSglCrcA27ivC3ncSwR3OWTGnbp55WG5S5tP4Jz3OV1xSt9ppDptDMCw3vTHPM1JTKkQWnhBtQCipSg7WVDnKL4MvXL8jw771zRjllch4mXOgMZ1vifuwkmjtUKeJ7QI57GlcUhJvw9e6ytX9OobkDaxa9LNRQ5AE7m%2FKk7FGgnDDJsGJuAxKmsJgnKDGEf56ct4egVLmkUDR3NSqd3RkRFKv1238Y59y%2FA5aBCXLsMMs1iOvnPU%2FFR0fQstb8Ncs3C2%2F%2BbxLaSHnmgyaLQUjEBNh7vexkX%2BPKM9vOroXO39tN9NtVs4PZ2UF8LweyXZvxacj02qK9gVpm8SrLJBZmDyYiuIj1yCfL9h%2FRJz4YGL%2Bo05lG%2BAU49waJX1yfnEI1sFHZsTIhPRn0pbXJUOc26nYZ4Sbx6E8OiC5gvafAx5PX2cj5PHOdFLE6SN9sOczsjVZJnBpwSJ28Ldqr%2FzIwRO6Z0J8n%2B9do7phEoO2rCfvgRTglcN3mgclE3yLaDat%2Bhk3Zz7oBa3raw1JqcVUZpMwrAgaVBH1MlRKhfyGgjta4v%2FLIgFrwLB9f0L6KgRDCxSCDnzW1DwdqJL3gwQzJDLYfXS5GxJzoqVvc4JPm%2B6hR%2FPrs4RvbTNSf5pkHxZB7oMMC067wGOqUBsBBpzGdHK9HTFV%2BOjxJAKzCO3Opz1Jnl5czFrK5%2FJ79JehcNr1%2BkSNPjtv6yV%2BrDrun%2FQan2WO03vTGA06uk7bc6j3FHLRPDfv%2B3%2FeEcdwTxIrn2bA8LVryBpgR2kHj7JVlT9xUEJ0CjLiXad0K%2FyjccHPqUya3pjbqisSc6mGVrnmmBWHCkW%2B%2Bl%2FEHEjl%2BGCblmSksAwCJ2Y7NgKCp3G%2FtO6KVg&X-Amz-Signature=62ca573cfc0970cfec5eae8a8fe478f5f83e85542aed2d25035b15b40a5980ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNJGZVY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQqAa7p0sfJqukMVBOT6LZM0EOTNEmg19Fq5MeSWdsuAIgNbwxdAZa2YNhIQ691HUzNkP0sMXq10cSVturSWBMGAEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIqU55Hlbn7LVSglCrcA27ivC3ncSwR3OWTGnbp55WG5S5tP4Jz3OV1xSt9ppDptDMCw3vTHPM1JTKkQWnhBtQCipSg7WVDnKL4MvXL8jw771zRjllch4mXOgMZ1vifuwkmjtUKeJ7QI57GlcUhJvw9e6ytX9OobkDaxa9LNRQ5AE7m%2FKk7FGgnDDJsGJuAxKmsJgnKDGEf56ct4egVLmkUDR3NSqd3RkRFKv1238Y59y%2FA5aBCXLsMMs1iOvnPU%2FFR0fQstb8Ncs3C2%2F%2BbxLaSHnmgyaLQUjEBNh7vexkX%2BPKM9vOroXO39tN9NtVs4PZ2UF8LweyXZvxacj02qK9gVpm8SrLJBZmDyYiuIj1yCfL9h%2FRJz4YGL%2Bo05lG%2BAU49waJX1yfnEI1sFHZsTIhPRn0pbXJUOc26nYZ4Sbx6E8OiC5gvafAx5PX2cj5PHOdFLE6SN9sOczsjVZJnBpwSJ28Ldqr%2FzIwRO6Z0J8n%2B9do7phEoO2rCfvgRTglcN3mgclE3yLaDat%2Bhk3Zz7oBa3raw1JqcVUZpMwrAgaVBH1MlRKhfyGgjta4v%2FLIgFrwLB9f0L6KgRDCxSCDnzW1DwdqJL3gwQzJDLYfXS5GxJzoqVvc4JPm%2B6hR%2FPrs4RvbTNSf5pkHxZB7oMMC067wGOqUBsBBpzGdHK9HTFV%2BOjxJAKzCO3Opz1Jnl5czFrK5%2FJ79JehcNr1%2BkSNPjtv6yV%2BrDrun%2FQan2WO03vTGA06uk7bc6j3FHLRPDfv%2B3%2FeEcdwTxIrn2bA8LVryBpgR2kHj7JVlT9xUEJ0CjLiXad0K%2FyjccHPqUya3pjbqisSc6mGVrnmmBWHCkW%2B%2Bl%2FEHEjl%2BGCblmSksAwCJ2Y7NgKCp3G%2FtO6KVg&X-Amz-Signature=702c5e318b30a0b994f62985f16426d91c1ec2980085dbd1f61fba3f862432b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZTMCIMH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY%2Fwq1vzXL6N46Q4h71dzVGWmMD61YVF2RU7EcaeVlnQIhAKp5IBT0rx7Bnb4DLv6NJ2dVW79KslP1qlED%2FHVWN59GKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMMcS6xsmjEpdqCskq3AP3DAEsEdf7ZXu3PGkYDRqFfvNwG4dVNtCczySosvYoeNFcAtEUp5Ti%2FLpQhOb7l9JaKOnepvmGTTqxiOWAc8Rd5sPhKtQKvM84IcPUbGWH%2FamncqDlRfn%2BmG8%2B1oFZOkHcoLKGM2Y6TP0XQfrtfYfa3A%2FWfCqbwAVBMWvQFUBNvfMbJKM2TqIBci80X%2Fb%2Fm3fLOxtZOhAhdzt9IabRU0Ghf8dBBLYerZArctFZlRYEoypmmICj7h6hl9rKKOT3bLNwJyNss1UAcqJU64RGbbFtd6EO9sSZr4K6GeID2ezEkCuUTuf4XWpKlgT8JDk%2FgA5o6W96dvzay98c4tGNb1i70b9pqlxHDZ7wraOfAXvx5bYB%2BaG8NJ6857PXpxwt22bTXEKHy0B1BHWqFaBv73EOx5rDDqY35hlfPthN2y4775ZTRpLLLpHHyryVlmQGq2EgRjafJERqGkbvcj289TOft9PVOCwyKKXiTX4inEOXYwbjs89pdSOnkd4km1XWIgLjR9KQWLxIuPcvr7m4FZYuAtS9ZhNxl59V0TkYK5Lvhrai%2FNj20klOXQ%2B5%2F6i5libcNEyOWk%2BaElWrXLDPtWGNwQ8ke5wph%2FdWy4InaQZfWPKXP3FPs0kr1tf3AjDxs%2Bu8BjqkAeR4CJco6tNQuYZ%2BibnyqLD6b28pOzD7TuazX0hD7F8VRKG9rst7k4dDzYRZqSAuPpmMe9uvC0Sk7GaOXN1Jnpo21GWSDaydpVnh4U0%2FYtgP30t7%2B9ULoDDaZOqgFUwY8kIOnqsi%2Bx8uThoAV8huGcvpHn26CoSUFVPVwPirU00AVIb7fCITyTClcBFxITAtBbmYDzl071vu50I5czp7qCx0Cr1U&X-Amz-Signature=55a2e27282126813bd8df5e8776a752997ff22c6d8bf8314303ca3c93121435a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDFTUA3A%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2FTeKkR9xf8dBt3dKcHnqoUDN%2Fih1%2BtO9sMUdXZwZ8AIgKpyTvLRlZK37kNj3%2B8HSsAqO%2Fm6dGf%2FxRqy%2BHOvV1VIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1ShnlMXe0DT6PaySrcA9P%2FkZaykc3GWXdnJcZk%2FU9vDpBKflut%2B5J7ba86cEIzm4h4vbUDrXLXU9y%2BJjE5LLWe2B1E17IRvaaPNzz66rd9zju%2FxSqKw0fuhFtnynb0QIiafOArDckrekeYDcwYeyvH9d62veDeE15ymMPXcpfgcrE0fbfysRor4ZsbncqVQBtuuTAUbFqxKe%2B%2BWIbmyPsL909bbhX3x5LmrI0kgZ%2FhtvHcsJ0A1IJd1xog7XOu91e8f4gyA0QxOaxUPfXXyHBk%2F7JhtJz1jkn6a9WOMKg3znYWApe1XcNwHlYgkmpKCHLgdf3aCFOP%2FF1uLxjZvoCCiqGm8QfYxCWqBi7WTBvPLjDys%2FlCdHPZWNT61A0d39D810s7%2BAaedmVpQgu7V8I2EQ7enGuaLqgvHEQ%2FNMVhGUlqhhG4siJUwVpIuppW5DgleYAdtdshQ6hRwCWV0bQb0T7GV4xfMVje8h3y7QpmvAoXH9%2FH2%2FI4zSbcr8vu9hHxM6Euh%2F2VY80PkQfHFfS%2FGs3%2BFfc1%2BiphwqLLFgLW47%2FZ5MsrP4LltzmOEjA8U7zSKDvlN09p4WuY8nm5x9ANegXjpUWnh88S3rWMUnh1CZo%2BnDw1V8kZuS4t%2FgeIMpDSiBym8yWuQlJpMPez67wGOqUBqv6chWuMyTer9%2BC9QGX4XnQAOdRjM0N4vh3VZ7ZDekha885o08e9Yj2DameCoKJyYGbzmzWIyPwSfNF6awJFZ7%2B6%2Bu2yIyKNyKbPUDTgpR8TErMqsDzAEEyLcQ%2B8GchejdcAtY%2F8YxzUMxVCg%2FP%2FMNOLmhKsimWvvbFwDauA6YMt3Ef2EBeBiWRM9l4%2FUrn9X5avfolg5yEjAr3L0EyZaRbPeVdD&X-Amz-Signature=386c61f7d6e3113f147ef62251af892133f996ee9a8bdf8e3986ccb58b6ebc73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LNJGZVY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQqAa7p0sfJqukMVBOT6LZM0EOTNEmg19Fq5MeSWdsuAIgNbwxdAZa2YNhIQ691HUzNkP0sMXq10cSVturSWBMGAEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCIqU55Hlbn7LVSglCrcA27ivC3ncSwR3OWTGnbp55WG5S5tP4Jz3OV1xSt9ppDptDMCw3vTHPM1JTKkQWnhBtQCipSg7WVDnKL4MvXL8jw771zRjllch4mXOgMZ1vifuwkmjtUKeJ7QI57GlcUhJvw9e6ytX9OobkDaxa9LNRQ5AE7m%2FKk7FGgnDDJsGJuAxKmsJgnKDGEf56ct4egVLmkUDR3NSqd3RkRFKv1238Y59y%2FA5aBCXLsMMs1iOvnPU%2FFR0fQstb8Ncs3C2%2F%2BbxLaSHnmgyaLQUjEBNh7vexkX%2BPKM9vOroXO39tN9NtVs4PZ2UF8LweyXZvxacj02qK9gVpm8SrLJBZmDyYiuIj1yCfL9h%2FRJz4YGL%2Bo05lG%2BAU49waJX1yfnEI1sFHZsTIhPRn0pbXJUOc26nYZ4Sbx6E8OiC5gvafAx5PX2cj5PHOdFLE6SN9sOczsjVZJnBpwSJ28Ldqr%2FzIwRO6Z0J8n%2B9do7phEoO2rCfvgRTglcN3mgclE3yLaDat%2Bhk3Zz7oBa3raw1JqcVUZpMwrAgaVBH1MlRKhfyGgjta4v%2FLIgFrwLB9f0L6KgRDCxSCDnzW1DwdqJL3gwQzJDLYfXS5GxJzoqVvc4JPm%2B6hR%2FPrs4RvbTNSf5pkHxZB7oMMC067wGOqUBsBBpzGdHK9HTFV%2BOjxJAKzCO3Opz1Jnl5czFrK5%2FJ79JehcNr1%2BkSNPjtv6yV%2BrDrun%2FQan2WO03vTGA06uk7bc6j3FHLRPDfv%2B3%2FeEcdwTxIrn2bA8LVryBpgR2kHj7JVlT9xUEJ0CjLiXad0K%2FyjccHPqUya3pjbqisSc6mGVrnmmBWHCkW%2B%2Bl%2FEHEjl%2BGCblmSksAwCJ2Y7NgKCp3G%2FtO6KVg&X-Amz-Signature=bff8e23108927662c0b1608b39ed90ba1be64110834d78361adade84696b2496&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
