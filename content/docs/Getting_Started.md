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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG322ZNV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDogxSMIKKKtQOB%2F9QHijO82yO9yIfvOXrGYhvezkChgAiEAqU%2F%2BrXzX20tJ0lGSajh2LTzxqOZm59xM%2Bu2MWhc3JW4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFfNuuqWeLp4uv0GVSrcA1NTCJPPn0krIY%2FViCzSj%2Fo3shS9WCOxZ1ktHOU3SOajyZQG3RBEGQ%2Bf%2BHS8TkndPSYSdm3ePalUkxS%2Fu8APMlCfQ82mNaqsIHoYuE3ZUgy%2BEPsVzKYFD3ottuLTAzV9ioKU9GDCjPmeQSNLCKyO3RxzXyaQaDtjOlLW7EttNUxrlxEtAjkpZVAL3dFlK7lsDOVRzCyaTsbdOQkfmbYhcW4xaQkVbFbyPzqbRn%2F66wa6Yetz3zo8%2FS%2FI%2FJXUBBVWZNhzp4Mt039HWg6rMZhK7ihb13IXXONYDQQrkJuRySfiPxOL%2B%2BpQFhsp8FpkQ0LQasv0JL%2FyOObUqLwA%2Bm%2FUWY6Y6R6z0y9ENc5hwqtIlDvc2koRrcFOBMbP0lruBLSKu6%2B6WN9n8HuKCpxPjmCUyweREz7rO9Vi3Tk%2F7T%2B85vLxXwiVyg8xJrDfHDpSkYBupKA67v2U8jjbDgtbRFnni8KxRpa0VsH8aFs5RvqwJueEwVZjKJE7er6jsgQnV46%2BlYBoEKS%2FvDLsPY1w6tqS3Jt0HjBybssmSD10lRuDCnIXTEoLR7wR%2FTftGPJ7g%2BL8uizMMAbhLTViqAVAkiQNoWiW9WJwb1DA9uXyrCuaZLrQNfiO%2FuEuKjHLQEQ8MKzNmL8GOqUBLy2vvJhgVU0T3ttFc8RCDNAaT6I7PQghDkYz1RrFGk3lV9YqTeAen%2Bavgz0DeOza8Fy0LPrzu1UJaVtj%2FZRKWwC9N3lnVzjFeUN2HgdchImBV4kqPsCDKgrEnOWvQQsZ3IZKJjyEjl%2FQSXqhyEAq%2BgjSZStvwRPFOv6Hdu7OuCaSPpnmPoadtMaYDPiX3zmTdqsNmHgd9%2B2wBmePDPvJHoUdoTeX&X-Amz-Signature=821e95ccc891943c81e5e4a451c7e619d0784ae1bf6c4ffebafc335c332ed37a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG322ZNV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDogxSMIKKKtQOB%2F9QHijO82yO9yIfvOXrGYhvezkChgAiEAqU%2F%2BrXzX20tJ0lGSajh2LTzxqOZm59xM%2Bu2MWhc3JW4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFfNuuqWeLp4uv0GVSrcA1NTCJPPn0krIY%2FViCzSj%2Fo3shS9WCOxZ1ktHOU3SOajyZQG3RBEGQ%2Bf%2BHS8TkndPSYSdm3ePalUkxS%2Fu8APMlCfQ82mNaqsIHoYuE3ZUgy%2BEPsVzKYFD3ottuLTAzV9ioKU9GDCjPmeQSNLCKyO3RxzXyaQaDtjOlLW7EttNUxrlxEtAjkpZVAL3dFlK7lsDOVRzCyaTsbdOQkfmbYhcW4xaQkVbFbyPzqbRn%2F66wa6Yetz3zo8%2FS%2FI%2FJXUBBVWZNhzp4Mt039HWg6rMZhK7ihb13IXXONYDQQrkJuRySfiPxOL%2B%2BpQFhsp8FpkQ0LQasv0JL%2FyOObUqLwA%2Bm%2FUWY6Y6R6z0y9ENc5hwqtIlDvc2koRrcFOBMbP0lruBLSKu6%2B6WN9n8HuKCpxPjmCUyweREz7rO9Vi3Tk%2F7T%2B85vLxXwiVyg8xJrDfHDpSkYBupKA67v2U8jjbDgtbRFnni8KxRpa0VsH8aFs5RvqwJueEwVZjKJE7er6jsgQnV46%2BlYBoEKS%2FvDLsPY1w6tqS3Jt0HjBybssmSD10lRuDCnIXTEoLR7wR%2FTftGPJ7g%2BL8uizMMAbhLTViqAVAkiQNoWiW9WJwb1DA9uXyrCuaZLrQNfiO%2FuEuKjHLQEQ8MKzNmL8GOqUBLy2vvJhgVU0T3ttFc8RCDNAaT6I7PQghDkYz1RrFGk3lV9YqTeAen%2Bavgz0DeOza8Fy0LPrzu1UJaVtj%2FZRKWwC9N3lnVzjFeUN2HgdchImBV4kqPsCDKgrEnOWvQQsZ3IZKJjyEjl%2FQSXqhyEAq%2BgjSZStvwRPFOv6Hdu7OuCaSPpnmPoadtMaYDPiX3zmTdqsNmHgd9%2B2wBmePDPvJHoUdoTeX&X-Amz-Signature=4a6f413f9bef4d9ea959a02495bf085fc177678dec7e353879cfb42a54c769fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XIAHSOY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxqEH2Z3BECP5ym829gLGBfb%2Fu8Ny9aY4rz7pOAODc1AIgEiYXcANVrAT1iYNHGAMU4yGxdr5xI2EesXiySKs%2FUhUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPsqGw4AtTEX0TRU%2BSrcA0CwVc5ZGdZmv2CVbzDCRqrV0yzwTa%2FnbatVQdSPSUOzGQva4rJ0jfhF5cEufBcMhCjcxHNbNqwU2iHKHO5jgObXtNWLlx2r0eTiWd%2FSgW0btoGNdh0Hul7gHzQ4MKjUUGOx1uWobCyaPQTSxtTP62tntmr0Qbet%2B%2BiCax4Ozfp0xnkYdd1pqcXC4P4wutMeVrGzjr1z3uqwrSfcn7F%2BvcO1e%2BZkVQmIdILyJQSFnzEsbTyM01GVGFa7Ts%2BFUSL0nPE0QwLlEn2KbCWtNXjbhVSlUhLTNyeNSS%2Ftligjjsc5as426Q0Vrzi0073GW5zSTxl98B%2FhAaBWUwjeCPOsCVMMGgilPtF7mKRjNKLPhf6noIWS33q1DzrrdKm6%2BdMNF9slk0OlfN0gbkViomIdhe2aHjP07WqvEZ8lo44EUy%2BjXiG8aAzBlgVu02AE3JON%2Fsusb8IMTUOk96X6tuqbByJGic%2FZgLcsk6h27XUypreN76Sm5VT1Zm2W5L3eRAAGIiGkkXlEp0Xkapc919ao2GS7knzn0rwwoBQd3pI86vJlHx6a7jJnVMb%2BBrbcfPrqTWjg2p2U66BifS13z%2FZKoMK8OfkSMWF23%2FLvJ1okLsVLISBPwUFGyxP6RnozMIfMmL8GOqUBmaaTSrCn9G3NarUATCrUojaX%2BzCoTWWT8YU0ez9cEUDs8jLz2SaDc9qRXYcO9byF7egrK3AeyaG1kfeUYBeStEugqAp%2FgsOZiZ49jH%2BxdqkuuNZTvJY6pMohuDGzc3cFiSpTHo90jM9v1SNypHJAJSjP171gVneesO5htFR9y%2BplBlgpVMgiL1OHjTkLkSix%2BD%2BS5lPYd5k%2BLkv2hyndTRz6hbMw&X-Amz-Signature=a93a040c6b8e7a624b3bad259cb9821cd209ce0576547673dcd59fd1341a8dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4I3NXS%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF9ZQBrwkpwBTmSQ8u6uGgKMkAojJFJinOZL6jXqD4IxAiEA0LGpUMEoUyBDHrriIZIxL%2BUGSBpSpjCZlx66n2PluCYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPsIeoTFyv2FOS3qsCrcAyQN0klOcSo28d%2Fge6xtYtvvP7u1Yakp9UQZNny1FlFESp%2FbSfi%2FTXeeSHgseHfzdqZlP5STIwxS%2FAsnPH2h2TTAkWDAQ5GExMWaUxhkUFG1bJKv1VqV2ZtVwbTovo9eGhSEUc21TCL9hX9UX4FW6g8JBlX7VrI8VtjYWpwytJ5J8m5Ijg49J1bzJ%2FhOiQfAGGEJI%2BBnLyROFeI3aApTsy04CfllhiWhP8D1m4%2BzfrkCAcytmXHclPIHRM1gG4XQqOuT5NZRyu8Ee7yji3EXUcCbpOyN2hNULmewvHkNtSIByG90HxP3xqRB8ts%2FBzG%2BFj%2Fp%2FmfrY%2FlcHMK8u%2Fzq8Y5dJHheKExfRs7Eg969Ku50%2BQ%2BZshYNPP0NpBhyDLgZzcYm6a4D40oji3BZxrdvRMRWWflK5zZTXWWPxDNeRIj%2F4CXGZAcIZNUvBPaIZjXTbfTlz%2B%2B3MASLJotVvDErR1pMh%2FPlIwK3RIrJxsxDb3EcHeK9o3e83mB7ZCG%2BT0EvsOxGy2Qu%2FfN%2F4hJkkpW%2BE91wXXcjgDSc7m8aQYOib%2Fwf7SS09NcFgotd8IFwi2vgjNgAnUb8qcTGn3QgzxRDD4iLmzsSJNC2yaPdGKuzprii0duilB7gX02FRVy4MInMmL8GOqUBOGmbMWlOq4vfppF16wQKVEpFpROWWkpLF0UO0n4%2Fsp8Vu37CnwndBALK72A4EiZ3fxtGoxIbqdHNe0CIwhZ6js%2F0H0fTlEyJaBf7aI9W5yoa9tAqRE1oJk2ivc%2F2BiP%2BilI2Gdasciab1G2s%2FzY8F0agdIT4%2FOuvwByOM0Tx59cJ50UBbC5SvLi9V6omJUK1GN2z7s8%2BkMZA6FnP%2FhmFqk2kjfX7&X-Amz-Signature=d4c3919e61df93e4795b784f14b9bd4352f30121394f3a718e6c91b03b0a4b24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG322ZNV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDogxSMIKKKtQOB%2F9QHijO82yO9yIfvOXrGYhvezkChgAiEAqU%2F%2BrXzX20tJ0lGSajh2LTzxqOZm59xM%2Bu2MWhc3JW4q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFfNuuqWeLp4uv0GVSrcA1NTCJPPn0krIY%2FViCzSj%2Fo3shS9WCOxZ1ktHOU3SOajyZQG3RBEGQ%2Bf%2BHS8TkndPSYSdm3ePalUkxS%2Fu8APMlCfQ82mNaqsIHoYuE3ZUgy%2BEPsVzKYFD3ottuLTAzV9ioKU9GDCjPmeQSNLCKyO3RxzXyaQaDtjOlLW7EttNUxrlxEtAjkpZVAL3dFlK7lsDOVRzCyaTsbdOQkfmbYhcW4xaQkVbFbyPzqbRn%2F66wa6Yetz3zo8%2FS%2FI%2FJXUBBVWZNhzp4Mt039HWg6rMZhK7ihb13IXXONYDQQrkJuRySfiPxOL%2B%2BpQFhsp8FpkQ0LQasv0JL%2FyOObUqLwA%2Bm%2FUWY6Y6R6z0y9ENc5hwqtIlDvc2koRrcFOBMbP0lruBLSKu6%2B6WN9n8HuKCpxPjmCUyweREz7rO9Vi3Tk%2F7T%2B85vLxXwiVyg8xJrDfHDpSkYBupKA67v2U8jjbDgtbRFnni8KxRpa0VsH8aFs5RvqwJueEwVZjKJE7er6jsgQnV46%2BlYBoEKS%2FvDLsPY1w6tqS3Jt0HjBybssmSD10lRuDCnIXTEoLR7wR%2FTftGPJ7g%2BL8uizMMAbhLTViqAVAkiQNoWiW9WJwb1DA9uXyrCuaZLrQNfiO%2FuEuKjHLQEQ8MKzNmL8GOqUBLy2vvJhgVU0T3ttFc8RCDNAaT6I7PQghDkYz1RrFGk3lV9YqTeAen%2Bavgz0DeOza8Fy0LPrzu1UJaVtj%2FZRKWwC9N3lnVzjFeUN2HgdchImBV4kqPsCDKgrEnOWvQQsZ3IZKJjyEjl%2FQSXqhyEAq%2BgjSZStvwRPFOv6Hdu7OuCaSPpnmPoadtMaYDPiX3zmTdqsNmHgd9%2B2wBmePDPvJHoUdoTeX&X-Amz-Signature=e3545de7955a1427fdaf85267902d7a235dd77b0257c497d059e4e64ecf70f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
