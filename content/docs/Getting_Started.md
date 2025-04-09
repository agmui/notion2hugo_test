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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644EMDUFL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDCMLvLZdADSEh%2F4Ckd2Y5cYal6HjWC5uDFK225HJdvqAIgJ3ux4WmrR2ZRfo6MnHzzjsmL0XlZgNbcc0ddXrDob%2FQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCUcQZjBRss6tXShircA8S%2Bu6Pv3ENndwHEZ6i2xkEexHAMkw%2Fwez9O043rWLdbsQsg4fniaLUj0Pj6MUfGU%2FvJnDKQ0BSUwIR5u92659QQfnwnC2IkwN%2BwHZOm1irh5bCLs%2FpxoN9sNN4yTfHRnrST1Cy6QD73UP%2BtL0qt82gIo5CG7GMWlo67gzRbV19T8imTWJl26V9j36%2Ba4aC3K1nYQErQ0xhKNsEvrm93CstalnCXLDV4bBKUqva9oKL6z0qidcI4dKNGx7v2fzrYSIQ5ToYxmhC6apLg8yA0pjpUbEXDo3AA%2BfwMeJDBF394qnw6cMfCPKOYv349KOMpzckqAICBv0gGfLYsBonvWDVYHmSuRapbGLmQFHWhqgD59eFFZaCxQ3JimGhrXl%2FtmrXjCCdiOU7hF00oirNWeV1XGelfKgIkJvW9zlPWdaPlljd5dZ%2FVApJjHIJTKk1XtUXCkRf8uxEm%2B6ZnYVNz%2FPy5PDQxR8S%2B3M0poY2m%2BnowAAASQG5iKaRonjqB4%2BpmeDRgGAz9XXJ8zLPJOpGm%2BQo6dmTlT9kAAF0brUZacZ3aokvL28xU0g%2F0A3nckYVpC%2BzPIi0BDNEkrxbMuPLzHqTskHM3DUw2F0E%2FWxiaNQs6D37CNqWLZfvhc%2FOmMLGW2r8GOqUBUjCdoidvDBUZJWwaCV7Wzp9sSPw6ugTgfdplGeVGU5DPQ6Jhy1Fn1%2FwgCZVwjiEHbP66WQv7T9t0HrjyK%2F6olyUy9F9NVX15W2snnuatjrnq%2FZUX5lzo12YPQ6%2B8dXdYYwX6fozZzaoUsunG6gMpHLGWNUj8C0de21QQFKj1pMPySmqraQhTV72HTCizDKm%2BAypzWp5%2FabkzaG83HS6kZ3ZcI1hL&X-Amz-Signature=b126f8a76238f3e5de20eebb220b99596f3b12b27957098da98c4f1e12e52fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644EMDUFL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDCMLvLZdADSEh%2F4Ckd2Y5cYal6HjWC5uDFK225HJdvqAIgJ3ux4WmrR2ZRfo6MnHzzjsmL0XlZgNbcc0ddXrDob%2FQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCUcQZjBRss6tXShircA8S%2Bu6Pv3ENndwHEZ6i2xkEexHAMkw%2Fwez9O043rWLdbsQsg4fniaLUj0Pj6MUfGU%2FvJnDKQ0BSUwIR5u92659QQfnwnC2IkwN%2BwHZOm1irh5bCLs%2FpxoN9sNN4yTfHRnrST1Cy6QD73UP%2BtL0qt82gIo5CG7GMWlo67gzRbV19T8imTWJl26V9j36%2Ba4aC3K1nYQErQ0xhKNsEvrm93CstalnCXLDV4bBKUqva9oKL6z0qidcI4dKNGx7v2fzrYSIQ5ToYxmhC6apLg8yA0pjpUbEXDo3AA%2BfwMeJDBF394qnw6cMfCPKOYv349KOMpzckqAICBv0gGfLYsBonvWDVYHmSuRapbGLmQFHWhqgD59eFFZaCxQ3JimGhrXl%2FtmrXjCCdiOU7hF00oirNWeV1XGelfKgIkJvW9zlPWdaPlljd5dZ%2FVApJjHIJTKk1XtUXCkRf8uxEm%2B6ZnYVNz%2FPy5PDQxR8S%2B3M0poY2m%2BnowAAASQG5iKaRonjqB4%2BpmeDRgGAz9XXJ8zLPJOpGm%2BQo6dmTlT9kAAF0brUZacZ3aokvL28xU0g%2F0A3nckYVpC%2BzPIi0BDNEkrxbMuPLzHqTskHM3DUw2F0E%2FWxiaNQs6D37CNqWLZfvhc%2FOmMLGW2r8GOqUBUjCdoidvDBUZJWwaCV7Wzp9sSPw6ugTgfdplGeVGU5DPQ6Jhy1Fn1%2FwgCZVwjiEHbP66WQv7T9t0HrjyK%2F6olyUy9F9NVX15W2snnuatjrnq%2FZUX5lzo12YPQ6%2B8dXdYYwX6fozZzaoUsunG6gMpHLGWNUj8C0de21QQFKj1pMPySmqraQhTV72HTCizDKm%2BAypzWp5%2FabkzaG83HS6kZ3ZcI1hL&X-Amz-Signature=c2a5afe03b2d6117a19cb52e7d71fa23239b065549630d876aa7c955f2417cca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRA6EBDW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDv1UN46Ihpq3qsZTqOOVwrFAAoSM5gPNFNoKMzBlrM3QIhAOlU3tOWxtIYus%2FbI3O3f9aA7lhgcHniSTTdgZv9MEr2KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaXMUh%2F95h0VzqNBwq3AOvle2FEcOZqoRJjQK0aVQitcUQgqs8TxkiZttTQu0cIwjXIHP7WHiKjCVk%2FaqG0g9fhlECEvqOF%2BMqlqEaVkqvAPBarLNONjccQWGJCOSwGw4wMrMqfUdiJNqTs%2FbZc5Mt1zIMDKeOW4vFVkCIyUdszNsDpakhGrZVQWUOIy4Wrx0680ecfXiXaq2rhKqmVfHtcI%2FDYex1r4Izwdu1At%2BfmgtvEYwEAFmxoHYqtEBgCzjvS4aEBfaRgH71bvafY6YqeCO9kUFTdBvZmjq%2FLzafrnGN7AzHm6mh1N8YzT5PTPy9ux7QO5oE4puhHEXsgudrvIw0ZjSUC%2BKuxGp%2Fk89lmZeWFwqhmk0huhjxBzwT9yRYFaeXHCcQ7%2Bhxk241PpxJvxDkbcbmmaO2tExc0335IZLNn4ZCneijCLvC3Ckmcd34bOWLAj5VS5HgYiKbTxWLUUoXcxPFHd3n3MuHWeyWgcX772nJL5aFXqfFdYhRaKrqdZX7dMegZt%2BBD2bWIGRvoLfDDibDsghVJoEaC6Fg6iy0MYkUABg67WXiQiPKnajR%2BtxbGrfEvQHq6SMEyLuzvvUjp3DF2IFE9Hm8Hlru90uugoGVzR9JVJWocJ8Q8FwOYCe4mF6HejmZxDCpltq%2FBjqkAUQ14cEGS2OkQl%2ByWThaT%2F0xqRPpgJhGiT0HtmMUiwUgCfd2dyMh0cck0VhrguuxEmxxnyQ2URQfVqHRz%2FAf%2BZXrpmxCB0GM5QKuGjlX1u7M2zXYFc3vrrrYi0fuFHz6%2FHP%2FMy6tN151cSPQxU%2BJroidDE%2B0yD8lw%2FlibsU%2BvlHtA3j2114SrGyvGoQAy2jeHhUVY4u8KeUpzEUJfkZzB0jATuWv&X-Amz-Signature=a243d1bc7d939f5141469247a2d0e75cecd99167ef6b14e06509f2f40ca1ae91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FSFJSEL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCeMn8LZjEB%2F7REFaXHLuqALhExQa49iMortIA0u6NFawIhAPYqkNNl7xERPRkyaJOxqBoeCMhCYzAAUfKKNzXgSqTQKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykrrtMNFWaYNztpMYq3AMMBHGIHl27S12zHJTogX2NVDLyDGWKQWHaIMoaTuNFx7I8pmO7ryK5KRatiU3q5lxfGHhFs4bXoxUAE6oQjb77spLRqhjkYqYTR7cnvK7rMoKnZUOLbv%2BgAsi%2BcPj%2BbUA85QpVTlBDFpmJoPpl8xOV%2Fx0mFxNQnnZ2WeA14cLbpAaNKwaTXLLbpvjH2BPj9Md5XQYHkdB6nYY%2BcQW4aHv5rM7kZw2BdcLF6wdR%2BHXJhLCy9hosVLO1hXPQdNBEC0v0UG8AIQvfCBOyuq%2B5KU6RY9m1DxlNnNz9u7k1c8LAf%2BL2yGSXIOJgBA7SOAcb4vZkxXjtg3825RElky7vka3q4VRJoo7V6iVDI5VKrFNz8xLzJswVhx8ZTs%2BySKkS7sX%2FJumF%2FO3fj1OPE%2F8DeY%2Bktv7oDtgZzL4NAk4rtOoiJCb%2FYNgKKwR4EPB8jqC0orOUT6wPR6%2B7K9EQpL3SsZTiI6Ex2CPPsQly1Gm5e5wQ2a25cCX3WTT8G%2B27adcOgWQFmXk%2BOmvAYsVU7Rj0fhat%2BnubVRNJv57xreovWOVwR0gXVWVgr8PrwQ5ZhDqQdcQvexkF%2BGDQyPwgpCWwcFVS5wIXYRS%2B%2FrcjG2IlmjNa4wOS3iqbXcwb6SK%2FxzCwltq%2FBjqkARsEhZZF2SBFLg5R763U47ORqYmSGk3vsFMoLYshs3e7RhdS4c0ge1R6STscMPZR%2FoOcVhw4cihMCHrDG6SCJcVq4ykYYz1oep3X2y1qyz2W2vjr%2BEMurbCdZFN%2BpvWLRNsOHLTnhq771I9TGv6o0vKIlARTdB88b686orEAj%2BebVD9yC9NvHqHOLkCX9elWMKSJFpmB686HYRgD882njTvDZ5hj&X-Amz-Signature=80401209617b01f0787a69ad4790a8edc56448846353653f5bb06b722829821d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644EMDUFL%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDCMLvLZdADSEh%2F4Ckd2Y5cYal6HjWC5uDFK225HJdvqAIgJ3ux4WmrR2ZRfo6MnHzzjsmL0XlZgNbcc0ddXrDob%2FQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCUcQZjBRss6tXShircA8S%2Bu6Pv3ENndwHEZ6i2xkEexHAMkw%2Fwez9O043rWLdbsQsg4fniaLUj0Pj6MUfGU%2FvJnDKQ0BSUwIR5u92659QQfnwnC2IkwN%2BwHZOm1irh5bCLs%2FpxoN9sNN4yTfHRnrST1Cy6QD73UP%2BtL0qt82gIo5CG7GMWlo67gzRbV19T8imTWJl26V9j36%2Ba4aC3K1nYQErQ0xhKNsEvrm93CstalnCXLDV4bBKUqva9oKL6z0qidcI4dKNGx7v2fzrYSIQ5ToYxmhC6apLg8yA0pjpUbEXDo3AA%2BfwMeJDBF394qnw6cMfCPKOYv349KOMpzckqAICBv0gGfLYsBonvWDVYHmSuRapbGLmQFHWhqgD59eFFZaCxQ3JimGhrXl%2FtmrXjCCdiOU7hF00oirNWeV1XGelfKgIkJvW9zlPWdaPlljd5dZ%2FVApJjHIJTKk1XtUXCkRf8uxEm%2B6ZnYVNz%2FPy5PDQxR8S%2B3M0poY2m%2BnowAAASQG5iKaRonjqB4%2BpmeDRgGAz9XXJ8zLPJOpGm%2BQo6dmTlT9kAAF0brUZacZ3aokvL28xU0g%2F0A3nckYVpC%2BzPIi0BDNEkrxbMuPLzHqTskHM3DUw2F0E%2FWxiaNQs6D37CNqWLZfvhc%2FOmMLGW2r8GOqUBUjCdoidvDBUZJWwaCV7Wzp9sSPw6ugTgfdplGeVGU5DPQ6Jhy1Fn1%2FwgCZVwjiEHbP66WQv7T9t0HrjyK%2F6olyUy9F9NVX15W2snnuatjrnq%2FZUX5lzo12YPQ6%2B8dXdYYwX6fozZzaoUsunG6gMpHLGWNUj8C0de21QQFKj1pMPySmqraQhTV72HTCizDKm%2BAypzWp5%2FabkzaG83HS6kZ3ZcI1hL&X-Amz-Signature=7e4aa59f430723c2f89110437becf8ab84892bef44f5f30138e995c0590d2bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
