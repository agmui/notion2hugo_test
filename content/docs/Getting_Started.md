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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGXR5QS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDXT%2BJ7euUA7FRekYOerAQtZjLTi8QEv%2FS4t60AzQ05dAIgLekFNiz3X%2FSh%2BG2cW1qNLgEyZC3KB8Ek62%2Bx4jZHZH4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJdhiQ8t8IzEQHJSEyrcA8vg4%2Fyzuauy40MBaclMLmQDDNcswoMGAjhl27z9Wl%2FfgWJ7RuEC94VLNqW07NHto%2B9HJsEmWzg%2F36hJNyLzibkf9AOOZOrYX0eVMVIvz9U%2BNlU%2F7gN4FmOcuI7Ir%2F66ROXNZ4sPzXQtcCkwQe5sCSc507Vj%2F7BciwPFyvD6IeVNIza3R9Xh%2Fez2jP1E8r6qO5ov9TIX%2Br9MvBlS5pgI7f1e6tjbW5KfsKjIWDY9FblxDYrrOWuFkWSJ4Wu6MGUesK4rMrfAiRRJYjf8ruLRTYrspzrZ26Kdg0%2BEps3eDG%2BQAOM6MZWVB6z0uV6EOjTqzvU%2BFTscy4GtAEGr9xt334qEqTWFrunQl69%2FybNOB4vF1eYpGKDVVe13RHhs08Out%2B6xgq61fo7E13O3KG%2FOhCrOtOAUWf6FmGVtGYS7pkgK4WDDp%2B7vUsAyAMUjMQXl7zbRsv%2BDSq%2Bs%2F2VNBvsdbQp%2BKND45%2FuxgIzFdYlDmuK3UnWyT18eq28Mkg%2F0VPOSGollK3JAMZxc%2FGjBW2jcjFzHgNW0X5UPYd%2BcajDk%2BGmtQuUCb7zMNXIaLWV8yhK5EhK8BQxrTYomJFYUaAbdfjMvva04D%2Fln%2FZudNnWLMhFArUeGpvqgtfMGZEWoMIvukb0GOqUB9VlXL%2Bfpe1mEj89IbsFqw8DvUgrz6FpbbAi%2Fnh7iSL1pGoDGxKj7Pkk8GHSG504bdkslSPgp7%2Ba8IjW%2FTpFSWxzlN9SJV70NgeRQ%2FnjMq%2FwVqfzKaQ%2B%2F7p4PSspHe4Eh4mpA3DWHsIPiOdgZlguUV7BLCtq6HtBIzJPX4EMGhhamyzcwE3RuuDvNZBS8wN3EWP5WjEw%2B1EOaWHcXS1yjGXk17%2Fx%2B&X-Amz-Signature=de56a3eb48d8897d485f7cae3e1e8e8142db3cebef65ec3334123c2cba95b37e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGXR5QS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDXT%2BJ7euUA7FRekYOerAQtZjLTi8QEv%2FS4t60AzQ05dAIgLekFNiz3X%2FSh%2BG2cW1qNLgEyZC3KB8Ek62%2Bx4jZHZH4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJdhiQ8t8IzEQHJSEyrcA8vg4%2Fyzuauy40MBaclMLmQDDNcswoMGAjhl27z9Wl%2FfgWJ7RuEC94VLNqW07NHto%2B9HJsEmWzg%2F36hJNyLzibkf9AOOZOrYX0eVMVIvz9U%2BNlU%2F7gN4FmOcuI7Ir%2F66ROXNZ4sPzXQtcCkwQe5sCSc507Vj%2F7BciwPFyvD6IeVNIza3R9Xh%2Fez2jP1E8r6qO5ov9TIX%2Br9MvBlS5pgI7f1e6tjbW5KfsKjIWDY9FblxDYrrOWuFkWSJ4Wu6MGUesK4rMrfAiRRJYjf8ruLRTYrspzrZ26Kdg0%2BEps3eDG%2BQAOM6MZWVB6z0uV6EOjTqzvU%2BFTscy4GtAEGr9xt334qEqTWFrunQl69%2FybNOB4vF1eYpGKDVVe13RHhs08Out%2B6xgq61fo7E13O3KG%2FOhCrOtOAUWf6FmGVtGYS7pkgK4WDDp%2B7vUsAyAMUjMQXl7zbRsv%2BDSq%2Bs%2F2VNBvsdbQp%2BKND45%2FuxgIzFdYlDmuK3UnWyT18eq28Mkg%2F0VPOSGollK3JAMZxc%2FGjBW2jcjFzHgNW0X5UPYd%2BcajDk%2BGmtQuUCb7zMNXIaLWV8yhK5EhK8BQxrTYomJFYUaAbdfjMvva04D%2Fln%2FZudNnWLMhFArUeGpvqgtfMGZEWoMIvukb0GOqUB9VlXL%2Bfpe1mEj89IbsFqw8DvUgrz6FpbbAi%2Fnh7iSL1pGoDGxKj7Pkk8GHSG504bdkslSPgp7%2Ba8IjW%2FTpFSWxzlN9SJV70NgeRQ%2FnjMq%2FwVqfzKaQ%2B%2F7p4PSspHe4Eh4mpA3DWHsIPiOdgZlguUV7BLCtq6HtBIzJPX4EMGhhamyzcwE3RuuDvNZBS8wN3EWP5WjEw%2B1EOaWHcXS1yjGXk17%2Fx%2B&X-Amz-Signature=d8f579855e8442a0538457cd34b9c3cb6a838252a1162f0b66d919fa5960c7ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEXXSA4T%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDYUnRmYCWiEqNge7VXIijkTHNa7oIEdqHmP6eg2%2B7wAQIhAJ9Oxevkp5XPI%2B9ZOkjUoBC46Lift3dhTmKKkszZFo91Kv8DCFoQABoMNjM3NDIzMTgzODA1IgwLDIg1IPuYXRNK2dIq3ANmCKc0BGde1K1m7kPEHPZgUnatZ%2BZAArI30ZKRMG4Iu1CNbs5WTc8%2Fce3FMN1Bp7iMsJvWYO2AY5uu8kCL180ddb8m21aRgA6UqcnV6FObddoE1f%2FNxRFHUtLNfEEe2Ns9E3nSR23OloUSFwTA%2Fx1IlDChI71I3WKlO1EOoGrfXz8WmhAQbIpyCNqqcbRAqKM3iSSVRrtiZ44Luw5kJQvQ%2BUBuEGQ1su6Yctw8%2BLY4L28hzd05DG773cq2FPS%2FYIBN03mbR2gIiQKkOtMg9TwDdO5J0Nfv8KcxuKKW5F9gsz8uvxzq%2FAITjYx2ywy9VTozYsq2YTe%2BbCgriL16e98wgGa6mgEgYoCFbG%2FMPn1O2TRqwLUn%2FmosIDP6K8607Mk7eROFJbJWLw7p7FcP%2B6JhKrUkmYHfHd0jIn7CUZwwLEXR93%2Fea1Hn%2F0txRkapOI0T4bohoZCL5Ru%2FfMgCRBZ%2BmTo54lMkbCmyQIHQ9%2B5s2GAhPfnGwAtlEubsbEYOuVdcE5apGu5p7nBYk1p9sR%2F%2F%2BFp%2Br%2BTFSX3vGD%2FBbbORNs74Ymuc83jBEOx2rv2p9uxLi1H5pvlvH2bbUR7MdBcC%2FpdkLKXZF9osNYJFAdg9zlko0efq88S050C71TCS7pG9BjqkAYO%2BioAgnD6gsgFpseiCUnVGVmE2pFB0%2Bn6sdDCCqBN0AAVdQw3CADfuoULIIbsPiMWZ55fPGzu0sNtOYhwPPemVnBLWXkORJj7SjleKrODmz%2Fjo1GXKYhin5BltW%2F368RNgThgp2g1N4JjKYLACXjVeouQQxlFyzd4lCGedh5YvrJMHsrYRBGOXJ9QXoeSt4XtGG3WuPEjeYczjn%2FM7GJFYqy82&X-Amz-Signature=b293120bc5b076734d39b554f4ef2f2814c52a96f03c3d5680212b1ef41fa9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ77HPOD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIA1NooHCKr7OoT2z5bx9%2FKz2LmVHWmazuJSBduYT3rfVAiEA66J3hwK4yX1thHI09Oe%2FVjKe8E%2BBtYTORanHVHaaB6oq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOvU6yOM6Rutw9xZuSrcA%2B%2FOrW0IKT01%2BDk3PpArDOClyQMJXmyga9nsrIjLbJwmtq7fjpz4rqJ1ixbf7uruowVrDJam6uq6rKNutNQjN%2FqWWucMIdD7EtLEZLmPqfvnsdyW9jl0o2EimxCeX2lL%2F59gDrBEzipXEImDKETNZamf9bbeb9sS8pE1n%2BC0d0%2Fe3ZqWhlm3xo3QxMXr1Dt1tKjm8emjWHM45w6r0p2WL6E7GOWEZUjUvTu5pA5BmOoBsYlt5le9pvdx6uYcih3r4wEqFRO2DxxMFDclhzbp%2Bqfmgk83pyhwiIddEn7sk%2FPldWGsHbFyDvgJ6DAvJpGtMcZ%2F5LkEXsfkal9HwbegwOH%2BLcp5lWzempDKXD6zgcQ%2BR8HXCg4LAGz4v4l3Ap%2BhTS1h7NztmSKSdX0djfsimEC9oZIYwaAMOoeU2Ekd6BodXdmI2s%2B8DoDGdgidYwWgP5aY%2Bv%2B3M6WHb34tzPdKSHdRPWW%2BsJseZ7wznUGZ13nJ9bDNwJvK%2F388WikkQcvczQojZLDJI6pMI48dEjgJmN078lQxVVrZ1uVac3Kqqi9FAg2a4fdBzxqe4IcaSS%2B8Kwtvq4fnYuFNf5yIlJTlRMmVYLogw6RLtGA0v65UxADV%2B3gjHXNF0aF6LRs6MNjtkb0GOqUBfWyX4JQKtHKb5V%2FCRfP%2FoUFdoeeZv5Jx3mBF5DdJ0BZ2TIkZ8PUxAsvCv2%2BWE6XDzPlFun%2FMy3YrS5imj3SwxzRaOcwRZt9ZI0syOgtlJ%2BfYCGWBzBPnGMFtraI0eFeBtk2JtUE88rOvQYZBxaTWGWtmWi%2Fz96Oh7Hm2ChIde%2BVsj1%2B5bCEKM8AHX%2B2Kb9jPYCEMveGnhEETqk4XAzPu4zPveoVt&X-Amz-Signature=f24de6a7f933458d5e35c2018ca621f9e557921dd498dab08a3f64ae7f56a927&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHGXR5QS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDXT%2BJ7euUA7FRekYOerAQtZjLTi8QEv%2FS4t60AzQ05dAIgLekFNiz3X%2FSh%2BG2cW1qNLgEyZC3KB8Ek62%2Bx4jZHZH4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJdhiQ8t8IzEQHJSEyrcA8vg4%2Fyzuauy40MBaclMLmQDDNcswoMGAjhl27z9Wl%2FfgWJ7RuEC94VLNqW07NHto%2B9HJsEmWzg%2F36hJNyLzibkf9AOOZOrYX0eVMVIvz9U%2BNlU%2F7gN4FmOcuI7Ir%2F66ROXNZ4sPzXQtcCkwQe5sCSc507Vj%2F7BciwPFyvD6IeVNIza3R9Xh%2Fez2jP1E8r6qO5ov9TIX%2Br9MvBlS5pgI7f1e6tjbW5KfsKjIWDY9FblxDYrrOWuFkWSJ4Wu6MGUesK4rMrfAiRRJYjf8ruLRTYrspzrZ26Kdg0%2BEps3eDG%2BQAOM6MZWVB6z0uV6EOjTqzvU%2BFTscy4GtAEGr9xt334qEqTWFrunQl69%2FybNOB4vF1eYpGKDVVe13RHhs08Out%2B6xgq61fo7E13O3KG%2FOhCrOtOAUWf6FmGVtGYS7pkgK4WDDp%2B7vUsAyAMUjMQXl7zbRsv%2BDSq%2Bs%2F2VNBvsdbQp%2BKND45%2FuxgIzFdYlDmuK3UnWyT18eq28Mkg%2F0VPOSGollK3JAMZxc%2FGjBW2jcjFzHgNW0X5UPYd%2BcajDk%2BGmtQuUCb7zMNXIaLWV8yhK5EhK8BQxrTYomJFYUaAbdfjMvva04D%2Fln%2FZudNnWLMhFArUeGpvqgtfMGZEWoMIvukb0GOqUB9VlXL%2Bfpe1mEj89IbsFqw8DvUgrz6FpbbAi%2Fnh7iSL1pGoDGxKj7Pkk8GHSG504bdkslSPgp7%2Ba8IjW%2FTpFSWxzlN9SJV70NgeRQ%2FnjMq%2FwVqfzKaQ%2B%2F7p4PSspHe4Eh4mpA3DWHsIPiOdgZlguUV7BLCtq6HtBIzJPX4EMGhhamyzcwE3RuuDvNZBS8wN3EWP5WjEw%2B1EOaWHcXS1yjGXk17%2Fx%2B&X-Amz-Signature=d1bbbb76569802a333ce7155b5862718902e6dcfd7a044c7cede40d9e951423d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
