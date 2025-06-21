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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHSP5WB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpPqXSqLoUJd24OtQAL%2FiKIg7F6dgGx6xn9IElUf%2BgQIhAOJrK9aq09K9pIcpifBY%2FgIEq%2FXMblTHJr644eV8YxapKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FinfJzOg%2Fb%2BsMzmoq3APn6PifqsrT7jQNRGsKFNPrPkBrwG7An935tciTE3wOYrXwxvBR2rsYJZjE%2Fs500AYuj8lcS%2FZFaQBo5DJ%2FFKhe421ktdZYRJY7c9pLrMeMjxx6TU8QtznFQj3Eju2XACyLjfA8o60OBPMJ6PZH8wBrhorMZSuV6H4IPv6ytuQabatikQ03I8mHfzL5Q8CdV4Llhn1OEmqQsfWrzqckk%2Frm%2B5sJnJ74wjXlIWLGlmI1Zib8tEL5IwJD5RcK5MQXmLTMJkkk%2BhXSHytZi3TXf5K5to6X%2BDW1l2r2yoUpR1RajxUPMDJkByMXDOnDez3ApjyE5AgFUDmPeOkbwnPZTdof7gSCsDcRgYjmzcyfoC9pf5L1nASe6qF0WQ1qUhY2K9hH5alFWuBc7GjTFJ5yu%2BzDhsghpABHwXaPK4NgNh9J8bExvzZOY00c5j5Hr0msACARZ%2FVimTyL58VW3QaX6pPd%2FJzv0wFvx3Loy6OxiMfUIrB9CJwMOEkdZLZBx73XbHdXADltIFrYDpLiaWBCSLQnwkHO8I5TfmQKo0IUt%2Fr1RGwqh5b8SELmXswGyjJGcTUx%2BQyA91NSxP1aPqxRkNVdQycUfnIQFiNvirLLSjrEmOLztsl5UKxxjzplhTD9r9jCBjqkAfz7iKlyDT9HvPkJj%2BsI9KbmTggFfwlLPCtHt9jfYmnmnLWkq4MKg0byG9IWHzeXWkPw6R2nn12T3T7kvDmro8wOPB2UipSIotq24eJYTY4buGBW3FFMZN7ZWx2cMtR4RIBy844TkBOeF87AZmXDiIO08Ldwo7YdC5FcR1klpBWXKsAkVWxIMOeMcOmw2RQAfqSTxqkv%2BhtHR2xuMgxP2t1Z8BLZ&X-Amz-Signature=fe1e0d012f4c0eb117f5bbf5ec43f4a8b8558c42e668fefd62fcb2e779b65028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHSP5WB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpPqXSqLoUJd24OtQAL%2FiKIg7F6dgGx6xn9IElUf%2BgQIhAOJrK9aq09K9pIcpifBY%2FgIEq%2FXMblTHJr644eV8YxapKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FinfJzOg%2Fb%2BsMzmoq3APn6PifqsrT7jQNRGsKFNPrPkBrwG7An935tciTE3wOYrXwxvBR2rsYJZjE%2Fs500AYuj8lcS%2FZFaQBo5DJ%2FFKhe421ktdZYRJY7c9pLrMeMjxx6TU8QtznFQj3Eju2XACyLjfA8o60OBPMJ6PZH8wBrhorMZSuV6H4IPv6ytuQabatikQ03I8mHfzL5Q8CdV4Llhn1OEmqQsfWrzqckk%2Frm%2B5sJnJ74wjXlIWLGlmI1Zib8tEL5IwJD5RcK5MQXmLTMJkkk%2BhXSHytZi3TXf5K5to6X%2BDW1l2r2yoUpR1RajxUPMDJkByMXDOnDez3ApjyE5AgFUDmPeOkbwnPZTdof7gSCsDcRgYjmzcyfoC9pf5L1nASe6qF0WQ1qUhY2K9hH5alFWuBc7GjTFJ5yu%2BzDhsghpABHwXaPK4NgNh9J8bExvzZOY00c5j5Hr0msACARZ%2FVimTyL58VW3QaX6pPd%2FJzv0wFvx3Loy6OxiMfUIrB9CJwMOEkdZLZBx73XbHdXADltIFrYDpLiaWBCSLQnwkHO8I5TfmQKo0IUt%2Fr1RGwqh5b8SELmXswGyjJGcTUx%2BQyA91NSxP1aPqxRkNVdQycUfnIQFiNvirLLSjrEmOLztsl5UKxxjzplhTD9r9jCBjqkAfz7iKlyDT9HvPkJj%2BsI9KbmTggFfwlLPCtHt9jfYmnmnLWkq4MKg0byG9IWHzeXWkPw6R2nn12T3T7kvDmro8wOPB2UipSIotq24eJYTY4buGBW3FFMZN7ZWx2cMtR4RIBy844TkBOeF87AZmXDiIO08Ldwo7YdC5FcR1klpBWXKsAkVWxIMOeMcOmw2RQAfqSTxqkv%2BhtHR2xuMgxP2t1Z8BLZ&X-Amz-Signature=bdc1d07474c01524cba6ff8f5b194f5a7818f3a4e4ebba66601ac72b5feaf77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHSP5WB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpPqXSqLoUJd24OtQAL%2FiKIg7F6dgGx6xn9IElUf%2BgQIhAOJrK9aq09K9pIcpifBY%2FgIEq%2FXMblTHJr644eV8YxapKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FinfJzOg%2Fb%2BsMzmoq3APn6PifqsrT7jQNRGsKFNPrPkBrwG7An935tciTE3wOYrXwxvBR2rsYJZjE%2Fs500AYuj8lcS%2FZFaQBo5DJ%2FFKhe421ktdZYRJY7c9pLrMeMjxx6TU8QtznFQj3Eju2XACyLjfA8o60OBPMJ6PZH8wBrhorMZSuV6H4IPv6ytuQabatikQ03I8mHfzL5Q8CdV4Llhn1OEmqQsfWrzqckk%2Frm%2B5sJnJ74wjXlIWLGlmI1Zib8tEL5IwJD5RcK5MQXmLTMJkkk%2BhXSHytZi3TXf5K5to6X%2BDW1l2r2yoUpR1RajxUPMDJkByMXDOnDez3ApjyE5AgFUDmPeOkbwnPZTdof7gSCsDcRgYjmzcyfoC9pf5L1nASe6qF0WQ1qUhY2K9hH5alFWuBc7GjTFJ5yu%2BzDhsghpABHwXaPK4NgNh9J8bExvzZOY00c5j5Hr0msACARZ%2FVimTyL58VW3QaX6pPd%2FJzv0wFvx3Loy6OxiMfUIrB9CJwMOEkdZLZBx73XbHdXADltIFrYDpLiaWBCSLQnwkHO8I5TfmQKo0IUt%2Fr1RGwqh5b8SELmXswGyjJGcTUx%2BQyA91NSxP1aPqxRkNVdQycUfnIQFiNvirLLSjrEmOLztsl5UKxxjzplhTD9r9jCBjqkAfz7iKlyDT9HvPkJj%2BsI9KbmTggFfwlLPCtHt9jfYmnmnLWkq4MKg0byG9IWHzeXWkPw6R2nn12T3T7kvDmro8wOPB2UipSIotq24eJYTY4buGBW3FFMZN7ZWx2cMtR4RIBy844TkBOeF87AZmXDiIO08Ldwo7YdC5FcR1klpBWXKsAkVWxIMOeMcOmw2RQAfqSTxqkv%2BhtHR2xuMgxP2t1Z8BLZ&X-Amz-Signature=137e714f4c9ac254d7bc721f019275e553a3015020d1432c3dfa08d259d84950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEE6Q7W%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKxsKzQGtUPvgAoxoR2JZ0QNkE3HG1USLyRLfwLmL9OAIgDLimLCFmO3ihzWyjh6fwmoHf8h88tVtF45ExrM2FevgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEVdO0PSe9zZeU8USrcA5C3Lnenu9ERBYXsj8hzrxxSUph3Z6mXaMUvqLrdJxNRfLJQaIbG0qXbQteZRaz5JyGcPQS9%2FFQSg3NojOgY%2Fd7GMnL9zXD1YqVktTScPU6x0ls245uU5PZ8M%2Ffskxc5erFhSRafWhmk%2BDOj2nyKJ3SwFPTjTOcWpo9woBoX94gjt3UbtILXwKwB2CwyPFEXcYqpgB8tofyX58887punhQDzMYIpd8Ym%2F%2Fxw%2BhOgvz9rJ3sSIUJDyAKfDYTh6CSsGuWtX1X7C%2BvArfV7tcdEdzQxZacFcVpeslyFu4rCVoDVZoesfpWAfR9yEzaCasZR%2Fqd42q9GgNMEWwbbw8Ee8A1GZISgcsBBG39Ndf3k1gBsqo2%2BfK%2F511tSAAq59%2FoI0Bjv1vVQHXYAz1Ci2OXA%2FWQW4cJhTA8%2FRcSS612ZK9q%2FMBRejd9gpDEZrwPrx9%2F5%2FI8poU54MLU4%2FHbN6scbzJb4ONSPy37l%2Ffrb2dwQSe%2B41D99c%2BU7W8mR6M%2FmhDplsSDO0ZiUEZCcDGPogW09SLu%2BYPmJZL4yj5djfPcTEEFMY8g%2BoJYBAB7riPbpWCsBfTPBn69d3BjSuYTDVjH%2Fv9RNsKmztUylaD1AY1Zim3mQ9oUwg9s6z605aRDaMLWv2MIGOqUBSphqNbEhqdf%2FLpX%2F4%2FI5FeDfEr9%2Fe1s%2BxhYSFYV3JIxJgCu3iFygSPe8qBTDbh2FDhQJsh%2BZ%2FjSv3oQ4ob5lZAV6n5FoMYq6vZghUclkrKojoUQeYIq6LFPAxIjtf%2FVHMpK5b0TtAWoi1XRVrg1GRS%2FNezOoDQNzpqPPC9qewKuFKKCjUzAZde7Q8VZbi6exMcnYBIvLXs2PTzZKCTMa%2BcvuhNDp&X-Amz-Signature=01096c5bc16d8eadb56f7e8cb29b6c80e8bc57f29df1c57a6e1bf701f752cb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NESP5WA%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETC%2FCXrqSmxOHZrDMUnWs93rbVujvkLRTVGjwWg7WsrAiBtvcs1Y5aXKMZ8%2FUSBDo1Y3tPwfQEjBFwtuCp7FvL2pyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuIPJzrCz0VVEchfLKtwDc9FAfqMmodmxm6yMX7qtcRqKRKWx%2B5eWN1bq2r7m3Yys6Dz25Z4QD43MZ79uu5%2Bwv0BDrjgNuRUVlxJyANqcWeIVL6RiUck7ehcpB4WHJOFOABRUdFOTLTL3i1zDmXgBN0ZXob%2BoNXVZQl%2F1OBdtXo606gict27EFrxmIXj0cjlZjb2xME1%2FHcOyG3ULivCM%2BM9ZP8zOVb0X5i5pxVa3s1DY6JLV6YMOQvmTDhW%2FJmA5alnLk8uBM6FBbsv0J3HSfizFszFoxaa5XvkYQtP7J7GBHeSGpf0FPJp9B4wwaC5CjmQATv4NZb7fjG3Qg1QSebxkUFigvLUvWVzFRYO1jmnoTSUlQEGKxMwSJbVLbRHCb1cmGEsJBpSOXwUy4cM0onCjhIYJfbwA9HH%2FHsr21vLfI3orwCveQOB64rMuNZLxxQv9%2BCD6R3s5OyCeAiFwxnKzZtlS6pRjtSBGW%2F83yl8YmCHSAqoDwpYORngYsRdkyiUfvDXxdT%2Bm0ppzIOsKyixA5l3I6kmcRwuJrsFo%2FncP78aPiFSJRHsxT2EEWNwma3W5ggcHpRxQZAzWR6ijF1sfyHHLBIT%2Br7LwKfwgR50lHGPh%2Bb0H33ZH%2Fi%2F4gt91QXt3UXKSFPMVug0wtK%2FYwgY6pgHFRPnYw8bML8WVFlmOVesoFVLCMRGcyFw1QpZIUU3x4Au4bQ%2Fab%2Bic4vQM2fCwmnQnhRpN%2FBJDnq0dAx3KX788pcherhBUJJRWu9UfV2ptL%2FF%2Bz%2Fq5uuBYZ6ZWglCnT3eSe7HsPpE328h5cyGIVnvtZTLugvpn6AaL7XUS3Ii0C3KB84kkDAsEt5PhsB5WfDDRKht2s5Dll0UOWcn6RTKeeq96rhjm&X-Amz-Signature=52700481251819fc3c89c5f9a2827ea879d09c9140e2b6655f3513eaaf73254d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHSP5WB%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzpPqXSqLoUJd24OtQAL%2FiKIg7F6dgGx6xn9IElUf%2BgQIhAOJrK9aq09K9pIcpifBY%2FgIEq%2FXMblTHJr644eV8YxapKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FinfJzOg%2Fb%2BsMzmoq3APn6PifqsrT7jQNRGsKFNPrPkBrwG7An935tciTE3wOYrXwxvBR2rsYJZjE%2Fs500AYuj8lcS%2FZFaQBo5DJ%2FFKhe421ktdZYRJY7c9pLrMeMjxx6TU8QtznFQj3Eju2XACyLjfA8o60OBPMJ6PZH8wBrhorMZSuV6H4IPv6ytuQabatikQ03I8mHfzL5Q8CdV4Llhn1OEmqQsfWrzqckk%2Frm%2B5sJnJ74wjXlIWLGlmI1Zib8tEL5IwJD5RcK5MQXmLTMJkkk%2BhXSHytZi3TXf5K5to6X%2BDW1l2r2yoUpR1RajxUPMDJkByMXDOnDez3ApjyE5AgFUDmPeOkbwnPZTdof7gSCsDcRgYjmzcyfoC9pf5L1nASe6qF0WQ1qUhY2K9hH5alFWuBc7GjTFJ5yu%2BzDhsghpABHwXaPK4NgNh9J8bExvzZOY00c5j5Hr0msACARZ%2FVimTyL58VW3QaX6pPd%2FJzv0wFvx3Loy6OxiMfUIrB9CJwMOEkdZLZBx73XbHdXADltIFrYDpLiaWBCSLQnwkHO8I5TfmQKo0IUt%2Fr1RGwqh5b8SELmXswGyjJGcTUx%2BQyA91NSxP1aPqxRkNVdQycUfnIQFiNvirLLSjrEmOLztsl5UKxxjzplhTD9r9jCBjqkAfz7iKlyDT9HvPkJj%2BsI9KbmTggFfwlLPCtHt9jfYmnmnLWkq4MKg0byG9IWHzeXWkPw6R2nn12T3T7kvDmro8wOPB2UipSIotq24eJYTY4buGBW3FFMZN7ZWx2cMtR4RIBy844TkBOeF87AZmXDiIO08Ldwo7YdC5FcR1klpBWXKsAkVWxIMOeMcOmw2RQAfqSTxqkv%2BhtHR2xuMgxP2t1Z8BLZ&X-Amz-Signature=29904a3f00a0e41773f4186093bf64c503ac0603662788dea1cabb84d071f2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
