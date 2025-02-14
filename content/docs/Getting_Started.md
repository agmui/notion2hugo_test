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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTOAVO3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXpDnF5XJhPrA9OBukPtSZffD4o0A3jI3W%2B%2BGP84jnyAiEArAUKWzRBfKRY0O1zsS0jKYiQSN%2BewkPi68VIhkfi8Cgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHn75PTCcqhtoluucyrcA810qhSmCEGQy3cgcTcLh8Z2w3pVV3yuOrDlGBiwTl7lRrgWXWB%2FqxzI0dd0EbS1QwKtlJc0Mthe8HdXMfGmrhfXEVBRUGOSM3iaR7wqcuZw6KFnXMSYrz%2BpyMoPcPxvjOH6hrMTeTPeYKwRk8jzNp15T5yeqjY7XxLRTgrmIlBTlkPa6%2FJDfNQngAbXoCatShBBHeHcT1T5oHUrs08OL6MgjpHowkHweHvh3wN0b4N%2FSy0LVs6gMn03DzG9%2FOVOHpFaS7H%2BYuORtqs%2Ferso%2BULcwcR9%2Fw4q8Td1G9eyafUKCArI%2FvZT2Gi%2FKeo%2FB67FKptZEgZgqAl5DPYVsF1DXlzjWiar5y5f2is24iLl4SeSX82hY1JCUEZoH6Yk3VGdyGZVpcjC4ZtmsTiCmo0f9P3cNnGCHo%2BPnLHOMSVDJ5mfSklApExax6auHxStjXW897xMHKLVCA0QmRdCPu0OL03kj6HUSdbC0Gwj43ohjF5oi%2FpzDVVUiIHAugIBC2XrgNjhqyx509DKDxi9WJCHfyvTQbWrn4penvYzXgaW8RlGzKkkuJNPY1hc8PSRFSMfpsVLXQ3vy3mJFS0YJr5mFxbMNv37XJ1YZEdcxbkY14LtrJxkNxF30obag%2FXTMNvBu70GOqUBqkPXhz8D3kIFw9s3gTJYHiHasAADJP3SXCDhyvvGBE0pFqoWdEmHJtTYwtkoVAqMvdQrnrCKk9J6WWL8vSw359k0fO4jSrf8fpZOpE%2Fwj7EJ1aV7OMjNnVxjfsjBzwGyxaEFf8acgBLVMcqUYfw6vnR7dVjE83VEJvSXDbzlRFwj%2Bb284DnZ8oVmligaKbA1KZMKi9tHjFc1emFm3DuqdgeoMVEj&X-Amz-Signature=1450ae70fbb55bf74f9273b4f82c09e541debab4e06528f170facac6d65eb880&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTOAVO3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXpDnF5XJhPrA9OBukPtSZffD4o0A3jI3W%2B%2BGP84jnyAiEArAUKWzRBfKRY0O1zsS0jKYiQSN%2BewkPi68VIhkfi8Cgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHn75PTCcqhtoluucyrcA810qhSmCEGQy3cgcTcLh8Z2w3pVV3yuOrDlGBiwTl7lRrgWXWB%2FqxzI0dd0EbS1QwKtlJc0Mthe8HdXMfGmrhfXEVBRUGOSM3iaR7wqcuZw6KFnXMSYrz%2BpyMoPcPxvjOH6hrMTeTPeYKwRk8jzNp15T5yeqjY7XxLRTgrmIlBTlkPa6%2FJDfNQngAbXoCatShBBHeHcT1T5oHUrs08OL6MgjpHowkHweHvh3wN0b4N%2FSy0LVs6gMn03DzG9%2FOVOHpFaS7H%2BYuORtqs%2Ferso%2BULcwcR9%2Fw4q8Td1G9eyafUKCArI%2FvZT2Gi%2FKeo%2FB67FKptZEgZgqAl5DPYVsF1DXlzjWiar5y5f2is24iLl4SeSX82hY1JCUEZoH6Yk3VGdyGZVpcjC4ZtmsTiCmo0f9P3cNnGCHo%2BPnLHOMSVDJ5mfSklApExax6auHxStjXW897xMHKLVCA0QmRdCPu0OL03kj6HUSdbC0Gwj43ohjF5oi%2FpzDVVUiIHAugIBC2XrgNjhqyx509DKDxi9WJCHfyvTQbWrn4penvYzXgaW8RlGzKkkuJNPY1hc8PSRFSMfpsVLXQ3vy3mJFS0YJr5mFxbMNv37XJ1YZEdcxbkY14LtrJxkNxF30obag%2FXTMNvBu70GOqUBqkPXhz8D3kIFw9s3gTJYHiHasAADJP3SXCDhyvvGBE0pFqoWdEmHJtTYwtkoVAqMvdQrnrCKk9J6WWL8vSw359k0fO4jSrf8fpZOpE%2Fwj7EJ1aV7OMjNnVxjfsjBzwGyxaEFf8acgBLVMcqUYfw6vnR7dVjE83VEJvSXDbzlRFwj%2Bb284DnZ8oVmligaKbA1KZMKi9tHjFc1emFm3DuqdgeoMVEj&X-Amz-Signature=d2c8cc697bd632917e397bd7b2f9bc3159077126702fcdfd6eee42ed34d15db0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBG2DQP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBus%2BKlIXzyuF51I9YBho3uAHnQrW%2BGpRDl5m7%2BR7xrYAiBUwe%2FQJD3ngfo4fyQT5JumaBAEZShlrRNMUYIb8xzYsSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMNCLNgm%2FnUGoBZ%2BrlKtwDFppsy9CxLZN2s0hChPlAzqOZvqiWiMBcmmHsICOt4qpoRO%2FTfGL27LkZS0E5X7DNvlsrrXl8dC1gYBGBwPV2YJywPSCJS0P8HKr7%2Fm%2FzsUCqBGeCbs10IsKul1nKJiZjqfubohpGE%2FSVHRoe1RJquSMr7fIuouV0aPpme2OP2aumzZ8NOVQifvPVw3Ayi48PeAHDC8EKjXHCQCLX9FMZ62lOGpfCdeSE9jO0%2FaMUQP1L9bwPygRyQy%2F52IgP6Qi4tOwpHwi%2BM06UFz5ddK6nnG7O%2BSN3SKNT%2Fq6tONckuelt59H6awa51cU4b4r1m5hmX8qlyGxoO0qV%2BUd7TG%2BMKJk1xFgcAF04udsos%2Fh0MGoXI9QRbfFZMqSKFae9Rdin0T2R9n25yTIUbiVr9ubJLrIO8gbnm2whuKnGHqN4m0XBkeGxkSf9BRBaAzrHfn03nXkAUSYrAW9b%2FLO7UXLvM4k8R4EHeBDeYvvz2MSp7r3xctE5%2BumnF%2BEdYtjx4GU5HM3VoZ1NeAlxcvhkZTkIdUJgismz%2Bi6xr1%2FazuTw8UNigmn15v7%2FBKuR1cZozE5ShU0vxUWKj8445gPsVIIFGo0YTQzwX5pPk48RyJ6ceuYUfSTXggTylQNQHqww3MG7vQY6pgGgqhni2wLCZXz9h2u6%2Be9zQm8hQTPf2E7vsjk2%2FYLWM1ch4pestF0JtuzigQPJrrwMY%2FnZlk%2FcBRNf%2FkT70KkyjU8ibXqoToFhweJwrTeNFMglUs6IFk%2F4%2FgiK66jOqDOMJPt4H7E787rR8amAUdXDF83i3pmZuxd5MzOHYYa3zGpS4%2F3eAxccM0nw4lqiuO5HO6gDDSROcU6hFQk6BvFclCi7Ruq9&X-Amz-Signature=668de9ca0cdccdc132b34e360199619c88f984a937e92e786659e8cee6f5f0db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEV7CZT3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6iMpUHolsb8x%2BJJwEqR9H8SK1Hn9j%2BC3W7rH4YyF5hAiAtquz3WEAAHMDk7aMjctzfoNkpJodb5RbsbP9WHlkjICr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMa8A5pnfdFUMkq2SGKtwDL4tTE697uRrxtEAyFzvJvXC5pYCfMvq%2Bg%2Ff7dRqZGTz015RYasQwqvxFYLESM4hhqdWzmdK2kYtppCwJ4TxtkjNYONtcw6%2F%2BY7SHhGLNN4Bur4AV0A098PCbjkr%2BiK6Jh%2B49fEV8w%2BpZgmc19OFL6Lxaf4c1MQcWSA5R6VC1Nor8Sn6nGeSu5qM5l105NdQk%2FJsJHgQ83SWlneXufOJL2jAsXC84cV7eRzlxXpN7JtdFPAH8ZqQsPTI%2FdjgckSMrvBykRSRUcnkCVpiVjhDDtHLNSsqTG9mpMqrOJaFPSkhh6wnBnO%2FwozbkEWjm4RXWHjNf1mhmu4yChMtogx30Ggx0UPHTegMglHmggE9MXUG%2FShEkqgzLmS5%2Fg%2FHYIWopx6nesaiQYhDsvEyy0OQFF4oElyWoPwz8nW07tVzd%2FdXXtQ2k3BmyyHyuUsAqbG2CgsCSGMe9XrQ8qt1UlJm%2Fgq3gZ2XDvUYLJtQ1rg9J1RCN2hJChP1RHWHTzWdhiru%2FiTtcHUl4DNnP1pxVl9pZERbkn8vxL3q0egWvNqUjU0baDbVecXTq1c%2F7TJTY9H%2BqqDS5c43mvElMVAlbRRNWMRRgE2h8dbAUkB5Gl4rWBSU1z%2FG1CY5U725jMycwo8G7vQY6pgG9ZfFE%2BK45a%2BZ%2BdocuxBADLY%2BLeQPsWSsDzDAIDaKDrC%2Bz5f6hyNH0H9veQMPdwpYXlwjDu9L5JzoWP%2FdT%2FoZiw7RV%2BKFOGUpHHB7peDuTmwWHNaSBkmkCzj%2Beei5rtuUbYdm1QkOQyT0VqStip3YgnqrvPRrkqJlnHVs8NIovt1rCYmQ0FrQRzgfR55mqkFdTTIAI0ACwVA9rUB%2B5M3Gb4HdC2PrR&X-Amz-Signature=9de0026ed9e4763a6fb58e5f11f1f9b295a0c7f468f0eb25eefb85e04f47d398&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDTOAVO3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXpDnF5XJhPrA9OBukPtSZffD4o0A3jI3W%2B%2BGP84jnyAiEArAUKWzRBfKRY0O1zsS0jKYiQSN%2BewkPi68VIhkfi8Cgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHn75PTCcqhtoluucyrcA810qhSmCEGQy3cgcTcLh8Z2w3pVV3yuOrDlGBiwTl7lRrgWXWB%2FqxzI0dd0EbS1QwKtlJc0Mthe8HdXMfGmrhfXEVBRUGOSM3iaR7wqcuZw6KFnXMSYrz%2BpyMoPcPxvjOH6hrMTeTPeYKwRk8jzNp15T5yeqjY7XxLRTgrmIlBTlkPa6%2FJDfNQngAbXoCatShBBHeHcT1T5oHUrs08OL6MgjpHowkHweHvh3wN0b4N%2FSy0LVs6gMn03DzG9%2FOVOHpFaS7H%2BYuORtqs%2Ferso%2BULcwcR9%2Fw4q8Td1G9eyafUKCArI%2FvZT2Gi%2FKeo%2FB67FKptZEgZgqAl5DPYVsF1DXlzjWiar5y5f2is24iLl4SeSX82hY1JCUEZoH6Yk3VGdyGZVpcjC4ZtmsTiCmo0f9P3cNnGCHo%2BPnLHOMSVDJ5mfSklApExax6auHxStjXW897xMHKLVCA0QmRdCPu0OL03kj6HUSdbC0Gwj43ohjF5oi%2FpzDVVUiIHAugIBC2XrgNjhqyx509DKDxi9WJCHfyvTQbWrn4penvYzXgaW8RlGzKkkuJNPY1hc8PSRFSMfpsVLXQ3vy3mJFS0YJr5mFxbMNv37XJ1YZEdcxbkY14LtrJxkNxF30obag%2FXTMNvBu70GOqUBqkPXhz8D3kIFw9s3gTJYHiHasAADJP3SXCDhyvvGBE0pFqoWdEmHJtTYwtkoVAqMvdQrnrCKk9J6WWL8vSw359k0fO4jSrf8fpZOpE%2Fwj7EJ1aV7OMjNnVxjfsjBzwGyxaEFf8acgBLVMcqUYfw6vnR7dVjE83VEJvSXDbzlRFwj%2Bb284DnZ8oVmligaKbA1KZMKi9tHjFc1emFm3DuqdgeoMVEj&X-Amz-Signature=2b7e5337b47b7e5e032a08b5de041b08b87f22b37324a9323f9f64397789923a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
