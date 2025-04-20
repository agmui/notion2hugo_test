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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HFUKKWF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC2O15fcqX9o50NZm6m1KFSh%2BeneWkvdWQLRgDGcbeABQIhAI%2FeJgH9cR4FInDeRqzucQ4pDNY83TLwjKe6ywHeZdBNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6c15%2FuCjlYBndRsQq3AM8B6ksG30TEnQOMmz%2BeZ1g83ZWZTLmv42yaNYCB9k6sddGn6QPLcSaLYEM5oYQxJrCRtYeMVOplURmZ4KtZyjS8Xn3iVX2a0bad0KWKx%2B%2FFWSrBCs5bKnbnI2jpaUm96FuKykEcPM1M%2FsJ8haDTUjtPJimZphtVe406duXIcDwp16dyHF2CM1EjWH%2BgeuwS0c9II7h4YOKBf5Xgj1dgMfOw2fiU0QyP2VQFUYxNiBwUHjlbtqh%2FRZJSDWVsO9a6a0ARAy6ijBFqy9Ad%2Bsk3fQgm%2BvhUIUeh5KyMEyPvGLSAAT7IY9OZlvPJ5qhcdzB0TVv6kEvt1be1Kl8L5lx0vhmdd9dJilXnZk6%2BH2ReMpVT2tz4pnkRbpJNJoyg6ODYpWBvcyksRROnLE%2BHvvrA1BY1qimfqZ4b6aEd%2B1ZmmSsJOUzLVemu17T9E0Kcugmg1%2F6dZIwLJVUWq4ZTD0zWDQOHgi0aXK9OqSlCTSwL3gN4A9Sc97RhKINw5mLRQkQc%2FV1FoyMx07WkMN7NWuqxg599z2ynyyYPmVeDJlo7Ihx%2B%2Fr9kb8oOh2ubfwMPQeqsmyMevTinw0OMBSnxDC3DUam0Bbd21Hm22MY6fQWAf6LEC1CCuhHHZnegIMbJzD5gZHABjqkAaML3ZqupJUBKlI0lg%2F8uAUCOGLjdhKNmjFbsjcUWgxajjTgm8DvV6DRnyg4omCqAlR%2FVEcfjle4N0Jt0FJYoExVk4P%2BeGqtpdQJCboxrKQfOwq2KA8QXdvXfro6h7v2Zoxo89RvgcTO5GrBz51g7YXruqDXeUS3iDZzZgpfKYPXsF0RkN4x%2BysCbgrarFIuvzQfLOGy7kMJJMf5xFuus9VDjuuM&X-Amz-Signature=06c0039937c795d54983dd68e59c600a228357ffdf82f75f89bb4c4c51428843&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HFUKKWF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC2O15fcqX9o50NZm6m1KFSh%2BeneWkvdWQLRgDGcbeABQIhAI%2FeJgH9cR4FInDeRqzucQ4pDNY83TLwjKe6ywHeZdBNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6c15%2FuCjlYBndRsQq3AM8B6ksG30TEnQOMmz%2BeZ1g83ZWZTLmv42yaNYCB9k6sddGn6QPLcSaLYEM5oYQxJrCRtYeMVOplURmZ4KtZyjS8Xn3iVX2a0bad0KWKx%2B%2FFWSrBCs5bKnbnI2jpaUm96FuKykEcPM1M%2FsJ8haDTUjtPJimZphtVe406duXIcDwp16dyHF2CM1EjWH%2BgeuwS0c9II7h4YOKBf5Xgj1dgMfOw2fiU0QyP2VQFUYxNiBwUHjlbtqh%2FRZJSDWVsO9a6a0ARAy6ijBFqy9Ad%2Bsk3fQgm%2BvhUIUeh5KyMEyPvGLSAAT7IY9OZlvPJ5qhcdzB0TVv6kEvt1be1Kl8L5lx0vhmdd9dJilXnZk6%2BH2ReMpVT2tz4pnkRbpJNJoyg6ODYpWBvcyksRROnLE%2BHvvrA1BY1qimfqZ4b6aEd%2B1ZmmSsJOUzLVemu17T9E0Kcugmg1%2F6dZIwLJVUWq4ZTD0zWDQOHgi0aXK9OqSlCTSwL3gN4A9Sc97RhKINw5mLRQkQc%2FV1FoyMx07WkMN7NWuqxg599z2ynyyYPmVeDJlo7Ihx%2B%2Fr9kb8oOh2ubfwMPQeqsmyMevTinw0OMBSnxDC3DUam0Bbd21Hm22MY6fQWAf6LEC1CCuhHHZnegIMbJzD5gZHABjqkAaML3ZqupJUBKlI0lg%2F8uAUCOGLjdhKNmjFbsjcUWgxajjTgm8DvV6DRnyg4omCqAlR%2FVEcfjle4N0Jt0FJYoExVk4P%2BeGqtpdQJCboxrKQfOwq2KA8QXdvXfro6h7v2Zoxo89RvgcTO5GrBz51g7YXruqDXeUS3iDZzZgpfKYPXsF0RkN4x%2BysCbgrarFIuvzQfLOGy7kMJJMf5xFuus9VDjuuM&X-Amz-Signature=a208d5d820748a789e154f6ca50fa2b4cf373a629fdf547e9458aaf8af4b3e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TGNUAM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCvUleCl3eaEtww7xnJK%2B5FtVj40qGSc6IX6i4mOPGb3gIgHicJxR6Y1jkTQXk6xaDi2xQvSBt9sS5dpujEw9CB2KcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2B8bT5JNDRBVvghtSrcA3rVcVF9yMvET%2FJbSV%2BaRQDnfnwiy5FABvuRqMy1h7cBCSgbXpllWquFxwWX8FmT%2FIGptY7RQTM4zW%2FiKpM99pKXDGO%2F7k2MOSQaYfyjKW0qroQSaVaya4sCTh7pQbaccjthUWVmIUyYpLUv866aTsZN%2FRUECDBwVAAsdbTg622qfvmlWy0I9IM%2FOlEvqBBEzcoN2%2BEM62xYR3iIzd7sLP9wilhYzQzIzoUgJBKp2Ufwg8S%2F%2BFVdkK0znAz%2FyxWujfaL3WSe2a6QbTAplCtFZPoizOke2VcztirAzKhwKxV52A25zNHeDxTDun4m%2FivOvEJlydYCu5myIxqRsZ%2FZGJAr3R542ByeI90EGWFzxesg2jBUdKDaIaPaRrl7KkwVUARkcPgVG8z2A8BwfrsSu72uFKX%2FnENNoWHRKAE0sPaSB73s1uaEhQVobRubkX3u9DknS9sFQZ2m6ZzAqm%2F1k5UQLy5%2F7O32Sdwz9LOthbDFPMcPBhFud%2FsJQj0tOFEhPxu0uRJP%2FNUmZJfHmIcPye27UwuTsi5W36Vzi%2BqrPvqarFQTFcVVAwC12qHfr6StrordRiPnhKS4vvZRgWwd9%2BDLZOXw9JOxlJTCWvEEUt1lXJRmZcZkizJCoxDEMIOCkcAGOqUBvSojeVTls7lTcoB9AoZYx3hDt9ChKBhIUzNf2IXQwPreskYZup5Gq5vyIrNZQZJxuVORp9XWA2%2BPHFOAs1mjHlYYZ0p5HWDRmxtT%2Fb1KF4bPMZzp3WWc5HURkWb174VZRNrLc1JOcho0tiuH0RkMZbUf2eWZQepapyP%2F3rtMzYtmPA%2BTl4pK5g664vZXQfQtewpnhZB0TsgLwznOE6B2vVY63tDD&X-Amz-Signature=f176328fe6d5f4374159df774ed960481cfa3cd7eca1c8798af7431b3dde14eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQE7ZC3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIA3OWiaGJUr%2B0vCkUYRt8I1D0nwHRnBdfu7sdiqt5b5LAiEA7VebTnGsyqX3VrRIoZ8KAJ2ZpYKiSvHqB66YDdMF4OcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhNpDXCAIKAYoeTRircA8Z9U0QgDOqcfjiwAwp78qGBMDxI5bTlAAOcAc7YkJOhoBjTKJjEp2y0MleeR%2FnR3feZ9zfIz3WheD802vuKD6cbWYBcNEIKl2Kw0JYRYVTW%2B80bw4Uaf%2FMHxh2Th%2Fe5vx4Wu8ZcAunpJcqdpJEBQ%2FJxzDnREtG1V%2BqzHJ07H%2FNFxaU16TBFc%2BYCb4ILZ1ROoRktW3GFWSVsroMNl1BhwGvEq08BiY51mYNWuCcD7YwmiCDLNViT2d0omGWcgMD0PEtz1DjrCuq2fkkP33mjHusOwlrPeWd%2BqbAG4EwQD9ieaF%2BNGsy2N2JbvOMwlM0pgX2z4o11GXj7ru7BC2y%2FdgCzIkBSZuaRHmbTWq6BRb%2F7gO46ZpcBx0q8pZ1LEhyRXBDvOV3AMNm3TEGNzI68PaP%2BeF71MR7%2F3wPtu8vCG2ULq3H9QNRCUJWM4ju1BVkQ0fZcCE0yn5W%2B%2FKaPzDRObHVs9fITwz6AIIuPie9T071Mwhipb%2F%2FgalsTaWvrq5W1YrJLukY4EV9FfJf3U%2FkZCqrM3oNdQs0X1Fin6xfL2lAp78FuslOBeN4ZktbG4ymyvgN8fAEXoujDC%2FGEnUYVM7CdhdvB0rpyCw5JVZFZ4Tgh%2BxNoZYyPsebLmuQHMI2CkcAGOqUB1ALZA2mfZghRFE76Mcx2SP%2BcpJRhEhSDBzVC9LnBLUp4X5VXpEL5%2B6sEgHcBkMlf9jxWCfwypPxKXvB2VMr0%2B64WtuEAJ8W254Saoc1upDIs9CtiRbv%2BeU%2ByHJcZf0irynprocfXMVeWgExpQB9tkAJreGiTamFj1c%2FOTtsRMwYB%2FFWsdeBee%2BxuImQ8%2FteEJ8wIEHUUC8H6e9d%2BatuXkyDYf%2FkL&X-Amz-Signature=8e7197cca0ed5db4035c64c3dff7174248811bd77ed1baefc56127e8bda0788a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HFUKKWF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQC2O15fcqX9o50NZm6m1KFSh%2BeneWkvdWQLRgDGcbeABQIhAI%2FeJgH9cR4FInDeRqzucQ4pDNY83TLwjKe6ywHeZdBNKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6c15%2FuCjlYBndRsQq3AM8B6ksG30TEnQOMmz%2BeZ1g83ZWZTLmv42yaNYCB9k6sddGn6QPLcSaLYEM5oYQxJrCRtYeMVOplURmZ4KtZyjS8Xn3iVX2a0bad0KWKx%2B%2FFWSrBCs5bKnbnI2jpaUm96FuKykEcPM1M%2FsJ8haDTUjtPJimZphtVe406duXIcDwp16dyHF2CM1EjWH%2BgeuwS0c9II7h4YOKBf5Xgj1dgMfOw2fiU0QyP2VQFUYxNiBwUHjlbtqh%2FRZJSDWVsO9a6a0ARAy6ijBFqy9Ad%2Bsk3fQgm%2BvhUIUeh5KyMEyPvGLSAAT7IY9OZlvPJ5qhcdzB0TVv6kEvt1be1Kl8L5lx0vhmdd9dJilXnZk6%2BH2ReMpVT2tz4pnkRbpJNJoyg6ODYpWBvcyksRROnLE%2BHvvrA1BY1qimfqZ4b6aEd%2B1ZmmSsJOUzLVemu17T9E0Kcugmg1%2F6dZIwLJVUWq4ZTD0zWDQOHgi0aXK9OqSlCTSwL3gN4A9Sc97RhKINw5mLRQkQc%2FV1FoyMx07WkMN7NWuqxg599z2ynyyYPmVeDJlo7Ihx%2B%2Fr9kb8oOh2ubfwMPQeqsmyMevTinw0OMBSnxDC3DUam0Bbd21Hm22MY6fQWAf6LEC1CCuhHHZnegIMbJzD5gZHABjqkAaML3ZqupJUBKlI0lg%2F8uAUCOGLjdhKNmjFbsjcUWgxajjTgm8DvV6DRnyg4omCqAlR%2FVEcfjle4N0Jt0FJYoExVk4P%2BeGqtpdQJCboxrKQfOwq2KA8QXdvXfro6h7v2Zoxo89RvgcTO5GrBz51g7YXruqDXeUS3iDZzZgpfKYPXsF0RkN4x%2BysCbgrarFIuvzQfLOGy7kMJJMf5xFuus9VDjuuM&X-Amz-Signature=1ac4600af540a2c6e290015122bca021587d9e8e7a3858aa615211165d601c68&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
