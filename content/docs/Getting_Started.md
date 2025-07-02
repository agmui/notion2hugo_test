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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD45566E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET99qYeC62K2hPUux%2FcUoFozXdgAuREQtttMRjobbiJAiEAoC%2B49sXROs6aVNr0NhyMbVz9g0%2FjH3rZxVIUcqdusKUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDan7%2B9W3YAIkiK%2BCrcA5iY2kAneTWMyQRJk%2FyA%2FRd0%2FflbgIrgxiJXUGEJWUXN32KkI4dqhAX8g5os4mnRQ%2FlsrR6hf%2BGZMu4Z6yDNRI6ZprqdHe5FsNULUXXNiWNTRugSRsVF9f08Su8jKeY7om1HZlgUEa%2Fl9FE7%2FmwYy0YsIo6B%2BrXhJLcP%2BPBldaW0Ddct152Jues6spYsA2oB5E8Vak6HK0sgUwY0%2FDLBLxsZmd0tx%2FNES6aqqR7vzOG5On6EM%2Br0VdpdZiXdzFbCZ7i5BdkDakQVpsaWneI1Dli6E%2BGUF6Kahh3Qm1fSvSUCms2rm%2BmVZzx33GI7hEF1a0NZjWOr9yiK3twZXtFmTjhVzcZOq%2Bez%2BeFT%2FyNWvWN%2FoLmbOgI0Ew88WBJZYaatWD0KFr2Wmu5QIvpy%2Fv2P1u1RKWctfBpKyjOHBCuKXuKrMZMZJWK1d3vi5iLCD4fnLRCzuY4rK1tNmJTH09st7RzW%2FcISzQFGFfeDJl3HIU9Gl1dVLT7yz7CB%2FDtDyBItGE0NX7wGhcxSd6B4kDyHvJ5XH%2Bjgp%2Bmz3PL8BjtNUuwgs4WVN2O8PtSgiUZdw6dNxEQhxdQFCnRt%2BJSjnxJQgzl0D8NKikHogM3111UP7xmrKTK5FvnXdz3CCqnZMOqTlsMGOqUBpMMQfrFXnNuheuYaCSv6obt2rAHfoTaMh0To5C8%2FhyHV2yA%2BXkgxGoNBZHwMIZm3jX%2FlW6OveMUFUPka1%2FKTJi5dhC11UO8SQ%2FfaHRWob9jaCS9KLx3SiWy%2F4JYaNzRckAYOk4GrzBMYkGzEfH7Wd6N0pRZRkz4kP9ui6cUp%2FyIi5u8PbJeDhLO%2Flea9n1xAEQcJn%2Bok8tZWJDVBPJtgTmD0iGIg&X-Amz-Signature=3065a322b00850cd2bfe963e5f29dc069f7c3994f09d24f5054ad9af59947d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD45566E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET99qYeC62K2hPUux%2FcUoFozXdgAuREQtttMRjobbiJAiEAoC%2B49sXROs6aVNr0NhyMbVz9g0%2FjH3rZxVIUcqdusKUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDan7%2B9W3YAIkiK%2BCrcA5iY2kAneTWMyQRJk%2FyA%2FRd0%2FflbgIrgxiJXUGEJWUXN32KkI4dqhAX8g5os4mnRQ%2FlsrR6hf%2BGZMu4Z6yDNRI6ZprqdHe5FsNULUXXNiWNTRugSRsVF9f08Su8jKeY7om1HZlgUEa%2Fl9FE7%2FmwYy0YsIo6B%2BrXhJLcP%2BPBldaW0Ddct152Jues6spYsA2oB5E8Vak6HK0sgUwY0%2FDLBLxsZmd0tx%2FNES6aqqR7vzOG5On6EM%2Br0VdpdZiXdzFbCZ7i5BdkDakQVpsaWneI1Dli6E%2BGUF6Kahh3Qm1fSvSUCms2rm%2BmVZzx33GI7hEF1a0NZjWOr9yiK3twZXtFmTjhVzcZOq%2Bez%2BeFT%2FyNWvWN%2FoLmbOgI0Ew88WBJZYaatWD0KFr2Wmu5QIvpy%2Fv2P1u1RKWctfBpKyjOHBCuKXuKrMZMZJWK1d3vi5iLCD4fnLRCzuY4rK1tNmJTH09st7RzW%2FcISzQFGFfeDJl3HIU9Gl1dVLT7yz7CB%2FDtDyBItGE0NX7wGhcxSd6B4kDyHvJ5XH%2Bjgp%2Bmz3PL8BjtNUuwgs4WVN2O8PtSgiUZdw6dNxEQhxdQFCnRt%2BJSjnxJQgzl0D8NKikHogM3111UP7xmrKTK5FvnXdz3CCqnZMOqTlsMGOqUBpMMQfrFXnNuheuYaCSv6obt2rAHfoTaMh0To5C8%2FhyHV2yA%2BXkgxGoNBZHwMIZm3jX%2FlW6OveMUFUPka1%2FKTJi5dhC11UO8SQ%2FfaHRWob9jaCS9KLx3SiWy%2F4JYaNzRckAYOk4GrzBMYkGzEfH7Wd6N0pRZRkz4kP9ui6cUp%2FyIi5u8PbJeDhLO%2Flea9n1xAEQcJn%2Bok8tZWJDVBPJtgTmD0iGIg&X-Amz-Signature=a2619a1d80e3b23a23d43dd210f9c6d80cf432e6c9288e423c5a922cdab836e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD45566E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET99qYeC62K2hPUux%2FcUoFozXdgAuREQtttMRjobbiJAiEAoC%2B49sXROs6aVNr0NhyMbVz9g0%2FjH3rZxVIUcqdusKUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDan7%2B9W3YAIkiK%2BCrcA5iY2kAneTWMyQRJk%2FyA%2FRd0%2FflbgIrgxiJXUGEJWUXN32KkI4dqhAX8g5os4mnRQ%2FlsrR6hf%2BGZMu4Z6yDNRI6ZprqdHe5FsNULUXXNiWNTRugSRsVF9f08Su8jKeY7om1HZlgUEa%2Fl9FE7%2FmwYy0YsIo6B%2BrXhJLcP%2BPBldaW0Ddct152Jues6spYsA2oB5E8Vak6HK0sgUwY0%2FDLBLxsZmd0tx%2FNES6aqqR7vzOG5On6EM%2Br0VdpdZiXdzFbCZ7i5BdkDakQVpsaWneI1Dli6E%2BGUF6Kahh3Qm1fSvSUCms2rm%2BmVZzx33GI7hEF1a0NZjWOr9yiK3twZXtFmTjhVzcZOq%2Bez%2BeFT%2FyNWvWN%2FoLmbOgI0Ew88WBJZYaatWD0KFr2Wmu5QIvpy%2Fv2P1u1RKWctfBpKyjOHBCuKXuKrMZMZJWK1d3vi5iLCD4fnLRCzuY4rK1tNmJTH09st7RzW%2FcISzQFGFfeDJl3HIU9Gl1dVLT7yz7CB%2FDtDyBItGE0NX7wGhcxSd6B4kDyHvJ5XH%2Bjgp%2Bmz3PL8BjtNUuwgs4WVN2O8PtSgiUZdw6dNxEQhxdQFCnRt%2BJSjnxJQgzl0D8NKikHogM3111UP7xmrKTK5FvnXdz3CCqnZMOqTlsMGOqUBpMMQfrFXnNuheuYaCSv6obt2rAHfoTaMh0To5C8%2FhyHV2yA%2BXkgxGoNBZHwMIZm3jX%2FlW6OveMUFUPka1%2FKTJi5dhC11UO8SQ%2FfaHRWob9jaCS9KLx3SiWy%2F4JYaNzRckAYOk4GrzBMYkGzEfH7Wd6N0pRZRkz4kP9ui6cUp%2FyIi5u8PbJeDhLO%2Flea9n1xAEQcJn%2Bok8tZWJDVBPJtgTmD0iGIg&X-Amz-Signature=54ceb5973d33630bb5deb59f0353cf23e480cd8c98b1afef45b3339eed452af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4UWC2W%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDacx%2FiX14MRpHlmweS17CNJKtY7WZbOgE%2FyzZ9TJ03XQIhAMeQhyB%2F5LRYhE8hkabJxPTDQWhRxLj3bS38Z3RJro91KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWPfTeu%2FF5NLdIuWoq3ANwElrqy6awTpUBCcCMZ8Jocqsrt6MTnS22QbMJknl4BgzCrvvxJWNri5ARKSSsuSJY2Qc0%2B3qoJLwnPmh1G0OZaKW%2FSjeYEZlqzjXzS480DJcm8ppPb1DPf1wKRokMoUeL5x1En9EvHd1u67OEnhkt3GdAODm%2FENsfnbTzIOS%2FEvT2dQ7hO4oHzxAPtQASXOez0ubI5TSX2b4KpmpYjizyymGa0VpSIJ%2FB8pqiNZXYwBPrefS9Aa0jhV%2Ftxug2BdJSU5zy7W9d%2FIk2%2FzOAD3I2ePxIOIbu%2BrDp3%2Bn0Q6p2U6ZoXtERadsV5g%2BkzhJBZB7htUmO400NuGAKik2bo4M6hGPEAE4dcUMG7JCnjwUCseOUUT8hs%2Fc4V3Y7FAv%2FqmniVVVWisiD7925pV%2B3TREBBdjEgZTwXSg9DeWHZwM7XFygrOa8i8ZKTM9ClJ46YUfYXeDG6QYF4Cx57VTP0LKDAI1Q9rTcOI%2FvK6%2FyoT8E8htdyJZvCIPBS0suYDbxvaeP%2B653459DcsmI9MB7PNvoCDKbyfsAv20VQ7%2F6ZqzHfhuhkNhcEr6cg4ppTM%2BycwF2mXfDr2IB7nn%2BOzIgs2BzLta0zQ0IP%2FaRgAxEO3vn8TcEvTQPLmyX%2BI7vBTDVk5bDBjqkAaM2sfwvzt5iGGo446ORATWVVhnJwu0Z4AoBp1tCdAq%2FBlJYfNpAaybieQt3zi2GTPrv9gWZ54NzDbrSuH1HyTLvJZcbLELl7i5gCLbZOJrLQ%2FC1Lllg%2FYEVh7LZ3lK5QhuQzYa7LR5EEJgtRKtXfhj52RmV5pRrzblDf4Z7WExjF5McdOeVFO02ysNm7na6YDPnMKim87DTkFvNRoF2aCQct5bp&X-Amz-Signature=428cf48bf1ccd3018ddd723b80b06be6b8ac19c4d81b369714153aba1bd8b049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ONFRQGY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV%2BPBoxH7hhhCm8J7%2FYWoHrdJJrZtWko%2B8%2B1%2Bd0wPtOAiB9QIR7zJo9ewatCtL1J0%2FEmEZh0amtX0xSvef7KS7ypiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUAqkEJ9%2BwyZ%2B%2FRTfKtwDlmeMlIVZIr3KSVeIZeF7aJR9ufhk8AMQsPM57tH%2FzsuDkL4ZSvZnC9GXAF9dR4avDgVSbS%2Blsu9nyNQOPApRpvH3%2BDnWya0yrGWD%2B2gEK5QVgRRSdxvNEhcYrP%2BXRnM5Ov5g4oiiZdWXQsZEpg0cVnwv3qLy1PVEy3GVBY23ImG0CL45mbKQA3ng48%2FrjiMR6qGm2J31pNdFinxqybSo%2FTFN3RqkAo1IxHgzhUihW0JVvX10MjZaMa4HmqBrQUW3i37Zl%2FtScmxK7RtTv1f8arFnCMVI6pCHi%2BP9FH8CVEWfOSYNiHzvfktHmW18jZ1OMeBfiKPVExH8Sb9mzXwSfZGczNFwqktDyJDeKkMMCeH9Ap7GZLePFAx4Idaar4IKLokJkOlQ3irZxUk5%2BHv23285rwV64T8WGZq%2FnrsDj7qQ6BO3%2BH3zdpDXD9wjhyPWDqhXxdkX5YW4Wj3b525MLZ%2BCoiYIbqy0hxaxKMVMSEpZ7r7HuS6hJiU%2FX%2FNVWlgDQaou%2BwH%2FI25nS%2FIQ5q1AmVQqsVW%2FM6zSxQcRZq5hIkUJ%2Btjs3D1uM8uVnByG4oeIQHwlWmAH2elklAw2DcqKoDk73Mrn5Qgj36N0CD%2Fw8eH9sVNO4ijXTDv3NscwkZSWwwY6pgHsiPByIgn3%2Btn4QxJOn%2F46u8WdC45kE4ITHseceXis4qzO6dDsDOGihk5PZBRQze5SzVgz051wBq85aZ6PzTYncJiLfdhnZjxNcxHnhgzq9%2BFB1T3mB%2B9xe%2BWBKqruW3IDAuO%2B1S6shx5vJhCAx9ROFurgqdnj3ZLmQVYeBRObBI2TwDOg9bE5xE3FaJBm8BDnWqwC2HvsrvGBL62JVkgJK8ZgDKF5&X-Amz-Signature=92ad53772bdcc60d804433982cc790609754218c19a1397a2a6b9a0d1d2ba61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD45566E%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET99qYeC62K2hPUux%2FcUoFozXdgAuREQtttMRjobbiJAiEAoC%2B49sXROs6aVNr0NhyMbVz9g0%2FjH3rZxVIUcqdusKUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDan7%2B9W3YAIkiK%2BCrcA5iY2kAneTWMyQRJk%2FyA%2FRd0%2FflbgIrgxiJXUGEJWUXN32KkI4dqhAX8g5os4mnRQ%2FlsrR6hf%2BGZMu4Z6yDNRI6ZprqdHe5FsNULUXXNiWNTRugSRsVF9f08Su8jKeY7om1HZlgUEa%2Fl9FE7%2FmwYy0YsIo6B%2BrXhJLcP%2BPBldaW0Ddct152Jues6spYsA2oB5E8Vak6HK0sgUwY0%2FDLBLxsZmd0tx%2FNES6aqqR7vzOG5On6EM%2Br0VdpdZiXdzFbCZ7i5BdkDakQVpsaWneI1Dli6E%2BGUF6Kahh3Qm1fSvSUCms2rm%2BmVZzx33GI7hEF1a0NZjWOr9yiK3twZXtFmTjhVzcZOq%2Bez%2BeFT%2FyNWvWN%2FoLmbOgI0Ew88WBJZYaatWD0KFr2Wmu5QIvpy%2Fv2P1u1RKWctfBpKyjOHBCuKXuKrMZMZJWK1d3vi5iLCD4fnLRCzuY4rK1tNmJTH09st7RzW%2FcISzQFGFfeDJl3HIU9Gl1dVLT7yz7CB%2FDtDyBItGE0NX7wGhcxSd6B4kDyHvJ5XH%2Bjgp%2Bmz3PL8BjtNUuwgs4WVN2O8PtSgiUZdw6dNxEQhxdQFCnRt%2BJSjnxJQgzl0D8NKikHogM3111UP7xmrKTK5FvnXdz3CCqnZMOqTlsMGOqUBpMMQfrFXnNuheuYaCSv6obt2rAHfoTaMh0To5C8%2FhyHV2yA%2BXkgxGoNBZHwMIZm3jX%2FlW6OveMUFUPka1%2FKTJi5dhC11UO8SQ%2FfaHRWob9jaCS9KLx3SiWy%2F4JYaNzRckAYOk4GrzBMYkGzEfH7Wd6N0pRZRkz4kP9ui6cUp%2FyIi5u8PbJeDhLO%2Flea9n1xAEQcJn%2Bok8tZWJDVBPJtgTmD0iGIg&X-Amz-Signature=af0ff44e316b5061e404ff6482c967a79ad906ae3cb0c5bbd2e9406fec560db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
