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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HT5QUAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBE4jG17lDei4ILIbbdppD6YkqXd3TnHtKkui3bD9cYgIgHKxE3ONOl8raT0uvVJnfz7quMbaCBQLJ2CXf%2Bbsps3Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAlwC5SrBbJjC6%2FBuircA3GEXl7oxxIZhMOoGtSd4hg%2FTHKKRB4WSckn0EANkC3FxuFbpLj7fCqpTsjHeqaeIkniITWieK2k0pYiuUlxxR9vrAy1OhX6ZoCAGRs%2FTfadUrJXFmGKmMuuIIfyRl7ITDitOUz3WYSC6YejQCHUhKBjafGAhtfEdb7l97HhUKOjBSKL7RHT5JMN8%2FfqQOmP1k%2B5jOW8azHBXo3M39I0iRVAs%2F1L%2Fai08U8px1WHhU8Uqiq0S8w5P5oD6LpRja81UvXP6wXtWEjhFdhLLJOwfMiW2VDrllhyShSj79Vzd7f6qxpWM5UjjOu6FWHssAHwnYQkKWwSmUeD8QqgbYELGLtkloN%2F7D%2FUwmeyddJVCVNXDcYBDI%2FPhif0IBFcs4R5T%2FbHNddvcjIzJZWBeSJllgByAytcQjBOGmDjJB9ns9o2ddIwKeosyw%2FVkEtePaaDe%2B0%2FlVu7sZVLhR%2BnG4jK2m44ckRRCsdaHTUfPwVLD1hRTLmuQWeNQUc94DgvrM1xEL6z9gj5XAQzM2jSk%2FLSFIzVEM%2F1ctD0HsZYzcLZI7JCVm0kkQXJJXOUxxAdtkcyeC8GGNZi5yAjDn1X%2FJT7Ic%2BheWfYt4vcQCcxoGXHJRjEfqk3F0rCQT%2FkZ1OgMP%2FmqMEGOqUBs71HgpAZ4QJbZ0ekQxmxAqQ2FkgWNcmwABFslyqiDGUS33K%2FyhrCedS7XgqkOhKXh2r3kWHMdyTCHSqyBGaTl3BqEhdvpmIdz00Zv4iIj8%2BXovK7C1D56K8ohKryhfVzhLCDq%2FhcQPOUZtG2fJAdQqinmKFalAbBaea28wf8G6m%2FT2H9s7vzspPQmqsT3xJlav3qB7WD1g16t2H4UJL%2F%2B5ZIhCzR&X-Amz-Signature=863862c31b77b7efff3dfc7a166ce12ba0bd7676fb3af5e1a06aa24ea9847644&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HT5QUAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBE4jG17lDei4ILIbbdppD6YkqXd3TnHtKkui3bD9cYgIgHKxE3ONOl8raT0uvVJnfz7quMbaCBQLJ2CXf%2Bbsps3Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAlwC5SrBbJjC6%2FBuircA3GEXl7oxxIZhMOoGtSd4hg%2FTHKKRB4WSckn0EANkC3FxuFbpLj7fCqpTsjHeqaeIkniITWieK2k0pYiuUlxxR9vrAy1OhX6ZoCAGRs%2FTfadUrJXFmGKmMuuIIfyRl7ITDitOUz3WYSC6YejQCHUhKBjafGAhtfEdb7l97HhUKOjBSKL7RHT5JMN8%2FfqQOmP1k%2B5jOW8azHBXo3M39I0iRVAs%2F1L%2Fai08U8px1WHhU8Uqiq0S8w5P5oD6LpRja81UvXP6wXtWEjhFdhLLJOwfMiW2VDrllhyShSj79Vzd7f6qxpWM5UjjOu6FWHssAHwnYQkKWwSmUeD8QqgbYELGLtkloN%2F7D%2FUwmeyddJVCVNXDcYBDI%2FPhif0IBFcs4R5T%2FbHNddvcjIzJZWBeSJllgByAytcQjBOGmDjJB9ns9o2ddIwKeosyw%2FVkEtePaaDe%2B0%2FlVu7sZVLhR%2BnG4jK2m44ckRRCsdaHTUfPwVLD1hRTLmuQWeNQUc94DgvrM1xEL6z9gj5XAQzM2jSk%2FLSFIzVEM%2F1ctD0HsZYzcLZI7JCVm0kkQXJJXOUxxAdtkcyeC8GGNZi5yAjDn1X%2FJT7Ic%2BheWfYt4vcQCcxoGXHJRjEfqk3F0rCQT%2FkZ1OgMP%2FmqMEGOqUBs71HgpAZ4QJbZ0ekQxmxAqQ2FkgWNcmwABFslyqiDGUS33K%2FyhrCedS7XgqkOhKXh2r3kWHMdyTCHSqyBGaTl3BqEhdvpmIdz00Zv4iIj8%2BXovK7C1D56K8ohKryhfVzhLCDq%2FhcQPOUZtG2fJAdQqinmKFalAbBaea28wf8G6m%2FT2H9s7vzspPQmqsT3xJlav3qB7WD1g16t2H4UJL%2F%2B5ZIhCzR&X-Amz-Signature=458f73b286a346a7f33adc56437055fa9f25a0e6ea8fc2706fb39ac1b03422c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HT5QUAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBE4jG17lDei4ILIbbdppD6YkqXd3TnHtKkui3bD9cYgIgHKxE3ONOl8raT0uvVJnfz7quMbaCBQLJ2CXf%2Bbsps3Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAlwC5SrBbJjC6%2FBuircA3GEXl7oxxIZhMOoGtSd4hg%2FTHKKRB4WSckn0EANkC3FxuFbpLj7fCqpTsjHeqaeIkniITWieK2k0pYiuUlxxR9vrAy1OhX6ZoCAGRs%2FTfadUrJXFmGKmMuuIIfyRl7ITDitOUz3WYSC6YejQCHUhKBjafGAhtfEdb7l97HhUKOjBSKL7RHT5JMN8%2FfqQOmP1k%2B5jOW8azHBXo3M39I0iRVAs%2F1L%2Fai08U8px1WHhU8Uqiq0S8w5P5oD6LpRja81UvXP6wXtWEjhFdhLLJOwfMiW2VDrllhyShSj79Vzd7f6qxpWM5UjjOu6FWHssAHwnYQkKWwSmUeD8QqgbYELGLtkloN%2F7D%2FUwmeyddJVCVNXDcYBDI%2FPhif0IBFcs4R5T%2FbHNddvcjIzJZWBeSJllgByAytcQjBOGmDjJB9ns9o2ddIwKeosyw%2FVkEtePaaDe%2B0%2FlVu7sZVLhR%2BnG4jK2m44ckRRCsdaHTUfPwVLD1hRTLmuQWeNQUc94DgvrM1xEL6z9gj5XAQzM2jSk%2FLSFIzVEM%2F1ctD0HsZYzcLZI7JCVm0kkQXJJXOUxxAdtkcyeC8GGNZi5yAjDn1X%2FJT7Ic%2BheWfYt4vcQCcxoGXHJRjEfqk3F0rCQT%2FkZ1OgMP%2FmqMEGOqUBs71HgpAZ4QJbZ0ekQxmxAqQ2FkgWNcmwABFslyqiDGUS33K%2FyhrCedS7XgqkOhKXh2r3kWHMdyTCHSqyBGaTl3BqEhdvpmIdz00Zv4iIj8%2BXovK7C1D56K8ohKryhfVzhLCDq%2FhcQPOUZtG2fJAdQqinmKFalAbBaea28wf8G6m%2FT2H9s7vzspPQmqsT3xJlav3qB7WD1g16t2H4UJL%2F%2B5ZIhCzR&X-Amz-Signature=e635602bf41fdceaa6886a49ff3914412a47e1f6fbb62aa69d34f486d075f211&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWBSPCEK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwRZhxj6i3kbTzJx4pVzWdh1ctYlsw5TOVKnx9Y%2B9n6AiEAtSz3d1ciE8EyWN5uSnwaEHFcIS2BXdkL8J0THvaM3pIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNFKhcFmuVbGMs7GQCrcAxpFr1tVVaPb4x82rbNcbcklzKgqBxPSd%2FDKjVSN3bSQZAzUfzY6vpiZNylOA175ADIPwpZSrt5oL1cLlN3%2FTnp%2BaMgfMFWdLDzkGf3BiJLIhJ44va3%2FlpQOrlDU2KVIfxF6XNEafF2K4XnhKbH8SPy6gXHnQW%2B%2FQX030%2B1hwS1EKEJ5FVy8ylRcGl9jyigVf7cGFpWcKznmJy3AVKwvqqW1lMR%2BRZU%2FEyyVhmJxc%2BCHnbas55AXaRFJtiD6RLKGHGC%2BEb53xyL7YKfgNiwWblTPgx0XUfrWcS60%2FIA9F7J3IgzWFEd%2FR0WzCtHTdte7whvO8jAhB0IOfu%2FqgZwBWi2nSkDBak7QnNBTYbDuux6A8bieqoQIX%2B68Larw9Pr58QNaG1hvrN9S1db37bbMOPy8Urep2%2FGGTotuMLDlDLwh1rvaXHGc3uF8P2e%2FKFpYh9XUmKC%2BSpKOsMOz32ipLzSrXAodOBcj%2F59eWeXel5v7SP3F0st4fHYU5dA%2BGIu3YcoTTaUrf2C0cSyGJ2pDYD4XpMMSd31W2koVk2B9j5BQxS%2BBfJmPrEWUhCiiAhsyRw0nnTzFGVTpxNbgJTRot4ddhp4P%2FRD%2F7v55bISedLxfmVTT9r6JjG2k4tkGMN%2FmqMEGOqUBPnMdI7XotTYMlnXMIhuJaZMtSBps5IrZO6gCvrPgSdFNInlHzzoQwNMZjMDnJShOZqHrSD6S5eGy5cyt9jDE%2FpT5JwReVL72f8ZgN51qYgQ%2ByTRBz%2BC1i7teTVcHXqEUwFRbVC8XT3pUp0DLt452StQCxVeog%2F27rz4j8uHNJLjTr1lxqYP9sbmYd0GTTq3GalH9rR58BWwGyKMLVvqFYd8n157r&X-Amz-Signature=8f30fe2697d87e2727d65908692ee343d50c5df7f99fc8ad0a197c5ff94cf981&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSC4A7L%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa%2BdKHV9ls3hob2cnAWuSC4C4KWbSTC71jylSoF0AltAiAWyKC%2Fw%2B3yqxIqfyWHKl%2F7GI%2BNiaIrFb%2BzeCatwIwfMCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMySVjR3g9HlpThXwuKtwDiclB4urEvsHgkXZtSDBc3bGOV5Ljq5Lsj8jgzKFepetE16XJMrzywQIyTbiAeKhbkh0Xy3lbJdsI%2BAkB1YDRXeIb0IKW4mhaqQwzbX2HD7jrhUsZUkVMKsS2My9Kf%2B2gJqYq5%2BAkqvIlOqzg3FxX%2FicnJi79vb%2BS9jONRQidaOFXf5Rv0YyPQIH5KXSB3etHpFtKSBrig7yENxNvPlSLZn3KYmgsHgB07akK%2FWSrBHIMx6a6OJ1PcLBa8D5JkY%2Fe%2FQdn1SeD8XEjIle5ugSF9F8EFWTQrzE%2FxoOz177UdlpkE%2FK8PhYObfy6AtAdWHU7rNSaNrc0f6tm%2FmW7CqRadFfo%2FI0fDeL%2FNp7GzwUDU8w7I8N2LjMvmAIc7kTVdioBUWLqmeDkaShVGjxrI80YqK6lkAODydp5Smx7OoYBdcgrLpF6ODIHx1qNS9raBBIdihc9lW4A0J7r5wtohHgB%2F%2FBdCzjeJHuj9McBQe%2Bl6aUR8aauyt9bCsOYFYzIgZngGWKgsTdZ23CypiVcPPh00d3NVGcDWmVQzLBmu93qAD4OLJKWAXP%2BpnR7oH3k0GgkVa4hFWSDOz6Mkf0LX6s1CrNV6yAiyEud6CjdY6MhmDuX8hBYiYUsZiZuSrkwpOeowQY6pgFpX%2FUbkV0WWzGwWdO0n41yCkkzW%2FTFz3qkDBmRERGOYrOkz%2FCEWViZozeipNIwwEyTEQMDGL6wFd8ZBls8ZBxx54Qf3OWoxfLcLVtSd7NlEyYbAdHIjgsVZiupTinOw5wc9Qzxinl44dzoKDjt42Bxp3YH5IRxzNOi17LrBwhpjA98fjGh1nosM4J4M7N6PtJitmBPymkV91ZsUnwqZVMXuYVJ9kY9&X-Amz-Signature=2c48246aa3bce1cd040a92dc11a43ecad966d3e96d6f986b31df4e411ee7887e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HT5QUAR%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBE4jG17lDei4ILIbbdppD6YkqXd3TnHtKkui3bD9cYgIgHKxE3ONOl8raT0uvVJnfz7quMbaCBQLJ2CXf%2Bbsps3Yq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDAlwC5SrBbJjC6%2FBuircA3GEXl7oxxIZhMOoGtSd4hg%2FTHKKRB4WSckn0EANkC3FxuFbpLj7fCqpTsjHeqaeIkniITWieK2k0pYiuUlxxR9vrAy1OhX6ZoCAGRs%2FTfadUrJXFmGKmMuuIIfyRl7ITDitOUz3WYSC6YejQCHUhKBjafGAhtfEdb7l97HhUKOjBSKL7RHT5JMN8%2FfqQOmP1k%2B5jOW8azHBXo3M39I0iRVAs%2F1L%2Fai08U8px1WHhU8Uqiq0S8w5P5oD6LpRja81UvXP6wXtWEjhFdhLLJOwfMiW2VDrllhyShSj79Vzd7f6qxpWM5UjjOu6FWHssAHwnYQkKWwSmUeD8QqgbYELGLtkloN%2F7D%2FUwmeyddJVCVNXDcYBDI%2FPhif0IBFcs4R5T%2FbHNddvcjIzJZWBeSJllgByAytcQjBOGmDjJB9ns9o2ddIwKeosyw%2FVkEtePaaDe%2B0%2FlVu7sZVLhR%2BnG4jK2m44ckRRCsdaHTUfPwVLD1hRTLmuQWeNQUc94DgvrM1xEL6z9gj5XAQzM2jSk%2FLSFIzVEM%2F1ctD0HsZYzcLZI7JCVm0kkQXJJXOUxxAdtkcyeC8GGNZi5yAjDn1X%2FJT7Ic%2BheWfYt4vcQCcxoGXHJRjEfqk3F0rCQT%2FkZ1OgMP%2FmqMEGOqUBs71HgpAZ4QJbZ0ekQxmxAqQ2FkgWNcmwABFslyqiDGUS33K%2FyhrCedS7XgqkOhKXh2r3kWHMdyTCHSqyBGaTl3BqEhdvpmIdz00Zv4iIj8%2BXovK7C1D56K8ohKryhfVzhLCDq%2FhcQPOUZtG2fJAdQqinmKFalAbBaea28wf8G6m%2FT2H9s7vzspPQmqsT3xJlav3qB7WD1g16t2H4UJL%2F%2B5ZIhCzR&X-Amz-Signature=5db2bfbd01bb8dfa9c963b0a4e76e00f87ffdc2b7ba5636dc95685df46e0ae67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
