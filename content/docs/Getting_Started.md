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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3Q46WF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDeLHlCERtfFkEuOCMlrCbryjxVH%2BvsJ3tEHzrkXE29PgIhAPvIrheIiGIqMsiQ9gFa85hEJ3sRso8BQWdgYcHNXKwvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrKb1hqRXBsjBHTdAq3AOByqbw%2Fm441ql8i%2BzBlqIQbCF%2BmNIGFQgxUkUwduK7f1HjtECg3UBXqtNJ503mSP1dhquxCEYWzsJr%2F4AY6u1h0FR5d7H4st7bAVUOGYbMKSqy%2FZ8Mg%2BHUARmvqn7J7yxw1gplCl9KcaTGLmEcDqFbZ%2FPgWOh70P4H1pa8C2KSk3HflKFIGl5mf%2B7WIbJb6Xqhx0iJn2lAH3R9olIqWmzXPYCOrf8ncx7yIAJjg2bJyT1OfvnU4KPEYYrDI9eKYGM5WPpeRAow%2Bh4z%2Fn5KB3%2FxXWf5nJfb%2B4ozVA2gRCOrMG1jRvEDpugp%2FkaPheDaePgytvwbrhH%2BxTOi3lI5zcc7SaXLNuQbR5WqW84IUyi%2FoBu%2FSv2Na3z0yiGYp%2B1Sf10FmHPtiZd9oC4xIkE5iw%2BLin0E%2BZcGJE%2FEL19xO4WNcxqJOJqenerqMk543vwCICewUsFKZ46O79TKkSgA2LWs5D4QfHIEZOTpyHXYwwDo%2By7lQllVgvQOk60Bfghl716OC5UVn7XAkxpKnsm%2BOKSFFgPWfHmsK0%2Fb4zMcrI%2FOtK%2F26B%2B%2F0TXDORRJTPSvxbbTlg%2BFzzQYyenwGn317LrvMgQfgsVz2FIoJi20wLqcmUGed2R3BDryRnPYCDCznLjRBjqkAdNmtBo%2FBpa8pALHRW4UiOTxG%2FKe6z4PZz3WHd27SYn16KrTSZMcRvaKTQtlV6RaMlOeH5YlDjluDB5AAXGA5EmUq4MSw4CpihqHd72PnXUJgMOxSmDgXztzYmQ9Hz%2FvccGiEewJmEOa5BeHW6eM6pUCGvG7ygoyAFs87YReMAQ%2FXpbr%2B9R9ShyvIwprlRg85IHnEiYzrv1BlLLUfgPbLoflLFom&X-Amz-Signature=c7c07e07804a18d68948b36acb880e5c8dfedb206a91c83d6531e435908ca220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3Q46WF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDeLHlCERtfFkEuOCMlrCbryjxVH%2BvsJ3tEHzrkXE29PgIhAPvIrheIiGIqMsiQ9gFa85hEJ3sRso8BQWdgYcHNXKwvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrKb1hqRXBsjBHTdAq3AOByqbw%2Fm441ql8i%2BzBlqIQbCF%2BmNIGFQgxUkUwduK7f1HjtECg3UBXqtNJ503mSP1dhquxCEYWzsJr%2F4AY6u1h0FR5d7H4st7bAVUOGYbMKSqy%2FZ8Mg%2BHUARmvqn7J7yxw1gplCl9KcaTGLmEcDqFbZ%2FPgWOh70P4H1pa8C2KSk3HflKFIGl5mf%2B7WIbJb6Xqhx0iJn2lAH3R9olIqWmzXPYCOrf8ncx7yIAJjg2bJyT1OfvnU4KPEYYrDI9eKYGM5WPpeRAow%2Bh4z%2Fn5KB3%2FxXWf5nJfb%2B4ozVA2gRCOrMG1jRvEDpugp%2FkaPheDaePgytvwbrhH%2BxTOi3lI5zcc7SaXLNuQbR5WqW84IUyi%2FoBu%2FSv2Na3z0yiGYp%2B1Sf10FmHPtiZd9oC4xIkE5iw%2BLin0E%2BZcGJE%2FEL19xO4WNcxqJOJqenerqMk543vwCICewUsFKZ46O79TKkSgA2LWs5D4QfHIEZOTpyHXYwwDo%2By7lQllVgvQOk60Bfghl716OC5UVn7XAkxpKnsm%2BOKSFFgPWfHmsK0%2Fb4zMcrI%2FOtK%2F26B%2B%2F0TXDORRJTPSvxbbTlg%2BFzzQYyenwGn317LrvMgQfgsVz2FIoJi20wLqcmUGed2R3BDryRnPYCDCznLjRBjqkAdNmtBo%2FBpa8pALHRW4UiOTxG%2FKe6z4PZz3WHd27SYn16KrTSZMcRvaKTQtlV6RaMlOeH5YlDjluDB5AAXGA5EmUq4MSw4CpihqHd72PnXUJgMOxSmDgXztzYmQ9Hz%2FvccGiEewJmEOa5BeHW6eM6pUCGvG7ygoyAFs87YReMAQ%2FXpbr%2B9R9ShyvIwprlRg85IHnEiYzrv1BlLLUfgPbLoflLFom&X-Amz-Signature=ab893a552e52f82aee9194732a15f032738e63006093fe208ea8a98dc6c43eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3Q46WF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDeLHlCERtfFkEuOCMlrCbryjxVH%2BvsJ3tEHzrkXE29PgIhAPvIrheIiGIqMsiQ9gFa85hEJ3sRso8BQWdgYcHNXKwvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrKb1hqRXBsjBHTdAq3AOByqbw%2Fm441ql8i%2BzBlqIQbCF%2BmNIGFQgxUkUwduK7f1HjtECg3UBXqtNJ503mSP1dhquxCEYWzsJr%2F4AY6u1h0FR5d7H4st7bAVUOGYbMKSqy%2FZ8Mg%2BHUARmvqn7J7yxw1gplCl9KcaTGLmEcDqFbZ%2FPgWOh70P4H1pa8C2KSk3HflKFIGl5mf%2B7WIbJb6Xqhx0iJn2lAH3R9olIqWmzXPYCOrf8ncx7yIAJjg2bJyT1OfvnU4KPEYYrDI9eKYGM5WPpeRAow%2Bh4z%2Fn5KB3%2FxXWf5nJfb%2B4ozVA2gRCOrMG1jRvEDpugp%2FkaPheDaePgytvwbrhH%2BxTOi3lI5zcc7SaXLNuQbR5WqW84IUyi%2FoBu%2FSv2Na3z0yiGYp%2B1Sf10FmHPtiZd9oC4xIkE5iw%2BLin0E%2BZcGJE%2FEL19xO4WNcxqJOJqenerqMk543vwCICewUsFKZ46O79TKkSgA2LWs5D4QfHIEZOTpyHXYwwDo%2By7lQllVgvQOk60Bfghl716OC5UVn7XAkxpKnsm%2BOKSFFgPWfHmsK0%2Fb4zMcrI%2FOtK%2F26B%2B%2F0TXDORRJTPSvxbbTlg%2BFzzQYyenwGn317LrvMgQfgsVz2FIoJi20wLqcmUGed2R3BDryRnPYCDCznLjRBjqkAdNmtBo%2FBpa8pALHRW4UiOTxG%2FKe6z4PZz3WHd27SYn16KrTSZMcRvaKTQtlV6RaMlOeH5YlDjluDB5AAXGA5EmUq4MSw4CpihqHd72PnXUJgMOxSmDgXztzYmQ9Hz%2FvccGiEewJmEOa5BeHW6eM6pUCGvG7ygoyAFs87YReMAQ%2FXpbr%2B9R9ShyvIwprlRg85IHnEiYzrv1BlLLUfgPbLoflLFom&X-Amz-Signature=4631f19327844bd888cf0d9cf18fd06354bbb8295255ab0883c0220f7ba9e26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFM4J5Z%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2z9OuNaSdsDYEqcImnZctMhDeF7yp8tnTO2xbZ7KciQIhANi0VN9yfkw874ZVdKrcJ2%2F%2BtTmTTru5%2BUdHaw01YXQ9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzVnRr7cr4JPpfcLz0q3APyWShdoYCxtnq7O7%2B5In%2FSJkdCpYUhFr0TJ9Kxnh9%2FOsP48VHVWQ%2FoV1q0T4JtufTlNWq4Cy3eO92tctCaZleFy01mEi1T0C2%2BdBNWsLXeV5to5B6ZIBzLghi7xitf1czZsZmvEFRP6NiJT%2BV2cx6Bkh3KtvF%2FFx9Ye7pQulwfNcSczRm6060BlTPL7y55W%2BCU1ZNIq2gYkBYE90AdhkV1%2FXlRgcaaPQhsEF6lxeJlfzVgk9e8u5FzoVEzubiEAmkrXzvipHk3rDiZjen10wy17Gp3NnFO%2FZ8nCB%2B2Px2QKM2iLIRtB6%2BsLXAbhQcEeTINptUpW0LBIC0Skl6bpnj8zll0y7qCKedosnO9fuTvBxJJKnbdxhDMOI68FMM3KJRl6mDsbWxXKkFTi2g%2FkisS9HLCcxQusrk3mBb3SXHe0vj9AuWNm2JgKuFyqsjqi3l%2Fcz2SHB58ThTVNPwyUaovgaseKgsvwMStCYbwUZX8DSWuFGZHtwrFgRuOqR2YoAoK2afOZurwaKdBqiSUiiaj9z%2BznIq%2F%2FSyf2CjXqbd0%2FmimhoZ8ww9lX7%2FgXaUFD7Boo1YKqileCA5BqcnenlRXaz%2F%2BtB%2Ba0sMBN2t%2FTiez9GsOwg998xX6Yzj%2BcTCQnbjRBjqkATQwMwIn3U9dTndTaqrvAeZEpYD686QgCLjhHgtN24VFSgClDOZpwwvnt9yRfDCLjnppGkesh2Z5awP5QYaSIfgTmBR59QlJLzL9BaqoBbx5X48EU%2FBDG5F2LrCOEYHmB3YW8rrAIHq1aa%2FLqsiWiPGrPKIPsYkQWZCwVLZ2Fk3i7uBn2sq3hEydW2v4OFD6C%2Bt1uj3GyBIyOuLn0o27Lasoduay&X-Amz-Signature=23aafa6e450254544f173e9a182ea7282726d04ea5a3320b4736767fe6f5ad0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SROTPOOM%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDb6QDGkLpoDc9t9RckjjoH76Q0MOiDKhPE6l2dXZS1XQIhAN1G21bIEElq2oJTjhQBIO55JtsM7cc1AqpH1z16frNFKv8DCDsQABoMNjM3NDIzMTgzODA1IgyIftq%2BnYGtPg7hhmAq3ANA0gsAWx95GS6UwCqKC0s9n91BYz%2FKkxmP1yi%2BKVfVq81JjEGHK2eTokuY%2BKygG0YrGry35DG0bjW6z7PZLpJaYwnpJxvNipR4AkrFQBbVEaKrBVHyGPrr6g72el%2BJKNuQqJ7ORI5Gt2bOsWCc16mg50NXRzKj1Bd%2Fza8DLQqH3P7jNhsVM2DUuMDXkfDc%2FkeugEXecoDlssZT6u55U9h6J1%2BnMH%2B1aylKqUiOR31LMwv6IW8xmEX9dVy563naLNdOsN2AO%2B46TTK%2B2ZtXSgjfUkpShPxSR7ob%2FX0N3h1l3d8xwuJRXvtxsBL61tciBaxpR7ax8J2cnlnqJIanjU9F8SEd125HDg0I9ZY4PsRMYhZYqbt4TT6bf29RC9askVwGZYFJEDRON91jqsL1bk1guGTs7PIFKCVVCf2juz2HFmJSE2n%2F7sa%2B%2FZ0jg%2BfJew%2Fu8g0xd7VoGWlFFjwAPfcPfSUCuYEQd%2F2AC2%2BOCifwcHqPZLmP%2Feg5WvoCMJbpm8SwTp%2BJ1k8TCcg%2BSmh7xI9s3XHJV%2F3n1nO%2BGS1aPy7vImbK3xAKli%2B3ZvQkX5CoCOJu5PqXTOq9sG0kRPMbCgTkQCfmZDuVsZPzQI7wI5p2GmFSTD%2Fxj57jvgZUZzCSnbjRBjqkAUWjI1A4F4MSvChJiEX%2FquKGhh%2FHlLzzvp66%2FlsvtE01UsdkP5Gn79L6y1CQi8vQC5MjpwWDKGE%2FYL5tke7q7Q%2Bp86WU12HDGbjUn09F5h6uYAfjG1Nn0M8cMODNufQC1rzN2%2BqLAdt8WX%2FS7AhSV4JNibWlHaccems%2BKynBV0JML%2FRke9Y0n%2FlLAIZCEH%2Bq63TOFpX5B7Vu2N6f7U3obCwcmGok&X-Amz-Signature=907e571257416c3827b87e2d74536e41879bb6a5d03efbf2bdc9a5063a476b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M3Q46WF%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDeLHlCERtfFkEuOCMlrCbryjxVH%2BvsJ3tEHzrkXE29PgIhAPvIrheIiGIqMsiQ9gFa85hEJ3sRso8BQWdgYcHNXKwvKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrKb1hqRXBsjBHTdAq3AOByqbw%2Fm441ql8i%2BzBlqIQbCF%2BmNIGFQgxUkUwduK7f1HjtECg3UBXqtNJ503mSP1dhquxCEYWzsJr%2F4AY6u1h0FR5d7H4st7bAVUOGYbMKSqy%2FZ8Mg%2BHUARmvqn7J7yxw1gplCl9KcaTGLmEcDqFbZ%2FPgWOh70P4H1pa8C2KSk3HflKFIGl5mf%2B7WIbJb6Xqhx0iJn2lAH3R9olIqWmzXPYCOrf8ncx7yIAJjg2bJyT1OfvnU4KPEYYrDI9eKYGM5WPpeRAow%2Bh4z%2Fn5KB3%2FxXWf5nJfb%2B4ozVA2gRCOrMG1jRvEDpugp%2FkaPheDaePgytvwbrhH%2BxTOi3lI5zcc7SaXLNuQbR5WqW84IUyi%2FoBu%2FSv2Na3z0yiGYp%2B1Sf10FmHPtiZd9oC4xIkE5iw%2BLin0E%2BZcGJE%2FEL19xO4WNcxqJOJqenerqMk543vwCICewUsFKZ46O79TKkSgA2LWs5D4QfHIEZOTpyHXYwwDo%2By7lQllVgvQOk60Bfghl716OC5UVn7XAkxpKnsm%2BOKSFFgPWfHmsK0%2Fb4zMcrI%2FOtK%2F26B%2B%2F0TXDORRJTPSvxbbTlg%2BFzzQYyenwGn317LrvMgQfgsVz2FIoJi20wLqcmUGed2R3BDryRnPYCDCznLjRBjqkAdNmtBo%2FBpa8pALHRW4UiOTxG%2FKe6z4PZz3WHd27SYn16KrTSZMcRvaKTQtlV6RaMlOeH5YlDjluDB5AAXGA5EmUq4MSw4CpihqHd72PnXUJgMOxSmDgXztzYmQ9Hz%2FvccGiEewJmEOa5BeHW6eM6pUCGvG7ygoyAFs87YReMAQ%2FXpbr%2B9R9ShyvIwprlRg85IHnEiYzrv1BlLLUfgPbLoflLFom&X-Amz-Signature=ae2afac1b85efebb0d5df5e333a93b766f19f47f4ccd49ec08542b9b8eafad6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
