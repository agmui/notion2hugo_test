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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VZTUYB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD%2BwV5dFnOAcWN7Mmrxvma3MlZfa%2F4BVtrLH3yISf27IgIgD%2FtzXrBUNLr8v9%2B1CxWYD3TZqxfO6Rvfe9X%2Fd5FHB7Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGNi21zP7I%2B43rb9kircA%2F7Ubtlz2FHdJ6yEcAYcetODQBSGwfn223YQAPfowJUCeUH8VKzQ18vUKtmvfOZnKWPpagF1%2F%2B3YZXXCQ5C3jN7zE3lITI0MAujDfpJ4K%2Bpo%2FJwS0Wotc24xrlG979zDVZDGudHySYBe9P4iUiDAipZMNnY9PLLv3o46UCP0%2BlYLLxdTqdc4cMd3W7K0anXvRVBVsFdlSj3LpvR%2BuWEYvv1FDIX%2BvuuTRy2VMcJs%2F2%2Bi1Umko0FgytwlahvOp47Yt0x36xQxKVeQdzCpwRIHKE9zzJjocpi5aDODkWfm6fM5ZbW8gJxP4mS1U17tnwLphtra4QOSKhuwv00BhEH%2FQLOWrTHObQAJSQl7o03vkeoWhSw6R2D%2BBjBdUpDMvBkO8sYP4gjdUvj0zGSG5mij5I5ldBCWjBicumj46vLvQwGJewPxYTBnAqmws0MFfkJo9mSf%2BQNdaLppPCokGMSJB16BczR%2BaGPRjURky6hgxH8PmGrUTNyBC9Blpu6EX9Lf4hHr%2BI7dlKu4EFrSUAnMRfNdfAXOGwjy%2FH34GFnTkYy4GYoVr9Q8GNZuc%2FgJdBq%2B2UBlFAwwVWtEohlhJEYM%2BOQ%2FspCBbgxB0Ic2etwbAvDd09I2Wyu6mRxRZHiFMImqxb0GOqUBQgnto5oqB%2FwFIAMpPX53Ub9zE1ZyQXmmoY99mQdrlmmqg6KSTA7TgTkPx4kFrM1%2FZ8%2F%2BKykd41DqAraBCmNxG4V5Um99jYcW%2B5all%2FbPVoYFeNg1xZOwxT7WNU%2FHpOsDqmkB9LJvZWnZ3f%2BsCNxZf%2B8FB3Uuyui7VGGwJV0cUk7sqM81dg47yNk5p8twD%2BNS4X%2BMMd4eMFVUeQeEllH5Jeu1br%2FQ&X-Amz-Signature=e65cf9917b4fe85f4d769d7c1b4e6af7648c7c527c2cb145c5d2fbd31075537a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VZTUYB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD%2BwV5dFnOAcWN7Mmrxvma3MlZfa%2F4BVtrLH3yISf27IgIgD%2FtzXrBUNLr8v9%2B1CxWYD3TZqxfO6Rvfe9X%2Fd5FHB7Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGNi21zP7I%2B43rb9kircA%2F7Ubtlz2FHdJ6yEcAYcetODQBSGwfn223YQAPfowJUCeUH8VKzQ18vUKtmvfOZnKWPpagF1%2F%2B3YZXXCQ5C3jN7zE3lITI0MAujDfpJ4K%2Bpo%2FJwS0Wotc24xrlG979zDVZDGudHySYBe9P4iUiDAipZMNnY9PLLv3o46UCP0%2BlYLLxdTqdc4cMd3W7K0anXvRVBVsFdlSj3LpvR%2BuWEYvv1FDIX%2BvuuTRy2VMcJs%2F2%2Bi1Umko0FgytwlahvOp47Yt0x36xQxKVeQdzCpwRIHKE9zzJjocpi5aDODkWfm6fM5ZbW8gJxP4mS1U17tnwLphtra4QOSKhuwv00BhEH%2FQLOWrTHObQAJSQl7o03vkeoWhSw6R2D%2BBjBdUpDMvBkO8sYP4gjdUvj0zGSG5mij5I5ldBCWjBicumj46vLvQwGJewPxYTBnAqmws0MFfkJo9mSf%2BQNdaLppPCokGMSJB16BczR%2BaGPRjURky6hgxH8PmGrUTNyBC9Blpu6EX9Lf4hHr%2BI7dlKu4EFrSUAnMRfNdfAXOGwjy%2FH34GFnTkYy4GYoVr9Q8GNZuc%2FgJdBq%2B2UBlFAwwVWtEohlhJEYM%2BOQ%2FspCBbgxB0Ic2etwbAvDd09I2Wyu6mRxRZHiFMImqxb0GOqUBQgnto5oqB%2FwFIAMpPX53Ub9zE1ZyQXmmoY99mQdrlmmqg6KSTA7TgTkPx4kFrM1%2FZ8%2F%2BKykd41DqAraBCmNxG4V5Um99jYcW%2B5all%2FbPVoYFeNg1xZOwxT7WNU%2FHpOsDqmkB9LJvZWnZ3f%2BsCNxZf%2B8FB3Uuyui7VGGwJV0cUk7sqM81dg47yNk5p8twD%2BNS4X%2BMMd4eMFVUeQeEllH5Jeu1br%2FQ&X-Amz-Signature=20f96893e818a099e5a60e9f1abb340c7cb7af83cc8b64c858391ad6ed027648&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DGXZJK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCcgqcwFvzrSs20e9CVVGePv0wRYG2T6v3Sx1O4kIQ9GgIgJZ%2FZkb5895LjTQV6%2FEaVxGEhReVhcw1ywt5BPDt%2B1pgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIYAc5FwhGino1PVuircA4gzOdZiJ%2BvVDl7tiuPR%2Bcw6A1w8ofICzFNSMEFrn6zbsnzOjPU4a0KiiV7ipej%2Frw6XVf%2BSywYarKB0BZTZlgWZfpr3%2BOfbUpVSfZBaxQYh%2FhEglW5SadRbnUXdqxDOpMXhyBasZR4dVJCIKml4YOrVIA4Ld%2FgXGhpOb2xldmIgmT22WnzSIBzWNiOQoTVOv1bTOKOQSJEOdXp%2FnV0QltGUUUJftVUY99IZcbT%2BI4qBCmapfH2XAqY6I1imsGxOp5O7MErHSxczW5Yif%2BcwN%2B4vTA8GQn7YOyq2X3pro85Ia%2BsSUDwTeWmY1oHgJlQeHPEm%2FHpdfmvDyc9yp8ObIJefjjPBChaDFM1eBdlmahMAVqfO3GZW6M0Jpe%2BY3YZhYgiG%2FL9W9HQe%2B1fpB%2F2ync3ZNeazppNB1lneknS6f09hIVpGQ238AzFh0QDUokWSFLvNWCG5P4gFvpIpezfVp4n6ejUDSxFzndhb%2FKUFHeDmwTvVra3P3lr5%2BhXHLrHpstuG%2Fhc%2BMtKc%2Fv%2BaJWZtlC8UIpov7xFxfd%2B3Pg4nkoF9yEgSFrgV8VZM8YlgRsrnoBrcX81CYnDAapAipHar2TWDjDT6%2BwtkDjYoQ6DZo32uph%2FVa8RwDFY7mEnNMKSqxb0GOqUBmZ1QvUkP2DwodYgFGV%2FHkEGkW9cOB%2FvpCZgLwUTERcppY9s45ZvRKPs46jk%2B81GrV2ncO3bfee%2FxOg24ZCqIH2Hg4OWuVeiZSAn1qWdsr83R2%2FKaDNgsDh%2F1Lbfvb0MB4gRXKuWRr0fePjTCaeXGJo2g0UKsqm03X%2F2YOoDhN5yJd5e8%2FgZGEMijlFrwOQaLLQrH6XTaezl1Cqf8Ak0ldtVQIpcO&X-Amz-Signature=89788a8b17e336940313090043e9b66ace1f970db3ad4ad8628bfd5d5477d54b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS5X4NN5%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDuvzHV7wciXDDFUqAjTDJbmOPGqQi%2BDczcYIGGmHdzfwIhAIEkzRDUSKlTC%2FH%2Bsv%2FyEGrvUVwbwJymD%2BxKnJOXovKzKv8DCFQQABoMNjM3NDIzMTgzODA1IgxFds5%2B1F5lcQ2X5j4q3AOkPNU29B3iX%2BqlXjBfS2ry9JWwpJGXexS0aBeCGrJ2Isn7rpbvl33n8B95L6kIZb93S4OCSt5k9mQ9phf9BXIK%2B%2FMc0DD%2BjJY43SSEZZX4QNbtzHTmVHI%2FBTpB%2FNMJTDXAY0sOHi%2FpRU6%2Fv8bbV2jDL83wBluQYx%2BkGLCUQdxuahthgfLp7WZxmgtmkJhU%2Fc59ZdqDuUSPXebp%2BnQGTXqOL5%2Fvib6NVp525P9jGOtR0DJF4Ki29p95qgyNaCdiizWuYejNhIvvlP01HPj2SEXdDa59xMYwpkE2sSUih16ZXPJIxg1ijkqNnSoL6qjQ8adn2Sn0ZH52sa0QgGu%2BxQDqn5AWfGUuTayL%2BFH19UxmXCmLvWnVLUM36NUCKeli4wJ2iy37HV9SqKOUzhYZoCyH3QQG2cpWxS1nNTXQXdbHvU7qtgJwsE6u357tE81WkUqzU3ewMlc7SChjOSuMGmyPqEVMygrPXzmHialz02mAGbOUxhhnPX5cbqYSilsKX1GIDUSjUQOlswFpfu4fvUoYnOReJ6n0tZmRVxH%2F5P8gQMjx%2BSPXjfgPhFVG%2BrobmQ5rjbDjQSJ9qvoUBH76IBe1kS8eYkQj91PJvkmRMIUyPT3GmmfY7SbhUPgNRzDgqcW9BjqkAYaJsKk02IX0TQs68oIQqKIADYKcE7GbwIAMUPJqS6APZxmUfAMrFNw%2BsS6vEKtTbCmU0JUrPo0w5y5SERl8CFREiT3%2BH6P5daYEQmcJwphxYeMQ0K11GiyK1XIRR8vnBCe3glo4hNZBxHc8LDirUqhj8DTsrr2rftdOFQZfPSZ64bZ5F4Pc%2FsTrmnzEjDZBI8j6FsoYFYTsCU%2F6hH615j4eFYOY&X-Amz-Signature=9762b7773d0dd95412186964e078e35487f0b6234edee820c42f9c285359339e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VZTUYB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD%2BwV5dFnOAcWN7Mmrxvma3MlZfa%2F4BVtrLH3yISf27IgIgD%2FtzXrBUNLr8v9%2B1CxWYD3TZqxfO6Rvfe9X%2Fd5FHB7Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDGNi21zP7I%2B43rb9kircA%2F7Ubtlz2FHdJ6yEcAYcetODQBSGwfn223YQAPfowJUCeUH8VKzQ18vUKtmvfOZnKWPpagF1%2F%2B3YZXXCQ5C3jN7zE3lITI0MAujDfpJ4K%2Bpo%2FJwS0Wotc24xrlG979zDVZDGudHySYBe9P4iUiDAipZMNnY9PLLv3o46UCP0%2BlYLLxdTqdc4cMd3W7K0anXvRVBVsFdlSj3LpvR%2BuWEYvv1FDIX%2BvuuTRy2VMcJs%2F2%2Bi1Umko0FgytwlahvOp47Yt0x36xQxKVeQdzCpwRIHKE9zzJjocpi5aDODkWfm6fM5ZbW8gJxP4mS1U17tnwLphtra4QOSKhuwv00BhEH%2FQLOWrTHObQAJSQl7o03vkeoWhSw6R2D%2BBjBdUpDMvBkO8sYP4gjdUvj0zGSG5mij5I5ldBCWjBicumj46vLvQwGJewPxYTBnAqmws0MFfkJo9mSf%2BQNdaLppPCokGMSJB16BczR%2BaGPRjURky6hgxH8PmGrUTNyBC9Blpu6EX9Lf4hHr%2BI7dlKu4EFrSUAnMRfNdfAXOGwjy%2FH34GFnTkYy4GYoVr9Q8GNZuc%2FgJdBq%2B2UBlFAwwVWtEohlhJEYM%2BOQ%2FspCBbgxB0Ic2etwbAvDd09I2Wyu6mRxRZHiFMImqxb0GOqUBQgnto5oqB%2FwFIAMpPX53Ub9zE1ZyQXmmoY99mQdrlmmqg6KSTA7TgTkPx4kFrM1%2FZ8%2F%2BKykd41DqAraBCmNxG4V5Um99jYcW%2B5all%2FbPVoYFeNg1xZOwxT7WNU%2FHpOsDqmkB9LJvZWnZ3f%2BsCNxZf%2B8FB3Uuyui7VGGwJV0cUk7sqM81dg47yNk5p8twD%2BNS4X%2BMMd4eMFVUeQeEllH5Jeu1br%2FQ&X-Amz-Signature=0ce558e48a9558297a0e1420d184ff8150bc87b01f51cfc85a3ca4a5fbf53b1c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
