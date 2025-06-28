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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXIIDFP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGUwD%2BKdKgklpZFAjapcYY2M6Ruq%2BskDRxK48nofvcGAiEAst3dkMmblvsxbvWJ9hU9Jza7Lg8kx3Fe6ruNuqQH7xcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrmTwEoIDCZEC5aTircA5meCV%2BFdcc1d31QqJ1Pd7GWTmQJJGpbRxfw514ZOV7E4zhU5HVroo14YI0GpNG2CZQfZlc7pNqUBPUE7jq%2FoS53i6BPhNRUUYG8S4ZWmJqpIdIwJhXrZfHC%2FgAvvjT%2FnSsWR4%2BgJrS4Sq2Wmta39AC4sT4p5kB4HKZPddmSMPbR7ZhUkJxIR2mvXabOlMSu350ud6TGyiLqQAVIcVDyKrgfhSNd%2BGMMYJ6zimvM8jd%2FgG%2FGhxNirxG2DGRuAWLfXbG6iX6vYB3mnIpMn0oPZcHKaHyukI2mK828CeFPsNzJ6i9gmxhGYHy0PZq%2F0lZ1lO61iPbo9%2B0JAuzmwvn9%2FYOzpd0O4cio5lKF5O7KRwhSpD%2BsEUh%2FV%2BxtSemvgKm50TpktgdMZIaAZ6IywXPZVMbQjwQNP%2Bgkcxw40VCnWkONa8Y%2B3ak%2FPuoHCl1noESEkSNS%2Bkc3wOthwTPxYzBsKcGljOWHyV9wtS%2FdLf%2BRjMYAi80J674C2p6w%2B4JtQVvSFqoS%2B71utDYxkCw66QYsRfsLNfstwLvT1PUyBJ7g2dE%2FZI0CyYsD6sXtmFxkPGkhUr5CV0k%2BKDGdUFBGY38QYmualXoZOsiJ%2FxtHCM3UmwGgrpSYAPF1h7%2FCfUTqMIL1gMMGOqUBQUnZD2NIW6%2Bfpjvo2f57YfWTlsEUnLMpO5sjGQ2ewR2%2FGJ%2FMHnrJSEgYwd0eUVNVgL7kAoaVN9lhBtFwXey8v17CTXZTPy8L%2F66uhxryrr9wCBzkcogxc0lB4pJo0uLSZFGv%2FGsPg4LGSLaYoVoPceSAOZDwEKXqYJuQxCq%2FxwaXpIsBnqcGmXvcz6qzJhpw%2FBa%2FZHVlFIIveHK%2BzT1BIj51WH8H&X-Amz-Signature=44844c252e5239cad817989521d7bb24d2067c83302baaba6a4ef56c2cceceee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXIIDFP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGUwD%2BKdKgklpZFAjapcYY2M6Ruq%2BskDRxK48nofvcGAiEAst3dkMmblvsxbvWJ9hU9Jza7Lg8kx3Fe6ruNuqQH7xcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrmTwEoIDCZEC5aTircA5meCV%2BFdcc1d31QqJ1Pd7GWTmQJJGpbRxfw514ZOV7E4zhU5HVroo14YI0GpNG2CZQfZlc7pNqUBPUE7jq%2FoS53i6BPhNRUUYG8S4ZWmJqpIdIwJhXrZfHC%2FgAvvjT%2FnSsWR4%2BgJrS4Sq2Wmta39AC4sT4p5kB4HKZPddmSMPbR7ZhUkJxIR2mvXabOlMSu350ud6TGyiLqQAVIcVDyKrgfhSNd%2BGMMYJ6zimvM8jd%2FgG%2FGhxNirxG2DGRuAWLfXbG6iX6vYB3mnIpMn0oPZcHKaHyukI2mK828CeFPsNzJ6i9gmxhGYHy0PZq%2F0lZ1lO61iPbo9%2B0JAuzmwvn9%2FYOzpd0O4cio5lKF5O7KRwhSpD%2BsEUh%2FV%2BxtSemvgKm50TpktgdMZIaAZ6IywXPZVMbQjwQNP%2Bgkcxw40VCnWkONa8Y%2B3ak%2FPuoHCl1noESEkSNS%2Bkc3wOthwTPxYzBsKcGljOWHyV9wtS%2FdLf%2BRjMYAi80J674C2p6w%2B4JtQVvSFqoS%2B71utDYxkCw66QYsRfsLNfstwLvT1PUyBJ7g2dE%2FZI0CyYsD6sXtmFxkPGkhUr5CV0k%2BKDGdUFBGY38QYmualXoZOsiJ%2FxtHCM3UmwGgrpSYAPF1h7%2FCfUTqMIL1gMMGOqUBQUnZD2NIW6%2Bfpjvo2f57YfWTlsEUnLMpO5sjGQ2ewR2%2FGJ%2FMHnrJSEgYwd0eUVNVgL7kAoaVN9lhBtFwXey8v17CTXZTPy8L%2F66uhxryrr9wCBzkcogxc0lB4pJo0uLSZFGv%2FGsPg4LGSLaYoVoPceSAOZDwEKXqYJuQxCq%2FxwaXpIsBnqcGmXvcz6qzJhpw%2FBa%2FZHVlFIIveHK%2BzT1BIj51WH8H&X-Amz-Signature=10323722cdb3197b16fa1b54009a80181818c019d1a188a2eb45f2b02a699704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXIIDFP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGUwD%2BKdKgklpZFAjapcYY2M6Ruq%2BskDRxK48nofvcGAiEAst3dkMmblvsxbvWJ9hU9Jza7Lg8kx3Fe6ruNuqQH7xcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrmTwEoIDCZEC5aTircA5meCV%2BFdcc1d31QqJ1Pd7GWTmQJJGpbRxfw514ZOV7E4zhU5HVroo14YI0GpNG2CZQfZlc7pNqUBPUE7jq%2FoS53i6BPhNRUUYG8S4ZWmJqpIdIwJhXrZfHC%2FgAvvjT%2FnSsWR4%2BgJrS4Sq2Wmta39AC4sT4p5kB4HKZPddmSMPbR7ZhUkJxIR2mvXabOlMSu350ud6TGyiLqQAVIcVDyKrgfhSNd%2BGMMYJ6zimvM8jd%2FgG%2FGhxNirxG2DGRuAWLfXbG6iX6vYB3mnIpMn0oPZcHKaHyukI2mK828CeFPsNzJ6i9gmxhGYHy0PZq%2F0lZ1lO61iPbo9%2B0JAuzmwvn9%2FYOzpd0O4cio5lKF5O7KRwhSpD%2BsEUh%2FV%2BxtSemvgKm50TpktgdMZIaAZ6IywXPZVMbQjwQNP%2Bgkcxw40VCnWkONa8Y%2B3ak%2FPuoHCl1noESEkSNS%2Bkc3wOthwTPxYzBsKcGljOWHyV9wtS%2FdLf%2BRjMYAi80J674C2p6w%2B4JtQVvSFqoS%2B71utDYxkCw66QYsRfsLNfstwLvT1PUyBJ7g2dE%2FZI0CyYsD6sXtmFxkPGkhUr5CV0k%2BKDGdUFBGY38QYmualXoZOsiJ%2FxtHCM3UmwGgrpSYAPF1h7%2FCfUTqMIL1gMMGOqUBQUnZD2NIW6%2Bfpjvo2f57YfWTlsEUnLMpO5sjGQ2ewR2%2FGJ%2FMHnrJSEgYwd0eUVNVgL7kAoaVN9lhBtFwXey8v17CTXZTPy8L%2F66uhxryrr9wCBzkcogxc0lB4pJo0uLSZFGv%2FGsPg4LGSLaYoVoPceSAOZDwEKXqYJuQxCq%2FxwaXpIsBnqcGmXvcz6qzJhpw%2FBa%2FZHVlFIIveHK%2BzT1BIj51WH8H&X-Amz-Signature=61ce96731b110615d1db368d730aaa0f7c2948a7acda7a1b476f5f904bccff47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4BNXNGF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2FkI8py0Zpt9J5RhWTG6l2PXs9H%2B%2BklEi9z%2BTbDvewyAiEAyXhTNVIf%2FTFFp7QrJJVPr5IOrdnhEYrIGZ8OckPKbeQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARNe%2BW5zEBvM%2FmOVircA6AQqw5agFg4pgSNT%2B48EavQ%2BzeWu6eQXOWTAS4MPrmkdcoE7BtixMQrO02dZkcVNqLwRGNAJIKgEZdePm2cww2qFco7HaByG7x1PRvpB7%2F38cZjIGYycgkYUB75ybBSYKw6Gq5oC%2BFPb3puYUqB8sJuRLv%2FBDQfCsrrA78qyWu%2BEgCqC7LAz%2FrdD8XucJ4GF9IoqfQPhP3Vg5zLFl2DRk92Ffvoy84irB1phyNlZk%2FRr8VsOazoKDLdhN3KVZncCXfeWmygQRM%2B5mmtrRjIzj1NRFIMJCIHIWSzlPdsKCZimSJ6u8iP5WVz8L%2B5hqrmujsjgbQP7QexztMy3CyFAGquNlPa6vtLZsWdlRbcqXx7CLOF%2FjUceSdLR32TGImIHp2HVPmqGWlIHK0vXBhOgLiMZ99zuFayEsTZEDZ13WUU3s%2Faxx04XURGRnK5e3MKho7pppEWE%2F9IOPR0tkSyuookVs6Yql60GjFIqnV30NjiTntS4WNXKYL7r6x6q9ghFWVWNE9qYAbAqO0S5l5ftzUmNO83oSU86fRj6Kx3JcauNqBUb%2FrEeKiO30b2uXAHiFcBZdyAhNLO0pHl0kpnwpgEcS%2F6Cv7RLaKW32jLqr3vBQcYAbiAiLzcp3iFMMj0gMMGOqUB37X0zgEgDflLOj81NY7v%2FZpeILeBhDfTUcsTweGAikYAdFdKzT5VnFj4b6xdtfnb6DiYO9sJUnMC7%2B3Wd5qsUhFMWyjDMJqHazOClcdW93EhQepQ13mMKZzrKOvG0y2O03g73DfS4T2RTWJIFnvjkty78A%2FneJSs4P3iEI5Ik4ex57ghEDb0sC5YMVHDiz2nGD8KZKYk7JI10DZ1oGLEhoYH1pbO&X-Amz-Signature=d43bf812dff6f23767f3115e5fed80d3d8cbd5928e5a9665462ba9783505c438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSAMQ346%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAl7FlGjqNZJZ4%2FZVhX0Pf9eHzfUVr8wSGWNXhPCPviXAiAMfkTAu%2BElnyUFbeCBat575aioCdgPJo%2FBzjecAWsJuyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ85W2J5qStZjIP0SKtwD%2F8y1xqkJd5na6nxugLGhmPRWaf%2BcYazWoPeVew7nS2q2bCta3wB6aSvXFb99NusQAK%2Fxl%2FJe6wrsxDwGA%2Bse%2Bq2tscnz1tgu2dOEuw6L5h2MSTQbGJKIO20wai3VLCN5PVh1cnlXUcVwFg1%2Fohw9TaT0jBOc4RqarEKhbdJBkx0EbIMnP64oaUOee4OvEclbJkzRxFi6TP9%2FaKa0zeyNX80apsHkrGvZQA3MEzILJy9wtKKQ0XReyOHr8ni0bkOiPcSuVV2SIegvbbMzIkDQg7HBzINWH9sMj8OvclpWnGI3r19aOMMh3CGlAfRy%2F9M%2FvagPzR%2BU%2BmQhuCheqSsmABM4UwU0aUBKVtpz%2FRSYx8hGnLO8fak39qBmMQBjP2RaawkfVuHFcFVGetG%2BFsb7gX2FmX64xNme1R3nJhKdN9AHKe8BxhUOPXpisdsJcFvRMDCF%2Bw%2B3OtpIdT5lyMEpK9xZCetTuxeIo6Nu2Q6THyBVjs7qTUm%2F3%2B1FplJYta2IKOi2aewT%2FPhGQG7%2B4Po7GUbfZEP6UYYApFFPI8vGjdYL30ctRfg2JIqOuCSfUVHHj5%2BULkpk7y9dH%2FHKt%2Fc5ODcRxwF1W1ObrxBITRpkbii%2FDkLtvZze2DriAdIwpvSAwwY6pgGWE4kWklO9hJO0SETEVe%2BrfchktJpLPwoHlbV%2B8shicZv07EmBgP7V2HMtsIiKjTtK1G6K8KvNJYtcuLKNznbsNm%2FTS0CdrKwY5TVOIjUSVIRox%2FoYOOBfL8w8EANOUnLcab6%2BiTkP61KOclllOkIZFk0MMLkFLfBXTz%2FXhB0asoEDd72%2FZ8wyzKKoCkwaxKemLFXlB9weuYg1Qu30eSXgJaszVKgD&X-Amz-Signature=421c276cc7e4b649a46733e82bca5540e6159563a66a28f8d7034a516720cb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOXIIDFP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGUwD%2BKdKgklpZFAjapcYY2M6Ruq%2BskDRxK48nofvcGAiEAst3dkMmblvsxbvWJ9hU9Jza7Lg8kx3Fe6ruNuqQH7xcqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrmTwEoIDCZEC5aTircA5meCV%2BFdcc1d31QqJ1Pd7GWTmQJJGpbRxfw514ZOV7E4zhU5HVroo14YI0GpNG2CZQfZlc7pNqUBPUE7jq%2FoS53i6BPhNRUUYG8S4ZWmJqpIdIwJhXrZfHC%2FgAvvjT%2FnSsWR4%2BgJrS4Sq2Wmta39AC4sT4p5kB4HKZPddmSMPbR7ZhUkJxIR2mvXabOlMSu350ud6TGyiLqQAVIcVDyKrgfhSNd%2BGMMYJ6zimvM8jd%2FgG%2FGhxNirxG2DGRuAWLfXbG6iX6vYB3mnIpMn0oPZcHKaHyukI2mK828CeFPsNzJ6i9gmxhGYHy0PZq%2F0lZ1lO61iPbo9%2B0JAuzmwvn9%2FYOzpd0O4cio5lKF5O7KRwhSpD%2BsEUh%2FV%2BxtSemvgKm50TpktgdMZIaAZ6IywXPZVMbQjwQNP%2Bgkcxw40VCnWkONa8Y%2B3ak%2FPuoHCl1noESEkSNS%2Bkc3wOthwTPxYzBsKcGljOWHyV9wtS%2FdLf%2BRjMYAi80J674C2p6w%2B4JtQVvSFqoS%2B71utDYxkCw66QYsRfsLNfstwLvT1PUyBJ7g2dE%2FZI0CyYsD6sXtmFxkPGkhUr5CV0k%2BKDGdUFBGY38QYmualXoZOsiJ%2FxtHCM3UmwGgrpSYAPF1h7%2FCfUTqMIL1gMMGOqUBQUnZD2NIW6%2Bfpjvo2f57YfWTlsEUnLMpO5sjGQ2ewR2%2FGJ%2FMHnrJSEgYwd0eUVNVgL7kAoaVN9lhBtFwXey8v17CTXZTPy8L%2F66uhxryrr9wCBzkcogxc0lB4pJo0uLSZFGv%2FGsPg4LGSLaYoVoPceSAOZDwEKXqYJuQxCq%2FxwaXpIsBnqcGmXvcz6qzJhpw%2FBa%2FZHVlFIIveHK%2BzT1BIj51WH8H&X-Amz-Signature=4b9083c03d677ccb2b80941a7203734b32b1d992e38a4cc679922e4814cbc2c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
