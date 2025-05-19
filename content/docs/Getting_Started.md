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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSHZXGC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAskEef4XoM2wIVEJkmvGEfUidf7QmDIQOy2JnRJwRMuAiEA3ol8Y7PjprGnPU213vTzIDjsuC68UKJLnjDnan7Yy%2BUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyUmOvMsVFdYXvwXircA6gl0%2FduQHwHeYoQszJDSev5g3iLM%2FXp%2BRtA%2BrnoZeEqS0F5U941Phh0%2FRHjM97z%2FworIHtbEucZrpHloMI9wTA185gjgX8sFKZUOyW4DdONLg693vnPSJan%2BucBjywZq3XsqCu2mkP65I%2FtJanjlngSn4Ol3HqpEU%2FjAuPiIQHiMRkFef6J0mbv5%2F16JUPTgKQI1eHo4FQeZ3ggEeqFOJsM1%2B1IsBzTBTlDWqeoikRVkj0nAVzr%2Fv6PDm%2B9hUD3jYMaTdTVUErqVz0LWqSoAJWzDeBI8yo3jfxDCQVb2E69rXDZe4UI3bk5JhUpBdKBuZvfSFPMwfRymFu8NVn9huyCL0m2ypOP9cBsql0O9isqbONEwObRYw40ChyMN0inZCKi3np3agUwLIMwvy%2BT8tOfYxfzwMVBHwA2SLA4m5KajDYbHDkrPt7Kc3pj2%2FWLUoAUeQCIEWrfe0jXRGA8lAj3sKGVeS2HzuHeiNdhG02g%2FLr66EAXw0M2EQA4HJYlImsoAGwJFZoAthlGeZGhzZj6rKAZpaoF%2BHHVVG3SFWfVe4B37xmiZvR1pYuMEWzJT2s4mSo2tJXTLyyQMCFQrdirjpKsEo9rYituwVdcRbDugeDw5CJVRxeO6uEWMNSeq8EGOqUBCgF%2FKsPlMwdhd26yOvfa32BfrtxUyZcXH4IdfGvFIbXwwQy1cERfr5c%2BDqw7dLYTiPYBZ%2FbrGaP4FhIuF51NQ6X9%2B0yLt1pcMQ%2B4Eexjw%2F9Cz%2FfkE5e3tP%2B9TrcLyXxSoWXMuO8D5eUMdDkyjv62OKvAn4asbtUHBWvGKXm%2B2X5JXc16IK5BZ9pPJqvFOf4E9P9n60Ehp3zZIymrJsDWEDMfvDwC&X-Amz-Signature=9b95d4c7f03a5cf240f33f9dda4ccad2ae1a1c64a201f434a6e8874b9d365635&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSHZXGC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAskEef4XoM2wIVEJkmvGEfUidf7QmDIQOy2JnRJwRMuAiEA3ol8Y7PjprGnPU213vTzIDjsuC68UKJLnjDnan7Yy%2BUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyUmOvMsVFdYXvwXircA6gl0%2FduQHwHeYoQszJDSev5g3iLM%2FXp%2BRtA%2BrnoZeEqS0F5U941Phh0%2FRHjM97z%2FworIHtbEucZrpHloMI9wTA185gjgX8sFKZUOyW4DdONLg693vnPSJan%2BucBjywZq3XsqCu2mkP65I%2FtJanjlngSn4Ol3HqpEU%2FjAuPiIQHiMRkFef6J0mbv5%2F16JUPTgKQI1eHo4FQeZ3ggEeqFOJsM1%2B1IsBzTBTlDWqeoikRVkj0nAVzr%2Fv6PDm%2B9hUD3jYMaTdTVUErqVz0LWqSoAJWzDeBI8yo3jfxDCQVb2E69rXDZe4UI3bk5JhUpBdKBuZvfSFPMwfRymFu8NVn9huyCL0m2ypOP9cBsql0O9isqbONEwObRYw40ChyMN0inZCKi3np3agUwLIMwvy%2BT8tOfYxfzwMVBHwA2SLA4m5KajDYbHDkrPt7Kc3pj2%2FWLUoAUeQCIEWrfe0jXRGA8lAj3sKGVeS2HzuHeiNdhG02g%2FLr66EAXw0M2EQA4HJYlImsoAGwJFZoAthlGeZGhzZj6rKAZpaoF%2BHHVVG3SFWfVe4B37xmiZvR1pYuMEWzJT2s4mSo2tJXTLyyQMCFQrdirjpKsEo9rYituwVdcRbDugeDw5CJVRxeO6uEWMNSeq8EGOqUBCgF%2FKsPlMwdhd26yOvfa32BfrtxUyZcXH4IdfGvFIbXwwQy1cERfr5c%2BDqw7dLYTiPYBZ%2FbrGaP4FhIuF51NQ6X9%2B0yLt1pcMQ%2B4Eexjw%2F9Cz%2FfkE5e3tP%2B9TrcLyXxSoWXMuO8D5eUMdDkyjv62OKvAn4asbtUHBWvGKXm%2B2X5JXc16IK5BZ9pPJqvFOf4E9P9n60Ehp3zZIymrJsDWEDMfvDwC&X-Amz-Signature=e9b97d940a4b9b697d36a835778941b8398ed2e8be601ef30a82a1a257ab3de4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSHZXGC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAskEef4XoM2wIVEJkmvGEfUidf7QmDIQOy2JnRJwRMuAiEA3ol8Y7PjprGnPU213vTzIDjsuC68UKJLnjDnan7Yy%2BUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyUmOvMsVFdYXvwXircA6gl0%2FduQHwHeYoQszJDSev5g3iLM%2FXp%2BRtA%2BrnoZeEqS0F5U941Phh0%2FRHjM97z%2FworIHtbEucZrpHloMI9wTA185gjgX8sFKZUOyW4DdONLg693vnPSJan%2BucBjywZq3XsqCu2mkP65I%2FtJanjlngSn4Ol3HqpEU%2FjAuPiIQHiMRkFef6J0mbv5%2F16JUPTgKQI1eHo4FQeZ3ggEeqFOJsM1%2B1IsBzTBTlDWqeoikRVkj0nAVzr%2Fv6PDm%2B9hUD3jYMaTdTVUErqVz0LWqSoAJWzDeBI8yo3jfxDCQVb2E69rXDZe4UI3bk5JhUpBdKBuZvfSFPMwfRymFu8NVn9huyCL0m2ypOP9cBsql0O9isqbONEwObRYw40ChyMN0inZCKi3np3agUwLIMwvy%2BT8tOfYxfzwMVBHwA2SLA4m5KajDYbHDkrPt7Kc3pj2%2FWLUoAUeQCIEWrfe0jXRGA8lAj3sKGVeS2HzuHeiNdhG02g%2FLr66EAXw0M2EQA4HJYlImsoAGwJFZoAthlGeZGhzZj6rKAZpaoF%2BHHVVG3SFWfVe4B37xmiZvR1pYuMEWzJT2s4mSo2tJXTLyyQMCFQrdirjpKsEo9rYituwVdcRbDugeDw5CJVRxeO6uEWMNSeq8EGOqUBCgF%2FKsPlMwdhd26yOvfa32BfrtxUyZcXH4IdfGvFIbXwwQy1cERfr5c%2BDqw7dLYTiPYBZ%2FbrGaP4FhIuF51NQ6X9%2B0yLt1pcMQ%2B4Eexjw%2F9Cz%2FfkE5e3tP%2B9TrcLyXxSoWXMuO8D5eUMdDkyjv62OKvAn4asbtUHBWvGKXm%2B2X5JXc16IK5BZ9pPJqvFOf4E9P9n60Ehp3zZIymrJsDWEDMfvDwC&X-Amz-Signature=393fb1a88e6df411bc1d59a0c1aadd9ad551bb2c7b8117c2462190f36f7ac0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOZ2U3R%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCrptqRo6ea1sdGPJZHUanPbGtoh2BmMEcoux7DBQ6eAiEA2zzDzWgpQqDIYrD0%2BFVK79UagYgx9crHWmWEXN%2BMXK8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChOgyRPy3IOUz6rpircA0awg%2FAM8yCeXiC7JFHcxUaomFRUDvAPFGKZd%2B2E%2B7D5WOoLbIDjP8vS%2FfmaV%2FwYXI9HZU3UjpqAo0Ta5kFSv62wRlDrn3z7gjkZgIta3c9%2FO9HUSplopBiuxQynfwVTtBxWc79UR25tv5P9OAwWD0VsUJclHmApsHxMTfMSB2XUX2mhEO6whOagK9spuef6WIdF7Mqn1zrKX5afnQ4AlDBTMin4WOdo7C0xXLljW2HEFN8jCAYegq0Q2M3kkdkbhFwQMKitGSeBj8WHgC0fUo8%2BY%2B5AKI3JjfgZTJLDZ595kNmEycOjYbvsDfQFCyhRnFQiBh7zjzltKsJbtPGJVRrRexA%2BwiUFVe75o7BS9MyLsJfEtDHWaQZJhGdt2Y4e1STzU9MO94vDdE4niMePC4otKMg4lrCBJini68RcgUIdiFU5TGqsmOmQnKECdkpYITLHoQh67Gj8%2BC%2FYaFw7iG7LTkqCSq%2FPT6x%2BLHRuUrrZiNZT95Ek4Lh8XmJQhq8cbrt3Jjn9xgyLlW0PvlQF%2FmhvxwDDlV9IcJAdZuMPo1E3jlW577%2BRfXJEo7eK5%2FH8SZwS5rbKEZWgumQdFeulxAiaQGJPXT2DRthePTJvw6ypblslf6SgC1cmCja8MO%2Beq8EGOqUBQEL3CQXAhIvzeYqIzb9XmWxpeuLmOHkRYjqHKTOLvGzXAXxmUv2bjN0jS7L1Yc1HSzKMdtaexETAkNeIhSXRCEd4ydNU%2BIotjU6sdHefXhsEY2G41ikG%2BBtTyd0eY7l1%2Bsov1BHPwYa8qRhIC8qEms7FPYLcrCizPZNe7invpoeSyj5rsfIcc7CKWzW4dwrw4sUSEBb53vzs5n1R%2FBMecDF0dlWX&X-Amz-Signature=8886daa8fcb629b5ce3dead46329537975240328ae98d6aa01d7e78c399fa9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWUYPI3E%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B8TJKj5UiaZaTjFbK2OEiTUtyiz%2FSei6GJCn%2F2qYPsQIgB4zc%2FRLFlIJdKXxy1bu2UHa6e1UywfPIvtO%2BfDpOPa8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiuCLi1mnrjnu0KoCrcA6E3cr8QYzIfyhYbKk6DjYfVfW1aBqBU75gkfHEAKX%2BI9JhZNTtj93Y59kZcuYuBwnbktlTCuXODxYAT6ubxkxOYDouaZCDGz0PMtPu6rHsy%2B%2BtWt1%2Bb%2FYO0GfnKEHvlGixYKy%2BDOGNvShzVzcgWwGygq0mCTNU%2BEBqoW8Zi4LhGgAx1I95CovRDJV62dfdVspN7utlmHjQR8cDTLJGBpgph3yrHjXvtqUrLioILMOUReTEAnyNy1c0R87JCH%2FKEuIXNUFVSXXVCru3UQHHcjylKvj5xPk38yBAj5KmXrMP26zQPaavwcLBWDV70Gs%2Bcnvvm1D7ow460KrYsLTIWYa3Yn6RoTMxQSdIvUMsnEqpQae49h%2F9Z4q6n2uRe02JfcFFZ2onOJJs5QlLKXr%2FYOewIAlOmep6nK2oMjDdMg79%2BCkoQlqH3aqNoR7%2BrXGhh%2BxxjmfG07eBLMAoUkkQHosOPczePWbrFNm5KXv2eQ8pL6ZWUhmANLFuZ4t7pNqGsjN7HGFXAYCGH5O%2FpJZNV3cmHfnvqY6XsF9gQbyHcvqjtfPL15PnJYLclYqWZ3n%2BVjgP3WQw20qLm2tYak%2BTSjF8ScnZzmYDJHZHoVCUAhVrqevxmdshSwYaiTuXdMO6eq8EGOqUB3FHV7CMRKc5Z1PuCs02lbiiAGv4qzgbIS4Xe912ziPUlqBCiSLFy4Ps0mi9FBIsWmu%2FsBuJiQwtoYRj2jWs9M5adzSK03tXtRF7voCxL%2FsZCtobWCDTXm0xX1MnzH1z5qG3nb8dABeLNGwaXQz6DEcrrJXpexmcl6wclrCmLzzd5tzygUp9KhA84PE0p8c4Ur%2Fp8GsWHVh93tOHGlAclwknL%2FrvZ&X-Amz-Signature=800d7dccecbd43702a0b42dc8c2b1dcf1a462b904cdfc2027b5af39b793bf665&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYSHZXGC%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAskEef4XoM2wIVEJkmvGEfUidf7QmDIQOy2JnRJwRMuAiEA3ol8Y7PjprGnPU213vTzIDjsuC68UKJLnjDnan7Yy%2BUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyUmOvMsVFdYXvwXircA6gl0%2FduQHwHeYoQszJDSev5g3iLM%2FXp%2BRtA%2BrnoZeEqS0F5U941Phh0%2FRHjM97z%2FworIHtbEucZrpHloMI9wTA185gjgX8sFKZUOyW4DdONLg693vnPSJan%2BucBjywZq3XsqCu2mkP65I%2FtJanjlngSn4Ol3HqpEU%2FjAuPiIQHiMRkFef6J0mbv5%2F16JUPTgKQI1eHo4FQeZ3ggEeqFOJsM1%2B1IsBzTBTlDWqeoikRVkj0nAVzr%2Fv6PDm%2B9hUD3jYMaTdTVUErqVz0LWqSoAJWzDeBI8yo3jfxDCQVb2E69rXDZe4UI3bk5JhUpBdKBuZvfSFPMwfRymFu8NVn9huyCL0m2ypOP9cBsql0O9isqbONEwObRYw40ChyMN0inZCKi3np3agUwLIMwvy%2BT8tOfYxfzwMVBHwA2SLA4m5KajDYbHDkrPt7Kc3pj2%2FWLUoAUeQCIEWrfe0jXRGA8lAj3sKGVeS2HzuHeiNdhG02g%2FLr66EAXw0M2EQA4HJYlImsoAGwJFZoAthlGeZGhzZj6rKAZpaoF%2BHHVVG3SFWfVe4B37xmiZvR1pYuMEWzJT2s4mSo2tJXTLyyQMCFQrdirjpKsEo9rYituwVdcRbDugeDw5CJVRxeO6uEWMNSeq8EGOqUBCgF%2FKsPlMwdhd26yOvfa32BfrtxUyZcXH4IdfGvFIbXwwQy1cERfr5c%2BDqw7dLYTiPYBZ%2FbrGaP4FhIuF51NQ6X9%2B0yLt1pcMQ%2B4Eexjw%2F9Cz%2FfkE5e3tP%2B9TrcLyXxSoWXMuO8D5eUMdDkyjv62OKvAn4asbtUHBWvGKXm%2B2X5JXc16IK5BZ9pPJqvFOf4E9P9n60Ehp3zZIymrJsDWEDMfvDwC&X-Amz-Signature=e89c8807186195f02f005b43abbe9b786158ee10fc35b3405aa10c2ff47bd376&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
