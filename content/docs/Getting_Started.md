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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3FWWQA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGuBhDCluYQtpvb2cb8Wl3dkvh0pILVYVlfkEXl7d2M5AiBAABFtUcZW58lRx%2BBhJxmzvN90RP5P%2B5tsInETm50r7yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfubQDi6lWEB2aaKvKtwDNPVQ55LEU6rvtVd%2Bd621v0AWbB2YE6wYuZ%2Bq1egwVJ2ctT98q6ouA%2FE3RMHEI2ZyiGQxMEB7Ov9QQOwsFfNCfgUeLvg3M14VwfY2cnWigqhB77vqtYmTLwvIJWYqDjJ%2BZruhtJuYZQMwKJ%2BRxfszJv2mZ4hG1jC0i78Tivjex8RKryhnx7QnzKmuPgwQ9Yvd93kok%2Fsv0Uon2leOWW2EEsgbKEoykn8JUQo97KJPr2cqGbOcnlcFbOdK4wVqGTJREgy0bgPWgg6xN2DCmhn7Ss1uRaeJeEsyrWb4dTaHq50VMZm%2FypEvfnQJECiwVMnXgxtHkPkWY7WjIz38bpiSbC2suw%2FZZx6aC%2FUsXAn4P4PH7AEKwndA0GJgaWZxzMRN1umr3NTJYBpEyIWQnhd%2FbCcbRyW9Za4h36zMWqiK6kaR%2FD%2F9idfl8vrRc0tfYU3vaz3WNLtsgR3HxB3eiWRh4nN4C2LcZxSEqTNNIp6PBte0XLtWl61KcSbNXqNW3iDwk%2BfPe1OvoEifVgOkU9h30c2qzZ4xX37I0J85YJ4AHcXPQh0%2FTFVYb6wUx7Yuz0X9MMRRFfGLWumdImMWflSX6ms81vvrqAyLDLEwt2uPajzG%2BdFIeBhUJfUMZ2swkMfhwgY6pgGXpjxLqokzLnwr9dWErpsQ7fNsdodLGJFtAzsoOmHXvQGOM8S94%2FzkeMjHeRWegzQcA7s285Plj6rfLgNPMxZnv35m81OICsn4%2BLqGlNnpZwYtKe%2FQb62vj8qVJuSDpIyWRd4AQD%2BdnWO%2FikdpAy8TdzFI7Qvuws6ukTEniPP%2FqTm1xmZwSGaECnVhMcMPeqFqsvzGvi0%2BjvJyBAL2ExA17VrD9XfW&X-Amz-Signature=db93836f5fe266ba9f9550a4fb4eb9fb4368fb481e7e53261c9666bdfa68fedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3FWWQA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGuBhDCluYQtpvb2cb8Wl3dkvh0pILVYVlfkEXl7d2M5AiBAABFtUcZW58lRx%2BBhJxmzvN90RP5P%2B5tsInETm50r7yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfubQDi6lWEB2aaKvKtwDNPVQ55LEU6rvtVd%2Bd621v0AWbB2YE6wYuZ%2Bq1egwVJ2ctT98q6ouA%2FE3RMHEI2ZyiGQxMEB7Ov9QQOwsFfNCfgUeLvg3M14VwfY2cnWigqhB77vqtYmTLwvIJWYqDjJ%2BZruhtJuYZQMwKJ%2BRxfszJv2mZ4hG1jC0i78Tivjex8RKryhnx7QnzKmuPgwQ9Yvd93kok%2Fsv0Uon2leOWW2EEsgbKEoykn8JUQo97KJPr2cqGbOcnlcFbOdK4wVqGTJREgy0bgPWgg6xN2DCmhn7Ss1uRaeJeEsyrWb4dTaHq50VMZm%2FypEvfnQJECiwVMnXgxtHkPkWY7WjIz38bpiSbC2suw%2FZZx6aC%2FUsXAn4P4PH7AEKwndA0GJgaWZxzMRN1umr3NTJYBpEyIWQnhd%2FbCcbRyW9Za4h36zMWqiK6kaR%2FD%2F9idfl8vrRc0tfYU3vaz3WNLtsgR3HxB3eiWRh4nN4C2LcZxSEqTNNIp6PBte0XLtWl61KcSbNXqNW3iDwk%2BfPe1OvoEifVgOkU9h30c2qzZ4xX37I0J85YJ4AHcXPQh0%2FTFVYb6wUx7Yuz0X9MMRRFfGLWumdImMWflSX6ms81vvrqAyLDLEwt2uPajzG%2BdFIeBhUJfUMZ2swkMfhwgY6pgGXpjxLqokzLnwr9dWErpsQ7fNsdodLGJFtAzsoOmHXvQGOM8S94%2FzkeMjHeRWegzQcA7s285Plj6rfLgNPMxZnv35m81OICsn4%2BLqGlNnpZwYtKe%2FQb62vj8qVJuSDpIyWRd4AQD%2BdnWO%2FikdpAy8TdzFI7Qvuws6ukTEniPP%2FqTm1xmZwSGaECnVhMcMPeqFqsvzGvi0%2BjvJyBAL2ExA17VrD9XfW&X-Amz-Signature=200590a41f6f111a06dc304819078bbee7fbc5f7bcd578fc18d6aea624428e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3FWWQA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGuBhDCluYQtpvb2cb8Wl3dkvh0pILVYVlfkEXl7d2M5AiBAABFtUcZW58lRx%2BBhJxmzvN90RP5P%2B5tsInETm50r7yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfubQDi6lWEB2aaKvKtwDNPVQ55LEU6rvtVd%2Bd621v0AWbB2YE6wYuZ%2Bq1egwVJ2ctT98q6ouA%2FE3RMHEI2ZyiGQxMEB7Ov9QQOwsFfNCfgUeLvg3M14VwfY2cnWigqhB77vqtYmTLwvIJWYqDjJ%2BZruhtJuYZQMwKJ%2BRxfszJv2mZ4hG1jC0i78Tivjex8RKryhnx7QnzKmuPgwQ9Yvd93kok%2Fsv0Uon2leOWW2EEsgbKEoykn8JUQo97KJPr2cqGbOcnlcFbOdK4wVqGTJREgy0bgPWgg6xN2DCmhn7Ss1uRaeJeEsyrWb4dTaHq50VMZm%2FypEvfnQJECiwVMnXgxtHkPkWY7WjIz38bpiSbC2suw%2FZZx6aC%2FUsXAn4P4PH7AEKwndA0GJgaWZxzMRN1umr3NTJYBpEyIWQnhd%2FbCcbRyW9Za4h36zMWqiK6kaR%2FD%2F9idfl8vrRc0tfYU3vaz3WNLtsgR3HxB3eiWRh4nN4C2LcZxSEqTNNIp6PBte0XLtWl61KcSbNXqNW3iDwk%2BfPe1OvoEifVgOkU9h30c2qzZ4xX37I0J85YJ4AHcXPQh0%2FTFVYb6wUx7Yuz0X9MMRRFfGLWumdImMWflSX6ms81vvrqAyLDLEwt2uPajzG%2BdFIeBhUJfUMZ2swkMfhwgY6pgGXpjxLqokzLnwr9dWErpsQ7fNsdodLGJFtAzsoOmHXvQGOM8S94%2FzkeMjHeRWegzQcA7s285Plj6rfLgNPMxZnv35m81OICsn4%2BLqGlNnpZwYtKe%2FQb62vj8qVJuSDpIyWRd4AQD%2BdnWO%2FikdpAy8TdzFI7Qvuws6ukTEniPP%2FqTm1xmZwSGaECnVhMcMPeqFqsvzGvi0%2BjvJyBAL2ExA17VrD9XfW&X-Amz-Signature=203cdf04cc1d361fb8c4f7a5761ba85d9cc7004e703f87ab2430bd229064184e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICDEXXS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCID4Rv5Hd0gz2IRXnjIWTjhZrt7LRkgKTofQurfKFK6sdAiAfUTVvIyTG6qZvscz3qoVEV%2Br9MSZr5h5qrRw%2BKFSdxCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd1aChLEqdwPmR3UcKtwDNfB7UXMfLp22hBKnEFG9%2Fit6BxFMTqPJgwCWFFWRDlIIBiccLhKS1y4xVXYRi7IyBaBB3Dku2UfCskGITiXAdcR3yLSE2n%2BbuHF%2BNg7ClZG8ZWMSRCzwzbAfXCRRJu4B1AljRm9N3CKL6QTBBju00T4KwYOlmEe3CvU%2BwHqdQjZH9xROqKTtpEimlstUR2s1Im9y%2BG3U3PwuCnIGmfwXAl3qbQ9F%2FcXM%2FfBWuMfbzUVjX0jngkxym6WRUQa4tItUAK9%2BMRf9P1uJez%2B%2F6F%2BcdxEhNHRByebCd9rAkuj06etUsQUYEU1FnIgPHAxI2uvCjgNZIg2UQ0wTBAB2KvTykSpBoCuAw52mYI3Zsv8e%2B8oL7am9ZTYJ02vPp%2FRM9l8RaaP7t0W9%2FsSTwZHkIY6mum5G3VOzuE3V46U1UYTF%2BjwrNQVVR37fDcMmpxdc6t5v7YpN62K81AXmMDtMAmdSvZJB6dfOMABYq%2BWgsnCZWxF8ljR%2FEhNgUVsNAUBx3LFk7mhEW2oi5S2aSY36TetmclqS6sxcR%2FYod2B4kLxF6CoV7HrjTDj9TOOP71HA8dLr0ozQgM9%2BUSxXDEjB0K7nVEFUIuuKsMkAqcQitj4wsSw6agf6eTxij1vPRbIwh8jhwgY6pgFa4KMFtewfKM%2FV1CN2sGplZrtMgPDaZdd9Qx9b0vyliNzUK9wqwLh05vXkKu%2BrXZYG44C%2B2q8HOPM5%2F1Pb%2B5CT5Z537j5eEyCeFPQ5z56rMc6TfbEM56XvJkQ4mmBl7S74yrRRCJPGyl%2BpFK%2Bqo4re5nAVTtmpXahtbGeypsKB%2BxPkLHA%2BwLCpPExZmBihGs8WE%2B1ytd29fgP%2Fior67xYj%2BVmcXO7V&X-Amz-Signature=a1c5833587a0c7e052aafd438053100811b809817fdb7bc8b5125a324d131ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4JPC5DH%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH%2BngtJp1l%2BXlOryRz2pmJpELCYemm45KPUF7x8K9C%2BWAiEA55ymmV3O8rIxGAYvbMQxgHe3mluYN9cDJ2HePl38BA0qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX1lakfg%2FKRG0XJACrcA6wBZucXnX831B%2Fe34fo%2B9SlhPs7kKm5obh44Zv4r1HqGzAtp79%2FwnLWl7GmI2Tke2SiR67N8zlllP%2FH%2Fig7EmVQBFODfj4jNWV4EzYDODFL%2BSB4GGEwlUBXQj04aQCNEkJCJWFDLYd%2FOmg%2FJ9%2Fkp5TtE5A%2FaqKjoad7J2PoQzKcM%2Bp5F9jJnjVZH8t1vwllGAUJTMLzUUsiZgh8QmNoxjZgr8CfUkME4TPIp%2FUEfW1Oqf92CybFth3J8MqLyzw0BaY0qom5QCGnUQcekBnve8yB%2FulQMmfqLZ1VoGF8mcwC4AOBJ7A43SU%2FGl0GRC1Pc6WVimjxKTSFpZMnSRWP%2BJvvDOiy4af9cTDpq9uEVjU%2BG%2B%2FO6nPiy2B15xLxYuln7EU3%2FRJ6Is9LLM2jL5WYX4BLnzatDydBhB5Yr1JTDF%2BFCT2gGHxtIPLcEaCimgy3MR6XPlPysD02AZlHf0bdC007ZJLQVyvxGu4kqxO7KWduijytJbCZSSsZW%2FnN7TF37iENDCo%2BLvcwAOzIKShsrv6qk%2BrB%2F7Qpzvxz475AUpWtW7pHW32tNkMeMtlhrw31P3wJjGWfKVR1mm4jeoVXVK69dnlOBjh5ai%2ByoCHHSok0BzKAiyjnExMx8o3QMIzH4cIGOqUBFrqYShXIZmXkMrB%2B0%2Fi7zh%2Boz2ax%2FpI%2FxZaXJdSjwgV3b0oybWo%2Fs9aPZwFcXr2a4MBp09P%2FBb6Y7hI9%2B%2Fp6jCioRHcN8S1AK%2BlltJfykode%2BcVJaumkMNg7%2F5TD0ijhacJeAETHp3poa2S09eQPkQbdCntUX2USK8uNzUIDh6bChnGl2NL5olz5iadOe6CuNDb0yDMiX1s8UWTADh97z2PxsmSF&X-Amz-Signature=58bc2508ee467efc68bea9135953a97ab54ba301568aeaaa1feed2230480b103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3FWWQA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGuBhDCluYQtpvb2cb8Wl3dkvh0pILVYVlfkEXl7d2M5AiBAABFtUcZW58lRx%2BBhJxmzvN90RP5P%2B5tsInETm50r7yqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfubQDi6lWEB2aaKvKtwDNPVQ55LEU6rvtVd%2Bd621v0AWbB2YE6wYuZ%2Bq1egwVJ2ctT98q6ouA%2FE3RMHEI2ZyiGQxMEB7Ov9QQOwsFfNCfgUeLvg3M14VwfY2cnWigqhB77vqtYmTLwvIJWYqDjJ%2BZruhtJuYZQMwKJ%2BRxfszJv2mZ4hG1jC0i78Tivjex8RKryhnx7QnzKmuPgwQ9Yvd93kok%2Fsv0Uon2leOWW2EEsgbKEoykn8JUQo97KJPr2cqGbOcnlcFbOdK4wVqGTJREgy0bgPWgg6xN2DCmhn7Ss1uRaeJeEsyrWb4dTaHq50VMZm%2FypEvfnQJECiwVMnXgxtHkPkWY7WjIz38bpiSbC2suw%2FZZx6aC%2FUsXAn4P4PH7AEKwndA0GJgaWZxzMRN1umr3NTJYBpEyIWQnhd%2FbCcbRyW9Za4h36zMWqiK6kaR%2FD%2F9idfl8vrRc0tfYU3vaz3WNLtsgR3HxB3eiWRh4nN4C2LcZxSEqTNNIp6PBte0XLtWl61KcSbNXqNW3iDwk%2BfPe1OvoEifVgOkU9h30c2qzZ4xX37I0J85YJ4AHcXPQh0%2FTFVYb6wUx7Yuz0X9MMRRFfGLWumdImMWflSX6ms81vvrqAyLDLEwt2uPajzG%2BdFIeBhUJfUMZ2swkMfhwgY6pgGXpjxLqokzLnwr9dWErpsQ7fNsdodLGJFtAzsoOmHXvQGOM8S94%2FzkeMjHeRWegzQcA7s285Plj6rfLgNPMxZnv35m81OICsn4%2BLqGlNnpZwYtKe%2FQb62vj8qVJuSDpIyWRd4AQD%2BdnWO%2FikdpAy8TdzFI7Qvuws6ukTEniPP%2FqTm1xmZwSGaECnVhMcMPeqFqsvzGvi0%2BjvJyBAL2ExA17VrD9XfW&X-Amz-Signature=d825a30f21fb1b4b2ff9f590abbc4373199cf3cb407b06c52bb50f85a6c9e381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
