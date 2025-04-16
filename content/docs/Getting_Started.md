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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VP4KUW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Yp9g%2BrkNlOIgxT6ZrexERfYLLWm7KEcKZLeeyo5vGAiAeVssYESLa4aNETPYv0sR1qlE%2FQR1%2FgjErOxYyxk0WESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMUgDBss%2FkFZwbqtQbKtwD78%2B7MVVUzEaIn4X3l%2BEG%2FluELkwnR5gyVgAs59nBDwvNIm7CF1VIj2pqZwBors0GPoWgDnZQMsVkm6PmO99pblc58oEl3ude3P5ljiCmRFoj9RudFSNkKhGT%2FOMWhZF2zSwEMqdfHGS046kPo%2Bh36Ge28%2Bacy3xoi8fsraf9MTuJIt6cVO8jhupkGKzS%2B1lnZ6cidWcv9LVxArupM8V3LQyqALLvd0d9XJF9CDrv4mt0KhWFpNttqJ%2FMG1IAhGG83SiDX930PJRf9voZ91jmiRFu2cIaRwkpD33%2Fth4ZrPiqHO7bnCX6injJJ0dz%2BCppYBRq2A1mw8AMXfMCvkue64XsgoUu5kXPKrURmliXc8I8rmDl5A1UgYkY%2F9qqe5ayaSXvPDPcuVYPu2wyu3emfPP%2FDOCLRxuwZQ6GLYwXv%2BXzAIwpIOWJqLiB6h3WArjT4Ff4NscX40bTR9hyM%2BrIiGUTDKjHlVg89uBIwVSs5mDkj2QDuZj3ePKLFXujffatpdpVeVuBYXrJla4UqC0yfeE8OMA2S9MPlzak11yMa0JIpZjqpPFS7ogzU2EV7Wk2%2B3H%2F%2FOVhonT0CYOPTGB%2FJ056CPAp3DL2dLHfWxx7VgwEOxQQLzPWOcJKbW4wj9%2F%2FvwY6pgETpn8cKCUqs%2BnHCo24lFmClu8FdkkRYAm1NtIaW4v8qjzKj%2B2EkWfhTrHM2Ol%2BBubze8YnWOlGnexbo2OmSPX43oZYULMJm6v1DE9TJyVex2RTOj2u3RNPDQGUQAgBK5n1PYVnYuJ%2Ffj9VKBMuGXMQQkNj4eVp3px0jUdFjgzl95pUvbSqu%2FPaqYJAwdyAUSMvRu7pJ08hEAonuOCL%2BPM4WPSiDRj4&X-Amz-Signature=a2f59834818144f169ebbc817ef4a0bf9960803a9e944cd293708d2f8f024426&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VP4KUW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Yp9g%2BrkNlOIgxT6ZrexERfYLLWm7KEcKZLeeyo5vGAiAeVssYESLa4aNETPYv0sR1qlE%2FQR1%2FgjErOxYyxk0WESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMUgDBss%2FkFZwbqtQbKtwD78%2B7MVVUzEaIn4X3l%2BEG%2FluELkwnR5gyVgAs59nBDwvNIm7CF1VIj2pqZwBors0GPoWgDnZQMsVkm6PmO99pblc58oEl3ude3P5ljiCmRFoj9RudFSNkKhGT%2FOMWhZF2zSwEMqdfHGS046kPo%2Bh36Ge28%2Bacy3xoi8fsraf9MTuJIt6cVO8jhupkGKzS%2B1lnZ6cidWcv9LVxArupM8V3LQyqALLvd0d9XJF9CDrv4mt0KhWFpNttqJ%2FMG1IAhGG83SiDX930PJRf9voZ91jmiRFu2cIaRwkpD33%2Fth4ZrPiqHO7bnCX6injJJ0dz%2BCppYBRq2A1mw8AMXfMCvkue64XsgoUu5kXPKrURmliXc8I8rmDl5A1UgYkY%2F9qqe5ayaSXvPDPcuVYPu2wyu3emfPP%2FDOCLRxuwZQ6GLYwXv%2BXzAIwpIOWJqLiB6h3WArjT4Ff4NscX40bTR9hyM%2BrIiGUTDKjHlVg89uBIwVSs5mDkj2QDuZj3ePKLFXujffatpdpVeVuBYXrJla4UqC0yfeE8OMA2S9MPlzak11yMa0JIpZjqpPFS7ogzU2EV7Wk2%2B3H%2F%2FOVhonT0CYOPTGB%2FJ056CPAp3DL2dLHfWxx7VgwEOxQQLzPWOcJKbW4wj9%2F%2FvwY6pgETpn8cKCUqs%2BnHCo24lFmClu8FdkkRYAm1NtIaW4v8qjzKj%2B2EkWfhTrHM2Ol%2BBubze8YnWOlGnexbo2OmSPX43oZYULMJm6v1DE9TJyVex2RTOj2u3RNPDQGUQAgBK5n1PYVnYuJ%2Ffj9VKBMuGXMQQkNj4eVp3px0jUdFjgzl95pUvbSqu%2FPaqYJAwdyAUSMvRu7pJ08hEAonuOCL%2BPM4WPSiDRj4&X-Amz-Signature=275757c221bc2c67a1bd502e23786d89393c5f9f8e288b0e32b9d0fbbec8bacf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T63VNTUC%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkJCxHWDk%2BJuUAlUqvhtT0XNXUeg2466VysEG7Xw2ruAIgXDUfB35BfhdcGZvD8xDcoZQTxq8jJ9TbWO3UX5GE3p4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDBdbfYkKPJYM57GySSrcA6pnfwhYtlAgWjAFCPWRHNTuY5koAuwGepAiUF0U6E2yIvNOBtQV2UGRYzd%2BufGPfy7MmSJoE3NZS3Y4mKqIaYGkdPnAU%2Bronp%2BhYpY5Do0YWubKz2VuCYjOtFG5q2C4k3rI3dRLDdrWg1EQwCrLnXd80OhPORSS3R3JQcIEZ3UfurYT%2FF3XCx%2Bp58TI5FBQrZ7ek8%2FLBUCFQAHgdu05vutzTnszqfxJkhf7NO7Wh1bBQ1sA3Z8HtSZjvK80xw2UlNob9RCI%2BPcnfYwuXcd6JlJAV9V5gINypSthgPsLLa3WcZFD057HMSk0WBVpzPFj5ARQr0h%2Bk%2BkEYa%2BCWRTds3vVGqmeKXpwiT51QBnS5xHWJK6X9JkfKkgLCJVMp11SQuVCDv036oymAjwvV5a2LUawe09H1p0j8aCoWLBkLlYXcDCCeGIMFP9W39%2B2N2I1NUBwM2rkJvynDnlkddIj28%2BYDBEmrOA8GGm0QJhH5leh8pQ%2FRntmRYWV8xjZGESnu5WrUbVepc4lseJnNElyutzKzvNEkUadOqnGTGTrivc%2BKiMuZeU%2F%2BKfqJoXHvshILXyx0Bnm3Y21bWP9XX7Vsk0yzKqreBPOfmYGHKrF6itkW12BTMpUbIsK3Lv%2BMLve%2F78GOqUBda3t5ow1K89gIgsYaeA0S%2BXHQKYBqwFpsEgYZmRvJ1WTLSTLUTQ7L51WFcAts0sGPn47duqMG4yWKCSOyeNa3uwBZ%2BeUlkO7m8ZWnYaI1hoJTxTg9ttfxhftUg%2B9CJX91HOiSlGlnVLT8R9PMWheexfCcZB8nRay%2Fx5U43ZAyKdmVYW5XaNm3WdMThSPboPNZsbPIdY2feFCKQhMDydPslIUstGq&X-Amz-Signature=dd3ef3b93fcdc28fea18794945ffc5025a3a4bbfc641e3bf7509b01c34f5f2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZZNMVV%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmlmRHCg%2FvcHJg0q%2BGtMS1O1P3O29m0VWDECKpkuX7cwIhAICOncwSEnnQafwQn1JQ%2BO1a06B0bbxZ7So4aZh51iTGKv8DCEsQABoMNjM3NDIzMTgzODA1Igyd7keUEUcp9oBU3vIq3AMvG2xEQxme4cgNdixl%2FCohIS0v4Ei8%2BqA6aTYTDX6ZXKEiz7dzKNYnXpb10d0xlBoNDEQG30UTYQMNaxw6%2FyvtKh%2F6a89TR7lO9dT4QKZ1aWf0aIJtdMwKaeDh5rk7Glx6xDdnbjpclY3tu7YtHC9oypydnBccEiI7YZOjEWBJ%2FZrHwe6ca9p5ndSq7OWpSCTFM78g74QOZzDrUy7qiy6yT7g93f0cOXH9gWtIHMlQdaqghvxvj1Y1Wa00Wjlf3S%2FISXM9DsIrjvpS5ZZo93IstFKKkLYVcbK7y0BqVrRCPHstt6JwP0qqBAmk7yYdIs9s%2BT0CZ%2B%2FdFH4AnqAA5Ec1%2BvqFM6yXI8Si9a53F7UN1qt8aU%2FY5hk3tp9BDZy8sD5Sn54rhsBHR5%2BIGU67hrzKXKLjhUDgRxlrLU2VxBCN%2BA99Bij1tpWfo9w0CpN8sbrbMgiYi84HfujqDkwh3kTY4x8XLMtyjx6xXc47qAsBhFTnXAscHyO3ih2sLr0oTRGcbQLdqKw93n9J4qwxN0qn2V820qi7w71Yg0rkMwhCtUBivTPJ93xLmiKgNtdlJfV0pYUshQWMqzM3XXs9hY4%2FNi3VJPo%2F3OQGvoxDubko33kTzDgHpm5ylFwmRDC73v%2B%2FBjqkAeqIarDbxnI0lLjovAEcrqjcmaIvWKH%2F6huFKaD6sem1BbALWgln4A43WoFJfifWdHAJyV9XdtuLxdzUUeA9txnsqQ01Y0hCgS3MRMYbVBJoY3v0mfietHmxHXMLuYjTUiIb4w7ATganUcxwdP%2BJZ5mp4Ckp1%2BjVMfDYh8%2B%2FmT6q%2FeirzN6hOjQq6gnpPAqZXTZSbvVyMw%2FMLjtUzCRgjO9VK1cs&X-Amz-Signature=104845767e5c665c71cc5a891a093c81d3d03b970d177eea21c8cf7159e9dc34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VP4KUW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Yp9g%2BrkNlOIgxT6ZrexERfYLLWm7KEcKZLeeyo5vGAiAeVssYESLa4aNETPYv0sR1qlE%2FQR1%2FgjErOxYyxk0WESr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMUgDBss%2FkFZwbqtQbKtwD78%2B7MVVUzEaIn4X3l%2BEG%2FluELkwnR5gyVgAs59nBDwvNIm7CF1VIj2pqZwBors0GPoWgDnZQMsVkm6PmO99pblc58oEl3ude3P5ljiCmRFoj9RudFSNkKhGT%2FOMWhZF2zSwEMqdfHGS046kPo%2Bh36Ge28%2Bacy3xoi8fsraf9MTuJIt6cVO8jhupkGKzS%2B1lnZ6cidWcv9LVxArupM8V3LQyqALLvd0d9XJF9CDrv4mt0KhWFpNttqJ%2FMG1IAhGG83SiDX930PJRf9voZ91jmiRFu2cIaRwkpD33%2Fth4ZrPiqHO7bnCX6injJJ0dz%2BCppYBRq2A1mw8AMXfMCvkue64XsgoUu5kXPKrURmliXc8I8rmDl5A1UgYkY%2F9qqe5ayaSXvPDPcuVYPu2wyu3emfPP%2FDOCLRxuwZQ6GLYwXv%2BXzAIwpIOWJqLiB6h3WArjT4Ff4NscX40bTR9hyM%2BrIiGUTDKjHlVg89uBIwVSs5mDkj2QDuZj3ePKLFXujffatpdpVeVuBYXrJla4UqC0yfeE8OMA2S9MPlzak11yMa0JIpZjqpPFS7ogzU2EV7Wk2%2B3H%2F%2FOVhonT0CYOPTGB%2FJ056CPAp3DL2dLHfWxx7VgwEOxQQLzPWOcJKbW4wj9%2F%2FvwY6pgETpn8cKCUqs%2BnHCo24lFmClu8FdkkRYAm1NtIaW4v8qjzKj%2B2EkWfhTrHM2Ol%2BBubze8YnWOlGnexbo2OmSPX43oZYULMJm6v1DE9TJyVex2RTOj2u3RNPDQGUQAgBK5n1PYVnYuJ%2Ffj9VKBMuGXMQQkNj4eVp3px0jUdFjgzl95pUvbSqu%2FPaqYJAwdyAUSMvRu7pJ08hEAonuOCL%2BPM4WPSiDRj4&X-Amz-Signature=44c1983415a89509ba283cc625fa26a52269da591b88ee462f5c2e5eedbed702&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
