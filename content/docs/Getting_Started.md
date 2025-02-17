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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJGMIUJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCwtx7JEeoY2oeH1mwFAi0%2FIDHtx76S7e1ToW4auddFnQIhAKFhFIwDEDKs9PdHr9mASoFSHMtVNFMp9ox3heGN0k46Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwyBEYU%2BcnpbmmHSc8q3ANq3ecYne3MeDorwKzhHZghb10h0d58l2yvCZlwBKNSKxllOj5mTFV%2BZR1maQqduoeyEa9ZBpWWhjbqKgq1TFyX53%2Fv7RrkAMpjWeDpWOvzl1zXiFtmYm30xbUXqKLf44M%2FooDLYrHhpoucykzquI9acGZOfu6KuGjauuwY%2BXkBnHK5RkdXDnFq%2FMnoVU9g9GLfhJrAYALEl%2FPhLoIgmVwLuvNxY8w%2FqgNVFsrOQ7knvxYwCbD6tthOt5yPTIci27TFqrWRDn%2FRMJoZKcZ4pOVvrHqLaw2JQkPcA1ftusHQBVoqTg9Ei0IKE9wtWd47MU7u%2BsJ%2Fe079y1%2Bu7M5YhY2WWsBniLc6wnEXH7EoPF%2BL5hIG2EAylRxKS3oyUOU0pYxoDU%2FgYYCh0UII3ZjA%2FfX7cYhR%2BBSwHrm9RqNvfz18IVwDlWsBPZrIaIQmLvyc1XXwbgJDySEbidazCCf8B16XBGVV%2F5N6C228uAa1%2FPwT9%2BJg3KaFoVbOeF5zm%2BX8AA3e%2Fgby9m1P1lVwhR%2BCLAwq4EEGDlTBVjBcKQATpHPRFff5cSYHFzkGRcjQYPCauUwII9RKQiikhiQAIuENCXYyo8SEwjIXbtVRpXHQqWiC157kLRtre0WWVxDRvjC36s69BjqkAWffdA1S0x6hkL7wPKKK0BSUxWYq9Rwj0NV%2FVLjGgUI0rUsohdqE9voZ%2BvP5gNNx3xgTxmhKAYZ5q6ZeMMOKjYNRVK2aFGwRb6b25OwxfDDkWymYGeor79rMvE%2B8AG5mSspwyk5EhOi5gPCN21i7FOv5bOZuwKMQlkvoBVdwFBR7jT9yLaLpUFxxWKFSCNEbAkUpMrLb3gCBBSnq%2BZyJAgPSxCzs&X-Amz-Signature=b4915c6c3a4497958971c259e22e4175b227798e19ba49aaae4baacf944de469&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJGMIUJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCwtx7JEeoY2oeH1mwFAi0%2FIDHtx76S7e1ToW4auddFnQIhAKFhFIwDEDKs9PdHr9mASoFSHMtVNFMp9ox3heGN0k46Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwyBEYU%2BcnpbmmHSc8q3ANq3ecYne3MeDorwKzhHZghb10h0d58l2yvCZlwBKNSKxllOj5mTFV%2BZR1maQqduoeyEa9ZBpWWhjbqKgq1TFyX53%2Fv7RrkAMpjWeDpWOvzl1zXiFtmYm30xbUXqKLf44M%2FooDLYrHhpoucykzquI9acGZOfu6KuGjauuwY%2BXkBnHK5RkdXDnFq%2FMnoVU9g9GLfhJrAYALEl%2FPhLoIgmVwLuvNxY8w%2FqgNVFsrOQ7knvxYwCbD6tthOt5yPTIci27TFqrWRDn%2FRMJoZKcZ4pOVvrHqLaw2JQkPcA1ftusHQBVoqTg9Ei0IKE9wtWd47MU7u%2BsJ%2Fe079y1%2Bu7M5YhY2WWsBniLc6wnEXH7EoPF%2BL5hIG2EAylRxKS3oyUOU0pYxoDU%2FgYYCh0UII3ZjA%2FfX7cYhR%2BBSwHrm9RqNvfz18IVwDlWsBPZrIaIQmLvyc1XXwbgJDySEbidazCCf8B16XBGVV%2F5N6C228uAa1%2FPwT9%2BJg3KaFoVbOeF5zm%2BX8AA3e%2Fgby9m1P1lVwhR%2BCLAwq4EEGDlTBVjBcKQATpHPRFff5cSYHFzkGRcjQYPCauUwII9RKQiikhiQAIuENCXYyo8SEwjIXbtVRpXHQqWiC157kLRtre0WWVxDRvjC36s69BjqkAWffdA1S0x6hkL7wPKKK0BSUxWYq9Rwj0NV%2FVLjGgUI0rUsohdqE9voZ%2BvP5gNNx3xgTxmhKAYZ5q6ZeMMOKjYNRVK2aFGwRb6b25OwxfDDkWymYGeor79rMvE%2B8AG5mSspwyk5EhOi5gPCN21i7FOv5bOZuwKMQlkvoBVdwFBR7jT9yLaLpUFxxWKFSCNEbAkUpMrLb3gCBBSnq%2BZyJAgPSxCzs&X-Amz-Signature=c113d4c41e9cf5a285260b567ebebb122d8698abf1378afa8a82891c103013d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDU4GZA%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIEIYkLaC7tblTKK6xCKuV9yw5ygjbQdNnMRqXjFQWy80AiEAkCigMwgDgMTrT3kPVfjrnOZQEbWJbo5nNk4NEaK0WqUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFjOhhsgQRGIAUZVHircA0dYpFP2t8KwH4HLqGsIhSlLtfVVTWsvhYRw2k0503ktjExV9gTmOhUFnEJbMNZpU5CJkPxbjri8DaGp2euqp7mBC9hu4P9bWlMroa3kuzJvBLH5aQeOoWFgzyRLH2QyKtW6oy7%2FRsiRIFDSGN3GDA1AxcZkrgpyQx2dMeooExxt7zTEzRoIucXoq8Zrk0WyiobnfOuvkIfUPM8iYZlojQbeksRixAP8W0oUTauROEoYxaURuScqyTTqTkRJMUWqEX%2BS5whVs%2BqV2Ow46alJ0J52hKsVRMycRBS4s5TvXu%2BJnzYSCBkngd4SKtRSSxPMkCrDIDWqLCnNaxTk7yEps%2Bhe%2BbIkt8nIPWGhfnJr8u4Q993t2Qgb7VMHi%2BqOVhNZiu%2FjEFJMiX7BnyxRjFz%2FYyTem6GkcjVxyX8jynXrRteJ5bsvt%2FJdhhl3Ba4UGwXCShf2875TC%2B9Hui2OcbqBHNPrsULzP%2B3xn0%2BnZuux%2BTqD%2BQFb48yqgUgQdH8L46LeIcMFaAaDat57y7%2FTBZhUI9dj3BcSJgT0Hi%2BIHknWAF8MfnMxy9bbAYsPhIXhRZmsYbFLBAZUd2yvuwOq0i228u87hd%2Fm4MBcc4e6WBi%2BVC3%2BVQMuNL5RHOpKjBkRMOLqzr0GOqUBKVg2usBCQxN2heXy8cVfbMwAvQWshNWkrtBihrKIFV3%2Fd3pNLKH%2Ba7Lb4Nki1JiezvK6uGa961ygXvt4uIcPUxo7fz82Wz%2BcQs7l7HVfdsgfCJpvVs6iW6S%2FBa7S5pMmm%2BY3Kzvxyp8HnWCeNVuLJ94GNpD4xawKT3687CtHu7G7HPhFDupKw9MsVeN3Iy%2BTUvvzBNWm4%2Fh5vQmofJrlzKK5zOQZ&X-Amz-Signature=2084757fcf05973c597af7609ee2fa6ce24671635f58a4b79b930427f9270384&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YFHHVT6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIAY4AbfDqhA5MLG3i9vgsErwqCgW4lfGXoL55lrFtpa6AiAIEg9AuK8Ut3L739tMT5hEU4I7dFIlCJjjzaZRViWqTCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMqyd7sck02KQJtJeOKtwDY%2F0zAnGq4DSQ3Q%2F%2BaGTgcg5rPgN7aMbisntBARsTR1pOqz045yH7rHD2Pbh39Y2mfHaFYdY0WWqEgHJak3s%2Bq4akN%2FmPr07x6tsmZF7KJP%2BhBxhIO2WxJ2qPC85nB9sxitWDXVJMmG4i7rLL7AzSt2CPaerV09J%2FnC4Sy4LeNjSm1YwJdUeMvO%2BmU5%2F%2BCoJ%2BkvEh6d1e8weLSv71RxYPs%2Bzo9mbiYJ6zgZ7hfiXZrcrP8qRG7fZZSNBw5u4Jmt7h2eXYMuyUQQusQOmd4C2dJjgogOdrnO9NVfDVW4DR54iBNQD8E3yP2k6f6sxcVDJ70X6QQK4Qi%2FXnJ8j6dyJWzdDWgt3%2FZnZpaFBAOfTkovEh4mfEsNH93I7ySDM0PrfTkPXCaCySHU4fiwBH8NOVU6OKIX5QPdl0%2B7pWEx6zZnyQvHDNP%2FxyF0CAABBwFXrIvn0EtfvNOjlJlaoLkfgzVuyWOL7L3CxQFVmNW9sx4l8A35srw4RSKX70XPRAuu%2B2gyiNpy1boqRUqe1fnVRpwgVb3g12XF8SWbC9IhDcWvXfTWrGgEhy1JlkTctz0XavTBKd0eoKMLR%2FzvFP%2BehmaIV8l7S2GV3TMjXXTdUJ77Z2mcflmW%2FH2KQ9EwAw1erOvQY6pgG%2BYX2gp2crw2b3t6qfkNPgbNV%2FqX%2Bl%2FEWADhoCsJ0gs%2FtCnEFzDuhJFN%2Fz2ZCthNIX32twffvAglMHwgf%2Fj%2FS%2B4dAKV1qTcMp3W8QPnq0SWOt2QiTlMwKHLNdWIK3ijJmaCfWy0vKDoF9H8sSxw3Gj0wiRiDdZeT7tEqrTa036zG4gw8OikQ8cfIV5n9LzVHTZo7rbvisoQmFcvlj9ohwxEGIpXZQK&X-Amz-Signature=a97a04e0c4eacac9264a6a0a5acc8f5f6861308b60b529e92a9f69b4b8b9e984&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJGMIUJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCwtx7JEeoY2oeH1mwFAi0%2FIDHtx76S7e1ToW4auddFnQIhAKFhFIwDEDKs9PdHr9mASoFSHMtVNFMp9ox3heGN0k46Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwyBEYU%2BcnpbmmHSc8q3ANq3ecYne3MeDorwKzhHZghb10h0d58l2yvCZlwBKNSKxllOj5mTFV%2BZR1maQqduoeyEa9ZBpWWhjbqKgq1TFyX53%2Fv7RrkAMpjWeDpWOvzl1zXiFtmYm30xbUXqKLf44M%2FooDLYrHhpoucykzquI9acGZOfu6KuGjauuwY%2BXkBnHK5RkdXDnFq%2FMnoVU9g9GLfhJrAYALEl%2FPhLoIgmVwLuvNxY8w%2FqgNVFsrOQ7knvxYwCbD6tthOt5yPTIci27TFqrWRDn%2FRMJoZKcZ4pOVvrHqLaw2JQkPcA1ftusHQBVoqTg9Ei0IKE9wtWd47MU7u%2BsJ%2Fe079y1%2Bu7M5YhY2WWsBniLc6wnEXH7EoPF%2BL5hIG2EAylRxKS3oyUOU0pYxoDU%2FgYYCh0UII3ZjA%2FfX7cYhR%2BBSwHrm9RqNvfz18IVwDlWsBPZrIaIQmLvyc1XXwbgJDySEbidazCCf8B16XBGVV%2F5N6C228uAa1%2FPwT9%2BJg3KaFoVbOeF5zm%2BX8AA3e%2Fgby9m1P1lVwhR%2BCLAwq4EEGDlTBVjBcKQATpHPRFff5cSYHFzkGRcjQYPCauUwII9RKQiikhiQAIuENCXYyo8SEwjIXbtVRpXHQqWiC157kLRtre0WWVxDRvjC36s69BjqkAWffdA1S0x6hkL7wPKKK0BSUxWYq9Rwj0NV%2FVLjGgUI0rUsohdqE9voZ%2BvP5gNNx3xgTxmhKAYZ5q6ZeMMOKjYNRVK2aFGwRb6b25OwxfDDkWymYGeor79rMvE%2B8AG5mSspwyk5EhOi5gPCN21i7FOv5bOZuwKMQlkvoBVdwFBR7jT9yLaLpUFxxWKFSCNEbAkUpMrLb3gCBBSnq%2BZyJAgPSxCzs&X-Amz-Signature=de20d27ed36ab046cba6cc8ab8937a706d36489d47e85a4918d64ede98f9c078&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
