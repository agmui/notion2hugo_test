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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3D2GL2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK2FeJl1ev%2BEbKIZO%2BJ%2F%2FgQ5kJAxpHutzpJDTywIzaNAiBgeHAmsUrUckDLVBwmEPGe53ENnDF3bNd4VUp4cjg2yyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHFXohypCIg2QKfxbKtwDvMy5MZe1q4hAjyt2SqxYboFY1ldlVVaMTtleg%2FnznQt54DgfXxQkaN75lPmULaH8GVpa2K8C8PjthaM9gNhQYecXaPAH1v80ZswOu1XywqyQWPEoM0fiyAQ0p49DS5XVXbFgjB63IR9tIiB7%2BvElGHq6LRnwoOUMHgkBUOUEEtgkQEdzU3pQxS2kllzU0zv4srcTqSLvT8mmkqpK9oeCZOgCPWwEPdYYWAMb6twmaAKI8hlek3x4DI%2Bmq8NACOhOat8RN6CdtWLmN8qaU3QzB%2BsL5uK%2F0ccSmAUlpsk0rHZz0kZ0AgBnSAmEs5FaHUImgC876c5eJABcelcri0BVFla3Hep4faM0U6YgEAcufBhqHVgzMKAdcImh6WI1WtoEPkSEBsKtv9ph7CG7SmlXMOI%2BE8AZ0QM37dfoYtqHfZ891AMJ3bPaAyUXNq0ePVrfeB1j4VcLSHZM%2Fl32nGIe%2FxaiuMkDuUNIZ0bPiPC94dAXTPgVwkqPD1EgKeQZ%2B7huiqvuzOGe%2BxGY%2B33UA5xk7e4wa1rmAu9rnOqNkv7K1UMulULbY9K6xT7y9eghRYwfk9RsKQCBlPWluL0hU8YOMGYgyGMgjmJvNYLgTuo7dYsML0k0XbTYICN1JDAwssbPvgY6pgGrYd60gG0esyS9TSndSUarSOhAfwRNGbkP6QGAJ16KQJuR49a%2FmCYogq0DN9xBFTPcUldTPaq9PmU8ous8lOJdjjSC2sW4Hl3K66%2BEFBdpGwCK9kaKSz605L%2B8Ou3xYMLp1IlkOnGFvL0F9YaTJldldjfUbPPgQcSOdG3ZHecK84qa9fCcvAWLVhf%2F1zTUHms7kAceW2eYsYGdJeLmwYPKIKHOmGKY&X-Amz-Signature=256c20cae1e73225e1340e7ca9eb5a78aba1a4728dc00a1d81d05adf9bfcbd24&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3D2GL2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK2FeJl1ev%2BEbKIZO%2BJ%2F%2FgQ5kJAxpHutzpJDTywIzaNAiBgeHAmsUrUckDLVBwmEPGe53ENnDF3bNd4VUp4cjg2yyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHFXohypCIg2QKfxbKtwDvMy5MZe1q4hAjyt2SqxYboFY1ldlVVaMTtleg%2FnznQt54DgfXxQkaN75lPmULaH8GVpa2K8C8PjthaM9gNhQYecXaPAH1v80ZswOu1XywqyQWPEoM0fiyAQ0p49DS5XVXbFgjB63IR9tIiB7%2BvElGHq6LRnwoOUMHgkBUOUEEtgkQEdzU3pQxS2kllzU0zv4srcTqSLvT8mmkqpK9oeCZOgCPWwEPdYYWAMb6twmaAKI8hlek3x4DI%2Bmq8NACOhOat8RN6CdtWLmN8qaU3QzB%2BsL5uK%2F0ccSmAUlpsk0rHZz0kZ0AgBnSAmEs5FaHUImgC876c5eJABcelcri0BVFla3Hep4faM0U6YgEAcufBhqHVgzMKAdcImh6WI1WtoEPkSEBsKtv9ph7CG7SmlXMOI%2BE8AZ0QM37dfoYtqHfZ891AMJ3bPaAyUXNq0ePVrfeB1j4VcLSHZM%2Fl32nGIe%2FxaiuMkDuUNIZ0bPiPC94dAXTPgVwkqPD1EgKeQZ%2B7huiqvuzOGe%2BxGY%2B33UA5xk7e4wa1rmAu9rnOqNkv7K1UMulULbY9K6xT7y9eghRYwfk9RsKQCBlPWluL0hU8YOMGYgyGMgjmJvNYLgTuo7dYsML0k0XbTYICN1JDAwssbPvgY6pgGrYd60gG0esyS9TSndSUarSOhAfwRNGbkP6QGAJ16KQJuR49a%2FmCYogq0DN9xBFTPcUldTPaq9PmU8ous8lOJdjjSC2sW4Hl3K66%2BEFBdpGwCK9kaKSz605L%2B8Ou3xYMLp1IlkOnGFvL0F9YaTJldldjfUbPPgQcSOdG3ZHecK84qa9fCcvAWLVhf%2F1zTUHms7kAceW2eYsYGdJeLmwYPKIKHOmGKY&X-Amz-Signature=4d06d52059d1d428427d222e70a8d21b883ea778452a9604e988ad67291ee6f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVNTVSH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8xDoklEjimzEnQYGUVqnHC4EwXqpFEbf4B5eYCC4YfAiBLaRs6U3luRnJfKj3cbzocUF8bWyfZ4ja%2BXJxMt79aEiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFYxAODAl8J74xjgWKtwDem5M%2BCO6Qi6aqW3heTCDnNXbK5gn%2BX1j0IV6erR%2BdJl99VEU1h6ovRSB%2FE%2FBg7dsaFptWVgd60%2BvWqzul5tdXTLXdBpCVWGA6hx3%2B1naacvFKmcrjYK3O77EZZxKe0s1xGR8tE6JQUjQg3zvLhLj7tTPx6xU83B4UqkZlruz95CgXxAsdUbig0vxtvl53U%2Fqu0OLMYAEVeBdeM9SCHPQBKnXDs0FJFzVhunIMRw1RAzZRs%2FF1%2FSHj9xHk2nsxzCeicZbCik1wzglvCsxS9Z8AHT4Z8n1U5YeXl0IFg%2FzSdkBkHD%2BqHgWDHqnC4IySzqCnk%2BBdhi2Ui4ahkTY14WEcinGCivNga49XcM1SMA904%2FJ6n3k%2Fm90koJA71rKXaspsW2VSYL8rLiDKtFVx7buODcpiSwK%2BG4jmQGVQR4HfexOjuj9HBhGYFi0oXG1%2FyFFUyJ49GUo6%2FY53q%2FnwkktVBpdqhH8iRXSM5erUzT5N09FvxRKha0WTd4FRfQG%2FyRZAaUQ2NyboAOB3CW6irq8%2FJXQ4jgsA3N1ntZChoqWlFgFOsE8bV2aGnBLLK%2FHPGZvmv90D4JNuNHJdy%2BaDCmGp0K%2FMe0tEnnOEjaPtCdiTtAeqWmM8CWntM0pssowsMbPvgY6pgGAdH4vg8bb3SIbN4SFCDoGgEGeVQH8sps%2B%2FtLSyZf%2FmW9R75MD9goLewe%2FHM%2FzF5l7OJ0oIxzVX7gYOSe%2BXJ7DYbVNuxyBT1UY0rzU0gkje92%2FfStPh%2F2Lp4hGfjWZYdExXYet4%2BlZWrxzndsN0BbVhk9BgZdNn2ZWU0jpxjg9Z86QlKKvVH4n6AfeK%2BcY3hbcRryNkOxBWEUnAswE6nam3NhJD7I6&X-Amz-Signature=e81a76358388c6c3d1ac1879d48a8138fb942488629111d4e08145756f976ace&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637DVLVO7%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqUDATUTwExNMSU45gcOZbmcC%2FjO1Xa8sx4DbuTymapwIgFkdPuIQR%2FT2iWga8%2FtQxDOac45AZU%2Fg0KYUgSOZJiPcqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIcY%2B4cxOblplttdyrcA9WC0%2BXKIfx53pAl13PUXkSA4V2Md4dm%2BaqHbtN4EjhmMPkdwi1v0IPfPiZShHuMYPcc%2BWkLXfBzfS2fJJA%2Fa7OjFf%2BMnFMQQns7G0s2rZ8Ewd5uoImHuAOTW012uyE8UzNvCmMpGEY0MBMRPdLkAJCIhAP1Xc3uMOwEoSOBnm87ljO%2BsoAexJI5N87CgK5NzXk703cwRdF5uhBRlA8aeOYgjnUiVLaYRJbcyiz88ur9odd2yvLJhMkViaoUhLH5rKbXbVTyEwlC9AjjbSTK1pSAYYUPRwNulozV8ESJ7AVSFXN%2FA%2FIndeEsL%2FEHrPKd8mvf8J2Gc%2F%2Fv0zG%2FqAltO3c5sRRq9atynD79N23rSCobUOLu4qN3Qsj%2FgX4FmQU17p%2FXtqXnb46jDflXcRKRkgXZSlY7zIJdYkCM3HHABOqA3qbnwLNVic1%2Fvi6whTnV7zVmRum%2FqyTUjne1JQv%2BR0J2qHvrlm2k3dGVYHc%2Fcc2cF8dccwinGafbXixG5X9JT4WZ8UpgkPYjjWjaknZ8D%2BoTOSkBcpOmodFS0DNGrD8Y3lQXKx8UBdKFNOTkmztddvvS79uvWHpWvvuLyUFFjS74In%2F2yVkaYRa5u%2BNfocIoS2iAPG32Q0YorEezMLDGz74GOqUBuFL0vjEOmf9Z3GAUXe8queYpin3TOvoOyHSQ1DahDJN%2Bn7XDt%2F22JhGvXDwxdnnK3cn7JNxfokuoyo6qFecpusp%2B%2BdEsO2%2FhXR3S8R6a720VYA8Z6pLUndpe7151LxIpD1atSZM%2BIM0FXwbR8tf0%2FVA%2BY9b0MLb1bduUUM%2BTGji%2FcaKef0RfFsKvPhLS5Ak5EHs3mc3efs%2FueYHS%2FMUn5pJ9n%2FBX&X-Amz-Signature=5289edeae4e562518367f96003eaaa4977d9b097e3cd8f68d0659875975b70f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI3D2GL2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK2FeJl1ev%2BEbKIZO%2BJ%2F%2FgQ5kJAxpHutzpJDTywIzaNAiBgeHAmsUrUckDLVBwmEPGe53ENnDF3bNd4VUp4cjg2yyqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHFXohypCIg2QKfxbKtwDvMy5MZe1q4hAjyt2SqxYboFY1ldlVVaMTtleg%2FnznQt54DgfXxQkaN75lPmULaH8GVpa2K8C8PjthaM9gNhQYecXaPAH1v80ZswOu1XywqyQWPEoM0fiyAQ0p49DS5XVXbFgjB63IR9tIiB7%2BvElGHq6LRnwoOUMHgkBUOUEEtgkQEdzU3pQxS2kllzU0zv4srcTqSLvT8mmkqpK9oeCZOgCPWwEPdYYWAMb6twmaAKI8hlek3x4DI%2Bmq8NACOhOat8RN6CdtWLmN8qaU3QzB%2BsL5uK%2F0ccSmAUlpsk0rHZz0kZ0AgBnSAmEs5FaHUImgC876c5eJABcelcri0BVFla3Hep4faM0U6YgEAcufBhqHVgzMKAdcImh6WI1WtoEPkSEBsKtv9ph7CG7SmlXMOI%2BE8AZ0QM37dfoYtqHfZ891AMJ3bPaAyUXNq0ePVrfeB1j4VcLSHZM%2Fl32nGIe%2FxaiuMkDuUNIZ0bPiPC94dAXTPgVwkqPD1EgKeQZ%2B7huiqvuzOGe%2BxGY%2B33UA5xk7e4wa1rmAu9rnOqNkv7K1UMulULbY9K6xT7y9eghRYwfk9RsKQCBlPWluL0hU8YOMGYgyGMgjmJvNYLgTuo7dYsML0k0XbTYICN1JDAwssbPvgY6pgGrYd60gG0esyS9TSndSUarSOhAfwRNGbkP6QGAJ16KQJuR49a%2FmCYogq0DN9xBFTPcUldTPaq9PmU8ous8lOJdjjSC2sW4Hl3K66%2BEFBdpGwCK9kaKSz605L%2B8Ou3xYMLp1IlkOnGFvL0F9YaTJldldjfUbPPgQcSOdG3ZHecK84qa9fCcvAWLVhf%2F1zTUHms7kAceW2eYsYGdJeLmwYPKIKHOmGKY&X-Amz-Signature=b9f6264fb573795ab5c2131f48777f0ec68b6b8c6f0744e48bdac2049efeff57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
