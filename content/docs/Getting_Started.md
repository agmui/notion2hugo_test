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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDSLD2SG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEKSfB%2Fmhj9d4%2BXJWWvSQwpJ32XhL%2BLlyaF2KerQTGxIAiEAwE414psbGfCLtn6cYUvW%2BoY2nbNV05WGpfNKqhwmgkwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLEDLRQx8jjhYhUjrSrcA0rJYwhUQDQSngVXpYrLdoU2Xr1j14gY5IXaewnNEQCf2aXENqC62mzAabGDJMFVZU4IGAk7DTcPycUYbyT7RRYrRFY7HiD74FKULFiwvJKtE0%2FXo7ceDuhURp6Mdtp1LAMs66Bsdui5wCNuOXgOh%2B4ld6ebyVbjtK%2BubzyC%2B%2FpjvTgvnHQ1LmYivU%2Bc6WqfeHnlBmY1AQpWWiEKy4%2FtPYFJyPg%2FcmNEHFD3tdo0RI5uIMVm8Tcp9UyBhlIf9nehRyxtJHhQGD%2BYY4o26oN9wUbYR033ulzkzv53j7wZAQgQ2TPO494njiV1xgy2a2Us1TvVCo7BgoZag8x9ldAZAhLZRqbwRuOeKLwlsl45EYHhPYE1XA0DRXTzzSCZyafsbEaF8tSyKy8zPh%2FnOQqOBTeU5KtSrLV8g9ew0kmNxwRGFkeEURTMq1ZlmqHlId3NOKS1yTQ2eQVAGLglDvbv1Qyx4aHRhtguz%2FM%2F4sihZM%2BKZv9NIs4tOOJqjdcGH4XSMNk5lks7F3ppxJpsEQMo0kJ62JzE6421xDo02aa5Su%2F4CU3xzuFGayL0jg6DFtSbbHjPiK%2Bf24UISMFqcmh6JU0m8C2GlNLmxSzgm%2FX24VKcKkvukWzHHrdBG5bKMIO1n78GOqUBQi4z5NDNsDGi%2Fg27CCJwyw%2BLBtI7W%2BGB1RfB3VJdWbx%2Bb6EWy%2FiTHyr4kuiYAN%2BLEqxOo7ARieua5GD%2FFZqTGeFALRVV%2FubM7O6rSMLGcowHZYOXqsUDyi7BuRl56SAmlStHn3LozQjoHPqxsHLXjKl7AlHOPTnKbmQDC85eUWtvmaAjif7sXXsc3Mqv63rCrrf6AU%2BXnbCgI66%2FIKD5rgVs%2FEsF&X-Amz-Signature=b11c23cf7f1b0860ccb6ba018c4e0e749e45401a494efebe3e0a367095ad8349&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDSLD2SG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEKSfB%2Fmhj9d4%2BXJWWvSQwpJ32XhL%2BLlyaF2KerQTGxIAiEAwE414psbGfCLtn6cYUvW%2BoY2nbNV05WGpfNKqhwmgkwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLEDLRQx8jjhYhUjrSrcA0rJYwhUQDQSngVXpYrLdoU2Xr1j14gY5IXaewnNEQCf2aXENqC62mzAabGDJMFVZU4IGAk7DTcPycUYbyT7RRYrRFY7HiD74FKULFiwvJKtE0%2FXo7ceDuhURp6Mdtp1LAMs66Bsdui5wCNuOXgOh%2B4ld6ebyVbjtK%2BubzyC%2B%2FpjvTgvnHQ1LmYivU%2Bc6WqfeHnlBmY1AQpWWiEKy4%2FtPYFJyPg%2FcmNEHFD3tdo0RI5uIMVm8Tcp9UyBhlIf9nehRyxtJHhQGD%2BYY4o26oN9wUbYR033ulzkzv53j7wZAQgQ2TPO494njiV1xgy2a2Us1TvVCo7BgoZag8x9ldAZAhLZRqbwRuOeKLwlsl45EYHhPYE1XA0DRXTzzSCZyafsbEaF8tSyKy8zPh%2FnOQqOBTeU5KtSrLV8g9ew0kmNxwRGFkeEURTMq1ZlmqHlId3NOKS1yTQ2eQVAGLglDvbv1Qyx4aHRhtguz%2FM%2F4sihZM%2BKZv9NIs4tOOJqjdcGH4XSMNk5lks7F3ppxJpsEQMo0kJ62JzE6421xDo02aa5Su%2F4CU3xzuFGayL0jg6DFtSbbHjPiK%2Bf24UISMFqcmh6JU0m8C2GlNLmxSzgm%2FX24VKcKkvukWzHHrdBG5bKMIO1n78GOqUBQi4z5NDNsDGi%2Fg27CCJwyw%2BLBtI7W%2BGB1RfB3VJdWbx%2Bb6EWy%2FiTHyr4kuiYAN%2BLEqxOo7ARieua5GD%2FFZqTGeFALRVV%2FubM7O6rSMLGcowHZYOXqsUDyi7BuRl56SAmlStHn3LozQjoHPqxsHLXjKl7AlHOPTnKbmQDC85eUWtvmaAjif7sXXsc3Mqv63rCrrf6AU%2BXnbCgI66%2FIKD5rgVs%2FEsF&X-Amz-Signature=fb02785d03516308ad5c3fee7bfe7a63e72ebb70cda408e93d779b98522d01f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKHQX2Y%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIDd%2FahboaO2uvg1oENC0QpDd512rNPAPFitlg2azKq4HAiAnTuoDe8kS9znM4OiCwLhn3pin0DvmcT8ceFjiYqDpWSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgOh8zvVO9utig0ZbKtwDmKHsUrbk7RAMeQVQeSkyT87mo1VrR9KaYNJY8yYVpFwz7Nd%2Ff%2FHEr2dRavOCXdzmqas4wEIZlrkICZV3F5EyqDO9U%2BLj9GGF2SeR2UbHQgDjK3jMWGib53hxdeSzP1gRG7V%2BSfvVXvPaN35mvaTDfcMK4eMTxjaHGWQPvAaxLHc%2F2rcxbzP%2FKayXE9eEpTAzTH8F%2BrLR57jAd0nmlRedOiz4oKjRF%2B7aHMrkWLFLOt3qwvY2FSevZeRg02NaeG8tCkJp1je%2F3TC4g6lbkk6afO3FzNTlu7dAzKhru3sEjNXd7hJiFpLSIV6QejrVrGj3PfXxO%2F%2BLL976qJnmptZ8vPIsdRvKgl1YXSmkct2gUeV5u7Q84Z3lih2Sxnz4%2FKa33w3mpH6Nu5TAPOnqwyRQ%2FqjOkL4uqJ5Btmlqu%2F7Em3hXKSGIkgjrM%2FnhmkPKvWadj%2B%2BOL%2F5dw9AL1T84TwnAfWS%2BKNxFNE0KkZubiSsYu8RceIPYFmOx5j%2Fe%2BZrmzrgk2rLJxalw6cMnDcqCenlV2OEOpSY6yTcM4HB816cVGrNf9sdxOtqXAnvvmeGOR8Edj5UFoHvFHrDZQZvpWODU9jWNRFQUx2JfA5iXcEepOqiMktCaqUTJvQkpDaowp7WfvwY6pgHzpKxRK9rItxfEVIUdQFltHxAqRTYa0zbVtZuQk2wyWjBh9N5uV8yZrS%2FHG5oyRCyz9ERyOExJlHRjMJ8CEE38PKZ5VItWkN6s6SZvqLlqqZGqi93tkY6A7W9jxMk1MqvLAFQEHGr20VDhx6Vqe32%2B89ErbOnEqkTzPNI5rci%2FuAKzWTq42FtmMmaekFZH3GGwY1EIfZ3i%2B6VvTLtK0Q5bL9XYdFkx&X-Amz-Signature=6665844cb70cc2c11fbd32ef7bdf4a0e53b650465d418fbeec2507491b0eea6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYKWYNR%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIAtt48HJ6q5QcvEruAIcNeCPcS4UvLMFSqBGNffAgVEiAiB%2FVBcwHfGF1omomWZRnu2Sky5yFl9DUWiuo0UcJ6Sr5Sr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMygWYtFvZBnEHNFBKKtwDa%2Bur2wEMvWYbV%2Fm4zWPmIXY43OEP6l2ODFrSWlXQYmKlhvejI8PF89BADpP76Guzd49Dm%2Bq59sjzkchL8A19gY9pabjeGe6eJhJjEZGPlMMUK7T0rmHlzGmU7dEHUd22CeyA4xlNh4cI2EyxtuTsnEZ3d14F4vBrI0t7Q4tMLJE3VeaDsZy1RAl57ZVtGkCNZCR3UAbPRajpU6wG8UC3t8RGT3vHyUJ4IVR4aIzVNewpcKnP%2FVH3QajCLiyoaPqFuOjiQ%2FMDJatd7CMj4M39F2Y5yF8T4JjLPRKbZE%2F2Omsvc8ixrRF2boxaqnqmtaygua5ktg86o89aVT4p%2B%2BeoRgLvoszsRmDI5dDYlRVJuRTlOhvWcPqNUEI4qJF40%2FlsR96bYYXH1x25fjiir3Wzub8bUIhn41YyC4Wcqvr6EK6e0dBb6lxseX%2B4apoxju9AzzxQFuDzuEDGX%2FCNbvBTQ9XK%2FWcOI4SNxkm%2B5QfdMp0ETedZ560E8jbOxiDqrnrDUXwCGU9FNAKtDiYnRAl1Yw91EZqCixJ8Nij4kEKMvcLzu6svlfY9UG6CO1q5SkNGoKO5XVcc1pWPmZ313mpC%2B%2BMVV59%2BL15x5fRfRXrAxzGyhxWejj%2FUqsIQrzAwl7WfvwY6pgE3ZROZMNKQBxgIn67pns4oI2Q3lrQUKxRIhrZLo4fh060%2F4DBokSpTmLvi9gRK76IHd9YQU1xebU%2BNGAugNas0g0OnFdNMXDXUTARGAAtOlWH1S%2FxwO9tn8da33%2FEwBz%2BBDejmeWDjU45hHg70HlszNES8EDUzGjhhTHV9x0ofwjdsieY6x0tiZvHA1hS%2Feiv2qux5jtBxIb6fTR7ngfJ5VgNyLoKw&X-Amz-Signature=937b03f568cfe04841d5f16ee52f40c96097a83c1e00f14dddb1e7d0b8b50369&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDSLD2SG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T140411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEKSfB%2Fmhj9d4%2BXJWWvSQwpJ32XhL%2BLlyaF2KerQTGxIAiEAwE414psbGfCLtn6cYUvW%2BoY2nbNV05WGpfNKqhwmgkwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLEDLRQx8jjhYhUjrSrcA0rJYwhUQDQSngVXpYrLdoU2Xr1j14gY5IXaewnNEQCf2aXENqC62mzAabGDJMFVZU4IGAk7DTcPycUYbyT7RRYrRFY7HiD74FKULFiwvJKtE0%2FXo7ceDuhURp6Mdtp1LAMs66Bsdui5wCNuOXgOh%2B4ld6ebyVbjtK%2BubzyC%2B%2FpjvTgvnHQ1LmYivU%2Bc6WqfeHnlBmY1AQpWWiEKy4%2FtPYFJyPg%2FcmNEHFD3tdo0RI5uIMVm8Tcp9UyBhlIf9nehRyxtJHhQGD%2BYY4o26oN9wUbYR033ulzkzv53j7wZAQgQ2TPO494njiV1xgy2a2Us1TvVCo7BgoZag8x9ldAZAhLZRqbwRuOeKLwlsl45EYHhPYE1XA0DRXTzzSCZyafsbEaF8tSyKy8zPh%2FnOQqOBTeU5KtSrLV8g9ew0kmNxwRGFkeEURTMq1ZlmqHlId3NOKS1yTQ2eQVAGLglDvbv1Qyx4aHRhtguz%2FM%2F4sihZM%2BKZv9NIs4tOOJqjdcGH4XSMNk5lks7F3ppxJpsEQMo0kJ62JzE6421xDo02aa5Su%2F4CU3xzuFGayL0jg6DFtSbbHjPiK%2Bf24UISMFqcmh6JU0m8C2GlNLmxSzgm%2FX24VKcKkvukWzHHrdBG5bKMIO1n78GOqUBQi4z5NDNsDGi%2Fg27CCJwyw%2BLBtI7W%2BGB1RfB3VJdWbx%2Bb6EWy%2FiTHyr4kuiYAN%2BLEqxOo7ARieua5GD%2FFZqTGeFALRVV%2FubM7O6rSMLGcowHZYOXqsUDyi7BuRl56SAmlStHn3LozQjoHPqxsHLXjKl7AlHOPTnKbmQDC85eUWtvmaAjif7sXXsc3Mqv63rCrrf6AU%2BXnbCgI66%2FIKD5rgVs%2FEsF&X-Amz-Signature=ff41169134e5128b48c29f05b385abfffe5edf893fb73084807fea68401c4041&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
