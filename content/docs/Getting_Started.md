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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=c67dd231a6899006f54d0c7a1740ccdab8d3f342fb4995181ef6a9f974bf7f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=05502fd96117e2688b08f430adc5240e8fedb58a163f9fe7d350c5e2a1df423e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=f9dfd77acc9b0d59ba3455d91aaa5ec33aa2e2800404e94076d42f4e9965f091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TR3MU2T%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDBRPE858pgOAdC5dX%2Bq3uV91yVtVUvHfq%2BAVZauDMS7wIhAOMgRxn%2FHHJR9Ab21qH5e1iutbII9OiNgp6j8ke0iaBqKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfxoq50IgpbQUreTIq3APjB5s9N5i8VgMwl5z86WMqNv8FwpGrem0Iy0ELmF9GZRxDepMPfA6QScQO3KCOeP5rB16KI53hylr5lw6REgf4dBGtNhHJmb6mdtgEPBjEteeWQhRJSOO8cxXLEfdlom%2FPf%2FBwZvXZeBu0k6UaQwUfY47vtthMXuC1402qcl536ooH236hbCNG4TW0e1IcyaAiFHS2l7rGteLBv2IIcE1V0IZDJqL32aY79WQ7SvUC7zLEglSYoSMtjUbPy89JvKGxKqXVzpFvypixt9evaMsL1hj3Rt3M5Ix7VMoJj%2BUSrKghEkQhnEiK0lii8c7DkHEZ4vHEgFGAK5vvN0Gk%2BcKTzmheltYGDk8VYGoWIsSa8WPEHqdVLQtI0bj%2BjCfQEGZWroxg2oYI%2BagMHlL5WBhDm%2Bu5tRUVima45DdpII6hz%2BivFl3yTE7itVEnOw7%2Bxij1TGrxldOM9Mn7hGMgZky%2FEvHKVKKNMfTa50h1kRwqJOeKZRgh6WNmpDenioPRmuR7lV%2Bm3Q25Q82GzZKhor%2FwJYAHMF%2BFklzXzr9%2Bpu70XXQxLF3BKmlAFC%2BarMBYqomHsivpOjZfVFSE1v5gQ0mGszwrAafzFa633qfIe5zQmTzUEwnhqyYlSDwn5TCkgLjGBjqkAb0A9xVGwO1FDDSpWabRVBI0G2%2F%2BKCT1WoqMJegENC7he1z6bdt1R8T%2FMI3383l1qhuXhJR9bWuh%2FTr3LrP5m%2BzKzg5ugX0DCYPTxtKd8xbMnFRo0vVFHdXR69CH2nIpQu7bHOSa%2F1kzuF4WfPfDQPDivWS26jIVSNsUWeTIsatxnsUHtLocgQ9WklbPr6ttaIwKlJwR1%2Bt9pEafqsgAOG4ol0%2Fo&X-Amz-Signature=7429300ac878d0da0311130471753c017d089c5abcc346e3dffad9a9edac1354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GHNJ4LA%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCNnXmPjVSR%2FrK9SV9sKppR2VaB18Sq3hjzS19bCoD7SwIgMH2YI1akM4pkSjpHxFURczbrvmVJW4VFW%2BsoSiD1OqwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxTcnj4KyZkuURG9ircAwTmmAXmFYZm9Quhug2M9zsObo9e46k253DO06C16paHrFy%2F6tLQ1uz65xH3XaZOFe6mtAS19kJxEBIc1hk3B8YlB%2F7RgvoEASbRZlBEUqY75ywzOCtyO217i0JJ2j33g7POsHBZTWiT5Iw4MqMp1%2Fqf45F8%2BZXOMUsV1sTxys%2F2eh6%2FR8iv1Nw02TYkJ%2FadSKSmJ8C%2FTnYdKQ87avjyV%2BsyrjdHpvV2%2FEw%2FOZdGWzfyRclSWcfFjAlSF7ClDznaA3HCk4f05oW706CktrURVpcj%2BC11HqxzIkI30jrfF1fOwq%2FTn147qPt2LdnwAeoSpVVCVIhHaSkU65gKjInNcDuy56s1wIet%2BS8iTohrlk4KrPGUlXoRn62kPIeUPKlGHzwCw9rCWcj3ImVEF8zYnrSfKDFwWJLtgarbacQ7G4NuBxTdCzxinCa8AIETsjgtWpJ5YRi682KXOU3ImOdCX8Tn1cvuGqnxRE5dJsVVKHu56vuMais7oR7DHe0EAYLISos5%2FT3riX4ZVAxYFVhGPrubebiUTdLxKPOarJQ9tWFZo31CIkyWTYSGm%2FXb%2BUWJQsPxoGiFj7FN7rYl73HvI0aWkE90Wa268jf6maVxtIfeifqO1fnSyNmNEOyzMOT%2Ft8YGOqUBxXwlrE3VpWbJDZJur%2F6qCcA4AKT9uD5yHUKcQO0HDStg%2Fd%2Fe6EwkhzfgAf8CFCWodu9ApTnJF8LLowYMp2vVW2c88MVnullA1bE0jvXDtbXwwM6uH5gclkZlz37Dq4c4l69gKORk%2FvkOy6Ts4mROWpINKdqutngV2jmA%2BYo2%2FcAaC3kpNHXKXSX7zg%2Bu6KR5udZyZ0k7dKY3wjv%2BL7XbrFHhr9i1&X-Amz-Signature=e3474571d8b3dc1897a99056ff447bd1fde7b3260b0a1c63dae05c13ae7b8a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JBANSJN%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDCSfTzwGPw0PhptlWNa%2FVh2HNtm33uwcCs0nDaoHP2sAIgJzeOyecj1QdlG%2BruWQpBflf9s8HGzYxuEYhkoxVai8oqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLs%2B9X2VTJtQAmyf0SrcA8bd0bMW9PjoDIbk2bB%2FhTa94xbLqDqokX1NE9ePNZOoJv1Lc%2F0FmrUiYGRa6oJd49Nw9GRpFUiHMGN5POAbuHNH%2FjsyDOZ5rgFsextcFSo9hPZTgD63WO0rL9HgJRXseCMuBJ%2FaPouxsZsKfBWeAulwsjsKBO0FFhLaO2cxQqMsfg%2FICqsXxHV5siC8P1VLi2gdR%2BDGuGn52tzI0K4RKAFA4XPcGAAEUHkHPh4dsARRg1MpRX2m%2BrGcyc5b2OYQS38rd0en65Zamal%2Fz0ZQ9CjDYW8hHvlQdJOzAVjZrlMU9XzpSLIOS4CoJ7ZLcojxxszcyOFrBJ%2FR8m1N%2Bemy%2FNIUh6P5bdbf4ZAQ2JR9HoNJsrfCM02XB700SB7w%2Ff%2FoNkj6JtHRbx2RKB5ATjhFiOl1Z7EcfuunyMCtdzazYUCpQbSEuODEpW2JM3LUJ7%2FiSYv%2B2HK9VUumPeVaBVwFFKGzw6flxQRkfVzCC5lKDdsRrDg9DbopBqkkx%2BdIrgbwpG3luzIPZiENUPknsMgYpUWqc%2BR8%2Fv5nflnA3UXS%2FdwnmwDwkCZC10%2Bk74mtzxMYH73htRnyIkC9%2FgG9aK%2BRF2Vp%2F9a0seIyMfsbOTvEfJUJdcVccFJQTClc9pbGMMP%2Ft8YGOqUBTNZrl9gB7wvaAStj5BUbUD%2Bch5%2BgF0E2P%2FO9c4dU2ezHyv8SdCNBhaxxYSyzG6qpFRuMldzIM090AeRKQnryfGca%2BRYw%2BVnlBJuZ7IjGzMdd322ScxBca%2FRmsir4I64hdfAZsjxqpEmcC%2FgxKbvcaLQnq6AFt4FLroqtRoYL9ozY9tgCMY37kLCPKa9ZhInxjprmJxxep5IOaNVvpZ4qISgY%2ForZ&X-Amz-Signature=f22347beb2b7e71015927eb2dce992286613d789e54ebe3bb5a531577a2207c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
