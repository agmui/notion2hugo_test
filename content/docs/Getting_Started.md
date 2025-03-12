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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23YQ6AD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDe%2BOiEQifnIW6XYNUiMQ4Ewx1Llkwq3Y75%2FCOao8MSNwIhAINDqdFFeWRDKuH4c5iE0bNcxdT6gshpxjlRf1ZHUtufKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWNa6tWI6GrGJlg4q3APVaIq0aWeHPYOkPEfJ%2Fjw7UuMnIC5kanjhugRugE4t6mDKhYj9ILkVm008CrUJtrT7jU476ykhyoCrkp23lwql0zeTxeoUQdqOPqxeJNk%2BZCJC6UhS2B%2BHQVSLdGFahgL%2BsCXRHdrpTzKu0gpqzAY37844aI%2BxVyaKfoUpm2dI6odPJKmv1ZsGigZzU6hcVp687BTSNJDowyEC3I1U4%2FC6VRJcMNMhkI5Vx7qJ20r2M9loH5QT8nXG91ZFrrIRBgbp4KXmnDrAMPJGvLkvoPdUwbCc3UNZql3xuPc6BwXlLdu31nZfLsIMA7m6w34dOUTOWG3eOkXcJEJdn53Q3TjdMdPy3GEtqRV787d03p%2Bac8H7iwDA8tR8NX%2B0QtJmOwVfpZ9AaoeajeFsi2%2B3c%2FgMmbGbgUgucB0PfrQv9iFHblVS6gDSwCVEwl%2F15eE3atDi%2BQaQ6EvKqOOVxVn6iQc48OcPrajPQY6fo%2Ft%2FCgstSUhTpgv%2FjE%2BP%2FX4vGNT%2FBn8rFDCq4O0FMAdLGa%2BPFZbDF9D2Ec83fXBpdgiRi%2FHWr51enxrJtU%2B6yGZyrd9igyr7fpdG831VJBRBXZ5N92sMXFc3mZu74Ss9rmCERxrjIv4Aj1brDCvubmoqTzC%2BvcW%2BBjqkAXi14IJmB2steEAcF6oqxqvAgmjHxeDY5mwfZ57rVq%2BKYLmCUxn%2F0OvMnEK%2BNSN1eww4UKcD6DGYOKLuVCgEGqAkLyu53tGKWpkRev6m74UaCoobPWIcISsPbLtuJiSHBOCjrFLE3U30GaBuSB2eLwX7%2FYwDys3FN1KTTI0P%2FT1VTI0oz2ONaI2YrG2tjVQohzUVsHpZSrBmqMvpIBj%2FoQmm5Fu0&X-Amz-Signature=a2f72dd8da2aecc55955dfdce4edf0f5d593b79c730e375d55e730bdda4a9695&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23YQ6AD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDe%2BOiEQifnIW6XYNUiMQ4Ewx1Llkwq3Y75%2FCOao8MSNwIhAINDqdFFeWRDKuH4c5iE0bNcxdT6gshpxjlRf1ZHUtufKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWNa6tWI6GrGJlg4q3APVaIq0aWeHPYOkPEfJ%2Fjw7UuMnIC5kanjhugRugE4t6mDKhYj9ILkVm008CrUJtrT7jU476ykhyoCrkp23lwql0zeTxeoUQdqOPqxeJNk%2BZCJC6UhS2B%2BHQVSLdGFahgL%2BsCXRHdrpTzKu0gpqzAY37844aI%2BxVyaKfoUpm2dI6odPJKmv1ZsGigZzU6hcVp687BTSNJDowyEC3I1U4%2FC6VRJcMNMhkI5Vx7qJ20r2M9loH5QT8nXG91ZFrrIRBgbp4KXmnDrAMPJGvLkvoPdUwbCc3UNZql3xuPc6BwXlLdu31nZfLsIMA7m6w34dOUTOWG3eOkXcJEJdn53Q3TjdMdPy3GEtqRV787d03p%2Bac8H7iwDA8tR8NX%2B0QtJmOwVfpZ9AaoeajeFsi2%2B3c%2FgMmbGbgUgucB0PfrQv9iFHblVS6gDSwCVEwl%2F15eE3atDi%2BQaQ6EvKqOOVxVn6iQc48OcPrajPQY6fo%2Ft%2FCgstSUhTpgv%2FjE%2BP%2FX4vGNT%2FBn8rFDCq4O0FMAdLGa%2BPFZbDF9D2Ec83fXBpdgiRi%2FHWr51enxrJtU%2B6yGZyrd9igyr7fpdG831VJBRBXZ5N92sMXFc3mZu74Ss9rmCERxrjIv4Aj1brDCvubmoqTzC%2BvcW%2BBjqkAXi14IJmB2steEAcF6oqxqvAgmjHxeDY5mwfZ57rVq%2BKYLmCUxn%2F0OvMnEK%2BNSN1eww4UKcD6DGYOKLuVCgEGqAkLyu53tGKWpkRev6m74UaCoobPWIcISsPbLtuJiSHBOCjrFLE3U30GaBuSB2eLwX7%2FYwDys3FN1KTTI0P%2FT1VTI0oz2ONaI2YrG2tjVQohzUVsHpZSrBmqMvpIBj%2FoQmm5Fu0&X-Amz-Signature=4e9b2a3e895bffd77c8eddd9f4f7c20810d59590f6f6c48413c982073be7bf17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4QMZKN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCfOp6xiHEprF8MBJulCEmClSY3U4NyT2Xk2M8Q6C%2FHggIhAKCcJ51%2Fy2kWzSeTonH9GcvxQIub%2BaBfY3r9BDE0F%2FAjKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkiquq50rHpM61rncq3ANVCXe2vR0mCqr1YFekotFVsmumAcRwD5gIaCx8yw4rLGoV1yJ1qxR2pRnxOx92rwAmGid4oHt20A5KNwh%2BSHgYf075Ev%2BAJQU3T4P2P8C%2BJCVedZSLlA5UO5Xv9iA6DUH3L%2BvzmNJAhvSVBHFpzHUQeRVlZtL%2BfQgh77CR99X1B1gXMDmmGhcF8LxpuFyBqRbtmrqdzlvRqxIHaaxiKr40xVtqcbg9bzXZF2mPQPc47W3dqEVU%2Fc3RoT4zHCKfHW2NyxdmSzTdbR%2FFiuVRpBFMrW7YCqvgip35q8IHYy83dEIFL2jTKC0Hrocubmfv37rr%2BJbtACNpsU5UVroRvwa6Dh8fyDAsPT0mS6%2FqWyQKCFaz45g9MbFXcn4Oy2vsJwO6%2B9Lr4Oz4EQn460IUjzf5J2jh7ausHpoZI1qh%2BFTFkPB74LLdeBrco0on2nM48bJ7wH%2F3dlestJGM74T%2F2BwlFnRMYYiMwzdo0xMiXO2JcmBMA%2B1tX0XwMWwYiIqX7F4pIxXYv1h6Xf6DU3qLkgmbh2jLH4Ae%2FRHrVFXH86glJoAlwNIrU7yQXEBC9NChY2a9iYWFLcLdxvu2zJSJwpdFfdDLpziI0q%2BIMTh3uzdblOXvBslnDStbsPBdMjD4vcW%2BBjqkAb7jqjBdWhxKBpMrlHJCucwS1UcVma%2FnqcC6VV7JUV197%2BhHPxTo%2FG1lRZlX%2Fm0BfI59HtZ28hW9fBlVDLQa7kEXpLCpLKJtOQahP7MpxOSU7%2BzjHBfYjFfO%2BxrVasEkuhmjb2t0K35CvjHrnqEfaLQRoRVLa5QsvxcLtR72ukXsK10WT0vtuqG0JOg4SeebELp7M0yD3e3XCjf84ec8RSLyihAN&X-Amz-Signature=b69bdf0840de088ca72198e86d844b573ece043506f0173e1e7e2aa6756fce36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRCYK3ZM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEIW8z1Ei7t4ydqQz00WBvyzRGEafxmZuQSn69Wzq0snAiEAj4Ny07sY8eahULmfttKG%2FDT5u0OJANOZ3DPzWJVtJJQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlDJ%2F3vZUaDFjAdQCrcA1vBQgcql%2BruB7pt1Xv6gvKdw%2BzHv%2F6J0UuA%2FO8qDwqGvYCmMQEp0SgxX7%2FheGBTHKd8L1m4O6pcXpQ8v9FskBkJDkDWS1Ef%2BDoBuGeFXkGxz6%2Bm%2B4UKVSif5awK%2B1wyR4v86sqkT5%2Fvnb7wGBw5%2BBOJe6hi92e49F%2F4KAxh5eFi486ZYRwYa1GpMB2spX2ZxuU45bV4pd0UuvjxIcz61%2B2XPCLDHoxa0a3GAWr715emI4Pq68R8VnbvHzxHFgVdUICVyYrXxsb8nDqHZbgesu0gHY7NUIInq8GEzsVYdKeb5inmnhj5EjSrk3y9vwJApdpFITwAw9GLj%2FH2QefeJNtxvBT02cCfwXnM7jjmtkr5EoOVlhHm4PM86VP2fjYESiaCmxg1ObTX3S%2BBK%2FJzxUs1e8CvhaSQMABTTCoSlFIIJMDwzlRegvgAmoWZNtkUgqgSm9FkrLPJBPbm91IjmvZ8kxkSdy5eHGknw9Uv4BVhWNf50o9WS1RcXetaCBD41bvdgYNl4pKC9WuLuL19ZxAdVuyT1UeQ2hHNsNW4vGj6HxZchmU993xDyS3iAiQx8TGqbcEOwPBOY259xfZcm%2FE9VF453jLAB4tPST3XwpQjWJLwUD8pa298xEp6MO29xb4GOqUBnRfv%2FKUWEi22hjHRS8pd6WeXl0%2FOiOZ6Z2kt28ZHtHRzPicJF5CCL%2B3iLISotkCGd4I%2B%2FUsXR4o4Vio%2FHsqvJjPFfkeEbU1cSh5U2UO2Y0roxCf5u8BwUwtecODfXzox0dt7uxRz7FMBELbZViNBOKeu7UjBfX%2Fp4QYZ9GwmGqZt%2FXYK4YZIRDGEGD%2FRSwFMB6c4%2BZrdmLUzrSRSYtkyTbemmVWU&X-Amz-Signature=af9b2da07dda5d956828b637998275070f8bf5011c25b9c0b6430a35953f8dea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23YQ6AD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDe%2BOiEQifnIW6XYNUiMQ4Ewx1Llkwq3Y75%2FCOao8MSNwIhAINDqdFFeWRDKuH4c5iE0bNcxdT6gshpxjlRf1ZHUtufKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJWNa6tWI6GrGJlg4q3APVaIq0aWeHPYOkPEfJ%2Fjw7UuMnIC5kanjhugRugE4t6mDKhYj9ILkVm008CrUJtrT7jU476ykhyoCrkp23lwql0zeTxeoUQdqOPqxeJNk%2BZCJC6UhS2B%2BHQVSLdGFahgL%2BsCXRHdrpTzKu0gpqzAY37844aI%2BxVyaKfoUpm2dI6odPJKmv1ZsGigZzU6hcVp687BTSNJDowyEC3I1U4%2FC6VRJcMNMhkI5Vx7qJ20r2M9loH5QT8nXG91ZFrrIRBgbp4KXmnDrAMPJGvLkvoPdUwbCc3UNZql3xuPc6BwXlLdu31nZfLsIMA7m6w34dOUTOWG3eOkXcJEJdn53Q3TjdMdPy3GEtqRV787d03p%2Bac8H7iwDA8tR8NX%2B0QtJmOwVfpZ9AaoeajeFsi2%2B3c%2FgMmbGbgUgucB0PfrQv9iFHblVS6gDSwCVEwl%2F15eE3atDi%2BQaQ6EvKqOOVxVn6iQc48OcPrajPQY6fo%2Ft%2FCgstSUhTpgv%2FjE%2BP%2FX4vGNT%2FBn8rFDCq4O0FMAdLGa%2BPFZbDF9D2Ec83fXBpdgiRi%2FHWr51enxrJtU%2B6yGZyrd9igyr7fpdG831VJBRBXZ5N92sMXFc3mZu74Ss9rmCERxrjIv4Aj1brDCvubmoqTzC%2BvcW%2BBjqkAXi14IJmB2steEAcF6oqxqvAgmjHxeDY5mwfZ57rVq%2BKYLmCUxn%2F0OvMnEK%2BNSN1eww4UKcD6DGYOKLuVCgEGqAkLyu53tGKWpkRev6m74UaCoobPWIcISsPbLtuJiSHBOCjrFLE3U30GaBuSB2eLwX7%2FYwDys3FN1KTTI0P%2FT1VTI0oz2ONaI2YrG2tjVQohzUVsHpZSrBmqMvpIBj%2FoQmm5Fu0&X-Amz-Signature=e1c9b3d5da7446415d8046906cde01c240764c215f90bd00179d3f8d054c044e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
