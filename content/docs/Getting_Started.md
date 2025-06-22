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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPAKISQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVj0v3zn4PBglDPH%2FpRWQARxp1aEOO%2BmkQTBitVB%2F7zAIgEkczzoG2vYFAlezFaU9q51SFHKMPKRN7JNyr%2BB%2B5JswqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3WuUbMwzfX2UjkiSrcAxCQxtdotFNDsBl0z1NtdXfMQNkeHC5pHcuV5hQu9BZXmiMnyobmBz9hDSOGC%2BhzoSOgcdcHTm69leMNGB23147ttmqLHeZu%2Fa%2BEARoj2DJTqvC4Hllm3NEICPoIWXiKJUXGBJt%2BaDIDOtzx4SNPy%2FT6XCKmRjfzdgJA6OZ5EyGy6k49j0pVSytf41QNKoTGj0XXZ8sMefAQdZ8wSEab0QIZ1zrxqXJoyo6e1UpC3G0DaHfYkuxfuyDqhOFZkELMYZ05RloPdPuWgUMPuDlWnG4fPoc9PrHU8AJaJ%2B72w7I4CRcpXrKgqxH%2Bm08hl3HuLVrMa706G6%2BKEXeFK3No9sIeJ8qQpdTyo7%2FGt9gvVhYx273MYZ19wO1UYrss6lr4CfEsGkpJPC8pwXF7U1Ldvy672vSEi%2FHYe%2BNfDvX46gP7i4lhwwnTYTQxPRg4ULM1JM7AFKfzPHKtrNRwVAWL%2B5jTLP3%2BsFxgxEzkO6fR1NwrwQ7PNnPie4TvmyMg6jxjhhptupttmrgIMb%2FsJdhwxOAp7yyDXlGM%2B%2F%2FTWddeuGWKfJRV%2FaDf98nw%2FX2CZKBq4e5VUZnsfPc7pWsg70n8r0%2FUp46ww5D2DJblFe1aovHA4Lh0rf8bUh8REDJIMJWI3cIGOqUBquGpamvC%2FG%2FBexZWCmY8NHfj1oaL9A6C7ZqqkRGfrSqkmvnHGFuVU3TIMbBONkvr68T0Erg7yxs5mcJE0IqrtwkWtMjF%2B9qaz7F3Twbu3RaGzZHJ0cRe%2FPJuEvWYoV1sObctVgv7E2WTxvAfgLLxQXhn1plV3bEBXXVabmChQyukj7Q9O1Q%2B725kd0RoLJDldE%2BTFr1xLkWBUvj%2FD%2BaVOuXzon37&X-Amz-Signature=462cf28e28a2862afdbf01f43fea8d56fb94ebefcd751c2be53dad2e8b63d8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPAKISQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVj0v3zn4PBglDPH%2FpRWQARxp1aEOO%2BmkQTBitVB%2F7zAIgEkczzoG2vYFAlezFaU9q51SFHKMPKRN7JNyr%2BB%2B5JswqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3WuUbMwzfX2UjkiSrcAxCQxtdotFNDsBl0z1NtdXfMQNkeHC5pHcuV5hQu9BZXmiMnyobmBz9hDSOGC%2BhzoSOgcdcHTm69leMNGB23147ttmqLHeZu%2Fa%2BEARoj2DJTqvC4Hllm3NEICPoIWXiKJUXGBJt%2BaDIDOtzx4SNPy%2FT6XCKmRjfzdgJA6OZ5EyGy6k49j0pVSytf41QNKoTGj0XXZ8sMefAQdZ8wSEab0QIZ1zrxqXJoyo6e1UpC3G0DaHfYkuxfuyDqhOFZkELMYZ05RloPdPuWgUMPuDlWnG4fPoc9PrHU8AJaJ%2B72w7I4CRcpXrKgqxH%2Bm08hl3HuLVrMa706G6%2BKEXeFK3No9sIeJ8qQpdTyo7%2FGt9gvVhYx273MYZ19wO1UYrss6lr4CfEsGkpJPC8pwXF7U1Ldvy672vSEi%2FHYe%2BNfDvX46gP7i4lhwwnTYTQxPRg4ULM1JM7AFKfzPHKtrNRwVAWL%2B5jTLP3%2BsFxgxEzkO6fR1NwrwQ7PNnPie4TvmyMg6jxjhhptupttmrgIMb%2FsJdhwxOAp7yyDXlGM%2B%2F%2FTWddeuGWKfJRV%2FaDf98nw%2FX2CZKBq4e5VUZnsfPc7pWsg70n8r0%2FUp46ww5D2DJblFe1aovHA4Lh0rf8bUh8REDJIMJWI3cIGOqUBquGpamvC%2FG%2FBexZWCmY8NHfj1oaL9A6C7ZqqkRGfrSqkmvnHGFuVU3TIMbBONkvr68T0Erg7yxs5mcJE0IqrtwkWtMjF%2B9qaz7F3Twbu3RaGzZHJ0cRe%2FPJuEvWYoV1sObctVgv7E2WTxvAfgLLxQXhn1plV3bEBXXVabmChQyukj7Q9O1Q%2B725kd0RoLJDldE%2BTFr1xLkWBUvj%2FD%2BaVOuXzon37&X-Amz-Signature=5bc423736cdd175e7d1990e6eaaae6ea9c56994d2492749c6ebdcce139f816b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPAKISQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVj0v3zn4PBglDPH%2FpRWQARxp1aEOO%2BmkQTBitVB%2F7zAIgEkczzoG2vYFAlezFaU9q51SFHKMPKRN7JNyr%2BB%2B5JswqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3WuUbMwzfX2UjkiSrcAxCQxtdotFNDsBl0z1NtdXfMQNkeHC5pHcuV5hQu9BZXmiMnyobmBz9hDSOGC%2BhzoSOgcdcHTm69leMNGB23147ttmqLHeZu%2Fa%2BEARoj2DJTqvC4Hllm3NEICPoIWXiKJUXGBJt%2BaDIDOtzx4SNPy%2FT6XCKmRjfzdgJA6OZ5EyGy6k49j0pVSytf41QNKoTGj0XXZ8sMefAQdZ8wSEab0QIZ1zrxqXJoyo6e1UpC3G0DaHfYkuxfuyDqhOFZkELMYZ05RloPdPuWgUMPuDlWnG4fPoc9PrHU8AJaJ%2B72w7I4CRcpXrKgqxH%2Bm08hl3HuLVrMa706G6%2BKEXeFK3No9sIeJ8qQpdTyo7%2FGt9gvVhYx273MYZ19wO1UYrss6lr4CfEsGkpJPC8pwXF7U1Ldvy672vSEi%2FHYe%2BNfDvX46gP7i4lhwwnTYTQxPRg4ULM1JM7AFKfzPHKtrNRwVAWL%2B5jTLP3%2BsFxgxEzkO6fR1NwrwQ7PNnPie4TvmyMg6jxjhhptupttmrgIMb%2FsJdhwxOAp7yyDXlGM%2B%2F%2FTWddeuGWKfJRV%2FaDf98nw%2FX2CZKBq4e5VUZnsfPc7pWsg70n8r0%2FUp46ww5D2DJblFe1aovHA4Lh0rf8bUh8REDJIMJWI3cIGOqUBquGpamvC%2FG%2FBexZWCmY8NHfj1oaL9A6C7ZqqkRGfrSqkmvnHGFuVU3TIMbBONkvr68T0Erg7yxs5mcJE0IqrtwkWtMjF%2B9qaz7F3Twbu3RaGzZHJ0cRe%2FPJuEvWYoV1sObctVgv7E2WTxvAfgLLxQXhn1plV3bEBXXVabmChQyukj7Q9O1Q%2B725kd0RoLJDldE%2BTFr1xLkWBUvj%2FD%2BaVOuXzon37&X-Amz-Signature=27033e1d7ecb33bf461afecff84cbb0bd6d5ce1b87b9e569888084043dab1293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFIH6BP3%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHotjh6Rd8xHE14UkvMlAE27l5gY5pUmkFN9EcOlYB93AiEApfhMqWc3F1WkOrF7IYUa8DoSmwbJYxw%2B0Gk1UbbwcvwqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKaIIRHk3vLHzctQircA0zg7StB66j8%2B5cjwWkGp8p2MoInBbbqUq8HriEclehStUHQF0dJYvn1qBPYkFTdXS6Jk7sjKALZVlxxoKzVoN71R%2FobxedQigkJb9N9rg0G4jY4nBu2i0x%2BrBohnkdSPXuyTfN37wSmXJiUFIVTWl%2FEH%2BvDeZ0WVARrFTxy%2BDiF2xnf9lSSxNCnv9MDN5Vs2sXFaeGv895%2B%2FqlLTTsi%2FQZKNxo8%2F270xz%2BJpxnLo5fDlgRMbpMuty2MSYjgga13iCIA%2FyZRbIMzw0jQSoMM4wI2eELeNf0gXngP41c6xrpuAUBC3BrgS4RfmZa%2FcthAuRa%2FZAscvoprZr071J0K4g9Xu0Yr%2FLliZLKjNHWKduzOvyUNLRF9E6a1qqT726mYMPdOmu8Z8Q%2Fe%2ByB%2BbgWgeqdQW5HSF%2BL4qXpxD92kJyXsLxyV54Byq5Bvkyzy66WGQJgBPw4nBz2cu677zC5IHpUULuk4CkQmfKD1lgGS4B%2FUV8RH96zo0lgCjeaBZLYmr1e1nUxWRHpIlDuy7ky86eSQESSAK0AHCONsjjFtgNr51Bvf4EizgNdCouSQ9NYeWIf4y5O4GVMO0iP5dSC%2BCizyulAEWfdfXYEy6qKC4%2B8KKMtDKYpbtEZ37j%2BKMP6H3cIGOqUBPsILf1%2FY8BDLZKzuXnosiEKpE8%2Fedv3GPRyCQMBpAgzA%2BEL8CqV7cdjeRtnGA3rmeAc8oglkMTV1hfC5RY%2FuT6LWoYzq0xOZqyoTcpcrYWl5ZyZc0Icyx4n7gHr2biZMxZdfhFbY80kOTCCmXHjWIT5prj%2BM8sM4V1YQ5mISTVnO%2Fqw7WLy7nQXuXoYoKIUTCx%2FpOkAEY%2Ftl3m9eah4ZFFieskKm&X-Amz-Signature=48f2e4736052ec0bf0e7edb413022bf13506e18b58922a9df9446ea4d78539e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WCVZURO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpjvfbCgwyMg1DgUUjlt%2Fm06lSSA7%2BA8JqZyF%2BoWi1lgIgJs1Hxlp%2FBp8c22oiDIfKqtfybqpYUofmmZVVpBXOlWgqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9ES%2FXwYGQUzpNfnircA2dmidH8bvnFgM9mbeXtQMOGfdqbIxIjqGFcX7lVEHBKgHKi3gBZh3Gufzi8sRdxGOQJdYKEzZUWdkPyy%2FRQSFmC9aj58WeoBNGgbc1bMe3fqAvydF%2FUBEpwyjGNztT64q1Z3cjExVps74DEny6tLMPGzBMhQZ0ukwtcHVDOYjBax8Mwvm%2B6um55lqVi9xR0cbzv5VwDPZSJmxcRTMnyxmv0%2FZDlbcF95h1VDlzFaJ2oEg4IDAFA6rIRg3dMqPnkE13g1fDI66D69tVtKM0tHqDNH%2F6w1DrVdhlSKFeTNjUI09jsWBPD%2BlUlEl19fma4y84lcKbXPxhG%2FYYFHNNQfWL%2BLmh1on7d22L0RiiyZjeSO0M3C61QJ3WvTJNIQDmErG7vkTV98GamFL7yVjo5duno9cxKFU%2F4wu8SCc9h9i3Hp5NZjjJOo%2FtiCUMQu1lSFqCUGyqxwHGkKTbnX9bicuKZzArqltqTZRT%2BQ6BVNyJMOyhQWrBplmrWXXgWlXbr161sw9HjdhF62XsW2JC0Pze1WrbrWJse9eoI43eMGlmbtd2RarLs%2Fi%2Fk0CcceAcFJUzYrti5%2BhzcYA4OUyqsL0ucSalt4dIjRsMT98vAsKsCSxN3ZZpz9z%2BJIepCMLeI3cIGOqUB2N1FFzkcdS7R2U6TWlMdidYkGEujzA%2F84b1n4xHx5ZbiDzZJv2doeQ2AXiJSps%2BSg2GU5cBUAZsV%2FukrsyoUY%2BDotmOL3V7Cc3lhY7WDDKwpOej%2FjL874%2FWhevsVHnlzzEA%2B2Md64vvDKFKTW3yhgWHbaTZB5ASj97FZ3qNpFtC2V0zMKKP6Zhtdx07dfjYm%2BgJDOCwir5HXgCf4ZSjCMeiltDmw&X-Amz-Signature=3076fb6802654d119537a1da41d9a878359f581822d1d3ed1e34416b5fd13c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJPAKISQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVj0v3zn4PBglDPH%2FpRWQARxp1aEOO%2BmkQTBitVB%2F7zAIgEkczzoG2vYFAlezFaU9q51SFHKMPKRN7JNyr%2BB%2B5JswqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3WuUbMwzfX2UjkiSrcAxCQxtdotFNDsBl0z1NtdXfMQNkeHC5pHcuV5hQu9BZXmiMnyobmBz9hDSOGC%2BhzoSOgcdcHTm69leMNGB23147ttmqLHeZu%2Fa%2BEARoj2DJTqvC4Hllm3NEICPoIWXiKJUXGBJt%2BaDIDOtzx4SNPy%2FT6XCKmRjfzdgJA6OZ5EyGy6k49j0pVSytf41QNKoTGj0XXZ8sMefAQdZ8wSEab0QIZ1zrxqXJoyo6e1UpC3G0DaHfYkuxfuyDqhOFZkELMYZ05RloPdPuWgUMPuDlWnG4fPoc9PrHU8AJaJ%2B72w7I4CRcpXrKgqxH%2Bm08hl3HuLVrMa706G6%2BKEXeFK3No9sIeJ8qQpdTyo7%2FGt9gvVhYx273MYZ19wO1UYrss6lr4CfEsGkpJPC8pwXF7U1Ldvy672vSEi%2FHYe%2BNfDvX46gP7i4lhwwnTYTQxPRg4ULM1JM7AFKfzPHKtrNRwVAWL%2B5jTLP3%2BsFxgxEzkO6fR1NwrwQ7PNnPie4TvmyMg6jxjhhptupttmrgIMb%2FsJdhwxOAp7yyDXlGM%2B%2F%2FTWddeuGWKfJRV%2FaDf98nw%2FX2CZKBq4e5VUZnsfPc7pWsg70n8r0%2FUp46ww5D2DJblFe1aovHA4Lh0rf8bUh8REDJIMJWI3cIGOqUBquGpamvC%2FG%2FBexZWCmY8NHfj1oaL9A6C7ZqqkRGfrSqkmvnHGFuVU3TIMbBONkvr68T0Erg7yxs5mcJE0IqrtwkWtMjF%2B9qaz7F3Twbu3RaGzZHJ0cRe%2FPJuEvWYoV1sObctVgv7E2WTxvAfgLLxQXhn1plV3bEBXXVabmChQyukj7Q9O1Q%2B725kd0RoLJDldE%2BTFr1xLkWBUvj%2FD%2BaVOuXzon37&X-Amz-Signature=2483ac93dc85f73d0767d34f5bf189fd03e7e4f0093db86c26423d871c44cedf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
