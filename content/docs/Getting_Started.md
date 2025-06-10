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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43UYYFD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBVkhMxtVoJhN2I7mVRM0WuF5ZZh4RgiwnAdRMY1xb5AiAE%2FAuVLqlgjzqaV%2FqxPVwr7ia%2FvZr9toOPfz%2FCENcQLyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirdSR2rN2xfo4zIoKtwD0RDS9%2Fdk2zBsJ7YjsAeuJ87QbFqadU6gxy3J36aKE1r0XAZVzJXQ98XaaJEUdmbDS5OGAvB17A148bLNinL8ixLvwv1EoYTxf%2B0CVwdJw27WAHzxg%2BxRREsELqgrjm65nF4ENvAxB4058XfdOguPi0oBAVTz4ctLHNCBhS8ZZIRFfq1%2FFsKB4b7wns6FYMOJlMaVr8BBZE5kMk8OD%2B2qzN0RrpfdackvuAi8KYVyav0eniie1kpjacDvgGqXr3O99SJko0hfMidIHMGUFFg4cTkK71pgkN4U4H1v0r658CVaEAEUcTavsDFb4hcEiAi7qcCkBeCPD5WWrTKaLnVwyzN8exBxPqZZdc%2FcwWoOl5ar91kVuQAXEEtzzHENH3FDpR6ayoXes8oqfLEOHxWUwI6M3HXwfIxbmT9mC8Xf4YpYxnvGUaDCPh%2FoBH%2FxqGEutVudE1QeMw6KUyd0V%2BW3%2Bm%2BPOE9J9G2UxWzJ3lGsjPcQbMs50njQCUfnN2utR4o1iFRFWP02dGGVLPK2mqSUUlQvyYombswBFACZjxJD0STMl5voMsHszzFTVysV%2B6bNygoz5lmbciY9JuvlTrryknTB8fmUAX%2FPC%2FtI%2BpuQcviQxkLLZayJzL6st9wwsd%2BfwgY6pgGAY56br%2FXOgPWwOFvYVSeh0i9lx3x25RsS5i8lB2N1ERLs8uK8DSSxBEqFPqo%2BvHVElvs4NSPU8ugGOB%2FqFx%2B1%2FbTA%2BqzJnHq4oQV2A6xaVYtOTy18iAATEVULSH4IFL7%2F%2FzUX5V9HCo0MuHI9%2FEcn2gJDvq7bXA%2FGem0CqsVyKfzvSJhu6bZ9GopYYKBrkqpM%2BBFFNWWyoCF6WEbeCOa69joLqZom&X-Amz-Signature=98e3b24ad65473651af0f2f3ec437fbe8e2d52a31102209d40de2529f41676a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43UYYFD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBVkhMxtVoJhN2I7mVRM0WuF5ZZh4RgiwnAdRMY1xb5AiAE%2FAuVLqlgjzqaV%2FqxPVwr7ia%2FvZr9toOPfz%2FCENcQLyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirdSR2rN2xfo4zIoKtwD0RDS9%2Fdk2zBsJ7YjsAeuJ87QbFqadU6gxy3J36aKE1r0XAZVzJXQ98XaaJEUdmbDS5OGAvB17A148bLNinL8ixLvwv1EoYTxf%2B0CVwdJw27WAHzxg%2BxRREsELqgrjm65nF4ENvAxB4058XfdOguPi0oBAVTz4ctLHNCBhS8ZZIRFfq1%2FFsKB4b7wns6FYMOJlMaVr8BBZE5kMk8OD%2B2qzN0RrpfdackvuAi8KYVyav0eniie1kpjacDvgGqXr3O99SJko0hfMidIHMGUFFg4cTkK71pgkN4U4H1v0r658CVaEAEUcTavsDFb4hcEiAi7qcCkBeCPD5WWrTKaLnVwyzN8exBxPqZZdc%2FcwWoOl5ar91kVuQAXEEtzzHENH3FDpR6ayoXes8oqfLEOHxWUwI6M3HXwfIxbmT9mC8Xf4YpYxnvGUaDCPh%2FoBH%2FxqGEutVudE1QeMw6KUyd0V%2BW3%2Bm%2BPOE9J9G2UxWzJ3lGsjPcQbMs50njQCUfnN2utR4o1iFRFWP02dGGVLPK2mqSUUlQvyYombswBFACZjxJD0STMl5voMsHszzFTVysV%2B6bNygoz5lmbciY9JuvlTrryknTB8fmUAX%2FPC%2FtI%2BpuQcviQxkLLZayJzL6st9wwsd%2BfwgY6pgGAY56br%2FXOgPWwOFvYVSeh0i9lx3x25RsS5i8lB2N1ERLs8uK8DSSxBEqFPqo%2BvHVElvs4NSPU8ugGOB%2FqFx%2B1%2FbTA%2BqzJnHq4oQV2A6xaVYtOTy18iAATEVULSH4IFL7%2F%2FzUX5V9HCo0MuHI9%2FEcn2gJDvq7bXA%2FGem0CqsVyKfzvSJhu6bZ9GopYYKBrkqpM%2BBFFNWWyoCF6WEbeCOa69joLqZom&X-Amz-Signature=9c8481ad1ba95533db7db4bf8d5e156faaa9989538aa1a316e7e5b863b3f53de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43UYYFD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBVkhMxtVoJhN2I7mVRM0WuF5ZZh4RgiwnAdRMY1xb5AiAE%2FAuVLqlgjzqaV%2FqxPVwr7ia%2FvZr9toOPfz%2FCENcQLyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirdSR2rN2xfo4zIoKtwD0RDS9%2Fdk2zBsJ7YjsAeuJ87QbFqadU6gxy3J36aKE1r0XAZVzJXQ98XaaJEUdmbDS5OGAvB17A148bLNinL8ixLvwv1EoYTxf%2B0CVwdJw27WAHzxg%2BxRREsELqgrjm65nF4ENvAxB4058XfdOguPi0oBAVTz4ctLHNCBhS8ZZIRFfq1%2FFsKB4b7wns6FYMOJlMaVr8BBZE5kMk8OD%2B2qzN0RrpfdackvuAi8KYVyav0eniie1kpjacDvgGqXr3O99SJko0hfMidIHMGUFFg4cTkK71pgkN4U4H1v0r658CVaEAEUcTavsDFb4hcEiAi7qcCkBeCPD5WWrTKaLnVwyzN8exBxPqZZdc%2FcwWoOl5ar91kVuQAXEEtzzHENH3FDpR6ayoXes8oqfLEOHxWUwI6M3HXwfIxbmT9mC8Xf4YpYxnvGUaDCPh%2FoBH%2FxqGEutVudE1QeMw6KUyd0V%2BW3%2Bm%2BPOE9J9G2UxWzJ3lGsjPcQbMs50njQCUfnN2utR4o1iFRFWP02dGGVLPK2mqSUUlQvyYombswBFACZjxJD0STMl5voMsHszzFTVysV%2B6bNygoz5lmbciY9JuvlTrryknTB8fmUAX%2FPC%2FtI%2BpuQcviQxkLLZayJzL6st9wwsd%2BfwgY6pgGAY56br%2FXOgPWwOFvYVSeh0i9lx3x25RsS5i8lB2N1ERLs8uK8DSSxBEqFPqo%2BvHVElvs4NSPU8ugGOB%2FqFx%2B1%2FbTA%2BqzJnHq4oQV2A6xaVYtOTy18iAATEVULSH4IFL7%2F%2FzUX5V9HCo0MuHI9%2FEcn2gJDvq7bXA%2FGem0CqsVyKfzvSJhu6bZ9GopYYKBrkqpM%2BBFFNWWyoCF6WEbeCOa69joLqZom&X-Amz-Signature=84355348ec38b74e22b8234a58d014377c000bb69665772d25f47d2f1d138874&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KV2WX2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu2iDFT4vpuPPQYcBXfFoWsMt3Z1lllRZwjQRiqhAdpwIhANHr0I5dJZUtSgrRdEMXT618qBAfJkEMitmYWjT6gUwAKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5Tbs97e5QoZ7cHL4q3ANThVIez8wOm%2F%2FyD3OnKQzhM5KmLw6jlmlO6ak95zyt5PTzPRK4x7Pkg%2Bp7l04d6X%2BAj0wIA8J5jqVwVw8YQOW2skpB%2BbjfO2wL8L9fliEsorgXoV7B34M0ksqud%2F8YSsxYdUwATiAIfWs7btCQyoNqWMsw51%2BJJkPHjJoKxbi96pDssO%2FhQLnoeeNHGjjITx%2BsY8w49u099qxCAx75OnvrnVYgwaQ0S8ljL9R1Bmx0sYMQAbkdbVHZNeB4z7vtfZRA1Xlzj5yBbFXC5nFi9p4joUb85StUC7hE4Ylx1z09C%2FePwLzwu0IOB%2FX0YGFyec9HTdEzXKCjJaLOKpEZY9SLeraE9l%2BQzYA0EHTDnGqC2RH8n0TjFDwp2z4sOnCYyatRnzub2tjpd4DE4xipVeQNJXhjJX151lNjKtouhd85ZFepJt5Hjd%2Btlsh6Sf4OIWqASCi%2FOJcQtwWHlCm4F7xs1%2BXIoT%2BFBxKAmIEL5SrQu5e7vh4158eAZre9fy9D1ijNDhPAwnFWIF%2FIE1S79IAFM%2BKUR9qlbEwc3PN6Z3o198ua0ZYl3KLM%2FVqr%2F%2FpvY6%2FS6i9s9ZlBTgbdbDtrgOScZvH%2B9sgo0Myt1sNvHGY4ZiEEv%2BRFkt7hqCyd0zC9%2FJ%2FCBjqkAXXv6wnOpxibyTm4bKXmK8BY36u0U%2B3rMXTZZ6h9vFfq6BeLQgWGhiwzxTjb4mwRHcPjO0YHtlLrYAcxREH%2FbHWk1H1jqP7xFGOfhutLVYeYN%2FghTnlC7EAFWT9nIEexCi%2BSxDxd%2FRAVSWXp9e%2FtKmm8UA6j1kiA7e%2BzAs4r6rKZEgiJxjSaGZduTLzNi6CllBPRM5mLWulK%2FU7Nif%2B6jJKzIOr2&X-Amz-Signature=2d37bb57e112f694297a852a6563be656a2b92dcc2796f70dc2e418039e9d348&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDE4EVSX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARZkkXfq3qkC6JH8RS8TdsidycvgC%2F%2BZs2UHb2F4D5gAiEA7Q8Spd7mom4aqE%2FpyyvlPu0UaaGnBl5CRR5Oo4ZbGwcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDApjVkA6lfs4qyediircA%2FX9S1edpNX6XbC32L1m2JTBgGzGO30zIjh0jHy2iJUKF90%2Fb3YYKUGKnrdpyHpzqEA8cqjKcXfhV4HarKRLxJZv%2FwfMd8UKlS2lawmRTnBWJjutrwjpDdsZ8dXNjD3iLfj2pCx6lWA2fgK6%2FvGHOaF9yqBmaysq1AXHyon2A6oNjqeJxhd1wTLLWbhF8maM95NRkSQEeczjZtvCcDHThTa%2BH7Xh%2F9Jx18oxSzriBNNzGjPtQ661k9crW4IviX9kP380woG29qnuuS%2FK%2BKSxIcrE28ueR2%2B2riB%2BQapeXmJ5GsG1lG1NKWhRAQNZiA5FZZBwQiCx8W1AHTWvmCXXC7k0PpEC0YB5fIzEnzqk5L9id4odCfFSUetxziO17BBNRJ1zIHFDiMYuf%2F6HBy2tMxR04401v2wOhRPoxLXiBm%2BpsfZngDYNTzj7PwQUMu9%2BUWNJp%2B48KkBN6pACjgMIDAWiEn6CFaPh7RT33gilnexBqwIGp0tFWeMEybjFtu6yfk8n2KLZhWWKtmJ4GkViDq7V3sAzT42y3mz6q8GiZJ%2Bs7nHXCMucuoN5n9eaZHCjAAhZmhJRQW9KPYmj0vWBqNDWSaTwHFwuXC7K5qfaJoWTUUaZQMNg4MlRoGp5MILfn8IGOqUBOzlUyBMRs8CNsymoaNbpXqtqwCc24lvtWKFjsfGC6L503Ig0NEwPBhfxs2mwBgHSP0KnhaPYF06lEAMGEveoGcAz19SFVDTnhIEFDxnKfF7q98LjKd3Py2Msm7mOFtJJ5W4CUVg7hyi4KsES86jddWMjxupZ56xvMjiiiLmXsT4cw1Hf7pDg17VTVznl9ykdJCwSzADG04NHCCphYn5aHoq3uiFA&X-Amz-Signature=8eb8c55aa672d588f547e0adf1f2ce3ede4c3b346827cbacf21b15c5facecc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W43UYYFD%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBVkhMxtVoJhN2I7mVRM0WuF5ZZh4RgiwnAdRMY1xb5AiAE%2FAuVLqlgjzqaV%2FqxPVwr7ia%2FvZr9toOPfz%2FCENcQLyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMirdSR2rN2xfo4zIoKtwD0RDS9%2Fdk2zBsJ7YjsAeuJ87QbFqadU6gxy3J36aKE1r0XAZVzJXQ98XaaJEUdmbDS5OGAvB17A148bLNinL8ixLvwv1EoYTxf%2B0CVwdJw27WAHzxg%2BxRREsELqgrjm65nF4ENvAxB4058XfdOguPi0oBAVTz4ctLHNCBhS8ZZIRFfq1%2FFsKB4b7wns6FYMOJlMaVr8BBZE5kMk8OD%2B2qzN0RrpfdackvuAi8KYVyav0eniie1kpjacDvgGqXr3O99SJko0hfMidIHMGUFFg4cTkK71pgkN4U4H1v0r658CVaEAEUcTavsDFb4hcEiAi7qcCkBeCPD5WWrTKaLnVwyzN8exBxPqZZdc%2FcwWoOl5ar91kVuQAXEEtzzHENH3FDpR6ayoXes8oqfLEOHxWUwI6M3HXwfIxbmT9mC8Xf4YpYxnvGUaDCPh%2FoBH%2FxqGEutVudE1QeMw6KUyd0V%2BW3%2Bm%2BPOE9J9G2UxWzJ3lGsjPcQbMs50njQCUfnN2utR4o1iFRFWP02dGGVLPK2mqSUUlQvyYombswBFACZjxJD0STMl5voMsHszzFTVysV%2B6bNygoz5lmbciY9JuvlTrryknTB8fmUAX%2FPC%2FtI%2BpuQcviQxkLLZayJzL6st9wwsd%2BfwgY6pgGAY56br%2FXOgPWwOFvYVSeh0i9lx3x25RsS5i8lB2N1ERLs8uK8DSSxBEqFPqo%2BvHVElvs4NSPU8ugGOB%2FqFx%2B1%2FbTA%2BqzJnHq4oQV2A6xaVYtOTy18iAATEVULSH4IFL7%2F%2FzUX5V9HCo0MuHI9%2FEcn2gJDvq7bXA%2FGem0CqsVyKfzvSJhu6bZ9GopYYKBrkqpM%2BBFFNWWyoCF6WEbeCOa69joLqZom&X-Amz-Signature=e60da56cece105c7e3137da5857e119c9b5d1e870befd1b25c621aa4463af8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
