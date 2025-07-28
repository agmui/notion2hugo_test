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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LOC2T%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAxGasy0rFWtfrzUUHVSWq1p4a1u7%2BsgTPcnZDz0bwJsAiEApN5SGfD8PynQVHwAi%2BgfV9%2Fiw3Cnqi4SHccQOMBngQEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVZRFBgQE9%2FErFWICrcAwcsYBm2FM%2Bq2hiN3eUpp8kmR6SQuUvYup1xk4O2h1trnbTTL%2BI55JAcLC2zcKaTSSKBzOaTgnuuHXP0eYYU1KEtrU0RGGVMokfctS75HTkKP%2FQFzsWBqdMW9ByUGphqQokFREFpNHMQTbAv6NWQ95ueOUC%2BbwxfeeqNZ0qq92imAdeGQKM2wrjao%2FCYobWQ7Y9zo6q2OfG3bqQ2ZytrtAj1trdEf6aFXesi9eOrxghnABqoV%2BQnKtmhdzhwcv%2FSa%2FbTJ2m4WpQUOYM3Uf2hH3W9%2BHQS7QhbpX5mxVsFXziL4CB0MuZTdpXdircomJ9cWRPEqfKEh94xROTydi151YP3NoiFcpBBBk01jlpEvnToGAbO74F0rY1LHB88NmRoBl9cc8DBZiqQbqnm%2B0PC9EogIVw6nypS0MEt3eToL2%2BO19DeI%2FFqoHSw92vmR9gcGdAxN%2FUMUAbZIJaRiRNL%2BNc163MqZ6JK7ps%2BAvWildMCKTnAJT6JWdmWKnwHXaINOq63OrokiC2xlsS%2FUf91VI7qUX3jwEQTQfntvVq3t6eLp5x0a%2FZCd28PEhnwdeqIyM6IZ%2B5BcSUF010WB865eNbstAeOqCCQxJ%2FuSayknY0QGuEbKKYeOPcAQzDTMMK0ncQGOqUBVAskSjre0RknD4v4n%2BSFB8aeBD8lDnivz5mAuEiMHYUxpCFn6rlwVsDFSc%2B6w1LifKZsOsy5AC0BgBbPsOnuqG%2BMs%2Fv8WQjxRN3Pq0cPdAswxcb95M2Mi1UEg9qSo6%2FbNybH0uFoFkz8JRwRCXn5%2BDBIfshdFALzkSlqvJyPh5ltVr7clJNLTJzyyuzWlbpgyu2L1FJKRi7LUxXCb67%2BidvQvqk3&X-Amz-Signature=f3ca48b24fd48868fbef3cb8fc6594e2ef0848c34e4c3caa06997a80fb7306fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LOC2T%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAxGasy0rFWtfrzUUHVSWq1p4a1u7%2BsgTPcnZDz0bwJsAiEApN5SGfD8PynQVHwAi%2BgfV9%2Fiw3Cnqi4SHccQOMBngQEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVZRFBgQE9%2FErFWICrcAwcsYBm2FM%2Bq2hiN3eUpp8kmR6SQuUvYup1xk4O2h1trnbTTL%2BI55JAcLC2zcKaTSSKBzOaTgnuuHXP0eYYU1KEtrU0RGGVMokfctS75HTkKP%2FQFzsWBqdMW9ByUGphqQokFREFpNHMQTbAv6NWQ95ueOUC%2BbwxfeeqNZ0qq92imAdeGQKM2wrjao%2FCYobWQ7Y9zo6q2OfG3bqQ2ZytrtAj1trdEf6aFXesi9eOrxghnABqoV%2BQnKtmhdzhwcv%2FSa%2FbTJ2m4WpQUOYM3Uf2hH3W9%2BHQS7QhbpX5mxVsFXziL4CB0MuZTdpXdircomJ9cWRPEqfKEh94xROTydi151YP3NoiFcpBBBk01jlpEvnToGAbO74F0rY1LHB88NmRoBl9cc8DBZiqQbqnm%2B0PC9EogIVw6nypS0MEt3eToL2%2BO19DeI%2FFqoHSw92vmR9gcGdAxN%2FUMUAbZIJaRiRNL%2BNc163MqZ6JK7ps%2BAvWildMCKTnAJT6JWdmWKnwHXaINOq63OrokiC2xlsS%2FUf91VI7qUX3jwEQTQfntvVq3t6eLp5x0a%2FZCd28PEhnwdeqIyM6IZ%2B5BcSUF010WB865eNbstAeOqCCQxJ%2FuSayknY0QGuEbKKYeOPcAQzDTMMK0ncQGOqUBVAskSjre0RknD4v4n%2BSFB8aeBD8lDnivz5mAuEiMHYUxpCFn6rlwVsDFSc%2B6w1LifKZsOsy5AC0BgBbPsOnuqG%2BMs%2Fv8WQjxRN3Pq0cPdAswxcb95M2Mi1UEg9qSo6%2FbNybH0uFoFkz8JRwRCXn5%2BDBIfshdFALzkSlqvJyPh5ltVr7clJNLTJzyyuzWlbpgyu2L1FJKRi7LUxXCb67%2BidvQvqk3&X-Amz-Signature=e86063df246be6892aef6b1fe15e40a1919b2c26b296e2bd9d2283f820a14a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LOC2T%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAxGasy0rFWtfrzUUHVSWq1p4a1u7%2BsgTPcnZDz0bwJsAiEApN5SGfD8PynQVHwAi%2BgfV9%2Fiw3Cnqi4SHccQOMBngQEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVZRFBgQE9%2FErFWICrcAwcsYBm2FM%2Bq2hiN3eUpp8kmR6SQuUvYup1xk4O2h1trnbTTL%2BI55JAcLC2zcKaTSSKBzOaTgnuuHXP0eYYU1KEtrU0RGGVMokfctS75HTkKP%2FQFzsWBqdMW9ByUGphqQokFREFpNHMQTbAv6NWQ95ueOUC%2BbwxfeeqNZ0qq92imAdeGQKM2wrjao%2FCYobWQ7Y9zo6q2OfG3bqQ2ZytrtAj1trdEf6aFXesi9eOrxghnABqoV%2BQnKtmhdzhwcv%2FSa%2FbTJ2m4WpQUOYM3Uf2hH3W9%2BHQS7QhbpX5mxVsFXziL4CB0MuZTdpXdircomJ9cWRPEqfKEh94xROTydi151YP3NoiFcpBBBk01jlpEvnToGAbO74F0rY1LHB88NmRoBl9cc8DBZiqQbqnm%2B0PC9EogIVw6nypS0MEt3eToL2%2BO19DeI%2FFqoHSw92vmR9gcGdAxN%2FUMUAbZIJaRiRNL%2BNc163MqZ6JK7ps%2BAvWildMCKTnAJT6JWdmWKnwHXaINOq63OrokiC2xlsS%2FUf91VI7qUX3jwEQTQfntvVq3t6eLp5x0a%2FZCd28PEhnwdeqIyM6IZ%2B5BcSUF010WB865eNbstAeOqCCQxJ%2FuSayknY0QGuEbKKYeOPcAQzDTMMK0ncQGOqUBVAskSjre0RknD4v4n%2BSFB8aeBD8lDnivz5mAuEiMHYUxpCFn6rlwVsDFSc%2B6w1LifKZsOsy5AC0BgBbPsOnuqG%2BMs%2Fv8WQjxRN3Pq0cPdAswxcb95M2Mi1UEg9qSo6%2FbNybH0uFoFkz8JRwRCXn5%2BDBIfshdFALzkSlqvJyPh5ltVr7clJNLTJzyyuzWlbpgyu2L1FJKRi7LUxXCb67%2BidvQvqk3&X-Amz-Signature=6d5ed9ce900a48e0f069aabe5162e335d2818863edcf00ae74ba39caceb9b010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVZDTJXB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGPKpgFx4vlgnTrFHZUT0TdTMXmgMolXE0JT%2BEUWjd2hAiAVqm%2FSDVZx%2Bdll4obfWty6s08Xk%2Bt8cnlnIZJsneNnZyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiejSz3Q1xgjYN0o6KtwDoQvM%2BFdgmalKAcPIsfBYXv4vNKRaV3yHhgaSKKKJIl%2FWARuqRtEFGUNA5Fbv7L8mEzsgROEzWsVpjGxC2J9%2F5ypS3tgjllPz03PQYRo44jqDbD6ABTznwSvN420r8LO5y%2FETC7GtKlZbweEBryJrJqFDpP9t799%2F660kdPrSZmCuLI%2BIPnNheRod%2FSwnw3APE844%2FDQjUNPFHMs0BbWoT8gVqvKlHMSfXpRBonhI8Skc3X5ZhC4n0Un2BI7VXoab6yWsHKq4fL9s6qIVSSF0pNxs8gLiTNYjfAWTKH0PLzJH%2B5FaC%2F459mIEQGiS57t9lQPnGQjEAxLA%2B2WYPeCCa9T6aU5I%2FSOlfqn8bnlXnfWdQ4x6Uxxj5sS3gxUcIma67izHApKOl2P2gmAooliNq6yLupBe6q%2Fnnn8ckHB8I8YdJJ8UtFGiacNUoQrZTz%2BW%2BeNFCeweOMdfor7vTW5SrN%2BAz462zoCe57U%2BoAXL7jy4FDg0GHzeKKPn50LwsQXhLibHPdtDE1j2%2Fo3ddq4BT6gtdhbud3DyreJUO8zZ8I0pID00pLP7UETr40RZsdzCOSNHM%2BWK5jjOQmB5Dsv3ModDnToprdyfjmkeeA2F%2BWVzZaUbPd4cn3iKalYwhbSdxAY6pgErCcVIt2uHNoVj1MqeQdX11FRlPJmO5RUTHKXM8Xcf0JhWejC3%2FQ4dTOFh8qm6YiONg43XmcLzzbkSTmhRdl9VyOcunzphaHuL5qFbOzHGFWFh2XSEhkvPGtNNWiN8jft1oTPLUuWjpvrAf5qkWb4CoUzF5ERh9p67q7OMm1QEEHkhNErYv12mBNYdYQ9y40cHxUhXc4ffF1uSYtK45HTXogJju1gr&X-Amz-Signature=e3f8880395cb52e05b5a09522d97f61d661c18e3e37c85e7886ce51e283f7273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QQ5TUIL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCC0OB5IdrAKe%2BXn4oCJ%2Bl%2FL3w5ti49VV82dzS%2BBlv4bwIhAIt6MDmnKza1bSbLRBZZV1ruVq%2BloHRpketyzQhtRGs6KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKf%2FwTRyiNmUHoqJYq3AM%2FcH3a%2BewSfkpzIbALvfhx8p%2FA7ZLIHBT4ToDSsTvmbsoaOlGZZnYV7GHYfPc4ynIOlmifB%2FxzQ4zTcVHznS79fXRMHevo0xVTCuMU9GGQOftcVD%2BuMtqlloZ3raTImpHZ2WhzDToyaASxJzt6ncCh%2B5ZvXvfOwdbW9bQVkYWlbtB421WbcSLFQ8pOA3t7yifAUEUvW57EiTzU0hsb4LJSRKDFwChNwyYeXM8SeV%2BX4dE7wtptYytdjRFokJ8IsnpuR8ZnHZfW%2BoOuXeUMORjpA83HjG%2BpVdGCYrPcC6zdL3vHLcDumdhSmKO61BjGhgQxw%2B25B4uRfyRoYha25rHbpieMJosTvckqNy657venexWnvV1IiMhchk83MZceNY%2FaRzN7jxkKILS9Ik0QSvAdqiAt84f%2B3cuXwt1dRw0%2FP%2BiDL31xqG4%2FZWuEjPGGNNHHJVVVHf7g1gctERT%2BJZ6W6Lm57RCqr%2FcQkqrZhEkTub5hG%2B6qEdOT9gPUMTIV1YDS0IBiARF4u6zN4GbeKyTkDO5gwt8iDgvuFrOYqY8%2B5Qyw4rQZMPW1fnC0kENHcHukp%2FOaoUFFilDoL9OiUFjlPxp%2BUdaMnWDEMbcLndXJokRlx%2Fn3AZ0cORC4HzCFtJ3EBjqkAUoYsOqTU6l8Wylu1%2BNW6k3tWQcnXlArc1jCGtVMHkCnrt4gDO7MrwQF5wYFSHTwjYSAZtqrqB2nsB4P2OKsHJgOmQBCo23mq5vgtOBCwNNP1Mvh86wlbIo5TiMd0kSGqHChgcOIyZxbULDpMtYzBuhSVvk%2BNHk%2FDbq9LMwBu8FHGXoiGpl8JJlE88DHWByaTF0AXb9WEopx508i6Uj4rh59fcCP&X-Amz-Signature=925c36cc019b4248e1f5996535c071b6594203e1362f7f61565bb47abd6c9411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7LOC2T%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIAxGasy0rFWtfrzUUHVSWq1p4a1u7%2BsgTPcnZDz0bwJsAiEApN5SGfD8PynQVHwAi%2BgfV9%2Fiw3Cnqi4SHccQOMBngQEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVZRFBgQE9%2FErFWICrcAwcsYBm2FM%2Bq2hiN3eUpp8kmR6SQuUvYup1xk4O2h1trnbTTL%2BI55JAcLC2zcKaTSSKBzOaTgnuuHXP0eYYU1KEtrU0RGGVMokfctS75HTkKP%2FQFzsWBqdMW9ByUGphqQokFREFpNHMQTbAv6NWQ95ueOUC%2BbwxfeeqNZ0qq92imAdeGQKM2wrjao%2FCYobWQ7Y9zo6q2OfG3bqQ2ZytrtAj1trdEf6aFXesi9eOrxghnABqoV%2BQnKtmhdzhwcv%2FSa%2FbTJ2m4WpQUOYM3Uf2hH3W9%2BHQS7QhbpX5mxVsFXziL4CB0MuZTdpXdircomJ9cWRPEqfKEh94xROTydi151YP3NoiFcpBBBk01jlpEvnToGAbO74F0rY1LHB88NmRoBl9cc8DBZiqQbqnm%2B0PC9EogIVw6nypS0MEt3eToL2%2BO19DeI%2FFqoHSw92vmR9gcGdAxN%2FUMUAbZIJaRiRNL%2BNc163MqZ6JK7ps%2BAvWildMCKTnAJT6JWdmWKnwHXaINOq63OrokiC2xlsS%2FUf91VI7qUX3jwEQTQfntvVq3t6eLp5x0a%2FZCd28PEhnwdeqIyM6IZ%2B5BcSUF010WB865eNbstAeOqCCQxJ%2FuSayknY0QGuEbKKYeOPcAQzDTMMK0ncQGOqUBVAskSjre0RknD4v4n%2BSFB8aeBD8lDnivz5mAuEiMHYUxpCFn6rlwVsDFSc%2B6w1LifKZsOsy5AC0BgBbPsOnuqG%2BMs%2Fv8WQjxRN3Pq0cPdAswxcb95M2Mi1UEg9qSo6%2FbNybH0uFoFkz8JRwRCXn5%2BDBIfshdFALzkSlqvJyPh5ltVr7clJNLTJzyyuzWlbpgyu2L1FJKRi7LUxXCb67%2BidvQvqk3&X-Amz-Signature=e5c7f90002d6022ebbe709081b34930cc87386a445187d07adb654f639a266d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
