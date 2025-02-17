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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V6NXZW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDLXZDi6gj%2FbF%2B%2Bb%2FGnMoAhKdVgwjU45onBixR5q0Tt0wIgKxfQe5SU1J5DtzaHSsbBVp41gA8ZB%2BIM13hdrObL2XEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEvbv8cRi71Vo6NRhCrcA9NINZzwa57Yeq%2FCWgMCdkXhzp%2B46THwQqdNd3lz%2Bi4QIDVyb1%2FdoE7JfbMXeEdn53DcaIX3o8abCPLpcF%2BTIeUrTbVVpwA34iRZmh5zZH9PxfwiwWhAM5A2pKouSJ%2BThED2aYYhjBp807DBinQKFnbJBUe%2Bm2EWuLqgrqVswcdaq0j6ji5%2Fi4olrxIPZx6xWavCyLX1XXa%2F9Go5tAKnNlZ1Qk6t8vYk8PNY%2Fl0%2F4O1nWCBLfbB%2BMHmH6fOtjsUMU%2BHeQQcNPTW3tuHwJ%2FioUwq1DtPVldaibtYwPcdflOChGA2zCYEmLOm%2BP%2Br3sCCiDkI%2BPLFZj4DxPKt5e8aBnLEYawsnw2T5IE%2BRraKuuJoGkRgHq06GgAzUsyBxHRh2dsPsmC4K20lMztTtFfuIHIX9r8sGmu1iyTfsXxihDYk531WQRg8g5DyvvWF84vjsmmxZIx14tQ%2Fh8eGljxb%2FCkd1yVu15mwDTMVVdwc6yFv8p9mvIkrYjxde%2BzD0iMdv3mOwO9pRCu5axWYjovTqPJmRcJEu7lI%2BZCEyyESEN9WLT5DNNV9ti6JcI%2F4PoJHBgttgv6prVfs7IpVML0lb2KOjcXYxtx3EtWSgl94r9Hh7olQqG2PfTFSy15NdMOrKzr0GOqUBYs07T9Upj0GYGaYb8rhKACFO75Ug%2Fa%2FwfdXHEjMvKf2Gn1BRqkqI1Vnk60IdIwKsHE3sV7xiHEE%2BuVPfNr%2BhZK5xJQI2tmv0gKJeMpPrw4Wxc7hzkBVlh4Y8ZKOGxZXrK9oVYHTHpRpJcheu9qF24dHv2BOkyQhdhVwAO75%2BfnFCND5VEOwDanssIqe7nuZAKoJOIYeIrv1XT%2F%2FqPdqg02tecmdO&X-Amz-Signature=8b3110e48bd34dd62bea91c1d841a3b850e583f4a404e64a75579147ebf09d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V6NXZW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDLXZDi6gj%2FbF%2B%2Bb%2FGnMoAhKdVgwjU45onBixR5q0Tt0wIgKxfQe5SU1J5DtzaHSsbBVp41gA8ZB%2BIM13hdrObL2XEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEvbv8cRi71Vo6NRhCrcA9NINZzwa57Yeq%2FCWgMCdkXhzp%2B46THwQqdNd3lz%2Bi4QIDVyb1%2FdoE7JfbMXeEdn53DcaIX3o8abCPLpcF%2BTIeUrTbVVpwA34iRZmh5zZH9PxfwiwWhAM5A2pKouSJ%2BThED2aYYhjBp807DBinQKFnbJBUe%2Bm2EWuLqgrqVswcdaq0j6ji5%2Fi4olrxIPZx6xWavCyLX1XXa%2F9Go5tAKnNlZ1Qk6t8vYk8PNY%2Fl0%2F4O1nWCBLfbB%2BMHmH6fOtjsUMU%2BHeQQcNPTW3tuHwJ%2FioUwq1DtPVldaibtYwPcdflOChGA2zCYEmLOm%2BP%2Br3sCCiDkI%2BPLFZj4DxPKt5e8aBnLEYawsnw2T5IE%2BRraKuuJoGkRgHq06GgAzUsyBxHRh2dsPsmC4K20lMztTtFfuIHIX9r8sGmu1iyTfsXxihDYk531WQRg8g5DyvvWF84vjsmmxZIx14tQ%2Fh8eGljxb%2FCkd1yVu15mwDTMVVdwc6yFv8p9mvIkrYjxde%2BzD0iMdv3mOwO9pRCu5axWYjovTqPJmRcJEu7lI%2BZCEyyESEN9WLT5DNNV9ti6JcI%2F4PoJHBgttgv6prVfs7IpVML0lb2KOjcXYxtx3EtWSgl94r9Hh7olQqG2PfTFSy15NdMOrKzr0GOqUBYs07T9Upj0GYGaYb8rhKACFO75Ug%2Fa%2FwfdXHEjMvKf2Gn1BRqkqI1Vnk60IdIwKsHE3sV7xiHEE%2BuVPfNr%2BhZK5xJQI2tmv0gKJeMpPrw4Wxc7hzkBVlh4Y8ZKOGxZXrK9oVYHTHpRpJcheu9qF24dHv2BOkyQhdhVwAO75%2BfnFCND5VEOwDanssIqe7nuZAKoJOIYeIrv1XT%2F%2FqPdqg02tecmdO&X-Amz-Signature=ecd356fadf3b2f4bc89aa8b1f5fb6d6d34583597bbd06d31f0bc1d52cbfedf8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KC26SV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCID1%2B3qEr7iFLbq6rzSCN8giEDYDfPVFjI45nSYu4AjltAiA7kFTpLr%2FNu%2FY8Pck2xZygp2VhdZxUAb3Fwh5KZuLFMyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMlVusJOR27Zyv5xetKtwDgViixnDKH75xdgXntKgptsHrP%2Fjn4mhalZezlfp5IHX5oWxdSLL0%2FXN%2Bhlp5J4GA%2FwRXzvOGIYEnyE53gg360vvxiTbJ8pZTldFEcohAh6eWyjQ3ksbQjqeLGbbzARnJOrgqOYohpxpTz4IKzSKrXtmbqEmxiG0U3LkPDmNP69T9%2F7T%2F5jDQTR3WuNExkCO8pHxo1Ph0gOgGasaVXiBqrXkedoxoKVNcg%2Bj5RKYBTyNgOAbdlWN2wZOww8UomANNzj47a8iNzljO7GVEcbhMzviLU%2BS%2Bw0eanC7e4eV2Syuu%2BO%2BwVAITm02nUmYtehtskj7D7vqHw0yjZQoqjgcBYRh4gBdp3VWcZDSfdJ2uSONuFw%2BJMcs%2FlUCFu5EEZCQvj5EVEP1duaQCb1B5y1Zsx01JVI5iGvGzRRCn6ys93KwEM9Lk%2Bv9IZNJoPPIMHv6OMb%2BWK3L7wBF2zX7pAhScBgoJ5%2FaSDigWqJOVzhfRorVcF3dKtXyb4Saw5H90OxKEkJkAony1WEeRZwerTVi%2BWSOUp%2B8GU10ScS9MhNQNL5G0nkBcrnJkNx8n5VqCAh%2FD82Vva%2F%2B6UrjM6VVVliW1iLiEGHW2LxlE26lc5r%2Fuvy7TaPfqPml1%2BtgOqMQw2MvOvQY6pgGwF62XrtztmfINFZ1aHFor8uBqPZ6ywPLFzQpeCIE%2FAU%2B1kRrd3qoWsTJy3XfeMhxnod7NS647SauSMC7yWFWePlBVqX%2BmBpJ8Kf3Ub6Ojhg%2By5We%2B%2BZS3b%2FD%2FceSXfLOY8uzTMO%2Fj8ziI70X705xlPMaKyjICV7AZ7Md%2BPJ3RCiISREUeP2Z8maRER1y%2BJDwta3%2F8xz0ZbIZCq21Fnke%2BOTZZuQ1b&X-Amz-Signature=ad670e49ed5d2eb5ca63906892bdb91d8724159f3d5da4a45e757f1007a5c2ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNYS6I6C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDMgBlrof9tUldzovVKwWfxEtj53zdQsKY4kV2FXr4UWwIgWnhFRwTvRs4%2BQF8EplVKwGdD0PKNSRM4nEI%2FRvJngAUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHTU3YaawOAn3gU2rCrcA6Vr%2BIKd9l%2FPsLMYkfTpbuhAzYnqAFt%2BgyDRzvgqXzHQi4k4ZIpj59ayA1vQAwEG7BxoYMigXnqPe%2Fy7Ls%2F6Ih6jtyDSZd2qBj2meN1krFJntwtz2pYHSLD8oSplb%2Bb%2FpUd33zcxv1ocGQSezUnwhtFTiRYpQx%2B4UIoCtnmKb%2BnbW9Q8y2iHbjOGN0Wim5oop4mn9K%2BBynoQlwDVQkxec3JcCEbt5qsmiqLq3I9FVSfjw9rvY898X%2BC2BQPQCkOfaHtHFlCArKWSwP2q87QG4cHuROlRPZeWZQ1VpFSLumXZkXxb%2FzoRtqSogTffM26YRAEyXeYh8%2FzFkdwvrRL1rCt7e%2BFsBLIzteyYOVS%2BwDGtXLqzdh5QA5L9yEZEAegquFr8XvKyITSa%2BQIdKRJj4PdTqTDSd3VXNQbPweSxMaEKQQRko0PCAxuzXludSlNno3O86QJ4%2BlWQ8SG1vjrVlg28%2FPRoi02EZtFAA6B22aSVqR3Ai3gHCGLziyzEQrkzZIauuKaPzunecL32hVQ%2FS9QM3n94B87rE7AQg3mtHI8ISC2zk4E1RCm1CqxTNPUXfNqoH6FguCbY06O3xp7oOFCMdHApt0JCweYqfAzeudNtGy%2BNmuhRU%2F36MjVhMJnKzr0GOqUBqz5JasRajTSbE4pDQM4njoQQyO2o0Vhe%2B2uc%2BVVUgNBLlKXOGoBcQkxmhcy0FmfteNo8VUIiqdHG3aquCMnyBV3sn46nWe4Xrz89nA7AeNRv2JhrXyWnheVKSvV8KLpC%2Beu2LEAYUW6libsgiPEKfBtQmQ5cmRGsy8t4%2BsUImmXmMgLUusijfx7egyvN8eD7sQiKuZQqjvYPNLOe3k2yn%2Fghk2I3&X-Amz-Signature=ad4e195ba21f6c964cc3eb4cc83e3938a5c4df00bd091e4c092ba18fa86387ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4V6NXZW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDLXZDi6gj%2FbF%2B%2Bb%2FGnMoAhKdVgwjU45onBixR5q0Tt0wIgKxfQe5SU1J5DtzaHSsbBVp41gA8ZB%2BIM13hdrObL2XEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEvbv8cRi71Vo6NRhCrcA9NINZzwa57Yeq%2FCWgMCdkXhzp%2B46THwQqdNd3lz%2Bi4QIDVyb1%2FdoE7JfbMXeEdn53DcaIX3o8abCPLpcF%2BTIeUrTbVVpwA34iRZmh5zZH9PxfwiwWhAM5A2pKouSJ%2BThED2aYYhjBp807DBinQKFnbJBUe%2Bm2EWuLqgrqVswcdaq0j6ji5%2Fi4olrxIPZx6xWavCyLX1XXa%2F9Go5tAKnNlZ1Qk6t8vYk8PNY%2Fl0%2F4O1nWCBLfbB%2BMHmH6fOtjsUMU%2BHeQQcNPTW3tuHwJ%2FioUwq1DtPVldaibtYwPcdflOChGA2zCYEmLOm%2BP%2Br3sCCiDkI%2BPLFZj4DxPKt5e8aBnLEYawsnw2T5IE%2BRraKuuJoGkRgHq06GgAzUsyBxHRh2dsPsmC4K20lMztTtFfuIHIX9r8sGmu1iyTfsXxihDYk531WQRg8g5DyvvWF84vjsmmxZIx14tQ%2Fh8eGljxb%2FCkd1yVu15mwDTMVVdwc6yFv8p9mvIkrYjxde%2BzD0iMdv3mOwO9pRCu5axWYjovTqPJmRcJEu7lI%2BZCEyyESEN9WLT5DNNV9ti6JcI%2F4PoJHBgttgv6prVfs7IpVML0lb2KOjcXYxtx3EtWSgl94r9Hh7olQqG2PfTFSy15NdMOrKzr0GOqUBYs07T9Upj0GYGaYb8rhKACFO75Ug%2Fa%2FwfdXHEjMvKf2Gn1BRqkqI1Vnk60IdIwKsHE3sV7xiHEE%2BuVPfNr%2BhZK5xJQI2tmv0gKJeMpPrw4Wxc7hzkBVlh4Y8ZKOGxZXrK9oVYHTHpRpJcheu9qF24dHv2BOkyQhdhVwAO75%2BfnFCND5VEOwDanssIqe7nuZAKoJOIYeIrv1XT%2F%2FqPdqg02tecmdO&X-Amz-Signature=99026e2f8d2ad21c9c7806bb616c8a107482c4db5ebed7d04822827e89d5a75a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
