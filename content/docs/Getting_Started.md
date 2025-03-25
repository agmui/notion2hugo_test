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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZMEJCB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqqKi6uVT%2FI7G%2FHqsDndWUT3xemwsttviYqqKZFlEpnAiBxCybrLw%2FnmrShlXm8KRbJ3KxyOu4KmQF9sc8g6Vvvair%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMUx7ahKmKyKgtoirtKtwD5x%2BVfu1UUYWOmnqZrZtFJRplo0cdFXqh7hGsUPYnUVud5iazQ4n0sIp8FMnnsaPqorCAd9IwAqYSaxmOvVvMK11Jbwpc%2BIaK%2BBq30b08clLyO2jEmtwlSkiaFFS0%2BGbaf%2F9XRbF16IMepoElvIkVWIYAsUxhiHw1%2BJsztWcKeHj%2Bef5MbpG7NS8eJWKvPHDvbHn97rzLIaZPmNu6XucGW7yCdImyBX%2BVBXt83ao%2F21MODgbGOlZr03qzGYqnxvPREeRx%2BnvtIHqBa5iTNKIYdTAFjH14VURdL7METUSCz7VsgcMAMgAsyl1PifQE8ehqsVA%2Bx5wmaj3bDKIV2lnZY92w2sV2JbBAgrHJ2z3Ufa6wl0W%2BxRlYcgo1YQCU%2FaLks2l%2BCmKRJOAi%2F9OoJGFNif8%2FCXYObubTEwmfKMGasrRVlNvFfSaUkiGmWSFuRfqhkw5jGAvl%2BfiWvtQAiaJcraPYpshocz9jJzH%2B4wOrMnSakISYzjqiYc4Q2en8Cztg%2FswuhHWY8c20RQq4dPVpTZTk%2BamMBc2tfg%2Ba1LK28e8LLzZjWlnc%2Bt4pOxG9jtGN5%2FF3RMMEmq4in9qiatotSPe1%2FT6r2RdwiZZnpj7EUwjkn7uMuieLnnCtUxIw%2BqaKvwY6pgGJjGpRwMDHBQ0I%2BZQNAbAy6VqlWvsEZnOnMkIA30JheQc%2FFisSlRk0Z438%2FqCPPSzlGQi1kFOkE2KxkPKdRQhhoPWxoiWcXSxycK1aM3wG7w4Zb6mq2T8vD%2BwjT3YIjPzXu53vd%2BipVRKGRKJlR0ViTvmW6AKuqastO7hByzXrifljHMJCgQ5yP3njN5u4Ow8MdiGtKQ65sPJvG%2Fhy8EWxKFCVqCdt&X-Amz-Signature=39de4cca68aed03ff2aec258feb779c1c32f367b24518fd356494f8b19aa01b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZMEJCB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqqKi6uVT%2FI7G%2FHqsDndWUT3xemwsttviYqqKZFlEpnAiBxCybrLw%2FnmrShlXm8KRbJ3KxyOu4KmQF9sc8g6Vvvair%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMUx7ahKmKyKgtoirtKtwD5x%2BVfu1UUYWOmnqZrZtFJRplo0cdFXqh7hGsUPYnUVud5iazQ4n0sIp8FMnnsaPqorCAd9IwAqYSaxmOvVvMK11Jbwpc%2BIaK%2BBq30b08clLyO2jEmtwlSkiaFFS0%2BGbaf%2F9XRbF16IMepoElvIkVWIYAsUxhiHw1%2BJsztWcKeHj%2Bef5MbpG7NS8eJWKvPHDvbHn97rzLIaZPmNu6XucGW7yCdImyBX%2BVBXt83ao%2F21MODgbGOlZr03qzGYqnxvPREeRx%2BnvtIHqBa5iTNKIYdTAFjH14VURdL7METUSCz7VsgcMAMgAsyl1PifQE8ehqsVA%2Bx5wmaj3bDKIV2lnZY92w2sV2JbBAgrHJ2z3Ufa6wl0W%2BxRlYcgo1YQCU%2FaLks2l%2BCmKRJOAi%2F9OoJGFNif8%2FCXYObubTEwmfKMGasrRVlNvFfSaUkiGmWSFuRfqhkw5jGAvl%2BfiWvtQAiaJcraPYpshocz9jJzH%2B4wOrMnSakISYzjqiYc4Q2en8Cztg%2FswuhHWY8c20RQq4dPVpTZTk%2BamMBc2tfg%2Ba1LK28e8LLzZjWlnc%2Bt4pOxG9jtGN5%2FF3RMMEmq4in9qiatotSPe1%2FT6r2RdwiZZnpj7EUwjkn7uMuieLnnCtUxIw%2BqaKvwY6pgGJjGpRwMDHBQ0I%2BZQNAbAy6VqlWvsEZnOnMkIA30JheQc%2FFisSlRk0Z438%2FqCPPSzlGQi1kFOkE2KxkPKdRQhhoPWxoiWcXSxycK1aM3wG7w4Zb6mq2T8vD%2BwjT3YIjPzXu53vd%2BipVRKGRKJlR0ViTvmW6AKuqastO7hByzXrifljHMJCgQ5yP3njN5u4Ow8MdiGtKQ65sPJvG%2Fhy8EWxKFCVqCdt&X-Amz-Signature=e0d560e9366b3063fc57b2231d6dcbdfa483872a259f57658b752afd047d0641&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPSXTAT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCboEwGQmkqK4VDUyEvMDS2Ks7mOrkXHi%2BhH0Xd7dDoMwIgLkeT6WleeZwd%2B1kl6Fo0OgVWfISN%2BHcKyhpZmpfm%2FUUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCNC2l6EdOD6ohM9%2BSrcA%2F%2Fv7coT9%2F0IH7LIXEeUn6Mcun%2FvZ84Z3TrEVa5XGa0k3PtIFCG4mtG1Jf55IxgwT%2BFmkr7gzcgkgxd%2FT6i4TONiOoFqRhSc8sDdUZt57t4DtAwGKRFny3qU94eC%2BczEfuHlNLkKEMJKajbLOytnWyA6nY8j1VTgivyK2IlTGHii2rVjAiBunbrDEPXFAMp%2Fy%2BHYZoQbUqXcLtuQ1ZlbjyPGHRb%2B%2F10v1fSCGBwY3HXxJcToHeUKyWSxoRFb5CEuI7RHhSBJE7wnUFkmzAT2e7Wt6kIuQ%2Ftyn%2FG56nsIIwwekRdXeyXSPrebRdfXudVLk53VCM%2FDW3KPtzqGo%2Fv6N5CK0fDPd4ZLC33Wg1gn9RxPjtA1NTkykX%2BL%2FPGHpCCxfaKFAHlmbBdqhcSY6pC7vw4Nx%2BryL9wGnKPb2vXZTRGqT9gUxrgtSAvfY%2B516ZiomJTcPZLTn82jz%2FriQz2S1DJBTX0Zo0vjTV9ugRR5AjtFyhshr%2BWGssD3oBwfKuC7xxuqXTubk9cnLgjYiNp9M9Ek5iwDRlAWorQUTGDUeVZ2cmG9IpOOQ%2BBe57Aq0WL6QRKa4va64tOjUc19gu7pbXTTU71Twzu%2BwgCP0D%2FYCFX58p58tlZLPg2g7xJJMKinir8GOqUBqc3Xxwzo%2FNJ3LpMDnjkubaN3HHa20ysdGaS1rKmUkCneOEtmQSopvYIsGP9snjD9sLS%2BFGgi%2FtAV4Jorcp%2Fmsdo5vGkiM89bQCdET3p6wN7i7or%2F7Q81evsx5cYzSDgquNkn7FlImaQJFV61%2FdhlI%2FvIRwAf4s%2BW6AMVXj39dVSnplbY6GV7hytkMKFfZfS5YYIVDy5pG0TjNOLYJL0q0s6LTUwK&X-Amz-Signature=5054457d7fd38c273e8672a1e22e36269efb339fdcc5120eeb99f34d101c5c72&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGEGTNB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdKW7myfTsHzOPtKtoXU%2BRUTWZEulkoLhyx%2B5ri9gjngIgY1EFIqloNNDv3Vz1%2FT0E9yGOaUEaoeMra3ZTRlphJNIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDNUp4i8deTMscabISCrcA%2Fyo%2FR%2FKVV5k98mgQN%2FyEvHLoMlTw19VgGjc8YhFGS3xO5EG6OeHYBIRe3ujscGZf9CAgnBtRJyvzf2Z1xzGSQbo3o3wF8pi1Tp0o7olWFq%2Flu25dkKSnk5xpWlx%2BPQZAYzXb818b2lbl6FelZtlHxsgGbNUxdkkBV5CojdKbQfJkgx%2BHRCK%2Fb2kCu5K6jlJETyQKPgfXEBJZ1SvTqgGQOoNdA49b%2F9cXcMnnD6No7cPVybHhdMNLNDWqPu29EaslxmXHJhraoe5SYliFv8IuM2kjVruM%2BfC4X0PPOnWDbV7SIBmQudXYb4%2BZ7MfJX0A6q4n4VJ%2Bfob2mZqBXdPlU8pd%2FNHYq9CnIUoemclHqPdWsLj18XrLcQLeRIblcCTZUUZN72D5PD2l0GB0huPoRxKIZRh5%2F6Mixuaxo9Yo2dlJI%2FCxAN8gBLGTAD1pAP5s4GjR6SkFzZr2FjSS8uM6%2FSXevGuAViqs0kHnKa15jjt0mw%2F6xmf%2B5FBj1E34Zo7P9igWq1EV8dgE3SxJfavtvTgTuCKuWq3lhU6SDjVou%2BZeF2kXry8943Ld42A%2FSr4Ko2lkKMFmJNP82VYRU1XpRLODQL1LGveUeZ3PedbC9vntLHAHTMIv1zq68bnLMJuoir8GOqUBclSl5z0wUpHvj6UEWjU%2BHY7dXyPTHduA6JF9oeruNN%2FKUGPRxZE9vr820Ipt%2FU1mnZnxU6PbwDv1xZ0n7IN0SJTBc4kTzOpLzjInasgnJLPJRM7vh7xjgBYDF2a5SRzY8za7VuM3ZK1AUuxRPCccoJyKozwh1X8WmxmDnWtl1FN7TX9kjO3uPFRZwm5RkMuEytYK1nHY3fvzCBcD6gXdBGsPIwAf&X-Amz-Signature=9ad3b54259710c16a879934c7ba4fe81a7281f70d1b70538f3513c34fb9cf1eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZMEJCB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqqKi6uVT%2FI7G%2FHqsDndWUT3xemwsttviYqqKZFlEpnAiBxCybrLw%2FnmrShlXm8KRbJ3KxyOu4KmQF9sc8g6Vvvair%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMUx7ahKmKyKgtoirtKtwD5x%2BVfu1UUYWOmnqZrZtFJRplo0cdFXqh7hGsUPYnUVud5iazQ4n0sIp8FMnnsaPqorCAd9IwAqYSaxmOvVvMK11Jbwpc%2BIaK%2BBq30b08clLyO2jEmtwlSkiaFFS0%2BGbaf%2F9XRbF16IMepoElvIkVWIYAsUxhiHw1%2BJsztWcKeHj%2Bef5MbpG7NS8eJWKvPHDvbHn97rzLIaZPmNu6XucGW7yCdImyBX%2BVBXt83ao%2F21MODgbGOlZr03qzGYqnxvPREeRx%2BnvtIHqBa5iTNKIYdTAFjH14VURdL7METUSCz7VsgcMAMgAsyl1PifQE8ehqsVA%2Bx5wmaj3bDKIV2lnZY92w2sV2JbBAgrHJ2z3Ufa6wl0W%2BxRlYcgo1YQCU%2FaLks2l%2BCmKRJOAi%2F9OoJGFNif8%2FCXYObubTEwmfKMGasrRVlNvFfSaUkiGmWSFuRfqhkw5jGAvl%2BfiWvtQAiaJcraPYpshocz9jJzH%2B4wOrMnSakISYzjqiYc4Q2en8Cztg%2FswuhHWY8c20RQq4dPVpTZTk%2BamMBc2tfg%2Ba1LK28e8LLzZjWlnc%2Bt4pOxG9jtGN5%2FF3RMMEmq4in9qiatotSPe1%2FT6r2RdwiZZnpj7EUwjkn7uMuieLnnCtUxIw%2BqaKvwY6pgGJjGpRwMDHBQ0I%2BZQNAbAy6VqlWvsEZnOnMkIA30JheQc%2FFisSlRk0Z438%2FqCPPSzlGQi1kFOkE2KxkPKdRQhhoPWxoiWcXSxycK1aM3wG7w4Zb6mq2T8vD%2BwjT3YIjPzXu53vd%2BipVRKGRKJlR0ViTvmW6AKuqastO7hByzXrifljHMJCgQ5yP3njN5u4Ow8MdiGtKQ65sPJvG%2Fhy8EWxKFCVqCdt&X-Amz-Signature=c5c9b65d66e40a9e6262dce7406be6de01c850ac7a1275cc1eb659e0b0a38b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
