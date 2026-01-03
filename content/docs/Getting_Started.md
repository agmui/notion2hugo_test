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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LL7WOC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCG54NXCxHxbofAIKqnd98K7Ur%2FomceGVWmqnP0rDpfHQIhAOLbnmDkzD8C1xAjdAqOgdywmkMuuXSHKkaf8P4Ky6IqKv8DCAkQABoMNjM3NDIzMTgzODA1Igyo6wY8NNQRZtetYAkq3ANbBRG%2BCpVoVaW9AERpEUw48s%2B%2FohsKe%2Fz1%2FxP5eYMosdtaIK2OzpM1GOzfvokQ7VnKpf7A7e0NSLyMWvBc7uadrPw9vIgwCDqa5q%2FNX3k8GyBZgvp6Xi8%2FkEUTtixDBbQwns0Ke91GrWrDQjIYrNZKMQUY8nUipAo9G3Zd6ZQlNCq3Qm6Z%2FkHYlM99SpfPjRAiti4PgkXwxJBU3p8QesjQf34qIRJjCnRm7LKYfAVxujl7etjOWNlQkYcFgXrIZNNV9FFRHeqbtgZ%2Bt6IKGhm2d5ZZflZe2EJUBp2yOCmh1scfxZGDu3ezCWY60HwWKfRwhAC6%2FS2fBccOFt70rEX%2F3AgVOWkrnJQqiiqXZSbdMBdg2uhz4XtIYlgR5nDmc3T6MI1NfwIU%2BHTFAiQTR8FaUNAeATWhtG5xIAsUPMNGoUFpIU2rguP9z4KiRhMLezpJIDMjRK8%2FghtQrvhiOH4HKQbx%2Fmz780xt9T9%2BmjeU9LfMJ0bOsX01Tn5Gr%2F69FLm3Jwhoi2hUm9Ns6YZP65hFVl0875rBAaMu0b1QmUGLva8xlHCjHLwMv1hlI63Sru%2BEEeYcCDwkadvXBKMTB06Dbe9%2BRzAN2Il3rvDVTgrOOqOyZMFCFkdEMV3T6jDEuuHKBjqkAf7c1TyQFeStJWSj7wCCIzJbKQhOeeq8v%2B9kWQEOUJZDvMURki0mp%2F8DVxVGHHCIOZJq1BxI%2BvCRHOu8h3vYdKIWZLhdLcAo%2BeZNXIJ6D4CsRrxxweSOboMHqqvvTzfDjuqs6v1bgS%2FOimIfH7WEXft65XoP0ZENvwuoGRhnHEJsGemQPFuvNHUq71MLf52142rXK43izTwjuBUhCaDFuxuZSzB7&X-Amz-Signature=78639008ce9a903d573f5dfc9b560ed8ba7f70ef3c90778c391c17ae879d4328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LL7WOC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCG54NXCxHxbofAIKqnd98K7Ur%2FomceGVWmqnP0rDpfHQIhAOLbnmDkzD8C1xAjdAqOgdywmkMuuXSHKkaf8P4Ky6IqKv8DCAkQABoMNjM3NDIzMTgzODA1Igyo6wY8NNQRZtetYAkq3ANbBRG%2BCpVoVaW9AERpEUw48s%2B%2FohsKe%2Fz1%2FxP5eYMosdtaIK2OzpM1GOzfvokQ7VnKpf7A7e0NSLyMWvBc7uadrPw9vIgwCDqa5q%2FNX3k8GyBZgvp6Xi8%2FkEUTtixDBbQwns0Ke91GrWrDQjIYrNZKMQUY8nUipAo9G3Zd6ZQlNCq3Qm6Z%2FkHYlM99SpfPjRAiti4PgkXwxJBU3p8QesjQf34qIRJjCnRm7LKYfAVxujl7etjOWNlQkYcFgXrIZNNV9FFRHeqbtgZ%2Bt6IKGhm2d5ZZflZe2EJUBp2yOCmh1scfxZGDu3ezCWY60HwWKfRwhAC6%2FS2fBccOFt70rEX%2F3AgVOWkrnJQqiiqXZSbdMBdg2uhz4XtIYlgR5nDmc3T6MI1NfwIU%2BHTFAiQTR8FaUNAeATWhtG5xIAsUPMNGoUFpIU2rguP9z4KiRhMLezpJIDMjRK8%2FghtQrvhiOH4HKQbx%2Fmz780xt9T9%2BmjeU9LfMJ0bOsX01Tn5Gr%2F69FLm3Jwhoi2hUm9Ns6YZP65hFVl0875rBAaMu0b1QmUGLva8xlHCjHLwMv1hlI63Sru%2BEEeYcCDwkadvXBKMTB06Dbe9%2BRzAN2Il3rvDVTgrOOqOyZMFCFkdEMV3T6jDEuuHKBjqkAf7c1TyQFeStJWSj7wCCIzJbKQhOeeq8v%2B9kWQEOUJZDvMURki0mp%2F8DVxVGHHCIOZJq1BxI%2BvCRHOu8h3vYdKIWZLhdLcAo%2BeZNXIJ6D4CsRrxxweSOboMHqqvvTzfDjuqs6v1bgS%2FOimIfH7WEXft65XoP0ZENvwuoGRhnHEJsGemQPFuvNHUq71MLf52142rXK43izTwjuBUhCaDFuxuZSzB7&X-Amz-Signature=2573c2365a6f794e5b9159433b3ca8ed224c21896f7702b26e292e425a5b96ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LL7WOC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCG54NXCxHxbofAIKqnd98K7Ur%2FomceGVWmqnP0rDpfHQIhAOLbnmDkzD8C1xAjdAqOgdywmkMuuXSHKkaf8P4Ky6IqKv8DCAkQABoMNjM3NDIzMTgzODA1Igyo6wY8NNQRZtetYAkq3ANbBRG%2BCpVoVaW9AERpEUw48s%2B%2FohsKe%2Fz1%2FxP5eYMosdtaIK2OzpM1GOzfvokQ7VnKpf7A7e0NSLyMWvBc7uadrPw9vIgwCDqa5q%2FNX3k8GyBZgvp6Xi8%2FkEUTtixDBbQwns0Ke91GrWrDQjIYrNZKMQUY8nUipAo9G3Zd6ZQlNCq3Qm6Z%2FkHYlM99SpfPjRAiti4PgkXwxJBU3p8QesjQf34qIRJjCnRm7LKYfAVxujl7etjOWNlQkYcFgXrIZNNV9FFRHeqbtgZ%2Bt6IKGhm2d5ZZflZe2EJUBp2yOCmh1scfxZGDu3ezCWY60HwWKfRwhAC6%2FS2fBccOFt70rEX%2F3AgVOWkrnJQqiiqXZSbdMBdg2uhz4XtIYlgR5nDmc3T6MI1NfwIU%2BHTFAiQTR8FaUNAeATWhtG5xIAsUPMNGoUFpIU2rguP9z4KiRhMLezpJIDMjRK8%2FghtQrvhiOH4HKQbx%2Fmz780xt9T9%2BmjeU9LfMJ0bOsX01Tn5Gr%2F69FLm3Jwhoi2hUm9Ns6YZP65hFVl0875rBAaMu0b1QmUGLva8xlHCjHLwMv1hlI63Sru%2BEEeYcCDwkadvXBKMTB06Dbe9%2BRzAN2Il3rvDVTgrOOqOyZMFCFkdEMV3T6jDEuuHKBjqkAf7c1TyQFeStJWSj7wCCIzJbKQhOeeq8v%2B9kWQEOUJZDvMURki0mp%2F8DVxVGHHCIOZJq1BxI%2BvCRHOu8h3vYdKIWZLhdLcAo%2BeZNXIJ6D4CsRrxxweSOboMHqqvvTzfDjuqs6v1bgS%2FOimIfH7WEXft65XoP0ZENvwuoGRhnHEJsGemQPFuvNHUq71MLf52142rXK43izTwjuBUhCaDFuxuZSzB7&X-Amz-Signature=c5071c8579cebe8fd57c7519687234c73e15a6d23bb491b2ecbf2a8dc39f98bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K76DKWT%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBG8F2NgYyapCV2WhWYPwXJ8EnQxccg%2BTtd8Dq662QGAAiEA68lAa2KacAaHPYlARINF0PvvFCmMVXSp%2F6dO6KFoA80q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDT8hfgzRWuVeiRhmyrcA8dhtdkbhIqmjTGNkdLwUPoJ3CsnprKrjiSZbCITqirh5%2FS%2BkerhpGAxNlVOjFA3LeaQDG6%2B1NSNC0zlg3KDUYcmMSJBIbBAlfUy2W1kWngdWjJcB5n1p8Xm6QxrgQ%2F%2By%2FdkB5lAfXThUXjxNP7wThGT3G9llD%2B7UodXgsIcaEiTnlAmUSbCEqS%2F%2BvOg7m5Fq4vgRAihgOe46ECjIwx10LJz6nOD6tNbNvHNKIZkj%2B6%2F0tmqW0lXVeNwEXyauPWXjn44cQlN8YmsE50YaEwmLA6Kwh0Aomz5NAOZL%2Bq%2FmpDIfIXNosAVcDv7wWTsSRN4sZe3R2iLYkkHk4V3qEUxZ3N9CGU1BrKsW3xP9IpiDya5LXOmVqEU%2FiPb6S6u7u0IJYg8M8kaMTwVUQmiBWWF6i8tTXk%2FbjeYMll2kJyUzBLWGhm%2FTMtyITYfRh2CgzXiQLKkhJFOHC0Qz4ks5GEf6auuosJ60Yl3tPGLn0fYKFCOW5XQDNsGyj0euVUwX2Doe0fwpEjDipC45JNyOP5XzgFq6G%2FKmueD9iKVefUf8Jpa0Ppfw9eyDMz0DMUf85Ov%2FlB5v4hA3TrWwbzN1gP8krhgoEe4LkV43kGTikTh4WGGRou9nZt1%2BHHGQu%2FjML7M4MoGOqUBifn0tOIDOnJPFKBRrKhTViDvOABx8g7mxRgIcU4CFBNEicF5Drj7CRMT%2BXuEPetVVIwkuxfadSwfhAzPkc3Sf5YMWfhKbWIC8TnmveIQzKu1mZudX2XqUMFMRxU%2BEm5crzIjJsQAMwwnrPs%2Fw%2FFGetGVqVsiR9TOVEMS8T%2FmNpzApUga3Ay9QQFCYiKiJIHDew%2ByjPfZrQMrCIUwxMghFPUl%2F7Ri&X-Amz-Signature=cc97195d67a84c22b311780668ec2f8de2d5194685f7a208877fc150bc84d8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSQIOLWC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCRNq0coU0HnHdtdRQf1L4ZMhVMpQf1yy0LFUhzBxg8zwIgTQ4U6Sn5VLRb3bsFveVaKdQKn47SqaEiKpmE9MF2pCgq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHEs%2FtL6Tm3AytL45yrcAxRIQArrAchNUrt6eYxyRCQiz1iBKtruqEw%2Fwl7AJYxdzluJ5QS64LvBDx3YfbDpI9RUiCEZojvxM3dgHgprPGHT8A3Z%2BBqE9bOatKvU87Xl6XMndKRpaRtxBT24qZiYcemDyWw2snU4qL1z26QF55ZLSK6qLyGan6kKrU9%2FguTNXxu2QDxrBEXGAwwUNWdnKreo%2BssF1kUVxuzHbu%2BYJWf3g9qqPtiyoO2gJNOzl8M1YJiJ09WSrTflI3XIxHVWuYsBxKFcUlJunq8c2Gtf8puHMYLo5Hmfg5LOk6wxqCHlrcru1PU3RPmRyYEGHuzTOF5VMABpwrZebpgSUaM1kJg6GjEcJVR2qK4T%2Fs%2BXQlO022J25e3tx8J75eK4s%2BbWtT2FHKem5woa520sql1GXjZWMQk1ySghvwPMSbGzGb%2B%2BHjyuaes%2FZGJgkXGQd6Kqlcy9p8tMGeLCdHZIrLuLsibyPna7cAJgtSzQBeqKcYHvOrw4AeGEc6hwlEL97NiayGuIugdV7339xrPL2hNyGitsKyOW9BXICumOPsEk75m2X4mARd5nyDKL3cL3wSJeIvV4GSHNFSB6LVWbx9LsaotNZzmKWyH6Qdh2%2BNX8LcSf%2BStzrzNe3WYJ51%2FgMODO4MoGOqUBmb3RPjWIaVCUklqu%2BbctWfuhhvLf0uXWPvgJNhpGIqeYkUzbQ1lJVokmZ%2BiGnoZ07ASXRei3BVOh5bhZM48XjXercpdD6QWGfoMp0n6nhhWFglCfEfOlc462mRRXTQ9kzM%2F8eMcigOkFF6qMLNKPpRX8stoCEDgDjdCQZFmyNY8DrwQyfZL9RipeBKKsPJGzzb3oCePT4YAkdz0gIxtfKekjYGU5&X-Amz-Signature=b329bc3fc094f3981e0a498f818b94103b9baccdd7283caaa4a2ed405fc8af3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LL7WOC%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQCG54NXCxHxbofAIKqnd98K7Ur%2FomceGVWmqnP0rDpfHQIhAOLbnmDkzD8C1xAjdAqOgdywmkMuuXSHKkaf8P4Ky6IqKv8DCAkQABoMNjM3NDIzMTgzODA1Igyo6wY8NNQRZtetYAkq3ANbBRG%2BCpVoVaW9AERpEUw48s%2B%2FohsKe%2Fz1%2FxP5eYMosdtaIK2OzpM1GOzfvokQ7VnKpf7A7e0NSLyMWvBc7uadrPw9vIgwCDqa5q%2FNX3k8GyBZgvp6Xi8%2FkEUTtixDBbQwns0Ke91GrWrDQjIYrNZKMQUY8nUipAo9G3Zd6ZQlNCq3Qm6Z%2FkHYlM99SpfPjRAiti4PgkXwxJBU3p8QesjQf34qIRJjCnRm7LKYfAVxujl7etjOWNlQkYcFgXrIZNNV9FFRHeqbtgZ%2Bt6IKGhm2d5ZZflZe2EJUBp2yOCmh1scfxZGDu3ezCWY60HwWKfRwhAC6%2FS2fBccOFt70rEX%2F3AgVOWkrnJQqiiqXZSbdMBdg2uhz4XtIYlgR5nDmc3T6MI1NfwIU%2BHTFAiQTR8FaUNAeATWhtG5xIAsUPMNGoUFpIU2rguP9z4KiRhMLezpJIDMjRK8%2FghtQrvhiOH4HKQbx%2Fmz780xt9T9%2BmjeU9LfMJ0bOsX01Tn5Gr%2F69FLm3Jwhoi2hUm9Ns6YZP65hFVl0875rBAaMu0b1QmUGLva8xlHCjHLwMv1hlI63Sru%2BEEeYcCDwkadvXBKMTB06Dbe9%2BRzAN2Il3rvDVTgrOOqOyZMFCFkdEMV3T6jDEuuHKBjqkAf7c1TyQFeStJWSj7wCCIzJbKQhOeeq8v%2B9kWQEOUJZDvMURki0mp%2F8DVxVGHHCIOZJq1BxI%2BvCRHOu8h3vYdKIWZLhdLcAo%2BeZNXIJ6D4CsRrxxweSOboMHqqvvTzfDjuqs6v1bgS%2FOimIfH7WEXft65XoP0ZENvwuoGRhnHEJsGemQPFuvNHUq71MLf52142rXK43izTwjuBUhCaDFuxuZSzB7&X-Amz-Signature=db439d4423ef4efce73d79e78897492890ad333e5075be6050571da229148254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
