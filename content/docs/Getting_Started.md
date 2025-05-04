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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OITUVTL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFCMfIITkwJFAjX5fWUmGOG4fDBKo%2Bb29hAT%2B4lm6N1DAiEA5iSaIJZ4kqJeDiQapl9kG4%2FaD0AbsgFdG51MIDuJRJYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAZx%2BY0xJckDN380CrcAynifdJRko0ADVrmBbjaCBjnMqx0OEJ6Vcj7WndmAvPdIRjjLWEJeF1oWyTjddr6GWz9HLDBuTsazawhzjyWt5SYNSDRcnZGeP5ne6KYeU11iGEV8ECl9CBoa9ucF81LfNB81ZVgjd%2BeYWWPGz9W2ledlvTcYStKobjB4ZE7SxBKZJ6MqrM23SSaAu4%2FUUv0QnupgPNlBWmGnZdk4SDR86shNTrxfTdGJJpj5EOexHRJGQ92Jq%2BRDXX2UASCK6IQF6%2F931iVrU6WiwBJqfheEKnFXZ3UCPDXxuTi0jcZkYxKCq0g5iB8IvvqeMjcWCnma3CWR5gZy0BehnTINYj0T%2Ba9NRFi%2BYnltdUWWE%2B5jCw5LBuwGbPm7SiP%2FQBG3PEIVqPMNAgaq43JNHuPUAqF1%2FxDvbyeQrbsg%2BOeLbm2utQeCdGDlpHAC%2B1TFaNp9UjA5zVoWPXW7zanlP3MhCxwvyE%2FJLKEHw06Nq4eD%2FVNsvqPmPDMZo4Y1tb9uPIVxITMMr10akWUwwwthTQZgsN4k5wF9tsm3xDDzAOOhzStU0OiCJrFiuTq4i98FntzuP13MsJCzusyionWkNlLOiRh6%2FRRFltP%2FJVJR2nN%2BqFRjcYf4SW2z6z5v4Spn9FlMLzY2sAGOqUBr7pVLOo%2FEYhFJF%2FhgzY9DQDmnSIq47PaXP0DI39k3bDRTmMqNWV4Ev0U2nrh%2FPQ8xN%2B3%2B4WAXPNvwCmcJ9kHXzEzCg1QHkYIsv1nYvqLrJ0TDuV9Etks1%2FzjJZhzVvtT%2B2vDjP%2BvNysOQb0ShUFSbJA8O4tUvbbFNJNKPKCXNZ7MkNjhxoRNIT41izm%2Bxc9LP7%2BY6fXesogrfkJDqAHBfbZmmNDX&X-Amz-Signature=76c17e89e4900e0f236dacc1d63e22005622978566ee9a5726c961ed318c00bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OITUVTL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFCMfIITkwJFAjX5fWUmGOG4fDBKo%2Bb29hAT%2B4lm6N1DAiEA5iSaIJZ4kqJeDiQapl9kG4%2FaD0AbsgFdG51MIDuJRJYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAZx%2BY0xJckDN380CrcAynifdJRko0ADVrmBbjaCBjnMqx0OEJ6Vcj7WndmAvPdIRjjLWEJeF1oWyTjddr6GWz9HLDBuTsazawhzjyWt5SYNSDRcnZGeP5ne6KYeU11iGEV8ECl9CBoa9ucF81LfNB81ZVgjd%2BeYWWPGz9W2ledlvTcYStKobjB4ZE7SxBKZJ6MqrM23SSaAu4%2FUUv0QnupgPNlBWmGnZdk4SDR86shNTrxfTdGJJpj5EOexHRJGQ92Jq%2BRDXX2UASCK6IQF6%2F931iVrU6WiwBJqfheEKnFXZ3UCPDXxuTi0jcZkYxKCq0g5iB8IvvqeMjcWCnma3CWR5gZy0BehnTINYj0T%2Ba9NRFi%2BYnltdUWWE%2B5jCw5LBuwGbPm7SiP%2FQBG3PEIVqPMNAgaq43JNHuPUAqF1%2FxDvbyeQrbsg%2BOeLbm2utQeCdGDlpHAC%2B1TFaNp9UjA5zVoWPXW7zanlP3MhCxwvyE%2FJLKEHw06Nq4eD%2FVNsvqPmPDMZo4Y1tb9uPIVxITMMr10akWUwwwthTQZgsN4k5wF9tsm3xDDzAOOhzStU0OiCJrFiuTq4i98FntzuP13MsJCzusyionWkNlLOiRh6%2FRRFltP%2FJVJR2nN%2BqFRjcYf4SW2z6z5v4Spn9FlMLzY2sAGOqUBr7pVLOo%2FEYhFJF%2FhgzY9DQDmnSIq47PaXP0DI39k3bDRTmMqNWV4Ev0U2nrh%2FPQ8xN%2B3%2B4WAXPNvwCmcJ9kHXzEzCg1QHkYIsv1nYvqLrJ0TDuV9Etks1%2FzjJZhzVvtT%2B2vDjP%2BvNysOQb0ShUFSbJA8O4tUvbbFNJNKPKCXNZ7MkNjhxoRNIT41izm%2Bxc9LP7%2BY6fXesogrfkJDqAHBfbZmmNDX&X-Amz-Signature=2fec506847e2389fb74b2d3eb8d9e83f540e47a32481ed8bfea259ba26f20bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OITUVTL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFCMfIITkwJFAjX5fWUmGOG4fDBKo%2Bb29hAT%2B4lm6N1DAiEA5iSaIJZ4kqJeDiQapl9kG4%2FaD0AbsgFdG51MIDuJRJYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAZx%2BY0xJckDN380CrcAynifdJRko0ADVrmBbjaCBjnMqx0OEJ6Vcj7WndmAvPdIRjjLWEJeF1oWyTjddr6GWz9HLDBuTsazawhzjyWt5SYNSDRcnZGeP5ne6KYeU11iGEV8ECl9CBoa9ucF81LfNB81ZVgjd%2BeYWWPGz9W2ledlvTcYStKobjB4ZE7SxBKZJ6MqrM23SSaAu4%2FUUv0QnupgPNlBWmGnZdk4SDR86shNTrxfTdGJJpj5EOexHRJGQ92Jq%2BRDXX2UASCK6IQF6%2F931iVrU6WiwBJqfheEKnFXZ3UCPDXxuTi0jcZkYxKCq0g5iB8IvvqeMjcWCnma3CWR5gZy0BehnTINYj0T%2Ba9NRFi%2BYnltdUWWE%2B5jCw5LBuwGbPm7SiP%2FQBG3PEIVqPMNAgaq43JNHuPUAqF1%2FxDvbyeQrbsg%2BOeLbm2utQeCdGDlpHAC%2B1TFaNp9UjA5zVoWPXW7zanlP3MhCxwvyE%2FJLKEHw06Nq4eD%2FVNsvqPmPDMZo4Y1tb9uPIVxITMMr10akWUwwwthTQZgsN4k5wF9tsm3xDDzAOOhzStU0OiCJrFiuTq4i98FntzuP13MsJCzusyionWkNlLOiRh6%2FRRFltP%2FJVJR2nN%2BqFRjcYf4SW2z6z5v4Spn9FlMLzY2sAGOqUBr7pVLOo%2FEYhFJF%2FhgzY9DQDmnSIq47PaXP0DI39k3bDRTmMqNWV4Ev0U2nrh%2FPQ8xN%2B3%2B4WAXPNvwCmcJ9kHXzEzCg1QHkYIsv1nYvqLrJ0TDuV9Etks1%2FzjJZhzVvtT%2B2vDjP%2BvNysOQb0ShUFSbJA8O4tUvbbFNJNKPKCXNZ7MkNjhxoRNIT41izm%2Bxc9LP7%2BY6fXesogrfkJDqAHBfbZmmNDX&X-Amz-Signature=243fd610f78934d0322fa4a88bac6f8507e67dd9c7420b90e6c9630e929532ef&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OT4JYBY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBoLbvLgTKIAJsYOWPpd6EcYJJy8LvlJURUNkB0dXXSFAiEAo64mr1q5LNC60OoEtHi8RouQFZKh%2Bron%2Bxzv7RyQFbQqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLp5rMYFyJSvyWQrbircAwJ%2BDyipPAL3yFQYPpBUBEhkzQyW7UJWltJ4T73SLq94gN0ECugAui%2F49pen1fH17H3UUHJ3kpwfoMZPiCkEVF6q4GVJ77vlGCSkEzJisJ%2BUaxKUbXBtB6Uvx%2Bpy9e8uZxxWcKVnhGFlhNIMG9ddQ8j%2Bmru9V2oq024St6vmBHdDeru5%2FXV9ba9EYNGMQNgXcnmzw0nZEEmtmg6OrVoXJO5MAuU5DB7zJHQoBzl57uDoHHNXho3uVsmOx%2BK%2BAj1DBJBMa3Okno37NJ%2F8X1jGuy%2B1Wc82I65xb%2FatPt4gO%2FwyHrJuzTZoPQIPbaNpb643svIk8ChlqnhHeg2NQ7iRZ77mN6modEbjzI%2FWNbGw%2BmndreSM1SjZ1NscGzMIJGxq%2BEEmCl6u7BqCLKFrK%2FL08Kiw1hdIIoPtPr82jsOlfT0nw4RVVBhHHWMWsN2%2FmbCTVjhpmaFSgVbLv5Wozp48fpMmK9tIC9OLTn5GJdBbei%2Bo7vhk2P0Q2h62ozWpocoBIAYrLkkB8X6lJH8bnNxsbb32YuYa542%2FiNL0J083k8Ssb7HHEyJRIDoiAJoXdWzxJ2D%2BxGgZeaBldW8v7ECmnFWwWrnGebXjx4oMHmQkeZAWLwaILeSz%2FtvsmEClMLzY2sAGOqUBrChqEP6NWpRPFQ4dcU69pUBJwgzAvnTslR2iArKdFY3MlVjxwQ74Y1FfsF20a0jI1sjxw8V3%2Fi1NgA5O8MYMMULD112APaCEX0%2B%2BcrwXjVYpEWvHsGSkDxv%2FV3lZ5Y%2F6KxB2XaSE3qBxtk6Y6K%2BBeiXLYseHol%2FYoC8i1A2tuGGuOK11ofxs8MX5lCVsA0Me8pAXKr7b4h7J3Sw6wI6XZvm1ure4&X-Amz-Signature=b89692d3ad81e1e9c61023bba5512da75d42d8f8a40f68a16a3de8ff534ba9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIGQGD2F%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD3nEMlZrE51utiOP5Dr9MpeO3CvSMawYNXCrq1xYAbXQIgA65eUZtlSOfEV3oXu3EUS759svD42w%2FAMcysKSPvJgYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1VsN7KbEl35S6sTCrcA3Hy3Vj7%2F7QLMBEaOO0MSLzsMql5TVUXJbdW1Tid9Ijl4iIMiInVwQ335265xsDN8ohrIzfblPMXIHwpM9UP6O3vDX9V5UpSHy%2BOYAeOl5McclNqgaTWtKq7w4bWLEe58%2FvleufQ1NPsAXFY0uRKgwpDCeuOxWCLQpB545kUzivXKic50CkBbjYmdBdkCndP1XPcSa5kJAGP8ni4ghVBl0qWmzbavnmp3I2oCj58v%2Bs4yuRlJwvMsr5gzwqHnayxlX%2F%2BII8RsqFhX%2BQK9HUfkTdKfByDmJXK9mzkuHfXThCcVWqC1Cw4xGo9eO4ztIgZGhGQlBFQQuv427nXPiNPvMFl%2FBM%2FqvA4gR0FevNAMfTSRxG1IRL12RA4wDnRztSTdKPqgUYn%2Fpf5c1siXMsDNcGVmEiWHB27RgbzrigiHB790FQTlbc4L6%2B9bbSd%2Be0XoqLgOkKtSWS%2B0DDUtdx8SfQ%2BW58%2FftxoBFnQ368C%2FcWoP0eGe0vpmV5yHV23wJl3okq3K0LPBpb2R14cHL3SIZKdhzNqT2E%2BVX79ui5MwLmqVEVhk2%2BGFWrEEqpHFvMaY%2Bb0HL4qSDaClqAqL1Fi6EsXORWP6dSJtRyo68Z7BTkWDyQcpZkTKmBfWAkZMODw2sAGOqUBUsQ3Qa4E84WJsH4uv2xM9K7rIC9iFs9k9qgm3mp0xqpNvFTMpfFevSwFNEClhj%2FD25PhLt%2BoRlT%2FRoyVucfJwiiajDgZUm%2BfjGQibX6IX4zc%2BopbuawqiUxDuizgBYgHgyy2SlEWLwRfbqqvpFN%2FIub2uHcjMMTV%2F3FJbzl30tLDDppBUsc3x5v4n7LHa3g1pvClr9U1UAjRtYgwajcKjyQBGZUI&X-Amz-Signature=a07c695a3cdfa3638c9552a37906e8194698adfb1fd53f99a45d4f50a1512a08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OITUVTL%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFCMfIITkwJFAjX5fWUmGOG4fDBKo%2Bb29hAT%2B4lm6N1DAiEA5iSaIJZ4kqJeDiQapl9kG4%2FaD0AbsgFdG51MIDuJRJYqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAZx%2BY0xJckDN380CrcAynifdJRko0ADVrmBbjaCBjnMqx0OEJ6Vcj7WndmAvPdIRjjLWEJeF1oWyTjddr6GWz9HLDBuTsazawhzjyWt5SYNSDRcnZGeP5ne6KYeU11iGEV8ECl9CBoa9ucF81LfNB81ZVgjd%2BeYWWPGz9W2ledlvTcYStKobjB4ZE7SxBKZJ6MqrM23SSaAu4%2FUUv0QnupgPNlBWmGnZdk4SDR86shNTrxfTdGJJpj5EOexHRJGQ92Jq%2BRDXX2UASCK6IQF6%2F931iVrU6WiwBJqfheEKnFXZ3UCPDXxuTi0jcZkYxKCq0g5iB8IvvqeMjcWCnma3CWR5gZy0BehnTINYj0T%2Ba9NRFi%2BYnltdUWWE%2B5jCw5LBuwGbPm7SiP%2FQBG3PEIVqPMNAgaq43JNHuPUAqF1%2FxDvbyeQrbsg%2BOeLbm2utQeCdGDlpHAC%2B1TFaNp9UjA5zVoWPXW7zanlP3MhCxwvyE%2FJLKEHw06Nq4eD%2FVNsvqPmPDMZo4Y1tb9uPIVxITMMr10akWUwwwthTQZgsN4k5wF9tsm3xDDzAOOhzStU0OiCJrFiuTq4i98FntzuP13MsJCzusyionWkNlLOiRh6%2FRRFltP%2FJVJR2nN%2BqFRjcYf4SW2z6z5v4Spn9FlMLzY2sAGOqUBr7pVLOo%2FEYhFJF%2FhgzY9DQDmnSIq47PaXP0DI39k3bDRTmMqNWV4Ev0U2nrh%2FPQ8xN%2B3%2B4WAXPNvwCmcJ9kHXzEzCg1QHkYIsv1nYvqLrJ0TDuV9Etks1%2FzjJZhzVvtT%2B2vDjP%2BvNysOQb0ShUFSbJA8O4tUvbbFNJNKPKCXNZ7MkNjhxoRNIT41izm%2Bxc9LP7%2BY6fXesogrfkJDqAHBfbZmmNDX&X-Amz-Signature=a6520c7d4b6219e51ee1e845a013318602435520ca1a3b006f8cdeb63db281f1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
