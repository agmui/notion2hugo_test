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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MY5VDYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5w6U9H8fXAL%2BiX5WJazrJQukPgCDHa8Mcs9d6EnnjvAiEA29HfL3CjJLj6T9sHrgc8oyZPxMY0o%2BuSmmIWWyOyqOYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt8gN0SeVvrg1q34SrcA5pEQ2JkLguinDedT9D3hM2hIN%2FCRN0edTdgDDegHplzqu8cjKbl7ccAHj9OTqn1lzHBEHqrxOO2fgRqjUHwMNoyODnspbUdXUBogYFvmI2eFJiWUt5wKQf%2FgRVT3Lv1OOWS2%2BRf%2FGB7yMm6XcxZWbH6UCBSxmO7QE8ZZtqMy1NbJdPCHti8PnkPF02kHe16%2FWeAWs2j5CgEGE5xa5LxKerNdJSTisWChb5FYLhnK24hlkWmLb4zozWlg%2Fbn2KCPjdSfk7KHpguCIrJd%2BCdD4qESdKEXqXJoKNlEvVBXHthgxvCXjtwc6694Mb5Ho23rutgelIbkKPDmgIlqZrSy9LbB4obl4VUx7zUHYnN4o%2B%2BOgFvYWZKjMv%2FDSI8KCKGPBjv5r900wer5O43iXndxi80mPSQwp7Vod0XUZ%2BXmoJhCeDI8IRuTz9FYF08Tmx7eQD8kOwyQfkOsHa9%2FnkhtUxHUdUXVuEhWD1OkHjRmAJHLqIc3uc%2BgEWAp2iCVGQNh0hULVUMohGEfQXbwvLFVFpbei7rRhcsn6fVRO65t8zJ8EGTvKJo%2FM2v6lKx7w1JOj8lSaJwmNY09pdPZCr9XiwuB5PQY8DUYUy%2BGvY8Rc6MTVyUc8GiITus9bQOvMOXR2MkGOqUBM%2BdUirh2IBVrojeM%2BAiacPhtVJfYjln5ZxYfxWmRu5bwvkoUgiC2C%2Bjdz1GoRg8IJohRQT%2Bvwj1BIe%2BQLPZfrVTr31nFrle%2FDeeSOsnjlr9WjtjRf8dJYl%2FJKtsnssPpbMlwE6qLRi9tOxLipiIHOXEnu0KyIaoIHDJN%2FPTWwQZacXJxMZPptcfyTFgA4zlVmx4T0tnG5YsUwnfrs9u1NIeodIrH&X-Amz-Signature=0690560fb51afac725c32e3898fbc3c016ba87274b85698e0052ece88828b36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MY5VDYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5w6U9H8fXAL%2BiX5WJazrJQukPgCDHa8Mcs9d6EnnjvAiEA29HfL3CjJLj6T9sHrgc8oyZPxMY0o%2BuSmmIWWyOyqOYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt8gN0SeVvrg1q34SrcA5pEQ2JkLguinDedT9D3hM2hIN%2FCRN0edTdgDDegHplzqu8cjKbl7ccAHj9OTqn1lzHBEHqrxOO2fgRqjUHwMNoyODnspbUdXUBogYFvmI2eFJiWUt5wKQf%2FgRVT3Lv1OOWS2%2BRf%2FGB7yMm6XcxZWbH6UCBSxmO7QE8ZZtqMy1NbJdPCHti8PnkPF02kHe16%2FWeAWs2j5CgEGE5xa5LxKerNdJSTisWChb5FYLhnK24hlkWmLb4zozWlg%2Fbn2KCPjdSfk7KHpguCIrJd%2BCdD4qESdKEXqXJoKNlEvVBXHthgxvCXjtwc6694Mb5Ho23rutgelIbkKPDmgIlqZrSy9LbB4obl4VUx7zUHYnN4o%2B%2BOgFvYWZKjMv%2FDSI8KCKGPBjv5r900wer5O43iXndxi80mPSQwp7Vod0XUZ%2BXmoJhCeDI8IRuTz9FYF08Tmx7eQD8kOwyQfkOsHa9%2FnkhtUxHUdUXVuEhWD1OkHjRmAJHLqIc3uc%2BgEWAp2iCVGQNh0hULVUMohGEfQXbwvLFVFpbei7rRhcsn6fVRO65t8zJ8EGTvKJo%2FM2v6lKx7w1JOj8lSaJwmNY09pdPZCr9XiwuB5PQY8DUYUy%2BGvY8Rc6MTVyUc8GiITus9bQOvMOXR2MkGOqUBM%2BdUirh2IBVrojeM%2BAiacPhtVJfYjln5ZxYfxWmRu5bwvkoUgiC2C%2Bjdz1GoRg8IJohRQT%2Bvwj1BIe%2BQLPZfrVTr31nFrle%2FDeeSOsnjlr9WjtjRf8dJYl%2FJKtsnssPpbMlwE6qLRi9tOxLipiIHOXEnu0KyIaoIHDJN%2FPTWwQZacXJxMZPptcfyTFgA4zlVmx4T0tnG5YsUwnfrs9u1NIeodIrH&X-Amz-Signature=2cc8e2c5f148cd86403babefdd784e0927e581f91f0b03074e3cca426288781d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MY5VDYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5w6U9H8fXAL%2BiX5WJazrJQukPgCDHa8Mcs9d6EnnjvAiEA29HfL3CjJLj6T9sHrgc8oyZPxMY0o%2BuSmmIWWyOyqOYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt8gN0SeVvrg1q34SrcA5pEQ2JkLguinDedT9D3hM2hIN%2FCRN0edTdgDDegHplzqu8cjKbl7ccAHj9OTqn1lzHBEHqrxOO2fgRqjUHwMNoyODnspbUdXUBogYFvmI2eFJiWUt5wKQf%2FgRVT3Lv1OOWS2%2BRf%2FGB7yMm6XcxZWbH6UCBSxmO7QE8ZZtqMy1NbJdPCHti8PnkPF02kHe16%2FWeAWs2j5CgEGE5xa5LxKerNdJSTisWChb5FYLhnK24hlkWmLb4zozWlg%2Fbn2KCPjdSfk7KHpguCIrJd%2BCdD4qESdKEXqXJoKNlEvVBXHthgxvCXjtwc6694Mb5Ho23rutgelIbkKPDmgIlqZrSy9LbB4obl4VUx7zUHYnN4o%2B%2BOgFvYWZKjMv%2FDSI8KCKGPBjv5r900wer5O43iXndxi80mPSQwp7Vod0XUZ%2BXmoJhCeDI8IRuTz9FYF08Tmx7eQD8kOwyQfkOsHa9%2FnkhtUxHUdUXVuEhWD1OkHjRmAJHLqIc3uc%2BgEWAp2iCVGQNh0hULVUMohGEfQXbwvLFVFpbei7rRhcsn6fVRO65t8zJ8EGTvKJo%2FM2v6lKx7w1JOj8lSaJwmNY09pdPZCr9XiwuB5PQY8DUYUy%2BGvY8Rc6MTVyUc8GiITus9bQOvMOXR2MkGOqUBM%2BdUirh2IBVrojeM%2BAiacPhtVJfYjln5ZxYfxWmRu5bwvkoUgiC2C%2Bjdz1GoRg8IJohRQT%2Bvwj1BIe%2BQLPZfrVTr31nFrle%2FDeeSOsnjlr9WjtjRf8dJYl%2FJKtsnssPpbMlwE6qLRi9tOxLipiIHOXEnu0KyIaoIHDJN%2FPTWwQZacXJxMZPptcfyTFgA4zlVmx4T0tnG5YsUwnfrs9u1NIeodIrH&X-Amz-Signature=b78b121ff551c74e1547eef75d5063dcc02d85461c313b1a70953dd58dab0597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTGY5A43%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXbUOWmJ%2F9jNTKyWzl5%2FnB4og63GE94Q%2F1I4qvZU2OYAiEAsIeygzpJeeqElM4Sx1%2Fw7r9MxcouNTCBrK%2ByN77VOgMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqG6c5%2BWw5Wq6THeSrcA7IHSDmJQDhiXW88MiANVluVETLi1wDkFDcTR9we2uvQn%2FRQiE3%2FIhKRNqXJQmN8JGNPp8BlrfHSceVflyWyHD7slsfKgM6SzKO0HOtweIQWS8V97lluP%2BlwyMjO1OU7Sjvt6PwSjNur2oGV0yDJ60VzsBYTaGJXPqrl9qZXdewKBPbWdxITVgPzB69qJObWMujZ2aiEu7%2FrstBJ1SULX7zGZbPm%2F7QD7l6iTY69KtUnEEtXxQoajdD4roUBpwqtjjsBfKS7U6LPI9Bc0033lkpULlwUZNgieT2Gm3fgo3hmSparTyUcbNqF2FxXYHnTZlJdHJqD3wS2HI8iUQqQj775yDbb%2BP2mxv6TmBMv9PoJFirYXZESf4RAThdBLedUBysIal8PuecU1%2Fcw69y5kRuNvl2lYwB1XtBH%2B2V0vyNdfBa4gsEYELNk5%2FRoM4HMxw18B%2BwZFR%2BiDlh%2BoZLwgK9B66q1RpmWrEA%2BvRCwzHEWCIfpE5EV1WYkRvEyuLLIlDI9n%2BuQVcmnmyUfbiiq7m915gfw%2FvREbAayHao3SWiEa5%2Fw7NvY51hUFsJBDmiUc3wKqJQZvGvnp8NSlmeUc4441%2BidZO0r8aaEl8n2a2BWd7jQy42yIFPMqWmEMKzR2MkGOqUBNnd6R5mEhwGe%2BcwACZD6pK%2BUhylcOEx4nVSL1KXXS82Q%2FSXCU0JonDNTNM9KxgeBEuQtTvOJWelVIxesL%2F31Rz9M%2BQnYQpqqyotPq45xnTsmZiL94M48ZqKYHAwLZ0PbwJVZdeUdZ%2BisguqHokIWHdAvoXKHJ%2FFSTqmtU80BwQi5%2Botjht13RpY1FPWXxqeGlRqlGVmximG7fQfb63M4MYXm0FpL&X-Amz-Signature=fd0abcd552d8c284f36967daf7bfb503d4943f84f45ec1cc2a56db6cd3d8f26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y47SNQ7Z%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicPyHP5E%2FsEYsJh2x0MziYLHiSo%2FOfxVPXgqROLLsZgIhAIE0otT%2BFg2KJZsFOr7gm0BpBY1Off07uT8Kat7ui3IsKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBZXGimsyUTX6gM%2Fkq3AP4qp%2Fb0EyiRvWrWnhtdcJ%2By6TwfWqPkpr9DF1M%2BNA%2BLneUmQY12uHozj1xjUycYGVFgm1gYub3N%2BqIMqPEq12z8e%2FPv34%2FnVE44Y%2FFQapL1COe7Xatt5su9b0sirwG25ky6v5TKSikDFSbyxDbHjbkPvRu%2BHpo%2Fuj%2F5N%2BCetHkHEgooq9G%2BERXosDhs7PJ8EyTryYIyQF2g5wz7fXrsqUPKWDommPrqy0PmbBI%2FU%2BTEKr3chrsEgxL0IG61Ao%2BRmWExOE4N7fD0tgrlEmhXv2v12kkG68zQNkmxpKWxZcpGA7hj%2FoypGih54yMvKIyaP2XjDPgrL1ixwSdJsNn8Sh%2FkoH%2BPggdyf2lgnyVa7XJ2xvMp%2BktbgW6ln3GWa1wFxdpS1xTytKAjhq7W9gZSNqWQQ75GSM74OlTcBgwGQ8tDc%2BIYeQDz8pyoxOKavSUJi%2BTS%2FArBT0JzJiO2YOnHFprPyfyFQXuRy7DsyafmHPmCqiO7oLxA1yOs%2Bo66KA%2BC1cdp7%2BAKFcdiDV8L392EmugQsprLmMpEfQVkOkBYZ8qEAzA%2BEvrncQlDnCA3iP9stZagDENm5rS53KbvJ5fhTrQAxSTEWss9W%2F8Kak7mgzxiZXiJ98aTKftmCNMSDCi0tjJBjqkAbrM%2BL7LcsD3zFqrVcrWNbMqFRV4mcIW9IH9KmGFMkduFzClMr8CiMh2mDdIaYINBCCykejpFX0eWPI9Td29dEg66yaa2OUnVhJdR4YHeAc%2F8FreaHHyUttmxRM97Yy4KHDMXi%2BVe3kmZBJKT2g6Dw7E3hCGeuSDE9%2FsDjy64r7HWrtDmX6SOVrIvmThyTW3GC%2FosfW7%2B4IdWdFYFmdNLiwk71Q5&X-Amz-Signature=405a62c180c7f61c8e7a852c2705ff5e0af91f5582980dc2121fe209e76f8c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MY5VDYL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC5w6U9H8fXAL%2BiX5WJazrJQukPgCDHa8Mcs9d6EnnjvAiEA29HfL3CjJLj6T9sHrgc8oyZPxMY0o%2BuSmmIWWyOyqOYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt8gN0SeVvrg1q34SrcA5pEQ2JkLguinDedT9D3hM2hIN%2FCRN0edTdgDDegHplzqu8cjKbl7ccAHj9OTqn1lzHBEHqrxOO2fgRqjUHwMNoyODnspbUdXUBogYFvmI2eFJiWUt5wKQf%2FgRVT3Lv1OOWS2%2BRf%2FGB7yMm6XcxZWbH6UCBSxmO7QE8ZZtqMy1NbJdPCHti8PnkPF02kHe16%2FWeAWs2j5CgEGE5xa5LxKerNdJSTisWChb5FYLhnK24hlkWmLb4zozWlg%2Fbn2KCPjdSfk7KHpguCIrJd%2BCdD4qESdKEXqXJoKNlEvVBXHthgxvCXjtwc6694Mb5Ho23rutgelIbkKPDmgIlqZrSy9LbB4obl4VUx7zUHYnN4o%2B%2BOgFvYWZKjMv%2FDSI8KCKGPBjv5r900wer5O43iXndxi80mPSQwp7Vod0XUZ%2BXmoJhCeDI8IRuTz9FYF08Tmx7eQD8kOwyQfkOsHa9%2FnkhtUxHUdUXVuEhWD1OkHjRmAJHLqIc3uc%2BgEWAp2iCVGQNh0hULVUMohGEfQXbwvLFVFpbei7rRhcsn6fVRO65t8zJ8EGTvKJo%2FM2v6lKx7w1JOj8lSaJwmNY09pdPZCr9XiwuB5PQY8DUYUy%2BGvY8Rc6MTVyUc8GiITus9bQOvMOXR2MkGOqUBM%2BdUirh2IBVrojeM%2BAiacPhtVJfYjln5ZxYfxWmRu5bwvkoUgiC2C%2Bjdz1GoRg8IJohRQT%2Bvwj1BIe%2BQLPZfrVTr31nFrle%2FDeeSOsnjlr9WjtjRf8dJYl%2FJKtsnssPpbMlwE6qLRi9tOxLipiIHOXEnu0KyIaoIHDJN%2FPTWwQZacXJxMZPptcfyTFgA4zlVmx4T0tnG5YsUwnfrs9u1NIeodIrH&X-Amz-Signature=398f0d0d3bafd980309d90214081b035788b5af7a268a720933148d05cdcc4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
