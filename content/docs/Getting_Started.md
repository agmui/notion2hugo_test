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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XW4BL%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MDxYSbXFU12aMhLGIkxF6q3WqoQ%2Bh6IOXYxZiFjbUQIgZwlqk750A%2Bl6j7rb%2FhPuu36AzABqaB7%2BfP5Ka%2Fj41LQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHSjdPREaCf7spZOmircA3Ejs93485g6Z8p8QDF9MHwI0Bzc2r8zKkd3ueKdHP4asroxB3vER6CdMzr%2Bshdy3RnIAF2KI6y4QzWb%2FsvPhwsQWIbeUYG73uy0%2Bu6y9LAGwut4RZksrAR7IUYp470qiyiQoHnFOeUjnv1f84CM8KuV8pJjhyJJfr9vat9ANR8g8Rta2poPekUFdOCrwy5v%2B8NFWd6UkOVhH20PF0WsZ8OMo4TNfDF8z6XyXygJvak3ZehY7qNG2zClCwWc9KfY7q7ESQ2LhzJ32c8Th%2F%2Fmnr6Fmghu6mV4bs7qZbzaUZI37HMOYbkH3BrmNj1T%2BaTwIHhWK6jsK4%2BE7M%2FjTnp331bRR8sSjTHbJdAb36C7SKtg0h4eA6nphVaqpruz6V5SEXqvvGbPZ7YCgge1rjEunBTUgx5KdEu0WyVYtj5YwwMnHdpbceCOP3RgtgRanE3t5XgWc5%2Fr%2BOA6TVYRZeoHDumgikFi4sMV8hI7adAK6Cv8Rys1d5kKRGzlQl6lR9peYoY7Lq75oMnA%2FAG8saXEQfA4AhJ3UsEehzexPSls03M1sRSEw2ylMNUo0XNypuwPR7ZZD2lcxRIbwhN7j9sXAt9JSL9QJlDKpOub6qxtDTxYe8U9rPBFqjd8rccoMKbCqs8GOqUBGYkDZMptRWURnjcLop7OU90aJQeT3HihRP3Hn%2FCuDuii1%2B9hiaWIPjH0eqsqzshG9AlgZRSTW%2F9S2RDuF4P9Z0ZZDZwoMWV16w0xARpDMDWGzuVjLhfLpoFZ%2FElJtj9OSAdHgtP5pGfUY%2F3DDNcitk0fGviPh6NoYZZDbtZMLVB2WXd7mlmCUa7VGp0csibFNEhxPBvZxZQe07fI6%2BuDkrCazJAb&X-Amz-Signature=1bcc913d7f4b639db6009bbf9fda2aa4ef1c86dce4c69b601e716f07baf23c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XW4BL%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MDxYSbXFU12aMhLGIkxF6q3WqoQ%2Bh6IOXYxZiFjbUQIgZwlqk750A%2Bl6j7rb%2FhPuu36AzABqaB7%2BfP5Ka%2Fj41LQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHSjdPREaCf7spZOmircA3Ejs93485g6Z8p8QDF9MHwI0Bzc2r8zKkd3ueKdHP4asroxB3vER6CdMzr%2Bshdy3RnIAF2KI6y4QzWb%2FsvPhwsQWIbeUYG73uy0%2Bu6y9LAGwut4RZksrAR7IUYp470qiyiQoHnFOeUjnv1f84CM8KuV8pJjhyJJfr9vat9ANR8g8Rta2poPekUFdOCrwy5v%2B8NFWd6UkOVhH20PF0WsZ8OMo4TNfDF8z6XyXygJvak3ZehY7qNG2zClCwWc9KfY7q7ESQ2LhzJ32c8Th%2F%2Fmnr6Fmghu6mV4bs7qZbzaUZI37HMOYbkH3BrmNj1T%2BaTwIHhWK6jsK4%2BE7M%2FjTnp331bRR8sSjTHbJdAb36C7SKtg0h4eA6nphVaqpruz6V5SEXqvvGbPZ7YCgge1rjEunBTUgx5KdEu0WyVYtj5YwwMnHdpbceCOP3RgtgRanE3t5XgWc5%2Fr%2BOA6TVYRZeoHDumgikFi4sMV8hI7adAK6Cv8Rys1d5kKRGzlQl6lR9peYoY7Lq75oMnA%2FAG8saXEQfA4AhJ3UsEehzexPSls03M1sRSEw2ylMNUo0XNypuwPR7ZZD2lcxRIbwhN7j9sXAt9JSL9QJlDKpOub6qxtDTxYe8U9rPBFqjd8rccoMKbCqs8GOqUBGYkDZMptRWURnjcLop7OU90aJQeT3HihRP3Hn%2FCuDuii1%2B9hiaWIPjH0eqsqzshG9AlgZRSTW%2F9S2RDuF4P9Z0ZZDZwoMWV16w0xARpDMDWGzuVjLhfLpoFZ%2FElJtj9OSAdHgtP5pGfUY%2F3DDNcitk0fGviPh6NoYZZDbtZMLVB2WXd7mlmCUa7VGp0csibFNEhxPBvZxZQe07fI6%2BuDkrCazJAb&X-Amz-Signature=665f355c4991a52d0aaa8b9e0986e7135c1aa760876fd52e68d8c796adf38bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XW4BL%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MDxYSbXFU12aMhLGIkxF6q3WqoQ%2Bh6IOXYxZiFjbUQIgZwlqk750A%2Bl6j7rb%2FhPuu36AzABqaB7%2BfP5Ka%2Fj41LQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHSjdPREaCf7spZOmircA3Ejs93485g6Z8p8QDF9MHwI0Bzc2r8zKkd3ueKdHP4asroxB3vER6CdMzr%2Bshdy3RnIAF2KI6y4QzWb%2FsvPhwsQWIbeUYG73uy0%2Bu6y9LAGwut4RZksrAR7IUYp470qiyiQoHnFOeUjnv1f84CM8KuV8pJjhyJJfr9vat9ANR8g8Rta2poPekUFdOCrwy5v%2B8NFWd6UkOVhH20PF0WsZ8OMo4TNfDF8z6XyXygJvak3ZehY7qNG2zClCwWc9KfY7q7ESQ2LhzJ32c8Th%2F%2Fmnr6Fmghu6mV4bs7qZbzaUZI37HMOYbkH3BrmNj1T%2BaTwIHhWK6jsK4%2BE7M%2FjTnp331bRR8sSjTHbJdAb36C7SKtg0h4eA6nphVaqpruz6V5SEXqvvGbPZ7YCgge1rjEunBTUgx5KdEu0WyVYtj5YwwMnHdpbceCOP3RgtgRanE3t5XgWc5%2Fr%2BOA6TVYRZeoHDumgikFi4sMV8hI7adAK6Cv8Rys1d5kKRGzlQl6lR9peYoY7Lq75oMnA%2FAG8saXEQfA4AhJ3UsEehzexPSls03M1sRSEw2ylMNUo0XNypuwPR7ZZD2lcxRIbwhN7j9sXAt9JSL9QJlDKpOub6qxtDTxYe8U9rPBFqjd8rccoMKbCqs8GOqUBGYkDZMptRWURnjcLop7OU90aJQeT3HihRP3Hn%2FCuDuii1%2B9hiaWIPjH0eqsqzshG9AlgZRSTW%2F9S2RDuF4P9Z0ZZDZwoMWV16w0xARpDMDWGzuVjLhfLpoFZ%2FElJtj9OSAdHgtP5pGfUY%2F3DDNcitk0fGviPh6NoYZZDbtZMLVB2WXd7mlmCUa7VGp0csibFNEhxPBvZxZQe07fI6%2BuDkrCazJAb&X-Amz-Signature=75e3969d2f4ecd674edcd9bd3b4d478068096aaf8608114388d48cce3657bffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466364NP3VO%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcDZUgdJgiCtRfeg3Ejq8mKmyNqcX%2Bx4MmEoIv0Sgt5AIhAK6OQz029FKbd62ZPdkdT8LZDh2DyTuhkQkBSHee5lGNKv8DCHQQABoMNjM3NDIzMTgzODA1IgxD0kB9TO7oX%2BlBgWAq3AML6kxE1l1ayscSaAT2TDEOTyvqw3hUSb6yV9TQXHQLPqaQ304GUFcGJ3IdemPBpHXDEKFalT37Z9nf5lIBQcL5TH2b5oCynI2RCNjyyA80j2bG8mzKH6xz3swX9kEzvmndebO0S1KQ8D1P55Hls%2FvH8HtjFXev5ZxnE1AB36VnN5upavJ29fj3vD3NtpDMGiCiqCAGysF%2FbSjTEvPKZu6V0BzjoCR%2Fg8L4ZRUDMuOKWP4VKADNqiRIZshW%2B7KhhQdy3%2BeryfEnYvvcM%2FpOgwk%2F%2Bu1%2Fo4nZFV%2Fcciq6p0kt1q%2F0rKts8BMSPWEdodNKDksMN6WxjgTq%2BtH79mqgWpQF%2Bc5G1SDqi1grCSNWzL89HYjA9i5b0fj8MGhhN2L1bBQdSoY1%2FZdGrPegqBtUeieRaiTOYNua6uecwNuEDKJ77SrOV%2Fe%2F6WF2iPBv7WXVPI2%2FnmwTxDSUfbBbcsyXENZJ9zVDcWLpk3fXSEbcS5zGYsx19jAJM8jqqb78yAag24ZNoUEKcxPpNvMqSJRPsu1dK00B5Tfj5zh1mm%2F8D491oKpR72LyRjb96jFON2qC6DcBUmZgj7wMNg2KzLlYG2HJ%2BNznvLqHSMur0yKl6mK0S46xa3B%2F9df3wBYcfzDPsKvPBjqkAY4PUXCNYYSLZcv9e9AD9z2%2F8Mwu1f0UfS%2FMKSOsr4r%2F02G67h7bhQ9dOqVx4bdRpDekjci2YqBCHr6jODQ3wgW3ULHS3jB4WO0r4fzJ0ATSlZutNjrh5Y8gE1u%2Fxkcb%2F0ZaxAZjY%2FzN%2FcjVYp88nVmqLLC2UCiSFBS1mL9b%2B9RdMxOBA124OBLDpr3NQkCy2UOXGF6OnT518e8Nw14YPFRtRMCa&X-Amz-Signature=274c760d2409ede2632d4f3800324049be4af727094fbf0948794c96085589b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLTRO37%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmfIz%2BEcuuPUG5yXoLaQjWbZWu%2B0GThMUeDa6Qqg6v8AiEAizcRhThq3qkW3aN2MtNFQiWObSK7ev77coHLoopJT1wq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEgr2720u9h%2Bn8JYHSrcA9lsC8dh%2F3VxKY43qlx2mRepmuZ8Th5wSyKuUCDx0uidHejo37UOOsnHR3qAfcxU4ZZLfTPMZ2R6ZitYBrdKCHkv9l639UCmCw1f%2BZvmTjtTwG4otzuzU1dFtlUxZw2sJSaw7tlwZKkpZxOXD7lLWLq03Pi9jrnWoxfLgzwxQv0iBFf%2FUKGypsTWCLfHOUkMHAy0Q7NhI6y5MF51X6xnsq39KpWGNo6b1Ya8kXcfTxPymIa8yQMr1dG56CYK6ynDe%2FSFxGPEjWRzJY2Gfj5nMgE8c%2Bn%2BmMyKVzCX3LPvCufCOY3a0AvqTocXqlMJsekjnL12ond%2BzyaYnQqd92S6N7EM%2B8NTYgRnM9tyWWlW4ZPib4Hb7lBuv5%2FcEziTtI5Lz5zv0zU9g5hPegGNG%2BbtdxMM1Z1mn6h2D3PNtCtwjor5S7WMFMipyXnNcfxz04AWZC77tA2Kqp99AYnIFEajRvKYdpig16%2Bkld0qCPM6bp0KMnQ6%2BnMxhkF5K2ij4cu5t7nMBw5%2BxbtH7zBYx9wdOjD7GF7BHm3tMdGJ2y6kg1unElV6KOE0RxDoVdwI%2F2mWvD9mdN4v7%2FoZrt6zuTedaVSn6mwYze7yOVBCl1lqv%2FMOOZm4VFeX09XfSbLRMLOsq88GOqUBkArFGyTYwidQCzC%2BpPQoWXOR69uvwUAifEtB7Xq1i98FKVOBn%2BdBOHC%2FgHa6qyCZ0auCM%2FxgVY1xO3EcwsBWM7Wg1U%2Bo2xydxhxF%2FdWquagW%2BtI6rJxCDw1Sq9gi6WcGzES09DzGVYGsj1yCOxPeLpaUF9MxSuBUTXp%2F96gEOuN8p3NrRw%2FRLsTKjKnffrnnTr9t9AuF188lanuX3ELlRwH6gn9c&X-Amz-Signature=3e2e19f22a80f3fa72cf21a2566191fea6b30dd249ee2efbdacd0c45bc4848b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XW4BL%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3MDxYSbXFU12aMhLGIkxF6q3WqoQ%2Bh6IOXYxZiFjbUQIgZwlqk750A%2Bl6j7rb%2FhPuu36AzABqaB7%2BfP5Ka%2Fj41LQq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHSjdPREaCf7spZOmircA3Ejs93485g6Z8p8QDF9MHwI0Bzc2r8zKkd3ueKdHP4asroxB3vER6CdMzr%2Bshdy3RnIAF2KI6y4QzWb%2FsvPhwsQWIbeUYG73uy0%2Bu6y9LAGwut4RZksrAR7IUYp470qiyiQoHnFOeUjnv1f84CM8KuV8pJjhyJJfr9vat9ANR8g8Rta2poPekUFdOCrwy5v%2B8NFWd6UkOVhH20PF0WsZ8OMo4TNfDF8z6XyXygJvak3ZehY7qNG2zClCwWc9KfY7q7ESQ2LhzJ32c8Th%2F%2Fmnr6Fmghu6mV4bs7qZbzaUZI37HMOYbkH3BrmNj1T%2BaTwIHhWK6jsK4%2BE7M%2FjTnp331bRR8sSjTHbJdAb36C7SKtg0h4eA6nphVaqpruz6V5SEXqvvGbPZ7YCgge1rjEunBTUgx5KdEu0WyVYtj5YwwMnHdpbceCOP3RgtgRanE3t5XgWc5%2Fr%2BOA6TVYRZeoHDumgikFi4sMV8hI7adAK6Cv8Rys1d5kKRGzlQl6lR9peYoY7Lq75oMnA%2FAG8saXEQfA4AhJ3UsEehzexPSls03M1sRSEw2ylMNUo0XNypuwPR7ZZD2lcxRIbwhN7j9sXAt9JSL9QJlDKpOub6qxtDTxYe8U9rPBFqjd8rccoMKbCqs8GOqUBGYkDZMptRWURnjcLop7OU90aJQeT3HihRP3Hn%2FCuDuii1%2B9hiaWIPjH0eqsqzshG9AlgZRSTW%2F9S2RDuF4P9Z0ZZDZwoMWV16w0xARpDMDWGzuVjLhfLpoFZ%2FElJtj9OSAdHgtP5pGfUY%2F3DDNcitk0fGviPh6NoYZZDbtZMLVB2WXd7mlmCUa7VGp0csibFNEhxPBvZxZQe07fI6%2BuDkrCazJAb&X-Amz-Signature=becd3948827370401a3a846ac39aa75936da450a4b921161c67de83d56e21cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
