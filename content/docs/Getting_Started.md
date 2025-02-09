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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGCF7ZF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF51Ol8Fm9vb5EGhgENgHjcolUYHiPxVNU1rxRzbdwIAIhAPCjwMsxSeMioMO2nxPxFzt8PiYixdPmMe3Ju%2Bc8aHsSKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdieSQPYAhT6gFm9oq3ANKBhs5CwMF4GWZg3VvMVCXhZcQNmUJJ4%2Fm%2F7YQ9CjKcTRvnn3OgLwYZh1nIDKGuYSpH3osp3ecQmFF8PkrJziVini0Hv6MxNr0eoyzdjh0vY6HzDJZKrgmVmZRVCTKVQ1gXBuPeFIoHyZMkLXCG5Sg3j1PboUhxIkB9mqfa5tzC5pO9syMo9AyOqgFbJm2JLd7ffb1qRbHpT6MTfeWFtweHORD9im%2B7c%2BFexbi%2By0vbFFsjlEbfe4sPJk7i6rRWwtYCnasScHqlujF2IYL0kLe1O3uAsLRuVS7QEBwCJsMb0GvBxpN%2BjSIUo8nFRNIhmhsMy3CAGT6SKyPAxcIem1pIZvwxNbdNiUjG1dlYizlggb10R7Hbk6oTf9m52SuHg%2Fj9T8y53q06aatO4ZixTQFK4MVxSvizIzHfde5Fxrx4RpGbVM%2B7mhvjwbLg27xrzzbksx1Tg%2BSWhsFlj%2BeHb7vwvgYnMTzsrZXqyxy1M%2BM%2FRRWVU%2FOMleqX0oF5KFbJvBqeRt0Y1XkOVAPHjyld4r%2BbHYA1gwYgBTQ%2FFmQIaVlW5V14eVvWD2Z3RD3uQx7SSqz%2B%2B5w0PZSz%2FLejmC2W1jyGIJbidGE%2FVZ86MVg6gtT6au7leuekKvgcSeoGDDv9J%2B9BjqkAeQ9tFOtheGJM3edK0gdMrQiXSgu2luHgpcuFENZoMTEUnvX%2FULSJFcrho9zEP3%2F7Rv%2BgtYBmXCGoGQ9m2hlQ8cKnHxhU3nTYpElgd6ZCKobhYInntiUfSgacgz3zsJ%2FBFaIafO2EiWPQ929PxiAuhdpy1LxaQ99Kwng4g7NG8OQ0slYpLYhwcA98E55sg%2Bmr0gbE%2FozQCb4rMeWcT6RcVLCAENZ&X-Amz-Signature=3f8b3eba3efb99561279932ef483d53bbca00fb9a128615b248cc2d33c54bdb4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGCF7ZF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF51Ol8Fm9vb5EGhgENgHjcolUYHiPxVNU1rxRzbdwIAIhAPCjwMsxSeMioMO2nxPxFzt8PiYixdPmMe3Ju%2Bc8aHsSKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdieSQPYAhT6gFm9oq3ANKBhs5CwMF4GWZg3VvMVCXhZcQNmUJJ4%2Fm%2F7YQ9CjKcTRvnn3OgLwYZh1nIDKGuYSpH3osp3ecQmFF8PkrJziVini0Hv6MxNr0eoyzdjh0vY6HzDJZKrgmVmZRVCTKVQ1gXBuPeFIoHyZMkLXCG5Sg3j1PboUhxIkB9mqfa5tzC5pO9syMo9AyOqgFbJm2JLd7ffb1qRbHpT6MTfeWFtweHORD9im%2B7c%2BFexbi%2By0vbFFsjlEbfe4sPJk7i6rRWwtYCnasScHqlujF2IYL0kLe1O3uAsLRuVS7QEBwCJsMb0GvBxpN%2BjSIUo8nFRNIhmhsMy3CAGT6SKyPAxcIem1pIZvwxNbdNiUjG1dlYizlggb10R7Hbk6oTf9m52SuHg%2Fj9T8y53q06aatO4ZixTQFK4MVxSvizIzHfde5Fxrx4RpGbVM%2B7mhvjwbLg27xrzzbksx1Tg%2BSWhsFlj%2BeHb7vwvgYnMTzsrZXqyxy1M%2BM%2FRRWVU%2FOMleqX0oF5KFbJvBqeRt0Y1XkOVAPHjyld4r%2BbHYA1gwYgBTQ%2FFmQIaVlW5V14eVvWD2Z3RD3uQx7SSqz%2B%2B5w0PZSz%2FLejmC2W1jyGIJbidGE%2FVZ86MVg6gtT6au7leuekKvgcSeoGDDv9J%2B9BjqkAeQ9tFOtheGJM3edK0gdMrQiXSgu2luHgpcuFENZoMTEUnvX%2FULSJFcrho9zEP3%2F7Rv%2BgtYBmXCGoGQ9m2hlQ8cKnHxhU3nTYpElgd6ZCKobhYInntiUfSgacgz3zsJ%2FBFaIafO2EiWPQ929PxiAuhdpy1LxaQ99Kwng4g7NG8OQ0slYpLYhwcA98E55sg%2Bmr0gbE%2FozQCb4rMeWcT6RcVLCAENZ&X-Amz-Signature=82d438bc3298644be03bc29875522af2bc89fe06fb3efe494dfc642e52044f10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXIHDQA5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2A4e4Ejn5ILclE6pkJgYxr3JlLaxsUtoFJRsumCyfIgIgYEV6AoRV9bXEQWqvf6%2B%2FI4QHq9Zc3q%2FBt38NC7XfItUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbUxiMN%2BvHDVJWF%2BCrcA%2FriWHMLSrA1e1MIKFLmQol8zJDy%2F7PJMdBDE94gXmDLDIq0Vxf%2B3X21if2qHXQab2CMJ9fIB4D4f0tMWjQOxKO1w%2FIxp22E3t9TNkvXwGiDj%2BYLUPtZ80n1ShZ%2Bgx0jyjBmtSh013kWfQbH38uiHt5Kg%2FV5JPHP3Jn788PAij666xtPw%2FBpYhkgAqv%2F98UlrY%2BhKGquaMUx9Fp%2Fgxk%2B6idY0PK7g9fVJk1x%2FawNhZPKlE6xD9iB4vQYrfTlRDBVkISz3ARrNLp38ogtMFUojeX0nlw68Wbp49WC1plMxmqi9w5KNCHy51dIE5eARmPUjQYpi83Xtgnf%2Fq%2BuVhw2z5%2FiAc3Wjh4zfJLTMqv%2FBgn7LvJN49yTWbBX50mvwpr%2FXPJMdEr7eH4Gw6YqH27FrY7bq1EqZ2W%2FXt%2BmnEPvf0ov%2FshNFYZnLMVz13Hqiq%2FxYx9rEX17%2ByIvaCz%2FCfXcsJfXf3JIYjuzQWOu%2FgA%2F5Lzmv2mBD4pvkWDU04%2BqQk3WCY8sJQMu%2Fukq%2BZ%2Bsul5N7BOU%2BtdlaJzjxMR8OtWRzUNejquSwTHMnV3m4PN%2F2tv4Ub2GWbocAeIy53UaY5BhM9h0DkW84mRAWnaI%2B1CTZ4l%2Bd3MMkUxh71ORVunrMMP0n70GOqUB3haaG0VhO3EemAS%2FqUqbJNisaMvZwEbWrtzlW%2B%2FIfB%2F5B%2F2rHNUIR1ckRoO8gXhBTVTzbgmDnYj2TUYzdkHj1u%2BsiXPwrew9vKRuY1lS45Y6CG5XWAimLcI3l5Uvr46rdOlcqXmMGaBgvNsIJQlbjCYRdhKHRDjVLM3dre3ldSoL0R5bIiXcAcwC4kP7VYakq4kV%2B0c9WcKxqYoYjYO%2BO%2F5YQjuy&X-Amz-Signature=4611723f51f980ef6bb11254458781a7468cba085d4b115ae43fba14a0fd79f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5C4VIO%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDas0UqWAPgv54Viy%2FxN9YEEmC0jsvJRKpUDrX1ZQAG6QIgOalmZcalC531w1OoF1jsML9xJci7C25pDKpIMSTp1YUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOsTkl68yuBPUgVuSrcA%2BLed4stPE0izMVs4I0kDNweD3PsxH0OzT27%2BFqMJUrArrLiGUmLkbuccAg7zFopO63SBTYoWaXGLDJ126uxPPDpzRLIYvi4m1z0%2FMOucpsaLtQVvRejMb9TWWEENW9y1EYLbpIVRb7vgFDHgN5sZmhmFmmlKlkL05QtuFP3Pk6zxwKpQuvboOz8e3F9kvBSiqSZKLA3FauTLJo%2Fk4p3Nm4abAMsKWagOTzcX2%2F9JkY31aB1u8bvBB%2B6DoD4sPvZM28%2B7LUbCjuM6pzpdOIEcWDgHVZyIBzY%2BHQ9CNVjRBP7pNIAspNeAWHWmC4vZyDBEKqfhkP63hT66iHT7FmEnxRA6MbXRI0VEXo1Zi9iTd66oASDS3x3%2FLTCl9QhWtIqByZFAQJaZmmPSfmGfUfwj3iun%2BNV3jb0Iv99SvdtMQA%2Fe9wx%2B6oya3rVIRFV1werCkbCtzLe550Sl%2F6NWXDztPCfHpu56XnfS868InrDGaVjUmvPcjDxoDUNCrLnsc45%2FSLynzL0FTvgTsG7V3Nf3APNEoz1p1UB0XsFIQUilP0cx34oz%2FlYld9xr7wf%2Fgqd7AeVPPkgtiDn3ENX7MBTMZ%2BYRd4JXoIzXpo%2FuldDbIMk0c2o430At6eZ2A7zMJv0n70GOqUBDyfCMp4EX%2BPyY1OELKEat%2BY%2FhwVofAobg4Hh28JWxXweSILLZ7FyMg3U8vIdr26uMd6vb6%2FBKCtZhpeVYCBMJwkme112R%2BZVaTWrSNMcolAZrBblzlAJo6KtQfcmE3hWnVP%2BNRo%2FZZya8AbDbNzEqBMy8A9xLv134YIVO8ExFUwE9Ro1Fm3D%2FAuGH6d4ND%2Bg4L%2BYGTZj4zl3FBkCJyGnGmmlGOj%2F&X-Amz-Signature=d34771eddae47e0248b19616198bae0cae20ec97c825608428eef037d9e9bb2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGCF7ZF%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF51Ol8Fm9vb5EGhgENgHjcolUYHiPxVNU1rxRzbdwIAIhAPCjwMsxSeMioMO2nxPxFzt8PiYixdPmMe3Ju%2Bc8aHsSKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdieSQPYAhT6gFm9oq3ANKBhs5CwMF4GWZg3VvMVCXhZcQNmUJJ4%2Fm%2F7YQ9CjKcTRvnn3OgLwYZh1nIDKGuYSpH3osp3ecQmFF8PkrJziVini0Hv6MxNr0eoyzdjh0vY6HzDJZKrgmVmZRVCTKVQ1gXBuPeFIoHyZMkLXCG5Sg3j1PboUhxIkB9mqfa5tzC5pO9syMo9AyOqgFbJm2JLd7ffb1qRbHpT6MTfeWFtweHORD9im%2B7c%2BFexbi%2By0vbFFsjlEbfe4sPJk7i6rRWwtYCnasScHqlujF2IYL0kLe1O3uAsLRuVS7QEBwCJsMb0GvBxpN%2BjSIUo8nFRNIhmhsMy3CAGT6SKyPAxcIem1pIZvwxNbdNiUjG1dlYizlggb10R7Hbk6oTf9m52SuHg%2Fj9T8y53q06aatO4ZixTQFK4MVxSvizIzHfde5Fxrx4RpGbVM%2B7mhvjwbLg27xrzzbksx1Tg%2BSWhsFlj%2BeHb7vwvgYnMTzsrZXqyxy1M%2BM%2FRRWVU%2FOMleqX0oF5KFbJvBqeRt0Y1XkOVAPHjyld4r%2BbHYA1gwYgBTQ%2FFmQIaVlW5V14eVvWD2Z3RD3uQx7SSqz%2B%2B5w0PZSz%2FLejmC2W1jyGIJbidGE%2FVZ86MVg6gtT6au7leuekKvgcSeoGDDv9J%2B9BjqkAeQ9tFOtheGJM3edK0gdMrQiXSgu2luHgpcuFENZoMTEUnvX%2FULSJFcrho9zEP3%2F7Rv%2BgtYBmXCGoGQ9m2hlQ8cKnHxhU3nTYpElgd6ZCKobhYInntiUfSgacgz3zsJ%2FBFaIafO2EiWPQ929PxiAuhdpy1LxaQ99Kwng4g7NG8OQ0slYpLYhwcA98E55sg%2Bmr0gbE%2FozQCb4rMeWcT6RcVLCAENZ&X-Amz-Signature=cc45085fb337d445dd29a68e4e179b0e5275b77fb666541ff7f9f82bbccc3fde&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
