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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYD4SPLO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFMEW7esjCynMXsexLC2LlTFbSJvTovqRu6m25GKZd6VAiAeXVj1gTtwM2tKv3ZbNQSEfMC8PDXVRobjHvCNUtgqQCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZKVVluJsg5H%2BktCoKtwD7pkuOdE0MnebgOyk6HXgRw1wxE8c8cgICjD0QJbKskFJEw%2BTTHSd3SRHwT8rN3jUgCuHecPfr1rakJlV7cwU4j86ldGzSN97VmnhzF3UoGMgRY5CLvoP%2FmYpJhvm30M6UEU3bXFr8yxUh8kNe7JbfcfMfLnADgRJ4vm4LQx25RJZHf9w3WGKR01Y228lbYTJOL0%2BW7Zt1j3SfiyIQq82fKO7aUxrUoWF1HwFKA8OjDSRb0XhGfAnQchGWm6NE7HltynUg6ol1KoZtMVCLYu%2BA%2B282dob26OnUYX8uLvw5UvsMgBlmlBnTSsQDNKbYgj3GkUULbTGHtFI%2BZ42MtMxHd7LxhJQbVheOTX%2Bqq1D54nfIqtdvvJHRB3jgIHCE5ga%2BM%2FHJjk5bI8hyIPZJUXa3PW1JDNv9XXuY9SoIhABeprEHg9a2zq%2BPaqnWcDiUQ5%2Ft8%2BforSiEuzPEfyyc2BR%2Fpel5lvME3R8%2Fi%2BWqoJAvm%2FmxPD6hXGoqeN8GQbZgid6sgBMSdIULDBL%2FVlO3axOPClfyzEF%2BB%2BimcdypgWtwOGdraiUtNaFYbNPQupGNcrt%2F96VZLKWwRrIotaGffjbOUm2XY6bgrYV3IA8wrUOA0wZycjA2cUoOtH9UTkwm%2BL3wQY6pgH3CNjwTOi6GXQGmu3GTA4Dr%2F5qA1CLbJ4TZsIiJvuzYI6jfhlEdWUhn9KI7oVQc%2FA8ohG%2B1MvE01A8XSasWwSZ0XBLj288keyhJt5znKWd%2FWCPUsndVcO78HZ%2F6kwBWH9AxD4VST8mI8PZwZeFkI6aBMQnl6B9%2FEz3BXGGq2swlb%2Fr9x9%2BDsPx1Qy8XHkIZVHcBwIVsiXiC%2F1d4AFy71F2hrAUv9us&X-Amz-Signature=eea032577f740e0698eea0aacf80c168326c33f0685363251d20d5dff9e28772&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYD4SPLO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFMEW7esjCynMXsexLC2LlTFbSJvTovqRu6m25GKZd6VAiAeXVj1gTtwM2tKv3ZbNQSEfMC8PDXVRobjHvCNUtgqQCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZKVVluJsg5H%2BktCoKtwD7pkuOdE0MnebgOyk6HXgRw1wxE8c8cgICjD0QJbKskFJEw%2BTTHSd3SRHwT8rN3jUgCuHecPfr1rakJlV7cwU4j86ldGzSN97VmnhzF3UoGMgRY5CLvoP%2FmYpJhvm30M6UEU3bXFr8yxUh8kNe7JbfcfMfLnADgRJ4vm4LQx25RJZHf9w3WGKR01Y228lbYTJOL0%2BW7Zt1j3SfiyIQq82fKO7aUxrUoWF1HwFKA8OjDSRb0XhGfAnQchGWm6NE7HltynUg6ol1KoZtMVCLYu%2BA%2B282dob26OnUYX8uLvw5UvsMgBlmlBnTSsQDNKbYgj3GkUULbTGHtFI%2BZ42MtMxHd7LxhJQbVheOTX%2Bqq1D54nfIqtdvvJHRB3jgIHCE5ga%2BM%2FHJjk5bI8hyIPZJUXa3PW1JDNv9XXuY9SoIhABeprEHg9a2zq%2BPaqnWcDiUQ5%2Ft8%2BforSiEuzPEfyyc2BR%2Fpel5lvME3R8%2Fi%2BWqoJAvm%2FmxPD6hXGoqeN8GQbZgid6sgBMSdIULDBL%2FVlO3axOPClfyzEF%2BB%2BimcdypgWtwOGdraiUtNaFYbNPQupGNcrt%2F96VZLKWwRrIotaGffjbOUm2XY6bgrYV3IA8wrUOA0wZycjA2cUoOtH9UTkwm%2BL3wQY6pgH3CNjwTOi6GXQGmu3GTA4Dr%2F5qA1CLbJ4TZsIiJvuzYI6jfhlEdWUhn9KI7oVQc%2FA8ohG%2B1MvE01A8XSasWwSZ0XBLj288keyhJt5znKWd%2FWCPUsndVcO78HZ%2F6kwBWH9AxD4VST8mI8PZwZeFkI6aBMQnl6B9%2FEz3BXGGq2swlb%2Fr9x9%2BDsPx1Qy8XHkIZVHcBwIVsiXiC%2F1d4AFy71F2hrAUv9us&X-Amz-Signature=12443d816ade31be1b7210d0ef9d8d9618198797f9789c834c99c8ff4ecf043b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYD4SPLO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFMEW7esjCynMXsexLC2LlTFbSJvTovqRu6m25GKZd6VAiAeXVj1gTtwM2tKv3ZbNQSEfMC8PDXVRobjHvCNUtgqQCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZKVVluJsg5H%2BktCoKtwD7pkuOdE0MnebgOyk6HXgRw1wxE8c8cgICjD0QJbKskFJEw%2BTTHSd3SRHwT8rN3jUgCuHecPfr1rakJlV7cwU4j86ldGzSN97VmnhzF3UoGMgRY5CLvoP%2FmYpJhvm30M6UEU3bXFr8yxUh8kNe7JbfcfMfLnADgRJ4vm4LQx25RJZHf9w3WGKR01Y228lbYTJOL0%2BW7Zt1j3SfiyIQq82fKO7aUxrUoWF1HwFKA8OjDSRb0XhGfAnQchGWm6NE7HltynUg6ol1KoZtMVCLYu%2BA%2B282dob26OnUYX8uLvw5UvsMgBlmlBnTSsQDNKbYgj3GkUULbTGHtFI%2BZ42MtMxHd7LxhJQbVheOTX%2Bqq1D54nfIqtdvvJHRB3jgIHCE5ga%2BM%2FHJjk5bI8hyIPZJUXa3PW1JDNv9XXuY9SoIhABeprEHg9a2zq%2BPaqnWcDiUQ5%2Ft8%2BforSiEuzPEfyyc2BR%2Fpel5lvME3R8%2Fi%2BWqoJAvm%2FmxPD6hXGoqeN8GQbZgid6sgBMSdIULDBL%2FVlO3axOPClfyzEF%2BB%2BimcdypgWtwOGdraiUtNaFYbNPQupGNcrt%2F96VZLKWwRrIotaGffjbOUm2XY6bgrYV3IA8wrUOA0wZycjA2cUoOtH9UTkwm%2BL3wQY6pgH3CNjwTOi6GXQGmu3GTA4Dr%2F5qA1CLbJ4TZsIiJvuzYI6jfhlEdWUhn9KI7oVQc%2FA8ohG%2B1MvE01A8XSasWwSZ0XBLj288keyhJt5znKWd%2FWCPUsndVcO78HZ%2F6kwBWH9AxD4VST8mI8PZwZeFkI6aBMQnl6B9%2FEz3BXGGq2swlb%2Fr9x9%2BDsPx1Qy8XHkIZVHcBwIVsiXiC%2F1d4AFy71F2hrAUv9us&X-Amz-Signature=7bb57eebf11b8a06626b4d687ce283a97c4de9bced3a211e2dfa6694343ee154&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OUXU4LS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDXETPmANrt%2BW2FUOgKRyzDQUMrCJpqNYfXn9EN5XgfeAIhAP5kqOWKdizu9pm9ru8M0w8SQAB5m4Je61E7%2Fj6q8wFmKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMw18ZNQpjA%2FPz7yAq3APfYYZc%2FTkdOWYDvylp5JrjEIaHzZNsXsfaZXH6x2JATVXaz0ziuys4SUEu4ONewXFqSBbwBpvLVqebwD%2BI7aruJfSlURakFl4IRDgU9glCgTyAo9rhL94q3uGDaQri1rfMOXfubHh1hSO9xuhg2%2FSHzrcoCNEGKVLIojwM3%2FZ76%2F5M6v34xQLnxbzEgW%2FZTdwe5n3%2F8f0RFJWcu3GwR7BtB%2BRXvqoUU8%2FTNmdE%2BafUhJOAb6FKxX3NEaVkuqYDTW3BAlFcjczNCq5Td150fMkfpmdCKdZ29DfrFIrub9bTAr3WWo4B%2BGVsbCnJxh4WWxKcxaqPswJinC33PmRsk6Wosfu5f0jXIfnyY8%2Bk%2FE2HUHGNLy%2BG0jUoPTG5nQR8kwDskrfmMCo5B0028CHm9NVNRHTs%2BCT%2FXslD%2BRqICWu%2Bjiqc5w4oqU7PZdWFjbfgqJYGYGmQv4r5vm2vqt9Jbn%2Ffecv6H%2FlKXhVVZdWl0EOKsKHVP0kGZOhXcMWg0TPDFRLQABg26xIwgjcGIQlHhDErGRFtEZSCGrQez0GSgAXtFFZuTtJYNy05XxPF02C0MyCkawMfUlY7g%2FpuyU1FIqnmdthXX4kY2jejCUnLVobkgFb6x4e8KdHvTR7tujCE6vfBBjqkAVBAynIG%2FolutNLSuNdteKLLrAilmcphAXcmTNNroV6tIkEAlCVtcvdFQePS9rd%2BmdmodLZ79PHEJggts4Uc4Oz0CCmBQCSib1Pea6jyHEsT%2BYWuImCrNv1T%2F05EOY5ojcwJ7eKVqkFiUX7NdacmBQliCHPuTO51UirTGafQ%2BzUQt8PmupnJaLGz9iNk4Ys7fIzHvA%2FYHMS%2FnTmZJIdA6O9OJpQx&X-Amz-Signature=e5f769dc64d38ffe49075ff9436cf70435db0d7ea531ad9739fdca506ad0381b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJILKPJ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQD0y7vyCFBOoReo2Ln6M%2F3Xje81LUp1gTGCXckyQ6PkrwIgdmvxPXpdOM1BGza1%2FGZUlrZoTHdo5fL%2FXAZBnZWPQ18qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMwLnyw8i99w68brircAy0VhvQOx%2B85mhBtXwk7Mc7zyx2L5DMXLToWkqOziSo%2FelOb5uU6AdRj%2FNJAa7rQaHsNVk3aLLXoXlgWieW7PydDedlVLx2QkfmYb89uXFdI6uN%2BUzBb41LCvqeszqQUiYUuvb3HzyeZLEYZF4KIpj97nE0gtyHqnu7aX8KlzC1v5kdCCf29C%2Fk4E9sSUNjbUgzdDWDLXrtI%2BkMuPTEfcIlpPB75XOqWfFOdsubz5HZ94z6pSZtf8uzNvAhMsqYGE97yHv1%2BYbfhyCFGiVUAjEzKp5B5u1ZGvSBkowivcsldG8TNhNjoR61Tk4SU0pa5RGZlSx7%2BOj1BsbegG37zBJ3nUka4tCOhZgrggzwRFTPcB7rKQPBICHwIECi01J7yGeZiBbcF1ODtd%2BAALO7dhRy9e4zJigKwjexPLjA9xLAQ8GfaIrJIuULnIpU4yTB6vw6AIGlG%2F2c6dutslUITnwEa1jWqFkBpbzbCYZbO%2Bv6bCr%2F4sF3DnWDz3jICAfh43XitOjLOLoE797Le26cmA6YArkEG4t9QdGrYR%2FgH8HQx%2Fqcfik8vAy64%2F1ZDYp6iaMqWtY41%2B%2B6fxo4UDpRvM9ZxX%2Fq7e3gjsMJZdu3KsCaPA66u5gzHcho9RFCGMIbi98EGOqUBA1%2BGWmxmj4%2BwZak8ytmzCKpPRidwjOZu2ukr5L%2Bksj%2Fg8B2H0%2F5ppg57XNguvAiIasFY3C2j49PVSuo6kGbjMpRDaydViEeSokP0YpcS6dDkIfIjWO3WsrKG7vq76K4D1mXxtj6txUG7arQFx%2BnOHtBaMXVBUClmLhr7vplX004cupcBknkgIGuc%2BCs8c%2FwENkiFjw07AjTHT2U4C5byO1SqYImO&X-Amz-Signature=7ed297df7e79e4f5e78560d7fcf57fa4eff704bd6f889e9a0930ccb47eab22a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYD4SPLO%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFMEW7esjCynMXsexLC2LlTFbSJvTovqRu6m25GKZd6VAiAeXVj1gTtwM2tKv3ZbNQSEfMC8PDXVRobjHvCNUtgqQCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZKVVluJsg5H%2BktCoKtwD7pkuOdE0MnebgOyk6HXgRw1wxE8c8cgICjD0QJbKskFJEw%2BTTHSd3SRHwT8rN3jUgCuHecPfr1rakJlV7cwU4j86ldGzSN97VmnhzF3UoGMgRY5CLvoP%2FmYpJhvm30M6UEU3bXFr8yxUh8kNe7JbfcfMfLnADgRJ4vm4LQx25RJZHf9w3WGKR01Y228lbYTJOL0%2BW7Zt1j3SfiyIQq82fKO7aUxrUoWF1HwFKA8OjDSRb0XhGfAnQchGWm6NE7HltynUg6ol1KoZtMVCLYu%2BA%2B282dob26OnUYX8uLvw5UvsMgBlmlBnTSsQDNKbYgj3GkUULbTGHtFI%2BZ42MtMxHd7LxhJQbVheOTX%2Bqq1D54nfIqtdvvJHRB3jgIHCE5ga%2BM%2FHJjk5bI8hyIPZJUXa3PW1JDNv9XXuY9SoIhABeprEHg9a2zq%2BPaqnWcDiUQ5%2Ft8%2BforSiEuzPEfyyc2BR%2Fpel5lvME3R8%2Fi%2BWqoJAvm%2FmxPD6hXGoqeN8GQbZgid6sgBMSdIULDBL%2FVlO3axOPClfyzEF%2BB%2BimcdypgWtwOGdraiUtNaFYbNPQupGNcrt%2F96VZLKWwRrIotaGffjbOUm2XY6bgrYV3IA8wrUOA0wZycjA2cUoOtH9UTkwm%2BL3wQY6pgH3CNjwTOi6GXQGmu3GTA4Dr%2F5qA1CLbJ4TZsIiJvuzYI6jfhlEdWUhn9KI7oVQc%2FA8ohG%2B1MvE01A8XSasWwSZ0XBLj288keyhJt5znKWd%2FWCPUsndVcO78HZ%2F6kwBWH9AxD4VST8mI8PZwZeFkI6aBMQnl6B9%2FEz3BXGGq2swlb%2Fr9x9%2BDsPx1Qy8XHkIZVHcBwIVsiXiC%2F1d4AFy71F2hrAUv9us&X-Amz-Signature=7d21bed92e0cf649665e616fbf22e57f22f78b74d799db37c1364ba8400cb947&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
