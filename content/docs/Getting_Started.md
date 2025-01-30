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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJTDINQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN3AnXzkKVmLZzprk3iBb2wzaKvi9P%2B74gwbYu4wg2pAiEAruNo4TLIGhMf%2FepkpCFGlqCDCf0t8dTa1gZP5qn8pDIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8lM6Qp8h1RuI7F0ircA%2BaffpfRx1jdYmr8fbVCB3dynpUk4wn8as3byI7Xh986s5Af2HwsyvzGaYl7Mjm%2BT0JhOpfGYIbEjvRWXviBGK1gtOkm%2Fd0WVbGWlUFdSmCZF5I9BAVbwnNcSIw0SJph5ZVmX%2FOuQtUj%2Fv77oatmRZ35GId1DrN%2FgAd6ePtgzqM0hliU5pWaOJewzdxURB8HDbp704XTye6f50qPgTm52AGkC5DqRJD7qMJBAo6dCzLmDUFRXyYdHD7WLOKNrhQtqTVkR1on5TpZ%2BIZH2u1JSTxa2A64fG4xq2J%2FGOs0hUmdmQaW75GVtU2tK7UBBm7yIVX%2F5a2sOa7GP8VZ%2B3ScjWEqEAydI5eHXfTtL5WQm7xXd1ogquKT%2B0vMrpC09C9AMvO%2FtzvGm0DPCLvvxgF6flv1cChyVmyRnFKKz0RZvtSbJTKFkw3IOsQbtVjcUfSKqCRqWD%2FJt4RqLGb8yVnGexidwRnEtf411wrelAU%2BTjsTrNYp3%2F5lWJna5BXPx9aBDFUn19xttfD5ZQbr9PsJOxKkxxnWaKDHpaKvJP5PpK%2FnlFa8cLJtWvuvmHY%2B%2B6QE19tc2M72CZitJFSRMxROrO%2FxBNtIDaI1PbAftZUe%2BMlNukh1Fah92N6xqr2GMOD77bwGOqUBVkupRM1LYGedc1CPy56Iy75AUyKBuoqlKwIwuG8tpnShx4q6Z35czF3Vw7ApH4U8EnX9Bv5C09jifQSMeHzW0vdrygDYG47uHDdgiLaZxcURgyWTLnoVMp5RlK8uX2iwasbg%2FGDFeOrpN3jXbUScvpwWBWeymwFdh3L0Yzh3I0cjfFFDVmKstCfKSb64C0zlmqKNelgsy0hC5gRsIraAxzzTKUWz&X-Amz-Signature=eee719b7f675ad5fa37304ed7ee339c85b6f5fab8c0c8a01b79b3d9a90c7daba&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJTDINQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN3AnXzkKVmLZzprk3iBb2wzaKvi9P%2B74gwbYu4wg2pAiEAruNo4TLIGhMf%2FepkpCFGlqCDCf0t8dTa1gZP5qn8pDIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8lM6Qp8h1RuI7F0ircA%2BaffpfRx1jdYmr8fbVCB3dynpUk4wn8as3byI7Xh986s5Af2HwsyvzGaYl7Mjm%2BT0JhOpfGYIbEjvRWXviBGK1gtOkm%2Fd0WVbGWlUFdSmCZF5I9BAVbwnNcSIw0SJph5ZVmX%2FOuQtUj%2Fv77oatmRZ35GId1DrN%2FgAd6ePtgzqM0hliU5pWaOJewzdxURB8HDbp704XTye6f50qPgTm52AGkC5DqRJD7qMJBAo6dCzLmDUFRXyYdHD7WLOKNrhQtqTVkR1on5TpZ%2BIZH2u1JSTxa2A64fG4xq2J%2FGOs0hUmdmQaW75GVtU2tK7UBBm7yIVX%2F5a2sOa7GP8VZ%2B3ScjWEqEAydI5eHXfTtL5WQm7xXd1ogquKT%2B0vMrpC09C9AMvO%2FtzvGm0DPCLvvxgF6flv1cChyVmyRnFKKz0RZvtSbJTKFkw3IOsQbtVjcUfSKqCRqWD%2FJt4RqLGb8yVnGexidwRnEtf411wrelAU%2BTjsTrNYp3%2F5lWJna5BXPx9aBDFUn19xttfD5ZQbr9PsJOxKkxxnWaKDHpaKvJP5PpK%2FnlFa8cLJtWvuvmHY%2B%2B6QE19tc2M72CZitJFSRMxROrO%2FxBNtIDaI1PbAftZUe%2BMlNukh1Fah92N6xqr2GMOD77bwGOqUBVkupRM1LYGedc1CPy56Iy75AUyKBuoqlKwIwuG8tpnShx4q6Z35czF3Vw7ApH4U8EnX9Bv5C09jifQSMeHzW0vdrygDYG47uHDdgiLaZxcURgyWTLnoVMp5RlK8uX2iwasbg%2FGDFeOrpN3jXbUScvpwWBWeymwFdh3L0Yzh3I0cjfFFDVmKstCfKSb64C0zlmqKNelgsy0hC5gRsIraAxzzTKUWz&X-Amz-Signature=cc573ff7802c833f3444e2a3e3de40e7b150e839b77195a1647eca2c0c8acd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KJYHXQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCnbBaCS%2B%2BD4C9l53%2B7F1WNUUMkUH4d6tGD%2FscefeT4wIhAIiTXBKeGQ9TEuuR0%2Fji6YDVW%2FkyGWgACCDLAhxP1qfqKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYUyJDC06HSNAc%2Bjgq3AOSEJIIGRIytfGW1qFa4SNS9fe9M1njIplvS6l%2BAXoLtdmMpXPvxKjFmnunRHMgibtoxDjQHBMHsurH1GHEq1yW%2Fyc8wsyJLU05NinBYcq0dZgo7lM98EIzMhXV3xcIgP%2BfRO1TokcrDEaKaPQfo5WhKWjq9piAUvr85clnFzcvx43F95FnDatZTQt%2FQj2KUgcTgtSzmKTxjUhu7%2BOG5eRyjli7HtXCyLv7B%2BbkTnqyWphvL55dxNEuIooszHEqC9mG2T8%2FkHKu1i8AGjG%2BlvfTjz26BvTQ9WcOBkJnkLzljdP4zkGwZgpIn0TEYlMKe2HVmSYB3Yhpss2b8kX2Gf8tVdwBWYB3%2Bu0MU2rNWbqMcEWqfEP3hK%2BbM6lFLV492fZ7x9Jft%2BjKmgDHR6Q1U%2B9UEI9XBg0h7OEKjo%2FxNHx2AHCUXUpqHcrvOIgFxDBYlZFysSQe0g3Vao3kSNobmESeHbJ4TWICa9OdtKEW2lg65N7cly3wtntdK9JxzQ8WWe2DnVIDUsCPWlq0CYIoj9KNAbQj2Gr6wRE%2BhCm6yXq8GUUa%2BOszPT8SEmnBpIeFKu0rH3kBMQakgZ%2BO%2BLM9Nei07yjVxgjI7JBfzzmSwpckI3IfcgUydEF%2FeJOv7DCh%2FO28BjqkARycA%2Fi%2Fe67nzuoD0Lb6t9mXq4h2Y%2BG2w3C771lm%2FlE%2BkFFYs%2BI6KzhJgyxLWc5PSihTCTDRK6i9U6sZmGpl34g7CcgPy%2FZB4CLkYACS3aVqKH8OJv4I25fgQC84XmU%2FcapalPnF%2FOwm9kKEWLc3405n%2BO2Z6e19BR7xPbdv1scqNMYW3Cnm3bfIs3jsD%2BPedqfKCTShuM2SPBBt200o%2Fgi4HPpn&X-Amz-Signature=9c51b0d4245ac366920122e212c92b27e62eeb9e4884a882fe2466e49c271322&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGMZ4MNX%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNn6bTrAeMcUX4nbP6D2MDtIPow8S1uodw4weAXRI%2BbAiAkBViCt0%2FnPKALEjEfxXyV5vpbiZXs%2BzxcrWjCakqpcCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb37%2FDoJYsEAaK6LsKtwDj7g9VdhQr6Jo4HcWWNGvtaD8qDy8%2F50NkQPhJ2Sj3jR73g5NbahaWmPJnsvnNpoERXvrmDgXIU2OzjJP0aF6umPLzd263pyc3fcs22iwkJC83py8ZzKWVxZG%2FP%2FFywgqAyaA9CDGdkd7reqIvfhVj2WvGkoNB%2FnM%2BZfzIZP41jJWeMJBTIeI64vkeY0Aq2YVyfSqwJwXQj4X4Xs2FEfs7PhZmoQNso%2BgkW4O4N8RDzbHXHkd3SpFhTHtRiydAFx3dAExSKfk0HY%2B051UxykjTwqGTHpWmrIqwJ3v29RB7DmsjaS2AB%2BT%2B7ChUgro4fqGfAhisNZQxbHiNVFleAjgs5k27jlAB%2FyiYQbxuU2dP50T8yQ%2BmS3zS6fqBT%2B5E1jWBuc0jaqxYKwKeWY3mUGFyh4n7%2FSka0MT9jZSUsdVUmcHtgNcFNYhowU2O6Jo1PFwEF6NsQWnLMF35%2BGiqVUJlyaXOvLOy%2FMNHA7WpfsRVwJXdjmmmSoy7ZuGUlxgTEOVYCYQUO%2BL6LI%2FKLeTGVa2BW0QNQPBBIGGqW6DAT3QnYAHNpRhGdnuH1il9KDBLRKZoHTgHG84cNL5Wo1xMK%2BNyL6tSw%2FuU1FhyaJ85hHj0LNz5XDXnCs8Uw2Akjkww%2FztvAY6pgFITo3jCd6HlWc5hYhyQ%2BkI8%2BOmUPt0GOaq5T7x2spBDs2PFmT7%2BZtuiKoWUSx8JrQV25qLAwF5S%2FsAvBARyG%2BMAv5GxVmcdSiw6vn59fTF5U1qBmDJddnBPY2u3xanSKIZsAbD6i9nWzD8v3cxFQSCziXR4mSsuODrAw041Phl%2B4giOGVMG536dpYsuWcZhFSvWaMVsfxXFkuZbwIVSmBB1QJ3CN6%2B&X-Amz-Signature=287bed0fdfce2384704210edc432e156621a479ece9d696be9a503ed83d22fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJTDINQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHN3AnXzkKVmLZzprk3iBb2wzaKvi9P%2B74gwbYu4wg2pAiEAruNo4TLIGhMf%2FepkpCFGlqCDCf0t8dTa1gZP5qn8pDIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8lM6Qp8h1RuI7F0ircA%2BaffpfRx1jdYmr8fbVCB3dynpUk4wn8as3byI7Xh986s5Af2HwsyvzGaYl7Mjm%2BT0JhOpfGYIbEjvRWXviBGK1gtOkm%2Fd0WVbGWlUFdSmCZF5I9BAVbwnNcSIw0SJph5ZVmX%2FOuQtUj%2Fv77oatmRZ35GId1DrN%2FgAd6ePtgzqM0hliU5pWaOJewzdxURB8HDbp704XTye6f50qPgTm52AGkC5DqRJD7qMJBAo6dCzLmDUFRXyYdHD7WLOKNrhQtqTVkR1on5TpZ%2BIZH2u1JSTxa2A64fG4xq2J%2FGOs0hUmdmQaW75GVtU2tK7UBBm7yIVX%2F5a2sOa7GP8VZ%2B3ScjWEqEAydI5eHXfTtL5WQm7xXd1ogquKT%2B0vMrpC09C9AMvO%2FtzvGm0DPCLvvxgF6flv1cChyVmyRnFKKz0RZvtSbJTKFkw3IOsQbtVjcUfSKqCRqWD%2FJt4RqLGb8yVnGexidwRnEtf411wrelAU%2BTjsTrNYp3%2F5lWJna5BXPx9aBDFUn19xttfD5ZQbr9PsJOxKkxxnWaKDHpaKvJP5PpK%2FnlFa8cLJtWvuvmHY%2B%2B6QE19tc2M72CZitJFSRMxROrO%2FxBNtIDaI1PbAftZUe%2BMlNukh1Fah92N6xqr2GMOD77bwGOqUBVkupRM1LYGedc1CPy56Iy75AUyKBuoqlKwIwuG8tpnShx4q6Z35czF3Vw7ApH4U8EnX9Bv5C09jifQSMeHzW0vdrygDYG47uHDdgiLaZxcURgyWTLnoVMp5RlK8uX2iwasbg%2FGDFeOrpN3jXbUScvpwWBWeymwFdh3L0Yzh3I0cjfFFDVmKstCfKSb64C0zlmqKNelgsy0hC5gRsIraAxzzTKUWz&X-Amz-Signature=c507105a5d5411ef591a402ddb3605e085c21ca0e3d2dd1676800a94340ff4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
