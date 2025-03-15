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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66ASFSB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrj46cCR3rhMQiOcY6061hiwDiEi4OR22Uc6GYp5dpgAiAqEXiZIrLKnhCwyaq%2FDv8w%2FJlfWZyhHRuTsYX9trSoJyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEi%2F%2FO%2BtdMOxW1gKKtwDxBp8wSaz42h%2FjquM9Q2Bo1KHBsDTYfU6BOEDUvq7ywb%2BR2hZSj0V9JqWxptusNjClLmfew%2F0bz%2BjzgQi5hWn4HTzXscwfRj2atNgHWLI5FqM1eoXCbqi3iZt40CoXvSVebvgw8FqREmlF2x%2Bs4k2GhXrqx%2FO7i%2BI7rClh88Lyqkm9aOxBABYSHhpt5AbeaNPVEAhEDJvjNx44%2B2FLaulkcTioZg%2BUp7jcP77IiqykVxCsbjib5iSq1Jz2G4A0XsXPjUeiMxYkZGBX4YjpOnc0v%2BznrDugQ%2BH%2FHBH4s6CTemUAVrOqNfvZW%2FWfqQyILDk0YpEVKOg5A1AfoyJ9yBvHCX5DnEG%2B5UUd%2FP5G8bNdPEHfdURR6FrFOnKbjOz9iwcR0x08yM%2B1ELRGz39dRG68MYOd53fuJPb7T0g%2B%2F4s1VGRbj2%2Bi0UNveiFuDK%2BmoAdlExKY8tB2L9q7JXishlFIIdxv%2FHedkNyspsyfw0CldEYZKlEqAa2PZCRSu9%2BnrC7TXGfPqZNyWky5%2FpVVynWLBl%2FMU%2FWtyh%2F0I5rZTxxe4Or9MEDSk3YZfBLai48U7GOiEizOK3VXmcbuQR5HQwT1HNx0cA2KFX6h0HEAvEMLOFyskuV4e5H0EvRQY4wyOjTvgY6pgEhRsUXAnX%2B0t238CpQotwxJ08GbOh8X%2F%2FCkfycXEdxGff7vDg4HWwyEMeRl4y5ZaWRPg1hLbU1fWaVjRdMk%2BdQlDk7ufpeTEnYW8jIiOYNfbHrR%2F2j2dONVZYyQcGpXF26c4UWhaniyFi8zBBm2D1gbS9J%2BMhVYpLyLYZUYqdAExk8716%2B2jkDI73FPbigIAJGIkqOngvstHRUwtnARJsOl3i4kFVU&X-Amz-Signature=a15fa8c2b728b920ae803d53213a5582a53cfb2123873e8ca8712a7ed2379906&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66ASFSB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrj46cCR3rhMQiOcY6061hiwDiEi4OR22Uc6GYp5dpgAiAqEXiZIrLKnhCwyaq%2FDv8w%2FJlfWZyhHRuTsYX9trSoJyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEi%2F%2FO%2BtdMOxW1gKKtwDxBp8wSaz42h%2FjquM9Q2Bo1KHBsDTYfU6BOEDUvq7ywb%2BR2hZSj0V9JqWxptusNjClLmfew%2F0bz%2BjzgQi5hWn4HTzXscwfRj2atNgHWLI5FqM1eoXCbqi3iZt40CoXvSVebvgw8FqREmlF2x%2Bs4k2GhXrqx%2FO7i%2BI7rClh88Lyqkm9aOxBABYSHhpt5AbeaNPVEAhEDJvjNx44%2B2FLaulkcTioZg%2BUp7jcP77IiqykVxCsbjib5iSq1Jz2G4A0XsXPjUeiMxYkZGBX4YjpOnc0v%2BznrDugQ%2BH%2FHBH4s6CTemUAVrOqNfvZW%2FWfqQyILDk0YpEVKOg5A1AfoyJ9yBvHCX5DnEG%2B5UUd%2FP5G8bNdPEHfdURR6FrFOnKbjOz9iwcR0x08yM%2B1ELRGz39dRG68MYOd53fuJPb7T0g%2B%2F4s1VGRbj2%2Bi0UNveiFuDK%2BmoAdlExKY8tB2L9q7JXishlFIIdxv%2FHedkNyspsyfw0CldEYZKlEqAa2PZCRSu9%2BnrC7TXGfPqZNyWky5%2FpVVynWLBl%2FMU%2FWtyh%2F0I5rZTxxe4Or9MEDSk3YZfBLai48U7GOiEizOK3VXmcbuQR5HQwT1HNx0cA2KFX6h0HEAvEMLOFyskuV4e5H0EvRQY4wyOjTvgY6pgEhRsUXAnX%2B0t238CpQotwxJ08GbOh8X%2F%2FCkfycXEdxGff7vDg4HWwyEMeRl4y5ZaWRPg1hLbU1fWaVjRdMk%2BdQlDk7ufpeTEnYW8jIiOYNfbHrR%2F2j2dONVZYyQcGpXF26c4UWhaniyFi8zBBm2D1gbS9J%2BMhVYpLyLYZUYqdAExk8716%2B2jkDI73FPbigIAJGIkqOngvstHRUwtnARJsOl3i4kFVU&X-Amz-Signature=e88380aeabdbefe08637d9a134f91b5d2b1d6167fb64b287c09ca7b045ca50c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEDIOC7N%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYEy5M1ucBKcVLF3irZOlgB6sKak%2FtKKyTFUswZcJUUQIhAKKHPfIfCvAHrjrpl0m5VRivhJbJjQOq5rxZWND%2FDDZwKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzOey5M5k4a6fx9HYq3AOKfeuuNMxD8nHeJSb20fS1kjBqaLbLpwKHt80Bk2%2FcfY5URD1ZWdtdhBqy5Vs3tRvUfduEYsOURhIHVkYhIC5vECupBA%2FMAXBq2sfgSA5YO45hhxrUGEW%2F4gr4HE8U007wCmWiH1rM2xetG7RXqqcjBD%2BgN7vLSYPwNGnzHRhkRLbj6MkAWXcadbjRO2Vm6JZCJMFmRzS4L0f2FpxVttB6%2FpJSmVUELZfJU9tPr4WhSFYbbWB%2FsCmS4wrnO6GUvAjIrmK6OgnNVbH3OiS3yeN8005cGAvgOgCGWmq2yf53djxuah6J%2FAs4qvFR9hnQz0zqiiEwBxssRVDOUsG%2BwfJC%2FkOy0Q%2BQnQD22y9zCqPccM%2FK%2Feh0yXiBD7tg9VmPJzWfm8Ek2QSfy%2F%2B%2FJZUQ2gYoZAsfa7cRQc69yxIpa45wDG2rTCTNgHEY6mMm%2BJxr2K2UpfQsI758OVCPdV%2B0LfcXaktqTFZ%2Bi%2B%2FxNKITbjMNTP0eZHwLNdA3qmHKKNYbUFMvAlRcy7UU3fN3%2BkhjvZan6f94%2B%2B%2FhtRMBk6gBBJJrD0Ophc7LajTQZl2eyBU5ELo%2BCSCTrCMu%2Fpc%2BXW%2F6AYdTZ5trKO6h1Dg48UMBQsDvPgVxqxOIlARJyhQTHTD06NO%2BBjqkARriiSkBSLgHj9u2hX%2F5INxfhLXJmEvyft58CivgTy7K4SdFiV3pdCua%2Bm4NzxPxPGr%2BmRHu1AJrl806MiLBkbr7QsNl4mh%2BrU2R1gVCj1M7rhUcOZQ9dmN5DygrDSt48lQYvVtZYwMh0%2BTmys2Dbr0z%2BU7NvcU4W8lssni7Juidz2XJIc1NGhZ113TbIecJSZ8hK1DrGATwc7icP1siGzsqd7eM&X-Amz-Signature=b7098f25443f3cd8963c5bf46365f6d72dbd9cda543bee2a1264fbcdac40b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y7KP2SF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyCEndYe0YPJBDUWwhaO6EJlzcVkdKbzmXbznFsavMYQIgD5eMgWrnASFeg%2BdB3KMccABgcnBNx5e2NSdUz5rjB%2FIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4mJ8s3bCOF7cs8xyrcAxTQhZn2ISC%2BlENFCtAnDPsuXh0teEzVrjyVNjPFFslV%2Bt5jmoFU45YQniC5RSO1fJo3OnhmqZMKghgz5DLLYXd12jemXplPt5%2F8Wrh%2BE%2FOGzT5S5A83rUUYq8jNTmriBQwouGoCKrPDxmeosZ389RCdFi8pePfG8S58cnw14ftxtA4mWaD7jMJlPisHxi71r5jjY9XEnzZhWRkwUoeCFPzt60NRosZP6wUV0UlyWNmH2QEIHyaeJ2nU5RFkNcJ%2FwlNB8Wn6cGVCNsW0vyFTdBZBebQX3BmHCthwSwmenjb5bxt%2F5I985RD%2BS7XwUEf0xkguF9R7EeuH89IgVonL6e%2BMRduX2akZ7TLJIuqPxGotC2sMpGZGiHnIHhk8g9I28kNLgBL53ie9L52D9Jkf87el5aIoXPe%2BiNIY49u9mMYYIneY7mJTNfbnVBA7YDJvN%2Blp%2B4%2BLKerW7N%2F4dQe2H%2BsNBmDh8wLK9bQHudLBIc1pK5hUeKo%2F8W5Rzxo4bQY3100la%2FNF1GkP62Wi5gLpjqdBh1Gn%2FappNr0QFXf3lFl%2Fh5T2bUH1Gk3LyeGf5IbYw%2FXOvEerMrE7PJ7M6OyxV5IwGJKoUq3lye1ljT6eit%2FyVR3MvyO%2BU2xTbzUmMJ%2Fp074GOqUBjo4Cs9ceyRzvw2uoPNsqnRdh4xaK0C4cSOINc4tZULdn38l8TnxaW3bC5FaBwCegDOzwdZuL5yZJSwTqQqUMEXTniObN%2FUuiJBGkoG6NvTM2UcBwQalPRY0yVJxU0K%2Blkni%2FBhTzK3b8%2FO%2FX%2F%2Bd8BAqRVdFD8LIq9eGbL4FlrzrFrLifGTtNLTxLGxHshH1a03D0MJYwZF%2BMCRcbGcm8QwA5%2FCY7&X-Amz-Signature=c4323a547cdfbd2293a754d9976a972b129d07e3a533f77f351233a5fc3d5665&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66ASFSB%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrj46cCR3rhMQiOcY6061hiwDiEi4OR22Uc6GYp5dpgAiAqEXiZIrLKnhCwyaq%2FDv8w%2FJlfWZyhHRuTsYX9trSoJyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEi%2F%2FO%2BtdMOxW1gKKtwDxBp8wSaz42h%2FjquM9Q2Bo1KHBsDTYfU6BOEDUvq7ywb%2BR2hZSj0V9JqWxptusNjClLmfew%2F0bz%2BjzgQi5hWn4HTzXscwfRj2atNgHWLI5FqM1eoXCbqi3iZt40CoXvSVebvgw8FqREmlF2x%2Bs4k2GhXrqx%2FO7i%2BI7rClh88Lyqkm9aOxBABYSHhpt5AbeaNPVEAhEDJvjNx44%2B2FLaulkcTioZg%2BUp7jcP77IiqykVxCsbjib5iSq1Jz2G4A0XsXPjUeiMxYkZGBX4YjpOnc0v%2BznrDugQ%2BH%2FHBH4s6CTemUAVrOqNfvZW%2FWfqQyILDk0YpEVKOg5A1AfoyJ9yBvHCX5DnEG%2B5UUd%2FP5G8bNdPEHfdURR6FrFOnKbjOz9iwcR0x08yM%2B1ELRGz39dRG68MYOd53fuJPb7T0g%2B%2F4s1VGRbj2%2Bi0UNveiFuDK%2BmoAdlExKY8tB2L9q7JXishlFIIdxv%2FHedkNyspsyfw0CldEYZKlEqAa2PZCRSu9%2BnrC7TXGfPqZNyWky5%2FpVVynWLBl%2FMU%2FWtyh%2F0I5rZTxxe4Or9MEDSk3YZfBLai48U7GOiEizOK3VXmcbuQR5HQwT1HNx0cA2KFX6h0HEAvEMLOFyskuV4e5H0EvRQY4wyOjTvgY6pgEhRsUXAnX%2B0t238CpQotwxJ08GbOh8X%2F%2FCkfycXEdxGff7vDg4HWwyEMeRl4y5ZaWRPg1hLbU1fWaVjRdMk%2BdQlDk7ufpeTEnYW8jIiOYNfbHrR%2F2j2dONVZYyQcGpXF26c4UWhaniyFi8zBBm2D1gbS9J%2BMhVYpLyLYZUYqdAExk8716%2B2jkDI73FPbigIAJGIkqOngvstHRUwtnARJsOl3i4kFVU&X-Amz-Signature=392de0436eaafecaf81c682b3ff1dcc64c79156154dd23979bdbeaf473917556&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
