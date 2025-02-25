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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKZ2WKQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDoEvWIUGRwWfxPzyChrA3SX2%2B8Ua08HHLJcUPGoFV8JgIgVwmfiI5z5J80ZZ%2BIY275Ba4qjo%2BsM3D7M1MHMvyQRkIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjGM6HnPWZWM%2FiGmyrcA125R0yL95GCKoVOhic8bcrcO8rvpbUCxD%2F7pFEiklzE3hlqhXShkC3CLbVfGJkpVXMgMTaFsCVQnTWsptYPy1ipXxFBAv4NXcNGd9mllj1fpCK1wIadOrw8xi4Xf2WpR5Q1lNCSZwywNAWZnc8ro%2FBeVsrxQlpN%2Bbfk%2F9R%2F8Q1rCT%2FkOIia%2BcmegjJP4CHrBLJDtPMc4jWy1XkLcvAZsHq%2BBjSEuw9v5WZns77Mo3rY9eZvLjcixcYw2xFVXcv0CsJ8Qnqk0enWzb%2BwWVvurWRhaQFGAdXQ%2Fo3Xmnx915AdsZGnrZcpHQDF3QcSPl5UVQzPlEtsBrMTfMAkXKyDQf13usmfLsO4ST5ApfGzfzRtuN7Imm6Hxbir4Y%2BB9cqRbGWXiXa3iNRsbWhDvh9AifPiZB9f8SUDRoFKMfhGCq9YtUs%2BeX2QIAmNNp1VACVwKakdg3HMPG7MXpxfseixii1M2pCWqWbpiXvb6sXLGchOYhrUES3bVTSfqukP%2BwiV%2B8CjsvcwJj5I3k4ZvlrzPbYPERnING9Qe1BjPBQ3Z7fCsaGQ%2BTFseK5imMplaNojW0t1KnbudDVQRZBXRrnO3lYcqH3opG8E9Q%2BcXhghqzYDHHRy4hvyopEwPYpzMOWC9L0GOqUBe6Zh0%2FhseAdWw1HimHeppGFf4j%2B0dKS3tjQbm%2FzbE0w5qhC0xwlBlI7FtAC28jmHCQ32%2BNVEdO2IFiXpMZE4sNmxKlKdN1G8KJfu7JkDuwH1Y%2FGQRIxCyibyWuXMBvN7lhtqJSBGq0QAW0iCYnFGPEaivaQUrVgaPNckMGlRHitUlyIpqiIdIq9G%2FOVOAU%2BSxzvamWtNPApiC8nm4BAnAQ5lUoqF&X-Amz-Signature=775bb7af010cb37363b67a52d7fd7ca71461550975098fdaf9a5a8fb6cf80785&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKZ2WKQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDoEvWIUGRwWfxPzyChrA3SX2%2B8Ua08HHLJcUPGoFV8JgIgVwmfiI5z5J80ZZ%2BIY275Ba4qjo%2BsM3D7M1MHMvyQRkIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjGM6HnPWZWM%2FiGmyrcA125R0yL95GCKoVOhic8bcrcO8rvpbUCxD%2F7pFEiklzE3hlqhXShkC3CLbVfGJkpVXMgMTaFsCVQnTWsptYPy1ipXxFBAv4NXcNGd9mllj1fpCK1wIadOrw8xi4Xf2WpR5Q1lNCSZwywNAWZnc8ro%2FBeVsrxQlpN%2Bbfk%2F9R%2F8Q1rCT%2FkOIia%2BcmegjJP4CHrBLJDtPMc4jWy1XkLcvAZsHq%2BBjSEuw9v5WZns77Mo3rY9eZvLjcixcYw2xFVXcv0CsJ8Qnqk0enWzb%2BwWVvurWRhaQFGAdXQ%2Fo3Xmnx915AdsZGnrZcpHQDF3QcSPl5UVQzPlEtsBrMTfMAkXKyDQf13usmfLsO4ST5ApfGzfzRtuN7Imm6Hxbir4Y%2BB9cqRbGWXiXa3iNRsbWhDvh9AifPiZB9f8SUDRoFKMfhGCq9YtUs%2BeX2QIAmNNp1VACVwKakdg3HMPG7MXpxfseixii1M2pCWqWbpiXvb6sXLGchOYhrUES3bVTSfqukP%2BwiV%2B8CjsvcwJj5I3k4ZvlrzPbYPERnING9Qe1BjPBQ3Z7fCsaGQ%2BTFseK5imMplaNojW0t1KnbudDVQRZBXRrnO3lYcqH3opG8E9Q%2BcXhghqzYDHHRy4hvyopEwPYpzMOWC9L0GOqUBe6Zh0%2FhseAdWw1HimHeppGFf4j%2B0dKS3tjQbm%2FzbE0w5qhC0xwlBlI7FtAC28jmHCQ32%2BNVEdO2IFiXpMZE4sNmxKlKdN1G8KJfu7JkDuwH1Y%2FGQRIxCyibyWuXMBvN7lhtqJSBGq0QAW0iCYnFGPEaivaQUrVgaPNckMGlRHitUlyIpqiIdIq9G%2FOVOAU%2BSxzvamWtNPApiC8nm4BAnAQ5lUoqF&X-Amz-Signature=4ffde8842493655e93e45349a86e527b2765a1cce840097758c7f94fdc2d5be6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWA26%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIGM1rH4n5DeEW6I7hwccEm58x8fVHwMcp9p%2FabBxIDKyAiA3y7Lum5IPFtdTKehUGfoIJG8Cao86EkSPi8d8fJmT3Sr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMOWDUOlTdp7CiMmtWKtwDw6BOGn5GBZusOB01YdCZzg05yL59DwCTtXIl1Bj1dtqXQ5vAE8kD378BKotKFM1kOFa%2FY8sYK1BM3VaFGXXSXpaa9y42jKddNGSn8SomoffUfrhllPgUj9wFKg7m4Io0xd1m6kOJNIhYNu%2F6xGZnhG%2FjAa7nTAfv%2FBZcqjfWABofKD8LyDcJ%2BcCTePTnjUBu1Kz%2BYYaiPz%2FVhU8VINKzfAlFIN0kXLCm%2F6n8g44HabtjUPOP7N6%2BUigz%2FejaidgxktNGDJdHMyFmqdpXyCtceUwqT2WusMLkhsuDZFavLH7DK1ZrNx2Ut6tgcdO2UzUops1hcxSzVbVRIvr6If9DKU2jnexylfsochGD6pBfiCmiD9fOU%2FWTfSkZ0Ci1ZkO1JkWCbwlC1oD6a1qHmMAgLt8JPdzhdQwG9lmZkcZm1LNpD4iKIK6eH4DU3c%2F9MgOTaaYfTOEf83pMOGrAMIWzj6XDPtninAXJNNhBd7Qh8%2BXRk5qhHvo%2BJoLVgrrdLuwpr9U%2B3dF9vIff8d0aygGfdzQQJXoscaBQ6mEZKpOQsmwmbRUmMitGXZNvcJlvA9gUYJaqOYI61epUbUv7kjrwN9RMQbBWaz64Posrbjwk66JDuyA1n24x2Lax5WAwrYP0vQY6pgEeRbQWCje%2BMBxquuvgX42i0cRND3sZIa80JH7EVaWmxmyq9yN4UDTvADQZfBUT1wU6Wi3PC4ratzRiSPv9lqRCfHNNginNN9SGIcDbF3yzZyGMlbfRxhVzQWTpLjskw%2FHt00i7a2irXwj811GPXvaZvZz9T6Hr%2BqaMvFqwn9RmgjSj%2FAiB9gdcOfw4IoTwP8QsQM%2F3SMzUUxxaJ2XiWmkN7t8r%2FaA4&X-Amz-Signature=ec99a459dc3d29212387e53842307220fde09a6b3cee50a42d1bef0b3a8c9cff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U67KJ4E%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFCpJ%2F1s0QTnrosfFAG6eFL7q1%2FAJ%2FKOJpYWWWw9uULXAiEAlDp4IJnUULHM8%2Fusd9Z50dunSV8r3R2NtRsk7j0EVwUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKKNM5uqIgIDaPS2gircAxo6FvuEystkEGFB9yh%2F4GnQM5NGWOYNjAZp2X3NbyoFOV2g3oyJqkSF1vaQ4etZZIHF%2BvfXFMwS8me2cZg6mL1YNl%2Fronp234ecagRKaq8y9SFIs7MYdw9yG4DIdbR7B7MkGWpl1pW856SjtaoUS%2BZaagJhO4gTxlg02qVFiWfZVMkG7cC7qg2WYTJbbJxJsr%2B9H%2Bwkv7YSjXFhJEEA4PWA2955W9e1ypUkWOrXuXTF71JT9Mk3cWnJYbRG%2Bkh4NXaTD7uE5hL11tu9tAO9C%2FIFGX4QMfigIyVk2HfTgsKgqfeD6DXm3248Kb0t4lJYHNyeHpfJ3kQ8ZfP%2FhP5BTef6hA0yPXUe3r3T7siifsLAkwMS%2BUCbsnMQ37vJQ3pwxy%2B77vSWv1duaFAR5TR9ei25PxTJNWEq%2F4ZCH5UAfTBCM3Xxvnv5vL4givVh2DbC%2FayjgKTl0guKNF7SSmGNac2zd2JwfE2UxX%2F5e1oRv58PQPfcIVEYCJvu1pcNPdVI6dL%2Fz2o7Lziy6jNIvEmmSCLXsm8T%2FTKKhjHlpUtAxKjZk3kxNCHKk23dE6OwhenuMhurqh2tUrweIwU%2BtnbaHd9H%2BL%2B4UemcVgbXxz4BcJQpjLFLdI%2B39tOD8bR0MOqC9L0GOqUB8nrurhT4RvQIWOu2Votdafks41O7Dx9h5A8FlRVPN25569PAytwA49B2miUIfr%2F0OUbZoxOdk4JYm6FFzVTCVRfT7SoFeOjGOMEyoe1uLflxgbx9OmbjWSjMq9nAKCTAZ1LX4LqKewPmEt6rvcY%2FHIUfsMxs2H1ZuQuPeDba7ulpPkl99TL11uV9cBZuy7OvEjXnuYs3sABkU6Wmms82h3x326Tn&X-Amz-Signature=8cc47daf22a8594564cd9dc2e82ee83c962ccb120f423e2ec8fed39d3dec7ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NKZ2WKQ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDoEvWIUGRwWfxPzyChrA3SX2%2B8Ua08HHLJcUPGoFV8JgIgVwmfiI5z5J80ZZ%2BIY275Ba4qjo%2BsM3D7M1MHMvyQRkIq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDjGM6HnPWZWM%2FiGmyrcA125R0yL95GCKoVOhic8bcrcO8rvpbUCxD%2F7pFEiklzE3hlqhXShkC3CLbVfGJkpVXMgMTaFsCVQnTWsptYPy1ipXxFBAv4NXcNGd9mllj1fpCK1wIadOrw8xi4Xf2WpR5Q1lNCSZwywNAWZnc8ro%2FBeVsrxQlpN%2Bbfk%2F9R%2F8Q1rCT%2FkOIia%2BcmegjJP4CHrBLJDtPMc4jWy1XkLcvAZsHq%2BBjSEuw9v5WZns77Mo3rY9eZvLjcixcYw2xFVXcv0CsJ8Qnqk0enWzb%2BwWVvurWRhaQFGAdXQ%2Fo3Xmnx915AdsZGnrZcpHQDF3QcSPl5UVQzPlEtsBrMTfMAkXKyDQf13usmfLsO4ST5ApfGzfzRtuN7Imm6Hxbir4Y%2BB9cqRbGWXiXa3iNRsbWhDvh9AifPiZB9f8SUDRoFKMfhGCq9YtUs%2BeX2QIAmNNp1VACVwKakdg3HMPG7MXpxfseixii1M2pCWqWbpiXvb6sXLGchOYhrUES3bVTSfqukP%2BwiV%2B8CjsvcwJj5I3k4ZvlrzPbYPERnING9Qe1BjPBQ3Z7fCsaGQ%2BTFseK5imMplaNojW0t1KnbudDVQRZBXRrnO3lYcqH3opG8E9Q%2BcXhghqzYDHHRy4hvyopEwPYpzMOWC9L0GOqUBe6Zh0%2FhseAdWw1HimHeppGFf4j%2B0dKS3tjQbm%2FzbE0w5qhC0xwlBlI7FtAC28jmHCQ32%2BNVEdO2IFiXpMZE4sNmxKlKdN1G8KJfu7JkDuwH1Y%2FGQRIxCyibyWuXMBvN7lhtqJSBGq0QAW0iCYnFGPEaivaQUrVgaPNckMGlRHitUlyIpqiIdIq9G%2FOVOAU%2BSxzvamWtNPApiC8nm4BAnAQ5lUoqF&X-Amz-Signature=ef02dc1ad8863f5ffac473eda07ff158c68e167b4e6a1138d5bb45313dc6b646&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
