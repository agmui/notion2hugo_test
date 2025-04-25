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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC7CEV3V%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeWwOGtMepFykoh3%2BOV068XAKRRFlPUsYgkbHrDqVBMgIgP%2FfIid2ZdsnxaHF3NhZTSRfVW4VbB6ju%2BWyMnSXIXiAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDC3L7hXiR%2BqQkCR5MCrcAwHwukXd2oNl%2Fn2PrJoww3hChykQMO5S8zTUk6cG8r2WKzYvlsk4iHuzHC%2FCWPw7oFhqAQQdCLPX3iBVQlJ2sbBiN5pn%2FeV5JLquM5FvJNsk6KAsshzozCvfrE8i4mnljfK6xa0OFXlzTdLMeLqzJSi8GdgSTqaIkB6p2vU28nyw9XWJ11wmlt1fdxlZqiIGRGLwFZu7ufwGWxvl2CtobeCefuDjs2xj7jRgwDvAqiR312tgi3zgKa6fyCQXQBkYBlPVzHrkk%2FIExgJF531Zoh%2BNLnF0r9MP%2FdDBvGXxfEdYe9jgYZri22fDDeiUUzicXNXxHSMebjSUNP2UpC09fu3WqzR3bzU1j3rf5%2BI90M9JtAlESCsYWI5gJLS%2FrjPWomY5Ybct5Q8GDrTTOqjGJAK6ya6n0DkaVv8gWVFjEeJ%2FWn7vh5h1Nv0YYq8KJUHjAQHXLYkKxoPuW0xEtm%2BT6ntPMFjwtmXl%2BOiqmeg7ujA4vatJvfBDbqHawWQwZMvhbQeM02cZchQql3XzTgt9nHk%2FYtXkwPFvZeEJ9PAyqdMnT%2BiRSYjM2WXjZbVXFZBv%2FOP4xdrbmxAG1cgBU1%2BvKmto2rFOesXiypx%2BKdE2BqiV%2FFXdkBk0ZfEioOMmMLS3r8AGOqUBI7O%2FQTA6ouwfP9%2BJDHj9kxoKaGO%2BqHRCyjV682yhUFcNvk5BRwELYf%2Bdgjbmf5T%2FHHrJ6WGBYF0wYPqL%2F4be4FwZ9soU%2Bt8hcyBuZ3UN0hvT7i0i4slT%2Fhf31Tlf2P52s5wA8mwvWBNsP1Ky4hroxUw6uLtlNkHJ1XoN%2BXTeOQBkbVq1TIuMyf72atXCMW0cm0QEQ50YCTMPf8XAOSJqKpw7BSo3&X-Amz-Signature=9c3d9feb08db2d1738e24166366069f80f19a9f40a3f94ec76faa5a79094d560&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC7CEV3V%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeWwOGtMepFykoh3%2BOV068XAKRRFlPUsYgkbHrDqVBMgIgP%2FfIid2ZdsnxaHF3NhZTSRfVW4VbB6ju%2BWyMnSXIXiAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDC3L7hXiR%2BqQkCR5MCrcAwHwukXd2oNl%2Fn2PrJoww3hChykQMO5S8zTUk6cG8r2WKzYvlsk4iHuzHC%2FCWPw7oFhqAQQdCLPX3iBVQlJ2sbBiN5pn%2FeV5JLquM5FvJNsk6KAsshzozCvfrE8i4mnljfK6xa0OFXlzTdLMeLqzJSi8GdgSTqaIkB6p2vU28nyw9XWJ11wmlt1fdxlZqiIGRGLwFZu7ufwGWxvl2CtobeCefuDjs2xj7jRgwDvAqiR312tgi3zgKa6fyCQXQBkYBlPVzHrkk%2FIExgJF531Zoh%2BNLnF0r9MP%2FdDBvGXxfEdYe9jgYZri22fDDeiUUzicXNXxHSMebjSUNP2UpC09fu3WqzR3bzU1j3rf5%2BI90M9JtAlESCsYWI5gJLS%2FrjPWomY5Ybct5Q8GDrTTOqjGJAK6ya6n0DkaVv8gWVFjEeJ%2FWn7vh5h1Nv0YYq8KJUHjAQHXLYkKxoPuW0xEtm%2BT6ntPMFjwtmXl%2BOiqmeg7ujA4vatJvfBDbqHawWQwZMvhbQeM02cZchQql3XzTgt9nHk%2FYtXkwPFvZeEJ9PAyqdMnT%2BiRSYjM2WXjZbVXFZBv%2FOP4xdrbmxAG1cgBU1%2BvKmto2rFOesXiypx%2BKdE2BqiV%2FFXdkBk0ZfEioOMmMLS3r8AGOqUBI7O%2FQTA6ouwfP9%2BJDHj9kxoKaGO%2BqHRCyjV682yhUFcNvk5BRwELYf%2Bdgjbmf5T%2FHHrJ6WGBYF0wYPqL%2F4be4FwZ9soU%2Bt8hcyBuZ3UN0hvT7i0i4slT%2Fhf31Tlf2P52s5wA8mwvWBNsP1Ky4hroxUw6uLtlNkHJ1XoN%2BXTeOQBkbVq1TIuMyf72atXCMW0cm0QEQ50YCTMPf8XAOSJqKpw7BSo3&X-Amz-Signature=601c8c966bb499a29cd2fe66cef3a9f3d774a1e6f2cd1c26bf9dd9009675e654&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6GHZ4B%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD9eV9RRRTkvpFB%2BhGEjxC2BCDbZTwb6fdDWuMy3KA7gIgAr5bYGXJgkXy53rOmJjv6KcbhEE%2FSzEaY4qjU8Nbwwwq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNoMH%2Bxc3aBjvxR9cSrcA%2BcTJGYQK669WqFz8WCEkDuna04K0%2BxP16MrLnkI%2FNlwR2%2ByuvDjA4dGx%2BAd6usZVq1lZsEb7fV14jl5KtEyJjx0FuWFrh5AO6JSDnhR%2Fe63cSM8PSpIkA5e2XFcQvfOh7i%2B6aFhErsTIPdJLEnZobHrl%2FrsKQITu10gtmGwk%2B4GJpuAWbwM7WVeTKOQZKUUiqsfaKZBqIz2arIIVpbl0qZGPp4doUAkV6B0JRYw7fl8zIXCbVPgf0nGEwP5AQ8fjZQp0j6hqJzcJ%2FLLj3BWQrcJcNrcvkjEt1x9mFI8%2BpwhQhTfA8%2FJtCkTkM1%2FYxr1tIUSU7BlDm626Vasx9fvKxlKnPbKJxNVm%2BQUvnXQ3Lj5dLS7bSnvrkra1PDCCRhTeHoruEFu3kbeI40kbooZwEOxIsI5VEK3TL8liiNEcy5tv3F8QU5nynL7qMHOkvr27oq8LSNx2gud%2Fy7%2Fo0LOU0wAX8rSGYNlS0z0fKI8qpoVmd2ZBse8WkfasLu12rK77QCw%2BxBVodPn8aWR90aawlekbzxASpRiOu%2Be2DmRxWiTll057bLsKgDFvZ%2BH4YgtjWPt0t8dsxVbefTPNwiRnglwujzMh4QIr9HzD%2B0cTLj4da%2FwAOKN5cUFIhnxMM23r8AGOqUBzOhGbYliBOYhVgGWDvKwImHwTDpUfRqtnZg1bsS%2FiAtJyKG558Sy0br3%2FmgpIF5LNO%2FZX4eJQDPRuenlMyJzgJK9i5BKnFgSet%2FKwkEbd7yYvyK%2B%2F576u1kJ1M9ExAODenjofmtw0Nk5MzsuPVg7kJWvJdelEZuxI1BjtwDrorKO0fsdbVPNoyfS1R1WgmMspwKDPivnU2RV3Wc7mpqLhpWTZZD3&X-Amz-Signature=a00b471c45b03b3edc400d5205b8949c7d9c40dc73528f08b6356671bf0a3c44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHMTFEQI%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpuZ9HKUH9cVBf2KWZFPHUfMIR1zQbP2U9WQsXmCsYggIgVCuwHQ5lXpcKzdbLtcmna3DVHEY1Dl7ebbZxDZIcJOYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIYRnTn0hp75TgRXvSrcA7vdzU3Qix2uENcbrdI8%2FlmqpkESKPRymzcK8LZNqmmNWa%2B%2Fqz3wOFQaD29%2FlWYW02G4bXHROJkHC1y%2FUZls0B1wHBOWJyyk4pjq%2FTxsQ011xV2csNjvS%2FrazrrynI5GY6AZJcKoy2PrnNxEIkwGR13HgDjJ5N10JUMM0p3fQTp%2BzIQuybnBhOsaH%2FAls%2F%2BqMqJdel%2Biu2xhMMaKzTgpJBKY54wU2ItHg9i%2Bby%2BCfnTtiidw%2FgwP4AVXUfweb4BNIhG8Z6QkHxdeRPVG4msSmSFf82R%2BSm%2BDRlyQx9oTCP0IGz3seL0zA2pD8UvEC%2FKqCWXReINc9SSFJPKnPtdIfTmr1nribttbubGsbJmr9QB1bdDb89Xx2s%2Fgxjje5UlHmPBimHrjwmz93CqjgTaZALSybrSipdcvy8uReiRSmhmQEAngrtU0Jq3nubCfSDGspXJ1HsqJJ1J5Ut9RtHxMNBva6eqvsOfrGdgKv%2F69J6ZGn9CaUkTlgDbuhZ7SSWBwVSx1ylVCWjXClfx%2FiZujnFGwOj0oYgF0XNaz2nWWS1b3DrhpFAaOuudjGQx9ZUu1E7qKRTUBBQ0LUFFmBa6CoYY6nrPkBDgTtvqv51AC4QYXJbWKVzwlZMBHYgxPMMK3r8AGOqUB3E9GDImhysL7kw4UcHuEEDb44%2FUr1f%2F%2FNQ%2FciuQWjs7guU6WM6k1jF8JMO7KOwb5AUQQx1NCrH5DpC9AIcuE5MBFGoqgTTAAqDnQo%2FHfXswrq9NKMQ9l0GzXrOvgH6xPNn4NUNJgoavf9Zdz0y3C4%2BQUBEMhrNIu34ULfor0U1j3c0QTHcIVdSSxg4K0tMkyGvK00yJDWsDkY9QblE39eXApgoUb&X-Amz-Signature=cd26f5d3037313d0a401b66d1fbdab52fa3e9aba2a2ec1576413b7a74cb68626&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC7CEV3V%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeWwOGtMepFykoh3%2BOV068XAKRRFlPUsYgkbHrDqVBMgIgP%2FfIid2ZdsnxaHF3NhZTSRfVW4VbB6ju%2BWyMnSXIXiAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDC3L7hXiR%2BqQkCR5MCrcAwHwukXd2oNl%2Fn2PrJoww3hChykQMO5S8zTUk6cG8r2WKzYvlsk4iHuzHC%2FCWPw7oFhqAQQdCLPX3iBVQlJ2sbBiN5pn%2FeV5JLquM5FvJNsk6KAsshzozCvfrE8i4mnljfK6xa0OFXlzTdLMeLqzJSi8GdgSTqaIkB6p2vU28nyw9XWJ11wmlt1fdxlZqiIGRGLwFZu7ufwGWxvl2CtobeCefuDjs2xj7jRgwDvAqiR312tgi3zgKa6fyCQXQBkYBlPVzHrkk%2FIExgJF531Zoh%2BNLnF0r9MP%2FdDBvGXxfEdYe9jgYZri22fDDeiUUzicXNXxHSMebjSUNP2UpC09fu3WqzR3bzU1j3rf5%2BI90M9JtAlESCsYWI5gJLS%2FrjPWomY5Ybct5Q8GDrTTOqjGJAK6ya6n0DkaVv8gWVFjEeJ%2FWn7vh5h1Nv0YYq8KJUHjAQHXLYkKxoPuW0xEtm%2BT6ntPMFjwtmXl%2BOiqmeg7ujA4vatJvfBDbqHawWQwZMvhbQeM02cZchQql3XzTgt9nHk%2FYtXkwPFvZeEJ9PAyqdMnT%2BiRSYjM2WXjZbVXFZBv%2FOP4xdrbmxAG1cgBU1%2BvKmto2rFOesXiypx%2BKdE2BqiV%2FFXdkBk0ZfEioOMmMLS3r8AGOqUBI7O%2FQTA6ouwfP9%2BJDHj9kxoKaGO%2BqHRCyjV682yhUFcNvk5BRwELYf%2Bdgjbmf5T%2FHHrJ6WGBYF0wYPqL%2F4be4FwZ9soU%2Bt8hcyBuZ3UN0hvT7i0i4slT%2Fhf31Tlf2P52s5wA8mwvWBNsP1Ky4hroxUw6uLtlNkHJ1XoN%2BXTeOQBkbVq1TIuMyf72atXCMW0cm0QEQ50YCTMPf8XAOSJqKpw7BSo3&X-Amz-Signature=1486fb82db4e349268862987c7de944b779a3df9a7a84ac352492fe4c965ecf6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
