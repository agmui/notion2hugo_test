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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRG67M2%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHVZsdZ6IPWrojOQU949aFi%2FspO0DZgR3JDD86%2BV3JgIhANXAkz8%2FHYq5QUZQSKZj4ZKuLeY4kShrpzyTym1lgEW%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPimeoqLGko5TVODQq3ANn5SsPQGKNZOG5P6yvMS5j4xlU%2BJcTjZLstXTbcaqdPLcz%2F%2Fnnn6iWe4SdC0nf%2BF4jXfBUGs3oloX%2BguzIX4Vu%2B6x2%2Br0Udw8elg6xVxPBHpKMLXgnwQJx2NLD7vWpEyQGzb3duCmhCKCgYP%2BSbUw%2BHJPndnP0SOEqHLyXO1fAImrX4a0RmMqg18ujLYiVQDv8%2FQQcBH%2Ffd4U6me4%2BwKkUJJ9QVHGvyzAYaSf4Zf7KiX6UlojMhEzCWltlrGwUvGLyDF8QaL844tVIQ539wVUf2te9MNlIIwnODHYxcgOq9Ppx4Nzm5Me5q%2BhtXOG%2BDqBmNk4ByVQbSEu5MgvYRs6xVHj5XS1Kj48vq7flugbHnZ2J3FaAu%2BB8XgWqc9JetkUJf4jFuv19xviRu9WqiRf4Gvs9ur5%2BExW8aW9IuRZLqZJtSCMe1lyDzCknUB7nhXZBEvUkkeIwv9onoFaf6%2FFnv9fTEFj7m1i7chTHRo8X4kHGMuGV3UBrKj6lpauykDDms3yuqTduGeTUmVECsBlXH%2FcWuWqhhc6siEHdegO54ywJ8clCB00c%2FJRDvC8RyAcmQ6cXrNOWrJ66A58lII68nFVWNqRK%2BSofCz2r0A20ps7jafKKiJqtFeUfIjDgrbHBBjqkAcMOVDq8lF1dZaMVvvqvE6R%2FKEiG35FJMxrZb%2Fo3D4VBMG2UvCTJps24zVCML1jhTSz6WNQnH5xghdMDwnqcb0%2FSg3XFvvwUtKjRyvZ%2FVZsxTL86mFeddQ4592XANfRn3I7lWYJttnwdPKEo10DjXQoAKF3hQ2%2FDp7IYlGj2dR6frg0Ctd9DZZDeuwVjtonYyhurxqbGAXBfJYucNhbFQOyef8M8&X-Amz-Signature=fb96d128e40c2674c4ff0ae8b274b6f609445b2aa50ff89cc2272c80de75885c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRG67M2%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHVZsdZ6IPWrojOQU949aFi%2FspO0DZgR3JDD86%2BV3JgIhANXAkz8%2FHYq5QUZQSKZj4ZKuLeY4kShrpzyTym1lgEW%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPimeoqLGko5TVODQq3ANn5SsPQGKNZOG5P6yvMS5j4xlU%2BJcTjZLstXTbcaqdPLcz%2F%2Fnnn6iWe4SdC0nf%2BF4jXfBUGs3oloX%2BguzIX4Vu%2B6x2%2Br0Udw8elg6xVxPBHpKMLXgnwQJx2NLD7vWpEyQGzb3duCmhCKCgYP%2BSbUw%2BHJPndnP0SOEqHLyXO1fAImrX4a0RmMqg18ujLYiVQDv8%2FQQcBH%2Ffd4U6me4%2BwKkUJJ9QVHGvyzAYaSf4Zf7KiX6UlojMhEzCWltlrGwUvGLyDF8QaL844tVIQ539wVUf2te9MNlIIwnODHYxcgOq9Ppx4Nzm5Me5q%2BhtXOG%2BDqBmNk4ByVQbSEu5MgvYRs6xVHj5XS1Kj48vq7flugbHnZ2J3FaAu%2BB8XgWqc9JetkUJf4jFuv19xviRu9WqiRf4Gvs9ur5%2BExW8aW9IuRZLqZJtSCMe1lyDzCknUB7nhXZBEvUkkeIwv9onoFaf6%2FFnv9fTEFj7m1i7chTHRo8X4kHGMuGV3UBrKj6lpauykDDms3yuqTduGeTUmVECsBlXH%2FcWuWqhhc6siEHdegO54ywJ8clCB00c%2FJRDvC8RyAcmQ6cXrNOWrJ66A58lII68nFVWNqRK%2BSofCz2r0A20ps7jafKKiJqtFeUfIjDgrbHBBjqkAcMOVDq8lF1dZaMVvvqvE6R%2FKEiG35FJMxrZb%2Fo3D4VBMG2UvCTJps24zVCML1jhTSz6WNQnH5xghdMDwnqcb0%2FSg3XFvvwUtKjRyvZ%2FVZsxTL86mFeddQ4592XANfRn3I7lWYJttnwdPKEo10DjXQoAKF3hQ2%2FDp7IYlGj2dR6frg0Ctd9DZZDeuwVjtonYyhurxqbGAXBfJYucNhbFQOyef8M8&X-Amz-Signature=dffcd51b1d067b43ab867eaa540ac601240a3be7a87092c9a232915d0e0dfef4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRG67M2%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHVZsdZ6IPWrojOQU949aFi%2FspO0DZgR3JDD86%2BV3JgIhANXAkz8%2FHYq5QUZQSKZj4ZKuLeY4kShrpzyTym1lgEW%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPimeoqLGko5TVODQq3ANn5SsPQGKNZOG5P6yvMS5j4xlU%2BJcTjZLstXTbcaqdPLcz%2F%2Fnnn6iWe4SdC0nf%2BF4jXfBUGs3oloX%2BguzIX4Vu%2B6x2%2Br0Udw8elg6xVxPBHpKMLXgnwQJx2NLD7vWpEyQGzb3duCmhCKCgYP%2BSbUw%2BHJPndnP0SOEqHLyXO1fAImrX4a0RmMqg18ujLYiVQDv8%2FQQcBH%2Ffd4U6me4%2BwKkUJJ9QVHGvyzAYaSf4Zf7KiX6UlojMhEzCWltlrGwUvGLyDF8QaL844tVIQ539wVUf2te9MNlIIwnODHYxcgOq9Ppx4Nzm5Me5q%2BhtXOG%2BDqBmNk4ByVQbSEu5MgvYRs6xVHj5XS1Kj48vq7flugbHnZ2J3FaAu%2BB8XgWqc9JetkUJf4jFuv19xviRu9WqiRf4Gvs9ur5%2BExW8aW9IuRZLqZJtSCMe1lyDzCknUB7nhXZBEvUkkeIwv9onoFaf6%2FFnv9fTEFj7m1i7chTHRo8X4kHGMuGV3UBrKj6lpauykDDms3yuqTduGeTUmVECsBlXH%2FcWuWqhhc6siEHdegO54ywJ8clCB00c%2FJRDvC8RyAcmQ6cXrNOWrJ66A58lII68nFVWNqRK%2BSofCz2r0A20ps7jafKKiJqtFeUfIjDgrbHBBjqkAcMOVDq8lF1dZaMVvvqvE6R%2FKEiG35FJMxrZb%2Fo3D4VBMG2UvCTJps24zVCML1jhTSz6WNQnH5xghdMDwnqcb0%2FSg3XFvvwUtKjRyvZ%2FVZsxTL86mFeddQ4592XANfRn3I7lWYJttnwdPKEo10DjXQoAKF3hQ2%2FDp7IYlGj2dR6frg0Ctd9DZZDeuwVjtonYyhurxqbGAXBfJYucNhbFQOyef8M8&X-Amz-Signature=fbf6d31f2e00f6901497118d78c820d93e31090c38c63bcff0e00031f91d85b2&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3OZPCGX%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMavOtmZAhs5aShkmn97RsJVVov%2BA%2B9SdRa95yRCy66AiARWdlJj5axL6FbO02oX5dBBIU1LpyiyQKs%2FOI83QYM%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy8UKV0WpvDfWoEyzKtwDFnd19TRy2nUVxjMVwlyNjhVp480YI2p%2BTXcXZS9e9iv5fomQdd5fOrU5l3Z9S%2BKWNo21kwdqfeAc1tZqzLwADQdVWlvFMXzR31PGRlK8NBi1mRMTipAAw%2Buf%2FiMUKjTw61tJn5wtdcXxp4bJtYaG4CyYQeyVbNvnq4xbH8uCIjP33v6sOTImxzrLOROrnAMxHV9rMCjb524e%2BIzTMJaNvYPskilZwON3U0q1cNZaTbO3w1QQ3aI6maCC0LNqEIbC4rlZdxc4iTHSrABIbEcaGwxfE1rF%2BUxz%2FfIMks3MzKMyRB23IsAYc3Kd3U90eY2EfeeWFZhyQJZHEBPi263MjGRlsBAkMG4fT7w6HDJ7VyvIUx%2FGH%2F%2BAkK%2F0c4so6Nry770%2BzP2UX945WObsMB322UKtgKoTTwItWpr7D%2BAeM%2B0X9%2FN6H5n0LiaBPC%2BxZbHh0dQDjqNm%2F7tktRfbE%2FgfpXUa%2BPZY83KKZWI6gDEJLGtUWUJ%2F3DeYI%2F5iJsbhbS4HLK%2B1sofWuVI3N05YjiXJ8vJcz4QOcqM87IsTPrR1w%2FSoneKrIGQiYdc5nUZ835wyYA%2FHD2FtZhAMA290YARq%2FezD2He5NsIocIiOOS9B5t48TuuSl5QOrJe4Hhkwja6xwQY6pgE%2B6W%2BscfOGf8W16bgpKcDc2XNQCqZhK6%2BX4uktyW9pvRvah6ae33SXJD%2FdIgyg97DWjfj8wcSSeglnS%2F%2FhiKxzhh7hH57e6BFRSOp6ZwXzWGlAIQf2CS%2FlAEAcen2F1EAg13%2FvxAsPOhV%2BVpXRbqFlcpKTO3PErMN%2BdC0B6NUjBv2OCHv4wuGJwPiJD%2BzoqUrk0maIwcA5kfpWFvKALbJdptEqBSxC&X-Amz-Signature=bbc9410412700fe0d79b585d71dc94ef4e2074879d111d8d2b1e62a2387c25ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HUGW5IQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5T%2F%2FUw802LAxS82opfKfk71GE7b1yQnY3kHv6dgdj7AiBj6n%2B2ZsCr59LLyFUtmc72Nh1k%2F%2BaSL1YaiesGMW7dniqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqc3DytY6DNYCulGKtwDqBh6EMQ9IcmcFt8%2B%2FIaKivKDVxn5wH1Tz5rofvGiS%2FsmGFteCA60X%2FVN0CVXEIgj57PIITFLf06O5gfW1mgXGBVBMs2f7QoB1u6%2BBrR4GPpyUfQwFc3eHbQfYp3%2Fep81ofYeLtotA9fA%2FKWZcd5YybNx4FrAnkYiTVxfaMN7OwS3aXQpxW9f%2FOaUSx5XGYuA7ck2VPD0JgwxgYMirAYUgx%2BzB6WBcA8ZSIj3D66GhtuyKAVm0qFFlTWvBAE8RsAfV3RgrOYGhhxB6yDpMQyrrSyobBme3ij%2BAFxSunwylau9z2FSx47zlkrCXlt8ecEiRJkWo0cAU49dIStsmRb5ZyL%2F8cKyzbIxf%2BxZNQtJc7JNUsCfzdIyE43RRb4vCIeiR%2BNXRE%2FrYCy9kjQEmnJm%2B1CR%2BgteJhqkf9T0cwneA9FBwMKi1Ag2vhTh8eQ0LXvpeIh15Ukxkmd%2Bp7W4xIlDcyxzYu1y1D7QPmCbpeqB2F8%2BdxEBt4dS6t4x5XYCE2Dcv%2BLtcrf7H5NJ9pxiMswgvdY5zcPuc3E5CyYZzshmlKOyy060%2FhFwU3j0W1Fw33WIpM1d%2BP3zoGMTF6YrYLGS4ajCOf8IApwn0Fx%2F0CF85E1H1bMOqC%2F%2B146DOJUwjK6xwQY6pgHP7vxBmx%2BFmF1b6Fh3UiTMre3%2BrpI3myKv5XzlSe6TeWmyBxhjenz1fDemy8N97%2FIfCQ9fF%2Brh%2FngLhj2azChEyHINvUFZWFcP2WRw6bKlIOtV4xtQW80sn73CUA4zhwApp9MKt4c1xzm3ugh03PmZOw%2B05V26sAh13go2OOjaCeGYn7MW%2F%2F2XKAX7zXl8DA4YOTOQ%2FBteI9f6JhHRPytsY1uoFJYO&X-Amz-Signature=def61bd83fed3ead753d8fb726c1e393f991c8af5120c812e2f82c1910e83b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJRG67M2%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzHVZsdZ6IPWrojOQU949aFi%2FspO0DZgR3JDD86%2BV3JgIhANXAkz8%2FHYq5QUZQSKZj4ZKuLeY4kShrpzyTym1lgEW%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPimeoqLGko5TVODQq3ANn5SsPQGKNZOG5P6yvMS5j4xlU%2BJcTjZLstXTbcaqdPLcz%2F%2Fnnn6iWe4SdC0nf%2BF4jXfBUGs3oloX%2BguzIX4Vu%2B6x2%2Br0Udw8elg6xVxPBHpKMLXgnwQJx2NLD7vWpEyQGzb3duCmhCKCgYP%2BSbUw%2BHJPndnP0SOEqHLyXO1fAImrX4a0RmMqg18ujLYiVQDv8%2FQQcBH%2Ffd4U6me4%2BwKkUJJ9QVHGvyzAYaSf4Zf7KiX6UlojMhEzCWltlrGwUvGLyDF8QaL844tVIQ539wVUf2te9MNlIIwnODHYxcgOq9Ppx4Nzm5Me5q%2BhtXOG%2BDqBmNk4ByVQbSEu5MgvYRs6xVHj5XS1Kj48vq7flugbHnZ2J3FaAu%2BB8XgWqc9JetkUJf4jFuv19xviRu9WqiRf4Gvs9ur5%2BExW8aW9IuRZLqZJtSCMe1lyDzCknUB7nhXZBEvUkkeIwv9onoFaf6%2FFnv9fTEFj7m1i7chTHRo8X4kHGMuGV3UBrKj6lpauykDDms3yuqTduGeTUmVECsBlXH%2FcWuWqhhc6siEHdegO54ywJ8clCB00c%2FJRDvC8RyAcmQ6cXrNOWrJ66A58lII68nFVWNqRK%2BSofCz2r0A20ps7jafKKiJqtFeUfIjDgrbHBBjqkAcMOVDq8lF1dZaMVvvqvE6R%2FKEiG35FJMxrZb%2Fo3D4VBMG2UvCTJps24zVCML1jhTSz6WNQnH5xghdMDwnqcb0%2FSg3XFvvwUtKjRyvZ%2FVZsxTL86mFeddQ4592XANfRn3I7lWYJttnwdPKEo10DjXQoAKF3hQ2%2FDp7IYlGj2dR6frg0Ctd9DZZDeuwVjtonYyhurxqbGAXBfJYucNhbFQOyef8M8&X-Amz-Signature=6931242ebdf5ae9d5b4a29c1c41330d36c726a36e6d9156f65551482fa0b6c64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
