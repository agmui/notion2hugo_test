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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H22RRR%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDG5GwG711wiUPR0KoRN1XJrhoLoJbLTwJlBkXpNatW8QIgX5%2BW1zv93dzS62V70aPGVBkojdJsperfLpeL8CyX8qYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwReCtFhvY%2Fc5tKyrcA%2Bd9i75rBu9pSrdOjXdkFF%2F4UX%2Fgl64YRSYiuLf42zFnKzo1PahVTtaIkD%2FdY9gNRdQi8UuqM0%2BdxVlwjFmhQbGjNQa%2Bwwr2ezYNMz5Pa%2BrPcT%2F7mglgiOT7SH%2FrPYl2SeRpSn3tJiNd0Q0KOH7V0oxaywTHoGSo%2FV7MFAcswIh1gVG6%2FVJzv44DiSyfQ2Bx1an3EWRCZ2tOa7wavV4H%2FjoLRi4Pos4Hru368xYYNSsKnANAodEl9MH45fGv1TkCUZ%2B7n0Nm0076Q6bj6gOSygHP4Yg8uk6J6EfbDMHfHC0eE7tcCFIkPBVdeBRs6bDA6u6q0B2ocAdRX19g8Q1zM%2BHsAKNDPKA40b4YY%2FE1%2BcchaUFnqx1d5KdxJyF3G5PocQkdhfpO6DCYeA38TtwjhCETusMiroVfLZ9C6Knl0RhBanQ4%2F35ML37oy9VX0fH88958ks5UTbId0s6BASz%2FWL5x2A1nKzBHjhCENR%2FkVds0OO5K8MgEHhNH7wDPt%2FBqeY2%2B%2FaR0gxg8LD%2B8mzKaqaMkjlLtp58Cfan%2FUUVu3XM%2BlSfTi7K9xiis6DQr%2FYxO2wDL%2FyyWHUvdkTIvZ%2BKMYjpKY%2Fc64fEPkZoA54bs0p4HujGn3CAhp4zKU46DMNuI1scGOqUBL7LxDgY%2Fc3FZLUW5UJHX0JbkwVDLrs5RVapNFccw3mAULveT7zKUSHJxjxMaD42hvYEm2%2FPdm7cHUyARN%2F1fu2z%2FqQj%2BuUUJftGFVfUh9O9f%2BlmOfGDPD6tm9VWGgUvA1ZX3oJKV%2BTOGNmVcca1V0pEjb%2Fx5Fxu9TlQyuof%2B0wHz73tYYvPsLmsNnprjW3qm35flzB62Mld29Yq3LWscjRtR4u4z&X-Amz-Signature=9f71ca31a1bfddd25ecc1c469075a56af5911050942c7d3b6467cbbf1fd559da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H22RRR%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDG5GwG711wiUPR0KoRN1XJrhoLoJbLTwJlBkXpNatW8QIgX5%2BW1zv93dzS62V70aPGVBkojdJsperfLpeL8CyX8qYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwReCtFhvY%2Fc5tKyrcA%2Bd9i75rBu9pSrdOjXdkFF%2F4UX%2Fgl64YRSYiuLf42zFnKzo1PahVTtaIkD%2FdY9gNRdQi8UuqM0%2BdxVlwjFmhQbGjNQa%2Bwwr2ezYNMz5Pa%2BrPcT%2F7mglgiOT7SH%2FrPYl2SeRpSn3tJiNd0Q0KOH7V0oxaywTHoGSo%2FV7MFAcswIh1gVG6%2FVJzv44DiSyfQ2Bx1an3EWRCZ2tOa7wavV4H%2FjoLRi4Pos4Hru368xYYNSsKnANAodEl9MH45fGv1TkCUZ%2B7n0Nm0076Q6bj6gOSygHP4Yg8uk6J6EfbDMHfHC0eE7tcCFIkPBVdeBRs6bDA6u6q0B2ocAdRX19g8Q1zM%2BHsAKNDPKA40b4YY%2FE1%2BcchaUFnqx1d5KdxJyF3G5PocQkdhfpO6DCYeA38TtwjhCETusMiroVfLZ9C6Knl0RhBanQ4%2F35ML37oy9VX0fH88958ks5UTbId0s6BASz%2FWL5x2A1nKzBHjhCENR%2FkVds0OO5K8MgEHhNH7wDPt%2FBqeY2%2B%2FaR0gxg8LD%2B8mzKaqaMkjlLtp58Cfan%2FUUVu3XM%2BlSfTi7K9xiis6DQr%2FYxO2wDL%2FyyWHUvdkTIvZ%2BKMYjpKY%2Fc64fEPkZoA54bs0p4HujGn3CAhp4zKU46DMNuI1scGOqUBL7LxDgY%2Fc3FZLUW5UJHX0JbkwVDLrs5RVapNFccw3mAULveT7zKUSHJxjxMaD42hvYEm2%2FPdm7cHUyARN%2F1fu2z%2FqQj%2BuUUJftGFVfUh9O9f%2BlmOfGDPD6tm9VWGgUvA1ZX3oJKV%2BTOGNmVcca1V0pEjb%2Fx5Fxu9TlQyuof%2B0wHz73tYYvPsLmsNnprjW3qm35flzB62Mld29Yq3LWscjRtR4u4z&X-Amz-Signature=e4fabb576eaf68a0eafc4df12c4bf525356690b6cf404560c4bcde6b0ffe41ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H22RRR%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDG5GwG711wiUPR0KoRN1XJrhoLoJbLTwJlBkXpNatW8QIgX5%2BW1zv93dzS62V70aPGVBkojdJsperfLpeL8CyX8qYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwReCtFhvY%2Fc5tKyrcA%2Bd9i75rBu9pSrdOjXdkFF%2F4UX%2Fgl64YRSYiuLf42zFnKzo1PahVTtaIkD%2FdY9gNRdQi8UuqM0%2BdxVlwjFmhQbGjNQa%2Bwwr2ezYNMz5Pa%2BrPcT%2F7mglgiOT7SH%2FrPYl2SeRpSn3tJiNd0Q0KOH7V0oxaywTHoGSo%2FV7MFAcswIh1gVG6%2FVJzv44DiSyfQ2Bx1an3EWRCZ2tOa7wavV4H%2FjoLRi4Pos4Hru368xYYNSsKnANAodEl9MH45fGv1TkCUZ%2B7n0Nm0076Q6bj6gOSygHP4Yg8uk6J6EfbDMHfHC0eE7tcCFIkPBVdeBRs6bDA6u6q0B2ocAdRX19g8Q1zM%2BHsAKNDPKA40b4YY%2FE1%2BcchaUFnqx1d5KdxJyF3G5PocQkdhfpO6DCYeA38TtwjhCETusMiroVfLZ9C6Knl0RhBanQ4%2F35ML37oy9VX0fH88958ks5UTbId0s6BASz%2FWL5x2A1nKzBHjhCENR%2FkVds0OO5K8MgEHhNH7wDPt%2FBqeY2%2B%2FaR0gxg8LD%2B8mzKaqaMkjlLtp58Cfan%2FUUVu3XM%2BlSfTi7K9xiis6DQr%2FYxO2wDL%2FyyWHUvdkTIvZ%2BKMYjpKY%2Fc64fEPkZoA54bs0p4HujGn3CAhp4zKU46DMNuI1scGOqUBL7LxDgY%2Fc3FZLUW5UJHX0JbkwVDLrs5RVapNFccw3mAULveT7zKUSHJxjxMaD42hvYEm2%2FPdm7cHUyARN%2F1fu2z%2FqQj%2BuUUJftGFVfUh9O9f%2BlmOfGDPD6tm9VWGgUvA1ZX3oJKV%2BTOGNmVcca1V0pEjb%2Fx5Fxu9TlQyuof%2B0wHz73tYYvPsLmsNnprjW3qm35flzB62Mld29Yq3LWscjRtR4u4z&X-Amz-Signature=7853c446e5f0199bf87b2586ac9aaa3ac224216c89bc9ac31ca6a2d6c7288630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWHLE6GN%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDGqGJdnnprHBedbmYk4Z2omxHfzMEdzetw%2B1E2h2XYRgIgceToGk1fmMULzW8Uu3NenTk%2FstdBofGCe%2F3sKuurfmUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSTf5V8HTdNh10gsircA7awcw76Pbf8L4fwMnHx9apLsjRoPl7rzY8Je66Xbt2Jw02ZI%2F9YjU9ljfwMHEusbjrOVM0gC7WNqXQnjLjNeIMGK2UaKHosMOsXNet7q4t6lZTg1nIBFhkCTRVfhqc4qG7kPNY38P2Mp0V%2FP25HpNoVXU1vqW9YLbMP6TT1I%2BIM3QhDwTx1srX%2BkVzJYza8EsgBNB0BqDQ5tWpSBXOjgHZceTrDoMPKoWfAYfLger2pZy2%2F2cbFOPt25Mnx6hkYdEx9ETEl90szoaULMOpnLZzatwgwmChOZdL%2FW%2BCI5l%2BoN%2Bt6poNzIILCM7WWea3cH%2FywMihxBGDy8mXjiSm9WjsEiNoUtf3wc7JOkhSsCArvFu5u0jLCjTlWhSqpfw%2FhqD9MLDGcfJiMVzDYOJDm9LWRbf5HD00rOwrq84KjrMBqVCMz%2FWHVQw2opAJ8ymyfVpFNyrYjfV%2Fef4F0bK%2F98y1RTpWAKCF7zIwYYf4%2B5%2B9duP7vxv1l83EuinV7HXJWrWaToTSK2vyklR85nShlT4zs4EMJQ%2F%2BD2toYF34YcwTWDU4ZnWc%2F%2FRiTfJ0KTpG6o2AhyuxFe9v%2B0oHWYd3%2FHNwcZtbo1u8lSBqzt2YaCkstzXGpZCMzJajRA5V9MM6P1scGOqUBKhTbHeiK2MfL7p8gufXBnYYuRzU0ELg6vt0rHL6IgtneQj5GOMZPgyHr0o5IvUKAeZ%2FJ%2B1La4qRmb43tEyn6Jes6HBcI5%2BztY2AwN%2FKF2yeX4pM5DKrfNye96JO8uOaga9DNN9%2F0Xs50xSwZhf3gZtAJEfpefsZrzeMjJSuThIuUZhnUTfYEJ41dWH3kLtw5VC%2Fckfc%2F4BpcxN3aWsMEUBHkKiTM&X-Amz-Signature=6f1a99777c8a758671a8849d2276ed8534a0c0864f6a858ae33d81effad402e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLF2PHH%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFR9vQeoQXs5mDqrlvDXx7CIK1JEGiyxKR6sz%2FvJCH3bAiBYau5hgBiu5z1gVT5c4yMmBWN37JnERxLlXOCTCC5nYiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSxo%2BD8hdJz6fwMdKKtwDbsLrT5WhBzwSWpxeEE%2Bx06BToLemnHlQgpk0bFWcg3mYGtNsql4GrY7dafGaH%2Fy6TjmRBgHhP9fcJyP0lwkOzlUu4oLfRE8uypwmbWkSAqWY0HYPiHepbWe4Q538fpSn8UO%2BGkdJQS4Bq4uXTw9nmnBBthzipB8b7RERGeRUa05Zb9thnH1GTd5SLwASlJTaFfOyl0WP%2BQl1jNS1NpO0oNACZzJ42pMdU89JFPl%2BodPXh3QKqjgNQIwEHhwJ5tSGODjmhTukyWwxuMhVGkX3EN82FUJXST0errODapl%2Fl7%2Fw7Nx4w9UPwEFG40q2gL%2F0eG%2BVso729%2BmyS2zVp1pqt%2Bv0%2FJuxtVWh5estXvdCv9LBunIVrmJO4JFzCmiJaoLK53dRD6BZKbC89v5Bd4ikscsYACnHxn%2FAuVr2DbyPkgX8j392KztLX%2BM7x57cuv%2Bf8jwlWvhlNsTvH90uLGlqLLLNyY30Z%2BXS9bzcrsT8bKjtOisG5dJlBDo358NGzXw1r2nT1h8UDeOSm5JHF4TpvJWVYmYX6P1mYaiYSTSskzoLeKquWN4NWM82tYkLC3SrMwcL498%2FgJPUN0Wx3KFLyZc7GqJifKWfdsWh%2BR5F6bBDWTO7RRVu5OY96BIwnY3WxwY6pgFuOBtmsdAibVh3hKRpilF9PDa0pX%2BFnQbTGcVoTp%2BRdFWyp50tza%2BsbMJPRxaI1nIRNuiKL5E8rXmaTmf%2FiZKQOdkcWx82GY4Zx%2BxJ0F9Aq0o7xILXH5ZsVAl2YZ1tsHG8vsgDCdHSIqGCUUeFhsuO%2BL3d1AWcZL%2FBgcuTlMn7ZF3UE3gu8PGGIcdLj3A4HXp%2BZw8IXYc5KITG46wd8a8VXfbiNQgd&X-Amz-Signature=8aa13291eac7172d8fde9581fa98cc0bcc5be5e5f7164c90fab32e55c9f0355c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7H22RRR%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDG5GwG711wiUPR0KoRN1XJrhoLoJbLTwJlBkXpNatW8QIgX5%2BW1zv93dzS62V70aPGVBkojdJsperfLpeL8CyX8qYqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbwReCtFhvY%2Fc5tKyrcA%2Bd9i75rBu9pSrdOjXdkFF%2F4UX%2Fgl64YRSYiuLf42zFnKzo1PahVTtaIkD%2FdY9gNRdQi8UuqM0%2BdxVlwjFmhQbGjNQa%2Bwwr2ezYNMz5Pa%2BrPcT%2F7mglgiOT7SH%2FrPYl2SeRpSn3tJiNd0Q0KOH7V0oxaywTHoGSo%2FV7MFAcswIh1gVG6%2FVJzv44DiSyfQ2Bx1an3EWRCZ2tOa7wavV4H%2FjoLRi4Pos4Hru368xYYNSsKnANAodEl9MH45fGv1TkCUZ%2B7n0Nm0076Q6bj6gOSygHP4Yg8uk6J6EfbDMHfHC0eE7tcCFIkPBVdeBRs6bDA6u6q0B2ocAdRX19g8Q1zM%2BHsAKNDPKA40b4YY%2FE1%2BcchaUFnqx1d5KdxJyF3G5PocQkdhfpO6DCYeA38TtwjhCETusMiroVfLZ9C6Knl0RhBanQ4%2F35ML37oy9VX0fH88958ks5UTbId0s6BASz%2FWL5x2A1nKzBHjhCENR%2FkVds0OO5K8MgEHhNH7wDPt%2FBqeY2%2B%2FaR0gxg8LD%2B8mzKaqaMkjlLtp58Cfan%2FUUVu3XM%2BlSfTi7K9xiis6DQr%2FYxO2wDL%2FyyWHUvdkTIvZ%2BKMYjpKY%2Fc64fEPkZoA54bs0p4HujGn3CAhp4zKU46DMNuI1scGOqUBL7LxDgY%2Fc3FZLUW5UJHX0JbkwVDLrs5RVapNFccw3mAULveT7zKUSHJxjxMaD42hvYEm2%2FPdm7cHUyARN%2F1fu2z%2FqQj%2BuUUJftGFVfUh9O9f%2BlmOfGDPD6tm9VWGgUvA1ZX3oJKV%2BTOGNmVcca1V0pEjb%2Fx5Fxu9TlQyuof%2B0wHz73tYYvPsLmsNnprjW3qm35flzB62Mld29Yq3LWscjRtR4u4z&X-Amz-Signature=395eb847e49403878651a7a7b73ae47050c714e4b20c04d35856d07d03ba1484&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
