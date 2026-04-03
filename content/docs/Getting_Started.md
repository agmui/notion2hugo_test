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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWULS2W3%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKN4rjG9JOHwn3DST8zXUSlxtWN6t%2F8RqY0comax0lAIhAKHoeuI%2BNycL2JNsGnM3p6isGOS8Ow428%2FjbLfO9KFCrKv8DCHcQABoMNjM3NDIzMTgzODA1IgzivUewHgZ8EFQJngoq3ANgGbmltdmC9tqaoTwGN5P6R2oI3W22qL9tVNpU8XfkK93XeY3i4BP2LKchfaXLPuMl8m16o10ugngmfeVsq4S4hjPjKFNIDgGPjaqdpfUeHAP6vpAyuZGcG77J%2FzAKJdsl4zx%2FydbSz%2F2YOrKd4dgCloKFXIQA%2BmgJ8QV6i3NSUh%2BjVy6mi40Ohl5VqLtvhcgpgG17higNzosRRhmDyHiuIBLmSuSG9WFomV4lact1cIemSQe3s5hW2VNZdS%2BjqrxEtYQwlvb1%2BPSBt%2FtMJyW2zpesn5uJytQregbQy1%2FLNb8Eq%2BazmSiUt6wZ3PtWfvgXWEPDIn39OPc1oM0xdboci7vnyHqzgwNIabcWOcWaP6ysgdaXUB71gZcQfpUWPMQRMj5UG6TrzP7omsyl06NLhsFymukhL5v5ENEFwRnQPVhb9A9Q4ll3aJdcKqW8l6OhlBE%2B2XIqtJ1%2Byqlg6GiC3Sv5P5o8GWOfzCCNUSBUok1WnFIP5pu1HItIwCYdC%2FmwTx8kGW2qncUy40yViB5C%2Bwc0eOAu5tgdG05Xxke9JYbcmAkkZokPCoV%2FYWNvTpcIfADob3NPOHm3352EexCv7kniUSF%2F5VEghq0bzLExeTqFScoFBoSQI%2FQZnTCXx7vOBjqkAWOLOYx6ExhjzS8AG0p74ihoZMuP%2FE0BgAuRnCquHzt3MvQTQAWxan3WVjQcZJNFH30lNZJp8c1QKp50l4iMmuXa7F1LYigvtObz8fK%2BuUsjyDSslE3%2FB%2BILpsBLyEhh0M%2FpgIPW9zB5cOieyXJnaZAZlvDSMzoHfPpuofyK4QzPTG6SRsWERWfYHjL%2FN%2FJKo2TGb81YB9t8vNE8nCqOEpFidJ8Q&X-Amz-Signature=357cdf17567194ad142265d4e30d70044559a006b2ef8bbcb6ef1f99619cd099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWULS2W3%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKN4rjG9JOHwn3DST8zXUSlxtWN6t%2F8RqY0comax0lAIhAKHoeuI%2BNycL2JNsGnM3p6isGOS8Ow428%2FjbLfO9KFCrKv8DCHcQABoMNjM3NDIzMTgzODA1IgzivUewHgZ8EFQJngoq3ANgGbmltdmC9tqaoTwGN5P6R2oI3W22qL9tVNpU8XfkK93XeY3i4BP2LKchfaXLPuMl8m16o10ugngmfeVsq4S4hjPjKFNIDgGPjaqdpfUeHAP6vpAyuZGcG77J%2FzAKJdsl4zx%2FydbSz%2F2YOrKd4dgCloKFXIQA%2BmgJ8QV6i3NSUh%2BjVy6mi40Ohl5VqLtvhcgpgG17higNzosRRhmDyHiuIBLmSuSG9WFomV4lact1cIemSQe3s5hW2VNZdS%2BjqrxEtYQwlvb1%2BPSBt%2FtMJyW2zpesn5uJytQregbQy1%2FLNb8Eq%2BazmSiUt6wZ3PtWfvgXWEPDIn39OPc1oM0xdboci7vnyHqzgwNIabcWOcWaP6ysgdaXUB71gZcQfpUWPMQRMj5UG6TrzP7omsyl06NLhsFymukhL5v5ENEFwRnQPVhb9A9Q4ll3aJdcKqW8l6OhlBE%2B2XIqtJ1%2Byqlg6GiC3Sv5P5o8GWOfzCCNUSBUok1WnFIP5pu1HItIwCYdC%2FmwTx8kGW2qncUy40yViB5C%2Bwc0eOAu5tgdG05Xxke9JYbcmAkkZokPCoV%2FYWNvTpcIfADob3NPOHm3352EexCv7kniUSF%2F5VEghq0bzLExeTqFScoFBoSQI%2FQZnTCXx7vOBjqkAWOLOYx6ExhjzS8AG0p74ihoZMuP%2FE0BgAuRnCquHzt3MvQTQAWxan3WVjQcZJNFH30lNZJp8c1QKp50l4iMmuXa7F1LYigvtObz8fK%2BuUsjyDSslE3%2FB%2BILpsBLyEhh0M%2FpgIPW9zB5cOieyXJnaZAZlvDSMzoHfPpuofyK4QzPTG6SRsWERWfYHjL%2FN%2FJKo2TGb81YB9t8vNE8nCqOEpFidJ8Q&X-Amz-Signature=b80d392d4bbe1f397b0767ffef80cfd73fe00c7adbec192f6a41fe5dfd7500fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWULS2W3%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKN4rjG9JOHwn3DST8zXUSlxtWN6t%2F8RqY0comax0lAIhAKHoeuI%2BNycL2JNsGnM3p6isGOS8Ow428%2FjbLfO9KFCrKv8DCHcQABoMNjM3NDIzMTgzODA1IgzivUewHgZ8EFQJngoq3ANgGbmltdmC9tqaoTwGN5P6R2oI3W22qL9tVNpU8XfkK93XeY3i4BP2LKchfaXLPuMl8m16o10ugngmfeVsq4S4hjPjKFNIDgGPjaqdpfUeHAP6vpAyuZGcG77J%2FzAKJdsl4zx%2FydbSz%2F2YOrKd4dgCloKFXIQA%2BmgJ8QV6i3NSUh%2BjVy6mi40Ohl5VqLtvhcgpgG17higNzosRRhmDyHiuIBLmSuSG9WFomV4lact1cIemSQe3s5hW2VNZdS%2BjqrxEtYQwlvb1%2BPSBt%2FtMJyW2zpesn5uJytQregbQy1%2FLNb8Eq%2BazmSiUt6wZ3PtWfvgXWEPDIn39OPc1oM0xdboci7vnyHqzgwNIabcWOcWaP6ysgdaXUB71gZcQfpUWPMQRMj5UG6TrzP7omsyl06NLhsFymukhL5v5ENEFwRnQPVhb9A9Q4ll3aJdcKqW8l6OhlBE%2B2XIqtJ1%2Byqlg6GiC3Sv5P5o8GWOfzCCNUSBUok1WnFIP5pu1HItIwCYdC%2FmwTx8kGW2qncUy40yViB5C%2Bwc0eOAu5tgdG05Xxke9JYbcmAkkZokPCoV%2FYWNvTpcIfADob3NPOHm3352EexCv7kniUSF%2F5VEghq0bzLExeTqFScoFBoSQI%2FQZnTCXx7vOBjqkAWOLOYx6ExhjzS8AG0p74ihoZMuP%2FE0BgAuRnCquHzt3MvQTQAWxan3WVjQcZJNFH30lNZJp8c1QKp50l4iMmuXa7F1LYigvtObz8fK%2BuUsjyDSslE3%2FB%2BILpsBLyEhh0M%2FpgIPW9zB5cOieyXJnaZAZlvDSMzoHfPpuofyK4QzPTG6SRsWERWfYHjL%2FN%2FJKo2TGb81YB9t8vNE8nCqOEpFidJ8Q&X-Amz-Signature=293fa22e53be8e8bcb8789f13a41b6af5bdff3e50c88d45695e85c7be1632b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AW3YEXE%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKM9jbFtEU2jTq5kctgfTu620ZPiWCMNTdV%2FZZe8fUoAIgQSRSwZcasNX15GlGj8ijIJZ5KsaoDf0T38iLm%2BV%2BmiYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOAZmw0mpWP50DnA6SrcA%2BUSkC%2BjZQQ5zjs6g3Ew3uq8iOJHKD3SoxZjYPsTTy8o2L1rB7QYIHckcZAIk3y9YMDqAQ8urQXo2fVS7gIrjiT24vZLPsFKvPuCORPmAid3ekXF26H%2B98dpAObaKEP2lQOGQrU4u6DvrtIpfmKKkYsY%2FbZyVTNn5Jjf%2BSDjsKADC%2Flnwcvut9UAX%2F2mihPGAR0hocDGSdVD1W3e5x%2Fr3faY57okgY2VvOkkJvWhkXawHjEcod%2B7SfSLM5Fes6zZjv%2FuXu9lw%2BfjwsZBC3TIQ4QZXLWvOG7jw%2FhaFduD9l%2BjAIb1Br2ueVG4VcA3pBNMxUjut2reEDdaQl83HyCr21pweRP8d3jJdEoHyTxtE2gdo7HR9FvenBWTRrECwXN1TAgtvKzk%2FFrkYOikf3PeON8qRgON073%2BevlxkH8f0HPu4336QCd1ON5xBPmHzPTMILLKdKOBjKbjjEt0YyAeW4xIHIH1x6se5XvOnuXWWcMcmlnpi6hrMqf9TNp1Lg5rMkY8kVDCdLwTVfI%2B7dsDU7ooKazPYHxiyokl4ZPnUGu1orZ99yFk2KmCdxy0d14%2FFQIh%2BwMTR8A8YcyAEhtBBRKrE8ivijYdDX73NPl7GX3OnDzendb%2F%2F3uNAykcMNHFu84GOqUBt1q%2BFSDN%2BbSj486PEejMSl5ZxoVSJN75aW3IvohK%2By3sKkQKqmRg0CbMDKn9fD92E8Ye3Zpt8cftV%2FIfBsvmx5fDjdtZRoL2gCKqdJM4w5kSDoJxwHJ7yiEibwRHxPz8MOzw8uJawbRuvRAX0Wrrnziwq2lWAfu9vGXtzPTaaTJcVHLG3svxYAJ6WBjf9RDc9zSL8CuAwIe%2BSUjFX8CsrhB7Jwkh&X-Amz-Signature=fd9b684fcec7f3db14d750a5e58c40e435c4e27cd9ddb115afd086678ae5b971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKDOT7X2%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWnjxceDjLrbnCYxGMLvuVXvjRkgHUnoIB8p1mSsDBAQIgCzIRFyTipXgQley3yRGrZfE5qQJJ%2FZNYkrJYC7vVWLUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOwb8URRv7cDn%2BGldSrcA%2BjWTn38fssotXjASWpznMDSD487%2Flvn1WbH9rduY32x3%2BzORxAHO6zh5i%2FfpPlkGYU%2BoNSRlisNMevxSKAr%2FXURKEMZwWvZFuidQZRacm1GBj%2BqoWX10JrA8ifP4qpmtqrTg5q2xZvvDT2f8VRCjVH0BifsF7H7JT17LMcAfdzZovThABnynRXI5T2vh23YEorqfCGLpQ1XFLRvmqcUitRCeNOhg3uZkgcylWJjL4Ze0Ppj7hjtwsu7ZXxzurrOeyDk6ag4qsMUqtDjQ%2FNaWTcKKGa%2B6yuMT02wZnk4YWKb%2BT%2FfvYHFMuyTW%2FLemlyOJQq%2B3yAfyMGQHMVRI5wahwLbbFPsmXadB6KpTCYZmWzVEQhd4DOLGLpMYER%2BoNk8oAGF84rbNNA5UNzEo%2BfPOV6eXJDzY4AADX0lXIWejITGjMA3aZOT4fAyQFIePUNpzqVwWOnZeautvLHw5al9UAkUDBWRdnt59kjdkTfmQTNJEB%2BLUDzrats9enVqDC8SwAqsHvzyQjl0vCDLAzURRfjCi%2F9r6eYi63evk4UO6C2wTtoN4PPBE849JHZt4oxqX0SU8IT7i82UarS60rnombAcXrtDfmcCHdtPUrnoBP0617%2Bqfk5JCWioDDneMM3Iu84GOqUB1yr5DGoF8EhZU%2BaRepI%2BNq9DiMRuTrpeWKx%2B0G8ljzXv37micrAK9IbSSeUIEw4tFuyxCSg9VRQkx3YozumyXcaUtwO%2FWAP%2Fhw%2Bc1aHScQfR3EAKNEVMpFbjF9eZ6cEeMIlSg6AdBhCoUS%2FwKVpckcEjZDaYtKaGIWa%2BS%2FMLl5CDJeI8Ow09ijX7eXqfH0u3hukJSl6AZ9ugYRgXhSigyesd7DoE&X-Amz-Signature=097e05f289981296ba5898541f0c9241ab46f34a72af8b46e0d1faddcf50a9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWULS2W3%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaKN4rjG9JOHwn3DST8zXUSlxtWN6t%2F8RqY0comax0lAIhAKHoeuI%2BNycL2JNsGnM3p6isGOS8Ow428%2FjbLfO9KFCrKv8DCHcQABoMNjM3NDIzMTgzODA1IgzivUewHgZ8EFQJngoq3ANgGbmltdmC9tqaoTwGN5P6R2oI3W22qL9tVNpU8XfkK93XeY3i4BP2LKchfaXLPuMl8m16o10ugngmfeVsq4S4hjPjKFNIDgGPjaqdpfUeHAP6vpAyuZGcG77J%2FzAKJdsl4zx%2FydbSz%2F2YOrKd4dgCloKFXIQA%2BmgJ8QV6i3NSUh%2BjVy6mi40Ohl5VqLtvhcgpgG17higNzosRRhmDyHiuIBLmSuSG9WFomV4lact1cIemSQe3s5hW2VNZdS%2BjqrxEtYQwlvb1%2BPSBt%2FtMJyW2zpesn5uJytQregbQy1%2FLNb8Eq%2BazmSiUt6wZ3PtWfvgXWEPDIn39OPc1oM0xdboci7vnyHqzgwNIabcWOcWaP6ysgdaXUB71gZcQfpUWPMQRMj5UG6TrzP7omsyl06NLhsFymukhL5v5ENEFwRnQPVhb9A9Q4ll3aJdcKqW8l6OhlBE%2B2XIqtJ1%2Byqlg6GiC3Sv5P5o8GWOfzCCNUSBUok1WnFIP5pu1HItIwCYdC%2FmwTx8kGW2qncUy40yViB5C%2Bwc0eOAu5tgdG05Xxke9JYbcmAkkZokPCoV%2FYWNvTpcIfADob3NPOHm3352EexCv7kniUSF%2F5VEghq0bzLExeTqFScoFBoSQI%2FQZnTCXx7vOBjqkAWOLOYx6ExhjzS8AG0p74ihoZMuP%2FE0BgAuRnCquHzt3MvQTQAWxan3WVjQcZJNFH30lNZJp8c1QKp50l4iMmuXa7F1LYigvtObz8fK%2BuUsjyDSslE3%2FB%2BILpsBLyEhh0M%2FpgIPW9zB5cOieyXJnaZAZlvDSMzoHfPpuofyK4QzPTG6SRsWERWfYHjL%2FN%2FJKo2TGb81YB9t8vNE8nCqOEpFidJ8Q&X-Amz-Signature=35b45866561da610d9d31c8f7782b8df09f99b832a3f881a64097891ac7ec97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
