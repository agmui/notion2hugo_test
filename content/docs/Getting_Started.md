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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATOI5XV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBOAVWnZMzq%2Fc8DXJgcCyTDnqJ%2F%2FAMGoqr7U%2FNMcw3VAiEA5oZFkoVDqYuREeZZ%2BhIge8ZDGaBVSRTh34vJYoxoXnoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDETfp%2BMx8iUP%2FjtCBircAz9Zkp%2BQ6KH2gjPEi6b8LLX6HLTujy7uVvXa7XetjYlYjSghw9wud%2BtJptstgpMoHpkKY3esUNlDUNp4Z0IXg72H6oUSVUIUY%2B52TfvOixbzaq0KduXuI9iHhhtSyvQ3B1BlpGOwZu0FTCORyBKynFu0kfkslvL%2BcAe%2BBQT7HhLNvTfGtZRM7CgbQUGkxkeh7ROFNYjfMJkGOWiOt2p1wqqMk4sF2VMNAHt4YC2GoStvSOpSNOuzaBsz5q1s4YMNYIMS1zK2pc0xu0Ypf8wlknGBaOBtuG2%2FOD%2BhSid%2F3ty%2FsIbOykFFYFSwiR2KpF6bj1Y16VOcXaGHhZCbyu25hd6K3hph0nrBYqhKQoHuc45LCveTdg%2F069SxkKWmVkfS%2F%2FHtZwGMqh%2FIPHyxmCTVGe3JSEL2uaWTE8h%2BvdvS%2BrCegcwR7yHUAQez6pRe6nR1%2B1ZurNJ87UWV2VrxludSjR8FIVGO8niJuuLR4Z4pAxoqQ%2F0i%2B4N%2BSbU4QfDqRm2Pna6eKC7rSg%2BV11ZIQSg8Dh4H6EaDPlRikbl84cv8WcexydFx9MgPAMM7GqRsBIzOvS1ul%2F5Ps7OeHGhVwc13tAMrWnWinJwoIgyha%2B2RCS%2FRDRGyplmkiMQqdTyBMK%2Bb3r4GOqUBHZnSlEqElvcjS1kWHM12eAR692t6fvrmmY9lGox6XsKCaueJgUhQwLPPJirYtcVltZxBs4410ZoKgx68PL5hmXI%2F4Mc%2B5Kw2SDyMF%2BwAywHfNAIKsvgNQPMfw%2B7CJo2ftV0POm%2BimvoPlY0fwNYi1jgn6myzc4kilDxvxCSQdrZeMZhkPf9n1AbAPkzYVmUHYm%2FdeSFFL9fikodagB4ykK%2BqMkV6&X-Amz-Signature=e2573ca780a82ce92c22f8763ba1f53b99cf831ea92b50008632f03a6a671b1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATOI5XV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBOAVWnZMzq%2Fc8DXJgcCyTDnqJ%2F%2FAMGoqr7U%2FNMcw3VAiEA5oZFkoVDqYuREeZZ%2BhIge8ZDGaBVSRTh34vJYoxoXnoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDETfp%2BMx8iUP%2FjtCBircAz9Zkp%2BQ6KH2gjPEi6b8LLX6HLTujy7uVvXa7XetjYlYjSghw9wud%2BtJptstgpMoHpkKY3esUNlDUNp4Z0IXg72H6oUSVUIUY%2B52TfvOixbzaq0KduXuI9iHhhtSyvQ3B1BlpGOwZu0FTCORyBKynFu0kfkslvL%2BcAe%2BBQT7HhLNvTfGtZRM7CgbQUGkxkeh7ROFNYjfMJkGOWiOt2p1wqqMk4sF2VMNAHt4YC2GoStvSOpSNOuzaBsz5q1s4YMNYIMS1zK2pc0xu0Ypf8wlknGBaOBtuG2%2FOD%2BhSid%2F3ty%2FsIbOykFFYFSwiR2KpF6bj1Y16VOcXaGHhZCbyu25hd6K3hph0nrBYqhKQoHuc45LCveTdg%2F069SxkKWmVkfS%2F%2FHtZwGMqh%2FIPHyxmCTVGe3JSEL2uaWTE8h%2BvdvS%2BrCegcwR7yHUAQez6pRe6nR1%2B1ZurNJ87UWV2VrxludSjR8FIVGO8niJuuLR4Z4pAxoqQ%2F0i%2B4N%2BSbU4QfDqRm2Pna6eKC7rSg%2BV11ZIQSg8Dh4H6EaDPlRikbl84cv8WcexydFx9MgPAMM7GqRsBIzOvS1ul%2F5Ps7OeHGhVwc13tAMrWnWinJwoIgyha%2B2RCS%2FRDRGyplmkiMQqdTyBMK%2Bb3r4GOqUBHZnSlEqElvcjS1kWHM12eAR692t6fvrmmY9lGox6XsKCaueJgUhQwLPPJirYtcVltZxBs4410ZoKgx68PL5hmXI%2F4Mc%2B5Kw2SDyMF%2BwAywHfNAIKsvgNQPMfw%2B7CJo2ftV0POm%2BimvoPlY0fwNYi1jgn6myzc4kilDxvxCSQdrZeMZhkPf9n1AbAPkzYVmUHYm%2FdeSFFL9fikodagB4ykK%2BqMkV6&X-Amz-Signature=a7ce61b2c158381caa3434b925cd81e9131ad3971ba86229772dbdc547710558&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DRAUKYL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNiEA2Zm6uRyr80WQPWXgklijsy470G9MeT5W8trLzDgIgNMUJjPUeMpASklBh5B1RVX9wtxpvESrd0bP8fwymAfwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMzC0d9sBU7fuFRkNCrcA1wGljHYmpEqOB8cbWXcSt0KeExAcaZGJdDnlP0ieDK0nn6FFOA9p9h7FqZ1rGZSMnUQB%2BRiLkWHAWeZ3AE6%2FmB69KiLzkkAP6ccloHgwhS%2BNustp1U6b22tO54esayoEbfYodAHPBODf8WDHbbtZVaPlfRXVk%2FjaK0A7FfW8YfnnGxXsd52dLHKcuG3E2mU22tmRPaUfx7I9DNDhuL1iFLdBeeR3QG%2BGXwDiNEd9886dCMKEd7w%2BKVlBj8%2F2F4hYIjYl41oGMLw3ke4S%2BwEPbJ5IXM1%2Bm3XVL%2F3Ey0WD9WJVpSDy8Y%2Fm5Ru3%2F%2BpPd0AGHnYTxUo1ZK5wjGZtZ6QFLBvraHaj53kuAWynFhdBJmwUh3Nlxm1R%2FPZ46pBTM8kmJLiiic4PY4lo%2FtoAgUFQs1T1iFzYsuo5pHdNsNfxfj3JviOgn6EG9HnluEu3shZzU3DJjFx074uq%2BbFDwIF5ghaA%2BqH3PobLbbZ5mDUCU4eQxrNkQ01GUTl5WhEb0%2BhftzdA9BiKE6E89XJcsJr7jYw3x3A6Hm7kGe7e5t4zRvyulNIAMzDy7tSCSCSaSQ0ZDP0c2JeutGcOqnDbs%2FT0xlNnEq00DOQnp91Iqa5DKL9M%2F0fdZfJGl5UQausMK2b3r4GOqUBsBrvaXgBYp%2FJB8ncIhMyz0dP4kEBBclrUadkviLV35bjPtoyH75bU%2FXf5by%2FvimGxAeLpOwa%2FysedA8zkoHQ7ZnCiHK2l5yhzljziwZIH1JwRptNQIphvnS3LV2HCjJI%2BZmnYB3HDpSP2YKuNsdP%2BgQR%2BgH8IZx4IfmjP8moQ7NJ%2By9ETqjcahpkzaNmHKA5C6VRzSzdMzqZvgSQAw488ZVjcNhA&X-Amz-Signature=c9b1cf8f02261e97010f8567ba6d5e962390afabfb5067aa2912e35bbb786ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYTKS7C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQdzznEqHfbOHuratUYTo7NhhUWvHv%2BtOJbQcfyV%2BETAIhAMq6KH7jdISmOsTaAAqAk43T5OmXbl3jrow3QzbWsJCSKv8DCDwQABoMNjM3NDIzMTgzODA1IgyTmMLmSqcmW2BrlNQq3APunlavCnr3lI2QinZuSIV3txREwFN558GzMbgZ2E0j%2FXpEN7VY936US9AfcTe9i18JPDftXwT%2FO7EeUoRaorWrnVO9ftN1kxS3vkOD73gymJooyxDG6ZP%2FtlVNHHWwMor25jhxQjbMLVlxKBOVu8IDHHdyHYUhRgiT89RyCpqNxuzZose6hElP8sVj%2BnNBS3vuiskC9VrlvQBfgawNNlsFQd27kpsXYf8cKWdj%2F5JFwuKzJFOGb%2BDfBIOfCOK%2Fwt5o7%2FP1PAiPoC1rpaLXicEJYeMiTrXsOgIf%2BZ%2BYTjncwVXYI4wmlfRx50uoF5t6peV7TFcKDO9VuKZxBqQmVcKutAs6JFGazxlmPvSriAgs4sxLSYJHNuT9A4AeNzI0Q0A5I06CcUFGYFeXwNCf2VBj9ykERgm1aY7GRbDe%2FE1pdhuJd%2F61clAdhg%2FDfSt5xtPEiG5OFAHdKdfCqaFf16js6tZeXpm5OV9A3KSGeJyYSieKUIlTWxzjevIX1SminMs2ofnYoXd1WGuFYzeubIVBtpEkEAbjqTy3t4eeWBWlOHY9wD4cQDax3S%2FB8h%2BRO7WQdWYRiYdFbun%2BglcqU48g6d0qHmE86cbW8fhlmcqbHo1%2BTSOu4czs1fwfoTDnmt6%2BBjqkARd7ABoZpxhJwgQLrAPXCmtAzMSmc4dlBpY3ncLVkstt121sjcwVKexsXzAoyiGVl%2Bm2KTcOjBHZRHN6szptilf54CAdfygzOVE9YIVqJNKs1vDy8pWL%2FXt3XH%2FRzZbbXcOtjcDHw0jb0xaFcfMeTiVwHj%2BNYQG63Tc66%2FxKpFzBWVbHJH5kSwZPmGMtAvS71dMMCW6xE6GYXTa4ONcqS7kAirOm&X-Amz-Signature=0020c4932c7c14f1e6dc2c8bb88553a3e89bd649b2de2f16d66dcae73a11022c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VATOI5XV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBOAVWnZMzq%2Fc8DXJgcCyTDnqJ%2F%2FAMGoqr7U%2FNMcw3VAiEA5oZFkoVDqYuREeZZ%2BhIge8ZDGaBVSRTh34vJYoxoXnoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDETfp%2BMx8iUP%2FjtCBircAz9Zkp%2BQ6KH2gjPEi6b8LLX6HLTujy7uVvXa7XetjYlYjSghw9wud%2BtJptstgpMoHpkKY3esUNlDUNp4Z0IXg72H6oUSVUIUY%2B52TfvOixbzaq0KduXuI9iHhhtSyvQ3B1BlpGOwZu0FTCORyBKynFu0kfkslvL%2BcAe%2BBQT7HhLNvTfGtZRM7CgbQUGkxkeh7ROFNYjfMJkGOWiOt2p1wqqMk4sF2VMNAHt4YC2GoStvSOpSNOuzaBsz5q1s4YMNYIMS1zK2pc0xu0Ypf8wlknGBaOBtuG2%2FOD%2BhSid%2F3ty%2FsIbOykFFYFSwiR2KpF6bj1Y16VOcXaGHhZCbyu25hd6K3hph0nrBYqhKQoHuc45LCveTdg%2F069SxkKWmVkfS%2F%2FHtZwGMqh%2FIPHyxmCTVGe3JSEL2uaWTE8h%2BvdvS%2BrCegcwR7yHUAQez6pRe6nR1%2B1ZurNJ87UWV2VrxludSjR8FIVGO8niJuuLR4Z4pAxoqQ%2F0i%2B4N%2BSbU4QfDqRm2Pna6eKC7rSg%2BV11ZIQSg8Dh4H6EaDPlRikbl84cv8WcexydFx9MgPAMM7GqRsBIzOvS1ul%2F5Ps7OeHGhVwc13tAMrWnWinJwoIgyha%2B2RCS%2FRDRGyplmkiMQqdTyBMK%2Bb3r4GOqUBHZnSlEqElvcjS1kWHM12eAR692t6fvrmmY9lGox6XsKCaueJgUhQwLPPJirYtcVltZxBs4410ZoKgx68PL5hmXI%2F4Mc%2B5Kw2SDyMF%2BwAywHfNAIKsvgNQPMfw%2B7CJo2ftV0POm%2BimvoPlY0fwNYi1jgn6myzc4kilDxvxCSQdrZeMZhkPf9n1AbAPkzYVmUHYm%2FdeSFFL9fikodagB4ykK%2BqMkV6&X-Amz-Signature=344742d9b5b1ddc7e74aebf8f4efd184b80015af118f12ea40487027d5bbb829&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
