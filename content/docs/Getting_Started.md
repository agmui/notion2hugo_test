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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2M6PWG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDpoXpfTdMEIqd87a8ST73jDJ894CsJHUs88v8xlRA54AIgbiaytakpzdNV53guJ73DVs2zFGbD01JLjXKTARTPn%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLGN4e2YAWWOLc%2FLKyrcA0b%2BLcL6UCazPhc2s23tu4Ft%2FxWIJXOiNeZJawV4Gu6glHqa%2BMRqGXz46VqaxCAhDD%2FaU6Ytrn7STT57s1g59EM3waZlePKSoOYgAl9FZesdEvCzJWpolP0y97%2FDV9FJNeyspZ9PieS5iLnl95or1jraBdMKud43Wc7OeJ4Rsi3mSKP%2FKcyemgFWi4uMZ0dBQlFYF8UnCwfJ6VPF5bHpKBOgDeQjYyacNpBtwEOQfHOlK%2BxQ0%2FdeXd41Oz3d1cYblFWbqqHzcox34A9mcCati5SGS9827rkqWmbKg9maOTZcFtqwbv8OTXevZD6fKytv8huWKzGRSQbtfKbglLlVTiLNCiVDJlgfSI%2BDG7v4CjUyZCWqrS%2BUP3o9QmWq3c7BMVvVsEYkxJc2U3MUltmq%2FeD6EJsdr27SPg8EHdP6BiAVYxTIWAiicN2OQWEavJiZYC4HbF8M1RpE6LGpFYc%2BI4KUUgz6Ij13M8JToPinMrb7RCmPZ5t%2FwXEv2GoW%2BIrzvtgLdBk6%2FaBqP8p9QxOnIfiP7Y6g7Q1wUlwmKmkB4DbmLpjeiOlXlcGSZHb%2BxBr6h8ZyPlDpW%2BWQqKpJ5gtaXV7%2F799b9YD9d5xp34O23bezfJyOz2DrxakVOjFuMLLxjL0GOqUBlOQra6Ls1VEXyt1I2zr5d4ClZKMTvSVCyL3LoAK1k8YWiELygl2AqVUTuD9cyqs2zk2vxMtF%2B5zI8si9ACAMKpcbz3trxbgixmR0P3XPz87us35tAfWh2z7FO1QjHwRYl3VRbTacMkeLj64ztUKLnqn2No%2FhCS%2BBPZc6ME5cGwZMVKhhZYAlG7JJccSAA%2F%2FyKB7UswQGjjsANwiY4LICyikXVKgT&X-Amz-Signature=7d455e904ec1c9f12b575437a073c56bb783ba623eb5681cb82ed5e7f13dc024&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2M6PWG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDpoXpfTdMEIqd87a8ST73jDJ894CsJHUs88v8xlRA54AIgbiaytakpzdNV53guJ73DVs2zFGbD01JLjXKTARTPn%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLGN4e2YAWWOLc%2FLKyrcA0b%2BLcL6UCazPhc2s23tu4Ft%2FxWIJXOiNeZJawV4Gu6glHqa%2BMRqGXz46VqaxCAhDD%2FaU6Ytrn7STT57s1g59EM3waZlePKSoOYgAl9FZesdEvCzJWpolP0y97%2FDV9FJNeyspZ9PieS5iLnl95or1jraBdMKud43Wc7OeJ4Rsi3mSKP%2FKcyemgFWi4uMZ0dBQlFYF8UnCwfJ6VPF5bHpKBOgDeQjYyacNpBtwEOQfHOlK%2BxQ0%2FdeXd41Oz3d1cYblFWbqqHzcox34A9mcCati5SGS9827rkqWmbKg9maOTZcFtqwbv8OTXevZD6fKytv8huWKzGRSQbtfKbglLlVTiLNCiVDJlgfSI%2BDG7v4CjUyZCWqrS%2BUP3o9QmWq3c7BMVvVsEYkxJc2U3MUltmq%2FeD6EJsdr27SPg8EHdP6BiAVYxTIWAiicN2OQWEavJiZYC4HbF8M1RpE6LGpFYc%2BI4KUUgz6Ij13M8JToPinMrb7RCmPZ5t%2FwXEv2GoW%2BIrzvtgLdBk6%2FaBqP8p9QxOnIfiP7Y6g7Q1wUlwmKmkB4DbmLpjeiOlXlcGSZHb%2BxBr6h8ZyPlDpW%2BWQqKpJ5gtaXV7%2F799b9YD9d5xp34O23bezfJyOz2DrxakVOjFuMLLxjL0GOqUBlOQra6Ls1VEXyt1I2zr5d4ClZKMTvSVCyL3LoAK1k8YWiELygl2AqVUTuD9cyqs2zk2vxMtF%2B5zI8si9ACAMKpcbz3trxbgixmR0P3XPz87us35tAfWh2z7FO1QjHwRYl3VRbTacMkeLj64ztUKLnqn2No%2FhCS%2BBPZc6ME5cGwZMVKhhZYAlG7JJccSAA%2F%2FyKB7UswQGjjsANwiY4LICyikXVKgT&X-Amz-Signature=873e8a2a550995b54326eaf848482ff1f9439bd5090268fc2cda3aba2222e4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHCX654%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDz9f3ANWWrqqxulepBbGnS6HYKjwteg6tEu0InmHamYwIgWHIuyn6LjewH1sSRlmDKRD1CDveePoRgmIfmSVUpwiIq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEkQws%2BeWV8VAEaY0SrcAwO4B2NgIQ7MPeoaE6i%2BBF7dM%2FB%2BHFgzXe958%2FogEz02BwElwSqWy11xevbMtrmb3Qb0y8r33wYbWvofQ6lDEHLnReMfqyv%2F6TIznIL3kIrISTMgm9coBlubuq2m1AGEFXpx3x0bCs%2BQGAtW%2BLh0fIu1QsJeYwaU5MeUh1vwPZLYRK5OS8ENbq25tCRz3vZ44D%2FOINFl%2F1HCnXtdFacf0tj00n0ci724foSXIIkCEbBoyd8N9elFKeQhua8gAE%2BXguZlF63XTArEVCkHqEu9FS4ekpKN5BaBpeS3wsr%2BQ6ugSQ%2FrSfXf964HNn4XKrVjHz1mBfkjYIl791oTUqrJFattZnznXxAUoQ6Zd0VbfgiFhO7Y8WNkdJuqkuMrr1cobtFg4PV7665NDV%2BowvlH6eaP9Z%2F52ZLgMuLArsw2LwSxkzX9l4fLqci2eTZ3ADS01H72iXYwGizYjFPBP6hxLRhybVvlzqYLliQLhHqdMSkK8vRQoxWfyn9%2BYx%2BorzBqvhPIAxLxedLrCZc7kFKGSH2KQbxDERcmkvkhJGTbnwPlEZ%2BuubHtbNpMrFLPxsj1oQyAfp6Mt3U5w0P5ZRIXdLQFCUti%2F6Xx8IBdSEfW%2F241twxyh2Grd9jMeMcgMI7yjL0GOqUBynND7TE%2F0vjuMlnogPdwoUciQ43OhoIM3dX4e3itwdrUU57fhxA4%2FEknF8QzU9GzYjSbKV%2FcQBP5hHDEyiE20tY7MvyHNMe2r0kRQfzyCgloSS7ey9r8q%2FFvgGG3WET7CwjIz4W%2F2h8VMAh0G5Goy9da3GbdbiDyR5sudCfrGO1r4hDlFxAr2hPdsMDT3Bnc1PNEqqgY2tnjFursiAlvM3bq2Diu&X-Amz-Signature=c00015bc469066c5ff042430cd7e18bcc00786b6ef688804b388f73be9145376&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XF6KUTB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIH8oFtviyqok5h4EFbctnGPC6jZJsI%2Bp9k6Gk0hQBO9SAiEAwnvB%2F0Et5DE1Esgk1Hygl54ZBYu%2BCs%2Fnw4r3a0faPP8q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDMeiROvPDkGiWPuBMCrcA0g9xQi9ECNuX%2BLz4R7zXnWTGdQ3R84LEs5221WWfa2Fv1Cs3yRVHoVg%2BimQgWW%2BdVoje4Om1vzqtoTH6RA7TRZDBOuKfz%2FT0eU%2FXmGZ68S8LXwdNq1Qj4oDi%2FCBekcF%2FCS4IiZrZxXYrP0UutYOohFv5%2F2vH4%2B9ZUaSkqS3NONDUi3AKWcZhSUbN%2BdLTguaSR%2FeltV2CtK34eARKZrQrf7iMjohXjY5dCBxmRjqsbXI30V63fUTIy1qG8l8suz6YO6aJKIiY6IGr8mOsjSPfQ2AalQzWk29zLsXwtgdl42fnAaeJaB8afUPC3tsuVqENN3v%2FgMRTI%2FZDJ4VeEtN1lvyFQX3aYiRLADibvObxQveVRuNvzaEnNeIDUphX9xIQEu2kmJyQasw7MRmuCoEQl8lb9LowvdDztZDH%2Bu84jyygllSIAhPCyeh4%2F2KQUBNX%2BOrPzlneYjlD4dfYhGp4k8wRZVKYe7Zt%2FNB7HDhM0sMCAyrDoPpvjXJTAF4xwz0%2FCgld4WmkCV6kPmoIup1H4MraQj5IDZVh6PJIN2EtPN%2BtIrFEklfrHkD0u2Xq6y413lkNrBGDDCCgqs%2B%2FSAj%2BOEfxnPer7pc2ldtZ8VWKro1m%2FhU4DLFv8N8eFiaMObxjL0GOqUBpwUZlywto9C%2FaU6zRWS0SS9aQFykAAa%2F%2FKHBBGlVGjYF9BMLwoP910WPe%2FdDmZymybD6VeqaQfPmpziLZ5Q%2BWX3xz5lbwJcyZjQ%2Ftr74eUvCaKRw5Hg4YUGS9v2RDJUOYrRXGcl4fzgVG3Q8FYU1LCG6QemzpluRoU%2BdWthJReBAsamN6IZCfg7RXd4ut%2FCZYevrw47chXpJ6UT0v1LUnAlGszRt&X-Amz-Signature=812ba89b9ef631d238c4351a42e94090bf2a5cdfdee536fe67c2cc79b0c7ca3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C2M6PWG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDpoXpfTdMEIqd87a8ST73jDJ894CsJHUs88v8xlRA54AIgbiaytakpzdNV53guJ73DVs2zFGbD01JLjXKTARTPn%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLGN4e2YAWWOLc%2FLKyrcA0b%2BLcL6UCazPhc2s23tu4Ft%2FxWIJXOiNeZJawV4Gu6glHqa%2BMRqGXz46VqaxCAhDD%2FaU6Ytrn7STT57s1g59EM3waZlePKSoOYgAl9FZesdEvCzJWpolP0y97%2FDV9FJNeyspZ9PieS5iLnl95or1jraBdMKud43Wc7OeJ4Rsi3mSKP%2FKcyemgFWi4uMZ0dBQlFYF8UnCwfJ6VPF5bHpKBOgDeQjYyacNpBtwEOQfHOlK%2BxQ0%2FdeXd41Oz3d1cYblFWbqqHzcox34A9mcCati5SGS9827rkqWmbKg9maOTZcFtqwbv8OTXevZD6fKytv8huWKzGRSQbtfKbglLlVTiLNCiVDJlgfSI%2BDG7v4CjUyZCWqrS%2BUP3o9QmWq3c7BMVvVsEYkxJc2U3MUltmq%2FeD6EJsdr27SPg8EHdP6BiAVYxTIWAiicN2OQWEavJiZYC4HbF8M1RpE6LGpFYc%2BI4KUUgz6Ij13M8JToPinMrb7RCmPZ5t%2FwXEv2GoW%2BIrzvtgLdBk6%2FaBqP8p9QxOnIfiP7Y6g7Q1wUlwmKmkB4DbmLpjeiOlXlcGSZHb%2BxBr6h8ZyPlDpW%2BWQqKpJ5gtaXV7%2F799b9YD9d5xp34O23bezfJyOz2DrxakVOjFuMLLxjL0GOqUBlOQra6Ls1VEXyt1I2zr5d4ClZKMTvSVCyL3LoAK1k8YWiELygl2AqVUTuD9cyqs2zk2vxMtF%2B5zI8si9ACAMKpcbz3trxbgixmR0P3XPz87us35tAfWh2z7FO1QjHwRYl3VRbTacMkeLj64ztUKLnqn2No%2FhCS%2BBPZc6ME5cGwZMVKhhZYAlG7JJccSAA%2F%2FyKB7UswQGjjsANwiY4LICyikXVKgT&X-Amz-Signature=b84fb281988ca7b9808826b719b50da6e9daece7bd718e730487d3b1e2ff86f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
