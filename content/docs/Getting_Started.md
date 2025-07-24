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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKP2E2C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDL1yfDEwbrPeoAtDZ%2FQaiCz2tPPuJWemGpKVIxx2%2B96wIgK%2BLi9Cf37DIGVMNXgcyrSOqvudN2Tg2BQ2UitDGcN6Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCAPeHRn8X9cnY8r%2BSrcA0b6LFSIKpRF0r1dttAHWieBMACKokc5yfW0Oe5vr1uoIjKUY42XD82ACITjX0yjcJ%2F%2Fdx7U%2Be4s4cxqZe1pHdIN8NGd3LHnLGaSOofBECWyp9z3zMNL6MiYn41cyhQbQMxCC7DjUBCoqTKYq5Njjz8QLH7NJkOOp3pv%2F91TS5Su0MD0lwla2dj1bwen9iu%2BJ5Qr1xVkTMP8IDUbtz0ZYJSZoOO7Jnq5DjB3dBXWd8Dr4Wjk%2FpGMDk%2FSTcOXWXljbU5D9%2BDjVmQRhQZhoVbms501s%2FX5KA%2BpZaGWskAC0yHksCfLgOXl7vEl16FejPFYVhpg3oKhHcUTWly08boWhz7HJ3hCoIN4192vYFsJEugL%2F1dmtgOuVJnd81iSFRk591izi6LWZRvgi49johyr0D8iavxTaG7tUo%2BR7YeCz%2FAvBRgBfqxXQP1qb72%2FeE%2BxI66HDKaWLZnPk0DKdhZX5Qkvv6ZPPXHzn%2FCztpi%2Fc73KKL62eDcuduD5WYs6laT1KaADyNXiL3QcnUgrBKWtALUBQHi7wDqgdf5R6Z4YnhtaOP83x8QP4xRgovvLXO9vdNuEZIzhBcoTgwoGPzIwVGI5RSp5UPeUicGOC5K4YwBlhLf5HfIDJ5gaFcqbMKi2iMQGOqUBwVXxB4rziX2ACIc9lN1l%2BoJ5wri%2BBU96Kr4nLXiY1kb8MHL%2FwbPJ%2FVt%2FKHXj2qiU80EaGj%2F5V5xLKqxH7iHsgJJwP1L97kSbTXeY%2Brh%2BeYnUFaCy8tR7ZeQLmsNd8hTHQpNzDMSTvayyXgVedkwcVSBELT1hL8ilNfX6U%2BLgNPopXUJkf0%2BrwFawo9iOLzDKyQ7kTPDfvZvOoHR7LcYaLOKzO441&X-Amz-Signature=79ee5348d8c847466cd31bc32641ab019008363ee9a94639c277aa2adb2994a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKP2E2C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDL1yfDEwbrPeoAtDZ%2FQaiCz2tPPuJWemGpKVIxx2%2B96wIgK%2BLi9Cf37DIGVMNXgcyrSOqvudN2Tg2BQ2UitDGcN6Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCAPeHRn8X9cnY8r%2BSrcA0b6LFSIKpRF0r1dttAHWieBMACKokc5yfW0Oe5vr1uoIjKUY42XD82ACITjX0yjcJ%2F%2Fdx7U%2Be4s4cxqZe1pHdIN8NGd3LHnLGaSOofBECWyp9z3zMNL6MiYn41cyhQbQMxCC7DjUBCoqTKYq5Njjz8QLH7NJkOOp3pv%2F91TS5Su0MD0lwla2dj1bwen9iu%2BJ5Qr1xVkTMP8IDUbtz0ZYJSZoOO7Jnq5DjB3dBXWd8Dr4Wjk%2FpGMDk%2FSTcOXWXljbU5D9%2BDjVmQRhQZhoVbms501s%2FX5KA%2BpZaGWskAC0yHksCfLgOXl7vEl16FejPFYVhpg3oKhHcUTWly08boWhz7HJ3hCoIN4192vYFsJEugL%2F1dmtgOuVJnd81iSFRk591izi6LWZRvgi49johyr0D8iavxTaG7tUo%2BR7YeCz%2FAvBRgBfqxXQP1qb72%2FeE%2BxI66HDKaWLZnPk0DKdhZX5Qkvv6ZPPXHzn%2FCztpi%2Fc73KKL62eDcuduD5WYs6laT1KaADyNXiL3QcnUgrBKWtALUBQHi7wDqgdf5R6Z4YnhtaOP83x8QP4xRgovvLXO9vdNuEZIzhBcoTgwoGPzIwVGI5RSp5UPeUicGOC5K4YwBlhLf5HfIDJ5gaFcqbMKi2iMQGOqUBwVXxB4rziX2ACIc9lN1l%2BoJ5wri%2BBU96Kr4nLXiY1kb8MHL%2FwbPJ%2FVt%2FKHXj2qiU80EaGj%2F5V5xLKqxH7iHsgJJwP1L97kSbTXeY%2Brh%2BeYnUFaCy8tR7ZeQLmsNd8hTHQpNzDMSTvayyXgVedkwcVSBELT1hL8ilNfX6U%2BLgNPopXUJkf0%2BrwFawo9iOLzDKyQ7kTPDfvZvOoHR7LcYaLOKzO441&X-Amz-Signature=199ab9b343d64f0b9edda44867c707a16af7e57bcabf5092558f8fab10d43505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKP2E2C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDL1yfDEwbrPeoAtDZ%2FQaiCz2tPPuJWemGpKVIxx2%2B96wIgK%2BLi9Cf37DIGVMNXgcyrSOqvudN2Tg2BQ2UitDGcN6Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCAPeHRn8X9cnY8r%2BSrcA0b6LFSIKpRF0r1dttAHWieBMACKokc5yfW0Oe5vr1uoIjKUY42XD82ACITjX0yjcJ%2F%2Fdx7U%2Be4s4cxqZe1pHdIN8NGd3LHnLGaSOofBECWyp9z3zMNL6MiYn41cyhQbQMxCC7DjUBCoqTKYq5Njjz8QLH7NJkOOp3pv%2F91TS5Su0MD0lwla2dj1bwen9iu%2BJ5Qr1xVkTMP8IDUbtz0ZYJSZoOO7Jnq5DjB3dBXWd8Dr4Wjk%2FpGMDk%2FSTcOXWXljbU5D9%2BDjVmQRhQZhoVbms501s%2FX5KA%2BpZaGWskAC0yHksCfLgOXl7vEl16FejPFYVhpg3oKhHcUTWly08boWhz7HJ3hCoIN4192vYFsJEugL%2F1dmtgOuVJnd81iSFRk591izi6LWZRvgi49johyr0D8iavxTaG7tUo%2BR7YeCz%2FAvBRgBfqxXQP1qb72%2FeE%2BxI66HDKaWLZnPk0DKdhZX5Qkvv6ZPPXHzn%2FCztpi%2Fc73KKL62eDcuduD5WYs6laT1KaADyNXiL3QcnUgrBKWtALUBQHi7wDqgdf5R6Z4YnhtaOP83x8QP4xRgovvLXO9vdNuEZIzhBcoTgwoGPzIwVGI5RSp5UPeUicGOC5K4YwBlhLf5HfIDJ5gaFcqbMKi2iMQGOqUBwVXxB4rziX2ACIc9lN1l%2BoJ5wri%2BBU96Kr4nLXiY1kb8MHL%2FwbPJ%2FVt%2FKHXj2qiU80EaGj%2F5V5xLKqxH7iHsgJJwP1L97kSbTXeY%2Brh%2BeYnUFaCy8tR7ZeQLmsNd8hTHQpNzDMSTvayyXgVedkwcVSBELT1hL8ilNfX6U%2BLgNPopXUJkf0%2BrwFawo9iOLzDKyQ7kTPDfvZvOoHR7LcYaLOKzO441&X-Amz-Signature=1823cc4789d1f1bc14683362f6ff195dd8f0839f12eca393c1af125ae4580e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JK35RYW%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICH7fRHoyk9jqeidj36j2H%2BASbtBrJbNqgHDJgxgni4%2FAiEAxKG%2FN852DNBddFiYX2CD3ceoHkFrnjMcfpSpaVhq%2BiMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOkz4S0PpkfSAWL%2FkSrcA%2BEg2zKLj4PD1PS3V%2B9brEZSNSVyTB30uB8fZIeBJ1EX9qH%2BokOvwYwqwsMKsjYM7qtZl3PrSaqU%2FIpHY9kNI5I1AbuJ1gLdnqNnozvoxs5UCSBhwLX6Qi8ffW%2B8X1dWj68Ppejd%2FARH7kEciapLZL%2BY4F0pivM7v6blBKwPi1jQvWJG5DU27vKF%2ByMnaqfRS3Byicb%2FtAdZJRpTSXAez6s71Shi8FlunaIpA96Vqq70UfseYZjIwdQtyFY%2BOp58VrAE%2F6Z9ibo%2BeYV83M%2FckM7zgz3zOIYzHiuZaiDQCfcIpi%2FLonHbG1%2B%2Fad2XD%2F7MVh3cdAEVPGeA0Tl6n2z8zpYG6%2Fl%2FZ1UlDnVTxK96CTVZeoXbM1VdG0E%2BzOLXgJmUYZrMGC0EEcNx%2B5DCGv%2FQLLQSAmT3jRG32RoEqSbwBcKdZ7s9ESwsaKeSYOahUlyGIn7BSNjQCuVc4bdSF2IcF1JhSuIj9gC45AT05SsWN2uK77sSC1poZLxfpeLLt4Gm3R%2FtkworMPQRFILEui92GgpfQIBPBJRf0BsvXh2dMdfpRURccoIr4h9BAkNEoRyAM6B84pqm5f4sQs2TlLHlwK1x0iidELTNreXHUDBw4qxh%2FGDQ8tNSfL3GEGAYMJK2iMQGOqUBc%2B%2FWzBZBOF2JbMG2gMfYB4RSZ%2F%2Foq4KKn1J%2Fh8wE3HbxqNGgX4mMQlg%2BgJ7d2bo0ExKHXqJVnQX3qEjjLU2h3mXJJExMqg2QUv%2FiG7q2ob8SeUzzkfKZb3yCa3G6FtZMRXfKu9tWBnJxX%2B2JYmqsWR1o0DY%2F2GLbZzTLpuRzcqwuDhquR4JEVYwbG5alN0uyu2OosdWFEkK3J2Q2ZykKVsDGBMYr&X-Amz-Signature=ee67c072f4b6d6a4281f6f4759d6c57ff78bce99e5e233b1194a4ee160ab4175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSJCAS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQD2jvk724V2IAkNgSRsOZcg4ny00loDbVvFWpeSCg5BtgIgEUZUoWeSQcdzWgb3sD4CBT6bKFDj%2FgnvhhoLIwIjto4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDFra229ubvvZ%2BGkqGyrcA0prY1MoIbH1t400deM2usUPSfZi5BiImTtGEL0FS8LkHyhO98fL2IgQnSUTcnKNMdNls%2FLsRLUQgiQo21Uk%2BT5%2Fjhjiqnwl0rizC5LHODdidgnVXN4nnCoW7thhjvWj4JwcJTLJHocDwA4HyRpxCJlRV%2BZKLRvIlZfkRsn0LuhrAjiIqtV%2B0ny0LN4cgYzoxom%2Faw0ONSuPGMrhTdhxyLPzZ7PRlwgvjSTiLMi0jQbxpR7j51lKhU6eHfT6%2FdyWf6amvmVm2osyWD%2FuaotbAvsJ1HG9Qx2u2nXnntHQTSNluZ%2Ba%2FTRUzv4UD2J2kkSoIFR%2FkMTgy7oKrhwHsE05Isb1wtEnTPCjMjXjpht93ip2kuFPB8rFWwcGzu%2F%2Bg%2Bt%2F65Tk5jZDbKi%2Bdb3n85zs1SVBhlZTe7i8psEOHecx9wRpnzW6%2FW%2BsNgzq%2FnoBY%2F%2F7ADOhUY7S%2BTBnrsiNX%2F1eweUyylfhKHZ1AnDoEhHd%2FCZS807tvIr4EZWgwMwF2viv%2FhMAn%2FHX2dVkHoElAFm1zlqfOGzbAgTJAbtqFHbNiKvd6vX7%2B2NM7b%2F5fs%2Ffv7gMtEJRGe2KK3%2BvSpn6hoFS8BCkRVNSSUo8cnKxt1sx8Qpx9Zzzw6tguhfqrf4oMI62iMQGOqUBSJQzDxgVEgL47BhZID3xm%2BJeh0UZnCTO%2FfSEONQOrSf3T4NUCGJg0nZYa4g01ZLo14Oq26FfaL%2BnwgEC1EyTuGPx7EXdSl8dlXBupBnR2tUup96%2BIc5rr4t9yZC35t%2FpJ0zPaKq1ieDmL9BEHan2h5%2FEIXtRUoBm%2F2c1oH2Dlt5mKlCb8Yhf8eB4S0iNJjj3oWoRTKgi20cOjrSygaMm8bnQtWa%2B&X-Amz-Signature=2889a13fe51c93a5d52ddf4058c5979032e20249cb7db83c0a8853d0ca8fa7f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKP2E2C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDL1yfDEwbrPeoAtDZ%2FQaiCz2tPPuJWemGpKVIxx2%2B96wIgK%2BLi9Cf37DIGVMNXgcyrSOqvudN2Tg2BQ2UitDGcN6Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCAPeHRn8X9cnY8r%2BSrcA0b6LFSIKpRF0r1dttAHWieBMACKokc5yfW0Oe5vr1uoIjKUY42XD82ACITjX0yjcJ%2F%2Fdx7U%2Be4s4cxqZe1pHdIN8NGd3LHnLGaSOofBECWyp9z3zMNL6MiYn41cyhQbQMxCC7DjUBCoqTKYq5Njjz8QLH7NJkOOp3pv%2F91TS5Su0MD0lwla2dj1bwen9iu%2BJ5Qr1xVkTMP8IDUbtz0ZYJSZoOO7Jnq5DjB3dBXWd8Dr4Wjk%2FpGMDk%2FSTcOXWXljbU5D9%2BDjVmQRhQZhoVbms501s%2FX5KA%2BpZaGWskAC0yHksCfLgOXl7vEl16FejPFYVhpg3oKhHcUTWly08boWhz7HJ3hCoIN4192vYFsJEugL%2F1dmtgOuVJnd81iSFRk591izi6LWZRvgi49johyr0D8iavxTaG7tUo%2BR7YeCz%2FAvBRgBfqxXQP1qb72%2FeE%2BxI66HDKaWLZnPk0DKdhZX5Qkvv6ZPPXHzn%2FCztpi%2Fc73KKL62eDcuduD5WYs6laT1KaADyNXiL3QcnUgrBKWtALUBQHi7wDqgdf5R6Z4YnhtaOP83x8QP4xRgovvLXO9vdNuEZIzhBcoTgwoGPzIwVGI5RSp5UPeUicGOC5K4YwBlhLf5HfIDJ5gaFcqbMKi2iMQGOqUBwVXxB4rziX2ACIc9lN1l%2BoJ5wri%2BBU96Kr4nLXiY1kb8MHL%2FwbPJ%2FVt%2FKHXj2qiU80EaGj%2F5V5xLKqxH7iHsgJJwP1L97kSbTXeY%2Brh%2BeYnUFaCy8tR7ZeQLmsNd8hTHQpNzDMSTvayyXgVedkwcVSBELT1hL8ilNfX6U%2BLgNPopXUJkf0%2BrwFawo9iOLzDKyQ7kTPDfvZvOoHR7LcYaLOKzO441&X-Amz-Signature=c1c912a4978b922e305994753bc4f45e949a2af8d2509a57be3076f91da58392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
