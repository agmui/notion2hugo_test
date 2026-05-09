---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JT2TF6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPhejsp02peoSEyfKhkECmSrwOXDKT9PIzHNBhPWyn1QIhAOlo9M8vVCaXopqY7WPhOVlO88nS6REDc3jZOB1kkWusKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4SMYZzWfGGizujt4q3ANXNwwC5RvXhYS0y8Qikd13oS2ERuuxZnWAFTl50xPpgWQjdlQK2mlhR5Ey24Pt7oD1x2mBLHmsFIyhjvkS2w8afdUJUfPfoA7QItQa3LzUxgIlhDKPeXVuJClLjDnrwlfg2FovjS%2BlXvWDfOsxtLa6cqcisYslIf4JhIsUAI4ZEy87LJnUla5a7y%2FpBN6QvgEUCa6jEdGDwRE6zSPO%2Bq9g4yk7JL1FUgk3z5qE1Der3cvT1ECJzL986eJe%2Bqyv%2BJgy9YDMX1TX%2FmLqRUeWm4NtMzBAm1TgBX9ucXE1E0ck%2BKSd%2BifPUt14owD5QCOxNf%2FpWymte0Hl8PXJxpjnzSQ8jsDUpQy6cWKrL0fVRK8hvcwBHiEAnz7BRe3Hg3Box3uI8UCXgAGw2ydmHH94ZRhSF9SkA9c2Zx%2F9DbtO4mFoKlMMZf4p0lHjddC9fof7FzQS8SsDqCQDUuptwpTaQrZs0puCP2yXnnoVWYMAoj%2F96eeXU3Epzj0FtEjcSL5uy%2FIXyZ1l1uoLHO3f2u2ySyuUwvCN6OT5lddA9i6AaTY%2FFF4tzYK%2BbusykYskbbP4QnBbHHiBynv7jsb9vTagZD37CN2q0Ych5hwpclSeAeZSnHlM1wZUohABT%2Fq78TC6svrPBjqkAZ0fcnX82JQfgIqmi3S1YABEsoB2Y5VByAmVra4jG4tXNCm24Ok%2F3wErPXHd66JBbxXR7Hgn4OCGvZ9Z7V4XgXo0gtGKdEo0jvzevZRbKuFhBCnZcG0sIQt8MTkbQkBniVWlkUbsxDOv40N5G2U1yp0cXxOeL42wn5rDPJ2eRefGxqLMd%2FnlTs6WKAMrpSWQlAi9V5%2Bu00UHiHSETClBwb69i4ST&X-Amz-Signature=e7abea59d453901ff74a13e850da85b9d7594cc6d4081b3b56d9f5b6e6c78e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JT2TF6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPhejsp02peoSEyfKhkECmSrwOXDKT9PIzHNBhPWyn1QIhAOlo9M8vVCaXopqY7WPhOVlO88nS6REDc3jZOB1kkWusKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4SMYZzWfGGizujt4q3ANXNwwC5RvXhYS0y8Qikd13oS2ERuuxZnWAFTl50xPpgWQjdlQK2mlhR5Ey24Pt7oD1x2mBLHmsFIyhjvkS2w8afdUJUfPfoA7QItQa3LzUxgIlhDKPeXVuJClLjDnrwlfg2FovjS%2BlXvWDfOsxtLa6cqcisYslIf4JhIsUAI4ZEy87LJnUla5a7y%2FpBN6QvgEUCa6jEdGDwRE6zSPO%2Bq9g4yk7JL1FUgk3z5qE1Der3cvT1ECJzL986eJe%2Bqyv%2BJgy9YDMX1TX%2FmLqRUeWm4NtMzBAm1TgBX9ucXE1E0ck%2BKSd%2BifPUt14owD5QCOxNf%2FpWymte0Hl8PXJxpjnzSQ8jsDUpQy6cWKrL0fVRK8hvcwBHiEAnz7BRe3Hg3Box3uI8UCXgAGw2ydmHH94ZRhSF9SkA9c2Zx%2F9DbtO4mFoKlMMZf4p0lHjddC9fof7FzQS8SsDqCQDUuptwpTaQrZs0puCP2yXnnoVWYMAoj%2F96eeXU3Epzj0FtEjcSL5uy%2FIXyZ1l1uoLHO3f2u2ySyuUwvCN6OT5lddA9i6AaTY%2FFF4tzYK%2BbusykYskbbP4QnBbHHiBynv7jsb9vTagZD37CN2q0Ych5hwpclSeAeZSnHlM1wZUohABT%2Fq78TC6svrPBjqkAZ0fcnX82JQfgIqmi3S1YABEsoB2Y5VByAmVra4jG4tXNCm24Ok%2F3wErPXHd66JBbxXR7Hgn4OCGvZ9Z7V4XgXo0gtGKdEo0jvzevZRbKuFhBCnZcG0sIQt8MTkbQkBniVWlkUbsxDOv40N5G2U1yp0cXxOeL42wn5rDPJ2eRefGxqLMd%2FnlTs6WKAMrpSWQlAi9V5%2Bu00UHiHSETClBwb69i4ST&X-Amz-Signature=27beaf479d177c4a3bf48aa3871613fc2c8b5241c54d048614b926c401a1ab72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JT2TF6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPhejsp02peoSEyfKhkECmSrwOXDKT9PIzHNBhPWyn1QIhAOlo9M8vVCaXopqY7WPhOVlO88nS6REDc3jZOB1kkWusKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4SMYZzWfGGizujt4q3ANXNwwC5RvXhYS0y8Qikd13oS2ERuuxZnWAFTl50xPpgWQjdlQK2mlhR5Ey24Pt7oD1x2mBLHmsFIyhjvkS2w8afdUJUfPfoA7QItQa3LzUxgIlhDKPeXVuJClLjDnrwlfg2FovjS%2BlXvWDfOsxtLa6cqcisYslIf4JhIsUAI4ZEy87LJnUla5a7y%2FpBN6QvgEUCa6jEdGDwRE6zSPO%2Bq9g4yk7JL1FUgk3z5qE1Der3cvT1ECJzL986eJe%2Bqyv%2BJgy9YDMX1TX%2FmLqRUeWm4NtMzBAm1TgBX9ucXE1E0ck%2BKSd%2BifPUt14owD5QCOxNf%2FpWymte0Hl8PXJxpjnzSQ8jsDUpQy6cWKrL0fVRK8hvcwBHiEAnz7BRe3Hg3Box3uI8UCXgAGw2ydmHH94ZRhSF9SkA9c2Zx%2F9DbtO4mFoKlMMZf4p0lHjddC9fof7FzQS8SsDqCQDUuptwpTaQrZs0puCP2yXnnoVWYMAoj%2F96eeXU3Epzj0FtEjcSL5uy%2FIXyZ1l1uoLHO3f2u2ySyuUwvCN6OT5lddA9i6AaTY%2FFF4tzYK%2BbusykYskbbP4QnBbHHiBynv7jsb9vTagZD37CN2q0Ych5hwpclSeAeZSnHlM1wZUohABT%2Fq78TC6svrPBjqkAZ0fcnX82JQfgIqmi3S1YABEsoB2Y5VByAmVra4jG4tXNCm24Ok%2F3wErPXHd66JBbxXR7Hgn4OCGvZ9Z7V4XgXo0gtGKdEo0jvzevZRbKuFhBCnZcG0sIQt8MTkbQkBniVWlkUbsxDOv40N5G2U1yp0cXxOeL42wn5rDPJ2eRefGxqLMd%2FnlTs6WKAMrpSWQlAi9V5%2Bu00UHiHSETClBwb69i4ST&X-Amz-Signature=30e7b3fc0e0eebd853d6186b845ac2ecdb91b86b61c9231113473b12ae15cc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCRDH2RZ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCxjkBeErLBnC2DAaFsyD996IqbnEk9c1f7Sqb6jxNi2QIgWTpmGx%2B%2FmbMYGbwlbJ16qHOVB0U9wZ94ocbgssitRzoqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNApYoMr77MkXmV3ircA65Gi0pLCMXuRZLz3f9OS6%2FpnZ5jLAR60wElzVBQA16zRqOclr7K8tuAAY8N6%2FacPaqwUp7MuUhH5xAJvNxPb1lyHzPygUZPxYe7QdhB6rlrJQ6ijoOYjzPsFKxeF30bsu%2BUIKGAa2QbA59m%2Fkec0ebxtp95vTl5zVwLxb7EGGx4Ujvm2roC%2BgPsIoFvAYmfouKqHb%2FtKRa4LgAEm7rXizaR87hWyXNpEpn2fYxjPUcC5pX8buaBaRTKVEXzQqnKwKcHTwpy95trpElLqvM4AknB8QwLWDjN%2BM720bguEKXAmA1BOk8tKaQec7WMcQlhrEgl4S15mWH0AJ0hXFhYRX7jK%2BR3k%2F6pe%2FeffS9Bjb%2BC9rE482%2FOS7T0IrYRk%2FNfm%2FRjNtqumvse7ryYHBz1gcsIyLOVAkjgNz%2BM1riU9kFqanCJM1dxPRGrZh1ZvxALn%2BCkmAGvCTJgKPzwNMY1oqjMrrGEXGA3hpfZPNvDfUkf763JrzJOmOxOad9uI3G5KMUV54xMAEyEgJWFmB37H430Jhg%2Ffbmzqy9ZWKW06yu%2Blu6PRHAE4%2FU150uADAMhEGWnyjkEZybYVRTt2M5uZvFqbZyoaDjLmj4qNRIwHKRPQdPN8DXa5vkRjxbpMLWx%2Bs8GOqUBwDPe7cpJyZBh81ZzcL8gD9U2DD92ufSCGlfVBqiBD9Nf0lGr3kTDyQ9JxaF%2FB8QJ39DA6vpxk8eu8j%2BaZ2PGSARYV8LMg0QSa0HIqPcdRQqTTUMssVT0saHUk%2F%2FEJLptyXHkq7Kt6wrXZwI%2Ftn6ciz%2FykfquZTnepZu0nQn0CaaqMEdOeubl%2BtMNW33lwlvT9DA2VtJC4Y8Pg99CirPcUSAPmmsB&X-Amz-Signature=2168c526a82fa939390ab70ccc0b699e866913177d2299e432b50d7d5739a0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ6FLKVZ%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCNDzNBZS4Rmo76A%2BVCB%2FUCzoPL0ANVkFoQSWWTCi631gIgAO4HU3EBM31URRVSAT7Vo%2FSMvIGvvwpQ4vZX1Bp%2Fq78qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8Ws2XbxFpYkph3RircAxeb9NkWzlKXzCDAH4maJxexLw4L1C3v%2FcXBmdInu8MArU%2Fz%2FssuMzGZ2v%2B8RBuhLU9BwoKKUwMRJs83P1MU8T4Cd%2Fax7j6B75n2KkCR0mpFuYE4UTw04Ln0RAtIkEI5xf1SopW47%2BbflthEQ6AmqywWrcczsxqDq641cj8%2FMbU1ijWvmJUb5tcr8EL%2FOaaTeMaa8yB8V%2B5RvvCvKJO94hOx9hDryP9xgQ3P1%2FxMnGEuftk7hJfA8xSrZS8mXX0KDFPOdcBK2ulXicHyhVOjwNj6%2FFu34LrpGqSm85uOI8jaWPVM5j1SOR8VB9F%2B9S18CUgF%2BzQJcrSi%2FopLxyUxZhoUofVwe7gA0YtSoyge%2FoLCykTuG6uabn369r6%2FxK3oQnV905Oowz4PIrR44aU%2BRY%2BWUPob2FLZOXMVZsgP66UQap90eaijDtI5hAcRCFogfl69dzbhVjSt0kkDfCjsLwaArvHz4zPGkCjMkpOSBhP0P979gJx13%2FAmiaHz9WdbRTyUqjnf5xHLIomgqZZ62qs4gOX8JPiVo7oAb3UvWTCLBiZXZ84ooeG%2F9NqjLH%2FbHBSDtnAW1RNMOyDBiQ2sQfBjpTAPJVsQnLeYAnpevi%2B44J6Fs0vOgURIs2SxMKOz%2Bs8GOqUBKaybDURh4bKJyEWpWw1NwgEM0%2FfAc8qlhFKdBdhbQCNPbvZCR673933XMWaE5Gwm%2FwDx7o7SEnCaZHgY1WmDPdwkXIdiEeB1gMbL4PvEsQGuy7eaM2eV3RcjzFZGfd2rASq4eehDV1eNK14Iv%2BeNreeFEjWrKaZdI6fJOxN2e6KRTn6goDK1MXvdCIbn32jPabR5emfVPy5R0bLlcFx7IJGSjDbE&X-Amz-Signature=3e438c6bf58bb3d211eac5de5d3c8e5187d6b0c7631694e767c303b462701370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4JT2TF6%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCPhejsp02peoSEyfKhkECmSrwOXDKT9PIzHNBhPWyn1QIhAOlo9M8vVCaXopqY7WPhOVlO88nS6REDc3jZOB1kkWusKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4SMYZzWfGGizujt4q3ANXNwwC5RvXhYS0y8Qikd13oS2ERuuxZnWAFTl50xPpgWQjdlQK2mlhR5Ey24Pt7oD1x2mBLHmsFIyhjvkS2w8afdUJUfPfoA7QItQa3LzUxgIlhDKPeXVuJClLjDnrwlfg2FovjS%2BlXvWDfOsxtLa6cqcisYslIf4JhIsUAI4ZEy87LJnUla5a7y%2FpBN6QvgEUCa6jEdGDwRE6zSPO%2Bq9g4yk7JL1FUgk3z5qE1Der3cvT1ECJzL986eJe%2Bqyv%2BJgy9YDMX1TX%2FmLqRUeWm4NtMzBAm1TgBX9ucXE1E0ck%2BKSd%2BifPUt14owD5QCOxNf%2FpWymte0Hl8PXJxpjnzSQ8jsDUpQy6cWKrL0fVRK8hvcwBHiEAnz7BRe3Hg3Box3uI8UCXgAGw2ydmHH94ZRhSF9SkA9c2Zx%2F9DbtO4mFoKlMMZf4p0lHjddC9fof7FzQS8SsDqCQDUuptwpTaQrZs0puCP2yXnnoVWYMAoj%2F96eeXU3Epzj0FtEjcSL5uy%2FIXyZ1l1uoLHO3f2u2ySyuUwvCN6OT5lddA9i6AaTY%2FFF4tzYK%2BbusykYskbbP4QnBbHHiBynv7jsb9vTagZD37CN2q0Ych5hwpclSeAeZSnHlM1wZUohABT%2Fq78TC6svrPBjqkAZ0fcnX82JQfgIqmi3S1YABEsoB2Y5VByAmVra4jG4tXNCm24Ok%2F3wErPXHd66JBbxXR7Hgn4OCGvZ9Z7V4XgXo0gtGKdEo0jvzevZRbKuFhBCnZcG0sIQt8MTkbQkBniVWlkUbsxDOv40N5G2U1yp0cXxOeL42wn5rDPJ2eRefGxqLMd%2FnlTs6WKAMrpSWQlAi9V5%2Bu00UHiHSETClBwb69i4ST&X-Amz-Signature=fe1f8c4a18018b63eff70a37232959ad782886b295f6ea18ed48e2b4c4ce18ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
