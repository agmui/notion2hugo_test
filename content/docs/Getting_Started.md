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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHHC7UC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpfOOmkwKpXrj%2FTkjwkXNeFClP9k9Fv4%2F%2FbeDPzRKGCQIhAMOF4yjafS73nd%2BGpLQNyjlBUwheaJVAuH%2F5dVxHIr1NKv8DCGUQABoMNjM3NDIzMTgzODA1IgxMp3ZnJ4VfHeS0wkoq3ANIkGJkEM4QjxTou3KnyVLXVdUM4u%2FuRDcpBrAq1mnH18aS%2FT10eOopy83GgkvdtKAt1i%2BCgJ6lDlQcMxr5lhf1RarCwG7ibJHUVxrJ%2FtTLVM%2FTFMYdoRPoT2Zbx00NRljgAUC7Ey2G5Ub6ghMpPxqf6CYmjxF7DIOXCY8tdobWgDJtEOotL1J195um%2BJxUeKUgxCQIay5DC3JRPQ88tdUJZrNs8H4lWVB8FlyLQgnZKGPI0swAUz4%2BJOa2%2B6Ji7FQ0mIj6do9yb81iv8lLHddEWX3oFlNiu%2BPeXYsuoVNRJvMIJdmFqWFuWxviBqJSFDOycxem0sfNDtH6YCO7QGkuBwC8c%2BnXRg2Nx9VgwxGQSbMY057ro9kvttY2XSytGqmOy87E1L3kob6nzFSDxRAPiGwfqJEyOmr7yUOycunC7pBz8sdAD1IxFFhaIvu12WUWJsGZq9Ur6atxE3tXBe2siS3LzrpgQAThDShi2hckzKdUQroWpjBQ4JV%2FuHEL%2B8oBLijxFdVKboBSw%2BDuPQYTH%2FqQUP1%2BTWz0XImXHUlX5i%2BmEtOHO80j22VoYPboiWkVTBF2INTaU%2FwkCdYUQF0KTTpQxdSa9OdYw%2F3l3gLeNpgHn81Td8pWPYqtRzDX9Ju%2FBjqkAfrmVFe%2BeoI2HtctnhZMlMKXqMKNAD6TIgBunoxFfLv4mYinfNdod0b2%2BMYW5zjudPxuxuYQ8jBfSKGKxGEGuKUKOmjkJVf%2Fdtjdrj52ZzLyj2TFWui%2F8FLIkCtPsDFBHV2JsPwk2yBTLjkyaYpoagFEwzhvElzWqM179SihbG2hxBIIgPhUEanWg2k1cPcuEwTDiE61jbidlzVW9UCCoigA0yr1&X-Amz-Signature=f05eae611ac2cd3fc201b008d85d0713cdf129a65f2a159c96b6c9b5e336040c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHHC7UC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpfOOmkwKpXrj%2FTkjwkXNeFClP9k9Fv4%2F%2FbeDPzRKGCQIhAMOF4yjafS73nd%2BGpLQNyjlBUwheaJVAuH%2F5dVxHIr1NKv8DCGUQABoMNjM3NDIzMTgzODA1IgxMp3ZnJ4VfHeS0wkoq3ANIkGJkEM4QjxTou3KnyVLXVdUM4u%2FuRDcpBrAq1mnH18aS%2FT10eOopy83GgkvdtKAt1i%2BCgJ6lDlQcMxr5lhf1RarCwG7ibJHUVxrJ%2FtTLVM%2FTFMYdoRPoT2Zbx00NRljgAUC7Ey2G5Ub6ghMpPxqf6CYmjxF7DIOXCY8tdobWgDJtEOotL1J195um%2BJxUeKUgxCQIay5DC3JRPQ88tdUJZrNs8H4lWVB8FlyLQgnZKGPI0swAUz4%2BJOa2%2B6Ji7FQ0mIj6do9yb81iv8lLHddEWX3oFlNiu%2BPeXYsuoVNRJvMIJdmFqWFuWxviBqJSFDOycxem0sfNDtH6YCO7QGkuBwC8c%2BnXRg2Nx9VgwxGQSbMY057ro9kvttY2XSytGqmOy87E1L3kob6nzFSDxRAPiGwfqJEyOmr7yUOycunC7pBz8sdAD1IxFFhaIvu12WUWJsGZq9Ur6atxE3tXBe2siS3LzrpgQAThDShi2hckzKdUQroWpjBQ4JV%2FuHEL%2B8oBLijxFdVKboBSw%2BDuPQYTH%2FqQUP1%2BTWz0XImXHUlX5i%2BmEtOHO80j22VoYPboiWkVTBF2INTaU%2FwkCdYUQF0KTTpQxdSa9OdYw%2F3l3gLeNpgHn81Td8pWPYqtRzDX9Ju%2FBjqkAfrmVFe%2BeoI2HtctnhZMlMKXqMKNAD6TIgBunoxFfLv4mYinfNdod0b2%2BMYW5zjudPxuxuYQ8jBfSKGKxGEGuKUKOmjkJVf%2Fdtjdrj52ZzLyj2TFWui%2F8FLIkCtPsDFBHV2JsPwk2yBTLjkyaYpoagFEwzhvElzWqM179SihbG2hxBIIgPhUEanWg2k1cPcuEwTDiE61jbidlzVW9UCCoigA0yr1&X-Amz-Signature=a7558ec150868be7badd4bce3a3a497ea848b558aa3359064d7657078aa880e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMPZAFBX%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj6d6oYkmqJlgOw28vAB%2Blh5h%2BJPUroODv1KoxWIE13gIgKMeO0CQPSEPs%2BvYy%2B9h5Q52CF3FUdtNpWdQSE8NhYMIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIR2QClyCMBqyjj9GCrcA5yfcqrUc8cTg4066GlRl7MZ20%2Bh%2BSMNEtbD9vu5COxwuV%2BH2W82fVL87S4%2FLdJmWTzDiWLqIef6mVvEsBwcFhJf0hnQik5ywVaOJk9%2BpnENPNAAL9vE5CylZr6%2Bx56J7caxJONP%2BcEqVrqqWY4Set7k5%2FTEensbjE5CAJ9kUrL4sumeyYRQ66JngNZvE2SoLHyeboapdAw5nuCo881%2FwRHaokOGC0LCy5KnQk%2FEpVogB38k90R5XY%2FcZXNmnoWFFn3bJ7KBBO7c9MAZlKKf6KuaTakvZ1cvdrFZcvMXZFd0P0ZeZechyRNqV6U8t7pk%2FatA%2FGPkzpdfa0XqwdoOfx2%2B4So4MduH6powpSBWxk1STY1SSb89SKQ4gsNtlnBAP66K7RsM7lc8vdX5sonk4kzW%2Bu2e7vrxQ1Eky%2By7k%2BctfjoumkgzIt34pOjZKXwuIpFYzs5DGrBWEkHR1vMuPB7lT7NUbrN5OHw4cJGjChfvrayj7sBifJ65WA3SEzxz7mEZO4J3igEX3bAQUkPv6pXqh2segmvlzxAQcyM3C7nQMMeqqOJzR%2FcVm9PA4ZQ4CTWsufQXBU52oxy0jwfcJF9IQBmMleAuIQi356QW4htkQYEvuF1ljK1nH%2BExMLH1m78GOqUBxI6tcQs6rL%2FQSVGOEgPXzS%2B1L32VYk5PPiW7RW90J6iSnEeICa6vKDdf5AxnhxK5vEgISkfE5UbKOUXNfoiKYUNZPOeAXMAruzX9bQZicVg%2BG%2B3VyTHApGOBtiPKzM1Oxca8aiFh%2BgTO%2BRUdLCvqnhdY4PC5lOLZHN0iSVTS3ZO82kqG7BucXePSOnFv7NI5kiKYuoVrVbqDmv21%2FZqabM9Py1VC&X-Amz-Signature=1dd263ff4ac8853174c20c1a473df25dab19a44c18f59642db0b3273aa024f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMU7TBW%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHa3nHO%2FIp2a6KbfsbQ8S2FqZsy5f9mjUjqbkTYlMQIYAiEAwlHJ1lKhhpIkwE9NsbxZvFVmKEpDC6TM6aA5VhCu9HQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGhuDkxHsaCjpW6l3SrcA%2BCleo4ZSQnnvRRfB%2BfPgvZGT7Wjx1shwtLeXk%2FIzUpMC3lcfHrSpOi2d0TQfQFg%2B8G6yUU%2FCElKW8fEClu8Vwl%2FoBXA2lpKCf808g3uuZQYKCw%2Fliy%2BJVjVzx1N13Fc3AGBlvFvKYpsql19V093iXXWIM36HHwKdSlROdKoWf1z49HLr3%2F3PBiaGZ4W6%2BNlHp2SLMHmQhjrOkXb5jud0UAj1VzEpeaVm6WrtXT5gDhgq8mLU8LgzhVBBg9i3ucxiU74VOW8rMl5cWhcxOsdr3J8Z6U0DfZm8DAJD5HgpbY2m4%2F6yK66jzoH64d9ibiavEkzgjUUecHQBftSwfbDmZwpih1PlY3H0dV4vZ7XLsLSZOZx21EFSR0lyvWoO%2FyjViQy%2FQ27ngoxU2uD69gLD%2FKi3g23fart0VMavPkOF3EAEBFn%2BlPJzB3qb9UWtNO2IShQXUbeywchIAhgXs47NjAx0XCiwtp2K7Uw9DmfsSx8sw1TNy0N2icw09kuIvyJ0I5ArbREBfozBG3FC8%2FRgtStsKEkFN5bVjsLH5xHwWgwywVTC5%2BE3bO4Wy3G%2BbU7njSdujZ6KAOzqAfLZyQLlHIbZkhqpopRwo9x3FhBMFnJ1LuR1BIjfPo18j1iMJf0m78GOqUBkuyAcLdF8Hb5XO4hNVoejUZl1sz9PtE7%2F3WWUSusCTBD26zkW7Rhvv8dNaeguCLHzOHBO%2Flll6LSZjFk397VEcqarJpoJAs8dZ%2BmwE0%2FTV6fb6428w0cOH12LtLlauHmeADVRDv%2BoZO6voNXkdk9esiXZD7Y9Lq%2FhYX6XLTCn34bogbD4pO5TW8zYKB%2BjkmYP4NWlkBdIPzIQOCIOe0bVh7u5m5X&X-Amz-Signature=72da5e373a0bb97db39dea3f86a100cc55edded7a74703e214cb98ad711776fd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHHC7UC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpfOOmkwKpXrj%2FTkjwkXNeFClP9k9Fv4%2F%2FbeDPzRKGCQIhAMOF4yjafS73nd%2BGpLQNyjlBUwheaJVAuH%2F5dVxHIr1NKv8DCGUQABoMNjM3NDIzMTgzODA1IgxMp3ZnJ4VfHeS0wkoq3ANIkGJkEM4QjxTou3KnyVLXVdUM4u%2FuRDcpBrAq1mnH18aS%2FT10eOopy83GgkvdtKAt1i%2BCgJ6lDlQcMxr5lhf1RarCwG7ibJHUVxrJ%2FtTLVM%2FTFMYdoRPoT2Zbx00NRljgAUC7Ey2G5Ub6ghMpPxqf6CYmjxF7DIOXCY8tdobWgDJtEOotL1J195um%2BJxUeKUgxCQIay5DC3JRPQ88tdUJZrNs8H4lWVB8FlyLQgnZKGPI0swAUz4%2BJOa2%2B6Ji7FQ0mIj6do9yb81iv8lLHddEWX3oFlNiu%2BPeXYsuoVNRJvMIJdmFqWFuWxviBqJSFDOycxem0sfNDtH6YCO7QGkuBwC8c%2BnXRg2Nx9VgwxGQSbMY057ro9kvttY2XSytGqmOy87E1L3kob6nzFSDxRAPiGwfqJEyOmr7yUOycunC7pBz8sdAD1IxFFhaIvu12WUWJsGZq9Ur6atxE3tXBe2siS3LzrpgQAThDShi2hckzKdUQroWpjBQ4JV%2FuHEL%2B8oBLijxFdVKboBSw%2BDuPQYTH%2FqQUP1%2BTWz0XImXHUlX5i%2BmEtOHO80j22VoYPboiWkVTBF2INTaU%2FwkCdYUQF0KTTpQxdSa9OdYw%2F3l3gLeNpgHn81Td8pWPYqtRzDX9Ju%2FBjqkAfrmVFe%2BeoI2HtctnhZMlMKXqMKNAD6TIgBunoxFfLv4mYinfNdod0b2%2BMYW5zjudPxuxuYQ8jBfSKGKxGEGuKUKOmjkJVf%2Fdtjdrj52ZzLyj2TFWui%2F8FLIkCtPsDFBHV2JsPwk2yBTLjkyaYpoagFEwzhvElzWqM179SihbG2hxBIIgPhUEanWg2k1cPcuEwTDiE61jbidlzVW9UCCoigA0yr1&X-Amz-Signature=7bd23a8cdd735a7a6b8a37d7a83a37abd9404b65d14bfef3755cc5d2cf801882&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
