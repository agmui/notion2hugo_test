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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4QSHSK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvLKuxsDffmN%2Fo8eVAVd9Ryj10gh5kJ6uCULKoIF56AiEAousv1toCBQrwCAiVat%2FDjyuwnkLjg7XD%2B3yZXq6khikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP0ngfReW3Xfd9U%2BQircA1JanFGH7fJWp%2Fb5qYN05YwARVy2ns8t9BXxtjWNlpTrpXaQ4GVIq5Jp0Y2mMSG8sTA8qCKFMCT%2BYiAMWQCzAyrnPbBjcw3N7tIrz4R49%2FWumyMje6CZywCOw%2FRvCdUz8oOwbr0NLBfR6HcZpfigAuosM%2BLgWXM7MbWQJQTPGlHCbQabBWlIqjx3Hfr2Zteehxy%2B%2Fcbf8wkvNXaJ1hQvG1KJ7%2Bz77SApBMmnA8zkthG49WP3xf%2F85y%2FY3%2Bl0OaHRyUkCy8u%2BhX%2BbMAaxFzb4mkV%2BJmme26Yt4kx8gjrB1VR9%2BO0IQYGIWpojkPS2I5MmtrK0y0zWJYE911Wx%2FOROcNNP0nB5h9WhP6UKm4EdfPLmuqjWoj9B2uIN549zsCfYxMmwbmDFxJ8wXA%2BB8xDI67FnaCc4McZBiqwp7wANiI2OzY3qC8Oj84I37kTk6%2F5rUcSJuxEAVwpcetb8ZVJpi3PS%2BfFc8xDDKVtwtn1SnuQPGNdGgAXnx3XyYE9lWqFuGelW933JF3N55te8Tc5RWRBORAoZdACSjJ0c1rH2v7Awvi2aoyhoyyk75XH5DPjJ0KdGweaC44IT6Qds0HnnJrkq7VnPnohxQOTX76WJo2HTg59qkwrwsOZgFQE1MKWL9cQGOqUBARsOwtO0yz%2Fdp9Kkg%2Bcz3OPn%2B4zSDIhGGWpjEPp6bF1aV8eCj4wJKWaARW457QQERe5AIGr9X8IlfL4jHUofAIHItRQSkvWZ%2BU5U4pl1HoAN5Hy8cdKPiuVTTmfqs0sBi9nt7vkulFYU5ax7%2Faq7spgzLu6HXNsZX1AJQtD9M64vfThOZXsfvzyWq3TDb%2BbfMdMEcuonwthhX28pCYNmXmpGzWwx&X-Amz-Signature=9a49806c6210795f4baae5831b30ccf9f03dac6a32e7bd868d0477ca40ad5299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4QSHSK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvLKuxsDffmN%2Fo8eVAVd9Ryj10gh5kJ6uCULKoIF56AiEAousv1toCBQrwCAiVat%2FDjyuwnkLjg7XD%2B3yZXq6khikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP0ngfReW3Xfd9U%2BQircA1JanFGH7fJWp%2Fb5qYN05YwARVy2ns8t9BXxtjWNlpTrpXaQ4GVIq5Jp0Y2mMSG8sTA8qCKFMCT%2BYiAMWQCzAyrnPbBjcw3N7tIrz4R49%2FWumyMje6CZywCOw%2FRvCdUz8oOwbr0NLBfR6HcZpfigAuosM%2BLgWXM7MbWQJQTPGlHCbQabBWlIqjx3Hfr2Zteehxy%2B%2Fcbf8wkvNXaJ1hQvG1KJ7%2Bz77SApBMmnA8zkthG49WP3xf%2F85y%2FY3%2Bl0OaHRyUkCy8u%2BhX%2BbMAaxFzb4mkV%2BJmme26Yt4kx8gjrB1VR9%2BO0IQYGIWpojkPS2I5MmtrK0y0zWJYE911Wx%2FOROcNNP0nB5h9WhP6UKm4EdfPLmuqjWoj9B2uIN549zsCfYxMmwbmDFxJ8wXA%2BB8xDI67FnaCc4McZBiqwp7wANiI2OzY3qC8Oj84I37kTk6%2F5rUcSJuxEAVwpcetb8ZVJpi3PS%2BfFc8xDDKVtwtn1SnuQPGNdGgAXnx3XyYE9lWqFuGelW933JF3N55te8Tc5RWRBORAoZdACSjJ0c1rH2v7Awvi2aoyhoyyk75XH5DPjJ0KdGweaC44IT6Qds0HnnJrkq7VnPnohxQOTX76WJo2HTg59qkwrwsOZgFQE1MKWL9cQGOqUBARsOwtO0yz%2Fdp9Kkg%2Bcz3OPn%2B4zSDIhGGWpjEPp6bF1aV8eCj4wJKWaARW457QQERe5AIGr9X8IlfL4jHUofAIHItRQSkvWZ%2BU5U4pl1HoAN5Hy8cdKPiuVTTmfqs0sBi9nt7vkulFYU5ax7%2Faq7spgzLu6HXNsZX1AJQtD9M64vfThOZXsfvzyWq3TDb%2BbfMdMEcuonwthhX28pCYNmXmpGzWwx&X-Amz-Signature=23350daf576795e3b04e72e01f33c26060bcaf1fd1affada67286a56a62faaaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4QSHSK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvLKuxsDffmN%2Fo8eVAVd9Ryj10gh5kJ6uCULKoIF56AiEAousv1toCBQrwCAiVat%2FDjyuwnkLjg7XD%2B3yZXq6khikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP0ngfReW3Xfd9U%2BQircA1JanFGH7fJWp%2Fb5qYN05YwARVy2ns8t9BXxtjWNlpTrpXaQ4GVIq5Jp0Y2mMSG8sTA8qCKFMCT%2BYiAMWQCzAyrnPbBjcw3N7tIrz4R49%2FWumyMje6CZywCOw%2FRvCdUz8oOwbr0NLBfR6HcZpfigAuosM%2BLgWXM7MbWQJQTPGlHCbQabBWlIqjx3Hfr2Zteehxy%2B%2Fcbf8wkvNXaJ1hQvG1KJ7%2Bz77SApBMmnA8zkthG49WP3xf%2F85y%2FY3%2Bl0OaHRyUkCy8u%2BhX%2BbMAaxFzb4mkV%2BJmme26Yt4kx8gjrB1VR9%2BO0IQYGIWpojkPS2I5MmtrK0y0zWJYE911Wx%2FOROcNNP0nB5h9WhP6UKm4EdfPLmuqjWoj9B2uIN549zsCfYxMmwbmDFxJ8wXA%2BB8xDI67FnaCc4McZBiqwp7wANiI2OzY3qC8Oj84I37kTk6%2F5rUcSJuxEAVwpcetb8ZVJpi3PS%2BfFc8xDDKVtwtn1SnuQPGNdGgAXnx3XyYE9lWqFuGelW933JF3N55te8Tc5RWRBORAoZdACSjJ0c1rH2v7Awvi2aoyhoyyk75XH5DPjJ0KdGweaC44IT6Qds0HnnJrkq7VnPnohxQOTX76WJo2HTg59qkwrwsOZgFQE1MKWL9cQGOqUBARsOwtO0yz%2Fdp9Kkg%2Bcz3OPn%2B4zSDIhGGWpjEPp6bF1aV8eCj4wJKWaARW457QQERe5AIGr9X8IlfL4jHUofAIHItRQSkvWZ%2BU5U4pl1HoAN5Hy8cdKPiuVTTmfqs0sBi9nt7vkulFYU5ax7%2Faq7spgzLu6HXNsZX1AJQtD9M64vfThOZXsfvzyWq3TDb%2BbfMdMEcuonwthhX28pCYNmXmpGzWwx&X-Amz-Signature=f49c8015d617c71c55dd20f8286ae33912572138bf68d25410cc9bc90db17e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYOGGZQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4hl61SqqIMJKTjtRpJQ9a6%2BCF%2B3bL%2FIem7xkz%2Bomw%2BAIhAJGb87S%2BOWE%2FgK%2BI9a08vjG8CPfs89OyM4nFEm6SaeAyKv8DCDsQABoMNjM3NDIzMTgzODA1IgzmZ4s2BQY3Mo9pV9kq3APb%2FmMIE1jaKTL5h7vmhvN5TpLnHyGiqxtlkeX9RH%2FbydMRqv9OnYT9Cjc7FAQO0qA5k0%2BiA7dbA019PWIKdAfVplPZ7XT5AEG0OoI26ZylqdwzHP3b1%2Fl%2FFAUhNC6Gok3LRPIiia1PGqvHJly6kg0mOVoSkywQ1XUOWjPpa8UbaT9R%2F5HElF22qxBzFFSI3LQEUt7Xk8%2FCvZFTFerwJR60fmyZXVCaim9QOxakA005RuYVRuWKxIZMoorJogmfhb0E0Ks8ZslEu2zgAIoLz3QhHoEfoqfQc%2BCs0UXPoVYGViDNoOnIAzVaiiqkw2JoIJ4r9HQbhIOsJDXT44lO0jyQdoBKi1XC2mD0fnZ%2Fji252tv9xKcsWN%2BR5VcTdMF1BTtDHvwHgkxDSW5CpqO5nBdwEpIDNsxD7lE8aalBBLAMISrsUtaU6it%2BsfK8qj%2BjRNSCqSozpxroGqgBlomb1MWkeYmdyuuVzA5qDyXkSD%2BUH%2FP3p7bydW8owTtYqUaue2GpgrnUHNhOwEorJQBsWh%2B2DZCIWtsACVbDM2%2BfmBBfD5odVXcbPSofNq5Cyh%2FGtykcPH8G%2BmH1lq3DkSh3LYkQ5J0QT6LSci2WGGw%2BSVGP2nLrROTq1%2BoZb%2BUueDCpjPXEBjqkAZzCUZ%2F%2F5gZs9erN3etYOIZrMbQ8M0RmiLPZ3Ck76lODQamKHhlmlRCJOooGhHvGtomf3k7ij1Yr1lyO8t2grAN%2B2%2BrgJeDubTYjgNpTWykcC0WwKsU5fAOULGxVztxAwdCHQ4nHQ6%2BJ1%2FqpXQ%2B3oy%2BIyAT5Hm96EL5Q%2FUcrE5rC0H%2BBKZ3JplWs57rd59aO8mYX6J9Y3FhBLBqTzhB%2BEln2s5au&X-Amz-Signature=243e65c371fdfbe6d8054a115726f3c5ac143799965d1e8a86f2e924fbad6b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXZSNTA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuh1YGs5HE4AAMdPY5teq3mlUYf%2BL2RnBAcdhFw18fFAIgaSmTDDd8nLWo5TlfK46CIHx7oIsOBVoeCQYeaBxwBPcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLaHfZSv5xTwQBc3LSrcA2bRUrTMYkqY91UqDfC5M889l5y3RQ83YBjnBhJuKehuld%2Bkw%2F4xEajwRCZdKnpwtPkEGza6ESp%2BTZIJG3kpXKkPK%2F1LDVprKyCWzX2KE2jyZAcJvdos33MFiiIRi7AsUoQ%2FKNL5C%2FWx%2B0UHC4XbZDjmSPtY8IJ%2F4bnGOYzzoDaLpMYR2NhWuoM1okt8uymZ5mPiq0SFJ1Nb1sKOzwbbsI9URRcyLEDvnRvzHHga6M%2FSbro3TVDopQmairu1LwIQKMEIlikvngHHf2CKL6aRAnV63j7j6MHe7aOinoD0qTF1lFhmY5gv5dVFIXq9mPBMr2x6xSvwMuQZ8KEnhJ7jlOTaltFFC%2Bh8mf6lUSSMCL%2B3TbGAao1dWjCW9i4mvl2Kv52grvJ4WOW4yr4rfj3IEuVnIdTTf6kW3Ur78R%2F5JqNAFqWuRPk3T5FF8E36NrU3z4K2wqWZUTzAzRKqc1diVot1iuXmSCvVwm8CblTp0QDweDWG9ZPQlhOy37w%2Bqf4dcmo0xsl72pylO3dbFfX5v09o1yB5yCwKUfjy45IqlOPxEfJgeWe%2Bm5hWpmYjdVFJGUKmUHnas7pa3%2B0IX7w7feKA1ida7qIFs%2FFAj840xDPQdxpFKT4M35650PqAMLuL9cQGOqUBVpvVq9RYH6bSFgNg5ndQwJm9LKRxYu62IQ%2FiJk9UUUA75BhuE4QE%2FUyK1bJP7FEI3VSZdEYxfDzDE9OdUnLvtNnTMPIjdPeqOFSc8lT2hBiuRwp1JVTT2gmWF4MLcWelepKDS9WVWISMXxYOAnihH6WCU2SkYTLCurfldmmARyarAaG7D8TJR7BqCqEzno8Caci3eUvkIIgCYZFUq7MM2agcU7iH&X-Amz-Signature=033d0754ad71ab5dd33a77d37e447f6842e3bfbf63de9fc9b529b20ba59507ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4QSHSK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBvLKuxsDffmN%2Fo8eVAVd9Ryj10gh5kJ6uCULKoIF56AiEAousv1toCBQrwCAiVat%2FDjyuwnkLjg7XD%2B3yZXq6khikq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDP0ngfReW3Xfd9U%2BQircA1JanFGH7fJWp%2Fb5qYN05YwARVy2ns8t9BXxtjWNlpTrpXaQ4GVIq5Jp0Y2mMSG8sTA8qCKFMCT%2BYiAMWQCzAyrnPbBjcw3N7tIrz4R49%2FWumyMje6CZywCOw%2FRvCdUz8oOwbr0NLBfR6HcZpfigAuosM%2BLgWXM7MbWQJQTPGlHCbQabBWlIqjx3Hfr2Zteehxy%2B%2Fcbf8wkvNXaJ1hQvG1KJ7%2Bz77SApBMmnA8zkthG49WP3xf%2F85y%2FY3%2Bl0OaHRyUkCy8u%2BhX%2BbMAaxFzb4mkV%2BJmme26Yt4kx8gjrB1VR9%2BO0IQYGIWpojkPS2I5MmtrK0y0zWJYE911Wx%2FOROcNNP0nB5h9WhP6UKm4EdfPLmuqjWoj9B2uIN549zsCfYxMmwbmDFxJ8wXA%2BB8xDI67FnaCc4McZBiqwp7wANiI2OzY3qC8Oj84I37kTk6%2F5rUcSJuxEAVwpcetb8ZVJpi3PS%2BfFc8xDDKVtwtn1SnuQPGNdGgAXnx3XyYE9lWqFuGelW933JF3N55te8Tc5RWRBORAoZdACSjJ0c1rH2v7Awvi2aoyhoyyk75XH5DPjJ0KdGweaC44IT6Qds0HnnJrkq7VnPnohxQOTX76WJo2HTg59qkwrwsOZgFQE1MKWL9cQGOqUBARsOwtO0yz%2Fdp9Kkg%2Bcz3OPn%2B4zSDIhGGWpjEPp6bF1aV8eCj4wJKWaARW457QQERe5AIGr9X8IlfL4jHUofAIHItRQSkvWZ%2BU5U4pl1HoAN5Hy8cdKPiuVTTmfqs0sBi9nt7vkulFYU5ax7%2Faq7spgzLu6HXNsZX1AJQtD9M64vfThOZXsfvzyWq3TDb%2BbfMdMEcuonwthhX28pCYNmXmpGzWwx&X-Amz-Signature=794783e0dfd5846a06b0dd23c0ef82f33eed8d5215d284a77701e2b648cef8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
