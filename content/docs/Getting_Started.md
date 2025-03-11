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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJUUGDQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDW%2BSTEctKdecLkE%2BexKFMp%2FJJ1xDrH2dlUz3VQDOBdDgIgAw8KJDpz4AToiur6dq3sUvlkbw%2FXTmZ%2BA7jx3yw49L8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6cxQitflpTtbxvYircA3JBUB30%2B7Z4fVeBTJX1gP8eaCIu4kS93h5TUbm%2FWQ%2FX2zQaFzeOqhlZfpQ4sNPwgUyO5cjkzdSA2ANqkXiHFUh4byDg7S%2FIGHDYxQLLs7N3cFKSKoHozMekdfWEjQ9j0jWxF4Gp6WwKEe4StVK2S2jiQ1lt5O4SbzYhDjDBtXpSr2iHpMmxWblvhY9EbtZY%2BOaiU3su1%2BfK7Vv6pPnE6PhdZnlifngfHAf8wA0vAJoWTH9ItiwNOAFcRp22QZn7yKdTik2xWQENhbWcZDMpgBl%2FfC1OZX8PofdHNDOsiwMJfhzPVFgcwcs9XkApdSCpNIV4HL6mnDYd5kBHr1Dz%2BzySofYugt1KDeBeV4Lvn2H%2BhKSve6mj3YlQO8WqZycFJDTDxyBVXoV5Ujopt4chBSVhAbIsoTbfAbw1nwFJKQSPNj2jXL0EfgRDtkRsPWtGvykEt2gYAvpTZp%2Ff1888NYIlj3eQHA1pDPmGZZERUM3d2KXCa3JyIyXQEQvd15aMLkVzDWgtpyvzkSSPhU7Ps8asdQrrnZwbJazf5wLL%2BgKMU7mkRA7t7qNBqSG4zW22Z8mbdpSIglCaK0bALKxINJ8mMtGPiZY6poicrEIPd2BtPHd%2FWC4%2FSM0fkYuGMPHKwL4GOqUBxyRjRT9NKtcvmeMn%2FmoYqdtHc6V13gpiZh1QAVi96xtYMquMbtax3evBBDGyRaPsh2CJ9qqWlKkm%2BtuVLPjBjzD9oJBxDmIF8VIlpmzw7TIxBJ%2BQ0z%2BqUQC%2BU3eTu%2FsJnWCAq6DAt9d5%2Bn8881ABBZAya9WgeXVE%2B%2FbksMc2DJ1Ubk8ziE0l8OUcppsfDDHbhaKkedobrBiumdQGmxoLxw4ptnqs&X-Amz-Signature=4644d6d1d0d777ea4e6078df6cbd10676803eb386b9ec5d223227f1c249d3b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJUUGDQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDW%2BSTEctKdecLkE%2BexKFMp%2FJJ1xDrH2dlUz3VQDOBdDgIgAw8KJDpz4AToiur6dq3sUvlkbw%2FXTmZ%2BA7jx3yw49L8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6cxQitflpTtbxvYircA3JBUB30%2B7Z4fVeBTJX1gP8eaCIu4kS93h5TUbm%2FWQ%2FX2zQaFzeOqhlZfpQ4sNPwgUyO5cjkzdSA2ANqkXiHFUh4byDg7S%2FIGHDYxQLLs7N3cFKSKoHozMekdfWEjQ9j0jWxF4Gp6WwKEe4StVK2S2jiQ1lt5O4SbzYhDjDBtXpSr2iHpMmxWblvhY9EbtZY%2BOaiU3su1%2BfK7Vv6pPnE6PhdZnlifngfHAf8wA0vAJoWTH9ItiwNOAFcRp22QZn7yKdTik2xWQENhbWcZDMpgBl%2FfC1OZX8PofdHNDOsiwMJfhzPVFgcwcs9XkApdSCpNIV4HL6mnDYd5kBHr1Dz%2BzySofYugt1KDeBeV4Lvn2H%2BhKSve6mj3YlQO8WqZycFJDTDxyBVXoV5Ujopt4chBSVhAbIsoTbfAbw1nwFJKQSPNj2jXL0EfgRDtkRsPWtGvykEt2gYAvpTZp%2Ff1888NYIlj3eQHA1pDPmGZZERUM3d2KXCa3JyIyXQEQvd15aMLkVzDWgtpyvzkSSPhU7Ps8asdQrrnZwbJazf5wLL%2BgKMU7mkRA7t7qNBqSG4zW22Z8mbdpSIglCaK0bALKxINJ8mMtGPiZY6poicrEIPd2BtPHd%2FWC4%2FSM0fkYuGMPHKwL4GOqUBxyRjRT9NKtcvmeMn%2FmoYqdtHc6V13gpiZh1QAVi96xtYMquMbtax3evBBDGyRaPsh2CJ9qqWlKkm%2BtuVLPjBjzD9oJBxDmIF8VIlpmzw7TIxBJ%2BQ0z%2BqUQC%2BU3eTu%2FsJnWCAq6DAt9d5%2Bn8881ABBZAya9WgeXVE%2B%2FbksMc2DJ1Ubk8ziE0l8OUcppsfDDHbhaKkedobrBiumdQGmxoLxw4ptnqs&X-Amz-Signature=9425357357cf4e0dd4a146e74fc3f5b4e6eba9dca10df38a5cbcba87faaec223&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UO6XPI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICDF4V40Egx%2FgwCtUonOF3f7VTxzMDCz3pBRII8rUcrYAiEA5rZexsXQMdHdYEmuNSJeuqH2XHboifN6zYN76q4xS%2BUqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBT9qd05ajFNUYIySrcA%2BFI0bL24ACdVFslVT2rJyy%2Fwgw9bTRmY8uUzre2jlP5SZnxl4uom1yb%2BFVGmRXPEVOiPf7%2BgzDGRjwsyc54ODQAUT45EOWZVlpK5RmMVmPM5RNPawbUkjPHLL9uAilSvblJ2mgO3xSo8rveZixXR9nXMM3%2FMDvsK0tT79ECQ4dVz5BRsnM8YaSfSKHKtCNL0wU%2FRbFdflGwhzrP%2BWKJRe%2F9%2BgwTE0LusWK8Tlete8kCFwhofFXlmTkKfwTMwLBSHUMLgElTrVVgRvxI7K7wdK%2BF6iXTZtZ5bPaJ1N5RfRAKNjj4F2GYsQVucVVYPS8RzpH%2BkfpmjwD65S3ISeaIgUShqgq%2FX4OYqh0uDwmtqWH6WZaIibl4vxMFWZ1%2F8ZGDqH9nikqboXk%2FeR0MiFFiJL8tk3NUjBwt1ke%2FeDfF7k1gVs4oJpvhN1ppqdNeDEEjIraWf%2F56K3wyIzfT%2FsnSUVAKlljfZH%2BPEV%2FET8fhiHAwlUwhD8S082pmuku%2Bs6E0i19hBesC6XPdtSrwcfViIWxQyCzhvGpVB%2BUHBerIIqwn1nPN3XVNIa41KAUGWUH4fKPbbi%2Boou2C32mkZ4Yx4OgDd9%2Blmjh5G6NYyk5Z8QN7mie2UsSmyOQ%2BMi0%2FMOvKwL4GOqUBCa3IenRs5l7eBT0bbFGUmPWal3oBR%2FpvGNUFMVNhjVsSnNs3nCZ3ZITKfiMm69epGJqEldiFZKxh1A8qA%2FCZ9yOBZ4G2Udd00436zxMR0zvjzHbPLkxHrS4F40oJi5h23kKqzBntx%2Blw2WRBAx%2F3dUkR1OoeRm3YdQX0xbbe3KqQDC0SJem8JyhNw1N0FF7p%2B7fnxapqy4xPr8MeRGd72uFqXMje&X-Amz-Signature=b2eea63608b008859977a39906e66297b8745998c928cd9241c203e0ada70be5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHSCBO6B%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIA1jQ84VV9kf84g8g2uah2BUVIxSeRK%2F%2FHUGlUjUuAQpAiAdho5jIsAUfPk3v1j%2BiXmRAEve9bsBC3rQmyebBarF6iqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9DbjHRHUYAISt4sKtwDflKh4DTktU2xOq3vdhyQMPqaC2K9xIjzlKjLH774n9YElUR9BmxDTVP5cvSfQqJL0c5qGr2x77bOSSHyGIjl6C8mOcbzWWKgzqnBrArQ1HDys6G04M%2F8yGO0o07fZ3ZDlRvaRTIUbdze6Xnt2y5%2B7VemRPRG3Z51GozsrIWZ2lvR0WxucSY%2FYATaVoKzqJpvOBeONnH2xkNeq5OSbEBqCktoJstTq2d9%2BmLy0OLYJynARSVgHxcVm2NQOlql75mfJZkvD%2F5Me5%2FbAIk1XqJ1MvOXYNiBG8LKo%2FHtTe20cEpDy4JslFzyE3fvbz7d8413citQG1m9Jhc2NA7BR9pG14kAVNtZ2XSR%2FXHHQ%2BRjIKR19O1il2juSCnP%2Fk1QOtDdPGyYxdOENwAc8XqNmKcHEOQWOp6A8L38OUPZtNQ8BoDW8di3UVUxQ%2FsCs8njkHVJVnD9wjNgJoYVNKpLeCm9snL4t3chKqo8d%2BN38gpirqk8r3fRMDFPPbCcsb4XvDWazkNLfaxXN1qLiIDkeuhkKdwvuJiwLP8C7MxCiO1RmQeRqwv5JnAPUpcqbZZmmksggkpVLKJpx2RJ7gJ0cm%2ByjX6tdq1mNPDc%2F4GPDB3JV0NSgKWJ1G99ZegvyTwwm8rAvgY6pgGPy9xpwb3ux%2BL7uLtvde7oTEcd1D7hjr7F8dOw6y0Hd5PRcCQ%2FzcnesLQpyhGf2LOBaQaxgBBKjyFjTOd0E%2FHMALNlQEQQ5WBGfTghf73q2Z%2F73fbqOuRkn%2BZ0K4f2ml31M3BQB0iN9zviL8yv5qtnuu7IJtwTSjtAx1tCz6zb5b1z5K2ymnqvYY6QM5kcVRecGVVEytr92WErgcajVDmaGM29A%2BIz&X-Amz-Signature=270a896a5f8dedffaa675c648050bcf51763bdbb6494ce2e35336def8d6e4dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJUUGDQ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDW%2BSTEctKdecLkE%2BexKFMp%2FJJ1xDrH2dlUz3VQDOBdDgIgAw8KJDpz4AToiur6dq3sUvlkbw%2FXTmZ%2BA7jx3yw49L8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6cxQitflpTtbxvYircA3JBUB30%2B7Z4fVeBTJX1gP8eaCIu4kS93h5TUbm%2FWQ%2FX2zQaFzeOqhlZfpQ4sNPwgUyO5cjkzdSA2ANqkXiHFUh4byDg7S%2FIGHDYxQLLs7N3cFKSKoHozMekdfWEjQ9j0jWxF4Gp6WwKEe4StVK2S2jiQ1lt5O4SbzYhDjDBtXpSr2iHpMmxWblvhY9EbtZY%2BOaiU3su1%2BfK7Vv6pPnE6PhdZnlifngfHAf8wA0vAJoWTH9ItiwNOAFcRp22QZn7yKdTik2xWQENhbWcZDMpgBl%2FfC1OZX8PofdHNDOsiwMJfhzPVFgcwcs9XkApdSCpNIV4HL6mnDYd5kBHr1Dz%2BzySofYugt1KDeBeV4Lvn2H%2BhKSve6mj3YlQO8WqZycFJDTDxyBVXoV5Ujopt4chBSVhAbIsoTbfAbw1nwFJKQSPNj2jXL0EfgRDtkRsPWtGvykEt2gYAvpTZp%2Ff1888NYIlj3eQHA1pDPmGZZERUM3d2KXCa3JyIyXQEQvd15aMLkVzDWgtpyvzkSSPhU7Ps8asdQrrnZwbJazf5wLL%2BgKMU7mkRA7t7qNBqSG4zW22Z8mbdpSIglCaK0bALKxINJ8mMtGPiZY6poicrEIPd2BtPHd%2FWC4%2FSM0fkYuGMPHKwL4GOqUBxyRjRT9NKtcvmeMn%2FmoYqdtHc6V13gpiZh1QAVi96xtYMquMbtax3evBBDGyRaPsh2CJ9qqWlKkm%2BtuVLPjBjzD9oJBxDmIF8VIlpmzw7TIxBJ%2BQ0z%2BqUQC%2BU3eTu%2FsJnWCAq6DAt9d5%2Bn8881ABBZAya9WgeXVE%2B%2FbksMc2DJ1Ubk8ziE0l8OUcppsfDDHbhaKkedobrBiumdQGmxoLxw4ptnqs&X-Amz-Signature=b2a106ccab2a93a813b9fbb6dd6646a91fb24dfbb948382dfca5ad81afd297f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
