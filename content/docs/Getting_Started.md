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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBLP4CG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClg9qSqgmHstkH%2Fmdw7X4K7JWmpsKSTMppk5j3QtEJFgIgRaz72i3SH0vQlqrQKlAqnnpOYChH1sb5DaWi%2B7Pbo20q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOSAL2qc3mkWtfAK3ircAw%2BMh%2BPy46iJLWqv06csrXLzPHTJolq2epV04DdGOWeI7NfYB0Q3SCaFNgZ2z4MHhT%2FhDUuF5wZ5bxDolfzmpbLOAYGuc7AgQhWaMXAP0D1XZkIQluDpj%2B2QyhxbtwjCsoVDYxstb%2F1C0Aoiy2jd66xxjJ6yQwcX49xmid5ZwYk5t8x0cB93jsFk22VZHdUj7hefJaPgUhVozS04PS3u8QFdzUcYvRpYo8Xkunxh2qX%2F88%2F3KzCAM1VYqsWAE0gLnHlD2shMrTqt%2FacdTby6Cl%2B6qfT4nmBzHVzgrtGT%2BZymy%2B0EixeUPXrB76Di3P1DizQqA1SbA7OYDbx9UYviVcMkCTOqfU3Rvp3f1d6OgBKoAGGfpcnZHZIE%2BdSt2yVQAO77j3aG02qAcAxfNgtKYxud5%2FGEQM6kARPybM2DTeIw%2Fw1HpGUCTMyV3fKJPvA%2FEeWRRlp2aWWU6FO7y4562PPoi1QUMpyOGxcCKnQXcXGI0tJ9hTp8mqLai7TA1iKMqp%2BKrIKv6wvtz5MqVERNbZrNuwda6MeAI410yxPnScUnRpYy%2FIRqJbPgbfjHh4pPpWIv%2FRZULdrmnav1APTX94PmF4hy8EpsPFyWhb1dPIJq9g8jhoGabBNQNnBhMNXXpMEGOqUBld1lttYNDl4bL5eFnqPlQMQfM3toomomXwoLChextqqr1aaG1hjj0RJix4wjMGvSGmiNwvUqCet5BS0OiCj%2Bn1gYAodgB5PAdtEkquObfCyNIZpk%2FCS5YuL9CI2rl4G2BiS6YOUzPvCEOc9TCT9xsBUm5RTV%2BgeTGcAvBdyej7Ky53zQZnCKFfQf30KDkDNnalJMG6KZ%2Fr88JvSbwyUQ3qGQthmn&X-Amz-Signature=9aae269188257c4b8f44094ab6f88e585181817115592e73156c5f59b2095d80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBLP4CG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClg9qSqgmHstkH%2Fmdw7X4K7JWmpsKSTMppk5j3QtEJFgIgRaz72i3SH0vQlqrQKlAqnnpOYChH1sb5DaWi%2B7Pbo20q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOSAL2qc3mkWtfAK3ircAw%2BMh%2BPy46iJLWqv06csrXLzPHTJolq2epV04DdGOWeI7NfYB0Q3SCaFNgZ2z4MHhT%2FhDUuF5wZ5bxDolfzmpbLOAYGuc7AgQhWaMXAP0D1XZkIQluDpj%2B2QyhxbtwjCsoVDYxstb%2F1C0Aoiy2jd66xxjJ6yQwcX49xmid5ZwYk5t8x0cB93jsFk22VZHdUj7hefJaPgUhVozS04PS3u8QFdzUcYvRpYo8Xkunxh2qX%2F88%2F3KzCAM1VYqsWAE0gLnHlD2shMrTqt%2FacdTby6Cl%2B6qfT4nmBzHVzgrtGT%2BZymy%2B0EixeUPXrB76Di3P1DizQqA1SbA7OYDbx9UYviVcMkCTOqfU3Rvp3f1d6OgBKoAGGfpcnZHZIE%2BdSt2yVQAO77j3aG02qAcAxfNgtKYxud5%2FGEQM6kARPybM2DTeIw%2Fw1HpGUCTMyV3fKJPvA%2FEeWRRlp2aWWU6FO7y4562PPoi1QUMpyOGxcCKnQXcXGI0tJ9hTp8mqLai7TA1iKMqp%2BKrIKv6wvtz5MqVERNbZrNuwda6MeAI410yxPnScUnRpYy%2FIRqJbPgbfjHh4pPpWIv%2FRZULdrmnav1APTX94PmF4hy8EpsPFyWhb1dPIJq9g8jhoGabBNQNnBhMNXXpMEGOqUBld1lttYNDl4bL5eFnqPlQMQfM3toomomXwoLChextqqr1aaG1hjj0RJix4wjMGvSGmiNwvUqCet5BS0OiCj%2Bn1gYAodgB5PAdtEkquObfCyNIZpk%2FCS5YuL9CI2rl4G2BiS6YOUzPvCEOc9TCT9xsBUm5RTV%2BgeTGcAvBdyej7Ky53zQZnCKFfQf30KDkDNnalJMG6KZ%2Fr88JvSbwyUQ3qGQthmn&X-Amz-Signature=5ca80ad74e23580c0f2b891651473a78c9344dead881916493559aa50c7b3a08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBLP4CG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClg9qSqgmHstkH%2Fmdw7X4K7JWmpsKSTMppk5j3QtEJFgIgRaz72i3SH0vQlqrQKlAqnnpOYChH1sb5DaWi%2B7Pbo20q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOSAL2qc3mkWtfAK3ircAw%2BMh%2BPy46iJLWqv06csrXLzPHTJolq2epV04DdGOWeI7NfYB0Q3SCaFNgZ2z4MHhT%2FhDUuF5wZ5bxDolfzmpbLOAYGuc7AgQhWaMXAP0D1XZkIQluDpj%2B2QyhxbtwjCsoVDYxstb%2F1C0Aoiy2jd66xxjJ6yQwcX49xmid5ZwYk5t8x0cB93jsFk22VZHdUj7hefJaPgUhVozS04PS3u8QFdzUcYvRpYo8Xkunxh2qX%2F88%2F3KzCAM1VYqsWAE0gLnHlD2shMrTqt%2FacdTby6Cl%2B6qfT4nmBzHVzgrtGT%2BZymy%2B0EixeUPXrB76Di3P1DizQqA1SbA7OYDbx9UYviVcMkCTOqfU3Rvp3f1d6OgBKoAGGfpcnZHZIE%2BdSt2yVQAO77j3aG02qAcAxfNgtKYxud5%2FGEQM6kARPybM2DTeIw%2Fw1HpGUCTMyV3fKJPvA%2FEeWRRlp2aWWU6FO7y4562PPoi1QUMpyOGxcCKnQXcXGI0tJ9hTp8mqLai7TA1iKMqp%2BKrIKv6wvtz5MqVERNbZrNuwda6MeAI410yxPnScUnRpYy%2FIRqJbPgbfjHh4pPpWIv%2FRZULdrmnav1APTX94PmF4hy8EpsPFyWhb1dPIJq9g8jhoGabBNQNnBhMNXXpMEGOqUBld1lttYNDl4bL5eFnqPlQMQfM3toomomXwoLChextqqr1aaG1hjj0RJix4wjMGvSGmiNwvUqCet5BS0OiCj%2Bn1gYAodgB5PAdtEkquObfCyNIZpk%2FCS5YuL9CI2rl4G2BiS6YOUzPvCEOc9TCT9xsBUm5RTV%2BgeTGcAvBdyej7Ky53zQZnCKFfQf30KDkDNnalJMG6KZ%2Fr88JvSbwyUQ3qGQthmn&X-Amz-Signature=24684663ca5f888af98a2f9b599265a2c5f7ebfe22f23af0fdfe0a2dc302509b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRTWAS23%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZds%2FQUzHJOt6L3R7lyAbgaZUGo%2F8%2B3xnslWEdVecU8AiAR4KZw7%2BzP0zJg7nCCRNKIxNY4UBUnUPLA3khcWepZxCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZt3bvDuFUiQQjrdoKtwDDc59DceJ1LiKS00tVoIAY%2BbbPyOqZIEKzPJgZnPTbbJKHklymE5qUd%2B36UBUzWouaz2P%2FeUIbt2dHWzgwfTR2XDxrVE5ZW9Z8GlftB%2FAmdoNotki9iN0o2eTbMfzBweJKf3kg7h2svkboRISRaVhdF6hxrmm%2Fg2p%2BW6U5iqJkagRI8FGwiG8ieud3okd%2FGeYlsTyy1Kt%2FzsOGLgzzCK4Zwi6Z1Pz2Mn5BDNPME46kasK8l8k2iQxRLPXBzoZuYQpc48oQH36Wdgff5%2FsaIhSbmNm1yeW2WUuPEMrJCNwRTr9E%2FPZKOMvRWwjo4%2FW8jPhbu90Var1RZ1iN%2FUEA24TrxiV3uvkbGL77d%2BtIoq7Bbf8Lq7JsXapoZKHsVM1V6rVbQ85BYJZJyornNeABXHIfPyYa30l1H4j7gVIXECuUPsVGdYKOnXzM9irjTXukTpBOFp44cago8DuR3QtiU2PUx116uo5vyXG5zWPXiglvA%2BOogHpGFA3uy%2BPjuzXy8A1z4Huxfr20EtElIAaHKkR045A4tsSqRDSe37ewAh5BQL%2FbK7M4SShQDWAAk7HVJggNhaxFhBVmfK%2BijJC%2Blw%2BNhJ2UHrgeLAeOcWzG8SnKeNN47EjN8no85G8OF0wpdekwQY6pgFyHIkdfjw%2FrRqKAutAztE%2BbfxRoWSjLdkr2m9vwCNkhG5FoAOzvlf%2FQsNV8lFpZn4Udr99I1CkjYIXdABOIJ6jrqY2o0sv1eZrYyPlrcHmqWcr%2B7DJEEyeOaItNZ%2Bzf78hZXbfvk92915T5uQsL1eKHLzlkcMuoO8h7vkNYkm5lmauxZidFzTFs7CbeIG9LbqDv7PcfNZUyO3Lj67srHWm37rNnqXv&X-Amz-Signature=c38f5786261dc641891013211d8236e566df2bf4049b72dccb15fd6909a5c94a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI5WEZLU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7%2ByfvsVrjxDnS3rKFJQdzm6q3xWvqQL8fwgmnXj2wmAiAHPLoGfDiYW6yLbq1Xq7ODoQfXrkJcRRESgBmvuk0K5yr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMAfuc9kVMX9seOlF3KtwDA1pVyFyWUnMHxPTLEuHQ75vQ5nUQ7TeRpqLTuduyTzulp9IcI3OnWA4yBdcRElInuzeZQQP2PYuGxmnoPMf7JmtrqQTq556fjzt4tVkdTHe64ZVFnpQbG70AEThhtWcvLP3jRp6FjLpu0MPymKiLF7SqPqFWl0Kkd%2FdJ5T716ALw9SNuX80OO2nyRP%2FMUrFKVK14Ut%2FEmNsey3z1PSZYSgtZQWWURfJKBcsyPTGUS%2FoT69fzEEWzyQEBq3oTzgfbMabj6pPF37%2BusjsknSP7obgmsjiWHVl59XBk1nYiyEBR70sZCxEUsDiyFp81R6cTKfrLb89Iz%2FNX6bzQbyMMcwRjIRbHm47IP%2Bk1gDjJUKY%2BKMgAdaljKDZo7nt9gbpFn2iJzaQzcXC0rFzX0xlvU8bSHEZl7e5mVHfQZ2vOlOCar69TWyM5Vvg8ktWjiDCdkh47LwZWNchyjkhiHxqjITVZ%2BMYmO61iarQsaNkBwZvLH1%2FY05XhjkTXNrMzj%2FbWSE0sgOz2MTOp5Yg4uf2MI1w4O5UcyyJVMH8MrEBbCFOiV0WJfpcI1SEDgJSkOzsLjjWDeWIl97T0Q7il9ox7QF1y79MtQApI84TqSdUkzlRl7LiGAcliraLuk2IwrdekwQY6pgHLWqSt%2F5xMmkxuYadj6pe11Q%2FGTL8ioIsupTy4UCzsZ%2FxX5Q7ZyTfTICMY1CN5wpSeQF6ySRTKySqV6l7WYm7m93LvQoI8JDOuyEA9YIVRoc%2F3xTtNted6Uqd6wIuVC%2BbZ7OamuEFpqMoVCrmd%2FCvwvnbXghXjQg3uQEhD4jAsTFMRot%2Bxi98yfRowH5xQ78WC70H7IwSKj8RYtaF6qxiuccCXsEEJ&X-Amz-Signature=f85875c9f0076b59e3953f9145a17c18181de8cf843bce5df2f3cd520a74c778&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UBLP4CG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClg9qSqgmHstkH%2Fmdw7X4K7JWmpsKSTMppk5j3QtEJFgIgRaz72i3SH0vQlqrQKlAqnnpOYChH1sb5DaWi%2B7Pbo20q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDOSAL2qc3mkWtfAK3ircAw%2BMh%2BPy46iJLWqv06csrXLzPHTJolq2epV04DdGOWeI7NfYB0Q3SCaFNgZ2z4MHhT%2FhDUuF5wZ5bxDolfzmpbLOAYGuc7AgQhWaMXAP0D1XZkIQluDpj%2B2QyhxbtwjCsoVDYxstb%2F1C0Aoiy2jd66xxjJ6yQwcX49xmid5ZwYk5t8x0cB93jsFk22VZHdUj7hefJaPgUhVozS04PS3u8QFdzUcYvRpYo8Xkunxh2qX%2F88%2F3KzCAM1VYqsWAE0gLnHlD2shMrTqt%2FacdTby6Cl%2B6qfT4nmBzHVzgrtGT%2BZymy%2B0EixeUPXrB76Di3P1DizQqA1SbA7OYDbx9UYviVcMkCTOqfU3Rvp3f1d6OgBKoAGGfpcnZHZIE%2BdSt2yVQAO77j3aG02qAcAxfNgtKYxud5%2FGEQM6kARPybM2DTeIw%2Fw1HpGUCTMyV3fKJPvA%2FEeWRRlp2aWWU6FO7y4562PPoi1QUMpyOGxcCKnQXcXGI0tJ9hTp8mqLai7TA1iKMqp%2BKrIKv6wvtz5MqVERNbZrNuwda6MeAI410yxPnScUnRpYy%2FIRqJbPgbfjHh4pPpWIv%2FRZULdrmnav1APTX94PmF4hy8EpsPFyWhb1dPIJq9g8jhoGabBNQNnBhMNXXpMEGOqUBld1lttYNDl4bL5eFnqPlQMQfM3toomomXwoLChextqqr1aaG1hjj0RJix4wjMGvSGmiNwvUqCet5BS0OiCj%2Bn1gYAodgB5PAdtEkquObfCyNIZpk%2FCS5YuL9CI2rl4G2BiS6YOUzPvCEOc9TCT9xsBUm5RTV%2BgeTGcAvBdyej7Ky53zQZnCKFfQf30KDkDNnalJMG6KZ%2Fr88JvSbwyUQ3qGQthmn&X-Amz-Signature=43cbd73b6fc394bbf7271b6b9a64ae8b58ebf2de1291d54032b6951d610bbed1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
