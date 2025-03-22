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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFD3ZOI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJFMEMCH2pA8uRPrE4JuGooonfq6yqFdeMifiBQZOLtu%2BgyXCkCIHCSZe%2Btp9XSqWUzF2QsMKn4H5jYaqlr4fZRu%2FgNsEBmKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysiH096vMflfvvlnoq3AOd2148jI1aMUefHyfTh7H37q3rihOEOBDgOTr6BTsLK7Ff8jdHubeiKQlJT7EDbKmbZ2TzYFeyI9uqsN%2BhW4kgH0o0mcA%2FNS3aRKM8IOrOO5nqGGVs%2FXEPSlr4NKmVbIw6JoLB%2FGPNfJ3s0QsmOUR6huvIVD%2FDrAzvks0Wc%2BtkUggu6urMl1v%2BtpjNrH88aMqVFzdy1se1VScqfBhFKLcfI0VklgyBnf7iJJyBYFLxeOFZzBy1ZG8TJso4vNNg5%2BNOddNNrU%2FOiVqjYmvfMTAYgVFcVxJNL1nGLGQLzlO59x5EeVryPlUTIKf8k68Z0ETTNVakK%2B45neg1TmzyfWlTu9E3Lkww%2BKEdo28wKSyqa4vEDDEHR3zowA9Gk0LJSUrNWWGX1al22N0KdIIlc%2FnXSr678pQ4ZvBxcCxC2oKEoEK2x2HJ%2B%2BwxuZ2xe9gaZNChllN6HLKFVsCGxYDZ15XcxP33pxPtYTQAFNKqJPQhT8%2BU%2B4ArQ3nonDr6hBP8C2YrqSb33fTTf4J%2BjDoNKiCikZrtmqUAW1bg4Kl929dL6MVWYPN%2FAKeRC8FG9%2FC19JmkyfB1eV1ZGHPaSS4ezf%2BFQ7buJi%2FdHCH6CRamaiGiCYQzSMBaZCWddh5wODC29vq%2BBjqnAaRJxKjGlm9yzcYRMq%2FnF20T4JIaTCmLknmeyMDF2uxFqii2IhsGTmscYAVPXPXyo5Ssk%2FcZcQDsymark1zuO0Mkf%2FtIQxAg64%2Fmc%2BP%2BV9Ncdm9GGpkYujF0GrOekG%2FATv%2FRLye6y0ASY9jZAFCr1i9ylj4UYT4QpKN1vxK95IHLEOwVsjfJLfZkeEOjQ3p1D30GS1l0BEM6er9mdfkCq7%2BAGJ1gelq3&X-Amz-Signature=d0600a32b6c99e1c6c5158ce175b7c4edfd439a824807e71ef19df086f7257ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFD3ZOI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJFMEMCH2pA8uRPrE4JuGooonfq6yqFdeMifiBQZOLtu%2BgyXCkCIHCSZe%2Btp9XSqWUzF2QsMKn4H5jYaqlr4fZRu%2FgNsEBmKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysiH096vMflfvvlnoq3AOd2148jI1aMUefHyfTh7H37q3rihOEOBDgOTr6BTsLK7Ff8jdHubeiKQlJT7EDbKmbZ2TzYFeyI9uqsN%2BhW4kgH0o0mcA%2FNS3aRKM8IOrOO5nqGGVs%2FXEPSlr4NKmVbIw6JoLB%2FGPNfJ3s0QsmOUR6huvIVD%2FDrAzvks0Wc%2BtkUggu6urMl1v%2BtpjNrH88aMqVFzdy1se1VScqfBhFKLcfI0VklgyBnf7iJJyBYFLxeOFZzBy1ZG8TJso4vNNg5%2BNOddNNrU%2FOiVqjYmvfMTAYgVFcVxJNL1nGLGQLzlO59x5EeVryPlUTIKf8k68Z0ETTNVakK%2B45neg1TmzyfWlTu9E3Lkww%2BKEdo28wKSyqa4vEDDEHR3zowA9Gk0LJSUrNWWGX1al22N0KdIIlc%2FnXSr678pQ4ZvBxcCxC2oKEoEK2x2HJ%2B%2BwxuZ2xe9gaZNChllN6HLKFVsCGxYDZ15XcxP33pxPtYTQAFNKqJPQhT8%2BU%2B4ArQ3nonDr6hBP8C2YrqSb33fTTf4J%2BjDoNKiCikZrtmqUAW1bg4Kl929dL6MVWYPN%2FAKeRC8FG9%2FC19JmkyfB1eV1ZGHPaSS4ezf%2BFQ7buJi%2FdHCH6CRamaiGiCYQzSMBaZCWddh5wODC29vq%2BBjqnAaRJxKjGlm9yzcYRMq%2FnF20T4JIaTCmLknmeyMDF2uxFqii2IhsGTmscYAVPXPXyo5Ssk%2FcZcQDsymark1zuO0Mkf%2FtIQxAg64%2Fmc%2BP%2BV9Ncdm9GGpkYujF0GrOekG%2FATv%2FRLye6y0ASY9jZAFCr1i9ylj4UYT4QpKN1vxK95IHLEOwVsjfJLfZkeEOjQ3p1D30GS1l0BEM6er9mdfkCq7%2BAGJ1gelq3&X-Amz-Signature=f160104fcc4a2ce4276d5accc48b845a4e25b820aaa8a3e9fc44114e9f7fc114&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TS3B7RH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDTiY3fkk0Cn%2FhSv6ERJtFo%2FjtItyp9KaZ6QBnfWl%2B3sQIgFTThI%2FyKVPyWBJZ7zAmA6bEJx4%2BEtNe7woSPsI0efsYqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVMYzLLlb77OU8u0yrcAz61NWl25MaXLqihz5iXBhWpmZXPi8hUpCVS5%2FdufRlVEs9mOXpKPxLGHIN8eMtxqZRk1w5KoslYlUuyPSGBbVYFnWC4Y2PY3ZSV%2BUilWIOt%2FA8T8Wjz0V7xV4zGKzW8DQ%2B%2BvdCBP2J3Pffy%2FsxCRet4JdCNiM4bXqUbeQ34uMRDMCsW3pbHxA49LTB9JA54rQwHMuXpJEB7MaQwoDUTgM5k%2Br6%2BnG1eczn6rZjKRrAYBkVbOGxCLecLn2lFLfWkiNKkjURZfgeTOjCXY3Rh46fpwIX%2BLzP3GgHzU37RJo2yMN06f5LR4zHovGWlPM5o9wjkkKYzbgZAOsiEwNauPAZ2ey0jsLMaQOBWk4l7PtsXXqsn4zdTqpiLDab2SU6ZBOvvjOHahNPu4mYIg0LTg89zAirnclj6pkDSV391%2FbGcgj1POSFtxg0qHfgYrUCkYkE2CekIh06bndblONv6R3S5iZM9O7gMNBNdQOhAIA8tMpp2%2BpWHeyQRtWqwNCdbDFfnELW5ZZy%2F760fB977byL%2F3YpMt3SUkhXjBOHyVgboRfTpi3xYeCpPXakAL6OJ4g4irgVDsTKe9J8zts1D8N6uBQFWFSiPpHBpnWAAoN7MFom%2FYbzAYooPTVK3MLj2%2Br4GOqUBw%2FSq%2BaKt6FfN7GJA6G1OpT0gN1fYsxVgtWT%2Bif26SaIc3M7bD17%2FDOyDnYLICctaY41B7vuk4uUYU57yzMTsgRKbSsvn1pWu870MQt1%2BaPDsZg6tlgsAslyCYLwow%2BLNMjFZrqQoWKthIkfQFtAtqnRugJjujOMSpa7n7WItdYFEK2LgWp4fTdsvXaC47oQgePPL5WZeoBBHwZQV9Ufggb7r2g1X&X-Amz-Signature=a5774d639255bbdafef8ebde57ca96fd286637bf21ae117521117fec4922fb30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYN6ISCX%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDDYyVg%2BzYQJlJIvKKcfJhZOYoO3yqw7GXMLdSmFGRK8wIgeOyzIHEAJaixQ10i0aVxQZS81zig98O0k%2FFA7i%2B49J0qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHOsnHux0xqLhNJZircA60EiI24bsizMua8RDkW2VzdzdyDnlHZF4A4h%2BbFL5N6vM3E5TPpxLvZS4FyGCXWZd7utWNeANmbUS8k%2FbJpER3jf918ciHu5mGPhmjSq8AMcVQuIjarPgGrQZNNzcZC9UZ0YV66IG4PoYJbk%2F5OeY0CRLgoofJQEjge5vybva4f%2BerQl0vm7pnhXaRLdl5bu652ggIN8lCTtMU9RexZ1igUnILaL6J82GIEEOQ2yVX7YxL80KPNsH6%2BSaQI%2BvmDNaYop9uPlHSMcLzgrjZK6YlGi8BChJpVcvW2ZZ1xG0TeuYP2EjqDTt2fUpl3apCFzv8VFVDRyCNeOnrvujd3bywX4%2B5O5OawScoYnBHTJi3oHhouz0dtatiRfkULZs6MUsr4zCGkrHvg3V99eOa5hYlno7gxMzNkDWDtJgZx0%2B4GWhMqKzL6w18MsE4Mu38j25gDeVWzZjlDtMZvv16vBDR3Z%2FkVwXb79NgnDg0C3p3Jt6gPqFllbNJKsl8fY9WoZjjkJm2QMUEHE926px1HJSh%2BP4Rh9BgsGFT5q08cVbzVOcBDwSbUgKZ5aODc8F8sIhMVpbdSXbRP36ztyuvkpSCccp9MkXUcBlI6XKpBnn0L5EZ9v6SgqoVd8tf%2BMIv2%2Br4GOqUBd%2B%2BQTAt5glNxNk6JSj%2Fi7bWRc7UoMuvjbqq0T991W4%2BNW9qRvljzlkZd%2FO1R5vP6yxi1zEnKSJNJUResRcpfvqEfMSli%2Fszb391IQWS2RYsf0Zx5URSUMLF784BnPW%2B1cfVeFht1q3nCdvXue0O08wYJmsI5fuO4iLfIB%2Fkk03vZL38JOGklqdAFZYetnLikH26vR%2BWvaaVCUTxXsUFYGJ0CiSuH&X-Amz-Signature=352cd42e8c7906575304d5e3264cf6e6c6632dc6306260e21bd8ccf6ac4bcf96&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFD3ZOI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJFMEMCH2pA8uRPrE4JuGooonfq6yqFdeMifiBQZOLtu%2BgyXCkCIHCSZe%2Btp9XSqWUzF2QsMKn4H5jYaqlr4fZRu%2FgNsEBmKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysiH096vMflfvvlnoq3AOd2148jI1aMUefHyfTh7H37q3rihOEOBDgOTr6BTsLK7Ff8jdHubeiKQlJT7EDbKmbZ2TzYFeyI9uqsN%2BhW4kgH0o0mcA%2FNS3aRKM8IOrOO5nqGGVs%2FXEPSlr4NKmVbIw6JoLB%2FGPNfJ3s0QsmOUR6huvIVD%2FDrAzvks0Wc%2BtkUggu6urMl1v%2BtpjNrH88aMqVFzdy1se1VScqfBhFKLcfI0VklgyBnf7iJJyBYFLxeOFZzBy1ZG8TJso4vNNg5%2BNOddNNrU%2FOiVqjYmvfMTAYgVFcVxJNL1nGLGQLzlO59x5EeVryPlUTIKf8k68Z0ETTNVakK%2B45neg1TmzyfWlTu9E3Lkww%2BKEdo28wKSyqa4vEDDEHR3zowA9Gk0LJSUrNWWGX1al22N0KdIIlc%2FnXSr678pQ4ZvBxcCxC2oKEoEK2x2HJ%2B%2BwxuZ2xe9gaZNChllN6HLKFVsCGxYDZ15XcxP33pxPtYTQAFNKqJPQhT8%2BU%2B4ArQ3nonDr6hBP8C2YrqSb33fTTf4J%2BjDoNKiCikZrtmqUAW1bg4Kl929dL6MVWYPN%2FAKeRC8FG9%2FC19JmkyfB1eV1ZGHPaSS4ezf%2BFQ7buJi%2FdHCH6CRamaiGiCYQzSMBaZCWddh5wODC29vq%2BBjqnAaRJxKjGlm9yzcYRMq%2FnF20T4JIaTCmLknmeyMDF2uxFqii2IhsGTmscYAVPXPXyo5Ssk%2FcZcQDsymark1zuO0Mkf%2FtIQxAg64%2Fmc%2BP%2BV9Ncdm9GGpkYujF0GrOekG%2FATv%2FRLye6y0ASY9jZAFCr1i9ylj4UYT4QpKN1vxK95IHLEOwVsjfJLfZkeEOjQ3p1D30GS1l0BEM6er9mdfkCq7%2BAGJ1gelq3&X-Amz-Signature=84154896aa916d7bd1cf0b8ffda06c38c5940781918c38934c86c5aa73dc7e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
