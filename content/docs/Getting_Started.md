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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXU6H57%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAv0DS5eLy0JwtEMnxd0YHb0JxK%2FZ58slT4p7gtVEHK0AiEAiaJEleaZY63rKMwE3QlC%2Fw70aloTlhtIBwpA1X%2FweUEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4hlMxG4iJZtzZz6yrcA7l7rNi2lDe0XsnRzWxW0wsy8UeOfeWCqXF1dwXUx2GikjqX4MydrZJsxVlRqpWnwAl2v0qpvyQH8Gntxu%2Bs8N56fOszKsoIOntddljxzhq9Vsgfv6rwx0idR%2Fz%2BBaglQSTodM292yJa0KVyg3XkTzXZETCaXAknu8%2BvSrB3YHUe4Bel8%2FlzW69Zz0kfABN3%2BGRuz9ZJOrnexX9zdiuPb8zmZ9OtZDb1i%2FOtCyBRqT5jJcaSymkRQCC4t%2FovGHHmOMGBd9ks4L%2FJ6fKLwZLToMklhI75FFUJU3y1crak6ni%2FLelVpAW7GIbnpdXWJE%2BbsbLfCzsQa3hq%2Bu8tM9Hb5x5uPuWXSsdIu1%2FDTPPaDve7ji2FG1y84umLCiex0UBGLYAANy14nTGgHdtLx97a6b0N5NYz5PNAantlE6u6p0tdljj13oAcW8EgNVaLt4AtzPJ50V7ozeO0xqOvTEeArLtvPUeyaoRzsVGRqlCaFkOQAGmEjyhOnL9fTiBvn8hwQCBN7Bha8uc9RVVPORO2q7e2cl8cMJ79Thh2krnPrUiJCXiW2XgtjX%2Fxmau4687tODEsmLi4JaPwN6Ir5MkDKLBrYurymB7M48tGDE3dvv2nZSKwR%2Bm7Wx5sv89RMMzN1L0GOqUBeuJh6Fez6gOSPazzD2HQwqgzqOUU6e4uqCtf4%2BRGY6XL4%2FXZI%2Fq9ZLocEDUnlvvGEJ99l%2BVTUz0nl6kOMY5yAd%2B%2Bhpw%2F9%2FAUw2SMLiaruyEC6wpWjPjfTu76wfYYMrGvtMq6v8wkrqFH4pSDA0E5yWHsd9Iw1PvSuwAIh7Y408wXRcyvlNmlCDiJ0Q3U2xqdMFxT%2BGVXAAGWFm%2BEdAR6omK2M133&X-Amz-Signature=a8c133c2a44a930cf139f78b3989fb0592bc59e2e14b9e5ed618f24e88bb4689&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXU6H57%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAv0DS5eLy0JwtEMnxd0YHb0JxK%2FZ58slT4p7gtVEHK0AiEAiaJEleaZY63rKMwE3QlC%2Fw70aloTlhtIBwpA1X%2FweUEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4hlMxG4iJZtzZz6yrcA7l7rNi2lDe0XsnRzWxW0wsy8UeOfeWCqXF1dwXUx2GikjqX4MydrZJsxVlRqpWnwAl2v0qpvyQH8Gntxu%2Bs8N56fOszKsoIOntddljxzhq9Vsgfv6rwx0idR%2Fz%2BBaglQSTodM292yJa0KVyg3XkTzXZETCaXAknu8%2BvSrB3YHUe4Bel8%2FlzW69Zz0kfABN3%2BGRuz9ZJOrnexX9zdiuPb8zmZ9OtZDb1i%2FOtCyBRqT5jJcaSymkRQCC4t%2FovGHHmOMGBd9ks4L%2FJ6fKLwZLToMklhI75FFUJU3y1crak6ni%2FLelVpAW7GIbnpdXWJE%2BbsbLfCzsQa3hq%2Bu8tM9Hb5x5uPuWXSsdIu1%2FDTPPaDve7ji2FG1y84umLCiex0UBGLYAANy14nTGgHdtLx97a6b0N5NYz5PNAantlE6u6p0tdljj13oAcW8EgNVaLt4AtzPJ50V7ozeO0xqOvTEeArLtvPUeyaoRzsVGRqlCaFkOQAGmEjyhOnL9fTiBvn8hwQCBN7Bha8uc9RVVPORO2q7e2cl8cMJ79Thh2krnPrUiJCXiW2XgtjX%2Fxmau4687tODEsmLi4JaPwN6Ir5MkDKLBrYurymB7M48tGDE3dvv2nZSKwR%2Bm7Wx5sv89RMMzN1L0GOqUBeuJh6Fez6gOSPazzD2HQwqgzqOUU6e4uqCtf4%2BRGY6XL4%2FXZI%2Fq9ZLocEDUnlvvGEJ99l%2BVTUz0nl6kOMY5yAd%2B%2Bhpw%2F9%2FAUw2SMLiaruyEC6wpWjPjfTu76wfYYMrGvtMq6v8wkrqFH4pSDA0E5yWHsd9Iw1PvSuwAIh7Y408wXRcyvlNmlCDiJ0Q3U2xqdMFxT%2BGVXAAGWFm%2BEdAR6omK2M133&X-Amz-Signature=703b18601ee43602cf019db0e38753f941c94e4eb33c77e5a51f7df8cee02b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SIPSWFU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGqEkaVIrfWL4P3rrbxaiCq2r2TVumfmEWmOrVcG%2BuISAiA5MJkwcrrEaXaELDnXrKdlTPkBe7TCL3Nxsgek5KEcRiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMidh7zDkiyGCma9YYKtwDbE2Ug8X3uhoBp2tHx8L1eIKmgkE1BARs9qAL9gAp2Ek8YaWFkouc9mIkvbDG9ZBHxTDCdgTcl%2FoIWkb1o59wHBjQgvL9oXqM9D%2BO1oSs29X3Lwbm0hldMSXMjiXUWHB8uXVBaQZP5PF56O7LyQsTvchfZiEwEI74%2BJKoKws5t%2F01nfSEhmePQBL9KFU5HNDrI%2B6R4LJ9jqRp%2FW4rZAKdFeVwt%2FWwgXwd8ktkAkH5KmxAmh2SaP99OUUj6%2FNWXaWtFRRoCWSkr2pL8QkhNO%2Bwd5IdWVLa4FX6iLDJmI%2F1pzO6JPlW2Opbc5Edb%2BhNn3t%2BGf2Dewjxwzmdree%2FtMDEZQf4ZOosNm1uwj%2Bnm3lamm%2BvtUo%2FXjhMvGV3P2yLj3usYpUMXHmHpks4vpHUk3hvtL9b0%2BC7N69p8llgwpcIPWfJVUfaTDHe48lrJNyKLRDPtozbqC8EXfGgdufE48YstYvZGXz4nn6QftsS9ygkCSwo8cg0g3GEj6YeJzKWeCjBI7vjRuym%2FRDW%2BgD4hR6GsWFoS7FEmkg03tOfWbDaLkVwllmdxhSE%2BuLLVzC8M37%2BMEeFifbJryJkgYT2G5QYdn2AJd6FgSqrFlhUvqvPY0yk7JdjplrkzCMx0aQwx83UvQY6pgG3j7RmpeYiHCVxgn%2BYOcN4Pi%2FeOdTHd%2BOR9pSaIj8F%2BzJ0tLMTsct59etT20xy9zWZVb%2FlTa7Bn5%2FoT4H3IcT6kkZo16fMjoAEaBVsqPoeUNrS6LC3lLHepguK4f4056kdootBHZe8glkURq24HAIzdMRaTnuUAlkIpZDU2Wxij2Yi2x4YJ3Y0B22hjiQr8c3%2Bd5Kk3zIwEEQNFlvto858sPOjNaRp&X-Amz-Signature=a554f39b51f10a2f7ba560be070ba72f1feccec6a3ab0cd36d0b000a73fc06c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZQCQCI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIFojDzFIJsu2jYQNcPa6QzyosEMF3sFlI9oxTMJvew9KAiEAtZAq5V5%2FPTFf1TcdOZ%2BuXL%2Br6jDvRkNyQtlf5GAR280qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYaaAlOc6ji9%2BH9ZSrcA1HFWRmcwmiRjo%2BnLOJyz34j9TEEkI32PbzrPsok%2FLnKayBTO5ipOLOi4feuo9KWGD8WS2rDDpeW%2FzqBx74OMp%2BjfQMc0LPvZ3ZnR09M8RAi8QpF4mj7YOXgoGUDZGlP8gTS9pC9kDsk9giLjce54McsZeLsif3iBNEqarBiyQVYy7XQDT%2BgPkDvzLlemLEX%2Fk5ae12fxR4IhzyukDKSkntT24mJDO7%2FwunL2Z3ohUn5t4sH24nMHhSj79I%2FaSYf3JkkvuEDbGMJc9zwyTdPaLWQtMTk2RB%2BXDGh3XNfVf5hwFBJYjvwNwM0rItFSjmEoSepC4obQ%2BVg6pKvBQhgWCEaw9FI3neFYT0gTzhP5VZyT%2B%2B9CfBSQUbD3N4srb4%2BRkMzRT4GK9hWFOZo9v08SVhdM9pxQK7FzVc0DNIwlBpqNn7Is3zLJK2CIvLwxQEGwk6aHxauBSZ55iQtEvw4NaFt8mMD%2BwQGaGx8VREV9DMkio5GRdge%2Bk%2BF2Lj1u02B6elPYiOJTaxIvTKDZ1bR7LbQVgnxGtKDsk22VbJFl9CUXgmzbZVQUGfExahcWBYlcuAHZAtX2xbZWJ9lnwi%2FzjbQxW%2BuF7HnZFovCg5X5OtTKXi7UNdeDAOhBnGqMMjN1L0GOqUBryz%2BCBjo5Q%2Feah6c%2B6OmanUEfjYjIQoUlArH0ldqqXIsx8Bswf1CozY%2BXFd2ISVcFoKssrDU57warEdteV%2B2JL5lDwM5DIbZXrGLMkVxfQcYpMNQTmW8BXxeCKjOEwU9zdJ8MEcXkXAbKWbI79tLrrXQfW6aNBT0aWPaXGADqsdd5i1ltin7HqTw9Ake56kp3ZG63WHjilEU%2FXuo2Y6ZSoGjOpYB&X-Amz-Signature=ba076dfc6c789b12524ab19c5f3c0c601bd1439059b8a1fc45b87d0183dc6857&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVXU6H57%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAv0DS5eLy0JwtEMnxd0YHb0JxK%2FZ58slT4p7gtVEHK0AiEAiaJEleaZY63rKMwE3QlC%2Fw70aloTlhtIBwpA1X%2FweUEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4hlMxG4iJZtzZz6yrcA7l7rNi2lDe0XsnRzWxW0wsy8UeOfeWCqXF1dwXUx2GikjqX4MydrZJsxVlRqpWnwAl2v0qpvyQH8Gntxu%2Bs8N56fOszKsoIOntddljxzhq9Vsgfv6rwx0idR%2Fz%2BBaglQSTodM292yJa0KVyg3XkTzXZETCaXAknu8%2BvSrB3YHUe4Bel8%2FlzW69Zz0kfABN3%2BGRuz9ZJOrnexX9zdiuPb8zmZ9OtZDb1i%2FOtCyBRqT5jJcaSymkRQCC4t%2FovGHHmOMGBd9ks4L%2FJ6fKLwZLToMklhI75FFUJU3y1crak6ni%2FLelVpAW7GIbnpdXWJE%2BbsbLfCzsQa3hq%2Bu8tM9Hb5x5uPuWXSsdIu1%2FDTPPaDve7ji2FG1y84umLCiex0UBGLYAANy14nTGgHdtLx97a6b0N5NYz5PNAantlE6u6p0tdljj13oAcW8EgNVaLt4AtzPJ50V7ozeO0xqOvTEeArLtvPUeyaoRzsVGRqlCaFkOQAGmEjyhOnL9fTiBvn8hwQCBN7Bha8uc9RVVPORO2q7e2cl8cMJ79Thh2krnPrUiJCXiW2XgtjX%2Fxmau4687tODEsmLi4JaPwN6Ir5MkDKLBrYurymB7M48tGDE3dvv2nZSKwR%2Bm7Wx5sv89RMMzN1L0GOqUBeuJh6Fez6gOSPazzD2HQwqgzqOUU6e4uqCtf4%2BRGY6XL4%2FXZI%2Fq9ZLocEDUnlvvGEJ99l%2BVTUz0nl6kOMY5yAd%2B%2Bhpw%2F9%2FAUw2SMLiaruyEC6wpWjPjfTu76wfYYMrGvtMq6v8wkrqFH4pSDA0E5yWHsd9Iw1PvSuwAIh7Y408wXRcyvlNmlCDiJ0Q3U2xqdMFxT%2BGVXAAGWFm%2BEdAR6omK2M133&X-Amz-Signature=5194c196411a7031fb281bba8c755bab595c6500c519623dc3e5e6b290ec848d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
