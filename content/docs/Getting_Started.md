---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVFV4PB%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCBda82BYK7w%2FyqeYi5bjrUme%2BL2cz2ZFxvPTnUIn9Q0AIhAPEGphDWtrvIoAUBfvggwMXu0KUk7fJJJ9sWUqm4qMWcKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxak52G7oZN8RaUN78q3ANK848%2FtlBjtSgS25jaVdnszXV822ksOjqmpYfOdaNLD5obg6TnELtlsCG0B2e4eMhlN3XlYN8r8vBx4LyruRa42K%2BfCTGu2c4Jle7Dzr2ecxOTKFTtVxJ81Hyo%2BxbPCRSKx0gUmEIcWtwYQ37gPwKqNr%2BJrt%2Ffzl8iCKIxHNWhNGew8wB2Zf1qa9K0gwwYJswnFGAab4kGi%2BJ%2BoZaF5dM5v7Dr5Sfg6J87b%2Fg9vg%2FqOc980iqO0yAWiqBrtIeWhDcPvtIKvMcRQPdZs4Kwll0ZEUOSsGzg6Skm0GU01xdzXJhqO%2FZIh6dw0kng2KLhnQIhixswnp0QoQvtq3s9Ku0vfhIvIZz6HuKTv0iNfsfaS%2BDLifqnWOxIsEgCAs7zVhLT2wBrG%2BqO3Pu%2Fl14Aq8U%2B20%2BQSCcsTqstvK7fvqkxGWyfFwl3hjm9LuwtLoHNUkqaBmv%2FSgRL83rXxbGdn%2Br4J7mpAgZuie4JXT1OxlzzETSKfnBWYlkKk7cK7JmW6dpvKO6m2y2uyn5P%2BkuLtsKX5ORx%2FOXWRK3b8oZ3ktUYLghg2eDbIiX1jBl9Br6QBFSQs0nsrInPV%2BQWDHzVkntgUXnB8TOBeKezp%2FELEA1pVPDQIGPpjfyhIEClADDn8v3FBjqkAUEWwlrfbmwbDY73%2BOtuf59GBVeIIp3hfb6fx5dyiIyIBFOPTXeWm5TscsLzADpdlr%2FRL6aR%2B1MiZ23x4Z6Q1wPQbd%2BVtVyfiSyA1fj6gwJXzVIjIDAeFEkIH2TdXsFRNYwq2KHb0y4mILaLxGtikLP9OuyAJhn0doxfaXvRxCtBTZ0382VwZcOVPXLaxnBfdOhiIMbEWua%2Bi4FFhLJmkQkCq6Mr&X-Amz-Signature=f003aa523ce50b4c5f07ddcb8743706a4663183b30a8c1837705997bae044ff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVFV4PB%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCBda82BYK7w%2FyqeYi5bjrUme%2BL2cz2ZFxvPTnUIn9Q0AIhAPEGphDWtrvIoAUBfvggwMXu0KUk7fJJJ9sWUqm4qMWcKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxak52G7oZN8RaUN78q3ANK848%2FtlBjtSgS25jaVdnszXV822ksOjqmpYfOdaNLD5obg6TnELtlsCG0B2e4eMhlN3XlYN8r8vBx4LyruRa42K%2BfCTGu2c4Jle7Dzr2ecxOTKFTtVxJ81Hyo%2BxbPCRSKx0gUmEIcWtwYQ37gPwKqNr%2BJrt%2Ffzl8iCKIxHNWhNGew8wB2Zf1qa9K0gwwYJswnFGAab4kGi%2BJ%2BoZaF5dM5v7Dr5Sfg6J87b%2Fg9vg%2FqOc980iqO0yAWiqBrtIeWhDcPvtIKvMcRQPdZs4Kwll0ZEUOSsGzg6Skm0GU01xdzXJhqO%2FZIh6dw0kng2KLhnQIhixswnp0QoQvtq3s9Ku0vfhIvIZz6HuKTv0iNfsfaS%2BDLifqnWOxIsEgCAs7zVhLT2wBrG%2BqO3Pu%2Fl14Aq8U%2B20%2BQSCcsTqstvK7fvqkxGWyfFwl3hjm9LuwtLoHNUkqaBmv%2FSgRL83rXxbGdn%2Br4J7mpAgZuie4JXT1OxlzzETSKfnBWYlkKk7cK7JmW6dpvKO6m2y2uyn5P%2BkuLtsKX5ORx%2FOXWRK3b8oZ3ktUYLghg2eDbIiX1jBl9Br6QBFSQs0nsrInPV%2BQWDHzVkntgUXnB8TOBeKezp%2FELEA1pVPDQIGPpjfyhIEClADDn8v3FBjqkAUEWwlrfbmwbDY73%2BOtuf59GBVeIIp3hfb6fx5dyiIyIBFOPTXeWm5TscsLzADpdlr%2FRL6aR%2B1MiZ23x4Z6Q1wPQbd%2BVtVyfiSyA1fj6gwJXzVIjIDAeFEkIH2TdXsFRNYwq2KHb0y4mILaLxGtikLP9OuyAJhn0doxfaXvRxCtBTZ0382VwZcOVPXLaxnBfdOhiIMbEWua%2Bi4FFhLJmkQkCq6Mr&X-Amz-Signature=e16ecd39f9eaaacf81f45666c95c1723a78bf4c67c840f064576462c0234c9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVFV4PB%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCBda82BYK7w%2FyqeYi5bjrUme%2BL2cz2ZFxvPTnUIn9Q0AIhAPEGphDWtrvIoAUBfvggwMXu0KUk7fJJJ9sWUqm4qMWcKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxak52G7oZN8RaUN78q3ANK848%2FtlBjtSgS25jaVdnszXV822ksOjqmpYfOdaNLD5obg6TnELtlsCG0B2e4eMhlN3XlYN8r8vBx4LyruRa42K%2BfCTGu2c4Jle7Dzr2ecxOTKFTtVxJ81Hyo%2BxbPCRSKx0gUmEIcWtwYQ37gPwKqNr%2BJrt%2Ffzl8iCKIxHNWhNGew8wB2Zf1qa9K0gwwYJswnFGAab4kGi%2BJ%2BoZaF5dM5v7Dr5Sfg6J87b%2Fg9vg%2FqOc980iqO0yAWiqBrtIeWhDcPvtIKvMcRQPdZs4Kwll0ZEUOSsGzg6Skm0GU01xdzXJhqO%2FZIh6dw0kng2KLhnQIhixswnp0QoQvtq3s9Ku0vfhIvIZz6HuKTv0iNfsfaS%2BDLifqnWOxIsEgCAs7zVhLT2wBrG%2BqO3Pu%2Fl14Aq8U%2B20%2BQSCcsTqstvK7fvqkxGWyfFwl3hjm9LuwtLoHNUkqaBmv%2FSgRL83rXxbGdn%2Br4J7mpAgZuie4JXT1OxlzzETSKfnBWYlkKk7cK7JmW6dpvKO6m2y2uyn5P%2BkuLtsKX5ORx%2FOXWRK3b8oZ3ktUYLghg2eDbIiX1jBl9Br6QBFSQs0nsrInPV%2BQWDHzVkntgUXnB8TOBeKezp%2FELEA1pVPDQIGPpjfyhIEClADDn8v3FBjqkAUEWwlrfbmwbDY73%2BOtuf59GBVeIIp3hfb6fx5dyiIyIBFOPTXeWm5TscsLzADpdlr%2FRL6aR%2B1MiZ23x4Z6Q1wPQbd%2BVtVyfiSyA1fj6gwJXzVIjIDAeFEkIH2TdXsFRNYwq2KHb0y4mILaLxGtikLP9OuyAJhn0doxfaXvRxCtBTZ0382VwZcOVPXLaxnBfdOhiIMbEWua%2Bi4FFhLJmkQkCq6Mr&X-Amz-Signature=3a2e1ac13b4f9fe3439d8c92403cb5408fae18768fdc18403921f6027f2cc3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NDSYNRS%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJFMEMCICMnd3fw6d5OExACHg3mODoUrH8LaMv62GXII5YESeCbAh8rOIC0MWHMOxWwAA4TCyuKrxMgXLT2%2BChlZHvBNk%2FaKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWnhIcD20606MGjfcq3ANmutrQ2EK%2BQ592AEl4r2g3KsJeWr0nv1RQaRFRos8P9FH6QSUfpB6teF3HGs%2BM%2FcYXxJ084eo9Df4O9RtQ05xqx9yNSTvtfxnDhLYB9weufLwHiL6lqaIu0xth2a%2FeGBQ5TrkxJJY76ATRayf8c0LV%2FsvPCkhLcIesTW9fTlxr3k3GD8O2tXE45t1tDt06thjPYyUnVTZhBRdGY%2BuMHrbWCBePEpasvT4U%2B%2FihYCcqDdxzX4Jg51%2BMo0uXtlvbXdq0IUUIaCVieIqN%2BWFXEYVfAc0vpbzUrCWyFjtOayKkqlC%2Bs%2BlGDl9f%2F2XX34FOW%2FVzh0fArx%2FN7XYrvyEkiqMQd%2F6qAvTLSLQnJFvBVvj55gu1ScUHnCkhTZygaGQGpaLbaWBijpdhG%2BoFa6ZFC7UQvEwhKoOa%2FtPx03HylS8ZodCsc2gZCcvNyzbLovpxuncoZIWUB1bLLWaPgPN7L1DJliOSvFZPmDiRGJGlvcp1XHS2QA8vtLa1QQBl%2BtaG6Rc93YVow5zodFqS3g8FiJT0X9CT4wQVnCTcxUbiyKi%2FmOv9iWbtDCiisXSvnYcYa1U%2B2jo%2FaPQr%2BoH5OYq%2FYIQZ%2BLctxXEMufwwsHGoFmLxrNBAxVVDkpIRN5PAnjDZ8%2F3FBjqnAelU9T0qN7zem6BFzsYZrLUBqMMW%2F2AF8HTFZ%2BHr0wOMxZpN6bUcaEw1%2B1JVxjd1w4sBNPLFXxt%2Fj0j1gpI4mlpBO6IMsFY0BinKJvgIOCf3DbTBUP96fGP3VWvSXmTA4YXmFi9v3NV%2BQy2ON8Ruw4eVY1bD5XeKUZMZe2MxZkwqDgpHI2cmE5MesTO2hD12AvGjsRsJcPc0SQ7ehLSpAKp0C8OXdbG5&X-Amz-Signature=b1fc43698f7a20d5866c2ea13a5bc8c2ea831c288a6a9194a3fab2863e57f166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SMG6C34%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHkM6TtqB8Et6M6ekTB%2FQtxZUBrMKK4OnaN4euhgRZpjAiEAr77Bnj12oZNuZ6Uh2jIoKwlh0r1wNUtUPh0R5blIo9UqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3QaC1GF2JocchzrircA5rHuq4yUeF5%2BipGyRrUd0BYKdikzVeXMAAY7rBrOCa7TxboEGL3ufGQQ14NyKk1ECpuqCj86e1ssl5XGP2ANDjNtWPoyqiOUH4f74AM3AjID9NKXWH85VPcLnWXkvTxeWFIaEhECNhb7TdicsYzFD47VdZSoE44R1kG6Qs3uc3jRAVWuX8VOaaWWMnk7gwHrzyzTimIkUG6MRfP6jqjrQ0tQZBnnGpb44AWz3U6fiAO6ico0NrtBrtTWvlHEUFW4kGWiIPckqsUOXrDWHRcp5ViNDvKH7Zos6byuQ%2BxAPbmyGF6mMProu6HxY5kL4WR2ENAzAp5SSvdUse8ZBtMPHQGZhC8taZqs89xEpCOvKn0N3r86MwDzXKhpZkMDyQmFlZzugedBiaqwwz4m8nw%2Br1CrBXrOjbP3SE1fqdoC2sSiV6%2Fbje57wJuZ1RlSenKWNHy4a3%2FfnZ1OOLSHFuLLQT%2BcSNfVXbjcsuU6WbQRYNZQ5EUuwYk4xAhyVDcQlEZFY3nT5%2FybLYMFoXCc5abmj8XRl9TmoOobEVkC45rVA0xOWns0dfqb6Rmm%2FOumPWNFrrI%2B8g%2BSGM3lN2BI1h1kJQ1v5%2FeVhQPyIjB3HvyfaBErrnXnsL%2F31PygqcvMN7y%2FcUGOqUB7KECrZkOrNuLa6dWDaiRJBq8sow9r5ZcRalPpfJ6oU8Q44%2Bc04rzMOzCFxDQiLHZ%2FjxlI7BkDcsZkF%2FKyuzVnCirrxxi9htiDj9xDJCRDPdJZXzWvHl1WTOVGmvEYFVcXH%2Boi%2Bd0JShpVAZLubg5s1C%2FGeb%2Frc6Cizt2TIbjqL669A9B2x%2BbIaoe7lffDe9iLPkdHtIWuy6%2Fq7mOdgOwPm%2F5VEd7&X-Amz-Signature=46dc1f5167e32806013e24b5f3d5233be65a837195a5c5c6b09d3618e4705b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IVFV4PB%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCBda82BYK7w%2FyqeYi5bjrUme%2BL2cz2ZFxvPTnUIn9Q0AIhAPEGphDWtrvIoAUBfvggwMXu0KUk7fJJJ9sWUqm4qMWcKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxak52G7oZN8RaUN78q3ANK848%2FtlBjtSgS25jaVdnszXV822ksOjqmpYfOdaNLD5obg6TnELtlsCG0B2e4eMhlN3XlYN8r8vBx4LyruRa42K%2BfCTGu2c4Jle7Dzr2ecxOTKFTtVxJ81Hyo%2BxbPCRSKx0gUmEIcWtwYQ37gPwKqNr%2BJrt%2Ffzl8iCKIxHNWhNGew8wB2Zf1qa9K0gwwYJswnFGAab4kGi%2BJ%2BoZaF5dM5v7Dr5Sfg6J87b%2Fg9vg%2FqOc980iqO0yAWiqBrtIeWhDcPvtIKvMcRQPdZs4Kwll0ZEUOSsGzg6Skm0GU01xdzXJhqO%2FZIh6dw0kng2KLhnQIhixswnp0QoQvtq3s9Ku0vfhIvIZz6HuKTv0iNfsfaS%2BDLifqnWOxIsEgCAs7zVhLT2wBrG%2BqO3Pu%2Fl14Aq8U%2B20%2BQSCcsTqstvK7fvqkxGWyfFwl3hjm9LuwtLoHNUkqaBmv%2FSgRL83rXxbGdn%2Br4J7mpAgZuie4JXT1OxlzzETSKfnBWYlkKk7cK7JmW6dpvKO6m2y2uyn5P%2BkuLtsKX5ORx%2FOXWRK3b8oZ3ktUYLghg2eDbIiX1jBl9Br6QBFSQs0nsrInPV%2BQWDHzVkntgUXnB8TOBeKezp%2FELEA1pVPDQIGPpjfyhIEClADDn8v3FBjqkAUEWwlrfbmwbDY73%2BOtuf59GBVeIIp3hfb6fx5dyiIyIBFOPTXeWm5TscsLzADpdlr%2FRL6aR%2B1MiZ23x4Z6Q1wPQbd%2BVtVyfiSyA1fj6gwJXzVIjIDAeFEkIH2TdXsFRNYwq2KHb0y4mILaLxGtikLP9OuyAJhn0doxfaXvRxCtBTZ0382VwZcOVPXLaxnBfdOhiIMbEWua%2Bi4FFhLJmkQkCq6Mr&X-Amz-Signature=07f3628f9ba4ce992099f3b671e394f16d453d548afb97ce96183cf2e678d06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
