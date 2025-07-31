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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL7LLEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvrJAfIfXnkWt9XM3aoG1p8wbjhRx%2FadewKOlgBt4YWAIhAM%2B2L9k1jr0okJxP%2Fr1DPJbK0j0%2FAiF0fL1r2O%2FbyI4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrK8WzKDzPa11mRWwq3AN%2BeebKvLreuVK4E%2BYY2N0RUIBCbGZH0i8Owtn9DnON2pER2xbPpvYbuDwE%2BlaEL6Vbkq4MzkB0%2B2rYCUxvrvYX7PUFDsG0Foh0ZUGdHGt5%2BnxKumPjdhRtOnMtcd0Zy30TwwSR8HcDbYirLhWQfzj1n4TmiLK%2F265ZT%2Bwg0z%2FlZkCl6kIBThLwh%2FR%2FXJ0%2BD032mwD6x%2Byg6tT91EvxI%2BdZRQr0OYQEXa5V9%2FMUUamYYHnFndfWdeGjlfUFzsY%2Bz1TQHM1GqkMfIzRJEtZWmGM8J0SBxPbxqOUiqb%2F6WgEHSmCN4PJ5y5cpX9W1QxZ1X1y3uXCoMwK7U%2B0K4qZZ1%2FPhri7YjAp88%2B9BY%2FADalmZGdFAcJmjv4T%2F1gE%2Fw3cpBeB%2FtZ0cB79uc3kT1OhMc%2BwgA4jocLV6uf7jeau5mwH6uxasJOAm02D3OcBSCRhXIjBluii8z0AmV5Kn%2BtNFnMR4zCtuJD1rmtrOyIooS%2BiDed4Rb54vigiXEVHx%2ByAmb5IchfdVM50WVk6%2Fh29jk38vN0XVM6D%2BFIFCP%2BDQfgXwg%2Bz0%2Frzv85%2FvnoPCCuKCuvK8a9127NmM3V216ZcIvQwQ8%2Bvq4NH9KyEi%2FxPYSAQmfkiBZcdNPsGptCiLUjDruK7EBjqkAefDxEx2XR%2Fd0izOrphXEzIVfX7wna0BCgurHMo1ewPkv3sprJcPQ6x%2BH3wcvYSODPhcA%2BmEJyVw%2BVgy9cFMECyhtuWazhsejQx7X%2FG%2FKy97ouoWwEIuQFtdQrMCBm7RC3NHQUPVhMG8LUdxfcQYfZocLMdf%2FYZU8ok6pfEU9BZNBXQjZMXdGdZi5Dzfu%2B3U4XlwqGtniz%2BqOuwvpY5lW0p9jDEy&X-Amz-Signature=0016b624ececab8f14698ad587d35ff36ebbe9975b024730bc10305c58b44814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL7LLEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvrJAfIfXnkWt9XM3aoG1p8wbjhRx%2FadewKOlgBt4YWAIhAM%2B2L9k1jr0okJxP%2Fr1DPJbK0j0%2FAiF0fL1r2O%2FbyI4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrK8WzKDzPa11mRWwq3AN%2BeebKvLreuVK4E%2BYY2N0RUIBCbGZH0i8Owtn9DnON2pER2xbPpvYbuDwE%2BlaEL6Vbkq4MzkB0%2B2rYCUxvrvYX7PUFDsG0Foh0ZUGdHGt5%2BnxKumPjdhRtOnMtcd0Zy30TwwSR8HcDbYirLhWQfzj1n4TmiLK%2F265ZT%2Bwg0z%2FlZkCl6kIBThLwh%2FR%2FXJ0%2BD032mwD6x%2Byg6tT91EvxI%2BdZRQr0OYQEXa5V9%2FMUUamYYHnFndfWdeGjlfUFzsY%2Bz1TQHM1GqkMfIzRJEtZWmGM8J0SBxPbxqOUiqb%2F6WgEHSmCN4PJ5y5cpX9W1QxZ1X1y3uXCoMwK7U%2B0K4qZZ1%2FPhri7YjAp88%2B9BY%2FADalmZGdFAcJmjv4T%2F1gE%2Fw3cpBeB%2FtZ0cB79uc3kT1OhMc%2BwgA4jocLV6uf7jeau5mwH6uxasJOAm02D3OcBSCRhXIjBluii8z0AmV5Kn%2BtNFnMR4zCtuJD1rmtrOyIooS%2BiDed4Rb54vigiXEVHx%2ByAmb5IchfdVM50WVk6%2Fh29jk38vN0XVM6D%2BFIFCP%2BDQfgXwg%2Bz0%2Frzv85%2FvnoPCCuKCuvK8a9127NmM3V216ZcIvQwQ8%2Bvq4NH9KyEi%2FxPYSAQmfkiBZcdNPsGptCiLUjDruK7EBjqkAefDxEx2XR%2Fd0izOrphXEzIVfX7wna0BCgurHMo1ewPkv3sprJcPQ6x%2BH3wcvYSODPhcA%2BmEJyVw%2BVgy9cFMECyhtuWazhsejQx7X%2FG%2FKy97ouoWwEIuQFtdQrMCBm7RC3NHQUPVhMG8LUdxfcQYfZocLMdf%2FYZU8ok6pfEU9BZNBXQjZMXdGdZi5Dzfu%2B3U4XlwqGtniz%2BqOuwvpY5lW0p9jDEy&X-Amz-Signature=a34a48516c83a10fbd63ef9a845374941b4d0e92db16c6f97b639d616100e932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL7LLEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvrJAfIfXnkWt9XM3aoG1p8wbjhRx%2FadewKOlgBt4YWAIhAM%2B2L9k1jr0okJxP%2Fr1DPJbK0j0%2FAiF0fL1r2O%2FbyI4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrK8WzKDzPa11mRWwq3AN%2BeebKvLreuVK4E%2BYY2N0RUIBCbGZH0i8Owtn9DnON2pER2xbPpvYbuDwE%2BlaEL6Vbkq4MzkB0%2B2rYCUxvrvYX7PUFDsG0Foh0ZUGdHGt5%2BnxKumPjdhRtOnMtcd0Zy30TwwSR8HcDbYirLhWQfzj1n4TmiLK%2F265ZT%2Bwg0z%2FlZkCl6kIBThLwh%2FR%2FXJ0%2BD032mwD6x%2Byg6tT91EvxI%2BdZRQr0OYQEXa5V9%2FMUUamYYHnFndfWdeGjlfUFzsY%2Bz1TQHM1GqkMfIzRJEtZWmGM8J0SBxPbxqOUiqb%2F6WgEHSmCN4PJ5y5cpX9W1QxZ1X1y3uXCoMwK7U%2B0K4qZZ1%2FPhri7YjAp88%2B9BY%2FADalmZGdFAcJmjv4T%2F1gE%2Fw3cpBeB%2FtZ0cB79uc3kT1OhMc%2BwgA4jocLV6uf7jeau5mwH6uxasJOAm02D3OcBSCRhXIjBluii8z0AmV5Kn%2BtNFnMR4zCtuJD1rmtrOyIooS%2BiDed4Rb54vigiXEVHx%2ByAmb5IchfdVM50WVk6%2Fh29jk38vN0XVM6D%2BFIFCP%2BDQfgXwg%2Bz0%2Frzv85%2FvnoPCCuKCuvK8a9127NmM3V216ZcIvQwQ8%2Bvq4NH9KyEi%2FxPYSAQmfkiBZcdNPsGptCiLUjDruK7EBjqkAefDxEx2XR%2Fd0izOrphXEzIVfX7wna0BCgurHMo1ewPkv3sprJcPQ6x%2BH3wcvYSODPhcA%2BmEJyVw%2BVgy9cFMECyhtuWazhsejQx7X%2FG%2FKy97ouoWwEIuQFtdQrMCBm7RC3NHQUPVhMG8LUdxfcQYfZocLMdf%2FYZU8ok6pfEU9BZNBXQjZMXdGdZi5Dzfu%2B3U4XlwqGtniz%2BqOuwvpY5lW0p9jDEy&X-Amz-Signature=a7be08b22d803e027ba7f953d98ec58ad323a289d95aebc3f102cdfaca2aa767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HWCLRN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoi5pZC2V9Oit0xQytmQ2VXmr8%2BjlvMBeRH6qMmd1QsAiEAnWJzszXrAiAkq2oZ5QCp%2Br6n05HHlrUfwtY3vSzCiIUqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDebWLjPt3rbJ%2F4N%2FSrcA%2BbO0E%2F0ICH3qWDJeyDdoQkDCxKfTsmCH66piJoWcfHXdM8GMpkk1XJD5mOsrl3qfQEsZMn5yKoyf2Rg1TCRQSwuLPKOR1U3kbLA3Vo8WIhWSL1oQzQHv6jsdKwNFdKJHzNNEnlcSud2pfAcZ4zhLdpAkZTJgYvpqH2r1CgbV%2F2uVR4%2FWo8u7Yf0D28uFA6h%2BviaX9TUe3%2FvubphNlupffU1lBqJWmH0BJau1%2B5dzUknIG9ObnpL%2F8fSKzcwq3X0mizyLryphvXRLDBNkiAJ789ssUeN354EDjAs4mIK2T9eMQujA19FS4ywVGlOwIX29K8gbo6B%2FeqAbNKKo0fCUWlzfX9Rb83WgY%2FoOTlRP9XnbN%2F3cHYFYGfmPAFhAINszN%2FoxBur8lALqqrh4rSFdSgr80N3mVS3TGEKl4JB2w2oV93p5Lm9EepiOLnwhsVMcK%2F55xT3ohMAMJ0jcxS3WQThbg4cWbfm%2FGk3855QC0wnn0a4xYIkTOSTm3qDru%2BExCI1TDfYmOqT8hu5RhG495%2BxKvB3%2FfE9vMYbVTUNR%2Fu6fTNsdyuwltnIv1pHbSI6KXQGvv%2FiNB9hgMyw8FN341UpQ34hsi8q50ckKD5A%2FJxZuyHE6Omhy8JIsjaSMIW4rsQGOqUBd%2F4bu53y0%2FxNMyjh2teSNm4wRpdSq8h0LSIyHGJAzalDTrKb3o6Q63tkVJ1H2FbU6oHu0ID%2FioFAPfjrOjXDRRnFy27jSCm4%2FcKdKFbd9oPOa4MRCHuudtHwcdRe8r88PZ1bNOywAWFuMSvEtqPO39%2B5RQJLhhuH0u7vf2DaypYo6xluVkvyhC1HAAO9e32J6m6DMGi6NowOxwAc2AFdEiprhI83&X-Amz-Signature=e86181a245ba46030b3c2b3947cf9a1a9abf88c9196f257c5c81cce99615f93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEF6HGDL%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD53jM4%2FsCBsp%2Bitf1w3sL3LwCq6WYFDvVa7jGQAxFBUQIgWDBI7LZEeiuaz1gKuq%2FHUTVPcxpV7TDEj%2FUEhqIYjQ8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEvJMMKXJ%2B9YPumACrcAyEmPnyF%2FwIEE4Tgi5a8uUGGSo%2FGfWiSgdf3zxpjE%2FZHv6vXJHgHMra26bGXOzU9qOmoj1cEclSdjMR4YzPFH5Qz7mKcsMVWKecDGqzfaFwqbvte2zufo2q4Ij7TVfrRWOuLvmCbMOmONIK6t9NljYTsOP68LbfijwWxPaFVZ7DxFEvybwntfD1WZEl6dqQu6PgoaLsE20LS357dUPI61XI8MQJ7SxA03HtJJANrOT4oaxPQqUkbmP5X6hEsley3iJl9FSM%2Bo%2FUpijZ5Iuxvo6vJFHENKuaISIDZDDcyDez%2BOXYoo%2FbT9sE%2BrQsJzNmUsnAxdBh7v9JxJNIsDaK55IC6kz7z4%2BksNHURTBAWODl38EJBDSQA7OCWOq6Kz2U4SQpGf%2B%2BzLIHc5jveaM%2BRN1xdK007P0EY3RfVGKwNlQ95hK2cecH2sXtRmNFe1EpeeVoY8QCufaI%2BwENbg3UM9ZWmx%2BbmuSB8Rm6F%2Fa%2F5DGGHLMNAlK96R1PQ1d%2FFKmc0UzgVHzIUt5%2BciCm7%2B9%2FmiVY1tb0ETOlc0rd61h7GH04BORUPoJVetBdZa3XEnkdRFN3ZmMtN0MG22S%2BjJ8guj45Qh4VxNAA0K5VAS%2Ff045WFtU87NGKBIZJr71QeMP63rsQGOqUB9ma69tZF04D9PmNmIxJNERUB5Z44lt3sRwHxxiwOeMsI1nYOzn6C2rViNhQAZ5WeDCEN%2BkrK5DC5Lq%2BJApTS%2BpV6Su7O%2BCPwhPdPytCwdp919PsH9At5doQdaqjsMJRS04RitVG7%2FN4ut%2B6vuAIefkmhs%2BS7zq2AQMJ%2FFthWfQFPVVcCquZa%2FfmFQ3Ws%2FnO5wEP26T6q%2F12pklAOe3ktKnvOmK4J&X-Amz-Signature=e26f9dbc69f8de7377c741ea07380800e3fed46445040176b82e659d0d6d82e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL7LLEZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvrJAfIfXnkWt9XM3aoG1p8wbjhRx%2FadewKOlgBt4YWAIhAM%2B2L9k1jr0okJxP%2Fr1DPJbK0j0%2FAiF0fL1r2O%2FbyI4nKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrK8WzKDzPa11mRWwq3AN%2BeebKvLreuVK4E%2BYY2N0RUIBCbGZH0i8Owtn9DnON2pER2xbPpvYbuDwE%2BlaEL6Vbkq4MzkB0%2B2rYCUxvrvYX7PUFDsG0Foh0ZUGdHGt5%2BnxKumPjdhRtOnMtcd0Zy30TwwSR8HcDbYirLhWQfzj1n4TmiLK%2F265ZT%2Bwg0z%2FlZkCl6kIBThLwh%2FR%2FXJ0%2BD032mwD6x%2Byg6tT91EvxI%2BdZRQr0OYQEXa5V9%2FMUUamYYHnFndfWdeGjlfUFzsY%2Bz1TQHM1GqkMfIzRJEtZWmGM8J0SBxPbxqOUiqb%2F6WgEHSmCN4PJ5y5cpX9W1QxZ1X1y3uXCoMwK7U%2B0K4qZZ1%2FPhri7YjAp88%2B9BY%2FADalmZGdFAcJmjv4T%2F1gE%2Fw3cpBeB%2FtZ0cB79uc3kT1OhMc%2BwgA4jocLV6uf7jeau5mwH6uxasJOAm02D3OcBSCRhXIjBluii8z0AmV5Kn%2BtNFnMR4zCtuJD1rmtrOyIooS%2BiDed4Rb54vigiXEVHx%2ByAmb5IchfdVM50WVk6%2Fh29jk38vN0XVM6D%2BFIFCP%2BDQfgXwg%2Bz0%2Frzv85%2FvnoPCCuKCuvK8a9127NmM3V216ZcIvQwQ8%2Bvq4NH9KyEi%2FxPYSAQmfkiBZcdNPsGptCiLUjDruK7EBjqkAefDxEx2XR%2Fd0izOrphXEzIVfX7wna0BCgurHMo1ewPkv3sprJcPQ6x%2BH3wcvYSODPhcA%2BmEJyVw%2BVgy9cFMECyhtuWazhsejQx7X%2FG%2FKy97ouoWwEIuQFtdQrMCBm7RC3NHQUPVhMG8LUdxfcQYfZocLMdf%2FYZU8ok6pfEU9BZNBXQjZMXdGdZi5Dzfu%2B3U4XlwqGtniz%2BqOuwvpY5lW0p9jDEy&X-Amz-Signature=f50fcdc04dfcdba6bccb34e41cddf2d49d238349eec9e7fe0bb7ec9333485eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
