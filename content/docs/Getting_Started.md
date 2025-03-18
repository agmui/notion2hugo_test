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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARTS7I2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVLXm4hdwTPp10NWhFpeyahp1lvQgB8p7p6iferLyKgIgOctkAOVxeOHK8pLdE5%2FMk4gEuthkKLIqJf8bR9HLr1gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBvjsIV1zDomoL5C7yrcA7cH4rT2tyWYpBFb4cgHd%2FEcBwwMV5oQHd5VZLa2we5TzwdTrlEF2kRC3JXBfk8YeL0jZyyRPkG6oFeDdGUWHiWso0rkm0KwZMcD0Dk1wImXWvWJ%2BuoYOYAmXNt%2F09rCZCgYIwf08ZjOhdnmLVSRYbkPNgbkpihh3RqYeAoJhxPgjGNH%2BL2FzJBeWdKCGxjjNcyhT6Ggevxq1rnwkXV%2FPHe7VgoZ1001ngoT5KnGPkoMoxUB1aCVb7CiMgIGVsu%2FFcyJIj1g06lncOv6tHXN9J9ct8WfTvdXJ0DuXLaGG19CkY4GPQeVyQYPjbpHXzUbH70whlpxS%2FPx6GHt9dX5b7LLY0A5TfTyUG6ZrMsMSxbcLvQRzS2TuQQTsMsZNhQkzKeO%2FBzrlPOAY1LQolb01afj9%2BKGzqXWqgsr4gVKzka4tvOlYGUCZaWA2ksgdpmc%2Bfrz3OPXzF%2Brh2KQVlEYvMWO%2BudvmcA3YOUdxpWRlRHIlEXBnHY%2Bo4C5KGQrgkHIh0JeE4Sl1k0TY4MpD4uue1mmsGhDqBtoO5SNBD71czuV1c7QgvnSFcHDp%2BmEwZzHWyoRx193%2BFC7T0fhe6haCQjC8zcPvzuPlJmu7driqOLcvDeGQCyhjWDc3p%2BdMIvp474GOqUBERenMz4PvotTbGGGA80R016fv%2B99yRvgHx6tWUecWmILRgrqqouDcM02%2BkSayHrE2ueMMkPTzE6MrQ%2Fhf3FRD4MuDq%2BM10h7gkmrakQIYxGWo8%2B8QqZjYTz9cAZjXwz%2FKd3uDwouSELD86IjIBUYmdVeNSr55w4qf4uULDSfSR5sJsBITNvn%2BbPdaL%2BlCLjSiKoioww2mjgEPMxi2CRe%2BhjOdMGy&X-Amz-Signature=7bbd79a12203fe0d74f3824d8f2b97e80960e415d488787cfd70d1ad649a2fda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARTS7I2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVLXm4hdwTPp10NWhFpeyahp1lvQgB8p7p6iferLyKgIgOctkAOVxeOHK8pLdE5%2FMk4gEuthkKLIqJf8bR9HLr1gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBvjsIV1zDomoL5C7yrcA7cH4rT2tyWYpBFb4cgHd%2FEcBwwMV5oQHd5VZLa2we5TzwdTrlEF2kRC3JXBfk8YeL0jZyyRPkG6oFeDdGUWHiWso0rkm0KwZMcD0Dk1wImXWvWJ%2BuoYOYAmXNt%2F09rCZCgYIwf08ZjOhdnmLVSRYbkPNgbkpihh3RqYeAoJhxPgjGNH%2BL2FzJBeWdKCGxjjNcyhT6Ggevxq1rnwkXV%2FPHe7VgoZ1001ngoT5KnGPkoMoxUB1aCVb7CiMgIGVsu%2FFcyJIj1g06lncOv6tHXN9J9ct8WfTvdXJ0DuXLaGG19CkY4GPQeVyQYPjbpHXzUbH70whlpxS%2FPx6GHt9dX5b7LLY0A5TfTyUG6ZrMsMSxbcLvQRzS2TuQQTsMsZNhQkzKeO%2FBzrlPOAY1LQolb01afj9%2BKGzqXWqgsr4gVKzka4tvOlYGUCZaWA2ksgdpmc%2Bfrz3OPXzF%2Brh2KQVlEYvMWO%2BudvmcA3YOUdxpWRlRHIlEXBnHY%2Bo4C5KGQrgkHIh0JeE4Sl1k0TY4MpD4uue1mmsGhDqBtoO5SNBD71czuV1c7QgvnSFcHDp%2BmEwZzHWyoRx193%2BFC7T0fhe6haCQjC8zcPvzuPlJmu7driqOLcvDeGQCyhjWDc3p%2BdMIvp474GOqUBERenMz4PvotTbGGGA80R016fv%2B99yRvgHx6tWUecWmILRgrqqouDcM02%2BkSayHrE2ueMMkPTzE6MrQ%2Fhf3FRD4MuDq%2BM10h7gkmrakQIYxGWo8%2B8QqZjYTz9cAZjXwz%2FKd3uDwouSELD86IjIBUYmdVeNSr55w4qf4uULDSfSR5sJsBITNvn%2BbPdaL%2BlCLjSiKoioww2mjgEPMxi2CRe%2BhjOdMGy&X-Amz-Signature=92ccea822a8dbd1fd3d1dce4c91daad0db2bba9282a6650916fe65f6c274f603&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2754PZR%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbk84WRmCXWAVNq%2F9zL7t8w8lRJWnJi5z8FsUcBHImnAIhANUyAek1MqTgkQV%2F%2FAxa42eLrrRA7R0aRKb6Y6VPLzR2Kv8DCFUQABoMNjM3NDIzMTgzODA1Igxk1TEDvY%2FowG%2FUhz8q3AMUfaZtgrxQKMlFiXRF0SAoOjn3qWG81xxTIGeWYEdEXOz2NPRKiQOjDzDer2m3TUcX3wRwoYe6kNtZ5Z3Ftl7WzzV%2BCykyRz%2BOb4sXfFQJns6ReyrIVsYr7LRBSt%2FuY0KN69zdeTTOj%2FUAMRUVQoZ4tskvHYr43l%2FauJRwwDvCy0DFQ6FzOQzbUq6NrU8qL3VfXl81tLSlEOvpMolrRiBk4anl77YJ5aRMyQe%2F0jwKT%2FNAHLJHm2eJMZScRw8tJjCAbYIbgDRioyjsXuW65QQa6XJQtkL5lHkCG%2BzfLnoPGTvW85I82WC%2BIIV%2BkSDvWG%2BHW%2BayIBi0w1ykMRXVAvorEZl8usKYl%2Br26HYK87E1r7U3W%2BkqropSG265v2lcVdX3%2FNi5rvjjNqm5NbKsP2HVtEGL6daNBPb75eyil7cgTtIKzzVevDVi2BpZBUv5qiihpIwJx4jska40GGmLmWkJyLFpBSuYRpS%2Bh3g6XAa4X6fDevvYpsyKP7YZqHUvfGcpruOZST9oJ8Qi%2BLEXJ%2BE1CzovGJJ%2Fov2hzMj4QjKz1BpIbYJdKoKg1B5ME3fWmtIvuA4BNpOOKWtvXLyH3jvhAaNycAgF400tCbQ90k%2FxQ4hDGE%2FgNEHJ%2BTVTTDCn6OO%2BBjqkAdxUvN1x%2BJUHtdRy6IWWXEnHvAvaG1MXRtQtWgMSBkiWBKjYJ%2FnYWTiIXo2cGEui0tLHEyxNITDJg7QtK5cApr7LPSuzNhdw7FhJO1fHtoAaZSYOT6HnxyZq37EaiSALy3wmAsre1SK7YErxNYiioYkN4gZmvEm8k7ECvDTxMc2bBI38%2Fdc8JL3M%2Bzm%2FSAVvG3oFn6Juz0onrxu7muqSUkj5Ni9i&X-Amz-Signature=bc1889d8cdbeb3a205e81d4e8ec8ccdea75523f146fa1d165d249dd11db6bc75&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BGUMEWM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoClOc9EIxqCsGtHWSDoWaHeC8kMbsNCMH5fnBZXbBjAiB5wtq0E74YhhbfU8ZyE5rOOwCSEA0yW7B1WJvF4dR%2B1yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM2oE%2FBhlGfSQ8lrQZKtwDk5stCRBrDFGs1cLlGYgre9AoZfERaprjL%2FnpUi5vKs8H3qESFnSajgRg6WcSmnPJ6CezMgRV9rnRvDVZEzJjoGSlIinkrs4q5CD1eyAONHC5dNgTUIEEhI%2B%2BvUWrwtPgywLuK3ff025tmY%2BaGqFmSYIFu7mABhv%2BU%2FZUjhjH8O6CgfrrIRk1bK2YORHlTNDlF7sDd%2Ffo7vrY16oRhux1R6%2B8kZ0f4tadMcomDt56wuLc0Bl5o9bny2BPJ3756et6ZMc47XThxZ1YU4%2F7Bpr9P5d4hJjZtjglLxYj6DThA0uK52IHZCpeJdzdzaykckIGUUWGjmB4heAJH%2B50aSPulb54re0%2F4%2BUaz%2BKoeFn08c8fFVBNtcvAsob1rJdb1E8WfWI%2B%2FDAnpIEe1TaoblB%2BsJBrTZx5rvbAcID332n2f2TZeubwZRJEcKN1fCYe9Zf0eq6vfvPvm%2B2KZp0jBrr8B5vAETLLxrsiOqL5cRFMCoKVFBsg3mD0kmy9YUYrup%2BQ0sFnSzdOXXJ%2BHLZ10ypufvw0MbiM57fh%2Fx2zEM2UYfPMtw5gJsliTI2DvdXyYHFiVWukNI1FByHgZmaVnxu78Hiitizg1kri8rRhUBkCbKyoRWkEVIJhlvRUkW4wjOjjvgY6pgGsp%2FZhaihs18Pklwa7d%2BnSEcQLRWE7u6VxiETc4ofaATe1oLqKFCGtO0c6UfCwBuJGCuFhZvDwZxxaBP%2B3ySJYfb7BzQ3%2FJDDNDq66io0xKCtTxMc83xZqM%2F8aUdfF5Ei99TH86J52CKZUGwClNooAD%2BNNfja3qPKYPH8DuRBRgk45sdPWXj03DMn66nRewj%2BaBibgBx3y8TEJwi1UUU9Cr5JmlUvD&X-Amz-Signature=6b3a6611700adca0ac0e74005c9b379fbed3316a33814a74f4c311bfd0b92066&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARTS7I2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYVLXm4hdwTPp10NWhFpeyahp1lvQgB8p7p6iferLyKgIgOctkAOVxeOHK8pLdE5%2FMk4gEuthkKLIqJf8bR9HLr1gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBvjsIV1zDomoL5C7yrcA7cH4rT2tyWYpBFb4cgHd%2FEcBwwMV5oQHd5VZLa2we5TzwdTrlEF2kRC3JXBfk8YeL0jZyyRPkG6oFeDdGUWHiWso0rkm0KwZMcD0Dk1wImXWvWJ%2BuoYOYAmXNt%2F09rCZCgYIwf08ZjOhdnmLVSRYbkPNgbkpihh3RqYeAoJhxPgjGNH%2BL2FzJBeWdKCGxjjNcyhT6Ggevxq1rnwkXV%2FPHe7VgoZ1001ngoT5KnGPkoMoxUB1aCVb7CiMgIGVsu%2FFcyJIj1g06lncOv6tHXN9J9ct8WfTvdXJ0DuXLaGG19CkY4GPQeVyQYPjbpHXzUbH70whlpxS%2FPx6GHt9dX5b7LLY0A5TfTyUG6ZrMsMSxbcLvQRzS2TuQQTsMsZNhQkzKeO%2FBzrlPOAY1LQolb01afj9%2BKGzqXWqgsr4gVKzka4tvOlYGUCZaWA2ksgdpmc%2Bfrz3OPXzF%2Brh2KQVlEYvMWO%2BudvmcA3YOUdxpWRlRHIlEXBnHY%2Bo4C5KGQrgkHIh0JeE4Sl1k0TY4MpD4uue1mmsGhDqBtoO5SNBD71czuV1c7QgvnSFcHDp%2BmEwZzHWyoRx193%2BFC7T0fhe6haCQjC8zcPvzuPlJmu7driqOLcvDeGQCyhjWDc3p%2BdMIvp474GOqUBERenMz4PvotTbGGGA80R016fv%2B99yRvgHx6tWUecWmILRgrqqouDcM02%2BkSayHrE2ueMMkPTzE6MrQ%2Fhf3FRD4MuDq%2BM10h7gkmrakQIYxGWo8%2B8QqZjYTz9cAZjXwz%2FKd3uDwouSELD86IjIBUYmdVeNSr55w4qf4uULDSfSR5sJsBITNvn%2BbPdaL%2BlCLjSiKoioww2mjgEPMxi2CRe%2BhjOdMGy&X-Amz-Signature=e5c12e0648e17e378085c7763c95f73bd07046bca4e4d9c3cd27d7302619bd97&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
