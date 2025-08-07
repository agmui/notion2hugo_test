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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIG6N2V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHizN6zchcvjwZBvyfwvpJN26GSu77Dma6xspY81adSwAiB0kVx72hv1MFBI3DMEoX4DAEYaTcTbZMncu%2FQ1NpDpLiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKq3YeLSsIS4LOPZIKtwDvY3tpajZ5TLzm6mpXXwocUeCHmugWgOli7xBDU8t2kbrt8M4Wzn3L7KgUqCAGSaJFQUsn6gXlzUbDK64KlQTzmJvqNisVg9poaQkdjVpPktEGNVIT6bYZ%2BTc%2FwaM92r14ixtEw7pZtvfUchpZpL6sDuxDkUFKoiS48Y5rmIGh%2BrzceyOMqwFIGGW4S6vk5eKL%2FUDbJQucqUua75SKUj3g3aq%2BiWsCqDz%2F0M7n6UN88G%2BWYWKTBuZ1U9VaRDSOKbdRxdE1jK2CCAL3n2OKj4Eqd5PCeU3nN1XKVzl0v81dO7VePmdudxGuUHyOrW%2FjmRf6qB7LHhUZc9Mes%2FsGk9OSkDBbRuV264G5D8A9qKt4m%2FChW6uJ3N3p4hQ5KKI2PR30%2Fc4nTgCU4yFRrbMPZuSYCyjRL%2F%2BOH0gP%2FCZDjg1Q3dOXgKV2K9ELQzYzddDA8MhX0zfAr4Yw9ayWcmxZe2G8rB%2BXXs18UB8ws%2FpOW4Wf1SadsoRFzmJynyv0fKZHkZAUNAhqdCWdr5Qn4U6oHEmVr4r8v7GsbbiChm2ZMIjcJzTIwXPNz1KtNLy8sLZ4Ec5OCYrTH33ahyOVtlERyTE4AfgHNOZuBfLuUhZabvOFYRE5i6xDr8OLdNgU6swle3QxAY6pgFTGpesALLTx6%2B4d3uKjbr4pbwO1yu0tZbHIK%2FpFqDG0CPT9IAjSjMFfkSTNXvnjxGPO4gddkWtcnjAeOpwcLuKxsifr9Pp9Yq0F3j3wTifUSyYZJlAr%2Fcd6PR9mKwgyuiOEbYLnJFoLrp6sPGsOQK%2Bz73x%2FVAaitK4FqI1%2BrmU0Su39zzVnmDyOPDkmmuQEWJWwWEjIhXMbYdaHLJCfRvLusNFR2oQ&X-Amz-Signature=f9e5fda9ab532e26ef7ee07e4da4b4d68aeeba1a310edd0cfbc38089c2696ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIG6N2V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHizN6zchcvjwZBvyfwvpJN26GSu77Dma6xspY81adSwAiB0kVx72hv1MFBI3DMEoX4DAEYaTcTbZMncu%2FQ1NpDpLiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKq3YeLSsIS4LOPZIKtwDvY3tpajZ5TLzm6mpXXwocUeCHmugWgOli7xBDU8t2kbrt8M4Wzn3L7KgUqCAGSaJFQUsn6gXlzUbDK64KlQTzmJvqNisVg9poaQkdjVpPktEGNVIT6bYZ%2BTc%2FwaM92r14ixtEw7pZtvfUchpZpL6sDuxDkUFKoiS48Y5rmIGh%2BrzceyOMqwFIGGW4S6vk5eKL%2FUDbJQucqUua75SKUj3g3aq%2BiWsCqDz%2F0M7n6UN88G%2BWYWKTBuZ1U9VaRDSOKbdRxdE1jK2CCAL3n2OKj4Eqd5PCeU3nN1XKVzl0v81dO7VePmdudxGuUHyOrW%2FjmRf6qB7LHhUZc9Mes%2FsGk9OSkDBbRuV264G5D8A9qKt4m%2FChW6uJ3N3p4hQ5KKI2PR30%2Fc4nTgCU4yFRrbMPZuSYCyjRL%2F%2BOH0gP%2FCZDjg1Q3dOXgKV2K9ELQzYzddDA8MhX0zfAr4Yw9ayWcmxZe2G8rB%2BXXs18UB8ws%2FpOW4Wf1SadsoRFzmJynyv0fKZHkZAUNAhqdCWdr5Qn4U6oHEmVr4r8v7GsbbiChm2ZMIjcJzTIwXPNz1KtNLy8sLZ4Ec5OCYrTH33ahyOVtlERyTE4AfgHNOZuBfLuUhZabvOFYRE5i6xDr8OLdNgU6swle3QxAY6pgFTGpesALLTx6%2B4d3uKjbr4pbwO1yu0tZbHIK%2FpFqDG0CPT9IAjSjMFfkSTNXvnjxGPO4gddkWtcnjAeOpwcLuKxsifr9Pp9Yq0F3j3wTifUSyYZJlAr%2Fcd6PR9mKwgyuiOEbYLnJFoLrp6sPGsOQK%2Bz73x%2FVAaitK4FqI1%2BrmU0Su39zzVnmDyOPDkmmuQEWJWwWEjIhXMbYdaHLJCfRvLusNFR2oQ&X-Amz-Signature=b95184ec70bbcf3a41e0aa4af8b61ac348a22b40a44965879cd0b4469c41ad96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIG6N2V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHizN6zchcvjwZBvyfwvpJN26GSu77Dma6xspY81adSwAiB0kVx72hv1MFBI3DMEoX4DAEYaTcTbZMncu%2FQ1NpDpLiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKq3YeLSsIS4LOPZIKtwDvY3tpajZ5TLzm6mpXXwocUeCHmugWgOli7xBDU8t2kbrt8M4Wzn3L7KgUqCAGSaJFQUsn6gXlzUbDK64KlQTzmJvqNisVg9poaQkdjVpPktEGNVIT6bYZ%2BTc%2FwaM92r14ixtEw7pZtvfUchpZpL6sDuxDkUFKoiS48Y5rmIGh%2BrzceyOMqwFIGGW4S6vk5eKL%2FUDbJQucqUua75SKUj3g3aq%2BiWsCqDz%2F0M7n6UN88G%2BWYWKTBuZ1U9VaRDSOKbdRxdE1jK2CCAL3n2OKj4Eqd5PCeU3nN1XKVzl0v81dO7VePmdudxGuUHyOrW%2FjmRf6qB7LHhUZc9Mes%2FsGk9OSkDBbRuV264G5D8A9qKt4m%2FChW6uJ3N3p4hQ5KKI2PR30%2Fc4nTgCU4yFRrbMPZuSYCyjRL%2F%2BOH0gP%2FCZDjg1Q3dOXgKV2K9ELQzYzddDA8MhX0zfAr4Yw9ayWcmxZe2G8rB%2BXXs18UB8ws%2FpOW4Wf1SadsoRFzmJynyv0fKZHkZAUNAhqdCWdr5Qn4U6oHEmVr4r8v7GsbbiChm2ZMIjcJzTIwXPNz1KtNLy8sLZ4Ec5OCYrTH33ahyOVtlERyTE4AfgHNOZuBfLuUhZabvOFYRE5i6xDr8OLdNgU6swle3QxAY6pgFTGpesALLTx6%2B4d3uKjbr4pbwO1yu0tZbHIK%2FpFqDG0CPT9IAjSjMFfkSTNXvnjxGPO4gddkWtcnjAeOpwcLuKxsifr9Pp9Yq0F3j3wTifUSyYZJlAr%2Fcd6PR9mKwgyuiOEbYLnJFoLrp6sPGsOQK%2Bz73x%2FVAaitK4FqI1%2BrmU0Su39zzVnmDyOPDkmmuQEWJWwWEjIhXMbYdaHLJCfRvLusNFR2oQ&X-Amz-Signature=0d307c404bc431600b04fa822dcc06c11ed0dda43c5dbe4cffc10efa476f0ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSXBOF6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCvZkomRuHCxt2ZbYMg8trUQul22aFpoiNjUJWck%2FByUQIgTpO9QpxSPzkd99DaqURaxVWH96QYp062649p0xut%2BD0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNFTaQa16mTw0%2BGRFircA3YUo6R9NxvY%2F2Yx5%2BY5rnXUB%2BDODqYeZVyH79s00eBrFXaOG0oY3Nah2fV8Vu02VuFplVraN9nIxr%2BwFo2DPDE7oehp6xd8hr5AQm4mSDQ1aJ7nKBwzS%2F4hOelBEnIpwP9WpcZjYL4hxkS%2Fk9tuo%2FER%2FsRmULB%2BXZV4cuWwt9rkZs3v%2BZpcYI6wUCxziVIAZlfGyru9hvnDKHc%2BbjxVI1RrMUKX7iSwMT8pbork2AYXE4eVmOb%2Fuzlt2JMw2ugvmPjSwATMOBfdRVt%2FVAa03%2BhmrSkRtGLEULvT%2Fcz93%2BC7K0OXTpjMl%2BW%2BVWN0CkoO3B2Qg1R9FcjvNNFFRUOIPdjvmjf9M9%2B5BrVXnB9OOTfHW7Cv5%2BRfQ3arMIMRhK563DN8bt9kveUWDSAI1fIqn9%2FUdc6iFKiIveVifeRfbVWNp7xTMMV5zjmsWTUABcXP3IUmjilCBdpTOfuZXB5Cd%2FVP4d3Ed%2FjdhYMhk9gyo6aXAJdYrWTo4%2FakHV6yzZCQ0b9Nh5fXlpofKXyf%2Fy665w7z4eDJoleKZcDFiY90iRB9wLr7SMVdfZQW8tFmSyDliAGvkDSq0ZJ%2F4ukZ7viZrBHx9bZysjZejpkm8C2bycstkb8QYU%2FwSv0JPR6RMO3s0MQGOqUBNgHler3HUOi7Kz1fwvTJ7FO2BqLCS%2BxfA2mUKWs%2FkMarRswy306CvogCXMiYwtEmXGVYQFVIuTYlw3IVX7shCrRvEJbYRAJkUnfYlzFwbi%2F4LUNJMqGpu%2FrwtUOgSdLZ3GHT%2BiuIZoxw%2Fe66efFEt5N1EdbFucaMLLJg1W3OCtY1a3OJ5NAZ61n%2B3D5xYKeugZtnra2HgBJC51dtl9%2FCcyKD8J%2Fd&X-Amz-Signature=f63535e94e3cba798531c7d84c24cfd4b258080f345016f64f629026feda3771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WNHZIUH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCSBIdz4PsULLNTB4vUmIoE6DdEpvddzXz7kaweNmvaDwIgMETv0gqJ4W1Ykl0%2FGJ0LI4ea7wkEZIaU%2Blr7z9bgmLoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL8NHf6SDvZKeR2oSrcA7ppy3tCcOpolKt32AO9xIAuYG2jCsKQCH9bSZgRWwndOag9doo7EJpSazBA7R6tHkpEg5RpKZ1Te5KoNmbR9w5%2FZ5tXOiG9oQB4qX2JdIUzIDLBbi0Bt%2BCErhf44sZEupc%2Bgm%2Bg3lJAqMcrgpVcmJGqlidVS3SdsmOYBBRNfYXXIp6UZupofPw9E3mCloto7eyTB%2B5l16zZJlDudwzt597mtCmTkQ8P56Fm10q7cAyTwQyj%2FrcDA%2FGVHHFr%2F%2BJq200CckadLGgDbwfZIlwY0ymsVXuS7Z0FqYZwtO7Lywiagzi6snabp9%2BtdhC%2BGUg9nRn42qqaCvQLMFnOISa%2FNjVcw0Mou0jxdydAuoxjs7bPzR4gNOwnFZKnDCgEOmrRnq8UFsfy%2F5NtAFv9h7bft0%2FC9n%2Bjl1ypuF7h775w4PPBIpt13n4TriuFwp%2ForRAuKncPlPxmJ%2F5E2fth%2BqIHBrUPIbLp9rzHPq%2BisIiE%2BWjl4I5M6vjYud9ihksRZCXVBA5PMA0uE3UqraxjG6KK8DRqjZZptAjVym8aKzm5XjOlEQfFi1khiDnZv1Ro2IY3sZcDcyNqjxmu68rjwxQJLwNuq0ybHLsENeeDEZs5JwCLeElDlCzBwCUif980MKPt0MQGOqUBTQSthItXBQH8vXClxzA6DEmLqt6BgPwX0whOFuaxWNzEoVvsQ4XXqPJWP%2FN2ZWX%2BtiPrLvCFm5zc5jiwd8UefqyN4%2BMXrCcc3dWXHhmG5zEUfSb%2FH90mesOm95v1mLgRf8uJ8YxQfsRZc3SgGusAMNI876xEWQRByGUUnm4tQcv1SE1Ynbz%2FR%2FF%2BK5fcE0w0J%2Bjo32XiaUWzOekIIbhmDnLCCncc&X-Amz-Signature=e16aa6a7d8a47aa5cb3a8f3557264423f2365c4bad6a3d65ad253547300d35eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIG6N2V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHizN6zchcvjwZBvyfwvpJN26GSu77Dma6xspY81adSwAiB0kVx72hv1MFBI3DMEoX4DAEYaTcTbZMncu%2FQ1NpDpLiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKq3YeLSsIS4LOPZIKtwDvY3tpajZ5TLzm6mpXXwocUeCHmugWgOli7xBDU8t2kbrt8M4Wzn3L7KgUqCAGSaJFQUsn6gXlzUbDK64KlQTzmJvqNisVg9poaQkdjVpPktEGNVIT6bYZ%2BTc%2FwaM92r14ixtEw7pZtvfUchpZpL6sDuxDkUFKoiS48Y5rmIGh%2BrzceyOMqwFIGGW4S6vk5eKL%2FUDbJQucqUua75SKUj3g3aq%2BiWsCqDz%2F0M7n6UN88G%2BWYWKTBuZ1U9VaRDSOKbdRxdE1jK2CCAL3n2OKj4Eqd5PCeU3nN1XKVzl0v81dO7VePmdudxGuUHyOrW%2FjmRf6qB7LHhUZc9Mes%2FsGk9OSkDBbRuV264G5D8A9qKt4m%2FChW6uJ3N3p4hQ5KKI2PR30%2Fc4nTgCU4yFRrbMPZuSYCyjRL%2F%2BOH0gP%2FCZDjg1Q3dOXgKV2K9ELQzYzddDA8MhX0zfAr4Yw9ayWcmxZe2G8rB%2BXXs18UB8ws%2FpOW4Wf1SadsoRFzmJynyv0fKZHkZAUNAhqdCWdr5Qn4U6oHEmVr4r8v7GsbbiChm2ZMIjcJzTIwXPNz1KtNLy8sLZ4Ec5OCYrTH33ahyOVtlERyTE4AfgHNOZuBfLuUhZabvOFYRE5i6xDr8OLdNgU6swle3QxAY6pgFTGpesALLTx6%2B4d3uKjbr4pbwO1yu0tZbHIK%2FpFqDG0CPT9IAjSjMFfkSTNXvnjxGPO4gddkWtcnjAeOpwcLuKxsifr9Pp9Yq0F3j3wTifUSyYZJlAr%2Fcd6PR9mKwgyuiOEbYLnJFoLrp6sPGsOQK%2Bz73x%2FVAaitK4FqI1%2BrmU0Su39zzVnmDyOPDkmmuQEWJWwWEjIhXMbYdaHLJCfRvLusNFR2oQ&X-Amz-Signature=e97ef39e1c61f5ec6d094107a5aea06a2e88341c9705d51cc53d2bde63aadf25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
