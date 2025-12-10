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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45U76NX%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5VIzNYyYpGsfzdjlfpj9Eq6k18wbo7xdBgB7sjvVaQIhAKDjCZYpAGgfxNp0VwFkfX%2FS%2Fs82YwvxmS%2FkG4SspQy%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywb9u32GEd0SnEwiIq3APCxwYg7luu0f399zmvjzzGo%2FziVNK6hyoGk217CmLXPmhpYmCnCdDy8nsuNh8oESk%2FLzEPcbCDeqnZsy2E8%2BlaogP3A%2Fj0g8aedcuiSyNzjXe4U0p4zI3yGv2ch1YMGaw2bCIw3vMG9Y1jaX3Xvs2%2FSOFkl6z7dgsPDdhU%2BxD49MahN4GkoYVx125NCA%2FfloEd5%2Fw5upoVXUhyMVFNQ%2FcclqbTOv1P2iTvsTrP51w%2BnzDPA6PPsKzlg9JiyNDZINUO3OmVxktwnCtogcGxucEM12q7Mq2zbOhMQbXvicf6Hb1zjdTRTukbENZ7Tq5U8trmu8fpO18nGdYrLKFpoStPJvcYazHjt2%2FSg%2FyBJr2GQ104ek%2B9VGVltJQ2w6n1CsBr4R8t%2F11Yi1NXrOKq0mozr58nQzNzEQVI%2FaUiYhO0yDh7Lx%2Blha7YzmuE9yK3OlCEHnIBBXCVKoMaiqAjRbD080W2bzBJvlwRd3h5e6GwAXqyuzPisCU2Aa0RA8ykZpyOK1a6Bf4b7OTMOGTTX3wAHzPb3LUfTLqmEFoR9OTbPxp%2B02rXuu6%2Fu2IV1E2HnFtWce2IuGzp8MtzpBelirKQFeP%2BsG1rlAZ1I4KmxmRihUXQEHISuY8gVR6JpTD0w%2BLJBjqkAUmxLKXeQPygxE5NzLfT7dcwuPUc%2BUEq%2BPyVtSstVnFvRoRscDIhHQQxJ1lRvNw3cpTinesUCAGZWt6Zdc%2Fp4ad8D8m4l6CBaRXahPTAK%2FE5Nn6JliGGIj1vdVwEl8LltovpfAA7JQFUtqT8mZpcJrrVdVvmdfcxSni6165TPNERQ7hkl5QUmZsoUma3eKIAY1noB23lZVylhGyHYxmR0TC1XGog&X-Amz-Signature=5c7084d1b8346d7a092132352cb74f9c5877f9e54aa8b03a07cea582c3c6fade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45U76NX%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5VIzNYyYpGsfzdjlfpj9Eq6k18wbo7xdBgB7sjvVaQIhAKDjCZYpAGgfxNp0VwFkfX%2FS%2Fs82YwvxmS%2FkG4SspQy%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywb9u32GEd0SnEwiIq3APCxwYg7luu0f399zmvjzzGo%2FziVNK6hyoGk217CmLXPmhpYmCnCdDy8nsuNh8oESk%2FLzEPcbCDeqnZsy2E8%2BlaogP3A%2Fj0g8aedcuiSyNzjXe4U0p4zI3yGv2ch1YMGaw2bCIw3vMG9Y1jaX3Xvs2%2FSOFkl6z7dgsPDdhU%2BxD49MahN4GkoYVx125NCA%2FfloEd5%2Fw5upoVXUhyMVFNQ%2FcclqbTOv1P2iTvsTrP51w%2BnzDPA6PPsKzlg9JiyNDZINUO3OmVxktwnCtogcGxucEM12q7Mq2zbOhMQbXvicf6Hb1zjdTRTukbENZ7Tq5U8trmu8fpO18nGdYrLKFpoStPJvcYazHjt2%2FSg%2FyBJr2GQ104ek%2B9VGVltJQ2w6n1CsBr4R8t%2F11Yi1NXrOKq0mozr58nQzNzEQVI%2FaUiYhO0yDh7Lx%2Blha7YzmuE9yK3OlCEHnIBBXCVKoMaiqAjRbD080W2bzBJvlwRd3h5e6GwAXqyuzPisCU2Aa0RA8ykZpyOK1a6Bf4b7OTMOGTTX3wAHzPb3LUfTLqmEFoR9OTbPxp%2B02rXuu6%2Fu2IV1E2HnFtWce2IuGzp8MtzpBelirKQFeP%2BsG1rlAZ1I4KmxmRihUXQEHISuY8gVR6JpTD0w%2BLJBjqkAUmxLKXeQPygxE5NzLfT7dcwuPUc%2BUEq%2BPyVtSstVnFvRoRscDIhHQQxJ1lRvNw3cpTinesUCAGZWt6Zdc%2Fp4ad8D8m4l6CBaRXahPTAK%2FE5Nn6JliGGIj1vdVwEl8LltovpfAA7JQFUtqT8mZpcJrrVdVvmdfcxSni6165TPNERQ7hkl5QUmZsoUma3eKIAY1noB23lZVylhGyHYxmR0TC1XGog&X-Amz-Signature=1b2d5b7c1e819c8f950a41d40ce8ad4a47d523fc3f24b59d3f3797ac7818855d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45U76NX%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5VIzNYyYpGsfzdjlfpj9Eq6k18wbo7xdBgB7sjvVaQIhAKDjCZYpAGgfxNp0VwFkfX%2FS%2Fs82YwvxmS%2FkG4SspQy%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywb9u32GEd0SnEwiIq3APCxwYg7luu0f399zmvjzzGo%2FziVNK6hyoGk217CmLXPmhpYmCnCdDy8nsuNh8oESk%2FLzEPcbCDeqnZsy2E8%2BlaogP3A%2Fj0g8aedcuiSyNzjXe4U0p4zI3yGv2ch1YMGaw2bCIw3vMG9Y1jaX3Xvs2%2FSOFkl6z7dgsPDdhU%2BxD49MahN4GkoYVx125NCA%2FfloEd5%2Fw5upoVXUhyMVFNQ%2FcclqbTOv1P2iTvsTrP51w%2BnzDPA6PPsKzlg9JiyNDZINUO3OmVxktwnCtogcGxucEM12q7Mq2zbOhMQbXvicf6Hb1zjdTRTukbENZ7Tq5U8trmu8fpO18nGdYrLKFpoStPJvcYazHjt2%2FSg%2FyBJr2GQ104ek%2B9VGVltJQ2w6n1CsBr4R8t%2F11Yi1NXrOKq0mozr58nQzNzEQVI%2FaUiYhO0yDh7Lx%2Blha7YzmuE9yK3OlCEHnIBBXCVKoMaiqAjRbD080W2bzBJvlwRd3h5e6GwAXqyuzPisCU2Aa0RA8ykZpyOK1a6Bf4b7OTMOGTTX3wAHzPb3LUfTLqmEFoR9OTbPxp%2B02rXuu6%2Fu2IV1E2HnFtWce2IuGzp8MtzpBelirKQFeP%2BsG1rlAZ1I4KmxmRihUXQEHISuY8gVR6JpTD0w%2BLJBjqkAUmxLKXeQPygxE5NzLfT7dcwuPUc%2BUEq%2BPyVtSstVnFvRoRscDIhHQQxJ1lRvNw3cpTinesUCAGZWt6Zdc%2Fp4ad8D8m4l6CBaRXahPTAK%2FE5Nn6JliGGIj1vdVwEl8LltovpfAA7JQFUtqT8mZpcJrrVdVvmdfcxSni6165TPNERQ7hkl5QUmZsoUma3eKIAY1noB23lZVylhGyHYxmR0TC1XGog&X-Amz-Signature=ddadc76d8c6e5db7c50925331324f7f0b5cdadf789e680e5a53e59c8e5c44980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTLMAFH%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OunnMwgUQ5feMa3j%2FfUZTxY8yWPKsDjYCwJMci%2BBXQIhAP3PwDNoDKs6w4DCpgsRGKIk8b5hHtJ3DW5m2sJKCbjtKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPaxF%2BPpySyOoAu2cq3AN5a%2FVl1VuGqqgs6S7eEcCIMr23gi7pupkkNRcn7cLd12zqJGh1XQ2l3QJDFEaGXWPdmuTxF%2Fbi2JvNTdX7800hDa%2BF%2FGQyz7k%2F7U6pXpi%2F%2FBXxYwhaFptgp3Uu0Ej0V1cLJtD%2BFTB9XNsyn5%2Fb4e2Kd07grYqVHoPvjMq3UzqHqpMY%2F11H6q2EdPVIGxiCnJGGpR2WmfzeIo9g9rpGk49oyU8%2B%2BDXi4QypCKxdzqfX1taZO0xUTnGYNXXtnJhZ6E9AIQmfr1vF63ohi09CV3696nbK%2Bd6R9ahQdmC7cNBfx7P03KicGHhx0tVOX%2FgGXa1TfWEAMOcTZ4r24grlkthb2%2BVvcwI9EfA25qmH%2BYIZ%2B8iOSuTOkGZUG8oenkF33UnVIGvIGpdAXtW1OWHlb8FGqUO2NLHCijJNAPGX9xETF7dkkmLHnBXvvekl4gVe%2FiBpxUDxI4sFhBY0DOPepHJVOJfTvgxiL8C9Hfk7%2F1eUIlTrSEqmJmsAXx76t6G9%2BLqb2QF1dJjoSt%2FlmYgr534pQKdpfrBXvLpDaGeuqVK3QNqT1oxvkbkK8crnG6TzCsfeayNs0OWMN12ZI9qiEgvcdEUlWnvwpHQfzaBpeVk3HINk6bySsBfzMEvmZjDgw%2BLJBjqkAb4vuAqffsku60Ui%2Fhf8zr4SkpHlmzlrTlxIo0kLeQj74v%2F48AZSZ0SbQHy8MQvpl0WcE0ZkcA1Oydf%2FCI4gyUZUwK%2BMEkZObiUzv2JWja8JGyjCTE8YQx2%2B93IbCdTvwFq55eXc0ddZAHqfWxrSUw%2BKz7UYFnfHdwL4VbOTkDvLvI%2BK79S9h833JfXzbfgZIc3kiVkT6MHuCq8Qqj9v0hQbb%2BMl&X-Amz-Signature=31992bb6c3a0cde31f5f28a719e336ddb7e9312f7467a2a1c9014acfe362847e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VUPW42E%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBT91oRvj1x7uqpNPTYfH4h0r29I5DGpUD5VPsRCmH3RAiEAkLUTPEkXEq%2FtCaM%2FZ3NTS8ngnpE%2BUMQcr6b0UNi73DsqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKA%2BB4SnpXyCkMjLCrcA098RjDFM9R8sjjITVJ2Aiselx5I2rO9J3UoVQ89mKskEfkNlp%2BkpTdxxJNeW50ykh7HHoBFkEVz2VMja6JAbMPMZFGuP8dXEwhnrKQxUur79zJqBEFK0UcTsLFhDXoLlciH9SMB3QAsj2uOaSxcLT0c%2BC85cTxMhn%2BTs5VJI51s25Qt4%2FwvurvC6UP1L0O3bPOhEP4CkfXtmsAuAXRYyRasTXIUgFNkWj5uBnmRTfbwAsOcnSltTStYpGrygX99LCbRvqMvstSODZaGgBo40B6mhtazd%2Bi748LAJiv9GEyPuPqKx%2FtGdj4vMzcDieVR7hLFl7eDwSGaOIhakf%2BEmHHdjeCNWt2on2H4PL8HmXyHDvSLYDAPNr0mrXW1TltUx65Zt6FCpCpq%2FSW2njBDC0%2Bn9jspG%2BYLwHbDLqoXDhjIayoWp0N85V5x5M%2Bx2Tss9bCGN2KqLnLygGreWZxYsZhf4J%2FTs1le3KWHfg1ecmcK08xhmv2WEw9e9IKBKRWH7M9ROkMnJmsexJ7z%2F4SmlROs5jUQwa6pbcOm15WCPW87OmT52o%2BeuouxbOOoPbrzfgHc%2FuVRhVLCmLfNLIc8IymyXG7cdwc2Ylhm0Adn7mORdHqcJEFM9HV9jSj2MPrD4skGOqUBj16euMJTUPItqLZsnkbGsGxMZsqEfII3aUmWtL2SmaWUzr9LIgJKByVzT%2B6QU9WowFJqqtBmGg6lJe1DgC8YWn2mpBUxCKF6565eLRdkrJCPFLJuwx3mAF%2FEDW7y2TMY%2FZ5gBXni7N%2FmZ942PBZ00A3jqwlJQWlJ2yJtzqrsp5VTav5b%2B8l1e9RfdpT21lOPH3Jw4RNjA8SR2Zh7NytCZ%2BRxqcab&X-Amz-Signature=638affb99e0b2fef6d8d70a5942f2aa79c23bfd36dc45b1061590c22bd813607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S45U76NX%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF5VIzNYyYpGsfzdjlfpj9Eq6k18wbo7xdBgB7sjvVaQIhAKDjCZYpAGgfxNp0VwFkfX%2FS%2Fs82YwvxmS%2FkG4SspQy%2FKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igywb9u32GEd0SnEwiIq3APCxwYg7luu0f399zmvjzzGo%2FziVNK6hyoGk217CmLXPmhpYmCnCdDy8nsuNh8oESk%2FLzEPcbCDeqnZsy2E8%2BlaogP3A%2Fj0g8aedcuiSyNzjXe4U0p4zI3yGv2ch1YMGaw2bCIw3vMG9Y1jaX3Xvs2%2FSOFkl6z7dgsPDdhU%2BxD49MahN4GkoYVx125NCA%2FfloEd5%2Fw5upoVXUhyMVFNQ%2FcclqbTOv1P2iTvsTrP51w%2BnzDPA6PPsKzlg9JiyNDZINUO3OmVxktwnCtogcGxucEM12q7Mq2zbOhMQbXvicf6Hb1zjdTRTukbENZ7Tq5U8trmu8fpO18nGdYrLKFpoStPJvcYazHjt2%2FSg%2FyBJr2GQ104ek%2B9VGVltJQ2w6n1CsBr4R8t%2F11Yi1NXrOKq0mozr58nQzNzEQVI%2FaUiYhO0yDh7Lx%2Blha7YzmuE9yK3OlCEHnIBBXCVKoMaiqAjRbD080W2bzBJvlwRd3h5e6GwAXqyuzPisCU2Aa0RA8ykZpyOK1a6Bf4b7OTMOGTTX3wAHzPb3LUfTLqmEFoR9OTbPxp%2B02rXuu6%2Fu2IV1E2HnFtWce2IuGzp8MtzpBelirKQFeP%2BsG1rlAZ1I4KmxmRihUXQEHISuY8gVR6JpTD0w%2BLJBjqkAUmxLKXeQPygxE5NzLfT7dcwuPUc%2BUEq%2BPyVtSstVnFvRoRscDIhHQQxJ1lRvNw3cpTinesUCAGZWt6Zdc%2Fp4ad8D8m4l6CBaRXahPTAK%2FE5Nn6JliGGIj1vdVwEl8LltovpfAA7JQFUtqT8mZpcJrrVdVvmdfcxSni6165TPNERQ7hkl5QUmZsoUma3eKIAY1noB23lZVylhGyHYxmR0TC1XGog&X-Amz-Signature=f368bc25631dc97baf7dc254137689152abe922170dfe00a7427389224ac5391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
