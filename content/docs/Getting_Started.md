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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNHTV6L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCnycrSa1DFFQ4zOiSugYmT1Hna9MjvxA87Djw9ClT2%2FwIhAKJq5wl%2FnA7UGkT5Z3DmrkozF5EQk9icSkBpsa0JUypPKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRY99AZdmWv2ygtEq3AP2Hh5K2PEcWlzC5Mx9U%2Fc95i4BUAeN07X0YE0Xf8wNDGFVHhLlY8aw%2F1ZvdQeZUJ867RlM4YfQsCzuY%2BdF2n3eGqT%2FycHk2q0nb%2FV3e3hopxNxz6ggHcmie9kEi1O9pdkh4%2FuLWqbamy4qphiqj1cWsp6nDoCqVcyIwmNVMm%2BpdDs5gEgskcnxD8XMns93UZOvXgwpjreJjPmSEa9YAv3fo3BD2S4AEueuqVBhCERxhX2I3Kgs4XEaHJA5vMlrvRWHzQy1COlxN6EcyYh8g1L8yAelMpZFjQuzQOiQiAbvnERHmJmqnKh%2FkqJgkBpOH9OpjPoarjY9%2B%2BOgtd%2FYmUZzidaWj4zBgJY%2FwMyJ5MgnyIOWx3TzyYWo4Vg%2FwxA%2FEzXS7fekjn3o%2FWYbmZN6JatieUK1%2Bbfi9jfApJjNlRXaYjwsWdWDcc%2BUvo53yI6lOfuppWkvmklLECb8K75UnUJibofJ5rsraqJzpWn8NroNN7W243Kho9Kxy5DZiGWeAjlezM2oe%2BB0VXfZHLk9UPZRsRRkAnmCJ3TQCMSSPMQ4RWPOd73oo%2BH50w%2BOrXu4orwMtz6HTmXBMZQjjCizKbFCwACJiDljETMOcFepi3d6cHil9FGGDXX8XrcRETC2k9fEBjqkAURelvrcKgzG83H8YmTMMvDgn1RlIibNDPcT%2BDltwmsONGFFEffBg9HFnAi3NoBNAeLBJongLZSoDC7HwRrHbLawRk%2FXPp51UXGr443dtVssDXVTAGxYXGSqecB3Lbn4sfXBf1usqhAp7Eux6Y33iRj8Nk5Lmc59%2FZ1y4kEeY05CS1P4zfWHZV%2BYIm%2B9tZey9tPnz2HBmb7Q92WU%2BdLDpDF6xvl7&X-Amz-Signature=e5f1981ed2ca158ef7dec862635fdcc25eb2cc2b1bee3cf4dec2ed5c8a575546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNHTV6L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCnycrSa1DFFQ4zOiSugYmT1Hna9MjvxA87Djw9ClT2%2FwIhAKJq5wl%2FnA7UGkT5Z3DmrkozF5EQk9icSkBpsa0JUypPKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRY99AZdmWv2ygtEq3AP2Hh5K2PEcWlzC5Mx9U%2Fc95i4BUAeN07X0YE0Xf8wNDGFVHhLlY8aw%2F1ZvdQeZUJ867RlM4YfQsCzuY%2BdF2n3eGqT%2FycHk2q0nb%2FV3e3hopxNxz6ggHcmie9kEi1O9pdkh4%2FuLWqbamy4qphiqj1cWsp6nDoCqVcyIwmNVMm%2BpdDs5gEgskcnxD8XMns93UZOvXgwpjreJjPmSEa9YAv3fo3BD2S4AEueuqVBhCERxhX2I3Kgs4XEaHJA5vMlrvRWHzQy1COlxN6EcyYh8g1L8yAelMpZFjQuzQOiQiAbvnERHmJmqnKh%2FkqJgkBpOH9OpjPoarjY9%2B%2BOgtd%2FYmUZzidaWj4zBgJY%2FwMyJ5MgnyIOWx3TzyYWo4Vg%2FwxA%2FEzXS7fekjn3o%2FWYbmZN6JatieUK1%2Bbfi9jfApJjNlRXaYjwsWdWDcc%2BUvo53yI6lOfuppWkvmklLECb8K75UnUJibofJ5rsraqJzpWn8NroNN7W243Kho9Kxy5DZiGWeAjlezM2oe%2BB0VXfZHLk9UPZRsRRkAnmCJ3TQCMSSPMQ4RWPOd73oo%2BH50w%2BOrXu4orwMtz6HTmXBMZQjjCizKbFCwACJiDljETMOcFepi3d6cHil9FGGDXX8XrcRETC2k9fEBjqkAURelvrcKgzG83H8YmTMMvDgn1RlIibNDPcT%2BDltwmsONGFFEffBg9HFnAi3NoBNAeLBJongLZSoDC7HwRrHbLawRk%2FXPp51UXGr443dtVssDXVTAGxYXGSqecB3Lbn4sfXBf1usqhAp7Eux6Y33iRj8Nk5Lmc59%2FZ1y4kEeY05CS1P4zfWHZV%2BYIm%2B9tZey9tPnz2HBmb7Q92WU%2BdLDpDF6xvl7&X-Amz-Signature=2ba95fcfdea2c321ac17a9f578772d0ce0e8b6cf645b87d4dd84d61a88dff96a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNHTV6L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCnycrSa1DFFQ4zOiSugYmT1Hna9MjvxA87Djw9ClT2%2FwIhAKJq5wl%2FnA7UGkT5Z3DmrkozF5EQk9icSkBpsa0JUypPKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRY99AZdmWv2ygtEq3AP2Hh5K2PEcWlzC5Mx9U%2Fc95i4BUAeN07X0YE0Xf8wNDGFVHhLlY8aw%2F1ZvdQeZUJ867RlM4YfQsCzuY%2BdF2n3eGqT%2FycHk2q0nb%2FV3e3hopxNxz6ggHcmie9kEi1O9pdkh4%2FuLWqbamy4qphiqj1cWsp6nDoCqVcyIwmNVMm%2BpdDs5gEgskcnxD8XMns93UZOvXgwpjreJjPmSEa9YAv3fo3BD2S4AEueuqVBhCERxhX2I3Kgs4XEaHJA5vMlrvRWHzQy1COlxN6EcyYh8g1L8yAelMpZFjQuzQOiQiAbvnERHmJmqnKh%2FkqJgkBpOH9OpjPoarjY9%2B%2BOgtd%2FYmUZzidaWj4zBgJY%2FwMyJ5MgnyIOWx3TzyYWo4Vg%2FwxA%2FEzXS7fekjn3o%2FWYbmZN6JatieUK1%2Bbfi9jfApJjNlRXaYjwsWdWDcc%2BUvo53yI6lOfuppWkvmklLECb8K75UnUJibofJ5rsraqJzpWn8NroNN7W243Kho9Kxy5DZiGWeAjlezM2oe%2BB0VXfZHLk9UPZRsRRkAnmCJ3TQCMSSPMQ4RWPOd73oo%2BH50w%2BOrXu4orwMtz6HTmXBMZQjjCizKbFCwACJiDljETMOcFepi3d6cHil9FGGDXX8XrcRETC2k9fEBjqkAURelvrcKgzG83H8YmTMMvDgn1RlIibNDPcT%2BDltwmsONGFFEffBg9HFnAi3NoBNAeLBJongLZSoDC7HwRrHbLawRk%2FXPp51UXGr443dtVssDXVTAGxYXGSqecB3Lbn4sfXBf1usqhAp7Eux6Y33iRj8Nk5Lmc59%2FZ1y4kEeY05CS1P4zfWHZV%2BYIm%2B9tZey9tPnz2HBmb7Q92WU%2BdLDpDF6xvl7&X-Amz-Signature=f99f2eeaaa312876a1a1ed4b94f127cd2371ce816b0ab479f906f471cb49ddf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOIPB7O%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIC6f21hpPNrzH0GBmEwqbHeYzuZ%2BKKxvtAoUIHY967hkAiEA0zsE%2FNkGaCVQCoikAxLy01cpaPop78pZglN483kECLYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOufvucCTOULXu2hCCrcA5TngCn44t%2F1staUs7UrHBVokbHWb1UGBkXSD1jTs%2Fpuvwyttg5bRUjzw5k%2FRPF7n6GrfY76z2KoUAXA5aNEN5ABiW5vVH3zt4WfkR%2FYXJ%2FAB641X8p4zzFxgslxXdWHLIZfeis84t7ICDjweYUcDsOkYeMUfQ1ZALRifcJf00yWyNq8PyMPst8QI893pr0H3aj8fIdbTzpyvYKuO8%2FgP4%2Fsh6aoxpM3sQ8Ahf6NcdyTNYGk%2BzJNghobu72xpBuyZJpsTeMasJm8CcJ7%2BGGEy6vrvqCg5FuN6YZohphYoew9M71%2B5Oy8q5YITf5XsZCiCUAZnHjfoXg3uCRhGcGv1hiOmVIc0JDAi0RF%2BD3upw19pdnQnTEJHun5jXr492k8ciIFff0pkTckttuLhORBuDmw2SHrQIGa61U2yo4W4ETYlbbCBuxCKq1FcLLO3bcJ8lByRxb53L2MENxaqAEEYcP9xMYVbr6AP%2BMUix4VMvvYIUWPTcoQbPlgKk8qFsmvRQn%2BX0nqVrjnnt55rAjv4h9NCvG%2FKW0C8JJuQkDQwnG%2F5kb5u4B7snMAsNncm85QahXAxgGCBEMa5JtsJ48j18uSLWbMJSlZcriabdNe3cDb7QACuN8hnZb2ARykMMiS18QGOqUBMQlKOdDgQhfLxbWSOSnTXJ51cDOIrVLCd9fBBXDerN95qZJQrzgW4IpC7BGFE8IbHlI1CeMj03cRRRDWR2ZvIf6Q%2FyKjj5KY5ImM8vnuR2XeQFm%2BZo137sJf9NSfqJaYsSL2TEhBun55hWOKkaqEU8e9BOeLQsyj1GPLwrV1s%2FsvHXAJB%2B5J9n2UnGzLz%2FzFocOYi%2BivFQf6hudmFzMBJimX04NL&X-Amz-Signature=91b2d3d0d05c6eef25f0c150ef0160c252c3955495b5858077aa7886b7783f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LAIKY5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDjSDIMAqB5q9QDhaZfda86wooFJzss%2FiUHyt4PDLBa7QIhAIjOdz9YT4b7%2FDsYQa1A5xKLQUudQ6Er%2Bv8aX57yD1QkKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjJNqbhmyP5uWKDhsq3AOpXBIwbALSNroBS0xXR3INPxU8B0R4jq%2F84vFjQ3pQ7%2B9U2eOx4pWagdtUA0cERZiAMjmMbfPSIzHZO%2BNaJ8f3%2BjNz1g3ULfcKfzytlpXKF%2BwGFZQGnLEyrgib%2FwIFJ2YWWQzVGs9CpM7sBiBK3p7i5QhUzIfkQAYcpUIE%2F2sSmCCR9B8vxxM0buRXhSSfWo7j8%2FZ1nqskS4tnAl5lfMQZZAg4stOPjRJ4m%2FIbSKYdJRnGbhkJGxBS8PLjwCYJy7encDDHPqBgKyCuGOdBiLb4c9s4LIxdbNmhjyVoqJxoX7x7bI305r%2FyiCNpvNwv5yM4S%2Fn64dSCexDiE0qiQn%2BsG6s4i0whpNehG5E75OwVw9%2BayqwuQiKxKfm76ghLjb1SjL2cyL3HLGM%2BiFcgUuCp0h6B1L2Z5AkOQ3%2FGEIG54g5U7gOAy2wpchUCU%2BTIvdpY5MrSHwy1NuME%2BfzrOzPaBxWN%2FB7fN78kCWM2FeZ6wlfjoz7%2FBtbgE%2BYkJRXWyqsaH5z4agnrXN6YJJHmXDGhNU6wSMi0cn2eNgICg%2FO4Z4C9%2FzwSI%2F1xpSEllUbfdsvHcdGFLvFl08kr2OACj1INIkBtZyV33Yax3Oz2u9FadpAZcZJl6dqxBFd1pzDvktfEBjqkAWhDY1DkoKeiV1iY%2B7%2B24n%2FScSfpK9y%2B4r%2BuuC7T7rVZRQwVIKm%2B4Wgb2kdlXswqFBrmrKbCCX7LCnBzSQno2d9BQEFhGkyYTiw46YQ3Ogm%2BjYc79EdGgh8VwXLGpiCeyqqqNJ42wRXsxUHbM%2BxMANQ0Z3Hnp%2FkCPzw5V3%2FkvocvLc1PZqRuetUCyWWN1hkvaYDxC5f%2F7YPQlGc7ghIMc4DUyYQZ&X-Amz-Signature=534f783de5f5fc3481633afe1c46f63eee4a095290613ec3f515a720718add8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNHTV6L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCnycrSa1DFFQ4zOiSugYmT1Hna9MjvxA87Djw9ClT2%2FwIhAKJq5wl%2FnA7UGkT5Z3DmrkozF5EQk9icSkBpsa0JUypPKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrRY99AZdmWv2ygtEq3AP2Hh5K2PEcWlzC5Mx9U%2Fc95i4BUAeN07X0YE0Xf8wNDGFVHhLlY8aw%2F1ZvdQeZUJ867RlM4YfQsCzuY%2BdF2n3eGqT%2FycHk2q0nb%2FV3e3hopxNxz6ggHcmie9kEi1O9pdkh4%2FuLWqbamy4qphiqj1cWsp6nDoCqVcyIwmNVMm%2BpdDs5gEgskcnxD8XMns93UZOvXgwpjreJjPmSEa9YAv3fo3BD2S4AEueuqVBhCERxhX2I3Kgs4XEaHJA5vMlrvRWHzQy1COlxN6EcyYh8g1L8yAelMpZFjQuzQOiQiAbvnERHmJmqnKh%2FkqJgkBpOH9OpjPoarjY9%2B%2BOgtd%2FYmUZzidaWj4zBgJY%2FwMyJ5MgnyIOWx3TzyYWo4Vg%2FwxA%2FEzXS7fekjn3o%2FWYbmZN6JatieUK1%2Bbfi9jfApJjNlRXaYjwsWdWDcc%2BUvo53yI6lOfuppWkvmklLECb8K75UnUJibofJ5rsraqJzpWn8NroNN7W243Kho9Kxy5DZiGWeAjlezM2oe%2BB0VXfZHLk9UPZRsRRkAnmCJ3TQCMSSPMQ4RWPOd73oo%2BH50w%2BOrXu4orwMtz6HTmXBMZQjjCizKbFCwACJiDljETMOcFepi3d6cHil9FGGDXX8XrcRETC2k9fEBjqkAURelvrcKgzG83H8YmTMMvDgn1RlIibNDPcT%2BDltwmsONGFFEffBg9HFnAi3NoBNAeLBJongLZSoDC7HwRrHbLawRk%2FXPp51UXGr443dtVssDXVTAGxYXGSqecB3Lbn4sfXBf1usqhAp7Eux6Y33iRj8Nk5Lmc59%2FZ1y4kEeY05CS1P4zfWHZV%2BYIm%2B9tZey9tPnz2HBmb7Q92WU%2BdLDpDF6xvl7&X-Amz-Signature=530ab43cc4638a8e345e3a958279413b953ac4d4b69856c9cbe74936ebc83743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
