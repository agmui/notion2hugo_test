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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPD5CWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA%2B3lQepAxh81uD0T%2F7ZGTQBDj1TlPoMGpdWVmqaZSB%2BAiATH8VxMODpx7ebDaV1TJTPuyAb1fOFx8gbMi9ce2CC3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsS1n9ryNYcrNI9CKtwD4t%2BHWKc04uKWAMLIW7bS%2BCFJKxdyEytyC9hAyFK0Fz4Ub30JP5tZOkc2Vq%2FQa%2F2diXwfSKhfnIZl1QpOx%2FGKNP8ZUF0r3l8H%2FvrTAhi5%2B735NIg8t5xTi5%2FHaqwgn6piuVrxygrkh%2BXZuP9bpKlQCEYD5vdcJiKtXaQ2M3mE4vBNcuofTTYDuGVScv5%2B%2FtB3naxxs7W7GsAWdoGRk2kFT3PdbGVWgUWIwjRJIDKlMNmImGtcvXamiMVuJQdHexxqWgFON1MNNkRneMawLvRCycWzO%2FGrAgnegwLyd0bi700rLxImBpPM783RFxgSDDMZQEoZ2CZF%2BNpKsGZKaTBouMYxOKXYe2n09hOuxJPYSa%2FBoMWQCJ1iZGF56H2UrdzIg%2Bea4bVsXCTE0XvWUpdGcd00uWZfKFT2Vo8tfX9GbUA1Z%2BPKAOf3PS7TQaM%2B7YW5pjTGXGaYsBpGi3WMC0m%2BJrt1SXoAW3fHw3DtUAy0JRnetBTyVPj4BuIirJ8cr19Jf6e9KvRNuwkgi88VBuCDkTYbEJmngkkexK2wV6jnd%2BMdR0WOEcu7PpGvG5toDd%2BnUkn9efJumr1nGTz0aR%2Fd2ADySmWYZxjAk%2BP4zVbMe1Mplh2TlUn1UGVoemww65ejxAY6pgE7PVu0FiswB%2Bo3ZpdiXsHqSNPrpmVRY6v6kd77CUbiVrZyw5u%2BtAFiSvMerAEo0xwxTWOOIqx1ZbSbAenbG%2FS6a49n6ub0Tee1V2yDq%2BzGSSdPu1fO4bgNtTAJ7O%2B9eqTc3rCzszYYjuCiTJ%2BYazC9y96WT0OUahSlQ%2FjnSe9sPDK939anaZvd5PKCFLklXFQN%2BW31%2Fj8LCuAW7QHZ4mAQtNYHPqaR&X-Amz-Signature=c0adac5df1b24353a71e7a14a58fd8ddf0bf43023b90b42c209ed0e758168bd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPD5CWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA%2B3lQepAxh81uD0T%2F7ZGTQBDj1TlPoMGpdWVmqaZSB%2BAiATH8VxMODpx7ebDaV1TJTPuyAb1fOFx8gbMi9ce2CC3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsS1n9ryNYcrNI9CKtwD4t%2BHWKc04uKWAMLIW7bS%2BCFJKxdyEytyC9hAyFK0Fz4Ub30JP5tZOkc2Vq%2FQa%2F2diXwfSKhfnIZl1QpOx%2FGKNP8ZUF0r3l8H%2FvrTAhi5%2B735NIg8t5xTi5%2FHaqwgn6piuVrxygrkh%2BXZuP9bpKlQCEYD5vdcJiKtXaQ2M3mE4vBNcuofTTYDuGVScv5%2B%2FtB3naxxs7W7GsAWdoGRk2kFT3PdbGVWgUWIwjRJIDKlMNmImGtcvXamiMVuJQdHexxqWgFON1MNNkRneMawLvRCycWzO%2FGrAgnegwLyd0bi700rLxImBpPM783RFxgSDDMZQEoZ2CZF%2BNpKsGZKaTBouMYxOKXYe2n09hOuxJPYSa%2FBoMWQCJ1iZGF56H2UrdzIg%2Bea4bVsXCTE0XvWUpdGcd00uWZfKFT2Vo8tfX9GbUA1Z%2BPKAOf3PS7TQaM%2B7YW5pjTGXGaYsBpGi3WMC0m%2BJrt1SXoAW3fHw3DtUAy0JRnetBTyVPj4BuIirJ8cr19Jf6e9KvRNuwkgi88VBuCDkTYbEJmngkkexK2wV6jnd%2BMdR0WOEcu7PpGvG5toDd%2BnUkn9efJumr1nGTz0aR%2Fd2ADySmWYZxjAk%2BP4zVbMe1Mplh2TlUn1UGVoemww65ejxAY6pgE7PVu0FiswB%2Bo3ZpdiXsHqSNPrpmVRY6v6kd77CUbiVrZyw5u%2BtAFiSvMerAEo0xwxTWOOIqx1ZbSbAenbG%2FS6a49n6ub0Tee1V2yDq%2BzGSSdPu1fO4bgNtTAJ7O%2B9eqTc3rCzszYYjuCiTJ%2BYazC9y96WT0OUahSlQ%2FjnSe9sPDK939anaZvd5PKCFLklXFQN%2BW31%2Fj8LCuAW7QHZ4mAQtNYHPqaR&X-Amz-Signature=1c957c3c428c470932a2d786841e8ca44341525f404d6090b8372823efe4c1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPD5CWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA%2B3lQepAxh81uD0T%2F7ZGTQBDj1TlPoMGpdWVmqaZSB%2BAiATH8VxMODpx7ebDaV1TJTPuyAb1fOFx8gbMi9ce2CC3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsS1n9ryNYcrNI9CKtwD4t%2BHWKc04uKWAMLIW7bS%2BCFJKxdyEytyC9hAyFK0Fz4Ub30JP5tZOkc2Vq%2FQa%2F2diXwfSKhfnIZl1QpOx%2FGKNP8ZUF0r3l8H%2FvrTAhi5%2B735NIg8t5xTi5%2FHaqwgn6piuVrxygrkh%2BXZuP9bpKlQCEYD5vdcJiKtXaQ2M3mE4vBNcuofTTYDuGVScv5%2B%2FtB3naxxs7W7GsAWdoGRk2kFT3PdbGVWgUWIwjRJIDKlMNmImGtcvXamiMVuJQdHexxqWgFON1MNNkRneMawLvRCycWzO%2FGrAgnegwLyd0bi700rLxImBpPM783RFxgSDDMZQEoZ2CZF%2BNpKsGZKaTBouMYxOKXYe2n09hOuxJPYSa%2FBoMWQCJ1iZGF56H2UrdzIg%2Bea4bVsXCTE0XvWUpdGcd00uWZfKFT2Vo8tfX9GbUA1Z%2BPKAOf3PS7TQaM%2B7YW5pjTGXGaYsBpGi3WMC0m%2BJrt1SXoAW3fHw3DtUAy0JRnetBTyVPj4BuIirJ8cr19Jf6e9KvRNuwkgi88VBuCDkTYbEJmngkkexK2wV6jnd%2BMdR0WOEcu7PpGvG5toDd%2BnUkn9efJumr1nGTz0aR%2Fd2ADySmWYZxjAk%2BP4zVbMe1Mplh2TlUn1UGVoemww65ejxAY6pgE7PVu0FiswB%2Bo3ZpdiXsHqSNPrpmVRY6v6kd77CUbiVrZyw5u%2BtAFiSvMerAEo0xwxTWOOIqx1ZbSbAenbG%2FS6a49n6ub0Tee1V2yDq%2BzGSSdPu1fO4bgNtTAJ7O%2B9eqTc3rCzszYYjuCiTJ%2BYazC9y96WT0OUahSlQ%2FjnSe9sPDK939anaZvd5PKCFLklXFQN%2BW31%2Fj8LCuAW7QHZ4mAQtNYHPqaR&X-Amz-Signature=1b247aba8b3ed92e7a6ee082919081a794a9316c20f7a641814aa15157a0558f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOO6YKBK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDtVLCZiGGJaiVr%2BkaRqzIVofkNPyHioXozD4cP2GzPaAIgZpVbQnfCH0P0MHlRgGTav6K6HBf2hDojqUrEv0fo4yMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZzn%2FLb4PZkCKoVIircAyGWodK0rDcM9FKVIuIlaZgkCXJ47K1vn11HZfTmSyEHhZ6lJoV0PRECjsWr4%2B6rLTP%2BOMahOHUtnBVtejp38bR7x1yCJCF82WJrOBxxo9poh4nd2RqnCxYobYgnm4xMqPlwYFCwhOjdR62N8aFabxE3OypglKzdyLwwJuvuVqo0UGYYftZkRnEmwQ%2FTtRmD%2Fk2bHIHM9I6zaxQ8aHLaYhGwI3cf8tgcqVwMHVLQaNzq%2F8PvmjAhyHvHJ%2BAqqCk6sXM00r72RiYUxQkyLz9yR%2BnfoAGiMTBEUBsDNiikNyR%2FeWRRqJRhuu2xf8m4VxAw%2FVRiI%2F1n%2BsFk0qQSHpklrJ5kbEnstm%2F3r%2BqVLNoN%2BUd5uANRxNlD8c0aFQp4NOjclTde%2FXmnEUwB46h%2Fpd9MtAOji4ehFOiY%2FliJwdojFOL%2FKjyOdBLEalUqkFKI7e0kGF8K2tyb8Ox6731mMlSG97RvtPSpfbcAPMIL%2BHR%2FjfAkYyGKcw6N6ROPwuYBfsY9KN%2FdAT%2BAaxzgzYtHV8btwQ0WF%2F5gQLLU6mf1E7nssbiuwb95MfyOuItUFTrKv5qdgx3ugTYznTq1jto%2Ff%2FTxGld%2FODP5NXUG7mHDI8VKZxebXrZQkbukfM7g2HGxMJSYo8QGOqUBG1JC01fs61lne%2BAkYeVua%2Fu4NKlII7X3nBBwDCPa3arZyEAS454r03bxX2bdpUA7CnRk8mqcX%2FT%2F%2BFldAK%2BtoZiFXTQKEqQMippj5YHRm2g%2BQwtu4VIBLBpySLk07sNN6%2Fu6zeZTkzhOZjX01VDdWEllqpETGgdGNuPiW0glu%2Fck%2FPFpSaFcwknbl3Sv2ZnL%2BluApY5Krq9tvmI7CD9%2BO%2BkupbI1&X-Amz-Signature=a811885f8a129f5f1c4eb6cdbf070392ca96e9d52f138f8d301566cbf75cf4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPN2DILT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC045s%2FYOX7FLxas7s%2FYRMqrFpV9DihT2DpKCnO3LfDrQIgPGFxyuHdPObfM18IT1x%2BpZv0rDmbBAHlhEBI6y3xYEkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIWYN5kxMwFycgOqSrcAwdsA64jMaDTbg6%2FeUaCcVp1XpAASZHWIPXbaQhHIktjPIUZJyqfBmkzRoi5KD06YAc9vnC%2FjFRV0Y3ZJhjpGegZPQdf3JuccwdqoICO0R8TzaREFPLtrAac42%2Fu9mnAsjLskE90%2BrHlvVy7FahXUVLr45CEiZuipZzFzPvR%2BsKSo3tHo3YN9mKpFquokXUhQR6kRRnhnbuM854CrVG3KCmM%2Fyn7vgQ8%2BBVkqQpf2t3tfQbodszjmq%2F0V53CdQDar7bg6K8%2F5dcKolmkqP1yKe5D7v%2B4kj1eyJ5czkziaNF5gO2zc2c%2F9VZbH4QinPE9W6UBx8gaVaAuvLDlea%2F9sSZjZOhwxZdYsC4tnfJCtlLx8y92o0z7o6%2BkB%2BN0zxo9DpwaOViXQLQOp2xqn%2BG%2FdCV0IWPjtaBud4Y0MFK8rC%2FSGg%2Bs1L1zV4%2BVBiSN5mtg3VUGT623xjVjbFIlsSwhaQMkX6plEsjIKC9nFQWqKTFw15fLmME89rOwSpklleEo%2F49oKHvzta3YaRQze6VIodhh1AE2OOo102nhUYM%2FXO8srVJI8BA5YhlNwuz0WoJAYzdMY0Odn%2FoLqqtu7mBMgemnyYqDdy2pDuwuscTKeQzdWECICbctXDueSwkLMI6Zo8QGOqUBYR68dcCsxJ6fLoRlVM5uDk6szGR0%2F3070N9IZwI29ogYlSfkAhIi4kOrPjnt5fjQrBX%2BqHPUzHSAOQlFicYe0di1jCRwbDF%2FuJV0pV3Yl72NdiOkXT4DpUmGNnaVoy%2BdW1OnCio%2BAXj7LZvKHNwbN4gkR25oe%2BNqj0lZFxQ4uS6M0128b%2F6PxC965Il4MPm2vC6benaAmMeTxvVXpcDMcfX3Nk8X&X-Amz-Signature=50e26a7b0088f419b492c3da5fbe5c321a0f464b3ed28e279e76a18b8943036b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPD5CWJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIA%2B3lQepAxh81uD0T%2F7ZGTQBDj1TlPoMGpdWVmqaZSB%2BAiATH8VxMODpx7ebDaV1TJTPuyAb1fOFx8gbMi9ce2CC3CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsS1n9ryNYcrNI9CKtwD4t%2BHWKc04uKWAMLIW7bS%2BCFJKxdyEytyC9hAyFK0Fz4Ub30JP5tZOkc2Vq%2FQa%2F2diXwfSKhfnIZl1QpOx%2FGKNP8ZUF0r3l8H%2FvrTAhi5%2B735NIg8t5xTi5%2FHaqwgn6piuVrxygrkh%2BXZuP9bpKlQCEYD5vdcJiKtXaQ2M3mE4vBNcuofTTYDuGVScv5%2B%2FtB3naxxs7W7GsAWdoGRk2kFT3PdbGVWgUWIwjRJIDKlMNmImGtcvXamiMVuJQdHexxqWgFON1MNNkRneMawLvRCycWzO%2FGrAgnegwLyd0bi700rLxImBpPM783RFxgSDDMZQEoZ2CZF%2BNpKsGZKaTBouMYxOKXYe2n09hOuxJPYSa%2FBoMWQCJ1iZGF56H2UrdzIg%2Bea4bVsXCTE0XvWUpdGcd00uWZfKFT2Vo8tfX9GbUA1Z%2BPKAOf3PS7TQaM%2B7YW5pjTGXGaYsBpGi3WMC0m%2BJrt1SXoAW3fHw3DtUAy0JRnetBTyVPj4BuIirJ8cr19Jf6e9KvRNuwkgi88VBuCDkTYbEJmngkkexK2wV6jnd%2BMdR0WOEcu7PpGvG5toDd%2BnUkn9efJumr1nGTz0aR%2Fd2ADySmWYZxjAk%2BP4zVbMe1Mplh2TlUn1UGVoemww65ejxAY6pgE7PVu0FiswB%2Bo3ZpdiXsHqSNPrpmVRY6v6kd77CUbiVrZyw5u%2BtAFiSvMerAEo0xwxTWOOIqx1ZbSbAenbG%2FS6a49n6ub0Tee1V2yDq%2BzGSSdPu1fO4bgNtTAJ7O%2B9eqTc3rCzszYYjuCiTJ%2BYazC9y96WT0OUahSlQ%2FjnSe9sPDK939anaZvd5PKCFLklXFQN%2BW31%2Fj8LCuAW7QHZ4mAQtNYHPqaR&X-Amz-Signature=dbf1865276036651dc5d719ebe916b8e90b6bfb3fbfcefeb5a5393addd86904b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
