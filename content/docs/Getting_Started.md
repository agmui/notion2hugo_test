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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQFUHDI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFUFv99J3y2mYHtvcpwi1zfblP1QLrbNsbwP%2FBAwKHK2AiEA8WAwwABYY43QqaljPa7trn5Hg87Qb5DUUoqEwb9EEX4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDlAZGUqRzaU28xmdCrcA2apMN5uTwzQ3KzFrdj4qEu%2BFzbhcSJxQpCo2ppRS5wcSq0Almcwy6JPOTSTRH3FkCq6JznsBrup7wiZ2x4Gf%2F6bd%2BMeNw61ygr5OIjd6D%2BbglxM%2FRGIm0Pe54IeEsUqf%2BdP8FhGhe6uQQmP0H2oljMYvOHxRqrTEm5S9JaCSrPPqr%2Fykfvf1JH96gH4TsgGTnlDKQ5Q3ZLA9kKVTDjFnwZukqizWDYaF6b9gpYwMxmqm6%2FhHcVHjudUSPjbLje06Hce5BO%2Fdte1cJbGYT3IOs4kSvG%2FPDTnqCiHVtccs%2BfCX0j%2B8ErCo5ZLxcvapyiL%2F0iSphOio%2FppK1gNCg0fqimwZ7i2sD1RzayM706if5YG66ZT6Nx4PfAxLjdAEBD6V8buwJntWoc4j6ovBct8UmLnMJva7jsdVEMWkMjFptYgMxi3f5Ka3vqbXtV%2F6ncHFBqo56p2iEzct%2FDM6zRmJgpdSrC%2FZrLGv%2F44FaAbvAgF%2FvUx830Id28ClIP6j6y6krJeC1V0QbHBdFsYPX0DsYd7FBkY%2BMUa%2F8cZg7hG5p3PrZ42T%2Ffo2Y%2BzL81D5%2Bw8Qn%2F1xEzUtR7FTed5IhDjWjqrVHk5KN3Gd0TpmTBaRWMgT1E%2FRCnB4Rc51wJkMOnmxL0GOqUB0wojKJOUW05O5ZCEoU6ohuHKIDRDRllvYO64CelKDXJcTzG%2FWjm9w1T%2BiK1LibMk8hj5%2BI%2Fb7w2KN6AyToQ%2BovZQyBm%2BliO4QVqfcKL019GBLFPcSiNcQ1PRkoEwB2uNfeln30H756ZwgDSVVxbk4XVuMjcF9Ag0iXWBsiVksz12deB%2FtKiBE%2Fxbf%2F%2Fzx1jw3BOOyDeBhRZExj9WeuknoddR4IBv&X-Amz-Signature=0e1b6357178151d055931663551f6fcf6725fd3a8c451438adabdb7bf1e60e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQFUHDI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFUFv99J3y2mYHtvcpwi1zfblP1QLrbNsbwP%2FBAwKHK2AiEA8WAwwABYY43QqaljPa7trn5Hg87Qb5DUUoqEwb9EEX4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDlAZGUqRzaU28xmdCrcA2apMN5uTwzQ3KzFrdj4qEu%2BFzbhcSJxQpCo2ppRS5wcSq0Almcwy6JPOTSTRH3FkCq6JznsBrup7wiZ2x4Gf%2F6bd%2BMeNw61ygr5OIjd6D%2BbglxM%2FRGIm0Pe54IeEsUqf%2BdP8FhGhe6uQQmP0H2oljMYvOHxRqrTEm5S9JaCSrPPqr%2Fykfvf1JH96gH4TsgGTnlDKQ5Q3ZLA9kKVTDjFnwZukqizWDYaF6b9gpYwMxmqm6%2FhHcVHjudUSPjbLje06Hce5BO%2Fdte1cJbGYT3IOs4kSvG%2FPDTnqCiHVtccs%2BfCX0j%2B8ErCo5ZLxcvapyiL%2F0iSphOio%2FppK1gNCg0fqimwZ7i2sD1RzayM706if5YG66ZT6Nx4PfAxLjdAEBD6V8buwJntWoc4j6ovBct8UmLnMJva7jsdVEMWkMjFptYgMxi3f5Ka3vqbXtV%2F6ncHFBqo56p2iEzct%2FDM6zRmJgpdSrC%2FZrLGv%2F44FaAbvAgF%2FvUx830Id28ClIP6j6y6krJeC1V0QbHBdFsYPX0DsYd7FBkY%2BMUa%2F8cZg7hG5p3PrZ42T%2Ffo2Y%2BzL81D5%2Bw8Qn%2F1xEzUtR7FTed5IhDjWjqrVHk5KN3Gd0TpmTBaRWMgT1E%2FRCnB4Rc51wJkMOnmxL0GOqUB0wojKJOUW05O5ZCEoU6ohuHKIDRDRllvYO64CelKDXJcTzG%2FWjm9w1T%2BiK1LibMk8hj5%2BI%2Fb7w2KN6AyToQ%2BovZQyBm%2BliO4QVqfcKL019GBLFPcSiNcQ1PRkoEwB2uNfeln30H756ZwgDSVVxbk4XVuMjcF9Ag0iXWBsiVksz12deB%2FtKiBE%2Fxbf%2F%2Fzx1jw3BOOyDeBhRZExj9WeuknoddR4IBv&X-Amz-Signature=02fb4792d0970f39a71e7f33cef1a5fc6c9c0e57f7785e1e8f68ca963bbe7fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKKAW36%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEPNguWwQeNiz7ELBxggIljtkKh0gCU7G162G0NfxaphAiBsEJUQDw7hkottOjo8F3M%2BHlc3TSkADYj0LJNYX5h8uSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM1Uv3lr0E7tw0K3wmKtwDCUmDTk7pRr%2B1sD3zVIKYYvZFQktBQWFPFPQrDm0BFAz7GPOy%2ByEMa5y22gpXAMcZL8f8tsj9aASVR97j0TsTiX8m4ceV5qOvHSWrzj19YwpIEQ%2B36L7hi1VxQt%2B6DZ4BTYHMkAnL9yCLTv80wwI9PD%2BkoMlsKPFrGjwLUn0V5LrkWv0jVpHoXSLl5pKaKxgibhAD73rxa7D20xJEC6E%2B8zh4OUREDKi8QuKf7nRei7IVnT5cFnqIuxc2qR48mhbkXytmYCLgCzZJXH%2BE8c5NHCurm8PtMEl0M0ufGiO6%2B4uyGfcmSd1k9%2FUcFk2opcwAHoV9w1f%2FfqJ1UZxvX2JVSO4eT%2BkxuHehZyZNegVHElrxE4mcx4qi6hAuGC0XR0q%2BIv3EVOFfvla%2BvuaOhnRTl3YRzdoZVHy58TrxRG8gouywJv2kZFnt2PvVQ66bAEaJo6kECRqk%2FloSC%2FNuekFQdKWDRJVbwS1In4jkpu2%2Fk%2BSgcvk6hF0MPezv7I5HLQVYl0NW%2BkfxrbWMgcOjanb0KlY81PwSMO7Vj6q5jm2p3XqQMfOfUhdtQx5Dr5O3HzMl32J0nGUljld79WM915AzFVwbdKMrlbKkgjuFuqnoo8nn59yhVaFeBSPbxiIw1ebEvQY6pgFkFEqbf3BeDvNLDBx53iZ%2FB7u3mMXyNWrtIIioWqRt660nBd1Nmgf%2BzOqOHYRkjF3GGEhXtpza3dUNYD58UdsAl71qGOCuznbhqPN2NFRNCy43iVR1jkBslFjqkaD65mKaCgigCl80epV2%2BzBvM%2FCct50T9salflTCnLdUywqzQdDuVBk2tZn3EHb0Eifk9nrSfSoCN63geKLd8CZt9wiM9fke8U7D&X-Amz-Signature=0e5c7f0542c7d4daeff96d31034a97ac3ef38cc4698e04fd1f8a642839167832&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZNTUKEY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICi3AQ3%2FRy58SL0tQHHr8IqHCPXuSWnGCJaohjw6FfA%2FAiEA7TUnW5lc06rO1dZNo5vDW7jaM8csKuz6LC81R2dq48Eq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDBMEYxwRP0kbNcLtgSrcA%2Bm52JQ4JfvWavYV4tp43bwDl04SLvXvlCj9MArY4lPv4399%2FVUez6cxvBZgOS8HNEKKq8dHVD3M1NZrq4TECJWmanQF3uJxzIOIUB2d1%2Bfo%2BG61GRSPKym2xZRLLGduYYYOjvjxbqLrwnWI3yopPm3%2BDSNqcpSNonSNnObzvNaESU1WIGffIq2bwyP7KHtoWrxZq%2FdhRzOfJY157qnakvJs6tG1e%2B9iFAdh4lpTpZcAyH4%2BJeBkACOZkBiEsjDZTChWEc53SKpz7GCIMQ%2BHOz1kRTCbYDp0KL2rqCpAtm6xSgUwrumfCXAlCI%2FEQyHKSewoqNbQein9GdyatL%2Fy6I69H9YEQ%2BS%2FYPvN73Om3wbNgrRRyLt036JwIFSgyu3uAuhUHk3S55ZvZY5m52saZZbP8zN2Z8dtTIVYBjetkCQHSWULsKViw%2FYcquBMz83QMRCzMg5TOM4C%2BuOc3n4uD3jTt5aPDgPvFsNjOjmxIOYh31umWF7NLoXRFNNQl5S884TbGJtQHHmiyuidOam7kqvZBpk1%2Fm%2BtnyjopB09dDZji3AouwEVhd4kWFb3S6u5RffRUa7MqIHw3FqgiqbTtTtdEegL9YMZE0ufe2TPAs2YwbxbRf0TITaTNlUTMNfmxL0GOqUBZ64D%2F5IL0AO6Bp4ibmCQmJjpHLV5PgHARUhMG8sYIFdTs%2B3aCV852uj6LAHjHt4W%2BTtGDShu98mStGCL49QKKtlz474LuwaVt8p3NHl60aRlenTKJmuF8peDCVqKISCrCOtyQnWg9QvIO90OESHhFBszLqF7msibKY%2F5cvXAXyoNF5tWh0S9m5QwzwYSvp1VJFJgQ%2FfvOq3jai8z34k4AYi2AgWA&X-Amz-Signature=7bf7b4abafbca963275473a4a2184e682e7ef6278f6873387c3fd45b0ef5c308&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJQFUHDI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFUFv99J3y2mYHtvcpwi1zfblP1QLrbNsbwP%2FBAwKHK2AiEA8WAwwABYY43QqaljPa7trn5Hg87Qb5DUUoqEwb9EEX4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDlAZGUqRzaU28xmdCrcA2apMN5uTwzQ3KzFrdj4qEu%2BFzbhcSJxQpCo2ppRS5wcSq0Almcwy6JPOTSTRH3FkCq6JznsBrup7wiZ2x4Gf%2F6bd%2BMeNw61ygr5OIjd6D%2BbglxM%2FRGIm0Pe54IeEsUqf%2BdP8FhGhe6uQQmP0H2oljMYvOHxRqrTEm5S9JaCSrPPqr%2Fykfvf1JH96gH4TsgGTnlDKQ5Q3ZLA9kKVTDjFnwZukqizWDYaF6b9gpYwMxmqm6%2FhHcVHjudUSPjbLje06Hce5BO%2Fdte1cJbGYT3IOs4kSvG%2FPDTnqCiHVtccs%2BfCX0j%2B8ErCo5ZLxcvapyiL%2F0iSphOio%2FppK1gNCg0fqimwZ7i2sD1RzayM706if5YG66ZT6Nx4PfAxLjdAEBD6V8buwJntWoc4j6ovBct8UmLnMJva7jsdVEMWkMjFptYgMxi3f5Ka3vqbXtV%2F6ncHFBqo56p2iEzct%2FDM6zRmJgpdSrC%2FZrLGv%2F44FaAbvAgF%2FvUx830Id28ClIP6j6y6krJeC1V0QbHBdFsYPX0DsYd7FBkY%2BMUa%2F8cZg7hG5p3PrZ42T%2Ffo2Y%2BzL81D5%2Bw8Qn%2F1xEzUtR7FTed5IhDjWjqrVHk5KN3Gd0TpmTBaRWMgT1E%2FRCnB4Rc51wJkMOnmxL0GOqUB0wojKJOUW05O5ZCEoU6ohuHKIDRDRllvYO64CelKDXJcTzG%2FWjm9w1T%2BiK1LibMk8hj5%2BI%2Fb7w2KN6AyToQ%2BovZQyBm%2BliO4QVqfcKL019GBLFPcSiNcQ1PRkoEwB2uNfeln30H756ZwgDSVVxbk4XVuMjcF9Ag0iXWBsiVksz12deB%2FtKiBE%2Fxbf%2F%2Fzx1jw3BOOyDeBhRZExj9WeuknoddR4IBv&X-Amz-Signature=72661de4e2920e3466a4553e67fabc26070cb840536f3ec3caa80b74b19d0ed4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
