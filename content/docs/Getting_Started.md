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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAWRV7D%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8HblDM%2Bx8JNV0ICXABwgo9UZvsg6aYZSOZuZJXgj1OAiABYLMDYvl%2BBsi0t9xXd3bpzGvzhFwW2PRD24B604X%2FZyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMrZIz1r5elYQ41ECcKtwD%2BIVLEDcScEiRQhfRPbtNmzTzzJOgD8U3nl1UZYdpmYNw8u2Pn%2F2jFOo4olQcUdiFoQ3oWEICnXdUtfTXfVhumFEJaZQgvLM7F5Nc3SzHwqv2kaNLKloFvQBcPWpBU0ZfhPvJDEgayEaMo8vGL4hWjUUFAIwPoSJKC1hBcOhIjAjYryq1pQjSyG42fXKhAn3k%2FmBXiPTi%2BQWxwrLkFcslA%2FRVj48srOcMlOrQAKfEXqalpMoWCm%2FPe44Ci5cfTQdx%2FvXv8LPh7By3gXg7lMsVZYZPmYUGTaryYTrWfQK%2FwpzxPzkmPfoHm2o1zrEGhGSPPzcUbT5im0Hiph%2BeWha%2BkCoMrU5SzxWC3GljXmrQ9l6G2lT8G2ct4RxWKwtvCSwsjyOVc%2B37anO3v6gfvJviQDg6AnGOqXBoKs%2F7F%2FzDTGo%2FePdfMwBI7gQi76iRxlvk0hNxWLq7j%2FIRKiX%2BuQg56oAhhDQ7Pfldr5D9Vo5L0u3ugJCN7V4dijzPhjZ40xALN4yYwOpxVpFVGShZglT5ydabQP7IQjGVPQeiCg8LoO5FSp%2BMuf4jEj%2FjKipN2vDbdUsrPXrXXlcV95QpGCDjoD7efZ62O%2FA47mtqN5jl7HozhTyW6w%2FKBhjTWQQwg96HwAY6pgHbr69DmADEhTi%2BYogU11MRs1yp%2FZEJAWD0aYOTQiileWz9XOftP%2FSgOb3G3MYFB3heOv2aQsT3nRvSR1Kuj8VZ2udJO0cwoDXGpWT%2B6Hqu0kNbWMQVnm30LaCnppPSPFtJ%2BzH1wNH7V183op15kgKHanoi7LmQcYAs0untCHHRlYXYtlIGvhaSeZ6ENlPScg28t0g8UFJzoIwRPveGxC%2BmGOdumTDJ&X-Amz-Signature=0142f0b3a6490f4392de9f24bacdaf4e09a58c8ef6cc11678c642600eb6c4d57&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAWRV7D%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8HblDM%2Bx8JNV0ICXABwgo9UZvsg6aYZSOZuZJXgj1OAiABYLMDYvl%2BBsi0t9xXd3bpzGvzhFwW2PRD24B604X%2FZyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMrZIz1r5elYQ41ECcKtwD%2BIVLEDcScEiRQhfRPbtNmzTzzJOgD8U3nl1UZYdpmYNw8u2Pn%2F2jFOo4olQcUdiFoQ3oWEICnXdUtfTXfVhumFEJaZQgvLM7F5Nc3SzHwqv2kaNLKloFvQBcPWpBU0ZfhPvJDEgayEaMo8vGL4hWjUUFAIwPoSJKC1hBcOhIjAjYryq1pQjSyG42fXKhAn3k%2FmBXiPTi%2BQWxwrLkFcslA%2FRVj48srOcMlOrQAKfEXqalpMoWCm%2FPe44Ci5cfTQdx%2FvXv8LPh7By3gXg7lMsVZYZPmYUGTaryYTrWfQK%2FwpzxPzkmPfoHm2o1zrEGhGSPPzcUbT5im0Hiph%2BeWha%2BkCoMrU5SzxWC3GljXmrQ9l6G2lT8G2ct4RxWKwtvCSwsjyOVc%2B37anO3v6gfvJviQDg6AnGOqXBoKs%2F7F%2FzDTGo%2FePdfMwBI7gQi76iRxlvk0hNxWLq7j%2FIRKiX%2BuQg56oAhhDQ7Pfldr5D9Vo5L0u3ugJCN7V4dijzPhjZ40xALN4yYwOpxVpFVGShZglT5ydabQP7IQjGVPQeiCg8LoO5FSp%2BMuf4jEj%2FjKipN2vDbdUsrPXrXXlcV95QpGCDjoD7efZ62O%2FA47mtqN5jl7HozhTyW6w%2FKBhjTWQQwg96HwAY6pgHbr69DmADEhTi%2BYogU11MRs1yp%2FZEJAWD0aYOTQiileWz9XOftP%2FSgOb3G3MYFB3heOv2aQsT3nRvSR1Kuj8VZ2udJO0cwoDXGpWT%2B6Hqu0kNbWMQVnm30LaCnppPSPFtJ%2BzH1wNH7V183op15kgKHanoi7LmQcYAs0untCHHRlYXYtlIGvhaSeZ6ENlPScg28t0g8UFJzoIwRPveGxC%2BmGOdumTDJ&X-Amz-Signature=c95e230cafaf71bf3325457d866783c07b4fd5dd61fcc3a486353921d416d9c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP6PB6RD%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrIHnBoUojsdPOg854C4VTwS%2FgMET%2F3uBQPC09lrzchAiEAgAv5hbOhSBTN7YTW9PaNzXj%2BX2wTtfZ7Ggg%2FkfwebG4q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOIA0wtPSEtJMLAI6yrcA0D%2FLKgrJfmjy7uBiEbyFRT2ZLA%2FRFK3CBTO%2Bn3R6n8n6o0Cx7AhzEQfkYW9u686kF2ZWTARjd3h7iebWMr%2B6VWKKh6ZsyQxj1OPHPwtXkFqL0yIBYcAxOuCn3z%2B3GZ%2B5N7CrNVETJSMPTMfGQv%2B4CMjbtCLQWj53tA%2B0CmGvdneHDIWxiPaJHeUCXApfTeaLdGw3icCt9ROpWfWXhmH%2F2CIDJSe63tyZA5y8lWw0i8RbgcMrLX9DVeyWVJ5qXKXzzfO%2BgbLEHPEwHqclhrtMeN2pygJessbaTz0zSx2LEI9z4jCvdnJqwaY1vqcHpBwOg%2FqAkD66WXl5LsJmAwTjSFj7Gq3KzjQBloPU7VVF61DqHtdDhpLio3z2Kkdav2a6nEG1aJEuIguLrGlBoWRVkiB6t7DIckSIlc9HAFSmqZx5n86o3va2a8q%2Bk6tQ1PgyRcue5%2FRvVWTXc9V1URCP7%2Bm9WWgRhrEoYbdK8M4FYHm6N5Rt2NazOCtO4kGne%2F1r9DmfdnC2TmSbgmoe3qYDD2fBJSgh%2FFq7P23m9b37jky1MKOVcrFl%2FHDNLw6x0%2B2DLTZzdQTM03LzmySVkl%2Flu9ZxFT5eXEKyaSFdRr9ZWZpRtomNNXJk3%2BuZvnlMIjeh8AGOqUB9HQcRbee69rcCZDCIvxe9T2A9QdEF4m%2FXJaqzwXcFICjHd0Y1S9j1KQRB0L27oggMfCwJbDJyoWhkDI35n%2FzgtBoq0qYdAxTvp4aiku64YjEVTkUFJwV%2BNrGjZ9Tetpv1cdjO%2FVtwxoFzBvHjJC4dDi7c5MsNyFKn4oatOf%2Bqe%2Fvqbfs5%2FCTP0%2Fwcuw6qQBlb9P7tSmbsq22e93UuHsh76CS%2FQ1v&X-Amz-Signature=eed4125fe19ad3324bc4a6c60084a9262d52de13bf88d63dd073e3b4ce2a19c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNG2VNF%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWJjp2DEgPEvYzLYkTDCeYhIaMfbj3SPWAtEc83ZgVrQIgAqxnqsoGWk4Oy5g%2BR%2FzYXJFnPzvkED1MD7F3zYOFLAUq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDO8wEswDghsUNxqBXSrcA6mtGgFynlSi3SEuqPjYQZWk%2BUOWrP36sD%2BbyCOobAKhGGRAeHqSzgce4zJopihenVUBFQRFZt1yW79LX7OevFuAnR8K4vBbdC%2BjswHu9z1VKa5pvoK%2BJprFUw%2FasC2gTcr0MgLyY6xm2cD9wVMnp6yvtd5R2cMeBR1TnRSfTd4uKUaMXTpUnKxVtk5%2FhA9ZdPDnO4sT1oLU%2BqrpyLlOrXDgsHIV8X95nzmWljLQc4u2KqA%2BzgshQz1mJdNrJYCLNiqLNbc5LLX%2BAiYWLKFUP%2FJU%2FVT3qNiWaQvt8OOGn7zBuwzHZxFxjHQQpuexG%2BnR1fna5%2BBKwevagOaKlA47hfcAP4ODIRJpAyOJgoYnlc9Yg6cioqd5CbNk6CQ2tQN4HYaUSEL4X0wv3SEGBdvkENEbNgq3d852G%2BmR216BElEwnQsrw7C8%2FjRHcjSvtLdEMOhgJAygeYNcY6oIqWgfziKgF9HAEFn8tjaelGHjXHjdZQd26WKLDSHESAzi6vGDxLQFlXlaz00lzy1tCV7IzGQqXUqUt%2B36pnI%2BA1SWjLZXSshILzzjFI%2FWBT%2FNM%2FiYS8v46lYcejcO9oDGyxZfI6G9Vk29a7vK5pdfASYjltpXPmClqDf%2BlBoiC9P4MP%2Fdh8AGOqUB4%2F90enB2kGQnYw7jGQRJNk%2BTTBOzGuhvqaNrKduu3%2BIIyoVhEHgfVtnhIEpBUm3jzQCbJbyJIkHYLJeXUHpN9%2BuFNkd6Lm09wt767UJEIDSaUcdECPXvy4c1VM4Xfsl6F1uSAV8%2FatjnSPvD6NeMQi2aM3iXpN%2FtVnYPrRbt4W5cafslVTmPamRC%2Buew1%2BtO7sWYeZJ6O%2BjqPkp6gWiPuyo%2Bx1Ka&X-Amz-Signature=f3f50d60b898a0965f0b4c94301ff0d75ccd84ccaa94570d9686c676cd8d762a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHAWRV7D%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T070847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8HblDM%2Bx8JNV0ICXABwgo9UZvsg6aYZSOZuZJXgj1OAiABYLMDYvl%2BBsi0t9xXd3bpzGvzhFwW2PRD24B604X%2FZyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMrZIz1r5elYQ41ECcKtwD%2BIVLEDcScEiRQhfRPbtNmzTzzJOgD8U3nl1UZYdpmYNw8u2Pn%2F2jFOo4olQcUdiFoQ3oWEICnXdUtfTXfVhumFEJaZQgvLM7F5Nc3SzHwqv2kaNLKloFvQBcPWpBU0ZfhPvJDEgayEaMo8vGL4hWjUUFAIwPoSJKC1hBcOhIjAjYryq1pQjSyG42fXKhAn3k%2FmBXiPTi%2BQWxwrLkFcslA%2FRVj48srOcMlOrQAKfEXqalpMoWCm%2FPe44Ci5cfTQdx%2FvXv8LPh7By3gXg7lMsVZYZPmYUGTaryYTrWfQK%2FwpzxPzkmPfoHm2o1zrEGhGSPPzcUbT5im0Hiph%2BeWha%2BkCoMrU5SzxWC3GljXmrQ9l6G2lT8G2ct4RxWKwtvCSwsjyOVc%2B37anO3v6gfvJviQDg6AnGOqXBoKs%2F7F%2FzDTGo%2FePdfMwBI7gQi76iRxlvk0hNxWLq7j%2FIRKiX%2BuQg56oAhhDQ7Pfldr5D9Vo5L0u3ugJCN7V4dijzPhjZ40xALN4yYwOpxVpFVGShZglT5ydabQP7IQjGVPQeiCg8LoO5FSp%2BMuf4jEj%2FjKipN2vDbdUsrPXrXXlcV95QpGCDjoD7efZ62O%2FA47mtqN5jl7HozhTyW6w%2FKBhjTWQQwg96HwAY6pgHbr69DmADEhTi%2BYogU11MRs1yp%2FZEJAWD0aYOTQiileWz9XOftP%2FSgOb3G3MYFB3heOv2aQsT3nRvSR1Kuj8VZ2udJO0cwoDXGpWT%2B6Hqu0kNbWMQVnm30LaCnppPSPFtJ%2BzH1wNH7V183op15kgKHanoi7LmQcYAs0untCHHRlYXYtlIGvhaSeZ6ENlPScg28t0g8UFJzoIwRPveGxC%2BmGOdumTDJ&X-Amz-Signature=3f6f97e3834e50a1e565aefeee9b8025cabf8bd7635e96d3184f735ab8c88165&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
