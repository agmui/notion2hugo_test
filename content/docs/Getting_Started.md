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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XULU3H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEEQVjhtlCxYtUuQQe7dkdn3d80ZufG7Dz96oLdxC%2BtOAiEA711KT8U2PsA%2FFcQsIeePnfdTzMKOPGacR%2FT9yFL3%2Fh4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBmLxaVcg9hc5oD8MyrcA5ZxMJ7tAsPt2A5Q0UUZWQsBLJsprpHvVaHocxT2gj7bMT3c%2FZNiZ9PWJD15DdW6mF5vL6wD18QG64vMovHET5J5brBC4RCUF3PYafW0yVm42qFfYDXFbiJo0B7h5EfwJ9GSqjIYXIgtrcSk5kqWfUcB2I%2FWxf6fQ37pMvEg75rLy0srLqbk9oTWxIGIQ9y1HkO2A2O9pmueKmY2JWWhUoy0cL%2F%2Bj1nkTcgfXbHTXhpVm%2B2R9WbeoabI%2BZkPyY9GGOO5L2b14LtgFTy7AGl%2BKlfsAWrOc4ij7LWDIfn04XZNc8MaHvF%2FS%2BkyYzkClKxYNKNl8HpPFqIhQUNEcxOx4O2yOTPB801DAHledrXxWtOFEDoDvZsEDUXGlEJmYWZ8hyNuxav9dDN6E9CXVc5QAYALHYsuSo2WuStReTRoi8RqkxsnVNbp3rvV0u41SJLgzOPgDDDI3G14ptnC07DbtFn7NGA6N%2FsUcf3Fnr0aUFXIv%2F5yhurnJSkNKGqz1%2FeT4NIBIDfL4q%2F3JuDK5Sa%2BTnUUhQd1tIESumH34R%2Fq7sGzUT%2BIWGh0KNR1EyExFozjMvgR5EAT3uDzU8uP8Xmj7JV6N7rgU8YE2418vc85pHmc58yqAnWvyAClUdX8MM%2BcgsUGOqUBGvpj4LVR9Suaw%2FGnAJlPA%2FQXtl9sZrZCoZ7IzDqs0MyKW1%2FctloJIHoUf1QSNIIH70ogTCvVn0YuhTZ2rD2pSvLgTRvcgE6Epp8NGfWm6StWAjaCQiR7tMkPd0CRlCGGnUiWj8aMUekXbY%2BhO%2BPdapCCvb1MnPM5176fvICvrjdIQTuxxD60u8Vsqz1AL3pV%2FohxCdcoKFFw%2BhJKJxwTxS2sgWJ2&X-Amz-Signature=fbb3a5e9f9da01314a17526df1d97b6c900ec8089eeb150817bc344b940621af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XULU3H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEEQVjhtlCxYtUuQQe7dkdn3d80ZufG7Dz96oLdxC%2BtOAiEA711KT8U2PsA%2FFcQsIeePnfdTzMKOPGacR%2FT9yFL3%2Fh4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBmLxaVcg9hc5oD8MyrcA5ZxMJ7tAsPt2A5Q0UUZWQsBLJsprpHvVaHocxT2gj7bMT3c%2FZNiZ9PWJD15DdW6mF5vL6wD18QG64vMovHET5J5brBC4RCUF3PYafW0yVm42qFfYDXFbiJo0B7h5EfwJ9GSqjIYXIgtrcSk5kqWfUcB2I%2FWxf6fQ37pMvEg75rLy0srLqbk9oTWxIGIQ9y1HkO2A2O9pmueKmY2JWWhUoy0cL%2F%2Bj1nkTcgfXbHTXhpVm%2B2R9WbeoabI%2BZkPyY9GGOO5L2b14LtgFTy7AGl%2BKlfsAWrOc4ij7LWDIfn04XZNc8MaHvF%2FS%2BkyYzkClKxYNKNl8HpPFqIhQUNEcxOx4O2yOTPB801DAHledrXxWtOFEDoDvZsEDUXGlEJmYWZ8hyNuxav9dDN6E9CXVc5QAYALHYsuSo2WuStReTRoi8RqkxsnVNbp3rvV0u41SJLgzOPgDDDI3G14ptnC07DbtFn7NGA6N%2FsUcf3Fnr0aUFXIv%2F5yhurnJSkNKGqz1%2FeT4NIBIDfL4q%2F3JuDK5Sa%2BTnUUhQd1tIESumH34R%2Fq7sGzUT%2BIWGh0KNR1EyExFozjMvgR5EAT3uDzU8uP8Xmj7JV6N7rgU8YE2418vc85pHmc58yqAnWvyAClUdX8MM%2BcgsUGOqUBGvpj4LVR9Suaw%2FGnAJlPA%2FQXtl9sZrZCoZ7IzDqs0MyKW1%2FctloJIHoUf1QSNIIH70ogTCvVn0YuhTZ2rD2pSvLgTRvcgE6Epp8NGfWm6StWAjaCQiR7tMkPd0CRlCGGnUiWj8aMUekXbY%2BhO%2BPdapCCvb1MnPM5176fvICvrjdIQTuxxD60u8Vsqz1AL3pV%2FohxCdcoKFFw%2BhJKJxwTxS2sgWJ2&X-Amz-Signature=1453a03638dcafd0bb013a901b0b2c5cc7d5b333084758347a818ef1ecf51d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XULU3H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEEQVjhtlCxYtUuQQe7dkdn3d80ZufG7Dz96oLdxC%2BtOAiEA711KT8U2PsA%2FFcQsIeePnfdTzMKOPGacR%2FT9yFL3%2Fh4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBmLxaVcg9hc5oD8MyrcA5ZxMJ7tAsPt2A5Q0UUZWQsBLJsprpHvVaHocxT2gj7bMT3c%2FZNiZ9PWJD15DdW6mF5vL6wD18QG64vMovHET5J5brBC4RCUF3PYafW0yVm42qFfYDXFbiJo0B7h5EfwJ9GSqjIYXIgtrcSk5kqWfUcB2I%2FWxf6fQ37pMvEg75rLy0srLqbk9oTWxIGIQ9y1HkO2A2O9pmueKmY2JWWhUoy0cL%2F%2Bj1nkTcgfXbHTXhpVm%2B2R9WbeoabI%2BZkPyY9GGOO5L2b14LtgFTy7AGl%2BKlfsAWrOc4ij7LWDIfn04XZNc8MaHvF%2FS%2BkyYzkClKxYNKNl8HpPFqIhQUNEcxOx4O2yOTPB801DAHledrXxWtOFEDoDvZsEDUXGlEJmYWZ8hyNuxav9dDN6E9CXVc5QAYALHYsuSo2WuStReTRoi8RqkxsnVNbp3rvV0u41SJLgzOPgDDDI3G14ptnC07DbtFn7NGA6N%2FsUcf3Fnr0aUFXIv%2F5yhurnJSkNKGqz1%2FeT4NIBIDfL4q%2F3JuDK5Sa%2BTnUUhQd1tIESumH34R%2Fq7sGzUT%2BIWGh0KNR1EyExFozjMvgR5EAT3uDzU8uP8Xmj7JV6N7rgU8YE2418vc85pHmc58yqAnWvyAClUdX8MM%2BcgsUGOqUBGvpj4LVR9Suaw%2FGnAJlPA%2FQXtl9sZrZCoZ7IzDqs0MyKW1%2FctloJIHoUf1QSNIIH70ogTCvVn0YuhTZ2rD2pSvLgTRvcgE6Epp8NGfWm6StWAjaCQiR7tMkPd0CRlCGGnUiWj8aMUekXbY%2BhO%2BPdapCCvb1MnPM5176fvICvrjdIQTuxxD60u8Vsqz1AL3pV%2FohxCdcoKFFw%2BhJKJxwTxS2sgWJ2&X-Amz-Signature=d0906e899b3bae15faddb8959983d299872aed4a60fd110b1cdd8be7d76e206f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPN77BNI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCyIh2kxUWwe8XSUUPFWREMwfp91Olnp4gDOmVu9yKABwIhAIdx%2FwNG04tNXWFRkDtY7bKeYNynugEg4pK5Aj2W%2FgpRKv8DCHcQABoMNjM3NDIzMTgzODA1Igzim25ITDy0So5Cwgsq3ANwsIEpHY3NW0ee%2FINGKyvXlOmEstkY%2F1oj26PLaeTIba9QboQrejvQUiTF7%2BEfm2FeEMSVDCQZihOAe6QeizWnsWl9umdO5IFKdeLAxXGuk9ZD5Df11oIvt%2B7iBxpD%2F2jzj33Jpx4zvv%2FhqksJ%2FiP11QonaymOqD7OSvOaxkCDqW54FRsjuDk3an1peQpPsC5BqB6TgOdFb1L%2BuKdoVGvnc8VGxM%2BguVI7bye%2FscVlBt7w2xg8WTWpPKGrjwsEDPnU0a8f3F2A0AG6YcdRls%2BynCUg80eBowYFyblMpNCaoEVNCjyOnnjcu4T8qOS361B9r16oFXsCk49WiNqWuwcmYO%2FjLAYtTOQvYOe9BgIuJhj%2BBqg29c4aChgjXHWKFABNri%2B95kZ7iLWoQObji2J7YfuLULWcMu6EGjNsgX5pe3fC8IWbyeuc0CSD%2BPQH0%2BqMj%2BNzjWEf0BmmJe4xVJ%2FP1VcztNpenh23PDEJvVda%2F7DoUMhyz9Pqil2CCZQgxbcfogSa3r1BfnqrL7FJqtGB9NBlfZsz3xcLfd9CYUyQdEyQnHXHoZkzTrAvm7rPYlJ60nKpcin2PAd2Olzt%2BkjwQuoyj0c8rwWjSV5HDOsGvbiZYK8xiSteaMamRzCznYLFBjqkAb41qH9GvsfsUA5l2icDI61pOHQeSyMclIOcd2MKUzA8c9vdsEJDD3hCF5yURixmajJvIfjrVdPfZODhHh4A3LFeIQSehaJGd45BrU5hx2uTS8SvNzSJFeJx0xw5Jze8vSPheZ1AN8ENzPiJSGAlsRIh4%2Fa03r%2BEygjGSbZQDXNoW5S7SDAcc5YRoQp9nSP0noraHIeYY1c9nmmyfn1eQBIqq%2Bg5&X-Amz-Signature=d96dc9e3218181192d70a27139207f27a101ae15936a977944f0cc6b46c720a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMWS6GA3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDw2n4vsXSZJIMRK2%2BA6pahLYLCuR0Akf%2FJFa4C2rHZ9gIgKRmIW5VOkhsdncgOOQR%2FrBDmcAY1q9kUQDQ86lB7NKwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCt6yyymAuLrSHvtpSrcA%2FYl3l2SjS83oScYeBQZ%2FtvuyOaY0x%2BvRgraLzFDKVReraVotB3VJaOMJ82U4200Sr41PSoOVqLkt81qW9nyPMf9FXz%2FDLMBYnVErSVU771m8wR%2Bl9rgRBfAqHASx1MZ2bV09x1087EfmKp8KUKOg3VcedKNIAUX8BvMtLFL54CVbCbp1Cin5WwXAFg8O7MeIiAq2RUKeHwZTljWEtkxp9Yo2Dy%2FxsY9dRa8ZGQzw45H4M6QmBcj65ivpO%2FuSys%2B%2Fj40IRMGGBlQ7Gt%2Fx8%2F61SsjDiJyLObFo8EBl%2B13t4APWIBLS9nYReCR1IXK9rUjx3%2FDFfgaN49mGRFlwA3qlA%2BpEtzkd4w7jNtEBsYLKSs47M3z%2FdCCJSzhP8PJa1k8bM5iVZHtEWe%2FheK2bg%2BEmu6mK5TN6Wau%2FJb9wVDZRp2y2SEoYEUhYFgbyoLLs8iIeiovCpjF6o7igc1W9W2cBL8CBSCVf2crQepUarJDGzw6fux2TeQxTl3arJeSKWvJPIX99rdKlGEJkOFOKspZ0nOMqFBtV7%2FvpbuYo37xkskTjzFPjPkpd6vpFbZZzvY1YF2wdO2UmwE4kj%2BTRqo0TQ1HDD1WWlV66lPN3DwDLWM3iFkeJskZaPD%2BoF84MKadgsUGOqUBKN7u3MPi%2BAehHtCESKdeXdaLma4kkqtfazBLe2JX2ntooFdGNx874hbmCZfpo4ud4rk5XWJgOsE6XufrkcSMk%2FTZTvjz809BjRCM64FMMahbVsjWm7PMlIjC%2BJyR%2BDqNbFPWsc%2Fi8wFdDq5aeZitiwq2aqwZGX3IUiuURJEa27R%2FATgQ182s8f0GGYJOj7sBvysYeQ%2FBx4QdhGCf%2FilC78nUg0ry&X-Amz-Signature=6c3e5b35afe702cac359db4f789289dbbffc1d4ef03f44e258a525f6bb10488c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645XULU3H%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEEQVjhtlCxYtUuQQe7dkdn3d80ZufG7Dz96oLdxC%2BtOAiEA711KT8U2PsA%2FFcQsIeePnfdTzMKOPGacR%2FT9yFL3%2Fh4q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBmLxaVcg9hc5oD8MyrcA5ZxMJ7tAsPt2A5Q0UUZWQsBLJsprpHvVaHocxT2gj7bMT3c%2FZNiZ9PWJD15DdW6mF5vL6wD18QG64vMovHET5J5brBC4RCUF3PYafW0yVm42qFfYDXFbiJo0B7h5EfwJ9GSqjIYXIgtrcSk5kqWfUcB2I%2FWxf6fQ37pMvEg75rLy0srLqbk9oTWxIGIQ9y1HkO2A2O9pmueKmY2JWWhUoy0cL%2F%2Bj1nkTcgfXbHTXhpVm%2B2R9WbeoabI%2BZkPyY9GGOO5L2b14LtgFTy7AGl%2BKlfsAWrOc4ij7LWDIfn04XZNc8MaHvF%2FS%2BkyYzkClKxYNKNl8HpPFqIhQUNEcxOx4O2yOTPB801DAHledrXxWtOFEDoDvZsEDUXGlEJmYWZ8hyNuxav9dDN6E9CXVc5QAYALHYsuSo2WuStReTRoi8RqkxsnVNbp3rvV0u41SJLgzOPgDDDI3G14ptnC07DbtFn7NGA6N%2FsUcf3Fnr0aUFXIv%2F5yhurnJSkNKGqz1%2FeT4NIBIDfL4q%2F3JuDK5Sa%2BTnUUhQd1tIESumH34R%2Fq7sGzUT%2BIWGh0KNR1EyExFozjMvgR5EAT3uDzU8uP8Xmj7JV6N7rgU8YE2418vc85pHmc58yqAnWvyAClUdX8MM%2BcgsUGOqUBGvpj4LVR9Suaw%2FGnAJlPA%2FQXtl9sZrZCoZ7IzDqs0MyKW1%2FctloJIHoUf1QSNIIH70ogTCvVn0YuhTZ2rD2pSvLgTRvcgE6Epp8NGfWm6StWAjaCQiR7tMkPd0CRlCGGnUiWj8aMUekXbY%2BhO%2BPdapCCvb1MnPM5176fvICvrjdIQTuxxD60u8Vsqz1AL3pV%2FohxCdcoKFFw%2BhJKJxwTxS2sgWJ2&X-Amz-Signature=4553461e1c92aae45cc5fb14ded01012928e58aa7ec69dfdf6468e4b60fe7a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
