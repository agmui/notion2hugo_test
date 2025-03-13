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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMYSSPR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcsH6nZsaD9cX%2FBxFrBRSF%2Bq6Z%2BKUpAbLmbnhZ4p9tIwIhAOV%2FQ9irw%2FplYFK%2BE20mcYlR%2BNFoEheUg%2BHxz2FLrr70KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcqvHwX2stb7G2h%2FMq3AMTnPA2Bq1%2F4r2jGYAU3IGiK%2BRiYn60SEp4L3ea9qXzUXztJM78H1cetEr3ZXdOlhT1T0UqQQYI563l2V9TuyCPeWlJ1Ps6RYOKT%2F%2BqaJze2ZbFe3EgCZqtncNXDVMoByh98PurK3hOdrwHbFp54Nc%2B4nl08vVP%2BcGVODzCgYw26Q5ZE%2BMgnTErSeQOGirVaODPnijUi4YVRR5UMlXFHBW4XUFRv9FXwOBgszSHsUOphjd1vKRIYRUB4Wi7qsvw5rLvPdsFepwyGjCubTTV%2FXO6QbJ8CsdUCCrkC2ZNlXnwe9dzlSrB5oM3jzziV5xJoj7X8e%2FOq37inzZee2Y%2BFdXP%2BFnAQa%2FPCiTyUm1ut6TfptI7aIIe69bZl7oIEquZJkgX2tThs%2BfbJRiqk6keBGrpIzK3O5QbKzorVQB8iXZjoV1R38GLzkw4%2FbxDwaYTEEd1XKxgFZoqdg9rdyzOxkPav6oEeQVpzz3%2FK1kH0qV4kKEBJG0n2zZmlwyIPdosK5UuFXAM%2BQZQA%2FGjkkOwpBVHog6Mo%2F9KntUZv8WEGt7r16otDE1qMo22gPtTOACgVuxYazUpmXPjZIsyjgpmboHnxHEidR5iC29dPMljkEY2PU7SYcl0evUVwe4bWDDG9su%2BBjqkAYh8XxjGeGs5Nku18VjiFuffLEVQxIs7oYStzmOfdItNCEHoebvxddq0Xhwt6gLPu5Bix9xQiMSXC07FFIiKaJxskagL9Ka18yQT%2BuQwv0cGPi5diBHDmpHdFEa4LbOtQdXFgKEZMOMFf1CuaFXzotSAJ%2FYw4GNwPdoMwbJHR0mIWLJLVsuOSk%2F%2BJKXvnO%2BV5BOkok1CuC6QGzD7D7BKJRhcv%2Far&X-Amz-Signature=6c69a6c11f49762cc91c1203c69c4a2a34c4d7a3d92ab06de72adaf98404a8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMYSSPR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcsH6nZsaD9cX%2FBxFrBRSF%2Bq6Z%2BKUpAbLmbnhZ4p9tIwIhAOV%2FQ9irw%2FplYFK%2BE20mcYlR%2BNFoEheUg%2BHxz2FLrr70KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcqvHwX2stb7G2h%2FMq3AMTnPA2Bq1%2F4r2jGYAU3IGiK%2BRiYn60SEp4L3ea9qXzUXztJM78H1cetEr3ZXdOlhT1T0UqQQYI563l2V9TuyCPeWlJ1Ps6RYOKT%2F%2BqaJze2ZbFe3EgCZqtncNXDVMoByh98PurK3hOdrwHbFp54Nc%2B4nl08vVP%2BcGVODzCgYw26Q5ZE%2BMgnTErSeQOGirVaODPnijUi4YVRR5UMlXFHBW4XUFRv9FXwOBgszSHsUOphjd1vKRIYRUB4Wi7qsvw5rLvPdsFepwyGjCubTTV%2FXO6QbJ8CsdUCCrkC2ZNlXnwe9dzlSrB5oM3jzziV5xJoj7X8e%2FOq37inzZee2Y%2BFdXP%2BFnAQa%2FPCiTyUm1ut6TfptI7aIIe69bZl7oIEquZJkgX2tThs%2BfbJRiqk6keBGrpIzK3O5QbKzorVQB8iXZjoV1R38GLzkw4%2FbxDwaYTEEd1XKxgFZoqdg9rdyzOxkPav6oEeQVpzz3%2FK1kH0qV4kKEBJG0n2zZmlwyIPdosK5UuFXAM%2BQZQA%2FGjkkOwpBVHog6Mo%2F9KntUZv8WEGt7r16otDE1qMo22gPtTOACgVuxYazUpmXPjZIsyjgpmboHnxHEidR5iC29dPMljkEY2PU7SYcl0evUVwe4bWDDG9su%2BBjqkAYh8XxjGeGs5Nku18VjiFuffLEVQxIs7oYStzmOfdItNCEHoebvxddq0Xhwt6gLPu5Bix9xQiMSXC07FFIiKaJxskagL9Ka18yQT%2BuQwv0cGPi5diBHDmpHdFEa4LbOtQdXFgKEZMOMFf1CuaFXzotSAJ%2FYw4GNwPdoMwbJHR0mIWLJLVsuOSk%2F%2BJKXvnO%2BV5BOkok1CuC6QGzD7D7BKJRhcv%2Far&X-Amz-Signature=cd025b336aecfa5b7446b5f52216f89a9c82fc6bc545557ae56ee469215fcb9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625SG2UNC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNo9NI9MBc4sRwCv31SbwumqePzLPDx3fUkkmGnnZrWAiBgkGW8yqtlfmH4W14Ps21TBdnvQk93j88QH69LNYd4LyqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZOE0JNv4puHF1O2QKtwDVYpsJY9t%2BsnFg4kUQ51W6rxae9ow57%2BZGnBRr2tduRXiv0os%2BEA7SECjjc3CF6Z2QX8iow%2F%2F27FFY%2F%2Bq8jdtowMWtjY8VnxPyO178CyxJGoHGTuao7NGQKdbcXtw2iJmG%2F9OwR2970xDXz2ZmkWku9hBlY5B1%2B%2BFxlKcwE3sVqPVR5lDmGFB39cIPQ0vlfZxjeDxGkAFbE0cCA213AzEr69hV6aCjcL4h1pJ4JonzEhI1rAkTLQpzUMYV0xs%2F5QLJpEl%2FicyvgDHvymMH7G5UTmCth2sv0o7OJZaFRcly2RLtnxyqxSgE1Am9XsHVIae7Sfyla2lCTF4hv91UQmheeSmXWyPZ18JWvj1S%2BE1UpP6dJCN3xB%2F99S1wDVe2l5dQSshH5HCi2OCbQ8eSLfvBHNQMQJDW%2BtV8jMvRDJDCKHnS5TH125qVUOhF0IBzVVZud5TRroF3olWvgJx%2FLwZ8qTcW4fYkekIzRS2RfQEiaaaCdQAkaapQEPvnh0lljMjlblYFWk1cIkFHXyJ3yq5MzkzoQqEH7e24BBbvHyWvcPc%2FV8aqsD4BtR6mt8HWvcqa9d8ItwZdUJy0YwU1MSpwtu3YJvJf9Eo6%2F0wHLbo4wvaJiz%2Bl54JJbp5mDowj%2FfLvgY6pgFLvG0nk9XZcYOsH0hobZQEQXpzPeWgHwyswFKG7M1Y6pCoAPXQX1Px%2BZkkCOhDXWzmMPkqZ3uabOi4Um%2FnSgDK20wG5FGnYPTaOIyHK4YHit%2BLO99XI6oDHXKAQ%2FsqzE6m8qcwMssawOyPkqMK44TCWp8Ml2zsb%2BbKu9yoj4Qw%2BpbJXDf5B7Yv7txW46iQggZdn7Q3ui947cpYErCLDWBRwIET8wtB&X-Amz-Signature=dcf19ab9f02e395feaae5019078b79696f94f61840c5cdcba4b233f1abcf9e27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWSLQBC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2N4KEEy6ysnsBOrp7DPI8g8M7wNy1RH6TXWQkEXL2AiEAlmxvFhjMBN4vSuf7ChTKeBVYLpZQjIVvfak20bbvMRoqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlIiTEYKJlGndY8ESrcA28P3aqwEm0cfaEsRAzN1OXy1FWVSZGac9cjbsbQvqTO3BIuDU6PPBuMlF6q9M6r%2BbGvUj93TRpIzIfHhSRTwHOUUCTPx5dEyjuO9S%2F3Swx5RXDFMwqKV0fFVOEPWUWL949tMpAfg0XyAik1Q0u6Q7vKZVEGRMM2IS5cbrLOi8uJcL4Y6gfDoTN6HbLQSFHkMXBk9tlE7tYZl%2BNJgGzd9yzUiR7DgO2iicA%2B5j7l9whGNyRGnyRsWG8FCd63RE40E0rlD6Xl98wVhff6L%2BFWGV0NJTN4x0WwEz6tzRpFoF9JjzsziIdVHtBnGC2JEFZ%2FttSpyVRDP1pHtebCn88nzBc%2BN6CH86%2Fk5q3Sk1IIyxQbRoHH0vsM%2BMc1O5Wy0hzyGhq4KPf19z7b2qNx1bLgSm8bnqr%2F%2FCky6w7ix63A%2BFST%2F47erezFFz2VrTeBGzC8Sw4lp2Sa%2FSO6IuOZxrClwkDhiERUwZHXFDzbLirCGbL3OejOLIk7DP8boA7WEpkBOR%2FC%2FBc9IqZxmdDrt3i83HqH6sA61MJm7i91gPNkHs3mzkzpK6Rv9uf0n0z%2B2SFxjD4VSNGZzh%2FJJ%2B20Q4DGI44jk4rk00DTKRSbUUjUc0D3Z9Z%2BNLF%2F2m8muvxnMNr2y74GOqUBCTl1s7IPMEs%2BcsbkgRD8S5OzpOtPpU5plk%2BvT9a%2FRX4Lda0mK%2FXtqRkGshhxFkS4a0fnevqGRQTxxDILnWTVLVPxN9FJUeptpWWBufTj7%2F6gT1fLopUKbnP4cOSWb5NPYS%2FkGj1k%2BqzS8w9N1nbDV2UiABRGyDNg4B7S%2F%2FYr7O239ubJAxwi6ZZ4KZO6iYMxOLBrjVWhJpI5y8MLHBiJ3jmtJmN%2B&X-Amz-Signature=bedf8311160aba52c466bc129d36cc02fbd77c69f6d5a7ae58f02cefd242c172&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMYSSPR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T160948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcsH6nZsaD9cX%2FBxFrBRSF%2Bq6Z%2BKUpAbLmbnhZ4p9tIwIhAOV%2FQ9irw%2FplYFK%2BE20mcYlR%2BNFoEheUg%2BHxz2FLrr70KogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcqvHwX2stb7G2h%2FMq3AMTnPA2Bq1%2F4r2jGYAU3IGiK%2BRiYn60SEp4L3ea9qXzUXztJM78H1cetEr3ZXdOlhT1T0UqQQYI563l2V9TuyCPeWlJ1Ps6RYOKT%2F%2BqaJze2ZbFe3EgCZqtncNXDVMoByh98PurK3hOdrwHbFp54Nc%2B4nl08vVP%2BcGVODzCgYw26Q5ZE%2BMgnTErSeQOGirVaODPnijUi4YVRR5UMlXFHBW4XUFRv9FXwOBgszSHsUOphjd1vKRIYRUB4Wi7qsvw5rLvPdsFepwyGjCubTTV%2FXO6QbJ8CsdUCCrkC2ZNlXnwe9dzlSrB5oM3jzziV5xJoj7X8e%2FOq37inzZee2Y%2BFdXP%2BFnAQa%2FPCiTyUm1ut6TfptI7aIIe69bZl7oIEquZJkgX2tThs%2BfbJRiqk6keBGrpIzK3O5QbKzorVQB8iXZjoV1R38GLzkw4%2FbxDwaYTEEd1XKxgFZoqdg9rdyzOxkPav6oEeQVpzz3%2FK1kH0qV4kKEBJG0n2zZmlwyIPdosK5UuFXAM%2BQZQA%2FGjkkOwpBVHog6Mo%2F9KntUZv8WEGt7r16otDE1qMo22gPtTOACgVuxYazUpmXPjZIsyjgpmboHnxHEidR5iC29dPMljkEY2PU7SYcl0evUVwe4bWDDG9su%2BBjqkAYh8XxjGeGs5Nku18VjiFuffLEVQxIs7oYStzmOfdItNCEHoebvxddq0Xhwt6gLPu5Bix9xQiMSXC07FFIiKaJxskagL9Ka18yQT%2BuQwv0cGPi5diBHDmpHdFEa4LbOtQdXFgKEZMOMFf1CuaFXzotSAJ%2FYw4GNwPdoMwbJHR0mIWLJLVsuOSk%2F%2BJKXvnO%2BV5BOkok1CuC6QGzD7D7BKJRhcv%2Far&X-Amz-Signature=10325eeed8e79ffc0feb6b06ac88ad39de65d17f36b4f41c81763bf718b1f748&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
