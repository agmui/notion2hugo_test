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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633XFD3C%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCrSlI2DnBQyfFLsJ%2B1O5mlQS8Sq0HxGeSw80XBLts7ywIhAPl5HUiBL9acNeEx%2FLd218IMDHNYsaDBUacWcD%2FyPMa6Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwUnfqRPaais0FhrFUq3ANSd%2FQO7zHFhtJXeiytfyan0Y3%2FrmUFrv1um6AcC1mamAwLr9Qp6qlty9B%2FJ%2Bae4MZLTqHDy2rp%2Fg2G4gu8bEGZP891XvhJkIpd8muwxwY2yPlU45QdzgXZalHYggqfNpsiL9z8lmHDetflQCL0harxcnxpaJ%2BT6Co%2BsApIB3%2BrBqPORlp0BLQsdVezT4cNXkp8KxgjBf5xa2oPhSHQHirByithnlOgpJANQHztmebLUGSktDEED05SKoa0aTylvjmb0v18UR6AK5hCpyTTSY5IRyE%2BMoVVFYKNzGu4eY8pooFpAEqItfu5jbQEgCvqyfRUYqOA9IDe8Oy1dyYHmsETk9Cv%2Btfz6b%2F1fuzM01HgGoelulWpPzzuc7Xvm5d5hmcRu7n%2B5xBlM6cPImI%2BjTDxhD16%2BBUds2xHisSYLVLO1LJto4VO2pa02UW50OCZBZ%2Bf4Y4xB1IJfYhe%2FKNqOmjwpTYpi8jNvmnQzG29U%2F1Yxje%2BsjIDfxpq5AQYUF7DkFVWE0c927E5UkMhxqFUGsieU7sD9dzR14pWkuJx1tynbALdJnsrGYsNA7%2FM8O7esseytFEPbNXjcTJ4N89TmD1abM80mIIbSmBwmS%2B5Df6L%2Fz4lUh0BINpjM1pdNjDa%2Bpa9BjqkASPpjqx9mfwuzoed8FVioS83q%2F%2FBKMAkpW7upxcdh%2FHnSdrKYEU7GB%2B10QQRQU4YTcn%2FG6dTLp0bF8EXxOmTKi9cCaXRuSfLdaqTp92BfENc2YbQaJzFF9TbbsTnqyfq8aXfNTKtq3hLqxBNeHAs1yUcX4u1aqyE5o%2FSBuTt5cjdgdxXNGgBgnMFfAVF0bCATxzYz%2BhtRy0vybOe0ut2os981Igl&X-Amz-Signature=db4d28260d885265b3a387ab7e562cbd210014c66d010856872a0cfcd8817895&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633XFD3C%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCrSlI2DnBQyfFLsJ%2B1O5mlQS8Sq0HxGeSw80XBLts7ywIhAPl5HUiBL9acNeEx%2FLd218IMDHNYsaDBUacWcD%2FyPMa6Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwUnfqRPaais0FhrFUq3ANSd%2FQO7zHFhtJXeiytfyan0Y3%2FrmUFrv1um6AcC1mamAwLr9Qp6qlty9B%2FJ%2Bae4MZLTqHDy2rp%2Fg2G4gu8bEGZP891XvhJkIpd8muwxwY2yPlU45QdzgXZalHYggqfNpsiL9z8lmHDetflQCL0harxcnxpaJ%2BT6Co%2BsApIB3%2BrBqPORlp0BLQsdVezT4cNXkp8KxgjBf5xa2oPhSHQHirByithnlOgpJANQHztmebLUGSktDEED05SKoa0aTylvjmb0v18UR6AK5hCpyTTSY5IRyE%2BMoVVFYKNzGu4eY8pooFpAEqItfu5jbQEgCvqyfRUYqOA9IDe8Oy1dyYHmsETk9Cv%2Btfz6b%2F1fuzM01HgGoelulWpPzzuc7Xvm5d5hmcRu7n%2B5xBlM6cPImI%2BjTDxhD16%2BBUds2xHisSYLVLO1LJto4VO2pa02UW50OCZBZ%2Bf4Y4xB1IJfYhe%2FKNqOmjwpTYpi8jNvmnQzG29U%2F1Yxje%2BsjIDfxpq5AQYUF7DkFVWE0c927E5UkMhxqFUGsieU7sD9dzR14pWkuJx1tynbALdJnsrGYsNA7%2FM8O7esseytFEPbNXjcTJ4N89TmD1abM80mIIbSmBwmS%2B5Df6L%2Fz4lUh0BINpjM1pdNjDa%2Bpa9BjqkASPpjqx9mfwuzoed8FVioS83q%2F%2FBKMAkpW7upxcdh%2FHnSdrKYEU7GB%2B10QQRQU4YTcn%2FG6dTLp0bF8EXxOmTKi9cCaXRuSfLdaqTp92BfENc2YbQaJzFF9TbbsTnqyfq8aXfNTKtq3hLqxBNeHAs1yUcX4u1aqyE5o%2FSBuTt5cjdgdxXNGgBgnMFfAVF0bCATxzYz%2BhtRy0vybOe0ut2os981Igl&X-Amz-Signature=6589767d0562bbd00a2857b0b966416a647fdba4d74b78e63ad473869e7c2923&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U52WVVTI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGO5mEE4LKUxrBLPzno7xZcM2eN4rQD9qnCndLbYjMDJAiBS5vrL5Uz2AX8gHRP8ohAJvwqcf%2Bd4iF7MCAA4%2Bv%2F6Kyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMrp50hxv2sPFo0cmGKtwD3y3oiHtZtXFr4fGqTMtrDI9v8Pp2TDiOOmaOgCSsfPglkWGtlaGgf6iurpjCQ99n3WpRTSUAzFsQc3k%2FSWx9xIn3oU1E6R7p15l52wtFae6rz%2FfRjTduS0E6spnVYT4LaKWN4HJ4rHQ6ePRo1d4YwrZyxhajPVrfF8ZUJYS8NR%2B5tD%2FdPK62%2FQ2kD2nzSiPo7MBY1dyLZ1OXGJvSM7gEzOcz7CHMiH6%2BEblCXAqOku%2FtWsBs%2F%2B4sH7VkyZEO4kSgFRR9O02yV0k%2F6pP8N2x4fNqRYbqalK2XzXM%2FkbeMZ3VwXdr%2BEarIbdr2gDLjw%2BmxoexqbX6DMCTLI2zVFfo0UjzKaP6ueXMEuEH0q41995aDavGJ8Op2vL8E%2FQCRFNi2188QPdXmQKPFLEp1loY3w2PbUZT6gXWeeodq6UHXolrLlK3klBJfXoAPUPjiey6mXzV%2FtRUoQsrC%2BpcHi3KAl5m3x6QKE3tmqQINMuLhQlpwWt0LZywBWIWTfXXBykMPSENfZfyDA2JIFi2wUgPBCwtJgoEBYMRFpH1x6HT6HN311s6kIlQoj2fXovk5QpPRbXQANVGHaWdoHUXM8g68LlnZnfgqVm3tTbRlipoBCMRvk0%2FBE2%2BXL%2FfdXFgwgPyWvQY6pgFvQdBkOi25suH%2F3hB62Tx4XklYphxoX0%2FnLfEEoPJfGGFx%2B3SG2CQIvsjvkOiy1w43Ozg%2FWVt4MqtKhKChNxyeoRG7uYP84YyMIjHgolHpbV3QwR9eWkxqQLIAmuBeIyEaEu2II6%2BJmOr6fms8awGA713mFwo0rSaS9gaLh1ARzghuBtEtIqfjGBDBGShuSd7KtfNUQyWmFWLgNQrMm67qisWcKKdP&X-Amz-Signature=3b4fa9ee6d64fda403976efea0b738ee9550b10f09f34b2ff670965feb78fa34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QDKHXZB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHwstDmGy%2BJqZ0bHVFawRXt4SnP4vrE9WOzK9bW85yA6AiEArZ9XChJlNcBaYL0%2BvXnaaGE39mqwIeCZ9su%2ByuJsUSYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFYotHbyzOp0TiYFCircAzTOobGQUppkpQgFU9Lf74UjmKw1ea9rJxzPDf2ZF%2Fme%2BDaddRAcHQwkZ5WlMsHXl6IpQDILeUY5%2FN9T7mHlbAfWRSzE8wFx%2Fm24%2F28Dvxy52Yt4Gt7EXaqbETuQqVP%2FWQNUSZExFGhK33wcepHpV4ie8Sy8wWnhNvG8czqPVHpnpzldgQfLhN2RVmhOR285pUa9b6PH7dWT06xC4fnUMMwNrVWyjRu4W01sbfXcfzBuaA9ioAhFKJRM3tfG7L3SnTJugx%2F15ygCzSKvKMy%2BpTCtFsp9qk48hdvfXVweQo2rAx5fWVoLm0c3WWNdqC8KFwlT45qhghmV6sv3Xj2j0hMOOHAyUnLYNpf2QFXx58FDQyuibDlcdd%2BmRnuzaAxxRYGvlzanhOwDfbr%2BRK%2BP9UZnPwUCeamgINn38OyG9cLf9RJeqek8i7vPQo%2FUrlcG8JKNYAxdjERa0W3cuTBvAYR09pYden8tklwuMZLPFSyIFxDFvEI1eBw%2FsrPTeWFbBf2f6LlZNzV5ciGq5KZOTSHMlbMcpXXJ0VERKurwrLItnzwQwvIjYj9%2Bmw95PfbCEA6lmTgg1XDov9pElcooYDZDHMiExfnZ%2FhS4ujjdUzS49E%2BIH%2Fv8ktBSh6WTMNT6lr0GOqUBy9fHY4WTD8YlfeZ9ax984fKcXTLVMLdjfjaYhNcF677kqLbORtJyJj7G8ilzJYsESlXZ9VWzmxfcwsXX9f%2BFjK7zmfQcZ99Jkk9%2BQjARjBgV8yzumg2LQI%2BAMiy5NUIaNt63Le8n%2B6QYfhnQ4GGP%2FwwOnz4P6uVH%2FcvEwTeocx6sBgei7NOgYfWwD7g1KSFZfQBn%2BkwEBNDorlGz%2FaVrH%2FhUFYRn&X-Amz-Signature=f710010da5d16c49c3b3f4e0cf45b5e093f4007b2bcb289dd2801e30925da19a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633XFD3C%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCrSlI2DnBQyfFLsJ%2B1O5mlQS8Sq0HxGeSw80XBLts7ywIhAPl5HUiBL9acNeEx%2FLd218IMDHNYsaDBUacWcD%2FyPMa6Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwUnfqRPaais0FhrFUq3ANSd%2FQO7zHFhtJXeiytfyan0Y3%2FrmUFrv1um6AcC1mamAwLr9Qp6qlty9B%2FJ%2Bae4MZLTqHDy2rp%2Fg2G4gu8bEGZP891XvhJkIpd8muwxwY2yPlU45QdzgXZalHYggqfNpsiL9z8lmHDetflQCL0harxcnxpaJ%2BT6Co%2BsApIB3%2BrBqPORlp0BLQsdVezT4cNXkp8KxgjBf5xa2oPhSHQHirByithnlOgpJANQHztmebLUGSktDEED05SKoa0aTylvjmb0v18UR6AK5hCpyTTSY5IRyE%2BMoVVFYKNzGu4eY8pooFpAEqItfu5jbQEgCvqyfRUYqOA9IDe8Oy1dyYHmsETk9Cv%2Btfz6b%2F1fuzM01HgGoelulWpPzzuc7Xvm5d5hmcRu7n%2B5xBlM6cPImI%2BjTDxhD16%2BBUds2xHisSYLVLO1LJto4VO2pa02UW50OCZBZ%2Bf4Y4xB1IJfYhe%2FKNqOmjwpTYpi8jNvmnQzG29U%2F1Yxje%2BsjIDfxpq5AQYUF7DkFVWE0c927E5UkMhxqFUGsieU7sD9dzR14pWkuJx1tynbALdJnsrGYsNA7%2FM8O7esseytFEPbNXjcTJ4N89TmD1abM80mIIbSmBwmS%2B5Df6L%2Fz4lUh0BINpjM1pdNjDa%2Bpa9BjqkASPpjqx9mfwuzoed8FVioS83q%2F%2FBKMAkpW7upxcdh%2FHnSdrKYEU7GB%2B10QQRQU4YTcn%2FG6dTLp0bF8EXxOmTKi9cCaXRuSfLdaqTp92BfENc2YbQaJzFF9TbbsTnqyfq8aXfNTKtq3hLqxBNeHAs1yUcX4u1aqyE5o%2FSBuTt5cjdgdxXNGgBgnMFfAVF0bCATxzYz%2BhtRy0vybOe0ut2os981Igl&X-Amz-Signature=4204e86d7ccd4a1c6d67bafb2aa0dd767735f0255fdc103e3f3bef578830fca4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
