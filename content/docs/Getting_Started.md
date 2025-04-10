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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAX7CVR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFhPQtFrzRc3xsLiWZ8rHAiIBOti1LzmFEEi8avhmD%2BuAiEAt9vQbVQYVavuUxmJp8gjIpLWfElRXwGYCgYwmRvVlN0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4OiBveP1nk7nEj2ircAx5imesSUJLsBQkqu33mvtXb3%2F70q5%2BnCos4ztGJsrO1IaH2qMA1zl5JT4mQN%2Bqk7ckRexhceqwgMx0y93kthzCs6Yw%2B1vWPnBZTNv4qRLbNNM19RIQ0omIOxadVzAB1uPk%2FH1gbR5AygGzki8wCCvv8yKwU1GTK4iBQoXr0NDgCkB8rsx5n%2F0QjH2XSgIsU9s9TpbnPpmcYFdi28GEpTk1lJIZQM72plBQaHxa9QbBhNQuxfvisYse%2Fj0D9DICAqKCblMOhD3%2BbqIAk1BW6O4qGLDOooodXrI1DFpmOopxPiQR84ysQTQyhSOMQceC0bkb%2Fexoy0jyA%2BCJjUqD2X3AogMSyR8CGimqbqe0bWqvSy5MQuVcFcW%2BOciEM2aPPYErPzj6ORjQauOVTKlTMyGugYMyJCPB5%2BP80qTdyBYXD9Mxenl64uMl64eW%2BDc4UHqhNNw%2B4%2B%2BJMqITQUD%2BQa%2F9gqtzBbcpgPhyWgZVWXIW%2FSYlrVA78R4Phlg%2FEgBVpXpZy%2B0fU1G3Oawk%2BH0aLqhTdOjNSoj8Uu7snNQ2Y2qlYy3kOO0wrAPh%2BcgDxK7Mv6jGpN1Fle2WNdXp46Ro%2FbpOoARLykuPf6Qg%2BR54ZdYEMLvixy1WVFYq1h7xZMKGh4L8GOqUBJwCZv45YRJmpjKwU%2B0G9utOtZOZx3DdXFi0TayHKxre%2FAuE9KjODLBbWERdDIGdL97INaBfqFjydAp89paLjLRuENkYihlnSSHCyeJsfTmwptqDiHiOG3gw%2Ft%2FmcdBPCeJ2frSi7yzj6x2iKUi5CJv1rG83wV5Zw4rXQLqwsDRp8IwgYXmcfoEqIys%2FzFmzCTgXzfs0a4lQMIb%2FLLwvZtHpytBb%2F&X-Amz-Signature=cc852977f08902ce4acf8caf451a44665ca55fbc57253a6b9ff42bf1a401ea4d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAX7CVR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFhPQtFrzRc3xsLiWZ8rHAiIBOti1LzmFEEi8avhmD%2BuAiEAt9vQbVQYVavuUxmJp8gjIpLWfElRXwGYCgYwmRvVlN0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4OiBveP1nk7nEj2ircAx5imesSUJLsBQkqu33mvtXb3%2F70q5%2BnCos4ztGJsrO1IaH2qMA1zl5JT4mQN%2Bqk7ckRexhceqwgMx0y93kthzCs6Yw%2B1vWPnBZTNv4qRLbNNM19RIQ0omIOxadVzAB1uPk%2FH1gbR5AygGzki8wCCvv8yKwU1GTK4iBQoXr0NDgCkB8rsx5n%2F0QjH2XSgIsU9s9TpbnPpmcYFdi28GEpTk1lJIZQM72plBQaHxa9QbBhNQuxfvisYse%2Fj0D9DICAqKCblMOhD3%2BbqIAk1BW6O4qGLDOooodXrI1DFpmOopxPiQR84ysQTQyhSOMQceC0bkb%2Fexoy0jyA%2BCJjUqD2X3AogMSyR8CGimqbqe0bWqvSy5MQuVcFcW%2BOciEM2aPPYErPzj6ORjQauOVTKlTMyGugYMyJCPB5%2BP80qTdyBYXD9Mxenl64uMl64eW%2BDc4UHqhNNw%2B4%2B%2BJMqITQUD%2BQa%2F9gqtzBbcpgPhyWgZVWXIW%2FSYlrVA78R4Phlg%2FEgBVpXpZy%2B0fU1G3Oawk%2BH0aLqhTdOjNSoj8Uu7snNQ2Y2qlYy3kOO0wrAPh%2BcgDxK7Mv6jGpN1Fle2WNdXp46Ro%2FbpOoARLykuPf6Qg%2BR54ZdYEMLvixy1WVFYq1h7xZMKGh4L8GOqUBJwCZv45YRJmpjKwU%2B0G9utOtZOZx3DdXFi0TayHKxre%2FAuE9KjODLBbWERdDIGdL97INaBfqFjydAp89paLjLRuENkYihlnSSHCyeJsfTmwptqDiHiOG3gw%2Ft%2FmcdBPCeJ2frSi7yzj6x2iKUi5CJv1rG83wV5Zw4rXQLqwsDRp8IwgYXmcfoEqIys%2FzFmzCTgXzfs0a4lQMIb%2FLLwvZtHpytBb%2F&X-Amz-Signature=d2d90b7858f45b6b651a9cafc772953476201c27c730fdc15c6c5abdbf339779&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNSDZIS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQDXGosguVPaMV8KdU6J8DburnEHUi2aL0RXPRmUBUvOuQIgCM%2B%2BS2hKt84MXIRP4%2BX8fR%2BM8UQUPS2N%2FLoIOkL%2FxHgqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP96%2Bgay4rWcpJSFlyrcA3Ubt%2B4Tpyb%2BCA3H4embOF1woyKRTWU1NhWldEdYMuQsk0MpfCSG1cjdqVgHHLUV%2Fca%2FI6WwmHqH4h%2Fb2M9B%2FaZQW23sLMk%2BKNHQvRui%2BbNAK0gTCjefiE9SWgNEJ0rtbWJ3rXS6xXSkFfeMgl8sgyxitU207%2Ff3oASbmWaTSQwZ4Ll1MZdP%2FYk4N%2BUB4znYxxxHV4lN0HJVtynvuYIpAbxNiTJUi5JTynt%2Bg3n47SCFquDzC5k3jOqYT4AHCwkQPgtClRgVf0O21s8zxjUoBJ2iRT0blshiy%2BE0u%2B%2Fm%2FEey2s3gr0QfgwenzAkntDq7QaqDyStMEFpI0lHuPfDjyyu9e6azW0ibdbwhFzQiZQUWUPgwkyegji%2Fl%2B0cDz7BoTIMy3cc8bnDtiM8Do7q3y%2BjzHN97Ub2ie7Dqv8rlqiwB3jqtS%2BMcbTpcThJO3vQtto%2BfsPwXzhVcEVuhcgGFRljBe35UhMMXmpb0UFHrW4uFXxzkCsyQ%2BgZzCXZ4u3XO%2FKlEJqfSF%2Bl5M2fOUfXOyxZdlpfBE1WjSQv3o6YmECUNOsHNxkR%2FA9h2qlahjfO%2B%2FmM8De%2BCsSIjkX0o1gmFFA5tkSrTbuRzEcjLUrkhIqVU20qOc6k5Sx9D1DB7MIWh4L8GOqUBSM3UNv6e%2Bqyh36lNVdpIvlCB4RnYSEJQiI6wgG54ulIexbxYr9wz51ObTl0VlmOWq5dGqH9Y%2BTuXy7geaFkI9gxJpNPYFuictm2sWoYNm80lAEcBl4dnRcTF0v8jZGVRHoo5Vv16Fo3ridWLFxui1J3GfqnZ7Z64ViYTtGCvB52Drde3nkwKNmuOCfTURUDZDgDVQcyAbeGKCoTt2pkaq9%2BXkx%2Bz&X-Amz-Signature=d79b4fa838b7024bba92d11c373e4b5eb64f478cf9ba2b265462331cc62ad5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XVAGAUK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDjfbtpvJwetHrIZVsaTWpKUJBGbhGkccT6hnvDwqNdiAIhAJp1q%2F392FP2cjhzW%2F0rMboSG4qj%2Fk%2B2dO1LiI30oRIBKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKlvc4UXSTeZa23Roq3ANKbvTkb39aKgNabaF%2F0HjpWbVhi%2B7672yaZ%2FgdIKMpd8Ja0ZB1E5tCEiw5b2LgJcdf%2FOmlQ56Ii5iRWNG3IetftgUsVFQx4GYNQpgiK2S2y2rrVOf23yANCPpRaBDYD2Y0%2BY2%2BrAMWxn4ulyGunbGtdtE0qg%2FXBldoBY5Dvep2gydrRZe5IjdD38rwq57N9GsaqRTDFEZisyhKOIZRR1diEdg%2FeUfCf%2FcLeEd9yS6bJwo%2Bco%2BXLoXvYJY6Ws3w55m3JbVQNFuiGtS1uQeGCB0Y9RIuhDN7%2Fxxl1L1X3j5R8ePHq3XQR2TI6YFLVZhpLFOaq4ZJ5Y%2FMA%2BYkBbwR7lVEkYiqcHQti9JFVWYcdVHsaWpd0MfksnIXkVdMCJXxaqLW6wuyxAKErMoHgWbyXY%2FPGAGRZyyhyGdj6Nhd2gqC4VzrOWWSIuQimLVQSVv0%2BfL1zWMqRbaErw2IwR7%2FqD9PfenMYVjluEtUcFjJg0KtIy9Xlrw%2B9WWTDbBrnxTMRExkI%2FzUkpHKucxzja8%2FPlwV4%2BSMp2o4BOBGIxsScMWs3cJrEnPTpenF4wH8u8jloAIRv9hqzb%2BgfmHgHiTfOx22AJiL2WMCe0CPyJarGIQ7pNyKa0C5Vjzzc6WP%2FTDhoOC%2FBjqkAc4yE2x%2F7HOusmsZ9jMHKQQUFNBH5bWXcuz2lYiGtjoElE1ufFCj41JQKpUMLvrlZQvdr7AVk8gVNc%2BHt0RnzKc3uW3XOw%2BVAMQey3KqjK5Wj52lmihkoOzDpht3IRMEb2KGqMBFNI5xzXUx1e23JeVJc8ltkhllJs6ZWvUhLba5EWRYYlyKanvCEa7ReYjRdsQqKOXU9V1qd8vhmEO4dNzxidWU&X-Amz-Signature=c968e722d71c7b36d131a084b80509a5b49a1623f293914bc5bd15b68e406c34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGAX7CVR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T190511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIFhPQtFrzRc3xsLiWZ8rHAiIBOti1LzmFEEi8avhmD%2BuAiEAt9vQbVQYVavuUxmJp8gjIpLWfElRXwGYCgYwmRvVlN0qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4OiBveP1nk7nEj2ircAx5imesSUJLsBQkqu33mvtXb3%2F70q5%2BnCos4ztGJsrO1IaH2qMA1zl5JT4mQN%2Bqk7ckRexhceqwgMx0y93kthzCs6Yw%2B1vWPnBZTNv4qRLbNNM19RIQ0omIOxadVzAB1uPk%2FH1gbR5AygGzki8wCCvv8yKwU1GTK4iBQoXr0NDgCkB8rsx5n%2F0QjH2XSgIsU9s9TpbnPpmcYFdi28GEpTk1lJIZQM72plBQaHxa9QbBhNQuxfvisYse%2Fj0D9DICAqKCblMOhD3%2BbqIAk1BW6O4qGLDOooodXrI1DFpmOopxPiQR84ysQTQyhSOMQceC0bkb%2Fexoy0jyA%2BCJjUqD2X3AogMSyR8CGimqbqe0bWqvSy5MQuVcFcW%2BOciEM2aPPYErPzj6ORjQauOVTKlTMyGugYMyJCPB5%2BP80qTdyBYXD9Mxenl64uMl64eW%2BDc4UHqhNNw%2B4%2B%2BJMqITQUD%2BQa%2F9gqtzBbcpgPhyWgZVWXIW%2FSYlrVA78R4Phlg%2FEgBVpXpZy%2B0fU1G3Oawk%2BH0aLqhTdOjNSoj8Uu7snNQ2Y2qlYy3kOO0wrAPh%2BcgDxK7Mv6jGpN1Fle2WNdXp46Ro%2FbpOoARLykuPf6Qg%2BR54ZdYEMLvixy1WVFYq1h7xZMKGh4L8GOqUBJwCZv45YRJmpjKwU%2B0G9utOtZOZx3DdXFi0TayHKxre%2FAuE9KjODLBbWERdDIGdL97INaBfqFjydAp89paLjLRuENkYihlnSSHCyeJsfTmwptqDiHiOG3gw%2Ft%2FmcdBPCeJ2frSi7yzj6x2iKUi5CJv1rG83wV5Zw4rXQLqwsDRp8IwgYXmcfoEqIys%2FzFmzCTgXzfs0a4lQMIb%2FLLwvZtHpytBb%2F&X-Amz-Signature=3957f4325f6fe1b7d71cee6ebebd2d55a54a97e175495c1531d8fe9fe6fc383c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
