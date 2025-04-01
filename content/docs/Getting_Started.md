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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3ON2TK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCd0D6t67wvDZ8ppu%2BoSPHwEP0b1Ku7dHhxF6BBacDhCAIgT6NqrFGyzPse1jHEMh2wQjBNhmWywEbuKyPVI7OtKQQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnt3PznZYtQ8Do4PCrcAxDjNCBjHwabij84VOLfMn4sMQGKf24ciM55h6LpdKZffqdDpBHYT7yIPaSr%2FkgEm0cIgkGk2jIGinfFgdM0mQ5hCSdohhLKYT20WVp52YGZ4iGsw7kJu7Ah%2BM7pYrwDpnFBc4lxCkOlXr9DR99%2BW5PXuQzd%2BIbqCdwa9tktruZ67BclTaPb%2B0cCO%2F%2FUoiUHsDdaH58iOQ6Gan51WLHBZfPNhhqfGHR3CdcxvIUTSFTvL9N1rS8IlaUkWdk6WXlU3g5kqnrz%2BgZmV%2FTCkm653hw4bdOcfn%2BU11ygm1%2BdtpIp05PGY5TT2ZR3Ca6YncNJT7vMytGRE0xowphqoEjJ%2FmAXRoElkeRgarkgQYx8duoZCkDlBS%2BkeSP9tZXAyC%2Btk6kmJJtb7bXmjePWJ5Cpg2Ox04UAQTKq6yFY9RpRMaCVGpwb9azRJiPrVHlAkRJcweuEkmwQUg6dwoFtHs%2BwsVjrRE%2BdXfEQsKgGBKnEALd0psenUTJBYfUNADvUp2UfPY3%2BEP1sy%2FdMRGuzdZVPunh1EVn8zXnZoO7DYXJeyRNLY9cywjrX9qe0ggQ1Z5m7oYl7SwF2zqZRh0It%2FFdmAV07pAzj3wklrhjdPLPUiQyLpselsVfsXbnmB0t2MM%2Blrb8GOqUBi9EwYX8PJ3GjHTkNCgTQU%2F1PV91yu3bitzqzPzeGuHKAJ81x9pVJtbQmyTwLiPVhoLyeVAjx0HNc5O%2BzQr%2BTvSUwe%2BHVGcV51Vu6lwrakjbgrFxPLQm89nMtPefqokVgK2kFddOI1aGuFeW9FsLqoc7WY%2FW3%2B3S3UxF%2B9otLIZ1B1pItFtxscwWk16f8Qo325QwLZakQuD%2FABC3%2BnoCqDKQiDWGH&X-Amz-Signature=e904561f3609491da44e293fa703363cc9c0421a673116d208bbb680b1a75d26&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3ON2TK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCd0D6t67wvDZ8ppu%2BoSPHwEP0b1Ku7dHhxF6BBacDhCAIgT6NqrFGyzPse1jHEMh2wQjBNhmWywEbuKyPVI7OtKQQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnt3PznZYtQ8Do4PCrcAxDjNCBjHwabij84VOLfMn4sMQGKf24ciM55h6LpdKZffqdDpBHYT7yIPaSr%2FkgEm0cIgkGk2jIGinfFgdM0mQ5hCSdohhLKYT20WVp52YGZ4iGsw7kJu7Ah%2BM7pYrwDpnFBc4lxCkOlXr9DR99%2BW5PXuQzd%2BIbqCdwa9tktruZ67BclTaPb%2B0cCO%2F%2FUoiUHsDdaH58iOQ6Gan51WLHBZfPNhhqfGHR3CdcxvIUTSFTvL9N1rS8IlaUkWdk6WXlU3g5kqnrz%2BgZmV%2FTCkm653hw4bdOcfn%2BU11ygm1%2BdtpIp05PGY5TT2ZR3Ca6YncNJT7vMytGRE0xowphqoEjJ%2FmAXRoElkeRgarkgQYx8duoZCkDlBS%2BkeSP9tZXAyC%2Btk6kmJJtb7bXmjePWJ5Cpg2Ox04UAQTKq6yFY9RpRMaCVGpwb9azRJiPrVHlAkRJcweuEkmwQUg6dwoFtHs%2BwsVjrRE%2BdXfEQsKgGBKnEALd0psenUTJBYfUNADvUp2UfPY3%2BEP1sy%2FdMRGuzdZVPunh1EVn8zXnZoO7DYXJeyRNLY9cywjrX9qe0ggQ1Z5m7oYl7SwF2zqZRh0It%2FFdmAV07pAzj3wklrhjdPLPUiQyLpselsVfsXbnmB0t2MM%2Blrb8GOqUBi9EwYX8PJ3GjHTkNCgTQU%2F1PV91yu3bitzqzPzeGuHKAJ81x9pVJtbQmyTwLiPVhoLyeVAjx0HNc5O%2BzQr%2BTvSUwe%2BHVGcV51Vu6lwrakjbgrFxPLQm89nMtPefqokVgK2kFddOI1aGuFeW9FsLqoc7WY%2FW3%2B3S3UxF%2B9otLIZ1B1pItFtxscwWk16f8Qo325QwLZakQuD%2FABC3%2BnoCqDKQiDWGH&X-Amz-Signature=33011e39dc014eb65aac4a2c6ac801ab401274462cd24f1ccf12857a66aa4a73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SVGH7T%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCb7IJ6nZ%2BZDuSULMJ8%2BJQVAN2nMzURyWB4FW7a3b6EHgIgCzbpoJKiHlrULkT%2F9oEpxtuxMcI5VObVRSW1i8W%2F5x4qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNoj5f7wPf%2BNsOWFSrcA8JGhJE9gq%2B7NtM29e1uVb54BJlFHB1Bdnkj2xgV5qLfKNtkMMlA%2BioGDUnWv02mWIJJmCYieYL4eY%2Fh3YJ4fB%2B24H3KDDplKdGlH7SqiJOv9ZZq8SoDNq8G7CMTsE2B8FqbDmne3iSj0mwHnnNvUd%2BPz7rCFHT4klZGhF3Y0Nop1xsnL9lwOxuRGkc%2BzhkQvfbbjX%2FAD%2FfITmPnvdbu1yPoWlPMY0MJeYg%2BXsMuSPF6M%2BlCnk4NV9NXnaNXt0BOA78IL9k5Ab9jxBo2rSqfzXHeYfjK5B19ankNMEaukzgGdK%2BKR6Ht%2FuEOqwQxqbRnF7dknSq9vu6fJwr3thYKQ5FGM1S0nTDHpbeuEN8SXJdKUxwPfpoAsSMPRhM4PA6HHToIQA661HLl2j8OnRkOj4XEGIXCGNDTrgh%2FcIF%2FU9Q66QxNWEt7%2BGMMJwZ1sZbQsq%2FglQgWMWqiNDMbEaYPgpSeXa3n6SXgo5b5RLE1%2BzSq%2Fs8WkBZE5nSRGB6RXEQLv%2Bny%2BsUW1%2FkjhvBwHaoYwrhZMvDhLPVtZpHnp6t9oYEXPfVHInlfi2thGDdp%2BL%2Bd8YogQJCbYXt%2Bb8uvrrdXxAd1G%2FbqJ4bznQVCRA4oHa%2B8MZq0%2Bri%2F3%2Fkr6eDRMMOkrb8GOqUBAyS%2FtanBKOX0megcbwkaFaOiMEavOP7Wo%2F5JMObTEaWtnN2LrbzGuKaBKtMNe6Duo33gVkuLFZPEu%2BNg4p29Lb7u5RwNOS609Zn8ksUQ8XEUFROfP%2F96LP532PXzaTpBNgQ8U%2BnPFjMXTZMa6LdT51SCbDZDzzjSQATv1nuB5xIQ70iKSFpJW0eS4IWnVksIQrsvMeswrREaK7T8D13WGJkY8iqZ&X-Amz-Signature=b442001b5b58fcc1970a8fc3eb7188d97ec1c5f7dc9428400f964621de99babe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ63DBKE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCICDUyAPDG5GI0R2v%2BiYCOi5vgxzG%2BI%2B%2F6G%2BZQZzdIX0AAiAApGofSmaFmDJCQ1VPwETFLccO5fBsXlk%2BN9n9FhD6RyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMffvn4krWtCWXRZwXKtwDTxrYMfWqO2gr4lWf7qg3%2FgXHPfDjd73MuNaXrTwtXnmsVBTKmNsKLT3OOwdUE5ok0ErThh8Ur4CrgZK06ngpbDDIWj4B7i5rWl5Z8WfBuSCnM1eU63PHqBGv6P%2FTJnWaH0lHMh9JOkqGBPmbgd%2BAZDeCHKtZcpz9GEKv3mTxbOZt1MMWC%2BulMebsp7eAx5e%2FtRqCeYVZpT%2BDpZ9CMY1XDXPDlf9hDF5Jr0Ejat34JZzgswQP9aLPMfwjbHXwSf9hQTX96dqpCnQJdhBj5FuR0fb8nI0%2BtD2z%2BD0E1yhIKzHgsd7K7n3ly%2BKNivGj2IQDDrTxeQATy5xoGJPV4KnKVwHr6h5HiYrOMGYyjInJ05cWqu4efDyjrABqjE8hnYku5TegGkF4u%2F1j0K0g6POnf4UcXTP7YnuyeiCC3RN56y4zb2D6%2F%2BsMCqNXgvV%2B7im1PAqnA1wlQWaVaNSVjUvQGFijoNQPJgVDhGQ2XFI%2FBwmAVOPndBCk%2BxTWHiqXV3j3QwckxyW%2FmqfkMbq3VFfmfW5%2BJxjR9kplaIsbvbYJfrXLe%2F7nfYkeWEjcDhqCeph2VeDETV%2BZ%2FtgB2i4xdlYbhu0gMIFmgK9PSB56P49liVjUfBThHdFMTiyZWsow7aStvwY6pgGbSVFvpTtaUs62mTs%2BDH4jDsmRUfLfiKjGdFkCIsZ6NG6WbuXVsouYZWeGwheyqj1SKpm1mo%2BrcMSQoNvRe3Q6ifq8l7vFMF1CdSywzStOQGTDXzgG3vSRi75w0XkrMP5qS8AULhSUxCGQWIEm4IF4P%2B9cpRxLNGCxjlw%2B9v8u3XqE%2F%2BvBDNh94AMdi%2BRoW2uRPsMk6ZC9%2Fw42uoRuWrR3nPTIsxZx&X-Amz-Signature=f2095fc60dd95a639c5a6fbbbdc3d3ab200e5729454e2e0fd25d0d7b9af1c090&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3ON2TK%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCd0D6t67wvDZ8ppu%2BoSPHwEP0b1Ku7dHhxF6BBacDhCAIgT6NqrFGyzPse1jHEMh2wQjBNhmWywEbuKyPVI7OtKQQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnt3PznZYtQ8Do4PCrcAxDjNCBjHwabij84VOLfMn4sMQGKf24ciM55h6LpdKZffqdDpBHYT7yIPaSr%2FkgEm0cIgkGk2jIGinfFgdM0mQ5hCSdohhLKYT20WVp52YGZ4iGsw7kJu7Ah%2BM7pYrwDpnFBc4lxCkOlXr9DR99%2BW5PXuQzd%2BIbqCdwa9tktruZ67BclTaPb%2B0cCO%2F%2FUoiUHsDdaH58iOQ6Gan51WLHBZfPNhhqfGHR3CdcxvIUTSFTvL9N1rS8IlaUkWdk6WXlU3g5kqnrz%2BgZmV%2FTCkm653hw4bdOcfn%2BU11ygm1%2BdtpIp05PGY5TT2ZR3Ca6YncNJT7vMytGRE0xowphqoEjJ%2FmAXRoElkeRgarkgQYx8duoZCkDlBS%2BkeSP9tZXAyC%2Btk6kmJJtb7bXmjePWJ5Cpg2Ox04UAQTKq6yFY9RpRMaCVGpwb9azRJiPrVHlAkRJcweuEkmwQUg6dwoFtHs%2BwsVjrRE%2BdXfEQsKgGBKnEALd0psenUTJBYfUNADvUp2UfPY3%2BEP1sy%2FdMRGuzdZVPunh1EVn8zXnZoO7DYXJeyRNLY9cywjrX9qe0ggQ1Z5m7oYl7SwF2zqZRh0It%2FFdmAV07pAzj3wklrhjdPLPUiQyLpselsVfsXbnmB0t2MM%2Blrb8GOqUBi9EwYX8PJ3GjHTkNCgTQU%2F1PV91yu3bitzqzPzeGuHKAJ81x9pVJtbQmyTwLiPVhoLyeVAjx0HNc5O%2BzQr%2BTvSUwe%2BHVGcV51Vu6lwrakjbgrFxPLQm89nMtPefqokVgK2kFddOI1aGuFeW9FsLqoc7WY%2FW3%2B3S3UxF%2B9otLIZ1B1pItFtxscwWk16f8Qo325QwLZakQuD%2FABC3%2BnoCqDKQiDWGH&X-Amz-Signature=b5f57f9c16f4bbd30ed5781fcec0ba24b27479a371b9223ba5a2e1bbddef5849&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
