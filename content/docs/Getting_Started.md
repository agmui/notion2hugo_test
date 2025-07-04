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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTK23I6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD%2FlpTwUxWBgT%2BfTOK9noy%2FwLoDbhx0SzjA6OS0iwlEQgIhALYjxJo82yeoxF83nrNytaN3YkKVqp2muiAxlT9axfH6Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzBeHFeNXS%2Fyx9x%2BfUq3APCRfzzfN9MZbw%2Fqxunb3GhjhXiaoYUh1daO8%2ByYvVpAC5TBxyDlEH%2Bej8eRyywTFPIA3mWtj3wr9ttGND8mBrWfzkNrKFuC9%2FtwDQIfMgT%2BAOnkGecIv%2FXwrHSdQ4KOVMydlpncO8GgTLNAi7khlHHniT0s1UkElFepvsS2e0PJ%2FEMELOEgaSGIqBNPs3KIpPRqq1kjzQGKlzojHEV3j2zUpKELq8yrLmUmXMyzbCFk6gvZj5C%2Fy%2Bc8qODXB0fyX4fFFjx55j3oj8ZVaLxP36ssTJSTYwSKMvkBtJz9C0nDw09e2xXSR7cE4dFwHd0qeFBKP9NaraPXi6WxSraR4g0UYczxeKM8q7iKA%2FExZPHVUy8oM6eyBNUcgnyl0nxsLdSlebYOaANzRUOUlOU3F8Qk%2BiLobggARtREshmIfpiYCFaU9LrIFfc%2BkpsQrGx8f8%2BxrAZjVu0b1DmpTEzid%2FJNydteUsJ%2FQLD%2BOSTnsNdUvzRJgjCl7EjGoxcMmnqKnlKWOdKllPcJeuyc754y15AmFMV9hDgncjBhDsUo8GsyXWpXwz380qoSA0N8IDPhvPu8Evvrm6K6BVD2px%2FCM5LLd4Da7Qnu8yM982xTOb7SIcfhik1Kxu47NlJLDCExJ%2FDBjqkAe%2BFlzczmwpLafmg3ViUR8jkPIRbzS1w2HHOsnybP3exkhCan2bgo3uDk50mlUc94uZs1FV4lMHHW5bFsRluj6M98QGncVXnrbHzgskWFF1ehxcmKO7oyj8HT92eyCqxFwWkWeRxPG%2BZt9zaABne0aAd0WOcmxuxO0kfadkIWQm%2FIAW67fh%2BLq3nv0oO7e5ndpGt3mpWKYh0IKZdDNIzh12CrSP8&X-Amz-Signature=a05166ed298814343600f96fd171596b6165d04ea2e8165d1e71d458f5f48e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTK23I6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD%2FlpTwUxWBgT%2BfTOK9noy%2FwLoDbhx0SzjA6OS0iwlEQgIhALYjxJo82yeoxF83nrNytaN3YkKVqp2muiAxlT9axfH6Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzBeHFeNXS%2Fyx9x%2BfUq3APCRfzzfN9MZbw%2Fqxunb3GhjhXiaoYUh1daO8%2ByYvVpAC5TBxyDlEH%2Bej8eRyywTFPIA3mWtj3wr9ttGND8mBrWfzkNrKFuC9%2FtwDQIfMgT%2BAOnkGecIv%2FXwrHSdQ4KOVMydlpncO8GgTLNAi7khlHHniT0s1UkElFepvsS2e0PJ%2FEMELOEgaSGIqBNPs3KIpPRqq1kjzQGKlzojHEV3j2zUpKELq8yrLmUmXMyzbCFk6gvZj5C%2Fy%2Bc8qODXB0fyX4fFFjx55j3oj8ZVaLxP36ssTJSTYwSKMvkBtJz9C0nDw09e2xXSR7cE4dFwHd0qeFBKP9NaraPXi6WxSraR4g0UYczxeKM8q7iKA%2FExZPHVUy8oM6eyBNUcgnyl0nxsLdSlebYOaANzRUOUlOU3F8Qk%2BiLobggARtREshmIfpiYCFaU9LrIFfc%2BkpsQrGx8f8%2BxrAZjVu0b1DmpTEzid%2FJNydteUsJ%2FQLD%2BOSTnsNdUvzRJgjCl7EjGoxcMmnqKnlKWOdKllPcJeuyc754y15AmFMV9hDgncjBhDsUo8GsyXWpXwz380qoSA0N8IDPhvPu8Evvrm6K6BVD2px%2FCM5LLd4Da7Qnu8yM982xTOb7SIcfhik1Kxu47NlJLDCExJ%2FDBjqkAe%2BFlzczmwpLafmg3ViUR8jkPIRbzS1w2HHOsnybP3exkhCan2bgo3uDk50mlUc94uZs1FV4lMHHW5bFsRluj6M98QGncVXnrbHzgskWFF1ehxcmKO7oyj8HT92eyCqxFwWkWeRxPG%2BZt9zaABne0aAd0WOcmxuxO0kfadkIWQm%2FIAW67fh%2BLq3nv0oO7e5ndpGt3mpWKYh0IKZdDNIzh12CrSP8&X-Amz-Signature=b170bb767850769066f007f9b0eeb4fb230ba78585964e067f9c7b334f146b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTK23I6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD%2FlpTwUxWBgT%2BfTOK9noy%2FwLoDbhx0SzjA6OS0iwlEQgIhALYjxJo82yeoxF83nrNytaN3YkKVqp2muiAxlT9axfH6Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzBeHFeNXS%2Fyx9x%2BfUq3APCRfzzfN9MZbw%2Fqxunb3GhjhXiaoYUh1daO8%2ByYvVpAC5TBxyDlEH%2Bej8eRyywTFPIA3mWtj3wr9ttGND8mBrWfzkNrKFuC9%2FtwDQIfMgT%2BAOnkGecIv%2FXwrHSdQ4KOVMydlpncO8GgTLNAi7khlHHniT0s1UkElFepvsS2e0PJ%2FEMELOEgaSGIqBNPs3KIpPRqq1kjzQGKlzojHEV3j2zUpKELq8yrLmUmXMyzbCFk6gvZj5C%2Fy%2Bc8qODXB0fyX4fFFjx55j3oj8ZVaLxP36ssTJSTYwSKMvkBtJz9C0nDw09e2xXSR7cE4dFwHd0qeFBKP9NaraPXi6WxSraR4g0UYczxeKM8q7iKA%2FExZPHVUy8oM6eyBNUcgnyl0nxsLdSlebYOaANzRUOUlOU3F8Qk%2BiLobggARtREshmIfpiYCFaU9LrIFfc%2BkpsQrGx8f8%2BxrAZjVu0b1DmpTEzid%2FJNydteUsJ%2FQLD%2BOSTnsNdUvzRJgjCl7EjGoxcMmnqKnlKWOdKllPcJeuyc754y15AmFMV9hDgncjBhDsUo8GsyXWpXwz380qoSA0N8IDPhvPu8Evvrm6K6BVD2px%2FCM5LLd4Da7Qnu8yM982xTOb7SIcfhik1Kxu47NlJLDCExJ%2FDBjqkAe%2BFlzczmwpLafmg3ViUR8jkPIRbzS1w2HHOsnybP3exkhCan2bgo3uDk50mlUc94uZs1FV4lMHHW5bFsRluj6M98QGncVXnrbHzgskWFF1ehxcmKO7oyj8HT92eyCqxFwWkWeRxPG%2BZt9zaABne0aAd0WOcmxuxO0kfadkIWQm%2FIAW67fh%2BLq3nv0oO7e5ndpGt3mpWKYh0IKZdDNIzh12CrSP8&X-Amz-Signature=195ee467a2bfa3fe40a85ed5d4a05ef62dba6473e2cb86fa3dc28a2407abaa26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKD7XFD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIDW585La8puMAqRCis4ZCSt6YOHGR7wY4J1goXTi7KHNAiAQZ3C3hu8q8UINAMKxkYmr3wOprSE6YVRjDW3dAx8ieir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMM6MH7jb%2FI3aaJvJ9KtwDmLnH14aZ0Y06%2FP%2FqbWVbZpIYPSjHpWFqf5w4L9tpEvVE9FFHnTuxsnK%2Fzw%2F%2B9vEVheJXheIiflOgbGUFxEU2tqgdBCAv6zaENP9Sb%2F3umXoRY6hSpytj2a3JLOxY%2BvL1yPg6ApfDeS9q2aBLHARTbWGlzwc68z0piQqCK5vBZHS6aNbVB4cfiNN3DzraMKWbi%2FZK6vI9TA1kGjTW1MBw8sgmF2grPHyYkWw%2BaOEkJNNGA5dPiMxGxQG9W6Y1OHruGbTROlTSq4LEqN4pe7fSONUoEixvrvXUeV99VJNjgV%2FZDRI1nvj4zp0xmloI4fVXZoOyUbkJX7EYEcOKrTprA4TnnEqgyvvFFRBPZkr7IKiTIJZnpckxOS1yWQImLjHC0urNWtvOoGbEx1UK1QVf8K6JMKWAlJK8O6%2BGAkYCS5zs8IJwc%2FhL9LIl%2F8UlPPNgE1rEHXpf8%2FDdU%2BamHx8z46Kguult9PBzLSe7zZ4%2FcPpmpOTYcbGGMTmbgYwJjnzjOF003mPoVqxHPhUMYfPq33X4ysxkNLgK2ndZ8%2FohUl0faRcDU%2BZ0%2FFN721cm9FSMuOhfRGBTo6Xs8z7eecxBvNpd4TT5cG6Dx7aqonoHW9ZK91ZKjN%2By5MufNmQwlsSfwwY6pgF26dRHP2Nod1UQUN7NooHt8ELTQJwBwMRQSoCdPs1I3EgbHbgxxU852cOAruPtoh0DeFVoi71QPraXbtAlEc2jwxzKKqFwajE6kWUqTrwpB9SHjx2YMZURioWOMaw%2BZbDfYUhNSxadl6WZe%2BvAFcnMnkvE53WRT9X7uH3ke0z2jQkzAm8yG8oSAoBDV64cZaKkraHxdISCjzpe62qIWrDnRt21MVtW&X-Amz-Signature=acef7b5b5482abdfa832d5fc8e00544edef4df08c30ac755fd02074a8ae647be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7X7NRD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIElPEP2fT5tsUQnw1khk4ZhlHmzekVhJdvucfOB4xGbbAiEAoLDTGexHPkZDo8HtR7sikmuqAPKvhLdrrxyBXWd%2BBGwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFhrSAgKEEwJNA5SLyrcA9PIwA7coIrIABWb5MYnGxJDPyr633JGHFsGsiYSvwXw7tEjixc5SxwM7wqKeLRjMQQzR3u0X0iErpXWutpNRyab%2Btk3ZqmGObnFPELRKWwsBKoRBVlMDwW%2BI1ZB3wumVaHX8wSIFrwmSO6oBae8%2FgnEyVXKNppz1WO%2BZyoF%2BfFdvx04NR%2BE%2BQebO5xpzjqAdifDifKADD8jZyhWafwGqdxmsvnp9475ntfdpedSmo7TshZVguv%2BA4yBLswTEY3RtOcEuR%2FCSwYV79YWofn5UcksItfL%2BtDXzXYJgxcJQ0b%2BHiyxJrWlLCwqAl8gtluz2WcmYmsehurnptUlty%2F3647CAhde0lgDHAWd9mU79AAiLqlLW2sJWD0IfJ2CyouokUvvfXU%2FdLNaBE8QJcNavc9P%2F6B9KFK0TFbUFOMNKZCcL5n8H4RcQUz%2Bkpnz6aF9Z5QCXphTELXVwpFc2YOnxyhuJ2eZ%2BE9%2F6XE2QduqvoZ3gI2DT96sK0ww26YOfjQ%2F6tNx%2BSNiIW2T0sNfptrAMAnuI%2FG9UHfSfjg55b4wW%2FK2rDW9KzNXUIh84o7ga1%2F2fnfdpcIgO%2B3SZTc4L5Xpa0B0EJXk9FYRQDnbIJB9E4YdpUGiCivH5ZZzqZFxMILEn8MGOqUBPhNV1CMcrQ4ftHV7PQItw%2FnlDjELVghP3D%2FNkbSwYrloIs9FiHW9eraBj2P%2BrHH%2BlEPzIHvUl7QxYIbFyirHQtHZzPR13QdR%2Fm%2FTjFNhzcRqRcRUnx1dxb0AYVWa2aOOo5aJdosAqvdC%2FVyL04LKdl0XfKuikjfrkc%2BpQlKc20V7jpkbNkEBdnL66%2BZyQ9rQqLbRx%2BPbdTXprhegriFFOE73mD9h&X-Amz-Signature=d0786c16ecb13df4bc42bcaed2505fc1a2970f8a6913a86b11c3fa636f965dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTK23I6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD%2FlpTwUxWBgT%2BfTOK9noy%2FwLoDbhx0SzjA6OS0iwlEQgIhALYjxJo82yeoxF83nrNytaN3YkKVqp2muiAxlT9axfH6Kv8DCC8QABoMNjM3NDIzMTgzODA1IgzBeHFeNXS%2Fyx9x%2BfUq3APCRfzzfN9MZbw%2Fqxunb3GhjhXiaoYUh1daO8%2ByYvVpAC5TBxyDlEH%2Bej8eRyywTFPIA3mWtj3wr9ttGND8mBrWfzkNrKFuC9%2FtwDQIfMgT%2BAOnkGecIv%2FXwrHSdQ4KOVMydlpncO8GgTLNAi7khlHHniT0s1UkElFepvsS2e0PJ%2FEMELOEgaSGIqBNPs3KIpPRqq1kjzQGKlzojHEV3j2zUpKELq8yrLmUmXMyzbCFk6gvZj5C%2Fy%2Bc8qODXB0fyX4fFFjx55j3oj8ZVaLxP36ssTJSTYwSKMvkBtJz9C0nDw09e2xXSR7cE4dFwHd0qeFBKP9NaraPXi6WxSraR4g0UYczxeKM8q7iKA%2FExZPHVUy8oM6eyBNUcgnyl0nxsLdSlebYOaANzRUOUlOU3F8Qk%2BiLobggARtREshmIfpiYCFaU9LrIFfc%2BkpsQrGx8f8%2BxrAZjVu0b1DmpTEzid%2FJNydteUsJ%2FQLD%2BOSTnsNdUvzRJgjCl7EjGoxcMmnqKnlKWOdKllPcJeuyc754y15AmFMV9hDgncjBhDsUo8GsyXWpXwz380qoSA0N8IDPhvPu8Evvrm6K6BVD2px%2FCM5LLd4Da7Qnu8yM982xTOb7SIcfhik1Kxu47NlJLDCExJ%2FDBjqkAe%2BFlzczmwpLafmg3ViUR8jkPIRbzS1w2HHOsnybP3exkhCan2bgo3uDk50mlUc94uZs1FV4lMHHW5bFsRluj6M98QGncVXnrbHzgskWFF1ehxcmKO7oyj8HT92eyCqxFwWkWeRxPG%2BZt9zaABne0aAd0WOcmxuxO0kfadkIWQm%2FIAW67fh%2BLq3nv0oO7e5ndpGt3mpWKYh0IKZdDNIzh12CrSP8&X-Amz-Signature=05e4787bd67763cb50d2a1718ce33be984fe3dea11079a40e60c397edddbecb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
