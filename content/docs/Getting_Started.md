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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVPTM4M%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGQVVl3SpGLCPbYkX8inya5ulp6FFIMcrTnnLikFlE4HAiBxEemAEjKDY9Smh4xso7lLzgB9%2B6wfVYC7DwwICTPyySqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzrRAluMeH4RcjKMzKtwDChpyaLtsok8Y8dH%2BMtF6Oy0hbPzkWtw2ym1xG5LJlG6TQ7C2NXMVEGnh%2FTmE9Y0ToRZWi2Gbc34S5ej9UgfKQzSx%2FUaRuzT722bPqlqrsSntnFOpM6IkKgBiO%2FjZF1L0iqAFOLgpMghps%2BjpHQWiFbBw8%2BuCk%2BBrntEcRgGY31wJ2JWonLMr3pmMybwsQYXtN%2BiXcyNPYxUI7%2BDBX%2FbkWpINo1L5QBhoIWerav1GLGDcnoRPnThnAbTaErFG1kiwovQvfXrKhEObl6j224Rhhh%2BWc5uEw%2B4weRKQf%2BNvph6AFIppLOqogFRWtMPkVcjwkOxamhe%2BdAEAIIkSL7JYOTXwNyLiP7ntdeeXhH1PvuIw4mHxnEQGzbZLRrW7CzWyqGrz4qHQax5muf7KnSmnN0sxsz7EF0gRfYYltOOJ%2Bl%2FsJkLHUWKrZP%2FRjZA7gfNJtgw6PeM07xbXqTa1NsH6IHXvsxj02ck8d7YD5iOVaPkMIfohgK8KcQu4a5jwHETaT4yKvR2Xb2aIGE1If9wDieJBCtzyU%2BivSzu55OheOSUigxYVEZ2iqgveFiwC91DmU9SSDDe24auBO6MOrnW150utDmD3C72vb4vCWO%2FyqvNMKPQipWKOYv9E0ecwo6CPwAY6pgHIGEsht2jFbxE%2FDGXYt9M1RJF0HJksl6Gmb1nZU1o9fQ3D0kQG3GLMju86R%2BM4zHkypNlSmGe5Gcu3fFeQMCEqM%2BXgDig%2BXT9XBZtYDWbulohNNEIubQDpETHQmmPb6bXF65IOLE37e60rEaduwZCztzb1p0OrvOcwCrKgeC1OL4FTAxpuCucg3ctco%2BXP0Ws4EoISE82qBzTa4oIswpyDlTqFEjt6&X-Amz-Signature=e1ba301ce91233ecbfa626e2d9e5e570d8bbafdee95a2db72c2d451e8b90223b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVPTM4M%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGQVVl3SpGLCPbYkX8inya5ulp6FFIMcrTnnLikFlE4HAiBxEemAEjKDY9Smh4xso7lLzgB9%2B6wfVYC7DwwICTPyySqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzrRAluMeH4RcjKMzKtwDChpyaLtsok8Y8dH%2BMtF6Oy0hbPzkWtw2ym1xG5LJlG6TQ7C2NXMVEGnh%2FTmE9Y0ToRZWi2Gbc34S5ej9UgfKQzSx%2FUaRuzT722bPqlqrsSntnFOpM6IkKgBiO%2FjZF1L0iqAFOLgpMghps%2BjpHQWiFbBw8%2BuCk%2BBrntEcRgGY31wJ2JWonLMr3pmMybwsQYXtN%2BiXcyNPYxUI7%2BDBX%2FbkWpINo1L5QBhoIWerav1GLGDcnoRPnThnAbTaErFG1kiwovQvfXrKhEObl6j224Rhhh%2BWc5uEw%2B4weRKQf%2BNvph6AFIppLOqogFRWtMPkVcjwkOxamhe%2BdAEAIIkSL7JYOTXwNyLiP7ntdeeXhH1PvuIw4mHxnEQGzbZLRrW7CzWyqGrz4qHQax5muf7KnSmnN0sxsz7EF0gRfYYltOOJ%2Bl%2FsJkLHUWKrZP%2FRjZA7gfNJtgw6PeM07xbXqTa1NsH6IHXvsxj02ck8d7YD5iOVaPkMIfohgK8KcQu4a5jwHETaT4yKvR2Xb2aIGE1If9wDieJBCtzyU%2BivSzu55OheOSUigxYVEZ2iqgveFiwC91DmU9SSDDe24auBO6MOrnW150utDmD3C72vb4vCWO%2FyqvNMKPQipWKOYv9E0ecwo6CPwAY6pgHIGEsht2jFbxE%2FDGXYt9M1RJF0HJksl6Gmb1nZU1o9fQ3D0kQG3GLMju86R%2BM4zHkypNlSmGe5Gcu3fFeQMCEqM%2BXgDig%2BXT9XBZtYDWbulohNNEIubQDpETHQmmPb6bXF65IOLE37e60rEaduwZCztzb1p0OrvOcwCrKgeC1OL4FTAxpuCucg3ctco%2BXP0Ws4EoISE82qBzTa4oIswpyDlTqFEjt6&X-Amz-Signature=281dd8016fc4ca85396b2139a06dced243da483c1dad809991d032ca673e962d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGDMCUA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCiDNreZ8A%2FeNa09LcBROZwwhvT9syl6g7csKQfAtFI3AIgdU9xTy%2Brk2TdZP%2FXKm8PVCU%2FkwHi3RVmsGrBV9k1NGkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGsb2mYx0YOFITfGircA3AjSSDZlsZiIzQIxXSnkNpu3g09p87R3wPgRFxpvRaMNNNimnC1ON0S7Tahp5WxtGvwPBupKSiCxBWqZ7KduaVAkwKmNbMQ2koDa1FFOoJ4PE9bF3wcWW9Y16emaSt%2Fm89wjBDeEQXmGKeNbsY1CN84aOmSioCikH8VI6mgIm9lQhw0HCK7Y6rJVCYFFDLwX5H8wbW2odf9C7tp9tBFe2ALkMSfQAKzK3bNk1AnIpbOMdg%2FN%2BQvpcpqaJN47qsnSbfcJSEEp%2B96HCtU3T4TCMqho9QkOjMJ6iy3TlmBUzJTHlAB%2FUPtwHC9Tu9ZJYPkDcSgNTNdKeSAcUNpYdOgSjXL3Rm4oQlp1mzF%2FOuQw3jJA2VRXHV8UAONZ7yKoNZKWZf1ojJvAeGawAnH%2FuXB%2FmcFZyiMbBS%2BKIcf7ts%2FwGDBfl%2Ftq%2B5rXbyEGnFp5euTJTmQ8pyi8CnNBn%2BRLwRfygvmXEzUiEcOmxGZcosVgpzKbZ%2FMrCQcPG72aC2OlE7dLrCYu8884bKG7tGuNqTE70c3pfn2P7SVsyAu%2BcOXc9Alqea0LdYFGKeWheihglPPrL1KitZWziPJgHL3JrzVNccULBNFVk1U0ZV9U12KN4UC6siFlTX9w5d5T0qvMJugj8AGOqUBfh1g4ekGZfcXMXFA2fAx5C9Fce9yfGX7EV1npnKSbgZs1hRokXvRMg4JUwvM6Dn%2FOTjJJGyyXQFVJ0seg24NwVjoYQ5wyoyMDIDywQjjeeViaGq%2BdD31a1GzOs1EyAoqQatePdt56pbtaeBguI%2FVVH1VPqL0VtDd1PUOH96smerH8DdE3FsLuzmFRh0bWxGfWFsFj1eRFKm7F3LL6sz8SjOYGiDG&X-Amz-Signature=168a94230329342a7fbf45dde26835e0c449f35a23cf7917c14cf79e3f2e183a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZEPCPSU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCHhwMc9TyXO6GIR%2BUq%2BVsoRSVzEWurQJGGuhatFvg7CQIhAM%2BaOIx4RAm5x4bb5ffBNbEC7JV4r6U6uQwxQIXYp3MbKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVEAtjGH%2FcSREWcs4q3ANaMbzmeL5m8cReCaMwQBJR%2B%2BGg%2BY288ebQL4dC9aMqD%2FRmFKFBbxscmzO8h6rsriKRdNQFM9SKCZooNgGAHSpsqBxyNALrV8nTpt6PKFUsD%2FJ%2BIyJePeAioYUAaWSB5wzNYRlkaOS%2BcOWwTOjjT5BgIJ9MwRuSsO0ONRs1me%2Bbw%2F%2BOpO1hnPGIWJkgnARpeycx620vAOwwYyjP09JiuMA0YvPCScsLfoSJykzxlmqvaWizyv6reHCn26FsWUi12jeAUDSJ%2Fd4Qd6a4BUBXzrMtXz015ljLsK%2F53sRjinXoWbW06%2B9NsGB70BcqfvZ0FfNyvks6iap2eYrE4LMB3c8hKRILOYeKnSOz0Vd8a2N7IxVzNkt6eW5PbmzlErf2%2F4CDwisSqHta5iD3X5aVcphnm%2FrtfBifoeK4r9kLGTJ8FJ2Ug54epcLr5ySlyPvLwzf8Hglkwwat05lBIuyHZcNrpXP%2FnXaQ4HymudjWTwjulVf6JRKHw5HEyxSV7RH5%2BbFcPxUsK6PM5EPPPcJQGK6ybAeIxd6FrBc6S0FpMV7oeHhEQZvnPkO3BYnp953IXnAg9YQ7%2FRLVJ2ehbaJcIGVNGkx1125leBNbL0DHA7sZ9TaXwSjFbyXDIKmNfDD%2Fn4%2FABjqkASWdahs4JCBWS4PZtWJV5rplXMmcwVTQa4sXf8emM%2BmC6%2FswHPsxwfFnx5pqROCSKL1ktGEiwirTDYkSswSxljUE%2FIv%2FAwptqxlIjnzYtHRHXc%2FzqImv1YlYHJ8ZF65%2FB5V%2BsoldbdlOhHMJ687mU0nF0RUUGhJDS2PXVewgo2pFoyxV1qi%2F7PRazAc%2FAS5MbhT%2F2RMm8mkm%2FboTnrLo4rrJqc9i&X-Amz-Signature=577eba5f5364077f5758df4c1c50ed38a5f81119552db4bc06f27d4636614486&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZVPTM4M%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGQVVl3SpGLCPbYkX8inya5ulp6FFIMcrTnnLikFlE4HAiBxEemAEjKDY9Smh4xso7lLzgB9%2B6wfVYC7DwwICTPyySqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzrRAluMeH4RcjKMzKtwDChpyaLtsok8Y8dH%2BMtF6Oy0hbPzkWtw2ym1xG5LJlG6TQ7C2NXMVEGnh%2FTmE9Y0ToRZWi2Gbc34S5ej9UgfKQzSx%2FUaRuzT722bPqlqrsSntnFOpM6IkKgBiO%2FjZF1L0iqAFOLgpMghps%2BjpHQWiFbBw8%2BuCk%2BBrntEcRgGY31wJ2JWonLMr3pmMybwsQYXtN%2BiXcyNPYxUI7%2BDBX%2FbkWpINo1L5QBhoIWerav1GLGDcnoRPnThnAbTaErFG1kiwovQvfXrKhEObl6j224Rhhh%2BWc5uEw%2B4weRKQf%2BNvph6AFIppLOqogFRWtMPkVcjwkOxamhe%2BdAEAIIkSL7JYOTXwNyLiP7ntdeeXhH1PvuIw4mHxnEQGzbZLRrW7CzWyqGrz4qHQax5muf7KnSmnN0sxsz7EF0gRfYYltOOJ%2Bl%2FsJkLHUWKrZP%2FRjZA7gfNJtgw6PeM07xbXqTa1NsH6IHXvsxj02ck8d7YD5iOVaPkMIfohgK8KcQu4a5jwHETaT4yKvR2Xb2aIGE1If9wDieJBCtzyU%2BivSzu55OheOSUigxYVEZ2iqgveFiwC91DmU9SSDDe24auBO6MOrnW150utDmD3C72vb4vCWO%2FyqvNMKPQipWKOYv9E0ecwo6CPwAY6pgHIGEsht2jFbxE%2FDGXYt9M1RJF0HJksl6Gmb1nZU1o9fQ3D0kQG3GLMju86R%2BM4zHkypNlSmGe5Gcu3fFeQMCEqM%2BXgDig%2BXT9XBZtYDWbulohNNEIubQDpETHQmmPb6bXF65IOLE37e60rEaduwZCztzb1p0OrvOcwCrKgeC1OL4FTAxpuCucg3ctco%2BXP0Ws4EoISE82qBzTa4oIswpyDlTqFEjt6&X-Amz-Signature=ad361b959ea61d5124b54674d6c1ff18165f049d634c18066456d793ff794e54&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
