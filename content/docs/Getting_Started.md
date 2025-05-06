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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAGSG75%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlhIUvkNL1SIp68Zb1bZlHlcDaVhdHerhtW16EgQTiyAiA%2FCTSgvpsd6kWaa5XR6trzHDpWs6HhxgDBHVF%2Fqnvngir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7Dt6yWIg0lntOx0mKtwDxWnIhfdd1%2ByZjHAeFt6Pos8VzgLi3D2klaqc%2FFDwFvT5zePDvMhAKYYqEHkQqxJkNUfWZnUixrR1AuWHA0gQDB04WabCU2IwvRjBgoqV6NbxgtHLMDHtBsRNfIU3yQXLyqlsYwrP%2Flhf%2F4e3mFn0dzVzTFqSHyO1tU2YTulCNs379eq0cz2GsMd63%2FiijlwWfU4a%2B%2BKUjSVArjbLGXWyRNw0dMESYCYdDdWJY3Q7yuj%2FfGgwHlgkmygAaAIBZDL9zRoj48XWMfm%2BgJgvKpDfW1OvF1%2FB%2Fz2uKtjV9HGsxuTRfZsup4AWz08M2nT8Uq4EUyTXKD75X8ms7sPzI5LOEjh9TH8hRCxpDM%2Fe0gdiJLjTPWdJfF9ZFMyYdsXxf8P1s8V%2Fj8LspyV%2FXy0EueShZTqTwPi7yTGMrz2jnw9GbXy2WOdGeplZhlCXrVVb2VyNR7uLXFwvwrWG2QWNEEVUuEsik1s7XPG7jdiJKggd46GhMvVDO593iZOxL7EqWfa%2FyrTn%2B4PE%2FDZ6esddHiCfHpaO4KI3N%2F7%2FLEwQ4Px0Emk0P3caYFPmHxAt%2Fi%2Bn3h%2FKg%2FOGPB3kItRXwkWOAow9OmkR7NPGW9%2BguU3C7utCdylKFSYDEBAFae%2FeirEw6PbnwAY6pgE7TRgHe4XQIz1FLy0havA%2Bol527Dzc4FLyKVGvWL%2BbesS%2FqevqXI0IL236zPUUyXHmh45TVdaaBMQLj3eMJ%2F9iYOYPiDJ2AFUt4R4J5Q5IbaojxaobQWXoWV0H5PM%2B1BSoNP%2Bl2KbMV5rEDEhOhPEHSkhepfKNdnrCuNvVLgLg6rAkAenjrNYMDTUNlbh2BgZae3%2Bem2eZDhZhFE%2F699%2BZuRGDs49W&X-Amz-Signature=efe4d2755efb09113e42dbc7462676ab9506c93788bc5cb0fdbdde74380b26a4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAGSG75%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlhIUvkNL1SIp68Zb1bZlHlcDaVhdHerhtW16EgQTiyAiA%2FCTSgvpsd6kWaa5XR6trzHDpWs6HhxgDBHVF%2Fqnvngir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7Dt6yWIg0lntOx0mKtwDxWnIhfdd1%2ByZjHAeFt6Pos8VzgLi3D2klaqc%2FFDwFvT5zePDvMhAKYYqEHkQqxJkNUfWZnUixrR1AuWHA0gQDB04WabCU2IwvRjBgoqV6NbxgtHLMDHtBsRNfIU3yQXLyqlsYwrP%2Flhf%2F4e3mFn0dzVzTFqSHyO1tU2YTulCNs379eq0cz2GsMd63%2FiijlwWfU4a%2B%2BKUjSVArjbLGXWyRNw0dMESYCYdDdWJY3Q7yuj%2FfGgwHlgkmygAaAIBZDL9zRoj48XWMfm%2BgJgvKpDfW1OvF1%2FB%2Fz2uKtjV9HGsxuTRfZsup4AWz08M2nT8Uq4EUyTXKD75X8ms7sPzI5LOEjh9TH8hRCxpDM%2Fe0gdiJLjTPWdJfF9ZFMyYdsXxf8P1s8V%2Fj8LspyV%2FXy0EueShZTqTwPi7yTGMrz2jnw9GbXy2WOdGeplZhlCXrVVb2VyNR7uLXFwvwrWG2QWNEEVUuEsik1s7XPG7jdiJKggd46GhMvVDO593iZOxL7EqWfa%2FyrTn%2B4PE%2FDZ6esddHiCfHpaO4KI3N%2F7%2FLEwQ4Px0Emk0P3caYFPmHxAt%2Fi%2Bn3h%2FKg%2FOGPB3kItRXwkWOAow9OmkR7NPGW9%2BguU3C7utCdylKFSYDEBAFae%2FeirEw6PbnwAY6pgE7TRgHe4XQIz1FLy0havA%2Bol527Dzc4FLyKVGvWL%2BbesS%2FqevqXI0IL236zPUUyXHmh45TVdaaBMQLj3eMJ%2F9iYOYPiDJ2AFUt4R4J5Q5IbaojxaobQWXoWV0H5PM%2B1BSoNP%2Bl2KbMV5rEDEhOhPEHSkhepfKNdnrCuNvVLgLg6rAkAenjrNYMDTUNlbh2BgZae3%2Bem2eZDhZhFE%2F699%2BZuRGDs49W&X-Amz-Signature=87df37ff674ef499c60557c223e8727e28c2f5c7c91e85bbefb6b1d9c356923f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAGSG75%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlhIUvkNL1SIp68Zb1bZlHlcDaVhdHerhtW16EgQTiyAiA%2FCTSgvpsd6kWaa5XR6trzHDpWs6HhxgDBHVF%2Fqnvngir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7Dt6yWIg0lntOx0mKtwDxWnIhfdd1%2ByZjHAeFt6Pos8VzgLi3D2klaqc%2FFDwFvT5zePDvMhAKYYqEHkQqxJkNUfWZnUixrR1AuWHA0gQDB04WabCU2IwvRjBgoqV6NbxgtHLMDHtBsRNfIU3yQXLyqlsYwrP%2Flhf%2F4e3mFn0dzVzTFqSHyO1tU2YTulCNs379eq0cz2GsMd63%2FiijlwWfU4a%2B%2BKUjSVArjbLGXWyRNw0dMESYCYdDdWJY3Q7yuj%2FfGgwHlgkmygAaAIBZDL9zRoj48XWMfm%2BgJgvKpDfW1OvF1%2FB%2Fz2uKtjV9HGsxuTRfZsup4AWz08M2nT8Uq4EUyTXKD75X8ms7sPzI5LOEjh9TH8hRCxpDM%2Fe0gdiJLjTPWdJfF9ZFMyYdsXxf8P1s8V%2Fj8LspyV%2FXy0EueShZTqTwPi7yTGMrz2jnw9GbXy2WOdGeplZhlCXrVVb2VyNR7uLXFwvwrWG2QWNEEVUuEsik1s7XPG7jdiJKggd46GhMvVDO593iZOxL7EqWfa%2FyrTn%2B4PE%2FDZ6esddHiCfHpaO4KI3N%2F7%2FLEwQ4Px0Emk0P3caYFPmHxAt%2Fi%2Bn3h%2FKg%2FOGPB3kItRXwkWOAow9OmkR7NPGW9%2BguU3C7utCdylKFSYDEBAFae%2FeirEw6PbnwAY6pgE7TRgHe4XQIz1FLy0havA%2Bol527Dzc4FLyKVGvWL%2BbesS%2FqevqXI0IL236zPUUyXHmh45TVdaaBMQLj3eMJ%2F9iYOYPiDJ2AFUt4R4J5Q5IbaojxaobQWXoWV0H5PM%2B1BSoNP%2Bl2KbMV5rEDEhOhPEHSkhepfKNdnrCuNvVLgLg6rAkAenjrNYMDTUNlbh2BgZae3%2Bem2eZDhZhFE%2F699%2BZuRGDs49W&X-Amz-Signature=7008c74c2685295edf899c57d9e975b0571f6e50eaf13fe3004710225a3a2b13&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDH6HS7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9vajWLpkio2UTob3UGJQPZ%2Fm7gu7dliH0ZfheNoHs1AiAEyFKTmq8WyEuCDIgC4owQbs9YDH0pqklE0BgD%2FZoQOir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMgPJXWBgPRkfofLrfKtwDmjDPRSDtV4pKticXt0Xg19I7AgKOhI2PvhKf5qORmekKGyoxYt00cKCd01B%2FCDxwYI9gTNisaIIjMpaBkkmCPz5ho1huA2rnSwRKs5g1a%2BSS7YY%2BoImPWq%2Fa0ooBVaIeMtv1jb14pNiILr2fy1ru9Xm6r8uSVUWInCtOh%2BEUziMPe%2BTdXMEALebcqe0%2BwnUwBvDBDfgtyOvGgzX%2ByljT%2FoueMbtvxzJ6nRIqOUwy9muC9076QfaD2smR2GFqtY6RAmuUysc%2Bn8gkH%2FRq2CgUp0v5skKslkswtAzU9t%2FOcd4aAut9BC3KlRT4m0eByQwP7Cqx1BAyDEG8Sn4DQOiixx%2BNEN31aRFGrPIUKwKNBvh1aPP%2Fo2bS11d%2FrAP9gLk3cP3cQ%2BJ1l2ocCxqc5x240F0GRKwjnLU2eu64%2Fa0MY6K495p5fuPQBz4h6B9RayuCa4xbym%2BdaDGySr1zwOJmZux6os46nmPJ4bYfTpINHMWPpNbvVD81nHus6q0Zyi0r0y%2FimnWvq0U2xJ%2FWAiYwmuq3ddWAd1TmCO%2BeO7wN7TB30nXkGVAub7X3qPOYOdWdIuuQASSF7zBxUUYeScFBZ7GIWoMjVVlgN5dRZE%2FqS4f93N4L3CFeFYKzkuAw1PbnwAY6pgEQh4c4O3TMOkAKA%2Fu9ujjqD5ASb8zoh04jESLp4AHpTWyRtSaUO9Eo8PeJxIF3yiDjvuBmIW2HkqK9eSv%2BZTab0v%2BBIvdu9qR7lnTEuYq1%2BVPZM%2Ff9HMeN8oDThsQiAF06%2Ffg1LB%2Bkv2uD%2Fm9I6d9%2BJvODdKq29pokI5arDHHkzhJFbCmtzI2mhP%2FdFsudsXU9aOZ6Yxhxib0I0dpWkAx258vQEN9h&X-Amz-Signature=a85bd6362093f32fb6a3972d12394e2a44782493045188e37375590ab99dec27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YMXZNDI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLi3x3AzQ3oRAHSHBzNbKDIo%2BAZ%2FyMQoO7eEE11LHf0AiEA4e45m0hiOw%2F%2BVx5Nv7dgMlEs%2F1d2%2FB8mYpqrPrCzer8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPEgwuHP%2Bdt46BdurCrcAywp2DME%2FB57VkWGMZMmx9nKB0lDZcGY1e33lvxuwd%2FMlNLF%2Fn%2BXBI5fh1FN2GVF%2BjtoB6wn7VToHE5XHIPocsr%2B4M96aLO42rYFuEP%2FIeF%2FhhCnN3zFs1H6QoqwKL%2BLtGpe2kj%2B2JN9C7tWO%2F70C%2FidkkB%2Fwm7cKOiOmrABCJw1jgA1waFPaKiUfkl8uAcCAclf%2FEo%2FY38O4qrRUr8LVM9JoAyWBDh%2FS7zNffOyH%2BsrUSrUoPn%2B5fVTEH5zymrCRfGulBHr1H7ithZUHYjlJdrIc5msbFkw66Q2HvyX21NWHROb0WuwTf%2FUu4WUUZ%2BpRwArQeszdPtcM%2BziQfRZqDd4gITfCoBbdQYRTh%2FCDuSkbfyiSp6pv04CAlob7htnQuU8EPbYpf0cRwJV1BuJELSS6UD%2BrDwM4oebB0%2Fh5aRt%2BHkp6lBYLaRYym%2BJU0EoksGHV5hks5fXtMjdt4zHDsR3WIUsFrLK8nyEQ8u2HiNNZzfeGLiGAoYOULGMcS7h0%2B4c%2Br4rzi4fBMKSIxEfkqf%2B2e%2BUXN1y9LsTftu4PXJ5xCZgzx3clABkdXQaOD6JCVL1EEKfx3hcEa%2Fez0SX%2BRHzlQMZOVlv%2B8AeqOsyBB1CZRLZshAlfoU3kUSQMNr258AGOqUBknD6sVDrgshYcgVi8ogLbvNM49gnQ8K5A%2Fk%2Btn%2BC5bOKBjEFb%2BJSqLWtDNI0vQY3N18n%2BgJaVHmnXleOviEN8JBqrlV5aHTqqNT8U0%2FBZteWln8ug4%2BGnt0iPK3YHPyAgGA2x60pZHrhhHO3inobFO%2FnHxKvFWJUo9tZyi39W%2BIN5uM5fALKCS7YiWe6Jxs3omsmx9Ox0fNElCVHONGVCCTjdrVc&X-Amz-Signature=ceb56c5f9609901b0d6b30ef4068bb1dcad0315d182c91e48f1abef53e560bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAGSG75%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlhIUvkNL1SIp68Zb1bZlHlcDaVhdHerhtW16EgQTiyAiA%2FCTSgvpsd6kWaa5XR6trzHDpWs6HhxgDBHVF%2Fqnvngir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM7Dt6yWIg0lntOx0mKtwDxWnIhfdd1%2ByZjHAeFt6Pos8VzgLi3D2klaqc%2FFDwFvT5zePDvMhAKYYqEHkQqxJkNUfWZnUixrR1AuWHA0gQDB04WabCU2IwvRjBgoqV6NbxgtHLMDHtBsRNfIU3yQXLyqlsYwrP%2Flhf%2F4e3mFn0dzVzTFqSHyO1tU2YTulCNs379eq0cz2GsMd63%2FiijlwWfU4a%2B%2BKUjSVArjbLGXWyRNw0dMESYCYdDdWJY3Q7yuj%2FfGgwHlgkmygAaAIBZDL9zRoj48XWMfm%2BgJgvKpDfW1OvF1%2FB%2Fz2uKtjV9HGsxuTRfZsup4AWz08M2nT8Uq4EUyTXKD75X8ms7sPzI5LOEjh9TH8hRCxpDM%2Fe0gdiJLjTPWdJfF9ZFMyYdsXxf8P1s8V%2Fj8LspyV%2FXy0EueShZTqTwPi7yTGMrz2jnw9GbXy2WOdGeplZhlCXrVVb2VyNR7uLXFwvwrWG2QWNEEVUuEsik1s7XPG7jdiJKggd46GhMvVDO593iZOxL7EqWfa%2FyrTn%2B4PE%2FDZ6esddHiCfHpaO4KI3N%2F7%2FLEwQ4Px0Emk0P3caYFPmHxAt%2Fi%2Bn3h%2FKg%2FOGPB3kItRXwkWOAow9OmkR7NPGW9%2BguU3C7utCdylKFSYDEBAFae%2FeirEw6PbnwAY6pgE7TRgHe4XQIz1FLy0havA%2Bol527Dzc4FLyKVGvWL%2BbesS%2FqevqXI0IL236zPUUyXHmh45TVdaaBMQLj3eMJ%2F9iYOYPiDJ2AFUt4R4J5Q5IbaojxaobQWXoWV0H5PM%2B1BSoNP%2Bl2KbMV5rEDEhOhPEHSkhepfKNdnrCuNvVLgLg6rAkAenjrNYMDTUNlbh2BgZae3%2Bem2eZDhZhFE%2F699%2BZuRGDs49W&X-Amz-Signature=b2646c4337e45cc3e7d0a7930fd6c4f864de36262cab235fb5e4348b5d82730b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
