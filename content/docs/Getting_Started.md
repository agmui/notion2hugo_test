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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMZG7CG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAyApjX4It4F19vNPGMuATbcYAf0RTJaO6m%2B6zV59MirAiEAn0OLqKXwXmqM8tLNcaVgIa8F7UgB%2BTTUCwIZZw%2FMa6Aq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEWjKye36SIBXGcM0SrcA1w6nkpOHgXMzdmN6z8JmjPkfH%2FUb6%2BSIpidjlzfZhVKcFubMluIvXTbv0GAvVy%2BgqWOUjJy3o%2B4H9WPCVCi6fX8VzhHm8FZZFB7R0qB3HkX9EuQrz%2FD3LA1uEVqE27oxHtA6x5bUsZRTNzy5BQaDbUuDEQHRH2FQknz3eZa2yFLLbndKAIYdE7n9I88jPtCZwjdzFrb9wd%2BKCz63qEpEWk%2FzdwuCzfDXVs7jBTMX9Zx6Ufne%2BXQrupfS0bmuYYVWj9dai9yi4H6NSYKyj41CWALQEtcKL%2Fx0UFBIfQA3%2F4LRpWs371pGSCjrdPqC7Doo26W7QF4zAN2U%2FWASS76Dpf81mUCzHYs4Gtfd2%2FZ1UfzvPne4z1rNBP%2BLVuhZOSaDiBliWn6mTWh9iemlq6XxlISAqsb3J3digT8j9FuFLALKIlJfibVZkcl8JyDMUYJ16EoJak0moBF4feLzA2anSyZBk2eQ2XqxOGKm434Va1dVPWRSPcuMCa0FEVdRGrNDkhMkiupLi3LvRxUUZiId3ADB2nweI7aUncdfvWv0MTd3wVeF7CanCbCMM0BeFEXHgMYMJYQhukFH7dJ2MIwS3DhoWQAeeUiWbT3i1LYgrUhit5fwrP%2Fh1tYCVoZMMflhMIGOqUBUWx1nRkdIzzFQ7zWIYajAWgF3y4FkoKImxR4z6lgZW4ZPoR6R6ZZAcJacf4a5yAfDwP06q8iWcUPf3AjGKkucVw3Xep8EJWpTtsRFWUbPOvFcy1w5H5bJOzZzQF2ALJuNOLZU%2FkUIJus9W6j1dWrjvV%2B%2Ftt0YvLaa2LUCzCZFAIGveHzYvvqZ8snUzSCSOuD5eF52MW3oq6LT6XEZjWnpeAFPW9W&X-Amz-Signature=5b20bbf6b8de3cc1686e2c4c303181794fd02a4ae9159bd16cd87f501f10da1a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMZG7CG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAyApjX4It4F19vNPGMuATbcYAf0RTJaO6m%2B6zV59MirAiEAn0OLqKXwXmqM8tLNcaVgIa8F7UgB%2BTTUCwIZZw%2FMa6Aq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEWjKye36SIBXGcM0SrcA1w6nkpOHgXMzdmN6z8JmjPkfH%2FUb6%2BSIpidjlzfZhVKcFubMluIvXTbv0GAvVy%2BgqWOUjJy3o%2B4H9WPCVCi6fX8VzhHm8FZZFB7R0qB3HkX9EuQrz%2FD3LA1uEVqE27oxHtA6x5bUsZRTNzy5BQaDbUuDEQHRH2FQknz3eZa2yFLLbndKAIYdE7n9I88jPtCZwjdzFrb9wd%2BKCz63qEpEWk%2FzdwuCzfDXVs7jBTMX9Zx6Ufne%2BXQrupfS0bmuYYVWj9dai9yi4H6NSYKyj41CWALQEtcKL%2Fx0UFBIfQA3%2F4LRpWs371pGSCjrdPqC7Doo26W7QF4zAN2U%2FWASS76Dpf81mUCzHYs4Gtfd2%2FZ1UfzvPne4z1rNBP%2BLVuhZOSaDiBliWn6mTWh9iemlq6XxlISAqsb3J3digT8j9FuFLALKIlJfibVZkcl8JyDMUYJ16EoJak0moBF4feLzA2anSyZBk2eQ2XqxOGKm434Va1dVPWRSPcuMCa0FEVdRGrNDkhMkiupLi3LvRxUUZiId3ADB2nweI7aUncdfvWv0MTd3wVeF7CanCbCMM0BeFEXHgMYMJYQhukFH7dJ2MIwS3DhoWQAeeUiWbT3i1LYgrUhit5fwrP%2Fh1tYCVoZMMflhMIGOqUBUWx1nRkdIzzFQ7zWIYajAWgF3y4FkoKImxR4z6lgZW4ZPoR6R6ZZAcJacf4a5yAfDwP06q8iWcUPf3AjGKkucVw3Xep8EJWpTtsRFWUbPOvFcy1w5H5bJOzZzQF2ALJuNOLZU%2FkUIJus9W6j1dWrjvV%2B%2Ftt0YvLaa2LUCzCZFAIGveHzYvvqZ8snUzSCSOuD5eF52MW3oq6LT6XEZjWnpeAFPW9W&X-Amz-Signature=a42893ebf9065cc8617ebdc5055af7aa3f9ce7fb9fbd3684fa504059a554dd9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMZG7CG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAyApjX4It4F19vNPGMuATbcYAf0RTJaO6m%2B6zV59MirAiEAn0OLqKXwXmqM8tLNcaVgIa8F7UgB%2BTTUCwIZZw%2FMa6Aq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEWjKye36SIBXGcM0SrcA1w6nkpOHgXMzdmN6z8JmjPkfH%2FUb6%2BSIpidjlzfZhVKcFubMluIvXTbv0GAvVy%2BgqWOUjJy3o%2B4H9WPCVCi6fX8VzhHm8FZZFB7R0qB3HkX9EuQrz%2FD3LA1uEVqE27oxHtA6x5bUsZRTNzy5BQaDbUuDEQHRH2FQknz3eZa2yFLLbndKAIYdE7n9I88jPtCZwjdzFrb9wd%2BKCz63qEpEWk%2FzdwuCzfDXVs7jBTMX9Zx6Ufne%2BXQrupfS0bmuYYVWj9dai9yi4H6NSYKyj41CWALQEtcKL%2Fx0UFBIfQA3%2F4LRpWs371pGSCjrdPqC7Doo26W7QF4zAN2U%2FWASS76Dpf81mUCzHYs4Gtfd2%2FZ1UfzvPne4z1rNBP%2BLVuhZOSaDiBliWn6mTWh9iemlq6XxlISAqsb3J3digT8j9FuFLALKIlJfibVZkcl8JyDMUYJ16EoJak0moBF4feLzA2anSyZBk2eQ2XqxOGKm434Va1dVPWRSPcuMCa0FEVdRGrNDkhMkiupLi3LvRxUUZiId3ADB2nweI7aUncdfvWv0MTd3wVeF7CanCbCMM0BeFEXHgMYMJYQhukFH7dJ2MIwS3DhoWQAeeUiWbT3i1LYgrUhit5fwrP%2Fh1tYCVoZMMflhMIGOqUBUWx1nRkdIzzFQ7zWIYajAWgF3y4FkoKImxR4z6lgZW4ZPoR6R6ZZAcJacf4a5yAfDwP06q8iWcUPf3AjGKkucVw3Xep8EJWpTtsRFWUbPOvFcy1w5H5bJOzZzQF2ALJuNOLZU%2FkUIJus9W6j1dWrjvV%2B%2Ftt0YvLaa2LUCzCZFAIGveHzYvvqZ8snUzSCSOuD5eF52MW3oq6LT6XEZjWnpeAFPW9W&X-Amz-Signature=cd4cbdced7d6f7ba19870d3ae1a12bb1f30d938bb904aacc810a2199d6a7c805&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623RGWDU2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDmzeRc58gZT%2BE8GqMV%2FlLbkmYZvz8BUxN4Cso2BvRV9AiByGGkBCoH6smBo%2B3o7PqBMCbVyTw%2FXQAgqpDUFgLAVGSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMzAn%2F8BVBpOHLPD8eKtwDOh1ot3xQRh8uUg3yT4%2Bs%2F%2F4GU%2FWCehkFWBDWfeShhDE%2BBl61pL52CKySpxKttH6rTwBKQznZ2c2b0mOInOG42K7m1pximeBrbp8jKj1ktgQjVrjkF0gAHJr54uvVggPIWsbAoS7ib7KJH6gNhr4HkXVRE1UDoGyLA6SI27JRQfJ1SGzI%2B1MrAkSfG8NXnGSoxaZPilr9z%2B%2FSfn55rDh78YhH10shoBODrghMgWMAHBwPeUknZK3tBXQCWZtNRmB%2FeGIRBllGsmf4XT2CLPj2n1uT9iJzvdLhn9l5XjgsBa2dHHXFqvVRlfDyMyEFxUvBzTyyU7dU4SAIP%2Fc%2F4jXkfuNxI5lqsln8fZN%2BVzmxcby8rsfBoAnNSCrLwO%2F1SQizqfEmF9RGYCPJU0BZAYlQpKaqofQFmOv1kJaVloGd0V81K5sEbS3XbyhsvCdLbhTHk421APgAqm%2B%2FT7wF2VpoVf963ysHd2j7evV6eyCaC8WENq35qskueSX3l%2FYXUNcNcKzxENS0JFOLFScjnayqPYrwMStaetGigWH89CuEFNUhEK3o7x1YqBITsldw%2F9n8VhUTBpQi2z6Tq1J3QjZxosQJG%2FiQQGzqu%2BM364uFJoH5TmPe%2BeQ3BqrP0ngwgOWEwgY6pgHF8eSmtY8%2Boy%2Bkw%2BYelRKRz2yD2nJxgZXAf5hxsof0cQR1IsCzreRWz9byKSS4NWKIBkyvLICUPYc10iE2IebAec%2FFsBbefprhDKysdysH7gBJqAq3Lwsbw16WhM3kht9lCN0AKDiXzCbnUKJhpsCV2UXGf77k%2FX2geTyrVOD3J8tqWz1ICH8ZQ6vKILlOGfbZ2qdgA0XUjlcjaBOyqVtUHVCwIUA9&X-Amz-Signature=2bab9b1814ba3a045374fa25fd83fc78e15ac3d3c3257fbf21d095a207ccf5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YSF4WV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIF05zGX%2FS47prVuyENpCStq4w2FI7gbn9FCw98C72xRCAiBgP5I6p8vgdsclDNQnJGCgMa%2Bn%2BCy%2F5gtDlOZZBknjeir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM56qCOCpPu6Rqo11uKtwDRIcI79PwegmH7qW9wmRgUdhPb13uRbjmuKCVHxdByebvVz92YS9W%2BboWszZVC1ECxkeTQzG56wUTkUbdxhPbn1eRLD6EF%2B62NPvHJqP74ksaxwU2QQ8C%2FujQcmPjK5tWcPOxQtdkAMJErGSYK3LVYFbMS%2FzopqixFC9vJdcanOsQZ939vUGTj05ghw3wlnBcXvEyEqONI7uAeUXR6%2FM%2Fs9EhJMJzLHPWYQgDRQZlKHaksAFovJVdq8BNnH43Jmu%2BUflCdZ%2BrJlOAPg7q5vqu8zSTC7izkG%2B6s5sYcg3JS3s5x3g3BsON2mL0hzoBhOpU2m1qCwZNg2SLTK5WoCxgxrXoEsDJLwexmY8sn3N9lEzwsywEEh8AJsUe1MOb%2F0jMA%2BKB8Bkw0d35o9aP5tH7F1t0VIeIywslsfpgbq1Uq6ay0vZq2jWJZuqg51F5eqkYTgGvaWAxQB8unnWad%2B98iHNoGWJYvfwOJ3XGD7qSgQxX%2BWQ5F6Drr%2Bx73hs0yWRHQpiTrXFf33CTte1mhLEd1UNMauTN4MtcZmrZYWNj709XWrrC1pgwp1JLEZmLyakhjtL6uZKja75yIQv7vm83z4npzHoofo9Lc13PsFn%2FeHsc6V8KhnuX2YZ1yhows%2BWEwgY6pgGYFlv2y7LAdK8ULRt8Dm3lGsHW7ujunoi7UsvEm%2B2ce8O21aiKAoFpLxllyWbSGXVxHxvCoib3UMP7FogksIlDItiZsljES9t7uD%2B3EWzwu0tNjMRRp9PSsqSRkUemXJUlhIJcNoj0ruHW9ZZPElfkrfEdTCvAqco0TCgjXxnfBX4hYbPGlgCoozNuOrSRKoHX5vzjbTOuvAUjYBSetOnPFORDrOZa&X-Amz-Signature=a7c90cb9dd193f9db3451b6b6c8d769e98aa79d9802e2cc712bf357569162759&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMZG7CG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAyApjX4It4F19vNPGMuATbcYAf0RTJaO6m%2B6zV59MirAiEAn0OLqKXwXmqM8tLNcaVgIa8F7UgB%2BTTUCwIZZw%2FMa6Aq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEWjKye36SIBXGcM0SrcA1w6nkpOHgXMzdmN6z8JmjPkfH%2FUb6%2BSIpidjlzfZhVKcFubMluIvXTbv0GAvVy%2BgqWOUjJy3o%2B4H9WPCVCi6fX8VzhHm8FZZFB7R0qB3HkX9EuQrz%2FD3LA1uEVqE27oxHtA6x5bUsZRTNzy5BQaDbUuDEQHRH2FQknz3eZa2yFLLbndKAIYdE7n9I88jPtCZwjdzFrb9wd%2BKCz63qEpEWk%2FzdwuCzfDXVs7jBTMX9Zx6Ufne%2BXQrupfS0bmuYYVWj9dai9yi4H6NSYKyj41CWALQEtcKL%2Fx0UFBIfQA3%2F4LRpWs371pGSCjrdPqC7Doo26W7QF4zAN2U%2FWASS76Dpf81mUCzHYs4Gtfd2%2FZ1UfzvPne4z1rNBP%2BLVuhZOSaDiBliWn6mTWh9iemlq6XxlISAqsb3J3digT8j9FuFLALKIlJfibVZkcl8JyDMUYJ16EoJak0moBF4feLzA2anSyZBk2eQ2XqxOGKm434Va1dVPWRSPcuMCa0FEVdRGrNDkhMkiupLi3LvRxUUZiId3ADB2nweI7aUncdfvWv0MTd3wVeF7CanCbCMM0BeFEXHgMYMJYQhukFH7dJ2MIwS3DhoWQAeeUiWbT3i1LYgrUhit5fwrP%2Fh1tYCVoZMMflhMIGOqUBUWx1nRkdIzzFQ7zWIYajAWgF3y4FkoKImxR4z6lgZW4ZPoR6R6ZZAcJacf4a5yAfDwP06q8iWcUPf3AjGKkucVw3Xep8EJWpTtsRFWUbPOvFcy1w5H5bJOzZzQF2ALJuNOLZU%2FkUIJus9W6j1dWrjvV%2B%2Ftt0YvLaa2LUCzCZFAIGveHzYvvqZ8snUzSCSOuD5eF52MW3oq6LT6XEZjWnpeAFPW9W&X-Amz-Signature=faf3c25ddf812376eaf14f0ef310463e36af75ce6e9ea59d3895faf5e6d0b828&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
