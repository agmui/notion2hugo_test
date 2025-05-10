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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV4FXHO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGlEm91I4pBCo2mN6PVH6tW4mj9tviz3F9lQtjtNaYXgAiEAyIi7LI%2FKABPW5cEzAH8xvTWVNQf%2B5o2%2FWBA95JmLAnMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ILEgxSyaEDBkkuircA0O3wtAJD%2BXdMt3RP%2BYFHwyXPbtbgKrAtYxFWL3ijc65bTI6X%2Bnt%2FLVR4YGt%2FOkD5jpBCbpQRoMICMId2jagQKsMkTqXWlwfHP6bx%2FaDCOG4bjaDxshvVAtY3owAMdoBkQGFGuQPQaFZ9RUa%2BUR8bEiGcno0gLPJUz5kyYJ%2By4MXu97Iw94gvB2xmqTu2kgqRXkPErsfyZK0rHyQ8e9kg%2BDPtK2R%2BzcFfHSlnPkQdEPlufEmkXpGYBIj2K%2B%2F45RmFOywlqsMJ%2FJqZHLdFIgAPdloF%2FgLiBiG3wQMIK6%2B1LlhTxN8mLCkqWQw7bKxPBvzksdpPMshKLfLnyJZ%2B2T4KJyXtmOG7etyk8pDoRfuqbVD%2Fb7%2FRH61qHP1WpJ7cxUlMsXtGNApfTpPefIxwBODuAZ5gEFbBba9QlZdI5hPQ5r%2FOJGbpUaGOIulh4luOPy14EF5f%2BhOth1%2B%2FRaZxcbggTuGzP57Dg2R1jMlnBKfGh5x%2F202l9kv1Qhc8jT46%2FMFyJmKYe6%2FpbHLtd%2B%2FiPbEJU9tj%2F%2BCKTkjWglXx%2B6h7svLm8AQEZrf0GY430RMLSrsXxb57Mvd7lRJhAfvryKdSGlW9jfIHrrbNqCwY58Uvz408QmszRej0Jg5cqCCMMyK%2F8AGOqUBpIRnyMd%2BFq75swM9XfypJEObrjRvIAMxilqNGs7tOyr7oehj4HblMrotsUSjBjRFmo%2FBI3F%2BPEBIlVa%2FtR6kIvnpCg%2B1vxAVQIyjsqkypkpqhkflS1gTFvpjeX6N69yXJrR%2Fz%2Bcno7Kz4XigJqdZjQ16j4Brf0%2Fya%2FW2uMb96TnbSlxDjSW01bvl1NxZj0%2B31BKW0%2BitD7ZaSh62B96Bw%2B5xcRqI&X-Amz-Signature=5907bb0cdc789cfba67f2416e44df3fe9ec7d26d3d5644b2fe9c963aa993747c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV4FXHO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGlEm91I4pBCo2mN6PVH6tW4mj9tviz3F9lQtjtNaYXgAiEAyIi7LI%2FKABPW5cEzAH8xvTWVNQf%2B5o2%2FWBA95JmLAnMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ILEgxSyaEDBkkuircA0O3wtAJD%2BXdMt3RP%2BYFHwyXPbtbgKrAtYxFWL3ijc65bTI6X%2Bnt%2FLVR4YGt%2FOkD5jpBCbpQRoMICMId2jagQKsMkTqXWlwfHP6bx%2FaDCOG4bjaDxshvVAtY3owAMdoBkQGFGuQPQaFZ9RUa%2BUR8bEiGcno0gLPJUz5kyYJ%2By4MXu97Iw94gvB2xmqTu2kgqRXkPErsfyZK0rHyQ8e9kg%2BDPtK2R%2BzcFfHSlnPkQdEPlufEmkXpGYBIj2K%2B%2F45RmFOywlqsMJ%2FJqZHLdFIgAPdloF%2FgLiBiG3wQMIK6%2B1LlhTxN8mLCkqWQw7bKxPBvzksdpPMshKLfLnyJZ%2B2T4KJyXtmOG7etyk8pDoRfuqbVD%2Fb7%2FRH61qHP1WpJ7cxUlMsXtGNApfTpPefIxwBODuAZ5gEFbBba9QlZdI5hPQ5r%2FOJGbpUaGOIulh4luOPy14EF5f%2BhOth1%2B%2FRaZxcbggTuGzP57Dg2R1jMlnBKfGh5x%2F202l9kv1Qhc8jT46%2FMFyJmKYe6%2FpbHLtd%2B%2FiPbEJU9tj%2F%2BCKTkjWglXx%2B6h7svLm8AQEZrf0GY430RMLSrsXxb57Mvd7lRJhAfvryKdSGlW9jfIHrrbNqCwY58Uvz408QmszRej0Jg5cqCCMMyK%2F8AGOqUBpIRnyMd%2BFq75swM9XfypJEObrjRvIAMxilqNGs7tOyr7oehj4HblMrotsUSjBjRFmo%2FBI3F%2BPEBIlVa%2FtR6kIvnpCg%2B1vxAVQIyjsqkypkpqhkflS1gTFvpjeX6N69yXJrR%2Fz%2Bcno7Kz4XigJqdZjQ16j4Brf0%2Fya%2FW2uMb96TnbSlxDjSW01bvl1NxZj0%2B31BKW0%2BitD7ZaSh62B96Bw%2B5xcRqI&X-Amz-Signature=71358a86344e0648a548f050e6408ede46cc9bd2298f975ff1448c22f56ebc47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV4FXHO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGlEm91I4pBCo2mN6PVH6tW4mj9tviz3F9lQtjtNaYXgAiEAyIi7LI%2FKABPW5cEzAH8xvTWVNQf%2B5o2%2FWBA95JmLAnMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ILEgxSyaEDBkkuircA0O3wtAJD%2BXdMt3RP%2BYFHwyXPbtbgKrAtYxFWL3ijc65bTI6X%2Bnt%2FLVR4YGt%2FOkD5jpBCbpQRoMICMId2jagQKsMkTqXWlwfHP6bx%2FaDCOG4bjaDxshvVAtY3owAMdoBkQGFGuQPQaFZ9RUa%2BUR8bEiGcno0gLPJUz5kyYJ%2By4MXu97Iw94gvB2xmqTu2kgqRXkPErsfyZK0rHyQ8e9kg%2BDPtK2R%2BzcFfHSlnPkQdEPlufEmkXpGYBIj2K%2B%2F45RmFOywlqsMJ%2FJqZHLdFIgAPdloF%2FgLiBiG3wQMIK6%2B1LlhTxN8mLCkqWQw7bKxPBvzksdpPMshKLfLnyJZ%2B2T4KJyXtmOG7etyk8pDoRfuqbVD%2Fb7%2FRH61qHP1WpJ7cxUlMsXtGNApfTpPefIxwBODuAZ5gEFbBba9QlZdI5hPQ5r%2FOJGbpUaGOIulh4luOPy14EF5f%2BhOth1%2B%2FRaZxcbggTuGzP57Dg2R1jMlnBKfGh5x%2F202l9kv1Qhc8jT46%2FMFyJmKYe6%2FpbHLtd%2B%2FiPbEJU9tj%2F%2BCKTkjWglXx%2B6h7svLm8AQEZrf0GY430RMLSrsXxb57Mvd7lRJhAfvryKdSGlW9jfIHrrbNqCwY58Uvz408QmszRej0Jg5cqCCMMyK%2F8AGOqUBpIRnyMd%2BFq75swM9XfypJEObrjRvIAMxilqNGs7tOyr7oehj4HblMrotsUSjBjRFmo%2FBI3F%2BPEBIlVa%2FtR6kIvnpCg%2B1vxAVQIyjsqkypkpqhkflS1gTFvpjeX6N69yXJrR%2Fz%2Bcno7Kz4XigJqdZjQ16j4Brf0%2Fya%2FW2uMb96TnbSlxDjSW01bvl1NxZj0%2B31BKW0%2BitD7ZaSh62B96Bw%2B5xcRqI&X-Amz-Signature=57b7dc0b07937cda15f9caa19484bbfd4f45f16a20fb721b3592a472ffa0fe72&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFY2ASH%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEGVK5qkoM3orSsQIYgMnfB1uCNmIjExBG6w5u0Z6ZPqAiBXHI6YLEycb1cgPv8lyhjppfJXtHweXl70agGba95N4iqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2FSmn8kbIztCyLPOKtwDHU4HEddn9T%2FKQbgCrj65GOjgKGgCpZskOzWnZ4VggkMP3VvbS6uuX5a2Hzl9KXxUQ%2BNWWFH5cFpfS1d0c60eCpy4ki3vzdSzkSXRn%2FNMIbsvwrfeG%2Fr%2BA5EAJJxeRF6eEAQdVwYwrMFEtSjI%2BnSrKoDNsLRDPr6nntAnkjWJ%2FXD22AhuL9GdNfBrUUgsjOlZ8AyeTIxPgN8gh%2FdWqyvbO0pyiLaFY9srp858IyLWEStpGNH%2F0%2BFV8RErFRPapzfsKAJGvI3k%2BdJASSUROD5NHKpOqI0o7KQ%2BDq7SQrLqleiAku4w4oIGKJnVuS%2FaB4zYqkt1FTLkv1J3qqfwp30CnmyxxrVKlMovuidPavMu3loOJQsv2YPUr%2BSPWuc9kAjICBQTw5oAjbuCERmylGXxYgur0cfI7oVcb%2BvHpmiUyXmfp3MqB4GoXh6wU0t%2Bp4uyuH9Wql5o4Sn4o16QZlSx4RfwARJmtT5g6kk6%2BLB%2FwJ0%2FigPFevX7hv3o9daozHEeVXfzT17jqb54epsX1o5Pui5U1nLzBGa0isSoeZwvxZX2rj4bKLN2G6vq%2FO34UyVLDV3HqRoZHK5S%2FGHO85aq6YSWzkA0cFahxyu8gqjpsYROtGCVum8Ubj6045Awyor%2FwAY6pgFtlKV5xo6vRky406I9O5ZMaJmz7oXv16UgHZX3C1KfzgN8qqObFKPwJ6vrBO5doSYw6TSq2MGPDHjWN1BYAUffnhTj5pV%2FUP5Wkly5%2FdcRc%2F%2Bm4WWv%2Fg5IC0%2BLpYB4cRozsA3FrdeeBL0DxaXwK%2Fz6%2BZEf99c8JrJNwIY%2FFeRHWn%2FGgsDMsGxAKD%2Bh3%2BB7i%2BOQU8jaVFAzzVr5wwXjzMaHiE2RA41Y&X-Amz-Signature=f14b30e8329c76c0110d59a9932ca9337ab95cd99e8f60a4d10405d3060bd05b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HK6SUTJ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCzgHp5Z%2FjsRB7FdlpYjn%2F1FSmax%2B1pRE6hqNAfAqGoRAIhAI1oyXy4bnAjreU1gZiTuRl3qd1KT1US%2FHMh79IJTr7LKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaRD9iPE%2BLWSe6u%2FAq3AP1OUhXtmMJGLpYUaCdDd62aev1iRhJ1TyAER8K99N4po0I6ZEY9f35uknQD0TtIK29jevSlxaQOPXbJSJKDYq%2FLPGsp%2BBDTE5V4aiZx746%2F40CwmcpQC7ltEA%2Fai8iYjcwaIjo4J7mce110cZB5zhcldhYbcXBChjQ%2FePnveko%2FHwdrXV87b7bX%2Ff%2FVHmCRpRNxQVZPricNbL87DkTgrJSeozew8dm9eWTBL1nZ8lH8OUEjbexK8t3bKlY9we%2FdO6UmI6JxbBsWfymgWp%2BY4OoZs1ztZz3jlXS3gUmOBXJu8ufzDK4mm%2FkZwTM2RpFYzqxYkYGnKrDcVeHdekoSGDGeoO%2Fin5I%2FETU%2B8HfWjGUjTh3QHHtBOWDkvgmDm%2Fn%2B24hsn4dLdwqDrpx9gzJl7ob9RwABYfCCLNzVRjDMbGkp1EyxUoqkrc97izWKHxEDN1BIOY4yybKRtkxO2IhBOabtldo2slIRlfw31T2tPITJxEYpm3CYZjwefPmqgQlMa8%2FsTFSiqYM2b8tWf3G4UpJsmPOmsQ%2FZI5rRA%2B9Yge4jWjZdzH%2BOWkX0aN9nHbMG%2BGLxIs312FWKPckSyTQRYTOgWlH1Y%2FsKXlYLWgzHLQ23SepfYe7awlZlbbk4DCciv%2FABjqkARarViVn7Ax9AxExreR7%2FLN8YKkem2IJsM16of4Q3h5wBhr%2BOXreQkWMzq3Y0YVvm8fZZ1Kzqu6Gbjacl958HqcNfJ3OiqTFksCBe7rIXVEJO%2BWQLFViwJepZ28zDDZWi0ZMpJJWApBZyyaQFja4avmzhS%2B9d7PbxKus7QsFijhyJ%2BoUfdaujPrCEoJEkn0zZ7DnSPsmKcEBDbV6cQ975A%2F3OiFt&X-Amz-Signature=855f422b1fbbe8a19b23ff3d8dc4e14aac295ebfee2ed4a638c84e1dd770295f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THV4FXHO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGlEm91I4pBCo2mN6PVH6tW4mj9tviz3F9lQtjtNaYXgAiEAyIi7LI%2FKABPW5cEzAH8xvTWVNQf%2B5o2%2FWBA95JmLAnMqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3ILEgxSyaEDBkkuircA0O3wtAJD%2BXdMt3RP%2BYFHwyXPbtbgKrAtYxFWL3ijc65bTI6X%2Bnt%2FLVR4YGt%2FOkD5jpBCbpQRoMICMId2jagQKsMkTqXWlwfHP6bx%2FaDCOG4bjaDxshvVAtY3owAMdoBkQGFGuQPQaFZ9RUa%2BUR8bEiGcno0gLPJUz5kyYJ%2By4MXu97Iw94gvB2xmqTu2kgqRXkPErsfyZK0rHyQ8e9kg%2BDPtK2R%2BzcFfHSlnPkQdEPlufEmkXpGYBIj2K%2B%2F45RmFOywlqsMJ%2FJqZHLdFIgAPdloF%2FgLiBiG3wQMIK6%2B1LlhTxN8mLCkqWQw7bKxPBvzksdpPMshKLfLnyJZ%2B2T4KJyXtmOG7etyk8pDoRfuqbVD%2Fb7%2FRH61qHP1WpJ7cxUlMsXtGNApfTpPefIxwBODuAZ5gEFbBba9QlZdI5hPQ5r%2FOJGbpUaGOIulh4luOPy14EF5f%2BhOth1%2B%2FRaZxcbggTuGzP57Dg2R1jMlnBKfGh5x%2F202l9kv1Qhc8jT46%2FMFyJmKYe6%2FpbHLtd%2B%2FiPbEJU9tj%2F%2BCKTkjWglXx%2B6h7svLm8AQEZrf0GY430RMLSrsXxb57Mvd7lRJhAfvryKdSGlW9jfIHrrbNqCwY58Uvz408QmszRej0Jg5cqCCMMyK%2F8AGOqUBpIRnyMd%2BFq75swM9XfypJEObrjRvIAMxilqNGs7tOyr7oehj4HblMrotsUSjBjRFmo%2FBI3F%2BPEBIlVa%2FtR6kIvnpCg%2B1vxAVQIyjsqkypkpqhkflS1gTFvpjeX6N69yXJrR%2Fz%2Bcno7Kz4XigJqdZjQ16j4Brf0%2Fya%2FW2uMb96TnbSlxDjSW01bvl1NxZj0%2B31BKW0%2BitD7ZaSh62B96Bw%2B5xcRqI&X-Amz-Signature=e3d46b5db79be5f3390a8182b7b6fa9902d534061dfec448c8daff9cfda2aeeb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
