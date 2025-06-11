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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654J6LSVM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfL1vyuhK3IPuw68mVp4KUmTWm3OPnYBs8SFfnyW1A2QIgS5ZHhD0Jy%2FhLiiFnO1IUnA%2FFlAVt8T8m%2B%2FJXRZb%2F31gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJen89HC0dy%2BnfOhCrcA7sfYNj0Dj0ntW0wTJYNs0zQW8uhYzpBEspgvgfGM%2F%2Bk0p4OgVGctOMl%2BMiHikjLkwVqcePltHQ9PqzbZ2BOGR9EwzxydeGj0TiYs1P7RXPD6UXJEK5HoXyA6AvYsPNmZ0P4jBYqvHer9pQHclk7usbByY72d30%2B9WeV0NHU3TftogVVArFPN057A9Bwis%2FPwl72rfJRUkV%2F2vl3vWDjWml%2B0%2BGlx%2BZcaP0XvIBfhcsYO1U8HbV%2Fk8Hhpve3tlexuVL3j3Op%2F4Bub9MFk6IcKb%2FMJnuV9wSyi2yQtJkYgw80RnYi6xYJ26v64ubesit5nXgKp9QNWNrhXoCMfB3WZxZqB0GTI5WerIXYnWJh0JOORLyt8XqgTfYWRBdJwQkAX6DuW%2BUMp5o74THATQIZCycBRuXyWn8oQ2qzWlPDDzEPvKePcIhT%2FayofdHg1llFjdrxgkptd6LwYPh7FdJX1JSW9ixnfrO2T8JrHMNfnVAswJv64g1ljxuzzzxAImFcyn0Va10anGP25jpTyTLTug6Fh0ty%2FwZ%2Bo3c2TbHli85RrlYR1LOFKoYhbM6d66339rCLTT1ipygyH6NB6Q2Tp3u3y%2FpSR%2FT57Wk9C0doAj4ckFJ%2FqCVFvppItrG4MICWpMIGOqUB39n2mhYyOep37TsOvbbKotQ2x50u9CXZqXb1CfAkz1cfO4oahJzF9ZP79MwPf7ZTgSj6wDkQbwBBm6%2BFZRHjAqPGwOnNCvLOdN17sUTV5CbSflfQu4YwkdEsSWVQ27yRWT7x5R%2BlFNpZ%2FqvtytdWpPBYbFnjo6KEO1Z6rHA8MSMhNPc8m%2Fuf50sbDHh%2Fbrw5WkRRgWzSe3QKTW1ijn%2BIQ7oggBp7&X-Amz-Signature=063f1eac99c46cd31d60b76ec4e4d7604adfe7a1bf8841f81c84b7baa4a8887e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654J6LSVM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfL1vyuhK3IPuw68mVp4KUmTWm3OPnYBs8SFfnyW1A2QIgS5ZHhD0Jy%2FhLiiFnO1IUnA%2FFlAVt8T8m%2B%2FJXRZb%2F31gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJen89HC0dy%2BnfOhCrcA7sfYNj0Dj0ntW0wTJYNs0zQW8uhYzpBEspgvgfGM%2F%2Bk0p4OgVGctOMl%2BMiHikjLkwVqcePltHQ9PqzbZ2BOGR9EwzxydeGj0TiYs1P7RXPD6UXJEK5HoXyA6AvYsPNmZ0P4jBYqvHer9pQHclk7usbByY72d30%2B9WeV0NHU3TftogVVArFPN057A9Bwis%2FPwl72rfJRUkV%2F2vl3vWDjWml%2B0%2BGlx%2BZcaP0XvIBfhcsYO1U8HbV%2Fk8Hhpve3tlexuVL3j3Op%2F4Bub9MFk6IcKb%2FMJnuV9wSyi2yQtJkYgw80RnYi6xYJ26v64ubesit5nXgKp9QNWNrhXoCMfB3WZxZqB0GTI5WerIXYnWJh0JOORLyt8XqgTfYWRBdJwQkAX6DuW%2BUMp5o74THATQIZCycBRuXyWn8oQ2qzWlPDDzEPvKePcIhT%2FayofdHg1llFjdrxgkptd6LwYPh7FdJX1JSW9ixnfrO2T8JrHMNfnVAswJv64g1ljxuzzzxAImFcyn0Va10anGP25jpTyTLTug6Fh0ty%2FwZ%2Bo3c2TbHli85RrlYR1LOFKoYhbM6d66339rCLTT1ipygyH6NB6Q2Tp3u3y%2FpSR%2FT57Wk9C0doAj4ckFJ%2FqCVFvppItrG4MICWpMIGOqUB39n2mhYyOep37TsOvbbKotQ2x50u9CXZqXb1CfAkz1cfO4oahJzF9ZP79MwPf7ZTgSj6wDkQbwBBm6%2BFZRHjAqPGwOnNCvLOdN17sUTV5CbSflfQu4YwkdEsSWVQ27yRWT7x5R%2BlFNpZ%2FqvtytdWpPBYbFnjo6KEO1Z6rHA8MSMhNPc8m%2Fuf50sbDHh%2Fbrw5WkRRgWzSe3QKTW1ijn%2BIQ7oggBp7&X-Amz-Signature=0c29e24890ea49cb0763cb82f7d2070fa48aa4297d933c60b28b8c6732477800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654J6LSVM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfL1vyuhK3IPuw68mVp4KUmTWm3OPnYBs8SFfnyW1A2QIgS5ZHhD0Jy%2FhLiiFnO1IUnA%2FFlAVt8T8m%2B%2FJXRZb%2F31gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJen89HC0dy%2BnfOhCrcA7sfYNj0Dj0ntW0wTJYNs0zQW8uhYzpBEspgvgfGM%2F%2Bk0p4OgVGctOMl%2BMiHikjLkwVqcePltHQ9PqzbZ2BOGR9EwzxydeGj0TiYs1P7RXPD6UXJEK5HoXyA6AvYsPNmZ0P4jBYqvHer9pQHclk7usbByY72d30%2B9WeV0NHU3TftogVVArFPN057A9Bwis%2FPwl72rfJRUkV%2F2vl3vWDjWml%2B0%2BGlx%2BZcaP0XvIBfhcsYO1U8HbV%2Fk8Hhpve3tlexuVL3j3Op%2F4Bub9MFk6IcKb%2FMJnuV9wSyi2yQtJkYgw80RnYi6xYJ26v64ubesit5nXgKp9QNWNrhXoCMfB3WZxZqB0GTI5WerIXYnWJh0JOORLyt8XqgTfYWRBdJwQkAX6DuW%2BUMp5o74THATQIZCycBRuXyWn8oQ2qzWlPDDzEPvKePcIhT%2FayofdHg1llFjdrxgkptd6LwYPh7FdJX1JSW9ixnfrO2T8JrHMNfnVAswJv64g1ljxuzzzxAImFcyn0Va10anGP25jpTyTLTug6Fh0ty%2FwZ%2Bo3c2TbHli85RrlYR1LOFKoYhbM6d66339rCLTT1ipygyH6NB6Q2Tp3u3y%2FpSR%2FT57Wk9C0doAj4ckFJ%2FqCVFvppItrG4MICWpMIGOqUB39n2mhYyOep37TsOvbbKotQ2x50u9CXZqXb1CfAkz1cfO4oahJzF9ZP79MwPf7ZTgSj6wDkQbwBBm6%2BFZRHjAqPGwOnNCvLOdN17sUTV5CbSflfQu4YwkdEsSWVQ27yRWT7x5R%2BlFNpZ%2FqvtytdWpPBYbFnjo6KEO1Z6rHA8MSMhNPc8m%2Fuf50sbDHh%2Fbrw5WkRRgWzSe3QKTW1ijn%2BIQ7oggBp7&X-Amz-Signature=4fd86130e9317b80707a55f07a719d6cb45c2c90c1f011aa3bd7c81b7729e0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVXRRGC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZ67DlKwWdbfv4PRQCtQh6xowhuq6bb3MljygwCQ%2FaAiEAzN5xdUh%2FHpN9BMo1Y%2BY5OsmRs%2F6EaWzHYUmGR2rDwPEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQqk9fybhkkblbEvircA0ytW7pcDr1dlH25mNMJVrQqegbqRxnVmRv2DDBKpPThKrBIBfJKmSvPzlYiE0vkZbzb3qW2Twm7pNEDUkppL3n3L2QVGLlL9cSEvWps7OCzoRXkoFJGG2V%2ByZSpQ7G%2FketxcwyQskXepRCon%2Fhmz%2BKYs1I3TpDYQ9zl4uCWlvaFZKA%2Fpysj2TdPw4DgzMRv3UJkPelSmQ%2FNGMWt3t1fY3XMgOTlYQtYc5agQkdgl9SukdYcy8GtH%2FJ%2FLC6Tk9tqjaQptsWvvLmYqBtHedLaY8i5vmH8cogH83qAf%2F1YI%2F3gJmc9EDavnDD3IMSDeG2lqaYT3RX4Sefl8tHdHRQTi6swux2rrg%2FGVj%2BqhzogReDGqp%2FTGxolVEk3BC%2F7onKk5shZctUxNQJUHJWcsRq9hJRpVSa5zRHi2BTtk%2BAY1b1eiGQC%2BpdfNSC6gF8wVzGZ%2FzhLsmH%2Bxr3wU78%2FoJLdlpFF6HAY83wcXb7dVEa2UX0bOGZOMGjmsdQxB%2FZ0Sd2kokXeyohg7KGdxswr6oT86%2F9S85OF7BQa0cTiyb2k02OnXOdDztUuPeli%2FfJ90zabkKRJE6f%2BW7fc6uipCYWKshcW28OaGAu%2F3tU23AWiPyvjAYh1kMbjIN0oC6mqMMiWpMIGOqUBuBroEKlRmUi035Tp%2BTtjDPqvk2V3fOcujEzClT4CydPtdjZiDeUFfWUUMpH0qgs0guWOuBah1G9aWl40BvME1nguy8LGcg3RB3obgixg7xwPwD4pG%2Flxb9urA8T15nUcdK4PLW8c7u74fgk7jUB3l0dZZkjM7ZAwduXKMw%2BAxZLk%2BjVKCVi6IKgg2yLXMzBA2Ova2u26TGTLJrGUIIpUkvuRrPlV&X-Amz-Signature=623847dfd1288f675edfc4f3cf19dad4e863eb425dbc822b3dffe97681d85be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSRFD63%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVnnfQXyTWN8qzR%2BFW3fW9BLYI6m7Ijf7mm1DKEyvxjAIgZgYtVF5XMr5jvk4lhxJXJVi8vSr54FMDu5vIUVo9PlcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPb1i1ky5vBrNhyn0ircA9eoBZy15ujZ9IazS8uhi1If5XAgbxeJYXQYuOapzZ%2FIvkU3Qz%2BEE91ez9c6MMoJMnYGVgLGTJ3Dgzo97zuiPvHtta2iFAkzjxQvd0FAPxEVVgRxxubz217%2BwG0TyAThx4eYB2GkMFou%2Fn8UJSQ%2FOivjuP1t%2FwVb89j7hl0VAkbvFbyJRX%2BkJKMY7tU2pfTLBpXSUImzXnLgm0DYBEIBMQZh1%2FZKw6dyoyTUD8DS54UXLvajo4p2SRMYbTF5%2BPPobamx9iYE1Lt9Bi9WhFiQNME8ReelZi9QTJZe8MT98RY5BWOCCuRBbLmaGYWAfwer2Jbd1oZyBPQ3gpLHLCQ5bmj2fBBlRqHXgyHlBE4UGURkxkSJS8SwTdkHa3N8nuMJY7onawld0DPD%2Fw5D%2B9kB4whbx5FRzCLxPdxb42k%2F2H8W%2BOsr%2BNivmhXm%2ByeS%2BPJN4eEDfRiPCDpmdWMJVByRAIbRq%2FfxqIDoxkNBz2G97x2ZAOPJ6bv4FwsipF%2BnKmOcdkGVyQkvtJrDgfrNDuqpL643UskD8h3xJNBhSjZZpElVGgWnd%2BP5mgR9RekREintVhUZn%2FXCeVcRFhch1AJphrNAs8po3sgIpr3zERG2c5JC%2FTy62yrdVmQAl7xHMK6WpMIGOqUBIoIt1kjUD%2BidMWkRyFNLyDqeNc3LSwzaXfwl73nKvtBqHxLGO16SBX3Kq3f4Cpla2Ms69rM0Mfm8tjj1wsjDRmUvL1JsOSW8XGd3%2FKLQ4iqeMRSFIOBCc%2BBitw3RddGByjDT4WNDg5tS1DhPK15rfnH8fDvJQ%2F3WPYKylaBjQyrVVYJu4laPu0I3ZkTiTwMqtWuJZEvR9%2B1lP6ek4q8iofLHlyMK&X-Amz-Signature=5e6871c02a874df1aa78212f1d8c0f7e994a429de4f0ed963f9fffdc523cc5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654J6LSVM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfL1vyuhK3IPuw68mVp4KUmTWm3OPnYBs8SFfnyW1A2QIgS5ZHhD0Jy%2FhLiiFnO1IUnA%2FFlAVt8T8m%2B%2FJXRZb%2F31gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJen89HC0dy%2BnfOhCrcA7sfYNj0Dj0ntW0wTJYNs0zQW8uhYzpBEspgvgfGM%2F%2Bk0p4OgVGctOMl%2BMiHikjLkwVqcePltHQ9PqzbZ2BOGR9EwzxydeGj0TiYs1P7RXPD6UXJEK5HoXyA6AvYsPNmZ0P4jBYqvHer9pQHclk7usbByY72d30%2B9WeV0NHU3TftogVVArFPN057A9Bwis%2FPwl72rfJRUkV%2F2vl3vWDjWml%2B0%2BGlx%2BZcaP0XvIBfhcsYO1U8HbV%2Fk8Hhpve3tlexuVL3j3Op%2F4Bub9MFk6IcKb%2FMJnuV9wSyi2yQtJkYgw80RnYi6xYJ26v64ubesit5nXgKp9QNWNrhXoCMfB3WZxZqB0GTI5WerIXYnWJh0JOORLyt8XqgTfYWRBdJwQkAX6DuW%2BUMp5o74THATQIZCycBRuXyWn8oQ2qzWlPDDzEPvKePcIhT%2FayofdHg1llFjdrxgkptd6LwYPh7FdJX1JSW9ixnfrO2T8JrHMNfnVAswJv64g1ljxuzzzxAImFcyn0Va10anGP25jpTyTLTug6Fh0ty%2FwZ%2Bo3c2TbHli85RrlYR1LOFKoYhbM6d66339rCLTT1ipygyH6NB6Q2Tp3u3y%2FpSR%2FT57Wk9C0doAj4ckFJ%2FqCVFvppItrG4MICWpMIGOqUB39n2mhYyOep37TsOvbbKotQ2x50u9CXZqXb1CfAkz1cfO4oahJzF9ZP79MwPf7ZTgSj6wDkQbwBBm6%2BFZRHjAqPGwOnNCvLOdN17sUTV5CbSflfQu4YwkdEsSWVQ27yRWT7x5R%2BlFNpZ%2FqvtytdWpPBYbFnjo6KEO1Z6rHA8MSMhNPc8m%2Fuf50sbDHh%2Fbrw5WkRRgWzSe3QKTW1ijn%2BIQ7oggBp7&X-Amz-Signature=063e662b755d838ba6a4e976b561a9d8b7806b7d1f2f4ceb657e4a1bb0a50fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
