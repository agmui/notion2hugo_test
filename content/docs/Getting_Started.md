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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43JSMBR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD63UsRH2WELfD9jyX0FgftF6B7VH4opuue5munYco63gIhAOs7YZyP3wTZ9RC3OQpqq88YZ%2BHfMHpqdLrUHbqLM0XsKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzjAswrJc7483q9JEq3AOz9qqD9t7OsIb7FKp4R2VaEWoQDtqgTin3%2F3rtKd6Ok8wIs%2Fd9kanI6DgGDo0Yx9A0XZ3V%2FLIJ%2BmHx1xrnxfzPjJQCXcx6ToQ5U5U9DvCySbp4dXi6HOPODM9oT9nIWFc6woVtSGPvUCgTlRQaQMB%2BemuZss5Dvrb6WPmWxa%2FWUl3wWtCoCH9b5Osu%2B1ogVK9dTVoBinZcbb3zE7TuNUNOZCT%2FFo0HwanW0beqn1KbFX1Wm5XMJihsYO4Kcb4hT4HYfxSRpm479iK8BdrUSJFoMNpRQyaubIa22YOE%2FMYIoZfLk1ynaup%2B19f7LBIURUl1fJ5Pnlh6uMgMTnfLRIXe%2BLaz7JqK7Aw4vH2ZhOm4kJvih4LkSA5XCW0mL2dJRxRNM85p1tAejNKWb9yTdRs2GgLGVRpjcnk2v3MFuvGIMHSjz9AH8HN%2F5BXzt7RjkBxZd3T9T4NZprhYcoGwYSyVnky5OG84dDpbAOlgjnauAcoYrWKBCTtratnN2DIBNFBQ%2FkvtVl7aWMsswtsCrUV2RR2j0kw%2F7iJexrEQCZcGxXBJnd2dkxEy8yw0Emi9IRizFNWpToaPtQGk3GGUE19P3pnceajKz%2F5HFFkLtBy49IMW51ZH35K8gKQIADD2hN%2B9BjqkAeAlquH9JS0nr6RJmrzMFXTcY4fwbpXZ6MGNpo7qSfwZnB05YTebeUdC5eL9dkVdGkQ6eM%2FtmRAxlEn66dtvnVidW5Dw1q1BWYvG1bT%2Foxydh%2BH5qtHNWmvW%2FBm83vxAd2CQdloEniBQGpRCAg7WspLamPAZclT2vVuBezwmDF0gSUZV8eie6t7bZhfw4W1flTouJxCbb7oM8Ug3JUypsZqEDa7g&X-Amz-Signature=46d00914bf99d4d99b9b9db55c019b8b062ea009dd478e208a97da52040b0c01&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43JSMBR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD63UsRH2WELfD9jyX0FgftF6B7VH4opuue5munYco63gIhAOs7YZyP3wTZ9RC3OQpqq88YZ%2BHfMHpqdLrUHbqLM0XsKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzjAswrJc7483q9JEq3AOz9qqD9t7OsIb7FKp4R2VaEWoQDtqgTin3%2F3rtKd6Ok8wIs%2Fd9kanI6DgGDo0Yx9A0XZ3V%2FLIJ%2BmHx1xrnxfzPjJQCXcx6ToQ5U5U9DvCySbp4dXi6HOPODM9oT9nIWFc6woVtSGPvUCgTlRQaQMB%2BemuZss5Dvrb6WPmWxa%2FWUl3wWtCoCH9b5Osu%2B1ogVK9dTVoBinZcbb3zE7TuNUNOZCT%2FFo0HwanW0beqn1KbFX1Wm5XMJihsYO4Kcb4hT4HYfxSRpm479iK8BdrUSJFoMNpRQyaubIa22YOE%2FMYIoZfLk1ynaup%2B19f7LBIURUl1fJ5Pnlh6uMgMTnfLRIXe%2BLaz7JqK7Aw4vH2ZhOm4kJvih4LkSA5XCW0mL2dJRxRNM85p1tAejNKWb9yTdRs2GgLGVRpjcnk2v3MFuvGIMHSjz9AH8HN%2F5BXzt7RjkBxZd3T9T4NZprhYcoGwYSyVnky5OG84dDpbAOlgjnauAcoYrWKBCTtratnN2DIBNFBQ%2FkvtVl7aWMsswtsCrUV2RR2j0kw%2F7iJexrEQCZcGxXBJnd2dkxEy8yw0Emi9IRizFNWpToaPtQGk3GGUE19P3pnceajKz%2F5HFFkLtBy49IMW51ZH35K8gKQIADD2hN%2B9BjqkAeAlquH9JS0nr6RJmrzMFXTcY4fwbpXZ6MGNpo7qSfwZnB05YTebeUdC5eL9dkVdGkQ6eM%2FtmRAxlEn66dtvnVidW5Dw1q1BWYvG1bT%2Foxydh%2BH5qtHNWmvW%2FBm83vxAd2CQdloEniBQGpRCAg7WspLamPAZclT2vVuBezwmDF0gSUZV8eie6t7bZhfw4W1flTouJxCbb7oM8Ug3JUypsZqEDa7g&X-Amz-Signature=05835fa015af8d55498ed49790e04191015debbdd5b87638ccad01aa995285b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTIPFOS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlf36NzQuAvlxcjc1sCwKbIq585Bh2n%2F5dLVUn%2FoTrDAiEA8tpZ5GsBLPeqhpv2qrjCoS4mr3oMdKP8T0eew%2Badk%2FkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2w0oZQJTIYp3czxyrcA7TMEA7ISGgL97NX1Ae4p0F4XnAMVbZWN6ceId%2Fc0gyYa233XjKCE00XKUvaRXkmrJWE1m%2B%2BtVfelzluaTiTUYrQTlSjGwKiyThx%2FBu58c5JXuxkzv8rqFyxBYtT1VEHjwyH%2BsJH3NpSkSFb4ZVoVJrVs5B%2FlkUFBaZwN6HEgeGi2Caw7Zb9CWAmeBp%2Fa3NfJEnHEaOc%2BvcKPlCLYtWDX86SdTIHMvOmdD%2BM5Ik3D8DgUPrT16GDLGvv1k%2BihhnKT2K3OshHe60Yo%2F4xp2uRSriuC9%2ByaUTqLfYNzP0dCx5QGQZJrhc6KX5VVRosA28sBxVS7dK8BwVaEX5RyEynxpm8YLQdSLpgT0P6UZeq%2FL1qTcKdT%2B4OuZNRr3gRAgN8D6xso%2BUPBilugbIMu95eDA2bGKG%2F88q7IAV9wyhHENfUUm4YEYksYqLL5JGezq5i%2B%2BFiyYNBjKbgdSwDAps4phowQBWvB22cQfsCZlCZHirqws1kb2AdySWgd0FDCgZSzBj8ttPH5XHASYosWsNNb418BFuk7C8rJM5fgoMMTe1wSIGg3kWNA7erOvvyedj7umBaHhlyqStW55pp3%2Fi0a1OSX0Zri1ZJ3JgtHkbx9xI%2BNnMkbvvqkiZf9eTiMJOF370GOqUBy4bSmRzUHpRwbHH5MB7yaZs6LrM22SoIGCUMz2j3cDTLnUX9G%2BCq986TBLDMgMRAnyiHSnCAqw7NkLAoqttT0wWqYem9I48Eiu8ZkPlbU%2B1d7IaIcijEQh184OoEZzkRoWWliwVxjzIXVJAUHaEMfFqUX76hJjizt5NXaaUQxNZOPLzL%2FU%2FLqETRAtqIntSOEaY%2FdDcfF5Z60hLinzyk7Xj9cOiz&X-Amz-Signature=5b26c80214ef61796a63ad083b0976849df2f52911bb174d1f2505ca95b0e83d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NJLX3M%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPW90QSfn0K5LtqeJ%2Ff%2FR8%2BqFvCAbINkS7lRbJ%2F1REIAiEA9QL4x%2BPNntk5PElTFA%2FeFaFGoA%2FqCnvZOok%2F0V1k2xIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZe5IbdJ36vH%2BtS5SrcA0SFGrQrKFLSA9%2F%2F237Rhd6TDSvwyxVs515eKAoChCopzJBTSXwPdKOQfJ8LQQRzM6KQihy3bzMt5SRbz29hSEWmuil0oVEG%2FCrPhFTmBZgnfpiUCirMpdQoUKkijliTWTRL4kIHT1r1cx9XsbmA%2FL2WQUu7RrloMM%2F9i7Ar5eDEKB7%2B5L1JzA0NXBtqRkenJfsxbtsO5E09z07ow0taO%2FBoLV3A6UjzPQ7xfz0yn9rWnrmjUuP4qwiGGCCZ7uwDWjIVNFOBHwf%2BOpIAXuNvn7seiF0xWhQrjQEjYSK9m2TjjdpGAWs9pvIN%2BqiFaSEAjAkRvIt1J09Bpy6CjNSnAWUMpSzvbNBQyd24XX1Oly%2BNVYyEqstD5ux0TMYTQzoR2G%2BD8MpBBLbG6eDPJT8eVSP3JDw%2BJDBpBMxueXVoC5ZJxCZWBXqS7f9f%2B3pHjfPhC827fb9tgC%2BkdviqWqqljfq6j%2BTwL0kaegWksiikUfCwvbLK1u7bW5FNz9DO5sR4P0G5jpXBjnGqqe2Qtn1LRlIRL5L1RpphY4Gd2BtCY6lwFJhRF22UhLkDCGRpq8nu%2BjYecZtSzcZSTLsbm5o8jjwP4zsWr%2FCCzxeYNXj02U8m2kP2U6uqCgSSxnoWMJeF370GOqUBEmZnR3XhS3tm%2FIKkQCZy5Q%2Fu0ypWmo0dtfwg%2FHRZQ0dVYbUiPE3qvPeLwnF8s8XSg8iLhJiYqmT5ACFMxGzBNyrpWBa4FewWW5rsbtFTisRzrIs723vcD1Sy4iOYrJrRzq7XIHp5lz62zbgIURjkYNz4k5%2Bpm4dn%2FuPM8Z2XiQOl1vSTGjLlcjF2WN%2BBp4h4EP8sp4OFNYevnSd%2BCkk3g3tFtpFi&X-Amz-Signature=39e950863b8d2a81314ea835931253caad619f87d78ebce297d3287962c25352&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43JSMBR%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD63UsRH2WELfD9jyX0FgftF6B7VH4opuue5munYco63gIhAOs7YZyP3wTZ9RC3OQpqq88YZ%2BHfMHpqdLrUHbqLM0XsKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzjAswrJc7483q9JEq3AOz9qqD9t7OsIb7FKp4R2VaEWoQDtqgTin3%2F3rtKd6Ok8wIs%2Fd9kanI6DgGDo0Yx9A0XZ3V%2FLIJ%2BmHx1xrnxfzPjJQCXcx6ToQ5U5U9DvCySbp4dXi6HOPODM9oT9nIWFc6woVtSGPvUCgTlRQaQMB%2BemuZss5Dvrb6WPmWxa%2FWUl3wWtCoCH9b5Osu%2B1ogVK9dTVoBinZcbb3zE7TuNUNOZCT%2FFo0HwanW0beqn1KbFX1Wm5XMJihsYO4Kcb4hT4HYfxSRpm479iK8BdrUSJFoMNpRQyaubIa22YOE%2FMYIoZfLk1ynaup%2B19f7LBIURUl1fJ5Pnlh6uMgMTnfLRIXe%2BLaz7JqK7Aw4vH2ZhOm4kJvih4LkSA5XCW0mL2dJRxRNM85p1tAejNKWb9yTdRs2GgLGVRpjcnk2v3MFuvGIMHSjz9AH8HN%2F5BXzt7RjkBxZd3T9T4NZprhYcoGwYSyVnky5OG84dDpbAOlgjnauAcoYrWKBCTtratnN2DIBNFBQ%2FkvtVl7aWMsswtsCrUV2RR2j0kw%2F7iJexrEQCZcGxXBJnd2dkxEy8yw0Emi9IRizFNWpToaPtQGk3GGUE19P3pnceajKz%2F5HFFkLtBy49IMW51ZH35K8gKQIADD2hN%2B9BjqkAeAlquH9JS0nr6RJmrzMFXTcY4fwbpXZ6MGNpo7qSfwZnB05YTebeUdC5eL9dkVdGkQ6eM%2FtmRAxlEn66dtvnVidW5Dw1q1BWYvG1bT%2Foxydh%2BH5qtHNWmvW%2FBm83vxAd2CQdloEniBQGpRCAg7WspLamPAZclT2vVuBezwmDF0gSUZV8eie6t7bZhfw4W1flTouJxCbb7oM8Ug3JUypsZqEDa7g&X-Amz-Signature=1a61dc653a55cd0701ff95f22071e85c48eddae2a8b875a863e112e7c2c514e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
