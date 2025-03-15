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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRYOUJX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU6%2FdyquvnWoH%2FsAFNTqNflk%2BSshV%2F6%2FFeCZ6P6zVecAiEAnJf28BnMPQcdv7KQVhRJAvMW0AurChVv%2FH4hQtmozCcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGOmgSgDp2IFwVOOlyrcA5f6UIWe1WffhKgaak%2BxkG%2FaoSonOcAElluWRxQmIks%2Bkn2Vmh9mywTyoxv8CndB2lC3FOuTAvuA7lITXcR%2BOwkPtGXG0FhYBPydgBaYhaLfLhX5DeC3lP2W8oTKkCypE75a%2FS4rSS1d5C%2Fb7iC0lS9%2FF369L%2Fu5KVId2H%2F%2Fvf0TlGqQUcZmY5O8dcUlOr6SyYVxQ9A5ZTlSXriWuIVHJnOZoWLmrKwRGY9C2Ng4Y8LnkQ7KQ9iYaGlPyvdmScAA5ExO7SFBZuhPBy0uIWW5gP6ePnHcG4V6wLeCD1eBU3B6KNmJHKpOWNqAX8c3xgbTjru5kUOURdcqp3W5aFswS9bJYky5%2FPMPg%2FfIPohBBwY2WXELLPjsa%2FjMLU1oTs%2FATEdAGYkls1jGG2l%2BE9%2BiCX9drEoAcrOYyuaWyepp8kp9w4LfdeddX2j83eKYpeuG1KKh%2BJRvNTFensmu0i3Mv5Wt6xfhsLG%2Fwufsvh5xtmiAHQUfACUdHfMo1E13z3BBh75SIbpzcj4%2BTGaCBz0LPONSRuXoKiUujQX5hk%2FCLvnYstoLduiUTsuPZwE%2F9EAAT8iAlr%2BMbVVHin4YjS%2BQtV7f1Lk3R210NEGrcc3gIFpGfwPAqfh6ne%2BftLrGMJfv1b4GOqUBYqSWo28Qb6umvJvVBHmY9KbEclSkcnQ8TTo1Qza7ci1jozTZgOJ3jFNqLEMnhvNbWsnOtgbgI3G%2FFpQ5hxqCgYOu0WFFN41Ds7iJV9mBrAzGCkF7DZchPdWwA5GiELpL7WK1FASU950JAATtovgJh9C5QTM5PEqHcbdqZArVveY9cnKDlxQVXCafWk5LVlUnOm9AiaO9SJUwCMXwoqkmj5J7cWW1&X-Amz-Signature=9f260fbd6eaca680440de155c112f4101043cbe1a493e1d8368f1c7cd9f765ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRYOUJX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU6%2FdyquvnWoH%2FsAFNTqNflk%2BSshV%2F6%2FFeCZ6P6zVecAiEAnJf28BnMPQcdv7KQVhRJAvMW0AurChVv%2FH4hQtmozCcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGOmgSgDp2IFwVOOlyrcA5f6UIWe1WffhKgaak%2BxkG%2FaoSonOcAElluWRxQmIks%2Bkn2Vmh9mywTyoxv8CndB2lC3FOuTAvuA7lITXcR%2BOwkPtGXG0FhYBPydgBaYhaLfLhX5DeC3lP2W8oTKkCypE75a%2FS4rSS1d5C%2Fb7iC0lS9%2FF369L%2Fu5KVId2H%2F%2Fvf0TlGqQUcZmY5O8dcUlOr6SyYVxQ9A5ZTlSXriWuIVHJnOZoWLmrKwRGY9C2Ng4Y8LnkQ7KQ9iYaGlPyvdmScAA5ExO7SFBZuhPBy0uIWW5gP6ePnHcG4V6wLeCD1eBU3B6KNmJHKpOWNqAX8c3xgbTjru5kUOURdcqp3W5aFswS9bJYky5%2FPMPg%2FfIPohBBwY2WXELLPjsa%2FjMLU1oTs%2FATEdAGYkls1jGG2l%2BE9%2BiCX9drEoAcrOYyuaWyepp8kp9w4LfdeddX2j83eKYpeuG1KKh%2BJRvNTFensmu0i3Mv5Wt6xfhsLG%2Fwufsvh5xtmiAHQUfACUdHfMo1E13z3BBh75SIbpzcj4%2BTGaCBz0LPONSRuXoKiUujQX5hk%2FCLvnYstoLduiUTsuPZwE%2F9EAAT8iAlr%2BMbVVHin4YjS%2BQtV7f1Lk3R210NEGrcc3gIFpGfwPAqfh6ne%2BftLrGMJfv1b4GOqUBYqSWo28Qb6umvJvVBHmY9KbEclSkcnQ8TTo1Qza7ci1jozTZgOJ3jFNqLEMnhvNbWsnOtgbgI3G%2FFpQ5hxqCgYOu0WFFN41Ds7iJV9mBrAzGCkF7DZchPdWwA5GiELpL7WK1FASU950JAATtovgJh9C5QTM5PEqHcbdqZArVveY9cnKDlxQVXCafWk5LVlUnOm9AiaO9SJUwCMXwoqkmj5J7cWW1&X-Amz-Signature=7b0e1c66f5209d96fafee15cf7f85aa878ebad4fdcbf33345a75306664133ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ED62Z5X%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2BXYs9tXCUTQf34KptD8DalqFJXVtBGkVM26PX3iEbAIgJSPkZcOUyX%2FWvXlxktMO96v0Q2z6aMU6b%2FG%2FMz0B2tsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLlzN5pxaGk2rp2SnircA0sTRa1wIZZ0RA3eIUYCN%2FLIih3hKOMcFpQTNkp3F5zlDyjsyMQSB1a5GTkPOnKK8bAnP7WS59aJxmWXdROR5NDEodz7jOpq1qJCy2cZD4bhFaO%2BJt3fBZR1b%2BsnxqySHrNklMciNoZd5kalUncdguie0HoD6bZp1Ap5Wy0ei%2Fi8WtWNzYQfvx%2B9Y9cUBRwQF9VpzSdBaskhMqcMmY6Ze440wuFUylHpwX4eyVoG%2F84hVyRkK5IDoRaPcUWDUUfBu5ap%2FPdMNRqQOu%2FQLGKOzRlbIHfkX7tc6iqf5U2CPXy5JfJyCicNhRswe2PFdwjXp7myFlqlf1virkHEmKxU8RZaM1ZeW3EEvj750hUqUOJlGBh5ZZU3ikGP1ZbHy%2BMxpXPu73GIzVcSg6FiwtrujrYbIIKCNMVMaXFhUmnKV60MDmhfMvtamRFw86Xsd8hFDSo%2BIWgopA0%2BERXS8gHsN%2Be7FeH1MoWoLHxoZME79mvQ6459ckyxm%2BeJ5Xl3Q%2F79P4UvW9KI2HdPtmqNZMfau6pnDtBD4xFMFDxysMTex8jWxOV1TY%2FgY8rvt%2BSZy6wqlsi92HJZXCOiwRMZCLDqJbF0vnM2Qzg97j8k%2BGx%2BxorRDy1LQclJ%2FNZkg4B%2FMIPv1b4GOqUB3%2BTz87iS1nT6UQquvdh2DNesBrtxmD9OZyOKeZHOC4CmwgTHejXT377Qe%2BGVApBL56oHRzsN5WnYFQLs9HMzrNj12LrPdbsNBfmYWjJCNjVJBStVqq8b38SqJRxxZ4MEOZuKpiR3u%2Fz2JuBMutLFYyD7ZsPbzSWWXUTyd4IZFPTGmuvyE7e5pOA0ljrlttuVStDx6jTpbiWLiiLCCnsPlyORWqMg&X-Amz-Signature=66755a4605d63a0faf1f0e4a582d3fa7cad6108b30c97425e101487e2fe2699d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVZLLFZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDA4DKfCZlhWe0PJgZRkez2K15d8ss0F%2BvdU2GCDP1IAiEAnHX5zlq1%2BjBcl2bL5W%2Fg8LxBHHr30zqYgozwf6aa9qAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAB7JgWP3kux0sFt2SrcA4NgVW4ykytwFazN4Dk8bJqQBJIMKPvgHcr180rQ59gvpum9dlpovOQVachxvhbm2o3j4RFoSc07WJVCgkh0YFWD0J2bTJkl0xQMPbT1rkyJIRotTu0PuxMYhcu3fIIzInoFAZ7VSltmWn00nPzoBwcF4%2BbeqPX0%2F6G7%2BViVES4MCj5NXFwfQ5yk8sMsN7sFDNPk6Wk1E4G6%2FnSyialIc%2FQxE75K6TeiXOy4H7JFGn0JtV75FbWvKsgnMlX48BLrJzV6cAgNESWeuIEupwQJM1WPSjOOEisOV0Ksijsje5Bbe8En6qWBrwYTQKqMBoYJsF3pmz1QwgfFa7OeY8LyoOJXWghPArR0RCcDmHaGWg7FoZGgJx9V41f7Cg2w8eHpocKQcjvMIgyq%2BYgDhHcr7k1o81RPYUSRfFtazOgmVk5oS4SsciwNi3Zwxg8iXGXQo6bvNjvKE3QTW%2FlkMSL3MtrAX9OuVPwgzAFi%2BOrDcKmBJYzQySStbw88BA8meUjsankpGropj3RPXM%2F7hYe2actpN8aieJNgzE1aacaezQjnHyKO5AGHG80ktntORuVEgXGCppLtCKz0rJSALw7EJrjLlaIj7ISamRs90J3Y703RouNgpBccIajSVbRpMNfv1b4GOqUBk1fujUJAB9QpCPa6IfmvxJZpKyVsTsGvcBL5hb1%2B2ruyx9vKopsszw4dWaU6B6e02L6h0EGc81JVTQspK2RPK153nEqFIrsboeNX%2FJM%2F%2B3h3X%2BkYgpb7%2FUtVA4zItou7QsuyKBXZbw0EOTSVntaE%2B7uspPdkcyidQPnMzyDgYYE%2BR4sI%2BlLzgOMRGKNw6Yy840yZOzhHp2%2F%2BJ%2Fxo46HuQd0H0s%2FP&X-Amz-Signature=2b212748d4d9daed394fe60eecf6f10e2470f010cae9bcc1856ea1356bce11bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NRYOUJX%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFU6%2FdyquvnWoH%2FsAFNTqNflk%2BSshV%2F6%2FFeCZ6P6zVecAiEAnJf28BnMPQcdv7KQVhRJAvMW0AurChVv%2FH4hQtmozCcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDGOmgSgDp2IFwVOOlyrcA5f6UIWe1WffhKgaak%2BxkG%2FaoSonOcAElluWRxQmIks%2Bkn2Vmh9mywTyoxv8CndB2lC3FOuTAvuA7lITXcR%2BOwkPtGXG0FhYBPydgBaYhaLfLhX5DeC3lP2W8oTKkCypE75a%2FS4rSS1d5C%2Fb7iC0lS9%2FF369L%2Fu5KVId2H%2F%2Fvf0TlGqQUcZmY5O8dcUlOr6SyYVxQ9A5ZTlSXriWuIVHJnOZoWLmrKwRGY9C2Ng4Y8LnkQ7KQ9iYaGlPyvdmScAA5ExO7SFBZuhPBy0uIWW5gP6ePnHcG4V6wLeCD1eBU3B6KNmJHKpOWNqAX8c3xgbTjru5kUOURdcqp3W5aFswS9bJYky5%2FPMPg%2FfIPohBBwY2WXELLPjsa%2FjMLU1oTs%2FATEdAGYkls1jGG2l%2BE9%2BiCX9drEoAcrOYyuaWyepp8kp9w4LfdeddX2j83eKYpeuG1KKh%2BJRvNTFensmu0i3Mv5Wt6xfhsLG%2Fwufsvh5xtmiAHQUfACUdHfMo1E13z3BBh75SIbpzcj4%2BTGaCBz0LPONSRuXoKiUujQX5hk%2FCLvnYstoLduiUTsuPZwE%2F9EAAT8iAlr%2BMbVVHin4YjS%2BQtV7f1Lk3R210NEGrcc3gIFpGfwPAqfh6ne%2BftLrGMJfv1b4GOqUBYqSWo28Qb6umvJvVBHmY9KbEclSkcnQ8TTo1Qza7ci1jozTZgOJ3jFNqLEMnhvNbWsnOtgbgI3G%2FFpQ5hxqCgYOu0WFFN41Ds7iJV9mBrAzGCkF7DZchPdWwA5GiELpL7WK1FASU950JAATtovgJh9C5QTM5PEqHcbdqZArVveY9cnKDlxQVXCafWk5LVlUnOm9AiaO9SJUwCMXwoqkmj5J7cWW1&X-Amz-Signature=04e9b790ae47a01fb82cbc78e8dd88143f33967f500c6cc2cd01d4967629fa6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
