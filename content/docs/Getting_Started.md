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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUFZVJX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxss1r8O6kiY13%2BBhEASS8hQQRi%2BQNrkI917OXDnRNwAiBPk0yhxOrCdn0QX11I28dGGRHtCwpHOFDzRGocszuuEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeGSE0ENyryx%2BJngMKtwDpqFNSc27jHuHKKnHym%2FrTEU%2FU7g9EGnO5KXfMoWjtnN76Xq8ai43gRko3OvapNiEgNgsAo88wGlrP5FoPPeVZ%2FrhAHe6tCdgp437AUfA%2B8EO3gWWzgKO9zqYLtTtxnAMVEyXd3QYAh2IUwxP7Jsf%2BXt5YOvkldh491Yg9km5U4Rik%2Bakbkp0Ex1tbUdVNPgYsT0iLW0VmOq88TtMGPuXpSa%2F4Imkh7myK3FkS8kpIXAr48U9sz5sQYAsPbdcE%2By53Sr1jKsqA%2Bu0xb7uKIPfx9%2Bg%2Fs6ostvGUah%2Ffyivl18CAzg0XkLFIDwZTTGPTJsW2fFcbWQ00%2Bb9Y78kvq%2BcuUywqvRMA4DPwoA%2FdXvBMt2IbcnIKXF%2F8jSrhwjk2rYoUxRm8mnDaDbaHMpAbnXsi7BHfitV20t34uA1GAKEjhyC5j9XZxSGgGTYqtZJBal3DpLIHiGkD5CRL0kU3MQJuRrkf3qFi2Ny4Dm2wLr1OM%2F9c1OV3BTzbAAa1PKqtqgvtH6yOWxalB04HixHbFml5BGhxCmeLLOkuqoJ8hNgs7vef5Bi8lJve7Uegnujb2OaZ2BQ%2Bi9rVMmIB7BIwR%2BoCV7tQioxX7zPdoICafU8ihrVg45BUokwyw%2Bay4Mw%2Be6HwwY6pgECSQ1E8d6LpovtI5yYVfHlTEf3AYKQn7sVIxK9BH9dzoNXw38KgSX0C0OyltI7z01njwPjoOstpAQLtcR2OTjlqCxJAysdt7YMapE9HxbaJOuRIyEnYInTQV9LH5t%2FwOPFjpQd94RnJuDDdDj9DjChc%2F3b3Sl4gg7xlKbDoSijfaXumVkkqMH%2FcnYjh3brOs8oAlcPRpoeUOv6Lguw4usfGMgkHmlT&X-Amz-Signature=883727755695b8a9720a89147428fc17570f0543c9f32768c1007b3a3967ee5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUFZVJX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxss1r8O6kiY13%2BBhEASS8hQQRi%2BQNrkI917OXDnRNwAiBPk0yhxOrCdn0QX11I28dGGRHtCwpHOFDzRGocszuuEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeGSE0ENyryx%2BJngMKtwDpqFNSc27jHuHKKnHym%2FrTEU%2FU7g9EGnO5KXfMoWjtnN76Xq8ai43gRko3OvapNiEgNgsAo88wGlrP5FoPPeVZ%2FrhAHe6tCdgp437AUfA%2B8EO3gWWzgKO9zqYLtTtxnAMVEyXd3QYAh2IUwxP7Jsf%2BXt5YOvkldh491Yg9km5U4Rik%2Bakbkp0Ex1tbUdVNPgYsT0iLW0VmOq88TtMGPuXpSa%2F4Imkh7myK3FkS8kpIXAr48U9sz5sQYAsPbdcE%2By53Sr1jKsqA%2Bu0xb7uKIPfx9%2Bg%2Fs6ostvGUah%2Ffyivl18CAzg0XkLFIDwZTTGPTJsW2fFcbWQ00%2Bb9Y78kvq%2BcuUywqvRMA4DPwoA%2FdXvBMt2IbcnIKXF%2F8jSrhwjk2rYoUxRm8mnDaDbaHMpAbnXsi7BHfitV20t34uA1GAKEjhyC5j9XZxSGgGTYqtZJBal3DpLIHiGkD5CRL0kU3MQJuRrkf3qFi2Ny4Dm2wLr1OM%2F9c1OV3BTzbAAa1PKqtqgvtH6yOWxalB04HixHbFml5BGhxCmeLLOkuqoJ8hNgs7vef5Bi8lJve7Uegnujb2OaZ2BQ%2Bi9rVMmIB7BIwR%2BoCV7tQioxX7zPdoICafU8ihrVg45BUokwyw%2Bay4Mw%2Be6HwwY6pgECSQ1E8d6LpovtI5yYVfHlTEf3AYKQn7sVIxK9BH9dzoNXw38KgSX0C0OyltI7z01njwPjoOstpAQLtcR2OTjlqCxJAysdt7YMapE9HxbaJOuRIyEnYInTQV9LH5t%2FwOPFjpQd94RnJuDDdDj9DjChc%2F3b3Sl4gg7xlKbDoSijfaXumVkkqMH%2FcnYjh3brOs8oAlcPRpoeUOv6Lguw4usfGMgkHmlT&X-Amz-Signature=a84b2f670eeee3ae6a146f98023ef95bec66837ed686bd6e78aec30e787f343c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUFZVJX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxss1r8O6kiY13%2BBhEASS8hQQRi%2BQNrkI917OXDnRNwAiBPk0yhxOrCdn0QX11I28dGGRHtCwpHOFDzRGocszuuEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeGSE0ENyryx%2BJngMKtwDpqFNSc27jHuHKKnHym%2FrTEU%2FU7g9EGnO5KXfMoWjtnN76Xq8ai43gRko3OvapNiEgNgsAo88wGlrP5FoPPeVZ%2FrhAHe6tCdgp437AUfA%2B8EO3gWWzgKO9zqYLtTtxnAMVEyXd3QYAh2IUwxP7Jsf%2BXt5YOvkldh491Yg9km5U4Rik%2Bakbkp0Ex1tbUdVNPgYsT0iLW0VmOq88TtMGPuXpSa%2F4Imkh7myK3FkS8kpIXAr48U9sz5sQYAsPbdcE%2By53Sr1jKsqA%2Bu0xb7uKIPfx9%2Bg%2Fs6ostvGUah%2Ffyivl18CAzg0XkLFIDwZTTGPTJsW2fFcbWQ00%2Bb9Y78kvq%2BcuUywqvRMA4DPwoA%2FdXvBMt2IbcnIKXF%2F8jSrhwjk2rYoUxRm8mnDaDbaHMpAbnXsi7BHfitV20t34uA1GAKEjhyC5j9XZxSGgGTYqtZJBal3DpLIHiGkD5CRL0kU3MQJuRrkf3qFi2Ny4Dm2wLr1OM%2F9c1OV3BTzbAAa1PKqtqgvtH6yOWxalB04HixHbFml5BGhxCmeLLOkuqoJ8hNgs7vef5Bi8lJve7Uegnujb2OaZ2BQ%2Bi9rVMmIB7BIwR%2BoCV7tQioxX7zPdoICafU8ihrVg45BUokwyw%2Bay4Mw%2Be6HwwY6pgECSQ1E8d6LpovtI5yYVfHlTEf3AYKQn7sVIxK9BH9dzoNXw38KgSX0C0OyltI7z01njwPjoOstpAQLtcR2OTjlqCxJAysdt7YMapE9HxbaJOuRIyEnYInTQV9LH5t%2FwOPFjpQd94RnJuDDdDj9DjChc%2F3b3Sl4gg7xlKbDoSijfaXumVkkqMH%2FcnYjh3brOs8oAlcPRpoeUOv6Lguw4usfGMgkHmlT&X-Amz-Signature=5dc8422acb9ecb1de8876ec75c67cb4f3f1b23cf76a9bd17ef42cff8c9479feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAYFTUZ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDss%2BjKwJvOnPtwadvxJ5BEosvfYOG%2BPNYXi8X30Fh1tQIhANNYgTSCWYqwBDGvrIKfpdIdWi%2Ba4o%2FrroQDTKAkFvr6KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeGh1%2Fac6JRXFE9jcq3ANNaRgnx%2FufmGXQ3poh3lW%2BbVATJPsLHW4PbTOdXX%2FXosiLaUlIrgtsev7OeeThZSQWLOaj8uQ97tpWPpB7Z9U%2BKCZdzLx4GRo6Xd%2B0I3aAT0uDYlSmR%2FuzO5UUn5wwPfV5ZfwKpT%2BJOwexc2%2BgbZ7ZH%2B%2BbCLrbySFIM%2BK4CJh%2FGOp0x%2ByoKnPMIb9Gi%2B%2FIqS97oAagtE0SCgyzSN00yzDP9Yra61gUEFZWORZb%2BjY7fdT7ndJ83KX%2B5s2zbhIu4eCw50zldZNZUwkkQoKkiWIVvkg2l51bwOhyZIgHoXtBgDyJi%2BIZsGTYSq%2BvPzMe4hmYOgJcYmxOzWUJWHr2pIswJN2YlcCKkUnv5Ledg5xgDNUnO4FeOFS5z5QlejvihDTPHw%2BJz3shRB4RfjY766lo6etIO66IlD2jHLMN0XWSBZsgnR0Pd6XN0%2FY7%2BA8kmUGwZHuLUA2OGe0dqnbpm0uTfqmu3e1VsyEn1L4O3TJP%2BJ1RpFo04KCSDjXA2J%2B3p4zZoOeHHIbhSSJAcm%2B76HCGTmsiHgbDC8CyMOqY%2B1C3%2BqgIwIDyvmTqI6c3jnN7RO6zIDcSylv%2BA75uFD1LYOdZp8BI1DofxgNGTk5rJo96uMw7AtYwLW%2BJ60dtdjDf7IfDBjqkAfaENP8nNOWsidGeQWHXuTMQbwhpjlzfui3jiS2mRpM0kDt%2BSeHoonYi3K2Jsvt23aJKUIeGe%2FnCb5u%2FxbKVLoGL%2FudWE2nls9yt8g1KZx0mcr%2FCN3YOHiFbEtAc%2BXj8zow%2BTv8h55DaLGthd834xQqn8D1e3NdMrwPVwUeG1uw9Om54Dpl%2B6g1ES6J2OZbbBMLP23wdJ2CloRS6zSBGkdEBy31t&X-Amz-Signature=c137ca1f1063115d8d9dbaebc3e22d95e12af85cff769a1ac8f25ccfb4d8c63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELZT37W%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo0Zl%2FUUuf5iQb6onqqVwQqZhyQLCqLQ9%2BrNrIJAOGIgIhAID00z3gHtCXn40K90XfJjjn90UPU1z5me3si9deb111KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIHugz9yJpIGb43s8q3AN%2BsMPze3hKSk5TKqdpzBa%2Ft41%2Fatr%2Fxw1EzfgWIjqCvMDU8RCTW2182sv%2Fip1bw4rIXg%2B8jADMqQNAs6a%2FdLuJWjNY3qKT9DxzohtWw00Hmfd4dDFLeF6S4jmodEocV1cved8RyXGHPxX7%2FgbfkcCkTYK55wTgF4%2FHtKXdv3EdFKnpRzTHg15r9q%2BfrGIVjx3%2Flq%2Bv441lwQqDfQmiO9ixPtiatXr0ZvAg3dtd6%2Bm2wD0FMedRLPLFFIp099cBgrH8u1%2FQ4XtIjg5aUj%2F1vxqAS3voi1JDK5h1xDlYTdXMjqBeIQmtMnkVmc%2B3kTfry%2BRRQqNUn3C8WThc57zmjED84lVopc8Dt66TSxmHba276g7m1gBnHhoE%2FTrEr1CFiELgCy%2Fdi4fWNt49BUiWuyXf4Hp%2BB27HaQKahmiyKzmVFg%2BhwfgftRdoXQSfpj9Rf%2FbbLFsinwR%2FsYrKXtHUb1uy46e24bbqAz%2BGt7gbRs3fXTuyu8kfgpHV1ox5LyaCI1Ze2aePCySOFngGPfFg65ikM15Boskbg1DlXGHZs9jHnd9wVPil%2BRl0ufAeKdSq1a7%2FSb4TLiY%2FFhhsLTVWT6C7bOrhvjXdfV7dDdKWL8R%2BgI35S6LYFQZTn6k95zCg7YfDBjqkAcGoKZjd2aP%2F1JM6v%2BQhJo8WRwKHIV7PXSh9uxApZukEPdrJYg14Vomcs8%2B00Aa%2FUM7ayoYj8%2FpeuP2LbccacheMfoleiv5liXO%2FVP8ncW0h%2FBUnEqP7f61LDnA%2Bf%2BrevwqG7F3bu3B7gJg8EPoe8k3cV0DYOzt3ISHMou8AIYCcOso1cTCQpiArwIJEGVVGbCoffmRht0rQe98IWJfjqgBeZnx8&X-Amz-Signature=a957b2f94788c31e84b8fa002dff2ade07db163ea2410370fcaccb676d52689c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLUFZVJX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxss1r8O6kiY13%2BBhEASS8hQQRi%2BQNrkI917OXDnRNwAiBPk0yhxOrCdn0QX11I28dGGRHtCwpHOFDzRGocszuuEiqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeGSE0ENyryx%2BJngMKtwDpqFNSc27jHuHKKnHym%2FrTEU%2FU7g9EGnO5KXfMoWjtnN76Xq8ai43gRko3OvapNiEgNgsAo88wGlrP5FoPPeVZ%2FrhAHe6tCdgp437AUfA%2B8EO3gWWzgKO9zqYLtTtxnAMVEyXd3QYAh2IUwxP7Jsf%2BXt5YOvkldh491Yg9km5U4Rik%2Bakbkp0Ex1tbUdVNPgYsT0iLW0VmOq88TtMGPuXpSa%2F4Imkh7myK3FkS8kpIXAr48U9sz5sQYAsPbdcE%2By53Sr1jKsqA%2Bu0xb7uKIPfx9%2Bg%2Fs6ostvGUah%2Ffyivl18CAzg0XkLFIDwZTTGPTJsW2fFcbWQ00%2Bb9Y78kvq%2BcuUywqvRMA4DPwoA%2FdXvBMt2IbcnIKXF%2F8jSrhwjk2rYoUxRm8mnDaDbaHMpAbnXsi7BHfitV20t34uA1GAKEjhyC5j9XZxSGgGTYqtZJBal3DpLIHiGkD5CRL0kU3MQJuRrkf3qFi2Ny4Dm2wLr1OM%2F9c1OV3BTzbAAa1PKqtqgvtH6yOWxalB04HixHbFml5BGhxCmeLLOkuqoJ8hNgs7vef5Bi8lJve7Uegnujb2OaZ2BQ%2Bi9rVMmIB7BIwR%2BoCV7tQioxX7zPdoICafU8ihrVg45BUokwyw%2Bay4Mw%2Be6HwwY6pgECSQ1E8d6LpovtI5yYVfHlTEf3AYKQn7sVIxK9BH9dzoNXw38KgSX0C0OyltI7z01njwPjoOstpAQLtcR2OTjlqCxJAysdt7YMapE9HxbaJOuRIyEnYInTQV9LH5t%2FwOPFjpQd94RnJuDDdDj9DjChc%2F3b3Sl4gg7xlKbDoSijfaXumVkkqMH%2FcnYjh3brOs8oAlcPRpoeUOv6Lguw4usfGMgkHmlT&X-Amz-Signature=de41952c78c436ab96494112f1856cdbeef4bb441a9d1ef4a6e022bf04c54058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
