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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PICFFV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCUiLybGoa31VdmaYZm9yDK4pbNa0xRmTkZDBAs7tF0xAIhAIwegGsVid8lwD5WwavYcf7yofJsNUxD6WIFd%2BtQ9urTKv8DCHMQABoMNjM3NDIzMTgzODA1Igwn3o2hx%2FMIYHT%2B%2Fjsq3AM5tOFbkgEU7Z%2Fre%2FWYWnPpIF33nlpQXGuUWqhQJmHpppGVv2AqTi1fjU1bWtR1fBzFMY2cn2553tlGyFFH3xAbsuYjja92inrIVab6LgPg9HdRHw2AAnsEI0u%2B14f73YJW3voZg5FBYdwj2qsNhGU4umYsmso1dJczQ24mdHZiDTij9MyQtR2s5DFDl8M6W3AWIV4FdQt%2BIlf2QodLrzkcbHR%2BCt9UupVLtIsHFnpOGxApPmpVf%2B2kdX58OXitWi%2BpAkKsdz%2BJnrS%2FplC7Q512kjn1jitkotFqRw3m3OSvXtdHx7rz9NM8ZWUDW1MCTZfGuSFHxyIHsyII%2B7o6QzWWrOVicXbTbde48w9yWEC%2BaTtMcfVsGKdpsF2sziz5PNWxVnIa%2BTVvTvTSpRq2n%2F31yS%2B6kYv%2Bs6SAAQztMuRuBQ87iLikFNhqJoXbj%2Bw6QAZozUQRvL4sgHdYiwZ4JYLtX5V%2Fst7EIxgcE6ds5G%2Fxt%2B4QboShUVRBAfWqqQ9uUrqLs4%2B3hZg8h6iazlFCRob%2Fp4iW6ZPAz2sc9cBl%2Fml1MmqfAkp1DU%2B5h6Y3sK%2B1aJcC8ExWZjsieMajprP0%2F45mcSHlvYo3NrB0Tf9GGyyfNk%2BFSWKGHF%2BQKMcg7jDJkuPDBjqkAQwIOy97np9%2FWCpEZg4sQoRR4BZ4sfRuMKCvaoMlc4sQz2U9Lj2eraOuyT%2FxLaY7h2V2f2PGCE4InT6T5rPrObCrMPnNn%2BaLDMj95yzPJv0ObY2qW33uNZpLynDK9P1jxeHzi%2B6KI2qK7bWnmrRxovDgboq4w8dH4vIEqlVmULqigyESZZXHNk3NcOLiNZMPW9junhCVR0eo1fphMDkYy%2FkKeB%2Bi&X-Amz-Signature=36d9f846876f072b35d43ec367265c6c9b75b5e877998340098062e6e5708409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PICFFV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCUiLybGoa31VdmaYZm9yDK4pbNa0xRmTkZDBAs7tF0xAIhAIwegGsVid8lwD5WwavYcf7yofJsNUxD6WIFd%2BtQ9urTKv8DCHMQABoMNjM3NDIzMTgzODA1Igwn3o2hx%2FMIYHT%2B%2Fjsq3AM5tOFbkgEU7Z%2Fre%2FWYWnPpIF33nlpQXGuUWqhQJmHpppGVv2AqTi1fjU1bWtR1fBzFMY2cn2553tlGyFFH3xAbsuYjja92inrIVab6LgPg9HdRHw2AAnsEI0u%2B14f73YJW3voZg5FBYdwj2qsNhGU4umYsmso1dJczQ24mdHZiDTij9MyQtR2s5DFDl8M6W3AWIV4FdQt%2BIlf2QodLrzkcbHR%2BCt9UupVLtIsHFnpOGxApPmpVf%2B2kdX58OXitWi%2BpAkKsdz%2BJnrS%2FplC7Q512kjn1jitkotFqRw3m3OSvXtdHx7rz9NM8ZWUDW1MCTZfGuSFHxyIHsyII%2B7o6QzWWrOVicXbTbde48w9yWEC%2BaTtMcfVsGKdpsF2sziz5PNWxVnIa%2BTVvTvTSpRq2n%2F31yS%2B6kYv%2Bs6SAAQztMuRuBQ87iLikFNhqJoXbj%2Bw6QAZozUQRvL4sgHdYiwZ4JYLtX5V%2Fst7EIxgcE6ds5G%2Fxt%2B4QboShUVRBAfWqqQ9uUrqLs4%2B3hZg8h6iazlFCRob%2Fp4iW6ZPAz2sc9cBl%2Fml1MmqfAkp1DU%2B5h6Y3sK%2B1aJcC8ExWZjsieMajprP0%2F45mcSHlvYo3NrB0Tf9GGyyfNk%2BFSWKGHF%2BQKMcg7jDJkuPDBjqkAQwIOy97np9%2FWCpEZg4sQoRR4BZ4sfRuMKCvaoMlc4sQz2U9Lj2eraOuyT%2FxLaY7h2V2f2PGCE4InT6T5rPrObCrMPnNn%2BaLDMj95yzPJv0ObY2qW33uNZpLynDK9P1jxeHzi%2B6KI2qK7bWnmrRxovDgboq4w8dH4vIEqlVmULqigyESZZXHNk3NcOLiNZMPW9junhCVR0eo1fphMDkYy%2FkKeB%2Bi&X-Amz-Signature=329afc58b783f9b8404073c2a03e21a232039f5d367ee53613b5d693ba65b8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PICFFV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCUiLybGoa31VdmaYZm9yDK4pbNa0xRmTkZDBAs7tF0xAIhAIwegGsVid8lwD5WwavYcf7yofJsNUxD6WIFd%2BtQ9urTKv8DCHMQABoMNjM3NDIzMTgzODA1Igwn3o2hx%2FMIYHT%2B%2Fjsq3AM5tOFbkgEU7Z%2Fre%2FWYWnPpIF33nlpQXGuUWqhQJmHpppGVv2AqTi1fjU1bWtR1fBzFMY2cn2553tlGyFFH3xAbsuYjja92inrIVab6LgPg9HdRHw2AAnsEI0u%2B14f73YJW3voZg5FBYdwj2qsNhGU4umYsmso1dJczQ24mdHZiDTij9MyQtR2s5DFDl8M6W3AWIV4FdQt%2BIlf2QodLrzkcbHR%2BCt9UupVLtIsHFnpOGxApPmpVf%2B2kdX58OXitWi%2BpAkKsdz%2BJnrS%2FplC7Q512kjn1jitkotFqRw3m3OSvXtdHx7rz9NM8ZWUDW1MCTZfGuSFHxyIHsyII%2B7o6QzWWrOVicXbTbde48w9yWEC%2BaTtMcfVsGKdpsF2sziz5PNWxVnIa%2BTVvTvTSpRq2n%2F31yS%2B6kYv%2Bs6SAAQztMuRuBQ87iLikFNhqJoXbj%2Bw6QAZozUQRvL4sgHdYiwZ4JYLtX5V%2Fst7EIxgcE6ds5G%2Fxt%2B4QboShUVRBAfWqqQ9uUrqLs4%2B3hZg8h6iazlFCRob%2Fp4iW6ZPAz2sc9cBl%2Fml1MmqfAkp1DU%2B5h6Y3sK%2B1aJcC8ExWZjsieMajprP0%2F45mcSHlvYo3NrB0Tf9GGyyfNk%2BFSWKGHF%2BQKMcg7jDJkuPDBjqkAQwIOy97np9%2FWCpEZg4sQoRR4BZ4sfRuMKCvaoMlc4sQz2U9Lj2eraOuyT%2FxLaY7h2V2f2PGCE4InT6T5rPrObCrMPnNn%2BaLDMj95yzPJv0ObY2qW33uNZpLynDK9P1jxeHzi%2B6KI2qK7bWnmrRxovDgboq4w8dH4vIEqlVmULqigyESZZXHNk3NcOLiNZMPW9junhCVR0eo1fphMDkYy%2FkKeB%2Bi&X-Amz-Signature=7804ecd963c50a93a15d10907eb24fc40d94988118b536d341178ea83be3bca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBMH7FXR%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD7JK3ij2l2tIOmbg3G%2FgvWL3xVyZoxpTCvUyOW9rPvFQIgcZiCP4%2BvgUhC0bzoLKA967BYI2jBG%2BclTFQaZJT%2Bomoq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDD1SaQgKm%2Bifc%2Bin6ircA6TFfEYQjhXhTTaRtLRHpMeAlunWlNfTcvUiSvpJ96giEpRY79Rpw01Zxyh0is1jzBqptx3UkrTYTIn9jTefAgNM2Zwh0Fw06b6a%2FN%2FZF%2BtKF1MpTfoNFBdXbVKGOhos7z8sW5GAnLBhaQOP6G9kigpxrQs7OpbHLGTJoNXcwQ7jDdc2vPrxnxRxXizGkNK8eS%2BFhM1ov3hxOcEbHlbCL3St6oX%2FuSyrHd%2FrGWr%2BNqs4J00hxSttu7LHHYDJAfEActgLNylPIOUpXFrTQEcgj8VPwQb9%2FfNnfCPkPX5HCVB%2BSU8WJ12r72OqnR4JXK4bYsuJnobIAh%2FeketvGoT8QN5I2lNeJ3wmY7uOAFsggSVPAPkZhjnfrbtX%2FAsjZzewfr0erQxP%2FVsu4D%2FkjpaXxBnfAkS7y8qR8XXrokuL4WPHN74D88Wl2oezii4mwBMXkZ9JEgwzq1acMFS9E1%2BbY4vfSQ2BpUq%2FklgQyRnlAcgtO2WFDhM1n7wbP1Rtke4q%2FaEVSAr4ifOT0%2F7G7PU%2FTgZH5T%2FKhDIuA26XF6BqTPgWNT%2FGh5Kf9p1tLZ3%2BCP9%2BqFiY%2BcRF0DG7TkhjRMp5slJ2pBXcCQnQrlnrQfWArGtkD5ub1ETftvQ4NzKIMJWS48MGOqUBKsV5i4SD8cS%2FClhVA9JV8GOlI6zC4idJmTHfu7WNKGHfXvTXo6fl3QjHPcmbrDVSh%2B%2FdNdnWcZGMZqreWPaqgyKlGMn%2Fi7mUtd%2Bj5Oadeco23CPeLcggnz5OFkDL1Cg0YBeLhaKneKYClnwjvBGqrRYtmw%2FPyp1ZiGaYoxXLWGXl3seE%2FJfzUJoUEu%2FzJoXP351A9z3Nh6HvNrvU1n1k%2F213fqIU&X-Amz-Signature=59176bac0db12ab15b0f25812c987dd20fd5eb77f768ba4f1f2af54396a08e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3KRDXQT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCyqMyvOxLFzcuzdKDdRxBeG%2FUUlvkNqFXidTmmAIOLzgIhAIZrUstuq5CddZ29EmGmkA7fNIgSsCUbECa6i1JM3Q4EKv8DCHMQABoMNjM3NDIzMTgzODA1IgzX3aVgxavPODSFDR8q3AOj7fSrZ9yhfFHCCeAtniFoX2ZIkudJVwrRjzDBRQsoiv%2FIVJiuPjbKnEnt%2FxgIXjEwcEg%2FgtnsNzw%2BOstjUYQ8Hc8qwfUqy2pmiQQp%2BIjxVASolMGa0sQqWOyhnRxzDEVhofp01p4vnbnoo4o7L4hIxG2IDC5HFgZLnnrPUYk0xT3sAjgb7J1k8TImaoUd%2FWt8HfZGQz9nrg15irYGl00XQgnrk%2BekdbO3%2Fmmuhl6Gm3kbFimS%2BKAkpOyAjPMjbpRakg8alIPy0y2j7bKjmNEVwdeMLSgACF7ESEJwCp9NqF9BBarG3GJXbJNrlMaK1yETpxPso3yLsTraviEKRMZ7TnC3%2Bjr4tQGdUwV0trsd5HtCCF62QH2E2yYrp4inNj3Swfp6crY7pQuupuA1pVAMphR2woXs7va7PDuHebyQyPYIHjrf3y3WI6tGufXzXlLpWkUOhSa0MScPts5PjWXKAmKaRYWQzM2%2BIberSrlaUIkxFuFPAOn5JvUG2nxxBMOHGVbjm%2BaZ0FxBBp4xsfd90Y05jD0kSfOaeaPiy4cR1k8BEw4RY1dbNCB07iLWZ7yqpnSw7Bic02rItU0vea4KLbya%2Bsm4XBi6CCxZGD2WCTsRq6j%2F89IfF4jA6jCTkuPDBjqkAfTyKOVOJHuuYNpSCE6UMO7p0GUEUj8QkmY%2F7EN937naCiGW%2BLtR2fQZg7nZeIiZ5IJ6Fe2MvL1taxzAK0EofQAIWWfXC5gR6YhxiZ71Vs2CX2p6S2s4KXoQntNPwei83hN0JKTi3klX2fHckXuXf7W4pihUz1maFjvzOekRD%2B0%2FlK34Xk0qYU1Tiqln40kXB7%2FGLt6aDrgIp%2Bp7peIOh44J52Df&X-Amz-Signature=2c352120042985951d869dc573faf91bc5460fd05ea2562aad2bb47a7fc0b40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PICFFV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCUiLybGoa31VdmaYZm9yDK4pbNa0xRmTkZDBAs7tF0xAIhAIwegGsVid8lwD5WwavYcf7yofJsNUxD6WIFd%2BtQ9urTKv8DCHMQABoMNjM3NDIzMTgzODA1Igwn3o2hx%2FMIYHT%2B%2Fjsq3AM5tOFbkgEU7Z%2Fre%2FWYWnPpIF33nlpQXGuUWqhQJmHpppGVv2AqTi1fjU1bWtR1fBzFMY2cn2553tlGyFFH3xAbsuYjja92inrIVab6LgPg9HdRHw2AAnsEI0u%2B14f73YJW3voZg5FBYdwj2qsNhGU4umYsmso1dJczQ24mdHZiDTij9MyQtR2s5DFDl8M6W3AWIV4FdQt%2BIlf2QodLrzkcbHR%2BCt9UupVLtIsHFnpOGxApPmpVf%2B2kdX58OXitWi%2BpAkKsdz%2BJnrS%2FplC7Q512kjn1jitkotFqRw3m3OSvXtdHx7rz9NM8ZWUDW1MCTZfGuSFHxyIHsyII%2B7o6QzWWrOVicXbTbde48w9yWEC%2BaTtMcfVsGKdpsF2sziz5PNWxVnIa%2BTVvTvTSpRq2n%2F31yS%2B6kYv%2Bs6SAAQztMuRuBQ87iLikFNhqJoXbj%2Bw6QAZozUQRvL4sgHdYiwZ4JYLtX5V%2Fst7EIxgcE6ds5G%2Fxt%2B4QboShUVRBAfWqqQ9uUrqLs4%2B3hZg8h6iazlFCRob%2Fp4iW6ZPAz2sc9cBl%2Fml1MmqfAkp1DU%2B5h6Y3sK%2B1aJcC8ExWZjsieMajprP0%2F45mcSHlvYo3NrB0Tf9GGyyfNk%2BFSWKGHF%2BQKMcg7jDJkuPDBjqkAQwIOy97np9%2FWCpEZg4sQoRR4BZ4sfRuMKCvaoMlc4sQz2U9Lj2eraOuyT%2FxLaY7h2V2f2PGCE4InT6T5rPrObCrMPnNn%2BaLDMj95yzPJv0ObY2qW33uNZpLynDK9P1jxeHzi%2B6KI2qK7bWnmrRxovDgboq4w8dH4vIEqlVmULqigyESZZXHNk3NcOLiNZMPW9junhCVR0eo1fphMDkYy%2FkKeB%2Bi&X-Amz-Signature=5430f3c4d39a2621227afbeed25e0237fd36ce9a11b870e802e388f6593d4209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
