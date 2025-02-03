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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPFEAQU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2vAPLjcZyGJfC5PthlcSDYORWgWI14%2Bu37P%2BuCaS3MAIhALGdv%2B5FFHwANDWNejUUVYpqHbvdjkDie8KQA6EyK5NvKv8DCBYQABoMNjM3NDIzMTgzODA1Igykbu5IyziKHACsj8Eq3ANEGO%2BFGCsJ%2BHe17THJv03PVv%2FlebAcd7JakOP5l6vb5VloHO03W%2FZiu1aIEw88Lrq4T9k9xV4RdasotkjHjm7SzfFv5ChzMh6qv4yjXZ%2Bs%2BkGiF0GAao2Xck7n54YJCbgwLTfxAiS4%2BCFKziCno2gU3J2ieQm%2BUOJohdZizMavsFF57xkIEp5Doyqomry2q9zMX9AACv48b0DV9ERh2lGmgB3HGHHT2nOHumD1EGY4hUCB6021SdbQCD2ox3OwAuzc92Kt7ro3VYqmHfhxpF3y9zsT8x7e3brGcdt%2BCYoh3mA8pNBpg%2BOQNZpC55EuU9MQ%2FNIG%2FlPv3b75vq%2FM%2FWt0pb7q7byJhJlJMSizVXAn%2FgqXGfvDVr0Bu8754d7fdsOemLsIATUtuTyhipI5BRPc%2FUafv5QMa2vpgXdnzip4nXpPBK0Z1rhy11JRCGPB03XQUgfuQMWUdvTx94Z5ix1GO18eGJsXUHGVAdIBT0iDMkC6bAwAuOn6DAWxX15%2BEBW%2BBT3dqEOUpPxoG%2BqVrz2be9E8raImuV4xZP%2B5skL4N9MiOhKBdFiiVgvAJqqg46xON6yqcasSMo19znwHm%2FiRN1lXkXNtcKfvwesjDpSSvqwKP05BJ4rvjlED6jCm8oK9BjqkAcM1d5Dm5fTszqhS41LbA7xGOG%2FKgBzxho6Ob35nly47shAQTYSLxvjWeMHyjPPS2EsZfoxsmR%2B2FO%2FMJHRp1xFoYTT118aoxWiCx06hmfiI%2B4Yxawx4Ps6TXql9yT5rWi9FTkOx2ru6ViVhM6c3OcOQ1EzUiMbkzZEAdwnsptMzuSOBjtBMXlXZaOT7gxodSikea%2FXO4w9iFlK1aKUslqsjSNYm&X-Amz-Signature=db0398a9d7bd60434ffad03658fd42a4c954515b32fac35d30b83340623938fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPFEAQU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2vAPLjcZyGJfC5PthlcSDYORWgWI14%2Bu37P%2BuCaS3MAIhALGdv%2B5FFHwANDWNejUUVYpqHbvdjkDie8KQA6EyK5NvKv8DCBYQABoMNjM3NDIzMTgzODA1Igykbu5IyziKHACsj8Eq3ANEGO%2BFGCsJ%2BHe17THJv03PVv%2FlebAcd7JakOP5l6vb5VloHO03W%2FZiu1aIEw88Lrq4T9k9xV4RdasotkjHjm7SzfFv5ChzMh6qv4yjXZ%2Bs%2BkGiF0GAao2Xck7n54YJCbgwLTfxAiS4%2BCFKziCno2gU3J2ieQm%2BUOJohdZizMavsFF57xkIEp5Doyqomry2q9zMX9AACv48b0DV9ERh2lGmgB3HGHHT2nOHumD1EGY4hUCB6021SdbQCD2ox3OwAuzc92Kt7ro3VYqmHfhxpF3y9zsT8x7e3brGcdt%2BCYoh3mA8pNBpg%2BOQNZpC55EuU9MQ%2FNIG%2FlPv3b75vq%2FM%2FWt0pb7q7byJhJlJMSizVXAn%2FgqXGfvDVr0Bu8754d7fdsOemLsIATUtuTyhipI5BRPc%2FUafv5QMa2vpgXdnzip4nXpPBK0Z1rhy11JRCGPB03XQUgfuQMWUdvTx94Z5ix1GO18eGJsXUHGVAdIBT0iDMkC6bAwAuOn6DAWxX15%2BEBW%2BBT3dqEOUpPxoG%2BqVrz2be9E8raImuV4xZP%2B5skL4N9MiOhKBdFiiVgvAJqqg46xON6yqcasSMo19znwHm%2FiRN1lXkXNtcKfvwesjDpSSvqwKP05BJ4rvjlED6jCm8oK9BjqkAcM1d5Dm5fTszqhS41LbA7xGOG%2FKgBzxho6Ob35nly47shAQTYSLxvjWeMHyjPPS2EsZfoxsmR%2B2FO%2FMJHRp1xFoYTT118aoxWiCx06hmfiI%2B4Yxawx4Ps6TXql9yT5rWi9FTkOx2ru6ViVhM6c3OcOQ1EzUiMbkzZEAdwnsptMzuSOBjtBMXlXZaOT7gxodSikea%2FXO4w9iFlK1aKUslqsjSNYm&X-Amz-Signature=ed6eaec695dc32c67314cb1cac07d3babefe7c8cd3cded6b4e58c2899a20c603&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CP4L5B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwcUZ8Tyi7oFo9bgIjan7nJe7H0yZFWGaApxIojHdd5AiEAvqTSXYjWyKgOMRlqXClPHtTLiFdw%2FrOMhYQwfW1sEiMq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDOsocFFSob2uLKpnUCrcA6TxwhxdGawkMweWbAsq%2BXOSFrID9JEVb1MP2NWFKqrU9EojtWyas5zok5iy6VSvm8oFEhUjAdcGcyQx9biUR1QWGht4VOS2gP35HwESpbDBsEqV6kQVIdbRXezKS%2FBJu6X%2BKGR1X0iZvcIz1o%2B7iEavp%2B0micO6mCrl4OSZpQ5vbbIWFobtTyHN9U55aDuPkIgVEyGS%2B168R0Ykc%2FvbH%2FIOvHEFF7KsDpfcvePkNu5e0W9WVdVLjL09P7mlLCLBxHsFLkceQ6m3JBWUckqO84SWz6Z9rdHpkSBGugNH3FxeyKhjaUurTDVF7fQ2zK99Za3FNX%2BTipdLHopRVuknWsOdDGcORpAx1BGcUVtW%2F00Trq66sL5L5sRPthTxtzOyviLCWdVFmAvw7RdvsLOj1UIY1wDLUOaiNF%2FvudUIwN1GZnjYt8eRuqkevNI%2BXz3zkTOUWBrp3jtwPDtDnfUO5beAjrv404AruI37CKQ5vlbTUD4Vsh5aL27M2rjYQNttiFnOkE0lD%2BoJX3zwceHwJ5FEccoAmGCbhZxBOq144%2FZGOTd7lI7EE3AiPWyM8nax%2FCh7zqAaQ8XfxsemgxvTu52Yw52yMG5CuNH3m30N54%2FhAXXlHJdABJtwX5qaMKnzgr0GOqUBLb03keLASwM8jJ5I%2B1yMu8XZJ%2B4zNiOAmXjf%2FVZ%2F62Qy8hUGvpo%2BcbkaGA4PnYZ2qZ1CVED0HwsYhwAEjTwCqclntPMOi%2B7a6uDub%2FRn%2FJr2z356tNUjsxAgMTh54Vp4mvySze9aqWkxoub0As1pcZokU0jAEamK3dBKUcGpiYsjtAriHHsn1LacVI7BzJE3y6uXV%2F1uik8IEmfqV6EWlU%2FdhK8g&X-Amz-Signature=a3824744955d01ae2f922e5f7c6a1d201e401817fa86b9863b8de36d0d860b59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5BMQRK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR1NXWQ06kE%2FB6XF37k%2BtgVt3hgVfusMNvkV72nhAqmQIgcHKK%2Bsy5YXMGkcq5BGuhVqmup1pZj4LCMLItVp%2FRkbsq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLeEyCd8TsAObKQiPSrcA%2FNE2LjEfgNX5czKHII0CLrn8909HD8KBQldd5%2FEI18O4y1ApiUJkNpvp%2B0YM1JFEST5eMcdJHURPmRM7zr2DaMHTN1RFxLmIgGhjreAP3X%2Fhe1B%2FMRx1ZNuQaaJm9jF%2Fe2skHolFgYelMdxFqhL%2BhhoeGCTX7tZK7Dx8UkFpwMBd8IWfiduPCplpH5TqMbw%2Bp02tw9b075CpKCt%2BCwB8ZLxLC26qk4umXAXLs8u6j5MQ8wgZn4mrpp1Kr6ODfKg46nsdIIdDw%2FqhVefEYuhhJmBcdQ8buqwbar6GaJ455rIbH1FlXUH8rkS%2BnvzyDYDdmFbFVU4Y0qAoH4hroFfWdP9C%2Fu7KWKQ8gM4WbzgZhxK9FSpUYwLFKJYm2ar500ue4MIL4uSoxiM0aO1ScQG8FrdqzHuW0lut89AtGCLhqF7TJZfwivAxyID1wt2O1pBiUSTDY4WRZ4fs85r3uwdXgLtl3ou5pBz42YhriBafqkR6YVEYU0Eu9WrS1QjPhsxSRfVlC3CdrkKsRq4XiS1hR%2FG%2FJMzYenU0to%2BGx3y%2FLt8OGcXsXw7DveKrDbeiDTt7U3JTLCGisDXx7iC%2FfqgLY3aSvjLuPd7G1M0sbTrERRx2%2F459eT0NEMsXg8xMM%2Fygr0GOqUBaVUwkiFKzCQjcRSzvdyLxKLX%2Bl%2BlgT7Bd8vrk4QSUizNrNBXsEBckaNa5dKtvSCQaGuycxpJH5G8KS%2BG%2FhHh63FPaqc0qxYwji9wtbxpWQVA5RVoruo4oZVo93RKu5kJGyzhFEWP9k9Xy0yclaoa10IX2SjS3rk7p2xxVCs2klnZDJhgHICVWGVSqA0O7YnXCY8lUTkKZCPen3lYou6VbC8HxHa2&X-Amz-Signature=4c1dee0e50097243eb55ec57539f8b008dfcec7b178d3dd823424e4919d2c40c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTPFEAQU%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2vAPLjcZyGJfC5PthlcSDYORWgWI14%2Bu37P%2BuCaS3MAIhALGdv%2B5FFHwANDWNejUUVYpqHbvdjkDie8KQA6EyK5NvKv8DCBYQABoMNjM3NDIzMTgzODA1Igykbu5IyziKHACsj8Eq3ANEGO%2BFGCsJ%2BHe17THJv03PVv%2FlebAcd7JakOP5l6vb5VloHO03W%2FZiu1aIEw88Lrq4T9k9xV4RdasotkjHjm7SzfFv5ChzMh6qv4yjXZ%2Bs%2BkGiF0GAao2Xck7n54YJCbgwLTfxAiS4%2BCFKziCno2gU3J2ieQm%2BUOJohdZizMavsFF57xkIEp5Doyqomry2q9zMX9AACv48b0DV9ERh2lGmgB3HGHHT2nOHumD1EGY4hUCB6021SdbQCD2ox3OwAuzc92Kt7ro3VYqmHfhxpF3y9zsT8x7e3brGcdt%2BCYoh3mA8pNBpg%2BOQNZpC55EuU9MQ%2FNIG%2FlPv3b75vq%2FM%2FWt0pb7q7byJhJlJMSizVXAn%2FgqXGfvDVr0Bu8754d7fdsOemLsIATUtuTyhipI5BRPc%2FUafv5QMa2vpgXdnzip4nXpPBK0Z1rhy11JRCGPB03XQUgfuQMWUdvTx94Z5ix1GO18eGJsXUHGVAdIBT0iDMkC6bAwAuOn6DAWxX15%2BEBW%2BBT3dqEOUpPxoG%2BqVrz2be9E8raImuV4xZP%2B5skL4N9MiOhKBdFiiVgvAJqqg46xON6yqcasSMo19znwHm%2FiRN1lXkXNtcKfvwesjDpSSvqwKP05BJ4rvjlED6jCm8oK9BjqkAcM1d5Dm5fTszqhS41LbA7xGOG%2FKgBzxho6Ob35nly47shAQTYSLxvjWeMHyjPPS2EsZfoxsmR%2B2FO%2FMJHRp1xFoYTT118aoxWiCx06hmfiI%2B4Yxawx4Ps6TXql9yT5rWi9FTkOx2ru6ViVhM6c3OcOQ1EzUiMbkzZEAdwnsptMzuSOBjtBMXlXZaOT7gxodSikea%2FXO4w9iFlK1aKUslqsjSNYm&X-Amz-Signature=9e7289348c01f2b15591004d259cc0dd204bde7258a0e05f1f27f47940d5eaba&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
