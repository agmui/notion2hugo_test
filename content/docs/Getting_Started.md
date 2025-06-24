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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMNC4D3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIA8Iz3CK1%2FVaW8eMOhlGEss8w%2FdN1Fz692GQb9M34wWMAiAVqGAxidrDFrMhzFceewbe66jlqkENhhGN8Q1lQzzibir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2d5wdqW2rVIPx151KtwDT1HHIQd1u4bITM7oJcIRC41wMBVPeqcLNcDsJgakp%2F8I7XRGyvIJxhjjBBIeTB44j7RX6p6zwEKNogESDbOXYMsbRK6hqvrtLAc8qaz4wc6aolCXYeVqynsVMfC19tzwhpBwu3F%2FQSwrly7Pm7EXQToHOcb2gS8wWq35yn2b2IQBrS5gUJHyOJMpwh3MFbKAoSYuPcypW2H55dghSsxtIwcPlE5JpdXx5yIcelIDeP2pYN2MPKIb47g%2BIt9bIekGEulKEnqgJgj21y8wWuTS0duKCDXCEJSqGz9VvGOaRIvzNRMn%2BcxrLIzNwn4dKtVSAEZQNFDl%2Fp87OwsWWUZUC48zM5fqD8B%2BJ3IJGHRP9eoo2ggj7JBRYLIWm9NtkRAvC9DCSx4seg9ThBEyh4bmXQRZGT%2FppJLpqLbJDQtkehdn7lsW%2BcGLzJnaHRIwYJCr7775vDqaS%2BeFdkdCl9rLAyY4IJ9A8eCq9vP7hdadONeDlC2TQ77oCFBs25Uc1qGRj4EUgSZehB%2B6Z%2F%2FChbCUncjSrQWEkzh%2BiImJvvQ4rtHMz9sOE4qXl5r1ZrA%2BSNVHD9GeUlHpRTN%2FxHaKl%2FGh0%2BNXM0YzEjC0y%2BP6mD59VNgNARiace3snqPqAWgw2ffowgY6pgEI1%2FpfAMaQtcCORg8cN7oT4fOH6l2laEz%2Bf7NRrMzUCjwFMVJGTnEU%2F1EwxUwXMMKPVe%2BE8KRMyvfXaa0WpKl%2B7yacA4OYGYt6HIuO%2B3709EekB%2FZFWtAMYG3mEc103xqkkirxZsQhqZj7GzhTNEtvnowdHdH3%2FDlguix%2FAFcIEBYsBkhbxOdzAmWjtkZLA5lS0XjW3x1lXZpI5WLsOcTneUkuv92E&X-Amz-Signature=1a569689369fd53083f7f75d12b43859e76a44331dc176430e44e26989a1d78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMNC4D3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIA8Iz3CK1%2FVaW8eMOhlGEss8w%2FdN1Fz692GQb9M34wWMAiAVqGAxidrDFrMhzFceewbe66jlqkENhhGN8Q1lQzzibir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2d5wdqW2rVIPx151KtwDT1HHIQd1u4bITM7oJcIRC41wMBVPeqcLNcDsJgakp%2F8I7XRGyvIJxhjjBBIeTB44j7RX6p6zwEKNogESDbOXYMsbRK6hqvrtLAc8qaz4wc6aolCXYeVqynsVMfC19tzwhpBwu3F%2FQSwrly7Pm7EXQToHOcb2gS8wWq35yn2b2IQBrS5gUJHyOJMpwh3MFbKAoSYuPcypW2H55dghSsxtIwcPlE5JpdXx5yIcelIDeP2pYN2MPKIb47g%2BIt9bIekGEulKEnqgJgj21y8wWuTS0duKCDXCEJSqGz9VvGOaRIvzNRMn%2BcxrLIzNwn4dKtVSAEZQNFDl%2Fp87OwsWWUZUC48zM5fqD8B%2BJ3IJGHRP9eoo2ggj7JBRYLIWm9NtkRAvC9DCSx4seg9ThBEyh4bmXQRZGT%2FppJLpqLbJDQtkehdn7lsW%2BcGLzJnaHRIwYJCr7775vDqaS%2BeFdkdCl9rLAyY4IJ9A8eCq9vP7hdadONeDlC2TQ77oCFBs25Uc1qGRj4EUgSZehB%2B6Z%2F%2FChbCUncjSrQWEkzh%2BiImJvvQ4rtHMz9sOE4qXl5r1ZrA%2BSNVHD9GeUlHpRTN%2FxHaKl%2FGh0%2BNXM0YzEjC0y%2BP6mD59VNgNARiace3snqPqAWgw2ffowgY6pgEI1%2FpfAMaQtcCORg8cN7oT4fOH6l2laEz%2Bf7NRrMzUCjwFMVJGTnEU%2F1EwxUwXMMKPVe%2BE8KRMyvfXaa0WpKl%2B7yacA4OYGYt6HIuO%2B3709EekB%2FZFWtAMYG3mEc103xqkkirxZsQhqZj7GzhTNEtvnowdHdH3%2FDlguix%2FAFcIEBYsBkhbxOdzAmWjtkZLA5lS0XjW3x1lXZpI5WLsOcTneUkuv92E&X-Amz-Signature=aa6a45b8a7bcc65fbdbe4ab3e706e6cd48f9ebb5f96d0444e1bf2a21c24436cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMNC4D3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIA8Iz3CK1%2FVaW8eMOhlGEss8w%2FdN1Fz692GQb9M34wWMAiAVqGAxidrDFrMhzFceewbe66jlqkENhhGN8Q1lQzzibir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2d5wdqW2rVIPx151KtwDT1HHIQd1u4bITM7oJcIRC41wMBVPeqcLNcDsJgakp%2F8I7XRGyvIJxhjjBBIeTB44j7RX6p6zwEKNogESDbOXYMsbRK6hqvrtLAc8qaz4wc6aolCXYeVqynsVMfC19tzwhpBwu3F%2FQSwrly7Pm7EXQToHOcb2gS8wWq35yn2b2IQBrS5gUJHyOJMpwh3MFbKAoSYuPcypW2H55dghSsxtIwcPlE5JpdXx5yIcelIDeP2pYN2MPKIb47g%2BIt9bIekGEulKEnqgJgj21y8wWuTS0duKCDXCEJSqGz9VvGOaRIvzNRMn%2BcxrLIzNwn4dKtVSAEZQNFDl%2Fp87OwsWWUZUC48zM5fqD8B%2BJ3IJGHRP9eoo2ggj7JBRYLIWm9NtkRAvC9DCSx4seg9ThBEyh4bmXQRZGT%2FppJLpqLbJDQtkehdn7lsW%2BcGLzJnaHRIwYJCr7775vDqaS%2BeFdkdCl9rLAyY4IJ9A8eCq9vP7hdadONeDlC2TQ77oCFBs25Uc1qGRj4EUgSZehB%2B6Z%2F%2FChbCUncjSrQWEkzh%2BiImJvvQ4rtHMz9sOE4qXl5r1ZrA%2BSNVHD9GeUlHpRTN%2FxHaKl%2FGh0%2BNXM0YzEjC0y%2BP6mD59VNgNARiace3snqPqAWgw2ffowgY6pgEI1%2FpfAMaQtcCORg8cN7oT4fOH6l2laEz%2Bf7NRrMzUCjwFMVJGTnEU%2F1EwxUwXMMKPVe%2BE8KRMyvfXaa0WpKl%2B7yacA4OYGYt6HIuO%2B3709EekB%2FZFWtAMYG3mEc103xqkkirxZsQhqZj7GzhTNEtvnowdHdH3%2FDlguix%2FAFcIEBYsBkhbxOdzAmWjtkZLA5lS0XjW3x1lXZpI5WLsOcTneUkuv92E&X-Amz-Signature=1daa2e0245df9102e75283590d708af29a33f374f7ed88fc51a926da3a3cb0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJIJOKQQ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDtX0BPWz5%2B52VFmT75qWAlXpg8KttMGNxmAN%2FSLuc2IwIhALF5Ox0L7WCQ5VLBKEroIJmIABTbYpERKCQJIIGl%2FaXUKv8DCCcQABoMNjM3NDIzMTgzODA1IgxjEru7lp6gGhZFvwgq3ANlWsitVnHgTleaddwwB9ewRt%2FSvFVc0zXutexsZMGFOxNP8QWQCw4KPrpagpTEbH9C8fExhmNdzkfD3LefkqshGpkdnIRw7XaGpTzIs9CG6AmVQ8EcN6m%2Fzk%2Bnwd3VdhG9mIjAuD7OLGBygH1rHYuC6y%2F68qwMkPjIhlxqSZahjp5B2cIrTQOqq9G20dcQk5M9TcJQiqSHc94i8OIFmqGK3simkLJFfmuNukf%2FJcC9uNj%2BHjoarvj5sFnyY%2FYrF6awsMrxOIMOM3P1pnb%2B5JL5T0v4tmJ0adqqoHugYoC5k1Th4ESn3%2F9RCny37eoJ8NeSctsaZzNKLiGhtdXT6zZfacK2JppHnt2NqtMIomTJV0isTLyc%2FSfcqWIvM6JUoPIaW90x6krcB8ZqIjf7wLrDWoAfm9%2F1oXF74TqjIMvs970nPwyb16CY%2Bd8QxmGMevS4Mf7Zcp5w7WmnGyXSU%2BAzBu1PjcFxc%2BwxhnM3AwEENUduS2oghC7vcjHRYhljKmFysIHgoKuzJQ4BYyOirFQWcQv54DCdLO%2Bx%2Bh83J%2FNK10%2F27d66%2FOJkRgnrlg5DrWZlBX50Vgr%2FnLBsuic1ymOFvLf1BbH3z%2BYZTecXx04egzz6MOduRUI040RE7jDNg%2BnCBjqkAclCPs73gLVzghGOuNcTcC7DtU35EmAZNJW2k8Z9UUVul9R7I8lSBClSMDsaIKArt5Cm9bY%2BmXwLWSMeXNi1KwXeEZ2KgqANMNI8%2Fcm0aTTHVrX3XDnHxDJKOAni1y1m9HKxFZLMEyfk3etQ09d%2FjI5kjDkl0d8eIo6g1nBqNc6ledR4I32E9JZ3UMz83K3WSJfgRop4qywrS48T2UV%2BkOJNnNsy&X-Amz-Signature=cea68a47b81e652119b9c124657bb0d3b1870ba79d9e536d179fbf168c30531b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RM55Z2%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH20yjp9ZCuPiniTukJ2nCOOC3hdipU8%2BjkWeWWtMUyLAiBvjIrtmOACQlsxLNxkYm7J4%2FS5fdw%2FmHxje7kJFxvDnSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMZ2kUC5xjSboiy0ezKtwDwlFUSVOB13OBxP3v9xT0vkfkb8KbmlPEBrS3t3pg7CQT0SxfTfZgKvOaZD8zj5keHFmmC5j9%2BpBrRH1L0sm1HQpksGIM1jWlsg%2BYkiQtsUT3CHpa8OHXgVXLXUMpHTle%2B2T9AoutJRl6%2FDfu2C49kYZOfPI4ClZeacj68YaZ0yHd%2FnxnzAa%2BzeXbs5tRYuwNHun4l%2Bg165r3etb%2BnClGgTRhdmeJSMK1EMzZUqeirLcLXcQsel8XRnON4YqYIBScR6Lfj0ni2fHbKXuXHer1smMJDQ%2FqLzm3iNCh2RmZNOEqP9sJd8nPQ2Nng%2F7CzvjnsTgiROce4NxxapaZgUO8LXBL8zuFsDXkMokVxsoVJ%2BwG6yfvDc51RuCdsddKJcrPyqvTk%2FPzU3rjQb4N4tlwtGeRL4fZWr%2BXXS25VXVbJH%2Bin1s53lsAdBb9hOGTjQImvfz1xCwjm9evnQq%2BcXSDSZOlCfZtNC2MZtft2zWTWyuK6a7LAvngPpBSC06sEolUIVAyiDX9ylHjmulfgvhtOSTSnWFVMOnOtXXsHUwWoVwXr9sjVHetII%2BdEJix0FbBqIKf%2BBx3CP5vmPs%2BjLREHELFuYQFJAGK%2BKrGNXiR%2FsD96k6jb2X%2Fcvkv59YwjfjowgY6pgHLG9g53FKf%2B3PWQdq81JffWL0LvWMzx%2B5RaT1cMl7h5uX76NbXzAZqSGxGAYTjQgvQShm3RKBTTuz2l09Hbre4brL4mi5wZqW%2FwPLIpUOrlC08iEycZUoYibih3Jakq7XoFZQ%2FdLImnBh73x7UsI%2FPqJ2MeFZHZL8h0WsAvWbqVvH2WVqdNzGLPQ7ZvNsFe9%2BX7rNyV%2BCMRpa5%2ByceYaYFH1%2BCJDZa&X-Amz-Signature=d03398fa8aae276280b0614c73212e1b7905872665f8f08435e05552a707f0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMNC4D3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIA8Iz3CK1%2FVaW8eMOhlGEss8w%2FdN1Fz692GQb9M34wWMAiAVqGAxidrDFrMhzFceewbe66jlqkENhhGN8Q1lQzzibir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM2d5wdqW2rVIPx151KtwDT1HHIQd1u4bITM7oJcIRC41wMBVPeqcLNcDsJgakp%2F8I7XRGyvIJxhjjBBIeTB44j7RX6p6zwEKNogESDbOXYMsbRK6hqvrtLAc8qaz4wc6aolCXYeVqynsVMfC19tzwhpBwu3F%2FQSwrly7Pm7EXQToHOcb2gS8wWq35yn2b2IQBrS5gUJHyOJMpwh3MFbKAoSYuPcypW2H55dghSsxtIwcPlE5JpdXx5yIcelIDeP2pYN2MPKIb47g%2BIt9bIekGEulKEnqgJgj21y8wWuTS0duKCDXCEJSqGz9VvGOaRIvzNRMn%2BcxrLIzNwn4dKtVSAEZQNFDl%2Fp87OwsWWUZUC48zM5fqD8B%2BJ3IJGHRP9eoo2ggj7JBRYLIWm9NtkRAvC9DCSx4seg9ThBEyh4bmXQRZGT%2FppJLpqLbJDQtkehdn7lsW%2BcGLzJnaHRIwYJCr7775vDqaS%2BeFdkdCl9rLAyY4IJ9A8eCq9vP7hdadONeDlC2TQ77oCFBs25Uc1qGRj4EUgSZehB%2B6Z%2F%2FChbCUncjSrQWEkzh%2BiImJvvQ4rtHMz9sOE4qXl5r1ZrA%2BSNVHD9GeUlHpRTN%2FxHaKl%2FGh0%2BNXM0YzEjC0y%2BP6mD59VNgNARiace3snqPqAWgw2ffowgY6pgEI1%2FpfAMaQtcCORg8cN7oT4fOH6l2laEz%2Bf7NRrMzUCjwFMVJGTnEU%2F1EwxUwXMMKPVe%2BE8KRMyvfXaa0WpKl%2B7yacA4OYGYt6HIuO%2B3709EekB%2FZFWtAMYG3mEc103xqkkirxZsQhqZj7GzhTNEtvnowdHdH3%2FDlguix%2FAFcIEBYsBkhbxOdzAmWjtkZLA5lS0XjW3x1lXZpI5WLsOcTneUkuv92E&X-Amz-Signature=1b7fe395c92792a18a00e66928a96ed5a554d2007007d8b20a2dd30a0546c207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
