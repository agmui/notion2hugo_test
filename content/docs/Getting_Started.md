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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBW7NSX%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDet%2BgNO1wEz5yKGXCDYPz1cL82LYfMqo%2Fazdhp80YAiEAhOnQLfkhm1hHCqO4bErfasbNr1XlTNZbG%2B8rYlWrxGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKgout752SyCc0uxSrcA94GefpV%2BxMVOBSbgMr7Ssw5Jv3bdLw%2FCviEJDucFecu6lFMYgATOxXRd5ASWUM050jGqwnfp0DnUHReJ4d3ZgTH9V%2BXstBCpMo9Hk9ggaL3B8pDC%2BGN0QajXUlX5djLHr5rFP8mlWB9j%2FbEvjJuyDXu3NoyDKj6IK%2BIFCCt3hphAP29WpeZSL61sh4URE0GnW9Df7zJocbSVGhPi21Hr5O1q73GDvrnoM%2B7N5kb2u0QCwH4UCUzKgQZsQzbhwFyoTpV9M4vqfsHoXagHbbEI%2FB9%2FNijXoOXY%2BpIcugrlw4HXWNI%2Fa9PgznmxJ6UbGs8Qjesro1CA%2FmXw1NZsEeNcgjOsd58xTuqsctPg82KiiIrlCKNLmTncUNNhzOOYwTc6gsQUC8ZD5v41IL%2F1VcDkeegoGqyVSN8L5IvoE%2FxUce%2Bax4hFxAqXx%2BOuRpWbzfl%2FRA%2B55tsZbTYPaa8EJ84x2wtaIjEQWIuViGcnFjCnOMoaTyo9feNHiHxSjNJaqncqz8U8aYhR2%2FOlgDtKC07XvbE24oVQRMKOcAFVAr4pFAD54I%2BECgIIBsYZw94unEg%2FOJgFJ0BTvcMZJ5SSPj81VlZfZP9%2BLRk7EjRWxcm3F7xy1zZ2feNY56R7oGWMOnV18YGOqUBi1C8g%2FoT8ExrZB9YQHcoQSUUOi55TeVWmOcNBMWxpRrzcoeryt37VVEpPJDCHznWUYL7jqOEfqry3ya9ev4%2BvKbMBD%2BfGME3NYJ5WMmDOaJhUme4dmnqhnTw9lw4dqeDz%2FdGoB9nK17Ezlh%2BK7rp69JoI%2BAXCn8xJ2sb0PLAi2qGKb9s5M%2BDtq6jwmbzEBY3VTAOHSmMNKXGMTqpIpx0bwNmDh5J&X-Amz-Signature=9ca003750f7a5ae2034f32f3bbe7507f5e4486f75eb4586aee53ebbf8376cbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBW7NSX%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDet%2BgNO1wEz5yKGXCDYPz1cL82LYfMqo%2Fazdhp80YAiEAhOnQLfkhm1hHCqO4bErfasbNr1XlTNZbG%2B8rYlWrxGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKgout752SyCc0uxSrcA94GefpV%2BxMVOBSbgMr7Ssw5Jv3bdLw%2FCviEJDucFecu6lFMYgATOxXRd5ASWUM050jGqwnfp0DnUHReJ4d3ZgTH9V%2BXstBCpMo9Hk9ggaL3B8pDC%2BGN0QajXUlX5djLHr5rFP8mlWB9j%2FbEvjJuyDXu3NoyDKj6IK%2BIFCCt3hphAP29WpeZSL61sh4URE0GnW9Df7zJocbSVGhPi21Hr5O1q73GDvrnoM%2B7N5kb2u0QCwH4UCUzKgQZsQzbhwFyoTpV9M4vqfsHoXagHbbEI%2FB9%2FNijXoOXY%2BpIcugrlw4HXWNI%2Fa9PgznmxJ6UbGs8Qjesro1CA%2FmXw1NZsEeNcgjOsd58xTuqsctPg82KiiIrlCKNLmTncUNNhzOOYwTc6gsQUC8ZD5v41IL%2F1VcDkeegoGqyVSN8L5IvoE%2FxUce%2Bax4hFxAqXx%2BOuRpWbzfl%2FRA%2B55tsZbTYPaa8EJ84x2wtaIjEQWIuViGcnFjCnOMoaTyo9feNHiHxSjNJaqncqz8U8aYhR2%2FOlgDtKC07XvbE24oVQRMKOcAFVAr4pFAD54I%2BECgIIBsYZw94unEg%2FOJgFJ0BTvcMZJ5SSPj81VlZfZP9%2BLRk7EjRWxcm3F7xy1zZ2feNY56R7oGWMOnV18YGOqUBi1C8g%2FoT8ExrZB9YQHcoQSUUOi55TeVWmOcNBMWxpRrzcoeryt37VVEpPJDCHznWUYL7jqOEfqry3ya9ev4%2BvKbMBD%2BfGME3NYJ5WMmDOaJhUme4dmnqhnTw9lw4dqeDz%2FdGoB9nK17Ezlh%2BK7rp69JoI%2BAXCn8xJ2sb0PLAi2qGKb9s5M%2BDtq6jwmbzEBY3VTAOHSmMNKXGMTqpIpx0bwNmDh5J&X-Amz-Signature=f12ed3033677c062c34117f64e2a3136a42bd0b96c575fb374d50c2e911bf6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBW7NSX%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDet%2BgNO1wEz5yKGXCDYPz1cL82LYfMqo%2Fazdhp80YAiEAhOnQLfkhm1hHCqO4bErfasbNr1XlTNZbG%2B8rYlWrxGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKgout752SyCc0uxSrcA94GefpV%2BxMVOBSbgMr7Ssw5Jv3bdLw%2FCviEJDucFecu6lFMYgATOxXRd5ASWUM050jGqwnfp0DnUHReJ4d3ZgTH9V%2BXstBCpMo9Hk9ggaL3B8pDC%2BGN0QajXUlX5djLHr5rFP8mlWB9j%2FbEvjJuyDXu3NoyDKj6IK%2BIFCCt3hphAP29WpeZSL61sh4URE0GnW9Df7zJocbSVGhPi21Hr5O1q73GDvrnoM%2B7N5kb2u0QCwH4UCUzKgQZsQzbhwFyoTpV9M4vqfsHoXagHbbEI%2FB9%2FNijXoOXY%2BpIcugrlw4HXWNI%2Fa9PgznmxJ6UbGs8Qjesro1CA%2FmXw1NZsEeNcgjOsd58xTuqsctPg82KiiIrlCKNLmTncUNNhzOOYwTc6gsQUC8ZD5v41IL%2F1VcDkeegoGqyVSN8L5IvoE%2FxUce%2Bax4hFxAqXx%2BOuRpWbzfl%2FRA%2B55tsZbTYPaa8EJ84x2wtaIjEQWIuViGcnFjCnOMoaTyo9feNHiHxSjNJaqncqz8U8aYhR2%2FOlgDtKC07XvbE24oVQRMKOcAFVAr4pFAD54I%2BECgIIBsYZw94unEg%2FOJgFJ0BTvcMZJ5SSPj81VlZfZP9%2BLRk7EjRWxcm3F7xy1zZ2feNY56R7oGWMOnV18YGOqUBi1C8g%2FoT8ExrZB9YQHcoQSUUOi55TeVWmOcNBMWxpRrzcoeryt37VVEpPJDCHznWUYL7jqOEfqry3ya9ev4%2BvKbMBD%2BfGME3NYJ5WMmDOaJhUme4dmnqhnTw9lw4dqeDz%2FdGoB9nK17Ezlh%2BK7rp69JoI%2BAXCn8xJ2sb0PLAi2qGKb9s5M%2BDtq6jwmbzEBY3VTAOHSmMNKXGMTqpIpx0bwNmDh5J&X-Amz-Signature=9e89174ad82d93179258d9e9de8251fdfe3f008067ef1773b4768ccaef75bb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYXKEWS7%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxkWypyvCsRDQTWryLtEQaD4pws3Emivr2HYYFY%2F%2BllgIgTkRbVFWP3ci2MwCSU%2BGFrrytwAh3UKKNEDVMYNrS9uIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPKYfqfVq6DDM7vx5yrcA38%2Btadz%2BTkZEXfpqbN5EuUKcbwgvOWP%2FnmnPTV76CF55zBJj0VpfYwoNEYMsIJavMqx5ulkkGe4RYJoX5gdLVpqTMNLQ%2FdQfYSnBvo7K6z08f3Ih7cs4v8JOj4lxe6%2Br%2BduhS%2BTEmTrhuz%2FAAVIp%2FzRH4nfYOigzEuBLglsAMP9WGpIsqxtkWjF%2BDbP4USE2HfQOHxFRzpuT5X9h7OojPyywfJqQhHNc5wv5QWfEBYN7dePG8C8PzYGqdvkbYb2Vm4Kn4pTy2ZtHimo7%2BGIvgdy60bgTnfbA6KdGla%2BL9%2FiGAOQ9ySlUyjl7ZXeCF3%2FZEWEO%2FcweINasEqdfqYMnF7XflGzAs58M2Lg1ZW28EnOEZieeQTbV45XWu6k1ny2bI9hIZVVWqvX%2BIeVQFskuQOaauNiMUOugLgzXTtdd4CKWs771IMvavHu3YcdcHS0cOukfRqF7AzI%2F8VZfrn6SbmAZPIPzKaZNxodrM6IaNkSImNXdqGpZZbE92YajbWi%2Fi8BOyiSPNrqzd0dHKzOaG53CSQ7WAv53kF9IugKsbp10uzzJY0GTNk4SRZrXuKl44%2BCDZbBpMBcFJLEw77uybtzi9wP1HiU6ZfNScL8XpDjQY%2F0zGlUzXN8KfF8MIKo18YGOqUBXGZ9uqO6de94hW7fiNbzaGj0c31vv0QoU97Bt28sbD7%2Bu0Bmx9IhtarpOAbAIUcNfMj7IRFLabzD9DCPCI3a8NNbRXytAR8kt0EyYXHlL8wyP7uqP7lBTg3BBwRKHugd1jO5AIl1HREAHNLncHxZKSzZSd1Ga%2B%2Fm2EYmffGWUR12V4F0MldNecDtuE%2F2xwH%2F3gx4tm%2BHimuplLsQLKtOEIp05E30&X-Amz-Signature=22b4e7227ada778ea049da89b7383c9a3a4570c556beb60158981879cf674cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3BSW6T%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsl3Ul14Rj71ozcSHlb7XVinVQFWwSj3JX5pmv6bAhMAiEAikSTeiKrzTlWy6NqzxO53usSJZ0fW56k4x5QGa93mq0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbX2gzoGJcF6MvOWircAybFVJE4kVnnTcblho7ipKMwRJECFSQpiBTSnDrrSfRknnPmFNMNU02m5uXIJ5CPUBl2JbPk2Se7VbkfirjUtVGppMicMe9qlEFrArHgvj6jCB5qeDO7TtqmAJ06RcnLLDoPeN4mvSowpFpghzb82dMGAgXHn%2F3J6sE85567IoYJMhqj5C55fiKEZBh1FuhNrGTxeEOK3sTEM7fAskR2PvbypaUSyhVVK0UVsy8zqtzQwHBBFnHYZPYbf%2F0Q%2BpCz9S6ZI4USdRZuxya6%2BnGrlWjzlgOzsLQORBPIM0T4Hb6TeIPK1w1hF6rnUaer%2FhgwoAk0yeEAbjfOo%2FQw41o31hshkSc392YWNXavOIcJgt3jRO2Sh8RY1IdoCNykqgaN3NkgnM%2Fe089k6B3vOCb3BRyWpa5dYa9dPfSX3NHDUWJ9JXV90CMbwNV6eq4kFksiaNnnGcmIwik1GieQ65vsZ50jEa0iWgGW8GlW5KKbChoTe%2FL143Z%2BTpw6Uf2neuQUPbrWHDkGa3CbfCG0NEKTjHyJAv4o68RmuYP4HORqqLD4zvCliHUGmY8ITvsOJFELrbfESsWJZ8CwHMkGCpEB6pJ0kF8YWHOIOKvoMyx0ImwWMO1rDhTdehiJ8FEGMKyn18YGOqUBEEA4Wl3b0tknAubxrM%2BjKvHUyNSuJf0LXBZdhtqquQxPppqFaI0zJnY7R2F3KzZbh2CTabm6zfGNoFKlTsGVPDXdCbZtTVFS1s0Ldy5cvZr23CE67oHisGs4yCFHA%2BAmTpxlX9y34YJKHmnjJA%2FltB2ErrGe0j6urzrsn4ZmHfWRBw3cOqnnAwEsqFKEeSCnu6tcluq6jTr1pnU5CHtNQ91kEDPF&X-Amz-Signature=fc98ee30e5ccecad658825d57835d41159eddf70462667ebd0338cc559140bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GBW7NSX%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWDet%2BgNO1wEz5yKGXCDYPz1cL82LYfMqo%2Fazdhp80YAiEAhOnQLfkhm1hHCqO4bErfasbNr1XlTNZbG%2B8rYlWrxGMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKgout752SyCc0uxSrcA94GefpV%2BxMVOBSbgMr7Ssw5Jv3bdLw%2FCviEJDucFecu6lFMYgATOxXRd5ASWUM050jGqwnfp0DnUHReJ4d3ZgTH9V%2BXstBCpMo9Hk9ggaL3B8pDC%2BGN0QajXUlX5djLHr5rFP8mlWB9j%2FbEvjJuyDXu3NoyDKj6IK%2BIFCCt3hphAP29WpeZSL61sh4URE0GnW9Df7zJocbSVGhPi21Hr5O1q73GDvrnoM%2B7N5kb2u0QCwH4UCUzKgQZsQzbhwFyoTpV9M4vqfsHoXagHbbEI%2FB9%2FNijXoOXY%2BpIcugrlw4HXWNI%2Fa9PgznmxJ6UbGs8Qjesro1CA%2FmXw1NZsEeNcgjOsd58xTuqsctPg82KiiIrlCKNLmTncUNNhzOOYwTc6gsQUC8ZD5v41IL%2F1VcDkeegoGqyVSN8L5IvoE%2FxUce%2Bax4hFxAqXx%2BOuRpWbzfl%2FRA%2B55tsZbTYPaa8EJ84x2wtaIjEQWIuViGcnFjCnOMoaTyo9feNHiHxSjNJaqncqz8U8aYhR2%2FOlgDtKC07XvbE24oVQRMKOcAFVAr4pFAD54I%2BECgIIBsYZw94unEg%2FOJgFJ0BTvcMZJ5SSPj81VlZfZP9%2BLRk7EjRWxcm3F7xy1zZ2feNY56R7oGWMOnV18YGOqUBi1C8g%2FoT8ExrZB9YQHcoQSUUOi55TeVWmOcNBMWxpRrzcoeryt37VVEpPJDCHznWUYL7jqOEfqry3ya9ev4%2BvKbMBD%2BfGME3NYJ5WMmDOaJhUme4dmnqhnTw9lw4dqeDz%2FdGoB9nK17Ezlh%2BK7rp69JoI%2BAXCn8xJ2sb0PLAi2qGKb9s5M%2BDtq6jwmbzEBY3VTAOHSmMNKXGMTqpIpx0bwNmDh5J&X-Amz-Signature=0e460920ba08105948e5a3bedd5952b73714f8469e53b8210ee1743b44099cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
