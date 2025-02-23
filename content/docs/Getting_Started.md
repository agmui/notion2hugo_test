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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RLAZ6C%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmmineWBcteEGWwrRLqqXMIijqgX%2BSLi6jSGphOqMU4AIhAOzp%2Fs04AvfRPp%2FJ3944QoKLlwTG%2Bq0ilLDOLqNg%2FMLqKv8DCB8QABoMNjM3NDIzMTgzODA1IgyPiZ6nw4e8MApV1nAq3APoNuKg6YOPUJqOjg4pQhOJfOrE6%2BLdrVE5qEGYEDH8McrX0a4BjbxACbwKLPm2X06Qb5%2F%2FoYnsdZncss8lnOlfXyfzmzpxDLtqst7qx2UBoIZh9t9vdnhzTmeu9ljPj0NJAnyxTH9EAumCgXlwTLX6e6YY3UPIeXZNHeuDv6a1U5lYcR5Kiotys0h8gZtyJLnajMYTt5qG2hJl6KXGqNv4VpSN0dnxdT2eWxmdz6KF9Chj%2F16yf%2FMxGEUGgLLJlZGqw1IST7rLUNHHpW47QNTpAO3eaCS9aXDzZ42C%2FLYSB9wrw3DH99lHGsKflrgL7yB9v0ng90OEtSmRUajryDSzhaSsBXH8clSGKPlkHWtHHCkvzDdLn%2FHuWI8RRgry1M8xKcYOKkOWHbpOijLmQHn0DEmAfyxhq36Ozv0OGIYSJ9qFsPoZaslL65hgJt6LsdBcS4VqIj7C1YSbgDiY9X3FLOVzEOEuBcqU0TINdp%2FwUYJduHwJBN%2Bsdal4a5nwOkurMG46c6Y%2FnHAhHtJOxeeJN7HVLqDjUmRjKP%2Bv4PhF6XYummHY0n2aqXB0PpL7K1vRP9L520Vbr15XKcpWekczpwsZrAeaQSEcjCXkiNvD0zYn57UXxjwZrqWwojDwse69BjqkAWb8m8d3nmBevYbSIcTx734xYI9XH9ZadwyLXM%2FtV%2Bra2sP5r5Qfffellr08VaSS1tMM%2B0EcSJtfLhOHgGbjzI4hg7Y%2FXekdUjwg6eL4NbML7S1MskRkVe3j3am%2BXQJOr7FQFdHEJIWE3S0sMpvDvMfdvqGVQu3FYhhSUKuY5VRPH5BbnqTUYH2a7hMJZSQ6xv%2Bggj5hY7UkOMvjJM7LnCR%2FzW88&X-Amz-Signature=ce301cf45cdaa3bb9d0566378e8c74e82606ad806876ad860531f2f46567bdab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RLAZ6C%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmmineWBcteEGWwrRLqqXMIijqgX%2BSLi6jSGphOqMU4AIhAOzp%2Fs04AvfRPp%2FJ3944QoKLlwTG%2Bq0ilLDOLqNg%2FMLqKv8DCB8QABoMNjM3NDIzMTgzODA1IgyPiZ6nw4e8MApV1nAq3APoNuKg6YOPUJqOjg4pQhOJfOrE6%2BLdrVE5qEGYEDH8McrX0a4BjbxACbwKLPm2X06Qb5%2F%2FoYnsdZncss8lnOlfXyfzmzpxDLtqst7qx2UBoIZh9t9vdnhzTmeu9ljPj0NJAnyxTH9EAumCgXlwTLX6e6YY3UPIeXZNHeuDv6a1U5lYcR5Kiotys0h8gZtyJLnajMYTt5qG2hJl6KXGqNv4VpSN0dnxdT2eWxmdz6KF9Chj%2F16yf%2FMxGEUGgLLJlZGqw1IST7rLUNHHpW47QNTpAO3eaCS9aXDzZ42C%2FLYSB9wrw3DH99lHGsKflrgL7yB9v0ng90OEtSmRUajryDSzhaSsBXH8clSGKPlkHWtHHCkvzDdLn%2FHuWI8RRgry1M8xKcYOKkOWHbpOijLmQHn0DEmAfyxhq36Ozv0OGIYSJ9qFsPoZaslL65hgJt6LsdBcS4VqIj7C1YSbgDiY9X3FLOVzEOEuBcqU0TINdp%2FwUYJduHwJBN%2Bsdal4a5nwOkurMG46c6Y%2FnHAhHtJOxeeJN7HVLqDjUmRjKP%2Bv4PhF6XYummHY0n2aqXB0PpL7K1vRP9L520Vbr15XKcpWekczpwsZrAeaQSEcjCXkiNvD0zYn57UXxjwZrqWwojDwse69BjqkAWb8m8d3nmBevYbSIcTx734xYI9XH9ZadwyLXM%2FtV%2Bra2sP5r5Qfffellr08VaSS1tMM%2B0EcSJtfLhOHgGbjzI4hg7Y%2FXekdUjwg6eL4NbML7S1MskRkVe3j3am%2BXQJOr7FQFdHEJIWE3S0sMpvDvMfdvqGVQu3FYhhSUKuY5VRPH5BbnqTUYH2a7hMJZSQ6xv%2Bggj5hY7UkOMvjJM7LnCR%2FzW88&X-Amz-Signature=9138acc52566140e872a9ffaff40dd7c75e826be2d4e6d4f3d04444879a43f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7X25LVO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeXSR2NlyY94nZqSGYhtdcKDbMcYUcCSFmCwDAUNjj0AiEAqF55YKP31MeBNpiZ7ObJY790QlZ4ztLMaW3Buhyk11kq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLbADHHgxCucERg%2FfSrcA5j4Mlk5%2F22edKcwN7vil0hT%2FafcHzueF3WiorHv6T%2Fk58Suo1dWoEkYDxFTzcIaRGououI97xGH%2FinZgbL2G%2B9BMWs7dRR7E8ULROiz3bEz%2F21oVV02E%2FrUw16WQ85aljWOaiUcqh5etPyqJFdUew7d5TEhfy7KA4cHL56%2BVL5luuYAC6RIS3m7BS4PBFwzDl1dOePv%2FAMzku0TRvMiN4eWWpUYyu0tfMAXucXhL4PhlCn7qDW3%2B5exWgRuvFq8aO1chZCeROVfff1dR7zImfGwxkx61RP6s2Y%2B51U1%2B%2BMQkRg9d352S83VH%2FfjArAreJuJPVF6D7Y1TzSjwjuwyMpnKCG0hl5I21d3eAs8v79QxKI6sCqzeqaUqneytAtHhGQjFJLQqZqFzJUBlIxveu70Ib6GFR71wcucpxDyhLYkkXy9qfZ6TW4%2F60hPCSRn4075pCmf%2BqhBpqZm%2BSdgpm%2FDJ%2BCU7eXSls21KOWQG0osgy4LyQo6%2F46YqjCIvoLs0FfSVM9wCWx62JDuqZKA1zJgfr4TCMAypaIVwpfMNZXrLPczNsyYKeY8EXA0pwF9CGeK2HMPZtYqDpsIfW34nU6%2FDbkmma0sQ8NL7nxjzJ%2B0lVgauPbpoNDoaoplMKKR7r0GOqUBzk4sNUJzleHXxet4ao2fJ1vN3Vt6iv2hTV%2B0f9OlvQNZRZh3vfBqiub25Mm%2BvfhXIVDf%2BKsDQAw9NtGZWgCqTNK%2BHmxG3fmi6E%2B6ZvaZpNRNrnP1oevhS3KjS7gK3IITX30oCRf10GSakrihZIpn11p6Aw89Mpd3q0TU%2F2e5vETV%2B2pCUevE5umj8Yfst1F81Nk4e1%2F5IZ8L9zBcQC4P3teD%2Bit1&X-Amz-Signature=3dba87c7b96b64bc2077cca72d384f8f206f041ca2dbf76d1f2c590f69f64d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJMUK7KQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsZe5uX9%2B9%2FGVSTRc1fg31KRMwio1x%2BZPvDn9a2IqV%2BwIhAIKBRLR63vr135xlY%2FyyKXoQVJGr2shnFI5hXWCkQxXZKv8DCB0QABoMNjM3NDIzMTgzODA1Igz%2FnuGOPBsamWEN%2Bqgq3AOr9r8JejxPYim3E2gHH6%2FLLedKdMKiAW8%2Bpi%2B8mwZVsoazUZa28CQ%2B1XETyAwLnVAg%2F1MfiA2ta1QMViZR6Do6a091omkYEiUm1RvPw0PT%2FPymgDgG2m3sadCyGGn47y47Acf%2FHAqYlqG%2Ft7Ry%2FGVjtUtTgRyupPjz2nBsQc3VIL0hHkeewFHPjFWzqomsfpOqSzh9dUiBUFEoLArPR%2BeFTuJL7aDBTRB3aEjxR%2FHakXuZa32HxbNlUSIkkYonkZ6cfY8dbEmO6r6bme59Ht6HF04zdmqSmek1ziJsiNGpop%2BeZAkCBHcteFFcwTdfK79IKxG2xmYHt83haCGKpqwUYXWwAoYcJCkv%2FlbdCcyW7klGQEd4g5IvDx2r%2B%2F9kwGkn2jHANFCZZVxQsZoDUZlSo5IpYcP7A2H4T8aafeP%2BmDb4DtHj5f6KzWt744ci6Qjs6YVE9TyP67eMtWd6a8QyHeg5Hhull4WwWoHRhRUa9%2FkVP7lDoDd60qK6qNkKqUu3J98MYtnAIrRpyCDPGNCk9IKSTOQbASb3GFRlbskuTdGZSIXWRowSWGGDDD2DXOmYulTW4%2Bvgg1%2BTKVzSgvI%2FSRVIOZMbol8bM9qfqhrOlDqGdtASl7xIeTUXAzDE%2BO29BjqkAVByG6DcuGzqFbwEx6HGaUaCE3%2BcU1DjFf9mHTQPnKJ7Qr0sgr5GS%2FX5SgrJVB7el9TVb4P6YtjzEmtQrfAxGRwJWvsCD1pzXD4MT49a4%2FkDQAn4CPEHNV3O036VZOVa%2FkcY%2B1DCcMb7AhlitnNXukMnlSLPrMJqR2cYyWuuvUt3UYQ9C84e7BChQ24Q1FMY7fz11rzcF0uh%2BavEpqkHh9Ziwidj&X-Amz-Signature=64cb943c4dd8780fb48909e450ec5ae46863aa35aa0ff39efa48efa323eef496&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2RLAZ6C%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmmineWBcteEGWwrRLqqXMIijqgX%2BSLi6jSGphOqMU4AIhAOzp%2Fs04AvfRPp%2FJ3944QoKLlwTG%2Bq0ilLDOLqNg%2FMLqKv8DCB8QABoMNjM3NDIzMTgzODA1IgyPiZ6nw4e8MApV1nAq3APoNuKg6YOPUJqOjg4pQhOJfOrE6%2BLdrVE5qEGYEDH8McrX0a4BjbxACbwKLPm2X06Qb5%2F%2FoYnsdZncss8lnOlfXyfzmzpxDLtqst7qx2UBoIZh9t9vdnhzTmeu9ljPj0NJAnyxTH9EAumCgXlwTLX6e6YY3UPIeXZNHeuDv6a1U5lYcR5Kiotys0h8gZtyJLnajMYTt5qG2hJl6KXGqNv4VpSN0dnxdT2eWxmdz6KF9Chj%2F16yf%2FMxGEUGgLLJlZGqw1IST7rLUNHHpW47QNTpAO3eaCS9aXDzZ42C%2FLYSB9wrw3DH99lHGsKflrgL7yB9v0ng90OEtSmRUajryDSzhaSsBXH8clSGKPlkHWtHHCkvzDdLn%2FHuWI8RRgry1M8xKcYOKkOWHbpOijLmQHn0DEmAfyxhq36Ozv0OGIYSJ9qFsPoZaslL65hgJt6LsdBcS4VqIj7C1YSbgDiY9X3FLOVzEOEuBcqU0TINdp%2FwUYJduHwJBN%2Bsdal4a5nwOkurMG46c6Y%2FnHAhHtJOxeeJN7HVLqDjUmRjKP%2Bv4PhF6XYummHY0n2aqXB0PpL7K1vRP9L520Vbr15XKcpWekczpwsZrAeaQSEcjCXkiNvD0zYn57UXxjwZrqWwojDwse69BjqkAWb8m8d3nmBevYbSIcTx734xYI9XH9ZadwyLXM%2FtV%2Bra2sP5r5Qfffellr08VaSS1tMM%2B0EcSJtfLhOHgGbjzI4hg7Y%2FXekdUjwg6eL4NbML7S1MskRkVe3j3am%2BXQJOr7FQFdHEJIWE3S0sMpvDvMfdvqGVQu3FYhhSUKuY5VRPH5BbnqTUYH2a7hMJZSQ6xv%2Bggj5hY7UkOMvjJM7LnCR%2FzW88&X-Amz-Signature=6bd90c72442330952d052472930f9a8e8186cf840dc710920161dea0a187757d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
