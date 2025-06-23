---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDIIRQY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCfwSTGmeoRVTaOvOUPisUdV7o7c6rI8BoXC33%2FrIDPvAIhAMfZ6WG6gTLDG0zPKPivkPYA8Ptj8xF1atSOl%2FtDx9djKv8DCBEQABoMNjM3NDIzMTgzODA1Igws%2FIvxvBeXQn5gTW0q3AMV0WTCBdpiLgBcJRPRDMEmOZF%2FEh0Jc9c%2BEc6jw3VxVZhQe%2FID2rzj%2Bq9Mn9YORnAvjrzLzumrhW6yR2EG8oQ2FnRtsT8idYm3y6wkwPAs2hAG4SgqwkcrDkzJN8jkXzdGcgbZ6YZ4nc3zMsCPXVztQJC0RPh4CX7oR689O%2BclF%2F01xX5v3rwAXJqKG0zMEgQ%2FDSqEJd3O8sbTFWadPn0Cc0%2B54fh48W9HNr%2FiRkggrRlwbIs17k%2Bq38RpIpjxUPYAReFAVu9akOGMUH5fd4KjooDXu69M0LQSreKP2coQ5FvC4GwokN8OzGJmSYfvJdnQGZueE4rimHhF%2FCh9qCOKMywyvdQkgMHgSMqwpL%2B7Zz7nOVXs7ERVl4%2BynGZftSRdsZRBjYR%2BvlxkoqOh6u3cTT7%2BncHCR67vJoCLzc6F9GsGv7k7zVY3AbthVsNoivuPe6mI5wyOJtVjcu4y5E%2Bu6g6UaAhC6y0SQv%2F4VZ6gq48i32mqMwRevyngSKGwVVQR9zSEqIHdvApypc87mrM7fXf3d9%2F2uP7lkZZtPLPjS0gU5nrvPR8F3eB4xswtZewF%2FXQPA44TdqEEyYHbW6QR9ec7%2B%2Bu%2FtGyPnuSscHo4yKi1ejtJ3U5a8gqWzjCRiuTCBjqkAb1uxOUSNsfOaSBf5yDdrGBlyo%2FqtFgrZu2aoEOkdc%2FkiZI5pVABrnh6nqwnDHxrc2jgRA7KsOubP666rNxe3ewJiIwQWvOySYfDz%2B7KzkHRjhXVOS4FEOdb%2BbF9%2B3UDX%2BJfNxhlGUpnGlffLTLkSi20AGMKGpNC%2BG6AOviknB2hjOrD5Ddqn4%2BNsNcI%2F6isuiaEvFWxYSQy1Gy3f5VbEe0QzgfO&X-Amz-Signature=0c23d67fd34b9d0073533096e8334f5b157d7aec37ea6247980443d51d3ae781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDIIRQY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCfwSTGmeoRVTaOvOUPisUdV7o7c6rI8BoXC33%2FrIDPvAIhAMfZ6WG6gTLDG0zPKPivkPYA8Ptj8xF1atSOl%2FtDx9djKv8DCBEQABoMNjM3NDIzMTgzODA1Igws%2FIvxvBeXQn5gTW0q3AMV0WTCBdpiLgBcJRPRDMEmOZF%2FEh0Jc9c%2BEc6jw3VxVZhQe%2FID2rzj%2Bq9Mn9YORnAvjrzLzumrhW6yR2EG8oQ2FnRtsT8idYm3y6wkwPAs2hAG4SgqwkcrDkzJN8jkXzdGcgbZ6YZ4nc3zMsCPXVztQJC0RPh4CX7oR689O%2BclF%2F01xX5v3rwAXJqKG0zMEgQ%2FDSqEJd3O8sbTFWadPn0Cc0%2B54fh48W9HNr%2FiRkggrRlwbIs17k%2Bq38RpIpjxUPYAReFAVu9akOGMUH5fd4KjooDXu69M0LQSreKP2coQ5FvC4GwokN8OzGJmSYfvJdnQGZueE4rimHhF%2FCh9qCOKMywyvdQkgMHgSMqwpL%2B7Zz7nOVXs7ERVl4%2BynGZftSRdsZRBjYR%2BvlxkoqOh6u3cTT7%2BncHCR67vJoCLzc6F9GsGv7k7zVY3AbthVsNoivuPe6mI5wyOJtVjcu4y5E%2Bu6g6UaAhC6y0SQv%2F4VZ6gq48i32mqMwRevyngSKGwVVQR9zSEqIHdvApypc87mrM7fXf3d9%2F2uP7lkZZtPLPjS0gU5nrvPR8F3eB4xswtZewF%2FXQPA44TdqEEyYHbW6QR9ec7%2B%2Bu%2FtGyPnuSscHo4yKi1ejtJ3U5a8gqWzjCRiuTCBjqkAb1uxOUSNsfOaSBf5yDdrGBlyo%2FqtFgrZu2aoEOkdc%2FkiZI5pVABrnh6nqwnDHxrc2jgRA7KsOubP666rNxe3ewJiIwQWvOySYfDz%2B7KzkHRjhXVOS4FEOdb%2BbF9%2B3UDX%2BJfNxhlGUpnGlffLTLkSi20AGMKGpNC%2BG6AOviknB2hjOrD5Ddqn4%2BNsNcI%2F6isuiaEvFWxYSQy1Gy3f5VbEe0QzgfO&X-Amz-Signature=7716d9133d09120c8f081a7818216d4b648a4c930eb4c4ef38e9eae714517fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDIIRQY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCfwSTGmeoRVTaOvOUPisUdV7o7c6rI8BoXC33%2FrIDPvAIhAMfZ6WG6gTLDG0zPKPivkPYA8Ptj8xF1atSOl%2FtDx9djKv8DCBEQABoMNjM3NDIzMTgzODA1Igws%2FIvxvBeXQn5gTW0q3AMV0WTCBdpiLgBcJRPRDMEmOZF%2FEh0Jc9c%2BEc6jw3VxVZhQe%2FID2rzj%2Bq9Mn9YORnAvjrzLzumrhW6yR2EG8oQ2FnRtsT8idYm3y6wkwPAs2hAG4SgqwkcrDkzJN8jkXzdGcgbZ6YZ4nc3zMsCPXVztQJC0RPh4CX7oR689O%2BclF%2F01xX5v3rwAXJqKG0zMEgQ%2FDSqEJd3O8sbTFWadPn0Cc0%2B54fh48W9HNr%2FiRkggrRlwbIs17k%2Bq38RpIpjxUPYAReFAVu9akOGMUH5fd4KjooDXu69M0LQSreKP2coQ5FvC4GwokN8OzGJmSYfvJdnQGZueE4rimHhF%2FCh9qCOKMywyvdQkgMHgSMqwpL%2B7Zz7nOVXs7ERVl4%2BynGZftSRdsZRBjYR%2BvlxkoqOh6u3cTT7%2BncHCR67vJoCLzc6F9GsGv7k7zVY3AbthVsNoivuPe6mI5wyOJtVjcu4y5E%2Bu6g6UaAhC6y0SQv%2F4VZ6gq48i32mqMwRevyngSKGwVVQR9zSEqIHdvApypc87mrM7fXf3d9%2F2uP7lkZZtPLPjS0gU5nrvPR8F3eB4xswtZewF%2FXQPA44TdqEEyYHbW6QR9ec7%2B%2Bu%2FtGyPnuSscHo4yKi1ejtJ3U5a8gqWzjCRiuTCBjqkAb1uxOUSNsfOaSBf5yDdrGBlyo%2FqtFgrZu2aoEOkdc%2FkiZI5pVABrnh6nqwnDHxrc2jgRA7KsOubP666rNxe3ewJiIwQWvOySYfDz%2B7KzkHRjhXVOS4FEOdb%2BbF9%2B3UDX%2BJfNxhlGUpnGlffLTLkSi20AGMKGpNC%2BG6AOviknB2hjOrD5Ddqn4%2BNsNcI%2F6isuiaEvFWxYSQy1Gy3f5VbEe0QzgfO&X-Amz-Signature=9ef8a016938cecd2d668f213b52ed2c52bac54dd861de95a4e76a79cae1837b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTON2OK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDOCs2edWTHrGacrs63sbVDCP8bkXpDqJE4M7PVudJ60AIhAJE4TZ9jMFGsegW%2BIIWTo%2FnEme%2Fglnf1YhStOGHr2HLjKv8DCBAQABoMNjM3NDIzMTgzODA1IgzZnAnJOjnvGQtiaUkq3AOmFAPjOH0b38Xkbpijzv34BeUtDNFlqq%2BW6TLjNV5xmxq0ZYM0x8sEtN4VFevANLtrQ%2B3hIizU%2BGYsM2zXnz%2FTVG9WqRY%2B4eeQrXD1jAqtnnAd%2Bkf8KP2FsDoXE9Dtyb95fWtalzI1QM8iTwiXtZddStFa%2FRYj%2BHpOoWW0t%2F0nHVJoV6y7IP8GOTtoNLDpVGRWRW%2FfPWB%2FSzGSOwrAYCFFZJh29mczrg96b2paTS8MDB5a42kgBDbCcmB2UQwo3ViKnpaNk6TVDr46igi%2Bj0Mv4n3Gwipm3nsKiR6WrhkSa3tPIG%2FmeklET1IthoJ8TXx69S2%2Bcv5UMlbYTsN%2BGMusHYol8B%2FU%2BmK9gTteEIJecyes2dKWuWwqfDdTqMa75wQXiFm%2FYVNLgbf0JoMfA0QTm%2Bts3MCBroTOxsqWJPeR%2FHJBRzbaRMta6R8Fv5wUjXsh4%2BKO8lSTp%2BUfODmj1C6jiF58xMcOQmAnIwtM5zhziBbfdnLxS%2BDxIZKrYodobrs8Gvm%2BCbQcHo%2FrlKfYMh7SK5AeeX9eux8xU%2FyPjs3OocxQnehajo5xBmeeq8Jed09fLfZR3CHlSdi6lovHkMAlgRdJlZMRq4oDvSZwh7lQBS8759XMetOd8BD9ZzDm8ePCBjqkAU386MHLSKzZkpJIa5IywQBvl4Ak29%2BTUc2zU8cKR8siCKRIFlnovwF8Mzav6RIGer2UluslYSRj2LRILEPCdsVwpYPjYk5lbjzG8Y1%2FFLUJU1NOScj3QI5rpAQrPSoLv3af6W23fZPQBTKYUroPJVNK%2FxGYLlRCdFfN0UYHr6zg88VX171MOqCqaNwGk8LCxK9KO%2FWCbzpzs9UG8ecu%2Bg%2F8omi6&X-Amz-Signature=5c6e6ab03d8361d7d29b20067e9b4d886e3834ba773e1673f462ea93ad46a477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH237PYS%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDnLFHcQVx6kAUADUvvgo1k1i6AY3rPecvrRvuM5G%2Bz%2BAIhAKSW9qelqg8jZj86yS0JIMVykn1qyb8eABeAYxHvwGlsKv8DCBEQABoMNjM3NDIzMTgzODA1IgyejMYR%2FByDi8Bh%2F3gq3ANn%2F%2B0345henFFnZEfy8UztP%2B%2FDY6Z5GPgPZWQ3NbychUoczqkIE1bSaY5S83akXxhSgQQ5ESk8fcsgUVoutG59vakyNIxbL9cLhy0U83z4HOD1gz20AuV8DKV85qSEeRqRs%2FjpQmDl9ZEnq1HvC33ZjE9sSLu7WwsGJaqNTe%2Fdsdt8V5Xz8YFxMZ2TTd9VmHww1rKJ8dDT%2Fr%2FfRYA%2FhAVgq45FXR4G7AT9kmP5QpzEJfRq1e%2B2e%2FVLAZtPGqh2jXg%2BpdCt%2FxDtI19wavMEPeK8Soql%2FPNjuXs%2Fc8wr3HwXnVAWC1htutZuajKDeEiynGt%2BWo%2FPveesQJbwCZFq%2FnSM0cwTLrnlj0ngtxy%2B5Zs7r89jlAdWK2bqooXHb%2BPf50FHPPvU%2BClRhV38eYPmKGu88QqQzC9wIbHqfxg%2Fqceci3EQwc2g7Z6Ykw9hku%2BiQFzfpgdR9LdtFqiUhQW2BioG%2FUqsDauHwNUF7XSWTotlv4wbZ%2FnUB7RduntZh8Z%2BkAyKl8YoFPBF5S%2F2fKBemUOXBs9%2F0%2FOX0BVegtNxBH%2Bxo0G%2BW5kma5C0HcCQdfa3sDKfzG9UpsCAawjoqUxrna%2F1ukIQQ5JXcFUzq1h72nusgAw5zZREcHwfSKIWDjDam%2BTCBjqkASWpsFp1s%2FHPUF%2BYUzx2KBfg%2BIiPJjyHcNOMrGXGwcEv9w8trgtU8qeJlSeEkzZvvJhL8UMEozMmyt9uF0lYYYaIg3ldYbXD9aKyFUufPofwfK9Nte1tinplAcHM6833kLcz%2Fx6ncw9nDu3pPBshVFuSUQEj29GixjvU%2FDosDCW%2BO48twcB1T%2BhrU0g5UeUDWdxrN2twh9jwjfDogjzmAdOpEo2H&X-Amz-Signature=fd1075ef4b1d762cf8849df71d1c408a3f3248fd3d4f904fd3faaab822b945cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQDIIRQY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCfwSTGmeoRVTaOvOUPisUdV7o7c6rI8BoXC33%2FrIDPvAIhAMfZ6WG6gTLDG0zPKPivkPYA8Ptj8xF1atSOl%2FtDx9djKv8DCBEQABoMNjM3NDIzMTgzODA1Igws%2FIvxvBeXQn5gTW0q3AMV0WTCBdpiLgBcJRPRDMEmOZF%2FEh0Jc9c%2BEc6jw3VxVZhQe%2FID2rzj%2Bq9Mn9YORnAvjrzLzumrhW6yR2EG8oQ2FnRtsT8idYm3y6wkwPAs2hAG4SgqwkcrDkzJN8jkXzdGcgbZ6YZ4nc3zMsCPXVztQJC0RPh4CX7oR689O%2BclF%2F01xX5v3rwAXJqKG0zMEgQ%2FDSqEJd3O8sbTFWadPn0Cc0%2B54fh48W9HNr%2FiRkggrRlwbIs17k%2Bq38RpIpjxUPYAReFAVu9akOGMUH5fd4KjooDXu69M0LQSreKP2coQ5FvC4GwokN8OzGJmSYfvJdnQGZueE4rimHhF%2FCh9qCOKMywyvdQkgMHgSMqwpL%2B7Zz7nOVXs7ERVl4%2BynGZftSRdsZRBjYR%2BvlxkoqOh6u3cTT7%2BncHCR67vJoCLzc6F9GsGv7k7zVY3AbthVsNoivuPe6mI5wyOJtVjcu4y5E%2Bu6g6UaAhC6y0SQv%2F4VZ6gq48i32mqMwRevyngSKGwVVQR9zSEqIHdvApypc87mrM7fXf3d9%2F2uP7lkZZtPLPjS0gU5nrvPR8F3eB4xswtZewF%2FXQPA44TdqEEyYHbW6QR9ec7%2B%2Bu%2FtGyPnuSscHo4yKi1ejtJ3U5a8gqWzjCRiuTCBjqkAb1uxOUSNsfOaSBf5yDdrGBlyo%2FqtFgrZu2aoEOkdc%2FkiZI5pVABrnh6nqwnDHxrc2jgRA7KsOubP666rNxe3ewJiIwQWvOySYfDz%2B7KzkHRjhXVOS4FEOdb%2BbF9%2B3UDX%2BJfNxhlGUpnGlffLTLkSi20AGMKGpNC%2BG6AOviknB2hjOrD5Ddqn4%2BNsNcI%2F6isuiaEvFWxYSQy1Gy3f5VbEe0QzgfO&X-Amz-Signature=8f548ad45f3cf571fe38ab0aac04c5e0b54f8697a04926ac50cf58bd7e66e8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
