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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIS3LZ3I%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB9BnaMBcfAVFyipwkAzKT8z%2Bp6Cqv%2Bk9R8XJbDC5nk%2BAiEA9fsPI12G%2FnI1WPx9vSJOmwAeoEpFKlVIcMF75ZsLfBQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjjd3U8iqeu9Joo%2BCrcA96NJ3Mi1RkRaQzNTP8NCGdBurpJiOE%2FpU%2BJ%2BExxSfvrTzgeER4y0i1lT1tTfKGwc4X0SDFYN4igXJPfBjIzVa3pRe%2B1tKJbzpw3cp1XufkKwHfLU4xrrMwGzYWs1AmHd1s1ufpvy4USCv4VRb8K%2FahMBGLwHEhG65TKfJkLTfexUkPLk6HAG9SOAdxTyKWDrWwb8vVF07HxRwqGliekpOXMDFB1UKt8VRpQYoqSC%2BdX17g4%2BqL%2Bho6YgpCqYZ8lav8Trgj05uXzmuQbC6BYNJsrcuInQYTCBAn4PXt80WP8tRUKs3vSNoNvQCb6qY0J8%2BebJjuitLeExwG3AWzKwlpjhLOuGVs%2Fgr7N%2B93thlZZWLQlqiv9zjfG0prjjr9fJBAqGB46wa83Ad%2Bg2tM5yLnprv%2BNToTil5aUH0mzG6H%2BjtvvNB7KYnUeU3v6mA%2Fxu%2F5AdckGZuJ7GQJoLl8PM8eoFjpIfrUkabfPxXvqkQcypEW1yAUZCq2pJlaKxJbdFKcL9kXW6TsEhrtcNLpsM7GXyhW0Grh39gyMSVxj62JvpK%2F3fMF3Hh8i2V9vsDppFMv8xW82JaIz9vCJoXn1rv53h%2FNlHpA7JdFL2BLYt1SC9%2F2%2B0Itg%2BABRexUsMJSGp78GOqUBSGmhpPyELeKqUX44wumohP3OomMZpqC5kaREEnpJzFuXvxRLb10%2BKfSBIqbsXnFa3M4xqL65e2wPy53bd28RCQ%2BjrrvCnsOf%2Bo6Rd%2FgCWBn9tJa7Y0c7J27roUQD9AvTF4eHD0ydan3KCMYZY04WNryaUfE2zMULjvyShODGWhXejaUmdAz5uR71JO44O%2FrVdt3wcAQj9btnSBrwKJjlXMr3Pmc9&X-Amz-Signature=34fbd29ee1ebf44fa82c42eba26e46727c4c30f708549b4e6364b85ecfb5f4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIS3LZ3I%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB9BnaMBcfAVFyipwkAzKT8z%2Bp6Cqv%2Bk9R8XJbDC5nk%2BAiEA9fsPI12G%2FnI1WPx9vSJOmwAeoEpFKlVIcMF75ZsLfBQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjjd3U8iqeu9Joo%2BCrcA96NJ3Mi1RkRaQzNTP8NCGdBurpJiOE%2FpU%2BJ%2BExxSfvrTzgeER4y0i1lT1tTfKGwc4X0SDFYN4igXJPfBjIzVa3pRe%2B1tKJbzpw3cp1XufkKwHfLU4xrrMwGzYWs1AmHd1s1ufpvy4USCv4VRb8K%2FahMBGLwHEhG65TKfJkLTfexUkPLk6HAG9SOAdxTyKWDrWwb8vVF07HxRwqGliekpOXMDFB1UKt8VRpQYoqSC%2BdX17g4%2BqL%2Bho6YgpCqYZ8lav8Trgj05uXzmuQbC6BYNJsrcuInQYTCBAn4PXt80WP8tRUKs3vSNoNvQCb6qY0J8%2BebJjuitLeExwG3AWzKwlpjhLOuGVs%2Fgr7N%2B93thlZZWLQlqiv9zjfG0prjjr9fJBAqGB46wa83Ad%2Bg2tM5yLnprv%2BNToTil5aUH0mzG6H%2BjtvvNB7KYnUeU3v6mA%2Fxu%2F5AdckGZuJ7GQJoLl8PM8eoFjpIfrUkabfPxXvqkQcypEW1yAUZCq2pJlaKxJbdFKcL9kXW6TsEhrtcNLpsM7GXyhW0Grh39gyMSVxj62JvpK%2F3fMF3Hh8i2V9vsDppFMv8xW82JaIz9vCJoXn1rv53h%2FNlHpA7JdFL2BLYt1SC9%2F2%2B0Itg%2BABRexUsMJSGp78GOqUBSGmhpPyELeKqUX44wumohP3OomMZpqC5kaREEnpJzFuXvxRLb10%2BKfSBIqbsXnFa3M4xqL65e2wPy53bd28RCQ%2BjrrvCnsOf%2Bo6Rd%2FgCWBn9tJa7Y0c7J27roUQD9AvTF4eHD0ydan3KCMYZY04WNryaUfE2zMULjvyShODGWhXejaUmdAz5uR71JO44O%2FrVdt3wcAQj9btnSBrwKJjlXMr3Pmc9&X-Amz-Signature=513963d8654260c2755aeff2d5ee322f925b3af3cb0e05d8018356f99459161e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T56TUG25%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDtkwKuzi33shzbIDH%2Boz1xiBL%2BfgO48HcXbtVclS0eoAIgWA9Xq0wea2Zzv%2BWBayd2CBt1eDK7%2B%2FRalUzTalec2WwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbiwBQ7b1v2ihh4gyrcAzdXtkpEHIs3JSxWxxcg2n7WKW%2FXeg0hGIMjVMtWm4oMPTxIwJKmDNhUjY451alth8MI4CJcFBIuICO4y5i6%2F603YhSSrM0ihQL2iQSO3oTu21%2Fub%2BXujDyf3vaU%2FckIT9mXzRN6vgwS59b6Ex6HK9B8dfSi%2Fz4jaWFAEVnnnLiMbCTsOGIErEWm68S5COQ%2B8JaUS9BSkniwkcnkyPkqdY2l0WjqVX0ZaQgH53pk4TcpzVRWa4W687%2BhIkGcPqAsSgd2YXY8a6ocmXS4Lsoj%2BVaRnP0VuDv16nkWCW6Y5PkEVJ4zfXNYP15EZicuq0Y0amgjZvCXUrHB9iSprJMpgyF%2BxHgQpWe2di52MCz6B3gLJAniMBBOjyVePCO6RN10amb7lChGyzbqXvqwnvCvfjfcOtVcKkm2TfBToTwH6k2PUzF0DZqPlUo%2FhCX2XmFR0MLPrLNZoErR7g3BPSynyfV9tpegBP1lfe36JyifIEROhvFpyoyDm8XJI8mDAr6Hu7AmvgZc4pnzzM%2FXpSfC0BeIBS9SFw26GsV6YEekZe4Ihzkh2JbprTv%2BvzBkePNrIFmtIdFlc6eyuSyubS790xw%2FpM%2FylsaYKmjRR8ZUlRdvKz7njNXUgVkAsU1dMJiGp78GOqUByGsa5TqLRObub2rbJR6fM5U3dcvaFIvg1xgwbNYkP5BlxOnYgZjCpzQIunRESR6RxoCqdSvLM7PjlH3bRWqV4UzsTGCSIRP3dLl0fU8%2B0HeVsCUu7lgUaJ9Ifma8c%2Focmm%2FhVpWptBoMIrlS%2FqVMcc1zwgNP8bsj0sXFKN79ZVo3uJvsxL47iUVtw0LkshaJYxOxN1DG4RErlfLQaQduR0lJ0bA%2F&X-Amz-Signature=57a85b8b8b08169862fa3369d04a6a4713dd3a892d51219bcb8e67a736bf771a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEHBXHZ4%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFlJveceOJLbCkq4YfobTS6%2BhqHZjVnd1mo92kC8g7mEAiEA%2Bd8U0fPrpiooKNdO5s2fD0HvuvjgTlxsaloiOiU9DiYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzAwuy8XtictSeoHyrcA9NhGo%2BXwFaspjRZQ7egYU0IDR3gnRhVKrtNtZgeI7U3a8gGtYh1kjaAewUlretjhf%2FBVSMMYYUApy1hb85tKqw0fAWwCBNEVw1d8EJFOsZPatXpjTS7ekrqKYoJDqqjEOEEiLzPzR6wTBGz2V%2FphxcPZedWD8eKAyUB1YzEpsD%2FLkYl%2BxLh10u9az8H%2FIXZ2MWdAW%2F%2BAVbYTBpwUsEHcINAclsig76wc%2F%2FBpq8YW1ydD2LGTJt1Ph5ANWUyKSa4L2fIyeRddXKYjU%2B19VrJijJdzaoykg32D5Z9ihI4L5Dj3WM6kXSWlhv5m2YA5AGz0XvRbbcZFkR1vUkezdjtxaaK7KE403XG%2FCdIYvuVJSoyC%2Fw2%2Fny2wK1ZbegYeg5HSm48y%2Bj2lfBXE4mzIx6t8BSsesNVJq0Olgrd5omcL%2FaaskbJ%2BYOHr982CWxEvDyO9%2FfnRxqL75Px1loOW1cCmKSm0B2f2TCTHV%2Fz5zLxliMQqFUec1LjXCvU0vQ4pe3nUuXhZRR3kT4%2FHvWn6XG0mqVUBzwvAuW35kQJKVkj55Y84g5ARRDAlFRD6846Hs0eZmQ1PJpi%2BqpZVabqccR167%2FFZTlCY2Vu5g4PpRuGlIH3IDe6FNjRoZt7QPkyMJGGp78GOqUBqZT7IOcVLHAzYLXmF2lUGvqbIJPRaK3yr4bl0ken30r0LIIRf14rNYItPe%2BiWv4d0CrV5CytnL2dVa4yPJ7fq1ZvlYWh2H4ia%2FyQ7g6XzrxAr7FHV8AyWPNqDNTuAT1Ju4YKjrfxDh7cVn5G7o%2BZzS%2FipW7j8gp6vF9K0wmXyhTJOF4k69GjVBEydTigXccesFnWIeX0um03fjsoqvO%2BMadjhanB&X-Amz-Signature=7db8d670a6bc15d46fb3285ea33203fde56fa9b1f9cb07696d1e15b58ceab6a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIS3LZ3I%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB9BnaMBcfAVFyipwkAzKT8z%2Bp6Cqv%2Bk9R8XJbDC5nk%2BAiEA9fsPI12G%2FnI1WPx9vSJOmwAeoEpFKlVIcMF75ZsLfBQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjjd3U8iqeu9Joo%2BCrcA96NJ3Mi1RkRaQzNTP8NCGdBurpJiOE%2FpU%2BJ%2BExxSfvrTzgeER4y0i1lT1tTfKGwc4X0SDFYN4igXJPfBjIzVa3pRe%2B1tKJbzpw3cp1XufkKwHfLU4xrrMwGzYWs1AmHd1s1ufpvy4USCv4VRb8K%2FahMBGLwHEhG65TKfJkLTfexUkPLk6HAG9SOAdxTyKWDrWwb8vVF07HxRwqGliekpOXMDFB1UKt8VRpQYoqSC%2BdX17g4%2BqL%2Bho6YgpCqYZ8lav8Trgj05uXzmuQbC6BYNJsrcuInQYTCBAn4PXt80WP8tRUKs3vSNoNvQCb6qY0J8%2BebJjuitLeExwG3AWzKwlpjhLOuGVs%2Fgr7N%2B93thlZZWLQlqiv9zjfG0prjjr9fJBAqGB46wa83Ad%2Bg2tM5yLnprv%2BNToTil5aUH0mzG6H%2BjtvvNB7KYnUeU3v6mA%2Fxu%2F5AdckGZuJ7GQJoLl8PM8eoFjpIfrUkabfPxXvqkQcypEW1yAUZCq2pJlaKxJbdFKcL9kXW6TsEhrtcNLpsM7GXyhW0Grh39gyMSVxj62JvpK%2F3fMF3Hh8i2V9vsDppFMv8xW82JaIz9vCJoXn1rv53h%2FNlHpA7JdFL2BLYt1SC9%2F2%2B0Itg%2BABRexUsMJSGp78GOqUBSGmhpPyELeKqUX44wumohP3OomMZpqC5kaREEnpJzFuXvxRLb10%2BKfSBIqbsXnFa3M4xqL65e2wPy53bd28RCQ%2BjrrvCnsOf%2Bo6Rd%2FgCWBn9tJa7Y0c7J27roUQD9AvTF4eHD0ydan3KCMYZY04WNryaUfE2zMULjvyShODGWhXejaUmdAz5uR71JO44O%2FrVdt3wcAQj9btnSBrwKJjlXMr3Pmc9&X-Amz-Signature=adfb627162bd3c11d8ebbe2fd31ae09458d829589e6bee6bafbdfe102945b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
