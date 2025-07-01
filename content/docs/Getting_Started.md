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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5ENHBU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChjTKbmEAu9hRZwO2s0EQEwWURtfMYljGQbvymT7BC9AIhAIAzkNwrpUQGN4zP1%2BrfAr%2F04RbZLMSNsasXESNUk3wEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz04ijo0x17b7ERz9Uq3AMOjlK4JmKwzM1hqjUYiXp%2B%2BVizh1pljWId%2BEoTTZQKSnhmP5uHkZ%2FA4K7B6Bm%2BxRjZKjKuCyHqiAIKdfOzobjRCnsB2LKoPo5B3px1DE1zC8QHmudJHd8Qv6GNeKkv4jkm6ywIPQ1FZUiFmDq%2F8eSoqoafmp36cXSGF%2F0ivasmoavWA8wJzIIG6RPxQWdIv%2FkPT7bnvMvImowFpbtWjCm1vUy2a8Q7TKUU94E0HiqbBXLJcWd6xl2giClejwvF4OaDyBvEjED%2F2oQi9n7F%2B595Wy6Dgxr%2B5SHh%2Fzvk%2FXK1Ohk1p3tx4otpfjAytIX64xaK5UIRXzWoMWS8LqNp3MrSd0NxCwHCUV7CqBxkwn2lCo7SbpU3y9ccjASsnMbgbQVxJ5pBMU0wb2uNHiAASyytMAz3D%2B26a%2F7ymfBLrQ7xo3%2F0bPkjwLpXlv0ryR%2Fn7BGiQNhoIGvnmrGA4%2FYstterfmpPpjUAm191nr45X29GlfOjtqmyq0BBlEvKB0QD47%2Bq49%2BicjZ2WrLQX0wknbkBd%2F7NtNJraI6DeO%2F2GHz%2BrbV%2FAvJfhR4x%2BxNdQIIVH5it4DXaxVmPqk6Cl4x7wPmU7AeIHD9dnJ4nquAE%2FlnhHpfNQ55gPsC3PP6HLzCxh5DDBjqkAfGib0rtzu2prqX5I7U4wvDTzX2PyGGHnDtXy5bHfb0jsJ%2FLMtmyMATcxgCCOvrFWPp%2FIjfbLhyCH5kpbDpwErzJ028i9F%2Fs88veiBRtsKXyJP4GSI%2FlmSQM8ZajVgKxZUQQmjMMh1icQdG4sEujC%2BpgwZRSEVnxistmS27HjvSK1KhShv%2B70uQNIsIlEM1YikRbMHgPt023PzXyJWY2NS1vIW5o&X-Amz-Signature=3fb0d6b718ab629b0312925159556ced1d90f4515abe2f0dc5d1e7e9abe5e7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5ENHBU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChjTKbmEAu9hRZwO2s0EQEwWURtfMYljGQbvymT7BC9AIhAIAzkNwrpUQGN4zP1%2BrfAr%2F04RbZLMSNsasXESNUk3wEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz04ijo0x17b7ERz9Uq3AMOjlK4JmKwzM1hqjUYiXp%2B%2BVizh1pljWId%2BEoTTZQKSnhmP5uHkZ%2FA4K7B6Bm%2BxRjZKjKuCyHqiAIKdfOzobjRCnsB2LKoPo5B3px1DE1zC8QHmudJHd8Qv6GNeKkv4jkm6ywIPQ1FZUiFmDq%2F8eSoqoafmp36cXSGF%2F0ivasmoavWA8wJzIIG6RPxQWdIv%2FkPT7bnvMvImowFpbtWjCm1vUy2a8Q7TKUU94E0HiqbBXLJcWd6xl2giClejwvF4OaDyBvEjED%2F2oQi9n7F%2B595Wy6Dgxr%2B5SHh%2Fzvk%2FXK1Ohk1p3tx4otpfjAytIX64xaK5UIRXzWoMWS8LqNp3MrSd0NxCwHCUV7CqBxkwn2lCo7SbpU3y9ccjASsnMbgbQVxJ5pBMU0wb2uNHiAASyytMAz3D%2B26a%2F7ymfBLrQ7xo3%2F0bPkjwLpXlv0ryR%2Fn7BGiQNhoIGvnmrGA4%2FYstterfmpPpjUAm191nr45X29GlfOjtqmyq0BBlEvKB0QD47%2Bq49%2BicjZ2WrLQX0wknbkBd%2F7NtNJraI6DeO%2F2GHz%2BrbV%2FAvJfhR4x%2BxNdQIIVH5it4DXaxVmPqk6Cl4x7wPmU7AeIHD9dnJ4nquAE%2FlnhHpfNQ55gPsC3PP6HLzCxh5DDBjqkAfGib0rtzu2prqX5I7U4wvDTzX2PyGGHnDtXy5bHfb0jsJ%2FLMtmyMATcxgCCOvrFWPp%2FIjfbLhyCH5kpbDpwErzJ028i9F%2Fs88veiBRtsKXyJP4GSI%2FlmSQM8ZajVgKxZUQQmjMMh1icQdG4sEujC%2BpgwZRSEVnxistmS27HjvSK1KhShv%2B70uQNIsIlEM1YikRbMHgPt023PzXyJWY2NS1vIW5o&X-Amz-Signature=1030d0ecfab56780d7ef7cd5a625caaea00cacfcebf94cf2d624143b0d9faf9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5ENHBU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChjTKbmEAu9hRZwO2s0EQEwWURtfMYljGQbvymT7BC9AIhAIAzkNwrpUQGN4zP1%2BrfAr%2F04RbZLMSNsasXESNUk3wEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz04ijo0x17b7ERz9Uq3AMOjlK4JmKwzM1hqjUYiXp%2B%2BVizh1pljWId%2BEoTTZQKSnhmP5uHkZ%2FA4K7B6Bm%2BxRjZKjKuCyHqiAIKdfOzobjRCnsB2LKoPo5B3px1DE1zC8QHmudJHd8Qv6GNeKkv4jkm6ywIPQ1FZUiFmDq%2F8eSoqoafmp36cXSGF%2F0ivasmoavWA8wJzIIG6RPxQWdIv%2FkPT7bnvMvImowFpbtWjCm1vUy2a8Q7TKUU94E0HiqbBXLJcWd6xl2giClejwvF4OaDyBvEjED%2F2oQi9n7F%2B595Wy6Dgxr%2B5SHh%2Fzvk%2FXK1Ohk1p3tx4otpfjAytIX64xaK5UIRXzWoMWS8LqNp3MrSd0NxCwHCUV7CqBxkwn2lCo7SbpU3y9ccjASsnMbgbQVxJ5pBMU0wb2uNHiAASyytMAz3D%2B26a%2F7ymfBLrQ7xo3%2F0bPkjwLpXlv0ryR%2Fn7BGiQNhoIGvnmrGA4%2FYstterfmpPpjUAm191nr45X29GlfOjtqmyq0BBlEvKB0QD47%2Bq49%2BicjZ2WrLQX0wknbkBd%2F7NtNJraI6DeO%2F2GHz%2BrbV%2FAvJfhR4x%2BxNdQIIVH5it4DXaxVmPqk6Cl4x7wPmU7AeIHD9dnJ4nquAE%2FlnhHpfNQ55gPsC3PP6HLzCxh5DDBjqkAfGib0rtzu2prqX5I7U4wvDTzX2PyGGHnDtXy5bHfb0jsJ%2FLMtmyMATcxgCCOvrFWPp%2FIjfbLhyCH5kpbDpwErzJ028i9F%2Fs88veiBRtsKXyJP4GSI%2FlmSQM8ZajVgKxZUQQmjMMh1icQdG4sEujC%2BpgwZRSEVnxistmS27HjvSK1KhShv%2B70uQNIsIlEM1YikRbMHgPt023PzXyJWY2NS1vIW5o&X-Amz-Signature=541957061c5cf7a9fd2616231da10ba6f4b7ced22827f6b553a21374eb621743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UZPNUM%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZX2aQsh1pikGbYIZszve0IXaYW5LCeMvgAHdCXXapxwIhAMAwyC7xy48z6Q2XhNv5tZ986ZCkdJuvh2rLE%2BF3%2BTukKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTFr2InPu%2BwNofns4q3AO82FhIrbJqTT7YucLCOj%2F%2BjqOmexYf7167wrZMXD1TZwa7Bj62rM7hyO3S0gdrW3O%2B5jWjh5hHoOrw6Q6fRTCiQT%2BKNAAP2PDvMtvTC4vTiywAUJ3tbqA6qxPwTYFo7%2BECu8na4%2FRFuleBIHM8wTHGjuEf0msZRyTvv7Br7hc%2BtD3fLkWDdgf%2Blxr%2BXK34aqgB1sfRnEQY0YuCEpaGkKcAfM04g3lyMmdhQKmaaHniLUoXSRw5jYoWGzZtyOXC92ORflXNcBP3uUxLBcCotSeNa6ROv1wUkghcBzH8wOzD7ZPEC6UT1li1mOD7Eu5%2BMKL9BkRgXPLxO4R2AhX9LusiyVb3It0cdjvhCQPX2t11gYkoFw%2BeNAeAYlKl8n2q9rrVcXsDwjI1TBWehe%2BSqen0AVrcPKCAXg4OvFY29nW39en%2BIU%2Bo2Au%2FiAYocMMVIgKA61K%2BkLtT6qqNs5ljqfB6t7zloiGgVJ9D9jO0wLEq9vtLSD0cO%2Fsq3%2FJDBlDhWpEN%2Fk14XeXA71NHRw67qrJ1%2FudpvM1d8dMg1vTIjpGyylOJzwINmVoVPGZig8Uap%2B%2BIfv0FzSWjWUsz0ZUBh9iy2IybRcKvjcd7zttDXGRsODTodhldMKkTlGt3vDC2iJDDBjqkAWjdimmIqDPgXNE8Bv3IFlszq8Kf7GeCgPZdOZSdrhWEWQQKjZbpF3ilTwEoeMJYXAJKX25MeBk4RN09IG3obZAPc9YVZvi3qAB923KGXI9%2BWJPHn1ToqIpTopkJaV3Y5jiGCYCPaNwMQM%2FCbpCWXD0H8Vw8fNeTANXNkRVlB%2FqXyUxZEXvFuIPWKxoh3Q4avPdBMSzaMbajWIkTMLlJoBnFKSgk&X-Amz-Signature=0a34cf558568c184f6875f24b2129dcfb5e6b393f4cf7bae2d7afebdf538e933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTEGLEO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEU15f%2BeRmRXz3GaaiWJzutHdXX5gmsR7PztUFRjjBFeAiEAjAPPS9BHYcmDoe6AoL0M5yRHcUEy7DY4dH6kOVzMU38qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjHO8iPHzMFNo%2FsbSrcA9gmo6OkG%2FWRvhnaq4t4mfmGFMF8J0w3bHpqTaFl5W8emhltVkssOUM%2BeZ7mMkxHuM0dXZCRGMGLHt8PV3vl8ridc1pObM4UM18FmDkt5FD0EGu3A4rgfq5hahQcdhjmmG5aXp54Ho0LaspLk6vwClAiG%2Fe2GaTG8xwGDlCuwDpw7w19yO%2Fydm5LglAKaIPoC6UQmh88DxgOo%2FqW0wKnzCykhID2sFTDuXHUZ2dH5%2BbUZqonoSlkoZsxpA6hZNaKQNANjjQtLR0oYkkzbFLcI%2BPvmpfSEANFlQBOb3GTqgdMP1MMvbXjoIBQw7e7cvwMl4K%2FfphLFKN45%2BDx%2B84MPCA8u14U0mAFHfqTHIKC55ciNTrm0FCnveOgpYhtylgtQFVrKzDwUsGrXKzmCddXvBYY%2BNDsTY0Md9GZzCZF97mBOe6UNObIylJE7CPR5kogbAm7GvJZH4X68jG3Ocx3Z%2FGTpPmZtX1fLz3hJbvxCXlc7DLlYkh2llKByLOXB7SfB8uZczEhRUfn0a%2B1CCTJXEbnuMqPcOxRq19VbsByDgPEuZ25zwZa8zMHBdtr6brQQO5G%2BCAFyG5nqyF7k%2F7VmjejacRBjlPBIHt37c1HwQvIfrJOzyLRHnPfe9KRML2HkMMGOqUB%2Fb86YWC9hS1DxMtNpR3l76R6QC8gluOJqnOVRnr63X06WCm15JCdFuDrrl0VMOelQnGI53OX7G9bAZw8U%2BFlIT55D%2BPJOkE2aQgRg1sJC1tF959QvsyENx86lB%2F02duiYhkhwy9oM%2FOLLOAaBL%2FM6b29K7aHU4iBA%2FyKMQ%2FFwMymvLaPXv1hjgNBowF9%2BE4%2FQyneXfc73l%2F8Kidk4X12JzcsjZ2a&X-Amz-Signature=11e0a62ecfd2df44fa4a3623a3c763ad4156f171e4799ed6c15e73429394b1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ5ENHBU%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChjTKbmEAu9hRZwO2s0EQEwWURtfMYljGQbvymT7BC9AIhAIAzkNwrpUQGN4zP1%2BrfAr%2F04RbZLMSNsasXESNUk3wEKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz04ijo0x17b7ERz9Uq3AMOjlK4JmKwzM1hqjUYiXp%2B%2BVizh1pljWId%2BEoTTZQKSnhmP5uHkZ%2FA4K7B6Bm%2BxRjZKjKuCyHqiAIKdfOzobjRCnsB2LKoPo5B3px1DE1zC8QHmudJHd8Qv6GNeKkv4jkm6ywIPQ1FZUiFmDq%2F8eSoqoafmp36cXSGF%2F0ivasmoavWA8wJzIIG6RPxQWdIv%2FkPT7bnvMvImowFpbtWjCm1vUy2a8Q7TKUU94E0HiqbBXLJcWd6xl2giClejwvF4OaDyBvEjED%2F2oQi9n7F%2B595Wy6Dgxr%2B5SHh%2Fzvk%2FXK1Ohk1p3tx4otpfjAytIX64xaK5UIRXzWoMWS8LqNp3MrSd0NxCwHCUV7CqBxkwn2lCo7SbpU3y9ccjASsnMbgbQVxJ5pBMU0wb2uNHiAASyytMAz3D%2B26a%2F7ymfBLrQ7xo3%2F0bPkjwLpXlv0ryR%2Fn7BGiQNhoIGvnmrGA4%2FYstterfmpPpjUAm191nr45X29GlfOjtqmyq0BBlEvKB0QD47%2Bq49%2BicjZ2WrLQX0wknbkBd%2F7NtNJraI6DeO%2F2GHz%2BrbV%2FAvJfhR4x%2BxNdQIIVH5it4DXaxVmPqk6Cl4x7wPmU7AeIHD9dnJ4nquAE%2FlnhHpfNQ55gPsC3PP6HLzCxh5DDBjqkAfGib0rtzu2prqX5I7U4wvDTzX2PyGGHnDtXy5bHfb0jsJ%2FLMtmyMATcxgCCOvrFWPp%2FIjfbLhyCH5kpbDpwErzJ028i9F%2Fs88veiBRtsKXyJP4GSI%2FlmSQM8ZajVgKxZUQQmjMMh1icQdG4sEujC%2BpgwZRSEVnxistmS27HjvSK1KhShv%2B70uQNIsIlEM1YikRbMHgPt023PzXyJWY2NS1vIW5o&X-Amz-Signature=16742788f38c806373e8095899b44d87c2ba1979a53ae9b8367beb0e0cb2b520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
