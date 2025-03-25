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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4CXWJR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlPMO5Hz4SWd4vxTNh8EprnY8WcxgFzIdlqUgHJYOF3AiEA42KO%2BKOyrPXxf4JSXZLwsskbidRbi6JfGw%2BknimFhBoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJBhHs5Ejw9CSFnLDircA%2FycrJSzSLXdbuU3tw9m2ymNJb4Cw5lP0AGihuUw8OoQjhqqU9Ty%2F4ZB01PsqlSXaXwE7iM1PAcRuzHkOQTdBulC981YNZu7ElUVK7UOAU81EBT8exoNNQhANJnnHgfZoqmhJCJT3tM7e987EcFsHOVALKQenpVyC0W%2FeTP61vfefiMT2EbQL7uZOua04RUdV4VGBdFGLCppPXe%2BAotnlyO2uDbbA1Kn5tKjy8L%2BiB0YLRaigDwpIG0qLHyHzv4MvCy6apN4aUJN7EiS2QrgGxtSLq%2Bzid1AffWWWBiOIDn0EqlRMAqVc9zeTKBX2MfIZMd6eYaGamo1iviHNJ3lhPs1z5WjZBwvov3jSNR7deQ24F%2FhPR9jon7GDiSjG9Lz%2FP5hlqsKWKmTIwEb0%2BXvHLycxmt2KPrdrxm8X1a1iCMIb1YdR4KnsEng%2FUEFVDWPSqK%2FJdof%2B4ir1vCsGjNGNsk0uJ%2BE902fjdONuofTQeVmsqEnuqpf%2BezB1C94FJv81IYqRRSTCfVSge5VQXE%2FuEnwE%2F2JfvKdpj44r5fQk69Yvljw%2FzcxmYchG95qqhQWTwh0VcfdF24W9v7%2FDjuifGUapF2pa72AjvR1tjBTnS4i8CwJQ8AXeB6XxwMcMICYjL8GOqUBib5ceJcsAp9qRzMGs8BiEdXUqo%2B%2BasoISlLuWh7TeaYhXLGniv5XJjJjpwfk%2Bj4aWpoK%2B9LFf2rn6CQu6PPqaoM65WcgNxaxC6GDzMvCRJ5rFLGvAAHcKfadn9jQ2IOvxMuNxfZ8mQRvMBEMYY0kb%2BoXGM6MCFiWXyt4tE7%2F9vuNKg0Fdm%2BtdBa%2BAgJycocx2noBWuIDnFocRm1XK1dCru8k6tGw&X-Amz-Signature=66224ad05454afffdfc7013af0d0946a31e1743309517326a910054f3f6765c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4CXWJR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlPMO5Hz4SWd4vxTNh8EprnY8WcxgFzIdlqUgHJYOF3AiEA42KO%2BKOyrPXxf4JSXZLwsskbidRbi6JfGw%2BknimFhBoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJBhHs5Ejw9CSFnLDircA%2FycrJSzSLXdbuU3tw9m2ymNJb4Cw5lP0AGihuUw8OoQjhqqU9Ty%2F4ZB01PsqlSXaXwE7iM1PAcRuzHkOQTdBulC981YNZu7ElUVK7UOAU81EBT8exoNNQhANJnnHgfZoqmhJCJT3tM7e987EcFsHOVALKQenpVyC0W%2FeTP61vfefiMT2EbQL7uZOua04RUdV4VGBdFGLCppPXe%2BAotnlyO2uDbbA1Kn5tKjy8L%2BiB0YLRaigDwpIG0qLHyHzv4MvCy6apN4aUJN7EiS2QrgGxtSLq%2Bzid1AffWWWBiOIDn0EqlRMAqVc9zeTKBX2MfIZMd6eYaGamo1iviHNJ3lhPs1z5WjZBwvov3jSNR7deQ24F%2FhPR9jon7GDiSjG9Lz%2FP5hlqsKWKmTIwEb0%2BXvHLycxmt2KPrdrxm8X1a1iCMIb1YdR4KnsEng%2FUEFVDWPSqK%2FJdof%2B4ir1vCsGjNGNsk0uJ%2BE902fjdONuofTQeVmsqEnuqpf%2BezB1C94FJv81IYqRRSTCfVSge5VQXE%2FuEnwE%2F2JfvKdpj44r5fQk69Yvljw%2FzcxmYchG95qqhQWTwh0VcfdF24W9v7%2FDjuifGUapF2pa72AjvR1tjBTnS4i8CwJQ8AXeB6XxwMcMICYjL8GOqUBib5ceJcsAp9qRzMGs8BiEdXUqo%2B%2BasoISlLuWh7TeaYhXLGniv5XJjJjpwfk%2Bj4aWpoK%2B9LFf2rn6CQu6PPqaoM65WcgNxaxC6GDzMvCRJ5rFLGvAAHcKfadn9jQ2IOvxMuNxfZ8mQRvMBEMYY0kb%2BoXGM6MCFiWXyt4tE7%2F9vuNKg0Fdm%2BtdBa%2BAgJycocx2noBWuIDnFocRm1XK1dCru8k6tGw&X-Amz-Signature=9967a85196dbd2645d7318d7f3c9e0c417ec96ee6cd92271f9ee00735b8af4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2JJC3I%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxL%2BjCl0HqSYGS0uZHzpgt28%2Byemxpienl3nA6wazA%2FAiEAq94KwZhDEp0p2HkAdYMVFKLT8FgHfbBC%2BuJznhDDuS0q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDFF5wFIHsz4p%2BH3GSyrcA%2F62i87uT1LqkNkNqv%2BZe%2FTifDqV6SSU1%2BmRdq9MiI3VMzjk2%2F7ihbOXshVOipXrLoNivFhc5hzdScsZwsBekW%2BSSvYQ9xhPEGe0Yt4kDzDvg7qaUbHnTkKAmkZFTfT11PKOiy2vtTq%2FW0l7ZpMcECDAFGrUYb1%2F8FE2a38Deee9s6fhQQ5itK3kxxoDO7ybS%2FRw9dQaqgbZrOQ8ulv2TOMRiGwB2goFTARRFPRJ0YL%2FLyZ2P5Jew9umQI92%2BF6QRU1tOGnIkr0QAbjCt47r5YkVM8co7yXlvoMklg7OE%2F1fwNbhozv7XE0aQgHYxQPCEYTUpzkEoFhns%2F4rXp8DylB1hvICjXi8vE%2BI4yfPtNlSPpDjuOQre3FjEW724ZuTIh6d67rPEtt3qHmnsRLYpL5roXcsRXxJF7%2BtU2lHropaxKq4oRudi2eJVPgg0k1xoVF6FPjpahVkH%2BzoXSz3WYacTuSl%2BdFlN0r6IDMQ5FUJidSYNdBRQ5vYHgqk4eGY9NijxRZkv%2FcKVmQs1KOuClvooi0QHBeFqv7ktjH8ZCVT7tLEZFv6nFU8tjfpzffXNg3m1SqeSmHuZUtHOj3oyh8ez1jEdrpv2NADVdaNPcLkEIjeDzo5XtNylKoxMPWXjL8GOqUBFfA2lxpCH3m0haSE5J95guz3c7xj08xT3Evt534Ktb0LKEaOlO%2BAvJFQUGw9tQiYPhwz6tsc3G6YxXZHSLN%2BeSxh32rtsgUHy7yTH%2F%2BkaM9AfULk4yrw%2BbzP1B7mwRpQsvmDba%2FTdGjzUfUo0Qvpw%2FXCwAT1eHk55yA27Ec4COtdEVe66vOClIBvdTO6vSY7ScJ0spTAkfIJi0DeEmv3IziBL6gi&X-Amz-Signature=d028b44bae3735021d8634ac0cfdfea645f96e40c2d9e9a4ffa144b3eecfe0d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HJU6SH7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkxbYHkGWV%2FxAjaN0T7Gvv%2BEoJo%2BmgV%2FvvIfI4FBjkVAiAIGwzmqS8iws41o7w6C0yKMTBHTZLVVKGLy7MYMkNxqyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIM7ObyS7m%2FW%2BeveS5MKtwDGqZ3bncBF5Ff3ViIWNV6mOhdl0Mqr3Q4AfHfQPalk%2BIVh8GG72fDshDznIwEESV8nupKS0OrSJmREoJchQIW7fG5bcJF12hMsgJUqOWgDeiJz%2BZgqB9VJA7A%2FUNF0Q3ZDDefATjbncPCqhYctkMfHxNLZGx0iqeGkw6%2FRs%2FwCIf0iazTXuwr%2BbHnpfYB9XAjC5KbymUoTwf3aj299gk%2FYNAkZMZdWvcrEcstU4QDqhGdwFSCSScu9zcJFpNtr91FhBjI7ETOhWxy0%2Fx%2FSSJ62dE1QerAicnSNLB2G9TaFOFkv2TdgHCxQSIUWwMmsojBZXi4N0ilD50yoNTP2%2Fzi5zlilrNc4Ck%2FDjXKU4JuWYbPN33dXQ%2FZKHM9yku4TZ1A6xucOBfoNVfb8LeUyzp2C0m2H9GcR9YnRSur7P1%2Bzx0pmSeJq%2Fe%2FJDkEkWF2ZrpMNCz%2FXCk7Ih3iu52Pr00RWFM8nPrPzn5I0vPm%2BMbM6%2BfbpBps%2BxkpVxnMjYLOb4dBipJadfIGf1VJkecNLT2Pq%2FXIk7U5u7CZT7BIYnKgdiuk3YHycZiXVi7kj4L%2B0FEq%2FGhWarJkAbjRTG1j68wEk6PIGUGelqd1sIOfaNlkpSOPavNZr2OGPbo7rbMwzZiMvwY6pgHjZ8XFtsX8Mf1DlDosb9ns36qwa8SgeguYJWQxHkeCu%2Bg5ZyQeyzg%2BK9IL3mYv%2BDbc%2FiBG%2BvnnzAKmu22tEUKO495Uef4YzbpvcdHJCNQ2rzpfT5%2BtN%2BlCm3Zzz73KbalwKBDfKKVNbPtKrH5rrVv3ROH4A8zTD2KVuqxrihyzky03rSMEfmSMHZQ5erPa5h5bM6TkwW8FTKKc59wyKdS%2BYofvGTWW&X-Amz-Signature=badad0442e54c8dadc7f6535ffaf58225b4a6210967616e711600d49a3b79a80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4CXWJR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T230726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlPMO5Hz4SWd4vxTNh8EprnY8WcxgFzIdlqUgHJYOF3AiEA42KO%2BKOyrPXxf4JSXZLwsskbidRbi6JfGw%2BknimFhBoq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJBhHs5Ejw9CSFnLDircA%2FycrJSzSLXdbuU3tw9m2ymNJb4Cw5lP0AGihuUw8OoQjhqqU9Ty%2F4ZB01PsqlSXaXwE7iM1PAcRuzHkOQTdBulC981YNZu7ElUVK7UOAU81EBT8exoNNQhANJnnHgfZoqmhJCJT3tM7e987EcFsHOVALKQenpVyC0W%2FeTP61vfefiMT2EbQL7uZOua04RUdV4VGBdFGLCppPXe%2BAotnlyO2uDbbA1Kn5tKjy8L%2BiB0YLRaigDwpIG0qLHyHzv4MvCy6apN4aUJN7EiS2QrgGxtSLq%2Bzid1AffWWWBiOIDn0EqlRMAqVc9zeTKBX2MfIZMd6eYaGamo1iviHNJ3lhPs1z5WjZBwvov3jSNR7deQ24F%2FhPR9jon7GDiSjG9Lz%2FP5hlqsKWKmTIwEb0%2BXvHLycxmt2KPrdrxm8X1a1iCMIb1YdR4KnsEng%2FUEFVDWPSqK%2FJdof%2B4ir1vCsGjNGNsk0uJ%2BE902fjdONuofTQeVmsqEnuqpf%2BezB1C94FJv81IYqRRSTCfVSge5VQXE%2FuEnwE%2F2JfvKdpj44r5fQk69Yvljw%2FzcxmYchG95qqhQWTwh0VcfdF24W9v7%2FDjuifGUapF2pa72AjvR1tjBTnS4i8CwJQ8AXeB6XxwMcMICYjL8GOqUBib5ceJcsAp9qRzMGs8BiEdXUqo%2B%2BasoISlLuWh7TeaYhXLGniv5XJjJjpwfk%2Bj4aWpoK%2B9LFf2rn6CQu6PPqaoM65WcgNxaxC6GDzMvCRJ5rFLGvAAHcKfadn9jQ2IOvxMuNxfZ8mQRvMBEMYY0kb%2BoXGM6MCFiWXyt4tE7%2F9vuNKg0Fdm%2BtdBa%2BAgJycocx2noBWuIDnFocRm1XK1dCru8k6tGw&X-Amz-Signature=7aca322bc3bce0572c3d348da7afe840d71b8dd48643041c7bdbb583093ffaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
