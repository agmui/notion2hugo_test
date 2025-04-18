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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKG3K56I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsZJ3PXfcfvQTG3cU72qcvHAamt3I%2FIbXOwxpB9OeYOQIhAMxhy0AGdi6uxmkdXBpPwhEzKqgg8j8%2FcI1AZ6JsSc%2FEKv8DCHEQABoMNjM3NDIzMTgzODA1IgwonzZZIjRIvEHIWeUq3ANInw5uev6OFvFfx47DccMvqg1SQkAaIk%2BaTlbOhZG0X8KixskQyGXG7CFXLzhot5xgzoC79%2FxIFI37QjZPWbFIaNMPbwgK3uyp7Pds5EdMrMJpYQvG5Si7JMy%2BDwCWMLq5BjFyVQD2BWHFzch%2FzkI1CAV2eTTQhgeslY8wzV2uyuLS3JFgJ2Q6%2B72FK34ZNiGKHF%2FG1sJu5o3Q15OFVMWAS4cBnSMpu0qlmGDtdlrKJaBLbeUPz59UHFlrItZU2D9Eo63SbPR0XUj0sorZiXzl1rhE1da7yhVQEUH00LrWnNHdyTQO%2B6370X29LK0rPGrx95Q4YDdu1YleBiX6qHGF2Z3tvHUg7AAG8sNssARoyZkEgSSmu15TS6D9g10i8SxzsGL05UDjhHHcETYd1NVYj2cCPSO5fW0yDKpA8fIEC%2BdE0hZPIQ15K7LKL%2BSN9e5iwGQ9UvHmVd4bs8devfse4iU%2FzaPOk2%2Fy%2F730UWSqQoONMcntJ3ZFuN6rYGukZ%2BvP33avPptaGLS6Zna%2FnamN9ymN53YrMYcWA7unhbg6S%2F%2FSxm0omAhPmZ%2FDGrB3MNpMiFbzFVmtoWdRzU2DRHuHgjbu7ALOi6z0G26VeFDGVImxDkJK%2Bmngia%2B3KDDOkojABjqkAWBtms9ouhNlrD%2Fl8sQZxW2QnIhEDbDFfkeVE%2FaieV7CbzZTfCKWaQPaoiF2ca3Xm7E2B5lHmUNJk%2Bhrux%2F7atALyo9GHaH90Nd7RhMwNNJ3YeniRb8Bm25mbTVeq0tyN7w2rFKYCtQoF5qp0r1kMsp%2B0aV2SpE08eNsThHjb8JTaknOeGB8Ms4Zg49NkSiEL3mwEiH%2Fl6IuG0j%2BLJEORvTBa%2Fyl&X-Amz-Signature=8b2baafd55067f06da2b48da79404b56e990f5178492f9a38329f00bd6798911&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKG3K56I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsZJ3PXfcfvQTG3cU72qcvHAamt3I%2FIbXOwxpB9OeYOQIhAMxhy0AGdi6uxmkdXBpPwhEzKqgg8j8%2FcI1AZ6JsSc%2FEKv8DCHEQABoMNjM3NDIzMTgzODA1IgwonzZZIjRIvEHIWeUq3ANInw5uev6OFvFfx47DccMvqg1SQkAaIk%2BaTlbOhZG0X8KixskQyGXG7CFXLzhot5xgzoC79%2FxIFI37QjZPWbFIaNMPbwgK3uyp7Pds5EdMrMJpYQvG5Si7JMy%2BDwCWMLq5BjFyVQD2BWHFzch%2FzkI1CAV2eTTQhgeslY8wzV2uyuLS3JFgJ2Q6%2B72FK34ZNiGKHF%2FG1sJu5o3Q15OFVMWAS4cBnSMpu0qlmGDtdlrKJaBLbeUPz59UHFlrItZU2D9Eo63SbPR0XUj0sorZiXzl1rhE1da7yhVQEUH00LrWnNHdyTQO%2B6370X29LK0rPGrx95Q4YDdu1YleBiX6qHGF2Z3tvHUg7AAG8sNssARoyZkEgSSmu15TS6D9g10i8SxzsGL05UDjhHHcETYd1NVYj2cCPSO5fW0yDKpA8fIEC%2BdE0hZPIQ15K7LKL%2BSN9e5iwGQ9UvHmVd4bs8devfse4iU%2FzaPOk2%2Fy%2F730UWSqQoONMcntJ3ZFuN6rYGukZ%2BvP33avPptaGLS6Zna%2FnamN9ymN53YrMYcWA7unhbg6S%2F%2FSxm0omAhPmZ%2FDGrB3MNpMiFbzFVmtoWdRzU2DRHuHgjbu7ALOi6z0G26VeFDGVImxDkJK%2Bmngia%2B3KDDOkojABjqkAWBtms9ouhNlrD%2Fl8sQZxW2QnIhEDbDFfkeVE%2FaieV7CbzZTfCKWaQPaoiF2ca3Xm7E2B5lHmUNJk%2Bhrux%2F7atALyo9GHaH90Nd7RhMwNNJ3YeniRb8Bm25mbTVeq0tyN7w2rFKYCtQoF5qp0r1kMsp%2B0aV2SpE08eNsThHjb8JTaknOeGB8Ms4Zg49NkSiEL3mwEiH%2Fl6IuG0j%2BLJEORvTBa%2Fyl&X-Amz-Signature=18d77f136fdc27627a38c51e83a50c138f90fa5b1972f58f58b3f5e23e8cfbca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y5HEY3G%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD8fAFVWXS%2Fsu%2Fv1ViOMY7YJmMj%2BxsyDLXJ7GjApCrnlQIfE63wm80WKEYFkKhbbxdvWDN5VxjLZwyBko1RTsltwyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMGz7vxliXpBu9eytYKtwDYDRvbu6Ve6CTwFy4ZjolQxHrvUWcAdYKKobo0Qq0%2FPNM76FJCdeSyeVM%2FOZnjuzQh2omRYbhBtoP1%2B4b4Kva5QMVWV0GJVQonGDS8k8BsFKELiFvmx50dTbbuatRfr2Cwk99vSe8gIEKLtnq0swP9wEM%2BnO106xlisaym1eTRQVa9%2BGHJXrf126e1632r7bS6Nk%2F4CZC0gzn17N0zqmwyAIvB3cX07uHspkSEAGnNLtK1MRsAWkc9h%2FkNFYKDaRSDpyQNKaOivu0t7kMtflIH4dFVMpCw8oEDO6SYJNvcv4ArpR615KpXyjj44FYadONHVtT1k889lbkNM1QHXcAdcuUT%2BBefcPkuLb5rDBa6NB2aPbwckMnVaUS3acAFYX4Wv1SFiHlefMgHPR5gRQVGB3mOOvH2N5TsK2cTz2KlSxjVQ1kRzrLHIIEmvvrsGmpoCos9RlhKBJXnjUNh0iLyjw8P66Myq9D%2BHMAJCf17biXMJrbydOXBwJvXKSSBy8lVNPqwDKKxNWTOhNdMvD2DkalDxyB5Yxujm%2FDpXLm0LoxR4Nv8OK1ua31J1Xyxh703xyHHD2OqwLpjpHyKshy1eCfxHVaoYpS1sXDyBxO8rk2DD6L1zAg0AGPis8wnZGIwAY6pgGnVf21YA4LRZ4ap3ppWG4FHegswXbPtdOUkm6MT28KhOehv5NRYRhDSb3EaR32dOSX2QRs1LHL2TD4ri3JiLKU19XBAI8DwxJlgSCFNwAsCYB4WYGfCTQ7AqOFctfvkRlNKLRmAzbFfHb9IlWw8InvaihgtCOx4%2Ffoa0OAZ%2BftYobtIkUPciMLJiDl62EtWXbNdTLiWYx3cRnTG8MFE3Sf4tpJp%2Bh4&X-Amz-Signature=8c5c36cd7d2007bb945e1a7618048b6d2fa77aab888fea922f1f7012b383648d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQSMCRK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuZ%2B2r%2FMuafn7AdnemIeSOx%2FO%2FXC7spoH%2FcEkHtX%2B5owIgA6oXfdm9DsyixKAtmr3bDr7Du6piU7oVC3LlIUHo7DAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDExwynAJvu%2BQ6QGYByrcA%2F55SUE23Us8bvol35YVUle6rEBWH9Z98iKgAgU%2FtvqC9wsOJP3MhUNli4A2lK3lpCojSao7Eba4eQ%2BLbaZeQuUOkIlDaUIYu2kknQtjkV9iTYp7U%2BVS7iG1IUSrKNo17qtiO86jo979Gw3MtT9oFw9%2FveLEwY4Jtqx6AWIe6aEl%2FSgyIu%2BH9rX12jydrODMcjLaiw1XZSltt4QeJHYoQCmaQq3JcMI6FnUimuXFZgVZBP4JstHRSrqAXMrWkdAWFFIZDvuyfNb0cuzzT1BxAVIremFwMPqXpIkv23meLkkCIuGyENY%2FiK%2BRnDayuO3apReQCAmIpofweMhF%2FL5ImPCQoz0XVYzSVZH3LrpuR0aCUiVFHYGJyZe%2FMjvkRU0h%2BGj%2FqAWZIL0YA0ibV%2BsCZRtjfL1cHxYVZeMLNtehvBH7h139uOI6ygZWdv%2BCtq5kDixKmC0iK7RTpE2LvVgTocU2kYdAyiNMiRyf8XVc2UhZhD1JOcSE%2FR3cGDjyjsI3pCrj3AQtXh7w%2BiXx63no3xw%2FoM625Kx%2B2%2FLUai4By9qDnCqM1iPp19C8i4fxj%2FDjp56weRDUWaRSMangH6hVkD745myKyJnXVRtJTnbA4x75YpxH2Ro5oZgYqeOvMPCRiMAGOqUBZzrn%2FX3c3SVCqegj9V1QbaWeQewXU7uVH2IwhhEWngJAeH57tfAOBBmakqVwoC%2FwjgT98InBM1lTJd24gbhMpcK0q0SZb4Vfj8Wz0jr1WLx54GXpX0bulypFb7g3BAQTnBrvmdO7eWKTif4Lc6ePReWzBE3KRNTyoQ8MDXGVevPrY0Ikk1mdVjmUEhZFTTzebYMjrBG%2FMih%2B8B7y2EXoAdm6%2BTrx&X-Amz-Signature=1282e98f6f5db620aeeba9628ea4b2798043f4930254edb7237b9cb4ef87b147&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKG3K56I%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsZJ3PXfcfvQTG3cU72qcvHAamt3I%2FIbXOwxpB9OeYOQIhAMxhy0AGdi6uxmkdXBpPwhEzKqgg8j8%2FcI1AZ6JsSc%2FEKv8DCHEQABoMNjM3NDIzMTgzODA1IgwonzZZIjRIvEHIWeUq3ANInw5uev6OFvFfx47DccMvqg1SQkAaIk%2BaTlbOhZG0X8KixskQyGXG7CFXLzhot5xgzoC79%2FxIFI37QjZPWbFIaNMPbwgK3uyp7Pds5EdMrMJpYQvG5Si7JMy%2BDwCWMLq5BjFyVQD2BWHFzch%2FzkI1CAV2eTTQhgeslY8wzV2uyuLS3JFgJ2Q6%2B72FK34ZNiGKHF%2FG1sJu5o3Q15OFVMWAS4cBnSMpu0qlmGDtdlrKJaBLbeUPz59UHFlrItZU2D9Eo63SbPR0XUj0sorZiXzl1rhE1da7yhVQEUH00LrWnNHdyTQO%2B6370X29LK0rPGrx95Q4YDdu1YleBiX6qHGF2Z3tvHUg7AAG8sNssARoyZkEgSSmu15TS6D9g10i8SxzsGL05UDjhHHcETYd1NVYj2cCPSO5fW0yDKpA8fIEC%2BdE0hZPIQ15K7LKL%2BSN9e5iwGQ9UvHmVd4bs8devfse4iU%2FzaPOk2%2Fy%2F730UWSqQoONMcntJ3ZFuN6rYGukZ%2BvP33avPptaGLS6Zna%2FnamN9ymN53YrMYcWA7unhbg6S%2F%2FSxm0omAhPmZ%2FDGrB3MNpMiFbzFVmtoWdRzU2DRHuHgjbu7ALOi6z0G26VeFDGVImxDkJK%2Bmngia%2B3KDDOkojABjqkAWBtms9ouhNlrD%2Fl8sQZxW2QnIhEDbDFfkeVE%2FaieV7CbzZTfCKWaQPaoiF2ca3Xm7E2B5lHmUNJk%2Bhrux%2F7atALyo9GHaH90Nd7RhMwNNJ3YeniRb8Bm25mbTVeq0tyN7w2rFKYCtQoF5qp0r1kMsp%2B0aV2SpE08eNsThHjb8JTaknOeGB8Ms4Zg49NkSiEL3mwEiH%2Fl6IuG0j%2BLJEORvTBa%2Fyl&X-Amz-Signature=dc02688b084a255be18357cf2e3d323a1df6160e1f4f2b5dbd9c3a7962c6f925&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
