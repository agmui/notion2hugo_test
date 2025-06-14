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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBR3JJWF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGmmsDnOwMfdep44Pt%2BBOkHL7QtNtKdk%2B1g%2FDt8EM7uMAiBwFbp33RKhKHp9J8Wnw91FWsztrUxtwzBc0WAMa2TbdSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMGb49gE3ccgC1WHn8KtwDGdjGIo%2FWkaqGUmvICd41dCSRre12Hk9YKjm7EerTFCDpsaC8VS%2BzI9o4C%2BTt4JVCGIx9JAChmZ8CZZVIrgEeMAH9OHPxSYuLq4lgUuf2QZL9c1Hpkr3gJeqom2voXnqvdngLaaLfG12VYbUJXWpOApCIvLgudwRKf6xWSk4Xvpa6WtJSQdHiwfwdYJGCMpN%2FJRxJwegZcoVQ0zDmlL9VfueX%2B1mkNllklLZZT3zNnBfG9CEK3n9lq9%2B8pauTZf8BqgC1TrOG3iENfZFjSP94AY5IT0eLjTc6MdKoYkVq2vhGF%2F4ZVM65T2GKDwktwpD5ICB7yQjykyOf5Uno347nZ7XaEqMRrnjF0QRAxcFaAIa%2Blr5VIBRoxa%2FIJbUzK7nQgHDRXg6LEzSPKWgsfK1mLYCFpaHdXL9MQBfRK%2FJ9i7YaFZV2%2BcLvP%2BL6bYfwbxhNmQHjDqir%2FP0%2F2Y0c39j39eRL%2BOD%2BqoVe9by9iRxXv8ZS4%2F7Y66er%2FsY1BvHYeLMts7lx2hVIMMzm1ngBSldCTOtmjDOCqpy1AkBTX5r%2B80vGt%2FhK40syGnPALJVxkDWkLU93Ap93znUEZtnZf5ijMR44jqSTLYAI9J0Dbkyvqosyta4%2BN%2Bjeoaa2DKgw2by0wgY6pgF9BS1tKWaDL%2BBJtLSlRpzvNABf71nQ8vUXVX%2B6%2FjmCLmFBV7UgSLabp%2BX1JAq0wVnDT1RL3zCPfqj%2BqmLYdUOK1w%2Bv7WZSzvhZT3xtnb%2ByPWJ6WwciA2vhaep4gTEblZB%2BMRhgtLXK8C76rS825efkLYOPyoPmNYMPbQ5cIsBcm8Pbm6ft%2BfCkF9BET8y0Ov5Hv0guE%2FFNR2YV5X5PjJjC22CKCJ3e&X-Amz-Signature=eab5cfa7c9a51152be7315009ad98505ce4045790fa4f7ca7523a18050ae8876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBR3JJWF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGmmsDnOwMfdep44Pt%2BBOkHL7QtNtKdk%2B1g%2FDt8EM7uMAiBwFbp33RKhKHp9J8Wnw91FWsztrUxtwzBc0WAMa2TbdSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMGb49gE3ccgC1WHn8KtwDGdjGIo%2FWkaqGUmvICd41dCSRre12Hk9YKjm7EerTFCDpsaC8VS%2BzI9o4C%2BTt4JVCGIx9JAChmZ8CZZVIrgEeMAH9OHPxSYuLq4lgUuf2QZL9c1Hpkr3gJeqom2voXnqvdngLaaLfG12VYbUJXWpOApCIvLgudwRKf6xWSk4Xvpa6WtJSQdHiwfwdYJGCMpN%2FJRxJwegZcoVQ0zDmlL9VfueX%2B1mkNllklLZZT3zNnBfG9CEK3n9lq9%2B8pauTZf8BqgC1TrOG3iENfZFjSP94AY5IT0eLjTc6MdKoYkVq2vhGF%2F4ZVM65T2GKDwktwpD5ICB7yQjykyOf5Uno347nZ7XaEqMRrnjF0QRAxcFaAIa%2Blr5VIBRoxa%2FIJbUzK7nQgHDRXg6LEzSPKWgsfK1mLYCFpaHdXL9MQBfRK%2FJ9i7YaFZV2%2BcLvP%2BL6bYfwbxhNmQHjDqir%2FP0%2F2Y0c39j39eRL%2BOD%2BqoVe9by9iRxXv8ZS4%2F7Y66er%2FsY1BvHYeLMts7lx2hVIMMzm1ngBSldCTOtmjDOCqpy1AkBTX5r%2B80vGt%2FhK40syGnPALJVxkDWkLU93Ap93znUEZtnZf5ijMR44jqSTLYAI9J0Dbkyvqosyta4%2BN%2Bjeoaa2DKgw2by0wgY6pgF9BS1tKWaDL%2BBJtLSlRpzvNABf71nQ8vUXVX%2B6%2FjmCLmFBV7UgSLabp%2BX1JAq0wVnDT1RL3zCPfqj%2BqmLYdUOK1w%2Bv7WZSzvhZT3xtnb%2ByPWJ6WwciA2vhaep4gTEblZB%2BMRhgtLXK8C76rS825efkLYOPyoPmNYMPbQ5cIsBcm8Pbm6ft%2BfCkF9BET8y0Ov5Hv0guE%2FFNR2YV5X5PjJjC22CKCJ3e&X-Amz-Signature=2688f6b1c10154bf79ab90ac97759581f74e00cef5417b03c2e301ff517d559f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBR3JJWF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGmmsDnOwMfdep44Pt%2BBOkHL7QtNtKdk%2B1g%2FDt8EM7uMAiBwFbp33RKhKHp9J8Wnw91FWsztrUxtwzBc0WAMa2TbdSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMGb49gE3ccgC1WHn8KtwDGdjGIo%2FWkaqGUmvICd41dCSRre12Hk9YKjm7EerTFCDpsaC8VS%2BzI9o4C%2BTt4JVCGIx9JAChmZ8CZZVIrgEeMAH9OHPxSYuLq4lgUuf2QZL9c1Hpkr3gJeqom2voXnqvdngLaaLfG12VYbUJXWpOApCIvLgudwRKf6xWSk4Xvpa6WtJSQdHiwfwdYJGCMpN%2FJRxJwegZcoVQ0zDmlL9VfueX%2B1mkNllklLZZT3zNnBfG9CEK3n9lq9%2B8pauTZf8BqgC1TrOG3iENfZFjSP94AY5IT0eLjTc6MdKoYkVq2vhGF%2F4ZVM65T2GKDwktwpD5ICB7yQjykyOf5Uno347nZ7XaEqMRrnjF0QRAxcFaAIa%2Blr5VIBRoxa%2FIJbUzK7nQgHDRXg6LEzSPKWgsfK1mLYCFpaHdXL9MQBfRK%2FJ9i7YaFZV2%2BcLvP%2BL6bYfwbxhNmQHjDqir%2FP0%2F2Y0c39j39eRL%2BOD%2BqoVe9by9iRxXv8ZS4%2F7Y66er%2FsY1BvHYeLMts7lx2hVIMMzm1ngBSldCTOtmjDOCqpy1AkBTX5r%2B80vGt%2FhK40syGnPALJVxkDWkLU93Ap93znUEZtnZf5ijMR44jqSTLYAI9J0Dbkyvqosyta4%2BN%2Bjeoaa2DKgw2by0wgY6pgF9BS1tKWaDL%2BBJtLSlRpzvNABf71nQ8vUXVX%2B6%2FjmCLmFBV7UgSLabp%2BX1JAq0wVnDT1RL3zCPfqj%2BqmLYdUOK1w%2Bv7WZSzvhZT3xtnb%2ByPWJ6WwciA2vhaep4gTEblZB%2BMRhgtLXK8C76rS825efkLYOPyoPmNYMPbQ5cIsBcm8Pbm6ft%2BfCkF9BET8y0Ov5Hv0guE%2FFNR2YV5X5PjJjC22CKCJ3e&X-Amz-Signature=970216682b0faedcf2414bc5a6cc9134905b7ee15b8915a569fadf9cf2f22c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466373DSWLL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGj9eEYGxK%2BL%2BRkw9FJ9tte%2BJIDizrHBkJD7DG8%2F9haHAiEAk04mcXq3em%2FQ3%2B37PN0dMlKnhGVmZjKDwOrLcXDOMpEq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNcKBydZwelnlCbnbSrcAxxQcOKbOwTg64ledkdRd%2FFwbBENww0rdANFhvhxT%2BBjSx9Z8WGz4KcDuGv5LR74CdTa%2B8oZ%2FR1pkIQJQ4GeIXkbmq0HqrzQaxVU%2F%2FA1cJRAfbkQbtVOmqiUn9mr5Uk35BVlXHHox8SXgtRZn6gMOOO8oZX%2Bb84aHbpormX1RqFfw%2BCW9kFVoNlmJEzbTvRYLrzXEgH0CrUXqSiv2E4L640%2FOIEGedgHN4Bpjr9WBfwB40%2B5%2BCXRvBgsXIkVmom95Mfcp6DIWa8HZwhujP7wl6EpKTd0Qn%2BQtNQjRE9Mi8oIzk4H1n2lE4Is3AANc%2FZGDwYB96qaYFCjV5ZAUjV%2BTGE7lpUNs4LeGJRyZXLAJOmBqntdZ7MuZ3Rp9oDvBsRA%2B0s%2FpqKDdZgQdk%2F3VxttRfQ8Qstcbrc0IQ1o%2BPqakhq8o5vW4MmiCpVvFj1UZIHfAewWnfU4DjcOZiT%2FVAUr7p%2FJgvgzHKxuZO9fMoynSmtqHlj5gsrFuf2izjdxhnEX56CpHLdgs1Cl42R6ZOx48ofQBcFfgTBco1VtHMhqGae5GqQdl7paQG%2Fq%2FC5FrryeHRESgMPzWO3Efn2ghHK32Nlq489ope0SDJ0jhXmX3I2zyT4kDdn9NqLiBq5IMIW8tMIGOqUBAXme8Dz0b5Rlfisw0zHxkFuMyVjp3oc6J0%2FoOpRPwDmsUdcPcFcm8aRiSiH8MktmujrapU0Z%2BjU%2FP2CMfCE0uzkVFAX2Uly5eX5O51hkAlr%2Br1ATMSPMstrVJ68retCjXzJZF%2Bh2HYLu5BmSJfJL%2FZEuxEj%2BGmanZNbMZgLujPJ%2FSYP5X7RE61COtmg0YEwCVEWchmazRL6KL4EKy7PT49InMUhe&X-Amz-Signature=3a2b3858475b6435ea9f04689f5c7c26928ca6b9ce7122172c8a9b08a8749892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWTIQ6G4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC5e5rUuMRuHmXSw03R5jjAhuOdWXKglzVjta9vt3cbigIhAJ8BC70REliZdgSveJswk1xaArwsR7oDjT2p7woIs6VYKv8DCCgQABoMNjM3NDIzMTgzODA1IgxLiHCBaURd3OHuQLwq3AOstZCmTjuBsbX302w1BwmfdcY1G64HPrfUdBJkDXOaD6yseHyyDpTlQW5THy5rH%2B6gRnkKeF1UEoHOeVLKJ7RvzNmUOQLgEBp%2FjHP13Cs1l2fBJLCdmMK3%2FI%2F5HmXrKfvaYw1amkoHYTTI2wA%2BMBNeZxIev0PEvhJtoUmAeup088wcOjl603xq7%2FSPaB3hUavRYObSQn25c4CNfLNoBdN13nxUn9aoHFFZNRcO5wWYa1a6p2LPZR9KBSHSdDww%2F5s5MR4RSIv%2FH37jAUQrtAb6O80faz3mEIInJCuTDXI4dWdDTQJ5sBfo%2FVY4jnu%2B2SFYqqQ%2BPX5IyVyMy%2BWXFonF%2B37CupW1IK59xkSSwf2Cu1ST0Kk%2FtLdB%2FSrIiad9iBB1fBRML0zq%2BN1iJt%2FZUn4bunh9M5H0vbjppYzOTabrwUL2pgI%2B4iL%2F9DpASi74fCmft6Ny3wr6MbOfkLz90V7XtCS%2F2TPcF4GUFw4qpw0%2Bi3kwL%2BQR6Hy2WxU7BG29YQV6066arQ3rEHmjjS9xnX87fi%2Bq7S1Mt8n6CJr2YdN5fmBYFgYoqn000l5le0hG0c6PLrQlUQWvQkFtGs8RAzvlK0TtUvuj7W8CEQ6r5AWwaKC8mtTq9NhIb%2BScxzCSvLTCBjqkAVibjSgTAmJXddZbNyxNwYLG5D49hFyTTwun1iSqCWozw8JgCqVQP0glifJCYblNE3FGqK77cd9F3CUQCE0sOqPDidEe28wyEv0c8tRBydbZrxK0lo30N%2BUZsbH23jRtJpQM9tP5274HwYaXh%2BX%2F6DUHW7SF1Frfaaw7ehi4NnMArRmUwHQDpT69mcsmHJEjwm2cjjxmmTaWiqeQRam5JfhKXDu2&X-Amz-Signature=6767a48d46d02b47fbd359a1d392c21b12a4da4737a1f0875e57d18e8858ade2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBR3JJWF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGmmsDnOwMfdep44Pt%2BBOkHL7QtNtKdk%2B1g%2FDt8EM7uMAiBwFbp33RKhKHp9J8Wnw91FWsztrUxtwzBc0WAMa2TbdSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMGb49gE3ccgC1WHn8KtwDGdjGIo%2FWkaqGUmvICd41dCSRre12Hk9YKjm7EerTFCDpsaC8VS%2BzI9o4C%2BTt4JVCGIx9JAChmZ8CZZVIrgEeMAH9OHPxSYuLq4lgUuf2QZL9c1Hpkr3gJeqom2voXnqvdngLaaLfG12VYbUJXWpOApCIvLgudwRKf6xWSk4Xvpa6WtJSQdHiwfwdYJGCMpN%2FJRxJwegZcoVQ0zDmlL9VfueX%2B1mkNllklLZZT3zNnBfG9CEK3n9lq9%2B8pauTZf8BqgC1TrOG3iENfZFjSP94AY5IT0eLjTc6MdKoYkVq2vhGF%2F4ZVM65T2GKDwktwpD5ICB7yQjykyOf5Uno347nZ7XaEqMRrnjF0QRAxcFaAIa%2Blr5VIBRoxa%2FIJbUzK7nQgHDRXg6LEzSPKWgsfK1mLYCFpaHdXL9MQBfRK%2FJ9i7YaFZV2%2BcLvP%2BL6bYfwbxhNmQHjDqir%2FP0%2F2Y0c39j39eRL%2BOD%2BqoVe9by9iRxXv8ZS4%2F7Y66er%2FsY1BvHYeLMts7lx2hVIMMzm1ngBSldCTOtmjDOCqpy1AkBTX5r%2B80vGt%2FhK40syGnPALJVxkDWkLU93Ap93znUEZtnZf5ijMR44jqSTLYAI9J0Dbkyvqosyta4%2BN%2Bjeoaa2DKgw2by0wgY6pgF9BS1tKWaDL%2BBJtLSlRpzvNABf71nQ8vUXVX%2B6%2FjmCLmFBV7UgSLabp%2BX1JAq0wVnDT1RL3zCPfqj%2BqmLYdUOK1w%2Bv7WZSzvhZT3xtnb%2ByPWJ6WwciA2vhaep4gTEblZB%2BMRhgtLXK8C76rS825efkLYOPyoPmNYMPbQ5cIsBcm8Pbm6ft%2BfCkF9BET8y0Ov5Hv0guE%2FFNR2YV5X5PjJjC22CKCJ3e&X-Amz-Signature=e00409b2b7ef775e45410580f4a85e5c5e16a2b599a8cd4f9f9c8538c3f98144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
