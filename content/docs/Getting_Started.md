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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPT3UZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Bw9kwgr6K5RMPEIW6529mkmwILMJHEAeXt1CX1SwxLAiAnEuCKYlVBJIrxp5o29OSqciMqhn8BvipGmgyTM%2F8P%2BSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2lsZFPKOPs%2BwWJPYKtwDLwMezIYfgE8T%2FinGMBCZfCAHnYyNHn5LNNYYwEkR9NtlOSPb5HFIrACux9h5pb28a47axKZbVWkaZ4GQqUD10NsMIHAesPDBUa0g2U1quGZr101EQ%2BED2wN5i1dBAbgtj1mIhQJYacOT4VomamUN56k1Apb1lheM1dYAW1HqRlqRkNtoP0g5mRweK8vDF%2BfOTyC2PHNvN3wy4KUXhYLKYZER6b1vzG23tysxiBWfrXrifzKqT6wfXwOTLERku0ItMGG7%2Feu5f3CzieBBWSt2xnD9GkiUJIPXobVGy0Z39s5F2PH9rh4fEtAIXtfDHd9AH5DeDTqbYzKOU69ZT5HtbwdLA%2B6DonY%2FxH18ISoo2i%2FH%2FfEHPw1Exeg6gj4GSyIrJ3sKAGaT2JksEVpFop6hVlhBSa0huZxyXBd4JBuzIeDqmUWtXAAsyJeiUdo9KgtQ4TOQwANHk5xQGKdJgKGtz0iHjrpqO5n%2FkJAgXDdxZBAm9sVEEfwwdKkzjuvD9AsLMVxbDkq%2FXzxcTp1xVRp4%2FukRN4YxhvJ9xZ5MjfrIXm0rONICTyqQX%2FHdcrr%2FJlls0kmQ8AFG9XQiGD6iTAr3VyUtENot9%2B%2Fwb473OeQA%2BqbyGTOrEZuaDl%2BDPA0w%2BO77xAY6pgFJl%2FmmJdiwKP49k4kEiY5zzvzPmFKeNfTWpNU%2B%2FoBuN3jlG%2BcoLYMaNbPKNtpWNg6X7Ilyzp1GUJY2zru2akP9aSBH%2BbjIeAORBeInq293P5NL9uNc4%2FC%2FOWpTx8HyIOn1MsZzV8LMGqenC62%2BhBwsUmyAYsbZtsnUG%2FaLYdOWP4H9h5FV6VUnRt3RAfBZAvCMeYOv2mMp3xnxgnYIsPGncKp%2FaEDu&X-Amz-Signature=2064516ae460121dddaa205c295c903745f2494964990bd2d13ab8e5d0293af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPT3UZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Bw9kwgr6K5RMPEIW6529mkmwILMJHEAeXt1CX1SwxLAiAnEuCKYlVBJIrxp5o29OSqciMqhn8BvipGmgyTM%2F8P%2BSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2lsZFPKOPs%2BwWJPYKtwDLwMezIYfgE8T%2FinGMBCZfCAHnYyNHn5LNNYYwEkR9NtlOSPb5HFIrACux9h5pb28a47axKZbVWkaZ4GQqUD10NsMIHAesPDBUa0g2U1quGZr101EQ%2BED2wN5i1dBAbgtj1mIhQJYacOT4VomamUN56k1Apb1lheM1dYAW1HqRlqRkNtoP0g5mRweK8vDF%2BfOTyC2PHNvN3wy4KUXhYLKYZER6b1vzG23tysxiBWfrXrifzKqT6wfXwOTLERku0ItMGG7%2Feu5f3CzieBBWSt2xnD9GkiUJIPXobVGy0Z39s5F2PH9rh4fEtAIXtfDHd9AH5DeDTqbYzKOU69ZT5HtbwdLA%2B6DonY%2FxH18ISoo2i%2FH%2FfEHPw1Exeg6gj4GSyIrJ3sKAGaT2JksEVpFop6hVlhBSa0huZxyXBd4JBuzIeDqmUWtXAAsyJeiUdo9KgtQ4TOQwANHk5xQGKdJgKGtz0iHjrpqO5n%2FkJAgXDdxZBAm9sVEEfwwdKkzjuvD9AsLMVxbDkq%2FXzxcTp1xVRp4%2FukRN4YxhvJ9xZ5MjfrIXm0rONICTyqQX%2FHdcrr%2FJlls0kmQ8AFG9XQiGD6iTAr3VyUtENot9%2B%2Fwb473OeQA%2BqbyGTOrEZuaDl%2BDPA0w%2BO77xAY6pgFJl%2FmmJdiwKP49k4kEiY5zzvzPmFKeNfTWpNU%2B%2FoBuN3jlG%2BcoLYMaNbPKNtpWNg6X7Ilyzp1GUJY2zru2akP9aSBH%2BbjIeAORBeInq293P5NL9uNc4%2FC%2FOWpTx8HyIOn1MsZzV8LMGqenC62%2BhBwsUmyAYsbZtsnUG%2FaLYdOWP4H9h5FV6VUnRt3RAfBZAvCMeYOv2mMp3xnxgnYIsPGncKp%2FaEDu&X-Amz-Signature=15a56f9cbe4dddaf240ca5ca2a0c46e9972124f96be0eb771f51b6e110dd00d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPT3UZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Bw9kwgr6K5RMPEIW6529mkmwILMJHEAeXt1CX1SwxLAiAnEuCKYlVBJIrxp5o29OSqciMqhn8BvipGmgyTM%2F8P%2BSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2lsZFPKOPs%2BwWJPYKtwDLwMezIYfgE8T%2FinGMBCZfCAHnYyNHn5LNNYYwEkR9NtlOSPb5HFIrACux9h5pb28a47axKZbVWkaZ4GQqUD10NsMIHAesPDBUa0g2U1quGZr101EQ%2BED2wN5i1dBAbgtj1mIhQJYacOT4VomamUN56k1Apb1lheM1dYAW1HqRlqRkNtoP0g5mRweK8vDF%2BfOTyC2PHNvN3wy4KUXhYLKYZER6b1vzG23tysxiBWfrXrifzKqT6wfXwOTLERku0ItMGG7%2Feu5f3CzieBBWSt2xnD9GkiUJIPXobVGy0Z39s5F2PH9rh4fEtAIXtfDHd9AH5DeDTqbYzKOU69ZT5HtbwdLA%2B6DonY%2FxH18ISoo2i%2FH%2FfEHPw1Exeg6gj4GSyIrJ3sKAGaT2JksEVpFop6hVlhBSa0huZxyXBd4JBuzIeDqmUWtXAAsyJeiUdo9KgtQ4TOQwANHk5xQGKdJgKGtz0iHjrpqO5n%2FkJAgXDdxZBAm9sVEEfwwdKkzjuvD9AsLMVxbDkq%2FXzxcTp1xVRp4%2FukRN4YxhvJ9xZ5MjfrIXm0rONICTyqQX%2FHdcrr%2FJlls0kmQ8AFG9XQiGD6iTAr3VyUtENot9%2B%2Fwb473OeQA%2BqbyGTOrEZuaDl%2BDPA0w%2BO77xAY6pgFJl%2FmmJdiwKP49k4kEiY5zzvzPmFKeNfTWpNU%2B%2FoBuN3jlG%2BcoLYMaNbPKNtpWNg6X7Ilyzp1GUJY2zru2akP9aSBH%2BbjIeAORBeInq293P5NL9uNc4%2FC%2FOWpTx8HyIOn1MsZzV8LMGqenC62%2BhBwsUmyAYsbZtsnUG%2FaLYdOWP4H9h5FV6VUnRt3RAfBZAvCMeYOv2mMp3xnxgnYIsPGncKp%2FaEDu&X-Amz-Signature=2f2dbb1c419c3316616f91d1bb52a5069555cea644ecbe4b113697f719c44e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6TJVBX7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGLXt7GSVGVWQMJ818eUyLZ3DxjWLfKwADDNYcUQadCMAiEA2doUZt3D%2Bfuhh8Q2tgspLiN0tg80aN%2FSER8rBjhFqpkq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKXb7E3sy0cxX8t7USrcA8AVtRcpQ0iTSg%2BZ2j30%2BBZwgU%2FAMCmSUTaWciRTyKXSPHNFHSlOdEaNXKK0chCXikc5%2FYSxZmLZqt45EQ5H2Jvryo83tz%2FH3rsZSAj3XujuLomJNVFqKVdlEiv8m7R%2Bj%2FHo6hnT9IYyGLsIimbFl%2B5cw57%2B%2BS89XELLBWMlUOF6DsOyOWEEaiWlLsvr3wP2t0oEAY0f11krNu0KzPXiktLlbNX8Pq%2FcKMz5nmtdT92E7G5PdYNp%2Fm6ZDHPEl7yjduOTHdf%2BAh61kjet0%2BZZsoQvPIVLuO6x1R9pRvG3hCqDYbH6h5t%2FL%2BCuWEvw7iiuLtlXBORNoFgEUgu7qvmSKQpmyoUvrxqe3Y3v%2Fq%2BI9TVyeY7TuOI5uJzORUQRm3aJp3vQjNZ0Z6ydWvM9Drs16%2FvNtXv48vv0hAn6OcLhRIDLh%2Fn1BtzbveQUsD9s8eWGqkbVDJKQEZ2NaU7Roqvxs6CDVFPrC1R3qCur9aFPk4G9kdH6KD%2Bmq%2FxoWZ28R4s4Lkh2rqp3HSU0oqOXlsEUhv5TykWz%2FbB2FvommkBOe3vTWDtJBEcUe6KlN6rwVroT7JLZk5pyb3WIh%2FteyiWG%2FcPWwMjMZ1uqs7s%2B7v3rBWlt7wv2jcHrLa3fYYiyMILv%2B8QGOqUBo8JflcbX6X1E29Vi5CMySizJmPX92b%2FaoGQ%2FiGBDW3AEBlMS7qPcKOH%2FB400Y22BcDtRSu5rJHH8DlbLncGnGbvnjZnxaEv7QYRZQHoh%2BxjPqTvHnS5VFz1A7islXG%2FCfeqDSr9MARAQJWCu2zVVjpLQVRfZ1nrtjmbqyHO1WBN8nGEZkJ2DZrbEHprha4jnv7Wa5I2P92%2B7w5Yju58sqfFX%2Fmfz&X-Amz-Signature=776e7a2e0f818b61794605b8bebf2fa4184e558079a7537fb7a462aa48eca065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CFE4F3R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBAHRDid67bJEKoLqJISYP22gA2MTkHjm0hbbflBTIspAiBvEbJYi9KUXC0LxhVoPApg%2FdgiaDrTlBYbGnOudxLtVir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIYpBYOc8b7olf3GqKtwDts2%2Brokjgi3W8zwZDn5ZdH3yeVuBt1SftF72rxWcpQFYI7KOArN%2BWhqsWQ%2ByWIAlyr4dQfKm6o%2FEUkwIzqDDivkqOa%2BtDIFSdIwLPcEHJ6eckCPQQ%2BLrAGJqAfghY1bz2eH4e9unJ4nDAfl8z%2B0Bp8azFwY2xzzkwqGYSeh4SEKHuVZSdZ%2FiU5kXywRQng6mPm6mnibkqzIIlyjLnqBp9JSqX%2BfbOGitaD01%2FNWo1LAZfaGWEwQrDnCFasHiXwV8WL4ATEYk%2FYfvSpk0lmj%2F2srdTnpHOV2yuVCLJ7Az9hjxm%2FEnH35epOA0BuRdG%2BRmL2O969o8DhVVi8RP%2F8Vm1f8U4BcVadUBnK6XjeLIdsS%2F6hc76GJihIkUlDLzwGbxiTxKHdcoTdfYhJ2A5Lrs%2BTd8CVLGCkUFHRsZj0sRDFqcbaE%2B%2BNT13ctW8FpiTorpVg6Yl%2Bo8Nqelu3Ij%2Fi0vwvfbC%2B2TqgKq%2B0xlK1jyUijo6nIracchUHTO%2FuhYYPk0%2BtobtYan%2BoZzbmEIIaTkZVYk%2ByzBbDwf6EMN2MBVt4otgM9OCUJhKwEZ1T6JnHq%2Fjyozy5IrsITx%2FXxusDCKBYMr3gf1mAv6t%2FvHf3QejGMjs1hr0E6ky4NSe6Ewke%2F7xAY6pgFtJgeuwhOF8oXaYjhLqrd6uIlO3C3I%2FStzZgO7%2FbMkCKhQBmkBcjV3pi2OWja%2FFwX55tiTkHLh6svy2Lsocghez1pVc%2FmJSWfksDy9KTTm3Bs3f%2B%2Bhr3ZnQ08B773xJUs9hEW2fTEexUoWLGQACIlxkBZzN8%2BDhpmUBng1xwfqcqpg4P%2BEGJDE24ivq%2FKP0cjJaW%2Ftm7w9OwKniv6amnT7rlLysf0S&X-Amz-Signature=8f5d0e434b1e483bf43a9d7017464c949dd3d915a0fd4887c9a7e1ee3084586b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQPT3UZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIF%2Bw9kwgr6K5RMPEIW6529mkmwILMJHEAeXt1CX1SwxLAiAnEuCKYlVBJIrxp5o29OSqciMqhn8BvipGmgyTM%2F8P%2BSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2lsZFPKOPs%2BwWJPYKtwDLwMezIYfgE8T%2FinGMBCZfCAHnYyNHn5LNNYYwEkR9NtlOSPb5HFIrACux9h5pb28a47axKZbVWkaZ4GQqUD10NsMIHAesPDBUa0g2U1quGZr101EQ%2BED2wN5i1dBAbgtj1mIhQJYacOT4VomamUN56k1Apb1lheM1dYAW1HqRlqRkNtoP0g5mRweK8vDF%2BfOTyC2PHNvN3wy4KUXhYLKYZER6b1vzG23tysxiBWfrXrifzKqT6wfXwOTLERku0ItMGG7%2Feu5f3CzieBBWSt2xnD9GkiUJIPXobVGy0Z39s5F2PH9rh4fEtAIXtfDHd9AH5DeDTqbYzKOU69ZT5HtbwdLA%2B6DonY%2FxH18ISoo2i%2FH%2FfEHPw1Exeg6gj4GSyIrJ3sKAGaT2JksEVpFop6hVlhBSa0huZxyXBd4JBuzIeDqmUWtXAAsyJeiUdo9KgtQ4TOQwANHk5xQGKdJgKGtz0iHjrpqO5n%2FkJAgXDdxZBAm9sVEEfwwdKkzjuvD9AsLMVxbDkq%2FXzxcTp1xVRp4%2FukRN4YxhvJ9xZ5MjfrIXm0rONICTyqQX%2FHdcrr%2FJlls0kmQ8AFG9XQiGD6iTAr3VyUtENot9%2B%2Fwb473OeQA%2BqbyGTOrEZuaDl%2BDPA0w%2BO77xAY6pgFJl%2FmmJdiwKP49k4kEiY5zzvzPmFKeNfTWpNU%2B%2FoBuN3jlG%2BcoLYMaNbPKNtpWNg6X7Ilyzp1GUJY2zru2akP9aSBH%2BbjIeAORBeInq293P5NL9uNc4%2FC%2FOWpTx8HyIOn1MsZzV8LMGqenC62%2BhBwsUmyAYsbZtsnUG%2FaLYdOWP4H9h5FV6VUnRt3RAfBZAvCMeYOv2mMp3xnxgnYIsPGncKp%2FaEDu&X-Amz-Signature=ec9e3c70f8a0f107f2492ff0be6bafb5fda96d53c516778494d72c940a05ab54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
