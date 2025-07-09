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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4NJ3WTU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEt%2FWjbiUYveXfGlctvoBt93Ofzte769rUzs2iAtHf%2FQIhALpzPBd6YwiKoBIsja9s3dQ8JlaEVkX%2BT0frLltsuZGEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr5pfDPanSYe%2BP%2FlUq3AP0F4kaOvxhAtPuYoksOLiKuK51r87OQxquMsMG5KVaHwKS2YU438Ck4uZgkGribrTEDfpHgXyaHVl%2BrArGkfX9nu5zYJTMf0weh2s%2Bz1yuFMO62szSpVr1OFdDPd7lk0S5NCO%2BX%2BZWpjNEYN2jD6S7YJtZeGm5iQhfuB6vp2xWlWhp1Ol0AtZo%2FIQMb%2FmBuWQsM0pohVkntWZgziFB7rVai51svmOz4PuS6FAQpq21gelOXxHGkl9grlstnSZglsd0r1ZNQwFfNCA7QN27mTfQpo18iIhR7r4hpMwvbA8tjYS8Joyl%2Bj0RM8me0V4HhkS7hHrnRqHKMF3yl47EYKRNZvqJhwjP5md%2BE7uL8WqE13%2Bv3cdIA1pqTG47K7l4BDjkBn7BAAeleJKIUs9O0ZpdIm7ui%2B%2BV6cZJfuYNd82WWty91UJlPRDX6kUyokLJwsfIUlMuJAGz2FdaSgQHpUBPTzpWI%2Bzk0OoZHaMIk4D%2F5if9vLv78hRJ8FtfRYIHt8HXvoJVSqqvwhHG1OYA98KSfMGwmHAHfaCKhy7m1EEQMPgTUoWn9SPz5Ynm11YBFe8Z%2FN9sUcdm9J2v3a%2BUu6poslXmKiXlSWt9LClNfOzaGqcIddcq6jxGISIXiDDIo7jDBjqkAbEQZBQUb2gmP5aXcBgL13BKM%2FizZyoB7xfEqcT9LEIsuj4x6H%2F4f19K72QtFaA0WGh4E78aZgz85fDJiqHR5C%2BNIoz0vBxNYuEIeB6T3PZAyhptbIOpvNLWvxrLMYZOZbV1a%2BnvATS4DMsHeyh1WY5hHTki99JvPG367Q3xuq0cyJiYOhPNBgbMnpa8mR%2FgyZvBnumGO3d%2B%2F9OH0amUvjlQxUVB&X-Amz-Signature=8f941d72bed418062ff3abbe571501b7cc117cd6c493b549770b150133b1c49d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4NJ3WTU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEt%2FWjbiUYveXfGlctvoBt93Ofzte769rUzs2iAtHf%2FQIhALpzPBd6YwiKoBIsja9s3dQ8JlaEVkX%2BT0frLltsuZGEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr5pfDPanSYe%2BP%2FlUq3AP0F4kaOvxhAtPuYoksOLiKuK51r87OQxquMsMG5KVaHwKS2YU438Ck4uZgkGribrTEDfpHgXyaHVl%2BrArGkfX9nu5zYJTMf0weh2s%2Bz1yuFMO62szSpVr1OFdDPd7lk0S5NCO%2BX%2BZWpjNEYN2jD6S7YJtZeGm5iQhfuB6vp2xWlWhp1Ol0AtZo%2FIQMb%2FmBuWQsM0pohVkntWZgziFB7rVai51svmOz4PuS6FAQpq21gelOXxHGkl9grlstnSZglsd0r1ZNQwFfNCA7QN27mTfQpo18iIhR7r4hpMwvbA8tjYS8Joyl%2Bj0RM8me0V4HhkS7hHrnRqHKMF3yl47EYKRNZvqJhwjP5md%2BE7uL8WqE13%2Bv3cdIA1pqTG47K7l4BDjkBn7BAAeleJKIUs9O0ZpdIm7ui%2B%2BV6cZJfuYNd82WWty91UJlPRDX6kUyokLJwsfIUlMuJAGz2FdaSgQHpUBPTzpWI%2Bzk0OoZHaMIk4D%2F5if9vLv78hRJ8FtfRYIHt8HXvoJVSqqvwhHG1OYA98KSfMGwmHAHfaCKhy7m1EEQMPgTUoWn9SPz5Ynm11YBFe8Z%2FN9sUcdm9J2v3a%2BUu6poslXmKiXlSWt9LClNfOzaGqcIddcq6jxGISIXiDDIo7jDBjqkAbEQZBQUb2gmP5aXcBgL13BKM%2FizZyoB7xfEqcT9LEIsuj4x6H%2F4f19K72QtFaA0WGh4E78aZgz85fDJiqHR5C%2BNIoz0vBxNYuEIeB6T3PZAyhptbIOpvNLWvxrLMYZOZbV1a%2BnvATS4DMsHeyh1WY5hHTki99JvPG367Q3xuq0cyJiYOhPNBgbMnpa8mR%2FgyZvBnumGO3d%2B%2F9OH0amUvjlQxUVB&X-Amz-Signature=e5c6ad45e0d81f057738d0e31e2e9e622799e46f67f22e79064a8de6c8572ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4NJ3WTU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEt%2FWjbiUYveXfGlctvoBt93Ofzte769rUzs2iAtHf%2FQIhALpzPBd6YwiKoBIsja9s3dQ8JlaEVkX%2BT0frLltsuZGEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr5pfDPanSYe%2BP%2FlUq3AP0F4kaOvxhAtPuYoksOLiKuK51r87OQxquMsMG5KVaHwKS2YU438Ck4uZgkGribrTEDfpHgXyaHVl%2BrArGkfX9nu5zYJTMf0weh2s%2Bz1yuFMO62szSpVr1OFdDPd7lk0S5NCO%2BX%2BZWpjNEYN2jD6S7YJtZeGm5iQhfuB6vp2xWlWhp1Ol0AtZo%2FIQMb%2FmBuWQsM0pohVkntWZgziFB7rVai51svmOz4PuS6FAQpq21gelOXxHGkl9grlstnSZglsd0r1ZNQwFfNCA7QN27mTfQpo18iIhR7r4hpMwvbA8tjYS8Joyl%2Bj0RM8me0V4HhkS7hHrnRqHKMF3yl47EYKRNZvqJhwjP5md%2BE7uL8WqE13%2Bv3cdIA1pqTG47K7l4BDjkBn7BAAeleJKIUs9O0ZpdIm7ui%2B%2BV6cZJfuYNd82WWty91UJlPRDX6kUyokLJwsfIUlMuJAGz2FdaSgQHpUBPTzpWI%2Bzk0OoZHaMIk4D%2F5if9vLv78hRJ8FtfRYIHt8HXvoJVSqqvwhHG1OYA98KSfMGwmHAHfaCKhy7m1EEQMPgTUoWn9SPz5Ynm11YBFe8Z%2FN9sUcdm9J2v3a%2BUu6poslXmKiXlSWt9LClNfOzaGqcIddcq6jxGISIXiDDIo7jDBjqkAbEQZBQUb2gmP5aXcBgL13BKM%2FizZyoB7xfEqcT9LEIsuj4x6H%2F4f19K72QtFaA0WGh4E78aZgz85fDJiqHR5C%2BNIoz0vBxNYuEIeB6T3PZAyhptbIOpvNLWvxrLMYZOZbV1a%2BnvATS4DMsHeyh1WY5hHTki99JvPG367Q3xuq0cyJiYOhPNBgbMnpa8mR%2FgyZvBnumGO3d%2B%2F9OH0amUvjlQxUVB&X-Amz-Signature=5d760c5bcc9ba96e9a074ff99096dda64a3c9178e988f95274b11423ff87a2f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOWRZNR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5O68X89syx8qRl%2F%2FetjT9vgj3WktajmQaedc2JRyrAgIgSpbH8HJAMZtPuzg4RZHTiUjz3juJA78BZsv4p2hkcMkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMkUxbapoImu0O5dCrcA2xfNYD2nJftLnXLoiC32Nl9yuAjLaIbqZzDZy9SNKSlDMIggcv7ca%2FEpCnkYlIIQ74rXzG3IrrLE7I3CTtX1n0Qsuto1bz8MET8oDddp%2B0DjkkjOb0b8U77l6gcP5kDbzT0fL4uShKalodq3QPKkV5h7H1lRRhaG%2B4kay0I5exfw%2B1UNTtWr5CK3mR8WUpaaKttYTi8m4xYLdKrwpqq2loGPGdEivVs%2Fl%2BHMgJLvYdUjybDk9iO%2FLA5SN9yGNYPFMaacqBXnMcGNuJBW9cavihyOYAuqel2HtdLtMGekC%2Ba12s%2FeTqI9IcEO66hmd7EmMWhgPzSv3tI2CqQgL75Rju2xgdVp8CueKJeVhmPCMtcDPVZmY6NBLOkEF34dVzRtyFqu56HWc0Z%2Bg03yHcwxcSElYbiBwwTAYoWAlJM%2FmWFQIxlcsR3nZMvx4L%2BOg294agD5QJQhfJFBoN%2BkAOMuPI%2FVfZcg%2FFtj04vuGsshK0mvavR%2FMcUSgGjT744raHr0Kisdf6SQrdW90pBBF8YJxAkOPQ8XBgl%2B1No%2BMM%2FaHbyf%2FokTOoTM%2Fx5h8%2B3rlPenvXlixCl6PyOnjegaOLI0Ls3F6E36udxb3M91RiJT5gOxTp3XVsRW6DAq%2F3lMNyiuMMGOqUBvXi6TZYtnBbNt5IuTzrmIA4lfdUOrREfIjxJm5xvAVAvvLu%2ByUbKugpqbp2xXEqdDoq8Yf5sS1m0Oq0%2FzxD6tsMpl6l3dbyX0K4dwtnb7TdaOIMzqFNU8zspbJG8lvX1PyPPKW9kR173KhlVPI1VY3h%2B9sKIX5xPLjbWhDI8nHx8yf8u3Lv1E9p56dI%2Foten7qIje7idAooTl87A0BBcin5KOuJk&X-Amz-Signature=82028f12dd6bac8acd6997b06255e255f02a9d42eb0ad91c812d8bc04597322d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKWNZAQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0%2BMaoOJFcwgwngOrl1dw1kOgzPHsmH%2Fvou1I%2BnBLasCIQChcRm3TLxu0eRgw0lYseYmonQ4BLadTv1ecwtt5psZaCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrujzQaB019LynM8eKtwDbG2Cbu1c9a43dV%2BVLP0zGrCDZd9hdPzHoo7XbpNsbXWiCUXGoEF6tTy754W90sNVTAo442O%2B6znyeMSuVgV8pbtSIlOc7KEuO%2BnN9Q%2B4HVzI08gakChoHhVQUqLi2CisBWWRdcTI8oXoO3vZ%2FnA9fme21W6C7FEDLCTRl7VUrNcPHnzZjEi2CDoIBDu53voIxFZg2fIqoK%2FrD8hv%2Fs0EJqn9qZdV9Zuw4B%2FQL7k8HiuEcEzK48nTFEguQwX11JXsO0N%2BPk0g%2FiRd4oEnz28IMAXRReP0CcptObrkWcOUkrwRQnb%2BgF4qugykUFyRh1ChQTZ5MTY4RT7ZS3NzskW3g8vA25z4wyqF%2BFHh5H6oIQNm32ZLugLRfTFtQg%2BYpzrBO1OaXkNvBS6T5qHJFtG3J%2Bg5T8YPhxsLMT8vBRj9%2B52H%2BIewP%2F7HjWrzqEmQpXf6HCr6jf%2BTexpC3Jnu4%2Fj%2B2D9gyBxbx0N8m7HWHrtbPEqKe6fnJ1UTWXJ6yBc%2B5ZiOhqR8TQXsc4Ppoaw%2FIcv6xOVbg4vk964SR9kfpEKawG%2FfObt7ppvrfZ3X%2Bd0N8RQIT8GIAsxE3Fmklf4DV37ELh5KnfM9LIvm7PForOsNv2KjsHtEdGOurenUP%2B8w3aS4wwY6pgGzl5jWH5nHU9EzElb1C2wPWq5wtHOyU3RmjS3BodZP0%2BvvNC2rxF2SbPpo4giIfI4mwduSQpK4Pzt9l7PstrJ3teUryX870%2BEc2uXbepQ2OYs%2BkRfxnHkYGpE0naRJWYp9yc7m%2F2ADpITvHWBVzwWjDmRRS0DgWkRs3acFF55MQorGDerDGyZxJ%2B%2B0HsspHyF8T415hHIUI3HgM5WP19lNKsm6wUW5&X-Amz-Signature=51b41d59d1520917a54e62769968aca2ae136e514064b3387ddd71df145c28aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4NJ3WTU%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEt%2FWjbiUYveXfGlctvoBt93Ofzte769rUzs2iAtHf%2FQIhALpzPBd6YwiKoBIsja9s3dQ8JlaEVkX%2BT0frLltsuZGEKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyr5pfDPanSYe%2BP%2FlUq3AP0F4kaOvxhAtPuYoksOLiKuK51r87OQxquMsMG5KVaHwKS2YU438Ck4uZgkGribrTEDfpHgXyaHVl%2BrArGkfX9nu5zYJTMf0weh2s%2Bz1yuFMO62szSpVr1OFdDPd7lk0S5NCO%2BX%2BZWpjNEYN2jD6S7YJtZeGm5iQhfuB6vp2xWlWhp1Ol0AtZo%2FIQMb%2FmBuWQsM0pohVkntWZgziFB7rVai51svmOz4PuS6FAQpq21gelOXxHGkl9grlstnSZglsd0r1ZNQwFfNCA7QN27mTfQpo18iIhR7r4hpMwvbA8tjYS8Joyl%2Bj0RM8me0V4HhkS7hHrnRqHKMF3yl47EYKRNZvqJhwjP5md%2BE7uL8WqE13%2Bv3cdIA1pqTG47K7l4BDjkBn7BAAeleJKIUs9O0ZpdIm7ui%2B%2BV6cZJfuYNd82WWty91UJlPRDX6kUyokLJwsfIUlMuJAGz2FdaSgQHpUBPTzpWI%2Bzk0OoZHaMIk4D%2F5if9vLv78hRJ8FtfRYIHt8HXvoJVSqqvwhHG1OYA98KSfMGwmHAHfaCKhy7m1EEQMPgTUoWn9SPz5Ynm11YBFe8Z%2FN9sUcdm9J2v3a%2BUu6poslXmKiXlSWt9LClNfOzaGqcIddcq6jxGISIXiDDIo7jDBjqkAbEQZBQUb2gmP5aXcBgL13BKM%2FizZyoB7xfEqcT9LEIsuj4x6H%2F4f19K72QtFaA0WGh4E78aZgz85fDJiqHR5C%2BNIoz0vBxNYuEIeB6T3PZAyhptbIOpvNLWvxrLMYZOZbV1a%2BnvATS4DMsHeyh1WY5hHTki99JvPG367Q3xuq0cyJiYOhPNBgbMnpa8mR%2FgyZvBnumGO3d%2B%2F9OH0amUvjlQxUVB&X-Amz-Signature=f467d3ad98200fb62389dd484dc557202e351ce23190c3ed9f630e7b15052747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
