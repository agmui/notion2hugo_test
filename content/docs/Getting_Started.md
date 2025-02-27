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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUW77XD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD1FxyGsrzzMzXQpEhw0AZsSjoFm2W6VoSUTuU%2FnOOb4AIhAKFYqcDbyOPewvkOedeGtYMsadTW7%2FkTRowmdfY1Her3Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwhvC73tVYxJDV1Jogq3AP2xcvQF4jKBKktLfq8NtGUbtceKsD4AhjGgv5aChCuqiX%2F2ReCINuCcJCXr5q%2BlSpWzfh%2B%2B7n2eEQnUMrUmjlrVccrTNO7eB0TsBWAiOl4o2Jgjj86yXS0dDP2xEpsSxkw4JvsWS7PGDOod1umLYtGorAl7iMsgG5aRhvgI%2BtUNt8ButR99VfcLw0qtei4I1qGiNC6S%2BJ781YZneLmuP%2BtSE8U670gaF22xvwdOk%2FFOBzNR9gSeG9WLsNXYMA627fhMp%2FQsQQYWqgLi3zy2tIGQ21kCAwYWITq6C6fgc0LMt9kOzRUa8gC1sLBzQoEuSlgiIF5f51S%2FwM8W6x48kRH%2BDIAvxxqT6R%2BS02M4qDkUNVVLIMpAiDUXTNuXUMzLlwDoFC%2FGvZEAair4%2FkXaol%2Bsam2DSmiGepsBmdNB51sZm02tcFInbWCcJVvSj2HnjeHaV8hWI3X9ZFMsqYiTgrjINhkzHkkz3SB0lMjH6ZE%2F%2FEGOlm75Q5qiZSlR%2B5%2BZJMTz7lb44yDNcTvEavoyseL1JTia%2BTkKiDfplpGX3nCkaxOsmheSxQvmQD1%2BTOdlx9K2jHJUzLzR8w4zDnvpA2A13XOzlgRBagst6xAlLtCAgAY9%2BUO%2BqW92QXI3jCU7YG%2BBjqkAclIs9eA85QWo%2Blo9ONzxDqhqLERdJH0lhPYse%2BkEpsoCr24ZyOmTR6wKC7k%2Fts26BvZqARyQuyxsO7yKmjvZl7omDnMexU0ISWSP6h%2Ftqpi4dWWEp3YBrXqZ4m6Y3efSVJqhJTcRkm%2FlySVQT7ClESbV5zUD5cn7%2FCJ6G52DrJjnMnkigrx9621t%2BiQpr%2BQIfyxdBQIFmzgDBzz0%2F3i52n6xG%2Bd&X-Amz-Signature=345f9aea241b1d738c65ed28d61499e01d290b2dae01d7ba66daa1179d30e8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUW77XD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD1FxyGsrzzMzXQpEhw0AZsSjoFm2W6VoSUTuU%2FnOOb4AIhAKFYqcDbyOPewvkOedeGtYMsadTW7%2FkTRowmdfY1Her3Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwhvC73tVYxJDV1Jogq3AP2xcvQF4jKBKktLfq8NtGUbtceKsD4AhjGgv5aChCuqiX%2F2ReCINuCcJCXr5q%2BlSpWzfh%2B%2B7n2eEQnUMrUmjlrVccrTNO7eB0TsBWAiOl4o2Jgjj86yXS0dDP2xEpsSxkw4JvsWS7PGDOod1umLYtGorAl7iMsgG5aRhvgI%2BtUNt8ButR99VfcLw0qtei4I1qGiNC6S%2BJ781YZneLmuP%2BtSE8U670gaF22xvwdOk%2FFOBzNR9gSeG9WLsNXYMA627fhMp%2FQsQQYWqgLi3zy2tIGQ21kCAwYWITq6C6fgc0LMt9kOzRUa8gC1sLBzQoEuSlgiIF5f51S%2FwM8W6x48kRH%2BDIAvxxqT6R%2BS02M4qDkUNVVLIMpAiDUXTNuXUMzLlwDoFC%2FGvZEAair4%2FkXaol%2Bsam2DSmiGepsBmdNB51sZm02tcFInbWCcJVvSj2HnjeHaV8hWI3X9ZFMsqYiTgrjINhkzHkkz3SB0lMjH6ZE%2F%2FEGOlm75Q5qiZSlR%2B5%2BZJMTz7lb44yDNcTvEavoyseL1JTia%2BTkKiDfplpGX3nCkaxOsmheSxQvmQD1%2BTOdlx9K2jHJUzLzR8w4zDnvpA2A13XOzlgRBagst6xAlLtCAgAY9%2BUO%2BqW92QXI3jCU7YG%2BBjqkAclIs9eA85QWo%2Blo9ONzxDqhqLERdJH0lhPYse%2BkEpsoCr24ZyOmTR6wKC7k%2Fts26BvZqARyQuyxsO7yKmjvZl7omDnMexU0ISWSP6h%2Ftqpi4dWWEp3YBrXqZ4m6Y3efSVJqhJTcRkm%2FlySVQT7ClESbV5zUD5cn7%2FCJ6G52DrJjnMnkigrx9621t%2BiQpr%2BQIfyxdBQIFmzgDBzz0%2F3i52n6xG%2Bd&X-Amz-Signature=5a2dc89ab8e5e983ab49a015d3e7a2b042b85fe8082c061bebf62fa41a61e210&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFJIU2B%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCPJFq3XDyb3il6IJ%2FgXcSTr%2BchmVyPctJ6MU85NHReRwIhALDpoqRwcuVaOi2D90vJGYi3tAlrpyYspAgD5m5rOiyPKv8DCHgQABoMNjM3NDIzMTgzODA1Igxl4O3YZ7A%2BEWJzUHgq3AM6oMEie%2Fi0fYjxVz8nMgKKrCGfvs5nMx9jGyur6ER4vUMsvI38HGZkHPIc60sOXgH0ar5myZeKcj156tuEQ9xqajJ2in%2FEZQDRm8Nd2PtdlPA1GPskZT5sTzaTszCxKl6xwQm4XGudKul3d7RnS5NbvqWCdI97BAroe7mCh0bXKIkXRShqEkp7wnvOWjXznEY7XTFkSspC7pVHLz9WUWA4b9QIcIYkIS42%2BxYNcOpQRFVmOEGcoGTW70sIYuKlEJMzDrjB1RQFIs5II6xCHlm0VQor8U9QjKQzZnrr0sSS2P%2FEMcfgjMj1n%2BYdA6Q%2FjqHC%2Brh3lO3t8l0y7zcRJpp0UqZ4%2FcW2IZdCgqTauo1bL39THUcoorzuZqOkJcNaXJErNk0D0b0UiG%2BiqcZSb7B%2FhxiYtaMIfq4YRyr%2FnrTefclKRJjXMg33JXaShYnk%2BinYpXM%2FuWpCKxJ%2BpYTCp7y1x6TOsu6qcT2%2B4a3Qs3Cxixjgr5ORmMX5H8mQKsRtBIWQG%2BmZtmj1lXcvzvYIxacs0rr%2FRR%2Bmo%2BdRM0HzpDFhptcdi0JsV58j%2BVOOincKgljA5OpyTHFk%2F%2BlB%2FHKw6WK1M3tdfe3ZHu%2FeyJivNVJUlXmNQ4iyx5ZvR4X1lTCA7YG%2BBjqkAWlcMN6BfmUtl%2BarMn5aL1J07pr%2Bqcf9zz20EgC48feiUOiUi5FNKIxLrx3TYXraPfKVkdxKZwCA5sMlXglc%2BRKAmADPeSjiv8ezyXvOJ%2FraIy4UwjgDz5%2BM%2FcwB%2Fh1pYVtQKdH9zt9BPhf4%2FVtsH0OnyHjLedORRxSPF7JXY73OahN6SKWE44cD3DhZcbhFpaRjw5AXtHJ9VSWIQe51TZ1ruqDa&X-Amz-Signature=450d8de728306737c697da5549af25511cd3db2de518a5e3442b569ee73ff58c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RI47XX6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB21e%2F0k0uFW2yH4ru4L0NlQG4RsdqnR05WEriLE5rQjAiEA6Or6fQCJKVFyeXH10qTaj3%2FU4lDUXxYuW9NsDSUjtPgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNaL%2FHYTWxEjQn5dLSrcA4BWDV7yV3F2d%2BpqgM4rn%2BESLQQKDf04fb%2BnzTyggsaJI0XkU%2BUntslMfZuae48BABBbJXM7TiVnSTMaIDcE9NYCMgnkzwXLkg28Dz4oreA0fB1hh3Zc%2FvMt71KUuYfHbmyH2Ac5LzJi1UVfohPMz%2FuchU9elknHl82nEIE4Hxv5JYv3s7TYMlpA32V9%2FgO2eGlpqfp5m3O1DkZKi52XmvQue8WZBbgW48k%2Fo0X2WYFCqZ0%2FP%2BL73uaIC%2BhddfsjQPDj3QDlgQhb0RymdIhC%2BQxv3QSh7I06Gmsq8M3XpnveG%2FND39Rx4cgn2IXOtMQLwXqPY1EPRf4W%2FGF%2Felcez1uUypI%2BJlaon6zItNo%2FeYugpuo4dNp00Fjg3jzCKitMkODcM1frbr12O2AtFD%2BI7D5cIk9x3HAUPrlwZW0ZN9rEkugLHcuPiBduALmjDiC27O2%2FdWRNU06w7jQyDKCuPM05vt%2BRC12UIgXDmiPiaOeiNMLx5EVu2NwQjRe%2B0ZYJVZ7f63%2FX6X%2B2ta%2B8m8a6fpdkmXLOuOl1FCKsdHLVhjoSnZ8%2FnCkRN8EZrQolS6hVEb48AAeR2DjQFwjPgS3%2FOM5db%2BFqnR7MDIFjJmoFA01fFlwF2buGswXudSV1MJftgb4GOqUBBh9Ky4OoIpCL%2F%2BjKD2oXihRIa3%2FXcJDLHAnsBOvkmdJAZ%2Fby535WYA2MxOhYKbDPLboLKQWXhdcTN8OPSzx9ocVk11IouuKUz6GJJ7%2BOdP%2FvnNm10WqgXkOhlflwvvRW3OjNMtkJtmxH2fhUsxhC83eeM5Yz6q7D9iJe%2B8O7joiolkJYoZ83xxdfah1P6HthQAM48%2B9yEhAY1EmvPZZPTWL%2FYh7E&X-Amz-Signature=462f887742481856f5ac505c653f0d48645d6dcb6c3e7a0354ec9fe2e14bdf94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKUW77XD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD1FxyGsrzzMzXQpEhw0AZsSjoFm2W6VoSUTuU%2FnOOb4AIhAKFYqcDbyOPewvkOedeGtYMsadTW7%2FkTRowmdfY1Her3Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwhvC73tVYxJDV1Jogq3AP2xcvQF4jKBKktLfq8NtGUbtceKsD4AhjGgv5aChCuqiX%2F2ReCINuCcJCXr5q%2BlSpWzfh%2B%2B7n2eEQnUMrUmjlrVccrTNO7eB0TsBWAiOl4o2Jgjj86yXS0dDP2xEpsSxkw4JvsWS7PGDOod1umLYtGorAl7iMsgG5aRhvgI%2BtUNt8ButR99VfcLw0qtei4I1qGiNC6S%2BJ781YZneLmuP%2BtSE8U670gaF22xvwdOk%2FFOBzNR9gSeG9WLsNXYMA627fhMp%2FQsQQYWqgLi3zy2tIGQ21kCAwYWITq6C6fgc0LMt9kOzRUa8gC1sLBzQoEuSlgiIF5f51S%2FwM8W6x48kRH%2BDIAvxxqT6R%2BS02M4qDkUNVVLIMpAiDUXTNuXUMzLlwDoFC%2FGvZEAair4%2FkXaol%2Bsam2DSmiGepsBmdNB51sZm02tcFInbWCcJVvSj2HnjeHaV8hWI3X9ZFMsqYiTgrjINhkzHkkz3SB0lMjH6ZE%2F%2FEGOlm75Q5qiZSlR%2B5%2BZJMTz7lb44yDNcTvEavoyseL1JTia%2BTkKiDfplpGX3nCkaxOsmheSxQvmQD1%2BTOdlx9K2jHJUzLzR8w4zDnvpA2A13XOzlgRBagst6xAlLtCAgAY9%2BUO%2BqW92QXI3jCU7YG%2BBjqkAclIs9eA85QWo%2Blo9ONzxDqhqLERdJH0lhPYse%2BkEpsoCr24ZyOmTR6wKC7k%2Fts26BvZqARyQuyxsO7yKmjvZl7omDnMexU0ISWSP6h%2Ftqpi4dWWEp3YBrXqZ4m6Y3efSVJqhJTcRkm%2FlySVQT7ClESbV5zUD5cn7%2FCJ6G52DrJjnMnkigrx9621t%2BiQpr%2BQIfyxdBQIFmzgDBzz0%2F3i52n6xG%2Bd&X-Amz-Signature=6b1419322d8c928f4cf667235b5794d751c1db24d9be2164a5e6a03d85d6d7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
