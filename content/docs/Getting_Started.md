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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJAU4DB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICWm0F3Hsh4AOE8EVFrmCkvZNt6ZhNidL%2FHEXas12E%2BCAiA3CQPsHwGvivBuRsRW0%2FCVMX5iyad0CKVngvK%2Bzcw5ayqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDk717N3KPnGzUU%2FKtwDFHrANFm89wUupIwexfcWj7uANqE7CPmXgQZkASBzISnFDOlK7s5O6mSu%2FRO649pfVL6Ta%2FMxNPJSNp2aj0fxu8s070FfJWf9IdJ18DnBCvgMtXUQgIs8Vj09wZJOMoJdUBiZqkenSkwFfupkgatqn4iweVYa%2Be%2BtLXLhGJ3kqYkzK9Y2bZWB98zqOLkiZGhsF1HglgGOuLEu1vMoZmeQXOJS7q8xmFcjZQ4cTLlc4zG8g8RSfLWbnwGAX1Z%2FMRUYGNqHPZsPz7MEOss4oxYke61rl4vC1Ntk7ms4089abPSMTy3Qgz1hSkU3%2F1cjbDY6nz7%2B6VHxLH95%2BTlPl8QHoQ5z3KDPGkMA1E0Gj36AeEdwarEF9bg4pfzqRQrJu4m3zUPowEn8hTprx45VvTrn1AfDJDUnwTDkjC1RXiRjhI2AlE5mPbJ4ikfj9EnzMRV%2FiMjPcceAr4IvME%2BO6wbW6twaCQVf4XhHargFJ2iTuoj6tnRtwijAf1EyMTq81b3%2FVXS4bhgY4ApDiIVw90B7PUy%2Btz1JwdRdj9D7zGRk0F0dJug5PAUV%2Fuy%2BX7P%2FyJH730DnlauThdEWSj1JYOTf5Ozg6pKKG9lP1HeHvC72leoRwvBRorgtdMLe3PwwnqGDwQY6pgE3Q8oQlUzW1tLDAWxyuWJaXoK9gyuU%2FddHagPhQeHAxDk3r7ICK66673mrSMrgsMcDOrQuRFMKJbDv5PSDg9bovBv8Ec%2FTZ7TR5KbyNvhPg6YowXDeLPO0MU9KsPCOS10l9fjl2H1QLMhyuzuX%2FmdWdeZJCum47jfgF94jIinX5kR%2BXvCLLgLSs2K6zy2qSWUtf7BULLecHqs%2FpE2VoRLp0zqcx7Ai&X-Amz-Signature=875b4e29137fbd42e7e5dcbee96f5d4f844957ce1edaed7d8313c6c589a14798&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJAU4DB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICWm0F3Hsh4AOE8EVFrmCkvZNt6ZhNidL%2FHEXas12E%2BCAiA3CQPsHwGvivBuRsRW0%2FCVMX5iyad0CKVngvK%2Bzcw5ayqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDk717N3KPnGzUU%2FKtwDFHrANFm89wUupIwexfcWj7uANqE7CPmXgQZkASBzISnFDOlK7s5O6mSu%2FRO649pfVL6Ta%2FMxNPJSNp2aj0fxu8s070FfJWf9IdJ18DnBCvgMtXUQgIs8Vj09wZJOMoJdUBiZqkenSkwFfupkgatqn4iweVYa%2Be%2BtLXLhGJ3kqYkzK9Y2bZWB98zqOLkiZGhsF1HglgGOuLEu1vMoZmeQXOJS7q8xmFcjZQ4cTLlc4zG8g8RSfLWbnwGAX1Z%2FMRUYGNqHPZsPz7MEOss4oxYke61rl4vC1Ntk7ms4089abPSMTy3Qgz1hSkU3%2F1cjbDY6nz7%2B6VHxLH95%2BTlPl8QHoQ5z3KDPGkMA1E0Gj36AeEdwarEF9bg4pfzqRQrJu4m3zUPowEn8hTprx45VvTrn1AfDJDUnwTDkjC1RXiRjhI2AlE5mPbJ4ikfj9EnzMRV%2FiMjPcceAr4IvME%2BO6wbW6twaCQVf4XhHargFJ2iTuoj6tnRtwijAf1EyMTq81b3%2FVXS4bhgY4ApDiIVw90B7PUy%2Btz1JwdRdj9D7zGRk0F0dJug5PAUV%2Fuy%2BX7P%2FyJH730DnlauThdEWSj1JYOTf5Ozg6pKKG9lP1HeHvC72leoRwvBRorgtdMLe3PwwnqGDwQY6pgE3Q8oQlUzW1tLDAWxyuWJaXoK9gyuU%2FddHagPhQeHAxDk3r7ICK66673mrSMrgsMcDOrQuRFMKJbDv5PSDg9bovBv8Ec%2FTZ7TR5KbyNvhPg6YowXDeLPO0MU9KsPCOS10l9fjl2H1QLMhyuzuX%2FmdWdeZJCum47jfgF94jIinX5kR%2BXvCLLgLSs2K6zy2qSWUtf7BULLecHqs%2FpE2VoRLp0zqcx7Ai&X-Amz-Signature=8d8d8dca85f2a0507d483c8281ceab3e95b50bf7e3a9a8bb101993417d1e5f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJAU4DB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICWm0F3Hsh4AOE8EVFrmCkvZNt6ZhNidL%2FHEXas12E%2BCAiA3CQPsHwGvivBuRsRW0%2FCVMX5iyad0CKVngvK%2Bzcw5ayqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDk717N3KPnGzUU%2FKtwDFHrANFm89wUupIwexfcWj7uANqE7CPmXgQZkASBzISnFDOlK7s5O6mSu%2FRO649pfVL6Ta%2FMxNPJSNp2aj0fxu8s070FfJWf9IdJ18DnBCvgMtXUQgIs8Vj09wZJOMoJdUBiZqkenSkwFfupkgatqn4iweVYa%2Be%2BtLXLhGJ3kqYkzK9Y2bZWB98zqOLkiZGhsF1HglgGOuLEu1vMoZmeQXOJS7q8xmFcjZQ4cTLlc4zG8g8RSfLWbnwGAX1Z%2FMRUYGNqHPZsPz7MEOss4oxYke61rl4vC1Ntk7ms4089abPSMTy3Qgz1hSkU3%2F1cjbDY6nz7%2B6VHxLH95%2BTlPl8QHoQ5z3KDPGkMA1E0Gj36AeEdwarEF9bg4pfzqRQrJu4m3zUPowEn8hTprx45VvTrn1AfDJDUnwTDkjC1RXiRjhI2AlE5mPbJ4ikfj9EnzMRV%2FiMjPcceAr4IvME%2BO6wbW6twaCQVf4XhHargFJ2iTuoj6tnRtwijAf1EyMTq81b3%2FVXS4bhgY4ApDiIVw90B7PUy%2Btz1JwdRdj9D7zGRk0F0dJug5PAUV%2Fuy%2BX7P%2FyJH730DnlauThdEWSj1JYOTf5Ozg6pKKG9lP1HeHvC72leoRwvBRorgtdMLe3PwwnqGDwQY6pgE3Q8oQlUzW1tLDAWxyuWJaXoK9gyuU%2FddHagPhQeHAxDk3r7ICK66673mrSMrgsMcDOrQuRFMKJbDv5PSDg9bovBv8Ec%2FTZ7TR5KbyNvhPg6YowXDeLPO0MU9KsPCOS10l9fjl2H1QLMhyuzuX%2FmdWdeZJCum47jfgF94jIinX5kR%2BXvCLLgLSs2K6zy2qSWUtf7BULLecHqs%2FpE2VoRLp0zqcx7Ai&X-Amz-Signature=a852650821ac9ec9ad9e795729e9d4097a1efae3e2e5b6101507fd79a4199d39&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPPJMLP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBi363yAKVvs6YvSAN5p%2BlQSn%2FcDl5b02j587xRTPuixAiBrAJyrzsClEq2Ntl2932ZlHp9zeEdmNLyRGr3xax1XFiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuskU4DeSg3Cm2HAUKtwDxXdb2Wf6Dgd%2FBXfJiQId1EkN8VWisNe1S9Mfy6OkEBd7umVMEWNAkoimXU3ObimM6NT7M8dBDuTEWBtzaQVxwxIEmLm1YMonl6H3YB3hVYpwTv4NsPy6nfzgsMLelKNwoJSBvxy3CRj5x9aIJ%2BxvTFmNpXGE4OaNUWf2UyaqxxynYPVufulN9vwRa3U3gifLd1LNNuc3MYLUTRkrC0Dwx9606h6bAKlewv59wQPeqtMDFC93k%2Fk0%2Fzgrr6MvOdA47gJ2yGUj%2BPwS5uVHziiFmfg92dHcdUSc3OrRfeSsmYTX%2BKzZqq%2BfkUtyf6fDV5Wox6TCO5Y0AzU4cIDKODQiGCW7XeznZdf7a5xti2hfIfxBzTcW0Wd5cBz7ZCeUJA7vSazxwnSv6iSSDU9%2B3Z5QBA6qIDdpBYAqbpiRVEGOP8dUgOVOa1QWTjW7UpADnTvoD5E7e7cPWcleBcvL12SgOs3nKYMdG7lSjsc1rOU25CSLn5bT7rtPbRoHBHGToKiLXI%2Flm0Qm0hoXHEq8CEH%2FaiboEBs7%2BU1s%2FK90TZO9lNWauOdzQyjZbaiaaxqeR9VFEHQwq8OLt9AaRg8yx2CJUfa8B0WPuf0vNc3F1lOD16sf2ga1qigKj%2FDr%2Bp8wr6GDwQY6pgE8Jc2dZD4qzuyrgGTNrpMSzcOu5Rr%2FQoMTp3XlGnD89Zg1jhpJ6ZnEa%2BHkR1JiiVFDmtH5QuMmTrvH8esL7ZiUnEycD7A2cYaqoccvI8uRvGwfybpGbSOELOiUqgT64vAT%2BdsDzZ0QT9qgPWC6Ayg%2BNp%2FscbZSLMyUGNncPVVVSMuTSOMwcXI8KLzsXeUG1f0JOGxImYg7vv%2Busz%2FatOJFD%2F0F1Q5p&X-Amz-Signature=8825aaaf24b5b8c77dbecd71ed198e5a65f6e473f180509385df6d00a4cd7d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSIY5WO%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCID5MqhbHerZGMqS4utkOVIJX%2BPdjAOY2xIcf%2BBT8RtjWAiAtIicFCiRF7K8SxOpUaFU2ow1YxUI1d4xhn0Ai1z8OlSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMebL3kWZyahUvo77fKtwD46pFeMGA7ThKSNDiWc8ARmp5x5IKAVtQXFnt4dNVnFnecF16bc5yaPjWEhX0LwhG1wS6eXC2wwRD0S6ALuWFbqyMCBHjyezuQp6ZU%2B1%2BPrn%2FRbf0gOdEZvoze%2BHMlPx4wWxFmmJ5j%2BMUmCKJN1sxSknprOVm0Y8JMfTnSGEfs%2Fzr5STsTPPU88IsL3%2FYQ8xx3Lq3BHdgt4GD7bAipoD%2FroEK2M5xBLM6KXMofkj2A8FplWy%2Bgibaiyrl4ldfXKU6TE7WG8uE1SIQRkpXzOKc%2FOo73JHwFe%2FTgcS9CDfYgIoy4%2BfMZpBJiYvoUYqN3KerMNeaZKebZEpi7p3%2FkUGqDpvb3oumxdC3Kb2nCTzNwWs0WlguCfoNZXWndefJqMZZRAWTCYINHmYYNxIOV5saivvGs6sFl5FN%2FkafUTJwiFhjBz3NO1v1yqYhg5EmMGeGa3Zix%2B7shAUklkb71RV%2FpKW4s00emDyfNmevFFIokYEk%2B7WJjWdmXxDpFaZxn0OTK2k733L3odL6sL62%2BQrlkvSvdTNFF33ht%2F8fTVsXAVQtu60VKc33CEtudv5KVkCna%2Fa04Gaj89nrNB%2Bg%2FlfOr7rlUwxGmn4INkPtP8DhLgBCARotHoX8ha0CYOQwm6GDwQY6pgHr5riRZ%2FvBIwTPaeiId9ZQj8uFzBVhaGrUwVK3%2FazcW7%2FA6VVj%2FKap8I8HO%2FOeRa7nVmL2YW%2BgMDse6WQX32MPvd%2FJyweqfeqiwIB6Z5gTiJuOSL0q84OJ7C6Y5%2Bd86enoxH5h2C%2FEDbMwf5nFwsPEsejvvlB%2BC5qbc0b4Uduoztdds7D2xvgZHm9IdVAiIuqUOVNPVlg49Mp1HjmCiXsd5LGXLAex&X-Amz-Signature=a523b52b24ce54bb79d2a0598a6fefba4beb6238d498339c4e4fd7bf7e508bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJAU4DB%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICWm0F3Hsh4AOE8EVFrmCkvZNt6ZhNidL%2FHEXas12E%2BCAiA3CQPsHwGvivBuRsRW0%2FCVMX5iyad0CKVngvK%2Bzcw5ayqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDk717N3KPnGzUU%2FKtwDFHrANFm89wUupIwexfcWj7uANqE7CPmXgQZkASBzISnFDOlK7s5O6mSu%2FRO649pfVL6Ta%2FMxNPJSNp2aj0fxu8s070FfJWf9IdJ18DnBCvgMtXUQgIs8Vj09wZJOMoJdUBiZqkenSkwFfupkgatqn4iweVYa%2Be%2BtLXLhGJ3kqYkzK9Y2bZWB98zqOLkiZGhsF1HglgGOuLEu1vMoZmeQXOJS7q8xmFcjZQ4cTLlc4zG8g8RSfLWbnwGAX1Z%2FMRUYGNqHPZsPz7MEOss4oxYke61rl4vC1Ntk7ms4089abPSMTy3Qgz1hSkU3%2F1cjbDY6nz7%2B6VHxLH95%2BTlPl8QHoQ5z3KDPGkMA1E0Gj36AeEdwarEF9bg4pfzqRQrJu4m3zUPowEn8hTprx45VvTrn1AfDJDUnwTDkjC1RXiRjhI2AlE5mPbJ4ikfj9EnzMRV%2FiMjPcceAr4IvME%2BO6wbW6twaCQVf4XhHargFJ2iTuoj6tnRtwijAf1EyMTq81b3%2FVXS4bhgY4ApDiIVw90B7PUy%2Btz1JwdRdj9D7zGRk0F0dJug5PAUV%2Fuy%2BX7P%2FyJH730DnlauThdEWSj1JYOTf5Ozg6pKKG9lP1HeHvC72leoRwvBRorgtdMLe3PwwnqGDwQY6pgE3Q8oQlUzW1tLDAWxyuWJaXoK9gyuU%2FddHagPhQeHAxDk3r7ICK66673mrSMrgsMcDOrQuRFMKJbDv5PSDg9bovBv8Ec%2FTZ7TR5KbyNvhPg6YowXDeLPO0MU9KsPCOS10l9fjl2H1QLMhyuzuX%2FmdWdeZJCum47jfgF94jIinX5kR%2BXvCLLgLSs2K6zy2qSWUtf7BULLecHqs%2FpE2VoRLp0zqcx7Ai&X-Amz-Signature=b25a4e43dca53eb5bd9eaa5ca4bd76814ee9f0f349894115c6185cfedff69b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
