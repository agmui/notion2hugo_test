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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UHLAKK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWDJpzV%2BWgtDe6XOTV%2F23UKv%2F3dxlAiin3s4q9z29%2BwIgODMfkLI0uX9E3W0wstsDoqbrrx2Lsh9ILLoAgugokwIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHYGG0%2FSum4GlQ91sircA7F8cm6oGsX5vXXWDAVbUcHQslDz3tCbCMK9opSqdD9ejZBxbpQyqIh%2FvbpeSagwbl22rIA71Zjz99WDIMbs9X0udcBEqUSoY5No1OgUCujt1zOhSRK8a5Wp4cwsF1hTFycP%2BzYSF7PN2dtUDEXi2gTffoYHatG8xu5RVwiO9Q57XInijw1G5NOmZDHSY%2BqIz%2Bqd5LMK9iLkOp%2BlKQ0wtUcsckaFPiwk5ro5l9lPu3epsEDWLTVXd7x%2FUD4GvkYw5CVl0u6CGstWRZymbV4SI%2BxKtli88aRrCQyK%2BUCVdFng0vaDYiot8ZzktYhZlyKu0XhkLAkO33hIh8RC%2FVAQCVCOgIn6KTFdXmuRr0m8H0P4c7i1C4q68QZy2MtQuRekBpDJzmauzjOr%2BmjV9WpVFp%2Fu6HuPUAblgROPv0Dmll8wljzEgW5S5AK%2F%2FwO6V4VanAN1qa6bUKrVnarGdAT3v5RmPY13ukvVqEZ9eCOV4PrS59DSWxnUBwf49P7OK8MdluomEtl4zmPBKPqLTozDHeDJgTWoAceZ%2FMrbqp2lDFZvDEHwpO9KuprzwwUSqiPkCjjkeBHX4o9SqfzgJVRy9YYFvZfK6hdnxGYsRUDF3bizUF7QmVjGfvrl9S5qMOaC4r4GOqUBWQAFCIShb4O%2BDcu1tx4%2FiAHC5VDSVjnkPC3Ey05uvYUejO0NAqA0Qr59z3X%2Bp79iMoCOMZCt9kk3MfoJvKahBspVtOUz22myQZZxEvLZvWA9OkM%2F7F9psSMVi5UgWPA9YdUZQp7ZomwmeC4aD3NZ2YiwKoVRVN2RAG0DCAnw1NfAgRamwc3eBFiZ1FUXWl5AooEUKsbJ%2FPrtjG6boxzG%2Bby%2Fb3t%2F&X-Amz-Signature=85938c1af374a471b876400ca37dd3165d7204e52538da7f39aedbed38ab4864&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UHLAKK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWDJpzV%2BWgtDe6XOTV%2F23UKv%2F3dxlAiin3s4q9z29%2BwIgODMfkLI0uX9E3W0wstsDoqbrrx2Lsh9ILLoAgugokwIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHYGG0%2FSum4GlQ91sircA7F8cm6oGsX5vXXWDAVbUcHQslDz3tCbCMK9opSqdD9ejZBxbpQyqIh%2FvbpeSagwbl22rIA71Zjz99WDIMbs9X0udcBEqUSoY5No1OgUCujt1zOhSRK8a5Wp4cwsF1hTFycP%2BzYSF7PN2dtUDEXi2gTffoYHatG8xu5RVwiO9Q57XInijw1G5NOmZDHSY%2BqIz%2Bqd5LMK9iLkOp%2BlKQ0wtUcsckaFPiwk5ro5l9lPu3epsEDWLTVXd7x%2FUD4GvkYw5CVl0u6CGstWRZymbV4SI%2BxKtli88aRrCQyK%2BUCVdFng0vaDYiot8ZzktYhZlyKu0XhkLAkO33hIh8RC%2FVAQCVCOgIn6KTFdXmuRr0m8H0P4c7i1C4q68QZy2MtQuRekBpDJzmauzjOr%2BmjV9WpVFp%2Fu6HuPUAblgROPv0Dmll8wljzEgW5S5AK%2F%2FwO6V4VanAN1qa6bUKrVnarGdAT3v5RmPY13ukvVqEZ9eCOV4PrS59DSWxnUBwf49P7OK8MdluomEtl4zmPBKPqLTozDHeDJgTWoAceZ%2FMrbqp2lDFZvDEHwpO9KuprzwwUSqiPkCjjkeBHX4o9SqfzgJVRy9YYFvZfK6hdnxGYsRUDF3bizUF7QmVjGfvrl9S5qMOaC4r4GOqUBWQAFCIShb4O%2BDcu1tx4%2FiAHC5VDSVjnkPC3Ey05uvYUejO0NAqA0Qr59z3X%2Bp79iMoCOMZCt9kk3MfoJvKahBspVtOUz22myQZZxEvLZvWA9OkM%2F7F9psSMVi5UgWPA9YdUZQp7ZomwmeC4aD3NZ2YiwKoVRVN2RAG0DCAnw1NfAgRamwc3eBFiZ1FUXWl5AooEUKsbJ%2FPrtjG6boxzG%2Bby%2Fb3t%2F&X-Amz-Signature=199362ead600dd9d196c345bffa91ff3a561c6b89fe3e03b80b0bb1cf6af3698&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXL5H3FW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfXrHfFgPtulgcGdIk%2Fe50ED3PBTnscAyHRZ8t4qM3VwIhAO%2BVEKp75V1EG%2Bd9iJgeq7%2FVV436%2FnQ6lbYFIUMI6CyhKv8DCE0QABoMNjM3NDIzMTgzODA1Igyn%2FvtjCZTTYmC0RjMq3AMkNdBaJZI8jQl8%2BkcntDnx96KK1QUH2szp5ryHwhRfEC4hmUnUOY%2F1KzdJhEP1aT9DVOyAwkKhLvGLD04Uhb6tklH%2FUZuoZv%2BluHTiFH4zqXaSdRuuJnqgvQHRTxRJgyy7p3MuRZBdjIVj6BhKJFvYN8CsBTdM73%2BvzPuaQ301HMxA7IO%2BCjky1dQDwuWiYdWlQFQQ45K0Ggfx2x4h3vRPu1Eqm%2B5AVrqJGeXnOa0OQAclBS%2BwMrq7BxWAk9RPAGM7p2yg1j63C0CwdedxILZtDrlfF4%2FxF8NXXCw0WIbEsm0g8ktk8si02I6DrOKfTetVcA3bqgpWF0xGgbthMALreEZwvnhX4Kt5cJl0XC%2FV2krPCfSaL%2FEKtuBZD9NnunJz%2BA%2F0vg42%2FoLmlhWKp7cX7Wv0Dtuopyc22HPQMZMg6JPnwvckPgdSYbxDnsEuhBYFuYXxDMe7dmgqBgbQrsdIuHuaz0MdAZF20vf0XJcLLMH3wnhCi%2B8%2F3Xm6fV0FZfPqjTCb8PcYPRax6Xl6Tf%2FyvMmeTD5DPWrxlgcwEKw3%2FCnQ8oIfyrg8XzN%2BtIqyuv%2FUeD%2Bwz22hJAbtPo7lFO03w82DOj2j9Oh9fZKbQ0J73QcPZoq20nxUoD7BbDDUguK%2BBjqkAQEORxelx%2Fx9MV9zkBZxP56OfhKVIvqV8Jxgd3XTPYt%2Bt9CI9WMrDMMWm5FN1HaeFrHtg%2BoI8XC9JjR7dU2lR0yXcSb0gVVk790bz6cWGZLACSR0YGpU7vgrMakZn5riIlUb2Dkn30Py2gptqXSTinTuO0PzlzoeNgSqjELxKGbCNPWLANplY8G2U3CVyxIOs8dGJnvmcZUDWniuKr0o2VLgrvQb&X-Amz-Signature=31608631b7f807dced4961b0a58e06f29106ddfbe9786370071bdaddc9d7fcf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWYERYWS%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2pjeNnbjYOO%2BMfGP1x9XwUw8WBc%2Fca%2B7Z54uAxj1d8AiEAqHUefW3VILZq%2FBS2%2Fvl04lnz%2FptO99hvSe4Tc3IfLXcq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDOlEDgeW4jW9f70BDCrcA4IVuARXlFEIHYrjD8bLaaPKcp3ZX0yO4FzdF9WvPSwDQLDB1V%2BvXgmxc0JBnR7QQghb%2FNr36NUGSsbqPq6cFZ%2BpL4YTKpP%2BNoPwgBlj3p%2Buo4Gs45ce9mxBTzUxQv8tedBvVuvPPmcRGQqlERxzQ5EXiNgDzkvVJrwSmAvTC2AszJp%2B9jlEq79TAwN6fuE3fRGrLb6U106Dh3pdT13VLbF%2BnbNNaMXZTDv%2FQ6Zz%2BPeyVhygWCxCU7aRCIGnIQuz0JvnH7J%2FUYUHbcYF%2FFkceMcGFyCCmEdCY01bOVtx7JvWg0wNQJoRqtqekVRKvQgiVGhX1WwhngPkqegi%2BW7Skij2tEO0i0K%2BQcEUktx2FyEKGd%2FSXE8G9gy%2FT44l1%2B06Q3aXTv4OmU%2Bu30HWwmNhiSgnRzLzAzOZ%2B3CcKqY1ltULCEQwf%2BvHWVG%2BRpu3AZJ63rjpz6Jc6%2BMHqDV0PJc8TEb%2BxfvRPm1dp6VINozijcd09fv6eWWY5lgOAw7ii7KZMFiS9yxXeprBB%2FRoGju2jr8PSRwpFlaNPIIBdIgVYhKVoDET0OXHL96hADUhBeg7iidRcmeoc7hYi68nNkfbXHmGb7QWx%2FfPqQTLnKmJxEpke%2B6URldIIvAE15KvMNyC4r4GOqUBEimjDor1DIiFptm5NhKWfkMGU4djMFF9ig4iXNl%2BAOjRKGLfmHDt7XKwj9n%2F%2BbptwG5oDFp4Vb%2FO569wSLksufTaksqOli8Yvv9hBAbidIzKcr%2Bos3gVRsL5GoyqZ2JI85UFWNzhajtGIPgiOQQTLnQzjRQTguiZ3Qx93DayqBPyeYl0g8ToNNtL6PI4MwiHLwxe2z82DXHLuGFa%2F%2BBmH0LSdwfF&X-Amz-Signature=199e7255846e17cc3a9d05d028ac9e44f75dfe64ffb2ab88576975f147d1f313&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4UHLAKK%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTWDJpzV%2BWgtDe6XOTV%2F23UKv%2F3dxlAiin3s4q9z29%2BwIgODMfkLI0uX9E3W0wstsDoqbrrx2Lsh9ILLoAgugokwIq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDHYGG0%2FSum4GlQ91sircA7F8cm6oGsX5vXXWDAVbUcHQslDz3tCbCMK9opSqdD9ejZBxbpQyqIh%2FvbpeSagwbl22rIA71Zjz99WDIMbs9X0udcBEqUSoY5No1OgUCujt1zOhSRK8a5Wp4cwsF1hTFycP%2BzYSF7PN2dtUDEXi2gTffoYHatG8xu5RVwiO9Q57XInijw1G5NOmZDHSY%2BqIz%2Bqd5LMK9iLkOp%2BlKQ0wtUcsckaFPiwk5ro5l9lPu3epsEDWLTVXd7x%2FUD4GvkYw5CVl0u6CGstWRZymbV4SI%2BxKtli88aRrCQyK%2BUCVdFng0vaDYiot8ZzktYhZlyKu0XhkLAkO33hIh8RC%2FVAQCVCOgIn6KTFdXmuRr0m8H0P4c7i1C4q68QZy2MtQuRekBpDJzmauzjOr%2BmjV9WpVFp%2Fu6HuPUAblgROPv0Dmll8wljzEgW5S5AK%2F%2FwO6V4VanAN1qa6bUKrVnarGdAT3v5RmPY13ukvVqEZ9eCOV4PrS59DSWxnUBwf49P7OK8MdluomEtl4zmPBKPqLTozDHeDJgTWoAceZ%2FMrbqp2lDFZvDEHwpO9KuprzwwUSqiPkCjjkeBHX4o9SqfzgJVRy9YYFvZfK6hdnxGYsRUDF3bizUF7QmVjGfvrl9S5qMOaC4r4GOqUBWQAFCIShb4O%2BDcu1tx4%2FiAHC5VDSVjnkPC3Ey05uvYUejO0NAqA0Qr59z3X%2Bp79iMoCOMZCt9kk3MfoJvKahBspVtOUz22myQZZxEvLZvWA9OkM%2F7F9psSMVi5UgWPA9YdUZQp7ZomwmeC4aD3NZ2YiwKoVRVN2RAG0DCAnw1NfAgRamwc3eBFiZ1FUXWl5AooEUKsbJ%2FPrtjG6boxzG%2Bby%2Fb3t%2F&X-Amz-Signature=e0efbb7622573614d86cb14520bbc0d6c798cbddcf4084338e50b8b124898da3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
