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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNJBWDV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCpJuqUS7wtNQle5fFBSPdeq%2B76fI5%2FszIMBOAM0ap4wAIhAOO6dB8lev027lCOKv3iWvQy%2BWxExfL4bwr4dl5seVF%2BKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOQSsiioQ1RnwMgMq3AOdamsL0ttAYAs6%2FqaLfkK6HtJKQ7Vkqn%2Ff7l%2BPqXfDCOaBP7xFGgauvdy28cQcxPWG%2FCfqIGWAVgow3zuGvJzN5S7KtuuLYTyY%2BxoVsjAB43v8KXjFbQUmf5Z%2FWFaD9NWNtJxV%2BjXp5XJyg9RezA9%2FTdrd6QJu5VBVjl3I4mMACwl7lKl0%2B0H2SM5FGbWK4w5nYMg1I1cs3FGYzRKQ1fYfV7hqN5egBQJT3HSmVXgibh7bqSyRjMqNDSiHJ%2FfE4r8pinMynW4BBTxjUdUpewljO5YOSILN71WRGmL2L%2BSngq%2BDs1p0TI%2B69o%2Fwt7xmAOrojTxKV7Xj8ucvluF9sX0hWJG9DNPbmkGeliV3RF%2F%2BOpj8fk%2Bw7ws%2BfgyXBc6mtGbBHexYmd8EJJGcwDQYfLE4RQejMYJYpfc70XXS4pSn3WXLzp4KQskBZbxi%2BAq%2F95XTU97UMaaTU8Ais8YKom4xGZSixAq6NHJmC5e0iogccTzMBDTMICMayHG5jcubP1Mix96%2BNMeglviak6YfWBN5BP0a%2BYHPJHABmvEALCmMcdsvxENjJN5x3HjhizFv1WJ4nkbkyPMBxL8dhNbFThr%2BtqKWS0%2BujwF7qVrRfqRHepkDR9AOM5Gt148g4TC1zLS%2FBjqkAZZMcZpkJSGeJfYZUIYoQl7ydjwVwSfxx%2F6nyfdOH7TxCT6OTNU%2BvWoTh9Fxi2CFKBw5ya%2Fyv3VhGMlEPan5E4LCaCR9KLxH0aL2L2q9UzShOUUz10ZdXxBo%2Fc%2FmpC7%2FDc4c%2F1iRkPfU7wUV7Ud61j%2FgyA8rpM5rM71KpaBcTwJ3HlJo9PdU8HV8RNv05g8Akvn7joWJJQxO42DdhGrsxwjlDiZn&X-Amz-Signature=ba19baa0129684dbd372f3836461c971577cedc6d56a4e07e0f48895d67a4792&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNJBWDV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCpJuqUS7wtNQle5fFBSPdeq%2B76fI5%2FszIMBOAM0ap4wAIhAOO6dB8lev027lCOKv3iWvQy%2BWxExfL4bwr4dl5seVF%2BKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOQSsiioQ1RnwMgMq3AOdamsL0ttAYAs6%2FqaLfkK6HtJKQ7Vkqn%2Ff7l%2BPqXfDCOaBP7xFGgauvdy28cQcxPWG%2FCfqIGWAVgow3zuGvJzN5S7KtuuLYTyY%2BxoVsjAB43v8KXjFbQUmf5Z%2FWFaD9NWNtJxV%2BjXp5XJyg9RezA9%2FTdrd6QJu5VBVjl3I4mMACwl7lKl0%2B0H2SM5FGbWK4w5nYMg1I1cs3FGYzRKQ1fYfV7hqN5egBQJT3HSmVXgibh7bqSyRjMqNDSiHJ%2FfE4r8pinMynW4BBTxjUdUpewljO5YOSILN71WRGmL2L%2BSngq%2BDs1p0TI%2B69o%2Fwt7xmAOrojTxKV7Xj8ucvluF9sX0hWJG9DNPbmkGeliV3RF%2F%2BOpj8fk%2Bw7ws%2BfgyXBc6mtGbBHexYmd8EJJGcwDQYfLE4RQejMYJYpfc70XXS4pSn3WXLzp4KQskBZbxi%2BAq%2F95XTU97UMaaTU8Ais8YKom4xGZSixAq6NHJmC5e0iogccTzMBDTMICMayHG5jcubP1Mix96%2BNMeglviak6YfWBN5BP0a%2BYHPJHABmvEALCmMcdsvxENjJN5x3HjhizFv1WJ4nkbkyPMBxL8dhNbFThr%2BtqKWS0%2BujwF7qVrRfqRHepkDR9AOM5Gt148g4TC1zLS%2FBjqkAZZMcZpkJSGeJfYZUIYoQl7ydjwVwSfxx%2F6nyfdOH7TxCT6OTNU%2BvWoTh9Fxi2CFKBw5ya%2Fyv3VhGMlEPan5E4LCaCR9KLxH0aL2L2q9UzShOUUz10ZdXxBo%2Fc%2FmpC7%2FDc4c%2F1iRkPfU7wUV7Ud61j%2FgyA8rpM5rM71KpaBcTwJ3HlJo9PdU8HV8RNv05g8Akvn7joWJJQxO42DdhGrsxwjlDiZn&X-Amz-Signature=3ee2b2e0cc5a93212ac98f56eb746ea62bb9fb3d8d7b6935e12aa34a3da1dd2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X6B3LDF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDAUkc%2F2UwwWpJc%2BQ%2FJU5A4EF4BBfcMiyzyd3SIvcGeaAiEAsNf5QR8fNeULCU8iCDHLRR54YVGE80rjPMH41mWMqSEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLceJi41UklZVbSrjyrcAx2bS41mM%2F%2Ft%2F7xI7%2BkCQttbrYUPHfotik%2FHja9uHTAMzwHuwUroXMULbHRPKw8Wr31gOIqVRpH%2Bueb2niwCLzoh0ZXA%2BMuUpNdD9OPwfybR588VNv7sAy0mHLgtNAA6rja4quMtzVGUhKzlEOfAG4EMwGRUbVpNX9Ks%2BUQAnr%2FAg6no1CAKdYF2sFY4jiVmYFUFekQCwYi6w76CTcT719P5pRtB36mWASwldXZTunZHx1oNX%2FOwjBPKASkM0HXfVJEz5QFljMh7b8wnAtG6F7RxzwPbi8bh4PjrvAswIDKm3wEsHFb3JnxGeIv5l6lJw%2FdZWJhwdTDd1oI33AXRXx82Sn%2BwM54xpnRyq%2BNOAGbZrcpsHJotHkWHj8zSgL5PeCsSA%2B3vJGbgR66qToHA57joQdgY1I%2FsVfsQBMft33x90ennpJaRRqCWYXccf%2FvXEy7I8FgzODHohR0DWPYTCwGPpq66aOFI5Ce9%2FV%2Fw5IFqSCC9L3k5RCEKWgdWVndPsSd6OwRubq%2FtnpfRQkqmNdC44ZPYZh2C0PnzZAOB6tseM%2BWqRMcowfu00eepYNJ%2BdD%2BDGVp%2FA2Xk3lg3%2ByurClK%2FlCmxLMjt0z%2BMhUOfvYoeOhX%2BDdsBj3AGpVjFMNzDtL8GOqUB5QzQCEp4NpTqPgOvFKB8VTldb8N6qrN5r6jMSaKrdVqGsiYr0nqDKYq%2FNvqn0yGb8CRxNLZIPL7mMuXuMp2Q8VC9v6E4UhWc9zxldwXO%2BPJ0xtxPLVm%2FJlJDLsjP5s6UGTZpLX77yzdCVrhgcxQIaCeV94bsn2KcgQm5JglHZ1Im1BtAnb8P9biNVsdXya3COM%2BYc32U076ApfqybZAAxhWzIy49&X-Amz-Signature=c139093b5ec7f30a2eec337eb7e7245b46c95e7afbb99a8f854907baec2d170b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VNJRQM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDUrlsLSFaS%2FDlAQJNy1TlJhm8PToG46MwY0DbnlfsyvQIhAJhi%2BQ0CJVPolV37g6tM4g0Q07FUWKsTIFioReMzYGCHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BH2YmhsWTzGhqDEAq3AN4nOciXz%2BwEEIj%2FredwbWH6pYyb1zWqtjAREX6QufgwLmie4TIym%2B2JkgBWIRsxQaJz9i8sTgXpryaHBbrkUR%2FdqVa3EhZidbSLNZtzZDYIXm8ZNemyrwaLUqePPXtWakIwV6fSBxOURMEWR2maX%2Bynjkv%2BJ1sK9xVsAup%2B8w0c7DHak0J3VeJRonbx2jpJ3mDCmG%2Bjazb6F7aPxADmZ5nai7cCKOC3BftJR43Cp%2BJx3auEfnrwdHKCSVB6n0k2JOJINuO5%2BjrACGd678mBOKhIcGZyeoMYWJFhwqD6swdhtZvcuDo%2BCf6Py3rbqELVKS2mSYDbDIBGnziqetZ40fKGLSN3IVnMzz58fVgUvE9xyMZG71wdP5MWpBHjjNI4V9bluk6Pe6KUpZ7JL%2BNZx1QW6gxEuIpCkvqbYtUNRBXqUAdStRoPAUXNjIljuaSfZ%2Bv2A1tUOPTyUK0Ho6a6PmXPlVgMsGWBZYhO019C7J52n%2BwNqsmZDMeFOKL9%2FxVwDRK8ffX3bxH%2FIPL%2F%2BxSKicyWFUS664N%2B46hAIdstoF2B3lUgCBt1Wq9UZ6ovXu229Mg18YWlEbekAgA%2Bk0iA4yrhVn1DCERN0R9C61Vk%2FgGbTlAHjUd4fP7WWPHYjCrw7S%2FBjqkAYw6w8SoOEqBNZGA%2BC6u78HiEVSx3oLnAYJ%2BNP2kcCycV3zBoRah8PxJNOzkcNeupzh%2FlHeI2tsqcIG1ubTQo5Q33XHG9uyiDdyd7Ge6TzAArNWQKdpZ7y4D02%2F564oRK%2BNXujC4DPlw7h469RyiGrd0XU19CAMmuvYuc3PKmFQKCNt%2B8Qk310ST4SW1M8O2GGIoD%2FDYhw%2BdW%2B7gTJjy4zRXKM%2F8&X-Amz-Signature=a305b5132aab062827ab78c97c4255e82ea3900735dafc5f5f017c77e0f11d14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NNJBWDV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCpJuqUS7wtNQle5fFBSPdeq%2B76fI5%2FszIMBOAM0ap4wAIhAOO6dB8lev027lCOKv3iWvQy%2BWxExfL4bwr4dl5seVF%2BKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZOQSsiioQ1RnwMgMq3AOdamsL0ttAYAs6%2FqaLfkK6HtJKQ7Vkqn%2Ff7l%2BPqXfDCOaBP7xFGgauvdy28cQcxPWG%2FCfqIGWAVgow3zuGvJzN5S7KtuuLYTyY%2BxoVsjAB43v8KXjFbQUmf5Z%2FWFaD9NWNtJxV%2BjXp5XJyg9RezA9%2FTdrd6QJu5VBVjl3I4mMACwl7lKl0%2B0H2SM5FGbWK4w5nYMg1I1cs3FGYzRKQ1fYfV7hqN5egBQJT3HSmVXgibh7bqSyRjMqNDSiHJ%2FfE4r8pinMynW4BBTxjUdUpewljO5YOSILN71WRGmL2L%2BSngq%2BDs1p0TI%2B69o%2Fwt7xmAOrojTxKV7Xj8ucvluF9sX0hWJG9DNPbmkGeliV3RF%2F%2BOpj8fk%2Bw7ws%2BfgyXBc6mtGbBHexYmd8EJJGcwDQYfLE4RQejMYJYpfc70XXS4pSn3WXLzp4KQskBZbxi%2BAq%2F95XTU97UMaaTU8Ais8YKom4xGZSixAq6NHJmC5e0iogccTzMBDTMICMayHG5jcubP1Mix96%2BNMeglviak6YfWBN5BP0a%2BYHPJHABmvEALCmMcdsvxENjJN5x3HjhizFv1WJ4nkbkyPMBxL8dhNbFThr%2BtqKWS0%2BujwF7qVrRfqRHepkDR9AOM5Gt148g4TC1zLS%2FBjqkAZZMcZpkJSGeJfYZUIYoQl7ydjwVwSfxx%2F6nyfdOH7TxCT6OTNU%2BvWoTh9Fxi2CFKBw5ya%2Fyv3VhGMlEPan5E4LCaCR9KLxH0aL2L2q9UzShOUUz10ZdXxBo%2Fc%2FmpC7%2FDc4c%2F1iRkPfU7wUV7Ud61j%2FgyA8rpM5rM71KpaBcTwJ3HlJo9PdU8HV8RNv05g8Akvn7joWJJQxO42DdhGrsxwjlDiZn&X-Amz-Signature=c211686e65a0d0f52735fb3737bcfc3c3ea354b4b1f28879d903a17261e85c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
