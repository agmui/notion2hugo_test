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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EPP4EM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJEGou%2FXn8zpOnDXXi%2Fgd0PsaOI15g5hGllzgssUSfRAiEAnX7MEBBjquI8m0vgxfPXJulHv70EWAMleZXyLjnxcs8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHWahdFrJIZDayhdxircA7kuIhrDh0TFBbboFUTjv3xh7bor3jZStwvB1sNCQ%2F2ZG2P8CQ%2F6sa7ywk22ZI%2FJFB8%2BKbzIBpCh3Msmx%2FJ2rdm5d4CA7rUqy77oWOOI%2FNUdYZXZ09UBTH34JwRYRTHXa30JqlodAKqfRVjt1gx2j11%2FYOjLA97pC89c8soJwbyXUQL8zNAjAVDItoaF5PX4rO1vm5DfKi8V89N3OvJW71sooAV3pmvHx5A%2FILM2H4Lq4%2FaJjNrZC5wMFdfiyJxkE7%2FG5q%2BVwLCwczZYA5fhqYdYNUi3MHCVlUiSkcwrj4IJPvFRj88dQuLloGiwVrUIIAVzdMGdYk%2F9Tng7u7LYWlrAfBBeBT3ulazmBvTD47Q%2FwXMNxQ3%2FVp%2FNekef88jtwwMM9w%2Ft1d5w7uowLiTBLQwLBIg6r6TUgw%2FbqozhcO6Hmzd6pF67owAm5GoGfub1t5r2p2pfuoLSqUOC67ysFy%2BQeM5tcHGJvxm6eE%2FKQjhqZ9dQIcLKWKtCLEhhge9a2ism7d7mXRrr4JFA30NOp1PYFbMrLAGdR62LQo0Y1aFAmAtqiY0Axb86PrmvlDm9JLgxs4jSypIk6jiK48SyJui5obdqEK%2F3C3R0S0Ns9kv%2FZiAV6VSutpt8mCa3MMaji78GOqUBXD5dbnzRNY1RUGaqmB3P9P%2B2Gl%2FA%2FDPrWhZuc%2BtZJwYwEpPBpU%2FWUBxeRbCqnA29UwI3FORZ0Yh4vZTOlPIwJc972Thu406wi8HCHKpnmrIs6DX12aKHqFrlBiSQ0Z1Nhi8NjZW6qe24PCxWS%2ByUyCn4vHaX2dG08TRUvvDkG1P%2FddDdPigf7htFOZo%2FRPOjqNoj7QlO9nuWToFViYv6JdYeeRZV&X-Amz-Signature=83029e1810f5ae8ba1a79336b2d2b2d2f7e570df50893c46a883e66066d9d38b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EPP4EM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJEGou%2FXn8zpOnDXXi%2Fgd0PsaOI15g5hGllzgssUSfRAiEAnX7MEBBjquI8m0vgxfPXJulHv70EWAMleZXyLjnxcs8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHWahdFrJIZDayhdxircA7kuIhrDh0TFBbboFUTjv3xh7bor3jZStwvB1sNCQ%2F2ZG2P8CQ%2F6sa7ywk22ZI%2FJFB8%2BKbzIBpCh3Msmx%2FJ2rdm5d4CA7rUqy77oWOOI%2FNUdYZXZ09UBTH34JwRYRTHXa30JqlodAKqfRVjt1gx2j11%2FYOjLA97pC89c8soJwbyXUQL8zNAjAVDItoaF5PX4rO1vm5DfKi8V89N3OvJW71sooAV3pmvHx5A%2FILM2H4Lq4%2FaJjNrZC5wMFdfiyJxkE7%2FG5q%2BVwLCwczZYA5fhqYdYNUi3MHCVlUiSkcwrj4IJPvFRj88dQuLloGiwVrUIIAVzdMGdYk%2F9Tng7u7LYWlrAfBBeBT3ulazmBvTD47Q%2FwXMNxQ3%2FVp%2FNekef88jtwwMM9w%2Ft1d5w7uowLiTBLQwLBIg6r6TUgw%2FbqozhcO6Hmzd6pF67owAm5GoGfub1t5r2p2pfuoLSqUOC67ysFy%2BQeM5tcHGJvxm6eE%2FKQjhqZ9dQIcLKWKtCLEhhge9a2ism7d7mXRrr4JFA30NOp1PYFbMrLAGdR62LQo0Y1aFAmAtqiY0Axb86PrmvlDm9JLgxs4jSypIk6jiK48SyJui5obdqEK%2F3C3R0S0Ns9kv%2FZiAV6VSutpt8mCa3MMaji78GOqUBXD5dbnzRNY1RUGaqmB3P9P%2B2Gl%2FA%2FDPrWhZuc%2BtZJwYwEpPBpU%2FWUBxeRbCqnA29UwI3FORZ0Yh4vZTOlPIwJc972Thu406wi8HCHKpnmrIs6DX12aKHqFrlBiSQ0Z1Nhi8NjZW6qe24PCxWS%2ByUyCn4vHaX2dG08TRUvvDkG1P%2FddDdPigf7htFOZo%2FRPOjqNoj7QlO9nuWToFViYv6JdYeeRZV&X-Amz-Signature=a183806c430098f5755c7dfc8d1865d232c5389b12c8897ddd9f65c45db18bdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OO24GOQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhQpyszXOJUBbFOFeLi%2BHQ544I33xttdwuIrclDpnXrAiEAkHBFiHpNPJHRrW8loePme%2B0cAejcAFDc5Z11v%2FRBX4gq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDGHIy5e214H3w3%2B0DircA4TvwxiCUbnEdnx3qXCzgMB6U6uZlSrPIDtj%2FywIHFBtBaJT11uZH%2FZ%2F6%2BUjtJCPAgVgspZPccx3iAwHJZgEekWHolJlKuIJtm1u0lnHCpWhGP3ShRCuXcTy1LrrYgZ%2BZ%2Fs6LyuyUVxUt%2FgFes9bS4NftrVAaxMMNGM%2Fmn1WHWd%2FXyMiPG5a2DY0BHDdSXhTW9Zy7yhUEELkMP3ou4RfBLRTZKq%2F1DjqjfISMM5BReJTFzQRHKKA4SRN9bZvLotd%2BpTOVJu5V6idU4Vz01fRHTJPTjwk5cxrrS5BiD0wAfZ9tZJTqLhKF%2BdXkFzuAAy6%2FznwiM8cF9rQ0CzCEh%2ByyXeHQpO1omJY7%2FLgWSIHc4or%2FfJfgg2Pf9fKSo1qe4Xc1mL%2BshFWM37STPKQ4enMfv2tVtMDthPiIVqPkdz4wxJfWV4N3oGLVbL7WGjLmW1qlnQeVVuOJJAhmTR708mlvvZFxjoOUgQ6V0QKZ2EBderwG1MweW8VOy0cTaA%2BfE%2FAipIevte1n37p2aWnkbzJhoWbiRFYhqQM2zi5MIzKJ8rJx4emEa852BuhSxDNarj9dycqvRqJAapqx62N2oSDl03LJeQv5JNqw%2BQEH4LLKr6QcM5zPTy%2F6ABPkdrNMPeji78GOqUBCb7d2s%2FlCezjRiRjEcq8TkPbJxbEmG1fTCKsIlmu8Nk4kiME3s6Df%2BBZKFuTFMk1b%2FXqHiF2gk80qSbiwSfell55o9HO%2FPcvb8O6j63mjqQj4Pft%2Bbgz4QRKYF6jTdL5vqDKwGhd6kwqzvtwUtGl961bfO%2FmLZR7PVbz0Qh6p3EVXjgQDdMhYC0bEPSKf%2BQuX6UdJs6fRHtdBG8VE%2B%2B7H2Y50YD1&X-Amz-Signature=3635aa9766eb1265f78a2c610774b4c2a8e6ad93ec0e9270865152312ba60c03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VUOF3RU%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHER%2BdxXRs9gJIbKOGqrUW6eZ3xbL9dP7yW%2FaMyjOL5wIhAKUybyXxGkNcaG7t1eJSPkjylPoszaW3YZRRv4Jg2kZ0Kv8DCBkQABoMNjM3NDIzMTgzODA1IgxpKTQfP1TzkYmMDKsq3AMN%2BP4LG6UMExUhAsEWiUe%2B8XqDCKcP%2FpjAa6ibTvNcsQdVJLE3nBNJF84yclY64s5n61j2sPBiKx3rjnILjjuoL20aHHz5dmyRtyblkYxSWOjZQJM9Uk1i2Hw6JJInJiG3aweINYydCMKaRMQvNNrFYwQ3UvezauxR%2FHltPOtc6hZZDNoSzvhh7MipGRqXu5%2BHhDRekUcS566EJU5l3P74KWTOG8o1QogyPdPb%2FIaz6cKOaoKIOYSRYkftmF6ckPnmp%2Br5JMNv8wDMCbnmrXTqf0JXmwXSWqqVGdHXQZo6QL71Wf4Ew6ujxg0yzYYRHdaYdcNPznN8ioX%2FM5Uifq%2B2TJKg%2Fy%2B%2FO1K7HUkFqi67Y5pl0lW%2BYryQEFHFmGV9R38PyMR2jjMjwC1l4nphLVEqGggCvY%2B0J%2BDsFqibrLo%2BFFzgYeL0ArYeGtR0147SpqO%2BoAI8LE59WEyx00tckK8dkzRzCOEuoghmW6rjALHxejUDApiknyEcDDehrVDu%2FR61k9wgfvbb2GcovnzV%2F7PLAxWa2nFfWee88uIJ0TccHxzxzj5I9kuHKl%2FfQ0Kevr2DjzR0zd1TmLM8NcGbUtaFrBn%2Fe2TaFX2fRkThiJYghYF5A%2FWa1PX8UrgWMDCDpIu%2FBjqkAWi3ywPlp77eYGVhS%2FL2HSFqFcwmNl4CP%2FH3QHWjPNm2Tjx7e75k29tWeRPI6V8zmW1vrUknyt4eXLCYzH4tAsErUauZnGxHnFAmhiuFuAeNTmHyurMKB%2B%2B1GN9Nsgn6vHusyeT21w1PTtpjhc6LifLx7O0sh9ZOYXh567l3Q1Si8j5bjtE%2B2e1stDNltp3RUStPwJz7ibylMPREWgz9ogfHqIax&X-Amz-Signature=76ba276a4336566e49eaff927cb9250003f3d743bf213fe53999898747fc3aac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EPP4EM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJEGou%2FXn8zpOnDXXi%2Fgd0PsaOI15g5hGllzgssUSfRAiEAnX7MEBBjquI8m0vgxfPXJulHv70EWAMleZXyLjnxcs8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHWahdFrJIZDayhdxircA7kuIhrDh0TFBbboFUTjv3xh7bor3jZStwvB1sNCQ%2F2ZG2P8CQ%2F6sa7ywk22ZI%2FJFB8%2BKbzIBpCh3Msmx%2FJ2rdm5d4CA7rUqy77oWOOI%2FNUdYZXZ09UBTH34JwRYRTHXa30JqlodAKqfRVjt1gx2j11%2FYOjLA97pC89c8soJwbyXUQL8zNAjAVDItoaF5PX4rO1vm5DfKi8V89N3OvJW71sooAV3pmvHx5A%2FILM2H4Lq4%2FaJjNrZC5wMFdfiyJxkE7%2FG5q%2BVwLCwczZYA5fhqYdYNUi3MHCVlUiSkcwrj4IJPvFRj88dQuLloGiwVrUIIAVzdMGdYk%2F9Tng7u7LYWlrAfBBeBT3ulazmBvTD47Q%2FwXMNxQ3%2FVp%2FNekef88jtwwMM9w%2Ft1d5w7uowLiTBLQwLBIg6r6TUgw%2FbqozhcO6Hmzd6pF67owAm5GoGfub1t5r2p2pfuoLSqUOC67ysFy%2BQeM5tcHGJvxm6eE%2FKQjhqZ9dQIcLKWKtCLEhhge9a2ism7d7mXRrr4JFA30NOp1PYFbMrLAGdR62LQo0Y1aFAmAtqiY0Axb86PrmvlDm9JLgxs4jSypIk6jiK48SyJui5obdqEK%2F3C3R0S0Ns9kv%2FZiAV6VSutpt8mCa3MMaji78GOqUBXD5dbnzRNY1RUGaqmB3P9P%2B2Gl%2FA%2FDPrWhZuc%2BtZJwYwEpPBpU%2FWUBxeRbCqnA29UwI3FORZ0Yh4vZTOlPIwJc972Thu406wi8HCHKpnmrIs6DX12aKHqFrlBiSQ0Z1Nhi8NjZW6qe24PCxWS%2ByUyCn4vHaX2dG08TRUvvDkG1P%2FddDdPigf7htFOZo%2FRPOjqNoj7QlO9nuWToFViYv6JdYeeRZV&X-Amz-Signature=3693a74aa4c4ecc638344a2d8eaab677d6a5d7e6fece8a98346559971a88be6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
