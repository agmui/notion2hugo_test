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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DR5K2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUtC5euhneWet8T1Avk5qY%2F172EpK8uTv%2BL7jinL8CpAiEA6zCh8L4SKVthJTh9V820K8i2V4N3yYA8%2BefiBrfqOnwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEu41AU6IMFTP1qGCrcA7yHQvQq2Q%2FoyddTmDV7RSMOZKmEitCTy0uR6B2h6zktpMsaKn9boVoWrPI5X37sFhahLF6u%2BmO3Wz1hD2xRsFIoGxEx30yRkLZ%2BCStbxY9MHs62Ft45VVghBrKStIb8J0sP6WWz5O1Z8FaXTWezaMfby16QRdExVYfnuTDyGTjNanTm9w4zs8tyTL7dgMud9Z5wuLMGOV4R30NIuIv1VLOgaJ1zLC8sbpPMyyDT3xNlsVJX8xrzzMwAse5%2Bdph7sMiUqp3KcqFfkM0%2FNFH%2F6wdmE2r%2BKE8jFKb6RwAOZYOh02EzFackRQYSTUFJ7o%2B%2FnqUhXgBtwkOCB34mX06XFFY2TBS8hAoxX9KtvOiHQpu0NDA4ST01gXtd36fSgmSAdUP%2FgmaQdoH2AUjCI%2BFvQ%2BOMWHHsaaIezhOIXxM7QLoP50LnNSJyk5o6KoiYz8bDBvJSsMpig2pYKW8rqdnyFyhli4%2FSot03A7sly%2BZh1eVaoFdjf5YkuFfYLr17eueMtq5bhxG29tWclQYnCwG3FiOjB22GqPIpVOSNuEVJyN6oDHp8G5sHPxjneK%2BMDhWjbjsiae2EkzUdPfh0ImhSTToepEEHpjEAHVGseFdvJnLxaE3%2BzgKk%2Bn5bTkFzMN7jssEGOqUBMkFjcwsvKW6gzm%2Fi%2FUq%2F1%2Bo%2BICTeXKw89mRH5MC9IHRoJ%2BIijUaGVsDw1CcwKlq3SlA%2FsT5eqTdExVN0QuOZZpl32FZRrXL5iiOWhI1i4xGroFMJt7AncXCsuLWDwxt09aJUMCvkJCBXU3yUStqyOlSBsewRBKCkib7V833eYuUHMbBjqOeqQwVzh8vVVrVZAYf0%2BWEUGcmF4DV4v6Da6ADxwahz&X-Amz-Signature=baed73d669e89dc604d6cec97cd91b4d603c718656d9b3ca9552d05d35e1514b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DR5K2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUtC5euhneWet8T1Avk5qY%2F172EpK8uTv%2BL7jinL8CpAiEA6zCh8L4SKVthJTh9V820K8i2V4N3yYA8%2BefiBrfqOnwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEu41AU6IMFTP1qGCrcA7yHQvQq2Q%2FoyddTmDV7RSMOZKmEitCTy0uR6B2h6zktpMsaKn9boVoWrPI5X37sFhahLF6u%2BmO3Wz1hD2xRsFIoGxEx30yRkLZ%2BCStbxY9MHs62Ft45VVghBrKStIb8J0sP6WWz5O1Z8FaXTWezaMfby16QRdExVYfnuTDyGTjNanTm9w4zs8tyTL7dgMud9Z5wuLMGOV4R30NIuIv1VLOgaJ1zLC8sbpPMyyDT3xNlsVJX8xrzzMwAse5%2Bdph7sMiUqp3KcqFfkM0%2FNFH%2F6wdmE2r%2BKE8jFKb6RwAOZYOh02EzFackRQYSTUFJ7o%2B%2FnqUhXgBtwkOCB34mX06XFFY2TBS8hAoxX9KtvOiHQpu0NDA4ST01gXtd36fSgmSAdUP%2FgmaQdoH2AUjCI%2BFvQ%2BOMWHHsaaIezhOIXxM7QLoP50LnNSJyk5o6KoiYz8bDBvJSsMpig2pYKW8rqdnyFyhli4%2FSot03A7sly%2BZh1eVaoFdjf5YkuFfYLr17eueMtq5bhxG29tWclQYnCwG3FiOjB22GqPIpVOSNuEVJyN6oDHp8G5sHPxjneK%2BMDhWjbjsiae2EkzUdPfh0ImhSTToepEEHpjEAHVGseFdvJnLxaE3%2BzgKk%2Bn5bTkFzMN7jssEGOqUBMkFjcwsvKW6gzm%2Fi%2FUq%2F1%2Bo%2BICTeXKw89mRH5MC9IHRoJ%2BIijUaGVsDw1CcwKlq3SlA%2FsT5eqTdExVN0QuOZZpl32FZRrXL5iiOWhI1i4xGroFMJt7AncXCsuLWDwxt09aJUMCvkJCBXU3yUStqyOlSBsewRBKCkib7V833eYuUHMbBjqOeqQwVzh8vVVrVZAYf0%2BWEUGcmF4DV4v6Da6ADxwahz&X-Amz-Signature=82581a895b8ce510c81835f532fccdd842455f18804ab8b13f1c02aad951788f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DR5K2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUtC5euhneWet8T1Avk5qY%2F172EpK8uTv%2BL7jinL8CpAiEA6zCh8L4SKVthJTh9V820K8i2V4N3yYA8%2BefiBrfqOnwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEu41AU6IMFTP1qGCrcA7yHQvQq2Q%2FoyddTmDV7RSMOZKmEitCTy0uR6B2h6zktpMsaKn9boVoWrPI5X37sFhahLF6u%2BmO3Wz1hD2xRsFIoGxEx30yRkLZ%2BCStbxY9MHs62Ft45VVghBrKStIb8J0sP6WWz5O1Z8FaXTWezaMfby16QRdExVYfnuTDyGTjNanTm9w4zs8tyTL7dgMud9Z5wuLMGOV4R30NIuIv1VLOgaJ1zLC8sbpPMyyDT3xNlsVJX8xrzzMwAse5%2Bdph7sMiUqp3KcqFfkM0%2FNFH%2F6wdmE2r%2BKE8jFKb6RwAOZYOh02EzFackRQYSTUFJ7o%2B%2FnqUhXgBtwkOCB34mX06XFFY2TBS8hAoxX9KtvOiHQpu0NDA4ST01gXtd36fSgmSAdUP%2FgmaQdoH2AUjCI%2BFvQ%2BOMWHHsaaIezhOIXxM7QLoP50LnNSJyk5o6KoiYz8bDBvJSsMpig2pYKW8rqdnyFyhli4%2FSot03A7sly%2BZh1eVaoFdjf5YkuFfYLr17eueMtq5bhxG29tWclQYnCwG3FiOjB22GqPIpVOSNuEVJyN6oDHp8G5sHPxjneK%2BMDhWjbjsiae2EkzUdPfh0ImhSTToepEEHpjEAHVGseFdvJnLxaE3%2BzgKk%2Bn5bTkFzMN7jssEGOqUBMkFjcwsvKW6gzm%2Fi%2FUq%2F1%2Bo%2BICTeXKw89mRH5MC9IHRoJ%2BIijUaGVsDw1CcwKlq3SlA%2FsT5eqTdExVN0QuOZZpl32FZRrXL5iiOWhI1i4xGroFMJt7AncXCsuLWDwxt09aJUMCvkJCBXU3yUStqyOlSBsewRBKCkib7V833eYuUHMbBjqOeqQwVzh8vVVrVZAYf0%2BWEUGcmF4DV4v6Da6ADxwahz&X-Amz-Signature=3c795ff5c461ea168523f488b29e47293a5c8b8521b8fe641cf20b014db7bbdc&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W455Z4XA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLgJiJPsqLElhW6LGbWXRC55SEYddG6uNGXTz2fNktaAiBcwz0DvVygmU55pzQ1N23LVaOoEw1Mv8Y58KxbIfdGUSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlJPcBSooFFy%2B8qvIKtwDD3B6YEGDzNvX6nILnqtKIyOkHR7grTLoIjwhbjUYfqK3zwUNP9CuopctYZKujooY%2B0%2BZJvx%2F7EG%2BzrHBo9uHnxNwYtFrwzJ4mZtvWJx1IQmFBA%2FTIvLRx1NJaZT7fA1nsNVUTg6NTdQBpQ0E3PHS4CfwZokzWoQVW5fhgbjgEAXWRuH%2FKqgacqK3S0J9CJmo0xlnmAp5LIjVPFclFSwtagqLvgCtCRr0CF3QtmNjpMYjoYlUSezXtLPn5Rfqqx1GkGaCnoj%2BZrwk6nubWFoJ5rWsgbeZtoKwO8pC%2BuWbcA64KNW%2BCudBY94R8cpFha5Taj7uavPqQkx2EkbS3CjKxNdUpFP3ZzKSbzUSxNbxveSku%2FJKrrfgTkWr5Lkf9FbJ77XwGGHJDkSMi9aKW2oi0ZgQRlgiEQRPgOJJ3QqCOiHCNgXeoxKg9Je5QPlnMTOyP4wIMvoDYUXx2RM2%2FN2EV%2FiNgtFfmDohDhuZf0hSxrKrIZHDts11l4%2F1YkJgRbGhrG8dHT9j8VUmrbuxtSy5GRYxtvRIqQkXrScO%2BVdwFWEC2MEzmJatOgdXdbRJ7RBCrY83EaJMID0CiGbdCGi3ATrdoBD0%2FSZYdvR6ILPblKJuQJSESk7wND07Hy4wreOywQY6pgGPcpUF6%2BKjchjCuUMLyHi9KcjFC1Be8dwTgCEMIM8bXwFWk5w%2FFxQWDFUzNT4E%2FPyVkS5QdEQy%2BHsLfbtDbTZ3oQE9309D9G2Lqpz51my6y14cZRTPN6pLqUU%2BfsuB04IEbaU1y9kqA1OJ4oZHfPMr%2Fn2pqnvPEBp1UrBrbdcQ21ZSY6I578ufuu51Z08QxrldwhezHldUvo28ROAlMPahuDlBLa5T&X-Amz-Signature=46eb958b517b535c6c3c7ff35774dff68ca25d8493eda5c7d14737dbd8d35750&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPDHYJZK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD46mW4yE2p4N8TMj6yJepEyIB307O41j0SpojmolI7igIgFYB6YankKiS%2FBvEVf7tZv3ITHpOGvRFD8w9C3Mn7FMAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCmlFLRi2dTiLN5JSrcA8JsjFDLiok8nbmnPtq9F7MnQ7UGfTjDCrcQp6leTr%2Bt7zgk%2BKnH7%2BLcbE2UHq0YXP%2FiEYspIniVjEWZXkrsfpRxruC9Z7%2FTTRfMka%2FKbxwFu3Z0WNkWMcXEvRIqqv%2BPFW5KP3BUe4P7kWiCZRzc2HoiFN5H%2BCh%2Fm7BDETlxGc0Vaf6LoR3%2BKjYuwd0V%2Fxa5ZXdR8IQbSZsraX3%2BKEIkPDK88ngi1VJxHZjFANSg0l8wykgXIBa0LKtEC%2B6gD%2B%2F%2B3gfMo9ZH4DBC4jq76bZZd9YQCNOCXgNl8qAEiwFQKlYwi1dV8D7oFLH6UJ6m99gVgJ7sUqB%2BEUykKUsJeKJ349N%2FpK35nOlOmnuqveY4rRf9v2rRtoPkySN00me8LZbb3pjxRHuPdb%2FPftBEaPhO5mBV3zwUC5bmJQS%2Bv%2FMn%2FUxyG9OI2vta6EEW%2BoFM9p7BuUBTsWTqM6cnxK3l5cPQEttWmFapYel3BTvcmq3qu3TiCEs81wS1olB7ZUDN3%2Fj4mkhYN%2BtpadrZ3gq7CH%2BzgkgTnWcEp0eXuJUB28rs7WTbb8rHCPTEF4pqfMe86c7bDrDAfydC8kGlGZg%2FzTiGw5t2FYIEtAOOsRWUNO4M6UubPqHOINQDJaMKmGf5MNzjssEGOqUBr13BMmKWp%2BfupaQ1FC%2BZ%2F2lm6%2FUKsDfpUpUmQtXyJEvP9wKHfjwSyb8dhzoqpHnIjwPGPRdx2sh5sTk%2FPY0Fio4dfUDI2TRVAs7WQ2cPld7QkTOnzhlQMXhyFuZkRWCppPQsfpgTV0nuewfk5Jv6YfdyK5h02f6sPUSLm9%2FVQQ3uRyD2ZMs9ZfFcF1YaV698L5fO5chyZ6Io%2FCE1NagYVwyUxm%2FK&X-Amz-Signature=70e558b4c52eafcbc6e35c0b1b7dfc05ef08959f4ec80d810a9285a439106204&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DR5K2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUtC5euhneWet8T1Avk5qY%2F172EpK8uTv%2BL7jinL8CpAiEA6zCh8L4SKVthJTh9V820K8i2V4N3yYA8%2BefiBrfqOnwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEu41AU6IMFTP1qGCrcA7yHQvQq2Q%2FoyddTmDV7RSMOZKmEitCTy0uR6B2h6zktpMsaKn9boVoWrPI5X37sFhahLF6u%2BmO3Wz1hD2xRsFIoGxEx30yRkLZ%2BCStbxY9MHs62Ft45VVghBrKStIb8J0sP6WWz5O1Z8FaXTWezaMfby16QRdExVYfnuTDyGTjNanTm9w4zs8tyTL7dgMud9Z5wuLMGOV4R30NIuIv1VLOgaJ1zLC8sbpPMyyDT3xNlsVJX8xrzzMwAse5%2Bdph7sMiUqp3KcqFfkM0%2FNFH%2F6wdmE2r%2BKE8jFKb6RwAOZYOh02EzFackRQYSTUFJ7o%2B%2FnqUhXgBtwkOCB34mX06XFFY2TBS8hAoxX9KtvOiHQpu0NDA4ST01gXtd36fSgmSAdUP%2FgmaQdoH2AUjCI%2BFvQ%2BOMWHHsaaIezhOIXxM7QLoP50LnNSJyk5o6KoiYz8bDBvJSsMpig2pYKW8rqdnyFyhli4%2FSot03A7sly%2BZh1eVaoFdjf5YkuFfYLr17eueMtq5bhxG29tWclQYnCwG3FiOjB22GqPIpVOSNuEVJyN6oDHp8G5sHPxjneK%2BMDhWjbjsiae2EkzUdPfh0ImhSTToepEEHpjEAHVGseFdvJnLxaE3%2BzgKk%2Bn5bTkFzMN7jssEGOqUBMkFjcwsvKW6gzm%2Fi%2FUq%2F1%2Bo%2BICTeXKw89mRH5MC9IHRoJ%2BIijUaGVsDw1CcwKlq3SlA%2FsT5eqTdExVN0QuOZZpl32FZRrXL5iiOWhI1i4xGroFMJt7AncXCsuLWDwxt09aJUMCvkJCBXU3yUStqyOlSBsewRBKCkib7V833eYuUHMbBjqOeqQwVzh8vVVrVZAYf0%2BWEUGcmF4DV4v6Da6ADxwahz&X-Amz-Signature=38573ebd5b479c4c50d071cbee0dad423cda38c8d97afd9cfc3938fdcf446808&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
