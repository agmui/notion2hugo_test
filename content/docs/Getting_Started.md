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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJ4WO5D%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhBDmH97GAc0Ykl4V7eSxcVJlNbgTZQPDpEt0wKRRmAiALagZFPtIjAodFMCV7achoYPh%2FZbEKAtmbGpUMY8dMWyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM89G%2FqrwvmiDwzUGiKtwDp57k1slCiaQ6%2FMuG%2Be0j8bXyXp2L6GkBGPw44XU5scu6okLfer8%2FUU0r6qMSKm6okCG331nnPueBcSkNpjMjqBaJn6Yru922VxmMBZ1Q1PYZPUt%2BHvzuwj4f9b3iYTvO16AwGoSC3mBwpLCRImLxwsVl1myu4OoMUCLIbqTtX0TzvQq18DY7%2FJZeofirQ1%2BMmeHWfz%2FJVki2eHAQ6TiOiU5URYFqFuTYFc30rfbklpHWOdHkyk9WfXp%2BzNHRUMKVv%2BkX6A5zMIUyoNzg55WOgmxlm9LSW5uAIB2%2BMfdj3hl6uDWSW%2FAYx4z8sDVz3uDobnMDmBb0omW2Dmk7%2B1VKWlJyYkdSz59MSJttK346oQWdHPVvyxk1s9837iALh6pp8suZWDXFnMpeZ3h4RnMmaelDTXQNg2azeQyvbpASm0Q59OIJBGDV8Da%2FG1dremlVdGmD8YAXrJlnADsiLzYEp65dcrk9O%2F0CkV8OzZJwLPLcIZMJW3sSLW%2BBRLaN0qZh%2FEE9XrM%2FTIlb4euDMlMhy1fsNei%2FzSP4cbpDvoG0gooIAr45Xj7%2FyA1539tL0YM0JNJeeuYVv%2F3xSfSNd66U44vEAY9kiDVAUKP267jFM1CfIXrsNtRxcQW18Zkw2ri10wY6pgHaQsSRRXS%2FeXoFQR16dn7RoheHkRrzCO4sJiR%2BUTy7kkzP3MDa7KqaghuJW%2FRtHf2%2BHvGw54NnBvkCxrr0c5WHfRdhI0jeWbWmO8lY84GA7BgtdEl5OlRfZOuEw2JBXYGBQ2kMMYUHo25zPdit%2F4MJ6VxN%2BPI4qHPRJ6S2%2F0rY38QGCcBdwf0W5IMKCHYUFdNX7U4t9aZgKJ4OtzAR%2Fp7kZAB8mFj0&X-Amz-Signature=3ba7699e23c2e312a82adb1e9c10c20dbab05f135d1881b5d8eb4323ece6fe56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJ4WO5D%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhBDmH97GAc0Ykl4V7eSxcVJlNbgTZQPDpEt0wKRRmAiALagZFPtIjAodFMCV7achoYPh%2FZbEKAtmbGpUMY8dMWyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM89G%2FqrwvmiDwzUGiKtwDp57k1slCiaQ6%2FMuG%2Be0j8bXyXp2L6GkBGPw44XU5scu6okLfer8%2FUU0r6qMSKm6okCG331nnPueBcSkNpjMjqBaJn6Yru922VxmMBZ1Q1PYZPUt%2BHvzuwj4f9b3iYTvO16AwGoSC3mBwpLCRImLxwsVl1myu4OoMUCLIbqTtX0TzvQq18DY7%2FJZeofirQ1%2BMmeHWfz%2FJVki2eHAQ6TiOiU5URYFqFuTYFc30rfbklpHWOdHkyk9WfXp%2BzNHRUMKVv%2BkX6A5zMIUyoNzg55WOgmxlm9LSW5uAIB2%2BMfdj3hl6uDWSW%2FAYx4z8sDVz3uDobnMDmBb0omW2Dmk7%2B1VKWlJyYkdSz59MSJttK346oQWdHPVvyxk1s9837iALh6pp8suZWDXFnMpeZ3h4RnMmaelDTXQNg2azeQyvbpASm0Q59OIJBGDV8Da%2FG1dremlVdGmD8YAXrJlnADsiLzYEp65dcrk9O%2F0CkV8OzZJwLPLcIZMJW3sSLW%2BBRLaN0qZh%2FEE9XrM%2FTIlb4euDMlMhy1fsNei%2FzSP4cbpDvoG0gooIAr45Xj7%2FyA1539tL0YM0JNJeeuYVv%2F3xSfSNd66U44vEAY9kiDVAUKP267jFM1CfIXrsNtRxcQW18Zkw2ri10wY6pgHaQsSRRXS%2FeXoFQR16dn7RoheHkRrzCO4sJiR%2BUTy7kkzP3MDa7KqaghuJW%2FRtHf2%2BHvGw54NnBvkCxrr0c5WHfRdhI0jeWbWmO8lY84GA7BgtdEl5OlRfZOuEw2JBXYGBQ2kMMYUHo25zPdit%2F4MJ6VxN%2BPI4qHPRJ6S2%2F0rY38QGCcBdwf0W5IMKCHYUFdNX7U4t9aZgKJ4OtzAR%2Fp7kZAB8mFj0&X-Amz-Signature=ccc9cd60d1c92eb2cb7d00aef16219289c12b806ff8b76a204ef3836826979f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJ4WO5D%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhBDmH97GAc0Ykl4V7eSxcVJlNbgTZQPDpEt0wKRRmAiALagZFPtIjAodFMCV7achoYPh%2FZbEKAtmbGpUMY8dMWyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM89G%2FqrwvmiDwzUGiKtwDp57k1slCiaQ6%2FMuG%2Be0j8bXyXp2L6GkBGPw44XU5scu6okLfer8%2FUU0r6qMSKm6okCG331nnPueBcSkNpjMjqBaJn6Yru922VxmMBZ1Q1PYZPUt%2BHvzuwj4f9b3iYTvO16AwGoSC3mBwpLCRImLxwsVl1myu4OoMUCLIbqTtX0TzvQq18DY7%2FJZeofirQ1%2BMmeHWfz%2FJVki2eHAQ6TiOiU5URYFqFuTYFc30rfbklpHWOdHkyk9WfXp%2BzNHRUMKVv%2BkX6A5zMIUyoNzg55WOgmxlm9LSW5uAIB2%2BMfdj3hl6uDWSW%2FAYx4z8sDVz3uDobnMDmBb0omW2Dmk7%2B1VKWlJyYkdSz59MSJttK346oQWdHPVvyxk1s9837iALh6pp8suZWDXFnMpeZ3h4RnMmaelDTXQNg2azeQyvbpASm0Q59OIJBGDV8Da%2FG1dremlVdGmD8YAXrJlnADsiLzYEp65dcrk9O%2F0CkV8OzZJwLPLcIZMJW3sSLW%2BBRLaN0qZh%2FEE9XrM%2FTIlb4euDMlMhy1fsNei%2FzSP4cbpDvoG0gooIAr45Xj7%2FyA1539tL0YM0JNJeeuYVv%2F3xSfSNd66U44vEAY9kiDVAUKP267jFM1CfIXrsNtRxcQW18Zkw2ri10wY6pgHaQsSRRXS%2FeXoFQR16dn7RoheHkRrzCO4sJiR%2BUTy7kkzP3MDa7KqaghuJW%2FRtHf2%2BHvGw54NnBvkCxrr0c5WHfRdhI0jeWbWmO8lY84GA7BgtdEl5OlRfZOuEw2JBXYGBQ2kMMYUHo25zPdit%2F4MJ6VxN%2BPI4qHPRJ6S2%2F0rY38QGCcBdwf0W5IMKCHYUFdNX7U4t9aZgKJ4OtzAR%2Fp7kZAB8mFj0&X-Amz-Signature=f21c904598e056566209b563bca998a2b5c94b95659f7da0eabe99a24b19400d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3PBZJ4%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyvF3%2B1DNZCFtU6fzUwTz4YsOj%2FfEC674RthDN27UZKgIgaT46pHjLoRr2zT3NmbTiFAjv7FHautwtmhSzk8tuFGUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDylW8VrBvP5nb55fCrcA%2F4APjZnd6d0VM2%2BPk1BWGgX%2BcErunGQAKHtQR%2F9dTMpnhbb2uBbXHIRWnTn1KqIYLLsc6EaT4yMZeLk8s%2FZZoDf1%2FkPnaV8Lj%2Br%2FHiAePQI%2BLGhzLnaWDmt0KwpdyFA9Ew9oZkt6aLeHCcewQJdlTELAdEs599%2FnG2QewxIC6kcrA3EJvl7OgetaGdqOdmHM2WqCn2nVwpnLOMisziVIbed2DWsGCNs8InFLcRQ9ZmP5HbFNzMNMsHs%2BeUK0ZuiQj7da5w4KDHHhNgjx04pTBh5MwLJFyjWS%2Fk7aVgdUFwyxxLVDZIE5XrPdAu%2FCP70L8hL7he1bhTYFcx8evT73pbzeNr4I%2BvuuHJvsPywOvVaCoJUxqnPMXufIS8sf4ywqRfm5Tkm5pQSw5LhiZXYStwMUVd7S%2FVPjlrE49IeP9RR1aTU1HNSQNyM1SHXFtB41ImARrnJRuc%2FEiVmKhU7iMYQ4BJqdfuh3Uxu34Jz%2BT3ZyKSpqqP8pK9zG13IrZkYBadLkTbYuZfofCb8YJdPvouBggR7GON%2Fmy382BpFutyCJi2xTRFSRDkJl18qKDBYesjax6OQmjNrbOMoSDUIMYT9ITNXolJzdxqvlHsyHZPlb84syA8zD%2B27mwVFMJm4tdMGOqUBmBqg9DgAHx2BUZwidFqCrrrFZavnQbFCNMuJIAlU%2BubXyeHxOIk9%2Bf1J55oIjn%2B0qcr77MrrZ6XvKCJFXMN%2B7kQORkRVLQivAHFLP2YI2sSsABdz4rLctHBNj3rODtDTB8fSTJu2nOVsNcDZPK14VrI8p9bXdEYhtWzIe46elnnVvug6FHROfbJ1DI0%2FjsQMEPMvUTFQyz5U0K9ZCyO1D4ZMfMPh&X-Amz-Signature=d1423514cb231de888a680e7de8a284597fa7e728060e6d8616c46894f5bb648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7HU6C7G%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDqGgovXqPXi5q01ppM1psB%2BMuP3sYdlwsbhrsjyVCUQIgRjFAz8S%2BQJ7ifl0%2BEOONgx%2B49JK4yD87Js940%2BQcm4kqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVAcVhCLBYxjSS%2BLCrcAzQL%2FjMV%2F%2BbjclmUsUB3FtB042ptPVjVEqUWi8gwart6jZEnTz7KzEwai2Qatc51LfMJcd0n3XwqjwP1qmKiwp4Up8PqcU7EIt5N4H7%2Fb%2FFUOTVh8QlF6Yc5mJJ7hySgXqUc5zA34f5w0wgxlNjBtsd8M0PjORuETI1eURGDmN6VP%2BoQQPSEFxJqneDReGNmKNIsg6cIHl5Odiz6fnSGxNiTUxInLYjKEZjEIT5eDd%2Bdoa5N1BjN5MCmKI0zn78xyyQTTX%2FqhJmS1XSpbj3IizK1A26FxXCYXXUFI9SsQ8jNDoqm3i7EjzikK5MOV4u6KuB4RKzLEmbbZEkjlEN7czfJP8oyYMWzCPsRJxYgZjEBRM7tqvYyf4IR55aGcTKom1IWvK%2BWWLH7aJGUBMyCdS4Afh5DgzgysmBbuyIjRcvMB4WoleeOHW2qUNcl50PGW%2FHnKgRadCc9UbaLl%2FiVjI%2F5XYpAL%2FukYTTWr1kzeOiJ9NrB6dMI2IRlNuY%2FoSkiucSzFwg9y8PQOmL3g98TuH%2B3XxGst4gQ3A6ppHhH7ueQCCnY7lZlV8DF77ai3PmuEE9%2FqYonGvhDtC3n80vADvHLofCUxRe6KVo7LgWq3EyaOadND0zXc4dOtVJCMKS5tdMGOqUBdyR6yVxWko15FflycOoDskC2QSHewCv9IqrxDJhaDyK1ldJ1NxmMFp2q%2BpZ16vibtBUQE7f0MZezm3wy471Xy7Lq7CvBB63tnEBD1eZPNHcmL9KVOn1X3P9TC%2FZxOa2VSCMH%2BBS2B1otmnHPBJ5acs26zkavlsQVBv6p6XEQmz4hCt20Sbot3c27xwpf2ZylzGdNdJ0CycRmWH33yotuWvwpSSga&X-Amz-Signature=b4a282bcbfb5e445212ac5ee7a23e41aa57dc0839797c61c6e664c9e1e059a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJ4WO5D%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZhBDmH97GAc0Ykl4V7eSxcVJlNbgTZQPDpEt0wKRRmAiALagZFPtIjAodFMCV7achoYPh%2FZbEKAtmbGpUMY8dMWyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM89G%2FqrwvmiDwzUGiKtwDp57k1slCiaQ6%2FMuG%2Be0j8bXyXp2L6GkBGPw44XU5scu6okLfer8%2FUU0r6qMSKm6okCG331nnPueBcSkNpjMjqBaJn6Yru922VxmMBZ1Q1PYZPUt%2BHvzuwj4f9b3iYTvO16AwGoSC3mBwpLCRImLxwsVl1myu4OoMUCLIbqTtX0TzvQq18DY7%2FJZeofirQ1%2BMmeHWfz%2FJVki2eHAQ6TiOiU5URYFqFuTYFc30rfbklpHWOdHkyk9WfXp%2BzNHRUMKVv%2BkX6A5zMIUyoNzg55WOgmxlm9LSW5uAIB2%2BMfdj3hl6uDWSW%2FAYx4z8sDVz3uDobnMDmBb0omW2Dmk7%2B1VKWlJyYkdSz59MSJttK346oQWdHPVvyxk1s9837iALh6pp8suZWDXFnMpeZ3h4RnMmaelDTXQNg2azeQyvbpASm0Q59OIJBGDV8Da%2FG1dremlVdGmD8YAXrJlnADsiLzYEp65dcrk9O%2F0CkV8OzZJwLPLcIZMJW3sSLW%2BBRLaN0qZh%2FEE9XrM%2FTIlb4euDMlMhy1fsNei%2FzSP4cbpDvoG0gooIAr45Xj7%2FyA1539tL0YM0JNJeeuYVv%2F3xSfSNd66U44vEAY9kiDVAUKP267jFM1CfIXrsNtRxcQW18Zkw2ri10wY6pgHaQsSRRXS%2FeXoFQR16dn7RoheHkRrzCO4sJiR%2BUTy7kkzP3MDa7KqaghuJW%2FRtHf2%2BHvGw54NnBvkCxrr0c5WHfRdhI0jeWbWmO8lY84GA7BgtdEl5OlRfZOuEw2JBXYGBQ2kMMYUHo25zPdit%2F4MJ6VxN%2BPI4qHPRJ6S2%2F0rY38QGCcBdwf0W5IMKCHYUFdNX7U4t9aZgKJ4OtzAR%2Fp7kZAB8mFj0&X-Amz-Signature=d2d070b41b68ed714bc3ea00c7e8e1e828b5c6341498b489929fa2877df6618a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
